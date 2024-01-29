// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/autotest_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/autotest_private.h"

#include <memory>
#include <optional>
#include <ostream>
#include <string>
#include <utility>
#include <vector>

#include "base/check.h"
#include "base/check_op.h"
#include "base/notreached.h"
#include "base/strings/string_number_conversions.h"
#include "base/strings/utf_string_conversions.h"
#include "base/values.h"
#include "tools/json_schema_compiler/util.h"
#include "base/strings/string_piece.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace autotest_private {
//
// Types
//

const char* ToString(ShelfAlignmentType enum_param) {
  switch (enum_param) {
    case ShelfAlignmentType::kBottom:
      return "Bottom";
    case ShelfAlignmentType::kLeft:
      return "Left";
    case ShelfAlignmentType::kRight:
      return "Right";
    case ShelfAlignmentType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ShelfAlignmentType ParseShelfAlignmentType(base::StringPiece enum_string) {
  if (enum_string == "Bottom")
    return ShelfAlignmentType::kBottom;
  if (enum_string == "Left")
    return ShelfAlignmentType::kLeft;
  if (enum_string == "Right")
    return ShelfAlignmentType::kRight;
  return ShelfAlignmentType::kNone;
}

std::u16string GetShelfAlignmentTypeParseError(base::StringPiece enum_string) {
  return u"expected \"Bottom\" or \"Left\" or \"Right\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ShelfItemType enum_param) {
  switch (enum_param) {
    case ShelfItemType::kPinnedApp:
      return "PinnedApp";
    case ShelfItemType::kBrowserShortcut:
      return "BrowserShortcut";
    case ShelfItemType::kApp:
      return "App";
    case ShelfItemType::kUnpinnedBrowserShortcut:
      return "UnpinnedBrowserShortcut";
    case ShelfItemType::kDialog:
      return "Dialog";
    case ShelfItemType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ShelfItemType ParseShelfItemType(base::StringPiece enum_string) {
  if (enum_string == "PinnedApp")
    return ShelfItemType::kPinnedApp;
  if (enum_string == "BrowserShortcut")
    return ShelfItemType::kBrowserShortcut;
  if (enum_string == "App")
    return ShelfItemType::kApp;
  if (enum_string == "UnpinnedBrowserShortcut")
    return ShelfItemType::kUnpinnedBrowserShortcut;
  if (enum_string == "Dialog")
    return ShelfItemType::kDialog;
  return ShelfItemType::kNone;
}

std::u16string GetShelfItemTypeParseError(base::StringPiece enum_string) {
  return u"expected \"PinnedApp\" or \"BrowserShortcut\" or \"App\" or \"UnpinnedBrowserShortcut\" or \"Dialog\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ShelfItemStatus enum_param) {
  switch (enum_param) {
    case ShelfItemStatus::kClosed:
      return "Closed";
    case ShelfItemStatus::kRunning:
      return "Running";
    case ShelfItemStatus::kAttention:
      return "Attention";
    case ShelfItemStatus::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ShelfItemStatus ParseShelfItemStatus(base::StringPiece enum_string) {
  if (enum_string == "Closed")
    return ShelfItemStatus::kClosed;
  if (enum_string == "Running")
    return ShelfItemStatus::kRunning;
  if (enum_string == "Attention")
    return ShelfItemStatus::kAttention;
  return ShelfItemStatus::kNone;
}

std::u16string GetShelfItemStatusParseError(base::StringPiece enum_string) {
  return u"expected \"Closed\" or \"Running\" or \"Attention\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(AppType enum_param) {
  switch (enum_param) {
    case AppType::kArc:
      return "Arc";
    case AppType::kBuiltIn:
      return "BuiltIn";
    case AppType::kCrostini:
      return "Crostini";
    case AppType::kExtension:
      return "Extension";
    case AppType::kWeb:
      return "Web";
    case AppType::kMacOs:
      return "MacOS";
    case AppType::kPluginVm:
      return "PluginVm";
    case AppType::kStandaloneBrowser:
      return "StandaloneBrowser";
    case AppType::kRemote:
      return "Remote";
    case AppType::kBorealis:
      return "Borealis";
    case AppType::kBruschetta:
      return "Bruschetta";
    case AppType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

AppType ParseAppType(base::StringPiece enum_string) {
  if (enum_string == "Arc")
    return AppType::kArc;
  if (enum_string == "BuiltIn")
    return AppType::kBuiltIn;
  if (enum_string == "Crostini")
    return AppType::kCrostini;
  if (enum_string == "Extension")
    return AppType::kExtension;
  if (enum_string == "Web")
    return AppType::kWeb;
  if (enum_string == "MacOS")
    return AppType::kMacOs;
  if (enum_string == "PluginVm")
    return AppType::kPluginVm;
  if (enum_string == "StandaloneBrowser")
    return AppType::kStandaloneBrowser;
  if (enum_string == "Remote")
    return AppType::kRemote;
  if (enum_string == "Borealis")
    return AppType::kBorealis;
  if (enum_string == "Bruschetta")
    return AppType::kBruschetta;
  return AppType::kNone;
}

std::u16string GetAppTypeParseError(base::StringPiece enum_string) {
  return u"expected \"Arc\" or \"BuiltIn\" or \"Crostini\" or \"Extension\" or \"Web\" or \"MacOS\" or \"PluginVm\" or \"StandaloneBrowser\" or \"Remote\" or \"Borealis\" or \"Bruschetta\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(AppInstallSource enum_param) {
  switch (enum_param) {
    case AppInstallSource::kUnknown:
      return "Unknown";
    case AppInstallSource::kSystem:
      return "System";
    case AppInstallSource::kPolicy:
      return "Policy";
    case AppInstallSource::kOem:
      return "Oem";
    case AppInstallSource::kDefault:
      return "Default";
    case AppInstallSource::kSync:
      return "Sync";
    case AppInstallSource::kUser:
      return "User";
    case AppInstallSource::kSubApp:
      return "SubApp";
    case AppInstallSource::kKiosk:
      return "Kiosk";
    case AppInstallSource::kCommandLine:
      return "CommandLine";
    case AppInstallSource::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

AppInstallSource ParseAppInstallSource(base::StringPiece enum_string) {
  if (enum_string == "Unknown")
    return AppInstallSource::kUnknown;
  if (enum_string == "System")
    return AppInstallSource::kSystem;
  if (enum_string == "Policy")
    return AppInstallSource::kPolicy;
  if (enum_string == "Oem")
    return AppInstallSource::kOem;
  if (enum_string == "Default")
    return AppInstallSource::kDefault;
  if (enum_string == "Sync")
    return AppInstallSource::kSync;
  if (enum_string == "User")
    return AppInstallSource::kUser;
  if (enum_string == "SubApp")
    return AppInstallSource::kSubApp;
  if (enum_string == "Kiosk")
    return AppInstallSource::kKiosk;
  if (enum_string == "CommandLine")
    return AppInstallSource::kCommandLine;
  return AppInstallSource::kNone;
}

std::u16string GetAppInstallSourceParseError(base::StringPiece enum_string) {
  return u"expected \"Unknown\" or \"System\" or \"Policy\" or \"Oem\" or \"Default\" or \"Sync\" or \"User\" or \"SubApp\" or \"Kiosk\" or \"CommandLine\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(AppReadiness enum_param) {
  switch (enum_param) {
    case AppReadiness::kReady:
      return "Ready";
    case AppReadiness::kDisabledByBlacklist:
      return "DisabledByBlacklist";
    case AppReadiness::kDisabledByPolicy:
      return "DisabledByPolicy";
    case AppReadiness::kDisabledByUser:
      return "DisabledByUser";
    case AppReadiness::kTerminated:
      return "Terminated";
    case AppReadiness::kUninstalledByUser:
      return "UninstalledByUser";
    case AppReadiness::kRemoved:
      return "Removed";
    case AppReadiness::kUninstalledByMigration:
      return "UninstalledByMigration";
    case AppReadiness::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

AppReadiness ParseAppReadiness(base::StringPiece enum_string) {
  if (enum_string == "Ready")
    return AppReadiness::kReady;
  if (enum_string == "DisabledByBlacklist")
    return AppReadiness::kDisabledByBlacklist;
  if (enum_string == "DisabledByPolicy")
    return AppReadiness::kDisabledByPolicy;
  if (enum_string == "DisabledByUser")
    return AppReadiness::kDisabledByUser;
  if (enum_string == "Terminated")
    return AppReadiness::kTerminated;
  if (enum_string == "UninstalledByUser")
    return AppReadiness::kUninstalledByUser;
  if (enum_string == "Removed")
    return AppReadiness::kRemoved;
  if (enum_string == "UninstalledByMigration")
    return AppReadiness::kUninstalledByMigration;
  return AppReadiness::kNone;
}

std::u16string GetAppReadinessParseError(base::StringPiece enum_string) {
  return u"expected \"Ready\" or \"DisabledByBlacklist\" or \"DisabledByPolicy\" or \"DisabledByUser\" or \"Terminated\" or \"UninstalledByUser\" or \"Removed\" or \"UninstalledByMigration\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(WakefulnessMode enum_param) {
  switch (enum_param) {
    case WakefulnessMode::kUnknown:
      return "Unknown";
    case WakefulnessMode::kAsleep:
      return "Asleep";
    case WakefulnessMode::kAwake:
      return "Awake";
    case WakefulnessMode::kDreaming:
      return "Dreaming";
    case WakefulnessMode::kDozing:
      return "Dozing";
    case WakefulnessMode::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

WakefulnessMode ParseWakefulnessMode(base::StringPiece enum_string) {
  if (enum_string == "Unknown")
    return WakefulnessMode::kUnknown;
  if (enum_string == "Asleep")
    return WakefulnessMode::kAsleep;
  if (enum_string == "Awake")
    return WakefulnessMode::kAwake;
  if (enum_string == "Dreaming")
    return WakefulnessMode::kDreaming;
  if (enum_string == "Dozing")
    return WakefulnessMode::kDozing;
  return WakefulnessMode::kNone;
}

std::u16string GetWakefulnessModeParseError(base::StringPiece enum_string) {
  return u"expected \"Unknown\" or \"Asleep\" or \"Awake\" or \"Dreaming\" or \"Dozing\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(WindowStateType enum_param) {
  switch (enum_param) {
    case WindowStateType::kNormal:
      return "Normal";
    case WindowStateType::kMinimized:
      return "Minimized";
    case WindowStateType::kMaximized:
      return "Maximized";
    case WindowStateType::kFullscreen:
      return "Fullscreen";
    case WindowStateType::kPrimarySnapped:
      return "PrimarySnapped";
    case WindowStateType::kSecondarySnapped:
      return "SecondarySnapped";
    case WindowStateType::kPinned:
      return "Pinned";
    case WindowStateType::kTrustedPinned:
      return "TrustedPinned";
    case WindowStateType::kPip:
      return "PIP";
    case WindowStateType::kFloated:
      return "Floated";
    case WindowStateType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

WindowStateType ParseWindowStateType(base::StringPiece enum_string) {
  if (enum_string == "Normal")
    return WindowStateType::kNormal;
  if (enum_string == "Minimized")
    return WindowStateType::kMinimized;
  if (enum_string == "Maximized")
    return WindowStateType::kMaximized;
  if (enum_string == "Fullscreen")
    return WindowStateType::kFullscreen;
  if (enum_string == "PrimarySnapped")
    return WindowStateType::kPrimarySnapped;
  if (enum_string == "SecondarySnapped")
    return WindowStateType::kSecondarySnapped;
  if (enum_string == "Pinned")
    return WindowStateType::kPinned;
  if (enum_string == "TrustedPinned")
    return WindowStateType::kTrustedPinned;
  if (enum_string == "PIP")
    return WindowStateType::kPip;
  if (enum_string == "Floated")
    return WindowStateType::kFloated;
  return WindowStateType::kNone;
}

std::u16string GetWindowStateTypeParseError(base::StringPiece enum_string) {
  return u"expected \"Normal\" or \"Minimized\" or \"Maximized\" or \"Fullscreen\" or \"PrimarySnapped\" or \"SecondarySnapped\" or \"Pinned\" or \"TrustedPinned\" or \"PIP\" or \"Floated\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(WMEventType enum_param) {
  switch (enum_param) {
    case WMEventType::kWmeventNormal:
      return "WMEventNormal";
    case WMEventType::kWmeventMaximize:
      return "WMEventMaximize";
    case WMEventType::kWmeventMinimize:
      return "WMEventMinimize";
    case WMEventType::kWmeventFullscreen:
      return "WMEventFullscreen";
    case WMEventType::kWmeventSnapPrimary:
      return "WMEventSnapPrimary";
    case WMEventType::kWmeventSnapSecondary:
      return "WMEventSnapSecondary";
    case WMEventType::kWmeventFloat:
      return "WMEventFloat";
    case WMEventType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

WMEventType ParseWMEventType(base::StringPiece enum_string) {
  if (enum_string == "WMEventNormal")
    return WMEventType::kWmeventNormal;
  if (enum_string == "WMEventMaximize")
    return WMEventType::kWmeventMaximize;
  if (enum_string == "WMEventMinimize")
    return WMEventType::kWmeventMinimize;
  if (enum_string == "WMEventFullscreen")
    return WMEventType::kWmeventFullscreen;
  if (enum_string == "WMEventSnapPrimary")
    return WMEventType::kWmeventSnapPrimary;
  if (enum_string == "WMEventSnapSecondary")
    return WMEventType::kWmeventSnapSecondary;
  if (enum_string == "WMEventFloat")
    return WMEventType::kWmeventFloat;
  return WMEventType::kNone;
}

std::u16string GetWMEventTypeParseError(base::StringPiece enum_string) {
  return u"expected \"WMEventNormal\" or \"WMEventMaximize\" or \"WMEventMinimize\" or \"WMEventFullscreen\" or \"WMEventSnapPrimary\" or \"WMEventSnapSecondary\" or \"WMEventFloat\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(RotationType enum_param) {
  switch (enum_param) {
    case RotationType::kRotateAny:
      return "RotateAny";
    case RotationType::kRotate0:
      return "Rotate0";
    case RotationType::kRotate90:
      return "Rotate90";
    case RotationType::kRotate180:
      return "Rotate180";
    case RotationType::kRotate270:
      return "Rotate270";
    case RotationType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

RotationType ParseRotationType(base::StringPiece enum_string) {
  if (enum_string == "RotateAny")
    return RotationType::kRotateAny;
  if (enum_string == "Rotate0")
    return RotationType::kRotate0;
  if (enum_string == "Rotate90")
    return RotationType::kRotate90;
  if (enum_string == "Rotate180")
    return RotationType::kRotate180;
  if (enum_string == "Rotate270")
    return RotationType::kRotate270;
  return RotationType::kNone;
}

std::u16string GetRotationTypeParseError(base::StringPiece enum_string) {
  return u"expected \"RotateAny\" or \"Rotate0\" or \"Rotate90\" or \"Rotate180\" or \"Rotate270\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(LauncherStateType enum_param) {
  switch (enum_param) {
    case LauncherStateType::kClosed:
      return "Closed";
    case LauncherStateType::kFullscreenAllApps:
      return "FullscreenAllApps";
    case LauncherStateType::kFullscreenSearch:
      return "FullscreenSearch";
    case LauncherStateType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

LauncherStateType ParseLauncherStateType(base::StringPiece enum_string) {
  if (enum_string == "Closed")
    return LauncherStateType::kClosed;
  if (enum_string == "FullscreenAllApps")
    return LauncherStateType::kFullscreenAllApps;
  if (enum_string == "FullscreenSearch")
    return LauncherStateType::kFullscreenSearch;
  return LauncherStateType::kNone;
}

std::u16string GetLauncherStateTypeParseError(base::StringPiece enum_string) {
  return u"expected \"Closed\" or \"FullscreenAllApps\" or \"FullscreenSearch\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(OverviewStateType enum_param) {
  switch (enum_param) {
    case OverviewStateType::kShown:
      return "Shown";
    case OverviewStateType::kHidden:
      return "Hidden";
    case OverviewStateType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

OverviewStateType ParseOverviewStateType(base::StringPiece enum_string) {
  if (enum_string == "Shown")
    return OverviewStateType::kShown;
  if (enum_string == "Hidden")
    return OverviewStateType::kHidden;
  return OverviewStateType::kNone;
}

std::u16string GetOverviewStateTypeParseError(base::StringPiece enum_string) {
  return u"expected \"Shown\" or \"Hidden\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(MouseButton enum_param) {
  switch (enum_param) {
    case MouseButton::kLeft:
      return "Left";
    case MouseButton::kMiddle:
      return "Middle";
    case MouseButton::kRight:
      return "Right";
    case MouseButton::kBack:
      return "Back";
    case MouseButton::kForward:
      return "Forward";
    case MouseButton::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

MouseButton ParseMouseButton(base::StringPiece enum_string) {
  if (enum_string == "Left")
    return MouseButton::kLeft;
  if (enum_string == "Middle")
    return MouseButton::kMiddle;
  if (enum_string == "Right")
    return MouseButton::kRight;
  if (enum_string == "Back")
    return MouseButton::kBack;
  if (enum_string == "Forward")
    return MouseButton::kForward;
  return MouseButton::kNone;
}

std::u16string GetMouseButtonParseError(base::StringPiece enum_string) {
  return u"expected \"Left\" or \"Middle\" or \"Right\" or \"Back\" or \"Forward\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


WindowStateChangeDict::WindowStateChangeDict()
: event_type() {}

WindowStateChangeDict::~WindowStateChangeDict() = default;
WindowStateChangeDict::WindowStateChangeDict(WindowStateChangeDict&& rhs) noexcept = default;
WindowStateChangeDict& WindowStateChangeDict::operator=(WindowStateChangeDict&& rhs) noexcept = default;
WindowStateChangeDict WindowStateChangeDict::Clone() const {
  WindowStateChangeDict out;
  out.event_type = event_type;
  out.fail_if_no_change = fail_if_no_change;
  return out;
}

// static
bool WindowStateChangeDict::Populate(
    const base::Value::Dict& dict, WindowStateChangeDict& out) {
  const base::Value* event_type_value = dict.Find("eventType");
  if (!event_type_value) {
    return false;
  }
  {
    const std::string* wm_event_type_as_string = (*event_type_value).GetIfString();
    if (!wm_event_type_as_string) {
      return false;
    }
    out.event_type = ParseWMEventType(*wm_event_type_as_string);
    if (out.event_type == WMEventType()) {
      return false;
    }
  }

  const base::Value* fail_if_no_change_value = dict.Find("failIfNoChange");
  if (fail_if_no_change_value) {
    {
      auto temp = (*fail_if_no_change_value).GetIfBool();
      if (!temp.has_value()) {
        out.fail_if_no_change = std::nullopt;
        return false;
      }
      out.fail_if_no_change = *temp;
    }
  }

  return true;
}

// static
bool WindowStateChangeDict::Populate(
    const base::Value& value, WindowStateChangeDict& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<WindowStateChangeDict> WindowStateChangeDict::FromValue(const base::Value::Dict& value) {
  WindowStateChangeDict out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<WindowStateChangeDict> WindowStateChangeDict::FromValue(const base::Value& value) {
  WindowStateChangeDict out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict WindowStateChangeDict::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("eventType", autotest_private::ToString(this->event_type));

  if (this->fail_if_no_change) {
    to_value_result.Set("failIfNoChange", *this->fail_if_no_change);

  }

  return to_value_result;
}


LoginStatusDict::LoginStatusDict()
: is_logged_in(false),
is_owner(false),
is_screen_locked(false),
is_lockscreen_wallpaper_animating(false),
is_ready_for_password(false),
are_all_user_images_loaded(false) {}

LoginStatusDict::~LoginStatusDict() = default;
LoginStatusDict::LoginStatusDict(LoginStatusDict&& rhs) noexcept = default;
LoginStatusDict& LoginStatusDict::operator=(LoginStatusDict&& rhs) noexcept = default;
LoginStatusDict LoginStatusDict::Clone() const {
  LoginStatusDict out;
  out.is_logged_in = is_logged_in;
  out.is_owner = is_owner;
  out.is_screen_locked = is_screen_locked;
  out.is_lockscreen_wallpaper_animating = is_lockscreen_wallpaper_animating;
  out.is_ready_for_password = is_ready_for_password;
  out.are_all_user_images_loaded = are_all_user_images_loaded;
  out.is_regular_user = is_regular_user;
  out.is_guest = is_guest;
  out.is_kiosk = is_kiosk;
  out.email = email;
  out.display_email = display_email;
  out.display_name = display_name;
  out.user_image = user_image;
  out.has_valid_oauth2_token = has_valid_oauth2_token;
  return out;
}

// static
bool LoginStatusDict::Populate(
    const base::Value::Dict& dict, LoginStatusDict& out) {
  const base::Value* is_logged_in_value = dict.Find("isLoggedIn");
  if (!is_logged_in_value) {
    return false;
  }
  {
    auto temp = (*is_logged_in_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_logged_in = *temp;
  }

  const base::Value* is_owner_value = dict.Find("isOwner");
  if (!is_owner_value) {
    return false;
  }
  {
    auto temp = (*is_owner_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_owner = *temp;
  }

  const base::Value* is_screen_locked_value = dict.Find("isScreenLocked");
  if (!is_screen_locked_value) {
    return false;
  }
  {
    auto temp = (*is_screen_locked_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_screen_locked = *temp;
  }

  const base::Value* is_lockscreen_wallpaper_animating_value = dict.Find("isLockscreenWallpaperAnimating");
  if (!is_lockscreen_wallpaper_animating_value) {
    return false;
  }
  {
    auto temp = (*is_lockscreen_wallpaper_animating_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_lockscreen_wallpaper_animating = *temp;
  }

  const base::Value* is_ready_for_password_value = dict.Find("isReadyForPassword");
  if (!is_ready_for_password_value) {
    return false;
  }
  {
    auto temp = (*is_ready_for_password_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_ready_for_password = *temp;
  }

  const base::Value* are_all_user_images_loaded_value = dict.Find("areAllUserImagesLoaded");
  if (!are_all_user_images_loaded_value) {
    return false;
  }
  {
    auto temp = (*are_all_user_images_loaded_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.are_all_user_images_loaded = *temp;
  }

  const base::Value* is_regular_user_value = dict.Find("isRegularUser");
  if (is_regular_user_value) {
    {
      auto temp = (*is_regular_user_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_regular_user = std::nullopt;
        return false;
      }
      out.is_regular_user = *temp;
    }
  }

  const base::Value* is_guest_value = dict.Find("isGuest");
  if (is_guest_value) {
    {
      auto temp = (*is_guest_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_guest = std::nullopt;
        return false;
      }
      out.is_guest = *temp;
    }
  }

  const base::Value* is_kiosk_value = dict.Find("isKiosk");
  if (is_kiosk_value) {
    {
      auto temp = (*is_kiosk_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_kiosk = std::nullopt;
        return false;
      }
      out.is_kiosk = *temp;
    }
  }

  const base::Value* email_value = dict.Find("email");
  if (email_value) {
    {
      auto* temp = (*email_value).GetIfString();
      if (!temp) {
        out.email = std::nullopt;
        return false;
      }
      out.email = *temp;
    }
  }

  const base::Value* display_email_value = dict.Find("displayEmail");
  if (display_email_value) {
    {
      auto* temp = (*display_email_value).GetIfString();
      if (!temp) {
        out.display_email = std::nullopt;
        return false;
      }
      out.display_email = *temp;
    }
  }

  const base::Value* display_name_value = dict.Find("displayName");
  if (display_name_value) {
    {
      auto* temp = (*display_name_value).GetIfString();
      if (!temp) {
        out.display_name = std::nullopt;
        return false;
      }
      out.display_name = *temp;
    }
  }

  const base::Value* user_image_value = dict.Find("userImage");
  if (user_image_value) {
    {
      auto* temp = (*user_image_value).GetIfString();
      if (!temp) {
        out.user_image = std::nullopt;
        return false;
      }
      out.user_image = *temp;
    }
  }

  const base::Value* has_valid_oauth2_token_value = dict.Find("hasValidOauth2Token");
  if (has_valid_oauth2_token_value) {
    {
      auto temp = (*has_valid_oauth2_token_value).GetIfBool();
      if (!temp.has_value()) {
        out.has_valid_oauth2_token = std::nullopt;
        return false;
      }
      out.has_valid_oauth2_token = *temp;
    }
  }

  return true;
}

// static
bool LoginStatusDict::Populate(
    const base::Value& value, LoginStatusDict& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<LoginStatusDict> LoginStatusDict::FromValue(const base::Value::Dict& value) {
  LoginStatusDict out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<LoginStatusDict> LoginStatusDict::FromValue(const base::Value& value) {
  LoginStatusDict out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict LoginStatusDict::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("isLoggedIn", this->is_logged_in);

  to_value_result.Set("isOwner", this->is_owner);

  to_value_result.Set("isScreenLocked", this->is_screen_locked);

  to_value_result.Set("isLockscreenWallpaperAnimating", this->is_lockscreen_wallpaper_animating);

  to_value_result.Set("isReadyForPassword", this->is_ready_for_password);

  to_value_result.Set("areAllUserImagesLoaded", this->are_all_user_images_loaded);

  if (this->is_regular_user) {
    to_value_result.Set("isRegularUser", *this->is_regular_user);

  }
  if (this->is_guest) {
    to_value_result.Set("isGuest", *this->is_guest);

  }
  if (this->is_kiosk) {
    to_value_result.Set("isKiosk", *this->is_kiosk);

  }
  if (this->email) {
    to_value_result.Set("email", *this->email);

  }
  if (this->display_email) {
    to_value_result.Set("displayEmail", *this->display_email);

  }
  if (this->display_name) {
    to_value_result.Set("displayName", *this->display_name);

  }
  if (this->user_image) {
    to_value_result.Set("userImage", *this->user_image);

  }
  if (this->has_valid_oauth2_token) {
    to_value_result.Set("hasValidOauth2Token", *this->has_valid_oauth2_token);

  }

  return to_value_result;
}


ExtensionInfoDict::ExtensionInfoDict()
: is_component(false),
is_internal(false),
is_user_installed(false),
is_enabled(false),
allowed_in_incognito(false),
has_page_action(false) {}

ExtensionInfoDict::~ExtensionInfoDict() = default;
ExtensionInfoDict::ExtensionInfoDict(ExtensionInfoDict&& rhs) noexcept = default;
ExtensionInfoDict& ExtensionInfoDict::operator=(ExtensionInfoDict&& rhs) noexcept = default;
ExtensionInfoDict ExtensionInfoDict::Clone() const {
  ExtensionInfoDict out;
  out.id = id;
  out.version = version;
  out.name = name;
  out.public_key = public_key;
  out.description = description;
  out.background_url = background_url;
  out.options_url = options_url;
  out.host_permissions = host_permissions;
  out.effective_host_permissions = effective_host_permissions;
  out.api_permissions = api_permissions;
  out.is_component = is_component;
  out.is_internal = is_internal;
  out.is_user_installed = is_user_installed;
  out.is_enabled = is_enabled;
  out.allowed_in_incognito = allowed_in_incognito;
  out.has_page_action = has_page_action;
  return out;
}

// static
bool ExtensionInfoDict::Populate(
    const base::Value::Dict& dict, ExtensionInfoDict& out) {
  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto* temp = (*id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* version_value = dict.Find("version");
  if (!version_value) {
    return false;
  }
  {
    auto* temp = (*version_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.version = *temp;
  }

  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.name = *temp;
  }

  const base::Value* public_key_value = dict.Find("publicKey");
  if (!public_key_value) {
    return false;
  }
  {
    auto* temp = (*public_key_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.public_key = *temp;
  }

  const base::Value* description_value = dict.Find("description");
  if (!description_value) {
    return false;
  }
  {
    auto* temp = (*description_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.description = *temp;
  }

  const base::Value* background_url_value = dict.Find("backgroundUrl");
  if (!background_url_value) {
    return false;
  }
  {
    auto* temp = (*background_url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.background_url = *temp;
  }

  const base::Value* options_url_value = dict.Find("optionsUrl");
  if (!options_url_value) {
    return false;
  }
  {
    auto* temp = (*options_url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.options_url = *temp;
  }

  const base::Value* host_permissions_value = dict.Find("hostPermissions");
  if (!host_permissions_value) {
    return false;
  }
  {
    if (!(*host_permissions_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*host_permissions_value).GetList(), out.host_permissions)) {
        return false;
      }
    }
  }

  const base::Value* effective_host_permissions_value = dict.Find("effectiveHostPermissions");
  if (!effective_host_permissions_value) {
    return false;
  }
  {
    if (!(*effective_host_permissions_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*effective_host_permissions_value).GetList(), out.effective_host_permissions)) {
        return false;
      }
    }
  }

  const base::Value* api_permissions_value = dict.Find("apiPermissions");
  if (!api_permissions_value) {
    return false;
  }
  {
    if (!(*api_permissions_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*api_permissions_value).GetList(), out.api_permissions)) {
        return false;
      }
    }
  }

  const base::Value* is_component_value = dict.Find("isComponent");
  if (!is_component_value) {
    return false;
  }
  {
    auto temp = (*is_component_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_component = *temp;
  }

  const base::Value* is_internal_value = dict.Find("isInternal");
  if (!is_internal_value) {
    return false;
  }
  {
    auto temp = (*is_internal_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_internal = *temp;
  }

  const base::Value* is_user_installed_value = dict.Find("isUserInstalled");
  if (!is_user_installed_value) {
    return false;
  }
  {
    auto temp = (*is_user_installed_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_user_installed = *temp;
  }

  const base::Value* is_enabled_value = dict.Find("isEnabled");
  if (!is_enabled_value) {
    return false;
  }
  {
    auto temp = (*is_enabled_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_enabled = *temp;
  }

  const base::Value* allowed_in_incognito_value = dict.Find("allowedInIncognito");
  if (!allowed_in_incognito_value) {
    return false;
  }
  {
    auto temp = (*allowed_in_incognito_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.allowed_in_incognito = *temp;
  }

  const base::Value* has_page_action_value = dict.Find("hasPageAction");
  if (!has_page_action_value) {
    return false;
  }
  {
    auto temp = (*has_page_action_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.has_page_action = *temp;
  }

  return true;
}

// static
bool ExtensionInfoDict::Populate(
    const base::Value& value, ExtensionInfoDict& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ExtensionInfoDict> ExtensionInfoDict::FromValue(const base::Value::Dict& value) {
  ExtensionInfoDict out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ExtensionInfoDict> ExtensionInfoDict::FromValue(const base::Value& value) {
  ExtensionInfoDict out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ExtensionInfoDict::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("version", this->version);

  to_value_result.Set("name", this->name);

  to_value_result.Set("publicKey", this->public_key);

  to_value_result.Set("description", this->description);

  to_value_result.Set("backgroundUrl", this->background_url);

  to_value_result.Set("optionsUrl", this->options_url);

  to_value_result.Set("hostPermissions", json_schema_compiler::util::CreateValueFromArray(this->host_permissions));

  to_value_result.Set("effectiveHostPermissions", json_schema_compiler::util::CreateValueFromArray(this->effective_host_permissions));

  to_value_result.Set("apiPermissions", json_schema_compiler::util::CreateValueFromArray(this->api_permissions));

  to_value_result.Set("isComponent", this->is_component);

  to_value_result.Set("isInternal", this->is_internal);

  to_value_result.Set("isUserInstalled", this->is_user_installed);

  to_value_result.Set("isEnabled", this->is_enabled);

  to_value_result.Set("allowedInIncognito", this->allowed_in_incognito);

  to_value_result.Set("hasPageAction", this->has_page_action);


  return to_value_result;
}


ExtensionsInfoArray::ExtensionsInfoArray()
 {}

ExtensionsInfoArray::~ExtensionsInfoArray() = default;
ExtensionsInfoArray::ExtensionsInfoArray(ExtensionsInfoArray&& rhs) noexcept = default;
ExtensionsInfoArray& ExtensionsInfoArray::operator=(ExtensionsInfoArray&& rhs) noexcept = default;
ExtensionsInfoArray ExtensionsInfoArray::Clone() const {
  ExtensionsInfoArray out;
  out.extensions.reserve(extensions.size());
  for (const auto& element : extensions) {
    json_schema_compiler::util::AppendToContainer(out.extensions, element.Clone());
  }
  return out;
}

// static
bool ExtensionsInfoArray::Populate(
    const base::Value::Dict& dict, ExtensionsInfoArray& out) {
  const base::Value* extensions_value = dict.Find("extensions");
  if (!extensions_value) {
    return false;
  }
  {
    if (!(*extensions_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*extensions_value).GetList(), out.extensions)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool ExtensionsInfoArray::Populate(
    const base::Value& value, ExtensionsInfoArray& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ExtensionsInfoArray> ExtensionsInfoArray::FromValue(const base::Value::Dict& value) {
  ExtensionsInfoArray out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ExtensionsInfoArray> ExtensionsInfoArray::FromValue(const base::Value& value) {
  ExtensionsInfoArray out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ExtensionsInfoArray::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("extensions", json_schema_compiler::util::CreateValueFromArray(this->extensions));


  return to_value_result;
}


Notification::Notification()
: priority(0),
progress(0) {}

Notification::~Notification() = default;
Notification::Notification(Notification&& rhs) noexcept = default;
Notification& Notification::operator=(Notification&& rhs) noexcept = default;
Notification Notification::Clone() const {
  Notification out;
  out.id = id;
  out.type = type;
  out.title = title;
  out.message = message;
  out.priority = priority;
  out.progress = progress;
  return out;
}

// static
bool Notification::Populate(
    const base::Value::Dict& dict, Notification& out) {
  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto* temp = (*id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    auto* temp = (*type_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.type = *temp;
  }

  const base::Value* title_value = dict.Find("title");
  if (!title_value) {
    return false;
  }
  {
    auto* temp = (*title_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.title = *temp;
  }

  const base::Value* message_value = dict.Find("message");
  if (!message_value) {
    return false;
  }
  {
    auto* temp = (*message_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.message = *temp;
  }

  const base::Value* priority_value = dict.Find("priority");
  if (!priority_value) {
    return false;
  }
  {
    auto temp = (*priority_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.priority = *temp;
  }

  const base::Value* progress_value = dict.Find("progress");
  if (!progress_value) {
    return false;
  }
  {
    auto temp = (*progress_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.progress = *temp;
  }

  return true;
}

// static
bool Notification::Populate(
    const base::Value& value, Notification& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Notification> Notification::FromValue(const base::Value::Dict& value) {
  Notification out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Notification> Notification::FromValue(const base::Value& value) {
  Notification out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Notification::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("type", this->type);

  to_value_result.Set("title", this->title);

  to_value_result.Set("message", this->message);

  to_value_result.Set("priority", this->priority);

  to_value_result.Set("progress", this->progress);


  return to_value_result;
}


Printer::Printer()
 {}

Printer::~Printer() = default;
Printer::Printer(Printer&& rhs) noexcept = default;
Printer& Printer::operator=(Printer&& rhs) noexcept = default;
Printer Printer::Clone() const {
  Printer out;
  out.printer_name = printer_name;
  out.printer_id = printer_id;
  out.printer_type = printer_type;
  out.printer_desc = printer_desc;
  out.printer_make_and_model = printer_make_and_model;
  out.printer_uri = printer_uri;
  out.printer_ppd = printer_ppd;
  return out;
}

// static
bool Printer::Populate(
    const base::Value::Dict& dict, Printer& out) {
  const base::Value* printer_name_value = dict.Find("printerName");
  if (!printer_name_value) {
    return false;
  }
  {
    auto* temp = (*printer_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.printer_name = *temp;
  }

  const base::Value* printer_id_value = dict.Find("printerId");
  if (printer_id_value) {
    {
      auto* temp = (*printer_id_value).GetIfString();
      if (!temp) {
        out.printer_id = std::nullopt;
        return false;
      }
      out.printer_id = *temp;
    }
  }

  const base::Value* printer_type_value = dict.Find("printerType");
  if (printer_type_value) {
    {
      auto* temp = (*printer_type_value).GetIfString();
      if (!temp) {
        out.printer_type = std::nullopt;
        return false;
      }
      out.printer_type = *temp;
    }
  }

  const base::Value* printer_desc_value = dict.Find("printerDesc");
  if (printer_desc_value) {
    {
      auto* temp = (*printer_desc_value).GetIfString();
      if (!temp) {
        out.printer_desc = std::nullopt;
        return false;
      }
      out.printer_desc = *temp;
    }
  }

  const base::Value* printer_make_and_model_value = dict.Find("printerMakeAndModel");
  if (printer_make_and_model_value) {
    {
      auto* temp = (*printer_make_and_model_value).GetIfString();
      if (!temp) {
        out.printer_make_and_model = std::nullopt;
        return false;
      }
      out.printer_make_and_model = *temp;
    }
  }

  const base::Value* printer_uri_value = dict.Find("printerUri");
  if (printer_uri_value) {
    {
      auto* temp = (*printer_uri_value).GetIfString();
      if (!temp) {
        out.printer_uri = std::nullopt;
        return false;
      }
      out.printer_uri = *temp;
    }
  }

  const base::Value* printer_ppd_value = dict.Find("printerPpd");
  if (printer_ppd_value) {
    {
      auto* temp = (*printer_ppd_value).GetIfString();
      if (!temp) {
        out.printer_ppd = std::nullopt;
        return false;
      }
      out.printer_ppd = *temp;
    }
  }

  return true;
}

// static
bool Printer::Populate(
    const base::Value& value, Printer& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Printer> Printer::FromValue(const base::Value::Dict& value) {
  Printer out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Printer> Printer::FromValue(const base::Value& value) {
  Printer out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Printer::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("printerName", this->printer_name);

  if (this->printer_id) {
    to_value_result.Set("printerId", *this->printer_id);

  }
  if (this->printer_type) {
    to_value_result.Set("printerType", *this->printer_type);

  }
  if (this->printer_desc) {
    to_value_result.Set("printerDesc", *this->printer_desc);

  }
  if (this->printer_make_and_model) {
    to_value_result.Set("printerMakeAndModel", *this->printer_make_and_model);

  }
  if (this->printer_uri) {
    to_value_result.Set("printerUri", *this->printer_uri);

  }
  if (this->printer_ppd) {
    to_value_result.Set("printerPpd", *this->printer_ppd);

  }

  return to_value_result;
}


ArcState::ArcState()
: provisioned(false),
tos_needed(false),
pre_start_time(0.0),
start_time(0.0) {}

ArcState::~ArcState() = default;
ArcState::ArcState(ArcState&& rhs) noexcept = default;
ArcState& ArcState::operator=(ArcState&& rhs) noexcept = default;
ArcState ArcState::Clone() const {
  ArcState out;
  out.provisioned = provisioned;
  out.tos_needed = tos_needed;
  out.pre_start_time = pre_start_time;
  out.start_time = start_time;
  return out;
}

// static
bool ArcState::Populate(
    const base::Value::Dict& dict, ArcState& out) {
  const base::Value* provisioned_value = dict.Find("provisioned");
  if (!provisioned_value) {
    return false;
  }
  {
    auto temp = (*provisioned_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.provisioned = *temp;
  }

  const base::Value* tos_needed_value = dict.Find("tosNeeded");
  if (!tos_needed_value) {
    return false;
  }
  {
    auto temp = (*tos_needed_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.tos_needed = *temp;
  }

  const base::Value* pre_start_time_value = dict.Find("preStartTime");
  if (!pre_start_time_value) {
    return false;
  }
  {
    auto temp = (*pre_start_time_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.pre_start_time = *temp;
  }

  const base::Value* start_time_value = dict.Find("startTime");
  if (!start_time_value) {
    return false;
  }
  {
    auto temp = (*start_time_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.start_time = *temp;
  }

  return true;
}

// static
bool ArcState::Populate(
    const base::Value& value, ArcState& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ArcState> ArcState::FromValue(const base::Value::Dict& value) {
  ArcState out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ArcState> ArcState::FromValue(const base::Value& value) {
  ArcState out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ArcState::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("provisioned", this->provisioned);

  to_value_result.Set("tosNeeded", this->tos_needed);

  to_value_result.Set("preStartTime", this->pre_start_time);

  to_value_result.Set("startTime", this->start_time);


  return to_value_result;
}


PlayStoreState::PlayStoreState()
: allowed(false) {}

PlayStoreState::~PlayStoreState() = default;
PlayStoreState::PlayStoreState(PlayStoreState&& rhs) noexcept = default;
PlayStoreState& PlayStoreState::operator=(PlayStoreState&& rhs) noexcept = default;
PlayStoreState PlayStoreState::Clone() const {
  PlayStoreState out;
  out.allowed = allowed;
  out.enabled = enabled;
  out.managed = managed;
  return out;
}

// static
bool PlayStoreState::Populate(
    const base::Value::Dict& dict, PlayStoreState& out) {
  const base::Value* allowed_value = dict.Find("allowed");
  if (!allowed_value) {
    return false;
  }
  {
    auto temp = (*allowed_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.allowed = *temp;
  }

  const base::Value* enabled_value = dict.Find("enabled");
  if (enabled_value) {
    {
      auto temp = (*enabled_value).GetIfBool();
      if (!temp.has_value()) {
        out.enabled = std::nullopt;
        return false;
      }
      out.enabled = *temp;
    }
  }

  const base::Value* managed_value = dict.Find("managed");
  if (managed_value) {
    {
      auto temp = (*managed_value).GetIfBool();
      if (!temp.has_value()) {
        out.managed = std::nullopt;
        return false;
      }
      out.managed = *temp;
    }
  }

  return true;
}

// static
bool PlayStoreState::Populate(
    const base::Value& value, PlayStoreState& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PlayStoreState> PlayStoreState::FromValue(const base::Value::Dict& value) {
  PlayStoreState out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PlayStoreState> PlayStoreState::FromValue(const base::Value& value) {
  PlayStoreState out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict PlayStoreState::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("allowed", this->allowed);

  if (this->enabled) {
    to_value_result.Set("enabled", *this->enabled);

  }
  if (this->managed) {
    to_value_result.Set("managed", *this->managed);

  }

  return to_value_result;
}


AssistantQueryResponse::AssistantQueryResponse()
 {}

AssistantQueryResponse::~AssistantQueryResponse() = default;
AssistantQueryResponse::AssistantQueryResponse(AssistantQueryResponse&& rhs) noexcept = default;
AssistantQueryResponse& AssistantQueryResponse::operator=(AssistantQueryResponse&& rhs) noexcept = default;
AssistantQueryResponse AssistantQueryResponse::Clone() const {
  AssistantQueryResponse out;
  out.text = text;
  out.html_response = html_response;
  out.open_url = open_url;
  out.open_app_response = open_app_response;
  return out;
}

// static
bool AssistantQueryResponse::Populate(
    const base::Value::Dict& dict, AssistantQueryResponse& out) {
  const base::Value* text_value = dict.Find("text");
  if (text_value) {
    {
      auto* temp = (*text_value).GetIfString();
      if (!temp) {
        out.text = std::nullopt;
        return false;
      }
      out.text = *temp;
    }
  }

  const base::Value* html_response_value = dict.Find("htmlResponse");
  if (html_response_value) {
    {
      auto* temp = (*html_response_value).GetIfString();
      if (!temp) {
        out.html_response = std::nullopt;
        return false;
      }
      out.html_response = *temp;
    }
  }

  const base::Value* open_url_value = dict.Find("openUrl");
  if (open_url_value) {
    {
      auto* temp = (*open_url_value).GetIfString();
      if (!temp) {
        out.open_url = std::nullopt;
        return false;
      }
      out.open_url = *temp;
    }
  }

  const base::Value* open_app_response_value = dict.Find("openAppResponse");
  if (open_app_response_value) {
    {
      auto* temp = (*open_app_response_value).GetIfString();
      if (!temp) {
        out.open_app_response = std::nullopt;
        return false;
      }
      out.open_app_response = *temp;
    }
  }

  return true;
}

// static
bool AssistantQueryResponse::Populate(
    const base::Value& value, AssistantQueryResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AssistantQueryResponse> AssistantQueryResponse::FromValue(const base::Value::Dict& value) {
  AssistantQueryResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AssistantQueryResponse> AssistantQueryResponse::FromValue(const base::Value& value) {
  AssistantQueryResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict AssistantQueryResponse::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->text) {
    to_value_result.Set("text", *this->text);

  }
  if (this->html_response) {
    to_value_result.Set("htmlResponse", *this->html_response);

  }
  if (this->open_url) {
    to_value_result.Set("openUrl", *this->open_url);

  }
  if (this->open_app_response) {
    to_value_result.Set("openAppResponse", *this->open_app_response);

  }

  return to_value_result;
}


AssistantQueryStatus::AssistantQueryStatus()
: is_mic_open(false) {}

AssistantQueryStatus::~AssistantQueryStatus() = default;
AssistantQueryStatus::AssistantQueryStatus(AssistantQueryStatus&& rhs) noexcept = default;
AssistantQueryStatus& AssistantQueryStatus::operator=(AssistantQueryStatus&& rhs) noexcept = default;
AssistantQueryStatus AssistantQueryStatus::Clone() const {
  AssistantQueryStatus out;
  out.is_mic_open = is_mic_open;
  out.query_text = query_text;
  out.query_response = query_response.Clone();
  return out;
}

// static
bool AssistantQueryStatus::Populate(
    const base::Value::Dict& dict, AssistantQueryStatus& out) {
  const base::Value* is_mic_open_value = dict.Find("isMicOpen");
  if (!is_mic_open_value) {
    return false;
  }
  {
    auto temp = (*is_mic_open_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_mic_open = *temp;
  }

  const base::Value* query_text_value = dict.Find("queryText");
  if (!query_text_value) {
    return false;
  }
  {
    auto* temp = (*query_text_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.query_text = *temp;
  }

  const base::Value* query_response_value = dict.Find("queryResponse");
  if (!query_response_value) {
    return false;
  }
  {
    if (!(*query_response_value).is_dict()) {
      return false;
    }
    if (!AssistantQueryResponse::Populate((*query_response_value).GetDict(), out.query_response)) {
      return false;
    }
  }

  return true;
}

// static
bool AssistantQueryStatus::Populate(
    const base::Value& value, AssistantQueryStatus& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AssistantQueryStatus> AssistantQueryStatus::FromValue(const base::Value::Dict& value) {
  AssistantQueryStatus out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AssistantQueryStatus> AssistantQueryStatus::FromValue(const base::Value& value) {
  AssistantQueryStatus out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict AssistantQueryStatus::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("isMicOpen", this->is_mic_open);

  to_value_result.Set("queryText", this->query_text);

  to_value_result.Set("queryResponse", (this->query_response).ToValue());


  return to_value_result;
}


const char* ToString(LacrosState enum_param) {
  switch (enum_param) {
    case LacrosState::kNotInitialized:
      return "NotInitialized";
    case LacrosState::kReloading:
      return "Reloading";
    case LacrosState::kMounting:
      return "Mounting";
    case LacrosState::kUnavailable:
      return "Unavailable";
    case LacrosState::kStopped:
      return "Stopped";
    case LacrosState::kPreparingForLaunch:
      return "PreparingForLaunch";
    case LacrosState::kWaitingOwnerFetch:
      return "WaitingOwnerFetch";
    case LacrosState::kPreLaunched:
      return "PreLaunched";
    case LacrosState::kStarting:
      return "Starting";
    case LacrosState::kRunning:
      return "Running";
    case LacrosState::kTerminating:
      return "Terminating";
    case LacrosState::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

LacrosState ParseLacrosState(base::StringPiece enum_string) {
  if (enum_string == "NotInitialized")
    return LacrosState::kNotInitialized;
  if (enum_string == "Reloading")
    return LacrosState::kReloading;
  if (enum_string == "Mounting")
    return LacrosState::kMounting;
  if (enum_string == "Unavailable")
    return LacrosState::kUnavailable;
  if (enum_string == "Stopped")
    return LacrosState::kStopped;
  if (enum_string == "PreparingForLaunch")
    return LacrosState::kPreparingForLaunch;
  if (enum_string == "WaitingOwnerFetch")
    return LacrosState::kWaitingOwnerFetch;
  if (enum_string == "PreLaunched")
    return LacrosState::kPreLaunched;
  if (enum_string == "Starting")
    return LacrosState::kStarting;
  if (enum_string == "Running")
    return LacrosState::kRunning;
  if (enum_string == "Terminating")
    return LacrosState::kTerminating;
  return LacrosState::kNone;
}

std::u16string GetLacrosStateParseError(base::StringPiece enum_string) {
  return u"expected \"NotInitialized\" or \"Reloading\" or \"Mounting\" or \"Unavailable\" or \"Stopped\" or \"PreparingForLaunch\" or \"WaitingOwnerFetch\" or \"PreLaunched\" or \"Starting\" or \"Running\" or \"Terminating\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(LacrosMode enum_param) {
  switch (enum_param) {
    case LacrosMode::kDisabled:
      return "Disabled";
    case LacrosMode::kOnly:
      return "Only";
    case LacrosMode::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

LacrosMode ParseLacrosMode(base::StringPiece enum_string) {
  if (enum_string == "Disabled")
    return LacrosMode::kDisabled;
  if (enum_string == "Only")
    return LacrosMode::kOnly;
  return LacrosMode::kNone;
}

std::u16string GetLacrosModeParseError(base::StringPiece enum_string) {
  return u"expected \"Disabled\" or \"Only\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


LacrosInfo::LacrosInfo()
: state(),
is_keep_alive(false),
mode(),
is_enabled(false) {}

LacrosInfo::~LacrosInfo() = default;
LacrosInfo::LacrosInfo(LacrosInfo&& rhs) noexcept = default;
LacrosInfo& LacrosInfo::operator=(LacrosInfo&& rhs) noexcept = default;
LacrosInfo LacrosInfo::Clone() const {
  LacrosInfo out;
  out.state = state;
  out.is_keep_alive = is_keep_alive;
  out.lacros_path = lacros_path;
  out.mode = mode;
  out.is_enabled = is_enabled;
  return out;
}

// static
bool LacrosInfo::Populate(
    const base::Value::Dict& dict, LacrosInfo& out) {
  const base::Value* state_value = dict.Find("state");
  if (!state_value) {
    return false;
  }
  {
    const std::string* lacros_state_as_string = (*state_value).GetIfString();
    if (!lacros_state_as_string) {
      return false;
    }
    out.state = ParseLacrosState(*lacros_state_as_string);
    if (out.state == LacrosState()) {
      return false;
    }
  }

  const base::Value* is_keep_alive_value = dict.Find("isKeepAlive");
  if (!is_keep_alive_value) {
    return false;
  }
  {
    auto temp = (*is_keep_alive_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_keep_alive = *temp;
  }

  const base::Value* lacros_path_value = dict.Find("lacrosPath");
  if (!lacros_path_value) {
    return false;
  }
  {
    auto* temp = (*lacros_path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.lacros_path = *temp;
  }

  const base::Value* mode_value = dict.Find("mode");
  if (!mode_value) {
    return false;
  }
  {
    const std::string* lacros_mode_as_string = (*mode_value).GetIfString();
    if (!lacros_mode_as_string) {
      return false;
    }
    out.mode = ParseLacrosMode(*lacros_mode_as_string);
    if (out.mode == LacrosMode()) {
      return false;
    }
  }

  const base::Value* is_enabled_value = dict.Find("isEnabled");
  if (!is_enabled_value) {
    return false;
  }
  {
    auto temp = (*is_enabled_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_enabled = *temp;
  }

  return true;
}

// static
bool LacrosInfo::Populate(
    const base::Value& value, LacrosInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<LacrosInfo> LacrosInfo::FromValue(const base::Value::Dict& value) {
  LacrosInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<LacrosInfo> LacrosInfo::FromValue(const base::Value& value) {
  LacrosInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict LacrosInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("state", autotest_private::ToString(this->state));

  to_value_result.Set("isKeepAlive", this->is_keep_alive);

  to_value_result.Set("lacrosPath", this->lacros_path);

  to_value_result.Set("mode", autotest_private::ToString(this->mode));

  to_value_result.Set("isEnabled", this->is_enabled);


  return to_value_result;
}


ArcAppDict::ArcAppDict()
: last_launch_time(0.0),
install_time(0.0),
sticky(false),
notifications_enabled(false),
ready(false),
suspended(false),
show_in_launcher(false),
shortcut(false),
launchable(false) {}

ArcAppDict::~ArcAppDict() = default;
ArcAppDict::ArcAppDict(ArcAppDict&& rhs) noexcept = default;
ArcAppDict& ArcAppDict::operator=(ArcAppDict&& rhs) noexcept = default;
ArcAppDict ArcAppDict::Clone() const {
  ArcAppDict out;
  out.name = name;
  out.package_name = package_name;
  out.activity = activity;
  out.intent_uri = intent_uri;
  out.icon_resource_id = icon_resource_id;
  out.last_launch_time = last_launch_time;
  out.install_time = install_time;
  out.sticky = sticky;
  out.notifications_enabled = notifications_enabled;
  out.ready = ready;
  out.suspended = suspended;
  out.show_in_launcher = show_in_launcher;
  out.shortcut = shortcut;
  out.launchable = launchable;
  return out;
}

// static
bool ArcAppDict::Populate(
    const base::Value::Dict& dict, ArcAppDict& out) {
  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.name = *temp;
  }

  const base::Value* package_name_value = dict.Find("packageName");
  if (!package_name_value) {
    return false;
  }
  {
    auto* temp = (*package_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.package_name = *temp;
  }

  const base::Value* activity_value = dict.Find("activity");
  if (!activity_value) {
    return false;
  }
  {
    auto* temp = (*activity_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.activity = *temp;
  }

  const base::Value* intent_uri_value = dict.Find("intentUri");
  if (!intent_uri_value) {
    return false;
  }
  {
    auto* temp = (*intent_uri_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.intent_uri = *temp;
  }

  const base::Value* icon_resource_id_value = dict.Find("iconResourceId");
  if (!icon_resource_id_value) {
    return false;
  }
  {
    auto* temp = (*icon_resource_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.icon_resource_id = *temp;
  }

  const base::Value* last_launch_time_value = dict.Find("lastLaunchTime");
  if (!last_launch_time_value) {
    return false;
  }
  {
    auto temp = (*last_launch_time_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.last_launch_time = *temp;
  }

  const base::Value* install_time_value = dict.Find("installTime");
  if (!install_time_value) {
    return false;
  }
  {
    auto temp = (*install_time_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.install_time = *temp;
  }

  const base::Value* sticky_value = dict.Find("sticky");
  if (!sticky_value) {
    return false;
  }
  {
    auto temp = (*sticky_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.sticky = *temp;
  }

  const base::Value* notifications_enabled_value = dict.Find("notificationsEnabled");
  if (!notifications_enabled_value) {
    return false;
  }
  {
    auto temp = (*notifications_enabled_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.notifications_enabled = *temp;
  }

  const base::Value* ready_value = dict.Find("ready");
  if (!ready_value) {
    return false;
  }
  {
    auto temp = (*ready_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.ready = *temp;
  }

  const base::Value* suspended_value = dict.Find("suspended");
  if (!suspended_value) {
    return false;
  }
  {
    auto temp = (*suspended_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.suspended = *temp;
  }

  const base::Value* show_in_launcher_value = dict.Find("showInLauncher");
  if (!show_in_launcher_value) {
    return false;
  }
  {
    auto temp = (*show_in_launcher_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.show_in_launcher = *temp;
  }

  const base::Value* shortcut_value = dict.Find("shortcut");
  if (!shortcut_value) {
    return false;
  }
  {
    auto temp = (*shortcut_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.shortcut = *temp;
  }

  const base::Value* launchable_value = dict.Find("launchable");
  if (!launchable_value) {
    return false;
  }
  {
    auto temp = (*launchable_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.launchable = *temp;
  }

  return true;
}

// static
bool ArcAppDict::Populate(
    const base::Value& value, ArcAppDict& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ArcAppDict> ArcAppDict::FromValue(const base::Value::Dict& value) {
  ArcAppDict out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ArcAppDict> ArcAppDict::FromValue(const base::Value& value) {
  ArcAppDict out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ArcAppDict::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("name", this->name);

  to_value_result.Set("packageName", this->package_name);

  to_value_result.Set("activity", this->activity);

  to_value_result.Set("intentUri", this->intent_uri);

  to_value_result.Set("iconResourceId", this->icon_resource_id);

  to_value_result.Set("lastLaunchTime", this->last_launch_time);

  to_value_result.Set("installTime", this->install_time);

  to_value_result.Set("sticky", this->sticky);

  to_value_result.Set("notificationsEnabled", this->notifications_enabled);

  to_value_result.Set("ready", this->ready);

  to_value_result.Set("suspended", this->suspended);

  to_value_result.Set("showInLauncher", this->show_in_launcher);

  to_value_result.Set("shortcut", this->shortcut);

  to_value_result.Set("launchable", this->launchable);


  return to_value_result;
}


ArcAppKillsDict::ArcAppKillsDict()
: oom(0.0),
lmkd_foreground(0.0),
lmkd_perceptible(0.0),
lmkd_cached(0.0),
pressure_foreground(0.0),
pressure_perceptible(0.0),
pressure_cached(0.0) {}

ArcAppKillsDict::~ArcAppKillsDict() = default;
ArcAppKillsDict::ArcAppKillsDict(ArcAppKillsDict&& rhs) noexcept = default;
ArcAppKillsDict& ArcAppKillsDict::operator=(ArcAppKillsDict&& rhs) noexcept = default;
ArcAppKillsDict ArcAppKillsDict::Clone() const {
  ArcAppKillsDict out;
  out.oom = oom;
  out.lmkd_foreground = lmkd_foreground;
  out.lmkd_perceptible = lmkd_perceptible;
  out.lmkd_cached = lmkd_cached;
  out.pressure_foreground = pressure_foreground;
  out.pressure_perceptible = pressure_perceptible;
  out.pressure_cached = pressure_cached;
  return out;
}

// static
bool ArcAppKillsDict::Populate(
    const base::Value::Dict& dict, ArcAppKillsDict& out) {
  const base::Value* oom_value = dict.Find("oom");
  if (!oom_value) {
    return false;
  }
  {
    auto temp = (*oom_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.oom = *temp;
  }

  const base::Value* lmkd_foreground_value = dict.Find("lmkdForeground");
  if (!lmkd_foreground_value) {
    return false;
  }
  {
    auto temp = (*lmkd_foreground_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.lmkd_foreground = *temp;
  }

  const base::Value* lmkd_perceptible_value = dict.Find("lmkdPerceptible");
  if (!lmkd_perceptible_value) {
    return false;
  }
  {
    auto temp = (*lmkd_perceptible_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.lmkd_perceptible = *temp;
  }

  const base::Value* lmkd_cached_value = dict.Find("lmkdCached");
  if (!lmkd_cached_value) {
    return false;
  }
  {
    auto temp = (*lmkd_cached_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.lmkd_cached = *temp;
  }

  const base::Value* pressure_foreground_value = dict.Find("pressureForeground");
  if (!pressure_foreground_value) {
    return false;
  }
  {
    auto temp = (*pressure_foreground_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.pressure_foreground = *temp;
  }

  const base::Value* pressure_perceptible_value = dict.Find("pressurePerceptible");
  if (!pressure_perceptible_value) {
    return false;
  }
  {
    auto temp = (*pressure_perceptible_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.pressure_perceptible = *temp;
  }

  const base::Value* pressure_cached_value = dict.Find("pressureCached");
  if (!pressure_cached_value) {
    return false;
  }
  {
    auto temp = (*pressure_cached_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.pressure_cached = *temp;
  }

  return true;
}

// static
bool ArcAppKillsDict::Populate(
    const base::Value& value, ArcAppKillsDict& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ArcAppKillsDict> ArcAppKillsDict::FromValue(const base::Value::Dict& value) {
  ArcAppKillsDict out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ArcAppKillsDict> ArcAppKillsDict::FromValue(const base::Value& value) {
  ArcAppKillsDict out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ArcAppKillsDict::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("oom", this->oom);

  to_value_result.Set("lmkdForeground", this->lmkd_foreground);

  to_value_result.Set("lmkdPerceptible", this->lmkd_perceptible);

  to_value_result.Set("lmkdCached", this->lmkd_cached);

  to_value_result.Set("pressureForeground", this->pressure_foreground);

  to_value_result.Set("pressurePerceptible", this->pressure_perceptible);

  to_value_result.Set("pressureCached", this->pressure_cached);


  return to_value_result;
}


ArcPackageDict::ArcPackageDict()
: package_version(0),
last_backup_time(0.0),
should_sync(false),
vpn_provider(false) {}

ArcPackageDict::~ArcPackageDict() = default;
ArcPackageDict::ArcPackageDict(ArcPackageDict&& rhs) noexcept = default;
ArcPackageDict& ArcPackageDict::operator=(ArcPackageDict&& rhs) noexcept = default;
ArcPackageDict ArcPackageDict::Clone() const {
  ArcPackageDict out;
  out.package_name = package_name;
  out.package_version = package_version;
  out.last_backup_android_id = last_backup_android_id;
  out.last_backup_time = last_backup_time;
  out.should_sync = should_sync;
  out.vpn_provider = vpn_provider;
  return out;
}

// static
bool ArcPackageDict::Populate(
    const base::Value::Dict& dict, ArcPackageDict& out) {
  const base::Value* package_name_value = dict.Find("packageName");
  if (!package_name_value) {
    return false;
  }
  {
    auto* temp = (*package_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.package_name = *temp;
  }

  const base::Value* package_version_value = dict.Find("packageVersion");
  if (!package_version_value) {
    return false;
  }
  {
    auto temp = (*package_version_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.package_version = *temp;
  }

  const base::Value* last_backup_android_id_value = dict.Find("lastBackupAndroidId");
  if (!last_backup_android_id_value) {
    return false;
  }
  {
    auto* temp = (*last_backup_android_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.last_backup_android_id = *temp;
  }

  const base::Value* last_backup_time_value = dict.Find("lastBackupTime");
  if (!last_backup_time_value) {
    return false;
  }
  {
    auto temp = (*last_backup_time_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.last_backup_time = *temp;
  }

  const base::Value* should_sync_value = dict.Find("shouldSync");
  if (!should_sync_value) {
    return false;
  }
  {
    auto temp = (*should_sync_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.should_sync = *temp;
  }

  const base::Value* vpn_provider_value = dict.Find("vpnProvider");
  if (!vpn_provider_value) {
    return false;
  }
  {
    auto temp = (*vpn_provider_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.vpn_provider = *temp;
  }

  return true;
}

// static
bool ArcPackageDict::Populate(
    const base::Value& value, ArcPackageDict& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ArcPackageDict> ArcPackageDict::FromValue(const base::Value::Dict& value) {
  ArcPackageDict out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ArcPackageDict> ArcPackageDict::FromValue(const base::Value& value) {
  ArcPackageDict out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ArcPackageDict::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("packageName", this->package_name);

  to_value_result.Set("packageVersion", this->package_version);

  to_value_result.Set("lastBackupAndroidId", this->last_backup_android_id);

  to_value_result.Set("lastBackupTime", this->last_backup_time);

  to_value_result.Set("shouldSync", this->should_sync);

  to_value_result.Set("vpnProvider", this->vpn_provider);


  return to_value_result;
}


Location::Location()
: x(0.0),
y(0.0) {}

Location::~Location() = default;
Location::Location(Location&& rhs) noexcept = default;
Location& Location::operator=(Location&& rhs) noexcept = default;
Location Location::Clone() const {
  Location out;
  out.x = x;
  out.y = y;
  return out;
}

// static
bool Location::Populate(
    const base::Value::Dict& dict, Location& out) {
  const base::Value* x_value = dict.Find("x");
  if (!x_value) {
    return false;
  }
  {
    auto temp = (*x_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.x = *temp;
  }

  const base::Value* y_value = dict.Find("y");
  if (!y_value) {
    return false;
  }
  {
    auto temp = (*y_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.y = *temp;
  }

  return true;
}

// static
bool Location::Populate(
    const base::Value& value, Location& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Location> Location::FromValue(const base::Value::Dict& value) {
  Location out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Location> Location::FromValue(const base::Value& value) {
  Location out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Location::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("x", this->x);

  to_value_result.Set("y", this->y);


  return to_value_result;
}


Bounds::Bounds()
: left(0.0),
top(0.0),
width(0.0),
height(0.0) {}

Bounds::~Bounds() = default;
Bounds::Bounds(Bounds&& rhs) noexcept = default;
Bounds& Bounds::operator=(Bounds&& rhs) noexcept = default;
Bounds Bounds::Clone() const {
  Bounds out;
  out.left = left;
  out.top = top;
  out.width = width;
  out.height = height;
  return out;
}

// static
bool Bounds::Populate(
    const base::Value::Dict& dict, Bounds& out) {
  const base::Value* left_value = dict.Find("left");
  if (!left_value) {
    return false;
  }
  {
    auto temp = (*left_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.left = *temp;
  }

  const base::Value* top_value = dict.Find("top");
  if (!top_value) {
    return false;
  }
  {
    auto temp = (*top_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.top = *temp;
  }

  const base::Value* width_value = dict.Find("width");
  if (!width_value) {
    return false;
  }
  {
    auto temp = (*width_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.width = *temp;
  }

  const base::Value* height_value = dict.Find("height");
  if (!height_value) {
    return false;
  }
  {
    auto temp = (*height_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.height = *temp;
  }

  return true;
}

// static
bool Bounds::Populate(
    const base::Value& value, Bounds& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Bounds> Bounds::FromValue(const base::Value::Dict& value) {
  Bounds out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Bounds> Bounds::FromValue(const base::Value& value) {
  Bounds out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Bounds::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("left", this->left);

  to_value_result.Set("top", this->top);

  to_value_result.Set("width", this->width);

  to_value_result.Set("height", this->height);


  return to_value_result;
}


ArcAppTracingInfo::ArcAppTracingInfo()
: success(false),
fps(0.0),
perceived_fps(0.0),
commit_deviation(0.0),
present_deviation(0.0),
render_quality(0.0) {}

ArcAppTracingInfo::~ArcAppTracingInfo() = default;
ArcAppTracingInfo::ArcAppTracingInfo(ArcAppTracingInfo&& rhs) noexcept = default;
ArcAppTracingInfo& ArcAppTracingInfo::operator=(ArcAppTracingInfo&& rhs) noexcept = default;
ArcAppTracingInfo ArcAppTracingInfo::Clone() const {
  ArcAppTracingInfo out;
  out.success = success;
  out.fps = fps;
  out.perceived_fps = perceived_fps;
  out.commit_deviation = commit_deviation;
  out.present_deviation = present_deviation;
  out.render_quality = render_quality;
  return out;
}

// static
bool ArcAppTracingInfo::Populate(
    const base::Value::Dict& dict, ArcAppTracingInfo& out) {
  const base::Value* success_value = dict.Find("success");
  if (!success_value) {
    return false;
  }
  {
    auto temp = (*success_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.success = *temp;
  }

  const base::Value* fps_value = dict.Find("fps");
  if (!fps_value) {
    return false;
  }
  {
    auto temp = (*fps_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.fps = *temp;
  }

  const base::Value* perceived_fps_value = dict.Find("perceivedFps");
  if (!perceived_fps_value) {
    return false;
  }
  {
    auto temp = (*perceived_fps_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.perceived_fps = *temp;
  }

  const base::Value* commit_deviation_value = dict.Find("commitDeviation");
  if (!commit_deviation_value) {
    return false;
  }
  {
    auto temp = (*commit_deviation_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.commit_deviation = *temp;
  }

  const base::Value* present_deviation_value = dict.Find("presentDeviation");
  if (!present_deviation_value) {
    return false;
  }
  {
    auto temp = (*present_deviation_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.present_deviation = *temp;
  }

  const base::Value* render_quality_value = dict.Find("renderQuality");
  if (!render_quality_value) {
    return false;
  }
  {
    auto temp = (*render_quality_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.render_quality = *temp;
  }

  return true;
}

// static
bool ArcAppTracingInfo::Populate(
    const base::Value& value, ArcAppTracingInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ArcAppTracingInfo> ArcAppTracingInfo::FromValue(const base::Value::Dict& value) {
  ArcAppTracingInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ArcAppTracingInfo> ArcAppTracingInfo::FromValue(const base::Value& value) {
  ArcAppTracingInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ArcAppTracingInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("success", this->success);

  to_value_result.Set("fps", this->fps);

  to_value_result.Set("perceivedFps", this->perceived_fps);

  to_value_result.Set("commitDeviation", this->commit_deviation);

  to_value_result.Set("presentDeviation", this->present_deviation);

  to_value_result.Set("renderQuality", this->render_quality);


  return to_value_result;
}


const char* ToString(ThemeStyle enum_param) {
  switch (enum_param) {
    case ThemeStyle::kTonalSpot:
      return "TonalSpot";
    case ThemeStyle::kVibrant:
      return "Vibrant";
    case ThemeStyle::kExpressive:
      return "Expressive";
    case ThemeStyle::kSpritz:
      return "Spritz";
    case ThemeStyle::kRainbow:
      return "Rainbow";
    case ThemeStyle::kFruitSalad:
      return "FruitSalad";
    case ThemeStyle::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ThemeStyle ParseThemeStyle(base::StringPiece enum_string) {
  if (enum_string == "TonalSpot")
    return ThemeStyle::kTonalSpot;
  if (enum_string == "Vibrant")
    return ThemeStyle::kVibrant;
  if (enum_string == "Expressive")
    return ThemeStyle::kExpressive;
  if (enum_string == "Spritz")
    return ThemeStyle::kSpritz;
  if (enum_string == "Rainbow")
    return ThemeStyle::kRainbow;
  if (enum_string == "FruitSalad")
    return ThemeStyle::kFruitSalad;
  return ThemeStyle::kNone;
}

std::u16string GetThemeStyleParseError(base::StringPiece enum_string) {
  return u"expected \"TonalSpot\" or \"Vibrant\" or \"Expressive\" or \"Spritz\" or \"Rainbow\" or \"FruitSalad\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


App::App()
: type(),
install_source(),
readiness() {}

App::~App() = default;
App::App(App&& rhs) noexcept = default;
App& App::operator=(App&& rhs) noexcept = default;
App App::Clone() const {
  App out;
  out.app_id = app_id;
  out.name = name;
  out.short_name = short_name;
  out.publisher_id = publisher_id;
  out.type = type;
  out.install_source = install_source;
  out.readiness = readiness;
  out.additional_search_terms = additional_search_terms;
  out.show_in_launcher = show_in_launcher;
  out.show_in_search = show_in_search;
  return out;
}

// static
bool App::Populate(
    const base::Value::Dict& dict, App& out) {
  out.type = AppType();
  out.install_source = AppInstallSource();
  out.readiness = AppReadiness();
  const base::Value* app_id_value = dict.Find("appId");
  if (!app_id_value) {
    return false;
  }
  {
    auto* temp = (*app_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.app_id = *temp;
  }

  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.name = *temp;
  }

  const base::Value* short_name_value = dict.Find("shortName");
  if (!short_name_value) {
    return false;
  }
  {
    auto* temp = (*short_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.short_name = *temp;
  }

  const base::Value* publisher_id_value = dict.Find("publisherId");
  if (!publisher_id_value) {
    return false;
  }
  {
    auto* temp = (*publisher_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.publisher_id = *temp;
  }

  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    {
      const std::string* app_type_as_string = (*type_value).GetIfString();
      if (!app_type_as_string) {
        return false;
      }
      out.type = ParseAppType(*app_type_as_string);
      if (out.type == AppType()) {
        return false;
      }
    }
    } else {
    out.type = AppType();
  }

  const base::Value* install_source_value = dict.Find("installSource");
  if (install_source_value) {
    {
      const std::string* app_install_source_as_string = (*install_source_value).GetIfString();
      if (!app_install_source_as_string) {
        return false;
      }
      out.install_source = ParseAppInstallSource(*app_install_source_as_string);
      if (out.install_source == AppInstallSource()) {
        return false;
      }
    }
    } else {
    out.install_source = AppInstallSource();
  }

  const base::Value* readiness_value = dict.Find("readiness");
  if (readiness_value) {
    {
      const std::string* app_readiness_as_string = (*readiness_value).GetIfString();
      if (!app_readiness_as_string) {
        return false;
      }
      out.readiness = ParseAppReadiness(*app_readiness_as_string);
      if (out.readiness == AppReadiness()) {
        return false;
      }
    }
    } else {
    out.readiness = AppReadiness();
  }

  const base::Value* additional_search_terms_value = dict.Find("additionalSearchTerms");
  if (!additional_search_terms_value) {
    return false;
  }
  {
    if (!(*additional_search_terms_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*additional_search_terms_value).GetList(), out.additional_search_terms)) {
        return false;
      }
    }
  }

  const base::Value* show_in_launcher_value = dict.Find("showInLauncher");
  if (show_in_launcher_value) {
    {
      auto temp = (*show_in_launcher_value).GetIfBool();
      if (!temp.has_value()) {
        out.show_in_launcher = std::nullopt;
        return false;
      }
      out.show_in_launcher = *temp;
    }
  }

  const base::Value* show_in_search_value = dict.Find("showInSearch");
  if (show_in_search_value) {
    {
      auto temp = (*show_in_search_value).GetIfBool();
      if (!temp.has_value()) {
        out.show_in_search = std::nullopt;
        return false;
      }
      out.show_in_search = *temp;
    }
  }

  return true;
}

// static
bool App::Populate(
    const base::Value& value, App& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<App> App::FromValue(const base::Value::Dict& value) {
  App out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<App> App::FromValue(const base::Value& value) {
  App out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict App::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("appId", this->app_id);

  to_value_result.Set("name", this->name);

  to_value_result.Set("shortName", this->short_name);

  to_value_result.Set("publisherId", this->publisher_id);

  if (this->type != AppType()) {
    to_value_result.Set("type", autotest_private::ToString(this->type));

  }
  if (this->install_source != AppInstallSource()) {
    to_value_result.Set("installSource", autotest_private::ToString(this->install_source));

  }
  if (this->readiness != AppReadiness()) {
    to_value_result.Set("readiness", autotest_private::ToString(this->readiness));

  }
  to_value_result.Set("additionalSearchTerms", json_schema_compiler::util::CreateValueFromArray(this->additional_search_terms));

  if (this->show_in_launcher) {
    to_value_result.Set("showInLauncher", *this->show_in_launcher);

  }
  if (this->show_in_search) {
    to_value_result.Set("showInSearch", *this->show_in_search);

  }

  return to_value_result;
}


SystemWebApp::SystemWebApp()
 {}

SystemWebApp::~SystemWebApp() = default;
SystemWebApp::SystemWebApp(SystemWebApp&& rhs) noexcept = default;
SystemWebApp& SystemWebApp::operator=(SystemWebApp&& rhs) noexcept = default;
SystemWebApp SystemWebApp::Clone() const {
  SystemWebApp out;
  out.internal_name = internal_name;
  out.url = url;
  out.name = name;
  out.start_url = start_url;
  return out;
}

// static
bool SystemWebApp::Populate(
    const base::Value::Dict& dict, SystemWebApp& out) {
  const base::Value* internal_name_value = dict.Find("internalName");
  if (!internal_name_value) {
    return false;
  }
  {
    auto* temp = (*internal_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.internal_name = *temp;
  }

  const base::Value* url_value = dict.Find("url");
  if (!url_value) {
    return false;
  }
  {
    auto* temp = (*url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.url = *temp;
  }

  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.name = *temp;
  }

  const base::Value* start_url_value = dict.Find("startUrl");
  if (!start_url_value) {
    return false;
  }
  {
    auto* temp = (*start_url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.start_url = *temp;
  }

  return true;
}

// static
bool SystemWebApp::Populate(
    const base::Value& value, SystemWebApp& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SystemWebApp> SystemWebApp::FromValue(const base::Value::Dict& value) {
  SystemWebApp out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SystemWebApp> SystemWebApp::FromValue(const base::Value& value) {
  SystemWebApp out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SystemWebApp::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("internalName", this->internal_name);

  to_value_result.Set("url", this->url);

  to_value_result.Set("name", this->name);

  to_value_result.Set("startUrl", this->start_url);


  return to_value_result;
}


ShelfItem::ShelfItem()
: type(),
status(),
shows_tooltip(false),
pinned_by_policy(false),
pin_state_forced_by_type(false),
has_notification(false) {}

ShelfItem::~ShelfItem() = default;
ShelfItem::ShelfItem(ShelfItem&& rhs) noexcept = default;
ShelfItem& ShelfItem::operator=(ShelfItem&& rhs) noexcept = default;
ShelfItem ShelfItem::Clone() const {
  ShelfItem out;
  out.app_id = app_id;
  out.launch_id = launch_id;
  out.title = title;
  out.type = type;
  out.status = status;
  out.shows_tooltip = shows_tooltip;
  out.pinned_by_policy = pinned_by_policy;
  out.pin_state_forced_by_type = pin_state_forced_by_type;
  out.has_notification = has_notification;
  return out;
}

// static
bool ShelfItem::Populate(
    const base::Value::Dict& dict, ShelfItem& out) {
  out.type = ShelfItemType();
  const base::Value* app_id_value = dict.Find("appId");
  if (!app_id_value) {
    return false;
  }
  {
    auto* temp = (*app_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.app_id = *temp;
  }

  const base::Value* launch_id_value = dict.Find("launchId");
  if (!launch_id_value) {
    return false;
  }
  {
    auto* temp = (*launch_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.launch_id = *temp;
  }

  const base::Value* title_value = dict.Find("title");
  if (!title_value) {
    return false;
  }
  {
    auto* temp = (*title_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.title = *temp;
  }

  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    {
      const std::string* shelf_item_type_as_string = (*type_value).GetIfString();
      if (!shelf_item_type_as_string) {
        return false;
      }
      out.type = ParseShelfItemType(*shelf_item_type_as_string);
      if (out.type == ShelfItemType()) {
        return false;
      }
    }
    } else {
    out.type = ShelfItemType();
  }

  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    const std::string* shelf_item_status_as_string = (*status_value).GetIfString();
    if (!shelf_item_status_as_string) {
      return false;
    }
    out.status = ParseShelfItemStatus(*shelf_item_status_as_string);
    if (out.status == ShelfItemStatus()) {
      return false;
    }
  }

  const base::Value* shows_tooltip_value = dict.Find("showsTooltip");
  if (!shows_tooltip_value) {
    return false;
  }
  {
    auto temp = (*shows_tooltip_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.shows_tooltip = *temp;
  }

  const base::Value* pinned_by_policy_value = dict.Find("pinnedByPolicy");
  if (!pinned_by_policy_value) {
    return false;
  }
  {
    auto temp = (*pinned_by_policy_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.pinned_by_policy = *temp;
  }

  const base::Value* pin_state_forced_by_type_value = dict.Find("pinStateForcedByType");
  if (!pin_state_forced_by_type_value) {
    return false;
  }
  {
    auto temp = (*pin_state_forced_by_type_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.pin_state_forced_by_type = *temp;
  }

  const base::Value* has_notification_value = dict.Find("hasNotification");
  if (!has_notification_value) {
    return false;
  }
  {
    auto temp = (*has_notification_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.has_notification = *temp;
  }

  return true;
}

// static
bool ShelfItem::Populate(
    const base::Value& value, ShelfItem& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ShelfItem> ShelfItem::FromValue(const base::Value::Dict& value) {
  ShelfItem out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ShelfItem> ShelfItem::FromValue(const base::Value& value) {
  ShelfItem out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ShelfItem::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("appId", this->app_id);

  to_value_result.Set("launchId", this->launch_id);

  to_value_result.Set("title", this->title);

  if (this->type != ShelfItemType()) {
    to_value_result.Set("type", autotest_private::ToString(this->type));

  }
  to_value_result.Set("status", autotest_private::ToString(this->status));

  to_value_result.Set("showsTooltip", this->shows_tooltip);

  to_value_result.Set("pinnedByPolicy", this->pinned_by_policy);

  to_value_result.Set("pinStateForcedByType", this->pin_state_forced_by_type);

  to_value_result.Set("hasNotification", this->has_notification);


  return to_value_result;
}


const char* ToString(AppWindowType enum_param) {
  switch (enum_param) {
    case AppWindowType::kBrowser:
      return "Browser";
    case AppWindowType::kChromeApp:
      return "ChromeApp";
    case AppWindowType::kArcApp:
      return "ArcApp";
    case AppWindowType::kCrostiniApp:
      return "CrostiniApp";
    case AppWindowType::kSystemApp:
      return "SystemApp";
    case AppWindowType::kExtensionApp:
      return "ExtensionApp";
    case AppWindowType::kLacros:
      return "Lacros";
    case AppWindowType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

AppWindowType ParseAppWindowType(base::StringPiece enum_string) {
  if (enum_string == "Browser")
    return AppWindowType::kBrowser;
  if (enum_string == "ChromeApp")
    return AppWindowType::kChromeApp;
  if (enum_string == "ArcApp")
    return AppWindowType::kArcApp;
  if (enum_string == "CrostiniApp")
    return AppWindowType::kCrostiniApp;
  if (enum_string == "SystemApp")
    return AppWindowType::kSystemApp;
  if (enum_string == "ExtensionApp")
    return AppWindowType::kExtensionApp;
  if (enum_string == "Lacros")
    return AppWindowType::kLacros;
  return AppWindowType::kNone;
}

std::u16string GetAppWindowTypeParseError(base::StringPiece enum_string) {
  return u"expected \"Browser\" or \"ChromeApp\" or \"ArcApp\" or \"CrostiniApp\" or \"SystemApp\" or \"ExtensionApp\" or \"Lacros\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(HotseatState enum_param) {
  switch (enum_param) {
    case HotseatState::kHidden:
      return "Hidden";
    case HotseatState::kShownClamShell:
      return "ShownClamShell";
    case HotseatState::kShownHomeLauncher:
      return "ShownHomeLauncher";
    case HotseatState::kExtended:
      return "Extended";
    case HotseatState::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

HotseatState ParseHotseatState(base::StringPiece enum_string) {
  if (enum_string == "Hidden")
    return HotseatState::kHidden;
  if (enum_string == "ShownClamShell")
    return HotseatState::kShownClamShell;
  if (enum_string == "ShownHomeLauncher")
    return HotseatState::kShownHomeLauncher;
  if (enum_string == "Extended")
    return HotseatState::kExtended;
  return HotseatState::kNone;
}

std::u16string GetHotseatStateParseError(base::StringPiece enum_string) {
  return u"expected \"Hidden\" or \"ShownClamShell\" or \"ShownHomeLauncher\" or \"Extended\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(FrameMode enum_param) {
  switch (enum_param) {
    case FrameMode::kNormal:
      return "Normal";
    case FrameMode::kImmersive:
      return "Immersive";
    case FrameMode::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

FrameMode ParseFrameMode(base::StringPiece enum_string) {
  if (enum_string == "Normal")
    return FrameMode::kNormal;
  if (enum_string == "Immersive")
    return FrameMode::kImmersive;
  return FrameMode::kNone;
}

std::u16string GetFrameModeParseError(base::StringPiece enum_string) {
  return u"expected \"Normal\" or \"Immersive\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


OverviewInfo::OverviewInfo()
: is_dragged(false) {}

OverviewInfo::~OverviewInfo() = default;
OverviewInfo::OverviewInfo(OverviewInfo&& rhs) noexcept = default;
OverviewInfo& OverviewInfo::operator=(OverviewInfo&& rhs) noexcept = default;
OverviewInfo OverviewInfo::Clone() const {
  OverviewInfo out;
  out.bounds = bounds.Clone();
  out.is_dragged = is_dragged;
  return out;
}

// static
bool OverviewInfo::Populate(
    const base::Value::Dict& dict, OverviewInfo& out) {
  const base::Value* bounds_value = dict.Find("bounds");
  if (!bounds_value) {
    return false;
  }
  {
    if (!(*bounds_value).is_dict()) {
      return false;
    }
    if (!Bounds::Populate((*bounds_value).GetDict(), out.bounds)) {
      return false;
    }
  }

  const base::Value* is_dragged_value = dict.Find("isDragged");
  if (!is_dragged_value) {
    return false;
  }
  {
    auto temp = (*is_dragged_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_dragged = *temp;
  }

  return true;
}

// static
bool OverviewInfo::Populate(
    const base::Value& value, OverviewInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<OverviewInfo> OverviewInfo::FromValue(const base::Value::Dict& value) {
  OverviewInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<OverviewInfo> OverviewInfo::FromValue(const base::Value& value) {
  OverviewInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict OverviewInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("bounds", (this->bounds).ToValue());

  to_value_result.Set("isDragged", this->is_dragged);


  return to_value_result;
}


ShelfIconPinUpdateParam::ShelfIconPinUpdateParam()
: pinned(false) {}

ShelfIconPinUpdateParam::~ShelfIconPinUpdateParam() = default;
ShelfIconPinUpdateParam::ShelfIconPinUpdateParam(ShelfIconPinUpdateParam&& rhs) noexcept = default;
ShelfIconPinUpdateParam& ShelfIconPinUpdateParam::operator=(ShelfIconPinUpdateParam&& rhs) noexcept = default;
ShelfIconPinUpdateParam ShelfIconPinUpdateParam::Clone() const {
  ShelfIconPinUpdateParam out;
  out.app_id = app_id;
  out.pinned = pinned;
  return out;
}

// static
bool ShelfIconPinUpdateParam::Populate(
    const base::Value::Dict& dict, ShelfIconPinUpdateParam& out) {
  const base::Value* app_id_value = dict.Find("appId");
  if (!app_id_value) {
    return false;
  }
  {
    auto* temp = (*app_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.app_id = *temp;
  }

  const base::Value* pinned_value = dict.Find("pinned");
  if (!pinned_value) {
    return false;
  }
  {
    auto temp = (*pinned_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.pinned = *temp;
  }

  return true;
}

// static
bool ShelfIconPinUpdateParam::Populate(
    const base::Value& value, ShelfIconPinUpdateParam& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ShelfIconPinUpdateParam> ShelfIconPinUpdateParam::FromValue(const base::Value::Dict& value) {
  ShelfIconPinUpdateParam out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ShelfIconPinUpdateParam> ShelfIconPinUpdateParam::FromValue(const base::Value& value) {
  ShelfIconPinUpdateParam out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ShelfIconPinUpdateParam::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("appId", this->app_id);

  to_value_result.Set("pinned", this->pinned);


  return to_value_result;
}


AppWindowInfo::AppWindowInfo()
: id(0),
window_type(),
state_type(),
is_visible(false),
can_focus(false),
is_animating(false),
target_visibility(false),
is_active(false),
has_focus(false),
on_active_desk(false),
has_capture(false),
can_resize(false),
stacking_order(0),
frame_mode(),
is_frame_visible(false),
caption_height(0),
caption_button_enabled_status(0),
caption_button_visible_status(0) {}

AppWindowInfo::~AppWindowInfo() = default;
AppWindowInfo::AppWindowInfo(AppWindowInfo&& rhs) noexcept = default;
AppWindowInfo& AppWindowInfo::operator=(AppWindowInfo&& rhs) noexcept = default;
AppWindowInfo AppWindowInfo::Clone() const {
  AppWindowInfo out;
  out.id = id;
  out.name = name;
  out.window_type = window_type;
  out.state_type = state_type;
  out.bounds_in_root = bounds_in_root.Clone();
  out.display_id = display_id;
  out.is_visible = is_visible;
  out.can_focus = can_focus;
  out.title = title;
  out.is_animating = is_animating;
  out.target_bounds = target_bounds.Clone();
  out.target_visibility = target_visibility;
  out.is_active = is_active;
  out.has_focus = has_focus;
  out.on_active_desk = on_active_desk;
  out.has_capture = has_capture;
  out.can_resize = can_resize;
  out.stacking_order = stacking_order;
  out.frame_mode = frame_mode;
  out.is_frame_visible = is_frame_visible;
  out.caption_height = caption_height;
  out.caption_button_enabled_status = caption_button_enabled_status;
  out.caption_button_visible_status = caption_button_visible_status;
  out.arc_package_name = arc_package_name;
  if (overview_info) {
    out.overview_info = overview_info->Clone();
  }
  out.full_restore_window_app_id = full_restore_window_app_id;
  out.app_id = app_id;
  return out;
}

// static
bool AppWindowInfo::Populate(
    const base::Value::Dict& dict, AppWindowInfo& out) {
  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto temp = (*id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.name = *temp;
  }

  const base::Value* window_type_value = dict.Find("windowType");
  if (!window_type_value) {
    return false;
  }
  {
    const std::string* app_window_type_as_string = (*window_type_value).GetIfString();
    if (!app_window_type_as_string) {
      return false;
    }
    out.window_type = ParseAppWindowType(*app_window_type_as_string);
    if (out.window_type == AppWindowType()) {
      return false;
    }
  }

  const base::Value* state_type_value = dict.Find("stateType");
  if (!state_type_value) {
    return false;
  }
  {
    const std::string* window_state_type_as_string = (*state_type_value).GetIfString();
    if (!window_state_type_as_string) {
      return false;
    }
    out.state_type = ParseWindowStateType(*window_state_type_as_string);
    if (out.state_type == WindowStateType()) {
      return false;
    }
  }

  const base::Value* bounds_in_root_value = dict.Find("boundsInRoot");
  if (!bounds_in_root_value) {
    return false;
  }
  {
    if (!(*bounds_in_root_value).is_dict()) {
      return false;
    }
    if (!Bounds::Populate((*bounds_in_root_value).GetDict(), out.bounds_in_root)) {
      return false;
    }
  }

  const base::Value* display_id_value = dict.Find("displayId");
  if (!display_id_value) {
    return false;
  }
  {
    auto* temp = (*display_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.display_id = *temp;
  }

  const base::Value* is_visible_value = dict.Find("isVisible");
  if (!is_visible_value) {
    return false;
  }
  {
    auto temp = (*is_visible_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_visible = *temp;
  }

  const base::Value* can_focus_value = dict.Find("canFocus");
  if (!can_focus_value) {
    return false;
  }
  {
    auto temp = (*can_focus_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.can_focus = *temp;
  }

  const base::Value* title_value = dict.Find("title");
  if (!title_value) {
    return false;
  }
  {
    auto* temp = (*title_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.title = *temp;
  }

  const base::Value* is_animating_value = dict.Find("isAnimating");
  if (!is_animating_value) {
    return false;
  }
  {
    auto temp = (*is_animating_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_animating = *temp;
  }

  const base::Value* target_bounds_value = dict.Find("targetBounds");
  if (!target_bounds_value) {
    return false;
  }
  {
    if (!(*target_bounds_value).is_dict()) {
      return false;
    }
    if (!Bounds::Populate((*target_bounds_value).GetDict(), out.target_bounds)) {
      return false;
    }
  }

  const base::Value* target_visibility_value = dict.Find("targetVisibility");
  if (!target_visibility_value) {
    return false;
  }
  {
    auto temp = (*target_visibility_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.target_visibility = *temp;
  }

  const base::Value* is_active_value = dict.Find("isActive");
  if (!is_active_value) {
    return false;
  }
  {
    auto temp = (*is_active_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_active = *temp;
  }

  const base::Value* has_focus_value = dict.Find("hasFocus");
  if (!has_focus_value) {
    return false;
  }
  {
    auto temp = (*has_focus_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.has_focus = *temp;
  }

  const base::Value* on_active_desk_value = dict.Find("onActiveDesk");
  if (!on_active_desk_value) {
    return false;
  }
  {
    auto temp = (*on_active_desk_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.on_active_desk = *temp;
  }

  const base::Value* has_capture_value = dict.Find("hasCapture");
  if (!has_capture_value) {
    return false;
  }
  {
    auto temp = (*has_capture_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.has_capture = *temp;
  }

  const base::Value* can_resize_value = dict.Find("canResize");
  if (!can_resize_value) {
    return false;
  }
  {
    auto temp = (*can_resize_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.can_resize = *temp;
  }

  const base::Value* stacking_order_value = dict.Find("stackingOrder");
  if (!stacking_order_value) {
    return false;
  }
  {
    auto temp = (*stacking_order_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.stacking_order = *temp;
  }

  const base::Value* frame_mode_value = dict.Find("frameMode");
  if (!frame_mode_value) {
    return false;
  }
  {
    const std::string* frame_mode_as_string = (*frame_mode_value).GetIfString();
    if (!frame_mode_as_string) {
      return false;
    }
    out.frame_mode = ParseFrameMode(*frame_mode_as_string);
    if (out.frame_mode == FrameMode()) {
      return false;
    }
  }

  const base::Value* is_frame_visible_value = dict.Find("isFrameVisible");
  if (!is_frame_visible_value) {
    return false;
  }
  {
    auto temp = (*is_frame_visible_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_frame_visible = *temp;
  }

  const base::Value* caption_height_value = dict.Find("captionHeight");
  if (!caption_height_value) {
    return false;
  }
  {
    auto temp = (*caption_height_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.caption_height = *temp;
  }

  const base::Value* caption_button_enabled_status_value = dict.Find("captionButtonEnabledStatus");
  if (!caption_button_enabled_status_value) {
    return false;
  }
  {
    auto temp = (*caption_button_enabled_status_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.caption_button_enabled_status = *temp;
  }

  const base::Value* caption_button_visible_status_value = dict.Find("captionButtonVisibleStatus");
  if (!caption_button_visible_status_value) {
    return false;
  }
  {
    auto temp = (*caption_button_visible_status_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.caption_button_visible_status = *temp;
  }

  const base::Value* arc_package_name_value = dict.Find("arcPackageName");
  if (arc_package_name_value) {
    {
      auto* temp = (*arc_package_name_value).GetIfString();
      if (!temp) {
        out.arc_package_name = std::nullopt;
        return false;
      }
      out.arc_package_name = *temp;
    }
  }

  const base::Value* overview_info_value = dict.Find("overviewInfo");
  if (overview_info_value) {
    {
      if (!(*overview_info_value).is_dict()) {
        return false;
      }
      else {
        OverviewInfo temp;
        if (!OverviewInfo::Populate((*overview_info_value).GetDict(), temp))
          return false;
        out.overview_info = std::move(temp);
      }
    }
  }

  const base::Value* full_restore_window_app_id_value = dict.Find("fullRestoreWindowAppId");
  if (full_restore_window_app_id_value) {
    {
      auto* temp = (*full_restore_window_app_id_value).GetIfString();
      if (!temp) {
        out.full_restore_window_app_id = std::nullopt;
        return false;
      }
      out.full_restore_window_app_id = *temp;
    }
  }

  const base::Value* app_id_value = dict.Find("appId");
  if (app_id_value) {
    {
      auto* temp = (*app_id_value).GetIfString();
      if (!temp) {
        out.app_id = std::nullopt;
        return false;
      }
      out.app_id = *temp;
    }
  }

  return true;
}

// static
bool AppWindowInfo::Populate(
    const base::Value& value, AppWindowInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AppWindowInfo> AppWindowInfo::FromValue(const base::Value::Dict& value) {
  AppWindowInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AppWindowInfo> AppWindowInfo::FromValue(const base::Value& value) {
  AppWindowInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict AppWindowInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("name", this->name);

  to_value_result.Set("windowType", autotest_private::ToString(this->window_type));

  to_value_result.Set("stateType", autotest_private::ToString(this->state_type));

  to_value_result.Set("boundsInRoot", (this->bounds_in_root).ToValue());

  to_value_result.Set("displayId", this->display_id);

  to_value_result.Set("isVisible", this->is_visible);

  to_value_result.Set("canFocus", this->can_focus);

  to_value_result.Set("title", this->title);

  to_value_result.Set("isAnimating", this->is_animating);

  to_value_result.Set("targetBounds", (this->target_bounds).ToValue());

  to_value_result.Set("targetVisibility", this->target_visibility);

  to_value_result.Set("isActive", this->is_active);

  to_value_result.Set("hasFocus", this->has_focus);

  to_value_result.Set("onActiveDesk", this->on_active_desk);

  to_value_result.Set("hasCapture", this->has_capture);

  to_value_result.Set("canResize", this->can_resize);

  to_value_result.Set("stackingOrder", this->stacking_order);

  to_value_result.Set("frameMode", autotest_private::ToString(this->frame_mode));

  to_value_result.Set("isFrameVisible", this->is_frame_visible);

  to_value_result.Set("captionHeight", this->caption_height);

  to_value_result.Set("captionButtonEnabledStatus", this->caption_button_enabled_status);

  to_value_result.Set("captionButtonVisibleStatus", this->caption_button_visible_status);

  if (this->arc_package_name) {
    to_value_result.Set("arcPackageName", *this->arc_package_name);

  }
  if (this->overview_info) {
    to_value_result.Set("overviewInfo", (this->overview_info)->ToValue());

  }
  if (this->full_restore_window_app_id) {
    to_value_result.Set("fullRestoreWindowAppId", *this->full_restore_window_app_id);

  }
  if (this->app_id) {
    to_value_result.Set("appId", *this->app_id);

  }

  return to_value_result;
}


Accelerator::Accelerator()
: shift(false),
control(false),
alt(false),
search(false),
pressed(false) {}

Accelerator::~Accelerator() = default;
Accelerator::Accelerator(Accelerator&& rhs) noexcept = default;
Accelerator& Accelerator::operator=(Accelerator&& rhs) noexcept = default;
Accelerator Accelerator::Clone() const {
  Accelerator out;
  out.key_code = key_code;
  out.shift = shift;
  out.control = control;
  out.alt = alt;
  out.search = search;
  out.pressed = pressed;
  return out;
}

// static
bool Accelerator::Populate(
    const base::Value::Dict& dict, Accelerator& out) {
  const base::Value* key_code_value = dict.Find("keyCode");
  if (!key_code_value) {
    return false;
  }
  {
    auto* temp = (*key_code_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.key_code = *temp;
  }

  const base::Value* shift_value = dict.Find("shift");
  if (!shift_value) {
    return false;
  }
  {
    auto temp = (*shift_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.shift = *temp;
  }

  const base::Value* control_value = dict.Find("control");
  if (!control_value) {
    return false;
  }
  {
    auto temp = (*control_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.control = *temp;
  }

  const base::Value* alt_value = dict.Find("alt");
  if (!alt_value) {
    return false;
  }
  {
    auto temp = (*alt_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.alt = *temp;
  }

  const base::Value* search_value = dict.Find("search");
  if (!search_value) {
    return false;
  }
  {
    auto temp = (*search_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.search = *temp;
  }

  const base::Value* pressed_value = dict.Find("pressed");
  if (!pressed_value) {
    return false;
  }
  {
    auto temp = (*pressed_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.pressed = *temp;
  }

  return true;
}

// static
bool Accelerator::Populate(
    const base::Value& value, Accelerator& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Accelerator> Accelerator::FromValue(const base::Value::Dict& value) {
  Accelerator out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Accelerator> Accelerator::FromValue(const base::Value& value) {
  Accelerator out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Accelerator::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("keyCode", this->key_code);

  to_value_result.Set("shift", this->shift);

  to_value_result.Set("control", this->control);

  to_value_result.Set("alt", this->alt);

  to_value_result.Set("search", this->search);

  to_value_result.Set("pressed", this->pressed);


  return to_value_result;
}


ScrollableShelfState::ScrollableShelfState()
 {}

ScrollableShelfState::~ScrollableShelfState() = default;
ScrollableShelfState::ScrollableShelfState(ScrollableShelfState&& rhs) noexcept = default;
ScrollableShelfState& ScrollableShelfState::operator=(ScrollableShelfState&& rhs) noexcept = default;
ScrollableShelfState ScrollableShelfState::Clone() const {
  ScrollableShelfState out;
  out.scroll_distance = scroll_distance;
  return out;
}

// static
bool ScrollableShelfState::Populate(
    const base::Value::Dict& dict, ScrollableShelfState& out) {
  const base::Value* scroll_distance_value = dict.Find("scrollDistance");
  if (scroll_distance_value) {
    {
      auto temp = (*scroll_distance_value).GetIfDouble();
      if (!temp.has_value()) {
        out.scroll_distance = std::nullopt;
        return false;
      }
      out.scroll_distance = *temp;
    }
  }

  return true;
}

// static
bool ScrollableShelfState::Populate(
    const base::Value& value, ScrollableShelfState& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ScrollableShelfState> ScrollableShelfState::FromValue(const base::Value::Dict& value) {
  ScrollableShelfState out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ScrollableShelfState> ScrollableShelfState::FromValue(const base::Value& value) {
  ScrollableShelfState out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ScrollableShelfState::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->scroll_distance) {
    to_value_result.Set("scrollDistance", *this->scroll_distance);

  }

  return to_value_result;
}


ShelfState::ShelfState()
 {}

ShelfState::~ShelfState() = default;
ShelfState::ShelfState(ShelfState&& rhs) noexcept = default;
ShelfState& ShelfState::operator=(ShelfState&& rhs) noexcept = default;
ShelfState ShelfState::Clone() const {
  ShelfState out;
  out.scroll_distance = scroll_distance;
  return out;
}

// static
bool ShelfState::Populate(
    const base::Value::Dict& dict, ShelfState& out) {
  const base::Value* scroll_distance_value = dict.Find("scrollDistance");
  if (scroll_distance_value) {
    {
      auto temp = (*scroll_distance_value).GetIfDouble();
      if (!temp.has_value()) {
        out.scroll_distance = std::nullopt;
        return false;
      }
      out.scroll_distance = *temp;
    }
  }

  return true;
}

// static
bool ShelfState::Populate(
    const base::Value& value, ShelfState& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ShelfState> ShelfState::FromValue(const base::Value::Dict& value) {
  ShelfState out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ShelfState> ShelfState::FromValue(const base::Value& value) {
  ShelfState out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ShelfState::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->scroll_distance) {
    to_value_result.Set("scrollDistance", *this->scroll_distance);

  }

  return to_value_result;
}


ScrollableShelfInfo::ScrollableShelfInfo()
: main_axis_offset(0.0),
page_offset(0.0),
is_animating(false),
icons_under_animation(false),
is_overflow(false),
is_shelf_widget_animating(false) {}

ScrollableShelfInfo::~ScrollableShelfInfo() = default;
ScrollableShelfInfo::ScrollableShelfInfo(ScrollableShelfInfo&& rhs) noexcept = default;
ScrollableShelfInfo& ScrollableShelfInfo::operator=(ScrollableShelfInfo&& rhs) noexcept = default;
ScrollableShelfInfo ScrollableShelfInfo::Clone() const {
  ScrollableShelfInfo out;
  out.main_axis_offset = main_axis_offset;
  out.page_offset = page_offset;
  out.target_main_axis_offset = target_main_axis_offset;
  out.left_arrow_bounds = left_arrow_bounds.Clone();
  out.right_arrow_bounds = right_arrow_bounds.Clone();
  out.is_animating = is_animating;
  out.icons_under_animation = icons_under_animation;
  out.is_overflow = is_overflow;
  out.icons_bounds_in_screen.reserve(icons_bounds_in_screen.size());
  for (const auto& element : icons_bounds_in_screen) {
    json_schema_compiler::util::AppendToContainer(out.icons_bounds_in_screen, element.Clone());
  }
  out.is_shelf_widget_animating = is_shelf_widget_animating;
  return out;
}

// static
bool ScrollableShelfInfo::Populate(
    const base::Value::Dict& dict, ScrollableShelfInfo& out) {
  const base::Value* main_axis_offset_value = dict.Find("mainAxisOffset");
  if (!main_axis_offset_value) {
    return false;
  }
  {
    auto temp = (*main_axis_offset_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.main_axis_offset = *temp;
  }

  const base::Value* page_offset_value = dict.Find("pageOffset");
  if (!page_offset_value) {
    return false;
  }
  {
    auto temp = (*page_offset_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.page_offset = *temp;
  }

  const base::Value* target_main_axis_offset_value = dict.Find("targetMainAxisOffset");
  if (target_main_axis_offset_value) {
    {
      auto temp = (*target_main_axis_offset_value).GetIfDouble();
      if (!temp.has_value()) {
        out.target_main_axis_offset = std::nullopt;
        return false;
      }
      out.target_main_axis_offset = *temp;
    }
  }

  const base::Value* left_arrow_bounds_value = dict.Find("leftArrowBounds");
  if (!left_arrow_bounds_value) {
    return false;
  }
  {
    if (!(*left_arrow_bounds_value).is_dict()) {
      return false;
    }
    if (!Bounds::Populate((*left_arrow_bounds_value).GetDict(), out.left_arrow_bounds)) {
      return false;
    }
  }

  const base::Value* right_arrow_bounds_value = dict.Find("rightArrowBounds");
  if (!right_arrow_bounds_value) {
    return false;
  }
  {
    if (!(*right_arrow_bounds_value).is_dict()) {
      return false;
    }
    if (!Bounds::Populate((*right_arrow_bounds_value).GetDict(), out.right_arrow_bounds)) {
      return false;
    }
  }

  const base::Value* is_animating_value = dict.Find("isAnimating");
  if (!is_animating_value) {
    return false;
  }
  {
    auto temp = (*is_animating_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_animating = *temp;
  }

  const base::Value* icons_under_animation_value = dict.Find("iconsUnderAnimation");
  if (!icons_under_animation_value) {
    return false;
  }
  {
    auto temp = (*icons_under_animation_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.icons_under_animation = *temp;
  }

  const base::Value* is_overflow_value = dict.Find("isOverflow");
  if (!is_overflow_value) {
    return false;
  }
  {
    auto temp = (*is_overflow_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_overflow = *temp;
  }

  const base::Value* icons_bounds_in_screen_value = dict.Find("iconsBoundsInScreen");
  if (!icons_bounds_in_screen_value) {
    return false;
  }
  {
    if (!(*icons_bounds_in_screen_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*icons_bounds_in_screen_value).GetList(), out.icons_bounds_in_screen)) {
        return false;
      }
    }
  }

  const base::Value* is_shelf_widget_animating_value = dict.Find("isShelfWidgetAnimating");
  if (!is_shelf_widget_animating_value) {
    return false;
  }
  {
    auto temp = (*is_shelf_widget_animating_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_shelf_widget_animating = *temp;
  }

  return true;
}

// static
bool ScrollableShelfInfo::Populate(
    const base::Value& value, ScrollableShelfInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ScrollableShelfInfo> ScrollableShelfInfo::FromValue(const base::Value::Dict& value) {
  ScrollableShelfInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ScrollableShelfInfo> ScrollableShelfInfo::FromValue(const base::Value& value) {
  ScrollableShelfInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ScrollableShelfInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("mainAxisOffset", this->main_axis_offset);

  to_value_result.Set("pageOffset", this->page_offset);

  if (this->target_main_axis_offset) {
    to_value_result.Set("targetMainAxisOffset", *this->target_main_axis_offset);

  }
  to_value_result.Set("leftArrowBounds", (this->left_arrow_bounds).ToValue());

  to_value_result.Set("rightArrowBounds", (this->right_arrow_bounds).ToValue());

  to_value_result.Set("isAnimating", this->is_animating);

  to_value_result.Set("iconsUnderAnimation", this->icons_under_animation);

  to_value_result.Set("isOverflow", this->is_overflow);

  to_value_result.Set("iconsBoundsInScreen", json_schema_compiler::util::CreateValueFromArray(this->icons_bounds_in_screen));

  to_value_result.Set("isShelfWidgetAnimating", this->is_shelf_widget_animating);


  return to_value_result;
}


HotseatSwipeDescriptor::HotseatSwipeDescriptor()
 {}

HotseatSwipeDescriptor::~HotseatSwipeDescriptor() = default;
HotseatSwipeDescriptor::HotseatSwipeDescriptor(HotseatSwipeDescriptor&& rhs) noexcept = default;
HotseatSwipeDescriptor& HotseatSwipeDescriptor::operator=(HotseatSwipeDescriptor&& rhs) noexcept = default;
HotseatSwipeDescriptor HotseatSwipeDescriptor::Clone() const {
  HotseatSwipeDescriptor out;
  out.swipe_start_location = swipe_start_location.Clone();
  out.swipe_end_location = swipe_end_location.Clone();
  return out;
}

// static
bool HotseatSwipeDescriptor::Populate(
    const base::Value::Dict& dict, HotseatSwipeDescriptor& out) {
  const base::Value* swipe_start_location_value = dict.Find("swipeStartLocation");
  if (!swipe_start_location_value) {
    return false;
  }
  {
    if (!(*swipe_start_location_value).is_dict()) {
      return false;
    }
    if (!Location::Populate((*swipe_start_location_value).GetDict(), out.swipe_start_location)) {
      return false;
    }
  }

  const base::Value* swipe_end_location_value = dict.Find("swipeEndLocation");
  if (!swipe_end_location_value) {
    return false;
  }
  {
    if (!(*swipe_end_location_value).is_dict()) {
      return false;
    }
    if (!Location::Populate((*swipe_end_location_value).GetDict(), out.swipe_end_location)) {
      return false;
    }
  }

  return true;
}

// static
bool HotseatSwipeDescriptor::Populate(
    const base::Value& value, HotseatSwipeDescriptor& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<HotseatSwipeDescriptor> HotseatSwipeDescriptor::FromValue(const base::Value::Dict& value) {
  HotseatSwipeDescriptor out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<HotseatSwipeDescriptor> HotseatSwipeDescriptor::FromValue(const base::Value& value) {
  HotseatSwipeDescriptor out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict HotseatSwipeDescriptor::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("swipeStartLocation", (this->swipe_start_location).ToValue());

  to_value_result.Set("swipeEndLocation", (this->swipe_end_location).ToValue());


  return to_value_result;
}


HotseatInfo::HotseatInfo()
: state(),
is_animating(false),
is_auto_hidden(false) {}

HotseatInfo::~HotseatInfo() = default;
HotseatInfo::HotseatInfo(HotseatInfo&& rhs) noexcept = default;
HotseatInfo& HotseatInfo::operator=(HotseatInfo&& rhs) noexcept = default;
HotseatInfo HotseatInfo::Clone() const {
  HotseatInfo out;
  out.swipe_up = swipe_up.Clone();
  out.state = state;
  out.is_animating = is_animating;
  out.is_auto_hidden = is_auto_hidden;
  return out;
}

// static
bool HotseatInfo::Populate(
    const base::Value::Dict& dict, HotseatInfo& out) {
  const base::Value* swipe_up_value = dict.Find("swipeUp");
  if (!swipe_up_value) {
    return false;
  }
  {
    if (!(*swipe_up_value).is_dict()) {
      return false;
    }
    if (!HotseatSwipeDescriptor::Populate((*swipe_up_value).GetDict(), out.swipe_up)) {
      return false;
    }
  }

  const base::Value* state_value = dict.Find("state");
  if (!state_value) {
    return false;
  }
  {
    const std::string* hotseat_state_as_string = (*state_value).GetIfString();
    if (!hotseat_state_as_string) {
      return false;
    }
    out.state = ParseHotseatState(*hotseat_state_as_string);
    if (out.state == HotseatState()) {
      return false;
    }
  }

  const base::Value* is_animating_value = dict.Find("isAnimating");
  if (!is_animating_value) {
    return false;
  }
  {
    auto temp = (*is_animating_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_animating = *temp;
  }

  const base::Value* is_auto_hidden_value = dict.Find("isAutoHidden");
  if (!is_auto_hidden_value) {
    return false;
  }
  {
    auto temp = (*is_auto_hidden_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_auto_hidden = *temp;
  }

  return true;
}

// static
bool HotseatInfo::Populate(
    const base::Value& value, HotseatInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<HotseatInfo> HotseatInfo::FromValue(const base::Value::Dict& value) {
  HotseatInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<HotseatInfo> HotseatInfo::FromValue(const base::Value& value) {
  HotseatInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict HotseatInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("swipeUp", (this->swipe_up).ToValue());

  to_value_result.Set("state", autotest_private::ToString(this->state));

  to_value_result.Set("isAnimating", this->is_animating);

  to_value_result.Set("isAutoHidden", this->is_auto_hidden);


  return to_value_result;
}


ShelfUIInfo::ShelfUIInfo()
 {}

ShelfUIInfo::~ShelfUIInfo() = default;
ShelfUIInfo::ShelfUIInfo(ShelfUIInfo&& rhs) noexcept = default;
ShelfUIInfo& ShelfUIInfo::operator=(ShelfUIInfo&& rhs) noexcept = default;
ShelfUIInfo ShelfUIInfo::Clone() const {
  ShelfUIInfo out;
  out.hotseat_info = hotseat_info.Clone();
  out.scrollable_shelf_info = scrollable_shelf_info.Clone();
  return out;
}

// static
bool ShelfUIInfo::Populate(
    const base::Value::Dict& dict, ShelfUIInfo& out) {
  const base::Value* hotseat_info_value = dict.Find("hotseatInfo");
  if (!hotseat_info_value) {
    return false;
  }
  {
    if (!(*hotseat_info_value).is_dict()) {
      return false;
    }
    if (!HotseatInfo::Populate((*hotseat_info_value).GetDict(), out.hotseat_info)) {
      return false;
    }
  }

  const base::Value* scrollable_shelf_info_value = dict.Find("scrollableShelfInfo");
  if (!scrollable_shelf_info_value) {
    return false;
  }
  {
    if (!(*scrollable_shelf_info_value).is_dict()) {
      return false;
    }
    if (!ScrollableShelfInfo::Populate((*scrollable_shelf_info_value).GetDict(), out.scrollable_shelf_info)) {
      return false;
    }
  }

  return true;
}

// static
bool ShelfUIInfo::Populate(
    const base::Value& value, ShelfUIInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ShelfUIInfo> ShelfUIInfo::FromValue(const base::Value::Dict& value) {
  ShelfUIInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ShelfUIInfo> ShelfUIInfo::FromValue(const base::Value& value) {
  ShelfUIInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ShelfUIInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("hotseatInfo", (this->hotseat_info).ToValue());

  to_value_result.Set("scrollableShelfInfo", (this->scrollable_shelf_info).ToValue());


  return to_value_result;
}


DesksInfo::DesksInfo()
: active_desk_index(0),
num_desks(0),
is_animating(false) {}

DesksInfo::~DesksInfo() = default;
DesksInfo::DesksInfo(DesksInfo&& rhs) noexcept = default;
DesksInfo& DesksInfo::operator=(DesksInfo&& rhs) noexcept = default;
DesksInfo DesksInfo::Clone() const {
  DesksInfo out;
  out.active_desk_index = active_desk_index;
  out.num_desks = num_desks;
  out.is_animating = is_animating;
  out.desk_containers = desk_containers;
  return out;
}

// static
bool DesksInfo::Populate(
    const base::Value::Dict& dict, DesksInfo& out) {
  const base::Value* active_desk_index_value = dict.Find("activeDeskIndex");
  if (!active_desk_index_value) {
    return false;
  }
  {
    auto temp = (*active_desk_index_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.active_desk_index = *temp;
  }

  const base::Value* num_desks_value = dict.Find("numDesks");
  if (!num_desks_value) {
    return false;
  }
  {
    auto temp = (*num_desks_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.num_desks = *temp;
  }

  const base::Value* is_animating_value = dict.Find("isAnimating");
  if (!is_animating_value) {
    return false;
  }
  {
    auto temp = (*is_animating_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_animating = *temp;
  }

  const base::Value* desk_containers_value = dict.Find("deskContainers");
  if (!desk_containers_value) {
    return false;
  }
  {
    if (!(*desk_containers_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*desk_containers_value).GetList(), out.desk_containers)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool DesksInfo::Populate(
    const base::Value& value, DesksInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DesksInfo> DesksInfo::FromValue(const base::Value::Dict& value) {
  DesksInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DesksInfo> DesksInfo::FromValue(const base::Value& value) {
  DesksInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DesksInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("activeDeskIndex", this->active_desk_index);

  to_value_result.Set("numDesks", this->num_desks);

  to_value_result.Set("isAnimating", this->is_animating);

  to_value_result.Set("deskContainers", json_schema_compiler::util::CreateValueFromArray(this->desk_containers));


  return to_value_result;
}


LauncherSearchBoxState::LauncherSearchBoxState()
 {}

LauncherSearchBoxState::~LauncherSearchBoxState() = default;
LauncherSearchBoxState::LauncherSearchBoxState(LauncherSearchBoxState&& rhs) noexcept = default;
LauncherSearchBoxState& LauncherSearchBoxState::operator=(LauncherSearchBoxState&& rhs) noexcept = default;
LauncherSearchBoxState LauncherSearchBoxState::Clone() const {
  LauncherSearchBoxState out;
  out.ghost_text = ghost_text;
  return out;
}

// static
bool LauncherSearchBoxState::Populate(
    const base::Value::Dict& dict, LauncherSearchBoxState& out) {
  const base::Value* ghost_text_value = dict.Find("ghostText");
  if (!ghost_text_value) {
    return false;
  }
  {
    auto* temp = (*ghost_text_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.ghost_text = *temp;
  }

  return true;
}

// static
bool LauncherSearchBoxState::Populate(
    const base::Value& value, LauncherSearchBoxState& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<LauncherSearchBoxState> LauncherSearchBoxState::FromValue(const base::Value::Dict& value) {
  LauncherSearchBoxState out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<LauncherSearchBoxState> LauncherSearchBoxState::FromValue(const base::Value& value) {
  LauncherSearchBoxState out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict LauncherSearchBoxState::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("ghostText", this->ghost_text);


  return to_value_result;
}


FrameCountingPerSinkData::FrameCountingPerSinkData()
: is_root(false) {}

FrameCountingPerSinkData::~FrameCountingPerSinkData() = default;
FrameCountingPerSinkData::FrameCountingPerSinkData(FrameCountingPerSinkData&& rhs) noexcept = default;
FrameCountingPerSinkData& FrameCountingPerSinkData::operator=(FrameCountingPerSinkData&& rhs) noexcept = default;
FrameCountingPerSinkData FrameCountingPerSinkData::Clone() const {
  FrameCountingPerSinkData out;
  out.sink_type = sink_type;
  out.is_root = is_root;
  out.debug_label = debug_label;
  out.presented_frames = presented_frames;
  return out;
}

// static
bool FrameCountingPerSinkData::Populate(
    const base::Value::Dict& dict, FrameCountingPerSinkData& out) {
  const base::Value* sink_type_value = dict.Find("sinkType");
  if (!sink_type_value) {
    return false;
  }
  {
    auto* temp = (*sink_type_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.sink_type = *temp;
  }

  const base::Value* is_root_value = dict.Find("isRoot");
  if (!is_root_value) {
    return false;
  }
  {
    auto temp = (*is_root_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_root = *temp;
  }

  const base::Value* debug_label_value = dict.Find("debugLabel");
  if (!debug_label_value) {
    return false;
  }
  {
    auto* temp = (*debug_label_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.debug_label = *temp;
  }

  const base::Value* presented_frames_value = dict.Find("presentedFrames");
  if (!presented_frames_value) {
    return false;
  }
  {
    if (!(*presented_frames_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*presented_frames_value).GetList(), out.presented_frames)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool FrameCountingPerSinkData::Populate(
    const base::Value& value, FrameCountingPerSinkData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<FrameCountingPerSinkData> FrameCountingPerSinkData::FromValue(const base::Value::Dict& value) {
  FrameCountingPerSinkData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<FrameCountingPerSinkData> FrameCountingPerSinkData::FromValue(const base::Value& value) {
  FrameCountingPerSinkData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict FrameCountingPerSinkData::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("sinkType", this->sink_type);

  to_value_result.Set("isRoot", this->is_root);

  to_value_result.Set("debugLabel", this->debug_label);

  to_value_result.Set("presentedFrames", json_schema_compiler::util::CreateValueFromArray(this->presented_frames));


  return to_value_result;
}


SetWindowBoundsResult::SetWindowBoundsResult()
 {}

SetWindowBoundsResult::~SetWindowBoundsResult() = default;
SetWindowBoundsResult::SetWindowBoundsResult(SetWindowBoundsResult&& rhs) noexcept = default;
SetWindowBoundsResult& SetWindowBoundsResult::operator=(SetWindowBoundsResult&& rhs) noexcept = default;
SetWindowBoundsResult SetWindowBoundsResult::Clone() const {
  SetWindowBoundsResult out;
  out.bounds = bounds.Clone();
  out.display_id = display_id;
  return out;
}

// static
bool SetWindowBoundsResult::Populate(
    const base::Value::Dict& dict, SetWindowBoundsResult& out) {
  const base::Value* bounds_value = dict.Find("bounds");
  if (!bounds_value) {
    return false;
  }
  {
    if (!(*bounds_value).is_dict()) {
      return false;
    }
    if (!Bounds::Populate((*bounds_value).GetDict(), out.bounds)) {
      return false;
    }
  }

  const base::Value* display_id_value = dict.Find("displayId");
  if (!display_id_value) {
    return false;
  }
  {
    auto* temp = (*display_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.display_id = *temp;
  }

  return true;
}

// static
bool SetWindowBoundsResult::Populate(
    const base::Value& value, SetWindowBoundsResult& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SetWindowBoundsResult> SetWindowBoundsResult::FromValue(const base::Value::Dict& value) {
  SetWindowBoundsResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SetWindowBoundsResult> SetWindowBoundsResult::FromValue(const base::Value& value) {
  SetWindowBoundsResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SetWindowBoundsResult::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("bounds", (this->bounds).ToValue());

  to_value_result.Set("displayId", this->display_id);


  return to_value_result;
}


DisplaySmoothnessData::DisplaySmoothnessData()
: frames_expected(0),
frames_produced(0),
jank_count(0) {}

DisplaySmoothnessData::~DisplaySmoothnessData() = default;
DisplaySmoothnessData::DisplaySmoothnessData(DisplaySmoothnessData&& rhs) noexcept = default;
DisplaySmoothnessData& DisplaySmoothnessData::operator=(DisplaySmoothnessData&& rhs) noexcept = default;
DisplaySmoothnessData DisplaySmoothnessData::Clone() const {
  DisplaySmoothnessData out;
  out.frames_expected = frames_expected;
  out.frames_produced = frames_produced;
  out.jank_count = jank_count;
  out.throughput = throughput;
  return out;
}

// static
bool DisplaySmoothnessData::Populate(
    const base::Value::Dict& dict, DisplaySmoothnessData& out) {
  const base::Value* frames_expected_value = dict.Find("framesExpected");
  if (!frames_expected_value) {
    return false;
  }
  {
    auto temp = (*frames_expected_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.frames_expected = *temp;
  }

  const base::Value* frames_produced_value = dict.Find("framesProduced");
  if (!frames_produced_value) {
    return false;
  }
  {
    auto temp = (*frames_produced_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.frames_produced = *temp;
  }

  const base::Value* jank_count_value = dict.Find("jankCount");
  if (!jank_count_value) {
    return false;
  }
  {
    auto temp = (*jank_count_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.jank_count = *temp;
  }

  const base::Value* throughput_value = dict.Find("throughput");
  if (!throughput_value) {
    return false;
  }
  {
    if (!(*throughput_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*throughput_value).GetList(), out.throughput)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool DisplaySmoothnessData::Populate(
    const base::Value& value, DisplaySmoothnessData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DisplaySmoothnessData> DisplaySmoothnessData::FromValue(const base::Value::Dict& value) {
  DisplaySmoothnessData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DisplaySmoothnessData> DisplaySmoothnessData::FromValue(const base::Value& value) {
  DisplaySmoothnessData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DisplaySmoothnessData::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("framesExpected", this->frames_expected);

  to_value_result.Set("framesProduced", this->frames_produced);

  to_value_result.Set("jankCount", this->jank_count);

  to_value_result.Set("throughput", json_schema_compiler::util::CreateValueFromArray(this->throughput));


  return to_value_result;
}


ThroughputTrackerAnimationData::ThroughputTrackerAnimationData()
: start_offset_ms(0),
stop_offset_ms(0),
frames_expected(0),
frames_produced(0),
jank_count(0) {}

ThroughputTrackerAnimationData::~ThroughputTrackerAnimationData() = default;
ThroughputTrackerAnimationData::ThroughputTrackerAnimationData(ThroughputTrackerAnimationData&& rhs) noexcept = default;
ThroughputTrackerAnimationData& ThroughputTrackerAnimationData::operator=(ThroughputTrackerAnimationData&& rhs) noexcept = default;
ThroughputTrackerAnimationData ThroughputTrackerAnimationData::Clone() const {
  ThroughputTrackerAnimationData out;
  out.start_offset_ms = start_offset_ms;
  out.stop_offset_ms = stop_offset_ms;
  out.frames_expected = frames_expected;
  out.frames_produced = frames_produced;
  out.jank_count = jank_count;
  return out;
}

// static
bool ThroughputTrackerAnimationData::Populate(
    const base::Value::Dict& dict, ThroughputTrackerAnimationData& out) {
  const base::Value* start_offset_ms_value = dict.Find("startOffsetMs");
  if (!start_offset_ms_value) {
    return false;
  }
  {
    auto temp = (*start_offset_ms_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.start_offset_ms = *temp;
  }

  const base::Value* stop_offset_ms_value = dict.Find("stopOffsetMs");
  if (!stop_offset_ms_value) {
    return false;
  }
  {
    auto temp = (*stop_offset_ms_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.stop_offset_ms = *temp;
  }

  const base::Value* frames_expected_value = dict.Find("framesExpected");
  if (!frames_expected_value) {
    return false;
  }
  {
    auto temp = (*frames_expected_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.frames_expected = *temp;
  }

  const base::Value* frames_produced_value = dict.Find("framesProduced");
  if (!frames_produced_value) {
    return false;
  }
  {
    auto temp = (*frames_produced_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.frames_produced = *temp;
  }

  const base::Value* jank_count_value = dict.Find("jankCount");
  if (!jank_count_value) {
    return false;
  }
  {
    auto temp = (*jank_count_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.jank_count = *temp;
  }

  return true;
}

// static
bool ThroughputTrackerAnimationData::Populate(
    const base::Value& value, ThroughputTrackerAnimationData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ThroughputTrackerAnimationData> ThroughputTrackerAnimationData::FromValue(const base::Value::Dict& value) {
  ThroughputTrackerAnimationData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ThroughputTrackerAnimationData> ThroughputTrackerAnimationData::FromValue(const base::Value& value) {
  ThroughputTrackerAnimationData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ThroughputTrackerAnimationData::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("startOffsetMs", this->start_offset_ms);

  to_value_result.Set("stopOffsetMs", this->stop_offset_ms);

  to_value_result.Set("framesExpected", this->frames_expected);

  to_value_result.Set("framesProduced", this->frames_produced);

  to_value_result.Set("jankCount", this->jank_count);


  return to_value_result;
}


ResetHoldingSpaceOptions::ResetHoldingSpaceOptions()
: mark_time_of_first_add(false) {}

ResetHoldingSpaceOptions::~ResetHoldingSpaceOptions() = default;
ResetHoldingSpaceOptions::ResetHoldingSpaceOptions(ResetHoldingSpaceOptions&& rhs) noexcept = default;
ResetHoldingSpaceOptions& ResetHoldingSpaceOptions::operator=(ResetHoldingSpaceOptions&& rhs) noexcept = default;
ResetHoldingSpaceOptions ResetHoldingSpaceOptions::Clone() const {
  ResetHoldingSpaceOptions out;
  out.mark_time_of_first_add = mark_time_of_first_add;
  return out;
}

// static
bool ResetHoldingSpaceOptions::Populate(
    const base::Value::Dict& dict, ResetHoldingSpaceOptions& out) {
  const base::Value* mark_time_of_first_add_value = dict.Find("markTimeOfFirstAdd");
  if (!mark_time_of_first_add_value) {
    return false;
  }
  {
    auto temp = (*mark_time_of_first_add_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.mark_time_of_first_add = *temp;
  }

  return true;
}

// static
bool ResetHoldingSpaceOptions::Populate(
    const base::Value& value, ResetHoldingSpaceOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ResetHoldingSpaceOptions> ResetHoldingSpaceOptions::FromValue(const base::Value::Dict& value) {
  ResetHoldingSpaceOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ResetHoldingSpaceOptions> ResetHoldingSpaceOptions::FromValue(const base::Value& value) {
  ResetHoldingSpaceOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ResetHoldingSpaceOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("markTimeOfFirstAdd", this->mark_time_of_first_add);


  return to_value_result;
}


LoginEventRecorderData::LoginEventRecorderData()
: microsecnods_since_unix_epoch(0.0) {}

LoginEventRecorderData::~LoginEventRecorderData() = default;
LoginEventRecorderData::LoginEventRecorderData(LoginEventRecorderData&& rhs) noexcept = default;
LoginEventRecorderData& LoginEventRecorderData::operator=(LoginEventRecorderData&& rhs) noexcept = default;
LoginEventRecorderData LoginEventRecorderData::Clone() const {
  LoginEventRecorderData out;
  out.name = name;
  out.microsecnods_since_unix_epoch = microsecnods_since_unix_epoch;
  return out;
}

// static
bool LoginEventRecorderData::Populate(
    const base::Value::Dict& dict, LoginEventRecorderData& out) {
  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.name = *temp;
  }

  const base::Value* microsecnods_since_unix_epoch_value = dict.Find("microsecnods_since_unix_epoch");
  if (!microsecnods_since_unix_epoch_value) {
    return false;
  }
  {
    auto temp = (*microsecnods_since_unix_epoch_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.microsecnods_since_unix_epoch = *temp;
  }

  return true;
}

// static
bool LoginEventRecorderData::Populate(
    const base::Value& value, LoginEventRecorderData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<LoginEventRecorderData> LoginEventRecorderData::FromValue(const base::Value::Dict& value) {
  LoginEventRecorderData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<LoginEventRecorderData> LoginEventRecorderData::FromValue(const base::Value& value) {
  LoginEventRecorderData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict LoginEventRecorderData::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("name", this->name);

  to_value_result.Set("microsecnods_since_unix_epoch", this->microsecnods_since_unix_epoch);


  return to_value_result;
}


GetAccessTokenParams::GetAccessTokenParams()
 {}

GetAccessTokenParams::~GetAccessTokenParams() = default;
GetAccessTokenParams::GetAccessTokenParams(GetAccessTokenParams&& rhs) noexcept = default;
GetAccessTokenParams& GetAccessTokenParams::operator=(GetAccessTokenParams&& rhs) noexcept = default;
GetAccessTokenParams GetAccessTokenParams::Clone() const {
  GetAccessTokenParams out;
  out.email = email;
  out.scopes = scopes;
  out.timeout_ms = timeout_ms;
  return out;
}

// static
bool GetAccessTokenParams::Populate(
    const base::Value::Dict& dict, GetAccessTokenParams& out) {
  const base::Value* email_value = dict.Find("email");
  if (!email_value) {
    return false;
  }
  {
    auto* temp = (*email_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.email = *temp;
  }

  const base::Value* scopes_value = dict.Find("scopes");
  if (!scopes_value) {
    return false;
  }
  {
    if (!(*scopes_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*scopes_value).GetList(), out.scopes)) {
        return false;
      }
    }
  }

  const base::Value* timeout_ms_value = dict.Find("timeoutMs");
  if (timeout_ms_value) {
    {
      auto temp = (*timeout_ms_value).GetIfInt();
      if (!temp.has_value()) {
        out.timeout_ms = std::nullopt;
        return false;
      }
      out.timeout_ms = *temp;
    }
  }

  return true;
}

// static
bool GetAccessTokenParams::Populate(
    const base::Value& value, GetAccessTokenParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GetAccessTokenParams> GetAccessTokenParams::FromValue(const base::Value::Dict& value) {
  GetAccessTokenParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GetAccessTokenParams> GetAccessTokenParams::FromValue(const base::Value& value) {
  GetAccessTokenParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict GetAccessTokenParams::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("email", this->email);

  to_value_result.Set("scopes", json_schema_compiler::util::CreateValueFromArray(this->scopes));

  if (this->timeout_ms) {
    to_value_result.Set("timeoutMs", *this->timeout_ms);

  }

  return to_value_result;
}


GetAccessTokenData::GetAccessTokenData()
 {}

GetAccessTokenData::~GetAccessTokenData() = default;
GetAccessTokenData::GetAccessTokenData(GetAccessTokenData&& rhs) noexcept = default;
GetAccessTokenData& GetAccessTokenData::operator=(GetAccessTokenData&& rhs) noexcept = default;
GetAccessTokenData GetAccessTokenData::Clone() const {
  GetAccessTokenData out;
  out.access_token = access_token;
  out.expiration_time_unix_ms = expiration_time_unix_ms;
  return out;
}

// static
bool GetAccessTokenData::Populate(
    const base::Value::Dict& dict, GetAccessTokenData& out) {
  const base::Value* access_token_value = dict.Find("accessToken");
  if (!access_token_value) {
    return false;
  }
  {
    auto* temp = (*access_token_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.access_token = *temp;
  }

  const base::Value* expiration_time_unix_ms_value = dict.Find("expirationTimeUnixMs");
  if (!expiration_time_unix_ms_value) {
    return false;
  }
  {
    auto* temp = (*expiration_time_unix_ms_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.expiration_time_unix_ms = *temp;
  }

  return true;
}

// static
bool GetAccessTokenData::Populate(
    const base::Value& value, GetAccessTokenData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GetAccessTokenData> GetAccessTokenData::FromValue(const base::Value::Dict& value) {
  GetAccessTokenData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GetAccessTokenData> GetAccessTokenData::FromValue(const base::Value& value) {
  GetAccessTokenData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict GetAccessTokenData::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("accessToken", this->access_token);

  to_value_result.Set("expirationTimeUnixMs", this->expiration_time_unix_ms);


  return to_value_result;
}


MakeFuseboxTempDirData::MakeFuseboxTempDirData()
 {}

MakeFuseboxTempDirData::~MakeFuseboxTempDirData() = default;
MakeFuseboxTempDirData::MakeFuseboxTempDirData(MakeFuseboxTempDirData&& rhs) noexcept = default;
MakeFuseboxTempDirData& MakeFuseboxTempDirData::operator=(MakeFuseboxTempDirData&& rhs) noexcept = default;
MakeFuseboxTempDirData MakeFuseboxTempDirData::Clone() const {
  MakeFuseboxTempDirData out;
  out.fusebox_file_path = fusebox_file_path;
  out.underlying_file_path = underlying_file_path;
  return out;
}

// static
bool MakeFuseboxTempDirData::Populate(
    const base::Value::Dict& dict, MakeFuseboxTempDirData& out) {
  const base::Value* fusebox_file_path_value = dict.Find("fuseboxFilePath");
  if (!fusebox_file_path_value) {
    return false;
  }
  {
    auto* temp = (*fusebox_file_path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.fusebox_file_path = *temp;
  }

  const base::Value* underlying_file_path_value = dict.Find("underlyingFilePath");
  if (!underlying_file_path_value) {
    return false;
  }
  {
    auto* temp = (*underlying_file_path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.underlying_file_path = *temp;
  }

  return true;
}

// static
bool MakeFuseboxTempDirData::Populate(
    const base::Value& value, MakeFuseboxTempDirData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<MakeFuseboxTempDirData> MakeFuseboxTempDirData::FromValue(const base::Value::Dict& value) {
  MakeFuseboxTempDirData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<MakeFuseboxTempDirData> MakeFuseboxTempDirData::FromValue(const base::Value& value) {
  MakeFuseboxTempDirData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict MakeFuseboxTempDirData::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fuseboxFilePath", this->fusebox_file_path);

  to_value_result.Set("underlyingFilePath", this->underlying_file_path);


  return to_value_result;
}


GetCurrentInputMethodDescriptorData::GetCurrentInputMethodDescriptorData()
 {}

GetCurrentInputMethodDescriptorData::~GetCurrentInputMethodDescriptorData() = default;
GetCurrentInputMethodDescriptorData::GetCurrentInputMethodDescriptorData(GetCurrentInputMethodDescriptorData&& rhs) noexcept = default;
GetCurrentInputMethodDescriptorData& GetCurrentInputMethodDescriptorData::operator=(GetCurrentInputMethodDescriptorData&& rhs) noexcept = default;
GetCurrentInputMethodDescriptorData GetCurrentInputMethodDescriptorData::Clone() const {
  GetCurrentInputMethodDescriptorData out;
  out.keyboard_layout = keyboard_layout;
  return out;
}

// static
bool GetCurrentInputMethodDescriptorData::Populate(
    const base::Value::Dict& dict, GetCurrentInputMethodDescriptorData& out) {
  const base::Value* keyboard_layout_value = dict.Find("keyboardLayout");
  if (!keyboard_layout_value) {
    return false;
  }
  {
    auto* temp = (*keyboard_layout_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.keyboard_layout = *temp;
  }

  return true;
}

// static
bool GetCurrentInputMethodDescriptorData::Populate(
    const base::Value& value, GetCurrentInputMethodDescriptorData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GetCurrentInputMethodDescriptorData> GetCurrentInputMethodDescriptorData::FromValue(const base::Value::Dict& value) {
  GetCurrentInputMethodDescriptorData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GetCurrentInputMethodDescriptorData> GetCurrentInputMethodDescriptorData::FromValue(const base::Value& value) {
  GetCurrentInputMethodDescriptorData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict GetCurrentInputMethodDescriptorData::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("keyboardLayout", this->keyboard_layout);


  return to_value_result;
}


OrcaResponseArray::OrcaResponseArray()
 {}

OrcaResponseArray::~OrcaResponseArray() = default;
OrcaResponseArray::OrcaResponseArray(OrcaResponseArray&& rhs) noexcept = default;
OrcaResponseArray& OrcaResponseArray::operator=(OrcaResponseArray&& rhs) noexcept = default;
OrcaResponseArray OrcaResponseArray::Clone() const {
  OrcaResponseArray out;
  out.responses = responses;
  return out;
}

// static
bool OrcaResponseArray::Populate(
    const base::Value::Dict& dict, OrcaResponseArray& out) {
  const base::Value* responses_value = dict.Find("responses");
  if (!responses_value) {
    return false;
  }
  {
    if (!(*responses_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*responses_value).GetList(), out.responses)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool OrcaResponseArray::Populate(
    const base::Value& value, OrcaResponseArray& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<OrcaResponseArray> OrcaResponseArray::FromValue(const base::Value::Dict& value) {
  OrcaResponseArray out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<OrcaResponseArray> OrcaResponseArray::FromValue(const base::Value& value) {
  OrcaResponseArray out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict OrcaResponseArray::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("responses", json_schema_compiler::util::CreateValueFromArray(this->responses));


  return to_value_result;
}



//
// Functions
//

namespace InitializeEvents {

}  // namespace InitializeEvents

namespace Logout {

}  // namespace Logout

namespace Restart {

}  // namespace Restart

namespace Shutdown {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& force_value = args[0];
    {
      auto temp = force_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.force = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace Shutdown

namespace LoginStatus {

base::Value::List Results::Create(const LoginStatusDict& status) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((status).ToValue());

  return create_results;
}
}  // namespace LoginStatus

namespace LockScreen {

}  // namespace LockScreen

namespace GetExtensionsInfo {

base::Value::List Results::Create(const ExtensionsInfoArray& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}
}  // namespace GetExtensionsInfo

namespace GetAllEnterprisePolicies {

base::Value::List Results::Create(const base::Value& all_policies) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((all_policies).Clone());

  return create_results;
}
}  // namespace GetAllEnterprisePolicies

namespace RefreshEnterprisePolicies {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace RefreshEnterprisePolicies

namespace RefreshRemoteCommands {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace RefreshRemoteCommands

namespace SimulateAsanMemoryBug {

}  // namespace SimulateAsanMemoryBug

namespace SetTouchpadSensitivity {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& value_value = args[0];
    {
      auto temp = value_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.value = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetTouchpadSensitivity

namespace SetTapToClick {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& enabled_value = args[0];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.enabled = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetTapToClick

namespace SetThreeFingerClick {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& enabled_value = args[0];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.enabled = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetThreeFingerClick

namespace SetTapDragging {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& enabled_value = args[0];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.enabled = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetTapDragging

namespace SetNaturalScroll {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& enabled_value = args[0];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.enabled = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetNaturalScroll

namespace SetMouseSensitivity {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& value_value = args[0];
    {
      auto temp = value_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.value = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetMouseSensitivity

namespace SetPrimaryButtonRight {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& right_value = args[0];
    {
      auto temp = right_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.right = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetPrimaryButtonRight

namespace SetMouseReverseScroll {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& enabled_value = args[0];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.enabled = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetMouseReverseScroll

namespace GetVisibleNotifications {

base::Value::List Results::Create(const std::vector<Notification>& notifications) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(notifications));

  return create_results;
}
}  // namespace GetVisibleNotifications

namespace RemoveAllNotifications {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace RemoveAllNotifications

namespace GetArcStartTime {

base::Value::List Results::Create(double start_ticks) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(start_ticks);

  return create_results;
}
}  // namespace GetArcStartTime

namespace GetArcState {

base::Value::List Results::Create(const ArcState& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace GetArcState

namespace GetPlayStoreState {

base::Value::List Results::Create(const PlayStoreState& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace GetPlayStoreState

namespace GetPrinterList {

base::Value::List Results::Create(const std::vector<Printer>& printers) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(printers));

  return create_results;
}
}  // namespace GetPrinterList

namespace IsAppShown {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& app_id_value = args[0];
    {
      auto* temp = app_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.app_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool app_shown) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(app_shown);

  return create_results;
}
}  // namespace IsAppShown

namespace IsArcProvisioned {

base::Value::List Results::Create(bool arc_provisioned) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(arc_provisioned);

  return create_results;
}
}  // namespace IsArcProvisioned

namespace GetLacrosInfo {

base::Value::List Results::Create(const LacrosInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}
}  // namespace GetLacrosInfo

namespace GetArcApp {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& app_id_value = args[0];
    {
      auto* temp = app_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.app_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const ArcAppDict& package) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((package).ToValue());

  return create_results;
}
}  // namespace GetArcApp

namespace GetArcAppKills {

base::Value::List Results::Create(const ArcAppKillsDict& counts) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((counts).ToValue());

  return create_results;
}
}  // namespace GetArcAppKills

namespace GetArcPackage {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& package_name_value = args[0];
    {
      auto* temp = package_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.package_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const ArcPackageDict& package) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((package).ToValue());

  return create_results;
}
}  // namespace GetArcPackage

namespace WaitForSystemWebAppsInstall {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace WaitForSystemWebAppsInstall

namespace GetDefaultPinnedAppIds {

base::Value::List Results::Create(const std::vector<std::string>& items) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(items));

  return create_results;
}
}  // namespace GetDefaultPinnedAppIds

namespace GetRegisteredSystemWebApps {

base::Value::List Results::Create(const std::vector<SystemWebApp>& system_web_apps) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(system_web_apps));

  return create_results;
}
}  // namespace GetRegisteredSystemWebApps

namespace IsSystemWebAppOpen {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& app_id_value = args[0];
    {
      auto* temp = app_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.app_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool is_open) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(is_open);

  return create_results;
}
}  // namespace IsSystemWebAppOpen

namespace LaunchApp {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& app_id_value = args[0];
    {
      auto* temp = app_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.app_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace LaunchApp

namespace LaunchSystemWebApp {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& app_name_value = args[0];
    {
      auto* temp = app_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.app_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& url_value = args[1];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace LaunchSystemWebApp

namespace LaunchFilesAppToPath {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& absolute_path_value = args[0];
    {
      auto* temp = absolute_path_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.absolute_path = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace LaunchFilesAppToPath

namespace CloseApp {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& app_id_value = args[0];
    {
      auto* temp = app_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.app_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace CloseApp

namespace UpdatePrinter {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& printer_value = args[0];
    {
      if (!printer_value.is_dict()) {
        return std::nullopt;
      }
      if (!Printer::Populate(printer_value.GetDict(), params.printer)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace UpdatePrinter

namespace RemovePrinter {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& printer_id_value = args[0];
    {
      auto* temp = printer_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.printer_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace RemovePrinter

namespace StartArc {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace StartArc

namespace StopArc {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace StopArc

namespace SetPlayStoreEnabled {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& enabled_value = args[0];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.enabled = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetPlayStoreEnabled

namespace GetClipboardTextData {

base::Value::List Results::Create(const std::string& data) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(data);

  return create_results;
}
}  // namespace GetClipboardTextData

namespace SetClipboardTextData {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& data_value = args[0];
    {
      auto* temp = data_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.data = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetClipboardTextData

namespace RunCrostiniInstaller {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace RunCrostiniInstaller

namespace RunCrostiniUninstaller {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace RunCrostiniUninstaller

namespace SetCrostiniEnabled {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& enabled_value = args[0];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.enabled = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetCrostiniEnabled

namespace ExportCrostini {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& path_value = args[0];
    {
      auto* temp = path_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.path = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace ExportCrostini

namespace ImportCrostini {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& path_value = args[0];
    {
      auto* temp = path_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.path = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace ImportCrostini

namespace CouldAllowCrostini {

base::Value::List Results::Create(bool can_be_allowed) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(can_be_allowed);

  return create_results;
}
}  // namespace CouldAllowCrostini

namespace SetPluginVMPolicy {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 3) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& image_url_value = args[0];
    {
      auto* temp = image_url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.image_url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& image_hash_value = args[1];
    {
      auto* temp = image_hash_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.image_hash = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& license_key_value = args[2];
    {
      auto* temp = license_key_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.license_key = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetPluginVMPolicy

namespace ShowPluginVMInstaller {

}  // namespace ShowPluginVMInstaller

namespace InstallBorealis {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace InstallBorealis

namespace RegisterComponent {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& name_value = args[0];
    {
      auto* temp = name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& path_value = args[1];
    {
      auto* temp = path_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.path = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace RegisterComponent

namespace TakeScreenshot {

base::Value::List Results::Create(const std::string& base64_png) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base64_png);

  return create_results;
}
}  // namespace TakeScreenshot

namespace TakeScreenshotForDisplay {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& display_id_value = args[0];
    {
      auto* temp = display_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.display_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& base64_png) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base64_png);

  return create_results;
}
}  // namespace TakeScreenshotForDisplay

namespace LoadSmartDimComponent {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace LoadSmartDimComponent

namespace SetAssistantEnabled {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& enabled_value = args[0];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.enabled = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& timeout_ms_value = args[1];
    {
      auto temp = timeout_ms_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.timeout_ms = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetAssistantEnabled

namespace EnableAssistantAndWaitForReady {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace EnableAssistantAndWaitForReady

namespace SendAssistantTextQuery {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& query_value = args[0];
    {
      auto* temp = query_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.query = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& timeout_ms_value = args[1];
    {
      auto temp = timeout_ms_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.timeout_ms = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const AssistantQueryStatus& status) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((status).ToValue());

  return create_results;
}
}  // namespace SendAssistantTextQuery

namespace WaitForAssistantQueryStatus {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& timeout_s_value = args[0];
    {
      auto temp = timeout_s_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.timeout_s = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const AssistantQueryStatus& status) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((status).ToValue());

  return create_results;
}
}  // namespace WaitForAssistantQueryStatus

namespace IsArcPackageListInitialRefreshed {

base::Value::List Results::Create(bool refreshed) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(refreshed);

  return create_results;
}
}  // namespace IsArcPackageListInitialRefreshed

namespace SetAllowedPref {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& pref_name_value = args[0];
    {
      auto* temp = pref_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.pref_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& value_value = args[1];
    {
      params.value = value_value.Clone();
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetAllowedPref

namespace ClearAllowedPref {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& pref_name_value = args[0];
    {
      auto* temp = pref_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.pref_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace ClearAllowedPref

namespace SetWhitelistedPref {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& pref_name_value = args[0];
    {
      auto* temp = pref_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.pref_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& value_value = args[1];
    {
      params.value = value_value.Clone();
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetWhitelistedPref

namespace SetCrostiniAppScaled {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& app_id_value = args[0];
    {
      auto* temp = app_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.app_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& scaled_value = args[1];
    {
      auto temp = scaled_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.scaled = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetCrostiniAppScaled

namespace GetPrimaryDisplayScaleFactor {

base::Value::List Results::Create(double scale_factor) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(scale_factor);

  return create_results;
}
}  // namespace GetPrimaryDisplayScaleFactor

namespace IsTabletModeEnabled {

base::Value::List Results::Create(bool enabled) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(enabled);

  return create_results;
}
}  // namespace IsTabletModeEnabled

namespace SetTabletModeEnabled {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& enabled_value = args[0];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.enabled = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool enabled) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(enabled);

  return create_results;
}
}  // namespace SetTabletModeEnabled

namespace GetAllInstalledApps {

base::Value::List Results::Create(const std::vector<App>& apps) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(apps));

  return create_results;
}
}  // namespace GetAllInstalledApps

namespace GetShelfItems {

base::Value::List Results::Create(const std::vector<ShelfItem>& items) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(items));

  return create_results;
}
}  // namespace GetShelfItems

namespace GetLauncherSearchBoxState {

base::Value::List Results::Create(const LauncherSearchBoxState& state) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((state).ToValue());

  return create_results;
}
}  // namespace GetLauncherSearchBoxState

namespace GetShelfAutoHideBehavior {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& display_id_value = args[0];
    {
      auto* temp = display_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.display_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& behavior) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(behavior);

  return create_results;
}
}  // namespace GetShelfAutoHideBehavior

namespace SetShelfAutoHideBehavior {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& display_id_value = args[0];
    {
      auto* temp = display_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.display_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& behavior_value = args[1];
    {
      auto* temp = behavior_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.behavior = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetShelfAutoHideBehavior

namespace GetShelfAlignment {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& display_id_value = args[0];
    {
      auto* temp = display_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.display_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const ShelfAlignmentType& alignment) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(autotest_private::ToString(alignment));

  return create_results;
}
}  // namespace GetShelfAlignment

namespace SetShelfAlignment {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& display_id_value = args[0];
    {
      auto* temp = display_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.display_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& alignment_value = args[1];
    {
      const std::string* shelf_alignment_type_as_string = alignment_value.GetIfString();
      if (!shelf_alignment_type_as_string) {
        return std::nullopt;
      }
      params.alignment = ParseShelfAlignmentType(*shelf_alignment_type_as_string);
      if (params.alignment == ShelfAlignmentType()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetShelfAlignment

namespace PinShelfIcon {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& app_id_value = args[0];
    {
      auto* temp = app_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.app_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace PinShelfIcon

namespace SetShelfIconPin {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& update_params_value = args[0];
    {
      if (!update_params_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(update_params_value.GetList(), params.update_params)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<std::string>& results) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(results));

  return create_results;
}
}  // namespace SetShelfIconPin

namespace SetOverviewModeState {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& start_value = args[0];
    {
      auto temp = start_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.start = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool finished) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(finished);

  return create_results;
}
}  // namespace SetOverviewModeState

namespace ShowVirtualKeyboardIfEnabled {

}  // namespace ShowVirtualKeyboardIfEnabled

namespace SendArcOverlayColor {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& color_value = args[0];
    {
      auto temp = color_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.color = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& theme_value = args[1];
    {
      const std::string* theme_style_as_string = theme_value.GetIfString();
      if (!theme_style_as_string) {
        return std::nullopt;
      }
      params.theme = ParseThemeStyle(*theme_style_as_string);
      if (params.theme == ThemeStyle()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace SendArcOverlayColor

namespace ArcAppTracingStart {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace ArcAppTracingStart

namespace ArcAppTracingStopAndAnalyze {

base::Value::List Results::Create(const ArcAppTracingInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}
}  // namespace ArcAppTracingStopAndAnalyze

namespace SwapWindowsInSplitView {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SwapWindowsInSplitView

namespace SetArcAppWindowFocus {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& package_name_value = args[0];
    {
      auto* temp = package_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.package_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetArcAppWindowFocus

namespace WaitForDisplayRotation {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& display_id_value = args[0];
    {
      auto* temp = display_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.display_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& rotation_value = args[1];
    {
      const std::string* rotation_type_as_string = rotation_value.GetIfString();
      if (!rotation_type_as_string) {
        return std::nullopt;
      }
      params.rotation = ParseRotationType(*rotation_type_as_string);
      if (params.rotation == RotationType()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace WaitForDisplayRotation

namespace GetAppWindowList {

base::Value::List Results::Create(const std::vector<AppWindowInfo>& window_list) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(window_list));

  return create_results;
}
}  // namespace GetAppWindowList

namespace SetAppWindowState {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 2 || args.size() > 3) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& id_value = args[0];
    {
      auto temp = id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& change_value = args[1];
    {
      if (!change_value.is_dict()) {
        return std::nullopt;
      }
      if (!WindowStateChangeDict::Populate(change_value.GetDict(), params.change)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& wait_value = args[2];
    {
      auto temp = wait_value.GetIfBool();
      if (!temp.has_value()) {
        params.wait = std::nullopt;
        return std::nullopt;
      }
      params.wait = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create(const WindowStateType& current_type) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(autotest_private::ToString(current_type));

  return create_results;
}
}  // namespace SetAppWindowState

namespace ActivateAppWindow {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& id_value = args[0];
    {
      auto temp = id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace ActivateAppWindow

namespace CloseAppWindow {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& id_value = args[0];
    {
      auto temp = id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace CloseAppWindow

namespace InstallPWAForCurrentURL {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& timeout_ms_value = args[0];
    {
      auto temp = timeout_ms_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.timeout_ms = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& app_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(app_id);

  return create_results;
}
}  // namespace InstallPWAForCurrentURL

namespace ActivateAccelerator {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& accelerator_value = args[0];
    {
      if (!accelerator_value.is_dict()) {
        return std::nullopt;
      }
      if (!Accelerator::Populate(accelerator_value.GetDict(), params.accelerator)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace ActivateAccelerator

namespace WaitForLauncherState {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& launcher_state_value = args[0];
    {
      const std::string* launcher_state_type_as_string = launcher_state_value.GetIfString();
      if (!launcher_state_type_as_string) {
        return std::nullopt;
      }
      params.launcher_state = ParseLauncherStateType(*launcher_state_type_as_string);
      if (params.launcher_state == LauncherStateType()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace WaitForLauncherState

namespace WaitForOverviewState {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& overview_state_value = args[0];
    {
      const std::string* overview_state_type_as_string = overview_state_value.GetIfString();
      if (!overview_state_type_as_string) {
        return std::nullopt;
      }
      params.overview_state = ParseOverviewStateType(*overview_state_type_as_string);
      if (params.overview_state == OverviewStateType()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace WaitForOverviewState

namespace CreateNewDesk {

base::Value::List Results::Create(bool success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace CreateNewDesk

namespace ActivateDeskAtIndex {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& index_value = args[0];
    {
      auto temp = index_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.index = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace ActivateDeskAtIndex

namespace RemoveActiveDesk {

base::Value::List Results::Create(bool success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace RemoveActiveDesk

namespace ActivateAdjacentDesksToTargetIndex {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& index_value = args[0];
    {
      auto temp = index_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.index = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace ActivateAdjacentDesksToTargetIndex

namespace GetDeskCount {

base::Value::List Results::Create(int count) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(count);

  return create_results;
}
}  // namespace GetDeskCount

namespace GetDesksInfo {

base::Value::List Results::Create(const DesksInfo& desks) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((desks).ToValue());

  return create_results;
}
}  // namespace GetDesksInfo

namespace MouseClick {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& button_value = args[0];
    {
      const std::string* mouse_button_as_string = button_value.GetIfString();
      if (!mouse_button_as_string) {
        return std::nullopt;
      }
      params.button = ParseMouseButton(*mouse_button_as_string);
      if (params.button == MouseButton()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace MouseClick

namespace MousePress {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& button_value = args[0];
    {
      const std::string* mouse_button_as_string = button_value.GetIfString();
      if (!mouse_button_as_string) {
        return std::nullopt;
      }
      params.button = ParseMouseButton(*mouse_button_as_string);
      if (params.button == MouseButton()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace MousePress

namespace MouseRelease {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& button_value = args[0];
    {
      const std::string* mouse_button_as_string = button_value.GetIfString();
      if (!mouse_button_as_string) {
        return std::nullopt;
      }
      params.button = ParseMouseButton(*mouse_button_as_string);
      if (params.button == MouseButton()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace MouseRelease

namespace MouseMove {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& location_value = args[0];
    {
      if (!location_value.is_dict()) {
        return std::nullopt;
      }
      if (!Location::Populate(location_value.GetDict(), params.location)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& duration_in_ms_value = args[1];
    {
      auto temp = duration_in_ms_value.GetIfDouble();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.duration_in_ms = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace MouseMove

namespace SetMetricsEnabled {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& enabled_value = args[0];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.enabled = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetMetricsEnabled

namespace SetArcTouchMode {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& enabled_value = args[0];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.enabled = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetArcTouchMode

namespace GetScrollableShelfInfoForState {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& state_value = args[0];
    {
      if (!state_value.is_dict()) {
        return std::nullopt;
      }
      if (!ScrollableShelfState::Populate(state_value.GetDict(), params.state)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const ScrollableShelfInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}
}  // namespace GetScrollableShelfInfoForState

namespace GetShelfUIInfoForState {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& state_value = args[0];
    {
      if (!state_value.is_dict()) {
        return std::nullopt;
      }
      if (!ShelfState::Populate(state_value.GetDict(), params.state)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const ShelfUIInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}
}  // namespace GetShelfUIInfoForState

namespace SetWindowBounds {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 3) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& id_value = args[0];
    {
      auto temp = id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& bounds_value = args[1];
    {
      if (!bounds_value.is_dict()) {
        return std::nullopt;
      }
      if (!Bounds::Populate(bounds_value.GetDict(), params.bounds)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& display_id_value = args[2];
    {
      auto* temp = display_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.display_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const SetWindowBoundsResult& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace SetWindowBounds

namespace StartSmoothnessTracking {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& display_id_value = args[0];
    {
      auto* temp = display_id_value.GetIfString();
      if (!temp) {
        params.display_id = std::nullopt;
        return std::nullopt;
      }
      params.display_id = *temp;
    }
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& throughput_interval_ms_value = args[1];
    {
      auto temp = throughput_interval_ms_value.GetIfInt();
      if (!temp.has_value()) {
        params.throughput_interval_ms = std::nullopt;
        return std::nullopt;
      }
      params.throughput_interval_ms = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace StartSmoothnessTracking

namespace StopSmoothnessTracking {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& display_id_value = args[0];
    {
      auto* temp = display_id_value.GetIfString();
      if (!temp) {
        params.display_id = std::nullopt;
        return std::nullopt;
      }
      params.display_id = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create(const DisplaySmoothnessData& data) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((data).ToValue());

  return create_results;
}
}  // namespace StopSmoothnessTracking

namespace DisableSwitchAccessDialog {

}  // namespace DisableSwitchAccessDialog

namespace WaitForAmbientPhotoAnimation {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& num_completions_value = args[0];
    {
      auto temp = num_completions_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.num_completions = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& timeout_value = args[1];
    {
      auto temp = timeout_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.timeout = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace WaitForAmbientPhotoAnimation

namespace WaitForAmbientVideo {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& timeout_value = args[0];
    {
      auto temp = timeout_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.timeout = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace WaitForAmbientVideo

namespace DisableAutomation {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace DisableAutomation

namespace StartThroughputTrackerDataCollection {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace StartThroughputTrackerDataCollection

namespace StopThroughputTrackerDataCollection {

base::Value::List Results::Create(const std::vector<ThroughputTrackerAnimationData>& data) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(data));

  return create_results;
}
}  // namespace StopThroughputTrackerDataCollection

namespace GetThroughputTrackerData {

base::Value::List Results::Create(const std::vector<ThroughputTrackerAnimationData>& data) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(data));

  return create_results;
}
}  // namespace GetThroughputTrackerData

namespace GetDisplaySmoothness {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& display_id_value = args[0];
    {
      auto* temp = display_id_value.GetIfString();
      if (!temp) {
        params.display_id = std::nullopt;
        return std::nullopt;
      }
      params.display_id = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create(int smoothness) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(smoothness);

  return create_results;
}
}  // namespace GetDisplaySmoothness

namespace ResetHoldingSpace {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      else {
        ResetHoldingSpaceOptions temp;
        if (!ResetHoldingSpaceOptions::Populate(options_value.GetDict(), temp))
          return std::nullopt;
        params.options = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace ResetHoldingSpace

namespace StartLoginEventRecorderDataCollection {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace StartLoginEventRecorderDataCollection

namespace GetLoginEventRecorderLoginEvents {

base::Value::List Results::Create(const std::vector<LoginEventRecorderData>& data) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(data));

  return create_results;
}
}  // namespace GetLoginEventRecorderLoginEvents

namespace AddLoginEventForTesting {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace AddLoginEventForTesting

namespace ForceAutoThemeMode {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& dark_mode_enabled_value = args[0];
    {
      auto temp = dark_mode_enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.dark_mode_enabled = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace ForceAutoThemeMode

namespace GetAccessToken {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& access_token_params_value = args[0];
    {
      if (!access_token_params_value.is_dict()) {
        return std::nullopt;
      }
      if (!GetAccessTokenParams::Populate(access_token_params_value.GetDict(), params.access_token_params)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const GetAccessTokenData& data) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((data).ToValue());

  return create_results;
}
}  // namespace GetAccessToken

namespace IsInputMethodReadyForTesting {

base::Value::List Results::Create(bool is_ready) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(is_ready);

  return create_results;
}
}  // namespace IsInputMethodReadyForTesting

namespace MakeFuseboxTempDir {

base::Value::List Results::Create(const MakeFuseboxTempDirData& data) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((data).ToValue());

  return create_results;
}
}  // namespace MakeFuseboxTempDir

namespace RemoveFuseboxTempDir {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& fusebox_file_path_value = args[0];
    {
      auto* temp = fusebox_file_path_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.fusebox_file_path = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace RemoveFuseboxTempDir

namespace RemoveComponentExtension {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& extension_id_value = args[0];
    {
      auto* temp = extension_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.extension_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace RemoveComponentExtension

namespace StartFrameCounting {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& bucket_size_in_seconds_value = args[0];
    {
      auto temp = bucket_size_in_seconds_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.bucket_size_in_seconds = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace StartFrameCounting

namespace StopFrameCounting {

base::Value::List Results::Create(const std::vector<FrameCountingPerSinkData>& data) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(data));

  return create_results;
}
}  // namespace StopFrameCounting

namespace InstallBruschetta {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& vm_name_value = args[0];
    {
      auto* temp = vm_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.vm_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace InstallBruschetta

namespace RemoveBruschetta {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& vm_name_value = args[0];
    {
      auto* temp = vm_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.vm_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace RemoveBruschetta

namespace IsFeatureEnabled {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& feature_name_value = args[0];
    {
      auto* temp = feature_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.feature_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool enabled) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(enabled);

  return create_results;
}
}  // namespace IsFeatureEnabled

namespace GetCurrentInputMethodDescriptor {

base::Value::List Results::Create(const GetCurrentInputMethodDescriptorData& data) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((data).ToValue());

  return create_results;
}
}  // namespace GetCurrentInputMethodDescriptor

namespace OverrideOrcaResponseForTesting {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& array_value = args[0];
    {
      if (!array_value.is_dict()) {
        return std::nullopt;
      }
      if (!OrcaResponseArray::Populate(array_value.GetDict(), params.array)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace OverrideOrcaResponseForTesting

namespace SetArcInteractiveState {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& enabled_value = args[0];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.enabled = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetArcInteractiveState

namespace IsFieldTrialActive {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& trial_name_value = args[0];
    {
      auto* temp = trial_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.trial_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& group_name_value = args[1];
    {
      auto* temp = group_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.group_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool active) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(active);

  return create_results;
}
}  // namespace IsFieldTrialActive

namespace GetArcWakefulnessMode {

base::Value::List Results::Create(const WakefulnessMode& mode) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(autotest_private::ToString(mode));

  return create_results;
}
}  // namespace GetArcWakefulnessMode

namespace SetDeviceLanguage {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& locale_value = args[0];
    {
      auto* temp = locale_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.locale = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetDeviceLanguage

//
// Events
//

namespace OnClipboardDataChanged {

const char kEventName[] = "autotestPrivate.onClipboardDataChanged";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnClipboardDataChanged

}  // namespace autotest_private
}  // namespace api
}  // namespace extensions

