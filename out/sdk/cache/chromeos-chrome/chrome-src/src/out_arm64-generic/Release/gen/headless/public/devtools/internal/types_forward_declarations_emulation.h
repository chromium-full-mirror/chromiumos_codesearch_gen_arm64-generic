// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPES_FORWARD_DECLARATIONS_EMULATION_H_
#define HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPES_FORWARD_DECLARATIONS_EMULATION_H_

#include "base/values.h"

namespace headless {

namespace emulation {
class ScreenOrientation;
class DisplayFeature;
class MediaFeature;
class UserAgentBrandVersion;
class UserAgentMetadata;
class SensorMetadata;
class SensorReadingSingle;
class SensorReadingXYZ;
class SensorReadingQuaternion;
class SensorReading;
class CanEmulateParams;
class CanEmulateResult;
class ClearDeviceMetricsOverrideParams;
class ClearDeviceMetricsOverrideResult;
class ClearGeolocationOverrideParams;
class ClearGeolocationOverrideResult;
class ResetPageScaleFactorParams;
class ResetPageScaleFactorResult;
class SetFocusEmulationEnabledParams;
class SetFocusEmulationEnabledResult;
class SetAutoDarkModeOverrideParams;
class SetAutoDarkModeOverrideResult;
class SetCPUThrottlingRateParams;
class SetCPUThrottlingRateResult;
class SetDefaultBackgroundColorOverrideParams;
class SetDefaultBackgroundColorOverrideResult;
class SetDeviceMetricsOverrideParams;
class SetDeviceMetricsOverrideResult;
class SetScrollbarsHiddenParams;
class SetScrollbarsHiddenResult;
class SetDocumentCookieDisabledParams;
class SetDocumentCookieDisabledResult;
class SetEmitTouchEventsForMouseParams;
class SetEmitTouchEventsForMouseResult;
class SetEmulatedMediaParams;
class SetEmulatedMediaResult;
class SetEmulatedVisionDeficiencyParams;
class SetEmulatedVisionDeficiencyResult;
class SetGeolocationOverrideParams;
class SetGeolocationOverrideResult;
class GetOverriddenSensorInformationParams;
class GetOverriddenSensorInformationResult;
class SetSensorOverrideEnabledParams;
class SetSensorOverrideEnabledResult;
class SetSensorOverrideReadingsParams;
class SetSensorOverrideReadingsResult;
class SetIdleOverrideParams;
class SetIdleOverrideResult;
class ClearIdleOverrideParams;
class ClearIdleOverrideResult;
class SetNavigatorOverridesParams;
class SetNavigatorOverridesResult;
class SetPageScaleFactorParams;
class SetPageScaleFactorResult;
class SetScriptExecutionDisabledParams;
class SetScriptExecutionDisabledResult;
class SetTouchEmulationEnabledParams;
class SetTouchEmulationEnabledResult;
class SetVirtualTimePolicyParams;
class SetVirtualTimePolicyResult;
class SetLocaleOverrideParams;
class SetLocaleOverrideResult;
class SetTimezoneOverrideParams;
class SetTimezoneOverrideResult;
class SetVisibleSizeParams;
class SetVisibleSizeResult;
class SetDisabledImageTypesParams;
class SetDisabledImageTypesResult;
class SetHardwareConcurrencyOverrideParams;
class SetHardwareConcurrencyOverrideResult;
class SetUserAgentOverrideParams;
class SetUserAgentOverrideResult;
class SetAutomationOverrideParams;
class SetAutomationOverrideResult;
class VirtualTimeBudgetExpiredParams;

enum class VirtualTimePolicy {
  ADVANCE,
  PAUSE,
  PAUSE_IF_NETWORK_FETCHES_PENDING
};

enum class SensorType {
  ABSOLUTE_ORIENTATION,
  ACCELEROMETER,
  AMBIENT_LIGHT,
  GRAVITY,
  GYROSCOPE,
  LINEAR_ACCELERATION,
  MAGNETOMETER,
  PROXIMITY,
  RELATIVE_ORIENTATION
};

enum class DisabledImageType {
  AVIF,
  WEBP
};

enum class ScreenOrientationType {
  PORTRAIT_PRIMARY,
  PORTRAIT_SECONDARY,
  LANDSCAPE_PRIMARY,
  LANDSCAPE_SECONDARY
};

enum class DisplayFeatureOrientation {
  VERTICAL,
  HORIZONTAL
};

enum class SetEmitTouchEventsForMouseConfiguration {
  MOBILE,
  DESKTOP
};

enum class SetEmulatedVisionDeficiencyType {
  NONE,
  BLURRED_VISION,
  REDUCED_CONTRAST,
  ACHROMATOPSIA,
  DEUTERANOPIA,
  PROTANOPIA,
  TRITANOPIA
};

}  // namespace emulation

}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPES_FORWARD_DECLARATIONS_EMULATION_H_
