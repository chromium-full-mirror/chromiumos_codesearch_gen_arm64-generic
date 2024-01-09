// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-menu' shows a menu with a hardcoded set of pages and subpages.
 */
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_menu_selector/cr_menu_selector.js';
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/cr_elements/cr_nav_menu_item_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/polymer/v3_0/paper-ripple/paper-ripple.js';
import '../settings_vars.css.js';
import '../icons.html.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { RouteObserverMixin, Router } from '../router.js';
import { getTemplate } from './settings_menu.html.js';
const SettingsMenuElementBase = RouteObserverMixin(PolymerElement);
export class SettingsMenuElement extends SettingsMenuElementBase {
    static get is() {
        return 'settings-menu';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Dictionary defining page visibility.
             */
            pageVisibility: Object,
            showAdvancedFeaturesMainControl_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('showAdvancedFeaturesMainControl'),
            },
        };
    }
    ready() {
        super.ready();
        this.routes_ = Router.getInstance().getRoutes();
    }
    showExperimentalMenuItem_() {
        return this.showAdvancedFeaturesMainControl_ &&
            (!this.pageVisibility || this.pageVisibility.ai !== false);
    }
    currentRouteChanged(newRoute) {
        // 
        // Focus the initially selected path.
        const anchors = this.shadowRoot.querySelectorAll('a');
        for (let i = 0; i < anchors.length; ++i) {
            const anchorRoute = Router.getInstance().getRouteForPath(anchors[i].getAttribute('href'));
            if (anchorRoute && anchorRoute.contains(newRoute)) {
                this.setSelectedUrl_(anchors[i].href);
                return;
            }
        }
        this.setSelectedUrl_(''); // Nothing is selected.
    }
    focusFirstItem() {
        const firstFocusableItem = this.shadowRoot.querySelector('[role=menuitem]:not([hidden])');
        if (firstFocusableItem) {
            firstFocusableItem.focus();
        }
    }
    /**
     * Prevent clicks on sidebar items from navigating. These are only links for
     * accessibility purposes, taps are handled separately by <iron-selector>.
     */
    onLinkClick_(event) {
        if (event.target.matches('a:not(#extensionsLink)')) {
            event.preventDefault();
        }
    }
    /**
     * Keeps both menus in sync. |url| needs to come from |element.href| because
     * |iron-list| uses the entire url. Using |getAttribute| will not work.
     */
    setSelectedUrl_(url) {
        this.$.menu.selected = url;
    }
    onSelectorActivate_(event) {
        this.setSelectedUrl_(event.detail.selected);
        const path = new URL(event.detail.selected).pathname;
        const route = Router.getInstance().getRouteForPath(path);
        assert(route, 'settings-menu has an entry with an invalid route.');
        Router.getInstance().navigateTo(route, /* dynamicParams */ undefined, /* removeSearch */ true);
    }
    onExtensionsLinkClick_() {
        chrome.metricsPrivate.recordUserAction('SettingsMenu_ExtensionsLinkClicked');
    }
}
customElements.define(SettingsMenuElement.is, SettingsMenuElement);
