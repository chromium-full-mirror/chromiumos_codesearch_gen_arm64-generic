// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/requirements.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/requirements.h"

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
namespace requirements {
//
// Types
//

const char* ToString(_3DFeature enum_param) {
  switch (enum_param) {
    case _3DFeature::kWebgl:
      return "webgl";
    case _3DFeature::kCss3d:
      return "css3d";
    case _3DFeature::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

_3DFeature Parse_3DFeature(base::StringPiece enum_string) {
  if (enum_string == "webgl")
    return _3DFeature::kWebgl;
  if (enum_string == "css3d")
    return _3DFeature::kCss3d;
  return _3DFeature::kNone;
}

std::u16string Get_3DFeatureParseError(base::StringPiece enum_string) {
  return u"expected \"webgl\" or \"css3d\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



//
// Manifest Keys
//

ManifestKeys::Requirements::Plugins::Plugins()
 {}

ManifestKeys::Requirements::Plugins::~Plugins() = default;
ManifestKeys::Requirements::Plugins::Plugins(Plugins&& rhs) noexcept = default;
ManifestKeys::Requirements::Plugins& ManifestKeys::Requirements::Plugins::operator=(Plugins&& rhs) noexcept = default;
// static
constexpr char ManifestKeys::Requirements::Plugins::kNpapi[];

//static
bool ManifestKeys::Requirements::Plugins::ParseFromDictionary(
const base::Value::Dict& root_dict, base::StringPiece key, Plugins& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed) {

  const base::Value* value = ::json_schema_compiler::manifest_parse_util::FindKeyOfType(root_dict, key, base::Value::Type::DICT, error, error_path_reversed);
  if (!value)
    return false;
  const base::Value::Dict& dict = value->GetDict();
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kNpapi, out.npapi, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  return true;
}


ManifestKeys::Requirements::_3D::_3D()
 {}

ManifestKeys::Requirements::_3D::~_3D() = default;
ManifestKeys::Requirements::_3D::_3D(_3D&& rhs) noexcept = default;
ManifestKeys::Requirements::_3D& ManifestKeys::Requirements::_3D::operator=(_3D&& rhs) noexcept = default;
// static
constexpr char ManifestKeys::Requirements::_3D::kFeatures[];

//static
bool ManifestKeys::Requirements::_3D::ParseFromDictionary(
const base::Value::Dict& root_dict, base::StringPiece key, _3D& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed) {

  const base::Value* value = ::json_schema_compiler::manifest_parse_util::FindKeyOfType(root_dict, key, base::Value::Type::DICT, error, error_path_reversed);
  if (!value)
    return false;
  const base::Value::Dict& dict = value->GetDict();
  if (!::json_schema_compiler::manifest_parse_util::ParseEnumArrayFromDictionary(dict, kFeatures, &Parse_3DFeature, _3DFeature(), out.features, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  return true;
}


ManifestKeys::Requirements::Window::Window()
 {}

ManifestKeys::Requirements::Window::~Window() = default;
ManifestKeys::Requirements::Window::Window(Window&& rhs) noexcept = default;
ManifestKeys::Requirements::Window& ManifestKeys::Requirements::Window::operator=(Window&& rhs) noexcept = default;
// static
constexpr char ManifestKeys::Requirements::Window::kShape[];

//static
bool ManifestKeys::Requirements::Window::ParseFromDictionary(
const base::Value::Dict& root_dict, base::StringPiece key, Window& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed) {

  const base::Value* value = ::json_schema_compiler::manifest_parse_util::FindKeyOfType(root_dict, key, base::Value::Type::DICT, error, error_path_reversed);
  if (!value)
    return false;
  const base::Value::Dict& dict = value->GetDict();
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kShape, out.shape, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  return true;
}



ManifestKeys::Requirements::Requirements()
 {}

ManifestKeys::Requirements::~Requirements() = default;
ManifestKeys::Requirements::Requirements(Requirements&& rhs) noexcept = default;
ManifestKeys::Requirements& ManifestKeys::Requirements::operator=(Requirements&& rhs) noexcept = default;
// static
constexpr char ManifestKeys::Requirements::kPlugins[];
// static
constexpr char ManifestKeys::Requirements::k3d[];
// static
constexpr char ManifestKeys::Requirements::kWindow[];

//static
bool ManifestKeys::Requirements::ParseFromDictionary(
const base::Value::Dict& root_dict, base::StringPiece key, Requirements& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed) {

  const base::Value* value = ::json_schema_compiler::manifest_parse_util::FindKeyOfType(root_dict, key, base::Value::Type::DICT, error, error_path_reversed);
  if (!value)
    return false;
  const base::Value::Dict& dict = value->GetDict();
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kPlugins, out.plugins, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, k3d, out._3d, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kWindow, out.window, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  return true;
}



ManifestKeys::ManifestKeys()
 {}

ManifestKeys::~ManifestKeys() = default;
ManifestKeys::ManifestKeys(ManifestKeys&& rhs) noexcept = default;
ManifestKeys& ManifestKeys::operator=(ManifestKeys&& rhs) noexcept = default;
// static
constexpr char ManifestKeys::kRequirements[];

//static
bool ManifestKeys::ParseFromDictionary(
const base::Value::Dict& root_dict, ManifestKeys& out, std::u16string& error) {

  std::vector<base::StringPiece> error_path_reversed;
  const base::Value::Dict& dict = root_dict;
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kRequirements, out.requirements, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  return true;
}


}  // namespace requirements
}  // namespace api
}  // namespace extensions

