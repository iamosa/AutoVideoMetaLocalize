/* tslint:disable */
/* eslint-disable */
/**
 * AutoVideoMetaLocalize
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ChannelListResponse,
    ChannelListResponseFromJSON,
    ChannelListResponseToJSON,
} from '../models';

export interface ApiYouTubeChannelIdSnippetContentdetailsWhereMineGetRequest {
    pageToken?: string | null;
    maxResults?: number | null;
}

/**
 * no description
 */
export class YouTubeChannelApi extends runtime.BaseAPI {

    /**
     */
    async apiYouTubeChannelIdSnippetContentdetailsWhereMineGetRaw(requestParameters: ApiYouTubeChannelIdSnippetContentdetailsWhereMineGetRequest): Promise<runtime.ApiResponse<ChannelListResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.pageToken !== undefined) {
            queryParameters['PageToken'] = requestParameters.pageToken;
        }

        if (requestParameters.maxResults !== undefined) {
            queryParameters['MaxResults'] = requestParameters.maxResults;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/YouTubeChannel/id-snippet-contentdetails-where-mine`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ChannelListResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiYouTubeChannelIdSnippetContentdetailsWhereMineGet(requestParameters: ApiYouTubeChannelIdSnippetContentdetailsWhereMineGetRequest): Promise<ChannelListResponse> {
        const response = await this.apiYouTubeChannelIdSnippetContentdetailsWhereMineGetRaw(requestParameters);
        return await response.value();
    }

}
