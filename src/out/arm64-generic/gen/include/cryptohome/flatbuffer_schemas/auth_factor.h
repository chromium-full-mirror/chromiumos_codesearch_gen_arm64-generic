// Copyright 2023 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// THIS CODE IS GENERATED.
// Generated with command:
// gen/python/flatbuffer_cpp_binding_generator.py
// --output_dir=/build/arm64-generic/var/cache/portage/chromeos-base/cryptohome/out/Default/gen/include/cryptohome/flatbuffer_schemas
// --guard_prefix=CRYPTOHOME_FLATBUFFER_SCHEMAS --header_include_paths
// cryptohome/flatbuffer_schemas/auth_block_state.h
// --flatbuffer_header_include_paths cryptohome/auth_factor_generated.h
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

#ifndef CRYPTOHOME_FLATBUFFER_SCHEMAS_AUTH_FACTOR_H_
#define CRYPTOHOME_FLATBUFFER_SCHEMAS_AUTH_FACTOR_H_

#include <stdint.h>
#include <optional>
#include <string>
#include <variant>
#include <vector>

#include <brillo/secure_blob.h>

#include "cryptohome/flatbuffer_schemas/auth_block_state.h"

namespace cryptohome::auth_factor {

struct PasswordMetadata {};

}  // namespace cryptohome::auth_factor

namespace cryptohome::auth_factor {

struct PinMetadata {};

}  // namespace cryptohome::auth_factor

namespace cryptohome::auth_factor {

struct CryptohomeRecoveryMetadata {
  brillo::Blob mediator_pub_key;
};

}  // namespace cryptohome::auth_factor

namespace cryptohome::auth_factor {

struct KioskMetadata {};

}  // namespace cryptohome::auth_factor

namespace cryptohome::auth_factor {

struct SmartCardMetadata {
  brillo::Blob public_key_spki_der;
};

}  // namespace cryptohome::auth_factor

namespace cryptohome::auth_factor {

struct FingerprintMetadata {};

}  // namespace cryptohome::auth_factor

namespace cryptohome::auth_factor {

using AuthFactorMetadata =
    std::variant<std::monostate,
                 ::cryptohome::auth_factor::PasswordMetadata,
                 ::cryptohome::auth_factor::PinMetadata,
                 ::cryptohome::auth_factor::CryptohomeRecoveryMetadata,
                 ::cryptohome::auth_factor::KioskMetadata,
                 ::cryptohome::auth_factor::SmartCardMetadata,
                 ::cryptohome::auth_factor::FingerprintMetadata>;

}  // namespace cryptohome::auth_factor

namespace cryptohome::auth_factor {

enum class LockoutPolicy : int32_t {
  UNKNOWN = 0,
  NO_LOCKOUT = 1,
  ATTEMPT_LIMITED = 2,
  TIME_LIMITED = 3,
};

}  // namespace cryptohome::auth_factor

namespace cryptohome::auth_factor {

struct CommonMetadata {
  std::string chromeos_version_last_updated;
  std::string chrome_version_last_updated;
  std::optional<::cryptohome::auth_factor::LockoutPolicy> lockout_policy;
  std::string user_specified_name;
};

}  // namespace cryptohome::auth_factor

namespace cryptohome::auth_factor {

struct AuthFactor {
  std::optional<brillo::SecureBlob> Serialize() const;
  static std::optional<AuthFactor> Deserialize(const brillo::SecureBlob&);

  ::cryptohome::AuthBlockState auth_block_state;
  ::cryptohome::auth_factor::AuthFactorMetadata metadata;
  ::cryptohome::auth_factor::CommonMetadata common_metadata;
};

}  // namespace cryptohome::auth_factor

#endif  // CRYPTOHOME_FLATBUFFER_SCHEMAS_AUTH_FACTOR_H_
