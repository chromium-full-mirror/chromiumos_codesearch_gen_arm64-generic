// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/echo_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/echo_private.h"

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

using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace echo_private {
//
// Functions
//

namespace SetOfferInfo {

Params::OfferInfo::OfferInfo()
 {}

Params::OfferInfo::~OfferInfo() = default;
Params::OfferInfo::OfferInfo(OfferInfo&& rhs) noexcept = default;
Params::OfferInfo& Params::OfferInfo::operator=(OfferInfo&& rhs) noexcept = default;
Params::OfferInfo Params::OfferInfo::Clone() const {
  OfferInfo out;
  return out;
}

// static
bool Params::OfferInfo::Populate(
    const base::Value::Dict& dict, OfferInfo& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool Params::OfferInfo::Populate(
    const base::Value& value, OfferInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::OfferInfo> Params::OfferInfo::FromValue(const base::Value::Dict& value) {
  OfferInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::OfferInfo> Params::OfferInfo::FromValue(const base::Value& value) {
  OfferInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& offer_info_value = args[1];
    {
      if (!offer_info_value.is_dict()) {
        return std::nullopt;
      }
      if (!OfferInfo::Populate(offer_info_value.GetDict(), params.offer_info)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetOfferInfo

namespace GetOfferInfo {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


Results::Result::Result()
 {}

Results::Result::~Result() = default;
Results::Result::Result(Result&& rhs) noexcept = default;
Results::Result& Results::Result::operator=(Result&& rhs) noexcept = default;
base::Value::Dict Results::Result::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::Value::List Results::Create(const Result& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace GetOfferInfo

namespace GetRegistrationCode {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& type_value = args[0];
    {
      auto* temp = type_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.type = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace GetRegistrationCode

namespace GetOobeTimestamp {

base::Value::List Results::Create(const std::string& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace GetOobeTimestamp

namespace GetUserConsent {

Params::ConsentRequester::ConsentRequester()
 {}

Params::ConsentRequester::~ConsentRequester() = default;
Params::ConsentRequester::ConsentRequester(ConsentRequester&& rhs) noexcept = default;
Params::ConsentRequester& Params::ConsentRequester::operator=(ConsentRequester&& rhs) noexcept = default;
Params::ConsentRequester Params::ConsentRequester::Clone() const {
  ConsentRequester out;
  out.service_name = service_name;
  out.origin = origin;
  out.tab_id = tab_id;
  return out;
}

// static
bool Params::ConsentRequester::Populate(
    const base::Value::Dict& dict, ConsentRequester& out) {
  const base::Value* service_name_value = dict.Find("serviceName");
  if (!service_name_value) {
    return false;
  }
  {
    auto* temp = (*service_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.service_name = *temp;
  }

  const base::Value* origin_value = dict.Find("origin");
  if (!origin_value) {
    return false;
  }
  {
    auto* temp = (*origin_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.origin = *temp;
  }

  const base::Value* tab_id_value = dict.Find("tabId");
  if (tab_id_value) {
    {
      auto temp = (*tab_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.tab_id = std::nullopt;
        return false;
      }
      out.tab_id = *temp;
    }
  }

  return true;
}

// static
bool Params::ConsentRequester::Populate(
    const base::Value& value, ConsentRequester& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::ConsentRequester> Params::ConsentRequester::FromValue(const base::Value::Dict& value) {
  ConsentRequester out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::ConsentRequester> Params::ConsentRequester::FromValue(const base::Value& value) {
  ConsentRequester out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& consent_requester_value = args[0];
    {
      if (!consent_requester_value.is_dict()) {
        return std::nullopt;
      }
      if (!ConsentRequester::Populate(consent_requester_value.GetDict(), params.consent_requester)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace GetUserConsent

}  // namespace echo_private
}  // namespace api
}  // namespace extensions

