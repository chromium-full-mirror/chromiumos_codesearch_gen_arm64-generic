// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/file_manager_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_FILE_MANAGER_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_FILE_MANAGER_PRIVATE_H__

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
namespace file_manager_private {

//
// Types
//

// Type of the mounted volume.
enum class VolumeType {
  kNone = 0,
  kDrive,
  kDownloads,
  kRemovable,
  kArchive,
  kProvided,
  kMtp,
  kMediaView,
  kCrostini,
  kAndroidFiles,
  kDocumentsProvider,
  kTesting,
  kSmb,
  kSystemInternal,
  kGuestOs,
  kMaxValue = kGuestOs,
};


const char* ToString(VolumeType as_enum);
VolumeType ParseVolumeType(base::StringPiece as_string);
std::u16string GetVolumeTypeParseError(base::StringPiece as_string);

// Device type. Available if this is removable volume.
enum class DeviceType {
  kNone = 0,
  kUsb,
  kSd,
  kOptical,
  kMobile,
  kUnknown,
  kMaxValue = kUnknown,
};


const char* ToString(DeviceType as_enum);
DeviceType ParseDeviceType(base::StringPiece as_string);
std::u16string GetDeviceTypeParseError(base::StringPiece as_string);

// List of device connection statuses.
enum class DeviceConnectionState {
  kNone = 0,
  kOffline,
  kOnline,
  kMaxValue = kOnline,
};


const char* ToString(DeviceConnectionState as_enum);
DeviceConnectionState ParseDeviceConnectionState(base::StringPiece as_string);
std::u16string GetDeviceConnectionStateParseError(base::StringPiece as_string);

// List of connection types of drive.
enum class DriveConnectionStateType {
  kNone = 0,
  kOffline,
  kMetered,
  kOnline,
  kMaxValue = kOnline,
};


const char* ToString(DriveConnectionStateType as_enum);
DriveConnectionStateType ParseDriveConnectionStateType(base::StringPiece as_string);
std::u16string GetDriveConnectionStateTypeParseError(base::StringPiece as_string);

// List of reasons of DriveConnectionStateType.
enum class DriveOfflineReason {
  kNone = 0,
  kNotReady,
  kNoNetwork,
  kNoService,
  kMaxValue = kNoService,
};


const char* ToString(DriveOfflineReason as_enum);
DriveOfflineReason ParseDriveOfflineReason(base::StringPiece as_string);
std::u16string GetDriveOfflineReasonParseError(base::StringPiece as_string);

// Additional information of the context the volume was mounted.
enum class MountContext {
  kNone = 0,
  kUser,
  kAuto,
  kMaxValue = kAuto,
};


const char* ToString(MountContext as_enum);
MountContext ParseMountContext(base::StringPiece as_string);
std::u16string GetMountContextParseError(base::StringPiece as_string);

// Is the event raised for mounting or unmounting.
enum class MountCompletedEventType {
  kNone = 0,
  kMount,
  kUnmount,
  kMaxValue = kUnmount,
};


const char* ToString(MountCompletedEventType as_enum);
MountCompletedEventType ParseMountCompletedEventType(base::StringPiece as_string);
std::u16string GetMountCompletedEventTypeParseError(base::StringPiece as_string);

// Event type that tells listeners if mount was successful or an error occurred.
// It also specifies the error.
enum class MountError {
  kNone = 0,
  kSuccess,
  kInProgress,
  kUnknownError,
  kInternalError,
  kInvalidArgument,
  kInvalidPath,
  kPathAlreadyMounted,
  kPathNotMounted,
  kDirectoryCreationFailed,
  kInvalidMountOptions,
  kInsufficientPermissions,
  kMountProgramNotFound,
  kMountProgramFailed,
  kInvalidDevicePath,
  kUnknownFilesystem,
  kUnsupportedFilesystem,
  kNeedPassword,
  kCancelled,
  kBusy,
  kMaxValue = kBusy,
};


const char* ToString(MountError as_enum);
MountError ParseMountError(base::StringPiece as_string);
std::u16string GetMountErrorParseError(base::StringPiece as_string);

// Filesystem to format to.
enum class FormatFileSystemType {
  kNone = 0,
  kVfat,
  kExfat,
  kNtfs,
  kMaxValue = kNtfs,
};


const char* ToString(FormatFileSystemType as_enum);
FormatFileSystemType ParseFormatFileSystemType(base::StringPiece as_string);
std::u16string GetFormatFileSystemTypeParseError(base::StringPiece as_string);

// File transfer progress state.
enum class TransferState {
  kNone = 0,
  kInProgress,
  kQueued,
  kCompleted,
  kFailed,
  kMaxValue = kFailed,
};


const char* ToString(TransferState as_enum);
TransferState ParseTransferState(base::StringPiece as_string);
std::u16string GetTransferStateParseError(base::StringPiece as_string);

// The response when starting installing a Linux package.
enum class InstallLinuxPackageStatus {
  kNone = 0,
  kStarted,
  kFailed,
  kInstallAlreadyActive,
  kMaxValue = kInstallAlreadyActive,
};


const char* ToString(InstallLinuxPackageStatus as_enum);
InstallLinuxPackageStatus ParseInstallLinuxPackageStatus(base::StringPiece as_string);
std::u16string GetInstallLinuxPackageStatusParseError(base::StringPiece as_string);

// Specifies type of event that is raised.
enum class FileWatchEventType {
  kNone = 0,
  kChanged,
  kError,
  kMaxValue = kError,
};


const char* ToString(FileWatchEventType as_enum);
FileWatchEventType ParseFileWatchEventType(base::StringPiece as_string);
std::u16string GetFileWatchEventTypeParseError(base::StringPiece as_string);

// Specifies type of change in file watch event.
enum class ChangeType {
  kNone = 0,
  kAddOrUpdate,
  kDelete,
  kMaxValue = kDelete,
};


const char* ToString(ChangeType as_enum);
ChangeType ParseChangeType(base::StringPiece as_string);
std::u16string GetChangeTypeParseError(base::StringPiece as_string);

// The type of entry that is needed. Default to ALL.
enum class SearchType {
  kNone = 0,
  kExcludeDirectories,
  kSharedWithMe,
  kOffline,
  kAll,
  kMaxValue = kAll,
};


const char* ToString(SearchType as_enum);
SearchType ParseSearchType(base::StringPiece as_string);
std::u16string GetSearchTypeParseError(base::StringPiece as_string);

// Zooming mode.
enum class ZoomOperationType {
  kNone = 0,
  kIn,
  kOut,
  kReset,
  kMaxValue = kReset,
};


const char* ToString(ZoomOperationType as_enum);
ZoomOperationType ParseZoomOperationType(base::StringPiece as_string);
std::u16string GetZoomOperationTypeParseError(base::StringPiece as_string);

// Specifies how to open inspector.
enum class InspectionType {
  kNone = 0,
  kNormal,
  kConsole,
  kElement,
  kBackground,
  kMaxValue = kBackground,
};


const char* ToString(InspectionType as_enum);
InspectionType ParseInspectionType(base::StringPiece as_string);
std::u16string GetInspectionTypeParseError(base::StringPiece as_string);

// Device event type.
enum class DeviceEventType {
  kNone = 0,
  kDisabled,
  kRemoved,
  kHardUnplugged,
  kFormatStart,
  kFormatSuccess,
  kFormatFail,
  kRenameStart,
  kRenameSuccess,
  kRenameFail,
  kPartitionStart,
  kPartitionSuccess,
  kPartitionFail,
  kMaxValue = kPartitionFail,
};


const char* ToString(DeviceEventType as_enum);
DeviceEventType ParseDeviceEventType(base::StringPiece as_string);
std::u16string GetDeviceEventTypeParseError(base::StringPiece as_string);

// Drive sync error type. Keep it synced with DriveError::Type in drivefs.mojom.
enum class DriveSyncErrorType {
  kNone = 0,
  kDeleteWithoutPermission,
  kServiceUnavailable,
  kNoServerSpace,
  kNoServerSpaceOrganization,
  kNoLocalSpace,
  kNoSharedDriveSpace,
  kMisc,
  kMaxValue = kMisc,
};


const char* ToString(DriveSyncErrorType as_enum);
DriveSyncErrorType ParseDriveSyncErrorType(base::StringPiece as_string);
std::u16string GetDriveSyncErrorTypeParseError(base::StringPiece as_string);

// Drive confirm dialog type. Keep it synced with DialogReason::Type in
// drivefs.mojom.
enum class DriveConfirmDialogType {
  kNone = 0,
  kEnableDocsOffline,
  kMaxValue = kEnableDocsOffline,
};


const char* ToString(DriveConfirmDialogType as_enum);
DriveConfirmDialogType ParseDriveConfirmDialogType(base::StringPiece as_string);
std::u16string GetDriveConfirmDialogTypeParseError(base::StringPiece as_string);

// Possible result of dialog displayed as a result of the onDriveConfirmDialog
// event. Sent back to the browser via notifyDriveDialogResult().
enum class DriveDialogResult {
  kNone = 0,
  kNotDisplayed,
  kAccept,
  kReject,
  kDismiss,
  kMaxValue = kDismiss,
};


const char* ToString(DriveDialogResult as_enum);
DriveDialogResult ParseDriveDialogResult(base::StringPiece as_string);
std::u16string GetDriveDialogResultParseError(base::StringPiece as_string);

// Result of task execution. If changing, update the strings used in
// ui/file_manager/file_manager/foreground/js/file_tasks.js
enum class TaskResult {
  kNone = 0,
  kOpened,
  kMessageSent,
  kFailed,
  kEmpty,
  kFailedPluginVmDirectoryNotShared,
  kMaxValue = kFailedPluginVmDirectoryNotShared,
};


const char* ToString(TaskResult as_enum);
TaskResult ParseTaskResult(base::StringPiece as_string);
std::u16string GetTaskResultParseError(base::StringPiece as_string);

// Drive share type.
enum class DriveShareType {
  kNone = 0,
  kCanEdit,
  kCanComment,
  kCanView,
  kMaxValue = kCanView,
};


const char* ToString(DriveShareType as_enum);
DriveShareType ParseDriveShareType(base::StringPiece as_string);
std::u16string GetDriveShareTypeParseError(base::StringPiece as_string);

// Names of properties for getEntryProperties().
enum class EntryPropertyName {
  kNone = 0,
  kSize,
  kModificationTime,
  kModificationByMeTime,
  kThumbnailUrl,
  kCroppedThumbnailUrl,
  kImageWidth,
  kImageHeight,
  kImageRotation,
  kPinned,
  kPresent,
  kHosted,
  kAvailableOffline,
  kAvailableWhenMetered,
  kDirty,
  kCustomIconUrl,
  kContentMimeType,
  kSharedWithMe,
  kShared,
  kStarred,
  kExternalFileUrl,
  kAlternateUrl,
  kShareUrl,
  kCanCopy,
  kCanDelete,
  kCanRename,
  kCanAddChildren,
  kCanShare,
  kCanPin,
  kIsMachineRoot,
  kIsExternalMedia,
  kIsArbitrarySyncFolder,
  kSyncStatus,
  kProgress,
  kShortcut,
  kSyncCompletedTime,
  kMaxValue = kSyncCompletedTime,
};


const char* ToString(EntryPropertyName as_enum);
EntryPropertyName ParseEntryPropertyName(base::StringPiece as_string);
std::u16string GetEntryPropertyNameParseError(base::StringPiece as_string);

// Source of the volume data.
enum class Source {
  kNone = 0,
  kFile,
  kDevice,
  kNetwork,
  kSystem,
  kMaxValue = kSystem,
};


const char* ToString(Source as_enum);
Source ParseSource(base::StringPiece as_string);
std::u16string GetSourceParseError(base::StringPiece as_string);

// Recent file sources allowed in getRecentFiles().
enum class SourceRestriction {
  kNone = 0,
  kAnySource,
  kNativeSource,
  kMaxValue = kNativeSource,
};


const char* ToString(SourceRestriction as_enum);
SourceRestriction ParseSourceRestriction(base::StringPiece as_string);
std::u16string GetSourceRestrictionParseError(base::StringPiece as_string);

// File categories to filter results from getRecentFiles().
enum class FileCategory {
  kNone = 0,
  kAll,
  kAudio,
  kImage,
  kVideo,
  kDocument,
  kMaxValue = kDocument,
};


const char* ToString(FileCategory as_enum);
FileCategory ParseFileCategory(base::StringPiece as_string);
std::u16string GetFileCategoryParseError(base::StringPiece as_string);

enum class CrostiniEventType {
  kNone = 0,
  kEnable,
  kDisable,
  kShare,
  kUnshare,
  kDropFailedPluginVmDirectoryNotShared,
  kMaxValue = kDropFailedPluginVmDirectoryNotShared,
};


const char* ToString(CrostiniEventType as_enum);
CrostiniEventType ParseCrostiniEventType(base::StringPiece as_string);
std::u16string GetCrostiniEventTypeParseError(base::StringPiece as_string);

enum class ProviderSource {
  kNone = 0,
  kFile,
  kDevice,
  kNetwork,
  kMaxValue = kNetwork,
};


const char* ToString(ProviderSource as_enum);
ProviderSource ParseProviderSource(base::StringPiece as_string);
std::u16string GetProviderSourceParseError(base::StringPiece as_string);

enum class SharesheetLaunchSource {
  kNone = 0,
  kContextMenu,
  kSharesheetButton,
  kUnknown,
  kMaxValue = kUnknown,
};


const char* ToString(SharesheetLaunchSource as_enum);
SharesheetLaunchSource ParseSharesheetLaunchSource(base::StringPiece as_string);
std::u16string GetSharesheetLaunchSourceParseError(base::StringPiece as_string);

enum class IoTaskState {
  kNone = 0,
  kQueued,
  kScanning,
  kInProgress,
  kPaused,
  kSuccess,
  kError,
  kNeedPassword,
  kCancelled,
  kMaxValue = kCancelled,
};


const char* ToString(IoTaskState as_enum);
IoTaskState ParseIoTaskState(base::StringPiece as_string);
std::u16string GetIoTaskStateParseError(base::StringPiece as_string);

enum class IoTaskType {
  kNone = 0,
  kCopy,
  kDelete,
  kEmptyTrash,
  kExtract,
  kMove,
  kRestore,
  kRestoreToDestination,
  kTrash,
  kZip,
  kMaxValue = kZip,
};


const char* ToString(IoTaskType as_enum);
IoTaskType ParseIoTaskType(base::StringPiece as_string);
std::u16string GetIoTaskTypeParseError(base::StringPiece as_string);

enum class PolicyErrorType {
  kNone = 0,
  kDlp,
  kEnterpriseConnectors,
  kDlpWarningTimeout,
  kMaxValue = kDlpWarningTimeout,
};


const char* ToString(PolicyErrorType as_enum);
PolicyErrorType ParsePolicyErrorType(base::StringPiece as_string);
std::u16string GetPolicyErrorTypeParseError(base::StringPiece as_string);

enum class PolicyDialogType {
  kNone = 0,
  kWarning,
  kError,
  kMaxValue = kError,
};


const char* ToString(PolicyDialogType as_enum);
PolicyDialogType ParsePolicyDialogType(base::StringPiece as_string);
std::u16string GetPolicyDialogTypeParseError(base::StringPiece as_string);

enum class RecentDateBucket {
  kNone = 0,
  kToday,
  kYesterday,
  kEarlierThisWeek,
  kEarlierThisMonth,
  kEarlierThisYear,
  kOlder,
  kMaxValue = kOlder,
};


const char* ToString(RecentDateBucket as_enum);
RecentDateBucket ParseRecentDateBucket(base::StringPiece as_string);
std::u16string GetRecentDateBucketParseError(base::StringPiece as_string);

enum class VmType {
  kNone = 0,
  kTermina,
  kPluginVm,
  kBorealis,
  kBruschetta,
  kArcvm,
  kMaxValue = kArcvm,
};


const char* ToString(VmType as_enum);
VmType ParseVmType(base::StringPiece as_string);
std::u16string GetVmTypeParseError(base::StringPiece as_string);

enum class UserType {
  kNone = 0,
  kUnmanaged,
  kOrganization,
  kMaxValue = kOrganization,
};


const char* ToString(UserType as_enum);
UserType ParseUserType(base::StringPiece as_string);
std::u16string GetUserTypeParseError(base::StringPiece as_string);

enum class DlpLevel {
  kNone = 0,
  kReport,
  kWarn,
  kBlock,
  kAllow,
  kMaxValue = kAllow,
};


const char* ToString(DlpLevel as_enum);
DlpLevel ParseDlpLevel(base::StringPiece as_string);
std::u16string GetDlpLevelParseError(base::StringPiece as_string);

enum class SyncStatus {
  kNone = 0,
  kNotFound,
  kQueued,
  kInProgress,
  kCompleted,
  kError,
  kMaxValue = kError,
};


const char* ToString(SyncStatus as_enum);
SyncStatus ParseSyncStatus(base::StringPiece as_string);
std::u16string GetSyncStatusParseError(base::StringPiece as_string);

// Describes how admin policy affects the default task in a ResultingTasks. See
// chrome/browser/ash/file_manager/file_tasks.h for details.
enum class PolicyDefaultHandlerStatus {
  kNone = 0,
  kDefaultHandlerAssignedByPolicy,
  kIncorrectAssignment,
  kMaxValue = kIncorrectAssignment,
};


const char* ToString(PolicyDefaultHandlerStatus as_enum);
PolicyDefaultHandlerStatus ParsePolicyDefaultHandlerStatus(base::StringPiece as_string);
std::u16string GetPolicyDefaultHandlerStatusParseError(base::StringPiece as_string);

// Describes the stage the bulk pinning manager is in. This enum should be kept
// in sync with chromeos/ash/components/drivefs/mojom/pin_manager_types.mojom.
enum class BulkPinStage {
  kNone = 0,
  kStopped,
  kPausedOffline,
  kPausedBatterySaver,
  kGettingFreeSpace,
  kListingFiles,
  kSyncing,
  kSuccess,
  kNotEnoughSpace,
  kCannotGetFreeSpace,
  kCannotListFiles,
  kCannotEnableDocsOffline,
  kMaxValue = kCannotEnableDocsOffline,
};


const char* ToString(BulkPinStage as_enum);
BulkPinStage ParseBulkPinStage(base::StringPiece as_string);
std::u16string GetBulkPinStageParseError(base::StringPiece as_string);

struct FileTaskDescriptor {
  FileTaskDescriptor();
  ~FileTaskDescriptor();
  FileTaskDescriptor(const FileTaskDescriptor&) = delete;
  FileTaskDescriptor& operator=(const FileTaskDescriptor&) = delete;
  FileTaskDescriptor(FileTaskDescriptor&& rhs) noexcept;
  FileTaskDescriptor& operator=(FileTaskDescriptor&& rhs) noexcept;

  // Populates a FileTaskDescriptor object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, FileTaskDescriptor& out);

  // Populates a FileTaskDescriptor object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, FileTaskDescriptor& out);

  // Creates a deep copy of FileTaskDescriptor.
  FileTaskDescriptor Clone() const;

  // Creates a FileTaskDescriptor object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<FileTaskDescriptor> FromValue(const base::Value::Dict& value);

  // Creates a FileTaskDescriptor object from a base::Value, or nullopt on
  // failure.
  static std::optional<FileTaskDescriptor> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisFileTaskDescriptor object.
  base::Value::Dict ToValue() const;

  std::string app_id;

  std::string task_type;

  std::string action_id;

};

struct FileTask {
  FileTask();
  ~FileTask();
  FileTask(const FileTask&) = delete;
  FileTask& operator=(const FileTask&) = delete;
  FileTask(FileTask&& rhs) noexcept;
  FileTask& operator=(FileTask&& rhs) noexcept;

  // Populates a FileTask object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, FileTask& out);

  // Populates a FileTask object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, FileTask& out);

  // Creates a deep copy of FileTask.
  FileTask Clone() const;

  // Creates a FileTask object from a base::Value::Dict, or nullopt on failure.
  static std::optional<FileTask> FromValue(const base::Value::Dict& value);

  // Creates a FileTask object from a base::Value, or nullopt on failure.
  static std::optional<FileTask> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisFileTask object.
  base::Value::Dict ToValue() const;

  // Unique identifier for the task.
  FileTaskDescriptor descriptor;

  // Task title (ex. App name).
  std::string title;

  // Task icon url (from chrome://extension-icon/...)
  std::optional<std::string> icon_url;

  // True if this task is a default task for the selected files.
  std::optional<bool> is_default;

  // True if this task is from generic file handler. Generic file handler is a
  // file handler which handles any type of files (e.g. extensions: ["*"], types:
  // ["*/*"]). Partial wild card (e.g. types: ["image/*"]) is not generic file
  // handler.
  std::optional<bool> is_generic_file_handler;

  // True if this is task is blocked by Data Leak Prevention (DLP).
  std::optional<bool> is_dlp_blocked;

};

struct ResultingTasks {
  ResultingTasks();
  ~ResultingTasks();
  ResultingTasks(const ResultingTasks&) = delete;
  ResultingTasks& operator=(const ResultingTasks&) = delete;
  ResultingTasks(ResultingTasks&& rhs) noexcept;
  ResultingTasks& operator=(ResultingTasks&& rhs) noexcept;

  // Populates a ResultingTasks object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ResultingTasks& out);

  // Populates a ResultingTasks object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ResultingTasks& out);

  // Creates a deep copy of ResultingTasks.
  ResultingTasks Clone() const;

  // Creates a ResultingTasks object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ResultingTasks> FromValue(const base::Value::Dict& value);

  // Creates a ResultingTasks object from a base::Value, or nullopt on failure.
  static std::optional<ResultingTasks> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisResultingTasks object.
  base::Value::Dict ToValue() const;

  std::vector<FileTask> tasks;

  // Note that this field is non-null if and only if at least one entry has been
  // affected by policy.
  PolicyDefaultHandlerStatus policy_default_handler_status;

};

struct EntryProperties {
  EntryProperties();
  ~EntryProperties();
  EntryProperties(const EntryProperties&) = delete;
  EntryProperties& operator=(const EntryProperties&) = delete;
  EntryProperties(EntryProperties&& rhs) noexcept;
  EntryProperties& operator=(EntryProperties&& rhs) noexcept;

  // Populates a EntryProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EntryProperties& out);

  // Populates a EntryProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, EntryProperties& out);

  // Creates a deep copy of EntryProperties.
  EntryProperties Clone() const;

  // Creates a EntryProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<EntryProperties> FromValue(const base::Value::Dict& value);

  // Creates a EntryProperties object from a base::Value, or nullopt on failure.
  static std::optional<EntryProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisEntryProperties object.
  base::Value::Dict ToValue() const;

  // Size of this file.
  std::optional<double> size;

  // Timestamp of entry update time, in milliseconds past the epoch.
  std::optional<double> modification_time;

  // Timestamp of entry update time by me, in milliseconds past the epoch.
  std::optional<double> modification_by_me_time;

  // Date bucket calculated by |modificationTime| or |modificationByMeTime|.
  RecentDateBucket recent_date_bucket;

  // URL to the Drive thumbnail image for this file.
  std::optional<std::string> thumbnail_url;

  // URL to the Drive cropped thumbnail image for this file.
  std::optional<std::string> cropped_thumbnail_url;

  // Width, if the entry is an image.
  std::optional<int> image_width;

  // Height, if the entry is an image.
  std::optional<int> image_height;

  // Rotation in clockwise degrees, if the entry is an image.
  std::optional<int> image_rotation;

  // True if the file is pinned in cache.
  std::optional<bool> pinned;

  // True if the file is present in cache.
  std::optional<bool> present;

  // True if the file is hosted on a server instead of local.
  std::optional<bool> hosted;

  // True if the file is available offline.
  std::optional<bool> available_offline;

  // True if the file is available on metered connection.
  std::optional<bool> available_when_metered;

  // True if the file has local change (has not been fully synced to the cloud).
  std::optional<bool> dirty;

  // URL to the custom icon for this file.
  std::optional<std::string> custom_icon_url;

  // Drive MIME type for this file.
  std::optional<std::string> content_mime_type;

  // True if the entry is labeled as shared-with-me.
  std::optional<bool> shared_with_me;

  // True if the entry is labeled as shared (either from me to others or to me by
  // others.)
  std::optional<bool> shared;

  // True if the entry is starred by the user.
  std::optional<bool> starred;

  // externalfile:// URL to open the file in browser.
  std::optional<std::string> external_file_url;

  // https:// URL to open the file or folder in the Drive website.
  std::optional<std::string> alternate_url;

  // https:// URL to open the file or folder in the Drive website with the sharing
  // dialog open.
  std::optional<std::string> share_url;

  // True if the entry can be copied by the user.
  std::optional<bool> can_copy;

  // True if the entry can be deleted by the user.
  std::optional<bool> can_delete;

  // True if the entry can be renamed by the user.
  std::optional<bool> can_rename;

  // True if the entry can have children added to it by the user (directories
  // only).
  std::optional<bool> can_add_children;

  // True if the entry can be shared by the user.
  std::optional<bool> can_share;

  // True if the entry can be pinned by the user.
  std::optional<bool> can_pin;

  // True if the entry is a machine root for backup and sync.
  std::optional<bool> is_machine_root;

  // True if the entry is a external media folder, that contains one time only
  // uploads for USB devices, SD cards etc.
  std::optional<bool> is_external_media;

  // True if the entry is an arbitrary sync folder.
  std::optional<bool> is_arbitrary_sync_folder;

  // Sync status for files tracked by different cloud filesystem providers.
  SyncStatus sync_status;

  // Progress representing some ongoing operation with the file. E.g., pasting,
  // syncing. Note: currently, this is exclusively being used for Drive syncing.
  std::optional<double> progress;

  // Time in milliseconds since the epoch when the file last received a
  // "completed" sync status.
  std::optional<double> sync_completed_time;

  // True if the entry is a shortcut.
  std::optional<bool> shortcut;

};

struct MountPointSizeStats {
  MountPointSizeStats();
  ~MountPointSizeStats();
  MountPointSizeStats(const MountPointSizeStats&) = delete;
  MountPointSizeStats& operator=(const MountPointSizeStats&) = delete;
  MountPointSizeStats(MountPointSizeStats&& rhs) noexcept;
  MountPointSizeStats& operator=(MountPointSizeStats&& rhs) noexcept;

  // Populates a MountPointSizeStats object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MountPointSizeStats& out);

  // Populates a MountPointSizeStats object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, MountPointSizeStats& out);

  // Creates a deep copy of MountPointSizeStats.
  MountPointSizeStats Clone() const;

  // Creates a MountPointSizeStats object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<MountPointSizeStats> FromValue(const base::Value::Dict& value);

  // Creates a MountPointSizeStats object from a base::Value, or nullopt on
  // failure.
  static std::optional<MountPointSizeStats> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMountPointSizeStats object.
  base::Value::Dict ToValue() const;

  // Approximate total available size on the mount point.
  double total_size;

  // Approximate remaining available size on the mount point.
  double remaining_size;

};

struct SearchDriveResponse {
  SearchDriveResponse();
  ~SearchDriveResponse();
  SearchDriveResponse(const SearchDriveResponse&) = delete;
  SearchDriveResponse& operator=(const SearchDriveResponse&) = delete;
  SearchDriveResponse(SearchDriveResponse&& rhs) noexcept;
  SearchDriveResponse& operator=(SearchDriveResponse&& rhs) noexcept;

  // Populates a SearchDriveResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SearchDriveResponse& out);

  // Populates a SearchDriveResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SearchDriveResponse& out);

  // Creates a deep copy of SearchDriveResponse.
  SearchDriveResponse Clone() const;

  // Creates a SearchDriveResponse object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<SearchDriveResponse> FromValue(const base::Value::Dict& value);

  // Creates a SearchDriveResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<SearchDriveResponse> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSearchDriveResponse object.
  base::Value::Dict ToValue() const;

  struct EntriesType {
    EntriesType();
    ~EntriesType();
    EntriesType(const EntriesType&) = delete;
    EntriesType& operator=(const EntriesType&) = delete;
    EntriesType(EntriesType&& rhs) noexcept;
    EntriesType& operator=(EntriesType&& rhs) noexcept;

    // Populates a EntriesType object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, EntriesType& out);

    // Populates a EntriesType object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, EntriesType& out);

    // Creates a deep copy of EntriesType.
    EntriesType Clone() const;

    // Creates a EntriesType object from a base::Value::Dict, or nullopt on
    // failure.
    static std::optional<EntriesType> FromValue(const base::Value::Dict& value);

    // Creates a EntriesType object from a base::Value, or nullopt on failure.
    static std::optional<EntriesType> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisEntriesType object.
    base::Value::Dict ToValue() const;

    base::Value::Dict additional_properties;
  };



  // Search results.
  std::vector<EntriesType> entries;

  // ID of the feed that contains next chunk of the search result. Should be sent
  // to the next searchDrive request to perform incremental search.
  std::string next_feed;

};

struct DriveQuotaMetadata {
  DriveQuotaMetadata();
  ~DriveQuotaMetadata();
  DriveQuotaMetadata(const DriveQuotaMetadata&) = delete;
  DriveQuotaMetadata& operator=(const DriveQuotaMetadata&) = delete;
  DriveQuotaMetadata(DriveQuotaMetadata&& rhs) noexcept;
  DriveQuotaMetadata& operator=(DriveQuotaMetadata&& rhs) noexcept;

  // Populates a DriveQuotaMetadata object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DriveQuotaMetadata& out);

  // Populates a DriveQuotaMetadata object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DriveQuotaMetadata& out);

  // Creates a deep copy of DriveQuotaMetadata.
  DriveQuotaMetadata Clone() const;

  // Creates a DriveQuotaMetadata object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<DriveQuotaMetadata> FromValue(const base::Value::Dict& value);

  // Creates a DriveQuotaMetadata object from a base::Value, or nullopt on
  // failure.
  static std::optional<DriveQuotaMetadata> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDriveQuotaMetadata object.
  base::Value::Dict ToValue() const;

  UserType user_type;

  // How much space the individual user, or shared drive has used.
  double used_bytes;

  // The individual user, or shared drive limit. -1 means infinite.
  double total_bytes;

  // The following two fields only have meaning if user_type is kOrganization.
  // Whether the organization has exceeded its storage limit.
  bool organization_limit_exceeded;

  // Name of the organization the user belongs to.
  std::string organization_name;

};

struct ProfileInfo {
  ProfileInfo();
  ~ProfileInfo();
  ProfileInfo(const ProfileInfo&) = delete;
  ProfileInfo& operator=(const ProfileInfo&) = delete;
  ProfileInfo(ProfileInfo&& rhs) noexcept;
  ProfileInfo& operator=(ProfileInfo&& rhs) noexcept;

  // Populates a ProfileInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ProfileInfo& out);

  // Populates a ProfileInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ProfileInfo& out);

  // Creates a deep copy of ProfileInfo.
  ProfileInfo Clone() const;

  // Creates a ProfileInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ProfileInfo> FromValue(const base::Value::Dict& value);

  // Creates a ProfileInfo object from a base::Value, or nullopt on failure.
  static std::optional<ProfileInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisProfileInfo object.
  base::Value::Dict ToValue() const;

  // Profile ID. This is currently e-mail address of the profile.
  std::string profile_id;

  // The name of the profile for display purpose.
  std::string display_name;

  // True if the profile is the one running the current file manager instance.
  // TODO(hirono): Remove the property because of the design change of
  // multi-profile suuport.
  bool is_current_profile;

};

struct ProfilesResponse {
  ProfilesResponse();
  ~ProfilesResponse();
  ProfilesResponse(const ProfilesResponse&) = delete;
  ProfilesResponse& operator=(const ProfilesResponse&) = delete;
  ProfilesResponse(ProfilesResponse&& rhs) noexcept;
  ProfilesResponse& operator=(ProfilesResponse&& rhs) noexcept;

  // Populates a ProfilesResponse object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ProfilesResponse& out);

  // Populates a ProfilesResponse object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ProfilesResponse& out);

  // Creates a deep copy of ProfilesResponse.
  ProfilesResponse Clone() const;

  // Creates a ProfilesResponse object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ProfilesResponse> FromValue(const base::Value::Dict& value);

  // Creates a ProfilesResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<ProfilesResponse> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisProfilesResponse object.
  base::Value::Dict ToValue() const;

  // List of profile information.
  std::vector<ProfileInfo> profiles;

  // ID of the profile that runs the application instance.
  std::string current_profile_id;

  // ID of the profile that shows the application window.
  std::string displayed_profile_id;

};

struct IconSet {
  IconSet();
  ~IconSet();
  IconSet(const IconSet&) = delete;
  IconSet& operator=(const IconSet&) = delete;
  IconSet(IconSet&& rhs) noexcept;
  IconSet& operator=(IconSet&& rhs) noexcept;

  // Populates a IconSet object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, IconSet& out);

  // Populates a IconSet object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, IconSet& out);

  // Creates a deep copy of IconSet.
  IconSet Clone() const;

  // Creates a IconSet object from a base::Value::Dict, or nullopt on failure.
  static std::optional<IconSet> FromValue(const base::Value::Dict& value);

  // Creates a IconSet object from a base::Value, or nullopt on failure.
  static std::optional<IconSet> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisIconSet object.
  base::Value::Dict ToValue() const;

  std::optional<std::string> icon16x16_url;

  std::optional<std::string> icon32x32_url;

};

struct VolumeMetadata {
  VolumeMetadata();
  ~VolumeMetadata();
  VolumeMetadata(const VolumeMetadata&) = delete;
  VolumeMetadata& operator=(const VolumeMetadata&) = delete;
  VolumeMetadata(VolumeMetadata&& rhs) noexcept;
  VolumeMetadata& operator=(VolumeMetadata&& rhs) noexcept;

  // Populates a VolumeMetadata object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, VolumeMetadata& out);

  // Populates a VolumeMetadata object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, VolumeMetadata& out);

  // Creates a deep copy of VolumeMetadata.
  VolumeMetadata Clone() const;

  // Creates a VolumeMetadata object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<VolumeMetadata> FromValue(const base::Value::Dict& value);

  // Creates a VolumeMetadata object from a base::Value, or nullopt on failure.
  static std::optional<VolumeMetadata> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisVolumeMetadata object.
  base::Value::Dict ToValue() const;

  // ID of the disk volume.
  std::string volume_id;

  // Id the provided file system (for provided file systems).
  std::optional<std::string> file_system_id;

  // ID of the provider, if the volume is backed by FSP.
  std::optional<std::string> provider_id;

  // Source of the volume's data.
  Source source;

  // Label of the volume (if available).
  std::optional<std::string> volume_label;

  // Description of the profile where the volume belongs. TODO(hirono): Remove the
  // property because of the design change of multi-profile support.
  ProfileInfo profile;

  // The path to the mounted device, archive file or network resource.
  std::optional<std::string> source_path;

  // Type of the mounted volume.
  VolumeType volume_type;

  // Device type. Available if this is removable volume.
  DeviceType device_type;

  // Path to identify the device. This is consistent with DeviceEvent's
  // devicePath.
  std::optional<std::string> device_path;

  // Whether the device is parent or not (i.e. sdb rather than sdb1).
  std::optional<bool> is_parent_device;

  // Flag that specifies if volume is mounted in read-only mode.
  bool is_read_only;

  // Flag that specifies if the device is write-protected. Valid only for the
  // volumes of removable device partitions.
  bool is_read_only_removable_device;

  // Flag that specifies whether the volume contains media.
  bool has_media;

  // Flag that specifies whether the volume is configurable.
  bool configurable;

  // Flag that specifies whether the volume is watchable.
  bool watchable;

  // Additional data about mount, for example, that the filesystem is not
  // supported.
  MountError mount_condition;

  // Context in which the volume has been mounted.
  MountContext mount_context;

  // File system type indentifier.
  std::optional<std::string> disk_file_system_type;

  // Icons for the volume.
  IconSet icon_set;

  // Drive label of the volume. Removable partitions that belong to the same
  // physical removable device share the same drive label.
  std::optional<std::string> drive_label;

  // The path on the remote host where this volume is mounted, for crostini this
  // is the user's homedir (/home/<username>).
  std::optional<std::string> remote_mount_path;

  // Flag that specifies whether the volume is hidden from the user.
  bool hidden;

  // Type of the VM which owns this volume.
  VmType vm_type;

};

struct MountCompletedEvent {
  MountCompletedEvent();
  ~MountCompletedEvent();
  MountCompletedEvent(const MountCompletedEvent&) = delete;
  MountCompletedEvent& operator=(const MountCompletedEvent&) = delete;
  MountCompletedEvent(MountCompletedEvent&& rhs) noexcept;
  MountCompletedEvent& operator=(MountCompletedEvent&& rhs) noexcept;

  // Populates a MountCompletedEvent object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MountCompletedEvent& out);

  // Populates a MountCompletedEvent object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, MountCompletedEvent& out);

  // Creates a deep copy of MountCompletedEvent.
  MountCompletedEvent Clone() const;

  // Creates a MountCompletedEvent object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<MountCompletedEvent> FromValue(const base::Value::Dict& value);

  // Creates a MountCompletedEvent object from a base::Value, or nullopt on
  // failure.
  static std::optional<MountCompletedEvent> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMountCompletedEvent object.
  base::Value::Dict ToValue() const;

  // Is the event raised for mounting or unmounting.
  MountCompletedEventType event_type;

  // Event type that tells listeners if mount was successful or an error occurred.
  // It also specifies the error.
  MountError status;

  // Metadata of the mounted volume.
  VolumeMetadata volume_metadata;

  // Whether the volume event should be notified or not.
  bool should_notify;

};

struct FileTransferStatus {
  FileTransferStatus();
  ~FileTransferStatus();
  FileTransferStatus(const FileTransferStatus&) = delete;
  FileTransferStatus& operator=(const FileTransferStatus&) = delete;
  FileTransferStatus(FileTransferStatus&& rhs) noexcept;
  FileTransferStatus& operator=(FileTransferStatus&& rhs) noexcept;

  // Populates a FileTransferStatus object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, FileTransferStatus& out);

  // Populates a FileTransferStatus object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, FileTransferStatus& out);

  // Creates a deep copy of FileTransferStatus.
  FileTransferStatus Clone() const;

  // Creates a FileTransferStatus object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<FileTransferStatus> FromValue(const base::Value::Dict& value);

  // Creates a FileTransferStatus object from a base::Value, or nullopt on
  // failure.
  static std::optional<FileTransferStatus> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisFileTransferStatus object.
  base::Value::Dict ToValue() const;

  // URL of file that is being transferred.
  std::string file_url;

  // File transfer progress state.
  TransferState transfer_state;

  // Approximated completed portion of the transfer operation.
  double processed;

  // Approximated total size of transfer operation.
  double total;

  // Total number of jobs.
  int num_total_jobs;

  // Indicates whether a notification should be shown for the transfer update.
  bool show_notification;

  // If true, hide when a job is completed when there are zero jobs in progress.
  // Otherwise, hide when one job is in progress.
  bool hide_when_zero_jobs;

};

struct SyncState {
  SyncState();
  ~SyncState();
  SyncState(const SyncState&) = delete;
  SyncState& operator=(const SyncState&) = delete;
  SyncState(SyncState&& rhs) noexcept;
  SyncState& operator=(SyncState&& rhs) noexcept;

  // Populates a SyncState object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, SyncState& out);

  // Populates a SyncState object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, SyncState& out);

  // Creates a deep copy of SyncState.
  SyncState Clone() const;

  // Creates a SyncState object from a base::Value::Dict, or nullopt on failure.
  static std::optional<SyncState> FromValue(const base::Value::Dict& value);

  // Creates a SyncState object from a base::Value, or nullopt on failure.
  static std::optional<SyncState> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSyncState object.
  base::Value::Dict ToValue() const;

  // URL of file that is being transferred.
  std::string file_url;

  // File transfer progress state.
  SyncStatus sync_status;

  // Transfer progress so far. Ranges from 0 to 1.
  double progress;

};

struct DriveSyncErrorEvent {
  DriveSyncErrorEvent();
  ~DriveSyncErrorEvent();
  DriveSyncErrorEvent(const DriveSyncErrorEvent&) = delete;
  DriveSyncErrorEvent& operator=(const DriveSyncErrorEvent&) = delete;
  DriveSyncErrorEvent(DriveSyncErrorEvent&& rhs) noexcept;
  DriveSyncErrorEvent& operator=(DriveSyncErrorEvent&& rhs) noexcept;

  // Populates a DriveSyncErrorEvent object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DriveSyncErrorEvent& out);

  // Populates a DriveSyncErrorEvent object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DriveSyncErrorEvent& out);

  // Creates a deep copy of DriveSyncErrorEvent.
  DriveSyncErrorEvent Clone() const;

  // Creates a DriveSyncErrorEvent object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<DriveSyncErrorEvent> FromValue(const base::Value::Dict& value);

  // Creates a DriveSyncErrorEvent object from a base::Value, or nullopt on
  // failure.
  static std::optional<DriveSyncErrorEvent> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDriveSyncErrorEvent object.
  base::Value::Dict ToValue() const;

  // Error type.
  DriveSyncErrorType type;

  // File URL of the entry that the error happens to.
  std::string file_url;

  // Shared drive name if the error relates to a shared drive.
  std::optional<std::string> shared_drive;

};

struct DriveConfirmDialogEvent {
  DriveConfirmDialogEvent();
  ~DriveConfirmDialogEvent();
  DriveConfirmDialogEvent(const DriveConfirmDialogEvent&) = delete;
  DriveConfirmDialogEvent& operator=(const DriveConfirmDialogEvent&) = delete;
  DriveConfirmDialogEvent(DriveConfirmDialogEvent&& rhs) noexcept;
  DriveConfirmDialogEvent& operator=(DriveConfirmDialogEvent&& rhs) noexcept;

  // Populates a DriveConfirmDialogEvent object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DriveConfirmDialogEvent& out);

  // Populates a DriveConfirmDialogEvent object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DriveConfirmDialogEvent& out);

  // Creates a deep copy of DriveConfirmDialogEvent.
  DriveConfirmDialogEvent Clone() const;

  // Creates a DriveConfirmDialogEvent object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<DriveConfirmDialogEvent> FromValue(const base::Value::Dict& value);

  // Creates a DriveConfirmDialogEvent object from a base::Value, or nullopt on
  // failure.
  static std::optional<DriveConfirmDialogEvent> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDriveConfirmDialogEvent object.
  base::Value::Dict ToValue() const;

  // Dialog type.
  DriveConfirmDialogType type;

  // File URL of the entry associated with the dialog.
  std::string file_url;

};

struct FileChange {
  FileChange();
  ~FileChange();
  FileChange(const FileChange&) = delete;
  FileChange& operator=(const FileChange&) = delete;
  FileChange(FileChange&& rhs) noexcept;
  FileChange& operator=(FileChange&& rhs) noexcept;

  // Populates a FileChange object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, FileChange& out);

  // Populates a FileChange object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, FileChange& out);

  // Creates a deep copy of FileChange.
  FileChange Clone() const;

  // Creates a FileChange object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<FileChange> FromValue(const base::Value::Dict& value);

  // Creates a FileChange object from a base::Value, or nullopt on failure.
  static std::optional<FileChange> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisFileChange object.
  base::Value::Dict ToValue() const;

  // URL of changed file (or directory).
  std::string url;

  // Type of change, which may be multiple.
  std::vector<ChangeType> changes;

};

struct FileWatchEvent {
  FileWatchEvent();
  ~FileWatchEvent();
  FileWatchEvent(const FileWatchEvent&) = delete;
  FileWatchEvent& operator=(const FileWatchEvent&) = delete;
  FileWatchEvent(FileWatchEvent&& rhs) noexcept;
  FileWatchEvent& operator=(FileWatchEvent&& rhs) noexcept;

  // Populates a FileWatchEvent object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, FileWatchEvent& out);

  // Populates a FileWatchEvent object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, FileWatchEvent& out);

  // Creates a deep copy of FileWatchEvent.
  FileWatchEvent Clone() const;

  // Creates a FileWatchEvent object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<FileWatchEvent> FromValue(const base::Value::Dict& value);

  // Creates a FileWatchEvent object from a base::Value, or nullopt on failure.
  static std::optional<FileWatchEvent> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisFileWatchEvent object.
  base::Value::Dict ToValue() const;

  // An Entry object which represents a changed directory. The conversion into a
  // kind of FileEntry object is done in file_browser_handler_custom_bindings.cc.
  // For filesystem API's Entry interface, see <a
  // href='http://www.w3.org/TR/file-system-api/#the-entry-interface'>The Entry
  // interface</a>.
  struct Entry {
    Entry();
    ~Entry();
    Entry(const Entry&) = delete;
    Entry& operator=(const Entry&) = delete;
    Entry(Entry&& rhs) noexcept;
    Entry& operator=(Entry&& rhs) noexcept;

    // Populates a Entry object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Entry& out);

    // Populates a Entry object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Entry& out);

    // Creates a deep copy of Entry.
    Entry Clone() const;

    // Creates a Entry object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Entry> FromValue(const base::Value::Dict& value);

    // Creates a Entry object from a base::Value, or nullopt on failure.
    static std::optional<Entry> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisEntry object.
    base::Value::Dict ToValue() const;

    base::Value::Dict additional_properties;
  };


  // Specifies type of event that is raised.
  FileWatchEventType event_type;

  // An Entry object which represents a changed directory. The conversion into a
  // kind of FileEntry object is done in file_browser_handler_custom_bindings.cc.
  // For filesystem API's Entry interface, see <a
  // href='http://www.w3.org/TR/file-system-api/#the-entry-interface'>The Entry
  // interface</a>.
  Entry entry;

  // Detailed change information of change. It would be null if the detailed
  // information is not available.
  std::optional<std::vector<FileChange>> changed_files;

};

struct GetVolumeRootOptions {
  GetVolumeRootOptions();
  ~GetVolumeRootOptions();
  GetVolumeRootOptions(const GetVolumeRootOptions&) = delete;
  GetVolumeRootOptions& operator=(const GetVolumeRootOptions&) = delete;
  GetVolumeRootOptions(GetVolumeRootOptions&& rhs) noexcept;
  GetVolumeRootOptions& operator=(GetVolumeRootOptions&& rhs) noexcept;

  // Populates a GetVolumeRootOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetVolumeRootOptions& out);

  // Populates a GetVolumeRootOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetVolumeRootOptions& out);

  // Creates a deep copy of GetVolumeRootOptions.
  GetVolumeRootOptions Clone() const;

  // Creates a GetVolumeRootOptions object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<GetVolumeRootOptions> FromValue(const base::Value::Dict& value);

  // Creates a GetVolumeRootOptions object from a base::Value, or nullopt on
  // failure.
  static std::optional<GetVolumeRootOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetVolumeRootOptions object.
  base::Value::Dict ToValue() const;

  // The ID of the requested volume.
  std::string volume_id;

  // Whether the requested file system should be writable. The default is
  // read-only.
  std::optional<bool> writable;

};

struct Preferences {
  Preferences();
  ~Preferences();
  Preferences(const Preferences&) = delete;
  Preferences& operator=(const Preferences&) = delete;
  Preferences(Preferences&& rhs) noexcept;
  Preferences& operator=(Preferences&& rhs) noexcept;

  // Populates a Preferences object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, Preferences& out);

  // Populates a Preferences object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, Preferences& out);

  // Creates a deep copy of Preferences.
  Preferences Clone() const;

  // Creates a Preferences object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<Preferences> FromValue(const base::Value::Dict& value);

  // Creates a Preferences object from a base::Value, or nullopt on failure.
  static std::optional<Preferences> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPreferences object.
  base::Value::Dict ToValue() const;

  bool drive_enabled;

  bool drive_sync_enabled_on_metered_network;

  bool search_suggest_enabled;

  bool use24hour_clock;

  std::string timezone;

  bool arc_enabled;

  bool arc_removable_media_access_enabled;

  std::vector<std::string> folder_shortcuts;

  bool trash_enabled;

  double office_file_moved_one_drive;

  double office_file_moved_google_drive;

  bool drive_fs_bulk_pinning_available;

  bool drive_fs_bulk_pinning_enabled;

};

struct PreferencesChange {
  PreferencesChange();
  ~PreferencesChange();
  PreferencesChange(const PreferencesChange&) = delete;
  PreferencesChange& operator=(const PreferencesChange&) = delete;
  PreferencesChange(PreferencesChange&& rhs) noexcept;
  PreferencesChange& operator=(PreferencesChange&& rhs) noexcept;

  // Populates a PreferencesChange object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PreferencesChange& out);

  // Populates a PreferencesChange object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PreferencesChange& out);

  // Creates a deep copy of PreferencesChange.
  PreferencesChange Clone() const;

  // Creates a PreferencesChange object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<PreferencesChange> FromValue(const base::Value::Dict& value);

  // Creates a PreferencesChange object from a base::Value, or nullopt on
  // failure.
  static std::optional<PreferencesChange> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPreferencesChange object.
  base::Value::Dict ToValue() const;

  std::optional<bool> drive_sync_enabled_on_metered_network;

  std::optional<bool> arc_enabled;

  std::optional<bool> arc_removable_media_access_enabled;

  std::optional<std::vector<std::string>> folder_shortcuts;

  std::optional<bool> drive_fs_bulk_pinning_enabled;

};

struct SearchParams {
  SearchParams();
  ~SearchParams();
  SearchParams(const SearchParams&) = delete;
  SearchParams& operator=(const SearchParams&) = delete;
  SearchParams(SearchParams&& rhs) noexcept;
  SearchParams& operator=(SearchParams&& rhs) noexcept;

  // Populates a SearchParams object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SearchParams& out);

  // Populates a SearchParams object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SearchParams& out);

  // Creates a deep copy of SearchParams.
  SearchParams Clone() const;

  // Creates a SearchParams object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<SearchParams> FromValue(const base::Value::Dict& value);

  // Creates a SearchParams object from a base::Value, or nullopt on failure.
  static std::optional<SearchParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSearchParams object.
  base::Value::Dict ToValue() const;

  // Search query.
  std::string query;

  // The category of files to which the search is limited.
  FileCategory category;

  // The minimum modified time of the files to be returned
  std::optional<double> modified_timestamp;

  // ID of the search feed that should be fetched next. Value passed here should
  // be gotten from previous searchDrive call. It can be empty for the initial
  // search request.
  std::string next_feed;

};

struct SearchMetadataParams {
  SearchMetadataParams();
  ~SearchMetadataParams();
  SearchMetadataParams(const SearchMetadataParams&) = delete;
  SearchMetadataParams& operator=(const SearchMetadataParams&) = delete;
  SearchMetadataParams(SearchMetadataParams&& rhs) noexcept;
  SearchMetadataParams& operator=(SearchMetadataParams&& rhs) noexcept;

  // Populates a SearchMetadataParams object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SearchMetadataParams& out);

  // Populates a SearchMetadataParams object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SearchMetadataParams& out);

  // Creates a deep copy of SearchMetadataParams.
  SearchMetadataParams Clone() const;

  // Creates a SearchMetadataParams object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<SearchMetadataParams> FromValue(const base::Value::Dict& value);

  // Creates a SearchMetadataParams object from a base::Value, or nullopt on
  // failure.
  static std::optional<SearchMetadataParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSearchMetadataParams object.
  base::Value::Dict ToValue() const;

  // Optional root directory from which to start the search. If not present, the
  // search begins at the local root.
  struct RootDir {
    RootDir();
    ~RootDir();
    RootDir(const RootDir&) = delete;
    RootDir& operator=(const RootDir&) = delete;
    RootDir(RootDir&& rhs) noexcept;
    RootDir& operator=(RootDir&& rhs) noexcept;

    // Populates a RootDir object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, RootDir& out);

    // Populates a RootDir object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, RootDir& out);

    // Creates a deep copy of RootDir.
    RootDir Clone() const;

    // Creates a RootDir object from a base::Value::Dict, or nullopt on failure.
    static std::optional<RootDir> FromValue(const base::Value::Dict& value);

    // Creates a RootDir object from a base::Value, or nullopt on failure.
    static std::optional<RootDir> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisRootDir object.
    base::Value::Dict ToValue() const;

    base::Value::Dict additional_properties;
  };


  // Optional root directory from which to start the search. If not present, the
  // search begins at the local root.
  std::optional<RootDir> root_dir;

  // Search query. It can be empty. Any filename matches to an empty query.
  std::string query;

  // The type of entry that is needed. Default to ALL.
  SearchType types;

  // Maximum number of results.
  int max_results;

  // Modified timestamp. The file must have modified timestamp more recent than
  // this to be included in results.
  std::optional<double> modified_timestamp;

  // The category of files to which the search is limited.
  FileCategory category;

};

struct DriveMetadataSearchResult {
  DriveMetadataSearchResult();
  ~DriveMetadataSearchResult();
  DriveMetadataSearchResult(const DriveMetadataSearchResult&) = delete;
  DriveMetadataSearchResult& operator=(const DriveMetadataSearchResult&) = delete;
  DriveMetadataSearchResult(DriveMetadataSearchResult&& rhs) noexcept;
  DriveMetadataSearchResult& operator=(DriveMetadataSearchResult&& rhs) noexcept;

  // Populates a DriveMetadataSearchResult object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DriveMetadataSearchResult& out);

  // Populates a DriveMetadataSearchResult object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DriveMetadataSearchResult& out);

  // Creates a deep copy of DriveMetadataSearchResult.
  DriveMetadataSearchResult Clone() const;

  // Creates a DriveMetadataSearchResult object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<DriveMetadataSearchResult> FromValue(const base::Value::Dict& value);

  // Creates a DriveMetadataSearchResult object from a base::Value, or nullopt
  // on failure.
  static std::optional<DriveMetadataSearchResult> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDriveMetadataSearchResult object.
  base::Value::Dict ToValue() const;

  // A dictionary object which represents a Drive file. This will be converted
  // into a kind of FileEntry object. See file_browser_handler_custom_bindings.cc
  // for details. For filesystem API's Entry interface, see <a
  // href='http://www.w3.org/TR/file-system-api/#the-entry-interface'>The Entry
  // interface</a>.
  struct Entry {
    Entry();
    ~Entry();
    Entry(const Entry&) = delete;
    Entry& operator=(const Entry&) = delete;
    Entry(Entry&& rhs) noexcept;
    Entry& operator=(Entry&& rhs) noexcept;

    // Populates a Entry object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Entry& out);

    // Populates a Entry object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Entry& out);

    // Creates a deep copy of Entry.
    Entry Clone() const;

    // Creates a Entry object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Entry> FromValue(const base::Value::Dict& value);

    // Creates a Entry object from a base::Value, or nullopt on failure.
    static std::optional<Entry> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisEntry object.
    base::Value::Dict ToValue() const;

    base::Value::Dict additional_properties;
  };


  // A dictionary object which represents a Drive file. This will be converted
  // into a kind of FileEntry object. See file_browser_handler_custom_bindings.cc
  // for details. For filesystem API's Entry interface, see <a
  // href='http://www.w3.org/TR/file-system-api/#the-entry-interface'>The Entry
  // interface</a>.
  Entry entry;

  // The base name of a Drive file that matched the search query. The matched sub
  // strings are highlighted with <b> element. Meta characters are escaped like
  // &lt;.
  std::string highlighted_base_name;

  // Whether the file is available while offline. May be unset if not applicable.
  std::optional<bool> available_offline;

};

struct DriveConnectionState {
  DriveConnectionState();
  ~DriveConnectionState();
  DriveConnectionState(const DriveConnectionState&) = delete;
  DriveConnectionState& operator=(const DriveConnectionState&) = delete;
  DriveConnectionState(DriveConnectionState&& rhs) noexcept;
  DriveConnectionState& operator=(DriveConnectionState&& rhs) noexcept;

  // Populates a DriveConnectionState object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DriveConnectionState& out);

  // Populates a DriveConnectionState object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DriveConnectionState& out);

  // Creates a deep copy of DriveConnectionState.
  DriveConnectionState Clone() const;

  // Creates a DriveConnectionState object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<DriveConnectionState> FromValue(const base::Value::Dict& value);

  // Creates a DriveConnectionState object from a base::Value, or nullopt on
  // failure.
  static std::optional<DriveConnectionState> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDriveConnectionState object.
  base::Value::Dict ToValue() const;

  DriveConnectionStateType type;

  // Reasons of offline.
  DriveOfflineReason reason;

};

struct DeviceEvent {
  DeviceEvent();
  ~DeviceEvent();
  DeviceEvent(const DeviceEvent&) = delete;
  DeviceEvent& operator=(const DeviceEvent&) = delete;
  DeviceEvent(DeviceEvent&& rhs) noexcept;
  DeviceEvent& operator=(DeviceEvent&& rhs) noexcept;

  // Populates a DeviceEvent object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DeviceEvent& out);

  // Populates a DeviceEvent object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, DeviceEvent& out);

  // Creates a deep copy of DeviceEvent.
  DeviceEvent Clone() const;

  // Creates a DeviceEvent object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<DeviceEvent> FromValue(const base::Value::Dict& value);

  // Creates a DeviceEvent object from a base::Value, or nullopt on failure.
  static std::optional<DeviceEvent> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDeviceEvent object.
  base::Value::Dict ToValue() const;

  // Event type of the device event.
  DeviceEventType type;

  // Device path to identify the device.
  std::string device_path;

  // Human readable label for the device.
  std::string device_label;

};

struct Provider {
  Provider();
  ~Provider();
  Provider(const Provider&) = delete;
  Provider& operator=(const Provider&) = delete;
  Provider(Provider&& rhs) noexcept;
  Provider& operator=(Provider&& rhs) noexcept;

  // Populates a Provider object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Provider& out);

  // Populates a Provider object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, Provider& out);

  // Creates a deep copy of Provider.
  Provider Clone() const;

  // Creates a Provider object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Provider> FromValue(const base::Value::Dict& value);

  // Creates a Provider object from a base::Value, or nullopt on failure.
  static std::optional<Provider> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisProvider object.
  base::Value::Dict ToValue() const;

  // ID of the provider.
  std::string provider_id;

  // Set of icons for the provider.
  IconSet icon_set;

  // Name of the provider.
  std::string name;

  // Whether supports configuration dialog.
  bool configurable;

  // Whether supports watching entries.
  bool watchable;

  // Whether supports mounting multiple instances.
  bool multiple_mounts;

  // Source of file systems' data.
  ProviderSource source;

};

struct FileSystemProviderAction {
  FileSystemProviderAction();
  ~FileSystemProviderAction();
  FileSystemProviderAction(const FileSystemProviderAction&) = delete;
  FileSystemProviderAction& operator=(const FileSystemProviderAction&) = delete;
  FileSystemProviderAction(FileSystemProviderAction&& rhs) noexcept;
  FileSystemProviderAction& operator=(FileSystemProviderAction&& rhs) noexcept;

  // Populates a FileSystemProviderAction object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, FileSystemProviderAction& out);

  // Populates a FileSystemProviderAction object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, FileSystemProviderAction& out);

  // Creates a deep copy of FileSystemProviderAction.
  FileSystemProviderAction Clone() const;

  // Creates a FileSystemProviderAction object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<FileSystemProviderAction> FromValue(const base::Value::Dict& value);

  // Creates a FileSystemProviderAction object from a base::Value, or nullopt on
  // failure.
  static std::optional<FileSystemProviderAction> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisFileSystemProviderAction object.
  base::Value::Dict ToValue() const;

  // The identifier of the action. Any string or $(ref:CommonActionId) for common
  // actions.
  std::string id;

  // The title of the action. It may be ignored for common actions.
  std::optional<std::string> title;

};

struct LinuxPackageInfo {
  LinuxPackageInfo();
  ~LinuxPackageInfo();
  LinuxPackageInfo(const LinuxPackageInfo&) = delete;
  LinuxPackageInfo& operator=(const LinuxPackageInfo&) = delete;
  LinuxPackageInfo(LinuxPackageInfo&& rhs) noexcept;
  LinuxPackageInfo& operator=(LinuxPackageInfo&& rhs) noexcept;

  // Populates a LinuxPackageInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, LinuxPackageInfo& out);

  // Populates a LinuxPackageInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, LinuxPackageInfo& out);

  // Creates a deep copy of LinuxPackageInfo.
  LinuxPackageInfo Clone() const;

  // Creates a LinuxPackageInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<LinuxPackageInfo> FromValue(const base::Value::Dict& value);

  // Creates a LinuxPackageInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<LinuxPackageInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisLinuxPackageInfo object.
  base::Value::Dict ToValue() const;

  std::string name;

  std::string version;

  // A one-line summary of the project. Almost always present.
  std::optional<std::string> summary;

  // A longer description of the project. Almost always present.
  std::optional<std::string> description;

};

struct CrostiniEvent {
  CrostiniEvent();
  ~CrostiniEvent();
  CrostiniEvent(const CrostiniEvent&) = delete;
  CrostiniEvent& operator=(const CrostiniEvent&) = delete;
  CrostiniEvent(CrostiniEvent&& rhs) noexcept;
  CrostiniEvent& operator=(CrostiniEvent&& rhs) noexcept;

  // Populates a CrostiniEvent object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CrostiniEvent& out);

  // Populates a CrostiniEvent object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CrostiniEvent& out);

  // Creates a deep copy of CrostiniEvent.
  CrostiniEvent Clone() const;

  // Creates a CrostiniEvent object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<CrostiniEvent> FromValue(const base::Value::Dict& value);

  // Creates a CrostiniEvent object from a base::Value, or nullopt on failure.
  static std::optional<CrostiniEvent> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCrostiniEvent object.
  base::Value::Dict ToValue() const;

  struct EntriesType {
    EntriesType();
    ~EntriesType();
    EntriesType(const EntriesType&) = delete;
    EntriesType& operator=(const EntriesType&) = delete;
    EntriesType(EntriesType&& rhs) noexcept;
    EntriesType& operator=(EntriesType&& rhs) noexcept;

    // Populates a EntriesType object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, EntriesType& out);

    // Populates a EntriesType object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, EntriesType& out);

    // Creates a deep copy of EntriesType.
    EntriesType Clone() const;

    // Creates a EntriesType object from a base::Value::Dict, or nullopt on
    // failure.
    static std::optional<EntriesType> FromValue(const base::Value::Dict& value);

    // Creates a EntriesType object from a base::Value, or nullopt on failure.
    static std::optional<EntriesType> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisEntriesType object.
    base::Value::Dict ToValue() const;

    base::Value::Dict additional_properties;
  };



  // Is the event raised for enable, disable, share, or unshare.
  CrostiniEventType event_type;

  // VM that this event relates to.
  std::string vm_name;

  // Name of the container this event relates to.
  std::string container_name;

  // Paths that have been shared or unshared.
  std::vector<EntriesType> entries;

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

  struct EntriesType {
    EntriesType();
    ~EntriesType();
    EntriesType(const EntriesType&) = delete;
    EntriesType& operator=(const EntriesType&) = delete;
    EntriesType(EntriesType&& rhs) noexcept;
    EntriesType& operator=(EntriesType&& rhs) noexcept;

    // Populates a EntriesType object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, EntriesType& out);

    // Populates a EntriesType object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, EntriesType& out);

    // Creates a deep copy of EntriesType.
    EntriesType Clone() const;

    // Creates a EntriesType object from a base::Value::Dict, or nullopt on
    // failure.
    static std::optional<EntriesType> FromValue(const base::Value::Dict& value);

    // Creates a EntriesType object from a base::Value, or nullopt on failure.
    static std::optional<EntriesType> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisEntriesType object.
    base::Value::Dict ToValue() const;

    base::Value::Dict additional_properties;
  };



  // Entries shared with crostini container.
  std::vector<EntriesType> entries;

  // true the first time this is called for the session.
  bool first_for_session;

};

struct AndroidApp {
  AndroidApp();
  ~AndroidApp();
  AndroidApp(const AndroidApp&) = delete;
  AndroidApp& operator=(const AndroidApp&) = delete;
  AndroidApp(AndroidApp&& rhs) noexcept;
  AndroidApp& operator=(AndroidApp&& rhs) noexcept;

  // Populates a AndroidApp object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, AndroidApp& out);

  // Populates a AndroidApp object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, AndroidApp& out);

  // Creates a deep copy of AndroidApp.
  AndroidApp Clone() const;

  // Creates a AndroidApp object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<AndroidApp> FromValue(const base::Value::Dict& value);

  // Creates a AndroidApp object from a base::Value, or nullopt on failure.
  static std::optional<AndroidApp> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAndroidApp object.
  base::Value::Dict ToValue() const;

  // Name of the app to be shown to the user (e.g. Photos).
  std::string name;

  // Package name (e.g. com.google.android.apps.photos).
  std::string package_name;

  // Activity name (e.g. .PhotosPickerActivity).
  std::string activity_name;

  // App icon.
  std::optional<IconSet> icon_set;

};

struct StreamInfo {
  StreamInfo();
  ~StreamInfo();
  StreamInfo(const StreamInfo&) = delete;
  StreamInfo& operator=(const StreamInfo&) = delete;
  StreamInfo(StreamInfo&& rhs) noexcept;
  StreamInfo& operator=(StreamInfo&& rhs) noexcept;

  // Populates a StreamInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, StreamInfo& out);

  // Populates a StreamInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, StreamInfo& out);

  // Creates a deep copy of StreamInfo.
  StreamInfo Clone() const;

  // Creates a StreamInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<StreamInfo> FromValue(const base::Value::Dict& value);

  // Creates a StreamInfo object from a base::Value, or nullopt on failure.
  static std::optional<StreamInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisStreamInfo object.
  base::Value::Dict ToValue() const;

  // An unfiltered string->string dictionary of tags from the stream.
  struct Tags {
    Tags();
    ~Tags();
    Tags(const Tags&) = delete;
    Tags& operator=(const Tags&) = delete;
    Tags(Tags&& rhs) noexcept;
    Tags& operator=(Tags&& rhs) noexcept;

    // Populates a Tags object from a base::Value& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value& value, Tags& out);

    // Populates a Tags object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Tags& out);

    // Creates a deep copy of Tags.
    Tags Clone() const;

    // Creates a Tags object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Tags> FromValue(const base::Value::Dict& value);

    // Creates a Tags object from a base::Value, or nullopt on failure.
    static std::optional<Tags> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisTags object.
    base::Value::Dict ToValue() const;

    base::Value::Dict additional_properties;
  };


  // The stream type e.g., "mp3", "h264", "ogg".
  std::string type;

  // An unfiltered string->string dictionary of tags from the stream.
  Tags tags;

};

struct AttachedImages {
  AttachedImages();
  ~AttachedImages();
  AttachedImages(const AttachedImages&) = delete;
  AttachedImages& operator=(const AttachedImages&) = delete;
  AttachedImages(AttachedImages&& rhs) noexcept;
  AttachedImages& operator=(AttachedImages&& rhs) noexcept;

  // Populates a AttachedImages object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AttachedImages& out);

  // Populates a AttachedImages object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AttachedImages& out);

  // Creates a deep copy of AttachedImages.
  AttachedImages Clone() const;

  // Creates a AttachedImages object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<AttachedImages> FromValue(const base::Value::Dict& value);

  // Creates a AttachedImages object from a base::Value, or nullopt on failure.
  static std::optional<AttachedImages> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAttachedImages object.
  base::Value::Dict ToValue() const;

  // Data encoded as a dataURL.
  std::string data;

  // Data type.
  std::string type;

};

struct MediaMetadata {
  MediaMetadata();
  ~MediaMetadata();
  MediaMetadata(const MediaMetadata&) = delete;
  MediaMetadata& operator=(const MediaMetadata&) = delete;
  MediaMetadata(MediaMetadata&& rhs) noexcept;
  MediaMetadata& operator=(MediaMetadata&& rhs) noexcept;

  // Populates a MediaMetadata object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MediaMetadata& out);

  // Populates a MediaMetadata object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, MediaMetadata& out);

  // Creates a deep copy of MediaMetadata.
  MediaMetadata Clone() const;

  // Creates a MediaMetadata object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<MediaMetadata> FromValue(const base::Value::Dict& value);

  // Creates a MediaMetadata object from a base::Value, or nullopt on failure.
  static std::optional<MediaMetadata> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMediaMetadata object.
  base::Value::Dict ToValue() const;

  // Content mime type.
  std::string mime_type;

  // Defined for video. In pixels.
  std::optional<int> height;

  std::optional<int> width;

  // Defined for audio and video. In seconds.
  std::optional<double> duration;

  // Defined for video. In degrees.
  std::optional<int> rotation;

  // Defined for audio and video.
  std::optional<std::string> album;

  std::optional<std::string> artist;

  std::optional<std::string> comment;

  std::optional<std::string> copyright;

  std::optional<int> disc;

  std::optional<std::string> genre;

  std::optional<std::string> language;

  std::optional<std::string> title;

  std::optional<int> track;

  // All the metadata in the media file. For formats with multiple streams, stream
  // order is preserved. Container metadata is the first stream.
  std::vector<StreamInfo> raw_tags;

  // Raw images embedded in the media file. This is most often audio album art or
  // video thumbnails.
  std::vector<AttachedImages> attached_images;

};

struct HoldingSpaceState {
  HoldingSpaceState();
  ~HoldingSpaceState();
  HoldingSpaceState(const HoldingSpaceState&) = delete;
  HoldingSpaceState& operator=(const HoldingSpaceState&) = delete;
  HoldingSpaceState(HoldingSpaceState&& rhs) noexcept;
  HoldingSpaceState& operator=(HoldingSpaceState&& rhs) noexcept;

  // Populates a HoldingSpaceState object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, HoldingSpaceState& out);

  // Populates a HoldingSpaceState object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, HoldingSpaceState& out);

  // Creates a deep copy of HoldingSpaceState.
  HoldingSpaceState Clone() const;

  // Creates a HoldingSpaceState object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<HoldingSpaceState> FromValue(const base::Value::Dict& value);

  // Creates a HoldingSpaceState object from a base::Value, or nullopt on
  // failure.
  static std::optional<HoldingSpaceState> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisHoldingSpaceState object.
  base::Value::Dict ToValue() const;

  // File system URLs of items pinned to the holding space.
  std::vector<std::string> item_urls;

};

struct OpenWindowParams {
  OpenWindowParams();
  ~OpenWindowParams();
  OpenWindowParams(const OpenWindowParams&) = delete;
  OpenWindowParams& operator=(const OpenWindowParams&) = delete;
  OpenWindowParams(OpenWindowParams&& rhs) noexcept;
  OpenWindowParams& operator=(OpenWindowParams&& rhs) noexcept;

  // Populates a OpenWindowParams object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, OpenWindowParams& out);

  // Populates a OpenWindowParams object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, OpenWindowParams& out);

  // Creates a deep copy of OpenWindowParams.
  OpenWindowParams Clone() const;

  // Creates a OpenWindowParams object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<OpenWindowParams> FromValue(const base::Value::Dict& value);

  // Creates a OpenWindowParams object from a base::Value, or nullopt on
  // failure.
  static std::optional<OpenWindowParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisOpenWindowParams object.
  base::Value::Dict ToValue() const;

  // The desired target directory when opening a new window. If omitted Files app
  // displays the default directory: MyFiles.
  std::optional<std::string> current_directory_url;

  // The URL for a file or directory to be selected once a new window is spawned.
  std::optional<std::string> selection_url;

};

struct IoTaskParams {
  IoTaskParams();
  ~IoTaskParams();
  IoTaskParams(const IoTaskParams&) = delete;
  IoTaskParams& operator=(const IoTaskParams&) = delete;
  IoTaskParams(IoTaskParams&& rhs) noexcept;
  IoTaskParams& operator=(IoTaskParams&& rhs) noexcept;

  // Populates a IoTaskParams object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, IoTaskParams& out);

  // Populates a IoTaskParams object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, IoTaskParams& out);

  // Creates a deep copy of IoTaskParams.
  IoTaskParams Clone() const;

  // Creates a IoTaskParams object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<IoTaskParams> FromValue(const base::Value::Dict& value);

  // Creates a IoTaskParams object from a base::Value, or nullopt on failure.
  static std::optional<IoTaskParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisIoTaskParams object.
  base::Value::Dict ToValue() const;

  // Destination folder for tasks that require one. Not required by |delete| task.
  struct DestinationFolder {
    DestinationFolder();
    ~DestinationFolder();
    DestinationFolder(const DestinationFolder&) = delete;
    DestinationFolder& operator=(const DestinationFolder&) = delete;
    DestinationFolder(DestinationFolder&& rhs) noexcept;
    DestinationFolder& operator=(DestinationFolder&& rhs) noexcept;

    // Populates a DestinationFolder object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, DestinationFolder& out);

    // Populates a DestinationFolder object from a Dict& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value::Dict& value, DestinationFolder& out);

    // Creates a deep copy of DestinationFolder.
    DestinationFolder Clone() const;

    // Creates a DestinationFolder object from a base::Value::Dict, or nullopt on
    // failure.
    static std::optional<DestinationFolder> FromValue(const base::Value::Dict& value);

    // Creates a DestinationFolder object from a base::Value, or nullopt on
    // failure.
    static std::optional<DestinationFolder> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisDestinationFolder object.
    base::Value::Dict ToValue() const;

    base::Value::Dict additional_properties;
  };


  // Destination folder for tasks that require one. Not required by |delete| task.
  std::optional<DestinationFolder> destination_folder;

  // Password used for unpacking encrypted archives.
  std::optional<std::string> password;

  // Whether to display a notification in the UI. This does not stop the
  // IOProgressStatus event propagating instead it provides a true boolean on the
  // event that the UI can choose to show / hide the notification.
  std::optional<bool> show_notification;

};

struct PolicyError {
  PolicyError();
  ~PolicyError();
  PolicyError(const PolicyError&) = delete;
  PolicyError& operator=(const PolicyError&) = delete;
  PolicyError(PolicyError&& rhs) noexcept;
  PolicyError& operator=(PolicyError&& rhs) noexcept;

  // Populates a PolicyError object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PolicyError& out);

  // Populates a PolicyError object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, PolicyError& out);

  // Creates a deep copy of PolicyError.
  PolicyError Clone() const;

  // Creates a PolicyError object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<PolicyError> FromValue(const base::Value::Dict& value);

  // Creates a PolicyError object from a base::Value, or nullopt on failure.
  static std::optional<PolicyError> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPolicyError object.
  base::Value::Dict ToValue() const;

  // Type of the error.
  PolicyErrorType type;

  // The number of files blocked by the policy.
  int policy_file_count;

  // The name of the first blocked file. Used for notifications.
  std::string file_name;

  // Normally the review button is only shown when `policyFileCount` is >1, this
  // option allows to force the display of the review button irrespective of other
  // conditions.
  bool always_show_review;

};

struct ConflictPauseParams {
  ConflictPauseParams();
  ~ConflictPauseParams();
  ConflictPauseParams(const ConflictPauseParams&) = delete;
  ConflictPauseParams& operator=(const ConflictPauseParams&) = delete;
  ConflictPauseParams(ConflictPauseParams&& rhs) noexcept;
  ConflictPauseParams& operator=(ConflictPauseParams&& rhs) noexcept;

  // Populates a ConflictPauseParams object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ConflictPauseParams& out);

  // Populates a ConflictPauseParams object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ConflictPauseParams& out);

  // Creates a deep copy of ConflictPauseParams.
  ConflictPauseParams Clone() const;

  // Creates a ConflictPauseParams object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<ConflictPauseParams> FromValue(const base::Value::Dict& value);

  // Creates a ConflictPauseParams object from a base::Value, or nullopt on
  // failure.
  static std::optional<ConflictPauseParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisConflictPauseParams object.
  base::Value::Dict ToValue() const;

  // The conflict file name.
  std::optional<std::string> conflict_name;

  // True if the conflict file name is a directory.
  std::optional<bool> conflict_is_directory;

  // Set true if there are potentially multiple conflicted file names.
  std::optional<bool> conflict_multiple;

  // The conflict copy or move target URL.
  std::optional<std::string> conflict_target_url;

};

struct PolicyPauseParams {
  PolicyPauseParams();
  ~PolicyPauseParams();
  PolicyPauseParams(const PolicyPauseParams&) = delete;
  PolicyPauseParams& operator=(const PolicyPauseParams&) = delete;
  PolicyPauseParams(PolicyPauseParams&& rhs) noexcept;
  PolicyPauseParams& operator=(PolicyPauseParams&& rhs) noexcept;

  // Populates a PolicyPauseParams object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PolicyPauseParams& out);

  // Populates a PolicyPauseParams object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PolicyPauseParams& out);

  // Creates a deep copy of PolicyPauseParams.
  PolicyPauseParams Clone() const;

  // Creates a PolicyPauseParams object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<PolicyPauseParams> FromValue(const base::Value::Dict& value);

  // Creates a PolicyPauseParams object from a base::Value, or nullopt on
  // failure.
  static std::optional<PolicyPauseParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPolicyPauseParams object.
  base::Value::Dict ToValue() const;

  // One of DLP or Enterprise Connectors.
  PolicyErrorType type;

  // The number of files under warning restriction.
  int policy_file_count;

  // The name of the first file under warning restriction. Used for notifications.
  std::string file_name;

  // Normally the review button is only shown when `policyFileCount` is >1, this
  // option allows to force the display of the review button irrespective of other
  // conditions.
  bool always_show_review;

};

struct PauseParams {
  PauseParams();
  ~PauseParams();
  PauseParams(const PauseParams&) = delete;
  PauseParams& operator=(const PauseParams&) = delete;
  PauseParams(PauseParams&& rhs) noexcept;
  PauseParams& operator=(PauseParams&& rhs) noexcept;

  // Populates a PauseParams object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PauseParams& out);

  // Populates a PauseParams object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, PauseParams& out);

  // Creates a deep copy of PauseParams.
  PauseParams Clone() const;

  // Creates a PauseParams object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<PauseParams> FromValue(const base::Value::Dict& value);

  // Creates a PauseParams object from a base::Value, or nullopt on failure.
  static std::optional<PauseParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPauseParams object.
  base::Value::Dict ToValue() const;

  // Set iff pausing due to name conflict.
  std::optional<ConflictPauseParams> conflict_params;

  // Set iff pausing due to policy.
  std::optional<PolicyPauseParams> policy_params;

};

struct ConflictResumeParams {
  ConflictResumeParams();
  ~ConflictResumeParams();
  ConflictResumeParams(const ConflictResumeParams&) = delete;
  ConflictResumeParams& operator=(const ConflictResumeParams&) = delete;
  ConflictResumeParams(ConflictResumeParams&& rhs) noexcept;
  ConflictResumeParams& operator=(ConflictResumeParams&& rhs) noexcept;

  // Populates a ConflictResumeParams object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ConflictResumeParams& out);

  // Populates a ConflictResumeParams object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ConflictResumeParams& out);

  // Creates a deep copy of ConflictResumeParams.
  ConflictResumeParams Clone() const;

  // Creates a ConflictResumeParams object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<ConflictResumeParams> FromValue(const base::Value::Dict& value);

  // Creates a ConflictResumeParams object from a base::Value, or nullopt on
  // failure.
  static std::optional<ConflictResumeParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisConflictResumeParams object.
  base::Value::Dict ToValue() const;

  // How to resolve a CopyOrMoveIOTask file name conflict: either 'keepboth' or
  // 'replace'.
  std::optional<std::string> conflict_resolve;

  // Set true if conflictResolve should apply to future file name conflicts.
  std::optional<bool> conflict_apply_to_all;

};

struct PolicyResumeParams {
  PolicyResumeParams();
  ~PolicyResumeParams();
  PolicyResumeParams(const PolicyResumeParams&) = delete;
  PolicyResumeParams& operator=(const PolicyResumeParams&) = delete;
  PolicyResumeParams(PolicyResumeParams&& rhs) noexcept;
  PolicyResumeParams& operator=(PolicyResumeParams&& rhs) noexcept;

  // Populates a PolicyResumeParams object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PolicyResumeParams& out);

  // Populates a PolicyResumeParams object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PolicyResumeParams& out);

  // Creates a deep copy of PolicyResumeParams.
  PolicyResumeParams Clone() const;

  // Creates a PolicyResumeParams object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<PolicyResumeParams> FromValue(const base::Value::Dict& value);

  // Creates a PolicyResumeParams object from a base::Value, or nullopt on
  // failure.
  static std::optional<PolicyResumeParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPolicyResumeParams object.
  base::Value::Dict ToValue() const;

  PolicyErrorType type;

};

struct ResumeParams {
  ResumeParams();
  ~ResumeParams();
  ResumeParams(const ResumeParams&) = delete;
  ResumeParams& operator=(const ResumeParams&) = delete;
  ResumeParams(ResumeParams&& rhs) noexcept;
  ResumeParams& operator=(ResumeParams&& rhs) noexcept;

  // Populates a ResumeParams object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ResumeParams& out);

  // Populates a ResumeParams object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ResumeParams& out);

  // Creates a deep copy of ResumeParams.
  ResumeParams Clone() const;

  // Creates a ResumeParams object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ResumeParams> FromValue(const base::Value::Dict& value);

  // Creates a ResumeParams object from a base::Value, or nullopt on failure.
  static std::optional<ResumeParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisResumeParams object.
  base::Value::Dict ToValue() const;

  // Set iff paused due to name conflict.
  std::optional<ConflictResumeParams> conflict_params;

  // Set iff paused due to policy.
  std::optional<PolicyResumeParams> policy_params;

};

struct ProgressStatus {
  ProgressStatus();
  ~ProgressStatus();
  ProgressStatus(const ProgressStatus&) = delete;
  ProgressStatus& operator=(const ProgressStatus&) = delete;
  ProgressStatus(ProgressStatus&& rhs) noexcept;
  ProgressStatus& operator=(ProgressStatus&& rhs) noexcept;

  // Populates a ProgressStatus object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ProgressStatus& out);

  // Populates a ProgressStatus object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ProgressStatus& out);

  // Creates a deep copy of ProgressStatus.
  ProgressStatus Clone() const;

  // Creates a ProgressStatus object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ProgressStatus> FromValue(const base::Value::Dict& value);

  // Creates a ProgressStatus object from a base::Value, or nullopt on failure.
  static std::optional<ProgressStatus> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisProgressStatus object.
  base::Value::Dict ToValue() const;

  struct OutputsType {
    OutputsType();
    ~OutputsType();
    OutputsType(const OutputsType&) = delete;
    OutputsType& operator=(const OutputsType&) = delete;
    OutputsType(OutputsType&& rhs) noexcept;
    OutputsType& operator=(OutputsType&& rhs) noexcept;

    // Populates a OutputsType object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, OutputsType& out);

    // Populates a OutputsType object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, OutputsType& out);

    // Creates a deep copy of OutputsType.
    OutputsType Clone() const;

    // Creates a OutputsType object from a base::Value::Dict, or nullopt on
    // failure.
    static std::optional<OutputsType> FromValue(const base::Value::Dict& value);

    // Creates a OutputsType object from a base::Value, or nullopt on failure.
    static std::optional<OutputsType> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisOutputsType object.
    base::Value::Dict ToValue() const;

    base::Value::Dict additional_properties;
  };



  // Type of the task sending the progress.
  IoTaskType type;

  // Current state of the task sending the progress.
  IoTaskState state;

  // Type of policy error that occurred, if any. Used only if Data Leak Prevention
  // or Enterprise Connectors policies apply.
  std::optional<PolicyError> policy_error;

  // Name of the first source entry.
  std::string source_name;

  // Number of remaining entries to be processed.
  int num_remaining_items;

  // Total number of entries to be processed.
  int item_count;

  // Name of the destination folder for operations that transfer files to a
  // directory (e.g. copy or move).
  std::string destination_name;

  // ProgressStatus over all |sources|.
  int bytes_transferred;

  // Total size of all |sources|.
  int total_bytes;

  // The task id for this progress status.
  int task_id;

  // The estimate time to finish the operation.
  double remaining_seconds;

  // Number of sources scanned. Only used when in SCANNING state. When scanning
  // files, the progress is roughly the percentage of the number of scanned items
  // out of the total items. This isn't always accurate, e.g. when uploading
  // entire folders or because some items are not scanned at all. The goal is to
  // show the user that some progress is happening.
  int sources_scanned;

  // Whether notifications should be shown on progress status.
  bool show_notification;

  // The name of the last error that happened.
  std::string error_name;

  // I/O task state::PAUSED parameters.
  std::optional<PauseParams> pause_params;

  // The files affected by the IOTask. Currently only returned for TrashIOTask.
  std::optional<std::vector<OutputsType>> outputs;

  // List of files skipped during the operation because we couldn't decrypt them.
  std::vector<std::string> skipped_encrypted_files;

  // Volume id of the destination for operations that transfer files to a
  // directory (e.g. copy or move).
  std::string destination_volume_id;

};

struct DlpMetadata {
  DlpMetadata();
  ~DlpMetadata();
  DlpMetadata(const DlpMetadata&) = delete;
  DlpMetadata& operator=(const DlpMetadata&) = delete;
  DlpMetadata(DlpMetadata&& rhs) noexcept;
  DlpMetadata& operator=(DlpMetadata&& rhs) noexcept;

  // Populates a DlpMetadata object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DlpMetadata& out);

  // Populates a DlpMetadata object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, DlpMetadata& out);

  // Creates a deep copy of DlpMetadata.
  DlpMetadata Clone() const;

  // Creates a DlpMetadata object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<DlpMetadata> FromValue(const base::Value::Dict& value);

  // Creates a DlpMetadata object from a base::Value, or nullopt on failure.
  static std::optional<DlpMetadata> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDlpMetadata object.
  base::Value::Dict ToValue() const;

  // The source URL of the file, if it's been downloaded.
  std::string source_url;

  // True if there is any DLP policy on the file, false otherwise.
  bool is_dlp_restricted;

  // True if the file cannot be accessed by a specific destination, which is
  // passed when collecting the metadata.
  bool is_restricted_for_destination;

};

struct DlpRestrictionDetails {
  DlpRestrictionDetails();
  ~DlpRestrictionDetails();
  DlpRestrictionDetails(const DlpRestrictionDetails&) = delete;
  DlpRestrictionDetails& operator=(const DlpRestrictionDetails&) = delete;
  DlpRestrictionDetails(DlpRestrictionDetails&& rhs) noexcept;
  DlpRestrictionDetails& operator=(DlpRestrictionDetails&& rhs) noexcept;

  // Populates a DlpRestrictionDetails object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DlpRestrictionDetails& out);

  // Populates a DlpRestrictionDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DlpRestrictionDetails& out);

  // Creates a deep copy of DlpRestrictionDetails.
  DlpRestrictionDetails Clone() const;

  // Creates a DlpRestrictionDetails object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<DlpRestrictionDetails> FromValue(const base::Value::Dict& value);

  // Creates a DlpRestrictionDetails object from a base::Value, or nullopt on
  // failure.
  static std::optional<DlpRestrictionDetails> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDlpRestrictionDetails object.
  base::Value::Dict ToValue() const;

  // The level for which the restriction is enforced.
  DlpLevel level;

  // List of URLs for which the restriction is enforced.
  std::vector<std::string> urls;

  // List of components for which the restriction is enforced.
  std::vector<VolumeType> components;

};

struct DialogCallerInformation {
  DialogCallerInformation();
  ~DialogCallerInformation();
  DialogCallerInformation(const DialogCallerInformation&) = delete;
  DialogCallerInformation& operator=(const DialogCallerInformation&) = delete;
  DialogCallerInformation(DialogCallerInformation&& rhs) noexcept;
  DialogCallerInformation& operator=(DialogCallerInformation&& rhs) noexcept;

  // Populates a DialogCallerInformation object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DialogCallerInformation& out);

  // Populates a DialogCallerInformation object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DialogCallerInformation& out);

  // Creates a deep copy of DialogCallerInformation.
  DialogCallerInformation Clone() const;

  // Creates a DialogCallerInformation object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<DialogCallerInformation> FromValue(const base::Value::Dict& value);

  // Creates a DialogCallerInformation object from a base::Value, or nullopt on
  // failure.
  static std::optional<DialogCallerInformation> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDialogCallerInformation object.
  base::Value::Dict ToValue() const;

  // The URL of the caller.
  std::optional<std::string> url;

  // The component type of the caller.
  VolumeType component;

};

struct MountableGuest {
  MountableGuest();
  ~MountableGuest();
  MountableGuest(const MountableGuest&) = delete;
  MountableGuest& operator=(const MountableGuest&) = delete;
  MountableGuest(MountableGuest&& rhs) noexcept;
  MountableGuest& operator=(MountableGuest&& rhs) noexcept;

  // Populates a MountableGuest object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MountableGuest& out);

  // Populates a MountableGuest object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, MountableGuest& out);

  // Creates a deep copy of MountableGuest.
  MountableGuest Clone() const;

  // Creates a MountableGuest object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<MountableGuest> FromValue(const base::Value::Dict& value);

  // Creates a MountableGuest object from a base::Value, or nullopt on failure.
  static std::optional<MountableGuest> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMountableGuest object.
  base::Value::Dict ToValue() const;

  // The ID of this guest, used to identify it in calls to the backend.
  int id;

  // The localised display name of this guest as e.g. shown in the sidebar.
  std::string display_name;

  // The type of the VM backing this guest.
  VmType vm_type;

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

  // The entry that the trashed file should be restored to. This does not exist
  // but is used to identify whether the parent location still exists and identify
  // the file name to restore to.
  struct RestoreEntry {
    RestoreEntry();
    ~RestoreEntry();
    RestoreEntry(const RestoreEntry&) = delete;
    RestoreEntry& operator=(const RestoreEntry&) = delete;
    RestoreEntry(RestoreEntry&& rhs) noexcept;
    RestoreEntry& operator=(RestoreEntry&& rhs) noexcept;

    // Populates a RestoreEntry object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, RestoreEntry& out);

    // Populates a RestoreEntry object from a Dict& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value::Dict& value, RestoreEntry& out);

    // Creates a deep copy of RestoreEntry.
    RestoreEntry Clone() const;

    // Creates a RestoreEntry object from a base::Value::Dict, or nullopt on
    // failure.
    static std::optional<RestoreEntry> FromValue(const base::Value::Dict& value);

    // Creates a RestoreEntry object from a base::Value, or nullopt on failure.
    static std::optional<RestoreEntry> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisRestoreEntry object.
    base::Value::Dict ToValue() const;

    base::Value::Dict additional_properties;
  };


  // The entry that the trashed file should be restored to. This does not exist
  // but is used to identify whether the parent location still exists and identify
  // the file name to restore to.
  RestoreEntry restore_entry;

  // The file name for the .trashinfo.
  std::string trash_info_file_name;

  // The date the file was originally deleted.
  double deletion_date;

};

struct BulkPinProgress {
  BulkPinProgress();
  ~BulkPinProgress();
  BulkPinProgress(const BulkPinProgress&) = delete;
  BulkPinProgress& operator=(const BulkPinProgress&) = delete;
  BulkPinProgress(BulkPinProgress&& rhs) noexcept;
  BulkPinProgress& operator=(BulkPinProgress&& rhs) noexcept;

  // Populates a BulkPinProgress object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, BulkPinProgress& out);

  // Populates a BulkPinProgress object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, BulkPinProgress& out);

  // Creates a deep copy of BulkPinProgress.
  BulkPinProgress Clone() const;

  // Creates a BulkPinProgress object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<BulkPinProgress> FromValue(const base::Value::Dict& value);

  // Creates a BulkPinProgress object from a base::Value, or nullopt on failure.
  static std::optional<BulkPinProgress> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisBulkPinProgress object.
  base::Value::Dict ToValue() const;

  // The stage the bulk pin manager is in.
  BulkPinStage stage;

  // Estimated amount of free space on the stateful partition in bytes.
  double free_space_bytes;

  // Estimated amount of free space required in order to successfully complete
  // pinning.
  double required_space_bytes;

  // Estimated amount of bytes remaining to be downloaded in order to successfully
  // complete pinning.
  double bytes_to_pin;

  // Bytes that have been downloaded so far.
  double pinned_bytes;

  // Total number of files to pin.
  int files_to_pin;

  // Show the total number of files enumerated during the Listing files stage.
  int listed_files;

  // Estimated time remaining to pin all the `bytesToPin`.
  double remaining_seconds;

  // Should the bulk-pinning manager actually pin files, or should it stop after
  // checking the space requirements?
  bool should_pin;

  // Has the bulk-pinning manager ever emptied its set of tracked items?
  bool emptied_queue;

};


//
// Functions
//

namespace CancelDialog {

}  // namespace CancelDialog

namespace GetStrings {

namespace Results {

struct Result {
  Result();
  ~Result();
  Result(const Result&) = delete;
  Result& operator=(const Result&) = delete;
  Result(Result&& rhs) noexcept;
  Result& operator=(Result&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisResult object.
  base::Value::Dict ToValue() const;

  base::Value::Dict additional_properties;
};


base::Value::List Create(const Result& result);
}  // namespace Results

}  // namespace GetStrings

namespace EnableExternalFileScheme {

}  // namespace EnableExternalFileScheme

namespace GrantAccess {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::vector<std::string> entry_urls;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace GrantAccess

namespace SelectFiles {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::vector<std::string> selected_paths;

  bool should_return_local_path;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SelectFiles

namespace SelectFile {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string selected_path;

  int index;

  bool for_opening;

  bool should_return_local_path;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SelectFile

namespace AddMount {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string file_url;

  std::optional<std::string> password;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& source_path);
}  // namespace Results

}  // namespace AddMount

namespace CancelMounting {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string file_url;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace CancelMounting

namespace RemoveMount {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string volume_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RemoveMount

namespace GetVolumeMetadataList {

namespace Results {

base::Value::List Create(const std::vector<VolumeMetadata>& volume_metadata_list);
}  // namespace Results

}  // namespace GetVolumeMetadataList

namespace GetDlpRestrictionDetails {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string source_url;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<DlpRestrictionDetails>& restriction_details);
}  // namespace Results

}  // namespace GetDlpRestrictionDetails

namespace GetDlpBlockedComponents {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string source_url;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<VolumeType>& blocked_components);
}  // namespace Results

}  // namespace GetDlpBlockedComponents

namespace GetDialogCaller {

namespace Results {

base::Value::List Create(const DialogCallerInformation& caller);
}  // namespace Results

}  // namespace GetDialogCaller

namespace GetSizeStats {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string volume_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const MountPointSizeStats& size_stats);
}  // namespace Results

}  // namespace GetSizeStats

namespace FormatVolume {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string volume_id;

  FormatFileSystemType filesystem;

  std::string volume_label;


 private:
  Params();
};

}  // namespace FormatVolume

namespace SinglePartitionFormat {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string device_storage_path;

  FormatFileSystemType filesystem;

  std::string volume_label;


 private:
  Params();
};

}  // namespace SinglePartitionFormat

namespace RenameVolume {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string volume_id;

  std::string new_name;


 private:
  Params();
};

}  // namespace RenameVolume

namespace GetPreferences {

namespace Results {

base::Value::List Create(const Preferences& result);
}  // namespace Results

}  // namespace GetPreferences

namespace SetPreferences {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  PreferencesChange change_info;


 private:
  Params();
};

}  // namespace SetPreferences

namespace SearchDrive {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  SearchParams search_params;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const SearchDriveResponse& response);
}  // namespace Results

}  // namespace SearchDrive

namespace SearchDriveMetadata {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  SearchMetadataParams search_params;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<DriveMetadataSearchResult>& results);
}  // namespace Results

}  // namespace SearchDriveMetadata

namespace SearchFilesByHashes {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string volume_id;

  std::vector<std::string> hash_list;


 private:
  Params();
};

namespace Results {

struct Paths {
  Paths();
  ~Paths();
  Paths(const Paths&) = delete;
  Paths& operator=(const Paths&) = delete;
  Paths(Paths&& rhs) noexcept;
  Paths& operator=(Paths&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPaths object.
  base::Value::Dict ToValue() const;

  base::Value::Dict additional_properties;
};


base::Value::List Create(const Paths& paths);
}  // namespace Results

}  // namespace SearchFilesByHashes

namespace GetDeviceConnectionState {

namespace Results {

base::Value::List Create(const DeviceConnectionState& result);
}  // namespace Results

}  // namespace GetDeviceConnectionState

namespace GetDriveConnectionState {

namespace Results {

base::Value::List Create(const DriveConnectionState& result);
}  // namespace Results

}  // namespace GetDriveConnectionState

namespace Zoom {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  ZoomOperationType operation;


 private:
  Params();
};

}  // namespace Zoom

namespace GetProfiles {

namespace Results {

base::Value::List Create(const ProfilesResponse& response);
}  // namespace Results

}  // namespace GetProfiles

namespace OpenInspector {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  InspectionType type;


 private:
  Params();
};

}  // namespace OpenInspector

namespace OpenSettingsSubpage {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string sub_page;


 private:
  Params();
};

}  // namespace OpenSettingsSubpage

namespace GetProviders {

namespace Results {

base::Value::List Create(const std::vector<Provider>& extensions);
}  // namespace Results

}  // namespace GetProviders

namespace AddProvidedFileSystem {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string provider_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace AddProvidedFileSystem

namespace ConfigureVolume {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string volume_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ConfigureVolume

namespace MountCrostini {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace MountCrostini

namespace GetAndroidPickerApps {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::vector<std::string> extensions;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<AndroidApp>& apps);
}  // namespace Results

}  // namespace GetAndroidPickerApps

namespace SelectAndroidPickerApp {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  AndroidApp android_app;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SelectAndroidPickerApp

namespace GetHoldingSpaceState {

namespace Results {

base::Value::List Create(const HoldingSpaceState& state);
}  // namespace Results

}  // namespace GetHoldingSpaceState

namespace IsTabletModeEnabled {

namespace Results {

base::Value::List Create(bool result);
}  // namespace Results

}  // namespace IsTabletModeEnabled

namespace NotifyDriveDialogResult {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  DriveDialogResult result;


 private:
  Params();
};

}  // namespace NotifyDriveDialogResult

namespace OpenURL {

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

}  // namespace OpenURL

namespace OpenWindow {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  OpenWindowParams params;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool result);
}  // namespace Results

}  // namespace OpenWindow

namespace SendFeedback {

}  // namespace SendFeedback

namespace CancelIOTask {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int task_id;


 private:
  Params();
};

}  // namespace CancelIOTask

namespace ResumeIOTask {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int task_id;

  ResumeParams params;


 private:
  Params();
};

}  // namespace ResumeIOTask

namespace DismissIOTask {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int task_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace DismissIOTask

namespace ShowPolicyDialog {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int task_id;

  PolicyDialogType type;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ShowPolicyDialog

namespace ProgressPausedTasks {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ProgressPausedTasks

namespace ListMountableGuests {

namespace Results {

base::Value::List Create(const std::vector<MountableGuest>& guest);
}  // namespace Results

}  // namespace ListMountableGuests

namespace MountGuest {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace MountGuest

namespace PollDriveHostedFilePinStates {

}  // namespace PollDriveHostedFilePinStates

namespace OpenManageSyncSettings {

}  // namespace OpenManageSyncSettings

namespace GetBulkPinProgress {

namespace Results {

base::Value::List Create(const BulkPinProgress& progress);
}  // namespace Results

}  // namespace GetBulkPinProgress

namespace CalculateBulkPinRequiredSpace {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace CalculateBulkPinRequiredSpace

//
// Events
//

namespace OnMountCompleted {

extern const char kEventName[];  // "fileManagerPrivate.onMountCompleted"

base::Value::List Create(const MountCompletedEvent& event);
}  // namespace OnMountCompleted

namespace OnFileTransfersUpdated {

extern const char kEventName[];  // "fileManagerPrivate.onFileTransfersUpdated"

base::Value::List Create(const FileTransferStatus& event);
}  // namespace OnFileTransfersUpdated

namespace OnPinTransfersUpdated {

extern const char kEventName[];  // "fileManagerPrivate.onPinTransfersUpdated"

base::Value::List Create(const FileTransferStatus& event);
}  // namespace OnPinTransfersUpdated

namespace OnIndividualFileTransfersUpdated {

extern const char kEventName[];  // "fileManagerPrivate.onIndividualFileTransfersUpdated"

base::Value::List Create(const std::vector<SyncState>& event);
}  // namespace OnIndividualFileTransfersUpdated

namespace OnDirectoryChanged {

extern const char kEventName[];  // "fileManagerPrivate.onDirectoryChanged"

base::Value::List Create(const FileWatchEvent& event);
}  // namespace OnDirectoryChanged

namespace OnPreferencesChanged {

extern const char kEventName[];  // "fileManagerPrivate.onPreferencesChanged"

base::Value::List Create();
}  // namespace OnPreferencesChanged

namespace OnDeviceConnectionStatusChanged {

extern const char kEventName[];  // "fileManagerPrivate.onDeviceConnectionStatusChanged"

base::Value::List Create(const DeviceConnectionState& state);
}  // namespace OnDeviceConnectionStatusChanged

namespace OnDriveConnectionStatusChanged {

extern const char kEventName[];  // "fileManagerPrivate.onDriveConnectionStatusChanged"

base::Value::List Create();
}  // namespace OnDriveConnectionStatusChanged

namespace OnDeviceChanged {

extern const char kEventName[];  // "fileManagerPrivate.onDeviceChanged"

base::Value::List Create(const DeviceEvent& event);
}  // namespace OnDeviceChanged

namespace OnDriveSyncError {

extern const char kEventName[];  // "fileManagerPrivate.onDriveSyncError"

base::Value::List Create(const DriveSyncErrorEvent& event);
}  // namespace OnDriveSyncError

namespace OnDriveConfirmDialog {

extern const char kEventName[];  // "fileManagerPrivate.onDriveConfirmDialog"

base::Value::List Create(const DriveConfirmDialogEvent& event);
}  // namespace OnDriveConfirmDialog

namespace OnAppsUpdated {

extern const char kEventName[];  // "fileManagerPrivate.onAppsUpdated"

base::Value::List Create();
}  // namespace OnAppsUpdated

namespace OnCrostiniChanged {

extern const char kEventName[];  // "fileManagerPrivate.onCrostiniChanged"

base::Value::List Create(const CrostiniEvent& event);
}  // namespace OnCrostiniChanged

namespace OnTabletModeChanged {

extern const char kEventName[];  // "fileManagerPrivate.onTabletModeChanged"

base::Value::List Create(bool enabled);
}  // namespace OnTabletModeChanged

namespace OnIOTaskProgressStatus {

extern const char kEventName[];  // "fileManagerPrivate.onIOTaskProgressStatus"

base::Value::List Create(const ProgressStatus& status);
}  // namespace OnIOTaskProgressStatus

namespace OnMountableGuestsChanged {

extern const char kEventName[];  // "fileManagerPrivate.onMountableGuestsChanged"

base::Value::List Create(const std::vector<MountableGuest>& guests);
}  // namespace OnMountableGuestsChanged

namespace OnBulkPinProgress {

extern const char kEventName[];  // "fileManagerPrivate.onBulkPinProgress"

base::Value::List Create(const BulkPinProgress& progress);
}  // namespace OnBulkPinProgress

}  // namespace file_manager_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_FILE_MANAGER_PRIVATE_H__
