// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/power.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/power.h"

#include <memory>
#include <ostream>
#include <string>
#include <utility>
#include <vector>

#include "base/check.h"
#include "base/check_op.h"
#include "base/notreached.h"
#include "base/strings/string_number_conversions.h"
#include "base/strings/utf_string_conversions.h"
#include "base/values.h"
#include "tools/json_schema_compiler/util.h"
#include "base/strings/string_piece.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace power {
//
// Types
//

const char* ToString(Level enum_param) {
  switch (enum_param) {
    case LEVEL_SYSTEM:
      return "system";
    case LEVEL_DISPLAY:
      return "display";
    case LEVEL_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

Level ParseLevel(base::StringPiece enum_string) {
  if (enum_string == "system")
    return LEVEL_SYSTEM;
  if (enum_string == "display")
    return LEVEL_DISPLAY;
  return LEVEL_NONE;
}

std::u16string GetLevelParseError(base::StringPiece enum_string) {
  return u"expected \"system\" or \"display\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



//
// Functions
//

namespace RequestKeepAwake {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& level_value = args[0];
    {
      const std::string* level_as_string = level_value.GetIfString();
      if (!level_as_string) {
        return absl::nullopt;
      }
      params.level = ParseLevel(*level_as_string);
      if (params.level == Level()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace RequestKeepAwake

namespace ReleaseKeepAwake {

}  // namespace ReleaseKeepAwake

namespace ReportActivity {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace ReportActivity

}  // namespace power
}  // namespace api
}  // namespace extensions

