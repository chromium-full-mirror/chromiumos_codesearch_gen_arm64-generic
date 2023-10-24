// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/input_method_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_INPUT_METHOD_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_INPUT_METHOD_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace input_method_private {

//
// Types
//

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

// The type of the underline to modify a composition segment.
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

// Describes how the text field was focused
enum  FocusReason {
  FOCUS_REASON_NONE = 0,
  FOCUS_REASON_MOUSE,
  FOCUS_REASON_TOUCH,
  FOCUS_REASON_PEN,
  FOCUS_REASON_OTHER,
  FOCUS_REASON_LAST = FOCUS_REASON_OTHER,
};


const char* ToString(FocusReason as_enum);
FocusReason ParseFocusReason(base::StringPiece as_string);
std::u16string GetFocusReasonParseError(base::StringPiece as_string);

// Type of keyboard to show for this text field, (Text, Number, URL, etc) set by
// mode property of input tag
enum  InputModeType {
  INPUT_MODE_TYPE_NONE = 0,
  INPUT_MODE_TYPE_NOKEYBOARD,
  INPUT_MODE_TYPE_TEXT,
  INPUT_MODE_TYPE_TEL,
  INPUT_MODE_TYPE_URL,
  INPUT_MODE_TYPE_EMAIL,
  INPUT_MODE_TYPE_NUMERIC,
  INPUT_MODE_TYPE_DECIMAL,
  INPUT_MODE_TYPE_SEARCH,
  INPUT_MODE_TYPE_LAST = INPUT_MODE_TYPE_SEARCH,
};


const char* ToString(InputModeType as_enum);
InputModeType ParseInputModeType(base::StringPiece as_string);
std::u16string GetInputModeTypeParseError(base::StringPiece as_string);

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
  AUTO_CAPITALIZE_TYPE_OFF,
  AUTO_CAPITALIZE_TYPE_CHARACTERS,
  AUTO_CAPITALIZE_TYPE_WORDS,
  AUTO_CAPITALIZE_TYPE_SENTENCES,
  AUTO_CAPITALIZE_TYPE_LAST = AUTO_CAPITALIZE_TYPE_SENTENCES,
};


const char* ToString(AutoCapitalizeType as_enum);
AutoCapitalizeType ParseAutoCapitalizeType(base::StringPiece as_string);
std::u16string GetAutoCapitalizeTypeParseError(base::StringPiece as_string);

// The aggregated status of all language packs for a given input method.
enum  LanguagePackStatus {
  LANGUAGE_PACK_STATUS_NONE = 0,
  LANGUAGE_PACK_STATUS_UNKNOWN,
  LANGUAGE_PACK_STATUS_NOTINSTALLED,
  LANGUAGE_PACK_STATUS_INPROGRESS,
  LANGUAGE_PACK_STATUS_INSTALLED,
  LANGUAGE_PACK_STATUS_ERROROTHER,
  LANGUAGE_PACK_STATUS_ERRORNEEDSREBOOT,
  LANGUAGE_PACK_STATUS_LAST = LANGUAGE_PACK_STATUS_ERRORNEEDSREBOOT,
};


const char* ToString(LanguagePackStatus as_enum);
LanguagePackStatus ParseLanguagePackStatus(base::StringPiece as_string);
std::u16string GetLanguagePackStatusParseError(base::StringPiece as_string);

// Object returned by callbacks when the status of language packs change.
struct LanguagePackStatusChange {
  LanguagePackStatusChange();
  ~LanguagePackStatusChange();
  LanguagePackStatusChange(const LanguagePackStatusChange&) = delete;
  LanguagePackStatusChange& operator=(const LanguagePackStatusChange&) = delete;
  LanguagePackStatusChange(LanguagePackStatusChange&& rhs);
  LanguagePackStatusChange& operator=(LanguagePackStatusChange&& rhs);

  // Populates a LanguagePackStatusChange object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, LanguagePackStatusChange& out);

  // Populates a LanguagePackStatusChange object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, LanguagePackStatusChange& out);

  // Creates a deep copy of LanguagePackStatusChange.
  LanguagePackStatusChange Clone() const;

  // Creates a LanguagePackStatusChange object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<LanguagePackStatusChange> FromValueDeprecated(const base::Value& value);

  // Creates a LanguagePackStatusChange object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<LanguagePackStatusChange> FromValue(const base::Value::Dict& value);

  // Creates a LanguagePackStatusChange object from a base::Value, or nullopt on
  // failure.
  static absl::optional<LanguagePackStatusChange> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisLanguagePackStatusChange object.
  base::Value::Dict ToValue() const;

  // All engine IDs for which this language pack status change applies to.
  std::vector<std::string> engine_ids;

  // The new language pack status.
  LanguagePackStatus status;

};

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

  // Type of keyboard to show for this field (Text, Number, URL, etc)
  InputModeType mode;

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

  // How the text field was focused
  FocusReason focus_reason;

  // Key of the app associated with this text field if any.
  absl::optional<std::string> app_key;

};

// User preference settings for a specific input method. Japanese input methods
// are not included because they are managed separately by Mozc module.
struct InputMethodSettings {
  InputMethodSettings();
  ~InputMethodSettings();
  InputMethodSettings(const InputMethodSettings&) = delete;
  InputMethodSettings& operator=(const InputMethodSettings&) = delete;
  InputMethodSettings(InputMethodSettings&& rhs);
  InputMethodSettings& operator=(InputMethodSettings&& rhs);

  // Populates a InputMethodSettings object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, InputMethodSettings& out);

  // Populates a InputMethodSettings object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, InputMethodSettings& out);

  // Creates a deep copy of InputMethodSettings.
  InputMethodSettings Clone() const;

  // Creates a InputMethodSettings object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<InputMethodSettings> FromValueDeprecated(const base::Value& value);

  // Creates a InputMethodSettings object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<InputMethodSettings> FromValue(const base::Value::Dict& value);

  // Creates a InputMethodSettings object from a base::Value, or nullopt on
  // failure.
  static absl::optional<InputMethodSettings> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisInputMethodSettings object.
  base::Value::Dict ToValue() const;

  // The configuration of which fuzzy pairs are enable.
  struct PinyinFuzzyConfig {
    PinyinFuzzyConfig();
    ~PinyinFuzzyConfig();
    PinyinFuzzyConfig(const PinyinFuzzyConfig&) = delete;
    PinyinFuzzyConfig& operator=(const PinyinFuzzyConfig&) = delete;
    PinyinFuzzyConfig(PinyinFuzzyConfig&& rhs);
    PinyinFuzzyConfig& operator=(PinyinFuzzyConfig&& rhs);

    // Populates a PinyinFuzzyConfig object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, PinyinFuzzyConfig& out);

    // Populates a PinyinFuzzyConfig object from a Dict& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value::Dict& value, PinyinFuzzyConfig& out);

    // Creates a deep copy of PinyinFuzzyConfig.
    PinyinFuzzyConfig Clone() const;

    // Creates a PinyinFuzzyConfig object from a base::Value::Dict, or nullopt on
    // failure.
    static absl::optional<PinyinFuzzyConfig> FromValue(const base::Value::Dict& value);

    // Creates a PinyinFuzzyConfig object from a base::Value, or nullopt on
    // failure.
    static absl::optional<PinyinFuzzyConfig> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisPinyinFuzzyConfig object.
    base::Value::Dict ToValue() const;

    // Whether to enable an_ang fuzzy
    absl::optional<bool> an_ang;

    // Whether to enable c_ch fuzzy
    absl::optional<bool> c_ch;

    // Whether to enable en_eng fuzzy
    absl::optional<bool> en_eng;

    // Whether to enable f_h fuzzy
    absl::optional<bool> f_h;

    // Whether to enable ian_iang fuzzy
    absl::optional<bool> ian_iang;

    // Whether to enable in_ing fuzzy
    absl::optional<bool> in_ing;

    // Whether to enable k_g fuzzy
    absl::optional<bool> k_g;

    // Whether to enable l_n fuzzy
    absl::optional<bool> l_n;

    // Whether to enable r_l fuzzy
    absl::optional<bool> r_l;

    // Whether to enable s_sh fuzzy
    absl::optional<bool> s_sh;

    // Whether to enable uan_uang fuzzy
    absl::optional<bool> uan_uang;

    // Whether to enable z_zh fuzzy
    absl::optional<bool> z_zh;

  };


  // Whether to enable auto completion.
  absl::optional<bool> enable_completion;

  // Whether to auto transform double spaces to type period.
  absl::optional<bool> enable_double_space_period;

  // Whether to enable gesture typing.
  absl::optional<bool> enable_gesture_typing;

  // Whether to enable word prediction.
  absl::optional<bool> enable_prediction;

  // Whether to enable sound on keypress.
  absl::optional<bool> enable_sound_on_keypress;

  // Whether auto correction should be enabled for physical keyboard by default.
  absl::optional<bool> physical_keyboard_auto_correction_enabled_by_default;

  // The level of auto correction for physical keyboard (0: Off, 1: Modest, 2:
  // Aggressive).
  absl::optional<int> physical_keyboard_auto_correction_level;

  // Whether to enable auto capitalization for physical keyboard.
  absl::optional<bool> physical_keyboard_enable_capitalization;

  // Whether to enable diacritics on longpress for physical keyboard.
  absl::optional<bool> physical_keyboard_enable_diacritics_on_longpress;

  // Whether to enable physical keyboard predictive writing
  absl::optional<bool> physical_keyboard_enable_predictive_writing;

  // The level of auto correction for virtual keyboard (0: Off, 1: Modest, 2:
  // Aggressive).
  absl::optional<int> virtual_keyboard_auto_correction_level;

  // Whether enable auto capitalization for virtual keyboard.
  absl::optional<bool> virtual_keyboard_enable_capitalization;

  // The xkb keyboard (system provided keyboard) layout.
  absl::optional<std::string> xkb_layout;

  // Whether input one syllable at a time in korean input method.
  absl::optional<bool> korean_enable_syllable_input;

  // The layout of korean keyboard.
  absl::optional<std::string> korean_keyboard_layout;

  // Whether to show hangul candidates in korean input method.
  absl::optional<bool> korean_show_hangul_candidate;

  // Whether to use Chinese punctuations in pinyin.
  absl::optional<bool> pinyin_chinese_punctuation;

  // User can use shortcuts to switch between Chinese and English quickly when
  // using pinyin, this flag indicates whether the default language is Chinese.
  absl::optional<bool> pinyin_default_chinese;

  // Whether to enable fuzzy pinyin.
  absl::optional<bool> pinyin_enable_fuzzy;

  // Whether to enable using ','/'.' to page up/down the candidates in pinyin.
  absl::optional<bool> pinyin_enable_lower_paging;

  // Whether to enable using '-'/'=' to page up/down the candidates in pinyin.
  absl::optional<bool> pinyin_enable_upper_paging;

  // Whether to output full width letters and digits in pinyin.
  absl::optional<bool> pinyin_full_width_character;

  // The configuration of which fuzzy pairs are enable.
  absl::optional<PinyinFuzzyConfig> pinyin_fuzzy_config;

  // The layout of zhuyin keyboard.
  absl::optional<std::string> zhuyin_keyboard_layout;

  // The page size of zhuyin candidate page.
  absl::optional<int> zhuyin_page_size;

  // The keys used to select candidates in zhuyin.
  absl::optional<std::string> zhuyin_select_keys;

  // Enable VNI flexible Vietnamese typing mode
  absl::optional<bool> vietnamese_vni_allow_flexible_diacritics;

  // Enable VNI modern tone mark placement
  absl::optional<bool> vietnamese_vni_new_style_tone_mark_placement;

  // Enable VNI insert-double-horn-on-UO shortcut
  absl::optional<bool> vietnamese_vni_insert_double_horn_on_uo;

  // Enable VNI showing underline on composition text
  absl::optional<bool> vietnamese_vni_show_underline;

  // Enable Telex flexible Vietnamese typing mode
  absl::optional<bool> vietnamese_telex_allow_flexible_diacritics;

  // Enable Telex modern tone mark placement
  absl::optional<bool> vietnamese_telex_new_style_tone_mark_placement;

  // Enable Telex insert-double-horn-on-UO horn shortcut
  absl::optional<bool> vietnamese_telex_insert_double_horn_on_uo;

  // Enable Telex inser-U-Horn-on-W shortcut
  absl::optional<bool> vietnamese_telex_insert_u_horn_on_w;

  // Enable Telex showing underline on composition text
  absl::optional<bool> vietnamese_telex_show_underline;

};


//
// Functions
//

namespace GetInputMethodConfig {

namespace Results {

// The input method config object.
struct Config {
  Config();
  ~Config();
  Config(const Config&) = delete;
  Config& operator=(const Config&) = delete;
  Config(Config&& rhs);
  Config& operator=(Config&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisConfig object.
  base::Value::Dict ToValue() const;

  bool is_physical_keyboard_autocorrect_enabled;

  bool is_ime_menu_activated;

};


// The input method config object.
base::Value::List Create(const Config& config);
}  // namespace Results

}  // namespace GetInputMethodConfig

namespace GetInputMethods {

namespace Results {

struct InputMethodsType {
  InputMethodsType();
  ~InputMethodsType();
  InputMethodsType(const InputMethodsType&) = delete;
  InputMethodsType& operator=(const InputMethodsType&) = delete;
  InputMethodsType(InputMethodsType&& rhs);
  InputMethodsType& operator=(InputMethodsType&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisInputMethodsType object.
  base::Value::Dict ToValue() const;

  std::string id;

  std::string name;

  std::string indicator;

};



// Enabled input method objects, sorted in ascending order of their localized
// full display names, according to the lexicographical order defined by the
// current system locale aka. display language.
base::Value::List Create(const std::vector<InputMethodsType>& input_methods);
}  // namespace Results

}  // namespace GetInputMethods

namespace GetCurrentInputMethod {

namespace Results {

// Current input method.
base::Value::List Create(const std::string& input_method_id);
}  // namespace Results

}  // namespace GetCurrentInputMethod

namespace SetCurrentInputMethod {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The input method ID to be set as current input method.
  std::string input_method_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetCurrentInputMethod

namespace SwitchToLastUsedInputMethod {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SwitchToLastUsedInputMethod

namespace FetchAllDictionaryWords {

namespace Results {

// List of dictionary words.
base::Value::List Create(const std::vector<std::string>& words);
}  // namespace Results

}  // namespace FetchAllDictionaryWords

namespace AddWordToDictionary {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // A new word to add to the dictionary.
  std::string word;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace AddWordToDictionary

namespace SetXkbLayout {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The XKB layout name.
  std::string xkb_name;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetXkbLayout

namespace FinishComposingText {

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

    // ID of the context where we want to finish composing.
    int context_id;

  };


  Parameters parameters;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace FinishComposingText

namespace ShowInputView {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ShowInputView

namespace HideInputView {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace HideInputView

namespace OpenOptionsPage {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // ID of the input method to open options for.
  std::string input_method_id;


 private:
  Params();
};

}  // namespace OpenOptionsPage

namespace GetSurroundingText {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The number of characters before the current selection.
  int before_length;

  // The number of characters after the current selection.
  int after_length;


 private:
  Params();
};

namespace Results {

// The surrouding text info.
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

  std::string before;

  std::string selected;

  std::string after;

};


// The surrouding text info.
base::Value::List Create(const SurroundingInfo& surrounding_info);
}  // namespace Results

}  // namespace GetSurroundingText

namespace GetSettings {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The ID of the engine (e.g. 'zh-t-i0-pinyin', 'xkb:us::eng')
  std::string engine_id;


 private:
  Params();
};

namespace Results {

// The requested setting, or null if there's no value
base::Value::List Create(const InputMethodSettings& settings);
}  // namespace Results

}  // namespace GetSettings

namespace SetSettings {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The ID of the engine (e.g. 'zh-t-i0-pinyin', 'xkb:us::eng')
  std::string engine_id;

  // The settings to set
  InputMethodSettings settings;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetSettings

namespace SetCompositionRange {

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

    // How much before the current selection to set as composition.
    int selection_before;

    // How much after the current selection to set as composition.
    int selection_after;

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

}  // namespace SetCompositionRange

namespace Reset {

}  // namespace Reset

namespace OnAutocorrect {

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

    // ID of the context where the autocorrect occurred.
    int context_id;

    // Corrected word will be replaced by this when clicking undo
    std::string typed_word;

    // Needed primarily to know the length of the autocorrected text to show the
    // correct length of underline. String content technically redundant; required
    // however, as what IMF knows may be stale due to async.
    std::string corrected_word;

    // Offset index (in code units) in surroundingInfo (see
    // onSurroundingTextChanged) for the start of the autocorrected text
    int start_index;

  };


  Parameters parameters;


 private:
  Params();
};

}  // namespace OnAutocorrect

namespace GetTextFieldBounds {

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

    // ID of the context.
    int context_id;

  };


  Parameters parameters;


 private:
  Params();
};

namespace Results {

struct TextFieldBounds {
  TextFieldBounds();
  ~TextFieldBounds();
  TextFieldBounds(const TextFieldBounds&) = delete;
  TextFieldBounds& operator=(const TextFieldBounds&) = delete;
  TextFieldBounds(TextFieldBounds&& rhs);
  TextFieldBounds& operator=(TextFieldBounds&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTextFieldBounds object.
  base::Value::Dict ToValue() const;

  // The x-coordinate of the text field's bounds.
  int x;

  // The y-coordinate of the text field's bounds.
  int y;

  // The width of the text field's bounds.
  int width;

  // The height of the  bounds.
  int height;

};


base::Value::List Create(const TextFieldBounds& text_field_bounds);
}  // namespace Results

}  // namespace GetTextFieldBounds

namespace NotifyInputMethodReadyForTesting {

}  // namespace NotifyInputMethodReadyForTesting

namespace GetLanguagePackStatus {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Fully qualified ID of the input method
  std::string input_method_id;


 private:
  Params();
};

namespace Results {

// The aggregated status of all language packs for the given input method, or
// 'installed' if there are no language packs.
base::Value::List Create(const LanguagePackStatus& status);
}  // namespace Results

}  // namespace GetLanguagePackStatus

//
// Events
//

namespace OnCaretBoundsChanged {

extern const char kEventName[];  // "inputMethodPrivate.onCaretBoundsChanged"

// The bounds information for the caret.
struct CaretBounds {
  CaretBounds();
  ~CaretBounds();
  CaretBounds(const CaretBounds&) = delete;
  CaretBounds& operator=(const CaretBounds&) = delete;
  CaretBounds(CaretBounds&& rhs);
  CaretBounds& operator=(CaretBounds&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCaretBounds object.
  base::Value::Dict ToValue() const;

  int x;

  int y;

  int w;

  int h;

};


// The bounds information for the caret.
base::Value::List Create(const CaretBounds& caret_bounds);
}  // namespace OnCaretBoundsChanged

namespace OnChanged {

extern const char kEventName[];  // "inputMethodPrivate.onChanged"

// New input method which is being used.
base::Value::List Create(const std::string& new_input_method_id);
}  // namespace OnChanged

namespace OnDictionaryLoaded {

extern const char kEventName[];  // "inputMethodPrivate.onDictionaryLoaded"

base::Value::List Create();
}  // namespace OnDictionaryLoaded

namespace OnDictionaryChanged {

extern const char kEventName[];  // "inputMethodPrivate.onDictionaryChanged"

// List of added words.
// List of removed words.
base::Value::List Create(const std::vector<std::string>& added, const std::vector<std::string>& removed);
}  // namespace OnDictionaryChanged

namespace OnImeMenuActivationChanged {

extern const char kEventName[];  // "inputMethodPrivate.onImeMenuActivationChanged"

// Whether the IME menu is currently active.
base::Value::List Create(bool activation);
}  // namespace OnImeMenuActivationChanged

namespace OnImeMenuListChanged {

extern const char kEventName[];  // "inputMethodPrivate.onImeMenuListChanged"

base::Value::List Create();
}  // namespace OnImeMenuListChanged

namespace OnImeMenuItemsChanged {

extern const char kEventName[];  // "inputMethodPrivate.onImeMenuItemsChanged"

// ID of the engine to use
// MenuItems to add or update.
base::Value::List Create(const std::string& engine_id, const std::vector<MenuItem>& items);
}  // namespace OnImeMenuItemsChanged

namespace OnFocus {

extern const char kEventName[];  // "inputMethodPrivate.onFocus"

// Describes the text field that has acquired focus.
base::Value::List Create(const InputContext& context);
}  // namespace OnFocus

namespace OnTouch {

extern const char kEventName[];  // "inputMethodPrivate.onTouch"

// Pointer type used to touch the text field
base::Value::List Create(const FocusReason& pointer_type);
}  // namespace OnTouch

namespace OnSettingsChanged {

extern const char kEventName[];  // "inputMethodPrivate.onSettingsChanged"

// ID of the engine that changed
// The new settings
base::Value::List Create(const std::string& engine_id, const InputMethodSettings& settings);
}  // namespace OnSettingsChanged

namespace OnScreenProjectionChanged {

extern const char kEventName[];  // "inputMethodPrivate.onScreenProjectionChanged"

// Whether the screen is projected.
base::Value::List Create(bool is_projected);
}  // namespace OnScreenProjectionChanged

namespace OnSuggestionsChanged {

extern const char kEventName[];  // "inputMethodPrivate.onSuggestionsChanged"

// List of suggestions to display, in order of relevance
base::Value::List Create(const std::vector<std::string>& suggestions);
}  // namespace OnSuggestionsChanged

namespace OnInputMethodOptionsChanged {

extern const char kEventName[];  // "inputMethodPrivate.onInputMethodOptionsChanged"

// The engine ID for the input method being changed.
base::Value::List Create(const std::string& engine_id);
}  // namespace OnInputMethodOptionsChanged

namespace OnLanguagePackStatusChanged {

extern const char kEventName[];  // "inputMethodPrivate.onLanguagePackStatusChanged"

// Information about what changed.
base::Value::List Create(const LanguagePackStatusChange& change);
}  // namespace OnLanguagePackStatusChanged

}  // namespace input_method_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_INPUT_METHOD_PRIVATE_H__
