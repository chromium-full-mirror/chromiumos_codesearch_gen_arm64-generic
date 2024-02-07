// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'nearby-share-data-usage-dialog' allows editing of the data usage setting
 * when using Nearby Share.
 */
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/ash/common/cr_elements/cr_radio_button/cr_radio_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_radio_group/cr_radio_group.js';
import '../settings_shared.css.js';
import { getNearbyShareSettings } from '/shared/nearby_share_settings.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { DataUsage } from 'chrome://resources/mojo/chromeos/ash/services/nearby/public/mojom/nearby_share_settings.mojom-webui.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './nearby_share_data_usage_dialog.html.js';
import { dataUsageStringToEnum, NearbyShareDataUsage } from './types.js';
const NearbyShareDataUsageDialogElementBase = I18nMixin(PolymerElement);
class NearbyShareDataUsageDialogElement extends NearbyShareDataUsageDialogElementBase {
    static get is() {
        return 'nearby-share-data-usage-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /** Mirroring the enum to allow usage in Polymer HTML bindings. */
            NearbyShareDataUsage: {
                type: Object,
                value: NearbyShareDataUsage,
            },
            settings: {
                type: Object,
                value: {},
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        const dialog = this.$.dialog;
        if (!dialog.open) {
            dialog.showModal();
        }
    }
    close() {
        const dialog = this.$.dialog;
        if (dialog.open) {
            dialog.close();
        }
    }
    onCancelClick_() {
        this.close();
    }
    onSaveClick_() {
        const selectedOptionStr = this.shadowRoot.querySelector('cr-radio-group').selected;
        getNearbyShareSettings().setDataUsage(dataUsageStringToEnum(selectedOptionStr));
        this.close();
    }
    selectedDataUsage_(dataUsageValue) {
        if (dataUsageValue === DataUsage.kUnknown) {
            return NearbyShareDataUsage.WIFI_ONLY;
        }
        return dataUsageValue;
    }
}
customElements.define(NearbyShareDataUsageDialogElement.is, NearbyShareDataUsageDialogElement);
