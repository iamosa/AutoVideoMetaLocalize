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
 * @interface AccessPolicy
 */
export interface AccessPolicy {
    /**
     * 
     * @type {boolean}
     * @memberof AccessPolicy
     */
    allowed?: boolean | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof AccessPolicy
     */
    exception?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof AccessPolicy
     */
    eTag?: string | null;
}

export function AccessPolicyFromJSON(json: any): AccessPolicy {
    return AccessPolicyFromJSONTyped(json, false);
}

export function AccessPolicyFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccessPolicy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowed': !exists(json, 'allowed') ? undefined : json['allowed'],
        'exception': !exists(json, 'exception') ? undefined : json['exception'],
        'eTag': !exists(json, 'eTag') ? undefined : json['eTag'],
    };
}

export function AccessPolicyToJSON(value?: AccessPolicy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allowed': value.allowed,
        'exception': value.exception,
        'eTag': value.eTag,
    };
}


