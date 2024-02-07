// Copyright 2024 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// THIS CODE IS GENERATED.
// Generated with command:
// ../../../../../../../tmp/portage/chromeos-base/cryptohome-0.0.2-r5677/work/cryptohome-0.0.2/platform2/libhwsec-foundation/utility/proto_print.py
// --package-dir cryptohome --subdir common --proto-include
// cryptohome/proto_bindings --output-dir
// /build/arm64-generic/var/cache/portage/chromeos-base/cryptohome/out/Default/gen/cryptohome/common
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/auth_factor.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/fido.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/recoverable_key_store.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/key.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/rpc.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/UserDataAuth.proto

#ifndef CRYPTOHOME_COMMON_PRINT_RECOVERABLE_KEY_STORE_PROTO_H_
#define CRYPTOHOME_COMMON_PRINT_RECOVERABLE_KEY_STORE_PROTO_H_

#include <string>

#include <brillo/brillo_export.h>

#include "cryptohome/proto_bindings/recoverable_key_store.pb.h"

namespace cryptohome {

std::string GetProtoDebugStringWithIndent(KnowledgeFactorType value,
                                          int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(KnowledgeFactorType value);
std::string GetProtoDebugStringWithIndent(KnowledgeFactorHashAlgorithm value,
                                          int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    KnowledgeFactorHashAlgorithm value);
std::string GetProtoDebugStringWithIndent(
    const RecoverableKeyStoreParameters& value,
    int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    const RecoverableKeyStoreParameters& value);
std::string GetProtoDebugStringWithIndent(const WrappedSecurityDomainKey& value,
                                          int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    const WrappedSecurityDomainKey& value);
std::string GetProtoDebugStringWithIndent(
    const RecoverableKeyStoreMetadata& value,
    int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    const RecoverableKeyStoreMetadata& value);
std::string GetProtoDebugStringWithIndent(const RecoverableKeyStore& value,
                                          int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(const RecoverableKeyStore& value);

}  // namespace cryptohome

#endif  // CRYPTOHOME_COMMON_PRINT_RECOVERABLE_KEY_STORE_PROTO_H_
