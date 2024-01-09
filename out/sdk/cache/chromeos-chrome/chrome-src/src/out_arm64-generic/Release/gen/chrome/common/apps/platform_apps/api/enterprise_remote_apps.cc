// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/apps/platform_apps/api/enterprise_remote_apps.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/apps/platform_apps/api/enterprise_remote_apps.h"

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

namespace chrome_apps {
namespace api {
namespace enterprise_remote_apps {
//
// Types
//

AddFolderOptions::AddFolderOptions()
 {}

AddFolderOptions::~AddFolderOptions() = default;
AddFolderOptions::AddFolderOptions(AddFolderOptions&& rhs) noexcept = default;
AddFolderOptions& AddFolderOptions::operator=(AddFolderOptions&& rhs) noexcept = default;
AddFolderOptions AddFolderOptions::Clone() const {
  AddFolderOptions out;
  out.name = name;
  out.add_to_front = add_to_front;
  return out;
}

// static
bool AddFolderOptions::Populate(
    const base::Value::Dict& dict, AddFolderOptions& out) {
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

  const base::Value* add_to_front_value = dict.Find("addToFront");
  if (add_to_front_value) {
    {
      auto temp = (*add_to_front_value).GetIfBool();
      if (!temp.has_value()) {
        out.add_to_front = std::nullopt;
        return false;
      }
      out.add_to_front = *temp;
    }
  }

  return true;
}

// static
bool AddFolderOptions::Populate(
    const base::Value& value, AddFolderOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AddFolderOptions> AddFolderOptions::FromValue(const base::Value::Dict& value) {
  AddFolderOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AddFolderOptions> AddFolderOptions::FromValue(const base::Value& value) {
  AddFolderOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict AddFolderOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("name", this->name);

  if (this->add_to_front) {
    to_value_result.Set("addToFront", *this->add_to_front);

  }

  return to_value_result;
}


AddAppOptions::AddAppOptions()
 {}

AddAppOptions::~AddAppOptions() = default;
AddAppOptions::AddAppOptions(AddAppOptions&& rhs) noexcept = default;
AddAppOptions& AddAppOptions::operator=(AddAppOptions&& rhs) noexcept = default;
AddAppOptions AddAppOptions::Clone() const {
  AddAppOptions out;
  out.name = name;
  out.add_to_front = add_to_front;
  out.folder_id = folder_id;
  out.icon_url = icon_url;
  return out;
}

// static
bool AddAppOptions::Populate(
    const base::Value::Dict& dict, AddAppOptions& out) {
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

  const base::Value* add_to_front_value = dict.Find("addToFront");
  if (add_to_front_value) {
    {
      auto temp = (*add_to_front_value).GetIfBool();
      if (!temp.has_value()) {
        out.add_to_front = std::nullopt;
        return false;
      }
      out.add_to_front = *temp;
    }
  }

  const base::Value* folder_id_value = dict.Find("folderId");
  if (folder_id_value) {
    {
      auto* temp = (*folder_id_value).GetIfString();
      if (!temp) {
        out.folder_id = std::nullopt;
        return false;
      }
      out.folder_id = *temp;
    }
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

  return true;
}

// static
bool AddAppOptions::Populate(
    const base::Value& value, AddAppOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AddAppOptions> AddAppOptions::FromValue(const base::Value::Dict& value) {
  AddAppOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AddAppOptions> AddAppOptions::FromValue(const base::Value& value) {
  AddAppOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict AddAppOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("name", this->name);

  if (this->add_to_front) {
    to_value_result.Set("addToFront", *this->add_to_front);

  }
  if (this->folder_id) {
    to_value_result.Set("folderId", *this->folder_id);

  }
  if (this->icon_url) {
    to_value_result.Set("iconUrl", *this->icon_url);

  }

  return to_value_result;
}


const char* ToString(RemoteAppsPosition enum_param) {
  switch (enum_param) {
    case RemoteAppsPosition::kRemoteAppsFirst:
      return "REMOTE_APPS_FIRST";
    case RemoteAppsPosition::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

RemoteAppsPosition ParseRemoteAppsPosition(base::StringPiece enum_string) {
  if (enum_string == "REMOTE_APPS_FIRST")
    return RemoteAppsPosition::kRemoteAppsFirst;
  return RemoteAppsPosition::kNone;
}

std::u16string GetRemoteAppsPositionParseError(base::StringPiece enum_string) {
  return u"expected \"REMOTE_APPS_FIRST\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


SortLauncherOptions::SortLauncherOptions()
: position() {}

SortLauncherOptions::~SortLauncherOptions() = default;
SortLauncherOptions::SortLauncherOptions(SortLauncherOptions&& rhs) noexcept = default;
SortLauncherOptions& SortLauncherOptions::operator=(SortLauncherOptions&& rhs) noexcept = default;
SortLauncherOptions SortLauncherOptions::Clone() const {
  SortLauncherOptions out;
  out.position = position;
  return out;
}

// static
bool SortLauncherOptions::Populate(
    const base::Value::Dict& dict, SortLauncherOptions& out) {
  const base::Value* position_value = dict.Find("position");
  if (!position_value) {
    return false;
  }
  {
    const std::string* remote_apps_position_as_string = (*position_value).GetIfString();
    if (!remote_apps_position_as_string) {
      return false;
    }
    out.position = ParseRemoteAppsPosition(*remote_apps_position_as_string);
    if (out.position == RemoteAppsPosition()) {
      return false;
    }
  }

  return true;
}

// static
bool SortLauncherOptions::Populate(
    const base::Value& value, SortLauncherOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SortLauncherOptions> SortLauncherOptions::FromValue(const base::Value::Dict& value) {
  SortLauncherOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SortLauncherOptions> SortLauncherOptions::FromValue(const base::Value& value) {
  SortLauncherOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SortLauncherOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("position", enterprise_remote_apps::ToString(this->position));


  return to_value_result;
}



//
// Functions
//

namespace AddFolder {

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
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      if (!AddFolderOptions::Populate(options_value.GetDict(), params.options)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace AddFolder

namespace AddApp {

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
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      if (!AddAppOptions::Populate(options_value.GetDict(), params.options)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace AddApp

namespace DeleteApp {

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
}  // namespace DeleteApp

namespace SortLauncher {

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
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      if (!SortLauncherOptions::Populate(options_value.GetDict(), params.options)) {
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
}  // namespace SortLauncher

namespace SetPinnedApps {

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
    const base::Value& app_ids_value = args[0];
    {
      if (!app_ids_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(app_ids_value.GetList(), params.app_ids)) {
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


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetPinnedApps

//
// Events
//

namespace OnRemoteAppLaunched {

const char kEventName[] = "enterprise.remoteApps.onRemoteAppLaunched";

base::Value::List Create(const std::string& app_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(app_id);

  return create_results;
}

}  // namespace OnRemoteAppLaunched

}  // namespace enterprise_remote_apps
}  // namespace api
}  // namespace chrome_apps

