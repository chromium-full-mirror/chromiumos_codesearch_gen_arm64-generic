// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/platform_keys.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/platform_keys.h"

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
namespace platform_keys {
//
// Types
//

Match::KeyAlgorithm::KeyAlgorithm()
 {}

Match::KeyAlgorithm::~KeyAlgorithm() = default;
Match::KeyAlgorithm::KeyAlgorithm(KeyAlgorithm&& rhs) noexcept = default;
Match::KeyAlgorithm& Match::KeyAlgorithm::operator=(KeyAlgorithm&& rhs) noexcept = default;
Match::KeyAlgorithm Match::KeyAlgorithm::Clone() const {
  KeyAlgorithm out;
  return out;
}

// static
bool Match::KeyAlgorithm::Populate(
    const base::Value::Dict& dict, KeyAlgorithm& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool Match::KeyAlgorithm::Populate(
    const base::Value& value, KeyAlgorithm& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Match::KeyAlgorithm> Match::KeyAlgorithm::FromValue(const base::Value::Dict& value) {
  KeyAlgorithm out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Match::KeyAlgorithm> Match::KeyAlgorithm::FromValue(const base::Value& value) {
  KeyAlgorithm out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Match::KeyAlgorithm::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



Match::Match()
 {}

Match::~Match() = default;
Match::Match(Match&& rhs) noexcept = default;
Match& Match::operator=(Match&& rhs) noexcept = default;
Match Match::Clone() const {
  Match out;
  out.certificate = certificate;
  out.key_algorithm = key_algorithm.Clone();
  return out;
}

// static
bool Match::Populate(
    const base::Value::Dict& dict, Match& out) {
  const base::Value* certificate_value = dict.Find("certificate");
  if (!certificate_value) {
    return false;
  }
  {
    if (!(*certificate_value).is_blob()) {
      return false;
    }
    else {
      out.certificate = (*certificate_value).GetBlob();
    }
  }

  const base::Value* key_algorithm_value = dict.Find("keyAlgorithm");
  if (!key_algorithm_value) {
    return false;
  }
  {
    if (!(*key_algorithm_value).is_dict()) {
      return false;
    }
    if (!KeyAlgorithm::Populate((*key_algorithm_value).GetDict(), out.key_algorithm)) {
      return false;
    }
  }

  return true;
}

// static
bool Match::Populate(
    const base::Value& value, Match& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Match> Match::FromValue(const base::Value::Dict& value) {
  Match out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Match> Match::FromValue(const base::Value& value) {
  Match out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Match::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("certificate", base::Value(this->certificate));

  to_value_result.Set("keyAlgorithm", (this->key_algorithm).ToValue());


  return to_value_result;
}


const char* ToString(ClientCertificateType enum_param) {
  switch (enum_param) {
    case ClientCertificateType::kRsaSign:
      return "rsaSign";
    case ClientCertificateType::kEcdsaSign:
      return "ecdsaSign";
    case ClientCertificateType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ClientCertificateType ParseClientCertificateType(base::StringPiece enum_string) {
  if (enum_string == "rsaSign")
    return ClientCertificateType::kRsaSign;
  if (enum_string == "ecdsaSign")
    return ClientCertificateType::kEcdsaSign;
  return ClientCertificateType::kNone;
}

std::u16string GetClientCertificateTypeParseError(base::StringPiece enum_string) {
  return u"expected \"rsaSign\" or \"ecdsaSign\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ClientCertificateRequest::ClientCertificateRequest()
 {}

ClientCertificateRequest::~ClientCertificateRequest() = default;
ClientCertificateRequest::ClientCertificateRequest(ClientCertificateRequest&& rhs) noexcept = default;
ClientCertificateRequest& ClientCertificateRequest::operator=(ClientCertificateRequest&& rhs) noexcept = default;
ClientCertificateRequest ClientCertificateRequest::Clone() const {
  ClientCertificateRequest out;
  out.certificate_types = certificate_types;
  out.certificate_authorities = certificate_authorities;
  return out;
}

// static
bool ClientCertificateRequest::Populate(
    const base::Value::Dict& dict, ClientCertificateRequest& out) {
  const base::Value* certificate_types_value = dict.Find("certificateTypes");
  if (!certificate_types_value) {
    return false;
  }
  {
    if (!(*certificate_types_value).is_list()) {
      return false;
    }
    else {
      for (const auto& it : ((*certificate_types_value)).GetList()) {
        ClientCertificateType tmp;
        const std::string* client_certificate_type_as_string = (it).GetIfString();
        if (!client_certificate_type_as_string) {
          return false;
        }
        tmp = ParseClientCertificateType(*client_certificate_type_as_string);
        if (tmp == ClientCertificateType()) {
          return false;
        }
        out.certificate_types.push_back(tmp);
      }
    }
  }

  const base::Value* certificate_authorities_value = dict.Find("certificateAuthorities");
  if (!certificate_authorities_value) {
    return false;
  }
  {
    if (!(*certificate_authorities_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*certificate_authorities_value).GetList(), out.certificate_authorities)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool ClientCertificateRequest::Populate(
    const base::Value& value, ClientCertificateRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ClientCertificateRequest> ClientCertificateRequest::FromValue(const base::Value::Dict& value) {
  ClientCertificateRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ClientCertificateRequest> ClientCertificateRequest::FromValue(const base::Value& value) {
  ClientCertificateRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ClientCertificateRequest::ToValue() const {
  base::Value::Dict to_value_result;

  {
    std::vector<std::string> certificateTypes_list;
    for (const auto& it : (this->certificate_types)) {
      certificateTypes_list.emplace_back(platform_keys::ToString(it));
    }
    to_value_result.Set("certificateTypes", json_schema_compiler::util::CreateValueFromArray(certificateTypes_list));
  }

  to_value_result.Set("certificateAuthorities", json_schema_compiler::util::CreateValueFromArray(this->certificate_authorities));


  return to_value_result;
}


SelectDetails::SelectDetails()
: interactive(false) {}

SelectDetails::~SelectDetails() = default;
SelectDetails::SelectDetails(SelectDetails&& rhs) noexcept = default;
SelectDetails& SelectDetails::operator=(SelectDetails&& rhs) noexcept = default;
SelectDetails SelectDetails::Clone() const {
  SelectDetails out;
  out.request = request.Clone();
  out.client_certs = client_certs;
  out.interactive = interactive;
  return out;
}

// static
bool SelectDetails::Populate(
    const base::Value::Dict& dict, SelectDetails& out) {
  const base::Value* request_value = dict.Find("request");
  if (!request_value) {
    return false;
  }
  {
    if (!(*request_value).is_dict()) {
      return false;
    }
    if (!ClientCertificateRequest::Populate((*request_value).GetDict(), out.request)) {
      return false;
    }
  }

  const base::Value* client_certs_value = dict.Find("clientCerts");
  if (client_certs_value) {
    {
      if (!(*client_certs_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*client_certs_value).GetList(), out.client_certs)) {
          return false;
        }
      }
    }
  }

  const base::Value* interactive_value = dict.Find("interactive");
  if (!interactive_value) {
    return false;
  }
  {
    auto temp = (*interactive_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.interactive = *temp;
  }

  return true;
}

// static
bool SelectDetails::Populate(
    const base::Value& value, SelectDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SelectDetails> SelectDetails::FromValue(const base::Value::Dict& value) {
  SelectDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SelectDetails> SelectDetails::FromValue(const base::Value& value) {
  SelectDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SelectDetails::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("request", (this->request).ToValue());

  if (this->client_certs) {
    to_value_result.Set("clientCerts", json_schema_compiler::util::CreateValueFromArray(*this->client_certs));

  }
  to_value_result.Set("interactive", this->interactive);


  return to_value_result;
}


VerificationDetails::VerificationDetails()
 {}

VerificationDetails::~VerificationDetails() = default;
VerificationDetails::VerificationDetails(VerificationDetails&& rhs) noexcept = default;
VerificationDetails& VerificationDetails::operator=(VerificationDetails&& rhs) noexcept = default;
VerificationDetails VerificationDetails::Clone() const {
  VerificationDetails out;
  out.server_certificate_chain = server_certificate_chain;
  out.hostname = hostname;
  return out;
}

// static
bool VerificationDetails::Populate(
    const base::Value::Dict& dict, VerificationDetails& out) {
  const base::Value* server_certificate_chain_value = dict.Find("serverCertificateChain");
  if (!server_certificate_chain_value) {
    return false;
  }
  {
    if (!(*server_certificate_chain_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*server_certificate_chain_value).GetList(), out.server_certificate_chain)) {
        return false;
      }
    }
  }

  const base::Value* hostname_value = dict.Find("hostname");
  if (!hostname_value) {
    return false;
  }
  {
    auto* temp = (*hostname_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.hostname = *temp;
  }

  return true;
}

// static
bool VerificationDetails::Populate(
    const base::Value& value, VerificationDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<VerificationDetails> VerificationDetails::FromValue(const base::Value::Dict& value) {
  VerificationDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<VerificationDetails> VerificationDetails::FromValue(const base::Value& value) {
  VerificationDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict VerificationDetails::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("serverCertificateChain", json_schema_compiler::util::CreateValueFromArray(this->server_certificate_chain));

  to_value_result.Set("hostname", this->hostname);


  return to_value_result;
}


VerificationResult::VerificationResult()
: trusted(false) {}

VerificationResult::~VerificationResult() = default;
VerificationResult::VerificationResult(VerificationResult&& rhs) noexcept = default;
VerificationResult& VerificationResult::operator=(VerificationResult&& rhs) noexcept = default;
VerificationResult VerificationResult::Clone() const {
  VerificationResult out;
  out.trusted = trusted;
  out.debug_errors = debug_errors;
  return out;
}

// static
bool VerificationResult::Populate(
    const base::Value::Dict& dict, VerificationResult& out) {
  const base::Value* trusted_value = dict.Find("trusted");
  if (!trusted_value) {
    return false;
  }
  {
    auto temp = (*trusted_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.trusted = *temp;
  }

  const base::Value* debug_errors_value = dict.Find("debug_errors");
  if (!debug_errors_value) {
    return false;
  }
  {
    if (!(*debug_errors_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*debug_errors_value).GetList(), out.debug_errors)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool VerificationResult::Populate(
    const base::Value& value, VerificationResult& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<VerificationResult> VerificationResult::FromValue(const base::Value::Dict& value) {
  VerificationResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<VerificationResult> VerificationResult::FromValue(const base::Value& value) {
  VerificationResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict VerificationResult::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("trusted", this->trusted);

  to_value_result.Set("debug_errors", json_schema_compiler::util::CreateValueFromArray(this->debug_errors));


  return to_value_result;
}



//
// Functions
//

namespace VerifyTLSServerCertificate {

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
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      if (!VerificationDetails::Populate(details_value.GetDict(), params.details)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const VerificationResult& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace VerifyTLSServerCertificate

}  // namespace platform_keys
}  // namespace api
}  // namespace extensions

