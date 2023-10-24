// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-internet-subpage-menu' is a menu that provides
 * additional technology specific actions for a network type in the network
 * subpage.
 */
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './network_device_info_dialog.js';
import { ESimManagerListenerBehavior } from 'chrome://resources/ash/common/cellular_setup/esim_manager_listener_behavior.js';
import { getEuicc } from 'chrome://resources/ash/common/cellular_setup/esim_manager_utils.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { NetworkType } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/network_types.mojom-webui.js';
import { mixinBehaviors, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { castExists } from '../assert_extras.js';
import { getTemplate } from './internet_subpage_menu.html.js';
const SettingsInternetSubpageMenuElementBase = mixinBehaviors([ESimManagerListenerBehavior], WebUiListenerMixin(PolymerElement));
export class SettingsInternetSubpageMenuElement extends SettingsInternetSubpageMenuElementBase {
    static get is() {
        return 'settings-internet-subpage-menu';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Device state for the network type
             */
            deviceState: Object,
            showDeviceNetworkInfoDialog_: { type: Boolean, value: false },
        };
    }
    constructor() {
        super();
        this.fetchEuicc_();
    }
    onAvailableEuiccListChanged() {
        this.fetchEuicc_();
    }
    async fetchEuicc_() {
        const euicc = await getEuicc();
        this.euicc_ = euicc;
    }
    shouldShowDotsMenuButton_() {
        const isCellularSubpage = this.deviceState?.type === NetworkType.kCellular;
        return isCellularSubpage && (!!this.euicc_ || !!this.deviceState?.imei);
    }
    onShowDeviceInfoClick_() {
        this.closeMenu_();
        this.showDeviceNetworkInfoDialog_ = true;
    }
    onCloseDeviceNetworkInfoDialog_() {
        this.showDeviceNetworkInfoDialog_ = false;
    }
    closeMenu_() {
        const actionMenu = castExists(this.shadowRoot.querySelector('cr-action-menu'));
        actionMenu.close();
    }
    onDotsClick_(e) {
        const menu = this.shadowRoot
            .querySelector('#menu').get();
        menu.showAt(e.target);
    }
}
customElements.define(SettingsInternetSubpageMenuElement.is, SettingsInternetSubpageMenuElement);
