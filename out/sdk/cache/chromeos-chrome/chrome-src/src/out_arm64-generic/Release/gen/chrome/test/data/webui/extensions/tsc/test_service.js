// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { FakeChromeEvent } from 'chrome://webui-test/fake_chrome_event.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
// An Service implementation to be used in tests.
export class TestService extends TestBrowserProxy {
    itemStateChangedTarget = new FakeChromeEvent();
    profileStateChangedTarget = new FakeChromeEvent();
    extensionActivityTarget = new FakeChromeEvent();
    userSiteSettingsChangedTarget = new FakeChromeEvent();
    acceptRuntimeHostPermission = true;
    testActivities;
    userSiteSettings;
    siteGroups;
    matchingExtensionsInfo;
    retryLoadUnpackedError_;
    forceReloadItemError_ = false;
    loadUnpackedSuccess_ = true;
    constructor() {
        super([
            'addRuntimeHostPermission',
            'addUserSpecifiedSites',
            'choosePackRootDirectory',
            'choosePrivateKeyPath',
            'deleteActivitiesById',
            'deleteActivitiesFromExtension',
            'deleteErrors',
            'deleteItem',
            'deleteItems',
            'uninstallItem',
            'downloadActivities',
            'getExtensionActivityLog',
            'getExtensionsInfo',
            'getExtensionSize',
            'getFilteredExtensionActivityLog',
            'getMatchingExtensionsForSite',
            'getProfileConfiguration',
            'getUserAndExtensionSitesByEtld',
            'getUserSiteSettings',
            'getUserSiteSettingsChangedTarget',
            'inspectItemView',
            'installDroppedFile',
            'loadUnpacked',
            'loadUnpackedFromDrag',
            'notifyDragInstallInProgress',
            'openUrl',
            'packExtension',
            'recordUserAction',
            'reloadItem',
            'removeRuntimeHostPermission',
            'removeUserSpecifiedSites',
            'repairItem',
            'requestFileSource',
            'retryLoadUnpacked',
            'setItemAllowedIncognito',
            'setItemAllowedOnFileUrls',
            'setItemCollectsErrors',
            'setItemEnabled',
            'setItemHostAccess',
            'setItemPinnedToToolbar',
            'setItemSafetyCheckWarningAcknowledged',
            'setProfileInDevMode',
            'setShortcutHandlingSuspended',
            'setShowAccessRequestsInToolbar',
            'shouldIgnoreUpdate',
            'showInFolder',
            'showItemOptionsPage',
            'updateAllExtensions',
            'updateExtensionCommandKeybinding',
            'updateExtensionCommandScope',
            'updateSiteAccess',
        ]);
    }
    setRetryLoadUnpackedError(error) {
        this.retryLoadUnpackedError_ = error;
    }
    setForceReloadItemError(force) {
        this.forceReloadItemError_ = force;
    }
    setLoadUnpackedSuccess(success) {
        this.loadUnpackedSuccess_ = success;
    }
    addRuntimeHostPermission(id, host) {
        this.methodCalled('addRuntimeHostPermission', [id, host]);
        return this.acceptRuntimeHostPermission ? Promise.resolve() :
            Promise.reject();
    }
    choosePackRootDirectory() {
        this.methodCalled('choosePackRootDirectory');
        return Promise.resolve('');
    }
    choosePrivateKeyPath() {
        this.methodCalled('choosePrivateKeyPath');
        return Promise.resolve('');
    }
    getProfileConfiguration() {
        this.methodCalled('getProfileConfiguration');
        return Promise.resolve({
            canLoadUnpacked: false,
            inDeveloperMode: false,
            isDeveloperModeControlledByPolicy: false,
            isIncognitoAvailable: false,
            isChildAccount: false,
        });
    }
    getItemStateChangedTarget() {
        return this.itemStateChangedTarget;
    }
    getProfileStateChangedTarget() {
        return this.profileStateChangedTarget;
    }
    getUserSiteSettingsChangedTarget() {
        return this.userSiteSettingsChangedTarget;
    }
    getExtensionsInfo() {
        this.methodCalled('getExtensionsInfo');
        return Promise.resolve([]);
    }
    getExtensionSize() {
        this.methodCalled('getExtensionSize');
        return Promise.resolve('20 MB');
    }
    inspectItemView(id, view) {
        this.methodCalled('inspectItemView', [id, view]);
    }
    removeRuntimeHostPermission(id, host) {
        this.methodCalled('removeRuntimeHostPermission', [id, host]);
        return Promise.resolve();
    }
    setItemAllowedIncognito(id, isAllowedIncognito) {
        this.methodCalled('setItemAllowedIncognito', [id, isAllowedIncognito]);
    }
    setItemAllowedOnFileUrls(id, isAllowedOnFileUrls) {
        this.methodCalled('setItemAllowedOnFileUrls', [id, isAllowedOnFileUrls]);
    }
    setItemSafetyCheckWarningAcknowledged(id) {
        this.methodCalled('setItemSafetyCheckWarningAcknowledged', id);
    }
    setItemEnabled(id, isEnabled) {
        this.methodCalled('setItemEnabled', [id, isEnabled]);
    }
    setItemCollectsErrors(id, collectsErrors) {
        this.methodCalled('setItemCollectsErrors', [id, collectsErrors]);
    }
    setItemHostAccess(id, access) {
        this.methodCalled('setItemHostAccess', [id, access]);
    }
    setItemPinnedToToolbar(id, pinnedToToolbar) {
        this.methodCalled('setItemPinnedToToolbar', [id, pinnedToToolbar]);
    }
    setShortcutHandlingSuspended(enable) {
        this.methodCalled('setShortcutHandlingSuspended', enable);
    }
    shouldIgnoreUpdate(extensionId, eventType) {
        this.methodCalled('shouldIgnoreUpdate', [extensionId, eventType]);
    }
    updateExtensionCommandKeybinding(extensionId, commandName, keybinding) {
        this.methodCalled('updateExtensionCommandKeybinding', [extensionId, commandName, keybinding]);
    }
    updateExtensionCommandScope(extensionId, commandName, scope) {
        this.methodCalled('updateExtensionCommandScope', [extensionId, commandName, scope]);
    }
    loadUnpacked() {
        this.methodCalled('loadUnpacked');
        return Promise.resolve(this.loadUnpackedSuccess_);
    }
    reloadItem(id) {
        this.methodCalled('reloadItem', id);
        return this.forceReloadItemError_ ? Promise.reject() : Promise.resolve();
    }
    retryLoadUnpacked(guid) {
        this.methodCalled('retryLoadUnpacked', guid);
        return (this.retryLoadUnpackedError_ !== undefined) ?
            Promise.reject(this.retryLoadUnpackedError_) :
            Promise.resolve(true);
    }
    requestFileSource(args) {
        this.methodCalled('requestFileSource', args);
        return Promise.resolve({
            highlight: '',
            beforeHighlight: '',
            afterHighlight: '',
            title: '',
            message: '',
        });
    }
    openUrl(url) {
        this.methodCalled('openUrl', url);
    }
    packExtension(rootPath, keyPath, flag) {
        this.methodCalled('packExtension', [rootPath, keyPath, flag]);
        return Promise.resolve({
            message: '',
            item_path: '',
            pem_path: '',
            override_flags: 0,
            status: chrome.developerPrivate.PackStatus.ERROR,
        });
    }
    repairItem(id) {
        this.methodCalled('repairItem', id);
    }
    setProfileInDevMode(inDevMode) {
        this.methodCalled('setProfileInDevMode', inDevMode);
    }
    showInFolder(id) {
        this.methodCalled('showInFolder', id);
    }
    showItemOptionsPage(extension) {
        this.methodCalled('showItemOptionsPage', extension);
    }
    updateAllExtensions(_extensions) {
        this.methodCalled('updateAllExtensions');
        return this.forceReloadItemError_ ? Promise.reject() : Promise.resolve();
    }
    getExtensionActivityLog(id) {
        this.methodCalled('getExtensionActivityLog', id);
        return Promise.resolve(this.testActivities);
    }
    getFilteredExtensionActivityLog(id, searchTerm) {
        // This is functionally identical to getFilteredExtensionActivityLog in
        // service.js but we do the filtering here instead of making API calls
        // with filter objects.
        this.methodCalled('getFilteredExtensionActivityLog', id, searchTerm);
        // Convert everything to lowercase as searching is not case sensitive.
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const activities = this.testActivities.activities;
        const apiCallMatches = activities.filter(activity => activity.apiCall.toLowerCase().includes(lowerCaseSearchTerm));
        const pageUrlMatches = activities.filter(activity => activity.pageUrl &&
            activity.pageUrl.toLowerCase().includes(lowerCaseSearchTerm));
        const argUrlMatches = activities.filter(activity => activity.argUrl &&
            activity.argUrl.toLowerCase().includes(lowerCaseSearchTerm));
        return Promise.resolve({ activities: [...apiCallMatches, ...pageUrlMatches, ...argUrlMatches] });
    }
    deleteActivitiesById(activityIds) {
        // Pretend to delete all activities specified by activityIds.
        const newActivities = this.testActivities.activities.filter(activity => !activityIds.includes(activity.activityId));
        this.testActivities = { activities: newActivities };
        this.methodCalled('deleteActivitiesById', activityIds);
        return Promise.resolve();
    }
    deleteActivitiesFromExtension(extensionId) {
        this.methodCalled('deleteActivitiesFromExtension', extensionId);
        return Promise.resolve();
    }
    deleteErrors(extensionId, _errorIds, _type) {
        this.methodCalled('deleteErrors', extensionId);
    }
    deleteItem(id) {
        this.methodCalled('deleteItem', id);
    }
    deleteItems(ids) {
        this.methodCalled('deleteItems', ids);
        return Promise.resolve();
    }
    uninstallItem(id) {
        this.methodCalled('uninstallItem', id);
        return Promise.resolve();
    }
    getOnExtensionActivity() {
        return this.extensionActivityTarget;
    }
    downloadActivities(rawActivityData, fileName) {
        this.methodCalled('downloadActivities', [rawActivityData, fileName]);
    }
    recordUserAction(metricName) {
        this.methodCalled('recordUserAction', metricName);
    }
    notifyDragInstallInProgress() {
        this.methodCalled('notifyDragInstallInProgress');
    }
    loadUnpackedFromDrag() {
        this.methodCalled('loadUnpackedFromDrag');
        return Promise.resolve(true);
    }
    installDroppedFile() {
        this.methodCalled('installDroppedFile');
    }
    getUserSiteSettings() {
        this.methodCalled('getUserSiteSettings');
        return Promise.resolve(this.userSiteSettings);
    }
    addUserSpecifiedSites(siteSet, hosts) {
        this.methodCalled('addUserSpecifiedSites', [siteSet, hosts]);
        return Promise.resolve();
    }
    removeUserSpecifiedSites(siteSet, hosts) {
        this.methodCalled('removeUserSpecifiedSites', [siteSet, hosts]);
        return Promise.resolve();
    }
    getUserAndExtensionSitesByEtld() {
        this.methodCalled('getUserAndExtensionSitesByEtld');
        return Promise.resolve(this.siteGroups);
    }
    setShowAccessRequestsInToolbar(id, showRequests) {
        this.methodCalled('setShowAccessRequestsInToolbar', id, showRequests);
    }
    getMatchingExtensionsForSite(site) {
        this.methodCalled('getMatchingExtensionsForSite', site);
        return Promise.resolve(this.matchingExtensionsInfo);
    }
    updateSiteAccess(site, updates) {
        this.methodCalled('updateSiteAccess', site, updates);
        return Promise.resolve();
    }
}
