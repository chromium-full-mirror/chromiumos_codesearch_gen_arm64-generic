// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPES_FORWARD_DECLARATIONS_BROWSER_H_
#define HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPES_FORWARD_DECLARATIONS_BROWSER_H_

#include "base/values.h"

namespace headless {

namespace browser {
class Bounds;
class PermissionDescriptor;
class Bucket;
class Histogram;
class SetPermissionParams;
class SetPermissionResult;
class GrantPermissionsParams;
class GrantPermissionsResult;
class ResetPermissionsParams;
class ResetPermissionsResult;
class SetDownloadBehaviorParams;
class SetDownloadBehaviorResult;
class CancelDownloadParams;
class CancelDownloadResult;
class CloseParams;
class CloseResult;
class CrashParams;
class CrashResult;
class CrashGpuProcessParams;
class CrashGpuProcessResult;
class GetVersionParams;
class GetVersionResult;
class GetBrowserCommandLineParams;
class GetBrowserCommandLineResult;
class GetHistogramsParams;
class GetHistogramsResult;
class GetHistogramParams;
class GetHistogramResult;
class GetWindowBoundsParams;
class GetWindowBoundsResult;
class GetWindowForTargetParams;
class GetWindowForTargetResult;
class SetWindowBoundsParams;
class SetWindowBoundsResult;
class SetDockTileParams;
class SetDockTileResult;
class ExecuteBrowserCommandParams;
class ExecuteBrowserCommandResult;
class AddPrivacySandboxEnrollmentOverrideParams;
class AddPrivacySandboxEnrollmentOverrideResult;
class DownloadWillBeginParams;
class DownloadProgressParams;

enum class WindowState {
  NORMAL,
  MINIMIZED,
  MAXIMIZED,
  FULLSCREEN
};

enum class PermissionType {
  ACCESSIBILITY_EVENTS,
  AUDIO_CAPTURE,
  BACKGROUND_SYNC,
  BACKGROUND_FETCH,
  CLIPBOARD_READ_WRITE,
  CLIPBOARD_SANITIZED_WRITE,
  DISPLAY_CAPTURE,
  DURABLE_STORAGE,
  FLASH,
  GEOLOCATION,
  IDLE_DETECTION,
  LOCAL_FONTS,
  MIDI,
  MIDI_SYSEX,
  NFC,
  NOTIFICATIONS,
  PAYMENT_HANDLER,
  PERIODIC_BACKGROUND_SYNC,
  PROTECTED_MEDIA_IDENTIFIER,
  SENSORS,
  STORAGE_ACCESS,
  TOP_LEVEL_STORAGE_ACCESS,
  VIDEO_CAPTURE,
  VIDEO_CAPTURE_PAN_TILT_ZOOM,
  WAKE_LOCK_SCREEN,
  WAKE_LOCK_SYSTEM,
  WINDOW_MANAGEMENT
};

enum class PermissionSetting {
  GRANTED,
  DENIED,
  PROMPT
};

enum class BrowserCommandId {
  OPEN_TAB_SEARCH,
  CLOSE_TAB_SEARCH
};

enum class SetDownloadBehaviorBehavior {
  DENY,
  ALLOW,
  ALLOW_AND_NAME,
  DEFAULT
};

enum class DownloadProgressState {
  IN_PROGRESS,
  COMPLETED,
  CANCELED
};

}  // namespace browser

}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPES_FORWARD_DECLARATIONS_BROWSER_H_
