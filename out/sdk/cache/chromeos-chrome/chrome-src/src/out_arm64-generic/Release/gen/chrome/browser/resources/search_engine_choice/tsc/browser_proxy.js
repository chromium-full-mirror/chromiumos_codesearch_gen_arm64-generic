// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A helper object used by the chrome://search-engine-choice page
 * to interact with the browser.
 */
import { PageHandlerFactory, PageHandlerRemote } from './search_engine_choice.mojom-webui.js';
export class SearchEngineChoiceBrowserProxy {
    constructor(handler) {
        this.handler = handler;
    }
    static getInstance() {
        if (instance) {
            return instance;
        }
        const handler = new PageHandlerRemote();
        const factory = PageHandlerFactory.getRemote();
        factory.createPageHandler(handler.$.bindNewPipeAndPassReceiver());
        return instance = new SearchEngineChoiceBrowserProxy(handler);
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
