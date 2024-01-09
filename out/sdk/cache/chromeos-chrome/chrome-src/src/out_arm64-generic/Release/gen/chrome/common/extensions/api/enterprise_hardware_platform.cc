// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/enterprise_hardware_platform.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/enterprise_hardware_platform.h"

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
namespace enterprise_hardware_platform {
//
// Types
//

HardwarePlatformInfo::HardwarePlatformInfo()
 {}

HardwarePlatformInfo::~HardwarePlatformInfo() = default;
HardwarePlatformInfo::HardwarePlatformInfo(HardwarePlatformInfo&& rhs) noexcept = default;
HardwarePlatformInfo& HardwarePlatformInfo::operator=(HardwarePlatformInfo&& rhs) noexcept = default;
HardwarePlatformInfo HardwarePlatformInfo::Clone() const {
  HardwarePlatformInfo out;
  out.model = model;
  out.manufacturer = manufacturer;
  return out;
}

// static
bool HardwarePlatformInfo::Populate(
    const base::Value::Dict& dict, HardwarePlatformInfo& out) {
  const base::Value* model_value = dict.Find("model");
  if (!model_value) {
    return false;
  }
  {
    auto* temp = (*model_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.model = *temp;
  }

  const base::Value* manufacturer_value = dict.Find("manufacturer");
  if (!manufacturer_value) {
    return false;
  }
  {
    auto* temp = (*manufacturer_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.manufacturer = *temp;
  }

  return true;
}

// static
bool HardwarePlatformInfo::Populate(
    const base::Value& value, HardwarePlatformInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<HardwarePlatformInfo> HardwarePlatformInfo::FromValue(const base::Value::Dict& value) {
  HardwarePlatformInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<HardwarePlatformInfo> HardwarePlatformInfo::FromValue(const base::Value& value) {
  HardwarePlatformInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict HardwarePlatformInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("model", this->model);

  to_value_result.Set("manufacturer", this->manufacturer);


  return to_value_result;
}



//
// Functions
//

namespace GetHardwarePlatformInfo {

base::Value::List Results::Create(const HardwarePlatformInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}
}  // namespace GetHardwarePlatformInfo

}  // namespace enterprise_hardware_platform
}  // namespace api
}  // namespace extensions

