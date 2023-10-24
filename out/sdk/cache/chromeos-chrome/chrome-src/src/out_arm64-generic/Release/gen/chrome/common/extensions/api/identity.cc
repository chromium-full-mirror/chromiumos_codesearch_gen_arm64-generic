// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/identity.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/identity.h"

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
namespace identity {
//
// Types
//

AccountInfo::AccountInfo()
 {}

AccountInfo::~AccountInfo() = default;
AccountInfo::AccountInfo(AccountInfo&& rhs) = default;
AccountInfo& AccountInfo::operator=(AccountInfo&& rhs) = default;
AccountInfo AccountInfo::Clone() const {
  AccountInfo out;
  out.id = id;
  return out;
}

// static
bool AccountInfo::Populate(
    const base::Value::Dict& dict, AccountInfo& out) {
  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto* temp = (*id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.id = *temp;
  }

  return true;
}

// static
bool AccountInfo::Populate(
    const base::Value& value, AccountInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<AccountInfo> AccountInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<AccountInfo>();
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
absl::optional<AccountInfo> AccountInfo::FromValue(const base::Value::Dict& value) {
  AccountInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<AccountInfo> AccountInfo::FromValue(const base::Value& value) {
  AccountInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict AccountInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);


  return to_value_result;
}


const char* ToString(AccountStatus enum_param) {
  switch (enum_param) {
    case ACCOUNT_STATUS_SYNC:
      return "SYNC";
    case ACCOUNT_STATUS_ANY:
      return "ANY";
    case ACCOUNT_STATUS_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

AccountStatus ParseAccountStatus(base::StringPiece enum_string) {
  if (enum_string == "SYNC")
    return ACCOUNT_STATUS_SYNC;
  if (enum_string == "ANY")
    return ACCOUNT_STATUS_ANY;
  return ACCOUNT_STATUS_NONE;
}

std::u16string GetAccountStatusParseError(base::StringPiece enum_string) {
  return u"expected \"SYNC\" or \"ANY\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ProfileDetails::ProfileDetails()
: account_status() {}

ProfileDetails::~ProfileDetails() = default;
ProfileDetails::ProfileDetails(ProfileDetails&& rhs) = default;
ProfileDetails& ProfileDetails::operator=(ProfileDetails&& rhs) = default;
ProfileDetails ProfileDetails::Clone() const {
  ProfileDetails out;
  out.account_status = account_status;
  return out;
}

// static
bool ProfileDetails::Populate(
    const base::Value::Dict& dict, ProfileDetails& out) {
  out.account_status = AccountStatus();
  const base::Value* account_status_value = dict.Find("accountStatus");
  if (account_status_value) {
    {
      const std::string* account_status_as_string = (*account_status_value).GetIfString();
      if (!account_status_as_string) {
        return false;
      }
      out.account_status = ParseAccountStatus(*account_status_as_string);
      if (out.account_status == AccountStatus()) {
        return false;
      }
    }
    } else {
    out.account_status = AccountStatus();
  }

  return true;
}

// static
bool ProfileDetails::Populate(
    const base::Value& value, ProfileDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ProfileDetails> ProfileDetails::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ProfileDetails>();
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
absl::optional<ProfileDetails> ProfileDetails::FromValue(const base::Value::Dict& value) {
  ProfileDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ProfileDetails> ProfileDetails::FromValue(const base::Value& value) {
  ProfileDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ProfileDetails::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->account_status != AccountStatus()) {
    to_value_result.Set("accountStatus", identity::ToString(this->account_status));

  }

  return to_value_result;
}


ProfileUserInfo::ProfileUserInfo()
 {}

ProfileUserInfo::~ProfileUserInfo() = default;
ProfileUserInfo::ProfileUserInfo(ProfileUserInfo&& rhs) = default;
ProfileUserInfo& ProfileUserInfo::operator=(ProfileUserInfo&& rhs) = default;
ProfileUserInfo ProfileUserInfo::Clone() const {
  ProfileUserInfo out;
  out.email = email;
  out.id = id;
  return out;
}

// static
bool ProfileUserInfo::Populate(
    const base::Value::Dict& dict, ProfileUserInfo& out) {
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

  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto* temp = (*id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.id = *temp;
  }

  return true;
}

// static
bool ProfileUserInfo::Populate(
    const base::Value& value, ProfileUserInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ProfileUserInfo> ProfileUserInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ProfileUserInfo>();
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
absl::optional<ProfileUserInfo> ProfileUserInfo::FromValue(const base::Value::Dict& value) {
  ProfileUserInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ProfileUserInfo> ProfileUserInfo::FromValue(const base::Value& value) {
  ProfileUserInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ProfileUserInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("email", this->email);

  to_value_result.Set("id", this->id);


  return to_value_result;
}


TokenDetails::TokenDetails()
 {}

TokenDetails::~TokenDetails() = default;
TokenDetails::TokenDetails(TokenDetails&& rhs) = default;
TokenDetails& TokenDetails::operator=(TokenDetails&& rhs) = default;
TokenDetails TokenDetails::Clone() const {
  TokenDetails out;
  out.interactive = interactive;
  if (account) {
    out.account = account->Clone();
  }
  out.scopes = scopes;
  out.enable_granular_permissions = enable_granular_permissions;
  return out;
}

// static
bool TokenDetails::Populate(
    const base::Value::Dict& dict, TokenDetails& out) {
  const base::Value* interactive_value = dict.Find("interactive");
  if (interactive_value) {
    {
      auto temp = (*interactive_value).GetIfBool();
      if (!temp.has_value()) {
        out.interactive = absl::nullopt;
        return false;
      }
      out.interactive = *temp;
    }
  }

  const base::Value* account_value = dict.Find("account");
  if (account_value) {
    {
      if (!(*account_value).is_dict()) {
        return false;
      }
      else {
        AccountInfo temp;
        if (!AccountInfo::Populate((*account_value).GetDict(), temp))
          return false;
        out.account = std::move(temp);
      }
    }
  }

  const base::Value* scopes_value = dict.Find("scopes");
  if (scopes_value) {
    {
      if (!(*scopes_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*scopes_value).GetList(), out.scopes)) {
          return false;
        }
      }
    }
  }

  const base::Value* enable_granular_permissions_value = dict.Find("enableGranularPermissions");
  if (enable_granular_permissions_value) {
    {
      auto temp = (*enable_granular_permissions_value).GetIfBool();
      if (!temp.has_value()) {
        out.enable_granular_permissions = absl::nullopt;
        return false;
      }
      out.enable_granular_permissions = *temp;
    }
  }

  return true;
}

// static
bool TokenDetails::Populate(
    const base::Value& value, TokenDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<TokenDetails> TokenDetails::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<TokenDetails>();
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
absl::optional<TokenDetails> TokenDetails::FromValue(const base::Value::Dict& value) {
  TokenDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<TokenDetails> TokenDetails::FromValue(const base::Value& value) {
  TokenDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict TokenDetails::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->interactive) {
    to_value_result.Set("interactive", *this->interactive);

  }
  if (this->account) {
    to_value_result.Set("account", (this->account)->ToValue());

  }
  if (this->scopes) {
    to_value_result.Set("scopes", json_schema_compiler::util::CreateValueFromArray(*this->scopes));

  }
  if (this->enable_granular_permissions) {
    to_value_result.Set("enableGranularPermissions", *this->enable_granular_permissions);

  }

  return to_value_result;
}


InvalidTokenDetails::InvalidTokenDetails()
 {}

InvalidTokenDetails::~InvalidTokenDetails() = default;
InvalidTokenDetails::InvalidTokenDetails(InvalidTokenDetails&& rhs) = default;
InvalidTokenDetails& InvalidTokenDetails::operator=(InvalidTokenDetails&& rhs) = default;
InvalidTokenDetails InvalidTokenDetails::Clone() const {
  InvalidTokenDetails out;
  out.token = token;
  return out;
}

// static
bool InvalidTokenDetails::Populate(
    const base::Value::Dict& dict, InvalidTokenDetails& out) {
  const base::Value* token_value = dict.Find("token");
  if (!token_value) {
    return false;
  }
  {
    auto* temp = (*token_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.token = *temp;
  }

  return true;
}

// static
bool InvalidTokenDetails::Populate(
    const base::Value& value, InvalidTokenDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<InvalidTokenDetails> InvalidTokenDetails::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<InvalidTokenDetails>();
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
absl::optional<InvalidTokenDetails> InvalidTokenDetails::FromValue(const base::Value::Dict& value) {
  InvalidTokenDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<InvalidTokenDetails> InvalidTokenDetails::FromValue(const base::Value& value) {
  InvalidTokenDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict InvalidTokenDetails::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("token", this->token);


  return to_value_result;
}


WebAuthFlowDetails::WebAuthFlowDetails()
 {}

WebAuthFlowDetails::~WebAuthFlowDetails() = default;
WebAuthFlowDetails::WebAuthFlowDetails(WebAuthFlowDetails&& rhs) = default;
WebAuthFlowDetails& WebAuthFlowDetails::operator=(WebAuthFlowDetails&& rhs) = default;
WebAuthFlowDetails WebAuthFlowDetails::Clone() const {
  WebAuthFlowDetails out;
  out.url = url;
  out.interactive = interactive;
  out.abort_on_load_for_non_interactive = abort_on_load_for_non_interactive;
  out.timeout_ms_for_non_interactive = timeout_ms_for_non_interactive;
  return out;
}

// static
bool WebAuthFlowDetails::Populate(
    const base::Value::Dict& dict, WebAuthFlowDetails& out) {
  const base::Value* url_value = dict.Find("url");
  if (!url_value) {
    return false;
  }
  {
    auto* temp = (*url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.url = *temp;
  }

  const base::Value* interactive_value = dict.Find("interactive");
  if (interactive_value) {
    {
      auto temp = (*interactive_value).GetIfBool();
      if (!temp.has_value()) {
        out.interactive = absl::nullopt;
        return false;
      }
      out.interactive = *temp;
    }
  }

  const base::Value* abort_on_load_for_non_interactive_value = dict.Find("abortOnLoadForNonInteractive");
  if (abort_on_load_for_non_interactive_value) {
    {
      auto temp = (*abort_on_load_for_non_interactive_value).GetIfBool();
      if (!temp.has_value()) {
        out.abort_on_load_for_non_interactive = absl::nullopt;
        return false;
      }
      out.abort_on_load_for_non_interactive = *temp;
    }
  }

  const base::Value* timeout_ms_for_non_interactive_value = dict.Find("timeoutMsForNonInteractive");
  if (timeout_ms_for_non_interactive_value) {
    {
      auto temp = (*timeout_ms_for_non_interactive_value).GetIfInt();
      if (!temp.has_value()) {
        out.timeout_ms_for_non_interactive = absl::nullopt;
        return false;
      }
      out.timeout_ms_for_non_interactive = *temp;
    }
  }

  return true;
}

// static
bool WebAuthFlowDetails::Populate(
    const base::Value& value, WebAuthFlowDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<WebAuthFlowDetails> WebAuthFlowDetails::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<WebAuthFlowDetails>();
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
absl::optional<WebAuthFlowDetails> WebAuthFlowDetails::FromValue(const base::Value::Dict& value) {
  WebAuthFlowDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<WebAuthFlowDetails> WebAuthFlowDetails::FromValue(const base::Value& value) {
  WebAuthFlowDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict WebAuthFlowDetails::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("url", this->url);

  if (this->interactive) {
    to_value_result.Set("interactive", *this->interactive);

  }
  if (this->abort_on_load_for_non_interactive) {
    to_value_result.Set("abortOnLoadForNonInteractive", *this->abort_on_load_for_non_interactive);

  }
  if (this->timeout_ms_for_non_interactive) {
    to_value_result.Set("timeoutMsForNonInteractive", *this->timeout_ms_for_non_interactive);

  }

  return to_value_result;
}


GetAuthTokenResult::GetAuthTokenResult()
 {}

GetAuthTokenResult::~GetAuthTokenResult() = default;
GetAuthTokenResult::GetAuthTokenResult(GetAuthTokenResult&& rhs) = default;
GetAuthTokenResult& GetAuthTokenResult::operator=(GetAuthTokenResult&& rhs) = default;
GetAuthTokenResult GetAuthTokenResult::Clone() const {
  GetAuthTokenResult out;
  out.token = token;
  out.granted_scopes = granted_scopes;
  return out;
}

// static
bool GetAuthTokenResult::Populate(
    const base::Value::Dict& dict, GetAuthTokenResult& out) {
  const base::Value* token_value = dict.Find("token");
  if (token_value) {
    {
      auto* temp = (*token_value).GetIfString();
      if (!temp) {
        out.token = absl::nullopt;
        return false;
      }
      out.token = *temp;
    }
  }

  const base::Value* granted_scopes_value = dict.Find("grantedScopes");
  if (granted_scopes_value) {
    {
      if (!(*granted_scopes_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*granted_scopes_value).GetList(), out.granted_scopes)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool GetAuthTokenResult::Populate(
    const base::Value& value, GetAuthTokenResult& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<GetAuthTokenResult> GetAuthTokenResult::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<GetAuthTokenResult>();
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
absl::optional<GetAuthTokenResult> GetAuthTokenResult::FromValue(const base::Value::Dict& value) {
  GetAuthTokenResult out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<GetAuthTokenResult> GetAuthTokenResult::FromValue(const base::Value& value) {
  GetAuthTokenResult out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict GetAuthTokenResult::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->token) {
    to_value_result.Set("token", *this->token);

  }
  if (this->granted_scopes) {
    to_value_result.Set("grantedScopes", json_schema_compiler::util::CreateValueFromArray(*this->granted_scopes));

  }

  return to_value_result;
}



//
// Functions
//

namespace GetAccounts {

base::Value::List Results::Create(const std::vector<AccountInfo>& accounts) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(accounts));

  return create_results;
}
}  // namespace GetAccounts

namespace GetAuthToken {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        TokenDetails temp;
        if (!TokenDetails::Populate(details_value.GetDict(), temp))
          return absl::nullopt;
        params.details = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const GetAuthTokenResult& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace GetAuthToken

namespace GetProfileUserInfo {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        ProfileDetails temp;
        if (!ProfileDetails::Populate(details_value.GetDict(), temp))
          return absl::nullopt;
        params.details = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const ProfileUserInfo& user_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((user_info).ToValue());

  return create_results;
}
}  // namespace GetProfileUserInfo

namespace RemoveCachedAuthToken {

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
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return absl::nullopt;
      }
      if (!InvalidTokenDetails::Populate(details_value.GetDict(), params.details)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace RemoveCachedAuthToken

namespace ClearAllCachedAuthTokens {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace ClearAllCachedAuthTokens

namespace LaunchWebAuthFlow {

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
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return absl::nullopt;
      }
      if (!WebAuthFlowDetails::Populate(details_value.GetDict(), params.details)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& response_url) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(response_url);

  return create_results;
}
}  // namespace LaunchWebAuthFlow

//
// Events
//

namespace OnSignInChanged {

const char kEventName[] = "identity.onSignInChanged";

base::Value::List Create(const AccountInfo& account, bool signed_in) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append((account).ToValue());

  create_results.Append(signed_in);

  return create_results;
}

}  // namespace OnSignInChanged

}  // namespace identity
}  // namespace api
}  // namespace extensions

