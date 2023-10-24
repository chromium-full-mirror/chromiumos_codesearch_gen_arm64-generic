// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/app_current_window_internal.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/app_current_window_internal.h"

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
namespace app_current_window_internal {
//
// Types
//

Bounds::Bounds()
 {}

Bounds::~Bounds() = default;
Bounds::Bounds(Bounds&& rhs) = default;
Bounds& Bounds::operator=(Bounds&& rhs) = default;
Bounds Bounds::Clone() const {
  Bounds out;
  out.left = left;
  out.top = top;
  out.width = width;
  out.height = height;
  return out;
}

// static
bool Bounds::Populate(
    const base::Value::Dict& dict, Bounds& out) {
  const base::Value* left_value = dict.Find("left");
  if (left_value) {
    {
      auto temp = (*left_value).GetIfInt();
      if (!temp.has_value()) {
        out.left = absl::nullopt;
        return false;
      }
      out.left = *temp;
    }
  }

  const base::Value* top_value = dict.Find("top");
  if (top_value) {
    {
      auto temp = (*top_value).GetIfInt();
      if (!temp.has_value()) {
        out.top = absl::nullopt;
        return false;
      }
      out.top = *temp;
    }
  }

  const base::Value* width_value = dict.Find("width");
  if (width_value) {
    {
      auto temp = (*width_value).GetIfInt();
      if (!temp.has_value()) {
        out.width = absl::nullopt;
        return false;
      }
      out.width = *temp;
    }
  }

  const base::Value* height_value = dict.Find("height");
  if (height_value) {
    {
      auto temp = (*height_value).GetIfInt();
      if (!temp.has_value()) {
        out.height = absl::nullopt;
        return false;
      }
      out.height = *temp;
    }
  }

  return true;
}

// static
bool Bounds::Populate(
    const base::Value& value, Bounds& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<Bounds> Bounds::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Bounds>();
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
absl::optional<Bounds> Bounds::FromValue(const base::Value::Dict& value) {
  Bounds out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Bounds> Bounds::FromValue(const base::Value& value) {
  Bounds out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict Bounds::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->left) {
    to_value_result.Set("left", *this->left);

  }
  if (this->top) {
    to_value_result.Set("top", *this->top);

  }
  if (this->width) {
    to_value_result.Set("width", *this->width);

  }
  if (this->height) {
    to_value_result.Set("height", *this->height);

  }

  return to_value_result;
}


SizeConstraints::SizeConstraints()
 {}

SizeConstraints::~SizeConstraints() = default;
SizeConstraints::SizeConstraints(SizeConstraints&& rhs) = default;
SizeConstraints& SizeConstraints::operator=(SizeConstraints&& rhs) = default;
SizeConstraints SizeConstraints::Clone() const {
  SizeConstraints out;
  out.min_width = min_width;
  out.min_height = min_height;
  out.max_width = max_width;
  out.max_height = max_height;
  return out;
}

// static
bool SizeConstraints::Populate(
    const base::Value::Dict& dict, SizeConstraints& out) {
  const base::Value* min_width_value = dict.Find("minWidth");
  if (min_width_value) {
    {
      auto temp = (*min_width_value).GetIfInt();
      if (!temp.has_value()) {
        out.min_width = absl::nullopt;
        return false;
      }
      out.min_width = *temp;
    }
  }

  const base::Value* min_height_value = dict.Find("minHeight");
  if (min_height_value) {
    {
      auto temp = (*min_height_value).GetIfInt();
      if (!temp.has_value()) {
        out.min_height = absl::nullopt;
        return false;
      }
      out.min_height = *temp;
    }
  }

  const base::Value* max_width_value = dict.Find("maxWidth");
  if (max_width_value) {
    {
      auto temp = (*max_width_value).GetIfInt();
      if (!temp.has_value()) {
        out.max_width = absl::nullopt;
        return false;
      }
      out.max_width = *temp;
    }
  }

  const base::Value* max_height_value = dict.Find("maxHeight");
  if (max_height_value) {
    {
      auto temp = (*max_height_value).GetIfInt();
      if (!temp.has_value()) {
        out.max_height = absl::nullopt;
        return false;
      }
      out.max_height = *temp;
    }
  }

  return true;
}

// static
bool SizeConstraints::Populate(
    const base::Value& value, SizeConstraints& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<SizeConstraints> SizeConstraints::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<SizeConstraints>();
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
absl::optional<SizeConstraints> SizeConstraints::FromValue(const base::Value::Dict& value) {
  SizeConstraints out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<SizeConstraints> SizeConstraints::FromValue(const base::Value& value) {
  SizeConstraints out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict SizeConstraints::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->min_width) {
    to_value_result.Set("minWidth", *this->min_width);

  }
  if (this->min_height) {
    to_value_result.Set("minHeight", *this->min_height);

  }
  if (this->max_width) {
    to_value_result.Set("maxWidth", *this->max_width);

  }
  if (this->max_height) {
    to_value_result.Set("maxHeight", *this->max_height);

  }

  return to_value_result;
}


RegionRect::RegionRect()
: left(0),
top(0),
width(0),
height(0) {}

RegionRect::~RegionRect() = default;
RegionRect::RegionRect(RegionRect&& rhs) = default;
RegionRect& RegionRect::operator=(RegionRect&& rhs) = default;
RegionRect RegionRect::Clone() const {
  RegionRect out;
  out.left = left;
  out.top = top;
  out.width = width;
  out.height = height;
  return out;
}

// static
bool RegionRect::Populate(
    const base::Value::Dict& dict, RegionRect& out) {
  const base::Value* left_value = dict.Find("left");
  if (!left_value) {
    return false;
  }
  {
    auto temp = (*left_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.left = *temp;
  }

  const base::Value* top_value = dict.Find("top");
  if (!top_value) {
    return false;
  }
  {
    auto temp = (*top_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.top = *temp;
  }

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
bool RegionRect::Populate(
    const base::Value& value, RegionRect& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<RegionRect> RegionRect::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<RegionRect>();
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
absl::optional<RegionRect> RegionRect::FromValue(const base::Value::Dict& value) {
  RegionRect out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<RegionRect> RegionRect::FromValue(const base::Value& value) {
  RegionRect out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict RegionRect::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("left", this->left);

  to_value_result.Set("top", this->top);

  to_value_result.Set("width", this->width);

  to_value_result.Set("height", this->height);


  return to_value_result;
}


Region::Region()
 {}

Region::~Region() = default;
Region::Region(Region&& rhs) = default;
Region& Region::operator=(Region&& rhs) = default;
Region Region::Clone() const {
  Region out;
  if (rects) {
    out.rects.emplace();
    out.rects->reserve(rects->size());
    for (const auto& element : *rects) {
      json_schema_compiler::util::AppendToContainer(*out.rects, element.Clone());
    }
  }
  return out;
}

// static
bool Region::Populate(
    const base::Value::Dict& dict, Region& out) {
  const base::Value* rects_value = dict.Find("rects");
  if (rects_value) {
    {
      if (!(*rects_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*rects_value).GetList(), out.rects)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool Region::Populate(
    const base::Value& value, Region& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<Region> Region::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Region>();
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
absl::optional<Region> Region::FromValue(const base::Value::Dict& value) {
  Region out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Region> Region::FromValue(const base::Value& value) {
  Region out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict Region::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->rects) {
    to_value_result.Set("rects", json_schema_compiler::util::CreateValueFromArray(*this->rects));

  }

  return to_value_result;
}



//
// Functions
//

namespace Focus {

}  // namespace Focus

namespace Fullscreen {

}  // namespace Fullscreen

namespace Minimize {

}  // namespace Minimize

namespace Maximize {

}  // namespace Maximize

namespace Restore {

}  // namespace Restore

namespace DrawAttention {

}  // namespace DrawAttention

namespace ClearAttention {

}  // namespace ClearAttention

namespace Show {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& focused_value = args[0];
    {
      auto temp = focused_value.GetIfBool();
      if (!temp.has_value()) {
        params.focused = absl::nullopt;
        return absl::nullopt;
      }
      params.focused = *temp;
    }
  }

  return params;
}


}  // namespace Show

namespace Hide {

}  // namespace Hide

namespace SetBounds {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& bounds_type_value = args[0];
    {
      auto* temp = bounds_type_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.bounds_type = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& bounds_value = args[1];
    {
      if (!bounds_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Bounds::Populate(bounds_value.GetDict(), params.bounds)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SetBounds

namespace SetSizeConstraints {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& bounds_type_value = args[0];
    {
      auto* temp = bounds_type_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.bounds_type = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& constraints_value = args[1];
    {
      if (!constraints_value.is_dict()) {
        return absl::nullopt;
      }
      if (!SizeConstraints::Populate(constraints_value.GetDict(), params.constraints)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SetSizeConstraints

namespace SetIcon {

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
    const base::Value& icon_url_value = args[0];
    {
      auto* temp = icon_url_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.icon_url = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SetIcon

namespace SetShape {

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
    const base::Value& region_value = args[0];
    {
      if (!region_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Region::Populate(region_value.GetDict(), params.region)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SetShape

namespace SetAlwaysOnTop {

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
    const base::Value& always_on_top_value = args[0];
    {
      auto temp = always_on_top_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.always_on_top = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SetAlwaysOnTop

namespace SetVisibleOnAllWorkspaces {

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
    const base::Value& always_visible_value = args[0];
    {
      auto temp = always_visible_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.always_visible = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SetVisibleOnAllWorkspaces

namespace SetActivateOnPointer {

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
    const base::Value& activate_on_pointer_value = args[0];
    {
      auto temp = activate_on_pointer_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.activate_on_pointer = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SetActivateOnPointer

//
// Events
//

namespace OnClosed {

const char kEventName[] = "app.currentWindowInternal.onClosed";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnClosed

namespace OnBoundsChanged {

const char kEventName[] = "app.currentWindowInternal.onBoundsChanged";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnBoundsChanged

namespace OnFullscreened {

const char kEventName[] = "app.currentWindowInternal.onFullscreened";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnFullscreened

namespace OnMinimized {

const char kEventName[] = "app.currentWindowInternal.onMinimized";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnMinimized

namespace OnMaximized {

const char kEventName[] = "app.currentWindowInternal.onMaximized";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnMaximized

namespace OnRestored {

const char kEventName[] = "app.currentWindowInternal.onRestored";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnRestored

namespace OnAlphaEnabledChanged {

const char kEventName[] = "app.currentWindowInternal.onAlphaEnabledChanged";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnAlphaEnabledChanged

}  // namespace app_current_window_internal
}  // namespace api
}  // namespace extensions

