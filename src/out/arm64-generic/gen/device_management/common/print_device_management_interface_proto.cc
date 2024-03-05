// Copyright 2024 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// THIS CODE IS GENERATED.
// Generated with command:
// ../../../../../../../tmp/portage/chromeos-base/device_management-0.0.1-r228/work/device_management-0.0.1/libhwsec-foundation/utility/proto_print.py
// --subdir common --proto-include device_management/proto_bindings --output-dir
// /build/arm64-generic/var/cache/portage/chromeos-base/device_management/out/Default/gen/device_management/common
// /build/arm64-generic/usr/include/chromeos/dbus/device_management/device_management_interface.proto

#include "device_management/common/print_device_management_interface_proto.h"

#include <inttypes.h>

#include <string>

#include <base/strings/string_number_conversions.h>
#include <base/strings/stringprintf.h>

namespace device_management {

std::string GetProtoDebugString(DeviceManagementErrorCode value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(DeviceManagementErrorCode value,
                                          int indent_size) {
  if (value == DEVICE_MANAGEMENT_ERROR_NOT_SET) {
    return "DEVICE_MANAGEMENT_ERROR_NOT_SET";
  }
  if (value == DEVICE_MANAGEMENT_ERROR_FIRMWARE_MANAGEMENT_PARAMETERS_INVALID) {
    return "DEVICE_MANAGEMENT_ERROR_FIRMWARE_MANAGEMENT_PARAMETERS_INVALID";
  }
  if (value ==
      DEVICE_MANAGEMENT_ERROR_FIRMWARE_MANAGEMENT_PARAMETERS_CANNOT_STORE) {
    return "DEVICE_MANAGEMENT_ERROR_FIRMWARE_MANAGEMENT_PARAMETERS_CANNOT_"
           "STORE";
  }
  if (value ==
      DEVICE_MANAGEMENT_ERROR_FIRMWARE_MANAGEMENT_PARAMETERS_CANNOT_REMOVE) {
    return "DEVICE_MANAGEMENT_ERROR_FIRMWARE_MANAGEMENT_PARAMETERS_CANNOT_"
           "REMOVE";
  }
  if (value == DEVICE_MANAGEMENT_ERROR_INSTALL_ATTRIBUTES_GET_FAILED) {
    return "DEVICE_MANAGEMENT_ERROR_INSTALL_ATTRIBUTES_GET_FAILED";
  }
  if (value == DEVICE_MANAGEMENT_ERROR_INSTALL_ATTRIBUTES_SET_FAILED) {
    return "DEVICE_MANAGEMENT_ERROR_INSTALL_ATTRIBUTES_SET_FAILED";
  }
  if (value == DEVICE_MANAGEMENT_ERROR_INSTALL_ATTRIBUTES_FINALIZE_FAILED) {
    return "DEVICE_MANAGEMENT_ERROR_INSTALL_ATTRIBUTES_FINALIZE_FAILED";
  }
  if (value == DEVICE_MANAGEMENT_ERROR_NOT_ENTERPRISED_OWNED) {
    return "DEVICE_MANAGEMENT_ERROR_NOT_ENTERPRISED_OWNED";
  }
  if (value == DEVICE_MANAGEMENT_ERROR_TPM_DEFEND_LOCK) {
    return "DEVICE_MANAGEMENT_ERROR_TPM_DEFEND_LOCK";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(InstallAttributesState value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(InstallAttributesState value,
                                          int indent_size) {
  if (value == UNKNOWN) {
    return "UNKNOWN";
  }
  if (value == TPM_NOT_OWNED) {
    return "TPM_NOT_OWNED";
  }
  if (value == FIRST_INSTALL) {
    return "FIRST_INSTALL";
  }
  if (value == VALID) {
    return "VALID";
  }
  if (value == INVALID) {
    return "INVALID";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(const InstallAttributesGetRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const InstallAttributesGetRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_name(); }) {
      if (!value.has_name()) {
        return;
      }
    }
    output += indent + "  name: ";
    base::StringAppendF(&output, "%s", value.name().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const InstallAttributesGetReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const InstallAttributesGetReply& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_error(); }) {
      if (!value.has_error()) {
        return;
      }
    }
    output += indent + "  error: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_value(); }) {
      if (!value.has_value()) {
        return;
      }
    }
    output += indent + "  value: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.value().data(), value.value().size()).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const InstallAttributesSetRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const InstallAttributesSetRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_name(); }) {
      if (!value.has_name()) {
        return;
      }
    }
    output += indent + "  name: ";
    base::StringAppendF(&output, "%s", value.name().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_value(); }) {
      if (!value.has_value()) {
        return;
      }
    }
    output += indent + "  value: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.value().data(), value.value().size()).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const InstallAttributesSetReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const InstallAttributesSetReply& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_error(); }) {
      if (!value.has_error()) {
        return;
      }
    }
    output += indent + "  error: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const InstallAttributesFinalizeRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const InstallAttributesFinalizeRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const InstallAttributesFinalizeReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const InstallAttributesFinalizeReply& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_error(); }) {
      if (!value.has_error()) {
        return;
      }
    }
    output += indent + "  error: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(
    const InstallAttributesGetStatusRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const InstallAttributesGetStatusRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const InstallAttributesGetStatusReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const InstallAttributesGetStatusReply& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_error(); }) {
      if (!value.has_error()) {
        return;
      }
    }
    output += indent + "  error: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_count(); }) {
      if (!value.has_count()) {
        return;
      }
    }
    output += indent + "  count: ";
    base::StringAppendF(&output, "%" PRId32, value.count());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_is_secure(); }) {
      if (!value.has_is_secure()) {
        return;
      }
    }
    output += indent + "  is_secure: ";
    base::StringAppendF(&output, "%s", value.is_secure() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_state(); }) {
      if (!value.has_state()) {
        return;
      }
    }
    output += indent + "  state: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.state(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const EnterpriseOwnedGetStatusRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const EnterpriseOwnedGetStatusRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const EnterpriseOwnedGetStatusReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const EnterpriseOwnedGetStatusReply& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_error(); }) {
      if (!value.has_error()) {
        return;
      }
    }
    output += indent + "  error: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const FirmwareManagementParameters& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const FirmwareManagementParameters& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_flags(); }) {
      if (!value.has_flags()) {
        return;
      }
    }
    output += indent + "  flags: ";
    base::StringAppendF(&output, "%" PRIu32 " (0x%08" PRIX32 ")", value.flags(),
                        value.flags());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_developer_key_hash(); }) {
      if (!value.has_developer_key_hash()) {
        return;
      }
    }
    output += indent + "  developer_key_hash: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.developer_key_hash().data(),
                                        value.developer_key_hash().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(
    const GetFirmwareManagementParametersRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const GetFirmwareManagementParametersRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(
    const GetFirmwareManagementParametersReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const GetFirmwareManagementParametersReply& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_error(); }) {
      if (!value.has_error()) {
        return;
      }
    }
    output += indent + "  error: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_fwmp(); }) {
      if (!value.has_fwmp()) {
        return;
      }
    }
    output += indent + "  fwmp: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.fwmp(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(
    const RemoveFirmwareManagementParametersRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const RemoveFirmwareManagementParametersRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(
    const RemoveFirmwareManagementParametersReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const RemoveFirmwareManagementParametersReply& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_error(); }) {
      if (!value.has_error()) {
        return;
      }
    }
    output += indent + "  error: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(
    const SetFirmwareManagementParametersRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const SetFirmwareManagementParametersRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_fwmp(); }) {
      if (!value.has_fwmp()) {
        return;
      }
    }
    output += indent + "  fwmp: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.fwmp(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(
    const SetFirmwareManagementParametersReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const SetFirmwareManagementParametersReply& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_error(); }) {
      if (!value.has_error()) {
        return;
      }
    }
    output += indent + "  error: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

}  // namespace device_management
