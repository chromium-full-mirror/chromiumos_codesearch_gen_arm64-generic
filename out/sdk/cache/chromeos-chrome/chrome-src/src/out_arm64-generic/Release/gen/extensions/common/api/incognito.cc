// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/incognito.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/incognito.h"

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
namespace incognito {
//
// Types
//

const char* ToString(IncognitoMode enum_param) {
  switch (enum_param) {
    case IncognitoMode::kSplit:
      return "split";
    case IncognitoMode::kSpanning:
      return "spanning";
    case IncognitoMode::kNotAllowed:
      return "not_allowed";
    case IncognitoMode::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

IncognitoMode ParseIncognitoMode(base::StringPiece enum_string) {
  if (enum_string == "split")
    return IncognitoMode::kSplit;
  if (enum_string == "spanning")
    return IncognitoMode::kSpanning;
  if (enum_string == "not_allowed")
    return IncognitoMode::kNotAllowed;
  return IncognitoMode::kNone;
}

std::u16string GetIncognitoModeParseError(base::StringPiece enum_string) {
  return u"expected \"split\" or \"spanning\" or \"not_allowed\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



//
// Manifest Keys
//

ManifestKeys::ManifestKeys()
: incognito() {}

ManifestKeys::~ManifestKeys() = default;
ManifestKeys::ManifestKeys(ManifestKeys&& rhs) = default;
ManifestKeys& ManifestKeys::operator=(ManifestKeys&& rhs) = default;
// static
constexpr char ManifestKeys::kIncognito[];

//static
bool ManifestKeys::ParseFromDictionary(
const base::Value::Dict& root_dict, ManifestKeys& out, std::u16string& error) {

  std::vector<base::StringPiece> error_path_reversed;
  const base::Value::Dict& dict = root_dict;
  out.incognito = IncognitoMode();
  if (!::json_schema_compiler::manifest_parse_util::ParseEnumFromDictionary(dict, kIncognito, &ParseIncognitoMode, true, IncognitoMode(), out.incognito, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  return true;
}


}  // namespace incognito
}  // namespace api
}  // namespace extensions

