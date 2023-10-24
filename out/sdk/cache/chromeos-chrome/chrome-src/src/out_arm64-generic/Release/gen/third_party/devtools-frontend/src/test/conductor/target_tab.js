"use strict";
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetTab = void 0;
const cross_fetch_1 = require("cross-fetch");
const frontend_tab_js_1 = require("./frontend_tab.js");
/**
 * Wrapper class around `puppeteer.Page` that helps with setting up and
 * managing a tab that can be inspected by the DevTools frontend.
 */
class TargetTab {
    page;
    tabTargetId;
    constructor(page, tabTargetId) {
        this.page = page;
        this.tabTargetId = tabTargetId;
    }
    static async create(browser) {
        const host = (new URL(browser.wsEndpoint())).host;
        const frameTarget = new Promise(resolve => browser.once('targetcreated', resolve));
        const jsonNewReponse = await (0, cross_fetch_1.default)(`http://${host}/json/new?${escape('about:blank')}&for_tab`, { method: 'PUT' });
        const tabTarget = await jsonNewReponse.json();
        const page = await frameTarget.then(t => t.page());
        await (0, frontend_tab_js_1.loadEmptyPageAndWaitForContent)(page);
        return new TargetTab(page, tabTarget.id);
    }
    async reset() {
        await (0, frontend_tab_js_1.loadEmptyPageAndWaitForContent)(this.page);
        const client = await this.page.target().createCDPSession();
        await client.send('ServiceWorker.enable');
        await client.send('ServiceWorker.stopAllWorkers');
        await client.detach();
    }
    targetId() {
        return this.tabTargetId;
    }
}
exports.TargetTab = TargetTab;
//# sourceMappingURL=target_tab.js.map