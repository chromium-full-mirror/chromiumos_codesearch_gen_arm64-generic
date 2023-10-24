// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/webstore_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/webstore_private.h"

#include <memory>
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
    case RESULT_EMPTY_STRING:
      return "";
    case RESULT_SUCCESS:
      return "success";
    case RESULT_USER_GESTURE_REQUIRED:
      return "user_gesture_required";
    case RESULT_UNKNOWN_ERROR:
      return "unknown_error";
    case RESULT_FEATURE_DISABLED:
      return "feature_disabled";
    case RESULT_UNSUPPORTED_EXTENSION_TYPE:
      return "unsupported_extension_type";
    case RESULT_MISSING_DEPENDENCIES:
      return "missing_dependencies";
    case RESULT_INSTALL_ERROR:
      return "install_error";
    case RESULT_USER_CANCELLED:
      return "user_cancelled";
    case RESULT_INVALID_ID:
      return "invalid_id";
    case RESULT_BLACKLISTED:
      return "blacklisted";
    case RESULT_BLOCKED_BY_POLICY:
      return "blocked_by_policy";
    case RESULT_INSTALL_IN_PROGRESS:
      return "install_in_progress";
    case RESULT_LAUNCH_IN_PROGRESS:
      return "launch_in_progress";
    case RESULT_MANIFEST_ERROR:
      return "manifest_error";
    case RESULT_ICON_ERROR:
      return "icon_error";
    case RESULT_INVALID_ICON_URL:
      return "invalid_icon_url";
    case RESULT_ALREADY_INSTALLED:
      return "already_installed";
    case RESULT_BLOCKED_FOR_CHILD_ACCOUNT:
      return "blocked_for_child_account";
    case RESULT_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

Result ParseResult(base::StringPiece enum_string) {
  if (enum_string == "")
    return RESULT_EMPTY_STRING;
  if (enum_string == "success")
    return RESULT_SUCCESS;
  if (enum_string == "user_gesture_required")
    return RESULT_USER_GESTURE_REQUIRED;
  if (enum_string == "unknown_error")
    return RESULT_UNKNOWN_ERROR;
  if (enum_string == "feature_disabled")
    return RESULT_FEATURE_DISABLED;
  if (enum_string == "unsupported_extension_type")
    return RESULT_UNSUPPORTED_EXTENSION_TYPE;
  if (enum_string == "missing_dependencies")
    return RESULT_MISSING_DEPENDENCIES;
  if (enum_string == "install_error")
    return RESULT_INSTALL_ERROR;
  if (enum_string == "user_cancelled")
    return RESULT_USER_CANCELLED;
  if (enum_string == "invalid_id")
    return RESULT_INVALID_ID;
  if (enum_string == "blacklisted")
    return RESULT_BLACKLISTED;
  if (enum_string == "blocked_by_policy")
    return RESULT_BLOCKED_BY_POLICY;
  if (enum_string == "install_in_progress")
    return RESULT_INSTALL_IN_PROGRESS;
  if (enum_string == "launch_in_progress")
    return RESULT_LAUNCH_IN_PROGRESS;
  if (enum_string == "manifest_error")
    return RESULT_MANIFEST_ERROR;
  if (enum_string == "icon_error")
    return RESULT_ICON_ERROR;
  if (enum_string == "invalid_icon_url")
    return RESULT_INVALID_ICON_URL;
  if (enum_string == "already_installed")
    return RESULT_ALREADY_INSTALLED;
  if (enum_string == "blocked_for_child_account")
    return RESULT_BLOCKED_FOR_CHILD_ACCOUNT;
  return RESULT_NONE;
}

std::u16string GetResultParseError(base::StringPiece enum_string) {
  return u"expected \"\" or \"success\" or \"user_gesture_required\" or \"unknown_error\" or \"feature_disabled\" or \"unsupported_extension_type\" or \"missing_dependencies\" or \"install_error\" or \"user_cancelled\" or \"invalid_id\" or \"blacklisted\" or \"blocked_by_policy\" or \"install_in_progress\" or \"launch_in_progress\" or \"manifest_error\" or \"icon_error\" or \"invalid_icon_url\" or \"already_installed\" or \"blocked_for_child_account\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(WebGlStatus enum_param) {
  switch (enum_param) {
    case WEB_GL_STATUS_WEBGL_ALLOWED:
      return "webgl_allowed";
    case WEB_GL_STATUS_WEBGL_BLOCKED:
      return "webgl_blocked";
    case WEB_GL_STATUS_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

WebGlStatus ParseWebGlStatus(base::StringPiece enum_string) {
  if (enum_string == "webgl_allowed")
    return WEB_GL_STATUS_WEBGL_ALLOWED;
  if (enum_string == "webgl_blocked")
    return WEB_GL_STATUS_WEBGL_BLOCKED;
  return WEB_GL_STATUS_NONE;
}

std::u16string GetWebGlStatusParseError(base::StringPiece enum_string) {
  return u"expected \"webgl_allowed\" or \"webgl_blocked\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ExtensionInstallStatus enum_param) {
  switch (enum_param) {
    case EXTENSION_INSTALL_STATUS_CAN_REQUEST:
      return "can_request";
    case EXTENSION_INSTALL_STATUS_REQUEST_PENDING:
      return "request_pending";
    case EXTENSION_INSTALL_STATUS_BLOCKED_BY_POLICY:
      return "blocked_by_policy";
    case EXTENSION_INSTALL_STATUS_INSTALLABLE:
      return "installable";
    case EXTENSION_INSTALL_STATUS_ENABLED:
      return "enabled";
    case EXTENSION_INSTALL_STATUS_DISABLED:
      return "disabled";
    case EXTENSION_INSTALL_STATUS_TERMINATED:
      return "terminated";
    case EXTENSION_INSTALL_STATUS_BLACKLISTED:
      return "blacklisted";
    case EXTENSION_INSTALL_STATUS_CUSTODIAN_APPROVAL_REQUIRED:
      return "custodian_approval_required";
    case EXTENSION_INSTALL_STATUS_FORCE_INSTALLED:
      return "force_installed";
    case EXTENSION_INSTALL_STATUS_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

ExtensionInstallStatus ParseExtensionInstallStatus(base::StringPiece enum_string) {
  if (enum_string == "can_request")
    return EXTENSION_INSTALL_STATUS_CAN_REQUEST;
  if (enum_string == "request_pending")
    return EXTENSION_INSTALL_STATUS_REQUEST_PENDING;
  if (enum_string == "blocked_by_policy")
    return EXTENSION_INSTALL_STATUS_BLOCKED_BY_POLICY;
  if (enum_string == "installable")
    return EXTENSION_INSTALL_STATUS_INSTALLABLE;
  if (enum_string == "enabled")
    return EXTENSION_INSTALL_STATUS_ENABLED;
  if (enum_string == "disabled")
    return EXTENSION_INSTALL_STATUS_DISABLED;
  if (enum_string == "terminated")
    return EXTENSION_INSTALL_STATUS_TERMINATED;
  if (enum_string == "blacklisted")
    return EXTENSION_INSTALL_STATUS_BLACKLISTED;
  if (enum_string == "custodian_approval_required")
    return EXTENSION_INSTALL_STATUS_CUSTODIAN_APPROVAL_REQUIRED;
  if (enum_string == "force_installed")
    return EXTENSION_INSTALL_STATUS_FORCE_INSTALLED;
  return EXTENSION_INSTALL_STATUS_NONE;
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
Params::Details::Details(Details&& rhs) = default;
Params::Details& Params::Details::operator=(Details&& rhs) = default;
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
        out.icon_url = absl::nullopt;
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
        out.localized_name = absl::nullopt;
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
        out.locale = absl::nullopt;
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
        out.app_install_bubble = absl::nullopt;
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
        out.enable_launcher = absl::nullopt;
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
        out.authuser = absl::nullopt;
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
        out.esb_allowlist = absl::nullopt;
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
absl::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Details::Populate(details_value.GetDict(), params.details)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
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
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& expected_id_value = args[0];
    {
      auto* temp = expected_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.expected_id = *temp;
    }
  }
  else {
    return absl::nullopt;
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
Results::Info::Info(Info&& rhs) = default;
Results::Info& Results::Info::operator=(Info&& rhs) = default;
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
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& login_value = args[0];
    {
      auto* temp = login_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.login = *temp;
    }
  }
  else {
    return absl::nullopt;
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
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return absl::nullopt;
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
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& manifest_value = args[1];
    {
      auto* temp = manifest_value.GetIfString();
      if (!temp) {
        params.manifest = absl::nullopt;
        return absl::nullopt;
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

