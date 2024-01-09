// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/identity.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_IDENTITY_H__
#define CHROME_COMMON_EXTENSIONS_API_IDENTITY_H__

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
namespace identity {

//
// Types
//

struct AccountInfo {
  AccountInfo();
  ~AccountInfo();
  AccountInfo(const AccountInfo&) = delete;
  AccountInfo& operator=(const AccountInfo&) = delete;
  AccountInfo(AccountInfo&& rhs) noexcept;
  AccountInfo& operator=(AccountInfo&& rhs) noexcept;

  // Populates a AccountInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AccountInfo& out);

  // Populates a AccountInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, AccountInfo& out);

  // Creates a deep copy of AccountInfo.
  AccountInfo Clone() const;

  // Creates a AccountInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<AccountInfo> FromValue(const base::Value::Dict& value);

  // Creates a AccountInfo object from a base::Value, or nullopt on failure.
  static std::optional<AccountInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAccountInfo object.
  base::Value::Dict ToValue() const;

  // A unique identifier for the account. This ID will not change for the lifetime
  // of the account.
  std::string id;

};

enum class AccountStatus {
  kNone = 0,
  kSync,
  kAny,
  kMaxValue = kAny,
};


const char* ToString(AccountStatus as_enum);
AccountStatus ParseAccountStatus(base::StringPiece as_string);
std::u16string GetAccountStatusParseError(base::StringPiece as_string);

struct ProfileDetails {
  ProfileDetails();
  ~ProfileDetails();
  ProfileDetails(const ProfileDetails&) = delete;
  ProfileDetails& operator=(const ProfileDetails&) = delete;
  ProfileDetails(ProfileDetails&& rhs) noexcept;
  ProfileDetails& operator=(ProfileDetails&& rhs) noexcept;

  // Populates a ProfileDetails object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ProfileDetails& out);

  // Populates a ProfileDetails object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ProfileDetails& out);

  // Creates a deep copy of ProfileDetails.
  ProfileDetails Clone() const;

  // Creates a ProfileDetails object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ProfileDetails> FromValue(const base::Value::Dict& value);

  // Creates a ProfileDetails object from a base::Value, or nullopt on failure.
  static std::optional<ProfileDetails> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisProfileDetails object.
  base::Value::Dict ToValue() const;

  // A status of the primary account signed into a profile whose
  // <code>ProfileUserInfo</code> should be returned. Defaults to
  // <code>SYNC</code> account status.
  AccountStatus account_status;

};

struct ProfileUserInfo {
  ProfileUserInfo();
  ~ProfileUserInfo();
  ProfileUserInfo(const ProfileUserInfo&) = delete;
  ProfileUserInfo& operator=(const ProfileUserInfo&) = delete;
  ProfileUserInfo(ProfileUserInfo&& rhs) noexcept;
  ProfileUserInfo& operator=(ProfileUserInfo&& rhs) noexcept;

  // Populates a ProfileUserInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ProfileUserInfo& out);

  // Populates a ProfileUserInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ProfileUserInfo& out);

  // Creates a deep copy of ProfileUserInfo.
  ProfileUserInfo Clone() const;

  // Creates a ProfileUserInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ProfileUserInfo> FromValue(const base::Value::Dict& value);

  // Creates a ProfileUserInfo object from a base::Value, or nullopt on failure.
  static std::optional<ProfileUserInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisProfileUserInfo object.
  base::Value::Dict ToValue() const;

  // An email address for the user account signed into the current profile. Empty
  // if the user is not signed in or the <code>identity.email</code> manifest
  // permission is not specified.
  std::string email;

  // A unique identifier for the account. This ID will not change for the lifetime
  // of the account. Empty if the user is not signed in or (in M41+) the
  // <code>identity.email</code> manifest permission is not specified.
  std::string id;

};

struct TokenDetails {
  TokenDetails();
  ~TokenDetails();
  TokenDetails(const TokenDetails&) = delete;
  TokenDetails& operator=(const TokenDetails&) = delete;
  TokenDetails(TokenDetails&& rhs) noexcept;
  TokenDetails& operator=(TokenDetails&& rhs) noexcept;

  // Populates a TokenDetails object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, TokenDetails& out);

  // Populates a TokenDetails object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, TokenDetails& out);

  // Creates a deep copy of TokenDetails.
  TokenDetails Clone() const;

  // Creates a TokenDetails object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<TokenDetails> FromValue(const base::Value::Dict& value);

  // Creates a TokenDetails object from a base::Value, or nullopt on failure.
  static std::optional<TokenDetails> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTokenDetails object.
  base::Value::Dict ToValue() const;

  // Fetching a token may require the user to sign-in to Chrome, or approve the
  // application's requested scopes. If the interactive flag is <code>true</code>,
  // <code>getAuthToken</code> will prompt the user as necessary. When the flag is
  // <code>false</code> or omitted, <code>getAuthToken</code> will return failure
  // any time a prompt would be required.
  std::optional<bool> interactive;

  // The account ID whose token should be returned. If not specified, the function
  // will use an account from the Chrome profile: the Sync account if there is
  // one, or otherwise the first Google web account.
  std::optional<AccountInfo> account;

  // <p>A list of OAuth2 scopes to request.</p><p>When the <code>scopes</code>
  // field is present, it overrides the list of scopes specified in
  // manifest.json.</p>
  std::optional<std::vector<std::string>> scopes;

  // The <code>enableGranularPermissions</code> flag allows extensions to opt-in
  // early to the granular permissions consent screen, in which requested
  // permissions are granted or denied individually.
  std::optional<bool> enable_granular_permissions;

};

struct InvalidTokenDetails {
  InvalidTokenDetails();
  ~InvalidTokenDetails();
  InvalidTokenDetails(const InvalidTokenDetails&) = delete;
  InvalidTokenDetails& operator=(const InvalidTokenDetails&) = delete;
  InvalidTokenDetails(InvalidTokenDetails&& rhs) noexcept;
  InvalidTokenDetails& operator=(InvalidTokenDetails&& rhs) noexcept;

  // Populates a InvalidTokenDetails object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, InvalidTokenDetails& out);

  // Populates a InvalidTokenDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, InvalidTokenDetails& out);

  // Creates a deep copy of InvalidTokenDetails.
  InvalidTokenDetails Clone() const;

  // Creates a InvalidTokenDetails object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<InvalidTokenDetails> FromValue(const base::Value::Dict& value);

  // Creates a InvalidTokenDetails object from a base::Value, or nullopt on
  // failure.
  static std::optional<InvalidTokenDetails> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisInvalidTokenDetails object.
  base::Value::Dict ToValue() const;

  // The specific token that should be removed from the cache.
  std::string token;

};

struct WebAuthFlowDetails {
  WebAuthFlowDetails();
  ~WebAuthFlowDetails();
  WebAuthFlowDetails(const WebAuthFlowDetails&) = delete;
  WebAuthFlowDetails& operator=(const WebAuthFlowDetails&) = delete;
  WebAuthFlowDetails(WebAuthFlowDetails&& rhs) noexcept;
  WebAuthFlowDetails& operator=(WebAuthFlowDetails&& rhs) noexcept;

  // Populates a WebAuthFlowDetails object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, WebAuthFlowDetails& out);

  // Populates a WebAuthFlowDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, WebAuthFlowDetails& out);

  // Creates a deep copy of WebAuthFlowDetails.
  WebAuthFlowDetails Clone() const;

  // Creates a WebAuthFlowDetails object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<WebAuthFlowDetails> FromValue(const base::Value::Dict& value);

  // Creates a WebAuthFlowDetails object from a base::Value, or nullopt on
  // failure.
  static std::optional<WebAuthFlowDetails> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisWebAuthFlowDetails object.
  base::Value::Dict ToValue() const;

  // The URL that initiates the auth flow.
  std::string url;

  // <p>Whether to launch auth flow in interactive mode.</p><p>Since some auth
  // flows may immediately redirect to a result URL,
  // <code>launchWebAuthFlow</code> hides its web view until the first navigation
  // either redirects to the final URL, or finishes loading a page meant to be
  // displayed.</p><p>If the <code>interactive</code> flag is <code>true</code>,
  // the window will be displayed when a page load completes. If the flag is
  // <code>false</code> or omitted, <code>launchWebAuthFlow</code> will return
  // with an error if the initial navigation does not complete the flow.</p><p>For
  // flows that use JavaScript for redirection,
  // <code>abortOnLoadForNonInteractive</code> can be set to <code>false</code> in
  // combination with setting <code>timeoutMsForNonInteractive</code> to give the
  // page a chance to perform any redirects.</p>
  std::optional<bool> interactive;

  // <p>Whether to terminate <code>launchWebAuthFlow</code> for non-interactive
  // requests after the page loads. This parameter does not affect interactive
  // flows.</p><p>When set to <code>true</code> (default) the flow will terminate
  // immediately after the page loads. When set to <code>false</code>, the flow
  // will only terminate after the <code>timeoutMsForNonInteractive</code> passes.
  // This is useful for identity providers that use JavaScript to perform
  // redirections after the page loads.</p>
  std::optional<bool> abort_on_load_for_non_interactive;

  // The maximum amount of time, in miliseconds, <code>launchWebAuthFlow</code> is
  // allowed to run in non-interactive mode in total. Only has an effect if
  // <code>interactive</code> is <code>false</code>.
  std::optional<int> timeout_ms_for_non_interactive;

};

struct GetAuthTokenResult {
  GetAuthTokenResult();
  ~GetAuthTokenResult();
  GetAuthTokenResult(const GetAuthTokenResult&) = delete;
  GetAuthTokenResult& operator=(const GetAuthTokenResult&) = delete;
  GetAuthTokenResult(GetAuthTokenResult&& rhs) noexcept;
  GetAuthTokenResult& operator=(GetAuthTokenResult&& rhs) noexcept;

  // Populates a GetAuthTokenResult object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetAuthTokenResult& out);

  // Populates a GetAuthTokenResult object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetAuthTokenResult& out);

  // Creates a deep copy of GetAuthTokenResult.
  GetAuthTokenResult Clone() const;

  // Creates a GetAuthTokenResult object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<GetAuthTokenResult> FromValue(const base::Value::Dict& value);

  // Creates a GetAuthTokenResult object from a base::Value, or nullopt on
  // failure.
  static std::optional<GetAuthTokenResult> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetAuthTokenResult object.
  base::Value::Dict ToValue() const;

  // The specific token associated with the request.
  std::optional<std::string> token;

  // A list of OAuth2 scopes granted to the extension.
  std::optional<std::vector<std::string>> granted_scopes;

};


//
// Functions
//

namespace GetAccounts {

namespace Results {

base::Value::List Create(const std::vector<AccountInfo>& accounts);
}  // namespace Results

}  // namespace GetAccounts

namespace GetAuthToken {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Token options.
  std::optional<TokenDetails> details;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const GetAuthTokenResult& result);
}  // namespace Results

}  // namespace GetAuthToken

namespace GetProfileUserInfo {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Profile options.
  std::optional<ProfileDetails> details;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const ProfileUserInfo& user_info);
}  // namespace Results

}  // namespace GetProfileUserInfo

namespace RemoveCachedAuthToken {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Token information.
  InvalidTokenDetails details;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RemoveCachedAuthToken

namespace ClearAllCachedAuthTokens {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ClearAllCachedAuthTokens

namespace LaunchWebAuthFlow {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // WebAuth flow options.
  WebAuthFlowDetails details;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& response_url);
}  // namespace Results

}  // namespace LaunchWebAuthFlow

//
// Events
//

namespace OnSignInChanged {

extern const char kEventName[];  // "identity.onSignInChanged"

base::Value::List Create(const AccountInfo& account, bool signed_in);
}  // namespace OnSignInChanged

}  // namespace identity
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_IDENTITY_H__
