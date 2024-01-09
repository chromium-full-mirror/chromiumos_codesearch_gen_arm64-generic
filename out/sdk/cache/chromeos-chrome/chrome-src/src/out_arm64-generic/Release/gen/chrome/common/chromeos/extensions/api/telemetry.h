// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/chromeos/extensions/api/telemetry.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_CHROMEOS_EXTENSIONS_API_TELEMETRY_H__
#define CHROME_COMMON_CHROMEOS_EXTENSIONS_API_TELEMETRY_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace chromeos {
namespace api {
namespace os_telemetry {

//
// Types
//

struct AudioInputNodeInfo {
  AudioInputNodeInfo();
  ~AudioInputNodeInfo();
  AudioInputNodeInfo(const AudioInputNodeInfo&) = delete;
  AudioInputNodeInfo& operator=(const AudioInputNodeInfo&) = delete;
  AudioInputNodeInfo(AudioInputNodeInfo&& rhs) noexcept;
  AudioInputNodeInfo& operator=(AudioInputNodeInfo&& rhs) noexcept;

  // Populates a AudioInputNodeInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AudioInputNodeInfo& out);

  // Populates a AudioInputNodeInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AudioInputNodeInfo& out);

  // Creates a deep copy of AudioInputNodeInfo.
  AudioInputNodeInfo Clone() const;

  // Creates a AudioInputNodeInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<AudioInputNodeInfo> FromValue(const base::Value::Dict& value);

  // Creates a AudioInputNodeInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<AudioInputNodeInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAudioInputNodeInfo object.
  base::Value::Dict ToValue() const;

  std::optional<double> id;

  std::optional<std::string> name;

  std::optional<std::string> device_name;

  std::optional<bool> active;

  std::optional<int> node_gain;

};

struct AudioOutputNodeInfo {
  AudioOutputNodeInfo();
  ~AudioOutputNodeInfo();
  AudioOutputNodeInfo(const AudioOutputNodeInfo&) = delete;
  AudioOutputNodeInfo& operator=(const AudioOutputNodeInfo&) = delete;
  AudioOutputNodeInfo(AudioOutputNodeInfo&& rhs) noexcept;
  AudioOutputNodeInfo& operator=(AudioOutputNodeInfo&& rhs) noexcept;

  // Populates a AudioOutputNodeInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AudioOutputNodeInfo& out);

  // Populates a AudioOutputNodeInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AudioOutputNodeInfo& out);

  // Creates a deep copy of AudioOutputNodeInfo.
  AudioOutputNodeInfo Clone() const;

  // Creates a AudioOutputNodeInfo object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<AudioOutputNodeInfo> FromValue(const base::Value::Dict& value);

  // Creates a AudioOutputNodeInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<AudioOutputNodeInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAudioOutputNodeInfo object.
  base::Value::Dict ToValue() const;

  std::optional<double> id;

  std::optional<std::string> name;

  std::optional<std::string> device_name;

  std::optional<bool> active;

  std::optional<int> node_volume;

};

struct AudioInfo {
  AudioInfo();
  ~AudioInfo();
  AudioInfo(const AudioInfo&) = delete;
  AudioInfo& operator=(const AudioInfo&) = delete;
  AudioInfo(AudioInfo&& rhs) noexcept;
  AudioInfo& operator=(AudioInfo&& rhs) noexcept;

  // Populates a AudioInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, AudioInfo& out);

  // Populates a AudioInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, AudioInfo& out);

  // Creates a deep copy of AudioInfo.
  AudioInfo Clone() const;

  // Creates a AudioInfo object from a base::Value::Dict, or nullopt on failure.
  static std::optional<AudioInfo> FromValue(const base::Value::Dict& value);

  // Creates a AudioInfo object from a base::Value, or nullopt on failure.
  static std::optional<AudioInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAudioInfo object.
  base::Value::Dict ToValue() const;

  std::optional<bool> output_mute;

  std::optional<bool> input_mute;

  std::optional<int> underruns;

  std::optional<int> severe_underruns;

  std::vector<AudioOutputNodeInfo> output_nodes;

  std::vector<AudioInputNodeInfo> input_nodes;

};

struct BatteryInfo {
  BatteryInfo();
  ~BatteryInfo();
  BatteryInfo(const BatteryInfo&) = delete;
  BatteryInfo& operator=(const BatteryInfo&) = delete;
  BatteryInfo(BatteryInfo&& rhs) noexcept;
  BatteryInfo& operator=(BatteryInfo&& rhs) noexcept;

  // Populates a BatteryInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, BatteryInfo& out);

  // Populates a BatteryInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, BatteryInfo& out);

  // Creates a deep copy of BatteryInfo.
  BatteryInfo Clone() const;

  // Creates a BatteryInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<BatteryInfo> FromValue(const base::Value::Dict& value);

  // Creates a BatteryInfo object from a base::Value, or nullopt on failure.
  static std::optional<BatteryInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisBatteryInfo object.
  base::Value::Dict ToValue() const;

  std::optional<double> cycle_count;

  std::optional<double> voltage_now;

  std::optional<std::string> vendor;

  std::optional<std::string> serial_number;

  std::optional<double> charge_full_design;

  std::optional<double> charge_full;

  std::optional<double> voltage_min_design;

  std::optional<std::string> model_name;

  std::optional<double> charge_now;

  std::optional<double> current_now;

  std::optional<std::string> technology;

  std::optional<std::string> status;

  std::optional<std::string> manufacture_date;

  std::optional<double> temperature;

};

struct NonRemovableBlockDeviceInfo {
  NonRemovableBlockDeviceInfo();
  ~NonRemovableBlockDeviceInfo();
  NonRemovableBlockDeviceInfo(const NonRemovableBlockDeviceInfo&) = delete;
  NonRemovableBlockDeviceInfo& operator=(const NonRemovableBlockDeviceInfo&) = delete;
  NonRemovableBlockDeviceInfo(NonRemovableBlockDeviceInfo&& rhs) noexcept;
  NonRemovableBlockDeviceInfo& operator=(NonRemovableBlockDeviceInfo&& rhs) noexcept;

  // Populates a NonRemovableBlockDeviceInfo object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NonRemovableBlockDeviceInfo& out);

  // Populates a NonRemovableBlockDeviceInfo object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, NonRemovableBlockDeviceInfo& out);

  // Creates a deep copy of NonRemovableBlockDeviceInfo.
  NonRemovableBlockDeviceInfo Clone() const;

  // Creates a NonRemovableBlockDeviceInfo object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<NonRemovableBlockDeviceInfo> FromValue(const base::Value::Dict& value);

  // Creates a NonRemovableBlockDeviceInfo object from a base::Value, or nullopt
  // on failure.
  static std::optional<NonRemovableBlockDeviceInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisNonRemovableBlockDeviceInfo object.
  base::Value::Dict ToValue() const;

  std::optional<std::string> name;

  std::optional<std::string> type;

  std::optional<double> size;

};

struct NonRemovableBlockDeviceInfoResponse {
  NonRemovableBlockDeviceInfoResponse();
  ~NonRemovableBlockDeviceInfoResponse();
  NonRemovableBlockDeviceInfoResponse(const NonRemovableBlockDeviceInfoResponse&) = delete;
  NonRemovableBlockDeviceInfoResponse& operator=(const NonRemovableBlockDeviceInfoResponse&) = delete;
  NonRemovableBlockDeviceInfoResponse(NonRemovableBlockDeviceInfoResponse&& rhs) noexcept;
  NonRemovableBlockDeviceInfoResponse& operator=(NonRemovableBlockDeviceInfoResponse&& rhs) noexcept;

  // Populates a NonRemovableBlockDeviceInfoResponse object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NonRemovableBlockDeviceInfoResponse& out);

  // Populates a NonRemovableBlockDeviceInfoResponse object from a Dict&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, NonRemovableBlockDeviceInfoResponse& out);

  // Creates a deep copy of NonRemovableBlockDeviceInfoResponse.
  NonRemovableBlockDeviceInfoResponse Clone() const;

  // Creates a NonRemovableBlockDeviceInfoResponse object from a
  // base::Value::Dict, or nullopt on failure.
  static std::optional<NonRemovableBlockDeviceInfoResponse> FromValue(const base::Value::Dict& value);

  // Creates a NonRemovableBlockDeviceInfoResponse object from a base::Value, or
  // nullopt on failure.
  static std::optional<NonRemovableBlockDeviceInfoResponse> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisNonRemovableBlockDeviceInfoResponse object.
  base::Value::Dict ToValue() const;

  std::vector<NonRemovableBlockDeviceInfo> device_infos;

};

enum class CpuArchitectureEnum {
  kNone = 0,
  kUnknown,
  kX86_64,
  kAarch64,
  kArmv7l,
  kMaxValue = kArmv7l,
};


const char* ToString(CpuArchitectureEnum as_enum);
CpuArchitectureEnum ParseCpuArchitectureEnum(base::StringPiece as_string);
std::u16string GetCpuArchitectureEnumParseError(base::StringPiece as_string);

struct CpuCStateInfo {
  CpuCStateInfo();
  ~CpuCStateInfo();
  CpuCStateInfo(const CpuCStateInfo&) = delete;
  CpuCStateInfo& operator=(const CpuCStateInfo&) = delete;
  CpuCStateInfo(CpuCStateInfo&& rhs) noexcept;
  CpuCStateInfo& operator=(CpuCStateInfo&& rhs) noexcept;

  // Populates a CpuCStateInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CpuCStateInfo& out);

  // Populates a CpuCStateInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CpuCStateInfo& out);

  // Creates a deep copy of CpuCStateInfo.
  CpuCStateInfo Clone() const;

  // Creates a CpuCStateInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<CpuCStateInfo> FromValue(const base::Value::Dict& value);

  // Creates a CpuCStateInfo object from a base::Value, or nullopt on failure.
  static std::optional<CpuCStateInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCpuCStateInfo object.
  base::Value::Dict ToValue() const;

  // Name of the state.
  std::optional<std::string> name;

  // Time spent in the state since the last reboot, in microseconds.
  std::optional<double> time_in_state_since_last_boot_us;

};

struct LogicalCpuInfo {
  LogicalCpuInfo();
  ~LogicalCpuInfo();
  LogicalCpuInfo(const LogicalCpuInfo&) = delete;
  LogicalCpuInfo& operator=(const LogicalCpuInfo&) = delete;
  LogicalCpuInfo(LogicalCpuInfo&& rhs) noexcept;
  LogicalCpuInfo& operator=(LogicalCpuInfo&& rhs) noexcept;

  // Populates a LogicalCpuInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, LogicalCpuInfo& out);

  // Populates a LogicalCpuInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, LogicalCpuInfo& out);

  // Creates a deep copy of LogicalCpuInfo.
  LogicalCpuInfo Clone() const;

  // Creates a LogicalCpuInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<LogicalCpuInfo> FromValue(const base::Value::Dict& value);

  // Creates a LogicalCpuInfo object from a base::Value, or nullopt on failure.
  static std::optional<LogicalCpuInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisLogicalCpuInfo object.
  base::Value::Dict ToValue() const;

  // The max CPU clock speed in kHz.
  std::optional<int> max_clock_speed_khz;

  // Maximum frequency the CPU is allowed to run at, by policy.
  std::optional<int> scaling_max_frequency_khz;

  // Current frequency the CPU is running at.
  std::optional<int> scaling_current_frequency_khz;

  // Idle time since last boot, in milliseconds.
  std::optional<double> idle_time_ms;

  // Information about the logical CPU's time in various C-states.
  std::vector<CpuCStateInfo> c_states;

  // The core number this logical CPU corresponds to.
  std::optional<int> core_id;

};

struct PhysicalCpuInfo {
  PhysicalCpuInfo();
  ~PhysicalCpuInfo();
  PhysicalCpuInfo(const PhysicalCpuInfo&) = delete;
  PhysicalCpuInfo& operator=(const PhysicalCpuInfo&) = delete;
  PhysicalCpuInfo(PhysicalCpuInfo&& rhs) noexcept;
  PhysicalCpuInfo& operator=(PhysicalCpuInfo&& rhs) noexcept;

  // Populates a PhysicalCpuInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PhysicalCpuInfo& out);

  // Populates a PhysicalCpuInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PhysicalCpuInfo& out);

  // Creates a deep copy of PhysicalCpuInfo.
  PhysicalCpuInfo Clone() const;

  // Creates a PhysicalCpuInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<PhysicalCpuInfo> FromValue(const base::Value::Dict& value);

  // Creates a PhysicalCpuInfo object from a base::Value, or nullopt on failure.
  static std::optional<PhysicalCpuInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPhysicalCpuInfo object.
  base::Value::Dict ToValue() const;

  std::optional<std::string> model_name;

  std::vector<LogicalCpuInfo> logical_cpus;

};

struct CpuInfo {
  CpuInfo();
  ~CpuInfo();
  CpuInfo(const CpuInfo&) = delete;
  CpuInfo& operator=(const CpuInfo&) = delete;
  CpuInfo(CpuInfo&& rhs) noexcept;
  CpuInfo& operator=(CpuInfo&& rhs) noexcept;

  // Populates a CpuInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, CpuInfo& out);

  // Populates a CpuInfo object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, CpuInfo& out);

  // Creates a deep copy of CpuInfo.
  CpuInfo Clone() const;

  // Creates a CpuInfo object from a base::Value::Dict, or nullopt on failure.
  static std::optional<CpuInfo> FromValue(const base::Value::Dict& value);

  // Creates a CpuInfo object from a base::Value, or nullopt on failure.
  static std::optional<CpuInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCpuInfo object.
  base::Value::Dict ToValue() const;

  std::optional<int> num_total_threads;

  CpuArchitectureEnum architecture;

  std::vector<PhysicalCpuInfo> physical_cpus;

};

// An enumeration of display input type.
enum class DisplayInputType {
  kNone = 0,
  kUnknown,
  kDigital,
  kAnalog,
  kMaxValue = kAnalog,
};


const char* ToString(DisplayInputType as_enum);
DisplayInputType ParseDisplayInputType(base::StringPiece as_string);
std::u16string GetDisplayInputTypeParseError(base::StringPiece as_string);

struct EmbeddedDisplayInfo {
  EmbeddedDisplayInfo();
  ~EmbeddedDisplayInfo();
  EmbeddedDisplayInfo(const EmbeddedDisplayInfo&) = delete;
  EmbeddedDisplayInfo& operator=(const EmbeddedDisplayInfo&) = delete;
  EmbeddedDisplayInfo(EmbeddedDisplayInfo&& rhs) noexcept;
  EmbeddedDisplayInfo& operator=(EmbeddedDisplayInfo&& rhs) noexcept;

  // Populates a EmbeddedDisplayInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EmbeddedDisplayInfo& out);

  // Populates a EmbeddedDisplayInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, EmbeddedDisplayInfo& out);

  // Creates a deep copy of EmbeddedDisplayInfo.
  EmbeddedDisplayInfo Clone() const;

  // Creates a EmbeddedDisplayInfo object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<EmbeddedDisplayInfo> FromValue(const base::Value::Dict& value);

  // Creates a EmbeddedDisplayInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<EmbeddedDisplayInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisEmbeddedDisplayInfo object.
  base::Value::Dict ToValue() const;

  // Privacy screen is supported or not.
  std::optional<bool> privacy_screen_supported;

  // Privacy screen is enabled or not.
  std::optional<bool> privacy_screen_enabled;

  // Display width in millimeters.
  std::optional<int> display_width;

  // Display height in millimeters.
  std::optional<int> display_height;

  // Horizontal resolution.
  std::optional<int> resolution_horizontal;

  // Vertical resolution.
  std::optional<int> resolution_vertical;

  // Refresh rate.
  std::optional<double> refresh_rate;

  // Three letter manufacturer ID.
  std::optional<std::string> manufacturer;

  // Manufacturer product code.
  std::optional<int> model_id;

  // 32 bits serial number.
  std::optional<int> serial_number;

  // Week of manufacture.
  std::optional<int> manufacture_week;

  // Year of manufacture.
  std::optional<int> manufacture_year;

  // EDID version.
  std::optional<std::string> edid_version;

  // Digital or analog input.
  DisplayInputType input_type;

  // Name of display product.
  std::optional<std::string> display_name;

};

struct ExternalDisplayInfo {
  ExternalDisplayInfo();
  ~ExternalDisplayInfo();
  ExternalDisplayInfo(const ExternalDisplayInfo&) = delete;
  ExternalDisplayInfo& operator=(const ExternalDisplayInfo&) = delete;
  ExternalDisplayInfo(ExternalDisplayInfo&& rhs) noexcept;
  ExternalDisplayInfo& operator=(ExternalDisplayInfo&& rhs) noexcept;

  // Populates a ExternalDisplayInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ExternalDisplayInfo& out);

  // Populates a ExternalDisplayInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ExternalDisplayInfo& out);

  // Creates a deep copy of ExternalDisplayInfo.
  ExternalDisplayInfo Clone() const;

  // Creates a ExternalDisplayInfo object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<ExternalDisplayInfo> FromValue(const base::Value::Dict& value);

  // Creates a ExternalDisplayInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<ExternalDisplayInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisExternalDisplayInfo object.
  base::Value::Dict ToValue() const;

  // Display width in millimeters.
  std::optional<int> display_width;

  // Display height in millimeters.
  std::optional<int> display_height;

  // Horizontal resolution.
  std::optional<int> resolution_horizontal;

  // Vertical resolution.
  std::optional<int> resolution_vertical;

  // Refresh rate.
  std::optional<double> refresh_rate;

  // Three letter manufacturer ID.
  std::optional<std::string> manufacturer;

  // Manufacturer product code.
  std::optional<int> model_id;

  // 32 bits serial number.
  std::optional<int> serial_number;

  // Week of manufacture.
  std::optional<int> manufacture_week;

  // Year of manufacture.
  std::optional<int> manufacture_year;

  // EDID version.
  std::optional<std::string> edid_version;

  // Digital or analog input.
  DisplayInputType input_type;

  // Name of display product.
  std::optional<std::string> display_name;

};

struct DisplayInfo {
  DisplayInfo();
  ~DisplayInfo();
  DisplayInfo(const DisplayInfo&) = delete;
  DisplayInfo& operator=(const DisplayInfo&) = delete;
  DisplayInfo(DisplayInfo&& rhs) noexcept;
  DisplayInfo& operator=(DisplayInfo&& rhs) noexcept;

  // Populates a DisplayInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DisplayInfo& out);

  // Populates a DisplayInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, DisplayInfo& out);

  // Creates a deep copy of DisplayInfo.
  DisplayInfo Clone() const;

  // Creates a DisplayInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<DisplayInfo> FromValue(const base::Value::Dict& value);

  // Creates a DisplayInfo object from a base::Value, or nullopt on failure.
  static std::optional<DisplayInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDisplayInfo object.
  base::Value::Dict ToValue() const;

  // Embedded display info.
  EmbeddedDisplayInfo embedded_display;

  // External display info.
  std::vector<ExternalDisplayInfo> external_displays;

};

struct MarketingInfo {
  MarketingInfo();
  ~MarketingInfo();
  MarketingInfo(const MarketingInfo&) = delete;
  MarketingInfo& operator=(const MarketingInfo&) = delete;
  MarketingInfo(MarketingInfo&& rhs) noexcept;
  MarketingInfo& operator=(MarketingInfo&& rhs) noexcept;

  // Populates a MarketingInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MarketingInfo& out);

  // Populates a MarketingInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, MarketingInfo& out);

  // Creates a deep copy of MarketingInfo.
  MarketingInfo Clone() const;

  // Creates a MarketingInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<MarketingInfo> FromValue(const base::Value::Dict& value);

  // Creates a MarketingInfo object from a base::Value, or nullopt on failure.
  static std::optional<MarketingInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMarketingInfo object.
  base::Value::Dict ToValue() const;

  std::optional<std::string> marketing_name;

};

struct MemoryInfo {
  MemoryInfo();
  ~MemoryInfo();
  MemoryInfo(const MemoryInfo&) = delete;
  MemoryInfo& operator=(const MemoryInfo&) = delete;
  MemoryInfo(MemoryInfo&& rhs) noexcept;
  MemoryInfo& operator=(MemoryInfo&& rhs) noexcept;

  // Populates a MemoryInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, MemoryInfo& out);

  // Populates a MemoryInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, MemoryInfo& out);

  // Creates a deep copy of MemoryInfo.
  MemoryInfo Clone() const;

  // Creates a MemoryInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<MemoryInfo> FromValue(const base::Value::Dict& value);

  // Creates a MemoryInfo object from a base::Value, or nullopt on failure.
  static std::optional<MemoryInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMemoryInfo object.
  base::Value::Dict ToValue() const;

  std::optional<int> total_memory_ki_b;

  std::optional<int> free_memory_ki_b;

  std::optional<int> available_memory_ki_b;

  std::optional<double> page_faults_since_last_boot;

};

enum class NetworkType {
  kNone = 0,
  kCellular,
  kEthernet,
  kTether,
  kVpn,
  kWifi,
  kMaxValue = kWifi,
};


const char* ToString(NetworkType as_enum);
NetworkType ParseNetworkType(base::StringPiece as_string);
std::u16string GetNetworkTypeParseError(base::StringPiece as_string);

enum class NetworkState {
  kNone = 0,
  kUninitialized,
  kDisabled,
  kProhibited,
  kNotConnected,
  kConnecting,
  kPortal,
  kConnected,
  kOnline,
  kMaxValue = kOnline,
};


const char* ToString(NetworkState as_enum);
NetworkState ParseNetworkState(base::StringPiece as_string);
std::u16string GetNetworkStateParseError(base::StringPiece as_string);

struct NetworkInfo {
  NetworkInfo();
  ~NetworkInfo();
  NetworkInfo(const NetworkInfo&) = delete;
  NetworkInfo& operator=(const NetworkInfo&) = delete;
  NetworkInfo(NetworkInfo&& rhs) noexcept;
  NetworkInfo& operator=(NetworkInfo&& rhs) noexcept;

  // Populates a NetworkInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NetworkInfo& out);

  // Populates a NetworkInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, NetworkInfo& out);

  // Creates a deep copy of NetworkInfo.
  NetworkInfo Clone() const;

  // Creates a NetworkInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<NetworkInfo> FromValue(const base::Value::Dict& value);

  // Creates a NetworkInfo object from a base::Value, or nullopt on failure.
  static std::optional<NetworkInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisNetworkInfo object.
  base::Value::Dict ToValue() const;

  NetworkType type;

  NetworkState state;

  std::optional<std::string> mac_address;

  std::optional<std::string> ipv4_address;

  std::vector<std::string> ipv6_addresses;

  std::optional<double> signal_strength;

};

struct InternetConnectivityInfo {
  InternetConnectivityInfo();
  ~InternetConnectivityInfo();
  InternetConnectivityInfo(const InternetConnectivityInfo&) = delete;
  InternetConnectivityInfo& operator=(const InternetConnectivityInfo&) = delete;
  InternetConnectivityInfo(InternetConnectivityInfo&& rhs) noexcept;
  InternetConnectivityInfo& operator=(InternetConnectivityInfo&& rhs) noexcept;

  // Populates a InternetConnectivityInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, InternetConnectivityInfo& out);

  // Populates a InternetConnectivityInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, InternetConnectivityInfo& out);

  // Creates a deep copy of InternetConnectivityInfo.
  InternetConnectivityInfo Clone() const;

  // Creates a InternetConnectivityInfo object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<InternetConnectivityInfo> FromValue(const base::Value::Dict& value);

  // Creates a InternetConnectivityInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<InternetConnectivityInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisInternetConnectivityInfo object.
  base::Value::Dict ToValue() const;

  std::vector<NetworkInfo> networks;

};

struct OemData {
  OemData();
  ~OemData();
  OemData(const OemData&) = delete;
  OemData& operator=(const OemData&) = delete;
  OemData(OemData&& rhs) noexcept;
  OemData& operator=(OemData&& rhs) noexcept;

  // Populates a OemData object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, OemData& out);

  // Populates a OemData object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, OemData& out);

  // Creates a deep copy of OemData.
  OemData Clone() const;

  // Creates a OemData object from a base::Value::Dict, or nullopt on failure.
  static std::optional<OemData> FromValue(const base::Value::Dict& value);

  // Creates a OemData object from a base::Value, or nullopt on failure.
  static std::optional<OemData> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisOemData object.
  base::Value::Dict ToValue() const;

  // OEM data. This field used to store battery serial number by some OEMs.
  std::optional<std::string> oem_data;

};

struct OsVersionInfo {
  OsVersionInfo();
  ~OsVersionInfo();
  OsVersionInfo(const OsVersionInfo&) = delete;
  OsVersionInfo& operator=(const OsVersionInfo&) = delete;
  OsVersionInfo(OsVersionInfo&& rhs) noexcept;
  OsVersionInfo& operator=(OsVersionInfo&& rhs) noexcept;

  // Populates a OsVersionInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, OsVersionInfo& out);

  // Populates a OsVersionInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, OsVersionInfo& out);

  // Creates a deep copy of OsVersionInfo.
  OsVersionInfo Clone() const;

  // Creates a OsVersionInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<OsVersionInfo> FromValue(const base::Value::Dict& value);

  // Creates a OsVersionInfo object from a base::Value, or nullopt on failure.
  static std::optional<OsVersionInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisOsVersionInfo object.
  base::Value::Dict ToValue() const;

  std::optional<std::string> release_milestone;

  std::optional<std::string> build_number;

  std::optional<std::string> patch_number;

  std::optional<std::string> release_channel;

};

struct UsbBusInterfaceInfo {
  UsbBusInterfaceInfo();
  ~UsbBusInterfaceInfo();
  UsbBusInterfaceInfo(const UsbBusInterfaceInfo&) = delete;
  UsbBusInterfaceInfo& operator=(const UsbBusInterfaceInfo&) = delete;
  UsbBusInterfaceInfo(UsbBusInterfaceInfo&& rhs) noexcept;
  UsbBusInterfaceInfo& operator=(UsbBusInterfaceInfo&& rhs) noexcept;

  // Populates a UsbBusInterfaceInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UsbBusInterfaceInfo& out);

  // Populates a UsbBusInterfaceInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, UsbBusInterfaceInfo& out);

  // Creates a deep copy of UsbBusInterfaceInfo.
  UsbBusInterfaceInfo Clone() const;

  // Creates a UsbBusInterfaceInfo object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<UsbBusInterfaceInfo> FromValue(const base::Value::Dict& value);

  // Creates a UsbBusInterfaceInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<UsbBusInterfaceInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisUsbBusInterfaceInfo object.
  base::Value::Dict ToValue() const;

  // The zero-based number (index) of the interface.
  std::optional<double> interface_number;

  // These fields can be used to classify / identify the usb interfaces. See the
  // usb.ids database for the values. (https://github.com/gentoo/hwids)
  std::optional<double> class_id;

  std::optional<double> subclass_id;

  std::optional<double> protocol_id;

  // The driver used by the device. This is the name of the matched driver which
  // is registered in the kernel. See "{kernel root}/drivers/" for the list of the
  // built in drivers.
  std::optional<std::string> driver;

};

// An enumeration of the formats of firmware version in fwpud. See the fwupd
// repo for the values. (https://github.com/fwupd/fwupd)
enum class FwupdVersionFormat {
  kNone = 0,
  kPlain,
  kNumber,
  kPair,
  kTriplet,
  kQuad,
  kBcd,
  kIntelMe,
  kIntelMe2,
  kSurfaceLegacy,
  kSurface,
  kDellBios,
  kHex,
  kMaxValue = kHex,
};


const char* ToString(FwupdVersionFormat as_enum);
FwupdVersionFormat ParseFwupdVersionFormat(base::StringPiece as_string);
std::u16string GetFwupdVersionFormatParseError(base::StringPiece as_string);

struct FwupdFirmwareVersionInfo {
  FwupdFirmwareVersionInfo();
  ~FwupdFirmwareVersionInfo();
  FwupdFirmwareVersionInfo(const FwupdFirmwareVersionInfo&) = delete;
  FwupdFirmwareVersionInfo& operator=(const FwupdFirmwareVersionInfo&) = delete;
  FwupdFirmwareVersionInfo(FwupdFirmwareVersionInfo&& rhs) noexcept;
  FwupdFirmwareVersionInfo& operator=(FwupdFirmwareVersionInfo&& rhs) noexcept;

  // Populates a FwupdFirmwareVersionInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, FwupdFirmwareVersionInfo& out);

  // Populates a FwupdFirmwareVersionInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, FwupdFirmwareVersionInfo& out);

  // Creates a deep copy of FwupdFirmwareVersionInfo.
  FwupdFirmwareVersionInfo Clone() const;

  // Creates a FwupdFirmwareVersionInfo object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<FwupdFirmwareVersionInfo> FromValue(const base::Value::Dict& value);

  // Creates a FwupdFirmwareVersionInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<FwupdFirmwareVersionInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisFwupdFirmwareVersionInfo object.
  base::Value::Dict ToValue() const;

  // The string form of the firmware version.
  std::optional<std::string> version;

  // The format for parsing the version string.
  FwupdVersionFormat version_format;

};

enum class UsbVersion {
  kNone = 0,
  kUnknown,
  kUsb1,
  kUsb2,
  kUsb3,
  kMaxValue = kUsb3,
};


const char* ToString(UsbVersion as_enum);
UsbVersion ParseUsbVersion(base::StringPiece as_string);
std::u16string GetUsbVersionParseError(base::StringPiece as_string);

// An enumeration of the usb spec speed in Mbps. Source:   -
// https://www.kernel.org/doc/Documentation/ABI/testing/sysfs-bus-usb   -
// https://www.kernel.org/doc/Documentation/ABI/stable/sysfs-bus-usb   -
// https://en.wikipedia.org/wiki/USB
enum class UsbSpecSpeed {
  kNone = 0,
  kUnknown,
  kN1_5mbps,
  kN12Mbps,
  kN480Mbps,
  kN5Gbps,
  kN10Gbps,
  kN20Gbps,
  kMaxValue = kN20Gbps,
};


const char* ToString(UsbSpecSpeed as_enum);
UsbSpecSpeed ParseUsbSpecSpeed(base::StringPiece as_string);
std::u16string GetUsbSpecSpeedParseError(base::StringPiece as_string);

struct UsbBusInfo {
  UsbBusInfo();
  ~UsbBusInfo();
  UsbBusInfo(const UsbBusInfo&) = delete;
  UsbBusInfo& operator=(const UsbBusInfo&) = delete;
  UsbBusInfo(UsbBusInfo&& rhs) noexcept;
  UsbBusInfo& operator=(UsbBusInfo&& rhs) noexcept;

  // Populates a UsbBusInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, UsbBusInfo& out);

  // Populates a UsbBusInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, UsbBusInfo& out);

  // Creates a deep copy of UsbBusInfo.
  UsbBusInfo Clone() const;

  // Creates a UsbBusInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<UsbBusInfo> FromValue(const base::Value::Dict& value);

  // Creates a UsbBusInfo object from a base::Value, or nullopt on failure.
  static std::optional<UsbBusInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisUsbBusInfo object.
  base::Value::Dict ToValue() const;

  // These fields can be used to classify / identify the usb devices. See the
  // usb.ids database for the values. (https://github.com/gentoo/hwids)
  std::optional<double> class_id;

  std::optional<double> subclass_id;

  std::optional<double> protocol_id;

  std::optional<double> vendor_id;

  std::optional<double> product_id;

  // The usb interfaces under the device. A usb device has at least one interface.
  // Each interface may or may not work independently, based on each device. This
  // allows a usb device to provide multiple features. The interfaces are sorted
  // by the `interface_number` field.
  std::vector<UsbBusInterfaceInfo> interfaces;

  // The firmware version obtained from fwupd.
  std::optional<FwupdFirmwareVersionInfo> fwupd_firmware_version_info;

  // The recognized usb version. It may not be the highest USB version supported
  // by the hardware.
  UsbVersion version;

  // The spec usb speed.
  UsbSpecSpeed spec_speed;

};

struct UsbBusDevices {
  UsbBusDevices();
  ~UsbBusDevices();
  UsbBusDevices(const UsbBusDevices&) = delete;
  UsbBusDevices& operator=(const UsbBusDevices&) = delete;
  UsbBusDevices(UsbBusDevices&& rhs) noexcept;
  UsbBusDevices& operator=(UsbBusDevices&& rhs) noexcept;

  // Populates a UsbBusDevices object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UsbBusDevices& out);

  // Populates a UsbBusDevices object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, UsbBusDevices& out);

  // Creates a deep copy of UsbBusDevices.
  UsbBusDevices Clone() const;

  // Creates a UsbBusDevices object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<UsbBusDevices> FromValue(const base::Value::Dict& value);

  // Creates a UsbBusDevices object from a base::Value, or nullopt on failure.
  static std::optional<UsbBusDevices> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisUsbBusDevices object.
  base::Value::Dict ToValue() const;

  std::vector<UsbBusInfo> devices;

};

struct VpdInfo {
  VpdInfo();
  ~VpdInfo();
  VpdInfo(const VpdInfo&) = delete;
  VpdInfo& operator=(const VpdInfo&) = delete;
  VpdInfo(VpdInfo&& rhs) noexcept;
  VpdInfo& operator=(VpdInfo&& rhs) noexcept;

  // Populates a VpdInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, VpdInfo& out);

  // Populates a VpdInfo object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, VpdInfo& out);

  // Creates a deep copy of VpdInfo.
  VpdInfo Clone() const;

  // Creates a VpdInfo object from a base::Value::Dict, or nullopt on failure.
  static std::optional<VpdInfo> FromValue(const base::Value::Dict& value);

  // Creates a VpdInfo object from a base::Value, or nullopt on failure.
  static std::optional<VpdInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisVpdInfo object.
  base::Value::Dict ToValue() const;

  // Device activate date. Format: YYYY-WW.
  std::optional<std::string> activate_date;

  // Device model name.
  std::optional<std::string> model_name;

  // Device serial number.
  std::optional<std::string> serial_number;

  // Device SKU number, a.k.a. model number.
  std::optional<std::string> sku_number;

};

struct StatefulPartitionInfo {
  StatefulPartitionInfo();
  ~StatefulPartitionInfo();
  StatefulPartitionInfo(const StatefulPartitionInfo&) = delete;
  StatefulPartitionInfo& operator=(const StatefulPartitionInfo&) = delete;
  StatefulPartitionInfo(StatefulPartitionInfo&& rhs) noexcept;
  StatefulPartitionInfo& operator=(StatefulPartitionInfo&& rhs) noexcept;

  // Populates a StatefulPartitionInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, StatefulPartitionInfo& out);

  // Populates a StatefulPartitionInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, StatefulPartitionInfo& out);

  // Creates a deep copy of StatefulPartitionInfo.
  StatefulPartitionInfo Clone() const;

  // Creates a StatefulPartitionInfo object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<StatefulPartitionInfo> FromValue(const base::Value::Dict& value);

  // Creates a StatefulPartitionInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<StatefulPartitionInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisStatefulPartitionInfo object.
  base::Value::Dict ToValue() const;

  std::optional<double> available_space;

  std::optional<double> total_space;

};

enum class TpmGSCVersion {
  kNone = 0,
  kNotGsc,
  kCr50,
  kTi50,
  kMaxValue = kTi50,
};


const char* ToString(TpmGSCVersion as_enum);
TpmGSCVersion ParseTpmGSCVersion(base::StringPiece as_string);
std::u16string GetTpmGSCVersionParseError(base::StringPiece as_string);

struct TpmVersion {
  TpmVersion();
  ~TpmVersion();
  TpmVersion(const TpmVersion&) = delete;
  TpmVersion& operator=(const TpmVersion&) = delete;
  TpmVersion(TpmVersion&& rhs) noexcept;
  TpmVersion& operator=(TpmVersion&& rhs) noexcept;

  // Populates a TpmVersion object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, TpmVersion& out);

  // Populates a TpmVersion object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, TpmVersion& out);

  // Creates a deep copy of TpmVersion.
  TpmVersion Clone() const;

  // Creates a TpmVersion object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<TpmVersion> FromValue(const base::Value::Dict& value);

  // Creates a TpmVersion object from a base::Value, or nullopt on failure.
  static std::optional<TpmVersion> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTpmVersion object.
  base::Value::Dict ToValue() const;

  // GSC version.
  TpmGSCVersion gsc_version;

  // TPM family. We use the TPM 2.0 style encoding, e.g.:  * TPM 1.2: "1.2" ->
  // 0x312e3200  * TPM 2.0: "2.0" -> 0x322e3000
  std::optional<int> family;

  // TPM spec level.
  std::optional<double> spec_level;

  // Manufacturer code.
  std::optional<int> manufacturer;

  // TPM model number.
  std::optional<int> tpm_model;

  // Firmware version.
  std::optional<double> firmware_version;

  // Vendor specific information.
  std::optional<std::string> vendor_specific;

};

struct TpmStatus {
  TpmStatus();
  ~TpmStatus();
  TpmStatus(const TpmStatus&) = delete;
  TpmStatus& operator=(const TpmStatus&) = delete;
  TpmStatus(TpmStatus&& rhs) noexcept;
  TpmStatus& operator=(TpmStatus&& rhs) noexcept;

  // Populates a TpmStatus object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, TpmStatus& out);

  // Populates a TpmStatus object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, TpmStatus& out);

  // Creates a deep copy of TpmStatus.
  TpmStatus Clone() const;

  // Creates a TpmStatus object from a base::Value::Dict, or nullopt on failure.
  static std::optional<TpmStatus> FromValue(const base::Value::Dict& value);

  // Creates a TpmStatus object from a base::Value, or nullopt on failure.
  static std::optional<TpmStatus> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTpmStatus object.
  base::Value::Dict ToValue() const;

  // Whether a TPM is enabled on the system.
  std::optional<bool> enabled;

  // Whether the TPM has been owned.
  std::optional<bool> owned;

  // Whether the owner password is still retained.
  std::optional<bool> owner_password_is_present;

};

struct TpmDictionaryAttack {
  TpmDictionaryAttack();
  ~TpmDictionaryAttack();
  TpmDictionaryAttack(const TpmDictionaryAttack&) = delete;
  TpmDictionaryAttack& operator=(const TpmDictionaryAttack&) = delete;
  TpmDictionaryAttack(TpmDictionaryAttack&& rhs) noexcept;
  TpmDictionaryAttack& operator=(TpmDictionaryAttack&& rhs) noexcept;

  // Populates a TpmDictionaryAttack object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, TpmDictionaryAttack& out);

  // Populates a TpmDictionaryAttack object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, TpmDictionaryAttack& out);

  // Creates a deep copy of TpmDictionaryAttack.
  TpmDictionaryAttack Clone() const;

  // Creates a TpmDictionaryAttack object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<TpmDictionaryAttack> FromValue(const base::Value::Dict& value);

  // Creates a TpmDictionaryAttack object from a base::Value, or nullopt on
  // failure.
  static std::optional<TpmDictionaryAttack> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTpmDictionaryAttack object.
  base::Value::Dict ToValue() const;

  // The current dictionary attack counter value.
  std::optional<int> counter;

  // The current dictionary attack counter threshold.
  std::optional<int> threshold;

  // Whether the TPM is in some form of dictionary attack lockout.
  std::optional<bool> lockout_in_effect;

  // The number of seconds remaining in the lockout.
  std::optional<int> lockout_seconds_remaining;

};

struct TpmInfo {
  TpmInfo();
  ~TpmInfo();
  TpmInfo(const TpmInfo&) = delete;
  TpmInfo& operator=(const TpmInfo&) = delete;
  TpmInfo(TpmInfo&& rhs) noexcept;
  TpmInfo& operator=(TpmInfo&& rhs) noexcept;

  // Populates a TpmInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, TpmInfo& out);

  // Populates a TpmInfo object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, TpmInfo& out);

  // Creates a deep copy of TpmInfo.
  TpmInfo Clone() const;

  // Creates a TpmInfo object from a base::Value::Dict, or nullopt on failure.
  static std::optional<TpmInfo> FromValue(const base::Value::Dict& value);

  // Creates a TpmInfo object from a base::Value, or nullopt on failure.
  static std::optional<TpmInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTpmInfo object.
  base::Value::Dict ToValue() const;

  // TPM version related information.
  TpmVersion version;

  // TPM status related information.
  TpmStatus status;

  // TPM dictionary attack (DA) related information.
  TpmDictionaryAttack dictionary_attack;

};


//
// Functions
//

namespace GetAudioInfo {

namespace Results {

base::Value::List Create(const AudioInfo& audio_info);
}  // namespace Results

}  // namespace GetAudioInfo

namespace GetBatteryInfo {

namespace Results {

base::Value::List Create(const BatteryInfo& battery_info);
}  // namespace Results

}  // namespace GetBatteryInfo

namespace GetNonRemovableBlockDevicesInfo {

namespace Results {

base::Value::List Create(const NonRemovableBlockDeviceInfoResponse& device_info_response);
}  // namespace Results

}  // namespace GetNonRemovableBlockDevicesInfo

namespace GetCpuInfo {

namespace Results {

base::Value::List Create(const CpuInfo& cpu_info);
}  // namespace Results

}  // namespace GetCpuInfo

namespace GetInternetConnectivityInfo {

namespace Results {

base::Value::List Create(const InternetConnectivityInfo& network_info);
}  // namespace Results

}  // namespace GetInternetConnectivityInfo

namespace GetMarketingInfo {

namespace Results {

base::Value::List Create(const MarketingInfo& marketing_info);
}  // namespace Results

}  // namespace GetMarketingInfo

namespace GetMemoryInfo {

namespace Results {

base::Value::List Create(const MemoryInfo& cpu_info);
}  // namespace Results

}  // namespace GetMemoryInfo

namespace GetOemData {

namespace Results {

base::Value::List Create(const OemData& oem_data);
}  // namespace Results

}  // namespace GetOemData

namespace GetOsVersionInfo {

namespace Results {

base::Value::List Create(const OsVersionInfo& os_version_info);
}  // namespace Results

}  // namespace GetOsVersionInfo

namespace GetUsbBusInfo {

namespace Results {

base::Value::List Create(const UsbBusDevices& usb_bus_devices);
}  // namespace Results

}  // namespace GetUsbBusInfo

namespace GetVpdInfo {

namespace Results {

base::Value::List Create(const VpdInfo& vpd_info);
}  // namespace Results

}  // namespace GetVpdInfo

namespace GetStatefulPartitionInfo {

namespace Results {

base::Value::List Create(const StatefulPartitionInfo& stateful_partition_info);
}  // namespace Results

}  // namespace GetStatefulPartitionInfo

namespace GetTpmInfo {

namespace Results {

base::Value::List Create(const TpmInfo& tpm_info);
}  // namespace Results

}  // namespace GetTpmInfo

namespace GetDisplayInfo {

namespace Results {

base::Value::List Create(const DisplayInfo& display_info);
}  // namespace Results

}  // namespace GetDisplayInfo

}  // namespace os_telemetry
}  // namespace api
}  // namespace chromeos

#endif  // CHROME_COMMON_CHROMEOS_EXTENSIONS_API_TELEMETRY_H__
