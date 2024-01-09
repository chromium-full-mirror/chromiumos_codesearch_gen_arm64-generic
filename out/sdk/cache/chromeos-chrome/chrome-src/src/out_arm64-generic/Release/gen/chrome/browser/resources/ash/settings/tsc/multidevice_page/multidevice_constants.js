// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * The possible statuses of hosts on the logged in account that determine the
 * page content. Note that this is based on (and must include an analog of
 * all values in) the HostStatus enum in
 * services/multidevice_setup/public/mojom/multidevice_setup.mojom.
 */
export var MultiDeviceSettingsMode;
(function (MultiDeviceSettingsMode) {
    MultiDeviceSettingsMode[MultiDeviceSettingsMode["NO_ELIGIBLE_HOSTS"] = 0] = "NO_ELIGIBLE_HOSTS";
    MultiDeviceSettingsMode[MultiDeviceSettingsMode["NO_HOST_SET"] = 1] = "NO_HOST_SET";
    MultiDeviceSettingsMode[MultiDeviceSettingsMode["HOST_SET_WAITING_FOR_SERVER"] = 2] = "HOST_SET_WAITING_FOR_SERVER";
    MultiDeviceSettingsMode[MultiDeviceSettingsMode["HOST_SET_WAITING_FOR_VERIFICATION"] = 3] = "HOST_SET_WAITING_FOR_VERIFICATION";
    MultiDeviceSettingsMode[MultiDeviceSettingsMode["HOST_SET_VERIFIED"] = 4] = "HOST_SET_VERIFIED";
})(MultiDeviceSettingsMode || (MultiDeviceSettingsMode = {}));
/**
 * Enum of MultiDevice features. Note that this is copied from (and must
 * include an analog of all values in) the Feature enum in
 * //chromeos/ash/services/multidevice_setup/public/mojom/multidevice_setup.mojom.
 */
export var MultiDeviceFeature;
(function (MultiDeviceFeature) {
    MultiDeviceFeature[MultiDeviceFeature["BETTER_TOGETHER_SUITE"] = 0] = "BETTER_TOGETHER_SUITE";
    MultiDeviceFeature[MultiDeviceFeature["INSTANT_TETHERING"] = 1] = "INSTANT_TETHERING";
    // MESSAGES (2) is deprecated.
    MultiDeviceFeature[MultiDeviceFeature["SMART_LOCK"] = 3] = "SMART_LOCK";
    MultiDeviceFeature[MultiDeviceFeature["PHONE_HUB"] = 4] = "PHONE_HUB";
    MultiDeviceFeature[MultiDeviceFeature["PHONE_HUB_NOTIFICATIONS"] = 5] = "PHONE_HUB_NOTIFICATIONS";
    MultiDeviceFeature[MultiDeviceFeature["PHONE_HUB_TASK_CONTINUATION"] = 6] = "PHONE_HUB_TASK_CONTINUATION";
    MultiDeviceFeature[MultiDeviceFeature["WIFI_SYNC"] = 7] = "WIFI_SYNC";
    MultiDeviceFeature[MultiDeviceFeature["ECHE"] = 8] = "ECHE";
    MultiDeviceFeature[MultiDeviceFeature["PHONE_HUB_CAMERA_ROLL"] = 9] = "PHONE_HUB_CAMERA_ROLL";
})(MultiDeviceFeature || (MultiDeviceFeature = {}));
/**
 * Possible states of MultiDevice features. Note that this is copied from (and
 * must include an analog of all values in) the FeatureState enum in
 * //chromeos/ash/services/multidevice_setup/public/mojom/multidevice_setup.mojom.
 */
export var MultiDeviceFeatureState;
(function (MultiDeviceFeatureState) {
    MultiDeviceFeatureState[MultiDeviceFeatureState["PROHIBITED_BY_POLICY"] = 0] = "PROHIBITED_BY_POLICY";
    MultiDeviceFeatureState[MultiDeviceFeatureState["DISABLED_BY_USER"] = 1] = "DISABLED_BY_USER";
    MultiDeviceFeatureState[MultiDeviceFeatureState["ENABLED_BY_USER"] = 2] = "ENABLED_BY_USER";
    MultiDeviceFeatureState[MultiDeviceFeatureState["NOT_SUPPORTED_BY_CHROMEBOOK"] = 3] = "NOT_SUPPORTED_BY_CHROMEBOOK";
    MultiDeviceFeatureState[MultiDeviceFeatureState["NOT_SUPPORTED_BY_PHONE"] = 4] = "NOT_SUPPORTED_BY_PHONE";
    // UNAVAILABLE_NO_VERIFIED_HOST (5) is deprecated.
    MultiDeviceFeatureState[MultiDeviceFeatureState["UNAVAILABLE_INSUFFICIENT_SECURITY"] = 6] = "UNAVAILABLE_INSUFFICIENT_SECURITY";
    MultiDeviceFeatureState[MultiDeviceFeatureState["UNAVAILABLE_SUITE_DISABLED"] = 7] = "UNAVAILABLE_SUITE_DISABLED";
    MultiDeviceFeatureState[MultiDeviceFeatureState["FURTHER_SETUP_REQUIRED"] = 8] = "FURTHER_SETUP_REQUIRED";
    MultiDeviceFeatureState[MultiDeviceFeatureState["UNAVAILABLE_TOP_LEVEL_FEATURE_DISABLED"] = 9] = "UNAVAILABLE_TOP_LEVEL_FEATURE_DISABLED";
    MultiDeviceFeatureState[MultiDeviceFeatureState["UNAVAILABLE_NO_VERIFIED_HOST_CLIENT_NOT_READY"] = 10] = "UNAVAILABLE_NO_VERIFIED_HOST_CLIENT_NOT_READY";
    MultiDeviceFeatureState[MultiDeviceFeatureState["UNAVAILABLE_NO_VERIFIED_HOST_NO_ELIGIBLE_HOST"] = 11] = "UNAVAILABLE_NO_VERIFIED_HOST_NO_ELIGIBLE_HOST";
    MultiDeviceFeatureState[MultiDeviceFeatureState["UNAVAILABLE_NO_VERIFIED_HOST_HOST_EXISTS_BUT_NOT_SET_AND_VERIFIED"] = 12] = "UNAVAILABLE_NO_VERIFIED_HOST_HOST_EXISTS_BUT_NOT_SET_AND_VERIFIED";
})(MultiDeviceFeatureState || (MultiDeviceFeatureState = {}));
/**
 * Possible states of Phone Hub's feature access. Access can be
 * prohibited if the user is using a work profile on their phone on Android
 * version <N, or if the policy managing the phone disables access.
 */
export var PhoneHubFeatureAccessStatus;
(function (PhoneHubFeatureAccessStatus) {
    PhoneHubFeatureAccessStatus[PhoneHubFeatureAccessStatus["PROHIBITED"] = 0] = "PROHIBITED";
    PhoneHubFeatureAccessStatus[PhoneHubFeatureAccessStatus["AVAILABLE_BUT_NOT_GRANTED"] = 1] = "AVAILABLE_BUT_NOT_GRANTED";
    PhoneHubFeatureAccessStatus[PhoneHubFeatureAccessStatus["ACCESS_GRANTED"] = 2] = "ACCESS_GRANTED";
})(PhoneHubFeatureAccessStatus || (PhoneHubFeatureAccessStatus = {}));
/**
 * Possible reasons for Phone Hub's feature access being prohibited.
 * Users should ensure feature access is actually prohibited before
 * comparing against these reasons.
 */
export var PhoneHubFeatureAccessProhibitedReason;
(function (PhoneHubFeatureAccessProhibitedReason) {
    PhoneHubFeatureAccessProhibitedReason[PhoneHubFeatureAccessProhibitedReason["UNKNOWN"] = 0] = "UNKNOWN";
    PhoneHubFeatureAccessProhibitedReason[PhoneHubFeatureAccessProhibitedReason["WORK_PROFILE"] = 1] = "WORK_PROFILE";
    PhoneHubFeatureAccessProhibitedReason[PhoneHubFeatureAccessProhibitedReason["DISABLED_BY_PHONE_POLICY"] = 2] = "DISABLED_BY_PHONE_POLICY";
})(PhoneHubFeatureAccessProhibitedReason || (PhoneHubFeatureAccessProhibitedReason = {}));
/**
 * Possible of Phone Hub's permissions setup mode．The value will be assigned
 * when the user clicks on the settings UI. Basically, INIT_MODE will be
 * default value, which means it has not been set yet.
 * ALL_PERMISSIONS_SETUP_MODE means that we will process notifications and
 * apps streaming onboarding flow in order.
 */
export var PhoneHubPermissionsSetupMode;
(function (PhoneHubPermissionsSetupMode) {
    PhoneHubPermissionsSetupMode[PhoneHubPermissionsSetupMode["INIT_MODE"] = 0] = "INIT_MODE";
    PhoneHubPermissionsSetupMode[PhoneHubPermissionsSetupMode["NOTIFICATION_SETUP_MODE"] = 1] = "NOTIFICATION_SETUP_MODE";
    PhoneHubPermissionsSetupMode[PhoneHubPermissionsSetupMode["APPS_SETUP_MODE"] = 2] = "APPS_SETUP_MODE";
    PhoneHubPermissionsSetupMode[PhoneHubPermissionsSetupMode["CAMERA_ROLL_SETUP_MODE"] = 3] = "CAMERA_ROLL_SETUP_MODE";
    PhoneHubPermissionsSetupMode[PhoneHubPermissionsSetupMode["ALL_PERMISSIONS_SETUP_MODE"] = 4] = "ALL_PERMISSIONS_SETUP_MODE";
})(PhoneHubPermissionsSetupMode || (PhoneHubPermissionsSetupMode = {}));
/**
 * Numerical values the screens for combined set up dialog only.
 * Update of this enum should be propagate to PermissionsOnboardingStep
 * in chromeos/ash/components/phonehub/util/histogram_util.h.
 */
export var PhoneHubPermissionsSetupFlowScreens;
(function (PhoneHubPermissionsSetupFlowScreens) {
    PhoneHubPermissionsSetupFlowScreens[PhoneHubPermissionsSetupFlowScreens["NOT_APPLICABLE"] = 0] = "NOT_APPLICABLE";
    PhoneHubPermissionsSetupFlowScreens[PhoneHubPermissionsSetupFlowScreens["INTRO"] = 1] = "INTRO";
    PhoneHubPermissionsSetupFlowScreens[PhoneHubPermissionsSetupFlowScreens["FINISH_SET_UP_ON_PHONE"] = 2] = "FINISH_SET_UP_ON_PHONE";
    PhoneHubPermissionsSetupFlowScreens[PhoneHubPermissionsSetupFlowScreens["CONNECTING"] = 3] = "CONNECTING";
    PhoneHubPermissionsSetupFlowScreens[PhoneHubPermissionsSetupFlowScreens["CONNECTION_ERROR"] = 4] = "CONNECTION_ERROR";
    PhoneHubPermissionsSetupFlowScreens[PhoneHubPermissionsSetupFlowScreens["CONNECTION_TIME_OUT"] = 5] = "CONNECTION_TIME_OUT";
    PhoneHubPermissionsSetupFlowScreens[PhoneHubPermissionsSetupFlowScreens["CONNECTED"] = 6] = "CONNECTED";
    PhoneHubPermissionsSetupFlowScreens[PhoneHubPermissionsSetupFlowScreens["SET_A_PIN_OR_PASSWORD"] = 7] = "SET_A_PIN_OR_PASSWORD";
})(PhoneHubPermissionsSetupFlowScreens || (PhoneHubPermissionsSetupFlowScreens = {}));
/**
 * Numerical values the screens for actions in combined set up dialog only.
 * Update of this enum should be propagate to PermissionsOnboardingScreenEvent
 * in chromeos/ash/components/phonehub/util/histogram_util.h.
 */
export var PhoneHubPermissionsSetupAction;
(function (PhoneHubPermissionsSetupAction) {
    PhoneHubPermissionsSetupAction[PhoneHubPermissionsSetupAction["UNKNOWN"] = 0] = "UNKNOWN";
    PhoneHubPermissionsSetupAction[PhoneHubPermissionsSetupAction["SHOWN"] = 1] = "SHOWN";
    PhoneHubPermissionsSetupAction[PhoneHubPermissionsSetupAction["LEARN_MORE"] = 2] = "LEARN_MORE";
    PhoneHubPermissionsSetupAction[PhoneHubPermissionsSetupAction["CANCEL"] = 3] = "CANCEL";
    PhoneHubPermissionsSetupAction[PhoneHubPermissionsSetupAction["DONE"] = 4] = "DONE";
    PhoneHubPermissionsSetupAction[PhoneHubPermissionsSetupAction["NEXT_OR_TRY_AGAIN"] = 5] = "NEXT_OR_TRY_AGAIN";
})(PhoneHubPermissionsSetupAction || (PhoneHubPermissionsSetupAction = {}));
/**
 * Numerical values the set up mode in combined set up dialog only.
 * Update of this enum should be propagate to PermissionsOnboardingSetUpMode in
 * chromeos/ash/components/phonehub/util/histogram_util.h.
 */
export var PhoneHubPermissionsSetupFeatureCombination;
(function (PhoneHubPermissionsSetupFeatureCombination) {
    PhoneHubPermissionsSetupFeatureCombination[PhoneHubPermissionsSetupFeatureCombination["NONE"] = 0] = "NONE";
    PhoneHubPermissionsSetupFeatureCombination[PhoneHubPermissionsSetupFeatureCombination["NOTIFICATION"] = 1] = "NOTIFICATION";
    PhoneHubPermissionsSetupFeatureCombination[PhoneHubPermissionsSetupFeatureCombination["MESSAGING_APP"] = 2] = "MESSAGING_APP";
    PhoneHubPermissionsSetupFeatureCombination[PhoneHubPermissionsSetupFeatureCombination["CAMERA_ROLL"] = 3] = "CAMERA_ROLL";
    PhoneHubPermissionsSetupFeatureCombination[PhoneHubPermissionsSetupFeatureCombination["NOTIFICATION_AND_MESSAGING_APP"] = 4] = "NOTIFICATION_AND_MESSAGING_APP";
    PhoneHubPermissionsSetupFeatureCombination[PhoneHubPermissionsSetupFeatureCombination["NOTIFICATION_AND_CAMERA_ROLL"] = 5] = "NOTIFICATION_AND_CAMERA_ROLL";
    PhoneHubPermissionsSetupFeatureCombination[PhoneHubPermissionsSetupFeatureCombination["MESSAGING_APP_AND_CAMERA_ROLL"] = 6] = "MESSAGING_APP_AND_CAMERA_ROLL";
    PhoneHubPermissionsSetupFeatureCombination[PhoneHubPermissionsSetupFeatureCombination["ALL_PERMISSONS"] = 7] = "ALL_PERMISSONS";
})(PhoneHubPermissionsSetupFeatureCombination || (PhoneHubPermissionsSetupFeatureCombination = {}));
