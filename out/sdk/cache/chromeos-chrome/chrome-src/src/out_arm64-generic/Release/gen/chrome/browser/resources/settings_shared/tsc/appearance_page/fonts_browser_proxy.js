// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class FontsBrowserProxyImpl {
    fetchFontsData() {
        return sendWithPromise('fetchFontsData');
    }
    static getInstance() {
        return instance || (instance = new FontsBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
