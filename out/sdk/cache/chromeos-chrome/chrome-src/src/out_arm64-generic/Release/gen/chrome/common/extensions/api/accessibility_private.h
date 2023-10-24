// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/accessibility_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_ACCESSIBILITY_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_ACCESSIBILITY_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace accessibility_private {

//
// Properties
//

// Property to indicate whether event source should default to touch.
extern const int IS_DEFAULT_EVENT_SOURCE_TOUCH;

//
// Types
//

// Information about an alert
struct AlertInfo {
  AlertInfo();
  ~AlertInfo();
  AlertInfo(const AlertInfo&) = delete;
  AlertInfo& operator=(const AlertInfo&) = delete;
  AlertInfo(AlertInfo&& rhs);
  AlertInfo& operator=(AlertInfo&& rhs);

  // Populates a AlertInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, AlertInfo& out);

  // Populates a AlertInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, AlertInfo& out);

  // Creates a deep copy of AlertInfo.
  AlertInfo Clone() const;

  // Creates a AlertInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<AlertInfo> FromValueDeprecated(const base::Value& value);

  // Creates a AlertInfo object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<AlertInfo> FromValue(const base::Value::Dict& value);

  // Creates a AlertInfo object from a base::Value, or nullopt on failure.
  static absl::optional<AlertInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAlertInfo object.
  base::Value::Dict ToValue() const;

  // The message the alert is showing.
  std::string message;

};

// Bounding rectangle in global screen coordinates.
struct ScreenRect {
  ScreenRect();
  ~ScreenRect();
  ScreenRect(const ScreenRect&) = delete;
  ScreenRect& operator=(const ScreenRect&) = delete;
  ScreenRect(ScreenRect&& rhs);
  ScreenRect& operator=(ScreenRect&& rhs);

  // Populates a ScreenRect object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, ScreenRect& out);

  // Populates a ScreenRect object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ScreenRect& out);

  // Creates a deep copy of ScreenRect.
  ScreenRect Clone() const;

  // Creates a ScreenRect object from a base::Value, or NULL on failure.
  static std::unique_ptr<ScreenRect> FromValueDeprecated(const base::Value& value);

  // Creates a ScreenRect object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ScreenRect> FromValue(const base::Value::Dict& value);

  // Creates a ScreenRect object from a base::Value, or nullopt on failure.
  static absl::optional<ScreenRect> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisScreenRect object.
  base::Value::Dict ToValue() const;

  // Left coordinate in global screen coordinates.
  int left;

  // Top coordinate in global screen coordinates.
  int top;

  // Width in pixels.
  int width;

  // Height in pixels.
  int height;

};

// Point in global screen coordinates.
struct ScreenPoint {
  ScreenPoint();
  ~ScreenPoint();
  ScreenPoint(const ScreenPoint&) = delete;
  ScreenPoint& operator=(const ScreenPoint&) = delete;
  ScreenPoint(ScreenPoint&& rhs);
  ScreenPoint& operator=(ScreenPoint&& rhs);

  // Populates a ScreenPoint object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ScreenPoint& out);

  // Populates a ScreenPoint object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ScreenPoint& out);

  // Creates a deep copy of ScreenPoint.
  ScreenPoint Clone() const;

  // Creates a ScreenPoint object from a base::Value, or NULL on failure.
  static std::unique_ptr<ScreenPoint> FromValueDeprecated(const base::Value& value);

  // Creates a ScreenPoint object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ScreenPoint> FromValue(const base::Value::Dict& value);

  // Creates a ScreenPoint object from a base::Value, or nullopt on failure.
  static absl::optional<ScreenPoint> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisScreenPoint object.
  base::Value::Dict ToValue() const;

  // X coordinate in global screen coordinates.
  int x;

  // Y coordinate in global screen coordinates.
  int y;

};

// Accessibility gestures fired by the touch exploration controller.
enum  Gesture {
  GESTURE_NONE = 0,
  GESTURE_CLICK,
  GESTURE_SWIPELEFT1,
  GESTURE_SWIPEUP1,
  GESTURE_SWIPERIGHT1,
  GESTURE_SWIPEDOWN1,
  GESTURE_SWIPELEFT2,
  GESTURE_SWIPEUP2,
  GESTURE_SWIPERIGHT2,
  GESTURE_SWIPEDOWN2,
  GESTURE_SWIPELEFT3,
  GESTURE_SWIPEUP3,
  GESTURE_SWIPERIGHT3,
  GESTURE_SWIPEDOWN3,
  GESTURE_SWIPELEFT4,
  GESTURE_SWIPEUP4,
  GESTURE_SWIPERIGHT4,
  GESTURE_SWIPEDOWN4,
  GESTURE_TAP2,
  GESTURE_TAP3,
  GESTURE_TAP4,
  GESTURE_TOUCHEXPLORE,
  GESTURE_LAST = GESTURE_TOUCHEXPLORE,
};


const char* ToString(Gesture as_enum);
Gesture ParseGesture(base::StringPiece as_string);
std::u16string GetGestureParseError(base::StringPiece as_string);

// Commands for magnifier (e.g. move magnifier viewport up).
enum  MagnifierCommand {
  MAGNIFIER_COMMAND_NONE = 0,
  MAGNIFIER_COMMAND_MOVESTOP,
  MAGNIFIER_COMMAND_MOVEUP,
  MAGNIFIER_COMMAND_MOVEDOWN,
  MAGNIFIER_COMMAND_MOVELEFT,
  MAGNIFIER_COMMAND_MOVERIGHT,
  MAGNIFIER_COMMAND_LAST = MAGNIFIER_COMMAND_MOVERIGHT,
};


const char* ToString(MagnifierCommand as_enum);
MagnifierCommand ParseMagnifierCommand(base::StringPiece as_string);
std::u16string GetMagnifierCommandParseError(base::StringPiece as_string);

// Commands that can be triggered by switch activation.
enum  SwitchAccessCommand {
  SWITCH_ACCESS_COMMAND_NONE = 0,
  SWITCH_ACCESS_COMMAND_SELECT,
  SWITCH_ACCESS_COMMAND_NEXT,
  SWITCH_ACCESS_COMMAND_PREVIOUS,
  SWITCH_ACCESS_COMMAND_LAST = SWITCH_ACCESS_COMMAND_PREVIOUS,
};


const char* ToString(SwitchAccessCommand as_enum);
SwitchAccessCommand ParseSwitchAccessCommand(base::StringPiece as_string);
std::u16string GetSwitchAccessCommandParseError(base::StringPiece as_string);

// Point scanning states in Switch Access.
enum  PointScanState {
  POINT_SCAN_STATE_NONE = 0,
  POINT_SCAN_STATE_START,
  POINT_SCAN_STATE_STOP,
  POINT_SCAN_STATE_LAST = POINT_SCAN_STATE_STOP,
};


const char* ToString(PointScanState as_enum);
PointScanState ParsePointScanState(base::StringPiece as_string);
std::u16string GetPointScanStateParseError(base::StringPiece as_string);

// Different Switch Access bubbles that can be shown or hidden.
enum  SwitchAccessBubble {
  SWITCH_ACCESS_BUBBLE_NONE = 0,
  SWITCH_ACCESS_BUBBLE_BACKBUTTON,
  SWITCH_ACCESS_BUBBLE_MENU,
  SWITCH_ACCESS_BUBBLE_LAST = SWITCH_ACCESS_BUBBLE_MENU,
};


const char* ToString(SwitchAccessBubble as_enum);
SwitchAccessBubble ParseSwitchAccessBubble(base::StringPiece as_string);
std::u16string GetSwitchAccessBubbleParseError(base::StringPiece as_string);

struct PointScanPoint {
  PointScanPoint();
  ~PointScanPoint();
  PointScanPoint(const PointScanPoint&) = delete;
  PointScanPoint& operator=(const PointScanPoint&) = delete;
  PointScanPoint(PointScanPoint&& rhs);
  PointScanPoint& operator=(PointScanPoint&& rhs);

  // Populates a PointScanPoint object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PointScanPoint& out);

  // Populates a PointScanPoint object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PointScanPoint& out);

  // Creates a deep copy of PointScanPoint.
  PointScanPoint Clone() const;

  // Creates a PointScanPoint object from a base::Value, or NULL on failure.
  static std::unique_ptr<PointScanPoint> FromValueDeprecated(const base::Value& value);

  // Creates a PointScanPoint object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<PointScanPoint> FromValue(const base::Value::Dict& value);

  // Creates a PointScanPoint object from a base::Value, or nullopt on failure.
  static absl::optional<PointScanPoint> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPointScanPoint object.
  base::Value::Dict ToValue() const;

  // X coordinate of the selected point in DIPs.
  double x;

  // Y coordinate of the selected point in DIPs.
  double y;

};

// Available actions to be shown in the Switch Access menu. Must be kept in sync
// with the strings in
// ash/system/accessibility/switch_access/switch_access_menu_view.cc
enum  SwitchAccessMenuAction {
  SWITCH_ACCESS_MENU_ACTION_NONE = 0,
  SWITCH_ACCESS_MENU_ACTION_COPY,
  SWITCH_ACCESS_MENU_ACTION_CUT,
  SWITCH_ACCESS_MENU_ACTION_DECREMENT,
  SWITCH_ACCESS_MENU_ACTION_DICTATION,
  SWITCH_ACCESS_MENU_ACTION_ENDTEXTSELECTION,
  SWITCH_ACCESS_MENU_ACTION_INCREMENT,
  SWITCH_ACCESS_MENU_ACTION_ITEMSCAN,
  SWITCH_ACCESS_MENU_ACTION_JUMPTOBEGINNINGOFTEXT,
  SWITCH_ACCESS_MENU_ACTION_JUMPTOENDOFTEXT,
  SWITCH_ACCESS_MENU_ACTION_KEYBOARD,
  SWITCH_ACCESS_MENU_ACTION_LEFTCLICK,
  SWITCH_ACCESS_MENU_ACTION_MOVEBACKWARDONECHAROFTEXT,
  SWITCH_ACCESS_MENU_ACTION_MOVEBACKWARDONEWORDOFTEXT,
  SWITCH_ACCESS_MENU_ACTION_MOVECURSOR,
  SWITCH_ACCESS_MENU_ACTION_MOVEDOWNONELINEOFTEXT,
  SWITCH_ACCESS_MENU_ACTION_MOVEFORWARDONECHAROFTEXT,
  SWITCH_ACCESS_MENU_ACTION_MOVEFORWARDONEWORDOFTEXT,
  SWITCH_ACCESS_MENU_ACTION_MOVEUPONELINEOFTEXT,
  SWITCH_ACCESS_MENU_ACTION_PASTE,
  SWITCH_ACCESS_MENU_ACTION_POINTSCAN,
  SWITCH_ACCESS_MENU_ACTION_RIGHTCLICK,
  SWITCH_ACCESS_MENU_ACTION_SCROLLDOWN,
  SWITCH_ACCESS_MENU_ACTION_SCROLLLEFT,
  SWITCH_ACCESS_MENU_ACTION_SCROLLRIGHT,
  SWITCH_ACCESS_MENU_ACTION_SCROLLUP,
  SWITCH_ACCESS_MENU_ACTION_SELECT,
  SWITCH_ACCESS_MENU_ACTION_SETTINGS,
  SWITCH_ACCESS_MENU_ACTION_STARTTEXTSELECTION,
  SWITCH_ACCESS_MENU_ACTION_LAST = SWITCH_ACCESS_MENU_ACTION_STARTTEXTSELECTION,
};


const char* ToString(SwitchAccessMenuAction as_enum);
SwitchAccessMenuAction ParseSwitchAccessMenuAction(base::StringPiece as_string);
std::u16string GetSwitchAccessMenuActionParseError(base::StringPiece as_string);

// The event to send
enum  SyntheticKeyboardEventType {
  SYNTHETIC_KEYBOARD_EVENT_TYPE_NONE = 0,
  SYNTHETIC_KEYBOARD_EVENT_TYPE_KEYUP,
  SYNTHETIC_KEYBOARD_EVENT_TYPE_KEYDOWN,
  SYNTHETIC_KEYBOARD_EVENT_TYPE_LAST = SYNTHETIC_KEYBOARD_EVENT_TYPE_KEYDOWN,
};


const char* ToString(SyntheticKeyboardEventType as_enum);
SyntheticKeyboardEventType ParseSyntheticKeyboardEventType(base::StringPiece as_string);
std::u16string GetSyntheticKeyboardEventTypeParseError(base::StringPiece as_string);

struct SyntheticKeyboardModifiers {
  SyntheticKeyboardModifiers();
  ~SyntheticKeyboardModifiers();
  SyntheticKeyboardModifiers(const SyntheticKeyboardModifiers&) = delete;
  SyntheticKeyboardModifiers& operator=(const SyntheticKeyboardModifiers&) = delete;
  SyntheticKeyboardModifiers(SyntheticKeyboardModifiers&& rhs);
  SyntheticKeyboardModifiers& operator=(SyntheticKeyboardModifiers&& rhs);

  // Populates a SyntheticKeyboardModifiers object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SyntheticKeyboardModifiers& out);

  // Populates a SyntheticKeyboardModifiers object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SyntheticKeyboardModifiers& out);

  // Creates a deep copy of SyntheticKeyboardModifiers.
  SyntheticKeyboardModifiers Clone() const;

  // Creates a SyntheticKeyboardModifiers object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<SyntheticKeyboardModifiers> FromValueDeprecated(const base::Value& value);

  // Creates a SyntheticKeyboardModifiers object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<SyntheticKeyboardModifiers> FromValue(const base::Value::Dict& value);

  // Creates a SyntheticKeyboardModifiers object from a base::Value, or nullopt
  // on failure.
  static absl::optional<SyntheticKeyboardModifiers> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSyntheticKeyboardModifiers object.
  base::Value::Dict ToValue() const;

  // Control modifier.
  absl::optional<bool> ctrl;

  // alt modifier.
  absl::optional<bool> alt;

  // search modifier.
  absl::optional<bool> search;

  // shift modifier.
  absl::optional<bool> shift;

};

struct SyntheticKeyboardEvent {
  SyntheticKeyboardEvent();
  ~SyntheticKeyboardEvent();
  SyntheticKeyboardEvent(const SyntheticKeyboardEvent&) = delete;
  SyntheticKeyboardEvent& operator=(const SyntheticKeyboardEvent&) = delete;
  SyntheticKeyboardEvent(SyntheticKeyboardEvent&& rhs);
  SyntheticKeyboardEvent& operator=(SyntheticKeyboardEvent&& rhs);

  // Populates a SyntheticKeyboardEvent object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SyntheticKeyboardEvent& out);

  // Populates a SyntheticKeyboardEvent object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SyntheticKeyboardEvent& out);

  // Creates a deep copy of SyntheticKeyboardEvent.
  SyntheticKeyboardEvent Clone() const;

  // Creates a SyntheticKeyboardEvent object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<SyntheticKeyboardEvent> FromValueDeprecated(const base::Value& value);

  // Creates a SyntheticKeyboardEvent object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<SyntheticKeyboardEvent> FromValue(const base::Value::Dict& value);

  // Creates a SyntheticKeyboardEvent object from a base::Value, or nullopt on
  // failure.
  static absl::optional<SyntheticKeyboardEvent> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSyntheticKeyboardEvent object.
  base::Value::Dict ToValue() const;

  SyntheticKeyboardEventType type;

  // Virtual key code, which is independent of the keyboard layout or modifier
  // state.
  int key_code;

  // Contains all active modifiers.
  absl::optional<SyntheticKeyboardModifiers> modifiers;

};

// The type of event to send
enum  SyntheticMouseEventType {
  SYNTHETIC_MOUSE_EVENT_TYPE_NONE = 0,
  SYNTHETIC_MOUSE_EVENT_TYPE_PRESS,
  SYNTHETIC_MOUSE_EVENT_TYPE_RELEASE,
  SYNTHETIC_MOUSE_EVENT_TYPE_DRAG,
  SYNTHETIC_MOUSE_EVENT_TYPE_MOVE,
  SYNTHETIC_MOUSE_EVENT_TYPE_ENTER,
  SYNTHETIC_MOUSE_EVENT_TYPE_EXIT,
  SYNTHETIC_MOUSE_EVENT_TYPE_LAST = SYNTHETIC_MOUSE_EVENT_TYPE_EXIT,
};


const char* ToString(SyntheticMouseEventType as_enum);
SyntheticMouseEventType ParseSyntheticMouseEventType(base::StringPiece as_string);
std::u16string GetSyntheticMouseEventTypeParseError(base::StringPiece as_string);

// The button to send event on
enum  SyntheticMouseEventButton {
  SYNTHETIC_MOUSE_EVENT_BUTTON_NONE = 0,
  SYNTHETIC_MOUSE_EVENT_BUTTON_LEFT,
  SYNTHETIC_MOUSE_EVENT_BUTTON_MIDDLE,
  SYNTHETIC_MOUSE_EVENT_BUTTON_RIGHT,
  SYNTHETIC_MOUSE_EVENT_BUTTON_BACK,
  SYNTHETIC_MOUSE_EVENT_BUTTON_FOWARD,
  SYNTHETIC_MOUSE_EVENT_BUTTON_LAST = SYNTHETIC_MOUSE_EVENT_BUTTON_FOWARD,
};


const char* ToString(SyntheticMouseEventButton as_enum);
SyntheticMouseEventButton ParseSyntheticMouseEventButton(base::StringPiece as_string);
std::u16string GetSyntheticMouseEventButtonParseError(base::StringPiece as_string);

struct SyntheticMouseEvent {
  SyntheticMouseEvent();
  ~SyntheticMouseEvent();
  SyntheticMouseEvent(const SyntheticMouseEvent&) = delete;
  SyntheticMouseEvent& operator=(const SyntheticMouseEvent&) = delete;
  SyntheticMouseEvent(SyntheticMouseEvent&& rhs);
  SyntheticMouseEvent& operator=(SyntheticMouseEvent&& rhs);

  // Populates a SyntheticMouseEvent object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SyntheticMouseEvent& out);

  // Populates a SyntheticMouseEvent object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SyntheticMouseEvent& out);

  // Creates a deep copy of SyntheticMouseEvent.
  SyntheticMouseEvent Clone() const;

  // Creates a SyntheticMouseEvent object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<SyntheticMouseEvent> FromValueDeprecated(const base::Value& value);

  // Creates a SyntheticMouseEvent object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<SyntheticMouseEvent> FromValue(const base::Value::Dict& value);

  // Creates a SyntheticMouseEvent object from a base::Value, or nullopt on
  // failure.
  static absl::optional<SyntheticMouseEvent> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSyntheticMouseEvent object.
  base::Value::Dict ToValue() const;

  SyntheticMouseEventType type;

  // X coordinate for mouse event in global screen coordinates
  int x;

  // Y coordinate for mouse event in global screen coordinates
  int y;

  // True if the touch accessibility flag should be set.
  absl::optional<bool> touch_accessibility;

  // The default mouse button is set to left if mouseButton is not specified.
  SyntheticMouseEventButton mouse_button;

};

// The state of the Select-to-Speak extension
enum  SelectToSpeakState {
  SELECT_TO_SPEAK_STATE_NONE = 0,
  SELECT_TO_SPEAK_STATE_SELECTING,
  SELECT_TO_SPEAK_STATE_SPEAKING,
  SELECT_TO_SPEAK_STATE_INACTIVE,
  SELECT_TO_SPEAK_STATE_LAST = SELECT_TO_SPEAK_STATE_INACTIVE,
};


const char* ToString(SelectToSpeakState as_enum);
SelectToSpeakState ParseSelectToSpeakState(base::StringPiece as_string);
std::u16string GetSelectToSpeakStateParseError(base::StringPiece as_string);

// The type of visual appearance for the focus ring.
enum  FocusType {
  FOCUS_TYPE_NONE = 0,
  FOCUS_TYPE_GLOW,
  FOCUS_TYPE_SOLID,
  FOCUS_TYPE_DASHED,
  FOCUS_TYPE_LAST = FOCUS_TYPE_DASHED,
};


const char* ToString(FocusType as_enum);
FocusType ParseFocusType(base::StringPiece as_string);
std::u16string GetFocusTypeParseError(base::StringPiece as_string);

// Whether to stack focus rings above or below accessibility bubble panels.
// Note: focus rings will be stacked above most other UI in either case
enum  FocusRingStackingOrder {
  FOCUS_RING_STACKING_ORDER_NONE = 0,
  FOCUS_RING_STACKING_ORDER_ABOVEACCESSIBILITYBUBBLES,
  FOCUS_RING_STACKING_ORDER_BELOWACCESSIBILITYBUBBLES,
  FOCUS_RING_STACKING_ORDER_LAST = FOCUS_RING_STACKING_ORDER_BELOWACCESSIBILITYBUBBLES,
};


const char* ToString(FocusRingStackingOrder as_enum);
FocusRingStackingOrder ParseFocusRingStackingOrder(base::StringPiece as_string);
std::u16string GetFocusRingStackingOrderParseError(base::StringPiece as_string);

// The assistive technology type of this extension.
enum  AssistiveTechnologyType {
  ASSISTIVE_TECHNOLOGY_TYPE_NONE = 0,
  ASSISTIVE_TECHNOLOGY_TYPE_CHROMEVOX,
  ASSISTIVE_TECHNOLOGY_TYPE_SELECTTOSPEAK,
  ASSISTIVE_TECHNOLOGY_TYPE_SWITCHACCESS,
  ASSISTIVE_TECHNOLOGY_TYPE_AUTOCLICK,
  ASSISTIVE_TECHNOLOGY_TYPE_MAGNIFIER,
  ASSISTIVE_TECHNOLOGY_TYPE_DICTATION,
  ASSISTIVE_TECHNOLOGY_TYPE_LAST = ASSISTIVE_TECHNOLOGY_TYPE_DICTATION,
};


const char* ToString(AssistiveTechnologyType as_enum);
AssistiveTechnologyType ParseAssistiveTechnologyType(base::StringPiece as_string);
std::u16string GetAssistiveTechnologyTypeParseError(base::StringPiece as_string);

struct FocusRingInfo {
  FocusRingInfo();
  ~FocusRingInfo();
  FocusRingInfo(const FocusRingInfo&) = delete;
  FocusRingInfo& operator=(const FocusRingInfo&) = delete;
  FocusRingInfo(FocusRingInfo&& rhs);
  FocusRingInfo& operator=(FocusRingInfo&& rhs);

  // Populates a FocusRingInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, FocusRingInfo& out);

  // Populates a FocusRingInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, FocusRingInfo& out);

  // Creates a deep copy of FocusRingInfo.
  FocusRingInfo Clone() const;

  // Creates a FocusRingInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<FocusRingInfo> FromValueDeprecated(const base::Value& value);

  // Creates a FocusRingInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<FocusRingInfo> FromValue(const base::Value::Dict& value);

  // Creates a FocusRingInfo object from a base::Value, or nullopt on failure.
  static absl::optional<FocusRingInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisFocusRingInfo object.
  base::Value::Dict ToValue() const;

  // Array of rectangles to draw the accessibility focus ring around.
  std::vector<ScreenRect> rects;

  // The FocusType for the ring.
  FocusType type;

  // A RGB hex-value color string (e.g. #3F8213) that describes the primary color
  // of the focus ring.
  std::string color;

  // A RGB hex-value color string (e.g. #3F82E4) that describes the secondary
  // color of the focus ring, if there is one.
  absl::optional<std::string> secondary_color;

  // A RGB hex-value color string (e.g. #803F82E4) that describes the color drawn
  // outside of the focus ring and over the rest of the display.
  absl::optional<std::string> background_color;

  // The FocusType for the ring.
  FocusRingStackingOrder stacking_order;

  // An identifier for this focus ring, unique within the extension.
  absl::optional<std::string> id;

};

// A subset of accelerator actions used by accessibility.
enum  AcceleratorAction {
  ACCELERATOR_ACTION_NONE = 0,
  ACCELERATOR_ACTION_FOCUSPREVIOUSPANE,
  ACCELERATOR_ACTION_FOCUSNEXTPANE,
  ACCELERATOR_ACTION_LAST = ACCELERATOR_ACTION_FOCUSNEXTPANE,
};


const char* ToString(AcceleratorAction as_enum);
AcceleratorAction ParseAcceleratorAction(base::StringPiece as_string);
std::u16string GetAcceleratorActionParseError(base::StringPiece as_string);

// Subset of accessibility features.
enum  AccessibilityFeature {
  ACCESSIBILITY_FEATURE_NONE = 0,
  ACCESSIBILITY_FEATURE_GOOGLETTSLANGUAGEPACKS,
  ACCESSIBILITY_FEATURE_DICTATIONCONTEXTCHECKING,
  ACCESSIBILITY_FEATURE_GAMEFACEINTEGRATION,
  ACCESSIBILITY_FEATURE_GOOGLETTSHIGHQUALITYVOICES,
  ACCESSIBILITY_FEATURE_LAST = ACCESSIBILITY_FEATURE_GOOGLETTSHIGHQUALITYVOICES,
};


const char* ToString(AccessibilityFeature as_enum);
AccessibilityFeature ParseAccessibilityFeature(base::StringPiece as_string);
std::u16string GetAccessibilityFeatureParseError(base::StringPiece as_string);

// Actions that can be performed in the Select-to-speak panel.
enum  SelectToSpeakPanelAction {
  SELECT_TO_SPEAK_PANEL_ACTION_NONE = 0,
  SELECT_TO_SPEAK_PANEL_ACTION_PREVIOUSPARAGRAPH,
  SELECT_TO_SPEAK_PANEL_ACTION_PREVIOUSSENTENCE,
  SELECT_TO_SPEAK_PANEL_ACTION_PAUSE,
  SELECT_TO_SPEAK_PANEL_ACTION_RESUME,
  SELECT_TO_SPEAK_PANEL_ACTION_NEXTSENTENCE,
  SELECT_TO_SPEAK_PANEL_ACTION_NEXTPARAGRAPH,
  SELECT_TO_SPEAK_PANEL_ACTION_EXIT,
  SELECT_TO_SPEAK_PANEL_ACTION_CHANGESPEED,
  SELECT_TO_SPEAK_PANEL_ACTION_LAST = SELECT_TO_SPEAK_PANEL_ACTION_CHANGESPEED,
};


const char* ToString(SelectToSpeakPanelAction as_enum);
SelectToSpeakPanelAction ParseSelectToSpeakPanelAction(base::StringPiece as_string);
std::u16string GetSelectToSpeakPanelActionParseError(base::StringPiece as_string);

// Response code for onNativeChromeVoxArcSupportResult
enum  SetNativeChromeVoxResponse {
  SET_NATIVE_CHROME_VOX_RESPONSE_NONE = 0,
  SET_NATIVE_CHROME_VOX_RESPONSE_SUCCESS,
  SET_NATIVE_CHROME_VOX_RESPONSE_TALKBACKNOTINSTALLED,
  SET_NATIVE_CHROME_VOX_RESPONSE_WINDOWNOTFOUND,
  SET_NATIVE_CHROME_VOX_RESPONSE_FAILURE,
  SET_NATIVE_CHROME_VOX_RESPONSE_NEEDDEPRECATIONCONFIRMATION,
  SET_NATIVE_CHROME_VOX_RESPONSE_LAST = SET_NATIVE_CHROME_VOX_RESPONSE_NEEDDEPRECATIONCONFIRMATION,
};


const char* ToString(SetNativeChromeVoxResponse as_enum);
SetNativeChromeVoxResponse ParseSetNativeChromeVoxResponse(base::StringPiece as_string);
std::u16string GetSetNativeChromeVoxResponseParseError(base::StringPiece as_string);

// The icon shown in the Dictation bubble UI.
enum  DictationBubbleIconType {
  DICTATION_BUBBLE_ICON_TYPE_NONE = 0,
  DICTATION_BUBBLE_ICON_TYPE_HIDDEN,
  DICTATION_BUBBLE_ICON_TYPE_STANDBY,
  DICTATION_BUBBLE_ICON_TYPE_MACROSUCCESS,
  DICTATION_BUBBLE_ICON_TYPE_MACROFAIL,
  DICTATION_BUBBLE_ICON_TYPE_LAST = DICTATION_BUBBLE_ICON_TYPE_MACROFAIL,
};


const char* ToString(DictationBubbleIconType as_enum);
DictationBubbleIconType ParseDictationBubbleIconType(base::StringPiece as_string);
std::u16string GetDictationBubbleIconTypeParseError(base::StringPiece as_string);

// Types of hints displayed in the Dictation bubble UI.
enum  DictationBubbleHintType {
  DICTATION_BUBBLE_HINT_TYPE_NONE = 0,
  DICTATION_BUBBLE_HINT_TYPE_TRYSAYING,
  DICTATION_BUBBLE_HINT_TYPE_TYPE,
  DICTATION_BUBBLE_HINT_TYPE_DELETE,
  DICTATION_BUBBLE_HINT_TYPE_SELECTALL,
  DICTATION_BUBBLE_HINT_TYPE_UNDO,
  DICTATION_BUBBLE_HINT_TYPE_HELP,
  DICTATION_BUBBLE_HINT_TYPE_UNSELECT,
  DICTATION_BUBBLE_HINT_TYPE_COPY,
  DICTATION_BUBBLE_HINT_TYPE_LAST = DICTATION_BUBBLE_HINT_TYPE_COPY,
};


const char* ToString(DictationBubbleHintType as_enum);
DictationBubbleHintType ParseDictationBubbleHintType(base::StringPiece as_string);
std::u16string GetDictationBubbleHintTypeParseError(base::StringPiece as_string);

struct DictationBubbleProperties {
  DictationBubbleProperties();
  ~DictationBubbleProperties();
  DictationBubbleProperties(const DictationBubbleProperties&) = delete;
  DictationBubbleProperties& operator=(const DictationBubbleProperties&) = delete;
  DictationBubbleProperties(DictationBubbleProperties&& rhs);
  DictationBubbleProperties& operator=(DictationBubbleProperties&& rhs);

  // Populates a DictationBubbleProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DictationBubbleProperties& out);

  // Populates a DictationBubbleProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DictationBubbleProperties& out);

  // Creates a deep copy of DictationBubbleProperties.
  DictationBubbleProperties Clone() const;

  // Creates a DictationBubbleProperties object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<DictationBubbleProperties> FromValueDeprecated(const base::Value& value);

  // Creates a DictationBubbleProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<DictationBubbleProperties> FromValue(const base::Value::Dict& value);

  // Creates a DictationBubbleProperties object from a base::Value, or nullopt
  // on failure.
  static absl::optional<DictationBubbleProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDictationBubbleProperties object.
  base::Value::Dict ToValue() const;

  // Whether or not the UI should be visible.
  bool visible;

  // The icon to show in the Dictation bubble UI.
  DictationBubbleIconType icon;

  // The text to be displayed in the bubble UI. If `text` is undefined, the bubble
  // will clear its current text.
  absl::optional<std::string> text;

  // Array of hints to show in the UI.
  absl::optional<std::vector<DictationBubbleHintType>> hints;

};

enum  ToastType {
  TOAST_TYPE_NONE = 0,
  TOAST_TYPE_DICTATIONNOFOCUSEDTEXTFIELD,
  TOAST_TYPE_DICTATIONMICMUTED,
  TOAST_TYPE_LAST = TOAST_TYPE_DICTATIONMICMUTED,
};


const char* ToString(ToastType as_enum);
ToastType ParseToastType(base::StringPiece as_string);
std::u16string GetToastTypeParseError(base::StringPiece as_string);

// Types of accessibility-specific DLCs.
enum  DlcType {
  DLC_TYPE_NONE = 0,
  DLC_TYPE_TTSBNBD,
  DLC_TYPE_TTSCSCZ,
  DLC_TYPE_TTSDADK,
  DLC_TYPE_TTSDEDE,
  DLC_TYPE_TTSELGR,
  DLC_TYPE_TTSENAU,
  DLC_TYPE_TTSENGB,
  DLC_TYPE_TTSENUS,
  DLC_TYPE_TTSESES,
  DLC_TYPE_TTSESUS,
  DLC_TYPE_TTSFIFI,
  DLC_TYPE_TTSFILPH,
  DLC_TYPE_TTSFRFR,
  DLC_TYPE_TTSHIIN,
  DLC_TYPE_TTSHUHU,
  DLC_TYPE_TTSIDID,
  DLC_TYPE_TTSITIT,
  DLC_TYPE_TTSJAJP,
  DLC_TYPE_TTSKMKH,
  DLC_TYPE_TTSKOKR,
  DLC_TYPE_TTSNBNO,
  DLC_TYPE_TTSNENP,
  DLC_TYPE_TTSNLNL,
  DLC_TYPE_TTSPLPL,
  DLC_TYPE_TTSPTBR,
  DLC_TYPE_TTSSILK,
  DLC_TYPE_TTSSKSK,
  DLC_TYPE_TTSSVSE,
  DLC_TYPE_TTSTHTH,
  DLC_TYPE_TTSTRTR,
  DLC_TYPE_TTSUKUA,
  DLC_TYPE_TTSVIVN,
  DLC_TYPE_TTSYUEHK,
  DLC_TYPE_LAST = DLC_TYPE_TTSYUEHK,
};


const char* ToString(DlcType as_enum);
DlcType ParseDlcType(base::StringPiece as_string);
std::u16string GetDlcTypeParseError(base::StringPiece as_string);

struct PumpkinData {
  PumpkinData();
  ~PumpkinData();
  PumpkinData(const PumpkinData&) = delete;
  PumpkinData& operator=(const PumpkinData&) = delete;
  PumpkinData(PumpkinData&& rhs);
  PumpkinData& operator=(PumpkinData&& rhs);

  // Populates a PumpkinData object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PumpkinData& out);

  // Populates a PumpkinData object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, PumpkinData& out);

  // Creates a deep copy of PumpkinData.
  PumpkinData Clone() const;

  // Creates a PumpkinData object from a base::Value, or NULL on failure.
  static std::unique_ptr<PumpkinData> FromValueDeprecated(const base::Value& value);

  // Creates a PumpkinData object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<PumpkinData> FromValue(const base::Value::Dict& value);

  // Creates a PumpkinData object from a base::Value, or nullopt on failure.
  static absl::optional<PumpkinData> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPumpkinData object.
  base::Value::Dict ToValue() const;

  // The contents of the file as a Uint8Array.
  std::vector<uint8_t> js_pumpkin_tagger_bin_js;

  // The contents of the file as a Uint8Array.
  std::vector<uint8_t> tagger_wasm_main_js;

  // The contents of the file as a Uint8Array.
  std::vector<uint8_t> tagger_wasm_main_wasm;

  // The contents of the file as a Uint8Array.
  std::vector<uint8_t> en_us_action_config_binarypb;

  // The contents of the file as a Uint8Array.
  std::vector<uint8_t> en_us_pumpkin_config_binarypb;

  // The contents of the file as a Uint8Array.
  std::vector<uint8_t> fr_fr_action_config_binarypb;

  // The contents of the file as a Uint8Array.
  std::vector<uint8_t> fr_fr_pumpkin_config_binarypb;

  // The contents of the file as a Uint8Array.
  std::vector<uint8_t> it_it_action_config_binarypb;

  // The contents of the file as a Uint8Array.
  std::vector<uint8_t> it_it_pumpkin_config_binarypb;

  // The contents of the file as a Uint8Array.
  std::vector<uint8_t> de_de_action_config_binarypb;

  // The contents of the file as a Uint8Array.
  std::vector<uint8_t> de_de_pumpkin_config_binarypb;

  // The contents of the file as a Uint8Array.
  std::vector<uint8_t> es_es_action_config_binarypb;

  // The contents of the file as a Uint8Array.
  std::vector<uint8_t> es_es_pumpkin_config_binarypb;

};


//
// Functions
//

namespace GetBatteryDescription {

namespace Results {

base::Value::List Create(const std::string& battery_description);
}  // namespace Results

}  // namespace GetBatteryDescription

namespace InstallPumpkinForDictation {

namespace Results {

base::Value::List Create(const PumpkinData& data);
}  // namespace Results

}  // namespace InstallPumpkinForDictation

namespace SetNativeAccessibilityEnabled {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // True if native accessibility support should be enabled.
  bool enabled;


 private:
  Params();
};

}  // namespace SetNativeAccessibilityEnabled

namespace SetFocusRings {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Array of focus rings to draw.
  std::vector<FocusRingInfo> focus_rings;

  // Associates these focus rings with this feature type.
  AssistiveTechnologyType at_type;


 private:
  Params();
};

}  // namespace SetFocusRings

namespace SetHighlights {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Array of rectangles to draw the highlight around.
  std::vector<ScreenRect> rects;

  // CSS-style hex color string beginning with # like #FF9982 or #EEE.
  std::string color;


 private:
  Params();
};

}  // namespace SetHighlights

namespace SetKeyboardListener {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // True if the caller wants to listen to key events; false to stop listening to
  // events. Note that there is only ever one extension listening to key events.
  bool enabled;

  // True if key events should be swallowed natively and not propagated if
  // preventDefault() gets called by the extension's background page.
  bool capture;


 private:
  Params();
};

}  // namespace SetKeyboardListener

namespace DarkenScreen {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // True to darken screen; false to undarken screen.
  bool darken;


 private:
  Params();
};

}  // namespace DarkenScreen

namespace ForwardKeyEventsToSwitchAccess {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  bool should_forward;


 private:
  Params();
};

}  // namespace ForwardKeyEventsToSwitchAccess

namespace UpdateSwitchAccessBubble {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Which bubble to show/hide
  SwitchAccessBubble bubble;

  // True if the bubble should be shown, false otherwise
  bool show;

  // A rectangle indicating the bounds of the object the menu should be displayed
  // next to.
  absl::optional<ScreenRect> anchor;

  // The actions to be shown in the menu.
  absl::optional<std::vector<SwitchAccessMenuAction>> actions;


 private:
  Params();
};

}  // namespace UpdateSwitchAccessBubble

namespace SetPointScanState {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The point scanning state to set.
  PointScanState state;


 private:
  Params();
};

}  // namespace SetPointScanState

namespace SetNativeChromeVoxArcSupportForCurrentApp {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // True for ChromeVox (native), false for TalkBack.
  bool enabled;


 private:
  Params();
};

namespace Results {

// Return Success if successfully toggled. Return error description otherwise.
base::Value::List Create(const SetNativeChromeVoxResponse& response);
}  // namespace Results

}  // namespace SetNativeChromeVoxArcSupportForCurrentApp

namespace SendSyntheticKeyEvent {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The event to send.
  SyntheticKeyboardEvent key_event;

  // If true, uses rewriters for the key event; only allowed if used from
  // Dictation. Otherwise indicates that rewriters should be skipped.
  absl::optional<bool> use_rewriters;


 private:
  Params();
};

}  // namespace SendSyntheticKeyEvent

namespace EnableMouseEvents {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // True if accessibility component extensions should receive mouse events.
  bool enabled;


 private:
  Params();
};

}  // namespace EnableMouseEvents

namespace SendSyntheticMouseEvent {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The event to send.
  SyntheticMouseEvent mouse_event;


 private:
  Params();
};

}  // namespace SendSyntheticMouseEvent

namespace SetSelectToSpeakState {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  SelectToSpeakState state;


 private:
  Params();
};

}  // namespace SetSelectToSpeakState

namespace ClipboardCopyInActiveLacrosGoogleDoc {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // URL of the Google Docs tab.
  std::string url;


 private:
  Params();
};

}  // namespace ClipboardCopyInActiveLacrosGoogleDoc

namespace HandleScrollableBoundsForPointFound {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  ScreenRect rect;


 private:
  Params();
};

}  // namespace HandleScrollableBoundsForPointFound

namespace MoveMagnifierToRect {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Rect to ensure visible in the magnified viewport.
  ScreenRect rect;


 private:
  Params();
};

}  // namespace MoveMagnifierToRect

namespace MagnifierCenterOnPoint {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  ScreenPoint point;


 private:
  Params();
};

}  // namespace MagnifierCenterOnPoint

namespace ToggleDictation {

}  // namespace ToggleDictation

namespace SetVirtualKeyboardVisible {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  bool is_visible;


 private:
  Params();
};

}  // namespace SetVirtualKeyboardVisible

namespace OpenSettingsSubpage {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string subpage;


 private:
  Params();
};

}  // namespace OpenSettingsSubpage

namespace PerformAcceleratorAction {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  AcceleratorAction accelerator_action;


 private:
  Params();
};

}  // namespace PerformAcceleratorAction

namespace IsFeatureEnabled {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  AccessibilityFeature feature;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool feature_enabled);
}  // namespace Results

}  // namespace IsFeatureEnabled

namespace UpdateSelectToSpeakPanel {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // True to show panel, false to hide it
  bool show;

  // A rectangle indicating the bounds of the object the panel should be displayed
  // next to.
  absl::optional<ScreenRect> anchor;

  // True if Select-to-speak playback is paused.
  absl::optional<bool> is_paused;

  // Current reading speed (TTS speech rate).
  absl::optional<double> speed;


 private:
  Params();
};

}  // namespace UpdateSelectToSpeakPanel

namespace ShowConfirmationDialog {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The title of the confirmation dialog.
  std::string title;

  // The description to show within the confirmation dialog.
  std::string description;

  // The human-readable name of the cancel button.
  absl::optional<std::string> cancel_name;


 private:
  Params();
};

namespace Results {

// True if the dialog was confirmed, false if it was canceled or closed.
base::Value::List Create(bool confirmed);
}  // namespace Results

}  // namespace ShowConfirmationDialog

namespace GetLocalizedDomKeyStringForKeyCode {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  int key_code;


 private:
  Params();
};

namespace Results {

// The dom key string localized for the current input method.
base::Value::List Create(const std::string& dom_key_string);
}  // namespace Results

}  // namespace GetLocalizedDomKeyStringForKeyCode

namespace UpdateDictationBubble {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Properties for the updated Dictation bubble UI.
  DictationBubbleProperties properties;


 private:
  Params();
};

}  // namespace UpdateDictationBubble

namespace SilenceSpokenFeedback {

}  // namespace SilenceSpokenFeedback

namespace GetDlcContents {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The DLC of interest.
  DlcType dlc;


 private:
  Params();
};

namespace Results {

// The contents of the DLC as a Uint8Array.
base::Value::List Create(const std::vector<uint8_t>& contents);
}  // namespace Results

}  // namespace GetDlcContents

namespace IsLacrosPrimary {

namespace Results {

// True if new browser windows and tabs should be in Lacros.
base::Value::List Create(bool use_lacros);
}  // namespace Results

}  // namespace IsLacrosPrimary

namespace ShowToast {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The type of toast to show.
  ToastType type;


 private:
  Params();
};

}  // namespace ShowToast

//
// Events
//

namespace OnIntroduceChromeVox {

extern const char kEventName[];  // "accessibilityPrivate.onIntroduceChromeVox"

base::Value::List Create();
}  // namespace OnIntroduceChromeVox

namespace OnAccessibilityGesture {

extern const char kEventName[];  // "accessibilityPrivate.onAccessibilityGesture"

base::Value::List Create(const Gesture& gesture, int x, int y);
}  // namespace OnAccessibilityGesture

namespace OnTwoFingerTouchStart {

extern const char kEventName[];  // "accessibilityPrivate.onTwoFingerTouchStart"

base::Value::List Create();
}  // namespace OnTwoFingerTouchStart

namespace OnTwoFingerTouchStop {

extern const char kEventName[];  // "accessibilityPrivate.onTwoFingerTouchStop"

base::Value::List Create();
}  // namespace OnTwoFingerTouchStop

namespace OnSelectToSpeakContextMenuClicked {

extern const char kEventName[];  // "accessibilityPrivate.onSelectToSpeakContextMenuClicked"

base::Value::List Create();
}  // namespace OnSelectToSpeakContextMenuClicked

namespace OnSelectToSpeakStateChangeRequested {

extern const char kEventName[];  // "accessibilityPrivate.onSelectToSpeakStateChangeRequested"

base::Value::List Create();
}  // namespace OnSelectToSpeakStateChangeRequested

namespace OnSelectToSpeakKeysPressedChanged {

extern const char kEventName[];  // "accessibilityPrivate.onSelectToSpeakKeysPressedChanged"

// List of key codes that are currently pressed
base::Value::List Create(const std::vector<int>& key_codes);
}  // namespace OnSelectToSpeakKeysPressedChanged

namespace OnSelectToSpeakMouseChanged {

extern const char kEventName[];  // "accessibilityPrivate.onSelectToSpeakMouseChanged"

// The type of the mouse event.
// The mouse x position in global coordinates.
// The mouse y position in global coordinates.
base::Value::List Create(const SyntheticMouseEventType& type, int x, int y);
}  // namespace OnSelectToSpeakMouseChanged

namespace OnSelectToSpeakPanelAction {

extern const char kEventName[];  // "accessibilityPrivate.onSelectToSpeakPanelAction"

base::Value::List Create(const SelectToSpeakPanelAction& action, double value);
}  // namespace OnSelectToSpeakPanelAction

namespace OnSwitchAccessCommand {

extern const char kEventName[];  // "accessibilityPrivate.onSwitchAccessCommand"

base::Value::List Create(const SwitchAccessCommand& command);
}  // namespace OnSwitchAccessCommand

namespace OnPointScanSet {

extern const char kEventName[];  // "accessibilityPrivate.onPointScanSet"

base::Value::List Create(const PointScanPoint& point);
}  // namespace OnPointScanSet

namespace OnMagnifierCommand {

extern const char kEventName[];  // "accessibilityPrivate.onMagnifierCommand"

base::Value::List Create(const MagnifierCommand& command);
}  // namespace OnMagnifierCommand

namespace OnAnnounceForAccessibility {

extern const char kEventName[];  // "accessibilityPrivate.onAnnounceForAccessibility"

// Text to be announced.
base::Value::List Create(const std::vector<std::string>& announce_text);
}  // namespace OnAnnounceForAccessibility

namespace OnScrollableBoundsForPointRequested {

extern const char kEventName[];  // "accessibilityPrivate.onScrollableBoundsForPointRequested"

// X screen coordinate of the point.
// Y screen coordinate of the point.
base::Value::List Create(double x, double y);
}  // namespace OnScrollableBoundsForPointRequested

namespace OnMagnifierBoundsChanged {

extern const char kEventName[];  // "accessibilityPrivate.onMagnifierBoundsChanged"

// Updated bounds of magnifier viewport.
base::Value::List Create(const ScreenRect& magnifier_bounds);
}  // namespace OnMagnifierBoundsChanged

namespace OnCustomSpokenFeedbackToggled {

extern const char kEventName[];  // "accessibilityPrivate.onCustomSpokenFeedbackToggled"

// True if the active window implements custom spoken feedback features.
base::Value::List Create(bool enabled);
}  // namespace OnCustomSpokenFeedbackToggled

namespace OnShowChromeVoxTutorial {

extern const char kEventName[];  // "accessibilityPrivate.onShowChromeVoxTutorial"

base::Value::List Create();
}  // namespace OnShowChromeVoxTutorial

namespace OnToggleDictation {

extern const char kEventName[];  // "accessibilityPrivate.onToggleDictation"

// True if Dictation was activated, false if it was deactivated.
base::Value::List Create(bool activated);
}  // namespace OnToggleDictation

}  // namespace accessibility_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_ACCESSIBILITY_PRIVATE_H__
