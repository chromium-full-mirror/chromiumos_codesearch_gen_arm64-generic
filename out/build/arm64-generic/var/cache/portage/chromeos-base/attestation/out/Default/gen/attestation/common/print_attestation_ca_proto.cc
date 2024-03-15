// Copyright 2024 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// THIS CODE IS GENERATED.
// Generated with command:
// ../../../../../../../tmp/portage/chromeos-base/attestation-0.0.1-r4333/work/attestation-0.0.1/libhwsec-foundation/utility/proto_print.py
// --subdir common --proto-include attestation/proto_bindings --output-dir
// /build/arm64-generic/var/cache/portage/chromeos-base/attestation/out/Default/gen/attestation/common
// /build/arm64-generic/usr/include/chromeos/dbus/attestation/attestation_ca.proto
// /build/arm64-generic/usr/include/chromeos/dbus/attestation/interface.proto
// /build/arm64-generic/usr/include/chromeos/dbus/attestation/keystore.proto

#include "attestation/common/print_attestation_ca_proto.h"

#include <inttypes.h>

#include <string>

#include <base/strings/string_number_conversions.h>
#include <base/strings/stringprintf.h>

namespace attestation {

std::string GetProtoDebugString(CertificateProfile value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(CertificateProfile value,
                                          int indent_size) {
  if (value == ENTERPRISE_MACHINE_CERTIFICATE) {
    return "ENTERPRISE_MACHINE_CERTIFICATE";
  }
  if (value == ENTERPRISE_USER_CERTIFICATE) {
    return "ENTERPRISE_USER_CERTIFICATE";
  }
  if (value == CONTENT_PROTECTION_CERTIFICATE) {
    return "CONTENT_PROTECTION_CERTIFICATE";
  }
  if (value == CONTENT_PROTECTION_CERTIFICATE_WITH_STABLE_ID) {
    return "CONTENT_PROTECTION_CERTIFICATE_WITH_STABLE_ID";
  }
  if (value == CAST_CERTIFICATE) {
    return "CAST_CERTIFICATE";
  }
  if (value == GFSC_CERTIFICATE) {
    return "GFSC_CERTIFICATE";
  }
  if (value == JETSTREAM_CERTIFICATE) {
    return "JETSTREAM_CERTIFICATE";
  }
  if (value == ENTERPRISE_ENROLLMENT_CERTIFICATE) {
    return "ENTERPRISE_ENROLLMENT_CERTIFICATE";
  }
  if (value == XTS_CERTIFICATE) {
    return "XTS_CERTIFICATE";
  }
  if (value == ENTERPRISE_VTPM_EK_CERTIFICATE) {
    return "ENTERPRISE_VTPM_EK_CERTIFICATE";
  }
  if (value == SOFT_BIND_CERTIFICATE) {
    return "SOFT_BIND_CERTIFICATE";
  }
  if (value == DEVICE_SETUP_CERTIFICATE) {
    return "DEVICE_SETUP_CERTIFICATE";
  }
  if (value == ARC_TPM_CERTIFYING_KEY_CERTIFICATE) {
    return "ARC_TPM_CERTIFYING_KEY_CERTIFICATE";
  }
  if (value == ARC_ATTESTATION_DEVICE_KEY_CERTIFICATE) {
    return "ARC_ATTESTATION_DEVICE_KEY_CERTIFICATE";
  }
  if (value == DEVICE_TRUST_USER_CERTIFICATE) {
    return "DEVICE_TRUST_USER_CERTIFICATE";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(TpmVersion value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(TpmVersion value, int indent_size) {
  if (value == TPM_1_2) {
    return "TPM_1_2";
  }
  if (value == TPM_2_0) {
    return "TPM_2_0";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(NVRAMQuoteType value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(NVRAMQuoteType value,
                                          int indent_size) {
  if (value == BOARD_ID) {
    return "BOARD_ID";
  }
  if (value == SN_BITS) {
    return "SN_BITS";
  }
  if (value == RSA_PUB_EK_CERT) {
    return "RSA_PUB_EK_CERT";
  }
  if (value == RSU_DEVICE_ID) {
    return "RSU_DEVICE_ID";
  }
  if (value == RMA_BYTES) {
    return "RMA_BYTES";
  }
  if (value == G2F_CERT) {
    return "G2F_CERT";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(ResponseStatus value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(ResponseStatus value,
                                          int indent_size) {
  if (value == OK) {
    return "OK";
  }
  if (value == SERVER_ERROR) {
    return "SERVER_ERROR";
  }
  if (value == BAD_REQUEST) {
    return "BAD_REQUEST";
  }
  if (value == REJECT) {
    return "REJECT";
  }
  if (value == QUOTA_LIMIT_EXCEEDED) {
    return "QUOTA_LIMIT_EXCEEDED";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(VerifiedAccessFlow value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(VerifiedAccessFlow value,
                                          int indent_size) {
  if (value == ENTERPRISE_MACHINE) {
    return "ENTERPRISE_MACHINE";
  }
  if (value == ENTERPRISE_USER) {
    return "ENTERPRISE_USER";
  }
  if (value == CBCM) {
    return "CBCM";
  }
  if (value == DEVICE_TRUST_CONNECTOR) {
    return "DEVICE_TRUST_CONNECTOR";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(const Quote& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const Quote& value, int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_quote(); }) {
      if (!value.has_quote()) {
        return;
      }
    }
    output += indent + "  quote: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.quote().data(), value.quote().size()).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_quoted_data(); }) {
      if (!value.has_quoted_data()) {
        return;
      }
    }
    output += indent + "  quoted_data: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.quoted_data().data(), value.quoted_data().size())
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_quoted_pcr_value(); }) {
      if (!value.has_quoted_pcr_value()) {
        return;
      }
    }
    output += indent + "  quoted_pcr_value: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.quoted_pcr_value().data(),
                                        value.quoted_pcr_value().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_pcr_source_hint(); }) {
      if (!value.has_pcr_source_hint()) {
        return;
      }
    }
    output += indent + "  pcr_source_hint: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.pcr_source_hint().data(),
                                        value.pcr_source_hint().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const EncryptedData& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const EncryptedData& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_wrapped_key(); }) {
      if (!value.has_wrapped_key()) {
        return;
      }
    }
    output += indent + "  wrapped_key: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.wrapped_key().data(), value.wrapped_key().size())
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_iv(); }) {
      if (!value.has_iv()) {
        return;
      }
    }
    output += indent + "  iv: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.iv().data(), value.iv().size()).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_mac(); }) {
      if (!value.has_mac()) {
        return;
      }
    }
    output += indent + "  mac: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.mac().data(), value.mac().size()).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_encrypted_data(); }) {
      if (!value.has_encrypted_data()) {
        return;
      }
    }
    output += indent + "  encrypted_data: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.encrypted_data().data(),
                                        value.encrypted_data().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_wrapping_key_id(); }) {
      if (!value.has_wrapping_key_id()) {
        return;
      }
    }
    output += indent + "  wrapping_key_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.wrapping_key_id().data(),
                                        value.wrapping_key_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const SignedData& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const SignedData& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

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
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const EncryptedIdentityCredential& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const EncryptedIdentityCredential& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_asym_ca_contents(); }) {
      if (!value.has_asym_ca_contents()) {
        return;
      }
    }
    output += indent + "  asym_ca_contents: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.asym_ca_contents().data(),
                                        value.asym_ca_contents().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_sym_ca_attestation(); }) {
      if (!value.has_sym_ca_attestation()) {
        return;
      }
    }
    output += indent + "  sym_ca_attestation: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.sym_ca_attestation().data(),
                                        value.sym_ca_attestation().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_tpm_version(); }) {
      if (!value.has_tpm_version()) {
        return;
      }
    }
    output += indent + "  tpm_version: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.tpm_version(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_encrypted_seed(); }) {
      if (!value.has_encrypted_seed()) {
        return;
      }
    }
    output += indent + "  encrypted_seed: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.encrypted_seed().data(),
                                        value.encrypted_seed().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_credential_mac(); }) {
      if (!value.has_credential_mac()) {
        return;
      }
    }
    output += indent + "  credential_mac: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.credential_mac().data(),
                                        value.credential_mac().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_wrapped_certificate(); }) {
      if (!value.has_wrapped_certificate()) {
        return;
      }
    }
    output += indent + "  wrapped_certificate: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.wrapped_certificate(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const AttestationEnrollmentRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const AttestationEnrollmentRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_encrypted_endorsement_credential(); }) {
      if (!value.has_encrypted_endorsement_credential()) {
        return;
      }
    }
    output += indent + "  encrypted_endorsement_credential: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.encrypted_endorsement_credential(),
                                      indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_identity_public_key(); }) {
      if (!value.has_identity_public_key()) {
        return;
      }
    }
    output += indent + "  identity_public_key: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.identity_public_key().data(),
                                        value.identity_public_key().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_pcr0_quote(); }) {
      if (!value.has_pcr0_quote()) {
        return;
      }
    }
    output += indent + "  pcr0_quote: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.pcr0_quote(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_pcr1_quote(); }) {
      if (!value.has_pcr1_quote()) {
        return;
      }
    }
    output += indent + "  pcr1_quote: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.pcr1_quote(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_enterprise_enrollment_nonce(); }) {
      if (!value.has_enterprise_enrollment_nonce()) {
        return;
      }
    }
    output += indent + "  enterprise_enrollment_nonce: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.enterprise_enrollment_nonce().data(),
                        value.enterprise_enrollment_nonce().size())
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_tpm_version(); }) {
      if (!value.has_tpm_version()) {
        return;
      }
    }
    output += indent + "  tpm_version: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.tpm_version(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_encrypted_rsa_endorsement_quote(); }) {
      if (!value.has_encrypted_rsa_endorsement_quote()) {
        return;
      }
    }
    output += indent + "  encrypted_rsa_endorsement_quote: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.encrypted_rsa_endorsement_quote(),
                                      indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const AttestationEnrollmentResponse& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const AttestationEnrollmentResponse& value,
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
    if constexpr (requires(T t) { t.has_detail(); }) {
      if (!value.has_detail()) {
        return;
      }
    }
    output += indent + "  detail: ";
    base::StringAppendF(&output, "%s", value.detail().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_encrypted_identity_credential(); }) {
      if (!value.has_encrypted_identity_credential()) {
        return;
      }
    }
    output += indent + "  encrypted_identity_credential: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.encrypted_identity_credential(),
                                      indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_extra_details(); }) {
      if (!value.has_extra_details()) {
        return;
      }
    }
    output += indent + "  extra_details: ";
    base::StringAppendF(&output, "%s", value.extra_details().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const DeviceSetupCertificateMetadata& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const DeviceSetupCertificateMetadata& value,
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
    if constexpr (requires(T t) { t.has_timestamp_seconds(); }) {
      if (!value.has_timestamp_seconds()) {
        return;
      }
    }
    output += indent + "  timestamp_seconds: ";
    base::StringAppendF(&output, "%" PRIu64 " (0x%016" PRIX64 ")",
                        value.timestamp_seconds(), value.timestamp_seconds());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_content_binding(); }) {
      if (!value.has_content_binding()) {
        return;
      }
    }
    output += indent + "  content_binding: ";
    base::StringAppendF(&output, "%s", value.content_binding().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const AttestationCertificateRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const AttestationCertificateRequest& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_identity_credential(); }) {
      if (!value.has_identity_credential()) {
        return;
      }
    }
    output += indent + "  identity_credential: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.identity_credential().data(),
                                        value.identity_credential().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_certified_public_key(); }) {
      if (!value.has_certified_public_key()) {
        return;
      }
    }
    output += indent + "  certified_public_key: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.certified_public_key().data(),
                                        value.certified_public_key().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_certified_key_info(); }) {
      if (!value.has_certified_key_info()) {
        return;
      }
    }
    output += indent + "  certified_key_info: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.certified_key_info().data(),
                                        value.certified_key_info().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_certified_key_proof(); }) {
      if (!value.has_certified_key_proof()) {
        return;
      }
    }
    output += indent + "  certified_key_proof: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.certified_key_proof().data(),
                                        value.certified_key_proof().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_message_id(); }) {
      if (!value.has_message_id()) {
        return;
      }
    }
    output += indent + "  message_id: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.message_id().data(), value.message_id().size())
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_profile(); }) {
      if (!value.has_profile()) {
        return;
      }
    }
    output += indent + "  profile: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.profile(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_origin(); }) {
      if (!value.has_origin()) {
        return;
      }
    }
    output += indent + "  origin: ";
    base::StringAppendF(&output, "%s", value.origin().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_temporal_index(); }) {
      if (!value.has_temporal_index()) {
        return;
      }
    }
    output += indent + "  temporal_index: ";
    base::StringAppendF(&output, "%" PRId32, value.temporal_index());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_tpm_version(); }) {
      if (!value.has_tpm_version()) {
        return;
      }
    }
    output += indent + "  tpm_version: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.tpm_version(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) {
                    t.has_device_setup_certificate_metadata();
                  }) {
      if (!value.has_device_setup_certificate_metadata()) {
        return;
      }
    }
    output += indent + "  device_setup_certificate_metadata: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.device_setup_certificate_metadata(),
                                      indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_attested_device_id(); }) {
      if (!value.has_attested_device_id()) {
        return;
      }
    }
    output += indent + "  attested_device_id: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.attested_device_id().data(),
                                        value.attested_device_id().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const AttestationCertificateResponse& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const AttestationCertificateResponse& value,
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
    if constexpr (requires(T t) { t.has_detail(); }) {
      if (!value.has_detail()) {
        return;
      }
    }
    output += indent + "  detail: ";
    base::StringAppendF(&output, "%s", value.detail().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_certified_key_credential(); }) {
      if (!value.has_certified_key_credential()) {
        return;
      }
    }
    output += indent + "  certified_key_credential: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.certified_key_credential().data(),
                                        value.certified_key_credential().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_intermediate_ca_cert(); }) {
      if (!value.has_intermediate_ca_cert()) {
        return;
      }
    }
    output += indent + "  intermediate_ca_cert: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.intermediate_ca_cert().data(),
                                        value.intermediate_ca_cert().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_message_id(); }) {
      if (!value.has_message_id()) {
        return;
      }
    }
    output += indent + "  message_id: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.message_id().data(), value.message_id().size())
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "  additional_intermediate_ca_cert: {";
  for (int i = 0; i < value.additional_intermediate_ca_cert_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.additional_intermediate_ca_cert(i).data(),
                        value.additional_intermediate_ca_cert(i).size())
            .c_str());
    if (i == value.additional_intermediate_ca_cert_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_extra_details(); }) {
      if (!value.has_extra_details()) {
        return;
      }
    }
    output += indent + "  extra_details: ";
    base::StringAppendF(&output, "%s", value.extra_details().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const AttestationResetRequest& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const AttestationResetRequest& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_encrypted_identity_credential(); }) {
      if (!value.has_encrypted_identity_credential()) {
        return;
      }
    }
    output += indent + "  encrypted_identity_credential: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.encrypted_identity_credential(),
                                      indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_token(); }) {
      if (!value.has_token()) {
        return;
      }
    }
    output += indent + "  token: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.token().data(), value.token().size()).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_encrypted_endorsement_credential(); }) {
      if (!value.has_encrypted_endorsement_credential()) {
        return;
      }
    }
    output += indent + "  encrypted_endorsement_credential: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.encrypted_endorsement_credential(),
                                      indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const AttestationResetResponse& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const AttestationResetResponse& value,
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
    if constexpr (requires(T t) { t.has_detail(); }) {
      if (!value.has_detail()) {
        return;
      }
    }
    output += indent + "  detail: ";
    base::StringAppendF(&output, "%s", value.detail().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_extra_details(); }) {
      if (!value.has_extra_details()) {
        return;
      }
    }
    output += indent + "  extra_details: ";
    base::StringAppendF(&output, "%s", value.extra_details().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const Challenge& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const Challenge& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_prefix(); }) {
      if (!value.has_prefix()) {
        return;
      }
    }
    output += indent + "  prefix: ";
    base::StringAppendF(&output, "%s", value.prefix().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_nonce(); }) {
      if (!value.has_nonce()) {
        return;
      }
    }
    output += indent + "  nonce: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.nonce().data(), value.nonce().size()).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_timestamp(); }) {
      if (!value.has_timestamp()) {
        return;
      }
    }
    output += indent + "  timestamp: ";
    base::StringAppendF(&output, "%" PRId64, value.timestamp());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const ChallengeResponse& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const ChallengeResponse& value,
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
        GetProtoDebugStringWithIndent(value.challenge(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_nonce(); }) {
      if (!value.has_nonce()) {
        return;
      }
    }
    output += indent + "  nonce: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.nonce().data(), value.nonce().size()).c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_encrypted_key_info(); }) {
      if (!value.has_encrypted_key_info()) {
        return;
      }
    }
    output += indent + "  encrypted_key_info: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.encrypted_key_info(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const KeyInfo& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const KeyInfo& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_flow_type(); }) {
      if (!value.has_flow_type()) {
        return;
      }
    }
    output += indent + "  flow_type: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.flow_type(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_domain(); }) {
      if (!value.has_domain()) {
        return;
      }
    }
    output += indent + "  domain: ";
    base::StringAppendF(&output, "%s", value.domain().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_device_id(); }) {
      if (!value.has_device_id()) {
        return;
      }
    }
    output += indent + "  device_id: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.device_id().data(), value.device_id().size())
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_certificate(); }) {
      if (!value.has_certificate()) {
        return;
      }
    }
    output += indent + "  certificate: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.certificate().data(), value.certificate().size())
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_signed_public_key_and_challenge(); }) {
      if (!value.has_signed_public_key_and_challenge()) {
        return;
      }
    }
    output += indent + "  signed_public_key_and_challenge: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.signed_public_key_and_challenge().data(),
                        value.signed_public_key_and_challenge().size())
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_customer_id(); }) {
      if (!value.has_customer_id()) {
        return;
      }
    }
    output += indent + "  customer_id: ";
    base::StringAppendF(&output, "%s", value.customer_id().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_browser_instance_public_key(); }) {
      if (!value.has_browser_instance_public_key()) {
        return;
      }
    }
    output += indent + "  browser_instance_public_key: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.browser_instance_public_key().data(),
                        value.browser_instance_public_key().size())
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_signing_scheme(); }) {
      if (!value.has_signing_scheme()) {
        return;
      }
    }
    output += indent + "  signing_scheme: ";
    base::StringAppendF(&output, "%s", value.signing_scheme().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_device_trust_signals_json(); }) {
      if (!value.has_device_trust_signals_json()) {
        return;
      }
    }
    output += indent + "  device_trust_signals_json: ";
    base::StringAppendF(&output, "%s",
                        value.device_trust_signals_json().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_dm_token(); }) {
      if (!value.has_dm_token()) {
        return;
      }
    }
    output += indent + "  dm_token: ";
    base::StringAppendF(&output, "%s", value.dm_token().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_user_customer_id(); }) {
      if (!value.has_user_customer_id()) {
        return;
      }
    }
    output += indent + "  user_customer_id: ";
    base::StringAppendF(&output, "%s", value.user_customer_id().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_obfuscated_gaia_id(); }) {
      if (!value.has_obfuscated_gaia_id()) {
        return;
      }
    }
    output += indent + "  obfuscated_gaia_id: ";
    base::StringAppendF(&output, "%s", value.obfuscated_gaia_id().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_profile_id(); }) {
      if (!value.has_profile_id()) {
        return;
      }
    }
    output += indent + "  profile_id: ";
    base::StringAppendF(&output, "%s", value.profile_id().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const DeviceTrustSignals& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const DeviceTrustSignals& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_device_id(); }) {
      if (!value.has_device_id()) {
        return;
      }
    }
    output += indent + "  device_id: ";
    base::StringAppendF(&output, "%s", value.device_id().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_obfuscated_customer_id(); }) {
      if (!value.has_obfuscated_customer_id()) {
        return;
      }
    }
    output += indent + "  obfuscated_customer_id: ";
    base::StringAppendF(&output, "%s", value.obfuscated_customer_id().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_serial_number(); }) {
      if (!value.has_serial_number()) {
        return;
      }
    }
    output += indent + "  serial_number: ";
    base::StringAppendF(&output, "%s", value.serial_number().c_str());
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
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_os(); }) {
      if (!value.has_os()) {
        return;
      }
    }
    output += indent + "  os: ";
    base::StringAppendF(&output, "%s", value.os().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_device_manufacturer(); }) {
      if (!value.has_device_manufacturer()) {
        return;
      }
    }
    output += indent + "  device_manufacturer: ";
    base::StringAppendF(&output, "%s", value.device_manufacturer().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_device_model(); }) {
      if (!value.has_device_model()) {
        return;
      }
    }
    output += indent + "  device_model: ";
    base::StringAppendF(&output, "%s", value.device_model().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_os_version(); }) {
      if (!value.has_os_version()) {
        return;
      }
    }
    output += indent + "  os_version: ";
    base::StringAppendF(&output, "%s", value.os_version().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "  imei: {";
  for (int i = 0; i < value.imei_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(&output, "%s", value.imei(i).c_str());
    if (i == value.imei_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  output += indent + "  meid: {";
  for (int i = 0; i < value.meid_size(); ++i) {
    if (i > 0) {
      output += ",";
    }
    output += "\n    " + indent;
    base::StringAppendF(&output, "%s", value.meid(i).c_str());
    if (i == value.meid_size() - 1) {
      output += "\n  " + indent;
    }
  }
  output += "}\n";
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_tpm_hash(); }) {
      if (!value.has_tpm_hash()) {
        return;
      }
    }
    output += indent + "  tpm_hash: ";
    base::StringAppendF(&output, "%s", value.tpm_hash().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_is_disk_encrypted(); }) {
      if (!value.has_is_disk_encrypted()) {
        return;
      }
    }
    output += indent + "  is_disk_encrypted: ";
    base::StringAppendF(&output, "%s",
                        value.is_disk_encrypted() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_allow_screen_lock(); }) {
      if (!value.has_allow_screen_lock()) {
        return;
      }
    }
    output += indent + "  allow_screen_lock: ";
    base::StringAppendF(&output, "%s",
                        value.allow_screen_lock() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_is_protected_by_password(); }) {
      if (!value.has_is_protected_by_password()) {
        return;
      }
    }
    output += indent + "  is_protected_by_password: ";
    base::StringAppendF(&output, "%s",
                        value.is_protected_by_password() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_is_jailbroken(); }) {
      if (!value.has_is_jailbroken()) {
        return;
      }
    }
    output += indent + "  is_jailbroken: ";
    base::StringAppendF(&output, "%s",
                        value.is_jailbroken() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_enrollment_domain(); }) {
      if (!value.has_enrollment_domain()) {
        return;
      }
    }
    output += indent + "  enrollment_domain: ";
    base::StringAppendF(&output, "%s", value.enrollment_domain().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_browser_version(); }) {
      if (!value.has_browser_version()) {
        return;
      }
    }
    output += indent + "  browser_version: ";
    base::StringAppendF(&output, "%s", value.browser_version().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_safe_browsing_protection_level(); }) {
      if (!value.has_safe_browsing_protection_level()) {
        return;
      }
    }
    output += indent + "  safe_browsing_protection_level: ";
    base::StringAppendF(&output, "%" PRId32,
                        value.safe_browsing_protection_level());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_site_isolation_enabled(); }) {
      if (!value.has_site_isolation_enabled()) {
        return;
      }
    }
    output += indent + "  site_isolation_enabled: ";
    base::StringAppendF(&output, "%s",
                        value.site_isolation_enabled() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_third_party_blocking_enabled(); }) {
      if (!value.has_third_party_blocking_enabled()) {
        return;
      }
    }
    output += indent + "  third_party_blocking_enabled: ";
    base::StringAppendF(
        &output, "%s", value.third_party_blocking_enabled() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_remote_desktop_available(); }) {
      if (!value.has_remote_desktop_available()) {
        return;
      }
    }
    output += indent + "  remote_desktop_available: ";
    base::StringAppendF(&output, "%s",
                        value.remote_desktop_available() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_signed_in_profile_name(); }) {
      if (!value.has_signed_in_profile_name()) {
        return;
      }
    }
    output += indent + "  signed_in_profile_name: ";
    base::StringAppendF(&output, "%s", value.signed_in_profile_name().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_chrome_cleanup_enabled(); }) {
      if (!value.has_chrome_cleanup_enabled()) {
        return;
      }
    }
    output += indent + "  chrome_cleanup_enabled: ";
    base::StringAppendF(&output, "%s",
                        value.chrome_cleanup_enabled() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) {
                    t.has_password_protection_warning_trigger();
                  }) {
      if (!value.has_password_protection_warning_trigger()) {
        return;
      }
    }
    output += indent + "  password_protection_warning_trigger: ";
    base::StringAppendF(&output, "%" PRId32,
                        value.password_protection_warning_trigger());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_dns_address(); }) {
      if (!value.has_dns_address()) {
        return;
      }
    }
    output += indent + "  dns_address: ";
    base::StringAppendF(&output, "%s", value.dns_address().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_built_in_dns_client_enabled(); }) {
      if (!value.has_built_in_dns_client_enabled()) {
        return;
      }
    }
    output += indent + "  built_in_dns_client_enabled: ";
    base::StringAppendF(&output, "%s",
                        value.built_in_dns_client_enabled() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_firewall_on(); }) {
      if (!value.has_firewall_on()) {
        return;
      }
    }
    output += indent + "  firewall_on: ";
    base::StringAppendF(&output, "%s", value.firewall_on() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_windows_domain(); }) {
      if (!value.has_windows_domain()) {
        return;
      }
    }
    output += indent + "  windows_domain: ";
    base::StringAppendF(&output, "%s", value.windows_domain().c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

}  // namespace attestation
