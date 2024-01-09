// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/file_system_provider.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_FILE_SYSTEM_PROVIDER_H__
#define CHROME_COMMON_EXTENSIONS_API_FILE_SYSTEM_PROVIDER_H__

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
namespace file_system_provider {

//
// Types
//

// Error codes used by providing extensions in response to requests as well as
// in case of errors when calling methods of the API. For success,
// <code>"OK"</code> must be used.
enum class ProviderError {
  kNone = 0,
  kOk,
  kFailed,
  kInUse,
  kExists,
  kNotFound,
  kAccessDenied,
  kTooManyOpened,
  kNoMemory,
  kNoSpace,
  kNotADirectory,
  kInvalidOperation,
  kSecurity,
  kAbort,
  kNotAFile,
  kNotEmpty,
  kInvalidUrl,
  kIo,
  kMaxValue = kIo,
};


const char* ToString(ProviderError as_enum);
ProviderError ParseProviderError(base::StringPiece as_string);
std::u16string GetProviderErrorParseError(base::StringPiece as_string);

// Mode of opening a file. Used by $(ref:onOpenFileRequested).
enum class OpenFileMode {
  kNone = 0,
  kRead,
  kWrite,
  kMaxValue = kWrite,
};


const char* ToString(OpenFileMode as_enum);
OpenFileMode ParseOpenFileMode(base::StringPiece as_string);
std::u16string GetOpenFileModeParseError(base::StringPiece as_string);

// Type of a change detected on the observed directory.
enum class ChangeType {
  kNone = 0,
  kChanged,
  kDeleted,
  kMaxValue = kDeleted,
};


const char* ToString(ChangeType as_enum);
ChangeType ParseChangeType(base::StringPiece as_string);
std::u16string GetChangeTypeParseError(base::StringPiece as_string);

// List of common actions. <code>"SHARE"</code> is for sharing files with
// others. <code>"SAVE_FOR_OFFLINE"</code> for pinning (saving for offline
// access). <code>"OFFLINE_NOT_NECESSARY"</code> for notifying that the file
// doesn't need to be stored for offline access anymore. Used by
// $(ref:onGetActionsRequested) and $(ref:onExecuteActionRequested).
enum class CommonActionId {
  kNone = 0,
  kSaveForOffline,
  kOfflineNotNecessary,
  kShare,
  kMaxValue = kShare,
};


const char* ToString(CommonActionId as_enum);
CommonActionId ParseCommonActionId(base::StringPiece as_string);
std::u16string GetCommonActionIdParseError(base::StringPiece as_string);

struct CloudIdentifier {
  CloudIdentifier();
  ~CloudIdentifier();
  CloudIdentifier(const CloudIdentifier&) = delete;
  CloudIdentifier& operator=(const CloudIdentifier&) = delete;
  CloudIdentifier(CloudIdentifier&& rhs) noexcept;
  CloudIdentifier& operator=(CloudIdentifier&& rhs) noexcept;

  // Populates a CloudIdentifier object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CloudIdentifier& out);

  // Populates a CloudIdentifier object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CloudIdentifier& out);

  // Creates a deep copy of CloudIdentifier.
  CloudIdentifier Clone() const;

  // Creates a CloudIdentifier object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<CloudIdentifier> FromValue(const base::Value::Dict& value);

  // Creates a CloudIdentifier object from a base::Value, or nullopt on failure.
  static std::optional<CloudIdentifier> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCloudIdentifier object.
  base::Value::Dict ToValue() const;

  // Identifier for the cloud storage provider (e.g. 'drive.google.com').
  std::string provider_name;

  // The provider's identifier for the given file/directory.
  std::string id;

};

struct EntryMetadata {
  EntryMetadata();
  ~EntryMetadata();
  EntryMetadata(const EntryMetadata&) = delete;
  EntryMetadata& operator=(const EntryMetadata&) = delete;
  EntryMetadata(EntryMetadata&& rhs) noexcept;
  EntryMetadata& operator=(EntryMetadata&& rhs) noexcept;

  // Populates a EntryMetadata object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EntryMetadata& out);

  // Populates a EntryMetadata object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, EntryMetadata& out);

  // Creates a deep copy of EntryMetadata.
  EntryMetadata Clone() const;

  // Creates a EntryMetadata object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<EntryMetadata> FromValue(const base::Value::Dict& value);

  // Creates a EntryMetadata object from a base::Value, or nullopt on failure.
  static std::optional<EntryMetadata> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisEntryMetadata object.
  base::Value::Dict ToValue() const;

  // The last modified time of this entry. Must be provided if requested in
  // <code>options</code>.
  struct ModificationTime {
    ModificationTime();
    ~ModificationTime();
    ModificationTime(const ModificationTime&) = delete;
    ModificationTime& operator=(const ModificationTime&) = delete;
    ModificationTime(ModificationTime&& rhs) noexcept;
    ModificationTime& operator=(ModificationTime&& rhs) noexcept;

    // Populates a ModificationTime object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, ModificationTime& out);

    // Populates a ModificationTime object from a Dict& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value::Dict& value, ModificationTime& out);

    // Creates a deep copy of ModificationTime.
    ModificationTime Clone() const;

    // Creates a ModificationTime object from a base::Value::Dict, or nullopt on
    // failure.
    static std::optional<ModificationTime> FromValue(const base::Value::Dict& value);

    // Creates a ModificationTime object from a base::Value, or nullopt on
    // failure.
    static std::optional<ModificationTime> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisModificationTime object.
    base::Value::Dict ToValue() const;

    base::Value::Dict additional_properties;
  };


  // True if it is a directory. Must be provided if requested in
  // <code>options</code>.
  std::optional<bool> is_directory;

  // Name of this entry (not full path name). Must not contain '/'. For root it
  // must be empty. Must be provided if requested in <code>options</code>.
  std::optional<std::string> name;

  // File size in bytes. Must be provided if requested in <code>options</code>.
  std::optional<double> size;

  // The last modified time of this entry. Must be provided if requested in
  // <code>options</code>.
  std::optional<ModificationTime> modification_time;

  // Mime type for the entry. Always optional, but should be provided if requested
  // in <code>options</code>.
  std::optional<std::string> mime_type;

  // Thumbnail image as a data URI in either PNG, JPEG or WEBP format, at most 32
  // KB in size. Optional, but can be provided only when explicitly requested by
  // the $(ref:onGetMetadataRequested) event.
  std::optional<std::string> thumbnail;

  // Cloud storage representation of this entry. Must be provided if requested in
  // <code>options</code> and the file is backed by cloud storage. For local files
  // not backed by cloud storage, it should be undefined when requested.
  std::optional<CloudIdentifier> cloud_identifier;

};

struct Watcher {
  Watcher();
  ~Watcher();
  Watcher(const Watcher&) = delete;
  Watcher& operator=(const Watcher&) = delete;
  Watcher(Watcher&& rhs) noexcept;
  Watcher& operator=(Watcher&& rhs) noexcept;

  // Populates a Watcher object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Watcher& out);

  // Populates a Watcher object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Watcher& out);

  // Creates a deep copy of Watcher.
  Watcher Clone() const;

  // Creates a Watcher object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Watcher> FromValue(const base::Value::Dict& value);

  // Creates a Watcher object from a base::Value, or nullopt on failure.
  static std::optional<Watcher> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisWatcher object.
  base::Value::Dict ToValue() const;

  // The path of the entry being observed.
  std::string entry_path;

  // Whether watching should include all child entries recursively. It can be true
  // for directories only.
  bool recursive;

  // Tag used by the last notification for the watcher.
  std::optional<std::string> last_tag;

};

struct OpenedFile {
  OpenedFile();
  ~OpenedFile();
  OpenedFile(const OpenedFile&) = delete;
  OpenedFile& operator=(const OpenedFile&) = delete;
  OpenedFile(OpenedFile&& rhs) noexcept;
  OpenedFile& operator=(OpenedFile&& rhs) noexcept;

  // Populates a OpenedFile object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, OpenedFile& out);

  // Populates a OpenedFile object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, OpenedFile& out);

  // Creates a deep copy of OpenedFile.
  OpenedFile Clone() const;

  // Creates a OpenedFile object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<OpenedFile> FromValue(const base::Value::Dict& value);

  // Creates a OpenedFile object from a base::Value, or nullopt on failure.
  static std::optional<OpenedFile> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisOpenedFile object.
  base::Value::Dict ToValue() const;

  // A request ID to be be used by consecutive read/write and close requests.
  int open_request_id;

  // The path of the opened file.
  std::string file_path;

  // Whether the file was opened for reading or writing.
  OpenFileMode mode;

};

struct FileSystemInfo {
  FileSystemInfo();
  ~FileSystemInfo();
  FileSystemInfo(const FileSystemInfo&) = delete;
  FileSystemInfo& operator=(const FileSystemInfo&) = delete;
  FileSystemInfo(FileSystemInfo&& rhs) noexcept;
  FileSystemInfo& operator=(FileSystemInfo&& rhs) noexcept;

  // Populates a FileSystemInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, FileSystemInfo& out);

  // Populates a FileSystemInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, FileSystemInfo& out);

  // Creates a deep copy of FileSystemInfo.
  FileSystemInfo Clone() const;

  // Creates a FileSystemInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<FileSystemInfo> FromValue(const base::Value::Dict& value);

  // Creates a FileSystemInfo object from a base::Value, or nullopt on failure.
  static std::optional<FileSystemInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisFileSystemInfo object.
  base::Value::Dict ToValue() const;

  // The identifier of the file system.
  std::string file_system_id;

  // A human-readable name for the file system.
  std::string display_name;

  // Whether the file system supports operations which may change contents of the
  // file system (such as creating, deleting or writing to files).
  bool writable;

  // The maximum number of files that can be opened at once. If 0, then not
  // limited.
  int opened_files_limit;

  // List of currently opened files.
  std::vector<OpenedFile> opened_files;

  // Whether the file system supports the <code>tag</code> field for observing
  // directories.
  std::optional<bool> supports_notify_tag;

  // List of watchers.
  std::vector<Watcher> watchers;

};

struct MountOptions {
  MountOptions();
  ~MountOptions();
  MountOptions(const MountOptions&) = delete;
  MountOptions& operator=(const MountOptions&) = delete;
  MountOptions(MountOptions&& rhs) noexcept;
  MountOptions& operator=(MountOptions&& rhs) noexcept;

  // Populates a MountOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MountOptions& out);

  // Populates a MountOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, MountOptions& out);

  // Creates a deep copy of MountOptions.
  MountOptions Clone() const;

  // Creates a MountOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<MountOptions> FromValue(const base::Value::Dict& value);

  // Creates a MountOptions object from a base::Value, or nullopt on failure.
  static std::optional<MountOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMountOptions object.
  base::Value::Dict ToValue() const;

  // The string indentifier of the file system. Must be unique per each extension.
  std::string file_system_id;

  // A human-readable name for the file system.
  std::string display_name;

  // Whether the file system supports operations which may change contents of the
  // file system (such as creating, deleting or writing to files).
  std::optional<bool> writable;

  // The maximum number of files that can be opened at once. If not specified, or
  // 0, then not limited.
  std::optional<int> opened_files_limit;

  // Whether the file system supports the <code>tag</code> field for observed
  // directories.
  std::optional<bool> supports_notify_tag;

  // Whether the framework should resume the file system at the next sign-in
  // session. True by default.
  std::optional<bool> persistent;

};

struct UnmountOptions {
  UnmountOptions();
  ~UnmountOptions();
  UnmountOptions(const UnmountOptions&) = delete;
  UnmountOptions& operator=(const UnmountOptions&) = delete;
  UnmountOptions(UnmountOptions&& rhs) noexcept;
  UnmountOptions& operator=(UnmountOptions&& rhs) noexcept;

  // Populates a UnmountOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UnmountOptions& out);

  // Populates a UnmountOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, UnmountOptions& out);

  // Creates a deep copy of UnmountOptions.
  UnmountOptions Clone() const;

  // Creates a UnmountOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<UnmountOptions> FromValue(const base::Value::Dict& value);

  // Creates a UnmountOptions object from a base::Value, or nullopt on failure.
  static std::optional<UnmountOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisUnmountOptions object.
  base::Value::Dict ToValue() const;

  // The identifier of the file system to be unmounted.
  std::string file_system_id;

};

struct UnmountRequestedOptions {
  UnmountRequestedOptions();
  ~UnmountRequestedOptions();
  UnmountRequestedOptions(const UnmountRequestedOptions&) = delete;
  UnmountRequestedOptions& operator=(const UnmountRequestedOptions&) = delete;
  UnmountRequestedOptions(UnmountRequestedOptions&& rhs) noexcept;
  UnmountRequestedOptions& operator=(UnmountRequestedOptions&& rhs) noexcept;

  // Populates a UnmountRequestedOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UnmountRequestedOptions& out);

  // Populates a UnmountRequestedOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, UnmountRequestedOptions& out);

  // Creates a deep copy of UnmountRequestedOptions.
  UnmountRequestedOptions Clone() const;

  // Creates a UnmountRequestedOptions object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<UnmountRequestedOptions> FromValue(const base::Value::Dict& value);

  // Creates a UnmountRequestedOptions object from a base::Value, or nullopt on
  // failure.
  static std::optional<UnmountRequestedOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisUnmountRequestedOptions object.
  base::Value::Dict ToValue() const;

  // The identifier of the file system to be unmounted.
  std::string file_system_id;

  // The unique identifier of this request.
  int request_id;

};

struct GetMetadataRequestedOptions {
  GetMetadataRequestedOptions();
  ~GetMetadataRequestedOptions();
  GetMetadataRequestedOptions(const GetMetadataRequestedOptions&) = delete;
  GetMetadataRequestedOptions& operator=(const GetMetadataRequestedOptions&) = delete;
  GetMetadataRequestedOptions(GetMetadataRequestedOptions&& rhs) noexcept;
  GetMetadataRequestedOptions& operator=(GetMetadataRequestedOptions&& rhs) noexcept;

  // Populates a GetMetadataRequestedOptions object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetMetadataRequestedOptions& out);

  // Populates a GetMetadataRequestedOptions object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetMetadataRequestedOptions& out);

  // Creates a deep copy of GetMetadataRequestedOptions.
  GetMetadataRequestedOptions Clone() const;

  // Creates a GetMetadataRequestedOptions object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<GetMetadataRequestedOptions> FromValue(const base::Value::Dict& value);

  // Creates a GetMetadataRequestedOptions object from a base::Value, or nullopt
  // on failure.
  static std::optional<GetMetadataRequestedOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetMetadataRequestedOptions object.
  base::Value::Dict ToValue() const;

  // The identifier of the file system related to this operation.
  std::string file_system_id;

  // The unique identifier of this request.
  int request_id;

  // The path of the entry to fetch metadata about.
  std::string entry_path;

  // Set to <code>true</code> if <code>is_directory</code> value is requested.
  bool is_directory;

  // Set to <code>true</code> if <code>name</code> value is requested.
  bool name;

  // Set to <code>true</code> if <code>size</code> value is requested.
  bool size;

  // Set to <code>true</code> if <code>modificationTime</code> value is requested.
  bool modification_time;

  // Set to <code>true</code> if <code>mimeType</code> value is requested.
  bool mime_type;

  // Set to <code>true</code> if <code>thumbnail</code> value is requested.
  bool thumbnail;

  // Set to <code>true</code> if <code>cloudIdentifier</code> value is requested.
  bool cloud_identifier;

};

struct GetActionsRequestedOptions {
  GetActionsRequestedOptions();
  ~GetActionsRequestedOptions();
  GetActionsRequestedOptions(const GetActionsRequestedOptions&) = delete;
  GetActionsRequestedOptions& operator=(const GetActionsRequestedOptions&) = delete;
  GetActionsRequestedOptions(GetActionsRequestedOptions&& rhs) noexcept;
  GetActionsRequestedOptions& operator=(GetActionsRequestedOptions&& rhs) noexcept;

  // Populates a GetActionsRequestedOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetActionsRequestedOptions& out);

  // Populates a GetActionsRequestedOptions object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetActionsRequestedOptions& out);

  // Creates a deep copy of GetActionsRequestedOptions.
  GetActionsRequestedOptions Clone() const;

  // Creates a GetActionsRequestedOptions object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<GetActionsRequestedOptions> FromValue(const base::Value::Dict& value);

  // Creates a GetActionsRequestedOptions object from a base::Value, or nullopt
  // on failure.
  static std::optional<GetActionsRequestedOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetActionsRequestedOptions object.
  base::Value::Dict ToValue() const;

  // The identifier of the file system related to this operation.
  std::string file_system_id;

  // The unique identifier of this request.
  int request_id;

  // List of paths of entries for the list of actions.
  std::vector<std::string> entry_paths;

};

struct ReadDirectoryRequestedOptions {
  ReadDirectoryRequestedOptions();
  ~ReadDirectoryRequestedOptions();
  ReadDirectoryRequestedOptions(const ReadDirectoryRequestedOptions&) = delete;
  ReadDirectoryRequestedOptions& operator=(const ReadDirectoryRequestedOptions&) = delete;
  ReadDirectoryRequestedOptions(ReadDirectoryRequestedOptions&& rhs) noexcept;
  ReadDirectoryRequestedOptions& operator=(ReadDirectoryRequestedOptions&& rhs) noexcept;

  // Populates a ReadDirectoryRequestedOptions object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ReadDirectoryRequestedOptions& out);

  // Populates a ReadDirectoryRequestedOptions object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ReadDirectoryRequestedOptions& out);

  // Creates a deep copy of ReadDirectoryRequestedOptions.
  ReadDirectoryRequestedOptions Clone() const;

  // Creates a ReadDirectoryRequestedOptions object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<ReadDirectoryRequestedOptions> FromValue(const base::Value::Dict& value);

  // Creates a ReadDirectoryRequestedOptions object from a base::Value, or
  // nullopt on failure.
  static std::optional<ReadDirectoryRequestedOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisReadDirectoryRequestedOptions object.
  base::Value::Dict ToValue() const;

  // The identifier of the file system related to this operation.
  std::string file_system_id;

  // The unique identifier of this request.
  int request_id;

  // The path of the directory which contents are requested.
  std::string directory_path;

  // Set to <code>true</code> if <code>is_directory</code> value is requested.
  bool is_directory;

  // Set to <code>true</code> if <code>name</code> value is requested.
  bool name;

  // Set to <code>true</code> if <code>size</code> value is requested.
  bool size;

  // Set to <code>true</code> if <code>modificationTime</code> value is requested.
  bool modification_time;

  // Set to <code>true</code> if <code>mimeType</code> value is requested.
  bool mime_type;

  // Set to <code>true</code> if <code>thumbnail</code> value is requested.
  bool thumbnail;

};

struct OpenFileRequestedOptions {
  OpenFileRequestedOptions();
  ~OpenFileRequestedOptions();
  OpenFileRequestedOptions(const OpenFileRequestedOptions&) = delete;
  OpenFileRequestedOptions& operator=(const OpenFileRequestedOptions&) = delete;
  OpenFileRequestedOptions(OpenFileRequestedOptions&& rhs) noexcept;
  OpenFileRequestedOptions& operator=(OpenFileRequestedOptions&& rhs) noexcept;

  // Populates a OpenFileRequestedOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, OpenFileRequestedOptions& out);

  // Populates a OpenFileRequestedOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, OpenFileRequestedOptions& out);

  // Creates a deep copy of OpenFileRequestedOptions.
  OpenFileRequestedOptions Clone() const;

  // Creates a OpenFileRequestedOptions object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<OpenFileRequestedOptions> FromValue(const base::Value::Dict& value);

  // Creates a OpenFileRequestedOptions object from a base::Value, or nullopt on
  // failure.
  static std::optional<OpenFileRequestedOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisOpenFileRequestedOptions object.
  base::Value::Dict ToValue() const;

  // The identifier of the file system related to this operation.
  std::string file_system_id;

  // A request ID which will be used by consecutive read/write and close requests.
  int request_id;

  // The path of the file to be opened.
  std::string file_path;

  // Whether the file will be used for reading or writing.
  OpenFileMode mode;

};

struct CloseFileRequestedOptions {
  CloseFileRequestedOptions();
  ~CloseFileRequestedOptions();
  CloseFileRequestedOptions(const CloseFileRequestedOptions&) = delete;
  CloseFileRequestedOptions& operator=(const CloseFileRequestedOptions&) = delete;
  CloseFileRequestedOptions(CloseFileRequestedOptions&& rhs) noexcept;
  CloseFileRequestedOptions& operator=(CloseFileRequestedOptions&& rhs) noexcept;

  // Populates a CloseFileRequestedOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CloseFileRequestedOptions& out);

  // Populates a CloseFileRequestedOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CloseFileRequestedOptions& out);

  // Creates a deep copy of CloseFileRequestedOptions.
  CloseFileRequestedOptions Clone() const;

  // Creates a CloseFileRequestedOptions object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<CloseFileRequestedOptions> FromValue(const base::Value::Dict& value);

  // Creates a CloseFileRequestedOptions object from a base::Value, or nullopt
  // on failure.
  static std::optional<CloseFileRequestedOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCloseFileRequestedOptions object.
  base::Value::Dict ToValue() const;

  // The identifier of the file system related to this operation.
  std::string file_system_id;

  // The unique identifier of this request.
  int request_id;

  // A request ID used to open the file.
  int open_request_id;

};

struct ReadFileRequestedOptions {
  ReadFileRequestedOptions();
  ~ReadFileRequestedOptions();
  ReadFileRequestedOptions(const ReadFileRequestedOptions&) = delete;
  ReadFileRequestedOptions& operator=(const ReadFileRequestedOptions&) = delete;
  ReadFileRequestedOptions(ReadFileRequestedOptions&& rhs) noexcept;
  ReadFileRequestedOptions& operator=(ReadFileRequestedOptions&& rhs) noexcept;

  // Populates a ReadFileRequestedOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ReadFileRequestedOptions& out);

  // Populates a ReadFileRequestedOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ReadFileRequestedOptions& out);

  // Creates a deep copy of ReadFileRequestedOptions.
  ReadFileRequestedOptions Clone() const;

  // Creates a ReadFileRequestedOptions object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<ReadFileRequestedOptions> FromValue(const base::Value::Dict& value);

  // Creates a ReadFileRequestedOptions object from a base::Value, or nullopt on
  // failure.
  static std::optional<ReadFileRequestedOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisReadFileRequestedOptions object.
  base::Value::Dict ToValue() const;

  // The identifier of the file system related to this operation.
  std::string file_system_id;

  // The unique identifier of this request.
  int request_id;

  // A request ID used to open the file.
  int open_request_id;

  // Position in the file (in bytes) to start reading from.
  double offset;

  // Number of bytes to be returned.
  double length;

};

struct CreateDirectoryRequestedOptions {
  CreateDirectoryRequestedOptions();
  ~CreateDirectoryRequestedOptions();
  CreateDirectoryRequestedOptions(const CreateDirectoryRequestedOptions&) = delete;
  CreateDirectoryRequestedOptions& operator=(const CreateDirectoryRequestedOptions&) = delete;
  CreateDirectoryRequestedOptions(CreateDirectoryRequestedOptions&& rhs) noexcept;
  CreateDirectoryRequestedOptions& operator=(CreateDirectoryRequestedOptions&& rhs) noexcept;

  // Populates a CreateDirectoryRequestedOptions object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CreateDirectoryRequestedOptions& out);

  // Populates a CreateDirectoryRequestedOptions object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CreateDirectoryRequestedOptions& out);

  // Creates a deep copy of CreateDirectoryRequestedOptions.
  CreateDirectoryRequestedOptions Clone() const;

  // Creates a CreateDirectoryRequestedOptions object from a base::Value::Dict,
  // or nullopt on failure.
  static std::optional<CreateDirectoryRequestedOptions> FromValue(const base::Value::Dict& value);

  // Creates a CreateDirectoryRequestedOptions object from a base::Value, or
  // nullopt on failure.
  static std::optional<CreateDirectoryRequestedOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCreateDirectoryRequestedOptions object.
  base::Value::Dict ToValue() const;

  // The identifier of the file system related to this operation.
  std::string file_system_id;

  // The unique identifier of this request.
  int request_id;

  // The path of the directory to be created.
  std::string directory_path;

  // Whether the operation is recursive (for directories only).
  bool recursive;

};

struct DeleteEntryRequestedOptions {
  DeleteEntryRequestedOptions();
  ~DeleteEntryRequestedOptions();
  DeleteEntryRequestedOptions(const DeleteEntryRequestedOptions&) = delete;
  DeleteEntryRequestedOptions& operator=(const DeleteEntryRequestedOptions&) = delete;
  DeleteEntryRequestedOptions(DeleteEntryRequestedOptions&& rhs) noexcept;
  DeleteEntryRequestedOptions& operator=(DeleteEntryRequestedOptions&& rhs) noexcept;

  // Populates a DeleteEntryRequestedOptions object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DeleteEntryRequestedOptions& out);

  // Populates a DeleteEntryRequestedOptions object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DeleteEntryRequestedOptions& out);

  // Creates a deep copy of DeleteEntryRequestedOptions.
  DeleteEntryRequestedOptions Clone() const;

  // Creates a DeleteEntryRequestedOptions object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<DeleteEntryRequestedOptions> FromValue(const base::Value::Dict& value);

  // Creates a DeleteEntryRequestedOptions object from a base::Value, or nullopt
  // on failure.
  static std::optional<DeleteEntryRequestedOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDeleteEntryRequestedOptions object.
  base::Value::Dict ToValue() const;

  // The identifier of the file system related to this operation.
  std::string file_system_id;

  // The unique identifier of this request.
  int request_id;

  // The path of the entry to be deleted.
  std::string entry_path;

  // Whether the operation is recursive (for directories only).
  bool recursive;

};

struct CreateFileRequestedOptions {
  CreateFileRequestedOptions();
  ~CreateFileRequestedOptions();
  CreateFileRequestedOptions(const CreateFileRequestedOptions&) = delete;
  CreateFileRequestedOptions& operator=(const CreateFileRequestedOptions&) = delete;
  CreateFileRequestedOptions(CreateFileRequestedOptions&& rhs) noexcept;
  CreateFileRequestedOptions& operator=(CreateFileRequestedOptions&& rhs) noexcept;

  // Populates a CreateFileRequestedOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CreateFileRequestedOptions& out);

  // Populates a CreateFileRequestedOptions object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CreateFileRequestedOptions& out);

  // Creates a deep copy of CreateFileRequestedOptions.
  CreateFileRequestedOptions Clone() const;

  // Creates a CreateFileRequestedOptions object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<CreateFileRequestedOptions> FromValue(const base::Value::Dict& value);

  // Creates a CreateFileRequestedOptions object from a base::Value, or nullopt
  // on failure.
  static std::optional<CreateFileRequestedOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCreateFileRequestedOptions object.
  base::Value::Dict ToValue() const;

  // The identifier of the file system related to this operation.
  std::string file_system_id;

  // The unique identifier of this request.
  int request_id;

  // The path of the file to be created.
  std::string file_path;

};

struct CopyEntryRequestedOptions {
  CopyEntryRequestedOptions();
  ~CopyEntryRequestedOptions();
  CopyEntryRequestedOptions(const CopyEntryRequestedOptions&) = delete;
  CopyEntryRequestedOptions& operator=(const CopyEntryRequestedOptions&) = delete;
  CopyEntryRequestedOptions(CopyEntryRequestedOptions&& rhs) noexcept;
  CopyEntryRequestedOptions& operator=(CopyEntryRequestedOptions&& rhs) noexcept;

  // Populates a CopyEntryRequestedOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CopyEntryRequestedOptions& out);

  // Populates a CopyEntryRequestedOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CopyEntryRequestedOptions& out);

  // Creates a deep copy of CopyEntryRequestedOptions.
  CopyEntryRequestedOptions Clone() const;

  // Creates a CopyEntryRequestedOptions object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<CopyEntryRequestedOptions> FromValue(const base::Value::Dict& value);

  // Creates a CopyEntryRequestedOptions object from a base::Value, or nullopt
  // on failure.
  static std::optional<CopyEntryRequestedOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCopyEntryRequestedOptions object.
  base::Value::Dict ToValue() const;

  // The identifier of the file system related to this operation.
  std::string file_system_id;

  // The unique identifier of this request.
  int request_id;

  // The source path of the entry to be copied.
  std::string source_path;

  // The destination path for the copy operation.
  std::string target_path;

};

struct MoveEntryRequestedOptions {
  MoveEntryRequestedOptions();
  ~MoveEntryRequestedOptions();
  MoveEntryRequestedOptions(const MoveEntryRequestedOptions&) = delete;
  MoveEntryRequestedOptions& operator=(const MoveEntryRequestedOptions&) = delete;
  MoveEntryRequestedOptions(MoveEntryRequestedOptions&& rhs) noexcept;
  MoveEntryRequestedOptions& operator=(MoveEntryRequestedOptions&& rhs) noexcept;

  // Populates a MoveEntryRequestedOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MoveEntryRequestedOptions& out);

  // Populates a MoveEntryRequestedOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, MoveEntryRequestedOptions& out);

  // Creates a deep copy of MoveEntryRequestedOptions.
  MoveEntryRequestedOptions Clone() const;

  // Creates a MoveEntryRequestedOptions object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<MoveEntryRequestedOptions> FromValue(const base::Value::Dict& value);

  // Creates a MoveEntryRequestedOptions object from a base::Value, or nullopt
  // on failure.
  static std::optional<MoveEntryRequestedOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMoveEntryRequestedOptions object.
  base::Value::Dict ToValue() const;

  // The identifier of the file system related to this operation.
  std::string file_system_id;

  // The unique identifier of this request.
  int request_id;

  // The source path of the entry to be moved into a new place.
  std::string source_path;

  // The destination path for the copy operation.
  std::string target_path;

};

struct TruncateRequestedOptions {
  TruncateRequestedOptions();
  ~TruncateRequestedOptions();
  TruncateRequestedOptions(const TruncateRequestedOptions&) = delete;
  TruncateRequestedOptions& operator=(const TruncateRequestedOptions&) = delete;
  TruncateRequestedOptions(TruncateRequestedOptions&& rhs) noexcept;
  TruncateRequestedOptions& operator=(TruncateRequestedOptions&& rhs) noexcept;

  // Populates a TruncateRequestedOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, TruncateRequestedOptions& out);

  // Populates a TruncateRequestedOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, TruncateRequestedOptions& out);

  // Creates a deep copy of TruncateRequestedOptions.
  TruncateRequestedOptions Clone() const;

  // Creates a TruncateRequestedOptions object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<TruncateRequestedOptions> FromValue(const base::Value::Dict& value);

  // Creates a TruncateRequestedOptions object from a base::Value, or nullopt on
  // failure.
  static std::optional<TruncateRequestedOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTruncateRequestedOptions object.
  base::Value::Dict ToValue() const;

  // The identifier of the file system related to this operation.
  std::string file_system_id;

  // The unique identifier of this request.
  int request_id;

  // The path of the file to be truncated.
  std::string file_path;

  // Number of bytes to be retained after the operation completes.
  double length;

};

struct WriteFileRequestedOptions {
  WriteFileRequestedOptions();
  ~WriteFileRequestedOptions();
  WriteFileRequestedOptions(const WriteFileRequestedOptions&) = delete;
  WriteFileRequestedOptions& operator=(const WriteFileRequestedOptions&) = delete;
  WriteFileRequestedOptions(WriteFileRequestedOptions&& rhs) noexcept;
  WriteFileRequestedOptions& operator=(WriteFileRequestedOptions&& rhs) noexcept;

  // Populates a WriteFileRequestedOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, WriteFileRequestedOptions& out);

  // Populates a WriteFileRequestedOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, WriteFileRequestedOptions& out);

  // Creates a deep copy of WriteFileRequestedOptions.
  WriteFileRequestedOptions Clone() const;

  // Creates a WriteFileRequestedOptions object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<WriteFileRequestedOptions> FromValue(const base::Value::Dict& value);

  // Creates a WriteFileRequestedOptions object from a base::Value, or nullopt
  // on failure.
  static std::optional<WriteFileRequestedOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisWriteFileRequestedOptions object.
  base::Value::Dict ToValue() const;

  // The identifier of the file system related to this operation.
  std::string file_system_id;

  // The unique identifier of this request.
  int request_id;

  // A request ID used to open the file.
  int open_request_id;

  // Position in the file (in bytes) to start writing the bytes from.
  double offset;

  // Buffer of bytes to be written to the file.
  std::vector<uint8_t> data;

};

struct AbortRequestedOptions {
  AbortRequestedOptions();
  ~AbortRequestedOptions();
  AbortRequestedOptions(const AbortRequestedOptions&) = delete;
  AbortRequestedOptions& operator=(const AbortRequestedOptions&) = delete;
  AbortRequestedOptions(AbortRequestedOptions&& rhs) noexcept;
  AbortRequestedOptions& operator=(AbortRequestedOptions&& rhs) noexcept;

  // Populates a AbortRequestedOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AbortRequestedOptions& out);

  // Populates a AbortRequestedOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AbortRequestedOptions& out);

  // Creates a deep copy of AbortRequestedOptions.
  AbortRequestedOptions Clone() const;

  // Creates a AbortRequestedOptions object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<AbortRequestedOptions> FromValue(const base::Value::Dict& value);

  // Creates a AbortRequestedOptions object from a base::Value, or nullopt on
  // failure.
  static std::optional<AbortRequestedOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAbortRequestedOptions object.
  base::Value::Dict ToValue() const;

  // The identifier of the file system related to this operation.
  std::string file_system_id;

  // The unique identifier of this request.
  int request_id;

  // An ID of the request to be aborted.
  int operation_request_id;

};

struct AddWatcherRequestedOptions {
  AddWatcherRequestedOptions();
  ~AddWatcherRequestedOptions();
  AddWatcherRequestedOptions(const AddWatcherRequestedOptions&) = delete;
  AddWatcherRequestedOptions& operator=(const AddWatcherRequestedOptions&) = delete;
  AddWatcherRequestedOptions(AddWatcherRequestedOptions&& rhs) noexcept;
  AddWatcherRequestedOptions& operator=(AddWatcherRequestedOptions&& rhs) noexcept;

  // Populates a AddWatcherRequestedOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AddWatcherRequestedOptions& out);

  // Populates a AddWatcherRequestedOptions object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AddWatcherRequestedOptions& out);

  // Creates a deep copy of AddWatcherRequestedOptions.
  AddWatcherRequestedOptions Clone() const;

  // Creates a AddWatcherRequestedOptions object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<AddWatcherRequestedOptions> FromValue(const base::Value::Dict& value);

  // Creates a AddWatcherRequestedOptions object from a base::Value, or nullopt
  // on failure.
  static std::optional<AddWatcherRequestedOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAddWatcherRequestedOptions object.
  base::Value::Dict ToValue() const;

  // The identifier of the file system related to this operation.
  std::string file_system_id;

  // The unique identifier of this request.
  int request_id;

  // The path of the entry to be observed.
  std::string entry_path;

  // Whether observing should include all child entries recursively. It can be
  // true for directories only.
  bool recursive;

};

struct RemoveWatcherRequestedOptions {
  RemoveWatcherRequestedOptions();
  ~RemoveWatcherRequestedOptions();
  RemoveWatcherRequestedOptions(const RemoveWatcherRequestedOptions&) = delete;
  RemoveWatcherRequestedOptions& operator=(const RemoveWatcherRequestedOptions&) = delete;
  RemoveWatcherRequestedOptions(RemoveWatcherRequestedOptions&& rhs) noexcept;
  RemoveWatcherRequestedOptions& operator=(RemoveWatcherRequestedOptions&& rhs) noexcept;

  // Populates a RemoveWatcherRequestedOptions object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RemoveWatcherRequestedOptions& out);

  // Populates a RemoveWatcherRequestedOptions object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RemoveWatcherRequestedOptions& out);

  // Creates a deep copy of RemoveWatcherRequestedOptions.
  RemoveWatcherRequestedOptions Clone() const;

  // Creates a RemoveWatcherRequestedOptions object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<RemoveWatcherRequestedOptions> FromValue(const base::Value::Dict& value);

  // Creates a RemoveWatcherRequestedOptions object from a base::Value, or
  // nullopt on failure.
  static std::optional<RemoveWatcherRequestedOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRemoveWatcherRequestedOptions object.
  base::Value::Dict ToValue() const;

  // The identifier of the file system related to this operation.
  std::string file_system_id;

  // The unique identifier of this request.
  int request_id;

  // The path of the watched entry.
  std::string entry_path;

  // Mode of the watcher.
  bool recursive;

};

struct Action {
  Action();
  ~Action();
  Action(const Action&) = delete;
  Action& operator=(const Action&) = delete;
  Action(Action&& rhs) noexcept;
  Action& operator=(Action&& rhs) noexcept;

  // Populates a Action object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Action& out);

  // Populates a Action object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Action& out);

  // Creates a deep copy of Action.
  Action Clone() const;

  // Creates a Action object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Action> FromValue(const base::Value::Dict& value);

  // Creates a Action object from a base::Value, or nullopt on failure.
  static std::optional<Action> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAction object.
  base::Value::Dict ToValue() const;

  // The identifier of the action. Any string or $(ref:CommonActionId) for common
  // actions.
  std::string id;

  // The title of the action. It may be ignored for common actions.
  std::optional<std::string> title;

};

struct ExecuteActionRequestedOptions {
  ExecuteActionRequestedOptions();
  ~ExecuteActionRequestedOptions();
  ExecuteActionRequestedOptions(const ExecuteActionRequestedOptions&) = delete;
  ExecuteActionRequestedOptions& operator=(const ExecuteActionRequestedOptions&) = delete;
  ExecuteActionRequestedOptions(ExecuteActionRequestedOptions&& rhs) noexcept;
  ExecuteActionRequestedOptions& operator=(ExecuteActionRequestedOptions&& rhs) noexcept;

  // Populates a ExecuteActionRequestedOptions object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ExecuteActionRequestedOptions& out);

  // Populates a ExecuteActionRequestedOptions object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ExecuteActionRequestedOptions& out);

  // Creates a deep copy of ExecuteActionRequestedOptions.
  ExecuteActionRequestedOptions Clone() const;

  // Creates a ExecuteActionRequestedOptions object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<ExecuteActionRequestedOptions> FromValue(const base::Value::Dict& value);

  // Creates a ExecuteActionRequestedOptions object from a base::Value, or
  // nullopt on failure.
  static std::optional<ExecuteActionRequestedOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisExecuteActionRequestedOptions object.
  base::Value::Dict ToValue() const;

  // The identifier of the file system related to this operation.
  std::string file_system_id;

  // The unique identifier of this request.
  int request_id;

  // The set of paths of the entries to be used for the action.
  std::vector<std::string> entry_paths;

  // The identifier of the action to be executed.
  std::string action_id;

};

struct Change {
  Change();
  ~Change();
  Change(const Change&) = delete;
  Change& operator=(const Change&) = delete;
  Change(Change&& rhs) noexcept;
  Change& operator=(Change&& rhs) noexcept;

  // Populates a Change object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Change& out);

  // Populates a Change object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Change& out);

  // Creates a deep copy of Change.
  Change Clone() const;

  // Creates a Change object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Change> FromValue(const base::Value::Dict& value);

  // Creates a Change object from a base::Value, or nullopt on failure.
  static std::optional<Change> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisChange object.
  base::Value::Dict ToValue() const;

  // The path of the changed entry.
  std::string entry_path;

  // The type of the change which happened to the entry.
  ChangeType change_type;

};

struct NotifyOptions {
  NotifyOptions();
  ~NotifyOptions();
  NotifyOptions(const NotifyOptions&) = delete;
  NotifyOptions& operator=(const NotifyOptions&) = delete;
  NotifyOptions(NotifyOptions&& rhs) noexcept;
  NotifyOptions& operator=(NotifyOptions&& rhs) noexcept;

  // Populates a NotifyOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NotifyOptions& out);

  // Populates a NotifyOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, NotifyOptions& out);

  // Creates a deep copy of NotifyOptions.
  NotifyOptions Clone() const;

  // Creates a NotifyOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<NotifyOptions> FromValue(const base::Value::Dict& value);

  // Creates a NotifyOptions object from a base::Value, or nullopt on failure.
  static std::optional<NotifyOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisNotifyOptions object.
  base::Value::Dict ToValue() const;

  // The identifier of the file system related to this change.
  std::string file_system_id;

  // The path of the observed entry.
  std::string observed_path;

  // Mode of the observed entry.
  bool recursive;

  // The type of the change which happened to the observed entry. If it is
  // DELETED, then the observed entry will be automatically removed from the list
  // of observed entries.
  ChangeType change_type;

  // List of changes to entries within the observed directory (including the entry
  // itself)
  std::optional<std::vector<Change>> changes;

  // Tag for the notification. Required if the file system was mounted with the
  // <code>supportsNotifyTag</code> option. Note, that this flag is necessary to
  // provide notifications about changes which changed even when the system was
  // shutdown.
  std::optional<std::string> tag;

};

struct ConfigureRequestedOptions {
  ConfigureRequestedOptions();
  ~ConfigureRequestedOptions();
  ConfigureRequestedOptions(const ConfigureRequestedOptions&) = delete;
  ConfigureRequestedOptions& operator=(const ConfigureRequestedOptions&) = delete;
  ConfigureRequestedOptions(ConfigureRequestedOptions&& rhs) noexcept;
  ConfigureRequestedOptions& operator=(ConfigureRequestedOptions&& rhs) noexcept;

  // Populates a ConfigureRequestedOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ConfigureRequestedOptions& out);

  // Populates a ConfigureRequestedOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ConfigureRequestedOptions& out);

  // Creates a deep copy of ConfigureRequestedOptions.
  ConfigureRequestedOptions Clone() const;

  // Creates a ConfigureRequestedOptions object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<ConfigureRequestedOptions> FromValue(const base::Value::Dict& value);

  // Creates a ConfigureRequestedOptions object from a base::Value, or nullopt
  // on failure.
  static std::optional<ConfigureRequestedOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisConfigureRequestedOptions object.
  base::Value::Dict ToValue() const;

  // The identifier of the file system to be configured.
  std::string file_system_id;

  // The unique identifier of this request.
  int request_id;

};


//
// Functions
//

namespace Mount {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  MountOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Mount

namespace Unmount {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  UnmountOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Unmount

namespace GetAll {

namespace Results {

base::Value::List Create(const std::vector<FileSystemInfo>& file_systems);
}  // namespace Results

}  // namespace GetAll

namespace Get {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string file_system_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const FileSystemInfo& file_system);
}  // namespace Results

}  // namespace Get

namespace Notify {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  NotifyOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Notify

//
// Events
//

namespace OnUnmountRequested {

extern const char kEventName[];  // "fileSystemProvider.onUnmountRequested"

base::Value::List Create(const UnmountRequestedOptions& options);
}  // namespace OnUnmountRequested

namespace OnGetMetadataRequested {

extern const char kEventName[];  // "fileSystemProvider.onGetMetadataRequested"

base::Value::List Create(const GetMetadataRequestedOptions& options);
}  // namespace OnGetMetadataRequested

namespace OnGetActionsRequested {

extern const char kEventName[];  // "fileSystemProvider.onGetActionsRequested"

base::Value::List Create(const GetActionsRequestedOptions& options);
}  // namespace OnGetActionsRequested

namespace OnReadDirectoryRequested {

extern const char kEventName[];  // "fileSystemProvider.onReadDirectoryRequested"

base::Value::List Create(const ReadDirectoryRequestedOptions& options);
}  // namespace OnReadDirectoryRequested

namespace OnOpenFileRequested {

extern const char kEventName[];  // "fileSystemProvider.onOpenFileRequested"

base::Value::List Create(const OpenFileRequestedOptions& options);
}  // namespace OnOpenFileRequested

namespace OnCloseFileRequested {

extern const char kEventName[];  // "fileSystemProvider.onCloseFileRequested"

base::Value::List Create(const CloseFileRequestedOptions& options);
}  // namespace OnCloseFileRequested

namespace OnReadFileRequested {

extern const char kEventName[];  // "fileSystemProvider.onReadFileRequested"

base::Value::List Create(const ReadFileRequestedOptions& options);
}  // namespace OnReadFileRequested

namespace OnCreateDirectoryRequested {

extern const char kEventName[];  // "fileSystemProvider.onCreateDirectoryRequested"

base::Value::List Create(const CreateDirectoryRequestedOptions& options);
}  // namespace OnCreateDirectoryRequested

namespace OnDeleteEntryRequested {

extern const char kEventName[];  // "fileSystemProvider.onDeleteEntryRequested"

base::Value::List Create(const DeleteEntryRequestedOptions& options);
}  // namespace OnDeleteEntryRequested

namespace OnCreateFileRequested {

extern const char kEventName[];  // "fileSystemProvider.onCreateFileRequested"

base::Value::List Create(const CreateFileRequestedOptions& options);
}  // namespace OnCreateFileRequested

namespace OnCopyEntryRequested {

extern const char kEventName[];  // "fileSystemProvider.onCopyEntryRequested"

base::Value::List Create(const CopyEntryRequestedOptions& options);
}  // namespace OnCopyEntryRequested

namespace OnMoveEntryRequested {

extern const char kEventName[];  // "fileSystemProvider.onMoveEntryRequested"

base::Value::List Create(const MoveEntryRequestedOptions& options);
}  // namespace OnMoveEntryRequested

namespace OnTruncateRequested {

extern const char kEventName[];  // "fileSystemProvider.onTruncateRequested"

base::Value::List Create(const TruncateRequestedOptions& options);
}  // namespace OnTruncateRequested

namespace OnWriteFileRequested {

extern const char kEventName[];  // "fileSystemProvider.onWriteFileRequested"

base::Value::List Create(const WriteFileRequestedOptions& options);
}  // namespace OnWriteFileRequested

namespace OnAbortRequested {

extern const char kEventName[];  // "fileSystemProvider.onAbortRequested"

base::Value::List Create(const AbortRequestedOptions& options);
}  // namespace OnAbortRequested

namespace OnConfigureRequested {

extern const char kEventName[];  // "fileSystemProvider.onConfigureRequested"

base::Value::List Create(const ConfigureRequestedOptions& options);
}  // namespace OnConfigureRequested

namespace OnMountRequested {

extern const char kEventName[];  // "fileSystemProvider.onMountRequested"

base::Value::List Create();
}  // namespace OnMountRequested

namespace OnAddWatcherRequested {

extern const char kEventName[];  // "fileSystemProvider.onAddWatcherRequested"

base::Value::List Create(const AddWatcherRequestedOptions& options);
}  // namespace OnAddWatcherRequested

namespace OnRemoveWatcherRequested {

extern const char kEventName[];  // "fileSystemProvider.onRemoveWatcherRequested"

base::Value::List Create(const RemoveWatcherRequestedOptions& options);
}  // namespace OnRemoveWatcherRequested

namespace OnExecuteActionRequested {

extern const char kEventName[];  // "fileSystemProvider.onExecuteActionRequested"

base::Value::List Create(const ExecuteActionRequestedOptions& options);
}  // namespace OnExecuteActionRequested

}  // namespace file_system_provider
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_FILE_SYSTEM_PROVIDER_H__
