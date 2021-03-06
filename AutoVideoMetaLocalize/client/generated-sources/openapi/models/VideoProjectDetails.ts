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
 * @interface VideoProjectDetails
 */
export interface VideoProjectDetails {
    /**
     * 
     * @type {Array<string>}
     * @memberof VideoProjectDetails
     */
    tags?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof VideoProjectDetails
     */
    eTag?: string | null;
}

export function VideoProjectDetailsFromJSON(json: any): VideoProjectDetails {
    return VideoProjectDetailsFromJSONTyped(json, false);
}

export function VideoProjectDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): VideoProjectDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'eTag': !exists(json, 'eTag') ? undefined : json['eTag'],
    };
}

export function VideoProjectDetailsToJSON(value?: VideoProjectDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tags': value.tags,
        'eTag': value.eTag,
    };
}


