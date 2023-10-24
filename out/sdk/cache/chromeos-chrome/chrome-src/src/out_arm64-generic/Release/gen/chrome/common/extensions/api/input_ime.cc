// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/input_ime.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/input_ime.h"

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
namespace input_ime {
//
// Types
//

const char* ToString(KeyboardEventType enum_param) {
  switch (enum_param) {
    case KEYBOARD_EVENT_TYPE_KEYUP:
      return "keyup";
    case KEYBOARD_EVENT_TYPE_KEYDOWN:
      return "keydown";
    case KEYBOARD_EVENT_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

KeyboardEventType ParseKeyboardEventType(base::StringPiece enum_string) {
  if (enum_string == "keyup")
    return KEYBOARD_EVENT_TYPE_KEYUP;
  if (enum_string == "keydown")
    return KEYBOARD_EVENT_TYPE_KEYDOWN;
  return KEYBOARD_EVENT_TYPE_NONE;
}

std::u16string GetKeyboardEventTypeParseError(base::StringPiece enum_string) {
  return u"expected \"keyup\" or \"keydown\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


KeyboardEvent::KeyboardEvent()
: type() {}

KeyboardEvent::~KeyboardEvent() = default;
KeyboardEvent::KeyboardEvent(KeyboardEvent&& rhs) = default;
KeyboardEvent& KeyboardEvent::operator=(KeyboardEvent&& rhs) = default;
KeyboardEvent KeyboardEvent::Clone() const {
  KeyboardEvent out;
  out.type = type;
  out.request_id = request_id;
  out.extension_id = extension_id;
  out.key = key;
  out.code = code;
  out.key_code = key_code;
  out.alt_key = alt_key;
  out.altgr_key = altgr_key;
  out.ctrl_key = ctrl_key;
  out.shift_key = shift_key;
  out.caps_lock = caps_lock;
  return out;
}

// static
bool KeyboardEvent::Populate(
    const base::Value::Dict& dict, KeyboardEvent& out) {
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* keyboard_event_type_as_string = (*type_value).GetIfString();
    if (!keyboard_event_type_as_string) {
      return false;
    }
    out.type = ParseKeyboardEventType(*keyboard_event_type_as_string);
    if (out.type == KeyboardEventType()) {
      return false;
    }
  }

  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    {
      auto* temp = (*request_id_value).GetIfString();
      if (!temp) {
        out.request_id = absl::nullopt;
        return false;
      }
      out.request_id = *temp;
    }
  }

  const base::Value* extension_id_value = dict.Find("extensionId");
  if (extension_id_value) {
    {
      auto* temp = (*extension_id_value).GetIfString();
      if (!temp) {
        out.extension_id = absl::nullopt;
        return false;
      }
      out.extension_id = *temp;
    }
  }

  const base::Value* key_value = dict.Find("key");
  if (!key_value) {
    return false;
  }
  {
    auto* temp = (*key_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.key = *temp;
  }

  const base::Value* code_value = dict.Find("code");
  if (!code_value) {
    return false;
  }
  {
    auto* temp = (*code_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.code = *temp;
  }

  const base::Value* key_code_value = dict.Find("keyCode");
  if (key_code_value) {
    {
      auto temp = (*key_code_value).GetIfInt();
      if (!temp.has_value()) {
        out.key_code = absl::nullopt;
        return false;
      }
      out.key_code = *temp;
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

  const base::Value* altgr_key_value = dict.Find("altgrKey");
  if (altgr_key_value) {
    {
      auto temp = (*altgr_key_value).GetIfBool();
      if (!temp.has_value()) {
        out.altgr_key = absl::nullopt;
        return false;
      }
      out.altgr_key = *temp;
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

  const base::Value* caps_lock_value = dict.Find("capsLock");
  if (caps_lock_value) {
    {
      auto temp = (*caps_lock_value).GetIfBool();
      if (!temp.has_value()) {
        out.caps_lock = absl::nullopt;
        return false;
      }
      out.caps_lock = *temp;
    }
  }

  return true;
}

// static
bool KeyboardEvent::Populate(
    const base::Value& value, KeyboardEvent& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<KeyboardEvent> KeyboardEvent::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<KeyboardEvent>();
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
absl::optional<KeyboardEvent> KeyboardEvent::FromValue(const base::Value::Dict& value) {
  KeyboardEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<KeyboardEvent> KeyboardEvent::FromValue(const base::Value& value) {
  KeyboardEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict KeyboardEvent::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("type", input_ime::ToString(this->type));

  if (this->request_id) {
    to_value_result.Set("requestId", *this->request_id);

  }
  if (this->extension_id) {
    to_value_result.Set("extensionId", *this->extension_id);

  }
  to_value_result.Set("key", this->key);

  to_value_result.Set("code", this->code);

  if (this->key_code) {
    to_value_result.Set("keyCode", *this->key_code);

  }
  if (this->alt_key) {
    to_value_result.Set("altKey", *this->alt_key);

  }
  if (this->altgr_key) {
    to_value_result.Set("altgrKey", *this->altgr_key);

  }
  if (this->ctrl_key) {
    to_value_result.Set("ctrlKey", *this->ctrl_key);

  }
  if (this->shift_key) {
    to_value_result.Set("shiftKey", *this->shift_key);

  }
  if (this->caps_lock) {
    to_value_result.Set("capsLock", *this->caps_lock);

  }

  return to_value_result;
}


const char* ToString(InputContextType enum_param) {
  switch (enum_param) {
    case INPUT_CONTEXT_TYPE_TEXT:
      return "text";
    case INPUT_CONTEXT_TYPE_SEARCH:
      return "search";
    case INPUT_CONTEXT_TYPE_TEL:
      return "tel";
    case INPUT_CONTEXT_TYPE_URL:
      return "url";
    case INPUT_CONTEXT_TYPE_EMAIL:
      return "email";
    case INPUT_CONTEXT_TYPE_NUMBER:
      return "number";
    case INPUT_CONTEXT_TYPE_PASSWORD:
      return "password";
    case INPUT_CONTEXT_TYPE_NULL:
      return "null";
    case INPUT_CONTEXT_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

InputContextType ParseInputContextType(base::StringPiece enum_string) {
  if (enum_string == "text")
    return INPUT_CONTEXT_TYPE_TEXT;
  if (enum_string == "search")
    return INPUT_CONTEXT_TYPE_SEARCH;
  if (enum_string == "tel")
    return INPUT_CONTEXT_TYPE_TEL;
  if (enum_string == "url")
    return INPUT_CONTEXT_TYPE_URL;
  if (enum_string == "email")
    return INPUT_CONTEXT_TYPE_EMAIL;
  if (enum_string == "number")
    return INPUT_CONTEXT_TYPE_NUMBER;
  if (enum_string == "password")
    return INPUT_CONTEXT_TYPE_PASSWORD;
  if (enum_string == "null")
    return INPUT_CONTEXT_TYPE_NULL;
  return INPUT_CONTEXT_TYPE_NONE;
}

std::u16string GetInputContextTypeParseError(base::StringPiece enum_string) {
  return u"expected \"text\" or \"search\" or \"tel\" or \"url\" or \"email\" or \"number\" or \"password\" or \"null\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(AutoCapitalizeType enum_param) {
  switch (enum_param) {
    case AUTO_CAPITALIZE_TYPE_CHARACTERS:
      return "characters";
    case AUTO_CAPITALIZE_TYPE_WORDS:
      return "words";
    case AUTO_CAPITALIZE_TYPE_SENTENCES:
      return "sentences";
    case AUTO_CAPITALIZE_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

AutoCapitalizeType ParseAutoCapitalizeType(base::StringPiece enum_string) {
  if (enum_string == "characters")
    return AUTO_CAPITALIZE_TYPE_CHARACTERS;
  if (enum_string == "words")
    return AUTO_CAPITALIZE_TYPE_WORDS;
  if (enum_string == "sentences")
    return AUTO_CAPITALIZE_TYPE_SENTENCES;
  return AUTO_CAPITALIZE_TYPE_NONE;
}

std::u16string GetAutoCapitalizeTypeParseError(base::StringPiece enum_string) {
  return u"expected \"characters\" or \"words\" or \"sentences\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


InputContext::InputContext()
: context_id(0),
type(),
auto_correct(false),
auto_complete(false),
auto_capitalize(),
spell_check(false),
should_do_learning(false) {}

InputContext::~InputContext() = default;
InputContext::InputContext(InputContext&& rhs) = default;
InputContext& InputContext::operator=(InputContext&& rhs) = default;
InputContext InputContext::Clone() const {
  InputContext out;
  out.context_id = context_id;
  out.type = type;
  out.auto_correct = auto_correct;
  out.auto_complete = auto_complete;
  out.auto_capitalize = auto_capitalize;
  out.spell_check = spell_check;
  out.should_do_learning = should_do_learning;
  return out;
}

// static
bool InputContext::Populate(
    const base::Value::Dict& dict, InputContext& out) {
  const base::Value* context_id_value = dict.Find("contextID");
  if (!context_id_value) {
    return false;
  }
  {
    auto temp = (*context_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.context_id = *temp;
  }

  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* input_context_type_as_string = (*type_value).GetIfString();
    if (!input_context_type_as_string) {
      return false;
    }
    out.type = ParseInputContextType(*input_context_type_as_string);
    if (out.type == InputContextType()) {
      return false;
    }
  }

  const base::Value* auto_correct_value = dict.Find("autoCorrect");
  if (!auto_correct_value) {
    return false;
  }
  {
    auto temp = (*auto_correct_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.auto_correct = *temp;
  }

  const base::Value* auto_complete_value = dict.Find("autoComplete");
  if (!auto_complete_value) {
    return false;
  }
  {
    auto temp = (*auto_complete_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.auto_complete = *temp;
  }

  const base::Value* auto_capitalize_value = dict.Find("autoCapitalize");
  if (!auto_capitalize_value) {
    return false;
  }
  {
    const std::string* auto_capitalize_type_as_string = (*auto_capitalize_value).GetIfString();
    if (!auto_capitalize_type_as_string) {
      return false;
    }
    out.auto_capitalize = ParseAutoCapitalizeType(*auto_capitalize_type_as_string);
    if (out.auto_capitalize == AutoCapitalizeType()) {
      return false;
    }
  }

  const base::Value* spell_check_value = dict.Find("spellCheck");
  if (!spell_check_value) {
    return false;
  }
  {
    auto temp = (*spell_check_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.spell_check = *temp;
  }

  const base::Value* should_do_learning_value = dict.Find("shouldDoLearning");
  if (!should_do_learning_value) {
    return false;
  }
  {
    auto temp = (*should_do_learning_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.should_do_learning = *temp;
  }

  return true;
}

// static
bool InputContext::Populate(
    const base::Value& value, InputContext& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<InputContext> InputContext::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<InputContext>();
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
absl::optional<InputContext> InputContext::FromValue(const base::Value::Dict& value) {
  InputContext out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<InputContext> InputContext::FromValue(const base::Value& value) {
  InputContext out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict InputContext::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("contextID", this->context_id);

  to_value_result.Set("type", input_ime::ToString(this->type));

  to_value_result.Set("autoCorrect", this->auto_correct);

  to_value_result.Set("autoComplete", this->auto_complete);

  to_value_result.Set("autoCapitalize", input_ime::ToString(this->auto_capitalize));

  to_value_result.Set("spellCheck", this->spell_check);

  to_value_result.Set("shouldDoLearning", this->should_do_learning);


  return to_value_result;
}


const char* ToString(MenuItemStyle enum_param) {
  switch (enum_param) {
    case MENU_ITEM_STYLE_CHECK:
      return "check";
    case MENU_ITEM_STYLE_RADIO:
      return "radio";
    case MENU_ITEM_STYLE_SEPARATOR:
      return "separator";
    case MENU_ITEM_STYLE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

MenuItemStyle ParseMenuItemStyle(base::StringPiece enum_string) {
  if (enum_string == "check")
    return MENU_ITEM_STYLE_CHECK;
  if (enum_string == "radio")
    return MENU_ITEM_STYLE_RADIO;
  if (enum_string == "separator")
    return MENU_ITEM_STYLE_SEPARATOR;
  return MENU_ITEM_STYLE_NONE;
}

std::u16string GetMenuItemStyleParseError(base::StringPiece enum_string) {
  return u"expected \"check\" or \"radio\" or \"separator\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


MenuItem::MenuItem()
: style() {}

MenuItem::~MenuItem() = default;
MenuItem::MenuItem(MenuItem&& rhs) = default;
MenuItem& MenuItem::operator=(MenuItem&& rhs) = default;
MenuItem MenuItem::Clone() const {
  MenuItem out;
  out.id = id;
  out.label = label;
  out.style = style;
  out.visible = visible;
  out.checked = checked;
  out.enabled = enabled;
  return out;
}

// static
bool MenuItem::Populate(
    const base::Value::Dict& dict, MenuItem& out) {
  out.style = MenuItemStyle();
  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto* temp = (*id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* label_value = dict.Find("label");
  if (label_value) {
    {
      auto* temp = (*label_value).GetIfString();
      if (!temp) {
        out.label = absl::nullopt;
        return false;
      }
      out.label = *temp;
    }
  }

  const base::Value* style_value = dict.Find("style");
  if (style_value) {
    {
      const std::string* menu_item_style_as_string = (*style_value).GetIfString();
      if (!menu_item_style_as_string) {
        return false;
      }
      out.style = ParseMenuItemStyle(*menu_item_style_as_string);
      if (out.style == MenuItemStyle()) {
        return false;
      }
    }
    } else {
    out.style = MenuItemStyle();
  }

  const base::Value* visible_value = dict.Find("visible");
  if (visible_value) {
    {
      auto temp = (*visible_value).GetIfBool();
      if (!temp.has_value()) {
        out.visible = absl::nullopt;
        return false;
      }
      out.visible = *temp;
    }
  }

  const base::Value* checked_value = dict.Find("checked");
  if (checked_value) {
    {
      auto temp = (*checked_value).GetIfBool();
      if (!temp.has_value()) {
        out.checked = absl::nullopt;
        return false;
      }
      out.checked = *temp;
    }
  }

  const base::Value* enabled_value = dict.Find("enabled");
  if (enabled_value) {
    {
      auto temp = (*enabled_value).GetIfBool();
      if (!temp.has_value()) {
        out.enabled = absl::nullopt;
        return false;
      }
      out.enabled = *temp;
    }
  }

  return true;
}

// static
bool MenuItem::Populate(
    const base::Value& value, MenuItem& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<MenuItem> MenuItem::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<MenuItem>();
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
absl::optional<MenuItem> MenuItem::FromValue(const base::Value::Dict& value) {
  MenuItem out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<MenuItem> MenuItem::FromValue(const base::Value& value) {
  MenuItem out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict MenuItem::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  if (this->label) {
    to_value_result.Set("label", *this->label);

  }
  if (this->style != MenuItemStyle()) {
    to_value_result.Set("style", input_ime::ToString(this->style));

  }
  if (this->visible) {
    to_value_result.Set("visible", *this->visible);

  }
  if (this->checked) {
    to_value_result.Set("checked", *this->checked);

  }
  if (this->enabled) {
    to_value_result.Set("enabled", *this->enabled);

  }

  return to_value_result;
}


const char* ToString(UnderlineStyle enum_param) {
  switch (enum_param) {
    case UNDERLINE_STYLE_UNDERLINE:
      return "underline";
    case UNDERLINE_STYLE_DOUBLEUNDERLINE:
      return "doubleUnderline";
    case UNDERLINE_STYLE_NOUNDERLINE:
      return "noUnderline";
    case UNDERLINE_STYLE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

UnderlineStyle ParseUnderlineStyle(base::StringPiece enum_string) {
  if (enum_string == "underline")
    return UNDERLINE_STYLE_UNDERLINE;
  if (enum_string == "doubleUnderline")
    return UNDERLINE_STYLE_DOUBLEUNDERLINE;
  if (enum_string == "noUnderline")
    return UNDERLINE_STYLE_NOUNDERLINE;
  return UNDERLINE_STYLE_NONE;
}

std::u16string GetUnderlineStyleParseError(base::StringPiece enum_string) {
  return u"expected \"underline\" or \"doubleUnderline\" or \"noUnderline\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(WindowPosition enum_param) {
  switch (enum_param) {
    case WINDOW_POSITION_CURSOR:
      return "cursor";
    case WINDOW_POSITION_COMPOSITION:
      return "composition";
    case WINDOW_POSITION_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

WindowPosition ParseWindowPosition(base::StringPiece enum_string) {
  if (enum_string == "cursor")
    return WINDOW_POSITION_CURSOR;
  if (enum_string == "composition")
    return WINDOW_POSITION_COMPOSITION;
  return WINDOW_POSITION_NONE;
}

std::u16string GetWindowPositionParseError(base::StringPiece enum_string) {
  return u"expected \"cursor\" or \"composition\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ScreenType enum_param) {
  switch (enum_param) {
    case SCREEN_TYPE_NORMAL:
      return "normal";
    case SCREEN_TYPE_LOGIN:
      return "login";
    case SCREEN_TYPE_LOCK:
      return "lock";
    case SCREEN_TYPE_SECONDARY_LOGIN:
      return "secondary-login";
    case SCREEN_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

ScreenType ParseScreenType(base::StringPiece enum_string) {
  if (enum_string == "normal")
    return SCREEN_TYPE_NORMAL;
  if (enum_string == "login")
    return SCREEN_TYPE_LOGIN;
  if (enum_string == "lock")
    return SCREEN_TYPE_LOCK;
  if (enum_string == "secondary-login")
    return SCREEN_TYPE_SECONDARY_LOGIN;
  return SCREEN_TYPE_NONE;
}

std::u16string GetScreenTypeParseError(base::StringPiece enum_string) {
  return u"expected \"normal\" or \"login\" or \"lock\" or \"secondary-login\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(MouseButton enum_param) {
  switch (enum_param) {
    case MOUSE_BUTTON_LEFT:
      return "left";
    case MOUSE_BUTTON_MIDDLE:
      return "middle";
    case MOUSE_BUTTON_RIGHT:
      return "right";
    case MOUSE_BUTTON_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

MouseButton ParseMouseButton(base::StringPiece enum_string) {
  if (enum_string == "left")
    return MOUSE_BUTTON_LEFT;
  if (enum_string == "middle")
    return MOUSE_BUTTON_MIDDLE;
  if (enum_string == "right")
    return MOUSE_BUTTON_RIGHT;
  return MOUSE_BUTTON_NONE;
}

std::u16string GetMouseButtonParseError(base::StringPiece enum_string) {
  return u"expected \"left\" or \"middle\" or \"right\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(AssistiveWindowType enum_param) {
  switch (enum_param) {
    case ASSISTIVE_WINDOW_TYPE_UNDO:
      return "undo";
    case ASSISTIVE_WINDOW_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

AssistiveWindowType ParseAssistiveWindowType(base::StringPiece enum_string) {
  if (enum_string == "undo")
    return ASSISTIVE_WINDOW_TYPE_UNDO;
  return ASSISTIVE_WINDOW_TYPE_NONE;
}

std::u16string GetAssistiveWindowTypeParseError(base::StringPiece enum_string) {
  return u"expected \"undo\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


AssistiveWindowProperties::AssistiveWindowProperties()
: type(),
visible(false) {}

AssistiveWindowProperties::~AssistiveWindowProperties() = default;
AssistiveWindowProperties::AssistiveWindowProperties(AssistiveWindowProperties&& rhs) = default;
AssistiveWindowProperties& AssistiveWindowProperties::operator=(AssistiveWindowProperties&& rhs) = default;
AssistiveWindowProperties AssistiveWindowProperties::Clone() const {
  AssistiveWindowProperties out;
  out.type = type;
  out.visible = visible;
  out.announce_string = announce_string;
  return out;
}

// static
bool AssistiveWindowProperties::Populate(
    const base::Value::Dict& dict, AssistiveWindowProperties& out) {
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* assistive_window_type_as_string = (*type_value).GetIfString();
    if (!assistive_window_type_as_string) {
      return false;
    }
    out.type = ParseAssistiveWindowType(*assistive_window_type_as_string);
    if (out.type == AssistiveWindowType()) {
      return false;
    }
  }

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

  const base::Value* announce_string_value = dict.Find("announceString");
  if (announce_string_value) {
    {
      auto* temp = (*announce_string_value).GetIfString();
      if (!temp) {
        out.announce_string = absl::nullopt;
        return false;
      }
      out.announce_string = *temp;
    }
  }

  return true;
}

// static
bool AssistiveWindowProperties::Populate(
    const base::Value& value, AssistiveWindowProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<AssistiveWindowProperties> AssistiveWindowProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<AssistiveWindowProperties>();
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
absl::optional<AssistiveWindowProperties> AssistiveWindowProperties::FromValue(const base::Value::Dict& value) {
  AssistiveWindowProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<AssistiveWindowProperties> AssistiveWindowProperties::FromValue(const base::Value& value) {
  AssistiveWindowProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict AssistiveWindowProperties::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("type", input_ime::ToString(this->type));

  to_value_result.Set("visible", this->visible);

  if (this->announce_string) {
    to_value_result.Set("announceString", *this->announce_string);

  }

  return to_value_result;
}


const char* ToString(AssistiveWindowButton enum_param) {
  switch (enum_param) {
    case ASSISTIVE_WINDOW_BUTTON_UNDO:
      return "undo";
    case ASSISTIVE_WINDOW_BUTTON_ADDTODICTIONARY:
      return "addToDictionary";
    case ASSISTIVE_WINDOW_BUTTON_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

AssistiveWindowButton ParseAssistiveWindowButton(base::StringPiece enum_string) {
  if (enum_string == "undo")
    return ASSISTIVE_WINDOW_BUTTON_UNDO;
  if (enum_string == "addToDictionary")
    return ASSISTIVE_WINDOW_BUTTON_ADDTODICTIONARY;
  return ASSISTIVE_WINDOW_BUTTON_NONE;
}

std::u16string GetAssistiveWindowButtonParseError(base::StringPiece enum_string) {
  return u"expected \"undo\" or \"addToDictionary\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


MenuParameters::MenuParameters()
 {}

MenuParameters::~MenuParameters() = default;
MenuParameters::MenuParameters(MenuParameters&& rhs) = default;
MenuParameters& MenuParameters::operator=(MenuParameters&& rhs) = default;
MenuParameters MenuParameters::Clone() const {
  MenuParameters out;
  out.engine_id = engine_id;
  out.items.reserve(items.size());
  for (const auto& element : items) {
    json_schema_compiler::util::AppendToContainer(out.items, element.Clone());
  }
  return out;
}

// static
bool MenuParameters::Populate(
    const base::Value::Dict& dict, MenuParameters& out) {
  const base::Value* engine_id_value = dict.Find("engineID");
  if (!engine_id_value) {
    return false;
  }
  {
    auto* temp = (*engine_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.engine_id = *temp;
  }

  const base::Value* items_value = dict.Find("items");
  if (!items_value) {
    return false;
  }
  {
    if (!(*items_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*items_value).GetList(), out.items)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool MenuParameters::Populate(
    const base::Value& value, MenuParameters& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<MenuParameters> MenuParameters::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<MenuParameters>();
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
absl::optional<MenuParameters> MenuParameters::FromValue(const base::Value::Dict& value) {
  MenuParameters out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<MenuParameters> MenuParameters::FromValue(const base::Value& value) {
  MenuParameters out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict MenuParameters::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("engineID", this->engine_id);

  to_value_result.Set("items", json_schema_compiler::util::CreateValueFromArray(this->items));


  return to_value_result;
}



//
// Functions
//

namespace SetComposition {

Params::Parameters::SegmentsType::SegmentsType()
: start(0),
end(0),
style() {}

Params::Parameters::SegmentsType::~SegmentsType() = default;
Params::Parameters::SegmentsType::SegmentsType(SegmentsType&& rhs) = default;
Params::Parameters::SegmentsType& Params::Parameters::SegmentsType::operator=(SegmentsType&& rhs) = default;
Params::Parameters::SegmentsType Params::Parameters::SegmentsType::Clone() const {
  SegmentsType out;
  out.start = start;
  out.end = end;
  out.style = style;
  return out;
}

// static
bool Params::Parameters::SegmentsType::Populate(
    const base::Value::Dict& dict, SegmentsType& out) {
  const base::Value* start_value = dict.Find("start");
  if (!start_value) {
    return false;
  }
  {
    auto temp = (*start_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.start = *temp;
  }

  const base::Value* end_value = dict.Find("end");
  if (!end_value) {
    return false;
  }
  {
    auto temp = (*end_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.end = *temp;
  }

  const base::Value* style_value = dict.Find("style");
  if (!style_value) {
    return false;
  }
  {
    const std::string* underline_style_as_string = (*style_value).GetIfString();
    if (!underline_style_as_string) {
      return false;
    }
    out.style = ParseUnderlineStyle(*underline_style_as_string);
    if (out.style == UnderlineStyle()) {
      return false;
    }
  }

  return true;
}

// static
bool Params::Parameters::SegmentsType::Populate(
    const base::Value& value, SegmentsType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Parameters::SegmentsType> Params::Parameters::SegmentsType::FromValue(const base::Value::Dict& value) {
  SegmentsType out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Parameters::SegmentsType> Params::Parameters::SegmentsType::FromValue(const base::Value& value) {
  SegmentsType out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}




Params::Parameters::Parameters()
: context_id(0),
cursor(0) {}

Params::Parameters::~Parameters() = default;
Params::Parameters::Parameters(Parameters&& rhs) = default;
Params::Parameters& Params::Parameters::operator=(Parameters&& rhs) = default;
Params::Parameters Params::Parameters::Clone() const {
  Parameters out;
  out.context_id = context_id;
  out.text = text;
  out.selection_start = selection_start;
  out.selection_end = selection_end;
  out.cursor = cursor;
  if (segments) {
    out.segments.emplace();
    out.segments->reserve(segments->size());
    for (const auto& element : *segments) {
      json_schema_compiler::util::AppendToContainer(*out.segments, element.Clone());
    }
  }
  return out;
}

// static
bool Params::Parameters::Populate(
    const base::Value::Dict& dict, Parameters& out) {
  const base::Value* context_id_value = dict.Find("contextID");
  if (!context_id_value) {
    return false;
  }
  {
    auto temp = (*context_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.context_id = *temp;
  }

  const base::Value* text_value = dict.Find("text");
  if (!text_value) {
    return false;
  }
  {
    auto* temp = (*text_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.text = *temp;
  }

  const base::Value* selection_start_value = dict.Find("selectionStart");
  if (selection_start_value) {
    {
      auto temp = (*selection_start_value).GetIfInt();
      if (!temp.has_value()) {
        out.selection_start = absl::nullopt;
        return false;
      }
      out.selection_start = *temp;
    }
  }

  const base::Value* selection_end_value = dict.Find("selectionEnd");
  if (selection_end_value) {
    {
      auto temp = (*selection_end_value).GetIfInt();
      if (!temp.has_value()) {
        out.selection_end = absl::nullopt;
        return false;
      }
      out.selection_end = *temp;
    }
  }

  const base::Value* cursor_value = dict.Find("cursor");
  if (!cursor_value) {
    return false;
  }
  {
    auto temp = (*cursor_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.cursor = *temp;
  }

  const base::Value* segments_value = dict.Find("segments");
  if (segments_value) {
    {
      if (!(*segments_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*segments_value).GetList(), out.segments)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool Params::Parameters::Populate(
    const base::Value& value, Parameters& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Parameters> Params::Parameters::FromValue(const base::Value::Dict& value) {
  Parameters out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Parameters> Params::Parameters::FromValue(const base::Value& value) {
  Parameters out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


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
    const base::Value& parameters_value = args[0];
    {
      if (!parameters_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Parameters::Populate(parameters_value.GetDict(), params.parameters)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace SetComposition

namespace ClearComposition {

Params::Parameters::Parameters()
: context_id(0) {}

Params::Parameters::~Parameters() = default;
Params::Parameters::Parameters(Parameters&& rhs) = default;
Params::Parameters& Params::Parameters::operator=(Parameters&& rhs) = default;
Params::Parameters Params::Parameters::Clone() const {
  Parameters out;
  out.context_id = context_id;
  return out;
}

// static
bool Params::Parameters::Populate(
    const base::Value::Dict& dict, Parameters& out) {
  const base::Value* context_id_value = dict.Find("contextID");
  if (!context_id_value) {
    return false;
  }
  {
    auto temp = (*context_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.context_id = *temp;
  }

  return true;
}

// static
bool Params::Parameters::Populate(
    const base::Value& value, Parameters& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Parameters> Params::Parameters::FromValue(const base::Value::Dict& value) {
  Parameters out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Parameters> Params::Parameters::FromValue(const base::Value& value) {
  Parameters out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


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
    const base::Value& parameters_value = args[0];
    {
      if (!parameters_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Parameters::Populate(parameters_value.GetDict(), params.parameters)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace ClearComposition

namespace CommitText {

Params::Parameters::Parameters()
: context_id(0) {}

Params::Parameters::~Parameters() = default;
Params::Parameters::Parameters(Parameters&& rhs) = default;
Params::Parameters& Params::Parameters::operator=(Parameters&& rhs) = default;
Params::Parameters Params::Parameters::Clone() const {
  Parameters out;
  out.context_id = context_id;
  out.text = text;
  return out;
}

// static
bool Params::Parameters::Populate(
    const base::Value::Dict& dict, Parameters& out) {
  const base::Value* context_id_value = dict.Find("contextID");
  if (!context_id_value) {
    return false;
  }
  {
    auto temp = (*context_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.context_id = *temp;
  }

  const base::Value* text_value = dict.Find("text");
  if (!text_value) {
    return false;
  }
  {
    auto* temp = (*text_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.text = *temp;
  }

  return true;
}

// static
bool Params::Parameters::Populate(
    const base::Value& value, Parameters& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Parameters> Params::Parameters::FromValue(const base::Value::Dict& value) {
  Parameters out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Parameters> Params::Parameters::FromValue(const base::Value& value) {
  Parameters out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


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
    const base::Value& parameters_value = args[0];
    {
      if (!parameters_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Parameters::Populate(parameters_value.GetDict(), params.parameters)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace CommitText

namespace SendKeyEvents {

Params::Parameters::Parameters()
: context_id(0) {}

Params::Parameters::~Parameters() = default;
Params::Parameters::Parameters(Parameters&& rhs) = default;
Params::Parameters& Params::Parameters::operator=(Parameters&& rhs) = default;
Params::Parameters Params::Parameters::Clone() const {
  Parameters out;
  out.context_id = context_id;
  out.key_data.reserve(key_data.size());
  for (const auto& element : key_data) {
    json_schema_compiler::util::AppendToContainer(out.key_data, element.Clone());
  }
  return out;
}

// static
bool Params::Parameters::Populate(
    const base::Value::Dict& dict, Parameters& out) {
  const base::Value* context_id_value = dict.Find("contextID");
  if (!context_id_value) {
    return false;
  }
  {
    auto temp = (*context_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.context_id = *temp;
  }

  const base::Value* key_data_value = dict.Find("keyData");
  if (!key_data_value) {
    return false;
  }
  {
    if (!(*key_data_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*key_data_value).GetList(), out.key_data)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool Params::Parameters::Populate(
    const base::Value& value, Parameters& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Parameters> Params::Parameters::FromValue(const base::Value::Dict& value) {
  Parameters out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Parameters> Params::Parameters::FromValue(const base::Value& value) {
  Parameters out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


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
    const base::Value& parameters_value = args[0];
    {
      if (!parameters_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Parameters::Populate(parameters_value.GetDict(), params.parameters)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SendKeyEvents

namespace HideInputView {

}  // namespace HideInputView

namespace SetCandidateWindowProperties {

Params::Parameters::Properties::Properties()
: window_position() {}

Params::Parameters::Properties::~Properties() = default;
Params::Parameters::Properties::Properties(Properties&& rhs) = default;
Params::Parameters::Properties& Params::Parameters::Properties::operator=(Properties&& rhs) = default;
Params::Parameters::Properties Params::Parameters::Properties::Clone() const {
  Properties out;
  out.visible = visible;
  out.cursor_visible = cursor_visible;
  out.vertical = vertical;
  out.page_size = page_size;
  out.auxiliary_text = auxiliary_text;
  out.auxiliary_text_visible = auxiliary_text_visible;
  out.total_candidates = total_candidates;
  out.current_candidate_index = current_candidate_index;
  out.window_position = window_position;
  return out;
}

// static
bool Params::Parameters::Properties::Populate(
    const base::Value::Dict& dict, Properties& out) {
  out.window_position = WindowPosition();
  const base::Value* visible_value = dict.Find("visible");
  if (visible_value) {
    {
      auto temp = (*visible_value).GetIfBool();
      if (!temp.has_value()) {
        out.visible = absl::nullopt;
        return false;
      }
      out.visible = *temp;
    }
  }

  const base::Value* cursor_visible_value = dict.Find("cursorVisible");
  if (cursor_visible_value) {
    {
      auto temp = (*cursor_visible_value).GetIfBool();
      if (!temp.has_value()) {
        out.cursor_visible = absl::nullopt;
        return false;
      }
      out.cursor_visible = *temp;
    }
  }

  const base::Value* vertical_value = dict.Find("vertical");
  if (vertical_value) {
    {
      auto temp = (*vertical_value).GetIfBool();
      if (!temp.has_value()) {
        out.vertical = absl::nullopt;
        return false;
      }
      out.vertical = *temp;
    }
  }

  const base::Value* page_size_value = dict.Find("pageSize");
  if (page_size_value) {
    {
      auto temp = (*page_size_value).GetIfInt();
      if (!temp.has_value()) {
        out.page_size = absl::nullopt;
        return false;
      }
      out.page_size = *temp;
    }
  }

  const base::Value* auxiliary_text_value = dict.Find("auxiliaryText");
  if (auxiliary_text_value) {
    {
      auto* temp = (*auxiliary_text_value).GetIfString();
      if (!temp) {
        out.auxiliary_text = absl::nullopt;
        return false;
      }
      out.auxiliary_text = *temp;
    }
  }

  const base::Value* auxiliary_text_visible_value = dict.Find("auxiliaryTextVisible");
  if (auxiliary_text_visible_value) {
    {
      auto temp = (*auxiliary_text_visible_value).GetIfBool();
      if (!temp.has_value()) {
        out.auxiliary_text_visible = absl::nullopt;
        return false;
      }
      out.auxiliary_text_visible = *temp;
    }
  }

  const base::Value* total_candidates_value = dict.Find("totalCandidates");
  if (total_candidates_value) {
    {
      auto temp = (*total_candidates_value).GetIfInt();
      if (!temp.has_value()) {
        out.total_candidates = absl::nullopt;
        return false;
      }
      out.total_candidates = *temp;
    }
  }

  const base::Value* current_candidate_index_value = dict.Find("currentCandidateIndex");
  if (current_candidate_index_value) {
    {
      auto temp = (*current_candidate_index_value).GetIfInt();
      if (!temp.has_value()) {
        out.current_candidate_index = absl::nullopt;
        return false;
      }
      out.current_candidate_index = *temp;
    }
  }

  const base::Value* window_position_value = dict.Find("windowPosition");
  if (window_position_value) {
    {
      const std::string* window_position_as_string = (*window_position_value).GetIfString();
      if (!window_position_as_string) {
        return false;
      }
      out.window_position = ParseWindowPosition(*window_position_as_string);
      if (out.window_position == WindowPosition()) {
        return false;
      }
    }
    } else {
    out.window_position = WindowPosition();
  }

  return true;
}

// static
bool Params::Parameters::Properties::Populate(
    const base::Value& value, Properties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Parameters::Properties> Params::Parameters::Properties::FromValue(const base::Value::Dict& value) {
  Properties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Parameters::Properties> Params::Parameters::Properties::FromValue(const base::Value& value) {
  Properties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}



Params::Parameters::Parameters()
 {}

Params::Parameters::~Parameters() = default;
Params::Parameters::Parameters(Parameters&& rhs) = default;
Params::Parameters& Params::Parameters::operator=(Parameters&& rhs) = default;
Params::Parameters Params::Parameters::Clone() const {
  Parameters out;
  out.engine_id = engine_id;
  out.properties = properties.Clone();
  return out;
}

// static
bool Params::Parameters::Populate(
    const base::Value::Dict& dict, Parameters& out) {
  const base::Value* engine_id_value = dict.Find("engineID");
  if (!engine_id_value) {
    return false;
  }
  {
    auto* temp = (*engine_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.engine_id = *temp;
  }

  const base::Value* properties_value = dict.Find("properties");
  if (!properties_value) {
    return false;
  }
  {
    if (!(*properties_value).is_dict()) {
      return false;
    }
    if (!Properties::Populate((*properties_value).GetDict(), out.properties)) {
      return false;
    }
  }

  return true;
}

// static
bool Params::Parameters::Populate(
    const base::Value& value, Parameters& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Parameters> Params::Parameters::FromValue(const base::Value::Dict& value) {
  Parameters out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Parameters> Params::Parameters::FromValue(const base::Value& value) {
  Parameters out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


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
    const base::Value& parameters_value = args[0];
    {
      if (!parameters_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Parameters::Populate(parameters_value.GetDict(), params.parameters)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace SetCandidateWindowProperties

namespace SetCandidates {

Params::Parameters::CandidatesType::Usage::Usage()
 {}

Params::Parameters::CandidatesType::Usage::~Usage() = default;
Params::Parameters::CandidatesType::Usage::Usage(Usage&& rhs) = default;
Params::Parameters::CandidatesType::Usage& Params::Parameters::CandidatesType::Usage::operator=(Usage&& rhs) = default;
Params::Parameters::CandidatesType::Usage Params::Parameters::CandidatesType::Usage::Clone() const {
  Usage out;
  out.title = title;
  out.body = body;
  return out;
}

// static
bool Params::Parameters::CandidatesType::Usage::Populate(
    const base::Value::Dict& dict, Usage& out) {
  const base::Value* title_value = dict.Find("title");
  if (!title_value) {
    return false;
  }
  {
    auto* temp = (*title_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.title = *temp;
  }

  const base::Value* body_value = dict.Find("body");
  if (!body_value) {
    return false;
  }
  {
    auto* temp = (*body_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.body = *temp;
  }

  return true;
}

// static
bool Params::Parameters::CandidatesType::Usage::Populate(
    const base::Value& value, Usage& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Parameters::CandidatesType::Usage> Params::Parameters::CandidatesType::Usage::FromValue(const base::Value::Dict& value) {
  Usage out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Parameters::CandidatesType::Usage> Params::Parameters::CandidatesType::Usage::FromValue(const base::Value& value) {
  Usage out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}



Params::Parameters::CandidatesType::CandidatesType()
: id(0) {}

Params::Parameters::CandidatesType::~CandidatesType() = default;
Params::Parameters::CandidatesType::CandidatesType(CandidatesType&& rhs) = default;
Params::Parameters::CandidatesType& Params::Parameters::CandidatesType::operator=(CandidatesType&& rhs) = default;
Params::Parameters::CandidatesType Params::Parameters::CandidatesType::Clone() const {
  CandidatesType out;
  out.candidate = candidate;
  out.id = id;
  out.parent_id = parent_id;
  out.label = label;
  out.annotation = annotation;
  if (usage) {
    out.usage = usage->Clone();
  }
  return out;
}

// static
bool Params::Parameters::CandidatesType::Populate(
    const base::Value::Dict& dict, CandidatesType& out) {
  const base::Value* candidate_value = dict.Find("candidate");
  if (!candidate_value) {
    return false;
  }
  {
    auto* temp = (*candidate_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.candidate = *temp;
  }

  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto temp = (*id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* parent_id_value = dict.Find("parentId");
  if (parent_id_value) {
    {
      auto temp = (*parent_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.parent_id = absl::nullopt;
        return false;
      }
      out.parent_id = *temp;
    }
  }

  const base::Value* label_value = dict.Find("label");
  if (label_value) {
    {
      auto* temp = (*label_value).GetIfString();
      if (!temp) {
        out.label = absl::nullopt;
        return false;
      }
      out.label = *temp;
    }
  }

  const base::Value* annotation_value = dict.Find("annotation");
  if (annotation_value) {
    {
      auto* temp = (*annotation_value).GetIfString();
      if (!temp) {
        out.annotation = absl::nullopt;
        return false;
      }
      out.annotation = *temp;
    }
  }

  const base::Value* usage_value = dict.Find("usage");
  if (usage_value) {
    {
      if (!(*usage_value).is_dict()) {
        return false;
      }
      else {
        Usage temp;
        if (!Usage::Populate((*usage_value).GetDict(), temp))
          return false;
        out.usage = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool Params::Parameters::CandidatesType::Populate(
    const base::Value& value, CandidatesType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Parameters::CandidatesType> Params::Parameters::CandidatesType::FromValue(const base::Value::Dict& value) {
  CandidatesType out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Parameters::CandidatesType> Params::Parameters::CandidatesType::FromValue(const base::Value& value) {
  CandidatesType out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}




Params::Parameters::Parameters()
: context_id(0) {}

Params::Parameters::~Parameters() = default;
Params::Parameters::Parameters(Parameters&& rhs) = default;
Params::Parameters& Params::Parameters::operator=(Parameters&& rhs) = default;
Params::Parameters Params::Parameters::Clone() const {
  Parameters out;
  out.context_id = context_id;
  out.candidates.reserve(candidates.size());
  for (const auto& element : candidates) {
    json_schema_compiler::util::AppendToContainer(out.candidates, element.Clone());
  }
  return out;
}

// static
bool Params::Parameters::Populate(
    const base::Value::Dict& dict, Parameters& out) {
  const base::Value* context_id_value = dict.Find("contextID");
  if (!context_id_value) {
    return false;
  }
  {
    auto temp = (*context_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.context_id = *temp;
  }

  const base::Value* candidates_value = dict.Find("candidates");
  if (!candidates_value) {
    return false;
  }
  {
    if (!(*candidates_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*candidates_value).GetList(), out.candidates)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool Params::Parameters::Populate(
    const base::Value& value, Parameters& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Parameters> Params::Parameters::FromValue(const base::Value::Dict& value) {
  Parameters out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Parameters> Params::Parameters::FromValue(const base::Value& value) {
  Parameters out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


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
    const base::Value& parameters_value = args[0];
    {
      if (!parameters_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Parameters::Populate(parameters_value.GetDict(), params.parameters)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace SetCandidates

namespace SetCursorPosition {

Params::Parameters::Parameters()
: context_id(0),
candidate_id(0) {}

Params::Parameters::~Parameters() = default;
Params::Parameters::Parameters(Parameters&& rhs) = default;
Params::Parameters& Params::Parameters::operator=(Parameters&& rhs) = default;
Params::Parameters Params::Parameters::Clone() const {
  Parameters out;
  out.context_id = context_id;
  out.candidate_id = candidate_id;
  return out;
}

// static
bool Params::Parameters::Populate(
    const base::Value::Dict& dict, Parameters& out) {
  const base::Value* context_id_value = dict.Find("contextID");
  if (!context_id_value) {
    return false;
  }
  {
    auto temp = (*context_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.context_id = *temp;
  }

  const base::Value* candidate_id_value = dict.Find("candidateID");
  if (!candidate_id_value) {
    return false;
  }
  {
    auto temp = (*candidate_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.candidate_id = *temp;
  }

  return true;
}

// static
bool Params::Parameters::Populate(
    const base::Value& value, Parameters& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Parameters> Params::Parameters::FromValue(const base::Value::Dict& value) {
  Parameters out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Parameters> Params::Parameters::FromValue(const base::Value& value) {
  Parameters out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


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
    const base::Value& parameters_value = args[0];
    {
      if (!parameters_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Parameters::Populate(parameters_value.GetDict(), params.parameters)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace SetCursorPosition

namespace SetAssistiveWindowProperties {

Params::Parameters::Parameters()
: context_id(0) {}

Params::Parameters::~Parameters() = default;
Params::Parameters::Parameters(Parameters&& rhs) = default;
Params::Parameters& Params::Parameters::operator=(Parameters&& rhs) = default;
Params::Parameters Params::Parameters::Clone() const {
  Parameters out;
  out.context_id = context_id;
  out.properties = properties.Clone();
  return out;
}

// static
bool Params::Parameters::Populate(
    const base::Value::Dict& dict, Parameters& out) {
  const base::Value* context_id_value = dict.Find("contextID");
  if (!context_id_value) {
    return false;
  }
  {
    auto temp = (*context_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.context_id = *temp;
  }

  const base::Value* properties_value = dict.Find("properties");
  if (!properties_value) {
    return false;
  }
  {
    if (!(*properties_value).is_dict()) {
      return false;
    }
    if (!AssistiveWindowProperties::Populate((*properties_value).GetDict(), out.properties)) {
      return false;
    }
  }

  return true;
}

// static
bool Params::Parameters::Populate(
    const base::Value& value, Parameters& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Parameters> Params::Parameters::FromValue(const base::Value::Dict& value) {
  Parameters out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Parameters> Params::Parameters::FromValue(const base::Value& value) {
  Parameters out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


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
    const base::Value& parameters_value = args[0];
    {
      if (!parameters_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Parameters::Populate(parameters_value.GetDict(), params.parameters)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace SetAssistiveWindowProperties

namespace SetAssistiveWindowButtonHighlighted {

Params::Parameters::Parameters()
: context_id(0),
button_id(),
window_type(),
highlighted(false) {}

Params::Parameters::~Parameters() = default;
Params::Parameters::Parameters(Parameters&& rhs) = default;
Params::Parameters& Params::Parameters::operator=(Parameters&& rhs) = default;
Params::Parameters Params::Parameters::Clone() const {
  Parameters out;
  out.context_id = context_id;
  out.button_id = button_id;
  out.window_type = window_type;
  out.announce_string = announce_string;
  out.highlighted = highlighted;
  return out;
}

// static
bool Params::Parameters::Populate(
    const base::Value::Dict& dict, Parameters& out) {
  const base::Value* context_id_value = dict.Find("contextID");
  if (!context_id_value) {
    return false;
  }
  {
    auto temp = (*context_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.context_id = *temp;
  }

  const base::Value* button_id_value = dict.Find("buttonID");
  if (!button_id_value) {
    return false;
  }
  {
    const std::string* assistive_window_button_as_string = (*button_id_value).GetIfString();
    if (!assistive_window_button_as_string) {
      return false;
    }
    out.button_id = ParseAssistiveWindowButton(*assistive_window_button_as_string);
    if (out.button_id == AssistiveWindowButton()) {
      return false;
    }
  }

  const base::Value* window_type_value = dict.Find("windowType");
  if (!window_type_value) {
    return false;
  }
  {
    const std::string* assistive_window_type_as_string = (*window_type_value).GetIfString();
    if (!assistive_window_type_as_string) {
      return false;
    }
    out.window_type = ParseAssistiveWindowType(*assistive_window_type_as_string);
    if (out.window_type == AssistiveWindowType()) {
      return false;
    }
  }

  const base::Value* announce_string_value = dict.Find("announceString");
  if (announce_string_value) {
    {
      auto* temp = (*announce_string_value).GetIfString();
      if (!temp) {
        out.announce_string = absl::nullopt;
        return false;
      }
      out.announce_string = *temp;
    }
  }

  const base::Value* highlighted_value = dict.Find("highlighted");
  if (!highlighted_value) {
    return false;
  }
  {
    auto temp = (*highlighted_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.highlighted = *temp;
  }

  return true;
}

// static
bool Params::Parameters::Populate(
    const base::Value& value, Parameters& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Parameters> Params::Parameters::FromValue(const base::Value::Dict& value) {
  Parameters out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Parameters> Params::Parameters::FromValue(const base::Value& value) {
  Parameters out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


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
    const base::Value& parameters_value = args[0];
    {
      if (!parameters_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Parameters::Populate(parameters_value.GetDict(), params.parameters)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetAssistiveWindowButtonHighlighted

namespace SetMenuItems {

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
    const base::Value& parameters_value = args[0];
    {
      if (!parameters_value.is_dict()) {
        return absl::nullopt;
      }
      if (!MenuParameters::Populate(parameters_value.GetDict(), params.parameters)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetMenuItems

namespace UpdateMenuItems {

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
    const base::Value& parameters_value = args[0];
    {
      if (!parameters_value.is_dict()) {
        return absl::nullopt;
      }
      if (!MenuParameters::Populate(parameters_value.GetDict(), params.parameters)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace UpdateMenuItems

namespace DeleteSurroundingText {

Params::Parameters::Parameters()
: context_id(0),
offset(0),
length(0) {}

Params::Parameters::~Parameters() = default;
Params::Parameters::Parameters(Parameters&& rhs) = default;
Params::Parameters& Params::Parameters::operator=(Parameters&& rhs) = default;
Params::Parameters Params::Parameters::Clone() const {
  Parameters out;
  out.engine_id = engine_id;
  out.context_id = context_id;
  out.offset = offset;
  out.length = length;
  return out;
}

// static
bool Params::Parameters::Populate(
    const base::Value::Dict& dict, Parameters& out) {
  const base::Value* engine_id_value = dict.Find("engineID");
  if (!engine_id_value) {
    return false;
  }
  {
    auto* temp = (*engine_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.engine_id = *temp;
  }

  const base::Value* context_id_value = dict.Find("contextID");
  if (!context_id_value) {
    return false;
  }
  {
    auto temp = (*context_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.context_id = *temp;
  }

  const base::Value* offset_value = dict.Find("offset");
  if (!offset_value) {
    return false;
  }
  {
    auto temp = (*offset_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.offset = *temp;
  }

  const base::Value* length_value = dict.Find("length");
  if (!length_value) {
    return false;
  }
  {
    auto temp = (*length_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.length = *temp;
  }

  return true;
}

// static
bool Params::Parameters::Populate(
    const base::Value& value, Parameters& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Parameters> Params::Parameters::FromValue(const base::Value::Dict& value) {
  Parameters out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Parameters> Params::Parameters::FromValue(const base::Value& value) {
  Parameters out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


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
    const base::Value& parameters_value = args[0];
    {
      if (!parameters_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Parameters::Populate(parameters_value.GetDict(), params.parameters)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace DeleteSurroundingText

namespace KeyEventHandled {

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
    const base::Value& request_id_value = args[0];
    {
      auto* temp = request_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& response_value = args[1];
    {
      auto temp = response_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.response = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace KeyEventHandled

//
// Events
//

namespace OnActivate {

const char kEventName[] = "input.ime.onActivate";

base::Value::List Create(const std::string& engine_id, const ScreenType& screen) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(engine_id);

  create_results.Append(input_ime::ToString(screen));

  return create_results;
}

}  // namespace OnActivate

namespace OnDeactivated {

const char kEventName[] = "input.ime.onDeactivated";

base::Value::List Create(const std::string& engine_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(engine_id);

  return create_results;
}

}  // namespace OnDeactivated

namespace OnFocus {

const char kEventName[] = "input.ime.onFocus";

base::Value::List Create(const InputContext& context) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((context).ToValue());

  return create_results;
}

}  // namespace OnFocus

namespace OnBlur {

const char kEventName[] = "input.ime.onBlur";

base::Value::List Create(int context_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(context_id);

  return create_results;
}

}  // namespace OnBlur

namespace OnInputContextUpdate {

const char kEventName[] = "input.ime.onInputContextUpdate";

base::Value::List Create(const InputContext& context) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((context).ToValue());

  return create_results;
}

}  // namespace OnInputContextUpdate

namespace OnKeyEvent {

const char kEventName[] = "input.ime.onKeyEvent";

base::Value::List Create(const std::string& engine_id, const KeyboardEvent& key_data, const std::string& request_id) {
  base::Value::List create_results;
  create_results.reserve(3);
  create_results.Append(engine_id);

  create_results.Append((key_data).ToValue());

  create_results.Append(request_id);

  return create_results;
}

}  // namespace OnKeyEvent

namespace OnCandidateClicked {

const char kEventName[] = "input.ime.onCandidateClicked";

base::Value::List Create(const std::string& engine_id, int candidate_id, const MouseButton& button) {
  base::Value::List create_results;
  create_results.reserve(3);
  create_results.Append(engine_id);

  create_results.Append(candidate_id);

  create_results.Append(input_ime::ToString(button));

  return create_results;
}

}  // namespace OnCandidateClicked

namespace OnMenuItemActivated {

const char kEventName[] = "input.ime.onMenuItemActivated";

base::Value::List Create(const std::string& engine_id, const std::string& name) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(engine_id);

  create_results.Append(name);

  return create_results;
}

}  // namespace OnMenuItemActivated

namespace OnSurroundingTextChanged {

const char kEventName[] = "input.ime.onSurroundingTextChanged";

SurroundingInfo::SurroundingInfo()
: focus(0),
anchor(0),
offset(0) {}

SurroundingInfo::~SurroundingInfo() = default;
SurroundingInfo::SurroundingInfo(SurroundingInfo&& rhs) = default;
SurroundingInfo& SurroundingInfo::operator=(SurroundingInfo&& rhs) = default;
base::Value::Dict SurroundingInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("text", this->text);

  to_value_result.Set("focus", this->focus);

  to_value_result.Set("anchor", this->anchor);

  to_value_result.Set("offset", this->offset);


  return to_value_result;
}


base::Value::List Create(const std::string& engine_id, const SurroundingInfo& surrounding_info) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(engine_id);

  create_results.Append((surrounding_info).ToValue());

  return create_results;
}

}  // namespace OnSurroundingTextChanged

namespace OnReset {

const char kEventName[] = "input.ime.onReset";

base::Value::List Create(const std::string& engine_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(engine_id);

  return create_results;
}

}  // namespace OnReset

namespace OnAssistiveWindowButtonClicked {

const char kEventName[] = "input.ime.onAssistiveWindowButtonClicked";

Details::Details()
: button_id(),
window_type() {}

Details::~Details() = default;
Details::Details(Details&& rhs) = default;
Details& Details::operator=(Details&& rhs) = default;
base::Value::Dict Details::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("buttonID", input_ime::ToString(this->button_id));

  to_value_result.Set("windowType", input_ime::ToString(this->window_type));


  return to_value_result;
}


base::Value::List Create(const Details& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}

}  // namespace OnAssistiveWindowButtonClicked

}  // namespace input_ime
}  // namespace api
}  // namespace extensions

