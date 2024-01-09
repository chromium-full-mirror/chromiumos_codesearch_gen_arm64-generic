// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/webrtc_audio_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_WEBRTC_AUDIO_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_WEBRTC_AUDIO_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace webrtc_audio_private {

//
// Types
//

struct SinkInfo {
  SinkInfo();
  ~SinkInfo();
  SinkInfo(const SinkInfo&) = delete;
  SinkInfo& operator=(const SinkInfo&) = delete;
  SinkInfo(SinkInfo&& rhs) noexcept;
  SinkInfo& operator=(SinkInfo&& rhs) noexcept;

  // Populates a SinkInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, SinkInfo& out);

  // Populates a SinkInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, SinkInfo& out);

  // Creates a deep copy of SinkInfo.
  SinkInfo Clone() const;

  // Creates a SinkInfo object from a base::Value::Dict, or nullopt on failure.
  static std::optional<SinkInfo> FromValue(const base::Value::Dict& value);

  // Creates a SinkInfo object from a base::Value, or nullopt on failure.
  static std::optional<SinkInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSinkInfo object.
  base::Value::Dict ToValue() const;

  // The opaque identifier of the audio sink device, which is unique and static
  // for the extension calling the API but invalid for others.
  std::string sink_id;

  // The user-friendly name (e.g. "Bose Amplifier").
  std::string sink_label;

  // Current sample rate of the device, in Hz. Useful e.g. to know if the remote
  // side should be asked to send a lower sampling rate.
  int sample_rate;

  // <p>True if the device is ready to play out audio. E.g. if it is a device that
  // takes an audio jack, whether a jack is plugged in.</p><p>TODO(joi): Do
  // unplugged devices even get included in enumeration?</p>
  bool is_ready;

  // True if this device is the default audio sink device on the machine.
  bool is_default;

};


//
// Functions
//

namespace GetSinks {

namespace Results {

base::Value::List Create(const std::vector<SinkInfo>& sink_info);
}  // namespace Results

}  // namespace GetSinks

namespace GetAssociatedSink {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string security_origin;

  std::string source_id_in_origin;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& sink_id);
}  // namespace Results

}  // namespace GetAssociatedSink

//
// Events
//

namespace OnSinksChanged {

extern const char kEventName[];  // "webrtcAudioPrivate.onSinksChanged"

base::Value::List Create();
}  // namespace OnSinksChanged

}  // namespace webrtc_audio_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_WEBRTC_AUDIO_PRIVATE_H__
