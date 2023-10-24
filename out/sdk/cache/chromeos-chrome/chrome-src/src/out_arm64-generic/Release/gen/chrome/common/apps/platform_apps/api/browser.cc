// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/apps/platform_apps/api/browser.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/apps/platform_apps/api/browser.h"

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

namespace chrome_apps {
namespace api {
namespace browser {
//
// Types
//

OpenTabOptions::OpenTabOptions()
 {}

OpenTabOptions::~OpenTabOptions() = default;
OpenTabOptions::OpenTabOptions(OpenTabOptions&& rhs) = default;
OpenTabOptions& OpenTabOptions::operator=(OpenTabOptions&& rhs) = default;
OpenTabOptions OpenTabOptions::Clone() const {
  OpenTabOptions out;
  out.url = url;
  return out;
}

// static
bool OpenTabOptions::Populate(
    const base::Value::Dict& dict, OpenTabOptions& out) {
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

  return true;
}

// static
bool OpenTabOptions::Populate(
    const base::Value& value, OpenTabOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<OpenTabOptions> OpenTabOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<OpenTabOptions>();
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
absl::optional<OpenTabOptions> OpenTabOptions::FromValue(const base::Value::Dict& value) {
  OpenTabOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<OpenTabOptions> OpenTabOptions::FromValue(const base::Value& value) {
  OpenTabOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict OpenTabOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("url", this->url);


  return to_value_result;
}



//
// Functions
//

namespace OpenTab {

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
      if (!OpenTabOptions::Populate(options_value.GetDict(), params.options)) {
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
}  // namespace OpenTab

}  // namespace browser
}  // namespace api
}  // namespace chrome_apps

