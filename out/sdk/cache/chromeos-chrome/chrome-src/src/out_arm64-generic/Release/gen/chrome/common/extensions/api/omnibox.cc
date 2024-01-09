// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/omnibox.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/omnibox.h"

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
namespace omnibox {
//
// Types
//

const char* ToString(DescriptionStyleType enum_param) {
  switch (enum_param) {
    case DescriptionStyleType::kUrl:
      return "url";
    case DescriptionStyleType::kMatch:
      return "match";
    case DescriptionStyleType::kDim:
      return "dim";
    case DescriptionStyleType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DescriptionStyleType ParseDescriptionStyleType(base::StringPiece enum_string) {
  if (enum_string == "url")
    return DescriptionStyleType::kUrl;
  if (enum_string == "match")
    return DescriptionStyleType::kMatch;
  if (enum_string == "dim")
    return DescriptionStyleType::kDim;
  return DescriptionStyleType::kNone;
}

std::u16string GetDescriptionStyleTypeParseError(base::StringPiece enum_string) {
  return u"expected \"url\" or \"match\" or \"dim\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(OnInputEnteredDisposition enum_param) {
  switch (enum_param) {
    case OnInputEnteredDisposition::kCurrentTab:
      return "currentTab";
    case OnInputEnteredDisposition::kNewForegroundTab:
      return "newForegroundTab";
    case OnInputEnteredDisposition::kNewBackgroundTab:
      return "newBackgroundTab";
    case OnInputEnteredDisposition::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

OnInputEnteredDisposition ParseOnInputEnteredDisposition(base::StringPiece enum_string) {
  if (enum_string == "currentTab")
    return OnInputEnteredDisposition::kCurrentTab;
  if (enum_string == "newForegroundTab")
    return OnInputEnteredDisposition::kNewForegroundTab;
  if (enum_string == "newBackgroundTab")
    return OnInputEnteredDisposition::kNewBackgroundTab;
  return OnInputEnteredDisposition::kNone;
}

std::u16string GetOnInputEnteredDispositionParseError(base::StringPiece enum_string) {
  return u"expected \"currentTab\" or \"newForegroundTab\" or \"newBackgroundTab\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


MatchClassification::MatchClassification()
: offset(0),
type() {}

MatchClassification::~MatchClassification() = default;
MatchClassification::MatchClassification(MatchClassification&& rhs) noexcept = default;
MatchClassification& MatchClassification::operator=(MatchClassification&& rhs) noexcept = default;
MatchClassification MatchClassification::Clone() const {
  MatchClassification out;
  out.offset = offset;
  out.type = type;
  out.length = length;
  return out;
}

// static
bool MatchClassification::Populate(
    const base::Value::Dict& dict, MatchClassification& out) {
  const base::Value* offset_value = dict.Find("offset");
  if (!offset_value) {
    return false;
  }
  {
    auto temp = (*offset_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.offset = *temp;
  }

  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* description_style_type_as_string = (*type_value).GetIfString();
    if (!description_style_type_as_string) {
      return false;
    }
    out.type = ParseDescriptionStyleType(*description_style_type_as_string);
    if (out.type == DescriptionStyleType()) {
      return false;
    }
  }

  const base::Value* length_value = dict.Find("length");
  if (length_value) {
    {
      auto temp = (*length_value).GetIfInt();
      if (!temp.has_value()) {
        out.length = std::nullopt;
        return false;
      }
      out.length = *temp;
    }
  }

  return true;
}

// static
bool MatchClassification::Populate(
    const base::Value& value, MatchClassification& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<MatchClassification> MatchClassification::FromValue(const base::Value::Dict& value) {
  MatchClassification out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<MatchClassification> MatchClassification::FromValue(const base::Value& value) {
  MatchClassification out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict MatchClassification::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("offset", this->offset);

  to_value_result.Set("type", omnibox::ToString(this->type));

  if (this->length) {
    to_value_result.Set("length", *this->length);

  }

  return to_value_result;
}


SuggestResult::SuggestResult()
 {}

SuggestResult::~SuggestResult() = default;
SuggestResult::SuggestResult(SuggestResult&& rhs) noexcept = default;
SuggestResult& SuggestResult::operator=(SuggestResult&& rhs) noexcept = default;
SuggestResult SuggestResult::Clone() const {
  SuggestResult out;
  out.content = content;
  out.description = description;
  out.deletable = deletable;
  if (description_styles) {
    out.description_styles.emplace();
    out.description_styles->reserve(description_styles->size());
    for (const auto& element : *description_styles) {
      json_schema_compiler::util::AppendToContainer(*out.description_styles, element.Clone());
    }
  }
  return out;
}

// static
bool SuggestResult::Populate(
    const base::Value::Dict& dict, SuggestResult& out) {
  const base::Value* content_value = dict.Find("content");
  if (!content_value) {
    return false;
  }
  {
    auto* temp = (*content_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.content = *temp;
  }

  const base::Value* description_value = dict.Find("description");
  if (!description_value) {
    return false;
  }
  {
    auto* temp = (*description_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.description = *temp;
  }

  const base::Value* deletable_value = dict.Find("deletable");
  if (deletable_value) {
    {
      auto temp = (*deletable_value).GetIfBool();
      if (!temp.has_value()) {
        out.deletable = std::nullopt;
        return false;
      }
      out.deletable = *temp;
    }
  }

  const base::Value* description_styles_value = dict.Find("descriptionStyles");
  if (description_styles_value) {
    {
      if (!(*description_styles_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*description_styles_value).GetList(), out.description_styles)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool SuggestResult::Populate(
    const base::Value& value, SuggestResult& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SuggestResult> SuggestResult::FromValue(const base::Value::Dict& value) {
  SuggestResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SuggestResult> SuggestResult::FromValue(const base::Value& value) {
  SuggestResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SuggestResult::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("content", this->content);

  to_value_result.Set("description", this->description);

  if (this->deletable) {
    to_value_result.Set("deletable", *this->deletable);

  }
  if (this->description_styles) {
    to_value_result.Set("descriptionStyles", json_schema_compiler::util::CreateValueFromArray(*this->description_styles));

  }

  return to_value_result;
}


DefaultSuggestResult::DefaultSuggestResult()
 {}

DefaultSuggestResult::~DefaultSuggestResult() = default;
DefaultSuggestResult::DefaultSuggestResult(DefaultSuggestResult&& rhs) noexcept = default;
DefaultSuggestResult& DefaultSuggestResult::operator=(DefaultSuggestResult&& rhs) noexcept = default;
DefaultSuggestResult DefaultSuggestResult::Clone() const {
  DefaultSuggestResult out;
  out.description = description;
  if (description_styles) {
    out.description_styles.emplace();
    out.description_styles->reserve(description_styles->size());
    for (const auto& element : *description_styles) {
      json_schema_compiler::util::AppendToContainer(*out.description_styles, element.Clone());
    }
  }
  return out;
}

// static
bool DefaultSuggestResult::Populate(
    const base::Value::Dict& dict, DefaultSuggestResult& out) {
  const base::Value* description_value = dict.Find("description");
  if (!description_value) {
    return false;
  }
  {
    auto* temp = (*description_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.description = *temp;
  }

  const base::Value* description_styles_value = dict.Find("descriptionStyles");
  if (description_styles_value) {
    {
      if (!(*description_styles_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*description_styles_value).GetList(), out.description_styles)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool DefaultSuggestResult::Populate(
    const base::Value& value, DefaultSuggestResult& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DefaultSuggestResult> DefaultSuggestResult::FromValue(const base::Value::Dict& value) {
  DefaultSuggestResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DefaultSuggestResult> DefaultSuggestResult::FromValue(const base::Value& value) {
  DefaultSuggestResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DefaultSuggestResult::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("description", this->description);

  if (this->description_styles) {
    to_value_result.Set("descriptionStyles", json_schema_compiler::util::CreateValueFromArray(*this->description_styles));

  }

  return to_value_result;
}



//
// Manifest Keys
//

ManifestKeys::Omnibox::Omnibox()
 {}

ManifestKeys::Omnibox::~Omnibox() = default;
ManifestKeys::Omnibox::Omnibox(Omnibox&& rhs) noexcept = default;
ManifestKeys::Omnibox& ManifestKeys::Omnibox::operator=(Omnibox&& rhs) noexcept = default;
// static
constexpr char ManifestKeys::Omnibox::kKeyword[];

//static
bool ManifestKeys::Omnibox::ParseFromDictionary(
const base::Value::Dict& root_dict, base::StringPiece key, Omnibox& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed) {

  const base::Value* value = ::json_schema_compiler::manifest_parse_util::FindKeyOfType(root_dict, key, base::Value::Type::DICT, error, error_path_reversed);
  if (!value)
    return false;
  const base::Value::Dict& dict = value->GetDict();
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kKeyword, out.keyword, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  return true;
}



ManifestKeys::ManifestKeys()
 {}

ManifestKeys::~ManifestKeys() = default;
ManifestKeys::ManifestKeys(ManifestKeys&& rhs) noexcept = default;
ManifestKeys& ManifestKeys::operator=(ManifestKeys&& rhs) noexcept = default;
// static
constexpr char ManifestKeys::kOmnibox[];

//static
bool ManifestKeys::ParseFromDictionary(
const base::Value::Dict& root_dict, ManifestKeys& out, std::u16string& error) {

  std::vector<base::StringPiece> error_path_reversed;
  const base::Value::Dict& dict = root_dict;
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kOmnibox, out.omnibox, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  return true;
}


//
// Functions
//

namespace SendSuggestions {

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
    const base::Value& request_id_value = args[0];
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

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& suggest_results_value = args[1];
    {
      if (!suggest_results_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(suggest_results_value.GetList(), params.suggest_results)) {
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


}  // namespace SendSuggestions

namespace SetDefaultSuggestion {

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
    const base::Value& suggestion_value = args[0];
    {
      if (!suggestion_value.is_dict()) {
        return std::nullopt;
      }
      if (!DefaultSuggestResult::Populate(suggestion_value.GetDict(), params.suggestion)) {
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
}  // namespace SetDefaultSuggestion

//
// Events
//

namespace OnInputStarted {

const char kEventName[] = "omnibox.onInputStarted";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnInputStarted

namespace OnInputChanged {

const char kEventName[] = "omnibox.onInputChanged";

base::Value::List Create(const std::string& text) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(text);

  return create_results;
}

}  // namespace OnInputChanged

namespace OnInputEntered {

const char kEventName[] = "omnibox.onInputEntered";

base::Value::List Create(const std::string& text, const OnInputEnteredDisposition& disposition) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(text);

  create_results.Append(omnibox::ToString(disposition));

  return create_results;
}

}  // namespace OnInputEntered

namespace OnInputCancelled {

const char kEventName[] = "omnibox.onInputCancelled";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnInputCancelled

namespace OnDeleteSuggestion {

const char kEventName[] = "omnibox.onDeleteSuggestion";

base::Value::List Create(const std::string& text) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(text);

  return create_results;
}

}  // namespace OnDeleteSuggestion

}  // namespace omnibox
}  // namespace api
}  // namespace extensions

