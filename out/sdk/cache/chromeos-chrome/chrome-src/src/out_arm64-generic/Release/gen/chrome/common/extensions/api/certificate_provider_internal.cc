// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/certificate_provider_internal.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/certificate_provider_internal.h"

#include <memory>
#include <optional>
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
#include "chrome/common/extensions/api/certificate_provider.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace certificate_provider_internal {
//
// Functions
//

namespace ReportSignature {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& signature_value = args[1];
    {
      if (!signature_value.is_blob()) {
        return std::nullopt;
      }
      else {
        params.signature = signature_value.GetBlob();
      }
    }
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace ReportSignature

namespace ReportCertificates {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& certificates_value = args[1];
    {
      if (!certificates_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(certificates_value.GetList(), params.certificates)) {
          return std::nullopt;
        }
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const std::vector<std::vector<uint8_t>>& rejected_certificates) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(rejected_certificates));

  return create_results;
}
}  // namespace ReportCertificates

}  // namespace certificate_provider_internal
}  // namespace api
}  // namespace extensions

