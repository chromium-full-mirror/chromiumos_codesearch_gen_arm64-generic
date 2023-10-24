// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/omnibox.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_OMNIBOX_H__
#define CHROME_COMMON_EXTENSIONS_API_OMNIBOX_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace omnibox {

//
// Types
//

// The style type.
enum  DescriptionStyleType {
  DESCRIPTION_STYLE_TYPE_NONE = 0,
  DESCRIPTION_STYLE_TYPE_URL,
  DESCRIPTION_STYLE_TYPE_MATCH,
  DESCRIPTION_STYLE_TYPE_DIM,
  DESCRIPTION_STYLE_TYPE_LAST = DESCRIPTION_STYLE_TYPE_DIM,
};


const char* ToString(DescriptionStyleType as_enum);
DescriptionStyleType ParseDescriptionStyleType(base::StringPiece as_string);
std::u16string GetDescriptionStyleTypeParseError(base::StringPiece as_string);

// The window disposition for the omnibox query. This is the recommended context
// to display results. For example, if the omnibox command is to navigate to a
// certain URL, a disposition of 'newForegroundTab' means the navigation should
// take place in a new selected tab.
enum  OnInputEnteredDisposition {
  ON_INPUT_ENTERED_DISPOSITION_NONE = 0,
  ON_INPUT_ENTERED_DISPOSITION_CURRENTTAB,
  ON_INPUT_ENTERED_DISPOSITION_NEWFOREGROUNDTAB,
  ON_INPUT_ENTERED_DISPOSITION_NEWBACKGROUNDTAB,
  ON_INPUT_ENTERED_DISPOSITION_LAST = ON_INPUT_ENTERED_DISPOSITION_NEWBACKGROUNDTAB,
};


const char* ToString(OnInputEnteredDisposition as_enum);
OnInputEnteredDisposition ParseOnInputEnteredDisposition(base::StringPiece as_string);
std::u16string GetOnInputEnteredDispositionParseError(base::StringPiece as_string);

// The style ranges for the description, as provided by the extension.
struct MatchClassification {
  MatchClassification();
  ~MatchClassification();
  MatchClassification(const MatchClassification&) = delete;
  MatchClassification& operator=(const MatchClassification&) = delete;
  MatchClassification(MatchClassification&& rhs);
  MatchClassification& operator=(MatchClassification&& rhs);

  // Populates a MatchClassification object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MatchClassification& out);

  // Populates a MatchClassification object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, MatchClassification& out);

  // Creates a deep copy of MatchClassification.
  MatchClassification Clone() const;

  // Creates a MatchClassification object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<MatchClassification> FromValueDeprecated(const base::Value& value);

  // Creates a MatchClassification object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<MatchClassification> FromValue(const base::Value::Dict& value);

  // Creates a MatchClassification object from a base::Value, or nullopt on
  // failure.
  static absl::optional<MatchClassification> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMatchClassification object.
  base::Value::Dict ToValue() const;

  int offset;

  // The style type
  DescriptionStyleType type;

  absl::optional<int> length;

};

// A suggest result.
struct SuggestResult {
  SuggestResult();
  ~SuggestResult();
  SuggestResult(const SuggestResult&) = delete;
  SuggestResult& operator=(const SuggestResult&) = delete;
  SuggestResult(SuggestResult&& rhs);
  SuggestResult& operator=(SuggestResult&& rhs);

  // Populates a SuggestResult object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SuggestResult& out);

  // Populates a SuggestResult object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SuggestResult& out);

  // Creates a deep copy of SuggestResult.
  SuggestResult Clone() const;

  // Creates a SuggestResult object from a base::Value, or NULL on failure.
  static std::unique_ptr<SuggestResult> FromValueDeprecated(const base::Value& value);

  // Creates a SuggestResult object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<SuggestResult> FromValue(const base::Value::Dict& value);

  // Creates a SuggestResult object from a base::Value, or nullopt on failure.
  static absl::optional<SuggestResult> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSuggestResult object.
  base::Value::Dict ToValue() const;

  // The text that is put into the URL bar, and that is sent to the extension when
  // the user chooses this entry.
  std::string content;

  // The text that is displayed in the URL dropdown. Can contain XML-style markup
  // for styling. The supported tags are 'url' (for a literal URL), 'match' (for
  // highlighting text that matched what the user's query), and 'dim' (for dim
  // helper text). The styles can be nested, eg. <dim><match>dimmed
  // match</match></dim>. You must escape the five predefined entities to display
  // them as text: stackoverflow.com/a/1091953/89484
  std::string description;

  // Whether the suggest result can be deleted by the user.
  absl::optional<bool> deletable;

  // An array of style ranges for the description, as provided by the extension.
  absl::optional<std::vector<MatchClassification>> description_styles;

};

// A suggest result.
struct DefaultSuggestResult {
  DefaultSuggestResult();
  ~DefaultSuggestResult();
  DefaultSuggestResult(const DefaultSuggestResult&) = delete;
  DefaultSuggestResult& operator=(const DefaultSuggestResult&) = delete;
  DefaultSuggestResult(DefaultSuggestResult&& rhs);
  DefaultSuggestResult& operator=(DefaultSuggestResult&& rhs);

  // Populates a DefaultSuggestResult object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DefaultSuggestResult& out);

  // Populates a DefaultSuggestResult object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DefaultSuggestResult& out);

  // Creates a deep copy of DefaultSuggestResult.
  DefaultSuggestResult Clone() const;

  // Creates a DefaultSuggestResult object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<DefaultSuggestResult> FromValueDeprecated(const base::Value& value);

  // Creates a DefaultSuggestResult object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<DefaultSuggestResult> FromValue(const base::Value::Dict& value);

  // Creates a DefaultSuggestResult object from a base::Value, or nullopt on
  // failure.
  static absl::optional<DefaultSuggestResult> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDefaultSuggestResult object.
  base::Value::Dict ToValue() const;

  // The text that is displayed in the URL dropdown. Can contain XML-style markup
  // for styling. The supported tags are 'url' (for a literal URL), 'match' (for
  // highlighting text that matched what the user's query), and 'dim' (for dim
  // helper text). The styles can be nested, eg. <dim><match>dimmed
  // match</match></dim>.
  std::string description;

  // An array of style ranges for the description, as provided by the extension.
  absl::optional<std::vector<MatchClassification>> description_styles;

};


//
// Manifest Keys
//

struct ManifestKeys {
  ManifestKeys();
  ~ManifestKeys();
  ManifestKeys(const ManifestKeys&) = delete;
  ManifestKeys& operator=(const ManifestKeys&) = delete;
  ManifestKeys(ManifestKeys&& rhs);
  ManifestKeys& operator=(ManifestKeys&& rhs);

  // Manifest key constants.
  static constexpr char kOmnibox[] = "omnibox";

  // Parses manifest keys for this namespace. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // is populated.
  static bool ParseFromDictionary(const base::Value::Dict& root_dict, ManifestKeys& out, std::u16string& error);


  struct Omnibox {
    Omnibox();
    ~Omnibox();
    Omnibox(const Omnibox&) = delete;
    Omnibox& operator=(const Omnibox&) = delete;
    Omnibox(Omnibox&& rhs);
    Omnibox& operator=(Omnibox&& rhs);

    // Manifest key constants.
    static constexpr char kKeyword[] = "keyword";

    // Parses the given |key| from |root_dict|. Any keys not available to the
    // manifest will be ignored. On a parsing error, false is returned and |error|
    // and |error_path_reversed| are populated.
    static bool ParseFromDictionary(const base::Value::Dict& root_dict, base::StringPiece key, Omnibox& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed);


    // The keyword to register with the omnibox. Must be non-empty.
    std::string keyword;

  };


  Omnibox omnibox;

};

//
// Functions
//

namespace SendSuggestions {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  int request_id;

  // An array of suggest results
  std::vector<SuggestResult> suggest_results;


 private:
  Params();
};

}  // namespace SendSuggestions

namespace SetDefaultSuggestion {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // A partial SuggestResult object, without the 'content' parameter.
  DefaultSuggestResult suggestion;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetDefaultSuggestion

//
// Events
//

namespace OnInputStarted {

extern const char kEventName[];  // "omnibox.onInputStarted"

base::Value::List Create();
}  // namespace OnInputStarted

namespace OnInputChanged {

extern const char kEventName[];  // "omnibox.onInputChanged"

base::Value::List Create(const std::string& text);
}  // namespace OnInputChanged

namespace OnInputEntered {

extern const char kEventName[];  // "omnibox.onInputEntered"

base::Value::List Create(const std::string& text, const OnInputEnteredDisposition& disposition);
}  // namespace OnInputEntered

namespace OnInputCancelled {

extern const char kEventName[];  // "omnibox.onInputCancelled"

base::Value::List Create();
}  // namespace OnInputCancelled

namespace OnDeleteSuggestion {

extern const char kEventName[];  // "omnibox.onDeleteSuggestion"

// Text of the deleted suggestion.
base::Value::List Create(const std::string& text);
}  // namespace OnDeleteSuggestion

}  // namespace omnibox
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_OMNIBOX_H__
