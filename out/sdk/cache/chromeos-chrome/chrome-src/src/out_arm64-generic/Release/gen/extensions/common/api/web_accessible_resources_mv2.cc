// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/web_accessible_resources_mv2.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/web_accessible_resources_mv2.h"

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
namespace web_accessible_resources_mv2 {
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


}  // namespace web_accessible_resources_mv2
}  // namespace api
}  // namespace extensions

