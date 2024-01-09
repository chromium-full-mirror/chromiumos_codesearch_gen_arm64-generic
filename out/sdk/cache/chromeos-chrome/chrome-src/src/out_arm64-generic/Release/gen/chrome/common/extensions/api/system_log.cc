// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/system_log.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/system_log.h"

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
namespace system_log {
//
// Types
//

MessageOptions::MessageOptions()
 {}

MessageOptions::~MessageOptions() = default;
MessageOptions::MessageOptions(MessageOptions&& rhs) noexcept = default;
MessageOptions& MessageOptions::operator=(MessageOptions&& rhs) noexcept = default;
MessageOptions MessageOptions::Clone() const {
  MessageOptions out;
  out.message = message;
  return out;
}

// static
bool MessageOptions::Populate(
    const base::Value::Dict& dict, MessageOptions& out) {
  const base::Value* message_value = dict.Find("message");
  if (!message_value) {
    return false;
  }
  {
    auto* temp = (*message_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.message = *temp;
  }

  return true;
}

// static
bool MessageOptions::Populate(
    const base::Value& value, MessageOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<MessageOptions> MessageOptions::FromValue(const base::Value::Dict& value) {
  MessageOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<MessageOptions> MessageOptions::FromValue(const base::Value& value) {
  MessageOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict MessageOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("message", this->message);


  return to_value_result;
}



//
// Functions
//

namespace Add {

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
      if (!MessageOptions::Populate(options_value.GetDict(), params.options)) {
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
}  // namespace Add

}  // namespace system_log
}  // namespace api
}  // namespace extensions

