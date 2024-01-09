// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/chrome_url_overrides.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/chrome_url_overrides.h"

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
namespace chrome_url_overrides {
//
// Types
//

UrlOverrideInfo::UrlOverrideInfo()
 {}

UrlOverrideInfo::~UrlOverrideInfo() = default;
UrlOverrideInfo::UrlOverrideInfo(UrlOverrideInfo&& rhs) noexcept = default;
UrlOverrideInfo& UrlOverrideInfo::operator=(UrlOverrideInfo&& rhs) noexcept = default;
// static
constexpr char UrlOverrideInfo::kNewtab[];
// static
constexpr char UrlOverrideInfo::kBookmarks[];
// static
constexpr char UrlOverrideInfo::kHistory[];
// static
constexpr char UrlOverrideInfo::kActivationmessage[];
// static
constexpr char UrlOverrideInfo::kKeyboard[];

UrlOverrideInfo UrlOverrideInfo::Clone() const {
  UrlOverrideInfo out;
  out.newtab = newtab;
  out.bookmarks = bookmarks;
  out.history = history;
  out.activationmessage = activationmessage;
  out.keyboard = keyboard;
  return out;
}

// static
bool UrlOverrideInfo::Populate(
    const base::Value::Dict& dict, UrlOverrideInfo& out) {
  const base::Value* newtab_value = dict.Find("newtab");
  if (newtab_value) {
    {
      auto* temp = (*newtab_value).GetIfString();
      if (!temp) {
        out.newtab = std::nullopt;
        return false;
      }
      out.newtab = *temp;
    }
  }

  const base::Value* bookmarks_value = dict.Find("bookmarks");
  if (bookmarks_value) {
    {
      auto* temp = (*bookmarks_value).GetIfString();
      if (!temp) {
        out.bookmarks = std::nullopt;
        return false;
      }
      out.bookmarks = *temp;
    }
  }

  const base::Value* history_value = dict.Find("history");
  if (history_value) {
    {
      auto* temp = (*history_value).GetIfString();
      if (!temp) {
        out.history = std::nullopt;
        return false;
      }
      out.history = *temp;
    }
  }

  const base::Value* activationmessage_value = dict.Find("activationmessage");
  if (activationmessage_value) {
    {
      auto* temp = (*activationmessage_value).GetIfString();
      if (!temp) {
        out.activationmessage = std::nullopt;
        return false;
      }
      out.activationmessage = *temp;
    }
  }

  const base::Value* keyboard_value = dict.Find("keyboard");
  if (keyboard_value) {
    {
      auto* temp = (*keyboard_value).GetIfString();
      if (!temp) {
        out.keyboard = std::nullopt;
        return false;
      }
      out.keyboard = *temp;
    }
  }

  return true;
}

// static
bool UrlOverrideInfo::Populate(
    const base::Value& value, UrlOverrideInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<UrlOverrideInfo> UrlOverrideInfo::FromValue(const base::Value::Dict& value) {
  UrlOverrideInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<UrlOverrideInfo> UrlOverrideInfo::FromValue(const base::Value& value) {
  UrlOverrideInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict UrlOverrideInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->newtab) {
    to_value_result.Set("newtab", *this->newtab);

  }
  if (this->bookmarks) {
    to_value_result.Set("bookmarks", *this->bookmarks);

  }
  if (this->history) {
    to_value_result.Set("history", *this->history);

  }
  if (this->activationmessage) {
    to_value_result.Set("activationmessage", *this->activationmessage);

  }
  if (this->keyboard) {
    to_value_result.Set("keyboard", *this->keyboard);

  }

  return to_value_result;
}

//static
bool UrlOverrideInfo::ParseFromDictionary(
const base::Value::Dict& root_dict, base::StringPiece key, UrlOverrideInfo& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed) {

  const base::Value* value = ::json_schema_compiler::manifest_parse_util::FindKeyOfType(root_dict, key, base::Value::Type::DICT, error, error_path_reversed);
  if (!value)
    return false;
  const base::Value::Dict& dict = value->GetDict();
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kNewtab, out.newtab, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kBookmarks, out.bookmarks, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kHistory, out.history, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kActivationmessage, out.activationmessage, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kKeyboard, out.keyboard, error, error_path_reversed)) {
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
constexpr char ManifestKeys::kChromeUrlOverrides[];

//static
bool ManifestKeys::ParseFromDictionary(
const base::Value::Dict& root_dict, ManifestKeys& out, std::u16string& error) {

  std::vector<base::StringPiece> error_path_reversed;
  const base::Value::Dict& dict = root_dict;
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kChromeUrlOverrides, out.chrome_url_overrides, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  return true;
}


}  // namespace chrome_url_overrides
}  // namespace api
}  // namespace extensions

