// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/apps/platform_apps/api/arc_apps_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/apps/platform_apps/api/arc_apps_private.h"

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

using base::UTF8ToUTF16;

namespace chrome_apps {
namespace api {
namespace arc_apps_private {
//
// Types
//

AppInfo::AppInfo()
 {}

AppInfo::~AppInfo() = default;
AppInfo::AppInfo(AppInfo&& rhs) = default;
AppInfo& AppInfo::operator=(AppInfo&& rhs) = default;
AppInfo AppInfo::Clone() const {
  AppInfo out;
  out.package_name = package_name;
  return out;
}

// static
bool AppInfo::Populate(
    const base::Value::Dict& dict, AppInfo& out) {
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

  return true;
}

// static
bool AppInfo::Populate(
    const base::Value& value, AppInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<AppInfo> AppInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<AppInfo>();
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
absl::optional<AppInfo> AppInfo::FromValue(const base::Value::Dict& value) {
  AppInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<AppInfo> AppInfo::FromValue(const base::Value& value) {
  AppInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict AppInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("packageName", this->package_name);


  return to_value_result;
}



//
// Functions
//

namespace GetLaunchableApps {

base::Value::List Results::Create(const std::vector<AppInfo>& apps_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(apps_info));

  return create_results;
}
}  // namespace GetLaunchableApps

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
    const base::Value& package_name_value = args[0];
    {
      auto* temp = package_name_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.package_name = *temp;
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

//
// Events
//

namespace OnInstalled {

const char kEventName[] = "arcAppsPrivate.onInstalled";

base::Value::List Create(const AppInfo& app_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((app_info).ToValue());

  return create_results;
}

}  // namespace OnInstalled

}  // namespace arc_apps_private
}  // namespace api
}  // namespace chrome_apps

