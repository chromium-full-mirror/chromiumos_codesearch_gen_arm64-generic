// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_BROWSER_H_
#define HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_BROWSER_H_

#include "base/notreached.h"
#include "base/values.h"
#include "headless/public/devtools/domains/types_browser.h"
#include "headless/public/internal/value_conversions.h"

namespace headless {
namespace internal {



template <>
struct FromValue<browser::WindowState> {
  static browser::WindowState Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return browser::WindowState::NORMAL;
    }
    if (value.GetString() == "normal")
      return browser::WindowState::NORMAL;
    if (value.GetString() == "minimized")
      return browser::WindowState::MINIMIZED;
    if (value.GetString() == "maximized")
      return browser::WindowState::MAXIMIZED;
    if (value.GetString() == "fullscreen")
      return browser::WindowState::FULLSCREEN;
    errors->AddError("invalid enum value");
    return browser::WindowState::NORMAL;
  }
};

template <>
inline base::Value ToValue(const browser::WindowState& value) {
  switch (value) {
    case browser::WindowState::NORMAL:
      return base::Value("normal");
    case browser::WindowState::MINIMIZED:
      return base::Value("minimized");
    case browser::WindowState::MAXIMIZED:
      return base::Value("maximized");
    case browser::WindowState::FULLSCREEN:
      return base::Value("fullscreen");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<browser::Bounds> {
  static std::unique_ptr<browser::Bounds> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::Bounds::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::Bounds& value) {
  return value.Serialize();
}

template <>
struct FromValue<browser::PermissionType> {
  static browser::PermissionType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return browser::PermissionType::ACCESSIBILITY_EVENTS;
    }
    if (value.GetString() == "accessibilityEvents")
      return browser::PermissionType::ACCESSIBILITY_EVENTS;
    if (value.GetString() == "audioCapture")
      return browser::PermissionType::AUDIO_CAPTURE;
    if (value.GetString() == "backgroundSync")
      return browser::PermissionType::BACKGROUND_SYNC;
    if (value.GetString() == "backgroundFetch")
      return browser::PermissionType::BACKGROUND_FETCH;
    if (value.GetString() == "capturedSurfaceControl")
      return browser::PermissionType::CAPTURED_SURFACE_CONTROL;
    if (value.GetString() == "clipboardReadWrite")
      return browser::PermissionType::CLIPBOARD_READ_WRITE;
    if (value.GetString() == "clipboardSanitizedWrite")
      return browser::PermissionType::CLIPBOARD_SANITIZED_WRITE;
    if (value.GetString() == "displayCapture")
      return browser::PermissionType::DISPLAY_CAPTURE;
    if (value.GetString() == "durableStorage")
      return browser::PermissionType::DURABLE_STORAGE;
    if (value.GetString() == "flash")
      return browser::PermissionType::FLASH;
    if (value.GetString() == "geolocation")
      return browser::PermissionType::GEOLOCATION;
    if (value.GetString() == "idleDetection")
      return browser::PermissionType::IDLE_DETECTION;
    if (value.GetString() == "localFonts")
      return browser::PermissionType::LOCAL_FONTS;
    if (value.GetString() == "midi")
      return browser::PermissionType::MIDI;
    if (value.GetString() == "midiSysex")
      return browser::PermissionType::MIDI_SYSEX;
    if (value.GetString() == "nfc")
      return browser::PermissionType::NFC;
    if (value.GetString() == "notifications")
      return browser::PermissionType::NOTIFICATIONS;
    if (value.GetString() == "paymentHandler")
      return browser::PermissionType::PAYMENT_HANDLER;
    if (value.GetString() == "periodicBackgroundSync")
      return browser::PermissionType::PERIODIC_BACKGROUND_SYNC;
    if (value.GetString() == "protectedMediaIdentifier")
      return browser::PermissionType::PROTECTED_MEDIA_IDENTIFIER;
    if (value.GetString() == "sensors")
      return browser::PermissionType::SENSORS;
    if (value.GetString() == "storageAccess")
      return browser::PermissionType::STORAGE_ACCESS;
    if (value.GetString() == "topLevelStorageAccess")
      return browser::PermissionType::TOP_LEVEL_STORAGE_ACCESS;
    if (value.GetString() == "videoCapture")
      return browser::PermissionType::VIDEO_CAPTURE;
    if (value.GetString() == "videoCapturePanTiltZoom")
      return browser::PermissionType::VIDEO_CAPTURE_PAN_TILT_ZOOM;
    if (value.GetString() == "wakeLockScreen")
      return browser::PermissionType::WAKE_LOCK_SCREEN;
    if (value.GetString() == "wakeLockSystem")
      return browser::PermissionType::WAKE_LOCK_SYSTEM;
    if (value.GetString() == "windowManagement")
      return browser::PermissionType::WINDOW_MANAGEMENT;
    errors->AddError("invalid enum value");
    return browser::PermissionType::ACCESSIBILITY_EVENTS;
  }
};

template <>
inline base::Value ToValue(const browser::PermissionType& value) {
  switch (value) {
    case browser::PermissionType::ACCESSIBILITY_EVENTS:
      return base::Value("accessibilityEvents");
    case browser::PermissionType::AUDIO_CAPTURE:
      return base::Value("audioCapture");
    case browser::PermissionType::BACKGROUND_SYNC:
      return base::Value("backgroundSync");
    case browser::PermissionType::BACKGROUND_FETCH:
      return base::Value("backgroundFetch");
    case browser::PermissionType::CAPTURED_SURFACE_CONTROL:
      return base::Value("capturedSurfaceControl");
    case browser::PermissionType::CLIPBOARD_READ_WRITE:
      return base::Value("clipboardReadWrite");
    case browser::PermissionType::CLIPBOARD_SANITIZED_WRITE:
      return base::Value("clipboardSanitizedWrite");
    case browser::PermissionType::DISPLAY_CAPTURE:
      return base::Value("displayCapture");
    case browser::PermissionType::DURABLE_STORAGE:
      return base::Value("durableStorage");
    case browser::PermissionType::FLASH:
      return base::Value("flash");
    case browser::PermissionType::GEOLOCATION:
      return base::Value("geolocation");
    case browser::PermissionType::IDLE_DETECTION:
      return base::Value("idleDetection");
    case browser::PermissionType::LOCAL_FONTS:
      return base::Value("localFonts");
    case browser::PermissionType::MIDI:
      return base::Value("midi");
    case browser::PermissionType::MIDI_SYSEX:
      return base::Value("midiSysex");
    case browser::PermissionType::NFC:
      return base::Value("nfc");
    case browser::PermissionType::NOTIFICATIONS:
      return base::Value("notifications");
    case browser::PermissionType::PAYMENT_HANDLER:
      return base::Value("paymentHandler");
    case browser::PermissionType::PERIODIC_BACKGROUND_SYNC:
      return base::Value("periodicBackgroundSync");
    case browser::PermissionType::PROTECTED_MEDIA_IDENTIFIER:
      return base::Value("protectedMediaIdentifier");
    case browser::PermissionType::SENSORS:
      return base::Value("sensors");
    case browser::PermissionType::STORAGE_ACCESS:
      return base::Value("storageAccess");
    case browser::PermissionType::TOP_LEVEL_STORAGE_ACCESS:
      return base::Value("topLevelStorageAccess");
    case browser::PermissionType::VIDEO_CAPTURE:
      return base::Value("videoCapture");
    case browser::PermissionType::VIDEO_CAPTURE_PAN_TILT_ZOOM:
      return base::Value("videoCapturePanTiltZoom");
    case browser::PermissionType::WAKE_LOCK_SCREEN:
      return base::Value("wakeLockScreen");
    case browser::PermissionType::WAKE_LOCK_SYSTEM:
      return base::Value("wakeLockSystem");
    case browser::PermissionType::WINDOW_MANAGEMENT:
      return base::Value("windowManagement");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<browser::PermissionSetting> {
  static browser::PermissionSetting Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return browser::PermissionSetting::GRANTED;
    }
    if (value.GetString() == "granted")
      return browser::PermissionSetting::GRANTED;
    if (value.GetString() == "denied")
      return browser::PermissionSetting::DENIED;
    if (value.GetString() == "prompt")
      return browser::PermissionSetting::PROMPT;
    errors->AddError("invalid enum value");
    return browser::PermissionSetting::GRANTED;
  }
};

template <>
inline base::Value ToValue(const browser::PermissionSetting& value) {
  switch (value) {
    case browser::PermissionSetting::GRANTED:
      return base::Value("granted");
    case browser::PermissionSetting::DENIED:
      return base::Value("denied");
    case browser::PermissionSetting::PROMPT:
      return base::Value("prompt");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<browser::PermissionDescriptor> {
  static std::unique_ptr<browser::PermissionDescriptor> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::PermissionDescriptor::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::PermissionDescriptor& value) {
  return value.Serialize();
}

template <>
struct FromValue<browser::BrowserCommandId> {
  static browser::BrowserCommandId Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return browser::BrowserCommandId::OPEN_TAB_SEARCH;
    }
    if (value.GetString() == "openTabSearch")
      return browser::BrowserCommandId::OPEN_TAB_SEARCH;
    if (value.GetString() == "closeTabSearch")
      return browser::BrowserCommandId::CLOSE_TAB_SEARCH;
    errors->AddError("invalid enum value");
    return browser::BrowserCommandId::OPEN_TAB_SEARCH;
  }
};

template <>
inline base::Value ToValue(const browser::BrowserCommandId& value) {
  switch (value) {
    case browser::BrowserCommandId::OPEN_TAB_SEARCH:
      return base::Value("openTabSearch");
    case browser::BrowserCommandId::CLOSE_TAB_SEARCH:
      return base::Value("closeTabSearch");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<browser::Bucket> {
  static std::unique_ptr<browser::Bucket> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::Bucket::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::Bucket& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::Histogram> {
  static std::unique_ptr<browser::Histogram> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::Histogram::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::Histogram& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::SetPermissionParams> {
  static std::unique_ptr<browser::SetPermissionParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::SetPermissionParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::SetPermissionParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::SetPermissionResult> {
  static std::unique_ptr<browser::SetPermissionResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::SetPermissionResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::SetPermissionResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::GrantPermissionsParams> {
  static std::unique_ptr<browser::GrantPermissionsParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::GrantPermissionsParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::GrantPermissionsParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::GrantPermissionsResult> {
  static std::unique_ptr<browser::GrantPermissionsResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::GrantPermissionsResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::GrantPermissionsResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::ResetPermissionsParams> {
  static std::unique_ptr<browser::ResetPermissionsParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::ResetPermissionsParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::ResetPermissionsParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::ResetPermissionsResult> {
  static std::unique_ptr<browser::ResetPermissionsResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::ResetPermissionsResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::ResetPermissionsResult& value) {
  return value.Serialize();
}

template <>
struct FromValue<browser::SetDownloadBehaviorBehavior> {
  static browser::SetDownloadBehaviorBehavior Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return browser::SetDownloadBehaviorBehavior::DENY;
    }
    if (value.GetString() == "deny")
      return browser::SetDownloadBehaviorBehavior::DENY;
    if (value.GetString() == "allow")
      return browser::SetDownloadBehaviorBehavior::ALLOW;
    if (value.GetString() == "allowAndName")
      return browser::SetDownloadBehaviorBehavior::ALLOW_AND_NAME;
    if (value.GetString() == "default")
      return browser::SetDownloadBehaviorBehavior::DEFAULT;
    errors->AddError("invalid enum value");
    return browser::SetDownloadBehaviorBehavior::DENY;
  }
};

template <>
inline base::Value ToValue(const browser::SetDownloadBehaviorBehavior& value) {
  switch (value) {
    case browser::SetDownloadBehaviorBehavior::DENY:
      return base::Value("deny");
    case browser::SetDownloadBehaviorBehavior::ALLOW:
      return base::Value("allow");
    case browser::SetDownloadBehaviorBehavior::ALLOW_AND_NAME:
      return base::Value("allowAndName");
    case browser::SetDownloadBehaviorBehavior::DEFAULT:
      return base::Value("default");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<browser::SetDownloadBehaviorParams> {
  static std::unique_ptr<browser::SetDownloadBehaviorParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::SetDownloadBehaviorParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::SetDownloadBehaviorParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::SetDownloadBehaviorResult> {
  static std::unique_ptr<browser::SetDownloadBehaviorResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::SetDownloadBehaviorResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::SetDownloadBehaviorResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::CancelDownloadParams> {
  static std::unique_ptr<browser::CancelDownloadParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::CancelDownloadParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::CancelDownloadParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::CancelDownloadResult> {
  static std::unique_ptr<browser::CancelDownloadResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::CancelDownloadResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::CancelDownloadResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::CloseParams> {
  static std::unique_ptr<browser::CloseParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::CloseParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::CloseParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::CloseResult> {
  static std::unique_ptr<browser::CloseResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::CloseResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::CloseResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::CrashParams> {
  static std::unique_ptr<browser::CrashParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::CrashParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::CrashParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::CrashResult> {
  static std::unique_ptr<browser::CrashResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::CrashResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::CrashResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::CrashGpuProcessParams> {
  static std::unique_ptr<browser::CrashGpuProcessParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::CrashGpuProcessParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::CrashGpuProcessParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::CrashGpuProcessResult> {
  static std::unique_ptr<browser::CrashGpuProcessResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::CrashGpuProcessResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::CrashGpuProcessResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::GetVersionParams> {
  static std::unique_ptr<browser::GetVersionParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::GetVersionParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::GetVersionParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::GetVersionResult> {
  static std::unique_ptr<browser::GetVersionResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::GetVersionResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::GetVersionResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::GetBrowserCommandLineParams> {
  static std::unique_ptr<browser::GetBrowserCommandLineParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::GetBrowserCommandLineParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::GetBrowserCommandLineParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::GetBrowserCommandLineResult> {
  static std::unique_ptr<browser::GetBrowserCommandLineResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::GetBrowserCommandLineResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::GetBrowserCommandLineResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::GetHistogramsParams> {
  static std::unique_ptr<browser::GetHistogramsParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::GetHistogramsParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::GetHistogramsParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::GetHistogramsResult> {
  static std::unique_ptr<browser::GetHistogramsResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::GetHistogramsResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::GetHistogramsResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::GetHistogramParams> {
  static std::unique_ptr<browser::GetHistogramParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::GetHistogramParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::GetHistogramParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::GetHistogramResult> {
  static std::unique_ptr<browser::GetHistogramResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::GetHistogramResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::GetHistogramResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::GetWindowBoundsParams> {
  static std::unique_ptr<browser::GetWindowBoundsParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::GetWindowBoundsParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::GetWindowBoundsParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::GetWindowBoundsResult> {
  static std::unique_ptr<browser::GetWindowBoundsResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::GetWindowBoundsResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::GetWindowBoundsResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::GetWindowForTargetParams> {
  static std::unique_ptr<browser::GetWindowForTargetParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::GetWindowForTargetParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::GetWindowForTargetParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::GetWindowForTargetResult> {
  static std::unique_ptr<browser::GetWindowForTargetResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::GetWindowForTargetResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::GetWindowForTargetResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::SetWindowBoundsParams> {
  static std::unique_ptr<browser::SetWindowBoundsParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::SetWindowBoundsParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::SetWindowBoundsParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::SetWindowBoundsResult> {
  static std::unique_ptr<browser::SetWindowBoundsResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::SetWindowBoundsResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::SetWindowBoundsResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::SetDockTileParams> {
  static std::unique_ptr<browser::SetDockTileParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::SetDockTileParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::SetDockTileParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::SetDockTileResult> {
  static std::unique_ptr<browser::SetDockTileResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::SetDockTileResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::SetDockTileResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::ExecuteBrowserCommandParams> {
  static std::unique_ptr<browser::ExecuteBrowserCommandParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::ExecuteBrowserCommandParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::ExecuteBrowserCommandParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::ExecuteBrowserCommandResult> {
  static std::unique_ptr<browser::ExecuteBrowserCommandResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::ExecuteBrowserCommandResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::ExecuteBrowserCommandResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::AddPrivacySandboxEnrollmentOverrideParams> {
  static std::unique_ptr<browser::AddPrivacySandboxEnrollmentOverrideParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::AddPrivacySandboxEnrollmentOverrideParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::AddPrivacySandboxEnrollmentOverrideParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::AddPrivacySandboxEnrollmentOverrideResult> {
  static std::unique_ptr<browser::AddPrivacySandboxEnrollmentOverrideResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::AddPrivacySandboxEnrollmentOverrideResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::AddPrivacySandboxEnrollmentOverrideResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<browser::DownloadWillBeginParams> {
  static std::unique_ptr<browser::DownloadWillBeginParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::DownloadWillBeginParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::DownloadWillBeginParams& value) {
  return value.Serialize();
}

template <>
struct FromValue<browser::DownloadProgressState> {
  static browser::DownloadProgressState Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return browser::DownloadProgressState::IN_PROGRESS;
    }
    if (value.GetString() == "inProgress")
      return browser::DownloadProgressState::IN_PROGRESS;
    if (value.GetString() == "completed")
      return browser::DownloadProgressState::COMPLETED;
    if (value.GetString() == "canceled")
      return browser::DownloadProgressState::CANCELED;
    errors->AddError("invalid enum value");
    return browser::DownloadProgressState::IN_PROGRESS;
  }
};

template <>
inline base::Value ToValue(const browser::DownloadProgressState& value) {
  switch (value) {
    case browser::DownloadProgressState::IN_PROGRESS:
      return base::Value("inProgress");
    case browser::DownloadProgressState::COMPLETED:
      return base::Value("completed");
    case browser::DownloadProgressState::CANCELED:
      return base::Value("canceled");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<browser::DownloadProgressParams> {
  static std::unique_ptr<browser::DownloadProgressParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return browser::DownloadProgressParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const browser::DownloadProgressParams& value) {
  return value.Serialize();
}


}  // namespace internal
}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_BROWSER_H_
