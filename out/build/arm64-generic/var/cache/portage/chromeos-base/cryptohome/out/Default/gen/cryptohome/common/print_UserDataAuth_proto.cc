// Copyright 2024 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// THIS CODE IS GENERATED.
// Generated with command:
// ../../../../../../../tmp/portage/chromeos-base/cryptohome-0.0.2-r5665/work/cryptohome-0.0.2/platform2/libhwsec-foundation/utility/proto_print.py
// --package-dir cryptohome --subdir common --proto-include
// cryptohome/proto_bindings --output-dir
// /build/arm64-generic/var/cache/portage/chromeos-base/cryptohome/out/Default/gen/cryptohome/common
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/auth_factor.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/fido.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/recoverable_key_store.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/key.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/rpc.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/UserDataAuth.proto

#include "cryptohome/common/print_UserDataAuth_proto.h"

#include <inttypes.h>

#include <string>

#include <base/strings/string_number_conversions.h>
#include <base/strings/stringprintf.h>

#include "cryptohome/common/print_auth_factor_proto.h"
#include "cryptohome/common/print_fido_proto.h"
#include "cryptohome/common/print_recoverable_key_store_proto.h"
#include "cryptohome/common/print_rpc_proto.h"

namespace user_data_auth {

std::string GetProtoDebugString(CryptohomeErrorCode value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(CryptohomeErrorCode value,
                                          int indent_size) {
  if (value == CRYPTOHOME_ERROR_NOT_SET) {
    return "CRYPTOHOME_ERROR_NOT_SET";
  }
  if (value == CRYPTOHOME_ERROR_ACCOUNT_NOT_FOUND) {
    return "CRYPTOHOME_ERROR_ACCOUNT_NOT_FOUND";
  }
  if (value == CRYPTOHOME_ERROR_AUTHORIZATION_KEY_NOT_FOUND) {
    return "CRYPTOHOME_ERROR_AUTHORIZATION_KEY_NOT_FOUND";
  }
  if (value == CRYPTOHOME_ERROR_AUTHORIZATION_KEY_FAILED) {
    return "CRYPTOHOME_ERROR_AUTHORIZATION_KEY_FAILED";
  }
  if (value == CRYPTOHOME_ERROR_NOT_IMPLEMENTED) {
    return "CRYPTOHOME_ERROR_NOT_IMPLEMENTED";
  }
  if (value == CRYPTOHOME_ERROR_MOUNT_FATAL) {
    return "CRYPTOHOME_ERROR_MOUNT_FATAL";
  }
  if (value == CRYPTOHOME_ERROR_MOUNT_MOUNT_POINT_BUSY) {
    return "CRYPTOHOME_ERROR_MOUNT_MOUNT_POINT_BUSY";
  }
  if (value == CRYPTOHOME_ERROR_TPM_COMM_ERROR) {
    return "CRYPTOHOME_ERROR_TPM_COMM_ERROR";
  }
  if (value == CRYPTOHOME_ERROR_TPM_DEFEND_LOCK) {
    return "CRYPTOHOME_ERROR_TPM_DEFEND_LOCK";
  }
  if (value == CRYPTOHOME_ERROR_TPM_NEEDS_REBOOT) {
    return "CRYPTOHOME_ERROR_TPM_NEEDS_REBOOT";
  }
  if (value == CRYPTOHOME_ERROR_AUTHORIZATION_KEY_DENIED) {
    return "CRYPTOHOME_ERROR_AUTHORIZATION_KEY_DENIED";
  }
  if (value == CRYPTOHOME_ERROR_KEY_QUOTA_EXCEEDED) {
    return "CRYPTOHOME_ERROR_KEY_QUOTA_EXCEEDED";
  }
  if (value == CRYPTOHOME_ERROR_KEY_LABEL_EXISTS) {
    return "CRYPTOHOME_ERROR_KEY_LABEL_EXISTS";
  }
  if (value == CRYPTOHOME_ERROR_BACKING_STORE_FAILURE) {
    return "CRYPTOHOME_ERROR_BACKING_STORE_FAILURE";
  }
  if (value == CRYPTOHOME_ERROR_UPDATE_SIGNATURE_INVALID) {
    return "CRYPTOHOME_ERROR_UPDATE_SIGNATURE_INVALID";
  }
  if (value == CRYPTOHOME_ERROR_KEY_NOT_FOUND) {
    return "CRYPTOHOME_ERROR_KEY_NOT_FOUND";
  }
  if (value == CRYPTOHOME_ERROR_LOCKBOX_SIGNATURE_INVALID) {
    return "CRYPTOHOME_ERROR_LOCKBOX_SIGNATURE_INVALID";
  }
  if (value == CRYPTOHOME_ERROR_LOCKBOX_CANNOT_SIGN) {
    return "CRYPTOHOME_ERROR_LOCKBOX_CANNOT_SIGN";
  }
  if (value == CRYPTOHOME_ERROR_BOOT_ATTRIBUTE_NOT_FOUND) {
    return "CRYPTOHOME_ERROR_BOOT_ATTRIBUTE_NOT_FOUND";
  }
  if (value == CRYPTOHOME_ERROR_BOOT_ATTRIBUTES_CANNOT_SIGN) {
    return "CRYPTOHOME_ERROR_BOOT_ATTRIBUTES_CANNOT_SIGN";
  }
  if (value == CRYPTOHOME_ERROR_TPM_EK_NOT_AVAILABLE) {
    return "CRYPTOHOME_ERROR_TPM_EK_NOT_AVAILABLE";
  }
  if (value == CRYPTOHOME_ERROR_ATTESTATION_NOT_READY) {
    return "CRYPTOHOME_ERROR_ATTESTATION_NOT_READY";
  }
  if (value == CRYPTOHOME_ERROR_CANNOT_CONNECT_TO_CA) {
    return "CRYPTOHOME_ERROR_CANNOT_CONNECT_TO_CA";
  }
  if (value == CRYPTOHOME_ERROR_CA_REFUSED_ENROLLMENT) {
    return "CRYPTOHOME_ERROR_CA_REFUSED_ENROLLMENT";
  }
  if (value == CRYPTOHOME_ERROR_CA_REFUSED_CERTIFICATE) {
    return "CRYPTOHOME_ERROR_CA_REFUSED_CERTIFICATE";
  }
  if (value == CRYPTOHOME_ERROR_INTERNAL_ATTESTATION_ERROR) {
    return "CRYPTOHOME_ERROR_INTERNAL_ATTESTATION_ERROR";
  }
  if (value == CRYPTOHOME_ERROR_FIRMWARE_MANAGEMENT_PARAMETERS_INVALID) {
    return "CRYPTOHOME_ERROR_FIRMWARE_MANAGEMENT_PARAMETERS_INVALID";
  }
  if (value == CRYPTOHOME_ERROR_FIRMWARE_MANAGEMENT_PARAMETERS_CANNOT_STORE) {
    return "CRYPTOHOME_ERROR_FIRMWARE_MANAGEMENT_PARAMETERS_CANNOT_STORE";
  }
  if (value == CRYPTOHOME_ERROR_FIRMWARE_MANAGEMENT_PARAMETERS_CANNOT_REMOVE) {
    return "CRYPTOHOME_ERROR_FIRMWARE_MANAGEMENT_PARAMETERS_CANNOT_REMOVE";
  }
  if (value == CRYPTOHOME_ERROR_MOUNT_OLD_ENCRYPTION) {
    return "CRYPTOHOME_ERROR_MOUNT_OLD_ENCRYPTION";
  }
  if (value == CRYPTOHOME_ERROR_MOUNT_PREVIOUS_MIGRATION_INCOMPLETE) {
    return "CRYPTOHOME_ERROR_MOUNT_PREVIOUS_MIGRATION_INCOMPLETE";
  }
  if (value == CRYPTOHOME_ERROR_MIGRATE_KEY_FAILED) {
    return "CRYPTOHOME_ERROR_MIGRATE_KEY_FAILED";
  }
  if (value == CRYPTOHOME_ERROR_REMOVE_FAILED) {
    return "CRYPTOHOME_ERROR_REMOVE_FAILED";
  }
  if (value == CRYPTOHOME_ERROR_INVALID_ARGUMENT) {
    return "CRYPTOHOME_ERROR_INVALID_ARGUMENT";
  }
  if (value == CRYPTOHOME_ERROR_INSTALL_ATTRIBUTES_GET_FAILED) {
    return "CRYPTOHOME_ERROR_INSTALL_ATTRIBUTES_GET_FAILED";
  }
  if (value == CRYPTOHOME_ERROR_INSTALL_ATTRIBUTES_SET_FAILED) {
    return "CRYPTOHOME_ERROR_INSTALL_ATTRIBUTES_SET_FAILED";
  }
  if (value == CRYPTOHOME_ERROR_INSTALL_ATTRIBUTES_FINALIZE_FAILED) {
    return "CRYPTOHOME_ERROR_INSTALL_ATTRIBUTES_FINALIZE_FAILED";
  }
  if (value == CRYPTOHOME_ERROR_UPDATE_USER_ACTIVITY_TIMESTAMP_FAILED) {
    return "CRYPTOHOME_ERROR_UPDATE_USER_ACTIVITY_TIMESTAMP_FAILED";
  }
  if (value == CRYPTOHOME_ERROR_FAILED_TO_READ_PCR) {
    return "CRYPTOHOME_ERROR_FAILED_TO_READ_PCR";
  }
  if (value == CRYPTOHOME_ERROR_PCR_ALREADY_EXTENDED) {
    return "CRYPTOHOME_ERROR_PCR_ALREADY_EXTENDED";
  }
  if (value == CRYPTOHOME_ERROR_FAILED_TO_EXTEND_PCR) {
    return "CRYPTOHOME_ERROR_FAILED_TO_EXTEND_PCR";
  }
  if (value == CRYPTOHOME_ERROR_TPM_UPDATE_REQUIRED) {
    return "CRYPTOHOME_ERROR_TPM_UPDATE_REQUIRED";
  }
  if (value == CRYPTOHOME_ERROR_FINGERPRINT_ERROR_INTERNAL) {
    return "CRYPTOHOME_ERROR_FINGERPRINT_ERROR_INTERNAL";
  }
  if (value == CRYPTOHOME_ERROR_FINGERPRINT_RETRY_REQUIRED) {
    return "CRYPTOHOME_ERROR_FINGERPRINT_RETRY_REQUIRED";
  }
  if (value == CRYPTOHOME_ERROR_FINGERPRINT_DENIED) {
    return "CRYPTOHOME_ERROR_FINGERPRINT_DENIED";
  }
  if (value == CRYPTOHOME_ERROR_VAULT_UNRECOVERABLE) {
    return "CRYPTOHOME_ERROR_VAULT_UNRECOVERABLE";
  }
  if (value == CRYPTOHOME_ERROR_FIDO_MAKE_CREDENTIAL_FAILED) {
    return "CRYPTOHOME_ERROR_FIDO_MAKE_CREDENTIAL_FAILED";
  }
  if (value == CRYPTOHOME_ERROR_FIDO_GET_ASSERTION_FAILED) {
    return "CRYPTOHOME_ERROR_FIDO_GET_ASSERTION_FAILED";
  }
  if (value == CRYPTOHOME_TOKEN_SERIALIZATION_FAILED) {
    return "CRYPTOHOME_TOKEN_SERIALIZATION_FAILED";
  }
  if (value == CRYPTOHOME_INVALID_AUTH_SESSION_TOKEN) {
    return "CRYPTOHOME_INVALID_AUTH_SESSION_TOKEN";
  }
  if (value == CRYPTOHOME_ADD_CREDENTIALS_FAILED) {
    return "CRYPTOHOME_ADD_CREDENTIALS_FAILED";
  }
  if (value == CRYPTOHOME_ERROR_UNAUTHENTICATED_AUTH_SESSION) {
    return "CRYPTOHOME_ERROR_UNAUTHENTICATED_AUTH_SESSION";
  }
  if (value == CRYPTOHOME_ERROR_UNKNOWN_LEGACY) {
    return "CRYPTOHOME_ERROR_UNKNOWN_LEGACY";
  }
  if (value == CRYPTOHOME_ERROR_UNUSABLE_VAULT) {
    return "CRYPTOHOME_ERROR_UNUSABLE_VAULT";
  }
  if (value == CRYPTOHOME_REMOVE_CREDENTIALS_FAILED) {
    return "CRYPTOHOME_REMOVE_CREDENTIALS_FAILED";
  }
  if (value == CRYPTOHOME_UPDATE_CREDENTIALS_FAILED) {
    return "CRYPTOHOME_UPDATE_CREDENTIALS_FAILED";
  }
  if (value == CRYPTOHOME_ERROR_RECOVERY_TRANSIENT) {
    return "CRYPTOHOME_ERROR_RECOVERY_TRANSIENT";
  }
  if (value == CRYPTOHOME_ERROR_RECOVERY_FATAL) {
    return "CRYPTOHOME_ERROR_RECOVERY_FATAL";
  }
  if (value == CRYPTOHOME_ERROR_BIOMETRICS_BUSY) {
    return "CRYPTOHOME_ERROR_BIOMETRICS_BUSY";
  }
  if (value == CRYPTOHOME_ERROR_CREDENTIAL_LOCKED) {
    return "CRYPTOHOME_ERROR_CREDENTIAL_LOCKED";
  }
  if (value == CRYPTOHOME_ERROR_CREDENTIAL_EXPIRED) {
    return "CRYPTOHOME_ERROR_CREDENTIAL_EXPIRED";
  }
  if (value == CRYPTOHOME_RELABEL_CREDENTIALS_FAILED) {
    return "CRYPTOHOME_RELABEL_CREDENTIALS_FAILED";
  }
  if (value == CRYPTOHOME_REPLACE_CREDENTIALS_FAILED) {
    return "CRYPTOHOME_REPLACE_CREDENTIALS_FAILED";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(PrimaryAction value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(PrimaryAction value,
                                          int indent_size) {
  if (value == PRIMARY_NO_ERROR) {
    return "PRIMARY_NO_ERROR";
  }
  if (value == PRIMARY_NONE) {
    return "PRIMARY_NONE";
  }
  if (value == PRIMARY_CREATE_REQUIRED) {
    return "PRIMARY_CREATE_REQUIRED";
  }
  if (value == PRIMARY_NOTIFY_OLD_ENCRYPTION_POLICY) {
    return "PRIMARY_NOTIFY_OLD_ENCRYPTION_POLICY";
  }
  if (value == PRIMARY_RESUME_PREVIOUS_MIGRATION) {
    return "PRIMARY_RESUME_PREVIOUS_MIGRATION";
  }
  if (value == PRIMARY_TPM_UDPATE_REQUIRED) {
    return "PRIMARY_TPM_UDPATE_REQUIRED";
  }
  if (value == PRIMARY_TPM_NEEDS_REBOOT) {
    return "PRIMARY_TPM_NEEDS_REBOOT";
  }
  if (value == PRIMARY_TPM_LOCKOUT) {
    return "PRIMARY_TPM_LOCKOUT";
  }
  if (value == PRIMARY_INCORRECT_AUTH) {
    return "PRIMARY_INCORRECT_AUTH";
  }
  if (value == PRIMARY_LE_LOCKED_OUT) {
    return "PRIMARY_LE_LOCKED_OUT";
  }
  if (value == PRIMARY_LE_EXPIRED) {
    return "PRIMARY_LE_EXPIRED";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(PossibleAction value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(PossibleAction value,
                                          int indent_size) {
  if (value == POSSIBLY_NONE) {
    return "POSSIBLY_NONE";
  }
  if (value == POSSIBLY_RETRY) {
    return "POSSIBLY_RETRY";
  }
  if (value == POSSIBLY_REBOOT) {
    return "POSSIBLY_REBOOT";
  }
  if (value == POSSIBLY_AUTH) {
    return "POSSIBLY_AUTH";
  }
  if (value == POSSIBLY_DELETE_VAULT) {
    return "POSSIBLY_DELETE_VAULT";
  }
  if (value == POSSIBLY_POWERWASH) {
    return "POSSIBLY_POWERWASH";
  }
  if (value == POSSIBLY_DEV_CHECK_UNEXPECTED_STATE) {
    return "POSSIBLY_DEV_CHECK_UNEXPECTED_STATE";
  }
  if (value == POSSIBLY_FATAL) {
    return "POSSIBLY_FATAL";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(DircryptoMigrationStatus value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(DircryptoMigrationStatus value,
                                          int indent_size) {
  if (value == DIRCRYPTO_MIGRATION_SUCCESS) {
    return "DIRCRYPTO_MIGRATION_SUCCESS";
  }
  if (value == DIRCRYPTO_MIGRATION_FAILED) {
    return "DIRCRYPTO_MIGRATION_FAILED";
  }
  if (value == DIRCRYPTO_MIGRATION_INITIALIZING) {
    return "DIRCRYPTO_MIGRATION_INITIALIZING";
  }
  if (value == DIRCRYPTO_MIGRATION_IN_PROGRESS) {
    return "DIRCRYPTO_MIGRATION_IN_PROGRESS";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(AuthSessionFlags value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(AuthSessionFlags value,
                                          int indent_size) {
  if (value == AUTH_SESSION_FLAGS_NONE) {
    return "AUTH_SESSION_FLAGS_NONE";
  }
  if (value == AUTH_SESSION_FLAGS_EPHEMERAL_USER) {
    return "AUTH_SESSION_FLAGS_EPHEMERAL_USER";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(AuthSessionStatus value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(AuthSessionStatus value,
                                          int indent_size) {
  if (value == AUTH_SESSION_STATUS_NOT_SET) {
    return "AUTH_SESSION_STATUS_NOT_SET";
  }
  if (value == AUTH_SESSION_STATUS_FURTHER_FACTOR_REQUIRED) {
    return "AUTH_SESSION_STATUS_FURTHER_FACTOR_REQUIRED";
  }
  if (value == AUTH_SESSION_STATUS_AUTHENTICATED) {
    return "AUTH_SESSION_STATUS_AUTHENTICATED";
  }
  if (value == AUTH_SESSION_STATUS_INVALID_AUTH_SESSION) {
    return "AUTH_SESSION_STATUS_INVALID_AUTH_SESSION";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(VaultEncryptionType value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(VaultEncryptionType value,
                                          int indent_size) {
  if (value == CRYPTOHOME_VAULT_ENCRYPTION_ANY) {
    return "CRYPTOHOME_VAULT_ENCRYPTION_ANY";
  }
  if (value == CRYPTOHOME_VAULT_ENCRYPTION_ECRYPTFS) {
    return "CRYPTOHOME_VAULT_ENCRYPTION_ECRYPTFS";
  }
  if (value == CRYPTOHOME_VAULT_ENCRYPTION_FSCRYPT) {
    return "CRYPTOHOME_VAULT_ENCRYPTION_FSCRYPT";
  }
  if (value == CRYPTOHOME_VAULT_ENCRYPTION_DMCRYPT) {
    return "CRYPTOHOME_VAULT_ENCRYPTION_DMCRYPT";
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

std::string GetProtoDebugString(GetRecoveryRequestRequest_UserType value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    GetRecoveryRequestRequest_UserType value,
    int indent_size) {
  if (value == GetRecoveryRequestRequest_UserType_UNKNOWN) {
    return "GetRecoveryRequestRequest_UserType_UNKNOWN";
  }
  if (value == GetRecoveryRequestRequest_UserType_GAIA_ID) {
    return "GetRecoveryRequestRequest_UserType_GAIA_ID";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(FingerprintScanResult value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(FingerprintScanResult value,
                                          int indent_size) {
  if (value == FINGERPRINT_SCAN_RESULT_SUCCESS) {
    return "FINGERPRINT_SCAN_RESULT_SUCCESS";
  }
  if (value == FINGERPRINT_SCAN_RESULT_RETRY) {
    return "FINGERPRINT_SCAN_RESULT_RETRY";
  }
  if (value == FINGERPRINT_SCAN_RESULT_LOCKOUT) {
    return "FINGERPRINT_SCAN_RESULT_LOCKOUT";
  }
  if (value == FINGERPRINT_SCAN_RESULT_FATAL_ERROR) {
    return "FINGERPRINT_SCAN_RESULT_FATAL_ERROR";
  }
  if (value == FINGERPRINT_SCAN_RESULT_PARTIAL) {
    return "FINGERPRINT_SCAN_RESULT_PARTIAL";
  }
  if (value == FINGERPRINT_SCAN_RESULT_INSUFFICIENT) {
    return "FINGERPRINT_SCAN_RESULT_INSUFFICIENT";
  }
  if (value == FINGERPRINT_SCAN_RESULT_SENSOR_DIRTY) {
    return "FINGERPRINT_SCAN_RESULT_SENSOR_DIRTY";
  }
  if (value == FINGERPRINT_SCAN_RESULT_TOO_SLOW) {
    return "FINGERPRINT_SCAN_RESULT_TOO_SLOW";
  }
  if (value == FINGERPRINT_SCAN_RESULT_TOO_FAST) {
    return "FINGERPRINT_SCAN_RESULT_TOO_FAST";
  }
  if (value == FINGERPRINT_SCAN_RESULT_IMMOBILE) {
    return "FINGERPRINT_SCAN_RESULT_IMMOBILE";
  }
  if (value == FINGERPRINT_SCAN_RESULT_ENROLL_OTHER) {
    return "FINGERPRINT_SCAN_RESULT_ENROLL_OTHER";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(const CryptohomeErrorInfo& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const CryptohomeErrorInfo& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_error_id(); }) {
      if (!value.has_error_id()) {
        return;
      }
    }
    output += indent + "  error_id: ";
    base::StringAppendF(&output, "%s", value.error_id().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_readable_error_id(); }) {
      if (!value.has_readable_error_id()) {
        return;
      }
    }
    output += indent + "  readable_error_id: ";
    base::StringAppendF(&output, "%s", value.readable_error_id().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_primary_action(); }) {
      if (!value.has_primary_action()) {
        return;
      }
    }
    output += indent + "  primary_action: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.primary_action(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "  possible_actions: {";
  for (int i = 0; i < value.possible_actions_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(value.possible_actions(i),
                                                      indent_size + 4)
                            .c_str());
    if (i == value.possible_actions_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const IsMountedRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const IsMountedRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_username(); }) {
      if (!value.has_username()) {
        return;
      }
    }
    output += indent + "  username: ";
    base::StringAppendF(&output, "%s", value.username().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const IsMountedReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const IsMountedReply& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_is_mounted(); }) {
      if (!value.has_is_mounted()) {
        return;
      }
    }
    output += indent + "  is_mounted: ";
    base::StringAppendF(&output, "%s", value.is_mounted() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_is_ephemeral_mount(); }) {
      if (!value.has_is_ephemeral_mount()) {
        return;
      }
    }
    output += indent + "  is_ephemeral_mount: ";
    base::StringAppendF(&output, "%s",
                        value.is_ephemeral_mount() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const EvictDeviceKeyReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const EvictDeviceKeyReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const EvictDeviceKeyRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const EvictDeviceKeyRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_eviction_id(); }) {
      if (!value.has_eviction_id()) {
        return;
      }
    }
    output += indent + "  eviction_id: ";
    base::StringAppendF(&output, "%" PRId64, value.eviction_id());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const RestoreDeviceKeyRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const RestoreDeviceKeyRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_session_id(); }) {
      if (!value.has_auth_session_id()) {
        return;
      }
    }
    output += indent + "  auth_session_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.auth_session_id().data(),
                                        value.auth_session_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const RestoreDeviceKeyReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const RestoreDeviceKeyReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const UnmountRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const UnmountRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const UnmountReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const UnmountReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const RemoveRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const RemoveRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_identifier(); }) {
      if (!value.has_identifier()) {
        return;
      }
    }
    output += indent + "  identifier: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.identifier(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_session_id(); }) {
      if (!value.has_auth_session_id()) {
        return;
      }
    }
    output += indent + "  auth_session_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.auth_session_id().data(),
                                        value.auth_session_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const RemoveReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const RemoveReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(
    const StartFingerprintAuthSessionRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const StartFingerprintAuthSessionRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_account_id(); }) {
      if (!value.has_account_id()) {
        return;
      }
    }
    output += indent + "  account_id: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.account_id(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const StartFingerprintAuthSessionReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const StartFingerprintAuthSessionReply& value,
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

std::string GetProtoDebugString(const EndFingerprintAuthSessionRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const EndFingerprintAuthSessionRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const EndFingerprintAuthSessionReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const EndFingerprintAuthSessionReply& value,
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

std::string GetProtoDebugString(const GetWebAuthnSecretRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const GetWebAuthnSecretRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_account_id(); }) {
      if (!value.has_account_id()) {
        return;
      }
    }
    output += indent + "  account_id: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.account_id(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetWebAuthnSecretReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const GetWebAuthnSecretReply& value,
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
    if constexpr (requires(T t) { t.has_webauthn_secret(); }) {
      if (!value.has_webauthn_secret()) {
        return;
      }
    }
    output += indent + "  webauthn_secret: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.webauthn_secret().data(),
                                        value.webauthn_secret().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetWebAuthnSecretHashRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const GetWebAuthnSecretHashRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_account_id(); }) {
      if (!value.has_account_id()) {
        return;
      }
    }
    output += indent + "  account_id: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.account_id(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetWebAuthnSecretHashReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const GetWebAuthnSecretHashReply& value,
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
    if constexpr (requires(T t) { t.has_webauthn_secret_hash(); }) {
      if (!value.has_webauthn_secret_hash()) {
        return;
      }
    }
    output += indent + "  webauthn_secret_hash: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.webauthn_secret_hash().data(),
                                        value.webauthn_secret_hash().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetHibernateSecretRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const GetHibernateSecretRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_account_id(); }) {
      if (!value.has_account_id()) {
        return;
      }
    }
    output += indent + "  account_id: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.account_id(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_session_id(); }) {
      if (!value.has_auth_session_id()) {
        return;
      }
    }
    output += indent + "  auth_session_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.auth_session_id().data(),
                                        value.auth_session_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetHibernateSecretReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const GetHibernateSecretReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_hibernate_secret(); }) {
      if (!value.has_hibernate_secret()) {
        return;
      }
    }
    output += indent + "  hibernate_secret: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.hibernate_secret().data(),
                                        value.hibernate_secret().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetEncryptionInfoRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const GetEncryptionInfoRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetEncryptionInfoReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const GetEncryptionInfoReply& value,
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
    if constexpr (requires(T t) { t.has_keylocker_supported(); }) {
      if (!value.has_keylocker_supported()) {
        return;
      }
    }
    output += indent + "  keylocker_supported: ";
    base::StringAppendF(&output, "%s",
                        value.keylocker_supported() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const StartMigrateToDircryptoRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const StartMigrateToDircryptoRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_account_id(); }) {
      if (!value.has_account_id()) {
        return;
      }
    }
    output += indent + "  account_id: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.account_id(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_minimal_migration(); }) {
      if (!value.has_minimal_migration()) {
        return;
      }
    }
    output += indent + "  minimal_migration: ";
    base::StringAppendF(&output, "%s",
                        value.minimal_migration() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_session_id(); }) {
      if (!value.has_auth_session_id()) {
        return;
      }
    }
    output += indent + "  auth_session_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.auth_session_id().data(),
                                        value.auth_session_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const StartMigrateToDircryptoReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const StartMigrateToDircryptoReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const DircryptoMigrationProgress& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const DircryptoMigrationProgress& value,
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
    if constexpr (requires(T t) { t.has_current_bytes(); }) {
      if (!value.has_current_bytes()) {
        return;
      }
    }
    output += indent + "  current_bytes: ";
    base::StringAppendF(&output, "%" PRIu64 " (0x%016" PRIX64 ")",
                        value.current_bytes(), value.current_bytes());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_total_bytes(); }) {
      if (!value.has_total_bytes()) {
        return;
      }
    }
    output += indent + "  total_bytes: ";
    base::StringAppendF(&output, "%" PRIu64 " (0x%016" PRIX64 ")",
                        value.total_bytes(), value.total_bytes());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const NeedsDircryptoMigrationRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const NeedsDircryptoMigrationRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_account_id(); }) {
      if (!value.has_account_id()) {
        return;
      }
    }
    output += indent + "  account_id: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.account_id(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const NeedsDircryptoMigrationReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const NeedsDircryptoMigrationReply& value,
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
    if constexpr (requires(T t) { t.has_needs_dircrypto_migration(); }) {
      if (!value.has_needs_dircrypto_migration()) {
        return;
      }
    }
    output += indent + "  needs_dircrypto_migration: ";
    base::StringAppendF(&output, "%s",
                        value.needs_dircrypto_migration() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetSupportedKeyPoliciesRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const GetSupportedKeyPoliciesRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetSupportedKeyPoliciesReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const GetSupportedKeyPoliciesReply& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) {
                    t.has_low_entropy_credentials_supported();
                  }) {
      if (!value.has_low_entropy_credentials_supported()) {
        return;
      }
    }
    output += indent + "  low_entropy_credentials_supported: ";
    base::StringAppendF(
        &output, "%s",
        value.low_entropy_credentials_supported() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetAccountDiskUsageRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const GetAccountDiskUsageRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_identifier(); }) {
      if (!value.has_identifier()) {
        return;
      }
    }
    output += indent + "  identifier: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.identifier(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetAccountDiskUsageReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const GetAccountDiskUsageReply& value,
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
    if constexpr (requires(T t) { t.has_size(); }) {
      if (!value.has_size()) {
        return;
      }
    }
    output += indent + "  size: ";
    base::StringAppendF(&output, "%" PRId64, value.size());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const LowDiskSpace& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const LowDiskSpace& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_disk_free_bytes(); }) {
      if (!value.has_disk_free_bytes()) {
        return;
      }
    }
    output += indent + "  disk_free_bytes: ";
    base::StringAppendF(&output, "%" PRIu64 " (0x%016" PRIX64 ")",
                        value.disk_free_bytes(), value.disk_free_bytes());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const StartAuthSessionRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const StartAuthSessionRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_account_id(); }) {
      if (!value.has_account_id()) {
        return;
      }
    }
    output += indent + "  account_id: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.account_id(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
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
    if constexpr (requires(T t) { t.has_intent(); }) {
      if (!value.has_intent()) {
        return;
      }
    }
    output += indent + "  intent: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.intent(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const StatusInfo& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const StatusInfo& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_time_available_in(); }) {
      if (!value.has_time_available_in()) {
        return;
      }
    }
    output += indent + "  time_available_in: ";
    base::StringAppendF(&output, "%" PRIu64 " (0x%016" PRIX64 ")",
                        value.time_available_in(), value.time_available_in());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const AuthFactorWithStatus& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const AuthFactorWithStatus& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_factor(); }) {
      if (!value.has_auth_factor()) {
        return;
      }
    }
    output += indent + "  auth_factor: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.auth_factor(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "  available_for_intents: {";
  for (int i = 0; i < value.available_for_intents_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.available_for_intents(i), indent_size + 4)
                            .c_str());
    if (i == value.available_for_intents_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_status_info(); }) {
      if (!value.has_status_info()) {
        return;
      }
    }
    output += indent + "  status_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.status_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const AuthFactorStatusUpdate& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const AuthFactorStatusUpdate& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_broadcast_id(); }) {
      if (!value.has_broadcast_id()) {
        return;
      }
    }
    output += indent + "  broadcast_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.broadcast_id().data(),
                                        value.broadcast_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_factor_with_status(); }) {
      if (!value.has_auth_factor_with_status()) {
        return;
      }
    }
    output += indent + "  auth_factor_with_status: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.auth_factor_with_status(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const AuthSessionProperties& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const AuthSessionProperties& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "  authorized_for: {";
  for (int i = 0; i < value.authorized_for_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.authorized_for(i), indent_size + 4)
            .c_str());
    if (i == value.authorized_for_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_seconds_left(); }) {
      if (!value.has_seconds_left()) {
        return;
      }
    }
    output += indent + "  seconds_left: ";
    base::StringAppendF(&output, "%" PRIu32 " (0x%08" PRIX32 ")",
                        value.seconds_left(), value.seconds_left());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const StartAuthSessionReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const StartAuthSessionReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_session_id(); }) {
      if (!value.has_auth_session_id()) {
        return;
      }
    }
    output += indent + "  auth_session_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.auth_session_id().data(),
                                        value.auth_session_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_broadcast_id(); }) {
      if (!value.has_broadcast_id()) {
        return;
      }
    }
    output += indent + "  broadcast_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.broadcast_id().data(),
                                        value.broadcast_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_user_exists(); }) {
      if (!value.has_user_exists()) {
        return;
      }
    }
    output += indent + "  user_exists: ";
    base::StringAppendF(&output, "%s", value.user_exists() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "  auth_factors: {";
  for (int i = 0; i < value.auth_factors_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.auth_factors(i), indent_size + 4)
            .c_str());
    if (i == value.auth_factors_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  output += indent + "  configured_auth_factors_with_status: {";
  for (int i = 0; i < value.configured_auth_factors_with_status_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(
            value.configured_auth_factors_with_status(i), indent_size + 4)
            .c_str());
    if (i == value.configured_auth_factors_with_status_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const InvalidateAuthSessionRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const InvalidateAuthSessionRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_session_id(); }) {
      if (!value.has_auth_session_id()) {
        return;
      }
    }
    output += indent + "  auth_session_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.auth_session_id().data(),
                                        value.auth_session_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const InvalidateAuthSessionReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const InvalidateAuthSessionReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const ExtendAuthSessionRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const ExtendAuthSessionRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_session_id(); }) {
      if (!value.has_auth_session_id()) {
        return;
      }
    }
    output += indent + "  auth_session_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.auth_session_id().data(),
                                        value.auth_session_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_extension_duration(); }) {
      if (!value.has_extension_duration()) {
        return;
      }
    }
    output += indent + "  extension_duration: ";
    base::StringAppendF(&output, "%" PRIu32 " (0x%08" PRIX32 ")",
                        value.extension_duration(), value.extension_duration());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const ExtendAuthSessionReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const ExtendAuthSessionReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_seconds_left(); }) {
      if (!value.has_seconds_left()) {
        return;
      }
    }
    output += indent + "  seconds_left: ";
    base::StringAppendF(&output, "%" PRIu32 " (0x%08" PRIX32 ")",
                        value.seconds_left(), value.seconds_left());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const CreatePersistentUserRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const CreatePersistentUserRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_session_id(); }) {
      if (!value.has_auth_session_id()) {
        return;
      }
    }
    output += indent + "  auth_session_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.auth_session_id().data(),
                                        value.auth_session_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const AuthFactorAdded& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const AuthFactorAdded& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_broadcast_id(); }) {
      if (!value.has_broadcast_id()) {
        return;
      }
    }
    output += indent + "  broadcast_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.broadcast_id().data(),
                                        value.broadcast_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_factor(); }) {
      if (!value.has_auth_factor()) {
        return;
      }
    }
    output += indent + "  auth_factor: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.auth_factor(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const AuthFactorRemoved& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const AuthFactorRemoved& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_broadcast_id(); }) {
      if (!value.has_broadcast_id()) {
        return;
      }
    }
    output += indent + "  broadcast_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.broadcast_id().data(),
                                        value.broadcast_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_factor(); }) {
      if (!value.has_auth_factor()) {
        return;
      }
    }
    output += indent + "  auth_factor: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.auth_factor(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const AuthFactorUpdated& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const AuthFactorUpdated& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_broadcast_id(); }) {
      if (!value.has_broadcast_id()) {
        return;
      }
    }
    output += indent + "  broadcast_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.broadcast_id().data(),
                                        value.broadcast_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_factor(); }) {
      if (!value.has_auth_factor()) {
        return;
      }
    }
    output += indent + "  auth_factor: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.auth_factor(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const AuthSessionExpiring& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const AuthSessionExpiring& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_broadcast_id(); }) {
      if (!value.has_broadcast_id()) {
        return;
      }
    }
    output += indent + "  broadcast_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.broadcast_id().data(),
                                        value.broadcast_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_time_left(); }) {
      if (!value.has_time_left()) {
        return;
      }
    }
    output += indent + "  time_left: ";
    base::StringAppendF(&output, "%" PRIu32 " (0x%08" PRIX32 ")",
                        value.time_left(), value.time_left());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const CreatePersistentUserReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const CreatePersistentUserReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_sanitized_username(); }) {
      if (!value.has_sanitized_username()) {
        return;
      }
    }
    output += indent + "  sanitized_username: ";
    base::StringAppendF(&output, "%s", value.sanitized_username().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_properties(); }) {
      if (!value.has_auth_properties()) {
        return;
      }
    }
    output += indent + "  auth_properties: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.auth_properties(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const PrepareGuestVaultRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const PrepareGuestVaultRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const PrepareGuestVaultReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const PrepareGuestVaultReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_sanitized_username(); }) {
      if (!value.has_sanitized_username()) {
        return;
      }
    }
    output += indent + "  sanitized_username: ";
    base::StringAppendF(&output, "%s", value.sanitized_username().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const PrepareEphemeralVaultRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const PrepareEphemeralVaultRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_session_id(); }) {
      if (!value.has_auth_session_id()) {
        return;
      }
    }
    output += indent + "  auth_session_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.auth_session_id().data(),
                                        value.auth_session_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const PrepareEphemeralVaultReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const PrepareEphemeralVaultReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_sanitized_username(); }) {
      if (!value.has_sanitized_username()) {
        return;
      }
    }
    output += indent + "  sanitized_username: ";
    base::StringAppendF(&output, "%s", value.sanitized_username().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_properties(); }) {
      if (!value.has_auth_properties()) {
        return;
      }
    }
    output += indent + "  auth_properties: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.auth_properties(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetAuthSessionStatusRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const GetAuthSessionStatusRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_session_id(); }) {
      if (!value.has_auth_session_id()) {
        return;
      }
    }
    output += indent + "  auth_session_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.auth_session_id().data(),
                                        value.auth_session_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetAuthSessionStatusReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const GetAuthSessionStatusReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
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
    if constexpr (requires(T t) { t.has_time_left(); }) {
      if (!value.has_time_left()) {
        return;
      }
    }
    output += indent + "  time_left: ";
    base::StringAppendF(&output, "%" PRIu32 " (0x%08" PRIX32 ")",
                        value.time_left(), value.time_left());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "  authorized_for: {";
  for (int i = 0; i < value.authorized_for_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.authorized_for(i), indent_size + 4)
            .c_str());
    if (i == value.authorized_for_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_properties(); }) {
      if (!value.has_auth_properties()) {
        return;
      }
    }
    output += indent + "  auth_properties: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.auth_properties(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const PreparePersistentVaultRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const PreparePersistentVaultRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_session_id(); }) {
      if (!value.has_auth_session_id()) {
        return;
      }
    }
    output += indent + "  auth_session_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.auth_session_id().data(),
                                        value.auth_session_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_block_ecryptfs(); }) {
      if (!value.has_block_ecryptfs()) {
        return;
      }
    }
    output += indent + "  block_ecryptfs: ";
    base::StringAppendF(&output, "%s",
                        value.block_ecryptfs() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_encryption_type(); }) {
      if (!value.has_encryption_type()) {
        return;
      }
    }
    output += indent + "  encryption_type: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.encryption_type(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const PreparePersistentVaultReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const PreparePersistentVaultReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_sanitized_username(); }) {
      if (!value.has_sanitized_username()) {
        return;
      }
    }
    output += indent + "  sanitized_username: ";
    base::StringAppendF(&output, "%s", value.sanitized_username().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const PrepareVaultForMigrationRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const PrepareVaultForMigrationRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_session_id(); }) {
      if (!value.has_auth_session_id()) {
        return;
      }
    }
    output += indent + "  auth_session_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.auth_session_id().data(),
                                        value.auth_session_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const PrepareVaultForMigrationReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const PrepareVaultForMigrationReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_sanitized_username(); }) {
      if (!value.has_sanitized_username()) {
        return;
      }
    }
    output += indent + "  sanitized_username: ";
    base::StringAppendF(&output, "%s", value.sanitized_username().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetArcDiskFeaturesRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const GetArcDiskFeaturesRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetArcDiskFeaturesReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const GetArcDiskFeaturesReply& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_quota_supported(); }) {
      if (!value.has_quota_supported()) {
        return;
      }
    }
    output += indent + "  quota_supported: ";
    base::StringAppendF(&output, "%s",
                        value.quota_supported() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const TpmTokenInfo& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const TpmTokenInfo& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_label(); }) {
      if (!value.has_label()) {
        return;
      }
    }
    output += indent + "  label: ";
    base::StringAppendF(&output, "%s", value.label().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_user_pin(); }) {
      if (!value.has_user_pin()) {
        return;
      }
    }
    output += indent + "  user_pin: ";
    base::StringAppendF(&output, "%s", value.user_pin().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_slot(); }) {
      if (!value.has_slot()) {
        return;
      }
    }
    output += indent + "  slot: ";
    base::StringAppendF(&output, "%" PRId32, value.slot());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const Pkcs11IsTpmTokenReadyRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const Pkcs11IsTpmTokenReadyRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const Pkcs11IsTpmTokenReadyReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const Pkcs11IsTpmTokenReadyReply& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_ready(); }) {
      if (!value.has_ready()) {
        return;
      }
    }
    output += indent + "  ready: ";
    base::StringAppendF(&output, "%s", value.ready() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const Pkcs11GetTpmTokenInfoRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const Pkcs11GetTpmTokenInfoRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_username(); }) {
      if (!value.has_username()) {
        return;
      }
    }
    output += indent + "  username: ";
    base::StringAppendF(&output, "%s", value.username().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const Pkcs11GetTpmTokenInfoReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const Pkcs11GetTpmTokenInfoReply& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_token_info(); }) {
      if (!value.has_token_info()) {
        return;
      }
    }
    output += indent + "  token_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.token_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const Pkcs11TerminateRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const Pkcs11TerminateRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_username(); }) {
      if (!value.has_username()) {
        return;
      }
    }
    output += indent + "  username: ";
    base::StringAppendF(&output, "%s", value.username().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const Pkcs11TerminateReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const Pkcs11TerminateReply& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const Pkcs11RestoreTpmTokensRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const Pkcs11RestoreTpmTokensRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const Pkcs11RestoreTpmTokensReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const Pkcs11RestoreTpmTokensReply& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
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

std::string GetProtoDebugString(const GetSystemSaltRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const GetSystemSaltRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetSystemSaltReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const GetSystemSaltReply& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_salt(); }) {
      if (!value.has_salt()) {
        return;
      }
    }
    output += indent + "  salt: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.salt().data(), value.salt().size()).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(
    const UpdateCurrentUserActivityTimestampRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const UpdateCurrentUserActivityTimestampRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_time_shift_sec(); }) {
      if (!value.has_time_shift_sec()) {
        return;
      }
    }
    output += indent + "  time_shift_sec: ";
    base::StringAppendF(&output, "%" PRId32, value.time_shift_sec());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(
    const UpdateCurrentUserActivityTimestampReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const UpdateCurrentUserActivityTimestampReply& value,
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

std::string GetProtoDebugString(const GetSanitizedUsernameRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const GetSanitizedUsernameRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_username(); }) {
      if (!value.has_username()) {
        return;
      }
    }
    output += indent + "  username: ";
    base::StringAppendF(&output, "%s", value.username().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetSanitizedUsernameReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const GetSanitizedUsernameReply& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_sanitized_username(); }) {
      if (!value.has_sanitized_username()) {
        return;
      }
    }
    output += indent + "  sanitized_username: ";
    base::StringAppendF(&output, "%s", value.sanitized_username().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetLoginStatusRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const GetLoginStatusRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetLoginStatusReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const GetLoginStatusReply& value,
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
    if constexpr (requires(T t) { t.has_owner_user_exists(); }) {
      if (!value.has_owner_user_exists()) {
        return;
      }
    }
    output += indent + "  owner_user_exists: ";
    base::StringAppendF(&output, "%s",
                        value.owner_user_exists() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_is_locked_to_single_user(); }) {
      if (!value.has_is_locked_to_single_user()) {
        return;
      }
    }
    output += indent + "  is_locked_to_single_user: ";
    base::StringAppendF(&output, "%s",
                        value.is_locked_to_single_user() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(
    const LockToSingleUserMountUntilRebootRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const LockToSingleUserMountUntilRebootRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_account_id(); }) {
      if (!value.has_account_id()) {
        return;
      }
    }
    output += indent + "  account_id: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.account_id(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(
    const LockToSingleUserMountUntilRebootReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const LockToSingleUserMountUntilRebootReply& value,
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

std::string GetProtoDebugString(const GetRsuDeviceIdReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const GetRsuDeviceIdReply& value,
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
    if constexpr (requires(T t) { t.has_rsu_device_id(); }) {
      if (!value.has_rsu_device_id()) {
        return;
      }
    }
    output += indent + "  rsu_device_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.rsu_device_id().data(),
                                        value.rsu_device_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetRsuDeviceIdRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const GetRsuDeviceIdRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const ResetApplicationContainerRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const ResetApplicationContainerRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_account_id(); }) {
      if (!value.has_account_id()) {
        return;
      }
    }
    output += indent + "  account_id: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.account_id(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_application_name(); }) {
      if (!value.has_application_name()) {
        return;
      }
    }
    output += indent + "  application_name: ";
    base::StringAppendF(&output, "%s", value.application_name().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const ResetApplicationContainerReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const ResetApplicationContainerReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const FidoMakeCredentialRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const FidoMakeCredentialRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_account_id(); }) {
      if (!value.has_account_id()) {
        return;
      }
    }
    output += indent + "  account_id: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.account_id(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_make_credential_options(); }) {
      if (!value.has_make_credential_options()) {
        return;
      }
    }
    output += indent + "  make_credential_options: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.make_credential_options(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const FidoMakeCredentialReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const FidoMakeCredentialReply& value,
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
    if constexpr (requires(T t) { t.has_make_credential_response(); }) {
      if (!value.has_make_credential_response()) {
        return;
      }
    }
    output += indent + "  make_credential_response: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.make_credential_response(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const FidoGetAssertionRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const FidoGetAssertionRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_get_assertion_options(); }) {
      if (!value.has_get_assertion_options()) {
        return;
      }
    }
    output += indent + "  get_assertion_options: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.get_assertion_options(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const FidoGetAssertionReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const FidoGetAssertionReply& value,
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
    if constexpr (requires(T t) { t.has_get_assertion_response(); }) {
      if (!value.has_get_assertion_response()) {
        return;
      }
    }
    output += indent + "  get_assertion_response: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.get_assertion_response(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const AddAuthFactorRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const AddAuthFactorRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_session_id(); }) {
      if (!value.has_auth_session_id()) {
        return;
      }
    }
    output += indent + "  auth_session_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.auth_session_id().data(),
                                        value.auth_session_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_factor(); }) {
      if (!value.has_auth_factor()) {
        return;
      }
    }
    output += indent + "  auth_factor: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.auth_factor(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_input(); }) {
      if (!value.has_auth_input()) {
        return;
      }
    }
    output += indent + "  auth_input: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.auth_input(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const AddAuthFactorReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const AddAuthFactorReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_added_auth_factor(); }) {
      if (!value.has_added_auth_factor()) {
        return;
      }
    }
    output += indent + "  added_auth_factor: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(value.added_auth_factor(),
                                                      indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const AuthenticateAuthFactorRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const AuthenticateAuthFactorRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_session_id(); }) {
      if (!value.has_auth_session_id()) {
        return;
      }
    }
    output += indent + "  auth_session_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.auth_session_id().data(),
                                        value.auth_session_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_factor_label(); }) {
      if (!value.has_auth_factor_label()) {
        return;
      }
    }
    output += indent + "  auth_factor_label: ";
    base::StringAppendF(&output, "%s", value.auth_factor_label().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_input(); }) {
      if (!value.has_auth_input()) {
        return;
      }
    }
    output += indent + "  auth_input: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.auth_input(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "  auth_factor_labels: {";
  for (int i = 0; i < value.auth_factor_labels_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(&output, "%s", value.auth_factor_labels(i).c_str());
    if (i == value.auth_factor_labels_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const AuthenticateAuthFactorReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const AuthenticateAuthFactorReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "  authorized_for: {";
  for (int i = 0; i < value.authorized_for_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.authorized_for(i), indent_size + 4)
            .c_str());
    if (i == value.authorized_for_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_seconds_left(); }) {
      if (!value.has_seconds_left()) {
        return;
      }
    }
    output += indent + "  seconds_left: ";
    base::StringAppendF(&output, "%" PRIu32 " (0x%08" PRIX32 ")",
                        value.seconds_left(), value.seconds_left());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_properties(); }) {
      if (!value.has_auth_properties()) {
        return;
      }
    }
    output += indent + "  auth_properties: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.auth_properties(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const UpdateAuthFactorRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const UpdateAuthFactorRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_session_id(); }) {
      if (!value.has_auth_session_id()) {
        return;
      }
    }
    output += indent + "  auth_session_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.auth_session_id().data(),
                                        value.auth_session_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_factor_label(); }) {
      if (!value.has_auth_factor_label()) {
        return;
      }
    }
    output += indent + "  auth_factor_label: ";
    base::StringAppendF(&output, "%s", value.auth_factor_label().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_factor(); }) {
      if (!value.has_auth_factor()) {
        return;
      }
    }
    output += indent + "  auth_factor: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.auth_factor(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_input(); }) {
      if (!value.has_auth_input()) {
        return;
      }
    }
    output += indent + "  auth_input: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.auth_input(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const UpdateAuthFactorReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const UpdateAuthFactorReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_updated_auth_factor(); }) {
      if (!value.has_updated_auth_factor()) {
        return;
      }
    }
    output += indent + "  updated_auth_factor: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.updated_auth_factor(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const UpdateAuthFactorMetadataRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const UpdateAuthFactorMetadataRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_session_id(); }) {
      if (!value.has_auth_session_id()) {
        return;
      }
    }
    output += indent + "  auth_session_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.auth_session_id().data(),
                                        value.auth_session_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_factor_label(); }) {
      if (!value.has_auth_factor_label()) {
        return;
      }
    }
    output += indent + "  auth_factor_label: ";
    base::StringAppendF(&output, "%s", value.auth_factor_label().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_factor(); }) {
      if (!value.has_auth_factor()) {
        return;
      }
    }
    output += indent + "  auth_factor: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.auth_factor(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const UpdateAuthFactorMetadataReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const UpdateAuthFactorMetadataReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_updated_auth_factor(); }) {
      if (!value.has_updated_auth_factor()) {
        return;
      }
    }
    output += indent + "  updated_auth_factor: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.updated_auth_factor(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const RelabelAuthFactorRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const RelabelAuthFactorRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_session_id(); }) {
      if (!value.has_auth_session_id()) {
        return;
      }
    }
    output += indent + "  auth_session_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.auth_session_id().data(),
                                        value.auth_session_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_factor_label(); }) {
      if (!value.has_auth_factor_label()) {
        return;
      }
    }
    output += indent + "  auth_factor_label: ";
    base::StringAppendF(&output, "%s", value.auth_factor_label().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_new_auth_factor_label(); }) {
      if (!value.has_new_auth_factor_label()) {
        return;
      }
    }
    output += indent + "  new_auth_factor_label: ";
    base::StringAppendF(&output, "%s", value.new_auth_factor_label().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const RelabelAuthFactorReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const RelabelAuthFactorReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_relabelled_auth_factor(); }) {
      if (!value.has_relabelled_auth_factor()) {
        return;
      }
    }
    output += indent + "  relabelled_auth_factor: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.relabelled_auth_factor(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const ReplaceAuthFactorRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const ReplaceAuthFactorRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_session_id(); }) {
      if (!value.has_auth_session_id()) {
        return;
      }
    }
    output += indent + "  auth_session_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.auth_session_id().data(),
                                        value.auth_session_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_factor_label(); }) {
      if (!value.has_auth_factor_label()) {
        return;
      }
    }
    output += indent + "  auth_factor_label: ";
    base::StringAppendF(&output, "%s", value.auth_factor_label().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_factor(); }) {
      if (!value.has_auth_factor()) {
        return;
      }
    }
    output += indent + "  auth_factor: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.auth_factor(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_input(); }) {
      if (!value.has_auth_input()) {
        return;
      }
    }
    output += indent + "  auth_input: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.auth_input(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const ReplaceAuthFactorReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const ReplaceAuthFactorReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_replacement_auth_factor(); }) {
      if (!value.has_replacement_auth_factor()) {
        return;
      }
    }
    output += indent + "  replacement_auth_factor: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.replacement_auth_factor(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const RemoveAuthFactorRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const RemoveAuthFactorRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_session_id(); }) {
      if (!value.has_auth_session_id()) {
        return;
      }
    }
    output += indent + "  auth_session_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.auth_session_id().data(),
                                        value.auth_session_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_factor_label(); }) {
      if (!value.has_auth_factor_label()) {
        return;
      }
    }
    output += indent + "  auth_factor_label: ";
    base::StringAppendF(&output, "%s", value.auth_factor_label().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const RemoveAuthFactorReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const RemoveAuthFactorReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const AuthIntentsForAuthFactorType& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const AuthIntentsForAuthFactorType& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_type(); }) {
      if (!value.has_type()) {
        return;
      }
    }
    output += indent + "  type: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.type(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "  current: {";
  for (int i = 0; i < value.current_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.current(i), indent_size + 4)
            .c_str());
    if (i == value.current_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  output += indent + "  minimum: {";
  for (int i = 0; i < value.minimum_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.minimum(i), indent_size + 4)
            .c_str());
    if (i == value.minimum_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  output += indent + "  maximum: {";
  for (int i = 0; i < value.maximum_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.maximum(i), indent_size + 4)
            .c_str());
    if (i == value.maximum_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const ListAuthFactorsRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const ListAuthFactorsRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_account_id(); }) {
      if (!value.has_account_id()) {
        return;
      }
    }
    output += indent + "  account_id: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.account_id(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const ListAuthFactorsReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const ListAuthFactorsReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "  configured_auth_factors: {";
  for (int i = 0; i < value.configured_auth_factors_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.configured_auth_factors(i), indent_size + 4)
                            .c_str());
    if (i == value.configured_auth_factors_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  output += indent + "  configured_auth_factors_with_status: {";
  for (int i = 0; i < value.configured_auth_factors_with_status_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(
            value.configured_auth_factors_with_status(i), indent_size + 4)
            .c_str());
    if (i == value.configured_auth_factors_with_status_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  output += indent + "  supported_auth_factors: {";
  for (int i = 0; i < value.supported_auth_factors_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.supported_auth_factors(i), indent_size + 4)
                            .c_str());
    if (i == value.supported_auth_factors_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  output += indent + "  auth_intents_for_types: {";
  for (int i = 0; i < value.auth_intents_for_types_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.auth_intents_for_types(i), indent_size + 4)
                            .c_str());
    if (i == value.auth_intents_for_types_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const RecoveryExtendedInfoRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const RecoveryExtendedInfoRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_max_depth(); }) {
      if (!value.has_max_depth()) {
        return;
      }
    }
    output += indent + "  max_depth: ";
    base::StringAppendF(&output, "%" PRIu32 " (0x%08" PRIX32 ")",
                        value.max_depth(), value.max_depth());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const RecoveryExtendedInfoReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const RecoveryExtendedInfoReply& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "  recovery_ids: {";
  for (int i = 0; i < value.recovery_ids_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(&output, "%s", value.recovery_ids(i).c_str());
    if (i == value.recovery_ids_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetAuthFactorExtendedInfoRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const GetAuthFactorExtendedInfoRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_account_id(); }) {
      if (!value.has_account_id()) {
        return;
      }
    }
    output += indent + "  account_id: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.account_id(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_factor_label(); }) {
      if (!value.has_auth_factor_label()) {
        return;
      }
    }
    output += indent + "  auth_factor_label: ";
    base::StringAppendF(&output, "%s", value.auth_factor_label().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_recovery_info_request(); }) {
      if (!value.has_recovery_info_request()) {
        return;
      }
    }
    output += indent + "  recovery_info_request: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.recovery_info_request(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetAuthFactorExtendedInfoReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const GetAuthFactorExtendedInfoReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_factor(); }) {
      if (!value.has_auth_factor()) {
        return;
      }
    }
    output += indent + "  auth_factor: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.auth_factor(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_recovery_info_reply(); }) {
      if (!value.has_recovery_info_reply()) {
        return;
      }
    }
    output += indent + "  recovery_info_reply: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.recovery_info_reply(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetRecoveryRequestRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const GetRecoveryRequestRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_session_id(); }) {
      if (!value.has_auth_session_id()) {
        return;
      }
    }
    output += indent + "  auth_session_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.auth_session_id().data(),
                                        value.auth_session_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_factor_label(); }) {
      if (!value.has_auth_factor_label()) {
        return;
      }
    }
    output += indent + "  auth_factor_label: ";
    base::StringAppendF(&output, "%s", value.auth_factor_label().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_requestor_user_id_type(); }) {
      if (!value.has_requestor_user_id_type()) {
        return;
      }
    }
    output += indent + "  requestor_user_id_type: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.requestor_user_id_type(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_requestor_user_id(); }) {
      if (!value.has_requestor_user_id()) {
        return;
      }
    }
    output += indent + "  requestor_user_id: ";
    base::StringAppendF(&output, "%s", value.requestor_user_id().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_gaia_access_token(); }) {
      if (!value.has_gaia_access_token()) {
        return;
      }
    }
    output += indent + "  gaia_access_token: ";
    base::StringAppendF(&output, "%s", value.gaia_access_token().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_gaia_reauth_proof_token(); }) {
      if (!value.has_gaia_reauth_proof_token()) {
        return;
      }
    }
    output += indent + "  gaia_reauth_proof_token: ";
    base::StringAppendF(&output, "%s", value.gaia_reauth_proof_token().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_epoch_response(); }) {
      if (!value.has_epoch_response()) {
        return;
      }
    }
    output += indent + "  epoch_response: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.epoch_response().data(),
                                        value.epoch_response().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetRecoveryRequestReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const GetRecoveryRequestReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_recovery_request(); }) {
      if (!value.has_recovery_request()) {
        return;
      }
    }
    output += indent + "  recovery_request: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.recovery_request().data(),
                                        value.recovery_request().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const CreateVaultKeysetRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const CreateVaultKeysetRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_session_id(); }) {
      if (!value.has_auth_session_id()) {
        return;
      }
    }
    output += indent + "  auth_session_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.auth_session_id().data(),
                                        value.auth_session_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_passkey(); }) {
      if (!value.has_passkey()) {
        return;
      }
    }
    output += indent + "  passkey: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.passkey().data(), value.passkey().size())
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_key_label(); }) {
      if (!value.has_key_label()) {
        return;
      }
    }
    output += indent + "  key_label: ";
    base::StringAppendF(&output, "%s", value.key_label().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_type(); }) {
      if (!value.has_type()) {
        return;
      }
    }
    output += indent + "  type: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.type(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_disable_key_data(); }) {
      if (!value.has_disable_key_data()) {
        return;
      }
    }
    output += indent + "  disable_key_data: ";
    base::StringAppendF(&output, "%s",
                        value.disable_key_data() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_key_delegate_dbus_service_name(); }) {
      if (!value.has_key_delegate_dbus_service_name()) {
        return;
      }
    }
    output += indent + "  key_delegate_dbus_service_name: ";
    base::StringAppendF(&output, "%s",
                        value.key_delegate_dbus_service_name().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_public_key_spki_der(); }) {
      if (!value.has_public_key_spki_der()) {
        return;
      }
    }
    output += indent + "  public_key_spki_der: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.public_key_spki_der().data(),
                                        value.public_key_spki_der().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const CreateVaultKeysetReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const CreateVaultKeysetReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const PrepareAuthFactorRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const PrepareAuthFactorRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_session_id(); }) {
      if (!value.has_auth_session_id()) {
        return;
      }
    }
    output += indent + "  auth_session_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.auth_session_id().data(),
                                        value.auth_session_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_factor_type(); }) {
      if (!value.has_auth_factor_type()) {
        return;
      }
    }
    output += indent + "  auth_factor_type: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.auth_factor_type(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_purpose(); }) {
      if (!value.has_purpose()) {
        return;
      }
    }
    output += indent + "  purpose: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.purpose(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const PrepareAuthFactorReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const PrepareAuthFactorReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const TerminateAuthFactorRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const TerminateAuthFactorRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_session_id(); }) {
      if (!value.has_auth_session_id()) {
        return;
      }
    }
    output += indent + "  auth_session_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.auth_session_id().data(),
                                        value.auth_session_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_factor_type(); }) {
      if (!value.has_auth_factor_type()) {
        return;
      }
    }
    output += indent + "  auth_factor_type: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.auth_factor_type(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const TerminateAuthFactorReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const TerminateAuthFactorReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const ModifyAuthFactorIntentsRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const ModifyAuthFactorIntentsRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_session_id(); }) {
      if (!value.has_auth_session_id()) {
        return;
      }
    }
    output += indent + "  auth_session_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.auth_session_id().data(),
                                        value.auth_session_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_type(); }) {
      if (!value.has_type()) {
        return;
      }
    }
    output += indent + "  type: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.type(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "  intents: {";
  for (int i = 0; i < value.intents_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.intents(i), indent_size + 4)
            .c_str());
    if (i == value.intents_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const ModifyAuthFactorIntentsReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const ModifyAuthFactorIntentsReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_intents(); }) {
      if (!value.has_auth_intents()) {
        return;
      }
    }
    output += indent + "  auth_intents: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.auth_intents(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const AuthScanResult& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const AuthScanResult& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_fingerprint_result(); }) {
      if (!value.has_fingerprint_result()) {
        return;
      }
    }
    output += indent + "  fingerprint_result: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.fingerprint_result(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const FingerprintEnrollmentProgress& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const FingerprintEnrollmentProgress& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_percent_complete(); }) {
      if (!value.has_percent_complete()) {
        return;
      }
    }
    output += indent + "  percent_complete: ";
    base::StringAppendF(&output, "%" PRId32, value.percent_complete());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const AuthEnrollmentProgress& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const AuthEnrollmentProgress& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_scan_result(); }) {
      if (!value.has_scan_result()) {
        return;
      }
    }
    output += indent + "  scan_result: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.scan_result(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_done(); }) {
      if (!value.has_done()) {
        return;
      }
    }
    output += indent + "  done: ";
    base::StringAppendF(&output, "%s", value.done() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_fingerprint_progress(); }) {
      if (!value.has_fingerprint_progress()) {
        return;
      }
    }
    output += indent + "  fingerprint_progress: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.fingerprint_progress(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const AuthScanDone& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const AuthScanDone& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_scan_result(); }) {
      if (!value.has_scan_result()) {
        return;
      }
    }
    output += indent + "  scan_result: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.scan_result(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const PrepareAuthFactorForAddProgress& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const PrepareAuthFactorForAddProgress& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_factor_type(); }) {
      if (!value.has_auth_factor_type()) {
        return;
      }
    }
    output += indent + "  auth_factor_type: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.auth_factor_type(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_biometrics_progress(); }) {
      if (!value.has_biometrics_progress()) {
        return;
      }
    }
    output += indent + "  biometrics_progress: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.biometrics_progress(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const PrepareAuthFactorForAuthProgress& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const PrepareAuthFactorForAuthProgress& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_factor_type(); }) {
      if (!value.has_auth_factor_type()) {
        return;
      }
    }
    output += indent + "  auth_factor_type: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.auth_factor_type(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_biometrics_progress(); }) {
      if (!value.has_biometrics_progress()) {
        return;
      }
    }
    output += indent + "  biometrics_progress: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.biometrics_progress(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const PrepareAuthFactorProgress& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const PrepareAuthFactorProgress& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_purpose(); }) {
      if (!value.has_purpose()) {
        return;
      }
    }
    output += indent + "  purpose: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.purpose(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_add_progress(); }) {
      if (!value.has_add_progress()) {
        return;
      }
    }
    output += indent + "  add_progress: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.add_progress(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_progress(); }) {
      if (!value.has_auth_progress()) {
        return;
      }
    }
    output += indent + "  auth_progress: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.auth_progress(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const AuthenticateStarted& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const AuthenticateStarted& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_operation_id(); }) {
      if (!value.has_operation_id()) {
        return;
      }
    }
    output += indent + "  operation_id: ";
    base::StringAppendF(&output, "%" PRIu64 " (0x%016" PRIX64 ")",
                        value.operation_id(), value.operation_id());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_factor_type(); }) {
      if (!value.has_auth_factor_type()) {
        return;
      }
    }
    output += indent + "  auth_factor_type: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.auth_factor_type(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_user_creation(); }) {
      if (!value.has_user_creation()) {
        return;
      }
    }
    output += indent + "  user_creation: ";
    base::StringAppendF(&output, "%s",
                        value.user_creation() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const AuthenticateAuthFactorCompleted& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const AuthenticateAuthFactorCompleted& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_operation_id(); }) {
      if (!value.has_operation_id()) {
        return;
      }
    }
    output += indent + "  operation_id: ";
    base::StringAppendF(&output, "%" PRIu64 " (0x%016" PRIX64 ")",
                        value.operation_id(), value.operation_id());
    output += "\n";
  }(value, indent_size, indent, output);
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_factor_type(); }) {
      if (!value.has_auth_factor_type()) {
        return;
      }
    }
    output += indent + "  auth_factor_type: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.auth_factor_type(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_user_creation(); }) {
      if (!value.has_user_creation()) {
        return;
      }
    }
    output += indent + "  user_creation: ";
    base::StringAppendF(&output, "%s",
                        value.user_creation() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const MountStarted& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const MountStarted& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_operation_id(); }) {
      if (!value.has_operation_id()) {
        return;
      }
    }
    output += indent + "  operation_id: ";
    base::StringAppendF(&output, "%" PRIu64 " (0x%016" PRIX64 ")",
                        value.operation_id(), value.operation_id());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const MountCompleted& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const MountCompleted& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_operation_id(); }) {
      if (!value.has_operation_id()) {
        return;
      }
    }
    output += indent + "  operation_id: ";
    base::StringAppendF(&output, "%" PRIu64 " (0x%016" PRIX64 ")",
                        value.operation_id(), value.operation_id());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const EvictedKeyRestored& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const EvictedKeyRestored& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_eviction_id(); }) {
      if (!value.has_eviction_id()) {
        return;
      }
    }
    output += indent + "  eviction_id: ";
    base::StringAppendF(&output, "%" PRId64, value.eviction_id());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetRecoverableKeyStoresRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const GetRecoverableKeyStoresRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_account_id(); }) {
      if (!value.has_account_id()) {
        return;
      }
    }
    output += indent + "  account_id: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.account_id(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const GetRecoverableKeyStoresReply& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const GetRecoverableKeyStoresReply& value,
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
    if constexpr (requires(T t) { t.has_error_info(); }) {
      if (!value.has_error_info()) {
        return;
      }
    }
    output += indent + "  error_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.error_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "  key_stores: {";
  for (int i = 0; i < value.key_stores_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.key_stores(i), indent_size + 4)
            .c_str());
    if (i == value.key_stores_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  output += indent + "}";
  return output;
}

}  // namespace user_data_auth
