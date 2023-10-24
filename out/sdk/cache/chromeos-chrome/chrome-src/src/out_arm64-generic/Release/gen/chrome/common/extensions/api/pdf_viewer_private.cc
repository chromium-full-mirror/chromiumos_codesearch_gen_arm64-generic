// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/pdf_viewer_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/pdf_viewer_private.h"

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
namespace pdf_viewer_private {
//
// Functions
//

namespace IsAllowedLocalFileAccess {

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
    const base::Value& url_value = args[0];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace IsAllowedLocalFileAccess

namespace IsPdfOcrAlwaysActive {

base::Value::List Results::Create(bool result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace IsPdfOcrAlwaysActive

namespace SetPdfOcrPref {

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
    const base::Value& value_value = args[0];
    {
      auto temp = value_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.value = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace SetPdfOcrPref

//
// Events
//

namespace OnPdfOcrPrefChanged {

const char kEventName[] = "pdfViewerPrivate.onPdfOcrPrefChanged";

base::Value::List Create(bool value) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(value);

  return create_results;
}

}  // namespace OnPdfOcrPrefChanged

}  // namespace pdf_viewer_private
}  // namespace api
}  // namespace extensions

