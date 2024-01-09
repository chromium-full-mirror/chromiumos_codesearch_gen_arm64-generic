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

#ifndef CRYPTOHOME_FLATBUFFER_SCHEMAS_USER_POLICY_USER_POLICY_H_
#define CRYPTOHOME_FLATBUFFER_SCHEMAS_USER_POLICY_USER_POLICY_H_

#include <stdint.h>
#include <optional>
#include <string>
#include <variant>
#include <vector>

#include <brillo/secure_blob.h>

#include "cryptohome/flatbuffer_schemas/enumerations.h"

namespace cryptohome {

struct SerializedUserAuthFactorTypePolicy {
  std::optional<::cryptohome::SerializedAuthFactorType> type;
  std::vector<::cryptohome::SerializedAuthIntent> enabled_intents;
  std::vector<::cryptohome::SerializedAuthIntent> disabled_intents;
};

}  // namespace cryptohome

namespace cryptohome {

struct SerializedUserPolicy {
  std::optional<brillo::Blob> Serialize() const;
  static std::optional<SerializedUserPolicy> Deserialize(const brillo::Blob&);

  std::vector<::cryptohome::SerializedUserAuthFactorTypePolicy>
      auth_factor_type_policy;
};

}  // namespace cryptohome

#endif  // CRYPTOHOME_FLATBUFFER_SCHEMAS_USER_POLICY_USER_POLICY_H_
