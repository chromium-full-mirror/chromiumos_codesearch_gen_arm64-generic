// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/web_accessible_resources.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/web_accessible_resources.h"

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
#include "base/types/expected.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace web_accessible_resources {
//
// Types
//

WebAccessibleResource::WebAccessibleResource()
 {}

WebAccessibleResource::~WebAccessibleResource() = default;
WebAccessibleResource::WebAccessibleResource(WebAccessibleResource&& rhs) = default;
WebAccessibleResource& WebAccessibleResource::operator=(WebAccessibleResource&& rhs) = default;
// static
constexpr char WebAccessibleResource::kResources[];
// static
constexpr char WebAccessibleResource::kMatches[];
// static
constexpr char WebAccessibleResource::kExtensionIds[];
// static
constexpr char WebAccessibleResource::kUseDynamicUrl[];

WebAccessibleResource WebAccessibleResource::Clone() const {
  WebAccessibleResource out;
  out.resources = resources;
  out.matches = matches;
  out.extension_ids = extension_ids;
  out.use_dynamic_url = use_dynamic_url;
  return out;
}

// static
bool WebAccessibleResource::Populate(
    const base::Value::Dict& dict, WebAccessibleResource& out, std::u16string& error) {
  const base::Value* resources_value = dict.Find("resources");
  if (!resources_value) {
    DCHECK(error.empty());
    error = u"'resources' is required";
    return false;
  }
  {
    if (!(*resources_value).is_list()) {
      DCHECK(error.empty());
      error = u"'resources': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*resources_value).type()));
      return false;
    }
    else {
      std::u16string array_parse_error;
      if (!json_schema_compiler::util::PopulateArrayFromList((*resources_value).GetList(), out.resources, array_parse_error)) {
        array_parse_error = u"Error at key 'resources': " + array_parse_error;
        DCHECK(error.empty());
        error = array_parse_error;
        return false;
      }
    }
  }

  const base::Value* matches_value = dict.Find("matches");
  if (matches_value) {
    {
      if (!(*matches_value).is_list()) {
        DCHECK(error.empty());
        error = u"'matches': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*matches_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*matches_value).GetList(), out.matches, array_parse_error)) {
          array_parse_error = u"Error at key 'matches': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  const base::Value* extension_ids_value = dict.Find("extension_ids");
  if (extension_ids_value) {
    {
      if (!(*extension_ids_value).is_list()) {
        DCHECK(error.empty());
        error = u"'extension_ids': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*extension_ids_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*extension_ids_value).GetList(), out.extension_ids, array_parse_error)) {
          array_parse_error = u"Error at key 'extension_ids': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  const base::Value* use_dynamic_url_value = dict.Find("use_dynamic_url");
  if (use_dynamic_url_value) {
    {
      auto temp = (*use_dynamic_url_value).GetIfBool();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'use_dynamic_url': expected use_dynamic_url, got " + UTF8ToUTF16(base::Value::GetTypeName((*use_dynamic_url_value).type()));
        out.use_dynamic_url = absl::nullopt;
        return false;
      }
      out.use_dynamic_url = *temp;
    }
  }

  return true;
}

// static
bool WebAccessibleResource::Populate(
    const base::Value& value, WebAccessibleResource& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
std::unique_ptr<WebAccessibleResource> WebAccessibleResource::FromValueDeprecated(const base::Value& value, std::u16string* error_ptr) {
  auto out = std::make_unique<WebAccessibleResource>();
  DCHECK(error_ptr);
  auto& error = *error_ptr;
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out, error);
  DCHECK_EQ(result, error.empty());
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
base::expected<WebAccessibleResource, std::u16string> WebAccessibleResource::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  WebAccessibleResource out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<WebAccessibleResource, std::u16string> WebAccessibleResource::FromValue(const base::Value& value) {
  std::u16string error;
  WebAccessibleResource out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict WebAccessibleResource::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("resources", json_schema_compiler::util::CreateValueFromArray(this->resources));

  if (this->matches) {
    to_value_result.Set("matches", json_schema_compiler::util::CreateValueFromArray(*this->matches));

  }
  if (this->extension_ids) {
    to_value_result.Set("extension_ids", json_schema_compiler::util::CreateValueFromArray(*this->extension_ids));

  }
  if (this->use_dynamic_url) {
    to_value_result.Set("use_dynamic_url", *this->use_dynamic_url);

  }

  return to_value_result;
}

//static
bool WebAccessibleResource::ParseFromDictionary(
const base::Value::Dict& root_dict, base::StringPiece key, WebAccessibleResource& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed) {

  const base::Value* value = ::json_schema_compiler::manifest_parse_util::FindKeyOfType(root_dict, key, base::Value::Type::DICT, error, error_path_reversed);
  if (!value)
    return false;
  const base::Value::Dict& dict = value->GetDict();
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kResources, out.resources, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kMatches, out.matches, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kExtensionIds, out.extension_ids, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kUseDynamicUrl, out.use_dynamic_url, error, error_path_reversed)) {
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
constexpr char ManifestKeys::kWebAccessibleResources[];

//static
bool ManifestKeys::ParseFromDictionary(
const base::Value::Dict& root_dict, ManifestKeys& out, std::u16string& error) {

  std::vector<base::StringPiece> error_path_reversed;
  const base::Value::Dict& dict = root_dict;
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kWebAccessibleResources, out.web_accessible_resources, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  return true;
}


}  // namespace web_accessible_resources
}  // namespace api
}  // namespace extensions

