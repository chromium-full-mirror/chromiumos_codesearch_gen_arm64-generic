// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/chromeos/extensions/api/events.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/chromeos/extensions/api/events.h"

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
namespace os_events {
//
// Types
//

const char* ToString(EventCategory enum_param) {
  switch (enum_param) {
    case EventCategory::kAudioJack:
      return "audio_jack";
    case EventCategory::kLid:
      return "lid";
    case EventCategory::kUsb:
      return "usb";
    case EventCategory::kSdCard:
      return "sd_card";
    case EventCategory::kPower:
      return "power";
    case EventCategory::kKeyboardDiagnostic:
      return "keyboard_diagnostic";
    case EventCategory::kStylusGarage:
      return "stylus_garage";
    case EventCategory::kTouchpadButton:
      return "touchpad_button";
    case EventCategory::kTouchpadTouch:
      return "touchpad_touch";
    case EventCategory::kTouchpadConnected:
      return "touchpad_connected";
    case EventCategory::kTouchscreenTouch:
      return "touchscreen_touch";
    case EventCategory::kTouchscreenConnected:
      return "touchscreen_connected";
    case EventCategory::kExternalDisplay:
      return "external_display";
    case EventCategory::kStylusTouch:
      return "stylus_touch";
    case EventCategory::kStylusConnected:
      return "stylus_connected";
    case EventCategory::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

EventCategory ParseEventCategory(base::StringPiece enum_string) {
  if (enum_string == "audio_jack")
    return EventCategory::kAudioJack;
  if (enum_string == "lid")
    return EventCategory::kLid;
  if (enum_string == "usb")
    return EventCategory::kUsb;
  if (enum_string == "sd_card")
    return EventCategory::kSdCard;
  if (enum_string == "power")
    return EventCategory::kPower;
  if (enum_string == "keyboard_diagnostic")
    return EventCategory::kKeyboardDiagnostic;
  if (enum_string == "stylus_garage")
    return EventCategory::kStylusGarage;
  if (enum_string == "touchpad_button")
    return EventCategory::kTouchpadButton;
  if (enum_string == "touchpad_touch")
    return EventCategory::kTouchpadTouch;
  if (enum_string == "touchpad_connected")
    return EventCategory::kTouchpadConnected;
  if (enum_string == "touchscreen_touch")
    return EventCategory::kTouchscreenTouch;
  if (enum_string == "touchscreen_connected")
    return EventCategory::kTouchscreenConnected;
  if (enum_string == "external_display")
    return EventCategory::kExternalDisplay;
  if (enum_string == "stylus_touch")
    return EventCategory::kStylusTouch;
  if (enum_string == "stylus_connected")
    return EventCategory::kStylusConnected;
  return EventCategory::kNone;
}

std::u16string GetEventCategoryParseError(base::StringPiece enum_string) {
  return u"expected \"audio_jack\" or \"lid\" or \"usb\" or \"sd_card\" or \"power\" or \"keyboard_diagnostic\" or \"stylus_garage\" or \"touchpad_button\" or \"touchpad_touch\" or \"touchpad_connected\" or \"touchscreen_touch\" or \"touchscreen_connected\" or \"external_display\" or \"stylus_touch\" or \"stylus_connected\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(EventSupportStatus enum_param) {
  switch (enum_param) {
    case EventSupportStatus::kSupported:
      return "supported";
    case EventSupportStatus::kUnsupported:
      return "unsupported";
    case EventSupportStatus::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

EventSupportStatus ParseEventSupportStatus(base::StringPiece enum_string) {
  if (enum_string == "supported")
    return EventSupportStatus::kSupported;
  if (enum_string == "unsupported")
    return EventSupportStatus::kUnsupported;
  return EventSupportStatus::kNone;
}

std::u16string GetEventSupportStatusParseError(base::StringPiece enum_string) {
  return u"expected \"supported\" or \"unsupported\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


EventSupportStatusInfo::EventSupportStatusInfo()
: status() {}

EventSupportStatusInfo::~EventSupportStatusInfo() = default;
EventSupportStatusInfo::EventSupportStatusInfo(EventSupportStatusInfo&& rhs) noexcept = default;
EventSupportStatusInfo& EventSupportStatusInfo::operator=(EventSupportStatusInfo&& rhs) noexcept = default;
EventSupportStatusInfo EventSupportStatusInfo::Clone() const {
  EventSupportStatusInfo out;
  out.status = status;
  return out;
}

// static
bool EventSupportStatusInfo::Populate(
    const base::Value::Dict& dict, EventSupportStatusInfo& out) {
  out.status = EventSupportStatus();
  const base::Value* status_value = dict.Find("status");
  if (status_value) {
    {
      const std::string* event_support_status_as_string = (*status_value).GetIfString();
      if (!event_support_status_as_string) {
        return false;
      }
      out.status = ParseEventSupportStatus(*event_support_status_as_string);
      if (out.status == EventSupportStatus()) {
        return false;
      }
    }
    } else {
    out.status = EventSupportStatus();
  }

  return true;
}

// static
bool EventSupportStatusInfo::Populate(
    const base::Value& value, EventSupportStatusInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<EventSupportStatusInfo> EventSupportStatusInfo::FromValue(const base::Value::Dict& value) {
  EventSupportStatusInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<EventSupportStatusInfo> EventSupportStatusInfo::FromValue(const base::Value& value) {
  EventSupportStatusInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict EventSupportStatusInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->status != EventSupportStatus()) {
    to_value_result.Set("status", os_events::ToString(this->status));

  }

  return to_value_result;
}


const char* ToString(AudioJackEvent enum_param) {
  switch (enum_param) {
    case AudioJackEvent::kConnected:
      return "connected";
    case AudioJackEvent::kDisconnected:
      return "disconnected";
    case AudioJackEvent::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

AudioJackEvent ParseAudioJackEvent(base::StringPiece enum_string) {
  if (enum_string == "connected")
    return AudioJackEvent::kConnected;
  if (enum_string == "disconnected")
    return AudioJackEvent::kDisconnected;
  return AudioJackEvent::kNone;
}

std::u16string GetAudioJackEventParseError(base::StringPiece enum_string) {
  return u"expected \"connected\" or \"disconnected\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(AudioJackDeviceType enum_param) {
  switch (enum_param) {
    case AudioJackDeviceType::kHeadphone:
      return "headphone";
    case AudioJackDeviceType::kMicrophone:
      return "microphone";
    case AudioJackDeviceType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

AudioJackDeviceType ParseAudioJackDeviceType(base::StringPiece enum_string) {
  if (enum_string == "headphone")
    return AudioJackDeviceType::kHeadphone;
  if (enum_string == "microphone")
    return AudioJackDeviceType::kMicrophone;
  return AudioJackDeviceType::kNone;
}

std::u16string GetAudioJackDeviceTypeParseError(base::StringPiece enum_string) {
  return u"expected \"headphone\" or \"microphone\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(KeyboardConnectionType enum_param) {
  switch (enum_param) {
    case KeyboardConnectionType::kInternal:
      return "internal";
    case KeyboardConnectionType::kUsb:
      return "usb";
    case KeyboardConnectionType::kBluetooth:
      return "bluetooth";
    case KeyboardConnectionType::kUnknown:
      return "unknown";
    case KeyboardConnectionType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

KeyboardConnectionType ParseKeyboardConnectionType(base::StringPiece enum_string) {
  if (enum_string == "internal")
    return KeyboardConnectionType::kInternal;
  if (enum_string == "usb")
    return KeyboardConnectionType::kUsb;
  if (enum_string == "bluetooth")
    return KeyboardConnectionType::kBluetooth;
  if (enum_string == "unknown")
    return KeyboardConnectionType::kUnknown;
  return KeyboardConnectionType::kNone;
}

std::u16string GetKeyboardConnectionTypeParseError(base::StringPiece enum_string) {
  return u"expected \"internal\" or \"usb\" or \"bluetooth\" or \"unknown\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(PhysicalKeyboardLayout enum_param) {
  switch (enum_param) {
    case PhysicalKeyboardLayout::kUnknown:
      return "unknown";
    case PhysicalKeyboardLayout::kChromeOs:
      return "chrome_os";
    case PhysicalKeyboardLayout::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

PhysicalKeyboardLayout ParsePhysicalKeyboardLayout(base::StringPiece enum_string) {
  if (enum_string == "unknown")
    return PhysicalKeyboardLayout::kUnknown;
  if (enum_string == "chrome_os")
    return PhysicalKeyboardLayout::kChromeOs;
  return PhysicalKeyboardLayout::kNone;
}

std::u16string GetPhysicalKeyboardLayoutParseError(base::StringPiece enum_string) {
  return u"expected \"unknown\" or \"chrome_os\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(MechanicalKeyboardLayout enum_param) {
  switch (enum_param) {
    case MechanicalKeyboardLayout::kUnknown:
      return "unknown";
    case MechanicalKeyboardLayout::kAnsi:
      return "ansi";
    case MechanicalKeyboardLayout::kIso:
      return "iso";
    case MechanicalKeyboardLayout::kJis:
      return "jis";
    case MechanicalKeyboardLayout::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

MechanicalKeyboardLayout ParseMechanicalKeyboardLayout(base::StringPiece enum_string) {
  if (enum_string == "unknown")
    return MechanicalKeyboardLayout::kUnknown;
  if (enum_string == "ansi")
    return MechanicalKeyboardLayout::kAnsi;
  if (enum_string == "iso")
    return MechanicalKeyboardLayout::kIso;
  if (enum_string == "jis")
    return MechanicalKeyboardLayout::kJis;
  return MechanicalKeyboardLayout::kNone;
}

std::u16string GetMechanicalKeyboardLayoutParseError(base::StringPiece enum_string) {
  return u"expected \"unknown\" or \"ansi\" or \"iso\" or \"jis\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(KeyboardNumberPadPresence enum_param) {
  switch (enum_param) {
    case KeyboardNumberPadPresence::kUnknown:
      return "unknown";
    case KeyboardNumberPadPresence::kPresent:
      return "present";
    case KeyboardNumberPadPresence::kNotPresent:
      return "not_present";
    case KeyboardNumberPadPresence::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

KeyboardNumberPadPresence ParseKeyboardNumberPadPresence(base::StringPiece enum_string) {
  if (enum_string == "unknown")
    return KeyboardNumberPadPresence::kUnknown;
  if (enum_string == "present")
    return KeyboardNumberPadPresence::kPresent;
  if (enum_string == "not_present")
    return KeyboardNumberPadPresence::kNotPresent;
  return KeyboardNumberPadPresence::kNone;
}

std::u16string GetKeyboardNumberPadPresenceParseError(base::StringPiece enum_string) {
  return u"expected \"unknown\" or \"present\" or \"not_present\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(KeyboardTopRowKey enum_param) {
  switch (enum_param) {
    case KeyboardTopRowKey::kNoKey:
      return "no_key";
    case KeyboardTopRowKey::kUnknown:
      return "unknown";
    case KeyboardTopRowKey::kBack:
      return "back";
    case KeyboardTopRowKey::kForward:
      return "forward";
    case KeyboardTopRowKey::kRefresh:
      return "refresh";
    case KeyboardTopRowKey::kFullscreen:
      return "fullscreen";
    case KeyboardTopRowKey::kOverview:
      return "overview";
    case KeyboardTopRowKey::kScreenshot:
      return "screenshot";
    case KeyboardTopRowKey::kScreenBrightnessDown:
      return "screen_brightness_down";
    case KeyboardTopRowKey::kScreenBrightnessUp:
      return "screen_brightness_up";
    case KeyboardTopRowKey::kPrivacyScreenToggle:
      return "privacy_screen_toggle";
    case KeyboardTopRowKey::kMicrophoneMute:
      return "microphone_mute";
    case KeyboardTopRowKey::kVolumeMute:
      return "volume_mute";
    case KeyboardTopRowKey::kVolumeDown:
      return "volume_down";
    case KeyboardTopRowKey::kVolumeUp:
      return "volume_up";
    case KeyboardTopRowKey::kKeyboardBacklightToggle:
      return "keyboard_backlight_toggle";
    case KeyboardTopRowKey::kKeyboardBacklightDown:
      return "keyboard_backlight_down";
    case KeyboardTopRowKey::kKeyboardBacklightUp:
      return "keyboard_backlight_up";
    case KeyboardTopRowKey::kNextTrack:
      return "next_track";
    case KeyboardTopRowKey::kPreviousTrack:
      return "previous_track";
    case KeyboardTopRowKey::kPlayPause:
      return "play_pause";
    case KeyboardTopRowKey::kScreenMirror:
      return "screen_mirror";
    case KeyboardTopRowKey::kDelete:
      return "delete";
    case KeyboardTopRowKey::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

KeyboardTopRowKey ParseKeyboardTopRowKey(base::StringPiece enum_string) {
  if (enum_string == "no_key")
    return KeyboardTopRowKey::kNoKey;
  if (enum_string == "unknown")
    return KeyboardTopRowKey::kUnknown;
  if (enum_string == "back")
    return KeyboardTopRowKey::kBack;
  if (enum_string == "forward")
    return KeyboardTopRowKey::kForward;
  if (enum_string == "refresh")
    return KeyboardTopRowKey::kRefresh;
  if (enum_string == "fullscreen")
    return KeyboardTopRowKey::kFullscreen;
  if (enum_string == "overview")
    return KeyboardTopRowKey::kOverview;
  if (enum_string == "screenshot")
    return KeyboardTopRowKey::kScreenshot;
  if (enum_string == "screen_brightness_down")
    return KeyboardTopRowKey::kScreenBrightnessDown;
  if (enum_string == "screen_brightness_up")
    return KeyboardTopRowKey::kScreenBrightnessUp;
  if (enum_string == "privacy_screen_toggle")
    return KeyboardTopRowKey::kPrivacyScreenToggle;
  if (enum_string == "microphone_mute")
    return KeyboardTopRowKey::kMicrophoneMute;
  if (enum_string == "volume_mute")
    return KeyboardTopRowKey::kVolumeMute;
  if (enum_string == "volume_down")
    return KeyboardTopRowKey::kVolumeDown;
  if (enum_string == "volume_up")
    return KeyboardTopRowKey::kVolumeUp;
  if (enum_string == "keyboard_backlight_toggle")
    return KeyboardTopRowKey::kKeyboardBacklightToggle;
  if (enum_string == "keyboard_backlight_down")
    return KeyboardTopRowKey::kKeyboardBacklightDown;
  if (enum_string == "keyboard_backlight_up")
    return KeyboardTopRowKey::kKeyboardBacklightUp;
  if (enum_string == "next_track")
    return KeyboardTopRowKey::kNextTrack;
  if (enum_string == "previous_track")
    return KeyboardTopRowKey::kPreviousTrack;
  if (enum_string == "play_pause")
    return KeyboardTopRowKey::kPlayPause;
  if (enum_string == "screen_mirror")
    return KeyboardTopRowKey::kScreenMirror;
  if (enum_string == "delete")
    return KeyboardTopRowKey::kDelete;
  return KeyboardTopRowKey::kNone;
}

std::u16string GetKeyboardTopRowKeyParseError(base::StringPiece enum_string) {
  return u"expected \"no_key\" or \"unknown\" or \"back\" or \"forward\" or \"refresh\" or \"fullscreen\" or \"overview\" or \"screenshot\" or \"screen_brightness_down\" or \"screen_brightness_up\" or \"privacy_screen_toggle\" or \"microphone_mute\" or \"volume_mute\" or \"volume_down\" or \"volume_up\" or \"keyboard_backlight_toggle\" or \"keyboard_backlight_down\" or \"keyboard_backlight_up\" or \"next_track\" or \"previous_track\" or \"play_pause\" or \"screen_mirror\" or \"delete\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(KeyboardTopRightKey enum_param) {
  switch (enum_param) {
    case KeyboardTopRightKey::kUnknown:
      return "unknown";
    case KeyboardTopRightKey::kPower:
      return "power";
    case KeyboardTopRightKey::kLock:
      return "lock";
    case KeyboardTopRightKey::kControlPanel:
      return "control_panel";
    case KeyboardTopRightKey::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

KeyboardTopRightKey ParseKeyboardTopRightKey(base::StringPiece enum_string) {
  if (enum_string == "unknown")
    return KeyboardTopRightKey::kUnknown;
  if (enum_string == "power")
    return KeyboardTopRightKey::kPower;
  if (enum_string == "lock")
    return KeyboardTopRightKey::kLock;
  if (enum_string == "control_panel")
    return KeyboardTopRightKey::kControlPanel;
  return KeyboardTopRightKey::kNone;
}

std::u16string GetKeyboardTopRightKeyParseError(base::StringPiece enum_string) {
  return u"expected \"unknown\" or \"power\" or \"lock\" or \"control_panel\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


KeyboardInfo::KeyboardInfo()
: connection_type(),
physical_layout(),
mechanical_layout(),
number_pad_present(),
top_right_key() {}

KeyboardInfo::~KeyboardInfo() = default;
KeyboardInfo::KeyboardInfo(KeyboardInfo&& rhs) noexcept = default;
KeyboardInfo& KeyboardInfo::operator=(KeyboardInfo&& rhs) noexcept = default;
KeyboardInfo KeyboardInfo::Clone() const {
  KeyboardInfo out;
  out.id = id;
  out.connection_type = connection_type;
  out.name = name;
  out.physical_layout = physical_layout;
  out.mechanical_layout = mechanical_layout;
  out.region_code = region_code;
  out.number_pad_present = number_pad_present;
  out.top_row_keys = top_row_keys;
  out.top_right_key = top_right_key;
  out.has_assistant_key = has_assistant_key;
  return out;
}

// static
bool KeyboardInfo::Populate(
    const base::Value::Dict& dict, KeyboardInfo& out) {
  out.connection_type = KeyboardConnectionType();
  out.physical_layout = PhysicalKeyboardLayout();
  out.mechanical_layout = MechanicalKeyboardLayout();
  out.number_pad_present = KeyboardNumberPadPresence();
  out.top_right_key = KeyboardTopRightKey();
  const base::Value* id_value = dict.Find("id");
  if (id_value) {
    {
      auto temp = (*id_value).GetIfInt();
      if (!temp.has_value()) {
        out.id = std::nullopt;
        return false;
      }
      out.id = *temp;
    }
  }

  const base::Value* connection_type_value = dict.Find("connectionType");
  if (connection_type_value) {
    {
      const std::string* keyboard_connection_type_as_string = (*connection_type_value).GetIfString();
      if (!keyboard_connection_type_as_string) {
        return false;
      }
      out.connection_type = ParseKeyboardConnectionType(*keyboard_connection_type_as_string);
      if (out.connection_type == KeyboardConnectionType()) {
        return false;
      }
    }
    } else {
    out.connection_type = KeyboardConnectionType();
  }

  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    {
      auto* temp = (*name_value).GetIfString();
      if (!temp) {
        out.name = std::nullopt;
        return false;
      }
      out.name = *temp;
    }
  }

  const base::Value* physical_layout_value = dict.Find("physicalLayout");
  if (physical_layout_value) {
    {
      const std::string* physical_keyboard_layout_as_string = (*physical_layout_value).GetIfString();
      if (!physical_keyboard_layout_as_string) {
        return false;
      }
      out.physical_layout = ParsePhysicalKeyboardLayout(*physical_keyboard_layout_as_string);
      if (out.physical_layout == PhysicalKeyboardLayout()) {
        return false;
      }
    }
    } else {
    out.physical_layout = PhysicalKeyboardLayout();
  }

  const base::Value* mechanical_layout_value = dict.Find("mechanicalLayout");
  if (mechanical_layout_value) {
    {
      const std::string* mechanical_keyboard_layout_as_string = (*mechanical_layout_value).GetIfString();
      if (!mechanical_keyboard_layout_as_string) {
        return false;
      }
      out.mechanical_layout = ParseMechanicalKeyboardLayout(*mechanical_keyboard_layout_as_string);
      if (out.mechanical_layout == MechanicalKeyboardLayout()) {
        return false;
      }
    }
    } else {
    out.mechanical_layout = MechanicalKeyboardLayout();
  }

  const base::Value* region_code_value = dict.Find("regionCode");
  if (region_code_value) {
    {
      auto* temp = (*region_code_value).GetIfString();
      if (!temp) {
        out.region_code = std::nullopt;
        return false;
      }
      out.region_code = *temp;
    }
  }

  const base::Value* number_pad_present_value = dict.Find("numberPadPresent");
  if (number_pad_present_value) {
    {
      const std::string* keyboard_number_pad_presence_as_string = (*number_pad_present_value).GetIfString();
      if (!keyboard_number_pad_presence_as_string) {
        return false;
      }
      out.number_pad_present = ParseKeyboardNumberPadPresence(*keyboard_number_pad_presence_as_string);
      if (out.number_pad_present == KeyboardNumberPadPresence()) {
        return false;
      }
    }
    } else {
    out.number_pad_present = KeyboardNumberPadPresence();
  }

  const base::Value* top_row_keys_value = dict.Find("topRowKeys");
  if (!top_row_keys_value) {
    return false;
  }
  {
    if (!(*top_row_keys_value).is_list()) {
      return false;
    }
    else {
      for (const auto& it : ((*top_row_keys_value)).GetList()) {
        KeyboardTopRowKey tmp;
        const std::string* keyboard_top_row_key_as_string = (it).GetIfString();
        if (!keyboard_top_row_key_as_string) {
          return false;
        }
        tmp = ParseKeyboardTopRowKey(*keyboard_top_row_key_as_string);
        if (tmp == KeyboardTopRowKey()) {
          return false;
        }
        out.top_row_keys.push_back(tmp);
      }
    }
  }

  const base::Value* top_right_key_value = dict.Find("topRightKey");
  if (top_right_key_value) {
    {
      const std::string* keyboard_top_right_key_as_string = (*top_right_key_value).GetIfString();
      if (!keyboard_top_right_key_as_string) {
        return false;
      }
      out.top_right_key = ParseKeyboardTopRightKey(*keyboard_top_right_key_as_string);
      if (out.top_right_key == KeyboardTopRightKey()) {
        return false;
      }
    }
    } else {
    out.top_right_key = KeyboardTopRightKey();
  }

  const base::Value* has_assistant_key_value = dict.Find("hasAssistantKey");
  if (has_assistant_key_value) {
    {
      auto temp = (*has_assistant_key_value).GetIfBool();
      if (!temp.has_value()) {
        out.has_assistant_key = std::nullopt;
        return false;
      }
      out.has_assistant_key = *temp;
    }
  }

  return true;
}

// static
bool KeyboardInfo::Populate(
    const base::Value& value, KeyboardInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<KeyboardInfo> KeyboardInfo::FromValue(const base::Value::Dict& value) {
  KeyboardInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<KeyboardInfo> KeyboardInfo::FromValue(const base::Value& value) {
  KeyboardInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict KeyboardInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->id) {
    to_value_result.Set("id", *this->id);

  }
  if (this->connection_type != KeyboardConnectionType()) {
    to_value_result.Set("connectionType", os_events::ToString(this->connection_type));

  }
  if (this->name) {
    to_value_result.Set("name", *this->name);

  }
  if (this->physical_layout != PhysicalKeyboardLayout()) {
    to_value_result.Set("physicalLayout", os_events::ToString(this->physical_layout));

  }
  if (this->mechanical_layout != MechanicalKeyboardLayout()) {
    to_value_result.Set("mechanicalLayout", os_events::ToString(this->mechanical_layout));

  }
  if (this->region_code) {
    to_value_result.Set("regionCode", *this->region_code);

  }
  if (this->number_pad_present != KeyboardNumberPadPresence()) {
    to_value_result.Set("numberPadPresent", os_events::ToString(this->number_pad_present));

  }
  {
    std::vector<std::string> topRowKeys_list;
    for (const auto& it : (this->top_row_keys)) {
      topRowKeys_list.emplace_back(os_events::ToString(it));
    }
    to_value_result.Set("topRowKeys", json_schema_compiler::util::CreateValueFromArray(topRowKeys_list));
  }

  if (this->top_right_key != KeyboardTopRightKey()) {
    to_value_result.Set("topRightKey", os_events::ToString(this->top_right_key));

  }
  if (this->has_assistant_key) {
    to_value_result.Set("hasAssistantKey", *this->has_assistant_key);

  }

  return to_value_result;
}


KeyboardDiagnosticEventInfo::KeyboardDiagnosticEventInfo()
 {}

KeyboardDiagnosticEventInfo::~KeyboardDiagnosticEventInfo() = default;
KeyboardDiagnosticEventInfo::KeyboardDiagnosticEventInfo(KeyboardDiagnosticEventInfo&& rhs) noexcept = default;
KeyboardDiagnosticEventInfo& KeyboardDiagnosticEventInfo::operator=(KeyboardDiagnosticEventInfo&& rhs) noexcept = default;
KeyboardDiagnosticEventInfo KeyboardDiagnosticEventInfo::Clone() const {
  KeyboardDiagnosticEventInfo out;
  if (keyboard_info) {
    out.keyboard_info = keyboard_info->Clone();
  }
  out.tested_keys = tested_keys;
  out.tested_top_row_keys = tested_top_row_keys;
  return out;
}

// static
bool KeyboardDiagnosticEventInfo::Populate(
    const base::Value::Dict& dict, KeyboardDiagnosticEventInfo& out) {
  const base::Value* keyboard_info_value = dict.Find("keyboardInfo");
  if (keyboard_info_value) {
    {
      if (!(*keyboard_info_value).is_dict()) {
        return false;
      }
      else {
        KeyboardInfo temp;
        if (!KeyboardInfo::Populate((*keyboard_info_value).GetDict(), temp))
          return false;
        out.keyboard_info = std::move(temp);
      }
    }
  }

  const base::Value* tested_keys_value = dict.Find("testedKeys");
  if (!tested_keys_value) {
    return false;
  }
  {
    if (!(*tested_keys_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*tested_keys_value).GetList(), out.tested_keys)) {
        return false;
      }
    }
  }

  const base::Value* tested_top_row_keys_value = dict.Find("testedTopRowKeys");
  if (!tested_top_row_keys_value) {
    return false;
  }
  {
    if (!(*tested_top_row_keys_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*tested_top_row_keys_value).GetList(), out.tested_top_row_keys)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool KeyboardDiagnosticEventInfo::Populate(
    const base::Value& value, KeyboardDiagnosticEventInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<KeyboardDiagnosticEventInfo> KeyboardDiagnosticEventInfo::FromValue(const base::Value::Dict& value) {
  KeyboardDiagnosticEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<KeyboardDiagnosticEventInfo> KeyboardDiagnosticEventInfo::FromValue(const base::Value& value) {
  KeyboardDiagnosticEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict KeyboardDiagnosticEventInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->keyboard_info) {
    to_value_result.Set("keyboardInfo", (this->keyboard_info)->ToValue());

  }
  to_value_result.Set("testedKeys", json_schema_compiler::util::CreateValueFromArray(this->tested_keys));

  to_value_result.Set("testedTopRowKeys", json_schema_compiler::util::CreateValueFromArray(this->tested_top_row_keys));


  return to_value_result;
}


const char* ToString(LidEvent enum_param) {
  switch (enum_param) {
    case LidEvent::kClosed:
      return "closed";
    case LidEvent::kOpened:
      return "opened";
    case LidEvent::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

LidEvent ParseLidEvent(base::StringPiece enum_string) {
  if (enum_string == "closed")
    return LidEvent::kClosed;
  if (enum_string == "opened")
    return LidEvent::kOpened;
  return LidEvent::kNone;
}

std::u16string GetLidEventParseError(base::StringPiece enum_string) {
  return u"expected \"closed\" or \"opened\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(UsbEvent enum_param) {
  switch (enum_param) {
    case UsbEvent::kConnected:
      return "connected";
    case UsbEvent::kDisconnected:
      return "disconnected";
    case UsbEvent::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

UsbEvent ParseUsbEvent(base::StringPiece enum_string) {
  if (enum_string == "connected")
    return UsbEvent::kConnected;
  if (enum_string == "disconnected")
    return UsbEvent::kDisconnected;
  return UsbEvent::kNone;
}

std::u16string GetUsbEventParseError(base::StringPiece enum_string) {
  return u"expected \"connected\" or \"disconnected\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ExternalDisplayEvent enum_param) {
  switch (enum_param) {
    case ExternalDisplayEvent::kConnected:
      return "connected";
    case ExternalDisplayEvent::kDisconnected:
      return "disconnected";
    case ExternalDisplayEvent::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ExternalDisplayEvent ParseExternalDisplayEvent(base::StringPiece enum_string) {
  if (enum_string == "connected")
    return ExternalDisplayEvent::kConnected;
  if (enum_string == "disconnected")
    return ExternalDisplayEvent::kDisconnected;
  return ExternalDisplayEvent::kNone;
}

std::u16string GetExternalDisplayEventParseError(base::StringPiece enum_string) {
  return u"expected \"connected\" or \"disconnected\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SdCardEvent enum_param) {
  switch (enum_param) {
    case SdCardEvent::kConnected:
      return "connected";
    case SdCardEvent::kDisconnected:
      return "disconnected";
    case SdCardEvent::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

SdCardEvent ParseSdCardEvent(base::StringPiece enum_string) {
  if (enum_string == "connected")
    return SdCardEvent::kConnected;
  if (enum_string == "disconnected")
    return SdCardEvent::kDisconnected;
  return SdCardEvent::kNone;
}

std::u16string GetSdCardEventParseError(base::StringPiece enum_string) {
  return u"expected \"connected\" or \"disconnected\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(PowerEvent enum_param) {
  switch (enum_param) {
    case PowerEvent::kAcInserted:
      return "ac_inserted";
    case PowerEvent::kAcRemoved:
      return "ac_removed";
    case PowerEvent::kOsSuspend:
      return "os_suspend";
    case PowerEvent::kOsResume:
      return "os_resume";
    case PowerEvent::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

PowerEvent ParsePowerEvent(base::StringPiece enum_string) {
  if (enum_string == "ac_inserted")
    return PowerEvent::kAcInserted;
  if (enum_string == "ac_removed")
    return PowerEvent::kAcRemoved;
  if (enum_string == "os_suspend")
    return PowerEvent::kOsSuspend;
  if (enum_string == "os_resume")
    return PowerEvent::kOsResume;
  return PowerEvent::kNone;
}

std::u16string GetPowerEventParseError(base::StringPiece enum_string) {
  return u"expected \"ac_inserted\" or \"ac_removed\" or \"os_suspend\" or \"os_resume\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(StylusGarageEvent enum_param) {
  switch (enum_param) {
    case StylusGarageEvent::kInserted:
      return "inserted";
    case StylusGarageEvent::kRemoved:
      return "removed";
    case StylusGarageEvent::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

StylusGarageEvent ParseStylusGarageEvent(base::StringPiece enum_string) {
  if (enum_string == "inserted")
    return StylusGarageEvent::kInserted;
  if (enum_string == "removed")
    return StylusGarageEvent::kRemoved;
  return StylusGarageEvent::kNone;
}

std::u16string GetStylusGarageEventParseError(base::StringPiece enum_string) {
  return u"expected \"inserted\" or \"removed\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


AudioJackEventInfo::AudioJackEventInfo()
: event(),
device_type() {}

AudioJackEventInfo::~AudioJackEventInfo() = default;
AudioJackEventInfo::AudioJackEventInfo(AudioJackEventInfo&& rhs) noexcept = default;
AudioJackEventInfo& AudioJackEventInfo::operator=(AudioJackEventInfo&& rhs) noexcept = default;
AudioJackEventInfo AudioJackEventInfo::Clone() const {
  AudioJackEventInfo out;
  out.event = event;
  out.device_type = device_type;
  return out;
}

// static
bool AudioJackEventInfo::Populate(
    const base::Value::Dict& dict, AudioJackEventInfo& out) {
  out.event = AudioJackEvent();
  out.device_type = AudioJackDeviceType();
  const base::Value* event_value = dict.Find("event");
  if (event_value) {
    {
      const std::string* audio_jack_event_as_string = (*event_value).GetIfString();
      if (!audio_jack_event_as_string) {
        return false;
      }
      out.event = ParseAudioJackEvent(*audio_jack_event_as_string);
      if (out.event == AudioJackEvent()) {
        return false;
      }
    }
    } else {
    out.event = AudioJackEvent();
  }

  const base::Value* device_type_value = dict.Find("deviceType");
  if (device_type_value) {
    {
      const std::string* audio_jack_device_type_as_string = (*device_type_value).GetIfString();
      if (!audio_jack_device_type_as_string) {
        return false;
      }
      out.device_type = ParseAudioJackDeviceType(*audio_jack_device_type_as_string);
      if (out.device_type == AudioJackDeviceType()) {
        return false;
      }
    }
    } else {
    out.device_type = AudioJackDeviceType();
  }

  return true;
}

// static
bool AudioJackEventInfo::Populate(
    const base::Value& value, AudioJackEventInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AudioJackEventInfo> AudioJackEventInfo::FromValue(const base::Value::Dict& value) {
  AudioJackEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AudioJackEventInfo> AudioJackEventInfo::FromValue(const base::Value& value) {
  AudioJackEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict AudioJackEventInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->event != AudioJackEvent()) {
    to_value_result.Set("event", os_events::ToString(this->event));

  }
  if (this->device_type != AudioJackDeviceType()) {
    to_value_result.Set("deviceType", os_events::ToString(this->device_type));

  }

  return to_value_result;
}


LidEventInfo::LidEventInfo()
: event() {}

LidEventInfo::~LidEventInfo() = default;
LidEventInfo::LidEventInfo(LidEventInfo&& rhs) noexcept = default;
LidEventInfo& LidEventInfo::operator=(LidEventInfo&& rhs) noexcept = default;
LidEventInfo LidEventInfo::Clone() const {
  LidEventInfo out;
  out.event = event;
  return out;
}

// static
bool LidEventInfo::Populate(
    const base::Value::Dict& dict, LidEventInfo& out) {
  out.event = LidEvent();
  const base::Value* event_value = dict.Find("event");
  if (event_value) {
    {
      const std::string* lid_event_as_string = (*event_value).GetIfString();
      if (!lid_event_as_string) {
        return false;
      }
      out.event = ParseLidEvent(*lid_event_as_string);
      if (out.event == LidEvent()) {
        return false;
      }
    }
    } else {
    out.event = LidEvent();
  }

  return true;
}

// static
bool LidEventInfo::Populate(
    const base::Value& value, LidEventInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<LidEventInfo> LidEventInfo::FromValue(const base::Value::Dict& value) {
  LidEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<LidEventInfo> LidEventInfo::FromValue(const base::Value& value) {
  LidEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict LidEventInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->event != LidEvent()) {
    to_value_result.Set("event", os_events::ToString(this->event));

  }

  return to_value_result;
}


UsbEventInfo::UsbEventInfo()
: event() {}

UsbEventInfo::~UsbEventInfo() = default;
UsbEventInfo::UsbEventInfo(UsbEventInfo&& rhs) noexcept = default;
UsbEventInfo& UsbEventInfo::operator=(UsbEventInfo&& rhs) noexcept = default;
UsbEventInfo UsbEventInfo::Clone() const {
  UsbEventInfo out;
  out.vendor = vendor;
  out.name = name;
  out.vid = vid;
  out.pid = pid;
  out.categories = categories;
  out.event = event;
  return out;
}

// static
bool UsbEventInfo::Populate(
    const base::Value::Dict& dict, UsbEventInfo& out) {
  out.event = UsbEvent();
  const base::Value* vendor_value = dict.Find("vendor");
  if (vendor_value) {
    {
      auto* temp = (*vendor_value).GetIfString();
      if (!temp) {
        out.vendor = std::nullopt;
        return false;
      }
      out.vendor = *temp;
    }
  }

  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    {
      auto* temp = (*name_value).GetIfString();
      if (!temp) {
        out.name = std::nullopt;
        return false;
      }
      out.name = *temp;
    }
  }

  const base::Value* vid_value = dict.Find("vid");
  if (vid_value) {
    {
      auto temp = (*vid_value).GetIfInt();
      if (!temp.has_value()) {
        out.vid = std::nullopt;
        return false;
      }
      out.vid = *temp;
    }
  }

  const base::Value* pid_value = dict.Find("pid");
  if (pid_value) {
    {
      auto temp = (*pid_value).GetIfInt();
      if (!temp.has_value()) {
        out.pid = std::nullopt;
        return false;
      }
      out.pid = *temp;
    }
  }

  const base::Value* categories_value = dict.Find("categories");
  if (!categories_value) {
    return false;
  }
  {
    if (!(*categories_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*categories_value).GetList(), out.categories)) {
        return false;
      }
    }
  }

  const base::Value* event_value = dict.Find("event");
  if (event_value) {
    {
      const std::string* usb_event_as_string = (*event_value).GetIfString();
      if (!usb_event_as_string) {
        return false;
      }
      out.event = ParseUsbEvent(*usb_event_as_string);
      if (out.event == UsbEvent()) {
        return false;
      }
    }
    } else {
    out.event = UsbEvent();
  }

  return true;
}

// static
bool UsbEventInfo::Populate(
    const base::Value& value, UsbEventInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<UsbEventInfo> UsbEventInfo::FromValue(const base::Value::Dict& value) {
  UsbEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<UsbEventInfo> UsbEventInfo::FromValue(const base::Value& value) {
  UsbEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict UsbEventInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->vendor) {
    to_value_result.Set("vendor", *this->vendor);

  }
  if (this->name) {
    to_value_result.Set("name", *this->name);

  }
  if (this->vid) {
    to_value_result.Set("vid", *this->vid);

  }
  if (this->pid) {
    to_value_result.Set("pid", *this->pid);

  }
  to_value_result.Set("categories", json_schema_compiler::util::CreateValueFromArray(this->categories));

  if (this->event != UsbEvent()) {
    to_value_result.Set("event", os_events::ToString(this->event));

  }

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


ExternalDisplayInfo::ExternalDisplayInfo()
: input_type() {}

ExternalDisplayInfo::~ExternalDisplayInfo() = default;
ExternalDisplayInfo::ExternalDisplayInfo(ExternalDisplayInfo&& rhs) noexcept = default;
ExternalDisplayInfo& ExternalDisplayInfo::operator=(ExternalDisplayInfo&& rhs) noexcept = default;
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
        out.display_width = std::nullopt;
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
        out.display_height = std::nullopt;
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
        out.resolution_horizontal = std::nullopt;
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
        out.resolution_vertical = std::nullopt;
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
        out.refresh_rate = std::nullopt;
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
        out.manufacturer = std::nullopt;
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
        out.model_id = std::nullopt;
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
        out.serial_number = std::nullopt;
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
        out.manufacture_week = std::nullopt;
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
        out.manufacture_year = std::nullopt;
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
        out.edid_version = std::nullopt;
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
        out.display_name = std::nullopt;
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
std::optional<ExternalDisplayInfo> ExternalDisplayInfo::FromValue(const base::Value::Dict& value) {
  ExternalDisplayInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ExternalDisplayInfo> ExternalDisplayInfo::FromValue(const base::Value& value) {
  ExternalDisplayInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
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
  to_value_result.Set("inputType", os_events::ToString(this->input_type));

  if (this->display_name) {
    to_value_result.Set("displayName", *this->display_name);

  }

  return to_value_result;
}


ExternalDisplayEventInfo::ExternalDisplayEventInfo()
: event() {}

ExternalDisplayEventInfo::~ExternalDisplayEventInfo() = default;
ExternalDisplayEventInfo::ExternalDisplayEventInfo(ExternalDisplayEventInfo&& rhs) noexcept = default;
ExternalDisplayEventInfo& ExternalDisplayEventInfo::operator=(ExternalDisplayEventInfo&& rhs) noexcept = default;
ExternalDisplayEventInfo ExternalDisplayEventInfo::Clone() const {
  ExternalDisplayEventInfo out;
  out.event = event;
  if (display_info) {
    out.display_info = display_info->Clone();
  }
  return out;
}

// static
bool ExternalDisplayEventInfo::Populate(
    const base::Value::Dict& dict, ExternalDisplayEventInfo& out) {
  out.event = ExternalDisplayEvent();
  const base::Value* event_value = dict.Find("event");
  if (event_value) {
    {
      const std::string* external_display_event_as_string = (*event_value).GetIfString();
      if (!external_display_event_as_string) {
        return false;
      }
      out.event = ParseExternalDisplayEvent(*external_display_event_as_string);
      if (out.event == ExternalDisplayEvent()) {
        return false;
      }
    }
    } else {
    out.event = ExternalDisplayEvent();
  }

  const base::Value* display_info_value = dict.Find("displayInfo");
  if (display_info_value) {
    {
      if (!(*display_info_value).is_dict()) {
        return false;
      }
      else {
        ExternalDisplayInfo temp;
        if (!ExternalDisplayInfo::Populate((*display_info_value).GetDict(), temp))
          return false;
        out.display_info = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool ExternalDisplayEventInfo::Populate(
    const base::Value& value, ExternalDisplayEventInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ExternalDisplayEventInfo> ExternalDisplayEventInfo::FromValue(const base::Value::Dict& value) {
  ExternalDisplayEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ExternalDisplayEventInfo> ExternalDisplayEventInfo::FromValue(const base::Value& value) {
  ExternalDisplayEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ExternalDisplayEventInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->event != ExternalDisplayEvent()) {
    to_value_result.Set("event", os_events::ToString(this->event));

  }
  if (this->display_info) {
    to_value_result.Set("displayInfo", (this->display_info)->ToValue());

  }

  return to_value_result;
}


SdCardEventInfo::SdCardEventInfo()
: event() {}

SdCardEventInfo::~SdCardEventInfo() = default;
SdCardEventInfo::SdCardEventInfo(SdCardEventInfo&& rhs) noexcept = default;
SdCardEventInfo& SdCardEventInfo::operator=(SdCardEventInfo&& rhs) noexcept = default;
SdCardEventInfo SdCardEventInfo::Clone() const {
  SdCardEventInfo out;
  out.event = event;
  return out;
}

// static
bool SdCardEventInfo::Populate(
    const base::Value::Dict& dict, SdCardEventInfo& out) {
  out.event = SdCardEvent();
  const base::Value* event_value = dict.Find("event");
  if (event_value) {
    {
      const std::string* sd_card_event_as_string = (*event_value).GetIfString();
      if (!sd_card_event_as_string) {
        return false;
      }
      out.event = ParseSdCardEvent(*sd_card_event_as_string);
      if (out.event == SdCardEvent()) {
        return false;
      }
    }
    } else {
    out.event = SdCardEvent();
  }

  return true;
}

// static
bool SdCardEventInfo::Populate(
    const base::Value& value, SdCardEventInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SdCardEventInfo> SdCardEventInfo::FromValue(const base::Value::Dict& value) {
  SdCardEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SdCardEventInfo> SdCardEventInfo::FromValue(const base::Value& value) {
  SdCardEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SdCardEventInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->event != SdCardEvent()) {
    to_value_result.Set("event", os_events::ToString(this->event));

  }

  return to_value_result;
}


PowerEventInfo::PowerEventInfo()
: event() {}

PowerEventInfo::~PowerEventInfo() = default;
PowerEventInfo::PowerEventInfo(PowerEventInfo&& rhs) noexcept = default;
PowerEventInfo& PowerEventInfo::operator=(PowerEventInfo&& rhs) noexcept = default;
PowerEventInfo PowerEventInfo::Clone() const {
  PowerEventInfo out;
  out.event = event;
  return out;
}

// static
bool PowerEventInfo::Populate(
    const base::Value::Dict& dict, PowerEventInfo& out) {
  out.event = PowerEvent();
  const base::Value* event_value = dict.Find("event");
  if (event_value) {
    {
      const std::string* power_event_as_string = (*event_value).GetIfString();
      if (!power_event_as_string) {
        return false;
      }
      out.event = ParsePowerEvent(*power_event_as_string);
      if (out.event == PowerEvent()) {
        return false;
      }
    }
    } else {
    out.event = PowerEvent();
  }

  return true;
}

// static
bool PowerEventInfo::Populate(
    const base::Value& value, PowerEventInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PowerEventInfo> PowerEventInfo::FromValue(const base::Value::Dict& value) {
  PowerEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PowerEventInfo> PowerEventInfo::FromValue(const base::Value& value) {
  PowerEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict PowerEventInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->event != PowerEvent()) {
    to_value_result.Set("event", os_events::ToString(this->event));

  }

  return to_value_result;
}


StylusGarageEventInfo::StylusGarageEventInfo()
: event() {}

StylusGarageEventInfo::~StylusGarageEventInfo() = default;
StylusGarageEventInfo::StylusGarageEventInfo(StylusGarageEventInfo&& rhs) noexcept = default;
StylusGarageEventInfo& StylusGarageEventInfo::operator=(StylusGarageEventInfo&& rhs) noexcept = default;
StylusGarageEventInfo StylusGarageEventInfo::Clone() const {
  StylusGarageEventInfo out;
  out.event = event;
  return out;
}

// static
bool StylusGarageEventInfo::Populate(
    const base::Value::Dict& dict, StylusGarageEventInfo& out) {
  out.event = StylusGarageEvent();
  const base::Value* event_value = dict.Find("event");
  if (event_value) {
    {
      const std::string* stylus_garage_event_as_string = (*event_value).GetIfString();
      if (!stylus_garage_event_as_string) {
        return false;
      }
      out.event = ParseStylusGarageEvent(*stylus_garage_event_as_string);
      if (out.event == StylusGarageEvent()) {
        return false;
      }
    }
    } else {
    out.event = StylusGarageEvent();
  }

  return true;
}

// static
bool StylusGarageEventInfo::Populate(
    const base::Value& value, StylusGarageEventInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<StylusGarageEventInfo> StylusGarageEventInfo::FromValue(const base::Value::Dict& value) {
  StylusGarageEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<StylusGarageEventInfo> StylusGarageEventInfo::FromValue(const base::Value& value) {
  StylusGarageEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict StylusGarageEventInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->event != StylusGarageEvent()) {
    to_value_result.Set("event", os_events::ToString(this->event));

  }

  return to_value_result;
}


const char* ToString(InputTouchButton enum_param) {
  switch (enum_param) {
    case InputTouchButton::kLeft:
      return "left";
    case InputTouchButton::kMiddle:
      return "middle";
    case InputTouchButton::kRight:
      return "right";
    case InputTouchButton::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

InputTouchButton ParseInputTouchButton(base::StringPiece enum_string) {
  if (enum_string == "left")
    return InputTouchButton::kLeft;
  if (enum_string == "middle")
    return InputTouchButton::kMiddle;
  if (enum_string == "right")
    return InputTouchButton::kRight;
  return InputTouchButton::kNone;
}

std::u16string GetInputTouchButtonParseError(base::StringPiece enum_string) {
  return u"expected \"left\" or \"middle\" or \"right\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(InputTouchButtonState enum_param) {
  switch (enum_param) {
    case InputTouchButtonState::kPressed:
      return "pressed";
    case InputTouchButtonState::kReleased:
      return "released";
    case InputTouchButtonState::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

InputTouchButtonState ParseInputTouchButtonState(base::StringPiece enum_string) {
  if (enum_string == "pressed")
    return InputTouchButtonState::kPressed;
  if (enum_string == "released")
    return InputTouchButtonState::kReleased;
  return InputTouchButtonState::kNone;
}

std::u16string GetInputTouchButtonStateParseError(base::StringPiece enum_string) {
  return u"expected \"pressed\" or \"released\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


TouchpadButtonEventInfo::TouchpadButtonEventInfo()
: button(),
state() {}

TouchpadButtonEventInfo::~TouchpadButtonEventInfo() = default;
TouchpadButtonEventInfo::TouchpadButtonEventInfo(TouchpadButtonEventInfo&& rhs) noexcept = default;
TouchpadButtonEventInfo& TouchpadButtonEventInfo::operator=(TouchpadButtonEventInfo&& rhs) noexcept = default;
TouchpadButtonEventInfo TouchpadButtonEventInfo::Clone() const {
  TouchpadButtonEventInfo out;
  out.button = button;
  out.state = state;
  return out;
}

// static
bool TouchpadButtonEventInfo::Populate(
    const base::Value::Dict& dict, TouchpadButtonEventInfo& out) {
  out.button = InputTouchButton();
  out.state = InputTouchButtonState();
  const base::Value* button_value = dict.Find("button");
  if (button_value) {
    {
      const std::string* input_touch_button_as_string = (*button_value).GetIfString();
      if (!input_touch_button_as_string) {
        return false;
      }
      out.button = ParseInputTouchButton(*input_touch_button_as_string);
      if (out.button == InputTouchButton()) {
        return false;
      }
    }
    } else {
    out.button = InputTouchButton();
  }

  const base::Value* state_value = dict.Find("state");
  if (state_value) {
    {
      const std::string* input_touch_button_state_as_string = (*state_value).GetIfString();
      if (!input_touch_button_state_as_string) {
        return false;
      }
      out.state = ParseInputTouchButtonState(*input_touch_button_state_as_string);
      if (out.state == InputTouchButtonState()) {
        return false;
      }
    }
    } else {
    out.state = InputTouchButtonState();
  }

  return true;
}

// static
bool TouchpadButtonEventInfo::Populate(
    const base::Value& value, TouchpadButtonEventInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<TouchpadButtonEventInfo> TouchpadButtonEventInfo::FromValue(const base::Value::Dict& value) {
  TouchpadButtonEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<TouchpadButtonEventInfo> TouchpadButtonEventInfo::FromValue(const base::Value& value) {
  TouchpadButtonEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict TouchpadButtonEventInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->button != InputTouchButton()) {
    to_value_result.Set("button", os_events::ToString(this->button));

  }
  if (this->state != InputTouchButtonState()) {
    to_value_result.Set("state", os_events::ToString(this->state));

  }

  return to_value_result;
}


TouchPointInfo::TouchPointInfo()
 {}

TouchPointInfo::~TouchPointInfo() = default;
TouchPointInfo::TouchPointInfo(TouchPointInfo&& rhs) noexcept = default;
TouchPointInfo& TouchPointInfo::operator=(TouchPointInfo&& rhs) noexcept = default;
TouchPointInfo TouchPointInfo::Clone() const {
  TouchPointInfo out;
  out.tracking_id = tracking_id;
  out.x = x;
  out.y = y;
  out.pressure = pressure;
  out.touch_major = touch_major;
  out.touch_minor = touch_minor;
  return out;
}

// static
bool TouchPointInfo::Populate(
    const base::Value::Dict& dict, TouchPointInfo& out) {
  const base::Value* tracking_id_value = dict.Find("trackingId");
  if (tracking_id_value) {
    {
      auto temp = (*tracking_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.tracking_id = std::nullopt;
        return false;
      }
      out.tracking_id = *temp;
    }
  }

  const base::Value* x_value = dict.Find("x");
  if (x_value) {
    {
      auto temp = (*x_value).GetIfInt();
      if (!temp.has_value()) {
        out.x = std::nullopt;
        return false;
      }
      out.x = *temp;
    }
  }

  const base::Value* y_value = dict.Find("y");
  if (y_value) {
    {
      auto temp = (*y_value).GetIfInt();
      if (!temp.has_value()) {
        out.y = std::nullopt;
        return false;
      }
      out.y = *temp;
    }
  }

  const base::Value* pressure_value = dict.Find("pressure");
  if (pressure_value) {
    {
      auto temp = (*pressure_value).GetIfInt();
      if (!temp.has_value()) {
        out.pressure = std::nullopt;
        return false;
      }
      out.pressure = *temp;
    }
  }

  const base::Value* touch_major_value = dict.Find("touchMajor");
  if (touch_major_value) {
    {
      auto temp = (*touch_major_value).GetIfInt();
      if (!temp.has_value()) {
        out.touch_major = std::nullopt;
        return false;
      }
      out.touch_major = *temp;
    }
  }

  const base::Value* touch_minor_value = dict.Find("touchMinor");
  if (touch_minor_value) {
    {
      auto temp = (*touch_minor_value).GetIfInt();
      if (!temp.has_value()) {
        out.touch_minor = std::nullopt;
        return false;
      }
      out.touch_minor = *temp;
    }
  }

  return true;
}

// static
bool TouchPointInfo::Populate(
    const base::Value& value, TouchPointInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<TouchPointInfo> TouchPointInfo::FromValue(const base::Value::Dict& value) {
  TouchPointInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<TouchPointInfo> TouchPointInfo::FromValue(const base::Value& value) {
  TouchPointInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict TouchPointInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->tracking_id) {
    to_value_result.Set("trackingId", *this->tracking_id);

  }
  if (this->x) {
    to_value_result.Set("x", *this->x);

  }
  if (this->y) {
    to_value_result.Set("y", *this->y);

  }
  if (this->pressure) {
    to_value_result.Set("pressure", *this->pressure);

  }
  if (this->touch_major) {
    to_value_result.Set("touchMajor", *this->touch_major);

  }
  if (this->touch_minor) {
    to_value_result.Set("touchMinor", *this->touch_minor);

  }

  return to_value_result;
}


TouchpadTouchEventInfo::TouchpadTouchEventInfo()
 {}

TouchpadTouchEventInfo::~TouchpadTouchEventInfo() = default;
TouchpadTouchEventInfo::TouchpadTouchEventInfo(TouchpadTouchEventInfo&& rhs) noexcept = default;
TouchpadTouchEventInfo& TouchpadTouchEventInfo::operator=(TouchpadTouchEventInfo&& rhs) noexcept = default;
TouchpadTouchEventInfo TouchpadTouchEventInfo::Clone() const {
  TouchpadTouchEventInfo out;
  out.touch_points.reserve(touch_points.size());
  for (const auto& element : touch_points) {
    json_schema_compiler::util::AppendToContainer(out.touch_points, element.Clone());
  }
  return out;
}

// static
bool TouchpadTouchEventInfo::Populate(
    const base::Value::Dict& dict, TouchpadTouchEventInfo& out) {
  const base::Value* touch_points_value = dict.Find("touchPoints");
  if (!touch_points_value) {
    return false;
  }
  {
    if (!(*touch_points_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*touch_points_value).GetList(), out.touch_points)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool TouchpadTouchEventInfo::Populate(
    const base::Value& value, TouchpadTouchEventInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<TouchpadTouchEventInfo> TouchpadTouchEventInfo::FromValue(const base::Value::Dict& value) {
  TouchpadTouchEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<TouchpadTouchEventInfo> TouchpadTouchEventInfo::FromValue(const base::Value& value) {
  TouchpadTouchEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict TouchpadTouchEventInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("touchPoints", json_schema_compiler::util::CreateValueFromArray(this->touch_points));


  return to_value_result;
}


TouchpadConnectedEventInfo::TouchpadConnectedEventInfo()
 {}

TouchpadConnectedEventInfo::~TouchpadConnectedEventInfo() = default;
TouchpadConnectedEventInfo::TouchpadConnectedEventInfo(TouchpadConnectedEventInfo&& rhs) noexcept = default;
TouchpadConnectedEventInfo& TouchpadConnectedEventInfo::operator=(TouchpadConnectedEventInfo&& rhs) noexcept = default;
TouchpadConnectedEventInfo TouchpadConnectedEventInfo::Clone() const {
  TouchpadConnectedEventInfo out;
  out.max_x = max_x;
  out.max_y = max_y;
  out.max_pressure = max_pressure;
  out.buttons = buttons;
  return out;
}

// static
bool TouchpadConnectedEventInfo::Populate(
    const base::Value::Dict& dict, TouchpadConnectedEventInfo& out) {
  const base::Value* max_x_value = dict.Find("maxX");
  if (max_x_value) {
    {
      auto temp = (*max_x_value).GetIfInt();
      if (!temp.has_value()) {
        out.max_x = std::nullopt;
        return false;
      }
      out.max_x = *temp;
    }
  }

  const base::Value* max_y_value = dict.Find("maxY");
  if (max_y_value) {
    {
      auto temp = (*max_y_value).GetIfInt();
      if (!temp.has_value()) {
        out.max_y = std::nullopt;
        return false;
      }
      out.max_y = *temp;
    }
  }

  const base::Value* max_pressure_value = dict.Find("maxPressure");
  if (max_pressure_value) {
    {
      auto temp = (*max_pressure_value).GetIfInt();
      if (!temp.has_value()) {
        out.max_pressure = std::nullopt;
        return false;
      }
      out.max_pressure = *temp;
    }
  }

  const base::Value* buttons_value = dict.Find("buttons");
  if (!buttons_value) {
    return false;
  }
  {
    if (!(*buttons_value).is_list()) {
      return false;
    }
    else {
      for (const auto& it : ((*buttons_value)).GetList()) {
        InputTouchButton tmp;
        const std::string* input_touch_button_as_string = (it).GetIfString();
        if (!input_touch_button_as_string) {
          return false;
        }
        tmp = ParseInputTouchButton(*input_touch_button_as_string);
        if (tmp == InputTouchButton()) {
          return false;
        }
        out.buttons.push_back(tmp);
      }
    }
  }

  return true;
}

// static
bool TouchpadConnectedEventInfo::Populate(
    const base::Value& value, TouchpadConnectedEventInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<TouchpadConnectedEventInfo> TouchpadConnectedEventInfo::FromValue(const base::Value::Dict& value) {
  TouchpadConnectedEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<TouchpadConnectedEventInfo> TouchpadConnectedEventInfo::FromValue(const base::Value& value) {
  TouchpadConnectedEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict TouchpadConnectedEventInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->max_x) {
    to_value_result.Set("maxX", *this->max_x);

  }
  if (this->max_y) {
    to_value_result.Set("maxY", *this->max_y);

  }
  if (this->max_pressure) {
    to_value_result.Set("maxPressure", *this->max_pressure);

  }
  {
    std::vector<std::string> buttons_list;
    for (const auto& it : (this->buttons)) {
      buttons_list.emplace_back(os_events::ToString(it));
    }
    to_value_result.Set("buttons", json_schema_compiler::util::CreateValueFromArray(buttons_list));
  }


  return to_value_result;
}


TouchscreenTouchEventInfo::TouchscreenTouchEventInfo()
 {}

TouchscreenTouchEventInfo::~TouchscreenTouchEventInfo() = default;
TouchscreenTouchEventInfo::TouchscreenTouchEventInfo(TouchscreenTouchEventInfo&& rhs) noexcept = default;
TouchscreenTouchEventInfo& TouchscreenTouchEventInfo::operator=(TouchscreenTouchEventInfo&& rhs) noexcept = default;
TouchscreenTouchEventInfo TouchscreenTouchEventInfo::Clone() const {
  TouchscreenTouchEventInfo out;
  out.touch_points.reserve(touch_points.size());
  for (const auto& element : touch_points) {
    json_schema_compiler::util::AppendToContainer(out.touch_points, element.Clone());
  }
  return out;
}

// static
bool TouchscreenTouchEventInfo::Populate(
    const base::Value::Dict& dict, TouchscreenTouchEventInfo& out) {
  const base::Value* touch_points_value = dict.Find("touchPoints");
  if (!touch_points_value) {
    return false;
  }
  {
    if (!(*touch_points_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*touch_points_value).GetList(), out.touch_points)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool TouchscreenTouchEventInfo::Populate(
    const base::Value& value, TouchscreenTouchEventInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<TouchscreenTouchEventInfo> TouchscreenTouchEventInfo::FromValue(const base::Value::Dict& value) {
  TouchscreenTouchEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<TouchscreenTouchEventInfo> TouchscreenTouchEventInfo::FromValue(const base::Value& value) {
  TouchscreenTouchEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict TouchscreenTouchEventInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("touchPoints", json_schema_compiler::util::CreateValueFromArray(this->touch_points));


  return to_value_result;
}


TouchscreenConnectedEventInfo::TouchscreenConnectedEventInfo()
 {}

TouchscreenConnectedEventInfo::~TouchscreenConnectedEventInfo() = default;
TouchscreenConnectedEventInfo::TouchscreenConnectedEventInfo(TouchscreenConnectedEventInfo&& rhs) noexcept = default;
TouchscreenConnectedEventInfo& TouchscreenConnectedEventInfo::operator=(TouchscreenConnectedEventInfo&& rhs) noexcept = default;
TouchscreenConnectedEventInfo TouchscreenConnectedEventInfo::Clone() const {
  TouchscreenConnectedEventInfo out;
  out.max_x = max_x;
  out.max_y = max_y;
  out.max_pressure = max_pressure;
  return out;
}

// static
bool TouchscreenConnectedEventInfo::Populate(
    const base::Value::Dict& dict, TouchscreenConnectedEventInfo& out) {
  const base::Value* max_x_value = dict.Find("maxX");
  if (max_x_value) {
    {
      auto temp = (*max_x_value).GetIfInt();
      if (!temp.has_value()) {
        out.max_x = std::nullopt;
        return false;
      }
      out.max_x = *temp;
    }
  }

  const base::Value* max_y_value = dict.Find("maxY");
  if (max_y_value) {
    {
      auto temp = (*max_y_value).GetIfInt();
      if (!temp.has_value()) {
        out.max_y = std::nullopt;
        return false;
      }
      out.max_y = *temp;
    }
  }

  const base::Value* max_pressure_value = dict.Find("maxPressure");
  if (max_pressure_value) {
    {
      auto temp = (*max_pressure_value).GetIfInt();
      if (!temp.has_value()) {
        out.max_pressure = std::nullopt;
        return false;
      }
      out.max_pressure = *temp;
    }
  }

  return true;
}

// static
bool TouchscreenConnectedEventInfo::Populate(
    const base::Value& value, TouchscreenConnectedEventInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<TouchscreenConnectedEventInfo> TouchscreenConnectedEventInfo::FromValue(const base::Value::Dict& value) {
  TouchscreenConnectedEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<TouchscreenConnectedEventInfo> TouchscreenConnectedEventInfo::FromValue(const base::Value& value) {
  TouchscreenConnectedEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict TouchscreenConnectedEventInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->max_x) {
    to_value_result.Set("maxX", *this->max_x);

  }
  if (this->max_y) {
    to_value_result.Set("maxY", *this->max_y);

  }
  if (this->max_pressure) {
    to_value_result.Set("maxPressure", *this->max_pressure);

  }

  return to_value_result;
}


StylusTouchPointInfo::StylusTouchPointInfo()
 {}

StylusTouchPointInfo::~StylusTouchPointInfo() = default;
StylusTouchPointInfo::StylusTouchPointInfo(StylusTouchPointInfo&& rhs) noexcept = default;
StylusTouchPointInfo& StylusTouchPointInfo::operator=(StylusTouchPointInfo&& rhs) noexcept = default;
StylusTouchPointInfo StylusTouchPointInfo::Clone() const {
  StylusTouchPointInfo out;
  out.x = x;
  out.y = y;
  out.pressure = pressure;
  return out;
}

// static
bool StylusTouchPointInfo::Populate(
    const base::Value::Dict& dict, StylusTouchPointInfo& out) {
  const base::Value* x_value = dict.Find("x");
  if (x_value) {
    {
      auto temp = (*x_value).GetIfInt();
      if (!temp.has_value()) {
        out.x = std::nullopt;
        return false;
      }
      out.x = *temp;
    }
  }

  const base::Value* y_value = dict.Find("y");
  if (y_value) {
    {
      auto temp = (*y_value).GetIfInt();
      if (!temp.has_value()) {
        out.y = std::nullopt;
        return false;
      }
      out.y = *temp;
    }
  }

  const base::Value* pressure_value = dict.Find("pressure");
  if (pressure_value) {
    {
      auto temp = (*pressure_value).GetIfInt();
      if (!temp.has_value()) {
        out.pressure = std::nullopt;
        return false;
      }
      out.pressure = *temp;
    }
  }

  return true;
}

// static
bool StylusTouchPointInfo::Populate(
    const base::Value& value, StylusTouchPointInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<StylusTouchPointInfo> StylusTouchPointInfo::FromValue(const base::Value::Dict& value) {
  StylusTouchPointInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<StylusTouchPointInfo> StylusTouchPointInfo::FromValue(const base::Value& value) {
  StylusTouchPointInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict StylusTouchPointInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->x) {
    to_value_result.Set("x", *this->x);

  }
  if (this->y) {
    to_value_result.Set("y", *this->y);

  }
  if (this->pressure) {
    to_value_result.Set("pressure", *this->pressure);

  }

  return to_value_result;
}


StylusTouchEventInfo::StylusTouchEventInfo()
 {}

StylusTouchEventInfo::~StylusTouchEventInfo() = default;
StylusTouchEventInfo::StylusTouchEventInfo(StylusTouchEventInfo&& rhs) noexcept = default;
StylusTouchEventInfo& StylusTouchEventInfo::operator=(StylusTouchEventInfo&& rhs) noexcept = default;
StylusTouchEventInfo StylusTouchEventInfo::Clone() const {
  StylusTouchEventInfo out;
  if (touch_point) {
    out.touch_point = touch_point->Clone();
  }
  return out;
}

// static
bool StylusTouchEventInfo::Populate(
    const base::Value::Dict& dict, StylusTouchEventInfo& out) {
  const base::Value* touch_point_value = dict.Find("touch_point");
  if (touch_point_value) {
    {
      if (!(*touch_point_value).is_dict()) {
        return false;
      }
      else {
        StylusTouchPointInfo temp;
        if (!StylusTouchPointInfo::Populate((*touch_point_value).GetDict(), temp))
          return false;
        out.touch_point = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool StylusTouchEventInfo::Populate(
    const base::Value& value, StylusTouchEventInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<StylusTouchEventInfo> StylusTouchEventInfo::FromValue(const base::Value::Dict& value) {
  StylusTouchEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<StylusTouchEventInfo> StylusTouchEventInfo::FromValue(const base::Value& value) {
  StylusTouchEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict StylusTouchEventInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->touch_point) {
    to_value_result.Set("touch_point", (this->touch_point)->ToValue());

  }

  return to_value_result;
}


StylusConnectedEventInfo::StylusConnectedEventInfo()
 {}

StylusConnectedEventInfo::~StylusConnectedEventInfo() = default;
StylusConnectedEventInfo::StylusConnectedEventInfo(StylusConnectedEventInfo&& rhs) noexcept = default;
StylusConnectedEventInfo& StylusConnectedEventInfo::operator=(StylusConnectedEventInfo&& rhs) noexcept = default;
StylusConnectedEventInfo StylusConnectedEventInfo::Clone() const {
  StylusConnectedEventInfo out;
  out.max_x = max_x;
  out.max_y = max_y;
  out.max_pressure = max_pressure;
  return out;
}

// static
bool StylusConnectedEventInfo::Populate(
    const base::Value::Dict& dict, StylusConnectedEventInfo& out) {
  const base::Value* max_x_value = dict.Find("max_x");
  if (max_x_value) {
    {
      auto temp = (*max_x_value).GetIfInt();
      if (!temp.has_value()) {
        out.max_x = std::nullopt;
        return false;
      }
      out.max_x = *temp;
    }
  }

  const base::Value* max_y_value = dict.Find("max_y");
  if (max_y_value) {
    {
      auto temp = (*max_y_value).GetIfInt();
      if (!temp.has_value()) {
        out.max_y = std::nullopt;
        return false;
      }
      out.max_y = *temp;
    }
  }

  const base::Value* max_pressure_value = dict.Find("max_pressure");
  if (max_pressure_value) {
    {
      auto temp = (*max_pressure_value).GetIfInt();
      if (!temp.has_value()) {
        out.max_pressure = std::nullopt;
        return false;
      }
      out.max_pressure = *temp;
    }
  }

  return true;
}

// static
bool StylusConnectedEventInfo::Populate(
    const base::Value& value, StylusConnectedEventInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<StylusConnectedEventInfo> StylusConnectedEventInfo::FromValue(const base::Value::Dict& value) {
  StylusConnectedEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<StylusConnectedEventInfo> StylusConnectedEventInfo::FromValue(const base::Value& value) {
  StylusConnectedEventInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict StylusConnectedEventInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->max_x) {
    to_value_result.Set("max_x", *this->max_x);

  }
  if (this->max_y) {
    to_value_result.Set("max_y", *this->max_y);

  }
  if (this->max_pressure) {
    to_value_result.Set("max_pressure", *this->max_pressure);

  }

  return to_value_result;
}



//
// Functions
//

namespace IsEventSupported {

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
    const base::Value& category_value = args[0];
    {
      const std::string* event_category_as_string = category_value.GetIfString();
      if (!event_category_as_string) {
        return std::nullopt;
      }
      params.category = ParseEventCategory(*event_category_as_string);
      if (params.category == EventCategory()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const EventSupportStatusInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}
}  // namespace IsEventSupported

namespace StartCapturingEvents {

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
    const base::Value& category_value = args[0];
    {
      const std::string* event_category_as_string = category_value.GetIfString();
      if (!event_category_as_string) {
        return std::nullopt;
      }
      params.category = ParseEventCategory(*event_category_as_string);
      if (params.category == EventCategory()) {
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
}  // namespace StartCapturingEvents

namespace StopCapturingEvents {

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
    const base::Value& category_value = args[0];
    {
      const std::string* event_category_as_string = category_value.GetIfString();
      if (!event_category_as_string) {
        return std::nullopt;
      }
      params.category = ParseEventCategory(*event_category_as_string);
      if (params.category == EventCategory()) {
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
}  // namespace StopCapturingEvents

//
// Events
//

namespace OnAudioJackEvent {

const char kEventName[] = "os.events.onAudioJackEvent";

base::Value::List Create(const AudioJackEventInfo& event_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event_info).ToValue());

  return create_results;
}

}  // namespace OnAudioJackEvent

namespace OnKeyboardDiagnosticEvent {

const char kEventName[] = "os.events.onKeyboardDiagnosticEvent";

base::Value::List Create(const KeyboardDiagnosticEventInfo& event_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event_info).ToValue());

  return create_results;
}

}  // namespace OnKeyboardDiagnosticEvent

namespace OnLidEvent {

const char kEventName[] = "os.events.onLidEvent";

base::Value::List Create(const LidEventInfo& event_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event_info).ToValue());

  return create_results;
}

}  // namespace OnLidEvent

namespace OnUsbEvent {

const char kEventName[] = "os.events.onUsbEvent";

base::Value::List Create(const UsbEventInfo& event_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event_info).ToValue());

  return create_results;
}

}  // namespace OnUsbEvent

namespace OnExternalDisplayEvent {

const char kEventName[] = "os.events.onExternalDisplayEvent";

base::Value::List Create(const ExternalDisplayEventInfo& event_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event_info).ToValue());

  return create_results;
}

}  // namespace OnExternalDisplayEvent

namespace OnSdCardEvent {

const char kEventName[] = "os.events.onSdCardEvent";

base::Value::List Create(const SdCardEventInfo& event_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event_info).ToValue());

  return create_results;
}

}  // namespace OnSdCardEvent

namespace OnPowerEvent {

const char kEventName[] = "os.events.onPowerEvent";

base::Value::List Create(const PowerEventInfo& event_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event_info).ToValue());

  return create_results;
}

}  // namespace OnPowerEvent

namespace OnStylusGarageEvent {

const char kEventName[] = "os.events.onStylusGarageEvent";

base::Value::List Create(const StylusGarageEventInfo& event_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event_info).ToValue());

  return create_results;
}

}  // namespace OnStylusGarageEvent

namespace OnTouchpadButtonEvent {

const char kEventName[] = "os.events.onTouchpadButtonEvent";

base::Value::List Create(const TouchpadButtonEventInfo& event_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event_info).ToValue());

  return create_results;
}

}  // namespace OnTouchpadButtonEvent

namespace OnTouchpadTouchEvent {

const char kEventName[] = "os.events.onTouchpadTouchEvent";

base::Value::List Create(const TouchpadTouchEventInfo& event_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event_info).ToValue());

  return create_results;
}

}  // namespace OnTouchpadTouchEvent

namespace OnTouchpadConnectedEvent {

const char kEventName[] = "os.events.onTouchpadConnectedEvent";

base::Value::List Create(const TouchpadConnectedEventInfo& event_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event_info).ToValue());

  return create_results;
}

}  // namespace OnTouchpadConnectedEvent

namespace OnTouchscreenTouchEvent {

const char kEventName[] = "os.events.onTouchscreenTouchEvent";

base::Value::List Create(const TouchscreenTouchEventInfo& event_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event_info).ToValue());

  return create_results;
}

}  // namespace OnTouchscreenTouchEvent

namespace OnTouchscreenConnectedEvent {

const char kEventName[] = "os.events.onTouchscreenConnectedEvent";

base::Value::List Create(const TouchscreenConnectedEventInfo& event_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event_info).ToValue());

  return create_results;
}

}  // namespace OnTouchscreenConnectedEvent

namespace OnStylusTouchEvent {

const char kEventName[] = "os.events.onStylusTouchEvent";

base::Value::List Create(const StylusTouchEventInfo& event_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event_info).ToValue());

  return create_results;
}

}  // namespace OnStylusTouchEvent

namespace OnStylusConnectedEvent {

const char kEventName[] = "os.events.onStylusConnectedEvent";

base::Value::List Create(const StylusConnectedEventInfo& event_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event_info).ToValue());

  return create_results;
}

}  // namespace OnStylusConnectedEvent

}  // namespace os_events
}  // namespace api
}  // namespace chromeos

