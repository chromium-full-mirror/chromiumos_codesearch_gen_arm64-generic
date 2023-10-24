// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/shared_storage_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/shared_storage_private.h"

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
namespace shared_storage_private {
//
// Functions
//

namespace Get {

Results::Items::Items()
 {}

Results::Items::~Items() = default;
Results::Items::Items(Items&& rhs) = default;
Results::Items& Results::Items::operator=(Items&& rhs) = default;
base::Value::Dict Results::Items::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::Value::List Results::Create(const Items& items) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((items).ToValue());

  return create_results;
}
}  // namespace Get

namespace Set {

Params::Items::Items()
 {}

Params::Items::~Items() = default;
Params::Items::Items(Items&& rhs) = default;
Params::Items& Params::Items::operator=(Items&& rhs) = default;
Params::Items Params::Items::Clone() const {
  Items out;
  return out;
}

// static
bool Params::Items::Populate(
    const base::Value::Dict& dict, Items& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool Params::Items::Populate(
    const base::Value& value, Items& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Items> Params::Items::FromValue(const base::Value::Dict& value) {
  Items out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Items> Params::Items::FromValue(const base::Value& value) {
  Items out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


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
    const base::Value& items_value = args[0];
    {
      if (!items_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Items::Populate(items_value.GetDict(), params.items)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace Set

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
    const base::Value& keys_value = args[0];
    {
      if (!keys_value.is_list()) {
        return absl::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(keys_value.GetList(), params.keys)) {
          return absl::nullopt;
        }
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace Remove

}  // namespace shared_storage_private
}  // namespace api
}  // namespace extensions

