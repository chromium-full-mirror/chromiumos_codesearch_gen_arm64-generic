// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/platform_keys_internal.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_PLATFORM_KEYS_INTERNAL_H__
#define CHROME_COMMON_EXTENSIONS_API_PLATFORM_KEYS_INTERNAL_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "chrome/common/extensions/api/platform_keys.h"


namespace extensions {
namespace api {
namespace platform_keys_internal {

//
// Functions
//

namespace SelectClientCertificates {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  extensions::api::platform_keys::SelectDetails details;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<extensions::api::platform_keys::Match>& certs);
}  // namespace Results

}  // namespace SelectClientCertificates

namespace Sign {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string token_id;

  std::vector<uint8_t> public_key;

  std::string algorithm_name;

  std::string hash_algorithm_name;

  std::vector<uint8_t> data;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<uint8_t>& signature);
}  // namespace Results

}  // namespace Sign

namespace GetPublicKey {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::vector<uint8_t> certificate;

  std::string algorithm_name;


 private:
  Params();
};

namespace Results {

struct Algorithm {
  Algorithm();
  ~Algorithm();
  Algorithm(const Algorithm&) = delete;
  Algorithm& operator=(const Algorithm&) = delete;
  Algorithm(Algorithm&& rhs) noexcept;
  Algorithm& operator=(Algorithm&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAlgorithm object.
  base::Value::Dict ToValue() const;

  base::Value::Dict additional_properties;
};


base::Value::List Create(const std::vector<uint8_t>& public_key, const Algorithm& algorithm);
}  // namespace Results

}  // namespace GetPublicKey

namespace GetPublicKeyBySpki {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::vector<uint8_t> public_key_spki_der;

  std::string algorithm_name;


 private:
  Params();
};

namespace Results {

struct Algorithm {
  Algorithm();
  ~Algorithm();
  Algorithm(const Algorithm&) = delete;
  Algorithm& operator=(const Algorithm&) = delete;
  Algorithm(Algorithm&& rhs) noexcept;
  Algorithm& operator=(Algorithm&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAlgorithm object.
  base::Value::Dict ToValue() const;

  base::Value::Dict additional_properties;
};


base::Value::List Create(const std::vector<uint8_t>& public_key, const Algorithm& algorithm);
}  // namespace Results

}  // namespace GetPublicKeyBySpki

}  // namespace platform_keys_internal
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_PLATFORM_KEYS_INTERNAL_H__
