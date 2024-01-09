// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/instance_id.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/instance_id.h"

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
namespace instance_id {
//
// Functions
//

namespace GetID {

base::Value::List Results::Create(const std::string& instance_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(instance_id);

  return create_results;
}
}  // namespace GetID

namespace GetCreationTime {

base::Value::List Results::Create(double creation_time) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(creation_time);

  return create_results;
}
}  // namespace GetCreationTime

namespace GetToken {

Params::GetTokenParams::Options::Options()
 {}

Params::GetTokenParams::Options::~Options() = default;
Params::GetTokenParams::Options::Options(Options&& rhs) noexcept = default;
Params::GetTokenParams::Options& Params::GetTokenParams::Options::operator=(Options&& rhs) noexcept = default;
Params::GetTokenParams::Options Params::GetTokenParams::Options::Clone() const {
  Options out;
  return out;
}

// static
bool Params::GetTokenParams::Options::Populate(
    const base::Value::Dict& dict, Options& out) {
  for (const auto item : dict) {
    std::string tmp;
    {
      auto* temp = item.second.GetIfString();
      if (!temp) {
        return false;
      }
      tmp = *temp;
    }
    out.additional_properties[item.first] = tmp;
  }
  return true;
}

// static
bool Params::GetTokenParams::Options::Populate(
    const base::Value& value, Options& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::GetTokenParams::Options> Params::GetTokenParams::Options::FromValue(const base::Value::Dict& value) {
  Options out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::GetTokenParams::Options> Params::GetTokenParams::Options::FromValue(const base::Value& value) {
  Options out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}



Params::GetTokenParams::GetTokenParams()
 {}

Params::GetTokenParams::~GetTokenParams() = default;
Params::GetTokenParams::GetTokenParams(GetTokenParams&& rhs) noexcept = default;
Params::GetTokenParams& Params::GetTokenParams::operator=(GetTokenParams&& rhs) noexcept = default;
Params::GetTokenParams Params::GetTokenParams::Clone() const {
  GetTokenParams out;
  out.authorized_entity = authorized_entity;
  out.scope = scope;
  if (options) {
    out.options = options->Clone();
  }
  return out;
}

// static
bool Params::GetTokenParams::Populate(
    const base::Value::Dict& dict, GetTokenParams& out) {
  const base::Value* authorized_entity_value = dict.Find("authorizedEntity");
  if (!authorized_entity_value) {
    return false;
  }
  {
    auto* temp = (*authorized_entity_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.authorized_entity = *temp;
  }

  const base::Value* scope_value = dict.Find("scope");
  if (!scope_value) {
    return false;
  }
  {
    auto* temp = (*scope_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.scope = *temp;
  }

  const base::Value* options_value = dict.Find("options");
  if (options_value) {
    {
      if (!(*options_value).is_dict()) {
        return false;
      }
      else {
        Options temp;
        if (!Options::Populate((*options_value).GetDict(), temp))
          return false;
        out.options = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool Params::GetTokenParams::Populate(
    const base::Value& value, GetTokenParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::GetTokenParams> Params::GetTokenParams::FromValue(const base::Value::Dict& value) {
  GetTokenParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::GetTokenParams> Params::GetTokenParams::FromValue(const base::Value& value) {
  GetTokenParams out;
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
    const base::Value& get_token_params_value = args[0];
    {
      if (!get_token_params_value.is_dict()) {
        return std::nullopt;
      }
      if (!GetTokenParams::Populate(get_token_params_value.GetDict(), params.get_token_params)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& token) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(token);

  return create_results;
}
}  // namespace GetToken

namespace DeleteToken {

Params::DeleteTokenParams::DeleteTokenParams()
 {}

Params::DeleteTokenParams::~DeleteTokenParams() = default;
Params::DeleteTokenParams::DeleteTokenParams(DeleteTokenParams&& rhs) noexcept = default;
Params::DeleteTokenParams& Params::DeleteTokenParams::operator=(DeleteTokenParams&& rhs) noexcept = default;
Params::DeleteTokenParams Params::DeleteTokenParams::Clone() const {
  DeleteTokenParams out;
  out.authorized_entity = authorized_entity;
  out.scope = scope;
  return out;
}

// static
bool Params::DeleteTokenParams::Populate(
    const base::Value::Dict& dict, DeleteTokenParams& out) {
  const base::Value* authorized_entity_value = dict.Find("authorizedEntity");
  if (!authorized_entity_value) {
    return false;
  }
  {
    auto* temp = (*authorized_entity_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.authorized_entity = *temp;
  }

  const base::Value* scope_value = dict.Find("scope");
  if (!scope_value) {
    return false;
  }
  {
    auto* temp = (*scope_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.scope = *temp;
  }

  return true;
}

// static
bool Params::DeleteTokenParams::Populate(
    const base::Value& value, DeleteTokenParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::DeleteTokenParams> Params::DeleteTokenParams::FromValue(const base::Value::Dict& value) {
  DeleteTokenParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::DeleteTokenParams> Params::DeleteTokenParams::FromValue(const base::Value& value) {
  DeleteTokenParams out;
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
    const base::Value& delete_token_params_value = args[0];
    {
      if (!delete_token_params_value.is_dict()) {
        return std::nullopt;
      }
      if (!DeleteTokenParams::Populate(delete_token_params_value.GetDict(), params.delete_token_params)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace DeleteToken

namespace DeleteID {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace DeleteID

//
// Events
//

namespace OnTokenRefresh {

const char kEventName[] = "instanceID.onTokenRefresh";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnTokenRefresh

}  // namespace instance_id
}  // namespace api
}  // namespace extensions

