// Copyright 2024 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// THIS CODE IS GENERATED.
// Generated with command:
// gen/python/flatbuffer_cpp_binding_generator.py
// --output_dir=/build/arm64-generic/var/cache/portage/chromeos-base/cryptohome-dev-utils/out/Default/gen/include/cryptohome/flatbuffer_schemas
// --guard_prefix=CRYPTOHOME_FLATBUFFER_SCHEMAS_STRUCTURES
// --header_include_paths libhwsec/structures/signature_sealed_data.h
// --flatbuffer_header_include_paths cryptohome/flatbuffer_schemas/structures.h
// --flatbuffer_header_include_paths
// cryptohome/flatbuffer_schemas/structures_generated.h
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
// /build/arm64-generic/var/cache/portage/chromeos-base/cryptohome-dev-utils/out/Default/gen/bfbs/structures.bfbs

#ifndef CRYPTOHOME_FLATBUFFER_SCHEMAS_STRUCTURES_STRUCTURES_FLATBUFFER_H_
#define CRYPTOHOME_FLATBUFFER_SCHEMAS_STRUCTURES_STRUCTURES_FLATBUFFER_H_

#include <stdint.h>
#include <optional>
#include <string>
#include <type_traits>
#include <variant>
#include <vector>

#include <brillo/secure_blob.h>
#include <flatbuffers/flatbuffers.h>

#include "cryptohome/flatbuffer_schemas/structures.h"
#include "cryptohome/flatbuffer_schemas/structures_generated.h"
#include "libhwsec-foundation/flatbuffers/basic_objects.h"
#include "libhwsec/structures/signature_sealed_data_flatbuffer.h"

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::SerializedChallengeSignatureAlgorithm> {
  using ResultType =
      ::cryptohome::_serialized_::SerializedChallengeSignatureAlgorithm;

  ResultType operator()(
      flatbuffers::FlatBufferBuilder* builder,
      ::cryptohome::SerializedChallengeSignatureAlgorithm object) const {
    return static_cast<ResultType>(object);
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::SerializedChallengeSignatureAlgorithm> {
  ::cryptohome::SerializedChallengeSignatureAlgorithm operator()(
      ::cryptohome::_serialized_::SerializedChallengeSignatureAlgorithm object)
      const {
    return static_cast<::cryptohome::SerializedChallengeSignatureAlgorithm>(
        object);
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::SerializedChallengePublicKeyInfo> {
  using ResultType = flatbuffers::Offset<
      ::cryptohome::_serialized_::SerializedChallengePublicKeyInfo>;

  ResultType operator()(
      flatbuffers::FlatBufferBuilder* builder,
      const ::cryptohome::SerializedChallengePublicKeyInfo& object) const {
    auto public_key_spki_der =
        ToFlatBuffer<brillo::Blob>()(builder, object.public_key_spki_der);
    auto signature_algorithm = ToFlatBuffer<
        std::vector<::cryptohome::SerializedChallengeSignatureAlgorithm>>()(
        builder, object.signature_algorithm);

    return ::cryptohome::_serialized_::CreateSerializedChallengePublicKeyInfo(
        *builder, public_key_spki_der, signature_algorithm);
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::SerializedChallengePublicKeyInfo> {
  ::cryptohome::SerializedChallengePublicKeyInfo operator()(
      const ::cryptohome::_serialized_::SerializedChallengePublicKeyInfo*
          object) const {
    if (object == nullptr) {
      return ::cryptohome::SerializedChallengePublicKeyInfo();
    }
    return ::cryptohome::SerializedChallengePublicKeyInfo{
        .public_key_spki_der =
            FromFlatBuffer<brillo::Blob>()(object->public_key_spki_der()),
        .signature_algorithm = FromFlatBuffer<
            std::vector<::cryptohome::SerializedChallengeSignatureAlgorithm>>()(
            object->signature_algorithm()),
    };
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::SerializedSignatureChallengeInfo> {
  using ResultType = flatbuffers::Offset<
      ::cryptohome::_serialized_::SerializedSignatureChallengeInfo>;

  ResultType operator()(
      flatbuffers::FlatBufferBuilder* builder,
      const ::cryptohome::SerializedSignatureChallengeInfo& object) const {
    auto public_key_spki_der =
        ToFlatBuffer<brillo::Blob>()(builder, object.public_key_spki_der);
    auto sealed_secret_type =
        ToFlatBuffer<::hwsec::SignatureSealedData, IsUnionEnum>()(
            builder, object.sealed_secret);
    auto sealed_secret = ToFlatBuffer<::hwsec::SignatureSealedData>()(
        builder, object.sealed_secret);
    auto salt = ToFlatBuffer<brillo::Blob>()(builder, object.salt);
    auto salt_signature_algorithm = ToFlatBuffer<
        std::optional<::cryptohome::SerializedChallengeSignatureAlgorithm>>()(
        builder, object.salt_signature_algorithm);

    return ::cryptohome::_serialized_::CreateSerializedSignatureChallengeInfo(
        *builder, public_key_spki_der, sealed_secret_type, sealed_secret, salt,
        salt_signature_algorithm);
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::SerializedSignatureChallengeInfo> {
  ::cryptohome::SerializedSignatureChallengeInfo operator()(
      const ::cryptohome::_serialized_::SerializedSignatureChallengeInfo*
          object) const {
    if (object == nullptr) {
      return ::cryptohome::SerializedSignatureChallengeInfo();
    }
    return ::cryptohome::SerializedSignatureChallengeInfo{
        .public_key_spki_der =
            FromFlatBuffer<brillo::Blob>()(object->public_key_spki_der()),
        .sealed_secret = FromFlatBuffer<::hwsec::SignatureSealedData>()(
            object->sealed_secret(), object->sealed_secret_type()),
        .salt = FromFlatBuffer<brillo::Blob>()(object->salt()),
        .salt_signature_algorithm = FromFlatBuffer<std::optional<
            ::cryptohome::SerializedChallengeSignatureAlgorithm>>()(
            object->salt_signature_algorithm()),
    };
  }
};

}  // namespace hwsec_foundation

#endif  // CRYPTOHOME_FLATBUFFER_SCHEMAS_STRUCTURES_STRUCTURES_FLATBUFFER_H_
