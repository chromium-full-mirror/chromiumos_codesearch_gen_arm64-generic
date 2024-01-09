// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/app_view_guest_internal.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_APP_VIEW_GUEST_INTERNAL_H__
#define EXTENSIONS_COMMON_API_APP_VIEW_GUEST_INTERNAL_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace app_view_guest_internal {

//
// Functions
//

namespace AttachFrame {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string url;

  int guest_instance_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(int instance_id);
}  // namespace Results

}  // namespace AttachFrame

namespace DenyRequest {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int guest_instance_id;


 private:
  Params();
};

}  // namespace DenyRequest

}  // namespace app_view_guest_internal
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_APP_VIEW_GUEST_INTERNAL_H__
