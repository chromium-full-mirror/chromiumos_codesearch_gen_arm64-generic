// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/file_manager_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/file_manager_private.h"

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
namespace file_manager_private {
//
// Types
//

const char* ToString(VolumeType enum_param) {
  switch (enum_param) {
    case VolumeType::kDrive:
      return "drive";
    case VolumeType::kDownloads:
      return "downloads";
    case VolumeType::kRemovable:
      return "removable";
    case VolumeType::kArchive:
      return "archive";
    case VolumeType::kProvided:
      return "provided";
    case VolumeType::kMtp:
      return "mtp";
    case VolumeType::kMediaView:
      return "media_view";
    case VolumeType::kCrostini:
      return "crostini";
    case VolumeType::kAndroidFiles:
      return "android_files";
    case VolumeType::kDocumentsProvider:
      return "documents_provider";
    case VolumeType::kTesting:
      return "testing";
    case VolumeType::kSmb:
      return "smb";
    case VolumeType::kSystemInternal:
      return "system_internal";
    case VolumeType::kGuestOs:
      return "guest_os";
    case VolumeType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

VolumeType ParseVolumeType(base::StringPiece enum_string) {
  if (enum_string == "drive")
    return VolumeType::kDrive;
  if (enum_string == "downloads")
    return VolumeType::kDownloads;
  if (enum_string == "removable")
    return VolumeType::kRemovable;
  if (enum_string == "archive")
    return VolumeType::kArchive;
  if (enum_string == "provided")
    return VolumeType::kProvided;
  if (enum_string == "mtp")
    return VolumeType::kMtp;
  if (enum_string == "media_view")
    return VolumeType::kMediaView;
  if (enum_string == "crostini")
    return VolumeType::kCrostini;
  if (enum_string == "android_files")
    return VolumeType::kAndroidFiles;
  if (enum_string == "documents_provider")
    return VolumeType::kDocumentsProvider;
  if (enum_string == "testing")
    return VolumeType::kTesting;
  if (enum_string == "smb")
    return VolumeType::kSmb;
  if (enum_string == "system_internal")
    return VolumeType::kSystemInternal;
  if (enum_string == "guest_os")
    return VolumeType::kGuestOs;
  return VolumeType::kNone;
}

std::u16string GetVolumeTypeParseError(base::StringPiece enum_string) {
  return u"expected \"drive\" or \"downloads\" or \"removable\" or \"archive\" or \"provided\" or \"mtp\" or \"media_view\" or \"crostini\" or \"android_files\" or \"documents_provider\" or \"testing\" or \"smb\" or \"system_internal\" or \"guest_os\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DeviceType enum_param) {
  switch (enum_param) {
    case DeviceType::kUsb:
      return "usb";
    case DeviceType::kSd:
      return "sd";
    case DeviceType::kOptical:
      return "optical";
    case DeviceType::kMobile:
      return "mobile";
    case DeviceType::kUnknown:
      return "unknown";
    case DeviceType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DeviceType ParseDeviceType(base::StringPiece enum_string) {
  if (enum_string == "usb")
    return DeviceType::kUsb;
  if (enum_string == "sd")
    return DeviceType::kSd;
  if (enum_string == "optical")
    return DeviceType::kOptical;
  if (enum_string == "mobile")
    return DeviceType::kMobile;
  if (enum_string == "unknown")
    return DeviceType::kUnknown;
  return DeviceType::kNone;
}

std::u16string GetDeviceTypeParseError(base::StringPiece enum_string) {
  return u"expected \"usb\" or \"sd\" or \"optical\" or \"mobile\" or \"unknown\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DeviceConnectionState enum_param) {
  switch (enum_param) {
    case DeviceConnectionState::kOffline:
      return "OFFLINE";
    case DeviceConnectionState::kOnline:
      return "ONLINE";
    case DeviceConnectionState::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DeviceConnectionState ParseDeviceConnectionState(base::StringPiece enum_string) {
  if (enum_string == "OFFLINE")
    return DeviceConnectionState::kOffline;
  if (enum_string == "ONLINE")
    return DeviceConnectionState::kOnline;
  return DeviceConnectionState::kNone;
}

std::u16string GetDeviceConnectionStateParseError(base::StringPiece enum_string) {
  return u"expected \"OFFLINE\" or \"ONLINE\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DriveConnectionStateType enum_param) {
  switch (enum_param) {
    case DriveConnectionStateType::kOffline:
      return "OFFLINE";
    case DriveConnectionStateType::kMetered:
      return "METERED";
    case DriveConnectionStateType::kOnline:
      return "ONLINE";
    case DriveConnectionStateType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DriveConnectionStateType ParseDriveConnectionStateType(base::StringPiece enum_string) {
  if (enum_string == "OFFLINE")
    return DriveConnectionStateType::kOffline;
  if (enum_string == "METERED")
    return DriveConnectionStateType::kMetered;
  if (enum_string == "ONLINE")
    return DriveConnectionStateType::kOnline;
  return DriveConnectionStateType::kNone;
}

std::u16string GetDriveConnectionStateTypeParseError(base::StringPiece enum_string) {
  return u"expected \"OFFLINE\" or \"METERED\" or \"ONLINE\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DriveOfflineReason enum_param) {
  switch (enum_param) {
    case DriveOfflineReason::kNotReady:
      return "NOT_READY";
    case DriveOfflineReason::kNoNetwork:
      return "NO_NETWORK";
    case DriveOfflineReason::kNoService:
      return "NO_SERVICE";
    case DriveOfflineReason::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DriveOfflineReason ParseDriveOfflineReason(base::StringPiece enum_string) {
  if (enum_string == "NOT_READY")
    return DriveOfflineReason::kNotReady;
  if (enum_string == "NO_NETWORK")
    return DriveOfflineReason::kNoNetwork;
  if (enum_string == "NO_SERVICE")
    return DriveOfflineReason::kNoService;
  return DriveOfflineReason::kNone;
}

std::u16string GetDriveOfflineReasonParseError(base::StringPiece enum_string) {
  return u"expected \"NOT_READY\" or \"NO_NETWORK\" or \"NO_SERVICE\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(MountContext enum_param) {
  switch (enum_param) {
    case MountContext::kUser:
      return "user";
    case MountContext::kAuto:
      return "auto";
    case MountContext::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

MountContext ParseMountContext(base::StringPiece enum_string) {
  if (enum_string == "user")
    return MountContext::kUser;
  if (enum_string == "auto")
    return MountContext::kAuto;
  return MountContext::kNone;
}

std::u16string GetMountContextParseError(base::StringPiece enum_string) {
  return u"expected \"user\" or \"auto\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(MountCompletedEventType enum_param) {
  switch (enum_param) {
    case MountCompletedEventType::kMount:
      return "mount";
    case MountCompletedEventType::kUnmount:
      return "unmount";
    case MountCompletedEventType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

MountCompletedEventType ParseMountCompletedEventType(base::StringPiece enum_string) {
  if (enum_string == "mount")
    return MountCompletedEventType::kMount;
  if (enum_string == "unmount")
    return MountCompletedEventType::kUnmount;
  return MountCompletedEventType::kNone;
}

std::u16string GetMountCompletedEventTypeParseError(base::StringPiece enum_string) {
  return u"expected \"mount\" or \"unmount\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(MountError enum_param) {
  switch (enum_param) {
    case MountError::kSuccess:
      return "success";
    case MountError::kInProgress:
      return "in_progress";
    case MountError::kUnknownError:
      return "unknown_error";
    case MountError::kInternalError:
      return "internal_error";
    case MountError::kInvalidArgument:
      return "invalid_argument";
    case MountError::kInvalidPath:
      return "invalid_path";
    case MountError::kPathAlreadyMounted:
      return "path_already_mounted";
    case MountError::kPathNotMounted:
      return "path_not_mounted";
    case MountError::kDirectoryCreationFailed:
      return "directory_creation_failed";
    case MountError::kInvalidMountOptions:
      return "invalid_mount_options";
    case MountError::kInsufficientPermissions:
      return "insufficient_permissions";
    case MountError::kMountProgramNotFound:
      return "mount_program_not_found";
    case MountError::kMountProgramFailed:
      return "mount_program_failed";
    case MountError::kInvalidDevicePath:
      return "invalid_device_path";
    case MountError::kUnknownFilesystem:
      return "unknown_filesystem";
    case MountError::kUnsupportedFilesystem:
      return "unsupported_filesystem";
    case MountError::kNeedPassword:
      return "need_password";
    case MountError::kCancelled:
      return "cancelled";
    case MountError::kBusy:
      return "busy";
    case MountError::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

MountError ParseMountError(base::StringPiece enum_string) {
  if (enum_string == "success")
    return MountError::kSuccess;
  if (enum_string == "in_progress")
    return MountError::kInProgress;
  if (enum_string == "unknown_error")
    return MountError::kUnknownError;
  if (enum_string == "internal_error")
    return MountError::kInternalError;
  if (enum_string == "invalid_argument")
    return MountError::kInvalidArgument;
  if (enum_string == "invalid_path")
    return MountError::kInvalidPath;
  if (enum_string == "path_already_mounted")
    return MountError::kPathAlreadyMounted;
  if (enum_string == "path_not_mounted")
    return MountError::kPathNotMounted;
  if (enum_string == "directory_creation_failed")
    return MountError::kDirectoryCreationFailed;
  if (enum_string == "invalid_mount_options")
    return MountError::kInvalidMountOptions;
  if (enum_string == "insufficient_permissions")
    return MountError::kInsufficientPermissions;
  if (enum_string == "mount_program_not_found")
    return MountError::kMountProgramNotFound;
  if (enum_string == "mount_program_failed")
    return MountError::kMountProgramFailed;
  if (enum_string == "invalid_device_path")
    return MountError::kInvalidDevicePath;
  if (enum_string == "unknown_filesystem")
    return MountError::kUnknownFilesystem;
  if (enum_string == "unsupported_filesystem")
    return MountError::kUnsupportedFilesystem;
  if (enum_string == "need_password")
    return MountError::kNeedPassword;
  if (enum_string == "cancelled")
    return MountError::kCancelled;
  if (enum_string == "busy")
    return MountError::kBusy;
  return MountError::kNone;
}

std::u16string GetMountErrorParseError(base::StringPiece enum_string) {
  return u"expected \"success\" or \"in_progress\" or \"unknown_error\" or \"internal_error\" or \"invalid_argument\" or \"invalid_path\" or \"path_already_mounted\" or \"path_not_mounted\" or \"directory_creation_failed\" or \"invalid_mount_options\" or \"insufficient_permissions\" or \"mount_program_not_found\" or \"mount_program_failed\" or \"invalid_device_path\" or \"unknown_filesystem\" or \"unsupported_filesystem\" or \"need_password\" or \"cancelled\" or \"busy\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(FormatFileSystemType enum_param) {
  switch (enum_param) {
    case FormatFileSystemType::kVfat:
      return "vfat";
    case FormatFileSystemType::kExfat:
      return "exfat";
    case FormatFileSystemType::kNtfs:
      return "ntfs";
    case FormatFileSystemType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

FormatFileSystemType ParseFormatFileSystemType(base::StringPiece enum_string) {
  if (enum_string == "vfat")
    return FormatFileSystemType::kVfat;
  if (enum_string == "exfat")
    return FormatFileSystemType::kExfat;
  if (enum_string == "ntfs")
    return FormatFileSystemType::kNtfs;
  return FormatFileSystemType::kNone;
}

std::u16string GetFormatFileSystemTypeParseError(base::StringPiece enum_string) {
  return u"expected \"vfat\" or \"exfat\" or \"ntfs\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(TransferState enum_param) {
  switch (enum_param) {
    case TransferState::kInProgress:
      return "in_progress";
    case TransferState::kQueued:
      return "queued";
    case TransferState::kCompleted:
      return "completed";
    case TransferState::kFailed:
      return "failed";
    case TransferState::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

TransferState ParseTransferState(base::StringPiece enum_string) {
  if (enum_string == "in_progress")
    return TransferState::kInProgress;
  if (enum_string == "queued")
    return TransferState::kQueued;
  if (enum_string == "completed")
    return TransferState::kCompleted;
  if (enum_string == "failed")
    return TransferState::kFailed;
  return TransferState::kNone;
}

std::u16string GetTransferStateParseError(base::StringPiece enum_string) {
  return u"expected \"in_progress\" or \"queued\" or \"completed\" or \"failed\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(InstallLinuxPackageStatus enum_param) {
  switch (enum_param) {
    case InstallLinuxPackageStatus::kStarted:
      return "started";
    case InstallLinuxPackageStatus::kFailed:
      return "failed";
    case InstallLinuxPackageStatus::kInstallAlreadyActive:
      return "install_already_active";
    case InstallLinuxPackageStatus::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

InstallLinuxPackageStatus ParseInstallLinuxPackageStatus(base::StringPiece enum_string) {
  if (enum_string == "started")
    return InstallLinuxPackageStatus::kStarted;
  if (enum_string == "failed")
    return InstallLinuxPackageStatus::kFailed;
  if (enum_string == "install_already_active")
    return InstallLinuxPackageStatus::kInstallAlreadyActive;
  return InstallLinuxPackageStatus::kNone;
}

std::u16string GetInstallLinuxPackageStatusParseError(base::StringPiece enum_string) {
  return u"expected \"started\" or \"failed\" or \"install_already_active\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(FileWatchEventType enum_param) {
  switch (enum_param) {
    case FileWatchEventType::kChanged:
      return "changed";
    case FileWatchEventType::kError:
      return "error";
    case FileWatchEventType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

FileWatchEventType ParseFileWatchEventType(base::StringPiece enum_string) {
  if (enum_string == "changed")
    return FileWatchEventType::kChanged;
  if (enum_string == "error")
    return FileWatchEventType::kError;
  return FileWatchEventType::kNone;
}

std::u16string GetFileWatchEventTypeParseError(base::StringPiece enum_string) {
  return u"expected \"changed\" or \"error\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ChangeType enum_param) {
  switch (enum_param) {
    case ChangeType::kAddOrUpdate:
      return "add_or_update";
    case ChangeType::kDelete:
      return "delete";
    case ChangeType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ChangeType ParseChangeType(base::StringPiece enum_string) {
  if (enum_string == "add_or_update")
    return ChangeType::kAddOrUpdate;
  if (enum_string == "delete")
    return ChangeType::kDelete;
  return ChangeType::kNone;
}

std::u16string GetChangeTypeParseError(base::StringPiece enum_string) {
  return u"expected \"add_or_update\" or \"delete\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SearchType enum_param) {
  switch (enum_param) {
    case SearchType::kExcludeDirectories:
      return "EXCLUDE_DIRECTORIES";
    case SearchType::kSharedWithMe:
      return "SHARED_WITH_ME";
    case SearchType::kOffline:
      return "OFFLINE";
    case SearchType::kAll:
      return "ALL";
    case SearchType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

SearchType ParseSearchType(base::StringPiece enum_string) {
  if (enum_string == "EXCLUDE_DIRECTORIES")
    return SearchType::kExcludeDirectories;
  if (enum_string == "SHARED_WITH_ME")
    return SearchType::kSharedWithMe;
  if (enum_string == "OFFLINE")
    return SearchType::kOffline;
  if (enum_string == "ALL")
    return SearchType::kAll;
  return SearchType::kNone;
}

std::u16string GetSearchTypeParseError(base::StringPiece enum_string) {
  return u"expected \"EXCLUDE_DIRECTORIES\" or \"SHARED_WITH_ME\" or \"OFFLINE\" or \"ALL\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ZoomOperationType enum_param) {
  switch (enum_param) {
    case ZoomOperationType::kIn:
      return "in";
    case ZoomOperationType::kOut:
      return "out";
    case ZoomOperationType::kReset:
      return "reset";
    case ZoomOperationType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ZoomOperationType ParseZoomOperationType(base::StringPiece enum_string) {
  if (enum_string == "in")
    return ZoomOperationType::kIn;
  if (enum_string == "out")
    return ZoomOperationType::kOut;
  if (enum_string == "reset")
    return ZoomOperationType::kReset;
  return ZoomOperationType::kNone;
}

std::u16string GetZoomOperationTypeParseError(base::StringPiece enum_string) {
  return u"expected \"in\" or \"out\" or \"reset\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(InspectionType enum_param) {
  switch (enum_param) {
    case InspectionType::kNormal:
      return "normal";
    case InspectionType::kConsole:
      return "console";
    case InspectionType::kElement:
      return "element";
    case InspectionType::kBackground:
      return "background";
    case InspectionType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

InspectionType ParseInspectionType(base::StringPiece enum_string) {
  if (enum_string == "normal")
    return InspectionType::kNormal;
  if (enum_string == "console")
    return InspectionType::kConsole;
  if (enum_string == "element")
    return InspectionType::kElement;
  if (enum_string == "background")
    return InspectionType::kBackground;
  return InspectionType::kNone;
}

std::u16string GetInspectionTypeParseError(base::StringPiece enum_string) {
  return u"expected \"normal\" or \"console\" or \"element\" or \"background\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DeviceEventType enum_param) {
  switch (enum_param) {
    case DeviceEventType::kDisabled:
      return "disabled";
    case DeviceEventType::kRemoved:
      return "removed";
    case DeviceEventType::kHardUnplugged:
      return "hard_unplugged";
    case DeviceEventType::kFormatStart:
      return "format_start";
    case DeviceEventType::kFormatSuccess:
      return "format_success";
    case DeviceEventType::kFormatFail:
      return "format_fail";
    case DeviceEventType::kRenameStart:
      return "rename_start";
    case DeviceEventType::kRenameSuccess:
      return "rename_success";
    case DeviceEventType::kRenameFail:
      return "rename_fail";
    case DeviceEventType::kPartitionStart:
      return "partition_start";
    case DeviceEventType::kPartitionSuccess:
      return "partition_success";
    case DeviceEventType::kPartitionFail:
      return "partition_fail";
    case DeviceEventType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DeviceEventType ParseDeviceEventType(base::StringPiece enum_string) {
  if (enum_string == "disabled")
    return DeviceEventType::kDisabled;
  if (enum_string == "removed")
    return DeviceEventType::kRemoved;
  if (enum_string == "hard_unplugged")
    return DeviceEventType::kHardUnplugged;
  if (enum_string == "format_start")
    return DeviceEventType::kFormatStart;
  if (enum_string == "format_success")
    return DeviceEventType::kFormatSuccess;
  if (enum_string == "format_fail")
    return DeviceEventType::kFormatFail;
  if (enum_string == "rename_start")
    return DeviceEventType::kRenameStart;
  if (enum_string == "rename_success")
    return DeviceEventType::kRenameSuccess;
  if (enum_string == "rename_fail")
    return DeviceEventType::kRenameFail;
  if (enum_string == "partition_start")
    return DeviceEventType::kPartitionStart;
  if (enum_string == "partition_success")
    return DeviceEventType::kPartitionSuccess;
  if (enum_string == "partition_fail")
    return DeviceEventType::kPartitionFail;
  return DeviceEventType::kNone;
}

std::u16string GetDeviceEventTypeParseError(base::StringPiece enum_string) {
  return u"expected \"disabled\" or \"removed\" or \"hard_unplugged\" or \"format_start\" or \"format_success\" or \"format_fail\" or \"rename_start\" or \"rename_success\" or \"rename_fail\" or \"partition_start\" or \"partition_success\" or \"partition_fail\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DriveSyncErrorType enum_param) {
  switch (enum_param) {
    case DriveSyncErrorType::kDeleteWithoutPermission:
      return "delete_without_permission";
    case DriveSyncErrorType::kServiceUnavailable:
      return "service_unavailable";
    case DriveSyncErrorType::kNoServerSpace:
      return "no_server_space";
    case DriveSyncErrorType::kNoServerSpaceOrganization:
      return "no_server_space_organization";
    case DriveSyncErrorType::kNoLocalSpace:
      return "no_local_space";
    case DriveSyncErrorType::kNoSharedDriveSpace:
      return "no_shared_drive_space";
    case DriveSyncErrorType::kMisc:
      return "misc";
    case DriveSyncErrorType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DriveSyncErrorType ParseDriveSyncErrorType(base::StringPiece enum_string) {
  if (enum_string == "delete_without_permission")
    return DriveSyncErrorType::kDeleteWithoutPermission;
  if (enum_string == "service_unavailable")
    return DriveSyncErrorType::kServiceUnavailable;
  if (enum_string == "no_server_space")
    return DriveSyncErrorType::kNoServerSpace;
  if (enum_string == "no_server_space_organization")
    return DriveSyncErrorType::kNoServerSpaceOrganization;
  if (enum_string == "no_local_space")
    return DriveSyncErrorType::kNoLocalSpace;
  if (enum_string == "no_shared_drive_space")
    return DriveSyncErrorType::kNoSharedDriveSpace;
  if (enum_string == "misc")
    return DriveSyncErrorType::kMisc;
  return DriveSyncErrorType::kNone;
}

std::u16string GetDriveSyncErrorTypeParseError(base::StringPiece enum_string) {
  return u"expected \"delete_without_permission\" or \"service_unavailable\" or \"no_server_space\" or \"no_server_space_organization\" or \"no_local_space\" or \"no_shared_drive_space\" or \"misc\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DriveConfirmDialogType enum_param) {
  switch (enum_param) {
    case DriveConfirmDialogType::kEnableDocsOffline:
      return "enable_docs_offline";
    case DriveConfirmDialogType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DriveConfirmDialogType ParseDriveConfirmDialogType(base::StringPiece enum_string) {
  if (enum_string == "enable_docs_offline")
    return DriveConfirmDialogType::kEnableDocsOffline;
  return DriveConfirmDialogType::kNone;
}

std::u16string GetDriveConfirmDialogTypeParseError(base::StringPiece enum_string) {
  return u"expected \"enable_docs_offline\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DriveDialogResult enum_param) {
  switch (enum_param) {
    case DriveDialogResult::kNotDisplayed:
      return "not_displayed";
    case DriveDialogResult::kAccept:
      return "accept";
    case DriveDialogResult::kReject:
      return "reject";
    case DriveDialogResult::kDismiss:
      return "dismiss";
    case DriveDialogResult::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DriveDialogResult ParseDriveDialogResult(base::StringPiece enum_string) {
  if (enum_string == "not_displayed")
    return DriveDialogResult::kNotDisplayed;
  if (enum_string == "accept")
    return DriveDialogResult::kAccept;
  if (enum_string == "reject")
    return DriveDialogResult::kReject;
  if (enum_string == "dismiss")
    return DriveDialogResult::kDismiss;
  return DriveDialogResult::kNone;
}

std::u16string GetDriveDialogResultParseError(base::StringPiece enum_string) {
  return u"expected \"not_displayed\" or \"accept\" or \"reject\" or \"dismiss\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(TaskResult enum_param) {
  switch (enum_param) {
    case TaskResult::kOpened:
      return "opened";
    case TaskResult::kMessageSent:
      return "message_sent";
    case TaskResult::kFailed:
      return "failed";
    case TaskResult::kEmpty:
      return "empty";
    case TaskResult::kFailedPluginVmDirectoryNotShared:
      return "failed_plugin_vm_directory_not_shared";
    case TaskResult::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

TaskResult ParseTaskResult(base::StringPiece enum_string) {
  if (enum_string == "opened")
    return TaskResult::kOpened;
  if (enum_string == "message_sent")
    return TaskResult::kMessageSent;
  if (enum_string == "failed")
    return TaskResult::kFailed;
  if (enum_string == "empty")
    return TaskResult::kEmpty;
  if (enum_string == "failed_plugin_vm_directory_not_shared")
    return TaskResult::kFailedPluginVmDirectoryNotShared;
  return TaskResult::kNone;
}

std::u16string GetTaskResultParseError(base::StringPiece enum_string) {
  return u"expected \"opened\" or \"message_sent\" or \"failed\" or \"empty\" or \"failed_plugin_vm_directory_not_shared\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DriveShareType enum_param) {
  switch (enum_param) {
    case DriveShareType::kCanEdit:
      return "can_edit";
    case DriveShareType::kCanComment:
      return "can_comment";
    case DriveShareType::kCanView:
      return "can_view";
    case DriveShareType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DriveShareType ParseDriveShareType(base::StringPiece enum_string) {
  if (enum_string == "can_edit")
    return DriveShareType::kCanEdit;
  if (enum_string == "can_comment")
    return DriveShareType::kCanComment;
  if (enum_string == "can_view")
    return DriveShareType::kCanView;
  return DriveShareType::kNone;
}

std::u16string GetDriveShareTypeParseError(base::StringPiece enum_string) {
  return u"expected \"can_edit\" or \"can_comment\" or \"can_view\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(EntryPropertyName enum_param) {
  switch (enum_param) {
    case EntryPropertyName::kSize:
      return "size";
    case EntryPropertyName::kModificationTime:
      return "modificationTime";
    case EntryPropertyName::kModificationByMeTime:
      return "modificationByMeTime";
    case EntryPropertyName::kThumbnailUrl:
      return "thumbnailUrl";
    case EntryPropertyName::kCroppedThumbnailUrl:
      return "croppedThumbnailUrl";
    case EntryPropertyName::kImageWidth:
      return "imageWidth";
    case EntryPropertyName::kImageHeight:
      return "imageHeight";
    case EntryPropertyName::kImageRotation:
      return "imageRotation";
    case EntryPropertyName::kPinned:
      return "pinned";
    case EntryPropertyName::kPresent:
      return "present";
    case EntryPropertyName::kHosted:
      return "hosted";
    case EntryPropertyName::kAvailableOffline:
      return "availableOffline";
    case EntryPropertyName::kAvailableWhenMetered:
      return "availableWhenMetered";
    case EntryPropertyName::kDirty:
      return "dirty";
    case EntryPropertyName::kCustomIconUrl:
      return "customIconUrl";
    case EntryPropertyName::kContentMimeType:
      return "contentMimeType";
    case EntryPropertyName::kSharedWithMe:
      return "sharedWithMe";
    case EntryPropertyName::kShared:
      return "shared";
    case EntryPropertyName::kStarred:
      return "starred";
    case EntryPropertyName::kExternalFileUrl:
      return "externalFileUrl";
    case EntryPropertyName::kAlternateUrl:
      return "alternateUrl";
    case EntryPropertyName::kShareUrl:
      return "shareUrl";
    case EntryPropertyName::kCanCopy:
      return "canCopy";
    case EntryPropertyName::kCanDelete:
      return "canDelete";
    case EntryPropertyName::kCanRename:
      return "canRename";
    case EntryPropertyName::kCanAddChildren:
      return "canAddChildren";
    case EntryPropertyName::kCanShare:
      return "canShare";
    case EntryPropertyName::kCanPin:
      return "canPin";
    case EntryPropertyName::kIsMachineRoot:
      return "isMachineRoot";
    case EntryPropertyName::kIsExternalMedia:
      return "isExternalMedia";
    case EntryPropertyName::kIsArbitrarySyncFolder:
      return "isArbitrarySyncFolder";
    case EntryPropertyName::kSyncStatus:
      return "syncStatus";
    case EntryPropertyName::kProgress:
      return "progress";
    case EntryPropertyName::kShortcut:
      return "shortcut";
    case EntryPropertyName::kSyncCompletedTime:
      return "syncCompletedTime";
    case EntryPropertyName::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

EntryPropertyName ParseEntryPropertyName(base::StringPiece enum_string) {
  if (enum_string == "size")
    return EntryPropertyName::kSize;
  if (enum_string == "modificationTime")
    return EntryPropertyName::kModificationTime;
  if (enum_string == "modificationByMeTime")
    return EntryPropertyName::kModificationByMeTime;
  if (enum_string == "thumbnailUrl")
    return EntryPropertyName::kThumbnailUrl;
  if (enum_string == "croppedThumbnailUrl")
    return EntryPropertyName::kCroppedThumbnailUrl;
  if (enum_string == "imageWidth")
    return EntryPropertyName::kImageWidth;
  if (enum_string == "imageHeight")
    return EntryPropertyName::kImageHeight;
  if (enum_string == "imageRotation")
    return EntryPropertyName::kImageRotation;
  if (enum_string == "pinned")
    return EntryPropertyName::kPinned;
  if (enum_string == "present")
    return EntryPropertyName::kPresent;
  if (enum_string == "hosted")
    return EntryPropertyName::kHosted;
  if (enum_string == "availableOffline")
    return EntryPropertyName::kAvailableOffline;
  if (enum_string == "availableWhenMetered")
    return EntryPropertyName::kAvailableWhenMetered;
  if (enum_string == "dirty")
    return EntryPropertyName::kDirty;
  if (enum_string == "customIconUrl")
    return EntryPropertyName::kCustomIconUrl;
  if (enum_string == "contentMimeType")
    return EntryPropertyName::kContentMimeType;
  if (enum_string == "sharedWithMe")
    return EntryPropertyName::kSharedWithMe;
  if (enum_string == "shared")
    return EntryPropertyName::kShared;
  if (enum_string == "starred")
    return EntryPropertyName::kStarred;
  if (enum_string == "externalFileUrl")
    return EntryPropertyName::kExternalFileUrl;
  if (enum_string == "alternateUrl")
    return EntryPropertyName::kAlternateUrl;
  if (enum_string == "shareUrl")
    return EntryPropertyName::kShareUrl;
  if (enum_string == "canCopy")
    return EntryPropertyName::kCanCopy;
  if (enum_string == "canDelete")
    return EntryPropertyName::kCanDelete;
  if (enum_string == "canRename")
    return EntryPropertyName::kCanRename;
  if (enum_string == "canAddChildren")
    return EntryPropertyName::kCanAddChildren;
  if (enum_string == "canShare")
    return EntryPropertyName::kCanShare;
  if (enum_string == "canPin")
    return EntryPropertyName::kCanPin;
  if (enum_string == "isMachineRoot")
    return EntryPropertyName::kIsMachineRoot;
  if (enum_string == "isExternalMedia")
    return EntryPropertyName::kIsExternalMedia;
  if (enum_string == "isArbitrarySyncFolder")
    return EntryPropertyName::kIsArbitrarySyncFolder;
  if (enum_string == "syncStatus")
    return EntryPropertyName::kSyncStatus;
  if (enum_string == "progress")
    return EntryPropertyName::kProgress;
  if (enum_string == "shortcut")
    return EntryPropertyName::kShortcut;
  if (enum_string == "syncCompletedTime")
    return EntryPropertyName::kSyncCompletedTime;
  return EntryPropertyName::kNone;
}

std::u16string GetEntryPropertyNameParseError(base::StringPiece enum_string) {
  return u"expected \"size\" or \"modificationTime\" or \"modificationByMeTime\" or \"thumbnailUrl\" or \"croppedThumbnailUrl\" or \"imageWidth\" or \"imageHeight\" or \"imageRotation\" or \"pinned\" or \"present\" or \"hosted\" or \"availableOffline\" or \"availableWhenMetered\" or \"dirty\" or \"customIconUrl\" or \"contentMimeType\" or \"sharedWithMe\" or \"shared\" or \"starred\" or \"externalFileUrl\" or \"alternateUrl\" or \"shareUrl\" or \"canCopy\" or \"canDelete\" or \"canRename\" or \"canAddChildren\" or \"canShare\" or \"canPin\" or \"isMachineRoot\" or \"isExternalMedia\" or \"isArbitrarySyncFolder\" or \"syncStatus\" or \"progress\" or \"shortcut\" or \"syncCompletedTime\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(Source enum_param) {
  switch (enum_param) {
    case Source::kFile:
      return "file";
    case Source::kDevice:
      return "device";
    case Source::kNetwork:
      return "network";
    case Source::kSystem:
      return "system";
    case Source::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

Source ParseSource(base::StringPiece enum_string) {
  if (enum_string == "file")
    return Source::kFile;
  if (enum_string == "device")
    return Source::kDevice;
  if (enum_string == "network")
    return Source::kNetwork;
  if (enum_string == "system")
    return Source::kSystem;
  return Source::kNone;
}

std::u16string GetSourceParseError(base::StringPiece enum_string) {
  return u"expected \"file\" or \"device\" or \"network\" or \"system\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SourceRestriction enum_param) {
  switch (enum_param) {
    case SourceRestriction::kAnySource:
      return "any_source";
    case SourceRestriction::kNativeSource:
      return "native_source";
    case SourceRestriction::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

SourceRestriction ParseSourceRestriction(base::StringPiece enum_string) {
  if (enum_string == "any_source")
    return SourceRestriction::kAnySource;
  if (enum_string == "native_source")
    return SourceRestriction::kNativeSource;
  return SourceRestriction::kNone;
}

std::u16string GetSourceRestrictionParseError(base::StringPiece enum_string) {
  return u"expected \"any_source\" or \"native_source\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(FileCategory enum_param) {
  switch (enum_param) {
    case FileCategory::kAll:
      return "all";
    case FileCategory::kAudio:
      return "audio";
    case FileCategory::kImage:
      return "image";
    case FileCategory::kVideo:
      return "video";
    case FileCategory::kDocument:
      return "document";
    case FileCategory::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

FileCategory ParseFileCategory(base::StringPiece enum_string) {
  if (enum_string == "all")
    return FileCategory::kAll;
  if (enum_string == "audio")
    return FileCategory::kAudio;
  if (enum_string == "image")
    return FileCategory::kImage;
  if (enum_string == "video")
    return FileCategory::kVideo;
  if (enum_string == "document")
    return FileCategory::kDocument;
  return FileCategory::kNone;
}

std::u16string GetFileCategoryParseError(base::StringPiece enum_string) {
  return u"expected \"all\" or \"audio\" or \"image\" or \"video\" or \"document\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(CrostiniEventType enum_param) {
  switch (enum_param) {
    case CrostiniEventType::kEnable:
      return "enable";
    case CrostiniEventType::kDisable:
      return "disable";
    case CrostiniEventType::kShare:
      return "share";
    case CrostiniEventType::kUnshare:
      return "unshare";
    case CrostiniEventType::kDropFailedPluginVmDirectoryNotShared:
      return "drop_failed_plugin_vm_directory_not_shared";
    case CrostiniEventType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

CrostiniEventType ParseCrostiniEventType(base::StringPiece enum_string) {
  if (enum_string == "enable")
    return CrostiniEventType::kEnable;
  if (enum_string == "disable")
    return CrostiniEventType::kDisable;
  if (enum_string == "share")
    return CrostiniEventType::kShare;
  if (enum_string == "unshare")
    return CrostiniEventType::kUnshare;
  if (enum_string == "drop_failed_plugin_vm_directory_not_shared")
    return CrostiniEventType::kDropFailedPluginVmDirectoryNotShared;
  return CrostiniEventType::kNone;
}

std::u16string GetCrostiniEventTypeParseError(base::StringPiece enum_string) {
  return u"expected \"enable\" or \"disable\" or \"share\" or \"unshare\" or \"drop_failed_plugin_vm_directory_not_shared\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ProviderSource enum_param) {
  switch (enum_param) {
    case ProviderSource::kFile:
      return "file";
    case ProviderSource::kDevice:
      return "device";
    case ProviderSource::kNetwork:
      return "network";
    case ProviderSource::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ProviderSource ParseProviderSource(base::StringPiece enum_string) {
  if (enum_string == "file")
    return ProviderSource::kFile;
  if (enum_string == "device")
    return ProviderSource::kDevice;
  if (enum_string == "network")
    return ProviderSource::kNetwork;
  return ProviderSource::kNone;
}

std::u16string GetProviderSourceParseError(base::StringPiece enum_string) {
  return u"expected \"file\" or \"device\" or \"network\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SharesheetLaunchSource enum_param) {
  switch (enum_param) {
    case SharesheetLaunchSource::kContextMenu:
      return "context_menu";
    case SharesheetLaunchSource::kSharesheetButton:
      return "sharesheet_button";
    case SharesheetLaunchSource::kUnknown:
      return "unknown";
    case SharesheetLaunchSource::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

SharesheetLaunchSource ParseSharesheetLaunchSource(base::StringPiece enum_string) {
  if (enum_string == "context_menu")
    return SharesheetLaunchSource::kContextMenu;
  if (enum_string == "sharesheet_button")
    return SharesheetLaunchSource::kSharesheetButton;
  if (enum_string == "unknown")
    return SharesheetLaunchSource::kUnknown;
  return SharesheetLaunchSource::kNone;
}

std::u16string GetSharesheetLaunchSourceParseError(base::StringPiece enum_string) {
  return u"expected \"context_menu\" or \"sharesheet_button\" or \"unknown\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(IOTaskState enum_param) {
  switch (enum_param) {
    case IOTaskState::kQueued:
      return "queued";
    case IOTaskState::kScanning:
      return "scanning";
    case IOTaskState::kInProgress:
      return "in_progress";
    case IOTaskState::kPaused:
      return "paused";
    case IOTaskState::kSuccess:
      return "success";
    case IOTaskState::kError:
      return "error";
    case IOTaskState::kNeedPassword:
      return "need_password";
    case IOTaskState::kCancelled:
      return "cancelled";
    case IOTaskState::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

IOTaskState ParseIOTaskState(base::StringPiece enum_string) {
  if (enum_string == "queued")
    return IOTaskState::kQueued;
  if (enum_string == "scanning")
    return IOTaskState::kScanning;
  if (enum_string == "in_progress")
    return IOTaskState::kInProgress;
  if (enum_string == "paused")
    return IOTaskState::kPaused;
  if (enum_string == "success")
    return IOTaskState::kSuccess;
  if (enum_string == "error")
    return IOTaskState::kError;
  if (enum_string == "need_password")
    return IOTaskState::kNeedPassword;
  if (enum_string == "cancelled")
    return IOTaskState::kCancelled;
  return IOTaskState::kNone;
}

std::u16string GetIOTaskStateParseError(base::StringPiece enum_string) {
  return u"expected \"queued\" or \"scanning\" or \"in_progress\" or \"paused\" or \"success\" or \"error\" or \"need_password\" or \"cancelled\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(IOTaskType enum_param) {
  switch (enum_param) {
    case IOTaskType::kCopy:
      return "copy";
    case IOTaskType::kDelete:
      return "delete";
    case IOTaskType::kEmptyTrash:
      return "empty_trash";
    case IOTaskType::kExtract:
      return "extract";
    case IOTaskType::kMove:
      return "move";
    case IOTaskType::kRestore:
      return "restore";
    case IOTaskType::kRestoreToDestination:
      return "restore_to_destination";
    case IOTaskType::kTrash:
      return "trash";
    case IOTaskType::kZip:
      return "zip";
    case IOTaskType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

IOTaskType ParseIOTaskType(base::StringPiece enum_string) {
  if (enum_string == "copy")
    return IOTaskType::kCopy;
  if (enum_string == "delete")
    return IOTaskType::kDelete;
  if (enum_string == "empty_trash")
    return IOTaskType::kEmptyTrash;
  if (enum_string == "extract")
    return IOTaskType::kExtract;
  if (enum_string == "move")
    return IOTaskType::kMove;
  if (enum_string == "restore")
    return IOTaskType::kRestore;
  if (enum_string == "restore_to_destination")
    return IOTaskType::kRestoreToDestination;
  if (enum_string == "trash")
    return IOTaskType::kTrash;
  if (enum_string == "zip")
    return IOTaskType::kZip;
  return IOTaskType::kNone;
}

std::u16string GetIOTaskTypeParseError(base::StringPiece enum_string) {
  return u"expected \"copy\" or \"delete\" or \"empty_trash\" or \"extract\" or \"move\" or \"restore\" or \"restore_to_destination\" or \"trash\" or \"zip\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(PolicyErrorType enum_param) {
  switch (enum_param) {
    case PolicyErrorType::kDlp:
      return "dlp";
    case PolicyErrorType::kEnterpriseConnectors:
      return "enterprise_connectors";
    case PolicyErrorType::kDlpWarningTimeout:
      return "dlp_warning_timeout";
    case PolicyErrorType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

PolicyErrorType ParsePolicyErrorType(base::StringPiece enum_string) {
  if (enum_string == "dlp")
    return PolicyErrorType::kDlp;
  if (enum_string == "enterprise_connectors")
    return PolicyErrorType::kEnterpriseConnectors;
  if (enum_string == "dlp_warning_timeout")
    return PolicyErrorType::kDlpWarningTimeout;
  return PolicyErrorType::kNone;
}

std::u16string GetPolicyErrorTypeParseError(base::StringPiece enum_string) {
  return u"expected \"dlp\" or \"enterprise_connectors\" or \"dlp_warning_timeout\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(PolicyDialogType enum_param) {
  switch (enum_param) {
    case PolicyDialogType::kWarning:
      return "warning";
    case PolicyDialogType::kError:
      return "error";
    case PolicyDialogType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

PolicyDialogType ParsePolicyDialogType(base::StringPiece enum_string) {
  if (enum_string == "warning")
    return PolicyDialogType::kWarning;
  if (enum_string == "error")
    return PolicyDialogType::kError;
  return PolicyDialogType::kNone;
}

std::u16string GetPolicyDialogTypeParseError(base::StringPiece enum_string) {
  return u"expected \"warning\" or \"error\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(RecentDateBucket enum_param) {
  switch (enum_param) {
    case RecentDateBucket::kToday:
      return "today";
    case RecentDateBucket::kYesterday:
      return "yesterday";
    case RecentDateBucket::kEarlierThisWeek:
      return "earlier_this_week";
    case RecentDateBucket::kEarlierThisMonth:
      return "earlier_this_month";
    case RecentDateBucket::kEarlierThisYear:
      return "earlier_this_year";
    case RecentDateBucket::kOlder:
      return "older";
    case RecentDateBucket::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

RecentDateBucket ParseRecentDateBucket(base::StringPiece enum_string) {
  if (enum_string == "today")
    return RecentDateBucket::kToday;
  if (enum_string == "yesterday")
    return RecentDateBucket::kYesterday;
  if (enum_string == "earlier_this_week")
    return RecentDateBucket::kEarlierThisWeek;
  if (enum_string == "earlier_this_month")
    return RecentDateBucket::kEarlierThisMonth;
  if (enum_string == "earlier_this_year")
    return RecentDateBucket::kEarlierThisYear;
  if (enum_string == "older")
    return RecentDateBucket::kOlder;
  return RecentDateBucket::kNone;
}

std::u16string GetRecentDateBucketParseError(base::StringPiece enum_string) {
  return u"expected \"today\" or \"yesterday\" or \"earlier_this_week\" or \"earlier_this_month\" or \"earlier_this_year\" or \"older\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(VmType enum_param) {
  switch (enum_param) {
    case VmType::kTermina:
      return "termina";
    case VmType::kPluginVm:
      return "plugin_vm";
    case VmType::kBorealis:
      return "borealis";
    case VmType::kBruschetta:
      return "bruschetta";
    case VmType::kArcvm:
      return "arcvm";
    case VmType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

VmType ParseVmType(base::StringPiece enum_string) {
  if (enum_string == "termina")
    return VmType::kTermina;
  if (enum_string == "plugin_vm")
    return VmType::kPluginVm;
  if (enum_string == "borealis")
    return VmType::kBorealis;
  if (enum_string == "bruschetta")
    return VmType::kBruschetta;
  if (enum_string == "arcvm")
    return VmType::kArcvm;
  return VmType::kNone;
}

std::u16string GetVmTypeParseError(base::StringPiece enum_string) {
  return u"expected \"termina\" or \"plugin_vm\" or \"borealis\" or \"bruschetta\" or \"arcvm\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(UserType enum_param) {
  switch (enum_param) {
    case UserType::kUnmanaged:
      return "unmanaged";
    case UserType::kOrganization:
      return "organization";
    case UserType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

UserType ParseUserType(base::StringPiece enum_string) {
  if (enum_string == "unmanaged")
    return UserType::kUnmanaged;
  if (enum_string == "organization")
    return UserType::kOrganization;
  return UserType::kNone;
}

std::u16string GetUserTypeParseError(base::StringPiece enum_string) {
  return u"expected \"unmanaged\" or \"organization\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DlpLevel enum_param) {
  switch (enum_param) {
    case DlpLevel::kReport:
      return "report";
    case DlpLevel::kWarn:
      return "warn";
    case DlpLevel::kBlock:
      return "block";
    case DlpLevel::kAllow:
      return "allow";
    case DlpLevel::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DlpLevel ParseDlpLevel(base::StringPiece enum_string) {
  if (enum_string == "report")
    return DlpLevel::kReport;
  if (enum_string == "warn")
    return DlpLevel::kWarn;
  if (enum_string == "block")
    return DlpLevel::kBlock;
  if (enum_string == "allow")
    return DlpLevel::kAllow;
  return DlpLevel::kNone;
}

std::u16string GetDlpLevelParseError(base::StringPiece enum_string) {
  return u"expected \"report\" or \"warn\" or \"block\" or \"allow\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SyncStatus enum_param) {
  switch (enum_param) {
    case SyncStatus::kNotFound:
      return "not_found";
    case SyncStatus::kQueued:
      return "queued";
    case SyncStatus::kInProgress:
      return "in_progress";
    case SyncStatus::kCompleted:
      return "completed";
    case SyncStatus::kError:
      return "error";
    case SyncStatus::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

SyncStatus ParseSyncStatus(base::StringPiece enum_string) {
  if (enum_string == "not_found")
    return SyncStatus::kNotFound;
  if (enum_string == "queued")
    return SyncStatus::kQueued;
  if (enum_string == "in_progress")
    return SyncStatus::kInProgress;
  if (enum_string == "completed")
    return SyncStatus::kCompleted;
  if (enum_string == "error")
    return SyncStatus::kError;
  return SyncStatus::kNone;
}

std::u16string GetSyncStatusParseError(base::StringPiece enum_string) {
  return u"expected \"not_found\" or \"queued\" or \"in_progress\" or \"completed\" or \"error\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(PolicyDefaultHandlerStatus enum_param) {
  switch (enum_param) {
    case PolicyDefaultHandlerStatus::kDefaultHandlerAssignedByPolicy:
      return "default_handler_assigned_by_policy";
    case PolicyDefaultHandlerStatus::kIncorrectAssignment:
      return "incorrect_assignment";
    case PolicyDefaultHandlerStatus::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

PolicyDefaultHandlerStatus ParsePolicyDefaultHandlerStatus(base::StringPiece enum_string) {
  if (enum_string == "default_handler_assigned_by_policy")
    return PolicyDefaultHandlerStatus::kDefaultHandlerAssignedByPolicy;
  if (enum_string == "incorrect_assignment")
    return PolicyDefaultHandlerStatus::kIncorrectAssignment;
  return PolicyDefaultHandlerStatus::kNone;
}

std::u16string GetPolicyDefaultHandlerStatusParseError(base::StringPiece enum_string) {
  return u"expected \"default_handler_assigned_by_policy\" or \"incorrect_assignment\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(BulkPinStage enum_param) {
  switch (enum_param) {
    case BulkPinStage::kStopped:
      return "stopped";
    case BulkPinStage::kPausedOffline:
      return "paused_offline";
    case BulkPinStage::kPausedBatterySaver:
      return "paused_battery_saver";
    case BulkPinStage::kGettingFreeSpace:
      return "getting_free_space";
    case BulkPinStage::kListingFiles:
      return "listing_files";
    case BulkPinStage::kSyncing:
      return "syncing";
    case BulkPinStage::kSuccess:
      return "success";
    case BulkPinStage::kNotEnoughSpace:
      return "not_enough_space";
    case BulkPinStage::kCannotGetFreeSpace:
      return "cannot_get_free_space";
    case BulkPinStage::kCannotListFiles:
      return "cannot_list_files";
    case BulkPinStage::kCannotEnableDocsOffline:
      return "cannot_enable_docs_offline";
    case BulkPinStage::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

BulkPinStage ParseBulkPinStage(base::StringPiece enum_string) {
  if (enum_string == "stopped")
    return BulkPinStage::kStopped;
  if (enum_string == "paused_offline")
    return BulkPinStage::kPausedOffline;
  if (enum_string == "paused_battery_saver")
    return BulkPinStage::kPausedBatterySaver;
  if (enum_string == "getting_free_space")
    return BulkPinStage::kGettingFreeSpace;
  if (enum_string == "listing_files")
    return BulkPinStage::kListingFiles;
  if (enum_string == "syncing")
    return BulkPinStage::kSyncing;
  if (enum_string == "success")
    return BulkPinStage::kSuccess;
  if (enum_string == "not_enough_space")
    return BulkPinStage::kNotEnoughSpace;
  if (enum_string == "cannot_get_free_space")
    return BulkPinStage::kCannotGetFreeSpace;
  if (enum_string == "cannot_list_files")
    return BulkPinStage::kCannotListFiles;
  if (enum_string == "cannot_enable_docs_offline")
    return BulkPinStage::kCannotEnableDocsOffline;
  return BulkPinStage::kNone;
}

std::u16string GetBulkPinStageParseError(base::StringPiece enum_string) {
  return u"expected \"stopped\" or \"paused_offline\" or \"paused_battery_saver\" or \"getting_free_space\" or \"listing_files\" or \"syncing\" or \"success\" or \"not_enough_space\" or \"cannot_get_free_space\" or \"cannot_list_files\" or \"cannot_enable_docs_offline\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


FileTaskDescriptor::FileTaskDescriptor()
 {}

FileTaskDescriptor::~FileTaskDescriptor() = default;
FileTaskDescriptor::FileTaskDescriptor(FileTaskDescriptor&& rhs) noexcept = default;
FileTaskDescriptor& FileTaskDescriptor::operator=(FileTaskDescriptor&& rhs) noexcept = default;
FileTaskDescriptor FileTaskDescriptor::Clone() const {
  FileTaskDescriptor out;
  out.app_id = app_id;
  out.task_type = task_type;
  out.action_id = action_id;
  return out;
}

// static
bool FileTaskDescriptor::Populate(
    const base::Value::Dict& dict, FileTaskDescriptor& out) {
  const base::Value* app_id_value = dict.Find("appId");
  if (!app_id_value) {
    return false;
  }
  {
    auto* temp = (*app_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.app_id = *temp;
  }

  const base::Value* task_type_value = dict.Find("taskType");
  if (!task_type_value) {
    return false;
  }
  {
    auto* temp = (*task_type_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.task_type = *temp;
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
bool FileTaskDescriptor::Populate(
    const base::Value& value, FileTaskDescriptor& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<FileTaskDescriptor> FileTaskDescriptor::FromValue(const base::Value::Dict& value) {
  FileTaskDescriptor out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<FileTaskDescriptor> FileTaskDescriptor::FromValue(const base::Value& value) {
  FileTaskDescriptor out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict FileTaskDescriptor::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("appId", this->app_id);

  to_value_result.Set("taskType", this->task_type);

  to_value_result.Set("actionId", this->action_id);


  return to_value_result;
}


FileTask::FileTask()
 {}

FileTask::~FileTask() = default;
FileTask::FileTask(FileTask&& rhs) noexcept = default;
FileTask& FileTask::operator=(FileTask&& rhs) noexcept = default;
FileTask FileTask::Clone() const {
  FileTask out;
  out.descriptor = descriptor.Clone();
  out.title = title;
  out.icon_url = icon_url;
  out.is_default = is_default;
  out.is_generic_file_handler = is_generic_file_handler;
  out.is_dlp_blocked = is_dlp_blocked;
  return out;
}

// static
bool FileTask::Populate(
    const base::Value::Dict& dict, FileTask& out) {
  const base::Value* descriptor_value = dict.Find("descriptor");
  if (!descriptor_value) {
    return false;
  }
  {
    if (!(*descriptor_value).is_dict()) {
      return false;
    }
    if (!FileTaskDescriptor::Populate((*descriptor_value).GetDict(), out.descriptor)) {
      return false;
    }
  }

  const base::Value* title_value = dict.Find("title");
  if (!title_value) {
    return false;
  }
  {
    auto* temp = (*title_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.title = *temp;
  }

  const base::Value* icon_url_value = dict.Find("iconUrl");
  if (icon_url_value) {
    {
      auto* temp = (*icon_url_value).GetIfString();
      if (!temp) {
        out.icon_url = std::nullopt;
        return false;
      }
      out.icon_url = *temp;
    }
  }

  const base::Value* is_default_value = dict.Find("isDefault");
  if (is_default_value) {
    {
      auto temp = (*is_default_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_default = std::nullopt;
        return false;
      }
      out.is_default = *temp;
    }
  }

  const base::Value* is_generic_file_handler_value = dict.Find("isGenericFileHandler");
  if (is_generic_file_handler_value) {
    {
      auto temp = (*is_generic_file_handler_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_generic_file_handler = std::nullopt;
        return false;
      }
      out.is_generic_file_handler = *temp;
    }
  }

  const base::Value* is_dlp_blocked_value = dict.Find("isDlpBlocked");
  if (is_dlp_blocked_value) {
    {
      auto temp = (*is_dlp_blocked_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_dlp_blocked = std::nullopt;
        return false;
      }
      out.is_dlp_blocked = *temp;
    }
  }

  return true;
}

// static
bool FileTask::Populate(
    const base::Value& value, FileTask& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<FileTask> FileTask::FromValue(const base::Value::Dict& value) {
  FileTask out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<FileTask> FileTask::FromValue(const base::Value& value) {
  FileTask out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict FileTask::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("descriptor", (this->descriptor).ToValue());

  to_value_result.Set("title", this->title);

  if (this->icon_url) {
    to_value_result.Set("iconUrl", *this->icon_url);

  }
  if (this->is_default) {
    to_value_result.Set("isDefault", *this->is_default);

  }
  if (this->is_generic_file_handler) {
    to_value_result.Set("isGenericFileHandler", *this->is_generic_file_handler);

  }
  if (this->is_dlp_blocked) {
    to_value_result.Set("isDlpBlocked", *this->is_dlp_blocked);

  }

  return to_value_result;
}


ResultingTasks::ResultingTasks()
: policy_default_handler_status() {}

ResultingTasks::~ResultingTasks() = default;
ResultingTasks::ResultingTasks(ResultingTasks&& rhs) noexcept = default;
ResultingTasks& ResultingTasks::operator=(ResultingTasks&& rhs) noexcept = default;
ResultingTasks ResultingTasks::Clone() const {
  ResultingTasks out;
  out.tasks.reserve(tasks.size());
  for (const auto& element : tasks) {
    json_schema_compiler::util::AppendToContainer(out.tasks, element.Clone());
  }
  out.policy_default_handler_status = policy_default_handler_status;
  return out;
}

// static
bool ResultingTasks::Populate(
    const base::Value::Dict& dict, ResultingTasks& out) {
  out.policy_default_handler_status = PolicyDefaultHandlerStatus();
  const base::Value* tasks_value = dict.Find("tasks");
  if (!tasks_value) {
    return false;
  }
  {
    if (!(*tasks_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*tasks_value).GetList(), out.tasks)) {
        return false;
      }
    }
  }

  const base::Value* policy_default_handler_status_value = dict.Find("policyDefaultHandlerStatus");
  if (policy_default_handler_status_value) {
    {
      const std::string* policy_default_handler_status_as_string = (*policy_default_handler_status_value).GetIfString();
      if (!policy_default_handler_status_as_string) {
        return false;
      }
      out.policy_default_handler_status = ParsePolicyDefaultHandlerStatus(*policy_default_handler_status_as_string);
      if (out.policy_default_handler_status == PolicyDefaultHandlerStatus()) {
        return false;
      }
    }
    } else {
    out.policy_default_handler_status = PolicyDefaultHandlerStatus();
  }

  return true;
}

// static
bool ResultingTasks::Populate(
    const base::Value& value, ResultingTasks& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ResultingTasks> ResultingTasks::FromValue(const base::Value::Dict& value) {
  ResultingTasks out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ResultingTasks> ResultingTasks::FromValue(const base::Value& value) {
  ResultingTasks out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ResultingTasks::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("tasks", json_schema_compiler::util::CreateValueFromArray(this->tasks));

  if (this->policy_default_handler_status != PolicyDefaultHandlerStatus()) {
    to_value_result.Set("policyDefaultHandlerStatus", file_manager_private::ToString(this->policy_default_handler_status));

  }

  return to_value_result;
}


EntryProperties::EntryProperties()
: recent_date_bucket(),
sync_status() {}

EntryProperties::~EntryProperties() = default;
EntryProperties::EntryProperties(EntryProperties&& rhs) noexcept = default;
EntryProperties& EntryProperties::operator=(EntryProperties&& rhs) noexcept = default;
EntryProperties EntryProperties::Clone() const {
  EntryProperties out;
  out.size = size;
  out.modification_time = modification_time;
  out.modification_by_me_time = modification_by_me_time;
  out.recent_date_bucket = recent_date_bucket;
  out.thumbnail_url = thumbnail_url;
  out.cropped_thumbnail_url = cropped_thumbnail_url;
  out.image_width = image_width;
  out.image_height = image_height;
  out.image_rotation = image_rotation;
  out.pinned = pinned;
  out.present = present;
  out.hosted = hosted;
  out.available_offline = available_offline;
  out.available_when_metered = available_when_metered;
  out.dirty = dirty;
  out.custom_icon_url = custom_icon_url;
  out.content_mime_type = content_mime_type;
  out.shared_with_me = shared_with_me;
  out.shared = shared;
  out.starred = starred;
  out.external_file_url = external_file_url;
  out.alternate_url = alternate_url;
  out.share_url = share_url;
  out.can_copy = can_copy;
  out.can_delete = can_delete;
  out.can_rename = can_rename;
  out.can_add_children = can_add_children;
  out.can_share = can_share;
  out.can_pin = can_pin;
  out.is_machine_root = is_machine_root;
  out.is_external_media = is_external_media;
  out.is_arbitrary_sync_folder = is_arbitrary_sync_folder;
  out.sync_status = sync_status;
  out.progress = progress;
  out.sync_completed_time = sync_completed_time;
  out.shortcut = shortcut;
  return out;
}

// static
bool EntryProperties::Populate(
    const base::Value::Dict& dict, EntryProperties& out) {
  out.recent_date_bucket = RecentDateBucket();
  out.sync_status = SyncStatus();
  const base::Value* size_value = dict.Find("size");
  if (size_value) {
    {
      auto temp = (*size_value).GetIfDouble();
      if (!temp.has_value()) {
        out.size = std::nullopt;
        return false;
      }
      out.size = *temp;
    }
  }

  const base::Value* modification_time_value = dict.Find("modificationTime");
  if (modification_time_value) {
    {
      auto temp = (*modification_time_value).GetIfDouble();
      if (!temp.has_value()) {
        out.modification_time = std::nullopt;
        return false;
      }
      out.modification_time = *temp;
    }
  }

  const base::Value* modification_by_me_time_value = dict.Find("modificationByMeTime");
  if (modification_by_me_time_value) {
    {
      auto temp = (*modification_by_me_time_value).GetIfDouble();
      if (!temp.has_value()) {
        out.modification_by_me_time = std::nullopt;
        return false;
      }
      out.modification_by_me_time = *temp;
    }
  }

  const base::Value* recent_date_bucket_value = dict.Find("recentDateBucket");
  if (recent_date_bucket_value) {
    {
      const std::string* recent_date_bucket_as_string = (*recent_date_bucket_value).GetIfString();
      if (!recent_date_bucket_as_string) {
        return false;
      }
      out.recent_date_bucket = ParseRecentDateBucket(*recent_date_bucket_as_string);
      if (out.recent_date_bucket == RecentDateBucket()) {
        return false;
      }
    }
    } else {
    out.recent_date_bucket = RecentDateBucket();
  }

  const base::Value* thumbnail_url_value = dict.Find("thumbnailUrl");
  if (thumbnail_url_value) {
    {
      auto* temp = (*thumbnail_url_value).GetIfString();
      if (!temp) {
        out.thumbnail_url = std::nullopt;
        return false;
      }
      out.thumbnail_url = *temp;
    }
  }

  const base::Value* cropped_thumbnail_url_value = dict.Find("croppedThumbnailUrl");
  if (cropped_thumbnail_url_value) {
    {
      auto* temp = (*cropped_thumbnail_url_value).GetIfString();
      if (!temp) {
        out.cropped_thumbnail_url = std::nullopt;
        return false;
      }
      out.cropped_thumbnail_url = *temp;
    }
  }

  const base::Value* image_width_value = dict.Find("imageWidth");
  if (image_width_value) {
    {
      auto temp = (*image_width_value).GetIfInt();
      if (!temp.has_value()) {
        out.image_width = std::nullopt;
        return false;
      }
      out.image_width = *temp;
    }
  }

  const base::Value* image_height_value = dict.Find("imageHeight");
  if (image_height_value) {
    {
      auto temp = (*image_height_value).GetIfInt();
      if (!temp.has_value()) {
        out.image_height = std::nullopt;
        return false;
      }
      out.image_height = *temp;
    }
  }

  const base::Value* image_rotation_value = dict.Find("imageRotation");
  if (image_rotation_value) {
    {
      auto temp = (*image_rotation_value).GetIfInt();
      if (!temp.has_value()) {
        out.image_rotation = std::nullopt;
        return false;
      }
      out.image_rotation = *temp;
    }
  }

  const base::Value* pinned_value = dict.Find("pinned");
  if (pinned_value) {
    {
      auto temp = (*pinned_value).GetIfBool();
      if (!temp.has_value()) {
        out.pinned = std::nullopt;
        return false;
      }
      out.pinned = *temp;
    }
  }

  const base::Value* present_value = dict.Find("present");
  if (present_value) {
    {
      auto temp = (*present_value).GetIfBool();
      if (!temp.has_value()) {
        out.present = std::nullopt;
        return false;
      }
      out.present = *temp;
    }
  }

  const base::Value* hosted_value = dict.Find("hosted");
  if (hosted_value) {
    {
      auto temp = (*hosted_value).GetIfBool();
      if (!temp.has_value()) {
        out.hosted = std::nullopt;
        return false;
      }
      out.hosted = *temp;
    }
  }

  const base::Value* available_offline_value = dict.Find("availableOffline");
  if (available_offline_value) {
    {
      auto temp = (*available_offline_value).GetIfBool();
      if (!temp.has_value()) {
        out.available_offline = std::nullopt;
        return false;
      }
      out.available_offline = *temp;
    }
  }

  const base::Value* available_when_metered_value = dict.Find("availableWhenMetered");
  if (available_when_metered_value) {
    {
      auto temp = (*available_when_metered_value).GetIfBool();
      if (!temp.has_value()) {
        out.available_when_metered = std::nullopt;
        return false;
      }
      out.available_when_metered = *temp;
    }
  }

  const base::Value* dirty_value = dict.Find("dirty");
  if (dirty_value) {
    {
      auto temp = (*dirty_value).GetIfBool();
      if (!temp.has_value()) {
        out.dirty = std::nullopt;
        return false;
      }
      out.dirty = *temp;
    }
  }

  const base::Value* custom_icon_url_value = dict.Find("customIconUrl");
  if (custom_icon_url_value) {
    {
      auto* temp = (*custom_icon_url_value).GetIfString();
      if (!temp) {
        out.custom_icon_url = std::nullopt;
        return false;
      }
      out.custom_icon_url = *temp;
    }
  }

  const base::Value* content_mime_type_value = dict.Find("contentMimeType");
  if (content_mime_type_value) {
    {
      auto* temp = (*content_mime_type_value).GetIfString();
      if (!temp) {
        out.content_mime_type = std::nullopt;
        return false;
      }
      out.content_mime_type = *temp;
    }
  }

  const base::Value* shared_with_me_value = dict.Find("sharedWithMe");
  if (shared_with_me_value) {
    {
      auto temp = (*shared_with_me_value).GetIfBool();
      if (!temp.has_value()) {
        out.shared_with_me = std::nullopt;
        return false;
      }
      out.shared_with_me = *temp;
    }
  }

  const base::Value* shared_value = dict.Find("shared");
  if (shared_value) {
    {
      auto temp = (*shared_value).GetIfBool();
      if (!temp.has_value()) {
        out.shared = std::nullopt;
        return false;
      }
      out.shared = *temp;
    }
  }

  const base::Value* starred_value = dict.Find("starred");
  if (starred_value) {
    {
      auto temp = (*starred_value).GetIfBool();
      if (!temp.has_value()) {
        out.starred = std::nullopt;
        return false;
      }
      out.starred = *temp;
    }
  }

  const base::Value* external_file_url_value = dict.Find("externalFileUrl");
  if (external_file_url_value) {
    {
      auto* temp = (*external_file_url_value).GetIfString();
      if (!temp) {
        out.external_file_url = std::nullopt;
        return false;
      }
      out.external_file_url = *temp;
    }
  }

  const base::Value* alternate_url_value = dict.Find("alternateUrl");
  if (alternate_url_value) {
    {
      auto* temp = (*alternate_url_value).GetIfString();
      if (!temp) {
        out.alternate_url = std::nullopt;
        return false;
      }
      out.alternate_url = *temp;
    }
  }

  const base::Value* share_url_value = dict.Find("shareUrl");
  if (share_url_value) {
    {
      auto* temp = (*share_url_value).GetIfString();
      if (!temp) {
        out.share_url = std::nullopt;
        return false;
      }
      out.share_url = *temp;
    }
  }

  const base::Value* can_copy_value = dict.Find("canCopy");
  if (can_copy_value) {
    {
      auto temp = (*can_copy_value).GetIfBool();
      if (!temp.has_value()) {
        out.can_copy = std::nullopt;
        return false;
      }
      out.can_copy = *temp;
    }
  }

  const base::Value* can_delete_value = dict.Find("canDelete");
  if (can_delete_value) {
    {
      auto temp = (*can_delete_value).GetIfBool();
      if (!temp.has_value()) {
        out.can_delete = std::nullopt;
        return false;
      }
      out.can_delete = *temp;
    }
  }

  const base::Value* can_rename_value = dict.Find("canRename");
  if (can_rename_value) {
    {
      auto temp = (*can_rename_value).GetIfBool();
      if (!temp.has_value()) {
        out.can_rename = std::nullopt;
        return false;
      }
      out.can_rename = *temp;
    }
  }

  const base::Value* can_add_children_value = dict.Find("canAddChildren");
  if (can_add_children_value) {
    {
      auto temp = (*can_add_children_value).GetIfBool();
      if (!temp.has_value()) {
        out.can_add_children = std::nullopt;
        return false;
      }
      out.can_add_children = *temp;
    }
  }

  const base::Value* can_share_value = dict.Find("canShare");
  if (can_share_value) {
    {
      auto temp = (*can_share_value).GetIfBool();
      if (!temp.has_value()) {
        out.can_share = std::nullopt;
        return false;
      }
      out.can_share = *temp;
    }
  }

  const base::Value* can_pin_value = dict.Find("canPin");
  if (can_pin_value) {
    {
      auto temp = (*can_pin_value).GetIfBool();
      if (!temp.has_value()) {
        out.can_pin = std::nullopt;
        return false;
      }
      out.can_pin = *temp;
    }
  }

  const base::Value* is_machine_root_value = dict.Find("isMachineRoot");
  if (is_machine_root_value) {
    {
      auto temp = (*is_machine_root_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_machine_root = std::nullopt;
        return false;
      }
      out.is_machine_root = *temp;
    }
  }

  const base::Value* is_external_media_value = dict.Find("isExternalMedia");
  if (is_external_media_value) {
    {
      auto temp = (*is_external_media_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_external_media = std::nullopt;
        return false;
      }
      out.is_external_media = *temp;
    }
  }

  const base::Value* is_arbitrary_sync_folder_value = dict.Find("isArbitrarySyncFolder");
  if (is_arbitrary_sync_folder_value) {
    {
      auto temp = (*is_arbitrary_sync_folder_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_arbitrary_sync_folder = std::nullopt;
        return false;
      }
      out.is_arbitrary_sync_folder = *temp;
    }
  }

  const base::Value* sync_status_value = dict.Find("syncStatus");
  if (sync_status_value) {
    {
      const std::string* sync_status_as_string = (*sync_status_value).GetIfString();
      if (!sync_status_as_string) {
        return false;
      }
      out.sync_status = ParseSyncStatus(*sync_status_as_string);
      if (out.sync_status == SyncStatus()) {
        return false;
      }
    }
    } else {
    out.sync_status = SyncStatus();
  }

  const base::Value* progress_value = dict.Find("progress");
  if (progress_value) {
    {
      auto temp = (*progress_value).GetIfDouble();
      if (!temp.has_value()) {
        out.progress = std::nullopt;
        return false;
      }
      out.progress = *temp;
    }
  }

  const base::Value* sync_completed_time_value = dict.Find("syncCompletedTime");
  if (sync_completed_time_value) {
    {
      auto temp = (*sync_completed_time_value).GetIfDouble();
      if (!temp.has_value()) {
        out.sync_completed_time = std::nullopt;
        return false;
      }
      out.sync_completed_time = *temp;
    }
  }

  const base::Value* shortcut_value = dict.Find("shortcut");
  if (shortcut_value) {
    {
      auto temp = (*shortcut_value).GetIfBool();
      if (!temp.has_value()) {
        out.shortcut = std::nullopt;
        return false;
      }
      out.shortcut = *temp;
    }
  }

  return true;
}

// static
bool EntryProperties::Populate(
    const base::Value& value, EntryProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<EntryProperties> EntryProperties::FromValue(const base::Value::Dict& value) {
  EntryProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<EntryProperties> EntryProperties::FromValue(const base::Value& value) {
  EntryProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict EntryProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->size) {
    to_value_result.Set("size", *this->size);

  }
  if (this->modification_time) {
    to_value_result.Set("modificationTime", *this->modification_time);

  }
  if (this->modification_by_me_time) {
    to_value_result.Set("modificationByMeTime", *this->modification_by_me_time);

  }
  if (this->recent_date_bucket != RecentDateBucket()) {
    to_value_result.Set("recentDateBucket", file_manager_private::ToString(this->recent_date_bucket));

  }
  if (this->thumbnail_url) {
    to_value_result.Set("thumbnailUrl", *this->thumbnail_url);

  }
  if (this->cropped_thumbnail_url) {
    to_value_result.Set("croppedThumbnailUrl", *this->cropped_thumbnail_url);

  }
  if (this->image_width) {
    to_value_result.Set("imageWidth", *this->image_width);

  }
  if (this->image_height) {
    to_value_result.Set("imageHeight", *this->image_height);

  }
  if (this->image_rotation) {
    to_value_result.Set("imageRotation", *this->image_rotation);

  }
  if (this->pinned) {
    to_value_result.Set("pinned", *this->pinned);

  }
  if (this->present) {
    to_value_result.Set("present", *this->present);

  }
  if (this->hosted) {
    to_value_result.Set("hosted", *this->hosted);

  }
  if (this->available_offline) {
    to_value_result.Set("availableOffline", *this->available_offline);

  }
  if (this->available_when_metered) {
    to_value_result.Set("availableWhenMetered", *this->available_when_metered);

  }
  if (this->dirty) {
    to_value_result.Set("dirty", *this->dirty);

  }
  if (this->custom_icon_url) {
    to_value_result.Set("customIconUrl", *this->custom_icon_url);

  }
  if (this->content_mime_type) {
    to_value_result.Set("contentMimeType", *this->content_mime_type);

  }
  if (this->shared_with_me) {
    to_value_result.Set("sharedWithMe", *this->shared_with_me);

  }
  if (this->shared) {
    to_value_result.Set("shared", *this->shared);

  }
  if (this->starred) {
    to_value_result.Set("starred", *this->starred);

  }
  if (this->external_file_url) {
    to_value_result.Set("externalFileUrl", *this->external_file_url);

  }
  if (this->alternate_url) {
    to_value_result.Set("alternateUrl", *this->alternate_url);

  }
  if (this->share_url) {
    to_value_result.Set("shareUrl", *this->share_url);

  }
  if (this->can_copy) {
    to_value_result.Set("canCopy", *this->can_copy);

  }
  if (this->can_delete) {
    to_value_result.Set("canDelete", *this->can_delete);

  }
  if (this->can_rename) {
    to_value_result.Set("canRename", *this->can_rename);

  }
  if (this->can_add_children) {
    to_value_result.Set("canAddChildren", *this->can_add_children);

  }
  if (this->can_share) {
    to_value_result.Set("canShare", *this->can_share);

  }
  if (this->can_pin) {
    to_value_result.Set("canPin", *this->can_pin);

  }
  if (this->is_machine_root) {
    to_value_result.Set("isMachineRoot", *this->is_machine_root);

  }
  if (this->is_external_media) {
    to_value_result.Set("isExternalMedia", *this->is_external_media);

  }
  if (this->is_arbitrary_sync_folder) {
    to_value_result.Set("isArbitrarySyncFolder", *this->is_arbitrary_sync_folder);

  }
  if (this->sync_status != SyncStatus()) {
    to_value_result.Set("syncStatus", file_manager_private::ToString(this->sync_status));

  }
  if (this->progress) {
    to_value_result.Set("progress", *this->progress);

  }
  if (this->sync_completed_time) {
    to_value_result.Set("syncCompletedTime", *this->sync_completed_time);

  }
  if (this->shortcut) {
    to_value_result.Set("shortcut", *this->shortcut);

  }

  return to_value_result;
}


MountPointSizeStats::MountPointSizeStats()
: total_size(0.0),
remaining_size(0.0) {}

MountPointSizeStats::~MountPointSizeStats() = default;
MountPointSizeStats::MountPointSizeStats(MountPointSizeStats&& rhs) noexcept = default;
MountPointSizeStats& MountPointSizeStats::operator=(MountPointSizeStats&& rhs) noexcept = default;
MountPointSizeStats MountPointSizeStats::Clone() const {
  MountPointSizeStats out;
  out.total_size = total_size;
  out.remaining_size = remaining_size;
  return out;
}

// static
bool MountPointSizeStats::Populate(
    const base::Value::Dict& dict, MountPointSizeStats& out) {
  const base::Value* total_size_value = dict.Find("totalSize");
  if (!total_size_value) {
    return false;
  }
  {
    auto temp = (*total_size_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.total_size = *temp;
  }

  const base::Value* remaining_size_value = dict.Find("remainingSize");
  if (!remaining_size_value) {
    return false;
  }
  {
    auto temp = (*remaining_size_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.remaining_size = *temp;
  }

  return true;
}

// static
bool MountPointSizeStats::Populate(
    const base::Value& value, MountPointSizeStats& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<MountPointSizeStats> MountPointSizeStats::FromValue(const base::Value::Dict& value) {
  MountPointSizeStats out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<MountPointSizeStats> MountPointSizeStats::FromValue(const base::Value& value) {
  MountPointSizeStats out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict MountPointSizeStats::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("totalSize", this->total_size);

  to_value_result.Set("remainingSize", this->remaining_size);


  return to_value_result;
}


SearchDriveResponse::EntriesType::EntriesType()
 {}

SearchDriveResponse::EntriesType::~EntriesType() = default;
SearchDriveResponse::EntriesType::EntriesType(EntriesType&& rhs) noexcept = default;
SearchDriveResponse::EntriesType& SearchDriveResponse::EntriesType::operator=(EntriesType&& rhs) noexcept = default;
SearchDriveResponse::EntriesType SearchDriveResponse::EntriesType::Clone() const {
  EntriesType out;
  return out;
}

// static
bool SearchDriveResponse::EntriesType::Populate(
    const base::Value::Dict& dict, EntriesType& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool SearchDriveResponse::EntriesType::Populate(
    const base::Value& value, EntriesType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SearchDriveResponse::EntriesType> SearchDriveResponse::EntriesType::FromValue(const base::Value::Dict& value) {
  EntriesType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SearchDriveResponse::EntriesType> SearchDriveResponse::EntriesType::FromValue(const base::Value& value) {
  EntriesType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SearchDriveResponse::EntriesType::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}




SearchDriveResponse::SearchDriveResponse()
 {}

SearchDriveResponse::~SearchDriveResponse() = default;
SearchDriveResponse::SearchDriveResponse(SearchDriveResponse&& rhs) noexcept = default;
SearchDriveResponse& SearchDriveResponse::operator=(SearchDriveResponse&& rhs) noexcept = default;
SearchDriveResponse SearchDriveResponse::Clone() const {
  SearchDriveResponse out;
  out.entries.reserve(entries.size());
  for (const auto& element : entries) {
    json_schema_compiler::util::AppendToContainer(out.entries, element.Clone());
  }
  out.next_feed = next_feed;
  return out;
}

// static
bool SearchDriveResponse::Populate(
    const base::Value::Dict& dict, SearchDriveResponse& out) {
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

  const base::Value* next_feed_value = dict.Find("nextFeed");
  if (!next_feed_value) {
    return false;
  }
  {
    auto* temp = (*next_feed_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.next_feed = *temp;
  }

  return true;
}

// static
bool SearchDriveResponse::Populate(
    const base::Value& value, SearchDriveResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SearchDriveResponse> SearchDriveResponse::FromValue(const base::Value::Dict& value) {
  SearchDriveResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SearchDriveResponse> SearchDriveResponse::FromValue(const base::Value& value) {
  SearchDriveResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SearchDriveResponse::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("entries", json_schema_compiler::util::CreateValueFromArray(this->entries));

  to_value_result.Set("nextFeed", this->next_feed);


  return to_value_result;
}


DriveQuotaMetadata::DriveQuotaMetadata()
: user_type(),
used_bytes(0.0),
total_bytes(0.0),
organization_limit_exceeded(false) {}

DriveQuotaMetadata::~DriveQuotaMetadata() = default;
DriveQuotaMetadata::DriveQuotaMetadata(DriveQuotaMetadata&& rhs) noexcept = default;
DriveQuotaMetadata& DriveQuotaMetadata::operator=(DriveQuotaMetadata&& rhs) noexcept = default;
DriveQuotaMetadata DriveQuotaMetadata::Clone() const {
  DriveQuotaMetadata out;
  out.user_type = user_type;
  out.used_bytes = used_bytes;
  out.total_bytes = total_bytes;
  out.organization_limit_exceeded = organization_limit_exceeded;
  out.organization_name = organization_name;
  return out;
}

// static
bool DriveQuotaMetadata::Populate(
    const base::Value::Dict& dict, DriveQuotaMetadata& out) {
  const base::Value* user_type_value = dict.Find("userType");
  if (!user_type_value) {
    return false;
  }
  {
    const std::string* user_type_as_string = (*user_type_value).GetIfString();
    if (!user_type_as_string) {
      return false;
    }
    out.user_type = ParseUserType(*user_type_as_string);
    if (out.user_type == UserType()) {
      return false;
    }
  }

  const base::Value* used_bytes_value = dict.Find("usedBytes");
  if (!used_bytes_value) {
    return false;
  }
  {
    auto temp = (*used_bytes_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.used_bytes = *temp;
  }

  const base::Value* total_bytes_value = dict.Find("totalBytes");
  if (!total_bytes_value) {
    return false;
  }
  {
    auto temp = (*total_bytes_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.total_bytes = *temp;
  }

  const base::Value* organization_limit_exceeded_value = dict.Find("organizationLimitExceeded");
  if (!organization_limit_exceeded_value) {
    return false;
  }
  {
    auto temp = (*organization_limit_exceeded_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.organization_limit_exceeded = *temp;
  }

  const base::Value* organization_name_value = dict.Find("organizationName");
  if (!organization_name_value) {
    return false;
  }
  {
    auto* temp = (*organization_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.organization_name = *temp;
  }

  return true;
}

// static
bool DriveQuotaMetadata::Populate(
    const base::Value& value, DriveQuotaMetadata& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DriveQuotaMetadata> DriveQuotaMetadata::FromValue(const base::Value::Dict& value) {
  DriveQuotaMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DriveQuotaMetadata> DriveQuotaMetadata::FromValue(const base::Value& value) {
  DriveQuotaMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DriveQuotaMetadata::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("userType", file_manager_private::ToString(this->user_type));

  to_value_result.Set("usedBytes", this->used_bytes);

  to_value_result.Set("totalBytes", this->total_bytes);

  to_value_result.Set("organizationLimitExceeded", this->organization_limit_exceeded);

  to_value_result.Set("organizationName", this->organization_name);


  return to_value_result;
}


ProfileInfo::ProfileInfo()
: is_current_profile(false) {}

ProfileInfo::~ProfileInfo() = default;
ProfileInfo::ProfileInfo(ProfileInfo&& rhs) noexcept = default;
ProfileInfo& ProfileInfo::operator=(ProfileInfo&& rhs) noexcept = default;
ProfileInfo ProfileInfo::Clone() const {
  ProfileInfo out;
  out.profile_id = profile_id;
  out.display_name = display_name;
  out.is_current_profile = is_current_profile;
  return out;
}

// static
bool ProfileInfo::Populate(
    const base::Value::Dict& dict, ProfileInfo& out) {
  const base::Value* profile_id_value = dict.Find("profileId");
  if (!profile_id_value) {
    return false;
  }
  {
    auto* temp = (*profile_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.profile_id = *temp;
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

  const base::Value* is_current_profile_value = dict.Find("isCurrentProfile");
  if (!is_current_profile_value) {
    return false;
  }
  {
    auto temp = (*is_current_profile_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_current_profile = *temp;
  }

  return true;
}

// static
bool ProfileInfo::Populate(
    const base::Value& value, ProfileInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ProfileInfo> ProfileInfo::FromValue(const base::Value::Dict& value) {
  ProfileInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ProfileInfo> ProfileInfo::FromValue(const base::Value& value) {
  ProfileInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ProfileInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("profileId", this->profile_id);

  to_value_result.Set("displayName", this->display_name);

  to_value_result.Set("isCurrentProfile", this->is_current_profile);


  return to_value_result;
}


ProfilesResponse::ProfilesResponse()
 {}

ProfilesResponse::~ProfilesResponse() = default;
ProfilesResponse::ProfilesResponse(ProfilesResponse&& rhs) noexcept = default;
ProfilesResponse& ProfilesResponse::operator=(ProfilesResponse&& rhs) noexcept = default;
ProfilesResponse ProfilesResponse::Clone() const {
  ProfilesResponse out;
  out.profiles.reserve(profiles.size());
  for (const auto& element : profiles) {
    json_schema_compiler::util::AppendToContainer(out.profiles, element.Clone());
  }
  out.current_profile_id = current_profile_id;
  out.displayed_profile_id = displayed_profile_id;
  return out;
}

// static
bool ProfilesResponse::Populate(
    const base::Value::Dict& dict, ProfilesResponse& out) {
  const base::Value* profiles_value = dict.Find("profiles");
  if (!profiles_value) {
    return false;
  }
  {
    if (!(*profiles_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*profiles_value).GetList(), out.profiles)) {
        return false;
      }
    }
  }

  const base::Value* current_profile_id_value = dict.Find("currentProfileId");
  if (!current_profile_id_value) {
    return false;
  }
  {
    auto* temp = (*current_profile_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.current_profile_id = *temp;
  }

  const base::Value* displayed_profile_id_value = dict.Find("displayedProfileId");
  if (!displayed_profile_id_value) {
    return false;
  }
  {
    auto* temp = (*displayed_profile_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.displayed_profile_id = *temp;
  }

  return true;
}

// static
bool ProfilesResponse::Populate(
    const base::Value& value, ProfilesResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ProfilesResponse> ProfilesResponse::FromValue(const base::Value::Dict& value) {
  ProfilesResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ProfilesResponse> ProfilesResponse::FromValue(const base::Value& value) {
  ProfilesResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ProfilesResponse::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("profiles", json_schema_compiler::util::CreateValueFromArray(this->profiles));

  to_value_result.Set("currentProfileId", this->current_profile_id);

  to_value_result.Set("displayedProfileId", this->displayed_profile_id);


  return to_value_result;
}


IconSet::IconSet()
 {}

IconSet::~IconSet() = default;
IconSet::IconSet(IconSet&& rhs) noexcept = default;
IconSet& IconSet::operator=(IconSet&& rhs) noexcept = default;
IconSet IconSet::Clone() const {
  IconSet out;
  out.icon16x16_url = icon16x16_url;
  out.icon32x32_url = icon32x32_url;
  return out;
}

// static
bool IconSet::Populate(
    const base::Value::Dict& dict, IconSet& out) {
  const base::Value* icon16x16_url_value = dict.Find("icon16x16Url");
  if (icon16x16_url_value) {
    {
      auto* temp = (*icon16x16_url_value).GetIfString();
      if (!temp) {
        out.icon16x16_url = std::nullopt;
        return false;
      }
      out.icon16x16_url = *temp;
    }
  }

  const base::Value* icon32x32_url_value = dict.Find("icon32x32Url");
  if (icon32x32_url_value) {
    {
      auto* temp = (*icon32x32_url_value).GetIfString();
      if (!temp) {
        out.icon32x32_url = std::nullopt;
        return false;
      }
      out.icon32x32_url = *temp;
    }
  }

  return true;
}

// static
bool IconSet::Populate(
    const base::Value& value, IconSet& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<IconSet> IconSet::FromValue(const base::Value::Dict& value) {
  IconSet out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<IconSet> IconSet::FromValue(const base::Value& value) {
  IconSet out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict IconSet::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->icon16x16_url) {
    to_value_result.Set("icon16x16Url", *this->icon16x16_url);

  }
  if (this->icon32x32_url) {
    to_value_result.Set("icon32x32Url", *this->icon32x32_url);

  }

  return to_value_result;
}


VolumeMetadata::VolumeMetadata()
: source(),
volume_type(),
device_type(),
is_read_only(false),
is_read_only_removable_device(false),
has_media(false),
configurable(false),
watchable(false),
mount_condition(),
mount_context(),
hidden(false),
vm_type() {}

VolumeMetadata::~VolumeMetadata() = default;
VolumeMetadata::VolumeMetadata(VolumeMetadata&& rhs) noexcept = default;
VolumeMetadata& VolumeMetadata::operator=(VolumeMetadata&& rhs) noexcept = default;
VolumeMetadata VolumeMetadata::Clone() const {
  VolumeMetadata out;
  out.volume_id = volume_id;
  out.file_system_id = file_system_id;
  out.provider_id = provider_id;
  out.source = source;
  out.volume_label = volume_label;
  out.profile = profile.Clone();
  out.source_path = source_path;
  out.volume_type = volume_type;
  out.device_type = device_type;
  out.device_path = device_path;
  out.is_parent_device = is_parent_device;
  out.is_read_only = is_read_only;
  out.is_read_only_removable_device = is_read_only_removable_device;
  out.has_media = has_media;
  out.configurable = configurable;
  out.watchable = watchable;
  out.mount_condition = mount_condition;
  out.mount_context = mount_context;
  out.disk_file_system_type = disk_file_system_type;
  out.icon_set = icon_set.Clone();
  out.drive_label = drive_label;
  out.remote_mount_path = remote_mount_path;
  out.hidden = hidden;
  out.vm_type = vm_type;
  return out;
}

// static
bool VolumeMetadata::Populate(
    const base::Value::Dict& dict, VolumeMetadata& out) {
  out.device_type = DeviceType();
  out.mount_condition = MountError();
  out.mount_context = MountContext();
  out.vm_type = VmType();
  const base::Value* volume_id_value = dict.Find("volumeId");
  if (!volume_id_value) {
    return false;
  }
  {
    auto* temp = (*volume_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.volume_id = *temp;
  }

  const base::Value* file_system_id_value = dict.Find("fileSystemId");
  if (file_system_id_value) {
    {
      auto* temp = (*file_system_id_value).GetIfString();
      if (!temp) {
        out.file_system_id = std::nullopt;
        return false;
      }
      out.file_system_id = *temp;
    }
  }

  const base::Value* provider_id_value = dict.Find("providerId");
  if (provider_id_value) {
    {
      auto* temp = (*provider_id_value).GetIfString();
      if (!temp) {
        out.provider_id = std::nullopt;
        return false;
      }
      out.provider_id = *temp;
    }
  }

  const base::Value* source_value = dict.Find("source");
  if (!source_value) {
    return false;
  }
  {
    const std::string* source_as_string = (*source_value).GetIfString();
    if (!source_as_string) {
      return false;
    }
    out.source = ParseSource(*source_as_string);
    if (out.source == Source()) {
      return false;
    }
  }

  const base::Value* volume_label_value = dict.Find("volumeLabel");
  if (volume_label_value) {
    {
      auto* temp = (*volume_label_value).GetIfString();
      if (!temp) {
        out.volume_label = std::nullopt;
        return false;
      }
      out.volume_label = *temp;
    }
  }

  const base::Value* profile_value = dict.Find("profile");
  if (!profile_value) {
    return false;
  }
  {
    if (!(*profile_value).is_dict()) {
      return false;
    }
    if (!ProfileInfo::Populate((*profile_value).GetDict(), out.profile)) {
      return false;
    }
  }

  const base::Value* source_path_value = dict.Find("sourcePath");
  if (source_path_value) {
    {
      auto* temp = (*source_path_value).GetIfString();
      if (!temp) {
        out.source_path = std::nullopt;
        return false;
      }
      out.source_path = *temp;
    }
  }

  const base::Value* volume_type_value = dict.Find("volumeType");
  if (!volume_type_value) {
    return false;
  }
  {
    const std::string* volume_type_as_string = (*volume_type_value).GetIfString();
    if (!volume_type_as_string) {
      return false;
    }
    out.volume_type = ParseVolumeType(*volume_type_as_string);
    if (out.volume_type == VolumeType()) {
      return false;
    }
  }

  const base::Value* device_type_value = dict.Find("deviceType");
  if (device_type_value) {
    {
      const std::string* device_type_as_string = (*device_type_value).GetIfString();
      if (!device_type_as_string) {
        return false;
      }
      out.device_type = ParseDeviceType(*device_type_as_string);
      if (out.device_type == DeviceType()) {
        return false;
      }
    }
    } else {
    out.device_type = DeviceType();
  }

  const base::Value* device_path_value = dict.Find("devicePath");
  if (device_path_value) {
    {
      auto* temp = (*device_path_value).GetIfString();
      if (!temp) {
        out.device_path = std::nullopt;
        return false;
      }
      out.device_path = *temp;
    }
  }

  const base::Value* is_parent_device_value = dict.Find("isParentDevice");
  if (is_parent_device_value) {
    {
      auto temp = (*is_parent_device_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_parent_device = std::nullopt;
        return false;
      }
      out.is_parent_device = *temp;
    }
  }

  const base::Value* is_read_only_value = dict.Find("isReadOnly");
  if (!is_read_only_value) {
    return false;
  }
  {
    auto temp = (*is_read_only_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_read_only = *temp;
  }

  const base::Value* is_read_only_removable_device_value = dict.Find("isReadOnlyRemovableDevice");
  if (!is_read_only_removable_device_value) {
    return false;
  }
  {
    auto temp = (*is_read_only_removable_device_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_read_only_removable_device = *temp;
  }

  const base::Value* has_media_value = dict.Find("hasMedia");
  if (!has_media_value) {
    return false;
  }
  {
    auto temp = (*has_media_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.has_media = *temp;
  }

  const base::Value* configurable_value = dict.Find("configurable");
  if (!configurable_value) {
    return false;
  }
  {
    auto temp = (*configurable_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.configurable = *temp;
  }

  const base::Value* watchable_value = dict.Find("watchable");
  if (!watchable_value) {
    return false;
  }
  {
    auto temp = (*watchable_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.watchable = *temp;
  }

  const base::Value* mount_condition_value = dict.Find("mountCondition");
  if (mount_condition_value) {
    {
      const std::string* mount_error_as_string = (*mount_condition_value).GetIfString();
      if (!mount_error_as_string) {
        return false;
      }
      out.mount_condition = ParseMountError(*mount_error_as_string);
      if (out.mount_condition == MountError()) {
        return false;
      }
    }
    } else {
    out.mount_condition = MountError();
  }

  const base::Value* mount_context_value = dict.Find("mountContext");
  if (mount_context_value) {
    {
      const std::string* mount_context_as_string = (*mount_context_value).GetIfString();
      if (!mount_context_as_string) {
        return false;
      }
      out.mount_context = ParseMountContext(*mount_context_as_string);
      if (out.mount_context == MountContext()) {
        return false;
      }
    }
    } else {
    out.mount_context = MountContext();
  }

  const base::Value* disk_file_system_type_value = dict.Find("diskFileSystemType");
  if (disk_file_system_type_value) {
    {
      auto* temp = (*disk_file_system_type_value).GetIfString();
      if (!temp) {
        out.disk_file_system_type = std::nullopt;
        return false;
      }
      out.disk_file_system_type = *temp;
    }
  }

  const base::Value* icon_set_value = dict.Find("iconSet");
  if (!icon_set_value) {
    return false;
  }
  {
    if (!(*icon_set_value).is_dict()) {
      return false;
    }
    if (!IconSet::Populate((*icon_set_value).GetDict(), out.icon_set)) {
      return false;
    }
  }

  const base::Value* drive_label_value = dict.Find("driveLabel");
  if (drive_label_value) {
    {
      auto* temp = (*drive_label_value).GetIfString();
      if (!temp) {
        out.drive_label = std::nullopt;
        return false;
      }
      out.drive_label = *temp;
    }
  }

  const base::Value* remote_mount_path_value = dict.Find("remoteMountPath");
  if (remote_mount_path_value) {
    {
      auto* temp = (*remote_mount_path_value).GetIfString();
      if (!temp) {
        out.remote_mount_path = std::nullopt;
        return false;
      }
      out.remote_mount_path = *temp;
    }
  }

  const base::Value* hidden_value = dict.Find("hidden");
  if (!hidden_value) {
    return false;
  }
  {
    auto temp = (*hidden_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.hidden = *temp;
  }

  const base::Value* vm_type_value = dict.Find("vmType");
  if (vm_type_value) {
    {
      const std::string* vm_type_as_string = (*vm_type_value).GetIfString();
      if (!vm_type_as_string) {
        return false;
      }
      out.vm_type = ParseVmType(*vm_type_as_string);
      if (out.vm_type == VmType()) {
        return false;
      }
    }
    } else {
    out.vm_type = VmType();
  }

  return true;
}

// static
bool VolumeMetadata::Populate(
    const base::Value& value, VolumeMetadata& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<VolumeMetadata> VolumeMetadata::FromValue(const base::Value::Dict& value) {
  VolumeMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<VolumeMetadata> VolumeMetadata::FromValue(const base::Value& value) {
  VolumeMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict VolumeMetadata::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("volumeId", this->volume_id);

  if (this->file_system_id) {
    to_value_result.Set("fileSystemId", *this->file_system_id);

  }
  if (this->provider_id) {
    to_value_result.Set("providerId", *this->provider_id);

  }
  to_value_result.Set("source", file_manager_private::ToString(this->source));

  if (this->volume_label) {
    to_value_result.Set("volumeLabel", *this->volume_label);

  }
  to_value_result.Set("profile", (this->profile).ToValue());

  if (this->source_path) {
    to_value_result.Set("sourcePath", *this->source_path);

  }
  to_value_result.Set("volumeType", file_manager_private::ToString(this->volume_type));

  if (this->device_type != DeviceType()) {
    to_value_result.Set("deviceType", file_manager_private::ToString(this->device_type));

  }
  if (this->device_path) {
    to_value_result.Set("devicePath", *this->device_path);

  }
  if (this->is_parent_device) {
    to_value_result.Set("isParentDevice", *this->is_parent_device);

  }
  to_value_result.Set("isReadOnly", this->is_read_only);

  to_value_result.Set("isReadOnlyRemovableDevice", this->is_read_only_removable_device);

  to_value_result.Set("hasMedia", this->has_media);

  to_value_result.Set("configurable", this->configurable);

  to_value_result.Set("watchable", this->watchable);

  if (this->mount_condition != MountError()) {
    to_value_result.Set("mountCondition", file_manager_private::ToString(this->mount_condition));

  }
  if (this->mount_context != MountContext()) {
    to_value_result.Set("mountContext", file_manager_private::ToString(this->mount_context));

  }
  if (this->disk_file_system_type) {
    to_value_result.Set("diskFileSystemType", *this->disk_file_system_type);

  }
  to_value_result.Set("iconSet", (this->icon_set).ToValue());

  if (this->drive_label) {
    to_value_result.Set("driveLabel", *this->drive_label);

  }
  if (this->remote_mount_path) {
    to_value_result.Set("remoteMountPath", *this->remote_mount_path);

  }
  to_value_result.Set("hidden", this->hidden);

  if (this->vm_type != VmType()) {
    to_value_result.Set("vmType", file_manager_private::ToString(this->vm_type));

  }

  return to_value_result;
}


MountCompletedEvent::MountCompletedEvent()
: event_type(),
status(),
should_notify(false) {}

MountCompletedEvent::~MountCompletedEvent() = default;
MountCompletedEvent::MountCompletedEvent(MountCompletedEvent&& rhs) noexcept = default;
MountCompletedEvent& MountCompletedEvent::operator=(MountCompletedEvent&& rhs) noexcept = default;
MountCompletedEvent MountCompletedEvent::Clone() const {
  MountCompletedEvent out;
  out.event_type = event_type;
  out.status = status;
  out.volume_metadata = volume_metadata.Clone();
  out.should_notify = should_notify;
  return out;
}

// static
bool MountCompletedEvent::Populate(
    const base::Value::Dict& dict, MountCompletedEvent& out) {
  const base::Value* event_type_value = dict.Find("eventType");
  if (!event_type_value) {
    return false;
  }
  {
    const std::string* mount_completed_event_type_as_string = (*event_type_value).GetIfString();
    if (!mount_completed_event_type_as_string) {
      return false;
    }
    out.event_type = ParseMountCompletedEventType(*mount_completed_event_type_as_string);
    if (out.event_type == MountCompletedEventType()) {
      return false;
    }
  }

  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    const std::string* mount_error_as_string = (*status_value).GetIfString();
    if (!mount_error_as_string) {
      return false;
    }
    out.status = ParseMountError(*mount_error_as_string);
    if (out.status == MountError()) {
      return false;
    }
  }

  const base::Value* volume_metadata_value = dict.Find("volumeMetadata");
  if (!volume_metadata_value) {
    return false;
  }
  {
    if (!(*volume_metadata_value).is_dict()) {
      return false;
    }
    if (!VolumeMetadata::Populate((*volume_metadata_value).GetDict(), out.volume_metadata)) {
      return false;
    }
  }

  const base::Value* should_notify_value = dict.Find("shouldNotify");
  if (!should_notify_value) {
    return false;
  }
  {
    auto temp = (*should_notify_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.should_notify = *temp;
  }

  return true;
}

// static
bool MountCompletedEvent::Populate(
    const base::Value& value, MountCompletedEvent& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<MountCompletedEvent> MountCompletedEvent::FromValue(const base::Value::Dict& value) {
  MountCompletedEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<MountCompletedEvent> MountCompletedEvent::FromValue(const base::Value& value) {
  MountCompletedEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict MountCompletedEvent::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("eventType", file_manager_private::ToString(this->event_type));

  to_value_result.Set("status", file_manager_private::ToString(this->status));

  to_value_result.Set("volumeMetadata", (this->volume_metadata).ToValue());

  to_value_result.Set("shouldNotify", this->should_notify);


  return to_value_result;
}


FileTransferStatus::FileTransferStatus()
: transfer_state(),
processed(0.0),
total(0.0),
num_total_jobs(0),
show_notification(false),
hide_when_zero_jobs(false) {}

FileTransferStatus::~FileTransferStatus() = default;
FileTransferStatus::FileTransferStatus(FileTransferStatus&& rhs) noexcept = default;
FileTransferStatus& FileTransferStatus::operator=(FileTransferStatus&& rhs) noexcept = default;
FileTransferStatus FileTransferStatus::Clone() const {
  FileTransferStatus out;
  out.file_url = file_url;
  out.transfer_state = transfer_state;
  out.processed = processed;
  out.total = total;
  out.num_total_jobs = num_total_jobs;
  out.show_notification = show_notification;
  out.hide_when_zero_jobs = hide_when_zero_jobs;
  return out;
}

// static
bool FileTransferStatus::Populate(
    const base::Value::Dict& dict, FileTransferStatus& out) {
  const base::Value* file_url_value = dict.Find("fileUrl");
  if (!file_url_value) {
    return false;
  }
  {
    auto* temp = (*file_url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_url = *temp;
  }

  const base::Value* transfer_state_value = dict.Find("transferState");
  if (!transfer_state_value) {
    return false;
  }
  {
    const std::string* transfer_state_as_string = (*transfer_state_value).GetIfString();
    if (!transfer_state_as_string) {
      return false;
    }
    out.transfer_state = ParseTransferState(*transfer_state_as_string);
    if (out.transfer_state == TransferState()) {
      return false;
    }
  }

  const base::Value* processed_value = dict.Find("processed");
  if (!processed_value) {
    return false;
  }
  {
    auto temp = (*processed_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.processed = *temp;
  }

  const base::Value* total_value = dict.Find("total");
  if (!total_value) {
    return false;
  }
  {
    auto temp = (*total_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.total = *temp;
  }

  const base::Value* num_total_jobs_value = dict.Find("numTotalJobs");
  if (!num_total_jobs_value) {
    return false;
  }
  {
    auto temp = (*num_total_jobs_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.num_total_jobs = *temp;
  }

  const base::Value* show_notification_value = dict.Find("showNotification");
  if (!show_notification_value) {
    return false;
  }
  {
    auto temp = (*show_notification_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.show_notification = *temp;
  }

  const base::Value* hide_when_zero_jobs_value = dict.Find("hideWhenZeroJobs");
  if (!hide_when_zero_jobs_value) {
    return false;
  }
  {
    auto temp = (*hide_when_zero_jobs_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.hide_when_zero_jobs = *temp;
  }

  return true;
}

// static
bool FileTransferStatus::Populate(
    const base::Value& value, FileTransferStatus& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<FileTransferStatus> FileTransferStatus::FromValue(const base::Value::Dict& value) {
  FileTransferStatus out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<FileTransferStatus> FileTransferStatus::FromValue(const base::Value& value) {
  FileTransferStatus out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict FileTransferStatus::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fileUrl", this->file_url);

  to_value_result.Set("transferState", file_manager_private::ToString(this->transfer_state));

  to_value_result.Set("processed", this->processed);

  to_value_result.Set("total", this->total);

  to_value_result.Set("numTotalJobs", this->num_total_jobs);

  to_value_result.Set("showNotification", this->show_notification);

  to_value_result.Set("hideWhenZeroJobs", this->hide_when_zero_jobs);


  return to_value_result;
}


SyncState::SyncState()
: sync_status(),
progress(0.0) {}

SyncState::~SyncState() = default;
SyncState::SyncState(SyncState&& rhs) noexcept = default;
SyncState& SyncState::operator=(SyncState&& rhs) noexcept = default;
SyncState SyncState::Clone() const {
  SyncState out;
  out.file_url = file_url;
  out.sync_status = sync_status;
  out.progress = progress;
  return out;
}

// static
bool SyncState::Populate(
    const base::Value::Dict& dict, SyncState& out) {
  const base::Value* file_url_value = dict.Find("fileUrl");
  if (!file_url_value) {
    return false;
  }
  {
    auto* temp = (*file_url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_url = *temp;
  }

  const base::Value* sync_status_value = dict.Find("syncStatus");
  if (!sync_status_value) {
    return false;
  }
  {
    const std::string* sync_status_as_string = (*sync_status_value).GetIfString();
    if (!sync_status_as_string) {
      return false;
    }
    out.sync_status = ParseSyncStatus(*sync_status_as_string);
    if (out.sync_status == SyncStatus()) {
      return false;
    }
  }

  const base::Value* progress_value = dict.Find("progress");
  if (!progress_value) {
    return false;
  }
  {
    auto temp = (*progress_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.progress = *temp;
  }

  return true;
}

// static
bool SyncState::Populate(
    const base::Value& value, SyncState& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SyncState> SyncState::FromValue(const base::Value::Dict& value) {
  SyncState out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SyncState> SyncState::FromValue(const base::Value& value) {
  SyncState out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SyncState::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("fileUrl", this->file_url);

  to_value_result.Set("syncStatus", file_manager_private::ToString(this->sync_status));

  to_value_result.Set("progress", this->progress);


  return to_value_result;
}


DriveSyncErrorEvent::DriveSyncErrorEvent()
: type() {}

DriveSyncErrorEvent::~DriveSyncErrorEvent() = default;
DriveSyncErrorEvent::DriveSyncErrorEvent(DriveSyncErrorEvent&& rhs) noexcept = default;
DriveSyncErrorEvent& DriveSyncErrorEvent::operator=(DriveSyncErrorEvent&& rhs) noexcept = default;
DriveSyncErrorEvent DriveSyncErrorEvent::Clone() const {
  DriveSyncErrorEvent out;
  out.type = type;
  out.file_url = file_url;
  out.shared_drive = shared_drive;
  return out;
}

// static
bool DriveSyncErrorEvent::Populate(
    const base::Value::Dict& dict, DriveSyncErrorEvent& out) {
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* drive_sync_error_type_as_string = (*type_value).GetIfString();
    if (!drive_sync_error_type_as_string) {
      return false;
    }
    out.type = ParseDriveSyncErrorType(*drive_sync_error_type_as_string);
    if (out.type == DriveSyncErrorType()) {
      return false;
    }
  }

  const base::Value* file_url_value = dict.Find("fileUrl");
  if (!file_url_value) {
    return false;
  }
  {
    auto* temp = (*file_url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_url = *temp;
  }

  const base::Value* shared_drive_value = dict.Find("sharedDrive");
  if (shared_drive_value) {
    {
      auto* temp = (*shared_drive_value).GetIfString();
      if (!temp) {
        out.shared_drive = std::nullopt;
        return false;
      }
      out.shared_drive = *temp;
    }
  }

  return true;
}

// static
bool DriveSyncErrorEvent::Populate(
    const base::Value& value, DriveSyncErrorEvent& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DriveSyncErrorEvent> DriveSyncErrorEvent::FromValue(const base::Value::Dict& value) {
  DriveSyncErrorEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DriveSyncErrorEvent> DriveSyncErrorEvent::FromValue(const base::Value& value) {
  DriveSyncErrorEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DriveSyncErrorEvent::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("type", file_manager_private::ToString(this->type));

  to_value_result.Set("fileUrl", this->file_url);

  if (this->shared_drive) {
    to_value_result.Set("sharedDrive", *this->shared_drive);

  }

  return to_value_result;
}


DriveConfirmDialogEvent::DriveConfirmDialogEvent()
: type() {}

DriveConfirmDialogEvent::~DriveConfirmDialogEvent() = default;
DriveConfirmDialogEvent::DriveConfirmDialogEvent(DriveConfirmDialogEvent&& rhs) noexcept = default;
DriveConfirmDialogEvent& DriveConfirmDialogEvent::operator=(DriveConfirmDialogEvent&& rhs) noexcept = default;
DriveConfirmDialogEvent DriveConfirmDialogEvent::Clone() const {
  DriveConfirmDialogEvent out;
  out.type = type;
  out.file_url = file_url;
  return out;
}

// static
bool DriveConfirmDialogEvent::Populate(
    const base::Value::Dict& dict, DriveConfirmDialogEvent& out) {
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* drive_confirm_dialog_type_as_string = (*type_value).GetIfString();
    if (!drive_confirm_dialog_type_as_string) {
      return false;
    }
    out.type = ParseDriveConfirmDialogType(*drive_confirm_dialog_type_as_string);
    if (out.type == DriveConfirmDialogType()) {
      return false;
    }
  }

  const base::Value* file_url_value = dict.Find("fileUrl");
  if (!file_url_value) {
    return false;
  }
  {
    auto* temp = (*file_url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_url = *temp;
  }

  return true;
}

// static
bool DriveConfirmDialogEvent::Populate(
    const base::Value& value, DriveConfirmDialogEvent& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DriveConfirmDialogEvent> DriveConfirmDialogEvent::FromValue(const base::Value::Dict& value) {
  DriveConfirmDialogEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DriveConfirmDialogEvent> DriveConfirmDialogEvent::FromValue(const base::Value& value) {
  DriveConfirmDialogEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DriveConfirmDialogEvent::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("type", file_manager_private::ToString(this->type));

  to_value_result.Set("fileUrl", this->file_url);


  return to_value_result;
}


FileChange::FileChange()
 {}

FileChange::~FileChange() = default;
FileChange::FileChange(FileChange&& rhs) noexcept = default;
FileChange& FileChange::operator=(FileChange&& rhs) noexcept = default;
FileChange FileChange::Clone() const {
  FileChange out;
  out.url = url;
  out.changes = changes;
  return out;
}

// static
bool FileChange::Populate(
    const base::Value::Dict& dict, FileChange& out) {
  const base::Value* url_value = dict.Find("url");
  if (!url_value) {
    return false;
  }
  {
    auto* temp = (*url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.url = *temp;
  }

  const base::Value* changes_value = dict.Find("changes");
  if (!changes_value) {
    return false;
  }
  {
    if (!(*changes_value).is_list()) {
      return false;
    }
    else {
      for (const auto& it : ((*changes_value)).GetList()) {
        ChangeType tmp;
        const std::string* change_type_as_string = (it).GetIfString();
        if (!change_type_as_string) {
          return false;
        }
        tmp = ParseChangeType(*change_type_as_string);
        if (tmp == ChangeType()) {
          return false;
        }
        out.changes.push_back(tmp);
      }
    }
  }

  return true;
}

// static
bool FileChange::Populate(
    const base::Value& value, FileChange& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<FileChange> FileChange::FromValue(const base::Value::Dict& value) {
  FileChange out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<FileChange> FileChange::FromValue(const base::Value& value) {
  FileChange out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict FileChange::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("url", this->url);

  {
    std::vector<std::string> changes_list;
    for (const auto& it : (this->changes)) {
      changes_list.emplace_back(file_manager_private::ToString(it));
    }
    to_value_result.Set("changes", json_schema_compiler::util::CreateValueFromArray(changes_list));
  }


  return to_value_result;
}


FileWatchEvent::Entry::Entry()
 {}

FileWatchEvent::Entry::~Entry() = default;
FileWatchEvent::Entry::Entry(Entry&& rhs) noexcept = default;
FileWatchEvent::Entry& FileWatchEvent::Entry::operator=(Entry&& rhs) noexcept = default;
FileWatchEvent::Entry FileWatchEvent::Entry::Clone() const {
  Entry out;
  return out;
}

// static
bool FileWatchEvent::Entry::Populate(
    const base::Value::Dict& dict, Entry& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool FileWatchEvent::Entry::Populate(
    const base::Value& value, Entry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<FileWatchEvent::Entry> FileWatchEvent::Entry::FromValue(const base::Value::Dict& value) {
  Entry out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<FileWatchEvent::Entry> FileWatchEvent::Entry::FromValue(const base::Value& value) {
  Entry out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict FileWatchEvent::Entry::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



FileWatchEvent::FileWatchEvent()
: event_type() {}

FileWatchEvent::~FileWatchEvent() = default;
FileWatchEvent::FileWatchEvent(FileWatchEvent&& rhs) noexcept = default;
FileWatchEvent& FileWatchEvent::operator=(FileWatchEvent&& rhs) noexcept = default;
FileWatchEvent FileWatchEvent::Clone() const {
  FileWatchEvent out;
  out.event_type = event_type;
  out.entry = entry.Clone();
  if (changed_files) {
    out.changed_files.emplace();
    out.changed_files->reserve(changed_files->size());
    for (const auto& element : *changed_files) {
      json_schema_compiler::util::AppendToContainer(*out.changed_files, element.Clone());
    }
  }
  return out;
}

// static
bool FileWatchEvent::Populate(
    const base::Value::Dict& dict, FileWatchEvent& out) {
  const base::Value* event_type_value = dict.Find("eventType");
  if (!event_type_value) {
    return false;
  }
  {
    const std::string* file_watch_event_type_as_string = (*event_type_value).GetIfString();
    if (!file_watch_event_type_as_string) {
      return false;
    }
    out.event_type = ParseFileWatchEventType(*file_watch_event_type_as_string);
    if (out.event_type == FileWatchEventType()) {
      return false;
    }
  }

  const base::Value* entry_value = dict.Find("entry");
  if (!entry_value) {
    return false;
  }
  {
    if (!(*entry_value).is_dict()) {
      return false;
    }
    if (!Entry::Populate((*entry_value).GetDict(), out.entry)) {
      return false;
    }
  }

  const base::Value* changed_files_value = dict.Find("changedFiles");
  if (changed_files_value) {
    {
      if (!(*changed_files_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*changed_files_value).GetList(), out.changed_files)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool FileWatchEvent::Populate(
    const base::Value& value, FileWatchEvent& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<FileWatchEvent> FileWatchEvent::FromValue(const base::Value::Dict& value) {
  FileWatchEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<FileWatchEvent> FileWatchEvent::FromValue(const base::Value& value) {
  FileWatchEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict FileWatchEvent::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("eventType", file_manager_private::ToString(this->event_type));

  to_value_result.Set("entry", (this->entry).ToValue());

  if (this->changed_files) {
    to_value_result.Set("changedFiles", json_schema_compiler::util::CreateValueFromArray(*this->changed_files));

  }

  return to_value_result;
}


GetVolumeRootOptions::GetVolumeRootOptions()
 {}

GetVolumeRootOptions::~GetVolumeRootOptions() = default;
GetVolumeRootOptions::GetVolumeRootOptions(GetVolumeRootOptions&& rhs) noexcept = default;
GetVolumeRootOptions& GetVolumeRootOptions::operator=(GetVolumeRootOptions&& rhs) noexcept = default;
GetVolumeRootOptions GetVolumeRootOptions::Clone() const {
  GetVolumeRootOptions out;
  out.volume_id = volume_id;
  out.writable = writable;
  return out;
}

// static
bool GetVolumeRootOptions::Populate(
    const base::Value::Dict& dict, GetVolumeRootOptions& out) {
  const base::Value* volume_id_value = dict.Find("volumeId");
  if (!volume_id_value) {
    return false;
  }
  {
    auto* temp = (*volume_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.volume_id = *temp;
  }

  const base::Value* writable_value = dict.Find("writable");
  if (writable_value) {
    {
      auto temp = (*writable_value).GetIfBool();
      if (!temp.has_value()) {
        out.writable = std::nullopt;
        return false;
      }
      out.writable = *temp;
    }
  }

  return true;
}

// static
bool GetVolumeRootOptions::Populate(
    const base::Value& value, GetVolumeRootOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GetVolumeRootOptions> GetVolumeRootOptions::FromValue(const base::Value::Dict& value) {
  GetVolumeRootOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GetVolumeRootOptions> GetVolumeRootOptions::FromValue(const base::Value& value) {
  GetVolumeRootOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict GetVolumeRootOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("volumeId", this->volume_id);

  if (this->writable) {
    to_value_result.Set("writable", *this->writable);

  }

  return to_value_result;
}


Preferences::Preferences()
: drive_enabled(false),
drive_sync_enabled_on_metered_network(false),
search_suggest_enabled(false),
use24hour_clock(false),
arc_enabled(false),
arc_removable_media_access_enabled(false),
trash_enabled(false),
office_file_moved_one_drive(0.0),
office_file_moved_google_drive(0.0),
drive_fs_bulk_pinning_available(false),
drive_fs_bulk_pinning_enabled(false) {}

Preferences::~Preferences() = default;
Preferences::Preferences(Preferences&& rhs) noexcept = default;
Preferences& Preferences::operator=(Preferences&& rhs) noexcept = default;
Preferences Preferences::Clone() const {
  Preferences out;
  out.drive_enabled = drive_enabled;
  out.drive_sync_enabled_on_metered_network = drive_sync_enabled_on_metered_network;
  out.search_suggest_enabled = search_suggest_enabled;
  out.use24hour_clock = use24hour_clock;
  out.timezone = timezone;
  out.arc_enabled = arc_enabled;
  out.arc_removable_media_access_enabled = arc_removable_media_access_enabled;
  out.folder_shortcuts = folder_shortcuts;
  out.trash_enabled = trash_enabled;
  out.office_file_moved_one_drive = office_file_moved_one_drive;
  out.office_file_moved_google_drive = office_file_moved_google_drive;
  out.drive_fs_bulk_pinning_available = drive_fs_bulk_pinning_available;
  out.drive_fs_bulk_pinning_enabled = drive_fs_bulk_pinning_enabled;
  return out;
}

// static
bool Preferences::Populate(
    const base::Value::Dict& dict, Preferences& out) {
  const base::Value* drive_enabled_value = dict.Find("driveEnabled");
  if (!drive_enabled_value) {
    return false;
  }
  {
    auto temp = (*drive_enabled_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.drive_enabled = *temp;
  }

  const base::Value* drive_sync_enabled_on_metered_network_value = dict.Find("driveSyncEnabledOnMeteredNetwork");
  if (!drive_sync_enabled_on_metered_network_value) {
    return false;
  }
  {
    auto temp = (*drive_sync_enabled_on_metered_network_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.drive_sync_enabled_on_metered_network = *temp;
  }

  const base::Value* search_suggest_enabled_value = dict.Find("searchSuggestEnabled");
  if (!search_suggest_enabled_value) {
    return false;
  }
  {
    auto temp = (*search_suggest_enabled_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.search_suggest_enabled = *temp;
  }

  const base::Value* use24hour_clock_value = dict.Find("use24hourClock");
  if (!use24hour_clock_value) {
    return false;
  }
  {
    auto temp = (*use24hour_clock_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.use24hour_clock = *temp;
  }

  const base::Value* timezone_value = dict.Find("timezone");
  if (!timezone_value) {
    return false;
  }
  {
    auto* temp = (*timezone_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.timezone = *temp;
  }

  const base::Value* arc_enabled_value = dict.Find("arcEnabled");
  if (!arc_enabled_value) {
    return false;
  }
  {
    auto temp = (*arc_enabled_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.arc_enabled = *temp;
  }

  const base::Value* arc_removable_media_access_enabled_value = dict.Find("arcRemovableMediaAccessEnabled");
  if (!arc_removable_media_access_enabled_value) {
    return false;
  }
  {
    auto temp = (*arc_removable_media_access_enabled_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.arc_removable_media_access_enabled = *temp;
  }

  const base::Value* folder_shortcuts_value = dict.Find("folderShortcuts");
  if (!folder_shortcuts_value) {
    return false;
  }
  {
    if (!(*folder_shortcuts_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*folder_shortcuts_value).GetList(), out.folder_shortcuts)) {
        return false;
      }
    }
  }

  const base::Value* trash_enabled_value = dict.Find("trashEnabled");
  if (!trash_enabled_value) {
    return false;
  }
  {
    auto temp = (*trash_enabled_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.trash_enabled = *temp;
  }

  const base::Value* office_file_moved_one_drive_value = dict.Find("officeFileMovedOneDrive");
  if (!office_file_moved_one_drive_value) {
    return false;
  }
  {
    auto temp = (*office_file_moved_one_drive_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.office_file_moved_one_drive = *temp;
  }

  const base::Value* office_file_moved_google_drive_value = dict.Find("officeFileMovedGoogleDrive");
  if (!office_file_moved_google_drive_value) {
    return false;
  }
  {
    auto temp = (*office_file_moved_google_drive_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.office_file_moved_google_drive = *temp;
  }

  const base::Value* drive_fs_bulk_pinning_available_value = dict.Find("driveFsBulkPinningAvailable");
  if (!drive_fs_bulk_pinning_available_value) {
    return false;
  }
  {
    auto temp = (*drive_fs_bulk_pinning_available_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.drive_fs_bulk_pinning_available = *temp;
  }

  const base::Value* drive_fs_bulk_pinning_enabled_value = dict.Find("driveFsBulkPinningEnabled");
  if (!drive_fs_bulk_pinning_enabled_value) {
    return false;
  }
  {
    auto temp = (*drive_fs_bulk_pinning_enabled_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.drive_fs_bulk_pinning_enabled = *temp;
  }

  return true;
}

// static
bool Preferences::Populate(
    const base::Value& value, Preferences& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Preferences> Preferences::FromValue(const base::Value::Dict& value) {
  Preferences out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Preferences> Preferences::FromValue(const base::Value& value) {
  Preferences out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Preferences::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("driveEnabled", this->drive_enabled);

  to_value_result.Set("driveSyncEnabledOnMeteredNetwork", this->drive_sync_enabled_on_metered_network);

  to_value_result.Set("searchSuggestEnabled", this->search_suggest_enabled);

  to_value_result.Set("use24hourClock", this->use24hour_clock);

  to_value_result.Set("timezone", this->timezone);

  to_value_result.Set("arcEnabled", this->arc_enabled);

  to_value_result.Set("arcRemovableMediaAccessEnabled", this->arc_removable_media_access_enabled);

  to_value_result.Set("folderShortcuts", json_schema_compiler::util::CreateValueFromArray(this->folder_shortcuts));

  to_value_result.Set("trashEnabled", this->trash_enabled);

  to_value_result.Set("officeFileMovedOneDrive", this->office_file_moved_one_drive);

  to_value_result.Set("officeFileMovedGoogleDrive", this->office_file_moved_google_drive);

  to_value_result.Set("driveFsBulkPinningAvailable", this->drive_fs_bulk_pinning_available);

  to_value_result.Set("driveFsBulkPinningEnabled", this->drive_fs_bulk_pinning_enabled);


  return to_value_result;
}


PreferencesChange::PreferencesChange()
 {}

PreferencesChange::~PreferencesChange() = default;
PreferencesChange::PreferencesChange(PreferencesChange&& rhs) noexcept = default;
PreferencesChange& PreferencesChange::operator=(PreferencesChange&& rhs) noexcept = default;
PreferencesChange PreferencesChange::Clone() const {
  PreferencesChange out;
  out.drive_sync_enabled_on_metered_network = drive_sync_enabled_on_metered_network;
  out.arc_enabled = arc_enabled;
  out.arc_removable_media_access_enabled = arc_removable_media_access_enabled;
  out.folder_shortcuts = folder_shortcuts;
  out.drive_fs_bulk_pinning_enabled = drive_fs_bulk_pinning_enabled;
  return out;
}

// static
bool PreferencesChange::Populate(
    const base::Value::Dict& dict, PreferencesChange& out) {
  const base::Value* drive_sync_enabled_on_metered_network_value = dict.Find("driveSyncEnabledOnMeteredNetwork");
  if (drive_sync_enabled_on_metered_network_value) {
    {
      auto temp = (*drive_sync_enabled_on_metered_network_value).GetIfBool();
      if (!temp.has_value()) {
        out.drive_sync_enabled_on_metered_network = std::nullopt;
        return false;
      }
      out.drive_sync_enabled_on_metered_network = *temp;
    }
  }

  const base::Value* arc_enabled_value = dict.Find("arcEnabled");
  if (arc_enabled_value) {
    {
      auto temp = (*arc_enabled_value).GetIfBool();
      if (!temp.has_value()) {
        out.arc_enabled = std::nullopt;
        return false;
      }
      out.arc_enabled = *temp;
    }
  }

  const base::Value* arc_removable_media_access_enabled_value = dict.Find("arcRemovableMediaAccessEnabled");
  if (arc_removable_media_access_enabled_value) {
    {
      auto temp = (*arc_removable_media_access_enabled_value).GetIfBool();
      if (!temp.has_value()) {
        out.arc_removable_media_access_enabled = std::nullopt;
        return false;
      }
      out.arc_removable_media_access_enabled = *temp;
    }
  }

  const base::Value* folder_shortcuts_value = dict.Find("folderShortcuts");
  if (folder_shortcuts_value) {
    {
      if (!(*folder_shortcuts_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*folder_shortcuts_value).GetList(), out.folder_shortcuts)) {
          return false;
        }
      }
    }
  }

  const base::Value* drive_fs_bulk_pinning_enabled_value = dict.Find("driveFsBulkPinningEnabled");
  if (drive_fs_bulk_pinning_enabled_value) {
    {
      auto temp = (*drive_fs_bulk_pinning_enabled_value).GetIfBool();
      if (!temp.has_value()) {
        out.drive_fs_bulk_pinning_enabled = std::nullopt;
        return false;
      }
      out.drive_fs_bulk_pinning_enabled = *temp;
    }
  }

  return true;
}

// static
bool PreferencesChange::Populate(
    const base::Value& value, PreferencesChange& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PreferencesChange> PreferencesChange::FromValue(const base::Value::Dict& value) {
  PreferencesChange out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PreferencesChange> PreferencesChange::FromValue(const base::Value& value) {
  PreferencesChange out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict PreferencesChange::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->drive_sync_enabled_on_metered_network) {
    to_value_result.Set("driveSyncEnabledOnMeteredNetwork", *this->drive_sync_enabled_on_metered_network);

  }
  if (this->arc_enabled) {
    to_value_result.Set("arcEnabled", *this->arc_enabled);

  }
  if (this->arc_removable_media_access_enabled) {
    to_value_result.Set("arcRemovableMediaAccessEnabled", *this->arc_removable_media_access_enabled);

  }
  if (this->folder_shortcuts) {
    to_value_result.Set("folderShortcuts", json_schema_compiler::util::CreateValueFromArray(*this->folder_shortcuts));

  }
  if (this->drive_fs_bulk_pinning_enabled) {
    to_value_result.Set("driveFsBulkPinningEnabled", *this->drive_fs_bulk_pinning_enabled);

  }

  return to_value_result;
}


SearchParams::SearchParams()
: category() {}

SearchParams::~SearchParams() = default;
SearchParams::SearchParams(SearchParams&& rhs) noexcept = default;
SearchParams& SearchParams::operator=(SearchParams&& rhs) noexcept = default;
SearchParams SearchParams::Clone() const {
  SearchParams out;
  out.query = query;
  out.category = category;
  out.modified_timestamp = modified_timestamp;
  out.next_feed = next_feed;
  return out;
}

// static
bool SearchParams::Populate(
    const base::Value::Dict& dict, SearchParams& out) {
  out.category = FileCategory();
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

  const base::Value* category_value = dict.Find("category");
  if (category_value) {
    {
      const std::string* file_category_as_string = (*category_value).GetIfString();
      if (!file_category_as_string) {
        return false;
      }
      out.category = ParseFileCategory(*file_category_as_string);
      if (out.category == FileCategory()) {
        return false;
      }
    }
    } else {
    out.category = FileCategory();
  }

  const base::Value* modified_timestamp_value = dict.Find("modifiedTimestamp");
  if (modified_timestamp_value) {
    {
      auto temp = (*modified_timestamp_value).GetIfDouble();
      if (!temp.has_value()) {
        out.modified_timestamp = std::nullopt;
        return false;
      }
      out.modified_timestamp = *temp;
    }
  }

  const base::Value* next_feed_value = dict.Find("nextFeed");
  if (!next_feed_value) {
    return false;
  }
  {
    auto* temp = (*next_feed_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.next_feed = *temp;
  }

  return true;
}

// static
bool SearchParams::Populate(
    const base::Value& value, SearchParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SearchParams> SearchParams::FromValue(const base::Value::Dict& value) {
  SearchParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SearchParams> SearchParams::FromValue(const base::Value& value) {
  SearchParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SearchParams::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("query", this->query);

  if (this->category != FileCategory()) {
    to_value_result.Set("category", file_manager_private::ToString(this->category));

  }
  if (this->modified_timestamp) {
    to_value_result.Set("modifiedTimestamp", *this->modified_timestamp);

  }
  to_value_result.Set("nextFeed", this->next_feed);


  return to_value_result;
}


SearchMetadataParams::RootDir::RootDir()
 {}

SearchMetadataParams::RootDir::~RootDir() = default;
SearchMetadataParams::RootDir::RootDir(RootDir&& rhs) noexcept = default;
SearchMetadataParams::RootDir& SearchMetadataParams::RootDir::operator=(RootDir&& rhs) noexcept = default;
SearchMetadataParams::RootDir SearchMetadataParams::RootDir::Clone() const {
  RootDir out;
  return out;
}

// static
bool SearchMetadataParams::RootDir::Populate(
    const base::Value::Dict& dict, RootDir& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool SearchMetadataParams::RootDir::Populate(
    const base::Value& value, RootDir& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SearchMetadataParams::RootDir> SearchMetadataParams::RootDir::FromValue(const base::Value::Dict& value) {
  RootDir out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SearchMetadataParams::RootDir> SearchMetadataParams::RootDir::FromValue(const base::Value& value) {
  RootDir out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SearchMetadataParams::RootDir::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



SearchMetadataParams::SearchMetadataParams()
: types(),
max_results(0),
category() {}

SearchMetadataParams::~SearchMetadataParams() = default;
SearchMetadataParams::SearchMetadataParams(SearchMetadataParams&& rhs) noexcept = default;
SearchMetadataParams& SearchMetadataParams::operator=(SearchMetadataParams&& rhs) noexcept = default;
SearchMetadataParams SearchMetadataParams::Clone() const {
  SearchMetadataParams out;
  if (root_dir) {
    out.root_dir = root_dir->Clone();
  }
  out.query = query;
  out.types = types;
  out.max_results = max_results;
  out.modified_timestamp = modified_timestamp;
  out.category = category;
  return out;
}

// static
bool SearchMetadataParams::Populate(
    const base::Value::Dict& dict, SearchMetadataParams& out) {
  out.category = FileCategory();
  const base::Value* root_dir_value = dict.Find("rootDir");
  if (root_dir_value) {
    {
      if (!(*root_dir_value).is_dict()) {
        return false;
      }
      else {
        RootDir temp;
        if (!RootDir::Populate((*root_dir_value).GetDict(), temp))
          return false;
        out.root_dir = std::move(temp);
      }
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
    out.types = ParseSearchType(*search_type_as_string);
    if (out.types == SearchType()) {
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
  if (modified_timestamp_value) {
    {
      auto temp = (*modified_timestamp_value).GetIfDouble();
      if (!temp.has_value()) {
        out.modified_timestamp = std::nullopt;
        return false;
      }
      out.modified_timestamp = *temp;
    }
  }

  const base::Value* category_value = dict.Find("category");
  if (category_value) {
    {
      const std::string* file_category_as_string = (*category_value).GetIfString();
      if (!file_category_as_string) {
        return false;
      }
      out.category = ParseFileCategory(*file_category_as_string);
      if (out.category == FileCategory()) {
        return false;
      }
    }
    } else {
    out.category = FileCategory();
  }

  return true;
}

// static
bool SearchMetadataParams::Populate(
    const base::Value& value, SearchMetadataParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SearchMetadataParams> SearchMetadataParams::FromValue(const base::Value::Dict& value) {
  SearchMetadataParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SearchMetadataParams> SearchMetadataParams::FromValue(const base::Value& value) {
  SearchMetadataParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SearchMetadataParams::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->root_dir) {
    to_value_result.Set("rootDir", (this->root_dir)->ToValue());

  }
  to_value_result.Set("query", this->query);

  to_value_result.Set("types", file_manager_private::ToString(this->types));

  to_value_result.Set("maxResults", this->max_results);

  if (this->modified_timestamp) {
    to_value_result.Set("modifiedTimestamp", *this->modified_timestamp);

  }
  if (this->category != FileCategory()) {
    to_value_result.Set("category", file_manager_private::ToString(this->category));

  }

  return to_value_result;
}


DriveMetadataSearchResult::Entry::Entry()
 {}

DriveMetadataSearchResult::Entry::~Entry() = default;
DriveMetadataSearchResult::Entry::Entry(Entry&& rhs) noexcept = default;
DriveMetadataSearchResult::Entry& DriveMetadataSearchResult::Entry::operator=(Entry&& rhs) noexcept = default;
DriveMetadataSearchResult::Entry DriveMetadataSearchResult::Entry::Clone() const {
  Entry out;
  return out;
}

// static
bool DriveMetadataSearchResult::Entry::Populate(
    const base::Value::Dict& dict, Entry& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool DriveMetadataSearchResult::Entry::Populate(
    const base::Value& value, Entry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DriveMetadataSearchResult::Entry> DriveMetadataSearchResult::Entry::FromValue(const base::Value::Dict& value) {
  Entry out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DriveMetadataSearchResult::Entry> DriveMetadataSearchResult::Entry::FromValue(const base::Value& value) {
  Entry out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DriveMetadataSearchResult::Entry::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



DriveMetadataSearchResult::DriveMetadataSearchResult()
 {}

DriveMetadataSearchResult::~DriveMetadataSearchResult() = default;
DriveMetadataSearchResult::DriveMetadataSearchResult(DriveMetadataSearchResult&& rhs) noexcept = default;
DriveMetadataSearchResult& DriveMetadataSearchResult::operator=(DriveMetadataSearchResult&& rhs) noexcept = default;
DriveMetadataSearchResult DriveMetadataSearchResult::Clone() const {
  DriveMetadataSearchResult out;
  out.entry = entry.Clone();
  out.highlighted_base_name = highlighted_base_name;
  out.available_offline = available_offline;
  return out;
}

// static
bool DriveMetadataSearchResult::Populate(
    const base::Value::Dict& dict, DriveMetadataSearchResult& out) {
  const base::Value* entry_value = dict.Find("entry");
  if (!entry_value) {
    return false;
  }
  {
    if (!(*entry_value).is_dict()) {
      return false;
    }
    if (!Entry::Populate((*entry_value).GetDict(), out.entry)) {
      return false;
    }
  }

  const base::Value* highlighted_base_name_value = dict.Find("highlightedBaseName");
  if (!highlighted_base_name_value) {
    return false;
  }
  {
    auto* temp = (*highlighted_base_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.highlighted_base_name = *temp;
  }

  const base::Value* available_offline_value = dict.Find("availableOffline");
  if (available_offline_value) {
    {
      auto temp = (*available_offline_value).GetIfBool();
      if (!temp.has_value()) {
        out.available_offline = std::nullopt;
        return false;
      }
      out.available_offline = *temp;
    }
  }

  return true;
}

// static
bool DriveMetadataSearchResult::Populate(
    const base::Value& value, DriveMetadataSearchResult& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DriveMetadataSearchResult> DriveMetadataSearchResult::FromValue(const base::Value::Dict& value) {
  DriveMetadataSearchResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DriveMetadataSearchResult> DriveMetadataSearchResult::FromValue(const base::Value& value) {
  DriveMetadataSearchResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DriveMetadataSearchResult::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("entry", (this->entry).ToValue());

  to_value_result.Set("highlightedBaseName", this->highlighted_base_name);

  if (this->available_offline) {
    to_value_result.Set("availableOffline", *this->available_offline);

  }

  return to_value_result;
}


DriveConnectionState::DriveConnectionState()
: type(),
reason() {}

DriveConnectionState::~DriveConnectionState() = default;
DriveConnectionState::DriveConnectionState(DriveConnectionState&& rhs) noexcept = default;
DriveConnectionState& DriveConnectionState::operator=(DriveConnectionState&& rhs) noexcept = default;
DriveConnectionState DriveConnectionState::Clone() const {
  DriveConnectionState out;
  out.type = type;
  out.reason = reason;
  return out;
}

// static
bool DriveConnectionState::Populate(
    const base::Value::Dict& dict, DriveConnectionState& out) {
  out.reason = DriveOfflineReason();
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* drive_connection_state_type_as_string = (*type_value).GetIfString();
    if (!drive_connection_state_type_as_string) {
      return false;
    }
    out.type = ParseDriveConnectionStateType(*drive_connection_state_type_as_string);
    if (out.type == DriveConnectionStateType()) {
      return false;
    }
  }

  const base::Value* reason_value = dict.Find("reason");
  if (reason_value) {
    {
      const std::string* drive_offline_reason_as_string = (*reason_value).GetIfString();
      if (!drive_offline_reason_as_string) {
        return false;
      }
      out.reason = ParseDriveOfflineReason(*drive_offline_reason_as_string);
      if (out.reason == DriveOfflineReason()) {
        return false;
      }
    }
    } else {
    out.reason = DriveOfflineReason();
  }

  return true;
}

// static
bool DriveConnectionState::Populate(
    const base::Value& value, DriveConnectionState& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DriveConnectionState> DriveConnectionState::FromValue(const base::Value::Dict& value) {
  DriveConnectionState out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DriveConnectionState> DriveConnectionState::FromValue(const base::Value& value) {
  DriveConnectionState out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DriveConnectionState::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("type", file_manager_private::ToString(this->type));

  if (this->reason != DriveOfflineReason()) {
    to_value_result.Set("reason", file_manager_private::ToString(this->reason));

  }

  return to_value_result;
}


DeviceEvent::DeviceEvent()
: type() {}

DeviceEvent::~DeviceEvent() = default;
DeviceEvent::DeviceEvent(DeviceEvent&& rhs) noexcept = default;
DeviceEvent& DeviceEvent::operator=(DeviceEvent&& rhs) noexcept = default;
DeviceEvent DeviceEvent::Clone() const {
  DeviceEvent out;
  out.type = type;
  out.device_path = device_path;
  out.device_label = device_label;
  return out;
}

// static
bool DeviceEvent::Populate(
    const base::Value::Dict& dict, DeviceEvent& out) {
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* device_event_type_as_string = (*type_value).GetIfString();
    if (!device_event_type_as_string) {
      return false;
    }
    out.type = ParseDeviceEventType(*device_event_type_as_string);
    if (out.type == DeviceEventType()) {
      return false;
    }
  }

  const base::Value* device_path_value = dict.Find("devicePath");
  if (!device_path_value) {
    return false;
  }
  {
    auto* temp = (*device_path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.device_path = *temp;
  }

  const base::Value* device_label_value = dict.Find("deviceLabel");
  if (!device_label_value) {
    return false;
  }
  {
    auto* temp = (*device_label_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.device_label = *temp;
  }

  return true;
}

// static
bool DeviceEvent::Populate(
    const base::Value& value, DeviceEvent& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DeviceEvent> DeviceEvent::FromValue(const base::Value::Dict& value) {
  DeviceEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DeviceEvent> DeviceEvent::FromValue(const base::Value& value) {
  DeviceEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DeviceEvent::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("type", file_manager_private::ToString(this->type));

  to_value_result.Set("devicePath", this->device_path);

  to_value_result.Set("deviceLabel", this->device_label);


  return to_value_result;
}


Provider::Provider()
: configurable(false),
watchable(false),
multiple_mounts(false),
source() {}

Provider::~Provider() = default;
Provider::Provider(Provider&& rhs) noexcept = default;
Provider& Provider::operator=(Provider&& rhs) noexcept = default;
Provider Provider::Clone() const {
  Provider out;
  out.provider_id = provider_id;
  out.icon_set = icon_set.Clone();
  out.name = name;
  out.configurable = configurable;
  out.watchable = watchable;
  out.multiple_mounts = multiple_mounts;
  out.source = source;
  return out;
}

// static
bool Provider::Populate(
    const base::Value::Dict& dict, Provider& out) {
  const base::Value* provider_id_value = dict.Find("providerId");
  if (!provider_id_value) {
    return false;
  }
  {
    auto* temp = (*provider_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.provider_id = *temp;
  }

  const base::Value* icon_set_value = dict.Find("iconSet");
  if (!icon_set_value) {
    return false;
  }
  {
    if (!(*icon_set_value).is_dict()) {
      return false;
    }
    if (!IconSet::Populate((*icon_set_value).GetDict(), out.icon_set)) {
      return false;
    }
  }

  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.name = *temp;
  }

  const base::Value* configurable_value = dict.Find("configurable");
  if (!configurable_value) {
    return false;
  }
  {
    auto temp = (*configurable_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.configurable = *temp;
  }

  const base::Value* watchable_value = dict.Find("watchable");
  if (!watchable_value) {
    return false;
  }
  {
    auto temp = (*watchable_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.watchable = *temp;
  }

  const base::Value* multiple_mounts_value = dict.Find("multipleMounts");
  if (!multiple_mounts_value) {
    return false;
  }
  {
    auto temp = (*multiple_mounts_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.multiple_mounts = *temp;
  }

  const base::Value* source_value = dict.Find("source");
  if (!source_value) {
    return false;
  }
  {
    const std::string* provider_source_as_string = (*source_value).GetIfString();
    if (!provider_source_as_string) {
      return false;
    }
    out.source = ParseProviderSource(*provider_source_as_string);
    if (out.source == ProviderSource()) {
      return false;
    }
  }

  return true;
}

// static
bool Provider::Populate(
    const base::Value& value, Provider& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Provider> Provider::FromValue(const base::Value::Dict& value) {
  Provider out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Provider> Provider::FromValue(const base::Value& value) {
  Provider out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Provider::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("providerId", this->provider_id);

  to_value_result.Set("iconSet", (this->icon_set).ToValue());

  to_value_result.Set("name", this->name);

  to_value_result.Set("configurable", this->configurable);

  to_value_result.Set("watchable", this->watchable);

  to_value_result.Set("multipleMounts", this->multiple_mounts);

  to_value_result.Set("source", file_manager_private::ToString(this->source));


  return to_value_result;
}


FileSystemProviderAction::FileSystemProviderAction()
 {}

FileSystemProviderAction::~FileSystemProviderAction() = default;
FileSystemProviderAction::FileSystemProviderAction(FileSystemProviderAction&& rhs) noexcept = default;
FileSystemProviderAction& FileSystemProviderAction::operator=(FileSystemProviderAction&& rhs) noexcept = default;
FileSystemProviderAction FileSystemProviderAction::Clone() const {
  FileSystemProviderAction out;
  out.id = id;
  out.title = title;
  return out;
}

// static
bool FileSystemProviderAction::Populate(
    const base::Value::Dict& dict, FileSystemProviderAction& out) {
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
        out.title = std::nullopt;
        return false;
      }
      out.title = *temp;
    }
  }

  return true;
}

// static
bool FileSystemProviderAction::Populate(
    const base::Value& value, FileSystemProviderAction& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<FileSystemProviderAction> FileSystemProviderAction::FromValue(const base::Value::Dict& value) {
  FileSystemProviderAction out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<FileSystemProviderAction> FileSystemProviderAction::FromValue(const base::Value& value) {
  FileSystemProviderAction out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict FileSystemProviderAction::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  if (this->title) {
    to_value_result.Set("title", *this->title);

  }

  return to_value_result;
}


LinuxPackageInfo::LinuxPackageInfo()
 {}

LinuxPackageInfo::~LinuxPackageInfo() = default;
LinuxPackageInfo::LinuxPackageInfo(LinuxPackageInfo&& rhs) noexcept = default;
LinuxPackageInfo& LinuxPackageInfo::operator=(LinuxPackageInfo&& rhs) noexcept = default;
LinuxPackageInfo LinuxPackageInfo::Clone() const {
  LinuxPackageInfo out;
  out.name = name;
  out.version = version;
  out.summary = summary;
  out.description = description;
  return out;
}

// static
bool LinuxPackageInfo::Populate(
    const base::Value::Dict& dict, LinuxPackageInfo& out) {
  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.name = *temp;
  }

  const base::Value* version_value = dict.Find("version");
  if (!version_value) {
    return false;
  }
  {
    auto* temp = (*version_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.version = *temp;
  }

  const base::Value* summary_value = dict.Find("summary");
  if (summary_value) {
    {
      auto* temp = (*summary_value).GetIfString();
      if (!temp) {
        out.summary = std::nullopt;
        return false;
      }
      out.summary = *temp;
    }
  }

  const base::Value* description_value = dict.Find("description");
  if (description_value) {
    {
      auto* temp = (*description_value).GetIfString();
      if (!temp) {
        out.description = std::nullopt;
        return false;
      }
      out.description = *temp;
    }
  }

  return true;
}

// static
bool LinuxPackageInfo::Populate(
    const base::Value& value, LinuxPackageInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<LinuxPackageInfo> LinuxPackageInfo::FromValue(const base::Value::Dict& value) {
  LinuxPackageInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<LinuxPackageInfo> LinuxPackageInfo::FromValue(const base::Value& value) {
  LinuxPackageInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict LinuxPackageInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("name", this->name);

  to_value_result.Set("version", this->version);

  if (this->summary) {
    to_value_result.Set("summary", *this->summary);

  }
  if (this->description) {
    to_value_result.Set("description", *this->description);

  }

  return to_value_result;
}


CrostiniEvent::EntriesType::EntriesType()
 {}

CrostiniEvent::EntriesType::~EntriesType() = default;
CrostiniEvent::EntriesType::EntriesType(EntriesType&& rhs) noexcept = default;
CrostiniEvent::EntriesType& CrostiniEvent::EntriesType::operator=(EntriesType&& rhs) noexcept = default;
CrostiniEvent::EntriesType CrostiniEvent::EntriesType::Clone() const {
  EntriesType out;
  return out;
}

// static
bool CrostiniEvent::EntriesType::Populate(
    const base::Value::Dict& dict, EntriesType& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool CrostiniEvent::EntriesType::Populate(
    const base::Value& value, EntriesType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CrostiniEvent::EntriesType> CrostiniEvent::EntriesType::FromValue(const base::Value::Dict& value) {
  EntriesType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CrostiniEvent::EntriesType> CrostiniEvent::EntriesType::FromValue(const base::Value& value) {
  EntriesType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict CrostiniEvent::EntriesType::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}




CrostiniEvent::CrostiniEvent()
: event_type() {}

CrostiniEvent::~CrostiniEvent() = default;
CrostiniEvent::CrostiniEvent(CrostiniEvent&& rhs) noexcept = default;
CrostiniEvent& CrostiniEvent::operator=(CrostiniEvent&& rhs) noexcept = default;
CrostiniEvent CrostiniEvent::Clone() const {
  CrostiniEvent out;
  out.event_type = event_type;
  out.vm_name = vm_name;
  out.container_name = container_name;
  out.entries.reserve(entries.size());
  for (const auto& element : entries) {
    json_schema_compiler::util::AppendToContainer(out.entries, element.Clone());
  }
  return out;
}

// static
bool CrostiniEvent::Populate(
    const base::Value::Dict& dict, CrostiniEvent& out) {
  const base::Value* event_type_value = dict.Find("eventType");
  if (!event_type_value) {
    return false;
  }
  {
    const std::string* crostini_event_type_as_string = (*event_type_value).GetIfString();
    if (!crostini_event_type_as_string) {
      return false;
    }
    out.event_type = ParseCrostiniEventType(*crostini_event_type_as_string);
    if (out.event_type == CrostiniEventType()) {
      return false;
    }
  }

  const base::Value* vm_name_value = dict.Find("vmName");
  if (!vm_name_value) {
    return false;
  }
  {
    auto* temp = (*vm_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.vm_name = *temp;
  }

  const base::Value* container_name_value = dict.Find("containerName");
  if (!container_name_value) {
    return false;
  }
  {
    auto* temp = (*container_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.container_name = *temp;
  }

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

  return true;
}

// static
bool CrostiniEvent::Populate(
    const base::Value& value, CrostiniEvent& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CrostiniEvent> CrostiniEvent::FromValue(const base::Value::Dict& value) {
  CrostiniEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CrostiniEvent> CrostiniEvent::FromValue(const base::Value& value) {
  CrostiniEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict CrostiniEvent::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("eventType", file_manager_private::ToString(this->event_type));

  to_value_result.Set("vmName", this->vm_name);

  to_value_result.Set("containerName", this->container_name);

  to_value_result.Set("entries", json_schema_compiler::util::CreateValueFromArray(this->entries));


  return to_value_result;
}


CrostiniSharedPathResponse::EntriesType::EntriesType()
 {}

CrostiniSharedPathResponse::EntriesType::~EntriesType() = default;
CrostiniSharedPathResponse::EntriesType::EntriesType(EntriesType&& rhs) noexcept = default;
CrostiniSharedPathResponse::EntriesType& CrostiniSharedPathResponse::EntriesType::operator=(EntriesType&& rhs) noexcept = default;
CrostiniSharedPathResponse::EntriesType CrostiniSharedPathResponse::EntriesType::Clone() const {
  EntriesType out;
  return out;
}

// static
bool CrostiniSharedPathResponse::EntriesType::Populate(
    const base::Value::Dict& dict, EntriesType& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool CrostiniSharedPathResponse::EntriesType::Populate(
    const base::Value& value, EntriesType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CrostiniSharedPathResponse::EntriesType> CrostiniSharedPathResponse::EntriesType::FromValue(const base::Value::Dict& value) {
  EntriesType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CrostiniSharedPathResponse::EntriesType> CrostiniSharedPathResponse::EntriesType::FromValue(const base::Value& value) {
  EntriesType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict CrostiniSharedPathResponse::EntriesType::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

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


AndroidApp::AndroidApp()
 {}

AndroidApp::~AndroidApp() = default;
AndroidApp::AndroidApp(AndroidApp&& rhs) noexcept = default;
AndroidApp& AndroidApp::operator=(AndroidApp&& rhs) noexcept = default;
AndroidApp AndroidApp::Clone() const {
  AndroidApp out;
  out.name = name;
  out.package_name = package_name;
  out.activity_name = activity_name;
  if (icon_set) {
    out.icon_set = icon_set->Clone();
  }
  return out;
}

// static
bool AndroidApp::Populate(
    const base::Value::Dict& dict, AndroidApp& out) {
  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.name = *temp;
  }

  const base::Value* package_name_value = dict.Find("packageName");
  if (!package_name_value) {
    return false;
  }
  {
    auto* temp = (*package_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.package_name = *temp;
  }

  const base::Value* activity_name_value = dict.Find("activityName");
  if (!activity_name_value) {
    return false;
  }
  {
    auto* temp = (*activity_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.activity_name = *temp;
  }

  const base::Value* icon_set_value = dict.Find("iconSet");
  if (icon_set_value) {
    {
      if (!(*icon_set_value).is_dict()) {
        return false;
      }
      else {
        IconSet temp;
        if (!IconSet::Populate((*icon_set_value).GetDict(), temp))
          return false;
        out.icon_set = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool AndroidApp::Populate(
    const base::Value& value, AndroidApp& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AndroidApp> AndroidApp::FromValue(const base::Value::Dict& value) {
  AndroidApp out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AndroidApp> AndroidApp::FromValue(const base::Value& value) {
  AndroidApp out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict AndroidApp::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("name", this->name);

  to_value_result.Set("packageName", this->package_name);

  to_value_result.Set("activityName", this->activity_name);

  if (this->icon_set) {
    to_value_result.Set("iconSet", (this->icon_set)->ToValue());

  }

  return to_value_result;
}


StreamInfo::Tags::Tags()
 {}

StreamInfo::Tags::~Tags() = default;
StreamInfo::Tags::Tags(Tags&& rhs) noexcept = default;
StreamInfo::Tags& StreamInfo::Tags::operator=(Tags&& rhs) noexcept = default;
StreamInfo::Tags StreamInfo::Tags::Clone() const {
  Tags out;
  return out;
}

// static
bool StreamInfo::Tags::Populate(
    const base::Value::Dict& dict, Tags& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool StreamInfo::Tags::Populate(
    const base::Value& value, Tags& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<StreamInfo::Tags> StreamInfo::Tags::FromValue(const base::Value::Dict& value) {
  Tags out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<StreamInfo::Tags> StreamInfo::Tags::FromValue(const base::Value& value) {
  Tags out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict StreamInfo::Tags::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



StreamInfo::StreamInfo()
 {}

StreamInfo::~StreamInfo() = default;
StreamInfo::StreamInfo(StreamInfo&& rhs) noexcept = default;
StreamInfo& StreamInfo::operator=(StreamInfo&& rhs) noexcept = default;
StreamInfo StreamInfo::Clone() const {
  StreamInfo out;
  out.type = type;
  out.tags = tags.Clone();
  return out;
}

// static
bool StreamInfo::Populate(
    const base::Value::Dict& dict, StreamInfo& out) {
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    auto* temp = (*type_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.type = *temp;
  }

  const base::Value* tags_value = dict.Find("tags");
  if (!tags_value) {
    return false;
  }
  {
    if (!(*tags_value).is_dict()) {
      return false;
    }
    if (!Tags::Populate((*tags_value).GetDict(), out.tags)) {
      return false;
    }
  }

  return true;
}

// static
bool StreamInfo::Populate(
    const base::Value& value, StreamInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<StreamInfo> StreamInfo::FromValue(const base::Value::Dict& value) {
  StreamInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<StreamInfo> StreamInfo::FromValue(const base::Value& value) {
  StreamInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict StreamInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("type", this->type);

  to_value_result.Set("tags", (this->tags).ToValue());


  return to_value_result;
}


AttachedImages::AttachedImages()
 {}

AttachedImages::~AttachedImages() = default;
AttachedImages::AttachedImages(AttachedImages&& rhs) noexcept = default;
AttachedImages& AttachedImages::operator=(AttachedImages&& rhs) noexcept = default;
AttachedImages AttachedImages::Clone() const {
  AttachedImages out;
  out.data = data;
  out.type = type;
  return out;
}

// static
bool AttachedImages::Populate(
    const base::Value::Dict& dict, AttachedImages& out) {
  const base::Value* data_value = dict.Find("data");
  if (!data_value) {
    return false;
  }
  {
    auto* temp = (*data_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.data = *temp;
  }

  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    auto* temp = (*type_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.type = *temp;
  }

  return true;
}

// static
bool AttachedImages::Populate(
    const base::Value& value, AttachedImages& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AttachedImages> AttachedImages::FromValue(const base::Value::Dict& value) {
  AttachedImages out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AttachedImages> AttachedImages::FromValue(const base::Value& value) {
  AttachedImages out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict AttachedImages::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("data", this->data);

  to_value_result.Set("type", this->type);


  return to_value_result;
}


MediaMetadata::MediaMetadata()
 {}

MediaMetadata::~MediaMetadata() = default;
MediaMetadata::MediaMetadata(MediaMetadata&& rhs) noexcept = default;
MediaMetadata& MediaMetadata::operator=(MediaMetadata&& rhs) noexcept = default;
MediaMetadata MediaMetadata::Clone() const {
  MediaMetadata out;
  out.mime_type = mime_type;
  out.height = height;
  out.width = width;
  out.duration = duration;
  out.rotation = rotation;
  out.album = album;
  out.artist = artist;
  out.comment = comment;
  out.copyright = copyright;
  out.disc = disc;
  out.genre = genre;
  out.language = language;
  out.title = title;
  out.track = track;
  out.raw_tags.reserve(raw_tags.size());
  for (const auto& element : raw_tags) {
    json_schema_compiler::util::AppendToContainer(out.raw_tags, element.Clone());
  }
  out.attached_images.reserve(attached_images.size());
  for (const auto& element : attached_images) {
    json_schema_compiler::util::AppendToContainer(out.attached_images, element.Clone());
  }
  return out;
}

// static
bool MediaMetadata::Populate(
    const base::Value::Dict& dict, MediaMetadata& out) {
  const base::Value* mime_type_value = dict.Find("mimeType");
  if (!mime_type_value) {
    return false;
  }
  {
    auto* temp = (*mime_type_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.mime_type = *temp;
  }

  const base::Value* height_value = dict.Find("height");
  if (height_value) {
    {
      auto temp = (*height_value).GetIfInt();
      if (!temp.has_value()) {
        out.height = std::nullopt;
        return false;
      }
      out.height = *temp;
    }
  }

  const base::Value* width_value = dict.Find("width");
  if (width_value) {
    {
      auto temp = (*width_value).GetIfInt();
      if (!temp.has_value()) {
        out.width = std::nullopt;
        return false;
      }
      out.width = *temp;
    }
  }

  const base::Value* duration_value = dict.Find("duration");
  if (duration_value) {
    {
      auto temp = (*duration_value).GetIfDouble();
      if (!temp.has_value()) {
        out.duration = std::nullopt;
        return false;
      }
      out.duration = *temp;
    }
  }

  const base::Value* rotation_value = dict.Find("rotation");
  if (rotation_value) {
    {
      auto temp = (*rotation_value).GetIfInt();
      if (!temp.has_value()) {
        out.rotation = std::nullopt;
        return false;
      }
      out.rotation = *temp;
    }
  }

  const base::Value* album_value = dict.Find("album");
  if (album_value) {
    {
      auto* temp = (*album_value).GetIfString();
      if (!temp) {
        out.album = std::nullopt;
        return false;
      }
      out.album = *temp;
    }
  }

  const base::Value* artist_value = dict.Find("artist");
  if (artist_value) {
    {
      auto* temp = (*artist_value).GetIfString();
      if (!temp) {
        out.artist = std::nullopt;
        return false;
      }
      out.artist = *temp;
    }
  }

  const base::Value* comment_value = dict.Find("comment");
  if (comment_value) {
    {
      auto* temp = (*comment_value).GetIfString();
      if (!temp) {
        out.comment = std::nullopt;
        return false;
      }
      out.comment = *temp;
    }
  }

  const base::Value* copyright_value = dict.Find("copyright");
  if (copyright_value) {
    {
      auto* temp = (*copyright_value).GetIfString();
      if (!temp) {
        out.copyright = std::nullopt;
        return false;
      }
      out.copyright = *temp;
    }
  }

  const base::Value* disc_value = dict.Find("disc");
  if (disc_value) {
    {
      auto temp = (*disc_value).GetIfInt();
      if (!temp.has_value()) {
        out.disc = std::nullopt;
        return false;
      }
      out.disc = *temp;
    }
  }

  const base::Value* genre_value = dict.Find("genre");
  if (genre_value) {
    {
      auto* temp = (*genre_value).GetIfString();
      if (!temp) {
        out.genre = std::nullopt;
        return false;
      }
      out.genre = *temp;
    }
  }

  const base::Value* language_value = dict.Find("language");
  if (language_value) {
    {
      auto* temp = (*language_value).GetIfString();
      if (!temp) {
        out.language = std::nullopt;
        return false;
      }
      out.language = *temp;
    }
  }

  const base::Value* title_value = dict.Find("title");
  if (title_value) {
    {
      auto* temp = (*title_value).GetIfString();
      if (!temp) {
        out.title = std::nullopt;
        return false;
      }
      out.title = *temp;
    }
  }

  const base::Value* track_value = dict.Find("track");
  if (track_value) {
    {
      auto temp = (*track_value).GetIfInt();
      if (!temp.has_value()) {
        out.track = std::nullopt;
        return false;
      }
      out.track = *temp;
    }
  }

  const base::Value* raw_tags_value = dict.Find("rawTags");
  if (!raw_tags_value) {
    return false;
  }
  {
    if (!(*raw_tags_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*raw_tags_value).GetList(), out.raw_tags)) {
        return false;
      }
    }
  }

  const base::Value* attached_images_value = dict.Find("attachedImages");
  if (!attached_images_value) {
    return false;
  }
  {
    if (!(*attached_images_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*attached_images_value).GetList(), out.attached_images)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool MediaMetadata::Populate(
    const base::Value& value, MediaMetadata& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<MediaMetadata> MediaMetadata::FromValue(const base::Value::Dict& value) {
  MediaMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<MediaMetadata> MediaMetadata::FromValue(const base::Value& value) {
  MediaMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict MediaMetadata::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("mimeType", this->mime_type);

  if (this->height) {
    to_value_result.Set("height", *this->height);

  }
  if (this->width) {
    to_value_result.Set("width", *this->width);

  }
  if (this->duration) {
    to_value_result.Set("duration", *this->duration);

  }
  if (this->rotation) {
    to_value_result.Set("rotation", *this->rotation);

  }
  if (this->album) {
    to_value_result.Set("album", *this->album);

  }
  if (this->artist) {
    to_value_result.Set("artist", *this->artist);

  }
  if (this->comment) {
    to_value_result.Set("comment", *this->comment);

  }
  if (this->copyright) {
    to_value_result.Set("copyright", *this->copyright);

  }
  if (this->disc) {
    to_value_result.Set("disc", *this->disc);

  }
  if (this->genre) {
    to_value_result.Set("genre", *this->genre);

  }
  if (this->language) {
    to_value_result.Set("language", *this->language);

  }
  if (this->title) {
    to_value_result.Set("title", *this->title);

  }
  if (this->track) {
    to_value_result.Set("track", *this->track);

  }
  to_value_result.Set("rawTags", json_schema_compiler::util::CreateValueFromArray(this->raw_tags));

  to_value_result.Set("attachedImages", json_schema_compiler::util::CreateValueFromArray(this->attached_images));


  return to_value_result;
}


HoldingSpaceState::HoldingSpaceState()
 {}

HoldingSpaceState::~HoldingSpaceState() = default;
HoldingSpaceState::HoldingSpaceState(HoldingSpaceState&& rhs) noexcept = default;
HoldingSpaceState& HoldingSpaceState::operator=(HoldingSpaceState&& rhs) noexcept = default;
HoldingSpaceState HoldingSpaceState::Clone() const {
  HoldingSpaceState out;
  out.item_urls = item_urls;
  return out;
}

// static
bool HoldingSpaceState::Populate(
    const base::Value::Dict& dict, HoldingSpaceState& out) {
  const base::Value* item_urls_value = dict.Find("itemUrls");
  if (!item_urls_value) {
    return false;
  }
  {
    if (!(*item_urls_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*item_urls_value).GetList(), out.item_urls)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool HoldingSpaceState::Populate(
    const base::Value& value, HoldingSpaceState& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<HoldingSpaceState> HoldingSpaceState::FromValue(const base::Value::Dict& value) {
  HoldingSpaceState out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<HoldingSpaceState> HoldingSpaceState::FromValue(const base::Value& value) {
  HoldingSpaceState out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict HoldingSpaceState::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("itemUrls", json_schema_compiler::util::CreateValueFromArray(this->item_urls));


  return to_value_result;
}


OpenWindowParams::OpenWindowParams()
 {}

OpenWindowParams::~OpenWindowParams() = default;
OpenWindowParams::OpenWindowParams(OpenWindowParams&& rhs) noexcept = default;
OpenWindowParams& OpenWindowParams::operator=(OpenWindowParams&& rhs) noexcept = default;
OpenWindowParams OpenWindowParams::Clone() const {
  OpenWindowParams out;
  out.current_directory_url = current_directory_url;
  out.selection_url = selection_url;
  return out;
}

// static
bool OpenWindowParams::Populate(
    const base::Value::Dict& dict, OpenWindowParams& out) {
  const base::Value* current_directory_url_value = dict.Find("currentDirectoryURL");
  if (current_directory_url_value) {
    {
      auto* temp = (*current_directory_url_value).GetIfString();
      if (!temp) {
        out.current_directory_url = std::nullopt;
        return false;
      }
      out.current_directory_url = *temp;
    }
  }

  const base::Value* selection_url_value = dict.Find("selectionURL");
  if (selection_url_value) {
    {
      auto* temp = (*selection_url_value).GetIfString();
      if (!temp) {
        out.selection_url = std::nullopt;
        return false;
      }
      out.selection_url = *temp;
    }
  }

  return true;
}

// static
bool OpenWindowParams::Populate(
    const base::Value& value, OpenWindowParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<OpenWindowParams> OpenWindowParams::FromValue(const base::Value::Dict& value) {
  OpenWindowParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<OpenWindowParams> OpenWindowParams::FromValue(const base::Value& value) {
  OpenWindowParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict OpenWindowParams::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->current_directory_url) {
    to_value_result.Set("currentDirectoryURL", *this->current_directory_url);

  }
  if (this->selection_url) {
    to_value_result.Set("selectionURL", *this->selection_url);

  }

  return to_value_result;
}


IOTaskParams::DestinationFolder::DestinationFolder()
 {}

IOTaskParams::DestinationFolder::~DestinationFolder() = default;
IOTaskParams::DestinationFolder::DestinationFolder(DestinationFolder&& rhs) noexcept = default;
IOTaskParams::DestinationFolder& IOTaskParams::DestinationFolder::operator=(DestinationFolder&& rhs) noexcept = default;
IOTaskParams::DestinationFolder IOTaskParams::DestinationFolder::Clone() const {
  DestinationFolder out;
  return out;
}

// static
bool IOTaskParams::DestinationFolder::Populate(
    const base::Value::Dict& dict, DestinationFolder& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool IOTaskParams::DestinationFolder::Populate(
    const base::Value& value, DestinationFolder& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<IOTaskParams::DestinationFolder> IOTaskParams::DestinationFolder::FromValue(const base::Value::Dict& value) {
  DestinationFolder out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<IOTaskParams::DestinationFolder> IOTaskParams::DestinationFolder::FromValue(const base::Value& value) {
  DestinationFolder out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict IOTaskParams::DestinationFolder::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



IOTaskParams::IOTaskParams()
 {}

IOTaskParams::~IOTaskParams() = default;
IOTaskParams::IOTaskParams(IOTaskParams&& rhs) noexcept = default;
IOTaskParams& IOTaskParams::operator=(IOTaskParams&& rhs) noexcept = default;
IOTaskParams IOTaskParams::Clone() const {
  IOTaskParams out;
  if (destination_folder) {
    out.destination_folder = destination_folder->Clone();
  }
  out.password = password;
  out.show_notification = show_notification;
  return out;
}

// static
bool IOTaskParams::Populate(
    const base::Value::Dict& dict, IOTaskParams& out) {
  const base::Value* destination_folder_value = dict.Find("destinationFolder");
  if (destination_folder_value) {
    {
      if (!(*destination_folder_value).is_dict()) {
        return false;
      }
      else {
        DestinationFolder temp;
        if (!DestinationFolder::Populate((*destination_folder_value).GetDict(), temp))
          return false;
        out.destination_folder = std::move(temp);
      }
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

  if (this->destination_folder) {
    to_value_result.Set("destinationFolder", (this->destination_folder)->ToValue());

  }
  if (this->password) {
    to_value_result.Set("password", *this->password);

  }
  if (this->show_notification) {
    to_value_result.Set("showNotification", *this->show_notification);

  }

  return to_value_result;
}


PolicyError::PolicyError()
: type(),
policy_file_count(0),
always_show_review(false) {}

PolicyError::~PolicyError() = default;
PolicyError::PolicyError(PolicyError&& rhs) noexcept = default;
PolicyError& PolicyError::operator=(PolicyError&& rhs) noexcept = default;
PolicyError PolicyError::Clone() const {
  PolicyError out;
  out.type = type;
  out.policy_file_count = policy_file_count;
  out.file_name = file_name;
  out.always_show_review = always_show_review;
  return out;
}

// static
bool PolicyError::Populate(
    const base::Value::Dict& dict, PolicyError& out) {
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* policy_error_type_as_string = (*type_value).GetIfString();
    if (!policy_error_type_as_string) {
      return false;
    }
    out.type = ParsePolicyErrorType(*policy_error_type_as_string);
    if (out.type == PolicyErrorType()) {
      return false;
    }
  }

  const base::Value* policy_file_count_value = dict.Find("policyFileCount");
  if (!policy_file_count_value) {
    return false;
  }
  {
    auto temp = (*policy_file_count_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.policy_file_count = *temp;
  }

  const base::Value* file_name_value = dict.Find("fileName");
  if (!file_name_value) {
    return false;
  }
  {
    auto* temp = (*file_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_name = *temp;
  }

  const base::Value* always_show_review_value = dict.Find("alwaysShowReview");
  if (!always_show_review_value) {
    return false;
  }
  {
    auto temp = (*always_show_review_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.always_show_review = *temp;
  }

  return true;
}

// static
bool PolicyError::Populate(
    const base::Value& value, PolicyError& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PolicyError> PolicyError::FromValue(const base::Value::Dict& value) {
  PolicyError out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PolicyError> PolicyError::FromValue(const base::Value& value) {
  PolicyError out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict PolicyError::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("type", file_manager_private::ToString(this->type));

  to_value_result.Set("policyFileCount", this->policy_file_count);

  to_value_result.Set("fileName", this->file_name);

  to_value_result.Set("alwaysShowReview", this->always_show_review);


  return to_value_result;
}


ConflictPauseParams::ConflictPauseParams()
 {}

ConflictPauseParams::~ConflictPauseParams() = default;
ConflictPauseParams::ConflictPauseParams(ConflictPauseParams&& rhs) noexcept = default;
ConflictPauseParams& ConflictPauseParams::operator=(ConflictPauseParams&& rhs) noexcept = default;
ConflictPauseParams ConflictPauseParams::Clone() const {
  ConflictPauseParams out;
  out.conflict_name = conflict_name;
  out.conflict_is_directory = conflict_is_directory;
  out.conflict_multiple = conflict_multiple;
  out.conflict_target_url = conflict_target_url;
  return out;
}

// static
bool ConflictPauseParams::Populate(
    const base::Value::Dict& dict, ConflictPauseParams& out) {
  const base::Value* conflict_name_value = dict.Find("conflictName");
  if (conflict_name_value) {
    {
      auto* temp = (*conflict_name_value).GetIfString();
      if (!temp) {
        out.conflict_name = std::nullopt;
        return false;
      }
      out.conflict_name = *temp;
    }
  }

  const base::Value* conflict_is_directory_value = dict.Find("conflictIsDirectory");
  if (conflict_is_directory_value) {
    {
      auto temp = (*conflict_is_directory_value).GetIfBool();
      if (!temp.has_value()) {
        out.conflict_is_directory = std::nullopt;
        return false;
      }
      out.conflict_is_directory = *temp;
    }
  }

  const base::Value* conflict_multiple_value = dict.Find("conflictMultiple");
  if (conflict_multiple_value) {
    {
      auto temp = (*conflict_multiple_value).GetIfBool();
      if (!temp.has_value()) {
        out.conflict_multiple = std::nullopt;
        return false;
      }
      out.conflict_multiple = *temp;
    }
  }

  const base::Value* conflict_target_url_value = dict.Find("conflictTargetUrl");
  if (conflict_target_url_value) {
    {
      auto* temp = (*conflict_target_url_value).GetIfString();
      if (!temp) {
        out.conflict_target_url = std::nullopt;
        return false;
      }
      out.conflict_target_url = *temp;
    }
  }

  return true;
}

// static
bool ConflictPauseParams::Populate(
    const base::Value& value, ConflictPauseParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ConflictPauseParams> ConflictPauseParams::FromValue(const base::Value::Dict& value) {
  ConflictPauseParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ConflictPauseParams> ConflictPauseParams::FromValue(const base::Value& value) {
  ConflictPauseParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ConflictPauseParams::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->conflict_name) {
    to_value_result.Set("conflictName", *this->conflict_name);

  }
  if (this->conflict_is_directory) {
    to_value_result.Set("conflictIsDirectory", *this->conflict_is_directory);

  }
  if (this->conflict_multiple) {
    to_value_result.Set("conflictMultiple", *this->conflict_multiple);

  }
  if (this->conflict_target_url) {
    to_value_result.Set("conflictTargetUrl", *this->conflict_target_url);

  }

  return to_value_result;
}


PolicyPauseParams::PolicyPauseParams()
: type(),
policy_file_count(0),
always_show_review(false) {}

PolicyPauseParams::~PolicyPauseParams() = default;
PolicyPauseParams::PolicyPauseParams(PolicyPauseParams&& rhs) noexcept = default;
PolicyPauseParams& PolicyPauseParams::operator=(PolicyPauseParams&& rhs) noexcept = default;
PolicyPauseParams PolicyPauseParams::Clone() const {
  PolicyPauseParams out;
  out.type = type;
  out.policy_file_count = policy_file_count;
  out.file_name = file_name;
  out.always_show_review = always_show_review;
  return out;
}

// static
bool PolicyPauseParams::Populate(
    const base::Value::Dict& dict, PolicyPauseParams& out) {
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* policy_error_type_as_string = (*type_value).GetIfString();
    if (!policy_error_type_as_string) {
      return false;
    }
    out.type = ParsePolicyErrorType(*policy_error_type_as_string);
    if (out.type == PolicyErrorType()) {
      return false;
    }
  }

  const base::Value* policy_file_count_value = dict.Find("policyFileCount");
  if (!policy_file_count_value) {
    return false;
  }
  {
    auto temp = (*policy_file_count_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.policy_file_count = *temp;
  }

  const base::Value* file_name_value = dict.Find("fileName");
  if (!file_name_value) {
    return false;
  }
  {
    auto* temp = (*file_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_name = *temp;
  }

  const base::Value* always_show_review_value = dict.Find("alwaysShowReview");
  if (!always_show_review_value) {
    return false;
  }
  {
    auto temp = (*always_show_review_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.always_show_review = *temp;
  }

  return true;
}

// static
bool PolicyPauseParams::Populate(
    const base::Value& value, PolicyPauseParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PolicyPauseParams> PolicyPauseParams::FromValue(const base::Value::Dict& value) {
  PolicyPauseParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PolicyPauseParams> PolicyPauseParams::FromValue(const base::Value& value) {
  PolicyPauseParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict PolicyPauseParams::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("type", file_manager_private::ToString(this->type));

  to_value_result.Set("policyFileCount", this->policy_file_count);

  to_value_result.Set("fileName", this->file_name);

  to_value_result.Set("alwaysShowReview", this->always_show_review);


  return to_value_result;
}


PauseParams::PauseParams()
 {}

PauseParams::~PauseParams() = default;
PauseParams::PauseParams(PauseParams&& rhs) noexcept = default;
PauseParams& PauseParams::operator=(PauseParams&& rhs) noexcept = default;
PauseParams PauseParams::Clone() const {
  PauseParams out;
  if (conflict_params) {
    out.conflict_params = conflict_params->Clone();
  }
  if (policy_params) {
    out.policy_params = policy_params->Clone();
  }
  return out;
}

// static
bool PauseParams::Populate(
    const base::Value::Dict& dict, PauseParams& out) {
  const base::Value* conflict_params_value = dict.Find("conflictParams");
  if (conflict_params_value) {
    {
      if (!(*conflict_params_value).is_dict()) {
        return false;
      }
      else {
        ConflictPauseParams temp;
        if (!ConflictPauseParams::Populate((*conflict_params_value).GetDict(), temp))
          return false;
        out.conflict_params = std::move(temp);
      }
    }
  }

  const base::Value* policy_params_value = dict.Find("policyParams");
  if (policy_params_value) {
    {
      if (!(*policy_params_value).is_dict()) {
        return false;
      }
      else {
        PolicyPauseParams temp;
        if (!PolicyPauseParams::Populate((*policy_params_value).GetDict(), temp))
          return false;
        out.policy_params = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool PauseParams::Populate(
    const base::Value& value, PauseParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PauseParams> PauseParams::FromValue(const base::Value::Dict& value) {
  PauseParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PauseParams> PauseParams::FromValue(const base::Value& value) {
  PauseParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict PauseParams::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->conflict_params) {
    to_value_result.Set("conflictParams", (this->conflict_params)->ToValue());

  }
  if (this->policy_params) {
    to_value_result.Set("policyParams", (this->policy_params)->ToValue());

  }

  return to_value_result;
}


ConflictResumeParams::ConflictResumeParams()
 {}

ConflictResumeParams::~ConflictResumeParams() = default;
ConflictResumeParams::ConflictResumeParams(ConflictResumeParams&& rhs) noexcept = default;
ConflictResumeParams& ConflictResumeParams::operator=(ConflictResumeParams&& rhs) noexcept = default;
ConflictResumeParams ConflictResumeParams::Clone() const {
  ConflictResumeParams out;
  out.conflict_resolve = conflict_resolve;
  out.conflict_apply_to_all = conflict_apply_to_all;
  return out;
}

// static
bool ConflictResumeParams::Populate(
    const base::Value::Dict& dict, ConflictResumeParams& out) {
  const base::Value* conflict_resolve_value = dict.Find("conflictResolve");
  if (conflict_resolve_value) {
    {
      auto* temp = (*conflict_resolve_value).GetIfString();
      if (!temp) {
        out.conflict_resolve = std::nullopt;
        return false;
      }
      out.conflict_resolve = *temp;
    }
  }

  const base::Value* conflict_apply_to_all_value = dict.Find("conflictApplyToAll");
  if (conflict_apply_to_all_value) {
    {
      auto temp = (*conflict_apply_to_all_value).GetIfBool();
      if (!temp.has_value()) {
        out.conflict_apply_to_all = std::nullopt;
        return false;
      }
      out.conflict_apply_to_all = *temp;
    }
  }

  return true;
}

// static
bool ConflictResumeParams::Populate(
    const base::Value& value, ConflictResumeParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ConflictResumeParams> ConflictResumeParams::FromValue(const base::Value::Dict& value) {
  ConflictResumeParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ConflictResumeParams> ConflictResumeParams::FromValue(const base::Value& value) {
  ConflictResumeParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ConflictResumeParams::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->conflict_resolve) {
    to_value_result.Set("conflictResolve", *this->conflict_resolve);

  }
  if (this->conflict_apply_to_all) {
    to_value_result.Set("conflictApplyToAll", *this->conflict_apply_to_all);

  }

  return to_value_result;
}


PolicyResumeParams::PolicyResumeParams()
: type() {}

PolicyResumeParams::~PolicyResumeParams() = default;
PolicyResumeParams::PolicyResumeParams(PolicyResumeParams&& rhs) noexcept = default;
PolicyResumeParams& PolicyResumeParams::operator=(PolicyResumeParams&& rhs) noexcept = default;
PolicyResumeParams PolicyResumeParams::Clone() const {
  PolicyResumeParams out;
  out.type = type;
  return out;
}

// static
bool PolicyResumeParams::Populate(
    const base::Value::Dict& dict, PolicyResumeParams& out) {
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* policy_error_type_as_string = (*type_value).GetIfString();
    if (!policy_error_type_as_string) {
      return false;
    }
    out.type = ParsePolicyErrorType(*policy_error_type_as_string);
    if (out.type == PolicyErrorType()) {
      return false;
    }
  }

  return true;
}

// static
bool PolicyResumeParams::Populate(
    const base::Value& value, PolicyResumeParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PolicyResumeParams> PolicyResumeParams::FromValue(const base::Value::Dict& value) {
  PolicyResumeParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PolicyResumeParams> PolicyResumeParams::FromValue(const base::Value& value) {
  PolicyResumeParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict PolicyResumeParams::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("type", file_manager_private::ToString(this->type));


  return to_value_result;
}


ResumeParams::ResumeParams()
 {}

ResumeParams::~ResumeParams() = default;
ResumeParams::ResumeParams(ResumeParams&& rhs) noexcept = default;
ResumeParams& ResumeParams::operator=(ResumeParams&& rhs) noexcept = default;
ResumeParams ResumeParams::Clone() const {
  ResumeParams out;
  if (conflict_params) {
    out.conflict_params = conflict_params->Clone();
  }
  if (policy_params) {
    out.policy_params = policy_params->Clone();
  }
  return out;
}

// static
bool ResumeParams::Populate(
    const base::Value::Dict& dict, ResumeParams& out) {
  const base::Value* conflict_params_value = dict.Find("conflictParams");
  if (conflict_params_value) {
    {
      if (!(*conflict_params_value).is_dict()) {
        return false;
      }
      else {
        ConflictResumeParams temp;
        if (!ConflictResumeParams::Populate((*conflict_params_value).GetDict(), temp))
          return false;
        out.conflict_params = std::move(temp);
      }
    }
  }

  const base::Value* policy_params_value = dict.Find("policyParams");
  if (policy_params_value) {
    {
      if (!(*policy_params_value).is_dict()) {
        return false;
      }
      else {
        PolicyResumeParams temp;
        if (!PolicyResumeParams::Populate((*policy_params_value).GetDict(), temp))
          return false;
        out.policy_params = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool ResumeParams::Populate(
    const base::Value& value, ResumeParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ResumeParams> ResumeParams::FromValue(const base::Value::Dict& value) {
  ResumeParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ResumeParams> ResumeParams::FromValue(const base::Value& value) {
  ResumeParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ResumeParams::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->conflict_params) {
    to_value_result.Set("conflictParams", (this->conflict_params)->ToValue());

  }
  if (this->policy_params) {
    to_value_result.Set("policyParams", (this->policy_params)->ToValue());

  }

  return to_value_result;
}


ProgressStatus::OutputsType::OutputsType()
 {}

ProgressStatus::OutputsType::~OutputsType() = default;
ProgressStatus::OutputsType::OutputsType(OutputsType&& rhs) noexcept = default;
ProgressStatus::OutputsType& ProgressStatus::OutputsType::operator=(OutputsType&& rhs) noexcept = default;
ProgressStatus::OutputsType ProgressStatus::OutputsType::Clone() const {
  OutputsType out;
  return out;
}

// static
bool ProgressStatus::OutputsType::Populate(
    const base::Value::Dict& dict, OutputsType& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool ProgressStatus::OutputsType::Populate(
    const base::Value& value, OutputsType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ProgressStatus::OutputsType> ProgressStatus::OutputsType::FromValue(const base::Value::Dict& value) {
  OutputsType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ProgressStatus::OutputsType> ProgressStatus::OutputsType::FromValue(const base::Value& value) {
  OutputsType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ProgressStatus::OutputsType::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}




ProgressStatus::ProgressStatus()
: type(),
state(),
num_remaining_items(0),
item_count(0),
bytes_transferred(0),
total_bytes(0),
task_id(0),
remaining_seconds(0.0),
sources_scanned(0),
show_notification(false) {}

ProgressStatus::~ProgressStatus() = default;
ProgressStatus::ProgressStatus(ProgressStatus&& rhs) noexcept = default;
ProgressStatus& ProgressStatus::operator=(ProgressStatus&& rhs) noexcept = default;
ProgressStatus ProgressStatus::Clone() const {
  ProgressStatus out;
  out.type = type;
  out.state = state;
  if (policy_error) {
    out.policy_error = policy_error->Clone();
  }
  out.source_name = source_name;
  out.num_remaining_items = num_remaining_items;
  out.item_count = item_count;
  out.destination_name = destination_name;
  out.bytes_transferred = bytes_transferred;
  out.total_bytes = total_bytes;
  out.task_id = task_id;
  out.remaining_seconds = remaining_seconds;
  out.sources_scanned = sources_scanned;
  out.show_notification = show_notification;
  out.error_name = error_name;
  if (pause_params) {
    out.pause_params = pause_params->Clone();
  }
  if (outputs) {
    out.outputs.emplace();
    out.outputs->reserve(outputs->size());
    for (const auto& element : *outputs) {
      json_schema_compiler::util::AppendToContainer(*out.outputs, element.Clone());
    }
  }
  out.skipped_encrypted_files = skipped_encrypted_files;
  out.destination_volume_id = destination_volume_id;
  return out;
}

// static
bool ProgressStatus::Populate(
    const base::Value::Dict& dict, ProgressStatus& out) {
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* io_task_type_as_string = (*type_value).GetIfString();
    if (!io_task_type_as_string) {
      return false;
    }
    out.type = ParseIOTaskType(*io_task_type_as_string);
    if (out.type == IOTaskType()) {
      return false;
    }
  }

  const base::Value* state_value = dict.Find("state");
  if (!state_value) {
    return false;
  }
  {
    const std::string* io_task_state_as_string = (*state_value).GetIfString();
    if (!io_task_state_as_string) {
      return false;
    }
    out.state = ParseIOTaskState(*io_task_state_as_string);
    if (out.state == IOTaskState()) {
      return false;
    }
  }

  const base::Value* policy_error_value = dict.Find("policyError");
  if (policy_error_value) {
    {
      if (!(*policy_error_value).is_dict()) {
        return false;
      }
      else {
        PolicyError temp;
        if (!PolicyError::Populate((*policy_error_value).GetDict(), temp))
          return false;
        out.policy_error = std::move(temp);
      }
    }
  }

  const base::Value* source_name_value = dict.Find("sourceName");
  if (!source_name_value) {
    return false;
  }
  {
    auto* temp = (*source_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.source_name = *temp;
  }

  const base::Value* num_remaining_items_value = dict.Find("numRemainingItems");
  if (!num_remaining_items_value) {
    return false;
  }
  {
    auto temp = (*num_remaining_items_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.num_remaining_items = *temp;
  }

  const base::Value* item_count_value = dict.Find("itemCount");
  if (!item_count_value) {
    return false;
  }
  {
    auto temp = (*item_count_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.item_count = *temp;
  }

  const base::Value* destination_name_value = dict.Find("destinationName");
  if (!destination_name_value) {
    return false;
  }
  {
    auto* temp = (*destination_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.destination_name = *temp;
  }

  const base::Value* bytes_transferred_value = dict.Find("bytesTransferred");
  if (!bytes_transferred_value) {
    return false;
  }
  {
    auto temp = (*bytes_transferred_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.bytes_transferred = *temp;
  }

  const base::Value* total_bytes_value = dict.Find("totalBytes");
  if (!total_bytes_value) {
    return false;
  }
  {
    auto temp = (*total_bytes_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.total_bytes = *temp;
  }

  const base::Value* task_id_value = dict.Find("taskId");
  if (!task_id_value) {
    return false;
  }
  {
    auto temp = (*task_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.task_id = *temp;
  }

  const base::Value* remaining_seconds_value = dict.Find("remainingSeconds");
  if (!remaining_seconds_value) {
    return false;
  }
  {
    auto temp = (*remaining_seconds_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.remaining_seconds = *temp;
  }

  const base::Value* sources_scanned_value = dict.Find("sourcesScanned");
  if (!sources_scanned_value) {
    return false;
  }
  {
    auto temp = (*sources_scanned_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.sources_scanned = *temp;
  }

  const base::Value* show_notification_value = dict.Find("showNotification");
  if (!show_notification_value) {
    return false;
  }
  {
    auto temp = (*show_notification_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.show_notification = *temp;
  }

  const base::Value* error_name_value = dict.Find("errorName");
  if (!error_name_value) {
    return false;
  }
  {
    auto* temp = (*error_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.error_name = *temp;
  }

  const base::Value* pause_params_value = dict.Find("pauseParams");
  if (pause_params_value) {
    {
      if (!(*pause_params_value).is_dict()) {
        return false;
      }
      else {
        PauseParams temp;
        if (!PauseParams::Populate((*pause_params_value).GetDict(), temp))
          return false;
        out.pause_params = std::move(temp);
      }
    }
  }

  const base::Value* outputs_value = dict.Find("outputs");
  if (outputs_value) {
    {
      if (!(*outputs_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*outputs_value).GetList(), out.outputs)) {
          return false;
        }
      }
    }
  }

  const base::Value* skipped_encrypted_files_value = dict.Find("skippedEncryptedFiles");
  if (!skipped_encrypted_files_value) {
    return false;
  }
  {
    if (!(*skipped_encrypted_files_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*skipped_encrypted_files_value).GetList(), out.skipped_encrypted_files)) {
        return false;
      }
    }
  }

  const base::Value* destination_volume_id_value = dict.Find("destinationVolumeId");
  if (!destination_volume_id_value) {
    return false;
  }
  {
    auto* temp = (*destination_volume_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.destination_volume_id = *temp;
  }

  return true;
}

// static
bool ProgressStatus::Populate(
    const base::Value& value, ProgressStatus& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ProgressStatus> ProgressStatus::FromValue(const base::Value::Dict& value) {
  ProgressStatus out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ProgressStatus> ProgressStatus::FromValue(const base::Value& value) {
  ProgressStatus out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ProgressStatus::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("type", file_manager_private::ToString(this->type));

  to_value_result.Set("state", file_manager_private::ToString(this->state));

  if (this->policy_error) {
    to_value_result.Set("policyError", (this->policy_error)->ToValue());

  }
  to_value_result.Set("sourceName", this->source_name);

  to_value_result.Set("numRemainingItems", this->num_remaining_items);

  to_value_result.Set("itemCount", this->item_count);

  to_value_result.Set("destinationName", this->destination_name);

  to_value_result.Set("bytesTransferred", this->bytes_transferred);

  to_value_result.Set("totalBytes", this->total_bytes);

  to_value_result.Set("taskId", this->task_id);

  to_value_result.Set("remainingSeconds", this->remaining_seconds);

  to_value_result.Set("sourcesScanned", this->sources_scanned);

  to_value_result.Set("showNotification", this->show_notification);

  to_value_result.Set("errorName", this->error_name);

  if (this->pause_params) {
    to_value_result.Set("pauseParams", (this->pause_params)->ToValue());

  }
  if (this->outputs) {
    to_value_result.Set("outputs", json_schema_compiler::util::CreateValueFromArray(*this->outputs));

  }
  to_value_result.Set("skippedEncryptedFiles", json_schema_compiler::util::CreateValueFromArray(this->skipped_encrypted_files));

  to_value_result.Set("destinationVolumeId", this->destination_volume_id);


  return to_value_result;
}


DlpMetadata::DlpMetadata()
: is_dlp_restricted(false),
is_restricted_for_destination(false) {}

DlpMetadata::~DlpMetadata() = default;
DlpMetadata::DlpMetadata(DlpMetadata&& rhs) noexcept = default;
DlpMetadata& DlpMetadata::operator=(DlpMetadata&& rhs) noexcept = default;
DlpMetadata DlpMetadata::Clone() const {
  DlpMetadata out;
  out.source_url = source_url;
  out.is_dlp_restricted = is_dlp_restricted;
  out.is_restricted_for_destination = is_restricted_for_destination;
  return out;
}

// static
bool DlpMetadata::Populate(
    const base::Value::Dict& dict, DlpMetadata& out) {
  const base::Value* source_url_value = dict.Find("sourceUrl");
  if (!source_url_value) {
    return false;
  }
  {
    auto* temp = (*source_url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.source_url = *temp;
  }

  const base::Value* is_dlp_restricted_value = dict.Find("isDlpRestricted");
  if (!is_dlp_restricted_value) {
    return false;
  }
  {
    auto temp = (*is_dlp_restricted_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_dlp_restricted = *temp;
  }

  const base::Value* is_restricted_for_destination_value = dict.Find("isRestrictedForDestination");
  if (!is_restricted_for_destination_value) {
    return false;
  }
  {
    auto temp = (*is_restricted_for_destination_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_restricted_for_destination = *temp;
  }

  return true;
}

// static
bool DlpMetadata::Populate(
    const base::Value& value, DlpMetadata& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DlpMetadata> DlpMetadata::FromValue(const base::Value::Dict& value) {
  DlpMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DlpMetadata> DlpMetadata::FromValue(const base::Value& value) {
  DlpMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DlpMetadata::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("sourceUrl", this->source_url);

  to_value_result.Set("isDlpRestricted", this->is_dlp_restricted);

  to_value_result.Set("isRestrictedForDestination", this->is_restricted_for_destination);


  return to_value_result;
}


DlpRestrictionDetails::DlpRestrictionDetails()
: level() {}

DlpRestrictionDetails::~DlpRestrictionDetails() = default;
DlpRestrictionDetails::DlpRestrictionDetails(DlpRestrictionDetails&& rhs) noexcept = default;
DlpRestrictionDetails& DlpRestrictionDetails::operator=(DlpRestrictionDetails&& rhs) noexcept = default;
DlpRestrictionDetails DlpRestrictionDetails::Clone() const {
  DlpRestrictionDetails out;
  out.level = level;
  out.urls = urls;
  out.components = components;
  return out;
}

// static
bool DlpRestrictionDetails::Populate(
    const base::Value::Dict& dict, DlpRestrictionDetails& out) {
  const base::Value* level_value = dict.Find("level");
  if (!level_value) {
    return false;
  }
  {
    const std::string* dlp_level_as_string = (*level_value).GetIfString();
    if (!dlp_level_as_string) {
      return false;
    }
    out.level = ParseDlpLevel(*dlp_level_as_string);
    if (out.level == DlpLevel()) {
      return false;
    }
  }

  const base::Value* urls_value = dict.Find("urls");
  if (!urls_value) {
    return false;
  }
  {
    if (!(*urls_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*urls_value).GetList(), out.urls)) {
        return false;
      }
    }
  }

  const base::Value* components_value = dict.Find("components");
  if (!components_value) {
    return false;
  }
  {
    if (!(*components_value).is_list()) {
      return false;
    }
    else {
      for (const auto& it : ((*components_value)).GetList()) {
        VolumeType tmp;
        const std::string* volume_type_as_string = (it).GetIfString();
        if (!volume_type_as_string) {
          return false;
        }
        tmp = ParseVolumeType(*volume_type_as_string);
        if (tmp == VolumeType()) {
          return false;
        }
        out.components.push_back(tmp);
      }
    }
  }

  return true;
}

// static
bool DlpRestrictionDetails::Populate(
    const base::Value& value, DlpRestrictionDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DlpRestrictionDetails> DlpRestrictionDetails::FromValue(const base::Value::Dict& value) {
  DlpRestrictionDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DlpRestrictionDetails> DlpRestrictionDetails::FromValue(const base::Value& value) {
  DlpRestrictionDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DlpRestrictionDetails::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("level", file_manager_private::ToString(this->level));

  to_value_result.Set("urls", json_schema_compiler::util::CreateValueFromArray(this->urls));

  {
    std::vector<std::string> components_list;
    for (const auto& it : (this->components)) {
      components_list.emplace_back(file_manager_private::ToString(it));
    }
    to_value_result.Set("components", json_schema_compiler::util::CreateValueFromArray(components_list));
  }


  return to_value_result;
}


DialogCallerInformation::DialogCallerInformation()
: component() {}

DialogCallerInformation::~DialogCallerInformation() = default;
DialogCallerInformation::DialogCallerInformation(DialogCallerInformation&& rhs) noexcept = default;
DialogCallerInformation& DialogCallerInformation::operator=(DialogCallerInformation&& rhs) noexcept = default;
DialogCallerInformation DialogCallerInformation::Clone() const {
  DialogCallerInformation out;
  out.url = url;
  out.component = component;
  return out;
}

// static
bool DialogCallerInformation::Populate(
    const base::Value::Dict& dict, DialogCallerInformation& out) {
  out.component = VolumeType();
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    {
      auto* temp = (*url_value).GetIfString();
      if (!temp) {
        out.url = std::nullopt;
        return false;
      }
      out.url = *temp;
    }
  }

  const base::Value* component_value = dict.Find("component");
  if (component_value) {
    {
      const std::string* volume_type_as_string = (*component_value).GetIfString();
      if (!volume_type_as_string) {
        return false;
      }
      out.component = ParseVolumeType(*volume_type_as_string);
      if (out.component == VolumeType()) {
        return false;
      }
    }
    } else {
    out.component = VolumeType();
  }

  return true;
}

// static
bool DialogCallerInformation::Populate(
    const base::Value& value, DialogCallerInformation& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DialogCallerInformation> DialogCallerInformation::FromValue(const base::Value::Dict& value) {
  DialogCallerInformation out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DialogCallerInformation> DialogCallerInformation::FromValue(const base::Value& value) {
  DialogCallerInformation out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DialogCallerInformation::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->url) {
    to_value_result.Set("url", *this->url);

  }
  if (this->component != VolumeType()) {
    to_value_result.Set("component", file_manager_private::ToString(this->component));

  }

  return to_value_result;
}


MountableGuest::MountableGuest()
: id(0),
vm_type() {}

MountableGuest::~MountableGuest() = default;
MountableGuest::MountableGuest(MountableGuest&& rhs) noexcept = default;
MountableGuest& MountableGuest::operator=(MountableGuest&& rhs) noexcept = default;
MountableGuest MountableGuest::Clone() const {
  MountableGuest out;
  out.id = id;
  out.display_name = display_name;
  out.vm_type = vm_type;
  return out;
}

// static
bool MountableGuest::Populate(
    const base::Value::Dict& dict, MountableGuest& out) {
  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto temp = (*id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.id = *temp;
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

  const base::Value* vm_type_value = dict.Find("vmType");
  if (!vm_type_value) {
    return false;
  }
  {
    const std::string* vm_type_as_string = (*vm_type_value).GetIfString();
    if (!vm_type_as_string) {
      return false;
    }
    out.vm_type = ParseVmType(*vm_type_as_string);
    if (out.vm_type == VmType()) {
      return false;
    }
  }

  return true;
}

// static
bool MountableGuest::Populate(
    const base::Value& value, MountableGuest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<MountableGuest> MountableGuest::FromValue(const base::Value::Dict& value) {
  MountableGuest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<MountableGuest> MountableGuest::FromValue(const base::Value& value) {
  MountableGuest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict MountableGuest::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("displayName", this->display_name);

  to_value_result.Set("vmType", file_manager_private::ToString(this->vm_type));


  return to_value_result;
}


ParsedTrashInfoFile::RestoreEntry::RestoreEntry()
 {}

ParsedTrashInfoFile::RestoreEntry::~RestoreEntry() = default;
ParsedTrashInfoFile::RestoreEntry::RestoreEntry(RestoreEntry&& rhs) noexcept = default;
ParsedTrashInfoFile::RestoreEntry& ParsedTrashInfoFile::RestoreEntry::operator=(RestoreEntry&& rhs) noexcept = default;
ParsedTrashInfoFile::RestoreEntry ParsedTrashInfoFile::RestoreEntry::Clone() const {
  RestoreEntry out;
  return out;
}

// static
bool ParsedTrashInfoFile::RestoreEntry::Populate(
    const base::Value::Dict& dict, RestoreEntry& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool ParsedTrashInfoFile::RestoreEntry::Populate(
    const base::Value& value, RestoreEntry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ParsedTrashInfoFile::RestoreEntry> ParsedTrashInfoFile::RestoreEntry::FromValue(const base::Value::Dict& value) {
  RestoreEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ParsedTrashInfoFile::RestoreEntry> ParsedTrashInfoFile::RestoreEntry::FromValue(const base::Value& value) {
  RestoreEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ParsedTrashInfoFile::RestoreEntry::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

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
    if (!RestoreEntry::Populate((*restore_entry_value).GetDict(), out.restore_entry)) {
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


BulkPinProgress::BulkPinProgress()
: stage(),
free_space_bytes(0.0),
required_space_bytes(0.0),
bytes_to_pin(0.0),
pinned_bytes(0.0),
files_to_pin(0),
listed_files(0),
remaining_seconds(0.0),
should_pin(false),
emptied_queue(false) {}

BulkPinProgress::~BulkPinProgress() = default;
BulkPinProgress::BulkPinProgress(BulkPinProgress&& rhs) noexcept = default;
BulkPinProgress& BulkPinProgress::operator=(BulkPinProgress&& rhs) noexcept = default;
BulkPinProgress BulkPinProgress::Clone() const {
  BulkPinProgress out;
  out.stage = stage;
  out.free_space_bytes = free_space_bytes;
  out.required_space_bytes = required_space_bytes;
  out.bytes_to_pin = bytes_to_pin;
  out.pinned_bytes = pinned_bytes;
  out.files_to_pin = files_to_pin;
  out.listed_files = listed_files;
  out.remaining_seconds = remaining_seconds;
  out.should_pin = should_pin;
  out.emptied_queue = emptied_queue;
  return out;
}

// static
bool BulkPinProgress::Populate(
    const base::Value::Dict& dict, BulkPinProgress& out) {
  const base::Value* stage_value = dict.Find("stage");
  if (!stage_value) {
    return false;
  }
  {
    const std::string* bulk_pin_stage_as_string = (*stage_value).GetIfString();
    if (!bulk_pin_stage_as_string) {
      return false;
    }
    out.stage = ParseBulkPinStage(*bulk_pin_stage_as_string);
    if (out.stage == BulkPinStage()) {
      return false;
    }
  }

  const base::Value* free_space_bytes_value = dict.Find("freeSpaceBytes");
  if (!free_space_bytes_value) {
    return false;
  }
  {
    auto temp = (*free_space_bytes_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.free_space_bytes = *temp;
  }

  const base::Value* required_space_bytes_value = dict.Find("requiredSpaceBytes");
  if (!required_space_bytes_value) {
    return false;
  }
  {
    auto temp = (*required_space_bytes_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.required_space_bytes = *temp;
  }

  const base::Value* bytes_to_pin_value = dict.Find("bytesToPin");
  if (!bytes_to_pin_value) {
    return false;
  }
  {
    auto temp = (*bytes_to_pin_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.bytes_to_pin = *temp;
  }

  const base::Value* pinned_bytes_value = dict.Find("pinnedBytes");
  if (!pinned_bytes_value) {
    return false;
  }
  {
    auto temp = (*pinned_bytes_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.pinned_bytes = *temp;
  }

  const base::Value* files_to_pin_value = dict.Find("filesToPin");
  if (!files_to_pin_value) {
    return false;
  }
  {
    auto temp = (*files_to_pin_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.files_to_pin = *temp;
  }

  const base::Value* listed_files_value = dict.Find("listedFiles");
  if (!listed_files_value) {
    return false;
  }
  {
    auto temp = (*listed_files_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.listed_files = *temp;
  }

  const base::Value* remaining_seconds_value = dict.Find("remainingSeconds");
  if (!remaining_seconds_value) {
    return false;
  }
  {
    auto temp = (*remaining_seconds_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.remaining_seconds = *temp;
  }

  const base::Value* should_pin_value = dict.Find("shouldPin");
  if (!should_pin_value) {
    return false;
  }
  {
    auto temp = (*should_pin_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.should_pin = *temp;
  }

  const base::Value* emptied_queue_value = dict.Find("emptiedQueue");
  if (!emptied_queue_value) {
    return false;
  }
  {
    auto temp = (*emptied_queue_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.emptied_queue = *temp;
  }

  return true;
}

// static
bool BulkPinProgress::Populate(
    const base::Value& value, BulkPinProgress& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<BulkPinProgress> BulkPinProgress::FromValue(const base::Value::Dict& value) {
  BulkPinProgress out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<BulkPinProgress> BulkPinProgress::FromValue(const base::Value& value) {
  BulkPinProgress out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict BulkPinProgress::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("stage", file_manager_private::ToString(this->stage));

  to_value_result.Set("freeSpaceBytes", this->free_space_bytes);

  to_value_result.Set("requiredSpaceBytes", this->required_space_bytes);

  to_value_result.Set("bytesToPin", this->bytes_to_pin);

  to_value_result.Set("pinnedBytes", this->pinned_bytes);

  to_value_result.Set("filesToPin", this->files_to_pin);

  to_value_result.Set("listedFiles", this->listed_files);

  to_value_result.Set("remainingSeconds", this->remaining_seconds);

  to_value_result.Set("shouldPin", this->should_pin);

  to_value_result.Set("emptiedQueue", this->emptied_queue);


  return to_value_result;
}



//
// Functions
//

namespace CancelDialog {

}  // namespace CancelDialog

namespace GetStrings {

Results::Result::Result()
 {}

Results::Result::~Result() = default;
Results::Result::Result(Result&& rhs) noexcept = default;
Results::Result& Results::Result::operator=(Result&& rhs) noexcept = default;
base::Value::Dict Results::Result::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::Value::List Results::Create(const Result& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace GetStrings

namespace EnableExternalFileScheme {

}  // namespace EnableExternalFileScheme

namespace GrantAccess {

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
    const base::Value& entry_urls_value = args[0];
    {
      if (!entry_urls_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(entry_urls_value.GetList(), params.entry_urls)) {
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
}  // namespace GrantAccess

namespace SelectFiles {

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
    const base::Value& selected_paths_value = args[0];
    {
      if (!selected_paths_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(selected_paths_value.GetList(), params.selected_paths)) {
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
    const base::Value& should_return_local_path_value = args[1];
    {
      auto temp = should_return_local_path_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.should_return_local_path = *temp;
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
}  // namespace SelectFiles

namespace SelectFile {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 4) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& selected_path_value = args[0];
    {
      auto* temp = selected_path_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.selected_path = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& index_value = args[1];
    {
      auto temp = index_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.index = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& for_opening_value = args[2];
    {
      auto temp = for_opening_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.for_opening = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (3 < args.size() &&
      !args[3].is_none()) {
    const base::Value& should_return_local_path_value = args[3];
    {
      auto temp = should_return_local_path_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.should_return_local_path = *temp;
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
}  // namespace SelectFile

namespace AddMount {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& file_url_value = args[0];
    {
      auto* temp = file_url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.file_url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& password_value = args[1];
    {
      auto* temp = password_value.GetIfString();
      if (!temp) {
        params.password = std::nullopt;
        return std::nullopt;
      }
      params.password = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create(const std::string& source_path) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(source_path);

  return create_results;
}
}  // namespace AddMount

namespace CancelMounting {

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
    const base::Value& file_url_value = args[0];
    {
      auto* temp = file_url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.file_url = *temp;
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
}  // namespace CancelMounting

namespace RemoveMount {

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
    const base::Value& volume_id_value = args[0];
    {
      auto* temp = volume_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.volume_id = *temp;
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
}  // namespace RemoveMount

namespace GetVolumeMetadataList {

base::Value::List Results::Create(const std::vector<VolumeMetadata>& volume_metadata_list) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(volume_metadata_list));

  return create_results;
}
}  // namespace GetVolumeMetadataList

namespace GetDlpRestrictionDetails {

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
    const base::Value& source_url_value = args[0];
    {
      auto* temp = source_url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.source_url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<DlpRestrictionDetails>& restriction_details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(restriction_details));

  return create_results;
}
}  // namespace GetDlpRestrictionDetails

namespace GetDlpBlockedComponents {

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
    const base::Value& source_url_value = args[0];
    {
      auto* temp = source_url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.source_url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<VolumeType>& blocked_components) {
  base::Value::List create_results;
  create_results.reserve(1);
  {
    std::vector<std::string> blockedComponents_list;
    for (const auto& it : (blocked_components)) {
      blockedComponents_list.emplace_back(file_manager_private::ToString(it));
    }
    create_results.Append(json_schema_compiler::util::CreateValueFromArray(blockedComponents_list));
  }

  return create_results;
}
}  // namespace GetDlpBlockedComponents

namespace GetDialogCaller {

base::Value::List Results::Create(const DialogCallerInformation& caller) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((caller).ToValue());

  return create_results;
}
}  // namespace GetDialogCaller

namespace GetSizeStats {

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
    const base::Value& volume_id_value = args[0];
    {
      auto* temp = volume_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.volume_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const MountPointSizeStats& size_stats) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((size_stats).ToValue());

  return create_results;
}
}  // namespace GetSizeStats

namespace FormatVolume {

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
    const base::Value& volume_id_value = args[0];
    {
      auto* temp = volume_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.volume_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& filesystem_value = args[1];
    {
      const std::string* format_file_system_type_as_string = filesystem_value.GetIfString();
      if (!format_file_system_type_as_string) {
        return std::nullopt;
      }
      params.filesystem = ParseFormatFileSystemType(*format_file_system_type_as_string);
      if (params.filesystem == FormatFileSystemType()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& volume_label_value = args[2];
    {
      auto* temp = volume_label_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.volume_label = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace FormatVolume

namespace SinglePartitionFormat {

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
    const base::Value& device_storage_path_value = args[0];
    {
      auto* temp = device_storage_path_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.device_storage_path = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& filesystem_value = args[1];
    {
      const std::string* format_file_system_type_as_string = filesystem_value.GetIfString();
      if (!format_file_system_type_as_string) {
        return std::nullopt;
      }
      params.filesystem = ParseFormatFileSystemType(*format_file_system_type_as_string);
      if (params.filesystem == FormatFileSystemType()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& volume_label_value = args[2];
    {
      auto* temp = volume_label_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.volume_label = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SinglePartitionFormat

namespace RenameVolume {

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
    const base::Value& volume_id_value = args[0];
    {
      auto* temp = volume_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.volume_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& new_name_value = args[1];
    {
      auto* temp = new_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.new_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace RenameVolume

namespace GetPreferences {

base::Value::List Results::Create(const Preferences& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace GetPreferences

namespace SetPreferences {

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
    const base::Value& change_info_value = args[0];
    {
      if (!change_info_value.is_dict()) {
        return std::nullopt;
      }
      if (!PreferencesChange::Populate(change_info_value.GetDict(), params.change_info)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetPreferences

namespace SearchDrive {

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
      if (!SearchParams::Populate(search_params_value.GetDict(), params.search_params)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const SearchDriveResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace SearchDrive

namespace SearchDriveMetadata {

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
      if (!SearchMetadataParams::Populate(search_params_value.GetDict(), params.search_params)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<DriveMetadataSearchResult>& results) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(results));

  return create_results;
}
}  // namespace SearchDriveMetadata

namespace SearchFilesByHashes {

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
    const base::Value& volume_id_value = args[0];
    {
      auto* temp = volume_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.volume_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& hash_list_value = args[1];
    {
      if (!hash_list_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(hash_list_value.GetList(), params.hash_list)) {
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


Results::Paths::Paths()
 {}

Results::Paths::~Paths() = default;
Results::Paths::Paths(Paths&& rhs) noexcept = default;
Results::Paths& Results::Paths::operator=(Paths&& rhs) noexcept = default;
base::Value::Dict Results::Paths::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::Value::List Results::Create(const Paths& paths) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((paths).ToValue());

  return create_results;
}
}  // namespace SearchFilesByHashes

namespace GetDeviceConnectionState {

base::Value::List Results::Create(const DeviceConnectionState& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(file_manager_private::ToString(result));

  return create_results;
}
}  // namespace GetDeviceConnectionState

namespace GetDriveConnectionState {

base::Value::List Results::Create(const DriveConnectionState& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace GetDriveConnectionState

namespace Zoom {

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
    const base::Value& operation_value = args[0];
    {
      const std::string* zoom_operation_type_as_string = operation_value.GetIfString();
      if (!zoom_operation_type_as_string) {
        return std::nullopt;
      }
      params.operation = ParseZoomOperationType(*zoom_operation_type_as_string);
      if (params.operation == ZoomOperationType()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace Zoom

namespace GetProfiles {

base::Value::List Results::Create(const ProfilesResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace GetProfiles

namespace OpenInspector {

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
    const base::Value& type_value = args[0];
    {
      const std::string* inspection_type_as_string = type_value.GetIfString();
      if (!inspection_type_as_string) {
        return std::nullopt;
      }
      params.type = ParseInspectionType(*inspection_type_as_string);
      if (params.type == InspectionType()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace OpenInspector

namespace OpenSettingsSubpage {

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
    const base::Value& sub_page_value = args[0];
    {
      auto* temp = sub_page_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.sub_page = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace OpenSettingsSubpage

namespace GetProviders {

base::Value::List Results::Create(const std::vector<Provider>& extensions) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(extensions));

  return create_results;
}
}  // namespace GetProviders

namespace AddProvidedFileSystem {

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
    const base::Value& provider_id_value = args[0];
    {
      auto* temp = provider_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.provider_id = *temp;
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
}  // namespace AddProvidedFileSystem

namespace ConfigureVolume {

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
    const base::Value& volume_id_value = args[0];
    {
      auto* temp = volume_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.volume_id = *temp;
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
}  // namespace ConfigureVolume

namespace MountCrostini {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace MountCrostini

namespace GetAndroidPickerApps {

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
    const base::Value& extensions_value = args[0];
    {
      if (!extensions_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(extensions_value.GetList(), params.extensions)) {
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


base::Value::List Results::Create(const std::vector<AndroidApp>& apps) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(apps));

  return create_results;
}
}  // namespace GetAndroidPickerApps

namespace SelectAndroidPickerApp {

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
    const base::Value& android_app_value = args[0];
    {
      if (!android_app_value.is_dict()) {
        return std::nullopt;
      }
      if (!AndroidApp::Populate(android_app_value.GetDict(), params.android_app)) {
        return std::nullopt;
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
}  // namespace SelectAndroidPickerApp

namespace GetHoldingSpaceState {

base::Value::List Results::Create(const HoldingSpaceState& state) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((state).ToValue());

  return create_results;
}
}  // namespace GetHoldingSpaceState

namespace IsTabletModeEnabled {

base::Value::List Results::Create(bool result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace IsTabletModeEnabled

namespace NotifyDriveDialogResult {

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
    const base::Value& result_value = args[0];
    {
      const std::string* drive_dialog_result_as_string = result_value.GetIfString();
      if (!drive_dialog_result_as_string) {
        return std::nullopt;
      }
      params.result = ParseDriveDialogResult(*drive_dialog_result_as_string);
      if (params.result == DriveDialogResult()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace NotifyDriveDialogResult

namespace OpenURL {

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


}  // namespace OpenURL

namespace OpenWindow {

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
    const base::Value& params_value = args[0];
    {
      if (!params_value.is_dict()) {
        return std::nullopt;
      }
      if (!OpenWindowParams::Populate(params_value.GetDict(), params.params)) {
        return std::nullopt;
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
}  // namespace OpenWindow

namespace SendFeedback {

}  // namespace SendFeedback

namespace CancelIOTask {

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
    const base::Value& task_id_value = args[0];
    {
      auto temp = task_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.task_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace CancelIOTask

namespace ResumeIOTask {

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
    const base::Value& task_id_value = args[0];
    {
      auto temp = task_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.task_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& params_value = args[1];
    {
      if (!params_value.is_dict()) {
        return std::nullopt;
      }
      if (!ResumeParams::Populate(params_value.GetDict(), params.params)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace ResumeIOTask

namespace DismissIOTask {

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
    const base::Value& task_id_value = args[0];
    {
      auto temp = task_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.task_id = *temp;
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
}  // namespace DismissIOTask

namespace ShowPolicyDialog {

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
    const base::Value& task_id_value = args[0];
    {
      auto temp = task_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.task_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& type_value = args[1];
    {
      const std::string* policy_dialog_type_as_string = type_value.GetIfString();
      if (!policy_dialog_type_as_string) {
        return std::nullopt;
      }
      params.type = ParsePolicyDialogType(*policy_dialog_type_as_string);
      if (params.type == PolicyDialogType()) {
        return std::nullopt;
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
}  // namespace ShowPolicyDialog

namespace ProgressPausedTasks {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace ProgressPausedTasks

namespace ListMountableGuests {

base::Value::List Results::Create(const std::vector<MountableGuest>& guest) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(guest));

  return create_results;
}
}  // namespace ListMountableGuests

namespace MountGuest {

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
    const base::Value& id_value = args[0];
    {
      auto temp = id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.id = *temp;
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
}  // namespace MountGuest

namespace PollDriveHostedFilePinStates {

}  // namespace PollDriveHostedFilePinStates

namespace OpenManageSyncSettings {

}  // namespace OpenManageSyncSettings

namespace GetBulkPinProgress {

base::Value::List Results::Create(const BulkPinProgress& progress) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((progress).ToValue());

  return create_results;
}
}  // namespace GetBulkPinProgress

namespace CalculateBulkPinRequiredSpace {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace CalculateBulkPinRequiredSpace

//
// Events
//

namespace OnMountCompleted {

const char kEventName[] = "fileManagerPrivate.onMountCompleted";

base::Value::List Create(const MountCompletedEvent& event) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event).ToValue());

  return create_results;
}

}  // namespace OnMountCompleted

namespace OnFileTransfersUpdated {

const char kEventName[] = "fileManagerPrivate.onFileTransfersUpdated";

base::Value::List Create(const FileTransferStatus& event) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event).ToValue());

  return create_results;
}

}  // namespace OnFileTransfersUpdated

namespace OnPinTransfersUpdated {

const char kEventName[] = "fileManagerPrivate.onPinTransfersUpdated";

base::Value::List Create(const FileTransferStatus& event) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event).ToValue());

  return create_results;
}

}  // namespace OnPinTransfersUpdated

namespace OnIndividualFileTransfersUpdated {

const char kEventName[] = "fileManagerPrivate.onIndividualFileTransfersUpdated";

base::Value::List Create(const std::vector<SyncState>& event) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(event));

  return create_results;
}

}  // namespace OnIndividualFileTransfersUpdated

namespace OnDirectoryChanged {

const char kEventName[] = "fileManagerPrivate.onDirectoryChanged";

base::Value::List Create(const FileWatchEvent& event) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event).ToValue());

  return create_results;
}

}  // namespace OnDirectoryChanged

namespace OnPreferencesChanged {

const char kEventName[] = "fileManagerPrivate.onPreferencesChanged";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnPreferencesChanged

namespace OnDeviceConnectionStatusChanged {

const char kEventName[] = "fileManagerPrivate.onDeviceConnectionStatusChanged";

base::Value::List Create(const DeviceConnectionState& state) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(file_manager_private::ToString(state));

  return create_results;
}

}  // namespace OnDeviceConnectionStatusChanged

namespace OnDriveConnectionStatusChanged {

const char kEventName[] = "fileManagerPrivate.onDriveConnectionStatusChanged";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnDriveConnectionStatusChanged

namespace OnDeviceChanged {

const char kEventName[] = "fileManagerPrivate.onDeviceChanged";

base::Value::List Create(const DeviceEvent& event) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event).ToValue());

  return create_results;
}

}  // namespace OnDeviceChanged

namespace OnDriveSyncError {

const char kEventName[] = "fileManagerPrivate.onDriveSyncError";

base::Value::List Create(const DriveSyncErrorEvent& event) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event).ToValue());

  return create_results;
}

}  // namespace OnDriveSyncError

namespace OnDriveConfirmDialog {

const char kEventName[] = "fileManagerPrivate.onDriveConfirmDialog";

base::Value::List Create(const DriveConfirmDialogEvent& event) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event).ToValue());

  return create_results;
}

}  // namespace OnDriveConfirmDialog

namespace OnAppsUpdated {

const char kEventName[] = "fileManagerPrivate.onAppsUpdated";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnAppsUpdated

namespace OnCrostiniChanged {

const char kEventName[] = "fileManagerPrivate.onCrostiniChanged";

base::Value::List Create(const CrostiniEvent& event) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event).ToValue());

  return create_results;
}

}  // namespace OnCrostiniChanged

namespace OnTabletModeChanged {

const char kEventName[] = "fileManagerPrivate.onTabletModeChanged";

base::Value::List Create(bool enabled) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(enabled);

  return create_results;
}

}  // namespace OnTabletModeChanged

namespace OnIOTaskProgressStatus {

const char kEventName[] = "fileManagerPrivate.onIOTaskProgressStatus";

base::Value::List Create(const ProgressStatus& status) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((status).ToValue());

  return create_results;
}

}  // namespace OnIOTaskProgressStatus

namespace OnMountableGuestsChanged {

const char kEventName[] = "fileManagerPrivate.onMountableGuestsChanged";

base::Value::List Create(const std::vector<MountableGuest>& guests) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(guests));

  return create_results;
}

}  // namespace OnMountableGuestsChanged

namespace OnBulkPinProgress {

const char kEventName[] = "fileManagerPrivate.onBulkPinProgress";

base::Value::List Create(const BulkPinProgress& progress) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((progress).ToValue());

  return create_results;
}

}  // namespace OnBulkPinProgress

}  // namespace file_manager_private
}  // namespace api
}  // namespace extensions

