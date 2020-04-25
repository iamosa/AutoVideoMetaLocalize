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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TokenResponse
 */
export interface TokenResponse {
    /**
     * 
     * @type {string}
     * @memberof TokenResponse
     */
    accessToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TokenResponse
     */
    tokenType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof TokenResponse
     */
    expiresInSeconds?: number | null;
    /**
     * 
     * @type {string}
     * @memberof TokenResponse
     */
    refreshToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TokenResponse
     */
    scope?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TokenResponse
     */
    idToken?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof TokenResponse
     */
    issued?: Date;
    /**
     * 
     * @type {Date}
     * @memberof TokenResponse
     */
    issuedUtc?: Date;
}

export function TokenResponseFromJSON(json: any): TokenResponse {
    return TokenResponseFromJSONTyped(json, false);
}

export function TokenResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'tokenType': !exists(json, 'tokenType') ? undefined : json['tokenType'],
        'expiresInSeconds': !exists(json, 'expiresInSeconds') ? undefined : json['expiresInSeconds'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
        'idToken': !exists(json, 'idToken') ? undefined : json['idToken'],
        'issued': !exists(json, 'issued') ? undefined : (new Date(json['issued'])),
        'issuedUtc': !exists(json, 'issuedUtc') ? undefined : (new Date(json['issuedUtc'])),
    };
}

export function TokenResponseToJSON(value?: TokenResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accessToken': value.accessToken,
        'tokenType': value.tokenType,
        'expiresInSeconds': value.expiresInSeconds,
        'refreshToken': value.refreshToken,
        'scope': value.scope,
        'idToken': value.idToken,
        'issued': value.issued === undefined ? undefined : (value.issued.toISOString()),
        'issuedUtc': value.issuedUtc === undefined ? undefined : (value.issuedUtc.toISOString()),
    };
}


