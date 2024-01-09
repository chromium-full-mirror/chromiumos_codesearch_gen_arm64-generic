// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/odfs_config_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/odfs_config_private.h"

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
#include "base/strings/string_piece.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace odfs_config_private {
//
// Types
//

const char* ToString(Mount enum_param) {
  switch (enum_param) {
    case Mount::kAllowed:
      return "allowed";
    case Mount::kDisallowed:
      return "disallowed";
    case Mount::kAutomated:
      return "automated";
    case Mount::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

Mount ParseMount(base::StringPiece enum_string) {
  if (enum_string == "allowed")
    return Mount::kAllowed;
  if (enum_string == "disallowed")
    return Mount::kDisallowed;
  if (enum_string == "automated")
    return Mount::kAutomated;
  return Mount::kNone;
}

std::u16string GetMountParseError(base::StringPiece enum_string) {
  return u"expected \"allowed\" or \"disallowed\" or \"automated\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


MountInfo::MountInfo()
: mode() {}

MountInfo::~MountInfo() = default;
MountInfo::MountInfo(MountInfo&& rhs) noexcept = default;
MountInfo& MountInfo::operator=(MountInfo&& rhs) noexcept = default;
MountInfo MountInfo::Clone() const {
  MountInfo out;
  out.mode = mode;
  return out;
}

// static
bool MountInfo::Populate(
    const base::Value::Dict& dict, MountInfo& out) {
  const base::Value* mode_value = dict.Find("mode");
  if (!mode_value) {
    return false;
  }
  {
    const std::string* mount_as_string = (*mode_value).GetIfString();
    if (!mount_as_string) {
      return false;
    }
    out.mode = ParseMount(*mount_as_string);
    if (out.mode == Mount()) {
      return false;
    }
  }

  return true;
}

// static
bool MountInfo::Populate(
    const base::Value& value, MountInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<MountInfo> MountInfo::FromValue(const base::Value::Dict& value) {
  MountInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<MountInfo> MountInfo::FromValue(const base::Value& value) {
  MountInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict MountInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("mode", odfs_config_private::ToString(this->mode));


  return to_value_result;
}


AccountRestrictionsInfo::AccountRestrictionsInfo()
 {}

AccountRestrictionsInfo::~AccountRestrictionsInfo() = default;
AccountRestrictionsInfo::AccountRestrictionsInfo(AccountRestrictionsInfo&& rhs) noexcept = default;
AccountRestrictionsInfo& AccountRestrictionsInfo::operator=(AccountRestrictionsInfo&& rhs) noexcept = default;
AccountRestrictionsInfo AccountRestrictionsInfo::Clone() const {
  AccountRestrictionsInfo out;
  out.restrictions = restrictions;
  return out;
}

// static
bool AccountRestrictionsInfo::Populate(
    const base::Value::Dict& dict, AccountRestrictionsInfo& out) {
  const base::Value* restrictions_value = dict.Find("restrictions");
  if (!restrictions_value) {
    return false;
  }
  {
    if (!(*restrictions_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*restrictions_value).GetList(), out.restrictions)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool AccountRestrictionsInfo::Populate(
    const base::Value& value, AccountRestrictionsInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AccountRestrictionsInfo> AccountRestrictionsInfo::FromValue(const base::Value::Dict& value) {
  AccountRestrictionsInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AccountRestrictionsInfo> AccountRestrictionsInfo::FromValue(const base::Value& value) {
  AccountRestrictionsInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict AccountRestrictionsInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("restrictions", json_schema_compiler::util::CreateValueFromArray(this->restrictions));


  return to_value_result;
}



//
// Functions
//

namespace GetMount {

base::Value::List Results::Create(const MountInfo& mount) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((mount).ToValue());

  return create_results;
}
}  // namespace GetMount

namespace GetAccountRestrictions {

base::Value::List Results::Create(const AccountRestrictionsInfo& restrictions) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((restrictions).ToValue());

  return create_results;
}
}  // namespace GetAccountRestrictions

//
// Events
//

namespace OnMountChanged {

const char kEventName[] = "odfsConfigPrivate.onMountChanged";

base::Value::List Create(const MountInfo& event) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event).ToValue());

  return create_results;
}

}  // namespace OnMountChanged

namespace OnAccountRestrictionsChanged {

const char kEventName[] = "odfsConfigPrivate.onAccountRestrictionsChanged";

base::Value::List Create(const AccountRestrictionsInfo& event) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event).ToValue());

  return create_results;
}

}  // namespace OnAccountRestrictionsChanged

}  // namespace odfs_config_private
}  // namespace api
}  // namespace extensions

