// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/bluetooth.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_BLUETOOTH_H__
#define EXTENSIONS_COMMON_API_BLUETOOTH_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace bluetooth {

//
// Types
//

// Allocation authorities for Vendor IDs.
enum class VendorIdSource {
  kNone = 0,
  kBluetooth,
  kUsb,
  kMaxValue = kUsb,
};


const char* ToString(VendorIdSource as_enum);
VendorIdSource ParseVendorIdSource(base::StringPiece as_string);
std::u16string GetVendorIdSourceParseError(base::StringPiece as_string);

// Common device types recognized by Chrome.
enum class DeviceType {
  kNone = 0,
  kComputer,
  kPhone,
  kModem,
  kAudio,
  kCarAudio,
  kVideo,
  kPeripheral,
  kJoystick,
  kGamepad,
  kKeyboard,
  kMouse,
  kTablet,
  kKeyboardMouseCombo,
  kMaxValue = kKeyboardMouseCombo,
};


const char* ToString(DeviceType as_enum);
DeviceType ParseDeviceType(base::StringPiece as_string);
std::u16string GetDeviceTypeParseError(base::StringPiece as_string);

// Types for filtering bluetooth devices.
enum class FilterType {
  kNone = 0,
  kAll,
  kKnown,
  kMaxValue = kKnown,
};


const char* ToString(FilterType as_enum);
FilterType ParseFilterType(base::StringPiece as_string);
std::u16string GetFilterTypeParseError(base::StringPiece as_string);

// Transport type of the bluetooth device.
enum class Transport {
  kNone = 0,
  kInvalid,
  kClassic,
  kLe,
  kDual,
  kMaxValue = kDual,
};


const char* ToString(Transport as_enum);
Transport ParseTransport(base::StringPiece as_string);
std::u16string GetTransportParseError(base::StringPiece as_string);

struct AdapterState {
  AdapterState();
  ~AdapterState();
  AdapterState(const AdapterState&) = delete;
  AdapterState& operator=(const AdapterState&) = delete;
  AdapterState(AdapterState&& rhs);
  AdapterState& operator=(AdapterState&& rhs);

  // Populates a AdapterState object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AdapterState& out);

  // Populates a AdapterState object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AdapterState& out);

  // Creates a deep copy of AdapterState.
  AdapterState Clone() const;

  // Creates a AdapterState object from a base::Value, or NULL on failure.
  static std::unique_ptr<AdapterState> FromValueDeprecated(const base::Value& value);

  // Creates a AdapterState object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<AdapterState> FromValue(const base::Value::Dict& value);

  // Creates a AdapterState object from a base::Value, or nullopt on failure.
  static absl::optional<AdapterState> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAdapterState object.
  base::Value::Dict ToValue() const;

  // The address of the adapter, in the format 'XX:XX:XX:XX:XX:XX'.
  std::string address;

  // The human-readable name of the adapter.
  std::string name;

  // Indicates whether or not the adapter has power.
  bool powered;

  // Indicates whether or not the adapter is available (i.e. enabled).
  bool available;

  // Indicates whether or not the adapter is currently discovering.
  bool discovering;

};

struct Device {
  Device();
  ~Device();
  Device(const Device&) = delete;
  Device& operator=(const Device&) = delete;
  Device(Device&& rhs);
  Device& operator=(Device&& rhs);

  // Populates a Device object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Device& out);

  // Populates a Device object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Device& out);

  // Creates a deep copy of Device.
  Device Clone() const;

  // Creates a Device object from a base::Value, or NULL on failure.
  static std::unique_ptr<Device> FromValueDeprecated(const base::Value& value);

  // Creates a Device object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<Device> FromValue(const base::Value::Dict& value);

  // Creates a Device object from a base::Value, or nullopt on failure.
  static absl::optional<Device> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDevice object.
  base::Value::Dict ToValue() const;

  // The address of the device, in the format 'XX:XX:XX:XX:XX:XX'.
  std::string address;

  // The human-readable name of the device.
  absl::optional<std::string> name;

  // The class of the device, a bit-field defined by
  // http://www.bluetooth.org/en-us/specification/assigned-numbers/baseband.
  absl::optional<int> device_class;

  // The Device ID record of the device, where available.
  VendorIdSource vendor_id_source;

  absl::optional<int> vendor_id;

  absl::optional<int> product_id;

  absl::optional<int> device_id;

  // The type of the device, if recognized by Chrome. This is obtained from the
  // |deviceClass| field and only represents a small fraction of the possible
  // device types. When in doubt you should use the |deviceClass| field directly.
  DeviceType type;

  // Indicates whether or not the device is paired with the system.
  absl::optional<bool> paired;

  // Indicates whether the device is currently connected to the system.
  absl::optional<bool> connected;

  // Indicates whether the device is currently connecting to the system.
  absl::optional<bool> connecting;

  // Indicates whether the device is connectable.
  absl::optional<bool> connectable;

  // UUIDs of protocols, profiles and services advertised by the device. For
  // classic Bluetooth devices, this list is obtained from EIR data and SDP
  // tables. For Low Energy devices, this list is obtained from AD and GATT
  // primary services. For dual mode devices this may be obtained from both.
  absl::optional<std::vector<std::string>> uuids;

  // The received signal strength, in dBm. This field is avaliable and valid only
  // during discovery. Outside of discovery it's value is not specified.
  absl::optional<int> inquiry_rssi;

  // The transmitted power level. This field is avaliable only for LE devices that
  // include this field in AD. It is avaliable and valid only during discovery.
  absl::optional<int> inquiry_tx_power;

  // The transport type of the bluetooth device.
  Transport transport;

  // The remaining battery of the device.
  absl::optional<int> battery_percentage;

};

struct BluetoothFilter {
  BluetoothFilter();
  ~BluetoothFilter();
  BluetoothFilter(const BluetoothFilter&) = delete;
  BluetoothFilter& operator=(const BluetoothFilter&) = delete;
  BluetoothFilter(BluetoothFilter&& rhs);
  BluetoothFilter& operator=(BluetoothFilter&& rhs);

  // Populates a BluetoothFilter object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, BluetoothFilter& out);

  // Populates a BluetoothFilter object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, BluetoothFilter& out);

  // Creates a deep copy of BluetoothFilter.
  BluetoothFilter Clone() const;

  // Creates a BluetoothFilter object from a base::Value, or NULL on failure.
  static std::unique_ptr<BluetoothFilter> FromValueDeprecated(const base::Value& value);

  // Creates a BluetoothFilter object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<BluetoothFilter> FromValue(const base::Value::Dict& value);

  // Creates a BluetoothFilter object from a base::Value, or nullopt on failure.
  static absl::optional<BluetoothFilter> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisBluetoothFilter object.
  base::Value::Dict ToValue() const;

  // Type of filter to apply to the device list. Default is all.
  FilterType filter_type;

  // Maximum number of bluetoth devices to return. Default is 0 (no limit) if
  // unspecified.
  absl::optional<int> limit;

};


//
// Functions
//

namespace GetAdapterState {

namespace Results {

// Object containing the adapter information.
base::Value::List Create(const AdapterState& adapter_info);
}  // namespace Results

}  // namespace GetAdapterState

namespace GetDevice {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Address of device to get.
  std::string device_address;


 private:
  Params();
};

namespace Results {

// Object containing the device information.
base::Value::List Create(const Device& device_info);
}  // namespace Results

}  // namespace GetDevice

namespace GetDevices {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Some criteria to filter the list of returned bluetooth devices. If the filter
  // is not set or set to <code>{}</code>, returned device list will contain all
  // bluetooth devices. Right now this is only supported in ChromeOS, for other
  // platforms, a full list is returned.
  absl::optional<BluetoothFilter> filter;


 private:
  Params();
};

namespace Results {

// Array of object containing device information.
base::Value::List Create(const std::vector<Device>& device_infos);
}  // namespace Results

}  // namespace GetDevices

namespace StartDiscovery {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace StartDiscovery

namespace StopDiscovery {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace StopDiscovery

//
// Events
//

namespace OnAdapterStateChanged {

extern const char kEventName[];  // "bluetooth.onAdapterStateChanged"

// The new state of the adapter.
base::Value::List Create(const AdapterState& state);
}  // namespace OnAdapterStateChanged

namespace OnDeviceAdded {

extern const char kEventName[];  // "bluetooth.onDeviceAdded"

base::Value::List Create(const Device& device);
}  // namespace OnDeviceAdded

namespace OnDeviceChanged {

extern const char kEventName[];  // "bluetooth.onDeviceChanged"

base::Value::List Create(const Device& device);
}  // namespace OnDeviceChanged

namespace OnDeviceRemoved {

extern const char kEventName[];  // "bluetooth.onDeviceRemoved"

base::Value::List Create(const Device& device);
}  // namespace OnDeviceRemoved

}  // namespace bluetooth
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_BLUETOOTH_H__
