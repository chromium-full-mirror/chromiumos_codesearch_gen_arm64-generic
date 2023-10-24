// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for displaying a summary of Cellular network
 * states
 */
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/policy/cr_policy_indicator.js';
import 'chrome://resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import '../os_settings_icons.css.js';
import './esim_install_error_dialog.js';
import { CellularSetupPageName } from 'chrome://resources/ash/common/cellular_setup/cellular_types.js';
import { ESimManagerListenerBehavior } from 'chrome://resources/ash/common/cellular_setup/esim_manager_listener_behavior.js';
import { getEuicc, getPendingESimProfiles } from 'chrome://resources/ash/common/cellular_setup/esim_manager_utils.js';
import { loadTimeData } from 'chrome://resources/ash/common/load_time_data.m.js';
import { getSimSlotCount } from 'chrome://resources/ash/common/network/cellular_utils.js';
import { MojoInterfaceProviderImpl } from 'chrome://resources/ash/common/network/mojo_interface_provider.js';
import { NetworkList } from 'chrome://resources/ash/common/network/network_list_types.js';
import { OncMojo } from 'chrome://resources/ash/common/network/onc_mojo.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { ProfileInstallResult, ProfileState } from 'chrome://resources/mojo/chromeos/ash/services/cellular_setup/public/mojom/esim_manager.mojom-webui.js';
import { InhibitReason } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/cros_network_config.mojom-webui.js';
import { DeviceStateType, NetworkType } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/network_types.mojom-webui.js';
import { mixinBehaviors, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { castExists } from '../assert_extras.js';
import { MultiDeviceBrowserProxyImpl } from '../multidevice_page/multidevice_browser_proxy.js';
import { MultiDeviceFeatureState } from '../multidevice_page/multidevice_constants.js';
import { getTemplate } from './cellular_networks_list.html.js';
const CellularNetworksListElementBase = mixinBehaviors([ESimManagerListenerBehavior], WebUiListenerMixin(I18nMixin(PolymerElement)));
export class CellularNetworksListElement extends CellularNetworksListElementBase {
    static get is() {
        return 'cellular-networks-list';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * The list of network state properties for the items to display.
             */
            networks: {
                type: Array,
                value() {
                    return [];
                },
                observer: 'onNetworksListChanged_',
            },
            /**
             * Whether to show technology badge on mobile network icons.
             */
            showTechnologyBadge: Boolean,
            /**
             * Device state for the cellular network type.
             */
            cellularDeviceState: Object,
            isConnectedToNonCellularNetwork: {
                type: Boolean,
            },
            /**
             * If true, inhibited spinner can be shown, it will be shown
             * if true and cellular is inhibited.
             */
            canShowSpinner: {
                type: Boolean,
            },
            /**
             * Device state for the tether network type. This device state should be
             * used for instant tether networks.
             */
            tetherDeviceState: Object,
            globalPolicy: Object,
            /**
             * The list of eSIM network state properties for display.
             */
            eSimNetworks_: {
                type: Array,
                value() {
                    return [];
                },
            },
            /**
             * Dictionary mapping pending eSIM profile iccids to pending eSIM
             * profiles.
             */
            profilesMap_: {
                type: Object,
                value() {
                    return new Map();
                },
            },
            /**
             * The list of pending eSIM profiles to display after the list of eSIM
             * networks.
             */
            eSimPendingProfileItems_: {
                type: Array,
                value() {
                    return [];
                },
            },
            /**
             * The list of pSIM network state properties for display.
             */
            pSimNetworks_: {
                type: Array,
                value() {
                    return [];
                },
            },
            /**
             * The list of tether network state properties for display.
             */
            tetherNetworks_: {
                type: Array,
                value() {
                    return [];
                },
            },
            shouldShowEidDialog_: {
                type: Boolean,
                value: false,
            },
            shouldShowInstallErrorDialog_: {
                type: Boolean,
                value: false,
            },
            /**
             * Euicc object representing the active euicc_ module on the device
             */
            euicc_: {
                type: Object,
                value: null,
            },
            /**
             * The current eSIM profile being installed.
             */
            installingESimProfile_: {
                type: Object,
                value: null,
            },
            /**
             * The error code returned when eSIM profile install attempt was made.
             */
            eSimProfileInstallError_: {
                type: Object,
                value: null,
            },
            /**
             * Multi-device page data used to determine if the tether section should
             * be shown or not.
             */
            multiDevicePageContentData_: {
                type: Object,
                value: null,
            },
            isDeviceInhibited_: {
                type: Boolean,
                computed: 'computeIsDeviceInhibited_(cellularDeviceState,' +
                    'cellularDeviceState.inhibitReason)',
            },
            /**
             * Return true if SmdsSupportEnabled feature flag is enabled.
             */
            smdsSupportEnabled_: {
                type: Boolean,
                value() {
                    return loadTimeData.valueExists('isSmdsSupportEnabled') &&
                        loadTimeData.getBoolean('isSmdsSupportEnabled');
                },
            },
        };
    }
    constructor() {
        super();
        this.networkConfig_ =
            MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote();
        this.fetchEuiccAndEsimPendingProfileList_();
    }
    ready() {
        super.ready();
        this.addEventListener('install-profile', this.installProfile_);
        this.addWebUiListener('settings.updateMultidevicePageContentData', this.onMultiDevicePageContentDataChanged_.bind(this));
        MultiDeviceBrowserProxyImpl.getInstance().getPageContentData().then(this.onMultiDevicePageContentDataChanged_.bind(this));
    }
    onProfileListChanged(euicc) {
        this.fetchEsimPendingProfileListForEuicc_(euicc);
    }
    onAvailableEuiccListChanged() {
        this.fetchEuiccAndEsimPendingProfileList_();
    }
    async onProfileChanged(profile) {
        if (this.smdsSupportEnabled_) {
            return;
        }
        const response = await profile.getProperties();
        const eSimPendingProfileItem = this.eSimPendingProfileItems_.find(item => {
            return item.customData.iccid === response.properties.iccid;
        });
        if (!eSimPendingProfileItem) {
            return;
        }
        eSimPendingProfileItem.customItemType =
            response.properties.state === ProfileState.kInstalling ?
                NetworkList.CustomItemType.ESIM_INSTALLING_PROFILE :
                NetworkList.CustomItemType.ESIM_PENDING_PROFILE;
    }
    fetchEuiccAndEsimPendingProfileList_() {
        getEuicc().then(euicc => {
            if (!euicc) {
                return;
            }
            this.euicc_ = euicc;
            if (this.smdsSupportEnabled_) {
                return;
            }
            // Restricting managed cellular network should not show pending eSIM
            // profiles.
            if (this.globalPolicy &&
                this.globalPolicy.allowOnlyPolicyCellularNetworks) {
                this.eSimPendingProfileItems_ = [];
                return;
            }
            this.fetchEsimPendingProfileListForEuicc_(euicc);
        });
    }
    /**
     * Return true if esim section should be shown.
     */
    shouldShowEsimSection_() {
        if (!this.cellularDeviceState) {
            return false;
        }
        const { eSimSlots } = getSimSlotCount(this.cellularDeviceState);
        // Check both the SIM slot infos and the number of EUICCs because the former
        // comes from Shill and the latter from Hermes, so there may be instances
        // where one may be true while they other isn't.
        return !!this.euicc_ && eSimSlots > 0;
    }
    async fetchEsimPendingProfileListForEuicc_(euicc) {
        if (this.smdsSupportEnabled_) {
            return;
        }
        const profiles = await getPendingESimProfiles(euicc);
        this.processEsimPendingProfiles_(profiles);
    }
    async processEsimPendingProfiles_(profiles) {
        this.profilesMap_ = new Map();
        const eSimPendingProfilePromises = profiles.map(this.createEsimPendingProfilePromise_.bind(this));
        const eSimPendingProfileItems = await Promise.all(eSimPendingProfilePromises);
        this.eSimPendingProfileItems_ = eSimPendingProfileItems;
    }
    async createEsimPendingProfilePromise_(profile) {
        const response = await profile.getProperties();
        this.profilesMap_.set(response.properties.iccid, profile);
        return this.createEsimPendingProfileItem_(response.properties);
    }
    createEsimPendingProfileItem_(properties) {
        return {
            customItemType: properties.state === ProfileState.kInstalling ?
                NetworkList.CustomItemType.ESIM_INSTALLING_PROFILE :
                NetworkList.CustomItemType.ESIM_PENDING_PROFILE,
            customItemName: String.fromCharCode(...properties.name.data),
            customItemSubtitle: String.fromCharCode(...properties.serviceProvider.data),
            polymerIcon: 'network:cellular-0',
            showBeforeNetworksList: false,
            customData: {
                iccid: properties.iccid,
            },
        };
    }
    onNetworksListChanged_() {
        const pSimNetworks = [];
        const eSimNetworks = [];
        const tetherNetworks = [];
        for (const network of this.networks) {
            if (network.type === NetworkType.kTether) {
                tetherNetworks.push(network);
                continue;
            }
            if (network.typeState.cellular && network.typeState.cellular.eid) {
                eSimNetworks.push(network);
            }
            else {
                pSimNetworks.push(network);
            }
        }
        this.eSimNetworks_ = eSimNetworks;
        this.pSimNetworks_ = pSimNetworks;
        this.tetherNetworks_ = tetherNetworks;
    }
    shouldShowNetworkSublist_(...lists) {
        const totalListLength = lists.reduce((accumulator, currentList) => {
            return accumulator + currentList.length;
        }, 0);
        return totalListLength > 0;
    }
    shouldShowPsimSection_(pSimNetworks, cellularDeviceState) {
        const { pSimSlots } = getSimSlotCount(cellularDeviceState);
        if (pSimSlots > 0) {
            return true;
        }
        // Dual MBIM currently doesn't support eSIM hotswap (b/229619768), which
        // leads Hermes to always show two Eids after swap with pSIM. So, we should
        // also check if there's pSimNetworks available to work around this
        // limitation.
        return this.shouldShowNetworkSublist_(pSimNetworks);
    }
    onMultiDevicePageContentDataChanged_(newData) {
        this.multiDevicePageContentData_ = newData;
    }
    shouldShowTetherSection_(pageContentData) {
        if (!pageContentData) {
            return false;
        }
        return pageContentData.instantTetheringState ===
            MultiDeviceFeatureState.ENABLED_BY_USER;
    }
    onAddEsimLinkClicked_(event) {
        event.detail.event.preventDefault();
        event.stopPropagation();
        const showCellularSetupEvent = new CustomEvent('show-cellular-setup', {
            bubbles: true,
            composed: true,
            detail: { pageName: CellularSetupPageName.ESIM_FLOW_UI },
        });
        this.dispatchEvent(showCellularSetupEvent);
    }
    onEsimDotsClick_(e) {
        const menu = this.shadowRoot
            .querySelector('#menu').get();
        menu.showAt(e.target);
    }
    onShowEidDialogClick_() {
        const actionMenu = castExists(this.shadowRoot.querySelector('cr-action-menu'));
        actionMenu.close();
        this.shouldShowEidDialog_ = true;
    }
    onCloseEidDialog_() {
        this.shouldShowEidDialog_ = false;
    }
    installProfile_(event) {
        if (!this.isConnectedToNonCellularNetwork) {
            const event = new CustomEvent('show-error-toast', {
                bubbles: true,
                composed: true,
                detail: this.i18n('eSimNoConnectionErrorToast'),
            });
            this.dispatchEvent(event);
            return;
        }
        this.installingESimProfile_ =
            castExists(this.profilesMap_.get(event.detail.iccid));
        this.installingESimProfile_.installProfile('').then((response) => {
            if (response.result === ProfileInstallResult.kSuccess) {
                this.eSimProfileInstallError_ = null;
                this.installingESimProfile_ = null;
            }
            else {
                this.eSimProfileInstallError_ = response.result;
                this.showInstallErrorDialog_();
            }
        });
    }
    showInstallErrorDialog_() {
        this.shouldShowInstallErrorDialog_ = true;
    }
    onCloseInstallErrorDialog_() {
        this.shouldShowInstallErrorDialog_ = false;
    }
    shouldShowAddEsimButton_(cellularDeviceState) {
        assert(this.euicc_);
        return this.deviceIsEnabled_(cellularDeviceState);
    }
    isAddEsimButtonDisabled_(cellularDeviceState, globalPolicy) {
        if (this.isDeviceInhibited_) {
            return true;
        }
        if (!this.deviceIsEnabled_(cellularDeviceState)) {
            return true;
        }
        if (!globalPolicy) {
            return false;
        }
        return globalPolicy.allowOnlyPolicyCellularNetworks;
    }
    /**
     * Return true if the policy indicator that next to the add cellular button
     * should be shown. This policy icon indicates the reason of disabling the
     * add cellular button.
     */
    shouldShowAddEsimPolicyIcon_(globalPolicy) {
        return globalPolicy && globalPolicy.allowOnlyPolicyCellularNetworks;
    }
    deviceIsEnabled_(cellularDeviceState) {
        return !!cellularDeviceState &&
            cellularDeviceState.deviceState === DeviceStateType.kEnabled;
    }
    computeIsDeviceInhibited_() {
        if (!this.cellularDeviceState) {
            return false;
        }
        return OncMojo.deviceIsInhibited(this.cellularDeviceState);
    }
    onAddEsimButtonClick_() {
        const event = new CustomEvent('show-cellular-setup', {
            bubbles: true,
            composed: true,
            detail: { pageName: CellularSetupPageName.ESIM_FLOW_UI },
        });
        this.dispatchEvent(event);
    }
    /*
     * Returns the add esim button. If the device does not have an EUICC, no eSIM
     * slot, or policies prohibit users from adding a network, null is returned.
     * @return {?HTMLElement}
     */
    getAddEsimButton() {
        return this.shadowRoot.querySelector('#addESimButton');
    }
    getInhibitedSubtextMessage_() {
        if (!this.cellularDeviceState) {
            return '';
        }
        const inhibitReason = this.cellularDeviceState.inhibitReason;
        switch (inhibitReason) {
            case InhibitReason.kInstallingProfile:
                return this.i18n('cellularNetworkInstallingProfile');
            case InhibitReason.kRenamingProfile:
                return this.i18n('cellularNetworkRenamingProfile');
            case InhibitReason.kRemovingProfile:
                return this.i18n('cellularNetworkRemovingProfile');
            case InhibitReason.kConnectingToProfile:
                return this.i18n('cellularNetworkConnectingToProfile');
            case InhibitReason.kRefreshingProfileList:
                return this.i18n('cellularNetworRefreshingProfileListProfile');
            case InhibitReason.kResettingEuiccMemory:
                return this.i18n('cellularNetworkResettingESim');
            case InhibitReason.kRequestingAvailableProfiles:
                return this.i18n('cellularNetworkRequestingAvailableProfiles');
        }
        return '';
    }
    isInhibitedOrAffectedByPolicy_() {
        if (this.cellularDeviceState &&
            this.cellularDeviceState.inhibitReason !== undefined &&
            this.cellularDeviceState.inhibitReason !==
                InhibitReason.kNotInhibited) {
            return true;
        }
        return !!this.globalPolicy &&
            this.globalPolicy.allowOnlyPolicyCellularNetworks;
    }
    /**
     * Return true IFF there are no eSIM profiles installed and we are not
     * installing a profile, refreshing the profile list, or requesting available
     * profiles.
     */
    shouldShowNoEsimNetworksMessage_() {
        if (this.cellularDeviceState &&
            this.cellularDeviceState.inhibitReason !== undefined) {
            const inhibitReason = this.cellularDeviceState.inhibitReason;
            if (inhibitReason === InhibitReason.kInstallingProfile ||
                inhibitReason === InhibitReason.kRefreshingProfileList ||
                inhibitReason === InhibitReason.kRequestingAvailableProfiles) {
                return false;
            }
        }
        return !this.shouldShowNetworkSublist_(this.eSimNetworks_, this.eSimPendingProfileItems_);
    }
    /**
     * Return true IFF there are no eSIM profiles installed, and the cellular
     * device is inhibited for any reason NOT related to changes to the eSIM
     * profile list or policy restricts the user from adding an eSIM profile.
     */
    shouldShowNoEsimNetworksMessageWithoutLink_() {
        return this.shouldShowNoEsimNetworksMessage_() &&
            this.isInhibitedOrAffectedByPolicy_();
    }
    /**
     * Return true IFF there are no eSIM profiles installed, and the cellular
     * device is NOT inhibited for any reason related to changes to the eSIM
     * profile list and policy does NOT restrict the user from adding an eSIM
     * profile.
     */
    shouldShowAddEsimMessageWithLink() {
        return this.shouldShowNoEsimNetworksMessage_() &&
            !this.isInhibitedOrAffectedByPolicy_();
    }
}
customElements.define(CellularNetworksListElement.is, CellularNetworksListElement);
