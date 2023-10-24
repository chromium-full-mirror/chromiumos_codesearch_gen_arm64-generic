// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageCallbackRouter, PageHandlerFactory } from './optimization_guide_internals.mojom-webui.js';
export class OptimizationGuideInternalsBrowserProxy {
    constructor() {
        this.callbackRouter = new PageCallbackRouter();
        const factory = PageHandlerFactory.getRemote();
        factory.createPageHandler(this.callbackRouter.$.bindNewPipeAndPassRemote());
    }
    static getInstance() {
        return instance ||
            (instance = new OptimizationGuideInternalsBrowserProxy());
    }
    getCallbackRouter() {
        return this.callbackRouter;
    }
}
let instance = null;
