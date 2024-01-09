// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/webstore_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_WEBSTORE_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_WEBSTORE_PRIVATE_H__

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
namespace webstore_private {

//
// Types
//

// Whether the API call succeeded, or the reason for failure.
enum class Result {
  kNone = 0,
  kEmptyString,
  kSuccess,
  kUserGestureRequired,
  kUnknownError,
  kFeatureDisabled,
  kUnsupportedExtensionType,
  kMissingDependencies,
  kInstallError,
  kUserCancelled,
  kInvalidId,
  kBlacklisted,
  kBlockedByPolicy,
  kInstallInProgress,
  kLaunchInProgress,
  kManifestError,
  kIconError,
  kInvalidIconUrl,
  kAlreadyInstalled,
  kBlockedForChildAccount,
  kMaxValue = kBlockedForChildAccount,
};


const char* ToString(Result as_enum);
Result ParseResult(base::StringPiece as_string);
std::u16string GetResultParseError(base::StringPiece as_string);

enum class WebGlStatus {
  kNone = 0,
  kWebglAllowed,
  kWebglBlocked,
  kMaxValue = kWebglBlocked,
};


const char* ToString(WebGlStatus as_enum);
WebGlStatus ParseWebGlStatus(base::StringPiece as_string);
std::u16string GetWebGlStatusParseError(base::StringPiece as_string);

enum class ExtensionInstallStatus {
  kNone = 0,
  kCanRequest,
  kRequestPending,
  kBlockedByPolicy,
  kInstallable,
  kEnabled,
  kDisabled,
  kTerminated,
  kBlacklisted,
  kCustodianApprovalRequired,
  kForceInstalled,
  kMaxValue = kForceInstalled,
};


const char* ToString(ExtensionInstallStatus as_enum);
ExtensionInstallStatus ParseExtensionInstallStatus(base::StringPiece as_string);
std::u16string GetExtensionInstallStatusParseError(base::StringPiece as_string);


//
// Functions
//

namespace BeginInstallWithManifest3 {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Details {
    Details();
    ~Details();
    Details(const Details&) = delete;
    Details& operator=(const Details&) = delete;
    Details(Details&& rhs) noexcept;
    Details& operator=(Details&& rhs) noexcept;

    // Populates a Details object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Details& out);

    // Populates a Details object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Details& out);

    // Creates a deep copy of Details.
    Details Clone() const;

    // Creates a Details object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value::Dict& value);

    // Creates a Details object from a base::Value, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value& value);

    // The id of the extension to be installed.
    std::string id;

    // A string with the contents of the extension's manifest.json file. During the
    // install process, the browser will check that the downloaded extension's
    // manifest matches what was passed in here.
    std::string manifest;

    std::optional<std::string> icon_url;

    // A string to use instead of the raw value of the 'name' key from
    // manifest.json.
    std::optional<std::string> localized_name;

    // The name of the locale used for generating localizedName. This should be the
    // name of one of the directories in the _locales folder of the extension, or
    // the default_locale setting from the manifest.
    std::optional<std::string> locale;

    // A flag to change the UI we show when an app is installed - a value of true
    // means to show a bubble pointing at the new tab button (instead of the default
    // behavior of opening the new tab page and animating the app icon).
    std::optional<bool> app_install_bubble;

    // A flag to cause the app launcher to be installed before installing the
    // extension, if it isn't installed already.
    std::optional<bool> enable_launcher;

    // The authuser index to be included with CRX download requests in multi-login
    // sessions.
    std::optional<std::string> authuser;

    // A flag to specify if the extension is included in the ESB allowlist.
    std::optional<bool> esb_allowlist;

    base::Value::Dict additional_properties;
  };


  Details details;


 private:
  Params();
};

namespace Results {

// A string result code, which will be empty upon success. The possible values
// in the case of errors include 'unknown_error', 'user_cancelled',
// 'manifest_error', 'icon_error', 'invalid_id', 'permission_denied',
// 'invalid_icon_url' and 'already_installed'.
base::Value::List Create(const Result& result);
}  // namespace Results

}  // namespace BeginInstallWithManifest3

namespace CompleteInstall {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The id of the extension to be installed. This should match a previous call to
  // beginInstallWithManifest3.
  std::string expected_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace CompleteInstall

namespace EnableAppLauncher {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace EnableAppLauncher

namespace GetBrowserLogin {

namespace Results {

struct Info {
  Info();
  ~Info();
  Info(const Info&) = delete;
  Info& operator=(const Info&) = delete;
  Info(Info&& rhs) noexcept;
  Info& operator=(Info&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisInfo object.
  base::Value::Dict ToValue() const;

  std::string login;

};


base::Value::List Create(const Info& info);
}  // namespace Results

}  // namespace GetBrowserLogin

namespace GetStoreLogin {

namespace Results {

base::Value::List Create(const std::string& login);
}  // namespace Results

}  // namespace GetStoreLogin

namespace SetStoreLogin {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string login;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetStoreLogin

namespace GetWebGLStatus {

namespace Results {

base::Value::List Create(const WebGlStatus& webgl_status);
}  // namespace Results

}  // namespace GetWebGLStatus

namespace GetIsLauncherEnabled {

namespace Results {

base::Value::List Create(bool is_enabled);
}  // namespace Results

}  // namespace GetIsLauncherEnabled

namespace IsInIncognitoMode {

namespace Results {

base::Value::List Create(bool is_incognito);
}  // namespace Results

}  // namespace IsInIncognitoMode

namespace IsPendingCustodianApproval {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The extension id of the extension to be checked.
  std::string id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool is_pending_approval);
}  // namespace Results

}  // namespace IsPendingCustodianApproval

namespace GetReferrerChain {

namespace Results {

base::Value::List Create(const std::string& referrer_chain);
}  // namespace Results

}  // namespace GetReferrerChain

namespace GetExtensionStatus {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The id of the extension
  std::string id;

  // The manifest of the extension
  std::optional<std::string> manifest;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const ExtensionInstallStatus& status);
}  // namespace Results

}  // namespace GetExtensionStatus

}  // namespace webstore_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_WEBSTORE_PRIVATE_H__
