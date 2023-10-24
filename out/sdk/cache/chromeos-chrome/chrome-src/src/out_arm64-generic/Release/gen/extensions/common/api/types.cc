// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/types.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/types.h"

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
namespace types {
//
// Types
//

const char* ToString(ChromeSettingScope enum_param) {
  switch (enum_param) {
    case ChromeSettingScope::kRegular:
      return "regular";
    case ChromeSettingScope::kRegularOnly:
      return "regular_only";
    case ChromeSettingScope::kIncognitoPersistent:
      return "incognito_persistent";
    case ChromeSettingScope::kIncognitoSessionOnly:
      return "incognito_session_only";
    case ChromeSettingScope::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ChromeSettingScope ParseChromeSettingScope(base::StringPiece enum_string) {
  if (enum_string == "regular")
    return ChromeSettingScope::kRegular;
  if (enum_string == "regular_only")
    return ChromeSettingScope::kRegularOnly;
  if (enum_string == "incognito_persistent")
    return ChromeSettingScope::kIncognitoPersistent;
  if (enum_string == "incognito_session_only")
    return ChromeSettingScope::kIncognitoSessionOnly;
  return ChromeSettingScope::kNone;
}

std::u16string GetChromeSettingScopeParseError(base::StringPiece enum_string) {
  return u"expected \"regular\" or \"regular_only\" or \"incognito_persistent\" or \"incognito_session_only\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(LevelOfControl enum_param) {
  switch (enum_param) {
    case LevelOfControl::kNotControllable:
      return "not_controllable";
    case LevelOfControl::kControlledByOtherExtensions:
      return "controlled_by_other_extensions";
    case LevelOfControl::kControllableByThisExtension:
      return "controllable_by_this_extension";
    case LevelOfControl::kControlledByThisExtension:
      return "controlled_by_this_extension";
    case LevelOfControl::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

LevelOfControl ParseLevelOfControl(base::StringPiece enum_string) {
  if (enum_string == "not_controllable")
    return LevelOfControl::kNotControllable;
  if (enum_string == "controlled_by_other_extensions")
    return LevelOfControl::kControlledByOtherExtensions;
  if (enum_string == "controllable_by_this_extension")
    return LevelOfControl::kControllableByThisExtension;
  if (enum_string == "controlled_by_this_extension")
    return LevelOfControl::kControlledByThisExtension;
  return LevelOfControl::kNone;
}

std::u16string GetLevelOfControlParseError(base::StringPiece enum_string) {
  return u"expected \"not_controllable\" or \"controlled_by_other_extensions\" or \"controllable_by_this_extension\" or \"controlled_by_this_extension\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ChromeSetting::ChromeSetting()
 {}

ChromeSetting::~ChromeSetting() = default;
ChromeSetting::ChromeSetting(ChromeSetting&& rhs) = default;
ChromeSetting& ChromeSetting::operator=(ChromeSetting&& rhs) = default;
ChromeSetting ChromeSetting::Clone() const {
  ChromeSetting out;
  return out;
}

// static
bool ChromeSetting::Populate(
    const base::Value::Dict& dict, ChromeSetting& out) {
  return true;
}

// static
bool ChromeSetting::Populate(
    const base::Value& value, ChromeSetting& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ChromeSetting> ChromeSetting::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ChromeSetting>();
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
absl::optional<ChromeSetting> ChromeSetting::FromValue(const base::Value::Dict& value) {
  ChromeSetting out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ChromeSetting> ChromeSetting::FromValue(const base::Value& value) {
  ChromeSetting out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ChromeSetting::ToValue() const {
  base::Value::Dict to_value_result;


  return to_value_result;
}



}  // namespace types
}  // namespace api
}  // namespace extensions

