// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/login_screen_storage.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/login_screen_storage.h"

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
namespace login_screen_storage {
//
// Functions
//

namespace StorePersistentData {

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
    const base::Value& extension_ids_value = args[0];
    {
      if (!extension_ids_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(extension_ids_value.GetList(), params.extension_ids)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& data_value = args[1];
    {
      auto* temp = data_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.data = *temp;
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
}  // namespace StorePersistentData

namespace RetrievePersistentData {

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
    const base::Value& owner_id_value = args[0];
    {
      auto* temp = owner_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.owner_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& data) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(data);

  return create_results;
}
}  // namespace RetrievePersistentData

namespace StoreCredentials {

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
    const base::Value& extension_id_value = args[0];
    {
      auto* temp = extension_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.extension_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& credentials_value = args[1];
    {
      auto* temp = credentials_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.credentials = *temp;
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
}  // namespace StoreCredentials

namespace RetrieveCredentials {

base::Value::List Results::Create(const std::string& data) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(data);

  return create_results;
}
}  // namespace RetrieveCredentials

}  // namespace login_screen_storage
}  // namespace api
}  // namespace extensions

