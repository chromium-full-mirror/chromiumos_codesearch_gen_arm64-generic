// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './i18n_setup.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { dedupingMixin } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
/** Class for navigable routes. */
export class Route {
    constructor(path, title) {
        this.parent = null;
        this.depth = 0;
        /**
         * Whether this route corresponds to a navigable dialog. Those routes must
         * belong to a "section".
         */
        this.isNavigableDialog = false;
        // Legacy property to provide compatibility with the old routing system.
        this.section = '';
        this.path = path;
        this.title = title;
    }
    /**
     * Returns a new Route instance that's a child of this route.
     * @param path Extends this route's path if it doesn't contain a
     *     leading slash.
     */
    createChild(path, title) {
        assert(path);
        // |path| extends this route's path if it doesn't have a leading slash.
        // If it does have a leading slash, it's just set as the new route's URL.
        const newUrl = path[0] === '/' ? path : `${this.path}/${path}`;
        const route = new Route(newUrl, title);
        route.parent = this;
        route.section = this.section;
        route.depth = this.depth + 1;
        return route;
    }
    /**
     * Returns a new Route instance that's a child section of this route.
     * TODO(tommycli): Remove once we've obsoleted the concept of sections.
     */
    createSection(path, section, title) {
        const route = this.createChild(path, title);
        route.section = section;
        return route;
    }
    /**
     * Returns the absolute path string for this Route, assuming this function
     * has been called from within chrome://settings.
     */
    getAbsolutePath() {
        return window.location.origin + this.path;
    }
    /**
     * Returns true if this route matches or is an ancestor of the parameter.
     */
    contains(route) {
        for (let r = route; r != null; r = r.parent) {
            if (this === r) {
                return true;
            }
        }
        return false;
    }
    /**
     * Returns true if this route is a subpage of a section.
     */
    isSubpage() {
        return !this.isNavigableDialog && !!this.parent && !!this.section &&
            this.parent.section === this.section;
    }
}
/**
 * Regular expression that captures the leading slash, the content and the
 * trailing slash in three different groups.
 */
const CANONICAL_PATH_REGEX = /(^\/)([\/-\w]+)(\/$)/;
let routerInstance = null;
export class Router {
    /** @return The singleton instance. */
    static getInstance() {
        assert(routerInstance);
        return routerInstance;
    }
    /** @param instance */
    static setInstance(instance) {
        assert(!routerInstance);
        routerInstance = instance;
    }
    static resetInstanceForTesting(instance) {
        if (routerInstance) {
            instance.routeObservers_ = routerInstance.routeObservers_;
        }
        routerInstance = instance;
    }
    constructor(availableRoutes) {
        /**
         * The current query parameters. This is updated only by
         * settings.navigateTo or settings.initializeRouteFromUrl.
         */
        this.currentQueryParameters_ = new URLSearchParams();
        this.wasLastRouteChangePopstate_ = false;
        this.initializeRouteFromUrlCalled_ = false;
        this.routeObservers_ = new Set();
        this.routes_ = availableRoutes;
        this.currentRoute = this.routes_.BASIC;
    }
    addObserver(observer) {
        assert(!this.routeObservers_.has(observer));
        this.routeObservers_.add(observer);
    }
    removeObserver(observer) {
        assert(this.routeObservers_.delete(observer));
    }
    getRoute(routeName) {
        return this.routeDictionary_()[routeName];
    }
    getRoutes() {
        return this.routes_;
    }
    /**
     * Helper function to set the current route and notify all observers.
     */
    setCurrentRoute(route, queryParameters, isPopstate) {
        this.recordMetrics(route.path);
        const oldRoute = this.currentRoute;
        this.currentRoute = route;
        this.currentQueryParameters_ = queryParameters;
        this.wasLastRouteChangePopstate_ = isPopstate;
        new Set(this.routeObservers_).forEach((observer) => {
            observer.currentRouteChanged(this.currentRoute, oldRoute);
        });
        this.updateTitle_();
    }
    /**
     * Updates the page title to reflect the current route.
     */
    updateTitle_() {
        if (this.currentRoute.title) {
            document.title = loadTimeData.getStringF('settingsAltPageTitle', this.currentRoute.title);
        }
        else if (this.currentRoute.isNavigableDialog && this.currentRoute.parent &&
            this.currentRoute.parent.title) {
            document.title = loadTimeData.getStringF('settingsAltPageTitle', this.currentRoute.parent.title);
        }
        else if (!this.currentRoute.isSubpage() &&
            !this.routes_.ABOUT.contains(this.currentRoute)) {
            document.title = loadTimeData.getString('settings');
        }
    }
    getCurrentRoute() {
        return this.currentRoute;
    }
    getQueryParameters() {
        return new URLSearchParams(this.currentQueryParameters_); // Defensive copy.
    }
    lastRouteChangeWasPopstate() {
        return this.wasLastRouteChangePopstate_;
    }
    routeDictionary_() {
        return this.routes_;
    }
    /**
     * @return The matching canonical route, or null if none matches.
     */
    getRouteForPath(path) {
        // Allow trailing slash in paths.
        const canonicalPath = path.replace(CANONICAL_PATH_REGEX, '$1$2');
        // TODO(tommycli): Use Object.values once Closure compilation supports it.
        const matchingKey = Object.keys(this.routes_)
            .find((key) => this.routeDictionary_()[key].path === canonicalPath);
        return matchingKey ? this.routeDictionary_()[matchingKey] : null;
    }
    /**
     * Updates the URL parameters of the current route via exchanging the
     * window history state. This changes the Settings route path, but doesn't
     * change the route itself, hence does not push a new route history entry.
     * Notifies routeChangedObservers.
     */
    updateRouteParams(params) {
        let url = this.currentRoute.path;
        const queryString = params.toString();
        if (queryString) {
            url += '?' + queryString;
        }
        window.history.replaceState(window.history.state, '', url);
        // We can't call |setCurrentRoute()| for the following, as it would also
        // update |oldRoute| and |currentRoute|, which should not happen when
        // only the URL parameters are updated.
        this.currentQueryParameters_ = params;
        new Set(this.routeObservers_).forEach((observer) => {
            observer.currentRouteChanged(this.currentRoute, this.currentRoute);
        });
    }
    /**
     * Navigates to a canonical route and pushes a new history entry.
     * @param dynamicParameters Navigations to the same
     *     URL parameters in a different order will still push to history.
     * @param removeSearch Whether to strip the 'search' URL
     *     parameter during navigation. Defaults to false.
     */
    navigateTo(route, dynamicParameters, removeSearch = false) {
        // The ADVANCED route only serves as a parent of subpages, and should not
        // be possible to navigate to it directly.
        if (route === this.routes_.ADVANCED) {
            route = this.routes_.BASIC;
        }
        const params = dynamicParameters || new URLSearchParams();
        const oldSearchParam = this.getQueryParameters().get('search') || '';
        const newSearchParam = params.get('search') || '';
        if (!removeSearch && oldSearchParam && !newSearchParam) {
            params.append('search', oldSearchParam);
        }
        let url = route.path;
        const queryString = params.toString();
        if (queryString) {
            url += '?' + queryString;
        }
        // History serializes the state, so we don't push the actual route object.
        window.history.pushState(this.currentRoute.path, '', url);
        this.setCurrentRoute(route, params, false);
    }
    /**
     * Navigates to the previous route if it has an equal or lesser depth.
     * If there is no previous route in history meeting those requirements,
     * this navigates to the immediate parent. This will never exit Settings.
     */
    navigateToPreviousRoute() {
        let previousRoute = null;
        if (window.history.state) {
            previousRoute = this.getRouteForPath(window.history.state);
            assert(previousRoute);
        }
        if (previousRoute && previousRoute.depth <= this.currentRoute.depth) {
            window.history.back();
        }
        else {
            this.navigateTo(this.currentRoute.parent || this.routes_.BASIC);
        }
    }
    /**
     * Initialize the route and query params from the URL.
     */
    initializeRouteFromUrl() {
        assert(!this.initializeRouteFromUrlCalled_);
        this.initializeRouteFromUrlCalled_ = true;
        const route = this.getRouteForPath(window.location.pathname);
        // Record all correct paths entered on the settings page, and
        // as all incorrect paths are routed to the main settings page,
        // record all incorrect paths as hitting the main settings page.
        this.recordMetrics(route ? route.path : this.routes_.BASIC.path);
        // Never allow direct navigation to ADVANCED.
        if (route && route !== this.routes_.ADVANCED) {
            this.currentRoute = route;
            this.currentQueryParameters_ =
                new URLSearchParams(window.location.search);
        }
        else {
            window.history.replaceState(undefined, '', this.routes_.BASIC.path);
        }
        this.updateTitle_();
    }
    /**
     * Make a UMA note about visiting this URL path.
     * @param urlPath The url path (only).
     */
    recordMetrics(urlPath) {
        assert(!urlPath.startsWith('chrome://'));
        assert(!urlPath.startsWith('settings'));
        assert(urlPath.startsWith('/'));
        assert(!urlPath.match(/\?/g));
        const metricName = 'WebUI.Settings.PathVisited';
        chrome.metricsPrivate.recordSparseValueWithPersistentHash(metricName, urlPath);
    }
    resetRouteForTesting() {
        this.initializeRouteFromUrlCalled_ = false;
        this.wasLastRouteChangePopstate_ = false;
        this.currentRoute = this.routes_.BASIC;
        this.currentQueryParameters_ = new URLSearchParams();
    }
}
export const RouteObserverMixin = dedupingMixin((superClass) => {
    class RouteObserverMixin extends superClass {
        connectedCallback() {
            super.connectedCallback();
            assert(routerInstance);
            routerInstance.addObserver(this);
            // Emulating Polymer data bindings, the observer is called when the
            // element starts observing the route.
            this.currentRouteChanged(routerInstance.currentRoute, undefined);
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            assert(routerInstance);
            routerInstance.removeObserver(this);
        }
        currentRouteChanged(_newRoute, _oldRoute) {
            assertNotReached();
        }
    }
    return RouteObserverMixin;
});
