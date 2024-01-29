// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './critical_error_page.js';
import './hardware_error_page.js';
import './onboarding_choose_destination_page.js';
import './onboarding_choose_wipe_device_page.js';
import './onboarding_choose_wp_disable_method_page.js';
import './onboarding_enter_rsu_wp_disable_code_page.js';
import './onboarding_landing_page.js';
import './onboarding_network_page.js';
import './onboarding_select_components_page.js';
import './onboarding_update_page.js';
import './onboarding_wait_for_manual_wp_disable_page.js';
import './onboarding_wp_disable_complete_page.js';
import './reboot_page.js';
import './reimaging_calibration_failed_page.js';
import './reimaging_calibration_run_page.js';
import './reimaging_calibration_setup_page.js';
import './reimaging_device_information_page.js';
import './reimaging_firmware_update_page.js';
import './reimaging_provisioning_page.js';
import './shimless_3p_diagnostics.js';
import './shimless_rma_shared.css.js';
import './splash_screen.js';
import './wrapup_finalize_page.js';
import './wrapup_repair_complete_page.js';
import './wrapup_restock_page.js';
import './wrapup_wait_for_manual_wp_enable_page.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { CriticalErrorPage } from './critical_error_page.js';
import { CLICK_EXIT_BUTTON, CLICK_NEXT_BUTTON, DISABLE_ALL_BUTTONS, DISABLE_NEXT_BUTTON, ENABLE_ALL_BUTTONS, FATAL_HARDWARE_ERROR, OPEN_LOGS_DIALOG, SET_NEXT_BUTTON_LABEL, TRANSITION_STATE } from './events.js';
import { HardwareErrorPage } from './hardware_error_page.js';
import { getShimlessRmaService } from './mojo_interface_provider.js';
import { OnboardingChooseDestinationPageElement } from './onboarding_choose_destination_page.js';
import { OnboardingChooseWipeDevicePage } from './onboarding_choose_wipe_device_page.js';
import { OnboardingChooseWpDisableMethodPage } from './onboarding_choose_wp_disable_method_page.js';
import { OnboardingEnterRsuWpDisableCodePage } from './onboarding_enter_rsu_wp_disable_code_page.js';
import { OnboardingLandingPage } from './onboarding_landing_page.js';
import { OnboardingNetworkPage } from './onboarding_network_page.js';
import { OnboardingSelectComponentsPageElement } from './onboarding_select_components_page.js';
import { OnboardingUpdatePageElement } from './onboarding_update_page.js';
import { OnboardingWaitForManualWpDisablePage } from './onboarding_wait_for_manual_wp_disable_page.js';
import { OnboardingWpDisableCompletePage } from './onboarding_wp_disable_complete_page.js';
import { RebootPage } from './reboot_page.js';
import { ReimagingCalibrationFailedPage } from './reimaging_calibration_failed_page.js';
import { ReimagingCalibrationRunPage } from './reimaging_calibration_run_page.js';
import { ReimagingCalibrationSetupPage } from './reimaging_calibration_setup_page.js';
import { ReimagingDeviceInformationPage } from './reimaging_device_information_page.js';
import { UpdateRoFirmwarePage } from './reimaging_firmware_update_page.js';
import { ReimagingProvisioningPage } from './reimaging_provisioning_page.js';
import { getTemplate } from './shimless_rma.html.js';
import { ErrorObserverReceiver, ExternalDiskStateObserverReceiver, RmadErrorCode, State } from './shimless_rma.mojom-webui.js';
import { SplashScreen } from './splash_screen.js';
import { WrapupFinalizePage } from './wrapup_finalize_page.js';
import { WrapupRepairCompletePage } from './wrapup_repair_complete_page.js';
import { WrapupRestockPage } from './wrapup_restock_page.js';
import { WrapupWaitForManualWpEnablePage } from './wrapup_wait_for_manual_wp_enable_page.js';
/**
 * Enum for the state of USB used for saving logs. The states are transitioned
 * through as the user plugs in a USB then attempts to save the log.
 */
var UsbLogState;
(function (UsbLogState) {
    UsbLogState[UsbLogState["USB_UNPLUGGED"] = 0] = "USB_UNPLUGGED";
    UsbLogState[UsbLogState["USB_READY"] = 1] = "USB_READY";
    UsbLogState[UsbLogState["SAVING_LOGS"] = 2] = "SAVING_LOGS";
    UsbLogState[UsbLogState["LOG_SAVE_SUCCESS"] = 3] = "LOG_SAVE_SUCCESS";
    UsbLogState[UsbLogState["LOG_SAVE_FAIL"] = 4] = "LOG_SAVE_FAIL";
})(UsbLogState || (UsbLogState = {}));
/**
 * The starting USB state for the logs dialog.
 */
const DEFAULT_USB_LOG_STATE = UsbLogState.USB_READY;
/**
 * Enum for button states.
 */
export var ButtonState;
(function (ButtonState) {
    ButtonState["VISIBLE"] = "visible";
    ButtonState["DISABLED"] = "disabled";
    ButtonState["HIDDEN"] = "hidden";
})(ButtonState || (ButtonState = {}));
const HEADER_FOOTER_HEIGHT_PX = 80;
const OOBE_LARGE_SCREEN_WIDTH_PX = 80;
export const StateComponentMapping = {
    // It is assumed that if state is kUnknown the error is kRmaNotRequired.
    [State.kUnknown]: {
        componentIs: CriticalErrorPage.is,
        requiresReloadWhenShown: false,
        buttonNext: ButtonState.HIDDEN,
        buttonExit: ButtonState.HIDDEN,
        buttonBack: ButtonState.HIDDEN,
    },
    [State.kWelcomeScreen]: {
        componentIs: OnboardingLandingPage.is,
        requiresReloadWhenShown: false,
        buttonNext: ButtonState.HIDDEN,
        buttonNextLabelKey: 'getStartedButtonLabel',
        buttonExit: ButtonState.HIDDEN,
        buttonBack: ButtonState.HIDDEN,
    },
    [State.kConfigureNetwork]: {
        componentIs: OnboardingNetworkPage.is,
        requiresReloadWhenShown: false,
        buttonNext: ButtonState.DISABLED,
        buttonNextLabelKey: 'skipButtonLabel',
        buttonExit: ButtonState.VISIBLE,
        buttonBack: ButtonState.VISIBLE,
    },
    [State.kUpdateOs]: {
        componentIs: OnboardingUpdatePageElement.is,
        requiresReloadWhenShown: false,
        buttonNext: ButtonState.DISABLED,
        buttonNextLabelKey: 'skipButtonLabel',
        buttonExit: ButtonState.VISIBLE,
        buttonBack: ButtonState.VISIBLE,
    },
    [State.kSelectComponents]: {
        componentIs: OnboardingSelectComponentsPageElement.is,
        requiresReloadWhenShown: true,
        buttonNext: ButtonState.DISABLED,
        buttonExit: ButtonState.VISIBLE,
        buttonBack: ButtonState.VISIBLE,
    },
    [State.kChooseDestination]: {
        componentIs: OnboardingChooseDestinationPageElement.is,
        requiresReloadWhenShown: false,
        buttonNext: ButtonState.DISABLED,
        buttonExit: ButtonState.VISIBLE,
        buttonBack: ButtonState.VISIBLE,
    },
    [State.kChooseWipeDevice]: {
        componentIs: OnboardingChooseWipeDevicePage.is,
        requiresReloadWhenShown: false,
        buttonNext: ButtonState.DISABLED,
        buttonExit: ButtonState.VISIBLE,
        buttonBack: ButtonState.VISIBLE,
    },
    [State.kChooseWriteProtectDisableMethod]: {
        componentIs: OnboardingChooseWpDisableMethodPage.is,
        requiresReloadWhenShown: false,
        buttonNext: ButtonState.DISABLED,
        buttonExit: ButtonState.VISIBLE,
        buttonBack: ButtonState.VISIBLE,
    },
    [State.kEnterRSUWPDisableCode]: {
        componentIs: OnboardingEnterRsuWpDisableCodePage.is,
        requiresReloadWhenShown: true,
        buttonNext: ButtonState.DISABLED,
        buttonExit: ButtonState.VISIBLE,
        buttonBack: ButtonState.VISIBLE,
    },
    [State.kWaitForManualWPDisable]: {
        componentIs: OnboardingWaitForManualWpDisablePage.is,
        requiresReloadWhenShown: true,
        buttonNext: ButtonState.HIDDEN,
        buttonExit: ButtonState.VISIBLE,
        buttonBack: ButtonState.VISIBLE,
    },
    [State.kWPDisableComplete]: {
        componentIs: OnboardingWpDisableCompletePage.is,
        requiresReloadWhenShown: false,
        buttonNext: ButtonState.DISABLED,
        buttonExit: ButtonState.VISIBLE,
        buttonBack: ButtonState.HIDDEN,
    },
    [State.kUpdateRoFirmware]: {
        componentIs: UpdateRoFirmwarePage.is,
        requiresReloadWhenShown: false,
        buttonNext: ButtonState.HIDDEN,
        buttonExit: ButtonState.HIDDEN,
        buttonBack: ButtonState.HIDDEN,
    },
    [State.kUpdateDeviceInformation]: {
        componentIs: ReimagingDeviceInformationPage.is,
        requiresReloadWhenShown: false,
        buttonNext: ButtonState.DISABLED,
        buttonExit: ButtonState.HIDDEN,
        buttonBack: ButtonState.HIDDEN,
    },
    [State.kCheckCalibration]: {
        componentIs: ReimagingCalibrationFailedPage.is,
        requiresReloadWhenShown: true,
        buttonNext: ButtonState.DISABLED,
        buttonExitLabelKey: 'calibrationFailedSkipCalibrationButtonLabel',
        buttonExit: ButtonState.VISIBLE,
        buttonBack: ButtonState.VISIBLE,
    },
    [State.kRunCalibration]: {
        componentIs: ReimagingCalibrationRunPage.is,
        requiresReloadWhenShown: true,
        buttonNext: ButtonState.DISABLED,
        buttonExit: ButtonState.HIDDEN,
        buttonBack: ButtonState.HIDDEN,
    },
    [State.kSetupCalibration]: {
        componentIs: ReimagingCalibrationSetupPage.is,
        requiresReloadWhenShown: true,
        buttonNext: ButtonState.DISABLED,
        buttonExit: ButtonState.HIDDEN,
        buttonBack: ButtonState.VISIBLE,
    },
    [State.kProvisionDevice]: {
        componentIs: ReimagingProvisioningPage.is,
        requiresReloadWhenShown: true,
        buttonNext: ButtonState.HIDDEN,
        buttonExit: ButtonState.HIDDEN,
        buttonBack: ButtonState.HIDDEN,
    },
    [State.kWaitForManualWPEnable]: {
        componentIs: WrapupWaitForManualWpEnablePage.is,
        requiresReloadWhenShown: true,
        buttonNext: ButtonState.HIDDEN,
        buttonExit: ButtonState.HIDDEN,
        buttonBack: ButtonState.HIDDEN,
    },
    [State.kRestock]: {
        componentIs: WrapupRestockPage.is,
        requiresReloadWhenShown: false,
        buttonNext: ButtonState.HIDDEN,
        buttonExit: ButtonState.HIDDEN,
        buttonBack: ButtonState.VISIBLE,
    },
    [State.kFinalize]: {
        componentIs: WrapupFinalizePage.is,
        buttonNext: ButtonState.HIDDEN,
        buttonExit: ButtonState.HIDDEN,
        buttonBack: ButtonState.HIDDEN,
    },
    [State.kRepairComplete]: {
        componentIs: WrapupRepairCompletePage.is,
        requiresReloadWhenShown: false,
        buttonNext: ButtonState.HIDDEN,
        buttonExit: ButtonState.HIDDEN,
        buttonBack: ButtonState.HIDDEN,
    },
    [State.kHardwareError]: {
        componentIs: HardwareErrorPage.is,
        requiresReloadWhenShown: false,
        buttonNext: ButtonState.HIDDEN,
        buttonExit: ButtonState.HIDDEN,
        buttonBack: ButtonState.HIDDEN,
    },
    [State.kReboot]: {
        componentIs: RebootPage.is,
        requiresReloadWhenShown: false,
        buttonNext: ButtonState.HIDDEN,
        buttonExit: ButtonState.HIDDEN,
        buttonBack: ButtonState.HIDDEN,
    },
};
/**
 * @fileoverview
 * 'shimless-rma' is the main page for the shimless rma process modal dialog.
 */
const ShimlessRmaBase = I18nMixin(PolymerElement);
export class ShimlessRma extends ShimlessRmaBase {
    static get is() {
        return 'shimless-rma';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Current PageInfo based on current state
             */
            currentPage: {
                reflectToAttribute: true,
                type: Object,
                value: {
                    componentIs: SplashScreen.is,
                    requiresReloadWhenShown: false,
                    buttonNext: ButtonState.HIDDEN,
                    buttonExit: ButtonState.HIDDEN,
                    buttonBack: ButtonState.HIDDEN,
                },
            },
            shimlessRmaService: {
                type: Object,
                value: {},
            },
            /**
             * Used to disable all buttons while waiting for long running mojo API
             * calls to complete. Also controls the busy state overlay.
             */
            allButtonsDisabled: {
                type: Boolean,
                value: true,
                reflectToAttribute: true,
            },
            /**
             * Show busy state overlay while waiting for the service response.
             */
            showBusyStateOverlay: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            /**
             * After the next button is clicked, true until the next state is
             * processed.
             */
            nextButtonClicked: {
                type: Boolean,
                value: false,
            },
            /**
             * After the back button is clicked, true until the next state is
             * processed.
             */
            backButtonClicked: {
                type: Boolean,
                value: false,
            },
            /**
             * After the exit button is clicked, true until the next state is
             * processed.
             */
            confirmExitButtonClicked: {
                type: Boolean,
                value: false,
            },
            log: {
                type: String,
                value: '',
            },
            /**
             * Tracks the current status of the USB and log saving.
             */
            usbLogState: {
                type: Number,
                value: DEFAULT_USB_LOG_STATE,
            },
            logSavedStatusText: {
                type: String,
                value: '',
            },
        };
    }
    constructor() {
        super();
        this.shimlessRmaService = getShimlessRmaService();
        this.errorObserverReceiver = new ErrorObserverReceiver(this);
        this.shimlessRmaService.observeError(this.errorObserverReceiver.$.bindNewPipeAndPassRemote());
        this.externalDiskStateReceiver =
            new ExternalDiskStateObserverReceiver(this);
        this.shimlessRmaService.observeExternalDiskState(this.externalDiskStateReceiver.$.bindNewPipeAndPassRemote());
        /**
         * transitionState is used by page elements to trigger state transition
         * functions and switching to the next page without using the 'Next' button.
         */
        this.transitionState = (e) => {
            this.setAllButtonsState(
            /* shouldDisableButtons= */ true, /* showBusyStateOverlay= */ true);
            e.detail().then((stateResult) => this.processStateResult(stateResult));
        };
        /**
         * The disableNextButton callback is used by page elements to control the
         * disabled state of the 'Next' button.
         */
        this.disableNextButtonCallback = (e) => {
            this.currentPage.buttonNext =
                e.detail ? ButtonState.DISABLED : ButtonState.VISIBLE;
            // Allow polymer to observe the changed state.
            this.notifyPath('currentPage.buttonNext');
        };
        /**
         * The enableAllButtons callback is used by page elements to enable all
         * buttons.
         */
        this.enableAllButtonsCallback = () => {
            this.setAllButtonsState(
            /* shouldDisableButtons= */ false, /* showBusyStateOverlay= */ false);
        };
        /**
         * The disableAllButtons callback is used by page elements to disable all
         * buttons and optionally show a busy overlay.
         */
        this.disableAllButtonsCallback = (e) => {
            this.setAllButtonsState(
            /* shouldDisableButtons= */ true, e.detail.showBusyStateOverlay);
        };
        /**
         * The exitButtonCallback callback is used by the landing page to create
         * its own Exit button in the left pane.
         */
        this.exitButtonCallback = () => {
            this.onExitButtonClicked();
        };
        /**
         * The nextButtonCallback callback is used by the landing page to simulate
         * the next button being clicked.
         */
        this.nextButtonCallback = () => {
            this.onNextButtonClicked();
        };
        /**
         * The setNextButtonLabelCallback callback is used by page elements to set
         * the text label for the 'Next' button.
         */
        this.setNextButtonLabelCallback = (e) => {
            this.currentPage.buttonNextLabelKey = e.detail;
            this.notifyPath('currentPage.buttonNextLabelKey');
        };
        /**
         * The fatalHardwareErrorCallback callback is used by the finalization
         * page and the provisioning page to tell the app that there is a fatal
         * hardware error.
         */
        this.fatalHardwareErrorCallback = (event) => {
            const errorState = {
                stateResult: {
                    state: State.kHardwareError,
                    canExit: false,
                    canGoBack: false,
                    error: event.detail.fatalErrorCode,
                },
            };
            this.showState(errorState);
        };
        /**
         * Opens the logs dialog.
         */
        this.openLogsDialogCallback = () => {
            this.openLogsDialog();
        };
        this.onKeyDownCallback = (event) => {
            this.handleKeyboardShortcut(event);
        };
    }
    connectedCallback() {
        super.connectedCallback();
        window.addEventListener(TRANSITION_STATE, this.transitionState);
        window.addEventListener(DISABLE_NEXT_BUTTON, this.disableNextButtonCallback);
        window.addEventListener(SET_NEXT_BUTTON_LABEL, this.setNextButtonLabelCallback);
        window.addEventListener(DISABLE_ALL_BUTTONS, this.disableAllButtonsCallback);
        window.addEventListener(ENABLE_ALL_BUTTONS, this.enableAllButtonsCallback);
        window.addEventListener(CLICK_EXIT_BUTTON, this.exitButtonCallback);
        window.addEventListener(CLICK_NEXT_BUTTON, this.nextButtonCallback);
        window.addEventListener(FATAL_HARDWARE_ERROR, this.fatalHardwareErrorCallback);
        window.addEventListener(OPEN_LOGS_DIALOG, this.openLogsDialogCallback);
        window.addEventListener('keydown', this.onKeyDownCallback);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener(TRANSITION_STATE, this.transitionState);
        window.removeEventListener(DISABLE_NEXT_BUTTON, this.disableNextButtonCallback);
        window.removeEventListener(SET_NEXT_BUTTON_LABEL, this.setNextButtonLabelCallback);
        window.removeEventListener(DISABLE_ALL_BUTTONS, this.disableAllButtonsCallback);
        window.removeEventListener(ENABLE_ALL_BUTTONS, this.enableAllButtonsCallback);
        window.removeEventListener(CLICK_EXIT_BUTTON, this.exitButtonCallback);
        window.removeEventListener(CLICK_NEXT_BUTTON, this.nextButtonCallback);
        window.removeEventListener(FATAL_HARDWARE_ERROR, this.fatalHardwareErrorCallback);
        window.removeEventListener(OPEN_LOGS_DIALOG, this.openLogsDialogCallback);
        window.removeEventListener('keydown', this.onKeyDownCallback);
    }
    ready() {
        super.ready();
        this.style.setProperty('--header-footer-height', `${HEADER_FOOTER_HEIGHT_PX}px`);
        const screenWidth = window.innerWidth;
        // TODO(b/315002705): Replace integers with variables for
        // `containerHorizontalPadding` calculation.
        const containerHorizontalPadding = screenWidth > OOBE_LARGE_SCREEN_WIDTH_PX ? ((screenWidth - 1040) / 2) :
            (screenWidth * .08);
        this.style.setProperty('--container-horizontal-padding', `${containerHorizontalPadding}px`);
        const contentContainerWidth = screenWidth - (containerHorizontalPadding * 2);
        this.style.setProperty('--content-container-width', `${contentContainerWidth}px`);
        const screenHeight = window.innerHeight;
        const containerVerticalPadding = screenHeight * .06;
        this.style.setProperty('--container-vertical-padding', `${containerVerticalPadding}px`);
        const contentContainerHeight = screenHeight -
            (containerVerticalPadding * 2) - (HEADER_FOOTER_HEIGHT_PX * 2);
        this.style.setProperty('--content-container-height', `${contentContainerHeight}px`);
        const splashComponent = this.loadComponent(this.currentPage.componentIs);
        splashComponent.hidden = false;
        // Get the initial state.
        this.shimlessRmaService.getCurrentState().then((stateResult) => {
            this.processStateResult(stateResult);
        });
    }
    processStateResult(stateResult) {
        // Do not show the state screen if the critical error screen was shown.
        if (this.handleStandardAndCriticalError(stateResult.stateResult.error)) {
            return;
        }
        // This is a special case for showing the reboot page when the platform
        // sends the error code for expecting a reboot or a shut down.
        if (stateResult.stateResult.error === RmadErrorCode.kExpectReboot ||
            stateResult.stateResult.error === RmadErrorCode.kExpectShutdown) {
            const rebootState = {
                stateResult: {
                    state: State.kReboot,
                    canExit: false,
                    canGoBack: false,
                    error: stateResult.stateResult.error,
                },
            };
            this.showState(rebootState);
            return;
        }
        this.showState(stateResult);
    }
    onError(error) {
        this.handleStandardAndCriticalError(error);
    }
    /**
     * Returns true if the critical error screen was displayed.
     */
    handleStandardAndCriticalError(error) {
        // Critical error - expected to be in RMA.
        if (error === RmadErrorCode.kRmaNotRequired) {
            const errorState = {
                stateResult: {
                    state: State.kUnknown,
                    canExit: false,
                    canGoBack: false,
                    error: RmadErrorCode.kRmaNotRequired,
                },
            };
            this.showState(errorState);
            return true;
        }
        return false;
    }
    showState({ stateResult }) {
        // Reset clicked variables to hide the spinners.
        this.nextButtonClicked = false;
        this.backButtonClicked = false;
        this.confirmExitButtonClicked = false;
        const nextStatePageInfo = StateComponentMapping[stateResult.state];
        assert(nextStatePageInfo);
        if (this.currentPage.requiresReloadWhenShown) {
            this.removeComponent(this.currentPage.componentIs);
        }
        // Only perform the below actions if the page needs to change or reload.
        const shouldLoadNextPage = this.currentPage !== nextStatePageInfo ||
            this.currentPage.requiresReloadWhenShown;
        if (shouldLoadNextPage) {
            this.hideAllComponents();
            // Set the next page as the current page.
            this.currentPage = nextStatePageInfo;
            if (!stateResult.canExit) {
                // The calibration failed page is a special case because the Exit button
                // is used as the Skip Calibration button. So we don't want to
                // acknowledge `canExit` here.
                if (this.currentPage.componentIs !== ReimagingCalibrationFailedPage.is) {
                    this.currentPage.buttonExit = ButtonState.HIDDEN;
                }
            }
            if (!stateResult.canGoBack) {
                this.currentPage.buttonBack = ButtonState.HIDDEN;
            }
            // Load the next page so it's visible.
            const currentPageComponent = this.loadComponent(this.currentPage.componentIs);
            currentPageComponent.hidden = false;
            currentPageComponent.errorCode = stateResult.error;
            this.notifyPath('currentPage.buttonNext');
            this.notifyPath('currentPage.buttonExit');
            this.notifyPath('currentPage.buttonBack');
            // A special case for the landing page, which has its own navigation
            // buttons.
            currentPageComponent.getStartedButtonClicked = false;
            currentPageComponent.confirmExitButtonClicked = false;
        }
        this.setAllButtonsState(
        /* shouldDisableButtons= */ false, /* showBusyStateOverlay= */ false);
    }
    /**
     * Utility method to bulk hide all contents.
     */
    hideAllComponents() {
        const components = this.shadowRoot.querySelectorAll('.shimless-content');
        Array.from(components).map((c) => c.hidden = true);
    }
    removeComponent(componentIs) {
        const currentPageComponent = this.shadowRoot.querySelector(`#${componentIs}`);
        assert(!!currentPageComponent);
        currentPageComponent.remove();
    }
    loadComponent(componentIs) {
        const alreadyLoadedComponent = this.shadowRoot.querySelector(`#${componentIs}`);
        if (alreadyLoadedComponent) {
            return alreadyLoadedComponent;
        }
        const shimlessBody = this.shadowRoot.querySelector('#contentContainer');
        assert(shimlessBody);
        const component = document.createElement(componentIs);
        component.setAttribute('id', componentIs);
        component.setAttribute('class', 'shimless-content');
        component.hidden = true;
        shimlessBody.appendChild(component);
        return component;
    }
    isButtonHidden(button) {
        return button === ButtonState.HIDDEN;
    }
    isButtonDisabled(button) {
        return (button === ButtonState.DISABLED) || this.allButtonsDisabled;
    }
    setAllButtonsState(shouldDisableButtons, showBusyStateOverlay) {
        // `showBusyStateOverlay` should only be true when disabling all buttons.
        assert(!showBusyStateOverlay || shouldDisableButtons);
        this.allButtonsDisabled = shouldDisableButtons;
        this.showBusyStateOverlay = showBusyStateOverlay;
        const component = this.loadComponent(this.currentPage.componentIs);
        if (!component) {
            return;
        }
        component.allButtonsDisabled = this.allButtonsDisabled;
    }
    updateButtonState(buttonName, buttonState) {
        assert(this.currentPage.hasOwnProperty(buttonName));
        this.set(`currentPage.${buttonName}`, buttonState);
    }
    onBackButtonClicked() {
        this.backButtonClicked = true;
        this.setAllButtonsState(
        /* shouldDisableButtons= */ true, /* showBusyStateOverlay= */ true);
        this.shimlessRmaService.transitionPreviousState().then((stateResult) => this.processStateResult(stateResult));
    }
    onNextButtonClicked() {
        const page = this.loadComponent(this.currentPage.componentIs);
        assert(page, 'Could not find page ' + this.currentPage.componentIs);
        assert(page.onNextButtonClick, 'No onNextButtonClick for ' + this.currentPage.componentIs);
        assert(typeof page.onNextButtonClick === 'function', 'onNextButtonClick not a function for ' + this.currentPage.componentIs);
        this.nextButtonClicked = true;
        this.setAllButtonsState(
        /* shouldDisableButtons= */ true, /* showBusyStateOverlay= */ true);
        page.onNextButtonClick()
            .then((stateResult) => {
            this.processStateResult(stateResult);
        })
            .catch((_err) => {
            this.nextButtonClicked = false;
            this.setAllButtonsState(
            /* shouldDisableButtons= */ false, 
            /* showBusyStateOverlay= */ false);
        });
    }
    onExitButtonClicked() {
        const page = this.loadComponent(this.currentPage.componentIs);
        assert(page);
        // Don't show the exit dialog if it's on calibration failed page.
        if (page.onExitButtonClick) {
            // A special case for the calibration failed page, where the skip button
            // replaces the exit button.
            page.onExitButtonClick()
                .then((stateResult) => {
                this.processStateResult(stateResult);
            })
                .catch((_err) => {
                this.confirmExitButtonClicked = false;
                this.setAllButtonsState(
                /* shouldDisableButtons= */ false, 
                /* showBusyStateOverlay= */ false);
            });
        }
        else {
            const dialog = this.shadowRoot.querySelector('#exitDialog');
            assert(dialog);
            dialog.showModal();
        }
    }
    onConfirmExitButtonClicked() {
        this.confirmExitButtonClicked = true;
        this.closeDialog();
        // Show exit button spinner on the landing page
        const currentPageComponent = this.loadComponent(this.currentPage.componentIs);
        currentPageComponent.confirmExitButtonClicked = true;
        this.setAllButtonsState(
        /* shouldDisableButtons= */ true, /* showBusyStateOverlay= */ true);
        this.shimlessRmaService.abortRma().then((result) => {
            this.confirmExitButtonClicked = false;
            this.handleStandardAndCriticalError(result.error);
        });
    }
    closeDialog() {
        const dialog = this.shadowRoot.querySelector('#exitDialog');
        assert(dialog);
        dialog.close();
    }
    getNextButtonLabel() {
        return this.i18n(this.currentPage.buttonNextLabelKey ?
            this.currentPage.buttonNextLabelKey :
            'nextButtonLabel');
    }
    getExitButtonLabel() {
        return this.i18n(this.currentPage.buttonExitLabelKey ?
            this.currentPage.buttonExitLabelKey :
            'exitButtonLabel');
    }
    openLogsDialog() {
        this.shimlessRmaService.getLog().then((res) => this.log = res.log);
        const dialog = this.shadowRoot.querySelector('#logsDialog');
        assert(dialog);
        if (!dialog.open) {
            dialog.showModal();
        }
    }
    launch3pDiagnostics() {
        if (this.allButtonsDisabled) {
            return;
        }
        const diagnostics = this.shadowRoot.querySelector('#shimless3pDiagnostics');
        assert(diagnostics);
        diagnostics.launch3pDiagnostics();
    }
    saveLog() {
        this.shimlessRmaService.saveLog().then((result) => {
            if (result.error === RmadErrorCode.kOk) {
                this.logSavedStatusText =
                    this.i18n('rmaLogsSaveSuccessText', result.savePath.path);
                this.usbLogState = UsbLogState.LOG_SAVE_SUCCESS;
            }
            else if (result.error === RmadErrorCode.kUsbNotFound) {
                this.logSavedStatusText = this.i18n('rmaLogsSaveUsbNotFound');
                this.usbLogState = UsbLogState.LOG_SAVE_FAIL;
            }
            else {
                this.logSavedStatusText = this.i18n('rmaLogsSaveFailText');
                this.usbLogState = UsbLogState.LOG_SAVE_FAIL;
            }
        });
    }
    onSaveLogClick() {
        this.saveLog();
    }
    retrySaveLogs() {
        this.saveLog();
    }
    closeLogsDialog() {
        const dialog = this.shadowRoot.querySelector('#logsDialog');
        assert(dialog);
        dialog.close();
        // Reset the USB state back to the default.
        this.usbLogState = DEFAULT_USB_LOG_STATE;
    }
    /**
     * Implements ExternalDiskStateObserver.onExternalDiskStateChanged()
     */
    onExternalDiskStateChanged(detected) {
        if (!detected) {
            this.usbLogState = UsbLogState.USB_UNPLUGGED;
            return;
        }
        if (this.usbLogState === UsbLogState.USB_UNPLUGGED) {
            this.usbLogState = UsbLogState.USB_READY;
        }
    }
    shouldShowSaveToUsbButton() {
        return this.usbLogState === UsbLogState.USB_READY;
    }
    shouldShowLogSaveAttemptContainer() {
        return this.usbLogState === UsbLogState.LOG_SAVE_SUCCESS ||
            this.usbLogState === UsbLogState.LOG_SAVE_FAIL;
    }
    shouldShowRetryButton() {
        return this.usbLogState === UsbLogState.LOG_SAVE_FAIL;
    }
    shouldShowLogUsbMessageContainer() {
        return this.usbLogState === UsbLogState.USB_UNPLUGGED;
    }
    getSaveLogResultIcon() {
        switch (this.usbLogState) {
            case UsbLogState.LOG_SAVE_SUCCESS:
                return 'shimless-icon:check';
            case UsbLogState.LOG_SAVE_FAIL:
                return 'shimless-icon:warning';
            default:
                return '';
        }
    }
    handleKeyboardShortcut(event) {
        // Handle `Alt + Shift + {key}` shortcuts.
        if (event.altKey && event.shiftKey) {
            switch (event.key.toLowerCase()) {
                case 'l':
                    this.openLogsDialog();
                    break;
                case 'd':
                    this.launch3pDiagnostics();
                    break;
            }
        }
    }
}
customElements.define(ShimlessRma.is, ShimlessRma);
