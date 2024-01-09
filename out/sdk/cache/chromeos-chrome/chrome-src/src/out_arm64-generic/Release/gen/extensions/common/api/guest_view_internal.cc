// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/guest_view_internal.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/guest_view_internal.h"

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
namespace guest_view_internal {
//
// Types
//

Size::Size()
: width(0),
height(0) {}

Size::~Size() = default;
Size::Size(Size&& rhs) noexcept = default;
Size& Size::operator=(Size&& rhs) noexcept = default;
Size Size::Clone() const {
  Size out;
  out.width = width;
  out.height = height;
  return out;
}

// static
bool Size::Populate(
    const base::Value::Dict& dict, Size& out) {
  const base::Value* width_value = dict.Find("width");
  if (!width_value) {
    return false;
  }
  {
    auto temp = (*width_value).GetIfInt();
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
    auto temp = (*height_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.height = *temp;
  }

  return true;
}

// static
bool Size::Populate(
    const base::Value& value, Size& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Size> Size::FromValue(const base::Value::Dict& value) {
  Size out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Size> Size::FromValue(const base::Value& value) {
  Size out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Size::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("width", this->width);

  to_value_result.Set("height", this->height);


  return to_value_result;
}


SizeParams::SizeParams()
 {}

SizeParams::~SizeParams() = default;
SizeParams::SizeParams(SizeParams&& rhs) noexcept = default;
SizeParams& SizeParams::operator=(SizeParams&& rhs) noexcept = default;
SizeParams SizeParams::Clone() const {
  SizeParams out;
  out.enable_auto_size = enable_auto_size;
  if (min) {
    out.min = min->Clone();
  }
  if (max) {
    out.max = max->Clone();
  }
  if (normal) {
    out.normal = normal->Clone();
  }
  return out;
}

// static
bool SizeParams::Populate(
    const base::Value::Dict& dict, SizeParams& out) {
  const base::Value* enable_auto_size_value = dict.Find("enableAutoSize");
  if (enable_auto_size_value) {
    {
      auto temp = (*enable_auto_size_value).GetIfBool();
      if (!temp.has_value()) {
        out.enable_auto_size = std::nullopt;
        return false;
      }
      out.enable_auto_size = *temp;
    }
  }

  const base::Value* min_value = dict.Find("min");
  if (min_value) {
    {
      if (!(*min_value).is_dict()) {
        return false;
      }
      else {
        Size temp;
        if (!Size::Populate((*min_value).GetDict(), temp))
          return false;
        out.min = std::move(temp);
      }
    }
  }

  const base::Value* max_value = dict.Find("max");
  if (max_value) {
    {
      if (!(*max_value).is_dict()) {
        return false;
      }
      else {
        Size temp;
        if (!Size::Populate((*max_value).GetDict(), temp))
          return false;
        out.max = std::move(temp);
      }
    }
  }

  const base::Value* normal_value = dict.Find("normal");
  if (normal_value) {
    {
      if (!(*normal_value).is_dict()) {
        return false;
      }
      else {
        Size temp;
        if (!Size::Populate((*normal_value).GetDict(), temp))
          return false;
        out.normal = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool SizeParams::Populate(
    const base::Value& value, SizeParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SizeParams> SizeParams::FromValue(const base::Value::Dict& value) {
  SizeParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SizeParams> SizeParams::FromValue(const base::Value& value) {
  SizeParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SizeParams::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->enable_auto_size) {
    to_value_result.Set("enableAutoSize", *this->enable_auto_size);

  }
  if (this->min) {
    to_value_result.Set("min", (this->min)->ToValue());

  }
  if (this->max) {
    to_value_result.Set("max", (this->max)->ToValue());

  }
  if (this->normal) {
    to_value_result.Set("normal", (this->normal)->ToValue());

  }

  return to_value_result;
}



//
// Functions
//

namespace CreateGuest {

Params::CreateParams::CreateParams()
 {}

Params::CreateParams::~CreateParams() = default;
Params::CreateParams::CreateParams(CreateParams&& rhs) noexcept = default;
Params::CreateParams& Params::CreateParams::operator=(CreateParams&& rhs) noexcept = default;
Params::CreateParams Params::CreateParams::Clone() const {
  CreateParams out;
  return out;
}

// static
bool Params::CreateParams::Populate(
    const base::Value::Dict& dict, CreateParams& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool Params::CreateParams::Populate(
    const base::Value& value, CreateParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::CreateParams> Params::CreateParams::FromValue(const base::Value::Dict& value) {
  CreateParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::CreateParams> Params::CreateParams::FromValue(const base::Value& value) {
  CreateParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


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
    const base::Value& view_type_value = args[0];
    {
      auto* temp = view_type_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.view_type = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& owner_frame_token_value = args[1];
    {
      auto* temp = owner_frame_token_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.owner_frame_token = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& create_params_value = args[2];
    {
      if (!create_params_value.is_dict()) {
        return std::nullopt;
      }
      if (!CreateParams::Populate(create_params_value.GetDict(), params.create_params)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(int instance_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(instance_id);

  return create_results;
}
}  // namespace CreateGuest

namespace DestroyUnattachedGuest {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace DestroyUnattachedGuest

namespace SetSize {

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
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& params_value = args[1];
    {
      if (!params_value.is_dict()) {
        return std::nullopt;
      }
      if (!SizeParams::Populate(params_value.GetDict(), params.params)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetSize

}  // namespace guest_view_internal
}  // namespace api
}  // namespace extensions

