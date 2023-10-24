// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_EMULATION_H_
#define HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_EMULATION_H_

#include "base/notreached.h"
#include "base/values.h"
#include "headless/public/devtools/domains/types_emulation.h"
#include "headless/public/internal/value_conversions.h"

namespace headless {
namespace internal {


template <>
struct FromValue<emulation::ScreenOrientation> {
  static std::unique_ptr<emulation::ScreenOrientation> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::ScreenOrientation::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::ScreenOrientation& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::DisplayFeature> {
  static std::unique_ptr<emulation::DisplayFeature> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::DisplayFeature::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::DisplayFeature& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::MediaFeature> {
  static std::unique_ptr<emulation::MediaFeature> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::MediaFeature::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::MediaFeature& value) {
  return value.Serialize();
}

template <>
struct FromValue<emulation::VirtualTimePolicy> {
  static emulation::VirtualTimePolicy Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return emulation::VirtualTimePolicy::ADVANCE;
    }
    if (value.GetString() == "advance")
      return emulation::VirtualTimePolicy::ADVANCE;
    if (value.GetString() == "pause")
      return emulation::VirtualTimePolicy::PAUSE;
    if (value.GetString() == "pauseIfNetworkFetchesPending")
      return emulation::VirtualTimePolicy::PAUSE_IF_NETWORK_FETCHES_PENDING;
    errors->AddError("invalid enum value");
    return emulation::VirtualTimePolicy::ADVANCE;
  }
};

template <>
inline base::Value ToValue(const emulation::VirtualTimePolicy& value) {
  switch (value) {
    case emulation::VirtualTimePolicy::ADVANCE:
      return base::Value("advance");
    case emulation::VirtualTimePolicy::PAUSE:
      return base::Value("pause");
    case emulation::VirtualTimePolicy::PAUSE_IF_NETWORK_FETCHES_PENDING:
      return base::Value("pauseIfNetworkFetchesPending");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<emulation::UserAgentBrandVersion> {
  static std::unique_ptr<emulation::UserAgentBrandVersion> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::UserAgentBrandVersion::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::UserAgentBrandVersion& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::UserAgentMetadata> {
  static std::unique_ptr<emulation::UserAgentMetadata> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::UserAgentMetadata::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::UserAgentMetadata& value) {
  return value.Serialize();
}

template <>
struct FromValue<emulation::SensorType> {
  static emulation::SensorType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return emulation::SensorType::ABSOLUTE_ORIENTATION;
    }
    if (value.GetString() == "absolute-orientation")
      return emulation::SensorType::ABSOLUTE_ORIENTATION;
    if (value.GetString() == "accelerometer")
      return emulation::SensorType::ACCELEROMETER;
    if (value.GetString() == "ambient-light")
      return emulation::SensorType::AMBIENT_LIGHT;
    if (value.GetString() == "gravity")
      return emulation::SensorType::GRAVITY;
    if (value.GetString() == "gyroscope")
      return emulation::SensorType::GYROSCOPE;
    if (value.GetString() == "linear-acceleration")
      return emulation::SensorType::LINEAR_ACCELERATION;
    if (value.GetString() == "magnetometer")
      return emulation::SensorType::MAGNETOMETER;
    if (value.GetString() == "proximity")
      return emulation::SensorType::PROXIMITY;
    if (value.GetString() == "relative-orientation")
      return emulation::SensorType::RELATIVE_ORIENTATION;
    errors->AddError("invalid enum value");
    return emulation::SensorType::ABSOLUTE_ORIENTATION;
  }
};

template <>
inline base::Value ToValue(const emulation::SensorType& value) {
  switch (value) {
    case emulation::SensorType::ABSOLUTE_ORIENTATION:
      return base::Value("absolute-orientation");
    case emulation::SensorType::ACCELEROMETER:
      return base::Value("accelerometer");
    case emulation::SensorType::AMBIENT_LIGHT:
      return base::Value("ambient-light");
    case emulation::SensorType::GRAVITY:
      return base::Value("gravity");
    case emulation::SensorType::GYROSCOPE:
      return base::Value("gyroscope");
    case emulation::SensorType::LINEAR_ACCELERATION:
      return base::Value("linear-acceleration");
    case emulation::SensorType::MAGNETOMETER:
      return base::Value("magnetometer");
    case emulation::SensorType::PROXIMITY:
      return base::Value("proximity");
    case emulation::SensorType::RELATIVE_ORIENTATION:
      return base::Value("relative-orientation");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<emulation::SensorMetadata> {
  static std::unique_ptr<emulation::SensorMetadata> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SensorMetadata::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SensorMetadata& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SensorReadingSingle> {
  static std::unique_ptr<emulation::SensorReadingSingle> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SensorReadingSingle::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SensorReadingSingle& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SensorReadingXYZ> {
  static std::unique_ptr<emulation::SensorReadingXYZ> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SensorReadingXYZ::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SensorReadingXYZ& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SensorReadingQuaternion> {
  static std::unique_ptr<emulation::SensorReadingQuaternion> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SensorReadingQuaternion::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SensorReadingQuaternion& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SensorReading> {
  static std::unique_ptr<emulation::SensorReading> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SensorReading::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SensorReading& value) {
  return value.Serialize();
}

template <>
struct FromValue<emulation::DisabledImageType> {
  static emulation::DisabledImageType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return emulation::DisabledImageType::AVIF;
    }
    if (value.GetString() == "avif")
      return emulation::DisabledImageType::AVIF;
    if (value.GetString() == "webp")
      return emulation::DisabledImageType::WEBP;
    errors->AddError("invalid enum value");
    return emulation::DisabledImageType::AVIF;
  }
};

template <>
inline base::Value ToValue(const emulation::DisabledImageType& value) {
  switch (value) {
    case emulation::DisabledImageType::AVIF:
      return base::Value("avif");
    case emulation::DisabledImageType::WEBP:
      return base::Value("webp");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<emulation::ScreenOrientationType> {
  static emulation::ScreenOrientationType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return emulation::ScreenOrientationType::PORTRAIT_PRIMARY;
    }
    if (value.GetString() == "portraitPrimary")
      return emulation::ScreenOrientationType::PORTRAIT_PRIMARY;
    if (value.GetString() == "portraitSecondary")
      return emulation::ScreenOrientationType::PORTRAIT_SECONDARY;
    if (value.GetString() == "landscapePrimary")
      return emulation::ScreenOrientationType::LANDSCAPE_PRIMARY;
    if (value.GetString() == "landscapeSecondary")
      return emulation::ScreenOrientationType::LANDSCAPE_SECONDARY;
    errors->AddError("invalid enum value");
    return emulation::ScreenOrientationType::PORTRAIT_PRIMARY;
  }
};

template <>
inline base::Value ToValue(const emulation::ScreenOrientationType& value) {
  switch (value) {
    case emulation::ScreenOrientationType::PORTRAIT_PRIMARY:
      return base::Value("portraitPrimary");
    case emulation::ScreenOrientationType::PORTRAIT_SECONDARY:
      return base::Value("portraitSecondary");
    case emulation::ScreenOrientationType::LANDSCAPE_PRIMARY:
      return base::Value("landscapePrimary");
    case emulation::ScreenOrientationType::LANDSCAPE_SECONDARY:
      return base::Value("landscapeSecondary");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<emulation::DisplayFeatureOrientation> {
  static emulation::DisplayFeatureOrientation Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return emulation::DisplayFeatureOrientation::VERTICAL;
    }
    if (value.GetString() == "vertical")
      return emulation::DisplayFeatureOrientation::VERTICAL;
    if (value.GetString() == "horizontal")
      return emulation::DisplayFeatureOrientation::HORIZONTAL;
    errors->AddError("invalid enum value");
    return emulation::DisplayFeatureOrientation::VERTICAL;
  }
};

template <>
inline base::Value ToValue(const emulation::DisplayFeatureOrientation& value) {
  switch (value) {
    case emulation::DisplayFeatureOrientation::VERTICAL:
      return base::Value("vertical");
    case emulation::DisplayFeatureOrientation::HORIZONTAL:
      return base::Value("horizontal");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<emulation::CanEmulateParams> {
  static std::unique_ptr<emulation::CanEmulateParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::CanEmulateParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::CanEmulateParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::CanEmulateResult> {
  static std::unique_ptr<emulation::CanEmulateResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::CanEmulateResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::CanEmulateResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::ClearDeviceMetricsOverrideParams> {
  static std::unique_ptr<emulation::ClearDeviceMetricsOverrideParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::ClearDeviceMetricsOverrideParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::ClearDeviceMetricsOverrideParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::ClearDeviceMetricsOverrideResult> {
  static std::unique_ptr<emulation::ClearDeviceMetricsOverrideResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::ClearDeviceMetricsOverrideResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::ClearDeviceMetricsOverrideResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::ClearGeolocationOverrideParams> {
  static std::unique_ptr<emulation::ClearGeolocationOverrideParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::ClearGeolocationOverrideParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::ClearGeolocationOverrideParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::ClearGeolocationOverrideResult> {
  static std::unique_ptr<emulation::ClearGeolocationOverrideResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::ClearGeolocationOverrideResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::ClearGeolocationOverrideResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::ResetPageScaleFactorParams> {
  static std::unique_ptr<emulation::ResetPageScaleFactorParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::ResetPageScaleFactorParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::ResetPageScaleFactorParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::ResetPageScaleFactorResult> {
  static std::unique_ptr<emulation::ResetPageScaleFactorResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::ResetPageScaleFactorResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::ResetPageScaleFactorResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetFocusEmulationEnabledParams> {
  static std::unique_ptr<emulation::SetFocusEmulationEnabledParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetFocusEmulationEnabledParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetFocusEmulationEnabledParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetFocusEmulationEnabledResult> {
  static std::unique_ptr<emulation::SetFocusEmulationEnabledResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetFocusEmulationEnabledResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetFocusEmulationEnabledResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetAutoDarkModeOverrideParams> {
  static std::unique_ptr<emulation::SetAutoDarkModeOverrideParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetAutoDarkModeOverrideParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetAutoDarkModeOverrideParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetAutoDarkModeOverrideResult> {
  static std::unique_ptr<emulation::SetAutoDarkModeOverrideResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetAutoDarkModeOverrideResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetAutoDarkModeOverrideResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetCPUThrottlingRateParams> {
  static std::unique_ptr<emulation::SetCPUThrottlingRateParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetCPUThrottlingRateParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetCPUThrottlingRateParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetCPUThrottlingRateResult> {
  static std::unique_ptr<emulation::SetCPUThrottlingRateResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetCPUThrottlingRateResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetCPUThrottlingRateResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetDefaultBackgroundColorOverrideParams> {
  static std::unique_ptr<emulation::SetDefaultBackgroundColorOverrideParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetDefaultBackgroundColorOverrideParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetDefaultBackgroundColorOverrideParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetDefaultBackgroundColorOverrideResult> {
  static std::unique_ptr<emulation::SetDefaultBackgroundColorOverrideResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetDefaultBackgroundColorOverrideResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetDefaultBackgroundColorOverrideResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetDeviceMetricsOverrideParams> {
  static std::unique_ptr<emulation::SetDeviceMetricsOverrideParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetDeviceMetricsOverrideParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetDeviceMetricsOverrideParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetDeviceMetricsOverrideResult> {
  static std::unique_ptr<emulation::SetDeviceMetricsOverrideResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetDeviceMetricsOverrideResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetDeviceMetricsOverrideResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetScrollbarsHiddenParams> {
  static std::unique_ptr<emulation::SetScrollbarsHiddenParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetScrollbarsHiddenParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetScrollbarsHiddenParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetScrollbarsHiddenResult> {
  static std::unique_ptr<emulation::SetScrollbarsHiddenResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetScrollbarsHiddenResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetScrollbarsHiddenResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetDocumentCookieDisabledParams> {
  static std::unique_ptr<emulation::SetDocumentCookieDisabledParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetDocumentCookieDisabledParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetDocumentCookieDisabledParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetDocumentCookieDisabledResult> {
  static std::unique_ptr<emulation::SetDocumentCookieDisabledResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetDocumentCookieDisabledResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetDocumentCookieDisabledResult& value) {
  return value.Serialize();
}

template <>
struct FromValue<emulation::SetEmitTouchEventsForMouseConfiguration> {
  static emulation::SetEmitTouchEventsForMouseConfiguration Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return emulation::SetEmitTouchEventsForMouseConfiguration::MOBILE;
    }
    if (value.GetString() == "mobile")
      return emulation::SetEmitTouchEventsForMouseConfiguration::MOBILE;
    if (value.GetString() == "desktop")
      return emulation::SetEmitTouchEventsForMouseConfiguration::DESKTOP;
    errors->AddError("invalid enum value");
    return emulation::SetEmitTouchEventsForMouseConfiguration::MOBILE;
  }
};

template <>
inline base::Value ToValue(const emulation::SetEmitTouchEventsForMouseConfiguration& value) {
  switch (value) {
    case emulation::SetEmitTouchEventsForMouseConfiguration::MOBILE:
      return base::Value("mobile");
    case emulation::SetEmitTouchEventsForMouseConfiguration::DESKTOP:
      return base::Value("desktop");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<emulation::SetEmitTouchEventsForMouseParams> {
  static std::unique_ptr<emulation::SetEmitTouchEventsForMouseParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetEmitTouchEventsForMouseParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetEmitTouchEventsForMouseParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetEmitTouchEventsForMouseResult> {
  static std::unique_ptr<emulation::SetEmitTouchEventsForMouseResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetEmitTouchEventsForMouseResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetEmitTouchEventsForMouseResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetEmulatedMediaParams> {
  static std::unique_ptr<emulation::SetEmulatedMediaParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetEmulatedMediaParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetEmulatedMediaParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetEmulatedMediaResult> {
  static std::unique_ptr<emulation::SetEmulatedMediaResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetEmulatedMediaResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetEmulatedMediaResult& value) {
  return value.Serialize();
}

template <>
struct FromValue<emulation::SetEmulatedVisionDeficiencyType> {
  static emulation::SetEmulatedVisionDeficiencyType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return emulation::SetEmulatedVisionDeficiencyType::NONE;
    }
    if (value.GetString() == "none")
      return emulation::SetEmulatedVisionDeficiencyType::NONE;
    if (value.GetString() == "blurredVision")
      return emulation::SetEmulatedVisionDeficiencyType::BLURRED_VISION;
    if (value.GetString() == "reducedContrast")
      return emulation::SetEmulatedVisionDeficiencyType::REDUCED_CONTRAST;
    if (value.GetString() == "achromatopsia")
      return emulation::SetEmulatedVisionDeficiencyType::ACHROMATOPSIA;
    if (value.GetString() == "deuteranopia")
      return emulation::SetEmulatedVisionDeficiencyType::DEUTERANOPIA;
    if (value.GetString() == "protanopia")
      return emulation::SetEmulatedVisionDeficiencyType::PROTANOPIA;
    if (value.GetString() == "tritanopia")
      return emulation::SetEmulatedVisionDeficiencyType::TRITANOPIA;
    errors->AddError("invalid enum value");
    return emulation::SetEmulatedVisionDeficiencyType::NONE;
  }
};

template <>
inline base::Value ToValue(const emulation::SetEmulatedVisionDeficiencyType& value) {
  switch (value) {
    case emulation::SetEmulatedVisionDeficiencyType::NONE:
      return base::Value("none");
    case emulation::SetEmulatedVisionDeficiencyType::BLURRED_VISION:
      return base::Value("blurredVision");
    case emulation::SetEmulatedVisionDeficiencyType::REDUCED_CONTRAST:
      return base::Value("reducedContrast");
    case emulation::SetEmulatedVisionDeficiencyType::ACHROMATOPSIA:
      return base::Value("achromatopsia");
    case emulation::SetEmulatedVisionDeficiencyType::DEUTERANOPIA:
      return base::Value("deuteranopia");
    case emulation::SetEmulatedVisionDeficiencyType::PROTANOPIA:
      return base::Value("protanopia");
    case emulation::SetEmulatedVisionDeficiencyType::TRITANOPIA:
      return base::Value("tritanopia");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<emulation::SetEmulatedVisionDeficiencyParams> {
  static std::unique_ptr<emulation::SetEmulatedVisionDeficiencyParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetEmulatedVisionDeficiencyParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetEmulatedVisionDeficiencyParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetEmulatedVisionDeficiencyResult> {
  static std::unique_ptr<emulation::SetEmulatedVisionDeficiencyResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetEmulatedVisionDeficiencyResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetEmulatedVisionDeficiencyResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetGeolocationOverrideParams> {
  static std::unique_ptr<emulation::SetGeolocationOverrideParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetGeolocationOverrideParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetGeolocationOverrideParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetGeolocationOverrideResult> {
  static std::unique_ptr<emulation::SetGeolocationOverrideResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetGeolocationOverrideResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetGeolocationOverrideResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::GetOverriddenSensorInformationParams> {
  static std::unique_ptr<emulation::GetOverriddenSensorInformationParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::GetOverriddenSensorInformationParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::GetOverriddenSensorInformationParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::GetOverriddenSensorInformationResult> {
  static std::unique_ptr<emulation::GetOverriddenSensorInformationResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::GetOverriddenSensorInformationResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::GetOverriddenSensorInformationResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetSensorOverrideEnabledParams> {
  static std::unique_ptr<emulation::SetSensorOverrideEnabledParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetSensorOverrideEnabledParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetSensorOverrideEnabledParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetSensorOverrideEnabledResult> {
  static std::unique_ptr<emulation::SetSensorOverrideEnabledResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetSensorOverrideEnabledResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetSensorOverrideEnabledResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetSensorOverrideReadingsParams> {
  static std::unique_ptr<emulation::SetSensorOverrideReadingsParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetSensorOverrideReadingsParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetSensorOverrideReadingsParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetSensorOverrideReadingsResult> {
  static std::unique_ptr<emulation::SetSensorOverrideReadingsResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetSensorOverrideReadingsResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetSensorOverrideReadingsResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetIdleOverrideParams> {
  static std::unique_ptr<emulation::SetIdleOverrideParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetIdleOverrideParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetIdleOverrideParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetIdleOverrideResult> {
  static std::unique_ptr<emulation::SetIdleOverrideResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetIdleOverrideResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetIdleOverrideResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::ClearIdleOverrideParams> {
  static std::unique_ptr<emulation::ClearIdleOverrideParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::ClearIdleOverrideParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::ClearIdleOverrideParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::ClearIdleOverrideResult> {
  static std::unique_ptr<emulation::ClearIdleOverrideResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::ClearIdleOverrideResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::ClearIdleOverrideResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetNavigatorOverridesParams> {
  static std::unique_ptr<emulation::SetNavigatorOverridesParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetNavigatorOverridesParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetNavigatorOverridesParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetNavigatorOverridesResult> {
  static std::unique_ptr<emulation::SetNavigatorOverridesResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetNavigatorOverridesResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetNavigatorOverridesResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetPageScaleFactorParams> {
  static std::unique_ptr<emulation::SetPageScaleFactorParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetPageScaleFactorParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetPageScaleFactorParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetPageScaleFactorResult> {
  static std::unique_ptr<emulation::SetPageScaleFactorResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetPageScaleFactorResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetPageScaleFactorResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetScriptExecutionDisabledParams> {
  static std::unique_ptr<emulation::SetScriptExecutionDisabledParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetScriptExecutionDisabledParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetScriptExecutionDisabledParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetScriptExecutionDisabledResult> {
  static std::unique_ptr<emulation::SetScriptExecutionDisabledResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetScriptExecutionDisabledResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetScriptExecutionDisabledResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetTouchEmulationEnabledParams> {
  static std::unique_ptr<emulation::SetTouchEmulationEnabledParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetTouchEmulationEnabledParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetTouchEmulationEnabledParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetTouchEmulationEnabledResult> {
  static std::unique_ptr<emulation::SetTouchEmulationEnabledResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetTouchEmulationEnabledResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetTouchEmulationEnabledResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetVirtualTimePolicyParams> {
  static std::unique_ptr<emulation::SetVirtualTimePolicyParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetVirtualTimePolicyParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetVirtualTimePolicyParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetVirtualTimePolicyResult> {
  static std::unique_ptr<emulation::SetVirtualTimePolicyResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetVirtualTimePolicyResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetVirtualTimePolicyResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetLocaleOverrideParams> {
  static std::unique_ptr<emulation::SetLocaleOverrideParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetLocaleOverrideParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetLocaleOverrideParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetLocaleOverrideResult> {
  static std::unique_ptr<emulation::SetLocaleOverrideResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetLocaleOverrideResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetLocaleOverrideResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetTimezoneOverrideParams> {
  static std::unique_ptr<emulation::SetTimezoneOverrideParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetTimezoneOverrideParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetTimezoneOverrideParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetTimezoneOverrideResult> {
  static std::unique_ptr<emulation::SetTimezoneOverrideResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetTimezoneOverrideResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetTimezoneOverrideResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetVisibleSizeParams> {
  static std::unique_ptr<emulation::SetVisibleSizeParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetVisibleSizeParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetVisibleSizeParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetVisibleSizeResult> {
  static std::unique_ptr<emulation::SetVisibleSizeResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetVisibleSizeResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetVisibleSizeResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetDisabledImageTypesParams> {
  static std::unique_ptr<emulation::SetDisabledImageTypesParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetDisabledImageTypesParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetDisabledImageTypesParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetDisabledImageTypesResult> {
  static std::unique_ptr<emulation::SetDisabledImageTypesResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetDisabledImageTypesResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetDisabledImageTypesResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetHardwareConcurrencyOverrideParams> {
  static std::unique_ptr<emulation::SetHardwareConcurrencyOverrideParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetHardwareConcurrencyOverrideParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetHardwareConcurrencyOverrideParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetHardwareConcurrencyOverrideResult> {
  static std::unique_ptr<emulation::SetHardwareConcurrencyOverrideResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetHardwareConcurrencyOverrideResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetHardwareConcurrencyOverrideResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetUserAgentOverrideParams> {
  static std::unique_ptr<emulation::SetUserAgentOverrideParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetUserAgentOverrideParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetUserAgentOverrideParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetUserAgentOverrideResult> {
  static std::unique_ptr<emulation::SetUserAgentOverrideResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetUserAgentOverrideResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetUserAgentOverrideResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetAutomationOverrideParams> {
  static std::unique_ptr<emulation::SetAutomationOverrideParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetAutomationOverrideParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetAutomationOverrideParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::SetAutomationOverrideResult> {
  static std::unique_ptr<emulation::SetAutomationOverrideResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::SetAutomationOverrideResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::SetAutomationOverrideResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<emulation::VirtualTimeBudgetExpiredParams> {
  static std::unique_ptr<emulation::VirtualTimeBudgetExpiredParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return emulation::VirtualTimeBudgetExpiredParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const emulation::VirtualTimeBudgetExpiredParams& value) {
  return value.Serialize();
}


}  // namespace internal
}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_EMULATION_H_
