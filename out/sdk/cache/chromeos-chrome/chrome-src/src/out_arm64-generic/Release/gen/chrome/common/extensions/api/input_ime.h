// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/input_ime.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_INPUT_IME_H__
#define CHROME_COMMON_EXTENSIONS_API_INPUT_IME_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace input_ime {

//
// Types
//

enum  KeyboardEventType {
  KEYBOARD_EVENT_TYPE_NONE = 0,
  KEYBOARD_EVENT_TYPE_KEYUP,
  KEYBOARD_EVENT_TYPE_KEYDOWN,
  KEYBOARD_EVENT_TYPE_LAST = KEYBOARD_EVENT_TYPE_KEYDOWN,
};


const char* ToString(KeyboardEventType as_enum);
KeyboardEventType ParseKeyboardEventType(base::StringPiece as_string);
std::u16string GetKeyboardEventTypeParseError(base::StringPiece as_string);

// See http://www.w3.org/TR/DOM-Level-3-Events/#events-KeyboardEvent
struct KeyboardEvent {
  KeyboardEvent();
  ~KeyboardEvent();
  KeyboardEvent(const KeyboardEvent&) = delete;
  KeyboardEvent& operator=(const KeyboardEvent&) = delete;
  KeyboardEvent(KeyboardEvent&& rhs);
  KeyboardEvent& operator=(KeyboardEvent&& rhs);

  // Populates a KeyboardEvent object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, KeyboardEvent& out);

  // Populates a KeyboardEvent object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, KeyboardEvent& out);

  // Creates a deep copy of KeyboardEvent.
  KeyboardEvent Clone() const;

  // Creates a KeyboardEvent object from a base::Value, or NULL on failure.
  static std::unique_ptr<KeyboardEvent> FromValueDeprecated(const base::Value& value);

  // Creates a KeyboardEvent object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<KeyboardEvent> FromValue(const base::Value::Dict& value);

  // Creates a KeyboardEvent object from a base::Value, or nullopt on failure.
  static absl::optional<KeyboardEvent> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisKeyboardEvent object.
  base::Value::Dict ToValue() const;

  // One of keyup or keydown.
  KeyboardEventType type;

  // (Deprecated) The ID of the request. Use the <code>requestId</code> param from
  // the <code>onKeyEvent</code> event instead.
  absl::optional<std::string> request_id;

  // The extension ID of the sender of this keyevent.
  absl::optional<std::string> extension_id;

  // Value of the key being pressed
  std::string key;

  // Value of the physical key being pressed. The value is not affected by current
  // keyboard layout or modifier state.
  std::string code;

  // The deprecated HTML keyCode, which is system- and implementation-dependent
  // numerical code signifying the unmodified identifier associated with the key
  // pressed.
  absl::optional<int> key_code;

  // Whether or not the ALT key is pressed.
  absl::optional<bool> alt_key;

  // Whether or not the ALTGR key is pressed.
  absl::optional<bool> altgr_key;

  // Whether or not the CTRL key is pressed.
  absl::optional<bool> ctrl_key;

  // Whether or not the SHIFT key is pressed.
  absl::optional<bool> shift_key;

  // Whether or not the CAPS_LOCK is enabled.
  absl::optional<bool> caps_lock;

};

// Type of value this text field edits, (Text, Number, URL, etc)
enum  InputContextType {
  INPUT_CONTEXT_TYPE_NONE = 0,
  INPUT_CONTEXT_TYPE_TEXT,
  INPUT_CONTEXT_TYPE_SEARCH,
  INPUT_CONTEXT_TYPE_TEL,
  INPUT_CONTEXT_TYPE_URL,
  INPUT_CONTEXT_TYPE_EMAIL,
  INPUT_CONTEXT_TYPE_NUMBER,
  INPUT_CONTEXT_TYPE_PASSWORD,
  INPUT_CONTEXT_TYPE_NULL,
  INPUT_CONTEXT_TYPE_LAST = INPUT_CONTEXT_TYPE_NULL,
};


const char* ToString(InputContextType as_enum);
InputContextType ParseInputContextType(base::StringPiece as_string);
std::u16string GetInputContextTypeParseError(base::StringPiece as_string);

// The auto-capitalize type of the text field.
enum  AutoCapitalizeType {
  AUTO_CAPITALIZE_TYPE_NONE = 0,
  AUTO_CAPITALIZE_TYPE_CHARACTERS,
  AUTO_CAPITALIZE_TYPE_WORDS,
  AUTO_CAPITALIZE_TYPE_SENTENCES,
  AUTO_CAPITALIZE_TYPE_LAST = AUTO_CAPITALIZE_TYPE_SENTENCES,
};


const char* ToString(AutoCapitalizeType as_enum);
AutoCapitalizeType ParseAutoCapitalizeType(base::StringPiece as_string);
std::u16string GetAutoCapitalizeTypeParseError(base::StringPiece as_string);

// Describes an input Context
struct InputContext {
  InputContext();
  ~InputContext();
  InputContext(const InputContext&) = delete;
  InputContext& operator=(const InputContext&) = delete;
  InputContext(InputContext&& rhs);
  InputContext& operator=(InputContext&& rhs);

  // Populates a InputContext object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, InputContext& out);

  // Populates a InputContext object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, InputContext& out);

  // Creates a deep copy of InputContext.
  InputContext Clone() const;

  // Creates a InputContext object from a base::Value, or NULL on failure.
  static std::unique_ptr<InputContext> FromValueDeprecated(const base::Value& value);

  // Creates a InputContext object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<InputContext> FromValue(const base::Value::Dict& value);

  // Creates a InputContext object from a base::Value, or nullopt on failure.
  static absl::optional<InputContext> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisInputContext object.
  base::Value::Dict ToValue() const;

  // This is used to specify targets of text field operations.  This ID becomes
  // invalid as soon as onBlur is called.
  int context_id;

  // Type of value this text field edits, (Text, Number, URL, etc)
  InputContextType type;

  // Whether the text field wants auto-correct.
  bool auto_correct;

  // Whether the text field wants auto-complete.
  bool auto_complete;

  // The auto-capitalize type of the text field.
  AutoCapitalizeType auto_capitalize;

  // Whether the text field wants spell-check.
  bool spell_check;

  // Whether text entered into the text field should be used to improve typing
  // suggestions for the user.
  bool should_do_learning;

};

// The type of menu item. Radio buttons between separators are considered
// grouped.
enum  MenuItemStyle {
  MENU_ITEM_STYLE_NONE = 0,
  MENU_ITEM_STYLE_CHECK,
  MENU_ITEM_STYLE_RADIO,
  MENU_ITEM_STYLE_SEPARATOR,
  MENU_ITEM_STYLE_LAST = MENU_ITEM_STYLE_SEPARATOR,
};


const char* ToString(MenuItemStyle as_enum);
MenuItemStyle ParseMenuItemStyle(base::StringPiece as_string);
std::u16string GetMenuItemStyleParseError(base::StringPiece as_string);

// A menu item used by an input method to interact with the user from the
// language menu.
struct MenuItem {
  MenuItem();
  ~MenuItem();
  MenuItem(const MenuItem&) = delete;
  MenuItem& operator=(const MenuItem&) = delete;
  MenuItem(MenuItem&& rhs);
  MenuItem& operator=(MenuItem&& rhs);

  // Populates a MenuItem object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, MenuItem& out);

  // Populates a MenuItem object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, MenuItem& out);

  // Creates a deep copy of MenuItem.
  MenuItem Clone() const;

  // Creates a MenuItem object from a base::Value, or NULL on failure.
  static std::unique_ptr<MenuItem> FromValueDeprecated(const base::Value& value);

  // Creates a MenuItem object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<MenuItem> FromValue(const base::Value::Dict& value);

  // Creates a MenuItem object from a base::Value, or nullopt on failure.
  static absl::optional<MenuItem> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMenuItem object.
  base::Value::Dict ToValue() const;

  // String that will be passed to callbacks referencing this MenuItem.
  std::string id;

  // Text displayed in the menu for this item.
  absl::optional<std::string> label;

  // The type of menu item.
  MenuItemStyle style;

  // Indicates this item is visible.
  absl::optional<bool> visible;

  // Indicates this item should be drawn with a check.
  absl::optional<bool> checked;

  // Indicates this item is enabled.
  absl::optional<bool> enabled;

};

// The type of the underline to modify this segment.
enum  UnderlineStyle {
  UNDERLINE_STYLE_NONE = 0,
  UNDERLINE_STYLE_UNDERLINE,
  UNDERLINE_STYLE_DOUBLEUNDERLINE,
  UNDERLINE_STYLE_NOUNDERLINE,
  UNDERLINE_STYLE_LAST = UNDERLINE_STYLE_NOUNDERLINE,
};


const char* ToString(UnderlineStyle as_enum);
UnderlineStyle ParseUnderlineStyle(base::StringPiece as_string);
std::u16string GetUnderlineStyleParseError(base::StringPiece as_string);

// Where to display the candidate window. If set to 'cursor', the window follows
// the cursor. If set to 'composition', the window is locked to the beginning of
// the composition.
enum  WindowPosition {
  WINDOW_POSITION_NONE = 0,
  WINDOW_POSITION_CURSOR,
  WINDOW_POSITION_COMPOSITION,
  WINDOW_POSITION_LAST = WINDOW_POSITION_COMPOSITION,
};


const char* ToString(WindowPosition as_enum);
WindowPosition ParseWindowPosition(base::StringPiece as_string);
std::u16string GetWindowPositionParseError(base::StringPiece as_string);

// The screen type under which the IME is activated.
enum  ScreenType {
  SCREEN_TYPE_NONE = 0,
  SCREEN_TYPE_NORMAL,
  SCREEN_TYPE_LOGIN,
  SCREEN_TYPE_LOCK,
  SCREEN_TYPE_SECONDARY_LOGIN,
  SCREEN_TYPE_LAST = SCREEN_TYPE_SECONDARY_LOGIN,
};


const char* ToString(ScreenType as_enum);
ScreenType ParseScreenType(base::StringPiece as_string);
std::u16string GetScreenTypeParseError(base::StringPiece as_string);

// Which mouse buttons was clicked.
enum  MouseButton {
  MOUSE_BUTTON_NONE = 0,
  MOUSE_BUTTON_LEFT,
  MOUSE_BUTTON_MIDDLE,
  MOUSE_BUTTON_RIGHT,
  MOUSE_BUTTON_LAST = MOUSE_BUTTON_RIGHT,
};


const char* ToString(MouseButton as_enum);
MouseButton ParseMouseButton(base::StringPiece as_string);
std::u16string GetMouseButtonParseError(base::StringPiece as_string);

// Type of assistive window.
enum  AssistiveWindowType {
  ASSISTIVE_WINDOW_TYPE_NONE = 0,
  ASSISTIVE_WINDOW_TYPE_UNDO,
  ASSISTIVE_WINDOW_TYPE_LAST = ASSISTIVE_WINDOW_TYPE_UNDO,
};


const char* ToString(AssistiveWindowType as_enum);
AssistiveWindowType ParseAssistiveWindowType(base::StringPiece as_string);
std::u16string GetAssistiveWindowTypeParseError(base::StringPiece as_string);

// Properties of the assistive window.
struct AssistiveWindowProperties {
  AssistiveWindowProperties();
  ~AssistiveWindowProperties();
  AssistiveWindowProperties(const AssistiveWindowProperties&) = delete;
  AssistiveWindowProperties& operator=(const AssistiveWindowProperties&) = delete;
  AssistiveWindowProperties(AssistiveWindowProperties&& rhs);
  AssistiveWindowProperties& operator=(AssistiveWindowProperties&& rhs);

  // Populates a AssistiveWindowProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AssistiveWindowProperties& out);

  // Populates a AssistiveWindowProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AssistiveWindowProperties& out);

  // Creates a deep copy of AssistiveWindowProperties.
  AssistiveWindowProperties Clone() const;

  // Creates a AssistiveWindowProperties object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<AssistiveWindowProperties> FromValueDeprecated(const base::Value& value);

  // Creates a AssistiveWindowProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<AssistiveWindowProperties> FromValue(const base::Value::Dict& value);

  // Creates a AssistiveWindowProperties object from a base::Value, or nullopt
  // on failure.
  static absl::optional<AssistiveWindowProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAssistiveWindowProperties object.
  base::Value::Dict ToValue() const;

  AssistiveWindowType type;

  // Sets true to show AssistiveWindow, sets false to hide.
  bool visible;

  // Strings for ChromeVox to announce.
  absl::optional<std::string> announce_string;

};

// ID of buttons in assistive window.
enum  AssistiveWindowButton {
  ASSISTIVE_WINDOW_BUTTON_NONE = 0,
  ASSISTIVE_WINDOW_BUTTON_UNDO,
  ASSISTIVE_WINDOW_BUTTON_ADDTODICTIONARY,
  ASSISTIVE_WINDOW_BUTTON_LAST = ASSISTIVE_WINDOW_BUTTON_ADDTODICTIONARY,
};


const char* ToString(AssistiveWindowButton as_enum);
AssistiveWindowButton ParseAssistiveWindowButton(base::StringPiece as_string);
std::u16string GetAssistiveWindowButtonParseError(base::StringPiece as_string);

struct MenuParameters {
  MenuParameters();
  ~MenuParameters();
  MenuParameters(const MenuParameters&) = delete;
  MenuParameters& operator=(const MenuParameters&) = delete;
  MenuParameters(MenuParameters&& rhs);
  MenuParameters& operator=(MenuParameters&& rhs);

  // Populates a MenuParameters object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MenuParameters& out);

  // Populates a MenuParameters object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, MenuParameters& out);

  // Creates a deep copy of MenuParameters.
  MenuParameters Clone() const;

  // Creates a MenuParameters object from a base::Value, or NULL on failure.
  static std::unique_ptr<MenuParameters> FromValueDeprecated(const base::Value& value);

  // Creates a MenuParameters object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<MenuParameters> FromValue(const base::Value::Dict& value);

  // Creates a MenuParameters object from a base::Value, or nullopt on failure.
  static absl::optional<MenuParameters> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMenuParameters object.
  base::Value::Dict ToValue() const;

  // ID of the engine to use.
  std::string engine_id;

  // MenuItems to add or update. They will be added in the order they exist in the
  // array.
  std::vector<MenuItem> items;

};


//
// Functions
//

namespace SetComposition {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  struct Parameters {
    Parameters();
    ~Parameters();
    Parameters(const Parameters&) = delete;
    Parameters& operator=(const Parameters&) = delete;
    Parameters(Parameters&& rhs);
    Parameters& operator=(Parameters&& rhs);

    // Populates a Parameters object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Parameters& out);

    // Populates a Parameters object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, Parameters& out);

    // Creates a deep copy of Parameters.
    Parameters Clone() const;

    // Creates a Parameters object from a base::Value::Dict, or nullopt on
    // failure.
    static absl::optional<Parameters> FromValue(const base::Value::Dict& value);

    // Creates a Parameters object from a base::Value, or nullopt on failure.
    static absl::optional<Parameters> FromValue(const base::Value& value);

    struct SegmentsType {
      SegmentsType();
      ~SegmentsType();
      SegmentsType(const SegmentsType&) = delete;
      SegmentsType& operator=(const SegmentsType&) = delete;
      SegmentsType(SegmentsType&& rhs);
      SegmentsType& operator=(SegmentsType&& rhs);

      // Populates a SegmentsType object from a base::Value& instance. Returns
      // whether |out| was successfully populated.
      static bool Populate(const base::Value& value, SegmentsType& out);

      // Populates a SegmentsType object from a Dict& instance. Returns whether
      // |out| was successfully populated.
      static bool Populate(const base::Value::Dict& value, SegmentsType& out);

      // Creates a deep copy of SegmentsType.
      SegmentsType Clone() const;

      // Creates a SegmentsType object from a base::Value::Dict, or nullopt on
      // failure.
      static absl::optional<SegmentsType> FromValue(const base::Value::Dict& value);

      // Creates a SegmentsType object from a base::Value, or nullopt on failure.
      static absl::optional<SegmentsType> FromValue(const base::Value& value);

      // Index of the character to start this segment at
      int start;

      // Index of the character to end this segment after.
      int end;

      // The type of the underline to modify this segment.
      UnderlineStyle style;

    };



    // ID of the context where the composition text will be set
    int context_id;

    // Text to set
    std::string text;

    // Position in the text that the selection starts at.
    absl::optional<int> selection_start;

    // Position in the text that the selection ends at.
    absl::optional<int> selection_end;

    // Position in the text of the cursor.
    int cursor;

    // List of segments and their associated types.
    absl::optional<std::vector<SegmentsType>> segments;

  };


  Parameters parameters;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool success);
}  // namespace Results

}  // namespace SetComposition

namespace ClearComposition {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  struct Parameters {
    Parameters();
    ~Parameters();
    Parameters(const Parameters&) = delete;
    Parameters& operator=(const Parameters&) = delete;
    Parameters(Parameters&& rhs);
    Parameters& operator=(Parameters&& rhs);

    // Populates a Parameters object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Parameters& out);

    // Populates a Parameters object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, Parameters& out);

    // Creates a deep copy of Parameters.
    Parameters Clone() const;

    // Creates a Parameters object from a base::Value::Dict, or nullopt on
    // failure.
    static absl::optional<Parameters> FromValue(const base::Value::Dict& value);

    // Creates a Parameters object from a base::Value, or nullopt on failure.
    static absl::optional<Parameters> FromValue(const base::Value& value);

    // ID of the context where the composition will be cleared
    int context_id;

  };


  Parameters parameters;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool success);
}  // namespace Results

}  // namespace ClearComposition

namespace CommitText {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  struct Parameters {
    Parameters();
    ~Parameters();
    Parameters(const Parameters&) = delete;
    Parameters& operator=(const Parameters&) = delete;
    Parameters(Parameters&& rhs);
    Parameters& operator=(Parameters&& rhs);

    // Populates a Parameters object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Parameters& out);

    // Populates a Parameters object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, Parameters& out);

    // Creates a deep copy of Parameters.
    Parameters Clone() const;

    // Creates a Parameters object from a base::Value::Dict, or nullopt on
    // failure.
    static absl::optional<Parameters> FromValue(const base::Value::Dict& value);

    // Creates a Parameters object from a base::Value, or nullopt on failure.
    static absl::optional<Parameters> FromValue(const base::Value& value);

    // ID of the context where the text will be committed
    int context_id;

    // The text to commit
    std::string text;

  };


  Parameters parameters;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool success);
}  // namespace Results

}  // namespace CommitText

namespace SendKeyEvents {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  struct Parameters {
    Parameters();
    ~Parameters();
    Parameters(const Parameters&) = delete;
    Parameters& operator=(const Parameters&) = delete;
    Parameters(Parameters&& rhs);
    Parameters& operator=(Parameters&& rhs);

    // Populates a Parameters object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Parameters& out);

    // Populates a Parameters object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, Parameters& out);

    // Creates a deep copy of Parameters.
    Parameters Clone() const;

    // Creates a Parameters object from a base::Value::Dict, or nullopt on
    // failure.
    static absl::optional<Parameters> FromValue(const base::Value::Dict& value);

    // Creates a Parameters object from a base::Value, or nullopt on failure.
    static absl::optional<Parameters> FromValue(const base::Value& value);

    // ID of the context where the key events will be sent, or zero to send key
    // events to non-input field.
    int context_id;

    // Data on the key event.
    std::vector<KeyboardEvent> key_data;

  };


  Parameters parameters;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SendKeyEvents

namespace HideInputView {

}  // namespace HideInputView

namespace SetCandidateWindowProperties {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  struct Parameters {
    Parameters();
    ~Parameters();
    Parameters(const Parameters&) = delete;
    Parameters& operator=(const Parameters&) = delete;
    Parameters(Parameters&& rhs);
    Parameters& operator=(Parameters&& rhs);

    // Populates a Parameters object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Parameters& out);

    // Populates a Parameters object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, Parameters& out);

    // Creates a deep copy of Parameters.
    Parameters Clone() const;

    // Creates a Parameters object from a base::Value::Dict, or nullopt on
    // failure.
    static absl::optional<Parameters> FromValue(const base::Value::Dict& value);

    // Creates a Parameters object from a base::Value, or nullopt on failure.
    static absl::optional<Parameters> FromValue(const base::Value& value);

    struct Properties {
      Properties();
      ~Properties();
      Properties(const Properties&) = delete;
      Properties& operator=(const Properties&) = delete;
      Properties(Properties&& rhs);
      Properties& operator=(Properties&& rhs);

      // Populates a Properties object from a base::Value& instance. Returns whether
      // |out| was successfully populated.
      static bool Populate(const base::Value& value, Properties& out);

      // Populates a Properties object from a Dict& instance. Returns whether |out|
      // was successfully populated.
      static bool Populate(const base::Value::Dict& value, Properties& out);

      // Creates a deep copy of Properties.
      Properties Clone() const;

      // Creates a Properties object from a base::Value::Dict, or nullopt on
      // failure.
      static absl::optional<Properties> FromValue(const base::Value::Dict& value);

      // Creates a Properties object from a base::Value, or nullopt on failure.
      static absl::optional<Properties> FromValue(const base::Value& value);

      // True to show the Candidate window, false to hide it.
      absl::optional<bool> visible;

      // True to show the cursor, false to hide it.
      absl::optional<bool> cursor_visible;

      // True if the candidate window should be rendered vertical, false to make it
      // horizontal.
      absl::optional<bool> vertical;

      // The number of candidates to display per page.
      absl::optional<int> page_size;

      // Text that is shown at the bottom of the candidate window.
      absl::optional<std::string> auxiliary_text;

      // True to display the auxiliary text, false to hide it.
      absl::optional<bool> auxiliary_text_visible;

      // The total number of candidates for the candidate window.
      absl::optional<int> total_candidates;

      // The index of the current chosen candidate out of total candidates.
      absl::optional<int> current_candidate_index;

      // Where to display the candidate window.
      WindowPosition window_position;

    };


    // ID of the engine to set properties on.
    std::string engine_id;

    Properties properties;

  };


  Parameters parameters;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool success);
}  // namespace Results

}  // namespace SetCandidateWindowProperties

namespace SetCandidates {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  struct Parameters {
    Parameters();
    ~Parameters();
    Parameters(const Parameters&) = delete;
    Parameters& operator=(const Parameters&) = delete;
    Parameters(Parameters&& rhs);
    Parameters& operator=(Parameters&& rhs);

    // Populates a Parameters object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Parameters& out);

    // Populates a Parameters object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, Parameters& out);

    // Creates a deep copy of Parameters.
    Parameters Clone() const;

    // Creates a Parameters object from a base::Value::Dict, or nullopt on
    // failure.
    static absl::optional<Parameters> FromValue(const base::Value::Dict& value);

    // Creates a Parameters object from a base::Value, or nullopt on failure.
    static absl::optional<Parameters> FromValue(const base::Value& value);

    struct CandidatesType {
      CandidatesType();
      ~CandidatesType();
      CandidatesType(const CandidatesType&) = delete;
      CandidatesType& operator=(const CandidatesType&) = delete;
      CandidatesType(CandidatesType&& rhs);
      CandidatesType& operator=(CandidatesType&& rhs);

      // Populates a CandidatesType object from a base::Value& instance. Returns
      // whether |out| was successfully populated.
      static bool Populate(const base::Value& value, CandidatesType& out);

      // Populates a CandidatesType object from a Dict& instance. Returns whether
      // |out| was successfully populated.
      static bool Populate(const base::Value::Dict& value, CandidatesType& out);

      // Creates a deep copy of CandidatesType.
      CandidatesType Clone() const;

      // Creates a CandidatesType object from a base::Value::Dict, or nullopt on
      // failure.
      static absl::optional<CandidatesType> FromValue(const base::Value::Dict& value);

      // Creates a CandidatesType object from a base::Value, or nullopt on failure.
      static absl::optional<CandidatesType> FromValue(const base::Value& value);

      // The usage or detail description of word.
      struct Usage {
        Usage();
        ~Usage();
        Usage(const Usage&) = delete;
        Usage& operator=(const Usage&) = delete;
        Usage(Usage&& rhs);
        Usage& operator=(Usage&& rhs);

        // Populates a Usage object from a base::Value& instance. Returns whether
        // |out| was successfully populated.
        static bool Populate(const base::Value& value, Usage& out);

        // Populates a Usage object from a Dict& instance. Returns whether |out| was
        // successfully populated.
        static bool Populate(const base::Value::Dict& value, Usage& out);

        // Creates a deep copy of Usage.
        Usage Clone() const;

        // Creates a Usage object from a base::Value::Dict, or nullopt on failure.
        static absl::optional<Usage> FromValue(const base::Value::Dict& value);

        // Creates a Usage object from a base::Value, or nullopt on failure.
        static absl::optional<Usage> FromValue(const base::Value& value);

        // The title string of details description.
        std::string title;

        // The body string of detail description.
        std::string body;

      };


      // The candidate
      std::string candidate;

      // The candidate's id
      int id;

      // The id to add these candidates under
      absl::optional<int> parent_id;

      // Short string displayed to next to the candidate, often the shortcut key or
      // index
      absl::optional<std::string> label;

      // Additional text describing the candidate
      absl::optional<std::string> annotation;

      // The usage or detail description of word.
      absl::optional<Usage> usage;

    };



    // ID of the context that owns the candidate window.
    int context_id;

    // List of candidates to show in the candidate window
    std::vector<CandidatesType> candidates;

  };


  Parameters parameters;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool success);
}  // namespace Results

}  // namespace SetCandidates

namespace SetCursorPosition {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  struct Parameters {
    Parameters();
    ~Parameters();
    Parameters(const Parameters&) = delete;
    Parameters& operator=(const Parameters&) = delete;
    Parameters(Parameters&& rhs);
    Parameters& operator=(Parameters&& rhs);

    // Populates a Parameters object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Parameters& out);

    // Populates a Parameters object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, Parameters& out);

    // Creates a deep copy of Parameters.
    Parameters Clone() const;

    // Creates a Parameters object from a base::Value::Dict, or nullopt on
    // failure.
    static absl::optional<Parameters> FromValue(const base::Value::Dict& value);

    // Creates a Parameters object from a base::Value, or nullopt on failure.
    static absl::optional<Parameters> FromValue(const base::Value& value);

    // ID of the context that owns the candidate window.
    int context_id;

    // ID of the candidate to select.
    int candidate_id;

  };


  Parameters parameters;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool success);
}  // namespace Results

}  // namespace SetCursorPosition

namespace SetAssistiveWindowProperties {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  struct Parameters {
    Parameters();
    ~Parameters();
    Parameters(const Parameters&) = delete;
    Parameters& operator=(const Parameters&) = delete;
    Parameters(Parameters&& rhs);
    Parameters& operator=(Parameters&& rhs);

    // Populates a Parameters object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Parameters& out);

    // Populates a Parameters object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, Parameters& out);

    // Creates a deep copy of Parameters.
    Parameters Clone() const;

    // Creates a Parameters object from a base::Value::Dict, or nullopt on
    // failure.
    static absl::optional<Parameters> FromValue(const base::Value::Dict& value);

    // Creates a Parameters object from a base::Value, or nullopt on failure.
    static absl::optional<Parameters> FromValue(const base::Value& value);

    // ID of the context owning the assistive window.
    int context_id;

    // Properties of the assistive window.
    AssistiveWindowProperties properties;

  };


  Parameters parameters;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool success);
}  // namespace Results

}  // namespace SetAssistiveWindowProperties

namespace SetAssistiveWindowButtonHighlighted {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  struct Parameters {
    Parameters();
    ~Parameters();
    Parameters(const Parameters&) = delete;
    Parameters& operator=(const Parameters&) = delete;
    Parameters(Parameters&& rhs);
    Parameters& operator=(Parameters&& rhs);

    // Populates a Parameters object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Parameters& out);

    // Populates a Parameters object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, Parameters& out);

    // Creates a deep copy of Parameters.
    Parameters Clone() const;

    // Creates a Parameters object from a base::Value::Dict, or nullopt on
    // failure.
    static absl::optional<Parameters> FromValue(const base::Value::Dict& value);

    // Creates a Parameters object from a base::Value, or nullopt on failure.
    static absl::optional<Parameters> FromValue(const base::Value& value);

    // ID of the context owning the assistive window.
    int context_id;

    // The ID of the button
    AssistiveWindowButton button_id;

    // The window type the button belongs to.
    AssistiveWindowType window_type;

    // The text for the screenreader to announce.
    absl::optional<std::string> announce_string;

    // Whether the button should be highlighted.
    bool highlighted;

  };


  Parameters parameters;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetAssistiveWindowButtonHighlighted

namespace SetMenuItems {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  MenuParameters parameters;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetMenuItems

namespace UpdateMenuItems {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  MenuParameters parameters;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace UpdateMenuItems

namespace DeleteSurroundingText {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  struct Parameters {
    Parameters();
    ~Parameters();
    Parameters(const Parameters&) = delete;
    Parameters& operator=(const Parameters&) = delete;
    Parameters(Parameters&& rhs);
    Parameters& operator=(Parameters&& rhs);

    // Populates a Parameters object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Parameters& out);

    // Populates a Parameters object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, Parameters& out);

    // Creates a deep copy of Parameters.
    Parameters Clone() const;

    // Creates a Parameters object from a base::Value::Dict, or nullopt on
    // failure.
    static absl::optional<Parameters> FromValue(const base::Value::Dict& value);

    // Creates a Parameters object from a base::Value, or nullopt on failure.
    static absl::optional<Parameters> FromValue(const base::Value& value);

    // ID of the engine receiving the event.
    std::string engine_id;

    // ID of the context where the surrounding text will be deleted.
    int context_id;

    // The offset from the caret position where deletion will start. This value can
    // be negative.
    int offset;

    // The number of characters to be deleted
    int length;

  };


  Parameters parameters;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace DeleteSurroundingText

namespace KeyEventHandled {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Request id of the event that was handled.  This should come from
  // keyEvent.requestId
  std::string request_id;

  // True if the keystroke was handled, false if not
  bool response;


 private:
  Params();
};

}  // namespace KeyEventHandled

//
// Events
//

namespace OnActivate {

extern const char kEventName[];  // "input.ime.onActivate"

// ID of the engine receiving the event
// The screen type under which the IME is activated.
base::Value::List Create(const std::string& engine_id, const ScreenType& screen);
}  // namespace OnActivate

namespace OnDeactivated {

extern const char kEventName[];  // "input.ime.onDeactivated"

// ID of the engine receiving the event
base::Value::List Create(const std::string& engine_id);
}  // namespace OnDeactivated

namespace OnFocus {

extern const char kEventName[];  // "input.ime.onFocus"

// Describes the text field that has acquired focus.
base::Value::List Create(const InputContext& context);
}  // namespace OnFocus

namespace OnBlur {

extern const char kEventName[];  // "input.ime.onBlur"

// The ID of the text field that has lost focus. The ID is invalid after this
// call
base::Value::List Create(int context_id);
}  // namespace OnBlur

namespace OnInputContextUpdate {

extern const char kEventName[];  // "input.ime.onInputContextUpdate"

// An InputContext object describing the text field that has changed.
base::Value::List Create(const InputContext& context);
}  // namespace OnInputContextUpdate

namespace OnKeyEvent {

extern const char kEventName[];  // "input.ime.onKeyEvent"

// ID of the engine receiving the event
// Data on the key event
// ID of the request. If the event listener returns undefined, then
// <code>keyEventHandled</code> must be called later with this
// <code>requestId</code>.
base::Value::List Create(const std::string& engine_id, const KeyboardEvent& key_data, const std::string& request_id);
}  // namespace OnKeyEvent

namespace OnCandidateClicked {

extern const char kEventName[];  // "input.ime.onCandidateClicked"

// ID of the engine receiving the event
// ID of the candidate that was clicked.
// Which mouse buttons was clicked.
base::Value::List Create(const std::string& engine_id, int candidate_id, const MouseButton& button);
}  // namespace OnCandidateClicked

namespace OnMenuItemActivated {

extern const char kEventName[];  // "input.ime.onMenuItemActivated"

// ID of the engine receiving the event
// Name of the MenuItem which was activated
base::Value::List Create(const std::string& engine_id, const std::string& name);
}  // namespace OnMenuItemActivated

namespace OnSurroundingTextChanged {

extern const char kEventName[];  // "input.ime.onSurroundingTextChanged"

// The surrounding information.
struct SurroundingInfo {
  SurroundingInfo();
  ~SurroundingInfo();
  SurroundingInfo(const SurroundingInfo&) = delete;
  SurroundingInfo& operator=(const SurroundingInfo&) = delete;
  SurroundingInfo(SurroundingInfo&& rhs);
  SurroundingInfo& operator=(SurroundingInfo&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSurroundingInfo object.
  base::Value::Dict ToValue() const;

  // The text around the cursor. This is only a subset of all text in the input
  // field.
  std::string text;

  // The ending position of the selection. This value indicates caret position if
  // there is no selection.
  int focus;

  // The beginning position of the selection. This value indicates caret position
  // if there is no selection.
  int anchor;

  // The offset position of <code>text</code>. Since <code>text</code> only
  // includes a subset of text around the cursor, offset indicates the absolute
  // position of the first character of <code>text</code>.
  int offset;

};


// ID of the engine receiving the event
// The surrounding information.
base::Value::List Create(const std::string& engine_id, const SurroundingInfo& surrounding_info);
}  // namespace OnSurroundingTextChanged

namespace OnReset {

extern const char kEventName[];  // "input.ime.onReset"

// ID of the engine receiving the event
base::Value::List Create(const std::string& engine_id);
}  // namespace OnReset

namespace OnAssistiveWindowButtonClicked {

extern const char kEventName[];  // "input.ime.onAssistiveWindowButtonClicked"

struct Details {
  Details();
  ~Details();
  Details(const Details&) = delete;
  Details& operator=(const Details&) = delete;
  Details(Details&& rhs);
  Details& operator=(Details&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDetails object.
  base::Value::Dict ToValue() const;

  // The ID of the button clicked.
  AssistiveWindowButton button_id;

  // The type of the assistive window.
  AssistiveWindowType window_type;

};


base::Value::List Create(const Details& details);
}  // namespace OnAssistiveWindowButtonClicked

}  // namespace input_ime
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_INPUT_IME_H__
