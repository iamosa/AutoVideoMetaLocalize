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
    TokenResponse,
    TokenResponseFromJSON,
    TokenResponseToJSON,
} from '../models';

export interface ApiGoogleAuthGetAuthorizationRequestUrlGetRequest {
    scope?: string | null;
}

export interface ApiGoogleAuthGoogleSignInGetRequest {
    code: string;
}

export interface ApiGoogleAuthSetSignRedirectUriPostRequest {
    uri?: string | null;
}

/**
 * no description
 */
export class GoogleAuthApi extends runtime.BaseAPI {

    /**
     */
    async apiGoogleAuthGetAuthorizationRequestUrlGetRaw(requestParameters: ApiGoogleAuthGetAuthorizationRequestUrlGetRequest): Promise<runtime.ApiResponse<string>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.scope !== undefined) {
            queryParameters['scope'] = requestParameters.scope;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/GoogleAuth/GetAuthorizationRequestUrl`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async apiGoogleAuthGetAuthorizationRequestUrlGet(requestParameters: ApiGoogleAuthGetAuthorizationRequestUrlGetRequest): Promise<string> {
        const response = await this.apiGoogleAuthGetAuthorizationRequestUrlGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async apiGoogleAuthGetTokenInformationGetRaw(): Promise<runtime.ApiResponse<TokenResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/GoogleAuth/GetTokenInformation`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiGoogleAuthGetTokenInformationGet(): Promise<TokenResponse> {
        const response = await this.apiGoogleAuthGetTokenInformationGetRaw();
        return await response.value();
    }

    /**
     */
    async apiGoogleAuthGoogleSignInGetRaw(requestParameters: ApiGoogleAuthGoogleSignInGetRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling apiGoogleAuthGoogleSignInGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.code !== undefined) {
            queryParameters['code'] = requestParameters.code;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/GoogleAuth/GoogleSignIn`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiGoogleAuthGoogleSignInGet(requestParameters: ApiGoogleAuthGoogleSignInGetRequest): Promise<void> {
        await this.apiGoogleAuthGoogleSignInGetRaw(requestParameters);
    }

    /**
     */
    async apiGoogleAuthGoogleSignOutGetRaw(): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/GoogleAuth/GoogleSignOut`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiGoogleAuthGoogleSignOutGet(): Promise<void> {
        await this.apiGoogleAuthGoogleSignOutGetRaw();
    }

    /**
     */
    async apiGoogleAuthSetSignRedirectUriPostRaw(requestParameters: ApiGoogleAuthSetSignRedirectUriPostRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.uri !== undefined) {
            queryParameters['uri'] = requestParameters.uri;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/GoogleAuth/SetSignRedirectUri`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiGoogleAuthSetSignRedirectUriPost(requestParameters: ApiGoogleAuthSetSignRedirectUriPostRequest): Promise<void> {
        await this.apiGoogleAuthSetSignRedirectUriPostRaw(requestParameters);
    }

}
