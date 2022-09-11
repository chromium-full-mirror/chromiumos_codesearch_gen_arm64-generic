// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/vpn_provider.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/vpn_provider.h"

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
namespace vpn_provider {
//
// Types
//

Parameters::Parameters()
 {}

Parameters::~Parameters() = default;
Parameters::Parameters(Parameters&& rhs) = default;
Parameters& Parameters::operator=(Parameters&& rhs) = default;
// static
bool Parameters::Populate(
    const base::Value& value, Parameters* out) {
  if (!value.is_dict()) {
    return false;
  }
  const auto* dict = static_cast<const base::DictionaryValue*>(&value);
  const base::Value* address_value = dict->FindKey("address");
  if (!address_value) {
    return false;
  }
  {
    auto* temp = (*address_value).GetIfString();
    if (!temp) {
      return false;
    }
    out->address = *temp;
  }

  const base::Value* broadcast_address_value = dict->FindKey("broadcastAddress");
  if (broadcast_address_value) {
    {
      auto* temp = (*broadcast_address_value).GetIfString();
      if (!temp) {
        out->broadcast_address = absl::nullopt;
        return false;
      }
      out->broadcast_address = *temp;
    }
  }

  const base::Value* mtu_value = dict->FindKey("mtu");
  if (mtu_value) {
    {
      auto* temp = (*mtu_value).GetIfString();
      if (!temp) {
        out->mtu = absl::nullopt;
        return false;
      }
      out->mtu = *temp;
    }
  }

  const base::Value* exclusion_list_value = dict->FindKey("exclusionList");
  if (!exclusion_list_value) {
    return false;
  }
  {
    if (!(*exclusion_list_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*exclusion_list_value).GetList(), &out->exclusion_list)) {
        return false;
      }
    }
  }

  const base::Value* inclusion_list_value = dict->FindKey("inclusionList");
  if (!inclusion_list_value) {
    return false;
  }
  {
    if (!(*inclusion_list_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*inclusion_list_value).GetList(), &out->inclusion_list)) {
        return false;
      }
    }
  }

  const base::Value* domain_search_value = dict->FindKey("domainSearch");
  if (domain_search_value) {
    {
      if (!(*domain_search_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*domain_search_value).GetList(), &out->domain_search)) {
          return false;
        }
      }
    }
  }

  const base::Value* dns_servers_value = dict->FindKey("dnsServers");
  if (!dns_servers_value) {
    return false;
  }
  {
    if (!(*dns_servers_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*dns_servers_value).GetList(), &out->dns_servers)) {
        return false;
      }
    }
  }

  const base::Value* reconnect_value = dict->FindKey("reconnect");
  if (reconnect_value) {
    {
      auto* temp = (*reconnect_value).GetIfString();
      if (!temp) {
        out->reconnect = absl::nullopt;
        return false;
      }
      out->reconnect = *temp;
    }
  }

  return true;
}

// static
std::unique_ptr<Parameters> Parameters::FromValue(const base::Value& value) {
  auto out = std::make_unique<Parameters>();
  bool result = Populate(value, out.get());
  if (!result)
    return nullptr;
  return out;
}

std::unique_ptr<base::DictionaryValue> Parameters::ToValue() const {
  auto to_value_result =
      std::make_unique<base::DictionaryValue>();

  to_value_result->GetDict().Set("address", std::move(*std::make_unique<base::Value>(this->address)));

  if (this->broadcast_address) {
    to_value_result->GetDict().Set("broadcastAddress", std::move(*std::make_unique<base::Value>(*this->broadcast_address)));

  }
  if (this->mtu) {
    to_value_result->GetDict().Set("mtu", std::move(*std::make_unique<base::Value>(*this->mtu)));

  }
  to_value_result->GetDict().Set("exclusionList", std::move(*json_schema_compiler::util::CreateValueFromArray(this->exclusion_list)));

  to_value_result->GetDict().Set("inclusionList", std::move(*json_schema_compiler::util::CreateValueFromArray(this->inclusion_list)));

  if (this->domain_search) {
    to_value_result->GetDict().Set("domainSearch", std::move(*json_schema_compiler::util::CreateValueFromArray(*this->domain_search)));

  }
  to_value_result->GetDict().Set("dnsServers", std::move(*json_schema_compiler::util::CreateValueFromArray(this->dns_servers)));

  if (this->reconnect) {
    to_value_result->GetDict().Set("reconnect", std::move(*std::make_unique<base::Value>(*this->reconnect)));

  }

  return to_value_result;
}


const char* ToString(PlatformMessage enum_param) {
  switch (enum_param) {
    case PLATFORM_MESSAGE_CONNECTED:
      return "connected";
    case PLATFORM_MESSAGE_DISCONNECTED:
      return "disconnected";
    case PLATFORM_MESSAGE_ERROR:
      return "error";
    case PLATFORM_MESSAGE_LINKDOWN:
      return "linkDown";
    case PLATFORM_MESSAGE_LINKUP:
      return "linkUp";
    case PLATFORM_MESSAGE_LINKCHANGED:
      return "linkChanged";
    case PLATFORM_MESSAGE_SUSPEND:
      return "suspend";
    case PLATFORM_MESSAGE_RESUME:
      return "resume";
    case PLATFORM_MESSAGE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

PlatformMessage ParsePlatformMessage(const std::string& enum_string) {
  if (enum_string == "connected")
    return PLATFORM_MESSAGE_CONNECTED;
  if (enum_string == "disconnected")
    return PLATFORM_MESSAGE_DISCONNECTED;
  if (enum_string == "error")
    return PLATFORM_MESSAGE_ERROR;
  if (enum_string == "linkDown")
    return PLATFORM_MESSAGE_LINKDOWN;
  if (enum_string == "linkUp")
    return PLATFORM_MESSAGE_LINKUP;
  if (enum_string == "linkChanged")
    return PLATFORM_MESSAGE_LINKCHANGED;
  if (enum_string == "suspend")
    return PLATFORM_MESSAGE_SUSPEND;
  if (enum_string == "resume")
    return PLATFORM_MESSAGE_RESUME;
  return PLATFORM_MESSAGE_NONE;
}


const char* ToString(VpnConnectionState enum_param) {
  switch (enum_param) {
    case VPN_CONNECTION_STATE_CONNECTED:
      return "connected";
    case VPN_CONNECTION_STATE_FAILURE:
      return "failure";
    case VPN_CONNECTION_STATE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

VpnConnectionState ParseVpnConnectionState(const std::string& enum_string) {
  if (enum_string == "connected")
    return VPN_CONNECTION_STATE_CONNECTED;
  if (enum_string == "failure")
    return VPN_CONNECTION_STATE_FAILURE;
  return VPN_CONNECTION_STATE_NONE;
}


const char* ToString(UIEvent enum_param) {
  switch (enum_param) {
    case UI_EVENT_SHOWADDDIALOG:
      return "showAddDialog";
    case UI_EVENT_SHOWCONFIGUREDIALOG:
      return "showConfigureDialog";
    case UI_EVENT_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

UIEvent ParseUIEvent(const std::string& enum_string) {
  if (enum_string == "showAddDialog")
    return UI_EVENT_SHOWADDDIALOG;
  if (enum_string == "showConfigureDialog")
    return UI_EVENT_SHOWCONFIGUREDIALOG;
  return UI_EVENT_NONE;
}



//
// Functions
//

namespace CreateConfig {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& name_value = args[0];
    {
      auto* temp = name_value.GetIfString();
      if (!temp) {
        return std::unique_ptr<Params>();
      }
      params->name = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


base::Value::List Results::Create(const std::string& id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value::FromUniquePtrValue(std::make_unique<base::Value>(id)));

  return create_results;
}
}  // namespace CreateConfig

namespace DestroyConfig {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return std::unique_ptr<Params>();
      }
      params->id = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace DestroyConfig

namespace SetParameters {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& parameters_value = args[0];
    {
      if (!parameters_value.is_dict()) {
        return std::unique_ptr<Params>();
      }
      if (!Parameters::Populate(parameters_value, &params->parameters)) {
        return std::unique_ptr<Params>();
      }
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetParameters

namespace SendPacket {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& data_value = args[0];
    {
      if (!data_value.is_blob()) {
        return std::unique_ptr<Params>();
      }
      else {
        params->data = data_value.GetBlob();
      }
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SendPacket

namespace NotifyConnectionStateChanged {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& state_value = args[0];
    {
      const std::string* vpn_connection_state_as_string = state_value.GetIfString();
      if (!vpn_connection_state_as_string) {
        return std::unique_ptr<Params>();
      }
      params->state = ParseVpnConnectionState(*vpn_connection_state_as_string);
      if (params->state == VPN_CONNECTION_STATE_NONE) {
        return std::unique_ptr<Params>();
      }
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace NotifyConnectionStateChanged

//
// Events
//

namespace OnPlatformMessage {

const char kEventName[] = "vpnProvider.onPlatformMessage";

base::Value::List Create(const std::string& id, const PlatformMessage& message, const std::string& error) {
  base::Value::List create_results;
  create_results.reserve(3);
  create_results.Append(base::Value::FromUniquePtrValue(std::make_unique<base::Value>(id)));

  create_results.Append(base::Value::FromUniquePtrValue(std::make_unique<base::Value>(vpn_provider::ToString(message))));

  create_results.Append(base::Value::FromUniquePtrValue(std::make_unique<base::Value>(error)));

  return create_results;
}

}  // namespace OnPlatformMessage

namespace OnPacketReceived {

const char kEventName[] = "vpnProvider.onPacketReceived";

base::Value::List Create(const std::vector<uint8_t>& data) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value::FromUniquePtrValue(std::make_unique<base::Value>(data)));

  return create_results;
}

}  // namespace OnPacketReceived

namespace OnConfigRemoved {

const char kEventName[] = "vpnProvider.onConfigRemoved";

base::Value::List Create(const std::string& id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value::FromUniquePtrValue(std::make_unique<base::Value>(id)));

  return create_results;
}

}  // namespace OnConfigRemoved

namespace OnConfigCreated {

const char kEventName[] = "vpnProvider.onConfigCreated";

Data::Data()
 {}

Data::~Data() = default;
Data::Data(Data&& rhs) = default;
Data& Data::operator=(Data&& rhs) = default;
std::unique_ptr<base::DictionaryValue> Data::ToValue() const {
  auto to_value_result =
      std::make_unique<base::DictionaryValue>();

  to_value_result->MergeDictionary(&additional_properties);

  return to_value_result;
}


base::Value::List Create(const std::string& id, const std::string& name, const Data& data) {
  base::Value::List create_results;
  create_results.reserve(3);
  create_results.Append(base::Value::FromUniquePtrValue(std::make_unique<base::Value>(id)));

  create_results.Append(base::Value::FromUniquePtrValue(std::make_unique<base::Value>(name)));

  create_results.Append(base::Value::FromUniquePtrValue((data).ToValue()));

  return create_results;
}

}  // namespace OnConfigCreated

namespace OnUIEvent {

const char kEventName[] = "vpnProvider.onUIEvent";

base::Value::List Create(const UIEvent& event, const std::string& id) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(base::Value::FromUniquePtrValue(std::make_unique<base::Value>(vpn_provider::ToString(event))));

  create_results.Append(base::Value::FromUniquePtrValue(std::make_unique<base::Value>(id)));

  return create_results;
}

}  // namespace OnUIEvent

}  // namespace vpn_provider
}  // namespace api
}  // namespace extensions

