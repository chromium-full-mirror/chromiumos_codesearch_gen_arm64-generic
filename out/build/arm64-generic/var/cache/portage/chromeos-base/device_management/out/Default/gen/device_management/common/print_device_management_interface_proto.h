// Copyright 2024 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// THIS CODE IS GENERATED.
// Generated with command:
// ../../../../../../../tmp/portage/chromeos-base/device_management-0.0.1-r261/work/device_management-0.0.1/libhwsec-foundation/utility/proto_print.py
// --subdir common --proto-include device_management/proto_bindings --output-dir
// /build/arm64-generic/var/cache/portage/chromeos-base/device_management/out/Default/gen/device_management/common
// /build/arm64-generic/usr/include/chromeos/dbus/device_management/device_management_interface.proto

#ifndef DEVICE_MANAGEMENT_COMMON_PRINT_DEVICE_MANAGEMENT_INTERFACE_PROTO_H_
#define DEVICE_MANAGEMENT_COMMON_PRINT_DEVICE_MANAGEMENT_INTERFACE_PROTO_H_

#include <string>

#include <brillo/brillo_export.h>

#include "device_management/proto_bindings/device_management_interface.pb.h"

namespace device_management {

std::string GetProtoDebugStringWithIndent(DeviceManagementErrorCode value,
                                          int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(DeviceManagementErrorCode value);
std::string GetProtoDebugStringWithIndent(InstallAttributesState value,
                                          int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(InstallAttributesState value);
std::string GetProtoDebugStringWithIndent(
    const InstallAttributesGetRequest& value,
    int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    const InstallAttributesGetRequest& value);
std::string GetProtoDebugStringWithIndent(
    const InstallAttributesGetReply& value,
    int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    const InstallAttributesGetReply& value);
std::string GetProtoDebugStringWithIndent(
    const InstallAttributesSetRequest& value,
    int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    const InstallAttributesSetRequest& value);
std::string GetProtoDebugStringWithIndent(
    const InstallAttributesSetReply& value,
    int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    const InstallAttributesSetReply& value);
std::string GetProtoDebugStringWithIndent(
    const InstallAttributesFinalizeRequest& value,
    int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    const InstallAttributesFinalizeRequest& value);
std::string GetProtoDebugStringWithIndent(
    const InstallAttributesFinalizeReply& value,
    int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    const InstallAttributesFinalizeReply& value);
std::string GetProtoDebugStringWithIndent(
    const InstallAttributesGetStatusRequest& value,
    int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    const InstallAttributesGetStatusRequest& value);
std::string GetProtoDebugStringWithIndent(
    const InstallAttributesGetStatusReply& value,
    int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    const InstallAttributesGetStatusReply& value);
std::string GetProtoDebugStringWithIndent(
    const EnterpriseOwnedGetStatusRequest& value,
    int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    const EnterpriseOwnedGetStatusRequest& value);
std::string GetProtoDebugStringWithIndent(
    const EnterpriseOwnedGetStatusReply& value,
    int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    const EnterpriseOwnedGetStatusReply& value);
std::string GetProtoDebugStringWithIndent(
    const FirmwareManagementParameters& value,
    int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    const FirmwareManagementParameters& value);
std::string GetProtoDebugStringWithIndent(
    const GetFirmwareManagementParametersRequest& value,
    int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    const GetFirmwareManagementParametersRequest& value);
std::string GetProtoDebugStringWithIndent(
    const GetFirmwareManagementParametersReply& value,
    int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    const GetFirmwareManagementParametersReply& value);
std::string GetProtoDebugStringWithIndent(
    const RemoveFirmwareManagementParametersRequest& value,
    int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    const RemoveFirmwareManagementParametersRequest& value);
std::string GetProtoDebugStringWithIndent(
    const RemoveFirmwareManagementParametersReply& value,
    int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    const RemoveFirmwareManagementParametersReply& value);
std::string GetProtoDebugStringWithIndent(
    const SetFirmwareManagementParametersRequest& value,
    int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    const SetFirmwareManagementParametersRequest& value);
std::string GetProtoDebugStringWithIndent(
    const SetFirmwareManagementParametersReply& value,
    int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    const SetFirmwareManagementParametersReply& value);

}  // namespace device_management

#endif  // DEVICE_MANAGEMENT_COMMON_PRINT_DEVICE_MANAGEMENT_INTERFACE_PROTO_H_
