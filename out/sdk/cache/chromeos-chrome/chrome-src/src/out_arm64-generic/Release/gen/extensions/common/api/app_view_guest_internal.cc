// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/app_view_guest_internal.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/app_view_guest_internal.h"

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
namespace app_view_guest_internal {
//
// Functions
//

namespace AttachFrame {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& url_value = args[0];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& guest_instance_id_value = args[1];
    {
      auto temp = guest_instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.guest_instance_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(int instance_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(instance_id);

  return create_results;
}
}  // namespace AttachFrame

namespace DenyRequest {

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
    const base::Value& guest_instance_id_value = args[0];
    {
      auto temp = guest_instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.guest_instance_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace DenyRequest

}  // namespace app_view_guest_internal
}  // namespace api
}  // namespace extensions

