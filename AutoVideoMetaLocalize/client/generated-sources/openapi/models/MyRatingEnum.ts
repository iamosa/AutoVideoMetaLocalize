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

/**
 * 
 * @export
 * @enum {string}
 */
export enum MyRatingEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}

export function MyRatingEnumFromJSON(json: any): MyRatingEnum {
    return MyRatingEnumFromJSONTyped(json, false);
}

export function MyRatingEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): MyRatingEnum {
    return json as MyRatingEnum;
}

export function MyRatingEnumToJSON(value?: MyRatingEnum | null): any {
    return value as any;
}

