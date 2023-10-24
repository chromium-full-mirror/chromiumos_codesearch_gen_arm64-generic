// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/braille_display_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_BRAILLE_DISPLAY_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_BRAILLE_DISPLAY_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace braille_display_private {

//
// Types
//

// Braille display keyboard command.
enum class KeyCommand {
  kNone = 0,
  kLineUp,
  kLineDown,
  kPanLeft,
  kPanRight,
  kTop,
  kBottom,
  kRouting,
  kSecondaryRouting,
  kDots,
  kChord,
  kStandardKey,
  kMaxValue = kStandardKey,
};


const char* ToString(KeyCommand as_enum);
KeyCommand ParseKeyCommand(base::StringPiece as_string);
std::u16string GetKeyCommandParseError(base::StringPiece as_string);

struct KeyEvent {
  KeyEvent();
  ~KeyEvent();
  KeyEvent(const KeyEvent&) = delete;
  KeyEvent& operator=(const KeyEvent&) = delete;
  KeyEvent(KeyEvent&& rhs);
  KeyEvent& operator=(KeyEvent&& rhs);

  // Populates a KeyEvent object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, KeyEvent& out);

  // Populates a KeyEvent object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, KeyEvent& out);

  // Creates a deep copy of KeyEvent.
  KeyEvent Clone() const;

  // Creates a KeyEvent object from a base::Value, or NULL on failure.
  static std::unique_ptr<KeyEvent> FromValueDeprecated(const base::Value& value);

  // Creates a KeyEvent object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<KeyEvent> FromValue(const base::Value::Dict& value);

  // Creates a KeyEvent object from a base::Value, or nullopt on failure.
  static absl::optional<KeyEvent> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisKeyEvent object.
  base::Value::Dict ToValue() const;

  KeyCommand command;

  // 0-based display position for commands that involve a routing key.
  absl::optional<int> display_position;

  // Braille dot keys that were pressed, stored in the low-order bits. Dot 1 is
  // stored in bit 0, dot2 in bit 1, etc.
  absl::optional<int> braille_dots;

  // DOM keyboard event code.  This is present when command is standard_key and
  // the braille display event represents a non-alphanumeric key such as an arrow
  // key or function key. The value is as defined by the |code| property in
  // http://www.w3.org/TR/uievents/#keyboard-event-interface
  absl::optional<std::string> standard_key_code;

  // DOM keyboard event character value.  This is present if the braille key event
  // corresponds to a character.
  absl::optional<std::string> standard_key_char;

  // Whether the space key was pressed.
  absl::optional<bool> space_key;

  // Whether the alt key was pressed.
  absl::optional<bool> alt_key;

  // Whether the shift key was pressed.
  absl::optional<bool> shift_key;

  // Whether the ctrl key was pressed.
  absl::optional<bool> ctrl_key;

};

struct DisplayState {
  DisplayState();
  ~DisplayState();
  DisplayState(const DisplayState&) = delete;
  DisplayState& operator=(const DisplayState&) = delete;
  DisplayState(DisplayState&& rhs);
  DisplayState& operator=(DisplayState&& rhs);

  // Populates a DisplayState object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DisplayState& out);

  // Populates a DisplayState object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DisplayState& out);

  // Creates a deep copy of DisplayState.
  DisplayState Clone() const;

  // Creates a DisplayState object from a base::Value, or NULL on failure.
  static std::unique_ptr<DisplayState> FromValueDeprecated(const base::Value& value);

  // Creates a DisplayState object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<DisplayState> FromValue(const base::Value::Dict& value);

  // Creates a DisplayState object from a base::Value, or nullopt on failure.
  static absl::optional<DisplayState> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDisplayState object.
  base::Value::Dict ToValue() const;

  // Whether a braille display is currently available.
  bool available;

  // Number of rows of braille cells on the currently connected display.
  absl::optional<int> text_row_count;

  // Number of columns of braille cells on the currently connected display.
  absl::optional<int> text_column_count;

  // The number of dots in a braille cell on the currently connected display.
  absl::optional<int> cell_size;

};


//
// Functions
//

namespace GetDisplayState {

namespace Results {

base::Value::List Create(const DisplayState& result);
}  // namespace Results

}  // namespace GetDisplayState

namespace WriteDots {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::vector<uint8_t> cells;

  int columns;

  int rows;


 private:
  Params();
};

}  // namespace WriteDots

namespace UpdateBluetoothBrailleDisplayAddress {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string address;


 private:
  Params();
};

}  // namespace UpdateBluetoothBrailleDisplayAddress

//
// Events
//

namespace OnDisplayStateChanged {

extern const char kEventName[];  // "brailleDisplayPrivate.onDisplayStateChanged"

base::Value::List Create(const DisplayState& state);
}  // namespace OnDisplayStateChanged

namespace OnKeyEvent {

extern const char kEventName[];  // "brailleDisplayPrivate.onKeyEvent"

base::Value::List Create(const KeyEvent& event);
}  // namespace OnKeyEvent

}  // namespace braille_display_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_BRAILLE_DISPLAY_PRIVATE_H__
