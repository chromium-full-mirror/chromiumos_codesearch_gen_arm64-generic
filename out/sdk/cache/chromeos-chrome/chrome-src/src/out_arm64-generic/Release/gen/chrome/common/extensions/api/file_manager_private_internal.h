// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/file_manager_private_internal.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_FILE_MANAGER_PRIVATE_INTERNAL_H__
#define CHROME_COMMON_EXTENSIONS_API_FILE_MANAGER_PRIVATE_INTERNAL_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "chrome/common/extensions/api/file_manager_private.h"
#include "chrome/common/extensions/api/file_system_provider.h"


namespace extensions {
namespace api {
namespace file_manager_private_internal {

//
// Types
//

struct EntryDescription {
  EntryDescription();
  ~EntryDescription();
  EntryDescription(const EntryDescription&) = delete;
  EntryDescription& operator=(const EntryDescription&) = delete;
  EntryDescription(EntryDescription&& rhs) noexcept;
  EntryDescription& operator=(EntryDescription&& rhs) noexcept;

  // Populates a EntryDescription object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EntryDescription& out);

  // Populates a EntryDescription object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, EntryDescription& out);

  // Creates a deep copy of EntryDescription.
  EntryDescription Clone() const;

  // Creates a EntryDescription object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<EntryDescription> FromValue(const base::Value::Dict& value);

  // Creates a EntryDescription object from a base::Value, or nullopt on
  // failure.
  static std::optional<EntryDescription> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisEntryDescription object.
  base::Value::Dict ToValue() const;

  std::string file_system_name;

  std::string file_system_root;

  std::string file_full_path;

  bool file_is_directory;

};

struct IOTaskParams {
  IOTaskParams();
  ~IOTaskParams();
  IOTaskParams(const IOTaskParams&) = delete;
  IOTaskParams& operator=(const IOTaskParams&) = delete;
  IOTaskParams(IOTaskParams&& rhs) noexcept;
  IOTaskParams& operator=(IOTaskParams&& rhs) noexcept;

  // Populates a IOTaskParams object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, IOTaskParams& out);

  // Populates a IOTaskParams object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, IOTaskParams& out);

  // Creates a deep copy of IOTaskParams.
  IOTaskParams Clone() const;

  // Creates a IOTaskParams object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<IOTaskParams> FromValue(const base::Value::Dict& value);

  // Creates a IOTaskParams object from a base::Value, or nullopt on failure.
  static std::optional<IOTaskParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisIOTaskParams object.
  base::Value::Dict ToValue() const;

  std::optional<std::string> destination_folder_url;

  std::optional<std::string> password;

  std::optional<bool> show_notification;

};

struct ParsedTrashInfoFile {
  ParsedTrashInfoFile();
  ~ParsedTrashInfoFile();
  ParsedTrashInfoFile(const ParsedTrashInfoFile&) = delete;
  ParsedTrashInfoFile& operator=(const ParsedTrashInfoFile&) = delete;
  ParsedTrashInfoFile(ParsedTrashInfoFile&& rhs) noexcept;
  ParsedTrashInfoFile& operator=(ParsedTrashInfoFile&& rhs) noexcept;

  // Populates a ParsedTrashInfoFile object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ParsedTrashInfoFile& out);

  // Populates a ParsedTrashInfoFile object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ParsedTrashInfoFile& out);

  // Creates a deep copy of ParsedTrashInfoFile.
  ParsedTrashInfoFile Clone() const;

  // Creates a ParsedTrashInfoFile object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<ParsedTrashInfoFile> FromValue(const base::Value::Dict& value);

  // Creates a ParsedTrashInfoFile object from a base::Value, or nullopt on
  // failure.
  static std::optional<ParsedTrashInfoFile> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisParsedTrashInfoFile object.
  base::Value::Dict ToValue() const;

  EntryDescription restore_entry;

  std::string trash_info_file_name;

  double deletion_date;

};

struct SearchFilesParams {
  SearchFilesParams();
  ~SearchFilesParams();
  SearchFilesParams(const SearchFilesParams&) = delete;
  SearchFilesParams& operator=(const SearchFilesParams&) = delete;
  SearchFilesParams(SearchFilesParams&& rhs) noexcept;
  SearchFilesParams& operator=(SearchFilesParams&& rhs) noexcept;

  // Populates a SearchFilesParams object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SearchFilesParams& out);

  // Populates a SearchFilesParams object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SearchFilesParams& out);

  // Creates a deep copy of SearchFilesParams.
  SearchFilesParams Clone() const;

  // Creates a SearchFilesParams object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<SearchFilesParams> FromValue(const base::Value::Dict& value);

  // Creates a SearchFilesParams object from a base::Value, or nullopt on
  // failure.
  static std::optional<SearchFilesParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSearchFilesParams object.
  base::Value::Dict ToValue() const;

  std::optional<std::string> root_url;

  std::string query;

  extensions::api::file_manager_private::SearchType types;

  int max_results;

  double modified_timestamp;

  extensions::api::file_manager_private::FileCategory category;

};

struct CrostiniSharedPathResponse {
  CrostiniSharedPathResponse();
  ~CrostiniSharedPathResponse();
  CrostiniSharedPathResponse(const CrostiniSharedPathResponse&) = delete;
  CrostiniSharedPathResponse& operator=(const CrostiniSharedPathResponse&) = delete;
  CrostiniSharedPathResponse(CrostiniSharedPathResponse&& rhs) noexcept;
  CrostiniSharedPathResponse& operator=(CrostiniSharedPathResponse&& rhs) noexcept;

  // Populates a CrostiniSharedPathResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CrostiniSharedPathResponse& out);

  // Populates a CrostiniSharedPathResponse object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CrostiniSharedPathResponse& out);

  // Creates a deep copy of CrostiniSharedPathResponse.
  CrostiniSharedPathResponse Clone() const;

  // Creates a CrostiniSharedPathResponse object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<CrostiniSharedPathResponse> FromValue(const base::Value::Dict& value);

  // Creates a CrostiniSharedPathResponse object from a base::Value, or nullopt
  // on failure.
  static std::optional<CrostiniSharedPathResponse> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCrostiniSharedPathResponse object.
  base::Value::Dict ToValue() const;

  std::vector<EntryDescription> entries;

  bool first_for_session;

};


//
// Functions
//

namespace ResolveIsolatedEntries {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::vector<std::string> urls;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<EntryDescription>& entries);
}  // namespace Results

}  // namespace ResolveIsolatedEntries

namespace GetEntryProperties {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::vector<std::string> urls;

  std::vector<extensions::api::file_manager_private::EntryPropertyName> names;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<extensions::api::file_manager_private::EntryProperties>& entry_properties);
}  // namespace Results

}  // namespace GetEntryProperties

namespace AddFileWatch {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string url;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool success);
}  // namespace Results

}  // namespace AddFileWatch

namespace RemoveFileWatch {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string url;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool success);
}  // namespace Results

}  // namespace RemoveFileWatch

namespace GetCustomActions {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::vector<std::string> urls;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<extensions::api::file_system_provider::Action>& actions);
}  // namespace Results

}  // namespace GetCustomActions

namespace ExecuteCustomAction {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::vector<std::string> urls;

  std::string action_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ExecuteCustomAction

namespace ComputeChecksum {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string url;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& checksum);
}  // namespace Results

}  // namespace ComputeChecksum

namespace GetMimeType {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string url;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& result);
}  // namespace Results

}  // namespace GetMimeType

namespace GetContentMimeType {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string blob_uuid;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& result);
}  // namespace Results

}  // namespace GetContentMimeType

namespace GetContentMetadata {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string blob_uuid;

  std::string mime_type;

  bool include_images;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const extensions::api::file_manager_private::MediaMetadata& result);
}  // namespace Results

}  // namespace GetContentMetadata

namespace PinDriveFile {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string url;

  bool pin;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace PinDriveFile

namespace ExecuteTask {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  extensions::api::file_manager_private::FileTaskDescriptor descriptor;

  std::vector<std::string> urls;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const extensions::api::file_manager_private::TaskResult& result);
}  // namespace Results

}  // namespace ExecuteTask

namespace SearchFiles {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  SearchFilesParams search_params;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<EntryDescription>& entries);
}  // namespace Results

}  // namespace SearchFiles

namespace SetDefaultTask {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  extensions::api::file_manager_private::FileTaskDescriptor descriptor;

  std::vector<std::string> urls;

  std::vector<std::string> mime_types;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetDefaultTask

namespace GetFileTasks {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::vector<std::string> urls;

  std::vector<std::string> dlp_source_urls;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const extensions::api::file_manager_private::ResultingTasks& resulting_tasks);
}  // namespace Results

}  // namespace GetFileTasks

namespace GetDisallowedTransfers {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::vector<std::string> entries;

  std::string destination_entry;

  bool is_move;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<EntryDescription>& entries);
}  // namespace Results

}  // namespace GetDisallowedTransfers

namespace GetDlpMetadata {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::vector<std::string> entries;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<extensions::api::file_manager_private::DlpMetadata>& entries);
}  // namespace Results

}  // namespace GetDlpMetadata

namespace GetDriveQuotaMetadata {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string url;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const extensions::api::file_manager_private::DriveQuotaMetadata& drive_quota_metadata);
}  // namespace Results

}  // namespace GetDriveQuotaMetadata

namespace ValidatePathNameLength {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string parent_url;

  std::string name;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool result);
}  // namespace Results

}  // namespace ValidatePathNameLength

namespace GetDirectorySize {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string url;


 private:
  Params();
};

namespace Results {

base::Value::List Create(double size);
}  // namespace Results

}  // namespace GetDirectorySize

namespace GetVolumeRoot {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  extensions::api::file_manager_private::GetVolumeRootOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const EntryDescription& root_dir);
}  // namespace Results

}  // namespace GetVolumeRoot

namespace GetRecentFiles {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  extensions::api::file_manager_private::SourceRestriction restriction;

  std::string query;

  int cutoff_days;

  extensions::api::file_manager_private::FileCategory file_category;

  bool invalidate_cache;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<EntryDescription>& entries);
}  // namespace Results

}  // namespace GetRecentFiles

namespace SharePathsWithCrostini {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string vm_name;

  std::vector<std::string> urls;

  bool persist;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SharePathsWithCrostini

namespace UnsharePathWithCrostini {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string vm_name;

  std::string url;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace UnsharePathWithCrostini

namespace GetCrostiniSharedPaths {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  bool observe_first_for_session;

  std::string vm_name;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const CrostiniSharedPathResponse& response);
}  // namespace Results

}  // namespace GetCrostiniSharedPaths

namespace GetLinuxPackageInfo {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string url;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const extensions::api::file_manager_private::LinuxPackageInfo& linux_package_info);
}  // namespace Results

}  // namespace GetLinuxPackageInfo

namespace InstallLinuxPackage {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string url;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const extensions::api::file_manager_private::InstallLinuxPackageStatus& status);
}  // namespace Results

}  // namespace InstallLinuxPackage

namespace ImportCrostiniImage {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string url;


 private:
  Params();
};

}  // namespace ImportCrostiniImage

namespace SharesheetHasTargets {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::vector<std::string> urls;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool result);
}  // namespace Results

}  // namespace SharesheetHasTargets

namespace InvokeSharesheet {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::vector<std::string> urls;

  extensions::api::file_manager_private::SharesheetLaunchSource launch_source;

  std::vector<std::string> dlp_source_urls;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace InvokeSharesheet

namespace ToggleAddedToHoldingSpace {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::vector<std::string> urls;

  bool add;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ToggleAddedToHoldingSpace

namespace StartIOTask {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  extensions::api::file_manager_private::IoTaskType type;

  std::vector<std::string> urls;

  IOTaskParams params;


 private:
  Params();
};

namespace Results {

base::Value::List Create(int task_id);
}  // namespace Results

}  // namespace StartIOTask

namespace ParseTrashInfoFiles {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::vector<std::string> urls;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<ParsedTrashInfoFile>& files);
}  // namespace Results

}  // namespace ParseTrashInfoFiles

}  // namespace file_manager_private_internal
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_FILE_MANAGER_PRIVATE_INTERNAL_H__
