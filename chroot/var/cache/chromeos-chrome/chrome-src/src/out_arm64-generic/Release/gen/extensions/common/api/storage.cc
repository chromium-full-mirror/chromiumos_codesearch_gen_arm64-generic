// Copyright 2022 The Chromium Authors. All rights reserved.
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
  const int QUOTA_BYTES = 1048576;
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
  const auto* dict = static_cast<const base::DictionaryValue*>(&value);
  const base::Value* old_value_value = dict->FindKey("oldValue");
  if (old_value_value) {
    {
      out->old_value = (*old_value_value).CreateDeepCopy();
    }
  }

  const base::Value* new_value_value = dict->FindKey("newValue");
  if (new_value_value) {
    {
      out->new_value = (*new_value_value).CreateDeepCopy();
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

std::unique_ptr<base::DictionaryValue> StorageChange::ToValue() const {
  auto to_value_result =
      std::make_unique<base::DictionaryValue>();

  if (this->old_value) {
    to_value_result->SetWithoutPathExpansion("oldValue", (this->old_value)->CreateDeepCopy());

  }
  if (this->new_value) {
    to_value_result->SetWithoutPathExpansion("newValue", (this->new_value)->CreateDeepCopy());

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
  const auto* dict = static_cast<const base::DictionaryValue*>(&value);
  out->additional_properties.MergeDictionary(dict);
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
        out->as_string.reset();
        return false;
      }
      out->as_string = std::make_unique<std::string>(*temp);
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
  if (value.type() == base::Value::Type::DICTIONARY) {
    {
      if (!value.is_dict()) {
        return false;
      }
      else {
        auto temp = std::make_unique<Object>();
        if (!Object::Populate(value, temp.get())) {
          return false;
        }
        else
          out->as_object = std::move(temp);
      }
    }
    return true;
  }
  return false;
}


Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& keys_value = args[0];
    {
      auto temp = std::make_unique<Keys>();
      if (!Keys::Populate(keys_value, temp.get()))
        return std::unique_ptr<Params>();
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
std::unique_ptr<base::DictionaryValue> Results::Items::ToValue() const {
  auto to_value_result =
      std::make_unique<base::DictionaryValue>();

  to_value_result->MergeDictionary(&additional_properties);

  return to_value_result;
}


base::Value::List Results::Create(const Items& items) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value::FromUniquePtrValue((items).ToValue()));

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
        out->as_string.reset();
        return false;
      }
      out->as_string = std::make_unique<std::string>(*temp);
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

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& keys_value = args[0];
    {
      auto temp = std::make_unique<Keys>();
      if (!Keys::Populate(keys_value, temp.get()))
        return std::unique_ptr<Params>();
      params->keys = std::move(temp);
    }
  }

  return params;
}


base::Value::List Results::Create(int bytes_in_use) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value::FromUniquePtrValue(std::make_unique<base::Value>(bytes_in_use)));

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
  const auto* dict = static_cast<const base::DictionaryValue*>(&value);
  out->additional_properties.MergeDictionary(dict);
  return true;
}


Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& items_value = args[0];
    {
      if (!items_value.is_dict()) {
        return std::unique_ptr<Params>();
      }
      if (!Items::Populate(items_value, &params->items)) {
        return std::unique_ptr<Params>();
      }
    }
  }
  else {
    return std::unique_ptr<Params>();
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
        out->as_string.reset();
        return false;
      }
      out->as_string = std::make_unique<std::string>(*temp);
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

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& keys_value = args[0];
    {
      if (!Keys::Populate(keys_value, &params->keys))
        return std::unique_ptr<Params>();
    }
  }
  else {
    return std::unique_ptr<Params>();
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
  const auto* dict = static_cast<const base::DictionaryValue*>(&value);
  const base::Value* access_level_value = dict->FindKey("accessLevel");
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

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& access_options_value = args[0];
    {
      if (!access_options_value.is_dict()) {
        return std::unique_ptr<Params>();
      }
      if (!AccessOptions::Populate(access_options_value, &params->access_options)) {
        return std::unique_ptr<Params>();
      }
    }
  }
  else {
    return std::unique_ptr<Params>();
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
std::unique_ptr<base::DictionaryValue> Changes::ToValue() const {
  auto to_value_result =
      std::make_unique<base::DictionaryValue>();

  for (const auto& it : additional_properties) {
    to_value_result->SetWithoutPathExpansion(it.first, (it.second).ToValue());

  }

  return to_value_result;
}


base::Value::List Create(const Changes& changes, const std::string& area_name) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(base::Value::FromUniquePtrValue((changes).ToValue()));

  create_results.Append(base::Value::FromUniquePtrValue(std::make_unique<base::Value>(area_name)));

  return create_results;
}

}  // namespace OnChanged

}  // namespace storage
}  // namespace api
}  // namespace extensions

