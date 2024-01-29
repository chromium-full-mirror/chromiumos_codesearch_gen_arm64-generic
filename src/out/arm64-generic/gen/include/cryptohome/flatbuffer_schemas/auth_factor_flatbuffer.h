// Copyright 2024 The ChromiumOS Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// THIS CODE IS GENERATED.
// Generated with command:
// gen/python/flatbuffer_cpp_binding_generator.py
// --output_dir=/build/arm64-generic/var/cache/portage/chromeos-base/cryptohome-dev-utils/out/Default/gen/include/cryptohome/flatbuffer_schemas
// --guard_prefix=CRYPTOHOME_FLATBUFFER_SCHEMAS --header_include_paths
// cryptohome/flatbuffer_schemas/auth_block_state.h
// --flatbuffer_header_include_paths
// cryptohome/flatbuffer_schemas/auth_factor_generated.h
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

#ifndef CRYPTOHOME_FLATBUFFER_SCHEMAS_AUTH_FACTOR_FLATBUFFER_H_
#define CRYPTOHOME_FLATBUFFER_SCHEMAS_AUTH_FACTOR_FLATBUFFER_H_

#include <stdint.h>
#include <optional>
#include <string>
#include <type_traits>
#include <variant>
#include <vector>

#include <brillo/secure_blob.h>
#include <flatbuffers/flatbuffers.h>

#include "cryptohome/flatbuffer_schemas/auth_block_state_flatbuffer.h"
#include "cryptohome/flatbuffer_schemas/auth_factor.h"
#include "cryptohome/flatbuffer_schemas/auth_factor_generated.h"
#include "libhwsec-foundation/flatbuffers/basic_objects.h"

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::SerializedKnowledgeFactorHashAlgorithm> {
  using ResultType =
      ::cryptohome::_serialized_::SerializedKnowledgeFactorHashAlgorithm;

  ResultType operator()(
      flatbuffers::FlatBufferBuilder* builder,
      ::cryptohome::SerializedKnowledgeFactorHashAlgorithm object) const {
    return static_cast<ResultType>(object);
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::SerializedKnowledgeFactorHashAlgorithm> {
  ::cryptohome::SerializedKnowledgeFactorHashAlgorithm operator()(
      ::cryptohome::_serialized_::SerializedKnowledgeFactorHashAlgorithm object)
      const {
    return static_cast<::cryptohome::SerializedKnowledgeFactorHashAlgorithm>(
        object);
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::SerializedLockoutPolicy> {
  using ResultType = ::cryptohome::_serialized_::SerializedLockoutPolicy;

  ResultType operator()(flatbuffers::FlatBufferBuilder* builder,
                        ::cryptohome::SerializedLockoutPolicy object) const {
    return static_cast<ResultType>(object);
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::SerializedLockoutPolicy> {
  ::cryptohome::SerializedLockoutPolicy operator()(
      ::cryptohome::_serialized_::SerializedLockoutPolicy object) const {
    return static_cast<::cryptohome::SerializedLockoutPolicy>(object);
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::SerializedKnowledgeFactorHashInfo> {
  using ResultType = flatbuffers::Offset<
      ::cryptohome::_serialized_::SerializedKnowledgeFactorHashInfo>;

  ResultType operator()(
      flatbuffers::FlatBufferBuilder* builder,
      const ::cryptohome::SerializedKnowledgeFactorHashInfo& object) const {
    auto algorithm = ToFlatBuffer<
        std::optional<::cryptohome::SerializedKnowledgeFactorHashAlgorithm>>()(
        builder, object.algorithm);
    auto salt = ToFlatBuffer<brillo::Blob>()(builder, object.salt);
    auto should_generate_key_store = ToFlatBuffer<std::optional<bool>>()(
        builder, object.should_generate_key_store);

    return ::cryptohome::_serialized_::CreateSerializedKnowledgeFactorHashInfo(
        *builder, algorithm, salt, should_generate_key_store);
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::SerializedKnowledgeFactorHashInfo> {
  ::cryptohome::SerializedKnowledgeFactorHashInfo operator()(
      const ::cryptohome::_serialized_::SerializedKnowledgeFactorHashInfo*
          object) const {
    if (object == nullptr) {
      return ::cryptohome::SerializedKnowledgeFactorHashInfo();
    }
    return ::cryptohome::SerializedKnowledgeFactorHashInfo{
        .algorithm = FromFlatBuffer<std::optional<
            ::cryptohome::SerializedKnowledgeFactorHashAlgorithm>>()(
            object->algorithm()),
        .salt = FromFlatBuffer<brillo::Blob>()(object->salt()),
        .should_generate_key_store = FromFlatBuffer<std::optional<bool>>()(
            object->should_generate_key_store()),
    };
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::PasswordMetadata> {
  using ResultType =
      flatbuffers::Offset<::cryptohome::_serialized_::PasswordMetadata>;

  ResultType operator()(flatbuffers::FlatBufferBuilder* builder,
                        const ::cryptohome::PasswordMetadata& object) const {
    auto hash_info = ToFlatBuffer<
        std::optional<::cryptohome::SerializedKnowledgeFactorHashInfo>>()(
        builder, object.hash_info);

    return ::cryptohome::_serialized_::CreatePasswordMetadata(*builder,
                                                              hash_info);
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::PasswordMetadata> {
  ::cryptohome::PasswordMetadata operator()(
      const ::cryptohome::_serialized_::PasswordMetadata* object) const {
    if (object == nullptr) {
      return ::cryptohome::PasswordMetadata();
    }
    return ::cryptohome::PasswordMetadata{
        .hash_info = FromFlatBuffer<
            std::optional<::cryptohome::SerializedKnowledgeFactorHashInfo>>()(
            object->hash_info()),
    };
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::PinMetadata> {
  using ResultType =
      flatbuffers::Offset<::cryptohome::_serialized_::PinMetadata>;

  ResultType operator()(flatbuffers::FlatBufferBuilder* builder,
                        const ::cryptohome::PinMetadata& object) const {
    auto hash_info = ToFlatBuffer<
        std::optional<::cryptohome::SerializedKnowledgeFactorHashInfo>>()(
        builder, object.hash_info);

    return ::cryptohome::_serialized_::CreatePinMetadata(*builder, hash_info);
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::PinMetadata> {
  ::cryptohome::PinMetadata operator()(
      const ::cryptohome::_serialized_::PinMetadata* object) const {
    if (object == nullptr) {
      return ::cryptohome::PinMetadata();
    }
    return ::cryptohome::PinMetadata{
        .hash_info = FromFlatBuffer<
            std::optional<::cryptohome::SerializedKnowledgeFactorHashInfo>>()(
            object->hash_info()),
    };
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::CryptohomeRecoveryMetadata> {
  using ResultType = flatbuffers::Offset<
      ::cryptohome::_serialized_::CryptohomeRecoveryMetadata>;

  ResultType operator()(
      flatbuffers::FlatBufferBuilder* builder,
      const ::cryptohome::CryptohomeRecoveryMetadata& object) const {
    auto mediator_pub_key =
        ToFlatBuffer<brillo::Blob>()(builder, object.mediator_pub_key);

    return ::cryptohome::_serialized_::CreateCryptohomeRecoveryMetadata(
        *builder, mediator_pub_key);
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::CryptohomeRecoveryMetadata> {
  ::cryptohome::CryptohomeRecoveryMetadata operator()(
      const ::cryptohome::_serialized_::CryptohomeRecoveryMetadata* object)
      const {
    if (object == nullptr) {
      return ::cryptohome::CryptohomeRecoveryMetadata();
    }
    return ::cryptohome::CryptohomeRecoveryMetadata{
        .mediator_pub_key =
            FromFlatBuffer<brillo::Blob>()(object->mediator_pub_key()),
    };
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::KioskMetadata> {
  using ResultType =
      flatbuffers::Offset<::cryptohome::_serialized_::KioskMetadata>;

  ResultType operator()(flatbuffers::FlatBufferBuilder* builder,
                        const ::cryptohome::KioskMetadata& object) const {
    return ::cryptohome::_serialized_::CreateKioskMetadata(*builder

    );
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::KioskMetadata> {
  ::cryptohome::KioskMetadata operator()(
      const ::cryptohome::_serialized_::KioskMetadata* object) const {
    if (object == nullptr) {
      return ::cryptohome::KioskMetadata();
    }
    return ::cryptohome::KioskMetadata{

    };
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::SmartCardMetadata> {
  using ResultType =
      flatbuffers::Offset<::cryptohome::_serialized_::SmartCardMetadata>;

  ResultType operator()(flatbuffers::FlatBufferBuilder* builder,
                        const ::cryptohome::SmartCardMetadata& object) const {
    auto public_key_spki_der =
        ToFlatBuffer<brillo::Blob>()(builder, object.public_key_spki_der);

    return ::cryptohome::_serialized_::CreateSmartCardMetadata(
        *builder, public_key_spki_der);
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::SmartCardMetadata> {
  ::cryptohome::SmartCardMetadata operator()(
      const ::cryptohome::_serialized_::SmartCardMetadata* object) const {
    if (object == nullptr) {
      return ::cryptohome::SmartCardMetadata();
    }
    return ::cryptohome::SmartCardMetadata{
        .public_key_spki_der =
            FromFlatBuffer<brillo::Blob>()(object->public_key_spki_der()),
    };
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::FingerprintMetadata> {
  using ResultType =
      flatbuffers::Offset<::cryptohome::_serialized_::FingerprintMetadata>;

  ResultType operator()(flatbuffers::FlatBufferBuilder* builder,
                        const ::cryptohome::FingerprintMetadata& object) const {
    return ::cryptohome::_serialized_::CreateFingerprintMetadata(*builder

    );
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::FingerprintMetadata> {
  ::cryptohome::FingerprintMetadata operator()(
      const ::cryptohome::_serialized_::FingerprintMetadata* object) const {
    if (object == nullptr) {
      return ::cryptohome::FingerprintMetadata();
    }
    return ::cryptohome::FingerprintMetadata{

    };
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::TypeSpecificMetadata, IsUnionEnum> {
  using ResultType = ::cryptohome::_serialized_::TypeSpecificMetadata;

  ResultType operator()(
      flatbuffers::FlatBufferBuilder* builder,
      const ::cryptohome::TypeSpecificMetadata& object) const {
    return std::visit(
        [](const auto& arg)
            -> ::cryptohome::_serialized_::TypeSpecificMetadata {
          using T = std::decay_t<decltype(arg)>;
          if constexpr (std::is_same_v<T, std::monostate>)
            return ::cryptohome::_serialized_::TypeSpecificMetadata::NONE;
          else if constexpr (std::is_same_v<T, ::cryptohome::PasswordMetadata>)
            return ::cryptohome::_serialized_::TypeSpecificMetadata::
                PasswordMetadata;
          else if constexpr (std::is_same_v<T, ::cryptohome::PinMetadata>)
            return ::cryptohome::_serialized_::TypeSpecificMetadata::
                PinMetadata;
          else if constexpr (std::is_same_v<
                                 T, ::cryptohome::CryptohomeRecoveryMetadata>)
            return ::cryptohome::_serialized_::TypeSpecificMetadata::
                CryptohomeRecoveryMetadata;
          else if constexpr (std::is_same_v<T, ::cryptohome::KioskMetadata>)
            return ::cryptohome::_serialized_::TypeSpecificMetadata::
                KioskMetadata;
          else if constexpr (std::is_same_v<T, ::cryptohome::SmartCardMetadata>)
            return ::cryptohome::_serialized_::TypeSpecificMetadata::
                SmartCardMetadata;
          else if constexpr (std::is_same_v<T,
                                            ::cryptohome::FingerprintMetadata>)
            return ::cryptohome::_serialized_::TypeSpecificMetadata::
                FingerprintMetadata;
        },
        object);
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::TypeSpecificMetadata> {
  ::cryptohome::TypeSpecificMetadata operator()(
      const void* object,
      ::cryptohome::_serialized_::TypeSpecificMetadata type) const {
    if (object == nullptr) {
      return std::monostate();
    }
    switch (type) {
      case ::cryptohome::_serialized_::TypeSpecificMetadata::NONE: {
        return std::monostate();
      }
      case ::cryptohome::_serialized_::TypeSpecificMetadata::PasswordMetadata: {
        return FromFlatBuffer<::cryptohome::PasswordMetadata>()(
            static_cast<const ::cryptohome::_serialized_::PasswordMetadata*>(
                object));
      }
      case ::cryptohome::_serialized_::TypeSpecificMetadata::PinMetadata: {
        return FromFlatBuffer<::cryptohome::PinMetadata>()(
            static_cast<const ::cryptohome::_serialized_::PinMetadata*>(
                object));
      }
      case ::cryptohome::_serialized_::TypeSpecificMetadata::
          CryptohomeRecoveryMetadata: {
        return FromFlatBuffer<::cryptohome::CryptohomeRecoveryMetadata>()(
            static_cast<
                const ::cryptohome::_serialized_::CryptohomeRecoveryMetadata*>(
                object));
      }
      case ::cryptohome::_serialized_::TypeSpecificMetadata::KioskMetadata: {
        return FromFlatBuffer<::cryptohome::KioskMetadata>()(
            static_cast<const ::cryptohome::_serialized_::KioskMetadata*>(
                object));
      }
      case ::cryptohome::_serialized_::TypeSpecificMetadata::
          SmartCardMetadata: {
        return FromFlatBuffer<::cryptohome::SmartCardMetadata>()(
            static_cast<const ::cryptohome::_serialized_::SmartCardMetadata*>(
                object));
      }
      case ::cryptohome::_serialized_::TypeSpecificMetadata::
          FingerprintMetadata: {
        return FromFlatBuffer<::cryptohome::FingerprintMetadata>()(
            static_cast<const ::cryptohome::_serialized_::FingerprintMetadata*>(
                object));
      }
    }
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::CommonMetadata> {
  using ResultType =
      flatbuffers::Offset<::cryptohome::_serialized_::CommonMetadata>;

  ResultType operator()(flatbuffers::FlatBufferBuilder* builder,
                        const ::cryptohome::CommonMetadata& object) const {
    auto chromeos_version_last_updated = ToFlatBuffer<std::string>()(
        builder, object.chromeos_version_last_updated);
    auto chrome_version_last_updated = ToFlatBuffer<std::string>()(
        builder, object.chrome_version_last_updated);
    auto lockout_policy =
        ToFlatBuffer<std::optional<::cryptohome::SerializedLockoutPolicy>>()(
            builder, object.lockout_policy);
    auto user_specified_name =
        ToFlatBuffer<std::string>()(builder, object.user_specified_name);

    return ::cryptohome::_serialized_::CreateCommonMetadata(
        *builder, chromeos_version_last_updated, chrome_version_last_updated,
        lockout_policy, user_specified_name);
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::CommonMetadata> {
  ::cryptohome::CommonMetadata operator()(
      const ::cryptohome::_serialized_::CommonMetadata* object) const {
    if (object == nullptr) {
      return ::cryptohome::CommonMetadata();
    }
    return ::cryptohome::CommonMetadata{
        .chromeos_version_last_updated = FromFlatBuffer<std::string>()(
            object->chromeos_version_last_updated()),
        .chrome_version_last_updated = FromFlatBuffer<std::string>()(
            object->chrome_version_last_updated()),
        .lockout_policy = FromFlatBuffer<
            std::optional<::cryptohome::SerializedLockoutPolicy>>()(
            object->lockout_policy()),
        .user_specified_name =
            FromFlatBuffer<std::string>()(object->user_specified_name()),
    };
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::SerializedAuthFactor> {
  using ResultType =
      flatbuffers::Offset<::cryptohome::_serialized_::SerializedAuthFactor>;

  ResultType operator()(
      flatbuffers::FlatBufferBuilder* builder,
      const ::cryptohome::SerializedAuthFactor& object) const {
    auto auth_block_state = ToFlatBuffer<::cryptohome::AuthBlockState>()(
        builder, object.auth_block_state);
    auto metadata_type =
        ToFlatBuffer<::cryptohome::TypeSpecificMetadata, IsUnionEnum>()(
            builder, object.metadata);
    auto metadata = ToFlatBuffer<::cryptohome::TypeSpecificMetadata>()(
        builder, object.metadata);
    auto common_metadata = ToFlatBuffer<::cryptohome::CommonMetadata>()(
        builder, object.common_metadata);

    return ::cryptohome::_serialized_::CreateSerializedAuthFactor(
        *builder, auth_block_state, metadata_type, metadata, common_metadata);
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::SerializedAuthFactor> {
  ::cryptohome::SerializedAuthFactor operator()(
      const ::cryptohome::_serialized_::SerializedAuthFactor* object) const {
    if (object == nullptr) {
      return ::cryptohome::SerializedAuthFactor();
    }
    return ::cryptohome::SerializedAuthFactor{
        .auth_block_state = FromFlatBuffer<::cryptohome::AuthBlockState>()(
            object->auth_block_state()),
        .metadata = FromFlatBuffer<::cryptohome::TypeSpecificMetadata>()(
            object->metadata(), object->metadata_type()),
        .common_metadata = FromFlatBuffer<::cryptohome::CommonMetadata>()(
            object->common_metadata()),
    };
  }
};

}  // namespace hwsec_foundation

#endif  // CRYPTOHOME_FLATBUFFER_SCHEMAS_AUTH_FACTOR_FLATBUFFER_H_
