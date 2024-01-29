// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/chromeos/extensions/api/management.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_CHROMEOS_EXTENSIONS_API_MANAGEMENT_H__
#define CHROME_COMMON_CHROMEOS_EXTENSIONS_API_MANAGEMENT_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace chromeos {
namespace api {
namespace os_management {

//
// Types
//

struct SetAudioGainArguments {
  SetAudioGainArguments();
  ~SetAudioGainArguments();
  SetAudioGainArguments(const SetAudioGainArguments&) = delete;
  SetAudioGainArguments& operator=(const SetAudioGainArguments&) = delete;
  SetAudioGainArguments(SetAudioGainArguments&& rhs) noexcept;
  SetAudioGainArguments& operator=(SetAudioGainArguments&& rhs) noexcept;

  // Populates a SetAudioGainArguments object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SetAudioGainArguments& out);

  // Populates a SetAudioGainArguments object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SetAudioGainArguments& out);

  // Creates a deep copy of SetAudioGainArguments.
  SetAudioGainArguments Clone() const;

  // Creates a SetAudioGainArguments object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<SetAudioGainArguments> FromValue(const base::Value::Dict& value);

  // Creates a SetAudioGainArguments object from a base::Value, or nullopt on
  // failure.
  static std::optional<SetAudioGainArguments> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSetAudioGainArguments object.
  base::Value::Dict ToValue() const;

  // Node id of the audio device to be configured.
  double node_id;

  // Target gain percent in [0, 100]. Sets to 0 or 100 if outside.
  int gain;

};

struct SetAudioVolumeArguments {
  SetAudioVolumeArguments();
  ~SetAudioVolumeArguments();
  SetAudioVolumeArguments(const SetAudioVolumeArguments&) = delete;
  SetAudioVolumeArguments& operator=(const SetAudioVolumeArguments&) = delete;
  SetAudioVolumeArguments(SetAudioVolumeArguments&& rhs) noexcept;
  SetAudioVolumeArguments& operator=(SetAudioVolumeArguments&& rhs) noexcept;

  // Populates a SetAudioVolumeArguments object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SetAudioVolumeArguments& out);

  // Populates a SetAudioVolumeArguments object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SetAudioVolumeArguments& out);

  // Creates a deep copy of SetAudioVolumeArguments.
  SetAudioVolumeArguments Clone() const;

  // Creates a SetAudioVolumeArguments object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<SetAudioVolumeArguments> FromValue(const base::Value::Dict& value);

  // Creates a SetAudioVolumeArguments object from a base::Value, or nullopt on
  // failure.
  static std::optional<SetAudioVolumeArguments> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSetAudioVolumeArguments object.
  base::Value::Dict ToValue() const;

  // Node id of the audio device to be configured.
  double node_id;

  // Target volume percent in [0, 100]. Sets to 0 or 100 if outside.
  int volume;

  // Whether to mute the device.
  bool is_muted;

};


//
// Functions
//

namespace SetAudioGain {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  SetAudioGainArguments args;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool is_success);
}  // namespace Results

}  // namespace SetAudioGain

namespace SetAudioVolume {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  SetAudioVolumeArguments args;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool is_success);
}  // namespace Results

}  // namespace SetAudioVolume

}  // namespace os_management
}  // namespace api
}  // namespace chromeos

#endif  // CHROME_COMMON_CHROMEOS_EXTENSIONS_API_MANAGEMENT_H__
