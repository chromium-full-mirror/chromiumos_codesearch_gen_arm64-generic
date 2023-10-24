// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/mime_handler_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/mime_handler_private.h"

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

using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace mime_handler_private {
//
// Types
//

StreamInfo::ResponseHeaders::ResponseHeaders()
 {}

StreamInfo::ResponseHeaders::~ResponseHeaders() = default;
StreamInfo::ResponseHeaders::ResponseHeaders(ResponseHeaders&& rhs) = default;
StreamInfo::ResponseHeaders& StreamInfo::ResponseHeaders::operator=(ResponseHeaders&& rhs) = default;
StreamInfo::ResponseHeaders StreamInfo::ResponseHeaders::Clone() const {
  ResponseHeaders out;
  return out;
}

// static
bool StreamInfo::ResponseHeaders::Populate(
    const base::Value::Dict& dict, ResponseHeaders& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool StreamInfo::ResponseHeaders::Populate(
    const base::Value& value, ResponseHeaders& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<StreamInfo::ResponseHeaders> StreamInfo::ResponseHeaders::FromValue(const base::Value::Dict& value) {
  ResponseHeaders out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<StreamInfo::ResponseHeaders> StreamInfo::ResponseHeaders::FromValue(const base::Value& value) {
  ResponseHeaders out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict StreamInfo::ResponseHeaders::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



StreamInfo::StreamInfo()
: tab_id(0),
embedded(false) {}

StreamInfo::~StreamInfo() = default;
StreamInfo::StreamInfo(StreamInfo&& rhs) = default;
StreamInfo& StreamInfo::operator=(StreamInfo&& rhs) = default;
StreamInfo StreamInfo::Clone() const {
  StreamInfo out;
  out.mime_type = mime_type;
  out.original_url = original_url;
  out.stream_url = stream_url;
  out.tab_id = tab_id;
  out.response_headers = response_headers.Clone();
  out.embedded = embedded;
  return out;
}

// static
bool StreamInfo::Populate(
    const base::Value::Dict& dict, StreamInfo& out) {
  const base::Value* mime_type_value = dict.Find("mimeType");
  if (!mime_type_value) {
    return false;
  }
  {
    auto* temp = (*mime_type_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.mime_type = *temp;
  }

  const base::Value* original_url_value = dict.Find("originalUrl");
  if (!original_url_value) {
    return false;
  }
  {
    auto* temp = (*original_url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.original_url = *temp;
  }

  const base::Value* stream_url_value = dict.Find("streamUrl");
  if (!stream_url_value) {
    return false;
  }
  {
    auto* temp = (*stream_url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.stream_url = *temp;
  }

  const base::Value* tab_id_value = dict.Find("tabId");
  if (!tab_id_value) {
    return false;
  }
  {
    auto temp = (*tab_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.tab_id = *temp;
  }

  const base::Value* response_headers_value = dict.Find("responseHeaders");
  if (!response_headers_value) {
    return false;
  }
  {
    if (!(*response_headers_value).is_dict()) {
      return false;
    }
    if (!ResponseHeaders::Populate((*response_headers_value).GetDict(), out.response_headers)) {
      return false;
    }
  }

  const base::Value* embedded_value = dict.Find("embedded");
  if (!embedded_value) {
    return false;
  }
  {
    auto temp = (*embedded_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.embedded = *temp;
  }

  return true;
}

// static
bool StreamInfo::Populate(
    const base::Value& value, StreamInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<StreamInfo> StreamInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<StreamInfo>();
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
absl::optional<StreamInfo> StreamInfo::FromValue(const base::Value::Dict& value) {
  StreamInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<StreamInfo> StreamInfo::FromValue(const base::Value& value) {
  StreamInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict StreamInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("mimeType", this->mime_type);

  to_value_result.Set("originalUrl", this->original_url);

  to_value_result.Set("streamUrl", this->stream_url);

  to_value_result.Set("tabId", this->tab_id);

  to_value_result.Set("responseHeaders", (this->response_headers).ToValue());

  to_value_result.Set("embedded", this->embedded);


  return to_value_result;
}


PdfPluginAttributes::PdfPluginAttributes()
: background_color(0.0),
allow_javascript(false) {}

PdfPluginAttributes::~PdfPluginAttributes() = default;
PdfPluginAttributes::PdfPluginAttributes(PdfPluginAttributes&& rhs) = default;
PdfPluginAttributes& PdfPluginAttributes::operator=(PdfPluginAttributes&& rhs) = default;
PdfPluginAttributes PdfPluginAttributes::Clone() const {
  PdfPluginAttributes out;
  out.background_color = background_color;
  out.allow_javascript = allow_javascript;
  return out;
}

// static
bool PdfPluginAttributes::Populate(
    const base::Value::Dict& dict, PdfPluginAttributes& out) {
  const base::Value* background_color_value = dict.Find("backgroundColor");
  if (!background_color_value) {
    return false;
  }
  {
    auto temp = (*background_color_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.background_color = *temp;
  }

  const base::Value* allow_javascript_value = dict.Find("allowJavascript");
  if (!allow_javascript_value) {
    return false;
  }
  {
    auto temp = (*allow_javascript_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.allow_javascript = *temp;
  }

  return true;
}

// static
bool PdfPluginAttributes::Populate(
    const base::Value& value, PdfPluginAttributes& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<PdfPluginAttributes> PdfPluginAttributes::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<PdfPluginAttributes>();
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
absl::optional<PdfPluginAttributes> PdfPluginAttributes::FromValue(const base::Value::Dict& value) {
  PdfPluginAttributes out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<PdfPluginAttributes> PdfPluginAttributes::FromValue(const base::Value& value) {
  PdfPluginAttributes out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict PdfPluginAttributes::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("backgroundColor", this->background_color);

  to_value_result.Set("allowJavascript", this->allow_javascript);


  return to_value_result;
}



//
// Events
//

namespace OnSave {

const char kEventName[] = "mimeHandlerPrivate.onSave";

base::Value::List Create(const std::string& stream_url) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(stream_url);

  return create_results;
}

}  // namespace OnSave

}  // namespace mime_handler_private
}  // namespace api
}  // namespace extensions

