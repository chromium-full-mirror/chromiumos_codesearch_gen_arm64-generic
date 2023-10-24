// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/enterprise_platform_keys_internal.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/enterprise_platform_keys_internal.h"

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

using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace enterprise_platform_keys_internal {
//
// Types
//

Hash::Hash()
 {}

Hash::~Hash() = default;
Hash::Hash(Hash&& rhs) = default;
Hash& Hash::operator=(Hash&& rhs) = default;
Hash Hash::Clone() const {
  Hash out;
  out.name = name;
  return out;
}

// static
bool Hash::Populate(
    const base::Value::Dict& dict, Hash& out) {
  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.name = *temp;
  }

  return true;
}

// static
bool Hash::Populate(
    const base::Value& value, Hash& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<Hash> Hash::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Hash>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<Hash> Hash::FromValue(const base::Value::Dict& value) {
  Hash out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Hash> Hash::FromValue(const base::Value& value) {
  Hash out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict Hash::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("name", this->name);


  return to_value_result;
}


Algorithm::Algorithm()
 {}

Algorithm::~Algorithm() = default;
Algorithm::Algorithm(Algorithm&& rhs) = default;
Algorithm& Algorithm::operator=(Algorithm&& rhs) = default;
Algorithm Algorithm::Clone() const {
  Algorithm out;
  out.name = name;
  out.modulus_length = modulus_length;
  out.public_exponent = public_exponent;
  if (hash) {
    out.hash = hash->Clone();
  }
  out.named_curve = named_curve;
  return out;
}

// static
bool Algorithm::Populate(
    const base::Value::Dict& dict, Algorithm& out) {
  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.name = *temp;
  }

  const base::Value* modulus_length_value = dict.Find("modulusLength");
  if (modulus_length_value) {
    {
      auto temp = (*modulus_length_value).GetIfInt();
      if (!temp.has_value()) {
        out.modulus_length = absl::nullopt;
        return false;
      }
      out.modulus_length = *temp;
    }
  }

  const base::Value* public_exponent_value = dict.Find("publicExponent");
  if (public_exponent_value) {
    {
      if (!(*public_exponent_value).is_blob()) {
        return false;
      }
      else {
        out.public_exponent = (*public_exponent_value).GetBlob();
      }
    }
  }

  const base::Value* hash_value = dict.Find("hash");
  if (hash_value) {
    {
      if (!(*hash_value).is_dict()) {
        return false;
      }
      else {
        Hash temp;
        if (!Hash::Populate((*hash_value).GetDict(), temp))
          return false;
        out.hash = std::move(temp);
      }
    }
  }

  const base::Value* named_curve_value = dict.Find("namedCurve");
  if (named_curve_value) {
    {
      auto* temp = (*named_curve_value).GetIfString();
      if (!temp) {
        out.named_curve = absl::nullopt;
        return false;
      }
      out.named_curve = *temp;
    }
  }

  return true;
}

// static
bool Algorithm::Populate(
    const base::Value& value, Algorithm& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<Algorithm> Algorithm::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Algorithm>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<Algorithm> Algorithm::FromValue(const base::Value::Dict& value) {
  Algorithm out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Algorithm> Algorithm::FromValue(const base::Value& value) {
  Algorithm out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict Algorithm::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("name", this->name);

  if (this->modulus_length) {
    to_value_result.Set("modulusLength", *this->modulus_length);

  }
  if (this->public_exponent) {
    to_value_result.Set("publicExponent", base::Value(*this->public_exponent));

  }
  if (this->hash) {
    to_value_result.Set("hash", (this->hash)->ToValue());

  }
  if (this->named_curve) {
    to_value_result.Set("namedCurve", *this->named_curve);

  }

  return to_value_result;
}



//
// Functions
//

namespace GetTokens {

base::Value::List Results::Create(const std::vector<std::string>& token_ids) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(token_ids));

  return create_results;
}
}  // namespace GetTokens

namespace GenerateKey {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 3) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& token_id_value = args[0];
    {
      auto* temp = token_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.token_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& algorithm_value = args[1];
    {
      if (!algorithm_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Algorithm::Populate(algorithm_value.GetDict(), params.algorithm)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& software_backed_value = args[2];
    {
      auto temp = software_backed_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.software_backed = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<uint8_t>& public_key) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value(public_key));

  return create_results;
}
}  // namespace GenerateKey

}  // namespace enterprise_platform_keys_internal
}  // namespace api
}  // namespace extensions

