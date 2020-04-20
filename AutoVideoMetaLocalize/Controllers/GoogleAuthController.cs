﻿using System;
using System.ComponentModel.DataAnnotations;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using Google.Apis.Auth.OAuth2.Flows;
using Google.Apis.Auth.OAuth2.Responses;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using AutoVideoMetaLocalize.Utilities;
using Google.Apis.Auth.OAuth2.Requests;

namespace AutoVideoMetaLocalize.Controllers {
	[Route("api/[controller]")]
	[ApiController]
	public class GoogleAuthController : ControllerBase {
		private const string AUTHENTICATION_TYPE = "AutoVideoMetaLocalize";
		private const string SIGN_REDIRECT_URI_KEY = "auth-return-url";
		private const string SIGN_REDIRECT_URI_DEFAULT = "~/";

		//"https://www.googleapis.com/auth/youtube.upload",
		//"https://www.googleapis.com/auth/youtube",
		//"https://www.googleapis.com/auth/cloud-translation",

		private readonly GoogleAuthorizationCodeFlow _flow;

		public GoogleAuthController(GoogleAuthorizationCodeFlow flow) {
			_flow = flow;
		}

		/// <summary>
		/// Gets the redirect uri for the OAuth2 request.
		/// </summary>
		private string OAuthRedirectUri => Url.Action(nameof(GoogleSignIn), null, null, Request.Scheme);

		/// <summary>
		/// Gets or sets the redirect uri for the sign in and sign out actions.
		/// Used to ensure that the uri is a local uri.
		/// </summary>
		public string SignInSignOutRedirectUri {
			get {
				string uri = Request.Cookies[SIGN_REDIRECT_URI_KEY];
				return Url.IsLocalUrl(uri) ? uri : SIGN_REDIRECT_URI_DEFAULT;
			}

			set {
				if (Url.IsLocalUrl(value)) {
					Response.Cookies.Append(SIGN_REDIRECT_URI_KEY, value);
				}
			}
		}

		/// <summary>
		/// Sets the uri to return to after sign in and sign out.
		/// </summary>
		[HttpPost(nameof(SetSignRedirectUri))]
		public IActionResult SetSignRedirectUri(string uri) {
			if (!Url.IsLocalUrl(uri)) {
				return BadRequest($"{nameof(uri)} is not a valid local uri.");
			}

			SignInSignOutRedirectUri = uri;
			return Ok();
		}

		/// <summary>
		/// Gets the uri to which to redirect the user to sign-in to.
		/// </summary>
		[HttpGet(nameof(GetAuthorizationRequestUrl))]
		public ActionResult<string> GetAuthorizationRequestUrl([FromQuery] string scope) {
			AuthorizationCodeRequestUrl authorizationCodeRequestUrl = _flow.CreateAuthorizationCodeRequest(OAuthRedirectUri);
			authorizationCodeRequestUrl.Scope = scope;
			Uri authorizationUrl = authorizationCodeRequestUrl.Build();
			return Redirect(authorizationUrl.AbsoluteUri);
		}

		/// <summary>
		/// Handles the OAuth2 callback from the google sign in.
		/// </summary>
		[HttpGet(nameof(GoogleSignIn))]
		public async Task<SignInResult> GoogleSignIn([Required] string code) {
			string userTokenKey = Guid.NewGuid().ToString();

			TokenResponse token = await _flow.ExchangeCodeForTokenAsync(
				userTokenKey, code, OAuthRedirectUri, CancellationToken.None);

			#region Claims Principle
			ClaimsPrincipal principal = null;
			#endregion

			#region Authentication Properties
			DateTimeOffset expiresUtc = token.IssuedUtc
				.AddSeconds(token.ExpiresInSeconds ?? (default));
			bool hasRefreshToken = token.RefreshToken != null;

			AuthenticationProperties authenticationProperties = new AuthenticationProperties {
				AllowRefresh = hasRefreshToken,
				ExpiresUtc = expiresUtc,
				IsPersistent = true,
				IssuedUtc = token.IssuedUtc,
				RedirectUri = SignInSignOutRedirectUri,
			};
			#endregion

			return new SignInResult(CookieAuthenticationDefaults.AuthenticationScheme, principal, authenticationProperties);
		}

		/// <summary>
		/// 
		/// </summary>
		/// <param name="token"></param>
		/// <param name="userTokenKey"></param>
		/// <returns></returns>
		protected ClaimsPrincipal GetClaimsPrinciple(TokenResponse token, string userTokenKey) {
			ClaimsIdentity identity = new ClaimsIdentity(AUTHENTICATION_TYPE);
			identity.AddClaim(new Claim(AdditionalClaimTypes.TokenResponseKey, userTokenKey));
			return new ClaimsPrincipal(identity);
		}

		/// <summary>
		/// Signs a user out of the application.
		/// </summary>
		[HttpGet(nameof(GoogleSignOut))]
		[Authorize]
		public async Task<SignOutResult> GoogleSignOut() {
			#region Google Revoke Token
			string userTokenKey = User.FindFirstValue(AdditionalClaimTypes.TokenResponseKey);
			TokenResponse token = await _flow.LoadTokenAsync(userTokenKey, CancellationToken.None);
			await _flow.RevokeTokenAsync(userTokenKey, token.AccessToken, CancellationToken.None);
			#endregion

			return new SignOutResult(CookieAuthenticationDefaults.AuthenticationScheme, new AuthenticationProperties {
				RedirectUri = SignInSignOutRedirectUri,
			});
		}
	}
}