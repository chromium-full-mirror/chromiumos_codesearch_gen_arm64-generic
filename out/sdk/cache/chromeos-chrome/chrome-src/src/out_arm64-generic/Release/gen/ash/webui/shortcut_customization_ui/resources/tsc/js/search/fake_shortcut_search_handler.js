// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { FakeMethodResolver } from 'chrome://resources/ash/common/fake_method_resolver.js';
/**
 * @fileoverview
 * Implements a fake version of the ShortcutSearchHandler mojo interface.
 */
export class FakeShortcutSearchHandler {
    constructor() {
        this.methods = new FakeMethodResolver();
        // Setup method resolvers.
        this.methods.register('search');
    }
    // Add '_' to parameters to suppress unused-variable warning.
    search(_query, _maxNumResult) {
        return this.methods.resolveMethod('search');
    }
    addSearchResultsAvailabilityObserver(_observer) {
        // Intentionally not implemented.
    }
    /**
     * Sets the value that will be returned when calling search().
     */
    setFakeSearchResult(results) {
        this.methods.setResult('search', { results });
    }
}
