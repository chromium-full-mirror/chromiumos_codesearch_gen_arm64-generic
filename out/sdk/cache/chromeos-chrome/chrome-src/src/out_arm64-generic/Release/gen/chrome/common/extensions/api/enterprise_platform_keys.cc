// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/enterprise_platform_keys.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/enterprise_platform_keys.h"

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
Token::Token(Token&& rhs) noexcept = default;
Token& Token::operator=(Token&& rhs) noexcept = default;
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
std::optional<Token> Token::FromValue(const base::Value::Dict& value) {
  Token out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Token> Token::FromValue(const base::Value& value) {
  Token out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Token::ToValue() const {
  base::Value::Dict to_value_result;


  return to_value_result;
}


const char* ToString(Scope enum_param) {
  switch (enum_param) {
    case Scope::kUser:
      return "USER";
    case Scope::kMachine:
      return "MACHINE";
    case Scope::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

Scope ParseScope(base::StringPiece enum_string) {
  if (enum_string == "USER")
    return Scope::kUser;
  if (enum_string == "MACHINE")
    return Scope::kMachine;
  return Scope::kNone;
}

std::u16string GetScopeParseError(base::StringPiece enum_string) {
  return u"expected \"USER\" or \"MACHINE\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(Algorithm enum_param) {
  switch (enum_param) {
    case Algorithm::kRsa:
      return "RSA";
    case Algorithm::kEcdsa:
      return "ECDSA";
    case Algorithm::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

Algorithm ParseAlgorithm(base::StringPiece enum_string) {
  if (enum_string == "RSA")
    return Algorithm::kRsa;
  if (enum_string == "ECDSA")
    return Algorithm::kEcdsa;
  return Algorithm::kNone;
}

std::u16string GetAlgorithmParseError(base::StringPiece enum_string) {
  return u"expected \"RSA\" or \"ECDSA\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


RegisterKeyOptions::RegisterKeyOptions()
: algorithm() {}

RegisterKeyOptions::~RegisterKeyOptions() = default;
RegisterKeyOptions::RegisterKeyOptions(RegisterKeyOptions&& rhs) noexcept = default;
RegisterKeyOptions& RegisterKeyOptions::operator=(RegisterKeyOptions&& rhs) noexcept = default;
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
std::optional<RegisterKeyOptions> RegisterKeyOptions::FromValue(const base::Value::Dict& value) {
  RegisterKeyOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RegisterKeyOptions> RegisterKeyOptions::FromValue(const base::Value& value) {
  RegisterKeyOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
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
ChallengeKeyOptions::ChallengeKeyOptions(ChallengeKeyOptions&& rhs) noexcept = default;
ChallengeKeyOptions& ChallengeKeyOptions::operator=(ChallengeKeyOptions&& rhs) noexcept = default;
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
std::optional<ChallengeKeyOptions> ChallengeKeyOptions::FromValue(const base::Value::Dict& value) {
  ChallengeKeyOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ChallengeKeyOptions> ChallengeKeyOptions::FromValue(const base::Value& value) {
  ChallengeKeyOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
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
    const base::Value& token_id_value = args[0];
    {
      auto* temp = token_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.token_id = *temp;
    }
  }
  else {
    return std::nullopt;
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
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& token_id_value = args[0];
    {
      auto* temp = token_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.token_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& certificate_value = args[1];
    {
      if (!certificate_value.is_blob()) {
        return std::nullopt;
      }
      else {
        params.certificate = certificate_value.GetBlob();
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
}  // namespace ImportCertificate

namespace RemoveCertificate {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& token_id_value = args[0];
    {
      auto* temp = token_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.token_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& certificate_value = args[1];
    {
      if (!certificate_value.is_blob()) {
        return std::nullopt;
      }
      else {
        params.certificate = certificate_value.GetBlob();
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
}  // namespace RemoveCertificate

namespace ChallengeKey {

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
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      if (!ChallengeKeyOptions::Populate(options_value.GetDict(), params.options)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
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
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& challenge_value = args[0];
    {
      if (!challenge_value.is_blob()) {
        return std::nullopt;
      }
      else {
        params.challenge = challenge_value.GetBlob();
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& register_key_value = args[1];
    {
      auto temp = register_key_value.GetIfBool();
      if (!temp.has_value()) {
        params.register_key = std::nullopt;
        return std::nullopt;
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
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& challenge_value = args[0];
    {
      if (!challenge_value.is_blob()) {
        return std::nullopt;
      }
      else {
        params.challenge = challenge_value.GetBlob();
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& register_key_value = args[1];
    {
      auto temp = register_key_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.register_key = *temp;
    }
  }
  else {
    return std::nullopt;
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

