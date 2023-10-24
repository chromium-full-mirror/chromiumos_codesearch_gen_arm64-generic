// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/enterprise_hardware_platform.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_HARDWARE_PLATFORM_H__
#define CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_HARDWARE_PLATFORM_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace enterprise_hardware_platform {

//
// Types
//

struct HardwarePlatformInfo {
  HardwarePlatformInfo();
  ~HardwarePlatformInfo();
  HardwarePlatformInfo(const HardwarePlatformInfo&) = delete;
  HardwarePlatformInfo& operator=(const HardwarePlatformInfo&) = delete;
  HardwarePlatformInfo(HardwarePlatformInfo&& rhs);
  HardwarePlatformInfo& operator=(HardwarePlatformInfo&& rhs);

  // Populates a HardwarePlatformInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, HardwarePlatformInfo& out);

  // Populates a HardwarePlatformInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, HardwarePlatformInfo& out);

  // Creates a deep copy of HardwarePlatformInfo.
  HardwarePlatformInfo Clone() const;

  // Creates a HardwarePlatformInfo object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<HardwarePlatformInfo> FromValueDeprecated(const base::Value& value);

  // Creates a HardwarePlatformInfo object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<HardwarePlatformInfo> FromValue(const base::Value::Dict& value);

  // Creates a HardwarePlatformInfo object from a base::Value, or nullopt on
  // failure.
  static absl::optional<HardwarePlatformInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisHardwarePlatformInfo object.
  base::Value::Dict ToValue() const;

  std::string model;

  std::string manufacturer;

};


//
// Functions
//

namespace GetHardwarePlatformInfo {

namespace Results {

base::Value::List Create(const HardwarePlatformInfo& info);
}  // namespace Results

}  // namespace GetHardwarePlatformInfo

}  // namespace enterprise_hardware_platform
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_HARDWARE_PLATFORM_H__
