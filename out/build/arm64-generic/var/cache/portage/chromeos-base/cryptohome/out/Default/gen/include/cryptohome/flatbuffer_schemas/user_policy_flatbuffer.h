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

#ifndef CRYPTOHOME_FLATBUFFER_SCHEMAS_USER_POLICY_USER_POLICY_FLATBUFFER_H_
#define CRYPTOHOME_FLATBUFFER_SCHEMAS_USER_POLICY_USER_POLICY_FLATBUFFER_H_

#include <stdint.h>
#include <optional>
#include <string>
#include <type_traits>
#include <variant>
#include <vector>

#include <brillo/secure_blob.h>
#include <flatbuffers/flatbuffers.h>

#include "cryptohome/flatbuffer_schemas/enumerations_flatbuffer.h"
#include "cryptohome/flatbuffer_schemas/user_policy.h"
#include "cryptohome/user_policy_generated.h"
#include "libhwsec-foundation/flatbuffers/basic_objects.h"

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::SerializedUserAuthFactorTypePolicy> {
  using ResultType = flatbuffers::Offset<
      ::cryptohome::_serialized_::SerializedUserAuthFactorTypePolicy>;

  ResultType operator()(
      flatbuffers::FlatBufferBuilder* builder,
      const ::cryptohome::SerializedUserAuthFactorTypePolicy& object) const {
    auto type = ToFlatBuffer<
        std::optional<::cryptohome::enumeration::SerializedAuthFactorType>>()(
        builder, object.type);
    auto enabled_intents = ToFlatBuffer<
        std::vector<::cryptohome::enumeration::SerializedAuthIntent>>()(
        builder, object.enabled_intents);
    auto disabled_intents = ToFlatBuffer<
        std::vector<::cryptohome::enumeration::SerializedAuthIntent>>()(
        builder, object.disabled_intents);

    return ::cryptohome::_serialized_::CreateSerializedUserAuthFactorTypePolicy(
        *builder, type, enabled_intents, disabled_intents);
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::SerializedUserAuthFactorTypePolicy> {
  ::cryptohome::SerializedUserAuthFactorTypePolicy operator()(
      const ::cryptohome::_serialized_::SerializedUserAuthFactorTypePolicy*
          object) const {
    if (object == nullptr) {
      return ::cryptohome::SerializedUserAuthFactorTypePolicy();
    }
    return ::cryptohome::SerializedUserAuthFactorTypePolicy{
        .type = FromFlatBuffer<std::optional<
            ::cryptohome::enumeration::SerializedAuthFactorType>>()(
            object->type()),
        .enabled_intents = FromFlatBuffer<
            std::vector<::cryptohome::enumeration::SerializedAuthIntent>>()(
            object->enabled_intents()),
        .disabled_intents = FromFlatBuffer<
            std::vector<::cryptohome::enumeration::SerializedAuthIntent>>()(
            object->disabled_intents()),
    };
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::SerializedUserPolicy> {
  using ResultType =
      flatbuffers::Offset<::cryptohome::_serialized_::SerializedUserPolicy>;

  ResultType operator()(
      flatbuffers::FlatBufferBuilder* builder,
      const ::cryptohome::SerializedUserPolicy& object) const {
    auto auth_factor_type_policy = ToFlatBuffer<
        std::vector<::cryptohome::SerializedUserAuthFactorTypePolicy>>()(
        builder, object.auth_factor_type_policy);

    return ::cryptohome::_serialized_::CreateSerializedUserPolicy(
        *builder, auth_factor_type_policy);
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::SerializedUserPolicy> {
  ::cryptohome::SerializedUserPolicy operator()(
      const ::cryptohome::_serialized_::SerializedUserPolicy* object) const {
    if (object == nullptr) {
      return ::cryptohome::SerializedUserPolicy();
    }
    return ::cryptohome::SerializedUserPolicy{
        .auth_factor_type_policy = FromFlatBuffer<
            std::vector<::cryptohome::SerializedUserAuthFactorTypePolicy>>()(
            object->auth_factor_type_policy()),
    };
  }
};

}  // namespace hwsec_foundation

#endif  // CRYPTOHOME_FLATBUFFER_SCHEMAS_USER_POLICY_USER_POLICY_FLATBUFFER_H_
