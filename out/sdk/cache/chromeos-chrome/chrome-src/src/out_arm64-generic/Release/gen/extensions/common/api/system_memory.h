// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/system_memory.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_SYSTEM_MEMORY_H__
#define EXTENSIONS_COMMON_API_SYSTEM_MEMORY_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace system_memory {

//
// Types
//

struct MemoryInfo {
  MemoryInfo();
  ~MemoryInfo();
  MemoryInfo(const MemoryInfo&) = delete;
  MemoryInfo& operator=(const MemoryInfo&) = delete;
  MemoryInfo(MemoryInfo&& rhs);
  MemoryInfo& operator=(MemoryInfo&& rhs);

  // Populates a MemoryInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, MemoryInfo& out);

  // Populates a MemoryInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, MemoryInfo& out);

  // Creates a deep copy of MemoryInfo.
  MemoryInfo Clone() const;

  // Creates a MemoryInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<MemoryInfo> FromValueDeprecated(const base::Value& value);

  // Creates a MemoryInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<MemoryInfo> FromValue(const base::Value::Dict& value);

  // Creates a MemoryInfo object from a base::Value, or nullopt on failure.
  static absl::optional<MemoryInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMemoryInfo object.
  base::Value::Dict ToValue() const;

  // The total amount of physical memory capacity, in bytes.
  double capacity;

  // The amount of available capacity, in bytes.
  double available_capacity;

};


//
// Functions
//

namespace GetInfo {

namespace Results {

base::Value::List Create(const MemoryInfo& info);
}  // namespace Results

}  // namespace GetInfo

}  // namespace system_memory
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_SYSTEM_MEMORY_H__
