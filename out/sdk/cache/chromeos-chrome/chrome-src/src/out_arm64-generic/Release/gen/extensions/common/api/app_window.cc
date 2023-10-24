// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/app_window.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/app_window.h"

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
#include "base/strings/string_piece.h"
#include "extensions/common/api/app_runtime.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace app_window {
//
// Types
//

ContentBounds::ContentBounds()
 {}

ContentBounds::~ContentBounds() = default;
ContentBounds::ContentBounds(ContentBounds&& rhs) = default;
ContentBounds& ContentBounds::operator=(ContentBounds&& rhs) = default;
ContentBounds ContentBounds::Clone() const {
  ContentBounds out;
  out.left = left;
  out.top = top;
  out.width = width;
  out.height = height;
  return out;
}

// static
bool ContentBounds::Populate(
    const base::Value::Dict& dict, ContentBounds& out) {
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
bool ContentBounds::Populate(
    const base::Value& value, ContentBounds& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ContentBounds> ContentBounds::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ContentBounds>();
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
absl::optional<ContentBounds> ContentBounds::FromValue(const base::Value::Dict& value) {
  ContentBounds out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ContentBounds> ContentBounds::FromValue(const base::Value& value) {
  ContentBounds out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ContentBounds::ToValue() const {
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


BoundsSpecification::BoundsSpecification()
 {}

BoundsSpecification::~BoundsSpecification() = default;
BoundsSpecification::BoundsSpecification(BoundsSpecification&& rhs) = default;
BoundsSpecification& BoundsSpecification::operator=(BoundsSpecification&& rhs) = default;
BoundsSpecification BoundsSpecification::Clone() const {
  BoundsSpecification out;
  out.left = left;
  out.top = top;
  out.width = width;
  out.height = height;
  out.min_width = min_width;
  out.min_height = min_height;
  out.max_width = max_width;
  out.max_height = max_height;
  return out;
}

// static
bool BoundsSpecification::Populate(
    const base::Value::Dict& dict, BoundsSpecification& out) {
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
bool BoundsSpecification::Populate(
    const base::Value& value, BoundsSpecification& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<BoundsSpecification> BoundsSpecification::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<BoundsSpecification>();
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
absl::optional<BoundsSpecification> BoundsSpecification::FromValue(const base::Value::Dict& value) {
  BoundsSpecification out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<BoundsSpecification> BoundsSpecification::FromValue(const base::Value& value) {
  BoundsSpecification out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict BoundsSpecification::ToValue() const {
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


Bounds::Bounds()
: left(0),
top(0),
width(0),
height(0) {}

Bounds::~Bounds() = default;
Bounds::Bounds(Bounds&& rhs) = default;
Bounds& Bounds::operator=(Bounds&& rhs) = default;
Bounds Bounds::Clone() const {
  Bounds out;
  out.left = left;
  out.top = top;
  out.width = width;
  out.height = height;
  out.min_width = min_width;
  out.min_height = min_height;
  out.max_width = max_width;
  out.max_height = max_height;
  out.set_position = set_position.Clone();
  out.set_size = set_size.Clone();
  out.set_minimum_size = set_minimum_size.Clone();
  out.set_maximum_size = set_maximum_size.Clone();
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

  const base::Value* set_position_value = dict.Find("setPosition");
  if (!set_position_value) {
    return false;
  }

  const base::Value* set_size_value = dict.Find("setSize");
  if (!set_size_value) {
    return false;
  }

  const base::Value* set_minimum_size_value = dict.Find("setMinimumSize");
  if (!set_minimum_size_value) {
    return false;
  }

  const base::Value* set_maximum_size_value = dict.Find("setMaximumSize");
  if (!set_maximum_size_value) {
    return false;
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

  to_value_result.Set("left", this->left);

  to_value_result.Set("top", this->top);

  to_value_result.Set("width", this->width);

  to_value_result.Set("height", this->height);

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
  to_value_result.Set("setPosition", (this->set_position).Clone());

  to_value_result.Set("setSize", (this->set_size).Clone());

  to_value_result.Set("setMinimumSize", (this->set_minimum_size).Clone());

  to_value_result.Set("setMaximumSize", (this->set_maximum_size).Clone());


  return to_value_result;
}


FrameOptions::FrameOptions()
 {}

FrameOptions::~FrameOptions() = default;
FrameOptions::FrameOptions(FrameOptions&& rhs) = default;
FrameOptions& FrameOptions::operator=(FrameOptions&& rhs) = default;
FrameOptions FrameOptions::Clone() const {
  FrameOptions out;
  out.type = type;
  out.color = color;
  out.active_color = active_color;
  out.inactive_color = inactive_color;
  return out;
}

// static
bool FrameOptions::Populate(
    const base::Value::Dict& dict, FrameOptions& out) {
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    {
      auto* temp = (*type_value).GetIfString();
      if (!temp) {
        out.type = absl::nullopt;
        return false;
      }
      out.type = *temp;
    }
  }

  const base::Value* color_value = dict.Find("color");
  if (color_value) {
    {
      auto* temp = (*color_value).GetIfString();
      if (!temp) {
        out.color = absl::nullopt;
        return false;
      }
      out.color = *temp;
    }
  }

  const base::Value* active_color_value = dict.Find("activeColor");
  if (active_color_value) {
    {
      auto* temp = (*active_color_value).GetIfString();
      if (!temp) {
        out.active_color = absl::nullopt;
        return false;
      }
      out.active_color = *temp;
    }
  }

  const base::Value* inactive_color_value = dict.Find("inactiveColor");
  if (inactive_color_value) {
    {
      auto* temp = (*inactive_color_value).GetIfString();
      if (!temp) {
        out.inactive_color = absl::nullopt;
        return false;
      }
      out.inactive_color = *temp;
    }
  }

  return true;
}

// static
bool FrameOptions::Populate(
    const base::Value& value, FrameOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<FrameOptions> FrameOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<FrameOptions>();
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
absl::optional<FrameOptions> FrameOptions::FromValue(const base::Value::Dict& value) {
  FrameOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<FrameOptions> FrameOptions::FromValue(const base::Value& value) {
  FrameOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict FrameOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->type) {
    to_value_result.Set("type", *this->type);

  }
  if (this->color) {
    to_value_result.Set("color", *this->color);

  }
  if (this->active_color) {
    to_value_result.Set("activeColor", *this->active_color);

  }
  if (this->inactive_color) {
    to_value_result.Set("inactiveColor", *this->inactive_color);

  }

  return to_value_result;
}


const char* ToString(State enum_param) {
  switch (enum_param) {
    case State::kNormal:
      return "normal";
    case State::kFullscreen:
      return "fullscreen";
    case State::kMaximized:
      return "maximized";
    case State::kMinimized:
      return "minimized";
    case State::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

State ParseState(base::StringPiece enum_string) {
  if (enum_string == "normal")
    return State::kNormal;
  if (enum_string == "fullscreen")
    return State::kFullscreen;
  if (enum_string == "maximized")
    return State::kMaximized;
  if (enum_string == "minimized")
    return State::kMinimized;
  return State::kNone;
}

std::u16string GetStateParseError(base::StringPiece enum_string) {
  return u"expected \"normal\" or \"fullscreen\" or \"maximized\" or \"minimized\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(WindowType enum_param) {
  switch (enum_param) {
    case WindowType::kShell:
      return "shell";
    case WindowType::kPanel:
      return "panel";
    case WindowType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

WindowType ParseWindowType(base::StringPiece enum_string) {
  if (enum_string == "shell")
    return WindowType::kShell;
  if (enum_string == "panel")
    return WindowType::kPanel;
  return WindowType::kNone;
}

std::u16string GetWindowTypeParseError(base::StringPiece enum_string) {
  return u"expected \"shell\" or \"panel\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


CreateWindowOptions::Frame::Frame()
 {}

CreateWindowOptions::Frame::~Frame() = default;
CreateWindowOptions::Frame::Frame(Frame&& rhs) = default;
CreateWindowOptions::Frame& CreateWindowOptions::Frame::operator=(Frame&& rhs) = default;
CreateWindowOptions::Frame CreateWindowOptions::Frame::Clone() const {
  Frame out;
  out.as_string = as_string;
  if (as_frame_options) {
    out.as_frame_options = as_frame_options->Clone();
  }
  return out;
}

// static
bool CreateWindowOptions::Frame::Populate(
    const base::Value& value, Frame& out) {
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out.as_string = absl::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::DICT) {
    {
      if (!value.is_dict()) {
        return false;
      }
      else {
        FrameOptions temp;
        if (!FrameOptions::Populate(value.GetDict(), temp))
          return false;
        out.as_frame_options = std::move(temp);
      }
    }
    return true;
  }
  return false;
}

// static
absl::optional<CreateWindowOptions::Frame> CreateWindowOptions::Frame::FromValue(const base::Value& value) {
  Frame out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value CreateWindowOptions::Frame::ToValue() const {
  base::Value result;
  if (as_string) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for frame";
    result = base::Value(*as_string);

  }
  if (as_frame_options) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for frame";
    result = base::Value((as_frame_options)->ToValue());

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for frame";
  return result;
}



CreateWindowOptions::CreateWindowOptions()
: type(),
state(),
lock_screen_action() {}

CreateWindowOptions::~CreateWindowOptions() = default;
CreateWindowOptions::CreateWindowOptions(CreateWindowOptions&& rhs) = default;
CreateWindowOptions& CreateWindowOptions::operator=(CreateWindowOptions&& rhs) = default;
CreateWindowOptions CreateWindowOptions::Clone() const {
  CreateWindowOptions out;
  out.id = id;
  if (inner_bounds) {
    out.inner_bounds = inner_bounds->Clone();
  }
  if (outer_bounds) {
    out.outer_bounds = outer_bounds->Clone();
  }
  out.default_width = default_width;
  out.default_height = default_height;
  out.default_left = default_left;
  out.default_top = default_top;
  out.width = width;
  out.height = height;
  out.left = left;
  out.top = top;
  out.min_width = min_width;
  out.min_height = min_height;
  out.max_width = max_width;
  out.max_height = max_height;
  out.type = type;
  out.ime = ime;
  out.show_in_shelf = show_in_shelf;
  out.icon = icon;
  if (frame) {
    out.frame = frame->Clone();
  }
  if (bounds) {
    out.bounds = bounds->Clone();
  }
  out.alpha_enabled = alpha_enabled;
  out.state = state;
  out.hidden = hidden;
  out.resizable = resizable;
  out.singleton = singleton;
  out.always_on_top = always_on_top;
  out.focused = focused;
  out.visible_on_all_workspaces = visible_on_all_workspaces;
  out.lock_screen_action = lock_screen_action;
  return out;
}

// static
bool CreateWindowOptions::Populate(
    const base::Value::Dict& dict, CreateWindowOptions& out) {
  out.type = WindowType();
  out.state = State();
  out.lock_screen_action = app_runtime::ActionType();
  const base::Value* id_value = dict.Find("id");
  if (id_value) {
    {
      auto* temp = (*id_value).GetIfString();
      if (!temp) {
        out.id = absl::nullopt;
        return false;
      }
      out.id = *temp;
    }
  }

  const base::Value* inner_bounds_value = dict.Find("innerBounds");
  if (inner_bounds_value) {
    {
      if (!(*inner_bounds_value).is_dict()) {
        return false;
      }
      else {
        BoundsSpecification temp;
        if (!BoundsSpecification::Populate((*inner_bounds_value).GetDict(), temp))
          return false;
        out.inner_bounds = std::move(temp);
      }
    }
  }

  const base::Value* outer_bounds_value = dict.Find("outerBounds");
  if (outer_bounds_value) {
    {
      if (!(*outer_bounds_value).is_dict()) {
        return false;
      }
      else {
        BoundsSpecification temp;
        if (!BoundsSpecification::Populate((*outer_bounds_value).GetDict(), temp))
          return false;
        out.outer_bounds = std::move(temp);
      }
    }
  }

  const base::Value* default_width_value = dict.Find("defaultWidth");
  if (default_width_value) {
    {
      auto temp = (*default_width_value).GetIfInt();
      if (!temp.has_value()) {
        out.default_width = absl::nullopt;
        return false;
      }
      out.default_width = *temp;
    }
  }

  const base::Value* default_height_value = dict.Find("defaultHeight");
  if (default_height_value) {
    {
      auto temp = (*default_height_value).GetIfInt();
      if (!temp.has_value()) {
        out.default_height = absl::nullopt;
        return false;
      }
      out.default_height = *temp;
    }
  }

  const base::Value* default_left_value = dict.Find("defaultLeft");
  if (default_left_value) {
    {
      auto temp = (*default_left_value).GetIfInt();
      if (!temp.has_value()) {
        out.default_left = absl::nullopt;
        return false;
      }
      out.default_left = *temp;
    }
  }

  const base::Value* default_top_value = dict.Find("defaultTop");
  if (default_top_value) {
    {
      auto temp = (*default_top_value).GetIfInt();
      if (!temp.has_value()) {
        out.default_top = absl::nullopt;
        return false;
      }
      out.default_top = *temp;
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

  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    {
      const std::string* window_type_as_string = (*type_value).GetIfString();
      if (!window_type_as_string) {
        return false;
      }
      out.type = ParseWindowType(*window_type_as_string);
      if (out.type == WindowType()) {
        return false;
      }
    }
    } else {
    out.type = WindowType();
  }

  const base::Value* ime_value = dict.Find("ime");
  if (ime_value) {
    {
      auto temp = (*ime_value).GetIfBool();
      if (!temp.has_value()) {
        out.ime = absl::nullopt;
        return false;
      }
      out.ime = *temp;
    }
  }

  const base::Value* show_in_shelf_value = dict.Find("showInShelf");
  if (show_in_shelf_value) {
    {
      auto temp = (*show_in_shelf_value).GetIfBool();
      if (!temp.has_value()) {
        out.show_in_shelf = absl::nullopt;
        return false;
      }
      out.show_in_shelf = *temp;
    }
  }

  const base::Value* icon_value = dict.Find("icon");
  if (icon_value) {
    {
      auto* temp = (*icon_value).GetIfString();
      if (!temp) {
        out.icon = absl::nullopt;
        return false;
      }
      out.icon = *temp;
    }
  }

  const base::Value* frame_value = dict.Find("frame");
  if (frame_value) {
    {
      Frame temp;
      if (!Frame::Populate((*frame_value), temp))
        return false;
      out.frame = std::move(temp);
    }
  }

  const base::Value* bounds_value = dict.Find("bounds");
  if (bounds_value) {
    {
      if (!(*bounds_value).is_dict()) {
        return false;
      }
      else {
        ContentBounds temp;
        if (!ContentBounds::Populate((*bounds_value).GetDict(), temp))
          return false;
        out.bounds = std::move(temp);
      }
    }
  }

  const base::Value* alpha_enabled_value = dict.Find("alphaEnabled");
  if (alpha_enabled_value) {
    {
      auto temp = (*alpha_enabled_value).GetIfBool();
      if (!temp.has_value()) {
        out.alpha_enabled = absl::nullopt;
        return false;
      }
      out.alpha_enabled = *temp;
    }
  }

  const base::Value* state_value = dict.Find("state");
  if (state_value) {
    {
      const std::string* state_as_string = (*state_value).GetIfString();
      if (!state_as_string) {
        return false;
      }
      out.state = ParseState(*state_as_string);
      if (out.state == State()) {
        return false;
      }
    }
    } else {
    out.state = State();
  }

  const base::Value* hidden_value = dict.Find("hidden");
  if (hidden_value) {
    {
      auto temp = (*hidden_value).GetIfBool();
      if (!temp.has_value()) {
        out.hidden = absl::nullopt;
        return false;
      }
      out.hidden = *temp;
    }
  }

  const base::Value* resizable_value = dict.Find("resizable");
  if (resizable_value) {
    {
      auto temp = (*resizable_value).GetIfBool();
      if (!temp.has_value()) {
        out.resizable = absl::nullopt;
        return false;
      }
      out.resizable = *temp;
    }
  }

  const base::Value* singleton_value = dict.Find("singleton");
  if (singleton_value) {
    {
      auto temp = (*singleton_value).GetIfBool();
      if (!temp.has_value()) {
        out.singleton = absl::nullopt;
        return false;
      }
      out.singleton = *temp;
    }
  }

  const base::Value* always_on_top_value = dict.Find("alwaysOnTop");
  if (always_on_top_value) {
    {
      auto temp = (*always_on_top_value).GetIfBool();
      if (!temp.has_value()) {
        out.always_on_top = absl::nullopt;
        return false;
      }
      out.always_on_top = *temp;
    }
  }

  const base::Value* focused_value = dict.Find("focused");
  if (focused_value) {
    {
      auto temp = (*focused_value).GetIfBool();
      if (!temp.has_value()) {
        out.focused = absl::nullopt;
        return false;
      }
      out.focused = *temp;
    }
  }

  const base::Value* visible_on_all_workspaces_value = dict.Find("visibleOnAllWorkspaces");
  if (visible_on_all_workspaces_value) {
    {
      auto temp = (*visible_on_all_workspaces_value).GetIfBool();
      if (!temp.has_value()) {
        out.visible_on_all_workspaces = absl::nullopt;
        return false;
      }
      out.visible_on_all_workspaces = *temp;
    }
  }

  const base::Value* lock_screen_action_value = dict.Find("lockScreenAction");
  if (lock_screen_action_value) {
    {
      const std::string* action_type_as_string = (*lock_screen_action_value).GetIfString();
      if (!action_type_as_string) {
        return false;
      }
      out.lock_screen_action = app_runtime::ParseActionType(*action_type_as_string);
      if (out.lock_screen_action == app_runtime::ActionType()) {
        return false;
      }
    }
    } else {
    out.lock_screen_action = app_runtime::ActionType();
  }

  return true;
}

// static
bool CreateWindowOptions::Populate(
    const base::Value& value, CreateWindowOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<CreateWindowOptions> CreateWindowOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<CreateWindowOptions>();
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
absl::optional<CreateWindowOptions> CreateWindowOptions::FromValue(const base::Value::Dict& value) {
  CreateWindowOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CreateWindowOptions> CreateWindowOptions::FromValue(const base::Value& value) {
  CreateWindowOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict CreateWindowOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->id) {
    to_value_result.Set("id", *this->id);

  }
  if (this->inner_bounds) {
    to_value_result.Set("innerBounds", (this->inner_bounds)->ToValue());

  }
  if (this->outer_bounds) {
    to_value_result.Set("outerBounds", (this->outer_bounds)->ToValue());

  }
  if (this->default_width) {
    to_value_result.Set("defaultWidth", *this->default_width);

  }
  if (this->default_height) {
    to_value_result.Set("defaultHeight", *this->default_height);

  }
  if (this->default_left) {
    to_value_result.Set("defaultLeft", *this->default_left);

  }
  if (this->default_top) {
    to_value_result.Set("defaultTop", *this->default_top);

  }
  if (this->width) {
    to_value_result.Set("width", *this->width);

  }
  if (this->height) {
    to_value_result.Set("height", *this->height);

  }
  if (this->left) {
    to_value_result.Set("left", *this->left);

  }
  if (this->top) {
    to_value_result.Set("top", *this->top);

  }
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
  if (this->type != WindowType()) {
    to_value_result.Set("type", app_window::ToString(this->type));

  }
  if (this->ime) {
    to_value_result.Set("ime", *this->ime);

  }
  if (this->show_in_shelf) {
    to_value_result.Set("showInShelf", *this->show_in_shelf);

  }
  if (this->icon) {
    to_value_result.Set("icon", *this->icon);

  }
  if (this->frame) {
    to_value_result.Set("frame", (this->frame)->ToValue());

  }
  if (this->bounds) {
    to_value_result.Set("bounds", (this->bounds)->ToValue());

  }
  if (this->alpha_enabled) {
    to_value_result.Set("alphaEnabled", *this->alpha_enabled);

  }
  if (this->state != State()) {
    to_value_result.Set("state", app_window::ToString(this->state));

  }
  if (this->hidden) {
    to_value_result.Set("hidden", *this->hidden);

  }
  if (this->resizable) {
    to_value_result.Set("resizable", *this->resizable);

  }
  if (this->singleton) {
    to_value_result.Set("singleton", *this->singleton);

  }
  if (this->always_on_top) {
    to_value_result.Set("alwaysOnTop", *this->always_on_top);

  }
  if (this->focused) {
    to_value_result.Set("focused", *this->focused);

  }
  if (this->visible_on_all_workspaces) {
    to_value_result.Set("visibleOnAllWorkspaces", *this->visible_on_all_workspaces);

  }
  if (this->lock_screen_action != app_runtime::ActionType()) {
    to_value_result.Set("lockScreenAction", app_runtime::ToString(this->lock_screen_action));

  }

  return to_value_result;
}


AppWindow::ContentWindow::ContentWindow()
 {}

AppWindow::ContentWindow::~ContentWindow() = default;
AppWindow::ContentWindow::ContentWindow(ContentWindow&& rhs) = default;
AppWindow::ContentWindow& AppWindow::ContentWindow::operator=(ContentWindow&& rhs) = default;
AppWindow::ContentWindow AppWindow::ContentWindow::Clone() const {
  ContentWindow out;
  return out;
}

// static
bool AppWindow::ContentWindow::Populate(
    const base::Value::Dict& dict, ContentWindow& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool AppWindow::ContentWindow::Populate(
    const base::Value& value, ContentWindow& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<AppWindow::ContentWindow> AppWindow::ContentWindow::FromValue(const base::Value::Dict& value) {
  ContentWindow out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<AppWindow::ContentWindow> AppWindow::ContentWindow::FromValue(const base::Value& value) {
  ContentWindow out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict AppWindow::ContentWindow::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



AppWindow::AppWindow()
: has_frame_color(false),
active_frame_color(0),
inactive_frame_color(0) {}

AppWindow::~AppWindow() = default;
AppWindow::AppWindow(AppWindow&& rhs) = default;
AppWindow& AppWindow::operator=(AppWindow&& rhs) = default;
AppWindow AppWindow::Clone() const {
  AppWindow out;
  out.focus = focus.Clone();
  out.fullscreen = fullscreen.Clone();
  out.is_fullscreen = is_fullscreen.Clone();
  out.minimize = minimize.Clone();
  out.is_minimized = is_minimized.Clone();
  out.maximize = maximize.Clone();
  out.is_maximized = is_maximized.Clone();
  out.restore = restore.Clone();
  out.move_to = move_to.Clone();
  out.resize_to = resize_to.Clone();
  out.draw_attention = draw_attention.Clone();
  out.clear_attention = clear_attention.Clone();
  out.close = close.Clone();
  out.show = show.Clone();
  out.hide = hide.Clone();
  out.set_icon = set_icon.Clone();
  out.is_always_on_top = is_always_on_top.Clone();
  out.has_frame_color = has_frame_color;
  out.active_frame_color = active_frame_color;
  out.inactive_frame_color = inactive_frame_color;
  out.set_always_on_top = set_always_on_top.Clone();
  out.alpha_enabled = alpha_enabled.Clone();
  out.set_visible_on_all_workspaces = set_visible_on_all_workspaces.Clone();
  out.content_window = content_window.Clone();
  out.id = id;
  out.inner_bounds = inner_bounds.Clone();
  out.outer_bounds = outer_bounds.Clone();
  return out;
}

// static
bool AppWindow::Populate(
    const base::Value::Dict& dict, AppWindow& out) {
  const base::Value* focus_value = dict.Find("focus");
  if (!focus_value) {
    return false;
  }

  const base::Value* fullscreen_value = dict.Find("fullscreen");
  if (!fullscreen_value) {
    return false;
  }

  const base::Value* is_fullscreen_value = dict.Find("isFullscreen");
  if (!is_fullscreen_value) {
    return false;
  }

  const base::Value* minimize_value = dict.Find("minimize");
  if (!minimize_value) {
    return false;
  }

  const base::Value* is_minimized_value = dict.Find("isMinimized");
  if (!is_minimized_value) {
    return false;
  }

  const base::Value* maximize_value = dict.Find("maximize");
  if (!maximize_value) {
    return false;
  }

  const base::Value* is_maximized_value = dict.Find("isMaximized");
  if (!is_maximized_value) {
    return false;
  }

  const base::Value* restore_value = dict.Find("restore");
  if (!restore_value) {
    return false;
  }

  const base::Value* move_to_value = dict.Find("moveTo");
  if (!move_to_value) {
    return false;
  }

  const base::Value* resize_to_value = dict.Find("resizeTo");
  if (!resize_to_value) {
    return false;
  }

  const base::Value* draw_attention_value = dict.Find("drawAttention");
  if (!draw_attention_value) {
    return false;
  }

  const base::Value* clear_attention_value = dict.Find("clearAttention");
  if (!clear_attention_value) {
    return false;
  }

  const base::Value* close_value = dict.Find("close");
  if (!close_value) {
    return false;
  }

  const base::Value* show_value = dict.Find("show");
  if (!show_value) {
    return false;
  }

  const base::Value* hide_value = dict.Find("hide");
  if (!hide_value) {
    return false;
  }

  const base::Value* set_icon_value = dict.Find("setIcon");
  if (!set_icon_value) {
    return false;
  }

  const base::Value* is_always_on_top_value = dict.Find("isAlwaysOnTop");
  if (!is_always_on_top_value) {
    return false;
  }

  const base::Value* has_frame_color_value = dict.Find("hasFrameColor");
  if (!has_frame_color_value) {
    return false;
  }
  {
    auto temp = (*has_frame_color_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.has_frame_color = *temp;
  }

  const base::Value* active_frame_color_value = dict.Find("activeFrameColor");
  if (!active_frame_color_value) {
    return false;
  }
  {
    auto temp = (*active_frame_color_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.active_frame_color = *temp;
  }

  const base::Value* inactive_frame_color_value = dict.Find("inactiveFrameColor");
  if (!inactive_frame_color_value) {
    return false;
  }
  {
    auto temp = (*inactive_frame_color_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.inactive_frame_color = *temp;
  }

  const base::Value* set_always_on_top_value = dict.Find("setAlwaysOnTop");
  if (!set_always_on_top_value) {
    return false;
  }

  const base::Value* alpha_enabled_value = dict.Find("alphaEnabled");
  if (!alpha_enabled_value) {
    return false;
  }

  const base::Value* set_visible_on_all_workspaces_value = dict.Find("setVisibleOnAllWorkspaces");
  if (!set_visible_on_all_workspaces_value) {
    return false;
  }

  const base::Value* content_window_value = dict.Find("contentWindow");
  if (!content_window_value) {
    return false;
  }
  {
    if (!(*content_window_value).is_dict()) {
      return false;
    }
    if (!ContentWindow::Populate((*content_window_value).GetDict(), out.content_window)) {
      return false;
    }
  }

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

  const base::Value* inner_bounds_value = dict.Find("innerBounds");
  if (!inner_bounds_value) {
    return false;
  }
  {
    if (!(*inner_bounds_value).is_dict()) {
      return false;
    }
    if (!Bounds::Populate((*inner_bounds_value).GetDict(), out.inner_bounds)) {
      return false;
    }
  }

  const base::Value* outer_bounds_value = dict.Find("outerBounds");
  if (!outer_bounds_value) {
    return false;
  }
  {
    if (!(*outer_bounds_value).is_dict()) {
      return false;
    }
    if (!Bounds::Populate((*outer_bounds_value).GetDict(), out.outer_bounds)) {
      return false;
    }
  }

  return true;
}

// static
bool AppWindow::Populate(
    const base::Value& value, AppWindow& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<AppWindow> AppWindow::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<AppWindow>();
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
absl::optional<AppWindow> AppWindow::FromValue(const base::Value::Dict& value) {
  AppWindow out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<AppWindow> AppWindow::FromValue(const base::Value& value) {
  AppWindow out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict AppWindow::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("focus", (this->focus).Clone());

  to_value_result.Set("fullscreen", (this->fullscreen).Clone());

  to_value_result.Set("isFullscreen", (this->is_fullscreen).Clone());

  to_value_result.Set("minimize", (this->minimize).Clone());

  to_value_result.Set("isMinimized", (this->is_minimized).Clone());

  to_value_result.Set("maximize", (this->maximize).Clone());

  to_value_result.Set("isMaximized", (this->is_maximized).Clone());

  to_value_result.Set("restore", (this->restore).Clone());

  to_value_result.Set("moveTo", (this->move_to).Clone());

  to_value_result.Set("resizeTo", (this->resize_to).Clone());

  to_value_result.Set("drawAttention", (this->draw_attention).Clone());

  to_value_result.Set("clearAttention", (this->clear_attention).Clone());

  to_value_result.Set("close", (this->close).Clone());

  to_value_result.Set("show", (this->show).Clone());

  to_value_result.Set("hide", (this->hide).Clone());

  to_value_result.Set("setIcon", (this->set_icon).Clone());

  to_value_result.Set("isAlwaysOnTop", (this->is_always_on_top).Clone());

  to_value_result.Set("hasFrameColor", this->has_frame_color);

  to_value_result.Set("activeFrameColor", this->active_frame_color);

  to_value_result.Set("inactiveFrameColor", this->inactive_frame_color);

  to_value_result.Set("setAlwaysOnTop", (this->set_always_on_top).Clone());

  to_value_result.Set("alphaEnabled", (this->alpha_enabled).Clone());

  to_value_result.Set("setVisibleOnAllWorkspaces", (this->set_visible_on_all_workspaces).Clone());

  to_value_result.Set("contentWindow", (this->content_window).ToValue());

  to_value_result.Set("id", this->id);

  to_value_result.Set("innerBounds", (this->inner_bounds).ToValue());

  to_value_result.Set("outerBounds", (this->outer_bounds).ToValue());


  return to_value_result;
}



//
// Functions
//

namespace Create {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
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

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& options_value = args[1];
    {
      if (!options_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        CreateWindowOptions temp;
        if (!CreateWindowOptions::Populate(options_value.GetDict(), temp))
          return absl::nullopt;
        params.options = std::move(temp);
      }
    }
  }

  return params;
}


Results::CreatedWindow::CreatedWindow()
 {}

Results::CreatedWindow::~CreatedWindow() = default;
Results::CreatedWindow::CreatedWindow(CreatedWindow&& rhs) = default;
Results::CreatedWindow& Results::CreatedWindow::operator=(CreatedWindow&& rhs) = default;
base::Value::Dict Results::CreatedWindow::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::Value::List Results::Create(const CreatedWindow& created_window) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((created_window).ToValue());

  return create_results;
}
}  // namespace Create

}  // namespace app_window
}  // namespace api
}  // namespace extensions

