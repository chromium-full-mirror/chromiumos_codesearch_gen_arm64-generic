// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/user_scripts.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/user_scripts.h"

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
#include "extensions/common/api/extension_types.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace user_scripts {
//
// Types
//

const char* ToString(ExecutionWorld enum_param) {
  switch (enum_param) {
    case ExecutionWorld::kMain:
      return "MAIN";
    case ExecutionWorld::kUserScript:
      return "USER_SCRIPT";
    case ExecutionWorld::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ExecutionWorld ParseExecutionWorld(base::StringPiece enum_string) {
  if (enum_string == "MAIN")
    return ExecutionWorld::kMain;
  if (enum_string == "USER_SCRIPT")
    return ExecutionWorld::kUserScript;
  return ExecutionWorld::kNone;
}

std::u16string GetExecutionWorldParseError(base::StringPiece enum_string) {
  return u"expected \"MAIN\" or \"USER_SCRIPT\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ScriptSource::ScriptSource()
 {}

ScriptSource::~ScriptSource() = default;
ScriptSource::ScriptSource(ScriptSource&& rhs) noexcept = default;
ScriptSource& ScriptSource::operator=(ScriptSource&& rhs) noexcept = default;
ScriptSource ScriptSource::Clone() const {
  ScriptSource out;
  out.code = code;
  out.file = file;
  return out;
}

// static
bool ScriptSource::Populate(
    const base::Value::Dict& dict, ScriptSource& out) {
  const base::Value* code_value = dict.Find("code");
  if (code_value) {
    {
      auto* temp = (*code_value).GetIfString();
      if (!temp) {
        out.code = std::nullopt;
        return false;
      }
      out.code = *temp;
    }
  }

  const base::Value* file_value = dict.Find("file");
  if (file_value) {
    {
      auto* temp = (*file_value).GetIfString();
      if (!temp) {
        out.file = std::nullopt;
        return false;
      }
      out.file = *temp;
    }
  }

  return true;
}

// static
bool ScriptSource::Populate(
    const base::Value& value, ScriptSource& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ScriptSource> ScriptSource::FromValue(const base::Value::Dict& value) {
  ScriptSource out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ScriptSource> ScriptSource::FromValue(const base::Value& value) {
  ScriptSource out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ScriptSource::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->code) {
    to_value_result.Set("code", *this->code);

  }
  if (this->file) {
    to_value_result.Set("file", *this->file);

  }

  return to_value_result;
}


RegisteredUserScript::RegisteredUserScript()
: run_at(),
world() {}

RegisteredUserScript::~RegisteredUserScript() = default;
RegisteredUserScript::RegisteredUserScript(RegisteredUserScript&& rhs) noexcept = default;
RegisteredUserScript& RegisteredUserScript::operator=(RegisteredUserScript&& rhs) noexcept = default;
RegisteredUserScript RegisteredUserScript::Clone() const {
  RegisteredUserScript out;
  out.all_frames = all_frames;
  out.exclude_matches = exclude_matches;
  out.id = id;
  out.include_globs = include_globs;
  out.exclude_globs = exclude_globs;
  out.js.reserve(js.size());
  for (const auto& element : js) {
    json_schema_compiler::util::AppendToContainer(out.js, element.Clone());
  }
  out.matches = matches;
  out.run_at = run_at;
  out.world = world;
  return out;
}

// static
bool RegisteredUserScript::Populate(
    const base::Value::Dict& dict, RegisteredUserScript& out) {
  out.run_at = extensions::api::extension_types::RunAt();
  out.world = ExecutionWorld();
  const base::Value* all_frames_value = dict.Find("allFrames");
  if (all_frames_value) {
    {
      auto temp = (*all_frames_value).GetIfBool();
      if (!temp.has_value()) {
        out.all_frames = std::nullopt;
        return false;
      }
      out.all_frames = *temp;
    }
  }

  const base::Value* exclude_matches_value = dict.Find("excludeMatches");
  if (exclude_matches_value) {
    {
      if (!(*exclude_matches_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*exclude_matches_value).GetList(), out.exclude_matches)) {
          return false;
        }
      }
    }
  }

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

  const base::Value* include_globs_value = dict.Find("includeGlobs");
  if (include_globs_value) {
    {
      if (!(*include_globs_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*include_globs_value).GetList(), out.include_globs)) {
          return false;
        }
      }
    }
  }

  const base::Value* exclude_globs_value = dict.Find("excludeGlobs");
  if (exclude_globs_value) {
    {
      if (!(*exclude_globs_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*exclude_globs_value).GetList(), out.exclude_globs)) {
          return false;
        }
      }
    }
  }

  const base::Value* js_value = dict.Find("js");
  if (!js_value) {
    return false;
  }
  {
    if (!(*js_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*js_value).GetList(), out.js)) {
        return false;
      }
    }
  }

  const base::Value* matches_value = dict.Find("matches");
  if (matches_value) {
    {
      if (!(*matches_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*matches_value).GetList(), out.matches)) {
          return false;
        }
      }
    }
  }

  const base::Value* run_at_value = dict.Find("runAt");
  if (run_at_value) {
    {
      const std::string* run_at_as_string = (*run_at_value).GetIfString();
      if (!run_at_as_string) {
        return false;
      }
      out.run_at = extensions::api::extension_types::ParseRunAt(*run_at_as_string);
      if (out.run_at == extensions::api::extension_types::RunAt()) {
        return false;
      }
    }
    } else {
    out.run_at = extensions::api::extension_types::RunAt();
  }

  const base::Value* world_value = dict.Find("world");
  if (world_value) {
    {
      const std::string* execution_world_as_string = (*world_value).GetIfString();
      if (!execution_world_as_string) {
        return false;
      }
      out.world = ParseExecutionWorld(*execution_world_as_string);
      if (out.world == ExecutionWorld()) {
        return false;
      }
    }
    } else {
    out.world = ExecutionWorld();
  }

  return true;
}

// static
bool RegisteredUserScript::Populate(
    const base::Value& value, RegisteredUserScript& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RegisteredUserScript> RegisteredUserScript::FromValue(const base::Value::Dict& value) {
  RegisteredUserScript out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RegisteredUserScript> RegisteredUserScript::FromValue(const base::Value& value) {
  RegisteredUserScript out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RegisteredUserScript::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->all_frames) {
    to_value_result.Set("allFrames", *this->all_frames);

  }
  if (this->exclude_matches) {
    to_value_result.Set("excludeMatches", json_schema_compiler::util::CreateValueFromArray(*this->exclude_matches));

  }
  to_value_result.Set("id", this->id);

  if (this->include_globs) {
    to_value_result.Set("includeGlobs", json_schema_compiler::util::CreateValueFromArray(*this->include_globs));

  }
  if (this->exclude_globs) {
    to_value_result.Set("excludeGlobs", json_schema_compiler::util::CreateValueFromArray(*this->exclude_globs));

  }
  to_value_result.Set("js", json_schema_compiler::util::CreateValueFromArray(this->js));

  if (this->matches) {
    to_value_result.Set("matches", json_schema_compiler::util::CreateValueFromArray(*this->matches));

  }
  if (this->run_at != extensions::api::extension_types::RunAt()) {
    to_value_result.Set("runAt", extension_types::ToString(this->run_at));

  }
  if (this->world != ExecutionWorld()) {
    to_value_result.Set("world", user_scripts::ToString(this->world));

  }

  return to_value_result;
}


UserScriptFilter::UserScriptFilter()
 {}

UserScriptFilter::~UserScriptFilter() = default;
UserScriptFilter::UserScriptFilter(UserScriptFilter&& rhs) noexcept = default;
UserScriptFilter& UserScriptFilter::operator=(UserScriptFilter&& rhs) noexcept = default;
UserScriptFilter UserScriptFilter::Clone() const {
  UserScriptFilter out;
  out.ids = ids;
  return out;
}

// static
bool UserScriptFilter::Populate(
    const base::Value::Dict& dict, UserScriptFilter& out) {
  const base::Value* ids_value = dict.Find("ids");
  if (ids_value) {
    {
      if (!(*ids_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*ids_value).GetList(), out.ids)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool UserScriptFilter::Populate(
    const base::Value& value, UserScriptFilter& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<UserScriptFilter> UserScriptFilter::FromValue(const base::Value::Dict& value) {
  UserScriptFilter out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<UserScriptFilter> UserScriptFilter::FromValue(const base::Value& value) {
  UserScriptFilter out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict UserScriptFilter::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->ids) {
    to_value_result.Set("ids", json_schema_compiler::util::CreateValueFromArray(*this->ids));

  }

  return to_value_result;
}


WorldProperties::WorldProperties()
 {}

WorldProperties::~WorldProperties() = default;
WorldProperties::WorldProperties(WorldProperties&& rhs) noexcept = default;
WorldProperties& WorldProperties::operator=(WorldProperties&& rhs) noexcept = default;
WorldProperties WorldProperties::Clone() const {
  WorldProperties out;
  out.csp = csp;
  out.messaging = messaging;
  return out;
}

// static
bool WorldProperties::Populate(
    const base::Value::Dict& dict, WorldProperties& out) {
  const base::Value* csp_value = dict.Find("csp");
  if (csp_value) {
    {
      auto* temp = (*csp_value).GetIfString();
      if (!temp) {
        out.csp = std::nullopt;
        return false;
      }
      out.csp = *temp;
    }
  }

  const base::Value* messaging_value = dict.Find("messaging");
  if (messaging_value) {
    {
      auto temp = (*messaging_value).GetIfBool();
      if (!temp.has_value()) {
        out.messaging = std::nullopt;
        return false;
      }
      out.messaging = *temp;
    }
  }

  return true;
}

// static
bool WorldProperties::Populate(
    const base::Value& value, WorldProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<WorldProperties> WorldProperties::FromValue(const base::Value::Dict& value) {
  WorldProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<WorldProperties> WorldProperties::FromValue(const base::Value& value) {
  WorldProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict WorldProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->csp) {
    to_value_result.Set("csp", *this->csp);

  }
  if (this->messaging) {
    to_value_result.Set("messaging", *this->messaging);

  }

  return to_value_result;
}



//
// Functions
//

namespace Register {

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
    const base::Value& scripts_value = args[0];
    {
      if (!scripts_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(scripts_value.GetList(), params.scripts)) {
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
}  // namespace Register

namespace GetScripts {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& filter_value = args[0];
    {
      if (!filter_value.is_dict()) {
        return std::nullopt;
      }
      else {
        UserScriptFilter temp;
        if (!UserScriptFilter::Populate(filter_value.GetDict(), temp))
          return std::nullopt;
        params.filter = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const std::vector<RegisteredUserScript>& scripts) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(scripts));

  return create_results;
}
}  // namespace GetScripts

namespace Unregister {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& filter_value = args[0];
    {
      if (!filter_value.is_dict()) {
        return std::nullopt;
      }
      else {
        UserScriptFilter temp;
        if (!UserScriptFilter::Populate(filter_value.GetDict(), temp))
          return std::nullopt;
        params.filter = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace Unregister

namespace Update {

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
    const base::Value& scripts_value = args[0];
    {
      if (!scripts_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(scripts_value.GetList(), params.scripts)) {
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
}  // namespace Update

namespace ConfigureWorld {

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
    const base::Value& properties_value = args[0];
    {
      if (!properties_value.is_dict()) {
        return std::nullopt;
      }
      if (!WorldProperties::Populate(properties_value.GetDict(), params.properties)) {
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
}  // namespace ConfigureWorld

}  // namespace user_scripts
}  // namespace api
}  // namespace extensions

