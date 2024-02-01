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

#include "cryptohome/common/print_recoverable_key_store_proto.h"

#include <inttypes.h>

#include <string>

#include <base/strings/string_number_conversions.h>
#include <base/strings/stringprintf.h>

namespace cryptohome {

std::string GetProtoDebugString(KnowledgeFactorType value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(KnowledgeFactorType value,
                                          int indent_size) {
  if (value == KNOWLEDGE_FACTOR_TYPE_UNSPECIFIED) {
    return "KNOWLEDGE_FACTOR_TYPE_UNSPECIFIED";
  }
  if (value == KNOWLEDGE_FACTOR_TYPE_PIN) {
    return "KNOWLEDGE_FACTOR_TYPE_PIN";
  }
  if (value == KNOWLEDGE_FACTOR_TYPE_PASSWORD) {
    return "KNOWLEDGE_FACTOR_TYPE_PASSWORD";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(KnowledgeFactorHashAlgorithm value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(KnowledgeFactorHashAlgorithm value,
                                          int indent_size) {
  if (value == HASH_TYPE_UNSPECIFIED) {
    return "HASH_TYPE_UNSPECIFIED";
  }
  if (value == HASH_TYPE_PBKDF2_AES256_1234) {
    return "HASH_TYPE_PBKDF2_AES256_1234";
  }
  if (value == HASH_TYPE_SHA256_TOP_HALF) {
    return "HASH_TYPE_SHA256_TOP_HALF";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(const RecoverableKeyStoreParameters& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const RecoverableKeyStoreParameters& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_backend_public_key(); }) {
      if (!value.has_backend_public_key()) {
        return;
      }
    }
    output += indent + "  backend_public_key: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.backend_public_key().data(),
                                        value.backend_public_key().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_counter_id(); }) {
      if (!value.has_counter_id()) {
        return;
      }
    }
    output += indent + "  counter_id: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.counter_id().data(), value.counter_id().size())
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_max_attempts(); }) {
      if (!value.has_max_attempts()) {
        return;
      }
    }
    output += indent + "  max_attempts: ";
    base::StringAppendF(&output, "%" PRId32, value.max_attempts());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_key_store_handle(); }) {
      if (!value.has_key_store_handle()) {
        return;
      }
    }
    output += indent + "  key_store_handle: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.key_store_handle().data(),
                                        value.key_store_handle().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const WrappedSecurityDomainKey& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const WrappedSecurityDomainKey& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_key_name(); }) {
      if (!value.has_key_name()) {
        return;
      }
    }
    output += indent + "  key_name: ";
    base::StringAppendF(&output, "%s", value.key_name().c_str());
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
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_wrapped_private_key(); }) {
      if (!value.has_wrapped_private_key()) {
        return;
      }
    }
    output += indent + "  wrapped_private_key: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.wrapped_private_key().data(),
                                        value.wrapped_private_key().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_wrapped_wrapping_key(); }) {
      if (!value.has_wrapped_wrapping_key()) {
        return;
      }
    }
    output += indent + "  wrapped_wrapping_key: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.wrapped_wrapping_key().data(),
                                        value.wrapped_wrapping_key().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const RecoverableKeyStoreMetadata& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(
    const RecoverableKeyStoreMetadata& value,
    int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_knowledge_factor_type(); }) {
      if (!value.has_knowledge_factor_type()) {
        return;
      }
    }
    output += indent + "  knowledge_factor_type: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.knowledge_factor_type(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_hash_type(); }) {
      if (!value.has_hash_type()) {
        return;
      }
    }
    output += indent + "  hash_type: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.hash_type(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_hash_salt(); }) {
      if (!value.has_hash_salt()) {
        return;
      }
    }
    output += indent + "  hash_salt: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.hash_salt().data(), value.hash_salt().size())
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_cert_path(); }) {
      if (!value.has_cert_path()) {
        return;
      }
    }
    output += indent + "  cert_path: ";
    base::StringAppendF(
        &output, "%s",
        base::HexEncode(value.cert_path().data(), value.cert_path().size())
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_cert_list_version(); }) {
      if (!value.has_cert_list_version()) {
        return;
      }
    }
    output += indent + "  cert_list_version: ";
    base::StringAppendF(&output, "%" PRIu64 " (0x%016" PRIX64 ")",
                        value.cert_list_version(), value.cert_list_version());
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
    base::StringAppendF(&output, "%" PRIu64 " (0x%016" PRIX64 ")",
                        value.timestamp(), value.timestamp());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

std::string GetProtoDebugString(const RecoverableKeyStore& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const RecoverableKeyStore& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_key_store_parameters(); }) {
      if (!value.has_key_store_parameters()) {
        return;
      }
    }
    output += indent + "  key_store_parameters: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.key_store_parameters(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_key_store_metadata(); }) {
      if (!value.has_key_store_metadata()) {
        return;
      }
    }
    output += indent + "  key_store_metadata: ";
    base::StringAppendF(&output, "%s",
                        GetProtoDebugStringWithIndent(
                            value.key_store_metadata(), indent_size + 2)
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_wrapped_recovery_key(); }) {
      if (!value.has_wrapped_recovery_key()) {
        return;
      }
    }
    output += indent + "  wrapped_recovery_key: ";
    base::StringAppendF(&output, "%s",
                        base::HexEncode(value.wrapped_recovery_key().data(),
                                        value.wrapped_recovery_key().size())
                            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_wrapped_security_domain_key(); }) {
      if (!value.has_wrapped_security_domain_key()) {
        return;
      }
    }
    output += indent + "  wrapped_security_domain_key: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.wrapped_security_domain_key(),
                                      indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  output += indent + "}";
  return output;
}

}  // namespace cryptohome
