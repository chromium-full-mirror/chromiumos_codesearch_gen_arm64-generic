// Copyright 2024 The Chromium Authors
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
#include <optional>
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
enum class MenuItemStyle {
  kNone = 0,
  kCheck,
  kRadio,
  kSeparator,
  kMaxValue = kSeparator,
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
  MenuItem(MenuItem&& rhs) noexcept;
  MenuItem& operator=(MenuItem&& rhs) noexcept;

  // Populates a MenuItem object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, MenuItem& out);

  // Populates a MenuItem object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, MenuItem& out);

  // Creates a deep copy of MenuItem.
  MenuItem Clone() const;

  // Creates a MenuItem object from a base::Value::Dict, or nullopt on failure.
  static std::optional<MenuItem> FromValue(const base::Value::Dict& value);

  // Creates a MenuItem object from a base::Value, or nullopt on failure.
  static std::optional<MenuItem> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMenuItem object.
  base::Value::Dict ToValue() const;

  // String that will be passed to callbacks referencing this MenuItem.
  std::string id;

  // Text displayed in the menu for this item.
  std::optional<std::string> label;

  // The type of menu item.
  MenuItemStyle style;

  // Indicates this item is visible.
  std::optional<bool> visible;

  // Indicates this item should be drawn with a check.
  std::optional<bool> checked;

  // Indicates this item is enabled.
  std::optional<bool> enabled;

};

// The type of the underline to modify a composition segment.
enum class UnderlineStyle {
  kNone = 0,
  kUnderline,
  kDoubleUnderline,
  kNoUnderline,
  kMaxValue = kNoUnderline,
};


const char* ToString(UnderlineStyle as_enum);
UnderlineStyle ParseUnderlineStyle(base::StringPiece as_string);
std::u16string GetUnderlineStyleParseError(base::StringPiece as_string);

// Describes how the text field was focused
enum class FocusReason {
  kNone = 0,
  kMouse,
  kTouch,
  kPen,
  kOther,
  kMaxValue = kOther,
};


const char* ToString(FocusReason as_enum);
FocusReason ParseFocusReason(base::StringPiece as_string);
std::u16string GetFocusReasonParseError(base::StringPiece as_string);

// Type of keyboard to show for this text field, (Text, Number, URL, etc) set by
// mode property of input tag
enum class InputModeType {
  kNone = 0,
  kNoKeyboard,
  kText,
  kTel,
  kUrl,
  kEmail,
  kNumeric,
  kDecimal,
  kSearch,
  kMaxValue = kSearch,
};


const char* ToString(InputModeType as_enum);
InputModeType ParseInputModeType(base::StringPiece as_string);
std::u16string GetInputModeTypeParseError(base::StringPiece as_string);

// Type of value this text field edits, (Text, Number, URL, etc)
enum class InputContextType {
  kNone = 0,
  kText,
  kSearch,
  kTel,
  kUrl,
  kEmail,
  kNumber,
  kPassword,
  kNull,
  kMaxValue = kNull,
};


const char* ToString(InputContextType as_enum);
InputContextType ParseInputContextType(base::StringPiece as_string);
std::u16string GetInputContextTypeParseError(base::StringPiece as_string);

// The auto-capitalize type of the text field.
enum class AutoCapitalizeType {
  kNone = 0,
  kOff,
  kCharacters,
  kWords,
  kSentences,
  kMaxValue = kSentences,
};


const char* ToString(AutoCapitalizeType as_enum);
AutoCapitalizeType ParseAutoCapitalizeType(base::StringPiece as_string);
std::u16string GetAutoCapitalizeTypeParseError(base::StringPiece as_string);

// The aggregated status of all language packs for a given input method.
enum class LanguagePackStatus {
  kNone = 0,
  kUnknown,
  kNotInstalled,
  kInProgress,
  kInstalled,
  kErrorOther,
  kErrorNeedsReboot,
  kMaxValue = kErrorNeedsReboot,
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
  LanguagePackStatusChange(LanguagePackStatusChange&& rhs) noexcept;
  LanguagePackStatusChange& operator=(LanguagePackStatusChange&& rhs) noexcept;

  // Populates a LanguagePackStatusChange object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, LanguagePackStatusChange& out);

  // Populates a LanguagePackStatusChange object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, LanguagePackStatusChange& out);

  // Creates a deep copy of LanguagePackStatusChange.
  LanguagePackStatusChange Clone() const;

  // Creates a LanguagePackStatusChange object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<LanguagePackStatusChange> FromValue(const base::Value::Dict& value);

  // Creates a LanguagePackStatusChange object from a base::Value, or nullopt on
  // failure.
  static std::optional<LanguagePackStatusChange> FromValue(const base::Value& value);

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
  InputContext(InputContext&& rhs) noexcept;
  InputContext& operator=(InputContext&& rhs) noexcept;

  // Populates a InputContext object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, InputContext& out);

  // Populates a InputContext object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, InputContext& out);

  // Creates a deep copy of InputContext.
  InputContext Clone() const;

  // Creates a InputContext object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<InputContext> FromValue(const base::Value::Dict& value);

  // Creates a InputContext object from a base::Value, or nullopt on failure.
  static std::optional<InputContext> FromValue(const base::Value& value);

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
  std::optional<std::string> app_key;

};

// User preference settings for a specific input method. Japanese input methods
// are not included because they are managed separately by Mozc module.
struct InputMethodSettings {
  InputMethodSettings();
  ~InputMethodSettings();
  InputMethodSettings(const InputMethodSettings&) = delete;
  InputMethodSettings& operator=(const InputMethodSettings&) = delete;
  InputMethodSettings(InputMethodSettings&& rhs) noexcept;
  InputMethodSettings& operator=(InputMethodSettings&& rhs) noexcept;

  // Populates a InputMethodSettings object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, InputMethodSettings& out);

  // Populates a InputMethodSettings object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, InputMethodSettings& out);

  // Creates a deep copy of InputMethodSettings.
  InputMethodSettings Clone() const;

  // Creates a InputMethodSettings object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<InputMethodSettings> FromValue(const base::Value::Dict& value);

  // Creates a InputMethodSettings object from a base::Value, or nullopt on
  // failure.
  static std::optional<InputMethodSettings> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisInputMethodSettings object.
  base::Value::Dict ToValue() const;

  // The configuration of which fuzzy pairs are enable.
  struct PinyinFuzzyConfig {
    PinyinFuzzyConfig();
    ~PinyinFuzzyConfig();
    PinyinFuzzyConfig(const PinyinFuzzyConfig&) = delete;
    PinyinFuzzyConfig& operator=(const PinyinFuzzyConfig&) = delete;
    PinyinFuzzyConfig(PinyinFuzzyConfig&& rhs) noexcept;
    PinyinFuzzyConfig& operator=(PinyinFuzzyConfig&& rhs) noexcept;

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
    static std::optional<PinyinFuzzyConfig> FromValue(const base::Value::Dict& value);

    // Creates a PinyinFuzzyConfig object from a base::Value, or nullopt on
    // failure.
    static std::optional<PinyinFuzzyConfig> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisPinyinFuzzyConfig object.
    base::Value::Dict ToValue() const;

    // Whether to enable an_ang fuzzy
    std::optional<bool> an_ang;

    // Whether to enable c_ch fuzzy
    std::optional<bool> c_ch;

    // Whether to enable en_eng fuzzy
    std::optional<bool> en_eng;

    // Whether to enable f_h fuzzy
    std::optional<bool> f_h;

    // Whether to enable ian_iang fuzzy
    std::optional<bool> ian_iang;

    // Whether to enable in_ing fuzzy
    std::optional<bool> in_ing;

    // Whether to enable k_g fuzzy
    std::optional<bool> k_g;

    // Whether to enable l_n fuzzy
    std::optional<bool> l_n;

    // Whether to enable r_l fuzzy
    std::optional<bool> r_l;

    // Whether to enable s_sh fuzzy
    std::optional<bool> s_sh;

    // Whether to enable uan_uang fuzzy
    std::optional<bool> uan_uang;

    // Whether to enable z_zh fuzzy
    std::optional<bool> z_zh;

  };


  // Whether to enable auto completion.
  std::optional<bool> enable_completion;

  // Whether to auto transform double spaces to type period.
  std::optional<bool> enable_double_space_period;

  // Whether to enable gesture typing.
  std::optional<bool> enable_gesture_typing;

  // Whether to enable word prediction.
  std::optional<bool> enable_prediction;

  // Whether to enable sound on keypress.
  std::optional<bool> enable_sound_on_keypress;

  // Whether auto correction should be enabled for physical keyboard by default.
  std::optional<bool> physical_keyboard_auto_correction_enabled_by_default;

  // The level of auto correction for physical keyboard (0: Off, 1: Modest, 2:
  // Aggressive).
  std::optional<int> physical_keyboard_auto_correction_level;

  // Whether to enable auto capitalization for physical keyboard.
  std::optional<bool> physical_keyboard_enable_capitalization;

  // Whether to enable diacritics on longpress for physical keyboard.
  std::optional<bool> physical_keyboard_enable_diacritics_on_longpress;

  // Whether to enable physical keyboard predictive writing
  std::optional<bool> physical_keyboard_enable_predictive_writing;

  // The level of auto correction for virtual keyboard (0: Off, 1: Modest, 2:
  // Aggressive).
  std::optional<int> virtual_keyboard_auto_correction_level;

  // Whether enable auto capitalization for virtual keyboard.
  std::optional<bool> virtual_keyboard_enable_capitalization;

  // The xkb keyboard (system provided keyboard) layout.
  std::optional<std::string> xkb_layout;

  // Whether input one syllable at a time in korean input method.
  std::optional<bool> korean_enable_syllable_input;

  // The layout of korean keyboard.
  std::optional<std::string> korean_keyboard_layout;

  // Whether to show hangul candidates in korean input method.
  std::optional<bool> korean_show_hangul_candidate;

  // Whether to use Chinese punctuations in pinyin.
  std::optional<bool> pinyin_chinese_punctuation;

  // User can use shortcuts to switch between Chinese and English quickly when
  // using pinyin, this flag indicates whether the default language is Chinese.
  std::optional<bool> pinyin_default_chinese;

  // Whether to enable fuzzy pinyin.
  std::optional<bool> pinyin_enable_fuzzy;

  // Whether to enable using ','/'.' to page up/down the candidates in pinyin.
  std::optional<bool> pinyin_enable_lower_paging;

  // Whether to enable using '-'/'=' to page up/down the candidates in pinyin.
  std::optional<bool> pinyin_enable_upper_paging;

  // Whether to output full width letters and digits in pinyin.
  std::optional<bool> pinyin_full_width_character;

  // The configuration of which fuzzy pairs are enable.
  std::optional<PinyinFuzzyConfig> pinyin_fuzzy_config;

  // The layout of zhuyin keyboard.
  std::optional<std::string> zhuyin_keyboard_layout;

  // The page size of zhuyin candidate page.
  std::optional<int> zhuyin_page_size;

  // The keys used to select candidates in zhuyin.
  std::optional<std::string> zhuyin_select_keys;

  // Enable VNI flexible Vietnamese typing mode
  std::optional<bool> vietnamese_vni_allow_flexible_diacritics;

  // Enable VNI modern tone mark placement
  std::optional<bool> vietnamese_vni_new_style_tone_mark_placement;

  // Enable VNI insert-double-horn-on-UO shortcut
  std::optional<bool> vietnamese_vni_insert_double_horn_on_uo;

  // Enable VNI showing underline on composition text
  std::optional<bool> vietnamese_vni_show_underline;

  // Enable Telex flexible Vietnamese typing mode
  std::optional<bool> vietnamese_telex_allow_flexible_diacritics;

  // Enable Telex modern tone mark placement
  std::optional<bool> vietnamese_telex_new_style_tone_mark_placement;

  // Enable Telex insert-double-horn-on-UO horn shortcut
  std::optional<bool> vietnamese_telex_insert_double_horn_on_uo;

  // Enable Telex inser-U-Horn-on-W shortcut
  std::optional<bool> vietnamese_telex_insert_u_horn_on_w;

  // Enable Telex showing underline on composition text
  std::optional<bool> vietnamese_telex_show_underline;

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
  Config(Config&& rhs) noexcept;
  Config& operator=(Config&& rhs) noexcept;

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
  InputMethodsType(InputMethodsType&& rhs) noexcept;
  InputMethodsType& operator=(InputMethodsType&& rhs) noexcept;

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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Parameters {
    Parameters();
    ~Parameters();
    Parameters(const Parameters&) = delete;
    Parameters& operator=(const Parameters&) = delete;
    Parameters(Parameters&& rhs) noexcept;
    Parameters& operator=(Parameters&& rhs) noexcept;

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
    static std::optional<Parameters> FromValue(const base::Value::Dict& value);

    // Creates a Parameters object from a base::Value, or nullopt on failure.
    static std::optional<Parameters> FromValue(const base::Value& value);

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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // ID of the input method to open options for.
  std::string input_method_id;


 private:
  Params();
};

}  // namespace OpenOptionsPage

namespace GetSurroundingText {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  SurroundingInfo(SurroundingInfo&& rhs) noexcept;
  SurroundingInfo& operator=(SurroundingInfo&& rhs) noexcept;

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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Parameters {
    Parameters();
    ~Parameters();
    Parameters(const Parameters&) = delete;
    Parameters& operator=(const Parameters&) = delete;
    Parameters(Parameters&& rhs) noexcept;
    Parameters& operator=(Parameters&& rhs) noexcept;

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
    static std::optional<Parameters> FromValue(const base::Value::Dict& value);

    // Creates a Parameters object from a base::Value, or nullopt on failure.
    static std::optional<Parameters> FromValue(const base::Value& value);

    struct SegmentsType {
      SegmentsType();
      ~SegmentsType();
      SegmentsType(const SegmentsType&) = delete;
      SegmentsType& operator=(const SegmentsType&) = delete;
      SegmentsType(SegmentsType&& rhs) noexcept;
      SegmentsType& operator=(SegmentsType&& rhs) noexcept;

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
      static std::optional<SegmentsType> FromValue(const base::Value::Dict& value);

      // Creates a SegmentsType object from a base::Value, or nullopt on failure.
      static std::optional<SegmentsType> FromValue(const base::Value& value);

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
    std::optional<std::vector<SegmentsType>> segments;

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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Parameters {
    Parameters();
    ~Parameters();
    Parameters(const Parameters&) = delete;
    Parameters& operator=(const Parameters&) = delete;
    Parameters(Parameters&& rhs) noexcept;
    Parameters& operator=(Parameters&& rhs) noexcept;

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
    static std::optional<Parameters> FromValue(const base::Value::Dict& value);

    // Creates a Parameters object from a base::Value, or nullopt on failure.
    static std::optional<Parameters> FromValue(const base::Value& value);

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

namespace NotifyInputMethodReadyForTesting {

}  // namespace NotifyInputMethodReadyForTesting

namespace GetLanguagePackStatus {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  CaretBounds(CaretBounds&& rhs) noexcept;
  CaretBounds& operator=(CaretBounds&& rhs) noexcept;

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
