// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/login_screen_ui.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/login_screen_ui.h"

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
namespace login_screen_ui {
//
// Types
//

ShowOptions::ShowOptions()
 {}

ShowOptions::~ShowOptions() = default;
ShowOptions::ShowOptions(ShowOptions&& rhs) = default;
ShowOptions& ShowOptions::operator=(ShowOptions&& rhs) = default;
ShowOptions ShowOptions::Clone() const {
  ShowOptions out;
  out.url = url;
  out.user_can_close = user_can_close;
  return out;
}

// static
bool ShowOptions::Populate(
    const base::Value::Dict& dict, ShowOptions& out) {
  const base::Value* url_value = dict.Find("url");
  if (!url_value) {
    return false;
  }
  {
    auto* temp = (*url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.url = *temp;
  }

  const base::Value* user_can_close_value = dict.Find("userCanClose");
  if (user_can_close_value) {
    {
      auto temp = (*user_can_close_value).GetIfBool();
      if (!temp.has_value()) {
        out.user_can_close = absl::nullopt;
        return false;
      }
      out.user_can_close = *temp;
    }
  }

  return true;
}

// static
bool ShowOptions::Populate(
    const base::Value& value, ShowOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ShowOptions> ShowOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ShowOptions>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<ShowOptions> ShowOptions::FromValue(const base::Value::Dict& value) {
  ShowOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ShowOptions> ShowOptions::FromValue(const base::Value& value) {
  ShowOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ShowOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("url", this->url);

  if (this->user_can_close) {
    to_value_result.Set("userCanClose", *this->user_can_close);

  }

  return to_value_result;
}



//
// Functions
//

namespace Show {

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
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return absl::nullopt;
      }
      if (!ShowOptions::Populate(options_value.GetDict(), params.options)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace Show

namespace Close {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace Close

}  // namespace login_screen_ui
}  // namespace api
}  // namespace extensions

