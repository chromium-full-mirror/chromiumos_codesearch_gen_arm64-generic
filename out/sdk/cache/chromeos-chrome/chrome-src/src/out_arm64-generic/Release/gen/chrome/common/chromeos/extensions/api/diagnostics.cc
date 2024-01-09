// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/chromeos/extensions/api/diagnostics.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/chromeos/extensions/api/diagnostics.h"

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

namespace chromeos {
namespace api {
namespace os_diagnostics {
//
// Types
//

const char* ToString(RoutineType enum_param) {
  switch (enum_param) {
    case RoutineType::kAcPower:
      return "ac_power";
    case RoutineType::kBatteryCapacity:
      return "battery_capacity";
    case RoutineType::kBatteryCharge:
      return "battery_charge";
    case RoutineType::kBatteryDischarge:
      return "battery_discharge";
    case RoutineType::kBatteryHealth:
      return "battery_health";
    case RoutineType::kCpuCache:
      return "cpu_cache";
    case RoutineType::kCpuFloatingPointAccuracy:
      return "cpu_floating_point_accuracy";
    case RoutineType::kCpuPrimeSearch:
      return "cpu_prime_search";
    case RoutineType::kCpuStress:
      return "cpu_stress";
    case RoutineType::kDiskRead:
      return "disk_read";
    case RoutineType::kDnsResolution:
      return "dns_resolution";
    case RoutineType::kMemory:
      return "memory";
    case RoutineType::kNvmeWearLevel:
      return "nvme_wear_level";
    case RoutineType::kSmartctlCheck:
      return "smartctl_check";
    case RoutineType::kLanConnectivity:
      return "lan_connectivity";
    case RoutineType::kSignalStrength:
      return "signal_strength";
    case RoutineType::kDnsResolverPresent:
      return "dns_resolver_present";
    case RoutineType::kGatewayCanBePinged:
      return "gateway_can_be_pinged";
    case RoutineType::kSensitiveSensor:
      return "sensitive_sensor";
    case RoutineType::kNvmeSelfTest:
      return "nvme_self_test";
    case RoutineType::kFingerprintAlive:
      return "fingerprint_alive";
    case RoutineType::kSmartctlCheckWithPercentageUsed:
      return "smartctl_check_with_percentage_used";
    case RoutineType::kEmmcLifetime:
      return "emmc_lifetime";
    case RoutineType::kBluetoothPower:
      return "bluetooth_power";
    case RoutineType::kUfsLifetime:
      return "ufs_lifetime";
    case RoutineType::kPowerButton:
      return "power_button";
    case RoutineType::kAudioDriver:
      return "audio_driver";
    case RoutineType::kBluetoothDiscovery:
      return "bluetooth_discovery";
    case RoutineType::kBluetoothScanning:
      return "bluetooth_scanning";
    case RoutineType::kBluetoothPairing:
      return "bluetooth_pairing";
    case RoutineType::kFan:
      return "fan";
    case RoutineType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

RoutineType ParseRoutineType(base::StringPiece enum_string) {
  if (enum_string == "ac_power")
    return RoutineType::kAcPower;
  if (enum_string == "battery_capacity")
    return RoutineType::kBatteryCapacity;
  if (enum_string == "battery_charge")
    return RoutineType::kBatteryCharge;
  if (enum_string == "battery_discharge")
    return RoutineType::kBatteryDischarge;
  if (enum_string == "battery_health")
    return RoutineType::kBatteryHealth;
  if (enum_string == "cpu_cache")
    return RoutineType::kCpuCache;
  if (enum_string == "cpu_floating_point_accuracy")
    return RoutineType::kCpuFloatingPointAccuracy;
  if (enum_string == "cpu_prime_search")
    return RoutineType::kCpuPrimeSearch;
  if (enum_string == "cpu_stress")
    return RoutineType::kCpuStress;
  if (enum_string == "disk_read")
    return RoutineType::kDiskRead;
  if (enum_string == "dns_resolution")
    return RoutineType::kDnsResolution;
  if (enum_string == "memory")
    return RoutineType::kMemory;
  if (enum_string == "nvme_wear_level")
    return RoutineType::kNvmeWearLevel;
  if (enum_string == "smartctl_check")
    return RoutineType::kSmartctlCheck;
  if (enum_string == "lan_connectivity")
    return RoutineType::kLanConnectivity;
  if (enum_string == "signal_strength")
    return RoutineType::kSignalStrength;
  if (enum_string == "dns_resolver_present")
    return RoutineType::kDnsResolverPresent;
  if (enum_string == "gateway_can_be_pinged")
    return RoutineType::kGatewayCanBePinged;
  if (enum_string == "sensitive_sensor")
    return RoutineType::kSensitiveSensor;
  if (enum_string == "nvme_self_test")
    return RoutineType::kNvmeSelfTest;
  if (enum_string == "fingerprint_alive")
    return RoutineType::kFingerprintAlive;
  if (enum_string == "smartctl_check_with_percentage_used")
    return RoutineType::kSmartctlCheckWithPercentageUsed;
  if (enum_string == "emmc_lifetime")
    return RoutineType::kEmmcLifetime;
  if (enum_string == "bluetooth_power")
    return RoutineType::kBluetoothPower;
  if (enum_string == "ufs_lifetime")
    return RoutineType::kUfsLifetime;
  if (enum_string == "power_button")
    return RoutineType::kPowerButton;
  if (enum_string == "audio_driver")
    return RoutineType::kAudioDriver;
  if (enum_string == "bluetooth_discovery")
    return RoutineType::kBluetoothDiscovery;
  if (enum_string == "bluetooth_scanning")
    return RoutineType::kBluetoothScanning;
  if (enum_string == "bluetooth_pairing")
    return RoutineType::kBluetoothPairing;
  if (enum_string == "fan")
    return RoutineType::kFan;
  return RoutineType::kNone;
}

std::u16string GetRoutineTypeParseError(base::StringPiece enum_string) {
  return u"expected \"ac_power\" or \"battery_capacity\" or \"battery_charge\" or \"battery_discharge\" or \"battery_health\" or \"cpu_cache\" or \"cpu_floating_point_accuracy\" or \"cpu_prime_search\" or \"cpu_stress\" or \"disk_read\" or \"dns_resolution\" or \"memory\" or \"nvme_wear_level\" or \"smartctl_check\" or \"lan_connectivity\" or \"signal_strength\" or \"dns_resolver_present\" or \"gateway_can_be_pinged\" or \"sensitive_sensor\" or \"nvme_self_test\" or \"fingerprint_alive\" or \"smartctl_check_with_percentage_used\" or \"emmc_lifetime\" or \"bluetooth_power\" or \"ufs_lifetime\" or \"power_button\" or \"audio_driver\" or \"bluetooth_discovery\" or \"bluetooth_scanning\" or \"bluetooth_pairing\" or \"fan\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(RoutineStatus enum_param) {
  switch (enum_param) {
    case RoutineStatus::kUnknown:
      return "unknown";
    case RoutineStatus::kReady:
      return "ready";
    case RoutineStatus::kRunning:
      return "running";
    case RoutineStatus::kWaitingUserAction:
      return "waiting_user_action";
    case RoutineStatus::kPassed:
      return "passed";
    case RoutineStatus::kFailed:
      return "failed";
    case RoutineStatus::kError:
      return "error";
    case RoutineStatus::kCancelled:
      return "cancelled";
    case RoutineStatus::kFailedToStart:
      return "failed_to_start";
    case RoutineStatus::kRemoved:
      return "removed";
    case RoutineStatus::kCancelling:
      return "cancelling";
    case RoutineStatus::kUnsupported:
      return "unsupported";
    case RoutineStatus::kNotRun:
      return "not_run";
    case RoutineStatus::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

RoutineStatus ParseRoutineStatus(base::StringPiece enum_string) {
  if (enum_string == "unknown")
    return RoutineStatus::kUnknown;
  if (enum_string == "ready")
    return RoutineStatus::kReady;
  if (enum_string == "running")
    return RoutineStatus::kRunning;
  if (enum_string == "waiting_user_action")
    return RoutineStatus::kWaitingUserAction;
  if (enum_string == "passed")
    return RoutineStatus::kPassed;
  if (enum_string == "failed")
    return RoutineStatus::kFailed;
  if (enum_string == "error")
    return RoutineStatus::kError;
  if (enum_string == "cancelled")
    return RoutineStatus::kCancelled;
  if (enum_string == "failed_to_start")
    return RoutineStatus::kFailedToStart;
  if (enum_string == "removed")
    return RoutineStatus::kRemoved;
  if (enum_string == "cancelling")
    return RoutineStatus::kCancelling;
  if (enum_string == "unsupported")
    return RoutineStatus::kUnsupported;
  if (enum_string == "not_run")
    return RoutineStatus::kNotRun;
  return RoutineStatus::kNone;
}

std::u16string GetRoutineStatusParseError(base::StringPiece enum_string) {
  return u"expected \"unknown\" or \"ready\" or \"running\" or \"waiting_user_action\" or \"passed\" or \"failed\" or \"error\" or \"cancelled\" or \"failed_to_start\" or \"removed\" or \"cancelling\" or \"unsupported\" or \"not_run\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(RoutineCommandType enum_param) {
  switch (enum_param) {
    case RoutineCommandType::kCancel:
      return "cancel";
    case RoutineCommandType::kRemove:
      return "remove";
    case RoutineCommandType::kResume:
      return "resume";
    case RoutineCommandType::kStatus:
      return "status";
    case RoutineCommandType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

RoutineCommandType ParseRoutineCommandType(base::StringPiece enum_string) {
  if (enum_string == "cancel")
    return RoutineCommandType::kCancel;
  if (enum_string == "remove")
    return RoutineCommandType::kRemove;
  if (enum_string == "resume")
    return RoutineCommandType::kResume;
  if (enum_string == "status")
    return RoutineCommandType::kStatus;
  return RoutineCommandType::kNone;
}

std::u16string GetRoutineCommandTypeParseError(base::StringPiece enum_string) {
  return u"expected \"cancel\" or \"remove\" or \"resume\" or \"status\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(UserMessageType enum_param) {
  switch (enum_param) {
    case UserMessageType::kUnknown:
      return "unknown";
    case UserMessageType::kUnplugAcPower:
      return "unplug_ac_power";
    case UserMessageType::kPlugInAcPower:
      return "plug_in_ac_power";
    case UserMessageType::kPressPowerButton:
      return "press_power_button";
    case UserMessageType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

UserMessageType ParseUserMessageType(base::StringPiece enum_string) {
  if (enum_string == "unknown")
    return UserMessageType::kUnknown;
  if (enum_string == "unplug_ac_power")
    return UserMessageType::kUnplugAcPower;
  if (enum_string == "plug_in_ac_power")
    return UserMessageType::kPlugInAcPower;
  if (enum_string == "press_power_button")
    return UserMessageType::kPressPowerButton;
  return UserMessageType::kNone;
}

std::u16string GetUserMessageTypeParseError(base::StringPiece enum_string) {
  return u"expected \"unknown\" or \"unplug_ac_power\" or \"plug_in_ac_power\" or \"press_power_button\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DiskReadRoutineType enum_param) {
  switch (enum_param) {
    case DiskReadRoutineType::kLinear:
      return "linear";
    case DiskReadRoutineType::kRandom:
      return "random";
    case DiskReadRoutineType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DiskReadRoutineType ParseDiskReadRoutineType(base::StringPiece enum_string) {
  if (enum_string == "linear")
    return DiskReadRoutineType::kLinear;
  if (enum_string == "random")
    return DiskReadRoutineType::kRandom;
  return DiskReadRoutineType::kNone;
}

std::u16string GetDiskReadRoutineTypeParseError(base::StringPiece enum_string) {
  return u"expected \"linear\" or \"random\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(AcPowerStatus enum_param) {
  switch (enum_param) {
    case AcPowerStatus::kConnected:
      return "connected";
    case AcPowerStatus::kDisconnected:
      return "disconnected";
    case AcPowerStatus::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

AcPowerStatus ParseAcPowerStatus(base::StringPiece enum_string) {
  if (enum_string == "connected")
    return AcPowerStatus::kConnected;
  if (enum_string == "disconnected")
    return AcPowerStatus::kDisconnected;
  return AcPowerStatus::kNone;
}

std::u16string GetAcPowerStatusParseError(base::StringPiece enum_string) {
  return u"expected \"connected\" or \"disconnected\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


GetAvailableRoutinesResponse::GetAvailableRoutinesResponse()
 {}

GetAvailableRoutinesResponse::~GetAvailableRoutinesResponse() = default;
GetAvailableRoutinesResponse::GetAvailableRoutinesResponse(GetAvailableRoutinesResponse&& rhs) noexcept = default;
GetAvailableRoutinesResponse& GetAvailableRoutinesResponse::operator=(GetAvailableRoutinesResponse&& rhs) noexcept = default;
GetAvailableRoutinesResponse GetAvailableRoutinesResponse::Clone() const {
  GetAvailableRoutinesResponse out;
  out.routines = routines;
  return out;
}

// static
bool GetAvailableRoutinesResponse::Populate(
    const base::Value::Dict& dict, GetAvailableRoutinesResponse& out) {
  const base::Value* routines_value = dict.Find("routines");
  if (!routines_value) {
    return false;
  }
  {
    if (!(*routines_value).is_list()) {
      return false;
    }
    else {
      for (const auto& it : ((*routines_value)).GetList()) {
        RoutineType tmp;
        const std::string* routine_type_as_string = (it).GetIfString();
        if (!routine_type_as_string) {
          return false;
        }
        tmp = ParseRoutineType(*routine_type_as_string);
        if (tmp == RoutineType()) {
          return false;
        }
        out.routines.push_back(tmp);
      }
    }
  }

  return true;
}

// static
bool GetAvailableRoutinesResponse::Populate(
    const base::Value& value, GetAvailableRoutinesResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GetAvailableRoutinesResponse> GetAvailableRoutinesResponse::FromValue(const base::Value::Dict& value) {
  GetAvailableRoutinesResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GetAvailableRoutinesResponse> GetAvailableRoutinesResponse::FromValue(const base::Value& value) {
  GetAvailableRoutinesResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict GetAvailableRoutinesResponse::ToValue() const {
  base::Value::Dict to_value_result;

  {
    std::vector<std::string> routines_list;
    for (const auto& it : (this->routines)) {
      routines_list.emplace_back(os_diagnostics::ToString(it));
    }
    to_value_result.Set("routines", json_schema_compiler::util::CreateValueFromArray(routines_list));
  }


  return to_value_result;
}


GetRoutineUpdateRequest::GetRoutineUpdateRequest()
: id(0),
command() {}

GetRoutineUpdateRequest::~GetRoutineUpdateRequest() = default;
GetRoutineUpdateRequest::GetRoutineUpdateRequest(GetRoutineUpdateRequest&& rhs) noexcept = default;
GetRoutineUpdateRequest& GetRoutineUpdateRequest::operator=(GetRoutineUpdateRequest&& rhs) noexcept = default;
GetRoutineUpdateRequest GetRoutineUpdateRequest::Clone() const {
  GetRoutineUpdateRequest out;
  out.id = id;
  out.command = command;
  return out;
}

// static
bool GetRoutineUpdateRequest::Populate(
    const base::Value::Dict& dict, GetRoutineUpdateRequest& out) {
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

  const base::Value* command_value = dict.Find("command");
  if (!command_value) {
    return false;
  }
  {
    const std::string* routine_command_type_as_string = (*command_value).GetIfString();
    if (!routine_command_type_as_string) {
      return false;
    }
    out.command = ParseRoutineCommandType(*routine_command_type_as_string);
    if (out.command == RoutineCommandType()) {
      return false;
    }
  }

  return true;
}

// static
bool GetRoutineUpdateRequest::Populate(
    const base::Value& value, GetRoutineUpdateRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GetRoutineUpdateRequest> GetRoutineUpdateRequest::FromValue(const base::Value::Dict& value) {
  GetRoutineUpdateRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GetRoutineUpdateRequest> GetRoutineUpdateRequest::FromValue(const base::Value& value) {
  GetRoutineUpdateRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict GetRoutineUpdateRequest::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("command", os_diagnostics::ToString(this->command));


  return to_value_result;
}


GetRoutineUpdateResponse::GetRoutineUpdateResponse()
: progress_percent(0),
status(),
user_message() {}

GetRoutineUpdateResponse::~GetRoutineUpdateResponse() = default;
GetRoutineUpdateResponse::GetRoutineUpdateResponse(GetRoutineUpdateResponse&& rhs) noexcept = default;
GetRoutineUpdateResponse& GetRoutineUpdateResponse::operator=(GetRoutineUpdateResponse&& rhs) noexcept = default;
GetRoutineUpdateResponse GetRoutineUpdateResponse::Clone() const {
  GetRoutineUpdateResponse out;
  out.progress_percent = progress_percent;
  out.output = output;
  out.status = status;
  out.status_message = status_message;
  out.user_message = user_message;
  return out;
}

// static
bool GetRoutineUpdateResponse::Populate(
    const base::Value::Dict& dict, GetRoutineUpdateResponse& out) {
  out.user_message = UserMessageType();
  const base::Value* progress_percent_value = dict.Find("progress_percent");
  if (!progress_percent_value) {
    return false;
  }
  {
    auto temp = (*progress_percent_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.progress_percent = *temp;
  }

  const base::Value* output_value = dict.Find("output");
  if (output_value) {
    {
      auto* temp = (*output_value).GetIfString();
      if (!temp) {
        out.output = std::nullopt;
        return false;
      }
      out.output = *temp;
    }
  }

  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    const std::string* routine_status_as_string = (*status_value).GetIfString();
    if (!routine_status_as_string) {
      return false;
    }
    out.status = ParseRoutineStatus(*routine_status_as_string);
    if (out.status == RoutineStatus()) {
      return false;
    }
  }

  const base::Value* status_message_value = dict.Find("status_message");
  if (!status_message_value) {
    return false;
  }
  {
    auto* temp = (*status_message_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.status_message = *temp;
  }

  const base::Value* user_message_value = dict.Find("user_message");
  if (user_message_value) {
    {
      const std::string* user_message_type_as_string = (*user_message_value).GetIfString();
      if (!user_message_type_as_string) {
        return false;
      }
      out.user_message = ParseUserMessageType(*user_message_type_as_string);
      if (out.user_message == UserMessageType()) {
        return false;
      }
    }
    } else {
    out.user_message = UserMessageType();
  }

  return true;
}

// static
bool GetRoutineUpdateResponse::Populate(
    const base::Value& value, GetRoutineUpdateResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GetRoutineUpdateResponse> GetRoutineUpdateResponse::FromValue(const base::Value::Dict& value) {
  GetRoutineUpdateResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GetRoutineUpdateResponse> GetRoutineUpdateResponse::FromValue(const base::Value& value) {
  GetRoutineUpdateResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict GetRoutineUpdateResponse::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("progress_percent", this->progress_percent);

  if (this->output) {
    to_value_result.Set("output", *this->output);

  }
  to_value_result.Set("status", os_diagnostics::ToString(this->status));

  to_value_result.Set("status_message", this->status_message);

  if (this->user_message != UserMessageType()) {
    to_value_result.Set("user_message", os_diagnostics::ToString(this->user_message));

  }

  return to_value_result;
}


RunAcPowerRoutineRequest::RunAcPowerRoutineRequest()
: expected_status() {}

RunAcPowerRoutineRequest::~RunAcPowerRoutineRequest() = default;
RunAcPowerRoutineRequest::RunAcPowerRoutineRequest(RunAcPowerRoutineRequest&& rhs) noexcept = default;
RunAcPowerRoutineRequest& RunAcPowerRoutineRequest::operator=(RunAcPowerRoutineRequest&& rhs) noexcept = default;
RunAcPowerRoutineRequest RunAcPowerRoutineRequest::Clone() const {
  RunAcPowerRoutineRequest out;
  out.expected_status = expected_status;
  out.expected_power_type = expected_power_type;
  return out;
}

// static
bool RunAcPowerRoutineRequest::Populate(
    const base::Value::Dict& dict, RunAcPowerRoutineRequest& out) {
  const base::Value* expected_status_value = dict.Find("expected_status");
  if (!expected_status_value) {
    return false;
  }
  {
    const std::string* ac_power_status_as_string = (*expected_status_value).GetIfString();
    if (!ac_power_status_as_string) {
      return false;
    }
    out.expected_status = ParseAcPowerStatus(*ac_power_status_as_string);
    if (out.expected_status == AcPowerStatus()) {
      return false;
    }
  }

  const base::Value* expected_power_type_value = dict.Find("expected_power_type");
  if (expected_power_type_value) {
    {
      auto* temp = (*expected_power_type_value).GetIfString();
      if (!temp) {
        out.expected_power_type = std::nullopt;
        return false;
      }
      out.expected_power_type = *temp;
    }
  }

  return true;
}

// static
bool RunAcPowerRoutineRequest::Populate(
    const base::Value& value, RunAcPowerRoutineRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RunAcPowerRoutineRequest> RunAcPowerRoutineRequest::FromValue(const base::Value::Dict& value) {
  RunAcPowerRoutineRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RunAcPowerRoutineRequest> RunAcPowerRoutineRequest::FromValue(const base::Value& value) {
  RunAcPowerRoutineRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RunAcPowerRoutineRequest::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("expected_status", os_diagnostics::ToString(this->expected_status));

  if (this->expected_power_type) {
    to_value_result.Set("expected_power_type", *this->expected_power_type);

  }

  return to_value_result;
}


RunBatteryChargeRoutineRequest::RunBatteryChargeRoutineRequest()
: length_seconds(0),
minimum_charge_percent_required(0) {}

RunBatteryChargeRoutineRequest::~RunBatteryChargeRoutineRequest() = default;
RunBatteryChargeRoutineRequest::RunBatteryChargeRoutineRequest(RunBatteryChargeRoutineRequest&& rhs) noexcept = default;
RunBatteryChargeRoutineRequest& RunBatteryChargeRoutineRequest::operator=(RunBatteryChargeRoutineRequest&& rhs) noexcept = default;
RunBatteryChargeRoutineRequest RunBatteryChargeRoutineRequest::Clone() const {
  RunBatteryChargeRoutineRequest out;
  out.length_seconds = length_seconds;
  out.minimum_charge_percent_required = minimum_charge_percent_required;
  return out;
}

// static
bool RunBatteryChargeRoutineRequest::Populate(
    const base::Value::Dict& dict, RunBatteryChargeRoutineRequest& out) {
  const base::Value* length_seconds_value = dict.Find("length_seconds");
  if (!length_seconds_value) {
    return false;
  }
  {
    auto temp = (*length_seconds_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.length_seconds = *temp;
  }

  const base::Value* minimum_charge_percent_required_value = dict.Find("minimum_charge_percent_required");
  if (!minimum_charge_percent_required_value) {
    return false;
  }
  {
    auto temp = (*minimum_charge_percent_required_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.minimum_charge_percent_required = *temp;
  }

  return true;
}

// static
bool RunBatteryChargeRoutineRequest::Populate(
    const base::Value& value, RunBatteryChargeRoutineRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RunBatteryChargeRoutineRequest> RunBatteryChargeRoutineRequest::FromValue(const base::Value::Dict& value) {
  RunBatteryChargeRoutineRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RunBatteryChargeRoutineRequest> RunBatteryChargeRoutineRequest::FromValue(const base::Value& value) {
  RunBatteryChargeRoutineRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RunBatteryChargeRoutineRequest::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("length_seconds", this->length_seconds);

  to_value_result.Set("minimum_charge_percent_required", this->minimum_charge_percent_required);


  return to_value_result;
}


RunBatteryDischargeRoutineRequest::RunBatteryDischargeRoutineRequest()
: length_seconds(0),
maximum_discharge_percent_allowed(0) {}

RunBatteryDischargeRoutineRequest::~RunBatteryDischargeRoutineRequest() = default;
RunBatteryDischargeRoutineRequest::RunBatteryDischargeRoutineRequest(RunBatteryDischargeRoutineRequest&& rhs) noexcept = default;
RunBatteryDischargeRoutineRequest& RunBatteryDischargeRoutineRequest::operator=(RunBatteryDischargeRoutineRequest&& rhs) noexcept = default;
RunBatteryDischargeRoutineRequest RunBatteryDischargeRoutineRequest::Clone() const {
  RunBatteryDischargeRoutineRequest out;
  out.length_seconds = length_seconds;
  out.maximum_discharge_percent_allowed = maximum_discharge_percent_allowed;
  return out;
}

// static
bool RunBatteryDischargeRoutineRequest::Populate(
    const base::Value::Dict& dict, RunBatteryDischargeRoutineRequest& out) {
  const base::Value* length_seconds_value = dict.Find("length_seconds");
  if (!length_seconds_value) {
    return false;
  }
  {
    auto temp = (*length_seconds_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.length_seconds = *temp;
  }

  const base::Value* maximum_discharge_percent_allowed_value = dict.Find("maximum_discharge_percent_allowed");
  if (!maximum_discharge_percent_allowed_value) {
    return false;
  }
  {
    auto temp = (*maximum_discharge_percent_allowed_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.maximum_discharge_percent_allowed = *temp;
  }

  return true;
}

// static
bool RunBatteryDischargeRoutineRequest::Populate(
    const base::Value& value, RunBatteryDischargeRoutineRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RunBatteryDischargeRoutineRequest> RunBatteryDischargeRoutineRequest::FromValue(const base::Value::Dict& value) {
  RunBatteryDischargeRoutineRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RunBatteryDischargeRoutineRequest> RunBatteryDischargeRoutineRequest::FromValue(const base::Value& value) {
  RunBatteryDischargeRoutineRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RunBatteryDischargeRoutineRequest::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("length_seconds", this->length_seconds);

  to_value_result.Set("maximum_discharge_percent_allowed", this->maximum_discharge_percent_allowed);


  return to_value_result;
}


RunBluetoothPairingRoutineRequest::RunBluetoothPairingRoutineRequest()
 {}

RunBluetoothPairingRoutineRequest::~RunBluetoothPairingRoutineRequest() = default;
RunBluetoothPairingRoutineRequest::RunBluetoothPairingRoutineRequest(RunBluetoothPairingRoutineRequest&& rhs) noexcept = default;
RunBluetoothPairingRoutineRequest& RunBluetoothPairingRoutineRequest::operator=(RunBluetoothPairingRoutineRequest&& rhs) noexcept = default;
RunBluetoothPairingRoutineRequest RunBluetoothPairingRoutineRequest::Clone() const {
  RunBluetoothPairingRoutineRequest out;
  out.peripheral_id = peripheral_id;
  return out;
}

// static
bool RunBluetoothPairingRoutineRequest::Populate(
    const base::Value::Dict& dict, RunBluetoothPairingRoutineRequest& out) {
  const base::Value* peripheral_id_value = dict.Find("peripheral_id");
  if (!peripheral_id_value) {
    return false;
  }
  {
    auto* temp = (*peripheral_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.peripheral_id = *temp;
  }

  return true;
}

// static
bool RunBluetoothPairingRoutineRequest::Populate(
    const base::Value& value, RunBluetoothPairingRoutineRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RunBluetoothPairingRoutineRequest> RunBluetoothPairingRoutineRequest::FromValue(const base::Value::Dict& value) {
  RunBluetoothPairingRoutineRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RunBluetoothPairingRoutineRequest> RunBluetoothPairingRoutineRequest::FromValue(const base::Value& value) {
  RunBluetoothPairingRoutineRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RunBluetoothPairingRoutineRequest::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("peripheral_id", this->peripheral_id);


  return to_value_result;
}


RunBluetoothScanningRoutineRequest::RunBluetoothScanningRoutineRequest()
: length_seconds(0) {}

RunBluetoothScanningRoutineRequest::~RunBluetoothScanningRoutineRequest() = default;
RunBluetoothScanningRoutineRequest::RunBluetoothScanningRoutineRequest(RunBluetoothScanningRoutineRequest&& rhs) noexcept = default;
RunBluetoothScanningRoutineRequest& RunBluetoothScanningRoutineRequest::operator=(RunBluetoothScanningRoutineRequest&& rhs) noexcept = default;
RunBluetoothScanningRoutineRequest RunBluetoothScanningRoutineRequest::Clone() const {
  RunBluetoothScanningRoutineRequest out;
  out.length_seconds = length_seconds;
  return out;
}

// static
bool RunBluetoothScanningRoutineRequest::Populate(
    const base::Value::Dict& dict, RunBluetoothScanningRoutineRequest& out) {
  const base::Value* length_seconds_value = dict.Find("length_seconds");
  if (!length_seconds_value) {
    return false;
  }
  {
    auto temp = (*length_seconds_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.length_seconds = *temp;
  }

  return true;
}

// static
bool RunBluetoothScanningRoutineRequest::Populate(
    const base::Value& value, RunBluetoothScanningRoutineRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RunBluetoothScanningRoutineRequest> RunBluetoothScanningRoutineRequest::FromValue(const base::Value::Dict& value) {
  RunBluetoothScanningRoutineRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RunBluetoothScanningRoutineRequest> RunBluetoothScanningRoutineRequest::FromValue(const base::Value& value) {
  RunBluetoothScanningRoutineRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RunBluetoothScanningRoutineRequest::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("length_seconds", this->length_seconds);


  return to_value_result;
}


RunCpuRoutineRequest::RunCpuRoutineRequest()
: length_seconds(0) {}

RunCpuRoutineRequest::~RunCpuRoutineRequest() = default;
RunCpuRoutineRequest::RunCpuRoutineRequest(RunCpuRoutineRequest&& rhs) noexcept = default;
RunCpuRoutineRequest& RunCpuRoutineRequest::operator=(RunCpuRoutineRequest&& rhs) noexcept = default;
RunCpuRoutineRequest RunCpuRoutineRequest::Clone() const {
  RunCpuRoutineRequest out;
  out.length_seconds = length_seconds;
  return out;
}

// static
bool RunCpuRoutineRequest::Populate(
    const base::Value::Dict& dict, RunCpuRoutineRequest& out) {
  const base::Value* length_seconds_value = dict.Find("length_seconds");
  if (!length_seconds_value) {
    return false;
  }
  {
    auto temp = (*length_seconds_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.length_seconds = *temp;
  }

  return true;
}

// static
bool RunCpuRoutineRequest::Populate(
    const base::Value& value, RunCpuRoutineRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RunCpuRoutineRequest> RunCpuRoutineRequest::FromValue(const base::Value::Dict& value) {
  RunCpuRoutineRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RunCpuRoutineRequest> RunCpuRoutineRequest::FromValue(const base::Value& value) {
  RunCpuRoutineRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RunCpuRoutineRequest::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("length_seconds", this->length_seconds);


  return to_value_result;
}


RunDiskReadRequest::RunDiskReadRequest()
: type(),
length_seconds(0),
file_size_mb(0) {}

RunDiskReadRequest::~RunDiskReadRequest() = default;
RunDiskReadRequest::RunDiskReadRequest(RunDiskReadRequest&& rhs) noexcept = default;
RunDiskReadRequest& RunDiskReadRequest::operator=(RunDiskReadRequest&& rhs) noexcept = default;
RunDiskReadRequest RunDiskReadRequest::Clone() const {
  RunDiskReadRequest out;
  out.type = type;
  out.length_seconds = length_seconds;
  out.file_size_mb = file_size_mb;
  return out;
}

// static
bool RunDiskReadRequest::Populate(
    const base::Value::Dict& dict, RunDiskReadRequest& out) {
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* disk_read_routine_type_as_string = (*type_value).GetIfString();
    if (!disk_read_routine_type_as_string) {
      return false;
    }
    out.type = ParseDiskReadRoutineType(*disk_read_routine_type_as_string);
    if (out.type == DiskReadRoutineType()) {
      return false;
    }
  }

  const base::Value* length_seconds_value = dict.Find("length_seconds");
  if (!length_seconds_value) {
    return false;
  }
  {
    auto temp = (*length_seconds_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.length_seconds = *temp;
  }

  const base::Value* file_size_mb_value = dict.Find("file_size_mb");
  if (!file_size_mb_value) {
    return false;
  }
  {
    auto temp = (*file_size_mb_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.file_size_mb = *temp;
  }

  return true;
}

// static
bool RunDiskReadRequest::Populate(
    const base::Value& value, RunDiskReadRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RunDiskReadRequest> RunDiskReadRequest::FromValue(const base::Value::Dict& value) {
  RunDiskReadRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RunDiskReadRequest> RunDiskReadRequest::FromValue(const base::Value& value) {
  RunDiskReadRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RunDiskReadRequest::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("type", os_diagnostics::ToString(this->type));

  to_value_result.Set("length_seconds", this->length_seconds);

  to_value_result.Set("file_size_mb", this->file_size_mb);


  return to_value_result;
}


const char* ToString(NvmeSelfTestType enum_param) {
  switch (enum_param) {
    case NvmeSelfTestType::kShortTest:
      return "short_test";
    case NvmeSelfTestType::kLongTest:
      return "long_test";
    case NvmeSelfTestType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

NvmeSelfTestType ParseNvmeSelfTestType(base::StringPiece enum_string) {
  if (enum_string == "short_test")
    return NvmeSelfTestType::kShortTest;
  if (enum_string == "long_test")
    return NvmeSelfTestType::kLongTest;
  return NvmeSelfTestType::kNone;
}

std::u16string GetNvmeSelfTestTypeParseError(base::StringPiece enum_string) {
  return u"expected \"short_test\" or \"long_test\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


RunNvmeSelfTestRequest::RunNvmeSelfTestRequest()
: test_type() {}

RunNvmeSelfTestRequest::~RunNvmeSelfTestRequest() = default;
RunNvmeSelfTestRequest::RunNvmeSelfTestRequest(RunNvmeSelfTestRequest&& rhs) noexcept = default;
RunNvmeSelfTestRequest& RunNvmeSelfTestRequest::operator=(RunNvmeSelfTestRequest&& rhs) noexcept = default;
RunNvmeSelfTestRequest RunNvmeSelfTestRequest::Clone() const {
  RunNvmeSelfTestRequest out;
  out.test_type = test_type;
  return out;
}

// static
bool RunNvmeSelfTestRequest::Populate(
    const base::Value::Dict& dict, RunNvmeSelfTestRequest& out) {
  const base::Value* test_type_value = dict.Find("test_type");
  if (!test_type_value) {
    return false;
  }
  {
    const std::string* nvme_self_test_type_as_string = (*test_type_value).GetIfString();
    if (!nvme_self_test_type_as_string) {
      return false;
    }
    out.test_type = ParseNvmeSelfTestType(*nvme_self_test_type_as_string);
    if (out.test_type == NvmeSelfTestType()) {
      return false;
    }
  }

  return true;
}

// static
bool RunNvmeSelfTestRequest::Populate(
    const base::Value& value, RunNvmeSelfTestRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RunNvmeSelfTestRequest> RunNvmeSelfTestRequest::FromValue(const base::Value::Dict& value) {
  RunNvmeSelfTestRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RunNvmeSelfTestRequest> RunNvmeSelfTestRequest::FromValue(const base::Value& value) {
  RunNvmeSelfTestRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RunNvmeSelfTestRequest::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("test_type", os_diagnostics::ToString(this->test_type));


  return to_value_result;
}


RunNvmeWearLevelRequest::RunNvmeWearLevelRequest()
: wear_level_threshold(0) {}

RunNvmeWearLevelRequest::~RunNvmeWearLevelRequest() = default;
RunNvmeWearLevelRequest::RunNvmeWearLevelRequest(RunNvmeWearLevelRequest&& rhs) noexcept = default;
RunNvmeWearLevelRequest& RunNvmeWearLevelRequest::operator=(RunNvmeWearLevelRequest&& rhs) noexcept = default;
RunNvmeWearLevelRequest RunNvmeWearLevelRequest::Clone() const {
  RunNvmeWearLevelRequest out;
  out.wear_level_threshold = wear_level_threshold;
  return out;
}

// static
bool RunNvmeWearLevelRequest::Populate(
    const base::Value::Dict& dict, RunNvmeWearLevelRequest& out) {
  const base::Value* wear_level_threshold_value = dict.Find("wear_level_threshold");
  if (!wear_level_threshold_value) {
    return false;
  }
  {
    auto temp = (*wear_level_threshold_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.wear_level_threshold = *temp;
  }

  return true;
}

// static
bool RunNvmeWearLevelRequest::Populate(
    const base::Value& value, RunNvmeWearLevelRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RunNvmeWearLevelRequest> RunNvmeWearLevelRequest::FromValue(const base::Value::Dict& value) {
  RunNvmeWearLevelRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RunNvmeWearLevelRequest> RunNvmeWearLevelRequest::FromValue(const base::Value& value) {
  RunNvmeWearLevelRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RunNvmeWearLevelRequest::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("wear_level_threshold", this->wear_level_threshold);


  return to_value_result;
}


RunSmartctlCheckRequest::RunSmartctlCheckRequest()
 {}

RunSmartctlCheckRequest::~RunSmartctlCheckRequest() = default;
RunSmartctlCheckRequest::RunSmartctlCheckRequest(RunSmartctlCheckRequest&& rhs) noexcept = default;
RunSmartctlCheckRequest& RunSmartctlCheckRequest::operator=(RunSmartctlCheckRequest&& rhs) noexcept = default;
RunSmartctlCheckRequest RunSmartctlCheckRequest::Clone() const {
  RunSmartctlCheckRequest out;
  out.percentage_used_threshold = percentage_used_threshold;
  return out;
}

// static
bool RunSmartctlCheckRequest::Populate(
    const base::Value::Dict& dict, RunSmartctlCheckRequest& out) {
  const base::Value* percentage_used_threshold_value = dict.Find("percentage_used_threshold");
  if (percentage_used_threshold_value) {
    {
      auto temp = (*percentage_used_threshold_value).GetIfInt();
      if (!temp.has_value()) {
        out.percentage_used_threshold = std::nullopt;
        return false;
      }
      out.percentage_used_threshold = *temp;
    }
  }

  return true;
}

// static
bool RunSmartctlCheckRequest::Populate(
    const base::Value& value, RunSmartctlCheckRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RunSmartctlCheckRequest> RunSmartctlCheckRequest::FromValue(const base::Value::Dict& value) {
  RunSmartctlCheckRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RunSmartctlCheckRequest> RunSmartctlCheckRequest::FromValue(const base::Value& value) {
  RunSmartctlCheckRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RunSmartctlCheckRequest::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->percentage_used_threshold) {
    to_value_result.Set("percentage_used_threshold", *this->percentage_used_threshold);

  }

  return to_value_result;
}


RunPowerButtonRequest::RunPowerButtonRequest()
: timeout_seconds(0) {}

RunPowerButtonRequest::~RunPowerButtonRequest() = default;
RunPowerButtonRequest::RunPowerButtonRequest(RunPowerButtonRequest&& rhs) noexcept = default;
RunPowerButtonRequest& RunPowerButtonRequest::operator=(RunPowerButtonRequest&& rhs) noexcept = default;
RunPowerButtonRequest RunPowerButtonRequest::Clone() const {
  RunPowerButtonRequest out;
  out.timeout_seconds = timeout_seconds;
  return out;
}

// static
bool RunPowerButtonRequest::Populate(
    const base::Value::Dict& dict, RunPowerButtonRequest& out) {
  const base::Value* timeout_seconds_value = dict.Find("timeout_seconds");
  if (!timeout_seconds_value) {
    return false;
  }
  {
    auto temp = (*timeout_seconds_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.timeout_seconds = *temp;
  }

  return true;
}

// static
bool RunPowerButtonRequest::Populate(
    const base::Value& value, RunPowerButtonRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RunPowerButtonRequest> RunPowerButtonRequest::FromValue(const base::Value::Dict& value) {
  RunPowerButtonRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RunPowerButtonRequest> RunPowerButtonRequest::FromValue(const base::Value& value) {
  RunPowerButtonRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RunPowerButtonRequest::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("timeout_seconds", this->timeout_seconds);


  return to_value_result;
}


RunRoutineResponse::RunRoutineResponse()
: id(0),
status() {}

RunRoutineResponse::~RunRoutineResponse() = default;
RunRoutineResponse::RunRoutineResponse(RunRoutineResponse&& rhs) noexcept = default;
RunRoutineResponse& RunRoutineResponse::operator=(RunRoutineResponse&& rhs) noexcept = default;
RunRoutineResponse RunRoutineResponse::Clone() const {
  RunRoutineResponse out;
  out.id = id;
  out.status = status;
  return out;
}

// static
bool RunRoutineResponse::Populate(
    const base::Value::Dict& dict, RunRoutineResponse& out) {
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

  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    const std::string* routine_status_as_string = (*status_value).GetIfString();
    if (!routine_status_as_string) {
      return false;
    }
    out.status = ParseRoutineStatus(*routine_status_as_string);
    if (out.status == RoutineStatus()) {
      return false;
    }
  }

  return true;
}

// static
bool RunRoutineResponse::Populate(
    const base::Value& value, RunRoutineResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RunRoutineResponse> RunRoutineResponse::FromValue(const base::Value::Dict& value) {
  RunRoutineResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RunRoutineResponse> RunRoutineResponse::FromValue(const base::Value& value) {
  RunRoutineResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RunRoutineResponse::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("status", os_diagnostics::ToString(this->status));


  return to_value_result;
}


RoutineInitializedInfo::RoutineInitializedInfo()
 {}

RoutineInitializedInfo::~RoutineInitializedInfo() = default;
RoutineInitializedInfo::RoutineInitializedInfo(RoutineInitializedInfo&& rhs) noexcept = default;
RoutineInitializedInfo& RoutineInitializedInfo::operator=(RoutineInitializedInfo&& rhs) noexcept = default;
RoutineInitializedInfo RoutineInitializedInfo::Clone() const {
  RoutineInitializedInfo out;
  out.uuid = uuid;
  return out;
}

// static
bool RoutineInitializedInfo::Populate(
    const base::Value::Dict& dict, RoutineInitializedInfo& out) {
  const base::Value* uuid_value = dict.Find("uuid");
  if (uuid_value) {
    {
      auto* temp = (*uuid_value).GetIfString();
      if (!temp) {
        out.uuid = std::nullopt;
        return false;
      }
      out.uuid = *temp;
    }
  }

  return true;
}

// static
bool RoutineInitializedInfo::Populate(
    const base::Value& value, RoutineInitializedInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RoutineInitializedInfo> RoutineInitializedInfo::FromValue(const base::Value::Dict& value) {
  RoutineInitializedInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RoutineInitializedInfo> RoutineInitializedInfo::FromValue(const base::Value& value) {
  RoutineInitializedInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RoutineInitializedInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->uuid) {
    to_value_result.Set("uuid", *this->uuid);

  }

  return to_value_result;
}


RoutineRunningInfo::RoutineRunningInfo()
 {}

RoutineRunningInfo::~RoutineRunningInfo() = default;
RoutineRunningInfo::RoutineRunningInfo(RoutineRunningInfo&& rhs) noexcept = default;
RoutineRunningInfo& RoutineRunningInfo::operator=(RoutineRunningInfo&& rhs) noexcept = default;
RoutineRunningInfo RoutineRunningInfo::Clone() const {
  RoutineRunningInfo out;
  out.uuid = uuid;
  out.percentage = percentage;
  return out;
}

// static
bool RoutineRunningInfo::Populate(
    const base::Value::Dict& dict, RoutineRunningInfo& out) {
  const base::Value* uuid_value = dict.Find("uuid");
  if (uuid_value) {
    {
      auto* temp = (*uuid_value).GetIfString();
      if (!temp) {
        out.uuid = std::nullopt;
        return false;
      }
      out.uuid = *temp;
    }
  }

  const base::Value* percentage_value = dict.Find("percentage");
  if (percentage_value) {
    {
      auto temp = (*percentage_value).GetIfInt();
      if (!temp.has_value()) {
        out.percentage = std::nullopt;
        return false;
      }
      out.percentage = *temp;
    }
  }

  return true;
}

// static
bool RoutineRunningInfo::Populate(
    const base::Value& value, RoutineRunningInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RoutineRunningInfo> RoutineRunningInfo::FromValue(const base::Value::Dict& value) {
  RoutineRunningInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RoutineRunningInfo> RoutineRunningInfo::FromValue(const base::Value& value) {
  RoutineRunningInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RoutineRunningInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->uuid) {
    to_value_result.Set("uuid", *this->uuid);

  }
  if (this->percentage) {
    to_value_result.Set("percentage", *this->percentage);

  }

  return to_value_result;
}


const char* ToString(RoutineWaitingReason enum_param) {
  switch (enum_param) {
    case RoutineWaitingReason::kWaitingToBeScheduled:
      return "waiting_to_be_scheduled";
    case RoutineWaitingReason::kWaitingUserInput:
      return "waiting_user_input";
    case RoutineWaitingReason::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

RoutineWaitingReason ParseRoutineWaitingReason(base::StringPiece enum_string) {
  if (enum_string == "waiting_to_be_scheduled")
    return RoutineWaitingReason::kWaitingToBeScheduled;
  if (enum_string == "waiting_user_input")
    return RoutineWaitingReason::kWaitingUserInput;
  return RoutineWaitingReason::kNone;
}

std::u16string GetRoutineWaitingReasonParseError(base::StringPiece enum_string) {
  return u"expected \"waiting_to_be_scheduled\" or \"waiting_user_input\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


RoutineWaitingInfo::RoutineWaitingInfo()
: reason() {}

RoutineWaitingInfo::~RoutineWaitingInfo() = default;
RoutineWaitingInfo::RoutineWaitingInfo(RoutineWaitingInfo&& rhs) noexcept = default;
RoutineWaitingInfo& RoutineWaitingInfo::operator=(RoutineWaitingInfo&& rhs) noexcept = default;
RoutineWaitingInfo RoutineWaitingInfo::Clone() const {
  RoutineWaitingInfo out;
  out.uuid = uuid;
  out.percentage = percentage;
  out.reason = reason;
  out.message = message;
  return out;
}

// static
bool RoutineWaitingInfo::Populate(
    const base::Value::Dict& dict, RoutineWaitingInfo& out) {
  out.reason = RoutineWaitingReason();
  const base::Value* uuid_value = dict.Find("uuid");
  if (uuid_value) {
    {
      auto* temp = (*uuid_value).GetIfString();
      if (!temp) {
        out.uuid = std::nullopt;
        return false;
      }
      out.uuid = *temp;
    }
  }

  const base::Value* percentage_value = dict.Find("percentage");
  if (percentage_value) {
    {
      auto temp = (*percentage_value).GetIfInt();
      if (!temp.has_value()) {
        out.percentage = std::nullopt;
        return false;
      }
      out.percentage = *temp;
    }
  }

  const base::Value* reason_value = dict.Find("reason");
  if (reason_value) {
    {
      const std::string* routine_waiting_reason_as_string = (*reason_value).GetIfString();
      if (!routine_waiting_reason_as_string) {
        return false;
      }
      out.reason = ParseRoutineWaitingReason(*routine_waiting_reason_as_string);
      if (out.reason == RoutineWaitingReason()) {
        return false;
      }
    }
    } else {
    out.reason = RoutineWaitingReason();
  }

  const base::Value* message_value = dict.Find("message");
  if (message_value) {
    {
      auto* temp = (*message_value).GetIfString();
      if (!temp) {
        out.message = std::nullopt;
        return false;
      }
      out.message = *temp;
    }
  }

  return true;
}

// static
bool RoutineWaitingInfo::Populate(
    const base::Value& value, RoutineWaitingInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RoutineWaitingInfo> RoutineWaitingInfo::FromValue(const base::Value::Dict& value) {
  RoutineWaitingInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RoutineWaitingInfo> RoutineWaitingInfo::FromValue(const base::Value& value) {
  RoutineWaitingInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RoutineWaitingInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->uuid) {
    to_value_result.Set("uuid", *this->uuid);

  }
  if (this->percentage) {
    to_value_result.Set("percentage", *this->percentage);

  }
  if (this->reason != RoutineWaitingReason()) {
    to_value_result.Set("reason", os_diagnostics::ToString(this->reason));

  }
  if (this->message) {
    to_value_result.Set("message", *this->message);

  }

  return to_value_result;
}


const char* ToString(ExceptionReason enum_param) {
  switch (enum_param) {
    case ExceptionReason::kUnknown:
      return "unknown";
    case ExceptionReason::kUnexpected:
      return "unexpected";
    case ExceptionReason::kUnsupported:
      return "unsupported";
    case ExceptionReason::kAppUiClosed:
      return "app_ui_closed";
    case ExceptionReason::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ExceptionReason ParseExceptionReason(base::StringPiece enum_string) {
  if (enum_string == "unknown")
    return ExceptionReason::kUnknown;
  if (enum_string == "unexpected")
    return ExceptionReason::kUnexpected;
  if (enum_string == "unsupported")
    return ExceptionReason::kUnsupported;
  if (enum_string == "app_ui_closed")
    return ExceptionReason::kAppUiClosed;
  return ExceptionReason::kNone;
}

std::u16string GetExceptionReasonParseError(base::StringPiece enum_string) {
  return u"expected \"unknown\" or \"unexpected\" or \"unsupported\" or \"app_ui_closed\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ExceptionInfo::ExceptionInfo()
: reason() {}

ExceptionInfo::~ExceptionInfo() = default;
ExceptionInfo::ExceptionInfo(ExceptionInfo&& rhs) noexcept = default;
ExceptionInfo& ExceptionInfo::operator=(ExceptionInfo&& rhs) noexcept = default;
ExceptionInfo ExceptionInfo::Clone() const {
  ExceptionInfo out;
  out.uuid = uuid;
  out.reason = reason;
  out.debug_message = debug_message;
  return out;
}

// static
bool ExceptionInfo::Populate(
    const base::Value::Dict& dict, ExceptionInfo& out) {
  const base::Value* uuid_value = dict.Find("uuid");
  if (uuid_value) {
    {
      auto* temp = (*uuid_value).GetIfString();
      if (!temp) {
        out.uuid = std::nullopt;
        return false;
      }
      out.uuid = *temp;
    }
  }

  const base::Value* reason_value = dict.Find("reason");
  if (!reason_value) {
    return false;
  }
  {
    const std::string* exception_reason_as_string = (*reason_value).GetIfString();
    if (!exception_reason_as_string) {
      return false;
    }
    out.reason = ParseExceptionReason(*exception_reason_as_string);
    if (out.reason == ExceptionReason()) {
      return false;
    }
  }

  const base::Value* debug_message_value = dict.Find("debugMessage");
  if (debug_message_value) {
    {
      auto* temp = (*debug_message_value).GetIfString();
      if (!temp) {
        out.debug_message = std::nullopt;
        return false;
      }
      out.debug_message = *temp;
    }
  }

  return true;
}

// static
bool ExceptionInfo::Populate(
    const base::Value& value, ExceptionInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ExceptionInfo> ExceptionInfo::FromValue(const base::Value::Dict& value) {
  ExceptionInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ExceptionInfo> ExceptionInfo::FromValue(const base::Value& value) {
  ExceptionInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ExceptionInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->uuid) {
    to_value_result.Set("uuid", *this->uuid);

  }
  to_value_result.Set("reason", os_diagnostics::ToString(this->reason));

  if (this->debug_message) {
    to_value_result.Set("debugMessage", *this->debug_message);

  }

  return to_value_result;
}


const char* ToString(MemtesterTestItemEnum enum_param) {
  switch (enum_param) {
    case MemtesterTestItemEnum::kUnknown:
      return "unknown";
    case MemtesterTestItemEnum::kStuckAddress:
      return "stuck_address";
    case MemtesterTestItemEnum::kCompareAnd:
      return "compare_and";
    case MemtesterTestItemEnum::kCompareDiv:
      return "compare_div";
    case MemtesterTestItemEnum::kCompareMul:
      return "compare_mul";
    case MemtesterTestItemEnum::kCompareOr:
      return "compare_or";
    case MemtesterTestItemEnum::kCompareSub:
      return "compare_sub";
    case MemtesterTestItemEnum::kCompareXor:
      return "compare_xor";
    case MemtesterTestItemEnum::kSequentialIncrement:
      return "sequential_increment";
    case MemtesterTestItemEnum::kBitFlip:
      return "bit_flip";
    case MemtesterTestItemEnum::kBitSpread:
      return "bit_spread";
    case MemtesterTestItemEnum::kBlockSequential:
      return "block_sequential";
    case MemtesterTestItemEnum::kCheckerboard:
      return "checkerboard";
    case MemtesterTestItemEnum::kRandomValue:
      return "random_value";
    case MemtesterTestItemEnum::kSolidBits:
      return "solid_bits";
    case MemtesterTestItemEnum::kWalkingOnes:
      return "walking_ones";
    case MemtesterTestItemEnum::kWalkingZeroes:
      return "walking_zeroes";
    case MemtesterTestItemEnum::kEightBitWrites:
      return "eight_bit_writes";
    case MemtesterTestItemEnum::kSixteenBitWrites:
      return "sixteen_bit_writes";
    case MemtesterTestItemEnum::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

MemtesterTestItemEnum ParseMemtesterTestItemEnum(base::StringPiece enum_string) {
  if (enum_string == "unknown")
    return MemtesterTestItemEnum::kUnknown;
  if (enum_string == "stuck_address")
    return MemtesterTestItemEnum::kStuckAddress;
  if (enum_string == "compare_and")
    return MemtesterTestItemEnum::kCompareAnd;
  if (enum_string == "compare_div")
    return MemtesterTestItemEnum::kCompareDiv;
  if (enum_string == "compare_mul")
    return MemtesterTestItemEnum::kCompareMul;
  if (enum_string == "compare_or")
    return MemtesterTestItemEnum::kCompareOr;
  if (enum_string == "compare_sub")
    return MemtesterTestItemEnum::kCompareSub;
  if (enum_string == "compare_xor")
    return MemtesterTestItemEnum::kCompareXor;
  if (enum_string == "sequential_increment")
    return MemtesterTestItemEnum::kSequentialIncrement;
  if (enum_string == "bit_flip")
    return MemtesterTestItemEnum::kBitFlip;
  if (enum_string == "bit_spread")
    return MemtesterTestItemEnum::kBitSpread;
  if (enum_string == "block_sequential")
    return MemtesterTestItemEnum::kBlockSequential;
  if (enum_string == "checkerboard")
    return MemtesterTestItemEnum::kCheckerboard;
  if (enum_string == "random_value")
    return MemtesterTestItemEnum::kRandomValue;
  if (enum_string == "solid_bits")
    return MemtesterTestItemEnum::kSolidBits;
  if (enum_string == "walking_ones")
    return MemtesterTestItemEnum::kWalkingOnes;
  if (enum_string == "walking_zeroes")
    return MemtesterTestItemEnum::kWalkingZeroes;
  if (enum_string == "eight_bit_writes")
    return MemtesterTestItemEnum::kEightBitWrites;
  if (enum_string == "sixteen_bit_writes")
    return MemtesterTestItemEnum::kSixteenBitWrites;
  return MemtesterTestItemEnum::kNone;
}

std::u16string GetMemtesterTestItemEnumParseError(base::StringPiece enum_string) {
  return u"expected \"unknown\" or \"stuck_address\" or \"compare_and\" or \"compare_div\" or \"compare_mul\" or \"compare_or\" or \"compare_sub\" or \"compare_xor\" or \"sequential_increment\" or \"bit_flip\" or \"bit_spread\" or \"block_sequential\" or \"checkerboard\" or \"random_value\" or \"solid_bits\" or \"walking_ones\" or \"walking_zeroes\" or \"eight_bit_writes\" or \"sixteen_bit_writes\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


MemtesterResult::MemtesterResult()
 {}

MemtesterResult::~MemtesterResult() = default;
MemtesterResult::MemtesterResult(MemtesterResult&& rhs) noexcept = default;
MemtesterResult& MemtesterResult::operator=(MemtesterResult&& rhs) noexcept = default;
MemtesterResult MemtesterResult::Clone() const {
  MemtesterResult out;
  out.passed_items = passed_items;
  out.failed_items = failed_items;
  return out;
}

// static
bool MemtesterResult::Populate(
    const base::Value::Dict& dict, MemtesterResult& out) {
  const base::Value* passed_items_value = dict.Find("passed_items");
  if (!passed_items_value) {
    return false;
  }
  {
    if (!(*passed_items_value).is_list()) {
      return false;
    }
    else {
      for (const auto& it : ((*passed_items_value)).GetList()) {
        MemtesterTestItemEnum tmp;
        const std::string* memtester_test_item_enum_as_string = (it).GetIfString();
        if (!memtester_test_item_enum_as_string) {
          return false;
        }
        tmp = ParseMemtesterTestItemEnum(*memtester_test_item_enum_as_string);
        if (tmp == MemtesterTestItemEnum()) {
          return false;
        }
        out.passed_items.push_back(tmp);
      }
    }
  }

  const base::Value* failed_items_value = dict.Find("failed_items");
  if (!failed_items_value) {
    return false;
  }
  {
    if (!(*failed_items_value).is_list()) {
      return false;
    }
    else {
      for (const auto& it : ((*failed_items_value)).GetList()) {
        MemtesterTestItemEnum tmp;
        const std::string* memtester_test_item_enum_as_string = (it).GetIfString();
        if (!memtester_test_item_enum_as_string) {
          return false;
        }
        tmp = ParseMemtesterTestItemEnum(*memtester_test_item_enum_as_string);
        if (tmp == MemtesterTestItemEnum()) {
          return false;
        }
        out.failed_items.push_back(tmp);
      }
    }
  }

  return true;
}

// static
bool MemtesterResult::Populate(
    const base::Value& value, MemtesterResult& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<MemtesterResult> MemtesterResult::FromValue(const base::Value::Dict& value) {
  MemtesterResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<MemtesterResult> MemtesterResult::FromValue(const base::Value& value) {
  MemtesterResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict MemtesterResult::ToValue() const {
  base::Value::Dict to_value_result;

  {
    std::vector<std::string> passed_items_list;
    for (const auto& it : (this->passed_items)) {
      passed_items_list.emplace_back(os_diagnostics::ToString(it));
    }
    to_value_result.Set("passed_items", json_schema_compiler::util::CreateValueFromArray(passed_items_list));
  }

  {
    std::vector<std::string> failed_items_list;
    for (const auto& it : (this->failed_items)) {
      failed_items_list.emplace_back(os_diagnostics::ToString(it));
    }
    to_value_result.Set("failed_items", json_schema_compiler::util::CreateValueFromArray(failed_items_list));
  }


  return to_value_result;
}


MemoryRoutineFinishedInfo::MemoryRoutineFinishedInfo()
 {}

MemoryRoutineFinishedInfo::~MemoryRoutineFinishedInfo() = default;
MemoryRoutineFinishedInfo::MemoryRoutineFinishedInfo(MemoryRoutineFinishedInfo&& rhs) noexcept = default;
MemoryRoutineFinishedInfo& MemoryRoutineFinishedInfo::operator=(MemoryRoutineFinishedInfo&& rhs) noexcept = default;
MemoryRoutineFinishedInfo MemoryRoutineFinishedInfo::Clone() const {
  MemoryRoutineFinishedInfo out;
  out.uuid = uuid;
  out.has_passed = has_passed;
  out.bytes_tested = bytes_tested;
  if (result) {
    out.result = result->Clone();
  }
  return out;
}

// static
bool MemoryRoutineFinishedInfo::Populate(
    const base::Value::Dict& dict, MemoryRoutineFinishedInfo& out) {
  const base::Value* uuid_value = dict.Find("uuid");
  if (uuid_value) {
    {
      auto* temp = (*uuid_value).GetIfString();
      if (!temp) {
        out.uuid = std::nullopt;
        return false;
      }
      out.uuid = *temp;
    }
  }

  const base::Value* has_passed_value = dict.Find("has_passed");
  if (has_passed_value) {
    {
      auto temp = (*has_passed_value).GetIfBool();
      if (!temp.has_value()) {
        out.has_passed = std::nullopt;
        return false;
      }
      out.has_passed = *temp;
    }
  }

  const base::Value* bytes_tested_value = dict.Find("bytesTested");
  if (bytes_tested_value) {
    {
      auto temp = (*bytes_tested_value).GetIfDouble();
      if (!temp.has_value()) {
        out.bytes_tested = std::nullopt;
        return false;
      }
      out.bytes_tested = *temp;
    }
  }

  const base::Value* result_value = dict.Find("result");
  if (result_value) {
    {
      if (!(*result_value).is_dict()) {
        return false;
      }
      else {
        MemtesterResult temp;
        if (!MemtesterResult::Populate((*result_value).GetDict(), temp))
          return false;
        out.result = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool MemoryRoutineFinishedInfo::Populate(
    const base::Value& value, MemoryRoutineFinishedInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<MemoryRoutineFinishedInfo> MemoryRoutineFinishedInfo::FromValue(const base::Value::Dict& value) {
  MemoryRoutineFinishedInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<MemoryRoutineFinishedInfo> MemoryRoutineFinishedInfo::FromValue(const base::Value& value) {
  MemoryRoutineFinishedInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict MemoryRoutineFinishedInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->uuid) {
    to_value_result.Set("uuid", *this->uuid);

  }
  if (this->has_passed) {
    to_value_result.Set("has_passed", *this->has_passed);

  }
  if (this->bytes_tested) {
    to_value_result.Set("bytesTested", *this->bytes_tested);

  }
  if (this->result) {
    to_value_result.Set("result", (this->result)->ToValue());

  }

  return to_value_result;
}


RunMemoryRoutineArguments::RunMemoryRoutineArguments()
 {}

RunMemoryRoutineArguments::~RunMemoryRoutineArguments() = default;
RunMemoryRoutineArguments::RunMemoryRoutineArguments(RunMemoryRoutineArguments&& rhs) noexcept = default;
RunMemoryRoutineArguments& RunMemoryRoutineArguments::operator=(RunMemoryRoutineArguments&& rhs) noexcept = default;
RunMemoryRoutineArguments RunMemoryRoutineArguments::Clone() const {
  RunMemoryRoutineArguments out;
  out.max_testing_mem_kib = max_testing_mem_kib;
  return out;
}

// static
bool RunMemoryRoutineArguments::Populate(
    const base::Value::Dict& dict, RunMemoryRoutineArguments& out) {
  const base::Value* max_testing_mem_kib_value = dict.Find("maxTestingMemKib");
  if (max_testing_mem_kib_value) {
    {
      auto temp = (*max_testing_mem_kib_value).GetIfInt();
      if (!temp.has_value()) {
        out.max_testing_mem_kib = std::nullopt;
        return false;
      }
      out.max_testing_mem_kib = *temp;
    }
  }

  return true;
}

// static
bool RunMemoryRoutineArguments::Populate(
    const base::Value& value, RunMemoryRoutineArguments& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RunMemoryRoutineArguments> RunMemoryRoutineArguments::FromValue(const base::Value::Dict& value) {
  RunMemoryRoutineArguments out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RunMemoryRoutineArguments> RunMemoryRoutineArguments::FromValue(const base::Value& value) {
  RunMemoryRoutineArguments out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RunMemoryRoutineArguments::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->max_testing_mem_kib) {
    to_value_result.Set("maxTestingMemKib", *this->max_testing_mem_kib);

  }

  return to_value_result;
}


const char* ToString(VolumeButtonType enum_param) {
  switch (enum_param) {
    case VolumeButtonType::kVolumeUp:
      return "volume_up";
    case VolumeButtonType::kVolumeDown:
      return "volume_down";
    case VolumeButtonType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

VolumeButtonType ParseVolumeButtonType(base::StringPiece enum_string) {
  if (enum_string == "volume_up")
    return VolumeButtonType::kVolumeUp;
  if (enum_string == "volume_down")
    return VolumeButtonType::kVolumeDown;
  return VolumeButtonType::kNone;
}

std::u16string GetVolumeButtonTypeParseError(base::StringPiece enum_string) {
  return u"expected \"volume_up\" or \"volume_down\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


VolumeButtonRoutineFinishedInfo::VolumeButtonRoutineFinishedInfo()
 {}

VolumeButtonRoutineFinishedInfo::~VolumeButtonRoutineFinishedInfo() = default;
VolumeButtonRoutineFinishedInfo::VolumeButtonRoutineFinishedInfo(VolumeButtonRoutineFinishedInfo&& rhs) noexcept = default;
VolumeButtonRoutineFinishedInfo& VolumeButtonRoutineFinishedInfo::operator=(VolumeButtonRoutineFinishedInfo&& rhs) noexcept = default;
VolumeButtonRoutineFinishedInfo VolumeButtonRoutineFinishedInfo::Clone() const {
  VolumeButtonRoutineFinishedInfo out;
  out.uuid = uuid;
  out.has_passed = has_passed;
  return out;
}

// static
bool VolumeButtonRoutineFinishedInfo::Populate(
    const base::Value::Dict& dict, VolumeButtonRoutineFinishedInfo& out) {
  const base::Value* uuid_value = dict.Find("uuid");
  if (uuid_value) {
    {
      auto* temp = (*uuid_value).GetIfString();
      if (!temp) {
        out.uuid = std::nullopt;
        return false;
      }
      out.uuid = *temp;
    }
  }

  const base::Value* has_passed_value = dict.Find("has_passed");
  if (has_passed_value) {
    {
      auto temp = (*has_passed_value).GetIfBool();
      if (!temp.has_value()) {
        out.has_passed = std::nullopt;
        return false;
      }
      out.has_passed = *temp;
    }
  }

  return true;
}

// static
bool VolumeButtonRoutineFinishedInfo::Populate(
    const base::Value& value, VolumeButtonRoutineFinishedInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<VolumeButtonRoutineFinishedInfo> VolumeButtonRoutineFinishedInfo::FromValue(const base::Value::Dict& value) {
  VolumeButtonRoutineFinishedInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<VolumeButtonRoutineFinishedInfo> VolumeButtonRoutineFinishedInfo::FromValue(const base::Value& value) {
  VolumeButtonRoutineFinishedInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict VolumeButtonRoutineFinishedInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->uuid) {
    to_value_result.Set("uuid", *this->uuid);

  }
  if (this->has_passed) {
    to_value_result.Set("has_passed", *this->has_passed);

  }

  return to_value_result;
}


RunVolumeButtonRoutineArguments::RunVolumeButtonRoutineArguments()
: button_type(),
timeout_seconds(0) {}

RunVolumeButtonRoutineArguments::~RunVolumeButtonRoutineArguments() = default;
RunVolumeButtonRoutineArguments::RunVolumeButtonRoutineArguments(RunVolumeButtonRoutineArguments&& rhs) noexcept = default;
RunVolumeButtonRoutineArguments& RunVolumeButtonRoutineArguments::operator=(RunVolumeButtonRoutineArguments&& rhs) noexcept = default;
RunVolumeButtonRoutineArguments RunVolumeButtonRoutineArguments::Clone() const {
  RunVolumeButtonRoutineArguments out;
  out.button_type = button_type;
  out.timeout_seconds = timeout_seconds;
  return out;
}

// static
bool RunVolumeButtonRoutineArguments::Populate(
    const base::Value::Dict& dict, RunVolumeButtonRoutineArguments& out) {
  const base::Value* button_type_value = dict.Find("button_type");
  if (!button_type_value) {
    return false;
  }
  {
    const std::string* volume_button_type_as_string = (*button_type_value).GetIfString();
    if (!volume_button_type_as_string) {
      return false;
    }
    out.button_type = ParseVolumeButtonType(*volume_button_type_as_string);
    if (out.button_type == VolumeButtonType()) {
      return false;
    }
  }

  const base::Value* timeout_seconds_value = dict.Find("timeout_seconds");
  if (!timeout_seconds_value) {
    return false;
  }
  {
    auto temp = (*timeout_seconds_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.timeout_seconds = *temp;
  }

  return true;
}

// static
bool RunVolumeButtonRoutineArguments::Populate(
    const base::Value& value, RunVolumeButtonRoutineArguments& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RunVolumeButtonRoutineArguments> RunVolumeButtonRoutineArguments::FromValue(const base::Value::Dict& value) {
  RunVolumeButtonRoutineArguments out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RunVolumeButtonRoutineArguments> RunVolumeButtonRoutineArguments::FromValue(const base::Value& value) {
  RunVolumeButtonRoutineArguments out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RunVolumeButtonRoutineArguments::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("button_type", os_diagnostics::ToString(this->button_type));

  to_value_result.Set("timeout_seconds", this->timeout_seconds);


  return to_value_result;
}


const char* ToString(HardwarePresenceStatus enum_param) {
  switch (enum_param) {
    case HardwarePresenceStatus::kMatched:
      return "matched";
    case HardwarePresenceStatus::kNotMatched:
      return "not_matched";
    case HardwarePresenceStatus::kNotConfigured:
      return "not_configured";
    case HardwarePresenceStatus::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

HardwarePresenceStatus ParseHardwarePresenceStatus(base::StringPiece enum_string) {
  if (enum_string == "matched")
    return HardwarePresenceStatus::kMatched;
  if (enum_string == "not_matched")
    return HardwarePresenceStatus::kNotMatched;
  if (enum_string == "not_configured")
    return HardwarePresenceStatus::kNotConfigured;
  return HardwarePresenceStatus::kNone;
}

std::u16string GetHardwarePresenceStatusParseError(base::StringPiece enum_string) {
  return u"expected \"matched\" or \"not_matched\" or \"not_configured\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


FanRoutineFinishedInfo::FanRoutineFinishedInfo()
: fan_count_status() {}

FanRoutineFinishedInfo::~FanRoutineFinishedInfo() = default;
FanRoutineFinishedInfo::FanRoutineFinishedInfo(FanRoutineFinishedInfo&& rhs) noexcept = default;
FanRoutineFinishedInfo& FanRoutineFinishedInfo::operator=(FanRoutineFinishedInfo&& rhs) noexcept = default;
FanRoutineFinishedInfo FanRoutineFinishedInfo::Clone() const {
  FanRoutineFinishedInfo out;
  out.uuid = uuid;
  out.has_passed = has_passed;
  out.passed_fan_ids = passed_fan_ids;
  out.failed_fan_ids = failed_fan_ids;
  out.fan_count_status = fan_count_status;
  return out;
}

// static
bool FanRoutineFinishedInfo::Populate(
    const base::Value::Dict& dict, FanRoutineFinishedInfo& out) {
  out.fan_count_status = HardwarePresenceStatus();
  const base::Value* uuid_value = dict.Find("uuid");
  if (uuid_value) {
    {
      auto* temp = (*uuid_value).GetIfString();
      if (!temp) {
        out.uuid = std::nullopt;
        return false;
      }
      out.uuid = *temp;
    }
  }

  const base::Value* has_passed_value = dict.Find("has_passed");
  if (has_passed_value) {
    {
      auto temp = (*has_passed_value).GetIfBool();
      if (!temp.has_value()) {
        out.has_passed = std::nullopt;
        return false;
      }
      out.has_passed = *temp;
    }
  }

  const base::Value* passed_fan_ids_value = dict.Find("passed_fan_ids");
  if (passed_fan_ids_value) {
    {
      if (!(*passed_fan_ids_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*passed_fan_ids_value).GetList(), out.passed_fan_ids)) {
          return false;
        }
      }
    }
  }

  const base::Value* failed_fan_ids_value = dict.Find("failed_fan_ids");
  if (failed_fan_ids_value) {
    {
      if (!(*failed_fan_ids_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*failed_fan_ids_value).GetList(), out.failed_fan_ids)) {
          return false;
        }
      }
    }
  }

  const base::Value* fan_count_status_value = dict.Find("fan_count_status");
  if (fan_count_status_value) {
    {
      const std::string* hardware_presence_status_as_string = (*fan_count_status_value).GetIfString();
      if (!hardware_presence_status_as_string) {
        return false;
      }
      out.fan_count_status = ParseHardwarePresenceStatus(*hardware_presence_status_as_string);
      if (out.fan_count_status == HardwarePresenceStatus()) {
        return false;
      }
    }
    } else {
    out.fan_count_status = HardwarePresenceStatus();
  }

  return true;
}

// static
bool FanRoutineFinishedInfo::Populate(
    const base::Value& value, FanRoutineFinishedInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<FanRoutineFinishedInfo> FanRoutineFinishedInfo::FromValue(const base::Value::Dict& value) {
  FanRoutineFinishedInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<FanRoutineFinishedInfo> FanRoutineFinishedInfo::FromValue(const base::Value& value) {
  FanRoutineFinishedInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict FanRoutineFinishedInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->uuid) {
    to_value_result.Set("uuid", *this->uuid);

  }
  if (this->has_passed) {
    to_value_result.Set("has_passed", *this->has_passed);

  }
  if (this->passed_fan_ids) {
    to_value_result.Set("passed_fan_ids", json_schema_compiler::util::CreateValueFromArray(*this->passed_fan_ids));

  }
  if (this->failed_fan_ids) {
    to_value_result.Set("failed_fan_ids", json_schema_compiler::util::CreateValueFromArray(*this->failed_fan_ids));

  }
  if (this->fan_count_status != HardwarePresenceStatus()) {
    to_value_result.Set("fan_count_status", os_diagnostics::ToString(this->fan_count_status));

  }

  return to_value_result;
}


RunFanRoutineArguments::RunFanRoutineArguments()
 {}

RunFanRoutineArguments::~RunFanRoutineArguments() = default;
RunFanRoutineArguments::RunFanRoutineArguments(RunFanRoutineArguments&& rhs) noexcept = default;
RunFanRoutineArguments& RunFanRoutineArguments::operator=(RunFanRoutineArguments&& rhs) noexcept = default;
RunFanRoutineArguments RunFanRoutineArguments::Clone() const {
  RunFanRoutineArguments out;
  return out;
}

// static
bool RunFanRoutineArguments::Populate(
    const base::Value::Dict& dict, RunFanRoutineArguments& out) {
  return true;
}

// static
bool RunFanRoutineArguments::Populate(
    const base::Value& value, RunFanRoutineArguments& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RunFanRoutineArguments> RunFanRoutineArguments::FromValue(const base::Value::Dict& value) {
  RunFanRoutineArguments out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RunFanRoutineArguments> RunFanRoutineArguments::FromValue(const base::Value& value) {
  RunFanRoutineArguments out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RunFanRoutineArguments::ToValue() const {
  base::Value::Dict to_value_result;


  return to_value_result;
}


CreateRoutineResponse::CreateRoutineResponse()
 {}

CreateRoutineResponse::~CreateRoutineResponse() = default;
CreateRoutineResponse::CreateRoutineResponse(CreateRoutineResponse&& rhs) noexcept = default;
CreateRoutineResponse& CreateRoutineResponse::operator=(CreateRoutineResponse&& rhs) noexcept = default;
CreateRoutineResponse CreateRoutineResponse::Clone() const {
  CreateRoutineResponse out;
  out.uuid = uuid;
  return out;
}

// static
bool CreateRoutineResponse::Populate(
    const base::Value::Dict& dict, CreateRoutineResponse& out) {
  const base::Value* uuid_value = dict.Find("uuid");
  if (uuid_value) {
    {
      auto* temp = (*uuid_value).GetIfString();
      if (!temp) {
        out.uuid = std::nullopt;
        return false;
      }
      out.uuid = *temp;
    }
  }

  return true;
}

// static
bool CreateRoutineResponse::Populate(
    const base::Value& value, CreateRoutineResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CreateRoutineResponse> CreateRoutineResponse::FromValue(const base::Value::Dict& value) {
  CreateRoutineResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CreateRoutineResponse> CreateRoutineResponse::FromValue(const base::Value& value) {
  CreateRoutineResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict CreateRoutineResponse::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->uuid) {
    to_value_result.Set("uuid", *this->uuid);

  }

  return to_value_result;
}


const char* ToString(RoutineSupportStatus enum_param) {
  switch (enum_param) {
    case RoutineSupportStatus::kSupported:
      return "supported";
    case RoutineSupportStatus::kUnsupported:
      return "unsupported";
    case RoutineSupportStatus::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

RoutineSupportStatus ParseRoutineSupportStatus(base::StringPiece enum_string) {
  if (enum_string == "supported")
    return RoutineSupportStatus::kSupported;
  if (enum_string == "unsupported")
    return RoutineSupportStatus::kUnsupported;
  return RoutineSupportStatus::kNone;
}

std::u16string GetRoutineSupportStatusParseError(base::StringPiece enum_string) {
  return u"expected \"supported\" or \"unsupported\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


RoutineSupportStatusInfo::RoutineSupportStatusInfo()
: status() {}

RoutineSupportStatusInfo::~RoutineSupportStatusInfo() = default;
RoutineSupportStatusInfo::RoutineSupportStatusInfo(RoutineSupportStatusInfo&& rhs) noexcept = default;
RoutineSupportStatusInfo& RoutineSupportStatusInfo::operator=(RoutineSupportStatusInfo&& rhs) noexcept = default;
RoutineSupportStatusInfo RoutineSupportStatusInfo::Clone() const {
  RoutineSupportStatusInfo out;
  out.status = status;
  return out;
}

// static
bool RoutineSupportStatusInfo::Populate(
    const base::Value::Dict& dict, RoutineSupportStatusInfo& out) {
  out.status = RoutineSupportStatus();
  const base::Value* status_value = dict.Find("status");
  if (status_value) {
    {
      const std::string* routine_support_status_as_string = (*status_value).GetIfString();
      if (!routine_support_status_as_string) {
        return false;
      }
      out.status = ParseRoutineSupportStatus(*routine_support_status_as_string);
      if (out.status == RoutineSupportStatus()) {
        return false;
      }
    }
    } else {
    out.status = RoutineSupportStatus();
  }

  return true;
}

// static
bool RoutineSupportStatusInfo::Populate(
    const base::Value& value, RoutineSupportStatusInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RoutineSupportStatusInfo> RoutineSupportStatusInfo::FromValue(const base::Value::Dict& value) {
  RoutineSupportStatusInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RoutineSupportStatusInfo> RoutineSupportStatusInfo::FromValue(const base::Value& value) {
  RoutineSupportStatusInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RoutineSupportStatusInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->status != RoutineSupportStatus()) {
    to_value_result.Set("status", os_diagnostics::ToString(this->status));

  }

  return to_value_result;
}


StartRoutineRequest::StartRoutineRequest()
 {}

StartRoutineRequest::~StartRoutineRequest() = default;
StartRoutineRequest::StartRoutineRequest(StartRoutineRequest&& rhs) noexcept = default;
StartRoutineRequest& StartRoutineRequest::operator=(StartRoutineRequest&& rhs) noexcept = default;
StartRoutineRequest StartRoutineRequest::Clone() const {
  StartRoutineRequest out;
  out.uuid = uuid;
  return out;
}

// static
bool StartRoutineRequest::Populate(
    const base::Value::Dict& dict, StartRoutineRequest& out) {
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

  return true;
}

// static
bool StartRoutineRequest::Populate(
    const base::Value& value, StartRoutineRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<StartRoutineRequest> StartRoutineRequest::FromValue(const base::Value::Dict& value) {
  StartRoutineRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<StartRoutineRequest> StartRoutineRequest::FromValue(const base::Value& value) {
  StartRoutineRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict StartRoutineRequest::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("uuid", this->uuid);


  return to_value_result;
}


CancelRoutineRequest::CancelRoutineRequest()
 {}

CancelRoutineRequest::~CancelRoutineRequest() = default;
CancelRoutineRequest::CancelRoutineRequest(CancelRoutineRequest&& rhs) noexcept = default;
CancelRoutineRequest& CancelRoutineRequest::operator=(CancelRoutineRequest&& rhs) noexcept = default;
CancelRoutineRequest CancelRoutineRequest::Clone() const {
  CancelRoutineRequest out;
  out.uuid = uuid;
  return out;
}

// static
bool CancelRoutineRequest::Populate(
    const base::Value::Dict& dict, CancelRoutineRequest& out) {
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

  return true;
}

// static
bool CancelRoutineRequest::Populate(
    const base::Value& value, CancelRoutineRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CancelRoutineRequest> CancelRoutineRequest::FromValue(const base::Value::Dict& value) {
  CancelRoutineRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CancelRoutineRequest> CancelRoutineRequest::FromValue(const base::Value& value) {
  CancelRoutineRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict CancelRoutineRequest::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("uuid", this->uuid);


  return to_value_result;
}



//
// Functions
//

namespace GetAvailableRoutines {

base::Value::List Results::Create(const GetAvailableRoutinesResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace GetAvailableRoutines

namespace GetRoutineUpdate {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return std::nullopt;
      }
      if (!GetRoutineUpdateRequest::Populate(request_value.GetDict(), params.request)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const GetRoutineUpdateResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace GetRoutineUpdate

namespace RunAcPowerRoutine {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return std::nullopt;
      }
      if (!RunAcPowerRoutineRequest::Populate(request_value.GetDict(), params.request)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunAcPowerRoutine

namespace RunBatteryCapacityRoutine {

base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunBatteryCapacityRoutine

namespace RunBatteryChargeRoutine {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return std::nullopt;
      }
      if (!RunBatteryChargeRoutineRequest::Populate(request_value.GetDict(), params.request)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunBatteryChargeRoutine

namespace RunBatteryDischargeRoutine {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return std::nullopt;
      }
      if (!RunBatteryDischargeRoutineRequest::Populate(request_value.GetDict(), params.request)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunBatteryDischargeRoutine

namespace RunBatteryHealthRoutine {

base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunBatteryHealthRoutine

namespace RunBluetoothDiscoveryRoutine {

base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunBluetoothDiscoveryRoutine

namespace RunBluetoothPairingRoutine {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return std::nullopt;
      }
      if (!RunBluetoothPairingRoutineRequest::Populate(request_value.GetDict(), params.request)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunBluetoothPairingRoutine

namespace RunBluetoothPowerRoutine {

base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunBluetoothPowerRoutine

namespace RunBluetoothScanningRoutine {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return std::nullopt;
      }
      if (!RunBluetoothScanningRoutineRequest::Populate(request_value.GetDict(), params.request)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunBluetoothScanningRoutine

namespace RunCpuCacheRoutine {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return std::nullopt;
      }
      if (!RunCpuRoutineRequest::Populate(request_value.GetDict(), params.request)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunCpuCacheRoutine

namespace RunCpuFloatingPointAccuracyRoutine {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return std::nullopt;
      }
      if (!RunCpuRoutineRequest::Populate(request_value.GetDict(), params.request)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunCpuFloatingPointAccuracyRoutine

namespace RunCpuPrimeSearchRoutine {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return std::nullopt;
      }
      if (!RunCpuRoutineRequest::Populate(request_value.GetDict(), params.request)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunCpuPrimeSearchRoutine

namespace RunCpuStressRoutine {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return std::nullopt;
      }
      if (!RunCpuRoutineRequest::Populate(request_value.GetDict(), params.request)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunCpuStressRoutine

namespace RunDiskReadRoutine {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return std::nullopt;
      }
      if (!RunDiskReadRequest::Populate(request_value.GetDict(), params.request)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunDiskReadRoutine

namespace RunDnsResolutionRoutine {

base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunDnsResolutionRoutine

namespace RunDnsResolverPresentRoutine {

base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunDnsResolverPresentRoutine

namespace RunEmmcLifetimeRoutine {

base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunEmmcLifetimeRoutine

namespace RunFingerprintAliveRoutine {

base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunFingerprintAliveRoutine

namespace RunGatewayCanBePingedRoutine {

base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunGatewayCanBePingedRoutine

namespace RunLanConnectivityRoutine {

base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunLanConnectivityRoutine

namespace RunMemoryRoutine {

base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunMemoryRoutine

namespace RunNvmeSelfTestRoutine {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return std::nullopt;
      }
      if (!RunNvmeSelfTestRequest::Populate(request_value.GetDict(), params.request)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunNvmeSelfTestRoutine

namespace RunNvmeWearLevelRoutine {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return std::nullopt;
      }
      if (!RunNvmeWearLevelRequest::Populate(request_value.GetDict(), params.request)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunNvmeWearLevelRoutine

namespace RunSensitiveSensorRoutine {

base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunSensitiveSensorRoutine

namespace RunSignalStrengthRoutine {

base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunSignalStrengthRoutine

namespace RunSmartctlCheckRoutine {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return std::nullopt;
      }
      else {
        RunSmartctlCheckRequest temp;
        if (!RunSmartctlCheckRequest::Populate(request_value.GetDict(), temp))
          return std::nullopt;
        params.request = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunSmartctlCheckRoutine

namespace RunUfsLifetimeRoutine {

base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunUfsLifetimeRoutine

namespace RunPowerButtonRoutine {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return std::nullopt;
      }
      if (!RunPowerButtonRequest::Populate(request_value.GetDict(), params.request)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunPowerButtonRoutine

namespace RunAudioDriverRoutine {

base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunAudioDriverRoutine

namespace RunFanRoutine {

base::Value::List Results::Create(const RunRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RunFanRoutine

namespace StartRoutine {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return std::nullopt;
      }
      if (!StartRoutineRequest::Populate(request_value.GetDict(), params.request)) {
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
}  // namespace StartRoutine

namespace CancelRoutine {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return std::nullopt;
      }
      if (!CancelRoutineRequest::Populate(request_value.GetDict(), params.request)) {
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
}  // namespace CancelRoutine

namespace CreateMemoryRoutine {

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
    const base::Value& args_value = args[0];
    {
      if (!args_value.is_dict()) {
        return std::nullopt;
      }
      if (!RunMemoryRoutineArguments::Populate(args_value.GetDict(), params.args)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const CreateRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace CreateMemoryRoutine

namespace IsMemoryRoutineArgumentSupported {

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
    const base::Value& args_value = args[0];
    {
      if (!args_value.is_dict()) {
        return std::nullopt;
      }
      if (!RunMemoryRoutineArguments::Populate(args_value.GetDict(), params.args)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const RoutineSupportStatusInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}
}  // namespace IsMemoryRoutineArgumentSupported

namespace CreateVolumeButtonRoutine {

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
    const base::Value& args_value = args[0];
    {
      if (!args_value.is_dict()) {
        return std::nullopt;
      }
      if (!RunVolumeButtonRoutineArguments::Populate(args_value.GetDict(), params.args)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const CreateRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace CreateVolumeButtonRoutine

namespace IsVolumeButtonRoutineArgumentSupported {

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
    const base::Value& args_value = args[0];
    {
      if (!args_value.is_dict()) {
        return std::nullopt;
      }
      if (!RunVolumeButtonRoutineArguments::Populate(args_value.GetDict(), params.args)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const RoutineSupportStatusInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}
}  // namespace IsVolumeButtonRoutineArgumentSupported

namespace CreateFanRoutine {

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
    const base::Value& args_value = args[0];
    {
      if (!args_value.is_dict()) {
        return std::nullopt;
      }
      if (!RunFanRoutineArguments::Populate(args_value.GetDict(), params.args)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const CreateRoutineResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace CreateFanRoutine

namespace IsFanRoutineArgumentSupported {

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
    const base::Value& args_value = args[0];
    {
      if (!args_value.is_dict()) {
        return std::nullopt;
      }
      if (!RunFanRoutineArguments::Populate(args_value.GetDict(), params.args)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const RoutineSupportStatusInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}
}  // namespace IsFanRoutineArgumentSupported

//
// Events
//

namespace OnRoutineInitialized {

const char kEventName[] = "os.diagnostics.onRoutineInitialized";

base::Value::List Create(const RoutineInitializedInfo& initialized_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((initialized_info).ToValue());

  return create_results;
}

}  // namespace OnRoutineInitialized

namespace OnRoutineRunning {

const char kEventName[] = "os.diagnostics.onRoutineRunning";

base::Value::List Create(const RoutineRunningInfo& running_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((running_info).ToValue());

  return create_results;
}

}  // namespace OnRoutineRunning

namespace OnRoutineWaiting {

const char kEventName[] = "os.diagnostics.onRoutineWaiting";

base::Value::List Create(const RoutineWaitingInfo& waiting_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((waiting_info).ToValue());

  return create_results;
}

}  // namespace OnRoutineWaiting

namespace OnMemoryRoutineFinished {

const char kEventName[] = "os.diagnostics.onMemoryRoutineFinished";

base::Value::List Create(const MemoryRoutineFinishedInfo& finished_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((finished_info).ToValue());

  return create_results;
}

}  // namespace OnMemoryRoutineFinished

namespace OnVolumeButtonRoutineFinished {

const char kEventName[] = "os.diagnostics.onVolumeButtonRoutineFinished";

base::Value::List Create(const VolumeButtonRoutineFinishedInfo& finished_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((finished_info).ToValue());

  return create_results;
}

}  // namespace OnVolumeButtonRoutineFinished

namespace OnFanRoutineFinished {

const char kEventName[] = "os.diagnostics.onFanRoutineFinished";

base::Value::List Create(const FanRoutineFinishedInfo& finished_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((finished_info).ToValue());

  return create_results;
}

}  // namespace OnFanRoutineFinished

namespace OnRoutineException {

const char kEventName[] = "os.diagnostics.onRoutineException";

base::Value::List Create(const ExceptionInfo& exception_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((exception_info).ToValue());

  return create_results;
}

}  // namespace OnRoutineException

}  // namespace os_diagnostics
}  // namespace api
}  // namespace chromeos

