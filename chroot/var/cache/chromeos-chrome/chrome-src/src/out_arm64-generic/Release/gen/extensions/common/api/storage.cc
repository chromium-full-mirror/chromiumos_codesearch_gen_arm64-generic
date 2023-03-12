// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/storage.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/storage.h"

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
namespace storage {
//
// Properties
//

namespace sync {
  const int QUOTA_BYTES = 102400;
  const int QUOTA_BYTES_PER_ITEM = 8192;
  const int MAX_ITEMS = 512;
  const int MAX_WRITE_OPERATIONS_PER_HOUR = 1800;
  const int MAX_WRITE_OPERATIONS_PER_MINUTE = 120;
  const int MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE = 1000000;
}  // namespace sync

namespace local {
  const int QUOTA_BYTES = 5242880;
}  // namespace local

namespace session {
  const int QUOTA_BYTES = 10485760;
}  // namespace session

//
// Types
//

const char* ToString(AccessLevel enum_param) {
  switch (enum_param) {
    case ACCESS_LEVEL_TRUSTED_CONTEXTS:
      return "TRUSTED_CONTEXTS";
    case ACCESS_LEVEL_TRUSTED_AND_UNTRUSTED_CONTEXTS:
      return "TRUSTED_AND_UNTRUSTED_CONTEXTS";
    case ACCESS_LEVEL_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

AccessLevel ParseAccessLevel(const std::string& enum_string) {
  if (enum_string == "TRUSTED_CONTEXTS")
    return ACCESS_LEVEL_TRUSTED_CONTEXTS;
  if (enum_string == "TRUSTED_AND_UNTRUSTED_CONTEXTS")
    return ACCESS_LEVEL_TRUSTED_AND_UNTRUSTED_CONTEXTS;
  return ACCESS_LEVEL_NONE;
}


StorageChange::StorageChange()
 {}

StorageChange::~StorageChange() = default;
StorageChange::StorageChange(StorageChange&& rhs) = default;
StorageChange& StorageChange::operator=(StorageChange&& rhs) = default;
// static
bool StorageChange::Populate(
    const base::Value& value, StorageChange* out) {
  if (!value.is_dict()) {
    return false;
  }
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* old_value_value = dict.Find("oldValue");
  if (old_value_value) {
    {
      out->old_value = (*old_value_value).Clone();
    }
  }

  const base::Value* new_value_value = dict.Find("newValue");
  if (new_value_value) {
    {
      out->new_value = (*new_value_value).Clone();
    }
  }

  return true;
}

// static
std::unique_ptr<StorageChange> StorageChange::FromValue(const base::Value& value) {
  auto out = std::make_unique<StorageChange>();
  bool result = Populate(value, out.get());
  if (!result)
    return nullptr;
  return out;
}

base::Value::Dict StorageChange::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->old_value) {
    to_value_result.Set("oldValue", (this->old_value)->Clone());

  }
  if (this->new_value) {
    to_value_result.Set("newValue", (this->new_value)->Clone());

  }

  return to_value_result;
}


namespace StorageArea {

namespace Get {

Params::Keys::Object::Object()
 {}

Params::Keys::Object::~Object() = default;
Params::Keys::Object::Object(Object&& rhs) = default;
Params::Keys::Object& Params::Keys::Object::operator=(Object&& rhs) = default;
// static
bool Params::Keys::Object::Populate(
    const base::Value& value, Object* out) {
  if (!value.is_dict()) {
    return false;
  }
  const base::Value::Dict& dict = value.GetDict();
  out->additional_properties.Merge(dict.Clone());
  return true;
}



Params::Keys::Keys()
 {}

Params::Keys::~Keys() = default;
Params::Keys::Keys(Keys&& rhs) = default;
Params::Keys& Params::Keys::operator=(Keys&& rhs) = default;
// static
bool Params::Keys::Populate(
    const base::Value& value, Keys* out) {
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out->as_string = absl::nullopt;
        return false;
      }
      out->as_string = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), &out->as_strings)) {
          return false;
        }
      }
    }
    return true;
  }
  if (value.type() == base::Value::Type::DICT) {
    {
      if (!value.is_dict()) {
        return false;
      }
      else {
        Object temp;
        if (!Object::Populate(value, &temp))
          return false;
        out->as_object = std::move(temp);
      }
    }
    return true;
  }
  return false;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return absl::nullopt;
  }
  absl::optional<Params> params((Params()));

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& keys_value = args[0];
    {
      Keys temp;
      if (!Keys::Populate(keys_value, &temp))
        return absl::nullopt;
      params->keys = std::move(temp);
    }
  }

  return params;
}


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

namespace GetBytesInUse {

Params::Keys::Keys()
 {}

Params::Keys::~Keys() = default;
Params::Keys::Keys(Keys&& rhs) = default;
Params::Keys& Params::Keys::operator=(Keys&& rhs) = default;
// static
bool Params::Keys::Populate(
    const base::Value& value, Keys* out) {
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out->as_string = absl::nullopt;
        return false;
      }
      out->as_string = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), &out->as_strings)) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return absl::nullopt;
  }
  absl::optional<Params> params((Params()));

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& keys_value = args[0];
    {
      Keys temp;
      if (!Keys::Populate(keys_value, &temp))
        return absl::nullopt;
      params->keys = std::move(temp);
    }
  }

  return params;
}


base::Value::List Results::Create(int bytes_in_use) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(bytes_in_use);

  return create_results;
}
}  // namespace GetBytesInUse

namespace Set {

Params::Items::Items()
 {}

Params::Items::~Items() = default;
Params::Items::Items(Items&& rhs) = default;
Params::Items& Params::Items::operator=(Items&& rhs) = default;
// static
bool Params::Items::Populate(
    const base::Value& value, Items* out) {
  if (!value.is_dict()) {
    return false;
  }
  const base::Value::Dict& dict = value.GetDict();
  out->additional_properties.Merge(dict.Clone());
  return true;
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
  absl::optional<Params> params((Params()));

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& items_value = args[0];
    {
      if (!items_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Items::Populate(items_value, &params->items)) {
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

Params::Keys::Keys()
 {}

Params::Keys::~Keys() = default;
Params::Keys::Keys(Keys&& rhs) = default;
Params::Keys& Params::Keys::operator=(Keys&& rhs) = default;
// static
bool Params::Keys::Populate(
    const base::Value& value, Keys* out) {
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out->as_string = absl::nullopt;
        return false;
      }
      out->as_string = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), &out->as_strings)) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
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
  absl::optional<Params> params((Params()));

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& keys_value = args[0];
    {
      if (!Keys::Populate(keys_value, &params->keys))
        return absl::nullopt;
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

namespace Clear {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace Clear

namespace SetAccessLevel {

Params::AccessOptions::AccessOptions()
: access_level(ACCESS_LEVEL_NONE) {}

Params::AccessOptions::~AccessOptions() = default;
Params::AccessOptions::AccessOptions(AccessOptions&& rhs) = default;
Params::AccessOptions& Params::AccessOptions::operator=(AccessOptions&& rhs) = default;
// static
bool Params::AccessOptions::Populate(
    const base::Value& value, AccessOptions* out) {
  if (!value.is_dict()) {
    return false;
  }
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* access_level_value = dict.Find("accessLevel");
  if (!access_level_value) {
    return false;
  }
  {
    const std::string* access_level_as_string = (*access_level_value).GetIfString();
    if (!access_level_as_string) {
      return false;
    }
    out->access_level = ParseAccessLevel(*access_level_as_string);
    if (out->access_level == ACCESS_LEVEL_NONE) {
      return false;
    }
  }

  return true;
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
  absl::optional<Params> params((Params()));

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& access_options_value = args[0];
    {
      if (!access_options_value.is_dict()) {
        return absl::nullopt;
      }
      if (!AccessOptions::Populate(access_options_value, &params->access_options)) {
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
}  // namespace SetAccessLevel

}  // namespace StorageArea


//
// Events
//

namespace OnChanged {

const char kEventName[] = "storage.onChanged";

Changes::Changes()
 {}

Changes::~Changes() = default;
Changes::Changes(Changes&& rhs) = default;
Changes& Changes::operator=(Changes&& rhs) = default;
base::Value::Dict Changes::ToValue() const {
  base::Value::Dict to_value_result;

  for (const auto& it : additional_properties) {
    to_value_result.Set(it.first, (it.second).ToValue());

  }

  return to_value_result;
}


base::Value::List Create(const Changes& changes, const std::string& area_name) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append((changes).ToValue());

  create_results.Append(area_name);

  return create_results;
}

}  // namespace OnChanged

}  // namespace storage
}  // namespace api
}  // namespace extensions

