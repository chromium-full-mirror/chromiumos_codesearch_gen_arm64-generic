// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { FakeMethodResolver } from 'chrome://resources/ash/common/fake_method_resolver.js';
import { assert } from 'chrome://resources/js/assert.js';
import { SendReportStatus } from './os_feedback_ui.mojom-webui.js';
/**
 * @fileoverview
 * Implements a fake version of the FeedbackServiceProvider mojo interface.
 */
export class FakeFeedbackServiceProvider {
    constructor() {
        this.exitPath = null;
        this.helpContentOutcome = null;
        this.postSubmitAction = null;
        this.preSubmitActionMap = new Map();
        /** Used to track how many times each method is being called.*/
        this.callCounts = {
            getFeedbackContext: 0,
            getScreenshotPng: 0,
            sendReport: 0,
            openDiagnosticsApp: 0,
            openExploreApp: 0,
            openMetricsDialog: 0,
            openSystemInfoDialog: 0,
            openAutofillDialog: 0,
            recordHelpContentSearchResultCount: 0,
        };
        this.methods = new FakeMethodResolver();
        // Setup method resolvers.
        this.methods.register('getFeedbackContext');
        this.methods.register('getScreenshotPng');
        this.methods.register('sendReport');
        // Let sendReport return success by default.
        this.methods.setResult('sendReport', { status: SendReportStatus.kSuccess });
        // Let getScreenshotPng return an empty array by default.
        this.methods.setResult('getScreenshotPng', { pngData: [] });
    }
    getFeedbackContextCallCount() {
        return this.callCounts.getFeedbackContext;
    }
    getFeedbackContext() {
        this.callCounts.getFeedbackContext++;
        return this.methods.resolveMethod('getFeedbackContext');
    }
    getSendReportCallCount() {
        return this.callCounts.sendReport;
    }
    sendReport(_report) {
        this.callCounts.sendReport++;
        return this.methods.resolveMethod('sendReport');
    }
    getScreenshotPngCallCount() {
        return this.callCounts.getScreenshotPng;
    }
    getScreenshotPng() {
        this.callCounts.getScreenshotPng++;
        return this.methods.resolveMethod('getScreenshotPng');
    }
    /** Sets the value that will be returned when calling getFeedbackContext(). */
    setFakeFeedbackContext(feedbackContext) {
        this.methods.setResult('getFeedbackContext', { feedbackContext });
    }
    /**  Sets the value that will be returned when calling sendReport(). */
    setFakeSendFeedbackStatus(status) {
        this.methods.setResult('sendReport', { status });
    }
    /**  Sets the value that will be returned when calling getScreenshotPng(). */
    setFakeScreenshotPng(data) {
        this.methods.setResult('getScreenshotPng', { pngData: data });
    }
    getOpenDiagnosticsAppCallCount() {
        return this.callCounts.openDiagnosticsApp;
    }
    openDiagnosticsApp() {
        this.callCounts.openDiagnosticsApp++;
    }
    getOpenExploreAppCallCount() {
        return this.callCounts.openExploreApp;
    }
    openExploreApp() {
        this.callCounts.openExploreApp++;
    }
    getOpenMetricsDialogCallCount() {
        return this.callCounts.openMetricsDialog;
    }
    openMetricsDialog() {
        this.callCounts.openMetricsDialog++;
    }
    getOpenSystemInfoDialogCallCount() {
        return this.callCounts.openSystemInfoDialog;
    }
    openSystemInfoDialog() {
        this.callCounts.openSystemInfoDialog++;
    }
    getOpenAutofillDialogCallCount() {
        return this.callCounts.openAutofillDialog;
    }
    openAutofillDialog() {
        this.callCounts.openAutofillDialog++;
    }
    getRecordHelpContentSearchResultCount() {
        return this.callCounts.recordHelpContentSearchResultCount;
    }
    recordHelpContentSearchResultCount() {
        this.callCounts.recordHelpContentSearchResultCount++;
    }
    isRecordPostSubmitActionCalled(action) {
        return this.postSubmitAction !== null && this.postSubmitAction === action;
    }
    recordPostSubmitAction(action) {
        if (this.postSubmitAction === null) {
            this.postSubmitAction = action;
        }
    }
    isRecordExitPathCalled(exitPath) {
        return this.exitPath !== null && this.exitPath === exitPath;
    }
    recordExitPath(exitPath) {
        if (this.exitPath === null) {
            this.exitPath = exitPath;
        }
    }
    getRecordPreSubmitActionCallCount(action) {
        return this.preSubmitActionMap.get(action) || 0;
    }
    recordPreSubmitAction(action) {
        this.preSubmitActionMap.set(action, this.getRecordPreSubmitActionCallCount(action) + 1);
    }
    isHelpContentOutcomeMetricEmitted(outcome) {
        return this.helpContentOutcome !== null &&
            this.helpContentOutcome === outcome;
    }
    recordHelpContentOutcome(outcome) {
        assert(this.helpContentOutcome === null);
        this.helpContentOutcome = outcome;
    }
}
