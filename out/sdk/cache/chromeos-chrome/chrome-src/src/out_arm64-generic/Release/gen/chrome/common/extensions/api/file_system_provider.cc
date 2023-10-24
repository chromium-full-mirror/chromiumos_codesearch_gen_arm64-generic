// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/file_system_provider.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/file_system_provider.h"

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

namespace extensions {
namespace api {
namespace file_system_provider {
//
// Types
//

const char* ToString(ProviderError enum_param) {
  switch (enum_param) {
    case PROVIDER_ERROR_OK:
      return "OK";
    case PROVIDER_ERROR_FAILED:
      return "FAILED";
    case PROVIDER_ERROR_IN_USE:
      return "IN_USE";
    case PROVIDER_ERROR_EXISTS:
      return "EXISTS";
    case PROVIDER_ERROR_NOT_FOUND:
      return "NOT_FOUND";
    case PROVIDER_ERROR_ACCESS_DENIED:
      return "ACCESS_DENIED";
    case PROVIDER_ERROR_TOO_MANY_OPENED:
      return "TOO_MANY_OPENED";
    case PROVIDER_ERROR_NO_MEMORY:
      return "NO_MEMORY";
    case PROVIDER_ERROR_NO_SPACE:
      return "NO_SPACE";
    case PROVIDER_ERROR_NOT_A_DIRECTORY:
      return "NOT_A_DIRECTORY";
    case PROVIDER_ERROR_INVALID_OPERATION:
      return "INVALID_OPERATION";
    case PROVIDER_ERROR_SECURITY:
      return "SECURITY";
    case PROVIDER_ERROR_ABORT:
      return "ABORT";
    case PROVIDER_ERROR_NOT_A_FILE:
      return "NOT_A_FILE";
    case PROVIDER_ERROR_NOT_EMPTY:
      return "NOT_EMPTY";
    case PROVIDER_ERROR_INVALID_URL:
      return "INVALID_URL";
    case PROVIDER_ERROR_IO:
      return "IO";
    case PROVIDER_ERROR_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

ProviderError ParseProviderError(base::StringPiece enum_string) {
  if (enum_string == "OK")
    return PROVIDER_ERROR_OK;
  if (enum_string == "FAILED")
    return PROVIDER_ERROR_FAILED;
  if (enum_string == "IN_USE")
    return PROVIDER_ERROR_IN_USE;
  if (enum_string == "EXISTS")
    return PROVIDER_ERROR_EXISTS;
  if (enum_string == "NOT_FOUND")
    return PROVIDER_ERROR_NOT_FOUND;
  if (enum_string == "ACCESS_DENIED")
    return PROVIDER_ERROR_ACCESS_DENIED;
  if (enum_string == "TOO_MANY_OPENED")
    return PROVIDER_ERROR_TOO_MANY_OPENED;
  if (enum_string == "NO_MEMORY")
    return PROVIDER_ERROR_NO_MEMORY;
  if (enum_string == "NO_SPACE")
    return PROVIDER_ERROR_NO_SPACE;
  if (enum_string == "NOT_A_DIRECTORY")
    return PROVIDER_ERROR_NOT_A_DIRECTORY;
  if (enum_string == "INVALID_OPERATION")
    return PROVIDER_ERROR_INVALID_OPERATION;
  if (enum_string == "SECURITY")
    return PROVIDER_ERROR_SECURITY;
  if (enum_string == "ABORT")
    return PROVIDER_ERROR_ABORT;
  if (enum_string == "NOT_A_FILE")
    return PROVIDER_ERROR_NOT_A_FILE;
  if (enum_string == "NOT_EMPTY")
    return PROVIDER_ERROR_NOT_EMPTY;
  if (enum_string == "INVALID_URL")
    return PROVIDER_ERROR_INVALID_URL;
  if (enum_string == "IO")
    return PROVIDER_ERROR_IO;
  return PROVIDER_ERROR_NONE;
}

std::u16string GetProviderErrorParseError(base::StringPiece enum_string) {
  return u"expected \"OK\" or \"FAILED\" or \"IN_USE\" or \"EXISTS\" or \"NOT_FOUND\" or \"ACCESS_DENIED\" or \"TOO_MANY_OPENED\" or \"NO_MEMORY\" or \"NO_SPACE\" or \"NOT_A_DIRECTORY\" or \"INVALID_OPERATION\" or \"SECURITY\" or \"ABORT\" or \"NOT_A_FILE\" or \"NOT_EMPTY\" or \"INVALID_URL\" or \"IO\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(OpenFileMode enum_param) {
  switch (enum_param) {
    case OPEN_FILE_MODE_READ:
      return "READ";
    case OPEN_FILE_MODE_WRITE:
      return "WRITE";
    case OPEN_FILE_MODE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

OpenFileMode ParseOpenFileMode(base::StringPiece enum_string) {
  if (enum_string == "READ")
    return OPEN_FILE_MODE_READ;
  if (enum_string == "WRITE")
    return OPEN_FILE_MODE_WRITE;
  return OPEN_FILE_MODE_NONE;
}

std::u16string GetOpenFileModeParseError(base::StringPiece enum_string) {
  return u"expected \"READ\" or \"WRITE\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ChangeType enum_param) {
  switch (enum_param) {
    case CHANGE_TYPE_CHANGED:
      return "CHANGED";
    case CHANGE_TYPE_DELETED:
      return "DELETED";
    case CHANGE_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

ChangeType ParseChangeType(base::StringPiece enum_string) {
  if (enum_string == "CHANGED")
    return CHANGE_TYPE_CHANGED;
  if (enum_string == "DELETED")
    return CHANGE_TYPE_DELETED;
  return CHANGE_TYPE_NONE;
}

std::u16string GetChangeTypeParseError(base::StringPiece enum_string) {
  return u"expected \"CHANGED\" or \"DELETED\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(CommonActionId enum_param) {
  switch (enum_param) {
    case COMMON_ACTION_ID_SAVE_FOR_OFFLINE:
      return "SAVE_FOR_OFFLINE";
    case COMMON_ACTION_ID_OFFLINE_NOT_NECESSARY:
      return "OFFLINE_NOT_NECESSARY";
    case COMMON_ACTION_ID_SHARE:
      return "SHARE";
    case COMMON_ACTION_ID_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

CommonActionId ParseCommonActionId(base::StringPiece enum_string) {
  if (enum_string == "SAVE_FOR_OFFLINE")
    return COMMON_ACTION_ID_SAVE_FOR_OFFLINE;
  if (enum_string == "OFFLINE_NOT_NECESSARY")
    return COMMON_ACTION_ID_OFFLINE_NOT_NECESSARY;
  if (enum_string == "SHARE")
    return COMMON_ACTION_ID_SHARE;
  return COMMON_ACTION_ID_NONE;
}

std::u16string GetCommonActionIdParseError(base::StringPiece enum_string) {
  return u"expected \"SAVE_FOR_OFFLINE\" or \"OFFLINE_NOT_NECESSARY\" or \"SHARE\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


CloudIdentifier::CloudIdentifier()
 {}

CloudIdentifier::~CloudIdentifier() = default;
CloudIdentifier::CloudIdentifier(CloudIdentifier&& rhs) = default;
CloudIdentifier& CloudIdentifier::operator=(CloudIdentifier&& rhs) = default;
CloudIdentifier CloudIdentifier::Clone() const {
  CloudIdentifier out;
  out.provider_name = provider_name;
  out.id = id;
  return out;
}

// static
bool CloudIdentifier::Populate(
    const base::Value::Dict& dict, CloudIdentifier& out) {
  const base::Value* provider_name_value = dict.Find("providerName");
  if (!provider_name_value) {
    return false;
  }
  {
    auto* temp = (*provider_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.provider_name = *temp;
  }

  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto* temp = (*id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.id = *temp;
  }

  return true;
}

// static
bool CloudIdentifier::Populate(
    const base::Value& value, CloudIdentifier& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<CloudIdentifier> CloudIdentifier::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<CloudIdentifier>();
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
absl::optional<CloudIdentifier> CloudIdentifier::FromValue(const base::Value::Dict& value) {
  CloudIdentifier out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CloudIdentifier> CloudIdentifier::FromValue(const base::Value& value) {
  CloudIdentifier out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict CloudIdentifier::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("providerName", this->provider_name);

  to_value_result.Set("id", this->id);


  return to_value_result;
}


EntryMetadata::ModificationTime::ModificationTime()
 {}

EntryMetadata::ModificationTime::~ModificationTime() = default;
EntryMetadata::ModificationTime::ModificationTime(ModificationTime&& rhs) = default;
EntryMetadata::ModificationTime& EntryMetadata::ModificationTime::operator=(ModificationTime&& rhs) = default;
EntryMetadata::ModificationTime EntryMetadata::ModificationTime::Clone() const {
  ModificationTime out;
  return out;
}

// static
bool EntryMetadata::ModificationTime::Populate(
    const base::Value::Dict& dict, ModificationTime& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool EntryMetadata::ModificationTime::Populate(
    const base::Value& value, ModificationTime& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<EntryMetadata::ModificationTime> EntryMetadata::ModificationTime::FromValue(const base::Value::Dict& value) {
  ModificationTime out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<EntryMetadata::ModificationTime> EntryMetadata::ModificationTime::FromValue(const base::Value& value) {
  ModificationTime out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict EntryMetadata::ModificationTime::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



EntryMetadata::EntryMetadata()
 {}

EntryMetadata::~EntryMetadata() = default;
EntryMetadata::EntryMetadata(EntryMetadata&& rhs) = default;
EntryMetadata& EntryMetadata::operator=(EntryMetadata&& rhs) = default;
EntryMetadata EntryMetadata::Clone() const {
  EntryMetadata out;
  out.is_directory = is_directory;
  out.name = name;
  out.size = size;
  if (modification_time) {
    out.modification_time = modification_time->Clone();
  }
  out.mime_type = mime_type;
  out.thumbnail = thumbnail;
  if (cloud_identifier) {
    out.cloud_identifier = cloud_identifier->Clone();
  }
  return out;
}

// static
bool EntryMetadata::Populate(
    const base::Value::Dict& dict, EntryMetadata& out) {
  const base::Value* is_directory_value = dict.Find("isDirectory");
  if (is_directory_value) {
    {
      auto temp = (*is_directory_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_directory = absl::nullopt;
        return false;
      }
      out.is_directory = *temp;
    }
  }

  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    {
      auto* temp = (*name_value).GetIfString();
      if (!temp) {
        out.name = absl::nullopt;
        return false;
      }
      out.name = *temp;
    }
  }

  const base::Value* size_value = dict.Find("size");
  if (size_value) {
    {
      auto temp = (*size_value).GetIfDouble();
      if (!temp.has_value()) {
        out.size = absl::nullopt;
        return false;
      }
      out.size = *temp;
    }
  }

  const base::Value* modification_time_value = dict.Find("modificationTime");
  if (modification_time_value) {
    {
      if (!(*modification_time_value).is_dict()) {
        return false;
      }
      else {
        ModificationTime temp;
        if (!ModificationTime::Populate((*modification_time_value).GetDict(), temp))
          return false;
        out.modification_time = std::move(temp);
      }
    }
  }

  const base::Value* mime_type_value = dict.Find("mimeType");
  if (mime_type_value) {
    {
      auto* temp = (*mime_type_value).GetIfString();
      if (!temp) {
        out.mime_type = absl::nullopt;
        return false;
      }
      out.mime_type = *temp;
    }
  }

  const base::Value* thumbnail_value = dict.Find("thumbnail");
  if (thumbnail_value) {
    {
      auto* temp = (*thumbnail_value).GetIfString();
      if (!temp) {
        out.thumbnail = absl::nullopt;
        return false;
      }
      out.thumbnail = *temp;
    }
  }

  const base::Value* cloud_identifier_value = dict.Find("cloudIdentifier");
  if (cloud_identifier_value) {
    {
      if (!(*cloud_identifier_value).is_dict()) {
        return false;
      }
      else {
        CloudIdentifier temp;
        if (!CloudIdentifier::Populate((*cloud_identifier_value).GetDict(), temp))
          return false;
        out.cloud_identifier = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool EntryMetadata::Populate(
    const base::Value& value, EntryMetadata& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<EntryMetadata> EntryMetadata::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<EntryMetadata>();
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
absl::optional<EntryMetadata> EntryMetadata::FromValue(const base::Value::Dict& value) {
  EntryMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<EntryMetadata> EntryMetadata::FromValue(const base::Value& value) {
  EntryMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict EntryMetadata::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->is_directory) {
    to_value_result.Set("isDirectory", *this->is_directory);

  }
  if (this->name) {
    to_value_result.Set("name", *this->name);

  }
  if (this->size) {
    to_value_result.Set("size", *this->size);

  }
  if (this->modification_time) {
    to_value_result.Set("modificationTime", (this->modification_time)->ToValue());

  }
  if (this->mime_type) {
    to_value_result.Set("mimeType", *this->mime_type);

  }
  if (this->thumbnail) {
    to_value_result.Set("thumbnail", *this->thumbnail);

  }
  if (this->cloud_identifier) {
    to_value_result.Set("cloudIdentifier", (this->cloud_identifier)->ToValue());

  }

  return to_value_result;
}


Watcher::Watcher()
: recursive(false) {}

Watcher::~Watcher() = default;
Watcher::Watcher(Watcher&& rhs) = default;
Watcher& Watcher::operator=(Watcher&& rhs) = default;
Watcher Watcher::Clone() const {
  Watcher out;
  out.entry_path = entry_path;
  out.recursive = recursive;
  out.last_tag = last_tag;
  return out;
}

// static
bool Watcher::Populate(
    const base::Value::Dict& dict, Watcher& out) {
  const base::Value* entry_path_value = dict.Find("entryPath");
  if (!entry_path_value) {
    return false;
  }
  {
    auto* temp = (*entry_path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.entry_path = *temp;
  }

  const base::Value* recursive_value = dict.Find("recursive");
  if (!recursive_value) {
    return false;
  }
  {
    auto temp = (*recursive_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.recursive = *temp;
  }

  const base::Value* last_tag_value = dict.Find("lastTag");
  if (last_tag_value) {
    {
      auto* temp = (*last_tag_value).GetIfString();
      if (!temp) {
        out.last_tag = absl::nullopt;
        return false;
      }
      out.last_tag = *temp;
    }
  }

  return true;
}

// static
bool Watcher::Populate(
    const base::Value& value, Watcher& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<Watcher> Watcher::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Watcher>();
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
absl::optional<Watcher> Watcher::FromValue(const base::Value::Dict& value) {
  Watcher out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Watcher> Watcher::FromValue(const base::Value& value) {
  Watcher out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict Watcher::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("entryPath", this->entry_path);

  to_value_result.Set("recursive", this->recursive);

  if (this->last_tag) {
    to_value_result.Set("lastTag", *this->last_tag);

  }

  return to_value_result;
}


OpenedFile::OpenedFile()
: open_request_id(0),
mode() {}

OpenedFile::~OpenedFile() = default;
OpenedFile::OpenedFile(OpenedFile&& rhs) = default;
OpenedFile& OpenedFile::operator=(OpenedFile&& rhs) = default;
OpenedFile OpenedFile::Clone() const {
  OpenedFile out;
  out.open_request_id = open_request_id;
  out.file_path = file_path;
  out.mode = mode;
  return out;
}

// static
bool OpenedFile::Populate(
    const base::Value::Dict& dict, OpenedFile& out) {
  const base::Value* open_request_id_value = dict.Find("openRequestId");
  if (!open_request_id_value) {
    return false;
  }
  {
    auto temp = (*open_request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.open_request_id = *temp;
  }

  const base::Value* file_path_value = dict.Find("filePath");
  if (!file_path_value) {
    return false;
  }
  {
    auto* temp = (*file_path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_path = *temp;
  }

  const base::Value* mode_value = dict.Find("mode");
  if (!mode_value) {
    return false;
  }
  {
    const std::string* open_file_mode_as_string = (*mode_value).GetIfString();
    if (!open_file_mode_as_string) {
      return false;
    }
    out.mode = ParseOpenFileMode(*open_file_mode_as_string);
    if (out.mode == OpenFileMode()) {
      return false;
    }
  }

  return true;
}

// static
bool OpenedFile::Populate(
    const base::Value& value, OpenedFile& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<OpenedFile> OpenedFile::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<OpenedFile>();
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
absl::optional<OpenedFile> OpenedFile::FromValue(const base::Value::Dict& value) {
  OpenedFile out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<OpenedFile> OpenedFile::FromValue(const base::Value& value) {
  OpenedFile out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict OpenedFile::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("openRequestId", this->open_request_id);

  to_value_result.Set("filePath", this->file_path);

  to_value_result.Set("mode", file_system_provider::ToString(this->mode));


  return to_value_result;
}


FileSystemInfo::FileSystemInfo()
: writable(false),
opened_files_limit(0) {}

FileSystemInfo::~FileSystemInfo() = default;
FileSystemInfo::FileSystemInfo(FileSystemInfo&& rhs) = default;
FileSystemInfo& FileSystemInfo::operator=(FileSystemInfo&& rhs) = default;
FileSystemInfo FileSystemInfo::Clone() const {
  FileSystemInfo out;
  out.file_system_id = file_system_id;
  out.display_name = display_name;
  out.writable = writable;
  out.opened_files_limit = opened_files_limit;
  out.opened_files.reserve(opened_files.size());
  for (const auto& element : opened_files) {
    json_schema_compiler::util::AppendToContainer(out.opened_files, element.Clone());
  }
  out.supports_notify_tag = supports_notify_tag;
  out.watchers.reserve(watchers.size());
  for (const auto& element : watchers) {
    json_schema_compiler::util::AppendToContainer(out.watchers, element.Clone());
  }
  return out;
}

// static
bool FileSystemInfo::Populate(
    const base::Value::Dict& dict, FileSystemInfo& out) {
  const base::Value* file_system_id_value = dict.Find("fileSystemId");
  if (!file_system_id_value) {
    return false;
  }
  {
    auto* temp = (*file_system_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_system_id = *temp;
  }

  const base::Value* display_name_value = dict.Find("displayName");
  if (!display_name_value) {
    return false;
  }
  {
    auto* temp = (*display_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.display_name = *temp;
  }

  const base::Value* writable_value = dict.Find("writable");
  if (!writable_value) {
    return false;
  }
  {
    auto temp = (*writable_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.writable = *temp;
  }

  const base::Value* opened_files_limit_value = dict.Find("openedFilesLimit");
  if (!opened_files_limit_value) {
    return false;
  }
  {
    auto temp = (*opened_files_limit_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.opened_files_limit = *temp;
  }

  const base::Value* opened_files_value = dict.Find("openedFiles");
  if (!opened_files_value) {
    return false;
  }
  {
    if (!(*opened_files_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*opened_files_value).GetList(), out.opened_files)) {
        return false;
      }
    }
  }

  const base::Value* supports_notify_tag_value = dict.Find("supportsNotifyTag");
  if (supports_notify_tag_value) {
    {
      auto temp = (*supports_notify_tag_value).GetIfBool();
      if (!temp.has_value()) {
        out.supports_notify_tag = absl::nullopt;
        return false;
      }
      out.supports_notify_tag = *temp;
    }
  }

  const base::Value* watchers_value = dict.Find("watchers");
  if (!watchers_value) {
    return false;
  }
  {
    if (!(*watchers_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*watchers_value).GetList(), out.watchers)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool FileSystemInfo::Populate(
    const base::Value& value, FileSystemInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<FileSystemInfo> FileSystemInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<FileSystemInfo>();
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
absl::optional<FileSystemInfo> FileSystemInfo::FromValue(const base::Value::Dict& value) {
  FileSystemInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<FileSystemInfo> FileSystemInfo::FromValue(const base::Value& value) {
  FileSystemInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict FileSystemInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fileSystemId", this->file_system_id);

  to_value_result.Set("displayName", this->display_name);

  to_value_result.Set("writable", this->writable);

  to_value_result.Set("openedFilesLimit", this->opened_files_limit);

  to_value_result.Set("openedFiles", json_schema_compiler::util::CreateValueFromArray(this->opened_files));

  if (this->supports_notify_tag) {
    to_value_result.Set("supportsNotifyTag", *this->supports_notify_tag);

  }
  to_value_result.Set("watchers", json_schema_compiler::util::CreateValueFromArray(this->watchers));


  return to_value_result;
}


MountOptions::MountOptions()
 {}

MountOptions::~MountOptions() = default;
MountOptions::MountOptions(MountOptions&& rhs) = default;
MountOptions& MountOptions::operator=(MountOptions&& rhs) = default;
MountOptions MountOptions::Clone() const {
  MountOptions out;
  out.file_system_id = file_system_id;
  out.display_name = display_name;
  out.writable = writable;
  out.opened_files_limit = opened_files_limit;
  out.supports_notify_tag = supports_notify_tag;
  out.persistent = persistent;
  return out;
}

// static
bool MountOptions::Populate(
    const base::Value::Dict& dict, MountOptions& out) {
  const base::Value* file_system_id_value = dict.Find("fileSystemId");
  if (!file_system_id_value) {
    return false;
  }
  {
    auto* temp = (*file_system_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_system_id = *temp;
  }

  const base::Value* display_name_value = dict.Find("displayName");
  if (!display_name_value) {
    return false;
  }
  {
    auto* temp = (*display_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.display_name = *temp;
  }

  const base::Value* writable_value = dict.Find("writable");
  if (writable_value) {
    {
      auto temp = (*writable_value).GetIfBool();
      if (!temp.has_value()) {
        out.writable = absl::nullopt;
        return false;
      }
      out.writable = *temp;
    }
  }

  const base::Value* opened_files_limit_value = dict.Find("openedFilesLimit");
  if (opened_files_limit_value) {
    {
      auto temp = (*opened_files_limit_value).GetIfInt();
      if (!temp.has_value()) {
        out.opened_files_limit = absl::nullopt;
        return false;
      }
      out.opened_files_limit = *temp;
    }
  }

  const base::Value* supports_notify_tag_value = dict.Find("supportsNotifyTag");
  if (supports_notify_tag_value) {
    {
      auto temp = (*supports_notify_tag_value).GetIfBool();
      if (!temp.has_value()) {
        out.supports_notify_tag = absl::nullopt;
        return false;
      }
      out.supports_notify_tag = *temp;
    }
  }

  const base::Value* persistent_value = dict.Find("persistent");
  if (persistent_value) {
    {
      auto temp = (*persistent_value).GetIfBool();
      if (!temp.has_value()) {
        out.persistent = absl::nullopt;
        return false;
      }
      out.persistent = *temp;
    }
  }

  return true;
}

// static
bool MountOptions::Populate(
    const base::Value& value, MountOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<MountOptions> MountOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<MountOptions>();
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
absl::optional<MountOptions> MountOptions::FromValue(const base::Value::Dict& value) {
  MountOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<MountOptions> MountOptions::FromValue(const base::Value& value) {
  MountOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict MountOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fileSystemId", this->file_system_id);

  to_value_result.Set("displayName", this->display_name);

  if (this->writable) {
    to_value_result.Set("writable", *this->writable);

  }
  if (this->opened_files_limit) {
    to_value_result.Set("openedFilesLimit", *this->opened_files_limit);

  }
  if (this->supports_notify_tag) {
    to_value_result.Set("supportsNotifyTag", *this->supports_notify_tag);

  }
  if (this->persistent) {
    to_value_result.Set("persistent", *this->persistent);

  }

  return to_value_result;
}


UnmountOptions::UnmountOptions()
 {}

UnmountOptions::~UnmountOptions() = default;
UnmountOptions::UnmountOptions(UnmountOptions&& rhs) = default;
UnmountOptions& UnmountOptions::operator=(UnmountOptions&& rhs) = default;
UnmountOptions UnmountOptions::Clone() const {
  UnmountOptions out;
  out.file_system_id = file_system_id;
  return out;
}

// static
bool UnmountOptions::Populate(
    const base::Value::Dict& dict, UnmountOptions& out) {
  const base::Value* file_system_id_value = dict.Find("fileSystemId");
  if (!file_system_id_value) {
    return false;
  }
  {
    auto* temp = (*file_system_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_system_id = *temp;
  }

  return true;
}

// static
bool UnmountOptions::Populate(
    const base::Value& value, UnmountOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<UnmountOptions> UnmountOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<UnmountOptions>();
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
absl::optional<UnmountOptions> UnmountOptions::FromValue(const base::Value::Dict& value) {
  UnmountOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<UnmountOptions> UnmountOptions::FromValue(const base::Value& value) {
  UnmountOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict UnmountOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fileSystemId", this->file_system_id);


  return to_value_result;
}


UnmountRequestedOptions::UnmountRequestedOptions()
: request_id(0) {}

UnmountRequestedOptions::~UnmountRequestedOptions() = default;
UnmountRequestedOptions::UnmountRequestedOptions(UnmountRequestedOptions&& rhs) = default;
UnmountRequestedOptions& UnmountRequestedOptions::operator=(UnmountRequestedOptions&& rhs) = default;
UnmountRequestedOptions UnmountRequestedOptions::Clone() const {
  UnmountRequestedOptions out;
  out.file_system_id = file_system_id;
  out.request_id = request_id;
  return out;
}

// static
bool UnmountRequestedOptions::Populate(
    const base::Value::Dict& dict, UnmountRequestedOptions& out) {
  const base::Value* file_system_id_value = dict.Find("fileSystemId");
  if (!file_system_id_value) {
    return false;
  }
  {
    auto* temp = (*file_system_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_system_id = *temp;
  }

  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  return true;
}

// static
bool UnmountRequestedOptions::Populate(
    const base::Value& value, UnmountRequestedOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<UnmountRequestedOptions> UnmountRequestedOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<UnmountRequestedOptions>();
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
absl::optional<UnmountRequestedOptions> UnmountRequestedOptions::FromValue(const base::Value::Dict& value) {
  UnmountRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<UnmountRequestedOptions> UnmountRequestedOptions::FromValue(const base::Value& value) {
  UnmountRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict UnmountRequestedOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fileSystemId", this->file_system_id);

  to_value_result.Set("requestId", this->request_id);


  return to_value_result;
}


GetMetadataRequestedOptions::GetMetadataRequestedOptions()
: request_id(0),
is_directory(false),
name(false),
size(false),
modification_time(false),
mime_type(false),
thumbnail(false),
cloud_identifier(false) {}

GetMetadataRequestedOptions::~GetMetadataRequestedOptions() = default;
GetMetadataRequestedOptions::GetMetadataRequestedOptions(GetMetadataRequestedOptions&& rhs) = default;
GetMetadataRequestedOptions& GetMetadataRequestedOptions::operator=(GetMetadataRequestedOptions&& rhs) = default;
GetMetadataRequestedOptions GetMetadataRequestedOptions::Clone() const {
  GetMetadataRequestedOptions out;
  out.file_system_id = file_system_id;
  out.request_id = request_id;
  out.entry_path = entry_path;
  out.is_directory = is_directory;
  out.name = name;
  out.size = size;
  out.modification_time = modification_time;
  out.mime_type = mime_type;
  out.thumbnail = thumbnail;
  out.cloud_identifier = cloud_identifier;
  return out;
}

// static
bool GetMetadataRequestedOptions::Populate(
    const base::Value::Dict& dict, GetMetadataRequestedOptions& out) {
  const base::Value* file_system_id_value = dict.Find("fileSystemId");
  if (!file_system_id_value) {
    return false;
  }
  {
    auto* temp = (*file_system_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_system_id = *temp;
  }

  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  const base::Value* entry_path_value = dict.Find("entryPath");
  if (!entry_path_value) {
    return false;
  }
  {
    auto* temp = (*entry_path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.entry_path = *temp;
  }

  const base::Value* is_directory_value = dict.Find("isDirectory");
  if (!is_directory_value) {
    return false;
  }
  {
    auto temp = (*is_directory_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_directory = *temp;
  }

  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto temp = (*name_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.name = *temp;
  }

  const base::Value* size_value = dict.Find("size");
  if (!size_value) {
    return false;
  }
  {
    auto temp = (*size_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.size = *temp;
  }

  const base::Value* modification_time_value = dict.Find("modificationTime");
  if (!modification_time_value) {
    return false;
  }
  {
    auto temp = (*modification_time_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.modification_time = *temp;
  }

  const base::Value* mime_type_value = dict.Find("mimeType");
  if (!mime_type_value) {
    return false;
  }
  {
    auto temp = (*mime_type_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.mime_type = *temp;
  }

  const base::Value* thumbnail_value = dict.Find("thumbnail");
  if (!thumbnail_value) {
    return false;
  }
  {
    auto temp = (*thumbnail_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.thumbnail = *temp;
  }

  const base::Value* cloud_identifier_value = dict.Find("cloudIdentifier");
  if (!cloud_identifier_value) {
    return false;
  }
  {
    auto temp = (*cloud_identifier_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.cloud_identifier = *temp;
  }

  return true;
}

// static
bool GetMetadataRequestedOptions::Populate(
    const base::Value& value, GetMetadataRequestedOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<GetMetadataRequestedOptions> GetMetadataRequestedOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<GetMetadataRequestedOptions>();
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
absl::optional<GetMetadataRequestedOptions> GetMetadataRequestedOptions::FromValue(const base::Value::Dict& value) {
  GetMetadataRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<GetMetadataRequestedOptions> GetMetadataRequestedOptions::FromValue(const base::Value& value) {
  GetMetadataRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict GetMetadataRequestedOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fileSystemId", this->file_system_id);

  to_value_result.Set("requestId", this->request_id);

  to_value_result.Set("entryPath", this->entry_path);

  to_value_result.Set("isDirectory", this->is_directory);

  to_value_result.Set("name", this->name);

  to_value_result.Set("size", this->size);

  to_value_result.Set("modificationTime", this->modification_time);

  to_value_result.Set("mimeType", this->mime_type);

  to_value_result.Set("thumbnail", this->thumbnail);

  to_value_result.Set("cloudIdentifier", this->cloud_identifier);


  return to_value_result;
}


GetActionsRequestedOptions::GetActionsRequestedOptions()
: request_id(0) {}

GetActionsRequestedOptions::~GetActionsRequestedOptions() = default;
GetActionsRequestedOptions::GetActionsRequestedOptions(GetActionsRequestedOptions&& rhs) = default;
GetActionsRequestedOptions& GetActionsRequestedOptions::operator=(GetActionsRequestedOptions&& rhs) = default;
GetActionsRequestedOptions GetActionsRequestedOptions::Clone() const {
  GetActionsRequestedOptions out;
  out.file_system_id = file_system_id;
  out.request_id = request_id;
  out.entry_paths = entry_paths;
  return out;
}

// static
bool GetActionsRequestedOptions::Populate(
    const base::Value::Dict& dict, GetActionsRequestedOptions& out) {
  const base::Value* file_system_id_value = dict.Find("fileSystemId");
  if (!file_system_id_value) {
    return false;
  }
  {
    auto* temp = (*file_system_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_system_id = *temp;
  }

  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  const base::Value* entry_paths_value = dict.Find("entryPaths");
  if (!entry_paths_value) {
    return false;
  }
  {
    if (!(*entry_paths_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*entry_paths_value).GetList(), out.entry_paths)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool GetActionsRequestedOptions::Populate(
    const base::Value& value, GetActionsRequestedOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<GetActionsRequestedOptions> GetActionsRequestedOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<GetActionsRequestedOptions>();
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
absl::optional<GetActionsRequestedOptions> GetActionsRequestedOptions::FromValue(const base::Value::Dict& value) {
  GetActionsRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<GetActionsRequestedOptions> GetActionsRequestedOptions::FromValue(const base::Value& value) {
  GetActionsRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict GetActionsRequestedOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fileSystemId", this->file_system_id);

  to_value_result.Set("requestId", this->request_id);

  to_value_result.Set("entryPaths", json_schema_compiler::util::CreateValueFromArray(this->entry_paths));


  return to_value_result;
}


ReadDirectoryRequestedOptions::ReadDirectoryRequestedOptions()
: request_id(0),
is_directory(false),
name(false),
size(false),
modification_time(false),
mime_type(false),
thumbnail(false) {}

ReadDirectoryRequestedOptions::~ReadDirectoryRequestedOptions() = default;
ReadDirectoryRequestedOptions::ReadDirectoryRequestedOptions(ReadDirectoryRequestedOptions&& rhs) = default;
ReadDirectoryRequestedOptions& ReadDirectoryRequestedOptions::operator=(ReadDirectoryRequestedOptions&& rhs) = default;
ReadDirectoryRequestedOptions ReadDirectoryRequestedOptions::Clone() const {
  ReadDirectoryRequestedOptions out;
  out.file_system_id = file_system_id;
  out.request_id = request_id;
  out.directory_path = directory_path;
  out.is_directory = is_directory;
  out.name = name;
  out.size = size;
  out.modification_time = modification_time;
  out.mime_type = mime_type;
  out.thumbnail = thumbnail;
  return out;
}

// static
bool ReadDirectoryRequestedOptions::Populate(
    const base::Value::Dict& dict, ReadDirectoryRequestedOptions& out) {
  const base::Value* file_system_id_value = dict.Find("fileSystemId");
  if (!file_system_id_value) {
    return false;
  }
  {
    auto* temp = (*file_system_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_system_id = *temp;
  }

  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  const base::Value* directory_path_value = dict.Find("directoryPath");
  if (!directory_path_value) {
    return false;
  }
  {
    auto* temp = (*directory_path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.directory_path = *temp;
  }

  const base::Value* is_directory_value = dict.Find("isDirectory");
  if (!is_directory_value) {
    return false;
  }
  {
    auto temp = (*is_directory_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_directory = *temp;
  }

  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto temp = (*name_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.name = *temp;
  }

  const base::Value* size_value = dict.Find("size");
  if (!size_value) {
    return false;
  }
  {
    auto temp = (*size_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.size = *temp;
  }

  const base::Value* modification_time_value = dict.Find("modificationTime");
  if (!modification_time_value) {
    return false;
  }
  {
    auto temp = (*modification_time_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.modification_time = *temp;
  }

  const base::Value* mime_type_value = dict.Find("mimeType");
  if (!mime_type_value) {
    return false;
  }
  {
    auto temp = (*mime_type_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.mime_type = *temp;
  }

  const base::Value* thumbnail_value = dict.Find("thumbnail");
  if (!thumbnail_value) {
    return false;
  }
  {
    auto temp = (*thumbnail_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.thumbnail = *temp;
  }

  return true;
}

// static
bool ReadDirectoryRequestedOptions::Populate(
    const base::Value& value, ReadDirectoryRequestedOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ReadDirectoryRequestedOptions> ReadDirectoryRequestedOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ReadDirectoryRequestedOptions>();
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
absl::optional<ReadDirectoryRequestedOptions> ReadDirectoryRequestedOptions::FromValue(const base::Value::Dict& value) {
  ReadDirectoryRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ReadDirectoryRequestedOptions> ReadDirectoryRequestedOptions::FromValue(const base::Value& value) {
  ReadDirectoryRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ReadDirectoryRequestedOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fileSystemId", this->file_system_id);

  to_value_result.Set("requestId", this->request_id);

  to_value_result.Set("directoryPath", this->directory_path);

  to_value_result.Set("isDirectory", this->is_directory);

  to_value_result.Set("name", this->name);

  to_value_result.Set("size", this->size);

  to_value_result.Set("modificationTime", this->modification_time);

  to_value_result.Set("mimeType", this->mime_type);

  to_value_result.Set("thumbnail", this->thumbnail);


  return to_value_result;
}


OpenFileRequestedOptions::OpenFileRequestedOptions()
: request_id(0),
mode() {}

OpenFileRequestedOptions::~OpenFileRequestedOptions() = default;
OpenFileRequestedOptions::OpenFileRequestedOptions(OpenFileRequestedOptions&& rhs) = default;
OpenFileRequestedOptions& OpenFileRequestedOptions::operator=(OpenFileRequestedOptions&& rhs) = default;
OpenFileRequestedOptions OpenFileRequestedOptions::Clone() const {
  OpenFileRequestedOptions out;
  out.file_system_id = file_system_id;
  out.request_id = request_id;
  out.file_path = file_path;
  out.mode = mode;
  return out;
}

// static
bool OpenFileRequestedOptions::Populate(
    const base::Value::Dict& dict, OpenFileRequestedOptions& out) {
  const base::Value* file_system_id_value = dict.Find("fileSystemId");
  if (!file_system_id_value) {
    return false;
  }
  {
    auto* temp = (*file_system_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_system_id = *temp;
  }

  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  const base::Value* file_path_value = dict.Find("filePath");
  if (!file_path_value) {
    return false;
  }
  {
    auto* temp = (*file_path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_path = *temp;
  }

  const base::Value* mode_value = dict.Find("mode");
  if (!mode_value) {
    return false;
  }
  {
    const std::string* open_file_mode_as_string = (*mode_value).GetIfString();
    if (!open_file_mode_as_string) {
      return false;
    }
    out.mode = ParseOpenFileMode(*open_file_mode_as_string);
    if (out.mode == OpenFileMode()) {
      return false;
    }
  }

  return true;
}

// static
bool OpenFileRequestedOptions::Populate(
    const base::Value& value, OpenFileRequestedOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<OpenFileRequestedOptions> OpenFileRequestedOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<OpenFileRequestedOptions>();
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
absl::optional<OpenFileRequestedOptions> OpenFileRequestedOptions::FromValue(const base::Value::Dict& value) {
  OpenFileRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<OpenFileRequestedOptions> OpenFileRequestedOptions::FromValue(const base::Value& value) {
  OpenFileRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict OpenFileRequestedOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fileSystemId", this->file_system_id);

  to_value_result.Set("requestId", this->request_id);

  to_value_result.Set("filePath", this->file_path);

  to_value_result.Set("mode", file_system_provider::ToString(this->mode));


  return to_value_result;
}


CloseFileRequestedOptions::CloseFileRequestedOptions()
: request_id(0),
open_request_id(0) {}

CloseFileRequestedOptions::~CloseFileRequestedOptions() = default;
CloseFileRequestedOptions::CloseFileRequestedOptions(CloseFileRequestedOptions&& rhs) = default;
CloseFileRequestedOptions& CloseFileRequestedOptions::operator=(CloseFileRequestedOptions&& rhs) = default;
CloseFileRequestedOptions CloseFileRequestedOptions::Clone() const {
  CloseFileRequestedOptions out;
  out.file_system_id = file_system_id;
  out.request_id = request_id;
  out.open_request_id = open_request_id;
  return out;
}

// static
bool CloseFileRequestedOptions::Populate(
    const base::Value::Dict& dict, CloseFileRequestedOptions& out) {
  const base::Value* file_system_id_value = dict.Find("fileSystemId");
  if (!file_system_id_value) {
    return false;
  }
  {
    auto* temp = (*file_system_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_system_id = *temp;
  }

  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  const base::Value* open_request_id_value = dict.Find("openRequestId");
  if (!open_request_id_value) {
    return false;
  }
  {
    auto temp = (*open_request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.open_request_id = *temp;
  }

  return true;
}

// static
bool CloseFileRequestedOptions::Populate(
    const base::Value& value, CloseFileRequestedOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<CloseFileRequestedOptions> CloseFileRequestedOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<CloseFileRequestedOptions>();
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
absl::optional<CloseFileRequestedOptions> CloseFileRequestedOptions::FromValue(const base::Value::Dict& value) {
  CloseFileRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CloseFileRequestedOptions> CloseFileRequestedOptions::FromValue(const base::Value& value) {
  CloseFileRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict CloseFileRequestedOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fileSystemId", this->file_system_id);

  to_value_result.Set("requestId", this->request_id);

  to_value_result.Set("openRequestId", this->open_request_id);


  return to_value_result;
}


ReadFileRequestedOptions::ReadFileRequestedOptions()
: request_id(0),
open_request_id(0),
offset(0.0),
length(0.0) {}

ReadFileRequestedOptions::~ReadFileRequestedOptions() = default;
ReadFileRequestedOptions::ReadFileRequestedOptions(ReadFileRequestedOptions&& rhs) = default;
ReadFileRequestedOptions& ReadFileRequestedOptions::operator=(ReadFileRequestedOptions&& rhs) = default;
ReadFileRequestedOptions ReadFileRequestedOptions::Clone() const {
  ReadFileRequestedOptions out;
  out.file_system_id = file_system_id;
  out.request_id = request_id;
  out.open_request_id = open_request_id;
  out.offset = offset;
  out.length = length;
  return out;
}

// static
bool ReadFileRequestedOptions::Populate(
    const base::Value::Dict& dict, ReadFileRequestedOptions& out) {
  const base::Value* file_system_id_value = dict.Find("fileSystemId");
  if (!file_system_id_value) {
    return false;
  }
  {
    auto* temp = (*file_system_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_system_id = *temp;
  }

  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  const base::Value* open_request_id_value = dict.Find("openRequestId");
  if (!open_request_id_value) {
    return false;
  }
  {
    auto temp = (*open_request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.open_request_id = *temp;
  }

  const base::Value* offset_value = dict.Find("offset");
  if (!offset_value) {
    return false;
  }
  {
    auto temp = (*offset_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.offset = *temp;
  }

  const base::Value* length_value = dict.Find("length");
  if (!length_value) {
    return false;
  }
  {
    auto temp = (*length_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.length = *temp;
  }

  return true;
}

// static
bool ReadFileRequestedOptions::Populate(
    const base::Value& value, ReadFileRequestedOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ReadFileRequestedOptions> ReadFileRequestedOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ReadFileRequestedOptions>();
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
absl::optional<ReadFileRequestedOptions> ReadFileRequestedOptions::FromValue(const base::Value::Dict& value) {
  ReadFileRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ReadFileRequestedOptions> ReadFileRequestedOptions::FromValue(const base::Value& value) {
  ReadFileRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ReadFileRequestedOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fileSystemId", this->file_system_id);

  to_value_result.Set("requestId", this->request_id);

  to_value_result.Set("openRequestId", this->open_request_id);

  to_value_result.Set("offset", this->offset);

  to_value_result.Set("length", this->length);


  return to_value_result;
}


CreateDirectoryRequestedOptions::CreateDirectoryRequestedOptions()
: request_id(0),
recursive(false) {}

CreateDirectoryRequestedOptions::~CreateDirectoryRequestedOptions() = default;
CreateDirectoryRequestedOptions::CreateDirectoryRequestedOptions(CreateDirectoryRequestedOptions&& rhs) = default;
CreateDirectoryRequestedOptions& CreateDirectoryRequestedOptions::operator=(CreateDirectoryRequestedOptions&& rhs) = default;
CreateDirectoryRequestedOptions CreateDirectoryRequestedOptions::Clone() const {
  CreateDirectoryRequestedOptions out;
  out.file_system_id = file_system_id;
  out.request_id = request_id;
  out.directory_path = directory_path;
  out.recursive = recursive;
  return out;
}

// static
bool CreateDirectoryRequestedOptions::Populate(
    const base::Value::Dict& dict, CreateDirectoryRequestedOptions& out) {
  const base::Value* file_system_id_value = dict.Find("fileSystemId");
  if (!file_system_id_value) {
    return false;
  }
  {
    auto* temp = (*file_system_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_system_id = *temp;
  }

  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  const base::Value* directory_path_value = dict.Find("directoryPath");
  if (!directory_path_value) {
    return false;
  }
  {
    auto* temp = (*directory_path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.directory_path = *temp;
  }

  const base::Value* recursive_value = dict.Find("recursive");
  if (!recursive_value) {
    return false;
  }
  {
    auto temp = (*recursive_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.recursive = *temp;
  }

  return true;
}

// static
bool CreateDirectoryRequestedOptions::Populate(
    const base::Value& value, CreateDirectoryRequestedOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<CreateDirectoryRequestedOptions> CreateDirectoryRequestedOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<CreateDirectoryRequestedOptions>();
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
absl::optional<CreateDirectoryRequestedOptions> CreateDirectoryRequestedOptions::FromValue(const base::Value::Dict& value) {
  CreateDirectoryRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CreateDirectoryRequestedOptions> CreateDirectoryRequestedOptions::FromValue(const base::Value& value) {
  CreateDirectoryRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict CreateDirectoryRequestedOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fileSystemId", this->file_system_id);

  to_value_result.Set("requestId", this->request_id);

  to_value_result.Set("directoryPath", this->directory_path);

  to_value_result.Set("recursive", this->recursive);


  return to_value_result;
}


DeleteEntryRequestedOptions::DeleteEntryRequestedOptions()
: request_id(0),
recursive(false) {}

DeleteEntryRequestedOptions::~DeleteEntryRequestedOptions() = default;
DeleteEntryRequestedOptions::DeleteEntryRequestedOptions(DeleteEntryRequestedOptions&& rhs) = default;
DeleteEntryRequestedOptions& DeleteEntryRequestedOptions::operator=(DeleteEntryRequestedOptions&& rhs) = default;
DeleteEntryRequestedOptions DeleteEntryRequestedOptions::Clone() const {
  DeleteEntryRequestedOptions out;
  out.file_system_id = file_system_id;
  out.request_id = request_id;
  out.entry_path = entry_path;
  out.recursive = recursive;
  return out;
}

// static
bool DeleteEntryRequestedOptions::Populate(
    const base::Value::Dict& dict, DeleteEntryRequestedOptions& out) {
  const base::Value* file_system_id_value = dict.Find("fileSystemId");
  if (!file_system_id_value) {
    return false;
  }
  {
    auto* temp = (*file_system_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_system_id = *temp;
  }

  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  const base::Value* entry_path_value = dict.Find("entryPath");
  if (!entry_path_value) {
    return false;
  }
  {
    auto* temp = (*entry_path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.entry_path = *temp;
  }

  const base::Value* recursive_value = dict.Find("recursive");
  if (!recursive_value) {
    return false;
  }
  {
    auto temp = (*recursive_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.recursive = *temp;
  }

  return true;
}

// static
bool DeleteEntryRequestedOptions::Populate(
    const base::Value& value, DeleteEntryRequestedOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<DeleteEntryRequestedOptions> DeleteEntryRequestedOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<DeleteEntryRequestedOptions>();
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
absl::optional<DeleteEntryRequestedOptions> DeleteEntryRequestedOptions::FromValue(const base::Value::Dict& value) {
  DeleteEntryRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DeleteEntryRequestedOptions> DeleteEntryRequestedOptions::FromValue(const base::Value& value) {
  DeleteEntryRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict DeleteEntryRequestedOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fileSystemId", this->file_system_id);

  to_value_result.Set("requestId", this->request_id);

  to_value_result.Set("entryPath", this->entry_path);

  to_value_result.Set("recursive", this->recursive);


  return to_value_result;
}


CreateFileRequestedOptions::CreateFileRequestedOptions()
: request_id(0) {}

CreateFileRequestedOptions::~CreateFileRequestedOptions() = default;
CreateFileRequestedOptions::CreateFileRequestedOptions(CreateFileRequestedOptions&& rhs) = default;
CreateFileRequestedOptions& CreateFileRequestedOptions::operator=(CreateFileRequestedOptions&& rhs) = default;
CreateFileRequestedOptions CreateFileRequestedOptions::Clone() const {
  CreateFileRequestedOptions out;
  out.file_system_id = file_system_id;
  out.request_id = request_id;
  out.file_path = file_path;
  return out;
}

// static
bool CreateFileRequestedOptions::Populate(
    const base::Value::Dict& dict, CreateFileRequestedOptions& out) {
  const base::Value* file_system_id_value = dict.Find("fileSystemId");
  if (!file_system_id_value) {
    return false;
  }
  {
    auto* temp = (*file_system_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_system_id = *temp;
  }

  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  const base::Value* file_path_value = dict.Find("filePath");
  if (!file_path_value) {
    return false;
  }
  {
    auto* temp = (*file_path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_path = *temp;
  }

  return true;
}

// static
bool CreateFileRequestedOptions::Populate(
    const base::Value& value, CreateFileRequestedOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<CreateFileRequestedOptions> CreateFileRequestedOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<CreateFileRequestedOptions>();
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
absl::optional<CreateFileRequestedOptions> CreateFileRequestedOptions::FromValue(const base::Value::Dict& value) {
  CreateFileRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CreateFileRequestedOptions> CreateFileRequestedOptions::FromValue(const base::Value& value) {
  CreateFileRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict CreateFileRequestedOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fileSystemId", this->file_system_id);

  to_value_result.Set("requestId", this->request_id);

  to_value_result.Set("filePath", this->file_path);


  return to_value_result;
}


CopyEntryRequestedOptions::CopyEntryRequestedOptions()
: request_id(0) {}

CopyEntryRequestedOptions::~CopyEntryRequestedOptions() = default;
CopyEntryRequestedOptions::CopyEntryRequestedOptions(CopyEntryRequestedOptions&& rhs) = default;
CopyEntryRequestedOptions& CopyEntryRequestedOptions::operator=(CopyEntryRequestedOptions&& rhs) = default;
CopyEntryRequestedOptions CopyEntryRequestedOptions::Clone() const {
  CopyEntryRequestedOptions out;
  out.file_system_id = file_system_id;
  out.request_id = request_id;
  out.source_path = source_path;
  out.target_path = target_path;
  return out;
}

// static
bool CopyEntryRequestedOptions::Populate(
    const base::Value::Dict& dict, CopyEntryRequestedOptions& out) {
  const base::Value* file_system_id_value = dict.Find("fileSystemId");
  if (!file_system_id_value) {
    return false;
  }
  {
    auto* temp = (*file_system_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_system_id = *temp;
  }

  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  const base::Value* source_path_value = dict.Find("sourcePath");
  if (!source_path_value) {
    return false;
  }
  {
    auto* temp = (*source_path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.source_path = *temp;
  }

  const base::Value* target_path_value = dict.Find("targetPath");
  if (!target_path_value) {
    return false;
  }
  {
    auto* temp = (*target_path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.target_path = *temp;
  }

  return true;
}

// static
bool CopyEntryRequestedOptions::Populate(
    const base::Value& value, CopyEntryRequestedOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<CopyEntryRequestedOptions> CopyEntryRequestedOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<CopyEntryRequestedOptions>();
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
absl::optional<CopyEntryRequestedOptions> CopyEntryRequestedOptions::FromValue(const base::Value::Dict& value) {
  CopyEntryRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CopyEntryRequestedOptions> CopyEntryRequestedOptions::FromValue(const base::Value& value) {
  CopyEntryRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict CopyEntryRequestedOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fileSystemId", this->file_system_id);

  to_value_result.Set("requestId", this->request_id);

  to_value_result.Set("sourcePath", this->source_path);

  to_value_result.Set("targetPath", this->target_path);


  return to_value_result;
}


MoveEntryRequestedOptions::MoveEntryRequestedOptions()
: request_id(0) {}

MoveEntryRequestedOptions::~MoveEntryRequestedOptions() = default;
MoveEntryRequestedOptions::MoveEntryRequestedOptions(MoveEntryRequestedOptions&& rhs) = default;
MoveEntryRequestedOptions& MoveEntryRequestedOptions::operator=(MoveEntryRequestedOptions&& rhs) = default;
MoveEntryRequestedOptions MoveEntryRequestedOptions::Clone() const {
  MoveEntryRequestedOptions out;
  out.file_system_id = file_system_id;
  out.request_id = request_id;
  out.source_path = source_path;
  out.target_path = target_path;
  return out;
}

// static
bool MoveEntryRequestedOptions::Populate(
    const base::Value::Dict& dict, MoveEntryRequestedOptions& out) {
  const base::Value* file_system_id_value = dict.Find("fileSystemId");
  if (!file_system_id_value) {
    return false;
  }
  {
    auto* temp = (*file_system_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_system_id = *temp;
  }

  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  const base::Value* source_path_value = dict.Find("sourcePath");
  if (!source_path_value) {
    return false;
  }
  {
    auto* temp = (*source_path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.source_path = *temp;
  }

  const base::Value* target_path_value = dict.Find("targetPath");
  if (!target_path_value) {
    return false;
  }
  {
    auto* temp = (*target_path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.target_path = *temp;
  }

  return true;
}

// static
bool MoveEntryRequestedOptions::Populate(
    const base::Value& value, MoveEntryRequestedOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<MoveEntryRequestedOptions> MoveEntryRequestedOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<MoveEntryRequestedOptions>();
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
absl::optional<MoveEntryRequestedOptions> MoveEntryRequestedOptions::FromValue(const base::Value::Dict& value) {
  MoveEntryRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<MoveEntryRequestedOptions> MoveEntryRequestedOptions::FromValue(const base::Value& value) {
  MoveEntryRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict MoveEntryRequestedOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fileSystemId", this->file_system_id);

  to_value_result.Set("requestId", this->request_id);

  to_value_result.Set("sourcePath", this->source_path);

  to_value_result.Set("targetPath", this->target_path);


  return to_value_result;
}


TruncateRequestedOptions::TruncateRequestedOptions()
: request_id(0),
length(0.0) {}

TruncateRequestedOptions::~TruncateRequestedOptions() = default;
TruncateRequestedOptions::TruncateRequestedOptions(TruncateRequestedOptions&& rhs) = default;
TruncateRequestedOptions& TruncateRequestedOptions::operator=(TruncateRequestedOptions&& rhs) = default;
TruncateRequestedOptions TruncateRequestedOptions::Clone() const {
  TruncateRequestedOptions out;
  out.file_system_id = file_system_id;
  out.request_id = request_id;
  out.file_path = file_path;
  out.length = length;
  return out;
}

// static
bool TruncateRequestedOptions::Populate(
    const base::Value::Dict& dict, TruncateRequestedOptions& out) {
  const base::Value* file_system_id_value = dict.Find("fileSystemId");
  if (!file_system_id_value) {
    return false;
  }
  {
    auto* temp = (*file_system_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_system_id = *temp;
  }

  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  const base::Value* file_path_value = dict.Find("filePath");
  if (!file_path_value) {
    return false;
  }
  {
    auto* temp = (*file_path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_path = *temp;
  }

  const base::Value* length_value = dict.Find("length");
  if (!length_value) {
    return false;
  }
  {
    auto temp = (*length_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.length = *temp;
  }

  return true;
}

// static
bool TruncateRequestedOptions::Populate(
    const base::Value& value, TruncateRequestedOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<TruncateRequestedOptions> TruncateRequestedOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<TruncateRequestedOptions>();
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
absl::optional<TruncateRequestedOptions> TruncateRequestedOptions::FromValue(const base::Value::Dict& value) {
  TruncateRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<TruncateRequestedOptions> TruncateRequestedOptions::FromValue(const base::Value& value) {
  TruncateRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict TruncateRequestedOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fileSystemId", this->file_system_id);

  to_value_result.Set("requestId", this->request_id);

  to_value_result.Set("filePath", this->file_path);

  to_value_result.Set("length", this->length);


  return to_value_result;
}


WriteFileRequestedOptions::WriteFileRequestedOptions()
: request_id(0),
open_request_id(0),
offset(0.0) {}

WriteFileRequestedOptions::~WriteFileRequestedOptions() = default;
WriteFileRequestedOptions::WriteFileRequestedOptions(WriteFileRequestedOptions&& rhs) = default;
WriteFileRequestedOptions& WriteFileRequestedOptions::operator=(WriteFileRequestedOptions&& rhs) = default;
WriteFileRequestedOptions WriteFileRequestedOptions::Clone() const {
  WriteFileRequestedOptions out;
  out.file_system_id = file_system_id;
  out.request_id = request_id;
  out.open_request_id = open_request_id;
  out.offset = offset;
  out.data = data;
  return out;
}

// static
bool WriteFileRequestedOptions::Populate(
    const base::Value::Dict& dict, WriteFileRequestedOptions& out) {
  const base::Value* file_system_id_value = dict.Find("fileSystemId");
  if (!file_system_id_value) {
    return false;
  }
  {
    auto* temp = (*file_system_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_system_id = *temp;
  }

  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  const base::Value* open_request_id_value = dict.Find("openRequestId");
  if (!open_request_id_value) {
    return false;
  }
  {
    auto temp = (*open_request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.open_request_id = *temp;
  }

  const base::Value* offset_value = dict.Find("offset");
  if (!offset_value) {
    return false;
  }
  {
    auto temp = (*offset_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.offset = *temp;
  }

  const base::Value* data_value = dict.Find("data");
  if (!data_value) {
    return false;
  }
  {
    if (!(*data_value).is_blob()) {
      return false;
    }
    else {
      out.data = (*data_value).GetBlob();
    }
  }

  return true;
}

// static
bool WriteFileRequestedOptions::Populate(
    const base::Value& value, WriteFileRequestedOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<WriteFileRequestedOptions> WriteFileRequestedOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<WriteFileRequestedOptions>();
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
absl::optional<WriteFileRequestedOptions> WriteFileRequestedOptions::FromValue(const base::Value::Dict& value) {
  WriteFileRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<WriteFileRequestedOptions> WriteFileRequestedOptions::FromValue(const base::Value& value) {
  WriteFileRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict WriteFileRequestedOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fileSystemId", this->file_system_id);

  to_value_result.Set("requestId", this->request_id);

  to_value_result.Set("openRequestId", this->open_request_id);

  to_value_result.Set("offset", this->offset);

  to_value_result.Set("data", base::Value(this->data));


  return to_value_result;
}


AbortRequestedOptions::AbortRequestedOptions()
: request_id(0),
operation_request_id(0) {}

AbortRequestedOptions::~AbortRequestedOptions() = default;
AbortRequestedOptions::AbortRequestedOptions(AbortRequestedOptions&& rhs) = default;
AbortRequestedOptions& AbortRequestedOptions::operator=(AbortRequestedOptions&& rhs) = default;
AbortRequestedOptions AbortRequestedOptions::Clone() const {
  AbortRequestedOptions out;
  out.file_system_id = file_system_id;
  out.request_id = request_id;
  out.operation_request_id = operation_request_id;
  return out;
}

// static
bool AbortRequestedOptions::Populate(
    const base::Value::Dict& dict, AbortRequestedOptions& out) {
  const base::Value* file_system_id_value = dict.Find("fileSystemId");
  if (!file_system_id_value) {
    return false;
  }
  {
    auto* temp = (*file_system_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_system_id = *temp;
  }

  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  const base::Value* operation_request_id_value = dict.Find("operationRequestId");
  if (!operation_request_id_value) {
    return false;
  }
  {
    auto temp = (*operation_request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.operation_request_id = *temp;
  }

  return true;
}

// static
bool AbortRequestedOptions::Populate(
    const base::Value& value, AbortRequestedOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<AbortRequestedOptions> AbortRequestedOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<AbortRequestedOptions>();
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
absl::optional<AbortRequestedOptions> AbortRequestedOptions::FromValue(const base::Value::Dict& value) {
  AbortRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<AbortRequestedOptions> AbortRequestedOptions::FromValue(const base::Value& value) {
  AbortRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict AbortRequestedOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fileSystemId", this->file_system_id);

  to_value_result.Set("requestId", this->request_id);

  to_value_result.Set("operationRequestId", this->operation_request_id);


  return to_value_result;
}


AddWatcherRequestedOptions::AddWatcherRequestedOptions()
: request_id(0),
recursive(false) {}

AddWatcherRequestedOptions::~AddWatcherRequestedOptions() = default;
AddWatcherRequestedOptions::AddWatcherRequestedOptions(AddWatcherRequestedOptions&& rhs) = default;
AddWatcherRequestedOptions& AddWatcherRequestedOptions::operator=(AddWatcherRequestedOptions&& rhs) = default;
AddWatcherRequestedOptions AddWatcherRequestedOptions::Clone() const {
  AddWatcherRequestedOptions out;
  out.file_system_id = file_system_id;
  out.request_id = request_id;
  out.entry_path = entry_path;
  out.recursive = recursive;
  return out;
}

// static
bool AddWatcherRequestedOptions::Populate(
    const base::Value::Dict& dict, AddWatcherRequestedOptions& out) {
  const base::Value* file_system_id_value = dict.Find("fileSystemId");
  if (!file_system_id_value) {
    return false;
  }
  {
    auto* temp = (*file_system_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_system_id = *temp;
  }

  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  const base::Value* entry_path_value = dict.Find("entryPath");
  if (!entry_path_value) {
    return false;
  }
  {
    auto* temp = (*entry_path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.entry_path = *temp;
  }

  const base::Value* recursive_value = dict.Find("recursive");
  if (!recursive_value) {
    return false;
  }
  {
    auto temp = (*recursive_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.recursive = *temp;
  }

  return true;
}

// static
bool AddWatcherRequestedOptions::Populate(
    const base::Value& value, AddWatcherRequestedOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<AddWatcherRequestedOptions> AddWatcherRequestedOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<AddWatcherRequestedOptions>();
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
absl::optional<AddWatcherRequestedOptions> AddWatcherRequestedOptions::FromValue(const base::Value::Dict& value) {
  AddWatcherRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<AddWatcherRequestedOptions> AddWatcherRequestedOptions::FromValue(const base::Value& value) {
  AddWatcherRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict AddWatcherRequestedOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fileSystemId", this->file_system_id);

  to_value_result.Set("requestId", this->request_id);

  to_value_result.Set("entryPath", this->entry_path);

  to_value_result.Set("recursive", this->recursive);


  return to_value_result;
}


RemoveWatcherRequestedOptions::RemoveWatcherRequestedOptions()
: request_id(0),
recursive(false) {}

RemoveWatcherRequestedOptions::~RemoveWatcherRequestedOptions() = default;
RemoveWatcherRequestedOptions::RemoveWatcherRequestedOptions(RemoveWatcherRequestedOptions&& rhs) = default;
RemoveWatcherRequestedOptions& RemoveWatcherRequestedOptions::operator=(RemoveWatcherRequestedOptions&& rhs) = default;
RemoveWatcherRequestedOptions RemoveWatcherRequestedOptions::Clone() const {
  RemoveWatcherRequestedOptions out;
  out.file_system_id = file_system_id;
  out.request_id = request_id;
  out.entry_path = entry_path;
  out.recursive = recursive;
  return out;
}

// static
bool RemoveWatcherRequestedOptions::Populate(
    const base::Value::Dict& dict, RemoveWatcherRequestedOptions& out) {
  const base::Value* file_system_id_value = dict.Find("fileSystemId");
  if (!file_system_id_value) {
    return false;
  }
  {
    auto* temp = (*file_system_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_system_id = *temp;
  }

  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  const base::Value* entry_path_value = dict.Find("entryPath");
  if (!entry_path_value) {
    return false;
  }
  {
    auto* temp = (*entry_path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.entry_path = *temp;
  }

  const base::Value* recursive_value = dict.Find("recursive");
  if (!recursive_value) {
    return false;
  }
  {
    auto temp = (*recursive_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.recursive = *temp;
  }

  return true;
}

// static
bool RemoveWatcherRequestedOptions::Populate(
    const base::Value& value, RemoveWatcherRequestedOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<RemoveWatcherRequestedOptions> RemoveWatcherRequestedOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<RemoveWatcherRequestedOptions>();
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
absl::optional<RemoveWatcherRequestedOptions> RemoveWatcherRequestedOptions::FromValue(const base::Value::Dict& value) {
  RemoveWatcherRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<RemoveWatcherRequestedOptions> RemoveWatcherRequestedOptions::FromValue(const base::Value& value) {
  RemoveWatcherRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict RemoveWatcherRequestedOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fileSystemId", this->file_system_id);

  to_value_result.Set("requestId", this->request_id);

  to_value_result.Set("entryPath", this->entry_path);

  to_value_result.Set("recursive", this->recursive);


  return to_value_result;
}


Action::Action()
 {}

Action::~Action() = default;
Action::Action(Action&& rhs) = default;
Action& Action::operator=(Action&& rhs) = default;
Action Action::Clone() const {
  Action out;
  out.id = id;
  out.title = title;
  return out;
}

// static
bool Action::Populate(
    const base::Value::Dict& dict, Action& out) {
  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto* temp = (*id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* title_value = dict.Find("title");
  if (title_value) {
    {
      auto* temp = (*title_value).GetIfString();
      if (!temp) {
        out.title = absl::nullopt;
        return false;
      }
      out.title = *temp;
    }
  }

  return true;
}

// static
bool Action::Populate(
    const base::Value& value, Action& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<Action> Action::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Action>();
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
absl::optional<Action> Action::FromValue(const base::Value::Dict& value) {
  Action out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Action> Action::FromValue(const base::Value& value) {
  Action out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict Action::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  if (this->title) {
    to_value_result.Set("title", *this->title);

  }

  return to_value_result;
}


ExecuteActionRequestedOptions::ExecuteActionRequestedOptions()
: request_id(0) {}

ExecuteActionRequestedOptions::~ExecuteActionRequestedOptions() = default;
ExecuteActionRequestedOptions::ExecuteActionRequestedOptions(ExecuteActionRequestedOptions&& rhs) = default;
ExecuteActionRequestedOptions& ExecuteActionRequestedOptions::operator=(ExecuteActionRequestedOptions&& rhs) = default;
ExecuteActionRequestedOptions ExecuteActionRequestedOptions::Clone() const {
  ExecuteActionRequestedOptions out;
  out.file_system_id = file_system_id;
  out.request_id = request_id;
  out.entry_paths = entry_paths;
  out.action_id = action_id;
  return out;
}

// static
bool ExecuteActionRequestedOptions::Populate(
    const base::Value::Dict& dict, ExecuteActionRequestedOptions& out) {
  const base::Value* file_system_id_value = dict.Find("fileSystemId");
  if (!file_system_id_value) {
    return false;
  }
  {
    auto* temp = (*file_system_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_system_id = *temp;
  }

  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  const base::Value* entry_paths_value = dict.Find("entryPaths");
  if (!entry_paths_value) {
    return false;
  }
  {
    if (!(*entry_paths_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*entry_paths_value).GetList(), out.entry_paths)) {
        return false;
      }
    }
  }

  const base::Value* action_id_value = dict.Find("actionId");
  if (!action_id_value) {
    return false;
  }
  {
    auto* temp = (*action_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.action_id = *temp;
  }

  return true;
}

// static
bool ExecuteActionRequestedOptions::Populate(
    const base::Value& value, ExecuteActionRequestedOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ExecuteActionRequestedOptions> ExecuteActionRequestedOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ExecuteActionRequestedOptions>();
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
absl::optional<ExecuteActionRequestedOptions> ExecuteActionRequestedOptions::FromValue(const base::Value::Dict& value) {
  ExecuteActionRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ExecuteActionRequestedOptions> ExecuteActionRequestedOptions::FromValue(const base::Value& value) {
  ExecuteActionRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ExecuteActionRequestedOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fileSystemId", this->file_system_id);

  to_value_result.Set("requestId", this->request_id);

  to_value_result.Set("entryPaths", json_schema_compiler::util::CreateValueFromArray(this->entry_paths));

  to_value_result.Set("actionId", this->action_id);


  return to_value_result;
}


Change::Change()
: change_type() {}

Change::~Change() = default;
Change::Change(Change&& rhs) = default;
Change& Change::operator=(Change&& rhs) = default;
Change Change::Clone() const {
  Change out;
  out.entry_path = entry_path;
  out.change_type = change_type;
  return out;
}

// static
bool Change::Populate(
    const base::Value::Dict& dict, Change& out) {
  const base::Value* entry_path_value = dict.Find("entryPath");
  if (!entry_path_value) {
    return false;
  }
  {
    auto* temp = (*entry_path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.entry_path = *temp;
  }

  const base::Value* change_type_value = dict.Find("changeType");
  if (!change_type_value) {
    return false;
  }
  {
    const std::string* change_type_as_string = (*change_type_value).GetIfString();
    if (!change_type_as_string) {
      return false;
    }
    out.change_type = ParseChangeType(*change_type_as_string);
    if (out.change_type == ChangeType()) {
      return false;
    }
  }

  return true;
}

// static
bool Change::Populate(
    const base::Value& value, Change& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<Change> Change::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Change>();
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
absl::optional<Change> Change::FromValue(const base::Value::Dict& value) {
  Change out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Change> Change::FromValue(const base::Value& value) {
  Change out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict Change::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("entryPath", this->entry_path);

  to_value_result.Set("changeType", file_system_provider::ToString(this->change_type));


  return to_value_result;
}


NotifyOptions::NotifyOptions()
: recursive(false),
change_type() {}

NotifyOptions::~NotifyOptions() = default;
NotifyOptions::NotifyOptions(NotifyOptions&& rhs) = default;
NotifyOptions& NotifyOptions::operator=(NotifyOptions&& rhs) = default;
NotifyOptions NotifyOptions::Clone() const {
  NotifyOptions out;
  out.file_system_id = file_system_id;
  out.observed_path = observed_path;
  out.recursive = recursive;
  out.change_type = change_type;
  if (changes) {
    out.changes.emplace();
    out.changes->reserve(changes->size());
    for (const auto& element : *changes) {
      json_schema_compiler::util::AppendToContainer(*out.changes, element.Clone());
    }
  }
  out.tag = tag;
  return out;
}

// static
bool NotifyOptions::Populate(
    const base::Value::Dict& dict, NotifyOptions& out) {
  const base::Value* file_system_id_value = dict.Find("fileSystemId");
  if (!file_system_id_value) {
    return false;
  }
  {
    auto* temp = (*file_system_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_system_id = *temp;
  }

  const base::Value* observed_path_value = dict.Find("observedPath");
  if (!observed_path_value) {
    return false;
  }
  {
    auto* temp = (*observed_path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.observed_path = *temp;
  }

  const base::Value* recursive_value = dict.Find("recursive");
  if (!recursive_value) {
    return false;
  }
  {
    auto temp = (*recursive_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.recursive = *temp;
  }

  const base::Value* change_type_value = dict.Find("changeType");
  if (!change_type_value) {
    return false;
  }
  {
    const std::string* change_type_as_string = (*change_type_value).GetIfString();
    if (!change_type_as_string) {
      return false;
    }
    out.change_type = ParseChangeType(*change_type_as_string);
    if (out.change_type == ChangeType()) {
      return false;
    }
  }

  const base::Value* changes_value = dict.Find("changes");
  if (changes_value) {
    {
      if (!(*changes_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*changes_value).GetList(), out.changes)) {
          return false;
        }
      }
    }
  }

  const base::Value* tag_value = dict.Find("tag");
  if (tag_value) {
    {
      auto* temp = (*tag_value).GetIfString();
      if (!temp) {
        out.tag = absl::nullopt;
        return false;
      }
      out.tag = *temp;
    }
  }

  return true;
}

// static
bool NotifyOptions::Populate(
    const base::Value& value, NotifyOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<NotifyOptions> NotifyOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<NotifyOptions>();
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
absl::optional<NotifyOptions> NotifyOptions::FromValue(const base::Value::Dict& value) {
  NotifyOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<NotifyOptions> NotifyOptions::FromValue(const base::Value& value) {
  NotifyOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict NotifyOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fileSystemId", this->file_system_id);

  to_value_result.Set("observedPath", this->observed_path);

  to_value_result.Set("recursive", this->recursive);

  to_value_result.Set("changeType", file_system_provider::ToString(this->change_type));

  if (this->changes) {
    to_value_result.Set("changes", json_schema_compiler::util::CreateValueFromArray(*this->changes));

  }
  if (this->tag) {
    to_value_result.Set("tag", *this->tag);

  }

  return to_value_result;
}


ConfigureRequestedOptions::ConfigureRequestedOptions()
: request_id(0) {}

ConfigureRequestedOptions::~ConfigureRequestedOptions() = default;
ConfigureRequestedOptions::ConfigureRequestedOptions(ConfigureRequestedOptions&& rhs) = default;
ConfigureRequestedOptions& ConfigureRequestedOptions::operator=(ConfigureRequestedOptions&& rhs) = default;
ConfigureRequestedOptions ConfigureRequestedOptions::Clone() const {
  ConfigureRequestedOptions out;
  out.file_system_id = file_system_id;
  out.request_id = request_id;
  return out;
}

// static
bool ConfigureRequestedOptions::Populate(
    const base::Value::Dict& dict, ConfigureRequestedOptions& out) {
  const base::Value* file_system_id_value = dict.Find("fileSystemId");
  if (!file_system_id_value) {
    return false;
  }
  {
    auto* temp = (*file_system_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_system_id = *temp;
  }

  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  return true;
}

// static
bool ConfigureRequestedOptions::Populate(
    const base::Value& value, ConfigureRequestedOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ConfigureRequestedOptions> ConfigureRequestedOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ConfigureRequestedOptions>();
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
absl::optional<ConfigureRequestedOptions> ConfigureRequestedOptions::FromValue(const base::Value::Dict& value) {
  ConfigureRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ConfigureRequestedOptions> ConfigureRequestedOptions::FromValue(const base::Value& value) {
  ConfigureRequestedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ConfigureRequestedOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fileSystemId", this->file_system_id);

  to_value_result.Set("requestId", this->request_id);


  return to_value_result;
}



//
// Functions
//

namespace Mount {

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
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return absl::nullopt;
      }
      if (!MountOptions::Populate(options_value.GetDict(), params.options)) {
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
}  // namespace Mount

namespace Unmount {

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
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return absl::nullopt;
      }
      if (!UnmountOptions::Populate(options_value.GetDict(), params.options)) {
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
}  // namespace Unmount

namespace GetAll {

base::Value::List Results::Create(const std::vector<FileSystemInfo>& file_systems) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(file_systems));

  return create_results;
}
}  // namespace GetAll

namespace Get {

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
    const base::Value& file_system_id_value = args[0];
    {
      auto* temp = file_system_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.file_system_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const FileSystemInfo& file_system) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((file_system).ToValue());

  return create_results;
}
}  // namespace Get

namespace Notify {

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
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return absl::nullopt;
      }
      if (!NotifyOptions::Populate(options_value.GetDict(), params.options)) {
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
}  // namespace Notify

//
// Events
//

namespace OnUnmountRequested {

const char kEventName[] = "fileSystemProvider.onUnmountRequested";

base::Value::List Create(const UnmountRequestedOptions& options) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((options).ToValue());

  return create_results;
}

}  // namespace OnUnmountRequested

namespace OnGetMetadataRequested {

const char kEventName[] = "fileSystemProvider.onGetMetadataRequested";

base::Value::List Create(const GetMetadataRequestedOptions& options) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((options).ToValue());

  return create_results;
}

}  // namespace OnGetMetadataRequested

namespace OnGetActionsRequested {

const char kEventName[] = "fileSystemProvider.onGetActionsRequested";

base::Value::List Create(const GetActionsRequestedOptions& options) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((options).ToValue());

  return create_results;
}

}  // namespace OnGetActionsRequested

namespace OnReadDirectoryRequested {

const char kEventName[] = "fileSystemProvider.onReadDirectoryRequested";

base::Value::List Create(const ReadDirectoryRequestedOptions& options) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((options).ToValue());

  return create_results;
}

}  // namespace OnReadDirectoryRequested

namespace OnOpenFileRequested {

const char kEventName[] = "fileSystemProvider.onOpenFileRequested";

base::Value::List Create(const OpenFileRequestedOptions& options) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((options).ToValue());

  return create_results;
}

}  // namespace OnOpenFileRequested

namespace OnCloseFileRequested {

const char kEventName[] = "fileSystemProvider.onCloseFileRequested";

base::Value::List Create(const CloseFileRequestedOptions& options) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((options).ToValue());

  return create_results;
}

}  // namespace OnCloseFileRequested

namespace OnReadFileRequested {

const char kEventName[] = "fileSystemProvider.onReadFileRequested";

base::Value::List Create(const ReadFileRequestedOptions& options) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((options).ToValue());

  return create_results;
}

}  // namespace OnReadFileRequested

namespace OnCreateDirectoryRequested {

const char kEventName[] = "fileSystemProvider.onCreateDirectoryRequested";

base::Value::List Create(const CreateDirectoryRequestedOptions& options) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((options).ToValue());

  return create_results;
}

}  // namespace OnCreateDirectoryRequested

namespace OnDeleteEntryRequested {

const char kEventName[] = "fileSystemProvider.onDeleteEntryRequested";

base::Value::List Create(const DeleteEntryRequestedOptions& options) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((options).ToValue());

  return create_results;
}

}  // namespace OnDeleteEntryRequested

namespace OnCreateFileRequested {

const char kEventName[] = "fileSystemProvider.onCreateFileRequested";

base::Value::List Create(const CreateFileRequestedOptions& options) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((options).ToValue());

  return create_results;
}

}  // namespace OnCreateFileRequested

namespace OnCopyEntryRequested {

const char kEventName[] = "fileSystemProvider.onCopyEntryRequested";

base::Value::List Create(const CopyEntryRequestedOptions& options) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((options).ToValue());

  return create_results;
}

}  // namespace OnCopyEntryRequested

namespace OnMoveEntryRequested {

const char kEventName[] = "fileSystemProvider.onMoveEntryRequested";

base::Value::List Create(const MoveEntryRequestedOptions& options) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((options).ToValue());

  return create_results;
}

}  // namespace OnMoveEntryRequested

namespace OnTruncateRequested {

const char kEventName[] = "fileSystemProvider.onTruncateRequested";

base::Value::List Create(const TruncateRequestedOptions& options) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((options).ToValue());

  return create_results;
}

}  // namespace OnTruncateRequested

namespace OnWriteFileRequested {

const char kEventName[] = "fileSystemProvider.onWriteFileRequested";

base::Value::List Create(const WriteFileRequestedOptions& options) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((options).ToValue());

  return create_results;
}

}  // namespace OnWriteFileRequested

namespace OnAbortRequested {

const char kEventName[] = "fileSystemProvider.onAbortRequested";

base::Value::List Create(const AbortRequestedOptions& options) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((options).ToValue());

  return create_results;
}

}  // namespace OnAbortRequested

namespace OnConfigureRequested {

const char kEventName[] = "fileSystemProvider.onConfigureRequested";

base::Value::List Create(const ConfigureRequestedOptions& options) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((options).ToValue());

  return create_results;
}

}  // namespace OnConfigureRequested

namespace OnMountRequested {

const char kEventName[] = "fileSystemProvider.onMountRequested";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnMountRequested

namespace OnAddWatcherRequested {

const char kEventName[] = "fileSystemProvider.onAddWatcherRequested";

base::Value::List Create(const AddWatcherRequestedOptions& options) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((options).ToValue());

  return create_results;
}

}  // namespace OnAddWatcherRequested

namespace OnRemoveWatcherRequested {

const char kEventName[] = "fileSystemProvider.onRemoveWatcherRequested";

base::Value::List Create(const RemoveWatcherRequestedOptions& options) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((options).ToValue());

  return create_results;
}

}  // namespace OnRemoveWatcherRequested

namespace OnExecuteActionRequested {

const char kEventName[] = "fileSystemProvider.onExecuteActionRequested";

base::Value::List Create(const ExecuteActionRequestedOptions& options) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((options).ToValue());

  return create_results;
}

}  // namespace OnExecuteActionRequested

}  // namespace file_system_provider
}  // namespace api
}  // namespace extensions

