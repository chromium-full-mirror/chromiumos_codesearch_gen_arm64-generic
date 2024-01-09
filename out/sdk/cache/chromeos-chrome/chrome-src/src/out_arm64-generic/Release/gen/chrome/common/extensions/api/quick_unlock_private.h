// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/quick_unlock_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_QUICK_UNLOCK_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_QUICK_UNLOCK_PRIVATE_H__

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
namespace quick_unlock_private {

//
// Types
//

struct TokenInfo {
  TokenInfo();
  ~TokenInfo();
  TokenInfo(const TokenInfo&) = delete;
  TokenInfo& operator=(const TokenInfo&) = delete;
  TokenInfo(TokenInfo&& rhs) noexcept;
  TokenInfo& operator=(TokenInfo&& rhs) noexcept;

  // Populates a TokenInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, TokenInfo& out);

  // Populates a TokenInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, TokenInfo& out);

  // Creates a deep copy of TokenInfo.
  TokenInfo Clone() const;

  // Creates a TokenInfo object from a base::Value::Dict, or nullopt on failure.
  static std::optional<TokenInfo> FromValue(const base::Value::Dict& value);

  // Creates a TokenInfo object from a base::Value, or nullopt on failure.
  static std::optional<TokenInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTokenInfo object.
  base::Value::Dict ToValue() const;

  // The authentication token that can be passed to $(ref:setModes) calls.
  std::string token;

  // The number of seconds until the token expires. The UI should refresh the
  // token before it expires.
  int lifetime_seconds;

};

// TODO(jdufault): Add more quick unlock modes, such as a pattern unlock.
enum class QuickUnlockMode {
  kNone = 0,
  kPin,
  kMaxValue = kPin,
};


const char* ToString(QuickUnlockMode as_enum);
QuickUnlockMode ParseQuickUnlockMode(base::StringPiece as_string);
std::u16string GetQuickUnlockModeParseError(base::StringPiece as_string);

// The problems a given PIN might have.
enum class CredentialProblem {
  kNone = 0,
  kTooShort,
  kTooLong,
  kTooWeak,
  kContainsNondigit,
  kMaxValue = kContainsNondigit,
};


const char* ToString(CredentialProblem as_enum);
CredentialProblem ParseCredentialProblem(base::StringPiece as_string);
std::u16string GetCredentialProblemParseError(base::StringPiece as_string);

struct CredentialCheck {
  CredentialCheck();
  ~CredentialCheck();
  CredentialCheck(const CredentialCheck&) = delete;
  CredentialCheck& operator=(const CredentialCheck&) = delete;
  CredentialCheck(CredentialCheck&& rhs) noexcept;
  CredentialCheck& operator=(CredentialCheck&& rhs) noexcept;

  // Populates a CredentialCheck object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CredentialCheck& out);

  // Populates a CredentialCheck object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CredentialCheck& out);

  // Creates a deep copy of CredentialCheck.
  CredentialCheck Clone() const;

  // Creates a CredentialCheck object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<CredentialCheck> FromValue(const base::Value::Dict& value);

  // Creates a CredentialCheck object from a base::Value, or nullopt on failure.
  static std::optional<CredentialCheck> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCredentialCheck object.
  base::Value::Dict ToValue() const;

  // The given PINs errors. Users cannot proceed with an error.
  std::vector<CredentialProblem> errors;

  // THe given PINs warnings. Users can, but are not advised to proceed with a
  // warning.
  std::vector<CredentialProblem> warnings;

};

struct CredentialRequirements {
  CredentialRequirements();
  ~CredentialRequirements();
  CredentialRequirements(const CredentialRequirements&) = delete;
  CredentialRequirements& operator=(const CredentialRequirements&) = delete;
  CredentialRequirements(CredentialRequirements&& rhs) noexcept;
  CredentialRequirements& operator=(CredentialRequirements&& rhs) noexcept;

  // Populates a CredentialRequirements object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CredentialRequirements& out);

  // Populates a CredentialRequirements object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CredentialRequirements& out);

  // Creates a deep copy of CredentialRequirements.
  CredentialRequirements Clone() const;

  // Creates a CredentialRequirements object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<CredentialRequirements> FromValue(const base::Value::Dict& value);

  // Creates a CredentialRequirements object from a base::Value, or nullopt on
  // failure.
  static std::optional<CredentialRequirements> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCredentialRequirements object.
  base::Value::Dict ToValue() const;

  // The minimum allowed length for a PIN.
  int min_length;

  // The maximum allowed length for a PIN. A value of 0 indicates no maximum
  // length.
  int max_length;

};


//
// Functions
//

namespace GetAuthToken {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The account password for the logged in user.
  std::string account_password;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const TokenInfo& result);
}  // namespace Results

}  // namespace GetAuthToken

namespace SetLockScreenEnabled {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The token returned by $(ref:getAuthToken).
  std::string token;

  // Whether to enable the lock screen.
  bool enabled;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetLockScreenEnabled

namespace SetPinAutosubmitEnabled {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The authentication token.
  std::string token;

  // The PIN of the logged in user.
  std::string pin;

  // Whether to enable PIN auto submit.
  bool enabled;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool value);
}  // namespace Results

}  // namespace SetPinAutosubmitEnabled

namespace CanAuthenticatePin {

namespace Results {

base::Value::List Create(bool value);
}  // namespace Results

}  // namespace CanAuthenticatePin

namespace GetAvailableModes {

namespace Results {

base::Value::List Create(const std::vector<QuickUnlockMode>& modes);
}  // namespace Results

}  // namespace GetAvailableModes

namespace GetActiveModes {

namespace Results {

base::Value::List Create(const std::vector<QuickUnlockMode>& modes);
}  // namespace Results

}  // namespace GetActiveModes

namespace CheckCredential {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The quick unlock mode that is used.
  QuickUnlockMode mode;

  // The given credential.
  std::string credential;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const CredentialCheck& check);
}  // namespace Results

}  // namespace CheckCredential

namespace GetCredentialRequirements {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The quick unlock mode that is used.
  QuickUnlockMode mode;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const CredentialRequirements& requirements);
}  // namespace Results

}  // namespace GetCredentialRequirements

namespace SetModes {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The token returned by $(ref:getAuthToken).
  std::string token;

  // The quick unlock modes that should be active.
  std::vector<QuickUnlockMode> modes;

  // The associated credential for each mode. To keep the     credential the same
  // for the associated mode, pass an empty string.
  std::vector<std::string> credentials;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetModes

//
// Events
//

namespace OnActiveModesChanged {

extern const char kEventName[];  // "quickUnlockPrivate.onActiveModesChanged"

// The set of quick unlock modes which are now active.
base::Value::List Create(const std::vector<QuickUnlockMode>& active_modes);
}  // namespace OnActiveModesChanged

}  // namespace quick_unlock_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_QUICK_UNLOCK_PRIVATE_H__
