// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { BrowserProxy } from './browser_proxy.js';
export class SearchService {
    constructor() {
        this.searchTerms_ = [];
        this.mojoHandler_ = BrowserProxy.getInstance().handler;
    }
    /**
     * @param searchText Input typed by the user into a search box.
     * @return A list of terms extracted from |searchText|.
     */
    static splitTerms(searchText) {
        // Split quoted terms (e.g., 'The "lazy" dog' => ['The', 'lazy', 'dog']).
        return searchText.split(/"([^"]*)"/).map(s => s.trim()).filter(s => !!s);
    }
    /** Instructs the browser to clear all finished downloads. */
    clearAll() {
        if (loadTimeData.getBoolean('allowDeletingHistory')) {
            this.mojoHandler_.clearAll();
            this.search('');
        }
    }
    /** Loads more downloads with the current search terms. */
    loadMore() {
        this.mojoHandler_.getDownloads(this.searchTerms_);
    }
    /**
     * @return Whether the user is currently searching for downloads
     *     (i.e. has a non-empty search term).
     */
    isSearching() {
        return this.searchTerms_.length > 0;
    }
    /**
     * @param searchText What to search for.
     * @return Whether |searchText| resulted in new search terms.
     */
    search(searchText) {
        const searchTerms = SearchService.splitTerms(searchText);
        let sameTerms = searchTerms.length === this.searchTerms_.length;
        for (let i = 0; sameTerms && i < searchTerms.length; ++i) {
            if (searchTerms[i] !== this.searchTerms_[i]) {
                sameTerms = false;
            }
        }
        if (sameTerms) {
            return false;
        }
        this.searchTerms_ = searchTerms;
        this.loadMore();
        return true;
    }
    static getInstance() {
        return instance || (instance = new SearchService());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
