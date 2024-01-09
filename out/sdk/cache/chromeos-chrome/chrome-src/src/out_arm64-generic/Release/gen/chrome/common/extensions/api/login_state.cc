// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/login_state.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/login_state.h"

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
namespace login_state {
//
// Types
//

const char* ToString(ProfileType enum_param) {
  switch (enum_param) {
    case ProfileType::kSigninProfile:
      return "SIGNIN_PROFILE";
    case ProfileType::kUserProfile:
      return "USER_PROFILE";
    case ProfileType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ProfileType ParseProfileType(base::StringPiece enum_string) {
  if (enum_string == "SIGNIN_PROFILE")
    return ProfileType::kSigninProfile;
  if (enum_string == "USER_PROFILE")
    return ProfileType::kUserProfile;
  return ProfileType::kNone;
}

std::u16string GetProfileTypeParseError(base::StringPiece enum_string) {
  return u"expected \"SIGNIN_PROFILE\" or \"USER_PROFILE\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SessionState enum_param) {
  switch (enum_param) {
    case SessionState::kUnknown:
      return "UNKNOWN";
    case SessionState::kInOobeScreen:
      return "IN_OOBE_SCREEN";
    case SessionState::kInLoginScreen:
      return "IN_LOGIN_SCREEN";
    case SessionState::kInSession:
      return "IN_SESSION";
    case SessionState::kInLockScreen:
      return "IN_LOCK_SCREEN";
    case SessionState::kInRmaScreen:
      return "IN_RMA_SCREEN";
    case SessionState::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

SessionState ParseSessionState(base::StringPiece enum_string) {
  if (enum_string == "UNKNOWN")
    return SessionState::kUnknown;
  if (enum_string == "IN_OOBE_SCREEN")
    return SessionState::kInOobeScreen;
  if (enum_string == "IN_LOGIN_SCREEN")
    return SessionState::kInLoginScreen;
  if (enum_string == "IN_SESSION")
    return SessionState::kInSession;
  if (enum_string == "IN_LOCK_SCREEN")
    return SessionState::kInLockScreen;
  if (enum_string == "IN_RMA_SCREEN")
    return SessionState::kInRmaScreen;
  return SessionState::kNone;
}

std::u16string GetSessionStateParseError(base::StringPiece enum_string) {
  return u"expected \"UNKNOWN\" or \"IN_OOBE_SCREEN\" or \"IN_LOGIN_SCREEN\" or \"IN_SESSION\" or \"IN_LOCK_SCREEN\" or \"IN_RMA_SCREEN\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



//
// Functions
//

namespace GetProfileType {

base::Value::List Results::Create(const ProfileType& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(login_state::ToString(result));

  return create_results;
}
}  // namespace GetProfileType

namespace GetSessionState {

base::Value::List Results::Create(const SessionState& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(login_state::ToString(result));

  return create_results;
}
}  // namespace GetSessionState

//
// Events
//

namespace OnSessionStateChanged {

const char kEventName[] = "loginState.onSessionStateChanged";

base::Value::List Create(const SessionState& session_state) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(login_state::ToString(session_state));

  return create_results;
}

}  // namespace OnSessionStateChanged

}  // namespace login_state
}  // namespace api
}  // namespace extensions

