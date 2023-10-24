// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/audio.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_AUDIO_H__
#define EXTENSIONS_COMMON_API_AUDIO_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace audio {

//
// Types
//

// Type of stream an audio device provides.
enum class StreamType {
  kNone = 0,
  kInput,
  kOutput,
  kMaxValue = kOutput,
};


const char* ToString(StreamType as_enum);
StreamType ParseStreamType(base::StringPiece as_string);
std::u16string GetStreamTypeParseError(base::StringPiece as_string);

// Available audio device types.
enum class DeviceType {
  kNone = 0,
  kHeadphone,
  kMic,
  kUsb,
  kBluetooth,
  kHdmi,
  kInternalSpeaker,
  kInternalMic,
  kFrontMic,
  kRearMic,
  kKeyboardMic,
  kHotword,
  kLineout,
  kPostMixLoopback,
  kPostDspLoopback,
  kAlsaLoopback,
  kOther,
  kMaxValue = kOther,
};


const char* ToString(DeviceType as_enum);
DeviceType ParseDeviceType(base::StringPiece as_string);
std::u16string GetDeviceTypeParseError(base::StringPiece as_string);

struct AudioDeviceInfo {
  AudioDeviceInfo();
  ~AudioDeviceInfo();
  AudioDeviceInfo(const AudioDeviceInfo&) = delete;
  AudioDeviceInfo& operator=(const AudioDeviceInfo&) = delete;
  AudioDeviceInfo(AudioDeviceInfo&& rhs);
  AudioDeviceInfo& operator=(AudioDeviceInfo&& rhs);

  // Populates a AudioDeviceInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AudioDeviceInfo& out);

  // Populates a AudioDeviceInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AudioDeviceInfo& out);

  // Creates a deep copy of AudioDeviceInfo.
  AudioDeviceInfo Clone() const;

  // Creates a AudioDeviceInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<AudioDeviceInfo> FromValueDeprecated(const base::Value& value);

  // Creates a AudioDeviceInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<AudioDeviceInfo> FromValue(const base::Value::Dict& value);

  // Creates a AudioDeviceInfo object from a base::Value, or nullopt on failure.
  static absl::optional<AudioDeviceInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAudioDeviceInfo object.
  base::Value::Dict ToValue() const;

  // The unique identifier of the audio device.
  std::string id;

  // Stream type associated with this device.
  StreamType stream_type;

  // Type of the device.
  DeviceType device_type;

  // The user-friendly name (e.g. "USB Microphone").
  std::string display_name;

  // Device name.
  std::string device_name;

  // True if this is the current active device.
  bool is_active;

  // The sound level of the device, volume for output, gain for input.
  int level;

  // The stable/persisted device id string when available.
  absl::optional<std::string> stable_device_id;

};

struct DeviceFilter {
  DeviceFilter();
  ~DeviceFilter();
  DeviceFilter(const DeviceFilter&) = delete;
  DeviceFilter& operator=(const DeviceFilter&) = delete;
  DeviceFilter(DeviceFilter&& rhs);
  DeviceFilter& operator=(DeviceFilter&& rhs);

  // Populates a DeviceFilter object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DeviceFilter& out);

  // Populates a DeviceFilter object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DeviceFilter& out);

  // Creates a deep copy of DeviceFilter.
  DeviceFilter Clone() const;

  // Creates a DeviceFilter object from a base::Value, or NULL on failure.
  static std::unique_ptr<DeviceFilter> FromValueDeprecated(const base::Value& value);

  // Creates a DeviceFilter object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<DeviceFilter> FromValue(const base::Value::Dict& value);

  // Creates a DeviceFilter object from a base::Value, or nullopt on failure.
  static absl::optional<DeviceFilter> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDeviceFilter object.
  base::Value::Dict ToValue() const;

  // If set, only audio devices whose stream type is included in this list will
  // satisfy the filter.
  absl::optional<std::vector<StreamType>> stream_types;

  // If set, only audio devices whose active state matches this value will satisfy
  // the filter.
  absl::optional<bool> is_active;

};

struct DeviceProperties {
  DeviceProperties();
  ~DeviceProperties();
  DeviceProperties(const DeviceProperties&) = delete;
  DeviceProperties& operator=(const DeviceProperties&) = delete;
  DeviceProperties(DeviceProperties&& rhs);
  DeviceProperties& operator=(DeviceProperties&& rhs);

  // Populates a DeviceProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DeviceProperties& out);

  // Populates a DeviceProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DeviceProperties& out);

  // Creates a deep copy of DeviceProperties.
  DeviceProperties Clone() const;

  // Creates a DeviceProperties object from a base::Value, or NULL on failure.
  static std::unique_ptr<DeviceProperties> FromValueDeprecated(const base::Value& value);

  // Creates a DeviceProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<DeviceProperties> FromValue(const base::Value::Dict& value);

  // Creates a DeviceProperties object from a base::Value, or nullopt on
  // failure.
  static absl::optional<DeviceProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDeviceProperties object.
  base::Value::Dict ToValue() const;

  // <p>   The audio device's desired sound level. Defaults to the device's
  // current sound level. </p> <p>If used with audio input device, represents
  // audio device gain.</p> <p>If used with audio output device, represents audio
  // device volume.</p>
  absl::optional<int> level;

};

struct DeviceIdLists {
  DeviceIdLists();
  ~DeviceIdLists();
  DeviceIdLists(const DeviceIdLists&) = delete;
  DeviceIdLists& operator=(const DeviceIdLists&) = delete;
  DeviceIdLists(DeviceIdLists&& rhs);
  DeviceIdLists& operator=(DeviceIdLists&& rhs);

  // Populates a DeviceIdLists object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DeviceIdLists& out);

  // Populates a DeviceIdLists object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DeviceIdLists& out);

  // Creates a deep copy of DeviceIdLists.
  DeviceIdLists Clone() const;

  // Creates a DeviceIdLists object from a base::Value, or NULL on failure.
  static std::unique_ptr<DeviceIdLists> FromValueDeprecated(const base::Value& value);

  // Creates a DeviceIdLists object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<DeviceIdLists> FromValue(const base::Value::Dict& value);

  // Creates a DeviceIdLists object from a base::Value, or nullopt on failure.
  static absl::optional<DeviceIdLists> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDeviceIdLists object.
  base::Value::Dict ToValue() const;

  // <p>List of input devices specified by their ID.</p> <p>To indicate input
  // devices should be unaffected, leave this property   unset.</p>
  absl::optional<std::vector<std::string>> input;

  // <p>List of output devices specified by their ID.</p> <p>To indicate output
  // devices should be unaffected, leave this property   unset.</p>
  absl::optional<std::vector<std::string>> output;

};

struct MuteChangedEvent {
  MuteChangedEvent();
  ~MuteChangedEvent();
  MuteChangedEvent(const MuteChangedEvent&) = delete;
  MuteChangedEvent& operator=(const MuteChangedEvent&) = delete;
  MuteChangedEvent(MuteChangedEvent&& rhs);
  MuteChangedEvent& operator=(MuteChangedEvent&& rhs);

  // Populates a MuteChangedEvent object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MuteChangedEvent& out);

  // Populates a MuteChangedEvent object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, MuteChangedEvent& out);

  // Creates a deep copy of MuteChangedEvent.
  MuteChangedEvent Clone() const;

  // Creates a MuteChangedEvent object from a base::Value, or NULL on failure.
  static std::unique_ptr<MuteChangedEvent> FromValueDeprecated(const base::Value& value);

  // Creates a MuteChangedEvent object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<MuteChangedEvent> FromValue(const base::Value::Dict& value);

  // Creates a MuteChangedEvent object from a base::Value, or nullopt on
  // failure.
  static absl::optional<MuteChangedEvent> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMuteChangedEvent object.
  base::Value::Dict ToValue() const;

  // The type of the stream for which the mute value changed. The updated mute
  // value applies to all devices with this stream type.
  StreamType stream_type;

  // Whether or not the stream is now muted.
  bool is_muted;

};

struct LevelChangedEvent {
  LevelChangedEvent();
  ~LevelChangedEvent();
  LevelChangedEvent(const LevelChangedEvent&) = delete;
  LevelChangedEvent& operator=(const LevelChangedEvent&) = delete;
  LevelChangedEvent(LevelChangedEvent&& rhs);
  LevelChangedEvent& operator=(LevelChangedEvent&& rhs);

  // Populates a LevelChangedEvent object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, LevelChangedEvent& out);

  // Populates a LevelChangedEvent object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, LevelChangedEvent& out);

  // Creates a deep copy of LevelChangedEvent.
  LevelChangedEvent Clone() const;

  // Creates a LevelChangedEvent object from a base::Value, or NULL on failure.
  static std::unique_ptr<LevelChangedEvent> FromValueDeprecated(const base::Value& value);

  // Creates a LevelChangedEvent object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<LevelChangedEvent> FromValue(const base::Value::Dict& value);

  // Creates a LevelChangedEvent object from a base::Value, or nullopt on
  // failure.
  static absl::optional<LevelChangedEvent> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisLevelChangedEvent object.
  base::Value::Dict ToValue() const;

  // ID of device whose sound level has changed.
  std::string device_id;

  // The device's new sound level.
  int level;

};


//
// Functions
//

namespace GetDevices {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Device properties by which to filter the list of returned     audio devices.
  // If the filter is not set or set to <code>{}</code>,     returned device list
  // will contain all available audio devices.
  absl::optional<DeviceFilter> filter;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<AudioDeviceInfo>& devices);
}  // namespace Results

}  // namespace GetDevices

namespace SetActiveDevices {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // <p>Specifies IDs of devices that should be active. If either the     input or
  // output list is not set, devices in that category are     unaffected.     </p>
  // <p>It is an error to pass in a non-existent device ID.</p>
  DeviceIdLists ids;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetActiveDevices

namespace SetProperties {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string id;

  DeviceProperties properties;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetProperties

namespace GetMute {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Stream type for which mute state should be fetched.
  StreamType stream_type;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool value);
}  // namespace Results

}  // namespace GetMute

namespace SetMute {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Stream type for which mute state should be set.
  StreamType stream_type;

  // New mute value.
  bool is_muted;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetMute

//
// Events
//

namespace OnLevelChanged {

extern const char kEventName[];  // "audio.onLevelChanged"

base::Value::List Create(const LevelChangedEvent& event);
}  // namespace OnLevelChanged

namespace OnMuteChanged {

extern const char kEventName[];  // "audio.onMuteChanged"

base::Value::List Create(const MuteChangedEvent& event);
}  // namespace OnMuteChanged

namespace OnDeviceListChanged {

extern const char kEventName[];  // "audio.onDeviceListChanged"

// List of all present audio devices after the change.
base::Value::List Create(const std::vector<AudioDeviceInfo>& devices);
}  // namespace OnDeviceListChanged

}  // namespace audio
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_AUDIO_H__
