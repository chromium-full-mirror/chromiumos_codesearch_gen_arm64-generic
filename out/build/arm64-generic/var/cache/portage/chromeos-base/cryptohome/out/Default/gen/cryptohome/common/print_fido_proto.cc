// Copyright 2024 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// THIS CODE IS GENERATED.
// Generated with command:
// ../../../../../../../tmp/portage/chromeos-base/cryptohome-0.0.2-r5672/work/cryptohome-0.0.2/platform2/libhwsec-foundation/utility/proto_print.py
// --package-dir cryptohome --subdir common --proto-include
// cryptohome/proto_bindings --output-dir
// /build/arm64-generic/var/cache/portage/chromeos-base/cryptohome/out/Default/gen/cryptohome/common
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/auth_factor.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/fido.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/recoverable_key_store.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/key.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/rpc.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/UserDataAuth.proto

#include "cryptohome/common/print_fido_proto.h"

#include <inttypes.h>

#include <string>

#include <base/strings/string_number_conversions.h>
#include <base/strings/stringprintf.h>

namespace cryptohome::fido {

std::string GetProtoDebugString(AuthenticatorStatus value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(AuthenticatorStatus value,
                                          int indent_size) {
  if (value == SUCCESS) {
    return "SUCCESS";
  }
  if (value == PENDING_REQUEST) {
    return "PENDING_REQUEST";
  }
  if (value == NOT_ALLOWED_ERROR) {
    return "NOT_ALLOWED_ERROR";
  }
  if (value == INVALID_DOMAIN) {
    return "INVALID_DOMAIN";
  }
  if (value == INVALID_ICON_URL) {
    return "INVALID_ICON_URL";
  }
  if (value == CREDENTIAL_EXCLUDED) {
    return "CREDENTIAL_EXCLUDED";
  }
  if (value == CREDENTIAL_NOT_RECOGNIZED) {
    return "CREDENTIAL_NOT_RECOGNIZED";
  }
  if (value == NOT_IMPLEMENTED) {
    return "NOT_IMPLEMENTED";
  }
  if (value == NOT_FOCUSED) {
    return "NOT_FOCUSED";
  }
  if (value == RESIDENT_CREDENTIALS_UNSUPPORTED) {
    return "RESIDENT_CREDENTIALS_UNSUPPORTED";
  }
  if (value == USER_VERIFICATION_UNSUPPORTED) {
    return "USER_VERIFICATION_UNSUPPORTED";
  }
  if (value == ALGORITHM_UNSUPPORTED) {
    return "ALGORITHM_UNSUPPORTED";
  }
  if (value == EMPTY_ALLOW_CREDENTIALS) {
    return "EMPTY_ALLOW_CREDENTIALS";
  }
  if (value == ANDROID_NOT_SUPPORTED_ERROR) {
    return "ANDROID_NOT_SUPPORTED_ERROR";
  }
  if (value == PROTECTION_POLICY_INCONSISTENT) {
    return "PROTECTION_POLICY_INCONSISTENT";
  }
  if (value == ABORT_ERROR) {
    return "ABORT_ERROR";
  }
  if (value == OPAQUE_DOMAIN) {
    return "OPAQUE_DOMAIN";
  }
  if (value == INVALID_PROTOCOL) {
    return "INVALID_PROTOCOL";
  }
  if (value == BAD_RELYING_PARTY_ID) {
    return "BAD_RELYING_PARTY_ID";
  }
  if (value == UNKNOWN_ERROR) {
    return "UNKNOWN_ERROR";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(AuthenticatorTransport value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(AuthenticatorTransport value,
                                          int indent_size) {
  if (value == USB) {
    return "USB";
  }
  if (value == NFC) {
    return "NFC";
  }
  if (value == BLE) {
    return "BLE";
  }
  if (value == CABLE) {
    return "CABLE";
  }
  if (value == INTERNAL) {
    return "INTERNAL";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(UserVerificationRequirement value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(UserVerificationRequirement value,
                                          int indent_size) {
  if (value == REQUIRED) {
    return "REQUIRED";
  }
  if (value == PREFERRED) {
    return "PREFERRED";
  }
  if (value == DISCOURAGED) {
    return "DISCOURAGED";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(AttestationConveyancePreference value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(AttestationConveyancePreference value,
                                          int indent_size) {
  if (value == NONE_ATTESTATION_PREFERENCE) {
    return "NONE_ATTESTATION_PREFERENCE";
  }
  if (value == INDIRECT) {
    return "INDIRECT";
  }
  if (value == DIRECT) {
    return "DIRECT";
  }
  if (value == ENTERPRISE) {
    return "ENTERPRISE";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(AuthenticatorAttachment value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(AuthenticatorAttachment value,
                                          int indent_size) {
  if (value == NO_PREFERENCE) {
    return "NO_PREFERENCE";
  }
  if (value == PLATFORM) {
    return "PLATFORM";
  }
  if (value == CROSS_PLATFORM) {
    return "CROSS_PLATFORM";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(ProtectionPolicy value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(ProtectionPolicy value,
                                          int indent_size) {
  if (value == UNSPECIFIED) {
    return "UNSPECIFIED";
  }
  if (value == NONE_PROTECTION_POLICY) {
    return "NONE_PROTECTION_POLICY";
  }
  if (value == UV_OR_CRED_ID_REQUIRED) {
    return "UV_OR_CRED_ID_REQUIRED";
  }
  if (value == UV_REQUIRED) {
    return "UV_REQUIRED";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(PublicKeyCredentialType value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(PublicKeyCredentialType value,
                                          int indent_size) {
  if (value == PUBLIC_KEY) {
    return "PUBLIC_KEY";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(const Url& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const Url& value, int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_url(); }) {
      if (!value.has_url()) {
        return;
      }
    }
    output += indent + "  url: ";
    base::StringAppendF(&output, "%s", value.url().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const CommonCredentialInfo& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const CommonCredentialInfo& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_id(); }) {
      if (!value.has_id()) {
        return;
      }
    }
    output += indent + "  id: ";
    base::StringAppendF(&output, "%s", value.id().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_raw_id(); }) {
      if (!value.has_raw_id()) {
        return;
      }
    }
    output += indent + "  raw_id: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.raw_id().data(), value.raw_id().size()).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_client_data_json(); }) {
      if (!value.has_client_data_json()) {
        return;
      }
    }
    output += indent + "  client_data_json: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.client_data_json().data(),
                                        value.client_data_json().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(
    const MakeCredentialAuthenticatorResponse& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const MakeCredentialAuthenticatorResponse& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_info(); }) {
      if (!value.has_info()) {
        return;
      }
    }
    output += indent + "  info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.info(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_attestation_object(); }) {
      if (!value.has_attestation_object()) {
        return;
      }
    }
    output += indent + "  attestation_object: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.attestation_object().data(),
                                        value.attestation_object().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "  transports: {";
  for (int i = 0; i < value.transports_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.transports(i), indent_size + 4)
            .c_str());
    if (i == value.transports_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_echo_hmac_create_secret(); }) {
      if (!value.has_echo_hmac_create_secret()) {
        return;
      }
    }
    output += indent + "  echo_hmac_create_secret: ";
    base::StringAppendF(&output, "%s",
                        value.echo_hmac_create_secret() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_hmac_create_secret(); }) {
      if (!value.has_hmac_create_secret()) {
        return;
      }
    }
    output += indent + "  hmac_create_secret: ";
    base::StringAppendF(&output, "%s",
                        value.hmac_create_secret() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(
    const GetAssertionAuthenticatorResponse& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const GetAssertionAuthenticatorResponse& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_info(); }) {
      if (!value.has_info()) {
        return;
      }
    }
    output += indent + "  info: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.info(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_authenticator_data(); }) {
      if (!value.has_authenticator_data()) {
        return;
      }
    }
    output += indent + "  authenticator_data: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.authenticator_data().data(),
                                        value.authenticator_data().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_signature(); }) {
      if (!value.has_signature()) {
        return;
      }
    }
    output += indent + "  signature: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.signature().data(), value.signature().size())
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_user_handle(); }) {
      if (!value.has_user_handle()) {
        return;
      }
    }
    output += indent + "  user_handle: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.user_handle().data(), value.user_handle().size())
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_echo_appid_extension(); }) {
      if (!value.has_echo_appid_extension()) {
        return;
      }
    }
    output += indent + "  echo_appid_extension: ";
    base::StringAppendF(&output, "%s",
                        value.echo_appid_extension() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_appid_extension(); }) {
      if (!value.has_appid_extension()) {
        return;
      }
    }
    output += indent + "  appid_extension: ";
    base::StringAppendF(&output, "%s",
                        value.appid_extension() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const PublicKeyCredentialRpEntity& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const PublicKeyCredentialRpEntity& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_id(); }) {
      if (!value.has_id()) {
        return;
      }
    }
    output += indent + "  id: ";
    base::StringAppendF(&output, "%s", value.id().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
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
    if constexpr (requires(T t) { t.has_icon(); }) {
      if (!value.has_icon()) {
        return;
      }
    }
    output += indent + "  icon: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.icon(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const PublicKeyCredentialUserEntity& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const PublicKeyCredentialUserEntity& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_id(); }) {
      if (!value.has_id()) {
        return;
      }
    }
    output += indent + "  id: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.id().data(), value.id().size()).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
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
    if constexpr (requires(T t) { t.has_icon(); }) {
      if (!value.has_icon()) {
        return;
      }
    }
    output += indent + "  icon: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.icon(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_display_name(); }) {
      if (!value.has_display_name()) {
        return;
      }
    }
    output += indent + "  display_name: ";
    base::StringAppendF(&output, "%s", value.display_name().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const PublicKeyCredentialParameters& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const PublicKeyCredentialParameters& value,
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
    if constexpr (requires(T t) { t.has_algorithm_identifier(); }) {
      if (!value.has_algorithm_identifier()) {
        return;
      }
    }
    output += indent + "  algorithm_identifier: ";
    base::StringAppendF(&output, "%" PRId32, value.algorithm_identifier());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const CableAuthentication& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const CableAuthentication& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_version(); }) {
      if (!value.has_version()) {
        return;
      }
    }
    output += indent + "  version: ";
    base::StringAppendF(&output, "%" PRIu32 " (0x%08" PRIX32 ")",
                        value.version(), value.version());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_client_eid(); }) {
      if (!value.has_client_eid()) {
        return;
      }
    }
    output += indent + "  client_eid: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.client_eid().data(), value.client_eid().size())
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_authenticator_eid(); }) {
      if (!value.has_authenticator_eid()) {
        return;
      }
    }
    output += indent + "  authenticator_eid: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.authenticator_eid().data(),
                                        value.authenticator_eid().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_session_pre_key(); }) {
      if (!value.has_session_pre_key()) {
        return;
      }
    }
    output += indent + "  session_pre_key: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.session_pre_key().data(),
                                        value.session_pre_key().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const CableRegistration& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const CableRegistration& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_versions(); }) {
      if (!value.has_versions()) {
        return;
      }
    }
    output += indent + "  versions: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.versions().data(), value.versions().size())
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_relying_party_public_key(); }) {
      if (!value.has_relying_party_public_key()) {
        return;
      }
    }
    output += indent + "  relying_party_public_key: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.relying_party_public_key().data(),
                                        value.relying_party_public_key().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(
    const PublicKeyCredentialRequestOptions& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const PublicKeyCredentialRequestOptions& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_challenge(); }) {
      if (!value.has_challenge()) {
        return;
      }
    }
    output += indent + "  challenge: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.challenge().data(), value.challenge().size())
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_adjusted_timeout(); }) {
      if (!value.has_adjusted_timeout()) {
        return;
      }
    }
    output += indent + "  adjusted_timeout: ";
    base::StringAppendF(&output, "%" PRId64, value.adjusted_timeout());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_relying_party_id(); }) {
      if (!value.has_relying_party_id()) {
        return;
      }
    }
    output += indent + "  relying_party_id: ";
    base::StringAppendF(&output, "%s", value.relying_party_id().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "  allow_credentials: {";
  for (int i = 0; i < value.allow_credentials_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.allow_credentials(i), indent_size + 4)
                            .c_str());
    if (i == value.allow_credentials_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_user_verification(); }) {
      if (!value.has_user_verification()) {
        return;
      }
    }
    output += indent + "  user_verification: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(value.user_verification(),
                                                      indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_appid(); }) {
      if (!value.has_appid()) {
        return;
      }
    }
    output += indent + "  appid: ";
    base::StringAppendF(&output, "%s", value.appid().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "  cable_authentication_data: {";
  for (int i = 0; i < value.cable_authentication_data_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.cable_authentication_data(i), indent_size + 4)
                            .c_str());
    if (i == value.cable_authentication_data_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const AuthenticatorSelectionCriteria& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const AuthenticatorSelectionCriteria& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_authenticator_attachment(); }) {
      if (!value.has_authenticator_attachment()) {
        return;
      }
    }
    output += indent + "  authenticator_attachment: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.authenticator_attachment(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_require_resident_key(); }) {
      if (!value.has_require_resident_key()) {
        return;
      }
    }
    output += indent + "  require_resident_key: ";
    base::StringAppendF(&output, "%s",
                        value.require_resident_key() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_user_verification(); }) {
      if (!value.has_user_verification()) {
        return;
      }
    }
    output += indent + "  user_verification: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(value.user_verification(),
                                                      indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(
    const PublicKeyCredentialCreationOptions& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const PublicKeyCredentialCreationOptions& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_relying_party(); }) {
      if (!value.has_relying_party()) {
        return;
      }
    }
    output += indent + "  relying_party: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.relying_party(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_user(); }) {
      if (!value.has_user()) {
        return;
      }
    }
    output += indent + "  user: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.user(), indent_size + 2).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_challenge(); }) {
      if (!value.has_challenge()) {
        return;
      }
    }
    output += indent + "  challenge: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.challenge().data(), value.challenge().size())
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "  public_key_parameters: {";
  for (int i = 0; i < value.public_key_parameters_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.public_key_parameters(i), indent_size + 4)
                            .c_str());
    if (i == value.public_key_parameters_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_adjusted_timeout(); }) {
      if (!value.has_adjusted_timeout()) {
        return;
      }
    }
    output += indent + "  adjusted_timeout: ";
    base::StringAppendF(&output, "%" PRId64, value.adjusted_timeout());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "  exclude_credentials: {";
  for (int i = 0; i < value.exclude_credentials_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.exclude_credentials(i), indent_size + 4)
                            .c_str());
    if (i == value.exclude_credentials_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_authenticator_selection(); }) {
      if (!value.has_authenticator_selection()) {
        return;
      }
    }
    output += indent + "  authenticator_selection: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.authenticator_selection(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_attestation(); }) {
      if (!value.has_attestation()) {
        return;
      }
    }
    output += indent + "  attestation: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.attestation(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_cable_registration_data(); }) {
      if (!value.has_cable_registration_data()) {
        return;
      }
    }
    output += indent + "  cable_registration_data: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.cable_registration_data(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_hmac_create_secret(); }) {
      if (!value.has_hmac_create_secret()) {
        return;
      }
    }
    output += indent + "  hmac_create_secret: ";
    base::StringAppendF(&output, "%s",
                        value.hmac_create_secret() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_protection_policy(); }) {
      if (!value.has_protection_policy()) {
        return;
      }
    }
    output += indent + "  protection_policy: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(value.protection_policy(),
                                                      indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_enforce_protection_policy(); }) {
      if (!value.has_enforce_protection_policy()) {
        return;
      }
    }
    output += indent + "  enforce_protection_policy: ";
    base::StringAppendF(&output, "%s",
                        value.enforce_protection_policy() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_appid_exclude(); }) {
      if (!value.has_appid_exclude()) {
        return;
      }
    }
    output += indent + "  appid_exclude: ";
    base::StringAppendF(&output, "%s", value.appid_exclude().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const PublicKeyCredentialDescriptor& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const PublicKeyCredentialDescriptor& value,
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
    if constexpr (requires(T t) { t.has_id(); }) {
      if (!value.has_id()) {
        return;
      }
    }
    output += indent + "  id: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.id().data(), value.id().size()).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "  transports: {";
  for (int i = 0; i < value.transports_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.transports(i), indent_size + 4)
            .c_str());
    if (i == value.transports_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  output += indent + "}";
  return output;
}

}  // namespace cryptohome::fido
