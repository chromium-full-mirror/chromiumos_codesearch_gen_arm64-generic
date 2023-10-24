// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { ReceiveManager, ReceiveObserverReceiver } from '/shared/nearby_share.mojom-webui.js';
let receiveManager = null;
let isTesting = false;
export function setReceiveManagerForTesting(testReceiveManager) {
    receiveManager = testReceiveManager;
    isTesting = true;
}
export function getReceiveManager() {
    if (!receiveManager) {
        receiveManager = ReceiveManager.getRemote();
    }
    return receiveManager;
}
export function observeReceiveManager(observer) {
    if (isTesting) {
        getReceiveManager().addReceiveObserver(observer);
        return null;
    }
    const receiver = new ReceiveObserverReceiver(observer);
    getReceiveManager().addReceiveObserver(receiver.$.bindNewPipeAndPassRemote());
    return receiver;
}
