// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/downloads_internal.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_DOWNLOADS_INTERNAL_H__
#define CHROME_COMMON_EXTENSIONS_API_DOWNLOADS_INTERNAL_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace downloads_internal {

//
// Functions
//

namespace DetermineFilename {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  int download_id;

  std::string filename;

  std::string conflict_action;


 private:
  Params();
};

}  // namespace DetermineFilename

}  // namespace downloads_internal
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_DOWNLOADS_INTERNAL_H__
