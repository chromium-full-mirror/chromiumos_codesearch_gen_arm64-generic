// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/system_network.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_SYSTEM_NETWORK_H__
#define EXTENSIONS_COMMON_API_SYSTEM_NETWORK_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace system_network {

//
// Types
//

struct NetworkInterface {
  NetworkInterface();
  ~NetworkInterface();
  NetworkInterface(const NetworkInterface&) = delete;
  NetworkInterface& operator=(const NetworkInterface&) = delete;
  NetworkInterface(NetworkInterface&& rhs);
  NetworkInterface& operator=(NetworkInterface&& rhs);

  // Populates a NetworkInterface object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NetworkInterface& out);

  // Populates a NetworkInterface object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, NetworkInterface& out);

  // Creates a deep copy of NetworkInterface.
  NetworkInterface Clone() const;

  // Creates a NetworkInterface object from a base::Value, or NULL on failure.
  static std::unique_ptr<NetworkInterface> FromValueDeprecated(const base::Value& value);

  // Creates a NetworkInterface object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<NetworkInterface> FromValue(const base::Value::Dict& value);

  // Creates a NetworkInterface object from a base::Value, or nullopt on
  // failure.
  static absl::optional<NetworkInterface> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisNetworkInterface object.
  base::Value::Dict ToValue() const;

  // The underlying name of the adapter. On *nix, this will typically be "eth0",
  // "wlan0", etc.
  std::string name;

  // The available IPv4/6 address.
  std::string address;

  // The prefix length
  int prefix_length;

};


//
// Functions
//

namespace GetNetworkInterfaces {

namespace Results {

// Array of object containing network interfaces information.
base::Value::List Create(const std::vector<NetworkInterface>& network_interfaces);
}  // namespace Results

}  // namespace GetNetworkInterfaces

}  // namespace system_network
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_SYSTEM_NETWORK_H__
