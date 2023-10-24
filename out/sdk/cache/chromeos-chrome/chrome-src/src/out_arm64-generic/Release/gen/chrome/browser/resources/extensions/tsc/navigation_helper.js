// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
/**
 * The different pages that can be shown at a time.
 * Note: This must remain in sync with the page ids in manager.html!
 */
export var Page;
(function (Page) {
    Page["LIST"] = "items-list";
    Page["DETAILS"] = "details-view";
    Page["ACTIVITY_LOG"] = "activity-log";
    Page["SITE_PERMISSIONS"] = "site-permissions";
    Page["SITE_PERMISSIONS_ALL_SITES"] = "site-permissions-by-site";
    Page["SHORTCUTS"] = "keyboard-shortcuts";
    Page["ERRORS"] = "error-page";
})(Page || (Page = {}));
export var Dialog;
(function (Dialog) {
    Dialog["OPTIONS"] = "options";
})(Dialog || (Dialog = {}));
/** @return Whether a and b are equal. */
function isPageStateEqual(a, b) {
    return a.page === b.page && a.subpage === b.subpage &&
        a.extensionId === b.extensionId;
}
/**
 * Regular expression that captures the leading slash, the content and the
 * trailing slash in three different groups.
 */
const CANONICAL_PATH_REGEX = /(^\/)([\/-\w]+)(\/$)/;
/**
 * A helper object to manage in-page navigations. Since the extensions page
 * needs to support different urls for different subpages (like the details
 * page), we use this object to manage the history and url conversions.
 */
export class NavigationHelper {
    constructor() {
        this.nextListenerId_ = 1;
        this.listeners_ = new Map();
        this.processRoute_();
        window.addEventListener('popstate', () => {
            this.notifyRouteChanged_(this.getCurrentPage());
        });
    }
    get currentPath_() {
        return location.pathname.replace(CANONICAL_PATH_REGEX, '$1$2');
    }
    /**
     * Going to /configureCommands and /shortcuts should land you on /shortcuts,
     * and going to /sitePermissions should land you on /sitePermissions.
     * These are the only three supported routes, so all other cases will redirect
     * you to root path if not already on it.
     */
    processRoute_() {
        if (this.currentPath_ === '/configureCommands' ||
            this.currentPath_ === '/shortcuts') {
            window.history.replaceState(undefined /* stateObject */, '', '/shortcuts');
        }
        else if (this.currentPath_ === '/sitePermissions') {
            window.history.replaceState(undefined /* stateObject */, '', '/sitePermissions');
        }
        else if (this.currentPath_ === '/sitePermissions/allSites') {
            window.history.replaceState(undefined /* stateObject */, '', '/sitePermissions/allSites');
        }
        else if (this.currentPath_ !== '/') {
            window.history.replaceState(undefined /* stateObject */, '', '/');
        }
    }
    /**
     * @return The page that should be displayed for the current URL.
     */
    getCurrentPage() {
        const search = new URLSearchParams(location.search);
        let id = search.get('id');
        if (id) {
            return { page: Page.DETAILS, extensionId: id };
        }
        id = search.get('activity');
        if (id) {
            return { page: Page.ACTIVITY_LOG, extensionId: id };
        }
        id = search.get('options');
        if (id) {
            return { page: Page.DETAILS, extensionId: id, subpage: Dialog.OPTIONS };
        }
        id = search.get('errors');
        if (id) {
            return { page: Page.ERRORS, extensionId: id };
        }
        if (this.currentPath_ === '/shortcuts') {
            return { page: Page.SHORTCUTS };
        }
        if (this.currentPath_ === '/sitePermissions') {
            return { page: Page.SITE_PERMISSIONS };
        }
        if (this.currentPath_ === '/sitePermissions/allSites') {
            return { page: Page.SITE_PERMISSIONS_ALL_SITES };
        }
        return { page: Page.LIST };
    }
    /**
     * Function to add subscribers.
     * @param {!function(!PageState)} listener
     * @return A numerical ID to be used for removing the listener.
     */
    addListener(listener) {
        const nextListenerId = this.nextListenerId_++;
        this.listeners_.set(nextListenerId, listener);
        return nextListenerId;
    }
    /**
     * Remove a previously registered listener.
     * @return Whether a listener with the given ID was actually found and
     *   removed.
     */
    removeListener(id) {
        return this.listeners_.delete(id);
    }
    /**
     * Function to notify subscribers.
     */
    notifyRouteChanged_(newPage) {
        for (const listener of this.listeners_.values()) {
            listener(newPage);
        }
    }
    /**
     * @param newPage the page to navigate to.
     */
    navigateTo(newPage) {
        const currentPage = this.getCurrentPage();
        if (currentPage && isPageStateEqual(currentPage, newPage)) {
            return;
        }
        this.updateHistory(newPage, false /* replaceState */);
        this.notifyRouteChanged_(newPage);
    }
    /**
     * @param newPage the page to replace the current page with.
     */
    replaceWith(newPage) {
        this.updateHistory(newPage, true /* replaceState */);
        if (this.previousPage_ && isPageStateEqual(this.previousPage_, newPage)) {
            // Skip the duplicate history entry.
            history.back();
            return;
        }
        this.notifyRouteChanged_(newPage);
    }
    /**
     * Called when a page changes, and pushes state to history to reflect it.
     */
    updateHistory(entry, replaceState) {
        let path;
        switch (entry.page) {
            case Page.LIST:
                path = '/';
                break;
            case Page.ACTIVITY_LOG:
                path = '/?activity=' + entry.extensionId;
                break;
            case Page.DETAILS:
                if (entry.subpage) {
                    assert(entry.subpage === Dialog.OPTIONS);
                    path = '/?options=' + entry.extensionId;
                }
                else {
                    path = '/?id=' + entry.extensionId;
                }
                break;
            case Page.SITE_PERMISSIONS:
                path = '/sitePermissions';
                break;
            case Page.SITE_PERMISSIONS_ALL_SITES:
                path = '/sitePermissions/allSites';
                break;
            case Page.SHORTCUTS:
                path = '/shortcuts';
                break;
            case Page.ERRORS:
                path = '/?errors=' + entry.extensionId;
                break;
        }
        assert(path);
        const state = { url: path };
        const currentPage = this.getCurrentPage();
        const isDialogNavigation = currentPage.page === entry.page &&
            currentPage.extensionId === entry.extensionId;
        // Navigating to a dialog doesn't visually change pages; it just opens
        // a dialog. As such, we replace state rather than pushing a new state
        // on the stack so that hitting the back button doesn't just toggle the
        // dialog.
        if (replaceState || isDialogNavigation) {
            history.replaceState(state, '', path);
        }
        else {
            this.previousPage_ = currentPage;
            history.pushState(state, '', path);
        }
    }
}
export const navigation = new NavigationHelper();
