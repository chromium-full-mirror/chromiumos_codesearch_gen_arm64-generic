// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-storage-external' is the settings subpage for external storage
 * settings.
 */
import 'chrome://resources/ash/common/cr_elements/localized_link/localized_link.js';
import 'chrome://resources/cr_components/settings_prefs/prefs.js';
import './storage_external_entry.js';
import '../settings_shared.css.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/ash/common/cr_elements/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { DevicePageBrowserProxyImpl } from './device_page_browser_proxy.js';
import { getTemplate } from './storage_external.html.js';
const SettingsStorageExternalElementBase = WebUiListenerMixin(I18nMixin(PolymerElement));
class SettingsStorageExternalElement extends SettingsStorageExternalElementBase {
    static get is() {
        return 'settings-storage-external';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            prefs: {
                type: Object,
                notify: true,
            },
            /**
             * List of the plugged-in external storages.
             */
            externalStorages_: {
                type: Array,
                value() {
                    return [];
                },
            },
        };
    }
    constructor() {
        super();
        this.browserProxy_ = DevicePageBrowserProxyImpl.getInstance();
    }
    connectedCallback() {
        super.connectedCallback();
        this.browserProxy_.setExternalStoragesUpdatedCallback(this.handleExternalStoragesUpdated_.bind(this));
        this.browserProxy_.updateExternalStorages();
    }
    handleExternalStoragesUpdated_(storages) {
        this.externalStorages_ = storages;
    }
    computeStorageListHeader_(externalStorages) {
        return this.i18n(!externalStorages || externalStorages.length === 0 ?
            'storageExternalStorageEmptyListHeader' :
            'storageExternalStorageListHeader');
    }
}
customElements.define(SettingsStorageExternalElement.is, SettingsStorageExternalElement);
