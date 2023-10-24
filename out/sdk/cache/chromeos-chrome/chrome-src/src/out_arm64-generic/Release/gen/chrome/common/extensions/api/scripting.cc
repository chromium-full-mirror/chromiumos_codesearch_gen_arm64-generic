// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/scripting.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/scripting.h"

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
#include "extensions/common/api/extension_types.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace scripting {
//
// Types
//

const char* ToString(StyleOrigin enum_param) {
  switch (enum_param) {
    case STYLE_ORIGIN_AUTHOR:
      return "AUTHOR";
    case STYLE_ORIGIN_USER:
      return "USER";
    case STYLE_ORIGIN_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

StyleOrigin ParseStyleOrigin(base::StringPiece enum_string) {
  if (enum_string == "AUTHOR")
    return STYLE_ORIGIN_AUTHOR;
  if (enum_string == "USER")
    return STYLE_ORIGIN_USER;
  return STYLE_ORIGIN_NONE;
}

std::u16string GetStyleOriginParseError(base::StringPiece enum_string) {
  return u"expected \"AUTHOR\" or \"USER\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ExecutionWorld enum_param) {
  switch (enum_param) {
    case EXECUTION_WORLD_ISOLATED:
      return "ISOLATED";
    case EXECUTION_WORLD_MAIN:
      return "MAIN";
    case EXECUTION_WORLD_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

ExecutionWorld ParseExecutionWorld(base::StringPiece enum_string) {
  if (enum_string == "ISOLATED")
    return EXECUTION_WORLD_ISOLATED;
  if (enum_string == "MAIN")
    return EXECUTION_WORLD_MAIN;
  return EXECUTION_WORLD_NONE;
}

std::u16string GetExecutionWorldParseError(base::StringPiece enum_string) {
  return u"expected \"ISOLATED\" or \"MAIN\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


InjectionTarget::InjectionTarget()
: tab_id(0) {}

InjectionTarget::~InjectionTarget() = default;
InjectionTarget::InjectionTarget(InjectionTarget&& rhs) = default;
InjectionTarget& InjectionTarget::operator=(InjectionTarget&& rhs) = default;
InjectionTarget InjectionTarget::Clone() const {
  InjectionTarget out;
  out.tab_id = tab_id;
  out.frame_ids = frame_ids;
  out.document_ids = document_ids;
  out.all_frames = all_frames;
  return out;
}

// static
bool InjectionTarget::Populate(
    const base::Value::Dict& dict, InjectionTarget& out) {
  const base::Value* tab_id_value = dict.Find("tabId");
  if (!tab_id_value) {
    return false;
  }
  {
    auto temp = (*tab_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.tab_id = *temp;
  }

  const base::Value* frame_ids_value = dict.Find("frameIds");
  if (frame_ids_value) {
    {
      if (!(*frame_ids_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*frame_ids_value).GetList(), out.frame_ids)) {
          return false;
        }
      }
    }
  }

  const base::Value* document_ids_value = dict.Find("documentIds");
  if (document_ids_value) {
    {
      if (!(*document_ids_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*document_ids_value).GetList(), out.document_ids)) {
          return false;
        }
      }
    }
  }

  const base::Value* all_frames_value = dict.Find("allFrames");
  if (all_frames_value) {
    {
      auto temp = (*all_frames_value).GetIfBool();
      if (!temp.has_value()) {
        out.all_frames = absl::nullopt;
        return false;
      }
      out.all_frames = *temp;
    }
  }

  return true;
}

// static
bool InjectionTarget::Populate(
    const base::Value& value, InjectionTarget& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<InjectionTarget> InjectionTarget::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<InjectionTarget>();
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
absl::optional<InjectionTarget> InjectionTarget::FromValue(const base::Value::Dict& value) {
  InjectionTarget out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<InjectionTarget> InjectionTarget::FromValue(const base::Value& value) {
  InjectionTarget out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict InjectionTarget::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("tabId", this->tab_id);

  if (this->frame_ids) {
    to_value_result.Set("frameIds", json_schema_compiler::util::CreateValueFromArray(*this->frame_ids));

  }
  if (this->document_ids) {
    to_value_result.Set("documentIds", json_schema_compiler::util::CreateValueFromArray(*this->document_ids));

  }
  if (this->all_frames) {
    to_value_result.Set("allFrames", *this->all_frames);

  }

  return to_value_result;
}


ScriptInjection::ScriptInjection()
: world() {}

ScriptInjection::~ScriptInjection() = default;
ScriptInjection::ScriptInjection(ScriptInjection&& rhs) = default;
ScriptInjection& ScriptInjection::operator=(ScriptInjection&& rhs) = default;
ScriptInjection ScriptInjection::Clone() const {
  ScriptInjection out;
  out.func = func;
  if (args) {
    out.args.emplace();
    out.args->reserve(args->size());
    for (const auto& element : *args) {
      json_schema_compiler::util::AppendToContainer(*out.args, element.Clone());
    }
  }
  out.function = function;
  out.files = files;
  out.target = target.Clone();
  out.world = world;
  out.inject_immediately = inject_immediately;
  return out;
}

// static
bool ScriptInjection::Populate(
    const base::Value::Dict& dict, ScriptInjection& out) {
  out.world = ExecutionWorld();
  const base::Value* func_value = dict.Find("func");
  if (func_value) {
    {
      auto* temp = (*func_value).GetIfString();
      if (!temp) {
        out.func = absl::nullopt;
        return false;
      }
      out.func = *temp;
    }
  }

  const base::Value* args_value = dict.Find("args");
  if (args_value) {
    {
      if (!(*args_value).is_list()) {
        return false;
      }
      else {
        out.args = (*args_value).GetList().Clone();
      }
    }
  }

  const base::Value* function_value = dict.Find("function");
  if (function_value) {
    {
      auto* temp = (*function_value).GetIfString();
      if (!temp) {
        out.function = absl::nullopt;
        return false;
      }
      out.function = *temp;
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

  const base::Value* target_value = dict.Find("target");
  if (!target_value) {
    return false;
  }
  {
    if (!(*target_value).is_dict()) {
      return false;
    }
    if (!InjectionTarget::Populate((*target_value).GetDict(), out.target)) {
      return false;
    }
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

  const base::Value* inject_immediately_value = dict.Find("injectImmediately");
  if (inject_immediately_value) {
    {
      auto temp = (*inject_immediately_value).GetIfBool();
      if (!temp.has_value()) {
        out.inject_immediately = absl::nullopt;
        return false;
      }
      out.inject_immediately = *temp;
    }
  }

  return true;
}

// static
bool ScriptInjection::Populate(
    const base::Value& value, ScriptInjection& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ScriptInjection> ScriptInjection::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ScriptInjection>();
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
absl::optional<ScriptInjection> ScriptInjection::FromValue(const base::Value::Dict& value) {
  ScriptInjection out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ScriptInjection> ScriptInjection::FromValue(const base::Value& value) {
  ScriptInjection out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ScriptInjection::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->func) {
    to_value_result.Set("func", *this->func);

  }
  if (this->args) {
    to_value_result.Set("args", (*this->args).Clone());

  }
  if (this->function) {
    to_value_result.Set("function", *this->function);

  }
  if (this->files) {
    to_value_result.Set("files", json_schema_compiler::util::CreateValueFromArray(*this->files));

  }
  to_value_result.Set("target", (this->target).ToValue());

  if (this->world != ExecutionWorld()) {
    to_value_result.Set("world", scripting::ToString(this->world));

  }
  if (this->inject_immediately) {
    to_value_result.Set("injectImmediately", *this->inject_immediately);

  }

  return to_value_result;
}


CSSInjection::CSSInjection()
: origin() {}

CSSInjection::~CSSInjection() = default;
CSSInjection::CSSInjection(CSSInjection&& rhs) = default;
CSSInjection& CSSInjection::operator=(CSSInjection&& rhs) = default;
CSSInjection CSSInjection::Clone() const {
  CSSInjection out;
  out.target = target.Clone();
  out.css = css;
  out.files = files;
  out.origin = origin;
  return out;
}

// static
bool CSSInjection::Populate(
    const base::Value::Dict& dict, CSSInjection& out) {
  out.origin = StyleOrigin();
  const base::Value* target_value = dict.Find("target");
  if (!target_value) {
    return false;
  }
  {
    if (!(*target_value).is_dict()) {
      return false;
    }
    if (!InjectionTarget::Populate((*target_value).GetDict(), out.target)) {
      return false;
    }
  }

  const base::Value* css_value = dict.Find("css");
  if (css_value) {
    {
      auto* temp = (*css_value).GetIfString();
      if (!temp) {
        out.css = absl::nullopt;
        return false;
      }
      out.css = *temp;
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

  const base::Value* origin_value = dict.Find("origin");
  if (origin_value) {
    {
      const std::string* style_origin_as_string = (*origin_value).GetIfString();
      if (!style_origin_as_string) {
        return false;
      }
      out.origin = ParseStyleOrigin(*style_origin_as_string);
      if (out.origin == StyleOrigin()) {
        return false;
      }
    }
    } else {
    out.origin = StyleOrigin();
  }

  return true;
}

// static
bool CSSInjection::Populate(
    const base::Value& value, CSSInjection& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<CSSInjection> CSSInjection::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<CSSInjection>();
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
absl::optional<CSSInjection> CSSInjection::FromValue(const base::Value::Dict& value) {
  CSSInjection out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CSSInjection> CSSInjection::FromValue(const base::Value& value) {
  CSSInjection out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict CSSInjection::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("target", (this->target).ToValue());

  if (this->css) {
    to_value_result.Set("css", *this->css);

  }
  if (this->files) {
    to_value_result.Set("files", json_schema_compiler::util::CreateValueFromArray(*this->files));

  }
  if (this->origin != StyleOrigin()) {
    to_value_result.Set("origin", scripting::ToString(this->origin));

  }

  return to_value_result;
}


InjectionResult::InjectionResult()
: frame_id(0) {}

InjectionResult::~InjectionResult() = default;
InjectionResult::InjectionResult(InjectionResult&& rhs) = default;
InjectionResult& InjectionResult::operator=(InjectionResult&& rhs) = default;
InjectionResult InjectionResult::Clone() const {
  InjectionResult out;
  if (result) {
    out.result = result->Clone();
  }
  out.frame_id = frame_id;
  out.document_id = document_id;
  return out;
}

// static
bool InjectionResult::Populate(
    const base::Value::Dict& dict, InjectionResult& out) {
  const base::Value* result_value = dict.Find("result");
  if (result_value) {
    {
      out.result = (*result_value).Clone();
    }
  }

  const base::Value* frame_id_value = dict.Find("frameId");
  if (!frame_id_value) {
    return false;
  }
  {
    auto temp = (*frame_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.frame_id = *temp;
  }

  const base::Value* document_id_value = dict.Find("documentId");
  if (!document_id_value) {
    return false;
  }
  {
    auto* temp = (*document_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.document_id = *temp;
  }

  return true;
}

// static
bool InjectionResult::Populate(
    const base::Value& value, InjectionResult& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<InjectionResult> InjectionResult::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<InjectionResult>();
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
absl::optional<InjectionResult> InjectionResult::FromValue(const base::Value::Dict& value) {
  InjectionResult out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<InjectionResult> InjectionResult::FromValue(const base::Value& value) {
  InjectionResult out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict InjectionResult::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->result) {
    to_value_result.Set("result", (this->result)->Clone());

  }
  to_value_result.Set("frameId", this->frame_id);

  to_value_result.Set("documentId", this->document_id);


  return to_value_result;
}


RegisteredContentScript::RegisteredContentScript()
: run_at(),
world() {}

RegisteredContentScript::~RegisteredContentScript() = default;
RegisteredContentScript::RegisteredContentScript(RegisteredContentScript&& rhs) = default;
RegisteredContentScript& RegisteredContentScript::operator=(RegisteredContentScript&& rhs) = default;
RegisteredContentScript RegisteredContentScript::Clone() const {
  RegisteredContentScript out;
  out.id = id;
  out.matches = matches;
  out.exclude_matches = exclude_matches;
  out.css = css;
  out.js = js;
  out.all_frames = all_frames;
  out.match_origin_as_fallback = match_origin_as_fallback;
  out.run_at = run_at;
  out.persist_across_sessions = persist_across_sessions;
  out.world = world;
  return out;
}

// static
bool RegisteredContentScript::Populate(
    const base::Value::Dict& dict, RegisteredContentScript& out) {
  out.run_at = extension_types::RunAt();
  out.world = ExecutionWorld();
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

  const base::Value* all_frames_value = dict.Find("allFrames");
  if (all_frames_value) {
    {
      auto temp = (*all_frames_value).GetIfBool();
      if (!temp.has_value()) {
        out.all_frames = absl::nullopt;
        return false;
      }
      out.all_frames = *temp;
    }
  }

  const base::Value* match_origin_as_fallback_value = dict.Find("matchOriginAsFallback");
  if (match_origin_as_fallback_value) {
    {
      auto temp = (*match_origin_as_fallback_value).GetIfBool();
      if (!temp.has_value()) {
        out.match_origin_as_fallback = absl::nullopt;
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
      out.run_at = extension_types::ParseRunAt(*run_at_as_string);
      if (out.run_at == extension_types::RunAt()) {
        return false;
      }
    }
    } else {
    out.run_at = extension_types::RunAt();
  }

  const base::Value* persist_across_sessions_value = dict.Find("persistAcrossSessions");
  if (persist_across_sessions_value) {
    {
      auto temp = (*persist_across_sessions_value).GetIfBool();
      if (!temp.has_value()) {
        out.persist_across_sessions = absl::nullopt;
        return false;
      }
      out.persist_across_sessions = *temp;
    }
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
bool RegisteredContentScript::Populate(
    const base::Value& value, RegisteredContentScript& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<RegisteredContentScript> RegisteredContentScript::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<RegisteredContentScript>();
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
absl::optional<RegisteredContentScript> RegisteredContentScript::FromValue(const base::Value::Dict& value) {
  RegisteredContentScript out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<RegisteredContentScript> RegisteredContentScript::FromValue(const base::Value& value) {
  RegisteredContentScript out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict RegisteredContentScript::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  if (this->matches) {
    to_value_result.Set("matches", json_schema_compiler::util::CreateValueFromArray(*this->matches));

  }
  if (this->exclude_matches) {
    to_value_result.Set("excludeMatches", json_schema_compiler::util::CreateValueFromArray(*this->exclude_matches));

  }
  if (this->css) {
    to_value_result.Set("css", json_schema_compiler::util::CreateValueFromArray(*this->css));

  }
  if (this->js) {
    to_value_result.Set("js", json_schema_compiler::util::CreateValueFromArray(*this->js));

  }
  if (this->all_frames) {
    to_value_result.Set("allFrames", *this->all_frames);

  }
  if (this->match_origin_as_fallback) {
    to_value_result.Set("matchOriginAsFallback", *this->match_origin_as_fallback);

  }
  if (this->run_at != extension_types::RunAt()) {
    to_value_result.Set("runAt", extension_types::ToString(this->run_at));

  }
  if (this->persist_across_sessions) {
    to_value_result.Set("persistAcrossSessions", *this->persist_across_sessions);

  }
  if (this->world != ExecutionWorld()) {
    to_value_result.Set("world", scripting::ToString(this->world));

  }

  return to_value_result;
}


ContentScriptFilter::ContentScriptFilter()
 {}

ContentScriptFilter::~ContentScriptFilter() = default;
ContentScriptFilter::ContentScriptFilter(ContentScriptFilter&& rhs) = default;
ContentScriptFilter& ContentScriptFilter::operator=(ContentScriptFilter&& rhs) = default;
ContentScriptFilter ContentScriptFilter::Clone() const {
  ContentScriptFilter out;
  out.ids = ids;
  return out;
}

// static
bool ContentScriptFilter::Populate(
    const base::Value::Dict& dict, ContentScriptFilter& out) {
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
bool ContentScriptFilter::Populate(
    const base::Value& value, ContentScriptFilter& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ContentScriptFilter> ContentScriptFilter::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ContentScriptFilter>();
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
absl::optional<ContentScriptFilter> ContentScriptFilter::FromValue(const base::Value::Dict& value) {
  ContentScriptFilter out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ContentScriptFilter> ContentScriptFilter::FromValue(const base::Value& value) {
  ContentScriptFilter out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ContentScriptFilter::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->ids) {
    to_value_result.Set("ids", json_schema_compiler::util::CreateValueFromArray(*this->ids));

  }

  return to_value_result;
}



//
// Functions
//

namespace ExecuteScript {

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
    const base::Value& injection_value = args[0];
    {
      if (!injection_value.is_dict()) {
        return absl::nullopt;
      }
      if (!ScriptInjection::Populate(injection_value.GetDict(), params.injection)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<InjectionResult>& results) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(results));

  return create_results;
}
}  // namespace ExecuteScript

namespace InsertCSS {

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
    const base::Value& injection_value = args[0];
    {
      if (!injection_value.is_dict()) {
        return absl::nullopt;
      }
      if (!CSSInjection::Populate(injection_value.GetDict(), params.injection)) {
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
}  // namespace InsertCSS

namespace RemoveCSS {

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
    const base::Value& injection_value = args[0];
    {
      if (!injection_value.is_dict()) {
        return absl::nullopt;
      }
      if (!CSSInjection::Populate(injection_value.GetDict(), params.injection)) {
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
}  // namespace RemoveCSS

namespace RegisterContentScripts {

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
    const base::Value& scripts_value = args[0];
    {
      if (!scripts_value.is_list()) {
        return absl::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(scripts_value.GetList(), params.scripts)) {
          return absl::nullopt;
        }
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
}  // namespace RegisterContentScripts

namespace GetRegisteredContentScripts {

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
    const base::Value& filter_value = args[0];
    {
      if (!filter_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        ContentScriptFilter temp;
        if (!ContentScriptFilter::Populate(filter_value.GetDict(), temp))
          return absl::nullopt;
        params.filter = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const std::vector<RegisteredContentScript>& scripts) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(scripts));

  return create_results;
}
}  // namespace GetRegisteredContentScripts

namespace UnregisterContentScripts {

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
    const base::Value& filter_value = args[0];
    {
      if (!filter_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        ContentScriptFilter temp;
        if (!ContentScriptFilter::Populate(filter_value.GetDict(), temp))
          return absl::nullopt;
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
}  // namespace UnregisterContentScripts

namespace UpdateContentScripts {

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
    const base::Value& scripts_value = args[0];
    {
      if (!scripts_value.is_list()) {
        return absl::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(scripts_value.GetList(), params.scripts)) {
          return absl::nullopt;
        }
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
}  // namespace UpdateContentScripts

}  // namespace scripting
}  // namespace api
}  // namespace extensions

