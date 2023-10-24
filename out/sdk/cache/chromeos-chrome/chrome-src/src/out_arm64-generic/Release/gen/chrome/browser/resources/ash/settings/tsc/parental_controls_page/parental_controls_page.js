// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * Settings page for managing Parental Controls features.
 */
import 'chrome://resources/cr_elements/icons.html.js';
import '../os_settings_page/os_settings_animated_pages.js';
import '../os_settings_page/os_settings_subpage.js';
import '../settings_shared.css.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { castExists } from '../assert_extras.js';
import { isChild } from '../common/load_time_booleans.js';
import { ParentalControlsBrowserProxyImpl } from './parental_controls_browser_proxy.js';
import { getTemplate } from './parental_controls_page.html.js';
const SettingsParentalControlsPageElementBase = I18nMixin(PolymerElement);
export class SettingsParentalControlsPageElement extends SettingsParentalControlsPageElementBase {
    static get is() {
        return 'settings-parental-controls-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            isChild_: {
                type: Boolean,
                value() {
                    return isChild();
                },
            },
            online_: {
                type: Boolean,
                value() {
                    return navigator.onLine;
                },
            },
        };
    }
    constructor() {
        super();
        this.browserProxy_ = ParentalControlsBrowserProxyImpl.getInstance();
    }
    ready() {
        super.ready();
        // Set up online/offline listeners.
        window.addEventListener('offline', this.onOffline_.bind(this));
        window.addEventListener('online', this.onOnline_.bind(this));
    }
    /**
     * Returns the setup parental controls CrButtonElement.
     */
    getSetupButton() {
        return castExists(this.shadowRoot.querySelector('#setupButton'));
    }
    /**
     * Updates the UI when the device goes offline.
     */
    onOffline_() {
        this.online_ = false;
    }
    /**
     * Updates the UI when the device comes online.
     */
    onOnline_() {
        this.online_ = true;
    }
    /**
     * @return Returns the string to display in the main
     * description area for non-child users.
     */
    getSetupLabelText_(online) {
        if (online) {
            return this.i18n('parentalControlsPageSetUpLabel');
        }
        else {
            return this.i18n('parentalControlsPageConnectToInternetLabel');
        }
    }
    handleSetupButtonClick_(event) {
        event.stopPropagation();
        this.browserProxy_.showAddSupervisionDialog();
    }
    handleFamilyLinkButtonClick_(event) {
        event.stopPropagation();
        this.browserProxy_.launchFamilyLinkSettings();
    }
}
customElements.define(SettingsParentalControlsPageElement.is, SettingsParentalControlsPageElement);
