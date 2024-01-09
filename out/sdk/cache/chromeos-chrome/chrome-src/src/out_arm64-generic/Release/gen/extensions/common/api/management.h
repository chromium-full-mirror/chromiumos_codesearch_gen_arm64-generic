// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/management.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_MANAGEMENT_H__
#define EXTENSIONS_COMMON_API_MANAGEMENT_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace management {

//
// Types
//

// Information about an icon belonging to an extension, app, or theme.
struct IconInfo {
  IconInfo();
  ~IconInfo();
  IconInfo(const IconInfo&) = delete;
  IconInfo& operator=(const IconInfo&) = delete;
  IconInfo(IconInfo&& rhs) noexcept;
  IconInfo& operator=(IconInfo&& rhs) noexcept;

  // Populates a IconInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, IconInfo& out);

  // Populates a IconInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, IconInfo& out);

  // Creates a deep copy of IconInfo.
  IconInfo Clone() const;

  // Creates a IconInfo object from a base::Value::Dict, or nullopt on failure.
  static std::optional<IconInfo> FromValue(const base::Value::Dict& value);

  // Creates a IconInfo object from a base::Value, or nullopt on failure.
  static std::optional<IconInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisIconInfo object.
  base::Value::Dict ToValue() const;

  // A number representing the width and height of the icon. Likely values include
  // (but are not limited to) 128, 48, 24, and 16.
  int size;

  // The URL for this icon image. To display a grayscale version of the icon (to
  // indicate that an extension is disabled, for example), append
  // <code>?grayscale=true</code> to the URL.
  std::string url;

};

// These are all possible app launch types.
enum class LaunchType {
  kNone = 0,
  kOpenAsRegularTab,
  kOpenAsPinnedTab,
  kOpenAsWindow,
  kOpenFullScreen,
  kMaxValue = kOpenFullScreen,
};


const char* ToString(LaunchType as_enum);
LaunchType ParseLaunchType(base::StringPiece as_string);
std::u16string GetLaunchTypeParseError(base::StringPiece as_string);

// A reason the item is disabled.
enum class ExtensionDisabledReason {
  kNone = 0,
  kUnknown,
  kPermissionsIncrease,
  kMaxValue = kPermissionsIncrease,
};


const char* ToString(ExtensionDisabledReason as_enum);
ExtensionDisabledReason ParseExtensionDisabledReason(base::StringPiece as_string);
std::u16string GetExtensionDisabledReasonParseError(base::StringPiece as_string);

// The type of this extension, app, or theme.
enum class ExtensionType {
  kNone = 0,
  kExtension,
  kHostedApp,
  kPackagedApp,
  kLegacyPackagedApp,
  kTheme,
  kLoginScreenExtension,
  kMaxValue = kLoginScreenExtension,
};


const char* ToString(ExtensionType as_enum);
ExtensionType ParseExtensionType(base::StringPiece as_string);
std::u16string GetExtensionTypeParseError(base::StringPiece as_string);

// How the extension was installed. One of<br><var>admin</var>: The extension
// was installed because of an administrative policy,<br><var>development</var>:
// The extension was loaded unpacked in developer mode,<br><var>normal</var>:
// The extension was installed normally via a .crx file,<br><var>sideload</var>:
// The extension was installed by other software on the
// machine,<br><var>other</var>: The extension was installed by other means.
enum class ExtensionInstallType {
  kNone = 0,
  kAdmin,
  kDevelopment,
  kNormal,
  kSideload,
  kOther,
  kMaxValue = kOther,
};


const char* ToString(ExtensionInstallType as_enum);
ExtensionInstallType ParseExtensionInstallType(base::StringPiece as_string);
std::u16string GetExtensionInstallTypeParseError(base::StringPiece as_string);

// Information about an installed extension, app, or theme.
struct ExtensionInfo {
  ExtensionInfo();
  ~ExtensionInfo();
  ExtensionInfo(const ExtensionInfo&) = delete;
  ExtensionInfo& operator=(const ExtensionInfo&) = delete;
  ExtensionInfo(ExtensionInfo&& rhs) noexcept;
  ExtensionInfo& operator=(ExtensionInfo&& rhs) noexcept;

  // Populates a ExtensionInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ExtensionInfo& out);

  // Populates a ExtensionInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ExtensionInfo& out);

  // Creates a deep copy of ExtensionInfo.
  ExtensionInfo Clone() const;

  // Creates a ExtensionInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ExtensionInfo> FromValue(const base::Value::Dict& value);

  // Creates a ExtensionInfo object from a base::Value, or nullopt on failure.
  static std::optional<ExtensionInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisExtensionInfo object.
  base::Value::Dict ToValue() const;

  // The extension's unique identifier.
  std::string id;

  // The name of this extension, app, or theme.
  std::string name;

  // A short version of the name of this extension, app, or theme.
  std::string short_name;

  // The description of this extension, app, or theme.
  std::string description;

  // The <a href='manifest/version'>version</a> of this extension, app, or theme.
  std::string version;

  // The <a href='manifest/version#version_name'>version name</a> of this
  // extension, app, or theme if the manifest specified one.
  std::optional<std::string> version_name;

  // Whether this extension can be disabled or uninstalled by the user.
  bool may_disable;

  // Whether this extension can be enabled by the user. This is only returned for
  // extensions which are not enabled.
  std::optional<bool> may_enable;

  // Whether it is currently enabled or disabled.
  bool enabled;

  // A reason the item is disabled.
  ExtensionDisabledReason disabled_reason;

  // True if this is an app.
  bool is_app;

  // The type of this extension, app, or theme.
  ExtensionType type;

  // The launch url (only present for apps).
  std::optional<std::string> app_launch_url;

  // The URL of the homepage of this extension, app, or theme.
  std::optional<std::string> homepage_url;

  // The update URL of this extension, app, or theme.
  std::optional<std::string> update_url;

  // Whether the extension, app, or theme declares that it supports offline.
  bool offline_enabled;

  // The url for the item's options page, if it has one.
  std::string options_url;

  // A list of icon information. Note that this just reflects what was declared in
  // the manifest, and the actual image at that url may be larger or smaller than
  // what was declared, so you might consider using explicit width and height
  // attributes on img tags referencing these images. See the <a
  // href='manifest/icons'>manifest documentation on icons</a> for more details.
  std::optional<std::vector<IconInfo>> icons;

  // Returns a list of API based permissions.
  std::vector<std::string> permissions;

  // Returns a list of host based permissions.
  std::vector<std::string> host_permissions;

  // How the extension was installed.
  ExtensionInstallType install_type;

  // The app launch type (only present for apps).
  LaunchType launch_type;

  // The currently available launch types (only present for apps).
  std::optional<std::vector<LaunchType>> available_launch_types;

};

// Options for how to handle the extension's uninstallation.
struct UninstallOptions {
  UninstallOptions();
  ~UninstallOptions();
  UninstallOptions(const UninstallOptions&) = delete;
  UninstallOptions& operator=(const UninstallOptions&) = delete;
  UninstallOptions(UninstallOptions&& rhs) noexcept;
  UninstallOptions& operator=(UninstallOptions&& rhs) noexcept;

  // Populates a UninstallOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UninstallOptions& out);

  // Populates a UninstallOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, UninstallOptions& out);

  // Creates a deep copy of UninstallOptions.
  UninstallOptions Clone() const;

  // Creates a UninstallOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<UninstallOptions> FromValue(const base::Value::Dict& value);

  // Creates a UninstallOptions object from a base::Value, or nullopt on
  // failure.
  static std::optional<UninstallOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisUninstallOptions object.
  base::Value::Dict ToValue() const;

  // Whether or not a confirm-uninstall dialog should prompt the user. Defaults to
  // false for self uninstalls. If an extension uninstalls another extension, this
  // parameter is ignored and the dialog is always shown.
  std::optional<bool> show_confirm_dialog;

};


//
// Functions
//

namespace GetAll {

namespace Results {

base::Value::List Create(const std::vector<ExtensionInfo>& result);
}  // namespace Results

}  // namespace GetAll

namespace Get {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The ID from an item of $(ref:management.ExtensionInfo).
  std::string id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const ExtensionInfo& result);
}  // namespace Results

}  // namespace Get

namespace GetSelf {

namespace Results {

base::Value::List Create(const ExtensionInfo& result);
}  // namespace Results

}  // namespace GetSelf

namespace GetPermissionWarningsById {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The ID of an already installed extension.
  std::string id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<std::string>& permission_warnings);
}  // namespace Results

}  // namespace GetPermissionWarningsById

namespace GetPermissionWarningsByManifest {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Extension manifest JSON string.
  std::string manifest_str;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<std::string>& permission_warnings);
}  // namespace Results

}  // namespace GetPermissionWarningsByManifest

namespace SetEnabled {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // This should be the id from an item of $(ref:management.ExtensionInfo).
  std::string id;

  // Whether this item should be enabled or disabled.
  bool enabled;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetEnabled

namespace Uninstall {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // This should be the id from an item of $(ref:management.ExtensionInfo).
  std::string id;

  std::optional<UninstallOptions> options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Uninstall

namespace UninstallSelf {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::optional<UninstallOptions> options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace UninstallSelf

namespace LaunchApp {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The extension id of the application.
  std::string id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace LaunchApp

namespace CreateAppShortcut {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // This should be the id from an app item of $(ref:management.ExtensionInfo).
  std::string id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace CreateAppShortcut

namespace SetLaunchType {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // This should be the id from an app item of $(ref:management.ExtensionInfo).
  std::string id;

  // The target launch type. Always check and make sure this launch type is in
  // $(ref:ExtensionInfo.availableLaunchTypes), because the available launch types
  // vary on different platforms and configurations.
  LaunchType launch_type;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetLaunchType

namespace GenerateAppForLink {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The URL of a web page. The scheme of the URL can only be "http" or "https".
  std::string url;

  // The title of the generated app.
  std::string title;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const ExtensionInfo& result);
}  // namespace Results

}  // namespace GenerateAppForLink

namespace InstallReplacementWebApp {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace InstallReplacementWebApp

//
// Events
//

namespace OnInstalled {

extern const char kEventName[];  // "management.onInstalled"

base::Value::List Create(const ExtensionInfo& info);
}  // namespace OnInstalled

namespace OnUninstalled {

extern const char kEventName[];  // "management.onUninstalled"

// The id of the extension, app, or theme that was uninstalled.
base::Value::List Create(const std::string& id);
}  // namespace OnUninstalled

namespace OnEnabled {

extern const char kEventName[];  // "management.onEnabled"

base::Value::List Create(const ExtensionInfo& info);
}  // namespace OnEnabled

namespace OnDisabled {

extern const char kEventName[];  // "management.onDisabled"

base::Value::List Create(const ExtensionInfo& info);
}  // namespace OnDisabled

}  // namespace management
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_MANAGEMENT_H__
