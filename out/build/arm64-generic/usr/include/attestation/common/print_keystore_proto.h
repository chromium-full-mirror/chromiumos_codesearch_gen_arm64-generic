// Copyright 2024 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// THIS CODE IS GENERATED.
// Generated with command:
// ../../../../../../../tmp/portage/chromeos-base/attestation-0.0.1-r4354/work/attestation-0.0.1/libhwsec-foundation/utility/proto_print.py
// --subdir common --proto-include attestation/proto_bindings --output-dir
// /build/arm64-generic/var/cache/portage/chromeos-base/attestation/out/Default/gen/attestation/common
// /build/arm64-generic/usr/include/chromeos/dbus/attestation/attestation_ca.proto
// /build/arm64-generic/usr/include/chromeos/dbus/attestation/interface.proto
// /build/arm64-generic/usr/include/chromeos/dbus/attestation/keystore.proto

#ifndef ATTESTATION_COMMON_PRINT_KEYSTORE_PROTO_H_
#define ATTESTATION_COMMON_PRINT_KEYSTORE_PROTO_H_

#include <string>

#include <brillo/brillo_export.h>

#include "attestation/proto_bindings/keystore.pb.h"

namespace attestation {

std::string GetProtoDebugStringWithIndent(KeyType value, int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(KeyType value);
std::string GetProtoDebugStringWithIndent(KeyUsage value, int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(KeyUsage value);

}  // namespace attestation

#endif  // ATTESTATION_COMMON_PRINT_KEYSTORE_PROTO_H_
