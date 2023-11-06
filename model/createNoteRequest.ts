/**
 * ManageSpace Note API
 * ManageSpace Note API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { EntityRequest } from './entityRequest';


export interface CreateNoteRequest { 
    /**
     * Note title.
     */
    title: string;
    /**
     * Note text.
     */
    text: string;
    /**
     * Optional array of tag ids.
     */
    tags: Array<string> | null;
    /**
     * A list of entity objects containing id and type.
     */
    entities: Array<EntityRequest> | null;
}

