// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/login.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/login.h"

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

using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace login {
//
// Types
//

SamlUserSessionProperties::SamlUserSessionProperties()
 {}

SamlUserSessionProperties::~SamlUserSessionProperties() = default;
SamlUserSessionProperties::SamlUserSessionProperties(SamlUserSessionProperties&& rhs) noexcept = default;
SamlUserSessionProperties& SamlUserSessionProperties::operator=(SamlUserSessionProperties&& rhs) noexcept = default;
SamlUserSessionProperties SamlUserSessionProperties::Clone() const {
  SamlUserSessionProperties out;
  out.email = email;
  out.gaia_id = gaia_id;
  out.password = password;
  out.oauth_code = oauth_code;
  return out;
}

// static
bool SamlUserSessionProperties::Populate(
    const base::Value::Dict& dict, SamlUserSessionProperties& out) {
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

  const base::Value* gaia_id_value = dict.Find("gaiaId");
  if (!gaia_id_value) {
    return false;
  }
  {
    auto* temp = (*gaia_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.gaia_id = *temp;
  }

  const base::Value* password_value = dict.Find("password");
  if (!password_value) {
    return false;
  }
  {
    auto* temp = (*password_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.password = *temp;
  }

  const base::Value* oauth_code_value = dict.Find("oauthCode");
  if (!oauth_code_value) {
    return false;
  }
  {
    auto* temp = (*oauth_code_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.oauth_code = *temp;
  }

  return true;
}

// static
bool SamlUserSessionProperties::Populate(
    const base::Value& value, SamlUserSessionProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SamlUserSessionProperties> SamlUserSessionProperties::FromValue(const base::Value::Dict& value) {
  SamlUserSessionProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SamlUserSessionProperties> SamlUserSessionProperties::FromValue(const base::Value& value) {
  SamlUserSessionProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SamlUserSessionProperties::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("email", this->email);

  to_value_result.Set("gaiaId", this->gaia_id);

  to_value_result.Set("password", this->password);

  to_value_result.Set("oauthCode", this->oauth_code);


  return to_value_result;
}



//
// Functions
//

namespace LaunchManagedGuestSession {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& password_value = args[0];
    {
      auto* temp = password_value.GetIfString();
      if (!temp) {
        params.password = std::nullopt;
        return std::nullopt;
      }
      params.password = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace LaunchManagedGuestSession

namespace ExitCurrentSession {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& data_for_next_login_attempt_value = args[0];
    {
      auto* temp = data_for_next_login_attempt_value.GetIfString();
      if (!temp) {
        params.data_for_next_login_attempt = std::nullopt;
        return std::nullopt;
      }
      params.data_for_next_login_attempt = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace ExitCurrentSession

namespace FetchDataForNextLoginAttempt {

base::Value::List Results::Create(const std::string& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace FetchDataForNextLoginAttempt

namespace LockManagedGuestSession {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace LockManagedGuestSession

namespace LockCurrentSession {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace LockCurrentSession

namespace UnlockManagedGuestSession {

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
    const base::Value& password_value = args[0];
    {
      auto* temp = password_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.password = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace UnlockManagedGuestSession

namespace UnlockCurrentSession {

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
    const base::Value& password_value = args[0];
    {
      auto* temp = password_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.password = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace UnlockCurrentSession

namespace LaunchSamlUserSession {

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
    const base::Value& properties_value = args[0];
    {
      if (!properties_value.is_dict()) {
        return std::nullopt;
      }
      if (!SamlUserSessionProperties::Populate(properties_value.GetDict(), params.properties)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace LaunchSamlUserSession

namespace LaunchSharedManagedGuestSession {

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
    const base::Value& password_value = args[0];
    {
      auto* temp = password_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.password = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace LaunchSharedManagedGuestSession

namespace EnterSharedSession {

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
    const base::Value& password_value = args[0];
    {
      auto* temp = password_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.password = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace EnterSharedSession

namespace UnlockSharedSession {

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
    const base::Value& password_value = args[0];
    {
      auto* temp = password_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.password = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace UnlockSharedSession

namespace EndSharedSession {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace EndSharedSession

namespace SetDataForNextLoginAttempt {

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
    const base::Value& data_for_next_login_attempt_value = args[0];
    {
      auto* temp = data_for_next_login_attempt_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.data_for_next_login_attempt = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetDataForNextLoginAttempt

namespace RequestExternalLogout {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace RequestExternalLogout

namespace NotifyExternalLogoutDone {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace NotifyExternalLogoutDone

//
// Events
//

namespace OnRequestExternalLogout {

const char kEventName[] = "login.onRequestExternalLogout";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnRequestExternalLogout

namespace OnExternalLogoutDone {

const char kEventName[] = "login.onExternalLogoutDone";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnExternalLogoutDone

}  // namespace login
}  // namespace api
}  // namespace extensions

