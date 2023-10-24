// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/login_state.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/login_state.h"

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
namespace login_state {
//
// Types
//

const char* ToString(ProfileType enum_param) {
  switch (enum_param) {
    case PROFILE_TYPE_SIGNIN_PROFILE:
      return "SIGNIN_PROFILE";
    case PROFILE_TYPE_USER_PROFILE:
      return "USER_PROFILE";
    case PROFILE_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

ProfileType ParseProfileType(base::StringPiece enum_string) {
  if (enum_string == "SIGNIN_PROFILE")
    return PROFILE_TYPE_SIGNIN_PROFILE;
  if (enum_string == "USER_PROFILE")
    return PROFILE_TYPE_USER_PROFILE;
  return PROFILE_TYPE_NONE;
}

std::u16string GetProfileTypeParseError(base::StringPiece enum_string) {
  return u"expected \"SIGNIN_PROFILE\" or \"USER_PROFILE\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SessionState enum_param) {
  switch (enum_param) {
    case SESSION_STATE_UNKNOWN:
      return "UNKNOWN";
    case SESSION_STATE_IN_OOBE_SCREEN:
      return "IN_OOBE_SCREEN";
    case SESSION_STATE_IN_LOGIN_SCREEN:
      return "IN_LOGIN_SCREEN";
    case SESSION_STATE_IN_SESSION:
      return "IN_SESSION";
    case SESSION_STATE_IN_LOCK_SCREEN:
      return "IN_LOCK_SCREEN";
    case SESSION_STATE_IN_RMA_SCREEN:
      return "IN_RMA_SCREEN";
    case SESSION_STATE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

SessionState ParseSessionState(base::StringPiece enum_string) {
  if (enum_string == "UNKNOWN")
    return SESSION_STATE_UNKNOWN;
  if (enum_string == "IN_OOBE_SCREEN")
    return SESSION_STATE_IN_OOBE_SCREEN;
  if (enum_string == "IN_LOGIN_SCREEN")
    return SESSION_STATE_IN_LOGIN_SCREEN;
  if (enum_string == "IN_SESSION")
    return SESSION_STATE_IN_SESSION;
  if (enum_string == "IN_LOCK_SCREEN")
    return SESSION_STATE_IN_LOCK_SCREEN;
  if (enum_string == "IN_RMA_SCREEN")
    return SESSION_STATE_IN_RMA_SCREEN;
  return SESSION_STATE_NONE;
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

