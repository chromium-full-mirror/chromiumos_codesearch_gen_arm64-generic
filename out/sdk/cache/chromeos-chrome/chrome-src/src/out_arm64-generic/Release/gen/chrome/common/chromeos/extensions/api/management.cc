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
: node_id(0.0),
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
    auto temp = (*node_id_value).GetIfDouble();
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


SetAudioVolumeArguments::SetAudioVolumeArguments()
: node_id(0.0),
volume(0),
is_muted(false) {}

SetAudioVolumeArguments::~SetAudioVolumeArguments() = default;
SetAudioVolumeArguments::SetAudioVolumeArguments(SetAudioVolumeArguments&& rhs) noexcept = default;
SetAudioVolumeArguments& SetAudioVolumeArguments::operator=(SetAudioVolumeArguments&& rhs) noexcept = default;
SetAudioVolumeArguments SetAudioVolumeArguments::Clone() const {
  SetAudioVolumeArguments out;
  out.node_id = node_id;
  out.volume = volume;
  out.is_muted = is_muted;
  return out;
}

// static
bool SetAudioVolumeArguments::Populate(
    const base::Value::Dict& dict, SetAudioVolumeArguments& out) {
  const base::Value* node_id_value = dict.Find("nodeId");
  if (!node_id_value) {
    return false;
  }
  {
    auto temp = (*node_id_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.node_id = *temp;
  }

  const base::Value* volume_value = dict.Find("volume");
  if (!volume_value) {
    return false;
  }
  {
    auto temp = (*volume_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.volume = *temp;
  }

  const base::Value* is_muted_value = dict.Find("isMuted");
  if (!is_muted_value) {
    return false;
  }
  {
    auto temp = (*is_muted_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_muted = *temp;
  }

  return true;
}

// static
bool SetAudioVolumeArguments::Populate(
    const base::Value& value, SetAudioVolumeArguments& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SetAudioVolumeArguments> SetAudioVolumeArguments::FromValue(const base::Value::Dict& value) {
  SetAudioVolumeArguments out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SetAudioVolumeArguments> SetAudioVolumeArguments::FromValue(const base::Value& value) {
  SetAudioVolumeArguments out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SetAudioVolumeArguments::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("nodeId", this->node_id);

  to_value_result.Set("volume", this->volume);

  to_value_result.Set("isMuted", this->is_muted);


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


base::Value::List Results::Create(bool is_success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(is_success);

  return create_results;
}
}  // namespace SetAudioGain

namespace SetAudioVolume {

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
      if (!SetAudioVolumeArguments::Populate(args_value.GetDict(), params.args)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool is_success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(is_success);

  return create_results;
}
}  // namespace SetAudioVolume

}  // namespace os_management
}  // namespace api
}  // namespace chromeos

