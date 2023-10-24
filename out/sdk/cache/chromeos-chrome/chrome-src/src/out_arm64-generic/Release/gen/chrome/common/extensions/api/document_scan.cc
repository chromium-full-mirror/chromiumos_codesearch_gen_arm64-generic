// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/document_scan.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/document_scan.h"

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
namespace document_scan {
//
// Types
//

ScanOptions::ScanOptions()
 {}

ScanOptions::~ScanOptions() = default;
ScanOptions::ScanOptions(ScanOptions&& rhs) = default;
ScanOptions& ScanOptions::operator=(ScanOptions&& rhs) = default;
ScanOptions ScanOptions::Clone() const {
  ScanOptions out;
  out.mime_types = mime_types;
  out.max_images = max_images;
  return out;
}

// static
bool ScanOptions::Populate(
    const base::Value::Dict& dict, ScanOptions& out) {
  const base::Value* mime_types_value = dict.Find("mimeTypes");
  if (mime_types_value) {
    {
      if (!(*mime_types_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*mime_types_value).GetList(), out.mime_types)) {
          return false;
        }
      }
    }
  }

  const base::Value* max_images_value = dict.Find("maxImages");
  if (max_images_value) {
    {
      auto temp = (*max_images_value).GetIfInt();
      if (!temp.has_value()) {
        out.max_images = absl::nullopt;
        return false;
      }
      out.max_images = *temp;
    }
  }

  return true;
}

// static
bool ScanOptions::Populate(
    const base::Value& value, ScanOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ScanOptions> ScanOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ScanOptions>();
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
absl::optional<ScanOptions> ScanOptions::FromValue(const base::Value::Dict& value) {
  ScanOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ScanOptions> ScanOptions::FromValue(const base::Value& value) {
  ScanOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ScanOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->mime_types) {
    to_value_result.Set("mimeTypes", json_schema_compiler::util::CreateValueFromArray(*this->mime_types));

  }
  if (this->max_images) {
    to_value_result.Set("maxImages", *this->max_images);

  }

  return to_value_result;
}


ScanResults::ScanResults()
 {}

ScanResults::~ScanResults() = default;
ScanResults::ScanResults(ScanResults&& rhs) = default;
ScanResults& ScanResults::operator=(ScanResults&& rhs) = default;
ScanResults ScanResults::Clone() const {
  ScanResults out;
  out.data_urls = data_urls;
  out.mime_type = mime_type;
  return out;
}

// static
bool ScanResults::Populate(
    const base::Value::Dict& dict, ScanResults& out) {
  const base::Value* data_urls_value = dict.Find("dataUrls");
  if (!data_urls_value) {
    return false;
  }
  {
    if (!(*data_urls_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*data_urls_value).GetList(), out.data_urls)) {
        return false;
      }
    }
  }

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

  return true;
}

// static
bool ScanResults::Populate(
    const base::Value& value, ScanResults& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ScanResults> ScanResults::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ScanResults>();
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
absl::optional<ScanResults> ScanResults::FromValue(const base::Value::Dict& value) {
  ScanResults out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ScanResults> ScanResults::FromValue(const base::Value& value) {
  ScanResults out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ScanResults::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("dataUrls", json_schema_compiler::util::CreateValueFromArray(this->data_urls));

  to_value_result.Set("mimeType", this->mime_type);


  return to_value_result;
}



//
// Functions
//

namespace Scan {

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
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return absl::nullopt;
      }
      if (!ScanOptions::Populate(options_value.GetDict(), params.options)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const ScanResults& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace Scan

}  // namespace document_scan
}  // namespace api
}  // namespace extensions

