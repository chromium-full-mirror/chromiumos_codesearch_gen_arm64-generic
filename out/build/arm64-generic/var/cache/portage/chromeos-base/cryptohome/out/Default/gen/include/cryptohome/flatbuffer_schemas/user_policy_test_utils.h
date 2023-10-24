// Copyright 2023 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// THIS CODE IS GENERATED.
// Generated with command:
// gen/python/flatbuffer_cpp_binding_generator.py
// --output_dir=/build/arm64-generic/var/cache/portage/chromeos-base/cryptohome/out/Default/gen/include/cryptohome/flatbuffer_schemas
// --guard_prefix=CRYPTOHOME_FLATBUFFER_SCHEMAS_USER_POLICY
// --header_include_paths cryptohome/flatbuffer_schemas/enumerations.h
// --flatbuffer_header_include_paths cryptohome/user_policy_generated.h
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
// --filter_by_namespace cryptohome

#ifndef CRYPTOHOME_FLATBUFFER_SCHEMAS_USER_POLICY_USER_POLICY_TEST_UTILS_H_
#define CRYPTOHOME_FLATBUFFER_SCHEMAS_USER_POLICY_USER_POLICY_TEST_UTILS_H_

#include "cryptohome/flatbuffer_schemas/enumerations_test_utils.h"
#include "cryptohome/flatbuffer_schemas/user_policy.h"

namespace cryptohome {

inline bool operator==(const SerializedUserAuthFactorTypePolicy& lhs,
                       const SerializedUserAuthFactorTypePolicy& rhs) {
  return true && lhs.type == rhs.type &&
         lhs.enabled_intents == rhs.enabled_intents &&
         lhs.disabled_intents == rhs.disabled_intents;
}
inline bool operator!=(const SerializedUserAuthFactorTypePolicy& lhs,
                       const SerializedUserAuthFactorTypePolicy& rhs) {
  return !(lhs == rhs);
}

}  // namespace cryptohome

namespace cryptohome {

inline bool operator==(const SerializedUserPolicy& lhs,
                       const SerializedUserPolicy& rhs) {
  return true && lhs.auth_factor_type_policy == rhs.auth_factor_type_policy;
}
inline bool operator!=(const SerializedUserPolicy& lhs,
                       const SerializedUserPolicy& rhs) {
  return !(lhs == rhs);
}

}  // namespace cryptohome

#endif  // CRYPTOHOME_FLATBUFFER_SCHEMAS_USER_POLICY_USER_POLICY_TEST_UTILS_H_
