// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/bluetooth_low_energy.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/bluetooth_low_energy.h"

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
#include "base/strings/string_piece.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace bluetooth_low_energy {
//
// Types
//

const char* ToString(CharacteristicProperty enum_param) {
  switch (enum_param) {
    case CharacteristicProperty::kBroadcast:
      return "broadcast";
    case CharacteristicProperty::kRead:
      return "read";
    case CharacteristicProperty::kWriteWithoutResponse:
      return "writeWithoutResponse";
    case CharacteristicProperty::kWrite:
      return "write";
    case CharacteristicProperty::kNotify:
      return "notify";
    case CharacteristicProperty::kIndicate:
      return "indicate";
    case CharacteristicProperty::kAuthenticatedSignedWrites:
      return "authenticatedSignedWrites";
    case CharacteristicProperty::kExtendedProperties:
      return "extendedProperties";
    case CharacteristicProperty::kReliableWrite:
      return "reliableWrite";
    case CharacteristicProperty::kWritableAuxiliaries:
      return "writableAuxiliaries";
    case CharacteristicProperty::kEncryptRead:
      return "encryptRead";
    case CharacteristicProperty::kEncryptWrite:
      return "encryptWrite";
    case CharacteristicProperty::kEncryptAuthenticatedRead:
      return "encryptAuthenticatedRead";
    case CharacteristicProperty::kEncryptAuthenticatedWrite:
      return "encryptAuthenticatedWrite";
    case CharacteristicProperty::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

CharacteristicProperty ParseCharacteristicProperty(base::StringPiece enum_string) {
  if (enum_string == "broadcast")
    return CharacteristicProperty::kBroadcast;
  if (enum_string == "read")
    return CharacteristicProperty::kRead;
  if (enum_string == "writeWithoutResponse")
    return CharacteristicProperty::kWriteWithoutResponse;
  if (enum_string == "write")
    return CharacteristicProperty::kWrite;
  if (enum_string == "notify")
    return CharacteristicProperty::kNotify;
  if (enum_string == "indicate")
    return CharacteristicProperty::kIndicate;
  if (enum_string == "authenticatedSignedWrites")
    return CharacteristicProperty::kAuthenticatedSignedWrites;
  if (enum_string == "extendedProperties")
    return CharacteristicProperty::kExtendedProperties;
  if (enum_string == "reliableWrite")
    return CharacteristicProperty::kReliableWrite;
  if (enum_string == "writableAuxiliaries")
    return CharacteristicProperty::kWritableAuxiliaries;
  if (enum_string == "encryptRead")
    return CharacteristicProperty::kEncryptRead;
  if (enum_string == "encryptWrite")
    return CharacteristicProperty::kEncryptWrite;
  if (enum_string == "encryptAuthenticatedRead")
    return CharacteristicProperty::kEncryptAuthenticatedRead;
  if (enum_string == "encryptAuthenticatedWrite")
    return CharacteristicProperty::kEncryptAuthenticatedWrite;
  return CharacteristicProperty::kNone;
}

std::u16string GetCharacteristicPropertyParseError(base::StringPiece enum_string) {
  return u"expected \"broadcast\" or \"read\" or \"writeWithoutResponse\" or \"write\" or \"notify\" or \"indicate\" or \"authenticatedSignedWrites\" or \"extendedProperties\" or \"reliableWrite\" or \"writableAuxiliaries\" or \"encryptRead\" or \"encryptWrite\" or \"encryptAuthenticatedRead\" or \"encryptAuthenticatedWrite\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DescriptorPermission enum_param) {
  switch (enum_param) {
    case DescriptorPermission::kRead:
      return "read";
    case DescriptorPermission::kWrite:
      return "write";
    case DescriptorPermission::kEncryptedRead:
      return "encryptedRead";
    case DescriptorPermission::kEncryptedWrite:
      return "encryptedWrite";
    case DescriptorPermission::kEncryptedAuthenticatedRead:
      return "encryptedAuthenticatedRead";
    case DescriptorPermission::kEncryptedAuthenticatedWrite:
      return "encryptedAuthenticatedWrite";
    case DescriptorPermission::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DescriptorPermission ParseDescriptorPermission(base::StringPiece enum_string) {
  if (enum_string == "read")
    return DescriptorPermission::kRead;
  if (enum_string == "write")
    return DescriptorPermission::kWrite;
  if (enum_string == "encryptedRead")
    return DescriptorPermission::kEncryptedRead;
  if (enum_string == "encryptedWrite")
    return DescriptorPermission::kEncryptedWrite;
  if (enum_string == "encryptedAuthenticatedRead")
    return DescriptorPermission::kEncryptedAuthenticatedRead;
  if (enum_string == "encryptedAuthenticatedWrite")
    return DescriptorPermission::kEncryptedAuthenticatedWrite;
  return DescriptorPermission::kNone;
}

std::u16string GetDescriptorPermissionParseError(base::StringPiece enum_string) {
  return u"expected \"read\" or \"write\" or \"encryptedRead\" or \"encryptedWrite\" or \"encryptedAuthenticatedRead\" or \"encryptedAuthenticatedWrite\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(AdvertisementType enum_param) {
  switch (enum_param) {
    case AdvertisementType::kBroadcast:
      return "broadcast";
    case AdvertisementType::kPeripheral:
      return "peripheral";
    case AdvertisementType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

AdvertisementType ParseAdvertisementType(base::StringPiece enum_string) {
  if (enum_string == "broadcast")
    return AdvertisementType::kBroadcast;
  if (enum_string == "peripheral")
    return AdvertisementType::kPeripheral;
  return AdvertisementType::kNone;
}

std::u16string GetAdvertisementTypeParseError(base::StringPiece enum_string) {
  return u"expected \"broadcast\" or \"peripheral\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


Device::Device()
 {}

Device::~Device() = default;
Device::Device(Device&& rhs) = default;
Device& Device::operator=(Device&& rhs) = default;
Device Device::Clone() const {
  Device out;
  out.address = address;
  out.name = name;
  out.device_class = device_class;
  return out;
}

// static
bool Device::Populate(
    const base::Value::Dict& dict, Device& out) {
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
        out.name = absl::nullopt;
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
        out.device_class = absl::nullopt;
        return false;
      }
      out.device_class = *temp;
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
std::unique_ptr<Device> Device::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Device>();
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
absl::optional<Device> Device::FromValue(const base::Value::Dict& value) {
  Device out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Device> Device::FromValue(const base::Value& value) {
  Device out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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

  return to_value_result;
}


Service::Service()
: is_primary(false) {}

Service::~Service() = default;
Service::Service(Service&& rhs) = default;
Service& Service::operator=(Service&& rhs) = default;
Service Service::Clone() const {
  Service out;
  out.uuid = uuid;
  out.is_primary = is_primary;
  out.instance_id = instance_id;
  out.device_address = device_address;
  return out;
}

// static
bool Service::Populate(
    const base::Value::Dict& dict, Service& out) {
  const base::Value* uuid_value = dict.Find("uuid");
  if (!uuid_value) {
    return false;
  }
  {
    auto* temp = (*uuid_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.uuid = *temp;
  }

  const base::Value* is_primary_value = dict.Find("isPrimary");
  if (!is_primary_value) {
    return false;
  }
  {
    auto temp = (*is_primary_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_primary = *temp;
  }

  const base::Value* instance_id_value = dict.Find("instanceId");
  if (instance_id_value) {
    {
      auto* temp = (*instance_id_value).GetIfString();
      if (!temp) {
        out.instance_id = absl::nullopt;
        return false;
      }
      out.instance_id = *temp;
    }
  }

  const base::Value* device_address_value = dict.Find("deviceAddress");
  if (device_address_value) {
    {
      auto* temp = (*device_address_value).GetIfString();
      if (!temp) {
        out.device_address = absl::nullopt;
        return false;
      }
      out.device_address = *temp;
    }
  }

  return true;
}

// static
bool Service::Populate(
    const base::Value& value, Service& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<Service> Service::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Service>();
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
absl::optional<Service> Service::FromValue(const base::Value::Dict& value) {
  Service out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Service> Service::FromValue(const base::Value& value) {
  Service out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict Service::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("uuid", this->uuid);

  to_value_result.Set("isPrimary", this->is_primary);

  if (this->instance_id) {
    to_value_result.Set("instanceId", *this->instance_id);

  }
  if (this->device_address) {
    to_value_result.Set("deviceAddress", *this->device_address);

  }

  return to_value_result;
}


Characteristic::Characteristic()
 {}

Characteristic::~Characteristic() = default;
Characteristic::Characteristic(Characteristic&& rhs) = default;
Characteristic& Characteristic::operator=(Characteristic&& rhs) = default;
Characteristic Characteristic::Clone() const {
  Characteristic out;
  out.uuid = uuid;
  if (service) {
    out.service = service->Clone();
  }
  out.properties = properties;
  out.instance_id = instance_id;
  out.value = value;
  return out;
}

// static
bool Characteristic::Populate(
    const base::Value::Dict& dict, Characteristic& out) {
  const base::Value* uuid_value = dict.Find("uuid");
  if (!uuid_value) {
    return false;
  }
  {
    auto* temp = (*uuid_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.uuid = *temp;
  }

  const base::Value* service_value = dict.Find("service");
  if (service_value) {
    {
      if (!(*service_value).is_dict()) {
        return false;
      }
      else {
        Service temp;
        if (!Service::Populate((*service_value).GetDict(), temp))
          return false;
        out.service = std::move(temp);
      }
    }
  }

  const base::Value* properties_value = dict.Find("properties");
  if (!properties_value) {
    return false;
  }
  {
    if (!(*properties_value).is_list()) {
      return false;
    }
    else {
      for (const auto& it : ((*properties_value)).GetList()) {
        CharacteristicProperty tmp;
        const std::string* characteristic_property_as_string = (it).GetIfString();
        if (!characteristic_property_as_string) {
          return false;
        }
        tmp = ParseCharacteristicProperty(*characteristic_property_as_string);
        if (tmp == CharacteristicProperty()) {
          return false;
        }
        out.properties.push_back(tmp);
      }
    }
  }

  const base::Value* instance_id_value = dict.Find("instanceId");
  if (instance_id_value) {
    {
      auto* temp = (*instance_id_value).GetIfString();
      if (!temp) {
        out.instance_id = absl::nullopt;
        return false;
      }
      out.instance_id = *temp;
    }
  }

  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    {
      if (!(*value_value).is_blob()) {
        return false;
      }
      else {
        out.value = (*value_value).GetBlob();
      }
    }
  }

  return true;
}

// static
bool Characteristic::Populate(
    const base::Value& value, Characteristic& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<Characteristic> Characteristic::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Characteristic>();
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
absl::optional<Characteristic> Characteristic::FromValue(const base::Value::Dict& value) {
  Characteristic out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Characteristic> Characteristic::FromValue(const base::Value& value) {
  Characteristic out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict Characteristic::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("uuid", this->uuid);

  if (this->service) {
    to_value_result.Set("service", (this->service)->ToValue());

  }
  {
    std::vector<std::string> properties_list;
    for (const auto& it : (this->properties)) {
      properties_list.emplace_back(bluetooth_low_energy::ToString(it));
    }
    to_value_result.Set("properties", json_schema_compiler::util::CreateValueFromArray(properties_list));
  }

  if (this->instance_id) {
    to_value_result.Set("instanceId", *this->instance_id);

  }
  if (this->value) {
    to_value_result.Set("value", base::Value(*this->value));

  }

  return to_value_result;
}


Descriptor::Descriptor()
 {}

Descriptor::~Descriptor() = default;
Descriptor::Descriptor(Descriptor&& rhs) = default;
Descriptor& Descriptor::operator=(Descriptor&& rhs) = default;
Descriptor Descriptor::Clone() const {
  Descriptor out;
  out.uuid = uuid;
  if (characteristic) {
    out.characteristic = characteristic->Clone();
  }
  out.permissions = permissions;
  out.instance_id = instance_id;
  out.value = value;
  return out;
}

// static
bool Descriptor::Populate(
    const base::Value::Dict& dict, Descriptor& out) {
  const base::Value* uuid_value = dict.Find("uuid");
  if (!uuid_value) {
    return false;
  }
  {
    auto* temp = (*uuid_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.uuid = *temp;
  }

  const base::Value* characteristic_value = dict.Find("characteristic");
  if (characteristic_value) {
    {
      if (!(*characteristic_value).is_dict()) {
        return false;
      }
      else {
        Characteristic temp;
        if (!Characteristic::Populate((*characteristic_value).GetDict(), temp))
          return false;
        out.characteristic = std::move(temp);
      }
    }
  }

  const base::Value* permissions_value = dict.Find("permissions");
  if (!permissions_value) {
    return false;
  }
  {
    if (!(*permissions_value).is_list()) {
      return false;
    }
    else {
      for (const auto& it : ((*permissions_value)).GetList()) {
        DescriptorPermission tmp;
        const std::string* descriptor_permission_as_string = (it).GetIfString();
        if (!descriptor_permission_as_string) {
          return false;
        }
        tmp = ParseDescriptorPermission(*descriptor_permission_as_string);
        if (tmp == DescriptorPermission()) {
          return false;
        }
        out.permissions.push_back(tmp);
      }
    }
  }

  const base::Value* instance_id_value = dict.Find("instanceId");
  if (instance_id_value) {
    {
      auto* temp = (*instance_id_value).GetIfString();
      if (!temp) {
        out.instance_id = absl::nullopt;
        return false;
      }
      out.instance_id = *temp;
    }
  }

  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    {
      if (!(*value_value).is_blob()) {
        return false;
      }
      else {
        out.value = (*value_value).GetBlob();
      }
    }
  }

  return true;
}

// static
bool Descriptor::Populate(
    const base::Value& value, Descriptor& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<Descriptor> Descriptor::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Descriptor>();
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
absl::optional<Descriptor> Descriptor::FromValue(const base::Value::Dict& value) {
  Descriptor out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Descriptor> Descriptor::FromValue(const base::Value& value) {
  Descriptor out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict Descriptor::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("uuid", this->uuid);

  if (this->characteristic) {
    to_value_result.Set("characteristic", (this->characteristic)->ToValue());

  }
  {
    std::vector<std::string> permissions_list;
    for (const auto& it : (this->permissions)) {
      permissions_list.emplace_back(bluetooth_low_energy::ToString(it));
    }
    to_value_result.Set("permissions", json_schema_compiler::util::CreateValueFromArray(permissions_list));
  }

  if (this->instance_id) {
    to_value_result.Set("instanceId", *this->instance_id);

  }
  if (this->value) {
    to_value_result.Set("value", base::Value(*this->value));

  }

  return to_value_result;
}


ConnectProperties::ConnectProperties()
: persistent(false) {}

ConnectProperties::~ConnectProperties() = default;
ConnectProperties::ConnectProperties(ConnectProperties&& rhs) = default;
ConnectProperties& ConnectProperties::operator=(ConnectProperties&& rhs) = default;
ConnectProperties ConnectProperties::Clone() const {
  ConnectProperties out;
  out.persistent = persistent;
  return out;
}

// static
bool ConnectProperties::Populate(
    const base::Value::Dict& dict, ConnectProperties& out) {
  const base::Value* persistent_value = dict.Find("persistent");
  if (!persistent_value) {
    return false;
  }
  {
    auto temp = (*persistent_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.persistent = *temp;
  }

  return true;
}

// static
bool ConnectProperties::Populate(
    const base::Value& value, ConnectProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ConnectProperties> ConnectProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ConnectProperties>();
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
absl::optional<ConnectProperties> ConnectProperties::FromValue(const base::Value::Dict& value) {
  ConnectProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ConnectProperties> ConnectProperties::FromValue(const base::Value& value) {
  ConnectProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ConnectProperties::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("persistent", this->persistent);


  return to_value_result;
}


NotificationProperties::NotificationProperties()
: persistent(false) {}

NotificationProperties::~NotificationProperties() = default;
NotificationProperties::NotificationProperties(NotificationProperties&& rhs) = default;
NotificationProperties& NotificationProperties::operator=(NotificationProperties&& rhs) = default;
NotificationProperties NotificationProperties::Clone() const {
  NotificationProperties out;
  out.persistent = persistent;
  return out;
}

// static
bool NotificationProperties::Populate(
    const base::Value::Dict& dict, NotificationProperties& out) {
  const base::Value* persistent_value = dict.Find("persistent");
  if (!persistent_value) {
    return false;
  }
  {
    auto temp = (*persistent_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.persistent = *temp;
  }

  return true;
}

// static
bool NotificationProperties::Populate(
    const base::Value& value, NotificationProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<NotificationProperties> NotificationProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<NotificationProperties>();
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
absl::optional<NotificationProperties> NotificationProperties::FromValue(const base::Value::Dict& value) {
  NotificationProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<NotificationProperties> NotificationProperties::FromValue(const base::Value& value) {
  NotificationProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict NotificationProperties::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("persistent", this->persistent);


  return to_value_result;
}


ManufacturerData::ManufacturerData()
: id(0) {}

ManufacturerData::~ManufacturerData() = default;
ManufacturerData::ManufacturerData(ManufacturerData&& rhs) = default;
ManufacturerData& ManufacturerData::operator=(ManufacturerData&& rhs) = default;
ManufacturerData ManufacturerData::Clone() const {
  ManufacturerData out;
  out.id = id;
  out.data = data;
  return out;
}

// static
bool ManufacturerData::Populate(
    const base::Value::Dict& dict, ManufacturerData& out) {
  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto temp = (*id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* data_value = dict.Find("data");
  if (!data_value) {
    return false;
  }
  {
    if (!(*data_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*data_value).GetList(), out.data)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool ManufacturerData::Populate(
    const base::Value& value, ManufacturerData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ManufacturerData> ManufacturerData::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ManufacturerData>();
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
absl::optional<ManufacturerData> ManufacturerData::FromValue(const base::Value::Dict& value) {
  ManufacturerData out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ManufacturerData> ManufacturerData::FromValue(const base::Value& value) {
  ManufacturerData out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ManufacturerData::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("data", json_schema_compiler::util::CreateValueFromArray(this->data));


  return to_value_result;
}


ServiceData::ServiceData()
 {}

ServiceData::~ServiceData() = default;
ServiceData::ServiceData(ServiceData&& rhs) = default;
ServiceData& ServiceData::operator=(ServiceData&& rhs) = default;
ServiceData ServiceData::Clone() const {
  ServiceData out;
  out.uuid = uuid;
  out.data = data;
  return out;
}

// static
bool ServiceData::Populate(
    const base::Value::Dict& dict, ServiceData& out) {
  const base::Value* uuid_value = dict.Find("uuid");
  if (!uuid_value) {
    return false;
  }
  {
    auto* temp = (*uuid_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.uuid = *temp;
  }

  const base::Value* data_value = dict.Find("data");
  if (!data_value) {
    return false;
  }
  {
    if (!(*data_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*data_value).GetList(), out.data)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool ServiceData::Populate(
    const base::Value& value, ServiceData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ServiceData> ServiceData::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ServiceData>();
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
absl::optional<ServiceData> ServiceData::FromValue(const base::Value::Dict& value) {
  ServiceData out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ServiceData> ServiceData::FromValue(const base::Value& value) {
  ServiceData out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ServiceData::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("uuid", this->uuid);

  to_value_result.Set("data", json_schema_compiler::util::CreateValueFromArray(this->data));


  return to_value_result;
}


Advertisement::Advertisement()
: type() {}

Advertisement::~Advertisement() = default;
Advertisement::Advertisement(Advertisement&& rhs) = default;
Advertisement& Advertisement::operator=(Advertisement&& rhs) = default;
Advertisement Advertisement::Clone() const {
  Advertisement out;
  out.type = type;
  out.service_uuids = service_uuids;
  if (manufacturer_data) {
    out.manufacturer_data.emplace();
    out.manufacturer_data->reserve(manufacturer_data->size());
    for (const auto& element : *manufacturer_data) {
      json_schema_compiler::util::AppendToContainer(*out.manufacturer_data, element.Clone());
    }
  }
  out.solicit_uuids = solicit_uuids;
  if (service_data) {
    out.service_data.emplace();
    out.service_data->reserve(service_data->size());
    for (const auto& element : *service_data) {
      json_schema_compiler::util::AppendToContainer(*out.service_data, element.Clone());
    }
  }
  return out;
}

// static
bool Advertisement::Populate(
    const base::Value::Dict& dict, Advertisement& out) {
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* advertisement_type_as_string = (*type_value).GetIfString();
    if (!advertisement_type_as_string) {
      return false;
    }
    out.type = ParseAdvertisementType(*advertisement_type_as_string);
    if (out.type == AdvertisementType()) {
      return false;
    }
  }

  const base::Value* service_uuids_value = dict.Find("serviceUuids");
  if (service_uuids_value) {
    {
      if (!(*service_uuids_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*service_uuids_value).GetList(), out.service_uuids)) {
          return false;
        }
      }
    }
  }

  const base::Value* manufacturer_data_value = dict.Find("manufacturerData");
  if (manufacturer_data_value) {
    {
      if (!(*manufacturer_data_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*manufacturer_data_value).GetList(), out.manufacturer_data)) {
          return false;
        }
      }
    }
  }

  const base::Value* solicit_uuids_value = dict.Find("solicitUuids");
  if (solicit_uuids_value) {
    {
      if (!(*solicit_uuids_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*solicit_uuids_value).GetList(), out.solicit_uuids)) {
          return false;
        }
      }
    }
  }

  const base::Value* service_data_value = dict.Find("serviceData");
  if (service_data_value) {
    {
      if (!(*service_data_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*service_data_value).GetList(), out.service_data)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool Advertisement::Populate(
    const base::Value& value, Advertisement& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<Advertisement> Advertisement::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Advertisement>();
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
absl::optional<Advertisement> Advertisement::FromValue(const base::Value::Dict& value) {
  Advertisement out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Advertisement> Advertisement::FromValue(const base::Value& value) {
  Advertisement out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict Advertisement::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("type", bluetooth_low_energy::ToString(this->type));

  if (this->service_uuids) {
    to_value_result.Set("serviceUuids", json_schema_compiler::util::CreateValueFromArray(*this->service_uuids));

  }
  if (this->manufacturer_data) {
    to_value_result.Set("manufacturerData", json_schema_compiler::util::CreateValueFromArray(*this->manufacturer_data));

  }
  if (this->solicit_uuids) {
    to_value_result.Set("solicitUuids", json_schema_compiler::util::CreateValueFromArray(*this->solicit_uuids));

  }
  if (this->service_data) {
    to_value_result.Set("serviceData", json_schema_compiler::util::CreateValueFromArray(*this->service_data));

  }

  return to_value_result;
}


Request::Request()
: request_id(0) {}

Request::~Request() = default;
Request::Request(Request&& rhs) = default;
Request& Request::operator=(Request&& rhs) = default;
Request Request::Clone() const {
  Request out;
  out.request_id = request_id;
  out.device = device.Clone();
  out.value = value;
  return out;
}

// static
bool Request::Populate(
    const base::Value::Dict& dict, Request& out) {
  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  const base::Value* device_value = dict.Find("device");
  if (!device_value) {
    return false;
  }
  {
    if (!(*device_value).is_dict()) {
      return false;
    }
    if (!Device::Populate((*device_value).GetDict(), out.device)) {
      return false;
    }
  }

  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    {
      if (!(*value_value).is_blob()) {
        return false;
      }
      else {
        out.value = (*value_value).GetBlob();
      }
    }
  }

  return true;
}

// static
bool Request::Populate(
    const base::Value& value, Request& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<Request> Request::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Request>();
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
absl::optional<Request> Request::FromValue(const base::Value::Dict& value) {
  Request out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Request> Request::FromValue(const base::Value& value) {
  Request out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict Request::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("requestId", this->request_id);

  to_value_result.Set("device", (this->device).ToValue());

  if (this->value) {
    to_value_result.Set("value", base::Value(*this->value));

  }

  return to_value_result;
}


Response::Response()
: request_id(0),
is_error(false) {}

Response::~Response() = default;
Response::Response(Response&& rhs) = default;
Response& Response::operator=(Response&& rhs) = default;
Response Response::Clone() const {
  Response out;
  out.request_id = request_id;
  out.is_error = is_error;
  out.value = value;
  return out;
}

// static
bool Response::Populate(
    const base::Value::Dict& dict, Response& out) {
  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  const base::Value* is_error_value = dict.Find("isError");
  if (!is_error_value) {
    return false;
  }
  {
    auto temp = (*is_error_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_error = *temp;
  }

  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    {
      if (!(*value_value).is_blob()) {
        return false;
      }
      else {
        out.value = (*value_value).GetBlob();
      }
    }
  }

  return true;
}

// static
bool Response::Populate(
    const base::Value& value, Response& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<Response> Response::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Response>();
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
absl::optional<Response> Response::FromValue(const base::Value::Dict& value) {
  Response out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Response> Response::FromValue(const base::Value& value) {
  Response out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict Response::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("requestId", this->request_id);

  to_value_result.Set("isError", this->is_error);

  if (this->value) {
    to_value_result.Set("value", base::Value(*this->value));

  }

  return to_value_result;
}


Notification::Notification()
 {}

Notification::~Notification() = default;
Notification::Notification(Notification&& rhs) = default;
Notification& Notification::operator=(Notification&& rhs) = default;
Notification Notification::Clone() const {
  Notification out;
  out.value = value;
  out.should_indicate = should_indicate;
  return out;
}

// static
bool Notification::Populate(
    const base::Value::Dict& dict, Notification& out) {
  const base::Value* value_value = dict.Find("value");
  if (!value_value) {
    return false;
  }
  {
    if (!(*value_value).is_blob()) {
      return false;
    }
    else {
      out.value = (*value_value).GetBlob();
    }
  }

  const base::Value* should_indicate_value = dict.Find("shouldIndicate");
  if (should_indicate_value) {
    {
      auto temp = (*should_indicate_value).GetIfBool();
      if (!temp.has_value()) {
        out.should_indicate = absl::nullopt;
        return false;
      }
      out.should_indicate = *temp;
    }
  }

  return true;
}

// static
bool Notification::Populate(
    const base::Value& value, Notification& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<Notification> Notification::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Notification>();
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
absl::optional<Notification> Notification::FromValue(const base::Value::Dict& value) {
  Notification out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Notification> Notification::FromValue(const base::Value& value) {
  Notification out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict Notification::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("value", base::Value(this->value));

  if (this->should_indicate) {
    to_value_result.Set("shouldIndicate", *this->should_indicate);

  }

  return to_value_result;
}



//
// Functions
//

namespace Connect {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& device_address_value = args[0];
    {
      auto* temp = device_address_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.device_address = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& properties_value = args[1];
    {
      if (!properties_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        ConnectProperties temp;
        if (!ConnectProperties::Populate(properties_value.GetDict(), temp))
          return absl::nullopt;
        params.properties = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace Connect

namespace Disconnect {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& device_address_value = args[0];
    {
      auto* temp = device_address_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.device_address = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace Disconnect

namespace GetService {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& service_id_value = args[0];
    {
      auto* temp = service_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.service_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const Service& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace GetService

namespace CreateService {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& service_value = args[0];
    {
      if (!service_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Service::Populate(service_value.GetDict(), params.service)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& service_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(service_id);

  return create_results;
}
}  // namespace CreateService

namespace GetServices {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& device_address_value = args[0];
    {
      auto* temp = device_address_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.device_address = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<Service>& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(result));

  return create_results;
}
}  // namespace GetServices

namespace GetCharacteristic {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& characteristic_id_value = args[0];
    {
      auto* temp = characteristic_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.characteristic_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const Characteristic& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace GetCharacteristic

namespace CreateCharacteristic {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& characteristic_value = args[0];
    {
      if (!characteristic_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Characteristic::Populate(characteristic_value.GetDict(), params.characteristic)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& service_id_value = args[1];
    {
      auto* temp = service_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.service_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& characteristic_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(characteristic_id);

  return create_results;
}
}  // namespace CreateCharacteristic

namespace GetCharacteristics {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& service_id_value = args[0];
    {
      auto* temp = service_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.service_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<Characteristic>& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(result));

  return create_results;
}
}  // namespace GetCharacteristics

namespace GetIncludedServices {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& service_id_value = args[0];
    {
      auto* temp = service_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.service_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<Service>& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(result));

  return create_results;
}
}  // namespace GetIncludedServices

namespace GetDescriptor {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& descriptor_id_value = args[0];
    {
      auto* temp = descriptor_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.descriptor_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const Descriptor& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace GetDescriptor

namespace CreateDescriptor {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& descriptor_value = args[0];
    {
      if (!descriptor_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Descriptor::Populate(descriptor_value.GetDict(), params.descriptor)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& characteristic_id_value = args[1];
    {
      auto* temp = characteristic_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.characteristic_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& descriptor_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(descriptor_id);

  return create_results;
}
}  // namespace CreateDescriptor

namespace GetDescriptors {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& characteristic_id_value = args[0];
    {
      auto* temp = characteristic_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.characteristic_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<Descriptor>& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(result));

  return create_results;
}
}  // namespace GetDescriptors

namespace ReadCharacteristicValue {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& characteristic_id_value = args[0];
    {
      auto* temp = characteristic_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.characteristic_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const Characteristic& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace ReadCharacteristicValue

namespace WriteCharacteristicValue {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& characteristic_id_value = args[0];
    {
      auto* temp = characteristic_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.characteristic_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& value_value = args[1];
    {
      if (!value_value.is_blob()) {
        return absl::nullopt;
      }
      else {
        params.value = value_value.GetBlob();
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace WriteCharacteristicValue

namespace StartCharacteristicNotifications {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& characteristic_id_value = args[0];
    {
      auto* temp = characteristic_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.characteristic_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& properties_value = args[1];
    {
      if (!properties_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        NotificationProperties temp;
        if (!NotificationProperties::Populate(properties_value.GetDict(), temp))
          return absl::nullopt;
        params.properties = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace StartCharacteristicNotifications

namespace StopCharacteristicNotifications {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& characteristic_id_value = args[0];
    {
      auto* temp = characteristic_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.characteristic_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace StopCharacteristicNotifications

namespace NotifyCharacteristicValueChanged {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& characteristic_id_value = args[0];
    {
      auto* temp = characteristic_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.characteristic_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& notification_value = args[1];
    {
      if (!notification_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Notification::Populate(notification_value.GetDict(), params.notification)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace NotifyCharacteristicValueChanged

namespace ReadDescriptorValue {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& descriptor_id_value = args[0];
    {
      auto* temp = descriptor_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.descriptor_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const Descriptor& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace ReadDescriptorValue

namespace WriteDescriptorValue {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& descriptor_id_value = args[0];
    {
      auto* temp = descriptor_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.descriptor_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& value_value = args[1];
    {
      if (!value_value.is_blob()) {
        return absl::nullopt;
      }
      else {
        params.value = value_value.GetBlob();
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace WriteDescriptorValue

namespace RegisterService {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& service_id_value = args[0];
    {
      auto* temp = service_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.service_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace RegisterService

namespace UnregisterService {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& service_id_value = args[0];
    {
      auto* temp = service_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.service_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace UnregisterService

namespace RemoveService {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& service_id_value = args[0];
    {
      auto* temp = service_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.service_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace RemoveService

namespace RegisterAdvertisement {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& advertisement_value = args[0];
    {
      if (!advertisement_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Advertisement::Populate(advertisement_value.GetDict(), params.advertisement)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(int advertisement_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(advertisement_id);

  return create_results;
}
}  // namespace RegisterAdvertisement

namespace UnregisterAdvertisement {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& advertisement_id_value = args[0];
    {
      auto temp = advertisement_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.advertisement_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace UnregisterAdvertisement

namespace ResetAdvertising {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace ResetAdvertising

namespace SetAdvertisingInterval {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& min_interval_value = args[0];
    {
      auto temp = min_interval_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.min_interval = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& max_interval_value = args[1];
    {
      auto temp = max_interval_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.max_interval = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetAdvertisingInterval

namespace SendRequestResponse {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& response_value = args[0];
    {
      if (!response_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Response::Populate(response_value.GetDict(), params.response)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SendRequestResponse

//
// Events
//

namespace OnServiceAdded {

const char kEventName[] = "bluetoothLowEnergy.onServiceAdded";

base::Value::List Create(const Service& service) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((service).ToValue());

  return create_results;
}

}  // namespace OnServiceAdded

namespace OnServiceChanged {

const char kEventName[] = "bluetoothLowEnergy.onServiceChanged";

base::Value::List Create(const Service& service) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((service).ToValue());

  return create_results;
}

}  // namespace OnServiceChanged

namespace OnServiceRemoved {

const char kEventName[] = "bluetoothLowEnergy.onServiceRemoved";

base::Value::List Create(const Service& service) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((service).ToValue());

  return create_results;
}

}  // namespace OnServiceRemoved

namespace OnCharacteristicValueChanged {

const char kEventName[] = "bluetoothLowEnergy.onCharacteristicValueChanged";

base::Value::List Create(const Characteristic& characteristic) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((characteristic).ToValue());

  return create_results;
}

}  // namespace OnCharacteristicValueChanged

namespace OnDescriptorValueChanged {

const char kEventName[] = "bluetoothLowEnergy.onDescriptorValueChanged";

base::Value::List Create(const Descriptor& descriptor) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((descriptor).ToValue());

  return create_results;
}

}  // namespace OnDescriptorValueChanged

namespace OnCharacteristicReadRequest {

const char kEventName[] = "bluetoothLowEnergy.onCharacteristicReadRequest";

base::Value::List Create(const Request& request, const std::string& characteristic_id) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append((request).ToValue());

  create_results.Append(characteristic_id);

  return create_results;
}

}  // namespace OnCharacteristicReadRequest

namespace OnCharacteristicWriteRequest {

const char kEventName[] = "bluetoothLowEnergy.onCharacteristicWriteRequest";

base::Value::List Create(const Request& request, const std::string& characteristic_id) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append((request).ToValue());

  create_results.Append(characteristic_id);

  return create_results;
}

}  // namespace OnCharacteristicWriteRequest

namespace OnDescriptorReadRequest {

const char kEventName[] = "bluetoothLowEnergy.onDescriptorReadRequest";

base::Value::List Create(const Request& request, const std::string& descriptor_id) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append((request).ToValue());

  create_results.Append(descriptor_id);

  return create_results;
}

}  // namespace OnDescriptorReadRequest

namespace OnDescriptorWriteRequest {

const char kEventName[] = "bluetoothLowEnergy.onDescriptorWriteRequest";

base::Value::List Create(const Request& request, const std::string& descriptor_id) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append((request).ToValue());

  create_results.Append(descriptor_id);

  return create_results;
}

}  // namespace OnDescriptorWriteRequest

}  // namespace bluetooth_low_energy
}  // namespace api
}  // namespace extensions

