// Copyright 2024 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// THIS CODE IS GENERATED.
// Generated with command:
// ../../../../../../../tmp/portage/chromeos-base/libhwsec-foundation-0.0.1-r701/work/libhwsec-foundation-0.0.1/libhwsec-foundation/utility/proto_print.py
// --package-dir libhwsec-foundation --subdir tool --output-dir
// /build/arm64-generic/var/cache/portage/chromeos-base/libhwsec-foundation/out/Default/gen/libhwsec-foundation/tool
// /build/arm64-generic/tmp/portage/chromeos-base/libhwsec-foundation-0.0.1-r701/work/libhwsec-foundation-0.0.1/libhwsec-foundation/tool/hwsec_status.proto

#include "libhwsec-foundation/tool/print_hwsec_status_proto.h"

#include <inttypes.h>

#include <string>

#include <base/strings/string_number_conversions.h>
#include <base/strings/stringprintf.h>

namespace hwsec_foundation {

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

std::string GetProtoDebugString(const HwsecStatus& value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(const HwsecStatus& value,
                                          int indent_size) {
  std::string indent(indent_size, ' ');
  std::string output =
      base::StringPrintf("[%s] {\n", value.GetTypeName().c_str());

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
    if constexpr (requires(T t) { t.has_gsc_rw_version(); }) {
      if (!value.has_gsc_rw_version()) {
        return;
      }
    }
    output += indent + "  gsc_rw_version: ";
    base::StringAppendF(&output, "%s", value.gsc_rw_version().c_str());
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
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_prepared_for_enrollment(); }) {
      if (!value.has_prepared_for_enrollment()) {
        return;
      }
    }
    output += indent + "  prepared_for_enrollment: ";
    base::StringAppendF(&output, "%s",
                        value.prepared_for_enrollment() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_enrolled(); }) {
      if (!value.has_enrolled()) {
        return;
      }
    }
    output += indent + "  enrolled: ";
    base::StringAppendF(&output, "%s", value.enrolled() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_verified_boot(); }) {
      if (!value.has_verified_boot()) {
        return;
      }
    }
    output += indent + "  verified_boot: ";
    base::StringAppendF(&output, "%s",
                        value.verified_boot() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_inst_attrs_count(); }) {
      if (!value.has_inst_attrs_count()) {
        return;
      }
    }
    output += indent + "  inst_attrs_count: ";
    base::StringAppendF(&output, "%" PRId32, value.inst_attrs_count());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_inst_attrs_is_secure(); }) {
      if (!value.has_inst_attrs_is_secure()) {
        return;
      }
    }
    output += indent + "  inst_attrs_is_secure: ";
    base::StringAppendF(&output, "%s",
                        value.inst_attrs_is_secure() ? "true" : "false");
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_inst_attrs_state(); }) {
      if (!value.has_inst_attrs_state()) {
        return;
      }
    }
    output += indent + "  inst_attrs_state: ";
    base::StringAppendF(
        &output, "%s",
        GetProtoDebugStringWithIndent(value.inst_attrs_state(), indent_size + 2)
            .c_str());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_fwmp_flags(); }) {
      if (!value.has_fwmp_flags()) {
        return;
      }
    }
    output += indent + "  fwmp_flags: ";
    base::StringAppendF(&output, "%" PRIu32 " (0x%08" PRIX32 ")",
                        value.fwmp_flags(), value.fwmp_flags());
    output += "\n";
  }(value, indent_size, indent, output);
  []<typename T>(const T& value, int indent_size, const std::string& indent,
                 std::string& output) {
    if constexpr (requires(T t) { t.has_user_token_ready(); }) {
      if (!value.has_user_token_ready()) {
        return;
      }
    }
    output += indent + "  user_token_ready: ";
    base::StringAppendF(&output, "%s",
                        value.user_token_ready() ? "true" : "false");
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

}  // namespace hwsec_foundation
