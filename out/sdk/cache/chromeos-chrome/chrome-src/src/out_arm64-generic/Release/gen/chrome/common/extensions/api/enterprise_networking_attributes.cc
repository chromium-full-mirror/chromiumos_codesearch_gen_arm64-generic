// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/enterprise_networking_attributes.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/enterprise_networking_attributes.h"

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
namespace enterprise_networking_attributes {
//
// Types
//

NetworkDetails::NetworkDetails()
 {}

NetworkDetails::~NetworkDetails() = default;
NetworkDetails::NetworkDetails(NetworkDetails&& rhs) noexcept = default;
NetworkDetails& NetworkDetails::operator=(NetworkDetails&& rhs) noexcept = default;
NetworkDetails NetworkDetails::Clone() const {
  NetworkDetails out;
  out.mac_address = mac_address;
  out.ipv4 = ipv4;
  out.ipv6 = ipv6;
  return out;
}

// static
bool NetworkDetails::Populate(
    const base::Value::Dict& dict, NetworkDetails& out) {
  const base::Value* mac_address_value = dict.Find("macAddress");
  if (!mac_address_value) {
    return false;
  }
  {
    auto* temp = (*mac_address_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.mac_address = *temp;
  }

  const base::Value* ipv4_value = dict.Find("ipv4");
  if (ipv4_value) {
    {
      auto* temp = (*ipv4_value).GetIfString();
      if (!temp) {
        out.ipv4 = std::nullopt;
        return false;
      }
      out.ipv4 = *temp;
    }
  }

  const base::Value* ipv6_value = dict.Find("ipv6");
  if (ipv6_value) {
    {
      auto* temp = (*ipv6_value).GetIfString();
      if (!temp) {
        out.ipv6 = std::nullopt;
        return false;
      }
      out.ipv6 = *temp;
    }
  }

  return true;
}

// static
bool NetworkDetails::Populate(
    const base::Value& value, NetworkDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<NetworkDetails> NetworkDetails::FromValue(const base::Value::Dict& value) {
  NetworkDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<NetworkDetails> NetworkDetails::FromValue(const base::Value& value) {
  NetworkDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict NetworkDetails::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("macAddress", this->mac_address);

  if (this->ipv4) {
    to_value_result.Set("ipv4", *this->ipv4);

  }
  if (this->ipv6) {
    to_value_result.Set("ipv6", *this->ipv6);

  }

  return to_value_result;
}



//
// Functions
//

namespace GetNetworkDetails {

base::Value::List Results::Create(const NetworkDetails& network_addresses) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((network_addresses).ToValue());

  return create_results;
}
}  // namespace GetNetworkDetails

}  // namespace enterprise_networking_attributes
}  // namespace api
}  // namespace extensions

