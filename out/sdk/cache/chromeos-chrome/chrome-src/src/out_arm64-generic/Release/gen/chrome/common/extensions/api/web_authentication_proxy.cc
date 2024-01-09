// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/web_authentication_proxy.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/web_authentication_proxy.h"

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

using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace web_authentication_proxy {
//
// Types
//

IsUvpaaRequest::IsUvpaaRequest()
: request_id(0) {}

IsUvpaaRequest::~IsUvpaaRequest() = default;
IsUvpaaRequest::IsUvpaaRequest(IsUvpaaRequest&& rhs) noexcept = default;
IsUvpaaRequest& IsUvpaaRequest::operator=(IsUvpaaRequest&& rhs) noexcept = default;
IsUvpaaRequest IsUvpaaRequest::Clone() const {
  IsUvpaaRequest out;
  out.request_id = request_id;
  return out;
}

// static
bool IsUvpaaRequest::Populate(
    const base::Value::Dict& dict, IsUvpaaRequest& out) {
  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  return true;
}

// static
bool IsUvpaaRequest::Populate(
    const base::Value& value, IsUvpaaRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<IsUvpaaRequest> IsUvpaaRequest::FromValue(const base::Value::Dict& value) {
  IsUvpaaRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<IsUvpaaRequest> IsUvpaaRequest::FromValue(const base::Value& value) {
  IsUvpaaRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict IsUvpaaRequest::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("requestId", this->request_id);


  return to_value_result;
}


CreateRequest::CreateRequest()
: request_id(0) {}

CreateRequest::~CreateRequest() = default;
CreateRequest::CreateRequest(CreateRequest&& rhs) noexcept = default;
CreateRequest& CreateRequest::operator=(CreateRequest&& rhs) noexcept = default;
CreateRequest CreateRequest::Clone() const {
  CreateRequest out;
  out.request_id = request_id;
  out.request_details_json = request_details_json;
  return out;
}

// static
bool CreateRequest::Populate(
    const base::Value::Dict& dict, CreateRequest& out) {
  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  const base::Value* request_details_json_value = dict.Find("requestDetailsJson");
  if (!request_details_json_value) {
    return false;
  }
  {
    auto* temp = (*request_details_json_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.request_details_json = *temp;
  }

  return true;
}

// static
bool CreateRequest::Populate(
    const base::Value& value, CreateRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CreateRequest> CreateRequest::FromValue(const base::Value::Dict& value) {
  CreateRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CreateRequest> CreateRequest::FromValue(const base::Value& value) {
  CreateRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict CreateRequest::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("requestId", this->request_id);

  to_value_result.Set("requestDetailsJson", this->request_details_json);


  return to_value_result;
}


GetRequest::GetRequest()
: request_id(0) {}

GetRequest::~GetRequest() = default;
GetRequest::GetRequest(GetRequest&& rhs) noexcept = default;
GetRequest& GetRequest::operator=(GetRequest&& rhs) noexcept = default;
GetRequest GetRequest::Clone() const {
  GetRequest out;
  out.request_id = request_id;
  out.request_details_json = request_details_json;
  return out;
}

// static
bool GetRequest::Populate(
    const base::Value::Dict& dict, GetRequest& out) {
  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  const base::Value* request_details_json_value = dict.Find("requestDetailsJson");
  if (!request_details_json_value) {
    return false;
  }
  {
    auto* temp = (*request_details_json_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.request_details_json = *temp;
  }

  return true;
}

// static
bool GetRequest::Populate(
    const base::Value& value, GetRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GetRequest> GetRequest::FromValue(const base::Value::Dict& value) {
  GetRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GetRequest> GetRequest::FromValue(const base::Value& value) {
  GetRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict GetRequest::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("requestId", this->request_id);

  to_value_result.Set("requestDetailsJson", this->request_details_json);


  return to_value_result;
}


DOMExceptionDetails::DOMExceptionDetails()
 {}

DOMExceptionDetails::~DOMExceptionDetails() = default;
DOMExceptionDetails::DOMExceptionDetails(DOMExceptionDetails&& rhs) noexcept = default;
DOMExceptionDetails& DOMExceptionDetails::operator=(DOMExceptionDetails&& rhs) noexcept = default;
DOMExceptionDetails DOMExceptionDetails::Clone() const {
  DOMExceptionDetails out;
  out.name = name;
  out.message = message;
  return out;
}

// static
bool DOMExceptionDetails::Populate(
    const base::Value::Dict& dict, DOMExceptionDetails& out) {
  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.name = *temp;
  }

  const base::Value* message_value = dict.Find("message");
  if (!message_value) {
    return false;
  }
  {
    auto* temp = (*message_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.message = *temp;
  }

  return true;
}

// static
bool DOMExceptionDetails::Populate(
    const base::Value& value, DOMExceptionDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DOMExceptionDetails> DOMExceptionDetails::FromValue(const base::Value::Dict& value) {
  DOMExceptionDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DOMExceptionDetails> DOMExceptionDetails::FromValue(const base::Value& value) {
  DOMExceptionDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DOMExceptionDetails::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("name", this->name);

  to_value_result.Set("message", this->message);


  return to_value_result;
}


CreateResponseDetails::CreateResponseDetails()
: request_id(0) {}

CreateResponseDetails::~CreateResponseDetails() = default;
CreateResponseDetails::CreateResponseDetails(CreateResponseDetails&& rhs) noexcept = default;
CreateResponseDetails& CreateResponseDetails::operator=(CreateResponseDetails&& rhs) noexcept = default;
CreateResponseDetails CreateResponseDetails::Clone() const {
  CreateResponseDetails out;
  out.request_id = request_id;
  if (error) {
    out.error = error->Clone();
  }
  out.response_json = response_json;
  return out;
}

// static
bool CreateResponseDetails::Populate(
    const base::Value::Dict& dict, CreateResponseDetails& out) {
  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  const base::Value* error_value = dict.Find("error");
  if (error_value) {
    {
      if (!(*error_value).is_dict()) {
        return false;
      }
      else {
        DOMExceptionDetails temp;
        if (!DOMExceptionDetails::Populate((*error_value).GetDict(), temp))
          return false;
        out.error = std::move(temp);
      }
    }
  }

  const base::Value* response_json_value = dict.Find("responseJson");
  if (response_json_value) {
    {
      auto* temp = (*response_json_value).GetIfString();
      if (!temp) {
        out.response_json = std::nullopt;
        return false;
      }
      out.response_json = *temp;
    }
  }

  return true;
}

// static
bool CreateResponseDetails::Populate(
    const base::Value& value, CreateResponseDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CreateResponseDetails> CreateResponseDetails::FromValue(const base::Value::Dict& value) {
  CreateResponseDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CreateResponseDetails> CreateResponseDetails::FromValue(const base::Value& value) {
  CreateResponseDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict CreateResponseDetails::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("requestId", this->request_id);

  if (this->error) {
    to_value_result.Set("error", (this->error)->ToValue());

  }
  if (this->response_json) {
    to_value_result.Set("responseJson", *this->response_json);

  }

  return to_value_result;
}


GetResponseDetails::GetResponseDetails()
: request_id(0) {}

GetResponseDetails::~GetResponseDetails() = default;
GetResponseDetails::GetResponseDetails(GetResponseDetails&& rhs) noexcept = default;
GetResponseDetails& GetResponseDetails::operator=(GetResponseDetails&& rhs) noexcept = default;
GetResponseDetails GetResponseDetails::Clone() const {
  GetResponseDetails out;
  out.request_id = request_id;
  if (error) {
    out.error = error->Clone();
  }
  out.response_json = response_json;
  return out;
}

// static
bool GetResponseDetails::Populate(
    const base::Value::Dict& dict, GetResponseDetails& out) {
  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  const base::Value* error_value = dict.Find("error");
  if (error_value) {
    {
      if (!(*error_value).is_dict()) {
        return false;
      }
      else {
        DOMExceptionDetails temp;
        if (!DOMExceptionDetails::Populate((*error_value).GetDict(), temp))
          return false;
        out.error = std::move(temp);
      }
    }
  }

  const base::Value* response_json_value = dict.Find("responseJson");
  if (response_json_value) {
    {
      auto* temp = (*response_json_value).GetIfString();
      if (!temp) {
        out.response_json = std::nullopt;
        return false;
      }
      out.response_json = *temp;
    }
  }

  return true;
}

// static
bool GetResponseDetails::Populate(
    const base::Value& value, GetResponseDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GetResponseDetails> GetResponseDetails::FromValue(const base::Value::Dict& value) {
  GetResponseDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GetResponseDetails> GetResponseDetails::FromValue(const base::Value& value) {
  GetResponseDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict GetResponseDetails::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("requestId", this->request_id);

  if (this->error) {
    to_value_result.Set("error", (this->error)->ToValue());

  }
  if (this->response_json) {
    to_value_result.Set("responseJson", *this->response_json);

  }

  return to_value_result;
}


IsUvpaaResponseDetails::IsUvpaaResponseDetails()
: request_id(0),
is_uvpaa(false) {}

IsUvpaaResponseDetails::~IsUvpaaResponseDetails() = default;
IsUvpaaResponseDetails::IsUvpaaResponseDetails(IsUvpaaResponseDetails&& rhs) noexcept = default;
IsUvpaaResponseDetails& IsUvpaaResponseDetails::operator=(IsUvpaaResponseDetails&& rhs) noexcept = default;
IsUvpaaResponseDetails IsUvpaaResponseDetails::Clone() const {
  IsUvpaaResponseDetails out;
  out.request_id = request_id;
  out.is_uvpaa = is_uvpaa;
  return out;
}

// static
bool IsUvpaaResponseDetails::Populate(
    const base::Value::Dict& dict, IsUvpaaResponseDetails& out) {
  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  const base::Value* is_uvpaa_value = dict.Find("isUvpaa");
  if (!is_uvpaa_value) {
    return false;
  }
  {
    auto temp = (*is_uvpaa_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_uvpaa = *temp;
  }

  return true;
}

// static
bool IsUvpaaResponseDetails::Populate(
    const base::Value& value, IsUvpaaResponseDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<IsUvpaaResponseDetails> IsUvpaaResponseDetails::FromValue(const base::Value::Dict& value) {
  IsUvpaaResponseDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<IsUvpaaResponseDetails> IsUvpaaResponseDetails::FromValue(const base::Value& value) {
  IsUvpaaResponseDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict IsUvpaaResponseDetails::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("requestId", this->request_id);

  to_value_result.Set("isUvpaa", this->is_uvpaa);


  return to_value_result;
}



//
// Functions
//

namespace CompleteCreateRequest {

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
      if (!CreateResponseDetails::Populate(details_value.GetDict(), params.details)) {
        return std::nullopt;
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
}  // namespace CompleteCreateRequest

namespace CompleteGetRequest {

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
      if (!GetResponseDetails::Populate(details_value.GetDict(), params.details)) {
        return std::nullopt;
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
}  // namespace CompleteGetRequest

namespace CompleteIsUvpaaRequest {

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
      if (!IsUvpaaResponseDetails::Populate(details_value.GetDict(), params.details)) {
        return std::nullopt;
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
}  // namespace CompleteIsUvpaaRequest

namespace Attach {

base::Value::List Results::Create(const std::string& error) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(error);

  return create_results;
}
}  // namespace Attach

namespace Detach {

base::Value::List Results::Create(const std::string& error) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(error);

  return create_results;
}
}  // namespace Detach

//
// Events
//

namespace OnRemoteSessionStateChange {

const char kEventName[] = "webAuthenticationProxy.onRemoteSessionStateChange";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnRemoteSessionStateChange

namespace OnCreateRequest {

const char kEventName[] = "webAuthenticationProxy.onCreateRequest";

base::Value::List Create(const CreateRequest& request_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((request_info).ToValue());

  return create_results;
}

}  // namespace OnCreateRequest

namespace OnGetRequest {

const char kEventName[] = "webAuthenticationProxy.onGetRequest";

base::Value::List Create(const GetRequest& request_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((request_info).ToValue());

  return create_results;
}

}  // namespace OnGetRequest

namespace OnIsUvpaaRequest {

const char kEventName[] = "webAuthenticationProxy.onIsUvpaaRequest";

base::Value::List Create(const IsUvpaaRequest& request_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((request_info).ToValue());

  return create_results;
}

}  // namespace OnIsUvpaaRequest

namespace OnRequestCanceled {

const char kEventName[] = "webAuthenticationProxy.onRequestCanceled";

base::Value::List Create(int request_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(request_id);

  return create_results;
}

}  // namespace OnRequestCanceled

}  // namespace web_authentication_proxy
}  // namespace api
}  // namespace extensions

