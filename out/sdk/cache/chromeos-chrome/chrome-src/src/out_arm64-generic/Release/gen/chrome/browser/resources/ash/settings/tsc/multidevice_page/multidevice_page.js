// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
// 
import '../common/password_prompt_dialog/password_prompt_dialog.js';
import '../settings_shared.css.js';
import '../nearby_share_page/nearby_share_subpage.js';
import '../os_settings_page/os_settings_animated_pages.js';
import '../os_settings_page/os_settings_subpage.js';
import '../os_settings_page/settings_card.js';
import 'chrome://resources/cr_components/localized_link/localized_link.js';
import './multidevice_feature_toggle.js';
import './multidevice_notification_access_setup_dialog.js';
import './multidevice_permissions_setup_dialog.js';
import './multidevice_subpage.js';
import './multidevice_forget_device_dialog.js';
import { NearbyShareSettingsMixin } from '/shared/nearby_share_settings_mixin.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { Visibility } from 'chrome://resources/mojo/chromeos/ash/services/nearby/public/mojom/nearby_share_settings.mojom-webui.js';
import { beforeNextRender, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { assertExists } from '../assert_extras.js';
import { DeepLinkingMixin } from '../common/deep_linking_mixin.js';
import { isRevampWayfindingEnabled } from '../common/load_time_booleans.js';
import { RouteOriginMixin } from '../common/route_origin_mixin.js';
import { recordSettingChange } from '../metrics_recorder.js';
import { Section } from '../mojom-webui/routes.mojom-webui.js';
import { Setting } from '../mojom-webui/setting.mojom-webui.js';
import { Router, routes } from '../router.js';
import { MultiDeviceBrowserProxyImpl } from './multidevice_browser_proxy.js';
import { MultiDeviceFeature, MultiDeviceFeatureState, MultiDeviceSettingsMode, PhoneHubFeatureAccessStatus } from './multidevice_constants.js';
import { MultiDeviceFeatureMixin } from './multidevice_feature_mixin.js';
import { getTemplate } from './multidevice_page.html.js';
const SettingsMultidevicePageElementBase = NearbyShareSettingsMixin(MultiDeviceFeatureMixin(RouteOriginMixin(DeepLinkingMixin(PrefsMixin(WebUiListenerMixin(PolymerElement))))));
export class SettingsMultidevicePageElement extends SettingsMultidevicePageElementBase {
    static get is() {
        return 'settings-multidevice-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            section_: {
                type: Number,
                value: Section.kMultiDevice,
                readOnly: true,
            },
            /**
             * Authentication token provided by password-prompt-dialog.
             */
            authToken_: {
                type: Object,
            },
            /**
             * Feature which the user has requested to be enabled but could not be
             * enabled immediately because authentication (i.e., entering a password)
             * is required. This value is initialized to null, is set when the
             * password dialog is opened, and is reset to null again once the password
             * dialog is closed.
             */
            featureToBeEnabledOnceAuthenticated_: {
                type: Number,
                value: null,
            },
            showPasswordPromptDialog_: {
                type: Boolean,
                value: false,
            },
            showPhonePermissionSetupDialog_: {
                type: Boolean,
                value: false,
            },
            /**
             * Whether or not Nearby Share is supported which controls if the Nearby
             * Share settings and subpage are accessible.
             */
            isNearbyShareSupported_: {
                type: Boolean,
                value: function () {
                    return loadTimeData.getBoolean('isNearbyShareSupported');
                },
            },
            shouldEnableNearbyShareBackgroundScanningRevamp_: {
                type: Boolean,
                computed: `computeShouldEnableNearbyShareBackgroundScanningRevamp_(
            settings.isFastInitiationHardwareSupported)`,
            },
            isSettingsRetreived: {
                type: Boolean,
                value: false,
            },
            /**
             * Used by DeepLinkingMixin to focus this page's deep links.
             */
            supportedSettingIds: {
                type: Object,
                value: () => new Set([
                    Setting.kSetUpMultiDevice,
                    Setting.kVerifyMultiDeviceSetup,
                    Setting.kMultiDeviceOnOff,
                    Setting.kNearbyShareDeviceVisibility,
                    Setting.kNearbyShareOnOff,
                ]),
            },
            /**
             * Reflects the password sub-dialog property.
             */
            isPasswordDialogShowing_: {
                type: Boolean,
                value: false,
            },
            /**
             * Reflects the pin number sub-dialog property.
             */
            isPinNumberDialogShowing_: {
                type: Boolean,
                value: false,
            },
            isChromeosScreenLockEnabled_: {
                type: Boolean,
                value: function () {
                    return loadTimeData.getBoolean('isChromeosScreenLockEnabled');
                },
            },
            isPhoneScreenLockEnabled_: {
                type: Boolean,
                value: function () {
                    return loadTimeData.getBoolean('isPhoneScreenLockEnabled');
                },
            },
            isRevampWayfindingEnabled_: {
                type: Boolean,
                value: () => {
                    return isRevampWayfindingEnabled();
                },
            },
            isNameEnabled_: {
                type: Boolean,
                value: () => {
                    return loadTimeData.getBoolean('isNameEnabled');
                },
            },
            shouldShowForgetDeviceDialog_: {
                type: Boolean,
                value: false,
            },
        };
    }
    constructor() {
        super();
        /** RouteOriginMixin override */
        this.route = routes.MULTIDEVICE;
        this.browserProxy_ = MultiDeviceBrowserProxyImpl.getInstance();
    }
    ready() {
        super.ready();
        this.addEventListener('close', this.onDialogClose_);
        this.addEventListener('feature-toggle-clicked', (event) => {
            this.onFeatureToggleClicked_(event);
        });
        this.addEventListener('forget-device-requested', this.onForgetDeviceRequested_);
        this.addEventListener('permission-setup-requested', this.onPermissionSetupRequested_);
        this.addWebUiListener('settings.updateMultidevicePageContentData', this.onPageContentDataChanged_.bind(this));
        this.addWebUiListener('settings.OnEnableScreenLockChanged', this.onEnableScreenLockChanged_.bind(this));
        this.addWebUiListener('settings.OnScreenLockStatusChanged', this.onScreenLockStatusChanged_.bind(this));
        this.addFocusConfig(routes.MULTIDEVICE_FEATURES, '#multideviceItem .subpage-arrow');
        this.browserProxy_.getPageContentData().then((data) => this.onInitialPageContentDataFetched_(data));
    }
    /**
     * Overridden from NearbyShareSettingsMixin.
     */
    onSettingsRetrieved() {
        this.isSettingsRetreived = true;
    }
    /**
     * RouteObserverMixin override
     */
    currentRouteChanged(newRoute, oldRoute) {
        super.currentRouteChanged(newRoute, oldRoute);
        this.leaveNestedPageIfNoHostIsSet_();
        // Does not apply to this page.
        if (newRoute !== this.route) {
            return;
        }
        this.attemptDeepLink();
    }
    getLabelText_() {
        if (this.isRevampWayfindingEnabled_) {
            return this.i18n('multideviceSetupItemHeading');
        }
        return this.pageContentData.hostDeviceName ||
            this.i18n('multideviceSetupItemHeading');
    }
    getSubLabelInnerHtml_() {
        if (!this.isSuiteAllowedByPolicy()) {
            return this.i18nAdvanced('multideviceSetupSummary');
        }
        switch (this.pageContentData.mode) {
            case MultiDeviceSettingsMode.NO_ELIGIBLE_HOSTS:
                return this.i18nAdvanced('multideviceNoHostText');
            case MultiDeviceSettingsMode.NO_HOST_SET:
                return this.i18nAdvanced('multideviceSetupSummary');
            case MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_SERVER:
            // Intentional fall-through.
            case MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_VERIFICATION:
                return this.i18nAdvanced('multideviceVerificationText');
            case MultiDeviceSettingsMode.HOST_SET_VERIFIED:
                if (this.isRevampWayfindingEnabled_) {
                    assertExists(this.pageContentData.hostDeviceName);
                    return this.pageContentData.hostDeviceName;
                }
                return this.isSuiteOn() ? this.i18n('multideviceEnabled') :
                    this.i18n('multideviceDisabled');
            default:
                assertNotReached();
        }
    }
    getButtonText_() {
        switch (this.pageContentData.mode) {
            case MultiDeviceSettingsMode.NO_HOST_SET:
                return this.i18n('multideviceSetupButton');
            case MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_SERVER:
            // Intentional fall-through.
            case MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_VERIFICATION:
                return this.i18n('multideviceVerifyButton');
            default:
                return '';
        }
    }
    getButtonA11yLabel_() {
        switch (this.pageContentData.mode) {
            case MultiDeviceSettingsMode.NO_HOST_SET:
                return this.i18n('multideviceSetupButtonA11yLabel');
            case MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_SERVER:
            // Intentional fall-through.
            case MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_VERIFICATION:
                return this.i18n('multideviceVerifyButtonA11yLabel');
            default:
                return '';
        }
    }
    getTextAriaHidden_() {
        // When host is set and verified, we only show subpage arrow button and
        // toggle. In this case, we avoid the navigation stops on the text to make
        // navigating easier. The arrow button is labeled and described by the text,
        // so the text is still available to assistive tools.
        return String(this.pageContentData.mode ===
            MultiDeviceSettingsMode.HOST_SET_VERIFIED);
    }
    shouldShowButton_() {
        return [
            MultiDeviceSettingsMode.NO_HOST_SET,
            MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_SERVER,
            MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_VERIFICATION,
        ].includes(this.pageContentData.mode);
    }
    shouldShowToggle_() {
        return this.pageContentData.mode ===
            MultiDeviceSettingsMode.HOST_SET_VERIFIED;
    }
    /**
     * Whether to show the separator bar and, if the state calls for a chevron
     * (a.k.a. subpage arrow) routing to the subpage, the chevron.
     */
    shouldShowSeparatorAndSubpageArrow_() {
        return this.pageContentData.mode !==
            MultiDeviceSettingsMode.NO_ELIGIBLE_HOSTS;
    }
    doesClickOpenSubpage_() {
        return this.isHostSet();
    }
    handleItemClick_(event) {
        // We do not open the subpage if the click was on a link.
        if (event.composedPath()[0].tagName === 'A') {
            event.stopPropagation();
            return;
        }
        if (!this.isHostSet()) {
            return;
        }
        Router.getInstance().navigateTo(routes.MULTIDEVICE_FEATURES);
    }
    handleButtonClick_(event) {
        event.stopPropagation();
        switch (this.pageContentData.mode) {
            case MultiDeviceSettingsMode.NO_HOST_SET:
                this.browserProxy_.showMultiDeviceSetupDialog();
                return;
            case MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_SERVER:
            // Intentional fall-through.
            case MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_VERIFICATION:
                // If this device is waiting for action on the server or the host
                // device, clicking the button should trigger this action.
                this.browserProxy_.retryPendingHostSetup();
        }
    }
    openPasswordPromptDialog_() {
        this.showPasswordPromptDialog_ = true;
    }
    onDialogClose_(event) {
        event.stopPropagation();
        if (event.composedPath().some(element => element.id === 'multidevicePasswordPrompt')) {
            this.onPasswordPromptDialogClose_();
        }
    }
    onPasswordPromptDialogClose_() {
        // The password prompt should only be shown when there is a feature waiting
        // to be enabled.
        assert(this.featureToBeEnabledOnceAuthenticated_ !== null);
        // If |this.authToken_| is set when the dialog has been closed, this means
        // that the user entered the correct password into the dialog. Thus, send
        // all pending features to be enabled.
        if (this.authToken_) {
            this.browserProxy_.setFeatureEnabledState(this.featureToBeEnabledOnceAuthenticated_, true /* enabled */, this.authToken_.token);
            recordSettingChange();
            // Reset |this.authToken_| now that it has been used. This ensures that
            // users cannot keep an old auth token and reuse it on an subsequent
            // request.
            this.authToken_ = undefined;
        }
        // Either the feature was enabled above or the user canceled the request by
        // clicking "Cancel" on the password dialog. Thus, there is no longer a need
        // to track any pending feature.
        this.featureToBeEnabledOnceAuthenticated_ = null;
        // Remove the password prompt dialog from the DOM.
        this.showPasswordPromptDialog_ = false;
    }
    /**
     * Attempt to enable the provided feature. If not authenticated (i.e.,
     * |authToken_| is invalid), display the password prompt to begin the
     * authentication process.
     */
    onFeatureToggleClicked_(event) {
        const feature = event.detail.feature;
        const enabled = event.detail.enabled;
        // If the feature required authentication to be enabled, open the password
        // prompt dialog. This is required every time the user enables a security-
        // sensitive feature (i.e., use of stale auth tokens is not acceptable).
        if (enabled && this.isAuthenticationRequiredToEnable_(feature)) {
            this.featureToBeEnabledOnceAuthenticated_ = feature;
            this.openPasswordPromptDialog_();
            return;
        }
        // If the feature to enable is Phone Hub Notifications, notification access
        // must have been granted before the feature can be enabled.
        if (feature === MultiDeviceFeature.PHONE_HUB_NOTIFICATIONS && enabled) {
            switch (this.pageContentData.notificationAccessStatus) {
                case PhoneHubFeatureAccessStatus.PROHIBITED:
                    assertNotReached('Cannot enable notification access; prohibited');
                case PhoneHubFeatureAccessStatus.AVAILABLE_BUT_NOT_GRANTED:
                    this.showPhonePermissionSetupDialog_ = true;
                    return;
                default:
                    // Fall through and attempt to toggle feature.
                    break;
            }
        }
        // Disabling any feature does not require authentication, and enable some
        // features does not require authentication.
        this.browserProxy_.setFeatureEnabledState(feature, enabled);
        recordSettingChange();
    }
    isAuthenticationRequiredToEnable_(feature) {
        // Enabling SmartLock always requires authentication.
        if (feature === MultiDeviceFeature.SMART_LOCK) {
            return true;
        }
        // Enabling any feature besides SmartLock and the Better Together suite does
        // not require authentication.
        if (feature !== MultiDeviceFeature.BETTER_TOGETHER_SUITE) {
            return false;
        }
        const smartLockState = this.getFeatureState(MultiDeviceFeature.SMART_LOCK);
        // If the user is enabling the Better Together suite and this change would
        // result in SmartLock being implicitly enabled, authentication is required.
        // SmartLock is implicitly enabled if it is only currently not enabled due
        // to the suite being disabled or due to the SmartLock host device not
        // having a lock screen set.
        return smartLockState ===
            MultiDeviceFeatureState.UNAVAILABLE_SUITE_DISABLED ||
            smartLockState ===
                MultiDeviceFeatureState.UNAVAILABLE_INSUFFICIENT_SECURITY;
    }
    onForgetDeviceRequested_() {
        this.browserProxy_.removeHostDevice();
        recordSettingChange();
        Router.getInstance().navigateTo(routes.MULTIDEVICE);
    }
    onPermissionSetupRequested_() {
        this.showPhonePermissionSetupDialog_ = true;
    }
    /**
     * Checks if the user is in a nested page without a host set and, if so,
     * navigates them back to the main page.
     */
    leaveNestedPageIfNoHostIsSet_() {
        // Wait for data to arrive.
        if (!this.pageContentData) {
            return;
        }
        // Host status doesn't matter if we are navigating to Nearby Share
        // settings.
        if (routes.NEARBY_SHARE === Router.getInstance().currentRoute) {
            return;
        }
        // If the user gets to the a nested page without a host (e.g. by clicking a
        // stale 'existing user' notifications after forgetting their host) we
        // direct them back to the main settings page.
        if (routes.MULTIDEVICE !== Router.getInstance().currentRoute &&
            routes.MULTIDEVICE.contains(Router.getInstance().currentRoute) &&
            !this.isHostSet()) {
            // Render MULTIDEVICE page before the MULTIDEVICE_FEATURES has a chance.
            beforeNextRender(this, () => {
                Router.getInstance().navigateTo(routes.MULTIDEVICE);
            });
        }
    }
    onInitialPageContentDataFetched_(newData) {
        this.onPageContentDataChanged_(newData);
        // Show the notification access dialog if the url contains the correct
        // param.
        // Show combined access dialog with URL having param and features.
        const urlParams = Router.getInstance().getQueryParameters();
        if (urlParams.get('showPhonePermissionSetupDialog') !== null) {
            this.showPhonePermissionSetupDialog_ = true;
            Router.getInstance().navigateTo(routes.MULTIDEVICE_FEATURES);
        }
    }
    onPageContentDataChanged_(newData) {
        this.pageContentData = newData;
        this.leaveNestedPageIfNoHostIsSet_();
    }
    onTokenObtained_(e) {
        this.authToken_ = e.detail;
    }
    isNearbyShareDisallowedByPolicy_() {
        if (!this.pageContentData) {
            return false;
        }
        return this.pageContentData.isNearbyShareDisallowedByPolicy;
    }
    getNearbyShareDescription_(visibility) {
        if (visibility === undefined) {
            return this.i18n('nearbyShareDescriptionHidden');
        }
        switch (visibility) {
            case Visibility.kAllContacts:
                return this.i18n('nearbyShareDescriptionVisibleToAllContacts');
            case Visibility.kSelectedContacts:
                return this.i18n('nearbyShareDescriptionVisibleToSelectedContacts');
            case Visibility.kYourDevices:
                return this.i18n('nearbyShareDescriptionVisibleToYourDevices');
            case Visibility.kNoOne:
            case Visibility.kUnknown:
                return this.i18n('nearbyShareDescriptionHidden');
            default:
                assertNotReached();
        }
    }
    showNearbyShareToggle_(isOnboardingComplete) {
        return isOnboardingComplete || this.isNearbyShareDisallowedByPolicy_();
    }
    showNearbyShareSetupButton_(isOnboardingComplete) {
        return !isOnboardingComplete && !this.isNearbyShareDisallowedByPolicy_();
    }
    showNearbyShareOnOffString_(isOnboardingComplete) {
        return isOnboardingComplete && !this.isNearbyShareDisallowedByPolicy_();
    }
    showNearbyShareSetUpDescription_(isOnboardingComplete) {
        return !isOnboardingComplete || this.isNearbyShareDisallowedByPolicy_();
    }
    nearbyShareClick_() {
        if (this.isNearbyShareDisallowedByPolicy_()) {
            return;
        }
        const nearbyEnabled = this.getPref('nearby_sharing.enabled').value;
        const onboardingComplete = this.getPref('nearby_sharing.onboarding_complete').value;
        // If background scanning is enabled the subpage is accessible regardless of
        // whether Nearby Share is on or off so that users can enable/disable the
        // "Nearby device is trying to share" notification.
        if (this.shouldEnableNearbyShareBackgroundScanningRevamp_) {
            Router.getInstance().navigateTo(routes.NEARBY_SHARE);
            return;
        }
        let params = undefined;
        if (!nearbyEnabled) {
            if (onboardingComplete) {
                // If we have already run onboarding at least once, we don't need to do
                // it again, just enabled the feature in place.
                this.setPrefValue('nearby_sharing.enabled', true);
                return;
            }
            // Otherwise we need to go into the subpage and trigger the onboarding
            // dialog.
            params = new URLSearchParams();
            // Set by metrics to determine entrypoint for onboarding
            params.set('entrypoint', 'settings');
            params.set('onboarding', '');
        }
        Router.getInstance().navigateTo(routes.NEARBY_SHARE, params);
    }
    showPermissionsSetupDialog_() {
        if (!this.showPhonePermissionSetupDialog_) {
            return false;
        }
        return !this.pageContentData.isPhoneHubPermissionsDialogSupported;
    }
    showNewPermissionsSetupDialog_() {
        if (!this.showPhonePermissionSetupDialog_) {
            return false;
        }
        return this.pageContentData.isPhoneHubPermissionsDialogSupported;
    }
    onHidePhonePermissionsSetupDialog_() {
        // Don't close the main dialog if the pin number sub-dialog is open.
        if (this.isPinNumberDialogShowing_) {
            this.isPinNumberDialogShowing_ = false;
            return;
        }
        // Don't close the main dialog if the password sub-dialog is open.
        if (this.isPasswordDialogShowing_) {
            this.isPasswordDialogShowing_ = false;
            return;
        }
        this.showPhonePermissionSetupDialog_ = false;
        // By default, dialog.close() returns the focus to the previously focused
        // element if the element is still focusable and within the viewport,
        // otherwise move the focus to <body>. Therefore, we need to move focus
        // manually to the subpage.
        this.shadowRoot.querySelector('settings-multidevice-subpage').focus();
    }
    onPinNumberSelected_(e) {
        assert(typeof e.detail.isPinNumberSelected === 'boolean');
        this.isPinNumberDialogShowing_ = e.detail.isPinNumberSelected;
    }
    handleNearbySetUpClick_() {
        const params = new URLSearchParams();
        params.set('onboarding', '');
        // Set by metrics to determine entrypoint for onboarding
        params.set('entrypoint', 'settings');
        Router.getInstance().navigateTo(routes.NEARBY_SHARE, params);
    }
    shouldShowNearbyShareSubpageArrow_(isNearbySharingEnabled, shouldEnableNearbyShareBackgroundScanningRevamp) {
        // If the background scanning feature is enabled but Nearby Sharing is
        // disabled the subpage should be accessible. The subpage is also accessible
        // pre-onboarding.
        return (shouldEnableNearbyShareBackgroundScanningRevamp ||
            isNearbySharingEnabled) &&
            !this.isNearbyShareDisallowedByPolicy_();
    }
    computeShouldEnableNearbyShareBackgroundScanningRevamp_(isHardwareSupported) {
        return isHardwareSupported;
    }
    /**
     * Whether the combined setup for Notifications and Camera Roll is supported
     * on the connected phone.
     */
    isCombinedSetupSupported_() {
        return this.pageContentData.isPhoneHubFeatureCombinedSetupSupported;
    }
    /**
     * Due to loadTimeData is not guaranteed to be consistent between page
     * refreshes, use FireWebUIListener() to update dynamic value of screen lock
     * setting.
     */
    onEnableScreenLockChanged_(enabled) {
        this.isChromeosScreenLockEnabled_ = enabled;
    }
    /**
     * Due to loadTimeData is not guaranteed to be consistent between page
     * refreshes, use FireWebUIListener() to update dynamic value of screen lock
     * status of phone.
     */
    onScreenLockStatusChanged_(enabled) {
        this.isPhoneScreenLockEnabled_ = enabled;
    }
    getMultideviceSubpageTitle_() {
        if (this.isRevampWayfindingEnabled_) {
            const deviceName = this.pageContentData.hostDeviceName || '';
            return this.i18n('multideviceSubpageTitle', deviceName);
        }
        return this.pageContentData.hostDeviceName ||
            this.i18n('multideviceSetupItemHeading');
    }
    showForgetDeviceDialog_() {
        this.shouldShowForgetDeviceDialog_ = true;
    }
    closeForgetDeviceDialog_() {
        this.shouldShowForgetDeviceDialog_ = false;
    }
}
customElements.define(SettingsMultidevicePageElement.is, SettingsMultidevicePageElement);
