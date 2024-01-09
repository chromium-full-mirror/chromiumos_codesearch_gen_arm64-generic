// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/login_state.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_LOGIN_STATE_H__
#define CHROME_COMMON_EXTENSIONS_API_LOGIN_STATE_H__

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
namespace login_state {

//
// Types
//

enum class ProfileType {
  kNone = 0,
  kSigninProfile,
  kUserProfile,
  kMaxValue = kUserProfile,
};


const char* ToString(ProfileType as_enum);
ProfileType ParseProfileType(base::StringPiece as_string);
std::u16string GetProfileTypeParseError(base::StringPiece as_string);

enum class SessionState {
  kNone = 0,
  kUnknown,
  kInOobeScreen,
  kInLoginScreen,
  kInSession,
  kInLockScreen,
  kInRmaScreen,
  kMaxValue = kInRmaScreen,
};


const char* ToString(SessionState as_enum);
SessionState ParseSessionState(base::StringPiece as_string);
std::u16string GetSessionStateParseError(base::StringPiece as_string);


//
// Functions
//

namespace GetProfileType {

namespace Results {

base::Value::List Create(const ProfileType& result);
}  // namespace Results

}  // namespace GetProfileType

namespace GetSessionState {

namespace Results {

base::Value::List Create(const SessionState& result);
}  // namespace Results

}  // namespace GetSessionState

//
// Events
//

namespace OnSessionStateChanged {

extern const char kEventName[];  // "loginState.onSessionStateChanged"

base::Value::List Create(const SessionState& session_state);
}  // namespace OnSessionStateChanged

}  // namespace login_state
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_LOGIN_STATE_H__
