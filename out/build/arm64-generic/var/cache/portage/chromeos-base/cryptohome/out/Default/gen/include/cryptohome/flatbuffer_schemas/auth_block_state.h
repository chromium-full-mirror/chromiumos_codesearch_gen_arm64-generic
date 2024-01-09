// Copyright 2024 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// THIS CODE IS GENERATED.
// Generated with command:
// gen/python/flatbuffer_cpp_binding_generator.py
// --output_dir=/build/arm64-generic/var/cache/portage/chromeos-base/cryptohome/out/Default/gen/include/cryptohome/flatbuffer_schemas
// --guard_prefix=CRYPTOHOME_FLATBUFFER_SCHEMAS_AUTH_BLOCK_STATE
// --header_include_paths cryptohome/flatbuffer_schemas/structures.h
// --flatbuffer_header_include_paths
// cryptohome/flatbuffer_schemas/auth_block_state_generated.h
// --flatbuffer_header_include_paths
// cryptohome/flatbuffer_schemas/auth_block_state.h
// --flatbuffer_header_include_paths
// cryptohome/flatbuffer_schemas/structures_flatbuffer.h
// --flatbuffer_header_include_paths
// libhwsec-foundation/flatbuffers/basic_objects.h --impl_include_paths
// cryptohome/flatbuffer_schemas/auth_block_state.h --impl_include_paths
// cryptohome/flatbuffer_schemas/auth_block_state_flatbuffer.h
// --impl_include_paths cryptohome/flatbuffer_schemas/structures_flatbuffer.h
// --impl_include_paths
// libhwsec-foundation/flatbuffers/flatbuffer_secure_allocator_bridge.h
// --test_utils_header_include_path
// cryptohome/flatbuffer_schemas/auth_block_state.h
// --test_utils_header_include_path
// cryptohome/flatbuffer_schemas/structures_test_utils.h
// /build/arm64-generic/var/cache/portage/chromeos-base/cryptohome/out/Default/gen/bfbs/auth_block_state.bfbs

#ifndef CRYPTOHOME_FLATBUFFER_SCHEMAS_AUTH_BLOCK_STATE_AUTH_BLOCK_STATE_H_
#define CRYPTOHOME_FLATBUFFER_SCHEMAS_AUTH_BLOCK_STATE_AUTH_BLOCK_STATE_H_

#include <stdint.h>
#include <optional>
#include <string>
#include <variant>
#include <vector>

#include <brillo/secure_blob.h>

#include "cryptohome/flatbuffer_schemas/structures.h"

namespace cryptohome {

struct TpmBoundToPcrAuthBlockState {
  std::optional<bool> scrypt_derived;
  std::optional<brillo::Blob> salt;
  std::optional<brillo::Blob> tpm_key;
  std::optional<brillo::Blob> extended_tpm_key;
  std::optional<brillo::Blob> tpm_public_key_hash;
};

}  // namespace cryptohome

namespace cryptohome {

struct TpmNotBoundToPcrAuthBlockState {
  std::optional<bool> scrypt_derived;
  std::optional<brillo::Blob> salt;
  std::optional<uint32_t> password_rounds;
  std::optional<brillo::Blob> tpm_key;
  std::optional<brillo::Blob> tpm_public_key_hash;
};

}  // namespace cryptohome

namespace cryptohome {

struct PinWeaverAuthBlockState {
  std::optional<uint64_t> le_label;
  std::optional<brillo::Blob> salt;
  std::optional<brillo::Blob> chaps_iv;
  std::optional<brillo::Blob> fek_iv;
  std::optional<brillo::Blob> reset_salt;
};

}  // namespace cryptohome

namespace cryptohome {

struct ScryptAuthBlockState {
  std::optional<brillo::Blob> salt;
  std::optional<brillo::Blob> chaps_salt;
  std::optional<brillo::Blob> reset_seed_salt;
  std::optional<int32_t> work_factor;
  std::optional<uint32_t> block_size;
  std::optional<uint32_t> parallel_factor;
};

}  // namespace cryptohome

namespace cryptohome {

struct ChallengeCredentialAuthBlockState {
  ::cryptohome::ScryptAuthBlockState scrypt_state;
  std::optional<::cryptohome::SerializedSignatureChallengeInfo>
      keyset_challenge_info;
};

}  // namespace cryptohome

namespace cryptohome {

struct DoubleWrappedCompatAuthBlockState {
  ::cryptohome::ScryptAuthBlockState scrypt_state;
  ::cryptohome::TpmNotBoundToPcrAuthBlockState tpm_state;
};

}  // namespace cryptohome

namespace cryptohome {

struct CryptohomeRecoveryAuthBlockState {
  brillo::Blob hsm_payload;
  brillo::Blob encrypted_destination_share;
  brillo::Blob extended_pcr_bound_destination_share;
  brillo::Blob channel_pub_key;
  brillo::Blob encrypted_channel_priv_key;
  brillo::Blob encrypted_rsa_priv_key;
};

}  // namespace cryptohome

namespace cryptohome {

struct TpmEccAuthBlockState {
  std::optional<brillo::Blob> salt;
  std::optional<brillo::Blob> vkk_iv;
  std::optional<uint32_t> auth_value_rounds;
  std::optional<brillo::Blob> sealed_hvkkm;
  std::optional<brillo::Blob> extended_sealed_hvkkm;
  std::optional<brillo::Blob> tpm_public_key_hash;
  std::optional<brillo::Blob> wrapped_reset_seed;
};

}  // namespace cryptohome

namespace cryptohome {

struct FingerprintAuthBlockState {
  std::string template_id;
  std::optional<uint64_t> gsc_secret_label;
};

}  // namespace cryptohome

namespace cryptohome {

using AuthBlockStateUnion =
    std::variant<std::monostate,
                 ::cryptohome::TpmBoundToPcrAuthBlockState,
                 ::cryptohome::TpmNotBoundToPcrAuthBlockState,
                 ::cryptohome::PinWeaverAuthBlockState,
                 ::cryptohome::ChallengeCredentialAuthBlockState,
                 ::cryptohome::DoubleWrappedCompatAuthBlockState,
                 ::cryptohome::CryptohomeRecoveryAuthBlockState,
                 ::cryptohome::TpmEccAuthBlockState,
                 ::cryptohome::ScryptAuthBlockState,
                 ::cryptohome::FingerprintAuthBlockState>;

}  // namespace cryptohome

namespace cryptohome {

struct RecoverableKeyStoreState {
  brillo::Blob key_store_proto;
};

}  // namespace cryptohome

namespace cryptohome {

struct RevocationState {
  std::optional<uint64_t> le_label;
};

}  // namespace cryptohome

namespace cryptohome {

struct AuthBlockState {
  std::optional<brillo::Blob> Serialize() const;
  static std::optional<AuthBlockState> Deserialize(const brillo::Blob&);

  ::cryptohome::AuthBlockStateUnion state;
  std::optional<::cryptohome::RevocationState> revocation_state;
  std::optional<::cryptohome::RecoverableKeyStoreState>
      recoverable_key_store_state;
};

}  // namespace cryptohome

#endif  // CRYPTOHOME_FLATBUFFER_SCHEMAS_AUTH_BLOCK_STATE_AUTH_BLOCK_STATE_H_
