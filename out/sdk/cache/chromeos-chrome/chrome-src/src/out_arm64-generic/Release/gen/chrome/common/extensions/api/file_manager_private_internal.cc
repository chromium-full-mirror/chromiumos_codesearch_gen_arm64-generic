// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/file_manager_private_internal.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/file_manager_private_internal.h"

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
#include "chrome/common/extensions/api/file_manager_private.h"
#include "chrome/common/extensions/api/file_system_provider.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace file_manager_private_internal {
//
// Types
//

EntryDescription::EntryDescription()
: file_is_directory(false) {}

EntryDescription::~EntryDescription() = default;
EntryDescription::EntryDescription(EntryDescription&& rhs) noexcept = default;
EntryDescription& EntryDescription::operator=(EntryDescription&& rhs) noexcept = default;
EntryDescription EntryDescription::Clone() const {
  EntryDescription out;
  out.file_system_name = file_system_name;
  out.file_system_root = file_system_root;
  out.file_full_path = file_full_path;
  out.file_is_directory = file_is_directory;
  return out;
}

// static
bool EntryDescription::Populate(
    const base::Value::Dict& dict, EntryDescription& out) {
  const base::Value* file_system_name_value = dict.Find("fileSystemName");
  if (!file_system_name_value) {
    return false;
  }
  {
    auto* temp = (*file_system_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_system_name = *temp;
  }

  const base::Value* file_system_root_value = dict.Find("fileSystemRoot");
  if (!file_system_root_value) {
    return false;
  }
  {
    auto* temp = (*file_system_root_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_system_root = *temp;
  }

  const base::Value* file_full_path_value = dict.Find("fileFullPath");
  if (!file_full_path_value) {
    return false;
  }
  {
    auto* temp = (*file_full_path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_full_path = *temp;
  }

  const base::Value* file_is_directory_value = dict.Find("fileIsDirectory");
  if (!file_is_directory_value) {
    return false;
  }
  {
    auto temp = (*file_is_directory_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.file_is_directory = *temp;
  }

  return true;
}

// static
bool EntryDescription::Populate(
    const base::Value& value, EntryDescription& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<EntryDescription> EntryDescription::FromValue(const base::Value::Dict& value) {
  EntryDescription out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<EntryDescription> EntryDescription::FromValue(const base::Value& value) {
  EntryDescription out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict EntryDescription::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fileSystemName", this->file_system_name);

  to_value_result.Set("fileSystemRoot", this->file_system_root);

  to_value_result.Set("fileFullPath", this->file_full_path);

  to_value_result.Set("fileIsDirectory", this->file_is_directory);


  return to_value_result;
}


IOTaskParams::IOTaskParams()
 {}

IOTaskParams::~IOTaskParams() = default;
IOTaskParams::IOTaskParams(IOTaskParams&& rhs) noexcept = default;
IOTaskParams& IOTaskParams::operator=(IOTaskParams&& rhs) noexcept = default;
IOTaskParams IOTaskParams::Clone() const {
  IOTaskParams out;
  out.destination_folder_url = destination_folder_url;
  out.password = password;
  out.show_notification = show_notification;
  return out;
}

// static
bool IOTaskParams::Populate(
    const base::Value::Dict& dict, IOTaskParams& out) {
  const base::Value* destination_folder_url_value = dict.Find("destinationFolderUrl");
  if (destination_folder_url_value) {
    {
      auto* temp = (*destination_folder_url_value).GetIfString();
      if (!temp) {
        out.destination_folder_url = std::nullopt;
        return false;
      }
      out.destination_folder_url = *temp;
    }
  }

  const base::Value* password_value = dict.Find("password");
  if (password_value) {
    {
      auto* temp = (*password_value).GetIfString();
      if (!temp) {
        out.password = std::nullopt;
        return false;
      }
      out.password = *temp;
    }
  }

  const base::Value* show_notification_value = dict.Find("showNotification");
  if (show_notification_value) {
    {
      auto temp = (*show_notification_value).GetIfBool();
      if (!temp.has_value()) {
        out.show_notification = std::nullopt;
        return false;
      }
      out.show_notification = *temp;
    }
  }

  return true;
}

// static
bool IOTaskParams::Populate(
    const base::Value& value, IOTaskParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<IOTaskParams> IOTaskParams::FromValue(const base::Value::Dict& value) {
  IOTaskParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<IOTaskParams> IOTaskParams::FromValue(const base::Value& value) {
  IOTaskParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict IOTaskParams::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->destination_folder_url) {
    to_value_result.Set("destinationFolderUrl", *this->destination_folder_url);

  }
  if (this->password) {
    to_value_result.Set("password", *this->password);

  }
  if (this->show_notification) {
    to_value_result.Set("showNotification", *this->show_notification);

  }

  return to_value_result;
}


ParsedTrashInfoFile::ParsedTrashInfoFile()
: deletion_date(0.0) {}

ParsedTrashInfoFile::~ParsedTrashInfoFile() = default;
ParsedTrashInfoFile::ParsedTrashInfoFile(ParsedTrashInfoFile&& rhs) noexcept = default;
ParsedTrashInfoFile& ParsedTrashInfoFile::operator=(ParsedTrashInfoFile&& rhs) noexcept = default;
ParsedTrashInfoFile ParsedTrashInfoFile::Clone() const {
  ParsedTrashInfoFile out;
  out.restore_entry = restore_entry.Clone();
  out.trash_info_file_name = trash_info_file_name;
  out.deletion_date = deletion_date;
  return out;
}

// static
bool ParsedTrashInfoFile::Populate(
    const base::Value::Dict& dict, ParsedTrashInfoFile& out) {
  const base::Value* restore_entry_value = dict.Find("restoreEntry");
  if (!restore_entry_value) {
    return false;
  }
  {
    if (!(*restore_entry_value).is_dict()) {
      return false;
    }
    if (!EntryDescription::Populate((*restore_entry_value).GetDict(), out.restore_entry)) {
      return false;
    }
  }

  const base::Value* trash_info_file_name_value = dict.Find("trashInfoFileName");
  if (!trash_info_file_name_value) {
    return false;
  }
  {
    auto* temp = (*trash_info_file_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.trash_info_file_name = *temp;
  }

  const base::Value* deletion_date_value = dict.Find("deletionDate");
  if (!deletion_date_value) {
    return false;
  }
  {
    auto temp = (*deletion_date_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.deletion_date = *temp;
  }

  return true;
}

// static
bool ParsedTrashInfoFile::Populate(
    const base::Value& value, ParsedTrashInfoFile& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ParsedTrashInfoFile> ParsedTrashInfoFile::FromValue(const base::Value::Dict& value) {
  ParsedTrashInfoFile out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ParsedTrashInfoFile> ParsedTrashInfoFile::FromValue(const base::Value& value) {
  ParsedTrashInfoFile out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ParsedTrashInfoFile::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("restoreEntry", (this->restore_entry).ToValue());

  to_value_result.Set("trashInfoFileName", this->trash_info_file_name);

  to_value_result.Set("deletionDate", this->deletion_date);


  return to_value_result;
}


SearchFilesParams::SearchFilesParams()
: types(),
max_results(0),
modified_timestamp(0.0),
category() {}

SearchFilesParams::~SearchFilesParams() = default;
SearchFilesParams::SearchFilesParams(SearchFilesParams&& rhs) noexcept = default;
SearchFilesParams& SearchFilesParams::operator=(SearchFilesParams&& rhs) noexcept = default;
SearchFilesParams SearchFilesParams::Clone() const {
  SearchFilesParams out;
  out.root_url = root_url;
  out.query = query;
  out.types = types;
  out.max_results = max_results;
  out.modified_timestamp = modified_timestamp;
  out.category = category;
  return out;
}

// static
bool SearchFilesParams::Populate(
    const base::Value::Dict& dict, SearchFilesParams& out) {
  const base::Value* root_url_value = dict.Find("rootUrl");
  if (root_url_value) {
    {
      auto* temp = (*root_url_value).GetIfString();
      if (!temp) {
        out.root_url = std::nullopt;
        return false;
      }
      out.root_url = *temp;
    }
  }

  const base::Value* query_value = dict.Find("query");
  if (!query_value) {
    return false;
  }
  {
    auto* temp = (*query_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.query = *temp;
  }

  const base::Value* types_value = dict.Find("types");
  if (!types_value) {
    return false;
  }
  {
    const std::string* search_type_as_string = (*types_value).GetIfString();
    if (!search_type_as_string) {
      return false;
    }
    out.types = extensions::api::file_manager_private::ParseSearchType(*search_type_as_string);
    if (out.types == extensions::api::file_manager_private::SearchType()) {
      return false;
    }
  }

  const base::Value* max_results_value = dict.Find("maxResults");
  if (!max_results_value) {
    return false;
  }
  {
    auto temp = (*max_results_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.max_results = *temp;
  }

  const base::Value* modified_timestamp_value = dict.Find("modifiedTimestamp");
  if (!modified_timestamp_value) {
    return false;
  }
  {
    auto temp = (*modified_timestamp_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.modified_timestamp = *temp;
  }

  const base::Value* category_value = dict.Find("category");
  if (!category_value) {
    return false;
  }
  {
    const std::string* file_category_as_string = (*category_value).GetIfString();
    if (!file_category_as_string) {
      return false;
    }
    out.category = extensions::api::file_manager_private::ParseFileCategory(*file_category_as_string);
    if (out.category == extensions::api::file_manager_private::FileCategory()) {
      return false;
    }
  }

  return true;
}

// static
bool SearchFilesParams::Populate(
    const base::Value& value, SearchFilesParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SearchFilesParams> SearchFilesParams::FromValue(const base::Value::Dict& value) {
  SearchFilesParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SearchFilesParams> SearchFilesParams::FromValue(const base::Value& value) {
  SearchFilesParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SearchFilesParams::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->root_url) {
    to_value_result.Set("rootUrl", *this->root_url);

  }
  to_value_result.Set("query", this->query);

  to_value_result.Set("types", file_manager_private::ToString(this->types));

  to_value_result.Set("maxResults", this->max_results);

  to_value_result.Set("modifiedTimestamp", this->modified_timestamp);

  to_value_result.Set("category", file_manager_private::ToString(this->category));


  return to_value_result;
}


CrostiniSharedPathResponse::CrostiniSharedPathResponse()
: first_for_session(false) {}

CrostiniSharedPathResponse::~CrostiniSharedPathResponse() = default;
CrostiniSharedPathResponse::CrostiniSharedPathResponse(CrostiniSharedPathResponse&& rhs) noexcept = default;
CrostiniSharedPathResponse& CrostiniSharedPathResponse::operator=(CrostiniSharedPathResponse&& rhs) noexcept = default;
CrostiniSharedPathResponse CrostiniSharedPathResponse::Clone() const {
  CrostiniSharedPathResponse out;
  out.entries.reserve(entries.size());
  for (const auto& element : entries) {
    json_schema_compiler::util::AppendToContainer(out.entries, element.Clone());
  }
  out.first_for_session = first_for_session;
  return out;
}

// static
bool CrostiniSharedPathResponse::Populate(
    const base::Value::Dict& dict, CrostiniSharedPathResponse& out) {
  const base::Value* entries_value = dict.Find("entries");
  if (!entries_value) {
    return false;
  }
  {
    if (!(*entries_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*entries_value).GetList(), out.entries)) {
        return false;
      }
    }
  }

  const base::Value* first_for_session_value = dict.Find("firstForSession");
  if (!first_for_session_value) {
    return false;
  }
  {
    auto temp = (*first_for_session_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.first_for_session = *temp;
  }

  return true;
}

// static
bool CrostiniSharedPathResponse::Populate(
    const base::Value& value, CrostiniSharedPathResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CrostiniSharedPathResponse> CrostiniSharedPathResponse::FromValue(const base::Value::Dict& value) {
  CrostiniSharedPathResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CrostiniSharedPathResponse> CrostiniSharedPathResponse::FromValue(const base::Value& value) {
  CrostiniSharedPathResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict CrostiniSharedPathResponse::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("entries", json_schema_compiler::util::CreateValueFromArray(this->entries));

  to_value_result.Set("firstForSession", this->first_for_session);


  return to_value_result;
}



//
// Functions
//

namespace ResolveIsolatedEntries {

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
    const base::Value& urls_value = args[0];
    {
      if (!urls_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(urls_value.GetList(), params.urls)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<EntryDescription>& entries) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(entries));

  return create_results;
}
}  // namespace ResolveIsolatedEntries

namespace GetEntryProperties {

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
    const base::Value& urls_value = args[0];
    {
      if (!urls_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(urls_value.GetList(), params.urls)) {
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
    const base::Value& names_value = args[1];
    {
      if (!names_value.is_list()) {
        return std::nullopt;
      }
      else {
        for (const auto& it : (names_value).GetList()) {
          extensions::api::file_manager_private::EntryPropertyName tmp;
          const std::string* entry_property_name_as_string = (it).GetIfString();
          if (!entry_property_name_as_string) {
            return std::nullopt;
          }
          tmp = extensions::api::file_manager_private::ParseEntryPropertyName(*entry_property_name_as_string);
          if (tmp == extensions::api::file_manager_private::EntryPropertyName()) {
            return std::nullopt;
          }
          params.names.push_back(tmp);
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<extensions::api::file_manager_private::EntryProperties>& entry_properties) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(entry_properties));

  return create_results;
}
}  // namespace GetEntryProperties

namespace AddFileWatch {

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
    const base::Value& url_value = args[0];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace AddFileWatch

namespace RemoveFileWatch {

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
    const base::Value& url_value = args[0];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace RemoveFileWatch

namespace GetCustomActions {

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
    const base::Value& urls_value = args[0];
    {
      if (!urls_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(urls_value.GetList(), params.urls)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<extensions::api::file_system_provider::Action>& actions) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(actions));

  return create_results;
}
}  // namespace GetCustomActions

namespace ExecuteCustomAction {

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
    const base::Value& urls_value = args[0];
    {
      if (!urls_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(urls_value.GetList(), params.urls)) {
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
    const base::Value& action_id_value = args[1];
    {
      auto* temp = action_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.action_id = *temp;
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
}  // namespace ExecuteCustomAction

namespace ComputeChecksum {

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
    const base::Value& url_value = args[0];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& checksum) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(checksum);

  return create_results;
}
}  // namespace ComputeChecksum

namespace GetMimeType {

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
    const base::Value& url_value = args[0];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace GetMimeType

namespace GetContentMimeType {

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
    const base::Value& blob_uuid_value = args[0];
    {
      auto* temp = blob_uuid_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.blob_uuid = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace GetContentMimeType

namespace GetContentMetadata {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 3) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& blob_uuid_value = args[0];
    {
      auto* temp = blob_uuid_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.blob_uuid = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& mime_type_value = args[1];
    {
      auto* temp = mime_type_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.mime_type = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& include_images_value = args[2];
    {
      auto temp = include_images_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.include_images = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const extensions::api::file_manager_private::MediaMetadata& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace GetContentMetadata

namespace PinDriveFile {

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
    const base::Value& url_value = args[0];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& pin_value = args[1];
    {
      auto temp = pin_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.pin = *temp;
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
}  // namespace PinDriveFile

namespace ExecuteTask {

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
    const base::Value& descriptor_value = args[0];
    {
      if (!descriptor_value.is_dict()) {
        return std::nullopt;
      }
      if (!extensions::api::file_manager_private::FileTaskDescriptor::Populate(descriptor_value.GetDict(), params.descriptor)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& urls_value = args[1];
    {
      if (!urls_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(urls_value.GetList(), params.urls)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const extensions::api::file_manager_private::TaskResult& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(file_manager_private::ToString(result));

  return create_results;
}
}  // namespace ExecuteTask

namespace SearchFiles {

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
    const base::Value& search_params_value = args[0];
    {
      if (!search_params_value.is_dict()) {
        return std::nullopt;
      }
      if (!SearchFilesParams::Populate(search_params_value.GetDict(), params.search_params)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<EntryDescription>& entries) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(entries));

  return create_results;
}
}  // namespace SearchFiles

namespace SetDefaultTask {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 3) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& descriptor_value = args[0];
    {
      if (!descriptor_value.is_dict()) {
        return std::nullopt;
      }
      if (!extensions::api::file_manager_private::FileTaskDescriptor::Populate(descriptor_value.GetDict(), params.descriptor)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& urls_value = args[1];
    {
      if (!urls_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(urls_value.GetList(), params.urls)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& mime_types_value = args[2];
    {
      if (!mime_types_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(mime_types_value.GetList(), params.mime_types)) {
          return std::nullopt;
        }
      }
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
}  // namespace SetDefaultTask

namespace GetFileTasks {

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
    const base::Value& urls_value = args[0];
    {
      if (!urls_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(urls_value.GetList(), params.urls)) {
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
    const base::Value& dlp_source_urls_value = args[1];
    {
      if (!dlp_source_urls_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(dlp_source_urls_value.GetList(), params.dlp_source_urls)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const extensions::api::file_manager_private::ResultingTasks& resulting_tasks) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((resulting_tasks).ToValue());

  return create_results;
}
}  // namespace GetFileTasks

namespace GetDisallowedTransfers {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 3) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& entries_value = args[0];
    {
      if (!entries_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(entries_value.GetList(), params.entries)) {
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
    const base::Value& destination_entry_value = args[1];
    {
      auto* temp = destination_entry_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.destination_entry = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& is_move_value = args[2];
    {
      auto temp = is_move_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.is_move = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<EntryDescription>& entries) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(entries));

  return create_results;
}
}  // namespace GetDisallowedTransfers

namespace GetDlpMetadata {

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
    const base::Value& entries_value = args[0];
    {
      if (!entries_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(entries_value.GetList(), params.entries)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<extensions::api::file_manager_private::DlpMetadata>& entries) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(entries));

  return create_results;
}
}  // namespace GetDlpMetadata

namespace GetDriveQuotaMetadata {

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
    const base::Value& url_value = args[0];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const extensions::api::file_manager_private::DriveQuotaMetadata& drive_quota_metadata) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((drive_quota_metadata).ToValue());

  return create_results;
}
}  // namespace GetDriveQuotaMetadata

namespace ValidatePathNameLength {

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
    const base::Value& parent_url_value = args[0];
    {
      auto* temp = parent_url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.parent_url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& name_value = args[1];
    {
      auto* temp = name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace ValidatePathNameLength

namespace GetDirectorySize {

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
    const base::Value& url_value = args[0];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(double size) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(size);

  return create_results;
}
}  // namespace GetDirectorySize

namespace GetVolumeRoot {

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
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      if (!extensions::api::file_manager_private::GetVolumeRootOptions::Populate(options_value.GetDict(), params.options)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const EntryDescription& root_dir) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((root_dir).ToValue());

  return create_results;
}
}  // namespace GetVolumeRoot

namespace GetRecentFiles {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 5) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& restriction_value = args[0];
    {
      const std::string* source_restriction_as_string = restriction_value.GetIfString();
      if (!source_restriction_as_string) {
        return std::nullopt;
      }
      params.restriction = extensions::api::file_manager_private::ParseSourceRestriction(*source_restriction_as_string);
      if (params.restriction == extensions::api::file_manager_private::SourceRestriction()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& query_value = args[1];
    {
      auto* temp = query_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.query = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& cutoff_days_value = args[2];
    {
      auto temp = cutoff_days_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.cutoff_days = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (3 < args.size() &&
      !args[3].is_none()) {
    const base::Value& file_category_value = args[3];
    {
      const std::string* file_category_as_string = file_category_value.GetIfString();
      if (!file_category_as_string) {
        return std::nullopt;
      }
      params.file_category = extensions::api::file_manager_private::ParseFileCategory(*file_category_as_string);
      if (params.file_category == extensions::api::file_manager_private::FileCategory()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (4 < args.size() &&
      !args[4].is_none()) {
    const base::Value& invalidate_cache_value = args[4];
    {
      auto temp = invalidate_cache_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.invalidate_cache = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<EntryDescription>& entries) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(entries));

  return create_results;
}
}  // namespace GetRecentFiles

namespace SharePathsWithCrostini {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 3) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& vm_name_value = args[0];
    {
      auto* temp = vm_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.vm_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& urls_value = args[1];
    {
      if (!urls_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(urls_value.GetList(), params.urls)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& persist_value = args[2];
    {
      auto temp = persist_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.persist = *temp;
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
}  // namespace SharePathsWithCrostini

namespace UnsharePathWithCrostini {

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
    const base::Value& vm_name_value = args[0];
    {
      auto* temp = vm_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.vm_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& url_value = args[1];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.url = *temp;
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
}  // namespace UnsharePathWithCrostini

namespace GetCrostiniSharedPaths {

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
    const base::Value& observe_first_for_session_value = args[0];
    {
      auto temp = observe_first_for_session_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.observe_first_for_session = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& vm_name_value = args[1];
    {
      auto* temp = vm_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.vm_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const CrostiniSharedPathResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace GetCrostiniSharedPaths

namespace GetLinuxPackageInfo {

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
    const base::Value& url_value = args[0];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const extensions::api::file_manager_private::LinuxPackageInfo& linux_package_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((linux_package_info).ToValue());

  return create_results;
}
}  // namespace GetLinuxPackageInfo

namespace InstallLinuxPackage {

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
    const base::Value& url_value = args[0];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const extensions::api::file_manager_private::InstallLinuxPackageStatus& status) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(file_manager_private::ToString(status));

  return create_results;
}
}  // namespace InstallLinuxPackage

namespace ImportCrostiniImage {

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
    const base::Value& url_value = args[0];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace ImportCrostiniImage

namespace SharesheetHasTargets {

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
    const base::Value& urls_value = args[0];
    {
      if (!urls_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(urls_value.GetList(), params.urls)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace SharesheetHasTargets

namespace InvokeSharesheet {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 3) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& urls_value = args[0];
    {
      if (!urls_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(urls_value.GetList(), params.urls)) {
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
    const base::Value& launch_source_value = args[1];
    {
      const std::string* sharesheet_launch_source_as_string = launch_source_value.GetIfString();
      if (!sharesheet_launch_source_as_string) {
        return std::nullopt;
      }
      params.launch_source = extensions::api::file_manager_private::ParseSharesheetLaunchSource(*sharesheet_launch_source_as_string);
      if (params.launch_source == extensions::api::file_manager_private::SharesheetLaunchSource()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& dlp_source_urls_value = args[2];
    {
      if (!dlp_source_urls_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(dlp_source_urls_value.GetList(), params.dlp_source_urls)) {
          return std::nullopt;
        }
      }
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
}  // namespace InvokeSharesheet

namespace ToggleAddedToHoldingSpace {

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
    const base::Value& urls_value = args[0];
    {
      if (!urls_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(urls_value.GetList(), params.urls)) {
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
    const base::Value& add_value = args[1];
    {
      auto temp = add_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.add = *temp;
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
}  // namespace ToggleAddedToHoldingSpace

namespace StartIOTask {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 3) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& type_value = args[0];
    {
      const std::string* io_task_type_as_string = type_value.GetIfString();
      if (!io_task_type_as_string) {
        return std::nullopt;
      }
      params.type = extensions::api::file_manager_private::ParseIoTaskType(*io_task_type_as_string);
      if (params.type == extensions::api::file_manager_private::IoTaskType()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& urls_value = args[1];
    {
      if (!urls_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(urls_value.GetList(), params.urls)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& params_value = args[2];
    {
      if (!params_value.is_dict()) {
        return std::nullopt;
      }
      if (!IOTaskParams::Populate(params_value.GetDict(), params.params)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(int task_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(task_id);

  return create_results;
}
}  // namespace StartIOTask

namespace ParseTrashInfoFiles {

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
    const base::Value& urls_value = args[0];
    {
      if (!urls_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(urls_value.GetList(), params.urls)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<ParsedTrashInfoFile>& files) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(files));

  return create_results;
}
}  // namespace ParseTrashInfoFiles

}  // namespace file_manager_private_internal
}  // namespace api
}  // namespace extensions

