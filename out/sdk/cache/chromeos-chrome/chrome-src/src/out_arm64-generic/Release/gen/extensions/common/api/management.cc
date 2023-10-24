// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/management.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/management.h"

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
namespace management {
//
// Types
//

IconInfo::IconInfo()
: size(0) {}

IconInfo::~IconInfo() = default;
IconInfo::IconInfo(IconInfo&& rhs) = default;
IconInfo& IconInfo::operator=(IconInfo&& rhs) = default;
IconInfo IconInfo::Clone() const {
  IconInfo out;
  out.size = size;
  out.url = url;
  return out;
}

// static
bool IconInfo::Populate(
    const base::Value::Dict& dict, IconInfo& out) {
  const base::Value* size_value = dict.Find("size");
  if (!size_value) {
    return false;
  }
  {
    auto temp = (*size_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.size = *temp;
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

  return true;
}

// static
bool IconInfo::Populate(
    const base::Value& value, IconInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<IconInfo> IconInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<IconInfo>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<IconInfo> IconInfo::FromValue(const base::Value::Dict& value) {
  IconInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<IconInfo> IconInfo::FromValue(const base::Value& value) {
  IconInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict IconInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("size", this->size);

  to_value_result.Set("url", this->url);


  return to_value_result;
}


const char* ToString(LaunchType enum_param) {
  switch (enum_param) {
    case LaunchType::kOpenAsRegularTab:
      return "OPEN_AS_REGULAR_TAB";
    case LaunchType::kOpenAsPinnedTab:
      return "OPEN_AS_PINNED_TAB";
    case LaunchType::kOpenAsWindow:
      return "OPEN_AS_WINDOW";
    case LaunchType::kOpenFullScreen:
      return "OPEN_FULL_SCREEN";
    case LaunchType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

LaunchType ParseLaunchType(base::StringPiece enum_string) {
  if (enum_string == "OPEN_AS_REGULAR_TAB")
    return LaunchType::kOpenAsRegularTab;
  if (enum_string == "OPEN_AS_PINNED_TAB")
    return LaunchType::kOpenAsPinnedTab;
  if (enum_string == "OPEN_AS_WINDOW")
    return LaunchType::kOpenAsWindow;
  if (enum_string == "OPEN_FULL_SCREEN")
    return LaunchType::kOpenFullScreen;
  return LaunchType::kNone;
}

std::u16string GetLaunchTypeParseError(base::StringPiece enum_string) {
  return u"expected \"OPEN_AS_REGULAR_TAB\" or \"OPEN_AS_PINNED_TAB\" or \"OPEN_AS_WINDOW\" or \"OPEN_FULL_SCREEN\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ExtensionDisabledReason enum_param) {
  switch (enum_param) {
    case ExtensionDisabledReason::kUnknown:
      return "unknown";
    case ExtensionDisabledReason::kPermissionsIncrease:
      return "permissions_increase";
    case ExtensionDisabledReason::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ExtensionDisabledReason ParseExtensionDisabledReason(base::StringPiece enum_string) {
  if (enum_string == "unknown")
    return ExtensionDisabledReason::kUnknown;
  if (enum_string == "permissions_increase")
    return ExtensionDisabledReason::kPermissionsIncrease;
  return ExtensionDisabledReason::kNone;
}

std::u16string GetExtensionDisabledReasonParseError(base::StringPiece enum_string) {
  return u"expected \"unknown\" or \"permissions_increase\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ExtensionType enum_param) {
  switch (enum_param) {
    case ExtensionType::kExtension:
      return "extension";
    case ExtensionType::kHostedApp:
      return "hosted_app";
    case ExtensionType::kPackagedApp:
      return "packaged_app";
    case ExtensionType::kLegacyPackagedApp:
      return "legacy_packaged_app";
    case ExtensionType::kTheme:
      return "theme";
    case ExtensionType::kLoginScreenExtension:
      return "login_screen_extension";
    case ExtensionType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ExtensionType ParseExtensionType(base::StringPiece enum_string) {
  if (enum_string == "extension")
    return ExtensionType::kExtension;
  if (enum_string == "hosted_app")
    return ExtensionType::kHostedApp;
  if (enum_string == "packaged_app")
    return ExtensionType::kPackagedApp;
  if (enum_string == "legacy_packaged_app")
    return ExtensionType::kLegacyPackagedApp;
  if (enum_string == "theme")
    return ExtensionType::kTheme;
  if (enum_string == "login_screen_extension")
    return ExtensionType::kLoginScreenExtension;
  return ExtensionType::kNone;
}

std::u16string GetExtensionTypeParseError(base::StringPiece enum_string) {
  return u"expected \"extension\" or \"hosted_app\" or \"packaged_app\" or \"legacy_packaged_app\" or \"theme\" or \"login_screen_extension\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ExtensionInstallType enum_param) {
  switch (enum_param) {
    case ExtensionInstallType::kAdmin:
      return "admin";
    case ExtensionInstallType::kDevelopment:
      return "development";
    case ExtensionInstallType::kNormal:
      return "normal";
    case ExtensionInstallType::kSideload:
      return "sideload";
    case ExtensionInstallType::kOther:
      return "other";
    case ExtensionInstallType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ExtensionInstallType ParseExtensionInstallType(base::StringPiece enum_string) {
  if (enum_string == "admin")
    return ExtensionInstallType::kAdmin;
  if (enum_string == "development")
    return ExtensionInstallType::kDevelopment;
  if (enum_string == "normal")
    return ExtensionInstallType::kNormal;
  if (enum_string == "sideload")
    return ExtensionInstallType::kSideload;
  if (enum_string == "other")
    return ExtensionInstallType::kOther;
  return ExtensionInstallType::kNone;
}

std::u16string GetExtensionInstallTypeParseError(base::StringPiece enum_string) {
  return u"expected \"admin\" or \"development\" or \"normal\" or \"sideload\" or \"other\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ExtensionInfo::ExtensionInfo()
: may_disable(false),
enabled(false),
disabled_reason(),
is_app(false),
type(),
offline_enabled(false),
install_type(),
launch_type() {}

ExtensionInfo::~ExtensionInfo() = default;
ExtensionInfo::ExtensionInfo(ExtensionInfo&& rhs) = default;
ExtensionInfo& ExtensionInfo::operator=(ExtensionInfo&& rhs) = default;
ExtensionInfo ExtensionInfo::Clone() const {
  ExtensionInfo out;
  out.id = id;
  out.name = name;
  out.short_name = short_name;
  out.description = description;
  out.version = version;
  out.version_name = version_name;
  out.may_disable = may_disable;
  out.may_enable = may_enable;
  out.enabled = enabled;
  out.disabled_reason = disabled_reason;
  out.is_app = is_app;
  out.type = type;
  out.app_launch_url = app_launch_url;
  out.homepage_url = homepage_url;
  out.update_url = update_url;
  out.offline_enabled = offline_enabled;
  out.options_url = options_url;
  if (icons) {
    out.icons.emplace();
    out.icons->reserve(icons->size());
    for (const auto& element : *icons) {
      json_schema_compiler::util::AppendToContainer(*out.icons, element.Clone());
    }
  }
  out.permissions = permissions;
  out.host_permissions = host_permissions;
  out.install_type = install_type;
  out.launch_type = launch_type;
  out.available_launch_types = available_launch_types;
  return out;
}

// static
bool ExtensionInfo::Populate(
    const base::Value::Dict& dict, ExtensionInfo& out) {
  out.disabled_reason = ExtensionDisabledReason();
  out.launch_type = LaunchType();
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

  const base::Value* version_name_value = dict.Find("versionName");
  if (version_name_value) {
    {
      auto* temp = (*version_name_value).GetIfString();
      if (!temp) {
        out.version_name = absl::nullopt;
        return false;
      }
      out.version_name = *temp;
    }
  }

  const base::Value* may_disable_value = dict.Find("mayDisable");
  if (!may_disable_value) {
    return false;
  }
  {
    auto temp = (*may_disable_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.may_disable = *temp;
  }

  const base::Value* may_enable_value = dict.Find("mayEnable");
  if (may_enable_value) {
    {
      auto temp = (*may_enable_value).GetIfBool();
      if (!temp.has_value()) {
        out.may_enable = absl::nullopt;
        return false;
      }
      out.may_enable = *temp;
    }
  }

  const base::Value* enabled_value = dict.Find("enabled");
  if (!enabled_value) {
    return false;
  }
  {
    auto temp = (*enabled_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.enabled = *temp;
  }

  const base::Value* disabled_reason_value = dict.Find("disabledReason");
  if (disabled_reason_value) {
    {
      const std::string* extension_disabled_reason_as_string = (*disabled_reason_value).GetIfString();
      if (!extension_disabled_reason_as_string) {
        return false;
      }
      out.disabled_reason = ParseExtensionDisabledReason(*extension_disabled_reason_as_string);
      if (out.disabled_reason == ExtensionDisabledReason()) {
        return false;
      }
    }
    } else {
    out.disabled_reason = ExtensionDisabledReason();
  }

  const base::Value* is_app_value = dict.Find("isApp");
  if (!is_app_value) {
    return false;
  }
  {
    auto temp = (*is_app_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_app = *temp;
  }

  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* extension_type_as_string = (*type_value).GetIfString();
    if (!extension_type_as_string) {
      return false;
    }
    out.type = ParseExtensionType(*extension_type_as_string);
    if (out.type == ExtensionType()) {
      return false;
    }
  }

  const base::Value* app_launch_url_value = dict.Find("appLaunchUrl");
  if (app_launch_url_value) {
    {
      auto* temp = (*app_launch_url_value).GetIfString();
      if (!temp) {
        out.app_launch_url = absl::nullopt;
        return false;
      }
      out.app_launch_url = *temp;
    }
  }

  const base::Value* homepage_url_value = dict.Find("homepageUrl");
  if (homepage_url_value) {
    {
      auto* temp = (*homepage_url_value).GetIfString();
      if (!temp) {
        out.homepage_url = absl::nullopt;
        return false;
      }
      out.homepage_url = *temp;
    }
  }

  const base::Value* update_url_value = dict.Find("updateUrl");
  if (update_url_value) {
    {
      auto* temp = (*update_url_value).GetIfString();
      if (!temp) {
        out.update_url = absl::nullopt;
        return false;
      }
      out.update_url = *temp;
    }
  }

  const base::Value* offline_enabled_value = dict.Find("offlineEnabled");
  if (!offline_enabled_value) {
    return false;
  }
  {
    auto temp = (*offline_enabled_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.offline_enabled = *temp;
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

  const base::Value* icons_value = dict.Find("icons");
  if (icons_value) {
    {
      if (!(*icons_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*icons_value).GetList(), out.icons)) {
          return false;
        }
      }
    }
  }

  const base::Value* permissions_value = dict.Find("permissions");
  if (!permissions_value) {
    return false;
  }
  {
    if (!(*permissions_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*permissions_value).GetList(), out.permissions)) {
        return false;
      }
    }
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

  const base::Value* install_type_value = dict.Find("installType");
  if (!install_type_value) {
    return false;
  }
  {
    const std::string* extension_install_type_as_string = (*install_type_value).GetIfString();
    if (!extension_install_type_as_string) {
      return false;
    }
    out.install_type = ParseExtensionInstallType(*extension_install_type_as_string);
    if (out.install_type == ExtensionInstallType()) {
      return false;
    }
  }

  const base::Value* launch_type_value = dict.Find("launchType");
  if (launch_type_value) {
    {
      const std::string* launch_type_as_string = (*launch_type_value).GetIfString();
      if (!launch_type_as_string) {
        return false;
      }
      out.launch_type = ParseLaunchType(*launch_type_as_string);
      if (out.launch_type == LaunchType()) {
        return false;
      }
    }
    } else {
    out.launch_type = LaunchType();
  }

  const base::Value* available_launch_types_value = dict.Find("availableLaunchTypes");
  if (available_launch_types_value) {
    {
      if (!(*available_launch_types_value).is_list()) {
        return false;
      }
      else {
        out.available_launch_types.emplace();
        for (const auto& it : ((*available_launch_types_value)).GetList()) {
          LaunchType tmp;
          const std::string* launch_type_as_string = (it).GetIfString();
          if (!launch_type_as_string) {
            return false;
          }
          tmp = ParseLaunchType(*launch_type_as_string);
          if (tmp == LaunchType()) {
            return false;
          }
          out.available_launch_types->push_back(tmp);
        }
      }
    }
  }

  return true;
}

// static
bool ExtensionInfo::Populate(
    const base::Value& value, ExtensionInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ExtensionInfo> ExtensionInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ExtensionInfo>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<ExtensionInfo> ExtensionInfo::FromValue(const base::Value::Dict& value) {
  ExtensionInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ExtensionInfo> ExtensionInfo::FromValue(const base::Value& value) {
  ExtensionInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ExtensionInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("name", this->name);

  to_value_result.Set("shortName", this->short_name);

  to_value_result.Set("description", this->description);

  to_value_result.Set("version", this->version);

  if (this->version_name) {
    to_value_result.Set("versionName", *this->version_name);

  }
  to_value_result.Set("mayDisable", this->may_disable);

  if (this->may_enable) {
    to_value_result.Set("mayEnable", *this->may_enable);

  }
  to_value_result.Set("enabled", this->enabled);

  if (this->disabled_reason != ExtensionDisabledReason()) {
    to_value_result.Set("disabledReason", management::ToString(this->disabled_reason));

  }
  to_value_result.Set("isApp", this->is_app);

  to_value_result.Set("type", management::ToString(this->type));

  if (this->app_launch_url) {
    to_value_result.Set("appLaunchUrl", *this->app_launch_url);

  }
  if (this->homepage_url) {
    to_value_result.Set("homepageUrl", *this->homepage_url);

  }
  if (this->update_url) {
    to_value_result.Set("updateUrl", *this->update_url);

  }
  to_value_result.Set("offlineEnabled", this->offline_enabled);

  to_value_result.Set("optionsUrl", this->options_url);

  if (this->icons) {
    to_value_result.Set("icons", json_schema_compiler::util::CreateValueFromArray(*this->icons));

  }
  to_value_result.Set("permissions", json_schema_compiler::util::CreateValueFromArray(this->permissions));

  to_value_result.Set("hostPermissions", json_schema_compiler::util::CreateValueFromArray(this->host_permissions));

  to_value_result.Set("installType", management::ToString(this->install_type));

  if (this->launch_type != LaunchType()) {
    to_value_result.Set("launchType", management::ToString(this->launch_type));

  }
  if (this->available_launch_types) {
    {
      std::vector<std::string> availableLaunchTypes_list;
      for (const auto& it : *(this->available_launch_types)) {
        availableLaunchTypes_list.emplace_back(management::ToString(it));
      }
      to_value_result.Set("availableLaunchTypes", json_schema_compiler::util::CreateValueFromArray(availableLaunchTypes_list));
    }

  }

  return to_value_result;
}


UninstallOptions::UninstallOptions()
 {}

UninstallOptions::~UninstallOptions() = default;
UninstallOptions::UninstallOptions(UninstallOptions&& rhs) = default;
UninstallOptions& UninstallOptions::operator=(UninstallOptions&& rhs) = default;
UninstallOptions UninstallOptions::Clone() const {
  UninstallOptions out;
  out.show_confirm_dialog = show_confirm_dialog;
  return out;
}

// static
bool UninstallOptions::Populate(
    const base::Value::Dict& dict, UninstallOptions& out) {
  const base::Value* show_confirm_dialog_value = dict.Find("showConfirmDialog");
  if (show_confirm_dialog_value) {
    {
      auto temp = (*show_confirm_dialog_value).GetIfBool();
      if (!temp.has_value()) {
        out.show_confirm_dialog = absl::nullopt;
        return false;
      }
      out.show_confirm_dialog = *temp;
    }
  }

  return true;
}

// static
bool UninstallOptions::Populate(
    const base::Value& value, UninstallOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<UninstallOptions> UninstallOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<UninstallOptions>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<UninstallOptions> UninstallOptions::FromValue(const base::Value::Dict& value) {
  UninstallOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<UninstallOptions> UninstallOptions::FromValue(const base::Value& value) {
  UninstallOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict UninstallOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->show_confirm_dialog) {
    to_value_result.Set("showConfirmDialog", *this->show_confirm_dialog);

  }

  return to_value_result;
}



//
// Functions
//

namespace GetAll {

base::Value::List Results::Create(const std::vector<ExtensionInfo>& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(result));

  return create_results;
}
}  // namespace GetAll

namespace Get {

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


base::Value::List Results::Create(const ExtensionInfo& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace Get

namespace GetSelf {

base::Value::List Results::Create(const ExtensionInfo& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace GetSelf

namespace GetPermissionWarningsById {

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


base::Value::List Results::Create(const std::vector<std::string>& permission_warnings) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(permission_warnings));

  return create_results;
}
}  // namespace GetPermissionWarningsById

namespace GetPermissionWarningsByManifest {

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
    const base::Value& manifest_str_value = args[0];
    {
      auto* temp = manifest_str_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.manifest_str = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<std::string>& permission_warnings) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(permission_warnings));

  return create_results;
}
}  // namespace GetPermissionWarningsByManifest

namespace SetEnabled {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
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
    const base::Value& enabled_value = args[1];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.enabled = *temp;
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
}  // namespace SetEnabled

namespace Uninstall {

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
    const base::Value& options_value = args[1];
    {
      if (!options_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        UninstallOptions temp;
        if (!UninstallOptions::Populate(options_value.GetDict(), temp))
          return absl::nullopt;
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
}  // namespace Uninstall

namespace UninstallSelf {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        UninstallOptions temp;
        if (!UninstallOptions::Populate(options_value.GetDict(), temp))
          return absl::nullopt;
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
}  // namespace UninstallSelf

namespace LaunchApp {

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


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace LaunchApp

namespace CreateAppShortcut {

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


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace CreateAppShortcut

namespace SetLaunchType {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
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
    const base::Value& launch_type_value = args[1];
    {
      const std::string* launch_type_as_string = launch_type_value.GetIfString();
      if (!launch_type_as_string) {
        return absl::nullopt;
      }
      params.launch_type = ParseLaunchType(*launch_type_as_string);
      if (params.launch_type == LaunchType()) {
        return absl::nullopt;
      }
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
}  // namespace SetLaunchType

namespace GenerateAppForLink {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& url_value = args[0];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& title_value = args[1];
    {
      auto* temp = title_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.title = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const ExtensionInfo& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace GenerateAppForLink

namespace InstallReplacementWebApp {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace InstallReplacementWebApp

//
// Events
//

namespace OnInstalled {

const char kEventName[] = "management.onInstalled";

base::Value::List Create(const ExtensionInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}

}  // namespace OnInstalled

namespace OnUninstalled {

const char kEventName[] = "management.onUninstalled";

base::Value::List Create(const std::string& id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(id);

  return create_results;
}

}  // namespace OnUninstalled

namespace OnEnabled {

const char kEventName[] = "management.onEnabled";

base::Value::List Create(const ExtensionInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}

}  // namespace OnEnabled

namespace OnDisabled {

const char kEventName[] = "management.onDisabled";

base::Value::List Create(const ExtensionInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}

}  // namespace OnDisabled

}  // namespace management
}  // namespace api
}  // namespace extensions

