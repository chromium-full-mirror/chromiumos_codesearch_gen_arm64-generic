// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/crash_report_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/crash_report_private.h"

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
namespace crash_report_private {
//
// Types
//

ErrorInfo::ErrorInfo()
 {}

ErrorInfo::~ErrorInfo() = default;
ErrorInfo::ErrorInfo(ErrorInfo&& rhs) noexcept = default;
ErrorInfo& ErrorInfo::operator=(ErrorInfo&& rhs) noexcept = default;
ErrorInfo ErrorInfo::Clone() const {
  ErrorInfo out;
  out.message = message;
  out.url = url;
  out.product = product;
  out.version = version;
  out.line_number = line_number;
  out.column_number = column_number;
  out.debug_id = debug_id;
  out.stack_trace = stack_trace;
  return out;
}

// static
bool ErrorInfo::Populate(
    const base::Value::Dict& dict, ErrorInfo& out) {
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

  const base::Value* url_value = dict.Find("url");
  if (!url_value) {
    return false;
  }
  {
    auto* temp = (*url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.url = *temp;
  }

  const base::Value* product_value = dict.Find("product");
  if (product_value) {
    {
      auto* temp = (*product_value).GetIfString();
      if (!temp) {
        out.product = std::nullopt;
        return false;
      }
      out.product = *temp;
    }
  }

  const base::Value* version_value = dict.Find("version");
  if (version_value) {
    {
      auto* temp = (*version_value).GetIfString();
      if (!temp) {
        out.version = std::nullopt;
        return false;
      }
      out.version = *temp;
    }
  }

  const base::Value* line_number_value = dict.Find("lineNumber");
  if (line_number_value) {
    {
      auto temp = (*line_number_value).GetIfInt();
      if (!temp.has_value()) {
        out.line_number = std::nullopt;
        return false;
      }
      out.line_number = *temp;
    }
  }

  const base::Value* column_number_value = dict.Find("columnNumber");
  if (column_number_value) {
    {
      auto temp = (*column_number_value).GetIfInt();
      if (!temp.has_value()) {
        out.column_number = std::nullopt;
        return false;
      }
      out.column_number = *temp;
    }
  }

  const base::Value* debug_id_value = dict.Find("debugId");
  if (debug_id_value) {
    {
      auto* temp = (*debug_id_value).GetIfString();
      if (!temp) {
        out.debug_id = std::nullopt;
        return false;
      }
      out.debug_id = *temp;
    }
  }

  const base::Value* stack_trace_value = dict.Find("stackTrace");
  if (stack_trace_value) {
    {
      auto* temp = (*stack_trace_value).GetIfString();
      if (!temp) {
        out.stack_trace = std::nullopt;
        return false;
      }
      out.stack_trace = *temp;
    }
  }

  return true;
}

// static
bool ErrorInfo::Populate(
    const base::Value& value, ErrorInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ErrorInfo> ErrorInfo::FromValue(const base::Value::Dict& value) {
  ErrorInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ErrorInfo> ErrorInfo::FromValue(const base::Value& value) {
  ErrorInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ErrorInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("message", this->message);

  to_value_result.Set("url", this->url);

  if (this->product) {
    to_value_result.Set("product", *this->product);

  }
  if (this->version) {
    to_value_result.Set("version", *this->version);

  }
  if (this->line_number) {
    to_value_result.Set("lineNumber", *this->line_number);

  }
  if (this->column_number) {
    to_value_result.Set("columnNumber", *this->column_number);

  }
  if (this->debug_id) {
    to_value_result.Set("debugId", *this->debug_id);

  }
  if (this->stack_trace) {
    to_value_result.Set("stackTrace", *this->stack_trace);

  }

  return to_value_result;
}



//
// Functions
//

namespace ReportError {

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
    const base::Value& info_value = args[0];
    {
      if (!info_value.is_dict()) {
        return std::nullopt;
      }
      if (!ErrorInfo::Populate(info_value.GetDict(), params.info)) {
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
}  // namespace ReportError

}  // namespace crash_report_private
}  // namespace api
}  // namespace extensions

