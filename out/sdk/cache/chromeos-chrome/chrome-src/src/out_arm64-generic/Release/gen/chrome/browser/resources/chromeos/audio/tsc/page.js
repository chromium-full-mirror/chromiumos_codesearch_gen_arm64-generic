// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { getRequiredElement } from 'chrome://resources/js/util_ts.js';
export class Page {
    constructor(pageName) {
        this.pageName = pageName;
        this.visible = false;
    }
    showPage() {
        this.visible = true;
        getRequiredElement(this.pageName).hidden = false;
    }
    hidePage() {
        this.visible = false;
        getRequiredElement(this.pageName).hidden = true;
    }
}
export class PageNavigator {
    constructor() {
        this.storedPages = new Map();
        this.activePage = null;
    }
    addPage(page) {
        this.storedPages.set(page.pageName, page);
    }
    showPage(pageName) {
        if (this.storedPages.has(pageName)) {
            const page = this.storedPages.get(pageName);
            if (pageName != this.activePage?.pageName) {
                page.showPage();
                history.pushState({}, '', ('#' + page.pageName));
                this.activePage?.hidePage();
                this.activePage = page;
            }
        }
    }
    static getInstance() {
        if (instance === null) {
            instance = new PageNavigator();
        }
        return instance;
    }
}
let instance = null;
