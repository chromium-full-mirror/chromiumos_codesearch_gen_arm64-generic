// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/bluetooth_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/bluetooth_private.h"

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
#include "extensions/common/api/bluetooth.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace bluetooth_private {
//
// Types
//

const char* ToString(PairingEventType enum_param) {
  switch (enum_param) {
    case PairingEventType::kRequestPincode:
      return "requestPincode";
    case PairingEventType::kDisplayPincode:
      return "displayPincode";
    case PairingEventType::kRequestPasskey:
      return "requestPasskey";
    case PairingEventType::kDisplayPasskey:
      return "displayPasskey";
    case PairingEventType::kKeysEntered:
      return "keysEntered";
    case PairingEventType::kConfirmPasskey:
      return "confirmPasskey";
    case PairingEventType::kRequestAuthorization:
      return "requestAuthorization";
    case PairingEventType::kComplete:
      return "complete";
    case PairingEventType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

PairingEventType ParsePairingEventType(base::StringPiece enum_string) {
  if (enum_string == "requestPincode")
    return PairingEventType::kRequestPincode;
  if (enum_string == "displayPincode")
    return PairingEventType::kDisplayPincode;
  if (enum_string == "requestPasskey")
    return PairingEventType::kRequestPasskey;
  if (enum_string == "displayPasskey")
    return PairingEventType::kDisplayPasskey;
  if (enum_string == "keysEntered")
    return PairingEventType::kKeysEntered;
  if (enum_string == "confirmPasskey")
    return PairingEventType::kConfirmPasskey;
  if (enum_string == "requestAuthorization")
    return PairingEventType::kRequestAuthorization;
  if (enum_string == "complete")
    return PairingEventType::kComplete;
  return PairingEventType::kNone;
}

std::u16string GetPairingEventTypeParseError(base::StringPiece enum_string) {
  return u"expected \"requestPincode\" or \"displayPincode\" or \"requestPasskey\" or \"displayPasskey\" or \"keysEntered\" or \"confirmPasskey\" or \"requestAuthorization\" or \"complete\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ConnectResultType enum_param) {
  switch (enum_param) {
    case ConnectResultType::kAlreadyConnected:
      return "alreadyConnected";
    case ConnectResultType::kAuthCanceled:
      return "authCanceled";
    case ConnectResultType::kAuthFailed:
      return "authFailed";
    case ConnectResultType::kAuthRejected:
      return "authRejected";
    case ConnectResultType::kAuthTimeout:
      return "authTimeout";
    case ConnectResultType::kFailed:
      return "failed";
    case ConnectResultType::kInProgress:
      return "inProgress";
    case ConnectResultType::kSuccess:
      return "success";
    case ConnectResultType::kUnknownError:
      return "unknownError";
    case ConnectResultType::kUnsupportedDevice:
      return "unsupportedDevice";
    case ConnectResultType::kNotReady:
      return "notReady";
    case ConnectResultType::kAlreadyExists:
      return "alreadyExists";
    case ConnectResultType::kNotConnected:
      return "notConnected";
    case ConnectResultType::kDoesNotExist:
      return "doesNotExist";
    case ConnectResultType::kInvalidArgs:
      return "invalidArgs";
    case ConnectResultType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ConnectResultType ParseConnectResultType(base::StringPiece enum_string) {
  if (enum_string == "alreadyConnected")
    return ConnectResultType::kAlreadyConnected;
  if (enum_string == "authCanceled")
    return ConnectResultType::kAuthCanceled;
  if (enum_string == "authFailed")
    return ConnectResultType::kAuthFailed;
  if (enum_string == "authRejected")
    return ConnectResultType::kAuthRejected;
  if (enum_string == "authTimeout")
    return ConnectResultType::kAuthTimeout;
  if (enum_string == "failed")
    return ConnectResultType::kFailed;
  if (enum_string == "inProgress")
    return ConnectResultType::kInProgress;
  if (enum_string == "success")
    return ConnectResultType::kSuccess;
  if (enum_string == "unknownError")
    return ConnectResultType::kUnknownError;
  if (enum_string == "unsupportedDevice")
    return ConnectResultType::kUnsupportedDevice;
  if (enum_string == "notReady")
    return ConnectResultType::kNotReady;
  if (enum_string == "alreadyExists")
    return ConnectResultType::kAlreadyExists;
  if (enum_string == "notConnected")
    return ConnectResultType::kNotConnected;
  if (enum_string == "doesNotExist")
    return ConnectResultType::kDoesNotExist;
  if (enum_string == "invalidArgs")
    return ConnectResultType::kInvalidArgs;
  return ConnectResultType::kNone;
}

std::u16string GetConnectResultTypeParseError(base::StringPiece enum_string) {
  return u"expected \"alreadyConnected\" or \"authCanceled\" or \"authFailed\" or \"authRejected\" or \"authTimeout\" or \"failed\" or \"inProgress\" or \"success\" or \"unknownError\" or \"unsupportedDevice\" or \"notReady\" or \"alreadyExists\" or \"notConnected\" or \"doesNotExist\" or \"invalidArgs\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(PairingResponse enum_param) {
  switch (enum_param) {
    case PairingResponse::kConfirm:
      return "confirm";
    case PairingResponse::kReject:
      return "reject";
    case PairingResponse::kCancel:
      return "cancel";
    case PairingResponse::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

PairingResponse ParsePairingResponse(base::StringPiece enum_string) {
  if (enum_string == "confirm")
    return PairingResponse::kConfirm;
  if (enum_string == "reject")
    return PairingResponse::kReject;
  if (enum_string == "cancel")
    return PairingResponse::kCancel;
  return PairingResponse::kNone;
}

std::u16string GetPairingResponseParseError(base::StringPiece enum_string) {
  return u"expected \"confirm\" or \"reject\" or \"cancel\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(TransportType enum_param) {
  switch (enum_param) {
    case TransportType::kLe:
      return "le";
    case TransportType::kBredr:
      return "bredr";
    case TransportType::kDual:
      return "dual";
    case TransportType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

TransportType ParseTransportType(base::StringPiece enum_string) {
  if (enum_string == "le")
    return TransportType::kLe;
  if (enum_string == "bredr")
    return TransportType::kBredr;
  if (enum_string == "dual")
    return TransportType::kDual;
  return TransportType::kNone;
}

std::u16string GetTransportTypeParseError(base::StringPiece enum_string) {
  return u"expected \"le\" or \"bredr\" or \"dual\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


PairingEvent::PairingEvent()
: pairing() {}

PairingEvent::~PairingEvent() = default;
PairingEvent::PairingEvent(PairingEvent&& rhs) noexcept = default;
PairingEvent& PairingEvent::operator=(PairingEvent&& rhs) noexcept = default;
PairingEvent PairingEvent::Clone() const {
  PairingEvent out;
  out.pairing = pairing;
  out.device = device.Clone();
  out.pincode = pincode;
  out.passkey = passkey;
  out.entered_key = entered_key;
  return out;
}

// static
bool PairingEvent::Populate(
    const base::Value::Dict& dict, PairingEvent& out) {
  const base::Value* pairing_value = dict.Find("pairing");
  if (!pairing_value) {
    return false;
  }
  {
    const std::string* pairing_event_type_as_string = (*pairing_value).GetIfString();
    if (!pairing_event_type_as_string) {
      return false;
    }
    out.pairing = ParsePairingEventType(*pairing_event_type_as_string);
    if (out.pairing == PairingEventType()) {
      return false;
    }
  }

  const base::Value* device_value = dict.Find("device");
  if (!device_value) {
    return false;
  }
  {
    if (!(*device_value).is_dict()) {
      return false;
    }
    if (!extensions::api::bluetooth::Device::Populate((*device_value).GetDict(), out.device)) {
      return false;
    }
  }

  const base::Value* pincode_value = dict.Find("pincode");
  if (pincode_value) {
    {
      auto* temp = (*pincode_value).GetIfString();
      if (!temp) {
        out.pincode = std::nullopt;
        return false;
      }
      out.pincode = *temp;
    }
  }

  const base::Value* passkey_value = dict.Find("passkey");
  if (passkey_value) {
    {
      auto temp = (*passkey_value).GetIfInt();
      if (!temp.has_value()) {
        out.passkey = std::nullopt;
        return false;
      }
      out.passkey = *temp;
    }
  }

  const base::Value* entered_key_value = dict.Find("enteredKey");
  if (entered_key_value) {
    {
      auto temp = (*entered_key_value).GetIfInt();
      if (!temp.has_value()) {
        out.entered_key = std::nullopt;
        return false;
      }
      out.entered_key = *temp;
    }
  }

  return true;
}

// static
bool PairingEvent::Populate(
    const base::Value& value, PairingEvent& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PairingEvent> PairingEvent::FromValue(const base::Value::Dict& value) {
  PairingEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PairingEvent> PairingEvent::FromValue(const base::Value& value) {
  PairingEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict PairingEvent::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("pairing", bluetooth_private::ToString(this->pairing));

  to_value_result.Set("device", (this->device).ToValue());

  if (this->pincode) {
    to_value_result.Set("pincode", *this->pincode);

  }
  if (this->passkey) {
    to_value_result.Set("passkey", *this->passkey);

  }
  if (this->entered_key) {
    to_value_result.Set("enteredKey", *this->entered_key);

  }

  return to_value_result;
}


NewAdapterState::NewAdapterState()
 {}

NewAdapterState::~NewAdapterState() = default;
NewAdapterState::NewAdapterState(NewAdapterState&& rhs) noexcept = default;
NewAdapterState& NewAdapterState::operator=(NewAdapterState&& rhs) noexcept = default;
NewAdapterState NewAdapterState::Clone() const {
  NewAdapterState out;
  out.name = name;
  out.powered = powered;
  out.discoverable = discoverable;
  return out;
}

// static
bool NewAdapterState::Populate(
    const base::Value::Dict& dict, NewAdapterState& out) {
  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    {
      auto* temp = (*name_value).GetIfString();
      if (!temp) {
        out.name = std::nullopt;
        return false;
      }
      out.name = *temp;
    }
  }

  const base::Value* powered_value = dict.Find("powered");
  if (powered_value) {
    {
      auto temp = (*powered_value).GetIfBool();
      if (!temp.has_value()) {
        out.powered = std::nullopt;
        return false;
      }
      out.powered = *temp;
    }
  }

  const base::Value* discoverable_value = dict.Find("discoverable");
  if (discoverable_value) {
    {
      auto temp = (*discoverable_value).GetIfBool();
      if (!temp.has_value()) {
        out.discoverable = std::nullopt;
        return false;
      }
      out.discoverable = *temp;
    }
  }

  return true;
}

// static
bool NewAdapterState::Populate(
    const base::Value& value, NewAdapterState& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<NewAdapterState> NewAdapterState::FromValue(const base::Value::Dict& value) {
  NewAdapterState out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<NewAdapterState> NewAdapterState::FromValue(const base::Value& value) {
  NewAdapterState out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict NewAdapterState::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->name) {
    to_value_result.Set("name", *this->name);

  }
  if (this->powered) {
    to_value_result.Set("powered", *this->powered);

  }
  if (this->discoverable) {
    to_value_result.Set("discoverable", *this->discoverable);

  }

  return to_value_result;
}


SetPairingResponseOptions::SetPairingResponseOptions()
: response() {}

SetPairingResponseOptions::~SetPairingResponseOptions() = default;
SetPairingResponseOptions::SetPairingResponseOptions(SetPairingResponseOptions&& rhs) noexcept = default;
SetPairingResponseOptions& SetPairingResponseOptions::operator=(SetPairingResponseOptions&& rhs) noexcept = default;
SetPairingResponseOptions SetPairingResponseOptions::Clone() const {
  SetPairingResponseOptions out;
  out.device = device.Clone();
  out.response = response;
  out.pincode = pincode;
  out.passkey = passkey;
  return out;
}

// static
bool SetPairingResponseOptions::Populate(
    const base::Value::Dict& dict, SetPairingResponseOptions& out) {
  const base::Value* device_value = dict.Find("device");
  if (!device_value) {
    return false;
  }
  {
    if (!(*device_value).is_dict()) {
      return false;
    }
    if (!extensions::api::bluetooth::Device::Populate((*device_value).GetDict(), out.device)) {
      return false;
    }
  }

  const base::Value* response_value = dict.Find("response");
  if (!response_value) {
    return false;
  }
  {
    const std::string* pairing_response_as_string = (*response_value).GetIfString();
    if (!pairing_response_as_string) {
      return false;
    }
    out.response = ParsePairingResponse(*pairing_response_as_string);
    if (out.response == PairingResponse()) {
      return false;
    }
  }

  const base::Value* pincode_value = dict.Find("pincode");
  if (pincode_value) {
    {
      auto* temp = (*pincode_value).GetIfString();
      if (!temp) {
        out.pincode = std::nullopt;
        return false;
      }
      out.pincode = *temp;
    }
  }

  const base::Value* passkey_value = dict.Find("passkey");
  if (passkey_value) {
    {
      auto temp = (*passkey_value).GetIfInt();
      if (!temp.has_value()) {
        out.passkey = std::nullopt;
        return false;
      }
      out.passkey = *temp;
    }
  }

  return true;
}

// static
bool SetPairingResponseOptions::Populate(
    const base::Value& value, SetPairingResponseOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SetPairingResponseOptions> SetPairingResponseOptions::FromValue(const base::Value::Dict& value) {
  SetPairingResponseOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SetPairingResponseOptions> SetPairingResponseOptions::FromValue(const base::Value& value) {
  SetPairingResponseOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SetPairingResponseOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("device", (this->device).ToValue());

  to_value_result.Set("response", bluetooth_private::ToString(this->response));

  if (this->pincode) {
    to_value_result.Set("pincode", *this->pincode);

  }
  if (this->passkey) {
    to_value_result.Set("passkey", *this->passkey);

  }

  return to_value_result;
}


DiscoveryFilter::Uuids::Uuids()
 {}

DiscoveryFilter::Uuids::~Uuids() = default;
DiscoveryFilter::Uuids::Uuids(Uuids&& rhs) noexcept = default;
DiscoveryFilter::Uuids& DiscoveryFilter::Uuids::operator=(Uuids&& rhs) noexcept = default;
DiscoveryFilter::Uuids DiscoveryFilter::Uuids::Clone() const {
  Uuids out;
  out.as_string = as_string;
  out.as_strings = as_strings;
  return out;
}

// static
bool DiscoveryFilter::Uuids::Populate(
    const base::Value& value, Uuids& out) {
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out.as_string = std::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_strings)) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
}

// static
std::optional<DiscoveryFilter::Uuids> DiscoveryFilter::Uuids::FromValue(const base::Value& value) {
  Uuids out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value DiscoveryFilter::Uuids::ToValue() const {
  base::Value result;
  if (as_string) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for uuids";
    result = base::Value(*as_string);

  }
  if (as_strings) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for uuids";
    result = base::Value(json_schema_compiler::util::CreateValueFromArray(*as_strings));

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for uuids";
  return result;
}



DiscoveryFilter::DiscoveryFilter()
: transport() {}

DiscoveryFilter::~DiscoveryFilter() = default;
DiscoveryFilter::DiscoveryFilter(DiscoveryFilter&& rhs) noexcept = default;
DiscoveryFilter& DiscoveryFilter::operator=(DiscoveryFilter&& rhs) noexcept = default;
DiscoveryFilter DiscoveryFilter::Clone() const {
  DiscoveryFilter out;
  out.transport = transport;
  if (uuids) {
    out.uuids = uuids->Clone();
  }
  out.rssi = rssi;
  out.pathloss = pathloss;
  return out;
}

// static
bool DiscoveryFilter::Populate(
    const base::Value::Dict& dict, DiscoveryFilter& out) {
  out.transport = TransportType();
  const base::Value* transport_value = dict.Find("transport");
  if (transport_value) {
    {
      const std::string* transport_type_as_string = (*transport_value).GetIfString();
      if (!transport_type_as_string) {
        return false;
      }
      out.transport = ParseTransportType(*transport_type_as_string);
      if (out.transport == TransportType()) {
        return false;
      }
    }
    } else {
    out.transport = TransportType();
  }

  const base::Value* uuids_value = dict.Find("uuids");
  if (uuids_value) {
    {
      Uuids temp;
      if (!Uuids::Populate((*uuids_value), temp))
        return false;
      out.uuids = std::move(temp);
    }
  }

  const base::Value* rssi_value = dict.Find("rssi");
  if (rssi_value) {
    {
      auto temp = (*rssi_value).GetIfInt();
      if (!temp.has_value()) {
        out.rssi = std::nullopt;
        return false;
      }
      out.rssi = *temp;
    }
  }

  const base::Value* pathloss_value = dict.Find("pathloss");
  if (pathloss_value) {
    {
      auto temp = (*pathloss_value).GetIfInt();
      if (!temp.has_value()) {
        out.pathloss = std::nullopt;
        return false;
      }
      out.pathloss = *temp;
    }
  }

  return true;
}

// static
bool DiscoveryFilter::Populate(
    const base::Value& value, DiscoveryFilter& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DiscoveryFilter> DiscoveryFilter::FromValue(const base::Value::Dict& value) {
  DiscoveryFilter out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DiscoveryFilter> DiscoveryFilter::FromValue(const base::Value& value) {
  DiscoveryFilter out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DiscoveryFilter::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->transport != TransportType()) {
    to_value_result.Set("transport", bluetooth_private::ToString(this->transport));

  }
  if (this->uuids) {
    to_value_result.Set("uuids", (this->uuids)->ToValue());

  }
  if (this->rssi) {
    to_value_result.Set("rssi", *this->rssi);

  }
  if (this->pathloss) {
    to_value_result.Set("pathloss", *this->pathloss);

  }

  return to_value_result;
}



//
// Functions
//

namespace SetAdapterState {

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
    const base::Value& adapter_state_value = args[0];
    {
      if (!adapter_state_value.is_dict()) {
        return std::nullopt;
      }
      if (!NewAdapterState::Populate(adapter_state_value.GetDict(), params.adapter_state)) {
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
}  // namespace SetAdapterState

namespace SetPairingResponse {

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
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      if (!SetPairingResponseOptions::Populate(options_value.GetDict(), params.options)) {
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
}  // namespace SetPairingResponse

namespace DisconnectAll {

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
    const base::Value& device_address_value = args[0];
    {
      auto* temp = device_address_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.device_address = *temp;
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
}  // namespace DisconnectAll

namespace ForgetDevice {

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
    const base::Value& device_address_value = args[0];
    {
      auto* temp = device_address_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.device_address = *temp;
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
}  // namespace ForgetDevice

namespace SetDiscoveryFilter {

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
    const base::Value& discovery_filter_value = args[0];
    {
      if (!discovery_filter_value.is_dict()) {
        return std::nullopt;
      }
      if (!DiscoveryFilter::Populate(discovery_filter_value.GetDict(), params.discovery_filter)) {
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
}  // namespace SetDiscoveryFilter

namespace Connect {

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
    const base::Value& device_address_value = args[0];
    {
      auto* temp = device_address_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.device_address = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const ConnectResultType& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(bluetooth_private::ToString(result));

  return create_results;
}
}  // namespace Connect

namespace Pair {

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
    const base::Value& device_address_value = args[0];
    {
      auto* temp = device_address_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.device_address = *temp;
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
}  // namespace Pair

namespace RecordPairing {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 2 || args.size() > 3) {
    return std::nullopt;
  }
  Params params;
  params.result = ConnectResultType();

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& transport_value = args[0];
    {
      const std::string* transport_as_string = transport_value.GetIfString();
      if (!transport_as_string) {
        return std::nullopt;
      }
      params.transport = bluetooth::ParseTransport(*transport_as_string);
      if (params.transport == bluetooth::Transport()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& pairing_duration_ms_value = args[1];
    {
      auto temp = pairing_duration_ms_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.pairing_duration_ms = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& result_value = args[2];
    {
      const std::string* connect_result_type_as_string = result_value.GetIfString();
      if (!connect_result_type_as_string) {
        return std::nullopt;
      }
      params.result = ParseConnectResultType(*connect_result_type_as_string);
      if (params.result == ConnectResultType()) {
        return std::nullopt;
      }
    }
  }

  return params;
}


}  // namespace RecordPairing

namespace RecordReconnection {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;
  params.result = ConnectResultType();

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& result_value = args[0];
    {
      const std::string* connect_result_type_as_string = result_value.GetIfString();
      if (!connect_result_type_as_string) {
        return std::nullopt;
      }
      params.result = ParseConnectResultType(*connect_result_type_as_string);
      if (params.result == ConnectResultType()) {
        return std::nullopt;
      }
    }
  }

  return params;
}


}  // namespace RecordReconnection

namespace RecordDeviceSelection {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 3) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& selection_duration_ms_value = args[0];
    {
      auto temp = selection_duration_ms_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.selection_duration_ms = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& was_paired_value = args[1];
    {
      auto temp = was_paired_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.was_paired = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& transport_value = args[2];
    {
      const std::string* transport_as_string = transport_value.GetIfString();
      if (!transport_as_string) {
        return std::nullopt;
      }
      params.transport = bluetooth::ParseTransport(*transport_as_string);
      if (params.transport == bluetooth::Transport()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace RecordDeviceSelection

//
// Events
//

namespace OnPairing {

const char kEventName[] = "bluetoothPrivate.onPairing";

base::Value::List Create(const PairingEvent& pairing_event) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((pairing_event).ToValue());

  return create_results;
}

}  // namespace OnPairing

namespace OnDeviceAddressChanged {

const char kEventName[] = "bluetoothPrivate.onDeviceAddressChanged";

base::Value::List Create(const extensions::api::bluetooth::Device& device, const std::string& old_address) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append((device).ToValue());

  create_results.Append(old_address);

  return create_results;
}

}  // namespace OnDeviceAddressChanged

}  // namespace bluetooth_private
}  // namespace api
}  // namespace extensions

