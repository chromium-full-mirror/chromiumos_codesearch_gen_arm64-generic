// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Fake of the chrome.inputMethodsPrivate API for testing. Only
 * methods that are called during testing have been implemented.
 */
export class FakeInputMethodPrivate {
    getCurrentInputMethod() {
        return Promise.resolve(null);
    }
    setCurrentInputMethod() {
        return Promise.resolve();
    }
    getLanguagePackStatus() {
        return Promise.resolve(chrome.inputMethodPrivate.LanguagePackStatus.UNKNOWN);
    }
    get onChanged() {
        return {
            addListener: () => {
                // Nothing to do here.
            },
            removeListener: () => {
                // Nothing to do here.
            },
        };
    }
}
