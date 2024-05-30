// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/vpn_provider.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/vpn_provider.h"

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
#include "base/strings/string_piece.h"


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
Parameters::Parameters(Parameters&& rhs) noexcept = default;
Parameters& Parameters::operator=(Parameters&& rhs) noexcept = default;
Parameters Parameters::Clone() const {
  Parameters out;
  out.address = address;
  out.broadcast_address = broadcast_address;
  out.mtu = mtu;
  out.exclusion_list = exclusion_list;
  out.inclusion_list = inclusion_list;
  out.domain_search = domain_search;
  out.dns_servers = dns_servers;
  out.reconnect = reconnect;
  return out;
}

// static
bool Parameters::Populate(
    const base::Value::Dict& dict, Parameters& out) {
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

  const base::Value* broadcast_address_value = dict.Find("broadcastAddress");
  if (broadcast_address_value) {
    {
      auto* temp = (*broadcast_address_value).GetIfString();
      if (!temp) {
        out.broadcast_address = std::nullopt;
        return false;
      }
      out.broadcast_address = *temp;
    }
  }

  const base::Value* mtu_value = dict.Find("mtu");
  if (mtu_value) {
    {
      auto* temp = (*mtu_value).GetIfString();
      if (!temp) {
        out.mtu = std::nullopt;
        return false;
      }
      out.mtu = *temp;
    }
  }

  const base::Value* exclusion_list_value = dict.Find("exclusionList");
  if (!exclusion_list_value) {
    return false;
  }
  {
    if (!(*exclusion_list_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*exclusion_list_value).GetList(), out.exclusion_list)) {
        return false;
      }
    }
  }

  const base::Value* inclusion_list_value = dict.Find("inclusionList");
  if (!inclusion_list_value) {
    return false;
  }
  {
    if (!(*inclusion_list_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*inclusion_list_value).GetList(), out.inclusion_list)) {
        return false;
      }
    }
  }

  const base::Value* domain_search_value = dict.Find("domainSearch");
  if (domain_search_value) {
    {
      if (!(*domain_search_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*domain_search_value).GetList(), out.domain_search)) {
          return false;
        }
      }
    }
  }

  const base::Value* dns_servers_value = dict.Find("dnsServers");
  if (!dns_servers_value) {
    return false;
  }
  {
    if (!(*dns_servers_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*dns_servers_value).GetList(), out.dns_servers)) {
        return false;
      }
    }
  }

  const base::Value* reconnect_value = dict.Find("reconnect");
  if (reconnect_value) {
    {
      auto* temp = (*reconnect_value).GetIfString();
      if (!temp) {
        out.reconnect = std::nullopt;
        return false;
      }
      out.reconnect = *temp;
    }
  }

  return true;
}

// static
bool Parameters::Populate(
    const base::Value& value, Parameters& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Parameters> Parameters::FromValue(const base::Value::Dict& value) {
  Parameters out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Parameters> Parameters::FromValue(const base::Value& value) {
  Parameters out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Parameters::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("address", this->address);

  if (this->broadcast_address) {
    to_value_result.Set("broadcastAddress", *this->broadcast_address);

  }
  if (this->mtu) {
    to_value_result.Set("mtu", *this->mtu);

  }
  to_value_result.Set("exclusionList", json_schema_compiler::util::CreateValueFromArray(this->exclusion_list));

  to_value_result.Set("inclusionList", json_schema_compiler::util::CreateValueFromArray(this->inclusion_list));

  if (this->domain_search) {
    to_value_result.Set("domainSearch", json_schema_compiler::util::CreateValueFromArray(*this->domain_search));

  }
  to_value_result.Set("dnsServers", json_schema_compiler::util::CreateValueFromArray(this->dns_servers));

  if (this->reconnect) {
    to_value_result.Set("reconnect", *this->reconnect);

  }

  return to_value_result;
}


const char* ToString(PlatformMessage enum_param) {
  switch (enum_param) {
    case PlatformMessage::kConnected:
      return "connected";
    case PlatformMessage::kDisconnected:
      return "disconnected";
    case PlatformMessage::kError:
      return "error";
    case PlatformMessage::kLinkDown:
      return "linkDown";
    case PlatformMessage::kLinkUp:
      return "linkUp";
    case PlatformMessage::kLinkChanged:
      return "linkChanged";
    case PlatformMessage::kSuspend:
      return "suspend";
    case PlatformMessage::kResume:
      return "resume";
    case PlatformMessage::kNone:
      return "";
  }
  NOTREACHED_IN_MIGRATION();
  return "";
}

PlatformMessage ParsePlatformMessage(base::StringPiece enum_string) {
  if (enum_string == "connected")
    return PlatformMessage::kConnected;
  if (enum_string == "disconnected")
    return PlatformMessage::kDisconnected;
  if (enum_string == "error")
    return PlatformMessage::kError;
  if (enum_string == "linkDown")
    return PlatformMessage::kLinkDown;
  if (enum_string == "linkUp")
    return PlatformMessage::kLinkUp;
  if (enum_string == "linkChanged")
    return PlatformMessage::kLinkChanged;
  if (enum_string == "suspend")
    return PlatformMessage::kSuspend;
  if (enum_string == "resume")
    return PlatformMessage::kResume;
  return PlatformMessage::kNone;
}

std::u16string GetPlatformMessageParseError(base::StringPiece enum_string) {
  return u"expected \"connected\" or \"disconnected\" or \"error\" or \"linkDown\" or \"linkUp\" or \"linkChanged\" or \"suspend\" or \"resume\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(VpnConnectionState enum_param) {
  switch (enum_param) {
    case VpnConnectionState::kConnected:
      return "connected";
    case VpnConnectionState::kFailure:
      return "failure";
    case VpnConnectionState::kNone:
      return "";
  }
  NOTREACHED_IN_MIGRATION();
  return "";
}

VpnConnectionState ParseVpnConnectionState(base::StringPiece enum_string) {
  if (enum_string == "connected")
    return VpnConnectionState::kConnected;
  if (enum_string == "failure")
    return VpnConnectionState::kFailure;
  return VpnConnectionState::kNone;
}

std::u16string GetVpnConnectionStateParseError(base::StringPiece enum_string) {
  return u"expected \"connected\" or \"failure\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(UIEvent enum_param) {
  switch (enum_param) {
    case UIEvent::kShowAddDialog:
      return "showAddDialog";
    case UIEvent::kShowConfigureDialog:
      return "showConfigureDialog";
    case UIEvent::kNone:
      return "";
  }
  NOTREACHED_IN_MIGRATION();
  return "";
}

UIEvent ParseUIEvent(base::StringPiece enum_string) {
  if (enum_string == "showAddDialog")
    return UIEvent::kShowAddDialog;
  if (enum_string == "showConfigureDialog")
    return UIEvent::kShowConfigureDialog;
  return UIEvent::kNone;
}

std::u16string GetUIEventParseError(base::StringPiece enum_string) {
  return u"expected \"showAddDialog\" or \"showConfigureDialog\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



//
// Functions
//

namespace CreateConfig {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& name_value = args[0];
    {
      auto* temp = name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(id);

  return create_results;
}
}  // namespace CreateConfig

namespace DestroyConfig {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return std::nullopt;
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
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& parameters_value = args[0];
    {
      if (!parameters_value.is_dict()) {
        return std::nullopt;
      }
      if (!Parameters::Populate(parameters_value.GetDict(), params.parameters)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
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
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& data_value = args[0];
    {
      if (!data_value.is_blob()) {
        return std::nullopt;
      }
      else {
        params.data = data_value.GetBlob();
      }
    }
  }
  else {
    return std::nullopt;
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
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& state_value = args[0];
    {
      const std::string* vpn_connection_state_as_string = state_value.GetIfString();
      if (!vpn_connection_state_as_string) {
        return std::nullopt;
      }
      params.state = ParseVpnConnectionState(*vpn_connection_state_as_string);
      if (params.state == VpnConnectionState()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
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
  create_results.Append(id);

  create_results.Append(vpn_provider::ToString(message));

  create_results.Append(error);

  return create_results;
}

}  // namespace OnPlatformMessage

namespace OnPacketReceived {

const char kEventName[] = "vpnProvider.onPacketReceived";

base::Value::List Create(const std::vector<uint8_t>& data) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value(data));

  return create_results;
}

}  // namespace OnPacketReceived

namespace OnConfigRemoved {

const char kEventName[] = "vpnProvider.onConfigRemoved";

base::Value::List Create(const std::string& id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(id);

  return create_results;
}

}  // namespace OnConfigRemoved

namespace OnConfigCreated {

const char kEventName[] = "vpnProvider.onConfigCreated";

Data::Data()
 {}

Data::~Data() = default;
Data::Data(Data&& rhs) noexcept = default;
Data& Data::operator=(Data&& rhs) noexcept = default;
base::Value::Dict Data::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::Value::List Create(const std::string& id, const std::string& name, const Data& data) {
  base::Value::List create_results;
  create_results.reserve(3);
  create_results.Append(id);

  create_results.Append(name);

  create_results.Append((data).ToValue());

  return create_results;
}

}  // namespace OnConfigCreated

namespace OnUIEvent {

const char kEventName[] = "vpnProvider.onUIEvent";

base::Value::List Create(const UIEvent& event, const std::string& id) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(vpn_provider::ToString(event));

  create_results.Append(id);

  return create_results;
}

}  // namespace OnUIEvent

}  // namespace vpn_provider
}  // namespace api
}  // namespace extensions

