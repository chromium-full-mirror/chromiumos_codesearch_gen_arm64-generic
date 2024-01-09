// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/webstore_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/webstore_private.h"

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
namespace webstore_private {
//
// Types
//

const char* ToString(Result enum_param) {
  switch (enum_param) {
    case Result::kEmptyString:
      return "";
    case Result::kSuccess:
      return "success";
    case Result::kUserGestureRequired:
      return "user_gesture_required";
    case Result::kUnknownError:
      return "unknown_error";
    case Result::kFeatureDisabled:
      return "feature_disabled";
    case Result::kUnsupportedExtensionType:
      return "unsupported_extension_type";
    case Result::kMissingDependencies:
      return "missing_dependencies";
    case Result::kInstallError:
      return "install_error";
    case Result::kUserCancelled:
      return "user_cancelled";
    case Result::kInvalidId:
      return "invalid_id";
    case Result::kBlacklisted:
      return "blacklisted";
    case Result::kBlockedByPolicy:
      return "blocked_by_policy";
    case Result::kInstallInProgress:
      return "install_in_progress";
    case Result::kLaunchInProgress:
      return "launch_in_progress";
    case Result::kManifestError:
      return "manifest_error";
    case Result::kIconError:
      return "icon_error";
    case Result::kInvalidIconUrl:
      return "invalid_icon_url";
    case Result::kAlreadyInstalled:
      return "already_installed";
    case Result::kBlockedForChildAccount:
      return "blocked_for_child_account";
    case Result::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

Result ParseResult(base::StringPiece enum_string) {
  if (enum_string == "")
    return Result::kEmptyString;
  if (enum_string == "success")
    return Result::kSuccess;
  if (enum_string == "user_gesture_required")
    return Result::kUserGestureRequired;
  if (enum_string == "unknown_error")
    return Result::kUnknownError;
  if (enum_string == "feature_disabled")
    return Result::kFeatureDisabled;
  if (enum_string == "unsupported_extension_type")
    return Result::kUnsupportedExtensionType;
  if (enum_string == "missing_dependencies")
    return Result::kMissingDependencies;
  if (enum_string == "install_error")
    return Result::kInstallError;
  if (enum_string == "user_cancelled")
    return Result::kUserCancelled;
  if (enum_string == "invalid_id")
    return Result::kInvalidId;
  if (enum_string == "blacklisted")
    return Result::kBlacklisted;
  if (enum_string == "blocked_by_policy")
    return Result::kBlockedByPolicy;
  if (enum_string == "install_in_progress")
    return Result::kInstallInProgress;
  if (enum_string == "launch_in_progress")
    return Result::kLaunchInProgress;
  if (enum_string == "manifest_error")
    return Result::kManifestError;
  if (enum_string == "icon_error")
    return Result::kIconError;
  if (enum_string == "invalid_icon_url")
    return Result::kInvalidIconUrl;
  if (enum_string == "already_installed")
    return Result::kAlreadyInstalled;
  if (enum_string == "blocked_for_child_account")
    return Result::kBlockedForChildAccount;
  return Result::kNone;
}

std::u16string GetResultParseError(base::StringPiece enum_string) {
  return u"expected \"\" or \"success\" or \"user_gesture_required\" or \"unknown_error\" or \"feature_disabled\" or \"unsupported_extension_type\" or \"missing_dependencies\" or \"install_error\" or \"user_cancelled\" or \"invalid_id\" or \"blacklisted\" or \"blocked_by_policy\" or \"install_in_progress\" or \"launch_in_progress\" or \"manifest_error\" or \"icon_error\" or \"invalid_icon_url\" or \"already_installed\" or \"blocked_for_child_account\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(WebGlStatus enum_param) {
  switch (enum_param) {
    case WebGlStatus::kWebglAllowed:
      return "webgl_allowed";
    case WebGlStatus::kWebglBlocked:
      return "webgl_blocked";
    case WebGlStatus::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

WebGlStatus ParseWebGlStatus(base::StringPiece enum_string) {
  if (enum_string == "webgl_allowed")
    return WebGlStatus::kWebglAllowed;
  if (enum_string == "webgl_blocked")
    return WebGlStatus::kWebglBlocked;
  return WebGlStatus::kNone;
}

std::u16string GetWebGlStatusParseError(base::StringPiece enum_string) {
  return u"expected \"webgl_allowed\" or \"webgl_blocked\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ExtensionInstallStatus enum_param) {
  switch (enum_param) {
    case ExtensionInstallStatus::kCanRequest:
      return "can_request";
    case ExtensionInstallStatus::kRequestPending:
      return "request_pending";
    case ExtensionInstallStatus::kBlockedByPolicy:
      return "blocked_by_policy";
    case ExtensionInstallStatus::kInstallable:
      return "installable";
    case ExtensionInstallStatus::kEnabled:
      return "enabled";
    case ExtensionInstallStatus::kDisabled:
      return "disabled";
    case ExtensionInstallStatus::kTerminated:
      return "terminated";
    case ExtensionInstallStatus::kBlacklisted:
      return "blacklisted";
    case ExtensionInstallStatus::kCustodianApprovalRequired:
      return "custodian_approval_required";
    case ExtensionInstallStatus::kForceInstalled:
      return "force_installed";
    case ExtensionInstallStatus::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ExtensionInstallStatus ParseExtensionInstallStatus(base::StringPiece enum_string) {
  if (enum_string == "can_request")
    return ExtensionInstallStatus::kCanRequest;
  if (enum_string == "request_pending")
    return ExtensionInstallStatus::kRequestPending;
  if (enum_string == "blocked_by_policy")
    return ExtensionInstallStatus::kBlockedByPolicy;
  if (enum_string == "installable")
    return ExtensionInstallStatus::kInstallable;
  if (enum_string == "enabled")
    return ExtensionInstallStatus::kEnabled;
  if (enum_string == "disabled")
    return ExtensionInstallStatus::kDisabled;
  if (enum_string == "terminated")
    return ExtensionInstallStatus::kTerminated;
  if (enum_string == "blacklisted")
    return ExtensionInstallStatus::kBlacklisted;
  if (enum_string == "custodian_approval_required")
    return ExtensionInstallStatus::kCustodianApprovalRequired;
  if (enum_string == "force_installed")
    return ExtensionInstallStatus::kForceInstalled;
  return ExtensionInstallStatus::kNone;
}

std::u16string GetExtensionInstallStatusParseError(base::StringPiece enum_string) {
  return u"expected \"can_request\" or \"request_pending\" or \"blocked_by_policy\" or \"installable\" or \"enabled\" or \"disabled\" or \"terminated\" or \"blacklisted\" or \"custodian_approval_required\" or \"force_installed\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



//
// Functions
//

namespace BeginInstallWithManifest3 {

Params::Details::Details()
 {}

Params::Details::~Details() = default;
Params::Details::Details(Details&& rhs) noexcept = default;
Params::Details& Params::Details::operator=(Details&& rhs) noexcept = default;
Params::Details Params::Details::Clone() const {
  Details out;
  out.id = id;
  out.manifest = manifest;
  out.icon_url = icon_url;
  out.localized_name = localized_name;
  out.locale = locale;
  out.app_install_bubble = app_install_bubble;
  out.enable_launcher = enable_launcher;
  out.authuser = authuser;
  out.esb_allowlist = esb_allowlist;
  return out;
}

// static
bool Params::Details::Populate(
    const base::Value::Dict& dict, Details& out) {
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

  const base::Value* manifest_value = dict.Find("manifest");
  if (!manifest_value) {
    return false;
  }
  {
    auto* temp = (*manifest_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.manifest = *temp;
  }

  const base::Value* icon_url_value = dict.Find("iconUrl");
  if (icon_url_value) {
    {
      auto* temp = (*icon_url_value).GetIfString();
      if (!temp) {
        out.icon_url = std::nullopt;
        return false;
      }
      out.icon_url = *temp;
    }
  }

  const base::Value* localized_name_value = dict.Find("localizedName");
  if (localized_name_value) {
    {
      auto* temp = (*localized_name_value).GetIfString();
      if (!temp) {
        out.localized_name = std::nullopt;
        return false;
      }
      out.localized_name = *temp;
    }
  }

  const base::Value* locale_value = dict.Find("locale");
  if (locale_value) {
    {
      auto* temp = (*locale_value).GetIfString();
      if (!temp) {
        out.locale = std::nullopt;
        return false;
      }
      out.locale = *temp;
    }
  }

  const base::Value* app_install_bubble_value = dict.Find("appInstallBubble");
  if (app_install_bubble_value) {
    {
      auto temp = (*app_install_bubble_value).GetIfBool();
      if (!temp.has_value()) {
        out.app_install_bubble = std::nullopt;
        return false;
      }
      out.app_install_bubble = *temp;
    }
  }

  const base::Value* enable_launcher_value = dict.Find("enableLauncher");
  if (enable_launcher_value) {
    {
      auto temp = (*enable_launcher_value).GetIfBool();
      if (!temp.has_value()) {
        out.enable_launcher = std::nullopt;
        return false;
      }
      out.enable_launcher = *temp;
    }
  }

  const base::Value* authuser_value = dict.Find("authuser");
  if (authuser_value) {
    {
      auto* temp = (*authuser_value).GetIfString();
      if (!temp) {
        out.authuser = std::nullopt;
        return false;
      }
      out.authuser = *temp;
    }
  }

  const base::Value* esb_allowlist_value = dict.Find("esbAllowlist");
  if (esb_allowlist_value) {
    {
      auto temp = (*esb_allowlist_value).GetIfBool();
      if (!temp.has_value()) {
        out.esb_allowlist = std::nullopt;
        return false;
      }
      out.esb_allowlist = *temp;
    }
  }

  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool Params::Details::Populate(
    const base::Value& value, Details& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


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
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      if (!Details::Populate(details_value.GetDict(), params.details)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const Result& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(webstore_private::ToString(result));

  return create_results;
}
}  // namespace BeginInstallWithManifest3

namespace CompleteInstall {

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
    const base::Value& expected_id_value = args[0];
    {
      auto* temp = expected_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.expected_id = *temp;
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
}  // namespace CompleteInstall

namespace EnableAppLauncher {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace EnableAppLauncher

namespace GetBrowserLogin {

Results::Info::Info()
 {}

Results::Info::~Info() = default;
Results::Info::Info(Info&& rhs) noexcept = default;
Results::Info& Results::Info::operator=(Info&& rhs) noexcept = default;
base::Value::Dict Results::Info::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("login", this->login);


  return to_value_result;
}


base::Value::List Results::Create(const Info& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}
}  // namespace GetBrowserLogin

namespace GetStoreLogin {

base::Value::List Results::Create(const std::string& login) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(login);

  return create_results;
}
}  // namespace GetStoreLogin

namespace SetStoreLogin {

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
    const base::Value& login_value = args[0];
    {
      auto* temp = login_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.login = *temp;
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
}  // namespace SetStoreLogin

namespace GetWebGLStatus {

base::Value::List Results::Create(const WebGlStatus& webgl_status) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(webstore_private::ToString(webgl_status));

  return create_results;
}
}  // namespace GetWebGLStatus

namespace GetIsLauncherEnabled {

base::Value::List Results::Create(bool is_enabled) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(is_enabled);

  return create_results;
}
}  // namespace GetIsLauncherEnabled

namespace IsInIncognitoMode {

base::Value::List Results::Create(bool is_incognito) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(is_incognito);

  return create_results;
}
}  // namespace IsInIncognitoMode

namespace IsPendingCustodianApproval {

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
      auto* temp = id_value.GetIfString();
      if (!temp) {
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


base::Value::List Results::Create(bool is_pending_approval) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(is_pending_approval);

  return create_results;
}
}  // namespace IsPendingCustodianApproval

namespace GetReferrerChain {

base::Value::List Results::Create(const std::string& referrer_chain) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(referrer_chain);

  return create_results;
}
}  // namespace GetReferrerChain

namespace GetExtensionStatus {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
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
    const base::Value& manifest_value = args[1];
    {
      auto* temp = manifest_value.GetIfString();
      if (!temp) {
        params.manifest = std::nullopt;
        return std::nullopt;
      }
      params.manifest = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create(const ExtensionInstallStatus& status) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(webstore_private::ToString(status));

  return create_results;
}
}  // namespace GetExtensionStatus

}  // namespace webstore_private
}  // namespace api
}  // namespace extensions

