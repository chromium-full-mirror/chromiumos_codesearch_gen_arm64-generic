"use strict";
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const Mocha = require("mocha");
const screenshot_error_js_1 = require("../shared/screenshot-error.js");
const ResultsDb = require("./resultsdb.js");
const { EVENT_TEST_FAIL, EVENT_TEST_PASS, EVENT_TEST_RETRY, EVENT_TEST_PENDING, } = Mocha.Runner.constants;
function sanitize(message) {
    return message.replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll('\'', '&#39;');
}
function getErrorMessage(error) {
    if (error instanceof Error) {
        if (error.cause) {
            // TypeScript types error.cause as {}, which doesn't allow us to access
            // properties on it or check for them. So we have to cast it to allow us
            // to read the `message` property.
            const cause = error.cause;
            const causeMessage = cause.message || '';
            return sanitize(`${error.message}\n${causeMessage}`);
        }
        return sanitize(error.stack ?? error.message);
    }
    return sanitize(`${error}`);
}
class ResultsDbReporter extends Mocha.reporters.Spec {
    // The max length of the summary is 4000, but we need to leave some room for
    // the rest of the HTML formatting (e.g. <pre> and </pre>).
    static SUMMARY_LENGTH_CUTOFF = 3985;
    suitePrefix;
    constructor(runner, options) {
        super(runner, options);
        // `reportOptions` doesn't work with .mocharc.js (configurig via exports).
        // BUT, every module.exports is forwarded onto the options object.
        this.suitePrefix = options?.suiteName;
        runner.on(EVENT_TEST_PASS, this.onTestPass.bind(this));
        runner.on(EVENT_TEST_FAIL, this.onTestFail.bind(this));
        runner.on(EVENT_TEST_RETRY, this.onTestFail.bind(this));
        runner.on(EVENT_TEST_PENDING, this.onTestSkip.bind(this));
    }
    onTestPass(test) {
        const testResult = this.buildDefaultTestResultFrom(test);
        testResult.status = 'PASS';
        testResult.expected = true;
        ResultsDb.sendTestResult(testResult);
    }
    onTestFail(test, error) {
        const testResult = this.buildDefaultTestResultFrom(test);
        testResult.status = 'FAIL';
        testResult.expected = false;
        if (error instanceof screenshot_error_js_1.ScreenshotError) {
            [testResult.artifacts, testResult.summaryHtml] = error.toMiloArtifacts();
        }
        else {
            testResult.summaryHtml = `<pre>${getErrorMessage(error).slice(0, ResultsDbReporter.SUMMARY_LENGTH_CUTOFF)}</pre>`;
        }
        ResultsDb.sendTestResult(testResult);
    }
    onTestSkip(test) {
        const testResult = this.buildDefaultTestResultFrom(test);
        testResult.status = 'SKIP';
        testResult.expected = true;
        ResultsDb.sendTestResult(testResult);
    }
    buildDefaultTestResultFrom(test) {
        let testId = this.suitePrefix ? this.suitePrefix + '/' : '';
        testId += test.titlePath().join('/'); // Chrome groups test by a path logic.
        const testRetry = test;
        return {
            testId: ResultsDb.sanitizedTestId(testId),
            duration: `${test.duration || 0}ms`,
            tags: [{ key: 'run', 'value': String(testRetry.currentRetry() + 1) }],
        };
    }
}
exports = module.exports = ResultsDbReporter;
//# sourceMappingURL=mocha-resultsdb-reporter.js.map