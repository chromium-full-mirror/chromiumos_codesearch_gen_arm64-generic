// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/scripts_internal.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/scripts_internal.h"

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
namespace scripts_internal {
//
// Types
//

const char* ToString(Source enum_param) {
  switch (enum_param) {
    case Source::kDynamicContentScript:
      return "DYNAMIC_CONTENT_SCRIPT";
    case Source::kDynamicUserScript:
      return "DYNAMIC_USER_SCRIPT";
    case Source::kManifestContentScript:
      return "MANIFEST_CONTENT_SCRIPT";
    case Source::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

Source ParseSource(base::StringPiece enum_string) {
  if (enum_string == "DYNAMIC_CONTENT_SCRIPT")
    return Source::kDynamicContentScript;
  if (enum_string == "DYNAMIC_USER_SCRIPT")
    return Source::kDynamicUserScript;
  if (enum_string == "MANIFEST_CONTENT_SCRIPT")
    return Source::kManifestContentScript;
  return Source::kNone;
}

std::u16string GetSourceParseError(base::StringPiece enum_string) {
  return u"expected \"DYNAMIC_CONTENT_SCRIPT\" or \"DYNAMIC_USER_SCRIPT\" or \"MANIFEST_CONTENT_SCRIPT\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
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


SerializedUserScript::SerializedUserScript()
: run_at(),
source(),
world() {}

SerializedUserScript::~SerializedUserScript() = default;
SerializedUserScript::SerializedUserScript(SerializedUserScript&& rhs) noexcept = default;
SerializedUserScript& SerializedUserScript::operator=(SerializedUserScript&& rhs) noexcept = default;
SerializedUserScript SerializedUserScript::Clone() const {
  SerializedUserScript out;
  out.all_frames = all_frames;
  if (css) {
    out.css.emplace();
    out.css->reserve(css->size());
    for (const auto& element : *css) {
      json_schema_compiler::util::AppendToContainer(*out.css, element.Clone());
    }
  }
  out.exclude_matches = exclude_matches;
  out.exclude_globs = exclude_globs;
  out.id = id;
  out.include_globs = include_globs;
  if (js) {
    out.js.emplace();
    out.js->reserve(js->size());
    for (const auto& element : *js) {
      json_schema_compiler::util::AppendToContainer(*out.js, element.Clone());
    }
  }
  out.matches = matches;
  out.match_origin_as_fallback = match_origin_as_fallback;
  out.run_at = run_at;
  out.source = source;
  out.world = world;
  return out;
}

// static
bool SerializedUserScript::Populate(
    const base::Value::Dict& dict, SerializedUserScript& out) {
  out.run_at = extensions::api::extension_types::RunAt();
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

  const base::Value* css_value = dict.Find("css");
  if (css_value) {
    {
      if (!(*css_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*css_value).GetList(), out.css)) {
          return false;
        }
      }
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

  const base::Value* js_value = dict.Find("js");
  if (js_value) {
    {
      if (!(*js_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*js_value).GetList(), out.js)) {
          return false;
        }
      }
    }
  }

  const base::Value* matches_value = dict.Find("matches");
  if (!matches_value) {
    return false;
  }
  {
    if (!(*matches_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*matches_value).GetList(), out.matches)) {
        return false;
      }
    }
  }

  const base::Value* match_origin_as_fallback_value = dict.Find("matchOriginAsFallback");
  if (match_origin_as_fallback_value) {
    {
      auto temp = (*match_origin_as_fallback_value).GetIfBool();
      if (!temp.has_value()) {
        out.match_origin_as_fallback = std::nullopt;
        return false;
      }
      out.match_origin_as_fallback = *temp;
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

  const base::Value* source_value = dict.Find("source");
  if (!source_value) {
    return false;
  }
  {
    const std::string* source_as_string = (*source_value).GetIfString();
    if (!source_as_string) {
      return false;
    }
    out.source = ParseSource(*source_as_string);
    if (out.source == Source()) {
      return false;
    }
  }

  const base::Value* world_value = dict.Find("world");
  if (!world_value) {
    return false;
  }
  {
    const std::string* execution_world_as_string = (*world_value).GetIfString();
    if (!execution_world_as_string) {
      return false;
    }
    out.world = extensions::api::extension_types::ParseExecutionWorld(*execution_world_as_string);
    if (out.world == extensions::api::extension_types::ExecutionWorld()) {
      return false;
    }
  }

  return true;
}

// static
bool SerializedUserScript::Populate(
    const base::Value& value, SerializedUserScript& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SerializedUserScript> SerializedUserScript::FromValue(const base::Value::Dict& value) {
  SerializedUserScript out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SerializedUserScript> SerializedUserScript::FromValue(const base::Value& value) {
  SerializedUserScript out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SerializedUserScript::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->all_frames) {
    to_value_result.Set("allFrames", *this->all_frames);

  }
  if (this->css) {
    to_value_result.Set("css", json_schema_compiler::util::CreateValueFromArray(*this->css));

  }
  if (this->exclude_matches) {
    to_value_result.Set("excludeMatches", json_schema_compiler::util::CreateValueFromArray(*this->exclude_matches));

  }
  if (this->exclude_globs) {
    to_value_result.Set("excludeGlobs", json_schema_compiler::util::CreateValueFromArray(*this->exclude_globs));

  }
  to_value_result.Set("id", this->id);

  if (this->include_globs) {
    to_value_result.Set("includeGlobs", json_schema_compiler::util::CreateValueFromArray(*this->include_globs));

  }
  if (this->js) {
    to_value_result.Set("js", json_schema_compiler::util::CreateValueFromArray(*this->js));

  }
  to_value_result.Set("matches", json_schema_compiler::util::CreateValueFromArray(this->matches));

  if (this->match_origin_as_fallback) {
    to_value_result.Set("matchOriginAsFallback", *this->match_origin_as_fallback);

  }
  if (this->run_at != extensions::api::extension_types::RunAt()) {
    to_value_result.Set("runAt", extension_types::ToString(this->run_at));

  }
  to_value_result.Set("source", scripts_internal::ToString(this->source));

  to_value_result.Set("world", extension_types::ToString(this->world));


  return to_value_result;
}



}  // namespace scripts_internal
}  // namespace api
}  // namespace extensions

