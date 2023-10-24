// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/platform_keys_internal.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/platform_keys_internal.h"

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
#include "chrome/common/extensions/api/platform_keys.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace platform_keys_internal {
//
// Functions
//

namespace SelectClientCertificates {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return absl::nullopt;
      }
      if (!extensions::api::platform_keys::SelectDetails::Populate(details_value.GetDict(), params.details)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<extensions::api::platform_keys::Match>& certs) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(certs));

  return create_results;
}
}  // namespace SelectClientCertificates

namespace Sign {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 5) {
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
    const base::Value& public_key_value = args[1];
    {
      if (!public_key_value.is_blob()) {
        return absl::nullopt;
      }
      else {
        params.public_key = public_key_value.GetBlob();
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& algorithm_name_value = args[2];
    {
      auto* temp = algorithm_name_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.algorithm_name = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (3 < args.size() &&
      !args[3].is_none()) {
    const base::Value& hash_algorithm_name_value = args[3];
    {
      auto* temp = hash_algorithm_name_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.hash_algorithm_name = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (4 < args.size() &&
      !args[4].is_none()) {
    const base::Value& data_value = args[4];
    {
      if (!data_value.is_blob()) {
        return absl::nullopt;
      }
      else {
        params.data = data_value.GetBlob();
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<uint8_t>& signature) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value(signature));

  return create_results;
}
}  // namespace Sign

namespace GetPublicKey {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& certificate_value = args[0];
    {
      if (!certificate_value.is_blob()) {
        return absl::nullopt;
      }
      else {
        params.certificate = certificate_value.GetBlob();
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& algorithm_name_value = args[1];
    {
      auto* temp = algorithm_name_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.algorithm_name = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


Results::Algorithm::Algorithm()
 {}

Results::Algorithm::~Algorithm() = default;
Results::Algorithm::Algorithm(Algorithm&& rhs) = default;
Results::Algorithm& Results::Algorithm::operator=(Algorithm&& rhs) = default;
base::Value::Dict Results::Algorithm::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::Value::List Results::Create(const std::vector<uint8_t>& public_key, const Algorithm& algorithm) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(base::Value(public_key));

  create_results.Append((algorithm).ToValue());

  return create_results;
}
}  // namespace GetPublicKey

namespace GetPublicKeyBySpki {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& public_key_spki_der_value = args[0];
    {
      if (!public_key_spki_der_value.is_blob()) {
        return absl::nullopt;
      }
      else {
        params.public_key_spki_der = public_key_spki_der_value.GetBlob();
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& algorithm_name_value = args[1];
    {
      auto* temp = algorithm_name_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.algorithm_name = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


Results::Algorithm::Algorithm()
 {}

Results::Algorithm::~Algorithm() = default;
Results::Algorithm::Algorithm(Algorithm&& rhs) = default;
Results::Algorithm& Results::Algorithm::operator=(Algorithm&& rhs) = default;
base::Value::Dict Results::Algorithm::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::Value::List Results::Create(const std::vector<uint8_t>& public_key, const Algorithm& algorithm) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(base::Value(public_key));

  create_results.Append((algorithm).ToValue());

  return create_results;
}
}  // namespace GetPublicKeyBySpki

}  // namespace platform_keys_internal
}  // namespace api
}  // namespace extensions

