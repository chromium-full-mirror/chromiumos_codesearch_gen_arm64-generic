// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertNotReached } from 'chrome://resources/js/assert.js';
import { dedupingMixin } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { Router } from '../router.js';
export const RouteObserverMixin = dedupingMixin((superClass) => {
    class RouteObserverMixin extends superClass {
        connectedCallback() {
            super.connectedCallback();
            const routerInstance = Router.getInstance();
            routerInstance.addObserver(this);
            // Emulating Polymer data bindings, the observer is called when the
            // element starts observing the route.
            this.currentRouteChanged(routerInstance.currentRoute, undefined);
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            Router.getInstance().removeObserver(this);
        }
        currentRouteChanged(_newRoute, _oldRoute) {
            assertNotReached('Element must implement currentRouteChanged().');
        }
    }
    return RouteObserverMixin;
});
