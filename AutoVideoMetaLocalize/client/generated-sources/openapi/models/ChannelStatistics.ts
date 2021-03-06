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
 * @interface ChannelStatistics
 */
export interface ChannelStatistics {
    /**
     * 
     * @type {number}
     * @memberof ChannelStatistics
     */
    commentCount?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof ChannelStatistics
     */
    hiddenSubscriberCount?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof ChannelStatistics
     */
    subscriberCount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ChannelStatistics
     */
    videoCount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ChannelStatistics
     */
    viewCount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ChannelStatistics
     */
    eTag?: string | null;
}

export function ChannelStatisticsFromJSON(json: any): ChannelStatistics {
    return ChannelStatisticsFromJSONTyped(json, false);
}

export function ChannelStatisticsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelStatistics {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'commentCount': !exists(json, 'commentCount') ? undefined : json['commentCount'],
        'hiddenSubscriberCount': !exists(json, 'hiddenSubscriberCount') ? undefined : json['hiddenSubscriberCount'],
        'subscriberCount': !exists(json, 'subscriberCount') ? undefined : json['subscriberCount'],
        'videoCount': !exists(json, 'videoCount') ? undefined : json['videoCount'],
        'viewCount': !exists(json, 'viewCount') ? undefined : json['viewCount'],
        'eTag': !exists(json, 'eTag') ? undefined : json['eTag'],
    };
}

export function ChannelStatisticsToJSON(value?: ChannelStatistics | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'commentCount': value.commentCount,
        'hiddenSubscriberCount': value.hiddenSubscriberCount,
        'subscriberCount': value.subscriberCount,
        'videoCount': value.videoCount,
        'viewCount': value.viewCount,
        'eTag': value.eTag,
    };
}


