// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/bluetooth_low_energy.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_BLUETOOTH_LOW_ENERGY_H__
#define EXTENSIONS_COMMON_API_BLUETOOTH_LOW_ENERGY_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace bluetooth_low_energy {

//
// Types
//

// Values representing the possible properties of a characteristic.
// Characteristic permissions are inferred from these properties. Please see the
// Bluetooth 4.x spec to see the meaning of each individual property.
enum class CharacteristicProperty {
  kNone = 0,
  kBroadcast,
  kRead,
  kWriteWithoutResponse,
  kWrite,
  kNotify,
  kIndicate,
  kAuthenticatedSignedWrites,
  kExtendedProperties,
  kReliableWrite,
  kWritableAuxiliaries,
  kEncryptRead,
  kEncryptWrite,
  kEncryptAuthenticatedRead,
  kEncryptAuthenticatedWrite,
  kMaxValue = kEncryptAuthenticatedWrite,
};


const char* ToString(CharacteristicProperty as_enum);
CharacteristicProperty ParseCharacteristicProperty(base::StringPiece as_string);
std::u16string GetCharacteristicPropertyParseError(base::StringPiece as_string);

// Values representing possible permissions for a descriptor. Please see the
// Bluetooth 4.x spec to see the meaning of each individual permission.
enum class DescriptorPermission {
  kNone = 0,
  kRead,
  kWrite,
  kEncryptedRead,
  kEncryptedWrite,
  kEncryptedAuthenticatedRead,
  kEncryptedAuthenticatedWrite,
  kMaxValue = kEncryptedAuthenticatedWrite,
};


const char* ToString(DescriptorPermission as_enum);
DescriptorPermission ParseDescriptorPermission(base::StringPiece as_string);
std::u16string GetDescriptorPermissionParseError(base::StringPiece as_string);

// Type of advertisement. If 'broadcast' is chosen, the sent advertisement type
// will be ADV_NONCONN_IND and the device will broadcast with a random MAC
// Address. If set to 'peripheral', the advertisement type will be ADV_IND or
// ADV_SCAN_IND and the device will broadcast with real Bluetooth Adapter's MAC
// Address.
enum class AdvertisementType {
  kNone = 0,
  kBroadcast,
  kPeripheral,
  kMaxValue = kPeripheral,
};


const char* ToString(AdvertisementType as_enum);
AdvertisementType ParseAdvertisementType(base::StringPiece as_string);
std::u16string GetAdvertisementTypeParseError(base::StringPiece as_string);

struct Device {
  Device();
  ~Device();
  Device(const Device&) = delete;
  Device& operator=(const Device&) = delete;
  Device(Device&& rhs) noexcept;
  Device& operator=(Device&& rhs) noexcept;

  // Populates a Device object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Device& out);

  // Populates a Device object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Device& out);

  // Creates a deep copy of Device.
  Device Clone() const;

  // Creates a Device object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Device> FromValue(const base::Value::Dict& value);

  // Creates a Device object from a base::Value, or nullopt on failure.
  static std::optional<Device> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDevice object.
  base::Value::Dict ToValue() const;

  // The address of the device, in the format 'XX:XX:XX:XX:XX:XX'.
  std::string address;

  // The human-readable name of the device.
  std::optional<std::string> name;

  // The class of the device, a bit-field defined by
  // http://www.bluetooth.org/en-us/specification/assigned-numbers/baseband.
  std::optional<int> device_class;

};

struct Service {
  Service();
  ~Service();
  Service(const Service&) = delete;
  Service& operator=(const Service&) = delete;
  Service(Service&& rhs) noexcept;
  Service& operator=(Service&& rhs) noexcept;

  // Populates a Service object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Service& out);

  // Populates a Service object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Service& out);

  // Creates a deep copy of Service.
  Service Clone() const;

  // Creates a Service object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Service> FromValue(const base::Value::Dict& value);

  // Creates a Service object from a base::Value, or nullopt on failure.
  static std::optional<Service> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisService object.
  base::Value::Dict ToValue() const;

  // The UUID of the service, e.g. 0000180d-0000-1000-8000-00805f9b34fb.
  std::string uuid;

  // Indicates whether the type of this service is primary or secondary.
  bool is_primary;

  // Returns the identifier assigned to this service. Use the instance ID to
  // distinguish between services from a peripheral with the same UUID and to make
  // function calls that take in a service identifier. Present, if this instance
  // represents a remote service.
  std::optional<std::string> instance_id;

  // The device address of the remote peripheral that the GATT service belongs to.
  // Present, if this instance represents a remote service.
  std::optional<std::string> device_address;

};

struct Characteristic {
  Characteristic();
  ~Characteristic();
  Characteristic(const Characteristic&) = delete;
  Characteristic& operator=(const Characteristic&) = delete;
  Characteristic(Characteristic&& rhs) noexcept;
  Characteristic& operator=(Characteristic&& rhs) noexcept;

  // Populates a Characteristic object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, Characteristic& out);

  // Populates a Characteristic object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, Characteristic& out);

  // Creates a deep copy of Characteristic.
  Characteristic Clone() const;

  // Creates a Characteristic object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<Characteristic> FromValue(const base::Value::Dict& value);

  // Creates a Characteristic object from a base::Value, or nullopt on failure.
  static std::optional<Characteristic> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCharacteristic object.
  base::Value::Dict ToValue() const;

  // The UUID of the characteristic, e.g. 00002a37-0000-1000-8000-00805f9b34fb.
  std::string uuid;

  // The GATT service this characteristic belongs to.
  std::optional<Service> service;

  // The properties of this characteristic.
  std::vector<CharacteristicProperty> properties;

  // Returns the identifier assigned to this characteristic. Use the instance ID
  // to distinguish between characteristics from a peripheral with the same UUID
  // and to make function calls that take in a characteristic identifier. Present,
  // if this instance represents a remote characteristic.
  std::optional<std::string> instance_id;

  // The currently cached characteristic value. This value gets updated when the
  // value of the characteristic is read or updated via a notification or
  // indication.
  std::optional<std::vector<uint8_t>> value;

};

struct Descriptor {
  Descriptor();
  ~Descriptor();
  Descriptor(const Descriptor&) = delete;
  Descriptor& operator=(const Descriptor&) = delete;
  Descriptor(Descriptor&& rhs) noexcept;
  Descriptor& operator=(Descriptor&& rhs) noexcept;

  // Populates a Descriptor object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Descriptor& out);

  // Populates a Descriptor object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, Descriptor& out);

  // Creates a deep copy of Descriptor.
  Descriptor Clone() const;

  // Creates a Descriptor object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<Descriptor> FromValue(const base::Value::Dict& value);

  // Creates a Descriptor object from a base::Value, or nullopt on failure.
  static std::optional<Descriptor> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDescriptor object.
  base::Value::Dict ToValue() const;

  // The UUID of the characteristic descriptor, e.g.
  // 00002902-0000-1000-8000-00805f9b34fb.
  std::string uuid;

  // The GATT characteristic this descriptor belongs to.
  std::optional<Characteristic> characteristic;

  // The permissions of this descriptor.
  std::vector<DescriptorPermission> permissions;

  // Returns the identifier assigned to this descriptor. Use the instance ID to
  // distinguish between descriptors from a peripheral with the same UUID and to
  // make function calls that take in a descriptor identifier. Present, if this
  // instance represents a remote characteristic.
  std::optional<std::string> instance_id;

  // The currently cached descriptor value. This value gets updated when the value
  // of the descriptor is read.
  std::optional<std::vector<uint8_t>> value;

};

struct ConnectProperties {
  ConnectProperties();
  ~ConnectProperties();
  ConnectProperties(const ConnectProperties&) = delete;
  ConnectProperties& operator=(const ConnectProperties&) = delete;
  ConnectProperties(ConnectProperties&& rhs) noexcept;
  ConnectProperties& operator=(ConnectProperties&& rhs) noexcept;

  // Populates a ConnectProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ConnectProperties& out);

  // Populates a ConnectProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ConnectProperties& out);

  // Creates a deep copy of ConnectProperties.
  ConnectProperties Clone() const;

  // Creates a ConnectProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ConnectProperties> FromValue(const base::Value::Dict& value);

  // Creates a ConnectProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<ConnectProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisConnectProperties object.
  base::Value::Dict ToValue() const;

  // Flag indicating whether a connection to the device is left open when the
  // event page of the application is unloaded (see <a
  // href="http://developer.chrome.com/apps/app_lifecycle.html">Manage App
  // Lifecycle</a>). The default value is <code>false.</code>
  bool persistent;

};

struct NotificationProperties {
  NotificationProperties();
  ~NotificationProperties();
  NotificationProperties(const NotificationProperties&) = delete;
  NotificationProperties& operator=(const NotificationProperties&) = delete;
  NotificationProperties(NotificationProperties&& rhs) noexcept;
  NotificationProperties& operator=(NotificationProperties&& rhs) noexcept;

  // Populates a NotificationProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NotificationProperties& out);

  // Populates a NotificationProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, NotificationProperties& out);

  // Creates a deep copy of NotificationProperties.
  NotificationProperties Clone() const;

  // Creates a NotificationProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<NotificationProperties> FromValue(const base::Value::Dict& value);

  // Creates a NotificationProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<NotificationProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisNotificationProperties object.
  base::Value::Dict ToValue() const;

  // Flag indicating whether the app should receive notifications when the event
  // page of the application is unloaded (see <a
  // href="http://developer.chrome.com/apps/app_lifecycle.html">Manage App
  // Lifecycle</a>). The default value is <code>false</code>.
  bool persistent;

};

struct ManufacturerData {
  ManufacturerData();
  ~ManufacturerData();
  ManufacturerData(const ManufacturerData&) = delete;
  ManufacturerData& operator=(const ManufacturerData&) = delete;
  ManufacturerData(ManufacturerData&& rhs) noexcept;
  ManufacturerData& operator=(ManufacturerData&& rhs) noexcept;

  // Populates a ManufacturerData object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManufacturerData& out);

  // Populates a ManufacturerData object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManufacturerData& out);

  // Creates a deep copy of ManufacturerData.
  ManufacturerData Clone() const;

  // Creates a ManufacturerData object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ManufacturerData> FromValue(const base::Value::Dict& value);

  // Creates a ManufacturerData object from a base::Value, or nullopt on
  // failure.
  static std::optional<ManufacturerData> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManufacturerData object.
  base::Value::Dict ToValue() const;

  int id;

  std::vector<int> data;

};

struct ServiceData {
  ServiceData();
  ~ServiceData();
  ServiceData(const ServiceData&) = delete;
  ServiceData& operator=(const ServiceData&) = delete;
  ServiceData(ServiceData&& rhs) noexcept;
  ServiceData& operator=(ServiceData&& rhs) noexcept;

  // Populates a ServiceData object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ServiceData& out);

  // Populates a ServiceData object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ServiceData& out);

  // Creates a deep copy of ServiceData.
  ServiceData Clone() const;

  // Creates a ServiceData object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ServiceData> FromValue(const base::Value::Dict& value);

  // Creates a ServiceData object from a base::Value, or nullopt on failure.
  static std::optional<ServiceData> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisServiceData object.
  base::Value::Dict ToValue() const;

  std::string uuid;

  std::vector<int> data;

};

struct Advertisement {
  Advertisement();
  ~Advertisement();
  Advertisement(const Advertisement&) = delete;
  Advertisement& operator=(const Advertisement&) = delete;
  Advertisement(Advertisement&& rhs) noexcept;
  Advertisement& operator=(Advertisement&& rhs) noexcept;

  // Populates a Advertisement object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, Advertisement& out);

  // Populates a Advertisement object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, Advertisement& out);

  // Creates a deep copy of Advertisement.
  Advertisement Clone() const;

  // Creates a Advertisement object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<Advertisement> FromValue(const base::Value::Dict& value);

  // Creates a Advertisement object from a base::Value, or nullopt on failure.
  static std::optional<Advertisement> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAdvertisement object.
  base::Value::Dict ToValue() const;

  // Type of advertisement.
  AdvertisementType type;

  // List of UUIDs to include in the "Service UUIDs" field of the Advertising
  // Data. These UUIDs can be of the 16bit, 32bit or 128 formats.
  std::optional<std::vector<std::string>> service_uuids;

  // List of manufacturer specific data to be included in "Manufacturer Specific
  // Data" fields of the advertising data.
  std::optional<std::vector<ManufacturerData>> manufacturer_data;

  // List of UUIDs to include in the "Solicit UUIDs" field of the Advertising
  // Data. These UUIDs can be of the 16bit, 32bit or 128 formats.
  std::optional<std::vector<std::string>> solicit_uuids;

  // List of service data to be included in "Service Data" fields of the
  // advertising data.
  std::optional<std::vector<ServiceData>> service_data;

};

struct Request {
  Request();
  ~Request();
  Request(const Request&) = delete;
  Request& operator=(const Request&) = delete;
  Request(Request&& rhs) noexcept;
  Request& operator=(Request&& rhs) noexcept;

  // Populates a Request object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Request& out);

  // Populates a Request object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Request& out);

  // Creates a deep copy of Request.
  Request Clone() const;

  // Creates a Request object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Request> FromValue(const base::Value::Dict& value);

  // Creates a Request object from a base::Value, or nullopt on failure.
  static std::optional<Request> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRequest object.
  base::Value::Dict ToValue() const;

  // Unique ID for this request. Use this ID when responding to this request.
  int request_id;

  // Device that send this request.
  Device device;

  // Value to write (if this is a write request).
  std::optional<std::vector<uint8_t>> value;

};

struct Response {
  Response();
  ~Response();
  Response(const Response&) = delete;
  Response& operator=(const Response&) = delete;
  Response(Response&& rhs) noexcept;
  Response& operator=(Response&& rhs) noexcept;

  // Populates a Response object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Response& out);

  // Populates a Response object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, Response& out);

  // Creates a deep copy of Response.
  Response Clone() const;

  // Creates a Response object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Response> FromValue(const base::Value::Dict& value);

  // Creates a Response object from a base::Value, or nullopt on failure.
  static std::optional<Response> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisResponse object.
  base::Value::Dict ToValue() const;

  // Id of the request this is a response to.
  int request_id;

  // If this is an error response, this should be true.
  bool is_error;

  // Response value. Write requests and error responses will ignore this
  // parameter.
  std::optional<std::vector<uint8_t>> value;

};

struct Notification {
  Notification();
  ~Notification();
  Notification(const Notification&) = delete;
  Notification& operator=(const Notification&) = delete;
  Notification(Notification&& rhs) noexcept;
  Notification& operator=(Notification&& rhs) noexcept;

  // Populates a Notification object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, Notification& out);

  // Populates a Notification object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, Notification& out);

  // Creates a deep copy of Notification.
  Notification Clone() const;

  // Creates a Notification object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<Notification> FromValue(const base::Value::Dict& value);

  // Creates a Notification object from a base::Value, or nullopt on failure.
  static std::optional<Notification> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisNotification object.
  base::Value::Dict ToValue() const;

  // New value of the characteristic.
  std::vector<uint8_t> value;

  // Optional flag for sending an indication instead of a notification.
  std::optional<bool> should_indicate;

};


//
// Functions
//

namespace Connect {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The Bluetooth address of the remote device to which a GATT connection should
  // be opened.
  std::string device_address;

  // Connection properties (optional).
  std::optional<ConnectProperties> properties;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Connect

namespace Disconnect {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The Bluetooth address of the remote device.
  std::string device_address;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Disconnect

namespace GetService {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The instance ID of the requested GATT service.
  std::string service_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const Service& result);
}  // namespace Results

}  // namespace GetService

namespace CreateService {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The service to create.
  Service service;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& service_id);
}  // namespace Results

}  // namespace CreateService

namespace GetServices {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The Bluetooth address of the remote device whose GATT services should be
  // returned.
  std::string device_address;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<Service>& result);
}  // namespace Results

}  // namespace GetServices

namespace GetCharacteristic {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The instance ID of the requested GATT characteristic.
  std::string characteristic_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const Characteristic& result);
}  // namespace Results

}  // namespace GetCharacteristic

namespace CreateCharacteristic {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The characteristic to create.
  Characteristic characteristic;

  // ID of the service to create this characteristic for.
  std::string service_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& characteristic_id);
}  // namespace Results

}  // namespace CreateCharacteristic

namespace GetCharacteristics {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The instance ID of the GATT service whose characteristics should be returned.
  std::string service_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<Characteristic>& result);
}  // namespace Results

}  // namespace GetCharacteristics

namespace GetIncludedServices {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The instance ID of the GATT service whose included services should be
  // returned.
  std::string service_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<Service>& result);
}  // namespace Results

}  // namespace GetIncludedServices

namespace GetDescriptor {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The instance ID of the requested GATT characteristic descriptor.
  std::string descriptor_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const Descriptor& result);
}  // namespace Results

}  // namespace GetDescriptor

namespace CreateDescriptor {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The descriptor to create.
  Descriptor descriptor;

  // ID of the characteristic to create this descriptor for.
  std::string characteristic_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& descriptor_id);
}  // namespace Results

}  // namespace CreateDescriptor

namespace GetDescriptors {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The instance ID of the GATT characteristic whose descriptors should be
  // returned.
  std::string characteristic_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<Descriptor>& result);
}  // namespace Results

}  // namespace GetDescriptors

namespace ReadCharacteristicValue {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The instance ID of the GATT characteristic whose value should be read from
  // the remote device.
  std::string characteristic_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const Characteristic& result);
}  // namespace Results

}  // namespace ReadCharacteristicValue

namespace WriteCharacteristicValue {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The instance ID of the GATT characteristic whose value should be written to.
  std::string characteristic_id;

  // The value that should be sent to the remote characteristic as part of the
  // write request.
  std::vector<uint8_t> value;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace WriteCharacteristicValue

namespace StartCharacteristicNotifications {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The instance ID of the GATT characteristic that notifications should be
  // enabled on.
  std::string characteristic_id;

  // Notification session properties (optional).
  std::optional<NotificationProperties> properties;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace StartCharacteristicNotifications

namespace StopCharacteristicNotifications {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The instance ID of the GATT characteristic on which this app's notification
  // session should be stopped.
  std::string characteristic_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace StopCharacteristicNotifications

namespace NotifyCharacteristicValueChanged {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The characteristic to send the notication for.
  std::string characteristic_id;

  Notification notification;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace NotifyCharacteristicValueChanged

namespace ReadDescriptorValue {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The instance ID of the GATT characteristic descriptor whose value should be
  // read from the remote device.
  std::string descriptor_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const Descriptor& result);
}  // namespace Results

}  // namespace ReadDescriptorValue

namespace WriteDescriptorValue {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The instance ID of the GATT characteristic descriptor whose value should be
  // written to.
  std::string descriptor_id;

  // The value that should be sent to the remote descriptor as part of the write
  // request.
  std::vector<uint8_t> value;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace WriteDescriptorValue

namespace RegisterService {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Unique ID of a created service.
  std::string service_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RegisterService

namespace UnregisterService {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Unique ID of a current registered service.
  std::string service_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace UnregisterService

namespace RemoveService {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Unique ID of a current registered service.
  std::string service_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RemoveService

namespace RegisterAdvertisement {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The advertisement to advertise.
  Advertisement advertisement;


 private:
  Params();
};

namespace Results {

base::Value::List Create(int advertisement_id);
}  // namespace Results

}  // namespace RegisterAdvertisement

namespace UnregisterAdvertisement {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Id of the advertisement to unregister.
  int advertisement_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace UnregisterAdvertisement

namespace ResetAdvertising {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ResetAdvertising

namespace SetAdvertisingInterval {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Minimum interval between advertisments (in milliseconds). This cannot be
  // lower than 20ms (as per the spec).
  int min_interval;

  // Maximum interval between advertisments (in milliseconds). This cannot be more
  // than 10240ms (as per the spec).
  int max_interval;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetAdvertisingInterval

namespace SendRequestResponse {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The response to the request.
  Response response;


 private:
  Params();
};

}  // namespace SendRequestResponse

//
// Events
//

namespace OnServiceAdded {

extern const char kEventName[];  // "bluetoothLowEnergy.onServiceAdded"

// The GATT service that was added.
base::Value::List Create(const Service& service);
}  // namespace OnServiceAdded

namespace OnServiceChanged {

extern const char kEventName[];  // "bluetoothLowEnergy.onServiceChanged"

// The GATT service whose state has changed.
base::Value::List Create(const Service& service);
}  // namespace OnServiceChanged

namespace OnServiceRemoved {

extern const char kEventName[];  // "bluetoothLowEnergy.onServiceRemoved"

// The GATT service that was removed.
base::Value::List Create(const Service& service);
}  // namespace OnServiceRemoved

namespace OnCharacteristicValueChanged {

extern const char kEventName[];  // "bluetoothLowEnergy.onCharacteristicValueChanged"

// The GATT characteristic whose value has changed.
base::Value::List Create(const Characteristic& characteristic);
}  // namespace OnCharacteristicValueChanged

namespace OnDescriptorValueChanged {

extern const char kEventName[];  // "bluetoothLowEnergy.onDescriptorValueChanged"

// The GATT characteristic descriptor whose value has changed.
base::Value::List Create(const Descriptor& descriptor);
}  // namespace OnDescriptorValueChanged

namespace OnCharacteristicReadRequest {

extern const char kEventName[];  // "bluetoothLowEnergy.onCharacteristicReadRequest"

// Request data for this request.
base::Value::List Create(const Request& request, const std::string& characteristic_id);
}  // namespace OnCharacteristicReadRequest

namespace OnCharacteristicWriteRequest {

extern const char kEventName[];  // "bluetoothLowEnergy.onCharacteristicWriteRequest"

// Request data for this request.
base::Value::List Create(const Request& request, const std::string& characteristic_id);
}  // namespace OnCharacteristicWriteRequest

namespace OnDescriptorReadRequest {

extern const char kEventName[];  // "bluetoothLowEnergy.onDescriptorReadRequest"

// Request data for this request.
base::Value::List Create(const Request& request, const std::string& descriptor_id);
}  // namespace OnDescriptorReadRequest

namespace OnDescriptorWriteRequest {

extern const char kEventName[];  // "bluetoothLowEnergy.onDescriptorWriteRequest"

// Request data for this request.
base::Value::List Create(const Request& request, const std::string& descriptor_id);
}  // namespace OnDescriptorWriteRequest

}  // namespace bluetooth_low_energy
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_BLUETOOTH_LOW_ENERGY_H__
