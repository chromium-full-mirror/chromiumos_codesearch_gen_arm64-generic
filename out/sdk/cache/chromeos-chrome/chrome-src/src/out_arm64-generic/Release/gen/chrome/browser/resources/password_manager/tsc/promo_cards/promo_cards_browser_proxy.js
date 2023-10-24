// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class PromoCardsProxyImpl {
    getAvailablePromoCard() {
        return sendWithPromise('getAvailablePromoCard');
    }
    recordPromoDismissed(id) {
        chrome.send('recordPromoDismissed', [id]);
    }
    static getInstance() {
        return instance || (instance = new PromoCardsProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
