// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/power.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_POWER_H__
#define EXTENSIONS_COMMON_API_POWER_H__

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
namespace power {

//
// Types
//

enum class Level {
  kNone = 0,
  kSystem,
  kDisplay,
  kMaxValue = kDisplay,
};


const char* ToString(Level as_enum);
Level ParseLevel(base::StringPiece as_string);
std::u16string GetLevelParseError(base::StringPiece as_string);


//
// Functions
//

namespace RequestKeepAwake {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  Level level;


 private:
  Params();
};

}  // namespace RequestKeepAwake

namespace ReleaseKeepAwake {

}  // namespace ReleaseKeepAwake

namespace ReportActivity {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ReportActivity

}  // namespace power
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_POWER_H__
