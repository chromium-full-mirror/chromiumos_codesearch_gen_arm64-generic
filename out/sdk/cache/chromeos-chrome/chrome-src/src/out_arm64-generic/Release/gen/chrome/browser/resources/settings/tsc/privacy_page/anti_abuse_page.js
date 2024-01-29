// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-anti-abuse-page' is the settings page containing anti-abuse
 * settings.
 */
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../controls/settings_toggle_button.js';
import '../icons.html.js';
import '../settings_shared.css.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { ContentSetting, ContentSettingsTypes } from '../site_settings/constants.js';
import { SiteSettingsMixin } from '../site_settings/site_settings_mixin.js';
import { ContentSettingProvider } from '../site_settings/site_settings_prefs_browser_proxy.js';
import { getTemplate } from './anti_abuse_page.html.js';
const AntiAbuseElementBase = SiteSettingsMixin(WebUiListenerMixin(PolymerElement));
export class SettingsAntiAbusePageElement extends AntiAbuseElementBase {
    static get is() {
        return 'settings-anti-abuse-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Preference object used to keep track of the selected content setting
             * option.
             */
            pref_: {
                type: Object,
                value() {
                    return { type: chrome.settingsPrivate.PrefType.BOOLEAN };
                },
            },
            toggleDisabled_: Boolean,
        };
    }
    static get observers() {
        return [
            'onEnforcementChanged_(pref_.enforcement)',
        ];
    }
    ready() {
        super.ready();
        this.addWebUiListener('contentSettingCategoryChanged', (category) => this.onCategoryChanged_(category));
        this.updateToggleValue_();
    }
    onCategoryChanged_(category) {
        if (category !== ContentSettingsTypes.ANTI_ABUSE) {
            return;
        }
        this.updateToggleValue_();
    }
    onEnforcementChanged_(enforcement) {
        this.toggleDisabled_ =
            enforcement === chrome.settingsPrivate.Enforcement.ENFORCED;
    }
    async updateToggleValue_() {
        const defaultValue = await this.browserProxy.getDefaultValueForContentType(ContentSettingsTypes.ANTI_ABUSE);
        if (defaultValue.source !== undefined &&
            defaultValue.source !== ContentSettingProvider.PREFERENCE) {
            this.set('pref_.enforcement', chrome.settingsPrivate.Enforcement.ENFORCED);
            let controlledBy = chrome.settingsPrivate.ControlledBy.USER_POLICY;
            switch (defaultValue.source) {
                case ContentSettingProvider.POLICY:
                    controlledBy = chrome.settingsPrivate.ControlledBy.DEVICE_POLICY;
                    break;
                case ContentSettingProvider.SUPERVISED_USER:
                    controlledBy = chrome.settingsPrivate.ControlledBy.PARENT;
                    break;
                case ContentSettingProvider.EXTENSION:
                    controlledBy = chrome.settingsPrivate.ControlledBy.EXTENSION;
                    break;
            }
            this.set('pref_.controlledBy', controlledBy);
        }
        else {
            this.set('pref_.enforcement', null);
            this.set('pref_.controlledBy', null);
        }
        this.set('pref_.value', this.computeIsSettingEnabled(defaultValue.setting));
    }
    /**
     * A handler for changing the default permission value for a the anti-abuse
     * content type.
     */
    onToggleChange_() {
        this.browserProxy.setDefaultValueForContentType(ContentSettingsTypes.ANTI_ABUSE, this.$.toggleButton.checked ? ContentSetting.ALLOW :
            ContentSetting.BLOCK);
    }
}
customElements.define(SettingsAntiAbusePageElement.is, SettingsAntiAbusePageElement);
