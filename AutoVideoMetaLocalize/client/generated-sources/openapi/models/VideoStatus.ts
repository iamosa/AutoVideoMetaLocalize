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
 * @interface VideoStatus
 */
export interface VideoStatus {
    /**
     * 
     * @type {boolean}
     * @memberof VideoStatus
     */
    embeddable?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof VideoStatus
     */
    failureReason?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VideoStatus
     */
    license?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof VideoStatus
     */
    madeForKids?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof VideoStatus
     */
    privacyStatus?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof VideoStatus
     */
    publicStatsViewable?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof VideoStatus
     */
    publishAtRaw?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof VideoStatus
     */
    publishAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof VideoStatus
     */
    rejectionReason?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof VideoStatus
     */
    selfDeclaredMadeForKids?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof VideoStatus
     */
    uploadStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VideoStatus
     */
    eTag?: string | null;
}

export function VideoStatusFromJSON(json: any): VideoStatus {
    return VideoStatusFromJSONTyped(json, false);
}

export function VideoStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): VideoStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'embeddable': !exists(json, 'embeddable') ? undefined : json['embeddable'],
        'failureReason': !exists(json, 'failureReason') ? undefined : json['failureReason'],
        'license': !exists(json, 'license') ? undefined : json['license'],
        'madeForKids': !exists(json, 'madeForKids') ? undefined : json['madeForKids'],
        'privacyStatus': !exists(json, 'privacyStatus') ? undefined : json['privacyStatus'],
        'publicStatsViewable': !exists(json, 'publicStatsViewable') ? undefined : json['publicStatsViewable'],
        'publishAtRaw': !exists(json, 'publishAtRaw') ? undefined : json['publishAtRaw'],
        'publishAt': !exists(json, 'publishAt') ? undefined : (json['publishAt'] === null ? null : new Date(json['publishAt'])),
        'rejectionReason': !exists(json, 'rejectionReason') ? undefined : json['rejectionReason'],
        'selfDeclaredMadeForKids': !exists(json, 'selfDeclaredMadeForKids') ? undefined : json['selfDeclaredMadeForKids'],
        'uploadStatus': !exists(json, 'uploadStatus') ? undefined : json['uploadStatus'],
        'eTag': !exists(json, 'eTag') ? undefined : json['eTag'],
    };
}

export function VideoStatusToJSON(value?: VideoStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'embeddable': value.embeddable,
        'failureReason': value.failureReason,
        'license': value.license,
        'madeForKids': value.madeForKids,
        'privacyStatus': value.privacyStatus,
        'publicStatsViewable': value.publicStatsViewable,
        'publishAtRaw': value.publishAtRaw,
        'publishAt': value.publishAt === undefined ? undefined : (value.publishAt === null ? null : value.publishAt.toISOString()),
        'rejectionReason': value.rejectionReason,
        'selfDeclaredMadeForKids': value.selfDeclaredMadeForKids,
        'uploadStatus': value.uploadStatus,
        'eTag': value.eTag,
    };
}


