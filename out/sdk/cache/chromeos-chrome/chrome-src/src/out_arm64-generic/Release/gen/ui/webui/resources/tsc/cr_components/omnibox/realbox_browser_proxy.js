// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageCallbackRouter, PageHandler } from './omnibox.mojom-webui.js';
/**
 * @fileoverview This file provides a singleton class that exposes the Mojo
 * handler interface used for bidirectional communication between the
 * <ntp-realbox> or the <cr-realbox-dropdown> and the browser.
 */
let instance = null;
export class RealboxBrowserProxy {
    static getInstance() {
        return instance || (instance = new RealboxBrowserProxy());
    }
    static setInstance(newInstance) {
        instance = newInstance;
    }
    constructor() {
        this.handler = PageHandler.getRemote();
        this.callbackRouter = new PageCallbackRouter();
        this.handler.setPage(this.callbackRouter.$.bindNewPipeAndPassRemote());
    }
}
