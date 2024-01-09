// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/accessibility_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/accessibility_private.h"

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
AlertInfo::AlertInfo(AlertInfo&& rhs) noexcept = default;
AlertInfo& AlertInfo::operator=(AlertInfo&& rhs) noexcept = default;
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
std::optional<AlertInfo> AlertInfo::FromValue(const base::Value::Dict& value) {
  AlertInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AlertInfo> AlertInfo::FromValue(const base::Value& value) {
  AlertInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
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
ScreenRect::ScreenRect(ScreenRect&& rhs) noexcept = default;
ScreenRect& ScreenRect::operator=(ScreenRect&& rhs) noexcept = default;
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
std::optional<ScreenRect> ScreenRect::FromValue(const base::Value::Dict& value) {
  ScreenRect out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ScreenRect> ScreenRect::FromValue(const base::Value& value) {
  ScreenRect out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
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
ScreenPoint::ScreenPoint(ScreenPoint&& rhs) noexcept = default;
ScreenPoint& ScreenPoint::operator=(ScreenPoint&& rhs) noexcept = default;
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
std::optional<ScreenPoint> ScreenPoint::FromValue(const base::Value::Dict& value) {
  ScreenPoint out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ScreenPoint> ScreenPoint::FromValue(const base::Value& value) {
  ScreenPoint out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
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
    case Gesture::kClick:
      return "click";
    case Gesture::kSwipeLeft1:
      return "swipeLeft1";
    case Gesture::kSwipeUp1:
      return "swipeUp1";
    case Gesture::kSwipeRight1:
      return "swipeRight1";
    case Gesture::kSwipeDown1:
      return "swipeDown1";
    case Gesture::kSwipeLeft2:
      return "swipeLeft2";
    case Gesture::kSwipeUp2:
      return "swipeUp2";
    case Gesture::kSwipeRight2:
      return "swipeRight2";
    case Gesture::kSwipeDown2:
      return "swipeDown2";
    case Gesture::kSwipeLeft3:
      return "swipeLeft3";
    case Gesture::kSwipeUp3:
      return "swipeUp3";
    case Gesture::kSwipeRight3:
      return "swipeRight3";
    case Gesture::kSwipeDown3:
      return "swipeDown3";
    case Gesture::kSwipeLeft4:
      return "swipeLeft4";
    case Gesture::kSwipeUp4:
      return "swipeUp4";
    case Gesture::kSwipeRight4:
      return "swipeRight4";
    case Gesture::kSwipeDown4:
      return "swipeDown4";
    case Gesture::kTap2:
      return "tap2";
    case Gesture::kTap3:
      return "tap3";
    case Gesture::kTap4:
      return "tap4";
    case Gesture::kTouchExplore:
      return "touchExplore";
    case Gesture::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

Gesture ParseGesture(base::StringPiece enum_string) {
  if (enum_string == "click")
    return Gesture::kClick;
  if (enum_string == "swipeLeft1")
    return Gesture::kSwipeLeft1;
  if (enum_string == "swipeUp1")
    return Gesture::kSwipeUp1;
  if (enum_string == "swipeRight1")
    return Gesture::kSwipeRight1;
  if (enum_string == "swipeDown1")
    return Gesture::kSwipeDown1;
  if (enum_string == "swipeLeft2")
    return Gesture::kSwipeLeft2;
  if (enum_string == "swipeUp2")
    return Gesture::kSwipeUp2;
  if (enum_string == "swipeRight2")
    return Gesture::kSwipeRight2;
  if (enum_string == "swipeDown2")
    return Gesture::kSwipeDown2;
  if (enum_string == "swipeLeft3")
    return Gesture::kSwipeLeft3;
  if (enum_string == "swipeUp3")
    return Gesture::kSwipeUp3;
  if (enum_string == "swipeRight3")
    return Gesture::kSwipeRight3;
  if (enum_string == "swipeDown3")
    return Gesture::kSwipeDown3;
  if (enum_string == "swipeLeft4")
    return Gesture::kSwipeLeft4;
  if (enum_string == "swipeUp4")
    return Gesture::kSwipeUp4;
  if (enum_string == "swipeRight4")
    return Gesture::kSwipeRight4;
  if (enum_string == "swipeDown4")
    return Gesture::kSwipeDown4;
  if (enum_string == "tap2")
    return Gesture::kTap2;
  if (enum_string == "tap3")
    return Gesture::kTap3;
  if (enum_string == "tap4")
    return Gesture::kTap4;
  if (enum_string == "touchExplore")
    return Gesture::kTouchExplore;
  return Gesture::kNone;
}

std::u16string GetGestureParseError(base::StringPiece enum_string) {
  return u"expected \"click\" or \"swipeLeft1\" or \"swipeUp1\" or \"swipeRight1\" or \"swipeDown1\" or \"swipeLeft2\" or \"swipeUp2\" or \"swipeRight2\" or \"swipeDown2\" or \"swipeLeft3\" or \"swipeUp3\" or \"swipeRight3\" or \"swipeDown3\" or \"swipeLeft4\" or \"swipeUp4\" or \"swipeRight4\" or \"swipeDown4\" or \"tap2\" or \"tap3\" or \"tap4\" or \"touchExplore\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(MagnifierCommand enum_param) {
  switch (enum_param) {
    case MagnifierCommand::kMoveStop:
      return "moveStop";
    case MagnifierCommand::kMoveUp:
      return "moveUp";
    case MagnifierCommand::kMoveDown:
      return "moveDown";
    case MagnifierCommand::kMoveLeft:
      return "moveLeft";
    case MagnifierCommand::kMoveRight:
      return "moveRight";
    case MagnifierCommand::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

MagnifierCommand ParseMagnifierCommand(base::StringPiece enum_string) {
  if (enum_string == "moveStop")
    return MagnifierCommand::kMoveStop;
  if (enum_string == "moveUp")
    return MagnifierCommand::kMoveUp;
  if (enum_string == "moveDown")
    return MagnifierCommand::kMoveDown;
  if (enum_string == "moveLeft")
    return MagnifierCommand::kMoveLeft;
  if (enum_string == "moveRight")
    return MagnifierCommand::kMoveRight;
  return MagnifierCommand::kNone;
}

std::u16string GetMagnifierCommandParseError(base::StringPiece enum_string) {
  return u"expected \"moveStop\" or \"moveUp\" or \"moveDown\" or \"moveLeft\" or \"moveRight\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SwitchAccessCommand enum_param) {
  switch (enum_param) {
    case SwitchAccessCommand::kSelect:
      return "select";
    case SwitchAccessCommand::kNext:
      return "next";
    case SwitchAccessCommand::kPrevious:
      return "previous";
    case SwitchAccessCommand::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

SwitchAccessCommand ParseSwitchAccessCommand(base::StringPiece enum_string) {
  if (enum_string == "select")
    return SwitchAccessCommand::kSelect;
  if (enum_string == "next")
    return SwitchAccessCommand::kNext;
  if (enum_string == "previous")
    return SwitchAccessCommand::kPrevious;
  return SwitchAccessCommand::kNone;
}

std::u16string GetSwitchAccessCommandParseError(base::StringPiece enum_string) {
  return u"expected \"select\" or \"next\" or \"previous\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(PointScanState enum_param) {
  switch (enum_param) {
    case PointScanState::kStart:
      return "start";
    case PointScanState::kStop:
      return "stop";
    case PointScanState::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

PointScanState ParsePointScanState(base::StringPiece enum_string) {
  if (enum_string == "start")
    return PointScanState::kStart;
  if (enum_string == "stop")
    return PointScanState::kStop;
  return PointScanState::kNone;
}

std::u16string GetPointScanStateParseError(base::StringPiece enum_string) {
  return u"expected \"start\" or \"stop\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SwitchAccessBubble enum_param) {
  switch (enum_param) {
    case SwitchAccessBubble::kBackButton:
      return "backButton";
    case SwitchAccessBubble::kMenu:
      return "menu";
    case SwitchAccessBubble::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

SwitchAccessBubble ParseSwitchAccessBubble(base::StringPiece enum_string) {
  if (enum_string == "backButton")
    return SwitchAccessBubble::kBackButton;
  if (enum_string == "menu")
    return SwitchAccessBubble::kMenu;
  return SwitchAccessBubble::kNone;
}

std::u16string GetSwitchAccessBubbleParseError(base::StringPiece enum_string) {
  return u"expected \"backButton\" or \"menu\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


PointScanPoint::PointScanPoint()
: x(0.0),
y(0.0) {}

PointScanPoint::~PointScanPoint() = default;
PointScanPoint::PointScanPoint(PointScanPoint&& rhs) noexcept = default;
PointScanPoint& PointScanPoint::operator=(PointScanPoint&& rhs) noexcept = default;
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
std::optional<PointScanPoint> PointScanPoint::FromValue(const base::Value::Dict& value) {
  PointScanPoint out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PointScanPoint> PointScanPoint::FromValue(const base::Value& value) {
  PointScanPoint out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
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
    case SwitchAccessMenuAction::kCopy:
      return "copy";
    case SwitchAccessMenuAction::kCut:
      return "cut";
    case SwitchAccessMenuAction::kDecrement:
      return "decrement";
    case SwitchAccessMenuAction::kDictation:
      return "dictation";
    case SwitchAccessMenuAction::kEndTextSelection:
      return "endTextSelection";
    case SwitchAccessMenuAction::kIncrement:
      return "increment";
    case SwitchAccessMenuAction::kItemScan:
      return "itemScan";
    case SwitchAccessMenuAction::kJumpToBeginningOfText:
      return "jumpToBeginningOfText";
    case SwitchAccessMenuAction::kJumpToEndOfText:
      return "jumpToEndOfText";
    case SwitchAccessMenuAction::kKeyboard:
      return "keyboard";
    case SwitchAccessMenuAction::kLeftClick:
      return "leftClick";
    case SwitchAccessMenuAction::kMoveBackwardOneCharOfText:
      return "moveBackwardOneCharOfText";
    case SwitchAccessMenuAction::kMoveBackwardOneWordOfText:
      return "moveBackwardOneWordOfText";
    case SwitchAccessMenuAction::kMoveCursor:
      return "moveCursor";
    case SwitchAccessMenuAction::kMoveDownOneLineOfText:
      return "moveDownOneLineOfText";
    case SwitchAccessMenuAction::kMoveForwardOneCharOfText:
      return "moveForwardOneCharOfText";
    case SwitchAccessMenuAction::kMoveForwardOneWordOfText:
      return "moveForwardOneWordOfText";
    case SwitchAccessMenuAction::kMoveUpOneLineOfText:
      return "moveUpOneLineOfText";
    case SwitchAccessMenuAction::kPaste:
      return "paste";
    case SwitchAccessMenuAction::kPointScan:
      return "pointScan";
    case SwitchAccessMenuAction::kRightClick:
      return "rightClick";
    case SwitchAccessMenuAction::kScrollDown:
      return "scrollDown";
    case SwitchAccessMenuAction::kScrollLeft:
      return "scrollLeft";
    case SwitchAccessMenuAction::kScrollRight:
      return "scrollRight";
    case SwitchAccessMenuAction::kScrollUp:
      return "scrollUp";
    case SwitchAccessMenuAction::kSelect:
      return "select";
    case SwitchAccessMenuAction::kSettings:
      return "settings";
    case SwitchAccessMenuAction::kStartTextSelection:
      return "startTextSelection";
    case SwitchAccessMenuAction::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

SwitchAccessMenuAction ParseSwitchAccessMenuAction(base::StringPiece enum_string) {
  if (enum_string == "copy")
    return SwitchAccessMenuAction::kCopy;
  if (enum_string == "cut")
    return SwitchAccessMenuAction::kCut;
  if (enum_string == "decrement")
    return SwitchAccessMenuAction::kDecrement;
  if (enum_string == "dictation")
    return SwitchAccessMenuAction::kDictation;
  if (enum_string == "endTextSelection")
    return SwitchAccessMenuAction::kEndTextSelection;
  if (enum_string == "increment")
    return SwitchAccessMenuAction::kIncrement;
  if (enum_string == "itemScan")
    return SwitchAccessMenuAction::kItemScan;
  if (enum_string == "jumpToBeginningOfText")
    return SwitchAccessMenuAction::kJumpToBeginningOfText;
  if (enum_string == "jumpToEndOfText")
    return SwitchAccessMenuAction::kJumpToEndOfText;
  if (enum_string == "keyboard")
    return SwitchAccessMenuAction::kKeyboard;
  if (enum_string == "leftClick")
    return SwitchAccessMenuAction::kLeftClick;
  if (enum_string == "moveBackwardOneCharOfText")
    return SwitchAccessMenuAction::kMoveBackwardOneCharOfText;
  if (enum_string == "moveBackwardOneWordOfText")
    return SwitchAccessMenuAction::kMoveBackwardOneWordOfText;
  if (enum_string == "moveCursor")
    return SwitchAccessMenuAction::kMoveCursor;
  if (enum_string == "moveDownOneLineOfText")
    return SwitchAccessMenuAction::kMoveDownOneLineOfText;
  if (enum_string == "moveForwardOneCharOfText")
    return SwitchAccessMenuAction::kMoveForwardOneCharOfText;
  if (enum_string == "moveForwardOneWordOfText")
    return SwitchAccessMenuAction::kMoveForwardOneWordOfText;
  if (enum_string == "moveUpOneLineOfText")
    return SwitchAccessMenuAction::kMoveUpOneLineOfText;
  if (enum_string == "paste")
    return SwitchAccessMenuAction::kPaste;
  if (enum_string == "pointScan")
    return SwitchAccessMenuAction::kPointScan;
  if (enum_string == "rightClick")
    return SwitchAccessMenuAction::kRightClick;
  if (enum_string == "scrollDown")
    return SwitchAccessMenuAction::kScrollDown;
  if (enum_string == "scrollLeft")
    return SwitchAccessMenuAction::kScrollLeft;
  if (enum_string == "scrollRight")
    return SwitchAccessMenuAction::kScrollRight;
  if (enum_string == "scrollUp")
    return SwitchAccessMenuAction::kScrollUp;
  if (enum_string == "select")
    return SwitchAccessMenuAction::kSelect;
  if (enum_string == "settings")
    return SwitchAccessMenuAction::kSettings;
  if (enum_string == "startTextSelection")
    return SwitchAccessMenuAction::kStartTextSelection;
  return SwitchAccessMenuAction::kNone;
}

std::u16string GetSwitchAccessMenuActionParseError(base::StringPiece enum_string) {
  return u"expected \"copy\" or \"cut\" or \"decrement\" or \"dictation\" or \"endTextSelection\" or \"increment\" or \"itemScan\" or \"jumpToBeginningOfText\" or \"jumpToEndOfText\" or \"keyboard\" or \"leftClick\" or \"moveBackwardOneCharOfText\" or \"moveBackwardOneWordOfText\" or \"moveCursor\" or \"moveDownOneLineOfText\" or \"moveForwardOneCharOfText\" or \"moveForwardOneWordOfText\" or \"moveUpOneLineOfText\" or \"paste\" or \"pointScan\" or \"rightClick\" or \"scrollDown\" or \"scrollLeft\" or \"scrollRight\" or \"scrollUp\" or \"select\" or \"settings\" or \"startTextSelection\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SyntheticKeyboardEventType enum_param) {
  switch (enum_param) {
    case SyntheticKeyboardEventType::kKeyup:
      return "keyup";
    case SyntheticKeyboardEventType::kKeydown:
      return "keydown";
    case SyntheticKeyboardEventType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

SyntheticKeyboardEventType ParseSyntheticKeyboardEventType(base::StringPiece enum_string) {
  if (enum_string == "keyup")
    return SyntheticKeyboardEventType::kKeyup;
  if (enum_string == "keydown")
    return SyntheticKeyboardEventType::kKeydown;
  return SyntheticKeyboardEventType::kNone;
}

std::u16string GetSyntheticKeyboardEventTypeParseError(base::StringPiece enum_string) {
  return u"expected \"keyup\" or \"keydown\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


SyntheticKeyboardModifiers::SyntheticKeyboardModifiers()
 {}

SyntheticKeyboardModifiers::~SyntheticKeyboardModifiers() = default;
SyntheticKeyboardModifiers::SyntheticKeyboardModifiers(SyntheticKeyboardModifiers&& rhs) noexcept = default;
SyntheticKeyboardModifiers& SyntheticKeyboardModifiers::operator=(SyntheticKeyboardModifiers&& rhs) noexcept = default;
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
        out.ctrl = std::nullopt;
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
        out.alt = std::nullopt;
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
        out.search = std::nullopt;
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
        out.shift = std::nullopt;
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
std::optional<SyntheticKeyboardModifiers> SyntheticKeyboardModifiers::FromValue(const base::Value::Dict& value) {
  SyntheticKeyboardModifiers out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SyntheticKeyboardModifiers> SyntheticKeyboardModifiers::FromValue(const base::Value& value) {
  SyntheticKeyboardModifiers out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
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
SyntheticKeyboardEvent::SyntheticKeyboardEvent(SyntheticKeyboardEvent&& rhs) noexcept = default;
SyntheticKeyboardEvent& SyntheticKeyboardEvent::operator=(SyntheticKeyboardEvent&& rhs) noexcept = default;
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
std::optional<SyntheticKeyboardEvent> SyntheticKeyboardEvent::FromValue(const base::Value::Dict& value) {
  SyntheticKeyboardEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SyntheticKeyboardEvent> SyntheticKeyboardEvent::FromValue(const base::Value& value) {
  SyntheticKeyboardEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
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
    case SyntheticMouseEventType::kPress:
      return "press";
    case SyntheticMouseEventType::kRelease:
      return "release";
    case SyntheticMouseEventType::kDrag:
      return "drag";
    case SyntheticMouseEventType::kMove:
      return "move";
    case SyntheticMouseEventType::kEnter:
      return "enter";
    case SyntheticMouseEventType::kExit:
      return "exit";
    case SyntheticMouseEventType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

SyntheticMouseEventType ParseSyntheticMouseEventType(base::StringPiece enum_string) {
  if (enum_string == "press")
    return SyntheticMouseEventType::kPress;
  if (enum_string == "release")
    return SyntheticMouseEventType::kRelease;
  if (enum_string == "drag")
    return SyntheticMouseEventType::kDrag;
  if (enum_string == "move")
    return SyntheticMouseEventType::kMove;
  if (enum_string == "enter")
    return SyntheticMouseEventType::kEnter;
  if (enum_string == "exit")
    return SyntheticMouseEventType::kExit;
  return SyntheticMouseEventType::kNone;
}

std::u16string GetSyntheticMouseEventTypeParseError(base::StringPiece enum_string) {
  return u"expected \"press\" or \"release\" or \"drag\" or \"move\" or \"enter\" or \"exit\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SyntheticMouseEventButton enum_param) {
  switch (enum_param) {
    case SyntheticMouseEventButton::kLeft:
      return "left";
    case SyntheticMouseEventButton::kMiddle:
      return "middle";
    case SyntheticMouseEventButton::kRight:
      return "right";
    case SyntheticMouseEventButton::kBack:
      return "back";
    case SyntheticMouseEventButton::kFoward:
      return "foward";
    case SyntheticMouseEventButton::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

SyntheticMouseEventButton ParseSyntheticMouseEventButton(base::StringPiece enum_string) {
  if (enum_string == "left")
    return SyntheticMouseEventButton::kLeft;
  if (enum_string == "middle")
    return SyntheticMouseEventButton::kMiddle;
  if (enum_string == "right")
    return SyntheticMouseEventButton::kRight;
  if (enum_string == "back")
    return SyntheticMouseEventButton::kBack;
  if (enum_string == "foward")
    return SyntheticMouseEventButton::kFoward;
  return SyntheticMouseEventButton::kNone;
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
SyntheticMouseEvent::SyntheticMouseEvent(SyntheticMouseEvent&& rhs) noexcept = default;
SyntheticMouseEvent& SyntheticMouseEvent::operator=(SyntheticMouseEvent&& rhs) noexcept = default;
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
        out.touch_accessibility = std::nullopt;
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
std::optional<SyntheticMouseEvent> SyntheticMouseEvent::FromValue(const base::Value::Dict& value) {
  SyntheticMouseEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SyntheticMouseEvent> SyntheticMouseEvent::FromValue(const base::Value& value) {
  SyntheticMouseEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
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
    case SelectToSpeakState::kSelecting:
      return "selecting";
    case SelectToSpeakState::kSpeaking:
      return "speaking";
    case SelectToSpeakState::kInactive:
      return "inactive";
    case SelectToSpeakState::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

SelectToSpeakState ParseSelectToSpeakState(base::StringPiece enum_string) {
  if (enum_string == "selecting")
    return SelectToSpeakState::kSelecting;
  if (enum_string == "speaking")
    return SelectToSpeakState::kSpeaking;
  if (enum_string == "inactive")
    return SelectToSpeakState::kInactive;
  return SelectToSpeakState::kNone;
}

std::u16string GetSelectToSpeakStateParseError(base::StringPiece enum_string) {
  return u"expected \"selecting\" or \"speaking\" or \"inactive\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(FocusType enum_param) {
  switch (enum_param) {
    case FocusType::kGlow:
      return "glow";
    case FocusType::kSolid:
      return "solid";
    case FocusType::kDashed:
      return "dashed";
    case FocusType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

FocusType ParseFocusType(base::StringPiece enum_string) {
  if (enum_string == "glow")
    return FocusType::kGlow;
  if (enum_string == "solid")
    return FocusType::kSolid;
  if (enum_string == "dashed")
    return FocusType::kDashed;
  return FocusType::kNone;
}

std::u16string GetFocusTypeParseError(base::StringPiece enum_string) {
  return u"expected \"glow\" or \"solid\" or \"dashed\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(FocusRingStackingOrder enum_param) {
  switch (enum_param) {
    case FocusRingStackingOrder::kAboveAccessibilityBubbles:
      return "aboveAccessibilityBubbles";
    case FocusRingStackingOrder::kBelowAccessibilityBubbles:
      return "belowAccessibilityBubbles";
    case FocusRingStackingOrder::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

FocusRingStackingOrder ParseFocusRingStackingOrder(base::StringPiece enum_string) {
  if (enum_string == "aboveAccessibilityBubbles")
    return FocusRingStackingOrder::kAboveAccessibilityBubbles;
  if (enum_string == "belowAccessibilityBubbles")
    return FocusRingStackingOrder::kBelowAccessibilityBubbles;
  return FocusRingStackingOrder::kNone;
}

std::u16string GetFocusRingStackingOrderParseError(base::StringPiece enum_string) {
  return u"expected \"aboveAccessibilityBubbles\" or \"belowAccessibilityBubbles\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(AssistiveTechnologyType enum_param) {
  switch (enum_param) {
    case AssistiveTechnologyType::kChromeVox:
      return "chromeVox";
    case AssistiveTechnologyType::kSelectToSpeak:
      return "selectToSpeak";
    case AssistiveTechnologyType::kSwitchAccess:
      return "switchAccess";
    case AssistiveTechnologyType::kAutoClick:
      return "autoClick";
    case AssistiveTechnologyType::kMagnifier:
      return "magnifier";
    case AssistiveTechnologyType::kDictation:
      return "dictation";
    case AssistiveTechnologyType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

AssistiveTechnologyType ParseAssistiveTechnologyType(base::StringPiece enum_string) {
  if (enum_string == "chromeVox")
    return AssistiveTechnologyType::kChromeVox;
  if (enum_string == "selectToSpeak")
    return AssistiveTechnologyType::kSelectToSpeak;
  if (enum_string == "switchAccess")
    return AssistiveTechnologyType::kSwitchAccess;
  if (enum_string == "autoClick")
    return AssistiveTechnologyType::kAutoClick;
  if (enum_string == "magnifier")
    return AssistiveTechnologyType::kMagnifier;
  if (enum_string == "dictation")
    return AssistiveTechnologyType::kDictation;
  return AssistiveTechnologyType::kNone;
}

std::u16string GetAssistiveTechnologyTypeParseError(base::StringPiece enum_string) {
  return u"expected \"chromeVox\" or \"selectToSpeak\" or \"switchAccess\" or \"autoClick\" or \"magnifier\" or \"dictation\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


FocusRingInfo::FocusRingInfo()
: type(),
stacking_order() {}

FocusRingInfo::~FocusRingInfo() = default;
FocusRingInfo::FocusRingInfo(FocusRingInfo&& rhs) noexcept = default;
FocusRingInfo& FocusRingInfo::operator=(FocusRingInfo&& rhs) noexcept = default;
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
        out.secondary_color = std::nullopt;
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
        out.background_color = std::nullopt;
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
        out.id = std::nullopt;
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
std::optional<FocusRingInfo> FocusRingInfo::FromValue(const base::Value::Dict& value) {
  FocusRingInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<FocusRingInfo> FocusRingInfo::FromValue(const base::Value& value) {
  FocusRingInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
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
    case AcceleratorAction::kFocusPreviousPane:
      return "focusPreviousPane";
    case AcceleratorAction::kFocusNextPane:
      return "focusNextPane";
    case AcceleratorAction::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

AcceleratorAction ParseAcceleratorAction(base::StringPiece enum_string) {
  if (enum_string == "focusPreviousPane")
    return AcceleratorAction::kFocusPreviousPane;
  if (enum_string == "focusNextPane")
    return AcceleratorAction::kFocusNextPane;
  return AcceleratorAction::kNone;
}

std::u16string GetAcceleratorActionParseError(base::StringPiece enum_string) {
  return u"expected \"focusPreviousPane\" or \"focusNextPane\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(AccessibilityFeature enum_param) {
  switch (enum_param) {
    case AccessibilityFeature::kGoogleTtsLanguagePacks:
      return "googleTtsLanguagePacks";
    case AccessibilityFeature::kDictationContextChecking:
      return "dictationContextChecking";
    case AccessibilityFeature::kFaceGaze:
      return "faceGaze";
    case AccessibilityFeature::kGoogleTtsHighQualityVoices:
      return "googleTtsHighQualityVoices";
    case AccessibilityFeature::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

AccessibilityFeature ParseAccessibilityFeature(base::StringPiece enum_string) {
  if (enum_string == "googleTtsLanguagePacks")
    return AccessibilityFeature::kGoogleTtsLanguagePacks;
  if (enum_string == "dictationContextChecking")
    return AccessibilityFeature::kDictationContextChecking;
  if (enum_string == "faceGaze")
    return AccessibilityFeature::kFaceGaze;
  if (enum_string == "googleTtsHighQualityVoices")
    return AccessibilityFeature::kGoogleTtsHighQualityVoices;
  return AccessibilityFeature::kNone;
}

std::u16string GetAccessibilityFeatureParseError(base::StringPiece enum_string) {
  return u"expected \"googleTtsLanguagePacks\" or \"dictationContextChecking\" or \"faceGaze\" or \"googleTtsHighQualityVoices\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SelectToSpeakPanelAction enum_param) {
  switch (enum_param) {
    case SelectToSpeakPanelAction::kPreviousParagraph:
      return "previousParagraph";
    case SelectToSpeakPanelAction::kPreviousSentence:
      return "previousSentence";
    case SelectToSpeakPanelAction::kPause:
      return "pause";
    case SelectToSpeakPanelAction::kResume:
      return "resume";
    case SelectToSpeakPanelAction::kNextSentence:
      return "nextSentence";
    case SelectToSpeakPanelAction::kNextParagraph:
      return "nextParagraph";
    case SelectToSpeakPanelAction::kExit:
      return "exit";
    case SelectToSpeakPanelAction::kChangeSpeed:
      return "changeSpeed";
    case SelectToSpeakPanelAction::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

SelectToSpeakPanelAction ParseSelectToSpeakPanelAction(base::StringPiece enum_string) {
  if (enum_string == "previousParagraph")
    return SelectToSpeakPanelAction::kPreviousParagraph;
  if (enum_string == "previousSentence")
    return SelectToSpeakPanelAction::kPreviousSentence;
  if (enum_string == "pause")
    return SelectToSpeakPanelAction::kPause;
  if (enum_string == "resume")
    return SelectToSpeakPanelAction::kResume;
  if (enum_string == "nextSentence")
    return SelectToSpeakPanelAction::kNextSentence;
  if (enum_string == "nextParagraph")
    return SelectToSpeakPanelAction::kNextParagraph;
  if (enum_string == "exit")
    return SelectToSpeakPanelAction::kExit;
  if (enum_string == "changeSpeed")
    return SelectToSpeakPanelAction::kChangeSpeed;
  return SelectToSpeakPanelAction::kNone;
}

std::u16string GetSelectToSpeakPanelActionParseError(base::StringPiece enum_string) {
  return u"expected \"previousParagraph\" or \"previousSentence\" or \"pause\" or \"resume\" or \"nextSentence\" or \"nextParagraph\" or \"exit\" or \"changeSpeed\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SetNativeChromeVoxResponse enum_param) {
  switch (enum_param) {
    case SetNativeChromeVoxResponse::kSuccess:
      return "success";
    case SetNativeChromeVoxResponse::kTalkbackNotInstalled:
      return "talkbackNotInstalled";
    case SetNativeChromeVoxResponse::kWindowNotFound:
      return "windowNotFound";
    case SetNativeChromeVoxResponse::kFailure:
      return "failure";
    case SetNativeChromeVoxResponse::kNeedDeprecationConfirmation:
      return "needDeprecationConfirmation";
    case SetNativeChromeVoxResponse::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

SetNativeChromeVoxResponse ParseSetNativeChromeVoxResponse(base::StringPiece enum_string) {
  if (enum_string == "success")
    return SetNativeChromeVoxResponse::kSuccess;
  if (enum_string == "talkbackNotInstalled")
    return SetNativeChromeVoxResponse::kTalkbackNotInstalled;
  if (enum_string == "windowNotFound")
    return SetNativeChromeVoxResponse::kWindowNotFound;
  if (enum_string == "failure")
    return SetNativeChromeVoxResponse::kFailure;
  if (enum_string == "needDeprecationConfirmation")
    return SetNativeChromeVoxResponse::kNeedDeprecationConfirmation;
  return SetNativeChromeVoxResponse::kNone;
}

std::u16string GetSetNativeChromeVoxResponseParseError(base::StringPiece enum_string) {
  return u"expected \"success\" or \"talkbackNotInstalled\" or \"windowNotFound\" or \"failure\" or \"needDeprecationConfirmation\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DictationBubbleIconType enum_param) {
  switch (enum_param) {
    case DictationBubbleIconType::kHidden:
      return "hidden";
    case DictationBubbleIconType::kStandby:
      return "standby";
    case DictationBubbleIconType::kMacroSuccess:
      return "macroSuccess";
    case DictationBubbleIconType::kMacroFail:
      return "macroFail";
    case DictationBubbleIconType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DictationBubbleIconType ParseDictationBubbleIconType(base::StringPiece enum_string) {
  if (enum_string == "hidden")
    return DictationBubbleIconType::kHidden;
  if (enum_string == "standby")
    return DictationBubbleIconType::kStandby;
  if (enum_string == "macroSuccess")
    return DictationBubbleIconType::kMacroSuccess;
  if (enum_string == "macroFail")
    return DictationBubbleIconType::kMacroFail;
  return DictationBubbleIconType::kNone;
}

std::u16string GetDictationBubbleIconTypeParseError(base::StringPiece enum_string) {
  return u"expected \"hidden\" or \"standby\" or \"macroSuccess\" or \"macroFail\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DictationBubbleHintType enum_param) {
  switch (enum_param) {
    case DictationBubbleHintType::kTrySaying:
      return "trySaying";
    case DictationBubbleHintType::kType:
      return "type";
    case DictationBubbleHintType::kDelete:
      return "delete";
    case DictationBubbleHintType::kSelectAll:
      return "selectAll";
    case DictationBubbleHintType::kUndo:
      return "undo";
    case DictationBubbleHintType::kHelp:
      return "help";
    case DictationBubbleHintType::kUnselect:
      return "unselect";
    case DictationBubbleHintType::kCopy:
      return "copy";
    case DictationBubbleHintType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DictationBubbleHintType ParseDictationBubbleHintType(base::StringPiece enum_string) {
  if (enum_string == "trySaying")
    return DictationBubbleHintType::kTrySaying;
  if (enum_string == "type")
    return DictationBubbleHintType::kType;
  if (enum_string == "delete")
    return DictationBubbleHintType::kDelete;
  if (enum_string == "selectAll")
    return DictationBubbleHintType::kSelectAll;
  if (enum_string == "undo")
    return DictationBubbleHintType::kUndo;
  if (enum_string == "help")
    return DictationBubbleHintType::kHelp;
  if (enum_string == "unselect")
    return DictationBubbleHintType::kUnselect;
  if (enum_string == "copy")
    return DictationBubbleHintType::kCopy;
  return DictationBubbleHintType::kNone;
}

std::u16string GetDictationBubbleHintTypeParseError(base::StringPiece enum_string) {
  return u"expected \"trySaying\" or \"type\" or \"delete\" or \"selectAll\" or \"undo\" or \"help\" or \"unselect\" or \"copy\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


DictationBubbleProperties::DictationBubbleProperties()
: visible(false),
icon() {}

DictationBubbleProperties::~DictationBubbleProperties() = default;
DictationBubbleProperties::DictationBubbleProperties(DictationBubbleProperties&& rhs) noexcept = default;
DictationBubbleProperties& DictationBubbleProperties::operator=(DictationBubbleProperties&& rhs) noexcept = default;
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
        out.text = std::nullopt;
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
std::optional<DictationBubbleProperties> DictationBubbleProperties::FromValue(const base::Value::Dict& value) {
  DictationBubbleProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DictationBubbleProperties> DictationBubbleProperties::FromValue(const base::Value& value) {
  DictationBubbleProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
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
    case ToastType::kDictationNoFocusedTextField:
      return "dictationNoFocusedTextField";
    case ToastType::kDictationMicMuted:
      return "dictationMicMuted";
    case ToastType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ToastType ParseToastType(base::StringPiece enum_string) {
  if (enum_string == "dictationNoFocusedTextField")
    return ToastType::kDictationNoFocusedTextField;
  if (enum_string == "dictationMicMuted")
    return ToastType::kDictationMicMuted;
  return ToastType::kNone;
}

std::u16string GetToastTypeParseError(base::StringPiece enum_string) {
  return u"expected \"dictationNoFocusedTextField\" or \"dictationMicMuted\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DlcType enum_param) {
  switch (enum_param) {
    case DlcType::kTtsBnBd:
      return "ttsBnBd";
    case DlcType::kTtsCsCz:
      return "ttsCsCz";
    case DlcType::kTtsDaDk:
      return "ttsDaDk";
    case DlcType::kTtsDeDe:
      return "ttsDeDe";
    case DlcType::kTtsElGr:
      return "ttsElGr";
    case DlcType::kTtsEnAu:
      return "ttsEnAu";
    case DlcType::kTtsEnGb:
      return "ttsEnGb";
    case DlcType::kTtsEnUs:
      return "ttsEnUs";
    case DlcType::kTtsEsEs:
      return "ttsEsEs";
    case DlcType::kTtsEsUs:
      return "ttsEsUs";
    case DlcType::kTtsFiFi:
      return "ttsFiFi";
    case DlcType::kTtsFilPh:
      return "ttsFilPh";
    case DlcType::kTtsFrFr:
      return "ttsFrFr";
    case DlcType::kTtsHiIn:
      return "ttsHiIn";
    case DlcType::kTtsHuHu:
      return "ttsHuHu";
    case DlcType::kTtsIdId:
      return "ttsIdId";
    case DlcType::kTtsItIt:
      return "ttsItIt";
    case DlcType::kTtsJaJp:
      return "ttsJaJp";
    case DlcType::kTtsKmKh:
      return "ttsKmKh";
    case DlcType::kTtsKoKr:
      return "ttsKoKr";
    case DlcType::kTtsNbNo:
      return "ttsNbNo";
    case DlcType::kTtsNeNp:
      return "ttsNeNp";
    case DlcType::kTtsNlNl:
      return "ttsNlNl";
    case DlcType::kTtsPlPl:
      return "ttsPlPl";
    case DlcType::kTtsPtBr:
      return "ttsPtBr";
    case DlcType::kTtsPtPt:
      return "ttsPtPt";
    case DlcType::kTtsSiLk:
      return "ttsSiLk";
    case DlcType::kTtsSkSk:
      return "ttsSkSk";
    case DlcType::kTtsSvSe:
      return "ttsSvSe";
    case DlcType::kTtsThTh:
      return "ttsThTh";
    case DlcType::kTtsTrTr:
      return "ttsTrTr";
    case DlcType::kTtsUkUa:
      return "ttsUkUa";
    case DlcType::kTtsViVn:
      return "ttsViVn";
    case DlcType::kTtsYueHk:
      return "ttsYueHk";
    case DlcType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DlcType ParseDlcType(base::StringPiece enum_string) {
  if (enum_string == "ttsBnBd")
    return DlcType::kTtsBnBd;
  if (enum_string == "ttsCsCz")
    return DlcType::kTtsCsCz;
  if (enum_string == "ttsDaDk")
    return DlcType::kTtsDaDk;
  if (enum_string == "ttsDeDe")
    return DlcType::kTtsDeDe;
  if (enum_string == "ttsElGr")
    return DlcType::kTtsElGr;
  if (enum_string == "ttsEnAu")
    return DlcType::kTtsEnAu;
  if (enum_string == "ttsEnGb")
    return DlcType::kTtsEnGb;
  if (enum_string == "ttsEnUs")
    return DlcType::kTtsEnUs;
  if (enum_string == "ttsEsEs")
    return DlcType::kTtsEsEs;
  if (enum_string == "ttsEsUs")
    return DlcType::kTtsEsUs;
  if (enum_string == "ttsFiFi")
    return DlcType::kTtsFiFi;
  if (enum_string == "ttsFilPh")
    return DlcType::kTtsFilPh;
  if (enum_string == "ttsFrFr")
    return DlcType::kTtsFrFr;
  if (enum_string == "ttsHiIn")
    return DlcType::kTtsHiIn;
  if (enum_string == "ttsHuHu")
    return DlcType::kTtsHuHu;
  if (enum_string == "ttsIdId")
    return DlcType::kTtsIdId;
  if (enum_string == "ttsItIt")
    return DlcType::kTtsItIt;
  if (enum_string == "ttsJaJp")
    return DlcType::kTtsJaJp;
  if (enum_string == "ttsKmKh")
    return DlcType::kTtsKmKh;
  if (enum_string == "ttsKoKr")
    return DlcType::kTtsKoKr;
  if (enum_string == "ttsNbNo")
    return DlcType::kTtsNbNo;
  if (enum_string == "ttsNeNp")
    return DlcType::kTtsNeNp;
  if (enum_string == "ttsNlNl")
    return DlcType::kTtsNlNl;
  if (enum_string == "ttsPlPl")
    return DlcType::kTtsPlPl;
  if (enum_string == "ttsPtBr")
    return DlcType::kTtsPtBr;
  if (enum_string == "ttsPtPt")
    return DlcType::kTtsPtPt;
  if (enum_string == "ttsSiLk")
    return DlcType::kTtsSiLk;
  if (enum_string == "ttsSkSk")
    return DlcType::kTtsSkSk;
  if (enum_string == "ttsSvSe")
    return DlcType::kTtsSvSe;
  if (enum_string == "ttsThTh")
    return DlcType::kTtsThTh;
  if (enum_string == "ttsTrTr")
    return DlcType::kTtsTrTr;
  if (enum_string == "ttsUkUa")
    return DlcType::kTtsUkUa;
  if (enum_string == "ttsViVn")
    return DlcType::kTtsViVn;
  if (enum_string == "ttsYueHk")
    return DlcType::kTtsYueHk;
  return DlcType::kNone;
}

std::u16string GetDlcTypeParseError(base::StringPiece enum_string) {
  return u"expected \"ttsBnBd\" or \"ttsCsCz\" or \"ttsDaDk\" or \"ttsDeDe\" or \"ttsElGr\" or \"ttsEnAu\" or \"ttsEnGb\" or \"ttsEnUs\" or \"ttsEsEs\" or \"ttsEsUs\" or \"ttsFiFi\" or \"ttsFilPh\" or \"ttsFrFr\" or \"ttsHiIn\" or \"ttsHuHu\" or \"ttsIdId\" or \"ttsItIt\" or \"ttsJaJp\" or \"ttsKmKh\" or \"ttsKoKr\" or \"ttsNbNo\" or \"ttsNeNp\" or \"ttsNlNl\" or \"ttsPlPl\" or \"ttsPtBr\" or \"ttsPtPt\" or \"ttsSiLk\" or \"ttsSkSk\" or \"ttsSvSe\" or \"ttsThTh\" or \"ttsTrTr\" or \"ttsUkUa\" or \"ttsViVn\" or \"ttsYueHk\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(TtsVariant enum_param) {
  switch (enum_param) {
    case TtsVariant::kLite:
      return "lite";
    case TtsVariant::kStandard:
      return "standard";
    case TtsVariant::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

TtsVariant ParseTtsVariant(base::StringPiece enum_string) {
  if (enum_string == "lite")
    return TtsVariant::kLite;
  if (enum_string == "standard")
    return TtsVariant::kStandard;
  return TtsVariant::kNone;
}

std::u16string GetTtsVariantParseError(base::StringPiece enum_string) {
  return u"expected \"lite\" or \"standard\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


PumpkinData::PumpkinData()
 {}

PumpkinData::~PumpkinData() = default;
PumpkinData::PumpkinData(PumpkinData&& rhs) noexcept = default;
PumpkinData& PumpkinData::operator=(PumpkinData&& rhs) noexcept = default;
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
std::optional<PumpkinData> PumpkinData::FromValue(const base::Value::Dict& value) {
  PumpkinData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PumpkinData> PumpkinData::FromValue(const base::Value& value) {
  PumpkinData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
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
    const base::Value& enabled_value = args[0];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.enabled = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetNativeAccessibilityEnabled

namespace SetFocusRings {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& focus_rings_value = args[0];
    {
      if (!focus_rings_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(focus_rings_value.GetList(), params.focus_rings)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& at_type_value = args[1];
    {
      const std::string* assistive_technology_type_as_string = at_type_value.GetIfString();
      if (!assistive_technology_type_as_string) {
        return std::nullopt;
      }
      params.at_type = ParseAssistiveTechnologyType(*assistive_technology_type_as_string);
      if (params.at_type == AssistiveTechnologyType()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetFocusRings

namespace SetHighlights {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& rects_value = args[0];
    {
      if (!rects_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(rects_value.GetList(), params.rects)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& color_value = args[1];
    {
      auto* temp = color_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.color = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetHighlights

namespace SetKeyboardListener {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& enabled_value = args[0];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.enabled = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& capture_value = args[1];
    {
      auto temp = capture_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.capture = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetKeyboardListener

namespace DarkenScreen {

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
    const base::Value& darken_value = args[0];
    {
      auto temp = darken_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.darken = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace DarkenScreen

namespace ForwardKeyEventsToSwitchAccess {

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
    const base::Value& should_forward_value = args[0];
    {
      auto temp = should_forward_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.should_forward = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace ForwardKeyEventsToSwitchAccess

namespace UpdateSwitchAccessBubble {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 2 || args.size() > 4) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& bubble_value = args[0];
    {
      const std::string* switch_access_bubble_as_string = bubble_value.GetIfString();
      if (!switch_access_bubble_as_string) {
        return std::nullopt;
      }
      params.bubble = ParseSwitchAccessBubble(*switch_access_bubble_as_string);
      if (params.bubble == SwitchAccessBubble()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& show_value = args[1];
    {
      auto temp = show_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.show = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& anchor_value = args[2];
    {
      if (!anchor_value.is_dict()) {
        return std::nullopt;
      }
      else {
        ScreenRect temp;
        if (!ScreenRect::Populate(anchor_value.GetDict(), temp))
          return std::nullopt;
        params.anchor = std::move(temp);
      }
    }
  }

  if (3 < args.size() &&
      !args[3].is_none()) {
    const base::Value& actions_value = args[3];
    {
      if (!actions_value.is_list()) {
        return std::nullopt;
      }
      else {
        params.actions.emplace();
        for (const auto& it : (actions_value).GetList()) {
          SwitchAccessMenuAction tmp;
          const std::string* switch_access_menu_action_as_string = (it).GetIfString();
          if (!switch_access_menu_action_as_string) {
            return std::nullopt;
          }
          tmp = ParseSwitchAccessMenuAction(*switch_access_menu_action_as_string);
          if (tmp == SwitchAccessMenuAction()) {
            return std::nullopt;
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
    const base::Value& state_value = args[0];
    {
      const std::string* point_scan_state_as_string = state_value.GetIfString();
      if (!point_scan_state_as_string) {
        return std::nullopt;
      }
      params.state = ParsePointScanState(*point_scan_state_as_string);
      if (params.state == PointScanState()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetPointScanState

namespace SetNativeChromeVoxArcSupportForCurrentApp {

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
    const base::Value& enabled_value = args[0];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.enabled = *temp;
    }
  }
  else {
    return std::nullopt;
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
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& key_event_value = args[0];
    {
      if (!key_event_value.is_dict()) {
        return std::nullopt;
      }
      if (!SyntheticKeyboardEvent::Populate(key_event_value.GetDict(), params.key_event)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& use_rewriters_value = args[1];
    {
      auto temp = use_rewriters_value.GetIfBool();
      if (!temp.has_value()) {
        params.use_rewriters = std::nullopt;
        return std::nullopt;
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
    const base::Value& enabled_value = args[0];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.enabled = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace EnableMouseEvents

namespace SetCursorPosition {

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
    const base::Value& point_value = args[0];
    {
      if (!point_value.is_dict()) {
        return std::nullopt;
      }
      if (!ScreenPoint::Populate(point_value.GetDict(), params.point)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetCursorPosition

namespace SendSyntheticMouseEvent {

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
    const base::Value& mouse_event_value = args[0];
    {
      if (!mouse_event_value.is_dict()) {
        return std::nullopt;
      }
      if (!SyntheticMouseEvent::Populate(mouse_event_value.GetDict(), params.mouse_event)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SendSyntheticMouseEvent

namespace SetSelectToSpeakState {

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
    const base::Value& state_value = args[0];
    {
      const std::string* select_to_speak_state_as_string = state_value.GetIfString();
      if (!select_to_speak_state_as_string) {
        return std::nullopt;
      }
      params.state = ParseSelectToSpeakState(*select_to_speak_state_as_string);
      if (params.state == SelectToSpeakState()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetSelectToSpeakState

namespace ClipboardCopyInActiveLacrosGoogleDoc {

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
    const base::Value& url_value = args[0];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace ClipboardCopyInActiveLacrosGoogleDoc

namespace HandleScrollableBoundsForPointFound {

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
    const base::Value& rect_value = args[0];
    {
      if (!rect_value.is_dict()) {
        return std::nullopt;
      }
      if (!ScreenRect::Populate(rect_value.GetDict(), params.rect)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace HandleScrollableBoundsForPointFound

namespace MoveMagnifierToRect {

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
    const base::Value& rect_value = args[0];
    {
      if (!rect_value.is_dict()) {
        return std::nullopt;
      }
      if (!ScreenRect::Populate(rect_value.GetDict(), params.rect)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace MoveMagnifierToRect

namespace MagnifierCenterOnPoint {

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
    const base::Value& point_value = args[0];
    {
      if (!point_value.is_dict()) {
        return std::nullopt;
      }
      if (!ScreenPoint::Populate(point_value.GetDict(), params.point)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace MagnifierCenterOnPoint

namespace ToggleDictation {

}  // namespace ToggleDictation

namespace SetVirtualKeyboardVisible {

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
    const base::Value& is_visible_value = args[0];
    {
      auto temp = is_visible_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.is_visible = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetVirtualKeyboardVisible

namespace OpenSettingsSubpage {

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
    const base::Value& subpage_value = args[0];
    {
      auto* temp = subpage_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.subpage = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace OpenSettingsSubpage

namespace PerformAcceleratorAction {

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
    const base::Value& accelerator_action_value = args[0];
    {
      const std::string* accelerator_action_as_string = accelerator_action_value.GetIfString();
      if (!accelerator_action_as_string) {
        return std::nullopt;
      }
      params.accelerator_action = ParseAcceleratorAction(*accelerator_action_as_string);
      if (params.accelerator_action == AcceleratorAction()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace PerformAcceleratorAction

namespace IsFeatureEnabled {

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
    const base::Value& feature_value = args[0];
    {
      const std::string* accessibility_feature_as_string = feature_value.GetIfString();
      if (!accessibility_feature_as_string) {
        return std::nullopt;
      }
      params.feature = ParseAccessibilityFeature(*accessibility_feature_as_string);
      if (params.feature == AccessibilityFeature()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
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
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 4) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& show_value = args[0];
    {
      auto temp = show_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.show = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& anchor_value = args[1];
    {
      if (!anchor_value.is_dict()) {
        return std::nullopt;
      }
      else {
        ScreenRect temp;
        if (!ScreenRect::Populate(anchor_value.GetDict(), temp))
          return std::nullopt;
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
        params.is_paused = std::nullopt;
        return std::nullopt;
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
        params.speed = std::nullopt;
        return std::nullopt;
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
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 2 || args.size() > 3) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& title_value = args[0];
    {
      auto* temp = title_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.title = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& description_value = args[1];
    {
      auto* temp = description_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.description = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& cancel_name_value = args[2];
    {
      auto* temp = cancel_name_value.GetIfString();
      if (!temp) {
        params.cancel_name = std::nullopt;
        return std::nullopt;
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
    const base::Value& key_code_value = args[0];
    {
      auto temp = key_code_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.key_code = *temp;
    }
  }
  else {
    return std::nullopt;
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
    const base::Value& properties_value = args[0];
    {
      if (!properties_value.is_dict()) {
        return std::nullopt;
      }
      if (!DictationBubbleProperties::Populate(properties_value.GetDict(), params.properties)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace UpdateDictationBubble

namespace SilenceSpokenFeedback {

}  // namespace SilenceSpokenFeedback

namespace GetDlcContents {

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
    const base::Value& dlc_value = args[0];
    {
      const std::string* dlc_type_as_string = dlc_value.GetIfString();
      if (!dlc_type_as_string) {
        return std::nullopt;
      }
      params.dlc = ParseDlcType(*dlc_type_as_string);
      if (params.dlc == DlcType()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
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

namespace GetTtsDlcContents {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& dlc_value = args[0];
    {
      const std::string* dlc_type_as_string = dlc_value.GetIfString();
      if (!dlc_type_as_string) {
        return std::nullopt;
      }
      params.dlc = ParseDlcType(*dlc_type_as_string);
      if (params.dlc == DlcType()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& variant_value = args[1];
    {
      const std::string* tts_variant_as_string = variant_value.GetIfString();
      if (!tts_variant_as_string) {
        return std::nullopt;
      }
      params.variant = ParseTtsVariant(*tts_variant_as_string);
      if (params.variant == TtsVariant()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<uint8_t>& contents) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value(contents));

  return create_results;
}
}  // namespace GetTtsDlcContents

namespace GetDisplayBounds {

base::Value::List Results::Create(const std::vector<ScreenRect>& rects) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(rects));

  return create_results;
}
}  // namespace GetDisplayBounds

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
    const base::Value& type_value = args[0];
    {
      const std::string* toast_type_as_string = type_value.GetIfString();
      if (!toast_type_as_string) {
        return std::nullopt;
      }
      params.type = ParseToastType(*toast_type_as_string);
      if (params.type == ToastType()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
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

