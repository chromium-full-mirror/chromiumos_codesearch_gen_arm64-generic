// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/certificate_provider.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/certificate_provider.h"

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
namespace certificate_provider {
//
// Types
//

const char* ToString(Algorithm enum_param) {
  switch (enum_param) {
    case ALGORITHM_RSASSA_PKCS1_V1_5_MD5_SHA1:
      return "RSASSA_PKCS1_v1_5_MD5_SHA1";
    case ALGORITHM_RSASSA_PKCS1_V1_5_SHA1:
      return "RSASSA_PKCS1_v1_5_SHA1";
    case ALGORITHM_RSASSA_PKCS1_V1_5_SHA256:
      return "RSASSA_PKCS1_v1_5_SHA256";
    case ALGORITHM_RSASSA_PKCS1_V1_5_SHA384:
      return "RSASSA_PKCS1_v1_5_SHA384";
    case ALGORITHM_RSASSA_PKCS1_V1_5_SHA512:
      return "RSASSA_PKCS1_v1_5_SHA512";
    case ALGORITHM_RSASSA_PSS_SHA256:
      return "RSASSA_PSS_SHA256";
    case ALGORITHM_RSASSA_PSS_SHA384:
      return "RSASSA_PSS_SHA384";
    case ALGORITHM_RSASSA_PSS_SHA512:
      return "RSASSA_PSS_SHA512";
    case ALGORITHM_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

Algorithm ParseAlgorithm(base::StringPiece enum_string) {
  if (enum_string == "RSASSA_PKCS1_v1_5_MD5_SHA1")
    return ALGORITHM_RSASSA_PKCS1_V1_5_MD5_SHA1;
  if (enum_string == "RSASSA_PKCS1_v1_5_SHA1")
    return ALGORITHM_RSASSA_PKCS1_V1_5_SHA1;
  if (enum_string == "RSASSA_PKCS1_v1_5_SHA256")
    return ALGORITHM_RSASSA_PKCS1_V1_5_SHA256;
  if (enum_string == "RSASSA_PKCS1_v1_5_SHA384")
    return ALGORITHM_RSASSA_PKCS1_V1_5_SHA384;
  if (enum_string == "RSASSA_PKCS1_v1_5_SHA512")
    return ALGORITHM_RSASSA_PKCS1_V1_5_SHA512;
  if (enum_string == "RSASSA_PSS_SHA256")
    return ALGORITHM_RSASSA_PSS_SHA256;
  if (enum_string == "RSASSA_PSS_SHA384")
    return ALGORITHM_RSASSA_PSS_SHA384;
  if (enum_string == "RSASSA_PSS_SHA512")
    return ALGORITHM_RSASSA_PSS_SHA512;
  return ALGORITHM_NONE;
}

std::u16string GetAlgorithmParseError(base::StringPiece enum_string) {
  return u"expected \"RSASSA_PKCS1_v1_5_MD5_SHA1\" or \"RSASSA_PKCS1_v1_5_SHA1\" or \"RSASSA_PKCS1_v1_5_SHA256\" or \"RSASSA_PKCS1_v1_5_SHA384\" or \"RSASSA_PKCS1_v1_5_SHA512\" or \"RSASSA_PSS_SHA256\" or \"RSASSA_PSS_SHA384\" or \"RSASSA_PSS_SHA512\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(Error enum_param) {
  switch (enum_param) {
    case ERROR_GENERAL_ERROR:
      return "GENERAL_ERROR";
    case ERROR_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

Error ParseError(base::StringPiece enum_string) {
  if (enum_string == "GENERAL_ERROR")
    return ERROR_GENERAL_ERROR;
  return ERROR_NONE;
}

std::u16string GetErrorParseError(base::StringPiece enum_string) {
  return u"expected \"GENERAL_ERROR\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ClientCertificateInfo::ClientCertificateInfo()
 {}

ClientCertificateInfo::~ClientCertificateInfo() = default;
ClientCertificateInfo::ClientCertificateInfo(ClientCertificateInfo&& rhs) = default;
ClientCertificateInfo& ClientCertificateInfo::operator=(ClientCertificateInfo&& rhs) = default;
ClientCertificateInfo ClientCertificateInfo::Clone() const {
  ClientCertificateInfo out;
  out.certificate_chain = certificate_chain;
  out.supported_algorithms = supported_algorithms;
  return out;
}

// static
bool ClientCertificateInfo::Populate(
    const base::Value::Dict& dict, ClientCertificateInfo& out) {
  const base::Value* certificate_chain_value = dict.Find("certificateChain");
  if (!certificate_chain_value) {
    return false;
  }
  {
    if (!(*certificate_chain_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*certificate_chain_value).GetList(), out.certificate_chain)) {
        return false;
      }
    }
  }

  const base::Value* supported_algorithms_value = dict.Find("supportedAlgorithms");
  if (!supported_algorithms_value) {
    return false;
  }
  {
    if (!(*supported_algorithms_value).is_list()) {
      return false;
    }
    else {
      for (const auto& it : ((*supported_algorithms_value)).GetList()) {
        Algorithm tmp;
        const std::string* algorithm_as_string = (it).GetIfString();
        if (!algorithm_as_string) {
          return false;
        }
        tmp = ParseAlgorithm(*algorithm_as_string);
        if (tmp == Algorithm()) {
          return false;
        }
        out.supported_algorithms.push_back(tmp);
      }
    }
  }

  return true;
}

// static
bool ClientCertificateInfo::Populate(
    const base::Value& value, ClientCertificateInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ClientCertificateInfo> ClientCertificateInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ClientCertificateInfo>();
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
absl::optional<ClientCertificateInfo> ClientCertificateInfo::FromValue(const base::Value::Dict& value) {
  ClientCertificateInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ClientCertificateInfo> ClientCertificateInfo::FromValue(const base::Value& value) {
  ClientCertificateInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ClientCertificateInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("certificateChain", json_schema_compiler::util::CreateValueFromArray(this->certificate_chain));

  {
    std::vector<std::string> supportedAlgorithms_list;
    for (const auto& it : (this->supported_algorithms)) {
      supportedAlgorithms_list.emplace_back(certificate_provider::ToString(it));
    }
    to_value_result.Set("supportedAlgorithms", json_schema_compiler::util::CreateValueFromArray(supportedAlgorithms_list));
  }


  return to_value_result;
}


SetCertificatesDetails::SetCertificatesDetails()
: error() {}

SetCertificatesDetails::~SetCertificatesDetails() = default;
SetCertificatesDetails::SetCertificatesDetails(SetCertificatesDetails&& rhs) = default;
SetCertificatesDetails& SetCertificatesDetails::operator=(SetCertificatesDetails&& rhs) = default;
SetCertificatesDetails SetCertificatesDetails::Clone() const {
  SetCertificatesDetails out;
  out.certificates_request_id = certificates_request_id;
  out.error = error;
  out.client_certificates.reserve(client_certificates.size());
  for (const auto& element : client_certificates) {
    json_schema_compiler::util::AppendToContainer(out.client_certificates, element.Clone());
  }
  return out;
}

// static
bool SetCertificatesDetails::Populate(
    const base::Value::Dict& dict, SetCertificatesDetails& out) {
  out.error = Error();
  const base::Value* certificates_request_id_value = dict.Find("certificatesRequestId");
  if (certificates_request_id_value) {
    {
      auto temp = (*certificates_request_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.certificates_request_id = absl::nullopt;
        return false;
      }
      out.certificates_request_id = *temp;
    }
  }

  const base::Value* error_value = dict.Find("error");
  if (error_value) {
    {
      const std::string* error_as_string = (*error_value).GetIfString();
      if (!error_as_string) {
        return false;
      }
      out.error = ParseError(*error_as_string);
      if (out.error == Error()) {
        return false;
      }
    }
    } else {
    out.error = Error();
  }

  const base::Value* client_certificates_value = dict.Find("clientCertificates");
  if (!client_certificates_value) {
    return false;
  }
  {
    if (!(*client_certificates_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*client_certificates_value).GetList(), out.client_certificates)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool SetCertificatesDetails::Populate(
    const base::Value& value, SetCertificatesDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<SetCertificatesDetails> SetCertificatesDetails::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<SetCertificatesDetails>();
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
absl::optional<SetCertificatesDetails> SetCertificatesDetails::FromValue(const base::Value::Dict& value) {
  SetCertificatesDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<SetCertificatesDetails> SetCertificatesDetails::FromValue(const base::Value& value) {
  SetCertificatesDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict SetCertificatesDetails::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->certificates_request_id) {
    to_value_result.Set("certificatesRequestId", *this->certificates_request_id);

  }
  if (this->error != Error()) {
    to_value_result.Set("error", certificate_provider::ToString(this->error));

  }
  to_value_result.Set("clientCertificates", json_schema_compiler::util::CreateValueFromArray(this->client_certificates));


  return to_value_result;
}


CertificatesUpdateRequest::CertificatesUpdateRequest()
: certificates_request_id(0) {}

CertificatesUpdateRequest::~CertificatesUpdateRequest() = default;
CertificatesUpdateRequest::CertificatesUpdateRequest(CertificatesUpdateRequest&& rhs) = default;
CertificatesUpdateRequest& CertificatesUpdateRequest::operator=(CertificatesUpdateRequest&& rhs) = default;
CertificatesUpdateRequest CertificatesUpdateRequest::Clone() const {
  CertificatesUpdateRequest out;
  out.certificates_request_id = certificates_request_id;
  return out;
}

// static
bool CertificatesUpdateRequest::Populate(
    const base::Value::Dict& dict, CertificatesUpdateRequest& out) {
  const base::Value* certificates_request_id_value = dict.Find("certificatesRequestId");
  if (!certificates_request_id_value) {
    return false;
  }
  {
    auto temp = (*certificates_request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.certificates_request_id = *temp;
  }

  return true;
}

// static
bool CertificatesUpdateRequest::Populate(
    const base::Value& value, CertificatesUpdateRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<CertificatesUpdateRequest> CertificatesUpdateRequest::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<CertificatesUpdateRequest>();
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
absl::optional<CertificatesUpdateRequest> CertificatesUpdateRequest::FromValue(const base::Value::Dict& value) {
  CertificatesUpdateRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CertificatesUpdateRequest> CertificatesUpdateRequest::FromValue(const base::Value& value) {
  CertificatesUpdateRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict CertificatesUpdateRequest::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("certificatesRequestId", this->certificates_request_id);


  return to_value_result;
}


SignatureRequest::SignatureRequest()
: sign_request_id(0),
algorithm() {}

SignatureRequest::~SignatureRequest() = default;
SignatureRequest::SignatureRequest(SignatureRequest&& rhs) = default;
SignatureRequest& SignatureRequest::operator=(SignatureRequest&& rhs) = default;
SignatureRequest SignatureRequest::Clone() const {
  SignatureRequest out;
  out.sign_request_id = sign_request_id;
  out.input = input;
  out.algorithm = algorithm;
  out.certificate = certificate;
  return out;
}

// static
bool SignatureRequest::Populate(
    const base::Value::Dict& dict, SignatureRequest& out) {
  const base::Value* sign_request_id_value = dict.Find("signRequestId");
  if (!sign_request_id_value) {
    return false;
  }
  {
    auto temp = (*sign_request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.sign_request_id = *temp;
  }

  const base::Value* input_value = dict.Find("input");
  if (!input_value) {
    return false;
  }
  {
    if (!(*input_value).is_blob()) {
      return false;
    }
    else {
      out.input = (*input_value).GetBlob();
    }
  }

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

  return true;
}

// static
bool SignatureRequest::Populate(
    const base::Value& value, SignatureRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<SignatureRequest> SignatureRequest::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<SignatureRequest>();
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
absl::optional<SignatureRequest> SignatureRequest::FromValue(const base::Value::Dict& value) {
  SignatureRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<SignatureRequest> SignatureRequest::FromValue(const base::Value& value) {
  SignatureRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict SignatureRequest::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("signRequestId", this->sign_request_id);

  to_value_result.Set("input", base::Value(this->input));

  to_value_result.Set("algorithm", certificate_provider::ToString(this->algorithm));

  to_value_result.Set("certificate", base::Value(this->certificate));


  return to_value_result;
}


ReportSignatureDetails::ReportSignatureDetails()
: sign_request_id(0),
error() {}

ReportSignatureDetails::~ReportSignatureDetails() = default;
ReportSignatureDetails::ReportSignatureDetails(ReportSignatureDetails&& rhs) = default;
ReportSignatureDetails& ReportSignatureDetails::operator=(ReportSignatureDetails&& rhs) = default;
ReportSignatureDetails ReportSignatureDetails::Clone() const {
  ReportSignatureDetails out;
  out.sign_request_id = sign_request_id;
  out.error = error;
  out.signature = signature;
  return out;
}

// static
bool ReportSignatureDetails::Populate(
    const base::Value::Dict& dict, ReportSignatureDetails& out) {
  out.error = Error();
  const base::Value* sign_request_id_value = dict.Find("signRequestId");
  if (!sign_request_id_value) {
    return false;
  }
  {
    auto temp = (*sign_request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.sign_request_id = *temp;
  }

  const base::Value* error_value = dict.Find("error");
  if (error_value) {
    {
      const std::string* error_as_string = (*error_value).GetIfString();
      if (!error_as_string) {
        return false;
      }
      out.error = ParseError(*error_as_string);
      if (out.error == Error()) {
        return false;
      }
    }
    } else {
    out.error = Error();
  }

  const base::Value* signature_value = dict.Find("signature");
  if (signature_value) {
    {
      if (!(*signature_value).is_blob()) {
        return false;
      }
      else {
        out.signature = (*signature_value).GetBlob();
      }
    }
  }

  return true;
}

// static
bool ReportSignatureDetails::Populate(
    const base::Value& value, ReportSignatureDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ReportSignatureDetails> ReportSignatureDetails::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ReportSignatureDetails>();
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
absl::optional<ReportSignatureDetails> ReportSignatureDetails::FromValue(const base::Value::Dict& value) {
  ReportSignatureDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ReportSignatureDetails> ReportSignatureDetails::FromValue(const base::Value& value) {
  ReportSignatureDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ReportSignatureDetails::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("signRequestId", this->sign_request_id);

  if (this->error != Error()) {
    to_value_result.Set("error", certificate_provider::ToString(this->error));

  }
  if (this->signature) {
    to_value_result.Set("signature", base::Value(*this->signature));

  }

  return to_value_result;
}


const char* ToString(Hash enum_param) {
  switch (enum_param) {
    case HASH_MD5_SHA1:
      return "MD5_SHA1";
    case HASH_SHA1:
      return "SHA1";
    case HASH_SHA256:
      return "SHA256";
    case HASH_SHA384:
      return "SHA384";
    case HASH_SHA512:
      return "SHA512";
    case HASH_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

Hash ParseHash(base::StringPiece enum_string) {
  if (enum_string == "MD5_SHA1")
    return HASH_MD5_SHA1;
  if (enum_string == "SHA1")
    return HASH_SHA1;
  if (enum_string == "SHA256")
    return HASH_SHA256;
  if (enum_string == "SHA384")
    return HASH_SHA384;
  if (enum_string == "SHA512")
    return HASH_SHA512;
  return HASH_NONE;
}

std::u16string GetHashParseError(base::StringPiece enum_string) {
  return u"expected \"MD5_SHA1\" or \"SHA1\" or \"SHA256\" or \"SHA384\" or \"SHA512\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(PinRequestType enum_param) {
  switch (enum_param) {
    case PIN_REQUEST_TYPE_PIN:
      return "PIN";
    case PIN_REQUEST_TYPE_PUK:
      return "PUK";
    case PIN_REQUEST_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

PinRequestType ParsePinRequestType(base::StringPiece enum_string) {
  if (enum_string == "PIN")
    return PIN_REQUEST_TYPE_PIN;
  if (enum_string == "PUK")
    return PIN_REQUEST_TYPE_PUK;
  return PIN_REQUEST_TYPE_NONE;
}

std::u16string GetPinRequestTypeParseError(base::StringPiece enum_string) {
  return u"expected \"PIN\" or \"PUK\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(PinRequestErrorType enum_param) {
  switch (enum_param) {
    case PIN_REQUEST_ERROR_TYPE_INVALID_PIN:
      return "INVALID_PIN";
    case PIN_REQUEST_ERROR_TYPE_INVALID_PUK:
      return "INVALID_PUK";
    case PIN_REQUEST_ERROR_TYPE_MAX_ATTEMPTS_EXCEEDED:
      return "MAX_ATTEMPTS_EXCEEDED";
    case PIN_REQUEST_ERROR_TYPE_UNKNOWN_ERROR:
      return "UNKNOWN_ERROR";
    case PIN_REQUEST_ERROR_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

PinRequestErrorType ParsePinRequestErrorType(base::StringPiece enum_string) {
  if (enum_string == "INVALID_PIN")
    return PIN_REQUEST_ERROR_TYPE_INVALID_PIN;
  if (enum_string == "INVALID_PUK")
    return PIN_REQUEST_ERROR_TYPE_INVALID_PUK;
  if (enum_string == "MAX_ATTEMPTS_EXCEEDED")
    return PIN_REQUEST_ERROR_TYPE_MAX_ATTEMPTS_EXCEEDED;
  if (enum_string == "UNKNOWN_ERROR")
    return PIN_REQUEST_ERROR_TYPE_UNKNOWN_ERROR;
  return PIN_REQUEST_ERROR_TYPE_NONE;
}

std::u16string GetPinRequestErrorTypeParseError(base::StringPiece enum_string) {
  return u"expected \"INVALID_PIN\" or \"INVALID_PUK\" or \"MAX_ATTEMPTS_EXCEEDED\" or \"UNKNOWN_ERROR\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


CertificateInfo::CertificateInfo()
 {}

CertificateInfo::~CertificateInfo() = default;
CertificateInfo::CertificateInfo(CertificateInfo&& rhs) = default;
CertificateInfo& CertificateInfo::operator=(CertificateInfo&& rhs) = default;
CertificateInfo CertificateInfo::Clone() const {
  CertificateInfo out;
  out.certificate = certificate;
  out.supported_hashes = supported_hashes;
  return out;
}

// static
bool CertificateInfo::Populate(
    const base::Value::Dict& dict, CertificateInfo& out) {
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

  const base::Value* supported_hashes_value = dict.Find("supportedHashes");
  if (!supported_hashes_value) {
    return false;
  }
  {
    if (!(*supported_hashes_value).is_list()) {
      return false;
    }
    else {
      for (const auto& it : ((*supported_hashes_value)).GetList()) {
        Hash tmp;
        const std::string* hash_as_string = (it).GetIfString();
        if (!hash_as_string) {
          return false;
        }
        tmp = ParseHash(*hash_as_string);
        if (tmp == Hash()) {
          return false;
        }
        out.supported_hashes.push_back(tmp);
      }
    }
  }

  return true;
}

// static
bool CertificateInfo::Populate(
    const base::Value& value, CertificateInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<CertificateInfo> CertificateInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<CertificateInfo>();
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
absl::optional<CertificateInfo> CertificateInfo::FromValue(const base::Value::Dict& value) {
  CertificateInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CertificateInfo> CertificateInfo::FromValue(const base::Value& value) {
  CertificateInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict CertificateInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("certificate", base::Value(this->certificate));

  {
    std::vector<std::string> supportedHashes_list;
    for (const auto& it : (this->supported_hashes)) {
      supportedHashes_list.emplace_back(certificate_provider::ToString(it));
    }
    to_value_result.Set("supportedHashes", json_schema_compiler::util::CreateValueFromArray(supportedHashes_list));
  }


  return to_value_result;
}


SignRequest::SignRequest()
: sign_request_id(0),
hash() {}

SignRequest::~SignRequest() = default;
SignRequest::SignRequest(SignRequest&& rhs) = default;
SignRequest& SignRequest::operator=(SignRequest&& rhs) = default;
SignRequest SignRequest::Clone() const {
  SignRequest out;
  out.sign_request_id = sign_request_id;
  out.digest = digest;
  out.hash = hash;
  out.certificate = certificate;
  return out;
}

// static
bool SignRequest::Populate(
    const base::Value::Dict& dict, SignRequest& out) {
  const base::Value* sign_request_id_value = dict.Find("signRequestId");
  if (!sign_request_id_value) {
    return false;
  }
  {
    auto temp = (*sign_request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.sign_request_id = *temp;
  }

  const base::Value* digest_value = dict.Find("digest");
  if (!digest_value) {
    return false;
  }
  {
    if (!(*digest_value).is_blob()) {
      return false;
    }
    else {
      out.digest = (*digest_value).GetBlob();
    }
  }

  const base::Value* hash_value = dict.Find("hash");
  if (!hash_value) {
    return false;
  }
  {
    const std::string* hash_as_string = (*hash_value).GetIfString();
    if (!hash_as_string) {
      return false;
    }
    out.hash = ParseHash(*hash_as_string);
    if (out.hash == Hash()) {
      return false;
    }
  }

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

  return true;
}

// static
bool SignRequest::Populate(
    const base::Value& value, SignRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<SignRequest> SignRequest::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<SignRequest>();
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
absl::optional<SignRequest> SignRequest::FromValue(const base::Value::Dict& value) {
  SignRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<SignRequest> SignRequest::FromValue(const base::Value& value) {
  SignRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict SignRequest::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("signRequestId", this->sign_request_id);

  to_value_result.Set("digest", base::Value(this->digest));

  to_value_result.Set("hash", certificate_provider::ToString(this->hash));

  to_value_result.Set("certificate", base::Value(this->certificate));


  return to_value_result;
}


RequestPinDetails::RequestPinDetails()
: sign_request_id(0),
request_type(),
error_type() {}

RequestPinDetails::~RequestPinDetails() = default;
RequestPinDetails::RequestPinDetails(RequestPinDetails&& rhs) = default;
RequestPinDetails& RequestPinDetails::operator=(RequestPinDetails&& rhs) = default;
RequestPinDetails RequestPinDetails::Clone() const {
  RequestPinDetails out;
  out.sign_request_id = sign_request_id;
  out.request_type = request_type;
  out.error_type = error_type;
  out.attempts_left = attempts_left;
  return out;
}

// static
bool RequestPinDetails::Populate(
    const base::Value::Dict& dict, RequestPinDetails& out) {
  out.request_type = PinRequestType();
  out.error_type = PinRequestErrorType();
  const base::Value* sign_request_id_value = dict.Find("signRequestId");
  if (!sign_request_id_value) {
    return false;
  }
  {
    auto temp = (*sign_request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.sign_request_id = *temp;
  }

  const base::Value* request_type_value = dict.Find("requestType");
  if (request_type_value) {
    {
      const std::string* pin_request_type_as_string = (*request_type_value).GetIfString();
      if (!pin_request_type_as_string) {
        return false;
      }
      out.request_type = ParsePinRequestType(*pin_request_type_as_string);
      if (out.request_type == PinRequestType()) {
        return false;
      }
    }
    } else {
    out.request_type = PinRequestType();
  }

  const base::Value* error_type_value = dict.Find("errorType");
  if (error_type_value) {
    {
      const std::string* pin_request_error_type_as_string = (*error_type_value).GetIfString();
      if (!pin_request_error_type_as_string) {
        return false;
      }
      out.error_type = ParsePinRequestErrorType(*pin_request_error_type_as_string);
      if (out.error_type == PinRequestErrorType()) {
        return false;
      }
    }
    } else {
    out.error_type = PinRequestErrorType();
  }

  const base::Value* attempts_left_value = dict.Find("attemptsLeft");
  if (attempts_left_value) {
    {
      auto temp = (*attempts_left_value).GetIfInt();
      if (!temp.has_value()) {
        out.attempts_left = absl::nullopt;
        return false;
      }
      out.attempts_left = *temp;
    }
  }

  return true;
}

// static
bool RequestPinDetails::Populate(
    const base::Value& value, RequestPinDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<RequestPinDetails> RequestPinDetails::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<RequestPinDetails>();
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
absl::optional<RequestPinDetails> RequestPinDetails::FromValue(const base::Value::Dict& value) {
  RequestPinDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<RequestPinDetails> RequestPinDetails::FromValue(const base::Value& value) {
  RequestPinDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict RequestPinDetails::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("signRequestId", this->sign_request_id);

  if (this->request_type != PinRequestType()) {
    to_value_result.Set("requestType", certificate_provider::ToString(this->request_type));

  }
  if (this->error_type != PinRequestErrorType()) {
    to_value_result.Set("errorType", certificate_provider::ToString(this->error_type));

  }
  if (this->attempts_left) {
    to_value_result.Set("attemptsLeft", *this->attempts_left);

  }

  return to_value_result;
}


StopPinRequestDetails::StopPinRequestDetails()
: sign_request_id(0),
error_type() {}

StopPinRequestDetails::~StopPinRequestDetails() = default;
StopPinRequestDetails::StopPinRequestDetails(StopPinRequestDetails&& rhs) = default;
StopPinRequestDetails& StopPinRequestDetails::operator=(StopPinRequestDetails&& rhs) = default;
StopPinRequestDetails StopPinRequestDetails::Clone() const {
  StopPinRequestDetails out;
  out.sign_request_id = sign_request_id;
  out.error_type = error_type;
  return out;
}

// static
bool StopPinRequestDetails::Populate(
    const base::Value::Dict& dict, StopPinRequestDetails& out) {
  out.error_type = PinRequestErrorType();
  const base::Value* sign_request_id_value = dict.Find("signRequestId");
  if (!sign_request_id_value) {
    return false;
  }
  {
    auto temp = (*sign_request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.sign_request_id = *temp;
  }

  const base::Value* error_type_value = dict.Find("errorType");
  if (error_type_value) {
    {
      const std::string* pin_request_error_type_as_string = (*error_type_value).GetIfString();
      if (!pin_request_error_type_as_string) {
        return false;
      }
      out.error_type = ParsePinRequestErrorType(*pin_request_error_type_as_string);
      if (out.error_type == PinRequestErrorType()) {
        return false;
      }
    }
    } else {
    out.error_type = PinRequestErrorType();
  }

  return true;
}

// static
bool StopPinRequestDetails::Populate(
    const base::Value& value, StopPinRequestDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<StopPinRequestDetails> StopPinRequestDetails::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<StopPinRequestDetails>();
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
absl::optional<StopPinRequestDetails> StopPinRequestDetails::FromValue(const base::Value::Dict& value) {
  StopPinRequestDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<StopPinRequestDetails> StopPinRequestDetails::FromValue(const base::Value& value) {
  StopPinRequestDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict StopPinRequestDetails::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("signRequestId", this->sign_request_id);

  if (this->error_type != PinRequestErrorType()) {
    to_value_result.Set("errorType", certificate_provider::ToString(this->error_type));

  }

  return to_value_result;
}


PinResponseDetails::PinResponseDetails()
 {}

PinResponseDetails::~PinResponseDetails() = default;
PinResponseDetails::PinResponseDetails(PinResponseDetails&& rhs) = default;
PinResponseDetails& PinResponseDetails::operator=(PinResponseDetails&& rhs) = default;
PinResponseDetails PinResponseDetails::Clone() const {
  PinResponseDetails out;
  out.user_input = user_input;
  return out;
}

// static
bool PinResponseDetails::Populate(
    const base::Value::Dict& dict, PinResponseDetails& out) {
  const base::Value* user_input_value = dict.Find("userInput");
  if (user_input_value) {
    {
      auto* temp = (*user_input_value).GetIfString();
      if (!temp) {
        out.user_input = absl::nullopt;
        return false;
      }
      out.user_input = *temp;
    }
  }

  return true;
}

// static
bool PinResponseDetails::Populate(
    const base::Value& value, PinResponseDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<PinResponseDetails> PinResponseDetails::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<PinResponseDetails>();
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
absl::optional<PinResponseDetails> PinResponseDetails::FromValue(const base::Value::Dict& value) {
  PinResponseDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<PinResponseDetails> PinResponseDetails::FromValue(const base::Value& value) {
  PinResponseDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict PinResponseDetails::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->user_input) {
    to_value_result.Set("userInput", *this->user_input);

  }

  return to_value_result;
}



//
// Functions
//

namespace RequestPin {

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
      if (!RequestPinDetails::Populate(details_value.GetDict(), params.details)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const PinResponseDetails& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}
}  // namespace RequestPin

namespace StopPinRequest {

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
      if (!StopPinRequestDetails::Populate(details_value.GetDict(), params.details)) {
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
}  // namespace StopPinRequest

namespace SetCertificates {

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
      if (!SetCertificatesDetails::Populate(details_value.GetDict(), params.details)) {
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
}  // namespace SetCertificates

namespace ReportSignature {

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
      if (!ReportSignatureDetails::Populate(details_value.GetDict(), params.details)) {
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
}  // namespace ReportSignature

//
// Events
//

namespace OnCertificatesUpdateRequested {

const char kEventName[] = "certificateProvider.onCertificatesUpdateRequested";

base::Value::List Create(const CertificatesUpdateRequest& request) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((request).ToValue());

  return create_results;
}

}  // namespace OnCertificatesUpdateRequested

namespace OnSignatureRequested {

const char kEventName[] = "certificateProvider.onSignatureRequested";

base::Value::List Create(const SignatureRequest& request) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((request).ToValue());

  return create_results;
}

}  // namespace OnSignatureRequested

namespace OnCertificatesRequested {

const char kEventName[] = "certificateProvider.onCertificatesRequested";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnCertificatesRequested

namespace OnSignDigestRequested {

const char kEventName[] = "certificateProvider.onSignDigestRequested";

base::Value::List Create(const SignRequest& request) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((request).ToValue());

  return create_results;
}

}  // namespace OnSignDigestRequested

}  // namespace certificate_provider
}  // namespace api
}  // namespace extensions

