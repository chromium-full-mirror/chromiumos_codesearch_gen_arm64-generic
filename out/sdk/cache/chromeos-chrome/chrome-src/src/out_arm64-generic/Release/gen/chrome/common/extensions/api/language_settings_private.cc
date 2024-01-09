// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/language_settings_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/language_settings_private.h"

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

namespace extensions {
namespace api {
namespace language_settings_private {
//
// Types
//

const char* ToString(MoveType enum_param) {
  switch (enum_param) {
    case MoveType::kTop:
      return "TOP";
    case MoveType::kUp:
      return "UP";
    case MoveType::kDown:
      return "DOWN";
    case MoveType::kUnknown:
      return "UNKNOWN";
    case MoveType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

MoveType ParseMoveType(base::StringPiece enum_string) {
  if (enum_string == "TOP")
    return MoveType::kTop;
  if (enum_string == "UP")
    return MoveType::kUp;
  if (enum_string == "DOWN")
    return MoveType::kDown;
  if (enum_string == "UNKNOWN")
    return MoveType::kUnknown;
  return MoveType::kNone;
}

std::u16string GetMoveTypeParseError(base::StringPiece enum_string) {
  return u"expected \"TOP\" or \"UP\" or \"DOWN\" or \"UNKNOWN\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


Language::Language()
 {}

Language::~Language() = default;
Language::Language(Language&& rhs) noexcept = default;
Language& Language::operator=(Language&& rhs) noexcept = default;
Language Language::Clone() const {
  Language out;
  out.code = code;
  out.display_name = display_name;
  out.native_display_name = native_display_name;
  out.supports_ui = supports_ui;
  out.supports_spellcheck = supports_spellcheck;
  out.supports_translate = supports_translate;
  out.is_prohibited_language = is_prohibited_language;
  return out;
}

// static
bool Language::Populate(
    const base::Value::Dict& dict, Language& out) {
  const base::Value* code_value = dict.Find("code");
  if (!code_value) {
    return false;
  }
  {
    auto* temp = (*code_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.code = *temp;
  }

  const base::Value* display_name_value = dict.Find("displayName");
  if (!display_name_value) {
    return false;
  }
  {
    auto* temp = (*display_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.display_name = *temp;
  }

  const base::Value* native_display_name_value = dict.Find("nativeDisplayName");
  if (!native_display_name_value) {
    return false;
  }
  {
    auto* temp = (*native_display_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.native_display_name = *temp;
  }

  const base::Value* supports_ui_value = dict.Find("supportsUI");
  if (supports_ui_value) {
    {
      auto temp = (*supports_ui_value).GetIfBool();
      if (!temp.has_value()) {
        out.supports_ui = std::nullopt;
        return false;
      }
      out.supports_ui = *temp;
    }
  }

  const base::Value* supports_spellcheck_value = dict.Find("supportsSpellcheck");
  if (supports_spellcheck_value) {
    {
      auto temp = (*supports_spellcheck_value).GetIfBool();
      if (!temp.has_value()) {
        out.supports_spellcheck = std::nullopt;
        return false;
      }
      out.supports_spellcheck = *temp;
    }
  }

  const base::Value* supports_translate_value = dict.Find("supportsTranslate");
  if (supports_translate_value) {
    {
      auto temp = (*supports_translate_value).GetIfBool();
      if (!temp.has_value()) {
        out.supports_translate = std::nullopt;
        return false;
      }
      out.supports_translate = *temp;
    }
  }

  const base::Value* is_prohibited_language_value = dict.Find("isProhibitedLanguage");
  if (is_prohibited_language_value) {
    {
      auto temp = (*is_prohibited_language_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_prohibited_language = std::nullopt;
        return false;
      }
      out.is_prohibited_language = *temp;
    }
  }

  return true;
}

// static
bool Language::Populate(
    const base::Value& value, Language& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Language> Language::FromValue(const base::Value::Dict& value) {
  Language out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Language> Language::FromValue(const base::Value& value) {
  Language out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Language::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("code", this->code);

  to_value_result.Set("displayName", this->display_name);

  to_value_result.Set("nativeDisplayName", this->native_display_name);

  if (this->supports_ui) {
    to_value_result.Set("supportsUI", *this->supports_ui);

  }
  if (this->supports_spellcheck) {
    to_value_result.Set("supportsSpellcheck", *this->supports_spellcheck);

  }
  if (this->supports_translate) {
    to_value_result.Set("supportsTranslate", *this->supports_translate);

  }
  if (this->is_prohibited_language) {
    to_value_result.Set("isProhibitedLanguage", *this->is_prohibited_language);

  }

  return to_value_result;
}


SpellcheckDictionaryStatus::SpellcheckDictionaryStatus()
: is_ready(false) {}

SpellcheckDictionaryStatus::~SpellcheckDictionaryStatus() = default;
SpellcheckDictionaryStatus::SpellcheckDictionaryStatus(SpellcheckDictionaryStatus&& rhs) noexcept = default;
SpellcheckDictionaryStatus& SpellcheckDictionaryStatus::operator=(SpellcheckDictionaryStatus&& rhs) noexcept = default;
SpellcheckDictionaryStatus SpellcheckDictionaryStatus::Clone() const {
  SpellcheckDictionaryStatus out;
  out.language_code = language_code;
  out.is_ready = is_ready;
  out.is_downloading = is_downloading;
  out.download_failed = download_failed;
  return out;
}

// static
bool SpellcheckDictionaryStatus::Populate(
    const base::Value::Dict& dict, SpellcheckDictionaryStatus& out) {
  const base::Value* language_code_value = dict.Find("languageCode");
  if (!language_code_value) {
    return false;
  }
  {
    auto* temp = (*language_code_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.language_code = *temp;
  }

  const base::Value* is_ready_value = dict.Find("isReady");
  if (!is_ready_value) {
    return false;
  }
  {
    auto temp = (*is_ready_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_ready = *temp;
  }

  const base::Value* is_downloading_value = dict.Find("isDownloading");
  if (is_downloading_value) {
    {
      auto temp = (*is_downloading_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_downloading = std::nullopt;
        return false;
      }
      out.is_downloading = *temp;
    }
  }

  const base::Value* download_failed_value = dict.Find("downloadFailed");
  if (download_failed_value) {
    {
      auto temp = (*download_failed_value).GetIfBool();
      if (!temp.has_value()) {
        out.download_failed = std::nullopt;
        return false;
      }
      out.download_failed = *temp;
    }
  }

  return true;
}

// static
bool SpellcheckDictionaryStatus::Populate(
    const base::Value& value, SpellcheckDictionaryStatus& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SpellcheckDictionaryStatus> SpellcheckDictionaryStatus::FromValue(const base::Value::Dict& value) {
  SpellcheckDictionaryStatus out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SpellcheckDictionaryStatus> SpellcheckDictionaryStatus::FromValue(const base::Value& value) {
  SpellcheckDictionaryStatus out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SpellcheckDictionaryStatus::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("languageCode", this->language_code);

  to_value_result.Set("isReady", this->is_ready);

  if (this->is_downloading) {
    to_value_result.Set("isDownloading", *this->is_downloading);

  }
  if (this->download_failed) {
    to_value_result.Set("downloadFailed", *this->download_failed);

  }

  return to_value_result;
}


InputMethod::InputMethod()
 {}

InputMethod::~InputMethod() = default;
InputMethod::InputMethod(InputMethod&& rhs) noexcept = default;
InputMethod& InputMethod::operator=(InputMethod&& rhs) noexcept = default;
InputMethod InputMethod::Clone() const {
  InputMethod out;
  out.id = id;
  out.display_name = display_name;
  out.language_codes = language_codes;
  out.tags = tags;
  out.enabled = enabled;
  out.has_options_page = has_options_page;
  out.is_prohibited_by_policy = is_prohibited_by_policy;
  return out;
}

// static
bool InputMethod::Populate(
    const base::Value::Dict& dict, InputMethod& out) {
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

  const base::Value* display_name_value = dict.Find("displayName");
  if (!display_name_value) {
    return false;
  }
  {
    auto* temp = (*display_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.display_name = *temp;
  }

  const base::Value* language_codes_value = dict.Find("languageCodes");
  if (!language_codes_value) {
    return false;
  }
  {
    if (!(*language_codes_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*language_codes_value).GetList(), out.language_codes)) {
        return false;
      }
    }
  }

  const base::Value* tags_value = dict.Find("tags");
  if (!tags_value) {
    return false;
  }
  {
    if (!(*tags_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*tags_value).GetList(), out.tags)) {
        return false;
      }
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

  const base::Value* has_options_page_value = dict.Find("hasOptionsPage");
  if (has_options_page_value) {
    {
      auto temp = (*has_options_page_value).GetIfBool();
      if (!temp.has_value()) {
        out.has_options_page = std::nullopt;
        return false;
      }
      out.has_options_page = *temp;
    }
  }

  const base::Value* is_prohibited_by_policy_value = dict.Find("isProhibitedByPolicy");
  if (is_prohibited_by_policy_value) {
    {
      auto temp = (*is_prohibited_by_policy_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_prohibited_by_policy = std::nullopt;
        return false;
      }
      out.is_prohibited_by_policy = *temp;
    }
  }

  return true;
}

// static
bool InputMethod::Populate(
    const base::Value& value, InputMethod& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<InputMethod> InputMethod::FromValue(const base::Value::Dict& value) {
  InputMethod out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<InputMethod> InputMethod::FromValue(const base::Value& value) {
  InputMethod out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict InputMethod::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("displayName", this->display_name);

  to_value_result.Set("languageCodes", json_schema_compiler::util::CreateValueFromArray(this->language_codes));

  to_value_result.Set("tags", json_schema_compiler::util::CreateValueFromArray(this->tags));

  if (this->enabled) {
    to_value_result.Set("enabled", *this->enabled);

  }
  if (this->has_options_page) {
    to_value_result.Set("hasOptionsPage", *this->has_options_page);

  }
  if (this->is_prohibited_by_policy) {
    to_value_result.Set("isProhibitedByPolicy", *this->is_prohibited_by_policy);

  }

  return to_value_result;
}


InputMethodLists::InputMethodLists()
 {}

InputMethodLists::~InputMethodLists() = default;
InputMethodLists::InputMethodLists(InputMethodLists&& rhs) noexcept = default;
InputMethodLists& InputMethodLists::operator=(InputMethodLists&& rhs) noexcept = default;
InputMethodLists InputMethodLists::Clone() const {
  InputMethodLists out;
  out.component_extension_imes.reserve(component_extension_imes.size());
  for (const auto& element : component_extension_imes) {
    json_schema_compiler::util::AppendToContainer(out.component_extension_imes, element.Clone());
  }
  out.third_party_extension_imes.reserve(third_party_extension_imes.size());
  for (const auto& element : third_party_extension_imes) {
    json_schema_compiler::util::AppendToContainer(out.third_party_extension_imes, element.Clone());
  }
  return out;
}

// static
bool InputMethodLists::Populate(
    const base::Value::Dict& dict, InputMethodLists& out) {
  const base::Value* component_extension_imes_value = dict.Find("componentExtensionImes");
  if (!component_extension_imes_value) {
    return false;
  }
  {
    if (!(*component_extension_imes_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*component_extension_imes_value).GetList(), out.component_extension_imes)) {
        return false;
      }
    }
  }

  const base::Value* third_party_extension_imes_value = dict.Find("thirdPartyExtensionImes");
  if (!third_party_extension_imes_value) {
    return false;
  }
  {
    if (!(*third_party_extension_imes_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*third_party_extension_imes_value).GetList(), out.third_party_extension_imes)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool InputMethodLists::Populate(
    const base::Value& value, InputMethodLists& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<InputMethodLists> InputMethodLists::FromValue(const base::Value::Dict& value) {
  InputMethodLists out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<InputMethodLists> InputMethodLists::FromValue(const base::Value& value) {
  InputMethodLists out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict InputMethodLists::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("componentExtensionImes", json_schema_compiler::util::CreateValueFromArray(this->component_extension_imes));

  to_value_result.Set("thirdPartyExtensionImes", json_schema_compiler::util::CreateValueFromArray(this->third_party_extension_imes));


  return to_value_result;
}



//
// Functions
//

namespace GetLanguageList {

base::Value::List Results::Create(const std::vector<Language>& languages) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(languages));

  return create_results;
}
}  // namespace GetLanguageList

namespace EnableLanguage {

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
    const base::Value& language_code_value = args[0];
    {
      auto* temp = language_code_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.language_code = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace EnableLanguage

namespace DisableLanguage {

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
    const base::Value& language_code_value = args[0];
    {
      auto* temp = language_code_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.language_code = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace DisableLanguage

namespace SetEnableTranslationForLanguage {

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
    const base::Value& language_code_value = args[0];
    {
      auto* temp = language_code_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.language_code = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& enable_value = args[1];
    {
      auto temp = enable_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.enable = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetEnableTranslationForLanguage

namespace MoveLanguage {

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
    const base::Value& language_code_value = args[0];
    {
      auto* temp = language_code_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.language_code = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& move_type_value = args[1];
    {
      const std::string* move_type_as_string = move_type_value.GetIfString();
      if (!move_type_as_string) {
        return std::nullopt;
      }
      params.move_type = ParseMoveType(*move_type_as_string);
      if (params.move_type == MoveType()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace MoveLanguage

namespace GetAlwaysTranslateLanguages {

base::Value::List Results::Create(const std::vector<std::string>& language_codes) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(language_codes));

  return create_results;
}
}  // namespace GetAlwaysTranslateLanguages

namespace SetLanguageAlwaysTranslateState {

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
    const base::Value& language_code_value = args[0];
    {
      auto* temp = language_code_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.language_code = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& always_translate_value = args[1];
    {
      auto temp = always_translate_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.always_translate = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetLanguageAlwaysTranslateState

namespace GetNeverTranslateLanguages {

base::Value::List Results::Create(const std::vector<std::string>& language_codes) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(language_codes));

  return create_results;
}
}  // namespace GetNeverTranslateLanguages

namespace GetSpellcheckDictionaryStatuses {

base::Value::List Results::Create(const std::vector<SpellcheckDictionaryStatus>& status) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(status));

  return create_results;
}
}  // namespace GetSpellcheckDictionaryStatuses

namespace GetSpellcheckWords {

base::Value::List Results::Create(const std::vector<std::string>& words) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(words));

  return create_results;
}
}  // namespace GetSpellcheckWords

namespace AddSpellcheckWord {

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
    const base::Value& word_value = args[0];
    {
      auto* temp = word_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.word = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace AddSpellcheckWord

namespace RemoveSpellcheckWord {

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
    const base::Value& word_value = args[0];
    {
      auto* temp = word_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.word = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace RemoveSpellcheckWord

namespace GetTranslateTargetLanguage {

base::Value::List Results::Create(const std::string& language_code) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(language_code);

  return create_results;
}
}  // namespace GetTranslateTargetLanguage

namespace SetTranslateTargetLanguage {

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
    const base::Value& language_code_value = args[0];
    {
      auto* temp = language_code_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.language_code = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetTranslateTargetLanguage

namespace GetInputMethodLists {

base::Value::List Results::Create(const InputMethodLists& lists) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((lists).ToValue());

  return create_results;
}
}  // namespace GetInputMethodLists

namespace AddInputMethod {

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
    const base::Value& input_method_id_value = args[0];
    {
      auto* temp = input_method_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.input_method_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace AddInputMethod

namespace RemoveInputMethod {

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
    const base::Value& input_method_id_value = args[0];
    {
      auto* temp = input_method_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.input_method_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace RemoveInputMethod

namespace RetryDownloadDictionary {

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
    const base::Value& language_code_value = args[0];
    {
      auto* temp = language_code_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.language_code = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace RetryDownloadDictionary

//
// Events
//

namespace OnSpellcheckDictionariesChanged {

const char kEventName[] = "languageSettingsPrivate.onSpellcheckDictionariesChanged";

base::Value::List Create(const std::vector<SpellcheckDictionaryStatus>& statuses) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(statuses));

  return create_results;
}

}  // namespace OnSpellcheckDictionariesChanged

namespace OnCustomDictionaryChanged {

const char kEventName[] = "languageSettingsPrivate.onCustomDictionaryChanged";

base::Value::List Create(const std::vector<std::string>& words_added, const std::vector<std::string>& words_removed) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(words_added));

  create_results.Append(json_schema_compiler::util::CreateValueFromArray(words_removed));

  return create_results;
}

}  // namespace OnCustomDictionaryChanged

namespace OnInputMethodAdded {

const char kEventName[] = "languageSettingsPrivate.onInputMethodAdded";

base::Value::List Create(const std::string& input_method_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(input_method_id);

  return create_results;
}

}  // namespace OnInputMethodAdded

namespace OnInputMethodRemoved {

const char kEventName[] = "languageSettingsPrivate.onInputMethodRemoved";

base::Value::List Create(const std::string& input_method_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(input_method_id);

  return create_results;
}

}  // namespace OnInputMethodRemoved

}  // namespace language_settings_private
}  // namespace api
}  // namespace extensions

