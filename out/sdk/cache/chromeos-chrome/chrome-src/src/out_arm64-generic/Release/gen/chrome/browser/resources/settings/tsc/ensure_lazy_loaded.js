// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { getTrustedScriptURL } from 'chrome://resources/js/static_types.js';
let lazyLoadPromise = null;
/** @return Resolves when the lazy load module is imported. */
export function ensureLazyLoaded() {
    if (lazyLoadPromise === null) {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = getTrustedScriptURL `./lazy_load.js`;
        document.body.appendChild(script);
        lazyLoadPromise =
            Promise
                .all([
                'settings-appearance-page', 'settings-autofill-section',
                'settings-payments-section',
                'settings-clear-browsing-data-dialog',
                'settings-search-engines-page',
                // 
                'certificate-manager',
                // 
                'settings-a11y-page', 'settings-downloads-page',
                // 
                'settings-reset-page',
                // 
                // 
            ].map(name => customElements.whenDefined(name)))
                .then(() => { });
    }
    return lazyLoadPromise;
}
