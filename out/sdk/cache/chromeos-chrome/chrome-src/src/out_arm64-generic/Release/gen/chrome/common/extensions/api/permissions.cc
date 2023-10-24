// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/permissions.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/permissions.h"

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
namespace permissions {
//
// Types
//

Permissions::Permissions()
 {}

Permissions::~Permissions() = default;
Permissions::Permissions(Permissions&& rhs) = default;
Permissions& Permissions::operator=(Permissions&& rhs) = default;
Permissions Permissions::Clone() const {
  Permissions out;
  out.permissions = permissions;
  out.origins = origins;
  return out;
}

// static
bool Permissions::Populate(
    const base::Value::Dict& dict, Permissions& out) {
  const base::Value* permissions_value = dict.Find("permissions");
  if (permissions_value) {
    {
      if (!(*permissions_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*permissions_value).GetList(), out.permissions)) {
          return false;
        }
      }
    }
  }

  const base::Value* origins_value = dict.Find("origins");
  if (origins_value) {
    {
      if (!(*origins_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*origins_value).GetList(), out.origins)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool Permissions::Populate(
    const base::Value& value, Permissions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<Permissions> Permissions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Permissions>();
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
absl::optional<Permissions> Permissions::FromValue(const base::Value::Dict& value) {
  Permissions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Permissions> Permissions::FromValue(const base::Value& value) {
  Permissions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict Permissions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->permissions) {
    to_value_result.Set("permissions", json_schema_compiler::util::CreateValueFromArray(*this->permissions));

  }
  if (this->origins) {
    to_value_result.Set("origins", json_schema_compiler::util::CreateValueFromArray(*this->origins));

  }

  return to_value_result;
}



//
// Functions
//

namespace GetAll {

base::Value::List Results::Create(const Permissions& permissions) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((permissions).ToValue());

  return create_results;
}
}  // namespace GetAll

namespace Contains {

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
    const base::Value& permissions_value = args[0];
    {
      if (!permissions_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Permissions::Populate(permissions_value.GetDict(), params.permissions)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace Contains

namespace Request {

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
    const base::Value& permissions_value = args[0];
    {
      if (!permissions_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Permissions::Populate(permissions_value.GetDict(), params.permissions)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool granted) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(granted);

  return create_results;
}
}  // namespace Request

namespace Remove {

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
    const base::Value& permissions_value = args[0];
    {
      if (!permissions_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Permissions::Populate(permissions_value.GetDict(), params.permissions)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool removed) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(removed);

  return create_results;
}
}  // namespace Remove

//
// Events
//

namespace OnAdded {

const char kEventName[] = "permissions.onAdded";

base::Value::List Create(const Permissions& permissions) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((permissions).ToValue());

  return create_results;
}

}  // namespace OnAdded

namespace OnRemoved {

const char kEventName[] = "permissions.onRemoved";

base::Value::List Create(const Permissions& permissions) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((permissions).ToValue());

  return create_results;
}

}  // namespace OnRemoved

}  // namespace permissions
}  // namespace api
}  // namespace extensions

