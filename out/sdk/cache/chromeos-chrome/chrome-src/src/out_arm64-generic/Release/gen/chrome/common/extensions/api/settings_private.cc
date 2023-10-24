// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/settings_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/settings_private.h"

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
namespace settings_private {
//
// Types
//

const char* ToString(PrefType enum_param) {
  switch (enum_param) {
    case PREF_TYPE_BOOLEAN:
      return "BOOLEAN";
    case PREF_TYPE_NUMBER:
      return "NUMBER";
    case PREF_TYPE_STRING:
      return "STRING";
    case PREF_TYPE_URL:
      return "URL";
    case PREF_TYPE_LIST:
      return "LIST";
    case PREF_TYPE_DICTIONARY:
      return "DICTIONARY";
    case PREF_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

PrefType ParsePrefType(base::StringPiece enum_string) {
  if (enum_string == "BOOLEAN")
    return PREF_TYPE_BOOLEAN;
  if (enum_string == "NUMBER")
    return PREF_TYPE_NUMBER;
  if (enum_string == "STRING")
    return PREF_TYPE_STRING;
  if (enum_string == "URL")
    return PREF_TYPE_URL;
  if (enum_string == "LIST")
    return PREF_TYPE_LIST;
  if (enum_string == "DICTIONARY")
    return PREF_TYPE_DICTIONARY;
  return PREF_TYPE_NONE;
}

std::u16string GetPrefTypeParseError(base::StringPiece enum_string) {
  return u"expected \"BOOLEAN\" or \"NUMBER\" or \"STRING\" or \"URL\" or \"LIST\" or \"DICTIONARY\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ControlledBy enum_param) {
  switch (enum_param) {
    case CONTROLLED_BY_DEVICE_POLICY:
      return "DEVICE_POLICY";
    case CONTROLLED_BY_USER_POLICY:
      return "USER_POLICY";
    case CONTROLLED_BY_OWNER:
      return "OWNER";
    case CONTROLLED_BY_PRIMARY_USER:
      return "PRIMARY_USER";
    case CONTROLLED_BY_EXTENSION:
      return "EXTENSION";
    case CONTROLLED_BY_PARENT:
      return "PARENT";
    case CONTROLLED_BY_CHILD_RESTRICTION:
      return "CHILD_RESTRICTION";
    case CONTROLLED_BY_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

ControlledBy ParseControlledBy(base::StringPiece enum_string) {
  if (enum_string == "DEVICE_POLICY")
    return CONTROLLED_BY_DEVICE_POLICY;
  if (enum_string == "USER_POLICY")
    return CONTROLLED_BY_USER_POLICY;
  if (enum_string == "OWNER")
    return CONTROLLED_BY_OWNER;
  if (enum_string == "PRIMARY_USER")
    return CONTROLLED_BY_PRIMARY_USER;
  if (enum_string == "EXTENSION")
    return CONTROLLED_BY_EXTENSION;
  if (enum_string == "PARENT")
    return CONTROLLED_BY_PARENT;
  if (enum_string == "CHILD_RESTRICTION")
    return CONTROLLED_BY_CHILD_RESTRICTION;
  return CONTROLLED_BY_NONE;
}

std::u16string GetControlledByParseError(base::StringPiece enum_string) {
  return u"expected \"DEVICE_POLICY\" or \"USER_POLICY\" or \"OWNER\" or \"PRIMARY_USER\" or \"EXTENSION\" or \"PARENT\" or \"CHILD_RESTRICTION\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(Enforcement enum_param) {
  switch (enum_param) {
    case ENFORCEMENT_ENFORCED:
      return "ENFORCED";
    case ENFORCEMENT_RECOMMENDED:
      return "RECOMMENDED";
    case ENFORCEMENT_PARENT_SUPERVISED:
      return "PARENT_SUPERVISED";
    case ENFORCEMENT_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

Enforcement ParseEnforcement(base::StringPiece enum_string) {
  if (enum_string == "ENFORCED")
    return ENFORCEMENT_ENFORCED;
  if (enum_string == "RECOMMENDED")
    return ENFORCEMENT_RECOMMENDED;
  if (enum_string == "PARENT_SUPERVISED")
    return ENFORCEMENT_PARENT_SUPERVISED;
  return ENFORCEMENT_NONE;
}

std::u16string GetEnforcementParseError(base::StringPiece enum_string) {
  return u"expected \"ENFORCED\" or \"RECOMMENDED\" or \"PARENT_SUPERVISED\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


PrefObject::PrefObject()
: type(),
controlled_by(),
enforcement() {}

PrefObject::~PrefObject() = default;
PrefObject::PrefObject(PrefObject&& rhs) = default;
PrefObject& PrefObject::operator=(PrefObject&& rhs) = default;
PrefObject PrefObject::Clone() const {
  PrefObject out;
  out.key = key;
  out.type = type;
  if (value) {
    out.value = value->Clone();
  }
  out.controlled_by = controlled_by;
  out.controlled_by_name = controlled_by_name;
  out.enforcement = enforcement;
  if (recommended_value) {
    out.recommended_value = recommended_value->Clone();
  }
  if (user_selectable_values) {
    out.user_selectable_values.emplace();
    out.user_selectable_values->reserve(user_selectable_values->size());
    for (const auto& element : *user_selectable_values) {
      json_schema_compiler::util::AppendToContainer(*out.user_selectable_values, element.Clone());
    }
  }
  out.user_control_disabled = user_control_disabled;
  out.extension_id = extension_id;
  out.extension_can_be_disabled = extension_can_be_disabled;
  return out;
}

// static
bool PrefObject::Populate(
    const base::Value::Dict& dict, PrefObject& out) {
  out.controlled_by = ControlledBy();
  out.enforcement = Enforcement();
  const base::Value* key_value = dict.Find("key");
  if (!key_value) {
    return false;
  }
  {
    auto* temp = (*key_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.key = *temp;
  }

  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* pref_type_as_string = (*type_value).GetIfString();
    if (!pref_type_as_string) {
      return false;
    }
    out.type = ParsePrefType(*pref_type_as_string);
    if (out.type == PrefType()) {
      return false;
    }
  }

  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    {
      out.value = (*value_value).Clone();
    }
  }

  const base::Value* controlled_by_value = dict.Find("controlledBy");
  if (controlled_by_value) {
    {
      const std::string* controlled_by_as_string = (*controlled_by_value).GetIfString();
      if (!controlled_by_as_string) {
        return false;
      }
      out.controlled_by = ParseControlledBy(*controlled_by_as_string);
      if (out.controlled_by == ControlledBy()) {
        return false;
      }
    }
    } else {
    out.controlled_by = ControlledBy();
  }

  const base::Value* controlled_by_name_value = dict.Find("controlledByName");
  if (controlled_by_name_value) {
    {
      auto* temp = (*controlled_by_name_value).GetIfString();
      if (!temp) {
        out.controlled_by_name = absl::nullopt;
        return false;
      }
      out.controlled_by_name = *temp;
    }
  }

  const base::Value* enforcement_value = dict.Find("enforcement");
  if (enforcement_value) {
    {
      const std::string* enforcement_as_string = (*enforcement_value).GetIfString();
      if (!enforcement_as_string) {
        return false;
      }
      out.enforcement = ParseEnforcement(*enforcement_as_string);
      if (out.enforcement == Enforcement()) {
        return false;
      }
    }
    } else {
    out.enforcement = Enforcement();
  }

  const base::Value* recommended_value_value = dict.Find("recommendedValue");
  if (recommended_value_value) {
    {
      out.recommended_value = (*recommended_value_value).Clone();
    }
  }

  const base::Value* user_selectable_values_value = dict.Find("userSelectableValues");
  if (user_selectable_values_value) {
    {
      if (!(*user_selectable_values_value).is_list()) {
        return false;
      }
      else {
        out.user_selectable_values = (*user_selectable_values_value).GetList().Clone();
      }
    }
  }

  const base::Value* user_control_disabled_value = dict.Find("userControlDisabled");
  if (user_control_disabled_value) {
    {
      auto temp = (*user_control_disabled_value).GetIfBool();
      if (!temp.has_value()) {
        out.user_control_disabled = absl::nullopt;
        return false;
      }
      out.user_control_disabled = *temp;
    }
  }

  const base::Value* extension_id_value = dict.Find("extensionId");
  if (extension_id_value) {
    {
      auto* temp = (*extension_id_value).GetIfString();
      if (!temp) {
        out.extension_id = absl::nullopt;
        return false;
      }
      out.extension_id = *temp;
    }
  }

  const base::Value* extension_can_be_disabled_value = dict.Find("extensionCanBeDisabled");
  if (extension_can_be_disabled_value) {
    {
      auto temp = (*extension_can_be_disabled_value).GetIfBool();
      if (!temp.has_value()) {
        out.extension_can_be_disabled = absl::nullopt;
        return false;
      }
      out.extension_can_be_disabled = *temp;
    }
  }

  return true;
}

// static
bool PrefObject::Populate(
    const base::Value& value, PrefObject& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<PrefObject> PrefObject::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<PrefObject>();
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
absl::optional<PrefObject> PrefObject::FromValue(const base::Value::Dict& value) {
  PrefObject out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<PrefObject> PrefObject::FromValue(const base::Value& value) {
  PrefObject out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict PrefObject::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("key", this->key);

  to_value_result.Set("type", settings_private::ToString(this->type));

  if (this->value) {
    to_value_result.Set("value", (this->value)->Clone());

  }
  if (this->controlled_by != ControlledBy()) {
    to_value_result.Set("controlledBy", settings_private::ToString(this->controlled_by));

  }
  if (this->controlled_by_name) {
    to_value_result.Set("controlledByName", *this->controlled_by_name);

  }
  if (this->enforcement != Enforcement()) {
    to_value_result.Set("enforcement", settings_private::ToString(this->enforcement));

  }
  if (this->recommended_value) {
    to_value_result.Set("recommendedValue", (this->recommended_value)->Clone());

  }
  if (this->user_selectable_values) {
    to_value_result.Set("userSelectableValues", (*this->user_selectable_values).Clone());

  }
  if (this->user_control_disabled) {
    to_value_result.Set("userControlDisabled", *this->user_control_disabled);

  }
  if (this->extension_id) {
    to_value_result.Set("extensionId", *this->extension_id);

  }
  if (this->extension_can_be_disabled) {
    to_value_result.Set("extensionCanBeDisabled", *this->extension_can_be_disabled);

  }

  return to_value_result;
}



//
// Functions
//

namespace SetPref {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 2 || args.size() > 3) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& name_value = args[0];
    {
      auto* temp = name_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.name = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& value_value = args[1];
    {
      params.value = value_value.Clone();
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& page_id_value = args[2];
    {
      auto* temp = page_id_value.GetIfString();
      if (!temp) {
        params.page_id = absl::nullopt;
        return absl::nullopt;
      }
      params.page_id = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create(bool success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace SetPref

namespace GetAllPrefs {

base::Value::List Results::Create(const std::vector<PrefObject>& prefs) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(prefs));

  return create_results;
}
}  // namespace GetAllPrefs

namespace GetPref {

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
    const base::Value& name_value = args[0];
    {
      auto* temp = name_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.name = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const PrefObject& pref) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((pref).ToValue());

  return create_results;
}
}  // namespace GetPref

namespace GetDefaultZoom {

base::Value::List Results::Create(double zoom) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(zoom);

  return create_results;
}
}  // namespace GetDefaultZoom

namespace SetDefaultZoom {

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
    const base::Value& zoom_value = args[0];
    {
      auto temp = zoom_value.GetIfDouble();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.zoom = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace SetDefaultZoom

//
// Events
//

namespace OnPrefsChanged {

const char kEventName[] = "settingsPrivate.onPrefsChanged";

base::Value::List Create(const std::vector<PrefObject>& prefs) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(prefs));

  return create_results;
}

}  // namespace OnPrefsChanged

}  // namespace settings_private
}  // namespace api
}  // namespace extensions

