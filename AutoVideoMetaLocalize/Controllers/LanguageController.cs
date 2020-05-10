﻿using System.Collections.Generic;
using System.Threading.Tasks;
using AutoVideoMetaLocalize.Utilities;
using Google.Apis.YouTube.v3;
using Google.Apis.YouTube.v3.Data;
using Google.Cloud.Translate.V3;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;
using System.Linq;

namespace AutoVideoMetaLocalize.Controllers {
	[Route("api/[controller]")]
	[ApiController]
	public class LanguageController : ControllerBase {
		private readonly GoogleCloudTranslateManager translate;
		private readonly YouTubeServiceAccessor serviceAccessor;

		public LanguageController(GoogleCloudTranslateManager translate, YouTubeServiceAccessor serviceAccessor) {
			this.translate = translate;
			this.serviceAccessor = serviceAccessor;
		}

		[HttpGet("YouTube-I18nLanguages")]
		[Authorize]
		public async Task<ActionResult<IEnumerable<I18nLanguageSnippet>>> GetYouTubeLanguages() {
			YouTubeService service = await serviceAccessor.InitializeServiceAsync();
			I18nLanguagesResource.ListRequest req = service.I18nLanguages.List("snippet");
			I18nLanguageListResponse res = await req.ExecuteAsync();
			return new ActionResult<IEnumerable<I18nLanguageSnippet>>(res.Items.Select(elem => elem.Snippet));
		}

		[HttpGet("GoogleTranslate-SupportedLanguages")]
		public async Task<ActionResult<IList<SupportedLanguage>>> GetGoogleTranslateLanguages() {
			string[] displayLanguageCodeList = { "en" };

			#region Accept Header
			if (Request.Headers.TryGetValue("Accept-Language", out StringValues value)) {
				string[] accept_language_values = value.ToString().Split(',');
			}
			#endregion

			int i = 0; // iterate over display language code list
			IList<SupportedLanguage> response = null;
			while (response == null) {
				string displayLanguageCode = (i < displayLanguageCodeList.Length) ? displayLanguageCodeList[i] : null;

				if (displayLanguageCode == null) {
					break;
				}

				try {
					response = await translate.GetSupportedLanguagesAsync(new GetSupportedLanguagesRequest {
						DisplayLanguageCode = displayLanguageCode,
					});
				} catch (Grpc.Core.RpcException) {
					i++;
				}
			}

			return new ActionResult<IList<SupportedLanguage>>(response);
		}
	}
}