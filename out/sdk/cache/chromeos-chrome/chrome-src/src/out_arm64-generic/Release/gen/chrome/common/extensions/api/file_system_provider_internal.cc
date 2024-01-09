// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/file_system_provider_internal.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/file_system_provider_internal.h"

#include <memory>
#include <optional>
#include <ostream>
#include <string>
#include <utility>
#include <vector>

#include "base/check.h"
#include "base/check_op.h"
#include "base/notreached.h"
#include "base/strings/string_number_conversions.h"
#include "base/strings/utf_string_conversions.h"
#include "base/values.h"
#include "tools/json_schema_compiler/util.h"
#include "chrome/common/extensions/api/file_system_provider.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace file_system_provider_internal {
//
// Functions
//

namespace RespondToMountRequest {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 3) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& error_value = args[1];
    {
      const std::string* provider_error_as_string = error_value.GetIfString();
      if (!provider_error_as_string) {
        return std::nullopt;
      }
      params.error = file_system_provider::ParseProviderError(*provider_error_as_string);
      if (params.error == file_system_provider::ProviderError()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& execution_time_value = args[2];
    {
      auto temp = execution_time_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.execution_time = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace RespondToMountRequest

namespace UnmountRequestedSuccess {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 3) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& file_system_id_value = args[0];
    {
      auto* temp = file_system_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.file_system_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& request_id_value = args[1];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& execution_time_value = args[2];
    {
      auto temp = execution_time_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.execution_time = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace UnmountRequestedSuccess

namespace GetMetadataRequestedSuccess {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 4) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& file_system_id_value = args[0];
    {
      auto* temp = file_system_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.file_system_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& request_id_value = args[1];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& metadata_value = args[2];
    {
      if (!metadata_value.is_dict()) {
        return std::nullopt;
      }
      if (!extensions::api::file_system_provider::EntryMetadata::Populate(metadata_value.GetDict(), params.metadata)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (3 < args.size() &&
      !args[3].is_none()) {
    const base::Value& execution_time_value = args[3];
    {
      auto temp = execution_time_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.execution_time = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace GetMetadataRequestedSuccess

namespace GetActionsRequestedSuccess {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 4) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& file_system_id_value = args[0];
    {
      auto* temp = file_system_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.file_system_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& request_id_value = args[1];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& actions_value = args[2];
    {
      if (!actions_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(actions_value.GetList(), params.actions)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (3 < args.size() &&
      !args[3].is_none()) {
    const base::Value& execution_time_value = args[3];
    {
      auto temp = execution_time_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.execution_time = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace GetActionsRequestedSuccess

namespace ReadDirectoryRequestedSuccess {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 5) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& file_system_id_value = args[0];
    {
      auto* temp = file_system_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.file_system_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& request_id_value = args[1];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& entries_value = args[2];
    {
      if (!entries_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(entries_value.GetList(), params.entries)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (3 < args.size() &&
      !args[3].is_none()) {
    const base::Value& has_more_value = args[3];
    {
      auto temp = has_more_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.has_more = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (4 < args.size() &&
      !args[4].is_none()) {
    const base::Value& execution_time_value = args[4];
    {
      auto temp = execution_time_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.execution_time = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace ReadDirectoryRequestedSuccess

namespace ReadFileRequestedSuccess {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 5) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& file_system_id_value = args[0];
    {
      auto* temp = file_system_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.file_system_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& request_id_value = args[1];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& data_value = args[2];
    {
      if (!data_value.is_blob()) {
        return std::nullopt;
      }
      else {
        params.data = data_value.GetBlob();
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (3 < args.size() &&
      !args[3].is_none()) {
    const base::Value& has_more_value = args[3];
    {
      auto temp = has_more_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.has_more = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (4 < args.size() &&
      !args[4].is_none()) {
    const base::Value& execution_time_value = args[4];
    {
      auto temp = execution_time_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.execution_time = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace ReadFileRequestedSuccess

namespace OperationRequestedSuccess {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 3) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& file_system_id_value = args[0];
    {
      auto* temp = file_system_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.file_system_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& request_id_value = args[1];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& execution_time_value = args[2];
    {
      auto temp = execution_time_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.execution_time = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace OperationRequestedSuccess

namespace OperationRequestedError {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 4) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& file_system_id_value = args[0];
    {
      auto* temp = file_system_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.file_system_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& request_id_value = args[1];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& error_value = args[2];
    {
      const std::string* provider_error_as_string = error_value.GetIfString();
      if (!provider_error_as_string) {
        return std::nullopt;
      }
      params.error = file_system_provider::ParseProviderError(*provider_error_as_string);
      if (params.error == file_system_provider::ProviderError()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (3 < args.size() &&
      !args[3].is_none()) {
    const base::Value& execution_time_value = args[3];
    {
      auto temp = execution_time_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.execution_time = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace OperationRequestedError

}  // namespace file_system_provider_internal
}  // namespace api
}  // namespace extensions

