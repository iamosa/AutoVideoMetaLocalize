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
    VideoSuggestionsTagSuggestion,
    VideoSuggestionsTagSuggestionFromJSON,
    VideoSuggestionsTagSuggestionFromJSONTyped,
    VideoSuggestionsTagSuggestionToJSON,
} from './';

/**
 * 
 * @export
 * @interface VideoSuggestions
 */
export interface VideoSuggestions {
    /**
     * 
     * @type {Array<string>}
     * @memberof VideoSuggestions
     */
    editorSuggestions?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof VideoSuggestions
     */
    processingErrors?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof VideoSuggestions
     */
    processingHints?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof VideoSuggestions
     */
    processingWarnings?: Array<string> | null;
    /**
     * 
     * @type {Array<VideoSuggestionsTagSuggestion>}
     * @memberof VideoSuggestions
     */
    tagSuggestions?: Array<VideoSuggestionsTagSuggestion> | null;
    /**
     * 
     * @type {string}
     * @memberof VideoSuggestions
     */
    eTag?: string | null;
}

export function VideoSuggestionsFromJSON(json: any): VideoSuggestions {
    return VideoSuggestionsFromJSONTyped(json, false);
}

export function VideoSuggestionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): VideoSuggestions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'editorSuggestions': !exists(json, 'editorSuggestions') ? undefined : json['editorSuggestions'],
        'processingErrors': !exists(json, 'processingErrors') ? undefined : json['processingErrors'],
        'processingHints': !exists(json, 'processingHints') ? undefined : json['processingHints'],
        'processingWarnings': !exists(json, 'processingWarnings') ? undefined : json['processingWarnings'],
        'tagSuggestions': !exists(json, 'tagSuggestions') ? undefined : (json['tagSuggestions'] === null ? null : (json['tagSuggestions'] as Array<any>).map(VideoSuggestionsTagSuggestionFromJSON)),
        'eTag': !exists(json, 'eTag') ? undefined : json['eTag'],
    };
}

export function VideoSuggestionsToJSON(value?: VideoSuggestions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'editorSuggestions': value.editorSuggestions,
        'processingErrors': value.processingErrors,
        'processingHints': value.processingHints,
        'processingWarnings': value.processingWarnings,
        'tagSuggestions': value.tagSuggestions === undefined ? undefined : (value.tagSuggestions === null ? null : (value.tagSuggestions as Array<any>).map(VideoSuggestionsTagSuggestionToJSON)),
        'eTag': value.eTag,
    };
}


