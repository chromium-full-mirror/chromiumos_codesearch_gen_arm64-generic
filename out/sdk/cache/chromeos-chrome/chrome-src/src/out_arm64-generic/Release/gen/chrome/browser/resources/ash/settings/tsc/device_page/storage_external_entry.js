// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'storage-external-entry' is the polymer element for showing a certain
 * external storage device with a toggle switch. When the switch is ON,
 * the storage's uuid will be saved to a preference.
 */
import 'chrome://resources/cr_components/settings_prefs/prefs.js';
import '../settings_shared.css.js';
import '/shared/settings/controls/settings_toggle_button.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './storage_external_entry.html.js';
const StorageExternalEntryElementBase = PrefsMixin(WebUiListenerMixin(PolymerElement));
class StorageExternalEntryElement extends StorageExternalEntryElementBase {
    static get is() {
        return 'storage-external-entry';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * FileSystem UUID of an external storage.
             */
            uuid: String,
            /**
             * Label of an external storage.
             */
            label: String,
            visiblePref_: {
                type: Object,
                value() {
                    return {};
                },
            },
        };
    }
    static get observers() {
        return [
            'updateVisible_(prefs.arc.visible_external_storages.*)',
        ];
    }
    /**
     * Handler for when the toggle button for this entry is clicked by a user.
     */
    onVisibleChange_(event) {
        const isVisible = !!event.target.checked;
        if (isVisible) {
            this.appendPrefListItem('arc.visible_external_storages', this.uuid);
        }
        else {
            this.deletePrefListItem('arc.visible_external_storages', this.uuid);
        }
    }
    /**
     * Updates |visiblePref_| by reading the preference and check if it contains
     * UUID of this storage.
     */
    updateVisible_() {
        const uuids = this.getPref('arc.visible_external_storages').value;
        const isVisible = uuids.some((id) => id === this.uuid);
        const pref = {
            key: '',
            type: chrome.settingsPrivate.PrefType.BOOLEAN,
            value: isVisible,
        };
        this.visiblePref_ = pref;
    }
}
customElements.define(StorageExternalEntryElement.is, StorageExternalEntryElement);
