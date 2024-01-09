// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
/**
 * A base class for all security key subpage test browser proxies to
 * inherit from. Provides a |promiseMap_| that proxies can be used to
 * simulate Promise resolution via |setResponseFor| and |handleMethod|.
 */
export class TestSecurityKeysBrowserProxy extends TestBrowserProxy {
    constructor() {
        super(...arguments);
        /**
         * A map from method names to a promise to return when that method is
         * called. (If no promise is installed, a never-resolved promise is
         * returned.)
         */
        this.promiseMap_ = new Map();
    }
    setResponseFor(methodName, promise) {
        this.promiseMap_.set(methodName, promise);
    }
    handleMethod(methodName, arg) {
        this.methodCalled(methodName, arg);
        const promise = this.promiseMap_.get(methodName);
        if (promise !== undefined) {
            this.promiseMap_.delete(methodName);
            return promise;
        }
        // Return a Promise that never resolves.
        return new Promise(() => { });
    }
}
