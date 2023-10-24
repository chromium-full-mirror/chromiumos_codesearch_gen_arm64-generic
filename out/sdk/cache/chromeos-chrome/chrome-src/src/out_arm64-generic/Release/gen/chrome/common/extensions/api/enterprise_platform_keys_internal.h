// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/enterprise_platform_keys_internal.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_PLATFORM_KEYS_INTERNAL_H__
#define CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_PLATFORM_KEYS_INTERNAL_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace enterprise_platform_keys_internal {

//
// Types
//

struct Hash {
  Hash();
  ~Hash();
  Hash(const Hash&) = delete;
  Hash& operator=(const Hash&) = delete;
  Hash(Hash&& rhs);
  Hash& operator=(Hash&& rhs);

  // Populates a Hash object from a base::Value& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value& value, Hash& out);

  // Populates a Hash object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Hash& out);

  // Creates a deep copy of Hash.
  Hash Clone() const;

  // Creates a Hash object from a base::Value, or NULL on failure.
  static std::unique_ptr<Hash> FromValueDeprecated(const base::Value& value);

  // Creates a Hash object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<Hash> FromValue(const base::Value::Dict& value);

  // Creates a Hash object from a base::Value, or nullopt on failure.
  static absl::optional<Hash> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisHash object.
  base::Value::Dict ToValue() const;

  std::string name;

};

struct Algorithm {
  Algorithm();
  ~Algorithm();
  Algorithm(const Algorithm&) = delete;
  Algorithm& operator=(const Algorithm&) = delete;
  Algorithm(Algorithm&& rhs);
  Algorithm& operator=(Algorithm&& rhs);

  // Populates a Algorithm object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Algorithm& out);

  // Populates a Algorithm object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, Algorithm& out);

  // Creates a deep copy of Algorithm.
  Algorithm Clone() const;

  // Creates a Algorithm object from a base::Value, or NULL on failure.
  static std::unique_ptr<Algorithm> FromValueDeprecated(const base::Value& value);

  // Creates a Algorithm object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<Algorithm> FromValue(const base::Value::Dict& value);

  // Creates a Algorithm object from a base::Value, or nullopt on failure.
  static absl::optional<Algorithm> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAlgorithm object.
  base::Value::Dict ToValue() const;

  // Provided for all algorithms.
  std::string name;

  // Provided in case of RSASSA-PKCS1-v1_5.
  absl::optional<int> modulus_length;

  absl::optional<std::vector<uint8_t>> public_exponent;

  absl::optional<Hash> hash;

  // Provided in case of ECDSA.
  absl::optional<std::string> named_curve;

};


//
// Functions
//

namespace GetTokens {

namespace Results {

base::Value::List Create(const std::vector<std::string>& token_ids);
}  // namespace Results

}  // namespace GetTokens

namespace GenerateKey {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string token_id;

  Algorithm algorithm;

  bool software_backed;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<uint8_t>& public_key);
}  // namespace Results

}  // namespace GenerateKey

}  // namespace enterprise_platform_keys_internal
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_PLATFORM_KEYS_INTERNAL_H__
