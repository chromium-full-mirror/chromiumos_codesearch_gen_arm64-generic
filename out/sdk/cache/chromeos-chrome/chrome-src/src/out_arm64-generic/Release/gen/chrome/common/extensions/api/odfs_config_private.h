// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/odfs_config_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_ODFS_CONFIG_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_ODFS_CONFIG_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace odfs_config_private {

//
// Types
//

enum class Mount {
  kNone = 0,
  kAllowed,
  kDisallowed,
  kAutomated,
  kMaxValue = kAutomated,
};


const char* ToString(Mount as_enum);
Mount ParseMount(base::StringPiece as_string);
std::u16string GetMountParseError(base::StringPiece as_string);

struct MountInfo {
  MountInfo();
  ~MountInfo();
  MountInfo(const MountInfo&) = delete;
  MountInfo& operator=(const MountInfo&) = delete;
  MountInfo(MountInfo&& rhs) noexcept;
  MountInfo& operator=(MountInfo&& rhs) noexcept;

  // Populates a MountInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, MountInfo& out);

  // Populates a MountInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, MountInfo& out);

  // Creates a deep copy of MountInfo.
  MountInfo Clone() const;

  // Creates a MountInfo object from a base::Value::Dict, or nullopt on failure.
  static std::optional<MountInfo> FromValue(const base::Value::Dict& value);

  // Creates a MountInfo object from a base::Value, or nullopt on failure.
  static std::optional<MountInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMountInfo object.
  base::Value::Dict ToValue() const;

  Mount mode;

};

struct AccountRestrictionsInfo {
  AccountRestrictionsInfo();
  ~AccountRestrictionsInfo();
  AccountRestrictionsInfo(const AccountRestrictionsInfo&) = delete;
  AccountRestrictionsInfo& operator=(const AccountRestrictionsInfo&) = delete;
  AccountRestrictionsInfo(AccountRestrictionsInfo&& rhs) noexcept;
  AccountRestrictionsInfo& operator=(AccountRestrictionsInfo&& rhs) noexcept;

  // Populates a AccountRestrictionsInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AccountRestrictionsInfo& out);

  // Populates a AccountRestrictionsInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AccountRestrictionsInfo& out);

  // Creates a deep copy of AccountRestrictionsInfo.
  AccountRestrictionsInfo Clone() const;

  // Creates a AccountRestrictionsInfo object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<AccountRestrictionsInfo> FromValue(const base::Value::Dict& value);

  // Creates a AccountRestrictionsInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<AccountRestrictionsInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAccountRestrictionsInfo object.
  base::Value::Dict ToValue() const;

  std::vector<std::string> restrictions;

};


//
// Functions
//

namespace GetMount {

namespace Results {

base::Value::List Create(const MountInfo& mount);
}  // namespace Results

}  // namespace GetMount

namespace GetAccountRestrictions {

namespace Results {

base::Value::List Create(const AccountRestrictionsInfo& restrictions);
}  // namespace Results

}  // namespace GetAccountRestrictions

namespace ShowAutomatedMountError {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ShowAutomatedMountError

//
// Events
//

namespace OnMountChanged {

extern const char kEventName[];  // "odfsConfigPrivate.onMountChanged"

// A OneDrive mount mode changed event.
base::Value::List Create(const MountInfo& event);
}  // namespace OnMountChanged

namespace OnAccountRestrictionsChanged {

extern const char kEventName[];  // "odfsConfigPrivate.onAccountRestrictionsChanged"

// A OneDrive restrictions changed event.
base::Value::List Create(const AccountRestrictionsInfo& event);
}  // namespace OnAccountRestrictionsChanged

}  // namespace odfs_config_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_ODFS_CONFIG_PRIVATE_H__
