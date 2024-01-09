// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageCallbackRouter, PageHandlerFactory, PageHandlerRemote } from './hats.mojom-webui.js';
class BrowserProxy {
    callbackRouter;
    handler;
    constructor(requestSurveyFn) {
        this.callbackRouter = new PageCallbackRouter();
        this.callbackRouter.requestSurvey.addListener(requestSurveyFn);
        this.handler = new PageHandlerRemote();
        const factory = PageHandlerFactory.getRemote();
        factory.createPageHandler(this.callbackRouter.$.bindNewPipeAndPassRemote(), this.handler.$.bindNewPipeAndPassReceiver());
    }
}
export { BrowserProxy };
