// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/chrome_url_overrides.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_CHROME_URL_OVERRIDES_H__
#define CHROME_COMMON_EXTENSIONS_API_CHROME_URL_OVERRIDES_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace chrome_url_overrides {

//
// Types
//

struct UrlOverrideInfo {
  UrlOverrideInfo();
  ~UrlOverrideInfo();
  UrlOverrideInfo(const UrlOverrideInfo&) = delete;
  UrlOverrideInfo& operator=(const UrlOverrideInfo&) = delete;
  UrlOverrideInfo(UrlOverrideInfo&& rhs);
  UrlOverrideInfo& operator=(UrlOverrideInfo&& rhs);

  // Manifest key constants.
  static constexpr char kNewtab[] = "newtab";
  static constexpr char kBookmarks[] = "bookmarks";
  static constexpr char kHistory[] = "history";
  static constexpr char kActivationmessage[] = "activationmessage";
  static constexpr char kKeyboard[] = "keyboard";

  // Populates a UrlOverrideInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UrlOverrideInfo& out);

  // Populates a UrlOverrideInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, UrlOverrideInfo& out);

  // Creates a deep copy of UrlOverrideInfo.
  UrlOverrideInfo Clone() const;

  // Creates a UrlOverrideInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<UrlOverrideInfo> FromValueDeprecated(const base::Value& value);

  // Creates a UrlOverrideInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<UrlOverrideInfo> FromValue(const base::Value::Dict& value);

  // Creates a UrlOverrideInfo object from a base::Value, or nullopt on failure.
  static absl::optional<UrlOverrideInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisUrlOverrideInfo object.
  base::Value::Dict ToValue() const;

  // Parses the given |key| from |root_dict|. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // and |error_path_reversed| are populated.
  static bool ParseFromDictionary(const base::Value::Dict& root_dict, base::StringPiece key, UrlOverrideInfo& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed);


  // Override for the chrome://newtab page.
  absl::optional<std::string> newtab;

  // Override for the chrome://bookmarks page.
  absl::optional<std::string> bookmarks;

  // Override for the chrome://history page.
  absl::optional<std::string> history;

  absl::optional<std::string> activationmessage;

  absl::optional<std::string> keyboard;

};


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
  static constexpr char kChromeUrlOverrides[] = "chrome_url_overrides";

  // Parses manifest keys for this namespace. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // is populated.
  static bool ParseFromDictionary(const base::Value::Dict& root_dict, ManifestKeys& out, std::u16string& error);


  // Chrome url overrides. Note that an extension can override only one page.
  UrlOverrideInfo chrome_url_overrides;

};

}  // namespace chrome_url_overrides
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_CHROME_URL_OVERRIDES_H__
