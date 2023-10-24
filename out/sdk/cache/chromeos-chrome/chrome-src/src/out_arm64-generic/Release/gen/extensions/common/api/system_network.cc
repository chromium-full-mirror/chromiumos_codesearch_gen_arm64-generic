// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/system_network.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/system_network.h"

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
namespace system_network {
//
// Types
//

NetworkInterface::NetworkInterface()
: prefix_length(0) {}

NetworkInterface::~NetworkInterface() = default;
NetworkInterface::NetworkInterface(NetworkInterface&& rhs) = default;
NetworkInterface& NetworkInterface::operator=(NetworkInterface&& rhs) = default;
NetworkInterface NetworkInterface::Clone() const {
  NetworkInterface out;
  out.name = name;
  out.address = address;
  out.prefix_length = prefix_length;
  return out;
}

// static
bool NetworkInterface::Populate(
    const base::Value::Dict& dict, NetworkInterface& out) {
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

  const base::Value* address_value = dict.Find("address");
  if (!address_value) {
    return false;
  }
  {
    auto* temp = (*address_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.address = *temp;
  }

  const base::Value* prefix_length_value = dict.Find("prefixLength");
  if (!prefix_length_value) {
    return false;
  }
  {
    auto temp = (*prefix_length_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.prefix_length = *temp;
  }

  return true;
}

// static
bool NetworkInterface::Populate(
    const base::Value& value, NetworkInterface& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<NetworkInterface> NetworkInterface::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<NetworkInterface>();
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
absl::optional<NetworkInterface> NetworkInterface::FromValue(const base::Value::Dict& value) {
  NetworkInterface out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<NetworkInterface> NetworkInterface::FromValue(const base::Value& value) {
  NetworkInterface out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict NetworkInterface::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("name", this->name);

  to_value_result.Set("address", this->address);

  to_value_result.Set("prefixLength", this->prefix_length);


  return to_value_result;
}



//
// Functions
//

namespace GetNetworkInterfaces {

base::Value::List Results::Create(const std::vector<NetworkInterface>& network_interfaces) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(network_interfaces));

  return create_results;
}
}  // namespace GetNetworkInterfaces

}  // namespace system_network
}  // namespace api
}  // namespace extensions

