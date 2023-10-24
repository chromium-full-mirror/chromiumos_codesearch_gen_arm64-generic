// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/wm_desks_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/wm_desks_private.h"

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
namespace wm_desks_private {
//
// Types
//

const char* ToString(SavedDeskType enum_param) {
  switch (enum_param) {
    case SAVED_DESK_TYPE_KTEMPLATE:
      return "kTemplate";
    case SAVED_DESK_TYPE_KSAVEANDRECALL:
      return "kSaveAndRecall";
    case SAVED_DESK_TYPE_KUNKNOWN:
      return "kUnknown";
    case SAVED_DESK_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

SavedDeskType ParseSavedDeskType(base::StringPiece enum_string) {
  if (enum_string == "kTemplate")
    return SAVED_DESK_TYPE_KTEMPLATE;
  if (enum_string == "kSaveAndRecall")
    return SAVED_DESK_TYPE_KSAVEANDRECALL;
  if (enum_string == "kUnknown")
    return SAVED_DESK_TYPE_KUNKNOWN;
  return SAVED_DESK_TYPE_NONE;
}

std::u16string GetSavedDeskTypeParseError(base::StringPiece enum_string) {
  return u"expected \"kTemplate\" or \"kSaveAndRecall\" or \"kUnknown\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


RemoveDeskOptions::RemoveDeskOptions()
: combine_desks(false) {}

RemoveDeskOptions::~RemoveDeskOptions() = default;
RemoveDeskOptions::RemoveDeskOptions(RemoveDeskOptions&& rhs) = default;
RemoveDeskOptions& RemoveDeskOptions::operator=(RemoveDeskOptions&& rhs) = default;
RemoveDeskOptions RemoveDeskOptions::Clone() const {
  RemoveDeskOptions out;
  out.combine_desks = combine_desks;
  out.allow_undo = allow_undo;
  return out;
}

// static
bool RemoveDeskOptions::Populate(
    const base::Value::Dict& dict, RemoveDeskOptions& out) {
  const base::Value* combine_desks_value = dict.Find("combineDesks");
  if (!combine_desks_value) {
    return false;
  }
  {
    auto temp = (*combine_desks_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.combine_desks = *temp;
  }

  const base::Value* allow_undo_value = dict.Find("allowUndo");
  if (allow_undo_value) {
    {
      auto temp = (*allow_undo_value).GetIfBool();
      if (!temp.has_value()) {
        out.allow_undo = absl::nullopt;
        return false;
      }
      out.allow_undo = *temp;
    }
  }

  return true;
}

// static
bool RemoveDeskOptions::Populate(
    const base::Value& value, RemoveDeskOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<RemoveDeskOptions> RemoveDeskOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<RemoveDeskOptions>();
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
absl::optional<RemoveDeskOptions> RemoveDeskOptions::FromValue(const base::Value::Dict& value) {
  RemoveDeskOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<RemoveDeskOptions> RemoveDeskOptions::FromValue(const base::Value& value) {
  RemoveDeskOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict RemoveDeskOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("combineDesks", this->combine_desks);

  if (this->allow_undo) {
    to_value_result.Set("allowUndo", *this->allow_undo);

  }

  return to_value_result;
}


Desk::Desk()
 {}

Desk::~Desk() = default;
Desk::Desk(Desk&& rhs) = default;
Desk& Desk::operator=(Desk&& rhs) = default;
Desk Desk::Clone() const {
  Desk out;
  out.desk_uuid = desk_uuid;
  out.desk_name = desk_name;
  return out;
}

// static
bool Desk::Populate(
    const base::Value::Dict& dict, Desk& out) {
  const base::Value* desk_uuid_value = dict.Find("deskUuid");
  if (!desk_uuid_value) {
    return false;
  }
  {
    auto* temp = (*desk_uuid_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.desk_uuid = *temp;
  }

  const base::Value* desk_name_value = dict.Find("deskName");
  if (!desk_name_value) {
    return false;
  }
  {
    auto* temp = (*desk_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.desk_name = *temp;
  }

  return true;
}

// static
bool Desk::Populate(
    const base::Value& value, Desk& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<Desk> Desk::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Desk>();
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
absl::optional<Desk> Desk::FromValue(const base::Value::Dict& value) {
  Desk out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Desk> Desk::FromValue(const base::Value& value) {
  Desk out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict Desk::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("deskUuid", this->desk_uuid);

  to_value_result.Set("deskName", this->desk_name);


  return to_value_result;
}


SavedDesk::SavedDesk()
: saved_desk_type() {}

SavedDesk::~SavedDesk() = default;
SavedDesk::SavedDesk(SavedDesk&& rhs) = default;
SavedDesk& SavedDesk::operator=(SavedDesk&& rhs) = default;
SavedDesk SavedDesk::Clone() const {
  SavedDesk out;
  out.saved_desk_uuid = saved_desk_uuid;
  out.saved_desk_name = saved_desk_name;
  out.saved_desk_type = saved_desk_type;
  return out;
}

// static
bool SavedDesk::Populate(
    const base::Value::Dict& dict, SavedDesk& out) {
  const base::Value* saved_desk_uuid_value = dict.Find("savedDeskUuid");
  if (!saved_desk_uuid_value) {
    return false;
  }
  {
    auto* temp = (*saved_desk_uuid_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.saved_desk_uuid = *temp;
  }

  const base::Value* saved_desk_name_value = dict.Find("savedDeskName");
  if (!saved_desk_name_value) {
    return false;
  }
  {
    auto* temp = (*saved_desk_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.saved_desk_name = *temp;
  }

  const base::Value* saved_desk_type_value = dict.Find("savedDeskType");
  if (!saved_desk_type_value) {
    return false;
  }
  {
    const std::string* saved_desk_type_as_string = (*saved_desk_type_value).GetIfString();
    if (!saved_desk_type_as_string) {
      return false;
    }
    out.saved_desk_type = ParseSavedDeskType(*saved_desk_type_as_string);
    if (out.saved_desk_type == SavedDeskType()) {
      return false;
    }
  }

  return true;
}

// static
bool SavedDesk::Populate(
    const base::Value& value, SavedDesk& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<SavedDesk> SavedDesk::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<SavedDesk>();
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
absl::optional<SavedDesk> SavedDesk::FromValue(const base::Value::Dict& value) {
  SavedDesk out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<SavedDesk> SavedDesk::FromValue(const base::Value& value) {
  SavedDesk out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict SavedDesk::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("savedDeskUuid", this->saved_desk_uuid);

  to_value_result.Set("savedDeskName", this->saved_desk_name);

  to_value_result.Set("savedDeskType", wm_desks_private::ToString(this->saved_desk_type));


  return to_value_result;
}


LaunchOptions::LaunchOptions()
 {}

LaunchOptions::~LaunchOptions() = default;
LaunchOptions::LaunchOptions(LaunchOptions&& rhs) = default;
LaunchOptions& LaunchOptions::operator=(LaunchOptions&& rhs) = default;
LaunchOptions LaunchOptions::Clone() const {
  LaunchOptions out;
  out.desk_name = desk_name;
  return out;
}

// static
bool LaunchOptions::Populate(
    const base::Value::Dict& dict, LaunchOptions& out) {
  const base::Value* desk_name_value = dict.Find("deskName");
  if (desk_name_value) {
    {
      auto* temp = (*desk_name_value).GetIfString();
      if (!temp) {
        out.desk_name = absl::nullopt;
        return false;
      }
      out.desk_name = *temp;
    }
  }

  return true;
}

// static
bool LaunchOptions::Populate(
    const base::Value& value, LaunchOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<LaunchOptions> LaunchOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<LaunchOptions>();
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
absl::optional<LaunchOptions> LaunchOptions::FromValue(const base::Value::Dict& value) {
  LaunchOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<LaunchOptions> LaunchOptions::FromValue(const base::Value& value) {
  LaunchOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict LaunchOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->desk_name) {
    to_value_result.Set("deskName", *this->desk_name);

  }

  return to_value_result;
}


WindowProperties::WindowProperties()
: all_desks(false) {}

WindowProperties::~WindowProperties() = default;
WindowProperties::WindowProperties(WindowProperties&& rhs) = default;
WindowProperties& WindowProperties::operator=(WindowProperties&& rhs) = default;
WindowProperties WindowProperties::Clone() const {
  WindowProperties out;
  out.all_desks = all_desks;
  return out;
}

// static
bool WindowProperties::Populate(
    const base::Value::Dict& dict, WindowProperties& out) {
  const base::Value* all_desks_value = dict.Find("allDesks");
  if (!all_desks_value) {
    return false;
  }
  {
    auto temp = (*all_desks_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.all_desks = *temp;
  }

  return true;
}

// static
bool WindowProperties::Populate(
    const base::Value& value, WindowProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<WindowProperties> WindowProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<WindowProperties>();
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
absl::optional<WindowProperties> WindowProperties::FromValue(const base::Value::Dict& value) {
  WindowProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<WindowProperties> WindowProperties::FromValue(const base::Value& value) {
  WindowProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict WindowProperties::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("allDesks", this->all_desks);


  return to_value_result;
}



//
// Functions
//

namespace GetSavedDesks {

base::Value::List Results::Create(const std::vector<SavedDesk>& save_desks) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(save_desks));

  return create_results;
}
}  // namespace GetSavedDesks

namespace LaunchDesk {

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
    const base::Value& launch_options_value = args[0];
    {
      if (!launch_options_value.is_dict()) {
        return absl::nullopt;
      }
      if (!LaunchOptions::Populate(launch_options_value.GetDict(), params.launch_options)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& desk_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(desk_id);

  return create_results;
}
}  // namespace LaunchDesk

namespace GetDeskTemplateJson {

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
    const base::Value& template_uuid_value = args[0];
    {
      auto* temp = template_uuid_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.template_uuid = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& template_json) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(template_json);

  return create_results;
}
}  // namespace GetDeskTemplateJson

namespace RemoveDesk {

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
    const base::Value& desk_id_value = args[0];
    {
      auto* temp = desk_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.desk_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& remove_desk_options_value = args[1];
    {
      if (!remove_desk_options_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        RemoveDeskOptions temp;
        if (!RemoveDeskOptions::Populate(remove_desk_options_value.GetDict(), temp))
          return absl::nullopt;
        params.remove_desk_options = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace RemoveDesk

namespace GetAllDesks {

base::Value::List Results::Create(const std::vector<Desk>& desks) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(desks));

  return create_results;
}
}  // namespace GetAllDesks

namespace SetWindowProperties {

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
    const base::Value& window_id_value = args[0];
    {
      auto temp = window_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.window_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& window_properties_value = args[1];
    {
      if (!window_properties_value.is_dict()) {
        return absl::nullopt;
      }
      if (!WindowProperties::Populate(window_properties_value.GetDict(), params.window_properties)) {
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
}  // namespace SetWindowProperties

namespace SaveActiveDesk {

base::Value::List Results::Create(const SavedDesk& desk) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((desk).ToValue());

  return create_results;
}
}  // namespace SaveActiveDesk

namespace DeleteSavedDesk {

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
    const base::Value& saved_desk_uuid_value = args[0];
    {
      auto* temp = saved_desk_uuid_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.saved_desk_uuid = *temp;
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
}  // namespace DeleteSavedDesk

namespace RecallSavedDesk {

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
    const base::Value& saved_desk_uuid_value = args[0];
    {
      auto* temp = saved_desk_uuid_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.saved_desk_uuid = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& desk_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(desk_id);

  return create_results;
}
}  // namespace RecallSavedDesk

namespace GetActiveDesk {

base::Value::List Results::Create(const std::string& desk_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(desk_id);

  return create_results;
}
}  // namespace GetActiveDesk

namespace SwitchDesk {

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
    const base::Value& desk_uuid_value = args[0];
    {
      auto* temp = desk_uuid_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.desk_uuid = *temp;
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
}  // namespace SwitchDesk

namespace GetDeskByID {

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
    const base::Value& desk_uuid_value = args[0];
    {
      auto* temp = desk_uuid_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.desk_uuid = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const Desk& desk) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((desk).ToValue());

  return create_results;
}
}  // namespace GetDeskByID

//
// Events
//

namespace OnDeskAdded {

const char kEventName[] = "wmDesksPrivate.OnDeskAdded";

base::Value::List Create(const std::string& desk_id, bool from_undo) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(desk_id);

  create_results.Append(from_undo);

  return create_results;
}

}  // namespace OnDeskAdded

namespace OnDeskRemoved {

const char kEventName[] = "wmDesksPrivate.OnDeskRemoved";

base::Value::List Create(const std::string& desk_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(desk_id);

  return create_results;
}

}  // namespace OnDeskRemoved

namespace OnDeskSwitched {

const char kEventName[] = "wmDesksPrivate.OnDeskSwitched";

base::Value::List Create(const std::string& activated, const std::string& deactivated) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(activated);

  create_results.Append(deactivated);

  return create_results;
}

}  // namespace OnDeskSwitched

}  // namespace wm_desks_private
}  // namespace api
}  // namespace extensions

