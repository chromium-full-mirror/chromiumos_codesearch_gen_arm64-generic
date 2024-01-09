// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/oauth2.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_OAUTH2_H__
#define EXTENSIONS_COMMON_API_OAUTH2_H__

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
namespace oauth2 {

//
// Types
//

struct OAuth2Info {
  OAuth2Info();
  ~OAuth2Info();
  OAuth2Info(const OAuth2Info&) = delete;
  OAuth2Info& operator=(const OAuth2Info&) = delete;
  OAuth2Info(OAuth2Info&& rhs) noexcept;
  OAuth2Info& operator=(OAuth2Info&& rhs) noexcept;

  // Manifest key constants.
  static constexpr char kAutoApprove[] = "auto_approve";
  static constexpr char kClientId[] = "client_id";
  static constexpr char kScopes[] = "scopes";

  // Populates a OAuth2Info object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, OAuth2Info& out);

  // Populates a OAuth2Info object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, OAuth2Info& out);

  // Creates a deep copy of OAuth2Info.
  OAuth2Info Clone() const;

  // Creates a OAuth2Info object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<OAuth2Info> FromValue(const base::Value::Dict& value);

  // Creates a OAuth2Info object from a base::Value, or nullopt on failure.
  static std::optional<OAuth2Info> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisOAuth2Info object.
  base::Value::Dict ToValue() const;

  // Parses the given |key| from |root_dict|. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // and |error_path_reversed| are populated.
  static bool ParseFromDictionary(const base::Value::Dict& root_dict, base::StringPiece key, OAuth2Info& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed);


  // Whether the approval UI should be skipped. Only available to allowlisted
  // extensions/apps.
  std::optional<bool> auto_approve;

  // Client ID of the corresponding extension/app.
  std::optional<std::string> client_id;

  // Scopes the extension/app needs access to.
  std::vector<std::string> scopes;

};


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
  static constexpr char kOauth2[] = "oauth2";

  // Parses manifest keys for this namespace. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // is populated.
  static bool ParseFromDictionary(const base::Value::Dict& root_dict, ManifestKeys& out, std::u16string& error);


  OAuth2Info oauth2;

};

}  // namespace oauth2
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_OAUTH2_H__
