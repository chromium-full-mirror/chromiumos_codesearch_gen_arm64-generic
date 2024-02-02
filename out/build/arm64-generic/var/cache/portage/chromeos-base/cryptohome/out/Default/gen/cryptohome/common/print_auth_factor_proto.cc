// Copyright 2024 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// THIS CODE IS GENERATED.
// Generated with command:
// ../../../../../../../tmp/portage/chromeos-base/cryptohome-0.0.2-r5675/work/cryptohome-0.0.2/platform2/libhwsec-foundation/utility/proto_print.py
// --package-dir cryptohome --subdir common --proto-include
// cryptohome/proto_bindings --output-dir
// /build/arm64-generic/var/cache/portage/chromeos-base/cryptohome/out/Default/gen/cryptohome/common
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/auth_factor.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/fido.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/recoverable_key_store.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/key.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/rpc.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/UserDataAuth.proto

#include "cryptohome/common/print_auth_factor_proto.h"

#include <inttypes.h>

#include <string>

#include <base/strings/string_number_conversions.h>
#include <base/strings/stringprintf.h>

#include "cryptohome/common/print_recoverable_key_store_proto.h"

namespace user_data_auth {

std::string GetProtoDebugString(AuthFactorType value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(AuthFactorType value,
                                          int indent_size) {
  if (value == AUTH_FACTOR_TYPE_UNSPECIFIED) {
    return "AUTH_FACTOR_TYPE_UNSPECIFIED";
  }
  if (value == AUTH_FACTOR_TYPE_PASSWORD) {
    return "AUTH_FACTOR_TYPE_PASSWORD";
  }
  if (value == AUTH_FACTOR_TYPE_PIN) {
    return "AUTH_FACTOR_TYPE_PIN";
  }
  if (value == AUTH_FACTOR_TYPE_CRYPTOHOME_RECOVERY) {
    return "AUTH_FACTOR_TYPE_CRYPTOHOME_RECOVERY";
  }
  if (value == AUTH_FACTOR_TYPE_KIOSK) {
    return "AUTH_FACTOR_TYPE_KIOSK";
  }
  if (value == AUTH_FACTOR_TYPE_SMART_CARD) {
    return "AUTH_FACTOR_TYPE_SMART_CARD";
  }
  if (value == AUTH_FACTOR_TYPE_LEGACY_FINGERPRINT) {
    return "AUTH_FACTOR_TYPE_LEGACY_FINGERPRINT";
  }
  if (value == AUTH_FACTOR_TYPE_FINGERPRINT) {
    return "AUTH_FACTOR_TYPE_FINGERPRINT";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(AuthFactorPreparePurpose value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(AuthFactorPreparePurpose value,
                                          int indent_size) {
  if (value == PURPOSE_UNSPECIFIED) {
    return "PURPOSE_UNSPECIFIED";
  }
  if (value == PURPOSE_ADD_AUTH_FACTOR) {
    return "PURPOSE_ADD_AUTH_FACTOR";
  }
  if (value == PURPOSE_AUTHENTICATE_AUTH_FACTOR) {
    return "PURPOSE_AUTHENTICATE_AUTH_FACTOR";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(SmartCardSignatureAlgorithm value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(SmartCardSignatureAlgorithm value,
                                          int indent_size) {
  if (value == CHALLENGE_NOT_SPECIFIED) {
    return "CHALLENGE_NOT_SPECIFIED";
  }
  if (value == CHALLENGE_RSASSA_PKCS1_V1_5_SHA1) {
    return "CHALLENGE_RSASSA_PKCS1_V1_5_SHA1";
  }
  if (value == CHALLENGE_RSASSA_PKCS1_V1_5_SHA256) {
    return "CHALLENGE_RSASSA_PKCS1_V1_5_SHA256";
  }
  if (value == CHALLENGE_RSASSA_PKCS1_V1_5_SHA384) {
    return "CHALLENGE_RSASSA_PKCS1_V1_5_SHA384";
  }
  if (value == CHALLENGE_RSASSA_PKCS1_V1_5_SHA512) {
    return "CHALLENGE_RSASSA_PKCS1_V1_5_SHA512";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(AuthIntent value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(AuthIntent value, int indent_size) {
  if (value == AUTH_INTENT_UNSPECIFIED) {
    return "AUTH_INTENT_UNSPECIFIED";
  }
  if (value == AUTH_INTENT_DECRYPT) {
    return "AUTH_INTENT_DECRYPT";
  }
  if (value == AUTH_INTENT_VERIFY_ONLY) {
    return "AUTH_INTENT_VERIFY_ONLY";
  }
  if (value == AUTH_INTENT_WEBAUTHN) {
    return "AUTH_INTENT_WEBAUTHN";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(LockoutPolicy value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(LockoutPolicy value,
                                          int indent_size) {
  if (value == LOCKOUT_POLICY_UNKNOWN) {
    return "LOCKOUT_POLICY_UNKNOWN";
  }
  if (value == LOCKOUT_POLICY_NONE) {
    return "LOCKOUT_POLICY_NONE";
  }
  if (value == LOCKOUT_POLICY_ATTEMPT_LIMITED) {
    return "LOCKOUT_POLICY_ATTEMPT_LIMITED";
  }
  if (value == LOCKOUT_POLICY_TIME_LIMITED) {
    return "LOCKOUT_POLICY_TIME_LIMITED";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(const PasswordAuthInput& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const PasswordAuthInput& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

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
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const PinAuthInput& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const PinAuthInput& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

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
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(
    const CryptohomeRecoveryAuthInput::LedgerInfo& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const CryptohomeRecoveryAuthInput::LedgerInfo& value,
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
    if constexpr (requires(T t) { t.has_key_hash(); }) {
      if (!value.has_key_hash()) {
        return;
      }
    }
    output += indent + "  key_hash: ";
    base::StringAppendF(&output, "%" PRIu32 " (0x%08" PRIX32 ")",
                        value.key_hash(), value.key_hash());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_public_key(); }) {
      if (!value.has_public_key()) {
        return;
      }
    }
    output += indent + "  public_key: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.public_key().data(), value.public_key().size())
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const CryptohomeRecoveryAuthInput& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const CryptohomeRecoveryAuthInput& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_mediator_pub_key(); }) {
      if (!value.has_mediator_pub_key()) {
        return;
      }
    }
    output += indent + "  mediator_pub_key: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.mediator_pub_key().data(),
                                        value.mediator_pub_key().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_user_gaia_id(); }) {
      if (!value.has_user_gaia_id()) {
        return;
      }
    }
    output += indent + "  user_gaia_id: ";
    base::StringAppendF(&output, "%s", value.user_gaia_id().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_device_user_id(); }) {
      if (!value.has_device_user_id()) {
        return;
      }
    }
    output += indent + "  device_user_id: ";
    base::StringAppendF(&output, "%s", value.device_user_id().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_ensure_fresh_recovery_id(); }) {
      if (!value.has_ensure_fresh_recovery_id()) {
        return;
      }
    }
    output += indent + "  ensure_fresh_recovery_id: ";
    base::StringAppendF(&output, "%s",
                        value.ensure_fresh_recovery_id() ? "true" : "false");
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
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_recovery_response(); }) {
      if (!value.has_recovery_response()) {
        return;
      }
    }
    output += indent + "  recovery_response: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.recovery_response().data(),
                                        value.recovery_response().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_ledger_info(); }) {
      if (!value.has_ledger_info()) {
        return;
      }
    }
    output += indent + "  ledger_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.ledger_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const KioskAuthInput& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const KioskAuthInput& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const SmartCardAuthInput& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const SmartCardAuthInput& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "  signature_algorithms: {";
  for (int i = 0; i < value.signature_algorithms_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.signature_algorithms(i), indent_size + 4)
                            .c_str());
    if (i == value.signature_algorithms_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
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
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const LegacyFingerprintAuthInput& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const LegacyFingerprintAuthInput& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const FingerprintAuthInput& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const FingerprintAuthInput& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const AuthInput& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const AuthInput& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_password_input(); }) {
      if (!value.has_password_input()) {
        return;
      }
    }
    output += indent + "  password_input: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.password_input(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_pin_input(); }) {
      if (!value.has_pin_input()) {
        return;
      }
    }
    output += indent + "  pin_input: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.pin_input(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_cryptohome_recovery_input(); }) {
      if (!value.has_cryptohome_recovery_input()) {
        return;
      }
    }
    output += indent + "  cryptohome_recovery_input: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.cryptohome_recovery_input(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_kiosk_input(); }) {
      if (!value.has_kiosk_input()) {
        return;
      }
    }
    output += indent + "  kiosk_input: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.kiosk_input(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_smart_card_input(); }) {
      if (!value.has_smart_card_input()) {
        return;
      }
    }
    output += indent + "  smart_card_input: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.smart_card_input(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_legacy_fingerprint_input(); }) {
      if (!value.has_legacy_fingerprint_input()) {
        return;
      }
    }
    output += indent + "  legacy_fingerprint_input: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.legacy_fingerprint_input(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_fingerprint_input(); }) {
      if (!value.has_fingerprint_input()) {
        return;
      }
    }
    output += indent + "  fingerprint_input: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(value.fingerprint_input(),
                                                      indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const PasswordMetadata& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const PasswordMetadata& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_hash_info(); }) {
      if (!value.has_hash_info()) {
        return;
      }
    }
    output += indent + "  hash_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.hash_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const PinMetadata& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const PinMetadata& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_auth_locked(); }) {
      if (!value.has_auth_locked()) {
        return;
      }
    }
    output += indent + "  auth_locked: ";
    base::StringAppendF(&output, "%s", value.auth_locked() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_hash_info(); }) {
      if (!value.has_hash_info()) {
        return;
      }
    }
    output += indent + "  hash_info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.hash_info(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const CryptohomeRecoveryMetadata& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const CryptohomeRecoveryMetadata& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_mediator_pub_key(); }) {
      if (!value.has_mediator_pub_key()) {
        return;
      }
    }
    output += indent + "  mediator_pub_key: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.mediator_pub_key().data(),
                                        value.mediator_pub_key().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const KioskMetadata& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const KioskMetadata& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const SmartCardMetadata& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const SmartCardMetadata& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

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

std::string GetProtoDebugString(const KnowledgeFactorHashInfo& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const KnowledgeFactorHashInfo& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_algorithm(); }) {
      if (!value.has_algorithm()) {
        return;
      }
    }
    output += indent + "  algorithm: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.algorithm(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
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
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_should_generate_key_store(); }) {
      if (!value.has_should_generate_key_store()) {
        return;
      }
    }
    output += indent + "  should_generate_key_store: ";
    base::StringAppendF(&output, "%s",
                        value.should_generate_key_store() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const CommonMetadata& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const CommonMetadata& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_chromeos_version_last_updated(); }) {
      if (!value.has_chromeos_version_last_updated()) {
        return;
      }
    }
    output += indent + "  chromeos_version_last_updated: ";
    base::StringAppendF(&output, "%s",
                        value.chromeos_version_last_updated().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_chrome_version_last_updated(); }) {
      if (!value.has_chrome_version_last_updated()) {
        return;
      }
    }
    output += indent + "  chrome_version_last_updated: ";
    base::StringAppendF(&output, "%s",
                        value.chrome_version_last_updated().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_lockout_policy(); }) {
      if (!value.has_lockout_policy()) {
        return;
      }
    }
    output += indent + "  lockout_policy: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.lockout_policy(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_user_specified_name(); }) {
      if (!value.has_user_specified_name()) {
        return;
      }
    }
    output += indent + "  user_specified_name: ";
    base::StringAppendF(&output, "%s", value.user_specified_name().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const LegacyFingerprintMetadata& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const LegacyFingerprintMetadata& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const FingerprintMetadata& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const FingerprintMetadata& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const AuthFactor& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const AuthFactor& value,
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
    if constexpr (requires(T t) { t.has_common_metadata(); }) {
      if (!value.has_common_metadata()) {
        return;
      }
    }
    output += indent + "  common_metadata: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.common_metadata(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_password_metadata(); }) {
      if (!value.has_password_metadata()) {
        return;
      }
    }
    output += indent + "  password_metadata: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(value.password_metadata(),
                                                      indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_pin_metadata(); }) {
      if (!value.has_pin_metadata()) {
        return;
      }
    }
    output += indent + "  pin_metadata: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.pin_metadata(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_cryptohome_recovery_metadata(); }) {
      if (!value.has_cryptohome_recovery_metadata()) {
        return;
      }
    }
    output += indent + "  cryptohome_recovery_metadata: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.cryptohome_recovery_metadata(),
                                      indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_kiosk_metadata(); }) {
      if (!value.has_kiosk_metadata()) {
        return;
      }
    }
    output += indent + "  kiosk_metadata: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.kiosk_metadata(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_smart_card_metadata(); }) {
      if (!value.has_smart_card_metadata()) {
        return;
      }
    }
    output += indent + "  smart_card_metadata: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.smart_card_metadata(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_legacy_fingerprint_metadata(); }) {
      if (!value.has_legacy_fingerprint_metadata()) {
        return;
      }
    }
    output += indent + "  legacy_fingerprint_metadata: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.legacy_fingerprint_metadata(),
                                      indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_fingerprint_metadata(); }) {
      if (!value.has_fingerprint_metadata()) {
        return;
      }
    }
    output += indent + "  fingerprint_metadata: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.fingerprint_metadata(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

}  // namespace user_data_auth
