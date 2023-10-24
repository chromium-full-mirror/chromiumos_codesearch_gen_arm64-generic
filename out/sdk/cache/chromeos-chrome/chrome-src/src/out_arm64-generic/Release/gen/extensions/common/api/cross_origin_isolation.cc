// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/cross_origin_isolation.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/cross_origin_isolation.h"

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
#include "tools/json_schema_compiler/manifest_parse_util.h"

#include "base/strings/string_piece.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace cross_origin_isolation {
//
// Types
//

ResponseHeader::ResponseHeader()
 {}

ResponseHeader::~ResponseHeader() = default;
ResponseHeader::ResponseHeader(ResponseHeader&& rhs) = default;
ResponseHeader& ResponseHeader::operator=(ResponseHeader&& rhs) = default;
// static
constexpr char ResponseHeader::kValue[];

ResponseHeader ResponseHeader::Clone() const {
  ResponseHeader out;
  out.value = value;
  return out;
}

// static
bool ResponseHeader::Populate(
    const base::Value::Dict& dict, ResponseHeader& out) {
  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    {
      auto* temp = (*value_value).GetIfString();
      if (!temp) {
        out.value = absl::nullopt;
        return false;
      }
      out.value = *temp;
    }
  }

  return true;
}

// static
bool ResponseHeader::Populate(
    const base::Value& value, ResponseHeader& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ResponseHeader> ResponseHeader::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ResponseHeader>();
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
absl::optional<ResponseHeader> ResponseHeader::FromValue(const base::Value::Dict& value) {
  ResponseHeader out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ResponseHeader> ResponseHeader::FromValue(const base::Value& value) {
  ResponseHeader out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ResponseHeader::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->value) {
    to_value_result.Set("value", *this->value);

  }

  return to_value_result;
}

//static
bool ResponseHeader::ParseFromDictionary(
const base::Value::Dict& root_dict, base::StringPiece key, ResponseHeader& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed) {

  const base::Value* value = ::json_schema_compiler::manifest_parse_util::FindKeyOfType(root_dict, key, base::Value::Type::DICT, error, error_path_reversed);
  if (!value)
    return false;
  const base::Value::Dict& dict = value->GetDict();
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kValue, out.value, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  return true;
}



//
// Manifest Keys
//

ManifestKeys::ManifestKeys()
 {}

ManifestKeys::~ManifestKeys() = default;
ManifestKeys::ManifestKeys(ManifestKeys&& rhs) = default;
ManifestKeys& ManifestKeys::operator=(ManifestKeys&& rhs) = default;
// static
constexpr char ManifestKeys::kCrossOriginEmbedderPolicy[];
// static
constexpr char ManifestKeys::kCrossOriginOpenerPolicy[];

//static
bool ManifestKeys::ParseFromDictionary(
const base::Value::Dict& root_dict, ManifestKeys& out, std::u16string& error) {

  std::vector<base::StringPiece> error_path_reversed;
  const base::Value::Dict& dict = root_dict;
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kCrossOriginEmbedderPolicy, out.cross_origin_embedder_policy, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kCrossOriginOpenerPolicy, out.cross_origin_opener_policy, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  return true;
}


}  // namespace cross_origin_isolation
}  // namespace api
}  // namespace extensions

