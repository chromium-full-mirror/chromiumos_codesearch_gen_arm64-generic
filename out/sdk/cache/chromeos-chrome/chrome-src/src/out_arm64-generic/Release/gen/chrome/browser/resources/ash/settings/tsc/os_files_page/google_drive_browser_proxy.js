// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageCallbackRouter, PageHandlerFactory, PageHandlerRemote, PageRemote } from '../mojom-webui/google_drive_handler.mojom-webui.js';
import { Stage } from '../mojom-webui/pinning_manager_types.mojom-webui.js';
// Communicates with the GoogleDrivePageHandler in the browser process.
class GoogleDriveBrowserProxy {
    constructor() {
        // Invoke methods from the browser process.
        this.handler = new PageHandlerRemote();
        // Receive updates from the browser process.
        this.observer = new PageCallbackRouter();
        const factory = PageHandlerFactory.getRemote();
        factory.createPageHandler(this.observer.$.bindNewPipeAndPassRemote(), this.handler.$.bindNewPipeAndPassReceiver());
    }
    static getInstance() {
        return instance || (instance = new GoogleDriveBrowserProxy());
    }
    static setInstance(proxy) {
        instance = proxy;
    }
}
let instance = null;
export { GoogleDriveBrowserProxy, PageHandlerRemote as GoogleDrivePageHandlerRemote, PageCallbackRouter as GoogleDrivePageCallbackRouter, PageRemote as GoogleDrivePageRemote, Stage, };
