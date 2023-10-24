// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/enterprise_device_attributes.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/enterprise_device_attributes.h"

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
namespace enterprise_device_attributes {
//
// Functions
//

namespace GetDirectoryDeviceId {

base::Value::List Results::Create(const std::string& device_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(device_id);

  return create_results;
}
}  // namespace GetDirectoryDeviceId

namespace GetDeviceSerialNumber {

base::Value::List Results::Create(const std::string& serial_number) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(serial_number);

  return create_results;
}
}  // namespace GetDeviceSerialNumber

namespace GetDeviceAssetId {

base::Value::List Results::Create(const std::string& asset_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(asset_id);

  return create_results;
}
}  // namespace GetDeviceAssetId

namespace GetDeviceAnnotatedLocation {

base::Value::List Results::Create(const std::string& annotated_location) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(annotated_location);

  return create_results;
}
}  // namespace GetDeviceAnnotatedLocation

namespace GetDeviceHostname {

base::Value::List Results::Create(const std::string& hostname) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(hostname);

  return create_results;
}
}  // namespace GetDeviceHostname

}  // namespace enterprise_device_attributes
}  // namespace api
}  // namespace extensions

