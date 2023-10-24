// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/chromeos/extensions/api/diagnostics.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_CHROMEOS_EXTENSIONS_API_DIAGNOSTICS_H__
#define CHROME_COMMON_CHROMEOS_EXTENSIONS_API_DIAGNOSTICS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace chromeos {
namespace api {
namespace os_diagnostics {

//
// Types
//

// ----------------- DIAGNOSTICS API V1 -----------------
enum class RoutineType {
  kNone = 0,
  kAcPower,
  kBatteryCapacity,
  kBatteryCharge,
  kBatteryDischarge,
  kBatteryHealth,
  kCpuCache,
  kCpuFloatingPointAccuracy,
  kCpuPrimeSearch,
  kCpuStress,
  kDiskRead,
  kDnsResolution,
  kMemory,
  kNvmeWearLevel,
  kSmartctlCheck,
  kLanConnectivity,
  kSignalStrength,
  kDnsResolverPresent,
  kGatewayCanBePinged,
  kSensitiveSensor,
  kNvmeSelfTest,
  kFingerprintAlive,
  kSmartctlCheckWithPercentageUsed,
  kEmmcLifetime,
  kBluetoothPower,
  kUfsLifetime,
  kPowerButton,
  kAudioDriver,
  kBluetoothDiscovery,
  kBluetoothScanning,
  kBluetoothPairing,
  kFan,
  kMaxValue = kFan,
};


const char* ToString(RoutineType as_enum);
RoutineType ParseRoutineType(base::StringPiece as_string);
std::u16string GetRoutineTypeParseError(base::StringPiece as_string);

enum class RoutineStatus {
  kNone = 0,
  kUnknown,
  kReady,
  kRunning,
  kWaitingUserAction,
  kPassed,
  kFailed,
  kError,
  kCancelled,
  kFailedToStart,
  kRemoved,
  kCancelling,
  kUnsupported,
  kNotRun,
  kMaxValue = kNotRun,
};


const char* ToString(RoutineStatus as_enum);
RoutineStatus ParseRoutineStatus(base::StringPiece as_string);
std::u16string GetRoutineStatusParseError(base::StringPiece as_string);

enum class RoutineCommandType {
  kNone = 0,
  kCancel,
  kRemove,
  kResume,
  kStatus,
  kMaxValue = kStatus,
};


const char* ToString(RoutineCommandType as_enum);
RoutineCommandType ParseRoutineCommandType(base::StringPiece as_string);
std::u16string GetRoutineCommandTypeParseError(base::StringPiece as_string);

enum class UserMessageType {
  kNone = 0,
  kUnknown,
  kUnplugAcPower,
  kPlugInAcPower,
  kPressPowerButton,
  kMaxValue = kPressPowerButton,
};


const char* ToString(UserMessageType as_enum);
UserMessageType ParseUserMessageType(base::StringPiece as_string);
std::u16string GetUserMessageTypeParseError(base::StringPiece as_string);

enum class DiskReadRoutineType {
  kNone = 0,
  kLinear,
  kRandom,
  kMaxValue = kRandom,
};


const char* ToString(DiskReadRoutineType as_enum);
DiskReadRoutineType ParseDiskReadRoutineType(base::StringPiece as_string);
std::u16string GetDiskReadRoutineTypeParseError(base::StringPiece as_string);

enum class AcPowerStatus {
  kNone = 0,
  kConnected,
  kDisconnected,
  kMaxValue = kDisconnected,
};


const char* ToString(AcPowerStatus as_enum);
AcPowerStatus ParseAcPowerStatus(base::StringPiece as_string);
std::u16string GetAcPowerStatusParseError(base::StringPiece as_string);

struct GetAvailableRoutinesResponse {
  GetAvailableRoutinesResponse();
  ~GetAvailableRoutinesResponse();
  GetAvailableRoutinesResponse(const GetAvailableRoutinesResponse&) = delete;
  GetAvailableRoutinesResponse& operator=(const GetAvailableRoutinesResponse&) = delete;
  GetAvailableRoutinesResponse(GetAvailableRoutinesResponse&& rhs);
  GetAvailableRoutinesResponse& operator=(GetAvailableRoutinesResponse&& rhs);

  // Populates a GetAvailableRoutinesResponse object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetAvailableRoutinesResponse& out);

  // Populates a GetAvailableRoutinesResponse object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetAvailableRoutinesResponse& out);

  // Creates a deep copy of GetAvailableRoutinesResponse.
  GetAvailableRoutinesResponse Clone() const;

  // Creates a GetAvailableRoutinesResponse object from a base::Value, or NULL
  // on failure.
  static std::unique_ptr<GetAvailableRoutinesResponse> FromValueDeprecated(const base::Value& value);

  // Creates a GetAvailableRoutinesResponse object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<GetAvailableRoutinesResponse> FromValue(const base::Value::Dict& value);

  // Creates a GetAvailableRoutinesResponse object from a base::Value, or
  // nullopt on failure.
  static absl::optional<GetAvailableRoutinesResponse> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetAvailableRoutinesResponse object.
  base::Value::Dict ToValue() const;

  std::vector<RoutineType> routines;

};

struct GetRoutineUpdateRequest {
  GetRoutineUpdateRequest();
  ~GetRoutineUpdateRequest();
  GetRoutineUpdateRequest(const GetRoutineUpdateRequest&) = delete;
  GetRoutineUpdateRequest& operator=(const GetRoutineUpdateRequest&) = delete;
  GetRoutineUpdateRequest(GetRoutineUpdateRequest&& rhs);
  GetRoutineUpdateRequest& operator=(GetRoutineUpdateRequest&& rhs);

  // Populates a GetRoutineUpdateRequest object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetRoutineUpdateRequest& out);

  // Populates a GetRoutineUpdateRequest object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetRoutineUpdateRequest& out);

  // Creates a deep copy of GetRoutineUpdateRequest.
  GetRoutineUpdateRequest Clone() const;

  // Creates a GetRoutineUpdateRequest object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<GetRoutineUpdateRequest> FromValueDeprecated(const base::Value& value);

  // Creates a GetRoutineUpdateRequest object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<GetRoutineUpdateRequest> FromValue(const base::Value::Dict& value);

  // Creates a GetRoutineUpdateRequest object from a base::Value, or nullopt on
  // failure.
  static absl::optional<GetRoutineUpdateRequest> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetRoutineUpdateRequest object.
  base::Value::Dict ToValue() const;

  int id;

  RoutineCommandType command;

};

struct GetRoutineUpdateResponse {
  GetRoutineUpdateResponse();
  ~GetRoutineUpdateResponse();
  GetRoutineUpdateResponse(const GetRoutineUpdateResponse&) = delete;
  GetRoutineUpdateResponse& operator=(const GetRoutineUpdateResponse&) = delete;
  GetRoutineUpdateResponse(GetRoutineUpdateResponse&& rhs);
  GetRoutineUpdateResponse& operator=(GetRoutineUpdateResponse&& rhs);

  // Populates a GetRoutineUpdateResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetRoutineUpdateResponse& out);

  // Populates a GetRoutineUpdateResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetRoutineUpdateResponse& out);

  // Creates a deep copy of GetRoutineUpdateResponse.
  GetRoutineUpdateResponse Clone() const;

  // Creates a GetRoutineUpdateResponse object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<GetRoutineUpdateResponse> FromValueDeprecated(const base::Value& value);

  // Creates a GetRoutineUpdateResponse object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<GetRoutineUpdateResponse> FromValue(const base::Value::Dict& value);

  // Creates a GetRoutineUpdateResponse object from a base::Value, or nullopt on
  // failure.
  static absl::optional<GetRoutineUpdateResponse> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetRoutineUpdateResponse object.
  base::Value::Dict ToValue() const;

  int progress_percent;

  absl::optional<std::string> output;

  RoutineStatus status;

  std::string status_message;

  // Returned for routines that require user action (e.g. unplug power cable).
  UserMessageType user_message;

};

struct RunAcPowerRoutineRequest {
  RunAcPowerRoutineRequest();
  ~RunAcPowerRoutineRequest();
  RunAcPowerRoutineRequest(const RunAcPowerRoutineRequest&) = delete;
  RunAcPowerRoutineRequest& operator=(const RunAcPowerRoutineRequest&) = delete;
  RunAcPowerRoutineRequest(RunAcPowerRoutineRequest&& rhs);
  RunAcPowerRoutineRequest& operator=(RunAcPowerRoutineRequest&& rhs);

  // Populates a RunAcPowerRoutineRequest object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RunAcPowerRoutineRequest& out);

  // Populates a RunAcPowerRoutineRequest object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RunAcPowerRoutineRequest& out);

  // Creates a deep copy of RunAcPowerRoutineRequest.
  RunAcPowerRoutineRequest Clone() const;

  // Creates a RunAcPowerRoutineRequest object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<RunAcPowerRoutineRequest> FromValueDeprecated(const base::Value& value);

  // Creates a RunAcPowerRoutineRequest object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<RunAcPowerRoutineRequest> FromValue(const base::Value::Dict& value);

  // Creates a RunAcPowerRoutineRequest object from a base::Value, or nullopt on
  // failure.
  static absl::optional<RunAcPowerRoutineRequest> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRunAcPowerRoutineRequest object.
  base::Value::Dict ToValue() const;

  AcPowerStatus expected_status;

  // If specified, this must match the type of power supply for the routine to
  // succeed.
  absl::optional<std::string> expected_power_type;

};

struct RunBatteryChargeRoutineRequest {
  RunBatteryChargeRoutineRequest();
  ~RunBatteryChargeRoutineRequest();
  RunBatteryChargeRoutineRequest(const RunBatteryChargeRoutineRequest&) = delete;
  RunBatteryChargeRoutineRequest& operator=(const RunBatteryChargeRoutineRequest&) = delete;
  RunBatteryChargeRoutineRequest(RunBatteryChargeRoutineRequest&& rhs);
  RunBatteryChargeRoutineRequest& operator=(RunBatteryChargeRoutineRequest&& rhs);

  // Populates a RunBatteryChargeRoutineRequest object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RunBatteryChargeRoutineRequest& out);

  // Populates a RunBatteryChargeRoutineRequest object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RunBatteryChargeRoutineRequest& out);

  // Creates a deep copy of RunBatteryChargeRoutineRequest.
  RunBatteryChargeRoutineRequest Clone() const;

  // Creates a RunBatteryChargeRoutineRequest object from a base::Value, or NULL
  // on failure.
  static std::unique_ptr<RunBatteryChargeRoutineRequest> FromValueDeprecated(const base::Value& value);

  // Creates a RunBatteryChargeRoutineRequest object from a base::Value::Dict,
  // or nullopt on failure.
  static absl::optional<RunBatteryChargeRoutineRequest> FromValue(const base::Value::Dict& value);

  // Creates a RunBatteryChargeRoutineRequest object from a base::Value, or
  // nullopt on failure.
  static absl::optional<RunBatteryChargeRoutineRequest> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRunBatteryChargeRoutineRequest object.
  base::Value::Dict ToValue() const;

  int length_seconds;

  int minimum_charge_percent_required;

};

struct RunBatteryDischargeRoutineRequest {
  RunBatteryDischargeRoutineRequest();
  ~RunBatteryDischargeRoutineRequest();
  RunBatteryDischargeRoutineRequest(const RunBatteryDischargeRoutineRequest&) = delete;
  RunBatteryDischargeRoutineRequest& operator=(const RunBatteryDischargeRoutineRequest&) = delete;
  RunBatteryDischargeRoutineRequest(RunBatteryDischargeRoutineRequest&& rhs);
  RunBatteryDischargeRoutineRequest& operator=(RunBatteryDischargeRoutineRequest&& rhs);

  // Populates a RunBatteryDischargeRoutineRequest object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RunBatteryDischargeRoutineRequest& out);

  // Populates a RunBatteryDischargeRoutineRequest object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RunBatteryDischargeRoutineRequest& out);

  // Creates a deep copy of RunBatteryDischargeRoutineRequest.
  RunBatteryDischargeRoutineRequest Clone() const;

  // Creates a RunBatteryDischargeRoutineRequest object from a base::Value, or
  // NULL on failure.
  static std::unique_ptr<RunBatteryDischargeRoutineRequest> FromValueDeprecated(const base::Value& value);

  // Creates a RunBatteryDischargeRoutineRequest object from a
  // base::Value::Dict, or nullopt on failure.
  static absl::optional<RunBatteryDischargeRoutineRequest> FromValue(const base::Value::Dict& value);

  // Creates a RunBatteryDischargeRoutineRequest object from a base::Value, or
  // nullopt on failure.
  static absl::optional<RunBatteryDischargeRoutineRequest> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRunBatteryDischargeRoutineRequest object.
  base::Value::Dict ToValue() const;

  int length_seconds;

  int maximum_discharge_percent_allowed;

};

struct RunBluetoothPairingRoutineRequest {
  RunBluetoothPairingRoutineRequest();
  ~RunBluetoothPairingRoutineRequest();
  RunBluetoothPairingRoutineRequest(const RunBluetoothPairingRoutineRequest&) = delete;
  RunBluetoothPairingRoutineRequest& operator=(const RunBluetoothPairingRoutineRequest&) = delete;
  RunBluetoothPairingRoutineRequest(RunBluetoothPairingRoutineRequest&& rhs);
  RunBluetoothPairingRoutineRequest& operator=(RunBluetoothPairingRoutineRequest&& rhs);

  // Populates a RunBluetoothPairingRoutineRequest object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RunBluetoothPairingRoutineRequest& out);

  // Populates a RunBluetoothPairingRoutineRequest object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RunBluetoothPairingRoutineRequest& out);

  // Creates a deep copy of RunBluetoothPairingRoutineRequest.
  RunBluetoothPairingRoutineRequest Clone() const;

  // Creates a RunBluetoothPairingRoutineRequest object from a base::Value, or
  // NULL on failure.
  static std::unique_ptr<RunBluetoothPairingRoutineRequest> FromValueDeprecated(const base::Value& value);

  // Creates a RunBluetoothPairingRoutineRequest object from a
  // base::Value::Dict, or nullopt on failure.
  static absl::optional<RunBluetoothPairingRoutineRequest> FromValue(const base::Value::Dict& value);

  // Creates a RunBluetoothPairingRoutineRequest object from a base::Value, or
  // nullopt on failure.
  static absl::optional<RunBluetoothPairingRoutineRequest> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRunBluetoothPairingRoutineRequest object.
  base::Value::Dict ToValue() const;

  std::string peripheral_id;

};

struct RunBluetoothScanningRoutineRequest {
  RunBluetoothScanningRoutineRequest();
  ~RunBluetoothScanningRoutineRequest();
  RunBluetoothScanningRoutineRequest(const RunBluetoothScanningRoutineRequest&) = delete;
  RunBluetoothScanningRoutineRequest& operator=(const RunBluetoothScanningRoutineRequest&) = delete;
  RunBluetoothScanningRoutineRequest(RunBluetoothScanningRoutineRequest&& rhs);
  RunBluetoothScanningRoutineRequest& operator=(RunBluetoothScanningRoutineRequest&& rhs);

  // Populates a RunBluetoothScanningRoutineRequest object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RunBluetoothScanningRoutineRequest& out);

  // Populates a RunBluetoothScanningRoutineRequest object from a Dict&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RunBluetoothScanningRoutineRequest& out);

  // Creates a deep copy of RunBluetoothScanningRoutineRequest.
  RunBluetoothScanningRoutineRequest Clone() const;

  // Creates a RunBluetoothScanningRoutineRequest object from a base::Value, or
  // NULL on failure.
  static std::unique_ptr<RunBluetoothScanningRoutineRequest> FromValueDeprecated(const base::Value& value);

  // Creates a RunBluetoothScanningRoutineRequest object from a
  // base::Value::Dict, or nullopt on failure.
  static absl::optional<RunBluetoothScanningRoutineRequest> FromValue(const base::Value::Dict& value);

  // Creates a RunBluetoothScanningRoutineRequest object from a base::Value, or
  // nullopt on failure.
  static absl::optional<RunBluetoothScanningRoutineRequest> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRunBluetoothScanningRoutineRequest object.
  base::Value::Dict ToValue() const;

  int length_seconds;

};

struct RunCpuRoutineRequest {
  RunCpuRoutineRequest();
  ~RunCpuRoutineRequest();
  RunCpuRoutineRequest(const RunCpuRoutineRequest&) = delete;
  RunCpuRoutineRequest& operator=(const RunCpuRoutineRequest&) = delete;
  RunCpuRoutineRequest(RunCpuRoutineRequest&& rhs);
  RunCpuRoutineRequest& operator=(RunCpuRoutineRequest&& rhs);

  // Populates a RunCpuRoutineRequest object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RunCpuRoutineRequest& out);

  // Populates a RunCpuRoutineRequest object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RunCpuRoutineRequest& out);

  // Creates a deep copy of RunCpuRoutineRequest.
  RunCpuRoutineRequest Clone() const;

  // Creates a RunCpuRoutineRequest object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<RunCpuRoutineRequest> FromValueDeprecated(const base::Value& value);

  // Creates a RunCpuRoutineRequest object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<RunCpuRoutineRequest> FromValue(const base::Value::Dict& value);

  // Creates a RunCpuRoutineRequest object from a base::Value, or nullopt on
  // failure.
  static absl::optional<RunCpuRoutineRequest> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRunCpuRoutineRequest object.
  base::Value::Dict ToValue() const;

  int length_seconds;

};

struct RunDiskReadRequest {
  RunDiskReadRequest();
  ~RunDiskReadRequest();
  RunDiskReadRequest(const RunDiskReadRequest&) = delete;
  RunDiskReadRequest& operator=(const RunDiskReadRequest&) = delete;
  RunDiskReadRequest(RunDiskReadRequest&& rhs);
  RunDiskReadRequest& operator=(RunDiskReadRequest&& rhs);

  // Populates a RunDiskReadRequest object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RunDiskReadRequest& out);

  // Populates a RunDiskReadRequest object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RunDiskReadRequest& out);

  // Creates a deep copy of RunDiskReadRequest.
  RunDiskReadRequest Clone() const;

  // Creates a RunDiskReadRequest object from a base::Value, or NULL on failure.
  static std::unique_ptr<RunDiskReadRequest> FromValueDeprecated(const base::Value& value);

  // Creates a RunDiskReadRequest object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<RunDiskReadRequest> FromValue(const base::Value::Dict& value);

  // Creates a RunDiskReadRequest object from a base::Value, or nullopt on
  // failure.
  static absl::optional<RunDiskReadRequest> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRunDiskReadRequest object.
  base::Value::Dict ToValue() const;

  DiskReadRoutineType type;

  int length_seconds;

  int file_size_mb;

};

enum class NvmeSelfTestType {
  kNone = 0,
  kShortTest,
  kLongTest,
  kMaxValue = kLongTest,
};


const char* ToString(NvmeSelfTestType as_enum);
NvmeSelfTestType ParseNvmeSelfTestType(base::StringPiece as_string);
std::u16string GetNvmeSelfTestTypeParseError(base::StringPiece as_string);

struct RunNvmeSelfTestRequest {
  RunNvmeSelfTestRequest();
  ~RunNvmeSelfTestRequest();
  RunNvmeSelfTestRequest(const RunNvmeSelfTestRequest&) = delete;
  RunNvmeSelfTestRequest& operator=(const RunNvmeSelfTestRequest&) = delete;
  RunNvmeSelfTestRequest(RunNvmeSelfTestRequest&& rhs);
  RunNvmeSelfTestRequest& operator=(RunNvmeSelfTestRequest&& rhs);

  // Populates a RunNvmeSelfTestRequest object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RunNvmeSelfTestRequest& out);

  // Populates a RunNvmeSelfTestRequest object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RunNvmeSelfTestRequest& out);

  // Creates a deep copy of RunNvmeSelfTestRequest.
  RunNvmeSelfTestRequest Clone() const;

  // Creates a RunNvmeSelfTestRequest object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<RunNvmeSelfTestRequest> FromValueDeprecated(const base::Value& value);

  // Creates a RunNvmeSelfTestRequest object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<RunNvmeSelfTestRequest> FromValue(const base::Value::Dict& value);

  // Creates a RunNvmeSelfTestRequest object from a base::Value, or nullopt on
  // failure.
  static absl::optional<RunNvmeSelfTestRequest> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRunNvmeSelfTestRequest object.
  base::Value::Dict ToValue() const;

  NvmeSelfTestType test_type;

};

struct RunNvmeWearLevelRequest {
  RunNvmeWearLevelRequest();
  ~RunNvmeWearLevelRequest();
  RunNvmeWearLevelRequest(const RunNvmeWearLevelRequest&) = delete;
  RunNvmeWearLevelRequest& operator=(const RunNvmeWearLevelRequest&) = delete;
  RunNvmeWearLevelRequest(RunNvmeWearLevelRequest&& rhs);
  RunNvmeWearLevelRequest& operator=(RunNvmeWearLevelRequest&& rhs);

  // Populates a RunNvmeWearLevelRequest object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RunNvmeWearLevelRequest& out);

  // Populates a RunNvmeWearLevelRequest object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RunNvmeWearLevelRequest& out);

  // Creates a deep copy of RunNvmeWearLevelRequest.
  RunNvmeWearLevelRequest Clone() const;

  // Creates a RunNvmeWearLevelRequest object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<RunNvmeWearLevelRequest> FromValueDeprecated(const base::Value& value);

  // Creates a RunNvmeWearLevelRequest object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<RunNvmeWearLevelRequest> FromValue(const base::Value::Dict& value);

  // Creates a RunNvmeWearLevelRequest object from a base::Value, or nullopt on
  // failure.
  static absl::optional<RunNvmeWearLevelRequest> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRunNvmeWearLevelRequest object.
  base::Value::Dict ToValue() const;

  int wear_level_threshold;

};

struct RunSmartctlCheckRequest {
  RunSmartctlCheckRequest();
  ~RunSmartctlCheckRequest();
  RunSmartctlCheckRequest(const RunSmartctlCheckRequest&) = delete;
  RunSmartctlCheckRequest& operator=(const RunSmartctlCheckRequest&) = delete;
  RunSmartctlCheckRequest(RunSmartctlCheckRequest&& rhs);
  RunSmartctlCheckRequest& operator=(RunSmartctlCheckRequest&& rhs);

  // Populates a RunSmartctlCheckRequest object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RunSmartctlCheckRequest& out);

  // Populates a RunSmartctlCheckRequest object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RunSmartctlCheckRequest& out);

  // Creates a deep copy of RunSmartctlCheckRequest.
  RunSmartctlCheckRequest Clone() const;

  // Creates a RunSmartctlCheckRequest object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<RunSmartctlCheckRequest> FromValueDeprecated(const base::Value& value);

  // Creates a RunSmartctlCheckRequest object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<RunSmartctlCheckRequest> FromValue(const base::Value::Dict& value);

  // Creates a RunSmartctlCheckRequest object from a base::Value, or nullopt on
  // failure.
  static absl::optional<RunSmartctlCheckRequest> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRunSmartctlCheckRequest object.
  base::Value::Dict ToValue() const;

  absl::optional<int> percentage_used_threshold;

};

struct RunPowerButtonRequest {
  RunPowerButtonRequest();
  ~RunPowerButtonRequest();
  RunPowerButtonRequest(const RunPowerButtonRequest&) = delete;
  RunPowerButtonRequest& operator=(const RunPowerButtonRequest&) = delete;
  RunPowerButtonRequest(RunPowerButtonRequest&& rhs);
  RunPowerButtonRequest& operator=(RunPowerButtonRequest&& rhs);

  // Populates a RunPowerButtonRequest object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RunPowerButtonRequest& out);

  // Populates a RunPowerButtonRequest object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RunPowerButtonRequest& out);

  // Creates a deep copy of RunPowerButtonRequest.
  RunPowerButtonRequest Clone() const;

  // Creates a RunPowerButtonRequest object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<RunPowerButtonRequest> FromValueDeprecated(const base::Value& value);

  // Creates a RunPowerButtonRequest object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<RunPowerButtonRequest> FromValue(const base::Value::Dict& value);

  // Creates a RunPowerButtonRequest object from a base::Value, or nullopt on
  // failure.
  static absl::optional<RunPowerButtonRequest> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRunPowerButtonRequest object.
  base::Value::Dict ToValue() const;

  int timeout_seconds;

};

struct RunRoutineResponse {
  RunRoutineResponse();
  ~RunRoutineResponse();
  RunRoutineResponse(const RunRoutineResponse&) = delete;
  RunRoutineResponse& operator=(const RunRoutineResponse&) = delete;
  RunRoutineResponse(RunRoutineResponse&& rhs);
  RunRoutineResponse& operator=(RunRoutineResponse&& rhs);

  // Populates a RunRoutineResponse object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RunRoutineResponse& out);

  // Populates a RunRoutineResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RunRoutineResponse& out);

  // Creates a deep copy of RunRoutineResponse.
  RunRoutineResponse Clone() const;

  // Creates a RunRoutineResponse object from a base::Value, or NULL on failure.
  static std::unique_ptr<RunRoutineResponse> FromValueDeprecated(const base::Value& value);

  // Creates a RunRoutineResponse object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<RunRoutineResponse> FromValue(const base::Value::Dict& value);

  // Creates a RunRoutineResponse object from a base::Value, or nullopt on
  // failure.
  static absl::optional<RunRoutineResponse> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRunRoutineResponse object.
  base::Value::Dict ToValue() const;

  int id;

  RoutineStatus status;

};

struct RoutineInitializedInfo {
  RoutineInitializedInfo();
  ~RoutineInitializedInfo();
  RoutineInitializedInfo(const RoutineInitializedInfo&) = delete;
  RoutineInitializedInfo& operator=(const RoutineInitializedInfo&) = delete;
  RoutineInitializedInfo(RoutineInitializedInfo&& rhs);
  RoutineInitializedInfo& operator=(RoutineInitializedInfo&& rhs);

  // Populates a RoutineInitializedInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RoutineInitializedInfo& out);

  // Populates a RoutineInitializedInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RoutineInitializedInfo& out);

  // Creates a deep copy of RoutineInitializedInfo.
  RoutineInitializedInfo Clone() const;

  // Creates a RoutineInitializedInfo object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<RoutineInitializedInfo> FromValueDeprecated(const base::Value& value);

  // Creates a RoutineInitializedInfo object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<RoutineInitializedInfo> FromValue(const base::Value::Dict& value);

  // Creates a RoutineInitializedInfo object from a base::Value, or nullopt on
  // failure.
  static absl::optional<RoutineInitializedInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRoutineInitializedInfo object.
  base::Value::Dict ToValue() const;

  absl::optional<std::string> uuid;

};

struct RoutineRunningInfo {
  RoutineRunningInfo();
  ~RoutineRunningInfo();
  RoutineRunningInfo(const RoutineRunningInfo&) = delete;
  RoutineRunningInfo& operator=(const RoutineRunningInfo&) = delete;
  RoutineRunningInfo(RoutineRunningInfo&& rhs);
  RoutineRunningInfo& operator=(RoutineRunningInfo&& rhs);

  // Populates a RoutineRunningInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RoutineRunningInfo& out);

  // Populates a RoutineRunningInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RoutineRunningInfo& out);

  // Creates a deep copy of RoutineRunningInfo.
  RoutineRunningInfo Clone() const;

  // Creates a RoutineRunningInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<RoutineRunningInfo> FromValueDeprecated(const base::Value& value);

  // Creates a RoutineRunningInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<RoutineRunningInfo> FromValue(const base::Value::Dict& value);

  // Creates a RoutineRunningInfo object from a base::Value, or nullopt on
  // failure.
  static absl::optional<RoutineRunningInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRoutineRunningInfo object.
  base::Value::Dict ToValue() const;

  absl::optional<std::string> uuid;

  absl::optional<int> percentage;

};

enum class RoutineWaitingReason {
  kNone = 0,
  kWaitingToBeScheduled,
  kWaitingUserInput,
  kMaxValue = kWaitingUserInput,
};


const char* ToString(RoutineWaitingReason as_enum);
RoutineWaitingReason ParseRoutineWaitingReason(base::StringPiece as_string);
std::u16string GetRoutineWaitingReasonParseError(base::StringPiece as_string);

struct RoutineWaitingInfo {
  RoutineWaitingInfo();
  ~RoutineWaitingInfo();
  RoutineWaitingInfo(const RoutineWaitingInfo&) = delete;
  RoutineWaitingInfo& operator=(const RoutineWaitingInfo&) = delete;
  RoutineWaitingInfo(RoutineWaitingInfo&& rhs);
  RoutineWaitingInfo& operator=(RoutineWaitingInfo&& rhs);

  // Populates a RoutineWaitingInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RoutineWaitingInfo& out);

  // Populates a RoutineWaitingInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RoutineWaitingInfo& out);

  // Creates a deep copy of RoutineWaitingInfo.
  RoutineWaitingInfo Clone() const;

  // Creates a RoutineWaitingInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<RoutineWaitingInfo> FromValueDeprecated(const base::Value& value);

  // Creates a RoutineWaitingInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<RoutineWaitingInfo> FromValue(const base::Value::Dict& value);

  // Creates a RoutineWaitingInfo object from a base::Value, or nullopt on
  // failure.
  static absl::optional<RoutineWaitingInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRoutineWaitingInfo object.
  base::Value::Dict ToValue() const;

  absl::optional<std::string> uuid;

  absl::optional<int> percentage;

  // Reason why the routine waits.
  RoutineWaitingReason reason;

  // Additional information, may be used to pass instruction or explanation.
  absl::optional<std::string> message;

};

enum class ExceptionReason {
  kNone = 0,
  kUnknown,
  kUnexpected,
  kUnsupported,
  kAppUiClosed,
  kMaxValue = kAppUiClosed,
};


const char* ToString(ExceptionReason as_enum);
ExceptionReason ParseExceptionReason(base::StringPiece as_string);
std::u16string GetExceptionReasonParseError(base::StringPiece as_string);

struct ExceptionInfo {
  ExceptionInfo();
  ~ExceptionInfo();
  ExceptionInfo(const ExceptionInfo&) = delete;
  ExceptionInfo& operator=(const ExceptionInfo&) = delete;
  ExceptionInfo(ExceptionInfo&& rhs);
  ExceptionInfo& operator=(ExceptionInfo&& rhs);

  // Populates a ExceptionInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ExceptionInfo& out);

  // Populates a ExceptionInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ExceptionInfo& out);

  // Creates a deep copy of ExceptionInfo.
  ExceptionInfo Clone() const;

  // Creates a ExceptionInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<ExceptionInfo> FromValueDeprecated(const base::Value& value);

  // Creates a ExceptionInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ExceptionInfo> FromValue(const base::Value::Dict& value);

  // Creates a ExceptionInfo object from a base::Value, or nullopt on failure.
  static absl::optional<ExceptionInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisExceptionInfo object.
  base::Value::Dict ToValue() const;

  absl::optional<std::string> uuid;

  ExceptionReason reason;

  // A human readable message for debugging. Don't rely on the content because it
  // could change anytime.
  absl::optional<std::string> debug_message;

};

enum class MemtesterTestItemEnum {
  kNone = 0,
  kUnknown,
  kStuckAddress,
  kCompareAnd,
  kCompareDiv,
  kCompareMul,
  kCompareOr,
  kCompareSub,
  kCompareXor,
  kSequentialIncrement,
  kBitFlip,
  kBitSpread,
  kBlockSequential,
  kCheckerboard,
  kRandomValue,
  kSolidBits,
  kWalkingOnes,
  kWalkingZeroes,
  kEightBitWrites,
  kSixteenBitWrites,
  kMaxValue = kSixteenBitWrites,
};


const char* ToString(MemtesterTestItemEnum as_enum);
MemtesterTestItemEnum ParseMemtesterTestItemEnum(base::StringPiece as_string);
std::u16string GetMemtesterTestItemEnumParseError(base::StringPiece as_string);

struct MemtesterResult {
  MemtesterResult();
  ~MemtesterResult();
  MemtesterResult(const MemtesterResult&) = delete;
  MemtesterResult& operator=(const MemtesterResult&) = delete;
  MemtesterResult(MemtesterResult&& rhs);
  MemtesterResult& operator=(MemtesterResult&& rhs);

  // Populates a MemtesterResult object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MemtesterResult& out);

  // Populates a MemtesterResult object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, MemtesterResult& out);

  // Creates a deep copy of MemtesterResult.
  MemtesterResult Clone() const;

  // Creates a MemtesterResult object from a base::Value, or NULL on failure.
  static std::unique_ptr<MemtesterResult> FromValueDeprecated(const base::Value& value);

  // Creates a MemtesterResult object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<MemtesterResult> FromValue(const base::Value::Dict& value);

  // Creates a MemtesterResult object from a base::Value, or nullopt on failure.
  static absl::optional<MemtesterResult> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMemtesterResult object.
  base::Value::Dict ToValue() const;

  std::vector<MemtesterTestItemEnum> passed_items;

  std::vector<MemtesterTestItemEnum> failed_items;

};

struct MemoryRoutineFinishedInfo {
  MemoryRoutineFinishedInfo();
  ~MemoryRoutineFinishedInfo();
  MemoryRoutineFinishedInfo(const MemoryRoutineFinishedInfo&) = delete;
  MemoryRoutineFinishedInfo& operator=(const MemoryRoutineFinishedInfo&) = delete;
  MemoryRoutineFinishedInfo(MemoryRoutineFinishedInfo&& rhs);
  MemoryRoutineFinishedInfo& operator=(MemoryRoutineFinishedInfo&& rhs);

  // Populates a MemoryRoutineFinishedInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MemoryRoutineFinishedInfo& out);

  // Populates a MemoryRoutineFinishedInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, MemoryRoutineFinishedInfo& out);

  // Creates a deep copy of MemoryRoutineFinishedInfo.
  MemoryRoutineFinishedInfo Clone() const;

  // Creates a MemoryRoutineFinishedInfo object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<MemoryRoutineFinishedInfo> FromValueDeprecated(const base::Value& value);

  // Creates a MemoryRoutineFinishedInfo object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<MemoryRoutineFinishedInfo> FromValue(const base::Value::Dict& value);

  // Creates a MemoryRoutineFinishedInfo object from a base::Value, or nullopt
  // on failure.
  static absl::optional<MemoryRoutineFinishedInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMemoryRoutineFinishedInfo object.
  base::Value::Dict ToValue() const;

  absl::optional<std::string> uuid;

  absl::optional<bool> has_passed;

  // Number of bytes tested in the memory routine.
  absl::optional<double> bytes_tested;

  // Contains the memtester test results.
  absl::optional<MemtesterResult> result;

};

struct RunMemoryRoutineArguments {
  RunMemoryRoutineArguments();
  ~RunMemoryRoutineArguments();
  RunMemoryRoutineArguments(const RunMemoryRoutineArguments&) = delete;
  RunMemoryRoutineArguments& operator=(const RunMemoryRoutineArguments&) = delete;
  RunMemoryRoutineArguments(RunMemoryRoutineArguments&& rhs);
  RunMemoryRoutineArguments& operator=(RunMemoryRoutineArguments&& rhs);

  // Populates a RunMemoryRoutineArguments object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RunMemoryRoutineArguments& out);

  // Populates a RunMemoryRoutineArguments object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RunMemoryRoutineArguments& out);

  // Creates a deep copy of RunMemoryRoutineArguments.
  RunMemoryRoutineArguments Clone() const;

  // Creates a RunMemoryRoutineArguments object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<RunMemoryRoutineArguments> FromValueDeprecated(const base::Value& value);

  // Creates a RunMemoryRoutineArguments object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<RunMemoryRoutineArguments> FromValue(const base::Value::Dict& value);

  // Creates a RunMemoryRoutineArguments object from a base::Value, or nullopt
  // on failure.
  static absl::optional<RunMemoryRoutineArguments> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRunMemoryRoutineArguments object.
  base::Value::Dict ToValue() const;

  // An optional field to indicate how much memory should be tested. If the value
  // is null, memory test will run with as much memory as possible.
  absl::optional<int> max_testing_mem_kib;

};

struct CreateRoutineResponse {
  CreateRoutineResponse();
  ~CreateRoutineResponse();
  CreateRoutineResponse(const CreateRoutineResponse&) = delete;
  CreateRoutineResponse& operator=(const CreateRoutineResponse&) = delete;
  CreateRoutineResponse(CreateRoutineResponse&& rhs);
  CreateRoutineResponse& operator=(CreateRoutineResponse&& rhs);

  // Populates a CreateRoutineResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CreateRoutineResponse& out);

  // Populates a CreateRoutineResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CreateRoutineResponse& out);

  // Creates a deep copy of CreateRoutineResponse.
  CreateRoutineResponse Clone() const;

  // Creates a CreateRoutineResponse object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<CreateRoutineResponse> FromValueDeprecated(const base::Value& value);

  // Creates a CreateRoutineResponse object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<CreateRoutineResponse> FromValue(const base::Value::Dict& value);

  // Creates a CreateRoutineResponse object from a base::Value, or nullopt on
  // failure.
  static absl::optional<CreateRoutineResponse> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCreateRoutineResponse object.
  base::Value::Dict ToValue() const;

  absl::optional<std::string> uuid;

};

enum class RoutineSupportStatus {
  kNone = 0,
  kSupported,
  kUnsupported,
  kMaxValue = kUnsupported,
};


const char* ToString(RoutineSupportStatus as_enum);
RoutineSupportStatus ParseRoutineSupportStatus(base::StringPiece as_string);
std::u16string GetRoutineSupportStatusParseError(base::StringPiece as_string);

struct RoutineSupportStatusInfo {
  RoutineSupportStatusInfo();
  ~RoutineSupportStatusInfo();
  RoutineSupportStatusInfo(const RoutineSupportStatusInfo&) = delete;
  RoutineSupportStatusInfo& operator=(const RoutineSupportStatusInfo&) = delete;
  RoutineSupportStatusInfo(RoutineSupportStatusInfo&& rhs);
  RoutineSupportStatusInfo& operator=(RoutineSupportStatusInfo&& rhs);

  // Populates a RoutineSupportStatusInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RoutineSupportStatusInfo& out);

  // Populates a RoutineSupportStatusInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RoutineSupportStatusInfo& out);

  // Creates a deep copy of RoutineSupportStatusInfo.
  RoutineSupportStatusInfo Clone() const;

  // Creates a RoutineSupportStatusInfo object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<RoutineSupportStatusInfo> FromValueDeprecated(const base::Value& value);

  // Creates a RoutineSupportStatusInfo object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<RoutineSupportStatusInfo> FromValue(const base::Value::Dict& value);

  // Creates a RoutineSupportStatusInfo object from a base::Value, or nullopt on
  // failure.
  static absl::optional<RoutineSupportStatusInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRoutineSupportStatusInfo object.
  base::Value::Dict ToValue() const;

  RoutineSupportStatus status;

};

struct StartRoutineRequest {
  StartRoutineRequest();
  ~StartRoutineRequest();
  StartRoutineRequest(const StartRoutineRequest&) = delete;
  StartRoutineRequest& operator=(const StartRoutineRequest&) = delete;
  StartRoutineRequest(StartRoutineRequest&& rhs);
  StartRoutineRequest& operator=(StartRoutineRequest&& rhs);

  // Populates a StartRoutineRequest object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, StartRoutineRequest& out);

  // Populates a StartRoutineRequest object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, StartRoutineRequest& out);

  // Creates a deep copy of StartRoutineRequest.
  StartRoutineRequest Clone() const;

  // Creates a StartRoutineRequest object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<StartRoutineRequest> FromValueDeprecated(const base::Value& value);

  // Creates a StartRoutineRequest object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<StartRoutineRequest> FromValue(const base::Value::Dict& value);

  // Creates a StartRoutineRequest object from a base::Value, or nullopt on
  // failure.
  static absl::optional<StartRoutineRequest> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisStartRoutineRequest object.
  base::Value::Dict ToValue() const;

  std::string uuid;

};

struct CancelRoutineRequest {
  CancelRoutineRequest();
  ~CancelRoutineRequest();
  CancelRoutineRequest(const CancelRoutineRequest&) = delete;
  CancelRoutineRequest& operator=(const CancelRoutineRequest&) = delete;
  CancelRoutineRequest(CancelRoutineRequest&& rhs);
  CancelRoutineRequest& operator=(CancelRoutineRequest&& rhs);

  // Populates a CancelRoutineRequest object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CancelRoutineRequest& out);

  // Populates a CancelRoutineRequest object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CancelRoutineRequest& out);

  // Creates a deep copy of CancelRoutineRequest.
  CancelRoutineRequest Clone() const;

  // Creates a CancelRoutineRequest object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<CancelRoutineRequest> FromValueDeprecated(const base::Value& value);

  // Creates a CancelRoutineRequest object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<CancelRoutineRequest> FromValue(const base::Value::Dict& value);

  // Creates a CancelRoutineRequest object from a base::Value, or nullopt on
  // failure.
  static absl::optional<CancelRoutineRequest> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCancelRoutineRequest object.
  base::Value::Dict ToValue() const;

  std::string uuid;

};


//
// Functions
//

namespace GetAvailableRoutines {

namespace Results {

base::Value::List Create(const GetAvailableRoutinesResponse& response);
}  // namespace Results

}  // namespace GetAvailableRoutines

namespace GetRoutineUpdate {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  GetRoutineUpdateRequest request;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const GetRoutineUpdateResponse& response);
}  // namespace Results

}  // namespace GetRoutineUpdate

namespace RunAcPowerRoutine {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  RunAcPowerRoutineRequest request;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunAcPowerRoutine

namespace RunBatteryCapacityRoutine {

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunBatteryCapacityRoutine

namespace RunBatteryChargeRoutine {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  RunBatteryChargeRoutineRequest request;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunBatteryChargeRoutine

namespace RunBatteryDischargeRoutine {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  RunBatteryDischargeRoutineRequest request;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunBatteryDischargeRoutine

namespace RunBatteryHealthRoutine {

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunBatteryHealthRoutine

namespace RunBluetoothDiscoveryRoutine {

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunBluetoothDiscoveryRoutine

namespace RunBluetoothPairingRoutine {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  RunBluetoothPairingRoutineRequest request;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunBluetoothPairingRoutine

namespace RunBluetoothPowerRoutine {

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunBluetoothPowerRoutine

namespace RunBluetoothScanningRoutine {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  RunBluetoothScanningRoutineRequest request;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunBluetoothScanningRoutine

namespace RunCpuCacheRoutine {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  RunCpuRoutineRequest request;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunCpuCacheRoutine

namespace RunCpuFloatingPointAccuracyRoutine {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  RunCpuRoutineRequest request;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunCpuFloatingPointAccuracyRoutine

namespace RunCpuPrimeSearchRoutine {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  RunCpuRoutineRequest request;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunCpuPrimeSearchRoutine

namespace RunCpuStressRoutine {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  RunCpuRoutineRequest request;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunCpuStressRoutine

namespace RunDiskReadRoutine {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  RunDiskReadRequest request;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunDiskReadRoutine

namespace RunDnsResolutionRoutine {

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunDnsResolutionRoutine

namespace RunDnsResolverPresentRoutine {

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunDnsResolverPresentRoutine

namespace RunEmmcLifetimeRoutine {

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunEmmcLifetimeRoutine

namespace RunFingerprintAliveRoutine {

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunFingerprintAliveRoutine

namespace RunGatewayCanBePingedRoutine {

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunGatewayCanBePingedRoutine

namespace RunLanConnectivityRoutine {

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunLanConnectivityRoutine

namespace RunMemoryRoutine {

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunMemoryRoutine

namespace RunNvmeSelfTestRoutine {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  RunNvmeSelfTestRequest request;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunNvmeSelfTestRoutine

namespace RunNvmeWearLevelRoutine {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  RunNvmeWearLevelRequest request;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunNvmeWearLevelRoutine

namespace RunSensitiveSensorRoutine {

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunSensitiveSensorRoutine

namespace RunSignalStrengthRoutine {

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunSignalStrengthRoutine

namespace RunSmartctlCheckRoutine {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  absl::optional<RunSmartctlCheckRequest> request;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunSmartctlCheckRoutine

namespace RunUfsLifetimeRoutine {

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunUfsLifetimeRoutine

namespace RunPowerButtonRoutine {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  RunPowerButtonRequest request;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunPowerButtonRoutine

namespace RunAudioDriverRoutine {

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunAudioDriverRoutine

namespace RunFanRoutine {

namespace Results {

base::Value::List Create(const RunRoutineResponse& response);
}  // namespace Results

}  // namespace RunFanRoutine

namespace StartRoutine {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  StartRoutineRequest request;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace StartRoutine

namespace CancelRoutine {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  CancelRoutineRequest request;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace CancelRoutine

namespace CreateMemoryRoutine {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  RunMemoryRoutineArguments args;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const CreateRoutineResponse& response);
}  // namespace Results

}  // namespace CreateMemoryRoutine

namespace IsMemoryRoutineArgumentSupported {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  RunMemoryRoutineArguments args;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const RoutineSupportStatusInfo& info);
}  // namespace Results

}  // namespace IsMemoryRoutineArgumentSupported

//
// Events
//

namespace OnRoutineInitialized {

extern const char kEventName[];  // "os.diagnostics.onRoutineInitialized"

base::Value::List Create(const RoutineInitializedInfo& initialized_info);
}  // namespace OnRoutineInitialized

namespace OnRoutineRunning {

extern const char kEventName[];  // "os.diagnostics.onRoutineRunning"

base::Value::List Create(const RoutineRunningInfo& running_info);
}  // namespace OnRoutineRunning

namespace OnRoutineWaiting {

extern const char kEventName[];  // "os.diagnostics.onRoutineWaiting"

base::Value::List Create(const RoutineWaitingInfo& waiting_info);
}  // namespace OnRoutineWaiting

namespace OnMemoryRoutineFinished {

extern const char kEventName[];  // "os.diagnostics.onMemoryRoutineFinished"

base::Value::List Create(const MemoryRoutineFinishedInfo& finished_info);
}  // namespace OnMemoryRoutineFinished

namespace OnRoutineException {

extern const char kEventName[];  // "os.diagnostics.onRoutineException"

base::Value::List Create(const ExceptionInfo& exception_info);
}  // namespace OnRoutineException

}  // namespace os_diagnostics
}  // namespace api
}  // namespace chromeos

#endif  // CHROME_COMMON_CHROMEOS_EXTENSIONS_API_DIAGNOSTICS_H__
