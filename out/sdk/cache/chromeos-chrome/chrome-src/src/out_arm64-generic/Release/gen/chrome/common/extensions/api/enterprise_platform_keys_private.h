// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/enterprise_platform_keys_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_PLATFORM_KEYS_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_PLATFORM_KEYS_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace enterprise_platform_keys_private {

//
// Functions
//

namespace ChallengeMachineKey {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Challenge to be signed in base64.
  std::string challenge;


 private:
  Params();
};

namespace Results {

// Response in base64.
base::Value::List Create(const std::string& response);
}  // namespace Results

}  // namespace ChallengeMachineKey

namespace ChallengeUserKey {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Challenge to be signed in base64.
  std::string challenge;

  // If true, the key will be registered.
  bool register_key;


 private:
  Params();
};

namespace Results {

// Response in base64.
base::Value::List Create(const std::string& response);
}  // namespace Results

}  // namespace ChallengeUserKey

}  // namespace enterprise_platform_keys_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_PLATFORM_KEYS_PRIVATE_H__
