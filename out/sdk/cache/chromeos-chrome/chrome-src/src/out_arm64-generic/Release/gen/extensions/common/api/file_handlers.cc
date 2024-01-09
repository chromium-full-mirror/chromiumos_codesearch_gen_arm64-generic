// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/file_handlers.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/file_handlers.h"

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
namespace file_handlers {
//
// Types
//

Icon::Icon()
 {}

Icon::~Icon() = default;
Icon::Icon(Icon&& rhs) noexcept = default;
Icon& Icon::operator=(Icon&& rhs) noexcept = default;
Icon Icon::Clone() const {
  Icon out;
  out.src = src;
  out.sizes = sizes;
  out.type = type;
  return out;
}

// static
bool Icon::Populate(
    const base::Value::Dict& dict, Icon& out, std::u16string& error) {
  const base::Value* src_value = dict.Find("src");
  if (!src_value) {
    DCHECK(error.empty());
    error = u"'src' is required";
    return false;
  }
  {
    auto* temp = (*src_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'src': expected src, got " + UTF8ToUTF16(base::Value::GetTypeName((*src_value).type()));
      return false;
    }
    out.src = *temp;
  }

  const base::Value* sizes_value = dict.Find("sizes");
  if (sizes_value) {
    {
      auto* temp = (*sizes_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'sizes': expected sizes, got " + UTF8ToUTF16(base::Value::GetTypeName((*sizes_value).type()));
        out.sizes = std::nullopt;
        return false;
      }
      out.sizes = *temp;
    }
  }

  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    {
      auto* temp = (*type_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'type': expected type, got " + UTF8ToUTF16(base::Value::GetTypeName((*type_value).type()));
        out.type = std::nullopt;
        return false;
      }
      out.type = *temp;
    }
  }

  return true;
}

// static
bool Icon::Populate(
    const base::Value& value, Icon& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<Icon, std::u16string> Icon::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  Icon out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<Icon, std::u16string> Icon::FromValue(const base::Value& value) {
  std::u16string error;
  Icon out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict Icon::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("src", this->src);

  if (this->sizes) {
    to_value_result.Set("sizes", *this->sizes);

  }
  if (this->type) {
    to_value_result.Set("type", *this->type);

  }

  return to_value_result;
}


FileHandler::Accept::Accept()
 {}

FileHandler::Accept::~Accept() = default;
FileHandler::Accept::Accept(Accept&& rhs) noexcept = default;
FileHandler::Accept& FileHandler::Accept::operator=(Accept&& rhs) noexcept = default;
FileHandler::Accept FileHandler::Accept::Clone() const {
  Accept out;
  return out;
}

// static
bool FileHandler::Accept::Populate(
    const base::Value::Dict& dict, Accept& out, std::u16string& error) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool FileHandler::Accept::Populate(
    const base::Value& value, Accept& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<FileHandler::Accept, std::u16string> FileHandler::Accept::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  Accept out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<FileHandler::Accept, std::u16string> FileHandler::Accept::FromValue(const base::Value& value) {
  std::u16string error;
  Accept out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict FileHandler::Accept::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}

//static
bool FileHandler::Accept::ParseFromDictionary(
const base::Value::Dict& root_dict, base::StringPiece key, Accept& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed) {

  const base::Value* value = ::json_schema_compiler::manifest_parse_util::FindKeyOfType(root_dict, key, base::Value::Type::DICT, error, error_path_reversed);
  if (!value)
    return false;

  return true;
}



FileHandler::FileHandler()
 {}

FileHandler::~FileHandler() = default;
FileHandler::FileHandler(FileHandler&& rhs) noexcept = default;
FileHandler& FileHandler::operator=(FileHandler&& rhs) noexcept = default;
// static
constexpr char FileHandler::kAccept[];
// static
constexpr char FileHandler::kAction[];
// static
constexpr char FileHandler::kName[];
// static
constexpr char FileHandler::kIcons[];
// static
constexpr char FileHandler::kLaunchType[];

FileHandler FileHandler::Clone() const {
  FileHandler out;
  out.accept = accept.Clone();
  out.action = action;
  out.name = name;
  if (icons) {
    out.icons.emplace();
    out.icons->reserve(icons->size());
    for (const auto& element : *icons) {
      json_schema_compiler::util::AppendToContainer(*out.icons, element.Clone());
    }
  }
  out.launch_type = launch_type;
  return out;
}

// static
bool FileHandler::Populate(
    const base::Value::Dict& dict, FileHandler& out, std::u16string& error) {
  const base::Value* accept_value = dict.Find("accept");
  if (!accept_value) {
    DCHECK(error.empty());
    error = u"'accept' is required";
    return false;
  }
  {
    if (!(*accept_value).is_dict()) {
      DCHECK(error.empty());
      error = u"'accept': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName((*accept_value).type()));
      return false;
    }
    if (!Accept::Populate((*accept_value).GetDict(), out.accept, error)) {
      return false;
    }
  }

  const base::Value* action_value = dict.Find("action");
  if (!action_value) {
    DCHECK(error.empty());
    error = u"'action' is required";
    return false;
  }
  {
    auto* temp = (*action_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'action': expected action, got " + UTF8ToUTF16(base::Value::GetTypeName((*action_value).type()));
      return false;
    }
    out.action = *temp;
  }

  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    DCHECK(error.empty());
    error = u"'name' is required";
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'name': expected name, got " + UTF8ToUTF16(base::Value::GetTypeName((*name_value).type()));
      return false;
    }
    out.name = *temp;
  }

  const base::Value* icons_value = dict.Find("icons");
  if (icons_value) {
    {
      if (!(*icons_value).is_list()) {
        DCHECK(error.empty());
        error = u"'icons': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*icons_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*icons_value).GetList(), out.icons, array_parse_error)) {
          array_parse_error = u"Error at key 'icons': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  const base::Value* launch_type_value = dict.Find("launch_type");
  if (launch_type_value) {
    {
      auto* temp = (*launch_type_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'launch_type': expected launch_type, got " + UTF8ToUTF16(base::Value::GetTypeName((*launch_type_value).type()));
        out.launch_type = std::nullopt;
        return false;
      }
      out.launch_type = *temp;
    }
  }

  return true;
}

// static
bool FileHandler::Populate(
    const base::Value& value, FileHandler& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<FileHandler, std::u16string> FileHandler::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  FileHandler out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<FileHandler, std::u16string> FileHandler::FromValue(const base::Value& value) {
  std::u16string error;
  FileHandler out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict FileHandler::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("accept", (this->accept).ToValue());

  to_value_result.Set("action", this->action);

  to_value_result.Set("name", this->name);

  if (this->icons) {
    to_value_result.Set("icons", json_schema_compiler::util::CreateValueFromArray(*this->icons));

  }
  if (this->launch_type) {
    to_value_result.Set("launch_type", *this->launch_type);

  }

  return to_value_result;
}

//static
bool FileHandler::ParseFromDictionary(
const base::Value::Dict& root_dict, base::StringPiece key, FileHandler& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed) {

  const base::Value* value = ::json_schema_compiler::manifest_parse_util::FindKeyOfType(root_dict, key, base::Value::Type::DICT, error, error_path_reversed);
  if (!value)
    return false;
  const base::Value::Dict& dict = value->GetDict();
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kAccept, out.accept, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kAction, out.action, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kName, out.name, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kIcons, out.icons, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kLaunchType, out.launch_type, error, error_path_reversed)) {
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
constexpr char ManifestKeys::kFileHandlers[];

//static
bool ManifestKeys::ParseFromDictionary(
const base::Value::Dict& root_dict, ManifestKeys& out, std::u16string& error) {

  std::vector<base::StringPiece> error_path_reversed;
  const base::Value::Dict& dict = root_dict;
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kFileHandlers, out.file_handlers, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  return true;
}


}  // namespace file_handlers
}  // namespace api
}  // namespace extensions

