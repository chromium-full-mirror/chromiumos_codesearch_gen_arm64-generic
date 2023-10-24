// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertNotReached } from 'chrome://resources/js/assert.js';
import { dedupingMixin } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { Router } from './router.js';
export const RouteObserverMixin = dedupingMixin((superClass) => {
    class RouteObserverMixin extends superClass {
        constructor(...args) {
            super(...args);
            this.routerInstance_ = Router.getInstance();
        }
        connectedCallback() {
            super.connectedCallback();
            this.routerInstance_.addObserver(this);
            // Emulating Polymer data bindings, the observer is called when the
            // element starts observing the route.
            this.currentRouteChanged(this.routerInstance_.currentRoute, undefined);
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.routerInstance_.removeObserver(this);
        }
        currentRouteChanged(_newRoute, _oldRoute) {
            assertNotReached('Element must implement currentRouteChanged().');
        }
    }
    return RouteObserverMixin;
});
