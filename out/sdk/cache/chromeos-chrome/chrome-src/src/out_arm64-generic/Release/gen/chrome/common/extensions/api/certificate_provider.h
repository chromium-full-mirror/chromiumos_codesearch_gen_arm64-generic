// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/certificate_provider.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_CERTIFICATE_PROVIDER_H__
#define CHROME_COMMON_EXTENSIONS_API_CERTIFICATE_PROVIDER_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace certificate_provider {

//
// Types
//

// Types of supported cryptographic signature algorithms.
enum  Algorithm {
  ALGORITHM_NONE = 0,
  ALGORITHM_RSASSA_PKCS1_V1_5_MD5_SHA1,
  ALGORITHM_RSASSA_PKCS1_V1_5_SHA1,
  ALGORITHM_RSASSA_PKCS1_V1_5_SHA256,
  ALGORITHM_RSASSA_PKCS1_V1_5_SHA384,
  ALGORITHM_RSASSA_PKCS1_V1_5_SHA512,
  ALGORITHM_RSASSA_PSS_SHA256,
  ALGORITHM_RSASSA_PSS_SHA384,
  ALGORITHM_RSASSA_PSS_SHA512,
  ALGORITHM_LAST = ALGORITHM_RSASSA_PSS_SHA512,
};


const char* ToString(Algorithm as_enum);
Algorithm ParseAlgorithm(base::StringPiece as_string);
std::u16string GetAlgorithmParseError(base::StringPiece as_string);

// Types of errors that the extension can report.
enum  Error {
  ERROR_NONE = 0,
  ERROR_GENERAL_ERROR,
  ERROR_LAST = ERROR_GENERAL_ERROR,
};


const char* ToString(Error as_enum);
Error ParseError(base::StringPiece as_string);
std::u16string GetErrorParseError(base::StringPiece as_string);

struct ClientCertificateInfo {
  ClientCertificateInfo();
  ~ClientCertificateInfo();
  ClientCertificateInfo(const ClientCertificateInfo&) = delete;
  ClientCertificateInfo& operator=(const ClientCertificateInfo&) = delete;
  ClientCertificateInfo(ClientCertificateInfo&& rhs);
  ClientCertificateInfo& operator=(ClientCertificateInfo&& rhs);

  // Populates a ClientCertificateInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ClientCertificateInfo& out);

  // Populates a ClientCertificateInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ClientCertificateInfo& out);

  // Creates a deep copy of ClientCertificateInfo.
  ClientCertificateInfo Clone() const;

  // Creates a ClientCertificateInfo object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ClientCertificateInfo> FromValueDeprecated(const base::Value& value);

  // Creates a ClientCertificateInfo object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<ClientCertificateInfo> FromValue(const base::Value::Dict& value);

  // Creates a ClientCertificateInfo object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ClientCertificateInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisClientCertificateInfo object.
  base::Value::Dict ToValue() const;

  // The array must contain the DER encoding of the X.509 client certificate as
  // its first element. <p>This must include exactly one certificate.</p>
  std::vector<std::vector<uint8_t>> certificate_chain;

  // All algorithms supported for this certificate. The extension will only be
  // asked for signatures using one of these algorithms.
  std::vector<Algorithm> supported_algorithms;

};

struct SetCertificatesDetails {
  SetCertificatesDetails();
  ~SetCertificatesDetails();
  SetCertificatesDetails(const SetCertificatesDetails&) = delete;
  SetCertificatesDetails& operator=(const SetCertificatesDetails&) = delete;
  SetCertificatesDetails(SetCertificatesDetails&& rhs);
  SetCertificatesDetails& operator=(SetCertificatesDetails&& rhs);

  // Populates a SetCertificatesDetails object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SetCertificatesDetails& out);

  // Populates a SetCertificatesDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SetCertificatesDetails& out);

  // Creates a deep copy of SetCertificatesDetails.
  SetCertificatesDetails Clone() const;

  // Creates a SetCertificatesDetails object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<SetCertificatesDetails> FromValueDeprecated(const base::Value& value);

  // Creates a SetCertificatesDetails object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<SetCertificatesDetails> FromValue(const base::Value::Dict& value);

  // Creates a SetCertificatesDetails object from a base::Value, or nullopt on
  // failure.
  static absl::optional<SetCertificatesDetails> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSetCertificatesDetails object.
  base::Value::Dict ToValue() const;

  // When called in response to $(ref:onCertificatesUpdateRequested), should
  // contain the received <code>certificatesRequestId</code> value. Otherwise,
  // should be unset.
  absl::optional<int> certificates_request_id;

  // Error that occurred while extracting the certificates, if any. This error
  // will be surfaced to the user when appropriate.
  Error error;

  // List of currently available client certificates.
  std::vector<ClientCertificateInfo> client_certificates;

};

struct CertificatesUpdateRequest {
  CertificatesUpdateRequest();
  ~CertificatesUpdateRequest();
  CertificatesUpdateRequest(const CertificatesUpdateRequest&) = delete;
  CertificatesUpdateRequest& operator=(const CertificatesUpdateRequest&) = delete;
  CertificatesUpdateRequest(CertificatesUpdateRequest&& rhs);
  CertificatesUpdateRequest& operator=(CertificatesUpdateRequest&& rhs);

  // Populates a CertificatesUpdateRequest object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CertificatesUpdateRequest& out);

  // Populates a CertificatesUpdateRequest object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CertificatesUpdateRequest& out);

  // Creates a deep copy of CertificatesUpdateRequest.
  CertificatesUpdateRequest Clone() const;

  // Creates a CertificatesUpdateRequest object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<CertificatesUpdateRequest> FromValueDeprecated(const base::Value& value);

  // Creates a CertificatesUpdateRequest object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<CertificatesUpdateRequest> FromValue(const base::Value::Dict& value);

  // Creates a CertificatesUpdateRequest object from a base::Value, or nullopt
  // on failure.
  static absl::optional<CertificatesUpdateRequest> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCertificatesUpdateRequest object.
  base::Value::Dict ToValue() const;

  // Request identifier to be passed to $(ref:setCertificates).
  int certificates_request_id;

};

struct SignatureRequest {
  SignatureRequest();
  ~SignatureRequest();
  SignatureRequest(const SignatureRequest&) = delete;
  SignatureRequest& operator=(const SignatureRequest&) = delete;
  SignatureRequest(SignatureRequest&& rhs);
  SignatureRequest& operator=(SignatureRequest&& rhs);

  // Populates a SignatureRequest object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SignatureRequest& out);

  // Populates a SignatureRequest object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SignatureRequest& out);

  // Creates a deep copy of SignatureRequest.
  SignatureRequest Clone() const;

  // Creates a SignatureRequest object from a base::Value, or NULL on failure.
  static std::unique_ptr<SignatureRequest> FromValueDeprecated(const base::Value& value);

  // Creates a SignatureRequest object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<SignatureRequest> FromValue(const base::Value::Dict& value);

  // Creates a SignatureRequest object from a base::Value, or nullopt on
  // failure.
  static absl::optional<SignatureRequest> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSignatureRequest object.
  base::Value::Dict ToValue() const;

  // Request identifier to be passed to $(ref:reportSignature).
  int sign_request_id;

  // Data to be signed. Note that the data is not hashed.
  std::vector<uint8_t> input;

  // Signature algorithm to be used.
  Algorithm algorithm;

  // The DER encoding of a X.509 certificate. The extension must sign
  // <code>input</code> using the associated private key.
  std::vector<uint8_t> certificate;

};

struct ReportSignatureDetails {
  ReportSignatureDetails();
  ~ReportSignatureDetails();
  ReportSignatureDetails(const ReportSignatureDetails&) = delete;
  ReportSignatureDetails& operator=(const ReportSignatureDetails&) = delete;
  ReportSignatureDetails(ReportSignatureDetails&& rhs);
  ReportSignatureDetails& operator=(ReportSignatureDetails&& rhs);

  // Populates a ReportSignatureDetails object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ReportSignatureDetails& out);

  // Populates a ReportSignatureDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ReportSignatureDetails& out);

  // Creates a deep copy of ReportSignatureDetails.
  ReportSignatureDetails Clone() const;

  // Creates a ReportSignatureDetails object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ReportSignatureDetails> FromValueDeprecated(const base::Value& value);

  // Creates a ReportSignatureDetails object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<ReportSignatureDetails> FromValue(const base::Value::Dict& value);

  // Creates a ReportSignatureDetails object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ReportSignatureDetails> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisReportSignatureDetails object.
  base::Value::Dict ToValue() const;

  // Request identifier that was received via the $(ref:onSignatureRequested)
  // event.
  int sign_request_id;

  // Error that occurred while generating the signature, if any.
  Error error;

  // The signature, if successfully generated.
  absl::optional<std::vector<uint8_t>> signature;

};

// Deprecated. Replaced by $(ref:Algorithm).
enum  Hash {
  HASH_NONE = 0,
  HASH_MD5_SHA1,
  HASH_SHA1,
  HASH_SHA256,
  HASH_SHA384,
  HASH_SHA512,
  HASH_LAST = HASH_SHA512,
};


const char* ToString(Hash as_enum);
Hash ParseHash(base::StringPiece as_string);
std::u16string GetHashParseError(base::StringPiece as_string);

// The type of code being requested by the extension with requestPin function.
enum  PinRequestType {
  PIN_REQUEST_TYPE_NONE = 0,
  PIN_REQUEST_TYPE_PIN,
  PIN_REQUEST_TYPE_PUK,
  PIN_REQUEST_TYPE_LAST = PIN_REQUEST_TYPE_PUK,
};


const char* ToString(PinRequestType as_enum);
PinRequestType ParsePinRequestType(base::StringPiece as_string);
std::u16string GetPinRequestTypeParseError(base::StringPiece as_string);

// The types of errors that can be presented to the user through the requestPin
// function.
enum  PinRequestErrorType {
  PIN_REQUEST_ERROR_TYPE_NONE = 0,
  PIN_REQUEST_ERROR_TYPE_INVALID_PIN,
  PIN_REQUEST_ERROR_TYPE_INVALID_PUK,
  PIN_REQUEST_ERROR_TYPE_MAX_ATTEMPTS_EXCEEDED,
  PIN_REQUEST_ERROR_TYPE_UNKNOWN_ERROR,
  PIN_REQUEST_ERROR_TYPE_LAST = PIN_REQUEST_ERROR_TYPE_UNKNOWN_ERROR,
};


const char* ToString(PinRequestErrorType as_enum);
PinRequestErrorType ParsePinRequestErrorType(base::StringPiece as_string);
std::u16string GetPinRequestErrorTypeParseError(base::StringPiece as_string);

struct CertificateInfo {
  CertificateInfo();
  ~CertificateInfo();
  CertificateInfo(const CertificateInfo&) = delete;
  CertificateInfo& operator=(const CertificateInfo&) = delete;
  CertificateInfo(CertificateInfo&& rhs);
  CertificateInfo& operator=(CertificateInfo&& rhs);

  // Populates a CertificateInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CertificateInfo& out);

  // Populates a CertificateInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CertificateInfo& out);

  // Creates a deep copy of CertificateInfo.
  CertificateInfo Clone() const;

  // Creates a CertificateInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<CertificateInfo> FromValueDeprecated(const base::Value& value);

  // Creates a CertificateInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<CertificateInfo> FromValue(const base::Value::Dict& value);

  // Creates a CertificateInfo object from a base::Value, or nullopt on failure.
  static absl::optional<CertificateInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCertificateInfo object.
  base::Value::Dict ToValue() const;

  // Must be the DER encoding of a X.509 certificate. Currently, only certificates
  // of RSA keys are supported.
  std::vector<uint8_t> certificate;

  // Must be set to all hashes supported for this certificate. This extension will
  // only be asked for signatures of digests calculated with one of these hash
  // algorithms. This should be in order of decreasing hash preference.
  std::vector<Hash> supported_hashes;

};

struct SignRequest {
  SignRequest();
  ~SignRequest();
  SignRequest(const SignRequest&) = delete;
  SignRequest& operator=(const SignRequest&) = delete;
  SignRequest(SignRequest&& rhs);
  SignRequest& operator=(SignRequest&& rhs);

  // Populates a SignRequest object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SignRequest& out);

  // Populates a SignRequest object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, SignRequest& out);

  // Creates a deep copy of SignRequest.
  SignRequest Clone() const;

  // Creates a SignRequest object from a base::Value, or NULL on failure.
  static std::unique_ptr<SignRequest> FromValueDeprecated(const base::Value& value);

  // Creates a SignRequest object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<SignRequest> FromValue(const base::Value::Dict& value);

  // Creates a SignRequest object from a base::Value, or nullopt on failure.
  static absl::optional<SignRequest> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSignRequest object.
  base::Value::Dict ToValue() const;

  // The unique ID to be used by the extension should it need to call a method
  // that requires it, e.g. requestPin.
  int sign_request_id;

  // The digest that must be signed.
  std::vector<uint8_t> digest;

  // Refers to the hash algorithm that was used to create <code>digest</code>.
  Hash hash;

  // The DER encoding of a X.509 certificate. The extension must sign
  // <code>digest</code> using the associated private key.
  std::vector<uint8_t> certificate;

};

struct RequestPinDetails {
  RequestPinDetails();
  ~RequestPinDetails();
  RequestPinDetails(const RequestPinDetails&) = delete;
  RequestPinDetails& operator=(const RequestPinDetails&) = delete;
  RequestPinDetails(RequestPinDetails&& rhs);
  RequestPinDetails& operator=(RequestPinDetails&& rhs);

  // Populates a RequestPinDetails object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RequestPinDetails& out);

  // Populates a RequestPinDetails object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RequestPinDetails& out);

  // Creates a deep copy of RequestPinDetails.
  RequestPinDetails Clone() const;

  // Creates a RequestPinDetails object from a base::Value, or NULL on failure.
  static std::unique_ptr<RequestPinDetails> FromValueDeprecated(const base::Value& value);

  // Creates a RequestPinDetails object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<RequestPinDetails> FromValue(const base::Value::Dict& value);

  // Creates a RequestPinDetails object from a base::Value, or nullopt on
  // failure.
  static absl::optional<RequestPinDetails> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRequestPinDetails object.
  base::Value::Dict ToValue() const;

  // The ID given by Chrome in SignRequest.
  int sign_request_id;

  // The type of code requested. Default is PIN.
  PinRequestType request_type;

  // The error template displayed to the user. This should be set if the previous
  // request failed, to notify the user of the failure reason.
  PinRequestErrorType error_type;

  // The number of attempts left. This is provided so that any UI can present this
  // information to the user. Chrome is not expected to enforce this, instead
  // stopPinRequest should be called by the extension with errorType =
  // MAX_ATTEMPTS_EXCEEDED when the number of pin requests is exceeded.
  absl::optional<int> attempts_left;

};

struct StopPinRequestDetails {
  StopPinRequestDetails();
  ~StopPinRequestDetails();
  StopPinRequestDetails(const StopPinRequestDetails&) = delete;
  StopPinRequestDetails& operator=(const StopPinRequestDetails&) = delete;
  StopPinRequestDetails(StopPinRequestDetails&& rhs);
  StopPinRequestDetails& operator=(StopPinRequestDetails&& rhs);

  // Populates a StopPinRequestDetails object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, StopPinRequestDetails& out);

  // Populates a StopPinRequestDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, StopPinRequestDetails& out);

  // Creates a deep copy of StopPinRequestDetails.
  StopPinRequestDetails Clone() const;

  // Creates a StopPinRequestDetails object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<StopPinRequestDetails> FromValueDeprecated(const base::Value& value);

  // Creates a StopPinRequestDetails object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<StopPinRequestDetails> FromValue(const base::Value::Dict& value);

  // Creates a StopPinRequestDetails object from a base::Value, or nullopt on
  // failure.
  static absl::optional<StopPinRequestDetails> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisStopPinRequestDetails object.
  base::Value::Dict ToValue() const;

  // The ID given by Chrome in SignRequest.
  int sign_request_id;

  // The error template. If present it is displayed to user. Intended to contain
  // the reason for stopping the flow if it was caused by an error, e.g.
  // MAX_ATTEMPTS_EXCEEDED.
  PinRequestErrorType error_type;

};

struct PinResponseDetails {
  PinResponseDetails();
  ~PinResponseDetails();
  PinResponseDetails(const PinResponseDetails&) = delete;
  PinResponseDetails& operator=(const PinResponseDetails&) = delete;
  PinResponseDetails(PinResponseDetails&& rhs);
  PinResponseDetails& operator=(PinResponseDetails&& rhs);

  // Populates a PinResponseDetails object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PinResponseDetails& out);

  // Populates a PinResponseDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PinResponseDetails& out);

  // Creates a deep copy of PinResponseDetails.
  PinResponseDetails Clone() const;

  // Creates a PinResponseDetails object from a base::Value, or NULL on failure.
  static std::unique_ptr<PinResponseDetails> FromValueDeprecated(const base::Value& value);

  // Creates a PinResponseDetails object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<PinResponseDetails> FromValue(const base::Value::Dict& value);

  // Creates a PinResponseDetails object from a base::Value, or nullopt on
  // failure.
  static absl::optional<PinResponseDetails> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPinResponseDetails object.
  base::Value::Dict ToValue() const;

  // The code provided by the user. Empty if user closed the dialog or some other
  // error occurred.
  absl::optional<std::string> user_input;

};


//
// Functions
//

namespace RequestPin {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Contains the details about the requested dialog.
  RequestPinDetails details;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const PinResponseDetails& details);
}  // namespace Results

}  // namespace RequestPin

namespace StopPinRequest {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Contains the details about the reason for stopping the request flow.
  StopPinRequestDetails details;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace StopPinRequest

namespace SetCertificates {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The certificates to set. Invalid certificates will be ignored.
  SetCertificatesDetails details;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetCertificates

namespace ReportSignature {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  ReportSignatureDetails details;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ReportSignature

//
// Events
//

namespace OnCertificatesUpdateRequested {

extern const char kEventName[];  // "certificateProvider.onCertificatesUpdateRequested"

base::Value::List Create(const CertificatesUpdateRequest& request);
}  // namespace OnCertificatesUpdateRequested

namespace OnSignatureRequested {

extern const char kEventName[];  // "certificateProvider.onSignatureRequested"

base::Value::List Create(const SignatureRequest& request);
}  // namespace OnSignatureRequested

namespace OnCertificatesRequested {

extern const char kEventName[];  // "certificateProvider.onCertificatesRequested"

base::Value::List Create();
}  // namespace OnCertificatesRequested

namespace OnSignDigestRequested {

extern const char kEventName[];  // "certificateProvider.onSignDigestRequested"

// Contains the details about the sign request.
base::Value::List Create(const SignRequest& request);
}  // namespace OnSignDigestRequested

}  // namespace certificate_provider
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_CERTIFICATE_PROVIDER_H__
