// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/side_panel.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/side_panel.h"

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
#include "tools/json_schema_compiler/manifest_parse_util.h"

#include "base/strings/string_piece.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace side_panel {
//
// Types
//

SidePanel::SidePanel()
 {}

SidePanel::~SidePanel() = default;
SidePanel::SidePanel(SidePanel&& rhs) noexcept = default;
SidePanel& SidePanel::operator=(SidePanel&& rhs) noexcept = default;
// static
constexpr char SidePanel::kDefaultPath[];

SidePanel SidePanel::Clone() const {
  SidePanel out;
  out.default_path = default_path;
  return out;
}

// static
bool SidePanel::Populate(
    const base::Value::Dict& dict, SidePanel& out) {
  const base::Value* default_path_value = dict.Find("default_path");
  if (!default_path_value) {
    return false;
  }
  {
    auto* temp = (*default_path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.default_path = *temp;
  }

  return true;
}

// static
bool SidePanel::Populate(
    const base::Value& value, SidePanel& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SidePanel> SidePanel::FromValue(const base::Value::Dict& value) {
  SidePanel out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SidePanel> SidePanel::FromValue(const base::Value& value) {
  SidePanel out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SidePanel::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("default_path", this->default_path);


  return to_value_result;
}

//static
bool SidePanel::ParseFromDictionary(
const base::Value::Dict& root_dict, base::StringPiece key, SidePanel& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed) {

  const base::Value* value = ::json_schema_compiler::manifest_parse_util::FindKeyOfType(root_dict, key, base::Value::Type::DICT, error, error_path_reversed);
  if (!value)
    return false;
  const base::Value::Dict& dict = value->GetDict();
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kDefaultPath, out.default_path, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  return true;
}


PanelOptions::PanelOptions()
 {}

PanelOptions::~PanelOptions() = default;
PanelOptions::PanelOptions(PanelOptions&& rhs) noexcept = default;
PanelOptions& PanelOptions::operator=(PanelOptions&& rhs) noexcept = default;
PanelOptions PanelOptions::Clone() const {
  PanelOptions out;
  out.tab_id = tab_id;
  out.path = path;
  out.enabled = enabled;
  return out;
}

// static
bool PanelOptions::Populate(
    const base::Value::Dict& dict, PanelOptions& out) {
  const base::Value* tab_id_value = dict.Find("tabId");
  if (tab_id_value) {
    {
      auto temp = (*tab_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.tab_id = std::nullopt;
        return false;
      }
      out.tab_id = *temp;
    }
  }

  const base::Value* path_value = dict.Find("path");
  if (path_value) {
    {
      auto* temp = (*path_value).GetIfString();
      if (!temp) {
        out.path = std::nullopt;
        return false;
      }
      out.path = *temp;
    }
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

  return true;
}

// static
bool PanelOptions::Populate(
    const base::Value& value, PanelOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PanelOptions> PanelOptions::FromValue(const base::Value::Dict& value) {
  PanelOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PanelOptions> PanelOptions::FromValue(const base::Value& value) {
  PanelOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict PanelOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->tab_id) {
    to_value_result.Set("tabId", *this->tab_id);

  }
  if (this->path) {
    to_value_result.Set("path", *this->path);

  }
  if (this->enabled) {
    to_value_result.Set("enabled", *this->enabled);

  }

  return to_value_result;
}


PanelBehavior::PanelBehavior()
 {}

PanelBehavior::~PanelBehavior() = default;
PanelBehavior::PanelBehavior(PanelBehavior&& rhs) noexcept = default;
PanelBehavior& PanelBehavior::operator=(PanelBehavior&& rhs) noexcept = default;
PanelBehavior PanelBehavior::Clone() const {
  PanelBehavior out;
  out.open_panel_on_action_click = open_panel_on_action_click;
  return out;
}

// static
bool PanelBehavior::Populate(
    const base::Value::Dict& dict, PanelBehavior& out) {
  const base::Value* open_panel_on_action_click_value = dict.Find("openPanelOnActionClick");
  if (open_panel_on_action_click_value) {
    {
      auto temp = (*open_panel_on_action_click_value).GetIfBool();
      if (!temp.has_value()) {
        out.open_panel_on_action_click = std::nullopt;
        return false;
      }
      out.open_panel_on_action_click = *temp;
    }
  }

  return true;
}

// static
bool PanelBehavior::Populate(
    const base::Value& value, PanelBehavior& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PanelBehavior> PanelBehavior::FromValue(const base::Value::Dict& value) {
  PanelBehavior out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PanelBehavior> PanelBehavior::FromValue(const base::Value& value) {
  PanelBehavior out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict PanelBehavior::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->open_panel_on_action_click) {
    to_value_result.Set("openPanelOnActionClick", *this->open_panel_on_action_click);

  }

  return to_value_result;
}


GetPanelOptions::GetPanelOptions()
 {}

GetPanelOptions::~GetPanelOptions() = default;
GetPanelOptions::GetPanelOptions(GetPanelOptions&& rhs) noexcept = default;
GetPanelOptions& GetPanelOptions::operator=(GetPanelOptions&& rhs) noexcept = default;
GetPanelOptions GetPanelOptions::Clone() const {
  GetPanelOptions out;
  out.tab_id = tab_id;
  return out;
}

// static
bool GetPanelOptions::Populate(
    const base::Value::Dict& dict, GetPanelOptions& out) {
  const base::Value* tab_id_value = dict.Find("tabId");
  if (tab_id_value) {
    {
      auto temp = (*tab_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.tab_id = std::nullopt;
        return false;
      }
      out.tab_id = *temp;
    }
  }

  return true;
}

// static
bool GetPanelOptions::Populate(
    const base::Value& value, GetPanelOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GetPanelOptions> GetPanelOptions::FromValue(const base::Value::Dict& value) {
  GetPanelOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GetPanelOptions> GetPanelOptions::FromValue(const base::Value& value) {
  GetPanelOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict GetPanelOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->tab_id) {
    to_value_result.Set("tabId", *this->tab_id);

  }

  return to_value_result;
}


OpenOptions::OpenOptions()
 {}

OpenOptions::~OpenOptions() = default;
OpenOptions::OpenOptions(OpenOptions&& rhs) noexcept = default;
OpenOptions& OpenOptions::operator=(OpenOptions&& rhs) noexcept = default;
OpenOptions OpenOptions::Clone() const {
  OpenOptions out;
  out.window_id = window_id;
  out.tab_id = tab_id;
  return out;
}

// static
bool OpenOptions::Populate(
    const base::Value::Dict& dict, OpenOptions& out) {
  const base::Value* window_id_value = dict.Find("windowId");
  if (window_id_value) {
    {
      auto temp = (*window_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.window_id = std::nullopt;
        return false;
      }
      out.window_id = *temp;
    }
  }

  const base::Value* tab_id_value = dict.Find("tabId");
  if (tab_id_value) {
    {
      auto temp = (*tab_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.tab_id = std::nullopt;
        return false;
      }
      out.tab_id = *temp;
    }
  }

  return true;
}

// static
bool OpenOptions::Populate(
    const base::Value& value, OpenOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<OpenOptions> OpenOptions::FromValue(const base::Value::Dict& value) {
  OpenOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<OpenOptions> OpenOptions::FromValue(const base::Value& value) {
  OpenOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict OpenOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->window_id) {
    to_value_result.Set("windowId", *this->window_id);

  }
  if (this->tab_id) {
    to_value_result.Set("tabId", *this->tab_id);

  }

  return to_value_result;
}



//
// Manifest Keys
//

ManifestKeys::ManifestKeys()
 {}

ManifestKeys::~ManifestKeys() = default;
ManifestKeys::ManifestKeys(ManifestKeys&& rhs) noexcept = default;
ManifestKeys& ManifestKeys::operator=(ManifestKeys&& rhs) noexcept = default;
// static
constexpr char ManifestKeys::kSidePanel[];

//static
bool ManifestKeys::ParseFromDictionary(
const base::Value::Dict& root_dict, ManifestKeys& out, std::u16string& error) {

  std::vector<base::StringPiece> error_path_reversed;
  const base::Value::Dict& dict = root_dict;
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kSidePanel, out.side_panel, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  return true;
}


//
// Functions
//

namespace SetOptions {

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
      if (!PanelOptions::Populate(options_value.GetDict(), params.options)) {
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
}  // namespace SetOptions

namespace GetOptions {

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
      if (!GetPanelOptions::Populate(options_value.GetDict(), params.options)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const PanelOptions& options) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((options).ToValue());

  return create_results;
}
}  // namespace GetOptions

namespace SetPanelBehavior {

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
    const base::Value& behavior_value = args[0];
    {
      if (!behavior_value.is_dict()) {
        return std::nullopt;
      }
      if (!PanelBehavior::Populate(behavior_value.GetDict(), params.behavior)) {
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
}  // namespace SetPanelBehavior

namespace GetPanelBehavior {

base::Value::List Results::Create(const PanelBehavior& behavior) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((behavior).ToValue());

  return create_results;
}
}  // namespace GetPanelBehavior

namespace Open {

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
      if (!OpenOptions::Populate(options_value.GetDict(), params.options)) {
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
}  // namespace Open

}  // namespace side_panel
}  // namespace api
}  // namespace extensions

