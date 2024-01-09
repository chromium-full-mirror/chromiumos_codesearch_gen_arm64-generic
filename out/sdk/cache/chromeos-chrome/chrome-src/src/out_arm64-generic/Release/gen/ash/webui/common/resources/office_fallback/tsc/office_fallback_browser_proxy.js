// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageHandlerFactory, PageHandlerRemote } from './office_fallback.mojom-webui.js';
export class OfficeFallbackBrowserProxy {
    handler;
    constructor() {
        this.handler = new PageHandlerRemote();
    }
    static getInstance() {
        return instance || (instance = new OfficeFallbackBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
class OfficeFallbackBrowserProxyImpl extends OfficeFallbackBrowserProxy {
    constructor() {
        super();
        const factory = PageHandlerFactory.getRemote();
        factory.createPageHandler(this.handler.$.bindNewPipeAndPassReceiver());
    }
    // JSON-encoded dialog arguments.
    getDialogArguments() {
        return chrome.getVariableValue('dialogArguments');
    }
}
let instance = null;
