// Copyright 2023 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// THIS CODE IS GENERATED.
// Generated with command:
// gen/python/flatbuffer_cpp_binding_generator.py
// --output_dir=/build/arm64-generic/var/cache/portage/chromeos-base/cryptohome-dev-utils/out/Default/gen/include/cryptohome/flatbuffer_schemas
// --guard_prefix=CRYPTOHOME_FLATBUFFER_SCHEMAS_ENUMERATIONS
// --flatbuffer_header_include_paths
// cryptohome/flatbuffer_schemas/enumerations.h
// --flatbuffer_header_include_paths cryptohome/enumerations_generated.h
// --flatbuffer_header_include_paths
// libhwsec-foundation/flatbuffers/basic_objects.h --impl_include_paths
// cryptohome/flatbuffer_schemas/enumerations.h --impl_include_paths
// cryptohome/flatbuffer_schemas/enumerations_flatbuffer.h
// --test_utils_header_include_path cryptohome/flatbuffer_schemas/enumerations.h
// /build/arm64-generic/var/cache/portage/chromeos-base/cryptohome-dev-utils/out/Default/gen/bfbs/enumerations.bfbs
// --filter_by_namespace cryptohome::enumeration

#ifndef CRYPTOHOME_FLATBUFFER_SCHEMAS_ENUMERATIONS_ENUMERATIONS_FLATBUFFER_H_
#define CRYPTOHOME_FLATBUFFER_SCHEMAS_ENUMERATIONS_ENUMERATIONS_FLATBUFFER_H_

#include <stdint.h>
#include <optional>
#include <string>
#include <type_traits>
#include <variant>
#include <vector>

#include <brillo/secure_blob.h>
#include <flatbuffers/flatbuffers.h>

#include "cryptohome/enumerations_generated.h"
#include "cryptohome/flatbuffer_schemas/enumerations.h"
#include "libhwsec-foundation/flatbuffers/basic_objects.h"

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::enumeration::SerializedAuthFactorType> {
  using ResultType =
      ::cryptohome::enumeration::_serialized_::SerializedAuthFactorType;

  ResultType operator()(
      flatbuffers::FlatBufferBuilder* builder,
      ::cryptohome::enumeration::SerializedAuthFactorType object) const {
    return static_cast<ResultType>(object);
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::enumeration::SerializedAuthFactorType> {
  ::cryptohome::enumeration::SerializedAuthFactorType operator()(
      ::cryptohome::enumeration::_serialized_::SerializedAuthFactorType object)
      const {
    return static_cast<::cryptohome::enumeration::SerializedAuthFactorType>(
        object);
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::enumeration::SerializedAuthIntent> {
  using ResultType =
      ::cryptohome::enumeration::_serialized_::SerializedAuthIntent;

  ResultType operator()(
      flatbuffers::FlatBufferBuilder* builder,
      ::cryptohome::enumeration::SerializedAuthIntent object) const {
    return static_cast<ResultType>(object);
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::enumeration::SerializedAuthIntent> {
  ::cryptohome::enumeration::SerializedAuthIntent operator()(
      ::cryptohome::enumeration::_serialized_::SerializedAuthIntent object)
      const {
    return static_cast<::cryptohome::enumeration::SerializedAuthIntent>(object);
  }
};

}  // namespace hwsec_foundation

#endif  // CRYPTOHOME_FLATBUFFER_SCHEMAS_ENUMERATIONS_ENUMERATIONS_FLATBUFFER_H_
