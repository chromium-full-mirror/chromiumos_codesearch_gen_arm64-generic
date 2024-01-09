// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/automation_internal.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/automation_internal.h"

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
namespace automation_internal {
//
// Types
//

AXEventParams::AXEventParams()
 {}

AXEventParams::~AXEventParams() = default;
AXEventParams::AXEventParams(AXEventParams&& rhs) noexcept = default;
AXEventParams& AXEventParams::operator=(AXEventParams&& rhs) noexcept = default;
AXEventParams AXEventParams::Clone() const {
  AXEventParams out;
  return out;
}

// static
bool AXEventParams::Populate(
    const base::Value::Dict& dict, AXEventParams& out) {
  return true;
}

// static
bool AXEventParams::Populate(
    const base::Value& value, AXEventParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AXEventParams> AXEventParams::FromValue(const base::Value::Dict& value) {
  AXEventParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AXEventParams> AXEventParams::FromValue(const base::Value& value) {
  AXEventParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict AXEventParams::ToValue() const {
  base::Value::Dict to_value_result;


  return to_value_result;
}


AXTextLocationParams::AXTextLocationParams()
: node_id(0),
result(false),
left(0),
top(0),
width(0),
height(0),
request_id(0) {}

AXTextLocationParams::~AXTextLocationParams() = default;
AXTextLocationParams::AXTextLocationParams(AXTextLocationParams&& rhs) noexcept = default;
AXTextLocationParams& AXTextLocationParams::operator=(AXTextLocationParams&& rhs) noexcept = default;
AXTextLocationParams AXTextLocationParams::Clone() const {
  AXTextLocationParams out;
  out.tree_id = tree_id;
  out.node_id = node_id;
  out.result = result;
  out.left = left;
  out.top = top;
  out.width = width;
  out.height = height;
  out.request_id = request_id;
  return out;
}

// static
bool AXTextLocationParams::Populate(
    const base::Value::Dict& dict, AXTextLocationParams& out) {
  const base::Value* tree_id_value = dict.Find("treeID");
  if (!tree_id_value) {
    return false;
  }
  {
    auto* temp = (*tree_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.tree_id = *temp;
  }

  const base::Value* node_id_value = dict.Find("nodeID");
  if (!node_id_value) {
    return false;
  }
  {
    auto temp = (*node_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.node_id = *temp;
  }

  const base::Value* result_value = dict.Find("result");
  if (!result_value) {
    return false;
  }
  {
    auto temp = (*result_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.result = *temp;
  }

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

  const base::Value* request_id_value = dict.Find("requestID");
  if (!request_id_value) {
    return false;
  }
  {
    auto temp = (*request_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.request_id = *temp;
  }

  return true;
}

// static
bool AXTextLocationParams::Populate(
    const base::Value& value, AXTextLocationParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AXTextLocationParams> AXTextLocationParams::FromValue(const base::Value::Dict& value) {
  AXTextLocationParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AXTextLocationParams> AXTextLocationParams::FromValue(const base::Value& value) {
  AXTextLocationParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict AXTextLocationParams::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("treeID", this->tree_id);

  to_value_result.Set("nodeID", this->node_id);

  to_value_result.Set("result", this->result);

  to_value_result.Set("left", this->left);

  to_value_result.Set("top", this->top);

  to_value_result.Set("width", this->width);

  to_value_result.Set("height", this->height);

  to_value_result.Set("requestID", this->request_id);


  return to_value_result;
}


PerformActionRequiredParams::PerformActionRequiredParams()
: automation_node_id(0) {}

PerformActionRequiredParams::~PerformActionRequiredParams() = default;
PerformActionRequiredParams::PerformActionRequiredParams(PerformActionRequiredParams&& rhs) noexcept = default;
PerformActionRequiredParams& PerformActionRequiredParams::operator=(PerformActionRequiredParams&& rhs) noexcept = default;
PerformActionRequiredParams PerformActionRequiredParams::Clone() const {
  PerformActionRequiredParams out;
  out.tree_id = tree_id;
  out.automation_node_id = automation_node_id;
  out.action_type = action_type;
  out.request_id = request_id;
  return out;
}

// static
bool PerformActionRequiredParams::Populate(
    const base::Value::Dict& dict, PerformActionRequiredParams& out) {
  const base::Value* tree_id_value = dict.Find("treeID");
  if (!tree_id_value) {
    return false;
  }
  {
    auto* temp = (*tree_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.tree_id = *temp;
  }

  const base::Value* automation_node_id_value = dict.Find("automationNodeID");
  if (!automation_node_id_value) {
    return false;
  }
  {
    auto temp = (*automation_node_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.automation_node_id = *temp;
  }

  const base::Value* action_type_value = dict.Find("actionType");
  if (!action_type_value) {
    return false;
  }
  {
    auto* temp = (*action_type_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.action_type = *temp;
  }

  const base::Value* request_id_value = dict.Find("requestID");
  if (request_id_value) {
    {
      auto temp = (*request_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.request_id = std::nullopt;
        return false;
      }
      out.request_id = *temp;
    }
  }

  return true;
}

// static
bool PerformActionRequiredParams::Populate(
    const base::Value& value, PerformActionRequiredParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PerformActionRequiredParams> PerformActionRequiredParams::FromValue(const base::Value::Dict& value) {
  PerformActionRequiredParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PerformActionRequiredParams> PerformActionRequiredParams::FromValue(const base::Value& value) {
  PerformActionRequiredParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict PerformActionRequiredParams::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("treeID", this->tree_id);

  to_value_result.Set("automationNodeID", this->automation_node_id);

  to_value_result.Set("actionType", this->action_type);

  if (this->request_id) {
    to_value_result.Set("requestID", *this->request_id);

  }

  return to_value_result;
}


PerformCustomActionParams::PerformCustomActionParams()
: custom_action_id(0) {}

PerformCustomActionParams::~PerformCustomActionParams() = default;
PerformCustomActionParams::PerformCustomActionParams(PerformCustomActionParams&& rhs) noexcept = default;
PerformCustomActionParams& PerformCustomActionParams::operator=(PerformCustomActionParams&& rhs) noexcept = default;
PerformCustomActionParams PerformCustomActionParams::Clone() const {
  PerformCustomActionParams out;
  out.custom_action_id = custom_action_id;
  return out;
}

// static
bool PerformCustomActionParams::Populate(
    const base::Value::Dict& dict, PerformCustomActionParams& out) {
  const base::Value* custom_action_id_value = dict.Find("customActionID");
  if (!custom_action_id_value) {
    return false;
  }
  {
    auto temp = (*custom_action_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.custom_action_id = *temp;
  }

  return true;
}

// static
bool PerformCustomActionParams::Populate(
    const base::Value& value, PerformCustomActionParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PerformCustomActionParams> PerformCustomActionParams::FromValue(const base::Value::Dict& value) {
  PerformCustomActionParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PerformCustomActionParams> PerformCustomActionParams::FromValue(const base::Value& value) {
  PerformCustomActionParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict PerformCustomActionParams::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("customActionID", this->custom_action_id);


  return to_value_result;
}


SetSelectionParams::SetSelectionParams()
: focus_node_id(0),
anchor_offset(0),
focus_offset(0) {}

SetSelectionParams::~SetSelectionParams() = default;
SetSelectionParams::SetSelectionParams(SetSelectionParams&& rhs) noexcept = default;
SetSelectionParams& SetSelectionParams::operator=(SetSelectionParams&& rhs) noexcept = default;
SetSelectionParams SetSelectionParams::Clone() const {
  SetSelectionParams out;
  out.focus_node_id = focus_node_id;
  out.anchor_offset = anchor_offset;
  out.focus_offset = focus_offset;
  return out;
}

// static
bool SetSelectionParams::Populate(
    const base::Value::Dict& dict, SetSelectionParams& out) {
  const base::Value* focus_node_id_value = dict.Find("focusNodeID");
  if (!focus_node_id_value) {
    return false;
  }
  {
    auto temp = (*focus_node_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.focus_node_id = *temp;
  }

  const base::Value* anchor_offset_value = dict.Find("anchorOffset");
  if (!anchor_offset_value) {
    return false;
  }
  {
    auto temp = (*anchor_offset_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.anchor_offset = *temp;
  }

  const base::Value* focus_offset_value = dict.Find("focusOffset");
  if (!focus_offset_value) {
    return false;
  }
  {
    auto temp = (*focus_offset_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.focus_offset = *temp;
  }

  return true;
}

// static
bool SetSelectionParams::Populate(
    const base::Value& value, SetSelectionParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SetSelectionParams> SetSelectionParams::FromValue(const base::Value::Dict& value) {
  SetSelectionParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SetSelectionParams> SetSelectionParams::FromValue(const base::Value& value) {
  SetSelectionParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SetSelectionParams::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("focusNodeID", this->focus_node_id);

  to_value_result.Set("anchorOffset", this->anchor_offset);

  to_value_result.Set("focusOffset", this->focus_offset);


  return to_value_result;
}


ReplaceSelectedTextParams::ReplaceSelectedTextParams()
 {}

ReplaceSelectedTextParams::~ReplaceSelectedTextParams() = default;
ReplaceSelectedTextParams::ReplaceSelectedTextParams(ReplaceSelectedTextParams&& rhs) noexcept = default;
ReplaceSelectedTextParams& ReplaceSelectedTextParams::operator=(ReplaceSelectedTextParams&& rhs) noexcept = default;
ReplaceSelectedTextParams ReplaceSelectedTextParams::Clone() const {
  ReplaceSelectedTextParams out;
  out.value = value;
  return out;
}

// static
bool ReplaceSelectedTextParams::Populate(
    const base::Value::Dict& dict, ReplaceSelectedTextParams& out) {
  const base::Value* value_value = dict.Find("value");
  if (!value_value) {
    return false;
  }
  {
    auto* temp = (*value_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.value = *temp;
  }

  return true;
}

// static
bool ReplaceSelectedTextParams::Populate(
    const base::Value& value, ReplaceSelectedTextParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ReplaceSelectedTextParams> ReplaceSelectedTextParams::FromValue(const base::Value::Dict& value) {
  ReplaceSelectedTextParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ReplaceSelectedTextParams> ReplaceSelectedTextParams::FromValue(const base::Value& value) {
  ReplaceSelectedTextParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ReplaceSelectedTextParams::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("value", this->value);


  return to_value_result;
}


SetValueParams::SetValueParams()
 {}

SetValueParams::~SetValueParams() = default;
SetValueParams::SetValueParams(SetValueParams&& rhs) noexcept = default;
SetValueParams& SetValueParams::operator=(SetValueParams&& rhs) noexcept = default;
SetValueParams SetValueParams::Clone() const {
  SetValueParams out;
  out.value = value;
  return out;
}

// static
bool SetValueParams::Populate(
    const base::Value::Dict& dict, SetValueParams& out) {
  const base::Value* value_value = dict.Find("value");
  if (!value_value) {
    return false;
  }
  {
    auto* temp = (*value_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.value = *temp;
  }

  return true;
}

// static
bool SetValueParams::Populate(
    const base::Value& value, SetValueParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SetValueParams> SetValueParams::FromValue(const base::Value::Dict& value) {
  SetValueParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SetValueParams> SetValueParams::FromValue(const base::Value& value) {
  SetValueParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SetValueParams::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("value", this->value);


  return to_value_result;
}


ScrollToPointParams::ScrollToPointParams()
: x(0),
y(0) {}

ScrollToPointParams::~ScrollToPointParams() = default;
ScrollToPointParams::ScrollToPointParams(ScrollToPointParams&& rhs) noexcept = default;
ScrollToPointParams& ScrollToPointParams::operator=(ScrollToPointParams&& rhs) noexcept = default;
ScrollToPointParams ScrollToPointParams::Clone() const {
  ScrollToPointParams out;
  out.x = x;
  out.y = y;
  return out;
}

// static
bool ScrollToPointParams::Populate(
    const base::Value::Dict& dict, ScrollToPointParams& out) {
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
bool ScrollToPointParams::Populate(
    const base::Value& value, ScrollToPointParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ScrollToPointParams> ScrollToPointParams::FromValue(const base::Value::Dict& value) {
  ScrollToPointParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ScrollToPointParams> ScrollToPointParams::FromValue(const base::Value& value) {
  ScrollToPointParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ScrollToPointParams::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("x", this->x);

  to_value_result.Set("y", this->y);


  return to_value_result;
}


ScrollToPositionAtRowColumnParams::ScrollToPositionAtRowColumnParams()
: row(0),
column(0) {}

ScrollToPositionAtRowColumnParams::~ScrollToPositionAtRowColumnParams() = default;
ScrollToPositionAtRowColumnParams::ScrollToPositionAtRowColumnParams(ScrollToPositionAtRowColumnParams&& rhs) noexcept = default;
ScrollToPositionAtRowColumnParams& ScrollToPositionAtRowColumnParams::operator=(ScrollToPositionAtRowColumnParams&& rhs) noexcept = default;
ScrollToPositionAtRowColumnParams ScrollToPositionAtRowColumnParams::Clone() const {
  ScrollToPositionAtRowColumnParams out;
  out.row = row;
  out.column = column;
  return out;
}

// static
bool ScrollToPositionAtRowColumnParams::Populate(
    const base::Value::Dict& dict, ScrollToPositionAtRowColumnParams& out) {
  const base::Value* row_value = dict.Find("row");
  if (!row_value) {
    return false;
  }
  {
    auto temp = (*row_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.row = *temp;
  }

  const base::Value* column_value = dict.Find("column");
  if (!column_value) {
    return false;
  }
  {
    auto temp = (*column_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.column = *temp;
  }

  return true;
}

// static
bool ScrollToPositionAtRowColumnParams::Populate(
    const base::Value& value, ScrollToPositionAtRowColumnParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ScrollToPositionAtRowColumnParams> ScrollToPositionAtRowColumnParams::FromValue(const base::Value::Dict& value) {
  ScrollToPositionAtRowColumnParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ScrollToPositionAtRowColumnParams> ScrollToPositionAtRowColumnParams::FromValue(const base::Value& value) {
  ScrollToPositionAtRowColumnParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ScrollToPositionAtRowColumnParams::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("row", this->row);

  to_value_result.Set("column", this->column);


  return to_value_result;
}


SetScrollOffsetParams::SetScrollOffsetParams()
: x(0),
y(0) {}

SetScrollOffsetParams::~SetScrollOffsetParams() = default;
SetScrollOffsetParams::SetScrollOffsetParams(SetScrollOffsetParams&& rhs) noexcept = default;
SetScrollOffsetParams& SetScrollOffsetParams::operator=(SetScrollOffsetParams&& rhs) noexcept = default;
SetScrollOffsetParams SetScrollOffsetParams::Clone() const {
  SetScrollOffsetParams out;
  out.x = x;
  out.y = y;
  return out;
}

// static
bool SetScrollOffsetParams::Populate(
    const base::Value::Dict& dict, SetScrollOffsetParams& out) {
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
bool SetScrollOffsetParams::Populate(
    const base::Value& value, SetScrollOffsetParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SetScrollOffsetParams> SetScrollOffsetParams::FromValue(const base::Value::Dict& value) {
  SetScrollOffsetParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SetScrollOffsetParams> SetScrollOffsetParams::FromValue(const base::Value& value) {
  SetScrollOffsetParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SetScrollOffsetParams::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("x", this->x);

  to_value_result.Set("y", this->y);


  return to_value_result;
}


GetImageDataParams::GetImageDataParams()
: max_width(0),
max_height(0) {}

GetImageDataParams::~GetImageDataParams() = default;
GetImageDataParams::GetImageDataParams(GetImageDataParams&& rhs) noexcept = default;
GetImageDataParams& GetImageDataParams::operator=(GetImageDataParams&& rhs) noexcept = default;
GetImageDataParams GetImageDataParams::Clone() const {
  GetImageDataParams out;
  out.max_width = max_width;
  out.max_height = max_height;
  return out;
}

// static
bool GetImageDataParams::Populate(
    const base::Value::Dict& dict, GetImageDataParams& out) {
  const base::Value* max_width_value = dict.Find("maxWidth");
  if (!max_width_value) {
    return false;
  }
  {
    auto temp = (*max_width_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.max_width = *temp;
  }

  const base::Value* max_height_value = dict.Find("maxHeight");
  if (!max_height_value) {
    return false;
  }
  {
    auto temp = (*max_height_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.max_height = *temp;
  }

  return true;
}

// static
bool GetImageDataParams::Populate(
    const base::Value& value, GetImageDataParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GetImageDataParams> GetImageDataParams::FromValue(const base::Value::Dict& value) {
  GetImageDataParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GetImageDataParams> GetImageDataParams::FromValue(const base::Value& value) {
  GetImageDataParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict GetImageDataParams::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("maxWidth", this->max_width);

  to_value_result.Set("maxHeight", this->max_height);


  return to_value_result;
}


HitTestParams::HitTestParams()
: x(0),
y(0) {}

HitTestParams::~HitTestParams() = default;
HitTestParams::HitTestParams(HitTestParams&& rhs) noexcept = default;
HitTestParams& HitTestParams::operator=(HitTestParams&& rhs) noexcept = default;
HitTestParams HitTestParams::Clone() const {
  HitTestParams out;
  out.x = x;
  out.y = y;
  out.event_to_fire = event_to_fire;
  return out;
}

// static
bool HitTestParams::Populate(
    const base::Value::Dict& dict, HitTestParams& out) {
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

  const base::Value* event_to_fire_value = dict.Find("eventToFire");
  if (!event_to_fire_value) {
    return false;
  }
  {
    auto* temp = (*event_to_fire_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.event_to_fire = *temp;
  }

  return true;
}

// static
bool HitTestParams::Populate(
    const base::Value& value, HitTestParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<HitTestParams> HitTestParams::FromValue(const base::Value::Dict& value) {
  HitTestParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<HitTestParams> HitTestParams::FromValue(const base::Value& value) {
  HitTestParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict HitTestParams::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("x", this->x);

  to_value_result.Set("y", this->y);

  to_value_result.Set("eventToFire", this->event_to_fire);


  return to_value_result;
}


GetTextLocationDataParams::GetTextLocationDataParams()
: start_index(0),
end_index(0) {}

GetTextLocationDataParams::~GetTextLocationDataParams() = default;
GetTextLocationDataParams::GetTextLocationDataParams(GetTextLocationDataParams&& rhs) noexcept = default;
GetTextLocationDataParams& GetTextLocationDataParams::operator=(GetTextLocationDataParams&& rhs) noexcept = default;
GetTextLocationDataParams GetTextLocationDataParams::Clone() const {
  GetTextLocationDataParams out;
  out.start_index = start_index;
  out.end_index = end_index;
  return out;
}

// static
bool GetTextLocationDataParams::Populate(
    const base::Value::Dict& dict, GetTextLocationDataParams& out) {
  const base::Value* start_index_value = dict.Find("startIndex");
  if (!start_index_value) {
    return false;
  }
  {
    auto temp = (*start_index_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.start_index = *temp;
  }

  const base::Value* end_index_value = dict.Find("endIndex");
  if (!end_index_value) {
    return false;
  }
  {
    auto temp = (*end_index_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.end_index = *temp;
  }

  return true;
}

// static
bool GetTextLocationDataParams::Populate(
    const base::Value& value, GetTextLocationDataParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GetTextLocationDataParams> GetTextLocationDataParams::FromValue(const base::Value::Dict& value) {
  GetTextLocationDataParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GetTextLocationDataParams> GetTextLocationDataParams::FromValue(const base::Value& value) {
  GetTextLocationDataParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict GetTextLocationDataParams::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("startIndex", this->start_index);

  to_value_result.Set("endIndex", this->end_index);


  return to_value_result;
}



//
// Functions
//

namespace EnableTree {

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
    const base::Value& tree_id_value = args[0];
    {
      auto* temp = tree_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.tree_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace EnableTree

namespace EnableDesktop {

base::Value::List Results::Create(const std::string& tree_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(tree_id);

  return create_results;
}
}  // namespace EnableDesktop

namespace DisableDesktop {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace DisableDesktop

namespace PerformAction {

Params::OptArgs::OptArgs()
 {}

Params::OptArgs::~OptArgs() = default;
Params::OptArgs::OptArgs(OptArgs&& rhs) noexcept = default;
Params::OptArgs& Params::OptArgs::operator=(OptArgs&& rhs) noexcept = default;
Params::OptArgs Params::OptArgs::Clone() const {
  OptArgs out;
  return out;
}

// static
bool Params::OptArgs::Populate(
    const base::Value::Dict& dict, OptArgs& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool Params::OptArgs::Populate(
    const base::Value& value, OptArgs& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::OptArgs> Params::OptArgs::FromValue(const base::Value::Dict& value) {
  OptArgs out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::OptArgs> Params::OptArgs::FromValue(const base::Value& value) {
  OptArgs out;
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
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& args_value = args[0];
    {
      if (!args_value.is_dict()) {
        return std::nullopt;
      }
      if (!PerformActionRequiredParams::Populate(args_value.GetDict(), params.args)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& opt_args_value = args[1];
    {
      if (!opt_args_value.is_dict()) {
        return std::nullopt;
      }
      if (!OptArgs::Populate(opt_args_value.GetDict(), params.opt_args)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace PerformAction

//
// Events
//

namespace OnAccessibilityEvent {

const char kEventName[] = "automationInternal.onAccessibilityEvent";

base::Value::List Create(const AXEventParams& update) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((update).ToValue());

  return create_results;
}

}  // namespace OnAccessibilityEvent

namespace OnAccessibilityTreeDestroyed {

const char kEventName[] = "automationInternal.onAccessibilityTreeDestroyed";

base::Value::List Create(const std::string& tree_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(tree_id);

  return create_results;
}

}  // namespace OnAccessibilityTreeDestroyed

namespace OnGetTextLocationResult {

const char kEventName[] = "automationInternal.onGetTextLocationResult";

base::Value::List Create(const AXTextLocationParams& params) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((params).ToValue());

  return create_results;
}

}  // namespace OnGetTextLocationResult

namespace OnTreeChange {

const char kEventName[] = "automationInternal.onTreeChange";

base::Value::List Create(int observer_id, const std::string& tree_id, int node_id, const std::string& change_type) {
  base::Value::List create_results;
  create_results.reserve(4);
  create_results.Append(observer_id);

  create_results.Append(tree_id);

  create_results.Append(node_id);

  create_results.Append(change_type);

  return create_results;
}

}  // namespace OnTreeChange

namespace OnChildTreeID {

const char kEventName[] = "automationInternal.onChildTreeID";

base::Value::List Create(const std::string& tree_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(tree_id);

  return create_results;
}

}  // namespace OnChildTreeID

namespace OnNodesRemoved {

const char kEventName[] = "automationInternal.onNodesRemoved";

base::Value::List Create(const std::string& tree_id, const std::vector<int>& node_i_ds) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(tree_id);

  create_results.Append(json_schema_compiler::util::CreateValueFromArray(node_i_ds));

  return create_results;
}

}  // namespace OnNodesRemoved

namespace OnAccessibilityTreeSerializationError {

const char kEventName[] = "automationInternal.onAccessibilityTreeSerializationError";

base::Value::List Create(const std::string& tree_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(tree_id);

  return create_results;
}

}  // namespace OnAccessibilityTreeSerializationError

namespace OnActionResult {

const char kEventName[] = "automationInternal.onActionResult";

base::Value::List Create(const std::string& tree_id, int request_id, bool result) {
  base::Value::List create_results;
  create_results.reserve(3);
  create_results.Append(tree_id);

  create_results.Append(request_id);

  create_results.Append(result);

  return create_results;
}

}  // namespace OnActionResult

namespace OnAllAutomationEventListenersRemoved {

const char kEventName[] = "automationInternal.onAllAutomationEventListenersRemoved";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnAllAutomationEventListenersRemoved

}  // namespace automation_internal
}  // namespace api
}  // namespace extensions

