// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for displaying network selection OOBE dialog.
 */
import '//resources/polymer/v3_0/paper-styles/color.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/ash/common/network/network_list.js';
import '../../components/buttons/oobe_back_button.js';
import '../../components/buttons/oobe_next_button.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/dialogs/oobe_loading_dialog.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { assert } from 'chrome://resources/js/assert.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeDialogHostBehavior } from '../../components/behaviors/oobe_dialog_host_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OobeAdaptiveDialog } from '../../components/dialogs/oobe_adaptive_dialog.js';
import { NetworkSelectLogin } from '../../components/network_select_login.js';
import { getTemplate } from './oobe_network.html.js';
export var NetworkScreenStates;
(function (NetworkScreenStates) {
    NetworkScreenStates["DEFAULT"] = "default";
    // This state is only used for quick start flow, but might be extended to
    // the regular OOBE flow as well.
    NetworkScreenStates["QUICK_START_CONNECTING"] = "quick-start-connecting";
})(NetworkScreenStates || (NetworkScreenStates = {}));
const NetworkScreenBase = mixinBehaviors([
    OobeI18nBehavior,
    OobeDialogHostBehavior,
    LoginScreenBehavior,
    MultiStepBehavior,
], PolymerElement);
/**
 * @polymer
 */
class NetworkScreen extends NetworkScreenBase {
    static get is() {
        return 'oobe-network-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Network error message.
             */
            errorMessage: {
                type: String,
                value: '',
            },
            /**
             * Whether device is connected to the network.
             */
            isNetworkConnected: {
                type: Boolean,
                value: false,
            },
            /**
             * Controls if periodic background Wi-Fi scans are enabled to update the
             * list of available networks. It is enabled by default so that when user
             * gets to screen networks are already listed, but should be off when
             * user leaves the screen, as scanning can reduce effective bandwidth.
             */
            enableWifiScans: {
                type: Boolean,
                value: true,
            },
            /**
             * Whether Quick start feature is visible. If it's set the quick start
             * button will be shown in the network select login list as first item.
             */
            isQuickStartVisible: {
                type: Boolean,
                value: false,
            },
            // SSID (WiFi Network Name) used during the QuickStart step.
            ssid: {
                type: String,
                value: '',
            },
            // Whether the QuickStart subtitle should be shown while showing the
            // network list
            useQuickStartSubtitle: {
                type: Boolean,
                value: false,
            },
        };
    }
    static get observers() {
        return [];
    }
    get EXTERNAL_API() {
        return ['setError', 'setQuickStartVisible'];
    }
    constructor() {
        super();
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return NetworkScreenStates.DEFAULT;
    }
    get UI_STEPS() {
        return NetworkScreenStates;
    }
    getNetworkSelectLogin() {
        const networkSelectLogin = this.shadowRoot?.querySelector('#networkSelectLogin');
        assert(networkSelectLogin instanceof NetworkSelectLogin);
        return networkSelectLogin;
    }
    /**
     * Called when dialog is shown.
     * @param data Screen init payload.
     */
    onBeforeShow(data) {
        // Right now `ssid` is only set during quick start flow.
        if (data && 'ssid' in data && data['ssid']) {
            this.ssid = data['ssid'];
        }
        else {
            this.ssid = '';
        }
        if (this.ssid) {
            this.setUIStep(NetworkScreenStates.QUICK_START_CONNECTING);
            return;
        }
        if (data && 'useQuickStartSubtitle' in data &&
            data['useQuickStartSubtitle']) {
            this.useQuickStartSubtitle = data['useQuickStartSubtitle'];
        }
        else {
            this.useQuickStartSubtitle = false;
        }
        this.setUIStep(NetworkScreenStates.DEFAULT);
        this.enableWifiScans = true;
        this.errorMessage = '';
        this.getNetworkSelectLogin().onBeforeShow();
        this.show();
    }
    /** Called when dialog is hidden. */
    onBeforeHide() {
        this.getNetworkSelectLogin().onBeforeHide();
        this.enableWifiScans = false;
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('NetworkScreen');
        this.updateLocalizedContent();
    }
    getNetworkDialog() {
        const networkDialog = this.shadowRoot?.querySelector('#networkDialog');
        assert(networkDialog instanceof OobeAdaptiveDialog);
        return networkDialog;
    }
    /** Shows the dialog. */
    show() {
        this.getNetworkDialog().show();
    }
    focus() {
        this.getNetworkDialog().focus();
    }
    /** Updates localized elements of the UI. */
    updateLocalizedContent() {
        this.i18nUpdateLocale();
    }
    /**
     * Returns subtitle of the network dialog.
     */
    getSubtitleMessage(locale, errorMessage, useQuickStartSubtitle) {
        if (errorMessage) {
            return errorMessage;
        }
        if (useQuickStartSubtitle) {
            return this.i18nDynamic(locale, 'quickStartNetworkNeededSubtitle');
        }
        return this.i18nDynamic(locale, 'networkSectionSubtitle');
    }
    /**
     * Sets the network error message.
     * @param message Message to be shown.
     */
    setError(message) {
        this.errorMessage = message;
    }
    setQuickStartVisible() {
        this.isQuickStartVisible = true;
    }
    /**
     * Returns element of the network list with the given name.
     * Used to simplify testing.
     */
    getNetworkListItemByNameForTest(name) {
        const item = this.getNetworkSelectLogin()
            ?.shadowRoot?.querySelector('#networkSelect')
            ?.getNetworkListItemByNameForTest(name);
        if (item !== undefined) {
            return item;
        }
        return null;
    }
    /**
     * Called after dialog is shown. Refreshes the list of the networks.
     */
    onShown() {
        const networkSelectLogin = this.getNetworkSelectLogin();
        networkSelectLogin.refresh();
        setTimeout(() => {
            if (this.isNetworkConnected) {
                const nextButton = this.shadowRoot?.querySelector('#nextButton');
                assert(nextButton instanceof HTMLElement);
                nextButton.focus();
            }
            else {
                networkSelectLogin.focus();
            }
        }, 300);
        // Timeout is a workaround to correctly propagate focus to
        // RendererFrameHostImpl see https://crbug.com/955129 for details.
    }
    /**
     * Quick start button click handler.
     */
    onQuickStartClicked() {
        this.userActed('activateQuickStart');
    }
    /**
     * Back button click handler.
     */
    onBackClicked() {
        this.userActed('back');
    }
    /**
     * Cancels ongoing connection.
     */
    onCancelClicked() {
        this.userActed('cancel');
    }
    /**
     * Called when the network setup is completed. Either by clicking on
     * already connected network in the list or by directly clicking on the
     * next button in the bottom of the screen.
     */
    onContinue() {
        this.userActed('continue');
    }
}
customElements.define(NetworkScreen.is, NetworkScreen);
