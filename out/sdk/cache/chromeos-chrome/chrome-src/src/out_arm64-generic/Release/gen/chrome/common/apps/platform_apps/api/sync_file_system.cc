// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/apps/platform_apps/api/sync_file_system.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/apps/platform_apps/api/sync_file_system.h"

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
#include "base/strings/string_piece.h"


using base::UTF8ToUTF16;

namespace chrome_apps {
namespace api {
namespace sync_file_system {
//
// Types
//

const char* ToString(SyncAction enum_param) {
  switch (enum_param) {
    case SyncAction::kAdded:
      return "added";
    case SyncAction::kUpdated:
      return "updated";
    case SyncAction::kDeleted:
      return "deleted";
    case SyncAction::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

SyncAction ParseSyncAction(base::StringPiece enum_string) {
  if (enum_string == "added")
    return SyncAction::kAdded;
  if (enum_string == "updated")
    return SyncAction::kUpdated;
  if (enum_string == "deleted")
    return SyncAction::kDeleted;
  return SyncAction::kNone;
}

std::u16string GetSyncActionParseError(base::StringPiece enum_string) {
  return u"expected \"added\" or \"updated\" or \"deleted\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ServiceStatus enum_param) {
  switch (enum_param) {
    case ServiceStatus::kInitializing:
      return "initializing";
    case ServiceStatus::kRunning:
      return "running";
    case ServiceStatus::kAuthenticationRequired:
      return "authentication_required";
    case ServiceStatus::kTemporaryUnavailable:
      return "temporary_unavailable";
    case ServiceStatus::kDisabled:
      return "disabled";
    case ServiceStatus::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ServiceStatus ParseServiceStatus(base::StringPiece enum_string) {
  if (enum_string == "initializing")
    return ServiceStatus::kInitializing;
  if (enum_string == "running")
    return ServiceStatus::kRunning;
  if (enum_string == "authentication_required")
    return ServiceStatus::kAuthenticationRequired;
  if (enum_string == "temporary_unavailable")
    return ServiceStatus::kTemporaryUnavailable;
  if (enum_string == "disabled")
    return ServiceStatus::kDisabled;
  return ServiceStatus::kNone;
}

std::u16string GetServiceStatusParseError(base::StringPiece enum_string) {
  return u"expected \"initializing\" or \"running\" or \"authentication_required\" or \"temporary_unavailable\" or \"disabled\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(FileStatus enum_param) {
  switch (enum_param) {
    case FileStatus::kSynced:
      return "synced";
    case FileStatus::kPending:
      return "pending";
    case FileStatus::kConflicting:
      return "conflicting";
    case FileStatus::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

FileStatus ParseFileStatus(base::StringPiece enum_string) {
  if (enum_string == "synced")
    return FileStatus::kSynced;
  if (enum_string == "pending")
    return FileStatus::kPending;
  if (enum_string == "conflicting")
    return FileStatus::kConflicting;
  return FileStatus::kNone;
}

std::u16string GetFileStatusParseError(base::StringPiece enum_string) {
  return u"expected \"synced\" or \"pending\" or \"conflicting\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SyncDirection enum_param) {
  switch (enum_param) {
    case SyncDirection::kLocalToRemote:
      return "local_to_remote";
    case SyncDirection::kRemoteToLocal:
      return "remote_to_local";
    case SyncDirection::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

SyncDirection ParseSyncDirection(base::StringPiece enum_string) {
  if (enum_string == "local_to_remote")
    return SyncDirection::kLocalToRemote;
  if (enum_string == "remote_to_local")
    return SyncDirection::kRemoteToLocal;
  return SyncDirection::kNone;
}

std::u16string GetSyncDirectionParseError(base::StringPiece enum_string) {
  return u"expected \"local_to_remote\" or \"remote_to_local\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ConflictResolutionPolicy enum_param) {
  switch (enum_param) {
    case ConflictResolutionPolicy::kLastWriteWin:
      return "last_write_win";
    case ConflictResolutionPolicy::kManual:
      return "manual";
    case ConflictResolutionPolicy::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ConflictResolutionPolicy ParseConflictResolutionPolicy(base::StringPiece enum_string) {
  if (enum_string == "last_write_win")
    return ConflictResolutionPolicy::kLastWriteWin;
  if (enum_string == "manual")
    return ConflictResolutionPolicy::kManual;
  return ConflictResolutionPolicy::kNone;
}

std::u16string GetConflictResolutionPolicyParseError(base::StringPiece enum_string) {
  return u"expected \"last_write_win\" or \"manual\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


FileInfo::FileEntry::FileEntry()
 {}

FileInfo::FileEntry::~FileEntry() = default;
FileInfo::FileEntry::FileEntry(FileEntry&& rhs) = default;
FileInfo::FileEntry& FileInfo::FileEntry::operator=(FileEntry&& rhs) = default;
FileInfo::FileEntry FileInfo::FileEntry::Clone() const {
  FileEntry out;
  return out;
}

// static
bool FileInfo::FileEntry::Populate(
    const base::Value::Dict& dict, FileEntry& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool FileInfo::FileEntry::Populate(
    const base::Value& value, FileEntry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<FileInfo::FileEntry> FileInfo::FileEntry::FromValue(const base::Value::Dict& value) {
  FileEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<FileInfo::FileEntry> FileInfo::FileEntry::FromValue(const base::Value& value) {
  FileEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict FileInfo::FileEntry::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



FileInfo::FileInfo()
: status(),
action(),
direction() {}

FileInfo::~FileInfo() = default;
FileInfo::FileInfo(FileInfo&& rhs) = default;
FileInfo& FileInfo::operator=(FileInfo&& rhs) = default;
FileInfo FileInfo::Clone() const {
  FileInfo out;
  out.file_entry = file_entry.Clone();
  out.status = status;
  out.action = action;
  out.direction = direction;
  return out;
}

// static
bool FileInfo::Populate(
    const base::Value::Dict& dict, FileInfo& out) {
  out.action = SyncAction();
  out.direction = SyncDirection();
  const base::Value* file_entry_value = dict.Find("fileEntry");
  if (!file_entry_value) {
    return false;
  }
  {
    if (!(*file_entry_value).is_dict()) {
      return false;
    }
    if (!FileEntry::Populate((*file_entry_value).GetDict(), out.file_entry)) {
      return false;
    }
  }

  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    const std::string* file_status_as_string = (*status_value).GetIfString();
    if (!file_status_as_string) {
      return false;
    }
    out.status = ParseFileStatus(*file_status_as_string);
    if (out.status == FileStatus()) {
      return false;
    }
  }

  const base::Value* action_value = dict.Find("action");
  if (action_value) {
    {
      const std::string* sync_action_as_string = (*action_value).GetIfString();
      if (!sync_action_as_string) {
        return false;
      }
      out.action = ParseSyncAction(*sync_action_as_string);
      if (out.action == SyncAction()) {
        return false;
      }
    }
    } else {
    out.action = SyncAction();
  }

  const base::Value* direction_value = dict.Find("direction");
  if (direction_value) {
    {
      const std::string* sync_direction_as_string = (*direction_value).GetIfString();
      if (!sync_direction_as_string) {
        return false;
      }
      out.direction = ParseSyncDirection(*sync_direction_as_string);
      if (out.direction == SyncDirection()) {
        return false;
      }
    }
    } else {
    out.direction = SyncDirection();
  }

  return true;
}

// static
bool FileInfo::Populate(
    const base::Value& value, FileInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<FileInfo> FileInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<FileInfo>();
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
absl::optional<FileInfo> FileInfo::FromValue(const base::Value::Dict& value) {
  FileInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<FileInfo> FileInfo::FromValue(const base::Value& value) {
  FileInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict FileInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fileEntry", (this->file_entry).ToValue());

  to_value_result.Set("status", sync_file_system::ToString(this->status));

  if (this->action != SyncAction()) {
    to_value_result.Set("action", sync_file_system::ToString(this->action));

  }
  if (this->direction != SyncDirection()) {
    to_value_result.Set("direction", sync_file_system::ToString(this->direction));

  }

  return to_value_result;
}


FileStatusInfo::FileEntry::FileEntry()
 {}

FileStatusInfo::FileEntry::~FileEntry() = default;
FileStatusInfo::FileEntry::FileEntry(FileEntry&& rhs) = default;
FileStatusInfo::FileEntry& FileStatusInfo::FileEntry::operator=(FileEntry&& rhs) = default;
FileStatusInfo::FileEntry FileStatusInfo::FileEntry::Clone() const {
  FileEntry out;
  return out;
}

// static
bool FileStatusInfo::FileEntry::Populate(
    const base::Value::Dict& dict, FileEntry& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool FileStatusInfo::FileEntry::Populate(
    const base::Value& value, FileEntry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<FileStatusInfo::FileEntry> FileStatusInfo::FileEntry::FromValue(const base::Value::Dict& value) {
  FileEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<FileStatusInfo::FileEntry> FileStatusInfo::FileEntry::FromValue(const base::Value& value) {
  FileEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict FileStatusInfo::FileEntry::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



FileStatusInfo::FileStatusInfo()
: status() {}

FileStatusInfo::~FileStatusInfo() = default;
FileStatusInfo::FileStatusInfo(FileStatusInfo&& rhs) = default;
FileStatusInfo& FileStatusInfo::operator=(FileStatusInfo&& rhs) = default;
FileStatusInfo FileStatusInfo::Clone() const {
  FileStatusInfo out;
  out.file_entry = file_entry.Clone();
  out.status = status;
  out.error = error;
  return out;
}

// static
bool FileStatusInfo::Populate(
    const base::Value::Dict& dict, FileStatusInfo& out) {
  const base::Value* file_entry_value = dict.Find("fileEntry");
  if (!file_entry_value) {
    return false;
  }
  {
    if (!(*file_entry_value).is_dict()) {
      return false;
    }
    if (!FileEntry::Populate((*file_entry_value).GetDict(), out.file_entry)) {
      return false;
    }
  }

  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    const std::string* file_status_as_string = (*status_value).GetIfString();
    if (!file_status_as_string) {
      return false;
    }
    out.status = ParseFileStatus(*file_status_as_string);
    if (out.status == FileStatus()) {
      return false;
    }
  }

  const base::Value* error_value = dict.Find("error");
  if (error_value) {
    {
      auto* temp = (*error_value).GetIfString();
      if (!temp) {
        out.error = absl::nullopt;
        return false;
      }
      out.error = *temp;
    }
  }

  return true;
}

// static
bool FileStatusInfo::Populate(
    const base::Value& value, FileStatusInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<FileStatusInfo> FileStatusInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<FileStatusInfo>();
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
absl::optional<FileStatusInfo> FileStatusInfo::FromValue(const base::Value::Dict& value) {
  FileStatusInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<FileStatusInfo> FileStatusInfo::FromValue(const base::Value& value) {
  FileStatusInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict FileStatusInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fileEntry", (this->file_entry).ToValue());

  to_value_result.Set("status", sync_file_system::ToString(this->status));

  if (this->error) {
    to_value_result.Set("error", *this->error);

  }

  return to_value_result;
}


StorageInfo::StorageInfo()
: usage_bytes(0),
quota_bytes(0) {}

StorageInfo::~StorageInfo() = default;
StorageInfo::StorageInfo(StorageInfo&& rhs) = default;
StorageInfo& StorageInfo::operator=(StorageInfo&& rhs) = default;
StorageInfo StorageInfo::Clone() const {
  StorageInfo out;
  out.usage_bytes = usage_bytes;
  out.quota_bytes = quota_bytes;
  return out;
}

// static
bool StorageInfo::Populate(
    const base::Value::Dict& dict, StorageInfo& out) {
  const base::Value* usage_bytes_value = dict.Find("usageBytes");
  if (!usage_bytes_value) {
    return false;
  }
  {
    auto temp = (*usage_bytes_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.usage_bytes = *temp;
  }

  const base::Value* quota_bytes_value = dict.Find("quotaBytes");
  if (!quota_bytes_value) {
    return false;
  }
  {
    auto temp = (*quota_bytes_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.quota_bytes = *temp;
  }

  return true;
}

// static
bool StorageInfo::Populate(
    const base::Value& value, StorageInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<StorageInfo> StorageInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<StorageInfo>();
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
absl::optional<StorageInfo> StorageInfo::FromValue(const base::Value::Dict& value) {
  StorageInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<StorageInfo> StorageInfo::FromValue(const base::Value& value) {
  StorageInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict StorageInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("usageBytes", this->usage_bytes);

  to_value_result.Set("quotaBytes", this->quota_bytes);


  return to_value_result;
}


ServiceInfo::ServiceInfo()
: state() {}

ServiceInfo::~ServiceInfo() = default;
ServiceInfo::ServiceInfo(ServiceInfo&& rhs) = default;
ServiceInfo& ServiceInfo::operator=(ServiceInfo&& rhs) = default;
ServiceInfo ServiceInfo::Clone() const {
  ServiceInfo out;
  out.state = state;
  out.description = description;
  return out;
}

// static
bool ServiceInfo::Populate(
    const base::Value::Dict& dict, ServiceInfo& out) {
  const base::Value* state_value = dict.Find("state");
  if (!state_value) {
    return false;
  }
  {
    const std::string* service_status_as_string = (*state_value).GetIfString();
    if (!service_status_as_string) {
      return false;
    }
    out.state = ParseServiceStatus(*service_status_as_string);
    if (out.state == ServiceStatus()) {
      return false;
    }
  }

  const base::Value* description_value = dict.Find("description");
  if (!description_value) {
    return false;
  }
  {
    auto* temp = (*description_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.description = *temp;
  }

  return true;
}

// static
bool ServiceInfo::Populate(
    const base::Value& value, ServiceInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ServiceInfo> ServiceInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ServiceInfo>();
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
absl::optional<ServiceInfo> ServiceInfo::FromValue(const base::Value::Dict& value) {
  ServiceInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ServiceInfo> ServiceInfo::FromValue(const base::Value& value) {
  ServiceInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ServiceInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("state", sync_file_system::ToString(this->state));

  to_value_result.Set("description", this->description);


  return to_value_result;
}



//
// Functions
//

namespace RequestFileSystem {

Results::FileSystem::FileSystem()
 {}

Results::FileSystem::~FileSystem() = default;
Results::FileSystem::FileSystem(FileSystem&& rhs) = default;
Results::FileSystem& Results::FileSystem::operator=(FileSystem&& rhs) = default;
base::Value::Dict Results::FileSystem::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::Value::List Results::Create(const FileSystem& file_system) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((file_system).ToValue());

  return create_results;
}
}  // namespace RequestFileSystem

namespace SetConflictResolutionPolicy {

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
    const base::Value& policy_value = args[0];
    {
      const std::string* conflict_resolution_policy_as_string = policy_value.GetIfString();
      if (!conflict_resolution_policy_as_string) {
        return absl::nullopt;
      }
      params.policy = ParseConflictResolutionPolicy(*conflict_resolution_policy_as_string);
      if (params.policy == ConflictResolutionPolicy()) {
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
}  // namespace SetConflictResolutionPolicy

namespace GetConflictResolutionPolicy {

base::Value::List Results::Create(const ConflictResolutionPolicy& policy) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(sync_file_system::ToString(policy));

  return create_results;
}
}  // namespace GetConflictResolutionPolicy

namespace GetUsageAndQuota {

Params::FileSystem::FileSystem()
 {}

Params::FileSystem::~FileSystem() = default;
Params::FileSystem::FileSystem(FileSystem&& rhs) = default;
Params::FileSystem& Params::FileSystem::operator=(FileSystem&& rhs) = default;
Params::FileSystem Params::FileSystem::Clone() const {
  FileSystem out;
  return out;
}

// static
bool Params::FileSystem::Populate(
    const base::Value::Dict& dict, FileSystem& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool Params::FileSystem::Populate(
    const base::Value& value, FileSystem& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::FileSystem> Params::FileSystem::FromValue(const base::Value::Dict& value) {
  FileSystem out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::FileSystem> Params::FileSystem::FromValue(const base::Value& value) {
  FileSystem out;
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
    const base::Value& file_system_value = args[0];
    {
      if (!file_system_value.is_dict()) {
        return absl::nullopt;
      }
      if (!FileSystem::Populate(file_system_value.GetDict(), params.file_system)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const StorageInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}
}  // namespace GetUsageAndQuota

namespace GetFileStatus {

Params::FileEntry::FileEntry()
 {}

Params::FileEntry::~FileEntry() = default;
Params::FileEntry::FileEntry(FileEntry&& rhs) = default;
Params::FileEntry& Params::FileEntry::operator=(FileEntry&& rhs) = default;
Params::FileEntry Params::FileEntry::Clone() const {
  FileEntry out;
  return out;
}

// static
bool Params::FileEntry::Populate(
    const base::Value::Dict& dict, FileEntry& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool Params::FileEntry::Populate(
    const base::Value& value, FileEntry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::FileEntry> Params::FileEntry::FromValue(const base::Value::Dict& value) {
  FileEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::FileEntry> Params::FileEntry::FromValue(const base::Value& value) {
  FileEntry out;
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
    const base::Value& file_entry_value = args[0];
    {
      if (!file_entry_value.is_dict()) {
        return absl::nullopt;
      }
      if (!FileEntry::Populate(file_entry_value.GetDict(), params.file_entry)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const FileStatus& status) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(sync_file_system::ToString(status));

  return create_results;
}
}  // namespace GetFileStatus

namespace GetFileStatuses {

Params::FileEntriesType::FileEntriesType()
 {}

Params::FileEntriesType::~FileEntriesType() = default;
Params::FileEntriesType::FileEntriesType(FileEntriesType&& rhs) = default;
Params::FileEntriesType& Params::FileEntriesType::operator=(FileEntriesType&& rhs) = default;
Params::FileEntriesType Params::FileEntriesType::Clone() const {
  FileEntriesType out;
  return out;
}

// static
bool Params::FileEntriesType::Populate(
    const base::Value::Dict& dict, FileEntriesType& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool Params::FileEntriesType::Populate(
    const base::Value& value, FileEntriesType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::FileEntriesType> Params::FileEntriesType::FromValue(const base::Value::Dict& value) {
  FileEntriesType out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::FileEntriesType> Params::FileEntriesType::FromValue(const base::Value& value) {
  FileEntriesType out;
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
    const base::Value& file_entries_value = args[0];
    {
      if (!file_entries_value.is_list()) {
        return absl::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(file_entries_value.GetList(), params.file_entries)) {
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


base::Value::List Results::Create(const std::vector<FileStatusInfo>& status) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(status));

  return create_results;
}
}  // namespace GetFileStatuses

namespace GetServiceStatus {

base::Value::List Results::Create(const ServiceStatus& status) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(sync_file_system::ToString(status));

  return create_results;
}
}  // namespace GetServiceStatus

//
// Events
//

namespace OnServiceStatusChanged {

const char kEventName[] = "syncFileSystem.onServiceStatusChanged";

base::Value::List Create(const ServiceInfo& detail) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((detail).ToValue());

  return create_results;
}

}  // namespace OnServiceStatusChanged

namespace OnFileStatusChanged {

const char kEventName[] = "syncFileSystem.onFileStatusChanged";

base::Value::List Create(const FileInfo& detail) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((detail).ToValue());

  return create_results;
}

}  // namespace OnFileStatusChanged

}  // namespace sync_file_system
}  // namespace api
}  // namespace chrome_apps

