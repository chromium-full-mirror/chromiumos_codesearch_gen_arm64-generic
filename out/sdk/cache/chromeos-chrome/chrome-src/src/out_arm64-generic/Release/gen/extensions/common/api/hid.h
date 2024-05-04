// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/hid.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_HID_H__
#define EXTENSIONS_COMMON_API_HID_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace hid {

//
// Types
//

struct HidCollectionInfo {
  HidCollectionInfo();
  ~HidCollectionInfo();
  HidCollectionInfo(const HidCollectionInfo&) = delete;
  HidCollectionInfo& operator=(const HidCollectionInfo&) = delete;
  HidCollectionInfo(HidCollectionInfo&& rhs) noexcept;
  HidCollectionInfo& operator=(HidCollectionInfo&& rhs) noexcept;

  // Populates a HidCollectionInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, HidCollectionInfo& out);

  // Populates a HidCollectionInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, HidCollectionInfo& out);

  // Creates a deep copy of HidCollectionInfo.
  HidCollectionInfo Clone() const;

  // Creates a HidCollectionInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<HidCollectionInfo> FromValue(const base::Value::Dict& value);

  // Creates a HidCollectionInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<HidCollectionInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisHidCollectionInfo object.
  base::Value::Dict ToValue() const;

  // HID usage page identifier.
  int usage_page;

  // Page-defined usage identifier.
  int usage;

  // Report IDs which belong to the collection and to its children.
  std::vector<int> report_ids;

};

struct HidDeviceInfo {
  HidDeviceInfo();
  ~HidDeviceInfo();
  HidDeviceInfo(const HidDeviceInfo&) = delete;
  HidDeviceInfo& operator=(const HidDeviceInfo&) = delete;
  HidDeviceInfo(HidDeviceInfo&& rhs) noexcept;
  HidDeviceInfo& operator=(HidDeviceInfo&& rhs) noexcept;

  // Populates a HidDeviceInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, HidDeviceInfo& out);

  // Populates a HidDeviceInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, HidDeviceInfo& out);

  // Creates a deep copy of HidDeviceInfo.
  HidDeviceInfo Clone() const;

  // Creates a HidDeviceInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<HidDeviceInfo> FromValue(const base::Value::Dict& value);

  // Creates a HidDeviceInfo object from a base::Value, or nullopt on failure.
  static std::optional<HidDeviceInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisHidDeviceInfo object.
  base::Value::Dict ToValue() const;

  // Opaque device ID.
  int device_id;

  // Vendor ID.
  int vendor_id;

  // Product ID.
  int product_id;

  // The product name read from the device, if available.
  std::string product_name;

  // The serial number read from the device, if available.
  std::string serial_number;

  // Top-level collections from this device's report descriptors.
  std::vector<HidCollectionInfo> collections;

  // Top-level collection's maximum input report size.
  int max_input_report_size;

  // Top-level collection's maximum output report size.
  int max_output_report_size;

  // Top-level collection's maximum feature report size.
  int max_feature_report_size;

  // Raw device report descriptor (not available on Windows).
  std::vector<uint8_t> report_descriptor;

};

struct HidConnectInfo {
  HidConnectInfo();
  ~HidConnectInfo();
  HidConnectInfo(const HidConnectInfo&) = delete;
  HidConnectInfo& operator=(const HidConnectInfo&) = delete;
  HidConnectInfo(HidConnectInfo&& rhs) noexcept;
  HidConnectInfo& operator=(HidConnectInfo&& rhs) noexcept;

  // Populates a HidConnectInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, HidConnectInfo& out);

  // Populates a HidConnectInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, HidConnectInfo& out);

  // Creates a deep copy of HidConnectInfo.
  HidConnectInfo Clone() const;

  // Creates a HidConnectInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<HidConnectInfo> FromValue(const base::Value::Dict& value);

  // Creates a HidConnectInfo object from a base::Value, or nullopt on failure.
  static std::optional<HidConnectInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisHidConnectInfo object.
  base::Value::Dict ToValue() const;

  // The opaque ID used to identify this connection in all other functions.
  int connection_id;

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

  // Device product ID, only checked only if the vendor ID matches.
  std::optional<int> product_id;

  // HID usage page identifier.
  std::optional<int> usage_page;

  // HID usage identifier, checked only if the HID usage page matches.
  std::optional<int> usage;

};

struct GetDevicesOptions {
  GetDevicesOptions();
  ~GetDevicesOptions();
  GetDevicesOptions(const GetDevicesOptions&) = delete;
  GetDevicesOptions& operator=(const GetDevicesOptions&) = delete;
  GetDevicesOptions(GetDevicesOptions&& rhs) noexcept;
  GetDevicesOptions& operator=(GetDevicesOptions&& rhs) noexcept;

  // Populates a GetDevicesOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetDevicesOptions& out);

  // Populates a GetDevicesOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetDevicesOptions& out);

  // Creates a deep copy of GetDevicesOptions.
  GetDevicesOptions Clone() const;

  // Creates a GetDevicesOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<GetDevicesOptions> FromValue(const base::Value::Dict& value);

  // Creates a GetDevicesOptions object from a base::Value, or nullopt on
  // failure.
  static std::optional<GetDevicesOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetDevicesOptions object.
  base::Value::Dict ToValue() const;

  std::optional<int> vendor_id;

  std::optional<int> product_id;

  // A device matching any given filter will be returned. An empty filter list
  // will return all devices the app has permission for.
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
  GetDevicesOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<HidDeviceInfo>& devices);
}  // namespace Results

}  // namespace GetDevices

namespace Connect {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The $(ref:HidDeviceInfo.deviceId) of the device to open.
  int device_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const HidConnectInfo& connection);
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

  // The <code>connectionId</code> returned by $(ref:connect).
  int connection_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Disconnect

namespace Receive {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The <code>connectionId</code> returned by $(ref:connect).
  int connection_id;


 private:
  Params();
};

namespace Results {

// The report ID or <code>0</code> if none.
// The report data, the report ID prefix (if present) is removed.
base::Value::List Create(int report_id, const std::vector<uint8_t>& data);
}  // namespace Results

}  // namespace Receive

namespace Send {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The <code>connectionId</code> returned by $(ref:connect).
  int connection_id;

  // The report ID to use, or <code>0</code> if none.
  int report_id;

  // The report data.
  std::vector<uint8_t> data;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Send

namespace ReceiveFeatureReport {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The <code>connectionId</code> returned by $(ref:connect).
  int connection_id;

  // The report ID, or <code>0</code> if none.
  int report_id;


 private:
  Params();
};

namespace Results {

// The report data, including a report ID prefix if one is sent by the device.
base::Value::List Create(const std::vector<uint8_t>& data);
}  // namespace Results

}  // namespace ReceiveFeatureReport

namespace SendFeatureReport {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The <code>connectionId</code> returned by $(ref:connect).
  int connection_id;

  // The report ID to use, or <code>0</code> if none.
  int report_id;

  // The report data.
  std::vector<uint8_t> data;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SendFeatureReport

//
// Events
//

namespace OnDeviceAdded {

extern const char kEventName[];  // "hid.onDeviceAdded"

base::Value::List Create(const HidDeviceInfo& device);
}  // namespace OnDeviceAdded

namespace OnDeviceRemoved {

extern const char kEventName[];  // "hid.onDeviceRemoved"

// The <code>deviceId</code> property of the device passed to
// $(ref:onDeviceAdded).
base::Value::List Create(int device_id);
}  // namespace OnDeviceRemoved

}  // namespace hid
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_HID_H__
