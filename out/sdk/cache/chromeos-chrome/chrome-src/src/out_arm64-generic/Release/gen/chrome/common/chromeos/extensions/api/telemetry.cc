// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/chromeos/extensions/api/telemetry.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/chromeos/extensions/api/telemetry.h"

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

namespace chromeos {
namespace api {
namespace os_telemetry {
//
// Types
//

AudioInputNodeInfo::AudioInputNodeInfo()
 {}

AudioInputNodeInfo::~AudioInputNodeInfo() = default;
AudioInputNodeInfo::AudioInputNodeInfo(AudioInputNodeInfo&& rhs) = default;
AudioInputNodeInfo& AudioInputNodeInfo::operator=(AudioInputNodeInfo&& rhs) = default;
AudioInputNodeInfo AudioInputNodeInfo::Clone() const {
  AudioInputNodeInfo out;
  out.id = id;
  out.name = name;
  out.device_name = device_name;
  out.active = active;
  out.node_gain = node_gain;
  return out;
}

// static
bool AudioInputNodeInfo::Populate(
    const base::Value::Dict& dict, AudioInputNodeInfo& out) {
  const base::Value* id_value = dict.Find("id");
  if (id_value) {
    {
      auto temp = (*id_value).GetIfDouble();
      if (!temp.has_value()) {
        out.id = absl::nullopt;
        return false;
      }
      out.id = *temp;
    }
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

  const base::Value* device_name_value = dict.Find("deviceName");
  if (device_name_value) {
    {
      auto* temp = (*device_name_value).GetIfString();
      if (!temp) {
        out.device_name = absl::nullopt;
        return false;
      }
      out.device_name = *temp;
    }
  }

  const base::Value* active_value = dict.Find("active");
  if (active_value) {
    {
      auto temp = (*active_value).GetIfBool();
      if (!temp.has_value()) {
        out.active = absl::nullopt;
        return false;
      }
      out.active = *temp;
    }
  }

  const base::Value* node_gain_value = dict.Find("nodeGain");
  if (node_gain_value) {
    {
      auto temp = (*node_gain_value).GetIfInt();
      if (!temp.has_value()) {
        out.node_gain = absl::nullopt;
        return false;
      }
      out.node_gain = *temp;
    }
  }

  return true;
}

// static
bool AudioInputNodeInfo::Populate(
    const base::Value& value, AudioInputNodeInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<AudioInputNodeInfo> AudioInputNodeInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<AudioInputNodeInfo>();
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
absl::optional<AudioInputNodeInfo> AudioInputNodeInfo::FromValue(const base::Value::Dict& value) {
  AudioInputNodeInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<AudioInputNodeInfo> AudioInputNodeInfo::FromValue(const base::Value& value) {
  AudioInputNodeInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict AudioInputNodeInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->id) {
    to_value_result.Set("id", *this->id);

  }
  if (this->name) {
    to_value_result.Set("name", *this->name);

  }
  if (this->device_name) {
    to_value_result.Set("deviceName", *this->device_name);

  }
  if (this->active) {
    to_value_result.Set("active", *this->active);

  }
  if (this->node_gain) {
    to_value_result.Set("nodeGain", *this->node_gain);

  }

  return to_value_result;
}


AudioOutputNodeInfo::AudioOutputNodeInfo()
 {}

AudioOutputNodeInfo::~AudioOutputNodeInfo() = default;
AudioOutputNodeInfo::AudioOutputNodeInfo(AudioOutputNodeInfo&& rhs) = default;
AudioOutputNodeInfo& AudioOutputNodeInfo::operator=(AudioOutputNodeInfo&& rhs) = default;
AudioOutputNodeInfo AudioOutputNodeInfo::Clone() const {
  AudioOutputNodeInfo out;
  out.id = id;
  out.name = name;
  out.device_name = device_name;
  out.active = active;
  out.node_volume = node_volume;
  return out;
}

// static
bool AudioOutputNodeInfo::Populate(
    const base::Value::Dict& dict, AudioOutputNodeInfo& out) {
  const base::Value* id_value = dict.Find("id");
  if (id_value) {
    {
      auto temp = (*id_value).GetIfDouble();
      if (!temp.has_value()) {
        out.id = absl::nullopt;
        return false;
      }
      out.id = *temp;
    }
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

  const base::Value* device_name_value = dict.Find("deviceName");
  if (device_name_value) {
    {
      auto* temp = (*device_name_value).GetIfString();
      if (!temp) {
        out.device_name = absl::nullopt;
        return false;
      }
      out.device_name = *temp;
    }
  }

  const base::Value* active_value = dict.Find("active");
  if (active_value) {
    {
      auto temp = (*active_value).GetIfBool();
      if (!temp.has_value()) {
        out.active = absl::nullopt;
        return false;
      }
      out.active = *temp;
    }
  }

  const base::Value* node_volume_value = dict.Find("nodeVolume");
  if (node_volume_value) {
    {
      auto temp = (*node_volume_value).GetIfInt();
      if (!temp.has_value()) {
        out.node_volume = absl::nullopt;
        return false;
      }
      out.node_volume = *temp;
    }
  }

  return true;
}

// static
bool AudioOutputNodeInfo::Populate(
    const base::Value& value, AudioOutputNodeInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<AudioOutputNodeInfo> AudioOutputNodeInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<AudioOutputNodeInfo>();
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
absl::optional<AudioOutputNodeInfo> AudioOutputNodeInfo::FromValue(const base::Value::Dict& value) {
  AudioOutputNodeInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<AudioOutputNodeInfo> AudioOutputNodeInfo::FromValue(const base::Value& value) {
  AudioOutputNodeInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict AudioOutputNodeInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->id) {
    to_value_result.Set("id", *this->id);

  }
  if (this->name) {
    to_value_result.Set("name", *this->name);

  }
  if (this->device_name) {
    to_value_result.Set("deviceName", *this->device_name);

  }
  if (this->active) {
    to_value_result.Set("active", *this->active);

  }
  if (this->node_volume) {
    to_value_result.Set("nodeVolume", *this->node_volume);

  }

  return to_value_result;
}


AudioInfo::AudioInfo()
 {}

AudioInfo::~AudioInfo() = default;
AudioInfo::AudioInfo(AudioInfo&& rhs) = default;
AudioInfo& AudioInfo::operator=(AudioInfo&& rhs) = default;
AudioInfo AudioInfo::Clone() const {
  AudioInfo out;
  out.output_mute = output_mute;
  out.input_mute = input_mute;
  out.underruns = underruns;
  out.severe_underruns = severe_underruns;
  out.output_nodes.reserve(output_nodes.size());
  for (const auto& element : output_nodes) {
    json_schema_compiler::util::AppendToContainer(out.output_nodes, element.Clone());
  }
  out.input_nodes.reserve(input_nodes.size());
  for (const auto& element : input_nodes) {
    json_schema_compiler::util::AppendToContainer(out.input_nodes, element.Clone());
  }
  return out;
}

// static
bool AudioInfo::Populate(
    const base::Value::Dict& dict, AudioInfo& out) {
  const base::Value* output_mute_value = dict.Find("outputMute");
  if (output_mute_value) {
    {
      auto temp = (*output_mute_value).GetIfBool();
      if (!temp.has_value()) {
        out.output_mute = absl::nullopt;
        return false;
      }
      out.output_mute = *temp;
    }
  }

  const base::Value* input_mute_value = dict.Find("inputMute");
  if (input_mute_value) {
    {
      auto temp = (*input_mute_value).GetIfBool();
      if (!temp.has_value()) {
        out.input_mute = absl::nullopt;
        return false;
      }
      out.input_mute = *temp;
    }
  }

  const base::Value* underruns_value = dict.Find("underruns");
  if (underruns_value) {
    {
      auto temp = (*underruns_value).GetIfInt();
      if (!temp.has_value()) {
        out.underruns = absl::nullopt;
        return false;
      }
      out.underruns = *temp;
    }
  }

  const base::Value* severe_underruns_value = dict.Find("severeUnderruns");
  if (severe_underruns_value) {
    {
      auto temp = (*severe_underruns_value).GetIfInt();
      if (!temp.has_value()) {
        out.severe_underruns = absl::nullopt;
        return false;
      }
      out.severe_underruns = *temp;
    }
  }

  const base::Value* output_nodes_value = dict.Find("outputNodes");
  if (!output_nodes_value) {
    return false;
  }
  {
    if (!(*output_nodes_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*output_nodes_value).GetList(), out.output_nodes)) {
        return false;
      }
    }
  }

  const base::Value* input_nodes_value = dict.Find("inputNodes");
  if (!input_nodes_value) {
    return false;
  }
  {
    if (!(*input_nodes_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*input_nodes_value).GetList(), out.input_nodes)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool AudioInfo::Populate(
    const base::Value& value, AudioInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<AudioInfo> AudioInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<AudioInfo>();
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
absl::optional<AudioInfo> AudioInfo::FromValue(const base::Value::Dict& value) {
  AudioInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<AudioInfo> AudioInfo::FromValue(const base::Value& value) {
  AudioInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict AudioInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->output_mute) {
    to_value_result.Set("outputMute", *this->output_mute);

  }
  if (this->input_mute) {
    to_value_result.Set("inputMute", *this->input_mute);

  }
  if (this->underruns) {
    to_value_result.Set("underruns", *this->underruns);

  }
  if (this->severe_underruns) {
    to_value_result.Set("severeUnderruns", *this->severe_underruns);

  }
  to_value_result.Set("outputNodes", json_schema_compiler::util::CreateValueFromArray(this->output_nodes));

  to_value_result.Set("inputNodes", json_schema_compiler::util::CreateValueFromArray(this->input_nodes));


  return to_value_result;
}


BatteryInfo::BatteryInfo()
 {}

BatteryInfo::~BatteryInfo() = default;
BatteryInfo::BatteryInfo(BatteryInfo&& rhs) = default;
BatteryInfo& BatteryInfo::operator=(BatteryInfo&& rhs) = default;
BatteryInfo BatteryInfo::Clone() const {
  BatteryInfo out;
  out.cycle_count = cycle_count;
  out.voltage_now = voltage_now;
  out.vendor = vendor;
  out.serial_number = serial_number;
  out.charge_full_design = charge_full_design;
  out.charge_full = charge_full;
  out.voltage_min_design = voltage_min_design;
  out.model_name = model_name;
  out.charge_now = charge_now;
  out.current_now = current_now;
  out.technology = technology;
  out.status = status;
  out.manufacture_date = manufacture_date;
  out.temperature = temperature;
  return out;
}

// static
bool BatteryInfo::Populate(
    const base::Value::Dict& dict, BatteryInfo& out) {
  const base::Value* cycle_count_value = dict.Find("cycleCount");
  if (cycle_count_value) {
    {
      auto temp = (*cycle_count_value).GetIfDouble();
      if (!temp.has_value()) {
        out.cycle_count = absl::nullopt;
        return false;
      }
      out.cycle_count = *temp;
    }
  }

  const base::Value* voltage_now_value = dict.Find("voltageNow");
  if (voltage_now_value) {
    {
      auto temp = (*voltage_now_value).GetIfDouble();
      if (!temp.has_value()) {
        out.voltage_now = absl::nullopt;
        return false;
      }
      out.voltage_now = *temp;
    }
  }

  const base::Value* vendor_value = dict.Find("vendor");
  if (vendor_value) {
    {
      auto* temp = (*vendor_value).GetIfString();
      if (!temp) {
        out.vendor = absl::nullopt;
        return false;
      }
      out.vendor = *temp;
    }
  }

  const base::Value* serial_number_value = dict.Find("serialNumber");
  if (serial_number_value) {
    {
      auto* temp = (*serial_number_value).GetIfString();
      if (!temp) {
        out.serial_number = absl::nullopt;
        return false;
      }
      out.serial_number = *temp;
    }
  }

  const base::Value* charge_full_design_value = dict.Find("chargeFullDesign");
  if (charge_full_design_value) {
    {
      auto temp = (*charge_full_design_value).GetIfDouble();
      if (!temp.has_value()) {
        out.charge_full_design = absl::nullopt;
        return false;
      }
      out.charge_full_design = *temp;
    }
  }

  const base::Value* charge_full_value = dict.Find("chargeFull");
  if (charge_full_value) {
    {
      auto temp = (*charge_full_value).GetIfDouble();
      if (!temp.has_value()) {
        out.charge_full = absl::nullopt;
        return false;
      }
      out.charge_full = *temp;
    }
  }

  const base::Value* voltage_min_design_value = dict.Find("voltageMinDesign");
  if (voltage_min_design_value) {
    {
      auto temp = (*voltage_min_design_value).GetIfDouble();
      if (!temp.has_value()) {
        out.voltage_min_design = absl::nullopt;
        return false;
      }
      out.voltage_min_design = *temp;
    }
  }

  const base::Value* model_name_value = dict.Find("modelName");
  if (model_name_value) {
    {
      auto* temp = (*model_name_value).GetIfString();
      if (!temp) {
        out.model_name = absl::nullopt;
        return false;
      }
      out.model_name = *temp;
    }
  }

  const base::Value* charge_now_value = dict.Find("chargeNow");
  if (charge_now_value) {
    {
      auto temp = (*charge_now_value).GetIfDouble();
      if (!temp.has_value()) {
        out.charge_now = absl::nullopt;
        return false;
      }
      out.charge_now = *temp;
    }
  }

  const base::Value* current_now_value = dict.Find("currentNow");
  if (current_now_value) {
    {
      auto temp = (*current_now_value).GetIfDouble();
      if (!temp.has_value()) {
        out.current_now = absl::nullopt;
        return false;
      }
      out.current_now = *temp;
    }
  }

  const base::Value* technology_value = dict.Find("technology");
  if (technology_value) {
    {
      auto* temp = (*technology_value).GetIfString();
      if (!temp) {
        out.technology = absl::nullopt;
        return false;
      }
      out.technology = *temp;
    }
  }

  const base::Value* status_value = dict.Find("status");
  if (status_value) {
    {
      auto* temp = (*status_value).GetIfString();
      if (!temp) {
        out.status = absl::nullopt;
        return false;
      }
      out.status = *temp;
    }
  }

  const base::Value* manufacture_date_value = dict.Find("manufactureDate");
  if (manufacture_date_value) {
    {
      auto* temp = (*manufacture_date_value).GetIfString();
      if (!temp) {
        out.manufacture_date = absl::nullopt;
        return false;
      }
      out.manufacture_date = *temp;
    }
  }

  const base::Value* temperature_value = dict.Find("temperature");
  if (temperature_value) {
    {
      auto temp = (*temperature_value).GetIfDouble();
      if (!temp.has_value()) {
        out.temperature = absl::nullopt;
        return false;
      }
      out.temperature = *temp;
    }
  }

  return true;
}

// static
bool BatteryInfo::Populate(
    const base::Value& value, BatteryInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<BatteryInfo> BatteryInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<BatteryInfo>();
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
absl::optional<BatteryInfo> BatteryInfo::FromValue(const base::Value::Dict& value) {
  BatteryInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<BatteryInfo> BatteryInfo::FromValue(const base::Value& value) {
  BatteryInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict BatteryInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->cycle_count) {
    to_value_result.Set("cycleCount", *this->cycle_count);

  }
  if (this->voltage_now) {
    to_value_result.Set("voltageNow", *this->voltage_now);

  }
  if (this->vendor) {
    to_value_result.Set("vendor", *this->vendor);

  }
  if (this->serial_number) {
    to_value_result.Set("serialNumber", *this->serial_number);

  }
  if (this->charge_full_design) {
    to_value_result.Set("chargeFullDesign", *this->charge_full_design);

  }
  if (this->charge_full) {
    to_value_result.Set("chargeFull", *this->charge_full);

  }
  if (this->voltage_min_design) {
    to_value_result.Set("voltageMinDesign", *this->voltage_min_design);

  }
  if (this->model_name) {
    to_value_result.Set("modelName", *this->model_name);

  }
  if (this->charge_now) {
    to_value_result.Set("chargeNow", *this->charge_now);

  }
  if (this->current_now) {
    to_value_result.Set("currentNow", *this->current_now);

  }
  if (this->technology) {
    to_value_result.Set("technology", *this->technology);

  }
  if (this->status) {
    to_value_result.Set("status", *this->status);

  }
  if (this->manufacture_date) {
    to_value_result.Set("manufactureDate", *this->manufacture_date);

  }
  if (this->temperature) {
    to_value_result.Set("temperature", *this->temperature);

  }

  return to_value_result;
}


NonRemovableBlockDeviceInfo::NonRemovableBlockDeviceInfo()
 {}

NonRemovableBlockDeviceInfo::~NonRemovableBlockDeviceInfo() = default;
NonRemovableBlockDeviceInfo::NonRemovableBlockDeviceInfo(NonRemovableBlockDeviceInfo&& rhs) = default;
NonRemovableBlockDeviceInfo& NonRemovableBlockDeviceInfo::operator=(NonRemovableBlockDeviceInfo&& rhs) = default;
NonRemovableBlockDeviceInfo NonRemovableBlockDeviceInfo::Clone() const {
  NonRemovableBlockDeviceInfo out;
  out.name = name;
  out.type = type;
  out.size = size;
  return out;
}

// static
bool NonRemovableBlockDeviceInfo::Populate(
    const base::Value::Dict& dict, NonRemovableBlockDeviceInfo& out) {
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

  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    {
      auto* temp = (*type_value).GetIfString();
      if (!temp) {
        out.type = absl::nullopt;
        return false;
      }
      out.type = *temp;
    }
  }

  const base::Value* size_value = dict.Find("size");
  if (size_value) {
    {
      auto temp = (*size_value).GetIfDouble();
      if (!temp.has_value()) {
        out.size = absl::nullopt;
        return false;
      }
      out.size = *temp;
    }
  }

  return true;
}

// static
bool NonRemovableBlockDeviceInfo::Populate(
    const base::Value& value, NonRemovableBlockDeviceInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<NonRemovableBlockDeviceInfo> NonRemovableBlockDeviceInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<NonRemovableBlockDeviceInfo>();
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
absl::optional<NonRemovableBlockDeviceInfo> NonRemovableBlockDeviceInfo::FromValue(const base::Value::Dict& value) {
  NonRemovableBlockDeviceInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<NonRemovableBlockDeviceInfo> NonRemovableBlockDeviceInfo::FromValue(const base::Value& value) {
  NonRemovableBlockDeviceInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict NonRemovableBlockDeviceInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->name) {
    to_value_result.Set("name", *this->name);

  }
  if (this->type) {
    to_value_result.Set("type", *this->type);

  }
  if (this->size) {
    to_value_result.Set("size", *this->size);

  }

  return to_value_result;
}


NonRemovableBlockDeviceInfoResponse::NonRemovableBlockDeviceInfoResponse()
 {}

NonRemovableBlockDeviceInfoResponse::~NonRemovableBlockDeviceInfoResponse() = default;
NonRemovableBlockDeviceInfoResponse::NonRemovableBlockDeviceInfoResponse(NonRemovableBlockDeviceInfoResponse&& rhs) = default;
NonRemovableBlockDeviceInfoResponse& NonRemovableBlockDeviceInfoResponse::operator=(NonRemovableBlockDeviceInfoResponse&& rhs) = default;
NonRemovableBlockDeviceInfoResponse NonRemovableBlockDeviceInfoResponse::Clone() const {
  NonRemovableBlockDeviceInfoResponse out;
  out.device_infos.reserve(device_infos.size());
  for (const auto& element : device_infos) {
    json_schema_compiler::util::AppendToContainer(out.device_infos, element.Clone());
  }
  return out;
}

// static
bool NonRemovableBlockDeviceInfoResponse::Populate(
    const base::Value::Dict& dict, NonRemovableBlockDeviceInfoResponse& out) {
  const base::Value* device_infos_value = dict.Find("deviceInfos");
  if (!device_infos_value) {
    return false;
  }
  {
    if (!(*device_infos_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*device_infos_value).GetList(), out.device_infos)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool NonRemovableBlockDeviceInfoResponse::Populate(
    const base::Value& value, NonRemovableBlockDeviceInfoResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<NonRemovableBlockDeviceInfoResponse> NonRemovableBlockDeviceInfoResponse::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<NonRemovableBlockDeviceInfoResponse>();
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
absl::optional<NonRemovableBlockDeviceInfoResponse> NonRemovableBlockDeviceInfoResponse::FromValue(const base::Value::Dict& value) {
  NonRemovableBlockDeviceInfoResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<NonRemovableBlockDeviceInfoResponse> NonRemovableBlockDeviceInfoResponse::FromValue(const base::Value& value) {
  NonRemovableBlockDeviceInfoResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict NonRemovableBlockDeviceInfoResponse::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("deviceInfos", json_schema_compiler::util::CreateValueFromArray(this->device_infos));


  return to_value_result;
}


const char* ToString(CpuArchitectureEnum enum_param) {
  switch (enum_param) {
    case CpuArchitectureEnum::kUnknown:
      return "unknown";
    case CpuArchitectureEnum::kX86_64:
      return "x86_64";
    case CpuArchitectureEnum::kAarch64:
      return "aarch64";
    case CpuArchitectureEnum::kArmv7l:
      return "armv7l";
    case CpuArchitectureEnum::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

CpuArchitectureEnum ParseCpuArchitectureEnum(base::StringPiece enum_string) {
  if (enum_string == "unknown")
    return CpuArchitectureEnum::kUnknown;
  if (enum_string == "x86_64")
    return CpuArchitectureEnum::kX86_64;
  if (enum_string == "aarch64")
    return CpuArchitectureEnum::kAarch64;
  if (enum_string == "armv7l")
    return CpuArchitectureEnum::kArmv7l;
  return CpuArchitectureEnum::kNone;
}

std::u16string GetCpuArchitectureEnumParseError(base::StringPiece enum_string) {
  return u"expected \"unknown\" or \"x86_64\" or \"aarch64\" or \"armv7l\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


CpuCStateInfo::CpuCStateInfo()
 {}

CpuCStateInfo::~CpuCStateInfo() = default;
CpuCStateInfo::CpuCStateInfo(CpuCStateInfo&& rhs) = default;
CpuCStateInfo& CpuCStateInfo::operator=(CpuCStateInfo&& rhs) = default;
CpuCStateInfo CpuCStateInfo::Clone() const {
  CpuCStateInfo out;
  out.name = name;
  out.time_in_state_since_last_boot_us = time_in_state_since_last_boot_us;
  return out;
}

// static
bool CpuCStateInfo::Populate(
    const base::Value::Dict& dict, CpuCStateInfo& out) {
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

  const base::Value* time_in_state_since_last_boot_us_value = dict.Find("timeInStateSinceLastBootUs");
  if (time_in_state_since_last_boot_us_value) {
    {
      auto temp = (*time_in_state_since_last_boot_us_value).GetIfDouble();
      if (!temp.has_value()) {
        out.time_in_state_since_last_boot_us = absl::nullopt;
        return false;
      }
      out.time_in_state_since_last_boot_us = *temp;
    }
  }

  return true;
}

// static
bool CpuCStateInfo::Populate(
    const base::Value& value, CpuCStateInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<CpuCStateInfo> CpuCStateInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<CpuCStateInfo>();
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
absl::optional<CpuCStateInfo> CpuCStateInfo::FromValue(const base::Value::Dict& value) {
  CpuCStateInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CpuCStateInfo> CpuCStateInfo::FromValue(const base::Value& value) {
  CpuCStateInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict CpuCStateInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->name) {
    to_value_result.Set("name", *this->name);

  }
  if (this->time_in_state_since_last_boot_us) {
    to_value_result.Set("timeInStateSinceLastBootUs", *this->time_in_state_since_last_boot_us);

  }

  return to_value_result;
}


LogicalCpuInfo::LogicalCpuInfo()
 {}

LogicalCpuInfo::~LogicalCpuInfo() = default;
LogicalCpuInfo::LogicalCpuInfo(LogicalCpuInfo&& rhs) = default;
LogicalCpuInfo& LogicalCpuInfo::operator=(LogicalCpuInfo&& rhs) = default;
LogicalCpuInfo LogicalCpuInfo::Clone() const {
  LogicalCpuInfo out;
  out.max_clock_speed_khz = max_clock_speed_khz;
  out.scaling_max_frequency_khz = scaling_max_frequency_khz;
  out.scaling_current_frequency_khz = scaling_current_frequency_khz;
  out.idle_time_ms = idle_time_ms;
  out.c_states.reserve(c_states.size());
  for (const auto& element : c_states) {
    json_schema_compiler::util::AppendToContainer(out.c_states, element.Clone());
  }
  out.core_id = core_id;
  return out;
}

// static
bool LogicalCpuInfo::Populate(
    const base::Value::Dict& dict, LogicalCpuInfo& out) {
  const base::Value* max_clock_speed_khz_value = dict.Find("maxClockSpeedKhz");
  if (max_clock_speed_khz_value) {
    {
      auto temp = (*max_clock_speed_khz_value).GetIfInt();
      if (!temp.has_value()) {
        out.max_clock_speed_khz = absl::nullopt;
        return false;
      }
      out.max_clock_speed_khz = *temp;
    }
  }

  const base::Value* scaling_max_frequency_khz_value = dict.Find("scalingMaxFrequencyKhz");
  if (scaling_max_frequency_khz_value) {
    {
      auto temp = (*scaling_max_frequency_khz_value).GetIfInt();
      if (!temp.has_value()) {
        out.scaling_max_frequency_khz = absl::nullopt;
        return false;
      }
      out.scaling_max_frequency_khz = *temp;
    }
  }

  const base::Value* scaling_current_frequency_khz_value = dict.Find("scalingCurrentFrequencyKhz");
  if (scaling_current_frequency_khz_value) {
    {
      auto temp = (*scaling_current_frequency_khz_value).GetIfInt();
      if (!temp.has_value()) {
        out.scaling_current_frequency_khz = absl::nullopt;
        return false;
      }
      out.scaling_current_frequency_khz = *temp;
    }
  }

  const base::Value* idle_time_ms_value = dict.Find("idleTimeMs");
  if (idle_time_ms_value) {
    {
      auto temp = (*idle_time_ms_value).GetIfDouble();
      if (!temp.has_value()) {
        out.idle_time_ms = absl::nullopt;
        return false;
      }
      out.idle_time_ms = *temp;
    }
  }

  const base::Value* c_states_value = dict.Find("cStates");
  if (!c_states_value) {
    return false;
  }
  {
    if (!(*c_states_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*c_states_value).GetList(), out.c_states)) {
        return false;
      }
    }
  }

  const base::Value* core_id_value = dict.Find("coreId");
  if (core_id_value) {
    {
      auto temp = (*core_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.core_id = absl::nullopt;
        return false;
      }
      out.core_id = *temp;
    }
  }

  return true;
}

// static
bool LogicalCpuInfo::Populate(
    const base::Value& value, LogicalCpuInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<LogicalCpuInfo> LogicalCpuInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<LogicalCpuInfo>();
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
absl::optional<LogicalCpuInfo> LogicalCpuInfo::FromValue(const base::Value::Dict& value) {
  LogicalCpuInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<LogicalCpuInfo> LogicalCpuInfo::FromValue(const base::Value& value) {
  LogicalCpuInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict LogicalCpuInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->max_clock_speed_khz) {
    to_value_result.Set("maxClockSpeedKhz", *this->max_clock_speed_khz);

  }
  if (this->scaling_max_frequency_khz) {
    to_value_result.Set("scalingMaxFrequencyKhz", *this->scaling_max_frequency_khz);

  }
  if (this->scaling_current_frequency_khz) {
    to_value_result.Set("scalingCurrentFrequencyKhz", *this->scaling_current_frequency_khz);

  }
  if (this->idle_time_ms) {
    to_value_result.Set("idleTimeMs", *this->idle_time_ms);

  }
  to_value_result.Set("cStates", json_schema_compiler::util::CreateValueFromArray(this->c_states));

  if (this->core_id) {
    to_value_result.Set("coreId", *this->core_id);

  }

  return to_value_result;
}


PhysicalCpuInfo::PhysicalCpuInfo()
 {}

PhysicalCpuInfo::~PhysicalCpuInfo() = default;
PhysicalCpuInfo::PhysicalCpuInfo(PhysicalCpuInfo&& rhs) = default;
PhysicalCpuInfo& PhysicalCpuInfo::operator=(PhysicalCpuInfo&& rhs) = default;
PhysicalCpuInfo PhysicalCpuInfo::Clone() const {
  PhysicalCpuInfo out;
  out.model_name = model_name;
  out.logical_cpus.reserve(logical_cpus.size());
  for (const auto& element : logical_cpus) {
    json_schema_compiler::util::AppendToContainer(out.logical_cpus, element.Clone());
  }
  return out;
}

// static
bool PhysicalCpuInfo::Populate(
    const base::Value::Dict& dict, PhysicalCpuInfo& out) {
  const base::Value* model_name_value = dict.Find("modelName");
  if (model_name_value) {
    {
      auto* temp = (*model_name_value).GetIfString();
      if (!temp) {
        out.model_name = absl::nullopt;
        return false;
      }
      out.model_name = *temp;
    }
  }

  const base::Value* logical_cpus_value = dict.Find("logicalCpus");
  if (!logical_cpus_value) {
    return false;
  }
  {
    if (!(*logical_cpus_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*logical_cpus_value).GetList(), out.logical_cpus)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool PhysicalCpuInfo::Populate(
    const base::Value& value, PhysicalCpuInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<PhysicalCpuInfo> PhysicalCpuInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<PhysicalCpuInfo>();
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
absl::optional<PhysicalCpuInfo> PhysicalCpuInfo::FromValue(const base::Value::Dict& value) {
  PhysicalCpuInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<PhysicalCpuInfo> PhysicalCpuInfo::FromValue(const base::Value& value) {
  PhysicalCpuInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict PhysicalCpuInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->model_name) {
    to_value_result.Set("modelName", *this->model_name);

  }
  to_value_result.Set("logicalCpus", json_schema_compiler::util::CreateValueFromArray(this->logical_cpus));


  return to_value_result;
}


CpuInfo::CpuInfo()
: architecture() {}

CpuInfo::~CpuInfo() = default;
CpuInfo::CpuInfo(CpuInfo&& rhs) = default;
CpuInfo& CpuInfo::operator=(CpuInfo&& rhs) = default;
CpuInfo CpuInfo::Clone() const {
  CpuInfo out;
  out.num_total_threads = num_total_threads;
  out.architecture = architecture;
  out.physical_cpus.reserve(physical_cpus.size());
  for (const auto& element : physical_cpus) {
    json_schema_compiler::util::AppendToContainer(out.physical_cpus, element.Clone());
  }
  return out;
}

// static
bool CpuInfo::Populate(
    const base::Value::Dict& dict, CpuInfo& out) {
  const base::Value* num_total_threads_value = dict.Find("numTotalThreads");
  if (num_total_threads_value) {
    {
      auto temp = (*num_total_threads_value).GetIfInt();
      if (!temp.has_value()) {
        out.num_total_threads = absl::nullopt;
        return false;
      }
      out.num_total_threads = *temp;
    }
  }

  const base::Value* architecture_value = dict.Find("architecture");
  if (!architecture_value) {
    return false;
  }
  {
    const std::string* cpu_architecture_enum_as_string = (*architecture_value).GetIfString();
    if (!cpu_architecture_enum_as_string) {
      return false;
    }
    out.architecture = ParseCpuArchitectureEnum(*cpu_architecture_enum_as_string);
    if (out.architecture == CpuArchitectureEnum()) {
      return false;
    }
  }

  const base::Value* physical_cpus_value = dict.Find("physicalCpus");
  if (!physical_cpus_value) {
    return false;
  }
  {
    if (!(*physical_cpus_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*physical_cpus_value).GetList(), out.physical_cpus)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool CpuInfo::Populate(
    const base::Value& value, CpuInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<CpuInfo> CpuInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<CpuInfo>();
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
absl::optional<CpuInfo> CpuInfo::FromValue(const base::Value::Dict& value) {
  CpuInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CpuInfo> CpuInfo::FromValue(const base::Value& value) {
  CpuInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict CpuInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->num_total_threads) {
    to_value_result.Set("numTotalThreads", *this->num_total_threads);

  }
  to_value_result.Set("architecture", os_telemetry::ToString(this->architecture));

  to_value_result.Set("physicalCpus", json_schema_compiler::util::CreateValueFromArray(this->physical_cpus));


  return to_value_result;
}


const char* ToString(DisplayInputType enum_param) {
  switch (enum_param) {
    case DisplayInputType::kUnknown:
      return "unknown";
    case DisplayInputType::kDigital:
      return "digital";
    case DisplayInputType::kAnalog:
      return "analog";
    case DisplayInputType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DisplayInputType ParseDisplayInputType(base::StringPiece enum_string) {
  if (enum_string == "unknown")
    return DisplayInputType::kUnknown;
  if (enum_string == "digital")
    return DisplayInputType::kDigital;
  if (enum_string == "analog")
    return DisplayInputType::kAnalog;
  return DisplayInputType::kNone;
}

std::u16string GetDisplayInputTypeParseError(base::StringPiece enum_string) {
  return u"expected \"unknown\" or \"digital\" or \"analog\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


EmbeddedDisplayInfo::EmbeddedDisplayInfo()
: input_type() {}

EmbeddedDisplayInfo::~EmbeddedDisplayInfo() = default;
EmbeddedDisplayInfo::EmbeddedDisplayInfo(EmbeddedDisplayInfo&& rhs) = default;
EmbeddedDisplayInfo& EmbeddedDisplayInfo::operator=(EmbeddedDisplayInfo&& rhs) = default;
EmbeddedDisplayInfo EmbeddedDisplayInfo::Clone() const {
  EmbeddedDisplayInfo out;
  out.privacy_screen_supported = privacy_screen_supported;
  out.privacy_screen_enabled = privacy_screen_enabled;
  out.display_width = display_width;
  out.display_height = display_height;
  out.resolution_horizontal = resolution_horizontal;
  out.resolution_vertical = resolution_vertical;
  out.refresh_rate = refresh_rate;
  out.manufacturer = manufacturer;
  out.model_id = model_id;
  out.serial_number = serial_number;
  out.manufacture_week = manufacture_week;
  out.manufacture_year = manufacture_year;
  out.edid_version = edid_version;
  out.input_type = input_type;
  out.display_name = display_name;
  return out;
}

// static
bool EmbeddedDisplayInfo::Populate(
    const base::Value::Dict& dict, EmbeddedDisplayInfo& out) {
  const base::Value* privacy_screen_supported_value = dict.Find("privacyScreenSupported");
  if (privacy_screen_supported_value) {
    {
      auto temp = (*privacy_screen_supported_value).GetIfBool();
      if (!temp.has_value()) {
        out.privacy_screen_supported = absl::nullopt;
        return false;
      }
      out.privacy_screen_supported = *temp;
    }
  }

  const base::Value* privacy_screen_enabled_value = dict.Find("privacyScreenEnabled");
  if (privacy_screen_enabled_value) {
    {
      auto temp = (*privacy_screen_enabled_value).GetIfBool();
      if (!temp.has_value()) {
        out.privacy_screen_enabled = absl::nullopt;
        return false;
      }
      out.privacy_screen_enabled = *temp;
    }
  }

  const base::Value* display_width_value = dict.Find("displayWidth");
  if (display_width_value) {
    {
      auto temp = (*display_width_value).GetIfInt();
      if (!temp.has_value()) {
        out.display_width = absl::nullopt;
        return false;
      }
      out.display_width = *temp;
    }
  }

  const base::Value* display_height_value = dict.Find("displayHeight");
  if (display_height_value) {
    {
      auto temp = (*display_height_value).GetIfInt();
      if (!temp.has_value()) {
        out.display_height = absl::nullopt;
        return false;
      }
      out.display_height = *temp;
    }
  }

  const base::Value* resolution_horizontal_value = dict.Find("resolutionHorizontal");
  if (resolution_horizontal_value) {
    {
      auto temp = (*resolution_horizontal_value).GetIfInt();
      if (!temp.has_value()) {
        out.resolution_horizontal = absl::nullopt;
        return false;
      }
      out.resolution_horizontal = *temp;
    }
  }

  const base::Value* resolution_vertical_value = dict.Find("resolutionVertical");
  if (resolution_vertical_value) {
    {
      auto temp = (*resolution_vertical_value).GetIfInt();
      if (!temp.has_value()) {
        out.resolution_vertical = absl::nullopt;
        return false;
      }
      out.resolution_vertical = *temp;
    }
  }

  const base::Value* refresh_rate_value = dict.Find("refreshRate");
  if (refresh_rate_value) {
    {
      auto temp = (*refresh_rate_value).GetIfDouble();
      if (!temp.has_value()) {
        out.refresh_rate = absl::nullopt;
        return false;
      }
      out.refresh_rate = *temp;
    }
  }

  const base::Value* manufacturer_value = dict.Find("manufacturer");
  if (manufacturer_value) {
    {
      auto* temp = (*manufacturer_value).GetIfString();
      if (!temp) {
        out.manufacturer = absl::nullopt;
        return false;
      }
      out.manufacturer = *temp;
    }
  }

  const base::Value* model_id_value = dict.Find("modelId");
  if (model_id_value) {
    {
      auto temp = (*model_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.model_id = absl::nullopt;
        return false;
      }
      out.model_id = *temp;
    }
  }

  const base::Value* serial_number_value = dict.Find("serialNumber");
  if (serial_number_value) {
    {
      auto temp = (*serial_number_value).GetIfInt();
      if (!temp.has_value()) {
        out.serial_number = absl::nullopt;
        return false;
      }
      out.serial_number = *temp;
    }
  }

  const base::Value* manufacture_week_value = dict.Find("manufactureWeek");
  if (manufacture_week_value) {
    {
      auto temp = (*manufacture_week_value).GetIfInt();
      if (!temp.has_value()) {
        out.manufacture_week = absl::nullopt;
        return false;
      }
      out.manufacture_week = *temp;
    }
  }

  const base::Value* manufacture_year_value = dict.Find("manufactureYear");
  if (manufacture_year_value) {
    {
      auto temp = (*manufacture_year_value).GetIfInt();
      if (!temp.has_value()) {
        out.manufacture_year = absl::nullopt;
        return false;
      }
      out.manufacture_year = *temp;
    }
  }

  const base::Value* edid_version_value = dict.Find("edidVersion");
  if (edid_version_value) {
    {
      auto* temp = (*edid_version_value).GetIfString();
      if (!temp) {
        out.edid_version = absl::nullopt;
        return false;
      }
      out.edid_version = *temp;
    }
  }

  const base::Value* input_type_value = dict.Find("inputType");
  if (!input_type_value) {
    return false;
  }
  {
    const std::string* display_input_type_as_string = (*input_type_value).GetIfString();
    if (!display_input_type_as_string) {
      return false;
    }
    out.input_type = ParseDisplayInputType(*display_input_type_as_string);
    if (out.input_type == DisplayInputType()) {
      return false;
    }
  }

  const base::Value* display_name_value = dict.Find("displayName");
  if (display_name_value) {
    {
      auto* temp = (*display_name_value).GetIfString();
      if (!temp) {
        out.display_name = absl::nullopt;
        return false;
      }
      out.display_name = *temp;
    }
  }

  return true;
}

// static
bool EmbeddedDisplayInfo::Populate(
    const base::Value& value, EmbeddedDisplayInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<EmbeddedDisplayInfo> EmbeddedDisplayInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<EmbeddedDisplayInfo>();
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
absl::optional<EmbeddedDisplayInfo> EmbeddedDisplayInfo::FromValue(const base::Value::Dict& value) {
  EmbeddedDisplayInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<EmbeddedDisplayInfo> EmbeddedDisplayInfo::FromValue(const base::Value& value) {
  EmbeddedDisplayInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict EmbeddedDisplayInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->privacy_screen_supported) {
    to_value_result.Set("privacyScreenSupported", *this->privacy_screen_supported);

  }
  if (this->privacy_screen_enabled) {
    to_value_result.Set("privacyScreenEnabled", *this->privacy_screen_enabled);

  }
  if (this->display_width) {
    to_value_result.Set("displayWidth", *this->display_width);

  }
  if (this->display_height) {
    to_value_result.Set("displayHeight", *this->display_height);

  }
  if (this->resolution_horizontal) {
    to_value_result.Set("resolutionHorizontal", *this->resolution_horizontal);

  }
  if (this->resolution_vertical) {
    to_value_result.Set("resolutionVertical", *this->resolution_vertical);

  }
  if (this->refresh_rate) {
    to_value_result.Set("refreshRate", *this->refresh_rate);

  }
  if (this->manufacturer) {
    to_value_result.Set("manufacturer", *this->manufacturer);

  }
  if (this->model_id) {
    to_value_result.Set("modelId", *this->model_id);

  }
  if (this->serial_number) {
    to_value_result.Set("serialNumber", *this->serial_number);

  }
  if (this->manufacture_week) {
    to_value_result.Set("manufactureWeek", *this->manufacture_week);

  }
  if (this->manufacture_year) {
    to_value_result.Set("manufactureYear", *this->manufacture_year);

  }
  if (this->edid_version) {
    to_value_result.Set("edidVersion", *this->edid_version);

  }
  to_value_result.Set("inputType", os_telemetry::ToString(this->input_type));

  if (this->display_name) {
    to_value_result.Set("displayName", *this->display_name);

  }

  return to_value_result;
}


ExternalDisplayInfo::ExternalDisplayInfo()
: input_type() {}

ExternalDisplayInfo::~ExternalDisplayInfo() = default;
ExternalDisplayInfo::ExternalDisplayInfo(ExternalDisplayInfo&& rhs) = default;
ExternalDisplayInfo& ExternalDisplayInfo::operator=(ExternalDisplayInfo&& rhs) = default;
ExternalDisplayInfo ExternalDisplayInfo::Clone() const {
  ExternalDisplayInfo out;
  out.display_width = display_width;
  out.display_height = display_height;
  out.resolution_horizontal = resolution_horizontal;
  out.resolution_vertical = resolution_vertical;
  out.refresh_rate = refresh_rate;
  out.manufacturer = manufacturer;
  out.model_id = model_id;
  out.serial_number = serial_number;
  out.manufacture_week = manufacture_week;
  out.manufacture_year = manufacture_year;
  out.edid_version = edid_version;
  out.input_type = input_type;
  out.display_name = display_name;
  return out;
}

// static
bool ExternalDisplayInfo::Populate(
    const base::Value::Dict& dict, ExternalDisplayInfo& out) {
  const base::Value* display_width_value = dict.Find("displayWidth");
  if (display_width_value) {
    {
      auto temp = (*display_width_value).GetIfInt();
      if (!temp.has_value()) {
        out.display_width = absl::nullopt;
        return false;
      }
      out.display_width = *temp;
    }
  }

  const base::Value* display_height_value = dict.Find("displayHeight");
  if (display_height_value) {
    {
      auto temp = (*display_height_value).GetIfInt();
      if (!temp.has_value()) {
        out.display_height = absl::nullopt;
        return false;
      }
      out.display_height = *temp;
    }
  }

  const base::Value* resolution_horizontal_value = dict.Find("resolutionHorizontal");
  if (resolution_horizontal_value) {
    {
      auto temp = (*resolution_horizontal_value).GetIfInt();
      if (!temp.has_value()) {
        out.resolution_horizontal = absl::nullopt;
        return false;
      }
      out.resolution_horizontal = *temp;
    }
  }

  const base::Value* resolution_vertical_value = dict.Find("resolutionVertical");
  if (resolution_vertical_value) {
    {
      auto temp = (*resolution_vertical_value).GetIfInt();
      if (!temp.has_value()) {
        out.resolution_vertical = absl::nullopt;
        return false;
      }
      out.resolution_vertical = *temp;
    }
  }

  const base::Value* refresh_rate_value = dict.Find("refreshRate");
  if (refresh_rate_value) {
    {
      auto temp = (*refresh_rate_value).GetIfDouble();
      if (!temp.has_value()) {
        out.refresh_rate = absl::nullopt;
        return false;
      }
      out.refresh_rate = *temp;
    }
  }

  const base::Value* manufacturer_value = dict.Find("manufacturer");
  if (manufacturer_value) {
    {
      auto* temp = (*manufacturer_value).GetIfString();
      if (!temp) {
        out.manufacturer = absl::nullopt;
        return false;
      }
      out.manufacturer = *temp;
    }
  }

  const base::Value* model_id_value = dict.Find("modelId");
  if (model_id_value) {
    {
      auto temp = (*model_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.model_id = absl::nullopt;
        return false;
      }
      out.model_id = *temp;
    }
  }

  const base::Value* serial_number_value = dict.Find("serialNumber");
  if (serial_number_value) {
    {
      auto temp = (*serial_number_value).GetIfInt();
      if (!temp.has_value()) {
        out.serial_number = absl::nullopt;
        return false;
      }
      out.serial_number = *temp;
    }
  }

  const base::Value* manufacture_week_value = dict.Find("manufactureWeek");
  if (manufacture_week_value) {
    {
      auto temp = (*manufacture_week_value).GetIfInt();
      if (!temp.has_value()) {
        out.manufacture_week = absl::nullopt;
        return false;
      }
      out.manufacture_week = *temp;
    }
  }

  const base::Value* manufacture_year_value = dict.Find("manufactureYear");
  if (manufacture_year_value) {
    {
      auto temp = (*manufacture_year_value).GetIfInt();
      if (!temp.has_value()) {
        out.manufacture_year = absl::nullopt;
        return false;
      }
      out.manufacture_year = *temp;
    }
  }

  const base::Value* edid_version_value = dict.Find("edidVersion");
  if (edid_version_value) {
    {
      auto* temp = (*edid_version_value).GetIfString();
      if (!temp) {
        out.edid_version = absl::nullopt;
        return false;
      }
      out.edid_version = *temp;
    }
  }

  const base::Value* input_type_value = dict.Find("inputType");
  if (!input_type_value) {
    return false;
  }
  {
    const std::string* display_input_type_as_string = (*input_type_value).GetIfString();
    if (!display_input_type_as_string) {
      return false;
    }
    out.input_type = ParseDisplayInputType(*display_input_type_as_string);
    if (out.input_type == DisplayInputType()) {
      return false;
    }
  }

  const base::Value* display_name_value = dict.Find("displayName");
  if (display_name_value) {
    {
      auto* temp = (*display_name_value).GetIfString();
      if (!temp) {
        out.display_name = absl::nullopt;
        return false;
      }
      out.display_name = *temp;
    }
  }

  return true;
}

// static
bool ExternalDisplayInfo::Populate(
    const base::Value& value, ExternalDisplayInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ExternalDisplayInfo> ExternalDisplayInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ExternalDisplayInfo>();
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
absl::optional<ExternalDisplayInfo> ExternalDisplayInfo::FromValue(const base::Value::Dict& value) {
  ExternalDisplayInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ExternalDisplayInfo> ExternalDisplayInfo::FromValue(const base::Value& value) {
  ExternalDisplayInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ExternalDisplayInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->display_width) {
    to_value_result.Set("displayWidth", *this->display_width);

  }
  if (this->display_height) {
    to_value_result.Set("displayHeight", *this->display_height);

  }
  if (this->resolution_horizontal) {
    to_value_result.Set("resolutionHorizontal", *this->resolution_horizontal);

  }
  if (this->resolution_vertical) {
    to_value_result.Set("resolutionVertical", *this->resolution_vertical);

  }
  if (this->refresh_rate) {
    to_value_result.Set("refreshRate", *this->refresh_rate);

  }
  if (this->manufacturer) {
    to_value_result.Set("manufacturer", *this->manufacturer);

  }
  if (this->model_id) {
    to_value_result.Set("modelId", *this->model_id);

  }
  if (this->serial_number) {
    to_value_result.Set("serialNumber", *this->serial_number);

  }
  if (this->manufacture_week) {
    to_value_result.Set("manufactureWeek", *this->manufacture_week);

  }
  if (this->manufacture_year) {
    to_value_result.Set("manufactureYear", *this->manufacture_year);

  }
  if (this->edid_version) {
    to_value_result.Set("edidVersion", *this->edid_version);

  }
  to_value_result.Set("inputType", os_telemetry::ToString(this->input_type));

  if (this->display_name) {
    to_value_result.Set("displayName", *this->display_name);

  }

  return to_value_result;
}


DisplayInfo::DisplayInfo()
 {}

DisplayInfo::~DisplayInfo() = default;
DisplayInfo::DisplayInfo(DisplayInfo&& rhs) = default;
DisplayInfo& DisplayInfo::operator=(DisplayInfo&& rhs) = default;
DisplayInfo DisplayInfo::Clone() const {
  DisplayInfo out;
  out.embedded_display = embedded_display.Clone();
  out.external_displays.reserve(external_displays.size());
  for (const auto& element : external_displays) {
    json_schema_compiler::util::AppendToContainer(out.external_displays, element.Clone());
  }
  return out;
}

// static
bool DisplayInfo::Populate(
    const base::Value::Dict& dict, DisplayInfo& out) {
  const base::Value* embedded_display_value = dict.Find("embeddedDisplay");
  if (!embedded_display_value) {
    return false;
  }
  {
    if (!(*embedded_display_value).is_dict()) {
      return false;
    }
    if (!EmbeddedDisplayInfo::Populate((*embedded_display_value).GetDict(), out.embedded_display)) {
      return false;
    }
  }

  const base::Value* external_displays_value = dict.Find("externalDisplays");
  if (!external_displays_value) {
    return false;
  }
  {
    if (!(*external_displays_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*external_displays_value).GetList(), out.external_displays)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool DisplayInfo::Populate(
    const base::Value& value, DisplayInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<DisplayInfo> DisplayInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<DisplayInfo>();
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
absl::optional<DisplayInfo> DisplayInfo::FromValue(const base::Value::Dict& value) {
  DisplayInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DisplayInfo> DisplayInfo::FromValue(const base::Value& value) {
  DisplayInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict DisplayInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("embeddedDisplay", (this->embedded_display).ToValue());

  to_value_result.Set("externalDisplays", json_schema_compiler::util::CreateValueFromArray(this->external_displays));


  return to_value_result;
}


MarketingInfo::MarketingInfo()
 {}

MarketingInfo::~MarketingInfo() = default;
MarketingInfo::MarketingInfo(MarketingInfo&& rhs) = default;
MarketingInfo& MarketingInfo::operator=(MarketingInfo&& rhs) = default;
MarketingInfo MarketingInfo::Clone() const {
  MarketingInfo out;
  out.marketing_name = marketing_name;
  return out;
}

// static
bool MarketingInfo::Populate(
    const base::Value::Dict& dict, MarketingInfo& out) {
  const base::Value* marketing_name_value = dict.Find("marketingName");
  if (marketing_name_value) {
    {
      auto* temp = (*marketing_name_value).GetIfString();
      if (!temp) {
        out.marketing_name = absl::nullopt;
        return false;
      }
      out.marketing_name = *temp;
    }
  }

  return true;
}

// static
bool MarketingInfo::Populate(
    const base::Value& value, MarketingInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<MarketingInfo> MarketingInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<MarketingInfo>();
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
absl::optional<MarketingInfo> MarketingInfo::FromValue(const base::Value::Dict& value) {
  MarketingInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<MarketingInfo> MarketingInfo::FromValue(const base::Value& value) {
  MarketingInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict MarketingInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->marketing_name) {
    to_value_result.Set("marketingName", *this->marketing_name);

  }

  return to_value_result;
}


MemoryInfo::MemoryInfo()
 {}

MemoryInfo::~MemoryInfo() = default;
MemoryInfo::MemoryInfo(MemoryInfo&& rhs) = default;
MemoryInfo& MemoryInfo::operator=(MemoryInfo&& rhs) = default;
MemoryInfo MemoryInfo::Clone() const {
  MemoryInfo out;
  out.total_memory_ki_b = total_memory_ki_b;
  out.free_memory_ki_b = free_memory_ki_b;
  out.available_memory_ki_b = available_memory_ki_b;
  out.page_faults_since_last_boot = page_faults_since_last_boot;
  return out;
}

// static
bool MemoryInfo::Populate(
    const base::Value::Dict& dict, MemoryInfo& out) {
  const base::Value* total_memory_ki_b_value = dict.Find("totalMemoryKiB");
  if (total_memory_ki_b_value) {
    {
      auto temp = (*total_memory_ki_b_value).GetIfInt();
      if (!temp.has_value()) {
        out.total_memory_ki_b = absl::nullopt;
        return false;
      }
      out.total_memory_ki_b = *temp;
    }
  }

  const base::Value* free_memory_ki_b_value = dict.Find("freeMemoryKiB");
  if (free_memory_ki_b_value) {
    {
      auto temp = (*free_memory_ki_b_value).GetIfInt();
      if (!temp.has_value()) {
        out.free_memory_ki_b = absl::nullopt;
        return false;
      }
      out.free_memory_ki_b = *temp;
    }
  }

  const base::Value* available_memory_ki_b_value = dict.Find("availableMemoryKiB");
  if (available_memory_ki_b_value) {
    {
      auto temp = (*available_memory_ki_b_value).GetIfInt();
      if (!temp.has_value()) {
        out.available_memory_ki_b = absl::nullopt;
        return false;
      }
      out.available_memory_ki_b = *temp;
    }
  }

  const base::Value* page_faults_since_last_boot_value = dict.Find("pageFaultsSinceLastBoot");
  if (page_faults_since_last_boot_value) {
    {
      auto temp = (*page_faults_since_last_boot_value).GetIfDouble();
      if (!temp.has_value()) {
        out.page_faults_since_last_boot = absl::nullopt;
        return false;
      }
      out.page_faults_since_last_boot = *temp;
    }
  }

  return true;
}

// static
bool MemoryInfo::Populate(
    const base::Value& value, MemoryInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<MemoryInfo> MemoryInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<MemoryInfo>();
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
absl::optional<MemoryInfo> MemoryInfo::FromValue(const base::Value::Dict& value) {
  MemoryInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<MemoryInfo> MemoryInfo::FromValue(const base::Value& value) {
  MemoryInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict MemoryInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->total_memory_ki_b) {
    to_value_result.Set("totalMemoryKiB", *this->total_memory_ki_b);

  }
  if (this->free_memory_ki_b) {
    to_value_result.Set("freeMemoryKiB", *this->free_memory_ki_b);

  }
  if (this->available_memory_ki_b) {
    to_value_result.Set("availableMemoryKiB", *this->available_memory_ki_b);

  }
  if (this->page_faults_since_last_boot) {
    to_value_result.Set("pageFaultsSinceLastBoot", *this->page_faults_since_last_boot);

  }

  return to_value_result;
}


const char* ToString(NetworkType enum_param) {
  switch (enum_param) {
    case NetworkType::kCellular:
      return "cellular";
    case NetworkType::kEthernet:
      return "ethernet";
    case NetworkType::kTether:
      return "tether";
    case NetworkType::kVpn:
      return "vpn";
    case NetworkType::kWifi:
      return "wifi";
    case NetworkType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

NetworkType ParseNetworkType(base::StringPiece enum_string) {
  if (enum_string == "cellular")
    return NetworkType::kCellular;
  if (enum_string == "ethernet")
    return NetworkType::kEthernet;
  if (enum_string == "tether")
    return NetworkType::kTether;
  if (enum_string == "vpn")
    return NetworkType::kVpn;
  if (enum_string == "wifi")
    return NetworkType::kWifi;
  return NetworkType::kNone;
}

std::u16string GetNetworkTypeParseError(base::StringPiece enum_string) {
  return u"expected \"cellular\" or \"ethernet\" or \"tether\" or \"vpn\" or \"wifi\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(NetworkState enum_param) {
  switch (enum_param) {
    case NetworkState::kUninitialized:
      return "uninitialized";
    case NetworkState::kDisabled:
      return "disabled";
    case NetworkState::kProhibited:
      return "prohibited";
    case NetworkState::kNotConnected:
      return "not_connected";
    case NetworkState::kConnecting:
      return "connecting";
    case NetworkState::kPortal:
      return "portal";
    case NetworkState::kConnected:
      return "connected";
    case NetworkState::kOnline:
      return "online";
    case NetworkState::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

NetworkState ParseNetworkState(base::StringPiece enum_string) {
  if (enum_string == "uninitialized")
    return NetworkState::kUninitialized;
  if (enum_string == "disabled")
    return NetworkState::kDisabled;
  if (enum_string == "prohibited")
    return NetworkState::kProhibited;
  if (enum_string == "not_connected")
    return NetworkState::kNotConnected;
  if (enum_string == "connecting")
    return NetworkState::kConnecting;
  if (enum_string == "portal")
    return NetworkState::kPortal;
  if (enum_string == "connected")
    return NetworkState::kConnected;
  if (enum_string == "online")
    return NetworkState::kOnline;
  return NetworkState::kNone;
}

std::u16string GetNetworkStateParseError(base::StringPiece enum_string) {
  return u"expected \"uninitialized\" or \"disabled\" or \"prohibited\" or \"not_connected\" or \"connecting\" or \"portal\" or \"connected\" or \"online\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


NetworkInfo::NetworkInfo()
: type(),
state() {}

NetworkInfo::~NetworkInfo() = default;
NetworkInfo::NetworkInfo(NetworkInfo&& rhs) = default;
NetworkInfo& NetworkInfo::operator=(NetworkInfo&& rhs) = default;
NetworkInfo NetworkInfo::Clone() const {
  NetworkInfo out;
  out.type = type;
  out.state = state;
  out.mac_address = mac_address;
  out.ipv4_address = ipv4_address;
  out.ipv6_addresses = ipv6_addresses;
  out.signal_strength = signal_strength;
  return out;
}

// static
bool NetworkInfo::Populate(
    const base::Value::Dict& dict, NetworkInfo& out) {
  out.type = NetworkType();
  out.state = NetworkState();
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    {
      const std::string* network_type_as_string = (*type_value).GetIfString();
      if (!network_type_as_string) {
        return false;
      }
      out.type = ParseNetworkType(*network_type_as_string);
      if (out.type == NetworkType()) {
        return false;
      }
    }
    } else {
    out.type = NetworkType();
  }

  const base::Value* state_value = dict.Find("state");
  if (state_value) {
    {
      const std::string* network_state_as_string = (*state_value).GetIfString();
      if (!network_state_as_string) {
        return false;
      }
      out.state = ParseNetworkState(*network_state_as_string);
      if (out.state == NetworkState()) {
        return false;
      }
    }
    } else {
    out.state = NetworkState();
  }

  const base::Value* mac_address_value = dict.Find("macAddress");
  if (mac_address_value) {
    {
      auto* temp = (*mac_address_value).GetIfString();
      if (!temp) {
        out.mac_address = absl::nullopt;
        return false;
      }
      out.mac_address = *temp;
    }
  }

  const base::Value* ipv4_address_value = dict.Find("ipv4Address");
  if (ipv4_address_value) {
    {
      auto* temp = (*ipv4_address_value).GetIfString();
      if (!temp) {
        out.ipv4_address = absl::nullopt;
        return false;
      }
      out.ipv4_address = *temp;
    }
  }

  const base::Value* ipv6_addresses_value = dict.Find("ipv6Addresses");
  if (!ipv6_addresses_value) {
    return false;
  }
  {
    if (!(*ipv6_addresses_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*ipv6_addresses_value).GetList(), out.ipv6_addresses)) {
        return false;
      }
    }
  }

  const base::Value* signal_strength_value = dict.Find("signalStrength");
  if (signal_strength_value) {
    {
      auto temp = (*signal_strength_value).GetIfDouble();
      if (!temp.has_value()) {
        out.signal_strength = absl::nullopt;
        return false;
      }
      out.signal_strength = *temp;
    }
  }

  return true;
}

// static
bool NetworkInfo::Populate(
    const base::Value& value, NetworkInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<NetworkInfo> NetworkInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<NetworkInfo>();
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
absl::optional<NetworkInfo> NetworkInfo::FromValue(const base::Value::Dict& value) {
  NetworkInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<NetworkInfo> NetworkInfo::FromValue(const base::Value& value) {
  NetworkInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict NetworkInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->type != NetworkType()) {
    to_value_result.Set("type", os_telemetry::ToString(this->type));

  }
  if (this->state != NetworkState()) {
    to_value_result.Set("state", os_telemetry::ToString(this->state));

  }
  if (this->mac_address) {
    to_value_result.Set("macAddress", *this->mac_address);

  }
  if (this->ipv4_address) {
    to_value_result.Set("ipv4Address", *this->ipv4_address);

  }
  to_value_result.Set("ipv6Addresses", json_schema_compiler::util::CreateValueFromArray(this->ipv6_addresses));

  if (this->signal_strength) {
    to_value_result.Set("signalStrength", *this->signal_strength);

  }

  return to_value_result;
}


InternetConnectivityInfo::InternetConnectivityInfo()
 {}

InternetConnectivityInfo::~InternetConnectivityInfo() = default;
InternetConnectivityInfo::InternetConnectivityInfo(InternetConnectivityInfo&& rhs) = default;
InternetConnectivityInfo& InternetConnectivityInfo::operator=(InternetConnectivityInfo&& rhs) = default;
InternetConnectivityInfo InternetConnectivityInfo::Clone() const {
  InternetConnectivityInfo out;
  out.networks.reserve(networks.size());
  for (const auto& element : networks) {
    json_schema_compiler::util::AppendToContainer(out.networks, element.Clone());
  }
  return out;
}

// static
bool InternetConnectivityInfo::Populate(
    const base::Value::Dict& dict, InternetConnectivityInfo& out) {
  const base::Value* networks_value = dict.Find("networks");
  if (!networks_value) {
    return false;
  }
  {
    if (!(*networks_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*networks_value).GetList(), out.networks)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool InternetConnectivityInfo::Populate(
    const base::Value& value, InternetConnectivityInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<InternetConnectivityInfo> InternetConnectivityInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<InternetConnectivityInfo>();
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
absl::optional<InternetConnectivityInfo> InternetConnectivityInfo::FromValue(const base::Value::Dict& value) {
  InternetConnectivityInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<InternetConnectivityInfo> InternetConnectivityInfo::FromValue(const base::Value& value) {
  InternetConnectivityInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict InternetConnectivityInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("networks", json_schema_compiler::util::CreateValueFromArray(this->networks));


  return to_value_result;
}


OemData::OemData()
 {}

OemData::~OemData() = default;
OemData::OemData(OemData&& rhs) = default;
OemData& OemData::operator=(OemData&& rhs) = default;
OemData OemData::Clone() const {
  OemData out;
  out.oem_data = oem_data;
  return out;
}

// static
bool OemData::Populate(
    const base::Value::Dict& dict, OemData& out) {
  const base::Value* oem_data_value = dict.Find("oemData");
  if (oem_data_value) {
    {
      auto* temp = (*oem_data_value).GetIfString();
      if (!temp) {
        out.oem_data = absl::nullopt;
        return false;
      }
      out.oem_data = *temp;
    }
  }

  return true;
}

// static
bool OemData::Populate(
    const base::Value& value, OemData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<OemData> OemData::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<OemData>();
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
absl::optional<OemData> OemData::FromValue(const base::Value::Dict& value) {
  OemData out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<OemData> OemData::FromValue(const base::Value& value) {
  OemData out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict OemData::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->oem_data) {
    to_value_result.Set("oemData", *this->oem_data);

  }

  return to_value_result;
}


OsVersionInfo::OsVersionInfo()
 {}

OsVersionInfo::~OsVersionInfo() = default;
OsVersionInfo::OsVersionInfo(OsVersionInfo&& rhs) = default;
OsVersionInfo& OsVersionInfo::operator=(OsVersionInfo&& rhs) = default;
OsVersionInfo OsVersionInfo::Clone() const {
  OsVersionInfo out;
  out.release_milestone = release_milestone;
  out.build_number = build_number;
  out.patch_number = patch_number;
  out.release_channel = release_channel;
  return out;
}

// static
bool OsVersionInfo::Populate(
    const base::Value::Dict& dict, OsVersionInfo& out) {
  const base::Value* release_milestone_value = dict.Find("releaseMilestone");
  if (release_milestone_value) {
    {
      auto* temp = (*release_milestone_value).GetIfString();
      if (!temp) {
        out.release_milestone = absl::nullopt;
        return false;
      }
      out.release_milestone = *temp;
    }
  }

  const base::Value* build_number_value = dict.Find("buildNumber");
  if (build_number_value) {
    {
      auto* temp = (*build_number_value).GetIfString();
      if (!temp) {
        out.build_number = absl::nullopt;
        return false;
      }
      out.build_number = *temp;
    }
  }

  const base::Value* patch_number_value = dict.Find("patchNumber");
  if (patch_number_value) {
    {
      auto* temp = (*patch_number_value).GetIfString();
      if (!temp) {
        out.patch_number = absl::nullopt;
        return false;
      }
      out.patch_number = *temp;
    }
  }

  const base::Value* release_channel_value = dict.Find("releaseChannel");
  if (release_channel_value) {
    {
      auto* temp = (*release_channel_value).GetIfString();
      if (!temp) {
        out.release_channel = absl::nullopt;
        return false;
      }
      out.release_channel = *temp;
    }
  }

  return true;
}

// static
bool OsVersionInfo::Populate(
    const base::Value& value, OsVersionInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<OsVersionInfo> OsVersionInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<OsVersionInfo>();
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
absl::optional<OsVersionInfo> OsVersionInfo::FromValue(const base::Value::Dict& value) {
  OsVersionInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<OsVersionInfo> OsVersionInfo::FromValue(const base::Value& value) {
  OsVersionInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict OsVersionInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->release_milestone) {
    to_value_result.Set("releaseMilestone", *this->release_milestone);

  }
  if (this->build_number) {
    to_value_result.Set("buildNumber", *this->build_number);

  }
  if (this->patch_number) {
    to_value_result.Set("patchNumber", *this->patch_number);

  }
  if (this->release_channel) {
    to_value_result.Set("releaseChannel", *this->release_channel);

  }

  return to_value_result;
}


UsbBusInterfaceInfo::UsbBusInterfaceInfo()
 {}

UsbBusInterfaceInfo::~UsbBusInterfaceInfo() = default;
UsbBusInterfaceInfo::UsbBusInterfaceInfo(UsbBusInterfaceInfo&& rhs) = default;
UsbBusInterfaceInfo& UsbBusInterfaceInfo::operator=(UsbBusInterfaceInfo&& rhs) = default;
UsbBusInterfaceInfo UsbBusInterfaceInfo::Clone() const {
  UsbBusInterfaceInfo out;
  out.interface_number = interface_number;
  out.class_id = class_id;
  out.subclass_id = subclass_id;
  out.protocol_id = protocol_id;
  out.driver = driver;
  return out;
}

// static
bool UsbBusInterfaceInfo::Populate(
    const base::Value::Dict& dict, UsbBusInterfaceInfo& out) {
  const base::Value* interface_number_value = dict.Find("interfaceNumber");
  if (interface_number_value) {
    {
      auto temp = (*interface_number_value).GetIfDouble();
      if (!temp.has_value()) {
        out.interface_number = absl::nullopt;
        return false;
      }
      out.interface_number = *temp;
    }
  }

  const base::Value* class_id_value = dict.Find("classId");
  if (class_id_value) {
    {
      auto temp = (*class_id_value).GetIfDouble();
      if (!temp.has_value()) {
        out.class_id = absl::nullopt;
        return false;
      }
      out.class_id = *temp;
    }
  }

  const base::Value* subclass_id_value = dict.Find("subclassId");
  if (subclass_id_value) {
    {
      auto temp = (*subclass_id_value).GetIfDouble();
      if (!temp.has_value()) {
        out.subclass_id = absl::nullopt;
        return false;
      }
      out.subclass_id = *temp;
    }
  }

  const base::Value* protocol_id_value = dict.Find("protocolId");
  if (protocol_id_value) {
    {
      auto temp = (*protocol_id_value).GetIfDouble();
      if (!temp.has_value()) {
        out.protocol_id = absl::nullopt;
        return false;
      }
      out.protocol_id = *temp;
    }
  }

  const base::Value* driver_value = dict.Find("driver");
  if (driver_value) {
    {
      auto* temp = (*driver_value).GetIfString();
      if (!temp) {
        out.driver = absl::nullopt;
        return false;
      }
      out.driver = *temp;
    }
  }

  return true;
}

// static
bool UsbBusInterfaceInfo::Populate(
    const base::Value& value, UsbBusInterfaceInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<UsbBusInterfaceInfo> UsbBusInterfaceInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<UsbBusInterfaceInfo>();
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
absl::optional<UsbBusInterfaceInfo> UsbBusInterfaceInfo::FromValue(const base::Value::Dict& value) {
  UsbBusInterfaceInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<UsbBusInterfaceInfo> UsbBusInterfaceInfo::FromValue(const base::Value& value) {
  UsbBusInterfaceInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict UsbBusInterfaceInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->interface_number) {
    to_value_result.Set("interfaceNumber", *this->interface_number);

  }
  if (this->class_id) {
    to_value_result.Set("classId", *this->class_id);

  }
  if (this->subclass_id) {
    to_value_result.Set("subclassId", *this->subclass_id);

  }
  if (this->protocol_id) {
    to_value_result.Set("protocolId", *this->protocol_id);

  }
  if (this->driver) {
    to_value_result.Set("driver", *this->driver);

  }

  return to_value_result;
}


const char* ToString(FwupdVersionFormat enum_param) {
  switch (enum_param) {
    case FwupdVersionFormat::kPlain:
      return "plain";
    case FwupdVersionFormat::kNumber:
      return "number";
    case FwupdVersionFormat::kPair:
      return "pair";
    case FwupdVersionFormat::kTriplet:
      return "triplet";
    case FwupdVersionFormat::kQuad:
      return "quad";
    case FwupdVersionFormat::kBcd:
      return "bcd";
    case FwupdVersionFormat::kIntelMe:
      return "intelMe";
    case FwupdVersionFormat::kIntelMe2:
      return "intelMe2";
    case FwupdVersionFormat::kSurfaceLegacy:
      return "surfaceLegacy";
    case FwupdVersionFormat::kSurface:
      return "surface";
    case FwupdVersionFormat::kDellBios:
      return "dellBios";
    case FwupdVersionFormat::kHex:
      return "hex";
    case FwupdVersionFormat::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

FwupdVersionFormat ParseFwupdVersionFormat(base::StringPiece enum_string) {
  if (enum_string == "plain")
    return FwupdVersionFormat::kPlain;
  if (enum_string == "number")
    return FwupdVersionFormat::kNumber;
  if (enum_string == "pair")
    return FwupdVersionFormat::kPair;
  if (enum_string == "triplet")
    return FwupdVersionFormat::kTriplet;
  if (enum_string == "quad")
    return FwupdVersionFormat::kQuad;
  if (enum_string == "bcd")
    return FwupdVersionFormat::kBcd;
  if (enum_string == "intelMe")
    return FwupdVersionFormat::kIntelMe;
  if (enum_string == "intelMe2")
    return FwupdVersionFormat::kIntelMe2;
  if (enum_string == "surfaceLegacy")
    return FwupdVersionFormat::kSurfaceLegacy;
  if (enum_string == "surface")
    return FwupdVersionFormat::kSurface;
  if (enum_string == "dellBios")
    return FwupdVersionFormat::kDellBios;
  if (enum_string == "hex")
    return FwupdVersionFormat::kHex;
  return FwupdVersionFormat::kNone;
}

std::u16string GetFwupdVersionFormatParseError(base::StringPiece enum_string) {
  return u"expected \"plain\" or \"number\" or \"pair\" or \"triplet\" or \"quad\" or \"bcd\" or \"intelMe\" or \"intelMe2\" or \"surfaceLegacy\" or \"surface\" or \"dellBios\" or \"hex\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


FwupdFirmwareVersionInfo::FwupdFirmwareVersionInfo()
: version_format() {}

FwupdFirmwareVersionInfo::~FwupdFirmwareVersionInfo() = default;
FwupdFirmwareVersionInfo::FwupdFirmwareVersionInfo(FwupdFirmwareVersionInfo&& rhs) = default;
FwupdFirmwareVersionInfo& FwupdFirmwareVersionInfo::operator=(FwupdFirmwareVersionInfo&& rhs) = default;
FwupdFirmwareVersionInfo FwupdFirmwareVersionInfo::Clone() const {
  FwupdFirmwareVersionInfo out;
  out.version = version;
  out.version_format = version_format;
  return out;
}

// static
bool FwupdFirmwareVersionInfo::Populate(
    const base::Value::Dict& dict, FwupdFirmwareVersionInfo& out) {
  out.version_format = FwupdVersionFormat();
  const base::Value* version_value = dict.Find("version");
  if (version_value) {
    {
      auto* temp = (*version_value).GetIfString();
      if (!temp) {
        out.version = absl::nullopt;
        return false;
      }
      out.version = *temp;
    }
  }

  const base::Value* version_format_value = dict.Find("version_format");
  if (version_format_value) {
    {
      const std::string* fwupd_version_format_as_string = (*version_format_value).GetIfString();
      if (!fwupd_version_format_as_string) {
        return false;
      }
      out.version_format = ParseFwupdVersionFormat(*fwupd_version_format_as_string);
      if (out.version_format == FwupdVersionFormat()) {
        return false;
      }
    }
    } else {
    out.version_format = FwupdVersionFormat();
  }

  return true;
}

// static
bool FwupdFirmwareVersionInfo::Populate(
    const base::Value& value, FwupdFirmwareVersionInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<FwupdFirmwareVersionInfo> FwupdFirmwareVersionInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<FwupdFirmwareVersionInfo>();
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
absl::optional<FwupdFirmwareVersionInfo> FwupdFirmwareVersionInfo::FromValue(const base::Value::Dict& value) {
  FwupdFirmwareVersionInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<FwupdFirmwareVersionInfo> FwupdFirmwareVersionInfo::FromValue(const base::Value& value) {
  FwupdFirmwareVersionInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict FwupdFirmwareVersionInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->version) {
    to_value_result.Set("version", *this->version);

  }
  if (this->version_format != FwupdVersionFormat()) {
    to_value_result.Set("version_format", os_telemetry::ToString(this->version_format));

  }

  return to_value_result;
}


const char* ToString(UsbVersion enum_param) {
  switch (enum_param) {
    case UsbVersion::kUnknown:
      return "unknown";
    case UsbVersion::kUsb1:
      return "usb1";
    case UsbVersion::kUsb2:
      return "usb2";
    case UsbVersion::kUsb3:
      return "usb3";
    case UsbVersion::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

UsbVersion ParseUsbVersion(base::StringPiece enum_string) {
  if (enum_string == "unknown")
    return UsbVersion::kUnknown;
  if (enum_string == "usb1")
    return UsbVersion::kUsb1;
  if (enum_string == "usb2")
    return UsbVersion::kUsb2;
  if (enum_string == "usb3")
    return UsbVersion::kUsb3;
  return UsbVersion::kNone;
}

std::u16string GetUsbVersionParseError(base::StringPiece enum_string) {
  return u"expected \"unknown\" or \"usb1\" or \"usb2\" or \"usb3\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(UsbSpecSpeed enum_param) {
  switch (enum_param) {
    case UsbSpecSpeed::kUnknown:
      return "unknown";
    case UsbSpecSpeed::kN1_5mbps:
      return "n1_5Mbps";
    case UsbSpecSpeed::kN12Mbps:
      return "n12Mbps";
    case UsbSpecSpeed::kN480Mbps:
      return "n480Mbps";
    case UsbSpecSpeed::kN5Gbps:
      return "n5Gbps";
    case UsbSpecSpeed::kN10Gbps:
      return "n10Gbps";
    case UsbSpecSpeed::kN20Gbps:
      return "n20Gbps";
    case UsbSpecSpeed::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

UsbSpecSpeed ParseUsbSpecSpeed(base::StringPiece enum_string) {
  if (enum_string == "unknown")
    return UsbSpecSpeed::kUnknown;
  if (enum_string == "n1_5Mbps")
    return UsbSpecSpeed::kN1_5mbps;
  if (enum_string == "n12Mbps")
    return UsbSpecSpeed::kN12Mbps;
  if (enum_string == "n480Mbps")
    return UsbSpecSpeed::kN480Mbps;
  if (enum_string == "n5Gbps")
    return UsbSpecSpeed::kN5Gbps;
  if (enum_string == "n10Gbps")
    return UsbSpecSpeed::kN10Gbps;
  if (enum_string == "n20Gbps")
    return UsbSpecSpeed::kN20Gbps;
  return UsbSpecSpeed::kNone;
}

std::u16string GetUsbSpecSpeedParseError(base::StringPiece enum_string) {
  return u"expected \"unknown\" or \"n1_5Mbps\" or \"n12Mbps\" or \"n480Mbps\" or \"n5Gbps\" or \"n10Gbps\" or \"n20Gbps\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


UsbBusInfo::UsbBusInfo()
: version(),
spec_speed() {}

UsbBusInfo::~UsbBusInfo() = default;
UsbBusInfo::UsbBusInfo(UsbBusInfo&& rhs) = default;
UsbBusInfo& UsbBusInfo::operator=(UsbBusInfo&& rhs) = default;
UsbBusInfo UsbBusInfo::Clone() const {
  UsbBusInfo out;
  out.class_id = class_id;
  out.subclass_id = subclass_id;
  out.protocol_id = protocol_id;
  out.vendor_id = vendor_id;
  out.product_id = product_id;
  out.interfaces.reserve(interfaces.size());
  for (const auto& element : interfaces) {
    json_schema_compiler::util::AppendToContainer(out.interfaces, element.Clone());
  }
  if (fwupd_firmware_version_info) {
    out.fwupd_firmware_version_info = fwupd_firmware_version_info->Clone();
  }
  out.version = version;
  out.spec_speed = spec_speed;
  return out;
}

// static
bool UsbBusInfo::Populate(
    const base::Value::Dict& dict, UsbBusInfo& out) {
  out.version = UsbVersion();
  out.spec_speed = UsbSpecSpeed();
  const base::Value* class_id_value = dict.Find("classId");
  if (class_id_value) {
    {
      auto temp = (*class_id_value).GetIfDouble();
      if (!temp.has_value()) {
        out.class_id = absl::nullopt;
        return false;
      }
      out.class_id = *temp;
    }
  }

  const base::Value* subclass_id_value = dict.Find("subclassId");
  if (subclass_id_value) {
    {
      auto temp = (*subclass_id_value).GetIfDouble();
      if (!temp.has_value()) {
        out.subclass_id = absl::nullopt;
        return false;
      }
      out.subclass_id = *temp;
    }
  }

  const base::Value* protocol_id_value = dict.Find("protocolId");
  if (protocol_id_value) {
    {
      auto temp = (*protocol_id_value).GetIfDouble();
      if (!temp.has_value()) {
        out.protocol_id = absl::nullopt;
        return false;
      }
      out.protocol_id = *temp;
    }
  }

  const base::Value* vendor_id_value = dict.Find("vendorId");
  if (vendor_id_value) {
    {
      auto temp = (*vendor_id_value).GetIfDouble();
      if (!temp.has_value()) {
        out.vendor_id = absl::nullopt;
        return false;
      }
      out.vendor_id = *temp;
    }
  }

  const base::Value* product_id_value = dict.Find("productId");
  if (product_id_value) {
    {
      auto temp = (*product_id_value).GetIfDouble();
      if (!temp.has_value()) {
        out.product_id = absl::nullopt;
        return false;
      }
      out.product_id = *temp;
    }
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

  const base::Value* fwupd_firmware_version_info_value = dict.Find("fwupdFirmwareVersionInfo");
  if (fwupd_firmware_version_info_value) {
    {
      if (!(*fwupd_firmware_version_info_value).is_dict()) {
        return false;
      }
      else {
        FwupdFirmwareVersionInfo temp;
        if (!FwupdFirmwareVersionInfo::Populate((*fwupd_firmware_version_info_value).GetDict(), temp))
          return false;
        out.fwupd_firmware_version_info = std::move(temp);
      }
    }
  }

  const base::Value* version_value = dict.Find("version");
  if (version_value) {
    {
      const std::string* usb_version_as_string = (*version_value).GetIfString();
      if (!usb_version_as_string) {
        return false;
      }
      out.version = ParseUsbVersion(*usb_version_as_string);
      if (out.version == UsbVersion()) {
        return false;
      }
    }
    } else {
    out.version = UsbVersion();
  }

  const base::Value* spec_speed_value = dict.Find("spec_speed");
  if (spec_speed_value) {
    {
      const std::string* usb_spec_speed_as_string = (*spec_speed_value).GetIfString();
      if (!usb_spec_speed_as_string) {
        return false;
      }
      out.spec_speed = ParseUsbSpecSpeed(*usb_spec_speed_as_string);
      if (out.spec_speed == UsbSpecSpeed()) {
        return false;
      }
    }
    } else {
    out.spec_speed = UsbSpecSpeed();
  }

  return true;
}

// static
bool UsbBusInfo::Populate(
    const base::Value& value, UsbBusInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<UsbBusInfo> UsbBusInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<UsbBusInfo>();
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
absl::optional<UsbBusInfo> UsbBusInfo::FromValue(const base::Value::Dict& value) {
  UsbBusInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<UsbBusInfo> UsbBusInfo::FromValue(const base::Value& value) {
  UsbBusInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict UsbBusInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->class_id) {
    to_value_result.Set("classId", *this->class_id);

  }
  if (this->subclass_id) {
    to_value_result.Set("subclassId", *this->subclass_id);

  }
  if (this->protocol_id) {
    to_value_result.Set("protocolId", *this->protocol_id);

  }
  if (this->vendor_id) {
    to_value_result.Set("vendorId", *this->vendor_id);

  }
  if (this->product_id) {
    to_value_result.Set("productId", *this->product_id);

  }
  to_value_result.Set("interfaces", json_schema_compiler::util::CreateValueFromArray(this->interfaces));

  if (this->fwupd_firmware_version_info) {
    to_value_result.Set("fwupdFirmwareVersionInfo", (this->fwupd_firmware_version_info)->ToValue());

  }
  if (this->version != UsbVersion()) {
    to_value_result.Set("version", os_telemetry::ToString(this->version));

  }
  if (this->spec_speed != UsbSpecSpeed()) {
    to_value_result.Set("spec_speed", os_telemetry::ToString(this->spec_speed));

  }

  return to_value_result;
}


UsbBusDevices::UsbBusDevices()
 {}

UsbBusDevices::~UsbBusDevices() = default;
UsbBusDevices::UsbBusDevices(UsbBusDevices&& rhs) = default;
UsbBusDevices& UsbBusDevices::operator=(UsbBusDevices&& rhs) = default;
UsbBusDevices UsbBusDevices::Clone() const {
  UsbBusDevices out;
  out.devices.reserve(devices.size());
  for (const auto& element : devices) {
    json_schema_compiler::util::AppendToContainer(out.devices, element.Clone());
  }
  return out;
}

// static
bool UsbBusDevices::Populate(
    const base::Value::Dict& dict, UsbBusDevices& out) {
  const base::Value* devices_value = dict.Find("devices");
  if (!devices_value) {
    return false;
  }
  {
    if (!(*devices_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*devices_value).GetList(), out.devices)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool UsbBusDevices::Populate(
    const base::Value& value, UsbBusDevices& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<UsbBusDevices> UsbBusDevices::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<UsbBusDevices>();
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
absl::optional<UsbBusDevices> UsbBusDevices::FromValue(const base::Value::Dict& value) {
  UsbBusDevices out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<UsbBusDevices> UsbBusDevices::FromValue(const base::Value& value) {
  UsbBusDevices out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict UsbBusDevices::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("devices", json_schema_compiler::util::CreateValueFromArray(this->devices));


  return to_value_result;
}


VpdInfo::VpdInfo()
 {}

VpdInfo::~VpdInfo() = default;
VpdInfo::VpdInfo(VpdInfo&& rhs) = default;
VpdInfo& VpdInfo::operator=(VpdInfo&& rhs) = default;
VpdInfo VpdInfo::Clone() const {
  VpdInfo out;
  out.activate_date = activate_date;
  out.model_name = model_name;
  out.serial_number = serial_number;
  out.sku_number = sku_number;
  return out;
}

// static
bool VpdInfo::Populate(
    const base::Value::Dict& dict, VpdInfo& out) {
  const base::Value* activate_date_value = dict.Find("activateDate");
  if (activate_date_value) {
    {
      auto* temp = (*activate_date_value).GetIfString();
      if (!temp) {
        out.activate_date = absl::nullopt;
        return false;
      }
      out.activate_date = *temp;
    }
  }

  const base::Value* model_name_value = dict.Find("modelName");
  if (model_name_value) {
    {
      auto* temp = (*model_name_value).GetIfString();
      if (!temp) {
        out.model_name = absl::nullopt;
        return false;
      }
      out.model_name = *temp;
    }
  }

  const base::Value* serial_number_value = dict.Find("serialNumber");
  if (serial_number_value) {
    {
      auto* temp = (*serial_number_value).GetIfString();
      if (!temp) {
        out.serial_number = absl::nullopt;
        return false;
      }
      out.serial_number = *temp;
    }
  }

  const base::Value* sku_number_value = dict.Find("skuNumber");
  if (sku_number_value) {
    {
      auto* temp = (*sku_number_value).GetIfString();
      if (!temp) {
        out.sku_number = absl::nullopt;
        return false;
      }
      out.sku_number = *temp;
    }
  }

  return true;
}

// static
bool VpdInfo::Populate(
    const base::Value& value, VpdInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<VpdInfo> VpdInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<VpdInfo>();
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
absl::optional<VpdInfo> VpdInfo::FromValue(const base::Value::Dict& value) {
  VpdInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<VpdInfo> VpdInfo::FromValue(const base::Value& value) {
  VpdInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict VpdInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->activate_date) {
    to_value_result.Set("activateDate", *this->activate_date);

  }
  if (this->model_name) {
    to_value_result.Set("modelName", *this->model_name);

  }
  if (this->serial_number) {
    to_value_result.Set("serialNumber", *this->serial_number);

  }
  if (this->sku_number) {
    to_value_result.Set("skuNumber", *this->sku_number);

  }

  return to_value_result;
}


StatefulPartitionInfo::StatefulPartitionInfo()
 {}

StatefulPartitionInfo::~StatefulPartitionInfo() = default;
StatefulPartitionInfo::StatefulPartitionInfo(StatefulPartitionInfo&& rhs) = default;
StatefulPartitionInfo& StatefulPartitionInfo::operator=(StatefulPartitionInfo&& rhs) = default;
StatefulPartitionInfo StatefulPartitionInfo::Clone() const {
  StatefulPartitionInfo out;
  out.available_space = available_space;
  out.total_space = total_space;
  return out;
}

// static
bool StatefulPartitionInfo::Populate(
    const base::Value::Dict& dict, StatefulPartitionInfo& out) {
  const base::Value* available_space_value = dict.Find("availableSpace");
  if (available_space_value) {
    {
      auto temp = (*available_space_value).GetIfDouble();
      if (!temp.has_value()) {
        out.available_space = absl::nullopt;
        return false;
      }
      out.available_space = *temp;
    }
  }

  const base::Value* total_space_value = dict.Find("totalSpace");
  if (total_space_value) {
    {
      auto temp = (*total_space_value).GetIfDouble();
      if (!temp.has_value()) {
        out.total_space = absl::nullopt;
        return false;
      }
      out.total_space = *temp;
    }
  }

  return true;
}

// static
bool StatefulPartitionInfo::Populate(
    const base::Value& value, StatefulPartitionInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<StatefulPartitionInfo> StatefulPartitionInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<StatefulPartitionInfo>();
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
absl::optional<StatefulPartitionInfo> StatefulPartitionInfo::FromValue(const base::Value::Dict& value) {
  StatefulPartitionInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<StatefulPartitionInfo> StatefulPartitionInfo::FromValue(const base::Value& value) {
  StatefulPartitionInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict StatefulPartitionInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->available_space) {
    to_value_result.Set("availableSpace", *this->available_space);

  }
  if (this->total_space) {
    to_value_result.Set("totalSpace", *this->total_space);

  }

  return to_value_result;
}


const char* ToString(TpmGSCVersion enum_param) {
  switch (enum_param) {
    case TpmGSCVersion::kNotGsc:
      return "not_gsc";
    case TpmGSCVersion::kCr50:
      return "cr50";
    case TpmGSCVersion::kTi50:
      return "ti50";
    case TpmGSCVersion::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

TpmGSCVersion ParseTpmGSCVersion(base::StringPiece enum_string) {
  if (enum_string == "not_gsc")
    return TpmGSCVersion::kNotGsc;
  if (enum_string == "cr50")
    return TpmGSCVersion::kCr50;
  if (enum_string == "ti50")
    return TpmGSCVersion::kTi50;
  return TpmGSCVersion::kNone;
}

std::u16string GetTpmGSCVersionParseError(base::StringPiece enum_string) {
  return u"expected \"not_gsc\" or \"cr50\" or \"ti50\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


TpmVersion::TpmVersion()
: gsc_version() {}

TpmVersion::~TpmVersion() = default;
TpmVersion::TpmVersion(TpmVersion&& rhs) = default;
TpmVersion& TpmVersion::operator=(TpmVersion&& rhs) = default;
TpmVersion TpmVersion::Clone() const {
  TpmVersion out;
  out.gsc_version = gsc_version;
  out.family = family;
  out.spec_level = spec_level;
  out.manufacturer = manufacturer;
  out.tpm_model = tpm_model;
  out.firmware_version = firmware_version;
  out.vendor_specific = vendor_specific;
  return out;
}

// static
bool TpmVersion::Populate(
    const base::Value::Dict& dict, TpmVersion& out) {
  out.gsc_version = TpmGSCVersion();
  const base::Value* gsc_version_value = dict.Find("gscVersion");
  if (gsc_version_value) {
    {
      const std::string* tpm_gsc_version_as_string = (*gsc_version_value).GetIfString();
      if (!tpm_gsc_version_as_string) {
        return false;
      }
      out.gsc_version = ParseTpmGSCVersion(*tpm_gsc_version_as_string);
      if (out.gsc_version == TpmGSCVersion()) {
        return false;
      }
    }
    } else {
    out.gsc_version = TpmGSCVersion();
  }

  const base::Value* family_value = dict.Find("family");
  if (family_value) {
    {
      auto temp = (*family_value).GetIfInt();
      if (!temp.has_value()) {
        out.family = absl::nullopt;
        return false;
      }
      out.family = *temp;
    }
  }

  const base::Value* spec_level_value = dict.Find("specLevel");
  if (spec_level_value) {
    {
      auto temp = (*spec_level_value).GetIfDouble();
      if (!temp.has_value()) {
        out.spec_level = absl::nullopt;
        return false;
      }
      out.spec_level = *temp;
    }
  }

  const base::Value* manufacturer_value = dict.Find("manufacturer");
  if (manufacturer_value) {
    {
      auto temp = (*manufacturer_value).GetIfInt();
      if (!temp.has_value()) {
        out.manufacturer = absl::nullopt;
        return false;
      }
      out.manufacturer = *temp;
    }
  }

  const base::Value* tpm_model_value = dict.Find("tpmModel");
  if (tpm_model_value) {
    {
      auto temp = (*tpm_model_value).GetIfInt();
      if (!temp.has_value()) {
        out.tpm_model = absl::nullopt;
        return false;
      }
      out.tpm_model = *temp;
    }
  }

  const base::Value* firmware_version_value = dict.Find("firmwareVersion");
  if (firmware_version_value) {
    {
      auto temp = (*firmware_version_value).GetIfDouble();
      if (!temp.has_value()) {
        out.firmware_version = absl::nullopt;
        return false;
      }
      out.firmware_version = *temp;
    }
  }

  const base::Value* vendor_specific_value = dict.Find("vendorSpecific");
  if (vendor_specific_value) {
    {
      auto* temp = (*vendor_specific_value).GetIfString();
      if (!temp) {
        out.vendor_specific = absl::nullopt;
        return false;
      }
      out.vendor_specific = *temp;
    }
  }

  return true;
}

// static
bool TpmVersion::Populate(
    const base::Value& value, TpmVersion& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<TpmVersion> TpmVersion::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<TpmVersion>();
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
absl::optional<TpmVersion> TpmVersion::FromValue(const base::Value::Dict& value) {
  TpmVersion out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<TpmVersion> TpmVersion::FromValue(const base::Value& value) {
  TpmVersion out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict TpmVersion::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->gsc_version != TpmGSCVersion()) {
    to_value_result.Set("gscVersion", os_telemetry::ToString(this->gsc_version));

  }
  if (this->family) {
    to_value_result.Set("family", *this->family);

  }
  if (this->spec_level) {
    to_value_result.Set("specLevel", *this->spec_level);

  }
  if (this->manufacturer) {
    to_value_result.Set("manufacturer", *this->manufacturer);

  }
  if (this->tpm_model) {
    to_value_result.Set("tpmModel", *this->tpm_model);

  }
  if (this->firmware_version) {
    to_value_result.Set("firmwareVersion", *this->firmware_version);

  }
  if (this->vendor_specific) {
    to_value_result.Set("vendorSpecific", *this->vendor_specific);

  }

  return to_value_result;
}


TpmStatus::TpmStatus()
 {}

TpmStatus::~TpmStatus() = default;
TpmStatus::TpmStatus(TpmStatus&& rhs) = default;
TpmStatus& TpmStatus::operator=(TpmStatus&& rhs) = default;
TpmStatus TpmStatus::Clone() const {
  TpmStatus out;
  out.enabled = enabled;
  out.owned = owned;
  out.owner_password_is_present = owner_password_is_present;
  return out;
}

// static
bool TpmStatus::Populate(
    const base::Value::Dict& dict, TpmStatus& out) {
  const base::Value* enabled_value = dict.Find("enabled");
  if (enabled_value) {
    {
      auto temp = (*enabled_value).GetIfBool();
      if (!temp.has_value()) {
        out.enabled = absl::nullopt;
        return false;
      }
      out.enabled = *temp;
    }
  }

  const base::Value* owned_value = dict.Find("owned");
  if (owned_value) {
    {
      auto temp = (*owned_value).GetIfBool();
      if (!temp.has_value()) {
        out.owned = absl::nullopt;
        return false;
      }
      out.owned = *temp;
    }
  }

  const base::Value* owner_password_is_present_value = dict.Find("ownerPasswordIsPresent");
  if (owner_password_is_present_value) {
    {
      auto temp = (*owner_password_is_present_value).GetIfBool();
      if (!temp.has_value()) {
        out.owner_password_is_present = absl::nullopt;
        return false;
      }
      out.owner_password_is_present = *temp;
    }
  }

  return true;
}

// static
bool TpmStatus::Populate(
    const base::Value& value, TpmStatus& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<TpmStatus> TpmStatus::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<TpmStatus>();
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
absl::optional<TpmStatus> TpmStatus::FromValue(const base::Value::Dict& value) {
  TpmStatus out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<TpmStatus> TpmStatus::FromValue(const base::Value& value) {
  TpmStatus out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict TpmStatus::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->enabled) {
    to_value_result.Set("enabled", *this->enabled);

  }
  if (this->owned) {
    to_value_result.Set("owned", *this->owned);

  }
  if (this->owner_password_is_present) {
    to_value_result.Set("ownerPasswordIsPresent", *this->owner_password_is_present);

  }

  return to_value_result;
}


TpmDictionaryAttack::TpmDictionaryAttack()
 {}

TpmDictionaryAttack::~TpmDictionaryAttack() = default;
TpmDictionaryAttack::TpmDictionaryAttack(TpmDictionaryAttack&& rhs) = default;
TpmDictionaryAttack& TpmDictionaryAttack::operator=(TpmDictionaryAttack&& rhs) = default;
TpmDictionaryAttack TpmDictionaryAttack::Clone() const {
  TpmDictionaryAttack out;
  out.counter = counter;
  out.threshold = threshold;
  out.lockout_in_effect = lockout_in_effect;
  out.lockout_seconds_remaining = lockout_seconds_remaining;
  return out;
}

// static
bool TpmDictionaryAttack::Populate(
    const base::Value::Dict& dict, TpmDictionaryAttack& out) {
  const base::Value* counter_value = dict.Find("counter");
  if (counter_value) {
    {
      auto temp = (*counter_value).GetIfInt();
      if (!temp.has_value()) {
        out.counter = absl::nullopt;
        return false;
      }
      out.counter = *temp;
    }
  }

  const base::Value* threshold_value = dict.Find("threshold");
  if (threshold_value) {
    {
      auto temp = (*threshold_value).GetIfInt();
      if (!temp.has_value()) {
        out.threshold = absl::nullopt;
        return false;
      }
      out.threshold = *temp;
    }
  }

  const base::Value* lockout_in_effect_value = dict.Find("lockoutInEffect");
  if (lockout_in_effect_value) {
    {
      auto temp = (*lockout_in_effect_value).GetIfBool();
      if (!temp.has_value()) {
        out.lockout_in_effect = absl::nullopt;
        return false;
      }
      out.lockout_in_effect = *temp;
    }
  }

  const base::Value* lockout_seconds_remaining_value = dict.Find("lockoutSecondsRemaining");
  if (lockout_seconds_remaining_value) {
    {
      auto temp = (*lockout_seconds_remaining_value).GetIfInt();
      if (!temp.has_value()) {
        out.lockout_seconds_remaining = absl::nullopt;
        return false;
      }
      out.lockout_seconds_remaining = *temp;
    }
  }

  return true;
}

// static
bool TpmDictionaryAttack::Populate(
    const base::Value& value, TpmDictionaryAttack& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<TpmDictionaryAttack> TpmDictionaryAttack::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<TpmDictionaryAttack>();
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
absl::optional<TpmDictionaryAttack> TpmDictionaryAttack::FromValue(const base::Value::Dict& value) {
  TpmDictionaryAttack out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<TpmDictionaryAttack> TpmDictionaryAttack::FromValue(const base::Value& value) {
  TpmDictionaryAttack out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict TpmDictionaryAttack::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->counter) {
    to_value_result.Set("counter", *this->counter);

  }
  if (this->threshold) {
    to_value_result.Set("threshold", *this->threshold);

  }
  if (this->lockout_in_effect) {
    to_value_result.Set("lockoutInEffect", *this->lockout_in_effect);

  }
  if (this->lockout_seconds_remaining) {
    to_value_result.Set("lockoutSecondsRemaining", *this->lockout_seconds_remaining);

  }

  return to_value_result;
}


TpmInfo::TpmInfo()
 {}

TpmInfo::~TpmInfo() = default;
TpmInfo::TpmInfo(TpmInfo&& rhs) = default;
TpmInfo& TpmInfo::operator=(TpmInfo&& rhs) = default;
TpmInfo TpmInfo::Clone() const {
  TpmInfo out;
  out.version = version.Clone();
  out.status = status.Clone();
  out.dictionary_attack = dictionary_attack.Clone();
  return out;
}

// static
bool TpmInfo::Populate(
    const base::Value::Dict& dict, TpmInfo& out) {
  const base::Value* version_value = dict.Find("version");
  if (!version_value) {
    return false;
  }
  {
    if (!(*version_value).is_dict()) {
      return false;
    }
    if (!TpmVersion::Populate((*version_value).GetDict(), out.version)) {
      return false;
    }
  }

  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    if (!(*status_value).is_dict()) {
      return false;
    }
    if (!TpmStatus::Populate((*status_value).GetDict(), out.status)) {
      return false;
    }
  }

  const base::Value* dictionary_attack_value = dict.Find("dictionaryAttack");
  if (!dictionary_attack_value) {
    return false;
  }
  {
    if (!(*dictionary_attack_value).is_dict()) {
      return false;
    }
    if (!TpmDictionaryAttack::Populate((*dictionary_attack_value).GetDict(), out.dictionary_attack)) {
      return false;
    }
  }

  return true;
}

// static
bool TpmInfo::Populate(
    const base::Value& value, TpmInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<TpmInfo> TpmInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<TpmInfo>();
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
absl::optional<TpmInfo> TpmInfo::FromValue(const base::Value::Dict& value) {
  TpmInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<TpmInfo> TpmInfo::FromValue(const base::Value& value) {
  TpmInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict TpmInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("version", (this->version).ToValue());

  to_value_result.Set("status", (this->status).ToValue());

  to_value_result.Set("dictionaryAttack", (this->dictionary_attack).ToValue());


  return to_value_result;
}



//
// Functions
//

namespace GetAudioInfo {

base::Value::List Results::Create(const AudioInfo& audio_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((audio_info).ToValue());

  return create_results;
}
}  // namespace GetAudioInfo

namespace GetBatteryInfo {

base::Value::List Results::Create(const BatteryInfo& battery_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((battery_info).ToValue());

  return create_results;
}
}  // namespace GetBatteryInfo

namespace GetNonRemovableBlockDevicesInfo {

base::Value::List Results::Create(const NonRemovableBlockDeviceInfoResponse& device_info_response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((device_info_response).ToValue());

  return create_results;
}
}  // namespace GetNonRemovableBlockDevicesInfo

namespace GetCpuInfo {

base::Value::List Results::Create(const CpuInfo& cpu_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((cpu_info).ToValue());

  return create_results;
}
}  // namespace GetCpuInfo

namespace GetInternetConnectivityInfo {

base::Value::List Results::Create(const InternetConnectivityInfo& network_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((network_info).ToValue());

  return create_results;
}
}  // namespace GetInternetConnectivityInfo

namespace GetMarketingInfo {

base::Value::List Results::Create(const MarketingInfo& marketing_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((marketing_info).ToValue());

  return create_results;
}
}  // namespace GetMarketingInfo

namespace GetMemoryInfo {

base::Value::List Results::Create(const MemoryInfo& cpu_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((cpu_info).ToValue());

  return create_results;
}
}  // namespace GetMemoryInfo

namespace GetOemData {

base::Value::List Results::Create(const OemData& oem_data) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((oem_data).ToValue());

  return create_results;
}
}  // namespace GetOemData

namespace GetOsVersionInfo {

base::Value::List Results::Create(const OsVersionInfo& os_version_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((os_version_info).ToValue());

  return create_results;
}
}  // namespace GetOsVersionInfo

namespace GetUsbBusInfo {

base::Value::List Results::Create(const UsbBusDevices& usb_bus_devices) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((usb_bus_devices).ToValue());

  return create_results;
}
}  // namespace GetUsbBusInfo

namespace GetVpdInfo {

base::Value::List Results::Create(const VpdInfo& vpd_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((vpd_info).ToValue());

  return create_results;
}
}  // namespace GetVpdInfo

namespace GetStatefulPartitionInfo {

base::Value::List Results::Create(const StatefulPartitionInfo& stateful_partition_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((stateful_partition_info).ToValue());

  return create_results;
}
}  // namespace GetStatefulPartitionInfo

namespace GetTpmInfo {

base::Value::List Results::Create(const TpmInfo& tpm_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((tpm_info).ToValue());

  return create_results;
}
}  // namespace GetTpmInfo

namespace GetDisplayInfo {

base::Value::List Results::Create(const DisplayInfo& display_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((display_info).ToValue());

  return create_results;
}
}  // namespace GetDisplayInfo

}  // namespace os_telemetry
}  // namespace api
}  // namespace chromeos

