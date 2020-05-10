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
 * @interface VideoProcessingDetailsProcessingProgress
 */
export interface VideoProcessingDetailsProcessingProgress {
    /**
     * 
     * @type {number}
     * @memberof VideoProcessingDetailsProcessingProgress
     */
    partsProcessed?: number | null;
    /**
     * 
     * @type {number}
     * @memberof VideoProcessingDetailsProcessingProgress
     */
    partsTotal?: number | null;
    /**
     * 
     * @type {number}
     * @memberof VideoProcessingDetailsProcessingProgress
     */
    timeLeftMs?: number | null;
    /**
     * 
     * @type {string}
     * @memberof VideoProcessingDetailsProcessingProgress
     */
    eTag?: string | null;
}

export function VideoProcessingDetailsProcessingProgressFromJSON(json: any): VideoProcessingDetailsProcessingProgress {
    return VideoProcessingDetailsProcessingProgressFromJSONTyped(json, false);
}

export function VideoProcessingDetailsProcessingProgressFromJSONTyped(json: any, ignoreDiscriminator: boolean): VideoProcessingDetailsProcessingProgress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'partsProcessed': !exists(json, 'partsProcessed') ? undefined : json['partsProcessed'],
        'partsTotal': !exists(json, 'partsTotal') ? undefined : json['partsTotal'],
        'timeLeftMs': !exists(json, 'timeLeftMs') ? undefined : json['timeLeftMs'],
        'eTag': !exists(json, 'eTag') ? undefined : json['eTag'],
    };
}

export function VideoProcessingDetailsProcessingProgressToJSON(value?: VideoProcessingDetailsProcessingProgress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'partsProcessed': value.partsProcessed,
        'partsTotal': value.partsTotal,
        'timeLeftMs': value.timeLeftMs,
        'eTag': value.eTag,
    };
}

