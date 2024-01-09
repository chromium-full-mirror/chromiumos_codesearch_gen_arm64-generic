// Copyright 2024 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// THIS CODE IS GENERATED.
// Generated with command:
// ../../../../../../tmp/portage/chromeos-base/tpm_manager-client-0.0.1-r772/work/tpm_manager-client-0.0.1/libhwsec-foundation/utility/proto_print.py
// --subdir common --proto-include tpm_manager/proto_bindings --output-dir
// /var/cache/portage/chromeos-base/tpm_manager-client/out/Default/gen/tpm_manager/client/../common
// /./usr/include/chromeos/dbus/tpm_manager/tpm_manager.proto

#include "tpm_manager/common/print_tpm_manager_proto.h"

#include <inttypes.h>

#include <string>

#include <base/strings/string_number_conversions.h>
#include <base/strings/stringprintf.h>

namespace tpm_manager {

std::string GetProtoDebugString(TpmManagerStatus value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(TpmManagerStatus value,
                                          int indent_size) {
  if (value == STATUS_SUCCESS) {
    return "STATUS_SUCCESS";
  }
  if (value == STATUS_DEVICE_ERROR) {
    return "STATUS_DEVICE_ERROR";
  }
  if (value == STATUS_NOT_AVAILABLE) {
    return "STATUS_NOT_AVAILABLE";
  }
  if (value == STATUS_DBUS_ERROR) {
    return "STATUS_DBUS_ERROR";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(NvramResult value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(NvramResult value, int indent_size) {
  if (value == NVRAM_RESULT_SUCCESS) {
    return "NVRAM_RESULT_SUCCESS";
  }
  if (value == NVRAM_RESULT_DEVICE_ERROR) {
    return "NVRAM_RESULT_DEVICE_ERROR";
  }
  if (value == NVRAM_RESULT_ACCESS_DENIED) {
    return "NVRAM_RESULT_ACCESS_DENIED";
  }
  if (value == NVRAM_RESULT_INVALID_PARAMETER) {
    return "NVRAM_RESULT_INVALID_PARAMETER";
  }
  if (value == NVRAM_RESULT_SPACE_DOES_NOT_EXIST) {
    return "NVRAM_RESULT_SPACE_DOES_NOT_EXIST";
  }
  if (value == NVRAM_RESULT_SPACE_ALREADY_EXISTS) {
    return "NVRAM_RESULT_SPACE_ALREADY_EXISTS";
  }
  if (value == NVRAM_RESULT_OPERATION_DISABLED) {
    return "NVRAM_RESULT_OPERATION_DISABLED";
  }
  if (value == NVRAM_RESULT_INSUFFICIENT_SPACE) {
    return "NVRAM_RESULT_INSUFFICIENT_SPACE";
  }
  if (value == NVRAM_RESULT_IPC_ERROR) {
    return "NVRAM_RESULT_IPC_ERROR";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(NvramSpaceAttribute value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(NvramSpaceAttribute value,
                                          int indent_size) {
  if (value == NVRAM_PERSISTENT_WRITE_LOCK) {
    return "NVRAM_PERSISTENT_WRITE_LOCK";
  }
  if (value == NVRAM_BOOT_WRITE_LOCK) {
    return "NVRAM_BOOT_WRITE_LOCK";
  }
  if (value == NVRAM_BOOT_READ_LOCK) {
    return "NVRAM_BOOT_READ_LOCK";
  }
  if (value == NVRAM_WRITE_AUTHORIZATION) {
    return "NVRAM_WRITE_AUTHORIZATION";
  }
  if (value == NVRAM_READ_AUTHORIZATION) {
    return "NVRAM_READ_AUTHORIZATION";
  }
  if (value == NVRAM_WRITE_EXTEND) {
    return "NVRAM_WRITE_EXTEND";
  }
  if (value == NVRAM_GLOBAL_LOCK) {
    return "NVRAM_GLOBAL_LOCK";
  }
  if (value == NVRAM_PLATFORM_WRITE) {
    return "NVRAM_PLATFORM_WRITE";
  }
  if (value == NVRAM_OWNER_WRITE) {
    return "NVRAM_OWNER_WRITE";
  }
  if (value == NVRAM_OWNER_READ) {
    return "NVRAM_OWNER_READ";
  }
  if (value == NVRAM_PLATFORM_READ) {
    return "NVRAM_PLATFORM_READ";
  }
  if (value == NVRAM_PLATFORM_CREATE) {
    return "NVRAM_PLATFORM_CREATE";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(NvramSpacePolicy value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(NvramSpacePolicy value,
                                          int indent_size) {
  if (value == NVRAM_POLICY_NONE) {
    return "NVRAM_POLICY_NONE";
  }
  if (value == NVRAM_POLICY_PCR0) {
    return "NVRAM_POLICY_PCR0";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(GscVersion value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(GscVersion value, int indent_size) {
  if (value == GSC_VERSION_NOT_GSC) {
    return "GSC_VERSION_NOT_GSC";
  }
  if (value == GSC_VERSION_CR50) {
    return "GSC_VERSION_CR50";
  }
  if (value == GSC_VERSION_TI50) {
    return "GSC_VERSION_TI50";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(RoVerificationStatus value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(RoVerificationStatus value,
                                          int indent_size) {
  if (value == RO_STATUS_NOT_TRIGGERED) {
    return "RO_STATUS_NOT_TRIGGERED";
  }
  if (value == RO_STATUS_PASS_UNVERIFIED_GBB) {
    return "RO_STATUS_PASS_UNVERIFIED_GBB";
  }
  if (value == RO_STATUS_FAIL) {
    return "RO_STATUS_FAIL";
  }
  if (value == RO_STATUS_UNSUPPORTED) {
    return "RO_STATUS_UNSUPPORTED";
  }
  if (value == RO_STATUS_UNSUPPORTED_NOT_TRIGGERED) {
    return "RO_STATUS_UNSUPPORTED_NOT_TRIGGERED";
  }
  if (value == RO_STATUS_UNSUPPORTED_TRIGGERED) {
    return "RO_STATUS_UNSUPPORTED_TRIGGERED";
  }
  if (value == RO_STATUS_PASS) {
    return "RO_STATUS_PASS";
  }
  if (value == RO_STATUS_IN_PROGRESS) {
    return "RO_STATUS_IN_PROGRESS";
  }
  if (value == RO_STATUS_V2_SUCCESS) {
    return "RO_STATUS_V2_SUCCESS";
  }
  if (value == RO_STATUS_V2_FAILED_VERIFICATION) {
    return "RO_STATUS_V2_FAILED_VERIFICATION";
  }
  if (value == RO_STATUS_V2_INCONSISTENT_GSCVD) {
    return "RO_STATUS_V2_INCONSISTENT_GSCVD";
  }
  if (value == RO_STATUS_V2_INCONSISTENT_KEYBLOCK) {
    return "RO_STATUS_V2_INCONSISTENT_KEYBLOCK";
  }
  if (value == RO_STATUS_V2_INCONSISTENT_KEY) {
    return "RO_STATUS_V2_INCONSISTENT_KEY";
  }
  if (value == RO_STATUS_V2_SPI_READ) {
    return "RO_STATUS_V2_SPI_READ";
  }
  if (value == RO_STATUS_V2_UNSUPPORTED_CRYPTO_ALGORITHM) {
    return "RO_STATUS_V2_UNSUPPORTED_CRYPTO_ALGORITHM";
  }
  if (value == RO_STATUS_V2_VERSION_MISMATCH) {
    return "RO_STATUS_V2_VERSION_MISMATCH";
  }
  if (value == RO_STATUS_V2_OUT_OF_MEMORY) {
    return "RO_STATUS_V2_OUT_OF_MEMORY";
  }
  if (value == RO_STATUS_V2_INTERNAL) {
    return "RO_STATUS_V2_INTERNAL";
  }
  if (value == RO_STATUS_V2_TOO_BIG) {
    return "RO_STATUS_V2_TOO_BIG";
  }
  if (value == RO_STATUS_V2_MISSING_GSCVD) {
    return "RO_STATUS_V2_MISSING_GSCVD";
  }
  if (value == RO_STATUS_V2_BOARD_ID_MISMATCH) {
    return "RO_STATUS_V2_BOARD_ID_MISMATCH";
  }
  if (value == RO_STATUS_V2_SETTING_NOT_PROVISIONED) {
    return "RO_STATUS_V2_SETTING_NOT_PROVISIONED";
  }
  if (value == RO_STATUS_V2_NON_ZERO_GBB_FLAGS) {
    return "RO_STATUS_V2_NON_ZERO_GBB_FLAGS";
  }
  if (value == RO_STATUS_V2_WRONG_ROOT_KEY) {
    return "RO_STATUS_V2_WRONG_ROOT_KEY";
  }
  if (value == RO_STATUS_V2_UNKNOWN) {
    return "RO_STATUS_V2_UNKNOWN";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(const NvramPolicyRecord& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const NvramPolicyRecord& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_index(); }) {
      if (!value.has_index()) {
        return;
      }
    }
    output += indent + "  index: ";
    base::StringAppendF(&output, "%" PRIu32 " (0x%08" PRIX32 ")", value.index(),
                        value.index());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_policy(); }) {
      if (!value.has_policy()) {
        return;
      }
    }
    output += indent + "  policy: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.policy(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_world_read_allowed(); }) {
      if (!value.has_world_read_allowed()) {
        return;
      }
    }
    output += indent + "  world_read_allowed: ";
    base::StringAppendF(&output, "%s",
                        value.world_read_allowed() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_world_write_allowed(); }) {
      if (!value.has_world_write_allowed()) {
        return;
      }
    }
    output += indent + "  world_write_allowed: ";
    base::StringAppendF(&output, "%s",
                        value.world_write_allowed() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "  policy_digests: {";
  for (int i = 0; i < value.policy_digests_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.policy_digests(i).data(),
                                        value.policy_digests(i).size())
                            .c_str());
    if (i == value.policy_digests_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const AuthDelegate& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const AuthDelegate& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_blob(); }) {
      if (!value.has_blob()) {
        return;
      }
    }
    output += indent + "  blob: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.blob().data(), value.blob().size()).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_secret(); }) {
      if (!value.has_secret()) {
        return;
      }
    }
    output += indent + "  secret: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.secret().data(), value.secret().size()).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_has_reset_lock_permissions(); }) {
      if (!value.has_has_reset_lock_permissions()) {
        return;
      }
    }
    output += indent + "  has_reset_lock_permissions: ";
    base::StringAppendF(&output, "%s",
                        value.has_reset_lock_permissions() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const LocalData& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const LocalData& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_owner_password(); }) {
      if (!value.has_owner_password()) {
        return;
      }
    }
    output += indent + "  owner_password: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.owner_password().data(),
                                        value.owner_password().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "  owner_dependency: {";
  for (int i = 0; i < value.owner_dependency_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(&output, "%s", value.owner_dependency(i).c_str());
    if (i == value.owner_dependency_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_endorsement_password(); }) {
      if (!value.has_endorsement_password()) {
        return;
      }
    }
    output += indent + "  endorsement_password: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.endorsement_password().data(),
                                        value.endorsement_password().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_lockout_password(); }) {
      if (!value.has_lockout_password()) {
        return;
      }
    }
    output += indent + "  lockout_password: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.lockout_password().data(),
                                        value.lockout_password().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "  nvram_policy: {";
  for (int i = 0; i < value.nvram_policy_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.nvram_policy(i), indent_size + 4)
            .c_str());
    if (i == value.nvram_policy_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_owner_delegate(); }) {
      if (!value.has_owner_delegate()) {
        return;
      }
    }
    output += indent + "  owner_delegate: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.owner_delegate(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_no_srk_auth(); }) {
      if (!value.has_no_srk_auth()) {
        return;
      }
    }
    output += indent + "  no_srk_auth: ";
    base::StringAppendF(&output, "%s", value.no_srk_auth() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_reset_da_lock_auth_failure(); }) {
      if (!value.has_reset_da_lock_auth_failure()) {
        return;
      }
    }
    output += indent + "  reset_da_lock_auth_failure: ";
    base::StringAppendF(&output, "%s",
                        value.reset_da_lock_auth_failure() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const OwnershipTakenSignal& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const OwnershipTakenSignal& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const DefineSpaceRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const DefineSpaceRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_index(); }) {
      if (!value.has_index()) {
        return;
      }
    }
    output += indent + "  index: ";
    base::StringAppendF(&output, "%" PRIu32 " (0x%08" PRIX32 ")", value.index(),
                        value.index());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_size(); }) {
      if (!value.has_size()) {
        return;
      }
    }
    output += indent + "  size: ";
    base::StringAppendF(&output, "%" PRIu32 " (0x%08" PRIX32 ")", value.size(),
                        value.size());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "  attributes: {";
  for (int i = 0; i < value.attributes_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.attributes(i), indent_size + 4)
            .c_str());
    if (i == value.attributes_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_authorization_value(); }) {
      if (!value.has_authorization_value()) {
        return;
      }
    }
    output += indent + "  authorization_value: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.authorization_value().data(),
                                        value.authorization_value().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_policy(); }) {
      if (!value.has_policy()) {
        return;
      }
    }
    output += indent + "  policy: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.policy(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const DefineSpaceReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const DefineSpaceReply& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_result(); }) {
      if (!value.has_result()) {
        return;
      }
    }
    output += indent + "  result: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.result(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const DestroySpaceRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const DestroySpaceRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_index(); }) {
      if (!value.has_index()) {
        return;
      }
    }
    output += indent + "  index: ";
    base::StringAppendF(&output, "%" PRIu32 " (0x%08" PRIX32 ")", value.index(),
                        value.index());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const DestroySpaceReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const DestroySpaceReply& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_result(); }) {
      if (!value.has_result()) {
        return;
      }
    }
    output += indent + "  result: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.result(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const WriteSpaceRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const WriteSpaceRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_index(); }) {
      if (!value.has_index()) {
        return;
      }
    }
    output += indent + "  index: ";
    base::StringAppendF(&output, "%" PRIu32 " (0x%08" PRIX32 ")", value.index(),
                        value.index());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_data(); }) {
      if (!value.has_data()) {
        return;
      }
    }
    output += indent + "  data: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.data().data(), value.data().size()).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_authorization_value(); }) {
      if (!value.has_authorization_value()) {
        return;
      }
    }
    output += indent + "  authorization_value: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.authorization_value().data(),
                                        value.authorization_value().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_use_owner_authorization(); }) {
      if (!value.has_use_owner_authorization()) {
        return;
      }
    }
    output += indent + "  use_owner_authorization: ";
    base::StringAppendF(&output, "%s",
                        value.use_owner_authorization() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const WriteSpaceReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const WriteSpaceReply& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_result(); }) {
      if (!value.has_result()) {
        return;
      }
    }
    output += indent + "  result: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.result(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const ReadSpaceRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const ReadSpaceRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_index(); }) {
      if (!value.has_index()) {
        return;
      }
    }
    output += indent + "  index: ";
    base::StringAppendF(&output, "%" PRIu32 " (0x%08" PRIX32 ")", value.index(),
                        value.index());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_authorization_value(); }) {
      if (!value.has_authorization_value()) {
        return;
      }
    }
    output += indent + "  authorization_value: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.authorization_value().data(),
                                        value.authorization_value().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_use_owner_authorization(); }) {
      if (!value.has_use_owner_authorization()) {
        return;
      }
    }
    output += indent + "  use_owner_authorization: ";
    base::StringAppendF(&output, "%s",
                        value.use_owner_authorization() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const ReadSpaceReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const ReadSpaceReply& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_result(); }) {
      if (!value.has_result()) {
        return;
      }
    }
    output += indent + "  result: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.result(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_data(); }) {
      if (!value.has_data()) {
        return;
      }
    }
    output += indent + "  data: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.data().data(), value.data().size()).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const LockSpaceRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const LockSpaceRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_index(); }) {
      if (!value.has_index()) {
        return;
      }
    }
    output += indent + "  index: ";
    base::StringAppendF(&output, "%" PRIu32 " (0x%08" PRIX32 ")", value.index(),
                        value.index());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_lock_read(); }) {
      if (!value.has_lock_read()) {
        return;
      }
    }
    output += indent + "  lock_read: ";
    base::StringAppendF(&output, "%s", value.lock_read() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_lock_write(); }) {
      if (!value.has_lock_write()) {
        return;
      }
    }
    output += indent + "  lock_write: ";
    base::StringAppendF(&output, "%s", value.lock_write() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_authorization_value(); }) {
      if (!value.has_authorization_value()) {
        return;
      }
    }
    output += indent + "  authorization_value: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.authorization_value().data(),
                                        value.authorization_value().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_use_owner_authorization(); }) {
      if (!value.has_use_owner_authorization()) {
        return;
      }
    }
    output += indent + "  use_owner_authorization: ";
    base::StringAppendF(&output, "%s",
                        value.use_owner_authorization() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const LockSpaceReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const LockSpaceReply& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_result(); }) {
      if (!value.has_result()) {
        return;
      }
    }
    output += indent + "  result: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.result(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const ListSpacesRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const ListSpacesRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const ListSpacesReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const ListSpacesReply& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_result(); }) {
      if (!value.has_result()) {
        return;
      }
    }
    output += indent + "  result: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.result(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "  index_list: {";
  for (int i = 0; i < value.index_list_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(&output, "%" PRIu32 " (0x%08" PRIX32 ")",
                        value.index_list(i), value.index_list(i));
    if (i == value.index_list_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetSpaceInfoRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const GetSpaceInfoRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_index(); }) {
      if (!value.has_index()) {
        return;
      }
    }
    output += indent + "  index: ";
    base::StringAppendF(&output, "%" PRIu32 " (0x%08" PRIX32 ")", value.index(),
                        value.index());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetSpaceInfoReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const GetSpaceInfoReply& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_result(); }) {
      if (!value.has_result()) {
        return;
      }
    }
    output += indent + "  result: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.result(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_size(); }) {
      if (!value.has_size()) {
        return;
      }
    }
    output += indent + "  size: ";
    base::StringAppendF(&output, "%" PRIu32 " (0x%08" PRIX32 ")", value.size(),
                        value.size());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_is_read_locked(); }) {
      if (!value.has_is_read_locked()) {
        return;
      }
    }
    output += indent + "  is_read_locked: ";
    base::StringAppendF(&output, "%s",
                        value.is_read_locked() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_is_write_locked(); }) {
      if (!value.has_is_write_locked()) {
        return;
      }
    }
    output += indent + "  is_write_locked: ";
    base::StringAppendF(&output, "%s",
                        value.is_write_locked() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "  attributes: {";
  for (int i = 0; i < value.attributes_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.attributes(i), indent_size + 4)
            .c_str());
    if (i == value.attributes_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_policy(); }) {
      if (!value.has_policy()) {
        return;
      }
    }
    output += indent + "  policy: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.policy(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetTpmStatusRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const GetTpmStatusRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_ignore_cache(); }) {
      if (!value.has_ignore_cache()) {
        return;
      }
    }
    output += indent + "  ignore_cache: ";
    base::StringAppendF(&output, "%s", value.ignore_cache() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetTpmStatusReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const GetTpmStatusReply& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_status(); }) {
      if (!value.has_status()) {
        return;
      }
    }
    output += indent + "  status: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.status(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_enabled(); }) {
      if (!value.has_enabled()) {
        return;
      }
    }
    output += indent + "  enabled: ";
    base::StringAppendF(&output, "%s", value.enabled() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_owned(); }) {
      if (!value.has_owned()) {
        return;
      }
    }
    output += indent + "  owned: ";
    base::StringAppendF(&output, "%s", value.owned() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_local_data(); }) {
      if (!value.has_local_data()) {
        return;
      }
    }
    output += indent + "  local_data: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.local_data(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetTpmNonsensitiveStatusRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const GetTpmNonsensitiveStatusRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_ignore_cache(); }) {
      if (!value.has_ignore_cache()) {
        return;
      }
    }
    output += indent + "  ignore_cache: ";
    base::StringAppendF(&output, "%s", value.ignore_cache() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetTpmNonsensitiveStatusReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const GetTpmNonsensitiveStatusReply& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_status(); }) {
      if (!value.has_status()) {
        return;
      }
    }
    output += indent + "  status: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.status(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_is_enabled(); }) {
      if (!value.has_is_enabled()) {
        return;
      }
    }
    output += indent + "  is_enabled: ";
    base::StringAppendF(&output, "%s", value.is_enabled() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_is_owned(); }) {
      if (!value.has_is_owned()) {
        return;
      }
    }
    output += indent + "  is_owned: ";
    base::StringAppendF(&output, "%s", value.is_owned() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_is_owner_password_present(); }) {
      if (!value.has_is_owner_password_present()) {
        return;
      }
    }
    output += indent + "  is_owner_password_present: ";
    base::StringAppendF(&output, "%s",
                        value.is_owner_password_present() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_has_reset_lock_permissions(); }) {
      if (!value.has_has_reset_lock_permissions()) {
        return;
      }
    }
    output += indent + "  has_reset_lock_permissions: ";
    base::StringAppendF(&output, "%s",
                        value.has_reset_lock_permissions() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_is_srk_default_auth(); }) {
      if (!value.has_is_srk_default_auth()) {
        return;
      }
    }
    output += indent + "  is_srk_default_auth: ";
    base::StringAppendF(&output, "%s",
                        value.is_srk_default_auth() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetVersionInfoRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const GetVersionInfoRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetVersionInfoReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const GetVersionInfoReply& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_status(); }) {
      if (!value.has_status()) {
        return;
      }
    }
    output += indent + "  status: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.status(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_family(); }) {
      if (!value.has_family()) {
        return;
      }
    }
    output += indent + "  family: ";
    base::StringAppendF(&output, "%" PRIu32 " (0x%08" PRIX32 ")",
                        value.family(), value.family());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_spec_level(); }) {
      if (!value.has_spec_level()) {
        return;
      }
    }
    output += indent + "  spec_level: ";
    base::StringAppendF(&output, "%" PRIu64 " (0x%016" PRIX64 ")",
                        value.spec_level(), value.spec_level());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_manufacturer(); }) {
      if (!value.has_manufacturer()) {
        return;
      }
    }
    output += indent + "  manufacturer: ";
    base::StringAppendF(&output, "%" PRIu32 " (0x%08" PRIX32 ")",
                        value.manufacturer(), value.manufacturer());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_tpm_model(); }) {
      if (!value.has_tpm_model()) {
        return;
      }
    }
    output += indent + "  tpm_model: ";
    base::StringAppendF(&output, "%" PRIu32 " (0x%08" PRIX32 ")",
                        value.tpm_model(), value.tpm_model());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_firmware_version(); }) {
      if (!value.has_firmware_version()) {
        return;
      }
    }
    output += indent + "  firmware_version: ";
    base::StringAppendF(&output, "%" PRIu64 " (0x%016" PRIX64 ")",
                        value.firmware_version(), value.firmware_version());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_vendor_specific(); }) {
      if (!value.has_vendor_specific()) {
        return;
      }
    }
    output += indent + "  vendor_specific: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.vendor_specific().data(),
                                        value.vendor_specific().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_gsc_version(); }) {
      if (!value.has_gsc_version()) {
        return;
      }
    }
    output += indent + "  gsc_version: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.gsc_version(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_rw_version(); }) {
      if (!value.has_rw_version()) {
        return;
      }
    }
    output += indent + "  rw_version: ";
    base::StringAppendF(&output, "%s", value.rw_version().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetSupportedFeaturesRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const GetSupportedFeaturesRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetSupportedFeaturesReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const GetSupportedFeaturesReply& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_status(); }) {
      if (!value.has_status()) {
        return;
      }
    }
    output += indent + "  status: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.status(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_support_u2f(); }) {
      if (!value.has_support_u2f()) {
        return;
      }
    }
    output += indent + "  support_u2f: ";
    base::StringAppendF(&output, "%s", value.support_u2f() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_support_pinweaver(); }) {
      if (!value.has_support_pinweaver()) {
        return;
      }
    }
    output += indent + "  support_pinweaver: ";
    base::StringAppendF(&output, "%s",
                        value.support_pinweaver() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_support_runtime_selection(); }) {
      if (!value.has_support_runtime_selection()) {
        return;
      }
    }
    output += indent + "  support_runtime_selection: ";
    base::StringAppendF(&output, "%s",
                        value.support_runtime_selection() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_is_allowed(); }) {
      if (!value.has_is_allowed()) {
        return;
      }
    }
    output += indent + "  is_allowed: ";
    base::StringAppendF(&output, "%s", value.is_allowed() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_support_clear_request(); }) {
      if (!value.has_support_clear_request()) {
        return;
      }
    }
    output += indent + "  support_clear_request: ";
    base::StringAppendF(&output, "%s",
                        value.support_clear_request() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_support_clear_without_prompt(); }) {
      if (!value.has_support_clear_without_prompt()) {
        return;
      }
    }
    output += indent + "  support_clear_without_prompt: ";
    base::StringAppendF(
        &output, "%s", value.support_clear_without_prompt() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetDictionaryAttackInfoRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const GetDictionaryAttackInfoRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetDictionaryAttackInfoReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const GetDictionaryAttackInfoReply& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_status(); }) {
      if (!value.has_status()) {
        return;
      }
    }
    output += indent + "  status: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.status(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_dictionary_attack_counter(); }) {
      if (!value.has_dictionary_attack_counter()) {
        return;
      }
    }
    output += indent + "  dictionary_attack_counter: ";
    base::StringAppendF(&output, "%" PRIu32 " (0x%08" PRIX32 ")",
                        value.dictionary_attack_counter(),
                        value.dictionary_attack_counter());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_dictionary_attack_threshold(); }) {
      if (!value.has_dictionary_attack_threshold()) {
        return;
      }
    }
    output += indent + "  dictionary_attack_threshold: ";
    base::StringAppendF(&output, "%" PRIu32 " (0x%08" PRIX32 ")",
                        value.dictionary_attack_threshold(),
                        value.dictionary_attack_threshold());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) {
                    t.has_dictionary_attack_lockout_in_effect();
                  }) {
      if (!value.has_dictionary_attack_lockout_in_effect()) {
        return;
      }
    }
    output += indent + "  dictionary_attack_lockout_in_effect: ";
    base::StringAppendF(
        &output, "%s",
        value.dictionary_attack_lockout_in_effect() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) {
                    t.has_dictionary_attack_lockout_seconds_remaining();
                  }) {
      if (!value.has_dictionary_attack_lockout_seconds_remaining()) {
        return;
      }
    }
    output += indent + "  dictionary_attack_lockout_seconds_remaining: ";
    base::StringAppendF(&output, "%" PRIu32 " (0x%08" PRIX32 ")",
                        value.dictionary_attack_lockout_seconds_remaining(),
                        value.dictionary_attack_lockout_seconds_remaining());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetRoVerificationStatusRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const GetRoVerificationStatusRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetRoVerificationStatusReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const GetRoVerificationStatusReply& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_status(); }) {
      if (!value.has_status()) {
        return;
      }
    }
    output += indent + "  status: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.status(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_ro_verification_status(); }) {
      if (!value.has_ro_verification_status()) {
        return;
      }
    }
    output += indent + "  ro_verification_status: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.ro_verification_status(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const ResetDictionaryAttackLockRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const ResetDictionaryAttackLockRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_is_async(); }) {
      if (!value.has_is_async()) {
        return;
      }
    }
    output += indent + "  is_async: ";
    base::StringAppendF(&output, "%s", value.is_async() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const ResetDictionaryAttackLockReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const ResetDictionaryAttackLockReply& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_status(); }) {
      if (!value.has_status()) {
        return;
      }
    }
    output += indent + "  status: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.status(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const TakeOwnershipRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const TakeOwnershipRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_is_async(); }) {
      if (!value.has_is_async()) {
        return;
      }
    }
    output += indent + "  is_async: ";
    base::StringAppendF(&output, "%s", value.is_async() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const TakeOwnershipReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const TakeOwnershipReply& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_status(); }) {
      if (!value.has_status()) {
        return;
      }
    }
    output += indent + "  status: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.status(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const RemoveOwnerDependencyRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const RemoveOwnerDependencyRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_owner_dependency(); }) {
      if (!value.has_owner_dependency()) {
        return;
      }
    }
    output += indent + "  owner_dependency: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.owner_dependency().data(),
                                        value.owner_dependency().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const RemoveOwnerDependencyReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const RemoveOwnerDependencyReply& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_status(); }) {
      if (!value.has_status()) {
        return;
      }
    }
    output += indent + "  status: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.status(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const ClearStoredOwnerPasswordRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const ClearStoredOwnerPasswordRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const ClearStoredOwnerPasswordReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const ClearStoredOwnerPasswordReply& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_status(); }) {
      if (!value.has_status()) {
        return;
      }
    }
    output += indent + "  status: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.status(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const ClearTpmRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const ClearTpmRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const ClearTpmReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const ClearTpmReply& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_status(); }) {
      if (!value.has_status()) {
        return;
      }
    }
    output += indent + "  status: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.status(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

}  // namespace tpm_manager
