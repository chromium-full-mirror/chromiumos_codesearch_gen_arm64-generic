// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/lock_screen_data.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/lock_screen_data.h"

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
namespace lock_screen_data {
//
// Types
//

DataItemInfo::DataItemInfo()
 {}

DataItemInfo::~DataItemInfo() = default;
DataItemInfo::DataItemInfo(DataItemInfo&& rhs) = default;
DataItemInfo& DataItemInfo::operator=(DataItemInfo&& rhs) = default;
DataItemInfo DataItemInfo::Clone() const {
  DataItemInfo out;
  out.id = id;
  return out;
}

// static
bool DataItemInfo::Populate(
    const base::Value::Dict& dict, DataItemInfo& out) {
  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto* temp = (*id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.id = *temp;
  }

  return true;
}

// static
bool DataItemInfo::Populate(
    const base::Value& value, DataItemInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<DataItemInfo> DataItemInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<DataItemInfo>();
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
absl::optional<DataItemInfo> DataItemInfo::FromValue(const base::Value::Dict& value) {
  DataItemInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DataItemInfo> DataItemInfo::FromValue(const base::Value& value) {
  DataItemInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict DataItemInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);


  return to_value_result;
}


DataItemsAvailableEvent::DataItemsAvailableEvent()
: was_locked(false) {}

DataItemsAvailableEvent::~DataItemsAvailableEvent() = default;
DataItemsAvailableEvent::DataItemsAvailableEvent(DataItemsAvailableEvent&& rhs) = default;
DataItemsAvailableEvent& DataItemsAvailableEvent::operator=(DataItemsAvailableEvent&& rhs) = default;
DataItemsAvailableEvent DataItemsAvailableEvent::Clone() const {
  DataItemsAvailableEvent out;
  out.was_locked = was_locked;
  return out;
}

// static
bool DataItemsAvailableEvent::Populate(
    const base::Value::Dict& dict, DataItemsAvailableEvent& out) {
  const base::Value* was_locked_value = dict.Find("wasLocked");
  if (!was_locked_value) {
    return false;
  }
  {
    auto temp = (*was_locked_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.was_locked = *temp;
  }

  return true;
}

// static
bool DataItemsAvailableEvent::Populate(
    const base::Value& value, DataItemsAvailableEvent& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<DataItemsAvailableEvent> DataItemsAvailableEvent::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<DataItemsAvailableEvent>();
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
absl::optional<DataItemsAvailableEvent> DataItemsAvailableEvent::FromValue(const base::Value::Dict& value) {
  DataItemsAvailableEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DataItemsAvailableEvent> DataItemsAvailableEvent::FromValue(const base::Value& value) {
  DataItemsAvailableEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict DataItemsAvailableEvent::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("wasLocked", this->was_locked);


  return to_value_result;
}



//
// Functions
//

namespace Create {

base::Value::List Results::Create(const DataItemInfo& item) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((item).ToValue());

  return create_results;
}
}  // namespace Create

namespace GetAll {

base::Value::List Results::Create(const std::vector<DataItemInfo>& items) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(items));

  return create_results;
}
}  // namespace GetAll

namespace GetContent {

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
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<uint8_t>& data) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value(data));

  return create_results;
}
}  // namespace GetContent

namespace SetContent {

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
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& data_value = args[1];
    {
      if (!data_value.is_blob()) {
        return absl::nullopt;
      }
      else {
        params.data = data_value.GetBlob();
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
}  // namespace SetContent

namespace Delete {

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
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.id = *temp;
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
}  // namespace Delete

//
// Events
//

namespace OnDataItemsAvailable {

const char kEventName[] = "lockScreen.data.onDataItemsAvailable";

base::Value::List Create(const DataItemsAvailableEvent& event) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event).ToValue());

  return create_results;
}

}  // namespace OnDataItemsAvailable

}  // namespace lock_screen_data
}  // namespace api
}  // namespace extensions

