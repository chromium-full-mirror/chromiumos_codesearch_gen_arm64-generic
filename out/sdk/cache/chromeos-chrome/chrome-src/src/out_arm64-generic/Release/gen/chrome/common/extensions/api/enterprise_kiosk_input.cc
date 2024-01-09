// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/enterprise_kiosk_input.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/enterprise_kiosk_input.h"

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
namespace enterprise_kiosk_input {
//
// Types
//

SetCurrentInputMethodOptions::SetCurrentInputMethodOptions()
 {}

SetCurrentInputMethodOptions::~SetCurrentInputMethodOptions() = default;
SetCurrentInputMethodOptions::SetCurrentInputMethodOptions(SetCurrentInputMethodOptions&& rhs) noexcept = default;
SetCurrentInputMethodOptions& SetCurrentInputMethodOptions::operator=(SetCurrentInputMethodOptions&& rhs) noexcept = default;
SetCurrentInputMethodOptions SetCurrentInputMethodOptions::Clone() const {
  SetCurrentInputMethodOptions out;
  out.input_method_id = input_method_id;
  return out;
}

// static
bool SetCurrentInputMethodOptions::Populate(
    const base::Value::Dict& dict, SetCurrentInputMethodOptions& out) {
  const base::Value* input_method_id_value = dict.Find("inputMethodId");
  if (!input_method_id_value) {
    return false;
  }
  {
    auto* temp = (*input_method_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.input_method_id = *temp;
  }

  return true;
}

// static
bool SetCurrentInputMethodOptions::Populate(
    const base::Value& value, SetCurrentInputMethodOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SetCurrentInputMethodOptions> SetCurrentInputMethodOptions::FromValue(const base::Value::Dict& value) {
  SetCurrentInputMethodOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SetCurrentInputMethodOptions> SetCurrentInputMethodOptions::FromValue(const base::Value& value) {
  SetCurrentInputMethodOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SetCurrentInputMethodOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("inputMethodId", this->input_method_id);


  return to_value_result;
}



//
// Functions
//

namespace SetCurrentInputMethod {

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
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      if (!SetCurrentInputMethodOptions::Populate(options_value.GetDict(), params.options)) {
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
}  // namespace SetCurrentInputMethod

}  // namespace enterprise_kiosk_input
}  // namespace api
}  // namespace extensions

