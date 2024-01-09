// Copyright 2024 The Chromium Authors
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
#include <optional>
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

// Note: Please update documentation as well when this interface is changed. The
// documentation lives here: //docs/telemetry_extension/api_overview.md.
// LINT.IfChange
enum class EventCategory {
  kNone = 0,
  kAudioJack,
  kLid,
  kUsb,
  kSdCard,
  kPower,
  kKeyboardDiagnostic,
  kStylusGarage,
  kTouchpadButton,
  kTouchpadTouch,
  kTouchpadConnected,
  kTouchscreenTouch,
  kTouchscreenConnected,
  kExternalDisplay,
  kStylusTouch,
  kStylusConnected,
  kMaxValue = kStylusConnected,
};


const char* ToString(EventCategory as_enum);
EventCategory ParseEventCategory(base::StringPiece as_string);
std::u16string GetEventCategoryParseError(base::StringPiece as_string);

enum class EventSupportStatus {
  kNone = 0,
  kSupported,
  kUnsupported,
  kMaxValue = kUnsupported,
};


const char* ToString(EventSupportStatus as_enum);
EventSupportStatus ParseEventSupportStatus(base::StringPiece as_string);
std::u16string GetEventSupportStatusParseError(base::StringPiece as_string);

struct EventSupportStatusInfo {
  EventSupportStatusInfo();
  ~EventSupportStatusInfo();
  EventSupportStatusInfo(const EventSupportStatusInfo&) = delete;
  EventSupportStatusInfo& operator=(const EventSupportStatusInfo&) = delete;
  EventSupportStatusInfo(EventSupportStatusInfo&& rhs) noexcept;
  EventSupportStatusInfo& operator=(EventSupportStatusInfo&& rhs) noexcept;

  // Populates a EventSupportStatusInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EventSupportStatusInfo& out);

  // Populates a EventSupportStatusInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, EventSupportStatusInfo& out);

  // Creates a deep copy of EventSupportStatusInfo.
  EventSupportStatusInfo Clone() const;

  // Creates a EventSupportStatusInfo object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<EventSupportStatusInfo> FromValue(const base::Value::Dict& value);

  // Creates a EventSupportStatusInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<EventSupportStatusInfo> FromValue(const base::Value& value);

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
std::u16string GetAudioJackEventParseError(base::StringPiece as_string);

enum class AudioJackDeviceType {
  kNone = 0,
  kHeadphone,
  kMicrophone,
  kMaxValue = kMicrophone,
};


const char* ToString(AudioJackDeviceType as_enum);
AudioJackDeviceType ParseAudioJackDeviceType(base::StringPiece as_string);
std::u16string GetAudioJackDeviceTypeParseError(base::StringPiece as_string);

enum class KeyboardConnectionType {
  kNone = 0,
  kInternal,
  kUsb,
  kBluetooth,
  kUnknown,
  kMaxValue = kUnknown,
};


const char* ToString(KeyboardConnectionType as_enum);
KeyboardConnectionType ParseKeyboardConnectionType(base::StringPiece as_string);
std::u16string GetKeyboardConnectionTypeParseError(base::StringPiece as_string);

enum class PhysicalKeyboardLayout {
  kNone = 0,
  kUnknown,
  kChromeOs,
  kMaxValue = kChromeOs,
};


const char* ToString(PhysicalKeyboardLayout as_enum);
PhysicalKeyboardLayout ParsePhysicalKeyboardLayout(base::StringPiece as_string);
std::u16string GetPhysicalKeyboardLayoutParseError(base::StringPiece as_string);

// The international standard that the layout follows.
enum class MechanicalKeyboardLayout {
  kNone = 0,
  kUnknown,
  kAnsi,
  kIso,
  kJis,
  kMaxValue = kJis,
};


const char* ToString(MechanicalKeyboardLayout as_enum);
MechanicalKeyboardLayout ParseMechanicalKeyboardLayout(base::StringPiece as_string);
std::u16string GetMechanicalKeyboardLayoutParseError(base::StringPiece as_string);

enum class KeyboardNumberPadPresence {
  kNone = 0,
  kUnknown,
  kPresent,
  kNotPresent,
  kMaxValue = kNotPresent,
};


const char* ToString(KeyboardNumberPadPresence as_enum);
KeyboardNumberPadPresence ParseKeyboardNumberPadPresence(base::StringPiece as_string);
std::u16string GetKeyboardNumberPadPresenceParseError(base::StringPiece as_string);

enum class KeyboardTopRowKey {
  kNone = 0,
  kNoKey,
  kUnknown,
  kBack,
  kForward,
  kRefresh,
  kFullscreen,
  kOverview,
  kScreenshot,
  kScreenBrightnessDown,
  kScreenBrightnessUp,
  kPrivacyScreenToggle,
  kMicrophoneMute,
  kVolumeMute,
  kVolumeDown,
  kVolumeUp,
  kKeyboardBacklightToggle,
  kKeyboardBacklightDown,
  kKeyboardBacklightUp,
  kNextTrack,
  kPreviousTrack,
  kPlayPause,
  kScreenMirror,
  kDelete,
  kMaxValue = kDelete,
};


const char* ToString(KeyboardTopRowKey as_enum);
KeyboardTopRowKey ParseKeyboardTopRowKey(base::StringPiece as_string);
std::u16string GetKeyboardTopRowKeyParseError(base::StringPiece as_string);

enum class KeyboardTopRightKey {
  kNone = 0,
  kUnknown,
  kPower,
  kLock,
  kControlPanel,
  kMaxValue = kControlPanel,
};


const char* ToString(KeyboardTopRightKey as_enum);
KeyboardTopRightKey ParseKeyboardTopRightKey(base::StringPiece as_string);
std::u16string GetKeyboardTopRightKeyParseError(base::StringPiece as_string);

struct KeyboardInfo {
  KeyboardInfo();
  ~KeyboardInfo();
  KeyboardInfo(const KeyboardInfo&) = delete;
  KeyboardInfo& operator=(const KeyboardInfo&) = delete;
  KeyboardInfo(KeyboardInfo&& rhs) noexcept;
  KeyboardInfo& operator=(KeyboardInfo&& rhs) noexcept;

  // Populates a KeyboardInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, KeyboardInfo& out);

  // Populates a KeyboardInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, KeyboardInfo& out);

  // Creates a deep copy of KeyboardInfo.
  KeyboardInfo Clone() const;

  // Creates a KeyboardInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<KeyboardInfo> FromValue(const base::Value::Dict& value);

  // Creates a KeyboardInfo object from a base::Value, or nullopt on failure.
  static std::optional<KeyboardInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisKeyboardInfo object.
  base::Value::Dict ToValue() const;

  // The number of the keyboard's /dev/input/event* node.
  std::optional<int> id;

  KeyboardConnectionType connection_type;

  std::optional<std::string> name;

  PhysicalKeyboardLayout physical_layout;

  MechanicalKeyboardLayout mechanical_layout;

  // For internal keyboards, the region code of the device (from which the visual
  // layout can be determined).
  std::optional<std::string> region_code;

  KeyboardNumberPadPresence number_pad_present;

  // List of ChromeOS specific action keys in the top row. This list excludes the
  // left-most Escape key, and right-most key (usually Power/Lock). If a keyboard
  // has F11-F15 keys beyond the rightmost action key, they may not be included in
  // this list (even as "none").
  std::vector<KeyboardTopRowKey> top_row_keys;

  // For CrOS keyboards, the glyph shown on the key at the far right end of the
  // top row. This data may not be completely reliable.
  KeyboardTopRightKey top_right_key;

  // Only applicable to CrOS keyboards.
  std::optional<bool> has_assistant_key;

};

struct KeyboardDiagnosticEventInfo {
  KeyboardDiagnosticEventInfo();
  ~KeyboardDiagnosticEventInfo();
  KeyboardDiagnosticEventInfo(const KeyboardDiagnosticEventInfo&) = delete;
  KeyboardDiagnosticEventInfo& operator=(const KeyboardDiagnosticEventInfo&) = delete;
  KeyboardDiagnosticEventInfo(KeyboardDiagnosticEventInfo&& rhs) noexcept;
  KeyboardDiagnosticEventInfo& operator=(KeyboardDiagnosticEventInfo&& rhs) noexcept;

  // Populates a KeyboardDiagnosticEventInfo object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, KeyboardDiagnosticEventInfo& out);

  // Populates a KeyboardDiagnosticEventInfo object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, KeyboardDiagnosticEventInfo& out);

  // Creates a deep copy of KeyboardDiagnosticEventInfo.
  KeyboardDiagnosticEventInfo Clone() const;

  // Creates a KeyboardDiagnosticEventInfo object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<KeyboardDiagnosticEventInfo> FromValue(const base::Value::Dict& value);

  // Creates a KeyboardDiagnosticEventInfo object from a base::Value, or nullopt
  // on failure.
  static std::optional<KeyboardDiagnosticEventInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisKeyboardDiagnosticEventInfo object.
  base::Value::Dict ToValue() const;

  // The keyboard which has been tested.
  std::optional<KeyboardInfo> keyboard_info;

  // Keys which have been tested. It is an array of the evdev key code.
  std::vector<int> tested_keys;

  // Top row keys which have been tested. They are positions of the key on the top
  // row after escape (0 is leftmost, 1 is next to the right, etc.). Generally, 0
  // is F1, in some fashion. NOTE: This position may exceed the length of
  // keyboard_info->top_row_keys, for external keyboards with keys in the F11-F15
  // range.
  std::vector<int> tested_top_row_keys;

};

enum class LidEvent {
  kNone = 0,
  kClosed,
  kOpened,
  kMaxValue = kOpened,
};


const char* ToString(LidEvent as_enum);
LidEvent ParseLidEvent(base::StringPiece as_string);
std::u16string GetLidEventParseError(base::StringPiece as_string);

enum class UsbEvent {
  kNone = 0,
  kConnected,
  kDisconnected,
  kMaxValue = kDisconnected,
};


const char* ToString(UsbEvent as_enum);
UsbEvent ParseUsbEvent(base::StringPiece as_string);
std::u16string GetUsbEventParseError(base::StringPiece as_string);

enum class ExternalDisplayEvent {
  kNone = 0,
  kConnected,
  kDisconnected,
  kMaxValue = kDisconnected,
};


const char* ToString(ExternalDisplayEvent as_enum);
ExternalDisplayEvent ParseExternalDisplayEvent(base::StringPiece as_string);
std::u16string GetExternalDisplayEventParseError(base::StringPiece as_string);

enum class SdCardEvent {
  kNone = 0,
  kConnected,
  kDisconnected,
  kMaxValue = kDisconnected,
};


const char* ToString(SdCardEvent as_enum);
SdCardEvent ParseSdCardEvent(base::StringPiece as_string);
std::u16string GetSdCardEventParseError(base::StringPiece as_string);

enum class PowerEvent {
  kNone = 0,
  kAcInserted,
  kAcRemoved,
  kOsSuspend,
  kOsResume,
  kMaxValue = kOsResume,
};


const char* ToString(PowerEvent as_enum);
PowerEvent ParsePowerEvent(base::StringPiece as_string);
std::u16string GetPowerEventParseError(base::StringPiece as_string);

enum class StylusGarageEvent {
  kNone = 0,
  kInserted,
  kRemoved,
  kMaxValue = kRemoved,
};


const char* ToString(StylusGarageEvent as_enum);
StylusGarageEvent ParseStylusGarageEvent(base::StringPiece as_string);
std::u16string GetStylusGarageEventParseError(base::StringPiece as_string);

struct AudioJackEventInfo {
  AudioJackEventInfo();
  ~AudioJackEventInfo();
  AudioJackEventInfo(const AudioJackEventInfo&) = delete;
  AudioJackEventInfo& operator=(const AudioJackEventInfo&) = delete;
  AudioJackEventInfo(AudioJackEventInfo&& rhs) noexcept;
  AudioJackEventInfo& operator=(AudioJackEventInfo&& rhs) noexcept;

  // Populates a AudioJackEventInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AudioJackEventInfo& out);

  // Populates a AudioJackEventInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AudioJackEventInfo& out);

  // Creates a deep copy of AudioJackEventInfo.
  AudioJackEventInfo Clone() const;

  // Creates a AudioJackEventInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<AudioJackEventInfo> FromValue(const base::Value::Dict& value);

  // Creates a AudioJackEventInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<AudioJackEventInfo> FromValue(const base::Value& value);

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
  LidEventInfo(LidEventInfo&& rhs) noexcept;
  LidEventInfo& operator=(LidEventInfo&& rhs) noexcept;

  // Populates a LidEventInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, LidEventInfo& out);

  // Populates a LidEventInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, LidEventInfo& out);

  // Creates a deep copy of LidEventInfo.
  LidEventInfo Clone() const;

  // Creates a LidEventInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<LidEventInfo> FromValue(const base::Value::Dict& value);

  // Creates a LidEventInfo object from a base::Value, or nullopt on failure.
  static std::optional<LidEventInfo> FromValue(const base::Value& value);

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
  UsbEventInfo(UsbEventInfo&& rhs) noexcept;
  UsbEventInfo& operator=(UsbEventInfo&& rhs) noexcept;

  // Populates a UsbEventInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UsbEventInfo& out);

  // Populates a UsbEventInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, UsbEventInfo& out);

  // Creates a deep copy of UsbEventInfo.
  UsbEventInfo Clone() const;

  // Creates a UsbEventInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<UsbEventInfo> FromValue(const base::Value::Dict& value);

  // Creates a UsbEventInfo object from a base::Value, or nullopt on failure.
  static std::optional<UsbEventInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisUsbEventInfo object.
  base::Value::Dict ToValue() const;

  // Vendor name.
  std::optional<std::string> vendor;

  // Name, model name, product name.
  std::optional<std::string> name;

  // Vendor ID.
  std::optional<int> vid;

  // Product ID.
  std::optional<int> pid;

  // USB device categories. https://www.usb.org/defined-class-codes
  std::vector<std::string> categories;

  UsbEvent event;

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

struct ExternalDisplayEventInfo {
  ExternalDisplayEventInfo();
  ~ExternalDisplayEventInfo();
  ExternalDisplayEventInfo(const ExternalDisplayEventInfo&) = delete;
  ExternalDisplayEventInfo& operator=(const ExternalDisplayEventInfo&) = delete;
  ExternalDisplayEventInfo(ExternalDisplayEventInfo&& rhs) noexcept;
  ExternalDisplayEventInfo& operator=(ExternalDisplayEventInfo&& rhs) noexcept;

  // Populates a ExternalDisplayEventInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ExternalDisplayEventInfo& out);

  // Populates a ExternalDisplayEventInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ExternalDisplayEventInfo& out);

  // Creates a deep copy of ExternalDisplayEventInfo.
  ExternalDisplayEventInfo Clone() const;

  // Creates a ExternalDisplayEventInfo object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<ExternalDisplayEventInfo> FromValue(const base::Value::Dict& value);

  // Creates a ExternalDisplayEventInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<ExternalDisplayEventInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisExternalDisplayEventInfo object.
  base::Value::Dict ToValue() const;

  ExternalDisplayEvent event;

  std::optional<ExternalDisplayInfo> display_info;

};

struct SdCardEventInfo {
  SdCardEventInfo();
  ~SdCardEventInfo();
  SdCardEventInfo(const SdCardEventInfo&) = delete;
  SdCardEventInfo& operator=(const SdCardEventInfo&) = delete;
  SdCardEventInfo(SdCardEventInfo&& rhs) noexcept;
  SdCardEventInfo& operator=(SdCardEventInfo&& rhs) noexcept;

  // Populates a SdCardEventInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SdCardEventInfo& out);

  // Populates a SdCardEventInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SdCardEventInfo& out);

  // Creates a deep copy of SdCardEventInfo.
  SdCardEventInfo Clone() const;

  // Creates a SdCardEventInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<SdCardEventInfo> FromValue(const base::Value::Dict& value);

  // Creates a SdCardEventInfo object from a base::Value, or nullopt on failure.
  static std::optional<SdCardEventInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSdCardEventInfo object.
  base::Value::Dict ToValue() const;

  SdCardEvent event;

};

struct PowerEventInfo {
  PowerEventInfo();
  ~PowerEventInfo();
  PowerEventInfo(const PowerEventInfo&) = delete;
  PowerEventInfo& operator=(const PowerEventInfo&) = delete;
  PowerEventInfo(PowerEventInfo&& rhs) noexcept;
  PowerEventInfo& operator=(PowerEventInfo&& rhs) noexcept;

  // Populates a PowerEventInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PowerEventInfo& out);

  // Populates a PowerEventInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PowerEventInfo& out);

  // Creates a deep copy of PowerEventInfo.
  PowerEventInfo Clone() const;

  // Creates a PowerEventInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<PowerEventInfo> FromValue(const base::Value::Dict& value);

  // Creates a PowerEventInfo object from a base::Value, or nullopt on failure.
  static std::optional<PowerEventInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPowerEventInfo object.
  base::Value::Dict ToValue() const;

  PowerEvent event;

};

struct StylusGarageEventInfo {
  StylusGarageEventInfo();
  ~StylusGarageEventInfo();
  StylusGarageEventInfo(const StylusGarageEventInfo&) = delete;
  StylusGarageEventInfo& operator=(const StylusGarageEventInfo&) = delete;
  StylusGarageEventInfo(StylusGarageEventInfo&& rhs) noexcept;
  StylusGarageEventInfo& operator=(StylusGarageEventInfo&& rhs) noexcept;

  // Populates a StylusGarageEventInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, StylusGarageEventInfo& out);

  // Populates a StylusGarageEventInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, StylusGarageEventInfo& out);

  // Creates a deep copy of StylusGarageEventInfo.
  StylusGarageEventInfo Clone() const;

  // Creates a StylusGarageEventInfo object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<StylusGarageEventInfo> FromValue(const base::Value::Dict& value);

  // Creates a StylusGarageEventInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<StylusGarageEventInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisStylusGarageEventInfo object.
  base::Value::Dict ToValue() const;

  StylusGarageEvent event;

};

// An enumeration of input touch buttons. The enumeration refers to the physical
// button that is present in some touchpads under the surface. Clicks resulting
// from gestures such as two finger right-click are not included here. Separate
// physical buttons external to the touchpad are also not included.
enum class InputTouchButton {
  kNone = 0,
  kLeft,
  kMiddle,
  kRight,
  kMaxValue = kRight,
};


const char* ToString(InputTouchButton as_enum);
InputTouchButton ParseInputTouchButton(base::StringPiece as_string);
std::u16string GetInputTouchButtonParseError(base::StringPiece as_string);

enum class InputTouchButtonState {
  kNone = 0,
  kPressed,
  kReleased,
  kMaxValue = kReleased,
};


const char* ToString(InputTouchButtonState as_enum);
InputTouchButtonState ParseInputTouchButtonState(base::StringPiece as_string);
std::u16string GetInputTouchButtonStateParseError(base::StringPiece as_string);

struct TouchpadButtonEventInfo {
  TouchpadButtonEventInfo();
  ~TouchpadButtonEventInfo();
  TouchpadButtonEventInfo(const TouchpadButtonEventInfo&) = delete;
  TouchpadButtonEventInfo& operator=(const TouchpadButtonEventInfo&) = delete;
  TouchpadButtonEventInfo(TouchpadButtonEventInfo&& rhs) noexcept;
  TouchpadButtonEventInfo& operator=(TouchpadButtonEventInfo&& rhs) noexcept;

  // Populates a TouchpadButtonEventInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, TouchpadButtonEventInfo& out);

  // Populates a TouchpadButtonEventInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, TouchpadButtonEventInfo& out);

  // Creates a deep copy of TouchpadButtonEventInfo.
  TouchpadButtonEventInfo Clone() const;

  // Creates a TouchpadButtonEventInfo object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<TouchpadButtonEventInfo> FromValue(const base::Value::Dict& value);

  // Creates a TouchpadButtonEventInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<TouchpadButtonEventInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTouchpadButtonEventInfo object.
  base::Value::Dict ToValue() const;

  InputTouchButton button;

  InputTouchButtonState state;

};

struct TouchPointInfo {
  TouchPointInfo();
  ~TouchPointInfo();
  TouchPointInfo(const TouchPointInfo&) = delete;
  TouchPointInfo& operator=(const TouchPointInfo&) = delete;
  TouchPointInfo(TouchPointInfo&& rhs) noexcept;
  TouchPointInfo& operator=(TouchPointInfo&& rhs) noexcept;

  // Populates a TouchPointInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, TouchPointInfo& out);

  // Populates a TouchPointInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, TouchPointInfo& out);

  // Creates a deep copy of TouchPointInfo.
  TouchPointInfo Clone() const;

  // Creates a TouchPointInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<TouchPointInfo> FromValue(const base::Value::Dict& value);

  // Creates a TouchPointInfo object from a base::Value, or nullopt on failure.
  static std::optional<TouchPointInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTouchPointInfo object.
  base::Value::Dict ToValue() const;

  // An id to track an initiated contact throughout its life cycle.
  std::optional<int> tracking_id;

  // The x position.
  std::optional<int> x;

  // The y position.
  std::optional<int> y;

  // The pressure applied to the touch contact. The value ranges from 0 to
  // |max_pressure| as defined in TouchpadConnectedEventInfo.
  std::optional<int> pressure;

  // The length of the longer dimension of the touch contact.
  std::optional<int> touch_major;

  // The length of the shorter dimension of the touch contact.
  std::optional<int> touch_minor;

};

struct TouchpadTouchEventInfo {
  TouchpadTouchEventInfo();
  ~TouchpadTouchEventInfo();
  TouchpadTouchEventInfo(const TouchpadTouchEventInfo&) = delete;
  TouchpadTouchEventInfo& operator=(const TouchpadTouchEventInfo&) = delete;
  TouchpadTouchEventInfo(TouchpadTouchEventInfo&& rhs) noexcept;
  TouchpadTouchEventInfo& operator=(TouchpadTouchEventInfo&& rhs) noexcept;

  // Populates a TouchpadTouchEventInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, TouchpadTouchEventInfo& out);

  // Populates a TouchpadTouchEventInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, TouchpadTouchEventInfo& out);

  // Creates a deep copy of TouchpadTouchEventInfo.
  TouchpadTouchEventInfo Clone() const;

  // Creates a TouchpadTouchEventInfo object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<TouchpadTouchEventInfo> FromValue(const base::Value::Dict& value);

  // Creates a TouchpadTouchEventInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<TouchpadTouchEventInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTouchpadTouchEventInfo object.
  base::Value::Dict ToValue() const;

  // The touch points reported by the touchpad.
  std::vector<TouchPointInfo> touch_points;

};

struct TouchpadConnectedEventInfo {
  TouchpadConnectedEventInfo();
  ~TouchpadConnectedEventInfo();
  TouchpadConnectedEventInfo(const TouchpadConnectedEventInfo&) = delete;
  TouchpadConnectedEventInfo& operator=(const TouchpadConnectedEventInfo&) = delete;
  TouchpadConnectedEventInfo(TouchpadConnectedEventInfo&& rhs) noexcept;
  TouchpadConnectedEventInfo& operator=(TouchpadConnectedEventInfo&& rhs) noexcept;

  // Populates a TouchpadConnectedEventInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, TouchpadConnectedEventInfo& out);

  // Populates a TouchpadConnectedEventInfo object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, TouchpadConnectedEventInfo& out);

  // Creates a deep copy of TouchpadConnectedEventInfo.
  TouchpadConnectedEventInfo Clone() const;

  // Creates a TouchpadConnectedEventInfo object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<TouchpadConnectedEventInfo> FromValue(const base::Value::Dict& value);

  // Creates a TouchpadConnectedEventInfo object from a base::Value, or nullopt
  // on failure.
  static std::optional<TouchpadConnectedEventInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTouchpadConnectedEventInfo object.
  base::Value::Dict ToValue() const;

  // The maximum possible x position of touch points.
  std::optional<int> max_x;

  // The maximum possible y position of touch points.
  std::optional<int> max_y;

  // The maximum possible pressure of touch points, or 0 if pressure is not
  // supported.
  std::optional<int> max_pressure;

  // The supported buttons;
  std::vector<InputTouchButton> buttons;

};

struct TouchscreenTouchEventInfo {
  TouchscreenTouchEventInfo();
  ~TouchscreenTouchEventInfo();
  TouchscreenTouchEventInfo(const TouchscreenTouchEventInfo&) = delete;
  TouchscreenTouchEventInfo& operator=(const TouchscreenTouchEventInfo&) = delete;
  TouchscreenTouchEventInfo(TouchscreenTouchEventInfo&& rhs) noexcept;
  TouchscreenTouchEventInfo& operator=(TouchscreenTouchEventInfo&& rhs) noexcept;

  // Populates a TouchscreenTouchEventInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, TouchscreenTouchEventInfo& out);

  // Populates a TouchscreenTouchEventInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, TouchscreenTouchEventInfo& out);

  // Creates a deep copy of TouchscreenTouchEventInfo.
  TouchscreenTouchEventInfo Clone() const;

  // Creates a TouchscreenTouchEventInfo object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<TouchscreenTouchEventInfo> FromValue(const base::Value::Dict& value);

  // Creates a TouchscreenTouchEventInfo object from a base::Value, or nullopt
  // on failure.
  static std::optional<TouchscreenTouchEventInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTouchscreenTouchEventInfo object.
  base::Value::Dict ToValue() const;

  // The touch points reported by the touchscreen.
  std::vector<TouchPointInfo> touch_points;

};

struct TouchscreenConnectedEventInfo {
  TouchscreenConnectedEventInfo();
  ~TouchscreenConnectedEventInfo();
  TouchscreenConnectedEventInfo(const TouchscreenConnectedEventInfo&) = delete;
  TouchscreenConnectedEventInfo& operator=(const TouchscreenConnectedEventInfo&) = delete;
  TouchscreenConnectedEventInfo(TouchscreenConnectedEventInfo&& rhs) noexcept;
  TouchscreenConnectedEventInfo& operator=(TouchscreenConnectedEventInfo&& rhs) noexcept;

  // Populates a TouchscreenConnectedEventInfo object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, TouchscreenConnectedEventInfo& out);

  // Populates a TouchscreenConnectedEventInfo object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, TouchscreenConnectedEventInfo& out);

  // Creates a deep copy of TouchscreenConnectedEventInfo.
  TouchscreenConnectedEventInfo Clone() const;

  // Creates a TouchscreenConnectedEventInfo object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<TouchscreenConnectedEventInfo> FromValue(const base::Value::Dict& value);

  // Creates a TouchscreenConnectedEventInfo object from a base::Value, or
  // nullopt on failure.
  static std::optional<TouchscreenConnectedEventInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTouchscreenConnectedEventInfo object.
  base::Value::Dict ToValue() const;

  // The maximum possible x position of touch points.
  std::optional<int> max_x;

  // The maximum possible y position of touch points.
  std::optional<int> max_y;

  // The maximum possible pressure of touch points, or 0 if pressure is not
  // supported.
  std::optional<int> max_pressure;

};

struct StylusTouchPointInfo {
  StylusTouchPointInfo();
  ~StylusTouchPointInfo();
  StylusTouchPointInfo(const StylusTouchPointInfo&) = delete;
  StylusTouchPointInfo& operator=(const StylusTouchPointInfo&) = delete;
  StylusTouchPointInfo(StylusTouchPointInfo&& rhs) noexcept;
  StylusTouchPointInfo& operator=(StylusTouchPointInfo&& rhs) noexcept;

  // Populates a StylusTouchPointInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, StylusTouchPointInfo& out);

  // Populates a StylusTouchPointInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, StylusTouchPointInfo& out);

  // Creates a deep copy of StylusTouchPointInfo.
  StylusTouchPointInfo Clone() const;

  // Creates a StylusTouchPointInfo object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<StylusTouchPointInfo> FromValue(const base::Value::Dict& value);

  // Creates a StylusTouchPointInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<StylusTouchPointInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisStylusTouchPointInfo object.
  base::Value::Dict ToValue() const;

  // The x position. The value ranges from 0 to |max_x| as defined in
  // StylusConnectedEventInfo.
  std::optional<int> x;

  // The y position. The value ranges from 0 to |max_y| as defined in
  // StylusConnectedEventInfo.
  std::optional<int> y;

  // The pressure applied to the touch contact. The value ranges from 0 to
  // |max_pressure| as defined in StylusConnectedEventInfo.
  std::optional<int> pressure;

};

struct StylusTouchEventInfo {
  StylusTouchEventInfo();
  ~StylusTouchEventInfo();
  StylusTouchEventInfo(const StylusTouchEventInfo&) = delete;
  StylusTouchEventInfo& operator=(const StylusTouchEventInfo&) = delete;
  StylusTouchEventInfo(StylusTouchEventInfo&& rhs) noexcept;
  StylusTouchEventInfo& operator=(StylusTouchEventInfo&& rhs) noexcept;

  // Populates a StylusTouchEventInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, StylusTouchEventInfo& out);

  // Populates a StylusTouchEventInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, StylusTouchEventInfo& out);

  // Creates a deep copy of StylusTouchEventInfo.
  StylusTouchEventInfo Clone() const;

  // Creates a StylusTouchEventInfo object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<StylusTouchEventInfo> FromValue(const base::Value::Dict& value);

  // Creates a StylusTouchEventInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<StylusTouchEventInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisStylusTouchEventInfo object.
  base::Value::Dict ToValue() const;

  // The info of the stylus touch point. A null touch point means the stylus
  // leaves the contact.
  std::optional<StylusTouchPointInfo> touch_point;

};

struct StylusConnectedEventInfo {
  StylusConnectedEventInfo();
  ~StylusConnectedEventInfo();
  StylusConnectedEventInfo(const StylusConnectedEventInfo&) = delete;
  StylusConnectedEventInfo& operator=(const StylusConnectedEventInfo&) = delete;
  StylusConnectedEventInfo(StylusConnectedEventInfo&& rhs) noexcept;
  StylusConnectedEventInfo& operator=(StylusConnectedEventInfo&& rhs) noexcept;

  // Populates a StylusConnectedEventInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, StylusConnectedEventInfo& out);

  // Populates a StylusConnectedEventInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, StylusConnectedEventInfo& out);

  // Creates a deep copy of StylusConnectedEventInfo.
  StylusConnectedEventInfo Clone() const;

  // Creates a StylusConnectedEventInfo object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<StylusConnectedEventInfo> FromValue(const base::Value::Dict& value);

  // Creates a StylusConnectedEventInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<StylusConnectedEventInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisStylusConnectedEventInfo object.
  base::Value::Dict ToValue() const;

  // The maximum possible x position of touch points.
  std::optional<int> max_x;

  // The maximum possible y position of touch points.
  std::optional<int> max_y;

  // The maximum possible pressure of touch points, or 0 if pressure is not
  // supported.
  std::optional<int> max_pressure;

};


//
// Functions
//

namespace IsEventSupported {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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

namespace OnKeyboardDiagnosticEvent {

extern const char kEventName[];  // "os.events.onKeyboardDiagnosticEvent"

base::Value::List Create(const KeyboardDiagnosticEventInfo& event_info);
}  // namespace OnKeyboardDiagnosticEvent

namespace OnLidEvent {

extern const char kEventName[];  // "os.events.onLidEvent"

base::Value::List Create(const LidEventInfo& event_info);
}  // namespace OnLidEvent

namespace OnUsbEvent {

extern const char kEventName[];  // "os.events.onUsbEvent"

base::Value::List Create(const UsbEventInfo& event_info);
}  // namespace OnUsbEvent

namespace OnExternalDisplayEvent {

extern const char kEventName[];  // "os.events.onExternalDisplayEvent"

base::Value::List Create(const ExternalDisplayEventInfo& event_info);
}  // namespace OnExternalDisplayEvent

namespace OnSdCardEvent {

extern const char kEventName[];  // "os.events.onSdCardEvent"

base::Value::List Create(const SdCardEventInfo& event_info);
}  // namespace OnSdCardEvent

namespace OnPowerEvent {

extern const char kEventName[];  // "os.events.onPowerEvent"

base::Value::List Create(const PowerEventInfo& event_info);
}  // namespace OnPowerEvent

namespace OnStylusGarageEvent {

extern const char kEventName[];  // "os.events.onStylusGarageEvent"

base::Value::List Create(const StylusGarageEventInfo& event_info);
}  // namespace OnStylusGarageEvent

namespace OnTouchpadButtonEvent {

extern const char kEventName[];  // "os.events.onTouchpadButtonEvent"

base::Value::List Create(const TouchpadButtonEventInfo& event_info);
}  // namespace OnTouchpadButtonEvent

namespace OnTouchpadTouchEvent {

extern const char kEventName[];  // "os.events.onTouchpadTouchEvent"

base::Value::List Create(const TouchpadTouchEventInfo& event_info);
}  // namespace OnTouchpadTouchEvent

namespace OnTouchpadConnectedEvent {

extern const char kEventName[];  // "os.events.onTouchpadConnectedEvent"

base::Value::List Create(const TouchpadConnectedEventInfo& event_info);
}  // namespace OnTouchpadConnectedEvent

namespace OnTouchscreenTouchEvent {

extern const char kEventName[];  // "os.events.onTouchscreenTouchEvent"

base::Value::List Create(const TouchscreenTouchEventInfo& event_info);
}  // namespace OnTouchscreenTouchEvent

namespace OnTouchscreenConnectedEvent {

extern const char kEventName[];  // "os.events.onTouchscreenConnectedEvent"

base::Value::List Create(const TouchscreenConnectedEventInfo& event_info);
}  // namespace OnTouchscreenConnectedEvent

namespace OnStylusTouchEvent {

extern const char kEventName[];  // "os.events.onStylusTouchEvent"

base::Value::List Create(const StylusTouchEventInfo& event_info);
}  // namespace OnStylusTouchEvent

namespace OnStylusConnectedEvent {

extern const char kEventName[];  // "os.events.onStylusConnectedEvent"

base::Value::List Create(const StylusConnectedEventInfo& event_info);
}  // namespace OnStylusConnectedEvent

}  // namespace os_events
}  // namespace api
}  // namespace chromeos

#endif  // CHROME_COMMON_CHROMEOS_EXTENSIONS_API_EVENTS_H__
