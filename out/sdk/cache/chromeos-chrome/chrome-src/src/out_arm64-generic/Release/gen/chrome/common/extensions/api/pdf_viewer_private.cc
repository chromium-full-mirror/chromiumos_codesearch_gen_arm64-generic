// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/pdf_viewer_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/pdf_viewer_private.h"

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
namespace pdf_viewer_private {
//
// Types
//

StreamInfo::StreamInfo()
: tab_id(0),
embedded(false) {}

StreamInfo::~StreamInfo() = default;
StreamInfo::StreamInfo(StreamInfo&& rhs) noexcept = default;
StreamInfo& StreamInfo::operator=(StreamInfo&& rhs) noexcept = default;
StreamInfo StreamInfo::Clone() const {
  StreamInfo out;
  out.original_url = original_url;
  out.stream_url = stream_url;
  out.tab_id = tab_id;
  out.embedded = embedded;
  return out;
}

// static
bool StreamInfo::Populate(
    const base::Value::Dict& dict, StreamInfo& out) {
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
std::optional<StreamInfo> StreamInfo::FromValue(const base::Value::Dict& value) {
  StreamInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<StreamInfo> StreamInfo::FromValue(const base::Value& value) {
  StreamInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict StreamInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("originalUrl", this->original_url);

  to_value_result.Set("streamUrl", this->stream_url);

  to_value_result.Set("tabId", this->tab_id);

  to_value_result.Set("embedded", this->embedded);


  return to_value_result;
}


PdfPluginAttributes::PdfPluginAttributes()
: background_color(0.0),
allow_javascript(false) {}

PdfPluginAttributes::~PdfPluginAttributes() = default;
PdfPluginAttributes::PdfPluginAttributes(PdfPluginAttributes&& rhs) noexcept = default;
PdfPluginAttributes& PdfPluginAttributes::operator=(PdfPluginAttributes&& rhs) noexcept = default;
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
std::optional<PdfPluginAttributes> PdfPluginAttributes::FromValue(const base::Value::Dict& value) {
  PdfPluginAttributes out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PdfPluginAttributes> PdfPluginAttributes::FromValue(const base::Value& value) {
  PdfPluginAttributes out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
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
// Functions
//

namespace GetStreamInfo {

base::Value::List Results::Create(const StreamInfo& stream_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((stream_info).ToValue());

  return create_results;
}
}  // namespace GetStreamInfo

namespace IsAllowedLocalFileAccess {

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
    const base::Value& url_value = args[0];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace IsAllowedLocalFileAccess

namespace IsPdfOcrAlwaysActive {

base::Value::List Results::Create(bool result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace IsPdfOcrAlwaysActive

namespace SetPdfOcrPref {

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
    const base::Value& value_value = args[0];
    {
      auto temp = value_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.value = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace SetPdfOcrPref

namespace SetPdfPluginAttributes {

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
    const base::Value& attributes_value = args[0];
    {
      if (!attributes_value.is_dict()) {
        return std::nullopt;
      }
      if (!PdfPluginAttributes::Populate(attributes_value.GetDict(), params.attributes)) {
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
}  // namespace SetPdfPluginAttributes

//
// Events
//

namespace OnPdfOcrPrefChanged {

const char kEventName[] = "pdfViewerPrivate.onPdfOcrPrefChanged";

base::Value::List Create(bool value) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(value);

  return create_results;
}

}  // namespace OnPdfOcrPrefChanged

namespace OnSave {

const char kEventName[] = "pdfViewerPrivate.onSave";

base::Value::List Create(const std::string& stream_url) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(stream_url);

  return create_results;
}

}  // namespace OnSave

}  // namespace pdf_viewer_private
}  // namespace api
}  // namespace extensions

