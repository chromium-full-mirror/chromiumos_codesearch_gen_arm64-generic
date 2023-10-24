// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance = null;
/** Abstracts some builtin JS functions to mock them in tests. */
export class WindowProxy {
    static getInstance() {
        return instance || (instance = new WindowProxy());
    }
    static setInstance(newInstance) {
        instance = newInstance;
    }
    navigate(href) {
        window.location.href = href;
    }
    open(url) {
        window.open(url, '_blank');
    }
    setTimeout(callback, duration) {
        return window.setTimeout(callback, duration);
    }
    clearTimeout(id) {
        window.clearTimeout(id !== null ? id : undefined);
    }
    random() {
        return Math.random();
    }
    createIframeSrc(src) {
        return src;
    }
    matchMedia(query) {
        return window.matchMedia(query);
    }
    now() {
        return Date.now();
    }
    /** Returns promise that resolves when lazy rendering should be started. */
    waitForLazyRender() {
        return new Promise(resolve => {
            requestIdleCallback(() => resolve(), { timeout: 500 });
        });
    }
    /** Posts |message| on the content window of |iframe| at |targetOrigin|. */
    postMessage(iframe, message, targetOrigin) {
        iframe.contentWindow.postMessage(message, targetOrigin);
    }
    /** Returns `window.location.href` wrapped in a URL object. */
    get url() {
        return new URL(window.location.href);
    }
    get onLine() {
        return window.navigator.onLine;
    }
}
