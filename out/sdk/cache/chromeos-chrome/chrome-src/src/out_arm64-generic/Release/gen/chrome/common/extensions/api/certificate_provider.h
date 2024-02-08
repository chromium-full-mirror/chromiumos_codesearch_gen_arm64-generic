// Copyright 2024 The Chromium Authors
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
#include <optional>
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
enum class Algorithm {
  kNone = 0,
  kRsassaPkcs1V1_5Md5Sha1,
  kRsassaPkcs1V1_5Sha1,
  kRsassaPkcs1V1_5Sha256,
  kRsassaPkcs1V1_5Sha384,
  kRsassaPkcs1V1_5Sha512,
  kRsassaPssSha256,
  kRsassaPssSha384,
  kRsassaPssSha512,
  kMaxValue = kRsassaPssSha512,
};


const char* ToString(Algorithm as_enum);
Algorithm ParseAlgorithm(base::StringPiece as_string);
std::u16string GetAlgorithmParseError(base::StringPiece as_string);

// Types of errors that the extension can report.
enum class Error {
  kNone = 0,
  kGeneralError,
  kMaxValue = kGeneralError,
};


const char* ToString(Error as_enum);
Error ParseError(base::StringPiece as_string);
std::u16string GetErrorParseError(base::StringPiece as_string);

struct ClientCertificateInfo {
  ClientCertificateInfo();
  ~ClientCertificateInfo();
  ClientCertificateInfo(const ClientCertificateInfo&) = delete;
  ClientCertificateInfo& operator=(const ClientCertificateInfo&) = delete;
  ClientCertificateInfo(ClientCertificateInfo&& rhs) noexcept;
  ClientCertificateInfo& operator=(ClientCertificateInfo&& rhs) noexcept;

  // Populates a ClientCertificateInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ClientCertificateInfo& out);

  // Populates a ClientCertificateInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ClientCertificateInfo& out);

  // Creates a deep copy of ClientCertificateInfo.
  ClientCertificateInfo Clone() const;

  // Creates a ClientCertificateInfo object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<ClientCertificateInfo> FromValue(const base::Value::Dict& value);

  // Creates a ClientCertificateInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<ClientCertificateInfo> FromValue(const base::Value& value);

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
  SetCertificatesDetails(SetCertificatesDetails&& rhs) noexcept;
  SetCertificatesDetails& operator=(SetCertificatesDetails&& rhs) noexcept;

  // Populates a SetCertificatesDetails object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SetCertificatesDetails& out);

  // Populates a SetCertificatesDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SetCertificatesDetails& out);

  // Creates a deep copy of SetCertificatesDetails.
  SetCertificatesDetails Clone() const;

  // Creates a SetCertificatesDetails object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<SetCertificatesDetails> FromValue(const base::Value::Dict& value);

  // Creates a SetCertificatesDetails object from a base::Value, or nullopt on
  // failure.
  static std::optional<SetCertificatesDetails> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSetCertificatesDetails object.
  base::Value::Dict ToValue() const;

  // When called in response to $(ref:onCertificatesUpdateRequested), should
  // contain the received <code>certificatesRequestId</code> value. Otherwise,
  // should be unset.
  std::optional<int> certificates_request_id;

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
  CertificatesUpdateRequest(CertificatesUpdateRequest&& rhs) noexcept;
  CertificatesUpdateRequest& operator=(CertificatesUpdateRequest&& rhs) noexcept;

  // Populates a CertificatesUpdateRequest object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CertificatesUpdateRequest& out);

  // Populates a CertificatesUpdateRequest object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CertificatesUpdateRequest& out);

  // Creates a deep copy of CertificatesUpdateRequest.
  CertificatesUpdateRequest Clone() const;

  // Creates a CertificatesUpdateRequest object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<CertificatesUpdateRequest> FromValue(const base::Value::Dict& value);

  // Creates a CertificatesUpdateRequest object from a base::Value, or nullopt
  // on failure.
  static std::optional<CertificatesUpdateRequest> FromValue(const base::Value& value);

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
  SignatureRequest(SignatureRequest&& rhs) noexcept;
  SignatureRequest& operator=(SignatureRequest&& rhs) noexcept;

  // Populates a SignatureRequest object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SignatureRequest& out);

  // Populates a SignatureRequest object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SignatureRequest& out);

  // Creates a deep copy of SignatureRequest.
  SignatureRequest Clone() const;

  // Creates a SignatureRequest object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<SignatureRequest> FromValue(const base::Value::Dict& value);

  // Creates a SignatureRequest object from a base::Value, or nullopt on
  // failure.
  static std::optional<SignatureRequest> FromValue(const base::Value& value);

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
  ReportSignatureDetails(ReportSignatureDetails&& rhs) noexcept;
  ReportSignatureDetails& operator=(ReportSignatureDetails&& rhs) noexcept;

  // Populates a ReportSignatureDetails object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ReportSignatureDetails& out);

  // Populates a ReportSignatureDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ReportSignatureDetails& out);

  // Creates a deep copy of ReportSignatureDetails.
  ReportSignatureDetails Clone() const;

  // Creates a ReportSignatureDetails object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<ReportSignatureDetails> FromValue(const base::Value::Dict& value);

  // Creates a ReportSignatureDetails object from a base::Value, or nullopt on
  // failure.
  static std::optional<ReportSignatureDetails> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisReportSignatureDetails object.
  base::Value::Dict ToValue() const;

  // Request identifier that was received via the $(ref:onSignatureRequested)
  // event.
  int sign_request_id;

  // Error that occurred while generating the signature, if any.
  Error error;

  // The signature, if successfully generated.
  std::optional<std::vector<uint8_t>> signature;

};

// Deprecated. Replaced by $(ref:Algorithm).
enum class Hash {
  kNone = 0,
  kMd5Sha1,
  kSha1,
  kSha256,
  kSha384,
  kSha512,
  kMaxValue = kSha512,
};


const char* ToString(Hash as_enum);
Hash ParseHash(base::StringPiece as_string);
std::u16string GetHashParseError(base::StringPiece as_string);

// The type of code being requested by the extension with requestPin function.
enum class PinRequestType {
  kNone = 0,
  kPin,
  kPuk,
  kMaxValue = kPuk,
};


const char* ToString(PinRequestType as_enum);
PinRequestType ParsePinRequestType(base::StringPiece as_string);
std::u16string GetPinRequestTypeParseError(base::StringPiece as_string);

// The types of errors that can be presented to the user through the requestPin
// function.
enum class PinRequestErrorType {
  kNone = 0,
  kInvalidPin,
  kInvalidPuk,
  kMaxAttemptsExceeded,
  kUnknownError,
  kMaxValue = kUnknownError,
};


const char* ToString(PinRequestErrorType as_enum);
PinRequestErrorType ParsePinRequestErrorType(base::StringPiece as_string);
std::u16string GetPinRequestErrorTypeParseError(base::StringPiece as_string);

struct CertificateInfo {
  CertificateInfo();
  ~CertificateInfo();
  CertificateInfo(const CertificateInfo&) = delete;
  CertificateInfo& operator=(const CertificateInfo&) = delete;
  CertificateInfo(CertificateInfo&& rhs) noexcept;
  CertificateInfo& operator=(CertificateInfo&& rhs) noexcept;

  // Populates a CertificateInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CertificateInfo& out);

  // Populates a CertificateInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CertificateInfo& out);

  // Creates a deep copy of CertificateInfo.
  CertificateInfo Clone() const;

  // Creates a CertificateInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<CertificateInfo> FromValue(const base::Value::Dict& value);

  // Creates a CertificateInfo object from a base::Value, or nullopt on failure.
  static std::optional<CertificateInfo> FromValue(const base::Value& value);

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
  SignRequest(SignRequest&& rhs) noexcept;
  SignRequest& operator=(SignRequest&& rhs) noexcept;

  // Populates a SignRequest object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SignRequest& out);

  // Populates a SignRequest object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, SignRequest& out);

  // Creates a deep copy of SignRequest.
  SignRequest Clone() const;

  // Creates a SignRequest object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<SignRequest> FromValue(const base::Value::Dict& value);

  // Creates a SignRequest object from a base::Value, or nullopt on failure.
  static std::optional<SignRequest> FromValue(const base::Value& value);

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
  RequestPinDetails(RequestPinDetails&& rhs) noexcept;
  RequestPinDetails& operator=(RequestPinDetails&& rhs) noexcept;

  // Populates a RequestPinDetails object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RequestPinDetails& out);

  // Populates a RequestPinDetails object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RequestPinDetails& out);

  // Creates a deep copy of RequestPinDetails.
  RequestPinDetails Clone() const;

  // Creates a RequestPinDetails object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<RequestPinDetails> FromValue(const base::Value::Dict& value);

  // Creates a RequestPinDetails object from a base::Value, or nullopt on
  // failure.
  static std::optional<RequestPinDetails> FromValue(const base::Value& value);

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
  std::optional<int> attempts_left;

};

struct StopPinRequestDetails {
  StopPinRequestDetails();
  ~StopPinRequestDetails();
  StopPinRequestDetails(const StopPinRequestDetails&) = delete;
  StopPinRequestDetails& operator=(const StopPinRequestDetails&) = delete;
  StopPinRequestDetails(StopPinRequestDetails&& rhs) noexcept;
  StopPinRequestDetails& operator=(StopPinRequestDetails&& rhs) noexcept;

  // Populates a StopPinRequestDetails object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, StopPinRequestDetails& out);

  // Populates a StopPinRequestDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, StopPinRequestDetails& out);

  // Creates a deep copy of StopPinRequestDetails.
  StopPinRequestDetails Clone() const;

  // Creates a StopPinRequestDetails object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<StopPinRequestDetails> FromValue(const base::Value::Dict& value);

  // Creates a StopPinRequestDetails object from a base::Value, or nullopt on
  // failure.
  static std::optional<StopPinRequestDetails> FromValue(const base::Value& value);

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
  PinResponseDetails(PinResponseDetails&& rhs) noexcept;
  PinResponseDetails& operator=(PinResponseDetails&& rhs) noexcept;

  // Populates a PinResponseDetails object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PinResponseDetails& out);

  // Populates a PinResponseDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PinResponseDetails& out);

  // Creates a deep copy of PinResponseDetails.
  PinResponseDetails Clone() const;

  // Creates a PinResponseDetails object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<PinResponseDetails> FromValue(const base::Value::Dict& value);

  // Creates a PinResponseDetails object from a base::Value, or nullopt on
  // failure.
  static std::optional<PinResponseDetails> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPinResponseDetails object.
  base::Value::Dict ToValue() const;

  // The code provided by the user. Empty if user closed the dialog or some other
  // error occurred.
  std::optional<std::string> user_input;

};


//
// Functions
//

namespace RequestPin {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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

// Call this exactly once with the list of certificates that this extension is
// providing. The list must only contain certificates for which the extension
// can sign data using the associated private key. If the list contains invalid
// certificates, these will be ignored. All valid certificates are still
// registered for the extension. Chrome will call back with the list of rejected
// certificates, which might be empty.
base::Value::List Create(base::Value::Dict report_callback);
}  // namespace OnCertificatesRequested

namespace OnSignDigestRequested {

extern const char kEventName[];  // "certificateProvider.onSignDigestRequested"

// Contains the details about the sign request.
// If no error occurred, this function must be called with the signature of the
// digest using the private key of the requested certificate. For an RSA key,
// the signature must be a PKCS#1 signature. The extension is responsible for
// prepending the DigestInfo prefix and adding PKCS#1 padding. If an error
// occurred, this callback should be called without signature.
base::Value::List Create(const SignRequest& request, base::Value::Dict report_callback);
}  // namespace OnSignDigestRequested

}  // namespace certificate_provider
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_CERTIFICATE_PROVIDER_H__
