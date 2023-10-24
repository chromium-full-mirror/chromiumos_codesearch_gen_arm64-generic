// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageCallbackRouter, PageHandlerFactory, PageHandlerRemote } from './enterprise_reporting.mojom-webui.js';
export class EnterpriseReportingBrowserProxy {
    static getInstance() {
        if (!instance) {
            const handler = new PageHandlerRemote();
            const callbackRouter = new PageCallbackRouter();
            PageHandlerFactory.getRemote().createPageHandler(callbackRouter.$.bindNewPipeAndPassRemote(), handler.$.bindNewPipeAndPassReceiver());
            instance = new EnterpriseReportingBrowserProxy(handler, callbackRouter);
        }
        return instance;
    }
    static createInstanceForTest(handler, callbackRouter) {
        instance = new EnterpriseReportingBrowserProxy(handler, callbackRouter);
    }
    constructor(handler, callbackRouter) {
        this.handler = handler;
        this.callbackRouter = callbackRouter;
    }
}
let instance = null;
