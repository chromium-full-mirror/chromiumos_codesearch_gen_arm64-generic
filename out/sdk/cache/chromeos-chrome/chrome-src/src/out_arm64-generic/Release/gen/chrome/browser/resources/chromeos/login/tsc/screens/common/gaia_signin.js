// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Oobe signin screen implementation.
 */
import '//resources/cr_elements/icons.html.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/security_token_pin.js';
import '../../components/oobe_icons.html.js';
import '../../components/buttons/oobe_text_button.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_loading_dialog.js';
import '../../components/dialogs/oobe_modal_dialog.js';
import '../../components/gaia_dialog.js';
import { AuthFlow, AuthMode, SUPPORTED_PARAMS } from '//oobe/gaia_auth_host/authenticator.js';
import { assert } from '//resources/js/assert.js';
import { sendWithPromise } from '//resources/js/cr.js';
import { afterNextRender, mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { OobeTypes } from '../../components/oobe_types.js';
import { Oobe } from '../../cr_ui.js';
import { invokePolymerMethod } from '../../display_manager.js';
import { getTemplate } from './gaia_signin.html.js';
// GAIA animation guard timer. Started when GAIA page is loaded (Authenticator
// 'ready' event) and is intended to guard against edge cases when 'showView'
// message is not generated/received.
const GAIA_ANIMATION_GUARD_MILLISEC = 300;
// Maximum Gaia loading time in seconds.
const MAX_GAIA_LOADING_TIME_SEC = 60;
// Amount of time allowed for video based SAML logins, to prevent a site from
// keeping the camera on indefinitely.  This is a hard deadline and it will
// not be extended by user activity.
const VIDEO_LOGIN_TIMEOUT = 180 * 1000;
/**
 * The authentication mode for the screen.
 */
var ScreenAuthMode;
(function (ScreenAuthMode) {
    ScreenAuthMode[ScreenAuthMode["DEFAULT"] = 0] = "DEFAULT";
    ScreenAuthMode[ScreenAuthMode["SAML_REDIRECT"] = 1] = "SAML_REDIRECT";
})(ScreenAuthMode || (ScreenAuthMode = {}));
/**
 * UI mode for the dialog.
 */
var DialogMode;
(function (DialogMode) {
    DialogMode["GAIA"] = "online-gaia";
    DialogMode["LOADING"] = "loading";
    DialogMode["PIN_DIALOG"] = "pin";
})(DialogMode || (DialogMode = {}));
/**
 * Steps that could be the first one in the flow.
 */
const POSSIBLE_FIRST_SIGNIN_STEPS = [DialogMode.GAIA, DialogMode.LOADING];
/**
 * This enum is tied directly to the `EnrollmentNudgeUserAction` UMA enum
 * defined in //tools/metrics/histograms/enums.xml, and to the
 * `EnrollmentNudgeTest::UserAction` enum defined in
 * //chrome/browser/ash/login/enrollment_nudge_browsertest.cc.
 * Do not change one without changing the others.
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 */
var EnrollmentNudgeUserAction;
(function (EnrollmentNudgeUserAction) {
    EnrollmentNudgeUserAction[EnrollmentNudgeUserAction["ENTERPRISE_ENROLLMENT_BUTTON"] = 0] = "ENTERPRISE_ENROLLMENT_BUTTON";
    EnrollmentNudgeUserAction[EnrollmentNudgeUserAction["USE_ANOTHER_ACCOUNT_BUTTON"] = 1] = "USE_ANOTHER_ACCOUNT_BUTTON";
    EnrollmentNudgeUserAction[EnrollmentNudgeUserAction["MAX"] = 2] = "MAX";
})(EnrollmentNudgeUserAction || (EnrollmentNudgeUserAction = {}));
const GaiaSigninElementBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);
export class GaiaSigninElement extends GaiaSigninElementBase {
    static get is() {
        return 'gaia-signin-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Whether the screen contents are currently being loaded.
             */
            loadingFrameContents: {
                type: Boolean,
                value: false,
            },
            /**
             * Whether the loading UI is shown.
             */
            isLoadingUiShown: {
                type: Boolean,
                computed: 'computeIsLoadingUiShown(loadingFrameContents, ' +
                    'authCompleted)',
            },
            /**
             * Whether the navigation controls are enabled.
             */
            navigationEnabled: {
                type: Boolean,
                value: true,
            },
            /**
             * Whether the authenticator is currently redirected to |SAML| flow. It is
             * set to true early during a default redirection to address situations
             * when an error during loading the 3P IdP occurs and no change in
             * `authFlow` happens, but the UI for 3P IdP still should be shown.
             * Updated on `authFlow` change.
             */
            isSaml: {
                type: Boolean,
                value: false,
                observer: 'onSamlChanged',
            },
            /**
             * Whether the authenticator is or has been in the |SAML| AuthFlow during
             * the current authentication attempt.
             */
            usedSaml: {
                type: Boolean,
                value: false,
            },
            /**
             * Contains the security token PIN dialog parameters object when the
             * dialog is shown. Is null when no PIN dialog is shown.
             */
            pinDialogParameters: {
                type: Object,
                value: null,
                observer: 'onPinDialogParametersChanged',
            },
            /**
             * Whether the SAML 3rd-party page is visible.
             */
            isSamlSsoVisible: {
                type: Boolean,
                computed: 'computeSamlSsoVisible(isSaml, pinDialogParameters)',
            },
            /**
             * Bound to gaia-dialog::videoEnabled.
             */
            videoEnabled: {
                type: Boolean,
                observer: 'onVideoEnabledChange',
            },
            /**
             * Bound to gaia-dialog::authDomain.
             */
            authDomain: {
                type: String,
            },
            /**
             * Bound to gaia-dialog::authFlow.
             */
            authFlow: {
                type: Number,
                observer: 'onAuthFlowChange',
            },
            /**
             */
            navigationButtonsHidden: {
                type: Boolean,
                value: false,
            },
            /**
             * Bound to gaia-dialog::canGoBack.
             */
            canGaiaGoBack: {
                type: Boolean,
            },
            /*
             * Updates whether the Guest and Apps button is allowed to be shown.
             * (Note that the C++ side contains additional logic that decides whether
             * the Guest button should be shown.)
             */
            firstSigninStep: {
                type: Boolean,
                computed: 'isFirstSigninStep(uiStep, canGaiaGoBack, isSaml)',
                observer: 'onIsFirstSigninStepChanged',
            },
            /*
             * Whether the screen is shown.
             */
            isShown: {
                type: Boolean,
                value: false,
            },
            /**
             * Whether the default SAML 3rd-party page is configured for the device.
             */
            isDefaultSsoProviderConfigured: {
                type: Boolean,
                value: false,
            },
            /**
             * Whether the default SAML 3rd-party page is visible.
             */
            isDefaultSsoProvider: {
                type: Boolean,
                value: false,
            },
            /**
             * Whether the screen can be hidden.
             */
            isClosable: {
                type: Boolean,
                value: false,
            },
            /**
             * Domain extracted from user's email.
             */
            emailDomain: {
                type: String,
            },
        };
    }
    constructor() {
        super();
        /**
         * Saved authenticator load params.
         */
        this.authenticatorParams = null;
        /**
         * Email of the user, which is logging in using offline mode.
         */
        this.email = '';
        /**
         * Timer id of pending load.
         */
        this.loadingTimer = undefined;
        /**
         * Timer id of a guard timer that is fired in case 'showView' message is not
         * received from GAIA.
         */
        this.loadAnimationGuardTimer = undefined;
        /**
         * Timer id of the video login timer.
         */
        this.videoTimer = undefined;
        /**
         * Whether we've processed 'showView' message - either from GAIA or from
         * guard timer.
         */
        this.showViewProcessed = false;
        /**
         * Whether we've processed 'authCompleted' message.
         */
        this.authCompleted = false;
        /**
         * Whether the result was reported to the handler for the most recent PIN
         * dialog.
         */
        this.pinDialogResultReported = false;
        /**
         * Gaia path which can serve as a fallback in reloading scenarios. Expected
         * to correspond to editable Gaia username page.
         * TODO(b/259181755): this should no longer be needed once we change the
         * implementation of the "Enter Google Account info" button to fully reload
         * the flow through cpp code.
         */
        this.fallbackGaiaPath = '';
    }
    get EXTERNAL_API() {
        return [
            'loadAuthenticator',
            'doReload',
            'showEnrollmentNudge',
            'showPinDialog',
            'closePinDialog',
            'clickPrimaryButtonForTesting',
            'onBeforeLoad',
            'reset',
            'toggleLoadingUi',
            'setQuickStartEnabled',
        ];
    }
    static get observers() {
        return [
            'refreshDialogStep(isShown, pinDialogParameters,' +
                'isLoadingUiShown)',
        ];
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return DialogMode.GAIA;
    }
    get UI_STEPS() {
        return DialogMode;
    }
    get authenticator() {
        const gaiaDialog = this.shadowRoot?.querySelector('#signin-frame-dialog');
        assert(!!gaiaDialog);
        return gaiaDialog.getAuthenticator();
    }
    ready() {
        super.ready();
        this.authenticator.insecureContentBlockedCallback =
            this.onInsecureContentBlocked.bind(this);
        this.authenticator.missingGaiaInfoCallback =
            this.missingGaiaInfo.bind(this);
        this.authenticator.samlApiUsedCallback = this.samlApiUsed.bind(this);
        this.authenticator.recordSamlProviderCallback =
            this.recordSamlProvider.bind(this);
        this.authenticator.addEventListener('getDeviceId', () => {
            sendWithPromise('getDeviceIdForLogin')
                .then(deviceId => this.authenticator.getDeviceIdResponse(deviceId));
        });
        this.initializeLoginScreen('GaiaSigninScreen');
    }
    /**
     * Updates whether the Guest and Apps button is allowed to be shown. (Note
     * that the C++ side contains additional logic that decides whether the
     * Guest button should be shown.)
     */
    isFirstSigninStep(uiStep, canGaiaGoBack, isSaml) {
        return !this.isClosable && POSSIBLE_FIRST_SIGNIN_STEPS.includes(uiStep) &&
            !canGaiaGoBack && !(isSaml && !this.isDefaultSsoProvider);
    }
    onIsFirstSigninStepChanged(firstSigninStep) {
        if (this.isShown) {
            chrome.send('setIsFirstSigninStep', [firstSigninStep]);
        }
    }
    /**
     * Handles clicks on "Back" button.
     */
    onBackButtonCancel() {
        if (!this.authCompleted) {
            this.cancel(true /* isBackClicked */);
        }
    }
    onInterstitialBackButtonClicked() {
        this.cancel(true /* isBackClicked */);
    }
    /**
     * Handles user closes the dialog on the SAML page.
     */
    closeSaml() {
        this.videoEnabled = false;
        this.cancel(false /* isBackClicked */);
    }
    /**
     * Loads the authenticator and updates the UI to reflect the loading state.
     * @param doSamlRedirect If the authenticator should do
     *     authentication by automatic redirection to the SAML-based enrollment
     *     enterprise domain IdP.
     */
    loadAuthenticator_(doSamlRedirect) {
        this.loadingFrameContents = true;
        this.isDefaultSsoProvider = doSamlRedirect;
        this.startLoadingTimer();
        assert(this.authenticatorParams !== null);
        // Don't enable GAIA action buttons when doing SAML redirect.
        this.authenticatorParams.enableGaiaActionButtons = !doSamlRedirect;
        this.authenticatorParams.doSamlRedirect = doSamlRedirect;
        // Set `isSaml` flag here to make sure we show the correct UI. If we do a
        // redirect, but it fails due to an error, there won't be any `authFlow`
        // change triggered by `authenticator`, however we should still show a
        // button to let user go to GAIA page and keep original GAIA buttons
        // hidden.
        this.isSaml = doSamlRedirect;
        this.authenticator.load(AuthMode.DEFAULT, this.authenticatorParams);
    }
    /**
     * Whether the SAML 3rd-party page is visible.
     */
    computeSamlSsoVisible(isSaml, pinDialogParameters) {
        return isSaml && !pinDialogParameters;
    }
    /**
     * Handler for Gaia loading timeout.
     */
    onLoadingTimeOut() {
        if (Oobe.getInstance().currentScreen.id != 'gaia-signin') {
            return;
        }
        this.clearLoadingTimer();
        chrome.send('showLoadingTimeoutError');
    }
    /**
     * Clears loading timer.
     */
    clearLoadingTimer() {
        if (this.loadingTimer) {
            clearTimeout(this.loadingTimer);
            this.loadingTimer = undefined;
        }
    }
    /**
     * Sets up loading timer.
     */
    startLoadingTimer() {
        this.clearLoadingTimer();
        this.loadingTimer = setTimeout(this.onLoadingTimeOut.bind(this), MAX_GAIA_LOADING_TIME_SEC * 1000);
    }
    /**
     * Handler for GAIA animation guard timer.
     */
    onLoadAnimationGuardTimer() {
        this.loadAnimationGuardTimer = undefined;
        this.onShowView();
    }
    /**
     * Clears GAIA animation guard timer.
     */
    clearLoadAnimationGuardTimer() {
        if (this.loadAnimationGuardTimer) {
            clearTimeout(this.loadAnimationGuardTimer);
            this.loadAnimationGuardTimer = undefined;
        }
    }
    /**
     * Sets up GAIA animation guard timer.
     */
    startLoadAnimationGuardTimer() {
        this.clearLoadAnimationGuardTimer();
        this.loadAnimationGuardTimer = setTimeout(this.onLoadAnimationGuardTimer.bind(this), GAIA_ANIMATION_GUARD_MILLISEC);
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getOobeUIInitialState() {
        return OOBE_UI_STATE.GAIA_SIGNIN;
    }
    /**
     * Event handler that is invoked just before the frame is shown.
     * @param data Screen init payload
     */
    onBeforeShow(data) {
        // Re-enable navigation in case it was disabled before refresh.
        this.navigationEnabled = true;
        this.isShown = true;
        if (data && 'hasUserPods' in data) {
            this.isClosable = data.hasUserPods;
        }
        const pinDialog = this.shadowRoot?.querySelector('#pinDialog');
        assert(!!pinDialog);
        invokePolymerMethod(pinDialog, 'onBeforeShow');
    }
    getSigninFrame() {
        const gaiaDialog = this.shadowRoot?.querySelector('#signin-frame-dialog');
        assert(!!gaiaDialog);
        return gaiaDialog.getFrame();
    }
    focusSigninFrame() {
        const signinFrame = this.getSigninFrame();
        afterNextRender(this, () => signinFrame.focus());
    }
    /** Event handler that is invoked after the screen is shown. */
    onAfterShow() {
        if (!this.isLoadingUiShown) {
            this.focusSigninFrame();
        }
    }
    /**
     * Event handler that is invoked just before the screen is hidden.
     */
    onBeforeHide() {
        this.isShown = false;
        this.authenticator.resetWebview();
    }
    /**
     * Loads authenticator.
     * @param data Input for authenticator parameters.
     * @suppress {missingProperties}
     */
    loadAuthenticator(data) {
        this.authenticator.setWebviewPartition(data.webviewPartitionName);
        this.authCompleted = false;
        this.navigationButtonsHidden = false;
        this.fallbackGaiaPath = data.fallbackGaiaPath;
        // Reset SAML
        this.isSaml = false;
        this.usedSaml = false;
        // Reset the PIN dialog, in case it's shown.
        this.closePinDialog();
        const params = {};
        SUPPORTED_PARAMS.forEach(name => {
            if (data.hasOwnProperty(name)) {
                params[name] = data[name];
            }
        });
        this.isDefaultSsoProviderConfigured =
            data.screenMode == ScreenAuthMode.SAML_REDIRECT;
        params.doSamlRedirect = data.screenMode == ScreenAuthMode.SAML_REDIRECT;
        params.menuEnterpriseEnrollment =
            !(data.enterpriseManagedDevice || data.hasDeviceOwner);
        params.isFirstUser = !(data.enterpriseManagedDevice || data.hasDeviceOwner);
        params.obfuscatedOwnerId = data.obfuscatedOwnerId;
        this.authenticatorParams = params;
        this.loadAuthenticator_(params.doSamlRedirect);
        chrome.send('authenticatorLoaded');
    }
    /**
     * Whether the current auth flow is SAML.
     */
    isSamlAuthFlowForTesting() {
        return this.isSaml && this.authFlow == AuthFlow.SAML;
    }
    /**
     * Clean up from a video-enabled SAML flow.
     */
    clearVideoTimer() {
        if (this.videoTimer !== undefined) {
            clearTimeout(this.videoTimer);
            this.videoTimer = undefined;
        }
    }
    onVideoEnabledChange() {
        if (this.videoEnabled && this.videoTimer === undefined) {
            this.videoTimer = setTimeout(this.cancel.bind(this), VIDEO_LOGIN_TIMEOUT);
        }
        else {
            this.clearVideoTimer();
        }
    }
    reset() {
        this.clearLoadingTimer();
        this.clearVideoTimer();
        this.authCompleted = false;
        // Reset webview to prevent calls from authenticator.
        this.authenticator.resetWebview();
        this.authenticator.resetStates();
        this.navigationButtonsHidden = true;
        // Explicitly disable video here to let `onVideoEnabledChange()` handle
        // timer start next time when `videoEnabled` will be set to true on SAML
        // page.
        this.videoEnabled = false;
    }
    /**
     * Invoked when the authFlow property is changed on the authenticator.
     */
    onAuthFlowChange() {
        this.isSaml = this.authFlow == AuthFlow.SAML;
    }
    /**
     * Observer that is called when the |isSaml| property gets changed.
     */
    onSamlChanged() {
        if (this.isSaml) {
            this.usedSaml = true;
        }
        chrome.send('samlStateChanged', [this.isSaml]);
        this.classList.toggle('saml', this.isSaml);
    }
    /**
     * Invoked when the authenticator emits 'ready' event or when another
     * authentication frame is completely loaded.
     */
    onAuthReady() {
        this.showViewProcessed = false;
        this.startLoadAnimationGuardTimer();
        this.clearLoadingTimer();
        // Workaround to hide flashing scroll bar.
        setTimeout(() => {
            this.loadingFrameContents = false;
        }, 100);
    }
    onStartEnrollment() {
        this.userActed('startEnrollment');
    }
    /**
     * Invoked when the authenticator emits 'showView' event or when corresponding
     * guard time fires.
     */
    onShowView() {
        if (this.showViewProcessed) {
            return;
        }
        this.showViewProcessed = true;
        this.clearLoadAnimationGuardTimer();
        this.onLoginUiVisible();
    }
    /**
     * Called when UI is shown.
     */
    onLoginUiVisible() {
        chrome.send('loginWebuiReady');
    }
    /**
     * Invoked when the authentication flow had to be aborted because content
     * served over an unencrypted connection was detected. Shows a fatal error.
     * This method is only called on Chrome OS, where the entire authentication
     * flow is required to be encrypted.
     * @param url The URL that was blocked.
     */
    onInsecureContentBlocked(url) {
        this.showFatalAuthError(OobeTypes.FatalErrorCode.INSECURE_CONTENT_BLOCKED, { 'url': url });
    }
    /**
     * Shows the fatal auth error.
     * @param errorCode The error code
     * @param info Additional info
     */
    showFatalAuthError(errorCode, info) {
        chrome.send('onFatalError', [errorCode, info || {}]);
    }
    /**
     * Show fatal auth error when information is missing from GAIA.
     */
    missingGaiaInfo() {
        this.showFatalAuthError(OobeTypes.FatalErrorCode.MISSING_GAIA_INFO);
    }
    /**
     * Record that SAML API was used during sign-in.
     * @param isThirdPartyIdP is login flow SAML with external IdP
     */
    samlApiUsed(isThirdPartyIdP) {
        chrome.send('usingSAMLAPI', [isThirdPartyIdP]);
    }
    /**
     * Record SAML Provider that has signed-in
     * @param x509Certificate is a x509certificate in pem format
     */
    recordSamlProvider(x509Certificate) {
        chrome.send('recordSamlProvider', [x509Certificate]);
    }
    /**
     * Invoked when onAuthCompleted message received.
     * @param e Event with the credentials object as the
     *     payload.
     */
    onAuthCompletedMessage(e) {
        const credentials = e.detail;
        if (credentials.publicSAML) {
            this.email = credentials.email;
            chrome.send('launchSAMLPublicSession', [credentials.email]);
        }
        else {
            chrome.send('completeAuthentication', [
                credentials.gaiaId,
                credentials.email,
                credentials.password,
                credentials.scrapedSAMLPasswords,
                credentials.usingSAML,
                credentials.services,
                credentials.servicesProvided,
                credentials.passwordAttributes,
                credentials.syncTrustedVaultKeys || {},
            ]);
        }
        // Hide the navigation buttons as they are not useful when the loading
        // screen is shown.
        this.navigationButtonsHidden = true;
        this.clearVideoTimer();
        this.authCompleted = true;
    }
    /**
     * Invoked when onLoadAbort message received.
     * @param e Event with the payload containing
     *     additional information about error event like:
     *     {number} error_code Error code such as net::ERR_INTERNET_DISCONNECTED.
     *     {string} src The URL that failed to load.
     */
    onLoadAbortMessage(e) {
        chrome.send('webviewLoadAborted', [e.detail.error_code]);
    }
    /**
     * Invoked when exit message received.
     * @param e Event
     */
    onExitMessage() {
        this.cancel();
    }
    /**
     * Invoked when identifierEntered message received.
     * @param e Event with payload containing:
     *     {string} accountIdentifier User identifier.
     */
    onIdentifierEnteredMessage(e) {
        this.userActed(['identifierEntered', e.detail.accountIdentifier]);
    }
    /**
     * Invoked when removeUserByEmail message received.
     * @param e Event with payload containing:
     *     {string} email User email.
     */
    onRemoveUserByEmailMessage(e) {
        chrome.send('removeUserByEmail', [e.detail]);
        this.cancel();
    }
    /**
     * Reloads authenticator.
     */
    doReload() {
        this.authenticator.reload();
        this.loadingFrameContents = true;
        this.startLoadingTimer();
        this.authCompleted = false;
        this.navigationButtonsHidden = false;
    }
    /**
     * Called when user canceled signin. If it is default SAML page we try to
     * close the page. If SAML page was derived from GAIA we return to configured
     * default page (GAIA or default SAML page).
     */
    cancel(isBackClicked = false) {
        this.clearVideoTimer();
        // TODO(crbug.com/470893): Figure out whether/which of these exit conditions
        // are useful.
        if (this.authCompleted) {
            return;
        }
        // If user goes back from the derived SAML page or GAIA page that is shown
        // to change SSO provider we need to reload default authenticator.
        if ((this.isSamlSsoVisible || this.isDefaultSsoProviderConfigured) &&
            !this.isDefaultSsoProvider) {
            this.userActed('reloadDefault');
            return;
        }
        this.userActed(isBackClicked ? 'back' : 'cancel');
    }
    /**
     * Show enrollment nudge pop-up.
     * @param domain User's email domain.
     */
    showEnrollmentNudge(domain) {
        this.reset();
        this.emailDomain = domain;
        const enrollmentNudgeDialog = this.shadowRoot?.querySelector('#enrollmentNudge');
        assert(!!enrollmentNudgeDialog);
        enrollmentNudgeDialog.showDialog();
    }
    toggleLoadingUi(isShown) {
        this.loadingFrameContents = isShown;
    }
    /**
     * Build localized message to display on enrollment nudge pop-up.
     * @param locale i18n locale data
     * @param domain User's email domain.
     */
    getEnrollmentNudgeMessage(locale, domain) {
        return this.i18nDynamic(locale, 'enrollmentNudgeMessage', domain);
    }
    /**
     * Handler for a button on enrollment nudge pop-up. Should lead the user to
     * reloaded sign in screen.
     */
    onEnrollmentNudgeUseAnotherAccount() {
        this.recordUmaHistogramForEnrollmentNudgeUserAction(EnrollmentNudgeUserAction.USE_ANOTHER_ACCOUNT_BUTTON);
        const enrollmentNudgeDialog = this.shadowRoot?.querySelector('#enrollmentNudge');
        assert(!!enrollmentNudgeDialog);
        enrollmentNudgeDialog.hideDialog();
        this.doReload();
    }
    /**
     * Handler for a button on enrollment nudge pop-up. Should switch to
     * enrollment screen.
     */
    onEnrollmentNudgeEnroll() {
        this.recordUmaHistogramForEnrollmentNudgeUserAction(EnrollmentNudgeUserAction.ENTERPRISE_ENROLLMENT_BUTTON);
        const enrollmentNudgeDialog = this.shadowRoot?.querySelector('#enrollmentNudge');
        assert(!!enrollmentNudgeDialog);
        enrollmentNudgeDialog.hideDialog();
        this.userActed('startEnrollment');
    }
    /**
     * Shows the PIN dialog according to the given parameters.
     *
     * In case the dialog is already shown, updates it according to the new
     * parameters.
     */
    showPinDialog(parameters) {
        assert(parameters);
        // Note that this must be done before updating |pinDialogResultReported|,
        // since the observer will notify the handler about the cancellation of the
        // previous dialog depending on this flag.
        this.pinDialogParameters = parameters;
        this.pinDialogResultReported = false;
    }
    /**
     * Closes the PIN dialog (that was previously opened using showPinDialog()).
     * Does nothing if the dialog is not shown.
     */
    closePinDialog() {
        // Note that the update triggers the observer, that notifies the handler
        // about the closing.
        this.pinDialogParameters = null;
    }
    /**
     * Observer that is called when the |pinDialogParameters| property gets
     * changed.
     */
    onPinDialogParametersChanged(newValue, oldValue) {
        if (oldValue === undefined) {
            // Don't do anything on the initial call, triggered by the property
            // initialization.
            return;
        }
        if (oldValue === null && newValue !== null) {
            // Asynchronously set the focus, so that this happens after Polymer
            // recalculates the visibility of |pinDialog|.
            // Also notify the C++ test after this happens, in order to avoid
            // flakiness (so that the test doesn't try to simulate the input before
            // the caret is positioned).
            requestAnimationFrame(() => {
                const pinDialog = this.shadowRoot?.querySelector('#pinDialog');
                if (pinDialog) {
                    pinDialog.focus();
                }
                chrome.send('securityTokenPinDialogShownForTest');
            });
        }
        if ((oldValue !== null && newValue === null) ||
            (oldValue !== null && newValue !== null &&
                !this.pinDialogResultReported)) {
            // Report the cancellation result if the dialog got closed or got reused
            // before reporting the result.
            chrome.send('securityTokenPinEntered', [/*user_input=*/ '']);
        }
    }
    /**
     * Invoked when the user cancels the PIN dialog.
     */
    onPinDialogCanceled() {
        this.closePinDialog();
        this.cancel();
    }
    /**
     * Invoked when the PIN dialog is completed.
     * @param e Event with the entered PIN as the payload.
     */
    onPinDialogCompleted(e) {
        this.pinDialogResultReported = true;
        chrome.send('securityTokenPinEntered', [/*user_input=*/ e.detail]);
    }
    /**
     * Updates current UI step based on internal state.
     */
    refreshDialogStep(isScreenShown, pinParams, isLoading) {
        if (!isScreenShown) {
            return;
        }
        if (pinParams !== null) {
            this.setUIStep(DialogMode.PIN_DIALOG);
            return;
        }
        if (isLoading) {
            this.setUIStep(DialogMode.LOADING);
            return;
        }
        this.setUIStep(DialogMode.GAIA);
    }
    /**
     * Invoked when "Enter Google Account info" button is pressed on SAML screen.
     */
    onSamlPageChangeAccount() {
        // The user requests to change the account. We must clear the email
        // field of the auth params.
        this.videoEnabled = false;
        this.authenticatorParams.email = '';
        // Replace Gaia path with a fallback path to land on Gaia username page.
        assert(this.fallbackGaiaPath, 'fallback Gaia path needed when trying to switch from SAML to Gaia');
        this.authenticatorParams.gaiaPath = this.fallbackGaiaPath;
        this.loadAuthenticator_(false /* doSamlRedirect */);
    }
    /**
     * Computes the value of the isLoadingUiShown property.
     */
    computeIsLoadingUiShown(loadingFrameContents, authCompleted) {
        return (loadingFrameContents || authCompleted);
    }
    clickPrimaryButtonForTesting() {
        const gaiaDialog = this.shadowRoot?.querySelector('#signin-frame-dialog');
        assert(!!gaiaDialog);
        gaiaDialog.clickPrimaryButtonForTesting();
    }
    onBeforeLoad() {
        // TODO(https://crbug.com/1317991): Investigate why the call is making Gaia
        // loading slowly.
        // this.loadingFrameContents = true;
    }
    /**
     * Copmose alert message when third-party IdP uses camera for authentication.
     * @param locale  i18n locale data
     */
    getSamlVideoAlertMessage(locale, videoEnabled, authDomain) {
        if (videoEnabled && authDomain) {
            return this.i18nDynamic(locale, 'samlNoticeWithVideo', authDomain);
        }
        return '';
    }
    /**
     * Handle "Quick Start" button for "Signin" screen.
     *
     */
    onQuickStartButtonClicked() {
        this.userActed('activateQuickStart');
    }
    setQuickStartEnabled() {
        const gaiaDialog = this.shadowRoot?.querySelector('#signin-frame-dialog');
        assert(!!gaiaDialog);
        gaiaDialog.isQuickStartEnabled = true;
    }
    recordUmaHistogramForEnrollmentNudgeUserAction(userAction) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Enterprise.EnrollmentNudge.UserAction',
            userAction,
            EnrollmentNudgeUserAction.MAX,
        ]);
    }
}
customElements.define(GaiaSigninElement.is, GaiaSigninElement);
