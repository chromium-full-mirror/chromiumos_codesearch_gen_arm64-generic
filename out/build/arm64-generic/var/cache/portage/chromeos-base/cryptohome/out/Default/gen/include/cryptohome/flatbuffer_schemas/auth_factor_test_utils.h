// Copyright 2024 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// THIS CODE IS GENERATED.
// Generated with command:
// gen/python/flatbuffer_cpp_binding_generator.py
// --output_dir=/build/arm64-generic/var/cache/portage/chromeos-base/cryptohome/out/Default/gen/include/cryptohome/flatbuffer_schemas
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
// /build/arm64-generic/var/cache/portage/chromeos-base/cryptohome/out/Default/gen/bfbs/auth_factor.bfbs

#ifndef CRYPTOHOME_FLATBUFFER_SCHEMAS_AUTH_FACTOR_TEST_UTILS_H_
#define CRYPTOHOME_FLATBUFFER_SCHEMAS_AUTH_FACTOR_TEST_UTILS_H_

#include "cryptohome/flatbuffer_schemas/auth_block_state_test_utils.h"
#include "cryptohome/flatbuffer_schemas/auth_factor.h"

namespace cryptohome {

inline bool operator==(const SerializedKnowledgeFactorHashInfo& lhs,
                       const SerializedKnowledgeFactorHashInfo& rhs) {
  return true && lhs.algorithm == rhs.algorithm && lhs.salt == rhs.salt &&
         lhs.should_generate_key_store == rhs.should_generate_key_store;
}
inline bool operator!=(const SerializedKnowledgeFactorHashInfo& lhs,
                       const SerializedKnowledgeFactorHashInfo& rhs) {
  return !(lhs == rhs);
}

}  // namespace cryptohome

namespace cryptohome {

inline bool operator==(const PasswordMetadata& lhs,
                       const PasswordMetadata& rhs) {
  return true && lhs.hash_info == rhs.hash_info;
}
inline bool operator!=(const PasswordMetadata& lhs,
                       const PasswordMetadata& rhs) {
  return !(lhs == rhs);
}

}  // namespace cryptohome

namespace cryptohome {

inline bool operator==(const PinMetadata& lhs, const PinMetadata& rhs) {
  return true && lhs.hash_info == rhs.hash_info;
}
inline bool operator!=(const PinMetadata& lhs, const PinMetadata& rhs) {
  return !(lhs == rhs);
}

}  // namespace cryptohome

namespace cryptohome {

inline bool operator==(const CryptohomeRecoveryMetadata& lhs,
                       const CryptohomeRecoveryMetadata& rhs) {
  return true && lhs.mediator_pub_key == rhs.mediator_pub_key;
}
inline bool operator!=(const CryptohomeRecoveryMetadata& lhs,
                       const CryptohomeRecoveryMetadata& rhs) {
  return !(lhs == rhs);
}

}  // namespace cryptohome

namespace cryptohome {

inline bool operator==(const KioskMetadata& lhs, const KioskMetadata& rhs) {
  return true;
}
inline bool operator!=(const KioskMetadata& lhs, const KioskMetadata& rhs) {
  return !(lhs == rhs);
}

}  // namespace cryptohome

namespace cryptohome {

inline bool operator==(const SmartCardMetadata& lhs,
                       const SmartCardMetadata& rhs) {
  return true && lhs.public_key_spki_der == rhs.public_key_spki_der;
}
inline bool operator!=(const SmartCardMetadata& lhs,
                       const SmartCardMetadata& rhs) {
  return !(lhs == rhs);
}

}  // namespace cryptohome

namespace cryptohome {

inline bool operator==(const FingerprintMetadata& lhs,
                       const FingerprintMetadata& rhs) {
  return true;
}
inline bool operator!=(const FingerprintMetadata& lhs,
                       const FingerprintMetadata& rhs) {
  return !(lhs == rhs);
}

}  // namespace cryptohome

namespace cryptohome {

inline bool operator==(const CommonMetadata& lhs, const CommonMetadata& rhs) {
  return true &&
         lhs.chromeos_version_last_updated ==
             rhs.chromeos_version_last_updated &&
         lhs.chrome_version_last_updated == rhs.chrome_version_last_updated &&
         lhs.lockout_policy == rhs.lockout_policy &&
         lhs.user_specified_name == rhs.user_specified_name;
}
inline bool operator!=(const CommonMetadata& lhs, const CommonMetadata& rhs) {
  return !(lhs == rhs);
}

}  // namespace cryptohome

namespace cryptohome {

inline bool operator==(const SerializedAuthFactor& lhs,
                       const SerializedAuthFactor& rhs) {
  return true && lhs.auth_block_state == rhs.auth_block_state &&
         lhs.metadata == rhs.metadata &&
         lhs.common_metadata == rhs.common_metadata;
}
inline bool operator!=(const SerializedAuthFactor& lhs,
                       const SerializedAuthFactor& rhs) {
  return !(lhs == rhs);
}

}  // namespace cryptohome

#endif  // CRYPTOHOME_FLATBUFFER_SCHEMAS_AUTH_FACTOR_TEST_UTILS_H_
