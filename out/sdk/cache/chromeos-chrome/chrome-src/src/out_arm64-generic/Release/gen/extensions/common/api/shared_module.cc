// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/shared_module.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/shared_module.h"

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
#include "base/types/expected.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace shared_module {
//
// Types
//

Import::Import()
 {}

Import::~Import() = default;
Import::Import(Import&& rhs) noexcept = default;
Import& Import::operator=(Import&& rhs) noexcept = default;
// static
constexpr char Import::kId[];
// static
constexpr char Import::kMinimumVersion[];

Import Import::Clone() const {
  Import out;
  out.id = id;
  out.minimum_version = minimum_version;
  return out;
}

// static
bool Import::Populate(
    const base::Value::Dict& dict, Import& out, std::u16string& error) {
  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    DCHECK(error.empty());
    error = u"'id' is required";
    return false;
  }
  {
    auto* temp = (*id_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'id': expected id, got " + UTF8ToUTF16(base::Value::GetTypeName((*id_value).type()));
      return false;
    }
    out.id = *temp;
  }

  const base::Value* minimum_version_value = dict.Find("minimum_version");
  if (minimum_version_value) {
    {
      auto* temp = (*minimum_version_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'minimum_version': expected minimum_version, got " + UTF8ToUTF16(base::Value::GetTypeName((*minimum_version_value).type()));
        out.minimum_version = std::nullopt;
        return false;
      }
      out.minimum_version = *temp;
    }
  }

  return true;
}

// static
bool Import::Populate(
    const base::Value& value, Import& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<Import, std::u16string> Import::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  Import out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<Import, std::u16string> Import::FromValue(const base::Value& value) {
  std::u16string error;
  Import out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict Import::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  if (this->minimum_version) {
    to_value_result.Set("minimum_version", *this->minimum_version);

  }

  return to_value_result;
}

//static
bool Import::ParseFromDictionary(
const base::Value::Dict& root_dict, base::StringPiece key, Import& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed) {

  const base::Value* value = ::json_schema_compiler::manifest_parse_util::FindKeyOfType(root_dict, key, base::Value::Type::DICT, error, error_path_reversed);
  if (!value)
    return false;
  const base::Value::Dict& dict = value->GetDict();
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kId, out.id, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kMinimumVersion, out.minimum_version, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  return true;
}


Export::Export()
 {}

Export::~Export() = default;
Export::Export(Export&& rhs) noexcept = default;
Export& Export::operator=(Export&& rhs) noexcept = default;
// static
constexpr char Export::kAllowlist[];

Export Export::Clone() const {
  Export out;
  out.allowlist = allowlist;
  return out;
}

// static
bool Export::Populate(
    const base::Value::Dict& dict, Export& out, std::u16string& error) {
  const base::Value* allowlist_value = dict.Find("allowlist");
  if (allowlist_value) {
    {
      if (!(*allowlist_value).is_list()) {
        DCHECK(error.empty());
        error = u"'allowlist': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*allowlist_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*allowlist_value).GetList(), out.allowlist, array_parse_error)) {
          array_parse_error = u"Error at key 'allowlist': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool Export::Populate(
    const base::Value& value, Export& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<Export, std::u16string> Export::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  Export out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<Export, std::u16string> Export::FromValue(const base::Value& value) {
  std::u16string error;
  Export out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict Export::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->allowlist) {
    to_value_result.Set("allowlist", json_schema_compiler::util::CreateValueFromArray(*this->allowlist));

  }

  return to_value_result;
}

//static
bool Export::ParseFromDictionary(
const base::Value::Dict& root_dict, base::StringPiece key, Export& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed) {

  const base::Value* value = ::json_schema_compiler::manifest_parse_util::FindKeyOfType(root_dict, key, base::Value::Type::DICT, error, error_path_reversed);
  if (!value)
    return false;
  const base::Value::Dict& dict = value->GetDict();
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kAllowlist, out.allowlist, error, error_path_reversed)) {
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
constexpr char ManifestKeys::kImport[];
// static
constexpr char ManifestKeys::kExport[];

//static
bool ManifestKeys::ParseFromDictionary(
const base::Value::Dict& root_dict, ManifestKeys& out, std::u16string& error) {

  std::vector<base::StringPiece> error_path_reversed;
  const base::Value::Dict& dict = root_dict;
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kImport, out.import, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kExport, out.export_, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  return true;
}


}  // namespace shared_module
}  // namespace api
}  // namespace extensions

