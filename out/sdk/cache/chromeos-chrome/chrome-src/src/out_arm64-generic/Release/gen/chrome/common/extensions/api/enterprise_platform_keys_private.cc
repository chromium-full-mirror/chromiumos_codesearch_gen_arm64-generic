// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/enterprise_platform_keys_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/enterprise_platform_keys_private.h"

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
namespace enterprise_platform_keys_private {
//
// Functions
//

namespace ChallengeMachineKey {

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
    const base::Value& challenge_value = args[0];
    {
      auto* temp = challenge_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.challenge = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(response);

  return create_results;
}
}  // namespace ChallengeMachineKey

namespace ChallengeUserKey {

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
    const base::Value& challenge_value = args[0];
    {
      auto* temp = challenge_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.challenge = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& register_key_value = args[1];
    {
      auto temp = register_key_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.register_key = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(response);

  return create_results;
}
}  // namespace ChallengeUserKey

}  // namespace enterprise_platform_keys_private
}  // namespace api
}  // namespace extensions

