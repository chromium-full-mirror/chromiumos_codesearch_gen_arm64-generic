// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/content_scripts.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/content_scripts.h"

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
#include "base/types/expected.h"
#include "extensions/common/api/extension_types.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace content_scripts {
//
// Types
//

const char* ToString(RunAt enum_param) {
  switch (enum_param) {
    case RunAt::kDocumentIdle:
      return "document_idle";
    case RunAt::kDocumentStart:
      return "document_start";
    case RunAt::kDocumentEnd:
      return "document_end";
    case RunAt::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

RunAt ParseRunAt(base::StringPiece enum_string) {
  if (enum_string == "document_idle")
    return RunAt::kDocumentIdle;
  if (enum_string == "document_start")
    return RunAt::kDocumentStart;
  if (enum_string == "document_end")
    return RunAt::kDocumentEnd;
  return RunAt::kNone;
}

std::u16string GetRunAtParseError(base::StringPiece enum_string) {
  return u"expected \"document_idle\" or \"document_start\" or \"document_end\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ContentScript::ContentScript()
: run_at(),
world() {}

ContentScript::~ContentScript() = default;
ContentScript::ContentScript(ContentScript&& rhs) noexcept = default;
ContentScript& ContentScript::operator=(ContentScript&& rhs) noexcept = default;
// static
constexpr char ContentScript::kMatches[];
// static
constexpr char ContentScript::kExcludeMatches[];
// static
constexpr char ContentScript::kCss[];
// static
constexpr char ContentScript::kJs[];
// static
constexpr char ContentScript::kAllFrames[];
// static
constexpr char ContentScript::kMatchOriginAsFallback[];
// static
constexpr char ContentScript::kMatchAboutBlank[];
// static
constexpr char ContentScript::kIncludeGlobs[];
// static
constexpr char ContentScript::kExcludeGlobs[];
// static
constexpr char ContentScript::kRunAt[];
// static
constexpr char ContentScript::kWorld[];

ContentScript ContentScript::Clone() const {
  ContentScript out;
  out.matches = matches;
  out.exclude_matches = exclude_matches;
  out.css = css;
  out.js = js;
  out.all_frames = all_frames;
  out.match_origin_as_fallback = match_origin_as_fallback;
  out.match_about_blank = match_about_blank;
  out.include_globs = include_globs;
  out.exclude_globs = exclude_globs;
  out.run_at = run_at;
  out.world = world;
  return out;
}

// static
bool ContentScript::Populate(
    const base::Value::Dict& dict, ContentScript& out, std::u16string& error) {
  out.run_at = RunAt();
  out.world = extensions::api::extension_types::ExecutionWorld();
  const base::Value* matches_value = dict.Find("matches");
  if (!matches_value) {
    DCHECK(error.empty());
    error = u"'matches' is required";
    return false;
  }
  {
    if (!(*matches_value).is_list()) {
      DCHECK(error.empty());
      error = u"'matches': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*matches_value).type()));
      return false;
    }
    else {
      std::u16string array_parse_error;
      if (!json_schema_compiler::util::PopulateArrayFromList((*matches_value).GetList(), out.matches, array_parse_error)) {
        array_parse_error = u"Error at key 'matches': " + array_parse_error;
        DCHECK(error.empty());
        error = array_parse_error;
        return false;
      }
    }
  }

  const base::Value* exclude_matches_value = dict.Find("exclude_matches");
  if (exclude_matches_value) {
    {
      if (!(*exclude_matches_value).is_list()) {
        DCHECK(error.empty());
        error = u"'exclude_matches': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*exclude_matches_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*exclude_matches_value).GetList(), out.exclude_matches, array_parse_error)) {
          array_parse_error = u"Error at key 'exclude_matches': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  const base::Value* css_value = dict.Find("css");
  if (css_value) {
    {
      if (!(*css_value).is_list()) {
        DCHECK(error.empty());
        error = u"'css': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*css_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*css_value).GetList(), out.css, array_parse_error)) {
          array_parse_error = u"Error at key 'css': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  const base::Value* js_value = dict.Find("js");
  if (js_value) {
    {
      if (!(*js_value).is_list()) {
        DCHECK(error.empty());
        error = u"'js': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*js_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*js_value).GetList(), out.js, array_parse_error)) {
          array_parse_error = u"Error at key 'js': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  const base::Value* all_frames_value = dict.Find("all_frames");
  if (all_frames_value) {
    {
      auto temp = (*all_frames_value).GetIfBool();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'all_frames': expected all_frames, got " + UTF8ToUTF16(base::Value::GetTypeName((*all_frames_value).type()));
        out.all_frames = std::nullopt;
        return false;
      }
      out.all_frames = *temp;
    }
  }

  const base::Value* match_origin_as_fallback_value = dict.Find("match_origin_as_fallback");
  if (match_origin_as_fallback_value) {
    {
      auto temp = (*match_origin_as_fallback_value).GetIfBool();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'match_origin_as_fallback': expected match_origin_as_fallback, got " + UTF8ToUTF16(base::Value::GetTypeName((*match_origin_as_fallback_value).type()));
        out.match_origin_as_fallback = std::nullopt;
        return false;
      }
      out.match_origin_as_fallback = *temp;
    }
  }

  const base::Value* match_about_blank_value = dict.Find("match_about_blank");
  if (match_about_blank_value) {
    {
      auto temp = (*match_about_blank_value).GetIfBool();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'match_about_blank': expected match_about_blank, got " + UTF8ToUTF16(base::Value::GetTypeName((*match_about_blank_value).type()));
        out.match_about_blank = std::nullopt;
        return false;
      }
      out.match_about_blank = *temp;
    }
  }

  const base::Value* include_globs_value = dict.Find("include_globs");
  if (include_globs_value) {
    {
      if (!(*include_globs_value).is_list()) {
        DCHECK(error.empty());
        error = u"'include_globs': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*include_globs_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*include_globs_value).GetList(), out.include_globs, array_parse_error)) {
          array_parse_error = u"Error at key 'include_globs': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  const base::Value* exclude_globs_value = dict.Find("exclude_globs");
  if (exclude_globs_value) {
    {
      if (!(*exclude_globs_value).is_list()) {
        DCHECK(error.empty());
        error = u"'exclude_globs': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*exclude_globs_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*exclude_globs_value).GetList(), out.exclude_globs, array_parse_error)) {
          array_parse_error = u"Error at key 'exclude_globs': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  const base::Value* run_at_value = dict.Find("run_at");
  if (run_at_value) {
    {
      const std::string* run_at_as_string = (*run_at_value).GetIfString();
      if (!run_at_as_string) {
        DCHECK(error.empty());
        error = u"'RunAt': expected string, got " + UTF8ToUTF16(base::Value::GetTypeName((*run_at_value).type()));
        return false;
      }
      out.run_at = ParseRunAt(*run_at_as_string);
      if (out.run_at == RunAt()) {
        DCHECK(error.empty());
        error = u"'RunAt': " + GetRunAtParseError(*run_at_as_string);
        return false;
      }
    }
    } else {
    out.run_at = RunAt();
  }

  const base::Value* world_value = dict.Find("world");
  if (world_value) {
    {
      const std::string* execution_world_as_string = (*world_value).GetIfString();
      if (!execution_world_as_string) {
        DCHECK(error.empty());
        error = u"'ExecutionWorld': expected string, got " + UTF8ToUTF16(base::Value::GetTypeName((*world_value).type()));
        return false;
      }
      out.world = extensions::api::extension_types::ParseExecutionWorld(*execution_world_as_string);
      if (out.world == extensions::api::extension_types::ExecutionWorld()) {
        DCHECK(error.empty());
        error = u"'ExecutionWorld': " + extensions::api::extension_types::GetExecutionWorldParseError(*execution_world_as_string);
        return false;
      }
    }
    } else {
    out.world = extensions::api::extension_types::ExecutionWorld();
  }

  return true;
}

// static
bool ContentScript::Populate(
    const base::Value& value, ContentScript& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<ContentScript, std::u16string> ContentScript::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  ContentScript out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<ContentScript, std::u16string> ContentScript::FromValue(const base::Value& value) {
  std::u16string error;
  ContentScript out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict ContentScript::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("matches", json_schema_compiler::util::CreateValueFromArray(this->matches));

  if (this->exclude_matches) {
    to_value_result.Set("exclude_matches", json_schema_compiler::util::CreateValueFromArray(*this->exclude_matches));

  }
  if (this->css) {
    to_value_result.Set("css", json_schema_compiler::util::CreateValueFromArray(*this->css));

  }
  if (this->js) {
    to_value_result.Set("js", json_schema_compiler::util::CreateValueFromArray(*this->js));

  }
  if (this->all_frames) {
    to_value_result.Set("all_frames", *this->all_frames);

  }
  if (this->match_origin_as_fallback) {
    to_value_result.Set("match_origin_as_fallback", *this->match_origin_as_fallback);

  }
  if (this->match_about_blank) {
    to_value_result.Set("match_about_blank", *this->match_about_blank);

  }
  if (this->include_globs) {
    to_value_result.Set("include_globs", json_schema_compiler::util::CreateValueFromArray(*this->include_globs));

  }
  if (this->exclude_globs) {
    to_value_result.Set("exclude_globs", json_schema_compiler::util::CreateValueFromArray(*this->exclude_globs));

  }
  if (this->run_at != RunAt()) {
    to_value_result.Set("run_at", content_scripts::ToString(this->run_at));

  }
  if (this->world != extensions::api::extension_types::ExecutionWorld()) {
    to_value_result.Set("world", extension_types::ToString(this->world));

  }

  return to_value_result;
}

//static
bool ContentScript::ParseFromDictionary(
const base::Value::Dict& root_dict, base::StringPiece key, ContentScript& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed) {

  const base::Value* value = ::json_schema_compiler::manifest_parse_util::FindKeyOfType(root_dict, key, base::Value::Type::DICT, error, error_path_reversed);
  if (!value)
    return false;
  const base::Value::Dict& dict = value->GetDict();
  out.run_at = RunAt();
  out.world = extensions::api::extension_types::ExecutionWorld();
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kMatches, out.matches, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kExcludeMatches, out.exclude_matches, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kCss, out.css, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kJs, out.js, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kAllFrames, out.all_frames, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kMatchOriginAsFallback, out.match_origin_as_fallback, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kMatchAboutBlank, out.match_about_blank, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kIncludeGlobs, out.include_globs, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kExcludeGlobs, out.exclude_globs, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseEnumFromDictionary(dict, kRunAt, &ParseRunAt, true, RunAt(), out.run_at, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseEnumFromDictionary(dict, kWorld, &extension_types::ParseExecutionWorld, true, extensions::api::extension_types::ExecutionWorld(), out.world, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  return true;
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
constexpr char ManifestKeys::kContentScripts[];

//static
bool ManifestKeys::ParseFromDictionary(
const base::Value::Dict& root_dict, ManifestKeys& out, std::u16string& error) {

  std::vector<base::StringPiece> error_path_reversed;
  const base::Value::Dict& dict = root_dict;
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kContentScripts, out.content_scripts, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  return true;
}


}  // namespace content_scripts
}  // namespace api
}  // namespace extensions

