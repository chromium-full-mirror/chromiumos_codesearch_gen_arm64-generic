// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/i18n.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/i18n.h"

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

using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace i18n {
//
// Types
//

//
// Functions
//

namespace GetAcceptLanguages {

base::Value::List Results::Create(const std::vector<std::string>& languages) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(languages));

  return create_results;
}
}  // namespace GetAcceptLanguages

}  // namespace i18n
}  // namespace api
}  // namespace extensions

