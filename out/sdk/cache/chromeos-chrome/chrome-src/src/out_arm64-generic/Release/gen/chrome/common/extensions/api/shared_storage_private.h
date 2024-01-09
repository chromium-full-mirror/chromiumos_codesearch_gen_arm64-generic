// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/shared_storage_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_SHARED_STORAGE_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_SHARED_STORAGE_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace shared_storage_private {

//
// Functions
//

namespace Get {

namespace Results {

struct Items {
  Items();
  ~Items();
  Items(const Items&) = delete;
  Items& operator=(const Items&) = delete;
  Items(Items&& rhs) noexcept;
  Items& operator=(Items&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisItems object.
  base::Value::Dict ToValue() const;

  base::Value::Dict additional_properties;
};


base::Value::List Create(const Items& items);
}  // namespace Results

}  // namespace Get

namespace Set {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Items {
    Items();
    ~Items();
    Items(const Items&) = delete;
    Items& operator=(const Items&) = delete;
    Items(Items&& rhs) noexcept;
    Items& operator=(Items&& rhs) noexcept;

    // Populates a Items object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Items& out);

    // Populates a Items object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Items& out);

    // Creates a deep copy of Items.
    Items Clone() const;

    // Creates a Items object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Items> FromValue(const base::Value::Dict& value);

    // Creates a Items object from a base::Value, or nullopt on failure.
    static std::optional<Items> FromValue(const base::Value& value);

    base::Value::Dict additional_properties;
  };


  Items items;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Set

namespace Remove {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::vector<std::string> keys;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Remove

}  // namespace shared_storage_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_SHARED_STORAGE_PRIVATE_H__
