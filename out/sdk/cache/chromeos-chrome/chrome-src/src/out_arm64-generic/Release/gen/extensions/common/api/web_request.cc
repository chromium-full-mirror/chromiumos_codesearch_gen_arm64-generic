// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/web_request.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/web_request.h"

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
#include "extensions/common/api/extension_types.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace web_request {
//
// Properties
//

const int MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES = 20;

//
// Types
//

const char* ToString(ResourceType enum_param) {
  switch (enum_param) {
    case ResourceType::kMainFrame:
      return "main_frame";
    case ResourceType::kSubFrame:
      return "sub_frame";
    case ResourceType::kStylesheet:
      return "stylesheet";
    case ResourceType::kScript:
      return "script";
    case ResourceType::kImage:
      return "image";
    case ResourceType::kFont:
      return "font";
    case ResourceType::kObject:
      return "object";
    case ResourceType::kXmlhttprequest:
      return "xmlhttprequest";
    case ResourceType::kPing:
      return "ping";
    case ResourceType::kCspReport:
      return "csp_report";
    case ResourceType::kMedia:
      return "media";
    case ResourceType::kWebsocket:
      return "websocket";
    case ResourceType::kWebbundle:
      return "webbundle";
    case ResourceType::kOther:
      return "other";
    case ResourceType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ResourceType ParseResourceType(base::StringPiece enum_string) {
  if (enum_string == "main_frame")
    return ResourceType::kMainFrame;
  if (enum_string == "sub_frame")
    return ResourceType::kSubFrame;
  if (enum_string == "stylesheet")
    return ResourceType::kStylesheet;
  if (enum_string == "script")
    return ResourceType::kScript;
  if (enum_string == "image")
    return ResourceType::kImage;
  if (enum_string == "font")
    return ResourceType::kFont;
  if (enum_string == "object")
    return ResourceType::kObject;
  if (enum_string == "xmlhttprequest")
    return ResourceType::kXmlhttprequest;
  if (enum_string == "ping")
    return ResourceType::kPing;
  if (enum_string == "csp_report")
    return ResourceType::kCspReport;
  if (enum_string == "media")
    return ResourceType::kMedia;
  if (enum_string == "websocket")
    return ResourceType::kWebsocket;
  if (enum_string == "webbundle")
    return ResourceType::kWebbundle;
  if (enum_string == "other")
    return ResourceType::kOther;
  return ResourceType::kNone;
}

std::u16string GetResourceTypeParseError(base::StringPiece enum_string) {
  return u"expected \"main_frame\" or \"sub_frame\" or \"stylesheet\" or \"script\" or \"image\" or \"font\" or \"object\" or \"xmlhttprequest\" or \"ping\" or \"csp_report\" or \"media\" or \"websocket\" or \"webbundle\" or \"other\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(OnBeforeRequestOptions enum_param) {
  switch (enum_param) {
    case OnBeforeRequestOptions::kBlocking:
      return "blocking";
    case OnBeforeRequestOptions::kRequestBody:
      return "requestBody";
    case OnBeforeRequestOptions::kExtraHeaders:
      return "extraHeaders";
    case OnBeforeRequestOptions::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

OnBeforeRequestOptions ParseOnBeforeRequestOptions(base::StringPiece enum_string) {
  if (enum_string == "blocking")
    return OnBeforeRequestOptions::kBlocking;
  if (enum_string == "requestBody")
    return OnBeforeRequestOptions::kRequestBody;
  if (enum_string == "extraHeaders")
    return OnBeforeRequestOptions::kExtraHeaders;
  return OnBeforeRequestOptions::kNone;
}

std::u16string GetOnBeforeRequestOptionsParseError(base::StringPiece enum_string) {
  return u"expected \"blocking\" or \"requestBody\" or \"extraHeaders\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(OnBeforeSendHeadersOptions enum_param) {
  switch (enum_param) {
    case OnBeforeSendHeadersOptions::kRequestHeaders:
      return "requestHeaders";
    case OnBeforeSendHeadersOptions::kBlocking:
      return "blocking";
    case OnBeforeSendHeadersOptions::kExtraHeaders:
      return "extraHeaders";
    case OnBeforeSendHeadersOptions::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

OnBeforeSendHeadersOptions ParseOnBeforeSendHeadersOptions(base::StringPiece enum_string) {
  if (enum_string == "requestHeaders")
    return OnBeforeSendHeadersOptions::kRequestHeaders;
  if (enum_string == "blocking")
    return OnBeforeSendHeadersOptions::kBlocking;
  if (enum_string == "extraHeaders")
    return OnBeforeSendHeadersOptions::kExtraHeaders;
  return OnBeforeSendHeadersOptions::kNone;
}

std::u16string GetOnBeforeSendHeadersOptionsParseError(base::StringPiece enum_string) {
  return u"expected \"requestHeaders\" or \"blocking\" or \"extraHeaders\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(OnSendHeadersOptions enum_param) {
  switch (enum_param) {
    case OnSendHeadersOptions::kRequestHeaders:
      return "requestHeaders";
    case OnSendHeadersOptions::kExtraHeaders:
      return "extraHeaders";
    case OnSendHeadersOptions::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

OnSendHeadersOptions ParseOnSendHeadersOptions(base::StringPiece enum_string) {
  if (enum_string == "requestHeaders")
    return OnSendHeadersOptions::kRequestHeaders;
  if (enum_string == "extraHeaders")
    return OnSendHeadersOptions::kExtraHeaders;
  return OnSendHeadersOptions::kNone;
}

std::u16string GetOnSendHeadersOptionsParseError(base::StringPiece enum_string) {
  return u"expected \"requestHeaders\" or \"extraHeaders\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(OnHeadersReceivedOptions enum_param) {
  switch (enum_param) {
    case OnHeadersReceivedOptions::kBlocking:
      return "blocking";
    case OnHeadersReceivedOptions::kResponseHeaders:
      return "responseHeaders";
    case OnHeadersReceivedOptions::kExtraHeaders:
      return "extraHeaders";
    case OnHeadersReceivedOptions::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

OnHeadersReceivedOptions ParseOnHeadersReceivedOptions(base::StringPiece enum_string) {
  if (enum_string == "blocking")
    return OnHeadersReceivedOptions::kBlocking;
  if (enum_string == "responseHeaders")
    return OnHeadersReceivedOptions::kResponseHeaders;
  if (enum_string == "extraHeaders")
    return OnHeadersReceivedOptions::kExtraHeaders;
  return OnHeadersReceivedOptions::kNone;
}

std::u16string GetOnHeadersReceivedOptionsParseError(base::StringPiece enum_string) {
  return u"expected \"blocking\" or \"responseHeaders\" or \"extraHeaders\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(OnAuthRequiredOptions enum_param) {
  switch (enum_param) {
    case OnAuthRequiredOptions::kResponseHeaders:
      return "responseHeaders";
    case OnAuthRequiredOptions::kBlocking:
      return "blocking";
    case OnAuthRequiredOptions::kAsyncBlocking:
      return "asyncBlocking";
    case OnAuthRequiredOptions::kExtraHeaders:
      return "extraHeaders";
    case OnAuthRequiredOptions::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

OnAuthRequiredOptions ParseOnAuthRequiredOptions(base::StringPiece enum_string) {
  if (enum_string == "responseHeaders")
    return OnAuthRequiredOptions::kResponseHeaders;
  if (enum_string == "blocking")
    return OnAuthRequiredOptions::kBlocking;
  if (enum_string == "asyncBlocking")
    return OnAuthRequiredOptions::kAsyncBlocking;
  if (enum_string == "extraHeaders")
    return OnAuthRequiredOptions::kExtraHeaders;
  return OnAuthRequiredOptions::kNone;
}

std::u16string GetOnAuthRequiredOptionsParseError(base::StringPiece enum_string) {
  return u"expected \"responseHeaders\" or \"blocking\" or \"asyncBlocking\" or \"extraHeaders\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(OnResponseStartedOptions enum_param) {
  switch (enum_param) {
    case OnResponseStartedOptions::kResponseHeaders:
      return "responseHeaders";
    case OnResponseStartedOptions::kExtraHeaders:
      return "extraHeaders";
    case OnResponseStartedOptions::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

OnResponseStartedOptions ParseOnResponseStartedOptions(base::StringPiece enum_string) {
  if (enum_string == "responseHeaders")
    return OnResponseStartedOptions::kResponseHeaders;
  if (enum_string == "extraHeaders")
    return OnResponseStartedOptions::kExtraHeaders;
  return OnResponseStartedOptions::kNone;
}

std::u16string GetOnResponseStartedOptionsParseError(base::StringPiece enum_string) {
  return u"expected \"responseHeaders\" or \"extraHeaders\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(OnBeforeRedirectOptions enum_param) {
  switch (enum_param) {
    case OnBeforeRedirectOptions::kResponseHeaders:
      return "responseHeaders";
    case OnBeforeRedirectOptions::kExtraHeaders:
      return "extraHeaders";
    case OnBeforeRedirectOptions::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

OnBeforeRedirectOptions ParseOnBeforeRedirectOptions(base::StringPiece enum_string) {
  if (enum_string == "responseHeaders")
    return OnBeforeRedirectOptions::kResponseHeaders;
  if (enum_string == "extraHeaders")
    return OnBeforeRedirectOptions::kExtraHeaders;
  return OnBeforeRedirectOptions::kNone;
}

std::u16string GetOnBeforeRedirectOptionsParseError(base::StringPiece enum_string) {
  return u"expected \"responseHeaders\" or \"extraHeaders\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(OnCompletedOptions enum_param) {
  switch (enum_param) {
    case OnCompletedOptions::kResponseHeaders:
      return "responseHeaders";
    case OnCompletedOptions::kExtraHeaders:
      return "extraHeaders";
    case OnCompletedOptions::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

OnCompletedOptions ParseOnCompletedOptions(base::StringPiece enum_string) {
  if (enum_string == "responseHeaders")
    return OnCompletedOptions::kResponseHeaders;
  if (enum_string == "extraHeaders")
    return OnCompletedOptions::kExtraHeaders;
  return OnCompletedOptions::kNone;
}

std::u16string GetOnCompletedOptionsParseError(base::StringPiece enum_string) {
  return u"expected \"responseHeaders\" or \"extraHeaders\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(OnErrorOccurredOptions enum_param) {
  switch (enum_param) {
    case OnErrorOccurredOptions::kExtraHeaders:
      return "extraHeaders";
    case OnErrorOccurredOptions::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

OnErrorOccurredOptions ParseOnErrorOccurredOptions(base::StringPiece enum_string) {
  if (enum_string == "extraHeaders")
    return OnErrorOccurredOptions::kExtraHeaders;
  return OnErrorOccurredOptions::kNone;
}

std::u16string GetOnErrorOccurredOptionsParseError(base::StringPiece enum_string) {
  return u"expected \"extraHeaders\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


RequestFilter::RequestFilter()
 {}

RequestFilter::~RequestFilter() = default;
RequestFilter::RequestFilter(RequestFilter&& rhs) noexcept = default;
RequestFilter& RequestFilter::operator=(RequestFilter&& rhs) noexcept = default;
RequestFilter RequestFilter::Clone() const {
  RequestFilter out;
  out.urls = urls;
  out.types = types;
  out.tab_id = tab_id;
  out.window_id = window_id;
  return out;
}

// static
bool RequestFilter::Populate(
    const base::Value::Dict& dict, RequestFilter& out) {
  const base::Value* urls_value = dict.Find("urls");
  if (!urls_value) {
    return false;
  }
  {
    if (!(*urls_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*urls_value).GetList(), out.urls)) {
        return false;
      }
    }
  }

  const base::Value* types_value = dict.Find("types");
  if (types_value) {
    {
      if (!(*types_value).is_list()) {
        return false;
      }
      else {
        out.types.emplace();
        for (const auto& it : ((*types_value)).GetList()) {
          ResourceType tmp;
          const std::string* resource_type_as_string = (it).GetIfString();
          if (!resource_type_as_string) {
            return false;
          }
          tmp = ParseResourceType(*resource_type_as_string);
          if (tmp == ResourceType()) {
            return false;
          }
          out.types->push_back(tmp);
        }
      }
    }
  }

  const base::Value* tab_id_value = dict.Find("tabId");
  if (tab_id_value) {
    {
      auto temp = (*tab_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.tab_id = std::nullopt;
        return false;
      }
      out.tab_id = *temp;
    }
  }

  const base::Value* window_id_value = dict.Find("windowId");
  if (window_id_value) {
    {
      auto temp = (*window_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.window_id = std::nullopt;
        return false;
      }
      out.window_id = *temp;
    }
  }

  return true;
}

// static
bool RequestFilter::Populate(
    const base::Value& value, RequestFilter& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RequestFilter> RequestFilter::FromValue(const base::Value::Dict& value) {
  RequestFilter out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RequestFilter> RequestFilter::FromValue(const base::Value& value) {
  RequestFilter out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RequestFilter::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("urls", json_schema_compiler::util::CreateValueFromArray(this->urls));

  if (this->types) {
    {
      std::vector<std::string> types_list;
      for (const auto& it : *(this->types)) {
        types_list.emplace_back(web_request::ToString(it));
      }
      to_value_result.Set("types", json_schema_compiler::util::CreateValueFromArray(types_list));
    }

  }
  if (this->tab_id) {
    to_value_result.Set("tabId", *this->tab_id);

  }
  if (this->window_id) {
    to_value_result.Set("windowId", *this->window_id);

  }

  return to_value_result;
}


UploadData::UploadData()
 {}

UploadData::~UploadData() = default;
UploadData::UploadData(UploadData&& rhs) noexcept = default;
UploadData& UploadData::operator=(UploadData&& rhs) noexcept = default;
UploadData UploadData::Clone() const {
  UploadData out;
  if (bytes) {
    out.bytes = bytes->Clone();
  }
  out.file = file;
  return out;
}

// static
bool UploadData::Populate(
    const base::Value::Dict& dict, UploadData& out) {
  const base::Value* bytes_value = dict.Find("bytes");
  if (bytes_value) {
    {
      out.bytes = (*bytes_value).Clone();
    }
  }

  const base::Value* file_value = dict.Find("file");
  if (file_value) {
    {
      auto* temp = (*file_value).GetIfString();
      if (!temp) {
        out.file = std::nullopt;
        return false;
      }
      out.file = *temp;
    }
  }

  return true;
}

// static
bool UploadData::Populate(
    const base::Value& value, UploadData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<UploadData> UploadData::FromValue(const base::Value::Dict& value) {
  UploadData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<UploadData> UploadData::FromValue(const base::Value& value) {
  UploadData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict UploadData::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->bytes) {
    to_value_result.Set("bytes", (this->bytes)->Clone());

  }
  if (this->file) {
    to_value_result.Set("file", *this->file);

  }

  return to_value_result;
}


FormDataItem::FormDataItem()
 {}

FormDataItem::~FormDataItem() = default;
FormDataItem::FormDataItem(FormDataItem&& rhs) noexcept = default;
FormDataItem& FormDataItem::operator=(FormDataItem&& rhs) noexcept = default;
FormDataItem FormDataItem::Clone() const {
  FormDataItem out;
  out.as_binary = as_binary;
  out.as_string = as_string;
  return out;
}

// static
bool FormDataItem::Populate(
    const base::Value& value, FormDataItem& out) {
  if (value.type() == base::Value::Type::BINARY) {
    {
      if (!value.is_blob()) {
        return false;
      }
      else {
        out.as_binary = value.GetBlob();
      }
    }
    return true;
  }
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out.as_string = std::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  return false;
}

// static
std::optional<FormDataItem> FormDataItem::FromValue(const base::Value& value) {
  FormDataItem out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value FormDataItem::ToValue() const {
  base::Value result;
  if (as_binary) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for form_data_item";
    result = base::Value(base::Value(*as_binary));

  }
  if (as_string) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for form_data_item";
    result = base::Value(*as_string);

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for form_data_item";
  return result;
}


const char* ToString(IgnoredActionType enum_param) {
  switch (enum_param) {
    case IgnoredActionType::kRedirect:
      return "redirect";
    case IgnoredActionType::kRequestHeaders:
      return "request_headers";
    case IgnoredActionType::kResponseHeaders:
      return "response_headers";
    case IgnoredActionType::kAuthCredentials:
      return "auth_credentials";
    case IgnoredActionType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

IgnoredActionType ParseIgnoredActionType(base::StringPiece enum_string) {
  if (enum_string == "redirect")
    return IgnoredActionType::kRedirect;
  if (enum_string == "request_headers")
    return IgnoredActionType::kRequestHeaders;
  if (enum_string == "response_headers")
    return IgnoredActionType::kResponseHeaders;
  if (enum_string == "auth_credentials")
    return IgnoredActionType::kAuthCredentials;
  return IgnoredActionType::kNone;
}

std::u16string GetIgnoredActionTypeParseError(base::StringPiece enum_string) {
  return u"expected \"redirect\" or \"request_headers\" or \"response_headers\" or \"auth_credentials\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



//
// Functions
//

namespace HandlerBehaviorChanged {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace HandlerBehaviorChanged

//
// Events
//

namespace OnBeforeRequest {

const char kEventName[] = "webRequest.onBeforeRequest";

Details::RequestBody::FormData::FormData()
 {}

Details::RequestBody::FormData::~FormData() = default;
Details::RequestBody::FormData::FormData(FormData&& rhs) noexcept = default;
Details::RequestBody::FormData& Details::RequestBody::FormData::operator=(FormData&& rhs) noexcept = default;
base::Value::Dict Details::RequestBody::FormData::ToValue() const {
  base::Value::Dict to_value_result;

  for (const auto& it : additional_properties) {
    to_value_result.Set(it.first, json_schema_compiler::util::CreateValueFromArray(it.second));

  }

  return to_value_result;
}



Details::RequestBody::RequestBody()
 {}

Details::RequestBody::~RequestBody() = default;
Details::RequestBody::RequestBody(RequestBody&& rhs) noexcept = default;
Details::RequestBody& Details::RequestBody::operator=(RequestBody&& rhs) noexcept = default;
base::Value::Dict Details::RequestBody::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->error) {
    to_value_result.Set("error", *this->error);

  }
  if (this->form_data) {
    to_value_result.Set("formData", (this->form_data)->ToValue());

  }
  if (this->raw) {
    to_value_result.Set("raw", json_schema_compiler::util::CreateValueFromArray(*this->raw));

  }

  return to_value_result;
}



Details::Details()
: frame_id(0),
parent_frame_id(0),
document_lifecycle(),
frame_type(),
tab_id(0),
type(),
time_stamp(0.0) {}

Details::~Details() = default;
Details::Details(Details&& rhs) noexcept = default;
Details& Details::operator=(Details&& rhs) noexcept = default;
base::Value::Dict Details::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("requestId", this->request_id);

  to_value_result.Set("url", this->url);

  to_value_result.Set("method", this->method);

  to_value_result.Set("frameId", this->frame_id);

  to_value_result.Set("parentFrameId", this->parent_frame_id);

  if (this->document_id) {
    to_value_result.Set("documentId", *this->document_id);

  }
  if (this->parent_document_id) {
    to_value_result.Set("parentDocumentId", *this->parent_document_id);

  }
  if (this->document_lifecycle != extension_types::DocumentLifecycle()) {
    to_value_result.Set("documentLifecycle", extension_types::ToString(this->document_lifecycle));

  }
  if (this->frame_type != extension_types::FrameType()) {
    to_value_result.Set("frameType", extension_types::ToString(this->frame_type));

  }
  if (this->request_body) {
    to_value_result.Set("requestBody", (this->request_body)->ToValue());

  }
  to_value_result.Set("tabId", this->tab_id);

  to_value_result.Set("type", web_request::ToString(this->type));

  if (this->initiator) {
    to_value_result.Set("initiator", *this->initiator);

  }
  to_value_result.Set("timeStamp", this->time_stamp);


  return to_value_result;
}


base::Value::List Create(const Details& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}

}  // namespace OnBeforeRequest

namespace OnErrorOccurred {

const char kEventName[] = "webRequest.onErrorOccurred";

Details::Details()
: frame_id(0),
parent_frame_id(0),
document_lifecycle(),
frame_type(),
tab_id(0),
type(),
time_stamp(0.0),
from_cache(false) {}

Details::~Details() = default;
Details::Details(Details&& rhs) noexcept = default;
Details& Details::operator=(Details&& rhs) noexcept = default;
base::Value::Dict Details::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("requestId", this->request_id);

  to_value_result.Set("url", this->url);

  to_value_result.Set("method", this->method);

  to_value_result.Set("frameId", this->frame_id);

  to_value_result.Set("parentFrameId", this->parent_frame_id);

  to_value_result.Set("documentId", this->document_id);

  if (this->parent_document_id) {
    to_value_result.Set("parentDocumentId", *this->parent_document_id);

  }
  to_value_result.Set("documentLifecycle", extension_types::ToString(this->document_lifecycle));

  to_value_result.Set("frameType", extension_types::ToString(this->frame_type));

  to_value_result.Set("tabId", this->tab_id);

  to_value_result.Set("type", web_request::ToString(this->type));

  if (this->initiator) {
    to_value_result.Set("initiator", *this->initiator);

  }
  to_value_result.Set("timeStamp", this->time_stamp);

  if (this->ip) {
    to_value_result.Set("ip", *this->ip);

  }
  to_value_result.Set("fromCache", this->from_cache);

  to_value_result.Set("error", this->error);


  return to_value_result;
}


base::Value::List Create(const Details& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}

}  // namespace OnErrorOccurred

namespace OnActionIgnored {

const char kEventName[] = "webRequest.onActionIgnored";

Details::Details()
: action() {}

Details::~Details() = default;
Details::Details(Details&& rhs) noexcept = default;
Details& Details::operator=(Details&& rhs) noexcept = default;
base::Value::Dict Details::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("requestId", this->request_id);

  to_value_result.Set("action", web_request::ToString(this->action));


  return to_value_result;
}


base::Value::List Create(const Details& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}

}  // namespace OnActionIgnored

}  // namespace web_request
}  // namespace api
}  // namespace extensions

