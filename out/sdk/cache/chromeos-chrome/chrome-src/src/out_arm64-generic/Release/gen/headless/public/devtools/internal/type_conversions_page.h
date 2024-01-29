// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_PAGE_H_
#define HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_PAGE_H_

#include "base/notreached.h"
#include "base/values.h"
#include "headless/public/devtools/domains/types_page.h"
#include "headless/public/internal/value_conversions.h"

namespace headless {
namespace internal {


template <>
struct FromValue<page::AdFrameType> {
  static page::AdFrameType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::AdFrameType::NONE;
    }
    if (value.GetString() == "none")
      return page::AdFrameType::NONE;
    if (value.GetString() == "child")
      return page::AdFrameType::CHILD;
    if (value.GetString() == "root")
      return page::AdFrameType::ROOT;
    errors->AddError("invalid enum value");
    return page::AdFrameType::NONE;
  }
};

template <>
inline base::Value ToValue(const page::AdFrameType& value) {
  switch (value) {
    case page::AdFrameType::NONE:
      return base::Value("none");
    case page::AdFrameType::CHILD:
      return base::Value("child");
    case page::AdFrameType::ROOT:
      return base::Value("root");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<page::AdFrameExplanation> {
  static page::AdFrameExplanation Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::AdFrameExplanation::PARENT_IS_AD;
    }
    if (value.GetString() == "ParentIsAd")
      return page::AdFrameExplanation::PARENT_IS_AD;
    if (value.GetString() == "CreatedByAdScript")
      return page::AdFrameExplanation::CREATED_BY_AD_SCRIPT;
    if (value.GetString() == "MatchedBlockingRule")
      return page::AdFrameExplanation::MATCHED_BLOCKING_RULE;
    errors->AddError("invalid enum value");
    return page::AdFrameExplanation::PARENT_IS_AD;
  }
};

template <>
inline base::Value ToValue(const page::AdFrameExplanation& value) {
  switch (value) {
    case page::AdFrameExplanation::PARENT_IS_AD:
      return base::Value("ParentIsAd");
    case page::AdFrameExplanation::CREATED_BY_AD_SCRIPT:
      return base::Value("CreatedByAdScript");
    case page::AdFrameExplanation::MATCHED_BLOCKING_RULE:
      return base::Value("MatchedBlockingRule");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<page::AdFrameStatus> {
  static std::unique_ptr<page::AdFrameStatus> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::AdFrameStatus::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::AdFrameStatus& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::AdScriptId> {
  static std::unique_ptr<page::AdScriptId> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::AdScriptId::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::AdScriptId& value) {
  return value.Serialize();
}

template <>
struct FromValue<page::SecureContextType> {
  static page::SecureContextType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::SecureContextType::SECURE;
    }
    if (value.GetString() == "Secure")
      return page::SecureContextType::SECURE;
    if (value.GetString() == "SecureLocalhost")
      return page::SecureContextType::SECURE_LOCALHOST;
    if (value.GetString() == "InsecureScheme")
      return page::SecureContextType::INSECURE_SCHEME;
    if (value.GetString() == "InsecureAncestor")
      return page::SecureContextType::INSECURE_ANCESTOR;
    errors->AddError("invalid enum value");
    return page::SecureContextType::SECURE;
  }
};

template <>
inline base::Value ToValue(const page::SecureContextType& value) {
  switch (value) {
    case page::SecureContextType::SECURE:
      return base::Value("Secure");
    case page::SecureContextType::SECURE_LOCALHOST:
      return base::Value("SecureLocalhost");
    case page::SecureContextType::INSECURE_SCHEME:
      return base::Value("InsecureScheme");
    case page::SecureContextType::INSECURE_ANCESTOR:
      return base::Value("InsecureAncestor");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<page::CrossOriginIsolatedContextType> {
  static page::CrossOriginIsolatedContextType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::CrossOriginIsolatedContextType::ISOLATED;
    }
    if (value.GetString() == "Isolated")
      return page::CrossOriginIsolatedContextType::ISOLATED;
    if (value.GetString() == "NotIsolated")
      return page::CrossOriginIsolatedContextType::NOT_ISOLATED;
    if (value.GetString() == "NotIsolatedFeatureDisabled")
      return page::CrossOriginIsolatedContextType::NOT_ISOLATED_FEATURE_DISABLED;
    errors->AddError("invalid enum value");
    return page::CrossOriginIsolatedContextType::ISOLATED;
  }
};

template <>
inline base::Value ToValue(const page::CrossOriginIsolatedContextType& value) {
  switch (value) {
    case page::CrossOriginIsolatedContextType::ISOLATED:
      return base::Value("Isolated");
    case page::CrossOriginIsolatedContextType::NOT_ISOLATED:
      return base::Value("NotIsolated");
    case page::CrossOriginIsolatedContextType::NOT_ISOLATED_FEATURE_DISABLED:
      return base::Value("NotIsolatedFeatureDisabled");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<page::GatedAPIFeatures> {
  static page::GatedAPIFeatures Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::GatedAPIFeatures::SHARED_ARRAY_BUFFERS;
    }
    if (value.GetString() == "SharedArrayBuffers")
      return page::GatedAPIFeatures::SHARED_ARRAY_BUFFERS;
    if (value.GetString() == "SharedArrayBuffersTransferAllowed")
      return page::GatedAPIFeatures::SHARED_ARRAY_BUFFERS_TRANSFER_ALLOWED;
    if (value.GetString() == "PerformanceMeasureMemory")
      return page::GatedAPIFeatures::PERFORMANCE_MEASURE_MEMORY;
    if (value.GetString() == "PerformanceProfile")
      return page::GatedAPIFeatures::PERFORMANCE_PROFILE;
    errors->AddError("invalid enum value");
    return page::GatedAPIFeatures::SHARED_ARRAY_BUFFERS;
  }
};

template <>
inline base::Value ToValue(const page::GatedAPIFeatures& value) {
  switch (value) {
    case page::GatedAPIFeatures::SHARED_ARRAY_BUFFERS:
      return base::Value("SharedArrayBuffers");
    case page::GatedAPIFeatures::SHARED_ARRAY_BUFFERS_TRANSFER_ALLOWED:
      return base::Value("SharedArrayBuffersTransferAllowed");
    case page::GatedAPIFeatures::PERFORMANCE_MEASURE_MEMORY:
      return base::Value("PerformanceMeasureMemory");
    case page::GatedAPIFeatures::PERFORMANCE_PROFILE:
      return base::Value("PerformanceProfile");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<page::PermissionsPolicyFeature> {
  static page::PermissionsPolicyFeature Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::PermissionsPolicyFeature::ACCELEROMETER;
    }
    if (value.GetString() == "accelerometer")
      return page::PermissionsPolicyFeature::ACCELEROMETER;
    if (value.GetString() == "ambient-light-sensor")
      return page::PermissionsPolicyFeature::AMBIENT_LIGHT_SENSOR;
    if (value.GetString() == "attribution-reporting")
      return page::PermissionsPolicyFeature::ATTRIBUTION_REPORTING;
    if (value.GetString() == "autoplay")
      return page::PermissionsPolicyFeature::AUTOPLAY;
    if (value.GetString() == "bluetooth")
      return page::PermissionsPolicyFeature::BLUETOOTH;
    if (value.GetString() == "browsing-topics")
      return page::PermissionsPolicyFeature::BROWSING_TOPICS;
    if (value.GetString() == "camera")
      return page::PermissionsPolicyFeature::CAMERA;
    if (value.GetString() == "captured-surface-control")
      return page::PermissionsPolicyFeature::CAPTURED_SURFACE_CONTROL;
    if (value.GetString() == "ch-dpr")
      return page::PermissionsPolicyFeature::CH_DPR;
    if (value.GetString() == "ch-device-memory")
      return page::PermissionsPolicyFeature::CH_DEVICE_MEMORY;
    if (value.GetString() == "ch-downlink")
      return page::PermissionsPolicyFeature::CH_DOWNLINK;
    if (value.GetString() == "ch-ect")
      return page::PermissionsPolicyFeature::CH_ECT;
    if (value.GetString() == "ch-prefers-color-scheme")
      return page::PermissionsPolicyFeature::CH_PREFERS_COLOR_SCHEME;
    if (value.GetString() == "ch-prefers-reduced-motion")
      return page::PermissionsPolicyFeature::CH_PREFERS_REDUCED_MOTION;
    if (value.GetString() == "ch-prefers-reduced-transparency")
      return page::PermissionsPolicyFeature::CH_PREFERS_REDUCED_TRANSPARENCY;
    if (value.GetString() == "ch-rtt")
      return page::PermissionsPolicyFeature::CH_RTT;
    if (value.GetString() == "ch-save-data")
      return page::PermissionsPolicyFeature::CH_SAVE_DATA;
    if (value.GetString() == "ch-ua")
      return page::PermissionsPolicyFeature::CH_UA;
    if (value.GetString() == "ch-ua-arch")
      return page::PermissionsPolicyFeature::CH_UA_ARCH;
    if (value.GetString() == "ch-ua-bitness")
      return page::PermissionsPolicyFeature::CH_UA_BITNESS;
    if (value.GetString() == "ch-ua-platform")
      return page::PermissionsPolicyFeature::CH_UA_PLATFORM;
    if (value.GetString() == "ch-ua-model")
      return page::PermissionsPolicyFeature::CH_UA_MODEL;
    if (value.GetString() == "ch-ua-mobile")
      return page::PermissionsPolicyFeature::CH_UA_MOBILE;
    if (value.GetString() == "ch-ua-form-factor")
      return page::PermissionsPolicyFeature::CH_UA_FORM_FACTOR;
    if (value.GetString() == "ch-ua-full-version")
      return page::PermissionsPolicyFeature::CH_UA_FULL_VERSION;
    if (value.GetString() == "ch-ua-full-version-list")
      return page::PermissionsPolicyFeature::CH_UA_FULL_VERSION_LIST;
    if (value.GetString() == "ch-ua-platform-version")
      return page::PermissionsPolicyFeature::CH_UA_PLATFORM_VERSION;
    if (value.GetString() == "ch-ua-wow64")
      return page::PermissionsPolicyFeature::CH_UA_WOW64;
    if (value.GetString() == "ch-viewport-height")
      return page::PermissionsPolicyFeature::CH_VIEWPORT_HEIGHT;
    if (value.GetString() == "ch-viewport-width")
      return page::PermissionsPolicyFeature::CH_VIEWPORT_WIDTH;
    if (value.GetString() == "ch-width")
      return page::PermissionsPolicyFeature::CH_WIDTH;
    if (value.GetString() == "clipboard-read")
      return page::PermissionsPolicyFeature::CLIPBOARD_READ;
    if (value.GetString() == "clipboard-write")
      return page::PermissionsPolicyFeature::CLIPBOARD_WRITE;
    if (value.GetString() == "compute-pressure")
      return page::PermissionsPolicyFeature::COMPUTE_PRESSURE;
    if (value.GetString() == "cross-origin-isolated")
      return page::PermissionsPolicyFeature::CROSS_ORIGIN_ISOLATED;
    if (value.GetString() == "direct-sockets")
      return page::PermissionsPolicyFeature::DIRECT_SOCKETS;
    if (value.GetString() == "display-capture")
      return page::PermissionsPolicyFeature::DISPLAY_CAPTURE;
    if (value.GetString() == "document-domain")
      return page::PermissionsPolicyFeature::DOCUMENT_DOMAIN;
    if (value.GetString() == "encrypted-media")
      return page::PermissionsPolicyFeature::ENCRYPTED_MEDIA;
    if (value.GetString() == "execution-while-out-of-viewport")
      return page::PermissionsPolicyFeature::EXECUTION_WHILE_OUT_OF_VIEWPORT;
    if (value.GetString() == "execution-while-not-rendered")
      return page::PermissionsPolicyFeature::EXECUTION_WHILE_NOT_RENDERED;
    if (value.GetString() == "focus-without-user-activation")
      return page::PermissionsPolicyFeature::FOCUS_WITHOUT_USER_ACTIVATION;
    if (value.GetString() == "fullscreen")
      return page::PermissionsPolicyFeature::FULLSCREEN;
    if (value.GetString() == "frobulate")
      return page::PermissionsPolicyFeature::FROBULATE;
    if (value.GetString() == "gamepad")
      return page::PermissionsPolicyFeature::GAMEPAD;
    if (value.GetString() == "geolocation")
      return page::PermissionsPolicyFeature::GEOLOCATION;
    if (value.GetString() == "gyroscope")
      return page::PermissionsPolicyFeature::GYROSCOPE;
    if (value.GetString() == "hid")
      return page::PermissionsPolicyFeature::HID;
    if (value.GetString() == "identity-credentials-get")
      return page::PermissionsPolicyFeature::IDENTITY_CREDENTIALS_GET;
    if (value.GetString() == "idle-detection")
      return page::PermissionsPolicyFeature::IDLE_DETECTION;
    if (value.GetString() == "interest-cohort")
      return page::PermissionsPolicyFeature::INTEREST_COHORT;
    if (value.GetString() == "join-ad-interest-group")
      return page::PermissionsPolicyFeature::JOIN_AD_INTEREST_GROUP;
    if (value.GetString() == "keyboard-map")
      return page::PermissionsPolicyFeature::KEYBOARD_MAP;
    if (value.GetString() == "local-fonts")
      return page::PermissionsPolicyFeature::LOCAL_FONTS;
    if (value.GetString() == "magnetometer")
      return page::PermissionsPolicyFeature::MAGNETOMETER;
    if (value.GetString() == "microphone")
      return page::PermissionsPolicyFeature::MICROPHONE;
    if (value.GetString() == "midi")
      return page::PermissionsPolicyFeature::MIDI;
    if (value.GetString() == "otp-credentials")
      return page::PermissionsPolicyFeature::OTP_CREDENTIALS;
    if (value.GetString() == "payment")
      return page::PermissionsPolicyFeature::PAYMENT;
    if (value.GetString() == "picture-in-picture")
      return page::PermissionsPolicyFeature::PICTURE_IN_PICTURE;
    if (value.GetString() == "private-aggregation")
      return page::PermissionsPolicyFeature::PRIVATE_AGGREGATION;
    if (value.GetString() == "private-state-token-issuance")
      return page::PermissionsPolicyFeature::PRIVATE_STATE_TOKEN_ISSUANCE;
    if (value.GetString() == "private-state-token-redemption")
      return page::PermissionsPolicyFeature::PRIVATE_STATE_TOKEN_REDEMPTION;
    if (value.GetString() == "publickey-credentials-create")
      return page::PermissionsPolicyFeature::PUBLICKEY_CREDENTIALS_CREATE;
    if (value.GetString() == "publickey-credentials-get")
      return page::PermissionsPolicyFeature::PUBLICKEY_CREDENTIALS_GET;
    if (value.GetString() == "run-ad-auction")
      return page::PermissionsPolicyFeature::RUN_AD_AUCTION;
    if (value.GetString() == "screen-wake-lock")
      return page::PermissionsPolicyFeature::SCREEN_WAKE_LOCK;
    if (value.GetString() == "serial")
      return page::PermissionsPolicyFeature::SERIAL;
    if (value.GetString() == "shared-autofill")
      return page::PermissionsPolicyFeature::SHARED_AUTOFILL;
    if (value.GetString() == "shared-storage")
      return page::PermissionsPolicyFeature::SHARED_STORAGE;
    if (value.GetString() == "shared-storage-select-url")
      return page::PermissionsPolicyFeature::SHARED_STORAGE_SELECT_URL;
    if (value.GetString() == "smart-card")
      return page::PermissionsPolicyFeature::SMART_CARD;
    if (value.GetString() == "storage-access")
      return page::PermissionsPolicyFeature::STORAGE_ACCESS;
    if (value.GetString() == "sub-apps")
      return page::PermissionsPolicyFeature::SUB_APPS;
    if (value.GetString() == "sync-xhr")
      return page::PermissionsPolicyFeature::SYNC_XHR;
    if (value.GetString() == "unload")
      return page::PermissionsPolicyFeature::UNLOAD;
    if (value.GetString() == "usb")
      return page::PermissionsPolicyFeature::USB;
    if (value.GetString() == "usb-unrestricted")
      return page::PermissionsPolicyFeature::USB_UNRESTRICTED;
    if (value.GetString() == "vertical-scroll")
      return page::PermissionsPolicyFeature::VERTICAL_SCROLL;
    if (value.GetString() == "web-printing")
      return page::PermissionsPolicyFeature::WEB_PRINTING;
    if (value.GetString() == "web-share")
      return page::PermissionsPolicyFeature::WEB_SHARE;
    if (value.GetString() == "window-management")
      return page::PermissionsPolicyFeature::WINDOW_MANAGEMENT;
    if (value.GetString() == "window-placement")
      return page::PermissionsPolicyFeature::WINDOW_PLACEMENT;
    if (value.GetString() == "xr-spatial-tracking")
      return page::PermissionsPolicyFeature::XR_SPATIAL_TRACKING;
    errors->AddError("invalid enum value");
    return page::PermissionsPolicyFeature::ACCELEROMETER;
  }
};

template <>
inline base::Value ToValue(const page::PermissionsPolicyFeature& value) {
  switch (value) {
    case page::PermissionsPolicyFeature::ACCELEROMETER:
      return base::Value("accelerometer");
    case page::PermissionsPolicyFeature::AMBIENT_LIGHT_SENSOR:
      return base::Value("ambient-light-sensor");
    case page::PermissionsPolicyFeature::ATTRIBUTION_REPORTING:
      return base::Value("attribution-reporting");
    case page::PermissionsPolicyFeature::AUTOPLAY:
      return base::Value("autoplay");
    case page::PermissionsPolicyFeature::BLUETOOTH:
      return base::Value("bluetooth");
    case page::PermissionsPolicyFeature::BROWSING_TOPICS:
      return base::Value("browsing-topics");
    case page::PermissionsPolicyFeature::CAMERA:
      return base::Value("camera");
    case page::PermissionsPolicyFeature::CAPTURED_SURFACE_CONTROL:
      return base::Value("captured-surface-control");
    case page::PermissionsPolicyFeature::CH_DPR:
      return base::Value("ch-dpr");
    case page::PermissionsPolicyFeature::CH_DEVICE_MEMORY:
      return base::Value("ch-device-memory");
    case page::PermissionsPolicyFeature::CH_DOWNLINK:
      return base::Value("ch-downlink");
    case page::PermissionsPolicyFeature::CH_ECT:
      return base::Value("ch-ect");
    case page::PermissionsPolicyFeature::CH_PREFERS_COLOR_SCHEME:
      return base::Value("ch-prefers-color-scheme");
    case page::PermissionsPolicyFeature::CH_PREFERS_REDUCED_MOTION:
      return base::Value("ch-prefers-reduced-motion");
    case page::PermissionsPolicyFeature::CH_PREFERS_REDUCED_TRANSPARENCY:
      return base::Value("ch-prefers-reduced-transparency");
    case page::PermissionsPolicyFeature::CH_RTT:
      return base::Value("ch-rtt");
    case page::PermissionsPolicyFeature::CH_SAVE_DATA:
      return base::Value("ch-save-data");
    case page::PermissionsPolicyFeature::CH_UA:
      return base::Value("ch-ua");
    case page::PermissionsPolicyFeature::CH_UA_ARCH:
      return base::Value("ch-ua-arch");
    case page::PermissionsPolicyFeature::CH_UA_BITNESS:
      return base::Value("ch-ua-bitness");
    case page::PermissionsPolicyFeature::CH_UA_PLATFORM:
      return base::Value("ch-ua-platform");
    case page::PermissionsPolicyFeature::CH_UA_MODEL:
      return base::Value("ch-ua-model");
    case page::PermissionsPolicyFeature::CH_UA_MOBILE:
      return base::Value("ch-ua-mobile");
    case page::PermissionsPolicyFeature::CH_UA_FORM_FACTOR:
      return base::Value("ch-ua-form-factor");
    case page::PermissionsPolicyFeature::CH_UA_FULL_VERSION:
      return base::Value("ch-ua-full-version");
    case page::PermissionsPolicyFeature::CH_UA_FULL_VERSION_LIST:
      return base::Value("ch-ua-full-version-list");
    case page::PermissionsPolicyFeature::CH_UA_PLATFORM_VERSION:
      return base::Value("ch-ua-platform-version");
    case page::PermissionsPolicyFeature::CH_UA_WOW64:
      return base::Value("ch-ua-wow64");
    case page::PermissionsPolicyFeature::CH_VIEWPORT_HEIGHT:
      return base::Value("ch-viewport-height");
    case page::PermissionsPolicyFeature::CH_VIEWPORT_WIDTH:
      return base::Value("ch-viewport-width");
    case page::PermissionsPolicyFeature::CH_WIDTH:
      return base::Value("ch-width");
    case page::PermissionsPolicyFeature::CLIPBOARD_READ:
      return base::Value("clipboard-read");
    case page::PermissionsPolicyFeature::CLIPBOARD_WRITE:
      return base::Value("clipboard-write");
    case page::PermissionsPolicyFeature::COMPUTE_PRESSURE:
      return base::Value("compute-pressure");
    case page::PermissionsPolicyFeature::CROSS_ORIGIN_ISOLATED:
      return base::Value("cross-origin-isolated");
    case page::PermissionsPolicyFeature::DIRECT_SOCKETS:
      return base::Value("direct-sockets");
    case page::PermissionsPolicyFeature::DISPLAY_CAPTURE:
      return base::Value("display-capture");
    case page::PermissionsPolicyFeature::DOCUMENT_DOMAIN:
      return base::Value("document-domain");
    case page::PermissionsPolicyFeature::ENCRYPTED_MEDIA:
      return base::Value("encrypted-media");
    case page::PermissionsPolicyFeature::EXECUTION_WHILE_OUT_OF_VIEWPORT:
      return base::Value("execution-while-out-of-viewport");
    case page::PermissionsPolicyFeature::EXECUTION_WHILE_NOT_RENDERED:
      return base::Value("execution-while-not-rendered");
    case page::PermissionsPolicyFeature::FOCUS_WITHOUT_USER_ACTIVATION:
      return base::Value("focus-without-user-activation");
    case page::PermissionsPolicyFeature::FULLSCREEN:
      return base::Value("fullscreen");
    case page::PermissionsPolicyFeature::FROBULATE:
      return base::Value("frobulate");
    case page::PermissionsPolicyFeature::GAMEPAD:
      return base::Value("gamepad");
    case page::PermissionsPolicyFeature::GEOLOCATION:
      return base::Value("geolocation");
    case page::PermissionsPolicyFeature::GYROSCOPE:
      return base::Value("gyroscope");
    case page::PermissionsPolicyFeature::HID:
      return base::Value("hid");
    case page::PermissionsPolicyFeature::IDENTITY_CREDENTIALS_GET:
      return base::Value("identity-credentials-get");
    case page::PermissionsPolicyFeature::IDLE_DETECTION:
      return base::Value("idle-detection");
    case page::PermissionsPolicyFeature::INTEREST_COHORT:
      return base::Value("interest-cohort");
    case page::PermissionsPolicyFeature::JOIN_AD_INTEREST_GROUP:
      return base::Value("join-ad-interest-group");
    case page::PermissionsPolicyFeature::KEYBOARD_MAP:
      return base::Value("keyboard-map");
    case page::PermissionsPolicyFeature::LOCAL_FONTS:
      return base::Value("local-fonts");
    case page::PermissionsPolicyFeature::MAGNETOMETER:
      return base::Value("magnetometer");
    case page::PermissionsPolicyFeature::MICROPHONE:
      return base::Value("microphone");
    case page::PermissionsPolicyFeature::MIDI:
      return base::Value("midi");
    case page::PermissionsPolicyFeature::OTP_CREDENTIALS:
      return base::Value("otp-credentials");
    case page::PermissionsPolicyFeature::PAYMENT:
      return base::Value("payment");
    case page::PermissionsPolicyFeature::PICTURE_IN_PICTURE:
      return base::Value("picture-in-picture");
    case page::PermissionsPolicyFeature::PRIVATE_AGGREGATION:
      return base::Value("private-aggregation");
    case page::PermissionsPolicyFeature::PRIVATE_STATE_TOKEN_ISSUANCE:
      return base::Value("private-state-token-issuance");
    case page::PermissionsPolicyFeature::PRIVATE_STATE_TOKEN_REDEMPTION:
      return base::Value("private-state-token-redemption");
    case page::PermissionsPolicyFeature::PUBLICKEY_CREDENTIALS_CREATE:
      return base::Value("publickey-credentials-create");
    case page::PermissionsPolicyFeature::PUBLICKEY_CREDENTIALS_GET:
      return base::Value("publickey-credentials-get");
    case page::PermissionsPolicyFeature::RUN_AD_AUCTION:
      return base::Value("run-ad-auction");
    case page::PermissionsPolicyFeature::SCREEN_WAKE_LOCK:
      return base::Value("screen-wake-lock");
    case page::PermissionsPolicyFeature::SERIAL:
      return base::Value("serial");
    case page::PermissionsPolicyFeature::SHARED_AUTOFILL:
      return base::Value("shared-autofill");
    case page::PermissionsPolicyFeature::SHARED_STORAGE:
      return base::Value("shared-storage");
    case page::PermissionsPolicyFeature::SHARED_STORAGE_SELECT_URL:
      return base::Value("shared-storage-select-url");
    case page::PermissionsPolicyFeature::SMART_CARD:
      return base::Value("smart-card");
    case page::PermissionsPolicyFeature::STORAGE_ACCESS:
      return base::Value("storage-access");
    case page::PermissionsPolicyFeature::SUB_APPS:
      return base::Value("sub-apps");
    case page::PermissionsPolicyFeature::SYNC_XHR:
      return base::Value("sync-xhr");
    case page::PermissionsPolicyFeature::UNLOAD:
      return base::Value("unload");
    case page::PermissionsPolicyFeature::USB:
      return base::Value("usb");
    case page::PermissionsPolicyFeature::USB_UNRESTRICTED:
      return base::Value("usb-unrestricted");
    case page::PermissionsPolicyFeature::VERTICAL_SCROLL:
      return base::Value("vertical-scroll");
    case page::PermissionsPolicyFeature::WEB_PRINTING:
      return base::Value("web-printing");
    case page::PermissionsPolicyFeature::WEB_SHARE:
      return base::Value("web-share");
    case page::PermissionsPolicyFeature::WINDOW_MANAGEMENT:
      return base::Value("window-management");
    case page::PermissionsPolicyFeature::WINDOW_PLACEMENT:
      return base::Value("window-placement");
    case page::PermissionsPolicyFeature::XR_SPATIAL_TRACKING:
      return base::Value("xr-spatial-tracking");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<page::PermissionsPolicyBlockReason> {
  static page::PermissionsPolicyBlockReason Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::PermissionsPolicyBlockReason::HEADER;
    }
    if (value.GetString() == "Header")
      return page::PermissionsPolicyBlockReason::HEADER;
    if (value.GetString() == "IframeAttribute")
      return page::PermissionsPolicyBlockReason::IFRAME_ATTRIBUTE;
    if (value.GetString() == "InFencedFrameTree")
      return page::PermissionsPolicyBlockReason::IN_FENCED_FRAME_TREE;
    if (value.GetString() == "InIsolatedApp")
      return page::PermissionsPolicyBlockReason::IN_ISOLATED_APP;
    errors->AddError("invalid enum value");
    return page::PermissionsPolicyBlockReason::HEADER;
  }
};

template <>
inline base::Value ToValue(const page::PermissionsPolicyBlockReason& value) {
  switch (value) {
    case page::PermissionsPolicyBlockReason::HEADER:
      return base::Value("Header");
    case page::PermissionsPolicyBlockReason::IFRAME_ATTRIBUTE:
      return base::Value("IframeAttribute");
    case page::PermissionsPolicyBlockReason::IN_FENCED_FRAME_TREE:
      return base::Value("InFencedFrameTree");
    case page::PermissionsPolicyBlockReason::IN_ISOLATED_APP:
      return base::Value("InIsolatedApp");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<page::PermissionsPolicyBlockLocator> {
  static std::unique_ptr<page::PermissionsPolicyBlockLocator> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::PermissionsPolicyBlockLocator::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::PermissionsPolicyBlockLocator& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::PermissionsPolicyFeatureState> {
  static std::unique_ptr<page::PermissionsPolicyFeatureState> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::PermissionsPolicyFeatureState::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::PermissionsPolicyFeatureState& value) {
  return value.Serialize();
}

template <>
struct FromValue<page::OriginTrialTokenStatus> {
  static page::OriginTrialTokenStatus Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::OriginTrialTokenStatus::SUCCESS;
    }
    if (value.GetString() == "Success")
      return page::OriginTrialTokenStatus::SUCCESS;
    if (value.GetString() == "NotSupported")
      return page::OriginTrialTokenStatus::NOT_SUPPORTED;
    if (value.GetString() == "Insecure")
      return page::OriginTrialTokenStatus::INSECURE;
    if (value.GetString() == "Expired")
      return page::OriginTrialTokenStatus::EXPIRED;
    if (value.GetString() == "WrongOrigin")
      return page::OriginTrialTokenStatus::WRONG_ORIGIN;
    if (value.GetString() == "InvalidSignature")
      return page::OriginTrialTokenStatus::INVALID_SIGNATURE;
    if (value.GetString() == "Malformed")
      return page::OriginTrialTokenStatus::MALFORMED;
    if (value.GetString() == "WrongVersion")
      return page::OriginTrialTokenStatus::WRONG_VERSION;
    if (value.GetString() == "FeatureDisabled")
      return page::OriginTrialTokenStatus::FEATURE_DISABLED;
    if (value.GetString() == "TokenDisabled")
      return page::OriginTrialTokenStatus::TOKEN_DISABLED;
    if (value.GetString() == "FeatureDisabledForUser")
      return page::OriginTrialTokenStatus::FEATURE_DISABLED_FOR_USER;
    if (value.GetString() == "UnknownTrial")
      return page::OriginTrialTokenStatus::UNKNOWN_TRIAL;
    errors->AddError("invalid enum value");
    return page::OriginTrialTokenStatus::SUCCESS;
  }
};

template <>
inline base::Value ToValue(const page::OriginTrialTokenStatus& value) {
  switch (value) {
    case page::OriginTrialTokenStatus::SUCCESS:
      return base::Value("Success");
    case page::OriginTrialTokenStatus::NOT_SUPPORTED:
      return base::Value("NotSupported");
    case page::OriginTrialTokenStatus::INSECURE:
      return base::Value("Insecure");
    case page::OriginTrialTokenStatus::EXPIRED:
      return base::Value("Expired");
    case page::OriginTrialTokenStatus::WRONG_ORIGIN:
      return base::Value("WrongOrigin");
    case page::OriginTrialTokenStatus::INVALID_SIGNATURE:
      return base::Value("InvalidSignature");
    case page::OriginTrialTokenStatus::MALFORMED:
      return base::Value("Malformed");
    case page::OriginTrialTokenStatus::WRONG_VERSION:
      return base::Value("WrongVersion");
    case page::OriginTrialTokenStatus::FEATURE_DISABLED:
      return base::Value("FeatureDisabled");
    case page::OriginTrialTokenStatus::TOKEN_DISABLED:
      return base::Value("TokenDisabled");
    case page::OriginTrialTokenStatus::FEATURE_DISABLED_FOR_USER:
      return base::Value("FeatureDisabledForUser");
    case page::OriginTrialTokenStatus::UNKNOWN_TRIAL:
      return base::Value("UnknownTrial");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<page::OriginTrialStatus> {
  static page::OriginTrialStatus Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::OriginTrialStatus::ENABLED;
    }
    if (value.GetString() == "Enabled")
      return page::OriginTrialStatus::ENABLED;
    if (value.GetString() == "ValidTokenNotProvided")
      return page::OriginTrialStatus::VALID_TOKEN_NOT_PROVIDED;
    if (value.GetString() == "OSNotSupported")
      return page::OriginTrialStatus::OS_NOT_SUPPORTED;
    if (value.GetString() == "TrialNotAllowed")
      return page::OriginTrialStatus::TRIAL_NOT_ALLOWED;
    errors->AddError("invalid enum value");
    return page::OriginTrialStatus::ENABLED;
  }
};

template <>
inline base::Value ToValue(const page::OriginTrialStatus& value) {
  switch (value) {
    case page::OriginTrialStatus::ENABLED:
      return base::Value("Enabled");
    case page::OriginTrialStatus::VALID_TOKEN_NOT_PROVIDED:
      return base::Value("ValidTokenNotProvided");
    case page::OriginTrialStatus::OS_NOT_SUPPORTED:
      return base::Value("OSNotSupported");
    case page::OriginTrialStatus::TRIAL_NOT_ALLOWED:
      return base::Value("TrialNotAllowed");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<page::OriginTrialUsageRestriction> {
  static page::OriginTrialUsageRestriction Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::OriginTrialUsageRestriction::NONE;
    }
    if (value.GetString() == "None")
      return page::OriginTrialUsageRestriction::NONE;
    if (value.GetString() == "Subset")
      return page::OriginTrialUsageRestriction::SUBSET;
    errors->AddError("invalid enum value");
    return page::OriginTrialUsageRestriction::NONE;
  }
};

template <>
inline base::Value ToValue(const page::OriginTrialUsageRestriction& value) {
  switch (value) {
    case page::OriginTrialUsageRestriction::NONE:
      return base::Value("None");
    case page::OriginTrialUsageRestriction::SUBSET:
      return base::Value("Subset");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<page::OriginTrialToken> {
  static std::unique_ptr<page::OriginTrialToken> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::OriginTrialToken::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::OriginTrialToken& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::OriginTrialTokenWithStatus> {
  static std::unique_ptr<page::OriginTrialTokenWithStatus> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::OriginTrialTokenWithStatus::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::OriginTrialTokenWithStatus& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::OriginTrial> {
  static std::unique_ptr<page::OriginTrial> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::OriginTrial::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::OriginTrial& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::Frame> {
  static std::unique_ptr<page::Frame> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::Frame::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::Frame& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::FrameResource> {
  static std::unique_ptr<page::FrameResource> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::FrameResource::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::FrameResource& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::FrameResourceTree> {
  static std::unique_ptr<page::FrameResourceTree> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::FrameResourceTree::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::FrameResourceTree& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::FrameTree> {
  static std::unique_ptr<page::FrameTree> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::FrameTree::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::FrameTree& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::TransitionType> {
  static page::TransitionType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::TransitionType::LINK;
    }
    if (value.GetString() == "link")
      return page::TransitionType::LINK;
    if (value.GetString() == "typed")
      return page::TransitionType::TYPED;
    if (value.GetString() == "address_bar")
      return page::TransitionType::ADDRESS_BAR;
    if (value.GetString() == "auto_bookmark")
      return page::TransitionType::AUTO_BOOKMARK;
    if (value.GetString() == "auto_subframe")
      return page::TransitionType::AUTO_SUBFRAME;
    if (value.GetString() == "manual_subframe")
      return page::TransitionType::MANUAL_SUBFRAME;
    if (value.GetString() == "generated")
      return page::TransitionType::GENERATED;
    if (value.GetString() == "auto_toplevel")
      return page::TransitionType::AUTO_TOPLEVEL;
    if (value.GetString() == "form_submit")
      return page::TransitionType::FORM_SUBMIT;
    if (value.GetString() == "reload")
      return page::TransitionType::RELOAD;
    if (value.GetString() == "keyword")
      return page::TransitionType::KEYWORD;
    if (value.GetString() == "keyword_generated")
      return page::TransitionType::KEYWORD_GENERATED;
    if (value.GetString() == "other")
      return page::TransitionType::OTHER;
    errors->AddError("invalid enum value");
    return page::TransitionType::LINK;
  }
};

template <>
inline base::Value ToValue(const page::TransitionType& value) {
  switch (value) {
    case page::TransitionType::LINK:
      return base::Value("link");
    case page::TransitionType::TYPED:
      return base::Value("typed");
    case page::TransitionType::ADDRESS_BAR:
      return base::Value("address_bar");
    case page::TransitionType::AUTO_BOOKMARK:
      return base::Value("auto_bookmark");
    case page::TransitionType::AUTO_SUBFRAME:
      return base::Value("auto_subframe");
    case page::TransitionType::MANUAL_SUBFRAME:
      return base::Value("manual_subframe");
    case page::TransitionType::GENERATED:
      return base::Value("generated");
    case page::TransitionType::AUTO_TOPLEVEL:
      return base::Value("auto_toplevel");
    case page::TransitionType::FORM_SUBMIT:
      return base::Value("form_submit");
    case page::TransitionType::RELOAD:
      return base::Value("reload");
    case page::TransitionType::KEYWORD:
      return base::Value("keyword");
    case page::TransitionType::KEYWORD_GENERATED:
      return base::Value("keyword_generated");
    case page::TransitionType::OTHER:
      return base::Value("other");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<page::NavigationEntry> {
  static std::unique_ptr<page::NavigationEntry> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::NavigationEntry::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::NavigationEntry& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::ScreencastFrameMetadata> {
  static std::unique_ptr<page::ScreencastFrameMetadata> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::ScreencastFrameMetadata::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::ScreencastFrameMetadata& value) {
  return value.Serialize();
}

template <>
struct FromValue<page::DialogType> {
  static page::DialogType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::DialogType::ALERT;
    }
    if (value.GetString() == "alert")
      return page::DialogType::ALERT;
    if (value.GetString() == "confirm")
      return page::DialogType::CONFIRM;
    if (value.GetString() == "prompt")
      return page::DialogType::PROMPT;
    if (value.GetString() == "beforeunload")
      return page::DialogType::BEFOREUNLOAD;
    errors->AddError("invalid enum value");
    return page::DialogType::ALERT;
  }
};

template <>
inline base::Value ToValue(const page::DialogType& value) {
  switch (value) {
    case page::DialogType::ALERT:
      return base::Value("alert");
    case page::DialogType::CONFIRM:
      return base::Value("confirm");
    case page::DialogType::PROMPT:
      return base::Value("prompt");
    case page::DialogType::BEFOREUNLOAD:
      return base::Value("beforeunload");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<page::AppManifestError> {
  static std::unique_ptr<page::AppManifestError> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::AppManifestError::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::AppManifestError& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::AppManifestParsedProperties> {
  static std::unique_ptr<page::AppManifestParsedProperties> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::AppManifestParsedProperties::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::AppManifestParsedProperties& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::LayoutViewport> {
  static std::unique_ptr<page::LayoutViewport> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::LayoutViewport::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::LayoutViewport& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::VisualViewport> {
  static std::unique_ptr<page::VisualViewport> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::VisualViewport::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::VisualViewport& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::Viewport> {
  static std::unique_ptr<page::Viewport> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::Viewport::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::Viewport& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::FontFamilies> {
  static std::unique_ptr<page::FontFamilies> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::FontFamilies::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::FontFamilies& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::ScriptFontFamilies> {
  static std::unique_ptr<page::ScriptFontFamilies> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::ScriptFontFamilies::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::ScriptFontFamilies& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::FontSizes> {
  static std::unique_ptr<page::FontSizes> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::FontSizes::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::FontSizes& value) {
  return value.Serialize();
}

template <>
struct FromValue<page::ClientNavigationReason> {
  static page::ClientNavigationReason Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::ClientNavigationReason::FORM_SUBMISSION_GET;
    }
    if (value.GetString() == "formSubmissionGet")
      return page::ClientNavigationReason::FORM_SUBMISSION_GET;
    if (value.GetString() == "formSubmissionPost")
      return page::ClientNavigationReason::FORM_SUBMISSION_POST;
    if (value.GetString() == "httpHeaderRefresh")
      return page::ClientNavigationReason::HTTP_HEADER_REFRESH;
    if (value.GetString() == "scriptInitiated")
      return page::ClientNavigationReason::SCRIPT_INITIATED;
    if (value.GetString() == "metaTagRefresh")
      return page::ClientNavigationReason::META_TAG_REFRESH;
    if (value.GetString() == "pageBlockInterstitial")
      return page::ClientNavigationReason::PAGE_BLOCK_INTERSTITIAL;
    if (value.GetString() == "reload")
      return page::ClientNavigationReason::RELOAD;
    if (value.GetString() == "anchorClick")
      return page::ClientNavigationReason::ANCHOR_CLICK;
    errors->AddError("invalid enum value");
    return page::ClientNavigationReason::FORM_SUBMISSION_GET;
  }
};

template <>
inline base::Value ToValue(const page::ClientNavigationReason& value) {
  switch (value) {
    case page::ClientNavigationReason::FORM_SUBMISSION_GET:
      return base::Value("formSubmissionGet");
    case page::ClientNavigationReason::FORM_SUBMISSION_POST:
      return base::Value("formSubmissionPost");
    case page::ClientNavigationReason::HTTP_HEADER_REFRESH:
      return base::Value("httpHeaderRefresh");
    case page::ClientNavigationReason::SCRIPT_INITIATED:
      return base::Value("scriptInitiated");
    case page::ClientNavigationReason::META_TAG_REFRESH:
      return base::Value("metaTagRefresh");
    case page::ClientNavigationReason::PAGE_BLOCK_INTERSTITIAL:
      return base::Value("pageBlockInterstitial");
    case page::ClientNavigationReason::RELOAD:
      return base::Value("reload");
    case page::ClientNavigationReason::ANCHOR_CLICK:
      return base::Value("anchorClick");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<page::ClientNavigationDisposition> {
  static page::ClientNavigationDisposition Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::ClientNavigationDisposition::CURRENT_TAB;
    }
    if (value.GetString() == "currentTab")
      return page::ClientNavigationDisposition::CURRENT_TAB;
    if (value.GetString() == "newTab")
      return page::ClientNavigationDisposition::NEW_TAB;
    if (value.GetString() == "newWindow")
      return page::ClientNavigationDisposition::NEW_WINDOW;
    if (value.GetString() == "download")
      return page::ClientNavigationDisposition::DOWNLOAD;
    errors->AddError("invalid enum value");
    return page::ClientNavigationDisposition::CURRENT_TAB;
  }
};

template <>
inline base::Value ToValue(const page::ClientNavigationDisposition& value) {
  switch (value) {
    case page::ClientNavigationDisposition::CURRENT_TAB:
      return base::Value("currentTab");
    case page::ClientNavigationDisposition::NEW_TAB:
      return base::Value("newTab");
    case page::ClientNavigationDisposition::NEW_WINDOW:
      return base::Value("newWindow");
    case page::ClientNavigationDisposition::DOWNLOAD:
      return base::Value("download");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<page::InstallabilityErrorArgument> {
  static std::unique_ptr<page::InstallabilityErrorArgument> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::InstallabilityErrorArgument::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::InstallabilityErrorArgument& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::InstallabilityError> {
  static std::unique_ptr<page::InstallabilityError> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::InstallabilityError::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::InstallabilityError& value) {
  return value.Serialize();
}

template <>
struct FromValue<page::ReferrerPolicy> {
  static page::ReferrerPolicy Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::ReferrerPolicy::NO_REFERRER;
    }
    if (value.GetString() == "noReferrer")
      return page::ReferrerPolicy::NO_REFERRER;
    if (value.GetString() == "noReferrerWhenDowngrade")
      return page::ReferrerPolicy::NO_REFERRER_WHEN_DOWNGRADE;
    if (value.GetString() == "origin")
      return page::ReferrerPolicy::ORIGIN;
    if (value.GetString() == "originWhenCrossOrigin")
      return page::ReferrerPolicy::ORIGIN_WHEN_CROSS_ORIGIN;
    if (value.GetString() == "sameOrigin")
      return page::ReferrerPolicy::SAME_ORIGIN;
    if (value.GetString() == "strictOrigin")
      return page::ReferrerPolicy::STRICT_ORIGIN;
    if (value.GetString() == "strictOriginWhenCrossOrigin")
      return page::ReferrerPolicy::STRICT_ORIGIN_WHEN_CROSS_ORIGIN;
    if (value.GetString() == "unsafeUrl")
      return page::ReferrerPolicy::UNSAFE_URL;
    errors->AddError("invalid enum value");
    return page::ReferrerPolicy::NO_REFERRER;
  }
};

template <>
inline base::Value ToValue(const page::ReferrerPolicy& value) {
  switch (value) {
    case page::ReferrerPolicy::NO_REFERRER:
      return base::Value("noReferrer");
    case page::ReferrerPolicy::NO_REFERRER_WHEN_DOWNGRADE:
      return base::Value("noReferrerWhenDowngrade");
    case page::ReferrerPolicy::ORIGIN:
      return base::Value("origin");
    case page::ReferrerPolicy::ORIGIN_WHEN_CROSS_ORIGIN:
      return base::Value("originWhenCrossOrigin");
    case page::ReferrerPolicy::SAME_ORIGIN:
      return base::Value("sameOrigin");
    case page::ReferrerPolicy::STRICT_ORIGIN:
      return base::Value("strictOrigin");
    case page::ReferrerPolicy::STRICT_ORIGIN_WHEN_CROSS_ORIGIN:
      return base::Value("strictOriginWhenCrossOrigin");
    case page::ReferrerPolicy::UNSAFE_URL:
      return base::Value("unsafeUrl");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<page::CompilationCacheParams> {
  static std::unique_ptr<page::CompilationCacheParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::CompilationCacheParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::CompilationCacheParams& value) {
  return value.Serialize();
}

template <>
struct FromValue<page::AutoResponseMode> {
  static page::AutoResponseMode Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::AutoResponseMode::NONE;
    }
    if (value.GetString() == "none")
      return page::AutoResponseMode::NONE;
    if (value.GetString() == "autoAccept")
      return page::AutoResponseMode::AUTO_ACCEPT;
    if (value.GetString() == "autoReject")
      return page::AutoResponseMode::AUTO_REJECT;
    if (value.GetString() == "autoOptOut")
      return page::AutoResponseMode::AUTO_OPT_OUT;
    errors->AddError("invalid enum value");
    return page::AutoResponseMode::NONE;
  }
};

template <>
inline base::Value ToValue(const page::AutoResponseMode& value) {
  switch (value) {
    case page::AutoResponseMode::NONE:
      return base::Value("none");
    case page::AutoResponseMode::AUTO_ACCEPT:
      return base::Value("autoAccept");
    case page::AutoResponseMode::AUTO_REJECT:
      return base::Value("autoReject");
    case page::AutoResponseMode::AUTO_OPT_OUT:
      return base::Value("autoOptOut");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<page::NavigationType> {
  static page::NavigationType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::NavigationType::NAVIGATION;
    }
    if (value.GetString() == "Navigation")
      return page::NavigationType::NAVIGATION;
    if (value.GetString() == "BackForwardCacheRestore")
      return page::NavigationType::BACK_FORWARD_CACHE_RESTORE;
    errors->AddError("invalid enum value");
    return page::NavigationType::NAVIGATION;
  }
};

template <>
inline base::Value ToValue(const page::NavigationType& value) {
  switch (value) {
    case page::NavigationType::NAVIGATION:
      return base::Value("Navigation");
    case page::NavigationType::BACK_FORWARD_CACHE_RESTORE:
      return base::Value("BackForwardCacheRestore");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<page::BackForwardCacheNotRestoredReason> {
  static page::BackForwardCacheNotRestoredReason Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::BackForwardCacheNotRestoredReason::NOT_PRIMARY_MAIN_FRAME;
    }
    if (value.GetString() == "NotPrimaryMainFrame")
      return page::BackForwardCacheNotRestoredReason::NOT_PRIMARY_MAIN_FRAME;
    if (value.GetString() == "BackForwardCacheDisabled")
      return page::BackForwardCacheNotRestoredReason::BACK_FORWARD_CACHE_DISABLED;
    if (value.GetString() == "RelatedActiveContentsExist")
      return page::BackForwardCacheNotRestoredReason::RELATED_ACTIVE_CONTENTS_EXIST;
    if (value.GetString() == "HTTPStatusNotOK")
      return page::BackForwardCacheNotRestoredReason::HTTP_STATUS_NOTOK;
    if (value.GetString() == "SchemeNotHTTPOrHTTPS")
      return page::BackForwardCacheNotRestoredReason::SCHEME_NOTHTTP_ORHTTPS;
    if (value.GetString() == "Loading")
      return page::BackForwardCacheNotRestoredReason::LOADING;
    if (value.GetString() == "WasGrantedMediaAccess")
      return page::BackForwardCacheNotRestoredReason::WAS_GRANTED_MEDIA_ACCESS;
    if (value.GetString() == "DisableForRenderFrameHostCalled")
      return page::BackForwardCacheNotRestoredReason::DISABLE_FOR_RENDER_FRAME_HOST_CALLED;
    if (value.GetString() == "DomainNotAllowed")
      return page::BackForwardCacheNotRestoredReason::DOMAIN_NOT_ALLOWED;
    if (value.GetString() == "HTTPMethodNotGET")
      return page::BackForwardCacheNotRestoredReason::HTTP_METHOD_NOTGET;
    if (value.GetString() == "SubframeIsNavigating")
      return page::BackForwardCacheNotRestoredReason::SUBFRAME_IS_NAVIGATING;
    if (value.GetString() == "Timeout")
      return page::BackForwardCacheNotRestoredReason::TIMEOUT;
    if (value.GetString() == "CacheLimit")
      return page::BackForwardCacheNotRestoredReason::CACHE_LIMIT;
    if (value.GetString() == "JavaScriptExecution")
      return page::BackForwardCacheNotRestoredReason::JAVA_SCRIPT_EXECUTION;
    if (value.GetString() == "RendererProcessKilled")
      return page::BackForwardCacheNotRestoredReason::RENDERER_PROCESS_KILLED;
    if (value.GetString() == "RendererProcessCrashed")
      return page::BackForwardCacheNotRestoredReason::RENDERER_PROCESS_CRASHED;
    if (value.GetString() == "SchedulerTrackedFeatureUsed")
      return page::BackForwardCacheNotRestoredReason::SCHEDULER_TRACKED_FEATURE_USED;
    if (value.GetString() == "ConflictingBrowsingInstance")
      return page::BackForwardCacheNotRestoredReason::CONFLICTING_BROWSING_INSTANCE;
    if (value.GetString() == "CacheFlushed")
      return page::BackForwardCacheNotRestoredReason::CACHE_FLUSHED;
    if (value.GetString() == "ServiceWorkerVersionActivation")
      return page::BackForwardCacheNotRestoredReason::SERVICE_WORKER_VERSION_ACTIVATION;
    if (value.GetString() == "SessionRestored")
      return page::BackForwardCacheNotRestoredReason::SESSION_RESTORED;
    if (value.GetString() == "ServiceWorkerPostMessage")
      return page::BackForwardCacheNotRestoredReason::SERVICE_WORKER_POST_MESSAGE;
    if (value.GetString() == "EnteredBackForwardCacheBeforeServiceWorkerHostAdded")
      return page::BackForwardCacheNotRestoredReason::ENTERED_BACK_FORWARD_CACHE_BEFORE_SERVICE_WORKER_HOST_ADDED;
    if (value.GetString() == "RenderFrameHostReused_SameSite")
      return page::BackForwardCacheNotRestoredReason::RENDER_FRAME_HOST_REUSED_SAME_SITE;
    if (value.GetString() == "RenderFrameHostReused_CrossSite")
      return page::BackForwardCacheNotRestoredReason::RENDER_FRAME_HOST_REUSED_CROSS_SITE;
    if (value.GetString() == "ServiceWorkerClaim")
      return page::BackForwardCacheNotRestoredReason::SERVICE_WORKER_CLAIM;
    if (value.GetString() == "IgnoreEventAndEvict")
      return page::BackForwardCacheNotRestoredReason::IGNORE_EVENT_AND_EVICT;
    if (value.GetString() == "HaveInnerContents")
      return page::BackForwardCacheNotRestoredReason::HAVE_INNER_CONTENTS;
    if (value.GetString() == "TimeoutPuttingInCache")
      return page::BackForwardCacheNotRestoredReason::TIMEOUT_PUTTING_IN_CACHE;
    if (value.GetString() == "BackForwardCacheDisabledByLowMemory")
      return page::BackForwardCacheNotRestoredReason::BACK_FORWARD_CACHE_DISABLED_BY_LOW_MEMORY;
    if (value.GetString() == "BackForwardCacheDisabledByCommandLine")
      return page::BackForwardCacheNotRestoredReason::BACK_FORWARD_CACHE_DISABLED_BY_COMMAND_LINE;
    if (value.GetString() == "NetworkRequestDatapipeDrainedAsBytesConsumer")
      return page::BackForwardCacheNotRestoredReason::NETWORK_REQUEST_DATAPIPE_DRAINED_AS_BYTES_CONSUMER;
    if (value.GetString() == "NetworkRequestRedirected")
      return page::BackForwardCacheNotRestoredReason::NETWORK_REQUEST_REDIRECTED;
    if (value.GetString() == "NetworkRequestTimeout")
      return page::BackForwardCacheNotRestoredReason::NETWORK_REQUEST_TIMEOUT;
    if (value.GetString() == "NetworkExceedsBufferLimit")
      return page::BackForwardCacheNotRestoredReason::NETWORK_EXCEEDS_BUFFER_LIMIT;
    if (value.GetString() == "NavigationCancelledWhileRestoring")
      return page::BackForwardCacheNotRestoredReason::NAVIGATION_CANCELLED_WHILE_RESTORING;
    if (value.GetString() == "NotMostRecentNavigationEntry")
      return page::BackForwardCacheNotRestoredReason::NOT_MOST_RECENT_NAVIGATION_ENTRY;
    if (value.GetString() == "BackForwardCacheDisabledForPrerender")
      return page::BackForwardCacheNotRestoredReason::BACK_FORWARD_CACHE_DISABLED_FOR_PRERENDER;
    if (value.GetString() == "UserAgentOverrideDiffers")
      return page::BackForwardCacheNotRestoredReason::USER_AGENT_OVERRIDE_DIFFERS;
    if (value.GetString() == "ForegroundCacheLimit")
      return page::BackForwardCacheNotRestoredReason::FOREGROUND_CACHE_LIMIT;
    if (value.GetString() == "BrowsingInstanceNotSwapped")
      return page::BackForwardCacheNotRestoredReason::BROWSING_INSTANCE_NOT_SWAPPED;
    if (value.GetString() == "BackForwardCacheDisabledForDelegate")
      return page::BackForwardCacheNotRestoredReason::BACK_FORWARD_CACHE_DISABLED_FOR_DELEGATE;
    if (value.GetString() == "UnloadHandlerExistsInMainFrame")
      return page::BackForwardCacheNotRestoredReason::UNLOAD_HANDLER_EXISTS_IN_MAIN_FRAME;
    if (value.GetString() == "UnloadHandlerExistsInSubFrame")
      return page::BackForwardCacheNotRestoredReason::UNLOAD_HANDLER_EXISTS_IN_SUB_FRAME;
    if (value.GetString() == "ServiceWorkerUnregistration")
      return page::BackForwardCacheNotRestoredReason::SERVICE_WORKER_UNREGISTRATION;
    if (value.GetString() == "CacheControlNoStore")
      return page::BackForwardCacheNotRestoredReason::CACHE_CONTROL_NO_STORE;
    if (value.GetString() == "CacheControlNoStoreCookieModified")
      return page::BackForwardCacheNotRestoredReason::CACHE_CONTROL_NO_STORE_COOKIE_MODIFIED;
    if (value.GetString() == "CacheControlNoStoreHTTPOnlyCookieModified")
      return page::BackForwardCacheNotRestoredReason::CACHE_CONTROL_NO_STOREHTTP_ONLY_COOKIE_MODIFIED;
    if (value.GetString() == "NoResponseHead")
      return page::BackForwardCacheNotRestoredReason::NO_RESPONSE_HEAD;
    if (value.GetString() == "Unknown")
      return page::BackForwardCacheNotRestoredReason::UNKNOWN;
    if (value.GetString() == "ActivationNavigationsDisallowedForBug1234857")
      return page::BackForwardCacheNotRestoredReason::ACTIVATION_NAVIGATIONS_DISALLOWED_FOR_BUG1234857;
    if (value.GetString() == "ErrorDocument")
      return page::BackForwardCacheNotRestoredReason::ERROR_DOCUMENT;
    if (value.GetString() == "FencedFramesEmbedder")
      return page::BackForwardCacheNotRestoredReason::FENCED_FRAMES_EMBEDDER;
    if (value.GetString() == "CookieDisabled")
      return page::BackForwardCacheNotRestoredReason::COOKIE_DISABLED;
    if (value.GetString() == "HTTPAuthRequired")
      return page::BackForwardCacheNotRestoredReason::HTTP_AUTH_REQUIRED;
    if (value.GetString() == "CookieFlushed")
      return page::BackForwardCacheNotRestoredReason::COOKIE_FLUSHED;
    if (value.GetString() == "WebSocket")
      return page::BackForwardCacheNotRestoredReason::WEB_SOCKET;
    if (value.GetString() == "WebTransport")
      return page::BackForwardCacheNotRestoredReason::WEB_TRANSPORT;
    if (value.GetString() == "WebRTC")
      return page::BackForwardCacheNotRestoredReason::WEBRTC;
    if (value.GetString() == "MainResourceHasCacheControlNoStore")
      return page::BackForwardCacheNotRestoredReason::MAIN_RESOURCE_HAS_CACHE_CONTROL_NO_STORE;
    if (value.GetString() == "MainResourceHasCacheControlNoCache")
      return page::BackForwardCacheNotRestoredReason::MAIN_RESOURCE_HAS_CACHE_CONTROL_NO_CACHE;
    if (value.GetString() == "SubresourceHasCacheControlNoStore")
      return page::BackForwardCacheNotRestoredReason::SUBRESOURCE_HAS_CACHE_CONTROL_NO_STORE;
    if (value.GetString() == "SubresourceHasCacheControlNoCache")
      return page::BackForwardCacheNotRestoredReason::SUBRESOURCE_HAS_CACHE_CONTROL_NO_CACHE;
    if (value.GetString() == "ContainsPlugins")
      return page::BackForwardCacheNotRestoredReason::CONTAINS_PLUGINS;
    if (value.GetString() == "DocumentLoaded")
      return page::BackForwardCacheNotRestoredReason::DOCUMENT_LOADED;
    if (value.GetString() == "DedicatedWorkerOrWorklet")
      return page::BackForwardCacheNotRestoredReason::DEDICATED_WORKER_OR_WORKLET;
    if (value.GetString() == "OutstandingNetworkRequestOthers")
      return page::BackForwardCacheNotRestoredReason::OUTSTANDING_NETWORK_REQUEST_OTHERS;
    if (value.GetString() == "RequestedMIDIPermission")
      return page::BackForwardCacheNotRestoredReason::REQUESTEDMIDI_PERMISSION;
    if (value.GetString() == "RequestedAudioCapturePermission")
      return page::BackForwardCacheNotRestoredReason::REQUESTED_AUDIO_CAPTURE_PERMISSION;
    if (value.GetString() == "RequestedVideoCapturePermission")
      return page::BackForwardCacheNotRestoredReason::REQUESTED_VIDEO_CAPTURE_PERMISSION;
    if (value.GetString() == "RequestedBackForwardCacheBlockedSensors")
      return page::BackForwardCacheNotRestoredReason::REQUESTED_BACK_FORWARD_CACHE_BLOCKED_SENSORS;
    if (value.GetString() == "RequestedBackgroundWorkPermission")
      return page::BackForwardCacheNotRestoredReason::REQUESTED_BACKGROUND_WORK_PERMISSION;
    if (value.GetString() == "BroadcastChannel")
      return page::BackForwardCacheNotRestoredReason::BROADCAST_CHANNEL;
    if (value.GetString() == "WebXR")
      return page::BackForwardCacheNotRestoredReason::WEBXR;
    if (value.GetString() == "SharedWorker")
      return page::BackForwardCacheNotRestoredReason::SHARED_WORKER;
    if (value.GetString() == "WebLocks")
      return page::BackForwardCacheNotRestoredReason::WEB_LOCKS;
    if (value.GetString() == "WebHID")
      return page::BackForwardCacheNotRestoredReason::WEBHID;
    if (value.GetString() == "WebShare")
      return page::BackForwardCacheNotRestoredReason::WEB_SHARE;
    if (value.GetString() == "RequestedStorageAccessGrant")
      return page::BackForwardCacheNotRestoredReason::REQUESTED_STORAGE_ACCESS_GRANT;
    if (value.GetString() == "WebNfc")
      return page::BackForwardCacheNotRestoredReason::WEB_NFC;
    if (value.GetString() == "OutstandingNetworkRequestFetch")
      return page::BackForwardCacheNotRestoredReason::OUTSTANDING_NETWORK_REQUEST_FETCH;
    if (value.GetString() == "OutstandingNetworkRequestXHR")
      return page::BackForwardCacheNotRestoredReason::OUTSTANDING_NETWORK_REQUESTXHR;
    if (value.GetString() == "AppBanner")
      return page::BackForwardCacheNotRestoredReason::APP_BANNER;
    if (value.GetString() == "Printing")
      return page::BackForwardCacheNotRestoredReason::PRINTING;
    if (value.GetString() == "WebDatabase")
      return page::BackForwardCacheNotRestoredReason::WEB_DATABASE;
    if (value.GetString() == "PictureInPicture")
      return page::BackForwardCacheNotRestoredReason::PICTURE_IN_PICTURE;
    if (value.GetString() == "Portal")
      return page::BackForwardCacheNotRestoredReason::PORTAL;
    if (value.GetString() == "SpeechRecognizer")
      return page::BackForwardCacheNotRestoredReason::SPEECH_RECOGNIZER;
    if (value.GetString() == "IdleManager")
      return page::BackForwardCacheNotRestoredReason::IDLE_MANAGER;
    if (value.GetString() == "PaymentManager")
      return page::BackForwardCacheNotRestoredReason::PAYMENT_MANAGER;
    if (value.GetString() == "SpeechSynthesis")
      return page::BackForwardCacheNotRestoredReason::SPEECH_SYNTHESIS;
    if (value.GetString() == "KeyboardLock")
      return page::BackForwardCacheNotRestoredReason::KEYBOARD_LOCK;
    if (value.GetString() == "WebOTPService")
      return page::BackForwardCacheNotRestoredReason::WEBOTP_SERVICE;
    if (value.GetString() == "OutstandingNetworkRequestDirectSocket")
      return page::BackForwardCacheNotRestoredReason::OUTSTANDING_NETWORK_REQUEST_DIRECT_SOCKET;
    if (value.GetString() == "InjectedJavascript")
      return page::BackForwardCacheNotRestoredReason::INJECTED_JAVASCRIPT;
    if (value.GetString() == "InjectedStyleSheet")
      return page::BackForwardCacheNotRestoredReason::INJECTED_STYLE_SHEET;
    if (value.GetString() == "KeepaliveRequest")
      return page::BackForwardCacheNotRestoredReason::KEEPALIVE_REQUEST;
    if (value.GetString() == "IndexedDBEvent")
      return page::BackForwardCacheNotRestoredReason::INDEXEDDB_EVENT;
    if (value.GetString() == "Dummy")
      return page::BackForwardCacheNotRestoredReason::DUMMY;
    if (value.GetString() == "JsNetworkRequestReceivedCacheControlNoStoreResource")
      return page::BackForwardCacheNotRestoredReason::JS_NETWORK_REQUEST_RECEIVED_CACHE_CONTROL_NO_STORE_RESOURCE;
    if (value.GetString() == "WebRTCSticky")
      return page::BackForwardCacheNotRestoredReason::WEBRTC_STICKY;
    if (value.GetString() == "WebTransportSticky")
      return page::BackForwardCacheNotRestoredReason::WEB_TRANSPORT_STICKY;
    if (value.GetString() == "WebSocketSticky")
      return page::BackForwardCacheNotRestoredReason::WEB_SOCKET_STICKY;
    if (value.GetString() == "SmartCard")
      return page::BackForwardCacheNotRestoredReason::SMART_CARD;
    if (value.GetString() == "LiveMediaStreamTrack")
      return page::BackForwardCacheNotRestoredReason::LIVE_MEDIA_STREAM_TRACK;
    if (value.GetString() == "UnloadHandler")
      return page::BackForwardCacheNotRestoredReason::UNLOAD_HANDLER;
    if (value.GetString() == "ContentSecurityHandler")
      return page::BackForwardCacheNotRestoredReason::CONTENT_SECURITY_HANDLER;
    if (value.GetString() == "ContentWebAuthenticationAPI")
      return page::BackForwardCacheNotRestoredReason::CONTENT_WEB_AUTHENTICATIONAPI;
    if (value.GetString() == "ContentFileChooser")
      return page::BackForwardCacheNotRestoredReason::CONTENT_FILE_CHOOSER;
    if (value.GetString() == "ContentSerial")
      return page::BackForwardCacheNotRestoredReason::CONTENT_SERIAL;
    if (value.GetString() == "ContentFileSystemAccess")
      return page::BackForwardCacheNotRestoredReason::CONTENT_FILE_SYSTEM_ACCESS;
    if (value.GetString() == "ContentMediaDevicesDispatcherHost")
      return page::BackForwardCacheNotRestoredReason::CONTENT_MEDIA_DEVICES_DISPATCHER_HOST;
    if (value.GetString() == "ContentWebBluetooth")
      return page::BackForwardCacheNotRestoredReason::CONTENT_WEB_BLUETOOTH;
    if (value.GetString() == "ContentWebUSB")
      return page::BackForwardCacheNotRestoredReason::CONTENT_WEBUSB;
    if (value.GetString() == "ContentMediaSessionService")
      return page::BackForwardCacheNotRestoredReason::CONTENT_MEDIA_SESSION_SERVICE;
    if (value.GetString() == "ContentScreenReader")
      return page::BackForwardCacheNotRestoredReason::CONTENT_SCREEN_READER;
    if (value.GetString() == "EmbedderPopupBlockerTabHelper")
      return page::BackForwardCacheNotRestoredReason::EMBEDDER_POPUP_BLOCKER_TAB_HELPER;
    if (value.GetString() == "EmbedderSafeBrowsingTriggeredPopupBlocker")
      return page::BackForwardCacheNotRestoredReason::EMBEDDER_SAFE_BROWSING_TRIGGERED_POPUP_BLOCKER;
    if (value.GetString() == "EmbedderSafeBrowsingThreatDetails")
      return page::BackForwardCacheNotRestoredReason::EMBEDDER_SAFE_BROWSING_THREAT_DETAILS;
    if (value.GetString() == "EmbedderAppBannerManager")
      return page::BackForwardCacheNotRestoredReason::EMBEDDER_APP_BANNER_MANAGER;
    if (value.GetString() == "EmbedderDomDistillerViewerSource")
      return page::BackForwardCacheNotRestoredReason::EMBEDDER_DOM_DISTILLER_VIEWER_SOURCE;
    if (value.GetString() == "EmbedderDomDistillerSelfDeletingRequestDelegate")
      return page::BackForwardCacheNotRestoredReason::EMBEDDER_DOM_DISTILLER_SELF_DELETING_REQUEST_DELEGATE;
    if (value.GetString() == "EmbedderOomInterventionTabHelper")
      return page::BackForwardCacheNotRestoredReason::EMBEDDER_OOM_INTERVENTION_TAB_HELPER;
    if (value.GetString() == "EmbedderOfflinePage")
      return page::BackForwardCacheNotRestoredReason::EMBEDDER_OFFLINE_PAGE;
    if (value.GetString() == "EmbedderChromePasswordManagerClientBindCredentialManager")
      return page::BackForwardCacheNotRestoredReason::EMBEDDER_CHROME_PASSWORD_MANAGER_CLIENT_BIND_CREDENTIAL_MANAGER;
    if (value.GetString() == "EmbedderPermissionRequestManager")
      return page::BackForwardCacheNotRestoredReason::EMBEDDER_PERMISSION_REQUEST_MANAGER;
    if (value.GetString() == "EmbedderModalDialog")
      return page::BackForwardCacheNotRestoredReason::EMBEDDER_MODAL_DIALOG;
    if (value.GetString() == "EmbedderExtensions")
      return page::BackForwardCacheNotRestoredReason::EMBEDDER_EXTENSIONS;
    if (value.GetString() == "EmbedderExtensionMessaging")
      return page::BackForwardCacheNotRestoredReason::EMBEDDER_EXTENSION_MESSAGING;
    if (value.GetString() == "EmbedderExtensionMessagingForOpenPort")
      return page::BackForwardCacheNotRestoredReason::EMBEDDER_EXTENSION_MESSAGING_FOR_OPEN_PORT;
    if (value.GetString() == "EmbedderExtensionSentMessageToCachedFrame")
      return page::BackForwardCacheNotRestoredReason::EMBEDDER_EXTENSION_SENT_MESSAGE_TO_CACHED_FRAME;
    errors->AddError("invalid enum value");
    return page::BackForwardCacheNotRestoredReason::NOT_PRIMARY_MAIN_FRAME;
  }
};

template <>
inline base::Value ToValue(const page::BackForwardCacheNotRestoredReason& value) {
  switch (value) {
    case page::BackForwardCacheNotRestoredReason::NOT_PRIMARY_MAIN_FRAME:
      return base::Value("NotPrimaryMainFrame");
    case page::BackForwardCacheNotRestoredReason::BACK_FORWARD_CACHE_DISABLED:
      return base::Value("BackForwardCacheDisabled");
    case page::BackForwardCacheNotRestoredReason::RELATED_ACTIVE_CONTENTS_EXIST:
      return base::Value("RelatedActiveContentsExist");
    case page::BackForwardCacheNotRestoredReason::HTTP_STATUS_NOTOK:
      return base::Value("HTTPStatusNotOK");
    case page::BackForwardCacheNotRestoredReason::SCHEME_NOTHTTP_ORHTTPS:
      return base::Value("SchemeNotHTTPOrHTTPS");
    case page::BackForwardCacheNotRestoredReason::LOADING:
      return base::Value("Loading");
    case page::BackForwardCacheNotRestoredReason::WAS_GRANTED_MEDIA_ACCESS:
      return base::Value("WasGrantedMediaAccess");
    case page::BackForwardCacheNotRestoredReason::DISABLE_FOR_RENDER_FRAME_HOST_CALLED:
      return base::Value("DisableForRenderFrameHostCalled");
    case page::BackForwardCacheNotRestoredReason::DOMAIN_NOT_ALLOWED:
      return base::Value("DomainNotAllowed");
    case page::BackForwardCacheNotRestoredReason::HTTP_METHOD_NOTGET:
      return base::Value("HTTPMethodNotGET");
    case page::BackForwardCacheNotRestoredReason::SUBFRAME_IS_NAVIGATING:
      return base::Value("SubframeIsNavigating");
    case page::BackForwardCacheNotRestoredReason::TIMEOUT:
      return base::Value("Timeout");
    case page::BackForwardCacheNotRestoredReason::CACHE_LIMIT:
      return base::Value("CacheLimit");
    case page::BackForwardCacheNotRestoredReason::JAVA_SCRIPT_EXECUTION:
      return base::Value("JavaScriptExecution");
    case page::BackForwardCacheNotRestoredReason::RENDERER_PROCESS_KILLED:
      return base::Value("RendererProcessKilled");
    case page::BackForwardCacheNotRestoredReason::RENDERER_PROCESS_CRASHED:
      return base::Value("RendererProcessCrashed");
    case page::BackForwardCacheNotRestoredReason::SCHEDULER_TRACKED_FEATURE_USED:
      return base::Value("SchedulerTrackedFeatureUsed");
    case page::BackForwardCacheNotRestoredReason::CONFLICTING_BROWSING_INSTANCE:
      return base::Value("ConflictingBrowsingInstance");
    case page::BackForwardCacheNotRestoredReason::CACHE_FLUSHED:
      return base::Value("CacheFlushed");
    case page::BackForwardCacheNotRestoredReason::SERVICE_WORKER_VERSION_ACTIVATION:
      return base::Value("ServiceWorkerVersionActivation");
    case page::BackForwardCacheNotRestoredReason::SESSION_RESTORED:
      return base::Value("SessionRestored");
    case page::BackForwardCacheNotRestoredReason::SERVICE_WORKER_POST_MESSAGE:
      return base::Value("ServiceWorkerPostMessage");
    case page::BackForwardCacheNotRestoredReason::ENTERED_BACK_FORWARD_CACHE_BEFORE_SERVICE_WORKER_HOST_ADDED:
      return base::Value("EnteredBackForwardCacheBeforeServiceWorkerHostAdded");
    case page::BackForwardCacheNotRestoredReason::RENDER_FRAME_HOST_REUSED_SAME_SITE:
      return base::Value("RenderFrameHostReused_SameSite");
    case page::BackForwardCacheNotRestoredReason::RENDER_FRAME_HOST_REUSED_CROSS_SITE:
      return base::Value("RenderFrameHostReused_CrossSite");
    case page::BackForwardCacheNotRestoredReason::SERVICE_WORKER_CLAIM:
      return base::Value("ServiceWorkerClaim");
    case page::BackForwardCacheNotRestoredReason::IGNORE_EVENT_AND_EVICT:
      return base::Value("IgnoreEventAndEvict");
    case page::BackForwardCacheNotRestoredReason::HAVE_INNER_CONTENTS:
      return base::Value("HaveInnerContents");
    case page::BackForwardCacheNotRestoredReason::TIMEOUT_PUTTING_IN_CACHE:
      return base::Value("TimeoutPuttingInCache");
    case page::BackForwardCacheNotRestoredReason::BACK_FORWARD_CACHE_DISABLED_BY_LOW_MEMORY:
      return base::Value("BackForwardCacheDisabledByLowMemory");
    case page::BackForwardCacheNotRestoredReason::BACK_FORWARD_CACHE_DISABLED_BY_COMMAND_LINE:
      return base::Value("BackForwardCacheDisabledByCommandLine");
    case page::BackForwardCacheNotRestoredReason::NETWORK_REQUEST_DATAPIPE_DRAINED_AS_BYTES_CONSUMER:
      return base::Value("NetworkRequestDatapipeDrainedAsBytesConsumer");
    case page::BackForwardCacheNotRestoredReason::NETWORK_REQUEST_REDIRECTED:
      return base::Value("NetworkRequestRedirected");
    case page::BackForwardCacheNotRestoredReason::NETWORK_REQUEST_TIMEOUT:
      return base::Value("NetworkRequestTimeout");
    case page::BackForwardCacheNotRestoredReason::NETWORK_EXCEEDS_BUFFER_LIMIT:
      return base::Value("NetworkExceedsBufferLimit");
    case page::BackForwardCacheNotRestoredReason::NAVIGATION_CANCELLED_WHILE_RESTORING:
      return base::Value("NavigationCancelledWhileRestoring");
    case page::BackForwardCacheNotRestoredReason::NOT_MOST_RECENT_NAVIGATION_ENTRY:
      return base::Value("NotMostRecentNavigationEntry");
    case page::BackForwardCacheNotRestoredReason::BACK_FORWARD_CACHE_DISABLED_FOR_PRERENDER:
      return base::Value("BackForwardCacheDisabledForPrerender");
    case page::BackForwardCacheNotRestoredReason::USER_AGENT_OVERRIDE_DIFFERS:
      return base::Value("UserAgentOverrideDiffers");
    case page::BackForwardCacheNotRestoredReason::FOREGROUND_CACHE_LIMIT:
      return base::Value("ForegroundCacheLimit");
    case page::BackForwardCacheNotRestoredReason::BROWSING_INSTANCE_NOT_SWAPPED:
      return base::Value("BrowsingInstanceNotSwapped");
    case page::BackForwardCacheNotRestoredReason::BACK_FORWARD_CACHE_DISABLED_FOR_DELEGATE:
      return base::Value("BackForwardCacheDisabledForDelegate");
    case page::BackForwardCacheNotRestoredReason::UNLOAD_HANDLER_EXISTS_IN_MAIN_FRAME:
      return base::Value("UnloadHandlerExistsInMainFrame");
    case page::BackForwardCacheNotRestoredReason::UNLOAD_HANDLER_EXISTS_IN_SUB_FRAME:
      return base::Value("UnloadHandlerExistsInSubFrame");
    case page::BackForwardCacheNotRestoredReason::SERVICE_WORKER_UNREGISTRATION:
      return base::Value("ServiceWorkerUnregistration");
    case page::BackForwardCacheNotRestoredReason::CACHE_CONTROL_NO_STORE:
      return base::Value("CacheControlNoStore");
    case page::BackForwardCacheNotRestoredReason::CACHE_CONTROL_NO_STORE_COOKIE_MODIFIED:
      return base::Value("CacheControlNoStoreCookieModified");
    case page::BackForwardCacheNotRestoredReason::CACHE_CONTROL_NO_STOREHTTP_ONLY_COOKIE_MODIFIED:
      return base::Value("CacheControlNoStoreHTTPOnlyCookieModified");
    case page::BackForwardCacheNotRestoredReason::NO_RESPONSE_HEAD:
      return base::Value("NoResponseHead");
    case page::BackForwardCacheNotRestoredReason::UNKNOWN:
      return base::Value("Unknown");
    case page::BackForwardCacheNotRestoredReason::ACTIVATION_NAVIGATIONS_DISALLOWED_FOR_BUG1234857:
      return base::Value("ActivationNavigationsDisallowedForBug1234857");
    case page::BackForwardCacheNotRestoredReason::ERROR_DOCUMENT:
      return base::Value("ErrorDocument");
    case page::BackForwardCacheNotRestoredReason::FENCED_FRAMES_EMBEDDER:
      return base::Value("FencedFramesEmbedder");
    case page::BackForwardCacheNotRestoredReason::COOKIE_DISABLED:
      return base::Value("CookieDisabled");
    case page::BackForwardCacheNotRestoredReason::HTTP_AUTH_REQUIRED:
      return base::Value("HTTPAuthRequired");
    case page::BackForwardCacheNotRestoredReason::COOKIE_FLUSHED:
      return base::Value("CookieFlushed");
    case page::BackForwardCacheNotRestoredReason::WEB_SOCKET:
      return base::Value("WebSocket");
    case page::BackForwardCacheNotRestoredReason::WEB_TRANSPORT:
      return base::Value("WebTransport");
    case page::BackForwardCacheNotRestoredReason::WEBRTC:
      return base::Value("WebRTC");
    case page::BackForwardCacheNotRestoredReason::MAIN_RESOURCE_HAS_CACHE_CONTROL_NO_STORE:
      return base::Value("MainResourceHasCacheControlNoStore");
    case page::BackForwardCacheNotRestoredReason::MAIN_RESOURCE_HAS_CACHE_CONTROL_NO_CACHE:
      return base::Value("MainResourceHasCacheControlNoCache");
    case page::BackForwardCacheNotRestoredReason::SUBRESOURCE_HAS_CACHE_CONTROL_NO_STORE:
      return base::Value("SubresourceHasCacheControlNoStore");
    case page::BackForwardCacheNotRestoredReason::SUBRESOURCE_HAS_CACHE_CONTROL_NO_CACHE:
      return base::Value("SubresourceHasCacheControlNoCache");
    case page::BackForwardCacheNotRestoredReason::CONTAINS_PLUGINS:
      return base::Value("ContainsPlugins");
    case page::BackForwardCacheNotRestoredReason::DOCUMENT_LOADED:
      return base::Value("DocumentLoaded");
    case page::BackForwardCacheNotRestoredReason::DEDICATED_WORKER_OR_WORKLET:
      return base::Value("DedicatedWorkerOrWorklet");
    case page::BackForwardCacheNotRestoredReason::OUTSTANDING_NETWORK_REQUEST_OTHERS:
      return base::Value("OutstandingNetworkRequestOthers");
    case page::BackForwardCacheNotRestoredReason::REQUESTEDMIDI_PERMISSION:
      return base::Value("RequestedMIDIPermission");
    case page::BackForwardCacheNotRestoredReason::REQUESTED_AUDIO_CAPTURE_PERMISSION:
      return base::Value("RequestedAudioCapturePermission");
    case page::BackForwardCacheNotRestoredReason::REQUESTED_VIDEO_CAPTURE_PERMISSION:
      return base::Value("RequestedVideoCapturePermission");
    case page::BackForwardCacheNotRestoredReason::REQUESTED_BACK_FORWARD_CACHE_BLOCKED_SENSORS:
      return base::Value("RequestedBackForwardCacheBlockedSensors");
    case page::BackForwardCacheNotRestoredReason::REQUESTED_BACKGROUND_WORK_PERMISSION:
      return base::Value("RequestedBackgroundWorkPermission");
    case page::BackForwardCacheNotRestoredReason::BROADCAST_CHANNEL:
      return base::Value("BroadcastChannel");
    case page::BackForwardCacheNotRestoredReason::WEBXR:
      return base::Value("WebXR");
    case page::BackForwardCacheNotRestoredReason::SHARED_WORKER:
      return base::Value("SharedWorker");
    case page::BackForwardCacheNotRestoredReason::WEB_LOCKS:
      return base::Value("WebLocks");
    case page::BackForwardCacheNotRestoredReason::WEBHID:
      return base::Value("WebHID");
    case page::BackForwardCacheNotRestoredReason::WEB_SHARE:
      return base::Value("WebShare");
    case page::BackForwardCacheNotRestoredReason::REQUESTED_STORAGE_ACCESS_GRANT:
      return base::Value("RequestedStorageAccessGrant");
    case page::BackForwardCacheNotRestoredReason::WEB_NFC:
      return base::Value("WebNfc");
    case page::BackForwardCacheNotRestoredReason::OUTSTANDING_NETWORK_REQUEST_FETCH:
      return base::Value("OutstandingNetworkRequestFetch");
    case page::BackForwardCacheNotRestoredReason::OUTSTANDING_NETWORK_REQUESTXHR:
      return base::Value("OutstandingNetworkRequestXHR");
    case page::BackForwardCacheNotRestoredReason::APP_BANNER:
      return base::Value("AppBanner");
    case page::BackForwardCacheNotRestoredReason::PRINTING:
      return base::Value("Printing");
    case page::BackForwardCacheNotRestoredReason::WEB_DATABASE:
      return base::Value("WebDatabase");
    case page::BackForwardCacheNotRestoredReason::PICTURE_IN_PICTURE:
      return base::Value("PictureInPicture");
    case page::BackForwardCacheNotRestoredReason::PORTAL:
      return base::Value("Portal");
    case page::BackForwardCacheNotRestoredReason::SPEECH_RECOGNIZER:
      return base::Value("SpeechRecognizer");
    case page::BackForwardCacheNotRestoredReason::IDLE_MANAGER:
      return base::Value("IdleManager");
    case page::BackForwardCacheNotRestoredReason::PAYMENT_MANAGER:
      return base::Value("PaymentManager");
    case page::BackForwardCacheNotRestoredReason::SPEECH_SYNTHESIS:
      return base::Value("SpeechSynthesis");
    case page::BackForwardCacheNotRestoredReason::KEYBOARD_LOCK:
      return base::Value("KeyboardLock");
    case page::BackForwardCacheNotRestoredReason::WEBOTP_SERVICE:
      return base::Value("WebOTPService");
    case page::BackForwardCacheNotRestoredReason::OUTSTANDING_NETWORK_REQUEST_DIRECT_SOCKET:
      return base::Value("OutstandingNetworkRequestDirectSocket");
    case page::BackForwardCacheNotRestoredReason::INJECTED_JAVASCRIPT:
      return base::Value("InjectedJavascript");
    case page::BackForwardCacheNotRestoredReason::INJECTED_STYLE_SHEET:
      return base::Value("InjectedStyleSheet");
    case page::BackForwardCacheNotRestoredReason::KEEPALIVE_REQUEST:
      return base::Value("KeepaliveRequest");
    case page::BackForwardCacheNotRestoredReason::INDEXEDDB_EVENT:
      return base::Value("IndexedDBEvent");
    case page::BackForwardCacheNotRestoredReason::DUMMY:
      return base::Value("Dummy");
    case page::BackForwardCacheNotRestoredReason::JS_NETWORK_REQUEST_RECEIVED_CACHE_CONTROL_NO_STORE_RESOURCE:
      return base::Value("JsNetworkRequestReceivedCacheControlNoStoreResource");
    case page::BackForwardCacheNotRestoredReason::WEBRTC_STICKY:
      return base::Value("WebRTCSticky");
    case page::BackForwardCacheNotRestoredReason::WEB_TRANSPORT_STICKY:
      return base::Value("WebTransportSticky");
    case page::BackForwardCacheNotRestoredReason::WEB_SOCKET_STICKY:
      return base::Value("WebSocketSticky");
    case page::BackForwardCacheNotRestoredReason::SMART_CARD:
      return base::Value("SmartCard");
    case page::BackForwardCacheNotRestoredReason::LIVE_MEDIA_STREAM_TRACK:
      return base::Value("LiveMediaStreamTrack");
    case page::BackForwardCacheNotRestoredReason::UNLOAD_HANDLER:
      return base::Value("UnloadHandler");
    case page::BackForwardCacheNotRestoredReason::CONTENT_SECURITY_HANDLER:
      return base::Value("ContentSecurityHandler");
    case page::BackForwardCacheNotRestoredReason::CONTENT_WEB_AUTHENTICATIONAPI:
      return base::Value("ContentWebAuthenticationAPI");
    case page::BackForwardCacheNotRestoredReason::CONTENT_FILE_CHOOSER:
      return base::Value("ContentFileChooser");
    case page::BackForwardCacheNotRestoredReason::CONTENT_SERIAL:
      return base::Value("ContentSerial");
    case page::BackForwardCacheNotRestoredReason::CONTENT_FILE_SYSTEM_ACCESS:
      return base::Value("ContentFileSystemAccess");
    case page::BackForwardCacheNotRestoredReason::CONTENT_MEDIA_DEVICES_DISPATCHER_HOST:
      return base::Value("ContentMediaDevicesDispatcherHost");
    case page::BackForwardCacheNotRestoredReason::CONTENT_WEB_BLUETOOTH:
      return base::Value("ContentWebBluetooth");
    case page::BackForwardCacheNotRestoredReason::CONTENT_WEBUSB:
      return base::Value("ContentWebUSB");
    case page::BackForwardCacheNotRestoredReason::CONTENT_MEDIA_SESSION_SERVICE:
      return base::Value("ContentMediaSessionService");
    case page::BackForwardCacheNotRestoredReason::CONTENT_SCREEN_READER:
      return base::Value("ContentScreenReader");
    case page::BackForwardCacheNotRestoredReason::EMBEDDER_POPUP_BLOCKER_TAB_HELPER:
      return base::Value("EmbedderPopupBlockerTabHelper");
    case page::BackForwardCacheNotRestoredReason::EMBEDDER_SAFE_BROWSING_TRIGGERED_POPUP_BLOCKER:
      return base::Value("EmbedderSafeBrowsingTriggeredPopupBlocker");
    case page::BackForwardCacheNotRestoredReason::EMBEDDER_SAFE_BROWSING_THREAT_DETAILS:
      return base::Value("EmbedderSafeBrowsingThreatDetails");
    case page::BackForwardCacheNotRestoredReason::EMBEDDER_APP_BANNER_MANAGER:
      return base::Value("EmbedderAppBannerManager");
    case page::BackForwardCacheNotRestoredReason::EMBEDDER_DOM_DISTILLER_VIEWER_SOURCE:
      return base::Value("EmbedderDomDistillerViewerSource");
    case page::BackForwardCacheNotRestoredReason::EMBEDDER_DOM_DISTILLER_SELF_DELETING_REQUEST_DELEGATE:
      return base::Value("EmbedderDomDistillerSelfDeletingRequestDelegate");
    case page::BackForwardCacheNotRestoredReason::EMBEDDER_OOM_INTERVENTION_TAB_HELPER:
      return base::Value("EmbedderOomInterventionTabHelper");
    case page::BackForwardCacheNotRestoredReason::EMBEDDER_OFFLINE_PAGE:
      return base::Value("EmbedderOfflinePage");
    case page::BackForwardCacheNotRestoredReason::EMBEDDER_CHROME_PASSWORD_MANAGER_CLIENT_BIND_CREDENTIAL_MANAGER:
      return base::Value("EmbedderChromePasswordManagerClientBindCredentialManager");
    case page::BackForwardCacheNotRestoredReason::EMBEDDER_PERMISSION_REQUEST_MANAGER:
      return base::Value("EmbedderPermissionRequestManager");
    case page::BackForwardCacheNotRestoredReason::EMBEDDER_MODAL_DIALOG:
      return base::Value("EmbedderModalDialog");
    case page::BackForwardCacheNotRestoredReason::EMBEDDER_EXTENSIONS:
      return base::Value("EmbedderExtensions");
    case page::BackForwardCacheNotRestoredReason::EMBEDDER_EXTENSION_MESSAGING:
      return base::Value("EmbedderExtensionMessaging");
    case page::BackForwardCacheNotRestoredReason::EMBEDDER_EXTENSION_MESSAGING_FOR_OPEN_PORT:
      return base::Value("EmbedderExtensionMessagingForOpenPort");
    case page::BackForwardCacheNotRestoredReason::EMBEDDER_EXTENSION_SENT_MESSAGE_TO_CACHED_FRAME:
      return base::Value("EmbedderExtensionSentMessageToCachedFrame");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<page::BackForwardCacheNotRestoredReasonType> {
  static page::BackForwardCacheNotRestoredReasonType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::BackForwardCacheNotRestoredReasonType::SUPPORT_PENDING;
    }
    if (value.GetString() == "SupportPending")
      return page::BackForwardCacheNotRestoredReasonType::SUPPORT_PENDING;
    if (value.GetString() == "PageSupportNeeded")
      return page::BackForwardCacheNotRestoredReasonType::PAGE_SUPPORT_NEEDED;
    if (value.GetString() == "Circumstantial")
      return page::BackForwardCacheNotRestoredReasonType::CIRCUMSTANTIAL;
    errors->AddError("invalid enum value");
    return page::BackForwardCacheNotRestoredReasonType::SUPPORT_PENDING;
  }
};

template <>
inline base::Value ToValue(const page::BackForwardCacheNotRestoredReasonType& value) {
  switch (value) {
    case page::BackForwardCacheNotRestoredReasonType::SUPPORT_PENDING:
      return base::Value("SupportPending");
    case page::BackForwardCacheNotRestoredReasonType::PAGE_SUPPORT_NEEDED:
      return base::Value("PageSupportNeeded");
    case page::BackForwardCacheNotRestoredReasonType::CIRCUMSTANTIAL:
      return base::Value("Circumstantial");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<page::BackForwardCacheBlockingDetails> {
  static std::unique_ptr<page::BackForwardCacheBlockingDetails> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::BackForwardCacheBlockingDetails::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::BackForwardCacheBlockingDetails& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::BackForwardCacheNotRestoredExplanation> {
  static std::unique_ptr<page::BackForwardCacheNotRestoredExplanation> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::BackForwardCacheNotRestoredExplanation::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::BackForwardCacheNotRestoredExplanation& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::BackForwardCacheNotRestoredExplanationTree> {
  static std::unique_ptr<page::BackForwardCacheNotRestoredExplanationTree> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::BackForwardCacheNotRestoredExplanationTree::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::BackForwardCacheNotRestoredExplanationTree& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::AddScriptToEvaluateOnLoadParams> {
  static std::unique_ptr<page::AddScriptToEvaluateOnLoadParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::AddScriptToEvaluateOnLoadParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::AddScriptToEvaluateOnLoadParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::AddScriptToEvaluateOnLoadResult> {
  static std::unique_ptr<page::AddScriptToEvaluateOnLoadResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::AddScriptToEvaluateOnLoadResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::AddScriptToEvaluateOnLoadResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::AddScriptToEvaluateOnNewDocumentParams> {
  static std::unique_ptr<page::AddScriptToEvaluateOnNewDocumentParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::AddScriptToEvaluateOnNewDocumentParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::AddScriptToEvaluateOnNewDocumentParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::AddScriptToEvaluateOnNewDocumentResult> {
  static std::unique_ptr<page::AddScriptToEvaluateOnNewDocumentResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::AddScriptToEvaluateOnNewDocumentResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::AddScriptToEvaluateOnNewDocumentResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::BringToFrontParams> {
  static std::unique_ptr<page::BringToFrontParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::BringToFrontParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::BringToFrontParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::BringToFrontResult> {
  static std::unique_ptr<page::BringToFrontResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::BringToFrontResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::BringToFrontResult& value) {
  return value.Serialize();
}

template <>
struct FromValue<page::CaptureScreenshotFormat> {
  static page::CaptureScreenshotFormat Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::CaptureScreenshotFormat::JPEG;
    }
    if (value.GetString() == "jpeg")
      return page::CaptureScreenshotFormat::JPEG;
    if (value.GetString() == "png")
      return page::CaptureScreenshotFormat::PNG;
    if (value.GetString() == "webp")
      return page::CaptureScreenshotFormat::WEBP;
    errors->AddError("invalid enum value");
    return page::CaptureScreenshotFormat::JPEG;
  }
};

template <>
inline base::Value ToValue(const page::CaptureScreenshotFormat& value) {
  switch (value) {
    case page::CaptureScreenshotFormat::JPEG:
      return base::Value("jpeg");
    case page::CaptureScreenshotFormat::PNG:
      return base::Value("png");
    case page::CaptureScreenshotFormat::WEBP:
      return base::Value("webp");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<page::CaptureScreenshotParams> {
  static std::unique_ptr<page::CaptureScreenshotParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::CaptureScreenshotParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::CaptureScreenshotParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::CaptureScreenshotResult> {
  static std::unique_ptr<page::CaptureScreenshotResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::CaptureScreenshotResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::CaptureScreenshotResult& value) {
  return value.Serialize();
}

template <>
struct FromValue<page::CaptureSnapshotFormat> {
  static page::CaptureSnapshotFormat Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::CaptureSnapshotFormat::MHTML;
    }
    if (value.GetString() == "mhtml")
      return page::CaptureSnapshotFormat::MHTML;
    errors->AddError("invalid enum value");
    return page::CaptureSnapshotFormat::MHTML;
  }
};

template <>
inline base::Value ToValue(const page::CaptureSnapshotFormat& value) {
  switch (value) {
    case page::CaptureSnapshotFormat::MHTML:
      return base::Value("mhtml");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<page::CaptureSnapshotParams> {
  static std::unique_ptr<page::CaptureSnapshotParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::CaptureSnapshotParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::CaptureSnapshotParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::CaptureSnapshotResult> {
  static std::unique_ptr<page::CaptureSnapshotResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::CaptureSnapshotResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::CaptureSnapshotResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::ClearDeviceMetricsOverrideParams> {
  static std::unique_ptr<page::ClearDeviceMetricsOverrideParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::ClearDeviceMetricsOverrideParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::ClearDeviceMetricsOverrideParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::ClearDeviceMetricsOverrideResult> {
  static std::unique_ptr<page::ClearDeviceMetricsOverrideResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::ClearDeviceMetricsOverrideResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::ClearDeviceMetricsOverrideResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::ClearDeviceOrientationOverrideParams> {
  static std::unique_ptr<page::ClearDeviceOrientationOverrideParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::ClearDeviceOrientationOverrideParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::ClearDeviceOrientationOverrideParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::ClearDeviceOrientationOverrideResult> {
  static std::unique_ptr<page::ClearDeviceOrientationOverrideResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::ClearDeviceOrientationOverrideResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::ClearDeviceOrientationOverrideResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::ClearGeolocationOverrideParams> {
  static std::unique_ptr<page::ClearGeolocationOverrideParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::ClearGeolocationOverrideParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::ClearGeolocationOverrideParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::ClearGeolocationOverrideResult> {
  static std::unique_ptr<page::ClearGeolocationOverrideResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::ClearGeolocationOverrideResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::ClearGeolocationOverrideResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::CreateIsolatedWorldParams> {
  static std::unique_ptr<page::CreateIsolatedWorldParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::CreateIsolatedWorldParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::CreateIsolatedWorldParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::CreateIsolatedWorldResult> {
  static std::unique_ptr<page::CreateIsolatedWorldResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::CreateIsolatedWorldResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::CreateIsolatedWorldResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::DeleteCookieParams> {
  static std::unique_ptr<page::DeleteCookieParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::DeleteCookieParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::DeleteCookieParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::DeleteCookieResult> {
  static std::unique_ptr<page::DeleteCookieResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::DeleteCookieResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::DeleteCookieResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::DisableParams> {
  static std::unique_ptr<page::DisableParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::DisableParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::DisableParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::DisableResult> {
  static std::unique_ptr<page::DisableResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::DisableResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::DisableResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::EnableParams> {
  static std::unique_ptr<page::EnableParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::EnableParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::EnableParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::EnableResult> {
  static std::unique_ptr<page::EnableResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::EnableResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::EnableResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::GetAppManifestParams> {
  static std::unique_ptr<page::GetAppManifestParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::GetAppManifestParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::GetAppManifestParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::GetAppManifestResult> {
  static std::unique_ptr<page::GetAppManifestResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::GetAppManifestResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::GetAppManifestResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::GetInstallabilityErrorsParams> {
  static std::unique_ptr<page::GetInstallabilityErrorsParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::GetInstallabilityErrorsParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::GetInstallabilityErrorsParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::GetInstallabilityErrorsResult> {
  static std::unique_ptr<page::GetInstallabilityErrorsResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::GetInstallabilityErrorsResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::GetInstallabilityErrorsResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::GetManifestIconsParams> {
  static std::unique_ptr<page::GetManifestIconsParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::GetManifestIconsParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::GetManifestIconsParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::GetManifestIconsResult> {
  static std::unique_ptr<page::GetManifestIconsResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::GetManifestIconsResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::GetManifestIconsResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::GetAppIdParams> {
  static std::unique_ptr<page::GetAppIdParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::GetAppIdParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::GetAppIdParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::GetAppIdResult> {
  static std::unique_ptr<page::GetAppIdResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::GetAppIdResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::GetAppIdResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::GetAdScriptIdParams> {
  static std::unique_ptr<page::GetAdScriptIdParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::GetAdScriptIdParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::GetAdScriptIdParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::GetAdScriptIdResult> {
  static std::unique_ptr<page::GetAdScriptIdResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::GetAdScriptIdResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::GetAdScriptIdResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::GetFrameTreeParams> {
  static std::unique_ptr<page::GetFrameTreeParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::GetFrameTreeParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::GetFrameTreeParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::GetFrameTreeResult> {
  static std::unique_ptr<page::GetFrameTreeResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::GetFrameTreeResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::GetFrameTreeResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::GetLayoutMetricsParams> {
  static std::unique_ptr<page::GetLayoutMetricsParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::GetLayoutMetricsParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::GetLayoutMetricsParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::GetLayoutMetricsResult> {
  static std::unique_ptr<page::GetLayoutMetricsResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::GetLayoutMetricsResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::GetLayoutMetricsResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::GetNavigationHistoryParams> {
  static std::unique_ptr<page::GetNavigationHistoryParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::GetNavigationHistoryParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::GetNavigationHistoryParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::GetNavigationHistoryResult> {
  static std::unique_ptr<page::GetNavigationHistoryResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::GetNavigationHistoryResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::GetNavigationHistoryResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::ResetNavigationHistoryParams> {
  static std::unique_ptr<page::ResetNavigationHistoryParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::ResetNavigationHistoryParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::ResetNavigationHistoryParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::ResetNavigationHistoryResult> {
  static std::unique_ptr<page::ResetNavigationHistoryResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::ResetNavigationHistoryResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::ResetNavigationHistoryResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::GetResourceContentParams> {
  static std::unique_ptr<page::GetResourceContentParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::GetResourceContentParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::GetResourceContentParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::GetResourceContentResult> {
  static std::unique_ptr<page::GetResourceContentResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::GetResourceContentResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::GetResourceContentResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::GetResourceTreeParams> {
  static std::unique_ptr<page::GetResourceTreeParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::GetResourceTreeParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::GetResourceTreeParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::GetResourceTreeResult> {
  static std::unique_ptr<page::GetResourceTreeResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::GetResourceTreeResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::GetResourceTreeResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::HandleJavaScriptDialogParams> {
  static std::unique_ptr<page::HandleJavaScriptDialogParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::HandleJavaScriptDialogParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::HandleJavaScriptDialogParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::HandleJavaScriptDialogResult> {
  static std::unique_ptr<page::HandleJavaScriptDialogResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::HandleJavaScriptDialogResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::HandleJavaScriptDialogResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::NavigateParams> {
  static std::unique_ptr<page::NavigateParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::NavigateParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::NavigateParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::NavigateResult> {
  static std::unique_ptr<page::NavigateResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::NavigateResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::NavigateResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::NavigateToHistoryEntryParams> {
  static std::unique_ptr<page::NavigateToHistoryEntryParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::NavigateToHistoryEntryParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::NavigateToHistoryEntryParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::NavigateToHistoryEntryResult> {
  static std::unique_ptr<page::NavigateToHistoryEntryResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::NavigateToHistoryEntryResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::NavigateToHistoryEntryResult& value) {
  return value.Serialize();
}

template <>
struct FromValue<page::PrintToPDFTransferMode> {
  static page::PrintToPDFTransferMode Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::PrintToPDFTransferMode::RETURN_AS_BASE64;
    }
    if (value.GetString() == "ReturnAsBase64")
      return page::PrintToPDFTransferMode::RETURN_AS_BASE64;
    if (value.GetString() == "ReturnAsStream")
      return page::PrintToPDFTransferMode::RETURN_AS_STREAM;
    errors->AddError("invalid enum value");
    return page::PrintToPDFTransferMode::RETURN_AS_BASE64;
  }
};

template <>
inline base::Value ToValue(const page::PrintToPDFTransferMode& value) {
  switch (value) {
    case page::PrintToPDFTransferMode::RETURN_AS_BASE64:
      return base::Value("ReturnAsBase64");
    case page::PrintToPDFTransferMode::RETURN_AS_STREAM:
      return base::Value("ReturnAsStream");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<page::PrintToPDFParams> {
  static std::unique_ptr<page::PrintToPDFParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::PrintToPDFParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::PrintToPDFParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::PrintToPDFResult> {
  static std::unique_ptr<page::PrintToPDFResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::PrintToPDFResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::PrintToPDFResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::ReloadParams> {
  static std::unique_ptr<page::ReloadParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::ReloadParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::ReloadParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::ReloadResult> {
  static std::unique_ptr<page::ReloadResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::ReloadResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::ReloadResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::RemoveScriptToEvaluateOnLoadParams> {
  static std::unique_ptr<page::RemoveScriptToEvaluateOnLoadParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::RemoveScriptToEvaluateOnLoadParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::RemoveScriptToEvaluateOnLoadParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::RemoveScriptToEvaluateOnLoadResult> {
  static std::unique_ptr<page::RemoveScriptToEvaluateOnLoadResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::RemoveScriptToEvaluateOnLoadResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::RemoveScriptToEvaluateOnLoadResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::RemoveScriptToEvaluateOnNewDocumentParams> {
  static std::unique_ptr<page::RemoveScriptToEvaluateOnNewDocumentParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::RemoveScriptToEvaluateOnNewDocumentParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::RemoveScriptToEvaluateOnNewDocumentParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::RemoveScriptToEvaluateOnNewDocumentResult> {
  static std::unique_ptr<page::RemoveScriptToEvaluateOnNewDocumentResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::RemoveScriptToEvaluateOnNewDocumentResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::RemoveScriptToEvaluateOnNewDocumentResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::ScreencastFrameAckParams> {
  static std::unique_ptr<page::ScreencastFrameAckParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::ScreencastFrameAckParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::ScreencastFrameAckParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::ScreencastFrameAckResult> {
  static std::unique_ptr<page::ScreencastFrameAckResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::ScreencastFrameAckResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::ScreencastFrameAckResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SearchInResourceParams> {
  static std::unique_ptr<page::SearchInResourceParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SearchInResourceParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SearchInResourceParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SearchInResourceResult> {
  static std::unique_ptr<page::SearchInResourceResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SearchInResourceResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SearchInResourceResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetAdBlockingEnabledParams> {
  static std::unique_ptr<page::SetAdBlockingEnabledParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetAdBlockingEnabledParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetAdBlockingEnabledParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetAdBlockingEnabledResult> {
  static std::unique_ptr<page::SetAdBlockingEnabledResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetAdBlockingEnabledResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetAdBlockingEnabledResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetBypassCSPParams> {
  static std::unique_ptr<page::SetBypassCSPParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetBypassCSPParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetBypassCSPParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetBypassCSPResult> {
  static std::unique_ptr<page::SetBypassCSPResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetBypassCSPResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetBypassCSPResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::GetPermissionsPolicyStateParams> {
  static std::unique_ptr<page::GetPermissionsPolicyStateParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::GetPermissionsPolicyStateParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::GetPermissionsPolicyStateParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::GetPermissionsPolicyStateResult> {
  static std::unique_ptr<page::GetPermissionsPolicyStateResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::GetPermissionsPolicyStateResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::GetPermissionsPolicyStateResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::GetOriginTrialsParams> {
  static std::unique_ptr<page::GetOriginTrialsParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::GetOriginTrialsParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::GetOriginTrialsParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::GetOriginTrialsResult> {
  static std::unique_ptr<page::GetOriginTrialsResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::GetOriginTrialsResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::GetOriginTrialsResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetDeviceMetricsOverrideParams> {
  static std::unique_ptr<page::SetDeviceMetricsOverrideParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetDeviceMetricsOverrideParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetDeviceMetricsOverrideParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetDeviceMetricsOverrideResult> {
  static std::unique_ptr<page::SetDeviceMetricsOverrideResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetDeviceMetricsOverrideResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetDeviceMetricsOverrideResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetDeviceOrientationOverrideParams> {
  static std::unique_ptr<page::SetDeviceOrientationOverrideParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetDeviceOrientationOverrideParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetDeviceOrientationOverrideParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetDeviceOrientationOverrideResult> {
  static std::unique_ptr<page::SetDeviceOrientationOverrideResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetDeviceOrientationOverrideResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetDeviceOrientationOverrideResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetFontFamiliesParams> {
  static std::unique_ptr<page::SetFontFamiliesParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetFontFamiliesParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetFontFamiliesParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetFontFamiliesResult> {
  static std::unique_ptr<page::SetFontFamiliesResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetFontFamiliesResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetFontFamiliesResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetFontSizesParams> {
  static std::unique_ptr<page::SetFontSizesParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetFontSizesParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetFontSizesParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetFontSizesResult> {
  static std::unique_ptr<page::SetFontSizesResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetFontSizesResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetFontSizesResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetDocumentContentParams> {
  static std::unique_ptr<page::SetDocumentContentParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetDocumentContentParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetDocumentContentParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetDocumentContentResult> {
  static std::unique_ptr<page::SetDocumentContentResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetDocumentContentResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetDocumentContentResult& value) {
  return value.Serialize();
}

template <>
struct FromValue<page::SetDownloadBehaviorBehavior> {
  static page::SetDownloadBehaviorBehavior Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::SetDownloadBehaviorBehavior::DENY;
    }
    if (value.GetString() == "deny")
      return page::SetDownloadBehaviorBehavior::DENY;
    if (value.GetString() == "allow")
      return page::SetDownloadBehaviorBehavior::ALLOW;
    if (value.GetString() == "default")
      return page::SetDownloadBehaviorBehavior::DEFAULT;
    errors->AddError("invalid enum value");
    return page::SetDownloadBehaviorBehavior::DENY;
  }
};

template <>
inline base::Value ToValue(const page::SetDownloadBehaviorBehavior& value) {
  switch (value) {
    case page::SetDownloadBehaviorBehavior::DENY:
      return base::Value("deny");
    case page::SetDownloadBehaviorBehavior::ALLOW:
      return base::Value("allow");
    case page::SetDownloadBehaviorBehavior::DEFAULT:
      return base::Value("default");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<page::SetDownloadBehaviorParams> {
  static std::unique_ptr<page::SetDownloadBehaviorParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetDownloadBehaviorParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetDownloadBehaviorParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetDownloadBehaviorResult> {
  static std::unique_ptr<page::SetDownloadBehaviorResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetDownloadBehaviorResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetDownloadBehaviorResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetGeolocationOverrideParams> {
  static std::unique_ptr<page::SetGeolocationOverrideParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetGeolocationOverrideParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetGeolocationOverrideParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetGeolocationOverrideResult> {
  static std::unique_ptr<page::SetGeolocationOverrideResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetGeolocationOverrideResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetGeolocationOverrideResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetLifecycleEventsEnabledParams> {
  static std::unique_ptr<page::SetLifecycleEventsEnabledParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetLifecycleEventsEnabledParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetLifecycleEventsEnabledParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetLifecycleEventsEnabledResult> {
  static std::unique_ptr<page::SetLifecycleEventsEnabledResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetLifecycleEventsEnabledResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetLifecycleEventsEnabledResult& value) {
  return value.Serialize();
}

template <>
struct FromValue<page::SetTouchEmulationEnabledConfiguration> {
  static page::SetTouchEmulationEnabledConfiguration Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::SetTouchEmulationEnabledConfiguration::MOBILE;
    }
    if (value.GetString() == "mobile")
      return page::SetTouchEmulationEnabledConfiguration::MOBILE;
    if (value.GetString() == "desktop")
      return page::SetTouchEmulationEnabledConfiguration::DESKTOP;
    errors->AddError("invalid enum value");
    return page::SetTouchEmulationEnabledConfiguration::MOBILE;
  }
};

template <>
inline base::Value ToValue(const page::SetTouchEmulationEnabledConfiguration& value) {
  switch (value) {
    case page::SetTouchEmulationEnabledConfiguration::MOBILE:
      return base::Value("mobile");
    case page::SetTouchEmulationEnabledConfiguration::DESKTOP:
      return base::Value("desktop");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<page::SetTouchEmulationEnabledParams> {
  static std::unique_ptr<page::SetTouchEmulationEnabledParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetTouchEmulationEnabledParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetTouchEmulationEnabledParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetTouchEmulationEnabledResult> {
  static std::unique_ptr<page::SetTouchEmulationEnabledResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetTouchEmulationEnabledResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetTouchEmulationEnabledResult& value) {
  return value.Serialize();
}

template <>
struct FromValue<page::StartScreencastFormat> {
  static page::StartScreencastFormat Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::StartScreencastFormat::JPEG;
    }
    if (value.GetString() == "jpeg")
      return page::StartScreencastFormat::JPEG;
    if (value.GetString() == "png")
      return page::StartScreencastFormat::PNG;
    errors->AddError("invalid enum value");
    return page::StartScreencastFormat::JPEG;
  }
};

template <>
inline base::Value ToValue(const page::StartScreencastFormat& value) {
  switch (value) {
    case page::StartScreencastFormat::JPEG:
      return base::Value("jpeg");
    case page::StartScreencastFormat::PNG:
      return base::Value("png");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<page::StartScreencastParams> {
  static std::unique_ptr<page::StartScreencastParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::StartScreencastParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::StartScreencastParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::StartScreencastResult> {
  static std::unique_ptr<page::StartScreencastResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::StartScreencastResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::StartScreencastResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::StopLoadingParams> {
  static std::unique_ptr<page::StopLoadingParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::StopLoadingParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::StopLoadingParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::StopLoadingResult> {
  static std::unique_ptr<page::StopLoadingResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::StopLoadingResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::StopLoadingResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::CrashParams> {
  static std::unique_ptr<page::CrashParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::CrashParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::CrashParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::CrashResult> {
  static std::unique_ptr<page::CrashResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::CrashResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::CrashResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::CloseParams> {
  static std::unique_ptr<page::CloseParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::CloseParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::CloseParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::CloseResult> {
  static std::unique_ptr<page::CloseResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::CloseResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::CloseResult& value) {
  return value.Serialize();
}

template <>
struct FromValue<page::SetWebLifecycleStateState> {
  static page::SetWebLifecycleStateState Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::SetWebLifecycleStateState::FROZEN;
    }
    if (value.GetString() == "frozen")
      return page::SetWebLifecycleStateState::FROZEN;
    if (value.GetString() == "active")
      return page::SetWebLifecycleStateState::ACTIVE;
    errors->AddError("invalid enum value");
    return page::SetWebLifecycleStateState::FROZEN;
  }
};

template <>
inline base::Value ToValue(const page::SetWebLifecycleStateState& value) {
  switch (value) {
    case page::SetWebLifecycleStateState::FROZEN:
      return base::Value("frozen");
    case page::SetWebLifecycleStateState::ACTIVE:
      return base::Value("active");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<page::SetWebLifecycleStateParams> {
  static std::unique_ptr<page::SetWebLifecycleStateParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetWebLifecycleStateParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetWebLifecycleStateParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetWebLifecycleStateResult> {
  static std::unique_ptr<page::SetWebLifecycleStateResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetWebLifecycleStateResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetWebLifecycleStateResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::StopScreencastParams> {
  static std::unique_ptr<page::StopScreencastParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::StopScreencastParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::StopScreencastParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::StopScreencastResult> {
  static std::unique_ptr<page::StopScreencastResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::StopScreencastResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::StopScreencastResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::ProduceCompilationCacheParams> {
  static std::unique_ptr<page::ProduceCompilationCacheParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::ProduceCompilationCacheParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::ProduceCompilationCacheParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::ProduceCompilationCacheResult> {
  static std::unique_ptr<page::ProduceCompilationCacheResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::ProduceCompilationCacheResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::ProduceCompilationCacheResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::AddCompilationCacheParams> {
  static std::unique_ptr<page::AddCompilationCacheParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::AddCompilationCacheParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::AddCompilationCacheParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::AddCompilationCacheResult> {
  static std::unique_ptr<page::AddCompilationCacheResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::AddCompilationCacheResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::AddCompilationCacheResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::ClearCompilationCacheParams> {
  static std::unique_ptr<page::ClearCompilationCacheParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::ClearCompilationCacheParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::ClearCompilationCacheParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::ClearCompilationCacheResult> {
  static std::unique_ptr<page::ClearCompilationCacheResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::ClearCompilationCacheResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::ClearCompilationCacheResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetSPCTransactionModeParams> {
  static std::unique_ptr<page::SetSPCTransactionModeParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetSPCTransactionModeParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetSPCTransactionModeParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetSPCTransactionModeResult> {
  static std::unique_ptr<page::SetSPCTransactionModeResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetSPCTransactionModeResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetSPCTransactionModeResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetRPHRegistrationModeParams> {
  static std::unique_ptr<page::SetRPHRegistrationModeParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetRPHRegistrationModeParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetRPHRegistrationModeParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetRPHRegistrationModeResult> {
  static std::unique_ptr<page::SetRPHRegistrationModeResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetRPHRegistrationModeResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetRPHRegistrationModeResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::GenerateTestReportParams> {
  static std::unique_ptr<page::GenerateTestReportParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::GenerateTestReportParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::GenerateTestReportParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::GenerateTestReportResult> {
  static std::unique_ptr<page::GenerateTestReportResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::GenerateTestReportResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::GenerateTestReportResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::WaitForDebuggerParams> {
  static std::unique_ptr<page::WaitForDebuggerParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::WaitForDebuggerParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::WaitForDebuggerParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::WaitForDebuggerResult> {
  static std::unique_ptr<page::WaitForDebuggerResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::WaitForDebuggerResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::WaitForDebuggerResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetInterceptFileChooserDialogParams> {
  static std::unique_ptr<page::SetInterceptFileChooserDialogParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetInterceptFileChooserDialogParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetInterceptFileChooserDialogParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetInterceptFileChooserDialogResult> {
  static std::unique_ptr<page::SetInterceptFileChooserDialogResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetInterceptFileChooserDialogResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetInterceptFileChooserDialogResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetPrerenderingAllowedParams> {
  static std::unique_ptr<page::SetPrerenderingAllowedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetPrerenderingAllowedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetPrerenderingAllowedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::SetPrerenderingAllowedResult> {
  static std::unique_ptr<page::SetPrerenderingAllowedResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::SetPrerenderingAllowedResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::SetPrerenderingAllowedResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::DomContentEventFiredParams> {
  static std::unique_ptr<page::DomContentEventFiredParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::DomContentEventFiredParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::DomContentEventFiredParams& value) {
  return value.Serialize();
}

template <>
struct FromValue<page::FileChooserOpenedMode> {
  static page::FileChooserOpenedMode Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::FileChooserOpenedMode::SELECT_SINGLE;
    }
    if (value.GetString() == "selectSingle")
      return page::FileChooserOpenedMode::SELECT_SINGLE;
    if (value.GetString() == "selectMultiple")
      return page::FileChooserOpenedMode::SELECT_MULTIPLE;
    errors->AddError("invalid enum value");
    return page::FileChooserOpenedMode::SELECT_SINGLE;
  }
};

template <>
inline base::Value ToValue(const page::FileChooserOpenedMode& value) {
  switch (value) {
    case page::FileChooserOpenedMode::SELECT_SINGLE:
      return base::Value("selectSingle");
    case page::FileChooserOpenedMode::SELECT_MULTIPLE:
      return base::Value("selectMultiple");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<page::FileChooserOpenedParams> {
  static std::unique_ptr<page::FileChooserOpenedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::FileChooserOpenedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::FileChooserOpenedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::FrameAttachedParams> {
  static std::unique_ptr<page::FrameAttachedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::FrameAttachedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::FrameAttachedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::FrameClearedScheduledNavigationParams> {
  static std::unique_ptr<page::FrameClearedScheduledNavigationParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::FrameClearedScheduledNavigationParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::FrameClearedScheduledNavigationParams& value) {
  return value.Serialize();
}

template <>
struct FromValue<page::FrameDetachedReason> {
  static page::FrameDetachedReason Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::FrameDetachedReason::REMOVE;
    }
    if (value.GetString() == "remove")
      return page::FrameDetachedReason::REMOVE;
    if (value.GetString() == "swap")
      return page::FrameDetachedReason::SWAP;
    errors->AddError("invalid enum value");
    return page::FrameDetachedReason::REMOVE;
  }
};

template <>
inline base::Value ToValue(const page::FrameDetachedReason& value) {
  switch (value) {
    case page::FrameDetachedReason::REMOVE:
      return base::Value("remove");
    case page::FrameDetachedReason::SWAP:
      return base::Value("swap");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<page::FrameDetachedParams> {
  static std::unique_ptr<page::FrameDetachedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::FrameDetachedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::FrameDetachedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::FrameNavigatedParams> {
  static std::unique_ptr<page::FrameNavigatedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::FrameNavigatedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::FrameNavigatedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::DocumentOpenedParams> {
  static std::unique_ptr<page::DocumentOpenedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::DocumentOpenedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::DocumentOpenedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::FrameResizedParams> {
  static std::unique_ptr<page::FrameResizedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::FrameResizedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::FrameResizedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::FrameRequestedNavigationParams> {
  static std::unique_ptr<page::FrameRequestedNavigationParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::FrameRequestedNavigationParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::FrameRequestedNavigationParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::FrameScheduledNavigationParams> {
  static std::unique_ptr<page::FrameScheduledNavigationParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::FrameScheduledNavigationParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::FrameScheduledNavigationParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::FrameStartedLoadingParams> {
  static std::unique_ptr<page::FrameStartedLoadingParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::FrameStartedLoadingParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::FrameStartedLoadingParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::FrameStoppedLoadingParams> {
  static std::unique_ptr<page::FrameStoppedLoadingParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::FrameStoppedLoadingParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::FrameStoppedLoadingParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::DownloadWillBeginParams> {
  static std::unique_ptr<page::DownloadWillBeginParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::DownloadWillBeginParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::DownloadWillBeginParams& value) {
  return value.Serialize();
}

template <>
struct FromValue<page::DownloadProgressState> {
  static page::DownloadProgressState Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return page::DownloadProgressState::IN_PROGRESS;
    }
    if (value.GetString() == "inProgress")
      return page::DownloadProgressState::IN_PROGRESS;
    if (value.GetString() == "completed")
      return page::DownloadProgressState::COMPLETED;
    if (value.GetString() == "canceled")
      return page::DownloadProgressState::CANCELED;
    errors->AddError("invalid enum value");
    return page::DownloadProgressState::IN_PROGRESS;
  }
};

template <>
inline base::Value ToValue(const page::DownloadProgressState& value) {
  switch (value) {
    case page::DownloadProgressState::IN_PROGRESS:
      return base::Value("inProgress");
    case page::DownloadProgressState::COMPLETED:
      return base::Value("completed");
    case page::DownloadProgressState::CANCELED:
      return base::Value("canceled");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<page::DownloadProgressParams> {
  static std::unique_ptr<page::DownloadProgressParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::DownloadProgressParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::DownloadProgressParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::InterstitialHiddenParams> {
  static std::unique_ptr<page::InterstitialHiddenParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::InterstitialHiddenParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::InterstitialHiddenParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::InterstitialShownParams> {
  static std::unique_ptr<page::InterstitialShownParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::InterstitialShownParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::InterstitialShownParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::JavascriptDialogClosedParams> {
  static std::unique_ptr<page::JavascriptDialogClosedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::JavascriptDialogClosedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::JavascriptDialogClosedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::JavascriptDialogOpeningParams> {
  static std::unique_ptr<page::JavascriptDialogOpeningParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::JavascriptDialogOpeningParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::JavascriptDialogOpeningParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::LifecycleEventParams> {
  static std::unique_ptr<page::LifecycleEventParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::LifecycleEventParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::LifecycleEventParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::BackForwardCacheNotUsedParams> {
  static std::unique_ptr<page::BackForwardCacheNotUsedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::BackForwardCacheNotUsedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::BackForwardCacheNotUsedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::LoadEventFiredParams> {
  static std::unique_ptr<page::LoadEventFiredParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::LoadEventFiredParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::LoadEventFiredParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::NavigatedWithinDocumentParams> {
  static std::unique_ptr<page::NavigatedWithinDocumentParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::NavigatedWithinDocumentParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::NavigatedWithinDocumentParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::ScreencastFrameParams> {
  static std::unique_ptr<page::ScreencastFrameParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::ScreencastFrameParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::ScreencastFrameParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::ScreencastVisibilityChangedParams> {
  static std::unique_ptr<page::ScreencastVisibilityChangedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::ScreencastVisibilityChangedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::ScreencastVisibilityChangedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::WindowOpenParams> {
  static std::unique_ptr<page::WindowOpenParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::WindowOpenParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::WindowOpenParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<page::CompilationCacheProducedParams> {
  static std::unique_ptr<page::CompilationCacheProducedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return page::CompilationCacheProducedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const page::CompilationCacheProducedParams& value) {
  return value.Serialize();
}


}  // namespace internal
}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_PAGE_H_
