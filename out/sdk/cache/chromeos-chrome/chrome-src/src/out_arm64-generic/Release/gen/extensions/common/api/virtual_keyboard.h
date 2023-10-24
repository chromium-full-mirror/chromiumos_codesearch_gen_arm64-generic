// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/virtual_keyboard.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_VIRTUAL_KEYBOARD_H__
#define EXTENSIONS_COMMON_API_VIRTUAL_KEYBOARD_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace virtual_keyboard {

//
// Types
//

struct FeatureRestrictions {
  FeatureRestrictions();
  ~FeatureRestrictions();
  FeatureRestrictions(const FeatureRestrictions&) = delete;
  FeatureRestrictions& operator=(const FeatureRestrictions&) = delete;
  FeatureRestrictions(FeatureRestrictions&& rhs);
  FeatureRestrictions& operator=(FeatureRestrictions&& rhs);

  // Populates a FeatureRestrictions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, FeatureRestrictions& out);

  // Populates a FeatureRestrictions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, FeatureRestrictions& out);

  // Creates a deep copy of FeatureRestrictions.
  FeatureRestrictions Clone() const;

  // Creates a FeatureRestrictions object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<FeatureRestrictions> FromValueDeprecated(const base::Value& value);

  // Creates a FeatureRestrictions object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<FeatureRestrictions> FromValue(const base::Value::Dict& value);

  // Creates a FeatureRestrictions object from a base::Value, or nullopt on
  // failure.
  static absl::optional<FeatureRestrictions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisFeatureRestrictions object.
  base::Value::Dict ToValue() const;

  // Whether virtual keyboards can provide auto-complete.
  absl::optional<bool> auto_complete_enabled;

  // Whether virtual keyboards can provide auto-correct.
  absl::optional<bool> auto_correct_enabled;

  // Whether virtual keyboards can provide input via handwriting recognition.
  absl::optional<bool> handwriting_enabled;

  // Whether virtual keyboards can provide spell-check.
  absl::optional<bool> spell_check_enabled;

  // Whether virtual keyboards can provide voice input.
  absl::optional<bool> voice_input_enabled;

};


//
// Functions
//

namespace RestrictFeatures {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // the preferences to enabled/disabled virtual keyboard features.
  FeatureRestrictions restrictions;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const FeatureRestrictions& update);
}  // namespace Results

}  // namespace RestrictFeatures

}  // namespace virtual_keyboard
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_VIRTUAL_KEYBOARD_H__
