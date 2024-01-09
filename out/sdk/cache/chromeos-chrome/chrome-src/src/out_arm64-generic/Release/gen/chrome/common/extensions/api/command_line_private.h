// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/command_line_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_COMMAND_LINE_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_COMMAND_LINE_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace command_line_private {

//
// Functions
//

namespace HasSwitch {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The name of a command line switch, without leading "--", such as
  // "enable-experimental-extension-apis".
  std::string name;


 private:
  Params();
};

namespace Results {

// Whether the switch is specified on the command line.
base::Value::List Create(bool result);
}  // namespace Results

}  // namespace HasSwitch

}  // namespace command_line_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_COMMAND_LINE_PRIVATE_H__
