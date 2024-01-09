// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { WallpaperSearchClientCallbackRouter, WallpaperSearchHandlerFactory, WallpaperSearchHandlerRemote } from '../wallpaper_search.mojom-webui.js';
let instance = null;
export class WallpaperSearchProxy {
    static getInstance() {
        if (!instance) {
            const handler = new WallpaperSearchHandlerRemote();
            const callbackRouter = new WallpaperSearchClientCallbackRouter();
            WallpaperSearchHandlerFactory.getRemote().createWallpaperSearchHandler(callbackRouter.$.bindNewPipeAndPassRemote(), handler.$.bindNewPipeAndPassReceiver());
            instance = new WallpaperSearchProxy(handler, callbackRouter);
        }
        return instance;
    }
    static setInstance(handler, callbackRouter) {
        instance = new WallpaperSearchProxy(handler, callbackRouter);
    }
    constructor(handler, callbackRouter) {
        this.handler = handler;
        this.callbackRouter = callbackRouter;
    }
}
