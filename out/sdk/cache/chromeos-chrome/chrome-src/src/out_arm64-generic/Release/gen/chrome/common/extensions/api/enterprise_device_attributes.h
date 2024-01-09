// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/enterprise_device_attributes.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_DEVICE_ATTRIBUTES_H__
#define CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_DEVICE_ATTRIBUTES_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace enterprise_device_attributes {

//
// Functions
//

namespace GetDirectoryDeviceId {

namespace Results {

base::Value::List Create(const std::string& device_id);
}  // namespace Results

}  // namespace GetDirectoryDeviceId

namespace GetDeviceSerialNumber {

namespace Results {

base::Value::List Create(const std::string& serial_number);
}  // namespace Results

}  // namespace GetDeviceSerialNumber

namespace GetDeviceAssetId {

namespace Results {

base::Value::List Create(const std::string& asset_id);
}  // namespace Results

}  // namespace GetDeviceAssetId

namespace GetDeviceAnnotatedLocation {

namespace Results {

base::Value::List Create(const std::string& annotated_location);
}  // namespace Results

}  // namespace GetDeviceAnnotatedLocation

namespace GetDeviceHostname {

namespace Results {

base::Value::List Create(const std::string& hostname);
}  // namespace Results

}  // namespace GetDeviceHostname

}  // namespace enterprise_device_attributes
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_DEVICE_ATTRIBUTES_H__
