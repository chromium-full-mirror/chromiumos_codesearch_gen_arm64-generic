// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/gcm.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/gcm.h"

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
namespace gcm {
//
// Properties
//

const int MAX_MESSAGE_SIZE = 4096;

//
// Functions
//

namespace Register {

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
    const base::Value& sender_ids_value = args[0];
    {
      if (!sender_ids_value.is_list()) {
        return absl::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(sender_ids_value.GetList(), params.sender_ids)) {
          return absl::nullopt;
        }
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& registration_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(registration_id);

  return create_results;
}
}  // namespace Register

namespace Unregister {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace Unregister

namespace Send {

Params::Message::Data::Data()
 {}

Params::Message::Data::~Data() = default;
Params::Message::Data::Data(Data&& rhs) = default;
Params::Message::Data& Params::Message::Data::operator=(Data&& rhs) = default;
Params::Message::Data Params::Message::Data::Clone() const {
  Data out;
  return out;
}

// static
bool Params::Message::Data::Populate(
    const base::Value::Dict& dict, Data& out) {
  for (const auto item : dict) {
    std::string tmp;
    {
      auto* temp = item.second.GetIfString();
      if (!temp) {
        return false;
      }
      tmp = *temp;
    }
    out.additional_properties[item.first] = tmp;
  }
  return true;
}

// static
bool Params::Message::Data::Populate(
    const base::Value& value, Data& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Message::Data> Params::Message::Data::FromValue(const base::Value::Dict& value) {
  Data out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Message::Data> Params::Message::Data::FromValue(const base::Value& value) {
  Data out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}



Params::Message::Message()
 {}

Params::Message::~Message() = default;
Params::Message::Message(Message&& rhs) = default;
Params::Message& Params::Message::operator=(Message&& rhs) = default;
Params::Message Params::Message::Clone() const {
  Message out;
  out.destination_id = destination_id;
  out.message_id = message_id;
  out.time_to_live = time_to_live;
  out.data = data.Clone();
  return out;
}

// static
bool Params::Message::Populate(
    const base::Value::Dict& dict, Message& out) {
  const base::Value* destination_id_value = dict.Find("destinationId");
  if (!destination_id_value) {
    return false;
  }
  {
    auto* temp = (*destination_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.destination_id = *temp;
  }

  const base::Value* message_id_value = dict.Find("messageId");
  if (!message_id_value) {
    return false;
  }
  {
    auto* temp = (*message_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.message_id = *temp;
  }

  const base::Value* time_to_live_value = dict.Find("timeToLive");
  if (time_to_live_value) {
    {
      auto temp = (*time_to_live_value).GetIfInt();
      if (!temp.has_value()) {
        out.time_to_live = absl::nullopt;
        return false;
      }
      out.time_to_live = *temp;
    }
  }

  const base::Value* data_value = dict.Find("data");
  if (!data_value) {
    return false;
  }
  {
    if (!(*data_value).is_dict()) {
      return false;
    }
    if (!Data::Populate((*data_value).GetDict(), out.data)) {
      return false;
    }
  }

  return true;
}

// static
bool Params::Message::Populate(
    const base::Value& value, Message& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Message> Params::Message::FromValue(const base::Value::Dict& value) {
  Message out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Message> Params::Message::FromValue(const base::Value& value) {
  Message out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


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
    const base::Value& message_value = args[0];
    {
      if (!message_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Message::Populate(message_value.GetDict(), params.message)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& message_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(message_id);

  return create_results;
}
}  // namespace Send

//
// Events
//

namespace OnMessage {

const char kEventName[] = "gcm.onMessage";

Message::Data::Data()
 {}

Message::Data::~Data() = default;
Message::Data::Data(Data&& rhs) = default;
Message::Data& Message::Data::operator=(Data&& rhs) = default;
base::Value::Dict Message::Data::ToValue() const {
  base::Value::Dict to_value_result;

  for (const auto& it : additional_properties) {
    to_value_result.Set(it.first, it.second);

  }

  return to_value_result;
}



Message::Message()
 {}

Message::~Message() = default;
Message::Message(Message&& rhs) = default;
Message& Message::operator=(Message&& rhs) = default;
base::Value::Dict Message::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("data", (this->data).ToValue());

  if (this->from) {
    to_value_result.Set("from", *this->from);

  }
  if (this->collapse_key) {
    to_value_result.Set("collapseKey", *this->collapse_key);

  }

  return to_value_result;
}


base::Value::List Create(const Message& message) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((message).ToValue());

  return create_results;
}

}  // namespace OnMessage

namespace OnMessagesDeleted {

const char kEventName[] = "gcm.onMessagesDeleted";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnMessagesDeleted

namespace OnSendError {

const char kEventName[] = "gcm.onSendError";

Error::Details::Details()
 {}

Error::Details::~Details() = default;
Error::Details::Details(Details&& rhs) = default;
Error::Details& Error::Details::operator=(Details&& rhs) = default;
base::Value::Dict Error::Details::ToValue() const {
  base::Value::Dict to_value_result;

  for (const auto& it : additional_properties) {
    to_value_result.Set(it.first, it.second);

  }

  return to_value_result;
}



Error::Error()
 {}

Error::~Error() = default;
Error::Error(Error&& rhs) = default;
Error& Error::operator=(Error&& rhs) = default;
base::Value::Dict Error::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("errorMessage", this->error_message);

  if (this->message_id) {
    to_value_result.Set("messageId", *this->message_id);

  }
  to_value_result.Set("details", (this->details).ToValue());


  return to_value_result;
}


base::Value::List Create(const Error& error) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((error).ToValue());

  return create_results;
}

}  // namespace OnSendError

}  // namespace gcm
}  // namespace api
}  // namespace extensions

