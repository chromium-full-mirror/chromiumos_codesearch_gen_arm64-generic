// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/web_authentication_proxy.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_WEB_AUTHENTICATION_PROXY_H__
#define CHROME_COMMON_EXTENSIONS_API_WEB_AUTHENTICATION_PROXY_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace web_authentication_proxy {

//
// Types
//

struct IsUvpaaRequest {
  IsUvpaaRequest();
  ~IsUvpaaRequest();
  IsUvpaaRequest(const IsUvpaaRequest&) = delete;
  IsUvpaaRequest& operator=(const IsUvpaaRequest&) = delete;
  IsUvpaaRequest(IsUvpaaRequest&& rhs);
  IsUvpaaRequest& operator=(IsUvpaaRequest&& rhs);

  // Populates a IsUvpaaRequest object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, IsUvpaaRequest& out);

  // Populates a IsUvpaaRequest object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, IsUvpaaRequest& out);

  // Creates a deep copy of IsUvpaaRequest.
  IsUvpaaRequest Clone() const;

  // Creates a IsUvpaaRequest object from a base::Value, or NULL on failure.
  static std::unique_ptr<IsUvpaaRequest> FromValueDeprecated(const base::Value& value);

  // Creates a IsUvpaaRequest object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<IsUvpaaRequest> FromValue(const base::Value::Dict& value);

  // Creates a IsUvpaaRequest object from a base::Value, or nullopt on failure.
  static absl::optional<IsUvpaaRequest> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisIsUvpaaRequest object.
  base::Value::Dict ToValue() const;

  // An opaque identifier for the request.
  int request_id;

};

struct CreateRequest {
  CreateRequest();
  ~CreateRequest();
  CreateRequest(const CreateRequest&) = delete;
  CreateRequest& operator=(const CreateRequest&) = delete;
  CreateRequest(CreateRequest&& rhs);
  CreateRequest& operator=(CreateRequest&& rhs);

  // Populates a CreateRequest object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CreateRequest& out);

  // Populates a CreateRequest object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CreateRequest& out);

  // Creates a deep copy of CreateRequest.
  CreateRequest Clone() const;

  // Creates a CreateRequest object from a base::Value, or NULL on failure.
  static std::unique_ptr<CreateRequest> FromValueDeprecated(const base::Value& value);

  // Creates a CreateRequest object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<CreateRequest> FromValue(const base::Value::Dict& value);

  // Creates a CreateRequest object from a base::Value, or nullopt on failure.
  static absl::optional<CreateRequest> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCreateRequest object.
  base::Value::Dict ToValue() const;

  // An opaque identifier for the request.
  int request_id;

  // The <code>PublicKeyCredentialCreationOptions</code> passed to
  // <code>navigator.credentials.create()</code>, serialized as a JSON string. The
  // serialization format is compatible with <a
  // href="https://w3c.github.io/webauthn/#sctn-parseCreationOptionsFromJSON">
  // <code>PublicKeyCredential.parseCreationOptionsFromJSON()</code></a>.
  std::string request_details_json;

};

struct GetRequest {
  GetRequest();
  ~GetRequest();
  GetRequest(const GetRequest&) = delete;
  GetRequest& operator=(const GetRequest&) = delete;
  GetRequest(GetRequest&& rhs);
  GetRequest& operator=(GetRequest&& rhs);

  // Populates a GetRequest object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, GetRequest& out);

  // Populates a GetRequest object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetRequest& out);

  // Creates a deep copy of GetRequest.
  GetRequest Clone() const;

  // Creates a GetRequest object from a base::Value, or NULL on failure.
  static std::unique_ptr<GetRequest> FromValueDeprecated(const base::Value& value);

  // Creates a GetRequest object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<GetRequest> FromValue(const base::Value::Dict& value);

  // Creates a GetRequest object from a base::Value, or nullopt on failure.
  static absl::optional<GetRequest> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetRequest object.
  base::Value::Dict ToValue() const;

  // An opaque identifier for the request.
  int request_id;

  // The <code>PublicKeyCredentialRequestOptions</code> passed to
  // <code>navigator.credentials.get()</code>, serialized as a JSON string. The
  // serialization format is compatible with <a
  // href="https://w3c.github.io/webauthn/#sctn-parseRequestOptionsFromJSON">
  // <code>PublicKeyCredential.parseRequestOptionsFromJSON()</code></a>.
  std::string request_details_json;

};

struct DOMExceptionDetails {
  DOMExceptionDetails();
  ~DOMExceptionDetails();
  DOMExceptionDetails(const DOMExceptionDetails&) = delete;
  DOMExceptionDetails& operator=(const DOMExceptionDetails&) = delete;
  DOMExceptionDetails(DOMExceptionDetails&& rhs);
  DOMExceptionDetails& operator=(DOMExceptionDetails&& rhs);

  // Populates a DOMExceptionDetails object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DOMExceptionDetails& out);

  // Populates a DOMExceptionDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DOMExceptionDetails& out);

  // Creates a deep copy of DOMExceptionDetails.
  DOMExceptionDetails Clone() const;

  // Creates a DOMExceptionDetails object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<DOMExceptionDetails> FromValueDeprecated(const base::Value& value);

  // Creates a DOMExceptionDetails object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<DOMExceptionDetails> FromValue(const base::Value::Dict& value);

  // Creates a DOMExceptionDetails object from a base::Value, or nullopt on
  // failure.
  static absl::optional<DOMExceptionDetails> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDOMExceptionDetails object.
  base::Value::Dict ToValue() const;

  std::string name;

  std::string message;

};

struct CreateResponseDetails {
  CreateResponseDetails();
  ~CreateResponseDetails();
  CreateResponseDetails(const CreateResponseDetails&) = delete;
  CreateResponseDetails& operator=(const CreateResponseDetails&) = delete;
  CreateResponseDetails(CreateResponseDetails&& rhs);
  CreateResponseDetails& operator=(CreateResponseDetails&& rhs);

  // Populates a CreateResponseDetails object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CreateResponseDetails& out);

  // Populates a CreateResponseDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CreateResponseDetails& out);

  // Creates a deep copy of CreateResponseDetails.
  CreateResponseDetails Clone() const;

  // Creates a CreateResponseDetails object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<CreateResponseDetails> FromValueDeprecated(const base::Value& value);

  // Creates a CreateResponseDetails object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<CreateResponseDetails> FromValue(const base::Value::Dict& value);

  // Creates a CreateResponseDetails object from a base::Value, or nullopt on
  // failure.
  static absl::optional<CreateResponseDetails> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCreateResponseDetails object.
  base::Value::Dict ToValue() const;

  // The <code>requestId</code> of the <code>CreateRequest</code>.
  int request_id;

  // The <code>DOMException</code> yielded by the remote request, if any.
  absl::optional<DOMExceptionDetails> error;

  // The <code>PublicKeyCredential</code>, yielded by the remote request, if any,
  // serialized as a JSON string by calling
  // href="https://w3c.github.io/webauthn/#dom-publickeycredential-tojson">
  // <code>PublicKeyCredential.toJSON()</code></a>.
  absl::optional<std::string> response_json;

};

struct GetResponseDetails {
  GetResponseDetails();
  ~GetResponseDetails();
  GetResponseDetails(const GetResponseDetails&) = delete;
  GetResponseDetails& operator=(const GetResponseDetails&) = delete;
  GetResponseDetails(GetResponseDetails&& rhs);
  GetResponseDetails& operator=(GetResponseDetails&& rhs);

  // Populates a GetResponseDetails object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetResponseDetails& out);

  // Populates a GetResponseDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetResponseDetails& out);

  // Creates a deep copy of GetResponseDetails.
  GetResponseDetails Clone() const;

  // Creates a GetResponseDetails object from a base::Value, or NULL on failure.
  static std::unique_ptr<GetResponseDetails> FromValueDeprecated(const base::Value& value);

  // Creates a GetResponseDetails object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<GetResponseDetails> FromValue(const base::Value::Dict& value);

  // Creates a GetResponseDetails object from a base::Value, or nullopt on
  // failure.
  static absl::optional<GetResponseDetails> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetResponseDetails object.
  base::Value::Dict ToValue() const;

  // The <code>requestId</code> of the <code>CreateRequest</code>.
  int request_id;

  // The <code>DOMException</code> yielded by the remote request, if any.
  absl::optional<DOMExceptionDetails> error;

  // The <code>PublicKeyCredential</code>, yielded by the remote request, if any,
  // serialized as a JSON string by calling
  // href="https://w3c.github.io/webauthn/#dom-publickeycredential-tojson">
  // <code>PublicKeyCredential.toJSON()</code></a>.
  absl::optional<std::string> response_json;

};

struct IsUvpaaResponseDetails {
  IsUvpaaResponseDetails();
  ~IsUvpaaResponseDetails();
  IsUvpaaResponseDetails(const IsUvpaaResponseDetails&) = delete;
  IsUvpaaResponseDetails& operator=(const IsUvpaaResponseDetails&) = delete;
  IsUvpaaResponseDetails(IsUvpaaResponseDetails&& rhs);
  IsUvpaaResponseDetails& operator=(IsUvpaaResponseDetails&& rhs);

  // Populates a IsUvpaaResponseDetails object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, IsUvpaaResponseDetails& out);

  // Populates a IsUvpaaResponseDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, IsUvpaaResponseDetails& out);

  // Creates a deep copy of IsUvpaaResponseDetails.
  IsUvpaaResponseDetails Clone() const;

  // Creates a IsUvpaaResponseDetails object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<IsUvpaaResponseDetails> FromValueDeprecated(const base::Value& value);

  // Creates a IsUvpaaResponseDetails object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<IsUvpaaResponseDetails> FromValue(const base::Value::Dict& value);

  // Creates a IsUvpaaResponseDetails object from a base::Value, or nullopt on
  // failure.
  static absl::optional<IsUvpaaResponseDetails> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisIsUvpaaResponseDetails object.
  base::Value::Dict ToValue() const;

  int request_id;

  bool is_uvpaa;

};


//
// Functions
//

namespace CompleteCreateRequest {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  CreateResponseDetails details;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace CompleteCreateRequest

namespace CompleteGetRequest {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  GetResponseDetails details;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace CompleteGetRequest

namespace CompleteIsUvpaaRequest {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  IsUvpaaResponseDetails details;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace CompleteIsUvpaaRequest

namespace Attach {

namespace Results {

base::Value::List Create(const std::string& error);
}  // namespace Results

}  // namespace Attach

namespace Detach {

namespace Results {

base::Value::List Create(const std::string& error);
}  // namespace Results

}  // namespace Detach

//
// Events
//

namespace OnRemoteSessionStateChange {

extern const char kEventName[];  // "webAuthenticationProxy.onRemoteSessionStateChange"

base::Value::List Create();
}  // namespace OnRemoteSessionStateChange

namespace OnCreateRequest {

extern const char kEventName[];  // "webAuthenticationProxy.onCreateRequest"

base::Value::List Create(const CreateRequest& request_info);
}  // namespace OnCreateRequest

namespace OnGetRequest {

extern const char kEventName[];  // "webAuthenticationProxy.onGetRequest"

base::Value::List Create(const GetRequest& request_info);
}  // namespace OnGetRequest

namespace OnIsUvpaaRequest {

extern const char kEventName[];  // "webAuthenticationProxy.onIsUvpaaRequest"

base::Value::List Create(const IsUvpaaRequest& request_info);
}  // namespace OnIsUvpaaRequest

namespace OnRequestCanceled {

extern const char kEventName[];  // "webAuthenticationProxy.onRequestCanceled"

base::Value::List Create(int request_id);
}  // namespace OnRequestCanceled

}  // namespace web_authentication_proxy
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_WEB_AUTHENTICATION_PROXY_H__
