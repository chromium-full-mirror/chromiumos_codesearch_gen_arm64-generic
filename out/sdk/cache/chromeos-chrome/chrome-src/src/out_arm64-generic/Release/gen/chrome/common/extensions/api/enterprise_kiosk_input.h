// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/enterprise_kiosk_input.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_KIOSK_INPUT_H__
#define CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_KIOSK_INPUT_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace enterprise_kiosk_input {

//
// Types
//

struct SetCurrentInputMethodOptions {
  SetCurrentInputMethodOptions();
  ~SetCurrentInputMethodOptions();
  SetCurrentInputMethodOptions(const SetCurrentInputMethodOptions&) = delete;
  SetCurrentInputMethodOptions& operator=(const SetCurrentInputMethodOptions&) = delete;
  SetCurrentInputMethodOptions(SetCurrentInputMethodOptions&& rhs) noexcept;
  SetCurrentInputMethodOptions& operator=(SetCurrentInputMethodOptions&& rhs) noexcept;

  // Populates a SetCurrentInputMethodOptions object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SetCurrentInputMethodOptions& out);

  // Populates a SetCurrentInputMethodOptions object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SetCurrentInputMethodOptions& out);

  // Creates a deep copy of SetCurrentInputMethodOptions.
  SetCurrentInputMethodOptions Clone() const;

  // Creates a SetCurrentInputMethodOptions object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<SetCurrentInputMethodOptions> FromValue(const base::Value::Dict& value);

  // Creates a SetCurrentInputMethodOptions object from a base::Value, or
  // nullopt on failure.
  static std::optional<SetCurrentInputMethodOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSetCurrentInputMethodOptions object.
  base::Value::Dict ToValue() const;

  // The input method ID to set as current input method. This input method has to
  // be enabled by enterprise policies. Supported IDs are located in
  // https://crsrc.org/c/chrome/browser/resources/chromeos/input_method.
  std::string input_method_id;

};


//
// Functions
//

namespace SetCurrentInputMethod {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Object containing the fields defined in
  // $(ref:SetCurrentInputMethodOptions).
  SetCurrentInputMethodOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetCurrentInputMethod

}  // namespace enterprise_kiosk_input
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_KIOSK_INPUT_H__
