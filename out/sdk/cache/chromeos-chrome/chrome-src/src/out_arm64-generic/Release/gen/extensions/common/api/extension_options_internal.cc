// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/extension_options_internal.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/extension_options_internal.h"

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
namespace extension_options_internal {
//
// Types
//

SizeChangedOptions::SizeChangedOptions()
: old_width(0),
old_height(0),
new_width(0),
new_height(0) {}

SizeChangedOptions::~SizeChangedOptions() = default;
SizeChangedOptions::SizeChangedOptions(SizeChangedOptions&& rhs) noexcept = default;
SizeChangedOptions& SizeChangedOptions::operator=(SizeChangedOptions&& rhs) noexcept = default;
SizeChangedOptions SizeChangedOptions::Clone() const {
  SizeChangedOptions out;
  out.old_width = old_width;
  out.old_height = old_height;
  out.new_width = new_width;
  out.new_height = new_height;
  return out;
}

// static
bool SizeChangedOptions::Populate(
    const base::Value::Dict& dict, SizeChangedOptions& out) {
  const base::Value* old_width_value = dict.Find("oldWidth");
  if (!old_width_value) {
    return false;
  }
  {
    auto temp = (*old_width_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.old_width = *temp;
  }

  const base::Value* old_height_value = dict.Find("oldHeight");
  if (!old_height_value) {
    return false;
  }
  {
    auto temp = (*old_height_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.old_height = *temp;
  }

  const base::Value* new_width_value = dict.Find("newWidth");
  if (!new_width_value) {
    return false;
  }
  {
    auto temp = (*new_width_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.new_width = *temp;
  }

  const base::Value* new_height_value = dict.Find("newHeight");
  if (!new_height_value) {
    return false;
  }
  {
    auto temp = (*new_height_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.new_height = *temp;
  }

  return true;
}

// static
bool SizeChangedOptions::Populate(
    const base::Value& value, SizeChangedOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SizeChangedOptions> SizeChangedOptions::FromValue(const base::Value::Dict& value) {
  SizeChangedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SizeChangedOptions> SizeChangedOptions::FromValue(const base::Value& value) {
  SizeChangedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SizeChangedOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("oldWidth", this->old_width);

  to_value_result.Set("oldHeight", this->old_height);

  to_value_result.Set("newWidth", this->new_width);

  to_value_result.Set("newHeight", this->new_height);


  return to_value_result;
}


PreferredSizeChangedOptions::PreferredSizeChangedOptions()
: width(0.0),
height(0.0) {}

PreferredSizeChangedOptions::~PreferredSizeChangedOptions() = default;
PreferredSizeChangedOptions::PreferredSizeChangedOptions(PreferredSizeChangedOptions&& rhs) noexcept = default;
PreferredSizeChangedOptions& PreferredSizeChangedOptions::operator=(PreferredSizeChangedOptions&& rhs) noexcept = default;
PreferredSizeChangedOptions PreferredSizeChangedOptions::Clone() const {
  PreferredSizeChangedOptions out;
  out.width = width;
  out.height = height;
  return out;
}

// static
bool PreferredSizeChangedOptions::Populate(
    const base::Value::Dict& dict, PreferredSizeChangedOptions& out) {
  const base::Value* width_value = dict.Find("width");
  if (!width_value) {
    return false;
  }
  {
    auto temp = (*width_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.width = *temp;
  }

  const base::Value* height_value = dict.Find("height");
  if (!height_value) {
    return false;
  }
  {
    auto temp = (*height_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.height = *temp;
  }

  return true;
}

// static
bool PreferredSizeChangedOptions::Populate(
    const base::Value& value, PreferredSizeChangedOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PreferredSizeChangedOptions> PreferredSizeChangedOptions::FromValue(const base::Value::Dict& value) {
  PreferredSizeChangedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PreferredSizeChangedOptions> PreferredSizeChangedOptions::FromValue(const base::Value& value) {
  PreferredSizeChangedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict PreferredSizeChangedOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("width", this->width);

  to_value_result.Set("height", this->height);


  return to_value_result;
}



//
// Events
//

namespace OnClose {

const char kEventName[] = "extensionOptionsInternal.onClose";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnClose

namespace OnLoad {

const char kEventName[] = "extensionOptionsInternal.onLoad";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnLoad

namespace OnPreferredSizeChanged {

const char kEventName[] = "extensionOptionsInternal.onPreferredSizeChanged";

base::Value::List Create(const PreferredSizeChangedOptions& options) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((options).ToValue());

  return create_results;
}

}  // namespace OnPreferredSizeChanged

}  // namespace extension_options_internal
}  // namespace api
}  // namespace extensions

