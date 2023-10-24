// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { dedupingMixin } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
/**
 * The different pages that can be shown at a time.
 */
export var Page;
(function (Page) {
    Page["PASSWORDS"] = "passwords";
    Page["CHECKUP"] = "checkup";
    Page["SETTINGS"] = "settings";
    // Sub-pages
    Page["CHECKUP_DETAILS"] = "checkup-details";
    Page["PASSWORD_DETAILS"] = "password-details";
})(Page || (Page = {}));
/**
 * The different checkup sub-pages that can be shown at a time.
 */
export var CheckupSubpage;
(function (CheckupSubpage) {
    CheckupSubpage["COMPROMISED"] = "compromised";
    CheckupSubpage["REUSED"] = "reused";
    CheckupSubpage["WEAK"] = "weak";
})(CheckupSubpage || (CheckupSubpage = {}));
export var UrlParam;
(function (UrlParam) {
    // Parameter which indicates search term.
    UrlParam["SEARCH_TERM"] = "q";
    // If this parameter is true, password check will start automatically when
    // navigating to Checkup section.
    UrlParam["START_CHECK"] = "start";
    // Triggers import on the Settings page.
    UrlParam["START_IMPORT"] = "import";
})(UrlParam || (UrlParam = {}));
export class Route {
    constructor(page, queryParameters, details) {
        this.page = page;
        this.queryParameters = queryParameters || new URLSearchParams();
        this.details = details;
    }
    path() {
        let path;
        switch (this.page) {
            case Page.PASSWORDS:
            case Page.CHECKUP:
            case Page.SETTINGS:
                path = '/' + this.page;
                break;
            case Page.PASSWORD_DETAILS:
                const group = this.details;
                // When navigating from the passwords list details will be
                // |CredentialGroup|. In case of direct navigation details is string.
                const origin = group.name ? group.name : this.details;
                assert(origin);
                path = '/' + Page.PASSWORDS + '/' + origin;
                break;
            case Page.CHECKUP_DETAILS:
                assert(this.details);
                path = '/' + Page.CHECKUP + '/' + this.details;
                break;
        }
        const queryString = this.queryParameters.toString();
        if (queryString) {
            path += '?' + queryString;
        }
        return path;
    }
}
/**
 * A helper object to manage in-page navigations. Since the Password Manager
 * page needs to support different urls for different subpages (like the checkup
 * page), we use this object to manage the history and url conversions.
 */
export class Router {
    static getInstance() {
        return routerInstance || (routerInstance = new Router());
    }
    constructor() {
        this.currentRoute_ = new Route(Page.PASSWORDS);
        this.previousRoute_ = null;
        this.routeObservers_ = new Set();
        this.processRoute_();
        window.addEventListener('popstate', () => {
            this.processRoute_();
        });
    }
    addObserver(observer) {
        assert(!this.routeObservers_.has(observer));
        this.routeObservers_.add(observer);
    }
    removeObserver(observer) {
        assert(this.routeObservers_.delete(observer));
    }
    get currentRoute() {
        return this.currentRoute_;
    }
    get previousRoute() {
        return this.previousRoute_;
    }
    /**
     * Navigates to a page and pushes a new history entry.
     */
    navigateTo(page, details, params = new URLSearchParams()) {
        const newRoute = new Route(page, params, details);
        if (this.currentRoute_.path() === newRoute.path()) {
            return;
        }
        const oldRoute = this.currentRoute_;
        this.currentRoute_ = newRoute;
        const path = this.currentRoute_.path();
        const state = { url: path };
        history.pushState(state, '', path);
        this.notifyObservers_(oldRoute);
    }
    /**
     * Updates the URL parameters of the current route via replacing the
     * window history state. This changes location.search but doesn't
     * change the page itself, hence does not push a new route history entry.
     * Notifies routeObservers_.
     */
    updateRouterParams(params) {
        const oldRoute = this.currentRoute_;
        this.currentRoute_ = new Route(oldRoute.page, params, oldRoute.details);
        window.history.replaceState(window.history.state, '', this.currentRoute_.path());
        this.notifyObservers_(oldRoute);
    }
    notifyObservers_(oldRoute) {
        assert(oldRoute !== this.currentRoute_);
        this.previousRoute_ = oldRoute;
        for (const observer of this.routeObservers_) {
            observer.currentRouteChanged(this.currentRoute_, oldRoute);
        }
    }
    /**
     * Helper function to set the current page and notify all observers.
     */
    processRoute_() {
        const oldRoute = this.currentRoute_;
        this.currentRoute_ =
            new Route(oldRoute.page, new URLSearchParams(location.search));
        const section = location.pathname.substring(1).split('/')[0] || '';
        const details = location.pathname.substring(2 + section.length);
        switch (section) {
            case Page.PASSWORDS:
                if (details) {
                    this.currentRoute_.page = Page.PASSWORD_DETAILS;
                    this.currentRoute_.details = details;
                }
                else {
                    this.currentRoute_.page = Page.PASSWORDS;
                }
                break;
            case Page.CHECKUP:
                if (details && details) {
                    this.currentRoute_.page = Page.CHECKUP_DETAILS;
                    this.currentRoute_.details = details;
                }
                else {
                    this.currentRoute_.page = Page.CHECKUP;
                }
                break;
            case Page.SETTINGS:
                this.currentRoute_.page = Page.SETTINGS;
                break;
            default:
                history.replaceState({}, '', this.currentRoute_.page);
        }
        this.notifyObservers_(oldRoute);
    }
}
let routerInstance = null;
export const RouteObserverMixin = dedupingMixin((superClass) => {
    class RouteObserverMixin extends superClass {
        connectedCallback() {
            super.connectedCallback();
            Router.getInstance().addObserver(this);
            this.currentRouteChanged(Router.getInstance().currentRoute, Router.getInstance().currentRoute);
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            Router.getInstance().removeObserver(this);
        }
        currentRouteChanged(_newRoute, _oldRoute) {
            assertNotReached();
        }
    }
    return RouteObserverMixin;
});
