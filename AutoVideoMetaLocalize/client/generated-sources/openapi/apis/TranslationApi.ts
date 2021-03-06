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

export interface ApiTranslationGetRequest {
    targetLanguageCode: string;
    sourceLanguageCode: string;
    text?: string | null;
}

/**
 * no description
 */
export class TranslationApi extends runtime.BaseAPI {

    /**
     */
    async apiTranslationGetRaw(requestParameters: ApiTranslationGetRequest): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.targetLanguageCode === null || requestParameters.targetLanguageCode === undefined) {
            throw new runtime.RequiredError('targetLanguageCode','Required parameter requestParameters.targetLanguageCode was null or undefined when calling apiTranslationGet.');
        }

        if (requestParameters.sourceLanguageCode === null || requestParameters.sourceLanguageCode === undefined) {
            throw new runtime.RequiredError('sourceLanguageCode','Required parameter requestParameters.sourceLanguageCode was null or undefined when calling apiTranslationGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.targetLanguageCode !== undefined) {
            queryParameters['targetLanguageCode'] = requestParameters.targetLanguageCode;
        }

        if (requestParameters.sourceLanguageCode !== undefined) {
            queryParameters['sourceLanguageCode'] = requestParameters.sourceLanguageCode;
        }

        if (requestParameters.text !== undefined) {
            queryParameters['text'] = requestParameters.text;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/Translation`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async apiTranslationGet(requestParameters: ApiTranslationGetRequest): Promise<string> {
        const response = await this.apiTranslationGetRaw(requestParameters);
        return await response.value();
    }

}
