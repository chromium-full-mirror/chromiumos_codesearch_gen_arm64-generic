// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/input_method_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/input_method_private.h"

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
namespace input_method_private {
//
// Types
//

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
    to_value_result.Set("style", input_method_private::ToString(this->style));

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


const char* ToString(FocusReason enum_param) {
  switch (enum_param) {
    case FOCUS_REASON_MOUSE:
      return "mouse";
    case FOCUS_REASON_TOUCH:
      return "touch";
    case FOCUS_REASON_PEN:
      return "pen";
    case FOCUS_REASON_OTHER:
      return "other";
    case FOCUS_REASON_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

FocusReason ParseFocusReason(base::StringPiece enum_string) {
  if (enum_string == "mouse")
    return FOCUS_REASON_MOUSE;
  if (enum_string == "touch")
    return FOCUS_REASON_TOUCH;
  if (enum_string == "pen")
    return FOCUS_REASON_PEN;
  if (enum_string == "other")
    return FOCUS_REASON_OTHER;
  return FOCUS_REASON_NONE;
}

std::u16string GetFocusReasonParseError(base::StringPiece enum_string) {
  return u"expected \"mouse\" or \"touch\" or \"pen\" or \"other\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(InputModeType enum_param) {
  switch (enum_param) {
    case INPUT_MODE_TYPE_NOKEYBOARD:
      return "noKeyboard";
    case INPUT_MODE_TYPE_TEXT:
      return "text";
    case INPUT_MODE_TYPE_TEL:
      return "tel";
    case INPUT_MODE_TYPE_URL:
      return "url";
    case INPUT_MODE_TYPE_EMAIL:
      return "email";
    case INPUT_MODE_TYPE_NUMERIC:
      return "numeric";
    case INPUT_MODE_TYPE_DECIMAL:
      return "decimal";
    case INPUT_MODE_TYPE_SEARCH:
      return "search";
    case INPUT_MODE_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

InputModeType ParseInputModeType(base::StringPiece enum_string) {
  if (enum_string == "noKeyboard")
    return INPUT_MODE_TYPE_NOKEYBOARD;
  if (enum_string == "text")
    return INPUT_MODE_TYPE_TEXT;
  if (enum_string == "tel")
    return INPUT_MODE_TYPE_TEL;
  if (enum_string == "url")
    return INPUT_MODE_TYPE_URL;
  if (enum_string == "email")
    return INPUT_MODE_TYPE_EMAIL;
  if (enum_string == "numeric")
    return INPUT_MODE_TYPE_NUMERIC;
  if (enum_string == "decimal")
    return INPUT_MODE_TYPE_DECIMAL;
  if (enum_string == "search")
    return INPUT_MODE_TYPE_SEARCH;
  return INPUT_MODE_TYPE_NONE;
}

std::u16string GetInputModeTypeParseError(base::StringPiece enum_string) {
  return u"expected \"noKeyboard\" or \"text\" or \"tel\" or \"url\" or \"email\" or \"numeric\" or \"decimal\" or \"search\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
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
    case AUTO_CAPITALIZE_TYPE_OFF:
      return "off";
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
  if (enum_string == "off")
    return AUTO_CAPITALIZE_TYPE_OFF;
  if (enum_string == "characters")
    return AUTO_CAPITALIZE_TYPE_CHARACTERS;
  if (enum_string == "words")
    return AUTO_CAPITALIZE_TYPE_WORDS;
  if (enum_string == "sentences")
    return AUTO_CAPITALIZE_TYPE_SENTENCES;
  return AUTO_CAPITALIZE_TYPE_NONE;
}

std::u16string GetAutoCapitalizeTypeParseError(base::StringPiece enum_string) {
  return u"expected \"off\" or \"characters\" or \"words\" or \"sentences\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(LanguagePackStatus enum_param) {
  switch (enum_param) {
    case LANGUAGE_PACK_STATUS_UNKNOWN:
      return "unknown";
    case LANGUAGE_PACK_STATUS_NOTINSTALLED:
      return "notInstalled";
    case LANGUAGE_PACK_STATUS_INPROGRESS:
      return "inProgress";
    case LANGUAGE_PACK_STATUS_INSTALLED:
      return "installed";
    case LANGUAGE_PACK_STATUS_ERROROTHER:
      return "errorOther";
    case LANGUAGE_PACK_STATUS_ERRORNEEDSREBOOT:
      return "errorNeedsReboot";
    case LANGUAGE_PACK_STATUS_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

LanguagePackStatus ParseLanguagePackStatus(base::StringPiece enum_string) {
  if (enum_string == "unknown")
    return LANGUAGE_PACK_STATUS_UNKNOWN;
  if (enum_string == "notInstalled")
    return LANGUAGE_PACK_STATUS_NOTINSTALLED;
  if (enum_string == "inProgress")
    return LANGUAGE_PACK_STATUS_INPROGRESS;
  if (enum_string == "installed")
    return LANGUAGE_PACK_STATUS_INSTALLED;
  if (enum_string == "errorOther")
    return LANGUAGE_PACK_STATUS_ERROROTHER;
  if (enum_string == "errorNeedsReboot")
    return LANGUAGE_PACK_STATUS_ERRORNEEDSREBOOT;
  return LANGUAGE_PACK_STATUS_NONE;
}

std::u16string GetLanguagePackStatusParseError(base::StringPiece enum_string) {
  return u"expected \"unknown\" or \"notInstalled\" or \"inProgress\" or \"installed\" or \"errorOther\" or \"errorNeedsReboot\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


LanguagePackStatusChange::LanguagePackStatusChange()
: status() {}

LanguagePackStatusChange::~LanguagePackStatusChange() = default;
LanguagePackStatusChange::LanguagePackStatusChange(LanguagePackStatusChange&& rhs) = default;
LanguagePackStatusChange& LanguagePackStatusChange::operator=(LanguagePackStatusChange&& rhs) = default;
LanguagePackStatusChange LanguagePackStatusChange::Clone() const {
  LanguagePackStatusChange out;
  out.engine_ids = engine_ids;
  out.status = status;
  return out;
}

// static
bool LanguagePackStatusChange::Populate(
    const base::Value::Dict& dict, LanguagePackStatusChange& out) {
  const base::Value* engine_ids_value = dict.Find("engineIds");
  if (!engine_ids_value) {
    return false;
  }
  {
    if (!(*engine_ids_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*engine_ids_value).GetList(), out.engine_ids)) {
        return false;
      }
    }
  }

  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    const std::string* language_pack_status_as_string = (*status_value).GetIfString();
    if (!language_pack_status_as_string) {
      return false;
    }
    out.status = ParseLanguagePackStatus(*language_pack_status_as_string);
    if (out.status == LanguagePackStatus()) {
      return false;
    }
  }

  return true;
}

// static
bool LanguagePackStatusChange::Populate(
    const base::Value& value, LanguagePackStatusChange& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<LanguagePackStatusChange> LanguagePackStatusChange::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<LanguagePackStatusChange>();
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
absl::optional<LanguagePackStatusChange> LanguagePackStatusChange::FromValue(const base::Value::Dict& value) {
  LanguagePackStatusChange out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<LanguagePackStatusChange> LanguagePackStatusChange::FromValue(const base::Value& value) {
  LanguagePackStatusChange out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict LanguagePackStatusChange::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("engineIds", json_schema_compiler::util::CreateValueFromArray(this->engine_ids));

  to_value_result.Set("status", input_method_private::ToString(this->status));


  return to_value_result;
}


InputContext::InputContext()
: context_id(0),
type(),
mode(),
auto_correct(false),
auto_complete(false),
auto_capitalize(),
spell_check(false),
should_do_learning(false),
focus_reason() {}

InputContext::~InputContext() = default;
InputContext::InputContext(InputContext&& rhs) = default;
InputContext& InputContext::operator=(InputContext&& rhs) = default;
InputContext InputContext::Clone() const {
  InputContext out;
  out.context_id = context_id;
  out.type = type;
  out.mode = mode;
  out.auto_correct = auto_correct;
  out.auto_complete = auto_complete;
  out.auto_capitalize = auto_capitalize;
  out.spell_check = spell_check;
  out.should_do_learning = should_do_learning;
  out.focus_reason = focus_reason;
  out.app_key = app_key;
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

  const base::Value* mode_value = dict.Find("mode");
  if (!mode_value) {
    return false;
  }
  {
    const std::string* input_mode_type_as_string = (*mode_value).GetIfString();
    if (!input_mode_type_as_string) {
      return false;
    }
    out.mode = ParseInputModeType(*input_mode_type_as_string);
    if (out.mode == InputModeType()) {
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

  const base::Value* focus_reason_value = dict.Find("focusReason");
  if (!focus_reason_value) {
    return false;
  }
  {
    const std::string* focus_reason_as_string = (*focus_reason_value).GetIfString();
    if (!focus_reason_as_string) {
      return false;
    }
    out.focus_reason = ParseFocusReason(*focus_reason_as_string);
    if (out.focus_reason == FocusReason()) {
      return false;
    }
  }

  const base::Value* app_key_value = dict.Find("appKey");
  if (app_key_value) {
    {
      auto* temp = (*app_key_value).GetIfString();
      if (!temp) {
        out.app_key = absl::nullopt;
        return false;
      }
      out.app_key = *temp;
    }
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

  to_value_result.Set("type", input_method_private::ToString(this->type));

  to_value_result.Set("mode", input_method_private::ToString(this->mode));

  to_value_result.Set("autoCorrect", this->auto_correct);

  to_value_result.Set("autoComplete", this->auto_complete);

  to_value_result.Set("autoCapitalize", input_method_private::ToString(this->auto_capitalize));

  to_value_result.Set("spellCheck", this->spell_check);

  to_value_result.Set("shouldDoLearning", this->should_do_learning);

  to_value_result.Set("focusReason", input_method_private::ToString(this->focus_reason));

  if (this->app_key) {
    to_value_result.Set("appKey", *this->app_key);

  }

  return to_value_result;
}


InputMethodSettings::PinyinFuzzyConfig::PinyinFuzzyConfig()
 {}

InputMethodSettings::PinyinFuzzyConfig::~PinyinFuzzyConfig() = default;
InputMethodSettings::PinyinFuzzyConfig::PinyinFuzzyConfig(PinyinFuzzyConfig&& rhs) = default;
InputMethodSettings::PinyinFuzzyConfig& InputMethodSettings::PinyinFuzzyConfig::operator=(PinyinFuzzyConfig&& rhs) = default;
InputMethodSettings::PinyinFuzzyConfig InputMethodSettings::PinyinFuzzyConfig::Clone() const {
  PinyinFuzzyConfig out;
  out.an_ang = an_ang;
  out.c_ch = c_ch;
  out.en_eng = en_eng;
  out.f_h = f_h;
  out.ian_iang = ian_iang;
  out.in_ing = in_ing;
  out.k_g = k_g;
  out.l_n = l_n;
  out.r_l = r_l;
  out.s_sh = s_sh;
  out.uan_uang = uan_uang;
  out.z_zh = z_zh;
  return out;
}

// static
bool InputMethodSettings::PinyinFuzzyConfig::Populate(
    const base::Value::Dict& dict, PinyinFuzzyConfig& out) {
  const base::Value* an_ang_value = dict.Find("an_ang");
  if (an_ang_value) {
    {
      auto temp = (*an_ang_value).GetIfBool();
      if (!temp.has_value()) {
        out.an_ang = absl::nullopt;
        return false;
      }
      out.an_ang = *temp;
    }
  }

  const base::Value* c_ch_value = dict.Find("c_ch");
  if (c_ch_value) {
    {
      auto temp = (*c_ch_value).GetIfBool();
      if (!temp.has_value()) {
        out.c_ch = absl::nullopt;
        return false;
      }
      out.c_ch = *temp;
    }
  }

  const base::Value* en_eng_value = dict.Find("en_eng");
  if (en_eng_value) {
    {
      auto temp = (*en_eng_value).GetIfBool();
      if (!temp.has_value()) {
        out.en_eng = absl::nullopt;
        return false;
      }
      out.en_eng = *temp;
    }
  }

  const base::Value* f_h_value = dict.Find("f_h");
  if (f_h_value) {
    {
      auto temp = (*f_h_value).GetIfBool();
      if (!temp.has_value()) {
        out.f_h = absl::nullopt;
        return false;
      }
      out.f_h = *temp;
    }
  }

  const base::Value* ian_iang_value = dict.Find("ian_iang");
  if (ian_iang_value) {
    {
      auto temp = (*ian_iang_value).GetIfBool();
      if (!temp.has_value()) {
        out.ian_iang = absl::nullopt;
        return false;
      }
      out.ian_iang = *temp;
    }
  }

  const base::Value* in_ing_value = dict.Find("in_ing");
  if (in_ing_value) {
    {
      auto temp = (*in_ing_value).GetIfBool();
      if (!temp.has_value()) {
        out.in_ing = absl::nullopt;
        return false;
      }
      out.in_ing = *temp;
    }
  }

  const base::Value* k_g_value = dict.Find("k_g");
  if (k_g_value) {
    {
      auto temp = (*k_g_value).GetIfBool();
      if (!temp.has_value()) {
        out.k_g = absl::nullopt;
        return false;
      }
      out.k_g = *temp;
    }
  }

  const base::Value* l_n_value = dict.Find("l_n");
  if (l_n_value) {
    {
      auto temp = (*l_n_value).GetIfBool();
      if (!temp.has_value()) {
        out.l_n = absl::nullopt;
        return false;
      }
      out.l_n = *temp;
    }
  }

  const base::Value* r_l_value = dict.Find("r_l");
  if (r_l_value) {
    {
      auto temp = (*r_l_value).GetIfBool();
      if (!temp.has_value()) {
        out.r_l = absl::nullopt;
        return false;
      }
      out.r_l = *temp;
    }
  }

  const base::Value* s_sh_value = dict.Find("s_sh");
  if (s_sh_value) {
    {
      auto temp = (*s_sh_value).GetIfBool();
      if (!temp.has_value()) {
        out.s_sh = absl::nullopt;
        return false;
      }
      out.s_sh = *temp;
    }
  }

  const base::Value* uan_uang_value = dict.Find("uan_uang");
  if (uan_uang_value) {
    {
      auto temp = (*uan_uang_value).GetIfBool();
      if (!temp.has_value()) {
        out.uan_uang = absl::nullopt;
        return false;
      }
      out.uan_uang = *temp;
    }
  }

  const base::Value* z_zh_value = dict.Find("z_zh");
  if (z_zh_value) {
    {
      auto temp = (*z_zh_value).GetIfBool();
      if (!temp.has_value()) {
        out.z_zh = absl::nullopt;
        return false;
      }
      out.z_zh = *temp;
    }
  }

  return true;
}

// static
bool InputMethodSettings::PinyinFuzzyConfig::Populate(
    const base::Value& value, PinyinFuzzyConfig& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<InputMethodSettings::PinyinFuzzyConfig> InputMethodSettings::PinyinFuzzyConfig::FromValue(const base::Value::Dict& value) {
  PinyinFuzzyConfig out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<InputMethodSettings::PinyinFuzzyConfig> InputMethodSettings::PinyinFuzzyConfig::FromValue(const base::Value& value) {
  PinyinFuzzyConfig out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict InputMethodSettings::PinyinFuzzyConfig::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->an_ang) {
    to_value_result.Set("an_ang", *this->an_ang);

  }
  if (this->c_ch) {
    to_value_result.Set("c_ch", *this->c_ch);

  }
  if (this->en_eng) {
    to_value_result.Set("en_eng", *this->en_eng);

  }
  if (this->f_h) {
    to_value_result.Set("f_h", *this->f_h);

  }
  if (this->ian_iang) {
    to_value_result.Set("ian_iang", *this->ian_iang);

  }
  if (this->in_ing) {
    to_value_result.Set("in_ing", *this->in_ing);

  }
  if (this->k_g) {
    to_value_result.Set("k_g", *this->k_g);

  }
  if (this->l_n) {
    to_value_result.Set("l_n", *this->l_n);

  }
  if (this->r_l) {
    to_value_result.Set("r_l", *this->r_l);

  }
  if (this->s_sh) {
    to_value_result.Set("s_sh", *this->s_sh);

  }
  if (this->uan_uang) {
    to_value_result.Set("uan_uang", *this->uan_uang);

  }
  if (this->z_zh) {
    to_value_result.Set("z_zh", *this->z_zh);

  }

  return to_value_result;
}



InputMethodSettings::InputMethodSettings()
 {}

InputMethodSettings::~InputMethodSettings() = default;
InputMethodSettings::InputMethodSettings(InputMethodSettings&& rhs) = default;
InputMethodSettings& InputMethodSettings::operator=(InputMethodSettings&& rhs) = default;
InputMethodSettings InputMethodSettings::Clone() const {
  InputMethodSettings out;
  out.enable_completion = enable_completion;
  out.enable_double_space_period = enable_double_space_period;
  out.enable_gesture_typing = enable_gesture_typing;
  out.enable_prediction = enable_prediction;
  out.enable_sound_on_keypress = enable_sound_on_keypress;
  out.physical_keyboard_auto_correction_enabled_by_default = physical_keyboard_auto_correction_enabled_by_default;
  out.physical_keyboard_auto_correction_level = physical_keyboard_auto_correction_level;
  out.physical_keyboard_enable_capitalization = physical_keyboard_enable_capitalization;
  out.physical_keyboard_enable_diacritics_on_longpress = physical_keyboard_enable_diacritics_on_longpress;
  out.physical_keyboard_enable_predictive_writing = physical_keyboard_enable_predictive_writing;
  out.virtual_keyboard_auto_correction_level = virtual_keyboard_auto_correction_level;
  out.virtual_keyboard_enable_capitalization = virtual_keyboard_enable_capitalization;
  out.xkb_layout = xkb_layout;
  out.korean_enable_syllable_input = korean_enable_syllable_input;
  out.korean_keyboard_layout = korean_keyboard_layout;
  out.korean_show_hangul_candidate = korean_show_hangul_candidate;
  out.pinyin_chinese_punctuation = pinyin_chinese_punctuation;
  out.pinyin_default_chinese = pinyin_default_chinese;
  out.pinyin_enable_fuzzy = pinyin_enable_fuzzy;
  out.pinyin_enable_lower_paging = pinyin_enable_lower_paging;
  out.pinyin_enable_upper_paging = pinyin_enable_upper_paging;
  out.pinyin_full_width_character = pinyin_full_width_character;
  if (pinyin_fuzzy_config) {
    out.pinyin_fuzzy_config = pinyin_fuzzy_config->Clone();
  }
  out.zhuyin_keyboard_layout = zhuyin_keyboard_layout;
  out.zhuyin_page_size = zhuyin_page_size;
  out.zhuyin_select_keys = zhuyin_select_keys;
  out.vietnamese_vni_allow_flexible_diacritics = vietnamese_vni_allow_flexible_diacritics;
  out.vietnamese_vni_new_style_tone_mark_placement = vietnamese_vni_new_style_tone_mark_placement;
  out.vietnamese_vni_insert_double_horn_on_uo = vietnamese_vni_insert_double_horn_on_uo;
  out.vietnamese_vni_show_underline = vietnamese_vni_show_underline;
  out.vietnamese_telex_allow_flexible_diacritics = vietnamese_telex_allow_flexible_diacritics;
  out.vietnamese_telex_new_style_tone_mark_placement = vietnamese_telex_new_style_tone_mark_placement;
  out.vietnamese_telex_insert_double_horn_on_uo = vietnamese_telex_insert_double_horn_on_uo;
  out.vietnamese_telex_insert_u_horn_on_w = vietnamese_telex_insert_u_horn_on_w;
  out.vietnamese_telex_show_underline = vietnamese_telex_show_underline;
  return out;
}

// static
bool InputMethodSettings::Populate(
    const base::Value::Dict& dict, InputMethodSettings& out) {
  const base::Value* enable_completion_value = dict.Find("enableCompletion");
  if (enable_completion_value) {
    {
      auto temp = (*enable_completion_value).GetIfBool();
      if (!temp.has_value()) {
        out.enable_completion = absl::nullopt;
        return false;
      }
      out.enable_completion = *temp;
    }
  }

  const base::Value* enable_double_space_period_value = dict.Find("enableDoubleSpacePeriod");
  if (enable_double_space_period_value) {
    {
      auto temp = (*enable_double_space_period_value).GetIfBool();
      if (!temp.has_value()) {
        out.enable_double_space_period = absl::nullopt;
        return false;
      }
      out.enable_double_space_period = *temp;
    }
  }

  const base::Value* enable_gesture_typing_value = dict.Find("enableGestureTyping");
  if (enable_gesture_typing_value) {
    {
      auto temp = (*enable_gesture_typing_value).GetIfBool();
      if (!temp.has_value()) {
        out.enable_gesture_typing = absl::nullopt;
        return false;
      }
      out.enable_gesture_typing = *temp;
    }
  }

  const base::Value* enable_prediction_value = dict.Find("enablePrediction");
  if (enable_prediction_value) {
    {
      auto temp = (*enable_prediction_value).GetIfBool();
      if (!temp.has_value()) {
        out.enable_prediction = absl::nullopt;
        return false;
      }
      out.enable_prediction = *temp;
    }
  }

  const base::Value* enable_sound_on_keypress_value = dict.Find("enableSoundOnKeypress");
  if (enable_sound_on_keypress_value) {
    {
      auto temp = (*enable_sound_on_keypress_value).GetIfBool();
      if (!temp.has_value()) {
        out.enable_sound_on_keypress = absl::nullopt;
        return false;
      }
      out.enable_sound_on_keypress = *temp;
    }
  }

  const base::Value* physical_keyboard_auto_correction_enabled_by_default_value = dict.Find("physicalKeyboardAutoCorrectionEnabledByDefault");
  if (physical_keyboard_auto_correction_enabled_by_default_value) {
    {
      auto temp = (*physical_keyboard_auto_correction_enabled_by_default_value).GetIfBool();
      if (!temp.has_value()) {
        out.physical_keyboard_auto_correction_enabled_by_default = absl::nullopt;
        return false;
      }
      out.physical_keyboard_auto_correction_enabled_by_default = *temp;
    }
  }

  const base::Value* physical_keyboard_auto_correction_level_value = dict.Find("physicalKeyboardAutoCorrectionLevel");
  if (physical_keyboard_auto_correction_level_value) {
    {
      auto temp = (*physical_keyboard_auto_correction_level_value).GetIfInt();
      if (!temp.has_value()) {
        out.physical_keyboard_auto_correction_level = absl::nullopt;
        return false;
      }
      out.physical_keyboard_auto_correction_level = *temp;
    }
  }

  const base::Value* physical_keyboard_enable_capitalization_value = dict.Find("physicalKeyboardEnableCapitalization");
  if (physical_keyboard_enable_capitalization_value) {
    {
      auto temp = (*physical_keyboard_enable_capitalization_value).GetIfBool();
      if (!temp.has_value()) {
        out.physical_keyboard_enable_capitalization = absl::nullopt;
        return false;
      }
      out.physical_keyboard_enable_capitalization = *temp;
    }
  }

  const base::Value* physical_keyboard_enable_diacritics_on_longpress_value = dict.Find("physicalKeyboardEnableDiacriticsOnLongpress");
  if (physical_keyboard_enable_diacritics_on_longpress_value) {
    {
      auto temp = (*physical_keyboard_enable_diacritics_on_longpress_value).GetIfBool();
      if (!temp.has_value()) {
        out.physical_keyboard_enable_diacritics_on_longpress = absl::nullopt;
        return false;
      }
      out.physical_keyboard_enable_diacritics_on_longpress = *temp;
    }
  }

  const base::Value* physical_keyboard_enable_predictive_writing_value = dict.Find("physicalKeyboardEnablePredictiveWriting");
  if (physical_keyboard_enable_predictive_writing_value) {
    {
      auto temp = (*physical_keyboard_enable_predictive_writing_value).GetIfBool();
      if (!temp.has_value()) {
        out.physical_keyboard_enable_predictive_writing = absl::nullopt;
        return false;
      }
      out.physical_keyboard_enable_predictive_writing = *temp;
    }
  }

  const base::Value* virtual_keyboard_auto_correction_level_value = dict.Find("virtualKeyboardAutoCorrectionLevel");
  if (virtual_keyboard_auto_correction_level_value) {
    {
      auto temp = (*virtual_keyboard_auto_correction_level_value).GetIfInt();
      if (!temp.has_value()) {
        out.virtual_keyboard_auto_correction_level = absl::nullopt;
        return false;
      }
      out.virtual_keyboard_auto_correction_level = *temp;
    }
  }

  const base::Value* virtual_keyboard_enable_capitalization_value = dict.Find("virtualKeyboardEnableCapitalization");
  if (virtual_keyboard_enable_capitalization_value) {
    {
      auto temp = (*virtual_keyboard_enable_capitalization_value).GetIfBool();
      if (!temp.has_value()) {
        out.virtual_keyboard_enable_capitalization = absl::nullopt;
        return false;
      }
      out.virtual_keyboard_enable_capitalization = *temp;
    }
  }

  const base::Value* xkb_layout_value = dict.Find("xkbLayout");
  if (xkb_layout_value) {
    {
      auto* temp = (*xkb_layout_value).GetIfString();
      if (!temp) {
        out.xkb_layout = absl::nullopt;
        return false;
      }
      out.xkb_layout = *temp;
    }
  }

  const base::Value* korean_enable_syllable_input_value = dict.Find("koreanEnableSyllableInput");
  if (korean_enable_syllable_input_value) {
    {
      auto temp = (*korean_enable_syllable_input_value).GetIfBool();
      if (!temp.has_value()) {
        out.korean_enable_syllable_input = absl::nullopt;
        return false;
      }
      out.korean_enable_syllable_input = *temp;
    }
  }

  const base::Value* korean_keyboard_layout_value = dict.Find("koreanKeyboardLayout");
  if (korean_keyboard_layout_value) {
    {
      auto* temp = (*korean_keyboard_layout_value).GetIfString();
      if (!temp) {
        out.korean_keyboard_layout = absl::nullopt;
        return false;
      }
      out.korean_keyboard_layout = *temp;
    }
  }

  const base::Value* korean_show_hangul_candidate_value = dict.Find("koreanShowHangulCandidate");
  if (korean_show_hangul_candidate_value) {
    {
      auto temp = (*korean_show_hangul_candidate_value).GetIfBool();
      if (!temp.has_value()) {
        out.korean_show_hangul_candidate = absl::nullopt;
        return false;
      }
      out.korean_show_hangul_candidate = *temp;
    }
  }

  const base::Value* pinyin_chinese_punctuation_value = dict.Find("pinyinChinesePunctuation");
  if (pinyin_chinese_punctuation_value) {
    {
      auto temp = (*pinyin_chinese_punctuation_value).GetIfBool();
      if (!temp.has_value()) {
        out.pinyin_chinese_punctuation = absl::nullopt;
        return false;
      }
      out.pinyin_chinese_punctuation = *temp;
    }
  }

  const base::Value* pinyin_default_chinese_value = dict.Find("pinyinDefaultChinese");
  if (pinyin_default_chinese_value) {
    {
      auto temp = (*pinyin_default_chinese_value).GetIfBool();
      if (!temp.has_value()) {
        out.pinyin_default_chinese = absl::nullopt;
        return false;
      }
      out.pinyin_default_chinese = *temp;
    }
  }

  const base::Value* pinyin_enable_fuzzy_value = dict.Find("pinyinEnableFuzzy");
  if (pinyin_enable_fuzzy_value) {
    {
      auto temp = (*pinyin_enable_fuzzy_value).GetIfBool();
      if (!temp.has_value()) {
        out.pinyin_enable_fuzzy = absl::nullopt;
        return false;
      }
      out.pinyin_enable_fuzzy = *temp;
    }
  }

  const base::Value* pinyin_enable_lower_paging_value = dict.Find("pinyinEnableLowerPaging");
  if (pinyin_enable_lower_paging_value) {
    {
      auto temp = (*pinyin_enable_lower_paging_value).GetIfBool();
      if (!temp.has_value()) {
        out.pinyin_enable_lower_paging = absl::nullopt;
        return false;
      }
      out.pinyin_enable_lower_paging = *temp;
    }
  }

  const base::Value* pinyin_enable_upper_paging_value = dict.Find("pinyinEnableUpperPaging");
  if (pinyin_enable_upper_paging_value) {
    {
      auto temp = (*pinyin_enable_upper_paging_value).GetIfBool();
      if (!temp.has_value()) {
        out.pinyin_enable_upper_paging = absl::nullopt;
        return false;
      }
      out.pinyin_enable_upper_paging = *temp;
    }
  }

  const base::Value* pinyin_full_width_character_value = dict.Find("pinyinFullWidthCharacter");
  if (pinyin_full_width_character_value) {
    {
      auto temp = (*pinyin_full_width_character_value).GetIfBool();
      if (!temp.has_value()) {
        out.pinyin_full_width_character = absl::nullopt;
        return false;
      }
      out.pinyin_full_width_character = *temp;
    }
  }

  const base::Value* pinyin_fuzzy_config_value = dict.Find("pinyinFuzzyConfig");
  if (pinyin_fuzzy_config_value) {
    {
      if (!(*pinyin_fuzzy_config_value).is_dict()) {
        return false;
      }
      else {
        PinyinFuzzyConfig temp;
        if (!PinyinFuzzyConfig::Populate((*pinyin_fuzzy_config_value).GetDict(), temp))
          return false;
        out.pinyin_fuzzy_config = std::move(temp);
      }
    }
  }

  const base::Value* zhuyin_keyboard_layout_value = dict.Find("zhuyinKeyboardLayout");
  if (zhuyin_keyboard_layout_value) {
    {
      auto* temp = (*zhuyin_keyboard_layout_value).GetIfString();
      if (!temp) {
        out.zhuyin_keyboard_layout = absl::nullopt;
        return false;
      }
      out.zhuyin_keyboard_layout = *temp;
    }
  }

  const base::Value* zhuyin_page_size_value = dict.Find("zhuyinPageSize");
  if (zhuyin_page_size_value) {
    {
      auto temp = (*zhuyin_page_size_value).GetIfInt();
      if (!temp.has_value()) {
        out.zhuyin_page_size = absl::nullopt;
        return false;
      }
      out.zhuyin_page_size = *temp;
    }
  }

  const base::Value* zhuyin_select_keys_value = dict.Find("zhuyinSelectKeys");
  if (zhuyin_select_keys_value) {
    {
      auto* temp = (*zhuyin_select_keys_value).GetIfString();
      if (!temp) {
        out.zhuyin_select_keys = absl::nullopt;
        return false;
      }
      out.zhuyin_select_keys = *temp;
    }
  }

  const base::Value* vietnamese_vni_allow_flexible_diacritics_value = dict.Find("vietnameseVniAllowFlexibleDiacritics");
  if (vietnamese_vni_allow_flexible_diacritics_value) {
    {
      auto temp = (*vietnamese_vni_allow_flexible_diacritics_value).GetIfBool();
      if (!temp.has_value()) {
        out.vietnamese_vni_allow_flexible_diacritics = absl::nullopt;
        return false;
      }
      out.vietnamese_vni_allow_flexible_diacritics = *temp;
    }
  }

  const base::Value* vietnamese_vni_new_style_tone_mark_placement_value = dict.Find("vietnameseVniNewStyleToneMarkPlacement");
  if (vietnamese_vni_new_style_tone_mark_placement_value) {
    {
      auto temp = (*vietnamese_vni_new_style_tone_mark_placement_value).GetIfBool();
      if (!temp.has_value()) {
        out.vietnamese_vni_new_style_tone_mark_placement = absl::nullopt;
        return false;
      }
      out.vietnamese_vni_new_style_tone_mark_placement = *temp;
    }
  }

  const base::Value* vietnamese_vni_insert_double_horn_on_uo_value = dict.Find("vietnameseVniInsertDoubleHornOnUo");
  if (vietnamese_vni_insert_double_horn_on_uo_value) {
    {
      auto temp = (*vietnamese_vni_insert_double_horn_on_uo_value).GetIfBool();
      if (!temp.has_value()) {
        out.vietnamese_vni_insert_double_horn_on_uo = absl::nullopt;
        return false;
      }
      out.vietnamese_vni_insert_double_horn_on_uo = *temp;
    }
  }

  const base::Value* vietnamese_vni_show_underline_value = dict.Find("vietnameseVniShowUnderline");
  if (vietnamese_vni_show_underline_value) {
    {
      auto temp = (*vietnamese_vni_show_underline_value).GetIfBool();
      if (!temp.has_value()) {
        out.vietnamese_vni_show_underline = absl::nullopt;
        return false;
      }
      out.vietnamese_vni_show_underline = *temp;
    }
  }

  const base::Value* vietnamese_telex_allow_flexible_diacritics_value = dict.Find("vietnameseTelexAllowFlexibleDiacritics");
  if (vietnamese_telex_allow_flexible_diacritics_value) {
    {
      auto temp = (*vietnamese_telex_allow_flexible_diacritics_value).GetIfBool();
      if (!temp.has_value()) {
        out.vietnamese_telex_allow_flexible_diacritics = absl::nullopt;
        return false;
      }
      out.vietnamese_telex_allow_flexible_diacritics = *temp;
    }
  }

  const base::Value* vietnamese_telex_new_style_tone_mark_placement_value = dict.Find("vietnameseTelexNewStyleToneMarkPlacement");
  if (vietnamese_telex_new_style_tone_mark_placement_value) {
    {
      auto temp = (*vietnamese_telex_new_style_tone_mark_placement_value).GetIfBool();
      if (!temp.has_value()) {
        out.vietnamese_telex_new_style_tone_mark_placement = absl::nullopt;
        return false;
      }
      out.vietnamese_telex_new_style_tone_mark_placement = *temp;
    }
  }

  const base::Value* vietnamese_telex_insert_double_horn_on_uo_value = dict.Find("vietnameseTelexInsertDoubleHornOnUo");
  if (vietnamese_telex_insert_double_horn_on_uo_value) {
    {
      auto temp = (*vietnamese_telex_insert_double_horn_on_uo_value).GetIfBool();
      if (!temp.has_value()) {
        out.vietnamese_telex_insert_double_horn_on_uo = absl::nullopt;
        return false;
      }
      out.vietnamese_telex_insert_double_horn_on_uo = *temp;
    }
  }

  const base::Value* vietnamese_telex_insert_u_horn_on_w_value = dict.Find("vietnameseTelexInsertUHornOnW");
  if (vietnamese_telex_insert_u_horn_on_w_value) {
    {
      auto temp = (*vietnamese_telex_insert_u_horn_on_w_value).GetIfBool();
      if (!temp.has_value()) {
        out.vietnamese_telex_insert_u_horn_on_w = absl::nullopt;
        return false;
      }
      out.vietnamese_telex_insert_u_horn_on_w = *temp;
    }
  }

  const base::Value* vietnamese_telex_show_underline_value = dict.Find("vietnameseTelexShowUnderline");
  if (vietnamese_telex_show_underline_value) {
    {
      auto temp = (*vietnamese_telex_show_underline_value).GetIfBool();
      if (!temp.has_value()) {
        out.vietnamese_telex_show_underline = absl::nullopt;
        return false;
      }
      out.vietnamese_telex_show_underline = *temp;
    }
  }

  return true;
}

// static
bool InputMethodSettings::Populate(
    const base::Value& value, InputMethodSettings& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<InputMethodSettings> InputMethodSettings::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<InputMethodSettings>();
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
absl::optional<InputMethodSettings> InputMethodSettings::FromValue(const base::Value::Dict& value) {
  InputMethodSettings out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<InputMethodSettings> InputMethodSettings::FromValue(const base::Value& value) {
  InputMethodSettings out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict InputMethodSettings::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->enable_completion) {
    to_value_result.Set("enableCompletion", *this->enable_completion);

  }
  if (this->enable_double_space_period) {
    to_value_result.Set("enableDoubleSpacePeriod", *this->enable_double_space_period);

  }
  if (this->enable_gesture_typing) {
    to_value_result.Set("enableGestureTyping", *this->enable_gesture_typing);

  }
  if (this->enable_prediction) {
    to_value_result.Set("enablePrediction", *this->enable_prediction);

  }
  if (this->enable_sound_on_keypress) {
    to_value_result.Set("enableSoundOnKeypress", *this->enable_sound_on_keypress);

  }
  if (this->physical_keyboard_auto_correction_enabled_by_default) {
    to_value_result.Set("physicalKeyboardAutoCorrectionEnabledByDefault", *this->physical_keyboard_auto_correction_enabled_by_default);

  }
  if (this->physical_keyboard_auto_correction_level) {
    to_value_result.Set("physicalKeyboardAutoCorrectionLevel", *this->physical_keyboard_auto_correction_level);

  }
  if (this->physical_keyboard_enable_capitalization) {
    to_value_result.Set("physicalKeyboardEnableCapitalization", *this->physical_keyboard_enable_capitalization);

  }
  if (this->physical_keyboard_enable_diacritics_on_longpress) {
    to_value_result.Set("physicalKeyboardEnableDiacriticsOnLongpress", *this->physical_keyboard_enable_diacritics_on_longpress);

  }
  if (this->physical_keyboard_enable_predictive_writing) {
    to_value_result.Set("physicalKeyboardEnablePredictiveWriting", *this->physical_keyboard_enable_predictive_writing);

  }
  if (this->virtual_keyboard_auto_correction_level) {
    to_value_result.Set("virtualKeyboardAutoCorrectionLevel", *this->virtual_keyboard_auto_correction_level);

  }
  if (this->virtual_keyboard_enable_capitalization) {
    to_value_result.Set("virtualKeyboardEnableCapitalization", *this->virtual_keyboard_enable_capitalization);

  }
  if (this->xkb_layout) {
    to_value_result.Set("xkbLayout", *this->xkb_layout);

  }
  if (this->korean_enable_syllable_input) {
    to_value_result.Set("koreanEnableSyllableInput", *this->korean_enable_syllable_input);

  }
  if (this->korean_keyboard_layout) {
    to_value_result.Set("koreanKeyboardLayout", *this->korean_keyboard_layout);

  }
  if (this->korean_show_hangul_candidate) {
    to_value_result.Set("koreanShowHangulCandidate", *this->korean_show_hangul_candidate);

  }
  if (this->pinyin_chinese_punctuation) {
    to_value_result.Set("pinyinChinesePunctuation", *this->pinyin_chinese_punctuation);

  }
  if (this->pinyin_default_chinese) {
    to_value_result.Set("pinyinDefaultChinese", *this->pinyin_default_chinese);

  }
  if (this->pinyin_enable_fuzzy) {
    to_value_result.Set("pinyinEnableFuzzy", *this->pinyin_enable_fuzzy);

  }
  if (this->pinyin_enable_lower_paging) {
    to_value_result.Set("pinyinEnableLowerPaging", *this->pinyin_enable_lower_paging);

  }
  if (this->pinyin_enable_upper_paging) {
    to_value_result.Set("pinyinEnableUpperPaging", *this->pinyin_enable_upper_paging);

  }
  if (this->pinyin_full_width_character) {
    to_value_result.Set("pinyinFullWidthCharacter", *this->pinyin_full_width_character);

  }
  if (this->pinyin_fuzzy_config) {
    to_value_result.Set("pinyinFuzzyConfig", (this->pinyin_fuzzy_config)->ToValue());

  }
  if (this->zhuyin_keyboard_layout) {
    to_value_result.Set("zhuyinKeyboardLayout", *this->zhuyin_keyboard_layout);

  }
  if (this->zhuyin_page_size) {
    to_value_result.Set("zhuyinPageSize", *this->zhuyin_page_size);

  }
  if (this->zhuyin_select_keys) {
    to_value_result.Set("zhuyinSelectKeys", *this->zhuyin_select_keys);

  }
  if (this->vietnamese_vni_allow_flexible_diacritics) {
    to_value_result.Set("vietnameseVniAllowFlexibleDiacritics", *this->vietnamese_vni_allow_flexible_diacritics);

  }
  if (this->vietnamese_vni_new_style_tone_mark_placement) {
    to_value_result.Set("vietnameseVniNewStyleToneMarkPlacement", *this->vietnamese_vni_new_style_tone_mark_placement);

  }
  if (this->vietnamese_vni_insert_double_horn_on_uo) {
    to_value_result.Set("vietnameseVniInsertDoubleHornOnUo", *this->vietnamese_vni_insert_double_horn_on_uo);

  }
  if (this->vietnamese_vni_show_underline) {
    to_value_result.Set("vietnameseVniShowUnderline", *this->vietnamese_vni_show_underline);

  }
  if (this->vietnamese_telex_allow_flexible_diacritics) {
    to_value_result.Set("vietnameseTelexAllowFlexibleDiacritics", *this->vietnamese_telex_allow_flexible_diacritics);

  }
  if (this->vietnamese_telex_new_style_tone_mark_placement) {
    to_value_result.Set("vietnameseTelexNewStyleToneMarkPlacement", *this->vietnamese_telex_new_style_tone_mark_placement);

  }
  if (this->vietnamese_telex_insert_double_horn_on_uo) {
    to_value_result.Set("vietnameseTelexInsertDoubleHornOnUo", *this->vietnamese_telex_insert_double_horn_on_uo);

  }
  if (this->vietnamese_telex_insert_u_horn_on_w) {
    to_value_result.Set("vietnameseTelexInsertUHornOnW", *this->vietnamese_telex_insert_u_horn_on_w);

  }
  if (this->vietnamese_telex_show_underline) {
    to_value_result.Set("vietnameseTelexShowUnderline", *this->vietnamese_telex_show_underline);

  }

  return to_value_result;
}



//
// Functions
//

namespace GetInputMethodConfig {

Results::Config::Config()
: is_physical_keyboard_autocorrect_enabled(false),
is_ime_menu_activated(false) {}

Results::Config::~Config() = default;
Results::Config::Config(Config&& rhs) = default;
Results::Config& Results::Config::operator=(Config&& rhs) = default;
base::Value::Dict Results::Config::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("isPhysicalKeyboardAutocorrectEnabled", this->is_physical_keyboard_autocorrect_enabled);

  to_value_result.Set("isImeMenuActivated", this->is_ime_menu_activated);


  return to_value_result;
}


base::Value::List Results::Create(const Config& config) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((config).ToValue());

  return create_results;
}
}  // namespace GetInputMethodConfig

namespace GetInputMethods {

Results::InputMethodsType::InputMethodsType()
 {}

Results::InputMethodsType::~InputMethodsType() = default;
Results::InputMethodsType::InputMethodsType(InputMethodsType&& rhs) = default;
Results::InputMethodsType& Results::InputMethodsType::operator=(InputMethodsType&& rhs) = default;
base::Value::Dict Results::InputMethodsType::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("name", this->name);

  to_value_result.Set("indicator", this->indicator);


  return to_value_result;
}



base::Value::List Results::Create(const std::vector<InputMethodsType>& input_methods) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(input_methods));

  return create_results;
}
}  // namespace GetInputMethods

namespace GetCurrentInputMethod {

base::Value::List Results::Create(const std::string& input_method_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(input_method_id);

  return create_results;
}
}  // namespace GetCurrentInputMethod

namespace SetCurrentInputMethod {

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
    const base::Value& input_method_id_value = args[0];
    {
      auto* temp = input_method_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.input_method_id = *temp;
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
}  // namespace SetCurrentInputMethod

namespace SwitchToLastUsedInputMethod {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SwitchToLastUsedInputMethod

namespace FetchAllDictionaryWords {

base::Value::List Results::Create(const std::vector<std::string>& words) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(words));

  return create_results;
}
}  // namespace FetchAllDictionaryWords

namespace AddWordToDictionary {

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
    const base::Value& word_value = args[0];
    {
      auto* temp = word_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.word = *temp;
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
}  // namespace AddWordToDictionary

namespace SetXkbLayout {

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
    const base::Value& xkb_name_value = args[0];
    {
      auto* temp = xkb_name_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.xkb_name = *temp;
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
}  // namespace SetXkbLayout

namespace FinishComposingText {

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


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace FinishComposingText

namespace ShowInputView {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace ShowInputView

namespace HideInputView {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace HideInputView

namespace OpenOptionsPage {

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
    const base::Value& input_method_id_value = args[0];
    {
      auto* temp = input_method_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.input_method_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace OpenOptionsPage

namespace GetSurroundingText {

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
    const base::Value& before_length_value = args[0];
    {
      auto temp = before_length_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.before_length = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& after_length_value = args[1];
    {
      auto temp = after_length_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.after_length = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


Results::SurroundingInfo::SurroundingInfo()
 {}

Results::SurroundingInfo::~SurroundingInfo() = default;
Results::SurroundingInfo::SurroundingInfo(SurroundingInfo&& rhs) = default;
Results::SurroundingInfo& Results::SurroundingInfo::operator=(SurroundingInfo&& rhs) = default;
base::Value::Dict Results::SurroundingInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("before", this->before);

  to_value_result.Set("selected", this->selected);

  to_value_result.Set("after", this->after);


  return to_value_result;
}


base::Value::List Results::Create(const SurroundingInfo& surrounding_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((surrounding_info).ToValue());

  return create_results;
}
}  // namespace GetSurroundingText

namespace GetSettings {

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
    const base::Value& engine_id_value = args[0];
    {
      auto* temp = engine_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.engine_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const InputMethodSettings& settings) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((settings).ToValue());

  return create_results;
}
}  // namespace GetSettings

namespace SetSettings {

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
    const base::Value& engine_id_value = args[0];
    {
      auto* temp = engine_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.engine_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& settings_value = args[1];
    {
      if (!settings_value.is_dict()) {
        return absl::nullopt;
      }
      if (!InputMethodSettings::Populate(settings_value.GetDict(), params.settings)) {
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
}  // namespace SetSettings

namespace SetCompositionRange {

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
selection_before(0),
selection_after(0) {}

Params::Parameters::~Parameters() = default;
Params::Parameters::Parameters(Parameters&& rhs) = default;
Params::Parameters& Params::Parameters::operator=(Parameters&& rhs) = default;
Params::Parameters Params::Parameters::Clone() const {
  Parameters out;
  out.context_id = context_id;
  out.selection_before = selection_before;
  out.selection_after = selection_after;
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

  const base::Value* selection_before_value = dict.Find("selectionBefore");
  if (!selection_before_value) {
    return false;
  }
  {
    auto temp = (*selection_before_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.selection_before = *temp;
  }

  const base::Value* selection_after_value = dict.Find("selectionAfter");
  if (!selection_after_value) {
    return false;
  }
  {
    auto temp = (*selection_after_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.selection_after = *temp;
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
}  // namespace SetCompositionRange

namespace Reset {

}  // namespace Reset

namespace OnAutocorrect {

Params::Parameters::Parameters()
: context_id(0),
start_index(0) {}

Params::Parameters::~Parameters() = default;
Params::Parameters::Parameters(Parameters&& rhs) = default;
Params::Parameters& Params::Parameters::operator=(Parameters&& rhs) = default;
Params::Parameters Params::Parameters::Clone() const {
  Parameters out;
  out.context_id = context_id;
  out.typed_word = typed_word;
  out.corrected_word = corrected_word;
  out.start_index = start_index;
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

  const base::Value* typed_word_value = dict.Find("typedWord");
  if (!typed_word_value) {
    return false;
  }
  {
    auto* temp = (*typed_word_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.typed_word = *temp;
  }

  const base::Value* corrected_word_value = dict.Find("correctedWord");
  if (!corrected_word_value) {
    return false;
  }
  {
    auto* temp = (*corrected_word_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.corrected_word = *temp;
  }

  const base::Value* start_index_value = dict.Find("startIndex");
  if (!start_index_value) {
    return false;
  }
  {
    auto temp = (*start_index_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.start_index = *temp;
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


}  // namespace OnAutocorrect

namespace GetTextFieldBounds {

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


Results::TextFieldBounds::TextFieldBounds()
: x(0),
y(0),
width(0),
height(0) {}

Results::TextFieldBounds::~TextFieldBounds() = default;
Results::TextFieldBounds::TextFieldBounds(TextFieldBounds&& rhs) = default;
Results::TextFieldBounds& Results::TextFieldBounds::operator=(TextFieldBounds&& rhs) = default;
base::Value::Dict Results::TextFieldBounds::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("x", this->x);

  to_value_result.Set("y", this->y);

  to_value_result.Set("width", this->width);

  to_value_result.Set("height", this->height);


  return to_value_result;
}


base::Value::List Results::Create(const TextFieldBounds& text_field_bounds) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((text_field_bounds).ToValue());

  return create_results;
}
}  // namespace GetTextFieldBounds

namespace NotifyInputMethodReadyForTesting {

}  // namespace NotifyInputMethodReadyForTesting

namespace GetLanguagePackStatus {

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
    const base::Value& input_method_id_value = args[0];
    {
      auto* temp = input_method_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.input_method_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const LanguagePackStatus& status) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(input_method_private::ToString(status));

  return create_results;
}
}  // namespace GetLanguagePackStatus

//
// Events
//

namespace OnCaretBoundsChanged {

const char kEventName[] = "inputMethodPrivate.onCaretBoundsChanged";

CaretBounds::CaretBounds()
: x(0),
y(0),
w(0),
h(0) {}

CaretBounds::~CaretBounds() = default;
CaretBounds::CaretBounds(CaretBounds&& rhs) = default;
CaretBounds& CaretBounds::operator=(CaretBounds&& rhs) = default;
base::Value::Dict CaretBounds::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("x", this->x);

  to_value_result.Set("y", this->y);

  to_value_result.Set("w", this->w);

  to_value_result.Set("h", this->h);


  return to_value_result;
}


base::Value::List Create(const CaretBounds& caret_bounds) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((caret_bounds).ToValue());

  return create_results;
}

}  // namespace OnCaretBoundsChanged

namespace OnChanged {

const char kEventName[] = "inputMethodPrivate.onChanged";

base::Value::List Create(const std::string& new_input_method_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(new_input_method_id);

  return create_results;
}

}  // namespace OnChanged

namespace OnDictionaryLoaded {

const char kEventName[] = "inputMethodPrivate.onDictionaryLoaded";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnDictionaryLoaded

namespace OnDictionaryChanged {

const char kEventName[] = "inputMethodPrivate.onDictionaryChanged";

base::Value::List Create(const std::vector<std::string>& added, const std::vector<std::string>& removed) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(added));

  create_results.Append(json_schema_compiler::util::CreateValueFromArray(removed));

  return create_results;
}

}  // namespace OnDictionaryChanged

namespace OnImeMenuActivationChanged {

const char kEventName[] = "inputMethodPrivate.onImeMenuActivationChanged";

base::Value::List Create(bool activation) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(activation);

  return create_results;
}

}  // namespace OnImeMenuActivationChanged

namespace OnImeMenuListChanged {

const char kEventName[] = "inputMethodPrivate.onImeMenuListChanged";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnImeMenuListChanged

namespace OnImeMenuItemsChanged {

const char kEventName[] = "inputMethodPrivate.onImeMenuItemsChanged";

base::Value::List Create(const std::string& engine_id, const std::vector<MenuItem>& items) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(engine_id);

  create_results.Append(json_schema_compiler::util::CreateValueFromArray(items));

  return create_results;
}

}  // namespace OnImeMenuItemsChanged

namespace OnFocus {

const char kEventName[] = "inputMethodPrivate.onFocus";

base::Value::List Create(const InputContext& context) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((context).ToValue());

  return create_results;
}

}  // namespace OnFocus

namespace OnTouch {

const char kEventName[] = "inputMethodPrivate.onTouch";

base::Value::List Create(const FocusReason& pointer_type) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(input_method_private::ToString(pointer_type));

  return create_results;
}

}  // namespace OnTouch

namespace OnSettingsChanged {

const char kEventName[] = "inputMethodPrivate.onSettingsChanged";

base::Value::List Create(const std::string& engine_id, const InputMethodSettings& settings) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(engine_id);

  create_results.Append((settings).ToValue());

  return create_results;
}

}  // namespace OnSettingsChanged

namespace OnScreenProjectionChanged {

const char kEventName[] = "inputMethodPrivate.onScreenProjectionChanged";

base::Value::List Create(bool is_projected) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(is_projected);

  return create_results;
}

}  // namespace OnScreenProjectionChanged

namespace OnSuggestionsChanged {

const char kEventName[] = "inputMethodPrivate.onSuggestionsChanged";

base::Value::List Create(const std::vector<std::string>& suggestions) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(suggestions));

  return create_results;
}

}  // namespace OnSuggestionsChanged

namespace OnInputMethodOptionsChanged {

const char kEventName[] = "inputMethodPrivate.onInputMethodOptionsChanged";

base::Value::List Create(const std::string& engine_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(engine_id);

  return create_results;
}

}  // namespace OnInputMethodOptionsChanged

namespace OnLanguagePackStatusChanged {

const char kEventName[] = "inputMethodPrivate.onLanguagePackStatusChanged";

base::Value::List Create(const LanguagePackStatusChange& change) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((change).ToValue());

  return create_results;
}

}  // namespace OnLanguagePackStatusChanged

}  // namespace input_method_private
}  // namespace api
}  // namespace extensions

