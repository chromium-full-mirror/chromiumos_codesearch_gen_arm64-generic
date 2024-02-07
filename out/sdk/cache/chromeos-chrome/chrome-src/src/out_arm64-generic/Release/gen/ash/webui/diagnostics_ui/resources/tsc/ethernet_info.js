// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './data_point.js';
import './diagnostics_shared.css.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './ethernet_info.html.js';
import { AuthenticationType } from './network_health_provider.mojom-webui.js';
/**
 * @fileoverview
 * 'ethernet-info' is responsible for displaying data points related
 * to an Ethernet network.
 */
const EthernetInfoElementBase = I18nMixin(PolymerElement);
export class EthernetInfoElement extends EthernetInfoElementBase {
    static get is() {
        return 'ethernet-info';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            authentication: {
                type: String,
                computed: 'computeAuthentication(network.typeProperties.ethernet.' +
                    'authentication)',
            },
            ipAddress: {
                type: String,
                computed: 'computeIpAddress(network.ipConfig.ipAddress)',
            },
            network: {
                type: Object,
            },
        };
    }
    computeAuthentication() {
        if (this.network?.typeProperties?.ethernet) {
            const authentication = this.network.typeProperties.ethernet.authentication;
            switch (authentication) {
                case AuthenticationType.kNone:
                    return this.i18n('networkEthernetAuthenticationNoneLabel');
                case AuthenticationType.k8021x:
                    return this.i18n('networkEthernetAuthentication8021xLabel');
                default:
                    return '';
            }
        }
        return '';
    }
    computeIpAddress() {
        return this.network?.ipConfig?.ipAddress || '';
    }
}
customElements.define(EthernetInfoElement.is, EthernetInfoElement);
