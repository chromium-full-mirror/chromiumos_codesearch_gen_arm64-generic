// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/downloads_internal.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/downloads_internal.h"

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

using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace downloads_internal {
//
// Functions
//

namespace DetermineFilename {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 3) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& download_id_value = args[0];
    {
      auto temp = download_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.download_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& filename_value = args[1];
    {
      auto* temp = filename_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.filename = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& conflict_action_value = args[2];
    {
      auto* temp = conflict_action_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.conflict_action = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace DetermineFilename

}  // namespace downloads_internal
}  // namespace api
}  // namespace extensions

