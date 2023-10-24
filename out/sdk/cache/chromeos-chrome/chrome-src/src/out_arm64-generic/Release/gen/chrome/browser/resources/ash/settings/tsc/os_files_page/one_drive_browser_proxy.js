// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageCallbackRouter, PageHandlerFactory, PageHandlerRemote, PageRemote } from '../mojom-webui/one_drive_handler.mojom-webui.js';
// Communicates with the OneDriveHandler in the browser process.
class OneDriveBrowserProxy {
    constructor() {
        // Invoke methods from the browser process.
        this.handler = new PageHandlerRemote();
        // Receive updates from the browser process.
        this.observer = new PageCallbackRouter();
        const factory = PageHandlerFactory.getRemote();
        factory.createPageHandler(this.observer.$.bindNewPipeAndPassRemote(), this.handler.$.bindNewPipeAndPassReceiver());
    }
    static getInstance() {
        return instance || (instance = new OneDriveBrowserProxy());
    }
    static setInstance(proxy) {
        instance = proxy;
    }
}
let instance = null;
export { OneDriveBrowserProxy, PageHandlerRemote as OneDrivePageHandlerRemote, PageRemote as OneDrivePageRemote, PageCallbackRouter as OneDrivePageCallbackRouter, };
