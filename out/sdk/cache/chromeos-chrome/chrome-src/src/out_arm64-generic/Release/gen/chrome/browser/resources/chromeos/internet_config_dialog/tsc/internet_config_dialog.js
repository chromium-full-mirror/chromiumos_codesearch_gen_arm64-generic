// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/network/network_config.js';
import 'chrome://resources/ash/common/network/network_icon.js';
import 'chrome://resources/ash/common/network/network_shared.css.js';
import 'chrome://resources/cr_elements/chromeos/cros_color_overrides.css.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_page_host_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import './strings.m.js';
import { loadTimeData } from 'chrome://resources/ash/common/load_time_data.m.js';
import { ColorChangeUpdater } from 'chrome://resources/cr_components/color_change_listener/colors_css_updater.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { ConfigProperties } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/cros_network_config.mojom-webui.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './internet_config_dialog.html.js';
const InternetConfigDialogElementBase = I18nMixin(PolymerElement);
export class InternetConfigDialogElement extends InternetConfigDialogElementBase {
    static get is() {
        return 'internet-config-dialog';
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
             * The network GUID to configure, or empty when configuring a new network.
             */
            guid_: String,
            /**
             * The type of network to be configured as a string. May be set initially
             * or updated by network-config.
             */
            type_: String,
            /**
             * The network configuration which the network dialog will prefill. Can be
             * empty if nothing to prefill or the information will be synced based on
             * given guid.
             */
            prefilledProperties_: ConfigProperties,
            enableConnect_: Boolean,
            /**
             * Set by network-config when a configuration error occurs.
             */
            error_: {
                type: String,
                value: '',
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        const isJellyEnabled = loadTimeData.valueExists('isJellyEnabled') &&
            loadTimeData.getBoolean('isJellyEnabled');
        const dialogArgs = chrome.getVariableValue('dialogArguments');
        if (dialogArgs) {
            const args = JSON.parse(dialogArgs);
            this.type_ = args.type;
            assert(this.type_);
            this.guid_ = args.guid || '';
            this.prefilledProperties_ = args.prefilledProperties || null;
        }
        else {
            // For debugging
            const params = new URLSearchParams(document.location.search.substring(1));
            this.type_ = params.get('type') || 'WiFi';
            this.guid_ = params.get('guid') || '';
            this.prefilledProperties_ = null;
        }
        if (isJellyEnabled) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'chrome://theme/colors.css?sets=legacy,sys';
            document.head.appendChild(link);
            document.body.classList.add('jelly-enabled');
            (function () {
                ColorChangeUpdater.forDocument().start();
            })();
        }
        this.$.networkConfig.init();
        this.$.dialog.showModal();
    }
    close_() {
        chrome.send('dialogClose');
    }
    getDialogTitle_() {
        const type = this.i18n('OncType' + this.type_);
        return this.i18n('internetJoinType', type);
    }
    getError_() {
        if (this.i18nExists(this.error_)) {
            return this.i18n(this.error_);
        }
        return this.i18n('networkErrorUnknown');
    }
    onCancelClick_() {
        this.close_();
    }
    onConnectClick_() {
        this.$.networkConfig.connect();
    }
}
customElements.define(InternetConfigDialogElement.is, InternetConfigDialogElement);
