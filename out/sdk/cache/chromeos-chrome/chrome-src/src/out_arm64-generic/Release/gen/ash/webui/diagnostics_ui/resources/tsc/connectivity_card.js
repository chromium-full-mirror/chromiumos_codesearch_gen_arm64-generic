// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './diagnostics_card.js';
import './diagnostics_network_icon.js';
import './diagnostics_shared.css.js';
import './ip_config_info_drawer.js';
import './network_info.js';
import './routine_section.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './connectivity_card.html.js';
import { filterNameServers, formatMacAddress, getNetworkCardTitle, getNetworkState, getNetworkType, getRoutineGroups } from './diagnostics_utils.js';
import { getNetworkHealthProvider } from './mojo_interface_provider.js';
import { NetworkStateObserverReceiver } from './network_health_provider.mojom-webui.js';
import { TestSuiteStatus } from './routine_list_executor.js';
/**
 * @fileoverview
 * 'connectivity-card' runs network routines and displays network health data.
 */
const ConnectivityCardElementBase = I18nMixin(PolymerElement);
export class ConnectivityCardElement extends ConnectivityCardElementBase {
    constructor() {
        super(...arguments);
        this.networkHealthProvider = getNetworkHealthProvider();
        this.networkStateObserverReceiver = null;
    }
    static get is() {
        return 'connectivity-card';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            testSuiteStatus: {
                type: Number,
                value: TestSuiteStatus.NOT_RUNNING,
                notify: true,
            },
            routineGroups: {
                type: Array,
                value: () => [],
            },
            activeGuid: {
                type: String,
                value: '',
                observer: ConnectivityCardElement.prototype.activeGuidChanged,
            },
            isActive: {
                type: Boolean,
                observer: ConnectivityCardElement.prototype.isActiveChanged,
            },
            network: {
                type: Object,
            },
            networkType: {
                type: String,
                value: '',
            },
            networkState: {
                type: String,
                value: '',
            },
            macAddress: {
                type: String,
                value: '',
            },
        };
    }
    getRoutineSectionElem() {
        const routineSection = this.shadowRoot.querySelector('routine-section');
        assert(routineSection);
        return routineSection;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.getRoutineSectionElem().stopTests();
    }
    hasRoutines() {
        return this.routineGroups && this.routineGroups.length > 0;
    }
    observeNetwork() {
        if (this.networkStateObserverReceiver) {
            this.networkStateObserverReceiver.$.close();
            this.networkStateObserverReceiver = null;
        }
        this.networkStateObserverReceiver = new NetworkStateObserverReceiver(this);
        this.networkHealthProvider.observeNetwork(this.networkStateObserverReceiver.$.bindNewPipeAndPassRemote(), this.activeGuid);
    }
    /**
     * Implements NetworkStateObserver.onNetworkStateChanged
     */
    onNetworkStateChanged(network) {
        this.networkType = getNetworkType(network.type);
        this.networkState = getNetworkState(network.state);
        this.macAddress = network.macAddress || '';
        if (this.testSuiteStatus === TestSuiteStatus.NOT_RUNNING) {
            this.routineGroups = getRoutineGroups(network.type);
            this.getRoutineSectionElem().runTests();
        }
        // Remove '0.0.0.0' (if present) from list of name servers.
        filterNameServers(network);
        this.set('network', network);
    }
    getEstimateRuntimeInMinutes() {
        // Connectivity routines will always last <= 1 minute.
        return 1;
    }
    getNetworkCardTitle() {
        return getNetworkCardTitle(this.networkType, this.networkState);
    }
    activeGuidChanged(activeGuid) {
        if (this.testSuiteStatus === TestSuiteStatus.COMPLETED) {
            this.testSuiteStatus = TestSuiteStatus.NOT_RUNNING;
        }
        if (!activeGuid) {
            return;
        }
        this.getRoutineSectionElem().stopTests();
        this.observeNetwork();
    }
    isActiveChanged(active) {
        if (!active) {
            return;
        }
        if (this.routineGroups.length > 0) {
            this.getRoutineSectionElem().runTests();
        }
    }
    getMacAddress() {
        if (!this.macAddress) {
            return '';
        }
        return formatMacAddress(this.macAddress);
    }
}
customElements.define(ConnectivityCardElement.is, ConnectivityCardElement);
