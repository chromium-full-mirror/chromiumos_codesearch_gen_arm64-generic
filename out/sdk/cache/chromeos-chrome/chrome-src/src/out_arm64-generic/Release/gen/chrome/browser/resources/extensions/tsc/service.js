// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { Dialog, navigation, Page } from './navigation_helper.js';
export class Service {
    constructor() {
        this.isDeleting_ = false;
        this.eventsToIgnoreOnce_ = new Set();
    }
    getProfileConfiguration() {
        return chrome.developerPrivate.getProfileConfiguration();
    }
    getItemStateChangedTarget() {
        return chrome.developerPrivate.onItemStateChanged;
    }
    shouldIgnoreUpdate(extensionId, eventType) {
        return this.eventsToIgnoreOnce_.delete(`${extensionId}_${eventType}`);
    }
    ignoreNextEvent(extensionId, eventType) {
        this.eventsToIgnoreOnce_.add(`${extensionId}_${eventType}`);
    }
    getProfileStateChangedTarget() {
        return chrome.developerPrivate.onProfileStateChanged;
    }
    getExtensionsInfo() {
        return chrome.developerPrivate.getExtensionsInfo({ includeDisabled: true, includeTerminated: true });
    }
    getExtensionSize(id) {
        return chrome.developerPrivate.getExtensionSize(id);
    }
    addRuntimeHostPermission(id, host) {
        return chrome.developerPrivate.addHostPermission(id, host);
    }
    removeRuntimeHostPermission(id, host) {
        return chrome.developerPrivate.removeHostPermission(id, host);
    }
    recordUserAction(metricName) {
        chrome.metricsPrivate.recordUserAction(metricName);
    }
    /**
     * Opens a file browser dialog for the user to select a file (or directory).
     * @return The promise to be resolved with the selected path.
     */
    chooseFilePath_(selectType, fileType) {
        return chrome.developerPrivate.choosePath(selectType, fileType)
            .catch(error => {
            if (error.message !== 'File selection was canceled.') {
                throw error;
            }
            return '';
        });
    }
    updateExtensionCommandKeybinding(extensionId, commandName, keybinding) {
        chrome.developerPrivate.updateExtensionCommand({
            extensionId: extensionId,
            commandName: commandName,
            keybinding: keybinding,
        });
    }
    updateExtensionCommandScope(extensionId, commandName, scope) {
        // The COMMAND_REMOVED event needs to be ignored since it is sent before
        // the command is added back with the updated scope but can be handled
        // after the COMMAND_ADDED event.
        this.ignoreNextEvent(extensionId, chrome.developerPrivate.EventType.COMMAND_REMOVED);
        chrome.developerPrivate.updateExtensionCommand({
            extensionId: extensionId,
            commandName: commandName,
            scope: scope,
        });
    }
    setShortcutHandlingSuspended(isCapturing) {
        chrome.developerPrivate.setShortcutHandlingSuspended(isCapturing);
    }
    /**
     * @return A signal that loading finished, rejected if any error occurred.
     */
    loadUnpackedHelper_(extraOptions) {
        const options = Object.assign({
            failQuietly: true,
            populateError: true,
        }, extraOptions);
        return chrome.developerPrivate.loadUnpacked(options)
            .then(loadError => {
            if (loadError) {
                throw loadError;
            }
            // The load was successful if there's no loadError.
            return true;
        })
            .catch(error => {
            if (error.message !== 'File selection was canceled.') {
                throw error;
            }
            return false;
        });
    }
    deleteItem(id) {
        if (this.isDeleting_) {
            return;
        }
        chrome.metricsPrivate.recordUserAction('Extensions.RemoveExtensionClick');
        this.isDeleting_ = true;
        chrome.management.uninstall(id, { showConfirmDialog: true })
            .catch(_ => {
            // The error was almost certainly the user canceling the dialog.
            // Do nothing. We only check it so we don't get noisy logs.
        })
            .finally(() => {
            this.isDeleting_ = false;
        });
    }
    /**
     * Allows the consumer to call the API asynchronously.
     */
    uninstallItem(id) {
        chrome.metricsPrivate.recordUserAction('Extensions.RemoveExtensionClick');
        return chrome.management.uninstall(id, { showConfirmDialog: true });
    }
    deleteItems(ids) {
        this.isDeleting_ = true;
        return chrome.developerPrivate.removeMultipleExtensions(ids).finally(() => {
            this.isDeleting_ = false;
        });
    }
    setItemSafetyCheckWarningAcknowledged(id) {
        return chrome.developerPrivate.updateExtensionConfiguration({
            extensionId: id,
            acknowledgeSafetyCheckWarning: true,
        });
    }
    setItemEnabled(id, isEnabled) {
        chrome.metricsPrivate.recordUserAction(isEnabled ? 'Extensions.ExtensionEnabled' :
            'Extensions.ExtensionDisabled');
        chrome.management.setEnabled(id, isEnabled);
    }
    setItemAllowedIncognito(id, isAllowedIncognito) {
        chrome.developerPrivate.updateExtensionConfiguration({
            extensionId: id,
            incognitoAccess: isAllowedIncognito,
        });
    }
    setItemAllowedOnFileUrls(id, isAllowedOnFileUrls) {
        chrome.developerPrivate.updateExtensionConfiguration({
            extensionId: id,
            fileAccess: isAllowedOnFileUrls,
        });
    }
    setItemHostAccess(id, hostAccess) {
        chrome.developerPrivate.updateExtensionConfiguration({
            extensionId: id,
            hostAccess: hostAccess,
        });
    }
    setItemCollectsErrors(id, collectsErrors) {
        chrome.developerPrivate.updateExtensionConfiguration({
            extensionId: id,
            errorCollection: collectsErrors,
        });
    }
    setItemPinnedToToolbar(id, pinnedToToolbar) {
        chrome.developerPrivate.updateExtensionConfiguration({
            extensionId: id,
            pinnedToToolbar,
        });
    }
    inspectItemView(id, view) {
        chrome.developerPrivate.openDevTools({
            extensionId: id,
            renderProcessId: view.renderProcessId,
            renderViewId: view.renderViewId,
            incognito: view.incognito,
            isServiceWorker: view.type === 'EXTENSION_SERVICE_WORKER_BACKGROUND',
        });
    }
    openUrl(url) {
        window.open(url);
    }
    reloadItem(id) {
        return chrome.developerPrivate
            .reload(id, { failQuietly: true, populateErrorForUnpacked: true })
            .then(loadError => {
            if (loadError) {
                throw loadError;
            }
        });
    }
    repairItem(id) {
        chrome.developerPrivate.repairExtension(id);
    }
    showItemOptionsPage(extension) {
        assert(extension && extension.optionsPage);
        if (extension.optionsPage.openInTab) {
            chrome.developerPrivate.showOptions(extension.id);
        }
        else {
            navigation.navigateTo({
                page: Page.DETAILS,
                subpage: Dialog.OPTIONS,
                extensionId: extension.id,
            });
        }
    }
    setProfileInDevMode(inDevMode) {
        chrome.developerPrivate.updateProfileConfiguration({ inDeveloperMode: inDevMode });
    }
    loadUnpacked() {
        return this.loadUnpackedHelper_();
    }
    retryLoadUnpacked(retryGuid) {
        // Attempt to load an unpacked extension, optionally as another attempt at
        // a previously-specified load.
        return this.loadUnpackedHelper_({ retryGuid });
    }
    choosePackRootDirectory() {
        return this.chooseFilePath_(chrome.developerPrivate.SelectType.FOLDER, chrome.developerPrivate.FileType.LOAD);
    }
    choosePrivateKeyPath() {
        return this.chooseFilePath_(chrome.developerPrivate.SelectType.FILE, chrome.developerPrivate.FileType.PEM);
    }
    packExtension(rootPath, keyPath, flag) {
        return chrome.developerPrivate.packDirectory(rootPath, keyPath, flag);
    }
    updateAllExtensions(extensions) {
        /**
         * Attempt to reload local extensions. If an extension fails to load, the
         * user is prompted to try updating the broken extension using loadUnpacked
         * and we skip reloading the remaining local extensions.
         */
        return chrome.developerPrivate.autoUpdate().then(() => {
            chrome.metricsPrivate.recordUserAction('Options_UpdateExtensions');
            return new Promise((resolve, reject) => {
                const loadLocalExtensions = async () => {
                    for (const extension of extensions) {
                        if (extension.location === 'UNPACKED') {
                            try {
                                await this.reloadItem(extension.id);
                            }
                            catch (loadError) {
                                reject(loadError);
                                break;
                            }
                        }
                    }
                    resolve();
                };
                loadLocalExtensions();
            });
        });
    }
    deleteErrors(extensionId, errorIds, type) {
        chrome.developerPrivate.deleteExtensionErrors({
            extensionId: extensionId,
            errorIds: errorIds,
            type: type,
        });
    }
    requestFileSource(args) {
        return chrome.developerPrivate.requestFileSource(args);
    }
    showInFolder(id) {
        chrome.developerPrivate.showPath(id);
    }
    getExtensionActivityLog(extensionId) {
        return chrome.activityLogPrivate.getExtensionActivities({
            activityType: chrome.activityLogPrivate.ExtensionActivityFilter.ANY,
            extensionId: extensionId,
        });
    }
    getFilteredExtensionActivityLog(extensionId, searchTerm) {
        const anyType = chrome.activityLogPrivate.ExtensionActivityFilter.ANY;
        // Construct one filter for each API call we will make: one for substring
        // search by api call, one for substring search by page URL, and one for
        // substring search by argument URL. % acts as a wildcard.
        const activityLogFilters = [
            {
                activityType: anyType,
                extensionId: extensionId,
                apiCall: `%${searchTerm}%`,
            },
            {
                activityType: anyType,
                extensionId: extensionId,
                pageUrl: `%${searchTerm}%`,
            },
            {
                activityType: anyType,
                extensionId: extensionId,
                argUrl: `%${searchTerm}%`,
            },
        ];
        const promises = activityLogFilters.map(filter => chrome.activityLogPrivate.getExtensionActivities(filter));
        return Promise.all(promises).then(results => {
            // We may have results that are present in one or more searches, so
            // we merge them here. We also assume that every distinct activity
            // id corresponds to exactly one activity.
            const activitiesById = new Map();
            for (const result of results) {
                for (const activity of result.activities) {
                    activitiesById.set(activity.activityId, activity);
                }
            }
            return { activities: Array.from(activitiesById.values()) };
        });
    }
    deleteActivitiesById(activityIds) {
        return chrome.activityLogPrivate.deleteActivities(activityIds);
    }
    deleteActivitiesFromExtension(extensionId) {
        return chrome.activityLogPrivate.deleteActivitiesByExtension(extensionId);
    }
    getOnExtensionActivity() {
        return chrome.activityLogPrivate.onExtensionActivity;
    }
    downloadActivities(rawActivityData, fileName) {
        const blob = new Blob([rawActivityData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
    }
    /**
     * Attempts to load an unpacked extension via a drag-n-drop gesture.
     * @return {!Promise}
     */
    loadUnpackedFromDrag() {
        return this.loadUnpackedHelper_({ useDraggedPath: true });
    }
    installDroppedFile() {
        chrome.developerPrivate.installDroppedFile();
    }
    notifyDragInstallInProgress() {
        chrome.developerPrivate.notifyDragInstallInProgress();
    }
    getUserSiteSettings() {
        return chrome.developerPrivate.getUserSiteSettings();
    }
    addUserSpecifiedSites(siteSet, hosts) {
        return chrome.developerPrivate.addUserSpecifiedSites({ siteSet, hosts });
    }
    removeUserSpecifiedSites(siteSet, hosts) {
        return chrome.developerPrivate.removeUserSpecifiedSites({ siteSet, hosts });
    }
    getUserAndExtensionSitesByEtld() {
        return chrome.developerPrivate.getUserAndExtensionSitesByEtld();
    }
    getMatchingExtensionsForSite(site) {
        return chrome.developerPrivate.getMatchingExtensionsForSite(site);
    }
    getUserSiteSettingsChangedTarget() {
        return chrome.developerPrivate.onUserSiteSettingsChanged;
    }
    setShowAccessRequestsInToolbar(id, showRequests) {
        chrome.developerPrivate.updateExtensionConfiguration({
            extensionId: id,
            showAccessRequestsInToolbar: showRequests,
        });
    }
    updateSiteAccess(site, updates) {
        return chrome.developerPrivate.updateSiteAccess(site, updates);
    }
    dismissSafetyHubExtensionsMenuNotification() {
        chrome.developerPrivate.dismissSafetyHubExtensionsMenuNotification();
    }
    static getInstance() {
        return instance || (instance = new Service());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
