// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/language_settings_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_LANGUAGE_SETTINGS_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_LANGUAGE_SETTINGS_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace language_settings_private {

//
// Types
//

enum  MoveType {
  MOVE_TYPE_NONE = 0,
  MOVE_TYPE_TOP,
  MOVE_TYPE_UP,
  MOVE_TYPE_DOWN,
  MOVE_TYPE_UNKNOWN,
  MOVE_TYPE_LAST = MOVE_TYPE_UNKNOWN,
};


const char* ToString(MoveType as_enum);
MoveType ParseMoveType(base::StringPiece as_string);
std::u16string GetMoveTypeParseError(base::StringPiece as_string);

struct Language {
  Language();
  ~Language();
  Language(const Language&) = delete;
  Language& operator=(const Language&) = delete;
  Language(Language&& rhs);
  Language& operator=(Language&& rhs);

  // Populates a Language object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Language& out);

  // Populates a Language object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, Language& out);

  // Creates a deep copy of Language.
  Language Clone() const;

  // Creates a Language object from a base::Value, or NULL on failure.
  static std::unique_ptr<Language> FromValueDeprecated(const base::Value& value);

  // Creates a Language object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<Language> FromValue(const base::Value::Dict& value);

  // Creates a Language object from a base::Value, or nullopt on failure.
  static absl::optional<Language> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisLanguage object.
  base::Value::Dict ToValue() const;

  // The unique code identifying the language.
  std::string code;

  // The name of the language, in the current UI language.
  std::string display_name;

  // The name of the language as it is in its own language.
  std::string native_display_name;

  // Whether the UI can be displayed in this language. Defaults to false.
  absl::optional<bool> supports_ui;

  // Whether this language can be used for spell checking. Defaults to false.
  absl::optional<bool> supports_spellcheck;

  // Whether this language has translations for the current target language.
  // Defaults to false.
  absl::optional<bool> supports_translate;

  // Whether this language is prohibited as a UI locale (not in the list of the
  // 'AllowedLanguages' policy). Defaults to false.
  absl::optional<bool> is_prohibited_language;

};

struct SpellcheckDictionaryStatus {
  SpellcheckDictionaryStatus();
  ~SpellcheckDictionaryStatus();
  SpellcheckDictionaryStatus(const SpellcheckDictionaryStatus&) = delete;
  SpellcheckDictionaryStatus& operator=(const SpellcheckDictionaryStatus&) = delete;
  SpellcheckDictionaryStatus(SpellcheckDictionaryStatus&& rhs);
  SpellcheckDictionaryStatus& operator=(SpellcheckDictionaryStatus&& rhs);

  // Populates a SpellcheckDictionaryStatus object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SpellcheckDictionaryStatus& out);

  // Populates a SpellcheckDictionaryStatus object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SpellcheckDictionaryStatus& out);

  // Creates a deep copy of SpellcheckDictionaryStatus.
  SpellcheckDictionaryStatus Clone() const;

  // Creates a SpellcheckDictionaryStatus object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<SpellcheckDictionaryStatus> FromValueDeprecated(const base::Value& value);

  // Creates a SpellcheckDictionaryStatus object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<SpellcheckDictionaryStatus> FromValue(const base::Value::Dict& value);

  // Creates a SpellcheckDictionaryStatus object from a base::Value, or nullopt
  // on failure.
  static absl::optional<SpellcheckDictionaryStatus> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSpellcheckDictionaryStatus object.
  base::Value::Dict ToValue() const;

  // The language code of the dictionary that the status describes.
  std::string language_code;

  // Whether the dictionary is ready (has been loaded from disk or successfully
  // downloaded).
  bool is_ready;

  // Whether the dictionary is being downloaded. Defaults to false.
  absl::optional<bool> is_downloading;

  // Whether the dictionary download failed. Defaults to false.
  absl::optional<bool> download_failed;

};

struct InputMethod {
  InputMethod();
  ~InputMethod();
  InputMethod(const InputMethod&) = delete;
  InputMethod& operator=(const InputMethod&) = delete;
  InputMethod(InputMethod&& rhs);
  InputMethod& operator=(InputMethod&& rhs);

  // Populates a InputMethod object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, InputMethod& out);

  // Populates a InputMethod object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, InputMethod& out);

  // Creates a deep copy of InputMethod.
  InputMethod Clone() const;

  // Creates a InputMethod object from a base::Value, or NULL on failure.
  static std::unique_ptr<InputMethod> FromValueDeprecated(const base::Value& value);

  // Creates a InputMethod object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<InputMethod> FromValue(const base::Value::Dict& value);

  // Creates a InputMethod object from a base::Value, or nullopt on failure.
  static absl::optional<InputMethod> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisInputMethod object.
  base::Value::Dict ToValue() const;

  // The ID of the input method descriptor.
  std::string id;

  // The human-readable name of the input method.
  std::string display_name;

  // The language codes this input method supports.
  std::vector<std::string> language_codes;

  // The search terms for the input method.
  std::vector<std::string> tags;

  // True if the input method is enabled.
  absl::optional<bool> enabled;

  // True if the input method extension has an options page.
  absl::optional<bool> has_options_page;

  // True if the input method is not allowed by policy.
  absl::optional<bool> is_prohibited_by_policy;

};

struct InputMethodLists {
  InputMethodLists();
  ~InputMethodLists();
  InputMethodLists(const InputMethodLists&) = delete;
  InputMethodLists& operator=(const InputMethodLists&) = delete;
  InputMethodLists(InputMethodLists&& rhs);
  InputMethodLists& operator=(InputMethodLists&& rhs);

  // Populates a InputMethodLists object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, InputMethodLists& out);

  // Populates a InputMethodLists object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, InputMethodLists& out);

  // Creates a deep copy of InputMethodLists.
  InputMethodLists Clone() const;

  // Creates a InputMethodLists object from a base::Value, or NULL on failure.
  static std::unique_ptr<InputMethodLists> FromValueDeprecated(const base::Value& value);

  // Creates a InputMethodLists object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<InputMethodLists> FromValue(const base::Value::Dict& value);

  // Creates a InputMethodLists object from a base::Value, or nullopt on
  // failure.
  static absl::optional<InputMethodLists> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisInputMethodLists object.
  base::Value::Dict ToValue() const;

  // The list of component extension input methods.
  std::vector<InputMethod> component_extension_imes;

  // The list of third-party extension input methods.
  std::vector<InputMethod> third_party_extension_imes;

};


//
// Functions
//

namespace GetLanguageList {

namespace Results {

base::Value::List Create(const std::vector<Language>& languages);
}  // namespace Results

}  // namespace GetLanguageList

namespace EnableLanguage {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string language_code;


 private:
  Params();
};

}  // namespace EnableLanguage

namespace DisableLanguage {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string language_code;


 private:
  Params();
};

}  // namespace DisableLanguage

namespace SetEnableTranslationForLanguage {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string language_code;

  bool enable;


 private:
  Params();
};

}  // namespace SetEnableTranslationForLanguage

namespace MoveLanguage {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string language_code;

  MoveType move_type;


 private:
  Params();
};

}  // namespace MoveLanguage

namespace GetAlwaysTranslateLanguages {

namespace Results {

base::Value::List Create(const std::vector<std::string>& language_codes);
}  // namespace Results

}  // namespace GetAlwaysTranslateLanguages

namespace SetLanguageAlwaysTranslateState {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string language_code;

  bool always_translate;


 private:
  Params();
};

}  // namespace SetLanguageAlwaysTranslateState

namespace GetNeverTranslateLanguages {

namespace Results {

base::Value::List Create(const std::vector<std::string>& language_codes);
}  // namespace Results

}  // namespace GetNeverTranslateLanguages

namespace GetSpellcheckDictionaryStatuses {

namespace Results {

base::Value::List Create(const std::vector<SpellcheckDictionaryStatus>& status);
}  // namespace Results

}  // namespace GetSpellcheckDictionaryStatuses

namespace GetSpellcheckWords {

namespace Results {

base::Value::List Create(const std::vector<std::string>& words);
}  // namespace Results

}  // namespace GetSpellcheckWords

namespace AddSpellcheckWord {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string word;


 private:
  Params();
};

}  // namespace AddSpellcheckWord

namespace RemoveSpellcheckWord {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string word;


 private:
  Params();
};

}  // namespace RemoveSpellcheckWord

namespace GetTranslateTargetLanguage {

namespace Results {

base::Value::List Create(const std::string& language_code);
}  // namespace Results

}  // namespace GetTranslateTargetLanguage

namespace SetTranslateTargetLanguage {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string language_code;


 private:
  Params();
};

}  // namespace SetTranslateTargetLanguage

namespace GetInputMethodLists {

namespace Results {

base::Value::List Create(const InputMethodLists& lists);
}  // namespace Results

}  // namespace GetInputMethodLists

namespace AddInputMethod {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string input_method_id;


 private:
  Params();
};

}  // namespace AddInputMethod

namespace RemoveInputMethod {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string input_method_id;


 private:
  Params();
};

}  // namespace RemoveInputMethod

namespace RetryDownloadDictionary {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string language_code;


 private:
  Params();
};

}  // namespace RetryDownloadDictionary

//
// Events
//

namespace OnSpellcheckDictionariesChanged {

extern const char kEventName[];  // "languageSettingsPrivate.onSpellcheckDictionariesChanged"

base::Value::List Create(const std::vector<SpellcheckDictionaryStatus>& statuses);
}  // namespace OnSpellcheckDictionariesChanged

namespace OnCustomDictionaryChanged {

extern const char kEventName[];  // "languageSettingsPrivate.onCustomDictionaryChanged"

base::Value::List Create(const std::vector<std::string>& words_added, const std::vector<std::string>& words_removed);
}  // namespace OnCustomDictionaryChanged

namespace OnInputMethodAdded {

extern const char kEventName[];  // "languageSettingsPrivate.onInputMethodAdded"

base::Value::List Create(const std::string& input_method_id);
}  // namespace OnInputMethodAdded

namespace OnInputMethodRemoved {

extern const char kEventName[];  // "languageSettingsPrivate.onInputMethodRemoved"

base::Value::List Create(const std::string& input_method_id);
}  // namespace OnInputMethodRemoved

}  // namespace language_settings_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_LANGUAGE_SETTINGS_PRIVATE_H__
