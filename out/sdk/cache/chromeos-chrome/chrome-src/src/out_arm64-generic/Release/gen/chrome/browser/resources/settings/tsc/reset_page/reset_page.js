// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-reset-page' is the settings page containing reset
 * settings.
 */
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render.js';
import '../settings_page/settings_animated_pages.js';
import '../settings_shared.css.js';
import './reset_profile_dialog.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { BaseMixin } from '../base_mixin.js';
// 
import { routes } from '../route.js';
import { RouteObserverMixin, Router } from '../router.js';
import { getTemplate } from './reset_page.html.js';
const SettingsResetPageElementBase = RouteObserverMixin(BaseMixin(PolymerElement));
export class SettingsResetPageElement extends SettingsResetPageElementBase {
    static get is() {
        return 'settings-reset-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /** Preferences state. */
            prefs: Object,
            // 
        };
    }
    // 
    /**
     * RouteObserverMixin
     */
    currentRouteChanged(route) {
        const lazyRender = this.$.resetProfileDialog;
        if (route === routes.TRIGGERED_RESET_DIALOG ||
            route === routes.RESET_DIALOG) {
            lazyRender.get().show();
        }
        else {
            const dialog = lazyRender.getIfExists();
            if (dialog) {
                dialog.cancel();
            }
        }
    }
    onShowResetProfileDialog_() {
        Router.getInstance().navigateTo(routes.RESET_DIALOG, new URLSearchParams('origin=userclick'));
    }
    onResetProfileDialogClose_() {
        Router.getInstance().navigateTo(routes.RESET_DIALOG.parent);
        focusWithoutInk(this.$.resetProfile);
    }
}
customElements.define(SettingsResetPageElement.is, SettingsResetPageElement);
