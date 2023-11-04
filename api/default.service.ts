/**
 * ManageSpace Note API
 * ManageSpace Note API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext 
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { BadRequestError400Response } from '../model/badRequestError400Response';
// @ts-ignore
import { CreateNoteRequest } from '../model/createNoteRequest';
// @ts-ignore
import { CreateTagRequest } from '../model/createTagRequest';
// @ts-ignore
import { ForbiddenError403Response } from '../model/forbiddenError403Response';
// @ts-ignore
import { GetNotes200Response } from '../model/getNotes200Response';
// @ts-ignore
import { GetTags200Response } from '../model/getTags200Response';
// @ts-ignore
import { InternalServerError500Response } from '../model/internalServerError500Response';
// @ts-ignore
import { UnauthorizedError401Response } from '../model/unauthorizedError401Response';
// @ts-ignore
import { UpdateNoteRequest } from '../model/updateNoteRequest';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class DefaultService {

    protected basePath = 'http://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string|string[], @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (Array.isArray(basePath) && basePath.length > 0) {
                basePath = basePath[0];
            }

            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    // @ts-ignore
    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, (value as Date).toISOString().substring(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Create a note.
     * Create a note throught note service with optionally passed tags and entities.
     * @param orgId Organization ID
     * @param siteId Site ID
     * @param createNoteRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createNote(orgId: string, siteId: string, createNoteRequest: CreateNoteRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json;v&#x3D;1', context?: HttpContext}): Observable<GetNotes200Response>;
    public createNote(orgId: string, siteId: string, createNoteRequest: CreateNoteRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json;v&#x3D;1', context?: HttpContext}): Observable<HttpResponse<GetNotes200Response>>;
    public createNote(orgId: string, siteId: string, createNoteRequest: CreateNoteRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json;v&#x3D;1', context?: HttpContext}): Observable<HttpEvent<GetNotes200Response>>;
    public createNote(orgId: string, siteId: string, createNoteRequest: CreateNoteRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json;v&#x3D;1', context?: HttpContext}): Observable<any> {
        if (orgId === null || orgId === undefined) {
            throw new Error('Required parameter orgId was null or undefined when calling createNote.');
        }
        if (siteId === null || siteId === undefined) {
            throw new Error('Required parameter siteId was null or undefined when calling createNote.');
        }
        if (createNoteRequest === null || createNoteRequest === undefined) {
            throw new Error('Required parameter createNoteRequest was null or undefined when calling createNote.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (bearer) required
        localVarCredential = this.configuration.lookupCredential('bearer');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json;v=1'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/note/orgs/${this.configuration.encodeParam({name: "orgId", value: orgId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/sites/${this.configuration.encodeParam({name: "siteId", value: siteId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/notes`;
        return this.httpClient.request<GetNotes200Response>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: createNoteRequest,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Create a tag.
     * Create a tag for a site.
     * @param orgId Organization ID
     * @param siteId Site ID
     * @param createTagRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createTag(orgId: string, siteId: string, createTagRequest: CreateTagRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json;v&#x3D;1', context?: HttpContext}): Observable<GetTags200Response>;
    public createTag(orgId: string, siteId: string, createTagRequest: CreateTagRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json;v&#x3D;1', context?: HttpContext}): Observable<HttpResponse<GetTags200Response>>;
    public createTag(orgId: string, siteId: string, createTagRequest: CreateTagRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json;v&#x3D;1', context?: HttpContext}): Observable<HttpEvent<GetTags200Response>>;
    public createTag(orgId: string, siteId: string, createTagRequest: CreateTagRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json;v&#x3D;1', context?: HttpContext}): Observable<any> {
        if (orgId === null || orgId === undefined) {
            throw new Error('Required parameter orgId was null or undefined when calling createTag.');
        }
        if (siteId === null || siteId === undefined) {
            throw new Error('Required parameter siteId was null or undefined when calling createTag.');
        }
        if (createTagRequest === null || createTagRequest === undefined) {
            throw new Error('Required parameter createTagRequest was null or undefined when calling createTag.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (bearer) required
        localVarCredential = this.configuration.lookupCredential('bearer');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json;v=1'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/note/orgs/${this.configuration.encodeParam({name: "orgId", value: orgId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/sites/${this.configuration.encodeParam({name: "siteId", value: siteId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/tags`;
        return this.httpClient.request<GetTags200Response>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: createTagRequest,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get list of notes
     * Get list of notes with filters such as &#x60;entityId&#x60;; &#x60;entityTypeCodeName&#x60;, etc.
     * @param orgId Organization ID
     * @param siteId Site ID
     * @param offset The offset of the first record to return (0-indexed).
     * @param limit The maximum number of records to return per page.
     * @param entityId Entity Id(s) linked to the note.
     * @param entityTypeCodeName Entity code name.
     * @param tag Tag(s) attached to note
     * @param createdBy Created by
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getNotes(orgId: string, siteId: string, offset?: number, limit?: number, entityId?: string, entityTypeCodeName?: string, tag?: string, createdBy?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json;v&#x3D;1', context?: HttpContext}): Observable<GetNotes200Response>;
    public getNotes(orgId: string, siteId: string, offset?: number, limit?: number, entityId?: string, entityTypeCodeName?: string, tag?: string, createdBy?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json;v&#x3D;1', context?: HttpContext}): Observable<HttpResponse<GetNotes200Response>>;
    public getNotes(orgId: string, siteId: string, offset?: number, limit?: number, entityId?: string, entityTypeCodeName?: string, tag?: string, createdBy?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json;v&#x3D;1', context?: HttpContext}): Observable<HttpEvent<GetNotes200Response>>;
    public getNotes(orgId: string, siteId: string, offset?: number, limit?: number, entityId?: string, entityTypeCodeName?: string, tag?: string, createdBy?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json;v&#x3D;1', context?: HttpContext}): Observable<any> {
        if (orgId === null || orgId === undefined) {
            throw new Error('Required parameter orgId was null or undefined when calling getNotes.');
        }
        if (siteId === null || siteId === undefined) {
            throw new Error('Required parameter siteId was null or undefined when calling getNotes.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (offset !== undefined && offset !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>offset, 'offset');
        }
        if (limit !== undefined && limit !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>limit, 'limit');
        }
        if (entityId !== undefined && entityId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>entityId, 'entityId');
        }
        if (entityTypeCodeName !== undefined && entityTypeCodeName !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>entityTypeCodeName, 'entityTypeCodeName');
        }
        if (tag !== undefined && tag !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>tag, 'tag');
        }
        if (createdBy !== undefined && createdBy !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>createdBy, 'createdBy');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (bearer) required
        localVarCredential = this.configuration.lookupCredential('bearer');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json;v=1'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/note/orgs/${this.configuration.encodeParam({name: "orgId", value: orgId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/sites/${this.configuration.encodeParam({name: "siteId", value: siteId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/notes`;
        return this.httpClient.request<GetNotes200Response>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get list of tags.
     * Get list of tags for siteId.
     * @param orgId Organization ID
     * @param siteId Site ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTags(orgId: string, siteId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json;v&#x3D;1', context?: HttpContext}): Observable<GetTags200Response>;
    public getTags(orgId: string, siteId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json;v&#x3D;1', context?: HttpContext}): Observable<HttpResponse<GetTags200Response>>;
    public getTags(orgId: string, siteId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json;v&#x3D;1', context?: HttpContext}): Observable<HttpEvent<GetTags200Response>>;
    public getTags(orgId: string, siteId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json;v&#x3D;1', context?: HttpContext}): Observable<any> {
        if (orgId === null || orgId === undefined) {
            throw new Error('Required parameter orgId was null or undefined when calling getTags.');
        }
        if (siteId === null || siteId === undefined) {
            throw new Error('Required parameter siteId was null or undefined when calling getTags.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (bearer) required
        localVarCredential = this.configuration.lookupCredential('bearer');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json;v=1'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/note/orgs/${this.configuration.encodeParam({name: "orgId", value: orgId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/sites/${this.configuration.encodeParam({name: "siteId", value: siteId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/tags`;
        return this.httpClient.request<GetTags200Response>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update note.
     * Update a single note.
     * @param orgId Organization ID
     * @param siteId Site ID
     * @param noteId Note ID
     * @param updateNoteRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateNote(orgId: string, siteId: string, noteId: string, updateNoteRequest: UpdateNoteRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json;v&#x3D;1', context?: HttpContext}): Observable<GetNotes200Response>;
    public updateNote(orgId: string, siteId: string, noteId: string, updateNoteRequest: UpdateNoteRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json;v&#x3D;1', context?: HttpContext}): Observable<HttpResponse<GetNotes200Response>>;
    public updateNote(orgId: string, siteId: string, noteId: string, updateNoteRequest: UpdateNoteRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json;v&#x3D;1', context?: HttpContext}): Observable<HttpEvent<GetNotes200Response>>;
    public updateNote(orgId: string, siteId: string, noteId: string, updateNoteRequest: UpdateNoteRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json;v&#x3D;1', context?: HttpContext}): Observable<any> {
        if (orgId === null || orgId === undefined) {
            throw new Error('Required parameter orgId was null or undefined when calling updateNote.');
        }
        if (siteId === null || siteId === undefined) {
            throw new Error('Required parameter siteId was null or undefined when calling updateNote.');
        }
        if (noteId === null || noteId === undefined) {
            throw new Error('Required parameter noteId was null or undefined when calling updateNote.');
        }
        if (updateNoteRequest === null || updateNoteRequest === undefined) {
            throw new Error('Required parameter updateNoteRequest was null or undefined when calling updateNote.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (bearer) required
        localVarCredential = this.configuration.lookupCredential('bearer');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json;v=1'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/note/orgs/${this.configuration.encodeParam({name: "orgId", value: orgId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/sites/${this.configuration.encodeParam({name: "siteId", value: siteId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/notes/${this.configuration.encodeParam({name: "noteId", value: noteId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<GetNotes200Response>('put', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: updateNoteRequest,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
