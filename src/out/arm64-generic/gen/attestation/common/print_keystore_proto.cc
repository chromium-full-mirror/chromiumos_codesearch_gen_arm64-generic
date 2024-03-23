// Copyright 2024 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// THIS CODE IS GENERATED.
// Generated with command:
// ../../../../../../../tmp/portage/chromeos-base/attestation-0.0.1-r4344/work/attestation-0.0.1/libhwsec-foundation/utility/proto_print.py
// --subdir common --proto-include attestation/proto_bindings --output-dir
// /build/arm64-generic/var/cache/portage/chromeos-base/attestation/out/Default/gen/attestation/common
// /build/arm64-generic/usr/include/chromeos/dbus/attestation/attestation_ca.proto
// /build/arm64-generic/usr/include/chromeos/dbus/attestation/interface.proto
// /build/arm64-generic/usr/include/chromeos/dbus/attestation/keystore.proto

#include "attestation/common/print_keystore_proto.h"

#include <inttypes.h>

#include <string>

#include <base/strings/string_number_conversions.h>
#include <base/strings/stringprintf.h>

namespace attestation {

std::string GetProtoDebugString(KeyType value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(KeyType value, int indent_size) {
  if (value == KEY_TYPE_RSA) {
    return "KEY_TYPE_RSA";
  }
  if (value == KEY_TYPE_ECC) {
    return "KEY_TYPE_ECC";
  }
  return "<unknown>";
}

std::string GetProtoDebugString(KeyUsage value) {
  return GetProtoDebugStringWithIndent(value, 0);
}

std::string GetProtoDebugStringWithIndent(KeyUsage value, int indent_size) {
  if (value == KEY_USAGE_SIGN) {
    return "KEY_USAGE_SIGN";
  }
  if (value == KEY_USAGE_DECRYPT) {
    return "KEY_USAGE_DECRYPT";
  }
  return "<unknown>";
}

}  // namespace attestation
