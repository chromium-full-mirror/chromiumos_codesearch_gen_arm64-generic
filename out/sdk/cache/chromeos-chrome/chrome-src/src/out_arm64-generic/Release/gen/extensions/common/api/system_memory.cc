// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/system_memory.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/system_memory.h"

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
namespace system_memory {
//
// Types
//

MemoryInfo::MemoryInfo()
: capacity(0.0),
available_capacity(0.0) {}

MemoryInfo::~MemoryInfo() = default;
MemoryInfo::MemoryInfo(MemoryInfo&& rhs) = default;
MemoryInfo& MemoryInfo::operator=(MemoryInfo&& rhs) = default;
MemoryInfo MemoryInfo::Clone() const {
  MemoryInfo out;
  out.capacity = capacity;
  out.available_capacity = available_capacity;
  return out;
}

// static
bool MemoryInfo::Populate(
    const base::Value::Dict& dict, MemoryInfo& out) {
  const base::Value* capacity_value = dict.Find("capacity");
  if (!capacity_value) {
    return false;
  }
  {
    auto temp = (*capacity_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.capacity = *temp;
  }

  const base::Value* available_capacity_value = dict.Find("availableCapacity");
  if (!available_capacity_value) {
    return false;
  }
  {
    auto temp = (*available_capacity_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.available_capacity = *temp;
  }

  return true;
}

// static
bool MemoryInfo::Populate(
    const base::Value& value, MemoryInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<MemoryInfo> MemoryInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<MemoryInfo>();
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
absl::optional<MemoryInfo> MemoryInfo::FromValue(const base::Value::Dict& value) {
  MemoryInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<MemoryInfo> MemoryInfo::FromValue(const base::Value& value) {
  MemoryInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict MemoryInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("capacity", this->capacity);

  to_value_result.Set("availableCapacity", this->available_capacity);


  return to_value_result;
}



//
// Functions
//

namespace GetInfo {

base::Value::List Results::Create(const MemoryInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}
}  // namespace GetInfo

}  // namespace system_memory
}  // namespace api
}  // namespace extensions

