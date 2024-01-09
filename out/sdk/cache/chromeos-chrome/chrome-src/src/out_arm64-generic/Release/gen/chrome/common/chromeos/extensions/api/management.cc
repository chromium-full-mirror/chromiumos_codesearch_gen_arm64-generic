// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/chromeos/extensions/api/management.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/chromeos/extensions/api/management.h"

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

namespace chromeos {
namespace api {
namespace os_management {
//
// Types
//

SetAudioGainArguments::SetAudioGainArguments()
: node_id(0),
gain(0) {}

SetAudioGainArguments::~SetAudioGainArguments() = default;
SetAudioGainArguments::SetAudioGainArguments(SetAudioGainArguments&& rhs) noexcept = default;
SetAudioGainArguments& SetAudioGainArguments::operator=(SetAudioGainArguments&& rhs) noexcept = default;
SetAudioGainArguments SetAudioGainArguments::Clone() const {
  SetAudioGainArguments out;
  out.node_id = node_id;
  out.gain = gain;
  return out;
}

// static
bool SetAudioGainArguments::Populate(
    const base::Value::Dict& dict, SetAudioGainArguments& out) {
  const base::Value* node_id_value = dict.Find("nodeId");
  if (!node_id_value) {
    return false;
  }
  {
    auto temp = (*node_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.node_id = *temp;
  }

  const base::Value* gain_value = dict.Find("gain");
  if (!gain_value) {
    return false;
  }
  {
    auto temp = (*gain_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.gain = *temp;
  }

  return true;
}

// static
bool SetAudioGainArguments::Populate(
    const base::Value& value, SetAudioGainArguments& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SetAudioGainArguments> SetAudioGainArguments::FromValue(const base::Value::Dict& value) {
  SetAudioGainArguments out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SetAudioGainArguments> SetAudioGainArguments::FromValue(const base::Value& value) {
  SetAudioGainArguments out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SetAudioGainArguments::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("nodeId", this->node_id);

  to_value_result.Set("gain", this->gain);


  return to_value_result;
}



//
// Functions
//

namespace SetAudioGain {

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
    const base::Value& args_value = args[0];
    {
      if (!args_value.is_dict()) {
        return std::nullopt;
      }
      if (!SetAudioGainArguments::Populate(args_value.GetDict(), params.args)) {
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
}  // namespace SetAudioGain

}  // namespace os_management
}  // namespace api
}  // namespace chromeos

