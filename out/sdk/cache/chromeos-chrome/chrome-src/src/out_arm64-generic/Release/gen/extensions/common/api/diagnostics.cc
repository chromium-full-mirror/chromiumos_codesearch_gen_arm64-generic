// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/diagnostics.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/diagnostics.h"

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
namespace diagnostics {
//
// Types
//

SendPacketOptions::SendPacketOptions()
 {}

SendPacketOptions::~SendPacketOptions() = default;
SendPacketOptions::SendPacketOptions(SendPacketOptions&& rhs) noexcept = default;
SendPacketOptions& SendPacketOptions::operator=(SendPacketOptions&& rhs) noexcept = default;
SendPacketOptions SendPacketOptions::Clone() const {
  SendPacketOptions out;
  out.ip = ip;
  out.ttl = ttl;
  out.timeout = timeout;
  out.size = size;
  return out;
}

// static
bool SendPacketOptions::Populate(
    const base::Value::Dict& dict, SendPacketOptions& out) {
  const base::Value* ip_value = dict.Find("ip");
  if (!ip_value) {
    return false;
  }
  {
    auto* temp = (*ip_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.ip = *temp;
  }

  const base::Value* ttl_value = dict.Find("ttl");
  if (ttl_value) {
    {
      auto temp = (*ttl_value).GetIfInt();
      if (!temp.has_value()) {
        out.ttl = std::nullopt;
        return false;
      }
      out.ttl = *temp;
    }
  }

  const base::Value* timeout_value = dict.Find("timeout");
  if (timeout_value) {
    {
      auto temp = (*timeout_value).GetIfInt();
      if (!temp.has_value()) {
        out.timeout = std::nullopt;
        return false;
      }
      out.timeout = *temp;
    }
  }

  const base::Value* size_value = dict.Find("size");
  if (size_value) {
    {
      auto temp = (*size_value).GetIfInt();
      if (!temp.has_value()) {
        out.size = std::nullopt;
        return false;
      }
      out.size = *temp;
    }
  }

  return true;
}

// static
bool SendPacketOptions::Populate(
    const base::Value& value, SendPacketOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SendPacketOptions> SendPacketOptions::FromValue(const base::Value::Dict& value) {
  SendPacketOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SendPacketOptions> SendPacketOptions::FromValue(const base::Value& value) {
  SendPacketOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SendPacketOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("ip", this->ip);

  if (this->ttl) {
    to_value_result.Set("ttl", *this->ttl);

  }
  if (this->timeout) {
    to_value_result.Set("timeout", *this->timeout);

  }
  if (this->size) {
    to_value_result.Set("size", *this->size);

  }

  return to_value_result;
}


SendPacketResult::SendPacketResult()
: latency(0.0) {}

SendPacketResult::~SendPacketResult() = default;
SendPacketResult::SendPacketResult(SendPacketResult&& rhs) noexcept = default;
SendPacketResult& SendPacketResult::operator=(SendPacketResult&& rhs) noexcept = default;
SendPacketResult SendPacketResult::Clone() const {
  SendPacketResult out;
  out.ip = ip;
  out.latency = latency;
  return out;
}

// static
bool SendPacketResult::Populate(
    const base::Value::Dict& dict, SendPacketResult& out) {
  const base::Value* ip_value = dict.Find("ip");
  if (!ip_value) {
    return false;
  }
  {
    auto* temp = (*ip_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.ip = *temp;
  }

  const base::Value* latency_value = dict.Find("latency");
  if (!latency_value) {
    return false;
  }
  {
    auto temp = (*latency_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.latency = *temp;
  }

  return true;
}

// static
bool SendPacketResult::Populate(
    const base::Value& value, SendPacketResult& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SendPacketResult> SendPacketResult::FromValue(const base::Value::Dict& value) {
  SendPacketResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SendPacketResult> SendPacketResult::FromValue(const base::Value& value) {
  SendPacketResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SendPacketResult::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("ip", this->ip);

  to_value_result.Set("latency", this->latency);


  return to_value_result;
}



//
// Functions
//

namespace SendPacket {

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
      if (!SendPacketOptions::Populate(options_value.GetDict(), params.options)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const SendPacketResult& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace SendPacket

}  // namespace diagnostics
}  // namespace api
}  // namespace extensions

