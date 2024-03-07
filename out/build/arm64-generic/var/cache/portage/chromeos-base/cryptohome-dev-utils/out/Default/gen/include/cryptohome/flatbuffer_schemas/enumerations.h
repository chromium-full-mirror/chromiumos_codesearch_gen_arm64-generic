// Copyright 2024 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// THIS CODE IS GENERATED.
// Generated with command:
// gen/python/flatbuffer_cpp_binding_generator.py
// --output_dir=/build/arm64-generic/var/cache/portage/chromeos-base/cryptohome-dev-utils/out/Default/gen/include/cryptohome/flatbuffer_schemas
// --guard_prefix=CRYPTOHOME_FLATBUFFER_SCHEMAS_ENUMERATIONS
// --flatbuffer_header_include_paths
// cryptohome/flatbuffer_schemas/enumerations.h
// --flatbuffer_header_include_paths
// cryptohome/flatbuffer_schemas/enumerations_generated.h
// --flatbuffer_header_include_paths
// libhwsec-foundation/flatbuffers/basic_objects.h --impl_include_paths
// cryptohome/flatbuffer_schemas/enumerations.h --impl_include_paths
// cryptohome/flatbuffer_schemas/enumerations_flatbuffer.h
// --test_utils_header_include_path cryptohome/flatbuffer_schemas/enumerations.h
// /build/arm64-generic/var/cache/portage/chromeos-base/cryptohome-dev-utils/out/Default/gen/bfbs/enumerations.bfbs

#ifndef CRYPTOHOME_FLATBUFFER_SCHEMAS_ENUMERATIONS_ENUMERATIONS_H_
#define CRYPTOHOME_FLATBUFFER_SCHEMAS_ENUMERATIONS_ENUMERATIONS_H_

#include <stdint.h>
#include <optional>
#include <string>
#include <variant>
#include <vector>

#include <brillo/secure_blob.h>

namespace cryptohome {

enum class SerializedAuthFactorType : int32_t {
  kPassword = 1,
  kPin = 2,
  kCryptohomeRecovery = 3,
  kKiosk = 4,
  kSmartCard = 5,
  kLegacyFingerprint = 6,
  kFingerprint = 7,
};

}  // namespace cryptohome

namespace cryptohome {

enum class SerializedAuthIntent : int32_t {
  kDecrypt = 1,
  kVerifyOnly = 2,
  kWebAuthn = 3,
  kRestoreKey = 4,
  kForensics = 5,
};

}  // namespace cryptohome

#endif  // CRYPTOHOME_FLATBUFFER_SCHEMAS_ENUMERATIONS_ENUMERATIONS_H_
