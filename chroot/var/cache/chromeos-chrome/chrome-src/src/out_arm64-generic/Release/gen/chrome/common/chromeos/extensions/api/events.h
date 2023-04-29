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

enum class EventCategory {
  kNone = 0,
  kAudioJack,
  kLid,
  kUsb,
  kSdCard,
  kMaxValue = kSdCard,
};


const char* ToString(EventCategory as_enum);
EventCategory ParseEventCategory(base::StringPiece as_string);

enum class EventSupportStatus {
  kNone = 0,
  kSupported,
  kUnsupported,
  kMaxValue = kUnsupported,
};


const char* ToString(EventSupportStatus as_enum);
EventSupportStatus ParseEventSupportStatus(base::StringPiece as_string);

struct EventSupportStatusInfo {
  EventSupportStatusInfo();
  ~EventSupportStatusInfo();
  EventSupportStatusInfo(const EventSupportStatusInfo&) = delete;
  EventSupportStatusInfo& operator=(const EventSupportStatusInfo&) = delete;
  EventSupportStatusInfo(EventSupportStatusInfo&& rhs);
  EventSupportStatusInfo& operator=(EventSupportStatusInfo&& rhs);

  // Populates a EventSupportStatusInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EventSupportStatusInfo& out);

  // Populates a EventSupportStatusInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, EventSupportStatusInfo& out);

  // Creates a deep copy of EventSupportStatusInfo.
  EventSupportStatusInfo Clone() const;

  // Creates a EventSupportStatusInfo object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<EventSupportStatusInfo> FromValueDeprecated(const base::Value& value);

  // Creates a EventSupportStatusInfo object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<EventSupportStatusInfo> FromValue(const base::Value::Dict& value);

  // Creates a EventSupportStatusInfo object from a base::Value, or nullopt on
  // failure.
  static absl::optional<EventSupportStatusInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisEventSupportStatusInfo object.
  base::Value::Dict ToValue() const;

  EventSupportStatus status;

};

enum class AudioJackEvent {
  kNone = 0,
  kConnected,
  kDisconnected,
  kMaxValue = kDisconnected,
};


const char* ToString(AudioJackEvent as_enum);
AudioJackEvent ParseAudioJackEvent(base::StringPiece as_string);

enum class AudioJackDeviceType {
  kNone = 0,
  kHeadphone,
  kMicrophone,
  kMaxValue = kMicrophone,
};


const char* ToString(AudioJackDeviceType as_enum);
AudioJackDeviceType ParseAudioJackDeviceType(base::StringPiece as_string);

enum class LidEvent {
  kNone = 0,
  kClosed,
  kOpened,
  kMaxValue = kOpened,
};


const char* ToString(LidEvent as_enum);
LidEvent ParseLidEvent(base::StringPiece as_string);

enum class UsbEvent {
  kNone = 0,
  kConnected,
  kDisconnected,
  kMaxValue = kDisconnected,
};


const char* ToString(UsbEvent as_enum);
UsbEvent ParseUsbEvent(base::StringPiece as_string);

enum class SdCardEvent {
  kNone = 0,
  kConnected,
  kDisconnected,
  kMaxValue = kDisconnected,
};


const char* ToString(SdCardEvent as_enum);
SdCardEvent ParseSdCardEvent(base::StringPiece as_string);

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

  AudioJackEvent event;

  AudioJackDeviceType device_type;

};

struct LidEventInfo {
  LidEventInfo();
  ~LidEventInfo();
  LidEventInfo(const LidEventInfo&) = delete;
  LidEventInfo& operator=(const LidEventInfo&) = delete;
  LidEventInfo(LidEventInfo&& rhs);
  LidEventInfo& operator=(LidEventInfo&& rhs);

  // Populates a LidEventInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, LidEventInfo& out);

  // Populates a LidEventInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, LidEventInfo& out);

  // Creates a deep copy of LidEventInfo.
  LidEventInfo Clone() const;

  // Creates a LidEventInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<LidEventInfo> FromValueDeprecated(const base::Value& value);

  // Creates a LidEventInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<LidEventInfo> FromValue(const base::Value::Dict& value);

  // Creates a LidEventInfo object from a base::Value, or nullopt on failure.
  static absl::optional<LidEventInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisLidEventInfo object.
  base::Value::Dict ToValue() const;

  LidEvent event;

};

struct UsbEventInfo {
  UsbEventInfo();
  ~UsbEventInfo();
  UsbEventInfo(const UsbEventInfo&) = delete;
  UsbEventInfo& operator=(const UsbEventInfo&) = delete;
  UsbEventInfo(UsbEventInfo&& rhs);
  UsbEventInfo& operator=(UsbEventInfo&& rhs);

  // Populates a UsbEventInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UsbEventInfo& out);

  // Populates a UsbEventInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, UsbEventInfo& out);

  // Creates a deep copy of UsbEventInfo.
  UsbEventInfo Clone() const;

  // Creates a UsbEventInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<UsbEventInfo> FromValueDeprecated(const base::Value& value);

  // Creates a UsbEventInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<UsbEventInfo> FromValue(const base::Value::Dict& value);

  // Creates a UsbEventInfo object from a base::Value, or nullopt on failure.
  static absl::optional<UsbEventInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisUsbEventInfo object.
  base::Value::Dict ToValue() const;

  // Vendor name.
  absl::optional<std::string> vendor;

  // Name, model name, product name.
  absl::optional<std::string> name;

  // Vendor ID.
  absl::optional<int> vid;

  // Product ID.
  absl::optional<int> pid;

  // USB device categories. https://www.usb.org/defined-class-codes
  std::vector<std::string> categories;

  UsbEvent event;

};

struct SdCardEventInfo {
  SdCardEventInfo();
  ~SdCardEventInfo();
  SdCardEventInfo(const SdCardEventInfo&) = delete;
  SdCardEventInfo& operator=(const SdCardEventInfo&) = delete;
  SdCardEventInfo(SdCardEventInfo&& rhs);
  SdCardEventInfo& operator=(SdCardEventInfo&& rhs);

  // Populates a SdCardEventInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SdCardEventInfo& out);

  // Populates a SdCardEventInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SdCardEventInfo& out);

  // Creates a deep copy of SdCardEventInfo.
  SdCardEventInfo Clone() const;

  // Creates a SdCardEventInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<SdCardEventInfo> FromValueDeprecated(const base::Value& value);

  // Creates a SdCardEventInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<SdCardEventInfo> FromValue(const base::Value::Dict& value);

  // Creates a SdCardEventInfo object from a base::Value, or nullopt on failure.
  static absl::optional<SdCardEventInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSdCardEventInfo object.
  base::Value::Dict ToValue() const;

  SdCardEvent event;

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

  EventCategory category;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const EventSupportStatusInfo& info);
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

  EventCategory category;


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

  EventCategory category;


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

namespace OnLidEvent {

extern const char kEventName[];  // "os.events.onLidEvent"

base::Value::List Create(const LidEventInfo& event_info);
}  // namespace OnLidEvent

namespace OnUsbEvent {

extern const char kEventName[];  // "os.events.onUsbEvent"

base::Value::List Create(const UsbEventInfo& event_info);
}  // namespace OnUsbEvent

namespace OnSdCardEvent {

extern const char kEventName[];  // "os.events.onSdCardEvent"

base::Value::List Create(const SdCardEventInfo& event_info);
}  // namespace OnSdCardEvent

}  // namespace os_events
}  // namespace api
}  // namespace chromeos

#endif  // CHROME_COMMON_CHROMEOS_EXTENSIONS_API_EVENTS_H__
