// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/tab_groups.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/tab_groups.h"

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
namespace tab_groups {
//
// Properties
//

const int TAB_GROUP_ID_NONE = -1;

//
// Types
//

const char* ToString(Color enum_param) {
  switch (enum_param) {
    case COLOR_GREY:
      return "grey";
    case COLOR_BLUE:
      return "blue";
    case COLOR_RED:
      return "red";
    case COLOR_YELLOW:
      return "yellow";
    case COLOR_GREEN:
      return "green";
    case COLOR_PINK:
      return "pink";
    case COLOR_PURPLE:
      return "purple";
    case COLOR_CYAN:
      return "cyan";
    case COLOR_ORANGE:
      return "orange";
    case COLOR_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

Color ParseColor(base::StringPiece enum_string) {
  if (enum_string == "grey")
    return COLOR_GREY;
  if (enum_string == "blue")
    return COLOR_BLUE;
  if (enum_string == "red")
    return COLOR_RED;
  if (enum_string == "yellow")
    return COLOR_YELLOW;
  if (enum_string == "green")
    return COLOR_GREEN;
  if (enum_string == "pink")
    return COLOR_PINK;
  if (enum_string == "purple")
    return COLOR_PURPLE;
  if (enum_string == "cyan")
    return COLOR_CYAN;
  if (enum_string == "orange")
    return COLOR_ORANGE;
  return COLOR_NONE;
}

std::u16string GetColorParseError(base::StringPiece enum_string) {
  return u"expected \"grey\" or \"blue\" or \"red\" or \"yellow\" or \"green\" or \"pink\" or \"purple\" or \"cyan\" or \"orange\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


TabGroup::TabGroup()
: id(0),
collapsed(false),
color(),
window_id(0) {}

TabGroup::~TabGroup() = default;
TabGroup::TabGroup(TabGroup&& rhs) = default;
TabGroup& TabGroup::operator=(TabGroup&& rhs) = default;
TabGroup TabGroup::Clone() const {
  TabGroup out;
  out.id = id;
  out.collapsed = collapsed;
  out.color = color;
  out.title = title;
  out.window_id = window_id;
  return out;
}

// static
bool TabGroup::Populate(
    const base::Value::Dict& dict, TabGroup& out) {
  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto temp = (*id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* collapsed_value = dict.Find("collapsed");
  if (!collapsed_value) {
    return false;
  }
  {
    auto temp = (*collapsed_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.collapsed = *temp;
  }

  const base::Value* color_value = dict.Find("color");
  if (!color_value) {
    return false;
  }
  {
    const std::string* color_as_string = (*color_value).GetIfString();
    if (!color_as_string) {
      return false;
    }
    out.color = ParseColor(*color_as_string);
    if (out.color == Color()) {
      return false;
    }
  }

  const base::Value* title_value = dict.Find("title");
  if (title_value) {
    {
      auto* temp = (*title_value).GetIfString();
      if (!temp) {
        out.title = absl::nullopt;
        return false;
      }
      out.title = *temp;
    }
  }

  const base::Value* window_id_value = dict.Find("windowId");
  if (!window_id_value) {
    return false;
  }
  {
    auto temp = (*window_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.window_id = *temp;
  }

  return true;
}

// static
bool TabGroup::Populate(
    const base::Value& value, TabGroup& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<TabGroup> TabGroup::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<TabGroup>();
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
absl::optional<TabGroup> TabGroup::FromValue(const base::Value::Dict& value) {
  TabGroup out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<TabGroup> TabGroup::FromValue(const base::Value& value) {
  TabGroup out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict TabGroup::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("collapsed", this->collapsed);

  to_value_result.Set("color", tab_groups::ToString(this->color));

  if (this->title) {
    to_value_result.Set("title", *this->title);

  }
  to_value_result.Set("windowId", this->window_id);


  return to_value_result;
}



//
// Functions
//

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
    const base::Value& group_id_value = args[0];
    {
      auto temp = group_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.group_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const TabGroup& group) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((group).ToValue());

  return create_results;
}
}  // namespace Get

namespace Query {

Params::QueryInfo::QueryInfo()
: color() {}

Params::QueryInfo::~QueryInfo() = default;
Params::QueryInfo::QueryInfo(QueryInfo&& rhs) = default;
Params::QueryInfo& Params::QueryInfo::operator=(QueryInfo&& rhs) = default;
Params::QueryInfo Params::QueryInfo::Clone() const {
  QueryInfo out;
  out.collapsed = collapsed;
  out.color = color;
  out.title = title;
  out.window_id = window_id;
  return out;
}

// static
bool Params::QueryInfo::Populate(
    const base::Value::Dict& dict, QueryInfo& out) {
  out.color = Color();
  const base::Value* collapsed_value = dict.Find("collapsed");
  if (collapsed_value) {
    {
      auto temp = (*collapsed_value).GetIfBool();
      if (!temp.has_value()) {
        out.collapsed = absl::nullopt;
        return false;
      }
      out.collapsed = *temp;
    }
  }

  const base::Value* color_value = dict.Find("color");
  if (color_value) {
    {
      const std::string* color_as_string = (*color_value).GetIfString();
      if (!color_as_string) {
        return false;
      }
      out.color = ParseColor(*color_as_string);
      if (out.color == Color()) {
        return false;
      }
    }
    } else {
    out.color = Color();
  }

  const base::Value* title_value = dict.Find("title");
  if (title_value) {
    {
      auto* temp = (*title_value).GetIfString();
      if (!temp) {
        out.title = absl::nullopt;
        return false;
      }
      out.title = *temp;
    }
  }

  const base::Value* window_id_value = dict.Find("windowId");
  if (window_id_value) {
    {
      auto temp = (*window_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.window_id = absl::nullopt;
        return false;
      }
      out.window_id = *temp;
    }
  }

  return true;
}

// static
bool Params::QueryInfo::Populate(
    const base::Value& value, QueryInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::QueryInfo> Params::QueryInfo::FromValue(const base::Value::Dict& value) {
  QueryInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::QueryInfo> Params::QueryInfo::FromValue(const base::Value& value) {
  QueryInfo out;
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
    const base::Value& query_info_value = args[0];
    {
      if (!query_info_value.is_dict()) {
        return absl::nullopt;
      }
      if (!QueryInfo::Populate(query_info_value.GetDict(), params.query_info)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<TabGroup>& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(result));

  return create_results;
}
}  // namespace Query

namespace Update {

Params::UpdateProperties::UpdateProperties()
: color() {}

Params::UpdateProperties::~UpdateProperties() = default;
Params::UpdateProperties::UpdateProperties(UpdateProperties&& rhs) = default;
Params::UpdateProperties& Params::UpdateProperties::operator=(UpdateProperties&& rhs) = default;
Params::UpdateProperties Params::UpdateProperties::Clone() const {
  UpdateProperties out;
  out.collapsed = collapsed;
  out.color = color;
  out.title = title;
  return out;
}

// static
bool Params::UpdateProperties::Populate(
    const base::Value::Dict& dict, UpdateProperties& out) {
  out.color = Color();
  const base::Value* collapsed_value = dict.Find("collapsed");
  if (collapsed_value) {
    {
      auto temp = (*collapsed_value).GetIfBool();
      if (!temp.has_value()) {
        out.collapsed = absl::nullopt;
        return false;
      }
      out.collapsed = *temp;
    }
  }

  const base::Value* color_value = dict.Find("color");
  if (color_value) {
    {
      const std::string* color_as_string = (*color_value).GetIfString();
      if (!color_as_string) {
        return false;
      }
      out.color = ParseColor(*color_as_string);
      if (out.color == Color()) {
        return false;
      }
    }
    } else {
    out.color = Color();
  }

  const base::Value* title_value = dict.Find("title");
  if (title_value) {
    {
      auto* temp = (*title_value).GetIfString();
      if (!temp) {
        out.title = absl::nullopt;
        return false;
      }
      out.title = *temp;
    }
  }

  return true;
}

// static
bool Params::UpdateProperties::Populate(
    const base::Value& value, UpdateProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::UpdateProperties> Params::UpdateProperties::FromValue(const base::Value::Dict& value) {
  UpdateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::UpdateProperties> Params::UpdateProperties::FromValue(const base::Value& value) {
  UpdateProperties out;
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
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& group_id_value = args[0];
    {
      auto temp = group_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.group_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& update_properties_value = args[1];
    {
      if (!update_properties_value.is_dict()) {
        return absl::nullopt;
      }
      if (!UpdateProperties::Populate(update_properties_value.GetDict(), params.update_properties)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const TabGroup& group) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((group).ToValue());

  return create_results;
}
}  // namespace Update

namespace Move {

Params::MoveProperties::MoveProperties()
: index(0) {}

Params::MoveProperties::~MoveProperties() = default;
Params::MoveProperties::MoveProperties(MoveProperties&& rhs) = default;
Params::MoveProperties& Params::MoveProperties::operator=(MoveProperties&& rhs) = default;
Params::MoveProperties Params::MoveProperties::Clone() const {
  MoveProperties out;
  out.window_id = window_id;
  out.index = index;
  return out;
}

// static
bool Params::MoveProperties::Populate(
    const base::Value::Dict& dict, MoveProperties& out) {
  const base::Value* window_id_value = dict.Find("windowId");
  if (window_id_value) {
    {
      auto temp = (*window_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.window_id = absl::nullopt;
        return false;
      }
      out.window_id = *temp;
    }
  }

  const base::Value* index_value = dict.Find("index");
  if (!index_value) {
    return false;
  }
  {
    auto temp = (*index_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.index = *temp;
  }

  return true;
}

// static
bool Params::MoveProperties::Populate(
    const base::Value& value, MoveProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::MoveProperties> Params::MoveProperties::FromValue(const base::Value::Dict& value) {
  MoveProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::MoveProperties> Params::MoveProperties::FromValue(const base::Value& value) {
  MoveProperties out;
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
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& group_id_value = args[0];
    {
      auto temp = group_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.group_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& move_properties_value = args[1];
    {
      if (!move_properties_value.is_dict()) {
        return absl::nullopt;
      }
      if (!MoveProperties::Populate(move_properties_value.GetDict(), params.move_properties)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const TabGroup& group) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((group).ToValue());

  return create_results;
}
}  // namespace Move

//
// Events
//

namespace OnCreated {

const char kEventName[] = "tabGroups.onCreated";

base::Value::List Create(const TabGroup& group) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((group).ToValue());

  return create_results;
}

}  // namespace OnCreated

namespace OnUpdated {

const char kEventName[] = "tabGroups.onUpdated";

base::Value::List Create(const TabGroup& group) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((group).ToValue());

  return create_results;
}

}  // namespace OnUpdated

namespace OnMoved {

const char kEventName[] = "tabGroups.onMoved";

base::Value::List Create(const TabGroup& group) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((group).ToValue());

  return create_results;
}

}  // namespace OnMoved

namespace OnRemoved {

const char kEventName[] = "tabGroups.onRemoved";

base::Value::List Create(const TabGroup& group) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((group).ToValue());

  return create_results;
}

}  // namespace OnRemoved

}  // namespace tab_groups
}  // namespace api
}  // namespace extensions

