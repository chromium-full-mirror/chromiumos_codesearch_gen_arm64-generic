// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/incognito.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_INCOGNITO_H__
#define EXTENSIONS_COMMON_API_INCOGNITO_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace incognito {

//
// Types
//

enum class IncognitoMode {
  kNone = 0,
  kSplit,
  kSpanning,
  kNotAllowed,
  kMaxValue = kNotAllowed,
};


const char* ToString(IncognitoMode as_enum);
IncognitoMode ParseIncognitoMode(base::StringPiece as_string);
std::u16string GetIncognitoModeParseError(base::StringPiece as_string);


//
// Manifest Keys
//

struct ManifestKeys {
  ManifestKeys();
  ~ManifestKeys();
  ManifestKeys(const ManifestKeys&) = delete;
  ManifestKeys& operator=(const ManifestKeys&) = delete;
  ManifestKeys(ManifestKeys&& rhs);
  ManifestKeys& operator=(ManifestKeys&& rhs);

  // Manifest key constants.
  static constexpr char kIncognito[] = "incognito";

  // Parses manifest keys for this namespace. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // is populated.
  static bool ParseFromDictionary(const base::Value::Dict& root_dict, ManifestKeys& out, std::u16string& error);


  // Configures whether and how the extension runs in incognito mode. Default mode
  // is <code>spanning</code>.
  IncognitoMode incognito;

};

}  // namespace incognito
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_INCOGNITO_H__
