﻿using AutoVideoMetaLocalize.Models;
using AutoVideoMetaLocalize.Utilities;
using Google;
using Google.Apis.YouTube.v3;
using Google.Apis.YouTube.v3.Data;
using Google.Cloud.Translate.V3;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AutoVideoMetaLocalize.Controllers {
	[Authorize]
	[Route("api/[controller]")]
	[ApiController]
	public class YouTubeVideoController : ControllerBase {
		private const string LOCALIZE_PART = "id,snippet,localizations";

		private readonly YouTubeServiceAccessor serviceAccessor;
		private readonly GoogleCloudTranslateManager translate;

		public YouTubeVideoController(YouTubeServiceAccessor serviceAccessor, GoogleCloudTranslateManager translate) {
			this.serviceAccessor = serviceAccessor;
			this.translate = translate;
		}

		[HttpGet("List")]
		public async Task<ActionResult<VideoListResponse>> List([Required, FromQuery] AppVideoListRequest request) {
			YouTubeService service = await serviceAccessor.InitializeServiceAsync();
			VideosResource.ListRequest requestActual = request.ToActualRequest(service);

			try {
				VideoListResponse response = await requestActual.ExecuteAsync();
				return new ActionResult<VideoListResponse>(response);
			} catch (GoogleApiException ex) {
				return StatusCode((int) ex.HttpStatusCode, ex.Message);
			}
		}

		[HttpPost("Update")]
		public async Task<ActionResult<Video>> Update([Required, FromForm] Video video, [Required, FromForm] string part) {
			if (video is null)
				throw new ArgumentNullException(nameof(video));
			if (string.IsNullOrEmpty(part))
				throw new ArgumentException("message", nameof(part));

			//throw new Exception($"id: {video.Id} || localization: {localizationsToString(video)} || snippet: {video.Snippet}");

			YouTubeService service = await serviceAccessor.InitializeServiceAsync();
			VideosResource.UpdateRequest request = service.Videos.Update(video, part);

			try {
				Video response = await request.ExecuteAsync();
				return new ActionResult<Video>(response);
			} catch (GoogleApiException ex) {
				return StatusCode((int) ex.HttpStatusCode, ex.Message);
			}
		}

		private enum CONTENTS_INDEX {
			TITLE = 0,
			DESCRIPTION = 1,
		}

		[HttpPost("Localize")]
		public async Task<ActionResult<Video>> Localize(
			[Required, FromForm] string id, [Required, FromForm] string language) {
			#region Fetch
			if (id is null)
				throw new ArgumentNullException(nameof(id));

			YouTubeService service = await serviceAccessor.InitializeServiceAsync();
			VideosResource.ListRequest requestVideoList = service.Videos.List(LOCALIZE_PART);
			requestVideoList.MaxResults = 1;
			requestVideoList.Id = id;

			Video video;
			try {
				VideoListResponse responseVideoList = await requestVideoList.ExecuteAsync();
				video = responseVideoList.Items.Count > 0 ? responseVideoList.Items[0] : null;
			} catch (GoogleApiException ex) {
				return StatusCode((int) ex.HttpStatusCode, ex.Message);
			}
			#endregion


			#region Translate
			if (video is null)
				throw new ArgumentNullException(nameof(video));

			if (video.Snippet is null)
				throw new ArgumentNullException(nameof(video.Snippet));

			video.Snippet.DefaultLanguage ??= "en";
			video.Snippet.PublishedAt = null; // do not set the publish date

			string[] contents = new string[2];
			contents[(int) CONTENTS_INDEX.TITLE] = video.Snippet.Title;
			contents[(int) CONTENTS_INDEX.DESCRIPTION] = video.Snippet.Description;

			foreach (string languageCode in language.Split(',')) {
				// setters for request prevent null values
				TranslateTextRequest requestTranslateText = new TranslateTextRequest {
					TargetLanguageCode = languageCode,
					SourceLanguageCode = video.Snippet.DefaultLanguage,
				};

				requestTranslateText.Contents.Add(contents);

				IList<Translation> responseTranslateText = await translate.TranslateTextAsync(requestTranslateText);

				Translation translationTitle = responseTranslateText[(int) CONTENTS_INDEX.TITLE];
				Translation translationDescription = responseTranslateText[(int) CONTENTS_INDEX.DESCRIPTION];

				VideoLocalization localization = new VideoLocalization {
					Title = translationTitle.TranslatedText,
					Description = translationDescription.TranslatedText,
				};

				IDictionary<string, VideoLocalization> localizations = video.Localizations ?? new Dictionary<string, VideoLocalization>();
				localizations[languageCode] = localization;
				video.Localizations = localizations;
			}
			#endregion

			#region Update
			VideosResource.UpdateRequest requestVideoUpdate = service.Videos.Update(video, LOCALIZE_PART);

			try {
				Video responseVideoUpdate = await requestVideoUpdate.ExecuteAsync();
				return new ActionResult<Video>(responseVideoUpdate);
			} catch (GoogleApiException ex) {
				return StatusCode((int) ex.HttpStatusCode, ex.Message);
			}
			#endregion
		}
	}
}