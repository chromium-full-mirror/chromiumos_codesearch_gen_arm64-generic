// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/system_display.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/system_display.h"

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
#include "base/strings/string_piece.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace system_display {
//
// Types
//

Bounds::Bounds()
: left(0),
top(0),
width(0),
height(0) {}

Bounds::~Bounds() = default;
Bounds::Bounds(Bounds&& rhs) noexcept = default;
Bounds& Bounds::operator=(Bounds&& rhs) noexcept = default;
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
bool Bounds::Populate(
    const base::Value& value, Bounds& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Bounds> Bounds::FromValue(const base::Value::Dict& value) {
  Bounds out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Bounds> Bounds::FromValue(const base::Value& value) {
  Bounds out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Bounds::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("left", this->left);

  to_value_result.Set("top", this->top);

  to_value_result.Set("width", this->width);

  to_value_result.Set("height", this->height);


  return to_value_result;
}


Insets::Insets()
: left(0),
top(0),
right(0),
bottom(0) {}

Insets::~Insets() = default;
Insets::Insets(Insets&& rhs) noexcept = default;
Insets& Insets::operator=(Insets&& rhs) noexcept = default;
Insets Insets::Clone() const {
  Insets out;
  out.left = left;
  out.top = top;
  out.right = right;
  out.bottom = bottom;
  return out;
}

// static
bool Insets::Populate(
    const base::Value::Dict& dict, Insets& out) {
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

  const base::Value* right_value = dict.Find("right");
  if (!right_value) {
    return false;
  }
  {
    auto temp = (*right_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.right = *temp;
  }

  const base::Value* bottom_value = dict.Find("bottom");
  if (!bottom_value) {
    return false;
  }
  {
    auto temp = (*bottom_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.bottom = *temp;
  }

  return true;
}

// static
bool Insets::Populate(
    const base::Value& value, Insets& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Insets> Insets::FromValue(const base::Value::Dict& value) {
  Insets out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Insets> Insets::FromValue(const base::Value& value) {
  Insets out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Insets::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("left", this->left);

  to_value_result.Set("top", this->top);

  to_value_result.Set("right", this->right);

  to_value_result.Set("bottom", this->bottom);


  return to_value_result;
}


Point::Point()
: x(0),
y(0) {}

Point::~Point() = default;
Point::Point(Point&& rhs) noexcept = default;
Point& Point::operator=(Point&& rhs) noexcept = default;
Point Point::Clone() const {
  Point out;
  out.x = x;
  out.y = y;
  return out;
}

// static
bool Point::Populate(
    const base::Value::Dict& dict, Point& out) {
  const base::Value* x_value = dict.Find("x");
  if (!x_value) {
    return false;
  }
  {
    auto temp = (*x_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.x = *temp;
  }

  const base::Value* y_value = dict.Find("y");
  if (!y_value) {
    return false;
  }
  {
    auto temp = (*y_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.y = *temp;
  }

  return true;
}

// static
bool Point::Populate(
    const base::Value& value, Point& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Point> Point::FromValue(const base::Value::Dict& value) {
  Point out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Point> Point::FromValue(const base::Value& value) {
  Point out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Point::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("x", this->x);

  to_value_result.Set("y", this->y);


  return to_value_result;
}


TouchCalibrationPair::TouchCalibrationPair()
 {}

TouchCalibrationPair::~TouchCalibrationPair() = default;
TouchCalibrationPair::TouchCalibrationPair(TouchCalibrationPair&& rhs) noexcept = default;
TouchCalibrationPair& TouchCalibrationPair::operator=(TouchCalibrationPair&& rhs) noexcept = default;
TouchCalibrationPair TouchCalibrationPair::Clone() const {
  TouchCalibrationPair out;
  out.display_point = display_point.Clone();
  out.touch_point = touch_point.Clone();
  return out;
}

// static
bool TouchCalibrationPair::Populate(
    const base::Value::Dict& dict, TouchCalibrationPair& out) {
  const base::Value* display_point_value = dict.Find("displayPoint");
  if (!display_point_value) {
    return false;
  }
  {
    if (!(*display_point_value).is_dict()) {
      return false;
    }
    if (!Point::Populate((*display_point_value).GetDict(), out.display_point)) {
      return false;
    }
  }

  const base::Value* touch_point_value = dict.Find("touchPoint");
  if (!touch_point_value) {
    return false;
  }
  {
    if (!(*touch_point_value).is_dict()) {
      return false;
    }
    if (!Point::Populate((*touch_point_value).GetDict(), out.touch_point)) {
      return false;
    }
  }

  return true;
}

// static
bool TouchCalibrationPair::Populate(
    const base::Value& value, TouchCalibrationPair& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<TouchCalibrationPair> TouchCalibrationPair::FromValue(const base::Value::Dict& value) {
  TouchCalibrationPair out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<TouchCalibrationPair> TouchCalibrationPair::FromValue(const base::Value& value) {
  TouchCalibrationPair out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict TouchCalibrationPair::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("displayPoint", (this->display_point).ToValue());

  to_value_result.Set("touchPoint", (this->touch_point).ToValue());


  return to_value_result;
}


TouchCalibrationPairQuad::TouchCalibrationPairQuad()
 {}

TouchCalibrationPairQuad::~TouchCalibrationPairQuad() = default;
TouchCalibrationPairQuad::TouchCalibrationPairQuad(TouchCalibrationPairQuad&& rhs) noexcept = default;
TouchCalibrationPairQuad& TouchCalibrationPairQuad::operator=(TouchCalibrationPairQuad&& rhs) noexcept = default;
TouchCalibrationPairQuad TouchCalibrationPairQuad::Clone() const {
  TouchCalibrationPairQuad out;
  out.pair1 = pair1.Clone();
  out.pair2 = pair2.Clone();
  out.pair3 = pair3.Clone();
  out.pair4 = pair4.Clone();
  return out;
}

// static
bool TouchCalibrationPairQuad::Populate(
    const base::Value::Dict& dict, TouchCalibrationPairQuad& out) {
  const base::Value* pair1_value = dict.Find("pair1");
  if (!pair1_value) {
    return false;
  }
  {
    if (!(*pair1_value).is_dict()) {
      return false;
    }
    if (!TouchCalibrationPair::Populate((*pair1_value).GetDict(), out.pair1)) {
      return false;
    }
  }

  const base::Value* pair2_value = dict.Find("pair2");
  if (!pair2_value) {
    return false;
  }
  {
    if (!(*pair2_value).is_dict()) {
      return false;
    }
    if (!TouchCalibrationPair::Populate((*pair2_value).GetDict(), out.pair2)) {
      return false;
    }
  }

  const base::Value* pair3_value = dict.Find("pair3");
  if (!pair3_value) {
    return false;
  }
  {
    if (!(*pair3_value).is_dict()) {
      return false;
    }
    if (!TouchCalibrationPair::Populate((*pair3_value).GetDict(), out.pair3)) {
      return false;
    }
  }

  const base::Value* pair4_value = dict.Find("pair4");
  if (!pair4_value) {
    return false;
  }
  {
    if (!(*pair4_value).is_dict()) {
      return false;
    }
    if (!TouchCalibrationPair::Populate((*pair4_value).GetDict(), out.pair4)) {
      return false;
    }
  }

  return true;
}

// static
bool TouchCalibrationPairQuad::Populate(
    const base::Value& value, TouchCalibrationPairQuad& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<TouchCalibrationPairQuad> TouchCalibrationPairQuad::FromValue(const base::Value::Dict& value) {
  TouchCalibrationPairQuad out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<TouchCalibrationPairQuad> TouchCalibrationPairQuad::FromValue(const base::Value& value) {
  TouchCalibrationPairQuad out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict TouchCalibrationPairQuad::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("pair1", (this->pair1).ToValue());

  to_value_result.Set("pair2", (this->pair2).ToValue());

  to_value_result.Set("pair3", (this->pair3).ToValue());

  to_value_result.Set("pair4", (this->pair4).ToValue());


  return to_value_result;
}


DisplayMode::DisplayMode()
: width(0),
height(0),
width_in_native_pixels(0),
height_in_native_pixels(0),
device_scale_factor(0.0),
refresh_rate(0.0),
is_native(false),
is_selected(false) {}

DisplayMode::~DisplayMode() = default;
DisplayMode::DisplayMode(DisplayMode&& rhs) noexcept = default;
DisplayMode& DisplayMode::operator=(DisplayMode&& rhs) noexcept = default;
DisplayMode DisplayMode::Clone() const {
  DisplayMode out;
  out.width = width;
  out.height = height;
  out.width_in_native_pixels = width_in_native_pixels;
  out.height_in_native_pixels = height_in_native_pixels;
  out.ui_scale = ui_scale;
  out.device_scale_factor = device_scale_factor;
  out.refresh_rate = refresh_rate;
  out.is_native = is_native;
  out.is_selected = is_selected;
  out.is_interlaced = is_interlaced;
  return out;
}

// static
bool DisplayMode::Populate(
    const base::Value::Dict& dict, DisplayMode& out) {
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

  const base::Value* width_in_native_pixels_value = dict.Find("widthInNativePixels");
  if (!width_in_native_pixels_value) {
    return false;
  }
  {
    auto temp = (*width_in_native_pixels_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.width_in_native_pixels = *temp;
  }

  const base::Value* height_in_native_pixels_value = dict.Find("heightInNativePixels");
  if (!height_in_native_pixels_value) {
    return false;
  }
  {
    auto temp = (*height_in_native_pixels_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.height_in_native_pixels = *temp;
  }

  const base::Value* ui_scale_value = dict.Find("uiScale");
  if (ui_scale_value) {
    {
      auto temp = (*ui_scale_value).GetIfDouble();
      if (!temp.has_value()) {
        out.ui_scale = std::nullopt;
        return false;
      }
      out.ui_scale = *temp;
    }
  }

  const base::Value* device_scale_factor_value = dict.Find("deviceScaleFactor");
  if (!device_scale_factor_value) {
    return false;
  }
  {
    auto temp = (*device_scale_factor_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.device_scale_factor = *temp;
  }

  const base::Value* refresh_rate_value = dict.Find("refreshRate");
  if (!refresh_rate_value) {
    return false;
  }
  {
    auto temp = (*refresh_rate_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.refresh_rate = *temp;
  }

  const base::Value* is_native_value = dict.Find("isNative");
  if (!is_native_value) {
    return false;
  }
  {
    auto temp = (*is_native_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_native = *temp;
  }

  const base::Value* is_selected_value = dict.Find("isSelected");
  if (!is_selected_value) {
    return false;
  }
  {
    auto temp = (*is_selected_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_selected = *temp;
  }

  const base::Value* is_interlaced_value = dict.Find("isInterlaced");
  if (is_interlaced_value) {
    {
      auto temp = (*is_interlaced_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_interlaced = std::nullopt;
        return false;
      }
      out.is_interlaced = *temp;
    }
  }

  return true;
}

// static
bool DisplayMode::Populate(
    const base::Value& value, DisplayMode& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DisplayMode> DisplayMode::FromValue(const base::Value::Dict& value) {
  DisplayMode out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DisplayMode> DisplayMode::FromValue(const base::Value& value) {
  DisplayMode out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DisplayMode::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("width", this->width);

  to_value_result.Set("height", this->height);

  to_value_result.Set("widthInNativePixels", this->width_in_native_pixels);

  to_value_result.Set("heightInNativePixels", this->height_in_native_pixels);

  if (this->ui_scale) {
    to_value_result.Set("uiScale", *this->ui_scale);

  }
  to_value_result.Set("deviceScaleFactor", this->device_scale_factor);

  to_value_result.Set("refreshRate", this->refresh_rate);

  to_value_result.Set("isNative", this->is_native);

  to_value_result.Set("isSelected", this->is_selected);

  if (this->is_interlaced) {
    to_value_result.Set("isInterlaced", *this->is_interlaced);

  }

  return to_value_result;
}


const char* ToString(LayoutPosition enum_param) {
  switch (enum_param) {
    case LayoutPosition::kTop:
      return "top";
    case LayoutPosition::kRight:
      return "right";
    case LayoutPosition::kBottom:
      return "bottom";
    case LayoutPosition::kLeft:
      return "left";
    case LayoutPosition::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

LayoutPosition ParseLayoutPosition(base::StringPiece enum_string) {
  if (enum_string == "top")
    return LayoutPosition::kTop;
  if (enum_string == "right")
    return LayoutPosition::kRight;
  if (enum_string == "bottom")
    return LayoutPosition::kBottom;
  if (enum_string == "left")
    return LayoutPosition::kLeft;
  return LayoutPosition::kNone;
}

std::u16string GetLayoutPositionParseError(base::StringPiece enum_string) {
  return u"expected \"top\" or \"right\" or \"bottom\" or \"left\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


DisplayLayout::DisplayLayout()
: position(),
offset(0) {}

DisplayLayout::~DisplayLayout() = default;
DisplayLayout::DisplayLayout(DisplayLayout&& rhs) noexcept = default;
DisplayLayout& DisplayLayout::operator=(DisplayLayout&& rhs) noexcept = default;
DisplayLayout DisplayLayout::Clone() const {
  DisplayLayout out;
  out.id = id;
  out.parent_id = parent_id;
  out.position = position;
  out.offset = offset;
  return out;
}

// static
bool DisplayLayout::Populate(
    const base::Value::Dict& dict, DisplayLayout& out) {
  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto* temp = (*id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* parent_id_value = dict.Find("parentId");
  if (!parent_id_value) {
    return false;
  }
  {
    auto* temp = (*parent_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.parent_id = *temp;
  }

  const base::Value* position_value = dict.Find("position");
  if (!position_value) {
    return false;
  }
  {
    const std::string* layout_position_as_string = (*position_value).GetIfString();
    if (!layout_position_as_string) {
      return false;
    }
    out.position = ParseLayoutPosition(*layout_position_as_string);
    if (out.position == LayoutPosition()) {
      return false;
    }
  }

  const base::Value* offset_value = dict.Find("offset");
  if (!offset_value) {
    return false;
  }
  {
    auto temp = (*offset_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.offset = *temp;
  }

  return true;
}

// static
bool DisplayLayout::Populate(
    const base::Value& value, DisplayLayout& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DisplayLayout> DisplayLayout::FromValue(const base::Value::Dict& value) {
  DisplayLayout out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DisplayLayout> DisplayLayout::FromValue(const base::Value& value) {
  DisplayLayout out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DisplayLayout::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("parentId", this->parent_id);

  to_value_result.Set("position", system_display::ToString(this->position));

  to_value_result.Set("offset", this->offset);


  return to_value_result;
}


Edid::Edid()
: year_of_manufacture(0) {}

Edid::~Edid() = default;
Edid::Edid(Edid&& rhs) noexcept = default;
Edid& Edid::operator=(Edid&& rhs) noexcept = default;
Edid Edid::Clone() const {
  Edid out;
  out.manufacturer_id = manufacturer_id;
  out.product_id = product_id;
  out.year_of_manufacture = year_of_manufacture;
  return out;
}

// static
bool Edid::Populate(
    const base::Value::Dict& dict, Edid& out) {
  const base::Value* manufacturer_id_value = dict.Find("manufacturerId");
  if (!manufacturer_id_value) {
    return false;
  }
  {
    auto* temp = (*manufacturer_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.manufacturer_id = *temp;
  }

  const base::Value* product_id_value = dict.Find("productId");
  if (!product_id_value) {
    return false;
  }
  {
    auto* temp = (*product_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.product_id = *temp;
  }

  const base::Value* year_of_manufacture_value = dict.Find("yearOfManufacture");
  if (!year_of_manufacture_value) {
    return false;
  }
  {
    auto temp = (*year_of_manufacture_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.year_of_manufacture = *temp;
  }

  return true;
}

// static
bool Edid::Populate(
    const base::Value& value, Edid& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Edid> Edid::FromValue(const base::Value::Dict& value) {
  Edid out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Edid> Edid::FromValue(const base::Value& value) {
  Edid out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Edid::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("manufacturerId", this->manufacturer_id);

  to_value_result.Set("productId", this->product_id);

  to_value_result.Set("yearOfManufacture", this->year_of_manufacture);


  return to_value_result;
}


const char* ToString(ActiveState enum_param) {
  switch (enum_param) {
    case ActiveState::kActive:
      return "active";
    case ActiveState::kInactive:
      return "inactive";
    case ActiveState::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ActiveState ParseActiveState(base::StringPiece enum_string) {
  if (enum_string == "active")
    return ActiveState::kActive;
  if (enum_string == "inactive")
    return ActiveState::kInactive;
  return ActiveState::kNone;
}

std::u16string GetActiveStateParseError(base::StringPiece enum_string) {
  return u"expected \"active\" or \"inactive\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


DisplayUnitInfo::DisplayUnitInfo()
: is_primary(false),
is_internal(false),
is_enabled(false),
active_state(),
is_unified(false),
dpi_x(0.0),
dpi_y(0.0),
rotation(0),
has_touch_support(false),
has_accelerometer_support(false),
display_zoom_factor(0.0) {}

DisplayUnitInfo::~DisplayUnitInfo() = default;
DisplayUnitInfo::DisplayUnitInfo(DisplayUnitInfo&& rhs) noexcept = default;
DisplayUnitInfo& DisplayUnitInfo::operator=(DisplayUnitInfo&& rhs) noexcept = default;
DisplayUnitInfo DisplayUnitInfo::Clone() const {
  DisplayUnitInfo out;
  out.id = id;
  out.name = name;
  if (edid) {
    out.edid = edid->Clone();
  }
  out.mirroring_source_id = mirroring_source_id;
  out.mirroring_destination_ids = mirroring_destination_ids;
  out.is_primary = is_primary;
  out.is_internal = is_internal;
  out.is_enabled = is_enabled;
  out.active_state = active_state;
  out.is_unified = is_unified;
  out.is_auto_rotation_allowed = is_auto_rotation_allowed;
  out.dpi_x = dpi_x;
  out.dpi_y = dpi_y;
  out.rotation = rotation;
  out.bounds = bounds.Clone();
  out.overscan = overscan.Clone();
  out.work_area = work_area.Clone();
  out.modes.reserve(modes.size());
  for (const auto& element : modes) {
    json_schema_compiler::util::AppendToContainer(out.modes, element.Clone());
  }
  out.has_touch_support = has_touch_support;
  out.has_accelerometer_support = has_accelerometer_support;
  out.available_display_zoom_factors = available_display_zoom_factors;
  out.display_zoom_factor = display_zoom_factor;
  return out;
}

// static
bool DisplayUnitInfo::Populate(
    const base::Value::Dict& dict, DisplayUnitInfo& out) {
  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto* temp = (*id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.name = *temp;
  }

  const base::Value* edid_value = dict.Find("edid");
  if (edid_value) {
    {
      if (!(*edid_value).is_dict()) {
        return false;
      }
      else {
        Edid temp;
        if (!Edid::Populate((*edid_value).GetDict(), temp))
          return false;
        out.edid = std::move(temp);
      }
    }
  }

  const base::Value* mirroring_source_id_value = dict.Find("mirroringSourceId");
  if (!mirroring_source_id_value) {
    return false;
  }
  {
    auto* temp = (*mirroring_source_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.mirroring_source_id = *temp;
  }

  const base::Value* mirroring_destination_ids_value = dict.Find("mirroringDestinationIds");
  if (!mirroring_destination_ids_value) {
    return false;
  }
  {
    if (!(*mirroring_destination_ids_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*mirroring_destination_ids_value).GetList(), out.mirroring_destination_ids)) {
        return false;
      }
    }
  }

  const base::Value* is_primary_value = dict.Find("isPrimary");
  if (!is_primary_value) {
    return false;
  }
  {
    auto temp = (*is_primary_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_primary = *temp;
  }

  const base::Value* is_internal_value = dict.Find("isInternal");
  if (!is_internal_value) {
    return false;
  }
  {
    auto temp = (*is_internal_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_internal = *temp;
  }

  const base::Value* is_enabled_value = dict.Find("isEnabled");
  if (!is_enabled_value) {
    return false;
  }
  {
    auto temp = (*is_enabled_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_enabled = *temp;
  }

  const base::Value* active_state_value = dict.Find("activeState");
  if (!active_state_value) {
    return false;
  }
  {
    const std::string* active_state_as_string = (*active_state_value).GetIfString();
    if (!active_state_as_string) {
      return false;
    }
    out.active_state = ParseActiveState(*active_state_as_string);
    if (out.active_state == ActiveState()) {
      return false;
    }
  }

  const base::Value* is_unified_value = dict.Find("isUnified");
  if (!is_unified_value) {
    return false;
  }
  {
    auto temp = (*is_unified_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_unified = *temp;
  }

  const base::Value* is_auto_rotation_allowed_value = dict.Find("isAutoRotationAllowed");
  if (is_auto_rotation_allowed_value) {
    {
      auto temp = (*is_auto_rotation_allowed_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_auto_rotation_allowed = std::nullopt;
        return false;
      }
      out.is_auto_rotation_allowed = *temp;
    }
  }

  const base::Value* dpi_x_value = dict.Find("dpiX");
  if (!dpi_x_value) {
    return false;
  }
  {
    auto temp = (*dpi_x_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.dpi_x = *temp;
  }

  const base::Value* dpi_y_value = dict.Find("dpiY");
  if (!dpi_y_value) {
    return false;
  }
  {
    auto temp = (*dpi_y_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.dpi_y = *temp;
  }

  const base::Value* rotation_value = dict.Find("rotation");
  if (!rotation_value) {
    return false;
  }
  {
    auto temp = (*rotation_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.rotation = *temp;
  }

  const base::Value* bounds_value = dict.Find("bounds");
  if (!bounds_value) {
    return false;
  }
  {
    if (!(*bounds_value).is_dict()) {
      return false;
    }
    if (!Bounds::Populate((*bounds_value).GetDict(), out.bounds)) {
      return false;
    }
  }

  const base::Value* overscan_value = dict.Find("overscan");
  if (!overscan_value) {
    return false;
  }
  {
    if (!(*overscan_value).is_dict()) {
      return false;
    }
    if (!Insets::Populate((*overscan_value).GetDict(), out.overscan)) {
      return false;
    }
  }

  const base::Value* work_area_value = dict.Find("workArea");
  if (!work_area_value) {
    return false;
  }
  {
    if (!(*work_area_value).is_dict()) {
      return false;
    }
    if (!Bounds::Populate((*work_area_value).GetDict(), out.work_area)) {
      return false;
    }
  }

  const base::Value* modes_value = dict.Find("modes");
  if (!modes_value) {
    return false;
  }
  {
    if (!(*modes_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*modes_value).GetList(), out.modes)) {
        return false;
      }
    }
  }

  const base::Value* has_touch_support_value = dict.Find("hasTouchSupport");
  if (!has_touch_support_value) {
    return false;
  }
  {
    auto temp = (*has_touch_support_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.has_touch_support = *temp;
  }

  const base::Value* has_accelerometer_support_value = dict.Find("hasAccelerometerSupport");
  if (!has_accelerometer_support_value) {
    return false;
  }
  {
    auto temp = (*has_accelerometer_support_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.has_accelerometer_support = *temp;
  }

  const base::Value* available_display_zoom_factors_value = dict.Find("availableDisplayZoomFactors");
  if (!available_display_zoom_factors_value) {
    return false;
  }
  {
    if (!(*available_display_zoom_factors_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*available_display_zoom_factors_value).GetList(), out.available_display_zoom_factors)) {
        return false;
      }
    }
  }

  const base::Value* display_zoom_factor_value = dict.Find("displayZoomFactor");
  if (!display_zoom_factor_value) {
    return false;
  }
  {
    auto temp = (*display_zoom_factor_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.display_zoom_factor = *temp;
  }

  return true;
}

// static
bool DisplayUnitInfo::Populate(
    const base::Value& value, DisplayUnitInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DisplayUnitInfo> DisplayUnitInfo::FromValue(const base::Value::Dict& value) {
  DisplayUnitInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DisplayUnitInfo> DisplayUnitInfo::FromValue(const base::Value& value) {
  DisplayUnitInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DisplayUnitInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("name", this->name);

  if (this->edid) {
    to_value_result.Set("edid", (this->edid)->ToValue());

  }
  to_value_result.Set("mirroringSourceId", this->mirroring_source_id);

  to_value_result.Set("mirroringDestinationIds", json_schema_compiler::util::CreateValueFromArray(this->mirroring_destination_ids));

  to_value_result.Set("isPrimary", this->is_primary);

  to_value_result.Set("isInternal", this->is_internal);

  to_value_result.Set("isEnabled", this->is_enabled);

  to_value_result.Set("activeState", system_display::ToString(this->active_state));

  to_value_result.Set("isUnified", this->is_unified);

  if (this->is_auto_rotation_allowed) {
    to_value_result.Set("isAutoRotationAllowed", *this->is_auto_rotation_allowed);

  }
  to_value_result.Set("dpiX", this->dpi_x);

  to_value_result.Set("dpiY", this->dpi_y);

  to_value_result.Set("rotation", this->rotation);

  to_value_result.Set("bounds", (this->bounds).ToValue());

  to_value_result.Set("overscan", (this->overscan).ToValue());

  to_value_result.Set("workArea", (this->work_area).ToValue());

  to_value_result.Set("modes", json_schema_compiler::util::CreateValueFromArray(this->modes));

  to_value_result.Set("hasTouchSupport", this->has_touch_support);

  to_value_result.Set("hasAccelerometerSupport", this->has_accelerometer_support);

  to_value_result.Set("availableDisplayZoomFactors", json_schema_compiler::util::CreateValueFromArray(this->available_display_zoom_factors));

  to_value_result.Set("displayZoomFactor", this->display_zoom_factor);


  return to_value_result;
}


DisplayProperties::DisplayProperties()
 {}

DisplayProperties::~DisplayProperties() = default;
DisplayProperties::DisplayProperties(DisplayProperties&& rhs) noexcept = default;
DisplayProperties& DisplayProperties::operator=(DisplayProperties&& rhs) noexcept = default;
DisplayProperties DisplayProperties::Clone() const {
  DisplayProperties out;
  out.is_unified = is_unified;
  out.mirroring_source_id = mirroring_source_id;
  out.is_primary = is_primary;
  if (overscan) {
    out.overscan = overscan->Clone();
  }
  out.rotation = rotation;
  out.bounds_origin_x = bounds_origin_x;
  out.bounds_origin_y = bounds_origin_y;
  if (display_mode) {
    out.display_mode = display_mode->Clone();
  }
  out.display_zoom_factor = display_zoom_factor;
  return out;
}

// static
bool DisplayProperties::Populate(
    const base::Value::Dict& dict, DisplayProperties& out) {
  const base::Value* is_unified_value = dict.Find("isUnified");
  if (is_unified_value) {
    {
      auto temp = (*is_unified_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_unified = std::nullopt;
        return false;
      }
      out.is_unified = *temp;
    }
  }

  const base::Value* mirroring_source_id_value = dict.Find("mirroringSourceId");
  if (mirroring_source_id_value) {
    {
      auto* temp = (*mirroring_source_id_value).GetIfString();
      if (!temp) {
        out.mirroring_source_id = std::nullopt;
        return false;
      }
      out.mirroring_source_id = *temp;
    }
  }

  const base::Value* is_primary_value = dict.Find("isPrimary");
  if (is_primary_value) {
    {
      auto temp = (*is_primary_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_primary = std::nullopt;
        return false;
      }
      out.is_primary = *temp;
    }
  }

  const base::Value* overscan_value = dict.Find("overscan");
  if (overscan_value) {
    {
      if (!(*overscan_value).is_dict()) {
        return false;
      }
      else {
        Insets temp;
        if (!Insets::Populate((*overscan_value).GetDict(), temp))
          return false;
        out.overscan = std::move(temp);
      }
    }
  }

  const base::Value* rotation_value = dict.Find("rotation");
  if (rotation_value) {
    {
      auto temp = (*rotation_value).GetIfInt();
      if (!temp.has_value()) {
        out.rotation = std::nullopt;
        return false;
      }
      out.rotation = *temp;
    }
  }

  const base::Value* bounds_origin_x_value = dict.Find("boundsOriginX");
  if (bounds_origin_x_value) {
    {
      auto temp = (*bounds_origin_x_value).GetIfInt();
      if (!temp.has_value()) {
        out.bounds_origin_x = std::nullopt;
        return false;
      }
      out.bounds_origin_x = *temp;
    }
  }

  const base::Value* bounds_origin_y_value = dict.Find("boundsOriginY");
  if (bounds_origin_y_value) {
    {
      auto temp = (*bounds_origin_y_value).GetIfInt();
      if (!temp.has_value()) {
        out.bounds_origin_y = std::nullopt;
        return false;
      }
      out.bounds_origin_y = *temp;
    }
  }

  const base::Value* display_mode_value = dict.Find("displayMode");
  if (display_mode_value) {
    {
      if (!(*display_mode_value).is_dict()) {
        return false;
      }
      else {
        DisplayMode temp;
        if (!DisplayMode::Populate((*display_mode_value).GetDict(), temp))
          return false;
        out.display_mode = std::move(temp);
      }
    }
  }

  const base::Value* display_zoom_factor_value = dict.Find("displayZoomFactor");
  if (display_zoom_factor_value) {
    {
      auto temp = (*display_zoom_factor_value).GetIfDouble();
      if (!temp.has_value()) {
        out.display_zoom_factor = std::nullopt;
        return false;
      }
      out.display_zoom_factor = *temp;
    }
  }

  return true;
}

// static
bool DisplayProperties::Populate(
    const base::Value& value, DisplayProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DisplayProperties> DisplayProperties::FromValue(const base::Value::Dict& value) {
  DisplayProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DisplayProperties> DisplayProperties::FromValue(const base::Value& value) {
  DisplayProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DisplayProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->is_unified) {
    to_value_result.Set("isUnified", *this->is_unified);

  }
  if (this->mirroring_source_id) {
    to_value_result.Set("mirroringSourceId", *this->mirroring_source_id);

  }
  if (this->is_primary) {
    to_value_result.Set("isPrimary", *this->is_primary);

  }
  if (this->overscan) {
    to_value_result.Set("overscan", (this->overscan)->ToValue());

  }
  if (this->rotation) {
    to_value_result.Set("rotation", *this->rotation);

  }
  if (this->bounds_origin_x) {
    to_value_result.Set("boundsOriginX", *this->bounds_origin_x);

  }
  if (this->bounds_origin_y) {
    to_value_result.Set("boundsOriginY", *this->bounds_origin_y);

  }
  if (this->display_mode) {
    to_value_result.Set("displayMode", (this->display_mode)->ToValue());

  }
  if (this->display_zoom_factor) {
    to_value_result.Set("displayZoomFactor", *this->display_zoom_factor);

  }

  return to_value_result;
}


GetInfoFlags::GetInfoFlags()
 {}

GetInfoFlags::~GetInfoFlags() = default;
GetInfoFlags::GetInfoFlags(GetInfoFlags&& rhs) noexcept = default;
GetInfoFlags& GetInfoFlags::operator=(GetInfoFlags&& rhs) noexcept = default;
GetInfoFlags GetInfoFlags::Clone() const {
  GetInfoFlags out;
  out.single_unified = single_unified;
  return out;
}

// static
bool GetInfoFlags::Populate(
    const base::Value::Dict& dict, GetInfoFlags& out) {
  const base::Value* single_unified_value = dict.Find("singleUnified");
  if (single_unified_value) {
    {
      auto temp = (*single_unified_value).GetIfBool();
      if (!temp.has_value()) {
        out.single_unified = std::nullopt;
        return false;
      }
      out.single_unified = *temp;
    }
  }

  return true;
}

// static
bool GetInfoFlags::Populate(
    const base::Value& value, GetInfoFlags& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GetInfoFlags> GetInfoFlags::FromValue(const base::Value::Dict& value) {
  GetInfoFlags out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GetInfoFlags> GetInfoFlags::FromValue(const base::Value& value) {
  GetInfoFlags out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict GetInfoFlags::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->single_unified) {
    to_value_result.Set("singleUnified", *this->single_unified);

  }

  return to_value_result;
}


const char* ToString(MirrorMode enum_param) {
  switch (enum_param) {
    case MirrorMode::kOff:
      return "off";
    case MirrorMode::kNormal:
      return "normal";
    case MirrorMode::kMixed:
      return "mixed";
    case MirrorMode::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

MirrorMode ParseMirrorMode(base::StringPiece enum_string) {
  if (enum_string == "off")
    return MirrorMode::kOff;
  if (enum_string == "normal")
    return MirrorMode::kNormal;
  if (enum_string == "mixed")
    return MirrorMode::kMixed;
  return MirrorMode::kNone;
}

std::u16string GetMirrorModeParseError(base::StringPiece enum_string) {
  return u"expected \"off\" or \"normal\" or \"mixed\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


MirrorModeInfo::MirrorModeInfo()
: mode() {}

MirrorModeInfo::~MirrorModeInfo() = default;
MirrorModeInfo::MirrorModeInfo(MirrorModeInfo&& rhs) noexcept = default;
MirrorModeInfo& MirrorModeInfo::operator=(MirrorModeInfo&& rhs) noexcept = default;
MirrorModeInfo MirrorModeInfo::Clone() const {
  MirrorModeInfo out;
  out.mode = mode;
  out.mirroring_source_id = mirroring_source_id;
  out.mirroring_destination_ids = mirroring_destination_ids;
  return out;
}

// static
bool MirrorModeInfo::Populate(
    const base::Value::Dict& dict, MirrorModeInfo& out) {
  const base::Value* mode_value = dict.Find("mode");
  if (!mode_value) {
    return false;
  }
  {
    const std::string* mirror_mode_as_string = (*mode_value).GetIfString();
    if (!mirror_mode_as_string) {
      return false;
    }
    out.mode = ParseMirrorMode(*mirror_mode_as_string);
    if (out.mode == MirrorMode()) {
      return false;
    }
  }

  const base::Value* mirroring_source_id_value = dict.Find("mirroringSourceId");
  if (mirroring_source_id_value) {
    {
      auto* temp = (*mirroring_source_id_value).GetIfString();
      if (!temp) {
        out.mirroring_source_id = std::nullopt;
        return false;
      }
      out.mirroring_source_id = *temp;
    }
  }

  const base::Value* mirroring_destination_ids_value = dict.Find("mirroringDestinationIds");
  if (mirroring_destination_ids_value) {
    {
      if (!(*mirroring_destination_ids_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*mirroring_destination_ids_value).GetList(), out.mirroring_destination_ids)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool MirrorModeInfo::Populate(
    const base::Value& value, MirrorModeInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<MirrorModeInfo> MirrorModeInfo::FromValue(const base::Value::Dict& value) {
  MirrorModeInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<MirrorModeInfo> MirrorModeInfo::FromValue(const base::Value& value) {
  MirrorModeInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict MirrorModeInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("mode", system_display::ToString(this->mode));

  if (this->mirroring_source_id) {
    to_value_result.Set("mirroringSourceId", *this->mirroring_source_id);

  }
  if (this->mirroring_destination_ids) {
    to_value_result.Set("mirroringDestinationIds", json_schema_compiler::util::CreateValueFromArray(*this->mirroring_destination_ids));

  }

  return to_value_result;
}



//
// Functions
//

namespace GetInfo {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& flags_value = args[0];
    {
      if (!flags_value.is_dict()) {
        return std::nullopt;
      }
      else {
        GetInfoFlags temp;
        if (!GetInfoFlags::Populate(flags_value.GetDict(), temp))
          return std::nullopt;
        params.flags = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const std::vector<DisplayUnitInfo>& display_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(display_info));

  return create_results;
}
}  // namespace GetInfo

namespace GetDisplayLayout {

base::Value::List Results::Create(const std::vector<DisplayLayout>& layouts) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(layouts));

  return create_results;
}
}  // namespace GetDisplayLayout

namespace SetDisplayProperties {

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
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& info_value = args[1];
    {
      if (!info_value.is_dict()) {
        return std::nullopt;
      }
      if (!DisplayProperties::Populate(info_value.GetDict(), params.info)) {
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
}  // namespace SetDisplayProperties

namespace SetDisplayLayout {

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
    const base::Value& layouts_value = args[0];
    {
      if (!layouts_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(layouts_value.GetList(), params.layouts)) {
          return std::nullopt;
        }
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
}  // namespace SetDisplayLayout

namespace EnableUnifiedDesktop {

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
    const base::Value& enabled_value = args[0];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.enabled = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace EnableUnifiedDesktop

namespace OverscanCalibrationStart {

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
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace OverscanCalibrationStart

namespace OverscanCalibrationAdjust {

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
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& delta_value = args[1];
    {
      if (!delta_value.is_dict()) {
        return std::nullopt;
      }
      if (!Insets::Populate(delta_value.GetDict(), params.delta)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace OverscanCalibrationAdjust

namespace OverscanCalibrationReset {

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
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace OverscanCalibrationReset

namespace OverscanCalibrationComplete {

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
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace OverscanCalibrationComplete

namespace ShowNativeTouchCalibration {

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
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace ShowNativeTouchCalibration

namespace StartCustomTouchCalibration {

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
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace StartCustomTouchCalibration

namespace CompleteCustomTouchCalibration {

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
    const base::Value& pairs_value = args[0];
    {
      if (!pairs_value.is_dict()) {
        return std::nullopt;
      }
      if (!TouchCalibrationPairQuad::Populate(pairs_value.GetDict(), params.pairs)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& bounds_value = args[1];
    {
      if (!bounds_value.is_dict()) {
        return std::nullopt;
      }
      if (!Bounds::Populate(bounds_value.GetDict(), params.bounds)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace CompleteCustomTouchCalibration

namespace ClearTouchCalibration {

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
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace ClearTouchCalibration

namespace SetMirrorMode {

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
    const base::Value& info_value = args[0];
    {
      if (!info_value.is_dict()) {
        return std::nullopt;
      }
      if (!MirrorModeInfo::Populate(info_value.GetDict(), params.info)) {
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
}  // namespace SetMirrorMode

//
// Events
//

namespace OnDisplayChanged {

const char kEventName[] = "system.display.onDisplayChanged";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnDisplayChanged

}  // namespace system_display
}  // namespace api
}  // namespace extensions

