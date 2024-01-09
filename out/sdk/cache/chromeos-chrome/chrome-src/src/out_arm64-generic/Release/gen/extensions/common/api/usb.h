// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/usb.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_USB_H__
#define EXTENSIONS_COMMON_API_USB_H__

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
namespace usb {

//
// Types
//

// Direction, Recipient, RequestType, and TransferType all map to their
// namesakes within the USB specification.
enum class Direction {
  kNone = 0,
  kIn,
  kOut,
  kMaxValue = kOut,
};


const char* ToString(Direction as_enum);
Direction ParseDirection(base::StringPiece as_string);
std::u16string GetDirectionParseError(base::StringPiece as_string);

enum class Recipient {
  kNone = 0,
  kDevice,
  kInterface,
  kEndpoint,
  kOther,
  kMaxValue = kOther,
};


const char* ToString(Recipient as_enum);
Recipient ParseRecipient(base::StringPiece as_string);
std::u16string GetRecipientParseError(base::StringPiece as_string);

enum class RequestType {
  kNone = 0,
  kStandard,
  kClass,
  kVendor,
  kReserved,
  kMaxValue = kReserved,
};


const char* ToString(RequestType as_enum);
RequestType ParseRequestType(base::StringPiece as_string);
std::u16string GetRequestTypeParseError(base::StringPiece as_string);

enum class TransferType {
  kNone = 0,
  kControl,
  kInterrupt,
  kIsochronous,
  kBulk,
  kMaxValue = kBulk,
};


const char* ToString(TransferType as_enum);
TransferType ParseTransferType(base::StringPiece as_string);
std::u16string GetTransferTypeParseError(base::StringPiece as_string);

// For interrupt and isochronous modes, SynchronizationType and UsageType map to
// their namesakes within the USB specification.
enum class SynchronizationType {
  kNone = 0,
  kAsynchronous,
  kAdaptive,
  kSynchronous,
  kMaxValue = kSynchronous,
};


const char* ToString(SynchronizationType as_enum);
SynchronizationType ParseSynchronizationType(base::StringPiece as_string);
std::u16string GetSynchronizationTypeParseError(base::StringPiece as_string);

enum class UsageType {
  kNone = 0,
  kData,
  kFeedback,
  kExplicitFeedback,
  kPeriodic,
  kNotification,
  kMaxValue = kNotification,
};


const char* ToString(UsageType as_enum);
UsageType ParseUsageType(base::StringPiece as_string);
std::u16string GetUsageTypeParseError(base::StringPiece as_string);

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

  // An opaque ID for the USB device. It remains unchanged until the device is
  // unplugged.
  int device;

  // The device vendor ID.
  int vendor_id;

  // The product ID.
  int product_id;

  // The device version (bcdDevice field).
  int version;

  // The iProduct string read from the device, if available.
  std::string product_name;

  // The iManufacturer string read from the device, if available.
  std::string manufacturer_name;

  // The iSerialNumber string read from the device, if available.
  std::string serial_number;

};

struct ConnectionHandle {
  ConnectionHandle();
  ~ConnectionHandle();
  ConnectionHandle(const ConnectionHandle&) = delete;
  ConnectionHandle& operator=(const ConnectionHandle&) = delete;
  ConnectionHandle(ConnectionHandle&& rhs) noexcept;
  ConnectionHandle& operator=(ConnectionHandle&& rhs) noexcept;

  // Populates a ConnectionHandle object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ConnectionHandle& out);

  // Populates a ConnectionHandle object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ConnectionHandle& out);

  // Creates a deep copy of ConnectionHandle.
  ConnectionHandle Clone() const;

  // Creates a ConnectionHandle object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ConnectionHandle> FromValue(const base::Value::Dict& value);

  // Creates a ConnectionHandle object from a base::Value, or nullopt on
  // failure.
  static std::optional<ConnectionHandle> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisConnectionHandle object.
  base::Value::Dict ToValue() const;

  // An opaque handle representing this connection to the USB device and all
  // associated claimed interfaces and pending transfers. A new handle is created
  // each time the device is opened. The connection handle is different from
  // $(ref:Device.device).
  int handle;

  // The device vendor ID.
  int vendor_id;

  // The product ID.
  int product_id;

};

struct EndpointDescriptor {
  EndpointDescriptor();
  ~EndpointDescriptor();
  EndpointDescriptor(const EndpointDescriptor&) = delete;
  EndpointDescriptor& operator=(const EndpointDescriptor&) = delete;
  EndpointDescriptor(EndpointDescriptor&& rhs) noexcept;
  EndpointDescriptor& operator=(EndpointDescriptor&& rhs) noexcept;

  // Populates a EndpointDescriptor object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EndpointDescriptor& out);

  // Populates a EndpointDescriptor object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, EndpointDescriptor& out);

  // Creates a deep copy of EndpointDescriptor.
  EndpointDescriptor Clone() const;

  // Creates a EndpointDescriptor object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<EndpointDescriptor> FromValue(const base::Value::Dict& value);

  // Creates a EndpointDescriptor object from a base::Value, or nullopt on
  // failure.
  static std::optional<EndpointDescriptor> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisEndpointDescriptor object.
  base::Value::Dict ToValue() const;

  // Endpoint address.
  int address;

  // Transfer type.
  TransferType type;

  // Transfer direction.
  Direction direction;

  // Maximum packet size.
  int maximum_packet_size;

  // Transfer synchronization mode (isochronous only).
  SynchronizationType synchronization;

  // Endpoint usage hint.
  UsageType usage;

  // Polling interval (interrupt and isochronous only).
  std::optional<int> polling_interval;

  // Extra descriptor data associated with this endpoint.
  std::vector<uint8_t> extra_data;

};

struct InterfaceDescriptor {
  InterfaceDescriptor();
  ~InterfaceDescriptor();
  InterfaceDescriptor(const InterfaceDescriptor&) = delete;
  InterfaceDescriptor& operator=(const InterfaceDescriptor&) = delete;
  InterfaceDescriptor(InterfaceDescriptor&& rhs) noexcept;
  InterfaceDescriptor& operator=(InterfaceDescriptor&& rhs) noexcept;

  // Populates a InterfaceDescriptor object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, InterfaceDescriptor& out);

  // Populates a InterfaceDescriptor object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, InterfaceDescriptor& out);

  // Creates a deep copy of InterfaceDescriptor.
  InterfaceDescriptor Clone() const;

  // Creates a InterfaceDescriptor object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<InterfaceDescriptor> FromValue(const base::Value::Dict& value);

  // Creates a InterfaceDescriptor object from a base::Value, or nullopt on
  // failure.
  static std::optional<InterfaceDescriptor> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisInterfaceDescriptor object.
  base::Value::Dict ToValue() const;

  // The interface number.
  int interface_number;

  // The interface alternate setting number (defaults to <code>0</code).
  int alternate_setting;

  // The USB interface class.
  int interface_class;

  // The USB interface sub-class.
  int interface_subclass;

  // The USB interface protocol.
  int interface_protocol;

  // Description of the interface.
  std::optional<std::string> description;

  // Available endpoints.
  std::vector<EndpointDescriptor> endpoints;

  // Extra descriptor data associated with this interface.
  std::vector<uint8_t> extra_data;

};

struct ConfigDescriptor {
  ConfigDescriptor();
  ~ConfigDescriptor();
  ConfigDescriptor(const ConfigDescriptor&) = delete;
  ConfigDescriptor& operator=(const ConfigDescriptor&) = delete;
  ConfigDescriptor(ConfigDescriptor&& rhs) noexcept;
  ConfigDescriptor& operator=(ConfigDescriptor&& rhs) noexcept;

  // Populates a ConfigDescriptor object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ConfigDescriptor& out);

  // Populates a ConfigDescriptor object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ConfigDescriptor& out);

  // Creates a deep copy of ConfigDescriptor.
  ConfigDescriptor Clone() const;

  // Creates a ConfigDescriptor object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ConfigDescriptor> FromValue(const base::Value::Dict& value);

  // Creates a ConfigDescriptor object from a base::Value, or nullopt on
  // failure.
  static std::optional<ConfigDescriptor> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisConfigDescriptor object.
  base::Value::Dict ToValue() const;

  // Is this the active configuration?
  bool active;

  // The configuration number.
  int configuration_value;

  // Description of the configuration.
  std::optional<std::string> description;

  // The device is self-powered.
  bool self_powered;

  // The device supports remote wakeup.
  bool remote_wakeup;

  // The maximum power needed by this device in milliamps (mA).
  int max_power;

  // Available interfaces.
  std::vector<InterfaceDescriptor> interfaces;

  // Extra descriptor data associated with this configuration.
  std::vector<uint8_t> extra_data;

};

struct ControlTransferInfo {
  ControlTransferInfo();
  ~ControlTransferInfo();
  ControlTransferInfo(const ControlTransferInfo&) = delete;
  ControlTransferInfo& operator=(const ControlTransferInfo&) = delete;
  ControlTransferInfo(ControlTransferInfo&& rhs) noexcept;
  ControlTransferInfo& operator=(ControlTransferInfo&& rhs) noexcept;

  // Populates a ControlTransferInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ControlTransferInfo& out);

  // Populates a ControlTransferInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ControlTransferInfo& out);

  // Creates a deep copy of ControlTransferInfo.
  ControlTransferInfo Clone() const;

  // Creates a ControlTransferInfo object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<ControlTransferInfo> FromValue(const base::Value::Dict& value);

  // Creates a ControlTransferInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<ControlTransferInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisControlTransferInfo object.
  base::Value::Dict ToValue() const;

  // The transfer direction (<code>"in"</code> or <code>"out"</code>).
  Direction direction;

  // The transfer target. The target given by <code>index</code> must be claimed
  // if <code>"interface"</code> or <code>"endpoint"</code>.
  Recipient recipient;

  // The request type.
  RequestType request_type;

  // The <code>bRequest</code> field, see <i>Universal Serial Bus Specification
  // Revision 1.1</i> &sect; 9.3.
  int request;

  // The <code>wValue</code> field, see <i>Ibid</i>.
  int value;

  // The <code>wIndex</code> field, see <i>Ibid</i>.
  int index;

  // The maximum number of bytes to receive (required only by input transfers).
  std::optional<int> length;

  // The data to transmit (required only by output transfers).
  std::optional<std::vector<uint8_t>> data;

  // Request timeout (in milliseconds). The default value <code>0</code> indicates
  // no timeout.
  std::optional<int> timeout;

};

struct GenericTransferInfo {
  GenericTransferInfo();
  ~GenericTransferInfo();
  GenericTransferInfo(const GenericTransferInfo&) = delete;
  GenericTransferInfo& operator=(const GenericTransferInfo&) = delete;
  GenericTransferInfo(GenericTransferInfo&& rhs) noexcept;
  GenericTransferInfo& operator=(GenericTransferInfo&& rhs) noexcept;

  // Populates a GenericTransferInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GenericTransferInfo& out);

  // Populates a GenericTransferInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GenericTransferInfo& out);

  // Creates a deep copy of GenericTransferInfo.
  GenericTransferInfo Clone() const;

  // Creates a GenericTransferInfo object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<GenericTransferInfo> FromValue(const base::Value::Dict& value);

  // Creates a GenericTransferInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<GenericTransferInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGenericTransferInfo object.
  base::Value::Dict ToValue() const;

  // The transfer direction (<code>"in"</code> or <code>"out"</code>).
  Direction direction;

  // The target endpoint address. The interface containing this endpoint must be
  // claimed.
  int endpoint;

  // The maximum number of bytes to receive (required only by input transfers).
  std::optional<int> length;

  // The data to transmit (required only by output transfers).
  std::optional<std::vector<uint8_t>> data;

  // Request timeout (in milliseconds). The default value <code>0</code> indicates
  // no timeout.
  std::optional<int> timeout;

};

struct IsochronousTransferInfo {
  IsochronousTransferInfo();
  ~IsochronousTransferInfo();
  IsochronousTransferInfo(const IsochronousTransferInfo&) = delete;
  IsochronousTransferInfo& operator=(const IsochronousTransferInfo&) = delete;
  IsochronousTransferInfo(IsochronousTransferInfo&& rhs) noexcept;
  IsochronousTransferInfo& operator=(IsochronousTransferInfo&& rhs) noexcept;

  // Populates a IsochronousTransferInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, IsochronousTransferInfo& out);

  // Populates a IsochronousTransferInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, IsochronousTransferInfo& out);

  // Creates a deep copy of IsochronousTransferInfo.
  IsochronousTransferInfo Clone() const;

  // Creates a IsochronousTransferInfo object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<IsochronousTransferInfo> FromValue(const base::Value::Dict& value);

  // Creates a IsochronousTransferInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<IsochronousTransferInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisIsochronousTransferInfo object.
  base::Value::Dict ToValue() const;

  // Transfer parameters. The transfer length or data buffer specified in this
  // parameter block is split along <code>packetLength</code> boundaries to form
  // the individual packets of the transfer.
  GenericTransferInfo transfer_info;

  // The total number of packets in this transfer.
  int packets;

  // The length of each of the packets in this transfer.
  int packet_length;

};

struct TransferResultInfo {
  TransferResultInfo();
  ~TransferResultInfo();
  TransferResultInfo(const TransferResultInfo&) = delete;
  TransferResultInfo& operator=(const TransferResultInfo&) = delete;
  TransferResultInfo(TransferResultInfo&& rhs) noexcept;
  TransferResultInfo& operator=(TransferResultInfo&& rhs) noexcept;

  // Populates a TransferResultInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, TransferResultInfo& out);

  // Populates a TransferResultInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, TransferResultInfo& out);

  // Creates a deep copy of TransferResultInfo.
  TransferResultInfo Clone() const;

  // Creates a TransferResultInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<TransferResultInfo> FromValue(const base::Value::Dict& value);

  // Creates a TransferResultInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<TransferResultInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTransferResultInfo object.
  base::Value::Dict ToValue() const;

  // A value of <code>0</code> indicates that the transfer was a success. Other
  // values indicate failure.
  std::optional<int> result_code;

  // The data returned by an input transfer. <code>undefined</code> for output
  // transfers.
  std::optional<std::vector<uint8_t>> data;

};

struct DeviceFilter {
  DeviceFilter();
  ~DeviceFilter();
  DeviceFilter(const DeviceFilter&) = delete;
  DeviceFilter& operator=(const DeviceFilter&) = delete;
  DeviceFilter(DeviceFilter&& rhs) noexcept;
  DeviceFilter& operator=(DeviceFilter&& rhs) noexcept;

  // Populates a DeviceFilter object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DeviceFilter& out);

  // Populates a DeviceFilter object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DeviceFilter& out);

  // Creates a deep copy of DeviceFilter.
  DeviceFilter Clone() const;

  // Creates a DeviceFilter object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<DeviceFilter> FromValue(const base::Value::Dict& value);

  // Creates a DeviceFilter object from a base::Value, or nullopt on failure.
  static std::optional<DeviceFilter> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDeviceFilter object.
  base::Value::Dict ToValue() const;

  // Device vendor ID.
  std::optional<int> vendor_id;

  // Device product ID, checked only if the vendor ID matches.
  std::optional<int> product_id;

  // USB interface class, matches any interface on the device.
  std::optional<int> interface_class;

  // USB interface sub-class, checked only if the interface class matches.
  std::optional<int> interface_subclass;

  // USB interface protocol, checked only if the interface sub-class matches.
  std::optional<int> interface_protocol;

};

struct EnumerateDevicesOptions {
  EnumerateDevicesOptions();
  ~EnumerateDevicesOptions();
  EnumerateDevicesOptions(const EnumerateDevicesOptions&) = delete;
  EnumerateDevicesOptions& operator=(const EnumerateDevicesOptions&) = delete;
  EnumerateDevicesOptions(EnumerateDevicesOptions&& rhs) noexcept;
  EnumerateDevicesOptions& operator=(EnumerateDevicesOptions&& rhs) noexcept;

  // Populates a EnumerateDevicesOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EnumerateDevicesOptions& out);

  // Populates a EnumerateDevicesOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, EnumerateDevicesOptions& out);

  // Creates a deep copy of EnumerateDevicesOptions.
  EnumerateDevicesOptions Clone() const;

  // Creates a EnumerateDevicesOptions object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<EnumerateDevicesOptions> FromValue(const base::Value::Dict& value);

  // Creates a EnumerateDevicesOptions object from a base::Value, or nullopt on
  // failure.
  static std::optional<EnumerateDevicesOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisEnumerateDevicesOptions object.
  base::Value::Dict ToValue() const;

  std::optional<int> vendor_id;

  std::optional<int> product_id;

  // A device matching any given filter will be returned. An empty filter list
  // will return all devices the app has permission for.
  std::optional<std::vector<DeviceFilter>> filters;

};

struct EnumerateDevicesAndRequestAccessOptions {
  EnumerateDevicesAndRequestAccessOptions();
  ~EnumerateDevicesAndRequestAccessOptions();
  EnumerateDevicesAndRequestAccessOptions(const EnumerateDevicesAndRequestAccessOptions&) = delete;
  EnumerateDevicesAndRequestAccessOptions& operator=(const EnumerateDevicesAndRequestAccessOptions&) = delete;
  EnumerateDevicesAndRequestAccessOptions(EnumerateDevicesAndRequestAccessOptions&& rhs) noexcept;
  EnumerateDevicesAndRequestAccessOptions& operator=(EnumerateDevicesAndRequestAccessOptions&& rhs) noexcept;

  // Populates a EnumerateDevicesAndRequestAccessOptions object from a
  // base::Value& instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EnumerateDevicesAndRequestAccessOptions& out);

  // Populates a EnumerateDevicesAndRequestAccessOptions object from a Dict&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, EnumerateDevicesAndRequestAccessOptions& out);

  // Creates a deep copy of EnumerateDevicesAndRequestAccessOptions.
  EnumerateDevicesAndRequestAccessOptions Clone() const;

  // Creates a EnumerateDevicesAndRequestAccessOptions object from a
  // base::Value::Dict, or nullopt on failure.
  static std::optional<EnumerateDevicesAndRequestAccessOptions> FromValue(const base::Value::Dict& value);

  // Creates a EnumerateDevicesAndRequestAccessOptions object from a
  // base::Value, or nullopt on failure.
  static std::optional<EnumerateDevicesAndRequestAccessOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisEnumerateDevicesAndRequestAccessOptions object.
  base::Value::Dict ToValue() const;

  // The device vendor ID.
  int vendor_id;

  // The product ID.
  int product_id;

  // The interface ID to request access to. Only available on Chrome OS. It has no
  // effect on other platforms.
  std::optional<int> interface_id;

};

struct DevicePromptOptions {
  DevicePromptOptions();
  ~DevicePromptOptions();
  DevicePromptOptions(const DevicePromptOptions&) = delete;
  DevicePromptOptions& operator=(const DevicePromptOptions&) = delete;
  DevicePromptOptions(DevicePromptOptions&& rhs) noexcept;
  DevicePromptOptions& operator=(DevicePromptOptions&& rhs) noexcept;

  // Populates a DevicePromptOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DevicePromptOptions& out);

  // Populates a DevicePromptOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DevicePromptOptions& out);

  // Creates a deep copy of DevicePromptOptions.
  DevicePromptOptions Clone() const;

  // Creates a DevicePromptOptions object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<DevicePromptOptions> FromValue(const base::Value::Dict& value);

  // Creates a DevicePromptOptions object from a base::Value, or nullopt on
  // failure.
  static std::optional<DevicePromptOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDevicePromptOptions object.
  base::Value::Dict ToValue() const;

  // Allow the user to select multiple devices.
  std::optional<bool> multiple;

  // Filter the list of devices presented to the user. If multiple filters are
  // provided devices matching any filter will be displayed.
  std::optional<std::vector<DeviceFilter>> filters;

};


//
// Functions
//

namespace GetDevices {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The properties to search for on target devices.
  EnumerateDevicesOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<Device>& devices);
}  // namespace Results

}  // namespace GetDevices

namespace GetUserSelectedDevices {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Configuration of the device picker dialog box.
  DevicePromptOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<Device>& devices);
}  // namespace Results

}  // namespace GetUserSelectedDevices

namespace GetConfigurations {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The $(ref:Device) to fetch descriptors from.
  Device device;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<ConfigDescriptor>& configs);
}  // namespace Results

}  // namespace GetConfigurations

namespace RequestAccess {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The $(ref:Device) to request access to.
  Device device;

  // The particular interface requested.
  int interface_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool success);
}  // namespace Results

}  // namespace RequestAccess

namespace OpenDevice {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The $(ref:Device) to open.
  Device device;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const ConnectionHandle& handle);
}  // namespace Results

}  // namespace OpenDevice

namespace FindDevices {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The properties to search for on target devices.
  EnumerateDevicesAndRequestAccessOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<ConnectionHandle>& handles);
}  // namespace Results

}  // namespace FindDevices

namespace CloseDevice {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The $(ref:ConnectionHandle) to close.
  ConnectionHandle handle;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace CloseDevice

namespace SetConfiguration {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // An open connection to the device.
  ConnectionHandle handle;

  int configuration_value;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetConfiguration

namespace GetConfiguration {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // An open connection to the device.
  ConnectionHandle handle;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const ConfigDescriptor& config);
}  // namespace Results

}  // namespace GetConfiguration

namespace ListInterfaces {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // An open connection to the device.
  ConnectionHandle handle;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<InterfaceDescriptor>& descriptors);
}  // namespace Results

}  // namespace ListInterfaces

namespace ClaimInterface {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // An open connection to the device.
  ConnectionHandle handle;

  // The interface to be claimed.
  int interface_number;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ClaimInterface

namespace ReleaseInterface {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // An open connection to the device.
  ConnectionHandle handle;

  // The interface to be released.
  int interface_number;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ReleaseInterface

namespace SetInterfaceAlternateSetting {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // An open connection to the device where this interface has been     claimed.
  ConnectionHandle handle;

  // The interface to configure.
  int interface_number;

  // The alternate setting to configure.
  int alternate_setting;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetInterfaceAlternateSetting

namespace ControlTransfer {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // An open connection to the device.
  ConnectionHandle handle;

  ControlTransferInfo transfer_info;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const TransferResultInfo& info);
}  // namespace Results

}  // namespace ControlTransfer

namespace BulkTransfer {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // An open connection to the device.
  ConnectionHandle handle;

  // The transfer parameters.
  GenericTransferInfo transfer_info;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const TransferResultInfo& info);
}  // namespace Results

}  // namespace BulkTransfer

namespace InterruptTransfer {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // An open connection to the device.
  ConnectionHandle handle;

  // The transfer parameters.
  GenericTransferInfo transfer_info;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const TransferResultInfo& info);
}  // namespace Results

}  // namespace InterruptTransfer

namespace IsochronousTransfer {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // An open connection to the device.
  ConnectionHandle handle;

  IsochronousTransferInfo transfer_info;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const TransferResultInfo& info);
}  // namespace Results

}  // namespace IsochronousTransfer

namespace ResetDevice {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // A connection handle to reset.
  ConnectionHandle handle;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool success);
}  // namespace Results

}  // namespace ResetDevice

//
// Events
//

namespace OnDeviceAdded {

extern const char kEventName[];  // "usb.onDeviceAdded"

base::Value::List Create(const Device& device);
}  // namespace OnDeviceAdded

namespace OnDeviceRemoved {

extern const char kEventName[];  // "usb.onDeviceRemoved"

base::Value::List Create(const Device& device);
}  // namespace OnDeviceRemoved

}  // namespace usb
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_USB_H__
