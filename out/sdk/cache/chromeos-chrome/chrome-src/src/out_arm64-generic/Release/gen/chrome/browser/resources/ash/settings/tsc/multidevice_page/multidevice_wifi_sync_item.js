// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-multidevice-wifi-sync-item' encapsulates special
 * logic for the wifi sync item used in the multidevice subpage.
 *
 * Wifi sync depends on Chrome Sync being activated. This component uses sync
 * proxies from the people page to check whether chrome sync is enabled.
 *
 * If it is enabled the multidevice feature item is used in the standard way,
 * otherwise the feature-controller and localized-link slots are overridden with
 * a disabled toggle and the wifi sync localized string component that is a
 * special case containing two links.
 */
import './multidevice_feature_item.js';
import './multidevice_wifi_sync_disabled_link.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import '../settings_shared.css.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { OsSyncBrowserProxyImpl } from '../os_people_page/os_sync_browser_proxy.js';
import { MultiDeviceFeatureMixin } from './multidevice_feature_mixin.js';
import { getTemplate } from './multidevice_wifi_sync_item.html.js';
const SettingsMultideviceWifiSyncItemElementBase = MultiDeviceFeatureMixin(WebUiListenerMixin(PolymerElement));
class SettingsMultideviceWifiSyncItemElement extends SettingsMultideviceWifiSyncItemElementBase {
    static get is() {
        return 'settings-multidevice-wifi-sync-item';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            isWifiSyncV1Enabled_: Boolean,
        };
    }
    constructor() {
        super();
        this.osSyncBrowserProxy_ = OsSyncBrowserProxyImpl.getInstance();
    }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('os-sync-prefs-changed', this.handleOsSyncPrefsChanged_.bind(this));
        this.osSyncBrowserProxy_.sendOsSyncPrefsChanged();
    }
    /**
     * Handler for when os sync preferences are updated.
     */
    handleOsSyncPrefsChanged_(osSyncPrefs) {
        this.isWifiSyncV1Enabled_ =
            !!osSyncPrefs && osSyncPrefs.osWifiConfigurationsSynced;
    }
    focus() {
        this.shadowRoot.querySelector('settings-multidevice-feature-item').focus();
    }
}
customElements.define(SettingsMultideviceWifiSyncItemElement.is, SettingsMultideviceWifiSyncItemElement);
