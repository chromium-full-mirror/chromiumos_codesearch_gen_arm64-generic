// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/login_screen_ui.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_LOGIN_SCREEN_UI_H__
#define CHROME_COMMON_EXTENSIONS_API_LOGIN_SCREEN_UI_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace login_screen_ui {

//
// Types
//

struct ShowOptions {
  ShowOptions();
  ~ShowOptions();
  ShowOptions(const ShowOptions&) = delete;
  ShowOptions& operator=(const ShowOptions&) = delete;
  ShowOptions(ShowOptions&& rhs) noexcept;
  ShowOptions& operator=(ShowOptions&& rhs) noexcept;

  // Populates a ShowOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ShowOptions& out);

  // Populates a ShowOptions object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ShowOptions& out);

  // Creates a deep copy of ShowOptions.
  ShowOptions Clone() const;

  // Creates a ShowOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ShowOptions> FromValue(const base::Value::Dict& value);

  // Creates a ShowOptions object from a base::Value, or nullopt on failure.
  static std::optional<ShowOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisShowOptions object.
  base::Value::Dict ToValue() const;

  // Relative url of the contents to show.
  std::string url;

  // Whether the user can close the window, defaults to false.
  std::optional<bool> user_can_close;

};


//
// Functions
//

namespace Show {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Options for the custom login UI window.
  ShowOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Show

namespace Close {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Close

}  // namespace login_screen_ui
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_LOGIN_SCREEN_UI_H__
