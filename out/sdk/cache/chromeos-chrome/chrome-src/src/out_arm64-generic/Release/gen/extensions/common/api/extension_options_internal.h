// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/extension_options_internal.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_EXTENSION_OPTIONS_INTERNAL_H__
#define EXTENSIONS_COMMON_API_EXTENSION_OPTIONS_INTERNAL_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace extension_options_internal {

//
// Types
//

struct SizeChangedOptions {
  SizeChangedOptions();
  ~SizeChangedOptions();
  SizeChangedOptions(const SizeChangedOptions&) = delete;
  SizeChangedOptions& operator=(const SizeChangedOptions&) = delete;
  SizeChangedOptions(SizeChangedOptions&& rhs) noexcept;
  SizeChangedOptions& operator=(SizeChangedOptions&& rhs) noexcept;

  // Populates a SizeChangedOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SizeChangedOptions& out);

  // Populates a SizeChangedOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SizeChangedOptions& out);

  // Creates a deep copy of SizeChangedOptions.
  SizeChangedOptions Clone() const;

  // Creates a SizeChangedOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<SizeChangedOptions> FromValue(const base::Value::Dict& value);

  // Creates a SizeChangedOptions object from a base::Value, or nullopt on
  // failure.
  static std::optional<SizeChangedOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSizeChangedOptions object.
  base::Value::Dict ToValue() const;

  int old_width;

  int old_height;

  int new_width;

  int new_height;

};

struct PreferredSizeChangedOptions {
  PreferredSizeChangedOptions();
  ~PreferredSizeChangedOptions();
  PreferredSizeChangedOptions(const PreferredSizeChangedOptions&) = delete;
  PreferredSizeChangedOptions& operator=(const PreferredSizeChangedOptions&) = delete;
  PreferredSizeChangedOptions(PreferredSizeChangedOptions&& rhs) noexcept;
  PreferredSizeChangedOptions& operator=(PreferredSizeChangedOptions&& rhs) noexcept;

  // Populates a PreferredSizeChangedOptions object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PreferredSizeChangedOptions& out);

  // Populates a PreferredSizeChangedOptions object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PreferredSizeChangedOptions& out);

  // Creates a deep copy of PreferredSizeChangedOptions.
  PreferredSizeChangedOptions Clone() const;

  // Creates a PreferredSizeChangedOptions object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<PreferredSizeChangedOptions> FromValue(const base::Value::Dict& value);

  // Creates a PreferredSizeChangedOptions object from a base::Value, or nullopt
  // on failure.
  static std::optional<PreferredSizeChangedOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPreferredSizeChangedOptions object.
  base::Value::Dict ToValue() const;

  double width;

  double height;

};


//
// Events
//

namespace OnClose {

extern const char kEventName[];  // "extensionOptionsInternal.onClose"

base::Value::List Create();
}  // namespace OnClose

namespace OnLoad {

extern const char kEventName[];  // "extensionOptionsInternal.onLoad"

base::Value::List Create();
}  // namespace OnLoad

namespace OnPreferredSizeChanged {

extern const char kEventName[];  // "extensionOptionsInternal.onPreferredSizeChanged"

base::Value::List Create(const PreferredSizeChangedOptions& options);
}  // namespace OnPreferredSizeChanged

}  // namespace extension_options_internal
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_EXTENSION_OPTIONS_INTERNAL_H__
