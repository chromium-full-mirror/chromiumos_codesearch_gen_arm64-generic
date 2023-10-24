// Copyright 2023 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// THIS CODE IS GENERATED.
// Generated with command:
// gen/python/flatbuffer_cpp_binding_generator.py
// --output_dir=/build/arm64-generic/var/cache/portage/chromeos-base/cryptohome-dev-utils/out/Default/gen/include/cryptohome/flatbuffer_schemas
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
// /build/arm64-generic/var/cache/portage/chromeos-base/cryptohome-dev-utils/out/Default/gen/bfbs/auth_factor.bfbs
// --filter_by_namespace cryptohome::auth_factor

#include <stdint.h>
#include <optional>
#include <string>
#include <variant>
#include <vector>

#include <base/logging.h>
#include <brillo/secure_blob.h>
#include <flatbuffers/flatbuffers.h>

#include "cryptohome/flatbuffer_schemas/auth_block_state_flatbuffer.h"
#include "cryptohome/flatbuffer_schemas/auth_factor.h"
#include "cryptohome/flatbuffer_schemas/auth_factor_flatbuffer.h"
#include "libhwsec-foundation/flatbuffers/flatbuffer_secure_allocator_bridge.h"

namespace {
[[maybe_unused]] constexpr int kFlatbufferAllocatorInitialSize = 4096;
}  // namespace

namespace cryptohome::auth_factor {

__attribute__((visibility("default"))) std::optional<brillo::SecureBlob>
AuthFactor::Serialize() const {
  hwsec_foundation::FlatbufferSecureAllocatorBridge allocator;
  flatbuffers::FlatBufferBuilder builder(kFlatbufferAllocatorInitialSize,
                                         &allocator);
  auto buffer =
      hwsec_foundation::ToFlatBuffer<::cryptohome::auth_factor::AuthFactor>()(
          &builder, *this);
  if (buffer.IsNull()) {
    LOG(ERROR) << "AuthFactor cannot be serialized.";
    return std::nullopt;
  }
  builder.Finish(buffer);
  uint8_t* buf = builder.GetBufferPointer();
  int size = builder.GetSize();
  return brillo::SecureBlob(buf, buf + size);
}

}  // namespace cryptohome::auth_factor

namespace cryptohome::auth_factor {

// static
__attribute__((visibility("default")))
std::optional<::cryptohome::auth_factor::AuthFactor>
AuthFactor::Deserialize(const brillo::SecureBlob& blob) {
  flatbuffers::Verifier verifier(blob.data(), blob.size());
  if (!::cryptohome::auth_factor::_serialized_::VerifyAuthFactorBuffer(
          verifier)) {
    LOG(ERROR) << "AuthFactor cannot be deserialized.";
    return std::nullopt;
  }

  const ::cryptohome::auth_factor::_serialized_::AuthFactor* object =
      flatbuffers::GetRoot<::cryptohome::auth_factor::_serialized_::AuthFactor>(
          blob.data());

  return hwsec_foundation::FromFlatBuffer<
      ::cryptohome::auth_factor::AuthFactor>()(object);
}

}  // namespace cryptohome::auth_factor
