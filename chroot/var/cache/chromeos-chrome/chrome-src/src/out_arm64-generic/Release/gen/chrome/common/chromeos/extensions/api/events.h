// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/chromeos/extensions/api/events.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_CHROMEOS_EXTENSIONS_API_EVENTS_H__
#define CHROME_COMMON_CHROMEOS_EXTENSIONS_API_EVENTS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace chromeos {
namespace api {
namespace os_events {

//
// Types
//

enum class EventCategoryEnum {
  kNone = 0,
  kAudioJack,
  kMaxValue = kAudioJack,
};


const char* ToString(EventCategoryEnum as_enum);
EventCategoryEnum ParseEventCategoryEnum(base::StringPiece as_string);

enum class EventSupportStatusEnum {
  kNone = 0,
  kSupported,
  kUnsupported,
  kMaxValue = kUnsupported,
};


const char* ToString(EventSupportStatusEnum as_enum);
EventSupportStatusEnum ParseEventSupportStatusEnum(base::StringPiece as_string);

struct EventSupportStatus {
  EventSupportStatus();
  ~EventSupportStatus();
  EventSupportStatus(const EventSupportStatus&) = delete;
  EventSupportStatus& operator=(const EventSupportStatus&) = delete;
  EventSupportStatus(EventSupportStatus&& rhs);
  EventSupportStatus& operator=(EventSupportStatus&& rhs);

  // Populates a EventSupportStatus object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EventSupportStatus& out);

  // Populates a EventSupportStatus object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, EventSupportStatus& out);

  // Creates a deep copy of EventSupportStatus.
  EventSupportStatus Clone() const;

  // Creates a EventSupportStatus object from a base::Value, or NULL on failure.
  static std::unique_ptr<EventSupportStatus> FromValueDeprecated(const base::Value& value);

  // Creates a EventSupportStatus object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<EventSupportStatus> FromValue(const base::Value::Dict& value);

  // Creates a EventSupportStatus object from a base::Value, or nullopt on
  // failure.
  static absl::optional<EventSupportStatus> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisEventSupportStatus object.
  base::Value::Dict ToValue() const;

  EventSupportStatusEnum status;

};

enum class AudioJackEventState {
  kNone = 0,
  kAdd,
  kRemove,
  kMaxValue = kRemove,
};


const char* ToString(AudioJackEventState as_enum);
AudioJackEventState ParseAudioJackEventState(base::StringPiece as_string);

struct AudioJackEventInfo {
  AudioJackEventInfo();
  ~AudioJackEventInfo();
  AudioJackEventInfo(const AudioJackEventInfo&) = delete;
  AudioJackEventInfo& operator=(const AudioJackEventInfo&) = delete;
  AudioJackEventInfo(AudioJackEventInfo&& rhs);
  AudioJackEventInfo& operator=(AudioJackEventInfo&& rhs);

  // Populates a AudioJackEventInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AudioJackEventInfo& out);

  // Populates a AudioJackEventInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AudioJackEventInfo& out);

  // Creates a deep copy of AudioJackEventInfo.
  AudioJackEventInfo Clone() const;

  // Creates a AudioJackEventInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<AudioJackEventInfo> FromValueDeprecated(const base::Value& value);

  // Creates a AudioJackEventInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<AudioJackEventInfo> FromValue(const base::Value::Dict& value);

  // Creates a AudioJackEventInfo object from a base::Value, or nullopt on
  // failure.
  static absl::optional<AudioJackEventInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAudioJackEventInfo object.
  base::Value::Dict ToValue() const;

  AudioJackEventState event_state;

};


//
// Functions
//

namespace IsEventSupported {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  EventCategoryEnum category;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const EventSupportStatus& status);
}  // namespace Results

}  // namespace IsEventSupported

namespace StartCapturingEvents {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  EventCategoryEnum category;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace StartCapturingEvents

namespace StopCapturingEvents {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  EventCategoryEnum category;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace StopCapturingEvents

//
// Events
//

namespace OnAudioJackEvent {

extern const char kEventName[];  // "os.events.onAudioJackEvent"

base::Value::List Create(const AudioJackEventInfo& event_info);
}  // namespace OnAudioJackEvent

}  // namespace os_events
}  // namespace api
}  // namespace chromeos

#endif  // CHROME_COMMON_CHROMEOS_EXTENSIONS_API_EVENTS_H__
