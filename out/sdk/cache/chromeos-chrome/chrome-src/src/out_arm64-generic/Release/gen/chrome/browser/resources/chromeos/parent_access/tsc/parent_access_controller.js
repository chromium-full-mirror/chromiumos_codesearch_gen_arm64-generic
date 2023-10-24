// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PostMessageApiServer } from 'chrome://resources/ash/common/post_message_api/post_message_api_server.js';
import { PromiseResolver } from 'chrome://resources/ash/common/promise_resolver.js';
/**
 * Class that implements the Chrome side of the ParentAccess PostMessageAPI.
 */
export class ParentAccessController extends PostMessageApiServer {
    constructor(webviewElement, targetURL, originURLPrefix) {
        super(webviewElement, targetURL, originURLPrefix);
        this.parentAccessCallbackReceivedResolver = new PromiseResolver();
        this.initializationErrorResolver = new PromiseResolver();
        this.registerMethod('onParentAccessResult', (param) => {
            this.parentAccessResult(param[0]);
        });
    }
    /*
     * Returns a promise that rejects when there was an error initializing the
     * PostMessageAPI connection.
     */
    whenInitializationError() {
        return this.initializationErrorResolver.promise;
    }
    onInitializationError(origin) {
        this.initializationErrorResolver.reject(origin);
    }
    whenParentAccessCallbackReceived() {
        return this.parentAccessCallbackReceivedResolver.promise;
    }
    /**
     * Signals to the owner that the parent access web widget completed.
     * Takes the result of the parent verification returned by the web widget. It
     * is a base64 encoded serialized proto that contains the proof of
     * verification that can be used by the handler.
     */
    parentAccessResult(parentAccessResultProto) {
        this.parentAccessCallbackReceivedResolver.resolve(parentAccessResultProto);
        // Resets resolver to wait for the next callback.
        this.parentAccessCallbackReceivedResolver = new PromiseResolver();
    }
}
