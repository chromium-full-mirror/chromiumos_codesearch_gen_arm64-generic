// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageCallbackRouter, PageHandlerFactory, PageHandlerRemote } from './new_tab_page.mojom-webui.js';
let instance = null;
/** Holds Mojo interfaces for communication with the browser process. */
export class NewTabPageProxy {
    static getInstance() {
        if (!instance) {
            const handler = new PageHandlerRemote();
            const callbackRouter = new PageCallbackRouter();
            PageHandlerFactory.getRemote().createPageHandler(callbackRouter.$.bindNewPipeAndPassRemote(), handler.$.bindNewPipeAndPassReceiver());
            instance = new NewTabPageProxy(handler, callbackRouter);
        }
        return instance;
    }
    static setInstance(handler, callbackRouter) {
        instance = new NewTabPageProxy(handler, callbackRouter);
    }
    constructor(handler, callbackRouter) {
        this.handler = handler;
        this.callbackRouter = callbackRouter;
    }
}
