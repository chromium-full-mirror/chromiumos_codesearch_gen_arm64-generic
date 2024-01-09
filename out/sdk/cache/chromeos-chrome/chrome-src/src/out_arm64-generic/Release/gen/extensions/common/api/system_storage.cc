// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/system_storage.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/system_storage.h"

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
#include "base/strings/string_piece.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace system_storage {
//
// Types
//

const char* ToString(StorageUnitType enum_param) {
  switch (enum_param) {
    case StorageUnitType::kFixed:
      return "fixed";
    case StorageUnitType::kRemovable:
      return "removable";
    case StorageUnitType::kUnknown:
      return "unknown";
    case StorageUnitType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

StorageUnitType ParseStorageUnitType(base::StringPiece enum_string) {
  if (enum_string == "fixed")
    return StorageUnitType::kFixed;
  if (enum_string == "removable")
    return StorageUnitType::kRemovable;
  if (enum_string == "unknown")
    return StorageUnitType::kUnknown;
  return StorageUnitType::kNone;
}

std::u16string GetStorageUnitTypeParseError(base::StringPiece enum_string) {
  return u"expected \"fixed\" or \"removable\" or \"unknown\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


StorageUnitInfo::StorageUnitInfo()
: type(),
capacity(0.0) {}

StorageUnitInfo::~StorageUnitInfo() = default;
StorageUnitInfo::StorageUnitInfo(StorageUnitInfo&& rhs) noexcept = default;
StorageUnitInfo& StorageUnitInfo::operator=(StorageUnitInfo&& rhs) noexcept = default;
StorageUnitInfo StorageUnitInfo::Clone() const {
  StorageUnitInfo out;
  out.id = id;
  out.name = name;
  out.type = type;
  out.capacity = capacity;
  return out;
}

// static
bool StorageUnitInfo::Populate(
    const base::Value::Dict& dict, StorageUnitInfo& out) {
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

  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.name = *temp;
  }

  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* storage_unit_type_as_string = (*type_value).GetIfString();
    if (!storage_unit_type_as_string) {
      return false;
    }
    out.type = ParseStorageUnitType(*storage_unit_type_as_string);
    if (out.type == StorageUnitType()) {
      return false;
    }
  }

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

  return true;
}

// static
bool StorageUnitInfo::Populate(
    const base::Value& value, StorageUnitInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<StorageUnitInfo> StorageUnitInfo::FromValue(const base::Value::Dict& value) {
  StorageUnitInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<StorageUnitInfo> StorageUnitInfo::FromValue(const base::Value& value) {
  StorageUnitInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict StorageUnitInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("name", this->name);

  to_value_result.Set("type", system_storage::ToString(this->type));

  to_value_result.Set("capacity", this->capacity);


  return to_value_result;
}


StorageAvailableCapacityInfo::StorageAvailableCapacityInfo()
: available_capacity(0.0) {}

StorageAvailableCapacityInfo::~StorageAvailableCapacityInfo() = default;
StorageAvailableCapacityInfo::StorageAvailableCapacityInfo(StorageAvailableCapacityInfo&& rhs) noexcept = default;
StorageAvailableCapacityInfo& StorageAvailableCapacityInfo::operator=(StorageAvailableCapacityInfo&& rhs) noexcept = default;
StorageAvailableCapacityInfo StorageAvailableCapacityInfo::Clone() const {
  StorageAvailableCapacityInfo out;
  out.id = id;
  out.available_capacity = available_capacity;
  return out;
}

// static
bool StorageAvailableCapacityInfo::Populate(
    const base::Value::Dict& dict, StorageAvailableCapacityInfo& out) {
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
bool StorageAvailableCapacityInfo::Populate(
    const base::Value& value, StorageAvailableCapacityInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<StorageAvailableCapacityInfo> StorageAvailableCapacityInfo::FromValue(const base::Value::Dict& value) {
  StorageAvailableCapacityInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<StorageAvailableCapacityInfo> StorageAvailableCapacityInfo::FromValue(const base::Value& value) {
  StorageAvailableCapacityInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict StorageAvailableCapacityInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("availableCapacity", this->available_capacity);


  return to_value_result;
}


const char* ToString(EjectDeviceResultCode enum_param) {
  switch (enum_param) {
    case EjectDeviceResultCode::kSuccess:
      return "success";
    case EjectDeviceResultCode::kInUse:
      return "in_use";
    case EjectDeviceResultCode::kNoSuchDevice:
      return "no_such_device";
    case EjectDeviceResultCode::kFailure:
      return "failure";
    case EjectDeviceResultCode::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

EjectDeviceResultCode ParseEjectDeviceResultCode(base::StringPiece enum_string) {
  if (enum_string == "success")
    return EjectDeviceResultCode::kSuccess;
  if (enum_string == "in_use")
    return EjectDeviceResultCode::kInUse;
  if (enum_string == "no_such_device")
    return EjectDeviceResultCode::kNoSuchDevice;
  if (enum_string == "failure")
    return EjectDeviceResultCode::kFailure;
  return EjectDeviceResultCode::kNone;
}

std::u16string GetEjectDeviceResultCodeParseError(base::StringPiece enum_string) {
  return u"expected \"success\" or \"in_use\" or \"no_such_device\" or \"failure\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



//
// Functions
//

namespace GetInfo {

base::Value::List Results::Create(const std::vector<StorageUnitInfo>& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(info));

  return create_results;
}
}  // namespace GetInfo

namespace EjectDevice {

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
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const EjectDeviceResultCode& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(system_storage::ToString(result));

  return create_results;
}
}  // namespace EjectDevice

namespace GetAvailableCapacity {

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
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const StorageAvailableCapacityInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}
}  // namespace GetAvailableCapacity

//
// Events
//

namespace OnAttached {

const char kEventName[] = "system.storage.onAttached";

base::Value::List Create(const StorageUnitInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}

}  // namespace OnAttached

namespace OnDetached {

const char kEventName[] = "system.storage.onDetached";

base::Value::List Create(const std::string& id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(id);

  return create_results;
}

}  // namespace OnDetached

}  // namespace system_storage
}  // namespace api
}  // namespace extensions

