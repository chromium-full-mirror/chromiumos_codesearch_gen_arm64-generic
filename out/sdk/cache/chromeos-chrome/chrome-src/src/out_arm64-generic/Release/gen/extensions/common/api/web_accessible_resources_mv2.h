// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/web_accessible_resources_mv2.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_WEB_ACCESSIBLE_RESOURCES_MV2_H__
#define EXTENSIONS_COMMON_API_WEB_ACCESSIBLE_RESOURCES_MV2_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace web_accessible_resources_mv2 {

//
// Manifest Keys
//

struct ManifestKeys {
  ManifestKeys();
  ~ManifestKeys();
  ManifestKeys(const ManifestKeys&) = delete;
  ManifestKeys& operator=(const ManifestKeys&) = delete;
  ManifestKeys(ManifestKeys&& rhs) noexcept;
  ManifestKeys& operator=(ManifestKeys&& rhs) noexcept;

  // Manifest key constants.
  static constexpr char kWebAccessibleResources[] = "web_accessible_resources";

  // Parses manifest keys for this namespace. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // is populated.
  static bool ParseFromDictionary(const base::Value::Dict& root_dict, ManifestKeys& out, std::u16string& error);


  // Relative paths within the extension package representing web accessible
  // resources.
  std::vector<std::string> web_accessible_resources;

};

}  // namespace web_accessible_resources_mv2
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_WEB_ACCESSIBLE_RESOURCES_MV2_H__
