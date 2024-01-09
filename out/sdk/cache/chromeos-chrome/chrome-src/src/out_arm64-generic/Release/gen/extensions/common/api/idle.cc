// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/idle.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/idle.h"

#include <memory>
#include <optional>
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
namespace idle {
//
// Types
//

const char* ToString(IdleState enum_param) {
  switch (enum_param) {
    case IdleState::kActive:
      return "active";
    case IdleState::kIdle:
      return "idle";
    case IdleState::kLocked:
      return "locked";
    case IdleState::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

IdleState ParseIdleState(base::StringPiece enum_string) {
  if (enum_string == "active")
    return IdleState::kActive;
  if (enum_string == "idle")
    return IdleState::kIdle;
  if (enum_string == "locked")
    return IdleState::kLocked;
  return IdleState::kNone;
}

std::u16string GetIdleStateParseError(base::StringPiece enum_string) {
  return u"expected \"active\" or \"idle\" or \"locked\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



//
// Functions
//

namespace QueryState {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& detection_interval_in_seconds_value = args[0];
    {
      auto temp = detection_interval_in_seconds_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.detection_interval_in_seconds = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const IdleState& new_state) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(idle::ToString(new_state));

  return create_results;
}
}  // namespace QueryState

namespace SetDetectionInterval {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& interval_in_seconds_value = args[0];
    {
      auto temp = interval_in_seconds_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.interval_in_seconds = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetDetectionInterval

namespace GetAutoLockDelay {

base::Value::List Results::Create(int delay) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(delay);

  return create_results;
}
}  // namespace GetAutoLockDelay

//
// Events
//

namespace OnStateChanged {

const char kEventName[] = "idle.onStateChanged";

base::Value::List Create(const IdleState& new_state) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(idle::ToString(new_state));

  return create_results;
}

}  // namespace OnStateChanged

}  // namespace idle
}  // namespace api
}  // namespace extensions

