// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/runtime.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_RUNTIME_H__
#define EXTENSIONS_COMMON_API_RUNTIME_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace runtime {

//
// Properties
//

//
// Types
//

// The operating system Chrome is running on.
enum class PlatformOs {
  kNone = 0,
  kMac,
  kWin,
  kAndroid,
  kCros,
  kLinux,
  kOpenbsd,
  kFuchsia,
  kMaxValue = kFuchsia,
};


const char* ToString(PlatformOs as_enum);
PlatformOs ParsePlatformOs(base::StringPiece as_string);
std::u16string GetPlatformOsParseError(base::StringPiece as_string);

// The machine's processor architecture.
enum class PlatformArch {
  kNone = 0,
  kArm,
  kArm64,
  kX86_32,
  kX86_64,
  kMips,
  kMips64,
  kMaxValue = kMips64,
};


const char* ToString(PlatformArch as_enum);
PlatformArch ParsePlatformArch(base::StringPiece as_string);
std::u16string GetPlatformArchParseError(base::StringPiece as_string);

// The native client architecture. This may be different from arch on some
// platforms.
enum class PlatformNaclArch {
  kNone = 0,
  kArm,
  kX86_32,
  kX86_64,
  kMips,
  kMips64,
  kMaxValue = kMips64,
};


const char* ToString(PlatformNaclArch as_enum);
PlatformNaclArch ParsePlatformNaclArch(base::StringPiece as_string);
std::u16string GetPlatformNaclArchParseError(base::StringPiece as_string);

// An object containing information about the current platform.
struct PlatformInfo {
  PlatformInfo();
  ~PlatformInfo();
  PlatformInfo(const PlatformInfo&) = delete;
  PlatformInfo& operator=(const PlatformInfo&) = delete;
  PlatformInfo(PlatformInfo&& rhs);
  PlatformInfo& operator=(PlatformInfo&& rhs);

  // Populates a PlatformInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PlatformInfo& out);

  // Populates a PlatformInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PlatformInfo& out);

  // Creates a deep copy of PlatformInfo.
  PlatformInfo Clone() const;

  // Creates a PlatformInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<PlatformInfo> FromValueDeprecated(const base::Value& value);

  // Creates a PlatformInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<PlatformInfo> FromValue(const base::Value::Dict& value);

  // Creates a PlatformInfo object from a base::Value, or nullopt on failure.
  static absl::optional<PlatformInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPlatformInfo object.
  base::Value::Dict ToValue() const;

  // The operating system Chrome is running on.
  PlatformOs os;

  // The machine's processor architecture.
  PlatformArch arch;

  // The native client architecture. This may be different from arch on some
  // platforms.
  PlatformNaclArch nacl_arch;

};

// Result of the update check.
enum class RequestUpdateCheckStatus {
  kNone = 0,
  kThrottled,
  kNoUpdate,
  kUpdateAvailable,
  kMaxValue = kUpdateAvailable,
};


const char* ToString(RequestUpdateCheckStatus as_enum);
RequestUpdateCheckStatus ParseRequestUpdateCheckStatus(base::StringPiece as_string);
std::u16string GetRequestUpdateCheckStatusParseError(base::StringPiece as_string);

// The reason that this event is being dispatched.
enum class OnInstalledReason {
  kNone = 0,
  kInstall,
  kUpdate,
  kChromeUpdate,
  kSharedModuleUpdate,
  kMaxValue = kSharedModuleUpdate,
};


const char* ToString(OnInstalledReason as_enum);
OnInstalledReason ParseOnInstalledReason(base::StringPiece as_string);
std::u16string GetOnInstalledReasonParseError(base::StringPiece as_string);

// The reason that the event is being dispatched. 'app_update' is used when the
// restart is needed because the application is updated to a newer version.
// 'os_update' is used when the restart is needed because the browser/OS is
// updated to a newer version. 'periodic' is used when the system runs for more
// than the permitted uptime set in the enterprise policy.
enum class OnRestartRequiredReason {
  kNone = 0,
  kAppUpdate,
  kOsUpdate,
  kPeriodic,
  kMaxValue = kPeriodic,
};


const char* ToString(OnRestartRequiredReason as_enum);
OnRestartRequiredReason ParseOnRestartRequiredReason(base::StringPiece as_string);
std::u16string GetOnRestartRequiredReasonParseError(base::StringPiece as_string);

enum class ContextType {
  kNone = 0,
  kTab,
  kPopup,
  kBackground,
  kOffscreenDocument,
  kSidePanel,
  kMaxValue = kSidePanel,
};


const char* ToString(ContextType as_enum);
ContextType ParseContextType(base::StringPiece as_string);
std::u16string GetContextTypeParseError(base::StringPiece as_string);

// A context hosting extension content.
struct ExtensionContext {
  ExtensionContext();
  ~ExtensionContext();
  ExtensionContext(const ExtensionContext&) = delete;
  ExtensionContext& operator=(const ExtensionContext&) = delete;
  ExtensionContext(ExtensionContext&& rhs);
  ExtensionContext& operator=(ExtensionContext&& rhs);

  // Populates a ExtensionContext object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ExtensionContext& out);

  // Populates a ExtensionContext object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ExtensionContext& out);

  // Creates a deep copy of ExtensionContext.
  ExtensionContext Clone() const;

  // Creates a ExtensionContext object from a base::Value, or NULL on failure.
  static std::unique_ptr<ExtensionContext> FromValueDeprecated(const base::Value& value);

  // Creates a ExtensionContext object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ExtensionContext> FromValue(const base::Value::Dict& value);

  // Creates a ExtensionContext object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ExtensionContext> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisExtensionContext object.
  base::Value::Dict ToValue() const;

  // The type of context this corresponds to.
  ContextType context_type;

  // A unique identifier for this context
  std::string context_id;

  // The ID of the tab for this context, or -1 if this context is not hosted in a
  // tab.
  int tab_id;

  // The ID of the window for this context, or -1 if this context is not hosted in
  // a window.
  int window_id;

  // A UUID for the document associated with this context, or undefined if this
  // context is hosted not in a document.
  absl::optional<std::string> document_id;

  // The ID of the frame for this context, or -1 if this context is not hosted in
  // a frame.
  int frame_id;

  // The URL of the document associated with this context, or undefined if the
  // context is not hosted in a document.
  absl::optional<std::string> document_url;

  // The origin of the document associated with this context, or undefined if the
  // context is not hosted in a document.
  absl::optional<std::string> document_origin;

  // Whether the context is associated with an incognito profile.
  bool incognito;

};

// A filter to match against certain extension contexts. Matching contexts must
// match all specified filters; any filter that is not specified matches all
// available contexts. Thus, a filter of `{}` will match all available contexts.
struct ContextFilter {
  ContextFilter();
  ~ContextFilter();
  ContextFilter(const ContextFilter&) = delete;
  ContextFilter& operator=(const ContextFilter&) = delete;
  ContextFilter(ContextFilter&& rhs);
  ContextFilter& operator=(ContextFilter&& rhs);

  // Populates a ContextFilter object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ContextFilter& out);

  // Populates a ContextFilter object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ContextFilter& out);

  // Creates a deep copy of ContextFilter.
  ContextFilter Clone() const;

  // Creates a ContextFilter object from a base::Value, or NULL on failure.
  static std::unique_ptr<ContextFilter> FromValueDeprecated(const base::Value& value);

  // Creates a ContextFilter object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ContextFilter> FromValue(const base::Value::Dict& value);

  // Creates a ContextFilter object from a base::Value, or nullopt on failure.
  static absl::optional<ContextFilter> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisContextFilter object.
  base::Value::Dict ToValue() const;

  absl::optional<std::vector<ContextType>> context_types;

  absl::optional<std::vector<std::string>> context_ids;

  absl::optional<std::vector<int>> tab_ids;

  absl::optional<std::vector<int>> window_ids;

  absl::optional<std::vector<std::string>> document_ids;

  absl::optional<std::vector<int>> frame_ids;

  absl::optional<std::vector<std::string>> document_urls;

  absl::optional<std::vector<std::string>> document_origins;

  absl::optional<bool> incognito;

};


//
// Functions
//

namespace GetBackgroundPage {

namespace Results {

// The JavaScript 'window' object for the background page.
struct BackgroundPage {
  BackgroundPage();
  ~BackgroundPage();
  BackgroundPage(const BackgroundPage&) = delete;
  BackgroundPage& operator=(const BackgroundPage&) = delete;
  BackgroundPage(BackgroundPage&& rhs);
  BackgroundPage& operator=(BackgroundPage&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisBackgroundPage object.
  base::Value::Dict ToValue() const;

  base::Value::Dict additional_properties;
};


// The JavaScript 'window' object for the background page.
base::Value::List Create(const BackgroundPage& background_page);
}  // namespace Results

}  // namespace GetBackgroundPage

namespace OpenOptionsPage {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace OpenOptionsPage

namespace SetUninstallURL {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // URL to be opened after the extension is uninstalled. This URL must have an
  // http: or https: scheme. Set an empty string to not open a new tab upon
  // uninstallation.
  std::string url;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetUninstallURL

namespace Reload {

}  // namespace Reload

namespace RequestUpdateCheck {

namespace Results {

// RequestUpdateCheckResult object that holds the status of the update check and
// any details of the result if there is an update available
struct Result {
  Result();
  ~Result();
  Result(const Result&) = delete;
  Result& operator=(const Result&) = delete;
  Result(Result&& rhs);
  Result& operator=(Result&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisResult object.
  base::Value::Dict ToValue() const;

  // Result of the update check.
  RequestUpdateCheckStatus status;

  // If an update is available, this contains the version of the available update.
  absl::optional<std::string> version;

};


// RequestUpdateCheckResult object that holds the status of the update check and
// any details of the result if there is an update available
base::Value::List Create(const Result& result);
}  // namespace Results

}  // namespace RequestUpdateCheck

namespace Restart {

}  // namespace Restart

namespace RestartAfterDelay {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Time to wait in seconds before rebooting the device, or -1 to cancel a
  // scheduled reboot.
  int seconds;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RestartAfterDelay

namespace GetPlatformInfo {

namespace Results {

base::Value::List Create(const PlatformInfo& platform_info);
}  // namespace Results

}  // namespace GetPlatformInfo

namespace GetPackageDirectoryEntry {

namespace Results {

struct DirectoryEntry {
  DirectoryEntry();
  ~DirectoryEntry();
  DirectoryEntry(const DirectoryEntry&) = delete;
  DirectoryEntry& operator=(const DirectoryEntry&) = delete;
  DirectoryEntry(DirectoryEntry&& rhs);
  DirectoryEntry& operator=(DirectoryEntry&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDirectoryEntry object.
  base::Value::Dict ToValue() const;

  base::Value::Dict additional_properties;
};


base::Value::List Create(const DirectoryEntry& directory_entry);
}  // namespace Results

}  // namespace GetPackageDirectoryEntry

namespace GetContexts {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // A filter to find matching contexts. A context matches if it matches all
  // specified fields in the filter. Any unspecified field in the filter matches
  // all contexts.
  ContextFilter filter;


 private:
  Params();
};

namespace Results {

// The matching contexts, if any.
base::Value::List Create(const std::vector<ExtensionContext>& contexts);
}  // namespace Results

}  // namespace GetContexts

//
// Events
//

namespace OnStartup {

extern const char kEventName[];  // "runtime.onStartup"

base::Value::List Create();
}  // namespace OnStartup

namespace OnInstalled {

extern const char kEventName[];  // "runtime.onInstalled"

struct Details {
  Details();
  ~Details();
  Details(const Details&) = delete;
  Details& operator=(const Details&) = delete;
  Details(Details&& rhs);
  Details& operator=(Details&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDetails object.
  base::Value::Dict ToValue() const;

  // The reason that this event is being dispatched.
  OnInstalledReason reason;

  // Indicates the previous version of the extension, which has just been updated.
  // This is present only if 'reason' is 'update'.
  absl::optional<std::string> previous_version;

  // Indicates the ID of the imported shared module extension which updated. This
  // is present only if 'reason' is 'shared_module_update'.
  absl::optional<std::string> id;

};


base::Value::List Create(const Details& details);
}  // namespace OnInstalled

namespace OnSuspend {

extern const char kEventName[];  // "runtime.onSuspend"

base::Value::List Create();
}  // namespace OnSuspend

namespace OnSuspendCanceled {

extern const char kEventName[];  // "runtime.onSuspendCanceled"

base::Value::List Create();
}  // namespace OnSuspendCanceled

namespace OnUpdateAvailable {

extern const char kEventName[];  // "runtime.onUpdateAvailable"

// The manifest details of the available update.
struct Details {
  Details();
  ~Details();
  Details(const Details&) = delete;
  Details& operator=(const Details&) = delete;
  Details(Details&& rhs);
  Details& operator=(Details&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDetails object.
  base::Value::Dict ToValue() const;

  // The version number of the available update.
  std::string version;

  base::Value::Dict additional_properties;
};


// The manifest details of the available update.
base::Value::List Create(const Details& details);
}  // namespace OnUpdateAvailable

namespace OnBrowserUpdateAvailable {

extern const char kEventName[];  // "runtime.onBrowserUpdateAvailable"

base::Value::List Create();
}  // namespace OnBrowserUpdateAvailable

namespace OnRestartRequired {

extern const char kEventName[];  // "runtime.onRestartRequired"

// The reason that the event is being dispatched.
base::Value::List Create(const OnRestartRequiredReason& reason);
}  // namespace OnRestartRequired

}  // namespace runtime
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_RUNTIME_H__
