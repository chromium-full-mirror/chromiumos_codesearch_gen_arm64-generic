// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/oauth2.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/oauth2.h"

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
#include "tools/json_schema_compiler/manifest_parse_util.h"

#include "base/strings/string_piece.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace oauth2 {
//
// Types
//

OAuth2Info::OAuth2Info()
 {}

OAuth2Info::~OAuth2Info() = default;
OAuth2Info::OAuth2Info(OAuth2Info&& rhs) noexcept = default;
OAuth2Info& OAuth2Info::operator=(OAuth2Info&& rhs) noexcept = default;
// static
constexpr char OAuth2Info::kAutoApprove[];
// static
constexpr char OAuth2Info::kClientId[];
// static
constexpr char OAuth2Info::kScopes[];

OAuth2Info OAuth2Info::Clone() const {
  OAuth2Info out;
  out.auto_approve = auto_approve;
  out.client_id = client_id;
  out.scopes = scopes;
  return out;
}

// static
bool OAuth2Info::Populate(
    const base::Value::Dict& dict, OAuth2Info& out) {
  const base::Value* auto_approve_value = dict.Find("auto_approve");
  if (auto_approve_value) {
    {
      auto temp = (*auto_approve_value).GetIfBool();
      if (!temp.has_value()) {
        out.auto_approve = std::nullopt;
        return false;
      }
      out.auto_approve = *temp;
    }
  }

  const base::Value* client_id_value = dict.Find("client_id");
  if (client_id_value) {
    {
      auto* temp = (*client_id_value).GetIfString();
      if (!temp) {
        out.client_id = std::nullopt;
        return false;
      }
      out.client_id = *temp;
    }
  }

  const base::Value* scopes_value = dict.Find("scopes");
  if (!scopes_value) {
    return false;
  }
  {
    if (!(*scopes_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*scopes_value).GetList(), out.scopes)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool OAuth2Info::Populate(
    const base::Value& value, OAuth2Info& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<OAuth2Info> OAuth2Info::FromValue(const base::Value::Dict& value) {
  OAuth2Info out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<OAuth2Info> OAuth2Info::FromValue(const base::Value& value) {
  OAuth2Info out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict OAuth2Info::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->auto_approve) {
    to_value_result.Set("auto_approve", *this->auto_approve);

  }
  if (this->client_id) {
    to_value_result.Set("client_id", *this->client_id);

  }
  to_value_result.Set("scopes", json_schema_compiler::util::CreateValueFromArray(this->scopes));


  return to_value_result;
}

//static
bool OAuth2Info::ParseFromDictionary(
const base::Value::Dict& root_dict, base::StringPiece key, OAuth2Info& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed) {

  const base::Value* value = ::json_schema_compiler::manifest_parse_util::FindKeyOfType(root_dict, key, base::Value::Type::DICT, error, error_path_reversed);
  if (!value)
    return false;
  const base::Value::Dict& dict = value->GetDict();
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kAutoApprove, out.auto_approve, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kClientId, out.client_id, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kScopes, out.scopes, error, error_path_reversed)) {
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
ManifestKeys::ManifestKeys(ManifestKeys&& rhs) noexcept = default;
ManifestKeys& ManifestKeys::operator=(ManifestKeys&& rhs) noexcept = default;
// static
constexpr char ManifestKeys::kOauth2[];

//static
bool ManifestKeys::ParseFromDictionary(
const base::Value::Dict& root_dict, ManifestKeys& out, std::u16string& error) {

  std::vector<base::StringPiece> error_path_reversed;
  const base::Value::Dict& dict = root_dict;
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kOauth2, out.oauth2, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  return true;
}


}  // namespace oauth2
}  // namespace api
}  // namespace extensions

