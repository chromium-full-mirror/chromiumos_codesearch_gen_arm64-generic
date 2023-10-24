// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/page_capture.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/page_capture.h"

#include <memory>
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
namespace page_capture {
//
// Functions
//

namespace SaveAsMHTML {

Params::Details::Details()
: tab_id(0) {}

Params::Details::~Details() = default;
Params::Details::Details(Details&& rhs) = default;
Params::Details& Params::Details::operator=(Details&& rhs) = default;
Params::Details Params::Details::Clone() const {
  Details out;
  out.tab_id = tab_id;
  return out;
}

// static
bool Params::Details::Populate(
    const base::Value::Dict& dict, Details& out) {
  const base::Value* tab_id_value = dict.Find("tabId");
  if (!tab_id_value) {
    return false;
  }
  {
    auto temp = (*tab_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.tab_id = *temp;
  }

  return true;
}

// static
bool Params::Details::Populate(
    const base::Value& value, Details& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Details::Populate(details_value.GetDict(), params.details)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<uint8_t>& mhtml_data) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value(mhtml_data));

  return create_results;
}
}  // namespace SaveAsMHTML

}  // namespace page_capture
}  // namespace api
}  // namespace extensions

