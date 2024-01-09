// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestMetricsBrowserProxy extends TestBrowserProxy {
    constructor() {
        super([
            'recordAction',
            'recordSafetyCheckInteractionHistogram',
            'recordSafetyCheckNotificationsListCountHistogram',
            'recordSafetyCheckNotificationsModuleInteractionsHistogram',
            'recordSafetyCheckNotificationsModuleEntryPointShown',
            'recordSafetyCheckUnusedSitePermissionsListCountHistogram',
            'recordSafetyCheckUnusedSitePermissionsModuleInteractionsHistogram',
            'recordSafetyCheckUnusedSitePermissionsModuleEntryPointShown',
            'recordSettingsPageHistogram',
            'recordPrivacyGuideFlowLengthHistogram',
            'recordSafeBrowsingInteractionHistogram',
            'recordPrivacyGuideNextNavigationHistogram',
            'recordPrivacyGuideEntryExitHistogram',
            'recordPrivacyGuideSettingsStatesHistogram',
            'recordPrivacyGuideStepsEligibleAndReachedHistogram',
            'recordDeleteBrowsingDataAction',
            'recordSafetyHubCardStateClicked',
            'recordSafetyHubDashboardAnyWarning',
            'recordSafetyHubEntryPointClicked',
            'recordSafetyHubEntryPointShown',
            'recordSafetyHubImpression',
            'recordSafetyHubInteraction',
            'recordSafetyHubModuleWarningImpression',
            'recordSafetyHubNotificationPermissionsModuleInteractionsHistogram',
            'recordSafetyHubNotificationPermissionsModuleListCountHistogram',
            'recordSafetyHubUnusedSitePermissionsModuleInteractionsHistogram',
            'recordSafetyHubUnusedSitePermissionsModuleListCountHistogram',
        ]);
    }
    recordAction(action) {
        this.methodCalled('recordAction', action);
    }
    recordSafetyCheckInteractionHistogram(interaction) {
        this.methodCalled('recordSafetyCheckInteractionHistogram', interaction);
    }
    recordSafetyCheckNotificationsListCountHistogram(suggestions) {
        this.methodCalled('recordSafetyCheckNotificationsListCountHistogram', suggestions);
    }
    recordSafetyCheckNotificationsModuleInteractionsHistogram(interaction) {
        this.methodCalled('recordSafetyCheckNotificationsModuleInteractionsHistogram', interaction);
    }
    recordSafetyCheckNotificationsModuleEntryPointShown(visible) {
        this.methodCalled('recordSafetyCheckNotificationsModuleEntryPointShown', visible);
    }
    recordSafetyCheckUnusedSitePermissionsListCountHistogram(suggestions) {
        this.methodCalled('recordSafetyCheckUnusedSitePermissionsListCountHistogram', suggestions);
    }
    recordSafetyCheckUnusedSitePermissionsModuleInteractionsHistogram(interaction) {
        this.methodCalled('recordSafetyCheckUnusedSitePermissionsModuleInteractionsHistogram', interaction);
    }
    recordSafetyCheckUnusedSitePermissionsModuleEntryPointShown(visible) {
        this.methodCalled('recordSafetyCheckUnusedSitePermissionsModuleEntryPointShown', visible);
    }
    recordSettingsPageHistogram(interaction) {
        this.methodCalled('recordSettingsPageHistogram', interaction);
    }
    recordSafeBrowsingInteractionHistogram(interaction) {
        this.methodCalled('recordSafeBrowsingInteractionHistogram', interaction);
    }
    recordPrivacyGuideNextNavigationHistogram(interaction) {
        this.methodCalled('recordPrivacyGuideNextNavigationHistogram', interaction);
    }
    recordPrivacyGuideEntryExitHistogram(interaction) {
        this.methodCalled('recordPrivacyGuideEntryExitHistogram', interaction);
    }
    recordPrivacyGuideSettingsStatesHistogram(state) {
        this.methodCalled('recordPrivacyGuideSettingsStatesHistogram', state);
    }
    recordPrivacyGuideFlowLengthHistogram(steps) {
        this.methodCalled('recordPrivacyGuideFlowLengthHistogram', steps);
    }
    recordPrivacyGuideStepsEligibleAndReachedHistogram(status) {
        this.methodCalled('recordPrivacyGuideStepsEligibleAndReachedHistogram', status);
    }
    recordDeleteBrowsingDataAction(action) {
        this.methodCalled('recordDeleteBrowsingDataAction', action);
    }
    recordSafetyHubCardStateClicked(histogramName, state) {
        this.methodCalled('recordSafetyHubCardStateClicked', [histogramName, state]);
    }
    recordSafetyHubDashboardAnyWarning(visible) {
        this.methodCalled('recordSafetyHubDashboardAnyWarning', visible);
    }
    recordSafetyHubEntryPointClicked(page) {
        this.methodCalled('recordSafetyHubEntryPointClicked', page);
    }
    recordSafetyHubEntryPointShown(page) {
        this.methodCalled('recordSafetyHubModuleWarningImpression', page);
    }
    recordSafetyHubImpression(surface) {
        this.methodCalled('recordSafetyHubImpression', surface);
    }
    recordSafetyHubInteraction(surface) {
        this.methodCalled('recordSafetyHubInteraction', surface);
    }
    recordSafetyHubModuleWarningImpression(module) {
        this.methodCalled('recordSafetyHubModuleWarningImpression', module);
    }
    recordSafetyHubNotificationPermissionsModuleInteractionsHistogram(interaction) {
        this.methodCalled('recordSafetyHubNotificationPermissionsModuleInteractionsHistogram', interaction);
    }
    recordSafetyHubNotificationPermissionsModuleListCountHistogram(suggestions) {
        this.methodCalled('recordSafetyHubNotificationPermissionsModuleListCountHistogram', suggestions);
    }
    recordSafetyHubUnusedSitePermissionsModuleInteractionsHistogram(interaction) {
        this.methodCalled('recordSafetyHubUnusedSitePermissionsModuleInteractionsHistogram', interaction);
    }
    recordSafetyHubUnusedSitePermissionsModuleListCountHistogram(suggestions) {
        this.methodCalled('recordSafetyHubUnusedSitePermissionsModuleListCountHistogram', suggestions);
    }
}
