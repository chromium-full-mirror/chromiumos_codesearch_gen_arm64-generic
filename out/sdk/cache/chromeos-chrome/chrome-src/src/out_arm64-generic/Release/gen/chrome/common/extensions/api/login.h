// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/login.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_LOGIN_H__
#define CHROME_COMMON_EXTENSIONS_API_LOGIN_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace login {

//
// Types
//

struct SamlUserSessionProperties {
  SamlUserSessionProperties();
  ~SamlUserSessionProperties();
  SamlUserSessionProperties(const SamlUserSessionProperties&) = delete;
  SamlUserSessionProperties& operator=(const SamlUserSessionProperties&) = delete;
  SamlUserSessionProperties(SamlUserSessionProperties&& rhs);
  SamlUserSessionProperties& operator=(SamlUserSessionProperties&& rhs);

  // Populates a SamlUserSessionProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SamlUserSessionProperties& out);

  // Populates a SamlUserSessionProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SamlUserSessionProperties& out);

  // Creates a deep copy of SamlUserSessionProperties.
  SamlUserSessionProperties Clone() const;

  // Creates a SamlUserSessionProperties object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<SamlUserSessionProperties> FromValueDeprecated(const base::Value& value);

  // Creates a SamlUserSessionProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<SamlUserSessionProperties> FromValue(const base::Value::Dict& value);

  // Creates a SamlUserSessionProperties object from a base::Value, or nullopt
  // on failure.
  static absl::optional<SamlUserSessionProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSamlUserSessionProperties object.
  base::Value::Dict ToValue() const;

  // User's email address.
  std::string email;

  // User's Gaia ID.
  std::string gaia_id;

  // User's password.
  std::string password;

  // Oauth_code cookie set in the SAML handshake.
  std::string oauth_code;

};


//
// Functions
//

namespace LaunchManagedGuestSession {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // If provided, the launched managed guest session will be lockable, and can
  // only be unlocked by calling $(ref:unlockManagedGuestSession) with the same
  // password.
  absl::optional<std::string> password;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace LaunchManagedGuestSession

namespace ExitCurrentSession {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // If set, stores data which can be read by $(ref:fetchDataForNextLoginAttempt)
  // from the login screen. If unset, any currently stored data will be cleared.
  absl::optional<std::string> data_for_next_login_attempt;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ExitCurrentSession

namespace FetchDataForNextLoginAttempt {

namespace Results {

base::Value::List Create(const std::string& result);
}  // namespace Results

}  // namespace FetchDataForNextLoginAttempt

namespace LockManagedGuestSession {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace LockManagedGuestSession

namespace LockCurrentSession {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace LockCurrentSession

namespace UnlockManagedGuestSession {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string password;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace UnlockManagedGuestSession

namespace UnlockCurrentSession {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The password which will be used to unlock the session.
  std::string password;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace UnlockCurrentSession

namespace LaunchSamlUserSession {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // User's email address, gaia ID, password and oauth_code.
  SamlUserSessionProperties properties;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace LaunchSamlUserSession

namespace LaunchSharedManagedGuestSession {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The password which can be used to unlock the shared session.
  std::string password;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace LaunchSharedManagedGuestSession

namespace EnterSharedSession {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The password which can be used to unlock the shared session.
  std::string password;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace EnterSharedSession

namespace UnlockSharedSession {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The password used to unlock the shared session.
  std::string password;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace UnlockSharedSession

namespace EndSharedSession {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace EndSharedSession

namespace SetDataForNextLoginAttempt {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The data to be set.
  std::string data_for_next_login_attempt;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetDataForNextLoginAttempt

namespace RequestExternalLogout {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RequestExternalLogout

namespace NotifyExternalLogoutDone {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace NotifyExternalLogoutDone

//
// Events
//

namespace OnRequestExternalLogout {

extern const char kEventName[];  // "login.onRequestExternalLogout"

base::Value::List Create();
}  // namespace OnRequestExternalLogout

namespace OnExternalLogoutDone {

extern const char kEventName[];  // "login.onExternalLogoutDone"

base::Value::List Create();
}  // namespace OnExternalLogoutDone

}  // namespace login
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_LOGIN_H__
