// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/audio.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/audio.h"

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
namespace audio {
//
// Types
//

const char* ToString(StreamType enum_param) {
  switch (enum_param) {
    case StreamType::kInput:
      return "INPUT";
    case StreamType::kOutput:
      return "OUTPUT";
    case StreamType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

StreamType ParseStreamType(base::StringPiece enum_string) {
  if (enum_string == "INPUT")
    return StreamType::kInput;
  if (enum_string == "OUTPUT")
    return StreamType::kOutput;
  return StreamType::kNone;
}

std::u16string GetStreamTypeParseError(base::StringPiece enum_string) {
  return u"expected \"INPUT\" or \"OUTPUT\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DeviceType enum_param) {
  switch (enum_param) {
    case DeviceType::kHeadphone:
      return "HEADPHONE";
    case DeviceType::kMic:
      return "MIC";
    case DeviceType::kUsb:
      return "USB";
    case DeviceType::kBluetooth:
      return "BLUETOOTH";
    case DeviceType::kHdmi:
      return "HDMI";
    case DeviceType::kInternalSpeaker:
      return "INTERNAL_SPEAKER";
    case DeviceType::kInternalMic:
      return "INTERNAL_MIC";
    case DeviceType::kFrontMic:
      return "FRONT_MIC";
    case DeviceType::kRearMic:
      return "REAR_MIC";
    case DeviceType::kKeyboardMic:
      return "KEYBOARD_MIC";
    case DeviceType::kHotword:
      return "HOTWORD";
    case DeviceType::kLineout:
      return "LINEOUT";
    case DeviceType::kPostMixLoopback:
      return "POST_MIX_LOOPBACK";
    case DeviceType::kPostDspLoopback:
      return "POST_DSP_LOOPBACK";
    case DeviceType::kAlsaLoopback:
      return "ALSA_LOOPBACK";
    case DeviceType::kOther:
      return "OTHER";
    case DeviceType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DeviceType ParseDeviceType(base::StringPiece enum_string) {
  if (enum_string == "HEADPHONE")
    return DeviceType::kHeadphone;
  if (enum_string == "MIC")
    return DeviceType::kMic;
  if (enum_string == "USB")
    return DeviceType::kUsb;
  if (enum_string == "BLUETOOTH")
    return DeviceType::kBluetooth;
  if (enum_string == "HDMI")
    return DeviceType::kHdmi;
  if (enum_string == "INTERNAL_SPEAKER")
    return DeviceType::kInternalSpeaker;
  if (enum_string == "INTERNAL_MIC")
    return DeviceType::kInternalMic;
  if (enum_string == "FRONT_MIC")
    return DeviceType::kFrontMic;
  if (enum_string == "REAR_MIC")
    return DeviceType::kRearMic;
  if (enum_string == "KEYBOARD_MIC")
    return DeviceType::kKeyboardMic;
  if (enum_string == "HOTWORD")
    return DeviceType::kHotword;
  if (enum_string == "LINEOUT")
    return DeviceType::kLineout;
  if (enum_string == "POST_MIX_LOOPBACK")
    return DeviceType::kPostMixLoopback;
  if (enum_string == "POST_DSP_LOOPBACK")
    return DeviceType::kPostDspLoopback;
  if (enum_string == "ALSA_LOOPBACK")
    return DeviceType::kAlsaLoopback;
  if (enum_string == "OTHER")
    return DeviceType::kOther;
  return DeviceType::kNone;
}

std::u16string GetDeviceTypeParseError(base::StringPiece enum_string) {
  return u"expected \"HEADPHONE\" or \"MIC\" or \"USB\" or \"BLUETOOTH\" or \"HDMI\" or \"INTERNAL_SPEAKER\" or \"INTERNAL_MIC\" or \"FRONT_MIC\" or \"REAR_MIC\" or \"KEYBOARD_MIC\" or \"HOTWORD\" or \"LINEOUT\" or \"POST_MIX_LOOPBACK\" or \"POST_DSP_LOOPBACK\" or \"ALSA_LOOPBACK\" or \"OTHER\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


AudioDeviceInfo::AudioDeviceInfo()
: stream_type(),
device_type(),
is_active(false),
level(0) {}

AudioDeviceInfo::~AudioDeviceInfo() = default;
AudioDeviceInfo::AudioDeviceInfo(AudioDeviceInfo&& rhs) = default;
AudioDeviceInfo& AudioDeviceInfo::operator=(AudioDeviceInfo&& rhs) = default;
AudioDeviceInfo AudioDeviceInfo::Clone() const {
  AudioDeviceInfo out;
  out.id = id;
  out.stream_type = stream_type;
  out.device_type = device_type;
  out.display_name = display_name;
  out.device_name = device_name;
  out.is_active = is_active;
  out.level = level;
  out.stable_device_id = stable_device_id;
  return out;
}

// static
bool AudioDeviceInfo::Populate(
    const base::Value::Dict& dict, AudioDeviceInfo& out) {
  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto* temp = (*id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* stream_type_value = dict.Find("streamType");
  if (!stream_type_value) {
    return false;
  }
  {
    const std::string* stream_type_as_string = (*stream_type_value).GetIfString();
    if (!stream_type_as_string) {
      return false;
    }
    out.stream_type = ParseStreamType(*stream_type_as_string);
    if (out.stream_type == StreamType()) {
      return false;
    }
  }

  const base::Value* device_type_value = dict.Find("deviceType");
  if (!device_type_value) {
    return false;
  }
  {
    const std::string* device_type_as_string = (*device_type_value).GetIfString();
    if (!device_type_as_string) {
      return false;
    }
    out.device_type = ParseDeviceType(*device_type_as_string);
    if (out.device_type == DeviceType()) {
      return false;
    }
  }

  const base::Value* display_name_value = dict.Find("displayName");
  if (!display_name_value) {
    return false;
  }
  {
    auto* temp = (*display_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.display_name = *temp;
  }

  const base::Value* device_name_value = dict.Find("deviceName");
  if (!device_name_value) {
    return false;
  }
  {
    auto* temp = (*device_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.device_name = *temp;
  }

  const base::Value* is_active_value = dict.Find("isActive");
  if (!is_active_value) {
    return false;
  }
  {
    auto temp = (*is_active_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_active = *temp;
  }

  const base::Value* level_value = dict.Find("level");
  if (!level_value) {
    return false;
  }
  {
    auto temp = (*level_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.level = *temp;
  }

  const base::Value* stable_device_id_value = dict.Find("stableDeviceId");
  if (stable_device_id_value) {
    {
      auto* temp = (*stable_device_id_value).GetIfString();
      if (!temp) {
        out.stable_device_id = absl::nullopt;
        return false;
      }
      out.stable_device_id = *temp;
    }
  }

  return true;
}

// static
bool AudioDeviceInfo::Populate(
    const base::Value& value, AudioDeviceInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<AudioDeviceInfo> AudioDeviceInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<AudioDeviceInfo>();
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
absl::optional<AudioDeviceInfo> AudioDeviceInfo::FromValue(const base::Value::Dict& value) {
  AudioDeviceInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<AudioDeviceInfo> AudioDeviceInfo::FromValue(const base::Value& value) {
  AudioDeviceInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict AudioDeviceInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("streamType", audio::ToString(this->stream_type));

  to_value_result.Set("deviceType", audio::ToString(this->device_type));

  to_value_result.Set("displayName", this->display_name);

  to_value_result.Set("deviceName", this->device_name);

  to_value_result.Set("isActive", this->is_active);

  to_value_result.Set("level", this->level);

  if (this->stable_device_id) {
    to_value_result.Set("stableDeviceId", *this->stable_device_id);

  }

  return to_value_result;
}


DeviceFilter::DeviceFilter()
 {}

DeviceFilter::~DeviceFilter() = default;
DeviceFilter::DeviceFilter(DeviceFilter&& rhs) = default;
DeviceFilter& DeviceFilter::operator=(DeviceFilter&& rhs) = default;
DeviceFilter DeviceFilter::Clone() const {
  DeviceFilter out;
  out.stream_types = stream_types;
  out.is_active = is_active;
  return out;
}

// static
bool DeviceFilter::Populate(
    const base::Value::Dict& dict, DeviceFilter& out) {
  const base::Value* stream_types_value = dict.Find("streamTypes");
  if (stream_types_value) {
    {
      if (!(*stream_types_value).is_list()) {
        return false;
      }
      else {
        out.stream_types.emplace();
        for (const auto& it : ((*stream_types_value)).GetList()) {
          StreamType tmp;
          const std::string* stream_type_as_string = (it).GetIfString();
          if (!stream_type_as_string) {
            return false;
          }
          tmp = ParseStreamType(*stream_type_as_string);
          if (tmp == StreamType()) {
            return false;
          }
          out.stream_types->push_back(tmp);
        }
      }
    }
  }

  const base::Value* is_active_value = dict.Find("isActive");
  if (is_active_value) {
    {
      auto temp = (*is_active_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_active = absl::nullopt;
        return false;
      }
      out.is_active = *temp;
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
std::unique_ptr<DeviceFilter> DeviceFilter::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<DeviceFilter>();
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
absl::optional<DeviceFilter> DeviceFilter::FromValue(const base::Value::Dict& value) {
  DeviceFilter out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DeviceFilter> DeviceFilter::FromValue(const base::Value& value) {
  DeviceFilter out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict DeviceFilter::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->stream_types) {
    {
      std::vector<std::string> streamTypes_list;
      for (const auto& it : *(this->stream_types)) {
        streamTypes_list.emplace_back(audio::ToString(it));
      }
      to_value_result.Set("streamTypes", json_schema_compiler::util::CreateValueFromArray(streamTypes_list));
    }

  }
  if (this->is_active) {
    to_value_result.Set("isActive", *this->is_active);

  }

  return to_value_result;
}


DeviceProperties::DeviceProperties()
 {}

DeviceProperties::~DeviceProperties() = default;
DeviceProperties::DeviceProperties(DeviceProperties&& rhs) = default;
DeviceProperties& DeviceProperties::operator=(DeviceProperties&& rhs) = default;
DeviceProperties DeviceProperties::Clone() const {
  DeviceProperties out;
  out.level = level;
  return out;
}

// static
bool DeviceProperties::Populate(
    const base::Value::Dict& dict, DeviceProperties& out) {
  const base::Value* level_value = dict.Find("level");
  if (level_value) {
    {
      auto temp = (*level_value).GetIfInt();
      if (!temp.has_value()) {
        out.level = absl::nullopt;
        return false;
      }
      out.level = *temp;
    }
  }

  return true;
}

// static
bool DeviceProperties::Populate(
    const base::Value& value, DeviceProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<DeviceProperties> DeviceProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<DeviceProperties>();
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
absl::optional<DeviceProperties> DeviceProperties::FromValue(const base::Value::Dict& value) {
  DeviceProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DeviceProperties> DeviceProperties::FromValue(const base::Value& value) {
  DeviceProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict DeviceProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->level) {
    to_value_result.Set("level", *this->level);

  }

  return to_value_result;
}


DeviceIdLists::DeviceIdLists()
 {}

DeviceIdLists::~DeviceIdLists() = default;
DeviceIdLists::DeviceIdLists(DeviceIdLists&& rhs) = default;
DeviceIdLists& DeviceIdLists::operator=(DeviceIdLists&& rhs) = default;
DeviceIdLists DeviceIdLists::Clone() const {
  DeviceIdLists out;
  out.input = input;
  out.output = output;
  return out;
}

// static
bool DeviceIdLists::Populate(
    const base::Value::Dict& dict, DeviceIdLists& out) {
  const base::Value* input_value = dict.Find("input");
  if (input_value) {
    {
      if (!(*input_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*input_value).GetList(), out.input)) {
          return false;
        }
      }
    }
  }

  const base::Value* output_value = dict.Find("output");
  if (output_value) {
    {
      if (!(*output_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*output_value).GetList(), out.output)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool DeviceIdLists::Populate(
    const base::Value& value, DeviceIdLists& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<DeviceIdLists> DeviceIdLists::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<DeviceIdLists>();
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
absl::optional<DeviceIdLists> DeviceIdLists::FromValue(const base::Value::Dict& value) {
  DeviceIdLists out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DeviceIdLists> DeviceIdLists::FromValue(const base::Value& value) {
  DeviceIdLists out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict DeviceIdLists::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->input) {
    to_value_result.Set("input", json_schema_compiler::util::CreateValueFromArray(*this->input));

  }
  if (this->output) {
    to_value_result.Set("output", json_schema_compiler::util::CreateValueFromArray(*this->output));

  }

  return to_value_result;
}


MuteChangedEvent::MuteChangedEvent()
: stream_type(),
is_muted(false) {}

MuteChangedEvent::~MuteChangedEvent() = default;
MuteChangedEvent::MuteChangedEvent(MuteChangedEvent&& rhs) = default;
MuteChangedEvent& MuteChangedEvent::operator=(MuteChangedEvent&& rhs) = default;
MuteChangedEvent MuteChangedEvent::Clone() const {
  MuteChangedEvent out;
  out.stream_type = stream_type;
  out.is_muted = is_muted;
  return out;
}

// static
bool MuteChangedEvent::Populate(
    const base::Value::Dict& dict, MuteChangedEvent& out) {
  const base::Value* stream_type_value = dict.Find("streamType");
  if (!stream_type_value) {
    return false;
  }
  {
    const std::string* stream_type_as_string = (*stream_type_value).GetIfString();
    if (!stream_type_as_string) {
      return false;
    }
    out.stream_type = ParseStreamType(*stream_type_as_string);
    if (out.stream_type == StreamType()) {
      return false;
    }
  }

  const base::Value* is_muted_value = dict.Find("isMuted");
  if (!is_muted_value) {
    return false;
  }
  {
    auto temp = (*is_muted_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_muted = *temp;
  }

  return true;
}

// static
bool MuteChangedEvent::Populate(
    const base::Value& value, MuteChangedEvent& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<MuteChangedEvent> MuteChangedEvent::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<MuteChangedEvent>();
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
absl::optional<MuteChangedEvent> MuteChangedEvent::FromValue(const base::Value::Dict& value) {
  MuteChangedEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<MuteChangedEvent> MuteChangedEvent::FromValue(const base::Value& value) {
  MuteChangedEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict MuteChangedEvent::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("streamType", audio::ToString(this->stream_type));

  to_value_result.Set("isMuted", this->is_muted);


  return to_value_result;
}


LevelChangedEvent::LevelChangedEvent()
: level(0) {}

LevelChangedEvent::~LevelChangedEvent() = default;
LevelChangedEvent::LevelChangedEvent(LevelChangedEvent&& rhs) = default;
LevelChangedEvent& LevelChangedEvent::operator=(LevelChangedEvent&& rhs) = default;
LevelChangedEvent LevelChangedEvent::Clone() const {
  LevelChangedEvent out;
  out.device_id = device_id;
  out.level = level;
  return out;
}

// static
bool LevelChangedEvent::Populate(
    const base::Value::Dict& dict, LevelChangedEvent& out) {
  const base::Value* device_id_value = dict.Find("deviceId");
  if (!device_id_value) {
    return false;
  }
  {
    auto* temp = (*device_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.device_id = *temp;
  }

  const base::Value* level_value = dict.Find("level");
  if (!level_value) {
    return false;
  }
  {
    auto temp = (*level_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.level = *temp;
  }

  return true;
}

// static
bool LevelChangedEvent::Populate(
    const base::Value& value, LevelChangedEvent& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<LevelChangedEvent> LevelChangedEvent::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<LevelChangedEvent>();
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
absl::optional<LevelChangedEvent> LevelChangedEvent::FromValue(const base::Value::Dict& value) {
  LevelChangedEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<LevelChangedEvent> LevelChangedEvent::FromValue(const base::Value& value) {
  LevelChangedEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict LevelChangedEvent::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("deviceId", this->device_id);

  to_value_result.Set("level", this->level);


  return to_value_result;
}



//
// Functions
//

namespace GetDevices {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& filter_value = args[0];
    {
      if (!filter_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        DeviceFilter temp;
        if (!DeviceFilter::Populate(filter_value.GetDict(), temp))
          return absl::nullopt;
        params.filter = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const std::vector<AudioDeviceInfo>& devices) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(devices));

  return create_results;
}
}  // namespace GetDevices

namespace SetActiveDevices {

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
    const base::Value& ids_value = args[0];
    {
      if (!ids_value.is_dict()) {
        return absl::nullopt;
      }
      if (!DeviceIdLists::Populate(ids_value.GetDict(), params.ids)) {
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
}  // namespace SetActiveDevices

namespace SetProperties {

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
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.id = *temp;
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
      if (!DeviceProperties::Populate(properties_value.GetDict(), params.properties)) {
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
}  // namespace SetProperties

namespace GetMute {

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
    const base::Value& stream_type_value = args[0];
    {
      const std::string* stream_type_as_string = stream_type_value.GetIfString();
      if (!stream_type_as_string) {
        return absl::nullopt;
      }
      params.stream_type = ParseStreamType(*stream_type_as_string);
      if (params.stream_type == StreamType()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool value) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(value);

  return create_results;
}
}  // namespace GetMute

namespace SetMute {

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
    const base::Value& stream_type_value = args[0];
    {
      const std::string* stream_type_as_string = stream_type_value.GetIfString();
      if (!stream_type_as_string) {
        return absl::nullopt;
      }
      params.stream_type = ParseStreamType(*stream_type_as_string);
      if (params.stream_type == StreamType()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& is_muted_value = args[1];
    {
      auto temp = is_muted_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.is_muted = *temp;
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
}  // namespace SetMute

//
// Events
//

namespace OnLevelChanged {

const char kEventName[] = "audio.onLevelChanged";

base::Value::List Create(const LevelChangedEvent& event) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event).ToValue());

  return create_results;
}

}  // namespace OnLevelChanged

namespace OnMuteChanged {

const char kEventName[] = "audio.onMuteChanged";

base::Value::List Create(const MuteChangedEvent& event) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event).ToValue());

  return create_results;
}

}  // namespace OnMuteChanged

namespace OnDeviceListChanged {

const char kEventName[] = "audio.onDeviceListChanged";

base::Value::List Create(const std::vector<AudioDeviceInfo>& devices) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(devices));

  return create_results;
}

}  // namespace OnDeviceListChanged

}  // namespace audio
}  // namespace api
}  // namespace extensions

