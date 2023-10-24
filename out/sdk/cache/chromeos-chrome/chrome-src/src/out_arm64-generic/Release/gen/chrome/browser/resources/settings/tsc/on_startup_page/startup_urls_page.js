// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-startup-urls-page' is the settings page
 * containing the urls that will be opened when chrome is started.
 */
import 'chrome://resources/js/action_link.js';
import 'chrome://resources/cr_elements/action_link.css.js';
import 'chrome://resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import 'chrome://resources/polymer/v3_0/iron-list/iron-list.js';
import '/shared/settings/controls/extension_controlled_indicator.js';
import '../settings_shared.css.js';
import './startup_url_dialog.js';
import { CrScrollableMixin } from 'chrome://resources/cr_elements/cr_scrollable_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { EDIT_STARTUP_URL_EVENT } from './startup_url_entry.js';
import { getTemplate } from './startup_urls_page.html.js';
import { StartupUrlsPageBrowserProxyImpl } from './startup_urls_page_browser_proxy.js';
const SettingsStartupUrlsPageElementBase = CrScrollableMixin(WebUiListenerMixin(PolymerElement));
export class SettingsStartupUrlsPageElement extends SettingsStartupUrlsPageElementBase {
    static get is() {
        return 'settings-startup-urls-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            prefs: Object,
            /**
             * Pages to load upon browser startup.
             */
            startupPages_: Array,
            showStartupUrlDialog_: Boolean,
            startupUrlDialogModel_: Object,
            lastFocused_: Object,
            listBlurred_: Boolean,
        };
    }
    constructor() {
        super();
        this.browserProxy_ = StartupUrlsPageBrowserProxyImpl.getInstance();
        /**
         * The element to return focus to, when the startup-url-dialog is closed.
         */
        this.startupUrlDialogAnchor_ = null;
    }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('update-startup-pages', (startupPages) => {
            // If an "edit" URL dialog was open, close it, because the underlying
            // page might have just been removed (and model indices have changed
            // anyway).
            if (this.startupUrlDialogModel_) {
                this.destroyUrlDialog_();
            }
            this.startupPages_ = startupPages;
            this.updateScrollableContents();
        });
        this.browserProxy_.loadStartupPages();
        this.addEventListener(EDIT_STARTUP_URL_EVENT, (event) => {
            const e = event;
            this.startupUrlDialogModel_ = e.detail.model;
            this.startupUrlDialogAnchor_ = e.detail.anchor;
            this.showStartupUrlDialog_ = true;
            e.stopPropagation();
        });
    }
    onAddPageClick_(e) {
        e.preventDefault();
        this.showStartupUrlDialog_ = true;
        this.startupUrlDialogAnchor_ =
            this.shadowRoot.querySelector('#addPage a[is=action-link]');
    }
    destroyUrlDialog_() {
        this.showStartupUrlDialog_ = false;
        this.startupUrlDialogModel_ = null;
        if (this.startupUrlDialogAnchor_) {
            focusWithoutInk(this.startupUrlDialogAnchor_);
            this.startupUrlDialogAnchor_ = null;
        }
    }
    onUseCurrentPagesClick_() {
        this.browserProxy_.useCurrentPages();
    }
    /**
     * @return Whether "Add new page" and "Use current pages" are allowed.
     */
    shouldAllowUrlsEdit_() {
        return this.get('prefs.session.startup_urls.enforcement') !==
            chrome.settingsPrivate.Enforcement.ENFORCED;
    }
}
customElements.define(SettingsStartupUrlsPageElement.is, SettingsStartupUrlsPageElement);
