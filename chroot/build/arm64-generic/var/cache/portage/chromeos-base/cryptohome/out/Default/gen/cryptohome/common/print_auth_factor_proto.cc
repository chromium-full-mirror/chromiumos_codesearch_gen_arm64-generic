// Copyright 2023 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// THIS CODE IS GENERATED.
// Generated with command:
// ../../../../../../../tmp/portage/chromeos-base/cryptohome-9999/work/cryptohome-9999/platform2/libhwsec-foundation/utility/proto_print.py
// --package-dir cryptohome --subdir common --proto-include
// cryptohome/proto_bindings --output-dir
// /build/arm64-generic/var/cache/portage/chromeos-base/cryptohome/out/Default/gen/cryptohome/common
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/auth_factor.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/fido.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/key.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/rpc.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/UserDataAuth.proto

#include "cryptohome/common/print_auth_factor_proto.h"

#include <inttypes.h>

#include <string>

#include <base/strings/string_number_conversions.h>
#include <base/strings/stringprintf.h>

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

  output += indent + "  secret: ";
  base::StringAppendF(
      &output, "%s",
      base::HexEncode(value.secret().data(), value.secret().size()).c_str());
  output += "\n";

  output += indent + "}\n";
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

  output += indent + "  secret: ";
  base::StringAppendF(
      &output, "%s",
      base::HexEncode(value.secret().data(), value.secret().size()).c_str());
  output += "\n";

  output += indent + "}\n";
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

  output += indent + "  name: ";
  base::StringAppendF(&output, "%s", value.name().c_str());
  output += "\n";

  output += indent + "  key_hash: ";
  base::StringAppendF(&output, "%" PRIu32 " (0x%08" PRIX32 ")",
                      value.key_hash(), value.key_hash());
  output += "\n";

  output += indent + "  public_key: ";
  base::StringAppendF(
      &output, "%s",
      base::HexEncode(value.public_key().data(), value.public_key().size())
          .c_str());
  output += "\n";

  output += indent + "}\n";
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

  output += indent + "  mediator_pub_key: ";
  base::StringAppendF(&output, "%s",
                      base::HexEncode(value.mediator_pub_key().data(),
                                      value.mediator_pub_key().size())
                          .c_str());
  output += "\n";

  output += indent + "  user_gaia_id: ";
  base::StringAppendF(&output, "%s", value.user_gaia_id().c_str());
  output += "\n";

  output += indent + "  device_user_id: ";
  base::StringAppendF(&output, "%s", value.device_user_id().c_str());
  output += "\n";

  output += indent + "  epoch_response: ";
  base::StringAppendF(&output, "%s",
                      base::HexEncode(value.epoch_response().data(),
                                      value.epoch_response().size())
                          .c_str());
  output += "\n";

  output += indent + "  recovery_response: ";
  base::StringAppendF(&output, "%s",
                      base::HexEncode(value.recovery_response().data(),
                                      value.recovery_response().size())
                          .c_str());
  output += "\n";

  output += indent + "  ledger_info: ";
  base::StringAppendF(
      &output, "%s",
      GetProtoDebugStringWithIndent(value.ledger_info(), indent_size + 2)
          .c_str());
  output += "\n";

  output += indent + "}\n";
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

  output += indent + "}\n";
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
      base::StringAppendF(&output, ", ");
    }
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.signature_algorithms(i), indent_size + 2)
                            .c_str());
  }
  output += "}\n";
  output += indent + "  key_delegate_dbus_service_name: ";
  base::StringAppendF(&output, "%s",
                      value.key_delegate_dbus_service_name().c_str());
  output += "\n";

  output += indent + "}\n";
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

  output += indent + "}\n";
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

  output += indent + "}\n";
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

  output += indent + "  password_input: ";
  base::StringAppendF(
      &output, "%s",
      GetProtoDebugStringWithIndent(value.password_input(), indent_size + 2)
          .c_str());
  output += "\n";

  output += indent + "  pin_input: ";
  base::StringAppendF(
      &output, "%s",
      GetProtoDebugStringWithIndent(value.pin_input(), indent_size + 2)
          .c_str());
  output += "\n";

  output += indent + "  cryptohome_recovery_input: ";
  base::StringAppendF(&output, "%s",
                      GetProtoDebugStringWithIndent(
                          value.cryptohome_recovery_input(), indent_size + 2)
                          .c_str());
  output += "\n";

  output += indent + "  kiosk_input: ";
  base::StringAppendF(
      &output, "%s",
      GetProtoDebugStringWithIndent(value.kiosk_input(), indent_size + 2)
          .c_str());
  output += "\n";

  output += indent + "  smart_card_input: ";
  base::StringAppendF(
      &output, "%s",
      GetProtoDebugStringWithIndent(value.smart_card_input(), indent_size + 2)
          .c_str());
  output += "\n";

  output += indent + "  legacy_fingerprint_input: ";
  base::StringAppendF(&output, "%s",
                      GetProtoDebugStringWithIndent(
                          value.legacy_fingerprint_input(), indent_size + 2)
                          .c_str());
  output += "\n";

  output += indent + "  fingerprint_input: ";
  base::StringAppendF(
      &output, "%s",
      GetProtoDebugStringWithIndent(value.fingerprint_input(), indent_size + 2)
          .c_str());
  output += "\n";

  output += indent + "}\n";
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

  output += indent + "}\n";
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

  output += indent + "  auth_locked: ";
  base::StringAppendF(&output, "%s", value.auth_locked() ? "true" : "false");
  output += "\n";

  output += indent + "}\n";
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

  output += indent + "}\n";
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

  output += indent + "}\n";
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

  output += indent + "  public_key_spki_der: ";
  base::StringAppendF(&output, "%s",
                      base::HexEncode(value.public_key_spki_der().data(),
                                      value.public_key_spki_der().size())
                          .c_str());
  output += "\n";

  output += indent + "}\n";
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

  output += indent + "  chromeos_version_last_updated: ";
  base::StringAppendF(&output, "%s",
                      value.chromeos_version_last_updated().c_str());
  output += "\n";

  output += indent + "  chrome_version_last_updated: ";
  base::StringAppendF(&output, "%s",
                      value.chrome_version_last_updated().c_str());
  output += "\n";

  output += indent + "  lockout_policy: ";
  base::StringAppendF(
      &output, "%s",
      GetProtoDebugStringWithIndent(value.lockout_policy(), indent_size + 2)
          .c_str());
  output += "\n";

  output += indent + "}\n";
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

  output += indent + "}\n";
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

  output += indent + "}\n";
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

  output += indent + "  type: ";
  base::StringAppendF(
      &output, "%s",
      GetProtoDebugStringWithIndent(value.type(), indent_size + 2).c_str());
  output += "\n";

  output += indent + "  label: ";
  base::StringAppendF(&output, "%s", value.label().c_str());
  output += "\n";

  output += indent + "  common_metadata: ";
  base::StringAppendF(
      &output, "%s",
      GetProtoDebugStringWithIndent(value.common_metadata(), indent_size + 2)
          .c_str());
  output += "\n";

  output += indent + "  password_metadata: ";
  base::StringAppendF(
      &output, "%s",
      GetProtoDebugStringWithIndent(value.password_metadata(), indent_size + 2)
          .c_str());
  output += "\n";

  output += indent + "  pin_metadata: ";
  base::StringAppendF(
      &output, "%s",
      GetProtoDebugStringWithIndent(value.pin_metadata(), indent_size + 2)
          .c_str());
  output += "\n";

  output += indent + "  cryptohome_recovery_metadata: ";
  base::StringAppendF(&output, "%s",
                      GetProtoDebugStringWithIndent(
                          value.cryptohome_recovery_metadata(), indent_size + 2)
                          .c_str());
  output += "\n";

  output += indent + "  kiosk_metadata: ";
  base::StringAppendF(
      &output, "%s",
      GetProtoDebugStringWithIndent(value.kiosk_metadata(), indent_size + 2)
          .c_str());
  output += "\n";

  output += indent + "  smart_card_metadata: ";
  base::StringAppendF(&output, "%s",
                      GetProtoDebugStringWithIndent(value.smart_card_metadata(),
                                                    indent_size + 2)
                          .c_str());
  output += "\n";

  output += indent + "  legacy_fingerprint_metadata: ";
  base::StringAppendF(&output, "%s",
                      GetProtoDebugStringWithIndent(
                          value.legacy_fingerprint_metadata(), indent_size + 2)
                          .c_str());
  output += "\n";

  output += indent + "  fingerprint_metadata: ";
  base::StringAppendF(&output, "%s",
                      GetProtoDebugStringWithIndent(
                          value.fingerprint_metadata(), indent_size + 2)
                          .c_str());
  output += "\n";

  output += indent + "}\n";
  return output;
}

}  // namespace user_data_auth
