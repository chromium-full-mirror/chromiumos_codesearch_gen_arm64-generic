// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/users_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_USERS_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_USERS_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace users_private {

//
// Types
//

struct User {
  User();
  ~User();
  User(const User&) = delete;
  User& operator=(const User&) = delete;
  User(User&& rhs) noexcept;
  User& operator=(User&& rhs) noexcept;

  // Populates a User object from a base::Value& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value& value, User& out);

  // Populates a User object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, User& out);

  // Creates a deep copy of User.
  User Clone() const;

  // Creates a User object from a base::Value::Dict, or nullopt on failure.
  static std::optional<User> FromValue(const base::Value::Dict& value);

  // Creates a User object from a base::Value, or nullopt on failure.
  static std::optional<User> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisUser object.
  base::Value::Dict ToValue() const;

  // Email for the user.
  std::string email;

  // Display email for the user.
  std::string display_email;

  // Display name for the user.
  std::string name;

  // Whether this user is the device owner.
  bool is_owner;

  // Whether this user is Child.
  bool is_child;

};

struct LoginStatusDict {
  LoginStatusDict();
  ~LoginStatusDict();
  LoginStatusDict(const LoginStatusDict&) = delete;
  LoginStatusDict& operator=(const LoginStatusDict&) = delete;
  LoginStatusDict(LoginStatusDict&& rhs) noexcept;
  LoginStatusDict& operator=(LoginStatusDict&& rhs) noexcept;

  // Populates a LoginStatusDict object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, LoginStatusDict& out);

  // Populates a LoginStatusDict object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, LoginStatusDict& out);

  // Creates a deep copy of LoginStatusDict.
  LoginStatusDict Clone() const;

  // Creates a LoginStatusDict object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<LoginStatusDict> FromValue(const base::Value::Dict& value);

  // Creates a LoginStatusDict object from a base::Value, or nullopt on failure.
  static std::optional<LoginStatusDict> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisLoginStatusDict object.
  base::Value::Dict ToValue() const;

  // True if a user is logged in (including guest, public session, etc).
  bool is_logged_in;

  // True if the screen is locked.
  bool is_screen_locked;

};


//
// Functions
//

namespace GetUsers {

namespace Results {

base::Value::List Create(const std::vector<User>& users);
}  // namespace Results

}  // namespace GetUsers

namespace IsUserInList {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string email;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool found);
}  // namespace Results

}  // namespace IsUserInList

namespace AddUser {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string email;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool success);
}  // namespace Results

}  // namespace AddUser

namespace RemoveUser {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string email;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool success);
}  // namespace Results

}  // namespace RemoveUser

namespace IsUserListManaged {

namespace Results {

base::Value::List Create(bool managed);
}  // namespace Results

}  // namespace IsUserListManaged

namespace GetCurrentUser {

namespace Results {

base::Value::List Create(const User& user);
}  // namespace Results

}  // namespace GetCurrentUser

namespace GetLoginStatus {

namespace Results {

base::Value::List Create(const LoginStatusDict& status);
}  // namespace Results

}  // namespace GetLoginStatus

}  // namespace users_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_USERS_PRIVATE_H__
