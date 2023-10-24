// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/users_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/users_private.h"

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
namespace users_private {
//
// Types
//

User::User()
: is_owner(false),
is_child(false) {}

User::~User() = default;
User::User(User&& rhs) = default;
User& User::operator=(User&& rhs) = default;
User User::Clone() const {
  User out;
  out.email = email;
  out.display_email = display_email;
  out.name = name;
  out.is_owner = is_owner;
  out.is_child = is_child;
  return out;
}

// static
bool User::Populate(
    const base::Value::Dict& dict, User& out) {
  const base::Value* email_value = dict.Find("email");
  if (!email_value) {
    return false;
  }
  {
    auto* temp = (*email_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.email = *temp;
  }

  const base::Value* display_email_value = dict.Find("displayEmail");
  if (!display_email_value) {
    return false;
  }
  {
    auto* temp = (*display_email_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.display_email = *temp;
  }

  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.name = *temp;
  }

  const base::Value* is_owner_value = dict.Find("isOwner");
  if (!is_owner_value) {
    return false;
  }
  {
    auto temp = (*is_owner_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_owner = *temp;
  }

  const base::Value* is_child_value = dict.Find("isChild");
  if (!is_child_value) {
    return false;
  }
  {
    auto temp = (*is_child_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_child = *temp;
  }

  return true;
}

// static
bool User::Populate(
    const base::Value& value, User& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<User> User::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<User>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<User> User::FromValue(const base::Value::Dict& value) {
  User out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<User> User::FromValue(const base::Value& value) {
  User out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict User::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("email", this->email);

  to_value_result.Set("displayEmail", this->display_email);

  to_value_result.Set("name", this->name);

  to_value_result.Set("isOwner", this->is_owner);

  to_value_result.Set("isChild", this->is_child);


  return to_value_result;
}


LoginStatusDict::LoginStatusDict()
: is_logged_in(false),
is_screen_locked(false) {}

LoginStatusDict::~LoginStatusDict() = default;
LoginStatusDict::LoginStatusDict(LoginStatusDict&& rhs) = default;
LoginStatusDict& LoginStatusDict::operator=(LoginStatusDict&& rhs) = default;
LoginStatusDict LoginStatusDict::Clone() const {
  LoginStatusDict out;
  out.is_logged_in = is_logged_in;
  out.is_screen_locked = is_screen_locked;
  return out;
}

// static
bool LoginStatusDict::Populate(
    const base::Value::Dict& dict, LoginStatusDict& out) {
  const base::Value* is_logged_in_value = dict.Find("isLoggedIn");
  if (!is_logged_in_value) {
    return false;
  }
  {
    auto temp = (*is_logged_in_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_logged_in = *temp;
  }

  const base::Value* is_screen_locked_value = dict.Find("isScreenLocked");
  if (!is_screen_locked_value) {
    return false;
  }
  {
    auto temp = (*is_screen_locked_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_screen_locked = *temp;
  }

  return true;
}

// static
bool LoginStatusDict::Populate(
    const base::Value& value, LoginStatusDict& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<LoginStatusDict> LoginStatusDict::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<LoginStatusDict>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<LoginStatusDict> LoginStatusDict::FromValue(const base::Value::Dict& value) {
  LoginStatusDict out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<LoginStatusDict> LoginStatusDict::FromValue(const base::Value& value) {
  LoginStatusDict out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict LoginStatusDict::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("isLoggedIn", this->is_logged_in);

  to_value_result.Set("isScreenLocked", this->is_screen_locked);


  return to_value_result;
}



//
// Functions
//

namespace GetUsers {

base::Value::List Results::Create(const std::vector<User>& users) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(users));

  return create_results;
}
}  // namespace GetUsers

namespace IsUserInList {

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
    const base::Value& email_value = args[0];
    {
      auto* temp = email_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.email = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool found) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(found);

  return create_results;
}
}  // namespace IsUserInList

namespace AddUser {

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
    const base::Value& email_value = args[0];
    {
      auto* temp = email_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.email = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace AddUser

namespace RemoveUser {

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
    const base::Value& email_value = args[0];
    {
      auto* temp = email_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.email = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace RemoveUser

namespace IsUserListManaged {

base::Value::List Results::Create(bool managed) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(managed);

  return create_results;
}
}  // namespace IsUserListManaged

namespace GetCurrentUser {

base::Value::List Results::Create(const User& user) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((user).ToValue());

  return create_results;
}
}  // namespace GetCurrentUser

namespace GetLoginStatus {

base::Value::List Results::Create(const LoginStatusDict& status) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((status).ToValue());

  return create_results;
}
}  // namespace GetLoginStatus

}  // namespace users_private
}  // namespace api
}  // namespace extensions

