// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/mdns.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_MDNS_H__
#define CHROME_COMMON_EXTENSIONS_API_MDNS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace mdns {

//
// Properties
//

// The maximum number of service instances that will be included in
// onServiceList events.  If more instances are available, they may be truncated
// from the onServiceList event.
extern const int MAX_SERVICE_INSTANCES_PER_EVENT;

//
// Types
//

struct MDnsService {
  MDnsService();
  ~MDnsService();
  MDnsService(const MDnsService&) = delete;
  MDnsService& operator=(const MDnsService&) = delete;
  MDnsService(MDnsService&& rhs) noexcept;
  MDnsService& operator=(MDnsService&& rhs) noexcept;

  // Populates a MDnsService object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MDnsService& out);

  // Populates a MDnsService object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, MDnsService& out);

  // Creates a deep copy of MDnsService.
  MDnsService Clone() const;

  // Creates a MDnsService object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<MDnsService> FromValue(const base::Value::Dict& value);

  // Creates a MDnsService object from a base::Value, or nullopt on failure.
  static std::optional<MDnsService> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMDnsService object.
  base::Value::Dict ToValue() const;

  // The service name of an mDNS advertised service,
  // <instance_name>.<service_type>.
  std::string service_name;

  // The host:port pair of an mDNS advertised service.
  std::string service_host_port;

  // The IP address of an mDNS advertised service.
  std::string ip_address;

  // Metadata for an mDNS advertised service.
  std::vector<std::string> service_data;

};


//
// Functions
//

namespace ForceDiscovery {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ForceDiscovery

//
// Events
//

namespace OnServiceList {

extern const char kEventName[];  // "mdns.onServiceList"

base::Value::List Create(const std::vector<MDnsService>& services);
}  // namespace OnServiceList

}  // namespace mdns
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_MDNS_H__
