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
import {
    AccessPolicy,
    AccessPolicyFromJSON,
    AccessPolicyFromJSONTyped,
    AccessPolicyToJSON,
} from './';

/**
 * 
 * @export
 * @interface VideoMonetizationDetails
 */
export interface VideoMonetizationDetails {
    /**
     * 
     * @type {AccessPolicy}
     * @memberof VideoMonetizationDetails
     */
    access?: AccessPolicy;
    /**
     * 
     * @type {string}
     * @memberof VideoMonetizationDetails
     */
    eTag?: string | null;
}

export function VideoMonetizationDetailsFromJSON(json: any): VideoMonetizationDetails {
    return VideoMonetizationDetailsFromJSONTyped(json, false);
}

export function VideoMonetizationDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): VideoMonetizationDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'access': !exists(json, 'access') ? undefined : AccessPolicyFromJSON(json['access']),
        'eTag': !exists(json, 'eTag') ? undefined : json['eTag'],
    };
}

export function VideoMonetizationDetailsToJSON(value?: VideoMonetizationDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'access': AccessPolicyToJSON(value.access),
        'eTag': value.eTag,
    };
}


