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

export interface ApiAccountGoogleSigninGetRequest {
    code: string;
}

export interface ApiAccountLoginGetRequest {
    returnUrl?: string | null;
}

export interface ApiAccountLogoutGetRequest {
    returnUrl?: string | null;
}

/**
 * no description
 */
export class AccountApi extends runtime.BaseAPI {

    /**
     */
    async apiAccountGoogleSigninGetRaw(requestParameters: ApiAccountGoogleSigninGetRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling apiAccountGoogleSigninGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.code !== undefined) {
            queryParameters['code'] = requestParameters.code;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/Account/google-signin`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiAccountGoogleSigninGet(requestParameters: ApiAccountGoogleSigninGetRequest): Promise<void> {
        await this.apiAccountGoogleSigninGetRaw(requestParameters);
    }

    /**
     */
    async apiAccountLoginGetRaw(requestParameters: ApiAccountLoginGetRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.returnUrl !== undefined) {
            queryParameters['returnUrl'] = requestParameters.returnUrl;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/Account/Login`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiAccountLoginGet(requestParameters: ApiAccountLoginGetRequest): Promise<void> {
        await this.apiAccountLoginGetRaw(requestParameters);
    }

    /**
     */
    async apiAccountLogoutGetRaw(requestParameters: ApiAccountLogoutGetRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.returnUrl !== undefined) {
            queryParameters['returnUrl'] = requestParameters.returnUrl;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/Account/Logout`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiAccountLogoutGet(requestParameters: ApiAccountLogoutGetRequest): Promise<void> {
        await this.apiAccountLogoutGetRaw(requestParameters);
    }

}
