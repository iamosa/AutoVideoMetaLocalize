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
    VideoProcessingDetailsProcessingProgress,
    VideoProcessingDetailsProcessingProgressFromJSON,
    VideoProcessingDetailsProcessingProgressFromJSONTyped,
    VideoProcessingDetailsProcessingProgressToJSON,
} from './';

/**
 * 
 * @export
 * @interface VideoProcessingDetails
 */
export interface VideoProcessingDetails {
    /**
     * 
     * @type {string}
     * @memberof VideoProcessingDetails
     */
    editorSuggestionsAvailability?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VideoProcessingDetails
     */
    fileDetailsAvailability?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VideoProcessingDetails
     */
    processingFailureReason?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VideoProcessingDetails
     */
    processingIssuesAvailability?: string | null;
    /**
     * 
     * @type {VideoProcessingDetailsProcessingProgress}
     * @memberof VideoProcessingDetails
     */
    processingProgress?: VideoProcessingDetailsProcessingProgress;
    /**
     * 
     * @type {string}
     * @memberof VideoProcessingDetails
     */
    processingStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VideoProcessingDetails
     */
    tagSuggestionsAvailability?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VideoProcessingDetails
     */
    thumbnailsAvailability?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VideoProcessingDetails
     */
    eTag?: string | null;
}

export function VideoProcessingDetailsFromJSON(json: any): VideoProcessingDetails {
    return VideoProcessingDetailsFromJSONTyped(json, false);
}

export function VideoProcessingDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): VideoProcessingDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'editorSuggestionsAvailability': !exists(json, 'editorSuggestionsAvailability') ? undefined : json['editorSuggestionsAvailability'],
        'fileDetailsAvailability': !exists(json, 'fileDetailsAvailability') ? undefined : json['fileDetailsAvailability'],
        'processingFailureReason': !exists(json, 'processingFailureReason') ? undefined : json['processingFailureReason'],
        'processingIssuesAvailability': !exists(json, 'processingIssuesAvailability') ? undefined : json['processingIssuesAvailability'],
        'processingProgress': !exists(json, 'processingProgress') ? undefined : VideoProcessingDetailsProcessingProgressFromJSON(json['processingProgress']),
        'processingStatus': !exists(json, 'processingStatus') ? undefined : json['processingStatus'],
        'tagSuggestionsAvailability': !exists(json, 'tagSuggestionsAvailability') ? undefined : json['tagSuggestionsAvailability'],
        'thumbnailsAvailability': !exists(json, 'thumbnailsAvailability') ? undefined : json['thumbnailsAvailability'],
        'eTag': !exists(json, 'eTag') ? undefined : json['eTag'],
    };
}

export function VideoProcessingDetailsToJSON(value?: VideoProcessingDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'editorSuggestionsAvailability': value.editorSuggestionsAvailability,
        'fileDetailsAvailability': value.fileDetailsAvailability,
        'processingFailureReason': value.processingFailureReason,
        'processingIssuesAvailability': value.processingIssuesAvailability,
        'processingProgress': VideoProcessingDetailsProcessingProgressToJSON(value.processingProgress),
        'processingStatus': value.processingStatus,
        'tagSuggestionsAvailability': value.tagSuggestionsAvailability,
        'thumbnailsAvailability': value.thumbnailsAvailability,
        'eTag': value.eTag,
    };
}


