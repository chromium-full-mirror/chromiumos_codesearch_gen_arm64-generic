// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/settings_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_SETTINGS_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_SETTINGS_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace settings_private {

//
// Types
//

enum  PrefType {
  PREF_TYPE_NONE = 0,
  PREF_TYPE_BOOLEAN,
  PREF_TYPE_NUMBER,
  PREF_TYPE_STRING,
  PREF_TYPE_URL,
  PREF_TYPE_LIST,
  PREF_TYPE_DICTIONARY,
  PREF_TYPE_LAST = PREF_TYPE_DICTIONARY,
};


const char* ToString(PrefType as_enum);
PrefType ParsePrefType(base::StringPiece as_string);
std::u16string GetPrefTypeParseError(base::StringPiece as_string);

enum  ControlledBy {
  CONTROLLED_BY_NONE = 0,
  CONTROLLED_BY_DEVICE_POLICY,
  CONTROLLED_BY_USER_POLICY,
  CONTROLLED_BY_OWNER,
  CONTROLLED_BY_PRIMARY_USER,
  CONTROLLED_BY_EXTENSION,
  CONTROLLED_BY_PARENT,
  CONTROLLED_BY_CHILD_RESTRICTION,
  CONTROLLED_BY_LAST = CONTROLLED_BY_CHILD_RESTRICTION,
};


const char* ToString(ControlledBy as_enum);
ControlledBy ParseControlledBy(base::StringPiece as_string);
std::u16string GetControlledByParseError(base::StringPiece as_string);

enum  Enforcement {
  ENFORCEMENT_NONE = 0,
  ENFORCEMENT_ENFORCED,
  ENFORCEMENT_RECOMMENDED,
  ENFORCEMENT_PARENT_SUPERVISED,
  ENFORCEMENT_LAST = ENFORCEMENT_PARENT_SUPERVISED,
};


const char* ToString(Enforcement as_enum);
Enforcement ParseEnforcement(base::StringPiece as_string);
std::u16string GetEnforcementParseError(base::StringPiece as_string);

struct PrefObject {
  PrefObject();
  ~PrefObject();
  PrefObject(const PrefObject&) = delete;
  PrefObject& operator=(const PrefObject&) = delete;
  PrefObject(PrefObject&& rhs);
  PrefObject& operator=(PrefObject&& rhs);

  // Populates a PrefObject object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, PrefObject& out);

  // Populates a PrefObject object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, PrefObject& out);

  // Creates a deep copy of PrefObject.
  PrefObject Clone() const;

  // Creates a PrefObject object from a base::Value, or NULL on failure.
  static std::unique_ptr<PrefObject> FromValueDeprecated(const base::Value& value);

  // Creates a PrefObject object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<PrefObject> FromValue(const base::Value::Dict& value);

  // Creates a PrefObject object from a base::Value, or nullopt on failure.
  static absl::optional<PrefObject> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPrefObject object.
  base::Value::Dict ToValue() const;

  // The key for the pref.
  std::string key;

  // The type of the pref (e.g., boolean, string, etc.).
  PrefType type;

  // The current value of the pref.
  absl::optional<base::Value> value;

  // The policy source of the pref; an undefined value means there is no policy.
  ControlledBy controlled_by;

  // The owner name if controlledBy == OWNER. The primary user name if
  // controlledBy == PRIMARY_USER. The extension name if controlledBy ==
  // EXTENSION.
  absl::optional<std::string> controlled_by_name;

  // The policy enforcement of the pref; must be specified if controlledBy is also
  // present.
  Enforcement enforcement;

  // The recommended value if enforcement == RECOMMENDED.
  absl::optional<base::Value> recommended_value;

  // If enforcement == ENFORCED this optionally specifies preference values that
  // are still available for selection by the user. If set, must contain at least
  // 2 distinct values, as must contain |value| and |recommendedValue| (if
  // present).
  absl::optional<base::Value::List> user_selectable_values;

  // If true, user control of the preference is disabled for reasons unrelated to
  // controlledBy (e.g. no signed-in profile is present). A false value is a
  // no-op.
  absl::optional<bool> user_control_disabled;

  // The extension ID if controlledBy == EXTENSION.
  absl::optional<std::string> extension_id;

  // Whether the controlling extension can be disabled if controlledBy ==
  // EXTENSION.
  absl::optional<bool> extension_can_be_disabled;

};


//
// Functions
//

namespace SetPref {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The name of the pref.
  std::string name;

  // The new value of the pref.
  base::Value value;

  // An optional user metrics identifier.
  absl::optional<std::string> page_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool success);
}  // namespace Results

}  // namespace SetPref

namespace GetAllPrefs {

namespace Results {

base::Value::List Create(const std::vector<PrefObject>& prefs);
}  // namespace Results

}  // namespace GetAllPrefs

namespace GetPref {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string name;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const PrefObject& pref);
}  // namespace Results

}  // namespace GetPref

namespace GetDefaultZoom {

namespace Results {

base::Value::List Create(double zoom);
}  // namespace Results

}  // namespace GetDefaultZoom

namespace SetDefaultZoom {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  double zoom;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool success);
}  // namespace Results

}  // namespace SetDefaultZoom

//
// Events
//

namespace OnPrefsChanged {

extern const char kEventName[];  // "settingsPrivate.onPrefsChanged"

base::Value::List Create(const std::vector<PrefObject>& prefs);
}  // namespace OnPrefsChanged

}  // namespace settings_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_SETTINGS_PRIVATE_H__
