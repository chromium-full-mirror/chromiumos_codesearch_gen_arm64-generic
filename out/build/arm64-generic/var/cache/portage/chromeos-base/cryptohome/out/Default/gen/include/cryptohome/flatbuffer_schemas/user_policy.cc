// Copyright 2024 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// THIS CODE IS GENERATED.
// Generated with command:
// gen/python/flatbuffer_cpp_binding_generator.py
// --output_dir=/build/arm64-generic/var/cache/portage/chromeos-base/cryptohome/out/Default/gen/include/cryptohome/flatbuffer_schemas
// --guard_prefix=CRYPTOHOME_FLATBUFFER_SCHEMAS_USER_POLICY
// --header_include_paths cryptohome/flatbuffer_schemas/enumerations.h
// --flatbuffer_header_include_paths
// cryptohome/flatbuffer_schemas/user_policy_generated.h
// --flatbuffer_header_include_paths cryptohome/flatbuffer_schemas/user_policy.h
// --flatbuffer_header_include_paths
// cryptohome/flatbuffer_schemas/enumerations_flatbuffer.h
// --flatbuffer_header_include_paths
// libhwsec-foundation/flatbuffers/basic_objects.h --impl_include_paths
// cryptohome/flatbuffer_schemas/user_policy.h --impl_include_paths
// cryptohome/flatbuffer_schemas/user_policy_flatbuffer.h --impl_include_paths
// cryptohome/flatbuffer_schemas/enumerations_flatbuffer.h --impl_include_paths
// libhwsec-foundation/flatbuffers/flatbuffer_secure_allocator_bridge.h
// --test_utils_header_include_path cryptohome/flatbuffer_schemas/user_policy.h
// --test_utils_header_include_path
// cryptohome/flatbuffer_schemas/enumerations_test_utils.h
// /build/arm64-generic/var/cache/portage/chromeos-base/cryptohome/out/Default/gen/bfbs/user_policy.bfbs

#include <stdint.h>
#include <optional>
#include <string>
#include <variant>
#include <vector>

#include <base/logging.h>
#include <brillo/secure_blob.h>
#include <flatbuffers/flatbuffers.h>

#include "cryptohome/flatbuffer_schemas/enumerations_flatbuffer.h"
#include "cryptohome/flatbuffer_schemas/user_policy.h"
#include "cryptohome/flatbuffer_schemas/user_policy_flatbuffer.h"
#include "libhwsec-foundation/flatbuffers/flatbuffer_secure_allocator_bridge.h"

namespace {
[[maybe_unused]] constexpr int kFlatbufferAllocatorInitialSize = 4096;
}  // namespace

namespace cryptohome {

__attribute__((visibility("default"))) std::optional<brillo::Blob>
SerializedUserPolicy::Serialize() const {
  flatbuffers::FlatBufferBuilder builder;
  auto buffer =
      hwsec_foundation::ToFlatBuffer<::cryptohome::SerializedUserPolicy>()(
          &builder, *this);
  if (buffer.IsNull()) {
    LOG(ERROR) << "SerializedUserPolicy cannot be serialized.";
    return std::nullopt;
  }
  builder.Finish(buffer);
  uint8_t* buf = builder.GetBufferPointer();
  int size = builder.GetSize();
  return brillo::Blob(buf, buf + size);
}

}  // namespace cryptohome

namespace cryptohome {

// static
__attribute__((visibility("default")))
std::optional<::cryptohome::SerializedUserPolicy>
SerializedUserPolicy::Deserialize(const brillo::Blob& blob) {
  flatbuffers::Verifier verifier(blob.data(), blob.size());
  if (!::cryptohome::_serialized_::VerifySerializedUserPolicyBuffer(verifier)) {
    LOG(ERROR) << "SerializedUserPolicy cannot be deserialized.";
    return std::nullopt;
  }

  const ::cryptohome::_serialized_::SerializedUserPolicy* object =
      flatbuffers::GetRoot<::cryptohome::_serialized_::SerializedUserPolicy>(
          blob.data());

  return hwsec_foundation::FromFlatBuffer<::cryptohome::SerializedUserPolicy>()(
      object);
}

}  // namespace cryptohome
