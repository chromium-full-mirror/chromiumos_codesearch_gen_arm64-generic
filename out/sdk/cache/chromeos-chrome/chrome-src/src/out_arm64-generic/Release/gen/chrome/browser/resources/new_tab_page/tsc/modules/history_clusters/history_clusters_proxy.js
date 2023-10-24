// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageHandler } from '../../history_clusters.mojom-webui.js';
export class HistoryClustersProxyImpl {
    constructor(handler) {
        this.handler = handler;
    }
    static getInstance() {
        if (instance) {
            return instance;
        }
        const handler = PageHandler.getRemote();
        return instance = new HistoryClustersProxyImpl(handler);
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
