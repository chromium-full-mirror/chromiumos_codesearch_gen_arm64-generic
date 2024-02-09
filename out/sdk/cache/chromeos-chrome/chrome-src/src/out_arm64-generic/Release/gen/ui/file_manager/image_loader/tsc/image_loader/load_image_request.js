// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
/**
 * Response status.
 */
export var LoadImageResponseStatus;
(function (LoadImageResponseStatus) {
    LoadImageResponseStatus["SUCCESS"] = "success";
    LoadImageResponseStatus["ERROR"] = "error";
})(LoadImageResponseStatus || (LoadImageResponseStatus = {}));
/**
 * Structure of the response object passed to the LoadImageRequest callback.
 * All methods must be static since this is passed between isolated contexts.
 */
export class LoadImageResponse {
    status;
    taskId;
    width;
    height;
    ifd = null;
    /** The (compressed) image data as a data URL.  */
    data;
    /** @param taskId or null if fulfilled by the client-side cache.  */
    constructor(status, taskId, result) {
        this.status = status;
        this.taskId = taskId;
        if (status === LoadImageResponseStatus.ERROR) {
            return;
        }
        // Response result defined only when status === SUCCESS.
        assert(result);
        this.width = result.width;
        this.height = result.height;
        this.ifd = result.ifd;
        this.data = result.data;
    }
    /**
     * Returns the cacheable result value for |response|, or null for an error.
     *
     * @param response Response data from the ImageLoader.
     * @param timestamp The request timestamp. If undefined, then null is used.
     *     Currently this disables any caching in the ImageLoader, but disables
     *     only *expiration* in the client unless a timestamp is presented on a
     *     later request.
     */
    static cacheValue(response, timestamp) {
        if (!response || response.status === LoadImageResponseStatus.ERROR) {
            return null;
        }
        // Response result defined only when status === SUCCESS.
        assert(response.width);
        assert(response.height);
        assert(response.data);
        return {
            timestamp: timestamp || null,
            width: response.width,
            height: response.height,
            ifd: response.ifd,
            data: response.data,
        };
    }
}
/**
 * Creates a cache key.
 *
 * @return Cache key. It may be null if the cache does not support the request.
 *     e.g. Data URI.
 */
export function cacheKey(request) {
    if (/^data:/i.test(request.url ?? '')) {
        return null;
    }
    return JSON.stringify({
        url: request.url,
        orientation: request.orientation,
        scale: request.scale,
        width: request.width,
        height: request.height,
        maxWidth: request.maxWidth,
        maxHeight: request.maxHeight,
    });
}
/**
 * Creates a cancel request.
 *
 * @param taskId The task to cancel.
 */
export function createCancel(taskId) {
    return { taskId: taskId, cancel: true };
}
/**
 * Creates a load request from an option map.
 * Only the timestamp may be undefined.
 *
 * @param params Request parameters.
 */
export function createRequest(params) {
    return params;
}
/**
 * Creates a request to load a full-sized image.
 * Only the timestamp may be undefined.
 *
 * @param params Request parameters.
 */
export function createFullImageRequest(params) {
    return params;
}
/** Creates a load request from a url string. All options are undefined. */
export function createForUrl(url) {
    return { url: url };
}
