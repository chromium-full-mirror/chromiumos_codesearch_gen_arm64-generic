// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/file_manager_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/file_manager_private.h"

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
namespace file_manager_private {
//
// Types
//

const char* ToString(VolumeType enum_param) {
  switch (enum_param) {
    case VOLUME_TYPE_DRIVE:
      return "drive";
    case VOLUME_TYPE_DOWNLOADS:
      return "downloads";
    case VOLUME_TYPE_REMOVABLE:
      return "removable";
    case VOLUME_TYPE_ARCHIVE:
      return "archive";
    case VOLUME_TYPE_PROVIDED:
      return "provided";
    case VOLUME_TYPE_MTP:
      return "mtp";
    case VOLUME_TYPE_MEDIA_VIEW:
      return "media_view";
    case VOLUME_TYPE_CROSTINI:
      return "crostini";
    case VOLUME_TYPE_ANDROID_FILES:
      return "android_files";
    case VOLUME_TYPE_DOCUMENTS_PROVIDER:
      return "documents_provider";
    case VOLUME_TYPE_TESTING:
      return "testing";
    case VOLUME_TYPE_SMB:
      return "smb";
    case VOLUME_TYPE_SYSTEM_INTERNAL:
      return "system_internal";
    case VOLUME_TYPE_GUEST_OS:
      return "guest_os";
    case VOLUME_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

VolumeType ParseVolumeType(base::StringPiece enum_string) {
  if (enum_string == "drive")
    return VOLUME_TYPE_DRIVE;
  if (enum_string == "downloads")
    return VOLUME_TYPE_DOWNLOADS;
  if (enum_string == "removable")
    return VOLUME_TYPE_REMOVABLE;
  if (enum_string == "archive")
    return VOLUME_TYPE_ARCHIVE;
  if (enum_string == "provided")
    return VOLUME_TYPE_PROVIDED;
  if (enum_string == "mtp")
    return VOLUME_TYPE_MTP;
  if (enum_string == "media_view")
    return VOLUME_TYPE_MEDIA_VIEW;
  if (enum_string == "crostini")
    return VOLUME_TYPE_CROSTINI;
  if (enum_string == "android_files")
    return VOLUME_TYPE_ANDROID_FILES;
  if (enum_string == "documents_provider")
    return VOLUME_TYPE_DOCUMENTS_PROVIDER;
  if (enum_string == "testing")
    return VOLUME_TYPE_TESTING;
  if (enum_string == "smb")
    return VOLUME_TYPE_SMB;
  if (enum_string == "system_internal")
    return VOLUME_TYPE_SYSTEM_INTERNAL;
  if (enum_string == "guest_os")
    return VOLUME_TYPE_GUEST_OS;
  return VOLUME_TYPE_NONE;
}

std::u16string GetVolumeTypeParseError(base::StringPiece enum_string) {
  return u"expected \"drive\" or \"downloads\" or \"removable\" or \"archive\" or \"provided\" or \"mtp\" or \"media_view\" or \"crostini\" or \"android_files\" or \"documents_provider\" or \"testing\" or \"smb\" or \"system_internal\" or \"guest_os\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DeviceType enum_param) {
  switch (enum_param) {
    case DEVICE_TYPE_USB:
      return "usb";
    case DEVICE_TYPE_SD:
      return "sd";
    case DEVICE_TYPE_OPTICAL:
      return "optical";
    case DEVICE_TYPE_MOBILE:
      return "mobile";
    case DEVICE_TYPE_UNKNOWN:
      return "unknown";
    case DEVICE_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

DeviceType ParseDeviceType(base::StringPiece enum_string) {
  if (enum_string == "usb")
    return DEVICE_TYPE_USB;
  if (enum_string == "sd")
    return DEVICE_TYPE_SD;
  if (enum_string == "optical")
    return DEVICE_TYPE_OPTICAL;
  if (enum_string == "mobile")
    return DEVICE_TYPE_MOBILE;
  if (enum_string == "unknown")
    return DEVICE_TYPE_UNKNOWN;
  return DEVICE_TYPE_NONE;
}

std::u16string GetDeviceTypeParseError(base::StringPiece enum_string) {
  return u"expected \"usb\" or \"sd\" or \"optical\" or \"mobile\" or \"unknown\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DeviceConnectionState enum_param) {
  switch (enum_param) {
    case DEVICE_CONNECTION_STATE_OFFLINE:
      return "OFFLINE";
    case DEVICE_CONNECTION_STATE_ONLINE:
      return "ONLINE";
    case DEVICE_CONNECTION_STATE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

DeviceConnectionState ParseDeviceConnectionState(base::StringPiece enum_string) {
  if (enum_string == "OFFLINE")
    return DEVICE_CONNECTION_STATE_OFFLINE;
  if (enum_string == "ONLINE")
    return DEVICE_CONNECTION_STATE_ONLINE;
  return DEVICE_CONNECTION_STATE_NONE;
}

std::u16string GetDeviceConnectionStateParseError(base::StringPiece enum_string) {
  return u"expected \"OFFLINE\" or \"ONLINE\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DriveConnectionStateType enum_param) {
  switch (enum_param) {
    case DRIVE_CONNECTION_STATE_TYPE_OFFLINE:
      return "OFFLINE";
    case DRIVE_CONNECTION_STATE_TYPE_METERED:
      return "METERED";
    case DRIVE_CONNECTION_STATE_TYPE_ONLINE:
      return "ONLINE";
    case DRIVE_CONNECTION_STATE_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

DriveConnectionStateType ParseDriveConnectionStateType(base::StringPiece enum_string) {
  if (enum_string == "OFFLINE")
    return DRIVE_CONNECTION_STATE_TYPE_OFFLINE;
  if (enum_string == "METERED")
    return DRIVE_CONNECTION_STATE_TYPE_METERED;
  if (enum_string == "ONLINE")
    return DRIVE_CONNECTION_STATE_TYPE_ONLINE;
  return DRIVE_CONNECTION_STATE_TYPE_NONE;
}

std::u16string GetDriveConnectionStateTypeParseError(base::StringPiece enum_string) {
  return u"expected \"OFFLINE\" or \"METERED\" or \"ONLINE\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DriveOfflineReason enum_param) {
  switch (enum_param) {
    case DRIVE_OFFLINE_REASON_NOT_READY:
      return "NOT_READY";
    case DRIVE_OFFLINE_REASON_NO_NETWORK:
      return "NO_NETWORK";
    case DRIVE_OFFLINE_REASON_NO_SERVICE:
      return "NO_SERVICE";
    case DRIVE_OFFLINE_REASON_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

DriveOfflineReason ParseDriveOfflineReason(base::StringPiece enum_string) {
  if (enum_string == "NOT_READY")
    return DRIVE_OFFLINE_REASON_NOT_READY;
  if (enum_string == "NO_NETWORK")
    return DRIVE_OFFLINE_REASON_NO_NETWORK;
  if (enum_string == "NO_SERVICE")
    return DRIVE_OFFLINE_REASON_NO_SERVICE;
  return DRIVE_OFFLINE_REASON_NONE;
}

std::u16string GetDriveOfflineReasonParseError(base::StringPiece enum_string) {
  return u"expected \"NOT_READY\" or \"NO_NETWORK\" or \"NO_SERVICE\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(MountContext enum_param) {
  switch (enum_param) {
    case MOUNT_CONTEXT_USER:
      return "user";
    case MOUNT_CONTEXT_AUTO:
      return "auto";
    case MOUNT_CONTEXT_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

MountContext ParseMountContext(base::StringPiece enum_string) {
  if (enum_string == "user")
    return MOUNT_CONTEXT_USER;
  if (enum_string == "auto")
    return MOUNT_CONTEXT_AUTO;
  return MOUNT_CONTEXT_NONE;
}

std::u16string GetMountContextParseError(base::StringPiece enum_string) {
  return u"expected \"user\" or \"auto\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(MountCompletedEventType enum_param) {
  switch (enum_param) {
    case MOUNT_COMPLETED_EVENT_TYPE_MOUNT:
      return "mount";
    case MOUNT_COMPLETED_EVENT_TYPE_UNMOUNT:
      return "unmount";
    case MOUNT_COMPLETED_EVENT_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

MountCompletedEventType ParseMountCompletedEventType(base::StringPiece enum_string) {
  if (enum_string == "mount")
    return MOUNT_COMPLETED_EVENT_TYPE_MOUNT;
  if (enum_string == "unmount")
    return MOUNT_COMPLETED_EVENT_TYPE_UNMOUNT;
  return MOUNT_COMPLETED_EVENT_TYPE_NONE;
}

std::u16string GetMountCompletedEventTypeParseError(base::StringPiece enum_string) {
  return u"expected \"mount\" or \"unmount\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(MountError enum_param) {
  switch (enum_param) {
    case MOUNT_ERROR_SUCCESS:
      return "success";
    case MOUNT_ERROR_IN_PROGRESS:
      return "in_progress";
    case MOUNT_ERROR_UNKNOWN_ERROR:
      return "unknown_error";
    case MOUNT_ERROR_INTERNAL_ERROR:
      return "internal_error";
    case MOUNT_ERROR_INVALID_ARGUMENT:
      return "invalid_argument";
    case MOUNT_ERROR_INVALID_PATH:
      return "invalid_path";
    case MOUNT_ERROR_PATH_ALREADY_MOUNTED:
      return "path_already_mounted";
    case MOUNT_ERROR_PATH_NOT_MOUNTED:
      return "path_not_mounted";
    case MOUNT_ERROR_DIRECTORY_CREATION_FAILED:
      return "directory_creation_failed";
    case MOUNT_ERROR_INVALID_MOUNT_OPTIONS:
      return "invalid_mount_options";
    case MOUNT_ERROR_INSUFFICIENT_PERMISSIONS:
      return "insufficient_permissions";
    case MOUNT_ERROR_MOUNT_PROGRAM_NOT_FOUND:
      return "mount_program_not_found";
    case MOUNT_ERROR_MOUNT_PROGRAM_FAILED:
      return "mount_program_failed";
    case MOUNT_ERROR_INVALID_DEVICE_PATH:
      return "invalid_device_path";
    case MOUNT_ERROR_UNKNOWN_FILESYSTEM:
      return "unknown_filesystem";
    case MOUNT_ERROR_UNSUPPORTED_FILESYSTEM:
      return "unsupported_filesystem";
    case MOUNT_ERROR_NEED_PASSWORD:
      return "need_password";
    case MOUNT_ERROR_CANCELLED:
      return "cancelled";
    case MOUNT_ERROR_BUSY:
      return "busy";
    case MOUNT_ERROR_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

MountError ParseMountError(base::StringPiece enum_string) {
  if (enum_string == "success")
    return MOUNT_ERROR_SUCCESS;
  if (enum_string == "in_progress")
    return MOUNT_ERROR_IN_PROGRESS;
  if (enum_string == "unknown_error")
    return MOUNT_ERROR_UNKNOWN_ERROR;
  if (enum_string == "internal_error")
    return MOUNT_ERROR_INTERNAL_ERROR;
  if (enum_string == "invalid_argument")
    return MOUNT_ERROR_INVALID_ARGUMENT;
  if (enum_string == "invalid_path")
    return MOUNT_ERROR_INVALID_PATH;
  if (enum_string == "path_already_mounted")
    return MOUNT_ERROR_PATH_ALREADY_MOUNTED;
  if (enum_string == "path_not_mounted")
    return MOUNT_ERROR_PATH_NOT_MOUNTED;
  if (enum_string == "directory_creation_failed")
    return MOUNT_ERROR_DIRECTORY_CREATION_FAILED;
  if (enum_string == "invalid_mount_options")
    return MOUNT_ERROR_INVALID_MOUNT_OPTIONS;
  if (enum_string == "insufficient_permissions")
    return MOUNT_ERROR_INSUFFICIENT_PERMISSIONS;
  if (enum_string == "mount_program_not_found")
    return MOUNT_ERROR_MOUNT_PROGRAM_NOT_FOUND;
  if (enum_string == "mount_program_failed")
    return MOUNT_ERROR_MOUNT_PROGRAM_FAILED;
  if (enum_string == "invalid_device_path")
    return MOUNT_ERROR_INVALID_DEVICE_PATH;
  if (enum_string == "unknown_filesystem")
    return MOUNT_ERROR_UNKNOWN_FILESYSTEM;
  if (enum_string == "unsupported_filesystem")
    return MOUNT_ERROR_UNSUPPORTED_FILESYSTEM;
  if (enum_string == "need_password")
    return MOUNT_ERROR_NEED_PASSWORD;
  if (enum_string == "cancelled")
    return MOUNT_ERROR_CANCELLED;
  if (enum_string == "busy")
    return MOUNT_ERROR_BUSY;
  return MOUNT_ERROR_NONE;
}

std::u16string GetMountErrorParseError(base::StringPiece enum_string) {
  return u"expected \"success\" or \"in_progress\" or \"unknown_error\" or \"internal_error\" or \"invalid_argument\" or \"invalid_path\" or \"path_already_mounted\" or \"path_not_mounted\" or \"directory_creation_failed\" or \"invalid_mount_options\" or \"insufficient_permissions\" or \"mount_program_not_found\" or \"mount_program_failed\" or \"invalid_device_path\" or \"unknown_filesystem\" or \"unsupported_filesystem\" or \"need_password\" or \"cancelled\" or \"busy\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(FormatFileSystemType enum_param) {
  switch (enum_param) {
    case FORMAT_FILE_SYSTEM_TYPE_VFAT:
      return "vfat";
    case FORMAT_FILE_SYSTEM_TYPE_EXFAT:
      return "exfat";
    case FORMAT_FILE_SYSTEM_TYPE_NTFS:
      return "ntfs";
    case FORMAT_FILE_SYSTEM_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

FormatFileSystemType ParseFormatFileSystemType(base::StringPiece enum_string) {
  if (enum_string == "vfat")
    return FORMAT_FILE_SYSTEM_TYPE_VFAT;
  if (enum_string == "exfat")
    return FORMAT_FILE_SYSTEM_TYPE_EXFAT;
  if (enum_string == "ntfs")
    return FORMAT_FILE_SYSTEM_TYPE_NTFS;
  return FORMAT_FILE_SYSTEM_TYPE_NONE;
}

std::u16string GetFormatFileSystemTypeParseError(base::StringPiece enum_string) {
  return u"expected \"vfat\" or \"exfat\" or \"ntfs\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(TransferState enum_param) {
  switch (enum_param) {
    case TRANSFER_STATE_IN_PROGRESS:
      return "in_progress";
    case TRANSFER_STATE_QUEUED:
      return "queued";
    case TRANSFER_STATE_COMPLETED:
      return "completed";
    case TRANSFER_STATE_FAILED:
      return "failed";
    case TRANSFER_STATE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

TransferState ParseTransferState(base::StringPiece enum_string) {
  if (enum_string == "in_progress")
    return TRANSFER_STATE_IN_PROGRESS;
  if (enum_string == "queued")
    return TRANSFER_STATE_QUEUED;
  if (enum_string == "completed")
    return TRANSFER_STATE_COMPLETED;
  if (enum_string == "failed")
    return TRANSFER_STATE_FAILED;
  return TRANSFER_STATE_NONE;
}

std::u16string GetTransferStateParseError(base::StringPiece enum_string) {
  return u"expected \"in_progress\" or \"queued\" or \"completed\" or \"failed\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(InstallLinuxPackageResponse enum_param) {
  switch (enum_param) {
    case INSTALL_LINUX_PACKAGE_RESPONSE_STARTED:
      return "started";
    case INSTALL_LINUX_PACKAGE_RESPONSE_FAILED:
      return "failed";
    case INSTALL_LINUX_PACKAGE_RESPONSE_INSTALL_ALREADY_ACTIVE:
      return "install_already_active";
    case INSTALL_LINUX_PACKAGE_RESPONSE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

InstallLinuxPackageResponse ParseInstallLinuxPackageResponse(base::StringPiece enum_string) {
  if (enum_string == "started")
    return INSTALL_LINUX_PACKAGE_RESPONSE_STARTED;
  if (enum_string == "failed")
    return INSTALL_LINUX_PACKAGE_RESPONSE_FAILED;
  if (enum_string == "install_already_active")
    return INSTALL_LINUX_PACKAGE_RESPONSE_INSTALL_ALREADY_ACTIVE;
  return INSTALL_LINUX_PACKAGE_RESPONSE_NONE;
}

std::u16string GetInstallLinuxPackageResponseParseError(base::StringPiece enum_string) {
  return u"expected \"started\" or \"failed\" or \"install_already_active\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(FileWatchEventType enum_param) {
  switch (enum_param) {
    case FILE_WATCH_EVENT_TYPE_CHANGED:
      return "changed";
    case FILE_WATCH_EVENT_TYPE_ERROR:
      return "error";
    case FILE_WATCH_EVENT_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

FileWatchEventType ParseFileWatchEventType(base::StringPiece enum_string) {
  if (enum_string == "changed")
    return FILE_WATCH_EVENT_TYPE_CHANGED;
  if (enum_string == "error")
    return FILE_WATCH_EVENT_TYPE_ERROR;
  return FILE_WATCH_EVENT_TYPE_NONE;
}

std::u16string GetFileWatchEventTypeParseError(base::StringPiece enum_string) {
  return u"expected \"changed\" or \"error\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ChangeType enum_param) {
  switch (enum_param) {
    case CHANGE_TYPE_ADD_OR_UPDATE:
      return "add_or_update";
    case CHANGE_TYPE_DELETE:
      return "delete";
    case CHANGE_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

ChangeType ParseChangeType(base::StringPiece enum_string) {
  if (enum_string == "add_or_update")
    return CHANGE_TYPE_ADD_OR_UPDATE;
  if (enum_string == "delete")
    return CHANGE_TYPE_DELETE;
  return CHANGE_TYPE_NONE;
}

std::u16string GetChangeTypeParseError(base::StringPiece enum_string) {
  return u"expected \"add_or_update\" or \"delete\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SearchType enum_param) {
  switch (enum_param) {
    case SEARCH_TYPE_EXCLUDE_DIRECTORIES:
      return "EXCLUDE_DIRECTORIES";
    case SEARCH_TYPE_SHARED_WITH_ME:
      return "SHARED_WITH_ME";
    case SEARCH_TYPE_OFFLINE:
      return "OFFLINE";
    case SEARCH_TYPE_ALL:
      return "ALL";
    case SEARCH_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

SearchType ParseSearchType(base::StringPiece enum_string) {
  if (enum_string == "EXCLUDE_DIRECTORIES")
    return SEARCH_TYPE_EXCLUDE_DIRECTORIES;
  if (enum_string == "SHARED_WITH_ME")
    return SEARCH_TYPE_SHARED_WITH_ME;
  if (enum_string == "OFFLINE")
    return SEARCH_TYPE_OFFLINE;
  if (enum_string == "ALL")
    return SEARCH_TYPE_ALL;
  return SEARCH_TYPE_NONE;
}

std::u16string GetSearchTypeParseError(base::StringPiece enum_string) {
  return u"expected \"EXCLUDE_DIRECTORIES\" or \"SHARED_WITH_ME\" or \"OFFLINE\" or \"ALL\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ZoomOperationType enum_param) {
  switch (enum_param) {
    case ZOOM_OPERATION_TYPE_IN:
      return "in";
    case ZOOM_OPERATION_TYPE_OUT:
      return "out";
    case ZOOM_OPERATION_TYPE_RESET:
      return "reset";
    case ZOOM_OPERATION_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

ZoomOperationType ParseZoomOperationType(base::StringPiece enum_string) {
  if (enum_string == "in")
    return ZOOM_OPERATION_TYPE_IN;
  if (enum_string == "out")
    return ZOOM_OPERATION_TYPE_OUT;
  if (enum_string == "reset")
    return ZOOM_OPERATION_TYPE_RESET;
  return ZOOM_OPERATION_TYPE_NONE;
}

std::u16string GetZoomOperationTypeParseError(base::StringPiece enum_string) {
  return u"expected \"in\" or \"out\" or \"reset\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(InspectionType enum_param) {
  switch (enum_param) {
    case INSPECTION_TYPE_NORMAL:
      return "normal";
    case INSPECTION_TYPE_CONSOLE:
      return "console";
    case INSPECTION_TYPE_ELEMENT:
      return "element";
    case INSPECTION_TYPE_BACKGROUND:
      return "background";
    case INSPECTION_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

InspectionType ParseInspectionType(base::StringPiece enum_string) {
  if (enum_string == "normal")
    return INSPECTION_TYPE_NORMAL;
  if (enum_string == "console")
    return INSPECTION_TYPE_CONSOLE;
  if (enum_string == "element")
    return INSPECTION_TYPE_ELEMENT;
  if (enum_string == "background")
    return INSPECTION_TYPE_BACKGROUND;
  return INSPECTION_TYPE_NONE;
}

std::u16string GetInspectionTypeParseError(base::StringPiece enum_string) {
  return u"expected \"normal\" or \"console\" or \"element\" or \"background\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DeviceEventType enum_param) {
  switch (enum_param) {
    case DEVICE_EVENT_TYPE_DISABLED:
      return "disabled";
    case DEVICE_EVENT_TYPE_REMOVED:
      return "removed";
    case DEVICE_EVENT_TYPE_HARD_UNPLUGGED:
      return "hard_unplugged";
    case DEVICE_EVENT_TYPE_FORMAT_START:
      return "format_start";
    case DEVICE_EVENT_TYPE_FORMAT_SUCCESS:
      return "format_success";
    case DEVICE_EVENT_TYPE_FORMAT_FAIL:
      return "format_fail";
    case DEVICE_EVENT_TYPE_RENAME_START:
      return "rename_start";
    case DEVICE_EVENT_TYPE_RENAME_SUCCESS:
      return "rename_success";
    case DEVICE_EVENT_TYPE_RENAME_FAIL:
      return "rename_fail";
    case DEVICE_EVENT_TYPE_PARTITION_START:
      return "partition_start";
    case DEVICE_EVENT_TYPE_PARTITION_SUCCESS:
      return "partition_success";
    case DEVICE_EVENT_TYPE_PARTITION_FAIL:
      return "partition_fail";
    case DEVICE_EVENT_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

DeviceEventType ParseDeviceEventType(base::StringPiece enum_string) {
  if (enum_string == "disabled")
    return DEVICE_EVENT_TYPE_DISABLED;
  if (enum_string == "removed")
    return DEVICE_EVENT_TYPE_REMOVED;
  if (enum_string == "hard_unplugged")
    return DEVICE_EVENT_TYPE_HARD_UNPLUGGED;
  if (enum_string == "format_start")
    return DEVICE_EVENT_TYPE_FORMAT_START;
  if (enum_string == "format_success")
    return DEVICE_EVENT_TYPE_FORMAT_SUCCESS;
  if (enum_string == "format_fail")
    return DEVICE_EVENT_TYPE_FORMAT_FAIL;
  if (enum_string == "rename_start")
    return DEVICE_EVENT_TYPE_RENAME_START;
  if (enum_string == "rename_success")
    return DEVICE_EVENT_TYPE_RENAME_SUCCESS;
  if (enum_string == "rename_fail")
    return DEVICE_EVENT_TYPE_RENAME_FAIL;
  if (enum_string == "partition_start")
    return DEVICE_EVENT_TYPE_PARTITION_START;
  if (enum_string == "partition_success")
    return DEVICE_EVENT_TYPE_PARTITION_SUCCESS;
  if (enum_string == "partition_fail")
    return DEVICE_EVENT_TYPE_PARTITION_FAIL;
  return DEVICE_EVENT_TYPE_NONE;
}

std::u16string GetDeviceEventTypeParseError(base::StringPiece enum_string) {
  return u"expected \"disabled\" or \"removed\" or \"hard_unplugged\" or \"format_start\" or \"format_success\" or \"format_fail\" or \"rename_start\" or \"rename_success\" or \"rename_fail\" or \"partition_start\" or \"partition_success\" or \"partition_fail\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DriveSyncErrorType enum_param) {
  switch (enum_param) {
    case DRIVE_SYNC_ERROR_TYPE_DELETE_WITHOUT_PERMISSION:
      return "delete_without_permission";
    case DRIVE_SYNC_ERROR_TYPE_SERVICE_UNAVAILABLE:
      return "service_unavailable";
    case DRIVE_SYNC_ERROR_TYPE_NO_SERVER_SPACE:
      return "no_server_space";
    case DRIVE_SYNC_ERROR_TYPE_NO_SERVER_SPACE_ORGANIZATION:
      return "no_server_space_organization";
    case DRIVE_SYNC_ERROR_TYPE_NO_LOCAL_SPACE:
      return "no_local_space";
    case DRIVE_SYNC_ERROR_TYPE_NO_SHARED_DRIVE_SPACE:
      return "no_shared_drive_space";
    case DRIVE_SYNC_ERROR_TYPE_MISC:
      return "misc";
    case DRIVE_SYNC_ERROR_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

DriveSyncErrorType ParseDriveSyncErrorType(base::StringPiece enum_string) {
  if (enum_string == "delete_without_permission")
    return DRIVE_SYNC_ERROR_TYPE_DELETE_WITHOUT_PERMISSION;
  if (enum_string == "service_unavailable")
    return DRIVE_SYNC_ERROR_TYPE_SERVICE_UNAVAILABLE;
  if (enum_string == "no_server_space")
    return DRIVE_SYNC_ERROR_TYPE_NO_SERVER_SPACE;
  if (enum_string == "no_server_space_organization")
    return DRIVE_SYNC_ERROR_TYPE_NO_SERVER_SPACE_ORGANIZATION;
  if (enum_string == "no_local_space")
    return DRIVE_SYNC_ERROR_TYPE_NO_LOCAL_SPACE;
  if (enum_string == "no_shared_drive_space")
    return DRIVE_SYNC_ERROR_TYPE_NO_SHARED_DRIVE_SPACE;
  if (enum_string == "misc")
    return DRIVE_SYNC_ERROR_TYPE_MISC;
  return DRIVE_SYNC_ERROR_TYPE_NONE;
}

std::u16string GetDriveSyncErrorTypeParseError(base::StringPiece enum_string) {
  return u"expected \"delete_without_permission\" or \"service_unavailable\" or \"no_server_space\" or \"no_server_space_organization\" or \"no_local_space\" or \"no_shared_drive_space\" or \"misc\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DriveConfirmDialogType enum_param) {
  switch (enum_param) {
    case DRIVE_CONFIRM_DIALOG_TYPE_ENABLE_DOCS_OFFLINE:
      return "enable_docs_offline";
    case DRIVE_CONFIRM_DIALOG_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

DriveConfirmDialogType ParseDriveConfirmDialogType(base::StringPiece enum_string) {
  if (enum_string == "enable_docs_offline")
    return DRIVE_CONFIRM_DIALOG_TYPE_ENABLE_DOCS_OFFLINE;
  return DRIVE_CONFIRM_DIALOG_TYPE_NONE;
}

std::u16string GetDriveConfirmDialogTypeParseError(base::StringPiece enum_string) {
  return u"expected \"enable_docs_offline\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DriveDialogResult enum_param) {
  switch (enum_param) {
    case DRIVE_DIALOG_RESULT_NOT_DISPLAYED:
      return "not_displayed";
    case DRIVE_DIALOG_RESULT_ACCEPT:
      return "accept";
    case DRIVE_DIALOG_RESULT_REJECT:
      return "reject";
    case DRIVE_DIALOG_RESULT_DISMISS:
      return "dismiss";
    case DRIVE_DIALOG_RESULT_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

DriveDialogResult ParseDriveDialogResult(base::StringPiece enum_string) {
  if (enum_string == "not_displayed")
    return DRIVE_DIALOG_RESULT_NOT_DISPLAYED;
  if (enum_string == "accept")
    return DRIVE_DIALOG_RESULT_ACCEPT;
  if (enum_string == "reject")
    return DRIVE_DIALOG_RESULT_REJECT;
  if (enum_string == "dismiss")
    return DRIVE_DIALOG_RESULT_DISMISS;
  return DRIVE_DIALOG_RESULT_NONE;
}

std::u16string GetDriveDialogResultParseError(base::StringPiece enum_string) {
  return u"expected \"not_displayed\" or \"accept\" or \"reject\" or \"dismiss\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(TaskResult enum_param) {
  switch (enum_param) {
    case TASK_RESULT_OPENED:
      return "opened";
    case TASK_RESULT_MESSAGE_SENT:
      return "message_sent";
    case TASK_RESULT_FAILED:
      return "failed";
    case TASK_RESULT_EMPTY:
      return "empty";
    case TASK_RESULT_FAILED_PLUGIN_VM_DIRECTORY_NOT_SHARED:
      return "failed_plugin_vm_directory_not_shared";
    case TASK_RESULT_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

TaskResult ParseTaskResult(base::StringPiece enum_string) {
  if (enum_string == "opened")
    return TASK_RESULT_OPENED;
  if (enum_string == "message_sent")
    return TASK_RESULT_MESSAGE_SENT;
  if (enum_string == "failed")
    return TASK_RESULT_FAILED;
  if (enum_string == "empty")
    return TASK_RESULT_EMPTY;
  if (enum_string == "failed_plugin_vm_directory_not_shared")
    return TASK_RESULT_FAILED_PLUGIN_VM_DIRECTORY_NOT_SHARED;
  return TASK_RESULT_NONE;
}

std::u16string GetTaskResultParseError(base::StringPiece enum_string) {
  return u"expected \"opened\" or \"message_sent\" or \"failed\" or \"empty\" or \"failed_plugin_vm_directory_not_shared\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DriveShareType enum_param) {
  switch (enum_param) {
    case DRIVE_SHARE_TYPE_CAN_EDIT:
      return "can_edit";
    case DRIVE_SHARE_TYPE_CAN_COMMENT:
      return "can_comment";
    case DRIVE_SHARE_TYPE_CAN_VIEW:
      return "can_view";
    case DRIVE_SHARE_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

DriveShareType ParseDriveShareType(base::StringPiece enum_string) {
  if (enum_string == "can_edit")
    return DRIVE_SHARE_TYPE_CAN_EDIT;
  if (enum_string == "can_comment")
    return DRIVE_SHARE_TYPE_CAN_COMMENT;
  if (enum_string == "can_view")
    return DRIVE_SHARE_TYPE_CAN_VIEW;
  return DRIVE_SHARE_TYPE_NONE;
}

std::u16string GetDriveShareTypeParseError(base::StringPiece enum_string) {
  return u"expected \"can_edit\" or \"can_comment\" or \"can_view\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(EntryPropertyName enum_param) {
  switch (enum_param) {
    case ENTRY_PROPERTY_NAME_SIZE:
      return "size";
    case ENTRY_PROPERTY_NAME_MODIFICATIONTIME:
      return "modificationTime";
    case ENTRY_PROPERTY_NAME_MODIFICATIONBYMETIME:
      return "modificationByMeTime";
    case ENTRY_PROPERTY_NAME_THUMBNAILURL:
      return "thumbnailUrl";
    case ENTRY_PROPERTY_NAME_CROPPEDTHUMBNAILURL:
      return "croppedThumbnailUrl";
    case ENTRY_PROPERTY_NAME_IMAGEWIDTH:
      return "imageWidth";
    case ENTRY_PROPERTY_NAME_IMAGEHEIGHT:
      return "imageHeight";
    case ENTRY_PROPERTY_NAME_IMAGEROTATION:
      return "imageRotation";
    case ENTRY_PROPERTY_NAME_PINNED:
      return "pinned";
    case ENTRY_PROPERTY_NAME_PRESENT:
      return "present";
    case ENTRY_PROPERTY_NAME_HOSTED:
      return "hosted";
    case ENTRY_PROPERTY_NAME_AVAILABLEOFFLINE:
      return "availableOffline";
    case ENTRY_PROPERTY_NAME_AVAILABLEWHENMETERED:
      return "availableWhenMetered";
    case ENTRY_PROPERTY_NAME_DIRTY:
      return "dirty";
    case ENTRY_PROPERTY_NAME_CUSTOMICONURL:
      return "customIconUrl";
    case ENTRY_PROPERTY_NAME_CONTENTMIMETYPE:
      return "contentMimeType";
    case ENTRY_PROPERTY_NAME_SHAREDWITHME:
      return "sharedWithMe";
    case ENTRY_PROPERTY_NAME_SHARED:
      return "shared";
    case ENTRY_PROPERTY_NAME_STARRED:
      return "starred";
    case ENTRY_PROPERTY_NAME_EXTERNALFILEURL:
      return "externalFileUrl";
    case ENTRY_PROPERTY_NAME_ALTERNATEURL:
      return "alternateUrl";
    case ENTRY_PROPERTY_NAME_SHAREURL:
      return "shareUrl";
    case ENTRY_PROPERTY_NAME_CANCOPY:
      return "canCopy";
    case ENTRY_PROPERTY_NAME_CANDELETE:
      return "canDelete";
    case ENTRY_PROPERTY_NAME_CANRENAME:
      return "canRename";
    case ENTRY_PROPERTY_NAME_CANADDCHILDREN:
      return "canAddChildren";
    case ENTRY_PROPERTY_NAME_CANSHARE:
      return "canShare";
    case ENTRY_PROPERTY_NAME_CANPIN:
      return "canPin";
    case ENTRY_PROPERTY_NAME_ISMACHINEROOT:
      return "isMachineRoot";
    case ENTRY_PROPERTY_NAME_ISEXTERNALMEDIA:
      return "isExternalMedia";
    case ENTRY_PROPERTY_NAME_ISARBITRARYSYNCFOLDER:
      return "isArbitrarySyncFolder";
    case ENTRY_PROPERTY_NAME_SYNCSTATUS:
      return "syncStatus";
    case ENTRY_PROPERTY_NAME_PROGRESS:
      return "progress";
    case ENTRY_PROPERTY_NAME_SHORTCUT:
      return "shortcut";
    case ENTRY_PROPERTY_NAME_SYNCCOMPLETEDTIME:
      return "syncCompletedTime";
    case ENTRY_PROPERTY_NAME_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

EntryPropertyName ParseEntryPropertyName(base::StringPiece enum_string) {
  if (enum_string == "size")
    return ENTRY_PROPERTY_NAME_SIZE;
  if (enum_string == "modificationTime")
    return ENTRY_PROPERTY_NAME_MODIFICATIONTIME;
  if (enum_string == "modificationByMeTime")
    return ENTRY_PROPERTY_NAME_MODIFICATIONBYMETIME;
  if (enum_string == "thumbnailUrl")
    return ENTRY_PROPERTY_NAME_THUMBNAILURL;
  if (enum_string == "croppedThumbnailUrl")
    return ENTRY_PROPERTY_NAME_CROPPEDTHUMBNAILURL;
  if (enum_string == "imageWidth")
    return ENTRY_PROPERTY_NAME_IMAGEWIDTH;
  if (enum_string == "imageHeight")
    return ENTRY_PROPERTY_NAME_IMAGEHEIGHT;
  if (enum_string == "imageRotation")
    return ENTRY_PROPERTY_NAME_IMAGEROTATION;
  if (enum_string == "pinned")
    return ENTRY_PROPERTY_NAME_PINNED;
  if (enum_string == "present")
    return ENTRY_PROPERTY_NAME_PRESENT;
  if (enum_string == "hosted")
    return ENTRY_PROPERTY_NAME_HOSTED;
  if (enum_string == "availableOffline")
    return ENTRY_PROPERTY_NAME_AVAILABLEOFFLINE;
  if (enum_string == "availableWhenMetered")
    return ENTRY_PROPERTY_NAME_AVAILABLEWHENMETERED;
  if (enum_string == "dirty")
    return ENTRY_PROPERTY_NAME_DIRTY;
  if (enum_string == "customIconUrl")
    return ENTRY_PROPERTY_NAME_CUSTOMICONURL;
  if (enum_string == "contentMimeType")
    return ENTRY_PROPERTY_NAME_CONTENTMIMETYPE;
  if (enum_string == "sharedWithMe")
    return ENTRY_PROPERTY_NAME_SHAREDWITHME;
  if (enum_string == "shared")
    return ENTRY_PROPERTY_NAME_SHARED;
  if (enum_string == "starred")
    return ENTRY_PROPERTY_NAME_STARRED;
  if (enum_string == "externalFileUrl")
    return ENTRY_PROPERTY_NAME_EXTERNALFILEURL;
  if (enum_string == "alternateUrl")
    return ENTRY_PROPERTY_NAME_ALTERNATEURL;
  if (enum_string == "shareUrl")
    return ENTRY_PROPERTY_NAME_SHAREURL;
  if (enum_string == "canCopy")
    return ENTRY_PROPERTY_NAME_CANCOPY;
  if (enum_string == "canDelete")
    return ENTRY_PROPERTY_NAME_CANDELETE;
  if (enum_string == "canRename")
    return ENTRY_PROPERTY_NAME_CANRENAME;
  if (enum_string == "canAddChildren")
    return ENTRY_PROPERTY_NAME_CANADDCHILDREN;
  if (enum_string == "canShare")
    return ENTRY_PROPERTY_NAME_CANSHARE;
  if (enum_string == "canPin")
    return ENTRY_PROPERTY_NAME_CANPIN;
  if (enum_string == "isMachineRoot")
    return ENTRY_PROPERTY_NAME_ISMACHINEROOT;
  if (enum_string == "isExternalMedia")
    return ENTRY_PROPERTY_NAME_ISEXTERNALMEDIA;
  if (enum_string == "isArbitrarySyncFolder")
    return ENTRY_PROPERTY_NAME_ISARBITRARYSYNCFOLDER;
  if (enum_string == "syncStatus")
    return ENTRY_PROPERTY_NAME_SYNCSTATUS;
  if (enum_string == "progress")
    return ENTRY_PROPERTY_NAME_PROGRESS;
  if (enum_string == "shortcut")
    return ENTRY_PROPERTY_NAME_SHORTCUT;
  if (enum_string == "syncCompletedTime")
    return ENTRY_PROPERTY_NAME_SYNCCOMPLETEDTIME;
  return ENTRY_PROPERTY_NAME_NONE;
}

std::u16string GetEntryPropertyNameParseError(base::StringPiece enum_string) {
  return u"expected \"size\" or \"modificationTime\" or \"modificationByMeTime\" or \"thumbnailUrl\" or \"croppedThumbnailUrl\" or \"imageWidth\" or \"imageHeight\" or \"imageRotation\" or \"pinned\" or \"present\" or \"hosted\" or \"availableOffline\" or \"availableWhenMetered\" or \"dirty\" or \"customIconUrl\" or \"contentMimeType\" or \"sharedWithMe\" or \"shared\" or \"starred\" or \"externalFileUrl\" or \"alternateUrl\" or \"shareUrl\" or \"canCopy\" or \"canDelete\" or \"canRename\" or \"canAddChildren\" or \"canShare\" or \"canPin\" or \"isMachineRoot\" or \"isExternalMedia\" or \"isArbitrarySyncFolder\" or \"syncStatus\" or \"progress\" or \"shortcut\" or \"syncCompletedTime\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(Source enum_param) {
  switch (enum_param) {
    case SOURCE_FILE:
      return "file";
    case SOURCE_DEVICE:
      return "device";
    case SOURCE_NETWORK:
      return "network";
    case SOURCE_SYSTEM:
      return "system";
    case SOURCE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

Source ParseSource(base::StringPiece enum_string) {
  if (enum_string == "file")
    return SOURCE_FILE;
  if (enum_string == "device")
    return SOURCE_DEVICE;
  if (enum_string == "network")
    return SOURCE_NETWORK;
  if (enum_string == "system")
    return SOURCE_SYSTEM;
  return SOURCE_NONE;
}

std::u16string GetSourceParseError(base::StringPiece enum_string) {
  return u"expected \"file\" or \"device\" or \"network\" or \"system\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SourceRestriction enum_param) {
  switch (enum_param) {
    case SOURCE_RESTRICTION_ANY_SOURCE:
      return "any_source";
    case SOURCE_RESTRICTION_NATIVE_SOURCE:
      return "native_source";
    case SOURCE_RESTRICTION_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

SourceRestriction ParseSourceRestriction(base::StringPiece enum_string) {
  if (enum_string == "any_source")
    return SOURCE_RESTRICTION_ANY_SOURCE;
  if (enum_string == "native_source")
    return SOURCE_RESTRICTION_NATIVE_SOURCE;
  return SOURCE_RESTRICTION_NONE;
}

std::u16string GetSourceRestrictionParseError(base::StringPiece enum_string) {
  return u"expected \"any_source\" or \"native_source\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(FileCategory enum_param) {
  switch (enum_param) {
    case FILE_CATEGORY_ALL:
      return "all";
    case FILE_CATEGORY_AUDIO:
      return "audio";
    case FILE_CATEGORY_IMAGE:
      return "image";
    case FILE_CATEGORY_VIDEO:
      return "video";
    case FILE_CATEGORY_DOCUMENT:
      return "document";
    case FILE_CATEGORY_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

FileCategory ParseFileCategory(base::StringPiece enum_string) {
  if (enum_string == "all")
    return FILE_CATEGORY_ALL;
  if (enum_string == "audio")
    return FILE_CATEGORY_AUDIO;
  if (enum_string == "image")
    return FILE_CATEGORY_IMAGE;
  if (enum_string == "video")
    return FILE_CATEGORY_VIDEO;
  if (enum_string == "document")
    return FILE_CATEGORY_DOCUMENT;
  return FILE_CATEGORY_NONE;
}

std::u16string GetFileCategoryParseError(base::StringPiece enum_string) {
  return u"expected \"all\" or \"audio\" or \"image\" or \"video\" or \"document\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(CrostiniEventType enum_param) {
  switch (enum_param) {
    case CROSTINI_EVENT_TYPE_ENABLE:
      return "enable";
    case CROSTINI_EVENT_TYPE_DISABLE:
      return "disable";
    case CROSTINI_EVENT_TYPE_SHARE:
      return "share";
    case CROSTINI_EVENT_TYPE_UNSHARE:
      return "unshare";
    case CROSTINI_EVENT_TYPE_DROP_FAILED_PLUGIN_VM_DIRECTORY_NOT_SHARED:
      return "drop_failed_plugin_vm_directory_not_shared";
    case CROSTINI_EVENT_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

CrostiniEventType ParseCrostiniEventType(base::StringPiece enum_string) {
  if (enum_string == "enable")
    return CROSTINI_EVENT_TYPE_ENABLE;
  if (enum_string == "disable")
    return CROSTINI_EVENT_TYPE_DISABLE;
  if (enum_string == "share")
    return CROSTINI_EVENT_TYPE_SHARE;
  if (enum_string == "unshare")
    return CROSTINI_EVENT_TYPE_UNSHARE;
  if (enum_string == "drop_failed_plugin_vm_directory_not_shared")
    return CROSTINI_EVENT_TYPE_DROP_FAILED_PLUGIN_VM_DIRECTORY_NOT_SHARED;
  return CROSTINI_EVENT_TYPE_NONE;
}

std::u16string GetCrostiniEventTypeParseError(base::StringPiece enum_string) {
  return u"expected \"enable\" or \"disable\" or \"share\" or \"unshare\" or \"drop_failed_plugin_vm_directory_not_shared\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ProviderSource enum_param) {
  switch (enum_param) {
    case PROVIDER_SOURCE_FILE:
      return "file";
    case PROVIDER_SOURCE_DEVICE:
      return "device";
    case PROVIDER_SOURCE_NETWORK:
      return "network";
    case PROVIDER_SOURCE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

ProviderSource ParseProviderSource(base::StringPiece enum_string) {
  if (enum_string == "file")
    return PROVIDER_SOURCE_FILE;
  if (enum_string == "device")
    return PROVIDER_SOURCE_DEVICE;
  if (enum_string == "network")
    return PROVIDER_SOURCE_NETWORK;
  return PROVIDER_SOURCE_NONE;
}

std::u16string GetProviderSourceParseError(base::StringPiece enum_string) {
  return u"expected \"file\" or \"device\" or \"network\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SharesheetLaunchSource enum_param) {
  switch (enum_param) {
    case SHARESHEET_LAUNCH_SOURCE_CONTEXT_MENU:
      return "context_menu";
    case SHARESHEET_LAUNCH_SOURCE_SHARESHEET_BUTTON:
      return "sharesheet_button";
    case SHARESHEET_LAUNCH_SOURCE_UNKNOWN:
      return "unknown";
    case SHARESHEET_LAUNCH_SOURCE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

SharesheetLaunchSource ParseSharesheetLaunchSource(base::StringPiece enum_string) {
  if (enum_string == "context_menu")
    return SHARESHEET_LAUNCH_SOURCE_CONTEXT_MENU;
  if (enum_string == "sharesheet_button")
    return SHARESHEET_LAUNCH_SOURCE_SHARESHEET_BUTTON;
  if (enum_string == "unknown")
    return SHARESHEET_LAUNCH_SOURCE_UNKNOWN;
  return SHARESHEET_LAUNCH_SOURCE_NONE;
}

std::u16string GetSharesheetLaunchSourceParseError(base::StringPiece enum_string) {
  return u"expected \"context_menu\" or \"sharesheet_button\" or \"unknown\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(IOTaskState enum_param) {
  switch (enum_param) {
    case IO_TASK_STATE_QUEUED:
      return "queued";
    case IO_TASK_STATE_SCANNING:
      return "scanning";
    case IO_TASK_STATE_IN_PROGRESS:
      return "in_progress";
    case IO_TASK_STATE_PAUSED:
      return "paused";
    case IO_TASK_STATE_SUCCESS:
      return "success";
    case IO_TASK_STATE_ERROR:
      return "error";
    case IO_TASK_STATE_NEED_PASSWORD:
      return "need_password";
    case IO_TASK_STATE_CANCELLED:
      return "cancelled";
    case IO_TASK_STATE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

IOTaskState ParseIOTaskState(base::StringPiece enum_string) {
  if (enum_string == "queued")
    return IO_TASK_STATE_QUEUED;
  if (enum_string == "scanning")
    return IO_TASK_STATE_SCANNING;
  if (enum_string == "in_progress")
    return IO_TASK_STATE_IN_PROGRESS;
  if (enum_string == "paused")
    return IO_TASK_STATE_PAUSED;
  if (enum_string == "success")
    return IO_TASK_STATE_SUCCESS;
  if (enum_string == "error")
    return IO_TASK_STATE_ERROR;
  if (enum_string == "need_password")
    return IO_TASK_STATE_NEED_PASSWORD;
  if (enum_string == "cancelled")
    return IO_TASK_STATE_CANCELLED;
  return IO_TASK_STATE_NONE;
}

std::u16string GetIOTaskStateParseError(base::StringPiece enum_string) {
  return u"expected \"queued\" or \"scanning\" or \"in_progress\" or \"paused\" or \"success\" or \"error\" or \"need_password\" or \"cancelled\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(IOTaskType enum_param) {
  switch (enum_param) {
    case IO_TASK_TYPE_COPY:
      return "copy";
    case IO_TASK_TYPE_DELETE:
      return "delete";
    case IO_TASK_TYPE_EMPTY_TRASH:
      return "empty_trash";
    case IO_TASK_TYPE_EXTRACT:
      return "extract";
    case IO_TASK_TYPE_MOVE:
      return "move";
    case IO_TASK_TYPE_RESTORE:
      return "restore";
    case IO_TASK_TYPE_RESTORE_TO_DESTINATION:
      return "restore_to_destination";
    case IO_TASK_TYPE_TRASH:
      return "trash";
    case IO_TASK_TYPE_ZIP:
      return "zip";
    case IO_TASK_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

IOTaskType ParseIOTaskType(base::StringPiece enum_string) {
  if (enum_string == "copy")
    return IO_TASK_TYPE_COPY;
  if (enum_string == "delete")
    return IO_TASK_TYPE_DELETE;
  if (enum_string == "empty_trash")
    return IO_TASK_TYPE_EMPTY_TRASH;
  if (enum_string == "extract")
    return IO_TASK_TYPE_EXTRACT;
  if (enum_string == "move")
    return IO_TASK_TYPE_MOVE;
  if (enum_string == "restore")
    return IO_TASK_TYPE_RESTORE;
  if (enum_string == "restore_to_destination")
    return IO_TASK_TYPE_RESTORE_TO_DESTINATION;
  if (enum_string == "trash")
    return IO_TASK_TYPE_TRASH;
  if (enum_string == "zip")
    return IO_TASK_TYPE_ZIP;
  return IO_TASK_TYPE_NONE;
}

std::u16string GetIOTaskTypeParseError(base::StringPiece enum_string) {
  return u"expected \"copy\" or \"delete\" or \"empty_trash\" or \"extract\" or \"move\" or \"restore\" or \"restore_to_destination\" or \"trash\" or \"zip\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(PolicyErrorType enum_param) {
  switch (enum_param) {
    case POLICY_ERROR_TYPE_DLP:
      return "dlp";
    case POLICY_ERROR_TYPE_ENTERPRISE_CONNECTORS:
      return "enterprise_connectors";
    case POLICY_ERROR_TYPE_DLP_WARNING_TIMEOUT:
      return "dlp_warning_timeout";
    case POLICY_ERROR_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

PolicyErrorType ParsePolicyErrorType(base::StringPiece enum_string) {
  if (enum_string == "dlp")
    return POLICY_ERROR_TYPE_DLP;
  if (enum_string == "enterprise_connectors")
    return POLICY_ERROR_TYPE_ENTERPRISE_CONNECTORS;
  if (enum_string == "dlp_warning_timeout")
    return POLICY_ERROR_TYPE_DLP_WARNING_TIMEOUT;
  return POLICY_ERROR_TYPE_NONE;
}

std::u16string GetPolicyErrorTypeParseError(base::StringPiece enum_string) {
  return u"expected \"dlp\" or \"enterprise_connectors\" or \"dlp_warning_timeout\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(PolicyDialogType enum_param) {
  switch (enum_param) {
    case POLICY_DIALOG_TYPE_WARNING:
      return "warning";
    case POLICY_DIALOG_TYPE_ERROR:
      return "error";
    case POLICY_DIALOG_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

PolicyDialogType ParsePolicyDialogType(base::StringPiece enum_string) {
  if (enum_string == "warning")
    return POLICY_DIALOG_TYPE_WARNING;
  if (enum_string == "error")
    return POLICY_DIALOG_TYPE_ERROR;
  return POLICY_DIALOG_TYPE_NONE;
}

std::u16string GetPolicyDialogTypeParseError(base::StringPiece enum_string) {
  return u"expected \"warning\" or \"error\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(RecentDateBucket enum_param) {
  switch (enum_param) {
    case RECENT_DATE_BUCKET_TODAY:
      return "today";
    case RECENT_DATE_BUCKET_YESTERDAY:
      return "yesterday";
    case RECENT_DATE_BUCKET_EARLIER_THIS_WEEK:
      return "earlier_this_week";
    case RECENT_DATE_BUCKET_EARLIER_THIS_MONTH:
      return "earlier_this_month";
    case RECENT_DATE_BUCKET_EARLIER_THIS_YEAR:
      return "earlier_this_year";
    case RECENT_DATE_BUCKET_OLDER:
      return "older";
    case RECENT_DATE_BUCKET_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

RecentDateBucket ParseRecentDateBucket(base::StringPiece enum_string) {
  if (enum_string == "today")
    return RECENT_DATE_BUCKET_TODAY;
  if (enum_string == "yesterday")
    return RECENT_DATE_BUCKET_YESTERDAY;
  if (enum_string == "earlier_this_week")
    return RECENT_DATE_BUCKET_EARLIER_THIS_WEEK;
  if (enum_string == "earlier_this_month")
    return RECENT_DATE_BUCKET_EARLIER_THIS_MONTH;
  if (enum_string == "earlier_this_year")
    return RECENT_DATE_BUCKET_EARLIER_THIS_YEAR;
  if (enum_string == "older")
    return RECENT_DATE_BUCKET_OLDER;
  return RECENT_DATE_BUCKET_NONE;
}

std::u16string GetRecentDateBucketParseError(base::StringPiece enum_string) {
  return u"expected \"today\" or \"yesterday\" or \"earlier_this_week\" or \"earlier_this_month\" or \"earlier_this_year\" or \"older\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(VmType enum_param) {
  switch (enum_param) {
    case VM_TYPE_TERMINA:
      return "termina";
    case VM_TYPE_PLUGIN_VM:
      return "plugin_vm";
    case VM_TYPE_BOREALIS:
      return "borealis";
    case VM_TYPE_BRUSCHETTA:
      return "bruschetta";
    case VM_TYPE_ARCVM:
      return "arcvm";
    case VM_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

VmType ParseVmType(base::StringPiece enum_string) {
  if (enum_string == "termina")
    return VM_TYPE_TERMINA;
  if (enum_string == "plugin_vm")
    return VM_TYPE_PLUGIN_VM;
  if (enum_string == "borealis")
    return VM_TYPE_BOREALIS;
  if (enum_string == "bruschetta")
    return VM_TYPE_BRUSCHETTA;
  if (enum_string == "arcvm")
    return VM_TYPE_ARCVM;
  return VM_TYPE_NONE;
}

std::u16string GetVmTypeParseError(base::StringPiece enum_string) {
  return u"expected \"termina\" or \"plugin_vm\" or \"borealis\" or \"bruschetta\" or \"arcvm\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(UserType enum_param) {
  switch (enum_param) {
    case USER_TYPE_UNMANAGED:
      return "unmanaged";
    case USER_TYPE_ORGANIZATION:
      return "organization";
    case USER_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

UserType ParseUserType(base::StringPiece enum_string) {
  if (enum_string == "unmanaged")
    return USER_TYPE_UNMANAGED;
  if (enum_string == "organization")
    return USER_TYPE_ORGANIZATION;
  return USER_TYPE_NONE;
}

std::u16string GetUserTypeParseError(base::StringPiece enum_string) {
  return u"expected \"unmanaged\" or \"organization\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DlpLevel enum_param) {
  switch (enum_param) {
    case DLP_LEVEL_REPORT:
      return "report";
    case DLP_LEVEL_WARN:
      return "warn";
    case DLP_LEVEL_BLOCK:
      return "block";
    case DLP_LEVEL_ALLOW:
      return "allow";
    case DLP_LEVEL_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

DlpLevel ParseDlpLevel(base::StringPiece enum_string) {
  if (enum_string == "report")
    return DLP_LEVEL_REPORT;
  if (enum_string == "warn")
    return DLP_LEVEL_WARN;
  if (enum_string == "block")
    return DLP_LEVEL_BLOCK;
  if (enum_string == "allow")
    return DLP_LEVEL_ALLOW;
  return DLP_LEVEL_NONE;
}

std::u16string GetDlpLevelParseError(base::StringPiece enum_string) {
  return u"expected \"report\" or \"warn\" or \"block\" or \"allow\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SyncStatus enum_param) {
  switch (enum_param) {
    case SYNC_STATUS_NOT_FOUND:
      return "not_found";
    case SYNC_STATUS_QUEUED:
      return "queued";
    case SYNC_STATUS_IN_PROGRESS:
      return "in_progress";
    case SYNC_STATUS_COMPLETED:
      return "completed";
    case SYNC_STATUS_ERROR:
      return "error";
    case SYNC_STATUS_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

SyncStatus ParseSyncStatus(base::StringPiece enum_string) {
  if (enum_string == "not_found")
    return SYNC_STATUS_NOT_FOUND;
  if (enum_string == "queued")
    return SYNC_STATUS_QUEUED;
  if (enum_string == "in_progress")
    return SYNC_STATUS_IN_PROGRESS;
  if (enum_string == "completed")
    return SYNC_STATUS_COMPLETED;
  if (enum_string == "error")
    return SYNC_STATUS_ERROR;
  return SYNC_STATUS_NONE;
}

std::u16string GetSyncStatusParseError(base::StringPiece enum_string) {
  return u"expected \"not_found\" or \"queued\" or \"in_progress\" or \"completed\" or \"error\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(PolicyDefaultHandlerStatus enum_param) {
  switch (enum_param) {
    case POLICY_DEFAULT_HANDLER_STATUS_DEFAULT_HANDLER_ASSIGNED_BY_POLICY:
      return "default_handler_assigned_by_policy";
    case POLICY_DEFAULT_HANDLER_STATUS_INCORRECT_ASSIGNMENT:
      return "incorrect_assignment";
    case POLICY_DEFAULT_HANDLER_STATUS_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

PolicyDefaultHandlerStatus ParsePolicyDefaultHandlerStatus(base::StringPiece enum_string) {
  if (enum_string == "default_handler_assigned_by_policy")
    return POLICY_DEFAULT_HANDLER_STATUS_DEFAULT_HANDLER_ASSIGNED_BY_POLICY;
  if (enum_string == "incorrect_assignment")
    return POLICY_DEFAULT_HANDLER_STATUS_INCORRECT_ASSIGNMENT;
  return POLICY_DEFAULT_HANDLER_STATUS_NONE;
}

std::u16string GetPolicyDefaultHandlerStatusParseError(base::StringPiece enum_string) {
  return u"expected \"default_handler_assigned_by_policy\" or \"incorrect_assignment\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(BulkPinStage enum_param) {
  switch (enum_param) {
    case BULK_PIN_STAGE_STOPPED:
      return "stopped";
    case BULK_PIN_STAGE_PAUSED_OFFLINE:
      return "paused_offline";
    case BULK_PIN_STAGE_PAUSED_BATTERY_SAVER:
      return "paused_battery_saver";
    case BULK_PIN_STAGE_GETTING_FREE_SPACE:
      return "getting_free_space";
    case BULK_PIN_STAGE_LISTING_FILES:
      return "listing_files";
    case BULK_PIN_STAGE_SYNCING:
      return "syncing";
    case BULK_PIN_STAGE_SUCCESS:
      return "success";
    case BULK_PIN_STAGE_NOT_ENOUGH_SPACE:
      return "not_enough_space";
    case BULK_PIN_STAGE_CANNOT_GET_FREE_SPACE:
      return "cannot_get_free_space";
    case BULK_PIN_STAGE_CANNOT_LIST_FILES:
      return "cannot_list_files";
    case BULK_PIN_STAGE_CANNOT_ENABLE_DOCS_OFFLINE:
      return "cannot_enable_docs_offline";
    case BULK_PIN_STAGE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

BulkPinStage ParseBulkPinStage(base::StringPiece enum_string) {
  if (enum_string == "stopped")
    return BULK_PIN_STAGE_STOPPED;
  if (enum_string == "paused_offline")
    return BULK_PIN_STAGE_PAUSED_OFFLINE;
  if (enum_string == "paused_battery_saver")
    return BULK_PIN_STAGE_PAUSED_BATTERY_SAVER;
  if (enum_string == "getting_free_space")
    return BULK_PIN_STAGE_GETTING_FREE_SPACE;
  if (enum_string == "listing_files")
    return BULK_PIN_STAGE_LISTING_FILES;
  if (enum_string == "syncing")
    return BULK_PIN_STAGE_SYNCING;
  if (enum_string == "success")
    return BULK_PIN_STAGE_SUCCESS;
  if (enum_string == "not_enough_space")
    return BULK_PIN_STAGE_NOT_ENOUGH_SPACE;
  if (enum_string == "cannot_get_free_space")
    return BULK_PIN_STAGE_CANNOT_GET_FREE_SPACE;
  if (enum_string == "cannot_list_files")
    return BULK_PIN_STAGE_CANNOT_LIST_FILES;
  if (enum_string == "cannot_enable_docs_offline")
    return BULK_PIN_STAGE_CANNOT_ENABLE_DOCS_OFFLINE;
  return BULK_PIN_STAGE_NONE;
}

std::u16string GetBulkPinStageParseError(base::StringPiece enum_string) {
  return u"expected \"stopped\" or \"paused_offline\" or \"paused_battery_saver\" or \"getting_free_space\" or \"listing_files\" or \"syncing\" or \"success\" or \"not_enough_space\" or \"cannot_get_free_space\" or \"cannot_list_files\" or \"cannot_enable_docs_offline\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


FileTaskDescriptor::FileTaskDescriptor()
 {}

FileTaskDescriptor::~FileTaskDescriptor() = default;
FileTaskDescriptor::FileTaskDescriptor(FileTaskDescriptor&& rhs) = default;
FileTaskDescriptor& FileTaskDescriptor::operator=(FileTaskDescriptor&& rhs) = default;
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
std::unique_ptr<FileTaskDescriptor> FileTaskDescriptor::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<FileTaskDescriptor>();
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
absl::optional<FileTaskDescriptor> FileTaskDescriptor::FromValue(const base::Value::Dict& value) {
  FileTaskDescriptor out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<FileTaskDescriptor> FileTaskDescriptor::FromValue(const base::Value& value) {
  FileTaskDescriptor out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
FileTask::FileTask(FileTask&& rhs) = default;
FileTask& FileTask::operator=(FileTask&& rhs) = default;
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
        out.icon_url = absl::nullopt;
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
        out.is_default = absl::nullopt;
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
        out.is_generic_file_handler = absl::nullopt;
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
        out.is_dlp_blocked = absl::nullopt;
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
std::unique_ptr<FileTask> FileTask::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<FileTask>();
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
absl::optional<FileTask> FileTask::FromValue(const base::Value::Dict& value) {
  FileTask out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<FileTask> FileTask::FromValue(const base::Value& value) {
  FileTask out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
ResultingTasks::ResultingTasks(ResultingTasks&& rhs) = default;
ResultingTasks& ResultingTasks::operator=(ResultingTasks&& rhs) = default;
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
std::unique_ptr<ResultingTasks> ResultingTasks::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ResultingTasks>();
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
absl::optional<ResultingTasks> ResultingTasks::FromValue(const base::Value::Dict& value) {
  ResultingTasks out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ResultingTasks> ResultingTasks::FromValue(const base::Value& value) {
  ResultingTasks out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
EntryProperties::EntryProperties(EntryProperties&& rhs) = default;
EntryProperties& EntryProperties::operator=(EntryProperties&& rhs) = default;
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
        out.size = absl::nullopt;
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
        out.modification_time = absl::nullopt;
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
        out.modification_by_me_time = absl::nullopt;
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
        out.thumbnail_url = absl::nullopt;
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
        out.cropped_thumbnail_url = absl::nullopt;
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
        out.image_width = absl::nullopt;
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
        out.image_height = absl::nullopt;
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
        out.image_rotation = absl::nullopt;
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
        out.pinned = absl::nullopt;
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
        out.present = absl::nullopt;
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
        out.hosted = absl::nullopt;
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
        out.available_offline = absl::nullopt;
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
        out.available_when_metered = absl::nullopt;
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
        out.dirty = absl::nullopt;
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
        out.custom_icon_url = absl::nullopt;
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
        out.content_mime_type = absl::nullopt;
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
        out.shared_with_me = absl::nullopt;
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
        out.shared = absl::nullopt;
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
        out.starred = absl::nullopt;
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
        out.external_file_url = absl::nullopt;
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
        out.alternate_url = absl::nullopt;
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
        out.share_url = absl::nullopt;
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
        out.can_copy = absl::nullopt;
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
        out.can_delete = absl::nullopt;
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
        out.can_rename = absl::nullopt;
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
        out.can_add_children = absl::nullopt;
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
        out.can_share = absl::nullopt;
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
        out.can_pin = absl::nullopt;
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
        out.is_machine_root = absl::nullopt;
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
        out.is_external_media = absl::nullopt;
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
        out.is_arbitrary_sync_folder = absl::nullopt;
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
        out.progress = absl::nullopt;
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
        out.sync_completed_time = absl::nullopt;
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
        out.shortcut = absl::nullopt;
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
std::unique_ptr<EntryProperties> EntryProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<EntryProperties>();
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
absl::optional<EntryProperties> EntryProperties::FromValue(const base::Value::Dict& value) {
  EntryProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<EntryProperties> EntryProperties::FromValue(const base::Value& value) {
  EntryProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
MountPointSizeStats::MountPointSizeStats(MountPointSizeStats&& rhs) = default;
MountPointSizeStats& MountPointSizeStats::operator=(MountPointSizeStats&& rhs) = default;
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
std::unique_ptr<MountPointSizeStats> MountPointSizeStats::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<MountPointSizeStats>();
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
absl::optional<MountPointSizeStats> MountPointSizeStats::FromValue(const base::Value::Dict& value) {
  MountPointSizeStats out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<MountPointSizeStats> MountPointSizeStats::FromValue(const base::Value& value) {
  MountPointSizeStats out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict MountPointSizeStats::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("totalSize", this->total_size);

  to_value_result.Set("remainingSize", this->remaining_size);


  return to_value_result;
}


DriveQuotaMetadata::DriveQuotaMetadata()
: user_type(),
used_bytes(0.0),
total_bytes(0.0),
organization_limit_exceeded(false) {}

DriveQuotaMetadata::~DriveQuotaMetadata() = default;
DriveQuotaMetadata::DriveQuotaMetadata(DriveQuotaMetadata&& rhs) = default;
DriveQuotaMetadata& DriveQuotaMetadata::operator=(DriveQuotaMetadata&& rhs) = default;
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
std::unique_ptr<DriveQuotaMetadata> DriveQuotaMetadata::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<DriveQuotaMetadata>();
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
absl::optional<DriveQuotaMetadata> DriveQuotaMetadata::FromValue(const base::Value::Dict& value) {
  DriveQuotaMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DriveQuotaMetadata> DriveQuotaMetadata::FromValue(const base::Value& value) {
  DriveQuotaMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
ProfileInfo::ProfileInfo(ProfileInfo&& rhs) = default;
ProfileInfo& ProfileInfo::operator=(ProfileInfo&& rhs) = default;
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
std::unique_ptr<ProfileInfo> ProfileInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ProfileInfo>();
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
absl::optional<ProfileInfo> ProfileInfo::FromValue(const base::Value::Dict& value) {
  ProfileInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ProfileInfo> ProfileInfo::FromValue(const base::Value& value) {
  ProfileInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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


IconSet::IconSet()
 {}

IconSet::~IconSet() = default;
IconSet::IconSet(IconSet&& rhs) = default;
IconSet& IconSet::operator=(IconSet&& rhs) = default;
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
        out.icon16x16_url = absl::nullopt;
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
        out.icon32x32_url = absl::nullopt;
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
std::unique_ptr<IconSet> IconSet::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<IconSet>();
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
absl::optional<IconSet> IconSet::FromValue(const base::Value::Dict& value) {
  IconSet out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<IconSet> IconSet::FromValue(const base::Value& value) {
  IconSet out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
VolumeMetadata::VolumeMetadata(VolumeMetadata&& rhs) = default;
VolumeMetadata& VolumeMetadata::operator=(VolumeMetadata&& rhs) = default;
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
        out.file_system_id = absl::nullopt;
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
        out.provider_id = absl::nullopt;
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
        out.volume_label = absl::nullopt;
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
        out.source_path = absl::nullopt;
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
        out.device_path = absl::nullopt;
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
        out.is_parent_device = absl::nullopt;
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
        out.disk_file_system_type = absl::nullopt;
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
        out.drive_label = absl::nullopt;
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
        out.remote_mount_path = absl::nullopt;
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
std::unique_ptr<VolumeMetadata> VolumeMetadata::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<VolumeMetadata>();
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
absl::optional<VolumeMetadata> VolumeMetadata::FromValue(const base::Value::Dict& value) {
  VolumeMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<VolumeMetadata> VolumeMetadata::FromValue(const base::Value& value) {
  VolumeMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
MountCompletedEvent::MountCompletedEvent(MountCompletedEvent&& rhs) = default;
MountCompletedEvent& MountCompletedEvent::operator=(MountCompletedEvent&& rhs) = default;
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
std::unique_ptr<MountCompletedEvent> MountCompletedEvent::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<MountCompletedEvent>();
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
absl::optional<MountCompletedEvent> MountCompletedEvent::FromValue(const base::Value::Dict& value) {
  MountCompletedEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<MountCompletedEvent> MountCompletedEvent::FromValue(const base::Value& value) {
  MountCompletedEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
FileTransferStatus::FileTransferStatus(FileTransferStatus&& rhs) = default;
FileTransferStatus& FileTransferStatus::operator=(FileTransferStatus&& rhs) = default;
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
std::unique_ptr<FileTransferStatus> FileTransferStatus::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<FileTransferStatus>();
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
absl::optional<FileTransferStatus> FileTransferStatus::FromValue(const base::Value::Dict& value) {
  FileTransferStatus out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<FileTransferStatus> FileTransferStatus::FromValue(const base::Value& value) {
  FileTransferStatus out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
SyncState::SyncState(SyncState&& rhs) = default;
SyncState& SyncState::operator=(SyncState&& rhs) = default;
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
std::unique_ptr<SyncState> SyncState::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<SyncState>();
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
absl::optional<SyncState> SyncState::FromValue(const base::Value::Dict& value) {
  SyncState out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<SyncState> SyncState::FromValue(const base::Value& value) {
  SyncState out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
DriveSyncErrorEvent::DriveSyncErrorEvent(DriveSyncErrorEvent&& rhs) = default;
DriveSyncErrorEvent& DriveSyncErrorEvent::operator=(DriveSyncErrorEvent&& rhs) = default;
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
        out.shared_drive = absl::nullopt;
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
std::unique_ptr<DriveSyncErrorEvent> DriveSyncErrorEvent::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<DriveSyncErrorEvent>();
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
absl::optional<DriveSyncErrorEvent> DriveSyncErrorEvent::FromValue(const base::Value::Dict& value) {
  DriveSyncErrorEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DriveSyncErrorEvent> DriveSyncErrorEvent::FromValue(const base::Value& value) {
  DriveSyncErrorEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
DriveConfirmDialogEvent::DriveConfirmDialogEvent(DriveConfirmDialogEvent&& rhs) = default;
DriveConfirmDialogEvent& DriveConfirmDialogEvent::operator=(DriveConfirmDialogEvent&& rhs) = default;
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
std::unique_ptr<DriveConfirmDialogEvent> DriveConfirmDialogEvent::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<DriveConfirmDialogEvent>();
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
absl::optional<DriveConfirmDialogEvent> DriveConfirmDialogEvent::FromValue(const base::Value::Dict& value) {
  DriveConfirmDialogEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DriveConfirmDialogEvent> DriveConfirmDialogEvent::FromValue(const base::Value& value) {
  DriveConfirmDialogEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
FileChange::FileChange(FileChange&& rhs) = default;
FileChange& FileChange::operator=(FileChange&& rhs) = default;
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
std::unique_ptr<FileChange> FileChange::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<FileChange>();
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
absl::optional<FileChange> FileChange::FromValue(const base::Value::Dict& value) {
  FileChange out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<FileChange> FileChange::FromValue(const base::Value& value) {
  FileChange out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
FileWatchEvent::Entry::Entry(Entry&& rhs) = default;
FileWatchEvent::Entry& FileWatchEvent::Entry::operator=(Entry&& rhs) = default;
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
absl::optional<FileWatchEvent::Entry> FileWatchEvent::Entry::FromValue(const base::Value::Dict& value) {
  Entry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<FileWatchEvent::Entry> FileWatchEvent::Entry::FromValue(const base::Value& value) {
  Entry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
FileWatchEvent::FileWatchEvent(FileWatchEvent&& rhs) = default;
FileWatchEvent& FileWatchEvent::operator=(FileWatchEvent&& rhs) = default;
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
std::unique_ptr<FileWatchEvent> FileWatchEvent::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<FileWatchEvent>();
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
absl::optional<FileWatchEvent> FileWatchEvent::FromValue(const base::Value::Dict& value) {
  FileWatchEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<FileWatchEvent> FileWatchEvent::FromValue(const base::Value& value) {
  FileWatchEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
GetVolumeRootOptions::GetVolumeRootOptions(GetVolumeRootOptions&& rhs) = default;
GetVolumeRootOptions& GetVolumeRootOptions::operator=(GetVolumeRootOptions&& rhs) = default;
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
        out.writable = absl::nullopt;
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
std::unique_ptr<GetVolumeRootOptions> GetVolumeRootOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<GetVolumeRootOptions>();
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
absl::optional<GetVolumeRootOptions> GetVolumeRootOptions::FromValue(const base::Value::Dict& value) {
  GetVolumeRootOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<GetVolumeRootOptions> GetVolumeRootOptions::FromValue(const base::Value& value) {
  GetVolumeRootOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
drive_fs_bulk_pinning_enabled(false) {}

Preferences::~Preferences() = default;
Preferences::Preferences(Preferences&& rhs) = default;
Preferences& Preferences::operator=(Preferences&& rhs) = default;
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
std::unique_ptr<Preferences> Preferences::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Preferences>();
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
absl::optional<Preferences> Preferences::FromValue(const base::Value::Dict& value) {
  Preferences out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Preferences> Preferences::FromValue(const base::Value& value) {
  Preferences out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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

  to_value_result.Set("driveFsBulkPinningEnabled", this->drive_fs_bulk_pinning_enabled);


  return to_value_result;
}


PreferencesChange::PreferencesChange()
 {}

PreferencesChange::~PreferencesChange() = default;
PreferencesChange::PreferencesChange(PreferencesChange&& rhs) = default;
PreferencesChange& PreferencesChange::operator=(PreferencesChange&& rhs) = default;
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
        out.drive_sync_enabled_on_metered_network = absl::nullopt;
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
        out.arc_enabled = absl::nullopt;
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
        out.arc_removable_media_access_enabled = absl::nullopt;
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
        out.drive_fs_bulk_pinning_enabled = absl::nullopt;
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
std::unique_ptr<PreferencesChange> PreferencesChange::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<PreferencesChange>();
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
absl::optional<PreferencesChange> PreferencesChange::FromValue(const base::Value::Dict& value) {
  PreferencesChange out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<PreferencesChange> PreferencesChange::FromValue(const base::Value& value) {
  PreferencesChange out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
SearchParams::SearchParams(SearchParams&& rhs) = default;
SearchParams& SearchParams::operator=(SearchParams&& rhs) = default;
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
        out.modified_timestamp = absl::nullopt;
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
std::unique_ptr<SearchParams> SearchParams::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<SearchParams>();
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
absl::optional<SearchParams> SearchParams::FromValue(const base::Value::Dict& value) {
  SearchParams out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<SearchParams> SearchParams::FromValue(const base::Value& value) {
  SearchParams out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
SearchMetadataParams::RootDir::RootDir(RootDir&& rhs) = default;
SearchMetadataParams::RootDir& SearchMetadataParams::RootDir::operator=(RootDir&& rhs) = default;
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
absl::optional<SearchMetadataParams::RootDir> SearchMetadataParams::RootDir::FromValue(const base::Value::Dict& value) {
  RootDir out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<SearchMetadataParams::RootDir> SearchMetadataParams::RootDir::FromValue(const base::Value& value) {
  RootDir out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
SearchMetadataParams::SearchMetadataParams(SearchMetadataParams&& rhs) = default;
SearchMetadataParams& SearchMetadataParams::operator=(SearchMetadataParams&& rhs) = default;
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
        out.modified_timestamp = absl::nullopt;
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
std::unique_ptr<SearchMetadataParams> SearchMetadataParams::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<SearchMetadataParams>();
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
absl::optional<SearchMetadataParams> SearchMetadataParams::FromValue(const base::Value::Dict& value) {
  SearchMetadataParams out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<SearchMetadataParams> SearchMetadataParams::FromValue(const base::Value& value) {
  SearchMetadataParams out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
DriveMetadataSearchResult::Entry::Entry(Entry&& rhs) = default;
DriveMetadataSearchResult::Entry& DriveMetadataSearchResult::Entry::operator=(Entry&& rhs) = default;
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
absl::optional<DriveMetadataSearchResult::Entry> DriveMetadataSearchResult::Entry::FromValue(const base::Value::Dict& value) {
  Entry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DriveMetadataSearchResult::Entry> DriveMetadataSearchResult::Entry::FromValue(const base::Value& value) {
  Entry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
DriveMetadataSearchResult::DriveMetadataSearchResult(DriveMetadataSearchResult&& rhs) = default;
DriveMetadataSearchResult& DriveMetadataSearchResult::operator=(DriveMetadataSearchResult&& rhs) = default;
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
        out.available_offline = absl::nullopt;
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
std::unique_ptr<DriveMetadataSearchResult> DriveMetadataSearchResult::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<DriveMetadataSearchResult>();
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
absl::optional<DriveMetadataSearchResult> DriveMetadataSearchResult::FromValue(const base::Value::Dict& value) {
  DriveMetadataSearchResult out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DriveMetadataSearchResult> DriveMetadataSearchResult::FromValue(const base::Value& value) {
  DriveMetadataSearchResult out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
DriveConnectionState::DriveConnectionState(DriveConnectionState&& rhs) = default;
DriveConnectionState& DriveConnectionState::operator=(DriveConnectionState&& rhs) = default;
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
std::unique_ptr<DriveConnectionState> DriveConnectionState::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<DriveConnectionState>();
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
absl::optional<DriveConnectionState> DriveConnectionState::FromValue(const base::Value::Dict& value) {
  DriveConnectionState out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DriveConnectionState> DriveConnectionState::FromValue(const base::Value& value) {
  DriveConnectionState out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
DeviceEvent::DeviceEvent(DeviceEvent&& rhs) = default;
DeviceEvent& DeviceEvent::operator=(DeviceEvent&& rhs) = default;
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
std::unique_ptr<DeviceEvent> DeviceEvent::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<DeviceEvent>();
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
absl::optional<DeviceEvent> DeviceEvent::FromValue(const base::Value::Dict& value) {
  DeviceEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DeviceEvent> DeviceEvent::FromValue(const base::Value& value) {
  DeviceEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
Provider::Provider(Provider&& rhs) = default;
Provider& Provider::operator=(Provider&& rhs) = default;
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
std::unique_ptr<Provider> Provider::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Provider>();
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
absl::optional<Provider> Provider::FromValue(const base::Value::Dict& value) {
  Provider out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Provider> Provider::FromValue(const base::Value& value) {
  Provider out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
FileSystemProviderAction::FileSystemProviderAction(FileSystemProviderAction&& rhs) = default;
FileSystemProviderAction& FileSystemProviderAction::operator=(FileSystemProviderAction&& rhs) = default;
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
        out.title = absl::nullopt;
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
std::unique_ptr<FileSystemProviderAction> FileSystemProviderAction::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<FileSystemProviderAction>();
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
absl::optional<FileSystemProviderAction> FileSystemProviderAction::FromValue(const base::Value::Dict& value) {
  FileSystemProviderAction out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<FileSystemProviderAction> FileSystemProviderAction::FromValue(const base::Value& value) {
  FileSystemProviderAction out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
LinuxPackageInfo::LinuxPackageInfo(LinuxPackageInfo&& rhs) = default;
LinuxPackageInfo& LinuxPackageInfo::operator=(LinuxPackageInfo&& rhs) = default;
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
        out.summary = absl::nullopt;
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
        out.description = absl::nullopt;
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
std::unique_ptr<LinuxPackageInfo> LinuxPackageInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<LinuxPackageInfo>();
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
absl::optional<LinuxPackageInfo> LinuxPackageInfo::FromValue(const base::Value::Dict& value) {
  LinuxPackageInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<LinuxPackageInfo> LinuxPackageInfo::FromValue(const base::Value& value) {
  LinuxPackageInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
CrostiniEvent::EntriesType::EntriesType(EntriesType&& rhs) = default;
CrostiniEvent::EntriesType& CrostiniEvent::EntriesType::operator=(EntriesType&& rhs) = default;
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
absl::optional<CrostiniEvent::EntriesType> CrostiniEvent::EntriesType::FromValue(const base::Value::Dict& value) {
  EntriesType out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CrostiniEvent::EntriesType> CrostiniEvent::EntriesType::FromValue(const base::Value& value) {
  EntriesType out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
CrostiniEvent::CrostiniEvent(CrostiniEvent&& rhs) = default;
CrostiniEvent& CrostiniEvent::operator=(CrostiniEvent&& rhs) = default;
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
std::unique_ptr<CrostiniEvent> CrostiniEvent::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<CrostiniEvent>();
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
absl::optional<CrostiniEvent> CrostiniEvent::FromValue(const base::Value::Dict& value) {
  CrostiniEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CrostiniEvent> CrostiniEvent::FromValue(const base::Value& value) {
  CrostiniEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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


AndroidApp::AndroidApp()
 {}

AndroidApp::~AndroidApp() = default;
AndroidApp::AndroidApp(AndroidApp&& rhs) = default;
AndroidApp& AndroidApp::operator=(AndroidApp&& rhs) = default;
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
std::unique_ptr<AndroidApp> AndroidApp::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<AndroidApp>();
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
absl::optional<AndroidApp> AndroidApp::FromValue(const base::Value::Dict& value) {
  AndroidApp out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<AndroidApp> AndroidApp::FromValue(const base::Value& value) {
  AndroidApp out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
StreamInfo::Tags::Tags(Tags&& rhs) = default;
StreamInfo::Tags& StreamInfo::Tags::operator=(Tags&& rhs) = default;
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
absl::optional<StreamInfo::Tags> StreamInfo::Tags::FromValue(const base::Value::Dict& value) {
  Tags out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<StreamInfo::Tags> StreamInfo::Tags::FromValue(const base::Value& value) {
  Tags out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
StreamInfo::StreamInfo(StreamInfo&& rhs) = default;
StreamInfo& StreamInfo::operator=(StreamInfo&& rhs) = default;
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
std::unique_ptr<StreamInfo> StreamInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<StreamInfo>();
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
absl::optional<StreamInfo> StreamInfo::FromValue(const base::Value::Dict& value) {
  StreamInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<StreamInfo> StreamInfo::FromValue(const base::Value& value) {
  StreamInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
AttachedImages::AttachedImages(AttachedImages&& rhs) = default;
AttachedImages& AttachedImages::operator=(AttachedImages&& rhs) = default;
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
std::unique_ptr<AttachedImages> AttachedImages::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<AttachedImages>();
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
absl::optional<AttachedImages> AttachedImages::FromValue(const base::Value::Dict& value) {
  AttachedImages out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<AttachedImages> AttachedImages::FromValue(const base::Value& value) {
  AttachedImages out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
MediaMetadata::MediaMetadata(MediaMetadata&& rhs) = default;
MediaMetadata& MediaMetadata::operator=(MediaMetadata&& rhs) = default;
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
        out.height = absl::nullopt;
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
        out.width = absl::nullopt;
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
        out.duration = absl::nullopt;
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
        out.rotation = absl::nullopt;
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
        out.album = absl::nullopt;
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
        out.artist = absl::nullopt;
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
        out.comment = absl::nullopt;
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
        out.copyright = absl::nullopt;
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
        out.disc = absl::nullopt;
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
        out.genre = absl::nullopt;
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
        out.language = absl::nullopt;
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
        out.title = absl::nullopt;
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
        out.track = absl::nullopt;
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
std::unique_ptr<MediaMetadata> MediaMetadata::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<MediaMetadata>();
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
absl::optional<MediaMetadata> MediaMetadata::FromValue(const base::Value::Dict& value) {
  MediaMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<MediaMetadata> MediaMetadata::FromValue(const base::Value& value) {
  MediaMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
HoldingSpaceState::HoldingSpaceState(HoldingSpaceState&& rhs) = default;
HoldingSpaceState& HoldingSpaceState::operator=(HoldingSpaceState&& rhs) = default;
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
std::unique_ptr<HoldingSpaceState> HoldingSpaceState::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<HoldingSpaceState>();
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
absl::optional<HoldingSpaceState> HoldingSpaceState::FromValue(const base::Value::Dict& value) {
  HoldingSpaceState out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<HoldingSpaceState> HoldingSpaceState::FromValue(const base::Value& value) {
  HoldingSpaceState out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
OpenWindowParams::OpenWindowParams(OpenWindowParams&& rhs) = default;
OpenWindowParams& OpenWindowParams::operator=(OpenWindowParams&& rhs) = default;
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
        out.current_directory_url = absl::nullopt;
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
        out.selection_url = absl::nullopt;
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
std::unique_ptr<OpenWindowParams> OpenWindowParams::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<OpenWindowParams>();
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
absl::optional<OpenWindowParams> OpenWindowParams::FromValue(const base::Value::Dict& value) {
  OpenWindowParams out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<OpenWindowParams> OpenWindowParams::FromValue(const base::Value& value) {
  OpenWindowParams out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
IOTaskParams::DestinationFolder::DestinationFolder(DestinationFolder&& rhs) = default;
IOTaskParams::DestinationFolder& IOTaskParams::DestinationFolder::operator=(DestinationFolder&& rhs) = default;
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
absl::optional<IOTaskParams::DestinationFolder> IOTaskParams::DestinationFolder::FromValue(const base::Value::Dict& value) {
  DestinationFolder out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<IOTaskParams::DestinationFolder> IOTaskParams::DestinationFolder::FromValue(const base::Value& value) {
  DestinationFolder out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
IOTaskParams::IOTaskParams(IOTaskParams&& rhs) = default;
IOTaskParams& IOTaskParams::operator=(IOTaskParams&& rhs) = default;
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
        out.password = absl::nullopt;
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
        out.show_notification = absl::nullopt;
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
std::unique_ptr<IOTaskParams> IOTaskParams::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<IOTaskParams>();
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
absl::optional<IOTaskParams> IOTaskParams::FromValue(const base::Value::Dict& value) {
  IOTaskParams out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<IOTaskParams> IOTaskParams::FromValue(const base::Value& value) {
  IOTaskParams out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
PolicyError::PolicyError(PolicyError&& rhs) = default;
PolicyError& PolicyError::operator=(PolicyError&& rhs) = default;
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
std::unique_ptr<PolicyError> PolicyError::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<PolicyError>();
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
absl::optional<PolicyError> PolicyError::FromValue(const base::Value::Dict& value) {
  PolicyError out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<PolicyError> PolicyError::FromValue(const base::Value& value) {
  PolicyError out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
ConflictPauseParams::ConflictPauseParams(ConflictPauseParams&& rhs) = default;
ConflictPauseParams& ConflictPauseParams::operator=(ConflictPauseParams&& rhs) = default;
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
        out.conflict_name = absl::nullopt;
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
        out.conflict_is_directory = absl::nullopt;
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
        out.conflict_multiple = absl::nullopt;
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
        out.conflict_target_url = absl::nullopt;
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
std::unique_ptr<ConflictPauseParams> ConflictPauseParams::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ConflictPauseParams>();
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
absl::optional<ConflictPauseParams> ConflictPauseParams::FromValue(const base::Value::Dict& value) {
  ConflictPauseParams out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ConflictPauseParams> ConflictPauseParams::FromValue(const base::Value& value) {
  ConflictPauseParams out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
PolicyPauseParams::PolicyPauseParams(PolicyPauseParams&& rhs) = default;
PolicyPauseParams& PolicyPauseParams::operator=(PolicyPauseParams&& rhs) = default;
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
std::unique_ptr<PolicyPauseParams> PolicyPauseParams::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<PolicyPauseParams>();
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
absl::optional<PolicyPauseParams> PolicyPauseParams::FromValue(const base::Value::Dict& value) {
  PolicyPauseParams out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<PolicyPauseParams> PolicyPauseParams::FromValue(const base::Value& value) {
  PolicyPauseParams out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
PauseParams::PauseParams(PauseParams&& rhs) = default;
PauseParams& PauseParams::operator=(PauseParams&& rhs) = default;
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
std::unique_ptr<PauseParams> PauseParams::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<PauseParams>();
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
absl::optional<PauseParams> PauseParams::FromValue(const base::Value::Dict& value) {
  PauseParams out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<PauseParams> PauseParams::FromValue(const base::Value& value) {
  PauseParams out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
ConflictResumeParams::ConflictResumeParams(ConflictResumeParams&& rhs) = default;
ConflictResumeParams& ConflictResumeParams::operator=(ConflictResumeParams&& rhs) = default;
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
        out.conflict_resolve = absl::nullopt;
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
        out.conflict_apply_to_all = absl::nullopt;
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
std::unique_ptr<ConflictResumeParams> ConflictResumeParams::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ConflictResumeParams>();
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
absl::optional<ConflictResumeParams> ConflictResumeParams::FromValue(const base::Value::Dict& value) {
  ConflictResumeParams out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ConflictResumeParams> ConflictResumeParams::FromValue(const base::Value& value) {
  ConflictResumeParams out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
PolicyResumeParams::PolicyResumeParams(PolicyResumeParams&& rhs) = default;
PolicyResumeParams& PolicyResumeParams::operator=(PolicyResumeParams&& rhs) = default;
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
std::unique_ptr<PolicyResumeParams> PolicyResumeParams::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<PolicyResumeParams>();
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
absl::optional<PolicyResumeParams> PolicyResumeParams::FromValue(const base::Value::Dict& value) {
  PolicyResumeParams out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<PolicyResumeParams> PolicyResumeParams::FromValue(const base::Value& value) {
  PolicyResumeParams out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
ResumeParams::ResumeParams(ResumeParams&& rhs) = default;
ResumeParams& ResumeParams::operator=(ResumeParams&& rhs) = default;
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
std::unique_ptr<ResumeParams> ResumeParams::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ResumeParams>();
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
absl::optional<ResumeParams> ResumeParams::FromValue(const base::Value::Dict& value) {
  ResumeParams out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ResumeParams> ResumeParams::FromValue(const base::Value& value) {
  ResumeParams out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
ProgressStatus::OutputsType::OutputsType(OutputsType&& rhs) = default;
ProgressStatus::OutputsType& ProgressStatus::OutputsType::operator=(OutputsType&& rhs) = default;
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
absl::optional<ProgressStatus::OutputsType> ProgressStatus::OutputsType::FromValue(const base::Value::Dict& value) {
  OutputsType out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ProgressStatus::OutputsType> ProgressStatus::OutputsType::FromValue(const base::Value& value) {
  OutputsType out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
ProgressStatus::ProgressStatus(ProgressStatus&& rhs) = default;
ProgressStatus& ProgressStatus::operator=(ProgressStatus&& rhs) = default;
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
std::unique_ptr<ProgressStatus> ProgressStatus::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ProgressStatus>();
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
absl::optional<ProgressStatus> ProgressStatus::FromValue(const base::Value::Dict& value) {
  ProgressStatus out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ProgressStatus> ProgressStatus::FromValue(const base::Value& value) {
  ProgressStatus out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
  to_value_result.Set("destinationVolumeId", this->destination_volume_id);


  return to_value_result;
}


DlpMetadata::DlpMetadata()
: is_dlp_restricted(false),
is_restricted_for_destination(false) {}

DlpMetadata::~DlpMetadata() = default;
DlpMetadata::DlpMetadata(DlpMetadata&& rhs) = default;
DlpMetadata& DlpMetadata::operator=(DlpMetadata&& rhs) = default;
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
std::unique_ptr<DlpMetadata> DlpMetadata::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<DlpMetadata>();
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
absl::optional<DlpMetadata> DlpMetadata::FromValue(const base::Value::Dict& value) {
  DlpMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DlpMetadata> DlpMetadata::FromValue(const base::Value& value) {
  DlpMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
DlpRestrictionDetails::DlpRestrictionDetails(DlpRestrictionDetails&& rhs) = default;
DlpRestrictionDetails& DlpRestrictionDetails::operator=(DlpRestrictionDetails&& rhs) = default;
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
std::unique_ptr<DlpRestrictionDetails> DlpRestrictionDetails::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<DlpRestrictionDetails>();
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
absl::optional<DlpRestrictionDetails> DlpRestrictionDetails::FromValue(const base::Value::Dict& value) {
  DlpRestrictionDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DlpRestrictionDetails> DlpRestrictionDetails::FromValue(const base::Value& value) {
  DlpRestrictionDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
DialogCallerInformation::DialogCallerInformation(DialogCallerInformation&& rhs) = default;
DialogCallerInformation& DialogCallerInformation::operator=(DialogCallerInformation&& rhs) = default;
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
        out.url = absl::nullopt;
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
std::unique_ptr<DialogCallerInformation> DialogCallerInformation::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<DialogCallerInformation>();
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
absl::optional<DialogCallerInformation> DialogCallerInformation::FromValue(const base::Value::Dict& value) {
  DialogCallerInformation out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DialogCallerInformation> DialogCallerInformation::FromValue(const base::Value& value) {
  DialogCallerInformation out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
MountableGuest::MountableGuest(MountableGuest&& rhs) = default;
MountableGuest& MountableGuest::operator=(MountableGuest&& rhs) = default;
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
std::unique_ptr<MountableGuest> MountableGuest::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<MountableGuest>();
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
absl::optional<MountableGuest> MountableGuest::FromValue(const base::Value::Dict& value) {
  MountableGuest out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<MountableGuest> MountableGuest::FromValue(const base::Value& value) {
  MountableGuest out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
ParsedTrashInfoFile::RestoreEntry::RestoreEntry(RestoreEntry&& rhs) = default;
ParsedTrashInfoFile::RestoreEntry& ParsedTrashInfoFile::RestoreEntry::operator=(RestoreEntry&& rhs) = default;
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
absl::optional<ParsedTrashInfoFile::RestoreEntry> ParsedTrashInfoFile::RestoreEntry::FromValue(const base::Value::Dict& value) {
  RestoreEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ParsedTrashInfoFile::RestoreEntry> ParsedTrashInfoFile::RestoreEntry::FromValue(const base::Value& value) {
  RestoreEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
ParsedTrashInfoFile::ParsedTrashInfoFile(ParsedTrashInfoFile&& rhs) = default;
ParsedTrashInfoFile& ParsedTrashInfoFile::operator=(ParsedTrashInfoFile&& rhs) = default;
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
std::unique_ptr<ParsedTrashInfoFile> ParsedTrashInfoFile::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ParsedTrashInfoFile>();
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
absl::optional<ParsedTrashInfoFile> ParsedTrashInfoFile::FromValue(const base::Value::Dict& value) {
  ParsedTrashInfoFile out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ParsedTrashInfoFile> ParsedTrashInfoFile::FromValue(const base::Value& value) {
  ParsedTrashInfoFile out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
BulkPinProgress::BulkPinProgress(BulkPinProgress&& rhs) = default;
BulkPinProgress& BulkPinProgress::operator=(BulkPinProgress&& rhs) = default;
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
std::unique_ptr<BulkPinProgress> BulkPinProgress::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<BulkPinProgress>();
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
absl::optional<BulkPinProgress> BulkPinProgress::FromValue(const base::Value::Dict& value) {
  BulkPinProgress out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<BulkPinProgress> BulkPinProgress::FromValue(const base::Value& value) {
  BulkPinProgress out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
Results::Result::Result(Result&& rhs) = default;
Results::Result& Results::Result::operator=(Result&& rhs) = default;
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
    const base::Value& entry_urls_value = args[0];
    {
      if (!entry_urls_value.is_list()) {
        return absl::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(entry_urls_value.GetList(), params.entry_urls)) {
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


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace GrantAccess

namespace SelectFiles {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& selected_paths_value = args[0];
    {
      if (!selected_paths_value.is_list()) {
        return absl::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(selected_paths_value.GetList(), params.selected_paths)) {
          return absl::nullopt;
        }
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& should_return_local_path_value = args[1];
    {
      auto temp = should_return_local_path_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.should_return_local_path = *temp;
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
}  // namespace SelectFiles

namespace SelectFile {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 4) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& selected_path_value = args[0];
    {
      auto* temp = selected_path_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.selected_path = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& index_value = args[1];
    {
      auto temp = index_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.index = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& for_opening_value = args[2];
    {
      auto temp = for_opening_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.for_opening = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (3 < args.size() &&
      !args[3].is_none()) {
    const base::Value& should_return_local_path_value = args[3];
    {
      auto temp = should_return_local_path_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.should_return_local_path = *temp;
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
}  // namespace SelectFile

namespace AddMount {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& file_url_value = args[0];
    {
      auto* temp = file_url_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.file_url = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& password_value = args[1];
    {
      auto* temp = password_value.GetIfString();
      if (!temp) {
        params.password = absl::nullopt;
        return absl::nullopt;
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
    const base::Value& file_url_value = args[0];
    {
      auto* temp = file_url_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.file_url = *temp;
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
}  // namespace CancelMounting

namespace RemoveMount {

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
    const base::Value& volume_id_value = args[0];
    {
      auto* temp = volume_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.volume_id = *temp;
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
    const base::Value& source_url_value = args[0];
    {
      auto* temp = source_url_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.source_url = *temp;
    }
  }
  else {
    return absl::nullopt;
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
    const base::Value& source_url_value = args[0];
    {
      auto* temp = source_url_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.source_url = *temp;
    }
  }
  else {
    return absl::nullopt;
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
    const base::Value& volume_id_value = args[0];
    {
      auto* temp = volume_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.volume_id = *temp;
    }
  }
  else {
    return absl::nullopt;
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
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 3) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& volume_id_value = args[0];
    {
      auto* temp = volume_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.volume_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& filesystem_value = args[1];
    {
      const std::string* format_file_system_type_as_string = filesystem_value.GetIfString();
      if (!format_file_system_type_as_string) {
        return absl::nullopt;
      }
      params.filesystem = ParseFormatFileSystemType(*format_file_system_type_as_string);
      if (params.filesystem == FormatFileSystemType()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& volume_label_value = args[2];
    {
      auto* temp = volume_label_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.volume_label = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace FormatVolume

namespace SinglePartitionFormat {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 3) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& device_storage_path_value = args[0];
    {
      auto* temp = device_storage_path_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.device_storage_path = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& filesystem_value = args[1];
    {
      const std::string* format_file_system_type_as_string = filesystem_value.GetIfString();
      if (!format_file_system_type_as_string) {
        return absl::nullopt;
      }
      params.filesystem = ParseFormatFileSystemType(*format_file_system_type_as_string);
      if (params.filesystem == FormatFileSystemType()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& volume_label_value = args[2];
    {
      auto* temp = volume_label_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.volume_label = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SinglePartitionFormat

namespace RenameVolume {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& volume_id_value = args[0];
    {
      auto* temp = volume_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.volume_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& new_name_value = args[1];
    {
      auto* temp = new_name_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.new_name = *temp;
    }
  }
  else {
    return absl::nullopt;
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
    const base::Value& change_info_value = args[0];
    {
      if (!change_info_value.is_dict()) {
        return absl::nullopt;
      }
      if (!PreferencesChange::Populate(change_info_value.GetDict(), params.change_info)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SetPreferences

namespace SearchDrive {

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
    const base::Value& search_params_value = args[0];
    {
      if (!search_params_value.is_dict()) {
        return absl::nullopt;
      }
      if (!SearchParams::Populate(search_params_value.GetDict(), params.search_params)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


Results::EntriesType::EntriesType()
 {}

Results::EntriesType::~EntriesType() = default;
Results::EntriesType::EntriesType(EntriesType&& rhs) = default;
Results::EntriesType& Results::EntriesType::operator=(EntriesType&& rhs) = default;
base::Value::Dict Results::EntriesType::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



base::Value::List Results::Create(const std::vector<EntriesType>& entries, const std::string& next_feed) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(entries));

  create_results.Append(next_feed);

  return create_results;
}
}  // namespace SearchDrive

namespace SearchDriveMetadata {

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
    const base::Value& search_params_value = args[0];
    {
      if (!search_params_value.is_dict()) {
        return absl::nullopt;
      }
      if (!SearchMetadataParams::Populate(search_params_value.GetDict(), params.search_params)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
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
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& volume_id_value = args[0];
    {
      auto* temp = volume_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.volume_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& hash_list_value = args[1];
    {
      if (!hash_list_value.is_list()) {
        return absl::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(hash_list_value.GetList(), params.hash_list)) {
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


Results::Paths::Paths()
 {}

Results::Paths::~Paths() = default;
Results::Paths::Paths(Paths&& rhs) = default;
Results::Paths& Results::Paths::operator=(Paths&& rhs) = default;
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
    const base::Value& operation_value = args[0];
    {
      const std::string* zoom_operation_type_as_string = operation_value.GetIfString();
      if (!zoom_operation_type_as_string) {
        return absl::nullopt;
      }
      params.operation = ParseZoomOperationType(*zoom_operation_type_as_string);
      if (params.operation == ZoomOperationType()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace Zoom

namespace GetProfiles {

base::Value::List Results::Create(const std::vector<ProfileInfo>& profiles, const std::string& running_profile, const std::string& display_profile) {
  base::Value::List create_results;
  create_results.reserve(3);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(profiles));

  create_results.Append(running_profile);

  create_results.Append(display_profile);

  return create_results;
}
}  // namespace GetProfiles

namespace OpenInspector {

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
    const base::Value& type_value = args[0];
    {
      const std::string* inspection_type_as_string = type_value.GetIfString();
      if (!inspection_type_as_string) {
        return absl::nullopt;
      }
      params.type = ParseInspectionType(*inspection_type_as_string);
      if (params.type == InspectionType()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace OpenInspector

namespace OpenSettingsSubpage {

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
    const base::Value& sub_page_value = args[0];
    {
      auto* temp = sub_page_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.sub_page = *temp;
    }
  }
  else {
    return absl::nullopt;
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
    const base::Value& provider_id_value = args[0];
    {
      auto* temp = provider_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.provider_id = *temp;
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
}  // namespace AddProvidedFileSystem

namespace ConfigureVolume {

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
    const base::Value& volume_id_value = args[0];
    {
      auto* temp = volume_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.volume_id = *temp;
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
    const base::Value& extensions_value = args[0];
    {
      if (!extensions_value.is_list()) {
        return absl::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(extensions_value.GetList(), params.extensions)) {
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
    const base::Value& android_app_value = args[0];
    {
      if (!android_app_value.is_dict()) {
        return absl::nullopt;
      }
      if (!AndroidApp::Populate(android_app_value.GetDict(), params.android_app)) {
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
    const base::Value& result_value = args[0];
    {
      const std::string* drive_dialog_result_as_string = result_value.GetIfString();
      if (!drive_dialog_result_as_string) {
        return absl::nullopt;
      }
      params.result = ParseDriveDialogResult(*drive_dialog_result_as_string);
      if (params.result == DriveDialogResult()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace NotifyDriveDialogResult

namespace OpenURL {

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
    const base::Value& url_value = args[0];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace OpenURL

namespace OpenWindow {

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
    const base::Value& params_value = args[0];
    {
      if (!params_value.is_dict()) {
        return absl::nullopt;
      }
      if (!OpenWindowParams::Populate(params_value.GetDict(), params.params)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
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
    const base::Value& task_id_value = args[0];
    {
      auto temp = task_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.task_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace CancelIOTask

namespace ResumeIOTask {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& task_id_value = args[0];
    {
      auto temp = task_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.task_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& params_value = args[1];
    {
      if (!params_value.is_dict()) {
        return absl::nullopt;
      }
      if (!ResumeParams::Populate(params_value.GetDict(), params.params)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace ResumeIOTask

namespace DismissIOTask {

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
    const base::Value& task_id_value = args[0];
    {
      auto temp = task_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.task_id = *temp;
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
}  // namespace DismissIOTask

namespace ShowPolicyDialog {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& task_id_value = args[0];
    {
      auto temp = task_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.task_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& type_value = args[1];
    {
      const std::string* policy_dialog_type_as_string = type_value.GetIfString();
      if (!policy_dialog_type_as_string) {
        return absl::nullopt;
      }
      params.type = ParsePolicyDialogType(*policy_dialog_type_as_string);
      if (params.type == PolicyDialogType()) {
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
    const base::Value& id_value = args[0];
    {
      auto temp = id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.id = *temp;
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

