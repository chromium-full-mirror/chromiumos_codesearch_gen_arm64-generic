// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/web_view_internal.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/web_view_internal.h"

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
namespace web_view_internal {
//
// Properties
//

const int MAX_CAPTURE_VISIBLE_REGION_CALLS_PER_SECOND = 2;

//
// Types
//

DataTypeSet::DataTypeSet()
 {}

DataTypeSet::~DataTypeSet() = default;
DataTypeSet::DataTypeSet(DataTypeSet&& rhs) noexcept = default;
DataTypeSet& DataTypeSet::operator=(DataTypeSet&& rhs) noexcept = default;
DataTypeSet DataTypeSet::Clone() const {
  DataTypeSet out;
  out.appcache = appcache;
  out.cookies = cookies;
  out.session_cookies = session_cookies;
  out.persistent_cookies = persistent_cookies;
  out.file_systems = file_systems;
  out.indexed_db = indexed_db;
  out.local_storage = local_storage;
  out.web_sql = web_sql;
  out.cache = cache;
  return out;
}

// static
bool DataTypeSet::Populate(
    const base::Value::Dict& dict, DataTypeSet& out) {
  const base::Value* appcache_value = dict.Find("appcache");
  if (appcache_value) {
    {
      auto temp = (*appcache_value).GetIfBool();
      if (!temp.has_value()) {
        out.appcache = std::nullopt;
        return false;
      }
      out.appcache = *temp;
    }
  }

  const base::Value* cookies_value = dict.Find("cookies");
  if (cookies_value) {
    {
      auto temp = (*cookies_value).GetIfBool();
      if (!temp.has_value()) {
        out.cookies = std::nullopt;
        return false;
      }
      out.cookies = *temp;
    }
  }

  const base::Value* session_cookies_value = dict.Find("sessionCookies");
  if (session_cookies_value) {
    {
      auto temp = (*session_cookies_value).GetIfBool();
      if (!temp.has_value()) {
        out.session_cookies = std::nullopt;
        return false;
      }
      out.session_cookies = *temp;
    }
  }

  const base::Value* persistent_cookies_value = dict.Find("persistentCookies");
  if (persistent_cookies_value) {
    {
      auto temp = (*persistent_cookies_value).GetIfBool();
      if (!temp.has_value()) {
        out.persistent_cookies = std::nullopt;
        return false;
      }
      out.persistent_cookies = *temp;
    }
  }

  const base::Value* file_systems_value = dict.Find("fileSystems");
  if (file_systems_value) {
    {
      auto temp = (*file_systems_value).GetIfBool();
      if (!temp.has_value()) {
        out.file_systems = std::nullopt;
        return false;
      }
      out.file_systems = *temp;
    }
  }

  const base::Value* indexed_db_value = dict.Find("indexedDB");
  if (indexed_db_value) {
    {
      auto temp = (*indexed_db_value).GetIfBool();
      if (!temp.has_value()) {
        out.indexed_db = std::nullopt;
        return false;
      }
      out.indexed_db = *temp;
    }
  }

  const base::Value* local_storage_value = dict.Find("localStorage");
  if (local_storage_value) {
    {
      auto temp = (*local_storage_value).GetIfBool();
      if (!temp.has_value()) {
        out.local_storage = std::nullopt;
        return false;
      }
      out.local_storage = *temp;
    }
  }

  const base::Value* web_sql_value = dict.Find("webSQL");
  if (web_sql_value) {
    {
      auto temp = (*web_sql_value).GetIfBool();
      if (!temp.has_value()) {
        out.web_sql = std::nullopt;
        return false;
      }
      out.web_sql = *temp;
    }
  }

  const base::Value* cache_value = dict.Find("cache");
  if (cache_value) {
    {
      auto temp = (*cache_value).GetIfBool();
      if (!temp.has_value()) {
        out.cache = std::nullopt;
        return false;
      }
      out.cache = *temp;
    }
  }

  return true;
}

// static
bool DataTypeSet::Populate(
    const base::Value& value, DataTypeSet& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DataTypeSet> DataTypeSet::FromValue(const base::Value::Dict& value) {
  DataTypeSet out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DataTypeSet> DataTypeSet::FromValue(const base::Value& value) {
  DataTypeSet out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DataTypeSet::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->appcache) {
    to_value_result.Set("appcache", *this->appcache);

  }
  if (this->cookies) {
    to_value_result.Set("cookies", *this->cookies);

  }
  if (this->session_cookies) {
    to_value_result.Set("sessionCookies", *this->session_cookies);

  }
  if (this->persistent_cookies) {
    to_value_result.Set("persistentCookies", *this->persistent_cookies);

  }
  if (this->file_systems) {
    to_value_result.Set("fileSystems", *this->file_systems);

  }
  if (this->indexed_db) {
    to_value_result.Set("indexedDB", *this->indexed_db);

  }
  if (this->local_storage) {
    to_value_result.Set("localStorage", *this->local_storage);

  }
  if (this->web_sql) {
    to_value_result.Set("webSQL", *this->web_sql);

  }
  if (this->cache) {
    to_value_result.Set("cache", *this->cache);

  }

  return to_value_result;
}


RemovalOptions::RemovalOptions()
 {}

RemovalOptions::~RemovalOptions() = default;
RemovalOptions::RemovalOptions(RemovalOptions&& rhs) noexcept = default;
RemovalOptions& RemovalOptions::operator=(RemovalOptions&& rhs) noexcept = default;
RemovalOptions RemovalOptions::Clone() const {
  RemovalOptions out;
  out.since = since;
  return out;
}

// static
bool RemovalOptions::Populate(
    const base::Value::Dict& dict, RemovalOptions& out) {
  const base::Value* since_value = dict.Find("since");
  if (since_value) {
    {
      auto temp = (*since_value).GetIfDouble();
      if (!temp.has_value()) {
        out.since = std::nullopt;
        return false;
      }
      out.since = *temp;
    }
  }

  return true;
}

// static
bool RemovalOptions::Populate(
    const base::Value& value, RemovalOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RemovalOptions> RemovalOptions::FromValue(const base::Value::Dict& value) {
  RemovalOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RemovalOptions> RemovalOptions::FromValue(const base::Value& value) {
  RemovalOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RemovalOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->since) {
    to_value_result.Set("since", *this->since);

  }

  return to_value_result;
}


const char* ToString(ZoomMode enum_param) {
  switch (enum_param) {
    case ZoomMode::kPerOrigin:
      return "per-origin";
    case ZoomMode::kPerView:
      return "per-view";
    case ZoomMode::kDisabled:
      return "disabled";
    case ZoomMode::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ZoomMode ParseZoomMode(base::StringPiece enum_string) {
  if (enum_string == "per-origin")
    return ZoomMode::kPerOrigin;
  if (enum_string == "per-view")
    return ZoomMode::kPerView;
  if (enum_string == "disabled")
    return ZoomMode::kDisabled;
  return ZoomMode::kNone;
}

std::u16string GetZoomModeParseError(base::StringPiece enum_string) {
  return u"expected \"per-origin\" or \"per-view\" or \"disabled\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(StopFindingAction enum_param) {
  switch (enum_param) {
    case StopFindingAction::kClear:
      return "clear";
    case StopFindingAction::kKeep:
      return "keep";
    case StopFindingAction::kActivate:
      return "activate";
    case StopFindingAction::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

StopFindingAction ParseStopFindingAction(base::StringPiece enum_string) {
  if (enum_string == "clear")
    return StopFindingAction::kClear;
  if (enum_string == "keep")
    return StopFindingAction::kKeep;
  if (enum_string == "activate")
    return StopFindingAction::kActivate;
  return StopFindingAction::kNone;
}

std::u16string GetStopFindingActionParseError(base::StringPiece enum_string) {
  return u"expected \"clear\" or \"keep\" or \"activate\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SetPermissionAction enum_param) {
  switch (enum_param) {
    case SetPermissionAction::kAllow:
      return "allow";
    case SetPermissionAction::kDeny:
      return "deny";
    case SetPermissionAction::kDefault:
      return "default";
    case SetPermissionAction::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

SetPermissionAction ParseSetPermissionAction(base::StringPiece enum_string) {
  if (enum_string == "allow")
    return SetPermissionAction::kAllow;
  if (enum_string == "deny")
    return SetPermissionAction::kDeny;
  if (enum_string == "default")
    return SetPermissionAction::kDefault;
  return SetPermissionAction::kNone;
}

std::u16string GetSetPermissionActionParseError(base::StringPiece enum_string) {
  return u"expected \"allow\" or \"deny\" or \"default\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


InjectionItems::InjectionItems()
 {}

InjectionItems::~InjectionItems() = default;
InjectionItems::InjectionItems(InjectionItems&& rhs) noexcept = default;
InjectionItems& InjectionItems::operator=(InjectionItems&& rhs) noexcept = default;
InjectionItems InjectionItems::Clone() const {
  InjectionItems out;
  out.code = code;
  out.files = files;
  return out;
}

// static
bool InjectionItems::Populate(
    const base::Value::Dict& dict, InjectionItems& out) {
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

  const base::Value* files_value = dict.Find("files");
  if (files_value) {
    {
      if (!(*files_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*files_value).GetList(), out.files)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool InjectionItems::Populate(
    const base::Value& value, InjectionItems& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<InjectionItems> InjectionItems::FromValue(const base::Value::Dict& value) {
  InjectionItems out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<InjectionItems> InjectionItems::FromValue(const base::Value& value) {
  InjectionItems out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict InjectionItems::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->code) {
    to_value_result.Set("code", *this->code);

  }
  if (this->files) {
    to_value_result.Set("files", json_schema_compiler::util::CreateValueFromArray(*this->files));

  }

  return to_value_result;
}


ContentScriptDetails::ContentScriptDetails()
: run_at() {}

ContentScriptDetails::~ContentScriptDetails() = default;
ContentScriptDetails::ContentScriptDetails(ContentScriptDetails&& rhs) noexcept = default;
ContentScriptDetails& ContentScriptDetails::operator=(ContentScriptDetails&& rhs) noexcept = default;
ContentScriptDetails ContentScriptDetails::Clone() const {
  ContentScriptDetails out;
  out.name = name;
  out.matches = matches;
  out.exclude_matches = exclude_matches;
  out.match_about_blank = match_about_blank;
  if (css) {
    out.css = css->Clone();
  }
  if (js) {
    out.js = js->Clone();
  }
  out.run_at = run_at;
  out.all_frames = all_frames;
  out.include_globs = include_globs;
  out.exclude_globs = exclude_globs;
  return out;
}

// static
bool ContentScriptDetails::Populate(
    const base::Value::Dict& dict, ContentScriptDetails& out) {
  out.run_at = extensions::api::extension_types::RunAt();
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

  const base::Value* exclude_matches_value = dict.Find("exclude_matches");
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

  const base::Value* match_about_blank_value = dict.Find("match_about_blank");
  if (match_about_blank_value) {
    {
      auto temp = (*match_about_blank_value).GetIfBool();
      if (!temp.has_value()) {
        out.match_about_blank = std::nullopt;
        return false;
      }
      out.match_about_blank = *temp;
    }
  }

  const base::Value* css_value = dict.Find("css");
  if (css_value) {
    {
      if (!(*css_value).is_dict()) {
        return false;
      }
      else {
        InjectionItems temp;
        if (!InjectionItems::Populate((*css_value).GetDict(), temp))
          return false;
        out.css = std::move(temp);
      }
    }
  }

  const base::Value* js_value = dict.Find("js");
  if (js_value) {
    {
      if (!(*js_value).is_dict()) {
        return false;
      }
      else {
        InjectionItems temp;
        if (!InjectionItems::Populate((*js_value).GetDict(), temp))
          return false;
        out.js = std::move(temp);
      }
    }
  }

  const base::Value* run_at_value = dict.Find("run_at");
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

  const base::Value* all_frames_value = dict.Find("all_frames");
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

  const base::Value* include_globs_value = dict.Find("include_globs");
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

  const base::Value* exclude_globs_value = dict.Find("exclude_globs");
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

  return true;
}

// static
bool ContentScriptDetails::Populate(
    const base::Value& value, ContentScriptDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ContentScriptDetails> ContentScriptDetails::FromValue(const base::Value::Dict& value) {
  ContentScriptDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ContentScriptDetails> ContentScriptDetails::FromValue(const base::Value& value) {
  ContentScriptDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ContentScriptDetails::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("name", this->name);

  to_value_result.Set("matches", json_schema_compiler::util::CreateValueFromArray(this->matches));

  if (this->exclude_matches) {
    to_value_result.Set("exclude_matches", json_schema_compiler::util::CreateValueFromArray(*this->exclude_matches));

  }
  if (this->match_about_blank) {
    to_value_result.Set("match_about_blank", *this->match_about_blank);

  }
  if (this->css) {
    to_value_result.Set("css", (this->css)->ToValue());

  }
  if (this->js) {
    to_value_result.Set("js", (this->js)->ToValue());

  }
  if (this->run_at != extensions::api::extension_types::RunAt()) {
    to_value_result.Set("run_at", extension_types::ToString(this->run_at));

  }
  if (this->all_frames) {
    to_value_result.Set("all_frames", *this->all_frames);

  }
  if (this->include_globs) {
    to_value_result.Set("include_globs", json_schema_compiler::util::CreateValueFromArray(*this->include_globs));

  }
  if (this->exclude_globs) {
    to_value_result.Set("exclude_globs", json_schema_compiler::util::CreateValueFromArray(*this->exclude_globs));

  }

  return to_value_result;
}



//
// Functions
//

namespace GetAudioState {

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
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool audible) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(audible);

  return create_results;
}
}  // namespace GetAudioState

namespace SetAudioMuted {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& mute_value = args[1];
    {
      auto temp = mute_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.mute = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetAudioMuted

namespace IsAudioMuted {

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
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool muted) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(muted);

  return create_results;
}
}  // namespace IsAudioMuted

namespace ExecuteScript {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 3) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& src_value = args[1];
    {
      auto* temp = src_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.src = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& details_value = args[2];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      if (!extensions::api::extension_types::InjectDetails::Populate(details_value.GetDict(), params.details)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const base::Value::List& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).Clone());

  return create_results;
}
}  // namespace ExecuteScript

namespace InsertCSS {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 3) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& src_value = args[1];
    {
      auto* temp = src_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.src = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& details_value = args[2];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      if (!extensions::api::extension_types::InjectDetails::Populate(details_value.GetDict(), params.details)) {
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
}  // namespace InsertCSS

namespace AddContentScripts {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& content_script_list_value = args[1];
    {
      if (!content_script_list_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(content_script_list_value.GetList(), params.content_script_list)) {
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


}  // namespace AddContentScripts

namespace RemoveContentScripts {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& script_name_list_value = args[1];
    {
      if (!script_name_list_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(script_name_list_value.GetList(), params.script_name_list)) {
          return std::nullopt;
        }
      }
    }
  }

  return params;
}


}  // namespace RemoveContentScripts

namespace SetZoom {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& zoom_factor_value = args[1];
    {
      auto temp = zoom_factor_value.GetIfDouble();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.zoom_factor = *temp;
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
}  // namespace SetZoom

namespace GetZoom {

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
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(double zoom_factor) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(zoom_factor);

  return create_results;
}
}  // namespace GetZoom

namespace SetZoomMode {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& zoom_mode_value = args[1];
    {
      const std::string* zoom_mode_as_string = zoom_mode_value.GetIfString();
      if (!zoom_mode_as_string) {
        return std::nullopt;
      }
      params.zoom_mode = ParseZoomMode(*zoom_mode_as_string);
      if (params.zoom_mode == ZoomMode()) {
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
}  // namespace SetZoomMode

namespace GetZoomMode {

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
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const ZoomMode& zoom_mode) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(web_view_internal::ToString(zoom_mode));

  return create_results;
}
}  // namespace GetZoomMode

namespace Find {

Params::Options::Options()
 {}

Params::Options::~Options() = default;
Params::Options::Options(Options&& rhs) noexcept = default;
Params::Options& Params::Options::operator=(Options&& rhs) noexcept = default;
Params::Options Params::Options::Clone() const {
  Options out;
  out.backward = backward;
  out.match_case = match_case;
  return out;
}

// static
bool Params::Options::Populate(
    const base::Value::Dict& dict, Options& out) {
  const base::Value* backward_value = dict.Find("backward");
  if (backward_value) {
    {
      auto temp = (*backward_value).GetIfBool();
      if (!temp.has_value()) {
        out.backward = std::nullopt;
        return false;
      }
      out.backward = *temp;
    }
  }

  const base::Value* match_case_value = dict.Find("matchCase");
  if (match_case_value) {
    {
      auto temp = (*match_case_value).GetIfBool();
      if (!temp.has_value()) {
        out.match_case = std::nullopt;
        return false;
      }
      out.match_case = *temp;
    }
  }

  return true;
}

// static
bool Params::Options::Populate(
    const base::Value& value, Options& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Options> Params::Options::FromValue(const base::Value::Dict& value) {
  Options out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Options> Params::Options::FromValue(const base::Value& value) {
  Options out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 2 || args.size() > 3) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& search_text_value = args[1];
    {
      auto* temp = search_text_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.search_text = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& options_value = args[2];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      else {
        Options temp;
        if (!Options::Populate(options_value.GetDict(), temp))
          return std::nullopt;
        params.options = std::move(temp);
      }
    }
  }

  return params;
}


Results::Results::SelectionRect::SelectionRect()
: left(0),
top(0),
width(0),
height(0) {}

Results::Results::SelectionRect::~SelectionRect() = default;
Results::Results::SelectionRect::SelectionRect(SelectionRect&& rhs) noexcept = default;
Results::Results::SelectionRect& Results::Results::SelectionRect::operator=(SelectionRect&& rhs) noexcept = default;
base::Value::Dict Results::Results::SelectionRect::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("left", this->left);

  to_value_result.Set("top", this->top);

  to_value_result.Set("width", this->width);

  to_value_result.Set("height", this->height);


  return to_value_result;
}



Results::Results::Results()
: number_of_matches(0),
active_match_ordinal(0),
canceled(false) {}

Results::Results::~Results() = default;
Results::Results::Results(Results&& rhs) noexcept = default;
Results::Results& Results::Results::operator=(Results&& rhs) noexcept = default;
base::Value::Dict Results::Results::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("numberOfMatches", this->number_of_matches);

  to_value_result.Set("activeMatchOrdinal", this->active_match_ordinal);

  to_value_result.Set("selectionRect", (this->selection_rect).ToValue());

  to_value_result.Set("canceled", this->canceled);


  return to_value_result;
}


base::Value::List Results::Create(const Results& results) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((results).ToValue());

  return create_results;
}
}  // namespace Find

namespace StopFinding {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return std::nullopt;
  }
  Params params;
  params.action = StopFindingAction();

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& action_value = args[1];
    {
      const std::string* stop_finding_action_as_string = action_value.GetIfString();
      if (!stop_finding_action_as_string) {
        return std::nullopt;
      }
      params.action = ParseStopFindingAction(*stop_finding_action_as_string);
      if (params.action == StopFindingAction()) {
        return std::nullopt;
      }
    }
  }

  return params;
}


}  // namespace StopFinding

namespace LoadDataWithBaseUrl {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 3 || args.size() > 4) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& data_url_value = args[1];
    {
      auto* temp = data_url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.data_url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& base_url_value = args[2];
    {
      auto* temp = base_url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.base_url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (3 < args.size() &&
      !args[3].is_none()) {
    const base::Value& virtual_url_value = args[3];
    {
      auto* temp = virtual_url_value.GetIfString();
      if (!temp) {
        params.virtual_url = std::nullopt;
        return std::nullopt;
      }
      params.virtual_url = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace LoadDataWithBaseUrl

namespace Go {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& relative_index_value = args[1];
    {
      auto temp = relative_index_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.relative_index = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace Go

namespace OverrideUserAgent {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& user_agent_override_value = args[1];
    {
      auto* temp = user_agent_override_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.user_agent_override = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace OverrideUserAgent

namespace Reload {

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
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace Reload

namespace SetAllowTransparency {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& allow_value = args[1];
    {
      auto temp = allow_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.allow = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetAllowTransparency

namespace SetAllowScaling {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& allow_value = args[1];
    {
      auto temp = allow_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.allow = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetAllowScaling

namespace SetName {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& frame_name_value = args[1];
    {
      auto* temp = frame_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.frame_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetName

namespace SetPermission {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 3 || args.size() > 4) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& request_id_value = args[1];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& action_value = args[2];
    {
      const std::string* set_permission_action_as_string = action_value.GetIfString();
      if (!set_permission_action_as_string) {
        return std::nullopt;
      }
      params.action = ParseSetPermissionAction(*set_permission_action_as_string);
      if (params.action == SetPermissionAction()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (3 < args.size() &&
      !args[3].is_none()) {
    const base::Value& user_input_value = args[3];
    {
      auto* temp = user_input_value.GetIfString();
      if (!temp) {
        params.user_input = std::nullopt;
        return std::nullopt;
      }
      params.user_input = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create(bool allowed) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(allowed);

  return create_results;
}
}  // namespace SetPermission

namespace Navigate {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& src_value = args[1];
    {
      auto* temp = src_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.src = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace Navigate

namespace Stop {

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
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace Stop

namespace Terminate {

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
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace Terminate

namespace CaptureVisibleRegion {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& options_value = args[1];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      else {
        extensions::api::extension_types::ImageDetails temp;
        if (!extensions::api::extension_types::ImageDetails::Populate(options_value.GetDict(), temp))
          return std::nullopt;
        params.options = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const std::string& data_url) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(data_url);

  return create_results;
}
}  // namespace CaptureVisibleRegion

namespace SetSpatialNavigationEnabled {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& spatial_nav_enabled_value = args[1];
    {
      auto temp = spatial_nav_enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.spatial_nav_enabled = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetSpatialNavigationEnabled

namespace IsSpatialNavigationEnabled {

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
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool spatial_nav_enabled) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(spatial_nav_enabled);

  return create_results;
}
}  // namespace IsSpatialNavigationEnabled

namespace ClearData {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 3) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& options_value = args[1];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      if (!RemovalOptions::Populate(options_value.GetDict(), params.options)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& data_to_remove_value = args[2];
    {
      if (!data_to_remove_value.is_dict()) {
        return std::nullopt;
      }
      if (!DataTypeSet::Populate(data_to_remove_value.GetDict(), params.data_to_remove)) {
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
}  // namespace ClearData

}  // namespace web_view_internal
}  // namespace api
}  // namespace extensions

