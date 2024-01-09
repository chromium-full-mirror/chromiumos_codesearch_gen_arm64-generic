// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/file_system_provider_internal.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_FILE_SYSTEM_PROVIDER_INTERNAL_H__
#define CHROME_COMMON_EXTENSIONS_API_FILE_SYSTEM_PROVIDER_INTERNAL_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "chrome/common/extensions/api/file_system_provider.h"


namespace extensions {
namespace api {
namespace file_system_provider_internal {

//
// Functions
//

namespace RespondToMountRequest {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int request_id;

  extensions::api::file_system_provider::ProviderError error;

  int execution_time;


 private:
  Params();
};

}  // namespace RespondToMountRequest

namespace UnmountRequestedSuccess {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string file_system_id;

  int request_id;

  int execution_time;


 private:
  Params();
};

}  // namespace UnmountRequestedSuccess

namespace GetMetadataRequestedSuccess {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string file_system_id;

  int request_id;

  extensions::api::file_system_provider::EntryMetadata metadata;

  int execution_time;


 private:
  Params();
};

}  // namespace GetMetadataRequestedSuccess

namespace GetActionsRequestedSuccess {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string file_system_id;

  int request_id;

  std::vector<extensions::api::file_system_provider::Action> actions;

  int execution_time;


 private:
  Params();
};

}  // namespace GetActionsRequestedSuccess

namespace ReadDirectoryRequestedSuccess {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string file_system_id;

  int request_id;

  std::vector<extensions::api::file_system_provider::EntryMetadata> entries;

  bool has_more;

  int execution_time;


 private:
  Params();
};

}  // namespace ReadDirectoryRequestedSuccess

namespace ReadFileRequestedSuccess {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string file_system_id;

  int request_id;

  std::vector<uint8_t> data;

  bool has_more;

  int execution_time;


 private:
  Params();
};

}  // namespace ReadFileRequestedSuccess

namespace OperationRequestedSuccess {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string file_system_id;

  int request_id;

  int execution_time;


 private:
  Params();
};

}  // namespace OperationRequestedSuccess

namespace OperationRequestedError {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string file_system_id;

  int request_id;

  extensions::api::file_system_provider::ProviderError error;

  int execution_time;


 private:
  Params();
};

}  // namespace OperationRequestedError

}  // namespace file_system_provider_internal
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_FILE_SYSTEM_PROVIDER_INTERNAL_H__
