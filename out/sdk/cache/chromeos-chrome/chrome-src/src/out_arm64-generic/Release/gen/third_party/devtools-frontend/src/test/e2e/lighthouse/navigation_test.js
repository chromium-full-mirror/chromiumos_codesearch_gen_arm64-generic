"use strict";
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const events_js_1 = require("../../conductor/events.js");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const lighthouse_helpers_js_1 = require("../helpers/lighthouse-helpers.js");
// This test will fail (by default) in headful mode, as the target page never gets painted.
// To resolve this when debugging, just make sure the target page is visible during the lighthouse run.
(0, mocha_extensions_js_1.describe)('Navigation', async function () {
    // The tests in this suite are particularly slow
    if (this.timeout() !== 0) {
        this.timeout(60_000);
    }
    let consoleLog = [];
    const consoleListener = (e) => {
        consoleLog.push(e.text());
    };
    beforeEach(async () => {
        // https://github.com/GoogleChrome/lighthouse/issues/14572
        (0, events_js_1.expectError)(/Request CacheStorage\.requestCacheNames failed/);
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1357791
        (0, events_js_1.expectError)(/Protocol Error: the message with wrong session id/);
        (0, events_js_1.expectError)(/Protocol Error: the message with wrong session id/);
        (0, events_js_1.expectError)(/Protocol Error: the message with wrong session id/);
        (0, events_js_1.expectError)(/Protocol Error: the message with wrong session id/);
        (0, events_js_1.expectError)(/Protocol Error: the message with wrong session id/);
        consoleLog = [];
        const { frontend } = await (0, helper_js_1.getBrowserAndPages)();
        frontend.on('console', consoleListener);
    });
    afterEach(async function () {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        frontend.off('console', consoleListener);
        if (this.currentTest?.isFailed()) {
            console.error(consoleLog.join('\n'));
        }
    });
    it('successfully returns a Lighthouse report', async () => {
        await (0, lighthouse_helpers_js_1.navigateToLighthouseTab)('lighthouse/hello.html');
        await (0, lighthouse_helpers_js_1.registerServiceWorker)();
        await (0, lighthouse_helpers_js_1.selectCategories)([
            'performance',
            'accessibility',
            'best-practices',
            'seo',
            'pwa',
            'lighthouse-plugin-publisher-ads',
        ]);
        let numNavigations = 0;
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        target.on('framenavigated', () => {
            ++numNavigations;
        });
        await (0, lighthouse_helpers_js_1.clickStartButton)();
        const { lhr, artifacts, reportEl } = await (0, lighthouse_helpers_js_1.waitForResult)();
        // 1 initial about:blank jump
        // 1 navigation for the actual page load
        // 2 navigations to go to chrome://terms and back testing bfcache
        // 1 refresh after auditing to reset state
        chai_1.assert.strictEqual(numNavigations, 5);
        chai_1.assert.strictEqual(lhr.lighthouseVersion, '11.5.0');
        chai_1.assert.match(lhr.finalUrl, /^https:\/\/localhost:[0-9]+\/test\/e2e\/resources\/lighthouse\/hello.html/);
        chai_1.assert.strictEqual(lhr.configSettings.throttlingMethod, 'simulate');
        chai_1.assert.strictEqual(lhr.configSettings.disableStorageReset, false);
        chai_1.assert.strictEqual(lhr.configSettings.formFactor, 'mobile');
        chai_1.assert.strictEqual(lhr.configSettings.throttling.rttMs, 150);
        chai_1.assert.strictEqual(lhr.configSettings.screenEmulation.disabled, true);
        chai_1.assert.include(lhr.configSettings.emulatedUserAgent, 'Mobile');
        chai_1.assert.include(lhr.environment.networkUserAgent, 'Mobile');
        chai_1.assert.deepStrictEqual(artifacts.ViewportDimensions, {
            innerHeight: 823,
            innerWidth: 412,
            outerHeight: 823,
            outerWidth: 412,
            devicePixelRatio: 1.75,
        });
        const { auditResults, erroredAudits, failedAudits } = (0, lighthouse_helpers_js_1.getAuditsBreakdown)(lhr, ['max-potential-fid']);
        chai_1.assert.strictEqual(auditResults.length, 191);
        chai_1.assert.deepStrictEqual(erroredAudits, []);
        chai_1.assert.deepStrictEqual(failedAudits.map(audit => audit.id), [
            'installable-manifest',
            'splash-screen',
            'themed-omnibox',
            'maskable-icon',
            'document-title',
            'html-has-lang',
            'render-blocking-resources',
            'meta-description',
        ]);
        const viewTraceButton = await (0, helper_js_1.$textContent)('View Trace', reportEl);
        chai_1.assert.ok(!viewTraceButton);
        // Test view trace button behavior
        // For some reason the CDP click command doesn't work here even if the tools menu is open.
        await reportEl.$eval('a[data-action="view-unthrottled-trace"]:not(.hidden)', saveJsonEl => saveJsonEl.click());
        let selectedTab = await (0, helper_js_1.waitFor)('.tabbed-pane-header-tab.selected[aria-label="Performance"]');
        let selectedTabText = await selectedTab.evaluate(selectedTabEl => {
            return selectedTabEl.textContent;
        });
        chai_1.assert.strictEqual(selectedTabText, 'Performance');
        await (0, lighthouse_helpers_js_1.navigateToLighthouseTab)();
        // Test element link behavior
        const lcpElementAudit = await (0, helper_js_1.waitForElementWithTextContent)('Largest Contentful Paint element', reportEl);
        await lcpElementAudit.click();
        const lcpElementLink = await (0, helper_js_1.waitForElementWithTextContent)('button');
        await lcpElementLink.click();
        selectedTab = await (0, helper_js_1.waitFor)('.tabbed-pane-header-tab.selected[aria-label="Elements"]');
        selectedTabText = await selectedTab.evaluate(selectedTabEl => {
            return selectedTabEl.textContent;
        });
        chai_1.assert.strictEqual(selectedTabText, 'Elements');
        const waitForJson = await (0, lighthouse_helpers_js_1.interceptNextFileSave)();
        // For some reason the CDP click command doesn't work here even if the tools menu is open.
        await reportEl.$eval('a[data-action="save-json"]:not(.hidden)', saveJsonEl => saveJsonEl.click());
        const jsonContent = await waitForJson();
        chai_1.assert.strictEqual(jsonContent, JSON.stringify(lhr, null, 2));
        const waitForHtml = await (0, lighthouse_helpers_js_1.interceptNextFileSave)();
        // For some reason the CDP click command doesn't work here even if the tools menu is open.
        await reportEl.$eval('a[data-action="save-html"]:not(.hidden)', saveHtmlEl => saveHtmlEl.click());
        const htmlContent = await waitForHtml();
        const iframeHandle = await (0, lighthouse_helpers_js_1.renderHtmlInIframe)(htmlContent);
        const iframeAuditDivs = await iframeHandle.$$('.lh-audit');
        const frontendAuditDivs = await reportEl.$$('.lh-audit');
        chai_1.assert.strictEqual(frontendAuditDivs.length, iframeAuditDivs.length);
        // Ensure service worker was cleared.
        chai_1.assert.strictEqual(await (0, lighthouse_helpers_js_1.getServiceWorkerCount)(), 0);
    });
    it('successfully returns a Lighthouse report with DevTools throttling', async () => {
        await (0, lighthouse_helpers_js_1.navigateToLighthouseTab)('lighthouse/hello.html');
        await (0, lighthouse_helpers_js_1.setThrottlingMethod)('devtools');
        await (0, lighthouse_helpers_js_1.clickStartButton)();
        const { lhr, reportEl } = await (0, lighthouse_helpers_js_1.waitForResult)();
        chai_1.assert.strictEqual(lhr.configSettings.throttlingMethod, 'devtools');
        // [crbug.com/1347220] DevTools throttling can force resources to load slow enough for these audits to fail sometimes.
        const flakyAudits = [
            'server-response-time',
            'render-blocking-resources',
            'max-potential-fid',
        ];
        const { auditResults, erroredAudits, failedAudits } = (0, lighthouse_helpers_js_1.getAuditsBreakdown)(lhr, flakyAudits);
        chai_1.assert.strictEqual(auditResults.length, 168);
        chai_1.assert.deepStrictEqual(erroredAudits, []);
        chai_1.assert.deepStrictEqual(failedAudits.map(audit => audit.id), [
            'installable-manifest',
            'splash-screen',
            'themed-omnibox',
            'maskable-icon',
            'document-title',
            'html-has-lang',
            'meta-description',
        ]);
        const viewTraceButton = await (0, helper_js_1.$textContent)('View Trace', reportEl);
        chai_1.assert.ok(viewTraceButton);
    });
    it('successfully returns a Lighthouse report when settings changed', async () => {
        await (0, helper_js_1.setDevToolsSettings)({ language: 'es' });
        await (0, lighthouse_helpers_js_1.navigateToLighthouseTab)('lighthouse/hello.html');
        await (0, lighthouse_helpers_js_1.registerServiceWorker)();
        await (0, lighthouse_helpers_js_1.setToolbarCheckboxWithText)(false, 'Borrar almacenamiento');
        await (0, lighthouse_helpers_js_1.selectCategories)(['performance', 'best-practices']);
        await (0, lighthouse_helpers_js_1.selectDevice)('desktop');
        await (0, lighthouse_helpers_js_1.clickStartButton)();
        const { reportEl, lhr, artifacts } = await (0, lighthouse_helpers_js_1.waitForResult)();
        const { innerWidth, innerHeight, devicePixelRatio } = artifacts.ViewportDimensions;
        // TODO: Figure out why outerHeight can be different depending on OS
        chai_1.assert.strictEqual(innerHeight, 720);
        chai_1.assert.strictEqual(innerWidth, 1280);
        chai_1.assert.strictEqual(devicePixelRatio, 1);
        const { erroredAudits } = (0, lighthouse_helpers_js_1.getAuditsBreakdown)(lhr);
        chai_1.assert.deepStrictEqual(erroredAudits, []);
        chai_1.assert.deepStrictEqual(Object.keys(lhr.categories), ['performance', 'best-practices']);
        chai_1.assert.strictEqual(lhr.configSettings.disableStorageReset, true);
        chai_1.assert.strictEqual(lhr.configSettings.formFactor, 'desktop');
        chai_1.assert.strictEqual(lhr.configSettings.throttling.rttMs, 40);
        chai_1.assert.strictEqual(lhr.configSettings.screenEmulation.disabled, true);
        chai_1.assert.notInclude(lhr.configSettings.emulatedUserAgent, 'Mobile');
        chai_1.assert.notInclude(lhr.environment.networkUserAgent, 'Mobile');
        const viewTreemapButton = await (0, helper_js_1.$textContent)('Ver gráfico de rectángulos', reportEl);
        chai_1.assert.ok(viewTreemapButton);
        const footerIssueText = await reportEl.$eval('.lh-footer__version_issue', footerIssueEl => {
            return footerIssueEl.textContent;
        });
        chai_1.assert.strictEqual(lhr.i18n.rendererFormattedStrings.footerIssue, 'Notificar un problema');
        chai_1.assert.strictEqual(footerIssueText, 'Notificar un problema');
        // Ensure service worker is not cleared because we disable the storage reset.
        chai_1.assert.strictEqual(await (0, lighthouse_helpers_js_1.getServiceWorkerCount)(), 1);
    });
});
//# sourceMappingURL=navigation_test.js.map