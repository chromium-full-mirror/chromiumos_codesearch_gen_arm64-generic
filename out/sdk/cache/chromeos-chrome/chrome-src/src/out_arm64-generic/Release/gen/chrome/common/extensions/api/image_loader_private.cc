// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/image_loader_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/image_loader_private.h"

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
namespace image_loader_private {
//
// Functions
//

namespace GetDriveThumbnail {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& url_value = args[0];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& crop_to_square_value = args[1];
    {
      auto temp = crop_to_square_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.crop_to_square = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& thumbnail_data_url) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(thumbnail_data_url);

  return create_results;
}
}  // namespace GetDriveThumbnail

namespace GetPdfThumbnail {

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
    const base::Value& url_value = args[0];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& width_value = args[1];
    {
      auto temp = width_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.width = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& height_value = args[2];
    {
      auto temp = height_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.height = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& thumbnail_data_url) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(thumbnail_data_url);

  return create_results;
}
}  // namespace GetPdfThumbnail

namespace GetArcDocumentsProviderThumbnail {

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
    const base::Value& url_value = args[0];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& width_hint_value = args[1];
    {
      auto temp = width_hint_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.width_hint = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& height_hint_value = args[2];
    {
      auto temp = height_hint_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.height_hint = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& thumbnail_data_url) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(thumbnail_data_url);

  return create_results;
}
}  // namespace GetArcDocumentsProviderThumbnail

}  // namespace image_loader_private
}  // namespace api
}  // namespace extensions

