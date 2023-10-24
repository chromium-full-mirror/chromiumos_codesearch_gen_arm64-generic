// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/cross_origin_isolation.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_CROSS_ORIGIN_ISOLATION_H__
#define EXTENSIONS_COMMON_API_CROSS_ORIGIN_ISOLATION_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace cross_origin_isolation {

//
// Types
//

struct ResponseHeader {
  ResponseHeader();
  ~ResponseHeader();
  ResponseHeader(const ResponseHeader&) = delete;
  ResponseHeader& operator=(const ResponseHeader&) = delete;
  ResponseHeader(ResponseHeader&& rhs);
  ResponseHeader& operator=(ResponseHeader&& rhs);

  // Manifest key constants.
  static constexpr char kValue[] = "value";

  // Populates a ResponseHeader object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ResponseHeader& out);

  // Populates a ResponseHeader object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ResponseHeader& out);

  // Creates a deep copy of ResponseHeader.
  ResponseHeader Clone() const;

  // Creates a ResponseHeader object from a base::Value, or NULL on failure.
  static std::unique_ptr<ResponseHeader> FromValueDeprecated(const base::Value& value);

  // Creates a ResponseHeader object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ResponseHeader> FromValue(const base::Value::Dict& value);

  // Creates a ResponseHeader object from a base::Value, or nullopt on failure.
  static absl::optional<ResponseHeader> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisResponseHeader object.
  base::Value::Dict ToValue() const;

  // Parses the given |key| from |root_dict|. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // and |error_path_reversed| are populated.
  static bool ParseFromDictionary(const base::Value::Dict& root_dict, base::StringPiece key, ResponseHeader& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed);


  absl::optional<std::string> value;

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
  static constexpr char kCrossOriginEmbedderPolicy[] = "cross_origin_embedder_policy";
  static constexpr char kCrossOriginOpenerPolicy[] = "cross_origin_opener_policy";

  // Parses manifest keys for this namespace. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // is populated.
  static bool ParseFromDictionary(const base::Value::Dict& root_dict, ManifestKeys& out, std::u16string& error);


  absl::optional<ResponseHeader> cross_origin_embedder_policy;

  absl::optional<ResponseHeader> cross_origin_opener_policy;

};

}  // namespace cross_origin_isolation
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_CROSS_ORIGIN_ISOLATION_H__
