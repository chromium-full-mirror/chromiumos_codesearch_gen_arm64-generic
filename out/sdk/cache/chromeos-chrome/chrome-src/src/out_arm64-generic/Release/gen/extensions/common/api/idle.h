// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/idle.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_IDLE_H__
#define EXTENSIONS_COMMON_API_IDLE_H__

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
namespace idle {

//
// Types
//

enum class IdleState {
  kNone = 0,
  kActive,
  kIdle,
  kLocked,
  kMaxValue = kLocked,
};


const char* ToString(IdleState as_enum);
IdleState ParseIdleState(base::StringPiece as_string);
std::u16string GetIdleStateParseError(base::StringPiece as_string);


//
// Functions
//

namespace QueryState {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The system is considered idle if detectionIntervalInSeconds seconds have
  // elapsed since the last user input detected.
  int detection_interval_in_seconds;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const IdleState& new_state);
}  // namespace Results

}  // namespace QueryState

namespace SetDetectionInterval {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Threshold, in seconds, used to determine when the system is in an idle state.
  int interval_in_seconds;


 private:
  Params();
};

}  // namespace SetDetectionInterval

namespace GetAutoLockDelay {

namespace Results {

// Time, in seconds, until the screen is locked automatically while idle. This
// is zero if the screen never locks automatically.
base::Value::List Create(int delay);
}  // namespace Results

}  // namespace GetAutoLockDelay

//
// Events
//

namespace OnStateChanged {

extern const char kEventName[];  // "idle.onStateChanged"

base::Value::List Create(const IdleState& new_state);
}  // namespace OnStateChanged

}  // namespace idle
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_IDLE_H__
