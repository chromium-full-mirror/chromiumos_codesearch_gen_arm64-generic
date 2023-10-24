// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/accessibility_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/accessibility_private.h"

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
namespace accessibility_private {
//
// Properties
//

const int IS_DEFAULT_EVENT_SOURCE_TOUCH = 0;

//
// Types
//

AlertInfo::AlertInfo()
 {}

AlertInfo::~AlertInfo() = default;
AlertInfo::AlertInfo(AlertInfo&& rhs) = default;
AlertInfo& AlertInfo::operator=(AlertInfo&& rhs) = default;
AlertInfo AlertInfo::Clone() const {
  AlertInfo out;
  out.message = message;
  return out;
}

// static
bool AlertInfo::Populate(
    const base::Value::Dict& dict, AlertInfo& out) {
  const base::Value* message_value = dict.Find("message");
  if (!message_value) {
    return false;
  }
  {
    auto* temp = (*message_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.message = *temp;
  }

  return true;
}

// static
bool AlertInfo::Populate(
    const base::Value& value, AlertInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<AlertInfo> AlertInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<AlertInfo>();
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
absl::optional<AlertInfo> AlertInfo::FromValue(const base::Value::Dict& value) {
  AlertInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<AlertInfo> AlertInfo::FromValue(const base::Value& value) {
  AlertInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict AlertInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("message", this->message);


  return to_value_result;
}


ScreenRect::ScreenRect()
: left(0),
top(0),
width(0),
height(0) {}

ScreenRect::~ScreenRect() = default;
ScreenRect::ScreenRect(ScreenRect&& rhs) = default;
ScreenRect& ScreenRect::operator=(ScreenRect&& rhs) = default;
ScreenRect ScreenRect::Clone() const {
  ScreenRect out;
  out.left = left;
  out.top = top;
  out.width = width;
  out.height = height;
  return out;
}

// static
bool ScreenRect::Populate(
    const base::Value::Dict& dict, ScreenRect& out) {
  const base::Value* left_value = dict.Find("left");
  if (!left_value) {
    return false;
  }
  {
    auto temp = (*left_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.left = *temp;
  }

  const base::Value* top_value = dict.Find("top");
  if (!top_value) {
    return false;
  }
  {
    auto temp = (*top_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.top = *temp;
  }

  const base::Value* width_value = dict.Find("width");
  if (!width_value) {
    return false;
  }
  {
    auto temp = (*width_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.width = *temp;
  }

  const base::Value* height_value = dict.Find("height");
  if (!height_value) {
    return false;
  }
  {
    auto temp = (*height_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.height = *temp;
  }

  return true;
}

// static
bool ScreenRect::Populate(
    const base::Value& value, ScreenRect& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ScreenRect> ScreenRect::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ScreenRect>();
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
absl::optional<ScreenRect> ScreenRect::FromValue(const base::Value::Dict& value) {
  ScreenRect out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ScreenRect> ScreenRect::FromValue(const base::Value& value) {
  ScreenRect out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ScreenRect::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("left", this->left);

  to_value_result.Set("top", this->top);

  to_value_result.Set("width", this->width);

  to_value_result.Set("height", this->height);


  return to_value_result;
}


ScreenPoint::ScreenPoint()
: x(0),
y(0) {}

ScreenPoint::~ScreenPoint() = default;
ScreenPoint::ScreenPoint(ScreenPoint&& rhs) = default;
ScreenPoint& ScreenPoint::operator=(ScreenPoint&& rhs) = default;
ScreenPoint ScreenPoint::Clone() const {
  ScreenPoint out;
  out.x = x;
  out.y = y;
  return out;
}

// static
bool ScreenPoint::Populate(
    const base::Value::Dict& dict, ScreenPoint& out) {
  const base::Value* x_value = dict.Find("x");
  if (!x_value) {
    return false;
  }
  {
    auto temp = (*x_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.x = *temp;
  }

  const base::Value* y_value = dict.Find("y");
  if (!y_value) {
    return false;
  }
  {
    auto temp = (*y_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.y = *temp;
  }

  return true;
}

// static
bool ScreenPoint::Populate(
    const base::Value& value, ScreenPoint& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ScreenPoint> ScreenPoint::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ScreenPoint>();
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
absl::optional<ScreenPoint> ScreenPoint::FromValue(const base::Value::Dict& value) {
  ScreenPoint out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ScreenPoint> ScreenPoint::FromValue(const base::Value& value) {
  ScreenPoint out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ScreenPoint::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("x", this->x);

  to_value_result.Set("y", this->y);


  return to_value_result;
}


const char* ToString(Gesture enum_param) {
  switch (enum_param) {
    case GESTURE_CLICK:
      return "click";
    case GESTURE_SWIPELEFT1:
      return "swipeLeft1";
    case GESTURE_SWIPEUP1:
      return "swipeUp1";
    case GESTURE_SWIPERIGHT1:
      return "swipeRight1";
    case GESTURE_SWIPEDOWN1:
      return "swipeDown1";
    case GESTURE_SWIPELEFT2:
      return "swipeLeft2";
    case GESTURE_SWIPEUP2:
      return "swipeUp2";
    case GESTURE_SWIPERIGHT2:
      return "swipeRight2";
    case GESTURE_SWIPEDOWN2:
      return "swipeDown2";
    case GESTURE_SWIPELEFT3:
      return "swipeLeft3";
    case GESTURE_SWIPEUP3:
      return "swipeUp3";
    case GESTURE_SWIPERIGHT3:
      return "swipeRight3";
    case GESTURE_SWIPEDOWN3:
      return "swipeDown3";
    case GESTURE_SWIPELEFT4:
      return "swipeLeft4";
    case GESTURE_SWIPEUP4:
      return "swipeUp4";
    case GESTURE_SWIPERIGHT4:
      return "swipeRight4";
    case GESTURE_SWIPEDOWN4:
      return "swipeDown4";
    case GESTURE_TAP2:
      return "tap2";
    case GESTURE_TAP3:
      return "tap3";
    case GESTURE_TAP4:
      return "tap4";
    case GESTURE_TOUCHEXPLORE:
      return "touchExplore";
    case GESTURE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

Gesture ParseGesture(base::StringPiece enum_string) {
  if (enum_string == "click")
    return GESTURE_CLICK;
  if (enum_string == "swipeLeft1")
    return GESTURE_SWIPELEFT1;
  if (enum_string == "swipeUp1")
    return GESTURE_SWIPEUP1;
  if (enum_string == "swipeRight1")
    return GESTURE_SWIPERIGHT1;
  if (enum_string == "swipeDown1")
    return GESTURE_SWIPEDOWN1;
  if (enum_string == "swipeLeft2")
    return GESTURE_SWIPELEFT2;
  if (enum_string == "swipeUp2")
    return GESTURE_SWIPEUP2;
  if (enum_string == "swipeRight2")
    return GESTURE_SWIPERIGHT2;
  if (enum_string == "swipeDown2")
    return GESTURE_SWIPEDOWN2;
  if (enum_string == "swipeLeft3")
    return GESTURE_SWIPELEFT3;
  if (enum_string == "swipeUp3")
    return GESTURE_SWIPEUP3;
  if (enum_string == "swipeRight3")
    return GESTURE_SWIPERIGHT3;
  if (enum_string == "swipeDown3")
    return GESTURE_SWIPEDOWN3;
  if (enum_string == "swipeLeft4")
    return GESTURE_SWIPELEFT4;
  if (enum_string == "swipeUp4")
    return GESTURE_SWIPEUP4;
  if (enum_string == "swipeRight4")
    return GESTURE_SWIPERIGHT4;
  if (enum_string == "swipeDown4")
    return GESTURE_SWIPEDOWN4;
  if (enum_string == "tap2")
    return GESTURE_TAP2;
  if (enum_string == "tap3")
    return GESTURE_TAP3;
  if (enum_string == "tap4")
    return GESTURE_TAP4;
  if (enum_string == "touchExplore")
    return GESTURE_TOUCHEXPLORE;
  return GESTURE_NONE;
}

std::u16string GetGestureParseError(base::StringPiece enum_string) {
  return u"expected \"click\" or \"swipeLeft1\" or \"swipeUp1\" or \"swipeRight1\" or \"swipeDown1\" or \"swipeLeft2\" or \"swipeUp2\" or \"swipeRight2\" or \"swipeDown2\" or \"swipeLeft3\" or \"swipeUp3\" or \"swipeRight3\" or \"swipeDown3\" or \"swipeLeft4\" or \"swipeUp4\" or \"swipeRight4\" or \"swipeDown4\" or \"tap2\" or \"tap3\" or \"tap4\" or \"touchExplore\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(MagnifierCommand enum_param) {
  switch (enum_param) {
    case MAGNIFIER_COMMAND_MOVESTOP:
      return "moveStop";
    case MAGNIFIER_COMMAND_MOVEUP:
      return "moveUp";
    case MAGNIFIER_COMMAND_MOVEDOWN:
      return "moveDown";
    case MAGNIFIER_COMMAND_MOVELEFT:
      return "moveLeft";
    case MAGNIFIER_COMMAND_MOVERIGHT:
      return "moveRight";
    case MAGNIFIER_COMMAND_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

MagnifierCommand ParseMagnifierCommand(base::StringPiece enum_string) {
  if (enum_string == "moveStop")
    return MAGNIFIER_COMMAND_MOVESTOP;
  if (enum_string == "moveUp")
    return MAGNIFIER_COMMAND_MOVEUP;
  if (enum_string == "moveDown")
    return MAGNIFIER_COMMAND_MOVEDOWN;
  if (enum_string == "moveLeft")
    return MAGNIFIER_COMMAND_MOVELEFT;
  if (enum_string == "moveRight")
    return MAGNIFIER_COMMAND_MOVERIGHT;
  return MAGNIFIER_COMMAND_NONE;
}

std::u16string GetMagnifierCommandParseError(base::StringPiece enum_string) {
  return u"expected \"moveStop\" or \"moveUp\" or \"moveDown\" or \"moveLeft\" or \"moveRight\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SwitchAccessCommand enum_param) {
  switch (enum_param) {
    case SWITCH_ACCESS_COMMAND_SELECT:
      return "select";
    case SWITCH_ACCESS_COMMAND_NEXT:
      return "next";
    case SWITCH_ACCESS_COMMAND_PREVIOUS:
      return "previous";
    case SWITCH_ACCESS_COMMAND_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

SwitchAccessCommand ParseSwitchAccessCommand(base::StringPiece enum_string) {
  if (enum_string == "select")
    return SWITCH_ACCESS_COMMAND_SELECT;
  if (enum_string == "next")
    return SWITCH_ACCESS_COMMAND_NEXT;
  if (enum_string == "previous")
    return SWITCH_ACCESS_COMMAND_PREVIOUS;
  return SWITCH_ACCESS_COMMAND_NONE;
}

std::u16string GetSwitchAccessCommandParseError(base::StringPiece enum_string) {
  return u"expected \"select\" or \"next\" or \"previous\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(PointScanState enum_param) {
  switch (enum_param) {
    case POINT_SCAN_STATE_START:
      return "start";
    case POINT_SCAN_STATE_STOP:
      return "stop";
    case POINT_SCAN_STATE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

PointScanState ParsePointScanState(base::StringPiece enum_string) {
  if (enum_string == "start")
    return POINT_SCAN_STATE_START;
  if (enum_string == "stop")
    return POINT_SCAN_STATE_STOP;
  return POINT_SCAN_STATE_NONE;
}

std::u16string GetPointScanStateParseError(base::StringPiece enum_string) {
  return u"expected \"start\" or \"stop\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SwitchAccessBubble enum_param) {
  switch (enum_param) {
    case SWITCH_ACCESS_BUBBLE_BACKBUTTON:
      return "backButton";
    case SWITCH_ACCESS_BUBBLE_MENU:
      return "menu";
    case SWITCH_ACCESS_BUBBLE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

SwitchAccessBubble ParseSwitchAccessBubble(base::StringPiece enum_string) {
  if (enum_string == "backButton")
    return SWITCH_ACCESS_BUBBLE_BACKBUTTON;
  if (enum_string == "menu")
    return SWITCH_ACCESS_BUBBLE_MENU;
  return SWITCH_ACCESS_BUBBLE_NONE;
}

std::u16string GetSwitchAccessBubbleParseError(base::StringPiece enum_string) {
  return u"expected \"backButton\" or \"menu\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


PointScanPoint::PointScanPoint()
: x(0.0),
y(0.0) {}

PointScanPoint::~PointScanPoint() = default;
PointScanPoint::PointScanPoint(PointScanPoint&& rhs) = default;
PointScanPoint& PointScanPoint::operator=(PointScanPoint&& rhs) = default;
PointScanPoint PointScanPoint::Clone() const {
  PointScanPoint out;
  out.x = x;
  out.y = y;
  return out;
}

// static
bool PointScanPoint::Populate(
    const base::Value::Dict& dict, PointScanPoint& out) {
  const base::Value* x_value = dict.Find("x");
  if (!x_value) {
    return false;
  }
  {
    auto temp = (*x_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.x = *temp;
  }

  const base::Value* y_value = dict.Find("y");
  if (!y_value) {
    return false;
  }
  {
    auto temp = (*y_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.y = *temp;
  }

  return true;
}

// static
bool PointScanPoint::Populate(
    const base::Value& value, PointScanPoint& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<PointScanPoint> PointScanPoint::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<PointScanPoint>();
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
absl::optional<PointScanPoint> PointScanPoint::FromValue(const base::Value::Dict& value) {
  PointScanPoint out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<PointScanPoint> PointScanPoint::FromValue(const base::Value& value) {
  PointScanPoint out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict PointScanPoint::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("x", this->x);

  to_value_result.Set("y", this->y);


  return to_value_result;
}


const char* ToString(SwitchAccessMenuAction enum_param) {
  switch (enum_param) {
    case SWITCH_ACCESS_MENU_ACTION_COPY:
      return "copy";
    case SWITCH_ACCESS_MENU_ACTION_CUT:
      return "cut";
    case SWITCH_ACCESS_MENU_ACTION_DECREMENT:
      return "decrement";
    case SWITCH_ACCESS_MENU_ACTION_DICTATION:
      return "dictation";
    case SWITCH_ACCESS_MENU_ACTION_ENDTEXTSELECTION:
      return "endTextSelection";
    case SWITCH_ACCESS_MENU_ACTION_INCREMENT:
      return "increment";
    case SWITCH_ACCESS_MENU_ACTION_ITEMSCAN:
      return "itemScan";
    case SWITCH_ACCESS_MENU_ACTION_JUMPTOBEGINNINGOFTEXT:
      return "jumpToBeginningOfText";
    case SWITCH_ACCESS_MENU_ACTION_JUMPTOENDOFTEXT:
      return "jumpToEndOfText";
    case SWITCH_ACCESS_MENU_ACTION_KEYBOARD:
      return "keyboard";
    case SWITCH_ACCESS_MENU_ACTION_LEFTCLICK:
      return "leftClick";
    case SWITCH_ACCESS_MENU_ACTION_MOVEBACKWARDONECHAROFTEXT:
      return "moveBackwardOneCharOfText";
    case SWITCH_ACCESS_MENU_ACTION_MOVEBACKWARDONEWORDOFTEXT:
      return "moveBackwardOneWordOfText";
    case SWITCH_ACCESS_MENU_ACTION_MOVECURSOR:
      return "moveCursor";
    case SWITCH_ACCESS_MENU_ACTION_MOVEDOWNONELINEOFTEXT:
      return "moveDownOneLineOfText";
    case SWITCH_ACCESS_MENU_ACTION_MOVEFORWARDONECHAROFTEXT:
      return "moveForwardOneCharOfText";
    case SWITCH_ACCESS_MENU_ACTION_MOVEFORWARDONEWORDOFTEXT:
      return "moveForwardOneWordOfText";
    case SWITCH_ACCESS_MENU_ACTION_MOVEUPONELINEOFTEXT:
      return "moveUpOneLineOfText";
    case SWITCH_ACCESS_MENU_ACTION_PASTE:
      return "paste";
    case SWITCH_ACCESS_MENU_ACTION_POINTSCAN:
      return "pointScan";
    case SWITCH_ACCESS_MENU_ACTION_RIGHTCLICK:
      return "rightClick";
    case SWITCH_ACCESS_MENU_ACTION_SCROLLDOWN:
      return "scrollDown";
    case SWITCH_ACCESS_MENU_ACTION_SCROLLLEFT:
      return "scrollLeft";
    case SWITCH_ACCESS_MENU_ACTION_SCROLLRIGHT:
      return "scrollRight";
    case SWITCH_ACCESS_MENU_ACTION_SCROLLUP:
      return "scrollUp";
    case SWITCH_ACCESS_MENU_ACTION_SELECT:
      return "select";
    case SWITCH_ACCESS_MENU_ACTION_SETTINGS:
      return "settings";
    case SWITCH_ACCESS_MENU_ACTION_STARTTEXTSELECTION:
      return "startTextSelection";
    case SWITCH_ACCESS_MENU_ACTION_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

SwitchAccessMenuAction ParseSwitchAccessMenuAction(base::StringPiece enum_string) {
  if (enum_string == "copy")
    return SWITCH_ACCESS_MENU_ACTION_COPY;
  if (enum_string == "cut")
    return SWITCH_ACCESS_MENU_ACTION_CUT;
  if (enum_string == "decrement")
    return SWITCH_ACCESS_MENU_ACTION_DECREMENT;
  if (enum_string == "dictation")
    return SWITCH_ACCESS_MENU_ACTION_DICTATION;
  if (enum_string == "endTextSelection")
    return SWITCH_ACCESS_MENU_ACTION_ENDTEXTSELECTION;
  if (enum_string == "increment")
    return SWITCH_ACCESS_MENU_ACTION_INCREMENT;
  if (enum_string == "itemScan")
    return SWITCH_ACCESS_MENU_ACTION_ITEMSCAN;
  if (enum_string == "jumpToBeginningOfText")
    return SWITCH_ACCESS_MENU_ACTION_JUMPTOBEGINNINGOFTEXT;
  if (enum_string == "jumpToEndOfText")
    return SWITCH_ACCESS_MENU_ACTION_JUMPTOENDOFTEXT;
  if (enum_string == "keyboard")
    return SWITCH_ACCESS_MENU_ACTION_KEYBOARD;
  if (enum_string == "leftClick")
    return SWITCH_ACCESS_MENU_ACTION_LEFTCLICK;
  if (enum_string == "moveBackwardOneCharOfText")
    return SWITCH_ACCESS_MENU_ACTION_MOVEBACKWARDONECHAROFTEXT;
  if (enum_string == "moveBackwardOneWordOfText")
    return SWITCH_ACCESS_MENU_ACTION_MOVEBACKWARDONEWORDOFTEXT;
  if (enum_string == "moveCursor")
    return SWITCH_ACCESS_MENU_ACTION_MOVECURSOR;
  if (enum_string == "moveDownOneLineOfText")
    return SWITCH_ACCESS_MENU_ACTION_MOVEDOWNONELINEOFTEXT;
  if (enum_string == "moveForwardOneCharOfText")
    return SWITCH_ACCESS_MENU_ACTION_MOVEFORWARDONECHAROFTEXT;
  if (enum_string == "moveForwardOneWordOfText")
    return SWITCH_ACCESS_MENU_ACTION_MOVEFORWARDONEWORDOFTEXT;
  if (enum_string == "moveUpOneLineOfText")
    return SWITCH_ACCESS_MENU_ACTION_MOVEUPONELINEOFTEXT;
  if (enum_string == "paste")
    return SWITCH_ACCESS_MENU_ACTION_PASTE;
  if (enum_string == "pointScan")
    return SWITCH_ACCESS_MENU_ACTION_POINTSCAN;
  if (enum_string == "rightClick")
    return SWITCH_ACCESS_MENU_ACTION_RIGHTCLICK;
  if (enum_string == "scrollDown")
    return SWITCH_ACCESS_MENU_ACTION_SCROLLDOWN;
  if (enum_string == "scrollLeft")
    return SWITCH_ACCESS_MENU_ACTION_SCROLLLEFT;
  if (enum_string == "scrollRight")
    return SWITCH_ACCESS_MENU_ACTION_SCROLLRIGHT;
  if (enum_string == "scrollUp")
    return SWITCH_ACCESS_MENU_ACTION_SCROLLUP;
  if (enum_string == "select")
    return SWITCH_ACCESS_MENU_ACTION_SELECT;
  if (enum_string == "settings")
    return SWITCH_ACCESS_MENU_ACTION_SETTINGS;
  if (enum_string == "startTextSelection")
    return SWITCH_ACCESS_MENU_ACTION_STARTTEXTSELECTION;
  return SWITCH_ACCESS_MENU_ACTION_NONE;
}

std::u16string GetSwitchAccessMenuActionParseError(base::StringPiece enum_string) {
  return u"expected \"copy\" or \"cut\" or \"decrement\" or \"dictation\" or \"endTextSelection\" or \"increment\" or \"itemScan\" or \"jumpToBeginningOfText\" or \"jumpToEndOfText\" or \"keyboard\" or \"leftClick\" or \"moveBackwardOneCharOfText\" or \"moveBackwardOneWordOfText\" or \"moveCursor\" or \"moveDownOneLineOfText\" or \"moveForwardOneCharOfText\" or \"moveForwardOneWordOfText\" or \"moveUpOneLineOfText\" or \"paste\" or \"pointScan\" or \"rightClick\" or \"scrollDown\" or \"scrollLeft\" or \"scrollRight\" or \"scrollUp\" or \"select\" or \"settings\" or \"startTextSelection\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SyntheticKeyboardEventType enum_param) {
  switch (enum_param) {
    case SYNTHETIC_KEYBOARD_EVENT_TYPE_KEYUP:
      return "keyup";
    case SYNTHETIC_KEYBOARD_EVENT_TYPE_KEYDOWN:
      return "keydown";
    case SYNTHETIC_KEYBOARD_EVENT_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

SyntheticKeyboardEventType ParseSyntheticKeyboardEventType(base::StringPiece enum_string) {
  if (enum_string == "keyup")
    return SYNTHETIC_KEYBOARD_EVENT_TYPE_KEYUP;
  if (enum_string == "keydown")
    return SYNTHETIC_KEYBOARD_EVENT_TYPE_KEYDOWN;
  return SYNTHETIC_KEYBOARD_EVENT_TYPE_NONE;
}

std::u16string GetSyntheticKeyboardEventTypeParseError(base::StringPiece enum_string) {
  return u"expected \"keyup\" or \"keydown\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


SyntheticKeyboardModifiers::SyntheticKeyboardModifiers()
 {}

SyntheticKeyboardModifiers::~SyntheticKeyboardModifiers() = default;
SyntheticKeyboardModifiers::SyntheticKeyboardModifiers(SyntheticKeyboardModifiers&& rhs) = default;
SyntheticKeyboardModifiers& SyntheticKeyboardModifiers::operator=(SyntheticKeyboardModifiers&& rhs) = default;
SyntheticKeyboardModifiers SyntheticKeyboardModifiers::Clone() const {
  SyntheticKeyboardModifiers out;
  out.ctrl = ctrl;
  out.alt = alt;
  out.search = search;
  out.shift = shift;
  return out;
}

// static
bool SyntheticKeyboardModifiers::Populate(
    const base::Value::Dict& dict, SyntheticKeyboardModifiers& out) {
  const base::Value* ctrl_value = dict.Find("ctrl");
  if (ctrl_value) {
    {
      auto temp = (*ctrl_value).GetIfBool();
      if (!temp.has_value()) {
        out.ctrl = absl::nullopt;
        return false;
      }
      out.ctrl = *temp;
    }
  }

  const base::Value* alt_value = dict.Find("alt");
  if (alt_value) {
    {
      auto temp = (*alt_value).GetIfBool();
      if (!temp.has_value()) {
        out.alt = absl::nullopt;
        return false;
      }
      out.alt = *temp;
    }
  }

  const base::Value* search_value = dict.Find("search");
  if (search_value) {
    {
      auto temp = (*search_value).GetIfBool();
      if (!temp.has_value()) {
        out.search = absl::nullopt;
        return false;
      }
      out.search = *temp;
    }
  }

  const base::Value* shift_value = dict.Find("shift");
  if (shift_value) {
    {
      auto temp = (*shift_value).GetIfBool();
      if (!temp.has_value()) {
        out.shift = absl::nullopt;
        return false;
      }
      out.shift = *temp;
    }
  }

  return true;
}

// static
bool SyntheticKeyboardModifiers::Populate(
    const base::Value& value, SyntheticKeyboardModifiers& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<SyntheticKeyboardModifiers> SyntheticKeyboardModifiers::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<SyntheticKeyboardModifiers>();
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
absl::optional<SyntheticKeyboardModifiers> SyntheticKeyboardModifiers::FromValue(const base::Value::Dict& value) {
  SyntheticKeyboardModifiers out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<SyntheticKeyboardModifiers> SyntheticKeyboardModifiers::FromValue(const base::Value& value) {
  SyntheticKeyboardModifiers out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict SyntheticKeyboardModifiers::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->ctrl) {
    to_value_result.Set("ctrl", *this->ctrl);

  }
  if (this->alt) {
    to_value_result.Set("alt", *this->alt);

  }
  if (this->search) {
    to_value_result.Set("search", *this->search);

  }
  if (this->shift) {
    to_value_result.Set("shift", *this->shift);

  }

  return to_value_result;
}


SyntheticKeyboardEvent::SyntheticKeyboardEvent()
: type(),
key_code(0) {}

SyntheticKeyboardEvent::~SyntheticKeyboardEvent() = default;
SyntheticKeyboardEvent::SyntheticKeyboardEvent(SyntheticKeyboardEvent&& rhs) = default;
SyntheticKeyboardEvent& SyntheticKeyboardEvent::operator=(SyntheticKeyboardEvent&& rhs) = default;
SyntheticKeyboardEvent SyntheticKeyboardEvent::Clone() const {
  SyntheticKeyboardEvent out;
  out.type = type;
  out.key_code = key_code;
  if (modifiers) {
    out.modifiers = modifiers->Clone();
  }
  return out;
}

// static
bool SyntheticKeyboardEvent::Populate(
    const base::Value::Dict& dict, SyntheticKeyboardEvent& out) {
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* synthetic_keyboard_event_type_as_string = (*type_value).GetIfString();
    if (!synthetic_keyboard_event_type_as_string) {
      return false;
    }
    out.type = ParseSyntheticKeyboardEventType(*synthetic_keyboard_event_type_as_string);
    if (out.type == SyntheticKeyboardEventType()) {
      return false;
    }
  }

  const base::Value* key_code_value = dict.Find("keyCode");
  if (!key_code_value) {
    return false;
  }
  {
    auto temp = (*key_code_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.key_code = *temp;
  }

  const base::Value* modifiers_value = dict.Find("modifiers");
  if (modifiers_value) {
    {
      if (!(*modifiers_value).is_dict()) {
        return false;
      }
      else {
        SyntheticKeyboardModifiers temp;
        if (!SyntheticKeyboardModifiers::Populate((*modifiers_value).GetDict(), temp))
          return false;
        out.modifiers = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool SyntheticKeyboardEvent::Populate(
    const base::Value& value, SyntheticKeyboardEvent& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<SyntheticKeyboardEvent> SyntheticKeyboardEvent::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<SyntheticKeyboardEvent>();
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
absl::optional<SyntheticKeyboardEvent> SyntheticKeyboardEvent::FromValue(const base::Value::Dict& value) {
  SyntheticKeyboardEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<SyntheticKeyboardEvent> SyntheticKeyboardEvent::FromValue(const base::Value& value) {
  SyntheticKeyboardEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict SyntheticKeyboardEvent::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("type", accessibility_private::ToString(this->type));

  to_value_result.Set("keyCode", this->key_code);

  if (this->modifiers) {
    to_value_result.Set("modifiers", (this->modifiers)->ToValue());

  }

  return to_value_result;
}


const char* ToString(SyntheticMouseEventType enum_param) {
  switch (enum_param) {
    case SYNTHETIC_MOUSE_EVENT_TYPE_PRESS:
      return "press";
    case SYNTHETIC_MOUSE_EVENT_TYPE_RELEASE:
      return "release";
    case SYNTHETIC_MOUSE_EVENT_TYPE_DRAG:
      return "drag";
    case SYNTHETIC_MOUSE_EVENT_TYPE_MOVE:
      return "move";
    case SYNTHETIC_MOUSE_EVENT_TYPE_ENTER:
      return "enter";
    case SYNTHETIC_MOUSE_EVENT_TYPE_EXIT:
      return "exit";
    case SYNTHETIC_MOUSE_EVENT_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

SyntheticMouseEventType ParseSyntheticMouseEventType(base::StringPiece enum_string) {
  if (enum_string == "press")
    return SYNTHETIC_MOUSE_EVENT_TYPE_PRESS;
  if (enum_string == "release")
    return SYNTHETIC_MOUSE_EVENT_TYPE_RELEASE;
  if (enum_string == "drag")
    return SYNTHETIC_MOUSE_EVENT_TYPE_DRAG;
  if (enum_string == "move")
    return SYNTHETIC_MOUSE_EVENT_TYPE_MOVE;
  if (enum_string == "enter")
    return SYNTHETIC_MOUSE_EVENT_TYPE_ENTER;
  if (enum_string == "exit")
    return SYNTHETIC_MOUSE_EVENT_TYPE_EXIT;
  return SYNTHETIC_MOUSE_EVENT_TYPE_NONE;
}

std::u16string GetSyntheticMouseEventTypeParseError(base::StringPiece enum_string) {
  return u"expected \"press\" or \"release\" or \"drag\" or \"move\" or \"enter\" or \"exit\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SyntheticMouseEventButton enum_param) {
  switch (enum_param) {
    case SYNTHETIC_MOUSE_EVENT_BUTTON_LEFT:
      return "left";
    case SYNTHETIC_MOUSE_EVENT_BUTTON_MIDDLE:
      return "middle";
    case SYNTHETIC_MOUSE_EVENT_BUTTON_RIGHT:
      return "right";
    case SYNTHETIC_MOUSE_EVENT_BUTTON_BACK:
      return "back";
    case SYNTHETIC_MOUSE_EVENT_BUTTON_FOWARD:
      return "foward";
    case SYNTHETIC_MOUSE_EVENT_BUTTON_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

SyntheticMouseEventButton ParseSyntheticMouseEventButton(base::StringPiece enum_string) {
  if (enum_string == "left")
    return SYNTHETIC_MOUSE_EVENT_BUTTON_LEFT;
  if (enum_string == "middle")
    return SYNTHETIC_MOUSE_EVENT_BUTTON_MIDDLE;
  if (enum_string == "right")
    return SYNTHETIC_MOUSE_EVENT_BUTTON_RIGHT;
  if (enum_string == "back")
    return SYNTHETIC_MOUSE_EVENT_BUTTON_BACK;
  if (enum_string == "foward")
    return SYNTHETIC_MOUSE_EVENT_BUTTON_FOWARD;
  return SYNTHETIC_MOUSE_EVENT_BUTTON_NONE;
}

std::u16string GetSyntheticMouseEventButtonParseError(base::StringPiece enum_string) {
  return u"expected \"left\" or \"middle\" or \"right\" or \"back\" or \"foward\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


SyntheticMouseEvent::SyntheticMouseEvent()
: type(),
x(0),
y(0),
mouse_button() {}

SyntheticMouseEvent::~SyntheticMouseEvent() = default;
SyntheticMouseEvent::SyntheticMouseEvent(SyntheticMouseEvent&& rhs) = default;
SyntheticMouseEvent& SyntheticMouseEvent::operator=(SyntheticMouseEvent&& rhs) = default;
SyntheticMouseEvent SyntheticMouseEvent::Clone() const {
  SyntheticMouseEvent out;
  out.type = type;
  out.x = x;
  out.y = y;
  out.touch_accessibility = touch_accessibility;
  out.mouse_button = mouse_button;
  return out;
}

// static
bool SyntheticMouseEvent::Populate(
    const base::Value::Dict& dict, SyntheticMouseEvent& out) {
  out.mouse_button = SyntheticMouseEventButton();
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* synthetic_mouse_event_type_as_string = (*type_value).GetIfString();
    if (!synthetic_mouse_event_type_as_string) {
      return false;
    }
    out.type = ParseSyntheticMouseEventType(*synthetic_mouse_event_type_as_string);
    if (out.type == SyntheticMouseEventType()) {
      return false;
    }
  }

  const base::Value* x_value = dict.Find("x");
  if (!x_value) {
    return false;
  }
  {
    auto temp = (*x_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.x = *temp;
  }

  const base::Value* y_value = dict.Find("y");
  if (!y_value) {
    return false;
  }
  {
    auto temp = (*y_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.y = *temp;
  }

  const base::Value* touch_accessibility_value = dict.Find("touchAccessibility");
  if (touch_accessibility_value) {
    {
      auto temp = (*touch_accessibility_value).GetIfBool();
      if (!temp.has_value()) {
        out.touch_accessibility = absl::nullopt;
        return false;
      }
      out.touch_accessibility = *temp;
    }
  }

  const base::Value* mouse_button_value = dict.Find("mouseButton");
  if (mouse_button_value) {
    {
      const std::string* synthetic_mouse_event_button_as_string = (*mouse_button_value).GetIfString();
      if (!synthetic_mouse_event_button_as_string) {
        return false;
      }
      out.mouse_button = ParseSyntheticMouseEventButton(*synthetic_mouse_event_button_as_string);
      if (out.mouse_button == SyntheticMouseEventButton()) {
        return false;
      }
    }
    } else {
    out.mouse_button = SyntheticMouseEventButton();
  }

  return true;
}

// static
bool SyntheticMouseEvent::Populate(
    const base::Value& value, SyntheticMouseEvent& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<SyntheticMouseEvent> SyntheticMouseEvent::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<SyntheticMouseEvent>();
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
absl::optional<SyntheticMouseEvent> SyntheticMouseEvent::FromValue(const base::Value::Dict& value) {
  SyntheticMouseEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<SyntheticMouseEvent> SyntheticMouseEvent::FromValue(const base::Value& value) {
  SyntheticMouseEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict SyntheticMouseEvent::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("type", accessibility_private::ToString(this->type));

  to_value_result.Set("x", this->x);

  to_value_result.Set("y", this->y);

  if (this->touch_accessibility) {
    to_value_result.Set("touchAccessibility", *this->touch_accessibility);

  }
  if (this->mouse_button != SyntheticMouseEventButton()) {
    to_value_result.Set("mouseButton", accessibility_private::ToString(this->mouse_button));

  }

  return to_value_result;
}


const char* ToString(SelectToSpeakState enum_param) {
  switch (enum_param) {
    case SELECT_TO_SPEAK_STATE_SELECTING:
      return "selecting";
    case SELECT_TO_SPEAK_STATE_SPEAKING:
      return "speaking";
    case SELECT_TO_SPEAK_STATE_INACTIVE:
      return "inactive";
    case SELECT_TO_SPEAK_STATE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

SelectToSpeakState ParseSelectToSpeakState(base::StringPiece enum_string) {
  if (enum_string == "selecting")
    return SELECT_TO_SPEAK_STATE_SELECTING;
  if (enum_string == "speaking")
    return SELECT_TO_SPEAK_STATE_SPEAKING;
  if (enum_string == "inactive")
    return SELECT_TO_SPEAK_STATE_INACTIVE;
  return SELECT_TO_SPEAK_STATE_NONE;
}

std::u16string GetSelectToSpeakStateParseError(base::StringPiece enum_string) {
  return u"expected \"selecting\" or \"speaking\" or \"inactive\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(FocusType enum_param) {
  switch (enum_param) {
    case FOCUS_TYPE_GLOW:
      return "glow";
    case FOCUS_TYPE_SOLID:
      return "solid";
    case FOCUS_TYPE_DASHED:
      return "dashed";
    case FOCUS_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

FocusType ParseFocusType(base::StringPiece enum_string) {
  if (enum_string == "glow")
    return FOCUS_TYPE_GLOW;
  if (enum_string == "solid")
    return FOCUS_TYPE_SOLID;
  if (enum_string == "dashed")
    return FOCUS_TYPE_DASHED;
  return FOCUS_TYPE_NONE;
}

std::u16string GetFocusTypeParseError(base::StringPiece enum_string) {
  return u"expected \"glow\" or \"solid\" or \"dashed\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(FocusRingStackingOrder enum_param) {
  switch (enum_param) {
    case FOCUS_RING_STACKING_ORDER_ABOVEACCESSIBILITYBUBBLES:
      return "aboveAccessibilityBubbles";
    case FOCUS_RING_STACKING_ORDER_BELOWACCESSIBILITYBUBBLES:
      return "belowAccessibilityBubbles";
    case FOCUS_RING_STACKING_ORDER_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

FocusRingStackingOrder ParseFocusRingStackingOrder(base::StringPiece enum_string) {
  if (enum_string == "aboveAccessibilityBubbles")
    return FOCUS_RING_STACKING_ORDER_ABOVEACCESSIBILITYBUBBLES;
  if (enum_string == "belowAccessibilityBubbles")
    return FOCUS_RING_STACKING_ORDER_BELOWACCESSIBILITYBUBBLES;
  return FOCUS_RING_STACKING_ORDER_NONE;
}

std::u16string GetFocusRingStackingOrderParseError(base::StringPiece enum_string) {
  return u"expected \"aboveAccessibilityBubbles\" or \"belowAccessibilityBubbles\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(AssistiveTechnologyType enum_param) {
  switch (enum_param) {
    case ASSISTIVE_TECHNOLOGY_TYPE_CHROMEVOX:
      return "chromeVox";
    case ASSISTIVE_TECHNOLOGY_TYPE_SELECTTOSPEAK:
      return "selectToSpeak";
    case ASSISTIVE_TECHNOLOGY_TYPE_SWITCHACCESS:
      return "switchAccess";
    case ASSISTIVE_TECHNOLOGY_TYPE_AUTOCLICK:
      return "autoClick";
    case ASSISTIVE_TECHNOLOGY_TYPE_MAGNIFIER:
      return "magnifier";
    case ASSISTIVE_TECHNOLOGY_TYPE_DICTATION:
      return "dictation";
    case ASSISTIVE_TECHNOLOGY_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

AssistiveTechnologyType ParseAssistiveTechnologyType(base::StringPiece enum_string) {
  if (enum_string == "chromeVox")
    return ASSISTIVE_TECHNOLOGY_TYPE_CHROMEVOX;
  if (enum_string == "selectToSpeak")
    return ASSISTIVE_TECHNOLOGY_TYPE_SELECTTOSPEAK;
  if (enum_string == "switchAccess")
    return ASSISTIVE_TECHNOLOGY_TYPE_SWITCHACCESS;
  if (enum_string == "autoClick")
    return ASSISTIVE_TECHNOLOGY_TYPE_AUTOCLICK;
  if (enum_string == "magnifier")
    return ASSISTIVE_TECHNOLOGY_TYPE_MAGNIFIER;
  if (enum_string == "dictation")
    return ASSISTIVE_TECHNOLOGY_TYPE_DICTATION;
  return ASSISTIVE_TECHNOLOGY_TYPE_NONE;
}

std::u16string GetAssistiveTechnologyTypeParseError(base::StringPiece enum_string) {
  return u"expected \"chromeVox\" or \"selectToSpeak\" or \"switchAccess\" or \"autoClick\" or \"magnifier\" or \"dictation\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


FocusRingInfo::FocusRingInfo()
: type(),
stacking_order() {}

FocusRingInfo::~FocusRingInfo() = default;
FocusRingInfo::FocusRingInfo(FocusRingInfo&& rhs) = default;
FocusRingInfo& FocusRingInfo::operator=(FocusRingInfo&& rhs) = default;
FocusRingInfo FocusRingInfo::Clone() const {
  FocusRingInfo out;
  out.rects.reserve(rects.size());
  for (const auto& element : rects) {
    json_schema_compiler::util::AppendToContainer(out.rects, element.Clone());
  }
  out.type = type;
  out.color = color;
  out.secondary_color = secondary_color;
  out.background_color = background_color;
  out.stacking_order = stacking_order;
  out.id = id;
  return out;
}

// static
bool FocusRingInfo::Populate(
    const base::Value::Dict& dict, FocusRingInfo& out) {
  out.stacking_order = FocusRingStackingOrder();
  const base::Value* rects_value = dict.Find("rects");
  if (!rects_value) {
    return false;
  }
  {
    if (!(*rects_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*rects_value).GetList(), out.rects)) {
        return false;
      }
    }
  }

  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* focus_type_as_string = (*type_value).GetIfString();
    if (!focus_type_as_string) {
      return false;
    }
    out.type = ParseFocusType(*focus_type_as_string);
    if (out.type == FocusType()) {
      return false;
    }
  }

  const base::Value* color_value = dict.Find("color");
  if (!color_value) {
    return false;
  }
  {
    auto* temp = (*color_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.color = *temp;
  }

  const base::Value* secondary_color_value = dict.Find("secondaryColor");
  if (secondary_color_value) {
    {
      auto* temp = (*secondary_color_value).GetIfString();
      if (!temp) {
        out.secondary_color = absl::nullopt;
        return false;
      }
      out.secondary_color = *temp;
    }
  }

  const base::Value* background_color_value = dict.Find("backgroundColor");
  if (background_color_value) {
    {
      auto* temp = (*background_color_value).GetIfString();
      if (!temp) {
        out.background_color = absl::nullopt;
        return false;
      }
      out.background_color = *temp;
    }
  }

  const base::Value* stacking_order_value = dict.Find("stackingOrder");
  if (stacking_order_value) {
    {
      const std::string* focus_ring_stacking_order_as_string = (*stacking_order_value).GetIfString();
      if (!focus_ring_stacking_order_as_string) {
        return false;
      }
      out.stacking_order = ParseFocusRingStackingOrder(*focus_ring_stacking_order_as_string);
      if (out.stacking_order == FocusRingStackingOrder()) {
        return false;
      }
    }
    } else {
    out.stacking_order = FocusRingStackingOrder();
  }

  const base::Value* id_value = dict.Find("id");
  if (id_value) {
    {
      auto* temp = (*id_value).GetIfString();
      if (!temp) {
        out.id = absl::nullopt;
        return false;
      }
      out.id = *temp;
    }
  }

  return true;
}

// static
bool FocusRingInfo::Populate(
    const base::Value& value, FocusRingInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<FocusRingInfo> FocusRingInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<FocusRingInfo>();
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
absl::optional<FocusRingInfo> FocusRingInfo::FromValue(const base::Value::Dict& value) {
  FocusRingInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<FocusRingInfo> FocusRingInfo::FromValue(const base::Value& value) {
  FocusRingInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict FocusRingInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("rects", json_schema_compiler::util::CreateValueFromArray(this->rects));

  to_value_result.Set("type", accessibility_private::ToString(this->type));

  to_value_result.Set("color", this->color);

  if (this->secondary_color) {
    to_value_result.Set("secondaryColor", *this->secondary_color);

  }
  if (this->background_color) {
    to_value_result.Set("backgroundColor", *this->background_color);

  }
  if (this->stacking_order != FocusRingStackingOrder()) {
    to_value_result.Set("stackingOrder", accessibility_private::ToString(this->stacking_order));

  }
  if (this->id) {
    to_value_result.Set("id", *this->id);

  }

  return to_value_result;
}


const char* ToString(AcceleratorAction enum_param) {
  switch (enum_param) {
    case ACCELERATOR_ACTION_FOCUSPREVIOUSPANE:
      return "focusPreviousPane";
    case ACCELERATOR_ACTION_FOCUSNEXTPANE:
      return "focusNextPane";
    case ACCELERATOR_ACTION_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

AcceleratorAction ParseAcceleratorAction(base::StringPiece enum_string) {
  if (enum_string == "focusPreviousPane")
    return ACCELERATOR_ACTION_FOCUSPREVIOUSPANE;
  if (enum_string == "focusNextPane")
    return ACCELERATOR_ACTION_FOCUSNEXTPANE;
  return ACCELERATOR_ACTION_NONE;
}

std::u16string GetAcceleratorActionParseError(base::StringPiece enum_string) {
  return u"expected \"focusPreviousPane\" or \"focusNextPane\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(AccessibilityFeature enum_param) {
  switch (enum_param) {
    case ACCESSIBILITY_FEATURE_GOOGLETTSLANGUAGEPACKS:
      return "googleTtsLanguagePacks";
    case ACCESSIBILITY_FEATURE_DICTATIONCONTEXTCHECKING:
      return "dictationContextChecking";
    case ACCESSIBILITY_FEATURE_GAMEFACEINTEGRATION:
      return "gameFaceIntegration";
    case ACCESSIBILITY_FEATURE_GOOGLETTSHIGHQUALITYVOICES:
      return "googleTtsHighQualityVoices";
    case ACCESSIBILITY_FEATURE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

AccessibilityFeature ParseAccessibilityFeature(base::StringPiece enum_string) {
  if (enum_string == "googleTtsLanguagePacks")
    return ACCESSIBILITY_FEATURE_GOOGLETTSLANGUAGEPACKS;
  if (enum_string == "dictationContextChecking")
    return ACCESSIBILITY_FEATURE_DICTATIONCONTEXTCHECKING;
  if (enum_string == "gameFaceIntegration")
    return ACCESSIBILITY_FEATURE_GAMEFACEINTEGRATION;
  if (enum_string == "googleTtsHighQualityVoices")
    return ACCESSIBILITY_FEATURE_GOOGLETTSHIGHQUALITYVOICES;
  return ACCESSIBILITY_FEATURE_NONE;
}

std::u16string GetAccessibilityFeatureParseError(base::StringPiece enum_string) {
  return u"expected \"googleTtsLanguagePacks\" or \"dictationContextChecking\" or \"gameFaceIntegration\" or \"googleTtsHighQualityVoices\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SelectToSpeakPanelAction enum_param) {
  switch (enum_param) {
    case SELECT_TO_SPEAK_PANEL_ACTION_PREVIOUSPARAGRAPH:
      return "previousParagraph";
    case SELECT_TO_SPEAK_PANEL_ACTION_PREVIOUSSENTENCE:
      return "previousSentence";
    case SELECT_TO_SPEAK_PANEL_ACTION_PAUSE:
      return "pause";
    case SELECT_TO_SPEAK_PANEL_ACTION_RESUME:
      return "resume";
    case SELECT_TO_SPEAK_PANEL_ACTION_NEXTSENTENCE:
      return "nextSentence";
    case SELECT_TO_SPEAK_PANEL_ACTION_NEXTPARAGRAPH:
      return "nextParagraph";
    case SELECT_TO_SPEAK_PANEL_ACTION_EXIT:
      return "exit";
    case SELECT_TO_SPEAK_PANEL_ACTION_CHANGESPEED:
      return "changeSpeed";
    case SELECT_TO_SPEAK_PANEL_ACTION_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

SelectToSpeakPanelAction ParseSelectToSpeakPanelAction(base::StringPiece enum_string) {
  if (enum_string == "previousParagraph")
    return SELECT_TO_SPEAK_PANEL_ACTION_PREVIOUSPARAGRAPH;
  if (enum_string == "previousSentence")
    return SELECT_TO_SPEAK_PANEL_ACTION_PREVIOUSSENTENCE;
  if (enum_string == "pause")
    return SELECT_TO_SPEAK_PANEL_ACTION_PAUSE;
  if (enum_string == "resume")
    return SELECT_TO_SPEAK_PANEL_ACTION_RESUME;
  if (enum_string == "nextSentence")
    return SELECT_TO_SPEAK_PANEL_ACTION_NEXTSENTENCE;
  if (enum_string == "nextParagraph")
    return SELECT_TO_SPEAK_PANEL_ACTION_NEXTPARAGRAPH;
  if (enum_string == "exit")
    return SELECT_TO_SPEAK_PANEL_ACTION_EXIT;
  if (enum_string == "changeSpeed")
    return SELECT_TO_SPEAK_PANEL_ACTION_CHANGESPEED;
  return SELECT_TO_SPEAK_PANEL_ACTION_NONE;
}

std::u16string GetSelectToSpeakPanelActionParseError(base::StringPiece enum_string) {
  return u"expected \"previousParagraph\" or \"previousSentence\" or \"pause\" or \"resume\" or \"nextSentence\" or \"nextParagraph\" or \"exit\" or \"changeSpeed\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SetNativeChromeVoxResponse enum_param) {
  switch (enum_param) {
    case SET_NATIVE_CHROME_VOX_RESPONSE_SUCCESS:
      return "success";
    case SET_NATIVE_CHROME_VOX_RESPONSE_TALKBACKNOTINSTALLED:
      return "talkbackNotInstalled";
    case SET_NATIVE_CHROME_VOX_RESPONSE_WINDOWNOTFOUND:
      return "windowNotFound";
    case SET_NATIVE_CHROME_VOX_RESPONSE_FAILURE:
      return "failure";
    case SET_NATIVE_CHROME_VOX_RESPONSE_NEEDDEPRECATIONCONFIRMATION:
      return "needDeprecationConfirmation";
    case SET_NATIVE_CHROME_VOX_RESPONSE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

SetNativeChromeVoxResponse ParseSetNativeChromeVoxResponse(base::StringPiece enum_string) {
  if (enum_string == "success")
    return SET_NATIVE_CHROME_VOX_RESPONSE_SUCCESS;
  if (enum_string == "talkbackNotInstalled")
    return SET_NATIVE_CHROME_VOX_RESPONSE_TALKBACKNOTINSTALLED;
  if (enum_string == "windowNotFound")
    return SET_NATIVE_CHROME_VOX_RESPONSE_WINDOWNOTFOUND;
  if (enum_string == "failure")
    return SET_NATIVE_CHROME_VOX_RESPONSE_FAILURE;
  if (enum_string == "needDeprecationConfirmation")
    return SET_NATIVE_CHROME_VOX_RESPONSE_NEEDDEPRECATIONCONFIRMATION;
  return SET_NATIVE_CHROME_VOX_RESPONSE_NONE;
}

std::u16string GetSetNativeChromeVoxResponseParseError(base::StringPiece enum_string) {
  return u"expected \"success\" or \"talkbackNotInstalled\" or \"windowNotFound\" or \"failure\" or \"needDeprecationConfirmation\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DictationBubbleIconType enum_param) {
  switch (enum_param) {
    case DICTATION_BUBBLE_ICON_TYPE_HIDDEN:
      return "hidden";
    case DICTATION_BUBBLE_ICON_TYPE_STANDBY:
      return "standby";
    case DICTATION_BUBBLE_ICON_TYPE_MACROSUCCESS:
      return "macroSuccess";
    case DICTATION_BUBBLE_ICON_TYPE_MACROFAIL:
      return "macroFail";
    case DICTATION_BUBBLE_ICON_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

DictationBubbleIconType ParseDictationBubbleIconType(base::StringPiece enum_string) {
  if (enum_string == "hidden")
    return DICTATION_BUBBLE_ICON_TYPE_HIDDEN;
  if (enum_string == "standby")
    return DICTATION_BUBBLE_ICON_TYPE_STANDBY;
  if (enum_string == "macroSuccess")
    return DICTATION_BUBBLE_ICON_TYPE_MACROSUCCESS;
  if (enum_string == "macroFail")
    return DICTATION_BUBBLE_ICON_TYPE_MACROFAIL;
  return DICTATION_BUBBLE_ICON_TYPE_NONE;
}

std::u16string GetDictationBubbleIconTypeParseError(base::StringPiece enum_string) {
  return u"expected \"hidden\" or \"standby\" or \"macroSuccess\" or \"macroFail\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DictationBubbleHintType enum_param) {
  switch (enum_param) {
    case DICTATION_BUBBLE_HINT_TYPE_TRYSAYING:
      return "trySaying";
    case DICTATION_BUBBLE_HINT_TYPE_TYPE:
      return "type";
    case DICTATION_BUBBLE_HINT_TYPE_DELETE:
      return "delete";
    case DICTATION_BUBBLE_HINT_TYPE_SELECTALL:
      return "selectAll";
    case DICTATION_BUBBLE_HINT_TYPE_UNDO:
      return "undo";
    case DICTATION_BUBBLE_HINT_TYPE_HELP:
      return "help";
    case DICTATION_BUBBLE_HINT_TYPE_UNSELECT:
      return "unselect";
    case DICTATION_BUBBLE_HINT_TYPE_COPY:
      return "copy";
    case DICTATION_BUBBLE_HINT_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

DictationBubbleHintType ParseDictationBubbleHintType(base::StringPiece enum_string) {
  if (enum_string == "trySaying")
    return DICTATION_BUBBLE_HINT_TYPE_TRYSAYING;
  if (enum_string == "type")
    return DICTATION_BUBBLE_HINT_TYPE_TYPE;
  if (enum_string == "delete")
    return DICTATION_BUBBLE_HINT_TYPE_DELETE;
  if (enum_string == "selectAll")
    return DICTATION_BUBBLE_HINT_TYPE_SELECTALL;
  if (enum_string == "undo")
    return DICTATION_BUBBLE_HINT_TYPE_UNDO;
  if (enum_string == "help")
    return DICTATION_BUBBLE_HINT_TYPE_HELP;
  if (enum_string == "unselect")
    return DICTATION_BUBBLE_HINT_TYPE_UNSELECT;
  if (enum_string == "copy")
    return DICTATION_BUBBLE_HINT_TYPE_COPY;
  return DICTATION_BUBBLE_HINT_TYPE_NONE;
}

std::u16string GetDictationBubbleHintTypeParseError(base::StringPiece enum_string) {
  return u"expected \"trySaying\" or \"type\" or \"delete\" or \"selectAll\" or \"undo\" or \"help\" or \"unselect\" or \"copy\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


DictationBubbleProperties::DictationBubbleProperties()
: visible(false),
icon() {}

DictationBubbleProperties::~DictationBubbleProperties() = default;
DictationBubbleProperties::DictationBubbleProperties(DictationBubbleProperties&& rhs) = default;
DictationBubbleProperties& DictationBubbleProperties::operator=(DictationBubbleProperties&& rhs) = default;
DictationBubbleProperties DictationBubbleProperties::Clone() const {
  DictationBubbleProperties out;
  out.visible = visible;
  out.icon = icon;
  out.text = text;
  out.hints = hints;
  return out;
}

// static
bool DictationBubbleProperties::Populate(
    const base::Value::Dict& dict, DictationBubbleProperties& out) {
  const base::Value* visible_value = dict.Find("visible");
  if (!visible_value) {
    return false;
  }
  {
    auto temp = (*visible_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.visible = *temp;
  }

  const base::Value* icon_value = dict.Find("icon");
  if (!icon_value) {
    return false;
  }
  {
    const std::string* dictation_bubble_icon_type_as_string = (*icon_value).GetIfString();
    if (!dictation_bubble_icon_type_as_string) {
      return false;
    }
    out.icon = ParseDictationBubbleIconType(*dictation_bubble_icon_type_as_string);
    if (out.icon == DictationBubbleIconType()) {
      return false;
    }
  }

  const base::Value* text_value = dict.Find("text");
  if (text_value) {
    {
      auto* temp = (*text_value).GetIfString();
      if (!temp) {
        out.text = absl::nullopt;
        return false;
      }
      out.text = *temp;
    }
  }

  const base::Value* hints_value = dict.Find("hints");
  if (hints_value) {
    {
      if (!(*hints_value).is_list()) {
        return false;
      }
      else {
        out.hints.emplace();
        for (const auto& it : ((*hints_value)).GetList()) {
          DictationBubbleHintType tmp;
          const std::string* dictation_bubble_hint_type_as_string = (it).GetIfString();
          if (!dictation_bubble_hint_type_as_string) {
            return false;
          }
          tmp = ParseDictationBubbleHintType(*dictation_bubble_hint_type_as_string);
          if (tmp == DictationBubbleHintType()) {
            return false;
          }
          out.hints->push_back(tmp);
        }
      }
    }
  }

  return true;
}

// static
bool DictationBubbleProperties::Populate(
    const base::Value& value, DictationBubbleProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<DictationBubbleProperties> DictationBubbleProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<DictationBubbleProperties>();
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
absl::optional<DictationBubbleProperties> DictationBubbleProperties::FromValue(const base::Value::Dict& value) {
  DictationBubbleProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DictationBubbleProperties> DictationBubbleProperties::FromValue(const base::Value& value) {
  DictationBubbleProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict DictationBubbleProperties::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("visible", this->visible);

  to_value_result.Set("icon", accessibility_private::ToString(this->icon));

  if (this->text) {
    to_value_result.Set("text", *this->text);

  }
  if (this->hints) {
    {
      std::vector<std::string> hints_list;
      for (const auto& it : *(this->hints)) {
        hints_list.emplace_back(accessibility_private::ToString(it));
      }
      to_value_result.Set("hints", json_schema_compiler::util::CreateValueFromArray(hints_list));
    }

  }

  return to_value_result;
}


const char* ToString(ToastType enum_param) {
  switch (enum_param) {
    case TOAST_TYPE_DICTATIONNOFOCUSEDTEXTFIELD:
      return "dictationNoFocusedTextField";
    case TOAST_TYPE_DICTATIONMICMUTED:
      return "dictationMicMuted";
    case TOAST_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

ToastType ParseToastType(base::StringPiece enum_string) {
  if (enum_string == "dictationNoFocusedTextField")
    return TOAST_TYPE_DICTATIONNOFOCUSEDTEXTFIELD;
  if (enum_string == "dictationMicMuted")
    return TOAST_TYPE_DICTATIONMICMUTED;
  return TOAST_TYPE_NONE;
}

std::u16string GetToastTypeParseError(base::StringPiece enum_string) {
  return u"expected \"dictationNoFocusedTextField\" or \"dictationMicMuted\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DlcType enum_param) {
  switch (enum_param) {
    case DLC_TYPE_TTSBNBD:
      return "ttsBnBd";
    case DLC_TYPE_TTSCSCZ:
      return "ttsCsCz";
    case DLC_TYPE_TTSDADK:
      return "ttsDaDk";
    case DLC_TYPE_TTSDEDE:
      return "ttsDeDe";
    case DLC_TYPE_TTSELGR:
      return "ttsElGr";
    case DLC_TYPE_TTSENAU:
      return "ttsEnAu";
    case DLC_TYPE_TTSENGB:
      return "ttsEnGb";
    case DLC_TYPE_TTSENUS:
      return "ttsEnUs";
    case DLC_TYPE_TTSESES:
      return "ttsEsEs";
    case DLC_TYPE_TTSESUS:
      return "ttsEsUs";
    case DLC_TYPE_TTSFIFI:
      return "ttsFiFi";
    case DLC_TYPE_TTSFILPH:
      return "ttsFilPh";
    case DLC_TYPE_TTSFRFR:
      return "ttsFrFr";
    case DLC_TYPE_TTSHIIN:
      return "ttsHiIn";
    case DLC_TYPE_TTSHUHU:
      return "ttsHuHu";
    case DLC_TYPE_TTSIDID:
      return "ttsIdId";
    case DLC_TYPE_TTSITIT:
      return "ttsItIt";
    case DLC_TYPE_TTSJAJP:
      return "ttsJaJp";
    case DLC_TYPE_TTSKMKH:
      return "ttsKmKh";
    case DLC_TYPE_TTSKOKR:
      return "ttsKoKr";
    case DLC_TYPE_TTSNBNO:
      return "ttsNbNo";
    case DLC_TYPE_TTSNENP:
      return "ttsNeNp";
    case DLC_TYPE_TTSNLNL:
      return "ttsNlNl";
    case DLC_TYPE_TTSPLPL:
      return "ttsPlPl";
    case DLC_TYPE_TTSPTBR:
      return "ttsPtBr";
    case DLC_TYPE_TTSSILK:
      return "ttsSiLk";
    case DLC_TYPE_TTSSKSK:
      return "ttsSkSk";
    case DLC_TYPE_TTSSVSE:
      return "ttsSvSe";
    case DLC_TYPE_TTSTHTH:
      return "ttsThTh";
    case DLC_TYPE_TTSTRTR:
      return "ttsTrTr";
    case DLC_TYPE_TTSUKUA:
      return "ttsUkUa";
    case DLC_TYPE_TTSVIVN:
      return "ttsViVn";
    case DLC_TYPE_TTSYUEHK:
      return "ttsYueHk";
    case DLC_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

DlcType ParseDlcType(base::StringPiece enum_string) {
  if (enum_string == "ttsBnBd")
    return DLC_TYPE_TTSBNBD;
  if (enum_string == "ttsCsCz")
    return DLC_TYPE_TTSCSCZ;
  if (enum_string == "ttsDaDk")
    return DLC_TYPE_TTSDADK;
  if (enum_string == "ttsDeDe")
    return DLC_TYPE_TTSDEDE;
  if (enum_string == "ttsElGr")
    return DLC_TYPE_TTSELGR;
  if (enum_string == "ttsEnAu")
    return DLC_TYPE_TTSENAU;
  if (enum_string == "ttsEnGb")
    return DLC_TYPE_TTSENGB;
  if (enum_string == "ttsEnUs")
    return DLC_TYPE_TTSENUS;
  if (enum_string == "ttsEsEs")
    return DLC_TYPE_TTSESES;
  if (enum_string == "ttsEsUs")
    return DLC_TYPE_TTSESUS;
  if (enum_string == "ttsFiFi")
    return DLC_TYPE_TTSFIFI;
  if (enum_string == "ttsFilPh")
    return DLC_TYPE_TTSFILPH;
  if (enum_string == "ttsFrFr")
    return DLC_TYPE_TTSFRFR;
  if (enum_string == "ttsHiIn")
    return DLC_TYPE_TTSHIIN;
  if (enum_string == "ttsHuHu")
    return DLC_TYPE_TTSHUHU;
  if (enum_string == "ttsIdId")
    return DLC_TYPE_TTSIDID;
  if (enum_string == "ttsItIt")
    return DLC_TYPE_TTSITIT;
  if (enum_string == "ttsJaJp")
    return DLC_TYPE_TTSJAJP;
  if (enum_string == "ttsKmKh")
    return DLC_TYPE_TTSKMKH;
  if (enum_string == "ttsKoKr")
    return DLC_TYPE_TTSKOKR;
  if (enum_string == "ttsNbNo")
    return DLC_TYPE_TTSNBNO;
  if (enum_string == "ttsNeNp")
    return DLC_TYPE_TTSNENP;
  if (enum_string == "ttsNlNl")
    return DLC_TYPE_TTSNLNL;
  if (enum_string == "ttsPlPl")
    return DLC_TYPE_TTSPLPL;
  if (enum_string == "ttsPtBr")
    return DLC_TYPE_TTSPTBR;
  if (enum_string == "ttsSiLk")
    return DLC_TYPE_TTSSILK;
  if (enum_string == "ttsSkSk")
    return DLC_TYPE_TTSSKSK;
  if (enum_string == "ttsSvSe")
    return DLC_TYPE_TTSSVSE;
  if (enum_string == "ttsThTh")
    return DLC_TYPE_TTSTHTH;
  if (enum_string == "ttsTrTr")
    return DLC_TYPE_TTSTRTR;
  if (enum_string == "ttsUkUa")
    return DLC_TYPE_TTSUKUA;
  if (enum_string == "ttsViVn")
    return DLC_TYPE_TTSVIVN;
  if (enum_string == "ttsYueHk")
    return DLC_TYPE_TTSYUEHK;
  return DLC_TYPE_NONE;
}

std::u16string GetDlcTypeParseError(base::StringPiece enum_string) {
  return u"expected \"ttsBnBd\" or \"ttsCsCz\" or \"ttsDaDk\" or \"ttsDeDe\" or \"ttsElGr\" or \"ttsEnAu\" or \"ttsEnGb\" or \"ttsEnUs\" or \"ttsEsEs\" or \"ttsEsUs\" or \"ttsFiFi\" or \"ttsFilPh\" or \"ttsFrFr\" or \"ttsHiIn\" or \"ttsHuHu\" or \"ttsIdId\" or \"ttsItIt\" or \"ttsJaJp\" or \"ttsKmKh\" or \"ttsKoKr\" or \"ttsNbNo\" or \"ttsNeNp\" or \"ttsNlNl\" or \"ttsPlPl\" or \"ttsPtBr\" or \"ttsSiLk\" or \"ttsSkSk\" or \"ttsSvSe\" or \"ttsThTh\" or \"ttsTrTr\" or \"ttsUkUa\" or \"ttsViVn\" or \"ttsYueHk\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


PumpkinData::PumpkinData()
 {}

PumpkinData::~PumpkinData() = default;
PumpkinData::PumpkinData(PumpkinData&& rhs) = default;
PumpkinData& PumpkinData::operator=(PumpkinData&& rhs) = default;
PumpkinData PumpkinData::Clone() const {
  PumpkinData out;
  out.js_pumpkin_tagger_bin_js = js_pumpkin_tagger_bin_js;
  out.tagger_wasm_main_js = tagger_wasm_main_js;
  out.tagger_wasm_main_wasm = tagger_wasm_main_wasm;
  out.en_us_action_config_binarypb = en_us_action_config_binarypb;
  out.en_us_pumpkin_config_binarypb = en_us_pumpkin_config_binarypb;
  out.fr_fr_action_config_binarypb = fr_fr_action_config_binarypb;
  out.fr_fr_pumpkin_config_binarypb = fr_fr_pumpkin_config_binarypb;
  out.it_it_action_config_binarypb = it_it_action_config_binarypb;
  out.it_it_pumpkin_config_binarypb = it_it_pumpkin_config_binarypb;
  out.de_de_action_config_binarypb = de_de_action_config_binarypb;
  out.de_de_pumpkin_config_binarypb = de_de_pumpkin_config_binarypb;
  out.es_es_action_config_binarypb = es_es_action_config_binarypb;
  out.es_es_pumpkin_config_binarypb = es_es_pumpkin_config_binarypb;
  return out;
}

// static
bool PumpkinData::Populate(
    const base::Value::Dict& dict, PumpkinData& out) {
  const base::Value* js_pumpkin_tagger_bin_js_value = dict.Find("js_pumpkin_tagger_bin_js");
  if (!js_pumpkin_tagger_bin_js_value) {
    return false;
  }
  {
    if (!(*js_pumpkin_tagger_bin_js_value).is_blob()) {
      return false;
    }
    else {
      out.js_pumpkin_tagger_bin_js = (*js_pumpkin_tagger_bin_js_value).GetBlob();
    }
  }

  const base::Value* tagger_wasm_main_js_value = dict.Find("tagger_wasm_main_js");
  if (!tagger_wasm_main_js_value) {
    return false;
  }
  {
    if (!(*tagger_wasm_main_js_value).is_blob()) {
      return false;
    }
    else {
      out.tagger_wasm_main_js = (*tagger_wasm_main_js_value).GetBlob();
    }
  }

  const base::Value* tagger_wasm_main_wasm_value = dict.Find("tagger_wasm_main_wasm");
  if (!tagger_wasm_main_wasm_value) {
    return false;
  }
  {
    if (!(*tagger_wasm_main_wasm_value).is_blob()) {
      return false;
    }
    else {
      out.tagger_wasm_main_wasm = (*tagger_wasm_main_wasm_value).GetBlob();
    }
  }

  const base::Value* en_us_action_config_binarypb_value = dict.Find("en_us_action_config_binarypb");
  if (!en_us_action_config_binarypb_value) {
    return false;
  }
  {
    if (!(*en_us_action_config_binarypb_value).is_blob()) {
      return false;
    }
    else {
      out.en_us_action_config_binarypb = (*en_us_action_config_binarypb_value).GetBlob();
    }
  }

  const base::Value* en_us_pumpkin_config_binarypb_value = dict.Find("en_us_pumpkin_config_binarypb");
  if (!en_us_pumpkin_config_binarypb_value) {
    return false;
  }
  {
    if (!(*en_us_pumpkin_config_binarypb_value).is_blob()) {
      return false;
    }
    else {
      out.en_us_pumpkin_config_binarypb = (*en_us_pumpkin_config_binarypb_value).GetBlob();
    }
  }

  const base::Value* fr_fr_action_config_binarypb_value = dict.Find("fr_fr_action_config_binarypb");
  if (!fr_fr_action_config_binarypb_value) {
    return false;
  }
  {
    if (!(*fr_fr_action_config_binarypb_value).is_blob()) {
      return false;
    }
    else {
      out.fr_fr_action_config_binarypb = (*fr_fr_action_config_binarypb_value).GetBlob();
    }
  }

  const base::Value* fr_fr_pumpkin_config_binarypb_value = dict.Find("fr_fr_pumpkin_config_binarypb");
  if (!fr_fr_pumpkin_config_binarypb_value) {
    return false;
  }
  {
    if (!(*fr_fr_pumpkin_config_binarypb_value).is_blob()) {
      return false;
    }
    else {
      out.fr_fr_pumpkin_config_binarypb = (*fr_fr_pumpkin_config_binarypb_value).GetBlob();
    }
  }

  const base::Value* it_it_action_config_binarypb_value = dict.Find("it_it_action_config_binarypb");
  if (!it_it_action_config_binarypb_value) {
    return false;
  }
  {
    if (!(*it_it_action_config_binarypb_value).is_blob()) {
      return false;
    }
    else {
      out.it_it_action_config_binarypb = (*it_it_action_config_binarypb_value).GetBlob();
    }
  }

  const base::Value* it_it_pumpkin_config_binarypb_value = dict.Find("it_it_pumpkin_config_binarypb");
  if (!it_it_pumpkin_config_binarypb_value) {
    return false;
  }
  {
    if (!(*it_it_pumpkin_config_binarypb_value).is_blob()) {
      return false;
    }
    else {
      out.it_it_pumpkin_config_binarypb = (*it_it_pumpkin_config_binarypb_value).GetBlob();
    }
  }

  const base::Value* de_de_action_config_binarypb_value = dict.Find("de_de_action_config_binarypb");
  if (!de_de_action_config_binarypb_value) {
    return false;
  }
  {
    if (!(*de_de_action_config_binarypb_value).is_blob()) {
      return false;
    }
    else {
      out.de_de_action_config_binarypb = (*de_de_action_config_binarypb_value).GetBlob();
    }
  }

  const base::Value* de_de_pumpkin_config_binarypb_value = dict.Find("de_de_pumpkin_config_binarypb");
  if (!de_de_pumpkin_config_binarypb_value) {
    return false;
  }
  {
    if (!(*de_de_pumpkin_config_binarypb_value).is_blob()) {
      return false;
    }
    else {
      out.de_de_pumpkin_config_binarypb = (*de_de_pumpkin_config_binarypb_value).GetBlob();
    }
  }

  const base::Value* es_es_action_config_binarypb_value = dict.Find("es_es_action_config_binarypb");
  if (!es_es_action_config_binarypb_value) {
    return false;
  }
  {
    if (!(*es_es_action_config_binarypb_value).is_blob()) {
      return false;
    }
    else {
      out.es_es_action_config_binarypb = (*es_es_action_config_binarypb_value).GetBlob();
    }
  }

  const base::Value* es_es_pumpkin_config_binarypb_value = dict.Find("es_es_pumpkin_config_binarypb");
  if (!es_es_pumpkin_config_binarypb_value) {
    return false;
  }
  {
    if (!(*es_es_pumpkin_config_binarypb_value).is_blob()) {
      return false;
    }
    else {
      out.es_es_pumpkin_config_binarypb = (*es_es_pumpkin_config_binarypb_value).GetBlob();
    }
  }

  return true;
}

// static
bool PumpkinData::Populate(
    const base::Value& value, PumpkinData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<PumpkinData> PumpkinData::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<PumpkinData>();
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
absl::optional<PumpkinData> PumpkinData::FromValue(const base::Value::Dict& value) {
  PumpkinData out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<PumpkinData> PumpkinData::FromValue(const base::Value& value) {
  PumpkinData out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict PumpkinData::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("js_pumpkin_tagger_bin_js", base::Value(this->js_pumpkin_tagger_bin_js));

  to_value_result.Set("tagger_wasm_main_js", base::Value(this->tagger_wasm_main_js));

  to_value_result.Set("tagger_wasm_main_wasm", base::Value(this->tagger_wasm_main_wasm));

  to_value_result.Set("en_us_action_config_binarypb", base::Value(this->en_us_action_config_binarypb));

  to_value_result.Set("en_us_pumpkin_config_binarypb", base::Value(this->en_us_pumpkin_config_binarypb));

  to_value_result.Set("fr_fr_action_config_binarypb", base::Value(this->fr_fr_action_config_binarypb));

  to_value_result.Set("fr_fr_pumpkin_config_binarypb", base::Value(this->fr_fr_pumpkin_config_binarypb));

  to_value_result.Set("it_it_action_config_binarypb", base::Value(this->it_it_action_config_binarypb));

  to_value_result.Set("it_it_pumpkin_config_binarypb", base::Value(this->it_it_pumpkin_config_binarypb));

  to_value_result.Set("de_de_action_config_binarypb", base::Value(this->de_de_action_config_binarypb));

  to_value_result.Set("de_de_pumpkin_config_binarypb", base::Value(this->de_de_pumpkin_config_binarypb));

  to_value_result.Set("es_es_action_config_binarypb", base::Value(this->es_es_action_config_binarypb));

  to_value_result.Set("es_es_pumpkin_config_binarypb", base::Value(this->es_es_pumpkin_config_binarypb));


  return to_value_result;
}



//
// Functions
//

namespace GetBatteryDescription {

base::Value::List Results::Create(const std::string& battery_description) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(battery_description);

  return create_results;
}
}  // namespace GetBatteryDescription

namespace InstallPumpkinForDictation {

base::Value::List Results::Create(const PumpkinData& data) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((data).ToValue());

  return create_results;
}
}  // namespace InstallPumpkinForDictation

namespace SetNativeAccessibilityEnabled {

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
    const base::Value& enabled_value = args[0];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.enabled = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SetNativeAccessibilityEnabled

namespace SetFocusRings {

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
    const base::Value& focus_rings_value = args[0];
    {
      if (!focus_rings_value.is_list()) {
        return absl::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(focus_rings_value.GetList(), params.focus_rings)) {
          return absl::nullopt;
        }
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& at_type_value = args[1];
    {
      const std::string* assistive_technology_type_as_string = at_type_value.GetIfString();
      if (!assistive_technology_type_as_string) {
        return absl::nullopt;
      }
      params.at_type = ParseAssistiveTechnologyType(*assistive_technology_type_as_string);
      if (params.at_type == AssistiveTechnologyType()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SetFocusRings

namespace SetHighlights {

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
    const base::Value& rects_value = args[0];
    {
      if (!rects_value.is_list()) {
        return absl::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(rects_value.GetList(), params.rects)) {
          return absl::nullopt;
        }
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& color_value = args[1];
    {
      auto* temp = color_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.color = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SetHighlights

namespace SetKeyboardListener {

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
    const base::Value& enabled_value = args[0];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.enabled = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& capture_value = args[1];
    {
      auto temp = capture_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.capture = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SetKeyboardListener

namespace DarkenScreen {

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
    const base::Value& darken_value = args[0];
    {
      auto temp = darken_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.darken = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace DarkenScreen

namespace ForwardKeyEventsToSwitchAccess {

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
    const base::Value& should_forward_value = args[0];
    {
      auto temp = should_forward_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.should_forward = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace ForwardKeyEventsToSwitchAccess

namespace UpdateSwitchAccessBubble {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 2 || args.size() > 4) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& bubble_value = args[0];
    {
      const std::string* switch_access_bubble_as_string = bubble_value.GetIfString();
      if (!switch_access_bubble_as_string) {
        return absl::nullopt;
      }
      params.bubble = ParseSwitchAccessBubble(*switch_access_bubble_as_string);
      if (params.bubble == SwitchAccessBubble()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& show_value = args[1];
    {
      auto temp = show_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.show = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& anchor_value = args[2];
    {
      if (!anchor_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        ScreenRect temp;
        if (!ScreenRect::Populate(anchor_value.GetDict(), temp))
          return absl::nullopt;
        params.anchor = std::move(temp);
      }
    }
  }

  if (3 < args.size() &&
      !args[3].is_none()) {
    const base::Value& actions_value = args[3];
    {
      if (!actions_value.is_list()) {
        return absl::nullopt;
      }
      else {
        params.actions.emplace();
        for (const auto& it : (actions_value).GetList()) {
          SwitchAccessMenuAction tmp;
          const std::string* switch_access_menu_action_as_string = (it).GetIfString();
          if (!switch_access_menu_action_as_string) {
            return absl::nullopt;
          }
          tmp = ParseSwitchAccessMenuAction(*switch_access_menu_action_as_string);
          if (tmp == SwitchAccessMenuAction()) {
            return absl::nullopt;
          }
          params.actions->push_back(tmp);
        }
      }
    }
  }

  return params;
}


}  // namespace UpdateSwitchAccessBubble

namespace SetPointScanState {

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
    const base::Value& state_value = args[0];
    {
      const std::string* point_scan_state_as_string = state_value.GetIfString();
      if (!point_scan_state_as_string) {
        return absl::nullopt;
      }
      params.state = ParsePointScanState(*point_scan_state_as_string);
      if (params.state == PointScanState()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SetPointScanState

namespace SetNativeChromeVoxArcSupportForCurrentApp {

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
    const base::Value& enabled_value = args[0];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.enabled = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const SetNativeChromeVoxResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(accessibility_private::ToString(response));

  return create_results;
}
}  // namespace SetNativeChromeVoxArcSupportForCurrentApp

namespace SendSyntheticKeyEvent {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& key_event_value = args[0];
    {
      if (!key_event_value.is_dict()) {
        return absl::nullopt;
      }
      if (!SyntheticKeyboardEvent::Populate(key_event_value.GetDict(), params.key_event)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& use_rewriters_value = args[1];
    {
      auto temp = use_rewriters_value.GetIfBool();
      if (!temp.has_value()) {
        params.use_rewriters = absl::nullopt;
        return absl::nullopt;
      }
      params.use_rewriters = *temp;
    }
  }

  return params;
}


}  // namespace SendSyntheticKeyEvent

namespace EnableMouseEvents {

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
    const base::Value& enabled_value = args[0];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.enabled = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace EnableMouseEvents

namespace SendSyntheticMouseEvent {

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
    const base::Value& mouse_event_value = args[0];
    {
      if (!mouse_event_value.is_dict()) {
        return absl::nullopt;
      }
      if (!SyntheticMouseEvent::Populate(mouse_event_value.GetDict(), params.mouse_event)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SendSyntheticMouseEvent

namespace SetSelectToSpeakState {

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
    const base::Value& state_value = args[0];
    {
      const std::string* select_to_speak_state_as_string = state_value.GetIfString();
      if (!select_to_speak_state_as_string) {
        return absl::nullopt;
      }
      params.state = ParseSelectToSpeakState(*select_to_speak_state_as_string);
      if (params.state == SelectToSpeakState()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SetSelectToSpeakState

namespace ClipboardCopyInActiveLacrosGoogleDoc {

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
    const base::Value& url_value = args[0];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace ClipboardCopyInActiveLacrosGoogleDoc

namespace HandleScrollableBoundsForPointFound {

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
    const base::Value& rect_value = args[0];
    {
      if (!rect_value.is_dict()) {
        return absl::nullopt;
      }
      if (!ScreenRect::Populate(rect_value.GetDict(), params.rect)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace HandleScrollableBoundsForPointFound

namespace MoveMagnifierToRect {

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
    const base::Value& rect_value = args[0];
    {
      if (!rect_value.is_dict()) {
        return absl::nullopt;
      }
      if (!ScreenRect::Populate(rect_value.GetDict(), params.rect)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace MoveMagnifierToRect

namespace MagnifierCenterOnPoint {

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
    const base::Value& point_value = args[0];
    {
      if (!point_value.is_dict()) {
        return absl::nullopt;
      }
      if (!ScreenPoint::Populate(point_value.GetDict(), params.point)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace MagnifierCenterOnPoint

namespace ToggleDictation {

}  // namespace ToggleDictation

namespace SetVirtualKeyboardVisible {

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
    const base::Value& is_visible_value = args[0];
    {
      auto temp = is_visible_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.is_visible = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SetVirtualKeyboardVisible

namespace OpenSettingsSubpage {

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
    const base::Value& subpage_value = args[0];
    {
      auto* temp = subpage_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.subpage = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace OpenSettingsSubpage

namespace PerformAcceleratorAction {

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
    const base::Value& accelerator_action_value = args[0];
    {
      const std::string* accelerator_action_as_string = accelerator_action_value.GetIfString();
      if (!accelerator_action_as_string) {
        return absl::nullopt;
      }
      params.accelerator_action = ParseAcceleratorAction(*accelerator_action_as_string);
      if (params.accelerator_action == AcceleratorAction()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace PerformAcceleratorAction

namespace IsFeatureEnabled {

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
    const base::Value& feature_value = args[0];
    {
      const std::string* accessibility_feature_as_string = feature_value.GetIfString();
      if (!accessibility_feature_as_string) {
        return absl::nullopt;
      }
      params.feature = ParseAccessibilityFeature(*accessibility_feature_as_string);
      if (params.feature == AccessibilityFeature()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool feature_enabled) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(feature_enabled);

  return create_results;
}
}  // namespace IsFeatureEnabled

namespace UpdateSelectToSpeakPanel {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 4) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& show_value = args[0];
    {
      auto temp = show_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.show = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& anchor_value = args[1];
    {
      if (!anchor_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        ScreenRect temp;
        if (!ScreenRect::Populate(anchor_value.GetDict(), temp))
          return absl::nullopt;
        params.anchor = std::move(temp);
      }
    }
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& is_paused_value = args[2];
    {
      auto temp = is_paused_value.GetIfBool();
      if (!temp.has_value()) {
        params.is_paused = absl::nullopt;
        return absl::nullopt;
      }
      params.is_paused = *temp;
    }
  }

  if (3 < args.size() &&
      !args[3].is_none()) {
    const base::Value& speed_value = args[3];
    {
      auto temp = speed_value.GetIfDouble();
      if (!temp.has_value()) {
        params.speed = absl::nullopt;
        return absl::nullopt;
      }
      params.speed = *temp;
    }
  }

  return params;
}


}  // namespace UpdateSelectToSpeakPanel

namespace ShowConfirmationDialog {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 2 || args.size() > 3) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& title_value = args[0];
    {
      auto* temp = title_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.title = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& description_value = args[1];
    {
      auto* temp = description_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.description = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& cancel_name_value = args[2];
    {
      auto* temp = cancel_name_value.GetIfString();
      if (!temp) {
        params.cancel_name = absl::nullopt;
        return absl::nullopt;
      }
      params.cancel_name = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create(bool confirmed) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(confirmed);

  return create_results;
}
}  // namespace ShowConfirmationDialog

namespace GetLocalizedDomKeyStringForKeyCode {

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
    const base::Value& key_code_value = args[0];
    {
      auto temp = key_code_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.key_code = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& dom_key_string) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(dom_key_string);

  return create_results;
}
}  // namespace GetLocalizedDomKeyStringForKeyCode

namespace UpdateDictationBubble {

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
    const base::Value& properties_value = args[0];
    {
      if (!properties_value.is_dict()) {
        return absl::nullopt;
      }
      if (!DictationBubbleProperties::Populate(properties_value.GetDict(), params.properties)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace UpdateDictationBubble

namespace SilenceSpokenFeedback {

}  // namespace SilenceSpokenFeedback

namespace GetDlcContents {

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
    const base::Value& dlc_value = args[0];
    {
      const std::string* dlc_type_as_string = dlc_value.GetIfString();
      if (!dlc_type_as_string) {
        return absl::nullopt;
      }
      params.dlc = ParseDlcType(*dlc_type_as_string);
      if (params.dlc == DlcType()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<uint8_t>& contents) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value(contents));

  return create_results;
}
}  // namespace GetDlcContents

namespace IsLacrosPrimary {

base::Value::List Results::Create(bool use_lacros) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(use_lacros);

  return create_results;
}
}  // namespace IsLacrosPrimary

namespace ShowToast {

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
    const base::Value& type_value = args[0];
    {
      const std::string* toast_type_as_string = type_value.GetIfString();
      if (!toast_type_as_string) {
        return absl::nullopt;
      }
      params.type = ParseToastType(*toast_type_as_string);
      if (params.type == ToastType()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace ShowToast

//
// Events
//

namespace OnIntroduceChromeVox {

const char kEventName[] = "accessibilityPrivate.onIntroduceChromeVox";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnIntroduceChromeVox

namespace OnAccessibilityGesture {

const char kEventName[] = "accessibilityPrivate.onAccessibilityGesture";

base::Value::List Create(const Gesture& gesture, int x, int y) {
  base::Value::List create_results;
  create_results.reserve(3);
  create_results.Append(accessibility_private::ToString(gesture));

  create_results.Append(x);

  create_results.Append(y);

  return create_results;
}

}  // namespace OnAccessibilityGesture

namespace OnTwoFingerTouchStart {

const char kEventName[] = "accessibilityPrivate.onTwoFingerTouchStart";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnTwoFingerTouchStart

namespace OnTwoFingerTouchStop {

const char kEventName[] = "accessibilityPrivate.onTwoFingerTouchStop";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnTwoFingerTouchStop

namespace OnSelectToSpeakContextMenuClicked {

const char kEventName[] = "accessibilityPrivate.onSelectToSpeakContextMenuClicked";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnSelectToSpeakContextMenuClicked

namespace OnSelectToSpeakStateChangeRequested {

const char kEventName[] = "accessibilityPrivate.onSelectToSpeakStateChangeRequested";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnSelectToSpeakStateChangeRequested

namespace OnSelectToSpeakKeysPressedChanged {

const char kEventName[] = "accessibilityPrivate.onSelectToSpeakKeysPressedChanged";

base::Value::List Create(const std::vector<int>& key_codes) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(key_codes));

  return create_results;
}

}  // namespace OnSelectToSpeakKeysPressedChanged

namespace OnSelectToSpeakMouseChanged {

const char kEventName[] = "accessibilityPrivate.onSelectToSpeakMouseChanged";

base::Value::List Create(const SyntheticMouseEventType& type, int x, int y) {
  base::Value::List create_results;
  create_results.reserve(3);
  create_results.Append(accessibility_private::ToString(type));

  create_results.Append(x);

  create_results.Append(y);

  return create_results;
}

}  // namespace OnSelectToSpeakMouseChanged

namespace OnSelectToSpeakPanelAction {

const char kEventName[] = "accessibilityPrivate.onSelectToSpeakPanelAction";

base::Value::List Create(const SelectToSpeakPanelAction& action, double value) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(accessibility_private::ToString(action));

  create_results.Append(value);

  return create_results;
}

}  // namespace OnSelectToSpeakPanelAction

namespace OnSwitchAccessCommand {

const char kEventName[] = "accessibilityPrivate.onSwitchAccessCommand";

base::Value::List Create(const SwitchAccessCommand& command) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(accessibility_private::ToString(command));

  return create_results;
}

}  // namespace OnSwitchAccessCommand

namespace OnPointScanSet {

const char kEventName[] = "accessibilityPrivate.onPointScanSet";

base::Value::List Create(const PointScanPoint& point) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((point).ToValue());

  return create_results;
}

}  // namespace OnPointScanSet

namespace OnMagnifierCommand {

const char kEventName[] = "accessibilityPrivate.onMagnifierCommand";

base::Value::List Create(const MagnifierCommand& command) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(accessibility_private::ToString(command));

  return create_results;
}

}  // namespace OnMagnifierCommand

namespace OnAnnounceForAccessibility {

const char kEventName[] = "accessibilityPrivate.onAnnounceForAccessibility";

base::Value::List Create(const std::vector<std::string>& announce_text) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(announce_text));

  return create_results;
}

}  // namespace OnAnnounceForAccessibility

namespace OnScrollableBoundsForPointRequested {

const char kEventName[] = "accessibilityPrivate.onScrollableBoundsForPointRequested";

base::Value::List Create(double x, double y) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(x);

  create_results.Append(y);

  return create_results;
}

}  // namespace OnScrollableBoundsForPointRequested

namespace OnMagnifierBoundsChanged {

const char kEventName[] = "accessibilityPrivate.onMagnifierBoundsChanged";

base::Value::List Create(const ScreenRect& magnifier_bounds) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((magnifier_bounds).ToValue());

  return create_results;
}

}  // namespace OnMagnifierBoundsChanged

namespace OnCustomSpokenFeedbackToggled {

const char kEventName[] = "accessibilityPrivate.onCustomSpokenFeedbackToggled";

base::Value::List Create(bool enabled) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(enabled);

  return create_results;
}

}  // namespace OnCustomSpokenFeedbackToggled

namespace OnShowChromeVoxTutorial {

const char kEventName[] = "accessibilityPrivate.onShowChromeVoxTutorial";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnShowChromeVoxTutorial

namespace OnToggleDictation {

const char kEventName[] = "accessibilityPrivate.onToggleDictation";

base::Value::List Create(bool activated) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(activated);

  return create_results;
}

}  // namespace OnToggleDictation

}  // namespace accessibility_private
}  // namespace api
}  // namespace extensions

