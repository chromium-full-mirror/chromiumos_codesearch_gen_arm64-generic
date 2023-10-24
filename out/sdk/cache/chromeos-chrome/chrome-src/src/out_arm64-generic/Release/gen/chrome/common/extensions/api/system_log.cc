// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/system_log.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/system_log.h"

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
namespace system_log {
//
// Types
//

MessageOptions::MessageOptions()
 {}

MessageOptions::~MessageOptions() = default;
MessageOptions::MessageOptions(MessageOptions&& rhs) = default;
MessageOptions& MessageOptions::operator=(MessageOptions&& rhs) = default;
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
std::unique_ptr<MessageOptions> MessageOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<MessageOptions>();
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
absl::optional<MessageOptions> MessageOptions::FromValue(const base::Value::Dict& value) {
  MessageOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<MessageOptions> MessageOptions::FromValue(const base::Value& value) {
  MessageOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return absl::nullopt;
      }
      if (!MessageOptions::Populate(options_value.GetDict(), params.options)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
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

