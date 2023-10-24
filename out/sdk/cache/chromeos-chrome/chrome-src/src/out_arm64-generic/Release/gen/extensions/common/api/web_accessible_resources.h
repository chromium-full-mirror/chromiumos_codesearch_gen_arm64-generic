// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/web_accessible_resources.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_WEB_ACCESSIBLE_RESOURCES_H__
#define EXTENSIONS_COMMON_API_WEB_ACCESSIBLE_RESOURCES_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"
#include "base/types/expected.h"


namespace extensions {
namespace api {
namespace web_accessible_resources {

//
// Types
//

struct WebAccessibleResource {
  WebAccessibleResource();
  ~WebAccessibleResource();
  WebAccessibleResource(const WebAccessibleResource&) = delete;
  WebAccessibleResource& operator=(const WebAccessibleResource&) = delete;
  WebAccessibleResource(WebAccessibleResource&& rhs);
  WebAccessibleResource& operator=(WebAccessibleResource&& rhs);

  // Manifest key constants.
  static constexpr char kResources[] = "resources";
  static constexpr char kMatches[] = "matches";
  static constexpr char kExtensionIds[] = "extension_ids";
  static constexpr char kUseDynamicUrl[] = "use_dynamic_url";

  // Populates a WebAccessibleResource object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, WebAccessibleResource& out, std::u16string& error);

  // Populates a WebAccessibleResource object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, WebAccessibleResource& out, std::u16string& error);

  // Creates a deep copy of WebAccessibleResource.
  WebAccessibleResource Clone() const;

  // Creates a WebAccessibleResource object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<WebAccessibleResource> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a WebAccessibleResource object from a base::Value::Dict, or
  // unexpected on failure.
  static base::expected<WebAccessibleResource, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a WebAccessibleResource object from a base::Value, or unexpected on
  // failure.
  static base::expected<WebAccessibleResource, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisWebAccessibleResource object.
  base::Value::Dict ToValue() const;

  // Parses the given |key| from |root_dict|. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // and |error_path_reversed| are populated.
  static bool ParseFromDictionary(const base::Value::Dict& root_dict, base::StringPiece key, WebAccessibleResource& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed);


  // Relative paths within the extension package representing web accessible
  // resources.
  std::vector<std::string> resources;

  // List of <a
  // href="https://developer.chrome.com/docs/extensions/mv3/match_patterns/">match
  // patterns</a> to which "resources" are accessible. These patterns should have
  // an effective path of "*". Each match will be checked against the initiating
  // origin.
  absl::optional<std::vector<std::string>> matches;

  // List of extension IDs the "resources" are accessible to. A wildcard can be
  // used, denoted by "*".
  absl::optional<std::vector<std::string>> extension_ids;

  // If true, the web accessible resources will only be accessible through a
  // dynamic ID. This is an identifier that uniquely identifies the extension and
  // is generated each session. The corresponding dynamic extension URL is
  // available through $(ref:runtime.getURL).
  absl::optional<bool> use_dynamic_url;

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
  static constexpr char kWebAccessibleResources[] = "web_accessible_resources";

  // Parses manifest keys for this namespace. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // is populated.
  static bool ParseFromDictionary(const base::Value::Dict& root_dict, ManifestKeys& out, std::u16string& error);


  std::vector<WebAccessibleResource> web_accessible_resources;

};

}  // namespace web_accessible_resources
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_WEB_ACCESSIBLE_RESOURCES_H__
