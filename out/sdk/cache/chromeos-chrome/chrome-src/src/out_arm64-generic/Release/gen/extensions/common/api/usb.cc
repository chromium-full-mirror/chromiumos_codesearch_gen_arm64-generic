// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/usb.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/usb.h"

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
namespace usb {
//
// Types
//

const char* ToString(Direction enum_param) {
  switch (enum_param) {
    case Direction::kIn:
      return "in";
    case Direction::kOut:
      return "out";
    case Direction::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

Direction ParseDirection(base::StringPiece enum_string) {
  if (enum_string == "in")
    return Direction::kIn;
  if (enum_string == "out")
    return Direction::kOut;
  return Direction::kNone;
}

std::u16string GetDirectionParseError(base::StringPiece enum_string) {
  return u"expected \"in\" or \"out\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(Recipient enum_param) {
  switch (enum_param) {
    case Recipient::kDevice:
      return "device";
    case Recipient::kInterface:
      return "interface";
    case Recipient::kEndpoint:
      return "endpoint";
    case Recipient::kOther:
      return "other";
    case Recipient::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

Recipient ParseRecipient(base::StringPiece enum_string) {
  if (enum_string == "device")
    return Recipient::kDevice;
  if (enum_string == "interface")
    return Recipient::kInterface;
  if (enum_string == "endpoint")
    return Recipient::kEndpoint;
  if (enum_string == "other")
    return Recipient::kOther;
  return Recipient::kNone;
}

std::u16string GetRecipientParseError(base::StringPiece enum_string) {
  return u"expected \"device\" or \"interface\" or \"endpoint\" or \"other\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(RequestType enum_param) {
  switch (enum_param) {
    case RequestType::kStandard:
      return "standard";
    case RequestType::kClass:
      return "class";
    case RequestType::kVendor:
      return "vendor";
    case RequestType::kReserved:
      return "reserved";
    case RequestType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

RequestType ParseRequestType(base::StringPiece enum_string) {
  if (enum_string == "standard")
    return RequestType::kStandard;
  if (enum_string == "class")
    return RequestType::kClass;
  if (enum_string == "vendor")
    return RequestType::kVendor;
  if (enum_string == "reserved")
    return RequestType::kReserved;
  return RequestType::kNone;
}

std::u16string GetRequestTypeParseError(base::StringPiece enum_string) {
  return u"expected \"standard\" or \"class\" or \"vendor\" or \"reserved\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(TransferType enum_param) {
  switch (enum_param) {
    case TransferType::kControl:
      return "control";
    case TransferType::kInterrupt:
      return "interrupt";
    case TransferType::kIsochronous:
      return "isochronous";
    case TransferType::kBulk:
      return "bulk";
    case TransferType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

TransferType ParseTransferType(base::StringPiece enum_string) {
  if (enum_string == "control")
    return TransferType::kControl;
  if (enum_string == "interrupt")
    return TransferType::kInterrupt;
  if (enum_string == "isochronous")
    return TransferType::kIsochronous;
  if (enum_string == "bulk")
    return TransferType::kBulk;
  return TransferType::kNone;
}

std::u16string GetTransferTypeParseError(base::StringPiece enum_string) {
  return u"expected \"control\" or \"interrupt\" or \"isochronous\" or \"bulk\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SynchronizationType enum_param) {
  switch (enum_param) {
    case SynchronizationType::kAsynchronous:
      return "asynchronous";
    case SynchronizationType::kAdaptive:
      return "adaptive";
    case SynchronizationType::kSynchronous:
      return "synchronous";
    case SynchronizationType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

SynchronizationType ParseSynchronizationType(base::StringPiece enum_string) {
  if (enum_string == "asynchronous")
    return SynchronizationType::kAsynchronous;
  if (enum_string == "adaptive")
    return SynchronizationType::kAdaptive;
  if (enum_string == "synchronous")
    return SynchronizationType::kSynchronous;
  return SynchronizationType::kNone;
}

std::u16string GetSynchronizationTypeParseError(base::StringPiece enum_string) {
  return u"expected \"asynchronous\" or \"adaptive\" or \"synchronous\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(UsageType enum_param) {
  switch (enum_param) {
    case UsageType::kData:
      return "data";
    case UsageType::kFeedback:
      return "feedback";
    case UsageType::kExplicitFeedback:
      return "explicitFeedback";
    case UsageType::kPeriodic:
      return "periodic";
    case UsageType::kNotification:
      return "notification";
    case UsageType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

UsageType ParseUsageType(base::StringPiece enum_string) {
  if (enum_string == "data")
    return UsageType::kData;
  if (enum_string == "feedback")
    return UsageType::kFeedback;
  if (enum_string == "explicitFeedback")
    return UsageType::kExplicitFeedback;
  if (enum_string == "periodic")
    return UsageType::kPeriodic;
  if (enum_string == "notification")
    return UsageType::kNotification;
  return UsageType::kNone;
}

std::u16string GetUsageTypeParseError(base::StringPiece enum_string) {
  return u"expected \"data\" or \"feedback\" or \"explicitFeedback\" or \"periodic\" or \"notification\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


Device::Device()
: device(0),
vendor_id(0),
product_id(0),
version(0) {}

Device::~Device() = default;
Device::Device(Device&& rhs) noexcept = default;
Device& Device::operator=(Device&& rhs) noexcept = default;
Device Device::Clone() const {
  Device out;
  out.device = device;
  out.vendor_id = vendor_id;
  out.product_id = product_id;
  out.version = version;
  out.product_name = product_name;
  out.manufacturer_name = manufacturer_name;
  out.serial_number = serial_number;
  return out;
}

// static
bool Device::Populate(
    const base::Value::Dict& dict, Device& out) {
  const base::Value* device_value = dict.Find("device");
  if (!device_value) {
    return false;
  }
  {
    auto temp = (*device_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.device = *temp;
  }

  const base::Value* vendor_id_value = dict.Find("vendorId");
  if (!vendor_id_value) {
    return false;
  }
  {
    auto temp = (*vendor_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.vendor_id = *temp;
  }

  const base::Value* product_id_value = dict.Find("productId");
  if (!product_id_value) {
    return false;
  }
  {
    auto temp = (*product_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.product_id = *temp;
  }

  const base::Value* version_value = dict.Find("version");
  if (!version_value) {
    return false;
  }
  {
    auto temp = (*version_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.version = *temp;
  }

  const base::Value* product_name_value = dict.Find("productName");
  if (!product_name_value) {
    return false;
  }
  {
    auto* temp = (*product_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.product_name = *temp;
  }

  const base::Value* manufacturer_name_value = dict.Find("manufacturerName");
  if (!manufacturer_name_value) {
    return false;
  }
  {
    auto* temp = (*manufacturer_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.manufacturer_name = *temp;
  }

  const base::Value* serial_number_value = dict.Find("serialNumber");
  if (!serial_number_value) {
    return false;
  }
  {
    auto* temp = (*serial_number_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.serial_number = *temp;
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

  to_value_result.Set("device", this->device);

  to_value_result.Set("vendorId", this->vendor_id);

  to_value_result.Set("productId", this->product_id);

  to_value_result.Set("version", this->version);

  to_value_result.Set("productName", this->product_name);

  to_value_result.Set("manufacturerName", this->manufacturer_name);

  to_value_result.Set("serialNumber", this->serial_number);


  return to_value_result;
}


ConnectionHandle::ConnectionHandle()
: handle(0),
vendor_id(0),
product_id(0) {}

ConnectionHandle::~ConnectionHandle() = default;
ConnectionHandle::ConnectionHandle(ConnectionHandle&& rhs) noexcept = default;
ConnectionHandle& ConnectionHandle::operator=(ConnectionHandle&& rhs) noexcept = default;
ConnectionHandle ConnectionHandle::Clone() const {
  ConnectionHandle out;
  out.handle = handle;
  out.vendor_id = vendor_id;
  out.product_id = product_id;
  return out;
}

// static
bool ConnectionHandle::Populate(
    const base::Value::Dict& dict, ConnectionHandle& out) {
  const base::Value* handle_value = dict.Find("handle");
  if (!handle_value) {
    return false;
  }
  {
    auto temp = (*handle_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.handle = *temp;
  }

  const base::Value* vendor_id_value = dict.Find("vendorId");
  if (!vendor_id_value) {
    return false;
  }
  {
    auto temp = (*vendor_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.vendor_id = *temp;
  }

  const base::Value* product_id_value = dict.Find("productId");
  if (!product_id_value) {
    return false;
  }
  {
    auto temp = (*product_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.product_id = *temp;
  }

  return true;
}

// static
bool ConnectionHandle::Populate(
    const base::Value& value, ConnectionHandle& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ConnectionHandle> ConnectionHandle::FromValue(const base::Value::Dict& value) {
  ConnectionHandle out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ConnectionHandle> ConnectionHandle::FromValue(const base::Value& value) {
  ConnectionHandle out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ConnectionHandle::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("handle", this->handle);

  to_value_result.Set("vendorId", this->vendor_id);

  to_value_result.Set("productId", this->product_id);


  return to_value_result;
}


EndpointDescriptor::EndpointDescriptor()
: address(0),
type(),
direction(),
maximum_packet_size(0),
synchronization(),
usage() {}

EndpointDescriptor::~EndpointDescriptor() = default;
EndpointDescriptor::EndpointDescriptor(EndpointDescriptor&& rhs) noexcept = default;
EndpointDescriptor& EndpointDescriptor::operator=(EndpointDescriptor&& rhs) noexcept = default;
EndpointDescriptor EndpointDescriptor::Clone() const {
  EndpointDescriptor out;
  out.address = address;
  out.type = type;
  out.direction = direction;
  out.maximum_packet_size = maximum_packet_size;
  out.synchronization = synchronization;
  out.usage = usage;
  out.polling_interval = polling_interval;
  out.extra_data = extra_data;
  return out;
}

// static
bool EndpointDescriptor::Populate(
    const base::Value::Dict& dict, EndpointDescriptor& out) {
  out.synchronization = SynchronizationType();
  out.usage = UsageType();
  const base::Value* address_value = dict.Find("address");
  if (!address_value) {
    return false;
  }
  {
    auto temp = (*address_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.address = *temp;
  }

  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* transfer_type_as_string = (*type_value).GetIfString();
    if (!transfer_type_as_string) {
      return false;
    }
    out.type = ParseTransferType(*transfer_type_as_string);
    if (out.type == TransferType()) {
      return false;
    }
  }

  const base::Value* direction_value = dict.Find("direction");
  if (!direction_value) {
    return false;
  }
  {
    const std::string* direction_as_string = (*direction_value).GetIfString();
    if (!direction_as_string) {
      return false;
    }
    out.direction = ParseDirection(*direction_as_string);
    if (out.direction == Direction()) {
      return false;
    }
  }

  const base::Value* maximum_packet_size_value = dict.Find("maximumPacketSize");
  if (!maximum_packet_size_value) {
    return false;
  }
  {
    auto temp = (*maximum_packet_size_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.maximum_packet_size = *temp;
  }

  const base::Value* synchronization_value = dict.Find("synchronization");
  if (synchronization_value) {
    {
      const std::string* synchronization_type_as_string = (*synchronization_value).GetIfString();
      if (!synchronization_type_as_string) {
        return false;
      }
      out.synchronization = ParseSynchronizationType(*synchronization_type_as_string);
      if (out.synchronization == SynchronizationType()) {
        return false;
      }
    }
    } else {
    out.synchronization = SynchronizationType();
  }

  const base::Value* usage_value = dict.Find("usage");
  if (usage_value) {
    {
      const std::string* usage_type_as_string = (*usage_value).GetIfString();
      if (!usage_type_as_string) {
        return false;
      }
      out.usage = ParseUsageType(*usage_type_as_string);
      if (out.usage == UsageType()) {
        return false;
      }
    }
    } else {
    out.usage = UsageType();
  }

  const base::Value* polling_interval_value = dict.Find("pollingInterval");
  if (polling_interval_value) {
    {
      auto temp = (*polling_interval_value).GetIfInt();
      if (!temp.has_value()) {
        out.polling_interval = std::nullopt;
        return false;
      }
      out.polling_interval = *temp;
    }
  }

  const base::Value* extra_data_value = dict.Find("extra_data");
  if (!extra_data_value) {
    return false;
  }
  {
    if (!(*extra_data_value).is_blob()) {
      return false;
    }
    else {
      out.extra_data = (*extra_data_value).GetBlob();
    }
  }

  return true;
}

// static
bool EndpointDescriptor::Populate(
    const base::Value& value, EndpointDescriptor& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<EndpointDescriptor> EndpointDescriptor::FromValue(const base::Value::Dict& value) {
  EndpointDescriptor out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<EndpointDescriptor> EndpointDescriptor::FromValue(const base::Value& value) {
  EndpointDescriptor out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict EndpointDescriptor::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("address", this->address);

  to_value_result.Set("type", usb::ToString(this->type));

  to_value_result.Set("direction", usb::ToString(this->direction));

  to_value_result.Set("maximumPacketSize", this->maximum_packet_size);

  if (this->synchronization != SynchronizationType()) {
    to_value_result.Set("synchronization", usb::ToString(this->synchronization));

  }
  if (this->usage != UsageType()) {
    to_value_result.Set("usage", usb::ToString(this->usage));

  }
  if (this->polling_interval) {
    to_value_result.Set("pollingInterval", *this->polling_interval);

  }
  to_value_result.Set("extra_data", base::Value(this->extra_data));


  return to_value_result;
}


InterfaceDescriptor::InterfaceDescriptor()
: interface_number(0),
alternate_setting(0),
interface_class(0),
interface_subclass(0),
interface_protocol(0) {}

InterfaceDescriptor::~InterfaceDescriptor() = default;
InterfaceDescriptor::InterfaceDescriptor(InterfaceDescriptor&& rhs) noexcept = default;
InterfaceDescriptor& InterfaceDescriptor::operator=(InterfaceDescriptor&& rhs) noexcept = default;
InterfaceDescriptor InterfaceDescriptor::Clone() const {
  InterfaceDescriptor out;
  out.interface_number = interface_number;
  out.alternate_setting = alternate_setting;
  out.interface_class = interface_class;
  out.interface_subclass = interface_subclass;
  out.interface_protocol = interface_protocol;
  out.description = description;
  out.endpoints.reserve(endpoints.size());
  for (const auto& element : endpoints) {
    json_schema_compiler::util::AppendToContainer(out.endpoints, element.Clone());
  }
  out.extra_data = extra_data;
  return out;
}

// static
bool InterfaceDescriptor::Populate(
    const base::Value::Dict& dict, InterfaceDescriptor& out) {
  const base::Value* interface_number_value = dict.Find("interfaceNumber");
  if (!interface_number_value) {
    return false;
  }
  {
    auto temp = (*interface_number_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.interface_number = *temp;
  }

  const base::Value* alternate_setting_value = dict.Find("alternateSetting");
  if (!alternate_setting_value) {
    return false;
  }
  {
    auto temp = (*alternate_setting_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.alternate_setting = *temp;
  }

  const base::Value* interface_class_value = dict.Find("interfaceClass");
  if (!interface_class_value) {
    return false;
  }
  {
    auto temp = (*interface_class_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.interface_class = *temp;
  }

  const base::Value* interface_subclass_value = dict.Find("interfaceSubclass");
  if (!interface_subclass_value) {
    return false;
  }
  {
    auto temp = (*interface_subclass_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.interface_subclass = *temp;
  }

  const base::Value* interface_protocol_value = dict.Find("interfaceProtocol");
  if (!interface_protocol_value) {
    return false;
  }
  {
    auto temp = (*interface_protocol_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.interface_protocol = *temp;
  }

  const base::Value* description_value = dict.Find("description");
  if (description_value) {
    {
      auto* temp = (*description_value).GetIfString();
      if (!temp) {
        out.description = std::nullopt;
        return false;
      }
      out.description = *temp;
    }
  }

  const base::Value* endpoints_value = dict.Find("endpoints");
  if (!endpoints_value) {
    return false;
  }
  {
    if (!(*endpoints_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*endpoints_value).GetList(), out.endpoints)) {
        return false;
      }
    }
  }

  const base::Value* extra_data_value = dict.Find("extra_data");
  if (!extra_data_value) {
    return false;
  }
  {
    if (!(*extra_data_value).is_blob()) {
      return false;
    }
    else {
      out.extra_data = (*extra_data_value).GetBlob();
    }
  }

  return true;
}

// static
bool InterfaceDescriptor::Populate(
    const base::Value& value, InterfaceDescriptor& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<InterfaceDescriptor> InterfaceDescriptor::FromValue(const base::Value::Dict& value) {
  InterfaceDescriptor out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<InterfaceDescriptor> InterfaceDescriptor::FromValue(const base::Value& value) {
  InterfaceDescriptor out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict InterfaceDescriptor::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("interfaceNumber", this->interface_number);

  to_value_result.Set("alternateSetting", this->alternate_setting);

  to_value_result.Set("interfaceClass", this->interface_class);

  to_value_result.Set("interfaceSubclass", this->interface_subclass);

  to_value_result.Set("interfaceProtocol", this->interface_protocol);

  if (this->description) {
    to_value_result.Set("description", *this->description);

  }
  to_value_result.Set("endpoints", json_schema_compiler::util::CreateValueFromArray(this->endpoints));

  to_value_result.Set("extra_data", base::Value(this->extra_data));


  return to_value_result;
}


ConfigDescriptor::ConfigDescriptor()
: active(false),
configuration_value(0),
self_powered(false),
remote_wakeup(false),
max_power(0) {}

ConfigDescriptor::~ConfigDescriptor() = default;
ConfigDescriptor::ConfigDescriptor(ConfigDescriptor&& rhs) noexcept = default;
ConfigDescriptor& ConfigDescriptor::operator=(ConfigDescriptor&& rhs) noexcept = default;
ConfigDescriptor ConfigDescriptor::Clone() const {
  ConfigDescriptor out;
  out.active = active;
  out.configuration_value = configuration_value;
  out.description = description;
  out.self_powered = self_powered;
  out.remote_wakeup = remote_wakeup;
  out.max_power = max_power;
  out.interfaces.reserve(interfaces.size());
  for (const auto& element : interfaces) {
    json_schema_compiler::util::AppendToContainer(out.interfaces, element.Clone());
  }
  out.extra_data = extra_data;
  return out;
}

// static
bool ConfigDescriptor::Populate(
    const base::Value::Dict& dict, ConfigDescriptor& out) {
  const base::Value* active_value = dict.Find("active");
  if (!active_value) {
    return false;
  }
  {
    auto temp = (*active_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.active = *temp;
  }

  const base::Value* configuration_value_value = dict.Find("configurationValue");
  if (!configuration_value_value) {
    return false;
  }
  {
    auto temp = (*configuration_value_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.configuration_value = *temp;
  }

  const base::Value* description_value = dict.Find("description");
  if (description_value) {
    {
      auto* temp = (*description_value).GetIfString();
      if (!temp) {
        out.description = std::nullopt;
        return false;
      }
      out.description = *temp;
    }
  }

  const base::Value* self_powered_value = dict.Find("selfPowered");
  if (!self_powered_value) {
    return false;
  }
  {
    auto temp = (*self_powered_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.self_powered = *temp;
  }

  const base::Value* remote_wakeup_value = dict.Find("remoteWakeup");
  if (!remote_wakeup_value) {
    return false;
  }
  {
    auto temp = (*remote_wakeup_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.remote_wakeup = *temp;
  }

  const base::Value* max_power_value = dict.Find("maxPower");
  if (!max_power_value) {
    return false;
  }
  {
    auto temp = (*max_power_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.max_power = *temp;
  }

  const base::Value* interfaces_value = dict.Find("interfaces");
  if (!interfaces_value) {
    return false;
  }
  {
    if (!(*interfaces_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*interfaces_value).GetList(), out.interfaces)) {
        return false;
      }
    }
  }

  const base::Value* extra_data_value = dict.Find("extra_data");
  if (!extra_data_value) {
    return false;
  }
  {
    if (!(*extra_data_value).is_blob()) {
      return false;
    }
    else {
      out.extra_data = (*extra_data_value).GetBlob();
    }
  }

  return true;
}

// static
bool ConfigDescriptor::Populate(
    const base::Value& value, ConfigDescriptor& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ConfigDescriptor> ConfigDescriptor::FromValue(const base::Value::Dict& value) {
  ConfigDescriptor out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ConfigDescriptor> ConfigDescriptor::FromValue(const base::Value& value) {
  ConfigDescriptor out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ConfigDescriptor::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("active", this->active);

  to_value_result.Set("configurationValue", this->configuration_value);

  if (this->description) {
    to_value_result.Set("description", *this->description);

  }
  to_value_result.Set("selfPowered", this->self_powered);

  to_value_result.Set("remoteWakeup", this->remote_wakeup);

  to_value_result.Set("maxPower", this->max_power);

  to_value_result.Set("interfaces", json_schema_compiler::util::CreateValueFromArray(this->interfaces));

  to_value_result.Set("extra_data", base::Value(this->extra_data));


  return to_value_result;
}


ControlTransferInfo::ControlTransferInfo()
: direction(),
recipient(),
request_type(),
request(0),
value(0),
index(0) {}

ControlTransferInfo::~ControlTransferInfo() = default;
ControlTransferInfo::ControlTransferInfo(ControlTransferInfo&& rhs) noexcept = default;
ControlTransferInfo& ControlTransferInfo::operator=(ControlTransferInfo&& rhs) noexcept = default;
ControlTransferInfo ControlTransferInfo::Clone() const {
  ControlTransferInfo out;
  out.direction = direction;
  out.recipient = recipient;
  out.request_type = request_type;
  out.request = request;
  out.value = value;
  out.index = index;
  out.length = length;
  out.data = data;
  out.timeout = timeout;
  return out;
}

// static
bool ControlTransferInfo::Populate(
    const base::Value::Dict& dict, ControlTransferInfo& out) {
  const base::Value* direction_value = dict.Find("direction");
  if (!direction_value) {
    return false;
  }
  {
    const std::string* direction_as_string = (*direction_value).GetIfString();
    if (!direction_as_string) {
      return false;
    }
    out.direction = ParseDirection(*direction_as_string);
    if (out.direction == Direction()) {
      return false;
    }
  }

  const base::Value* recipient_value = dict.Find("recipient");
  if (!recipient_value) {
    return false;
  }
  {
    const std::string* recipient_as_string = (*recipient_value).GetIfString();
    if (!recipient_as_string) {
      return false;
    }
    out.recipient = ParseRecipient(*recipient_as_string);
    if (out.recipient == Recipient()) {
      return false;
    }
  }

  const base::Value* request_type_value = dict.Find("requestType");
  if (!request_type_value) {
    return false;
  }
  {
    const std::string* request_type_as_string = (*request_type_value).GetIfString();
    if (!request_type_as_string) {
      return false;
    }
    out.request_type = ParseRequestType(*request_type_as_string);
    if (out.request_type == RequestType()) {
      return false;
    }
  }

  const base::Value* request_value = dict.Find("request");
  if (!request_value) {
    return false;
  }
  {
    auto temp = (*request_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request = *temp;
  }

  const base::Value* value_value = dict.Find("value");
  if (!value_value) {
    return false;
  }
  {
    auto temp = (*value_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.value = *temp;
  }

  const base::Value* index_value = dict.Find("index");
  if (!index_value) {
    return false;
  }
  {
    auto temp = (*index_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.index = *temp;
  }

  const base::Value* length_value = dict.Find("length");
  if (length_value) {
    {
      auto temp = (*length_value).GetIfInt();
      if (!temp.has_value()) {
        out.length = std::nullopt;
        return false;
      }
      out.length = *temp;
    }
  }

  const base::Value* data_value = dict.Find("data");
  if (data_value) {
    {
      if (!(*data_value).is_blob()) {
        return false;
      }
      else {
        out.data = (*data_value).GetBlob();
      }
    }
  }

  const base::Value* timeout_value = dict.Find("timeout");
  if (timeout_value) {
    {
      auto temp = (*timeout_value).GetIfInt();
      if (!temp.has_value()) {
        out.timeout = std::nullopt;
        return false;
      }
      out.timeout = *temp;
    }
  }

  return true;
}

// static
bool ControlTransferInfo::Populate(
    const base::Value& value, ControlTransferInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ControlTransferInfo> ControlTransferInfo::FromValue(const base::Value::Dict& value) {
  ControlTransferInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ControlTransferInfo> ControlTransferInfo::FromValue(const base::Value& value) {
  ControlTransferInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ControlTransferInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("direction", usb::ToString(this->direction));

  to_value_result.Set("recipient", usb::ToString(this->recipient));

  to_value_result.Set("requestType", usb::ToString(this->request_type));

  to_value_result.Set("request", this->request);

  to_value_result.Set("value", this->value);

  to_value_result.Set("index", this->index);

  if (this->length) {
    to_value_result.Set("length", *this->length);

  }
  if (this->data) {
    to_value_result.Set("data", base::Value(*this->data));

  }
  if (this->timeout) {
    to_value_result.Set("timeout", *this->timeout);

  }

  return to_value_result;
}


GenericTransferInfo::GenericTransferInfo()
: direction(),
endpoint(0) {}

GenericTransferInfo::~GenericTransferInfo() = default;
GenericTransferInfo::GenericTransferInfo(GenericTransferInfo&& rhs) noexcept = default;
GenericTransferInfo& GenericTransferInfo::operator=(GenericTransferInfo&& rhs) noexcept = default;
GenericTransferInfo GenericTransferInfo::Clone() const {
  GenericTransferInfo out;
  out.direction = direction;
  out.endpoint = endpoint;
  out.length = length;
  out.data = data;
  out.timeout = timeout;
  return out;
}

// static
bool GenericTransferInfo::Populate(
    const base::Value::Dict& dict, GenericTransferInfo& out) {
  const base::Value* direction_value = dict.Find("direction");
  if (!direction_value) {
    return false;
  }
  {
    const std::string* direction_as_string = (*direction_value).GetIfString();
    if (!direction_as_string) {
      return false;
    }
    out.direction = ParseDirection(*direction_as_string);
    if (out.direction == Direction()) {
      return false;
    }
  }

  const base::Value* endpoint_value = dict.Find("endpoint");
  if (!endpoint_value) {
    return false;
  }
  {
    auto temp = (*endpoint_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.endpoint = *temp;
  }

  const base::Value* length_value = dict.Find("length");
  if (length_value) {
    {
      auto temp = (*length_value).GetIfInt();
      if (!temp.has_value()) {
        out.length = std::nullopt;
        return false;
      }
      out.length = *temp;
    }
  }

  const base::Value* data_value = dict.Find("data");
  if (data_value) {
    {
      if (!(*data_value).is_blob()) {
        return false;
      }
      else {
        out.data = (*data_value).GetBlob();
      }
    }
  }

  const base::Value* timeout_value = dict.Find("timeout");
  if (timeout_value) {
    {
      auto temp = (*timeout_value).GetIfInt();
      if (!temp.has_value()) {
        out.timeout = std::nullopt;
        return false;
      }
      out.timeout = *temp;
    }
  }

  return true;
}

// static
bool GenericTransferInfo::Populate(
    const base::Value& value, GenericTransferInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GenericTransferInfo> GenericTransferInfo::FromValue(const base::Value::Dict& value) {
  GenericTransferInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GenericTransferInfo> GenericTransferInfo::FromValue(const base::Value& value) {
  GenericTransferInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict GenericTransferInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("direction", usb::ToString(this->direction));

  to_value_result.Set("endpoint", this->endpoint);

  if (this->length) {
    to_value_result.Set("length", *this->length);

  }
  if (this->data) {
    to_value_result.Set("data", base::Value(*this->data));

  }
  if (this->timeout) {
    to_value_result.Set("timeout", *this->timeout);

  }

  return to_value_result;
}


IsochronousTransferInfo::IsochronousTransferInfo()
: packets(0),
packet_length(0) {}

IsochronousTransferInfo::~IsochronousTransferInfo() = default;
IsochronousTransferInfo::IsochronousTransferInfo(IsochronousTransferInfo&& rhs) noexcept = default;
IsochronousTransferInfo& IsochronousTransferInfo::operator=(IsochronousTransferInfo&& rhs) noexcept = default;
IsochronousTransferInfo IsochronousTransferInfo::Clone() const {
  IsochronousTransferInfo out;
  out.transfer_info = transfer_info.Clone();
  out.packets = packets;
  out.packet_length = packet_length;
  return out;
}

// static
bool IsochronousTransferInfo::Populate(
    const base::Value::Dict& dict, IsochronousTransferInfo& out) {
  const base::Value* transfer_info_value = dict.Find("transferInfo");
  if (!transfer_info_value) {
    return false;
  }
  {
    if (!(*transfer_info_value).is_dict()) {
      return false;
    }
    if (!GenericTransferInfo::Populate((*transfer_info_value).GetDict(), out.transfer_info)) {
      return false;
    }
  }

  const base::Value* packets_value = dict.Find("packets");
  if (!packets_value) {
    return false;
  }
  {
    auto temp = (*packets_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.packets = *temp;
  }

  const base::Value* packet_length_value = dict.Find("packetLength");
  if (!packet_length_value) {
    return false;
  }
  {
    auto temp = (*packet_length_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.packet_length = *temp;
  }

  return true;
}

// static
bool IsochronousTransferInfo::Populate(
    const base::Value& value, IsochronousTransferInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<IsochronousTransferInfo> IsochronousTransferInfo::FromValue(const base::Value::Dict& value) {
  IsochronousTransferInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<IsochronousTransferInfo> IsochronousTransferInfo::FromValue(const base::Value& value) {
  IsochronousTransferInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict IsochronousTransferInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("transferInfo", (this->transfer_info).ToValue());

  to_value_result.Set("packets", this->packets);

  to_value_result.Set("packetLength", this->packet_length);


  return to_value_result;
}


TransferResultInfo::TransferResultInfo()
 {}

TransferResultInfo::~TransferResultInfo() = default;
TransferResultInfo::TransferResultInfo(TransferResultInfo&& rhs) noexcept = default;
TransferResultInfo& TransferResultInfo::operator=(TransferResultInfo&& rhs) noexcept = default;
TransferResultInfo TransferResultInfo::Clone() const {
  TransferResultInfo out;
  out.result_code = result_code;
  out.data = data;
  return out;
}

// static
bool TransferResultInfo::Populate(
    const base::Value::Dict& dict, TransferResultInfo& out) {
  const base::Value* result_code_value = dict.Find("resultCode");
  if (result_code_value) {
    {
      auto temp = (*result_code_value).GetIfInt();
      if (!temp.has_value()) {
        out.result_code = std::nullopt;
        return false;
      }
      out.result_code = *temp;
    }
  }

  const base::Value* data_value = dict.Find("data");
  if (data_value) {
    {
      if (!(*data_value).is_blob()) {
        return false;
      }
      else {
        out.data = (*data_value).GetBlob();
      }
    }
  }

  return true;
}

// static
bool TransferResultInfo::Populate(
    const base::Value& value, TransferResultInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<TransferResultInfo> TransferResultInfo::FromValue(const base::Value::Dict& value) {
  TransferResultInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<TransferResultInfo> TransferResultInfo::FromValue(const base::Value& value) {
  TransferResultInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict TransferResultInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->result_code) {
    to_value_result.Set("resultCode", *this->result_code);

  }
  if (this->data) {
    to_value_result.Set("data", base::Value(*this->data));

  }

  return to_value_result;
}


DeviceFilter::DeviceFilter()
 {}

DeviceFilter::~DeviceFilter() = default;
DeviceFilter::DeviceFilter(DeviceFilter&& rhs) noexcept = default;
DeviceFilter& DeviceFilter::operator=(DeviceFilter&& rhs) noexcept = default;
DeviceFilter DeviceFilter::Clone() const {
  DeviceFilter out;
  out.vendor_id = vendor_id;
  out.product_id = product_id;
  out.interface_class = interface_class;
  out.interface_subclass = interface_subclass;
  out.interface_protocol = interface_protocol;
  return out;
}

// static
bool DeviceFilter::Populate(
    const base::Value::Dict& dict, DeviceFilter& out) {
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

  const base::Value* interface_class_value = dict.Find("interfaceClass");
  if (interface_class_value) {
    {
      auto temp = (*interface_class_value).GetIfInt();
      if (!temp.has_value()) {
        out.interface_class = std::nullopt;
        return false;
      }
      out.interface_class = *temp;
    }
  }

  const base::Value* interface_subclass_value = dict.Find("interfaceSubclass");
  if (interface_subclass_value) {
    {
      auto temp = (*interface_subclass_value).GetIfInt();
      if (!temp.has_value()) {
        out.interface_subclass = std::nullopt;
        return false;
      }
      out.interface_subclass = *temp;
    }
  }

  const base::Value* interface_protocol_value = dict.Find("interfaceProtocol");
  if (interface_protocol_value) {
    {
      auto temp = (*interface_protocol_value).GetIfInt();
      if (!temp.has_value()) {
        out.interface_protocol = std::nullopt;
        return false;
      }
      out.interface_protocol = *temp;
    }
  }

  return true;
}

// static
bool DeviceFilter::Populate(
    const base::Value& value, DeviceFilter& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DeviceFilter> DeviceFilter::FromValue(const base::Value::Dict& value) {
  DeviceFilter out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DeviceFilter> DeviceFilter::FromValue(const base::Value& value) {
  DeviceFilter out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DeviceFilter::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->vendor_id) {
    to_value_result.Set("vendorId", *this->vendor_id);

  }
  if (this->product_id) {
    to_value_result.Set("productId", *this->product_id);

  }
  if (this->interface_class) {
    to_value_result.Set("interfaceClass", *this->interface_class);

  }
  if (this->interface_subclass) {
    to_value_result.Set("interfaceSubclass", *this->interface_subclass);

  }
  if (this->interface_protocol) {
    to_value_result.Set("interfaceProtocol", *this->interface_protocol);

  }

  return to_value_result;
}


EnumerateDevicesOptions::EnumerateDevicesOptions()
 {}

EnumerateDevicesOptions::~EnumerateDevicesOptions() = default;
EnumerateDevicesOptions::EnumerateDevicesOptions(EnumerateDevicesOptions&& rhs) noexcept = default;
EnumerateDevicesOptions& EnumerateDevicesOptions::operator=(EnumerateDevicesOptions&& rhs) noexcept = default;
EnumerateDevicesOptions EnumerateDevicesOptions::Clone() const {
  EnumerateDevicesOptions out;
  out.vendor_id = vendor_id;
  out.product_id = product_id;
  if (filters) {
    out.filters.emplace();
    out.filters->reserve(filters->size());
    for (const auto& element : *filters) {
      json_schema_compiler::util::AppendToContainer(*out.filters, element.Clone());
    }
  }
  return out;
}

// static
bool EnumerateDevicesOptions::Populate(
    const base::Value::Dict& dict, EnumerateDevicesOptions& out) {
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

  const base::Value* filters_value = dict.Find("filters");
  if (filters_value) {
    {
      if (!(*filters_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*filters_value).GetList(), out.filters)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool EnumerateDevicesOptions::Populate(
    const base::Value& value, EnumerateDevicesOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<EnumerateDevicesOptions> EnumerateDevicesOptions::FromValue(const base::Value::Dict& value) {
  EnumerateDevicesOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<EnumerateDevicesOptions> EnumerateDevicesOptions::FromValue(const base::Value& value) {
  EnumerateDevicesOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict EnumerateDevicesOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->vendor_id) {
    to_value_result.Set("vendorId", *this->vendor_id);

  }
  if (this->product_id) {
    to_value_result.Set("productId", *this->product_id);

  }
  if (this->filters) {
    to_value_result.Set("filters", json_schema_compiler::util::CreateValueFromArray(*this->filters));

  }

  return to_value_result;
}


EnumerateDevicesAndRequestAccessOptions::EnumerateDevicesAndRequestAccessOptions()
: vendor_id(0),
product_id(0) {}

EnumerateDevicesAndRequestAccessOptions::~EnumerateDevicesAndRequestAccessOptions() = default;
EnumerateDevicesAndRequestAccessOptions::EnumerateDevicesAndRequestAccessOptions(EnumerateDevicesAndRequestAccessOptions&& rhs) noexcept = default;
EnumerateDevicesAndRequestAccessOptions& EnumerateDevicesAndRequestAccessOptions::operator=(EnumerateDevicesAndRequestAccessOptions&& rhs) noexcept = default;
EnumerateDevicesAndRequestAccessOptions EnumerateDevicesAndRequestAccessOptions::Clone() const {
  EnumerateDevicesAndRequestAccessOptions out;
  out.vendor_id = vendor_id;
  out.product_id = product_id;
  out.interface_id = interface_id;
  return out;
}

// static
bool EnumerateDevicesAndRequestAccessOptions::Populate(
    const base::Value::Dict& dict, EnumerateDevicesAndRequestAccessOptions& out) {
  const base::Value* vendor_id_value = dict.Find("vendorId");
  if (!vendor_id_value) {
    return false;
  }
  {
    auto temp = (*vendor_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.vendor_id = *temp;
  }

  const base::Value* product_id_value = dict.Find("productId");
  if (!product_id_value) {
    return false;
  }
  {
    auto temp = (*product_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.product_id = *temp;
  }

  const base::Value* interface_id_value = dict.Find("interfaceId");
  if (interface_id_value) {
    {
      auto temp = (*interface_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.interface_id = std::nullopt;
        return false;
      }
      out.interface_id = *temp;
    }
  }

  return true;
}

// static
bool EnumerateDevicesAndRequestAccessOptions::Populate(
    const base::Value& value, EnumerateDevicesAndRequestAccessOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<EnumerateDevicesAndRequestAccessOptions> EnumerateDevicesAndRequestAccessOptions::FromValue(const base::Value::Dict& value) {
  EnumerateDevicesAndRequestAccessOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<EnumerateDevicesAndRequestAccessOptions> EnumerateDevicesAndRequestAccessOptions::FromValue(const base::Value& value) {
  EnumerateDevicesAndRequestAccessOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict EnumerateDevicesAndRequestAccessOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("vendorId", this->vendor_id);

  to_value_result.Set("productId", this->product_id);

  if (this->interface_id) {
    to_value_result.Set("interfaceId", *this->interface_id);

  }

  return to_value_result;
}


DevicePromptOptions::DevicePromptOptions()
 {}

DevicePromptOptions::~DevicePromptOptions() = default;
DevicePromptOptions::DevicePromptOptions(DevicePromptOptions&& rhs) noexcept = default;
DevicePromptOptions& DevicePromptOptions::operator=(DevicePromptOptions&& rhs) noexcept = default;
DevicePromptOptions DevicePromptOptions::Clone() const {
  DevicePromptOptions out;
  out.multiple = multiple;
  if (filters) {
    out.filters.emplace();
    out.filters->reserve(filters->size());
    for (const auto& element : *filters) {
      json_schema_compiler::util::AppendToContainer(*out.filters, element.Clone());
    }
  }
  return out;
}

// static
bool DevicePromptOptions::Populate(
    const base::Value::Dict& dict, DevicePromptOptions& out) {
  const base::Value* multiple_value = dict.Find("multiple");
  if (multiple_value) {
    {
      auto temp = (*multiple_value).GetIfBool();
      if (!temp.has_value()) {
        out.multiple = std::nullopt;
        return false;
      }
      out.multiple = *temp;
    }
  }

  const base::Value* filters_value = dict.Find("filters");
  if (filters_value) {
    {
      if (!(*filters_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*filters_value).GetList(), out.filters)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool DevicePromptOptions::Populate(
    const base::Value& value, DevicePromptOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DevicePromptOptions> DevicePromptOptions::FromValue(const base::Value::Dict& value) {
  DevicePromptOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DevicePromptOptions> DevicePromptOptions::FromValue(const base::Value& value) {
  DevicePromptOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DevicePromptOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->multiple) {
    to_value_result.Set("multiple", *this->multiple);

  }
  if (this->filters) {
    to_value_result.Set("filters", json_schema_compiler::util::CreateValueFromArray(*this->filters));

  }

  return to_value_result;
}



//
// Functions
//

namespace GetDevices {

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
      if (!EnumerateDevicesOptions::Populate(options_value.GetDict(), params.options)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<Device>& devices) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(devices));

  return create_results;
}
}  // namespace GetDevices

namespace GetUserSelectedDevices {

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
      if (!DevicePromptOptions::Populate(options_value.GetDict(), params.options)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<Device>& devices) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(devices));

  return create_results;
}
}  // namespace GetUserSelectedDevices

namespace GetConfigurations {

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
    const base::Value& device_value = args[0];
    {
      if (!device_value.is_dict()) {
        return std::nullopt;
      }
      if (!Device::Populate(device_value.GetDict(), params.device)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<ConfigDescriptor>& configs) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(configs));

  return create_results;
}
}  // namespace GetConfigurations

namespace RequestAccess {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& device_value = args[0];
    {
      if (!device_value.is_dict()) {
        return std::nullopt;
      }
      if (!Device::Populate(device_value.GetDict(), params.device)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& interface_id_value = args[1];
    {
      auto temp = interface_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.interface_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace RequestAccess

namespace OpenDevice {

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
    const base::Value& device_value = args[0];
    {
      if (!device_value.is_dict()) {
        return std::nullopt;
      }
      if (!Device::Populate(device_value.GetDict(), params.device)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const ConnectionHandle& handle) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((handle).ToValue());

  return create_results;
}
}  // namespace OpenDevice

namespace FindDevices {

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
      if (!EnumerateDevicesAndRequestAccessOptions::Populate(options_value.GetDict(), params.options)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<ConnectionHandle>& handles) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(handles));

  return create_results;
}
}  // namespace FindDevices

namespace CloseDevice {

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
    const base::Value& handle_value = args[0];
    {
      if (!handle_value.is_dict()) {
        return std::nullopt;
      }
      if (!ConnectionHandle::Populate(handle_value.GetDict(), params.handle)) {
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
}  // namespace CloseDevice

namespace SetConfiguration {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& handle_value = args[0];
    {
      if (!handle_value.is_dict()) {
        return std::nullopt;
      }
      if (!ConnectionHandle::Populate(handle_value.GetDict(), params.handle)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& configuration_value_value = args[1];
    {
      auto temp = configuration_value_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.configuration_value = *temp;
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
}  // namespace SetConfiguration

namespace GetConfiguration {

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
    const base::Value& handle_value = args[0];
    {
      if (!handle_value.is_dict()) {
        return std::nullopt;
      }
      if (!ConnectionHandle::Populate(handle_value.GetDict(), params.handle)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const ConfigDescriptor& config) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((config).ToValue());

  return create_results;
}
}  // namespace GetConfiguration

namespace ListInterfaces {

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
    const base::Value& handle_value = args[0];
    {
      if (!handle_value.is_dict()) {
        return std::nullopt;
      }
      if (!ConnectionHandle::Populate(handle_value.GetDict(), params.handle)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<InterfaceDescriptor>& descriptors) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(descriptors));

  return create_results;
}
}  // namespace ListInterfaces

namespace ClaimInterface {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& handle_value = args[0];
    {
      if (!handle_value.is_dict()) {
        return std::nullopt;
      }
      if (!ConnectionHandle::Populate(handle_value.GetDict(), params.handle)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& interface_number_value = args[1];
    {
      auto temp = interface_number_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.interface_number = *temp;
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
}  // namespace ClaimInterface

namespace ReleaseInterface {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& handle_value = args[0];
    {
      if (!handle_value.is_dict()) {
        return std::nullopt;
      }
      if (!ConnectionHandle::Populate(handle_value.GetDict(), params.handle)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& interface_number_value = args[1];
    {
      auto temp = interface_number_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.interface_number = *temp;
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
}  // namespace ReleaseInterface

namespace SetInterfaceAlternateSetting {

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
    const base::Value& handle_value = args[0];
    {
      if (!handle_value.is_dict()) {
        return std::nullopt;
      }
      if (!ConnectionHandle::Populate(handle_value.GetDict(), params.handle)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& interface_number_value = args[1];
    {
      auto temp = interface_number_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.interface_number = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& alternate_setting_value = args[2];
    {
      auto temp = alternate_setting_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.alternate_setting = *temp;
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
}  // namespace SetInterfaceAlternateSetting

namespace ControlTransfer {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& handle_value = args[0];
    {
      if (!handle_value.is_dict()) {
        return std::nullopt;
      }
      if (!ConnectionHandle::Populate(handle_value.GetDict(), params.handle)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& transfer_info_value = args[1];
    {
      if (!transfer_info_value.is_dict()) {
        return std::nullopt;
      }
      if (!ControlTransferInfo::Populate(transfer_info_value.GetDict(), params.transfer_info)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const TransferResultInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}
}  // namespace ControlTransfer

namespace BulkTransfer {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& handle_value = args[0];
    {
      if (!handle_value.is_dict()) {
        return std::nullopt;
      }
      if (!ConnectionHandle::Populate(handle_value.GetDict(), params.handle)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& transfer_info_value = args[1];
    {
      if (!transfer_info_value.is_dict()) {
        return std::nullopt;
      }
      if (!GenericTransferInfo::Populate(transfer_info_value.GetDict(), params.transfer_info)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const TransferResultInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}
}  // namespace BulkTransfer

namespace InterruptTransfer {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& handle_value = args[0];
    {
      if (!handle_value.is_dict()) {
        return std::nullopt;
      }
      if (!ConnectionHandle::Populate(handle_value.GetDict(), params.handle)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& transfer_info_value = args[1];
    {
      if (!transfer_info_value.is_dict()) {
        return std::nullopt;
      }
      if (!GenericTransferInfo::Populate(transfer_info_value.GetDict(), params.transfer_info)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const TransferResultInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}
}  // namespace InterruptTransfer

namespace IsochronousTransfer {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& handle_value = args[0];
    {
      if (!handle_value.is_dict()) {
        return std::nullopt;
      }
      if (!ConnectionHandle::Populate(handle_value.GetDict(), params.handle)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& transfer_info_value = args[1];
    {
      if (!transfer_info_value.is_dict()) {
        return std::nullopt;
      }
      if (!IsochronousTransferInfo::Populate(transfer_info_value.GetDict(), params.transfer_info)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const TransferResultInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}
}  // namespace IsochronousTransfer

namespace ResetDevice {

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
    const base::Value& handle_value = args[0];
    {
      if (!handle_value.is_dict()) {
        return std::nullopt;
      }
      if (!ConnectionHandle::Populate(handle_value.GetDict(), params.handle)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace ResetDevice

//
// Events
//

namespace OnDeviceAdded {

const char kEventName[] = "usb.onDeviceAdded";

base::Value::List Create(const Device& device) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((device).ToValue());

  return create_results;
}

}  // namespace OnDeviceAdded

namespace OnDeviceRemoved {

const char kEventName[] = "usb.onDeviceRemoved";

base::Value::List Create(const Device& device) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((device).ToValue());

  return create_results;
}

}  // namespace OnDeviceRemoved

}  // namespace usb
}  // namespace api
}  // namespace extensions

