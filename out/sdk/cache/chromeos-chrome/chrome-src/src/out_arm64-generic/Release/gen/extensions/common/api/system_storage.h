// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/system_storage.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_SYSTEM_STORAGE_H__
#define EXTENSIONS_COMMON_API_SYSTEM_STORAGE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace system_storage {

//
// Types
//

enum class StorageUnitType {
  kNone = 0,
  kFixed,
  kRemovable,
  kUnknown,
  kMaxValue = kUnknown,
};


const char* ToString(StorageUnitType as_enum);
StorageUnitType ParseStorageUnitType(base::StringPiece as_string);
std::u16string GetStorageUnitTypeParseError(base::StringPiece as_string);

struct StorageUnitInfo {
  StorageUnitInfo();
  ~StorageUnitInfo();
  StorageUnitInfo(const StorageUnitInfo&) = delete;
  StorageUnitInfo& operator=(const StorageUnitInfo&) = delete;
  StorageUnitInfo(StorageUnitInfo&& rhs);
  StorageUnitInfo& operator=(StorageUnitInfo&& rhs);

  // Populates a StorageUnitInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, StorageUnitInfo& out);

  // Populates a StorageUnitInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, StorageUnitInfo& out);

  // Creates a deep copy of StorageUnitInfo.
  StorageUnitInfo Clone() const;

  // Creates a StorageUnitInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<StorageUnitInfo> FromValueDeprecated(const base::Value& value);

  // Creates a StorageUnitInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<StorageUnitInfo> FromValue(const base::Value::Dict& value);

  // Creates a StorageUnitInfo object from a base::Value, or nullopt on failure.
  static absl::optional<StorageUnitInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisStorageUnitInfo object.
  base::Value::Dict ToValue() const;

  // The transient ID that uniquely identifies the storage device. This ID will be
  // persistent within the same run of a single application. It will not be a
  // persistent identifier between different runs of an application, or between
  // different applications.
  std::string id;

  // The name of the storage unit.
  std::string name;

  // The media type of the storage unit.
  StorageUnitType type;

  // The total amount of the storage space, in bytes.
  double capacity;

};

struct StorageAvailableCapacityInfo {
  StorageAvailableCapacityInfo();
  ~StorageAvailableCapacityInfo();
  StorageAvailableCapacityInfo(const StorageAvailableCapacityInfo&) = delete;
  StorageAvailableCapacityInfo& operator=(const StorageAvailableCapacityInfo&) = delete;
  StorageAvailableCapacityInfo(StorageAvailableCapacityInfo&& rhs);
  StorageAvailableCapacityInfo& operator=(StorageAvailableCapacityInfo&& rhs);

  // Populates a StorageAvailableCapacityInfo object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, StorageAvailableCapacityInfo& out);

  // Populates a StorageAvailableCapacityInfo object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, StorageAvailableCapacityInfo& out);

  // Creates a deep copy of StorageAvailableCapacityInfo.
  StorageAvailableCapacityInfo Clone() const;

  // Creates a StorageAvailableCapacityInfo object from a base::Value, or NULL
  // on failure.
  static std::unique_ptr<StorageAvailableCapacityInfo> FromValueDeprecated(const base::Value& value);

  // Creates a StorageAvailableCapacityInfo object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<StorageAvailableCapacityInfo> FromValue(const base::Value::Dict& value);

  // Creates a StorageAvailableCapacityInfo object from a base::Value, or
  // nullopt on failure.
  static absl::optional<StorageAvailableCapacityInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisStorageAvailableCapacityInfo object.
  base::Value::Dict ToValue() const;

  // A copied |id| of getAvailableCapacity function parameter |id|.
  std::string id;

  // The available capacity of the storage device, in bytes.
  double available_capacity;

};

enum class EjectDeviceResultCode {
  kNone = 0,
  kSuccess,
  kInUse,
  kNoSuchDevice,
  kFailure,
  kMaxValue = kFailure,
};


const char* ToString(EjectDeviceResultCode as_enum);
EjectDeviceResultCode ParseEjectDeviceResultCode(base::StringPiece as_string);
std::u16string GetEjectDeviceResultCodeParseError(base::StringPiece as_string);


//
// Functions
//

namespace GetInfo {

namespace Results {

base::Value::List Create(const std::vector<StorageUnitInfo>& info);
}  // namespace Results

}  // namespace GetInfo

namespace EjectDevice {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const EjectDeviceResultCode& result);
}  // namespace Results

}  // namespace EjectDevice

namespace GetAvailableCapacity {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const StorageAvailableCapacityInfo& info);
}  // namespace Results

}  // namespace GetAvailableCapacity

//
// Events
//

namespace OnAttached {

extern const char kEventName[];  // "system.storage.onAttached"

base::Value::List Create(const StorageUnitInfo& info);
}  // namespace OnAttached

namespace OnDetached {

extern const char kEventName[];  // "system.storage.onDetached"

base::Value::List Create(const std::string& id);
}  // namespace OnDetached

}  // namespace system_storage
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_SYSTEM_STORAGE_H__
