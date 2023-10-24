// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/enterprise_platform_keys.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/enterprise_platform_keys.h"

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
namespace enterprise_platform_keys {
//
// Types
//

Token::Token()
 {}

Token::~Token() = default;
Token::Token(Token&& rhs) = default;
Token& Token::operator=(Token&& rhs) = default;
Token Token::Clone() const {
  Token out;
  return out;
}

// static
bool Token::Populate(
    const base::Value::Dict& dict, Token& out) {
  return true;
}

// static
bool Token::Populate(
    const base::Value& value, Token& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<Token> Token::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Token>();
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
absl::optional<Token> Token::FromValue(const base::Value::Dict& value) {
  Token out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Token> Token::FromValue(const base::Value& value) {
  Token out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict Token::ToValue() const {
  base::Value::Dict to_value_result;


  return to_value_result;
}


const char* ToString(Scope enum_param) {
  switch (enum_param) {
    case SCOPE_USER:
      return "USER";
    case SCOPE_MACHINE:
      return "MACHINE";
    case SCOPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

Scope ParseScope(base::StringPiece enum_string) {
  if (enum_string == "USER")
    return SCOPE_USER;
  if (enum_string == "MACHINE")
    return SCOPE_MACHINE;
  return SCOPE_NONE;
}

std::u16string GetScopeParseError(base::StringPiece enum_string) {
  return u"expected \"USER\" or \"MACHINE\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(Algorithm enum_param) {
  switch (enum_param) {
    case ALGORITHM_RSA:
      return "RSA";
    case ALGORITHM_ECDSA:
      return "ECDSA";
    case ALGORITHM_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

Algorithm ParseAlgorithm(base::StringPiece enum_string) {
  if (enum_string == "RSA")
    return ALGORITHM_RSA;
  if (enum_string == "ECDSA")
    return ALGORITHM_ECDSA;
  return ALGORITHM_NONE;
}

std::u16string GetAlgorithmParseError(base::StringPiece enum_string) {
  return u"expected \"RSA\" or \"ECDSA\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


RegisterKeyOptions::RegisterKeyOptions()
: algorithm() {}

RegisterKeyOptions::~RegisterKeyOptions() = default;
RegisterKeyOptions::RegisterKeyOptions(RegisterKeyOptions&& rhs) = default;
RegisterKeyOptions& RegisterKeyOptions::operator=(RegisterKeyOptions&& rhs) = default;
RegisterKeyOptions RegisterKeyOptions::Clone() const {
  RegisterKeyOptions out;
  out.algorithm = algorithm;
  return out;
}

// static
bool RegisterKeyOptions::Populate(
    const base::Value::Dict& dict, RegisterKeyOptions& out) {
  const base::Value* algorithm_value = dict.Find("algorithm");
  if (!algorithm_value) {
    return false;
  }
  {
    const std::string* algorithm_as_string = (*algorithm_value).GetIfString();
    if (!algorithm_as_string) {
      return false;
    }
    out.algorithm = ParseAlgorithm(*algorithm_as_string);
    if (out.algorithm == Algorithm()) {
      return false;
    }
  }

  return true;
}

// static
bool RegisterKeyOptions::Populate(
    const base::Value& value, RegisterKeyOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<RegisterKeyOptions> RegisterKeyOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<RegisterKeyOptions>();
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
absl::optional<RegisterKeyOptions> RegisterKeyOptions::FromValue(const base::Value::Dict& value) {
  RegisterKeyOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<RegisterKeyOptions> RegisterKeyOptions::FromValue(const base::Value& value) {
  RegisterKeyOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict RegisterKeyOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("algorithm", enterprise_platform_keys::ToString(this->algorithm));


  return to_value_result;
}


ChallengeKeyOptions::ChallengeKeyOptions()
: scope() {}

ChallengeKeyOptions::~ChallengeKeyOptions() = default;
ChallengeKeyOptions::ChallengeKeyOptions(ChallengeKeyOptions&& rhs) = default;
ChallengeKeyOptions& ChallengeKeyOptions::operator=(ChallengeKeyOptions&& rhs) = default;
ChallengeKeyOptions ChallengeKeyOptions::Clone() const {
  ChallengeKeyOptions out;
  out.challenge = challenge;
  if (register_key) {
    out.register_key = register_key->Clone();
  }
  out.scope = scope;
  return out;
}

// static
bool ChallengeKeyOptions::Populate(
    const base::Value::Dict& dict, ChallengeKeyOptions& out) {
  const base::Value* challenge_value = dict.Find("challenge");
  if (!challenge_value) {
    return false;
  }
  {
    if (!(*challenge_value).is_blob()) {
      return false;
    }
    else {
      out.challenge = (*challenge_value).GetBlob();
    }
  }

  const base::Value* register_key_value = dict.Find("registerKey");
  if (register_key_value) {
    {
      if (!(*register_key_value).is_dict()) {
        return false;
      }
      else {
        RegisterKeyOptions temp;
        if (!RegisterKeyOptions::Populate((*register_key_value).GetDict(), temp))
          return false;
        out.register_key = std::move(temp);
      }
    }
  }

  const base::Value* scope_value = dict.Find("scope");
  if (!scope_value) {
    return false;
  }
  {
    const std::string* scope_as_string = (*scope_value).GetIfString();
    if (!scope_as_string) {
      return false;
    }
    out.scope = ParseScope(*scope_as_string);
    if (out.scope == Scope()) {
      return false;
    }
  }

  return true;
}

// static
bool ChallengeKeyOptions::Populate(
    const base::Value& value, ChallengeKeyOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ChallengeKeyOptions> ChallengeKeyOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ChallengeKeyOptions>();
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
absl::optional<ChallengeKeyOptions> ChallengeKeyOptions::FromValue(const base::Value::Dict& value) {
  ChallengeKeyOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ChallengeKeyOptions> ChallengeKeyOptions::FromValue(const base::Value& value) {
  ChallengeKeyOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ChallengeKeyOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("challenge", base::Value(this->challenge));

  if (this->register_key) {
    to_value_result.Set("registerKey", (this->register_key)->ToValue());

  }
  to_value_result.Set("scope", enterprise_platform_keys::ToString(this->scope));


  return to_value_result;
}



//
// Functions
//

namespace GetCertificates {

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
    const base::Value& token_id_value = args[0];
    {
      auto* temp = token_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.token_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<std::vector<uint8_t>>& certificates) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(certificates));

  return create_results;
}
}  // namespace GetCertificates

namespace ImportCertificate {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& token_id_value = args[0];
    {
      auto* temp = token_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.token_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& certificate_value = args[1];
    {
      if (!certificate_value.is_blob()) {
        return absl::nullopt;
      }
      else {
        params.certificate = certificate_value.GetBlob();
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
}  // namespace ImportCertificate

namespace RemoveCertificate {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& token_id_value = args[0];
    {
      auto* temp = token_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.token_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& certificate_value = args[1];
    {
      if (!certificate_value.is_blob()) {
        return absl::nullopt;
      }
      else {
        params.certificate = certificate_value.GetBlob();
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
}  // namespace RemoveCertificate

namespace ChallengeKey {

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
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return absl::nullopt;
      }
      if (!ChallengeKeyOptions::Populate(options_value.GetDict(), params.options)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<uint8_t>& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value(response));

  return create_results;
}
}  // namespace ChallengeKey

namespace ChallengeMachineKey {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& challenge_value = args[0];
    {
      if (!challenge_value.is_blob()) {
        return absl::nullopt;
      }
      else {
        params.challenge = challenge_value.GetBlob();
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& register_key_value = args[1];
    {
      auto temp = register_key_value.GetIfBool();
      if (!temp.has_value()) {
        params.register_key = absl::nullopt;
        return absl::nullopt;
      }
      params.register_key = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create(const std::vector<uint8_t>& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value(response));

  return create_results;
}
}  // namespace ChallengeMachineKey

namespace ChallengeUserKey {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& challenge_value = args[0];
    {
      if (!challenge_value.is_blob()) {
        return absl::nullopt;
      }
      else {
        params.challenge = challenge_value.GetBlob();
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& register_key_value = args[1];
    {
      auto temp = register_key_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.register_key = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<uint8_t>& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value(response));

  return create_results;
}
}  // namespace ChallengeUserKey

}  // namespace enterprise_platform_keys
}  // namespace api
}  // namespace extensions

