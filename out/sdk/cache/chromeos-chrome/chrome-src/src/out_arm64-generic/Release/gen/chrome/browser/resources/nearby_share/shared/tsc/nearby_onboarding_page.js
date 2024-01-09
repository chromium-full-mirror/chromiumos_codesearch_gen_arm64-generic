// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview The 'nearby-onboarding-page' component handles the Nearby Share
 * onboarding flow. It is embedded in chrome://os-settings, chrome://settings
 * and as a standalone dialog via chrome://nearby.
 */
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/polymer/v3_0/iron-media-query/iron-media-query.js';
import './nearby_page_template.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { DeviceNameValidationResult } from 'chrome://resources/mojo/chromeos/ash/services/nearby/public/mojom/nearby_share_settings.mojom-webui.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getOnboardingEntryPoint, NearbyShareOnboardingEntryPoint, NearbyShareOnboardingFinalState, processOnboardingCancelledMetrics, processOnboardingInitiatedMetrics } from './nearby_metrics_logger.js';
import { getTemplate } from './nearby_onboarding_page.html.js';
import { getNearbyShareSettings } from './nearby_share_settings.js';
const ONBOARDING_SPLASH_LIGHT_ICON = 'nearby-images:nearby-onboarding-splash-light';
const ONBOARDING_SPLASH_DARK_ICON = 'nearby-images:nearby-onboarding-splash-dark';
const NearbyOnboardingPageElementBase = I18nMixin(PolymerElement);
export class NearbyOnboardingPageElement extends NearbyOnboardingPageElementBase {
    static get is() {
        return 'nearby-onboarding-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            settings: {
                type: Object,
            },
            errorMessage: {
                type: String,
                value: '',
            },
            /**
             * Whether the onboarding page is being rendered in dark mode.
             */
            isDarkModeActive_: {
                type: Boolean,
                value: false,
            },
            /**
             * Onboarding page entry point
             */
            entryPoint_: {
                type: NearbyShareOnboardingEntryPoint,
                value: NearbyShareOnboardingEntryPoint.MAX,
            },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('next', this.onNext_);
        this.addEventListener('close', this.onClose_);
        this.addEventListener('keydown', this.onKeydown_);
        this.addEventListener('view-enter-start', this.onViewEnterStart_);
    }
    onNext_() {
        this.submitDeviceNameInput_();
    }
    onClose_() {
        processOnboardingCancelledMetrics(this.entryPoint_, NearbyShareOnboardingFinalState.DEVICE_NAME_PAGE);
        const onboardingCancelledEvent = new CustomEvent('onboarding-cancelled', {
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(onboardingCancelledEvent);
    }
    onKeydown_(e) {
        e.stopPropagation();
        if (e.key === 'Enter') {
            this.submitDeviceNameInput_();
            e.preventDefault();
        }
    }
    onViewEnterStart_() {
        this.$.deviceName.focus();
        const url = new URL(document.URL);
        this.entryPoint_ = getOnboardingEntryPoint(url);
        processOnboardingInitiatedMetrics(this.entryPoint_);
    }
    async onDeviceNameInput_() {
        const result = await getNearbyShareSettings().validateDeviceName(this.$.deviceName.value);
        this.updateErrorMessage_(result.result);
    }
    async submitDeviceNameInput_() {
        const result = await getNearbyShareSettings().setDeviceName(this.$.deviceName.value);
        this.updateErrorMessage_(result.result);
        if (result.result === DeviceNameValidationResult.kValid) {
            const changePageEvent = new CustomEvent('change-page', { bubbles: true, composed: true, detail: { page: 'visibility' } });
            this.dispatchEvent(changePageEvent);
        }
    }
    /**
     * @param validationResult The error status from validating the provided
     *    device name.
     */
    updateErrorMessage_(validationResult) {
        switch (validationResult) {
            case DeviceNameValidationResult.kErrorEmpty:
                this.errorMessage = this.i18n('nearbyShareDeviceNameEmptyError');
                break;
            case DeviceNameValidationResult.kErrorTooLong:
                this.errorMessage = this.i18n('nearbyShareDeviceNameTooLongError');
                break;
            case DeviceNameValidationResult.kErrorNotValidUtf8:
                this.errorMessage =
                    this.i18n('nearbyShareDeviceNameInvalidCharactersError');
                break;
            default:
                this.errorMessage = '';
                break;
        }
    }
    hasErrorMessage_(errorMessage) {
        return errorMessage !== '';
    }
    /**
     * Returns the icon based on Light/Dark mode.
     */
    getOnboardingSplashIcon_() {
        return this.isDarkModeActive_ ? ONBOARDING_SPLASH_DARK_ICON :
            ONBOARDING_SPLASH_LIGHT_ICON;
    }
}
customElements.define(NearbyOnboardingPageElement.is, NearbyOnboardingPageElement);
