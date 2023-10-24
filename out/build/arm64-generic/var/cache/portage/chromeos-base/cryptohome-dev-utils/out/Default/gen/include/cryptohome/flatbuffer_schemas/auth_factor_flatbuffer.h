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

#include "cryptohome/auth_factor_generated.h"
#include "cryptohome/flatbuffer_schemas/auth_block_state_flatbuffer.h"
#include "cryptohome/flatbuffer_schemas/auth_factor.h"
#include "libhwsec-foundation/flatbuffers/basic_objects.h"

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::auth_factor::PasswordMetadata> {
  using ResultType = flatbuffers::Offset<
      ::cryptohome::auth_factor::_serialized_::PasswordMetadata>;

  ResultType operator()(
      flatbuffers::FlatBufferBuilder* builder,
      const ::cryptohome::auth_factor::PasswordMetadata& object) const {
    return ::cryptohome::auth_factor::_serialized_::CreatePasswordMetadata(
        *builder

    );
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::auth_factor::PasswordMetadata> {
  ::cryptohome::auth_factor::PasswordMetadata operator()(
      const ::cryptohome::auth_factor::_serialized_::PasswordMetadata* object)
      const {
    if (object == nullptr) {
      return ::cryptohome::auth_factor::PasswordMetadata();
    }
    return ::cryptohome::auth_factor::PasswordMetadata{

    };
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::auth_factor::PinMetadata> {
  using ResultType =
      flatbuffers::Offset<::cryptohome::auth_factor::_serialized_::PinMetadata>;

  ResultType operator()(
      flatbuffers::FlatBufferBuilder* builder,
      const ::cryptohome::auth_factor::PinMetadata& object) const {
    return ::cryptohome::auth_factor::_serialized_::CreatePinMetadata(*builder

    );
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::auth_factor::PinMetadata> {
  ::cryptohome::auth_factor::PinMetadata operator()(
      const ::cryptohome::auth_factor::_serialized_::PinMetadata* object)
      const {
    if (object == nullptr) {
      return ::cryptohome::auth_factor::PinMetadata();
    }
    return ::cryptohome::auth_factor::PinMetadata{

    };
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::auth_factor::CryptohomeRecoveryMetadata> {
  using ResultType = flatbuffers::Offset<
      ::cryptohome::auth_factor::_serialized_::CryptohomeRecoveryMetadata>;

  ResultType operator()(
      flatbuffers::FlatBufferBuilder* builder,
      const ::cryptohome::auth_factor::CryptohomeRecoveryMetadata& object)
      const {
    auto mediator_pub_key =
        ToFlatBuffer<brillo::Blob>()(builder, object.mediator_pub_key);

    return ::cryptohome::auth_factor::_serialized_::
        CreateCryptohomeRecoveryMetadata(*builder, mediator_pub_key);
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::auth_factor::CryptohomeRecoveryMetadata> {
  ::cryptohome::auth_factor::CryptohomeRecoveryMetadata operator()(
      const ::cryptohome::auth_factor::_serialized_::CryptohomeRecoveryMetadata*
          object) const {
    if (object == nullptr) {
      return ::cryptohome::auth_factor::CryptohomeRecoveryMetadata();
    }
    return ::cryptohome::auth_factor::CryptohomeRecoveryMetadata{
        .mediator_pub_key =
            FromFlatBuffer<brillo::Blob>()(object->mediator_pub_key()),
    };
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::auth_factor::KioskMetadata> {
  using ResultType = flatbuffers::Offset<
      ::cryptohome::auth_factor::_serialized_::KioskMetadata>;

  ResultType operator()(
      flatbuffers::FlatBufferBuilder* builder,
      const ::cryptohome::auth_factor::KioskMetadata& object) const {
    return ::cryptohome::auth_factor::_serialized_::CreateKioskMetadata(*builder

    );
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::auth_factor::KioskMetadata> {
  ::cryptohome::auth_factor::KioskMetadata operator()(
      const ::cryptohome::auth_factor::_serialized_::KioskMetadata* object)
      const {
    if (object == nullptr) {
      return ::cryptohome::auth_factor::KioskMetadata();
    }
    return ::cryptohome::auth_factor::KioskMetadata{

    };
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::auth_factor::SmartCardMetadata> {
  using ResultType = flatbuffers::Offset<
      ::cryptohome::auth_factor::_serialized_::SmartCardMetadata>;

  ResultType operator()(
      flatbuffers::FlatBufferBuilder* builder,
      const ::cryptohome::auth_factor::SmartCardMetadata& object) const {
    auto public_key_spki_der =
        ToFlatBuffer<brillo::Blob>()(builder, object.public_key_spki_der);

    return ::cryptohome::auth_factor::_serialized_::CreateSmartCardMetadata(
        *builder, public_key_spki_der);
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::auth_factor::SmartCardMetadata> {
  ::cryptohome::auth_factor::SmartCardMetadata operator()(
      const ::cryptohome::auth_factor::_serialized_::SmartCardMetadata* object)
      const {
    if (object == nullptr) {
      return ::cryptohome::auth_factor::SmartCardMetadata();
    }
    return ::cryptohome::auth_factor::SmartCardMetadata{
        .public_key_spki_der =
            FromFlatBuffer<brillo::Blob>()(object->public_key_spki_der()),
    };
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::auth_factor::FingerprintMetadata> {
  using ResultType = flatbuffers::Offset<
      ::cryptohome::auth_factor::_serialized_::FingerprintMetadata>;

  ResultType operator()(
      flatbuffers::FlatBufferBuilder* builder,
      const ::cryptohome::auth_factor::FingerprintMetadata& object) const {
    return ::cryptohome::auth_factor::_serialized_::CreateFingerprintMetadata(
        *builder

    );
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::auth_factor::FingerprintMetadata> {
  ::cryptohome::auth_factor::FingerprintMetadata operator()(
      const ::cryptohome::auth_factor::_serialized_::FingerprintMetadata*
          object) const {
    if (object == nullptr) {
      return ::cryptohome::auth_factor::FingerprintMetadata();
    }
    return ::cryptohome::auth_factor::FingerprintMetadata{

    };
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::auth_factor::AuthFactorMetadata,
                    IsUnionEnum> {
  using ResultType =
      ::cryptohome::auth_factor::_serialized_::AuthFactorMetadata;

  ResultType operator()(
      flatbuffers::FlatBufferBuilder* builder,
      const ::cryptohome::auth_factor::AuthFactorMetadata& object) const {
    return std::visit(
        [](const auto& arg)
            -> ::cryptohome::auth_factor::_serialized_::AuthFactorMetadata {
          using T = std::decay_t<decltype(arg)>;
          if constexpr (std::is_same_v<T, std::monostate>)
            return ::cryptohome::auth_factor::_serialized_::AuthFactorMetadata::
                NONE;
          else if constexpr (std::is_same_v<
                                 T,
                                 ::cryptohome::auth_factor::PasswordMetadata>)
            return ::cryptohome::auth_factor::_serialized_::AuthFactorMetadata::
                PasswordMetadata;
          else if constexpr (std::is_same_v<
                                 T, ::cryptohome::auth_factor::PinMetadata>)
            return ::cryptohome::auth_factor::_serialized_::AuthFactorMetadata::
                PinMetadata;
          else if constexpr (std::is_same_v<T, ::cryptohome::auth_factor::
                                                   CryptohomeRecoveryMetadata>)
            return ::cryptohome::auth_factor::_serialized_::AuthFactorMetadata::
                CryptohomeRecoveryMetadata;
          else if constexpr (std::is_same_v<
                                 T, ::cryptohome::auth_factor::KioskMetadata>)
            return ::cryptohome::auth_factor::_serialized_::AuthFactorMetadata::
                KioskMetadata;
          else if constexpr (std::is_same_v<
                                 T,
                                 ::cryptohome::auth_factor::SmartCardMetadata>)
            return ::cryptohome::auth_factor::_serialized_::AuthFactorMetadata::
                SmartCardMetadata;
          else if constexpr (std::is_same_v<T, ::cryptohome::auth_factor::
                                                   FingerprintMetadata>)
            return ::cryptohome::auth_factor::_serialized_::AuthFactorMetadata::
                FingerprintMetadata;
        },
        object);
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::auth_factor::AuthFactorMetadata> {
  ::cryptohome::auth_factor::AuthFactorMetadata operator()(
      const void* object,
      ::cryptohome::auth_factor::_serialized_::AuthFactorMetadata type) const {
    if (object == nullptr) {
      return std::monostate();
    }
    switch (type) {
      case ::cryptohome::auth_factor::_serialized_::AuthFactorMetadata::NONE: {
        return std::monostate();
      }
      case ::cryptohome::auth_factor::_serialized_::AuthFactorMetadata::
          PasswordMetadata: {
        return FromFlatBuffer<::cryptohome::auth_factor::PasswordMetadata>()(
            static_cast<const ::cryptohome::auth_factor::_serialized_::
                            PasswordMetadata*>(object));
      }
      case ::cryptohome::auth_factor::_serialized_::AuthFactorMetadata::
          PinMetadata: {
        return FromFlatBuffer<::cryptohome::auth_factor::PinMetadata>()(
            static_cast<
                const ::cryptohome::auth_factor::_serialized_::PinMetadata*>(
                object));
      }
      case ::cryptohome::auth_factor::_serialized_::AuthFactorMetadata::
          CryptohomeRecoveryMetadata: {
        return FromFlatBuffer<
            ::cryptohome::auth_factor::CryptohomeRecoveryMetadata>()(
            static_cast<const ::cryptohome::auth_factor::_serialized_::
                            CryptohomeRecoveryMetadata*>(object));
      }
      case ::cryptohome::auth_factor::_serialized_::AuthFactorMetadata::
          KioskMetadata: {
        return FromFlatBuffer<::cryptohome::auth_factor::KioskMetadata>()(
            static_cast<
                const ::cryptohome::auth_factor::_serialized_::KioskMetadata*>(
                object));
      }
      case ::cryptohome::auth_factor::_serialized_::AuthFactorMetadata::
          SmartCardMetadata: {
        return FromFlatBuffer<::cryptohome::auth_factor::SmartCardMetadata>()(
            static_cast<const ::cryptohome::auth_factor::_serialized_::
                            SmartCardMetadata*>(object));
      }
      case ::cryptohome::auth_factor::_serialized_::AuthFactorMetadata::
          FingerprintMetadata: {
        return FromFlatBuffer<::cryptohome::auth_factor::FingerprintMetadata>()(
            static_cast<const ::cryptohome::auth_factor::_serialized_::
                            FingerprintMetadata*>(object));
      }
    }
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::auth_factor::LockoutPolicy> {
  using ResultType = ::cryptohome::auth_factor::_serialized_::LockoutPolicy;

  ResultType operator()(flatbuffers::FlatBufferBuilder* builder,
                        ::cryptohome::auth_factor::LockoutPolicy object) const {
    return static_cast<ResultType>(object);
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::auth_factor::LockoutPolicy> {
  ::cryptohome::auth_factor::LockoutPolicy operator()(
      ::cryptohome::auth_factor::_serialized_::LockoutPolicy object) const {
    return static_cast<::cryptohome::auth_factor::LockoutPolicy>(object);
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::auth_factor::CommonMetadata> {
  using ResultType = flatbuffers::Offset<
      ::cryptohome::auth_factor::_serialized_::CommonMetadata>;

  ResultType operator()(
      flatbuffers::FlatBufferBuilder* builder,
      const ::cryptohome::auth_factor::CommonMetadata& object) const {
    auto chromeos_version_last_updated = ToFlatBuffer<std::string>()(
        builder, object.chromeos_version_last_updated);
    auto chrome_version_last_updated = ToFlatBuffer<std::string>()(
        builder, object.chrome_version_last_updated);
    auto lockout_policy =
        ToFlatBuffer<std::optional<::cryptohome::auth_factor::LockoutPolicy>>()(
            builder, object.lockout_policy);
    auto user_specified_name =
        ToFlatBuffer<std::string>()(builder, object.user_specified_name);

    return ::cryptohome::auth_factor::_serialized_::CreateCommonMetadata(
        *builder, chromeos_version_last_updated, chrome_version_last_updated,
        lockout_policy, user_specified_name);
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::auth_factor::CommonMetadata> {
  ::cryptohome::auth_factor::CommonMetadata operator()(
      const ::cryptohome::auth_factor::_serialized_::CommonMetadata* object)
      const {
    if (object == nullptr) {
      return ::cryptohome::auth_factor::CommonMetadata();
    }
    return ::cryptohome::auth_factor::CommonMetadata{
        .chromeos_version_last_updated = FromFlatBuffer<std::string>()(
            object->chromeos_version_last_updated()),
        .chrome_version_last_updated = FromFlatBuffer<std::string>()(
            object->chrome_version_last_updated()),
        .lockout_policy = FromFlatBuffer<
            std::optional<::cryptohome::auth_factor::LockoutPolicy>>()(
            object->lockout_policy()),
        .user_specified_name =
            FromFlatBuffer<std::string>()(object->user_specified_name()),
    };
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct ToFlatBuffer<::cryptohome::auth_factor::AuthFactor> {
  using ResultType =
      flatbuffers::Offset<::cryptohome::auth_factor::_serialized_::AuthFactor>;

  ResultType operator()(
      flatbuffers::FlatBufferBuilder* builder,
      const ::cryptohome::auth_factor::AuthFactor& object) const {
    auto auth_block_state = ToFlatBuffer<::cryptohome::AuthBlockState>()(
        builder, object.auth_block_state);
    auto metadata_type =
        ToFlatBuffer<::cryptohome::auth_factor::AuthFactorMetadata,
                     IsUnionEnum>()(builder, object.metadata);
    auto metadata =
        ToFlatBuffer<::cryptohome::auth_factor::AuthFactorMetadata>()(
            builder, object.metadata);
    auto common_metadata =
        ToFlatBuffer<::cryptohome::auth_factor::CommonMetadata>()(
            builder, object.common_metadata);

    return ::cryptohome::auth_factor::_serialized_::CreateAuthFactor(
        *builder, auth_block_state, metadata_type, metadata, common_metadata);
  }
};

}  // namespace hwsec_foundation

namespace hwsec_foundation {

template <>
struct FromFlatBuffer<::cryptohome::auth_factor::AuthFactor> {
  ::cryptohome::auth_factor::AuthFactor operator()(
      const ::cryptohome::auth_factor::_serialized_::AuthFactor* object) const {
    if (object == nullptr) {
      return ::cryptohome::auth_factor::AuthFactor();
    }
    return ::cryptohome::auth_factor::AuthFactor{
        .auth_block_state = FromFlatBuffer<::cryptohome::AuthBlockState>()(
            object->auth_block_state()),
        .metadata =
            FromFlatBuffer<::cryptohome::auth_factor::AuthFactorMetadata>()(
                object->metadata(), object->metadata_type()),
        .common_metadata =
            FromFlatBuffer<::cryptohome::auth_factor::CommonMetadata>()(
                object->common_metadata()),
    };
  }
};

}  // namespace hwsec_foundation

#endif  // CRYPTOHOME_FLATBUFFER_SCHEMAS_AUTH_FACTOR_FLATBUFFER_H_
