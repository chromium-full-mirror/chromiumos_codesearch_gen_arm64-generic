// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/webrtc_audio_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/webrtc_audio_private.h"

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

using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace webrtc_audio_private {
//
// Types
//

SinkInfo::SinkInfo()
: sample_rate(0),
is_ready(false),
is_default(false) {}

SinkInfo::~SinkInfo() = default;
SinkInfo::SinkInfo(SinkInfo&& rhs) = default;
SinkInfo& SinkInfo::operator=(SinkInfo&& rhs) = default;
SinkInfo SinkInfo::Clone() const {
  SinkInfo out;
  out.sink_id = sink_id;
  out.sink_label = sink_label;
  out.sample_rate = sample_rate;
  out.is_ready = is_ready;
  out.is_default = is_default;
  return out;
}

// static
bool SinkInfo::Populate(
    const base::Value::Dict& dict, SinkInfo& out) {
  const base::Value* sink_id_value = dict.Find("sinkId");
  if (!sink_id_value) {
    return false;
  }
  {
    auto* temp = (*sink_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.sink_id = *temp;
  }

  const base::Value* sink_label_value = dict.Find("sinkLabel");
  if (!sink_label_value) {
    return false;
  }
  {
    auto* temp = (*sink_label_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.sink_label = *temp;
  }

  const base::Value* sample_rate_value = dict.Find("sampleRate");
  if (!sample_rate_value) {
    return false;
  }
  {
    auto temp = (*sample_rate_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.sample_rate = *temp;
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

  const base::Value* is_default_value = dict.Find("isDefault");
  if (!is_default_value) {
    return false;
  }
  {
    auto temp = (*is_default_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_default = *temp;
  }

  return true;
}

// static
bool SinkInfo::Populate(
    const base::Value& value, SinkInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<SinkInfo> SinkInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<SinkInfo>();
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
absl::optional<SinkInfo> SinkInfo::FromValue(const base::Value::Dict& value) {
  SinkInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<SinkInfo> SinkInfo::FromValue(const base::Value& value) {
  SinkInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict SinkInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("sinkId", this->sink_id);

  to_value_result.Set("sinkLabel", this->sink_label);

  to_value_result.Set("sampleRate", this->sample_rate);

  to_value_result.Set("isReady", this->is_ready);

  to_value_result.Set("isDefault", this->is_default);


  return to_value_result;
}



//
// Functions
//

namespace GetSinks {

base::Value::List Results::Create(const std::vector<SinkInfo>& sink_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(sink_info));

  return create_results;
}
}  // namespace GetSinks

namespace GetAssociatedSink {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& security_origin_value = args[0];
    {
      auto* temp = security_origin_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.security_origin = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& source_id_in_origin_value = args[1];
    {
      auto* temp = source_id_in_origin_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.source_id_in_origin = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& sink_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(sink_id);

  return create_results;
}
}  // namespace GetAssociatedSink

//
// Events
//

namespace OnSinksChanged {

const char kEventName[] = "webrtcAudioPrivate.onSinksChanged";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnSinksChanged

}  // namespace webrtc_audio_private
}  // namespace api
}  // namespace extensions

