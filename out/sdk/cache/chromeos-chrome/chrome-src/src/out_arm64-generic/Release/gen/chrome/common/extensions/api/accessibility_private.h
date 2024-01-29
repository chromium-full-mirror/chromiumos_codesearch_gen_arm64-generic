// Copyright 2024 The Chromium Authors
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
#include <optional>
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
  AlertInfo(AlertInfo&& rhs) noexcept;
  AlertInfo& operator=(AlertInfo&& rhs) noexcept;

  // Populates a AlertInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, AlertInfo& out);

  // Populates a AlertInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, AlertInfo& out);

  // Creates a deep copy of AlertInfo.
  AlertInfo Clone() const;

  // Creates a AlertInfo object from a base::Value::Dict, or nullopt on failure.
  static std::optional<AlertInfo> FromValue(const base::Value::Dict& value);

  // Creates a AlertInfo object from a base::Value, or nullopt on failure.
  static std::optional<AlertInfo> FromValue(const base::Value& value);

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
  ScreenRect(ScreenRect&& rhs) noexcept;
  ScreenRect& operator=(ScreenRect&& rhs) noexcept;

  // Populates a ScreenRect object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, ScreenRect& out);

  // Populates a ScreenRect object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ScreenRect& out);

  // Creates a deep copy of ScreenRect.
  ScreenRect Clone() const;

  // Creates a ScreenRect object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ScreenRect> FromValue(const base::Value::Dict& value);

  // Creates a ScreenRect object from a base::Value, or nullopt on failure.
  static std::optional<ScreenRect> FromValue(const base::Value& value);

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
  ScreenPoint(ScreenPoint&& rhs) noexcept;
  ScreenPoint& operator=(ScreenPoint&& rhs) noexcept;

  // Populates a ScreenPoint object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ScreenPoint& out);

  // Populates a ScreenPoint object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ScreenPoint& out);

  // Creates a deep copy of ScreenPoint.
  ScreenPoint Clone() const;

  // Creates a ScreenPoint object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ScreenPoint> FromValue(const base::Value::Dict& value);

  // Creates a ScreenPoint object from a base::Value, or nullopt on failure.
  static std::optional<ScreenPoint> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisScreenPoint object.
  base::Value::Dict ToValue() const;

  // X coordinate in global screen coordinates.
  int x;

  // Y coordinate in global screen coordinates.
  int y;

};

// Accessibility gestures fired by the touch exploration controller.
enum class Gesture {
  kNone = 0,
  kClick,
  kSwipeLeft1,
  kSwipeUp1,
  kSwipeRight1,
  kSwipeDown1,
  kSwipeLeft2,
  kSwipeUp2,
  kSwipeRight2,
  kSwipeDown2,
  kSwipeLeft3,
  kSwipeUp3,
  kSwipeRight3,
  kSwipeDown3,
  kSwipeLeft4,
  kSwipeUp4,
  kSwipeRight4,
  kSwipeDown4,
  kTap2,
  kTap3,
  kTap4,
  kTouchExplore,
  kMaxValue = kTouchExplore,
};


const char* ToString(Gesture as_enum);
Gesture ParseGesture(base::StringPiece as_string);
std::u16string GetGestureParseError(base::StringPiece as_string);

// Commands for magnifier (e.g. move magnifier viewport up).
enum class MagnifierCommand {
  kNone = 0,
  kMoveStop,
  kMoveUp,
  kMoveDown,
  kMoveLeft,
  kMoveRight,
  kMaxValue = kMoveRight,
};


const char* ToString(MagnifierCommand as_enum);
MagnifierCommand ParseMagnifierCommand(base::StringPiece as_string);
std::u16string GetMagnifierCommandParseError(base::StringPiece as_string);

// Commands that can be triggered by switch activation.
enum class SwitchAccessCommand {
  kNone = 0,
  kSelect,
  kNext,
  kPrevious,
  kMaxValue = kPrevious,
};


const char* ToString(SwitchAccessCommand as_enum);
SwitchAccessCommand ParseSwitchAccessCommand(base::StringPiece as_string);
std::u16string GetSwitchAccessCommandParseError(base::StringPiece as_string);

// Point scanning states in Switch Access.
enum class PointScanState {
  kNone = 0,
  kStart,
  kStop,
  kMaxValue = kStop,
};


const char* ToString(PointScanState as_enum);
PointScanState ParsePointScanState(base::StringPiece as_string);
std::u16string GetPointScanStateParseError(base::StringPiece as_string);

// Different Switch Access bubbles that can be shown or hidden.
enum class SwitchAccessBubble {
  kNone = 0,
  kBackButton,
  kMenu,
  kMaxValue = kMenu,
};


const char* ToString(SwitchAccessBubble as_enum);
SwitchAccessBubble ParseSwitchAccessBubble(base::StringPiece as_string);
std::u16string GetSwitchAccessBubbleParseError(base::StringPiece as_string);

struct PointScanPoint {
  PointScanPoint();
  ~PointScanPoint();
  PointScanPoint(const PointScanPoint&) = delete;
  PointScanPoint& operator=(const PointScanPoint&) = delete;
  PointScanPoint(PointScanPoint&& rhs) noexcept;
  PointScanPoint& operator=(PointScanPoint&& rhs) noexcept;

  // Populates a PointScanPoint object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PointScanPoint& out);

  // Populates a PointScanPoint object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PointScanPoint& out);

  // Creates a deep copy of PointScanPoint.
  PointScanPoint Clone() const;

  // Creates a PointScanPoint object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<PointScanPoint> FromValue(const base::Value::Dict& value);

  // Creates a PointScanPoint object from a base::Value, or nullopt on failure.
  static std::optional<PointScanPoint> FromValue(const base::Value& value);

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
enum class SwitchAccessMenuAction {
  kNone = 0,
  kCopy,
  kCut,
  kDecrement,
  kDictation,
  kEndTextSelection,
  kIncrement,
  kItemScan,
  kJumpToBeginningOfText,
  kJumpToEndOfText,
  kKeyboard,
  kLeftClick,
  kMoveBackwardOneCharOfText,
  kMoveBackwardOneWordOfText,
  kMoveCursor,
  kMoveDownOneLineOfText,
  kMoveForwardOneCharOfText,
  kMoveForwardOneWordOfText,
  kMoveUpOneLineOfText,
  kPaste,
  kPointScan,
  kRightClick,
  kScrollDown,
  kScrollLeft,
  kScrollRight,
  kScrollUp,
  kSelect,
  kSettings,
  kStartTextSelection,
  kMaxValue = kStartTextSelection,
};


const char* ToString(SwitchAccessMenuAction as_enum);
SwitchAccessMenuAction ParseSwitchAccessMenuAction(base::StringPiece as_string);
std::u16string GetSwitchAccessMenuActionParseError(base::StringPiece as_string);

// The event to send
enum class SyntheticKeyboardEventType {
  kNone = 0,
  kKeyup,
  kKeydown,
  kMaxValue = kKeydown,
};


const char* ToString(SyntheticKeyboardEventType as_enum);
SyntheticKeyboardEventType ParseSyntheticKeyboardEventType(base::StringPiece as_string);
std::u16string GetSyntheticKeyboardEventTypeParseError(base::StringPiece as_string);

struct SyntheticKeyboardModifiers {
  SyntheticKeyboardModifiers();
  ~SyntheticKeyboardModifiers();
  SyntheticKeyboardModifiers(const SyntheticKeyboardModifiers&) = delete;
  SyntheticKeyboardModifiers& operator=(const SyntheticKeyboardModifiers&) = delete;
  SyntheticKeyboardModifiers(SyntheticKeyboardModifiers&& rhs) noexcept;
  SyntheticKeyboardModifiers& operator=(SyntheticKeyboardModifiers&& rhs) noexcept;

  // Populates a SyntheticKeyboardModifiers object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SyntheticKeyboardModifiers& out);

  // Populates a SyntheticKeyboardModifiers object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SyntheticKeyboardModifiers& out);

  // Creates a deep copy of SyntheticKeyboardModifiers.
  SyntheticKeyboardModifiers Clone() const;

  // Creates a SyntheticKeyboardModifiers object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<SyntheticKeyboardModifiers> FromValue(const base::Value::Dict& value);

  // Creates a SyntheticKeyboardModifiers object from a base::Value, or nullopt
  // on failure.
  static std::optional<SyntheticKeyboardModifiers> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSyntheticKeyboardModifiers object.
  base::Value::Dict ToValue() const;

  // Control modifier.
  std::optional<bool> ctrl;

  // alt modifier.
  std::optional<bool> alt;

  // search modifier.
  std::optional<bool> search;

  // shift modifier.
  std::optional<bool> shift;

};

struct SyntheticKeyboardEvent {
  SyntheticKeyboardEvent();
  ~SyntheticKeyboardEvent();
  SyntheticKeyboardEvent(const SyntheticKeyboardEvent&) = delete;
  SyntheticKeyboardEvent& operator=(const SyntheticKeyboardEvent&) = delete;
  SyntheticKeyboardEvent(SyntheticKeyboardEvent&& rhs) noexcept;
  SyntheticKeyboardEvent& operator=(SyntheticKeyboardEvent&& rhs) noexcept;

  // Populates a SyntheticKeyboardEvent object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SyntheticKeyboardEvent& out);

  // Populates a SyntheticKeyboardEvent object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SyntheticKeyboardEvent& out);

  // Creates a deep copy of SyntheticKeyboardEvent.
  SyntheticKeyboardEvent Clone() const;

  // Creates a SyntheticKeyboardEvent object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<SyntheticKeyboardEvent> FromValue(const base::Value::Dict& value);

  // Creates a SyntheticKeyboardEvent object from a base::Value, or nullopt on
  // failure.
  static std::optional<SyntheticKeyboardEvent> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSyntheticKeyboardEvent object.
  base::Value::Dict ToValue() const;

  SyntheticKeyboardEventType type;

  // Virtual key code, which is independent of the keyboard layout or modifier
  // state.
  int key_code;

  // Contains all active modifiers.
  std::optional<SyntheticKeyboardModifiers> modifiers;

};

// The type of event to send
enum class SyntheticMouseEventType {
  kNone = 0,
  kPress,
  kRelease,
  kDrag,
  kMove,
  kEnter,
  kExit,
  kMaxValue = kExit,
};


const char* ToString(SyntheticMouseEventType as_enum);
SyntheticMouseEventType ParseSyntheticMouseEventType(base::StringPiece as_string);
std::u16string GetSyntheticMouseEventTypeParseError(base::StringPiece as_string);

// The button to send event on
enum class SyntheticMouseEventButton {
  kNone = 0,
  kLeft,
  kMiddle,
  kRight,
  kBack,
  kFoward,
  kMaxValue = kFoward,
};


const char* ToString(SyntheticMouseEventButton as_enum);
SyntheticMouseEventButton ParseSyntheticMouseEventButton(base::StringPiece as_string);
std::u16string GetSyntheticMouseEventButtonParseError(base::StringPiece as_string);

struct SyntheticMouseEvent {
  SyntheticMouseEvent();
  ~SyntheticMouseEvent();
  SyntheticMouseEvent(const SyntheticMouseEvent&) = delete;
  SyntheticMouseEvent& operator=(const SyntheticMouseEvent&) = delete;
  SyntheticMouseEvent(SyntheticMouseEvent&& rhs) noexcept;
  SyntheticMouseEvent& operator=(SyntheticMouseEvent&& rhs) noexcept;

  // Populates a SyntheticMouseEvent object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SyntheticMouseEvent& out);

  // Populates a SyntheticMouseEvent object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SyntheticMouseEvent& out);

  // Creates a deep copy of SyntheticMouseEvent.
  SyntheticMouseEvent Clone() const;

  // Creates a SyntheticMouseEvent object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<SyntheticMouseEvent> FromValue(const base::Value::Dict& value);

  // Creates a SyntheticMouseEvent object from a base::Value, or nullopt on
  // failure.
  static std::optional<SyntheticMouseEvent> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSyntheticMouseEvent object.
  base::Value::Dict ToValue() const;

  SyntheticMouseEventType type;

  // X coordinate for mouse event in global screen coordinates
  int x;

  // Y coordinate for mouse event in global screen coordinates
  int y;

  // True if the touch accessibility flag should be set.
  std::optional<bool> touch_accessibility;

  // The default mouse button is set to left if mouseButton is not specified.
  SyntheticMouseEventButton mouse_button;

};

// The state of the Select-to-Speak extension
enum class SelectToSpeakState {
  kNone = 0,
  kSelecting,
  kSpeaking,
  kInactive,
  kMaxValue = kInactive,
};


const char* ToString(SelectToSpeakState as_enum);
SelectToSpeakState ParseSelectToSpeakState(base::StringPiece as_string);
std::u16string GetSelectToSpeakStateParseError(base::StringPiece as_string);

// The type of visual appearance for the focus ring.
enum class FocusType {
  kNone = 0,
  kGlow,
  kSolid,
  kDashed,
  kMaxValue = kDashed,
};


const char* ToString(FocusType as_enum);
FocusType ParseFocusType(base::StringPiece as_string);
std::u16string GetFocusTypeParseError(base::StringPiece as_string);

// Whether to stack focus rings above or below accessibility bubble panels.
// Note: focus rings will be stacked above most other UI in either case
enum class FocusRingStackingOrder {
  kNone = 0,
  kAboveAccessibilityBubbles,
  kBelowAccessibilityBubbles,
  kMaxValue = kBelowAccessibilityBubbles,
};


const char* ToString(FocusRingStackingOrder as_enum);
FocusRingStackingOrder ParseFocusRingStackingOrder(base::StringPiece as_string);
std::u16string GetFocusRingStackingOrderParseError(base::StringPiece as_string);

// The assistive technology type of this extension.
enum class AssistiveTechnologyType {
  kNone = 0,
  kChromeVox,
  kSelectToSpeak,
  kSwitchAccess,
  kAutoClick,
  kMagnifier,
  kDictation,
  kMaxValue = kDictation,
};


const char* ToString(AssistiveTechnologyType as_enum);
AssistiveTechnologyType ParseAssistiveTechnologyType(base::StringPiece as_string);
std::u16string GetAssistiveTechnologyTypeParseError(base::StringPiece as_string);

struct FocusRingInfo {
  FocusRingInfo();
  ~FocusRingInfo();
  FocusRingInfo(const FocusRingInfo&) = delete;
  FocusRingInfo& operator=(const FocusRingInfo&) = delete;
  FocusRingInfo(FocusRingInfo&& rhs) noexcept;
  FocusRingInfo& operator=(FocusRingInfo&& rhs) noexcept;

  // Populates a FocusRingInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, FocusRingInfo& out);

  // Populates a FocusRingInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, FocusRingInfo& out);

  // Creates a deep copy of FocusRingInfo.
  FocusRingInfo Clone() const;

  // Creates a FocusRingInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<FocusRingInfo> FromValue(const base::Value::Dict& value);

  // Creates a FocusRingInfo object from a base::Value, or nullopt on failure.
  static std::optional<FocusRingInfo> FromValue(const base::Value& value);

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
  std::optional<std::string> secondary_color;

  // A RGB hex-value color string (e.g. #803F82E4) that describes the color drawn
  // outside of the focus ring and over the rest of the display.
  std::optional<std::string> background_color;

  // The FocusType for the ring.
  FocusRingStackingOrder stacking_order;

  // An identifier for this focus ring, unique within the extension.
  std::optional<std::string> id;

};

// A subset of accelerator actions used by accessibility.
enum class AcceleratorAction {
  kNone = 0,
  kFocusPreviousPane,
  kFocusNextPane,
  kMaxValue = kFocusNextPane,
};


const char* ToString(AcceleratorAction as_enum);
AcceleratorAction ParseAcceleratorAction(base::StringPiece as_string);
std::u16string GetAcceleratorActionParseError(base::StringPiece as_string);

// Subset of accessibility features.
enum class AccessibilityFeature {
  kNone = 0,
  kGoogleTtsLanguagePacks,
  kDictationContextChecking,
  kFaceGaze,
  kGoogleTtsHighQualityVoices,
  kMaxValue = kGoogleTtsHighQualityVoices,
};


const char* ToString(AccessibilityFeature as_enum);
AccessibilityFeature ParseAccessibilityFeature(base::StringPiece as_string);
std::u16string GetAccessibilityFeatureParseError(base::StringPiece as_string);

// Actions that can be performed in the Select-to-speak panel.
enum class SelectToSpeakPanelAction {
  kNone = 0,
  kPreviousParagraph,
  kPreviousSentence,
  kPause,
  kResume,
  kNextSentence,
  kNextParagraph,
  kExit,
  kChangeSpeed,
  kMaxValue = kChangeSpeed,
};


const char* ToString(SelectToSpeakPanelAction as_enum);
SelectToSpeakPanelAction ParseSelectToSpeakPanelAction(base::StringPiece as_string);
std::u16string GetSelectToSpeakPanelActionParseError(base::StringPiece as_string);

// Response code for onNativeChromeVoxArcSupportResult
enum class SetNativeChromeVoxResponse {
  kNone = 0,
  kSuccess,
  kTalkbackNotInstalled,
  kWindowNotFound,
  kFailure,
  kNeedDeprecationConfirmation,
  kMaxValue = kNeedDeprecationConfirmation,
};


const char* ToString(SetNativeChromeVoxResponse as_enum);
SetNativeChromeVoxResponse ParseSetNativeChromeVoxResponse(base::StringPiece as_string);
std::u16string GetSetNativeChromeVoxResponseParseError(base::StringPiece as_string);

// The icon shown in the Dictation bubble UI.
enum class DictationBubbleIconType {
  kNone = 0,
  kHidden,
  kStandby,
  kMacroSuccess,
  kMacroFail,
  kMaxValue = kMacroFail,
};


const char* ToString(DictationBubbleIconType as_enum);
DictationBubbleIconType ParseDictationBubbleIconType(base::StringPiece as_string);
std::u16string GetDictationBubbleIconTypeParseError(base::StringPiece as_string);

// Types of hints displayed in the Dictation bubble UI.
enum class DictationBubbleHintType {
  kNone = 0,
  kTrySaying,
  kType,
  kDelete,
  kSelectAll,
  kUndo,
  kHelp,
  kUnselect,
  kCopy,
  kMaxValue = kCopy,
};


const char* ToString(DictationBubbleHintType as_enum);
DictationBubbleHintType ParseDictationBubbleHintType(base::StringPiece as_string);
std::u16string GetDictationBubbleHintTypeParseError(base::StringPiece as_string);

struct DictationBubbleProperties {
  DictationBubbleProperties();
  ~DictationBubbleProperties();
  DictationBubbleProperties(const DictationBubbleProperties&) = delete;
  DictationBubbleProperties& operator=(const DictationBubbleProperties&) = delete;
  DictationBubbleProperties(DictationBubbleProperties&& rhs) noexcept;
  DictationBubbleProperties& operator=(DictationBubbleProperties&& rhs) noexcept;

  // Populates a DictationBubbleProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DictationBubbleProperties& out);

  // Populates a DictationBubbleProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DictationBubbleProperties& out);

  // Creates a deep copy of DictationBubbleProperties.
  DictationBubbleProperties Clone() const;

  // Creates a DictationBubbleProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<DictationBubbleProperties> FromValue(const base::Value::Dict& value);

  // Creates a DictationBubbleProperties object from a base::Value, or nullopt
  // on failure.
  static std::optional<DictationBubbleProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDictationBubbleProperties object.
  base::Value::Dict ToValue() const;

  // Whether or not the UI should be visible.
  bool visible;

  // The icon to show in the Dictation bubble UI.
  DictationBubbleIconType icon;

  // The text to be displayed in the bubble UI. If `text` is undefined, the bubble
  // will clear its current text.
  std::optional<std::string> text;

  // Array of hints to show in the UI.
  std::optional<std::vector<DictationBubbleHintType>> hints;

};

enum class ToastType {
  kNone = 0,
  kDictationNoFocusedTextField,
  kDictationMicMuted,
  kMaxValue = kDictationMicMuted,
};


const char* ToString(ToastType as_enum);
ToastType ParseToastType(base::StringPiece as_string);
std::u16string GetToastTypeParseError(base::StringPiece as_string);

// Types of accessibility-specific DLCs.
enum class DlcType {
  kNone = 0,
  kTtsBnBd,
  kTtsCsCz,
  kTtsDaDk,
  kTtsDeDe,
  kTtsElGr,
  kTtsEnAu,
  kTtsEnGb,
  kTtsEnUs,
  kTtsEsEs,
  kTtsEsUs,
  kTtsFiFi,
  kTtsFilPh,
  kTtsFrFr,
  kTtsHiIn,
  kTtsHuHu,
  kTtsIdId,
  kTtsItIt,
  kTtsJaJp,
  kTtsKmKh,
  kTtsKoKr,
  kTtsNbNo,
  kTtsNeNp,
  kTtsNlNl,
  kTtsPlPl,
  kTtsPtBr,
  kTtsPtPt,
  kTtsSiLk,
  kTtsSkSk,
  kTtsSvSe,
  kTtsThTh,
  kTtsTrTr,
  kTtsUkUa,
  kTtsViVn,
  kTtsYueHk,
  kMaxValue = kTtsYueHk,
};


const char* ToString(DlcType as_enum);
DlcType ParseDlcType(base::StringPiece as_string);
std::u16string GetDlcTypeParseError(base::StringPiece as_string);

// Variants of TTS voices.
enum class TtsVariant {
  kNone = 0,
  kLite,
  kStandard,
  kMaxValue = kStandard,
};


const char* ToString(TtsVariant as_enum);
TtsVariant ParseTtsVariant(base::StringPiece as_string);
std::u16string GetTtsVariantParseError(base::StringPiece as_string);

struct PumpkinData {
  PumpkinData();
  ~PumpkinData();
  PumpkinData(const PumpkinData&) = delete;
  PumpkinData& operator=(const PumpkinData&) = delete;
  PumpkinData(PumpkinData&& rhs) noexcept;
  PumpkinData& operator=(PumpkinData&& rhs) noexcept;

  // Populates a PumpkinData object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PumpkinData& out);

  // Populates a PumpkinData object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, PumpkinData& out);

  // Creates a deep copy of PumpkinData.
  PumpkinData Clone() const;

  // Creates a PumpkinData object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<PumpkinData> FromValue(const base::Value::Dict& value);

  // Creates a PumpkinData object from a base::Value, or nullopt on failure.
  static std::optional<PumpkinData> FromValue(const base::Value& value);

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

struct FaceGazeAssets {
  FaceGazeAssets();
  ~FaceGazeAssets();
  FaceGazeAssets(const FaceGazeAssets&) = delete;
  FaceGazeAssets& operator=(const FaceGazeAssets&) = delete;
  FaceGazeAssets(FaceGazeAssets&& rhs) noexcept;
  FaceGazeAssets& operator=(FaceGazeAssets&& rhs) noexcept;

  // Populates a FaceGazeAssets object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, FaceGazeAssets& out);

  // Populates a FaceGazeAssets object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, FaceGazeAssets& out);

  // Creates a deep copy of FaceGazeAssets.
  FaceGazeAssets Clone() const;

  // Creates a FaceGazeAssets object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<FaceGazeAssets> FromValue(const base::Value::Dict& value);

  // Creates a FaceGazeAssets object from a base::Value, or nullopt on failure.
  static std::optional<FaceGazeAssets> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisFaceGazeAssets object.
  base::Value::Dict ToValue() const;

  // The contents of the FaceLandmarker model as a Uint8Array.
  std::vector<uint8_t> model;

  // The contents of the vision_wasm_internal.wasm file as a Uint8Array.
  std::vector<uint8_t> wasm;

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

namespace InstallFaceGazeAssets {

namespace Results {

base::Value::List Create(const FaceGazeAssets& assets);
}  // namespace Results

}  // namespace InstallFaceGazeAssets

namespace SetNativeAccessibilityEnabled {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // True if native accessibility support should be enabled.
  bool enabled;


 private:
  Params();
};

}  // namespace SetNativeAccessibilityEnabled

namespace SetFocusRings {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Array of rectangles to draw the highlight around.
  std::vector<ScreenRect> rects;

  // CSS-style hex color string beginning with # like #FF9982 or #EEE.
  std::string color;


 private:
  Params();
};

}  // namespace SetHighlights

namespace SetSelectToSpeakFocus {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Bounds of currently spoken word (if available) or node (if the spoken node is
  // not a text node).
  ScreenRect bounds;


 private:
  Params();
};

}  // namespace SetSelectToSpeakFocus

namespace SetKeyboardListener {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // True to darken screen; false to undarken screen.
  bool darken;


 private:
  Params();
};

}  // namespace DarkenScreen

namespace ForwardKeyEventsToSwitchAccess {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  bool should_forward;


 private:
  Params();
};

}  // namespace ForwardKeyEventsToSwitchAccess

namespace UpdateSwitchAccessBubble {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Which bubble to show/hide
  SwitchAccessBubble bubble;

  // True if the bubble should be shown, false otherwise
  bool show;

  // A rectangle indicating the bounds of the object the menu should be displayed
  // next to.
  std::optional<ScreenRect> anchor;

  // The actions to be shown in the menu.
  std::optional<std::vector<SwitchAccessMenuAction>> actions;


 private:
  Params();
};

}  // namespace UpdateSwitchAccessBubble

namespace SetPointScanState {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The point scanning state to set.
  PointScanState state;


 private:
  Params();
};

}  // namespace SetPointScanState

namespace SetNativeChromeVoxArcSupportForCurrentApp {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The event to send.
  SyntheticKeyboardEvent key_event;

  // If true, uses rewriters for the key event; only allowed if used from
  // Dictation. Otherwise indicates that rewriters should be skipped.
  std::optional<bool> use_rewriters;


 private:
  Params();
};

}  // namespace SendSyntheticKeyEvent

namespace EnableMouseEvents {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // True if accessibility component extensions should receive mouse events.
  bool enabled;


 private:
  Params();
};

}  // namespace EnableMouseEvents

namespace SetCursorPosition {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The screen point at which to put the cursor.
  ScreenPoint point;


 private:
  Params();
};

}  // namespace SetCursorPosition

namespace SendSyntheticMouseEvent {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The event to send.
  SyntheticMouseEvent mouse_event;


 private:
  Params();
};

}  // namespace SendSyntheticMouseEvent

namespace SetSelectToSpeakState {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  SelectToSpeakState state;


 private:
  Params();
};

}  // namespace SetSelectToSpeakState

namespace ClipboardCopyInActiveLacrosGoogleDoc {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // URL of the Google Docs tab.
  std::string url;


 private:
  Params();
};

}  // namespace ClipboardCopyInActiveLacrosGoogleDoc

namespace HandleScrollableBoundsForPointFound {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  ScreenRect rect;


 private:
  Params();
};

}  // namespace HandleScrollableBoundsForPointFound

namespace MoveMagnifierToRect {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Rect to ensure visible in the magnified viewport.
  ScreenRect rect;


 private:
  Params();
};

}  // namespace MoveMagnifierToRect

namespace MagnifierCenterOnPoint {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  bool is_visible;


 private:
  Params();
};

}  // namespace SetVirtualKeyboardVisible

namespace OpenSettingsSubpage {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string subpage;


 private:
  Params();
};

}  // namespace OpenSettingsSubpage

namespace PerformAcceleratorAction {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  AcceleratorAction accelerator_action;


 private:
  Params();
};

}  // namespace PerformAcceleratorAction

namespace IsFeatureEnabled {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // True to show panel, false to hide it
  bool show;

  // A rectangle indicating the bounds of the object the panel should be displayed
  // next to.
  std::optional<ScreenRect> anchor;

  // True if Select-to-speak playback is paused.
  std::optional<bool> is_paused;

  // Current reading speed (TTS speech rate).
  std::optional<double> speed;


 private:
  Params();
};

}  // namespace UpdateSelectToSpeakPanel

namespace ShowConfirmationDialog {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The title of the confirmation dialog.
  std::string title;

  // The description to show within the confirmation dialog.
  std::string description;

  // The human-readable name of the cancel button.
  std::optional<std::string> cancel_name;


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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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

namespace GetTtsDlcContents {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The DLC of interest.
  DlcType dlc;

  // The TTS voice variant.
  TtsVariant variant;


 private:
  Params();
};

namespace Results {

// The contents of the DLC as a Uint8Array.
base::Value::List Create(const std::vector<uint8_t>& contents);
}  // namespace Results

}  // namespace GetTtsDlcContents

namespace GetDisplayBounds {

namespace Results {

// Array of rects represeting the display bounds in screen coordinates for all
// displays.
base::Value::List Create(const std::vector<ScreenRect>& rects);
}  // namespace Results

}  // namespace GetDisplayBounds

namespace IsLacrosPrimary {

namespace Results {

// True if new browser windows and tabs should be in Lacros.
base::Value::List Create(bool use_lacros);
}  // namespace Results

}  // namespace IsLacrosPrimary

namespace ShowToast {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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

namespace OnSelectToSpeakFocusChanged {

extern const char kEventName[];  // "accessibilityPrivate.onSelectToSpeakFocusChanged"

// Select to Speak's focus bounds in global screen coordinates.
base::Value::List Create(const ScreenRect& bounds);
}  // namespace OnSelectToSpeakFocusChanged

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
