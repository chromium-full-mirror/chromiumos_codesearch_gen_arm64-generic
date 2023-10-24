// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { getFileIconUrl } from 'chrome://resources/js/icon.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
export class IconLoaderImpl {
    constructor() {
        this.iconResolvers_ = new Map();
        this.listeningImages_ = new Set();
    }
    /**
     * @return Whether or not the icon loaded successfully.
     */
    loadIcon(imageEl, filePath) {
        const url = getFileIconUrl(filePath);
        if (!this.iconResolvers_.has(url)) {
            this.iconResolvers_.set(url, new PromiseResolver());
        }
        if (!this.listeningImages_.has(imageEl)) {
            imageEl.addEventListener('load', this.finishedLoading_.bind(this));
            imageEl.addEventListener('error', this.finishedLoading_.bind(this));
            this.listeningImages_.add(imageEl);
        }
        imageEl.src = url;
        return this.iconResolvers_.get(url).promise;
    }
    finishedLoading_(e) {
        const resolver = this.iconResolvers_.get(e.currentTarget.src);
        if (!resolver.isFulfilled) {
            resolver.resolve(e.type === 'load');
        }
    }
    static getInstance() {
        return instance || (instance = new IconLoaderImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
