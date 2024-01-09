// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { FakeMethodResolver } from 'chrome://resources/ash/common/fake_method_resolver.js';
import { mojoString16ToString } from 'chrome://resources/js/mojo_type_util.js';
/**
 * @fileoverview
 * Implements a fake version of the HelpContentProvider mojo interface.
 */
export class FakeHelpContentProvider {
    constructor() {
        /**
         * Record the last query passed to getHelpContents to help verify the method
         * has been called.
         */
        this.lastQuery = '';
        /** Keep track of how many times the getHelpContents has been called.*/
        this.getHelpContentsMethodCallCount = 0;
        this.methods = new FakeMethodResolver();
        // Setup method resolvers.
        this.methods.register('getHelpContents');
    }
    getLastQuery() {
        return this.lastQuery;
    }
    getHelpContents(request) {
        ++this.getHelpContentsMethodCallCount;
        this.lastQuery = mojoString16ToString(request.query);
        return this.methods.resolveMethod('getHelpContents');
    }
    getHelpContentsCallCount() {
        return this.getHelpContentsMethodCallCount;
    }
    /** Sets the value that will be returned when calling getHelpContents().*/
    setFakeSearchResponse(response) {
        this.methods.setResult('getHelpContents', { response });
    }
}
