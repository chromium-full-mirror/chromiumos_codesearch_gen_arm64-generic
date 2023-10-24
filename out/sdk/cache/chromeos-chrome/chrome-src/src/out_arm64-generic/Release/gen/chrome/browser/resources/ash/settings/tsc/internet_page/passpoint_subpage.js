// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for displaying the details of a Passpoint
 * subscription.
 */
import '../settings_shared.css.js';
import { MojoConnectivityProvider } from 'chrome://resources/ash/common/connectivity/mojo_connectivity_provider.js';
import { MojoInterfaceProviderImpl } from 'chrome://resources/ash/common/network/mojo_interface_provider.js';
import { OncMojo } from 'chrome://resources/ash/common/network/onc_mojo.js';
import { AppType } from 'chrome://resources/cr_components/app_management/app_management.mojom-webui.js';
import { BrowserProxy as AppManagementComponentBrowserProxy } from 'chrome://resources/cr_components/app_management/browser_proxy.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { FilterType, NO_LIMIT } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/cros_network_config.mojom-webui.js';
import { NetworkType } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/network_types.mojom-webui.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { castExists } from '../assert_extras.js';
import { RouteObserverMixin } from '../route_observer_mixin.js';
import { Router, routes } from '../router.js';
import { PasspointListenerMixin } from './passpoint_listener_mixin.js';
import { getTemplate } from './passpoint_subpage.html.js';
export class SettingsPasspointSubpageElement extends PasspointListenerMixin(RouteObserverMixin(I18nMixin(PolymerElement))) {
    static get is() {
        return 'settings-passpoint-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /** The identifier of the subscription for which details are shown. */
            id_: String,
            /** Passpoint subscription currently displayed. */
            subscription_: Object,
            /** ARC application that provided the subscription. */
            app_: Object,
            /** List of Certificate Authorities available. */
            certs_: Array,
            /** Certificate authority common name. */
            certificateAuthorityName_: {
                type: String,
                computed: 'getCertificateAuthorityName_(certs_)',
            },
            /** Name of the provider of the subscription. */
            providerName_: {
                type: String,
                computed: 'getProviderName_(subscription_, app_)',
            },
            /** List of networks populated with the subscription. */
            networks_: {
                type: Array,
                value() {
                    return [];
                },
            },
            /** Tell if the forget dialog should be displayed. */
            showForgetDialog_: Boolean,
            domainsExpanded_: Boolean,
        };
    }
    constructor() {
        super();
        this.networkConfig_ =
            MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote();
        this.passpointService_ =
            MojoConnectivityProvider.getInstance().getPasspointService();
        this.appHandler_ = AppManagementComponentBrowserProxy.getInstance().handler;
    }
    close() {
        // If the page is already closed, return early to avoid navigating backward
        // erroneously.
        if (!this.id_) {
            return;
        }
        this.id_ = '';
        Router.getInstance().navigateToPreviousRoute();
    }
    /**
     * RouteObserverMixin override
     */
    currentRouteChanged(route) {
        if (route !== routes.PASSPOINT_DETAIL) {
            return;
        }
        const queryParams = Router.getInstance().getQueryParameters();
        const id = queryParams.get('id') || '';
        if (!id) {
            console.warn('No Passpoint subscription ID specified for page:' + route);
            this.close();
            return;
        }
        this.id_ = id;
        this.refresh_();
    }
    async refresh_() {
        const response = await this.passpointService_.getPasspointSubscription(this.id_);
        if (!response.result) {
            console.warn('No subscription found for id ' + this.id_);
            this.close();
            return;
        }
        this.subscription_ = response.result;
        this.refreshCertificates_();
        this.refreshApp_(this.subscription_);
        this.refreshNetworks_(this.subscription_);
    }
    async refreshCertificates_() {
        const certs = await this.networkConfig_.getNetworkCertificates();
        this.certs_ = certs.serverCas;
    }
    async refreshApp_(subscription) {
        const response = await this.appHandler_.getApps();
        for (const app of response.apps) {
            if (app.type === AppType.kArc &&
                app.publisherId === subscription.provisioningSource) {
                this.app_ = app;
                return;
            }
        }
    }
    async refreshNetworks_(subscription) {
        const filter = {
            filter: FilterType.kConfigured,
            limit: NO_LIMIT,
            networkType: NetworkType.kWiFi,
        };
        const response = await this.networkConfig_.getNetworkStateList(filter);
        this.networks_ = response.result.filter(network => {
            return network.typeState.wifi.passpointId === subscription.id;
        });
    }
    getCertificateAuthorityName_() {
        for (const cert of this.certs_) {
            if (cert.pemOrId === this.subscription_.trustedCa) {
                return cert.issuedTo;
            }
        }
        return this.i18n('passpointSystemCALabel');
    }
    hasExpirationDate_() {
        return this.subscription_.expirationEpochMs > 0n;
    }
    getExpirationDate_(subscription) {
        const date = new Date(Number(subscription.expirationEpochMs));
        return date.toLocaleDateString();
    }
    getProviderName_() {
        if (this.app_ && this.app_.title !== undefined) {
            return this.app_.title;
        }
        return this.subscription_.provisioningSource;
    }
    getPasspointDomainsList_() {
        return this.subscription_.domains;
    }
    getNetworkDisplayName_(networkState) {
        return OncMojo.getNetworkStateDisplayNameUnsafe(networkState);
    }
    hasNetworks_() {
        return this.networks_.length > 0;
    }
    onAssociatedNetworkClicked_(event) {
        const networkState = event.model.item;
        const showDetailEvent = new CustomEvent('show-detail', { bubbles: true, composed: true, detail: networkState });
        this.dispatchEvent(showDetailEvent);
        event.stopPropagation();
    }
    getRemovalDialogDescription_() {
        return this.i18nAdvanced('passpointRemovalDescription', {
            substitutions: [
                this.subscription_.friendlyName,
            ],
        });
    }
    getRemovalDialog_() {
        return castExists(this.shadowRoot.querySelector('#removalDialog'));
    }
    onForgetClick_() {
        this.showForgetDialog_ = true;
    }
    async onRemovalDialogConfirm_() {
        this.showForgetDialog_ = false;
        const response = await this.passpointService_.deletePasspointSubscription(this.id_);
        if (response.success) {
            this.close();
            return;
        }
    }
    onRemovalDialogCancel_() {
        this.showForgetDialog_ = false;
    }
    onPasspointSubscriptionRemoved(subscription) {
        if (this.id_ === subscription.id) {
            // The subscription was removed, leave the page.
            this.close();
        }
    }
}
customElements.define(SettingsPasspointSubpageElement.is, SettingsPasspointSubpageElement);
