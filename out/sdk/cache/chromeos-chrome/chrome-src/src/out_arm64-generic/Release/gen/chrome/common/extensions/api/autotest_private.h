// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/autotest_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_AUTOTEST_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_AUTOTEST_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace autotest_private {

//
// Types
//

enum class ShelfAlignmentType {
  kNone = 0,
  kBottom,
  kLeft,
  kRight,
  kMaxValue = kRight,
};


const char* ToString(ShelfAlignmentType as_enum);
ShelfAlignmentType ParseShelfAlignmentType(base::StringPiece as_string);
std::u16string GetShelfAlignmentTypeParseError(base::StringPiece as_string);

// A mapping of ash::ShelfItemType.
enum class ShelfItemType {
  kNone = 0,
  kPinnedApp,
  kBrowserShortcut,
  kApp,
  kUnpinnedBrowserShortcut,
  kDialog,
  kMaxValue = kDialog,
};


const char* ToString(ShelfItemType as_enum);
ShelfItemType ParseShelfItemType(base::StringPiece as_string);
std::u16string GetShelfItemTypeParseError(base::StringPiece as_string);

// A mapping of ash::ShelfItemStatus.
enum class ShelfItemStatus {
  kNone = 0,
  kClosed,
  kRunning,
  kAttention,
  kMaxValue = kAttention,
};


const char* ToString(ShelfItemStatus as_enum);
ShelfItemStatus ParseShelfItemStatus(base::StringPiece as_string);
std::u16string GetShelfItemStatusParseError(base::StringPiece as_string);

// A mapping of apps::mojom::Type
enum class AppType {
  kNone = 0,
  kArc,
  kBuiltIn,
  kCrostini,
  kExtension,
  kWeb,
  kMacOs,
  kPluginVm,
  kStandaloneBrowser,
  kRemote,
  kBorealis,
  kBruschetta,
  kMaxValue = kBruschetta,
};


const char* ToString(AppType as_enum);
AppType ParseAppType(base::StringPiece as_string);
std::u16string GetAppTypeParseError(base::StringPiece as_string);

// A mapping of apps::mojom::InstallSource
enum class AppInstallSource {
  kNone = 0,
  kUnknown,
  kSystem,
  kPolicy,
  kOem,
  kDefault,
  kSync,
  kUser,
  kSubApp,
  kKiosk,
  kCommandLine,
  kMaxValue = kCommandLine,
};


const char* ToString(AppInstallSource as_enum);
AppInstallSource ParseAppInstallSource(base::StringPiece as_string);
std::u16string GetAppInstallSourceParseError(base::StringPiece as_string);

// A mapping of apps::mojom::Readiness
enum class AppReadiness {
  kNone = 0,
  kReady,
  kDisabledByBlacklist,
  kDisabledByPolicy,
  kDisabledByUser,
  kTerminated,
  kUninstalledByUser,
  kRemoved,
  kUninstalledByMigration,
  kMaxValue = kUninstalledByMigration,
};


const char* ToString(AppReadiness as_enum);
AppReadiness ParseAppReadiness(base::StringPiece as_string);
std::u16string GetAppReadinessParseError(base::StringPiece as_string);

// A subset of Window State types in ash::WindowStateType. We may add more into
// the set in the future.
enum class WindowStateType {
  kNone = 0,
  kNormal,
  kMinimized,
  kMaximized,
  kFullscreen,
  kPrimarySnapped,
  kSecondarySnapped,
  kPip,
  kFloated,
  kMaxValue = kFloated,
};


const char* ToString(WindowStateType as_enum);
WindowStateType ParseWindowStateType(base::StringPiece as_string);
std::u16string GetWindowStateTypeParseError(base::StringPiece as_string);

// A subset of WM event types in ash::WMEventType. We may add more in the set in
// the future.
enum class WMEventType {
  kNone = 0,
  kWmeventNormal,
  kWmeventMaximize,
  kWmeventMinimize,
  kWmeventFullscreen,
  kWmeventSnapPrimary,
  kWmeventSnapSecondary,
  kWmeventFloat,
  kMaxValue = kWmeventFloat,
};


const char* ToString(WMEventType as_enum);
WMEventType ParseWMEventType(base::StringPiece as_string);
std::u16string GetWMEventTypeParseError(base::StringPiece as_string);

// Display orientation type.
enum class RotationType {
  kNone = 0,
  kRotateAny,
  kRotate0,
  kRotate90,
  kRotate180,
  kRotate270,
  kMaxValue = kRotate270,
};


const char* ToString(RotationType as_enum);
RotationType ParseRotationType(base::StringPiece as_string);
std::u16string GetRotationTypeParseError(base::StringPiece as_string);

enum class LauncherStateType {
  kNone = 0,
  kClosed,
  kFullscreenAllApps,
  kFullscreenSearch,
  kMaxValue = kFullscreenSearch,
};


const char* ToString(LauncherStateType as_enum);
LauncherStateType ParseLauncherStateType(base::StringPiece as_string);
std::u16string GetLauncherStateTypeParseError(base::StringPiece as_string);

enum class OverviewStateType {
  kNone = 0,
  kShown,
  kHidden,
  kMaxValue = kHidden,
};


const char* ToString(OverviewStateType as_enum);
OverviewStateType ParseOverviewStateType(base::StringPiece as_string);
std::u16string GetOverviewStateTypeParseError(base::StringPiece as_string);

enum class MouseButton {
  kNone = 0,
  kLeft,
  kMiddle,
  kRight,
  kBack,
  kForward,
  kMaxValue = kForward,
};


const char* ToString(MouseButton as_enum);
MouseButton ParseMouseButton(base::StringPiece as_string);
std::u16string GetMouseButtonParseError(base::StringPiece as_string);

struct WindowStateChangeDict {
  WindowStateChangeDict();
  ~WindowStateChangeDict();
  WindowStateChangeDict(const WindowStateChangeDict&) = delete;
  WindowStateChangeDict& operator=(const WindowStateChangeDict&) = delete;
  WindowStateChangeDict(WindowStateChangeDict&& rhs);
  WindowStateChangeDict& operator=(WindowStateChangeDict&& rhs);

  // Populates a WindowStateChangeDict object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, WindowStateChangeDict& out);

  // Populates a WindowStateChangeDict object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, WindowStateChangeDict& out);

  // Creates a deep copy of WindowStateChangeDict.
  WindowStateChangeDict Clone() const;

  // Creates a WindowStateChangeDict object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<WindowStateChangeDict> FromValueDeprecated(const base::Value& value);

  // Creates a WindowStateChangeDict object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<WindowStateChangeDict> FromValue(const base::Value::Dict& value);

  // Creates a WindowStateChangeDict object from a base::Value, or nullopt on
  // failure.
  static absl::optional<WindowStateChangeDict> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisWindowStateChangeDict object.
  base::Value::Dict ToValue() const;

  // The WM event to change the ARC window state.
  WMEventType event_type;

  // If the initial state is already same as the expected state, should we treat
  // this case as a failure? Default value is false.
  absl::optional<bool> fail_if_no_change;

};

struct LoginStatusDict {
  LoginStatusDict();
  ~LoginStatusDict();
  LoginStatusDict(const LoginStatusDict&) = delete;
  LoginStatusDict& operator=(const LoginStatusDict&) = delete;
  LoginStatusDict(LoginStatusDict&& rhs);
  LoginStatusDict& operator=(LoginStatusDict&& rhs);

  // Populates a LoginStatusDict object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, LoginStatusDict& out);

  // Populates a LoginStatusDict object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, LoginStatusDict& out);

  // Creates a deep copy of LoginStatusDict.
  LoginStatusDict Clone() const;

  // Creates a LoginStatusDict object from a base::Value, or NULL on failure.
  static std::unique_ptr<LoginStatusDict> FromValueDeprecated(const base::Value& value);

  // Creates a LoginStatusDict object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<LoginStatusDict> FromValue(const base::Value::Dict& value);

  // Creates a LoginStatusDict object from a base::Value, or nullopt on failure.
  static absl::optional<LoginStatusDict> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisLoginStatusDict object.
  base::Value::Dict ToValue() const;

  // Are we logged in?
  bool is_logged_in;

  // Is the logged-in user the owner?
  bool is_owner;

  // Is the screen locked?
  bool is_screen_locked;

  // Is the wallpaper blur layer still animating in?
  bool is_lockscreen_wallpaper_animating;

  // Is the screen ready for password?
  bool is_ready_for_password;

  // Are the avatar images loaded for all users?
  bool are_all_user_images_loaded;

  // Is the logged-in user a regular user? Set only if `isLoggedIn`.
  absl::optional<bool> is_regular_user;

  // Are we logged into the guest account? Set only if `isLoggedIn`.
  absl::optional<bool> is_guest;

  // Are we logged into kiosk-app mode? Set only if `isLoggedIn`.
  absl::optional<bool> is_kiosk;

  // User email. Set only if `isLoggedIn`.
  absl::optional<std::string> email;

  // User display email. Set only if `isLoggedIn`.
  absl::optional<std::string> display_email;

  // User display name. Set only if `isLoggedIn`.
  absl::optional<std::string> display_name;

  // User image: 'file', 'profile' or a number. Set only if `isLoggedIn`.
  absl::optional<std::string> user_image;

  // Whether the user has a valid oauth2 token. Only set for gaia user.
  absl::optional<bool> has_valid_oauth2_token;

};

struct ExtensionInfoDict {
  ExtensionInfoDict();
  ~ExtensionInfoDict();
  ExtensionInfoDict(const ExtensionInfoDict&) = delete;
  ExtensionInfoDict& operator=(const ExtensionInfoDict&) = delete;
  ExtensionInfoDict(ExtensionInfoDict&& rhs);
  ExtensionInfoDict& operator=(ExtensionInfoDict&& rhs);

  // Populates a ExtensionInfoDict object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ExtensionInfoDict& out);

  // Populates a ExtensionInfoDict object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ExtensionInfoDict& out);

  // Creates a deep copy of ExtensionInfoDict.
  ExtensionInfoDict Clone() const;

  // Creates a ExtensionInfoDict object from a base::Value, or NULL on failure.
  static std::unique_ptr<ExtensionInfoDict> FromValueDeprecated(const base::Value& value);

  // Creates a ExtensionInfoDict object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ExtensionInfoDict> FromValue(const base::Value::Dict& value);

  // Creates a ExtensionInfoDict object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ExtensionInfoDict> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisExtensionInfoDict object.
  base::Value::Dict ToValue() const;

  std::string id;

  std::string version;

  std::string name;

  std::string public_key;

  std::string description;

  std::string background_url;

  std::string options_url;

  std::vector<std::string> host_permissions;

  std::vector<std::string> effective_host_permissions;

  std::vector<std::string> api_permissions;

  bool is_component;

  bool is_internal;

  bool is_user_installed;

  bool is_enabled;

  bool allowed_in_incognito;

  bool has_page_action;

};

struct ExtensionsInfoArray {
  ExtensionsInfoArray();
  ~ExtensionsInfoArray();
  ExtensionsInfoArray(const ExtensionsInfoArray&) = delete;
  ExtensionsInfoArray& operator=(const ExtensionsInfoArray&) = delete;
  ExtensionsInfoArray(ExtensionsInfoArray&& rhs);
  ExtensionsInfoArray& operator=(ExtensionsInfoArray&& rhs);

  // Populates a ExtensionsInfoArray object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ExtensionsInfoArray& out);

  // Populates a ExtensionsInfoArray object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ExtensionsInfoArray& out);

  // Creates a deep copy of ExtensionsInfoArray.
  ExtensionsInfoArray Clone() const;

  // Creates a ExtensionsInfoArray object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ExtensionsInfoArray> FromValueDeprecated(const base::Value& value);

  // Creates a ExtensionsInfoArray object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<ExtensionsInfoArray> FromValue(const base::Value::Dict& value);

  // Creates a ExtensionsInfoArray object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ExtensionsInfoArray> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisExtensionsInfoArray object.
  base::Value::Dict ToValue() const;

  std::vector<ExtensionInfoDict> extensions;

};

struct Notification {
  Notification();
  ~Notification();
  Notification(const Notification&) = delete;
  Notification& operator=(const Notification&) = delete;
  Notification(Notification&& rhs);
  Notification& operator=(Notification&& rhs);

  // Populates a Notification object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, Notification& out);

  // Populates a Notification object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, Notification& out);

  // Creates a deep copy of Notification.
  Notification Clone() const;

  // Creates a Notification object from a base::Value, or NULL on failure.
  static std::unique_ptr<Notification> FromValueDeprecated(const base::Value& value);

  // Creates a Notification object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<Notification> FromValue(const base::Value::Dict& value);

  // Creates a Notification object from a base::Value, or nullopt on failure.
  static absl::optional<Notification> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisNotification object.
  base::Value::Dict ToValue() const;

  std::string id;

  std::string type;

  std::string title;

  std::string message;

  int priority;

  int progress;

};

struct Printer {
  Printer();
  ~Printer();
  Printer(const Printer&) = delete;
  Printer& operator=(const Printer&) = delete;
  Printer(Printer&& rhs);
  Printer& operator=(Printer&& rhs);

  // Populates a Printer object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Printer& out);

  // Populates a Printer object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Printer& out);

  // Creates a deep copy of Printer.
  Printer Clone() const;

  // Creates a Printer object from a base::Value, or NULL on failure.
  static std::unique_ptr<Printer> FromValueDeprecated(const base::Value& value);

  // Creates a Printer object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<Printer> FromValue(const base::Value::Dict& value);

  // Creates a Printer object from a base::Value, or nullopt on failure.
  static absl::optional<Printer> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPrinter object.
  base::Value::Dict ToValue() const;

  std::string printer_name;

  absl::optional<std::string> printer_id;

  absl::optional<std::string> printer_type;

  absl::optional<std::string> printer_desc;

  absl::optional<std::string> printer_make_and_model;

  absl::optional<std::string> printer_uri;

  absl::optional<std::string> printer_ppd;

};

struct ArcState {
  ArcState();
  ~ArcState();
  ArcState(const ArcState&) = delete;
  ArcState& operator=(const ArcState&) = delete;
  ArcState(ArcState&& rhs);
  ArcState& operator=(ArcState&& rhs);

  // Populates a ArcState object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, ArcState& out);

  // Populates a ArcState object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ArcState& out);

  // Creates a deep copy of ArcState.
  ArcState Clone() const;

  // Creates a ArcState object from a base::Value, or NULL on failure.
  static std::unique_ptr<ArcState> FromValueDeprecated(const base::Value& value);

  // Creates a ArcState object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<ArcState> FromValue(const base::Value::Dict& value);

  // Creates a ArcState object from a base::Value, or nullopt on failure.
  static absl::optional<ArcState> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisArcState object.
  base::Value::Dict ToValue() const;

  // Whether the ARC is provisioned.
  bool provisioned;

  // Whether ARC Terms of Service needs to be shown.
  bool tos_needed;

  // ARC pre-start time (mini-ARC) or 0 if not pre-started.
  double pre_start_time;

  // ARC start time or 0 if not started.
  double start_time;

};

struct PlayStoreState {
  PlayStoreState();
  ~PlayStoreState();
  PlayStoreState(const PlayStoreState&) = delete;
  PlayStoreState& operator=(const PlayStoreState&) = delete;
  PlayStoreState(PlayStoreState&& rhs);
  PlayStoreState& operator=(PlayStoreState&& rhs);

  // Populates a PlayStoreState object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PlayStoreState& out);

  // Populates a PlayStoreState object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PlayStoreState& out);

  // Creates a deep copy of PlayStoreState.
  PlayStoreState Clone() const;

  // Creates a PlayStoreState object from a base::Value, or NULL on failure.
  static std::unique_ptr<PlayStoreState> FromValueDeprecated(const base::Value& value);

  // Creates a PlayStoreState object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<PlayStoreState> FromValue(const base::Value::Dict& value);

  // Creates a PlayStoreState object from a base::Value, or nullopt on failure.
  static absl::optional<PlayStoreState> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPlayStoreState object.
  base::Value::Dict ToValue() const;

  // Whether the Play Store allowed for the current user.
  bool allowed;

  // Whether the Play Store currently enabled.
  absl::optional<bool> enabled;

  // Whether the Play Store managed by policy.
  absl::optional<bool> managed;

};

struct AssistantQueryResponse {
  AssistantQueryResponse();
  ~AssistantQueryResponse();
  AssistantQueryResponse(const AssistantQueryResponse&) = delete;
  AssistantQueryResponse& operator=(const AssistantQueryResponse&) = delete;
  AssistantQueryResponse(AssistantQueryResponse&& rhs);
  AssistantQueryResponse& operator=(AssistantQueryResponse&& rhs);

  // Populates a AssistantQueryResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AssistantQueryResponse& out);

  // Populates a AssistantQueryResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AssistantQueryResponse& out);

  // Creates a deep copy of AssistantQueryResponse.
  AssistantQueryResponse Clone() const;

  // Creates a AssistantQueryResponse object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<AssistantQueryResponse> FromValueDeprecated(const base::Value& value);

  // Creates a AssistantQueryResponse object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<AssistantQueryResponse> FromValue(const base::Value::Dict& value);

  // Creates a AssistantQueryResponse object from a base::Value, or nullopt on
  // failure.
  static absl::optional<AssistantQueryResponse> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAssistantQueryResponse object.
  base::Value::Dict ToValue() const;

  // Text response returned from server.
  absl::optional<std::string> text;

  // HTML response returned from server.
  absl::optional<std::string> html_response;

  // Open URL response returned from server.
  absl::optional<std::string> open_url;

  // Open Android app response returned from server.
  absl::optional<std::string> open_app_response;

};

struct AssistantQueryStatus {
  AssistantQueryStatus();
  ~AssistantQueryStatus();
  AssistantQueryStatus(const AssistantQueryStatus&) = delete;
  AssistantQueryStatus& operator=(const AssistantQueryStatus&) = delete;
  AssistantQueryStatus(AssistantQueryStatus&& rhs);
  AssistantQueryStatus& operator=(AssistantQueryStatus&& rhs);

  // Populates a AssistantQueryStatus object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AssistantQueryStatus& out);

  // Populates a AssistantQueryStatus object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AssistantQueryStatus& out);

  // Creates a deep copy of AssistantQueryStatus.
  AssistantQueryStatus Clone() const;

  // Creates a AssistantQueryStatus object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<AssistantQueryStatus> FromValueDeprecated(const base::Value& value);

  // Creates a AssistantQueryStatus object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<AssistantQueryStatus> FromValue(const base::Value::Dict& value);

  // Creates a AssistantQueryStatus object from a base::Value, or nullopt on
  // failure.
  static absl::optional<AssistantQueryStatus> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAssistantQueryStatus object.
  base::Value::Dict ToValue() const;

  // Indicates whether this might be a voice interaction.
  bool is_mic_open;

  // Query text sent to Assistant. In the event of a voice interaction, this field
  // will be same as the speech recognition final result.
  std::string query_text;

  // Response for the current query.
  AssistantQueryResponse query_response;

};

// A mapping of crosapi::BrowserManager::State
enum class LacrosState {
  kNone = 0,
  kNotInitialized,
  kReloading,
  kMounting,
  kUnavailable,
  kStopped,
  kCreatingLogFile,
  kPreLaunched,
  kStarting,
  kRunning,
  kTerminating,
  kMaxValue = kTerminating,
};


const char* ToString(LacrosState as_enum);
LacrosState ParseLacrosState(base::StringPiece as_string);
std::u16string GetLacrosStateParseError(base::StringPiece as_string);

// A mapping of crosapi::browser_util::LacrosMode
enum class LacrosMode {
  kNone = 0,
  kDisabled,
  kOnly,
  kMaxValue = kOnly,
};


const char* ToString(LacrosMode as_enum);
LacrosMode ParseLacrosMode(base::StringPiece as_string);
std::u16string GetLacrosModeParseError(base::StringPiece as_string);

struct LacrosInfo {
  LacrosInfo();
  ~LacrosInfo();
  LacrosInfo(const LacrosInfo&) = delete;
  LacrosInfo& operator=(const LacrosInfo&) = delete;
  LacrosInfo(LacrosInfo&& rhs);
  LacrosInfo& operator=(LacrosInfo&& rhs);

  // Populates a LacrosInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, LacrosInfo& out);

  // Populates a LacrosInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, LacrosInfo& out);

  // Creates a deep copy of LacrosInfo.
  LacrosInfo Clone() const;

  // Creates a LacrosInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<LacrosInfo> FromValueDeprecated(const base::Value& value);

  // Creates a LacrosInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<LacrosInfo> FromValue(const base::Value::Dict& value);

  // Creates a LacrosInfo object from a base::Value, or nullopt on failure.
  static absl::optional<LacrosInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisLacrosInfo object.
  base::Value::Dict ToValue() const;

  // The state of lacros.
  LacrosState state;

  // True iff keepalive is enabled for lacros.
  bool is_keep_alive;

  // Path to lacros-chrome directory. Note that this may change over time if omaha
  // is used. This also may be empty if lacros is not running.
  std::string lacros_path;

  // Specifies the mode Lacros is currently running. For a full list of supported
  // mode, see LacrosMode enum definition.
  LacrosMode mode;

};

struct ArcAppDict {
  ArcAppDict();
  ~ArcAppDict();
  ArcAppDict(const ArcAppDict&) = delete;
  ArcAppDict& operator=(const ArcAppDict&) = delete;
  ArcAppDict(ArcAppDict&& rhs);
  ArcAppDict& operator=(ArcAppDict&& rhs);

  // Populates a ArcAppDict object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, ArcAppDict& out);

  // Populates a ArcAppDict object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ArcAppDict& out);

  // Creates a deep copy of ArcAppDict.
  ArcAppDict Clone() const;

  // Creates a ArcAppDict object from a base::Value, or NULL on failure.
  static std::unique_ptr<ArcAppDict> FromValueDeprecated(const base::Value& value);

  // Creates a ArcAppDict object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ArcAppDict> FromValue(const base::Value::Dict& value);

  // Creates a ArcAppDict object from a base::Value, or nullopt on failure.
  static absl::optional<ArcAppDict> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisArcAppDict object.
  base::Value::Dict ToValue() const;

  std::string name;

  std::string package_name;

  std::string activity;

  std::string intent_uri;

  std::string icon_resource_id;

  double last_launch_time;

  double install_time;

  bool sticky;

  bool notifications_enabled;

  bool ready;

  bool suspended;

  bool show_in_launcher;

  bool shortcut;

  bool launchable;

};

struct ArcAppKillsDict {
  ArcAppKillsDict();
  ~ArcAppKillsDict();
  ArcAppKillsDict(const ArcAppKillsDict&) = delete;
  ArcAppKillsDict& operator=(const ArcAppKillsDict&) = delete;
  ArcAppKillsDict(ArcAppKillsDict&& rhs);
  ArcAppKillsDict& operator=(ArcAppKillsDict&& rhs);

  // Populates a ArcAppKillsDict object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ArcAppKillsDict& out);

  // Populates a ArcAppKillsDict object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ArcAppKillsDict& out);

  // Creates a deep copy of ArcAppKillsDict.
  ArcAppKillsDict Clone() const;

  // Creates a ArcAppKillsDict object from a base::Value, or NULL on failure.
  static std::unique_ptr<ArcAppKillsDict> FromValueDeprecated(const base::Value& value);

  // Creates a ArcAppKillsDict object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ArcAppKillsDict> FromValue(const base::Value::Dict& value);

  // Creates a ArcAppKillsDict object from a base::Value, or nullopt on failure.
  static absl::optional<ArcAppKillsDict> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisArcAppKillsDict object.
  base::Value::Dict ToValue() const;

  double oom;

  double lmkd_foreground;

  double lmkd_perceptible;

  double lmkd_cached;

  double pressure_foreground;

  double pressure_perceptible;

  double pressure_cached;

};

struct ArcPackageDict {
  ArcPackageDict();
  ~ArcPackageDict();
  ArcPackageDict(const ArcPackageDict&) = delete;
  ArcPackageDict& operator=(const ArcPackageDict&) = delete;
  ArcPackageDict(ArcPackageDict&& rhs);
  ArcPackageDict& operator=(ArcPackageDict&& rhs);

  // Populates a ArcPackageDict object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ArcPackageDict& out);

  // Populates a ArcPackageDict object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ArcPackageDict& out);

  // Creates a deep copy of ArcPackageDict.
  ArcPackageDict Clone() const;

  // Creates a ArcPackageDict object from a base::Value, or NULL on failure.
  static std::unique_ptr<ArcPackageDict> FromValueDeprecated(const base::Value& value);

  // Creates a ArcPackageDict object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ArcPackageDict> FromValue(const base::Value::Dict& value);

  // Creates a ArcPackageDict object from a base::Value, or nullopt on failure.
  static absl::optional<ArcPackageDict> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisArcPackageDict object.
  base::Value::Dict ToValue() const;

  std::string package_name;

  int package_version;

  std::string last_backup_android_id;

  double last_backup_time;

  bool should_sync;

  bool vpn_provider;

};

struct Location {
  Location();
  ~Location();
  Location(const Location&) = delete;
  Location& operator=(const Location&) = delete;
  Location(Location&& rhs);
  Location& operator=(Location&& rhs);

  // Populates a Location object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Location& out);

  // Populates a Location object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, Location& out);

  // Creates a deep copy of Location.
  Location Clone() const;

  // Creates a Location object from a base::Value, or NULL on failure.
  static std::unique_ptr<Location> FromValueDeprecated(const base::Value& value);

  // Creates a Location object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<Location> FromValue(const base::Value::Dict& value);

  // Creates a Location object from a base::Value, or nullopt on failure.
  static absl::optional<Location> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisLocation object.
  base::Value::Dict ToValue() const;

  double x;

  double y;

};

struct Bounds {
  Bounds();
  ~Bounds();
  Bounds(const Bounds&) = delete;
  Bounds& operator=(const Bounds&) = delete;
  Bounds(Bounds&& rhs);
  Bounds& operator=(Bounds&& rhs);

  // Populates a Bounds object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Bounds& out);

  // Populates a Bounds object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Bounds& out);

  // Creates a deep copy of Bounds.
  Bounds Clone() const;

  // Creates a Bounds object from a base::Value, or NULL on failure.
  static std::unique_ptr<Bounds> FromValueDeprecated(const base::Value& value);

  // Creates a Bounds object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<Bounds> FromValue(const base::Value::Dict& value);

  // Creates a Bounds object from a base::Value, or nullopt on failure.
  static absl::optional<Bounds> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisBounds object.
  base::Value::Dict ToValue() const;

  double left;

  double top;

  double width;

  double height;

};

struct ArcAppTracingInfo {
  ArcAppTracingInfo();
  ~ArcAppTracingInfo();
  ArcAppTracingInfo(const ArcAppTracingInfo&) = delete;
  ArcAppTracingInfo& operator=(const ArcAppTracingInfo&) = delete;
  ArcAppTracingInfo(ArcAppTracingInfo&& rhs);
  ArcAppTracingInfo& operator=(ArcAppTracingInfo&& rhs);

  // Populates a ArcAppTracingInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ArcAppTracingInfo& out);

  // Populates a ArcAppTracingInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ArcAppTracingInfo& out);

  // Creates a deep copy of ArcAppTracingInfo.
  ArcAppTracingInfo Clone() const;

  // Creates a ArcAppTracingInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<ArcAppTracingInfo> FromValueDeprecated(const base::Value& value);

  // Creates a ArcAppTracingInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ArcAppTracingInfo> FromValue(const base::Value::Dict& value);

  // Creates a ArcAppTracingInfo object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ArcAppTracingInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisArcAppTracingInfo object.
  base::Value::Dict ToValue() const;

  bool success;

  double fps;

  double commit_deviation;

  double render_quality;

};

enum class ThemeStyle {
  kNone = 0,
  kTonalSpot,
  kVibrant,
  kExpressive,
  kSpritz,
  kRainbow,
  kFruitSalad,
  kMaxValue = kFruitSalad,
};


const char* ToString(ThemeStyle as_enum);
ThemeStyle ParseThemeStyle(base::StringPiece as_string);
std::u16string GetThemeStyleParseError(base::StringPiece as_string);

struct App {
  App();
  ~App();
  App(const App&) = delete;
  App& operator=(const App&) = delete;
  App(App&& rhs);
  App& operator=(App&& rhs);

  // Populates a App object from a base::Value& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value& value, App& out);

  // Populates a App object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, App& out);

  // Creates a deep copy of App.
  App Clone() const;

  // Creates a App object from a base::Value, or NULL on failure.
  static std::unique_ptr<App> FromValueDeprecated(const base::Value& value);

  // Creates a App object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<App> FromValue(const base::Value::Dict& value);

  // Creates a App object from a base::Value, or nullopt on failure.
  static absl::optional<App> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of thisApp
  // object.
  base::Value::Dict ToValue() const;

  std::string app_id;

  std::string name;

  std::string short_name;

  std::string publisher_id;

  AppType type;

  AppInstallSource install_source;

  AppReadiness readiness;

  std::vector<std::string> additional_search_terms;

  absl::optional<bool> show_in_launcher;

  absl::optional<bool> show_in_search;

};

struct SystemWebApp {
  SystemWebApp();
  ~SystemWebApp();
  SystemWebApp(const SystemWebApp&) = delete;
  SystemWebApp& operator=(const SystemWebApp&) = delete;
  SystemWebApp(SystemWebApp&& rhs);
  SystemWebApp& operator=(SystemWebApp&& rhs);

  // Populates a SystemWebApp object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SystemWebApp& out);

  // Populates a SystemWebApp object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SystemWebApp& out);

  // Creates a deep copy of SystemWebApp.
  SystemWebApp Clone() const;

  // Creates a SystemWebApp object from a base::Value, or NULL on failure.
  static std::unique_ptr<SystemWebApp> FromValueDeprecated(const base::Value& value);

  // Creates a SystemWebApp object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<SystemWebApp> FromValue(const base::Value::Dict& value);

  // Creates a SystemWebApp object from a base::Value, or nullopt on failure.
  static absl::optional<SystemWebApp> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSystemWebApp object.
  base::Value::Dict ToValue() const;

  // App's internal name. This isn't user-visible and should only be used for
  // logging.
  std::string internal_name;

  // App's install URL. This is a placeholder for installation pipeline, not used
  // for anything else.
  std::string url;

  // App's visible name. This is defined in the Web App manifest, and shown in
  // Shelf and Launcher. This matches App's name attribute (see above).
  std::string name;

  // App's default start_url. This is the default URL that the App will be
  // launched to.
  std::string start_url;

};

struct ShelfItem {
  ShelfItem();
  ~ShelfItem();
  ShelfItem(const ShelfItem&) = delete;
  ShelfItem& operator=(const ShelfItem&) = delete;
  ShelfItem(ShelfItem&& rhs);
  ShelfItem& operator=(ShelfItem&& rhs);

  // Populates a ShelfItem object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, ShelfItem& out);

  // Populates a ShelfItem object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ShelfItem& out);

  // Creates a deep copy of ShelfItem.
  ShelfItem Clone() const;

  // Creates a ShelfItem object from a base::Value, or NULL on failure.
  static std::unique_ptr<ShelfItem> FromValueDeprecated(const base::Value& value);

  // Creates a ShelfItem object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<ShelfItem> FromValue(const base::Value::Dict& value);

  // Creates a ShelfItem object from a base::Value, or nullopt on failure.
  static absl::optional<ShelfItem> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisShelfItem object.
  base::Value::Dict ToValue() const;

  std::string app_id;

  std::string launch_id;

  std::string title;

  ShelfItemType type;

  ShelfItemStatus status;

  bool shows_tooltip;

  bool pinned_by_policy;

  bool pin_state_forced_by_type;

  bool has_notification;

};

// A mapping of ash::AppType.
enum class AppWindowType {
  kNone = 0,
  kBrowser,
  kChromeApp,
  kArcApp,
  kCrostiniApp,
  kSystemApp,
  kExtensionApp,
  kLacros,
  kMaxValue = kLacros,
};


const char* ToString(AppWindowType as_enum);
AppWindowType ParseAppWindowType(base::StringPiece as_string);
std::u16string GetAppWindowTypeParseError(base::StringPiece as_string);

// A mapping of HotseatState in ash/public/cpp/shelf_types.h.
enum class HotseatState {
  kNone = 0,
  kHidden,
  kShownClamShell,
  kShownHomeLauncher,
  kExtended,
  kMaxValue = kExtended,
};


const char* ToString(HotseatState as_enum);
HotseatState ParseHotseatState(base::StringPiece as_string);
std::u16string GetHotseatStateParseError(base::StringPiece as_string);

// The frame mode of a window. None if the window is framesless.
enum class FrameMode {
  kNone = 0,
  kNormal,
  kImmersive,
  kMaxValue = kImmersive,
};


const char* ToString(FrameMode as_enum);
FrameMode ParseFrameMode(base::StringPiece as_string);
std::u16string GetFrameModeParseError(base::StringPiece as_string);

struct OverviewInfo {
  OverviewInfo();
  ~OverviewInfo();
  OverviewInfo(const OverviewInfo&) = delete;
  OverviewInfo& operator=(const OverviewInfo&) = delete;
  OverviewInfo(OverviewInfo&& rhs);
  OverviewInfo& operator=(OverviewInfo&& rhs);

  // Populates a OverviewInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, OverviewInfo& out);

  // Populates a OverviewInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, OverviewInfo& out);

  // Creates a deep copy of OverviewInfo.
  OverviewInfo Clone() const;

  // Creates a OverviewInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<OverviewInfo> FromValueDeprecated(const base::Value& value);

  // Creates a OverviewInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<OverviewInfo> FromValue(const base::Value::Dict& value);

  // Creates a OverviewInfo object from a base::Value, or nullopt on failure.
  static absl::optional<OverviewInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisOverviewInfo object.
  base::Value::Dict ToValue() const;

  // Bounds in screen of an OverviewItem.
  Bounds bounds;

  // Whether an OverviewItem is being dragged in overview.
  bool is_dragged;

};

struct ShelfIconPinUpdateParam {
  ShelfIconPinUpdateParam();
  ~ShelfIconPinUpdateParam();
  ShelfIconPinUpdateParam(const ShelfIconPinUpdateParam&) = delete;
  ShelfIconPinUpdateParam& operator=(const ShelfIconPinUpdateParam&) = delete;
  ShelfIconPinUpdateParam(ShelfIconPinUpdateParam&& rhs);
  ShelfIconPinUpdateParam& operator=(ShelfIconPinUpdateParam&& rhs);

  // Populates a ShelfIconPinUpdateParam object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ShelfIconPinUpdateParam& out);

  // Populates a ShelfIconPinUpdateParam object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ShelfIconPinUpdateParam& out);

  // Creates a deep copy of ShelfIconPinUpdateParam.
  ShelfIconPinUpdateParam Clone() const;

  // Creates a ShelfIconPinUpdateParam object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ShelfIconPinUpdateParam> FromValueDeprecated(const base::Value& value);

  // Creates a ShelfIconPinUpdateParam object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<ShelfIconPinUpdateParam> FromValue(const base::Value::Dict& value);

  // Creates a ShelfIconPinUpdateParam object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ShelfIconPinUpdateParam> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisShelfIconPinUpdateParam object.
  base::Value::Dict ToValue() const;

  // The identifier of the target app.
  std::string app_id;

  // The target pin state for the app.
  bool pinned;

};

struct AppWindowInfo {
  AppWindowInfo();
  ~AppWindowInfo();
  AppWindowInfo(const AppWindowInfo&) = delete;
  AppWindowInfo& operator=(const AppWindowInfo&) = delete;
  AppWindowInfo(AppWindowInfo&& rhs);
  AppWindowInfo& operator=(AppWindowInfo&& rhs);

  // Populates a AppWindowInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AppWindowInfo& out);

  // Populates a AppWindowInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AppWindowInfo& out);

  // Creates a deep copy of AppWindowInfo.
  AppWindowInfo Clone() const;

  // Creates a AppWindowInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<AppWindowInfo> FromValueDeprecated(const base::Value& value);

  // Creates a AppWindowInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<AppWindowInfo> FromValue(const base::Value::Dict& value);

  // Creates a AppWindowInfo object from a base::Value, or nullopt on failure.
  static absl::optional<AppWindowInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAppWindowInfo object.
  base::Value::Dict ToValue() const;

  // The identifier of the window. This shouldn't change across the time.
  int id;

  // The name of the window object -- typically internal class name of the window
  // (like 'BrowserFrame').
  std::string name;

  AppWindowType window_type;

  WindowStateType state_type;

  // The bounds of the window, in the coordinate of the root window (i.e. relative
  // to the display where this window resides).
  Bounds bounds_in_root;

  // The identifier of the display where this window resides.
  std::string display_id;

  bool is_visible;

  bool can_focus;

  // The title of the window; this can be seen in the window caption, or in the
  // overview mode. Typically, this provides the title of the webpage or the title
  // supplied by the application.
  std::string title;

  // Whether some animation is ongoing on the window or not.
  bool is_animating;

  // The final bounds of the window when the animation completes. This should be
  // same as |boundsInRoot| when |isAnimating| is false.
  Bounds target_bounds;

  // Whether or not the window is going to be visible after the animation
  // completes. This should be same as |isVisible| when |isAnimating| is false.
  bool target_visibility;

  // WM Releated states
  bool is_active;

  bool has_focus;

  bool on_active_desk;

  bool has_capture;

  bool can_resize;

  // Stacking order of the window in relation to its siblings. 0 indicates that
  // the window is topmost. -1 if stacking info is not available
  int stacking_order;

  // Window frame info
  FrameMode frame_mode;

  bool is_frame_visible;

  int caption_height;

  // The bitset of the enabled caption buttons. See
  // ui/views/window/caption_button_types.h.
  int caption_button_enabled_status;

  // The bitset of the caption buttons which are visible on the frame.
  int caption_button_visible_status;

  absl::optional<std::string> arc_package_name;

  absl::optional<OverviewInfo> overview_info;

  // The identifier of the app associated with the window that was launched from
  // full restore. This should be same as |appId| when the window was restored
  // from full restore, otherwise null.
  absl::optional<std::string> full_restore_window_app_id;

  // The identifier of the app associated with the window.
  absl::optional<std::string> app_id;

};

struct Accelerator {
  Accelerator();
  ~Accelerator();
  Accelerator(const Accelerator&) = delete;
  Accelerator& operator=(const Accelerator&) = delete;
  Accelerator(Accelerator&& rhs);
  Accelerator& operator=(Accelerator&& rhs);

  // Populates a Accelerator object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, Accelerator& out);

  // Populates a Accelerator object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, Accelerator& out);

  // Creates a deep copy of Accelerator.
  Accelerator Clone() const;

  // Creates a Accelerator object from a base::Value, or NULL on failure.
  static std::unique_ptr<Accelerator> FromValueDeprecated(const base::Value& value);

  // Creates a Accelerator object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<Accelerator> FromValue(const base::Value::Dict& value);

  // Creates a Accelerator object from a base::Value, or nullopt on failure.
  static absl::optional<Accelerator> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAccelerator object.
  base::Value::Dict ToValue() const;

  std::string key_code;

  bool shift;

  bool control;

  bool alt;

  bool search;

  bool pressed;

};

struct ScrollableShelfState {
  ScrollableShelfState();
  ~ScrollableShelfState();
  ScrollableShelfState(const ScrollableShelfState&) = delete;
  ScrollableShelfState& operator=(const ScrollableShelfState&) = delete;
  ScrollableShelfState(ScrollableShelfState&& rhs);
  ScrollableShelfState& operator=(ScrollableShelfState&& rhs);

  // Populates a ScrollableShelfState object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ScrollableShelfState& out);

  // Populates a ScrollableShelfState object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ScrollableShelfState& out);

  // Creates a deep copy of ScrollableShelfState.
  ScrollableShelfState Clone() const;

  // Creates a ScrollableShelfState object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ScrollableShelfState> FromValueDeprecated(const base::Value& value);

  // Creates a ScrollableShelfState object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<ScrollableShelfState> FromValue(const base::Value::Dict& value);

  // Creates a ScrollableShelfState object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ScrollableShelfState> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisScrollableShelfState object.
  base::Value::Dict ToValue() const;

  absl::optional<double> scroll_distance;

};

struct ShelfState {
  ShelfState();
  ~ShelfState();
  ShelfState(const ShelfState&) = delete;
  ShelfState& operator=(const ShelfState&) = delete;
  ShelfState(ShelfState&& rhs);
  ShelfState& operator=(ShelfState&& rhs);

  // Populates a ShelfState object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, ShelfState& out);

  // Populates a ShelfState object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ShelfState& out);

  // Creates a deep copy of ShelfState.
  ShelfState Clone() const;

  // Creates a ShelfState object from a base::Value, or NULL on failure.
  static std::unique_ptr<ShelfState> FromValueDeprecated(const base::Value& value);

  // Creates a ShelfState object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ShelfState> FromValue(const base::Value::Dict& value);

  // Creates a ShelfState object from a base::Value, or nullopt on failure.
  static absl::optional<ShelfState> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisShelfState object.
  base::Value::Dict ToValue() const;

  absl::optional<double> scroll_distance;

};

struct ScrollableShelfInfo {
  ScrollableShelfInfo();
  ~ScrollableShelfInfo();
  ScrollableShelfInfo(const ScrollableShelfInfo&) = delete;
  ScrollableShelfInfo& operator=(const ScrollableShelfInfo&) = delete;
  ScrollableShelfInfo(ScrollableShelfInfo&& rhs);
  ScrollableShelfInfo& operator=(ScrollableShelfInfo&& rhs);

  // Populates a ScrollableShelfInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ScrollableShelfInfo& out);

  // Populates a ScrollableShelfInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ScrollableShelfInfo& out);

  // Creates a deep copy of ScrollableShelfInfo.
  ScrollableShelfInfo Clone() const;

  // Creates a ScrollableShelfInfo object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ScrollableShelfInfo> FromValueDeprecated(const base::Value& value);

  // Creates a ScrollableShelfInfo object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<ScrollableShelfInfo> FromValue(const base::Value::Dict& value);

  // Creates a ScrollableShelfInfo object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ScrollableShelfInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisScrollableShelfInfo object.
  base::Value::Dict ToValue() const;

  double main_axis_offset;

  double page_offset;

  absl::optional<double> target_main_axis_offset;

  Bounds left_arrow_bounds;

  Bounds right_arrow_bounds;

  bool is_animating;

  bool icons_under_animation;

  bool is_overflow;

  std::vector<Bounds> icons_bounds_in_screen;

  bool is_shelf_widget_animating;

};

struct HotseatSwipeDescriptor {
  HotseatSwipeDescriptor();
  ~HotseatSwipeDescriptor();
  HotseatSwipeDescriptor(const HotseatSwipeDescriptor&) = delete;
  HotseatSwipeDescriptor& operator=(const HotseatSwipeDescriptor&) = delete;
  HotseatSwipeDescriptor(HotseatSwipeDescriptor&& rhs);
  HotseatSwipeDescriptor& operator=(HotseatSwipeDescriptor&& rhs);

  // Populates a HotseatSwipeDescriptor object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, HotseatSwipeDescriptor& out);

  // Populates a HotseatSwipeDescriptor object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, HotseatSwipeDescriptor& out);

  // Creates a deep copy of HotseatSwipeDescriptor.
  HotseatSwipeDescriptor Clone() const;

  // Creates a HotseatSwipeDescriptor object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<HotseatSwipeDescriptor> FromValueDeprecated(const base::Value& value);

  // Creates a HotseatSwipeDescriptor object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<HotseatSwipeDescriptor> FromValue(const base::Value::Dict& value);

  // Creates a HotseatSwipeDescriptor object from a base::Value, or nullopt on
  // failure.
  static absl::optional<HotseatSwipeDescriptor> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisHotseatSwipeDescriptor object.
  base::Value::Dict ToValue() const;

  Location swipe_start_location;

  Location swipe_end_location;

};

struct HotseatInfo {
  HotseatInfo();
  ~HotseatInfo();
  HotseatInfo(const HotseatInfo&) = delete;
  HotseatInfo& operator=(const HotseatInfo&) = delete;
  HotseatInfo(HotseatInfo&& rhs);
  HotseatInfo& operator=(HotseatInfo&& rhs);

  // Populates a HotseatInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, HotseatInfo& out);

  // Populates a HotseatInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, HotseatInfo& out);

  // Creates a deep copy of HotseatInfo.
  HotseatInfo Clone() const;

  // Creates a HotseatInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<HotseatInfo> FromValueDeprecated(const base::Value& value);

  // Creates a HotseatInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<HotseatInfo> FromValue(const base::Value::Dict& value);

  // Creates a HotseatInfo object from a base::Value, or nullopt on failure.
  static absl::optional<HotseatInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisHotseatInfo object.
  base::Value::Dict ToValue() const;

  HotseatSwipeDescriptor swipe_up;

  HotseatState state;

  bool is_animating;

  // Whether the shelf is hidden with auto-hide enabled.
  bool is_auto_hidden;

};

struct ShelfUIInfo {
  ShelfUIInfo();
  ~ShelfUIInfo();
  ShelfUIInfo(const ShelfUIInfo&) = delete;
  ShelfUIInfo& operator=(const ShelfUIInfo&) = delete;
  ShelfUIInfo(ShelfUIInfo&& rhs);
  ShelfUIInfo& operator=(ShelfUIInfo&& rhs);

  // Populates a ShelfUIInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ShelfUIInfo& out);

  // Populates a ShelfUIInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ShelfUIInfo& out);

  // Creates a deep copy of ShelfUIInfo.
  ShelfUIInfo Clone() const;

  // Creates a ShelfUIInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<ShelfUIInfo> FromValueDeprecated(const base::Value& value);

  // Creates a ShelfUIInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ShelfUIInfo> FromValue(const base::Value::Dict& value);

  // Creates a ShelfUIInfo object from a base::Value, or nullopt on failure.
  static absl::optional<ShelfUIInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisShelfUIInfo object.
  base::Value::Dict ToValue() const;

  HotseatInfo hotseat_info;

  ScrollableShelfInfo scrollable_shelf_info;

};

struct DesksInfo {
  DesksInfo();
  ~DesksInfo();
  DesksInfo(const DesksInfo&) = delete;
  DesksInfo& operator=(const DesksInfo&) = delete;
  DesksInfo(DesksInfo&& rhs);
  DesksInfo& operator=(DesksInfo&& rhs);

  // Populates a DesksInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, DesksInfo& out);

  // Populates a DesksInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, DesksInfo& out);

  // Creates a deep copy of DesksInfo.
  DesksInfo Clone() const;

  // Creates a DesksInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<DesksInfo> FromValueDeprecated(const base::Value& value);

  // Creates a DesksInfo object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<DesksInfo> FromValue(const base::Value::Dict& value);

  // Creates a DesksInfo object from a base::Value, or nullopt on failure.
  static absl::optional<DesksInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDesksInfo object.
  base::Value::Dict ToValue() const;

  int active_desk_index;

  int num_desks;

  bool is_animating;

  std::vector<std::string> desk_containers;

};

struct LauncherSearchBoxState {
  LauncherSearchBoxState();
  ~LauncherSearchBoxState();
  LauncherSearchBoxState(const LauncherSearchBoxState&) = delete;
  LauncherSearchBoxState& operator=(const LauncherSearchBoxState&) = delete;
  LauncherSearchBoxState(LauncherSearchBoxState&& rhs);
  LauncherSearchBoxState& operator=(LauncherSearchBoxState&& rhs);

  // Populates a LauncherSearchBoxState object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, LauncherSearchBoxState& out);

  // Populates a LauncherSearchBoxState object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, LauncherSearchBoxState& out);

  // Creates a deep copy of LauncherSearchBoxState.
  LauncherSearchBoxState Clone() const;

  // Creates a LauncherSearchBoxState object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<LauncherSearchBoxState> FromValueDeprecated(const base::Value& value);

  // Creates a LauncherSearchBoxState object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<LauncherSearchBoxState> FromValue(const base::Value::Dict& value);

  // Creates a LauncherSearchBoxState object from a base::Value, or nullopt on
  // failure.
  static absl::optional<LauncherSearchBoxState> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisLauncherSearchBoxState object.
  base::Value::Dict ToValue() const;

  std::string ghost_text;

};

struct FrameCountingPerSinkData {
  FrameCountingPerSinkData();
  ~FrameCountingPerSinkData();
  FrameCountingPerSinkData(const FrameCountingPerSinkData&) = delete;
  FrameCountingPerSinkData& operator=(const FrameCountingPerSinkData&) = delete;
  FrameCountingPerSinkData(FrameCountingPerSinkData&& rhs);
  FrameCountingPerSinkData& operator=(FrameCountingPerSinkData&& rhs);

  // Populates a FrameCountingPerSinkData object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, FrameCountingPerSinkData& out);

  // Populates a FrameCountingPerSinkData object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, FrameCountingPerSinkData& out);

  // Creates a deep copy of FrameCountingPerSinkData.
  FrameCountingPerSinkData Clone() const;

  // Creates a FrameCountingPerSinkData object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<FrameCountingPerSinkData> FromValueDeprecated(const base::Value& value);

  // Creates a FrameCountingPerSinkData object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<FrameCountingPerSinkData> FromValue(const base::Value::Dict& value);

  // Creates a FrameCountingPerSinkData object from a base::Value, or nullopt on
  // failure.
  static absl::optional<FrameCountingPerSinkData> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisFrameCountingPerSinkData object.
  base::Value::Dict ToValue() const;

  // Type of the frame sink. This corresponds to CompositorFrameSinkType.
  std::string sink_type;

  // Whether the frame sink is the root.
  bool is_root;

  // Debug label of the frame sink.
  std::string debug_label;

  // Number of presented frames grouped using `bucketSizeInSeconds` arg in
  // startFrameCounting call. It would be fps if the `bucketSizeInSeconds` is 1s.
  std::vector<int> presented_frames;

};

struct SetWindowBoundsResult {
  SetWindowBoundsResult();
  ~SetWindowBoundsResult();
  SetWindowBoundsResult(const SetWindowBoundsResult&) = delete;
  SetWindowBoundsResult& operator=(const SetWindowBoundsResult&) = delete;
  SetWindowBoundsResult(SetWindowBoundsResult&& rhs);
  SetWindowBoundsResult& operator=(SetWindowBoundsResult&& rhs);

  // Populates a SetWindowBoundsResult object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SetWindowBoundsResult& out);

  // Populates a SetWindowBoundsResult object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SetWindowBoundsResult& out);

  // Creates a deep copy of SetWindowBoundsResult.
  SetWindowBoundsResult Clone() const;

  // Creates a SetWindowBoundsResult object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<SetWindowBoundsResult> FromValueDeprecated(const base::Value& value);

  // Creates a SetWindowBoundsResult object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<SetWindowBoundsResult> FromValue(const base::Value::Dict& value);

  // Creates a SetWindowBoundsResult object from a base::Value, or nullopt on
  // failure.
  static absl::optional<SetWindowBoundsResult> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSetWindowBoundsResult object.
  base::Value::Dict ToValue() const;

  // Bounds of the window.
  Bounds bounds;

  // Display ID of the display the window is on.
  std::string display_id;

};

struct DisplaySmoothnessData {
  DisplaySmoothnessData();
  ~DisplaySmoothnessData();
  DisplaySmoothnessData(const DisplaySmoothnessData&) = delete;
  DisplaySmoothnessData& operator=(const DisplaySmoothnessData&) = delete;
  DisplaySmoothnessData(DisplaySmoothnessData&& rhs);
  DisplaySmoothnessData& operator=(DisplaySmoothnessData&& rhs);

  // Populates a DisplaySmoothnessData object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DisplaySmoothnessData& out);

  // Populates a DisplaySmoothnessData object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DisplaySmoothnessData& out);

  // Creates a deep copy of DisplaySmoothnessData.
  DisplaySmoothnessData Clone() const;

  // Creates a DisplaySmoothnessData object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<DisplaySmoothnessData> FromValueDeprecated(const base::Value& value);

  // Creates a DisplaySmoothnessData object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<DisplaySmoothnessData> FromValue(const base::Value::Dict& value);

  // Creates a DisplaySmoothnessData object from a base::Value, or nullopt on
  // failure.
  static absl::optional<DisplaySmoothnessData> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDisplaySmoothnessData object.
  base::Value::Dict ToValue() const;

  // Number of frames expected to be shown for this animation.
  int frames_expected;

  // Number of frames actually shown for this animation.
  int frames_produced;

  // Number of janks during this animation. A jank is counted when the current
  // frame latency is larger than previous ones.
  int jank_count;

  // Display throughput percentage at fixed intervals.
  std::vector<int> throughput;

};

struct ThroughputTrackerAnimationData {
  ThroughputTrackerAnimationData();
  ~ThroughputTrackerAnimationData();
  ThroughputTrackerAnimationData(const ThroughputTrackerAnimationData&) = delete;
  ThroughputTrackerAnimationData& operator=(const ThroughputTrackerAnimationData&) = delete;
  ThroughputTrackerAnimationData(ThroughputTrackerAnimationData&& rhs);
  ThroughputTrackerAnimationData& operator=(ThroughputTrackerAnimationData&& rhs);

  // Populates a ThroughputTrackerAnimationData object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ThroughputTrackerAnimationData& out);

  // Populates a ThroughputTrackerAnimationData object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ThroughputTrackerAnimationData& out);

  // Creates a deep copy of ThroughputTrackerAnimationData.
  ThroughputTrackerAnimationData Clone() const;

  // Creates a ThroughputTrackerAnimationData object from a base::Value, or NULL
  // on failure.
  static std::unique_ptr<ThroughputTrackerAnimationData> FromValueDeprecated(const base::Value& value);

  // Creates a ThroughputTrackerAnimationData object from a base::Value::Dict,
  // or nullopt on failure.
  static absl::optional<ThroughputTrackerAnimationData> FromValue(const base::Value::Dict& value);

  // Creates a ThroughputTrackerAnimationData object from a base::Value, or
  // nullopt on failure.
  static absl::optional<ThroughputTrackerAnimationData> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisThroughputTrackerAnimationData object.
  base::Value::Dict ToValue() const;

  // Animation start time in milliseconds, relative to when
  // `startThroughputTrackerDataCollection` is called.
  int start_offset_ms;

  // Animation stop time in milliseconds, relative to when
  // `startThroughputTrackerDataCollection` is called.
  int stop_offset_ms;

  // Number of frames expected to be shown for this animation.
  int frames_expected;

  // Number of frames actually shown for this animation.
  int frames_produced;

  // Number of janks during this animation. A jank is counted when the current
  // frame latency is larger than previous ones.
  int jank_count;

};

struct ResetHoldingSpaceOptions {
  ResetHoldingSpaceOptions();
  ~ResetHoldingSpaceOptions();
  ResetHoldingSpaceOptions(const ResetHoldingSpaceOptions&) = delete;
  ResetHoldingSpaceOptions& operator=(const ResetHoldingSpaceOptions&) = delete;
  ResetHoldingSpaceOptions(ResetHoldingSpaceOptions&& rhs);
  ResetHoldingSpaceOptions& operator=(ResetHoldingSpaceOptions&& rhs);

  // Populates a ResetHoldingSpaceOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ResetHoldingSpaceOptions& out);

  // Populates a ResetHoldingSpaceOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ResetHoldingSpaceOptions& out);

  // Creates a deep copy of ResetHoldingSpaceOptions.
  ResetHoldingSpaceOptions Clone() const;

  // Creates a ResetHoldingSpaceOptions object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ResetHoldingSpaceOptions> FromValueDeprecated(const base::Value& value);

  // Creates a ResetHoldingSpaceOptions object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<ResetHoldingSpaceOptions> FromValue(const base::Value::Dict& value);

  // Creates a ResetHoldingSpaceOptions object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ResetHoldingSpaceOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisResetHoldingSpaceOptions object.
  base::Value::Dict ToValue() const;

  // Whether to call `ash::holding_space_prefs::MarkTimeOfFirstAdd()` after reset.
  // Used to show the holding space tray in tests, since it's otherwise hidden
  // after OOBE.
  bool mark_time_of_first_add;

};

struct LoginEventRecorderData {
  LoginEventRecorderData();
  ~LoginEventRecorderData();
  LoginEventRecorderData(const LoginEventRecorderData&) = delete;
  LoginEventRecorderData& operator=(const LoginEventRecorderData&) = delete;
  LoginEventRecorderData(LoginEventRecorderData&& rhs);
  LoginEventRecorderData& operator=(LoginEventRecorderData&& rhs);

  // Populates a LoginEventRecorderData object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, LoginEventRecorderData& out);

  // Populates a LoginEventRecorderData object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, LoginEventRecorderData& out);

  // Creates a deep copy of LoginEventRecorderData.
  LoginEventRecorderData Clone() const;

  // Creates a LoginEventRecorderData object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<LoginEventRecorderData> FromValueDeprecated(const base::Value& value);

  // Creates a LoginEventRecorderData object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<LoginEventRecorderData> FromValue(const base::Value::Dict& value);

  // Creates a LoginEventRecorderData object from a base::Value, or nullopt on
  // failure.
  static absl::optional<LoginEventRecorderData> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisLoginEventRecorderData object.
  base::Value::Dict ToValue() const;

  // Event name
  std::string name;

  // Number of frames actually shown for this animation.
  int microsecnods_since_unix_epoch;

};

struct GetAccessTokenParams {
  GetAccessTokenParams();
  ~GetAccessTokenParams();
  GetAccessTokenParams(const GetAccessTokenParams&) = delete;
  GetAccessTokenParams& operator=(const GetAccessTokenParams&) = delete;
  GetAccessTokenParams(GetAccessTokenParams&& rhs);
  GetAccessTokenParams& operator=(GetAccessTokenParams&& rhs);

  // Populates a GetAccessTokenParams object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetAccessTokenParams& out);

  // Populates a GetAccessTokenParams object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetAccessTokenParams& out);

  // Creates a deep copy of GetAccessTokenParams.
  GetAccessTokenParams Clone() const;

  // Creates a GetAccessTokenParams object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<GetAccessTokenParams> FromValueDeprecated(const base::Value& value);

  // Creates a GetAccessTokenParams object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<GetAccessTokenParams> FromValue(const base::Value::Dict& value);

  // Creates a GetAccessTokenParams object from a base::Value, or nullopt on
  // failure.
  static absl::optional<GetAccessTokenParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetAccessTokenParams object.
  base::Value::Dict ToValue() const;

  // An email associated with the account to get a token for.
  std::string email;

  // A list of OAuth scopes to request.
  std::vector<std::string> scopes;

  // An optional timeout in milliseconds for the request. Default: 90 seconds
  absl::optional<int> timeout_ms;

};

struct GetAccessTokenData {
  GetAccessTokenData();
  ~GetAccessTokenData();
  GetAccessTokenData(const GetAccessTokenData&) = delete;
  GetAccessTokenData& operator=(const GetAccessTokenData&) = delete;
  GetAccessTokenData(GetAccessTokenData&& rhs);
  GetAccessTokenData& operator=(GetAccessTokenData&& rhs);

  // Populates a GetAccessTokenData object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetAccessTokenData& out);

  // Populates a GetAccessTokenData object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetAccessTokenData& out);

  // Creates a deep copy of GetAccessTokenData.
  GetAccessTokenData Clone() const;

  // Creates a GetAccessTokenData object from a base::Value, or NULL on failure.
  static std::unique_ptr<GetAccessTokenData> FromValueDeprecated(const base::Value& value);

  // Creates a GetAccessTokenData object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<GetAccessTokenData> FromValue(const base::Value::Dict& value);

  // Creates a GetAccessTokenData object from a base::Value, or nullopt on
  // failure.
  static absl::optional<GetAccessTokenData> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetAccessTokenData object.
  base::Value::Dict ToValue() const;

  // The access token
  std::string access_token;

  // The time the access token will expire as a unix timestamp in milliseconds.
  std::string expiration_time_unix_ms;

};

struct MakeFuseboxTempDirData {
  MakeFuseboxTempDirData();
  ~MakeFuseboxTempDirData();
  MakeFuseboxTempDirData(const MakeFuseboxTempDirData&) = delete;
  MakeFuseboxTempDirData& operator=(const MakeFuseboxTempDirData&) = delete;
  MakeFuseboxTempDirData(MakeFuseboxTempDirData&& rhs);
  MakeFuseboxTempDirData& operator=(MakeFuseboxTempDirData&& rhs);

  // Populates a MakeFuseboxTempDirData object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MakeFuseboxTempDirData& out);

  // Populates a MakeFuseboxTempDirData object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, MakeFuseboxTempDirData& out);

  // Creates a deep copy of MakeFuseboxTempDirData.
  MakeFuseboxTempDirData Clone() const;

  // Creates a MakeFuseboxTempDirData object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<MakeFuseboxTempDirData> FromValueDeprecated(const base::Value& value);

  // Creates a MakeFuseboxTempDirData object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<MakeFuseboxTempDirData> FromValue(const base::Value::Dict& value);

  // Creates a MakeFuseboxTempDirData object from a base::Value, or nullopt on
  // failure.
  static absl::optional<MakeFuseboxTempDirData> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMakeFuseboxTempDirData object.
  base::Value::Dict ToValue() const;

  std::string fusebox_file_path;

  std::string underlying_file_path;

};

struct GetCurrentInputMethodDescriptorData {
  GetCurrentInputMethodDescriptorData();
  ~GetCurrentInputMethodDescriptorData();
  GetCurrentInputMethodDescriptorData(const GetCurrentInputMethodDescriptorData&) = delete;
  GetCurrentInputMethodDescriptorData& operator=(const GetCurrentInputMethodDescriptorData&) = delete;
  GetCurrentInputMethodDescriptorData(GetCurrentInputMethodDescriptorData&& rhs);
  GetCurrentInputMethodDescriptorData& operator=(GetCurrentInputMethodDescriptorData&& rhs);

  // Populates a GetCurrentInputMethodDescriptorData object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetCurrentInputMethodDescriptorData& out);

  // Populates a GetCurrentInputMethodDescriptorData object from a Dict&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetCurrentInputMethodDescriptorData& out);

  // Creates a deep copy of GetCurrentInputMethodDescriptorData.
  GetCurrentInputMethodDescriptorData Clone() const;

  // Creates a GetCurrentInputMethodDescriptorData object from a base::Value, or
  // NULL on failure.
  static std::unique_ptr<GetCurrentInputMethodDescriptorData> FromValueDeprecated(const base::Value& value);

  // Creates a GetCurrentInputMethodDescriptorData object from a
  // base::Value::Dict, or nullopt on failure.
  static absl::optional<GetCurrentInputMethodDescriptorData> FromValue(const base::Value::Dict& value);

  // Creates a GetCurrentInputMethodDescriptorData object from a base::Value, or
  // nullopt on failure.
  static absl::optional<GetCurrentInputMethodDescriptorData> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetCurrentInputMethodDescriptorData object.
  base::Value::Dict ToValue() const;

  std::string keyboard_layout;

};


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

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // if set, ignore ongoing downloads and onunbeforeunload handlers.
  bool force;


 private:
  Params();
};

}  // namespace Shutdown

namespace LoginStatus {

namespace Results {

base::Value::List Create(const LoginStatusDict& status);
}  // namespace Results

}  // namespace LoginStatus

namespace LockScreen {

}  // namespace LockScreen

namespace GetExtensionsInfo {

namespace Results {

base::Value::List Create(const ExtensionsInfoArray& info);
}  // namespace Results

}  // namespace GetExtensionsInfo

namespace GetAllEnterprisePolicies {

namespace Results {

base::Value::List Create(const base::Value& all_policies);
}  // namespace Results

}  // namespace GetAllEnterprisePolicies

namespace RefreshEnterprisePolicies {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RefreshEnterprisePolicies

namespace RefreshRemoteCommands {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RefreshRemoteCommands

namespace SimulateAsanMemoryBug {

}  // namespace SimulateAsanMemoryBug

namespace SetTouchpadSensitivity {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // the pointer sensitivity setting index.
  int value;


 private:
  Params();
};

}  // namespace SetTouchpadSensitivity

namespace SetTapToClick {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // if set, enable tap-to-click.
  bool enabled;


 private:
  Params();
};

}  // namespace SetTapToClick

namespace SetThreeFingerClick {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // if set, enable three finger click.
  bool enabled;


 private:
  Params();
};

}  // namespace SetThreeFingerClick

namespace SetTapDragging {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // if set, enable tap dragging.
  bool enabled;


 private:
  Params();
};

}  // namespace SetTapDragging

namespace SetNaturalScroll {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // if set, enable Australian scrolling.
  bool enabled;


 private:
  Params();
};

}  // namespace SetNaturalScroll

namespace SetMouseSensitivity {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // the pointer sensitivity setting index.
  int value;


 private:
  Params();
};

}  // namespace SetMouseSensitivity

namespace SetPrimaryButtonRight {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // if set, swap the primary mouse button.
  bool right;


 private:
  Params();
};

}  // namespace SetPrimaryButtonRight

namespace SetMouseReverseScroll {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // if set, enable reverse scrolling.
  bool enabled;


 private:
  Params();
};

}  // namespace SetMouseReverseScroll

namespace GetVisibleNotifications {

namespace Results {

base::Value::List Create(const std::vector<Notification>& notifications);
}  // namespace Results

}  // namespace GetVisibleNotifications

namespace RemoveAllNotifications {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RemoveAllNotifications

namespace GetArcStartTime {

namespace Results {

base::Value::List Create(double start_ticks);
}  // namespace Results

}  // namespace GetArcStartTime

namespace GetArcState {

namespace Results {

base::Value::List Create(const ArcState& result);
}  // namespace Results

}  // namespace GetArcState

namespace GetPlayStoreState {

namespace Results {

base::Value::List Create(const PlayStoreState& result);
}  // namespace Results

}  // namespace GetPlayStoreState

namespace GetPrinterList {

namespace Results {

base::Value::List Create(const std::vector<Printer>& printers);
}  // namespace Results

}  // namespace GetPrinterList

namespace IsAppShown {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string app_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool app_shown);
}  // namespace Results

}  // namespace IsAppShown

namespace IsArcProvisioned {

namespace Results {

base::Value::List Create(bool arc_provisioned);
}  // namespace Results

}  // namespace IsArcProvisioned

namespace GetLacrosInfo {

namespace Results {

base::Value::List Create(const LacrosInfo& info);
}  // namespace Results

}  // namespace GetLacrosInfo

namespace GetArcApp {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string app_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const ArcAppDict& package);
}  // namespace Results

}  // namespace GetArcApp

namespace GetArcAppKills {

namespace Results {

base::Value::List Create(const ArcAppKillsDict& counts);
}  // namespace Results

}  // namespace GetArcAppKills

namespace GetArcPackage {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string package_name;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const ArcPackageDict& package);
}  // namespace Results

}  // namespace GetArcPackage

namespace WaitForSystemWebAppsInstall {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace WaitForSystemWebAppsInstall

namespace GetDefaultPinnedAppIds {

namespace Results {

base::Value::List Create(const std::vector<std::string>& items);
}  // namespace Results

}  // namespace GetDefaultPinnedAppIds

namespace GetRegisteredSystemWebApps {

namespace Results {

base::Value::List Create(const std::vector<SystemWebApp>& system_web_apps);
}  // namespace Results

}  // namespace GetRegisteredSystemWebApps

namespace IsSystemWebAppOpen {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string app_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool is_open);
}  // namespace Results

}  // namespace IsSystemWebAppOpen

namespace LaunchApp {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string app_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace LaunchApp

namespace LaunchSystemWebApp {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string app_name;

  std::string url;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace LaunchSystemWebApp

namespace LaunchFilesAppToPath {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string absolute_path;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace LaunchFilesAppToPath

namespace CloseApp {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string app_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace CloseApp

namespace UpdatePrinter {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  Printer printer;


 private:
  Params();
};

}  // namespace UpdatePrinter

namespace RemovePrinter {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string printer_id;


 private:
  Params();
};

}  // namespace RemovePrinter

namespace StartArc {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace StartArc

namespace StopArc {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace StopArc

namespace SetPlayStoreEnabled {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // if set, enable the Play Store.
  bool enabled;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetPlayStoreEnabled

namespace GetClipboardTextData {

namespace Results {

base::Value::List Create(const std::string& data);
}  // namespace Results

}  // namespace GetClipboardTextData

namespace SetClipboardTextData {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string data;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetClipboardTextData

namespace RunCrostiniInstaller {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RunCrostiniInstaller

namespace RunCrostiniUninstaller {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RunCrostiniUninstaller

namespace SetCrostiniEnabled {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Enable Crostini.
  bool enabled;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetCrostiniEnabled

namespace ExportCrostini {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The path in Downloads to save the export.
  std::string path;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ExportCrostini

namespace ImportCrostini {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The path in Downloads to read the import.
  std::string path;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ImportCrostini

namespace CouldAllowCrostini {

namespace Results {

base::Value::List Create(bool can_be_allowed);
}  // namespace Results

}  // namespace CouldAllowCrostini

namespace SetPluginVMPolicy {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // URL to the image to install.
  std::string image_url;

  // Hash for the provided image.
  std::string image_hash;

  // License key for Plugin VM.
  std::string license_key;


 private:
  Params();
};

}  // namespace SetPluginVMPolicy

namespace ShowPluginVMInstaller {

}  // namespace ShowPluginVMInstaller

namespace InstallBorealis {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace InstallBorealis

namespace RegisterComponent {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The name of the component.
  std::string name;

  // Path to the component.
  std::string path;


 private:
  Params();
};

}  // namespace RegisterComponent

namespace TakeScreenshot {

namespace Results {

base::Value::List Create(const std::string& base64_png);
}  // namespace Results

}  // namespace TakeScreenshot

namespace TakeScreenshotForDisplay {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // the display id of the display.
  std::string display_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& base64_png);
}  // namespace Results

}  // namespace TakeScreenshotForDisplay

namespace LoadSmartDimComponent {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace LoadSmartDimComponent

namespace SetAssistantEnabled {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  bool enabled;

  int timeout_ms;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetAssistantEnabled

namespace EnableAssistantAndWaitForReady {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace EnableAssistantAndWaitForReady

namespace SendAssistantTextQuery {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string query;

  int timeout_ms;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const AssistantQueryStatus& status);
}  // namespace Results

}  // namespace SendAssistantTextQuery

namespace WaitForAssistantQueryStatus {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  int timeout_s;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const AssistantQueryStatus& status);
}  // namespace Results

}  // namespace WaitForAssistantQueryStatus

namespace IsArcPackageListInitialRefreshed {

namespace Results {

base::Value::List Create(bool refreshed);
}  // namespace Results

}  // namespace IsArcPackageListInitialRefreshed

namespace SetAllowedPref {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string pref_name;

  base::Value value;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetAllowedPref

namespace SetWhitelistedPref {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string pref_name;

  base::Value value;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetWhitelistedPref

namespace SetCrostiniAppScaled {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The Crostini application ID.
  std::string app_id;

  // The app is "scaled" when shown, which means it uses low display
  // density.
  bool scaled;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetCrostiniAppScaled

namespace GetPrimaryDisplayScaleFactor {

namespace Results {

base::Value::List Create(double scale_factor);
}  // namespace Results

}  // namespace GetPrimaryDisplayScaleFactor

namespace IsTabletModeEnabled {

namespace Results {

base::Value::List Create(bool enabled);
}  // namespace Results

}  // namespace IsTabletModeEnabled

namespace SetTabletModeEnabled {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // if set, enable tablet mode.
  bool enabled;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool enabled);
}  // namespace Results

}  // namespace SetTabletModeEnabled

namespace GetAllInstalledApps {

namespace Results {

base::Value::List Create(const std::vector<App>& apps);
}  // namespace Results

}  // namespace GetAllInstalledApps

namespace GetShelfItems {

namespace Results {

base::Value::List Create(const std::vector<ShelfItem>& items);
}  // namespace Results

}  // namespace GetShelfItems

namespace GetLauncherSearchBoxState {

namespace Results {

base::Value::List Create(const LauncherSearchBoxState& state);
}  // namespace Results

}  // namespace GetLauncherSearchBoxState

namespace GetShelfAutoHideBehavior {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // display that contains the shelf. |callback| is invoked with the shelf auto
  // hide behavior. Possible behavior values are: "always", "never" or "hidden".
  std::string display_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& behavior);
}  // namespace Results

}  // namespace GetShelfAutoHideBehavior

namespace SetShelfAutoHideBehavior {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // display that contains the shelf.
  std::string display_id;

  // an enum of "always", "never" or "hidden".
  std::string behavior;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetShelfAutoHideBehavior

namespace GetShelfAlignment {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // display that contains the shelf. |callback| is invoked with the shelf
  // alignment type.
  std::string display_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const ShelfAlignmentType& alignment);
}  // namespace Results

}  // namespace GetShelfAlignment

namespace SetShelfAlignment {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // display that contains the shelf.
  std::string display_id;

  // the type of alignment to set.
  ShelfAlignmentType alignment;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetShelfAlignment

namespace PinShelfIcon {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string app_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace PinShelfIcon

namespace SetShelfIconPin {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::vector<ShelfIconPinUpdateParam> update_params;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<std::string>& results);
}  // namespace Results

}  // namespace SetShelfIconPin

namespace SetOverviewModeState {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // whether entering to or exiting from the overview mode.
  bool start;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool finished);
}  // namespace Results

}  // namespace SetOverviewModeState

namespace ShowVirtualKeyboardIfEnabled {

}  // namespace ShowVirtualKeyboardIfEnabled

namespace SendArcOverlayColor {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // the int color of the system ui.
  int color;

  // the theme of the system ui.
  ThemeStyle theme;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool result);
}  // namespace Results

}  // namespace SendArcOverlayColor

namespace ArcAppTracingStart {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ArcAppTracingStart

namespace ArcAppTracingStopAndAnalyze {

namespace Results {

base::Value::List Create(const ArcAppTracingInfo& info);
}  // namespace Results

}  // namespace ArcAppTracingStopAndAnalyze

namespace SwapWindowsInSplitView {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SwapWindowsInSplitView

namespace SetArcAppWindowFocus {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // the package name of the ARC app window.
  std::string package_name;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetArcAppWindowFocus

namespace WaitForDisplayRotation {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // display that contains the shelf.
  std::string display_id;

  // the target rotation.
  RotationType rotation;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool success);
}  // namespace Results

}  // namespace WaitForDisplayRotation

namespace GetAppWindowList {

namespace Results {

base::Value::List Create(const std::vector<AppWindowInfo>& window_list);
}  // namespace Results

}  // namespace GetAppWindowList

namespace SetAppWindowState {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // the id of the window
  int id;

  // WM event type to send to the app window.
  WindowStateChangeDict change;

  // whether the method should wait for the window state to change before
  // returning.
  absl::optional<bool> wait;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const WindowStateType& current_type);
}  // namespace Results

}  // namespace SetAppWindowState

namespace ActivateAppWindow {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // the id of the window
  int id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ActivateAppWindow

namespace CloseAppWindow {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // the id of the window
  int id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace CloseAppWindow

namespace InstallPWAForCurrentURL {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Timeout in milliseconds for the operation to complete.
  int timeout_ms;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& app_id);
}  // namespace Results

}  // namespace InstallPWAForCurrentURL

namespace ActivateAccelerator {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // the accelerator to activate.
  Accelerator accelerator;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool success);
}  // namespace Results

}  // namespace ActivateAccelerator

namespace WaitForLauncherState {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // the target launcher state.
  LauncherStateType launcher_state;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace WaitForLauncherState

namespace WaitForOverviewState {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // the target overview state.
  OverviewStateType overview_state;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace WaitForOverviewState

namespace CreateNewDesk {

namespace Results {

base::Value::List Create(bool success);
}  // namespace Results

}  // namespace CreateNewDesk

namespace ActivateDeskAtIndex {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // the zero-based index of the desk desired to be activated.
  int index;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool success);
}  // namespace Results

}  // namespace ActivateDeskAtIndex

namespace RemoveActiveDesk {

namespace Results {

base::Value::List Create(bool success);
}  // namespace Results

}  // namespace RemoveActiveDesk

namespace ActivateAdjacentDesksToTargetIndex {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // the zero-based index of the desk desired to be activated.
  int index;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool success);
}  // namespace Results

}  // namespace ActivateAdjacentDesksToTargetIndex

namespace GetDeskCount {

namespace Results {

base::Value::List Create(int count);
}  // namespace Results

}  // namespace GetDeskCount

namespace GetDesksInfo {

namespace Results {

base::Value::List Create(const DesksInfo& desks);
}  // namespace Results

}  // namespace GetDesksInfo

namespace MouseClick {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // the mouse button for the click event.
  MouseButton button;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace MouseClick

namespace MousePress {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // the mouse button to be pressed.
  MouseButton button;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace MousePress

namespace MouseRelease {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // the mouse button to be released.
  MouseButton button;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace MouseRelease

namespace MouseMove {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // the target location (in screen coordinate).
  Location location;

  // the duration (in milliseconds) for the mouse movement.    The mouse will move
  // linearly. 0 means moving immediately.
  double duration_in_ms;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace MouseMove

namespace SetMetricsEnabled {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Enable metrics reporting.
  bool enabled;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetMetricsEnabled

namespace SetArcTouchMode {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  bool enabled;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetArcTouchMode

namespace GetScrollableShelfInfoForState {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  ScrollableShelfState state;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const ScrollableShelfInfo& info);
}  // namespace Results

}  // namespace GetScrollableShelfInfoForState

namespace GetShelfUIInfoForState {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  ShelfState state;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const ShelfUIInfo& info);
}  // namespace Results

}  // namespace GetShelfUIInfoForState

namespace SetWindowBounds {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // the id of the window.
  int id;

  // bounds the window should be set to.
  Bounds bounds;

  // id of display to move the window to.
  std::string display_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const SetWindowBoundsResult& result);
}  // namespace Results

}  // namespace SetWindowBounds

namespace StartSmoothnessTracking {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  absl::optional<std::string> display_id;

  absl::optional<int> throughput_interval_ms;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace StartSmoothnessTracking

namespace StopSmoothnessTracking {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  absl::optional<std::string> display_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const DisplaySmoothnessData& data);
}  // namespace Results

}  // namespace StopSmoothnessTracking

namespace DisableSwitchAccessDialog {

}  // namespace DisableSwitchAccessDialog

namespace WaitForAmbientPhotoAnimation {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // number of completions of the animation.
  int num_completions;

  // the timeout in seconds.
  int timeout;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace WaitForAmbientPhotoAnimation

namespace WaitForAmbientVideo {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // the timeout in seconds.
  int timeout;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace WaitForAmbientVideo

namespace DisableAutomation {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace DisableAutomation

namespace StartThroughputTrackerDataCollection {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace StartThroughputTrackerDataCollection

namespace StopThroughputTrackerDataCollection {

namespace Results {

base::Value::List Create(const std::vector<ThroughputTrackerAnimationData>& data);
}  // namespace Results

}  // namespace StopThroughputTrackerDataCollection

namespace GetThroughputTrackerData {

namespace Results {

base::Value::List Create(const std::vector<ThroughputTrackerAnimationData>& data);
}  // namespace Results

}  // namespace GetThroughputTrackerData

namespace GetDisplaySmoothness {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  absl::optional<std::string> display_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(int smoothness);
}  // namespace Results

}  // namespace GetDisplaySmoothness

namespace ResetHoldingSpace {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  absl::optional<ResetHoldingSpaceOptions> options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ResetHoldingSpace

namespace StartLoginEventRecorderDataCollection {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace StartLoginEventRecorderDataCollection

namespace GetLoginEventRecorderLoginEvents {

namespace Results {

base::Value::List Create(const std::vector<LoginEventRecorderData>& data);
}  // namespace Results

}  // namespace GetLoginEventRecorderLoginEvents

namespace AddLoginEventForTesting {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace AddLoginEventForTesting

namespace ForceAutoThemeMode {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  bool dark_mode_enabled;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ForceAutoThemeMode

namespace GetAccessToken {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  GetAccessTokenParams access_token_params;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const GetAccessTokenData& data);
}  // namespace Results

}  // namespace GetAccessToken

namespace IsInputMethodReadyForTesting {

namespace Results {

base::Value::List Create(bool is_ready);
}  // namespace Results

}  // namespace IsInputMethodReadyForTesting

namespace MakeFuseboxTempDir {

namespace Results {

base::Value::List Create(const MakeFuseboxTempDirData& data);
}  // namespace Results

}  // namespace MakeFuseboxTempDir

namespace RemoveFuseboxTempDir {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string fusebox_file_path;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RemoveFuseboxTempDir

namespace RemoveComponentExtension {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string extension_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RemoveComponentExtension

namespace StartFrameCounting {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  int bucket_size_in_seconds;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace StartFrameCounting

namespace StopFrameCounting {

namespace Results {

base::Value::List Create(const std::vector<FrameCountingPerSinkData>& data);
}  // namespace Results

}  // namespace StopFrameCounting

namespace InstallBruschetta {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string vm_name;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace InstallBruschetta

namespace RemoveBruschetta {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string vm_name;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RemoveBruschetta

namespace IsFeatureEnabled {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string feature_name;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool enabled);
}  // namespace Results

}  // namespace IsFeatureEnabled

namespace GetCurrentInputMethodDescriptor {

namespace Results {

base::Value::List Create(const GetCurrentInputMethodDescriptorData& data);
}  // namespace Results

}  // namespace GetCurrentInputMethodDescriptor

namespace SetArcInteractiveState {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Enable ARC interactive.
  bool enabled;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetArcInteractiveState

namespace IsFieldTrialActive {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string feature_name;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool active);
}  // namespace Results

}  // namespace IsFieldTrialActive

//
// Events
//

namespace OnClipboardDataChanged {

extern const char kEventName[];  // "autotestPrivate.onClipboardDataChanged"

base::Value::List Create();
}  // namespace OnClipboardDataChanged

}  // namespace autotest_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_AUTOTEST_PRIVATE_H__
