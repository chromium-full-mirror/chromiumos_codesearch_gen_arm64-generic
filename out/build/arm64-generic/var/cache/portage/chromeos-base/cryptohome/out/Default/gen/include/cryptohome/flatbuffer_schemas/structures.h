// Copyright 2023 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// THIS CODE IS GENERATED.
// Generated with command:
// gen/python/flatbuffer_cpp_binding_generator.py
// --output_dir=/build/arm64-generic/var/cache/portage/chromeos-base/cryptohome/out/Default/gen/include/cryptohome/flatbuffer_schemas
// --guard_prefix=CRYPTOHOME_FLATBUFFER_SCHEMAS_STRUCTURES
// --header_include_paths libhwsec/structures/signature_sealed_data.h
// --flatbuffer_header_include_paths cryptohome/flatbuffer_schemas/structures.h
// --flatbuffer_header_include_paths cryptohome/structures_generated.h
// --flatbuffer_header_include_paths
// libhwsec/structures/signature_sealed_data_flatbuffer.h
// --flatbuffer_header_include_paths
// libhwsec-foundation/flatbuffers/basic_objects.h --impl_include_paths
// cryptohome/flatbuffer_schemas/structures.h --impl_include_paths
// cryptohome/flatbuffer_schemas/structures_flatbuffer.h --impl_include_paths
// libhwsec-foundation/flatbuffers/flatbuffer_secure_allocator_bridge.h
// --test_utils_header_include_path cryptohome/flatbuffer_schemas/structures.h
// --test_utils_header_include_path
// libhwsec/structures/signature_sealed_data_test_utils.h
// /build/arm64-generic/var/cache/portage/chromeos-base/cryptohome/out/Default/gen/bfbs/structures.bfbs

#ifndef CRYPTOHOME_FLATBUFFER_SCHEMAS_STRUCTURES_STRUCTURES_H_
#define CRYPTOHOME_FLATBUFFER_SCHEMAS_STRUCTURES_STRUCTURES_H_

#include <stdint.h>
#include <optional>
#include <string>
#include <variant>
#include <vector>

#include <brillo/secure_blob.h>

#include "libhwsec/structures/signature_sealed_data.h"

namespace cryptohome {

enum class SerializedChallengeSignatureAlgorithm : int32_t {
  kRsassaPkcs1V15Sha1 = 1,
  kRsassaPkcs1V15Sha256 = 2,
  kRsassaPkcs1V15Sha384 = 3,
  kRsassaPkcs1V15Sha512 = 4,
};

}  // namespace cryptohome

namespace cryptohome {

struct SerializedChallengePublicKeyInfo {
  brillo::Blob public_key_spki_der;
  std::vector<::cryptohome::SerializedChallengeSignatureAlgorithm>
      signature_algorithm;
};

}  // namespace cryptohome

namespace cryptohome {

struct SerializedSignatureChallengeInfo {
  std::optional<brillo::Blob> Serialize() const;
  static std::optional<SerializedSignatureChallengeInfo> Deserialize(
      const brillo::Blob&);

  brillo::Blob public_key_spki_der;
  ::hwsec::SignatureSealedData sealed_secret;
  brillo::Blob salt;
  std::optional<::cryptohome::SerializedChallengeSignatureAlgorithm>
      salt_signature_algorithm;
};

}  // namespace cryptohome

#endif  // CRYPTOHOME_FLATBUFFER_SCHEMAS_STRUCTURES_STRUCTURES_H_
