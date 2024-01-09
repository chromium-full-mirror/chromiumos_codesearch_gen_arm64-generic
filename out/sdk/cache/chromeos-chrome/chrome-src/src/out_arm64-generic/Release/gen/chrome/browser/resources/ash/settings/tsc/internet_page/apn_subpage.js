// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * Settings subpage for managing APNs.
 */
import './internet_shared.css.js';
import 'chrome://resources/ash/common/network/apn_list.js';
import { processDeviceState } from 'chrome://resources/ash/common/network/cellular_utils.js';
import { MojoInterfaceProviderImpl } from 'chrome://resources/ash/common/network/mojo_interface_provider.js';
import { NetworkListenerBehavior } from 'chrome://resources/ash/common/network/network_listener_behavior.js';
import { OncMojo } from 'chrome://resources/ash/common/network/onc_mojo.js';
import { assert } from 'chrome://resources/js/assert.js';
import { MAX_NUM_CUSTOM_APNS } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/cros_network_config.mojom-webui.js';
import { NetworkType } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/network_types.mojom-webui.js';
import { mixinBehaviors, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { RouteObserverMixin } from '../common/route_observer_mixin.js';
import { Router, routes } from '../router.js';
import { getTemplate } from './apn_subpage.html.js';
const ApnSubpageElementBase = mixinBehaviors([
    NetworkListenerBehavior,
], RouteObserverMixin(PolymerElement));
export class ApnSubpageElement extends ApnSubpageElementBase {
    static get is() {
        return 'apn-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /** The GUID of the network to display details for. */
            guid_: String,
            isNumCustomApnsLimitReached: {
                type: Boolean,
                notify: true,
                value: false,
                computed: 'computeIsNumCustomApnsLimitReached_(managedProperties_)',
            },
            managedProperties_: {
                type: Object,
            },
            deviceState_: {
                type: Object,
                value: null,
            },
        };
    }
    constructor() {
        super();
        this.networkConfig_ =
            MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote();
    }
    close() {
        // If the page is already closed, return early to avoid navigating backward
        // erroneously.
        if (!this.guid_) {
            return;
        }
        this.guid_ = '';
        this.managedProperties_ = undefined;
        this.deviceState_ = null;
        // Only navigate backwards if this is page is the current route.
        if (Router.getInstance().currentRoute === routes.APN) {
            Router.getInstance().navigateToPreviousRoute();
        }
    }
    currentRouteChanged(route) {
        if (route !== routes.APN) {
            return;
        }
        const queryParams = Router.getInstance().getQueryParameters();
        const guid = queryParams.get('guid') || '';
        if (!guid) {
            console.warn('No guid specified for page:' + route);
            Router.getInstance().navigateToPreviousRoute();
            return;
        }
        this.guid_ = guid;
        // Set default properties until they are loaded.
        this.deviceState_ = null;
        this.managedProperties_ = OncMojo.getDefaultManagedProperties(NetworkType.kCellular, this.guid_, OncMojo.getNetworkTypeString(NetworkType.kCellular));
        this.getNetworkDetails_();
    }
    onNetworkStateChanged(network) {
        if (!this.guid_ || !this.managedProperties_) {
            return;
        }
        if (network.guid === this.guid_) {
            this.getNetworkDetails_();
        }
    }
    onDeviceStateListChanged() {
        if (!this.guid_ || !this.managedProperties_) {
            return;
        }
        this.getDeviceState_();
    }
    /**
     * Helper method that can be used by parent elements to open the APN
     * creation dialog.
     */
    openApnDetailDialogInCreateMode() {
        assert(this.guid_);
        this.$.apnList.openApnDetailDialogInCreateMode();
    }
    async getNetworkDetails_() {
        assert(this.guid_);
        const response = await this.networkConfig_.getManagedProperties(this.guid_);
        // Details page was closed while request was in progress, ignore the
        // result.
        if (!this.guid_) {
            return;
        }
        if (!response.result) {
            // Close the page if the network was removed and no longer exists.
            this.close();
            return;
        }
        if (!this.isCellular_(response.result)) {
            // Close the page if there are no cellular properties.
            this.close();
            return;
        }
        this.managedProperties_ = response.result;
        if (!this.deviceState_) {
            this.getDeviceState_();
        }
    }
    async getDeviceState_() {
        if (!this.isCellular_(this.managedProperties_)) {
            return;
        }
        const type = this.managedProperties_.type;
        const response = await this.networkConfig_.getDeviceStateList();
        // If there is no GUID, the page was closed between requesting the device
        // state and receiving it. If this occurs, there is no need to process the
        // response. Note that if this subpage is reopened later, we'll request
        // this data again.
        if (!this.guid_) {
            return;
        }
        const { deviceState, shouldGetNetworkDetails } = processDeviceState(type, response.result, this.deviceState_);
        this.deviceState_ = deviceState;
        if (shouldGetNetworkDetails) {
            this.getNetworkDetails_();
        }
    }
    isCellular_(managedProperties) {
        return !!managedProperties &&
            managedProperties.type === NetworkType.kCellular;
    }
    computeIsNumCustomApnsLimitReached_() {
        return this.isCellular_(this.managedProperties_) &&
            !!this.managedProperties_.typeProperties.cellular.customApnList &&
            this.managedProperties_.typeProperties.cellular.customApnList
                .length >= MAX_NUM_CUSTOM_APNS;
    }
}
customElements.define(ApnSubpageElement.is, ApnSubpageElement);
