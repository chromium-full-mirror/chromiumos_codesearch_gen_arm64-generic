// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/mdns.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/mdns.h"

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
namespace mdns {
//
// Properties
//

const int MAX_SERVICE_INSTANCES_PER_EVENT = 2048;

//
// Types
//

MDnsService::MDnsService()
 {}

MDnsService::~MDnsService() = default;
MDnsService::MDnsService(MDnsService&& rhs) = default;
MDnsService& MDnsService::operator=(MDnsService&& rhs) = default;
MDnsService MDnsService::Clone() const {
  MDnsService out;
  out.service_name = service_name;
  out.service_host_port = service_host_port;
  out.ip_address = ip_address;
  out.service_data = service_data;
  return out;
}

// static
bool MDnsService::Populate(
    const base::Value::Dict& dict, MDnsService& out) {
  const base::Value* service_name_value = dict.Find("serviceName");
  if (!service_name_value) {
    return false;
  }
  {
    auto* temp = (*service_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.service_name = *temp;
  }

  const base::Value* service_host_port_value = dict.Find("serviceHostPort");
  if (!service_host_port_value) {
    return false;
  }
  {
    auto* temp = (*service_host_port_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.service_host_port = *temp;
  }

  const base::Value* ip_address_value = dict.Find("ipAddress");
  if (!ip_address_value) {
    return false;
  }
  {
    auto* temp = (*ip_address_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.ip_address = *temp;
  }

  const base::Value* service_data_value = dict.Find("serviceData");
  if (!service_data_value) {
    return false;
  }
  {
    if (!(*service_data_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*service_data_value).GetList(), out.service_data)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool MDnsService::Populate(
    const base::Value& value, MDnsService& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<MDnsService> MDnsService::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<MDnsService>();
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
absl::optional<MDnsService> MDnsService::FromValue(const base::Value::Dict& value) {
  MDnsService out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<MDnsService> MDnsService::FromValue(const base::Value& value) {
  MDnsService out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict MDnsService::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("serviceName", this->service_name);

  to_value_result.Set("serviceHostPort", this->service_host_port);

  to_value_result.Set("ipAddress", this->ip_address);

  to_value_result.Set("serviceData", json_schema_compiler::util::CreateValueFromArray(this->service_data));


  return to_value_result;
}



//
// Functions
//

namespace ForceDiscovery {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace ForceDiscovery

//
// Events
//

namespace OnServiceList {

const char kEventName[] = "mdns.onServiceList";

base::Value::List Create(const std::vector<MDnsService>& services) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(services));

  return create_results;
}

}  // namespace OnServiceList

}  // namespace mdns
}  // namespace api
}  // namespace extensions

