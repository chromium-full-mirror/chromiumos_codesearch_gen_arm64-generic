// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/enterprise_platform_keys.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_PLATFORM_KEYS_H__
#define CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_PLATFORM_KEYS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace enterprise_platform_keys {

//
// Types
//

struct Token {
  Token();
  ~Token();
  Token(const Token&) = delete;
  Token& operator=(const Token&) = delete;
  Token(Token&& rhs);
  Token& operator=(Token&& rhs);

  // Populates a Token object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Token& out);

  // Populates a Token object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Token& out);

  // Creates a deep copy of Token.
  Token Clone() const;

  // Creates a Token object from a base::Value, or NULL on failure.
  static std::unique_ptr<Token> FromValueDeprecated(const base::Value& value);

  // Creates a Token object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<Token> FromValue(const base::Value::Dict& value);

  // Creates a Token object from a base::Value, or nullopt on failure.
  static absl::optional<Token> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisToken object.
  base::Value::Dict ToValue() const;

};

// Whether to use the Enterprise User Key or the Enterprise Machine Key.
enum  Scope {
  SCOPE_NONE = 0,
  SCOPE_USER,
  SCOPE_MACHINE,
  SCOPE_LAST = SCOPE_MACHINE,
};


const char* ToString(Scope as_enum);
Scope ParseScope(base::StringPiece as_string);
std::u16string GetScopeParseError(base::StringPiece as_string);

// Type of key to generate.
enum  Algorithm {
  ALGORITHM_NONE = 0,
  ALGORITHM_RSA,
  ALGORITHM_ECDSA,
  ALGORITHM_LAST = ALGORITHM_ECDSA,
};


const char* ToString(Algorithm as_enum);
Algorithm ParseAlgorithm(base::StringPiece as_string);
std::u16string GetAlgorithmParseError(base::StringPiece as_string);

struct RegisterKeyOptions {
  RegisterKeyOptions();
  ~RegisterKeyOptions();
  RegisterKeyOptions(const RegisterKeyOptions&) = delete;
  RegisterKeyOptions& operator=(const RegisterKeyOptions&) = delete;
  RegisterKeyOptions(RegisterKeyOptions&& rhs);
  RegisterKeyOptions& operator=(RegisterKeyOptions&& rhs);

  // Populates a RegisterKeyOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RegisterKeyOptions& out);

  // Populates a RegisterKeyOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RegisterKeyOptions& out);

  // Creates a deep copy of RegisterKeyOptions.
  RegisterKeyOptions Clone() const;

  // Creates a RegisterKeyOptions object from a base::Value, or NULL on failure.
  static std::unique_ptr<RegisterKeyOptions> FromValueDeprecated(const base::Value& value);

  // Creates a RegisterKeyOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<RegisterKeyOptions> FromValue(const base::Value::Dict& value);

  // Creates a RegisterKeyOptions object from a base::Value, or nullopt on
  // failure.
  static absl::optional<RegisterKeyOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRegisterKeyOptions object.
  base::Value::Dict ToValue() const;

  // Which algorithm the registered key should use.
  Algorithm algorithm;

};

struct ChallengeKeyOptions {
  ChallengeKeyOptions();
  ~ChallengeKeyOptions();
  ChallengeKeyOptions(const ChallengeKeyOptions&) = delete;
  ChallengeKeyOptions& operator=(const ChallengeKeyOptions&) = delete;
  ChallengeKeyOptions(ChallengeKeyOptions&& rhs);
  ChallengeKeyOptions& operator=(ChallengeKeyOptions&& rhs);

  // Populates a ChallengeKeyOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ChallengeKeyOptions& out);

  // Populates a ChallengeKeyOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ChallengeKeyOptions& out);

  // Creates a deep copy of ChallengeKeyOptions.
  ChallengeKeyOptions Clone() const;

  // Creates a ChallengeKeyOptions object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ChallengeKeyOptions> FromValueDeprecated(const base::Value& value);

  // Creates a ChallengeKeyOptions object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<ChallengeKeyOptions> FromValue(const base::Value::Dict& value);

  // Creates a ChallengeKeyOptions object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ChallengeKeyOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisChallengeKeyOptions object.
  base::Value::Dict ToValue() const;

  // A challenge as emitted by the Verified Access Web API.
  std::vector<uint8_t> challenge;

  // If present, registers the challenged key with the specified
  // <code>scope</code>'s token.  The key can then be associated with a
  // certificate and used like any other signing key.  Subsequent calls to this
  // function will then generate a new Enterprise Key in the specified
  // <code>scope</code>.
  absl::optional<RegisterKeyOptions> register_key;

  // Which Enterprise Key to challenge.
  Scope scope;

};


//
// Functions
//

namespace GetCertificates {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The id of a Token returned by <code>getTokens</code>.
  std::string token_id;


 private:
  Params();
};

namespace Results {

// The list of certificates, each in DER encoding of a X.509     certificate.
base::Value::List Create(const std::vector<std::vector<uint8_t>>& certificates);
}  // namespace Results

}  // namespace GetCertificates

namespace ImportCertificate {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The id of a Token returned by <code>getTokens</code>.
  std::string token_id;

  // The DER encoding of a X.509 certificate.
  std::vector<uint8_t> certificate;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ImportCertificate

namespace RemoveCertificate {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The id of a Token returned by <code>getTokens</code>.
  std::string token_id;

  // The DER encoding of a X.509 certificate.
  std::vector<uint8_t> certificate;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RemoveCertificate

namespace ChallengeKey {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Object containing the fields defined in
  // $(ref:ChallengeKeyOptions).
  ChallengeKeyOptions options;


 private:
  Params();
};

namespace Results {

// The challenge response.
base::Value::List Create(const std::vector<uint8_t>& response);
}  // namespace Results

}  // namespace ChallengeKey

namespace ChallengeMachineKey {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // A challenge as emitted by the Verified Access Web API.
  std::vector<uint8_t> challenge;

  // If set, the current Enterprise Machine Key is registered                with
  // the <code>"system"</code> token and relinquishes the
  // Enterprise Machine Key role. The key can then be                associated
  // with a certificate and used like any other                signing key. This
  // key is 2048-bit RSA. Subsequent calls                to this function will
  // then generate a new Enterprise                Machine Key.
  absl::optional<bool> register_key;


 private:
  Params();
};

namespace Results {

// The challenge response.
base::Value::List Create(const std::vector<uint8_t>& response);
}  // namespace Results

}  // namespace ChallengeMachineKey

namespace ChallengeUserKey {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // A challenge as emitted by the Verified Access Web API.
  std::vector<uint8_t> challenge;

  // If set, the current Enterprise User Key is registered with                the
  // <code>"user"</code> token and relinquishes the                Enterprise User
  // Key role. The key can then be associated                with a certificate
  // and used like any other signing key.                This key is 2048-bit RSA.
  // Subsequent calls to this                function will then generate a new
  // Enterprise User Key.
  bool register_key;


 private:
  Params();
};

namespace Results {

// The challenge response.
base::Value::List Create(const std::vector<uint8_t>& response);
}  // namespace Results

}  // namespace ChallengeUserKey

}  // namespace enterprise_platform_keys
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_PLATFORM_KEYS_H__
