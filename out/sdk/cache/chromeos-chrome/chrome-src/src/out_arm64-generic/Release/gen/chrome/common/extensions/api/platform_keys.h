// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/platform_keys.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_PLATFORM_KEYS_H__
#define CHROME_COMMON_EXTENSIONS_API_PLATFORM_KEYS_H__

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
namespace platform_keys {

//
// Types
//

struct Match {
  Match();
  ~Match();
  Match(const Match&) = delete;
  Match& operator=(const Match&) = delete;
  Match(Match&& rhs) noexcept;
  Match& operator=(Match&& rhs) noexcept;

  // Populates a Match object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Match& out);

  // Populates a Match object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Match& out);

  // Creates a deep copy of Match.
  Match Clone() const;

  // Creates a Match object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Match> FromValue(const base::Value::Dict& value);

  // Creates a Match object from a base::Value, or nullopt on failure.
  static std::optional<Match> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMatch object.
  base::Value::Dict ToValue() const;

  // The <a href="http://www.w3.org/TR/WebCryptoAPI/#key-algorithm-dictionary">
  // KeyAlgorithm</a> of the certified key. This contains algorithm parameters
  // that are inherent to the key of the certificate (e.g. the key length). Other
  // parameters like the hash function used by the sign function are not included.
  struct KeyAlgorithm {
    KeyAlgorithm();
    ~KeyAlgorithm();
    KeyAlgorithm(const KeyAlgorithm&) = delete;
    KeyAlgorithm& operator=(const KeyAlgorithm&) = delete;
    KeyAlgorithm(KeyAlgorithm&& rhs) noexcept;
    KeyAlgorithm& operator=(KeyAlgorithm&& rhs) noexcept;

    // Populates a KeyAlgorithm object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, KeyAlgorithm& out);

    // Populates a KeyAlgorithm object from a Dict& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value::Dict& value, KeyAlgorithm& out);

    // Creates a deep copy of KeyAlgorithm.
    KeyAlgorithm Clone() const;

    // Creates a KeyAlgorithm object from a base::Value::Dict, or nullopt on
    // failure.
    static std::optional<KeyAlgorithm> FromValue(const base::Value::Dict& value);

    // Creates a KeyAlgorithm object from a base::Value, or nullopt on failure.
    static std::optional<KeyAlgorithm> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisKeyAlgorithm object.
    base::Value::Dict ToValue() const;

    base::Value::Dict additional_properties;
  };


  // The DER encoding of a X.509 certificate.
  std::vector<uint8_t> certificate;

  // The <a href="http://www.w3.org/TR/WebCryptoAPI/#key-algorithm-dictionary">
  // KeyAlgorithm</a> of the certified key. This contains algorithm parameters
  // that are inherent to the key of the certificate (e.g. the key length). Other
  // parameters like the hash function used by the sign function are not included.
  KeyAlgorithm key_algorithm;

};

enum class ClientCertificateType {
  kNone = 0,
  kRsaSign,
  kEcdsaSign,
  kMaxValue = kEcdsaSign,
};


const char* ToString(ClientCertificateType as_enum);
ClientCertificateType ParseClientCertificateType(base::StringPiece as_string);
std::u16string GetClientCertificateTypeParseError(base::StringPiece as_string);

struct ClientCertificateRequest {
  ClientCertificateRequest();
  ~ClientCertificateRequest();
  ClientCertificateRequest(const ClientCertificateRequest&) = delete;
  ClientCertificateRequest& operator=(const ClientCertificateRequest&) = delete;
  ClientCertificateRequest(ClientCertificateRequest&& rhs) noexcept;
  ClientCertificateRequest& operator=(ClientCertificateRequest&& rhs) noexcept;

  // Populates a ClientCertificateRequest object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ClientCertificateRequest& out);

  // Populates a ClientCertificateRequest object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ClientCertificateRequest& out);

  // Creates a deep copy of ClientCertificateRequest.
  ClientCertificateRequest Clone() const;

  // Creates a ClientCertificateRequest object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<ClientCertificateRequest> FromValue(const base::Value::Dict& value);

  // Creates a ClientCertificateRequest object from a base::Value, or nullopt on
  // failure.
  static std::optional<ClientCertificateRequest> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisClientCertificateRequest object.
  base::Value::Dict ToValue() const;

  // This field is a list of the types of certificates requested, sorted in order
  // of the server's preference. Only certificates of a type contained in this
  // list will be retrieved. If <code>certificateTypes</code> is the empty list,
  // however, certificates of any type will be returned.
  std::vector<ClientCertificateType> certificate_types;

  // List of distinguished names of certificate authorities allowed by the server.
  // Each entry must be a DER-encoded X.509 DistinguishedName.
  std::vector<std::vector<uint8_t>> certificate_authorities;

};

struct SelectDetails {
  SelectDetails();
  ~SelectDetails();
  SelectDetails(const SelectDetails&) = delete;
  SelectDetails& operator=(const SelectDetails&) = delete;
  SelectDetails(SelectDetails&& rhs) noexcept;
  SelectDetails& operator=(SelectDetails&& rhs) noexcept;

  // Populates a SelectDetails object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SelectDetails& out);

  // Populates a SelectDetails object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SelectDetails& out);

  // Creates a deep copy of SelectDetails.
  SelectDetails Clone() const;

  // Creates a SelectDetails object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<SelectDetails> FromValue(const base::Value::Dict& value);

  // Creates a SelectDetails object from a base::Value, or nullopt on failure.
  static std::optional<SelectDetails> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSelectDetails object.
  base::Value::Dict ToValue() const;

  // Only certificates that match this request will be returned.
  ClientCertificateRequest request;

  // If given, the <code>selectClientCertificates</code> operates on this list.
  // Otherwise, obtains the list of all certificates from the platform's
  // certificate stores that are available to this extensions. Entries that the
  // extension doesn't have permission for or which doesn't match the request, are
  // removed.
  std::optional<std::vector<std::vector<uint8_t>>> client_certs;

  // If true, the filtered list is presented to the user to manually select a
  // certificate and thereby granting the extension access to the certificate(s)
  // and key(s). Only the selected certificate(s) will be returned. If is false,
  // the list is reduced to all certificates that the extension has been granted
  // access to (automatically or manually).
  bool interactive;

};

struct VerificationDetails {
  VerificationDetails();
  ~VerificationDetails();
  VerificationDetails(const VerificationDetails&) = delete;
  VerificationDetails& operator=(const VerificationDetails&) = delete;
  VerificationDetails(VerificationDetails&& rhs) noexcept;
  VerificationDetails& operator=(VerificationDetails&& rhs) noexcept;

  // Populates a VerificationDetails object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, VerificationDetails& out);

  // Populates a VerificationDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, VerificationDetails& out);

  // Creates a deep copy of VerificationDetails.
  VerificationDetails Clone() const;

  // Creates a VerificationDetails object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<VerificationDetails> FromValue(const base::Value::Dict& value);

  // Creates a VerificationDetails object from a base::Value, or nullopt on
  // failure.
  static std::optional<VerificationDetails> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisVerificationDetails object.
  base::Value::Dict ToValue() const;

  // Each chain entry must be the DER encoding of a X.509 certificate, the first
  // entry must be the server certificate and each entry must certify the entry
  // preceding it.
  std::vector<std::vector<uint8_t>> server_certificate_chain;

  // The hostname of the server to verify the certificate for, e.g. the server
  // that presented the <code>serverCertificateChain</code>.
  std::string hostname;

};

struct VerificationResult {
  VerificationResult();
  ~VerificationResult();
  VerificationResult(const VerificationResult&) = delete;
  VerificationResult& operator=(const VerificationResult&) = delete;
  VerificationResult(VerificationResult&& rhs) noexcept;
  VerificationResult& operator=(VerificationResult&& rhs) noexcept;

  // Populates a VerificationResult object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, VerificationResult& out);

  // Populates a VerificationResult object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, VerificationResult& out);

  // Creates a deep copy of VerificationResult.
  VerificationResult Clone() const;

  // Creates a VerificationResult object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<VerificationResult> FromValue(const base::Value::Dict& value);

  // Creates a VerificationResult object from a base::Value, or nullopt on
  // failure.
  static std::optional<VerificationResult> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisVerificationResult object.
  base::Value::Dict ToValue() const;

  // The result of the trust verification: true if trust for the given
  // verification details could be established and false if trust is rejected for
  // any reason.
  bool trusted;

  // <p>If the trust verification failed, this array contains the errors reported
  // by the underlying network layer. Otherwise, this array is
  // empty.</p><p><strong>Note:</strong> This list is meant for debugging only and
  // may not contain all relevant errors. The errors returned may change in future
  // revisions of this API, and are not guaranteed to be forwards or backwards
  // compatible.</p>
  std::vector<std::string> debug_errors;

};


//
// Functions
//

namespace VerifyTLSServerCertificate {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  VerificationDetails details;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const VerificationResult& result);
}  // namespace Results

}  // namespace VerifyTLSServerCertificate

}  // namespace platform_keys
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_PLATFORM_KEYS_H__
