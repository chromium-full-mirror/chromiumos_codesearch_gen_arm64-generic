// Copyright 2024 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// THIS CODE IS GENERATED.
// Generated with command:
// ../../../../../../../tmp/portage/chromeos-base/cryptohome-0.0.2-r5637/work/cryptohome-0.0.2/platform2/libhwsec-foundation/utility/proto_print.py
// --package-dir cryptohome --subdir common --proto-include
// cryptohome/proto_bindings --output-dir
// /build/arm64-generic/var/cache/portage/chromeos-base/cryptohome/out/Default/gen/cryptohome/common
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/auth_factor.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/fido.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/recoverable_key_store.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/key.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/rpc.proto
// /build/arm64-generic/usr/include/chromeos/dbus/cryptohome/UserDataAuth.proto

#ifndef CRYPTOHOME_COMMON_PRINT_AUTH_FACTOR_PROTO_H_
#define CRYPTOHOME_COMMON_PRINT_AUTH_FACTOR_PROTO_H_

#include <string>

#include <brillo/brillo_export.h>

#include "cryptohome/proto_bindings/auth_factor.pb.h"

namespace user_data_auth {

std::string GetProtoDebugStringWithIndent(AuthFactorType value,
                                          int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(AuthFactorType value);
std::string GetProtoDebugStringWithIndent(AuthFactorPreparePurpose value,
                                          int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(AuthFactorPreparePurpose value);
std::string GetProtoDebugStringWithIndent(SmartCardSignatureAlgorithm value,
                                          int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    SmartCardSignatureAlgorithm value);
std::string GetProtoDebugStringWithIndent(AuthIntent value, int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(AuthIntent value);
std::string GetProtoDebugStringWithIndent(LockoutPolicy value, int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(LockoutPolicy value);
std::string GetProtoDebugStringWithIndent(const PasswordAuthInput& value,
                                          int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(const PasswordAuthInput& value);
std::string GetProtoDebugStringWithIndent(const PinAuthInput& value,
                                          int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(const PinAuthInput& value);
std::string GetProtoDebugStringWithIndent(
    const CryptohomeRecoveryAuthInput::LedgerInfo& value,
    int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    const CryptohomeRecoveryAuthInput::LedgerInfo& value);
std::string GetProtoDebugStringWithIndent(
    const CryptohomeRecoveryAuthInput& value,
    int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    const CryptohomeRecoveryAuthInput& value);
std::string GetProtoDebugStringWithIndent(const KioskAuthInput& value,
                                          int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(const KioskAuthInput& value);
std::string GetProtoDebugStringWithIndent(const SmartCardAuthInput& value,
                                          int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(const SmartCardAuthInput& value);
std::string GetProtoDebugStringWithIndent(
    const LegacyFingerprintAuthInput& value,
    int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    const LegacyFingerprintAuthInput& value);
std::string GetProtoDebugStringWithIndent(const FingerprintAuthInput& value,
                                          int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    const FingerprintAuthInput& value);
std::string GetProtoDebugStringWithIndent(const AuthInput& value,
                                          int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(const AuthInput& value);
std::string GetProtoDebugStringWithIndent(const PasswordMetadata& value,
                                          int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(const PasswordMetadata& value);
std::string GetProtoDebugStringWithIndent(const PinMetadata& value,
                                          int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(const PinMetadata& value);
std::string GetProtoDebugStringWithIndent(
    const CryptohomeRecoveryMetadata& value,
    int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    const CryptohomeRecoveryMetadata& value);
std::string GetProtoDebugStringWithIndent(const KioskMetadata& value,
                                          int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(const KioskMetadata& value);
std::string GetProtoDebugStringWithIndent(const SmartCardMetadata& value,
                                          int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(const SmartCardMetadata& value);
std::string GetProtoDebugStringWithIndent(const KnowledgeFactorHashInfo& value,
                                          int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    const KnowledgeFactorHashInfo& value);
std::string GetProtoDebugStringWithIndent(const CommonMetadata& value,
                                          int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(const CommonMetadata& value);
std::string GetProtoDebugStringWithIndent(
    const LegacyFingerprintMetadata& value,
    int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(
    const LegacyFingerprintMetadata& value);
std::string GetProtoDebugStringWithIndent(const FingerprintMetadata& value,
                                          int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(const FingerprintMetadata& value);
std::string GetProtoDebugStringWithIndent(const AuthFactor& value,
                                          int indent_size);
BRILLO_EXPORT std::string GetProtoDebugString(const AuthFactor& value);

}  // namespace user_data_auth

#endif  // CRYPTOHOME_COMMON_PRINT_AUTH_FACTOR_PROTO_H_
