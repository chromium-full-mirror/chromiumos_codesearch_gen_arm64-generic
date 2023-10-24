// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/braille_display_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/braille_display_private.h"

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
namespace braille_display_private {
//
// Types
//

const char* ToString(KeyCommand enum_param) {
  switch (enum_param) {
    case KeyCommand::kLineUp:
      return "line_up";
    case KeyCommand::kLineDown:
      return "line_down";
    case KeyCommand::kPanLeft:
      return "pan_left";
    case KeyCommand::kPanRight:
      return "pan_right";
    case KeyCommand::kTop:
      return "top";
    case KeyCommand::kBottom:
      return "bottom";
    case KeyCommand::kRouting:
      return "routing";
    case KeyCommand::kSecondaryRouting:
      return "secondary_routing";
    case KeyCommand::kDots:
      return "dots";
    case KeyCommand::kChord:
      return "chord";
    case KeyCommand::kStandardKey:
      return "standard_key";
    case KeyCommand::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

KeyCommand ParseKeyCommand(base::StringPiece enum_string) {
  if (enum_string == "line_up")
    return KeyCommand::kLineUp;
  if (enum_string == "line_down")
    return KeyCommand::kLineDown;
  if (enum_string == "pan_left")
    return KeyCommand::kPanLeft;
  if (enum_string == "pan_right")
    return KeyCommand::kPanRight;
  if (enum_string == "top")
    return KeyCommand::kTop;
  if (enum_string == "bottom")
    return KeyCommand::kBottom;
  if (enum_string == "routing")
    return KeyCommand::kRouting;
  if (enum_string == "secondary_routing")
    return KeyCommand::kSecondaryRouting;
  if (enum_string == "dots")
    return KeyCommand::kDots;
  if (enum_string == "chord")
    return KeyCommand::kChord;
  if (enum_string == "standard_key")
    return KeyCommand::kStandardKey;
  return KeyCommand::kNone;
}

std::u16string GetKeyCommandParseError(base::StringPiece enum_string) {
  return u"expected \"line_up\" or \"line_down\" or \"pan_left\" or \"pan_right\" or \"top\" or \"bottom\" or \"routing\" or \"secondary_routing\" or \"dots\" or \"chord\" or \"standard_key\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


KeyEvent::KeyEvent()
: command() {}

KeyEvent::~KeyEvent() = default;
KeyEvent::KeyEvent(KeyEvent&& rhs) = default;
KeyEvent& KeyEvent::operator=(KeyEvent&& rhs) = default;
KeyEvent KeyEvent::Clone() const {
  KeyEvent out;
  out.command = command;
  out.display_position = display_position;
  out.braille_dots = braille_dots;
  out.standard_key_code = standard_key_code;
  out.standard_key_char = standard_key_char;
  out.space_key = space_key;
  out.alt_key = alt_key;
  out.shift_key = shift_key;
  out.ctrl_key = ctrl_key;
  return out;
}

// static
bool KeyEvent::Populate(
    const base::Value::Dict& dict, KeyEvent& out) {
  const base::Value* command_value = dict.Find("command");
  if (!command_value) {
    return false;
  }
  {
    const std::string* key_command_as_string = (*command_value).GetIfString();
    if (!key_command_as_string) {
      return false;
    }
    out.command = ParseKeyCommand(*key_command_as_string);
    if (out.command == KeyCommand()) {
      return false;
    }
  }

  const base::Value* display_position_value = dict.Find("displayPosition");
  if (display_position_value) {
    {
      auto temp = (*display_position_value).GetIfInt();
      if (!temp.has_value()) {
        out.display_position = absl::nullopt;
        return false;
      }
      out.display_position = *temp;
    }
  }

  const base::Value* braille_dots_value = dict.Find("brailleDots");
  if (braille_dots_value) {
    {
      auto temp = (*braille_dots_value).GetIfInt();
      if (!temp.has_value()) {
        out.braille_dots = absl::nullopt;
        return false;
      }
      out.braille_dots = *temp;
    }
  }

  const base::Value* standard_key_code_value = dict.Find("standardKeyCode");
  if (standard_key_code_value) {
    {
      auto* temp = (*standard_key_code_value).GetIfString();
      if (!temp) {
        out.standard_key_code = absl::nullopt;
        return false;
      }
      out.standard_key_code = *temp;
    }
  }

  const base::Value* standard_key_char_value = dict.Find("standardKeyChar");
  if (standard_key_char_value) {
    {
      auto* temp = (*standard_key_char_value).GetIfString();
      if (!temp) {
        out.standard_key_char = absl::nullopt;
        return false;
      }
      out.standard_key_char = *temp;
    }
  }

  const base::Value* space_key_value = dict.Find("spaceKey");
  if (space_key_value) {
    {
      auto temp = (*space_key_value).GetIfBool();
      if (!temp.has_value()) {
        out.space_key = absl::nullopt;
        return false;
      }
      out.space_key = *temp;
    }
  }

  const base::Value* alt_key_value = dict.Find("altKey");
  if (alt_key_value) {
    {
      auto temp = (*alt_key_value).GetIfBool();
      if (!temp.has_value()) {
        out.alt_key = absl::nullopt;
        return false;
      }
      out.alt_key = *temp;
    }
  }

  const base::Value* shift_key_value = dict.Find("shiftKey");
  if (shift_key_value) {
    {
      auto temp = (*shift_key_value).GetIfBool();
      if (!temp.has_value()) {
        out.shift_key = absl::nullopt;
        return false;
      }
      out.shift_key = *temp;
    }
  }

  const base::Value* ctrl_key_value = dict.Find("ctrlKey");
  if (ctrl_key_value) {
    {
      auto temp = (*ctrl_key_value).GetIfBool();
      if (!temp.has_value()) {
        out.ctrl_key = absl::nullopt;
        return false;
      }
      out.ctrl_key = *temp;
    }
  }

  return true;
}

// static
bool KeyEvent::Populate(
    const base::Value& value, KeyEvent& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<KeyEvent> KeyEvent::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<KeyEvent>();
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
absl::optional<KeyEvent> KeyEvent::FromValue(const base::Value::Dict& value) {
  KeyEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<KeyEvent> KeyEvent::FromValue(const base::Value& value) {
  KeyEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict KeyEvent::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("command", braille_display_private::ToString(this->command));

  if (this->display_position) {
    to_value_result.Set("displayPosition", *this->display_position);

  }
  if (this->braille_dots) {
    to_value_result.Set("brailleDots", *this->braille_dots);

  }
  if (this->standard_key_code) {
    to_value_result.Set("standardKeyCode", *this->standard_key_code);

  }
  if (this->standard_key_char) {
    to_value_result.Set("standardKeyChar", *this->standard_key_char);

  }
  if (this->space_key) {
    to_value_result.Set("spaceKey", *this->space_key);

  }
  if (this->alt_key) {
    to_value_result.Set("altKey", *this->alt_key);

  }
  if (this->shift_key) {
    to_value_result.Set("shiftKey", *this->shift_key);

  }
  if (this->ctrl_key) {
    to_value_result.Set("ctrlKey", *this->ctrl_key);

  }

  return to_value_result;
}


DisplayState::DisplayState()
: available(false) {}

DisplayState::~DisplayState() = default;
DisplayState::DisplayState(DisplayState&& rhs) = default;
DisplayState& DisplayState::operator=(DisplayState&& rhs) = default;
DisplayState DisplayState::Clone() const {
  DisplayState out;
  out.available = available;
  out.text_row_count = text_row_count;
  out.text_column_count = text_column_count;
  out.cell_size = cell_size;
  return out;
}

// static
bool DisplayState::Populate(
    const base::Value::Dict& dict, DisplayState& out) {
  const base::Value* available_value = dict.Find("available");
  if (!available_value) {
    return false;
  }
  {
    auto temp = (*available_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.available = *temp;
  }

  const base::Value* text_row_count_value = dict.Find("textRowCount");
  if (text_row_count_value) {
    {
      auto temp = (*text_row_count_value).GetIfInt();
      if (!temp.has_value()) {
        out.text_row_count = absl::nullopt;
        return false;
      }
      out.text_row_count = *temp;
    }
  }

  const base::Value* text_column_count_value = dict.Find("textColumnCount");
  if (text_column_count_value) {
    {
      auto temp = (*text_column_count_value).GetIfInt();
      if (!temp.has_value()) {
        out.text_column_count = absl::nullopt;
        return false;
      }
      out.text_column_count = *temp;
    }
  }

  const base::Value* cell_size_value = dict.Find("cellSize");
  if (cell_size_value) {
    {
      auto temp = (*cell_size_value).GetIfInt();
      if (!temp.has_value()) {
        out.cell_size = absl::nullopt;
        return false;
      }
      out.cell_size = *temp;
    }
  }

  return true;
}

// static
bool DisplayState::Populate(
    const base::Value& value, DisplayState& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<DisplayState> DisplayState::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<DisplayState>();
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
absl::optional<DisplayState> DisplayState::FromValue(const base::Value::Dict& value) {
  DisplayState out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DisplayState> DisplayState::FromValue(const base::Value& value) {
  DisplayState out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict DisplayState::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("available", this->available);

  if (this->text_row_count) {
    to_value_result.Set("textRowCount", *this->text_row_count);

  }
  if (this->text_column_count) {
    to_value_result.Set("textColumnCount", *this->text_column_count);

  }
  if (this->cell_size) {
    to_value_result.Set("cellSize", *this->cell_size);

  }

  return to_value_result;
}



//
// Functions
//

namespace GetDisplayState {

base::Value::List Results::Create(const DisplayState& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace GetDisplayState

namespace WriteDots {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 3) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& cells_value = args[0];
    {
      if (!cells_value.is_blob()) {
        return absl::nullopt;
      }
      else {
        params.cells = cells_value.GetBlob();
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& columns_value = args[1];
    {
      auto temp = columns_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.columns = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& rows_value = args[2];
    {
      auto temp = rows_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.rows = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace WriteDots

namespace UpdateBluetoothBrailleDisplayAddress {

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
    const base::Value& address_value = args[0];
    {
      auto* temp = address_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.address = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace UpdateBluetoothBrailleDisplayAddress

//
// Events
//

namespace OnDisplayStateChanged {

const char kEventName[] = "brailleDisplayPrivate.onDisplayStateChanged";

base::Value::List Create(const DisplayState& state) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((state).ToValue());

  return create_results;
}

}  // namespace OnDisplayStateChanged

namespace OnKeyEvent {

const char kEventName[] = "brailleDisplayPrivate.onKeyEvent";

base::Value::List Create(const KeyEvent& event) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event).ToValue());

  return create_results;
}

}  // namespace OnKeyEvent

}  // namespace braille_display_private
}  // namespace api
}  // namespace extensions

