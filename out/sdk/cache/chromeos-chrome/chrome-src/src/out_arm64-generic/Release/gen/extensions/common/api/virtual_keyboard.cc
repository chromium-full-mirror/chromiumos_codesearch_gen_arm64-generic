// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/virtual_keyboard.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/virtual_keyboard.h"

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

using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace virtual_keyboard {
//
// Types
//

FeatureRestrictions::FeatureRestrictions()
 {}

FeatureRestrictions::~FeatureRestrictions() = default;
FeatureRestrictions::FeatureRestrictions(FeatureRestrictions&& rhs) noexcept = default;
FeatureRestrictions& FeatureRestrictions::operator=(FeatureRestrictions&& rhs) noexcept = default;
FeatureRestrictions FeatureRestrictions::Clone() const {
  FeatureRestrictions out;
  out.auto_complete_enabled = auto_complete_enabled;
  out.auto_correct_enabled = auto_correct_enabled;
  out.handwriting_enabled = handwriting_enabled;
  out.spell_check_enabled = spell_check_enabled;
  out.voice_input_enabled = voice_input_enabled;
  return out;
}

// static
bool FeatureRestrictions::Populate(
    const base::Value::Dict& dict, FeatureRestrictions& out) {
  const base::Value* auto_complete_enabled_value = dict.Find("autoCompleteEnabled");
  if (auto_complete_enabled_value) {
    {
      auto temp = (*auto_complete_enabled_value).GetIfBool();
      if (!temp.has_value()) {
        out.auto_complete_enabled = std::nullopt;
        return false;
      }
      out.auto_complete_enabled = *temp;
    }
  }

  const base::Value* auto_correct_enabled_value = dict.Find("autoCorrectEnabled");
  if (auto_correct_enabled_value) {
    {
      auto temp = (*auto_correct_enabled_value).GetIfBool();
      if (!temp.has_value()) {
        out.auto_correct_enabled = std::nullopt;
        return false;
      }
      out.auto_correct_enabled = *temp;
    }
  }

  const base::Value* handwriting_enabled_value = dict.Find("handwritingEnabled");
  if (handwriting_enabled_value) {
    {
      auto temp = (*handwriting_enabled_value).GetIfBool();
      if (!temp.has_value()) {
        out.handwriting_enabled = std::nullopt;
        return false;
      }
      out.handwriting_enabled = *temp;
    }
  }

  const base::Value* spell_check_enabled_value = dict.Find("spellCheckEnabled");
  if (spell_check_enabled_value) {
    {
      auto temp = (*spell_check_enabled_value).GetIfBool();
      if (!temp.has_value()) {
        out.spell_check_enabled = std::nullopt;
        return false;
      }
      out.spell_check_enabled = *temp;
    }
  }

  const base::Value* voice_input_enabled_value = dict.Find("voiceInputEnabled");
  if (voice_input_enabled_value) {
    {
      auto temp = (*voice_input_enabled_value).GetIfBool();
      if (!temp.has_value()) {
        out.voice_input_enabled = std::nullopt;
        return false;
      }
      out.voice_input_enabled = *temp;
    }
  }

  return true;
}

// static
bool FeatureRestrictions::Populate(
    const base::Value& value, FeatureRestrictions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<FeatureRestrictions> FeatureRestrictions::FromValue(const base::Value::Dict& value) {
  FeatureRestrictions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<FeatureRestrictions> FeatureRestrictions::FromValue(const base::Value& value) {
  FeatureRestrictions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict FeatureRestrictions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->auto_complete_enabled) {
    to_value_result.Set("autoCompleteEnabled", *this->auto_complete_enabled);

  }
  if (this->auto_correct_enabled) {
    to_value_result.Set("autoCorrectEnabled", *this->auto_correct_enabled);

  }
  if (this->handwriting_enabled) {
    to_value_result.Set("handwritingEnabled", *this->handwriting_enabled);

  }
  if (this->spell_check_enabled) {
    to_value_result.Set("spellCheckEnabled", *this->spell_check_enabled);

  }
  if (this->voice_input_enabled) {
    to_value_result.Set("voiceInputEnabled", *this->voice_input_enabled);

  }

  return to_value_result;
}



//
// Functions
//

namespace RestrictFeatures {

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
    const base::Value& restrictions_value = args[0];
    {
      if (!restrictions_value.is_dict()) {
        return std::nullopt;
      }
      if (!FeatureRestrictions::Populate(restrictions_value.GetDict(), params.restrictions)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const FeatureRestrictions& update) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((update).ToValue());

  return create_results;
}
}  // namespace RestrictFeatures

}  // namespace virtual_keyboard
}  // namespace api
}  // namespace extensions

