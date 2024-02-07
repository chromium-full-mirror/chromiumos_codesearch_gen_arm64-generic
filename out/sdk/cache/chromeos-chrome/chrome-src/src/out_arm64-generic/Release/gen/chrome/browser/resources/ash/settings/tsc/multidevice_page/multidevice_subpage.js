// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * Subpage of settings-multidevice-page for managing multidevice features
 * individually and for forgetting a host.
 */
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/ash/common/cr_elements/cr_shared_vars.css.js';
import '../settings_shared.css.js';
import '../settings_vars.css.js';
import './multidevice_combined_setup_item.js';
import './multidevice_feature_item.js';
import './multidevice_feature_toggle.js';
import './multidevice_task_continuation_item.js';
import './multidevice_task_continuation_item_lacros.js';
import './multidevice_tether_item.js';
import './multidevice_wifi_sync_item.js';
import './multidevice_forget_device_dialog.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { DeepLinkingMixin } from '../common/deep_linking_mixin.js';
import { isRevampWayfindingEnabled } from '../common/load_time_booleans.js';
import { RouteObserverMixin } from '../common/route_observer_mixin.js';
import { Setting } from '../mojom-webui/setting.mojom-webui.js';
import { routes } from '../router.js';
import { MultiDeviceBrowserProxyImpl } from './multidevice_browser_proxy.js';
import { MultiDeviceFeature, MultiDeviceSettingsMode, PhoneHubFeatureAccessProhibitedReason, PhoneHubPermissionsSetupFeatureCombination } from './multidevice_constants.js';
import { MultiDeviceFeatureMixin } from './multidevice_feature_mixin.js';
import { getTemplate } from './multidevice_subpage.html.js';
const SettingsMultideviceSubpageElementBase = MultiDeviceFeatureMixin(DeepLinkingMixin(RouteObserverMixin(PolymerElement)));
export class SettingsMultideviceSubpageElement extends SettingsMultideviceSubpageElementBase {
    static get is() {
        return 'settings-multidevice-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Used by DeepLinkingMixin to focus this page's deep links.
             */
            supportedSettingIds: {
                type: Object,
                value: () => new Set([
                    Setting.kInstantTetheringOnOff,
                    Setting.kMultiDeviceOnOff,
                    Setting.kSmartLockOnOff,
                    Setting.kForgetPhone,
                    Setting.kPhoneHubOnOff,
                    Setting.kPhoneHubCameraRollOnOff,
                    Setting.kPhoneHubNotificationsOnOff,
                    Setting.kPhoneHubTaskContinuationOnOff,
                    Setting.kWifiSyncOnOff,
                    Setting.kPhoneHubAppsOnOff,
                ]),
            },
            isRevampWayfindingEnabled_: {
                type: Boolean,
                value: () => {
                    return isRevampWayfindingEnabled();
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
        this.browserProxy_ = MultiDeviceBrowserProxyImpl.getInstance();
    }
    currentRouteChanged(route) {
        // Does not apply to this page.
        if (route !== routes.MULTIDEVICE_FEATURES) {
            return;
        }
        this.attemptDeepLink();
    }
    handleVerifyButtonClick_() {
        this.browserProxy_.retryPendingHostSetup();
    }
    shouldShowIndividualFeatures_() {
        return this.pageContentData.mode ===
            MultiDeviceSettingsMode.HOST_SET_VERIFIED;
    }
    shouldShowVerifyButton_() {
        return [
            MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_SERVER,
            MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_VERIFICATION,
        ].includes(this.pageContentData.mode);
    }
    shouldShowSuiteToggle_() {
        return this.pageContentData.mode ===
            MultiDeviceSettingsMode.HOST_SET_VERIFIED;
    }
    handleForgetDeviceClick_() {
        this.shouldShowForgetDeviceDialog_ = true;
    }
    onCloseForgetDeviceDialog_() {
        this.shouldShowForgetDeviceDialog_ = false;
    }
    getStatusInnerHtml_() {
        if ([
            MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_SERVER,
            MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_VERIFICATION,
        ].includes(this.pageContentData.mode)) {
            return this.i18nAdvanced('multideviceVerificationText');
        }
        return this.isRevampWayfindingEnabled_ ?
            this.i18nAdvanced(`multideviceSuiteToggleLabel`) :
            (this.isSuiteOn() ? this.i18nAdvanced('multideviceEnabled') :
                this.i18nAdvanced('multideviceDisabled'));
    }
    getPhoneHubNotificationsTooltip_() {
        if (!this.isFeatureAllowedByPolicy(MultiDeviceFeature.PHONE_HUB_NOTIFICATIONS)) {
            return '';
        }
        if (!this.isPhoneHubNotificationAccessProhibited()) {
            return '';
        }
        switch (this.pageContentData.notificationAccessProhibitedReason) {
            case PhoneHubFeatureAccessProhibitedReason.UNKNOWN:
                return this.i18n('multideviceNotificationAccessProhibitedTooltip');
            case PhoneHubFeatureAccessProhibitedReason.WORK_PROFILE:
                return this.i18n('multideviceNotificationAccessProhibitedTooltip');
            case PhoneHubFeatureAccessProhibitedReason.DISABLED_BY_PHONE_POLICY:
                return this.i18n('multideviceItemDisabledByPhoneAdminTooltip');
            default:
                return this.i18n('multideviceNotificationAccessProhibitedTooltip');
        }
    }
    getPhoneHubAppsTooltip_() {
        if (!this.isFeatureAllowedByPolicy(MultiDeviceFeature.ECHE)) {
            return '';
        }
        if (!this.isPhoneHubAppsAccessProhibited()) {
            return '';
        }
        return this.i18n('multideviceItemDisabledByPhoneAdminTooltip');
    }
    shouldShowPhoneHubCameraRollItem_() {
        return this.isFeatureSupported(MultiDeviceFeature.PHONE_HUB_CAMERA_ROLL) &&
            (!this.isPhoneHubCameraRollSetupRequired() ||
                !this.shouldShowPhoneHubCombinedSetupItem_());
    }
    shouldShowPhoneHubNotificationsItem_() {
        return this.isFeatureSupported(MultiDeviceFeature.PHONE_HUB_NOTIFICATIONS) &&
            (!this.isPhoneHubNotificationsSetupRequired() ||
                !this.shouldShowPhoneHubCombinedSetupItem_());
    }
    shouldShowPhoneHubAppsItem_() {
        return this.isFeatureSupported(MultiDeviceFeature.ECHE) &&
            (!this.isPhoneHubAppsSetupRequired() ||
                !this.shouldShowPhoneHubCombinedSetupItem_());
    }
    shouldShowPhoneHubCombinedSetupItem_() {
        let numFeaturesSetupRequired = 0;
        if (this.isPhoneHubCameraRollSetupRequired()) {
            numFeaturesSetupRequired++;
        }
        if (this.isPhoneHubNotificationsSetupRequired()) {
            numFeaturesSetupRequired++;
        }
        if (this.isPhoneHubAppsSetupRequired()) {
            numFeaturesSetupRequired++;
        }
        return numFeaturesSetupRequired >= 2;
    }
    handleNotificationSetupClicked_() {
        this.handlePhoneHubSetupClick(PhoneHubPermissionsSetupFeatureCombination.NOTIFICATION);
    }
    handleCameraRollSetupClicked_() {
        this.handlePhoneHubSetupClick(PhoneHubPermissionsSetupFeatureCombination.CAMERA_ROLL);
    }
    handleMessagingAppSetupClicked_() {
        this.handlePhoneHubSetupClick(PhoneHubPermissionsSetupFeatureCombination.MESSAGING_APP);
    }
    handlePhoneHubSetupClick(setupMode) {
        const permissionSetupRequestedEvent = new CustomEvent('permission-setup-requested', { bubbles: true, composed: true });
        this.dispatchEvent(permissionSetupRequestedEvent);
        this.browserProxy_.logPhoneHubPermissionSetUpButtonClicked(setupMode);
    }
    isPhoneHubDisabled_() {
        return !this.isSuiteOn() || !this.isPhoneHubOn();
    }
    isSyncedSessionSharingEnabled_() {
        return this.pageContentData.isChromeOSSyncedSessionSharingEnabled;
    }
}
customElements.define(SettingsMultideviceSubpageElement.is, SettingsMultideviceSubpageElement);
