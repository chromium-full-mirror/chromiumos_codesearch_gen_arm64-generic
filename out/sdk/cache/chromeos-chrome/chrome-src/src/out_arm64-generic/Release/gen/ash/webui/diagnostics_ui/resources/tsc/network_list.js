// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './connectivity_card.js';
import './diagnostics_shared.css.js';
import './icons.html.js';
import './network_card.js';
import { loadTimeData } from 'chrome://resources/ash/common/load_time_data.m.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { afterNextRender, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { DiagnosticsBrowserProxyImpl } from './diagnostics_browser_proxy.js';
import { getNetworkHealthProvider } from './mojo_interface_provider.js';
import { NetworkListObserverReceiver } from './network_health_provider.mojom-webui.js';
import { getTemplate } from './network_list.html.js';
import { TestSuiteStatus } from './routine_list_executor.js';
/**
 * @fileoverview
 * 'network-list' is responsible for displaying Ethernet, Cellular,
 *  and WiFi networks.
 */
const NetworkListElementBase = I18nMixin(PolymerElement);
export class NetworkListElement extends NetworkListElementBase {
    static get is() {
        return 'network-list';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            testSuiteStatus: {
                type: Number,
                value: TestSuiteStatus.NOT_RUNNING,
            },
            otherNetworkGuids: {
                type: Array,
                value: () => [],
            },
            activeGuid: {
                type: String,
                value: '',
            },
            isActive: {
                type: Boolean,
                value: true,
            },
            isLoggedIn: {
                type: Boolean,
                value: loadTimeData.getBoolean('isLoggedIn'),
            },
        };
    }
    constructor() {
        super();
        this.browserProxy = DiagnosticsBrowserProxyImpl.getInstance();
        this.networkHealthProvider = getNetworkHealthProvider();
        this.networkListObserverReceiver = null;
        this.browserProxy.initialize();
        this.observeNetworkList();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.networkListObserverReceiver) {
            this.networkListObserverReceiver.$.close();
        }
    }
    observeNetworkList() {
        // Calling observeNetworkList will trigger onNetworkListChanged.
        this.networkListObserverReceiver = new NetworkListObserverReceiver(this);
        this.networkHealthProvider.observeNetworkList(this.networkListObserverReceiver.$.bindNewPipeAndPassRemote());
    }
    /**
     * Implements NetworkListObserver.onNetworkListChanged
     */
    onNetworkListChanged(networkGuids, activeGuid) {
        // The connectivity-card is responsible for displaying the active network
        // so we need to filter out the activeGuid to avoid displaying a
        // a network-card for it.
        this.otherNetworkGuids = networkGuids.filter(guid => guid !== activeGuid);
        this.activeGuid = activeGuid;
    }
    /**
     * 'navigation-view-panel' is responsible for calling this function when
     * the active page changes.
     */
    onNavigationPageChanged({ isActive }) {
        this.isActive = isActive;
        // TODO(ashleydp): Update when connectivity/network card's are merged.
        if (isActive) {
            // Focus the first visible card title. If no cards are present,
            // fallback to focusing the element's main container.
            afterNextRender(this, () => {
                if (this.activeGuid) {
                    const connectivityCard = this.shadowRoot.querySelector('connectivity-card');
                    assert(connectivityCard);
                    const cardTitle = connectivityCard.shadowRoot.querySelector('#cardTitle');
                    assert(cardTitle);
                    cardTitle.focus();
                    return;
                }
                else if (this.otherNetworkGuids.length > 0) {
                    const networkCard = this.shadowRoot.querySelector('network-card');
                    assert(networkCard);
                    const cardTitle = networkCard.shadowRoot.querySelector('#cardTitle');
                    assert(cardTitle);
                    cardTitle.focus();
                }
                this.$.networkListContainer.focus();
            });
            // TODO(ashleydp): Remove when a call can be made at a higher component
            // to avoid duplicate code in all navigatable pages.
            this.browserProxy.recordNavigation('connectivity');
        }
    }
    getSettingsString() {
        return this.i18nAdvanced('settingsLinkText');
    }
}
customElements.define(NetworkListElement.is, NetworkListElement);
