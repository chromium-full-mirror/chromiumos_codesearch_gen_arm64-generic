// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/enterprise_networking_attributes.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_NETWORKING_ATTRIBUTES_H__
#define CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_NETWORKING_ATTRIBUTES_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace enterprise_networking_attributes {

//
// Types
//

struct NetworkDetails {
  NetworkDetails();
  ~NetworkDetails();
  NetworkDetails(const NetworkDetails&) = delete;
  NetworkDetails& operator=(const NetworkDetails&) = delete;
  NetworkDetails(NetworkDetails&& rhs) noexcept;
  NetworkDetails& operator=(NetworkDetails&& rhs) noexcept;

  // Populates a NetworkDetails object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NetworkDetails& out);

  // Populates a NetworkDetails object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, NetworkDetails& out);

  // Creates a deep copy of NetworkDetails.
  NetworkDetails Clone() const;

  // Creates a NetworkDetails object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<NetworkDetails> FromValue(const base::Value::Dict& value);

  // Creates a NetworkDetails object from a base::Value, or nullopt on failure.
  static std::optional<NetworkDetails> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisNetworkDetails object.
  base::Value::Dict ToValue() const;

  // The device's MAC address.
  std::string mac_address;

  // The device's local IPv4 address (undefined if not configured).
  std::optional<std::string> ipv4;

  // The device's local IPv6 address (undefined if not configured).
  std::optional<std::string> ipv6;

};


//
// Functions
//

namespace GetNetworkDetails {

namespace Results {

base::Value::List Create(const NetworkDetails& network_addresses);
}  // namespace Results

}  // namespace GetNetworkDetails

}  // namespace enterprise_networking_attributes
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_NETWORKING_ATTRIBUTES_H__
