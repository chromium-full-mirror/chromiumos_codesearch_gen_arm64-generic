// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Offline message screen implementation.
 */
import '//resources/js/action_link.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/iron-iconset-svg/iron-iconset-svg.js';
import '../../components/buttons/oobe_text_button.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/network_select_login.js';
import { assert } from '//resources/js/assert.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { OobeDialogHostBehavior } from '../../components/behaviors/oobe_dialog_host_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OobeBackButton } from '../../components/buttons/oobe_back_button.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { Oobe } from '../../cr_ui.js';
import { getTemplate } from './error_message.html.js';
const USER_ACTION_LAUNCH_OOBE_GUEST = 'launch-oobe-guest';
const USER_ACTION_SHOW_CAPTIVE_PORTAL = 'show-captive-portal';
const USER_ACTION_OPEN_INTERNET_DIALOG = 'open-internet-dialog';
const USER_ACTION_OFFLINE_LOGIN = 'offline-login';
/**
 * Possible UI states of the error screen.
 */
var ErrorScreenUiState;
(function (ErrorScreenUiState) {
    ErrorScreenUiState["UNKNOWN"] = "ui-state-unknown";
    ErrorScreenUiState["UPDATE"] = "ui-state-update";
    ErrorScreenUiState["SIGNIN"] = "ui-state-signin";
    ErrorScreenUiState["KIOSK_MODE"] = "ui-state-kiosk-mode";
    ErrorScreenUiState["AUTO_ENROLLMENT_ERROR"] = "ui-state-auto-enrollment-error";
})(ErrorScreenUiState || (ErrorScreenUiState = {}));
// Array of the possible UI states of the screen. Must be in the
// same order as NetworkError::UIState enum values.
const ErrorMessageUiState = [
    ErrorScreenUiState.UNKNOWN,
    ErrorScreenUiState.UPDATE,
    ErrorScreenUiState.SIGNIN,
    ErrorScreenUiState.KIOSK_MODE,
    ErrorScreenUiState.AUTO_ENROLLMENT_ERROR,
];
// Possible error states of the screen.
var ErrorState;
(function (ErrorState) {
    ErrorState["UNKNOWN"] = "unknown";
    ErrorState["PORTAL"] = "portal";
    ErrorState["OFFLINE"] = "offline";
    ErrorState["PROXY"] = "proxy";
    ErrorState["AUTH_EXT_TIMEOUT"] = "auth-ext-timeout";
    ErrorState["KIOSK_ONLINE"] = "kiosk-online";
    ErrorState["NONE"] = "";
})(ErrorState || (ErrorState = {}));
// Possible error states of the screen. Must be in the same order as
// NetworkError::ErrorState enum values.
const ERROR_STATES = [
    ErrorState.UNKNOWN,
    ErrorState.PORTAL,
    ErrorState.OFFLINE,
    ErrorState.PROXY,
    ErrorState.AUTH_EXT_TIMEOUT,
    ErrorState.NONE,
    ErrorState.KIOSK_ONLINE,
];
const ErrorMessageScreenBase = mixinBehaviors([
    OobeI18nBehavior,
    OobeDialogHostBehavior,
    LoginScreenBehavior,
], PolymerElement);
export class ErrorMessageScreen extends ErrorMessageScreenBase {
    static get is() {
        return 'error-message-element';
    }
    static get template() {
        return getTemplate();
    }
    get EXTERNAL_API() {
        return [
            'allowGuestSignin',
            'allowOfflineLogin',
            'setUiState',
            'setErrorState',
            'showConnectingIndicator',
            'setErrorStateNetwork',
        ];
    }
    static get properties() {
        return {
            /**
             * Error screen initial UI state.
             */
            uiState: {
                type: String,
                value: ErrorScreenUiState.UNKNOWN,
                observer: 'updateLocalizedContent',
            },
            /**
             * Error screen initial error state.
             */
            errorState: {
                type: String,
                value: ErrorState.UNKNOWN,
                observer: 'updateLocalizedContent',
            },
            /**
             * True if it is possible to close the error message.
             */
            isCloseable: {
                type: Boolean,
                value: true,
            },
            /**
             * Controls if periodic background Wi-Fi scans are enabled to update the
             * list of available networks.
             */
            enableWifiScans: {
                type: Boolean,
                value: false,
            },
            currentNetworkName: {
                type: String,
                value: '',
                observer: 'updateLocalizedContent',
            },
            /**
             * True if guest signin is allowed from the error screen.
             */
            guestSessionAllowed: {
                type: Boolean,
                value: false,
                observer: 'updateLocalizedContent',
            },
            /**
             * True if offline login is allowed from the error screen.
             */
            offlineLoginAllowed: {
                type: Boolean,
                value: false,
                observer: 'updateLocalizedContent',
            },
            /**
             * True if connecting indicator is shown.
             */
            connectingIndicatorShown: {
                type: Boolean,
                value: false,
            },
        };
    }
    getDialogTitle(locale, errorState, uiState) {
        if (this.isOneOf(uiState, 'ui-state-auto-enrollment-error') &&
            this.isOneOf(errorState, 'offline', 'portal', 'proxy')) {
            return this.i18nDynamic(locale, 'autoEnrollmentErrorMessageTitle');
        }
        else if (this.isOneOf(errorState, 'proxy', 'auth-ext-timeout')) {
            return this.i18nDynamic(locale, 'loginErrorTitle');
        }
        else if (this.isOneOf(errorState, 'kiosk-online')) {
            return this.i18nDynamic(locale, 'kioskOnlineTitle');
        }
        else if (this.isOneOf(errorState, 'portal', 'offline')) {
            return this.i18nDynamic(locale, 'captivePortalTitle');
        }
        else {
            return '';
        }
    }
    /**
     * Returns default event target element.
     */
    get defaultControl() {
        const dialog = this.shadowRoot?.querySelector('#dialog');
        return dialog ? dialog : null;
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('ErrorMessageScreen');
        this.updateLocalizedContent();
    }
    /**
     * Checks if the state is equal to one of the following states.
     */
    isOneOf(uiState, ...states) {
        return states.includes(uiState);
    }
    rebootButtonClicked() {
        this.userActed('reboot');
    }
    diagnoseButtonClicked() {
        this.userActed('diagnose');
    }
    configureCertsButtonClicked() {
        this.userActed('configure-certs');
    }
    continueButtonClicked() {
        this.userActed('continue-app-launch');
    }
    onNetworkConnected() {
        this.userActed('network-connected');
    }
    /**
     * Inserts translated `stringId` into `elementId` with substitutions and
     * anchor tag styles.
     */
    updateElementWithStringAndAnchorTag(elementId, stringId, opts, anchorIds) {
        opts = opts || {};
        opts.tags = opts.tags || [];
        opts.attrs = opts.attrs || [];
        opts.attrs = opts.attrs.concat(['id', 'class', 'is']);
        opts.substitutions = opts.substitutions || [];
        for (const anchorId of anchorIds) {
            const attributes = ' class="oobe-local-link focus-on-show" is="action-link"';
            opts.substitutions = opts.substitutions.concat(['<a id="' + anchorId + '"' + attributes + '>', '</a>']);
        }
        let element = this.shadowRoot?.getElementById(elementId);
        assert(element);
        element.innerHTML = this.i18nAdvanced(stringId, opts);
        // oobe-dialog focuses first element with focus-on-show class that is not
        // hidden. We want to focus the first visible link. So we check if all
        // parent elements are visible, otherwise explicitly hide link, so it
        // won't be shown.
        let hidden = false;
        while (element) {
            if (element.hidden) {
                hidden = true;
                break;
            }
            element = element.parentElement;
        }
        for (const anchorId of anchorIds) {
            const linkElement = this.shadowRoot?.getElementById(anchorId);
            assert(linkElement);
            if (hidden) {
                linkElement.setAttribute('hidden', '');
            }
            else {
                linkElement.removeAttribute('hidden');
            }
        }
    }
    /**
     * Updates localized content of the screen that is not updated via template.
     */
    updateLocalizedContent() {
        this.updateElementWithStringAndAnchorTag('captive-portal-message-text', 'captivePortalMessage', { substitutions: ['<b>' + this.currentNetworkName + '</b>'] }, ['captive-portal-fix-link']);
        const captivePortalFixLink = this.shadowRoot?.querySelector('#captive-portal-fix-link');
        assert(captivePortalFixLink instanceof HTMLAnchorElement);
        captivePortalFixLink.addEventListener('click', () => {
            this.userActed(USER_ACTION_SHOW_CAPTIVE_PORTAL);
        });
        this.updateElementWithStringAndAnchorTag('captive-portal-proxy-message-text', 'captivePortalProxyMessage', {}, ['proxy-settings-fix-link']);
        const proxySettingsFixLink = this.shadowRoot?.querySelector('#proxy-settings-fix-link');
        assert(proxySettingsFixLink instanceof HTMLAnchorElement);
        proxySettingsFixLink.addEventListener('click', () => {
            this.userActed(USER_ACTION_OPEN_INTERNET_DIALOG);
        });
        this.updateElementWithStringAndAnchorTag('update-proxy-message-text', 'updateProxyMessageText', {}, ['update-proxy-error-fix-proxy']);
        const updateProxyErrorFixProxy = this.shadowRoot?.querySelector('#update-proxy-error-fix-proxy');
        assert(updateProxyErrorFixProxy instanceof HTMLAnchorElement);
        updateProxyErrorFixProxy.addEventListener('click', () => {
            this.userActed(USER_ACTION_OPEN_INTERNET_DIALOG);
        });
        this.updateElementWithStringAndAnchorTag('signin-proxy-message-text', 'signinProxyMessageText', {}, ['proxy-error-signin-retry-link', 'signin-proxy-error-fix-proxy']);
        const proxyErrorSigninRetryLink = this.shadowRoot?.querySelector('#proxy-error-signin-retry-link');
        assert(proxyErrorSigninRetryLink instanceof HTMLAnchorElement);
        proxyErrorSigninRetryLink.addEventListener('click', () => {
            this.userActed('reload-gaia');
        });
        const signinProxyErrorFixProxy = this.shadowRoot?.querySelector('#signin-proxy-error-fix-proxy');
        assert(signinProxyErrorFixProxy instanceof HTMLAnchorElement);
        signinProxyErrorFixProxy.addEventListener('click', () => {
            this.userActed(USER_ACTION_OPEN_INTERNET_DIALOG);
        });
        this.updateElementWithStringAndAnchorTag('error-guest-signin', 'guestSignin', {}, ['error-guest-signin-link']);
        const errorGuestSigninLink = this.shadowRoot?.querySelector('#error-guest-signin-link');
        assert(errorGuestSigninLink instanceof HTMLAnchorElement);
        errorGuestSigninLink.addEventListener('click', this.launchGuestSession.bind(this));
        this.updateElementWithStringAndAnchorTag('error-guest-signin-fix-network', 'guestSigninFixNetwork', {}, ['error-guest-fix-network-signin-link']);
        const errorGuestFixNetworkSigninLink = this.shadowRoot?.querySelector('#error-guest-fix-network-signin-link');
        assert(errorGuestFixNetworkSigninLink instanceof HTMLAnchorElement);
        errorGuestFixNetworkSigninLink.addEventListener('click', this.launchGuestSession.bind(this));
        this.updateElementWithStringAndAnchorTag('error-offline-login', 'offlineLogin', {}, ['error-offline-login-link']);
        const errorOfflineLoginLink = this.shadowRoot?.querySelector('#error-offline-login-link');
        assert(errorOfflineLoginLink instanceof HTMLAnchorElement);
        errorOfflineLoginLink.addEventListener('click', () => {
            this.userActed(USER_ACTION_OFFLINE_LOGIN);
        });
    }
    /** Initial UI State for screen */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getOobeUIInitialState() {
        return OOBE_UI_STATE.ERROR;
    }
    /**
     * Event handler that is invoked just before the screen is shown.
     * param data Screen init payload.
     */
    onBeforeShow(data) {
        this.enableWifiScans = true;
        this.isCloseable = data && ('isCloseable' in data) && data.isCloseable;
        const backButton = this.shadowRoot?.querySelector('#backButton');
        assert(backButton instanceof OobeBackButton);
        backButton.hidden = !this.isCloseable;
    }
    /**
     * Event handler that is invoked just before the screen is hidden.
     */
    onBeforeHide() {
        this.enableWifiScans = false;
        Oobe.getInstance().setOobeUIState(OOBE_UI_STATE.HIDDEN);
        this.isCloseable = true;
    }
    /**
     * Event handler for guest session launch.
     */
    launchGuestSession() {
        this.userActed(USER_ACTION_LAUNCH_OOBE_GUEST);
    }
    /**
     * Prepares error screen to show guest signin link.
     */
    allowGuestSignin(allowed) {
        this.guestSessionAllowed = allowed;
    }
    /**
     * Prepares error screen to show offline login link.
     */
    allowOfflineLogin(allowed) {
        this.offlineLoginAllowed = allowed;
    }
    /**
     * Sets current UI state of the screen.
     * @param uiState New UI state of the screen.
     */
    setUiState(uiState) {
        this.uiState = ErrorMessageUiState[uiState];
    }
    /**
     * Sets current error state of the screen.
     * @param errorState New error state of the screen.
     */
    setErrorState(errorState) {
        this.errorState = ERROR_STATES[errorState];
    }
    /**
     * Sets current error network state of the screen.
     * @param network Name of the current network
     */
    setErrorStateNetwork(network) {
        this.currentNetworkName = network;
    }
    /**
     * Updates visibility of the label indicating we're reconnecting.
     * @param show Whether the label should be shown.
     */
    showConnectingIndicator(show) {
        this.connectingIndicatorShown = show;
    }
    /**
     * Cancels error screen and drops to user pods.
     */
    cancel() {
        if (this.isCloseable) {
            this.userActed('cancel');
        }
    }
}
customElements.define(ErrorMessageScreen.is, ErrorMessageScreen);
