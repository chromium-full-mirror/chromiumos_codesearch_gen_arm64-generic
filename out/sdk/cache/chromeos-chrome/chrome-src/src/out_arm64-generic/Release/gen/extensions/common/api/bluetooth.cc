// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/bluetooth.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/bluetooth.h"

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
namespace bluetooth {
//
// Types
//

const char* ToString(VendorIdSource enum_param) {
  switch (enum_param) {
    case VendorIdSource::kBluetooth:
      return "bluetooth";
    case VendorIdSource::kUsb:
      return "usb";
    case VendorIdSource::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

VendorIdSource ParseVendorIdSource(base::StringPiece enum_string) {
  if (enum_string == "bluetooth")
    return VendorIdSource::kBluetooth;
  if (enum_string == "usb")
    return VendorIdSource::kUsb;
  return VendorIdSource::kNone;
}

std::u16string GetVendorIdSourceParseError(base::StringPiece enum_string) {
  return u"expected \"bluetooth\" or \"usb\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DeviceType enum_param) {
  switch (enum_param) {
    case DeviceType::kComputer:
      return "computer";
    case DeviceType::kPhone:
      return "phone";
    case DeviceType::kModem:
      return "modem";
    case DeviceType::kAudio:
      return "audio";
    case DeviceType::kCarAudio:
      return "carAudio";
    case DeviceType::kVideo:
      return "video";
    case DeviceType::kPeripheral:
      return "peripheral";
    case DeviceType::kJoystick:
      return "joystick";
    case DeviceType::kGamepad:
      return "gamepad";
    case DeviceType::kKeyboard:
      return "keyboard";
    case DeviceType::kMouse:
      return "mouse";
    case DeviceType::kTablet:
      return "tablet";
    case DeviceType::kKeyboardMouseCombo:
      return "keyboardMouseCombo";
    case DeviceType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DeviceType ParseDeviceType(base::StringPiece enum_string) {
  if (enum_string == "computer")
    return DeviceType::kComputer;
  if (enum_string == "phone")
    return DeviceType::kPhone;
  if (enum_string == "modem")
    return DeviceType::kModem;
  if (enum_string == "audio")
    return DeviceType::kAudio;
  if (enum_string == "carAudio")
    return DeviceType::kCarAudio;
  if (enum_string == "video")
    return DeviceType::kVideo;
  if (enum_string == "peripheral")
    return DeviceType::kPeripheral;
  if (enum_string == "joystick")
    return DeviceType::kJoystick;
  if (enum_string == "gamepad")
    return DeviceType::kGamepad;
  if (enum_string == "keyboard")
    return DeviceType::kKeyboard;
  if (enum_string == "mouse")
    return DeviceType::kMouse;
  if (enum_string == "tablet")
    return DeviceType::kTablet;
  if (enum_string == "keyboardMouseCombo")
    return DeviceType::kKeyboardMouseCombo;
  return DeviceType::kNone;
}

std::u16string GetDeviceTypeParseError(base::StringPiece enum_string) {
  return u"expected \"computer\" or \"phone\" or \"modem\" or \"audio\" or \"carAudio\" or \"video\" or \"peripheral\" or \"joystick\" or \"gamepad\" or \"keyboard\" or \"mouse\" or \"tablet\" or \"keyboardMouseCombo\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(FilterType enum_param) {
  switch (enum_param) {
    case FilterType::kAll:
      return "all";
    case FilterType::kKnown:
      return "known";
    case FilterType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

FilterType ParseFilterType(base::StringPiece enum_string) {
  if (enum_string == "all")
    return FilterType::kAll;
  if (enum_string == "known")
    return FilterType::kKnown;
  return FilterType::kNone;
}

std::u16string GetFilterTypeParseError(base::StringPiece enum_string) {
  return u"expected \"all\" or \"known\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(Transport enum_param) {
  switch (enum_param) {
    case Transport::kInvalid:
      return "invalid";
    case Transport::kClassic:
      return "classic";
    case Transport::kLe:
      return "le";
    case Transport::kDual:
      return "dual";
    case Transport::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

Transport ParseTransport(base::StringPiece enum_string) {
  if (enum_string == "invalid")
    return Transport::kInvalid;
  if (enum_string == "classic")
    return Transport::kClassic;
  if (enum_string == "le")
    return Transport::kLe;
  if (enum_string == "dual")
    return Transport::kDual;
  return Transport::kNone;
}

std::u16string GetTransportParseError(base::StringPiece enum_string) {
  return u"expected \"invalid\" or \"classic\" or \"le\" or \"dual\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


AdapterState::AdapterState()
: powered(false),
available(false),
discovering(false) {}

AdapterState::~AdapterState() = default;
AdapterState::AdapterState(AdapterState&& rhs) noexcept = default;
AdapterState& AdapterState::operator=(AdapterState&& rhs) noexcept = default;
AdapterState AdapterState::Clone() const {
  AdapterState out;
  out.address = address;
  out.name = name;
  out.powered = powered;
  out.available = available;
  out.discovering = discovering;
  return out;
}

// static
bool AdapterState::Populate(
    const base::Value::Dict& dict, AdapterState& out) {
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

  const base::Value* powered_value = dict.Find("powered");
  if (!powered_value) {
    return false;
  }
  {
    auto temp = (*powered_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.powered = *temp;
  }

  const base::Value* available_value = dict.Find("available");
  if (!available_value) {
    return false;
  }
  {
    auto temp = (*available_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.available = *temp;
  }

  const base::Value* discovering_value = dict.Find("discovering");
  if (!discovering_value) {
    return false;
  }
  {
    auto temp = (*discovering_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.discovering = *temp;
  }

  return true;
}

// static
bool AdapterState::Populate(
    const base::Value& value, AdapterState& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AdapterState> AdapterState::FromValue(const base::Value::Dict& value) {
  AdapterState out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AdapterState> AdapterState::FromValue(const base::Value& value) {
  AdapterState out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict AdapterState::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("address", this->address);

  to_value_result.Set("name", this->name);

  to_value_result.Set("powered", this->powered);

  to_value_result.Set("available", this->available);

  to_value_result.Set("discovering", this->discovering);


  return to_value_result;
}


Device::Device()
: vendor_id_source(),
type(),
transport() {}

Device::~Device() = default;
Device::Device(Device&& rhs) noexcept = default;
Device& Device::operator=(Device&& rhs) noexcept = default;
Device Device::Clone() const {
  Device out;
  out.address = address;
  out.name = name;
  out.device_class = device_class;
  out.vendor_id_source = vendor_id_source;
  out.vendor_id = vendor_id;
  out.product_id = product_id;
  out.device_id = device_id;
  out.type = type;
  out.paired = paired;
  out.connected = connected;
  out.connecting = connecting;
  out.connectable = connectable;
  out.uuids = uuids;
  out.inquiry_rssi = inquiry_rssi;
  out.inquiry_tx_power = inquiry_tx_power;
  out.transport = transport;
  out.battery_percentage = battery_percentage;
  return out;
}

// static
bool Device::Populate(
    const base::Value::Dict& dict, Device& out) {
  out.vendor_id_source = VendorIdSource();
  out.type = DeviceType();
  out.transport = Transport();
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

  const base::Value* device_class_value = dict.Find("deviceClass");
  if (device_class_value) {
    {
      auto temp = (*device_class_value).GetIfInt();
      if (!temp.has_value()) {
        out.device_class = std::nullopt;
        return false;
      }
      out.device_class = *temp;
    }
  }

  const base::Value* vendor_id_source_value = dict.Find("vendorIdSource");
  if (vendor_id_source_value) {
    {
      const std::string* vendor_id_source_as_string = (*vendor_id_source_value).GetIfString();
      if (!vendor_id_source_as_string) {
        return false;
      }
      out.vendor_id_source = ParseVendorIdSource(*vendor_id_source_as_string);
      if (out.vendor_id_source == VendorIdSource()) {
        return false;
      }
    }
    } else {
    out.vendor_id_source = VendorIdSource();
  }

  const base::Value* vendor_id_value = dict.Find("vendorId");
  if (vendor_id_value) {
    {
      auto temp = (*vendor_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.vendor_id = std::nullopt;
        return false;
      }
      out.vendor_id = *temp;
    }
  }

  const base::Value* product_id_value = dict.Find("productId");
  if (product_id_value) {
    {
      auto temp = (*product_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.product_id = std::nullopt;
        return false;
      }
      out.product_id = *temp;
    }
  }

  const base::Value* device_id_value = dict.Find("deviceId");
  if (device_id_value) {
    {
      auto temp = (*device_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.device_id = std::nullopt;
        return false;
      }
      out.device_id = *temp;
    }
  }

  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    {
      const std::string* device_type_as_string = (*type_value).GetIfString();
      if (!device_type_as_string) {
        return false;
      }
      out.type = ParseDeviceType(*device_type_as_string);
      if (out.type == DeviceType()) {
        return false;
      }
    }
    } else {
    out.type = DeviceType();
  }

  const base::Value* paired_value = dict.Find("paired");
  if (paired_value) {
    {
      auto temp = (*paired_value).GetIfBool();
      if (!temp.has_value()) {
        out.paired = std::nullopt;
        return false;
      }
      out.paired = *temp;
    }
  }

  const base::Value* connected_value = dict.Find("connected");
  if (connected_value) {
    {
      auto temp = (*connected_value).GetIfBool();
      if (!temp.has_value()) {
        out.connected = std::nullopt;
        return false;
      }
      out.connected = *temp;
    }
  }

  const base::Value* connecting_value = dict.Find("connecting");
  if (connecting_value) {
    {
      auto temp = (*connecting_value).GetIfBool();
      if (!temp.has_value()) {
        out.connecting = std::nullopt;
        return false;
      }
      out.connecting = *temp;
    }
  }

  const base::Value* connectable_value = dict.Find("connectable");
  if (connectable_value) {
    {
      auto temp = (*connectable_value).GetIfBool();
      if (!temp.has_value()) {
        out.connectable = std::nullopt;
        return false;
      }
      out.connectable = *temp;
    }
  }

  const base::Value* uuids_value = dict.Find("uuids");
  if (uuids_value) {
    {
      if (!(*uuids_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*uuids_value).GetList(), out.uuids)) {
          return false;
        }
      }
    }
  }

  const base::Value* inquiry_rssi_value = dict.Find("inquiryRssi");
  if (inquiry_rssi_value) {
    {
      auto temp = (*inquiry_rssi_value).GetIfInt();
      if (!temp.has_value()) {
        out.inquiry_rssi = std::nullopt;
        return false;
      }
      out.inquiry_rssi = *temp;
    }
  }

  const base::Value* inquiry_tx_power_value = dict.Find("inquiryTxPower");
  if (inquiry_tx_power_value) {
    {
      auto temp = (*inquiry_tx_power_value).GetIfInt();
      if (!temp.has_value()) {
        out.inquiry_tx_power = std::nullopt;
        return false;
      }
      out.inquiry_tx_power = *temp;
    }
  }

  const base::Value* transport_value = dict.Find("transport");
  if (transport_value) {
    {
      const std::string* transport_as_string = (*transport_value).GetIfString();
      if (!transport_as_string) {
        return false;
      }
      out.transport = ParseTransport(*transport_as_string);
      if (out.transport == Transport()) {
        return false;
      }
    }
    } else {
    out.transport = Transport();
  }

  const base::Value* battery_percentage_value = dict.Find("batteryPercentage");
  if (battery_percentage_value) {
    {
      auto temp = (*battery_percentage_value).GetIfInt();
      if (!temp.has_value()) {
        out.battery_percentage = std::nullopt;
        return false;
      }
      out.battery_percentage = *temp;
    }
  }

  return true;
}

// static
bool Device::Populate(
    const base::Value& value, Device& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Device> Device::FromValue(const base::Value::Dict& value) {
  Device out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Device> Device::FromValue(const base::Value& value) {
  Device out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Device::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("address", this->address);

  if (this->name) {
    to_value_result.Set("name", *this->name);

  }
  if (this->device_class) {
    to_value_result.Set("deviceClass", *this->device_class);

  }
  if (this->vendor_id_source != VendorIdSource()) {
    to_value_result.Set("vendorIdSource", bluetooth::ToString(this->vendor_id_source));

  }
  if (this->vendor_id) {
    to_value_result.Set("vendorId", *this->vendor_id);

  }
  if (this->product_id) {
    to_value_result.Set("productId", *this->product_id);

  }
  if (this->device_id) {
    to_value_result.Set("deviceId", *this->device_id);

  }
  if (this->type != DeviceType()) {
    to_value_result.Set("type", bluetooth::ToString(this->type));

  }
  if (this->paired) {
    to_value_result.Set("paired", *this->paired);

  }
  if (this->connected) {
    to_value_result.Set("connected", *this->connected);

  }
  if (this->connecting) {
    to_value_result.Set("connecting", *this->connecting);

  }
  if (this->connectable) {
    to_value_result.Set("connectable", *this->connectable);

  }
  if (this->uuids) {
    to_value_result.Set("uuids", json_schema_compiler::util::CreateValueFromArray(*this->uuids));

  }
  if (this->inquiry_rssi) {
    to_value_result.Set("inquiryRssi", *this->inquiry_rssi);

  }
  if (this->inquiry_tx_power) {
    to_value_result.Set("inquiryTxPower", *this->inquiry_tx_power);

  }
  if (this->transport != Transport()) {
    to_value_result.Set("transport", bluetooth::ToString(this->transport));

  }
  if (this->battery_percentage) {
    to_value_result.Set("batteryPercentage", *this->battery_percentage);

  }

  return to_value_result;
}


BluetoothFilter::BluetoothFilter()
: filter_type() {}

BluetoothFilter::~BluetoothFilter() = default;
BluetoothFilter::BluetoothFilter(BluetoothFilter&& rhs) noexcept = default;
BluetoothFilter& BluetoothFilter::operator=(BluetoothFilter&& rhs) noexcept = default;
BluetoothFilter BluetoothFilter::Clone() const {
  BluetoothFilter out;
  out.filter_type = filter_type;
  out.limit = limit;
  return out;
}

// static
bool BluetoothFilter::Populate(
    const base::Value::Dict& dict, BluetoothFilter& out) {
  out.filter_type = FilterType();
  const base::Value* filter_type_value = dict.Find("filterType");
  if (filter_type_value) {
    {
      const std::string* filter_type_as_string = (*filter_type_value).GetIfString();
      if (!filter_type_as_string) {
        return false;
      }
      out.filter_type = ParseFilterType(*filter_type_as_string);
      if (out.filter_type == FilterType()) {
        return false;
      }
    }
    } else {
    out.filter_type = FilterType();
  }

  const base::Value* limit_value = dict.Find("limit");
  if (limit_value) {
    {
      auto temp = (*limit_value).GetIfInt();
      if (!temp.has_value()) {
        out.limit = std::nullopt;
        return false;
      }
      out.limit = *temp;
    }
  }

  return true;
}

// static
bool BluetoothFilter::Populate(
    const base::Value& value, BluetoothFilter& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<BluetoothFilter> BluetoothFilter::FromValue(const base::Value::Dict& value) {
  BluetoothFilter out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<BluetoothFilter> BluetoothFilter::FromValue(const base::Value& value) {
  BluetoothFilter out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict BluetoothFilter::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->filter_type != FilterType()) {
    to_value_result.Set("filterType", bluetooth::ToString(this->filter_type));

  }
  if (this->limit) {
    to_value_result.Set("limit", *this->limit);

  }

  return to_value_result;
}



//
// Functions
//

namespace GetAdapterState {

base::Value::List Results::Create(const AdapterState& adapter_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((adapter_info).ToValue());

  return create_results;
}
}  // namespace GetAdapterState

namespace GetDevice {

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


base::Value::List Results::Create(const Device& device_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((device_info).ToValue());

  return create_results;
}
}  // namespace GetDevice

namespace GetDevices {

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

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& filter_value = args[0];
    {
      if (!filter_value.is_dict()) {
        return std::nullopt;
      }
      else {
        BluetoothFilter temp;
        if (!BluetoothFilter::Populate(filter_value.GetDict(), temp))
          return std::nullopt;
        params.filter = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const std::vector<Device>& device_infos) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(device_infos));

  return create_results;
}
}  // namespace GetDevices

namespace StartDiscovery {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace StartDiscovery

namespace StopDiscovery {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace StopDiscovery

//
// Events
//

namespace OnAdapterStateChanged {

const char kEventName[] = "bluetooth.onAdapterStateChanged";

base::Value::List Create(const AdapterState& state) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((state).ToValue());

  return create_results;
}

}  // namespace OnAdapterStateChanged

namespace OnDeviceAdded {

const char kEventName[] = "bluetooth.onDeviceAdded";

base::Value::List Create(const Device& device) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((device).ToValue());

  return create_results;
}

}  // namespace OnDeviceAdded

namespace OnDeviceChanged {

const char kEventName[] = "bluetooth.onDeviceChanged";

base::Value::List Create(const Device& device) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((device).ToValue());

  return create_results;
}

}  // namespace OnDeviceChanged

namespace OnDeviceRemoved {

const char kEventName[] = "bluetooth.onDeviceRemoved";

base::Value::List Create(const Device& device) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((device).ToValue());

  return create_results;
}

}  // namespace OnDeviceRemoved

}  // namespace bluetooth
}  // namespace api
}  // namespace extensions

