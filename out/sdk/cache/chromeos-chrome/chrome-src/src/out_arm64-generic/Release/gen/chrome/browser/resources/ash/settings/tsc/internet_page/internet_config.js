// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'internet-config' is a Settings dialog wrapper for network-config.
 */
import 'chrome://resources/ash/common/network/network_config.js';
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import './internet_shared.css.js';
import { OncMojo } from 'chrome://resources/ash/common/network/onc_mojo.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { htmlEscape } from 'chrome://resources/js/util.js';
import { NetworkType } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/network_types.mojom-webui.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { recordSettingChange } from '../metrics_recorder.js';
import { Setting } from '../mojom-webui/setting.mojom-webui.js';
import { getTemplate } from './internet_config.html.js';
const InternetConfigElementBase = I18nMixin(PolymerElement);
export class InternetConfigElement extends InternetConfigElementBase {
    static get is() {
        return 'internet-config';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            shareAllowEnable_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('shareNetworkAllowEnable');
                },
            },
            shareDefault_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('shareNetworkDefault');
                },
            },
            /**
             * The GUID when an existing network is being configured. This will be
             * empty when configuring a new network.
             */
            guid: {
                type: String,
                value: '',
            },
            /**
             * The type of network to be configured as a string. May be set initially
             * or updated by network-config.
             */
            type: String,
            /**
             * WARNING: This string may contain malicious HTML and should not be used
             * for Polymer bindings in CSS code. For additional information see
             * b/286254915.
             *
             * The name of the network. May be set initially or updated by
             * network-config.
             */
            name: String,
            /**
             * Set to true to show the 'connect' button instead of 'save'.
             */
            showConnect: Boolean,
            enableConnect_: Boolean,
            enableSave_: Boolean,
            /**
             * Set by network-config when a configuration error occurs.
             */
            error_: {
                type: String,
                value: '',
            },
        };
    }
    open() {
        const dialog = this.$.dialog;
        if (!dialog.open) {
            dialog.showModal();
        }
        this.$.networkConfig.init();
    }
    close() {
        const dialog = this.$.dialog;
        if (dialog.open) {
            dialog.close();
        }
    }
    onClose_() {
        this.close();
    }
    getDialogTitle_() {
        if (this.name && !this.showConnect) {
            return this.i18n('internetConfigName', htmlEscape(this.name));
        }
        const type = this.i18n('OncType' + this.type);
        return this.i18n('internetJoinType', type);
    }
    getError_() {
        if (this.i18nExists(this.error_)) {
            return this.i18n(this.error_);
        }
        return this.i18n('networkErrorUnknown');
    }
    onCancelClick_() {
        this.close();
    }
    /**
     * Note that onSaveClick_ will only be called if the user explicitly clicks
     * on the 'Save' button.
     */
    onSaveClick_() {
        this.$.networkConfig.save();
    }
    /**
     * Note that onConnectClick_ will only be called if the user explicitly clicks
     * on the 'Connect' button.
     */
    onConnectClick_() {
        this.$.networkConfig.connect();
    }
    /**
     * A connect or save may be initiated within the NetworkConfigElement instead
     * of onConnectClick_() or onSaveClick_() (e.g on an enter event).
     */
    onPropertiesSet_() {
        if (this.type === OncMojo.getNetworkTypeString(NetworkType.kWiFi)) {
            recordSettingChange(Setting.kWifiAddNetwork, { stringValue: this.guid });
        }
        else {
            recordSettingChange();
        }
    }
}
customElements.define(InternetConfigElement.is, InternetConfigElement);
