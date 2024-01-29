// Copyright 2024 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// THIS CODE IS GENERATED.
// Generated with command:
// gen/python/flatbuffer_cpp_binding_generator.py
// --output_dir=/build/arm64-generic/var/cache/portage/chromeos-base/cryptohome-dev-utils/out/Default/gen/include/cryptohome/flatbuffer_schemas
// --guard_prefix=CRYPTOHOME_FLATBUFFER_SCHEMAS --header_include_paths
// cryptohome/flatbuffer_schemas/auth_block_state.h
// --flatbuffer_header_include_paths
// cryptohome/flatbuffer_schemas/auth_factor_generated.h
// --flatbuffer_header_include_paths cryptohome/flatbuffer_schemas/auth_factor.h
// --flatbuffer_header_include_paths
// cryptohome/flatbuffer_schemas/auth_block_state_flatbuffer.h
// --flatbuffer_header_include_paths
// libhwsec-foundation/flatbuffers/basic_objects.h --impl_include_paths
// cryptohome/flatbuffer_schemas/auth_factor.h --impl_include_paths
// cryptohome/flatbuffer_schemas/auth_factor_flatbuffer.h --impl_include_paths
// cryptohome/flatbuffer_schemas/auth_block_state_flatbuffer.h
// --impl_include_paths
// libhwsec-foundation/flatbuffers/flatbuffer_secure_allocator_bridge.h
// --test_utils_header_include_path cryptohome/flatbuffer_schemas/auth_factor.h
// --test_utils_header_include_path
// cryptohome/flatbuffer_schemas/auth_block_state_test_utils.h
// /build/arm64-generic/var/cache/portage/chromeos-base/cryptohome-dev-utils/out/Default/gen/bfbs/auth_factor.bfbs

#ifndef CRYPTOHOME_FLATBUFFER_SCHEMAS_AUTH_FACTOR_H_
#define CRYPTOHOME_FLATBUFFER_SCHEMAS_AUTH_FACTOR_H_

#include <stdint.h>
#include <optional>
#include <string>
#include <variant>
#include <vector>

#include <brillo/secure_blob.h>

#include "cryptohome/flatbuffer_schemas/auth_block_state.h"

namespace cryptohome {

enum class SerializedKnowledgeFactorHashAlgorithm : int32_t {
  PBKDF2_AES256_1234 = 1,
  SHA256_TOP_HALF = 2,
};

}  // namespace cryptohome

namespace cryptohome {

enum class SerializedLockoutPolicy : int32_t {
  UNKNOWN = 0,
  NO_LOCKOUT = 1,
  ATTEMPT_LIMITED = 2,
  TIME_LIMITED = 3,
};

}  // namespace cryptohome

namespace cryptohome {

struct SerializedKnowledgeFactorHashInfo {
  std::optional<::cryptohome::SerializedKnowledgeFactorHashAlgorithm> algorithm;
  brillo::Blob salt;
  std::optional<bool> should_generate_key_store;
};

}  // namespace cryptohome

namespace cryptohome {

struct PasswordMetadata {
  std::optional<::cryptohome::SerializedKnowledgeFactorHashInfo> hash_info;
};

}  // namespace cryptohome

namespace cryptohome {

struct PinMetadata {
  std::optional<::cryptohome::SerializedKnowledgeFactorHashInfo> hash_info;
};

}  // namespace cryptohome

namespace cryptohome {

struct CryptohomeRecoveryMetadata {
  brillo::Blob mediator_pub_key;
};

}  // namespace cryptohome

namespace cryptohome {

struct KioskMetadata {};

}  // namespace cryptohome

namespace cryptohome {

struct SmartCardMetadata {
  brillo::Blob public_key_spki_der;
};

}  // namespace cryptohome

namespace cryptohome {

struct FingerprintMetadata {};

}  // namespace cryptohome

namespace cryptohome {

using TypeSpecificMetadata =
    std::variant<std::monostate,
                 ::cryptohome::PasswordMetadata,
                 ::cryptohome::PinMetadata,
                 ::cryptohome::CryptohomeRecoveryMetadata,
                 ::cryptohome::KioskMetadata,
                 ::cryptohome::SmartCardMetadata,
                 ::cryptohome::FingerprintMetadata>;

}  // namespace cryptohome

namespace cryptohome {

struct CommonMetadata {
  std::string chromeos_version_last_updated;
  std::string chrome_version_last_updated;
  std::optional<::cryptohome::SerializedLockoutPolicy> lockout_policy;
  std::string user_specified_name;
};

}  // namespace cryptohome

namespace cryptohome {

struct SerializedAuthFactor {
  std::optional<brillo::Blob> Serialize() const;
  static std::optional<SerializedAuthFactor> Deserialize(const brillo::Blob&);

  ::cryptohome::AuthBlockState auth_block_state;
  ::cryptohome::TypeSpecificMetadata metadata;
  ::cryptohome::CommonMetadata common_metadata;
};

}  // namespace cryptohome

#endif  // CRYPTOHOME_FLATBUFFER_SCHEMAS_AUTH_FACTOR_H_
