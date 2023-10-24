// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "headless/public/devtools/domains/types_dom.h"
#include "headless/public/devtools/domains/types_debugger.h"
#include "headless/public/devtools/domains/types_emulation.h"
#include "headless/public/devtools/domains/types_io.h"
#include "headless/public/devtools/domains/types_network.h"
#include "headless/public/devtools/domains/types_overlay.h"
#include "headless/public/devtools/domains/types_page.h"
#include "headless/public/devtools/domains/types_runtime.h"
#include "headless/public/devtools/domains/types_security.h"

#include "base/values.h"
#include "headless/public/devtools/internal/type_conversions_dom.h"
#include "headless/public/devtools/internal/type_conversions_debugger.h"
#include "headless/public/devtools/internal/type_conversions_emulation.h"
#include "headless/public/devtools/internal/type_conversions_io.h"
#include "headless/public/devtools/internal/type_conversions_network.h"
#include "headless/public/devtools/internal/type_conversions_overlay.h"
#include "headless/public/devtools/internal/type_conversions_page.h"
#include "headless/public/devtools/internal/type_conversions_runtime.h"
#include "headless/public/devtools/internal/type_conversions_security.h"

namespace headless {

namespace overlay {

std::unique_ptr<SourceOrderConfig> SourceOrderConfig::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SourceOrderConfig");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SourceOrderConfig> result(new SourceOrderConfig());
  errors->Push();
  errors->SetName("SourceOrderConfig");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* parent_outline_color_value = dict.Find("parentOutlineColor");
  if (parent_outline_color_value) {
    errors->SetName("parentOutlineColor");
    result->parent_outline_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*parent_outline_color_value, errors);
  } else {
    errors->AddError("required property missing: parentOutlineColor");
  }
  const base::Value* child_outline_color_value = dict.Find("childOutlineColor");
  if (child_outline_color_value) {
    errors->SetName("childOutlineColor");
    result->child_outline_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*child_outline_color_value, errors);
  } else {
    errors->AddError("required property missing: childOutlineColor");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SourceOrderConfig::Serialize() const {
  base::Value::Dict result;
  result.Set("parentOutlineColor", internal::ToValue(*parent_outline_color_));
  result.Set("childOutlineColor", internal::ToValue(*child_outline_color_));
  return base::Value(std::move(result));
}

std::unique_ptr<SourceOrderConfig> SourceOrderConfig::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SourceOrderConfig> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GridHighlightConfig> GridHighlightConfig::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GridHighlightConfig");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GridHighlightConfig> result(new GridHighlightConfig());
  errors->Push();
  errors->SetName("GridHighlightConfig");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* show_grid_extension_lines_value = dict.Find("showGridExtensionLines");
  if (show_grid_extension_lines_value) {
    errors->SetName("showGridExtensionLines");
    result->show_grid_extension_lines_ = internal::FromValue<bool>::Parse(*show_grid_extension_lines_value, errors);
  }
  const base::Value* show_positive_line_numbers_value = dict.Find("showPositiveLineNumbers");
  if (show_positive_line_numbers_value) {
    errors->SetName("showPositiveLineNumbers");
    result->show_positive_line_numbers_ = internal::FromValue<bool>::Parse(*show_positive_line_numbers_value, errors);
  }
  const base::Value* show_negative_line_numbers_value = dict.Find("showNegativeLineNumbers");
  if (show_negative_line_numbers_value) {
    errors->SetName("showNegativeLineNumbers");
    result->show_negative_line_numbers_ = internal::FromValue<bool>::Parse(*show_negative_line_numbers_value, errors);
  }
  const base::Value* show_area_names_value = dict.Find("showAreaNames");
  if (show_area_names_value) {
    errors->SetName("showAreaNames");
    result->show_area_names_ = internal::FromValue<bool>::Parse(*show_area_names_value, errors);
  }
  const base::Value* show_line_names_value = dict.Find("showLineNames");
  if (show_line_names_value) {
    errors->SetName("showLineNames");
    result->show_line_names_ = internal::FromValue<bool>::Parse(*show_line_names_value, errors);
  }
  const base::Value* show_track_sizes_value = dict.Find("showTrackSizes");
  if (show_track_sizes_value) {
    errors->SetName("showTrackSizes");
    result->show_track_sizes_ = internal::FromValue<bool>::Parse(*show_track_sizes_value, errors);
  }
  const base::Value* grid_border_color_value = dict.Find("gridBorderColor");
  if (grid_border_color_value) {
    errors->SetName("gridBorderColor");
    result->grid_border_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*grid_border_color_value, errors);
  }
  const base::Value* cell_border_color_value = dict.Find("cellBorderColor");
  if (cell_border_color_value) {
    errors->SetName("cellBorderColor");
    result->cell_border_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*cell_border_color_value, errors);
  }
  const base::Value* row_line_color_value = dict.Find("rowLineColor");
  if (row_line_color_value) {
    errors->SetName("rowLineColor");
    result->row_line_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*row_line_color_value, errors);
  }
  const base::Value* column_line_color_value = dict.Find("columnLineColor");
  if (column_line_color_value) {
    errors->SetName("columnLineColor");
    result->column_line_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*column_line_color_value, errors);
  }
  const base::Value* grid_border_dash_value = dict.Find("gridBorderDash");
  if (grid_border_dash_value) {
    errors->SetName("gridBorderDash");
    result->grid_border_dash_ = internal::FromValue<bool>::Parse(*grid_border_dash_value, errors);
  }
  const base::Value* cell_border_dash_value = dict.Find("cellBorderDash");
  if (cell_border_dash_value) {
    errors->SetName("cellBorderDash");
    result->cell_border_dash_ = internal::FromValue<bool>::Parse(*cell_border_dash_value, errors);
  }
  const base::Value* row_line_dash_value = dict.Find("rowLineDash");
  if (row_line_dash_value) {
    errors->SetName("rowLineDash");
    result->row_line_dash_ = internal::FromValue<bool>::Parse(*row_line_dash_value, errors);
  }
  const base::Value* column_line_dash_value = dict.Find("columnLineDash");
  if (column_line_dash_value) {
    errors->SetName("columnLineDash");
    result->column_line_dash_ = internal::FromValue<bool>::Parse(*column_line_dash_value, errors);
  }
  const base::Value* row_gap_color_value = dict.Find("rowGapColor");
  if (row_gap_color_value) {
    errors->SetName("rowGapColor");
    result->row_gap_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*row_gap_color_value, errors);
  }
  const base::Value* row_hatch_color_value = dict.Find("rowHatchColor");
  if (row_hatch_color_value) {
    errors->SetName("rowHatchColor");
    result->row_hatch_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*row_hatch_color_value, errors);
  }
  const base::Value* column_gap_color_value = dict.Find("columnGapColor");
  if (column_gap_color_value) {
    errors->SetName("columnGapColor");
    result->column_gap_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*column_gap_color_value, errors);
  }
  const base::Value* column_hatch_color_value = dict.Find("columnHatchColor");
  if (column_hatch_color_value) {
    errors->SetName("columnHatchColor");
    result->column_hatch_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*column_hatch_color_value, errors);
  }
  const base::Value* area_border_color_value = dict.Find("areaBorderColor");
  if (area_border_color_value) {
    errors->SetName("areaBorderColor");
    result->area_border_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*area_border_color_value, errors);
  }
  const base::Value* grid_background_color_value = dict.Find("gridBackgroundColor");
  if (grid_background_color_value) {
    errors->SetName("gridBackgroundColor");
    result->grid_background_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*grid_background_color_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GridHighlightConfig::Serialize() const {
  base::Value::Dict result;
  if (show_grid_extension_lines_)
    result.Set("showGridExtensionLines", internal::ToValue(show_grid_extension_lines_.value()));
  if (show_positive_line_numbers_)
    result.Set("showPositiveLineNumbers", internal::ToValue(show_positive_line_numbers_.value()));
  if (show_negative_line_numbers_)
    result.Set("showNegativeLineNumbers", internal::ToValue(show_negative_line_numbers_.value()));
  if (show_area_names_)
    result.Set("showAreaNames", internal::ToValue(show_area_names_.value()));
  if (show_line_names_)
    result.Set("showLineNames", internal::ToValue(show_line_names_.value()));
  if (show_track_sizes_)
    result.Set("showTrackSizes", internal::ToValue(show_track_sizes_.value()));
  if (grid_border_color_)
    result.Set("gridBorderColor", internal::ToValue(*grid_border_color_.value()));
  if (cell_border_color_)
    result.Set("cellBorderColor", internal::ToValue(*cell_border_color_.value()));
  if (row_line_color_)
    result.Set("rowLineColor", internal::ToValue(*row_line_color_.value()));
  if (column_line_color_)
    result.Set("columnLineColor", internal::ToValue(*column_line_color_.value()));
  if (grid_border_dash_)
    result.Set("gridBorderDash", internal::ToValue(grid_border_dash_.value()));
  if (cell_border_dash_)
    result.Set("cellBorderDash", internal::ToValue(cell_border_dash_.value()));
  if (row_line_dash_)
    result.Set("rowLineDash", internal::ToValue(row_line_dash_.value()));
  if (column_line_dash_)
    result.Set("columnLineDash", internal::ToValue(column_line_dash_.value()));
  if (row_gap_color_)
    result.Set("rowGapColor", internal::ToValue(*row_gap_color_.value()));
  if (row_hatch_color_)
    result.Set("rowHatchColor", internal::ToValue(*row_hatch_color_.value()));
  if (column_gap_color_)
    result.Set("columnGapColor", internal::ToValue(*column_gap_color_.value()));
  if (column_hatch_color_)
    result.Set("columnHatchColor", internal::ToValue(*column_hatch_color_.value()));
  if (area_border_color_)
    result.Set("areaBorderColor", internal::ToValue(*area_border_color_.value()));
  if (grid_background_color_)
    result.Set("gridBackgroundColor", internal::ToValue(*grid_background_color_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<GridHighlightConfig> GridHighlightConfig::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GridHighlightConfig> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<FlexContainerHighlightConfig> FlexContainerHighlightConfig::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("FlexContainerHighlightConfig");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<FlexContainerHighlightConfig> result(new FlexContainerHighlightConfig());
  errors->Push();
  errors->SetName("FlexContainerHighlightConfig");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* container_border_value = dict.Find("containerBorder");
  if (container_border_value) {
    errors->SetName("containerBorder");
    result->container_border_ = internal::FromValue<::headless::overlay::LineStyle>::Parse(*container_border_value, errors);
  }
  const base::Value* line_separator_value = dict.Find("lineSeparator");
  if (line_separator_value) {
    errors->SetName("lineSeparator");
    result->line_separator_ = internal::FromValue<::headless::overlay::LineStyle>::Parse(*line_separator_value, errors);
  }
  const base::Value* item_separator_value = dict.Find("itemSeparator");
  if (item_separator_value) {
    errors->SetName("itemSeparator");
    result->item_separator_ = internal::FromValue<::headless::overlay::LineStyle>::Parse(*item_separator_value, errors);
  }
  const base::Value* main_distributed_space_value = dict.Find("mainDistributedSpace");
  if (main_distributed_space_value) {
    errors->SetName("mainDistributedSpace");
    result->main_distributed_space_ = internal::FromValue<::headless::overlay::BoxStyle>::Parse(*main_distributed_space_value, errors);
  }
  const base::Value* cross_distributed_space_value = dict.Find("crossDistributedSpace");
  if (cross_distributed_space_value) {
    errors->SetName("crossDistributedSpace");
    result->cross_distributed_space_ = internal::FromValue<::headless::overlay::BoxStyle>::Parse(*cross_distributed_space_value, errors);
  }
  const base::Value* row_gap_space_value = dict.Find("rowGapSpace");
  if (row_gap_space_value) {
    errors->SetName("rowGapSpace");
    result->row_gap_space_ = internal::FromValue<::headless::overlay::BoxStyle>::Parse(*row_gap_space_value, errors);
  }
  const base::Value* column_gap_space_value = dict.Find("columnGapSpace");
  if (column_gap_space_value) {
    errors->SetName("columnGapSpace");
    result->column_gap_space_ = internal::FromValue<::headless::overlay::BoxStyle>::Parse(*column_gap_space_value, errors);
  }
  const base::Value* cross_alignment_value = dict.Find("crossAlignment");
  if (cross_alignment_value) {
    errors->SetName("crossAlignment");
    result->cross_alignment_ = internal::FromValue<::headless::overlay::LineStyle>::Parse(*cross_alignment_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value FlexContainerHighlightConfig::Serialize() const {
  base::Value::Dict result;
  if (container_border_)
    result.Set("containerBorder", internal::ToValue(*container_border_.value()));
  if (line_separator_)
    result.Set("lineSeparator", internal::ToValue(*line_separator_.value()));
  if (item_separator_)
    result.Set("itemSeparator", internal::ToValue(*item_separator_.value()));
  if (main_distributed_space_)
    result.Set("mainDistributedSpace", internal::ToValue(*main_distributed_space_.value()));
  if (cross_distributed_space_)
    result.Set("crossDistributedSpace", internal::ToValue(*cross_distributed_space_.value()));
  if (row_gap_space_)
    result.Set("rowGapSpace", internal::ToValue(*row_gap_space_.value()));
  if (column_gap_space_)
    result.Set("columnGapSpace", internal::ToValue(*column_gap_space_.value()));
  if (cross_alignment_)
    result.Set("crossAlignment", internal::ToValue(*cross_alignment_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<FlexContainerHighlightConfig> FlexContainerHighlightConfig::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<FlexContainerHighlightConfig> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<FlexItemHighlightConfig> FlexItemHighlightConfig::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("FlexItemHighlightConfig");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<FlexItemHighlightConfig> result(new FlexItemHighlightConfig());
  errors->Push();
  errors->SetName("FlexItemHighlightConfig");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* base_size_box_value = dict.Find("baseSizeBox");
  if (base_size_box_value) {
    errors->SetName("baseSizeBox");
    result->base_size_box_ = internal::FromValue<::headless::overlay::BoxStyle>::Parse(*base_size_box_value, errors);
  }
  const base::Value* base_size_border_value = dict.Find("baseSizeBorder");
  if (base_size_border_value) {
    errors->SetName("baseSizeBorder");
    result->base_size_border_ = internal::FromValue<::headless::overlay::LineStyle>::Parse(*base_size_border_value, errors);
  }
  const base::Value* flexibility_arrow_value = dict.Find("flexibilityArrow");
  if (flexibility_arrow_value) {
    errors->SetName("flexibilityArrow");
    result->flexibility_arrow_ = internal::FromValue<::headless::overlay::LineStyle>::Parse(*flexibility_arrow_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value FlexItemHighlightConfig::Serialize() const {
  base::Value::Dict result;
  if (base_size_box_)
    result.Set("baseSizeBox", internal::ToValue(*base_size_box_.value()));
  if (base_size_border_)
    result.Set("baseSizeBorder", internal::ToValue(*base_size_border_.value()));
  if (flexibility_arrow_)
    result.Set("flexibilityArrow", internal::ToValue(*flexibility_arrow_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<FlexItemHighlightConfig> FlexItemHighlightConfig::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<FlexItemHighlightConfig> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<LineStyle> LineStyle::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("LineStyle");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<LineStyle> result(new LineStyle());
  errors->Push();
  errors->SetName("LineStyle");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* color_value = dict.Find("color");
  if (color_value) {
    errors->SetName("color");
    result->color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*color_value, errors);
  }
  const base::Value* pattern_value = dict.Find("pattern");
  if (pattern_value) {
    errors->SetName("pattern");
    result->pattern_ = internal::FromValue<::headless::overlay::LineStylePattern>::Parse(*pattern_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value LineStyle::Serialize() const {
  base::Value::Dict result;
  if (color_)
    result.Set("color", internal::ToValue(*color_.value()));
  if (pattern_)
    result.Set("pattern", internal::ToValue(pattern_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<LineStyle> LineStyle::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<LineStyle> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<BoxStyle> BoxStyle::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("BoxStyle");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<BoxStyle> result(new BoxStyle());
  errors->Push();
  errors->SetName("BoxStyle");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* fill_color_value = dict.Find("fillColor");
  if (fill_color_value) {
    errors->SetName("fillColor");
    result->fill_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*fill_color_value, errors);
  }
  const base::Value* hatch_color_value = dict.Find("hatchColor");
  if (hatch_color_value) {
    errors->SetName("hatchColor");
    result->hatch_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*hatch_color_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value BoxStyle::Serialize() const {
  base::Value::Dict result;
  if (fill_color_)
    result.Set("fillColor", internal::ToValue(*fill_color_.value()));
  if (hatch_color_)
    result.Set("hatchColor", internal::ToValue(*hatch_color_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<BoxStyle> BoxStyle::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<BoxStyle> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<HighlightConfig> HighlightConfig::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("HighlightConfig");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<HighlightConfig> result(new HighlightConfig());
  errors->Push();
  errors->SetName("HighlightConfig");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* show_info_value = dict.Find("showInfo");
  if (show_info_value) {
    errors->SetName("showInfo");
    result->show_info_ = internal::FromValue<bool>::Parse(*show_info_value, errors);
  }
  const base::Value* show_styles_value = dict.Find("showStyles");
  if (show_styles_value) {
    errors->SetName("showStyles");
    result->show_styles_ = internal::FromValue<bool>::Parse(*show_styles_value, errors);
  }
  const base::Value* show_rulers_value = dict.Find("showRulers");
  if (show_rulers_value) {
    errors->SetName("showRulers");
    result->show_rulers_ = internal::FromValue<bool>::Parse(*show_rulers_value, errors);
  }
  const base::Value* show_accessibility_info_value = dict.Find("showAccessibilityInfo");
  if (show_accessibility_info_value) {
    errors->SetName("showAccessibilityInfo");
    result->show_accessibility_info_ = internal::FromValue<bool>::Parse(*show_accessibility_info_value, errors);
  }
  const base::Value* show_extension_lines_value = dict.Find("showExtensionLines");
  if (show_extension_lines_value) {
    errors->SetName("showExtensionLines");
    result->show_extension_lines_ = internal::FromValue<bool>::Parse(*show_extension_lines_value, errors);
  }
  const base::Value* content_color_value = dict.Find("contentColor");
  if (content_color_value) {
    errors->SetName("contentColor");
    result->content_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*content_color_value, errors);
  }
  const base::Value* padding_color_value = dict.Find("paddingColor");
  if (padding_color_value) {
    errors->SetName("paddingColor");
    result->padding_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*padding_color_value, errors);
  }
  const base::Value* border_color_value = dict.Find("borderColor");
  if (border_color_value) {
    errors->SetName("borderColor");
    result->border_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*border_color_value, errors);
  }
  const base::Value* margin_color_value = dict.Find("marginColor");
  if (margin_color_value) {
    errors->SetName("marginColor");
    result->margin_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*margin_color_value, errors);
  }
  const base::Value* event_target_color_value = dict.Find("eventTargetColor");
  if (event_target_color_value) {
    errors->SetName("eventTargetColor");
    result->event_target_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*event_target_color_value, errors);
  }
  const base::Value* shape_color_value = dict.Find("shapeColor");
  if (shape_color_value) {
    errors->SetName("shapeColor");
    result->shape_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*shape_color_value, errors);
  }
  const base::Value* shape_margin_color_value = dict.Find("shapeMarginColor");
  if (shape_margin_color_value) {
    errors->SetName("shapeMarginColor");
    result->shape_margin_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*shape_margin_color_value, errors);
  }
  const base::Value* css_grid_color_value = dict.Find("cssGridColor");
  if (css_grid_color_value) {
    errors->SetName("cssGridColor");
    result->css_grid_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*css_grid_color_value, errors);
  }
  const base::Value* color_format_value = dict.Find("colorFormat");
  if (color_format_value) {
    errors->SetName("colorFormat");
    result->color_format_ = internal::FromValue<::headless::overlay::ColorFormat>::Parse(*color_format_value, errors);
  }
  const base::Value* grid_highlight_config_value = dict.Find("gridHighlightConfig");
  if (grid_highlight_config_value) {
    errors->SetName("gridHighlightConfig");
    result->grid_highlight_config_ = internal::FromValue<::headless::overlay::GridHighlightConfig>::Parse(*grid_highlight_config_value, errors);
  }
  const base::Value* flex_container_highlight_config_value = dict.Find("flexContainerHighlightConfig");
  if (flex_container_highlight_config_value) {
    errors->SetName("flexContainerHighlightConfig");
    result->flex_container_highlight_config_ = internal::FromValue<::headless::overlay::FlexContainerHighlightConfig>::Parse(*flex_container_highlight_config_value, errors);
  }
  const base::Value* flex_item_highlight_config_value = dict.Find("flexItemHighlightConfig");
  if (flex_item_highlight_config_value) {
    errors->SetName("flexItemHighlightConfig");
    result->flex_item_highlight_config_ = internal::FromValue<::headless::overlay::FlexItemHighlightConfig>::Parse(*flex_item_highlight_config_value, errors);
  }
  const base::Value* contrast_algorithm_value = dict.Find("contrastAlgorithm");
  if (contrast_algorithm_value) {
    errors->SetName("contrastAlgorithm");
    result->contrast_algorithm_ = internal::FromValue<::headless::overlay::ContrastAlgorithm>::Parse(*contrast_algorithm_value, errors);
  }
  const base::Value* container_query_container_highlight_config_value = dict.Find("containerQueryContainerHighlightConfig");
  if (container_query_container_highlight_config_value) {
    errors->SetName("containerQueryContainerHighlightConfig");
    result->container_query_container_highlight_config_ = internal::FromValue<::headless::overlay::ContainerQueryContainerHighlightConfig>::Parse(*container_query_container_highlight_config_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value HighlightConfig::Serialize() const {
  base::Value::Dict result;
  if (show_info_)
    result.Set("showInfo", internal::ToValue(show_info_.value()));
  if (show_styles_)
    result.Set("showStyles", internal::ToValue(show_styles_.value()));
  if (show_rulers_)
    result.Set("showRulers", internal::ToValue(show_rulers_.value()));
  if (show_accessibility_info_)
    result.Set("showAccessibilityInfo", internal::ToValue(show_accessibility_info_.value()));
  if (show_extension_lines_)
    result.Set("showExtensionLines", internal::ToValue(show_extension_lines_.value()));
  if (content_color_)
    result.Set("contentColor", internal::ToValue(*content_color_.value()));
  if (padding_color_)
    result.Set("paddingColor", internal::ToValue(*padding_color_.value()));
  if (border_color_)
    result.Set("borderColor", internal::ToValue(*border_color_.value()));
  if (margin_color_)
    result.Set("marginColor", internal::ToValue(*margin_color_.value()));
  if (event_target_color_)
    result.Set("eventTargetColor", internal::ToValue(*event_target_color_.value()));
  if (shape_color_)
    result.Set("shapeColor", internal::ToValue(*shape_color_.value()));
  if (shape_margin_color_)
    result.Set("shapeMarginColor", internal::ToValue(*shape_margin_color_.value()));
  if (css_grid_color_)
    result.Set("cssGridColor", internal::ToValue(*css_grid_color_.value()));
  if (color_format_)
    result.Set("colorFormat", internal::ToValue(color_format_.value()));
  if (grid_highlight_config_)
    result.Set("gridHighlightConfig", internal::ToValue(*grid_highlight_config_.value()));
  if (flex_container_highlight_config_)
    result.Set("flexContainerHighlightConfig", internal::ToValue(*flex_container_highlight_config_.value()));
  if (flex_item_highlight_config_)
    result.Set("flexItemHighlightConfig", internal::ToValue(*flex_item_highlight_config_.value()));
  if (contrast_algorithm_)
    result.Set("contrastAlgorithm", internal::ToValue(contrast_algorithm_.value()));
  if (container_query_container_highlight_config_)
    result.Set("containerQueryContainerHighlightConfig", internal::ToValue(*container_query_container_highlight_config_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<HighlightConfig> HighlightConfig::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<HighlightConfig> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GridNodeHighlightConfig> GridNodeHighlightConfig::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GridNodeHighlightConfig");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GridNodeHighlightConfig> result(new GridNodeHighlightConfig());
  errors->Push();
  errors->SetName("GridNodeHighlightConfig");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* grid_highlight_config_value = dict.Find("gridHighlightConfig");
  if (grid_highlight_config_value) {
    errors->SetName("gridHighlightConfig");
    result->grid_highlight_config_ = internal::FromValue<::headless::overlay::GridHighlightConfig>::Parse(*grid_highlight_config_value, errors);
  } else {
    errors->AddError("required property missing: gridHighlightConfig");
  }
  const base::Value* node_id_value = dict.Find("nodeId");
  if (node_id_value) {
    errors->SetName("nodeId");
    result->node_id_ = internal::FromValue<int>::Parse(*node_id_value, errors);
  } else {
    errors->AddError("required property missing: nodeId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GridNodeHighlightConfig::Serialize() const {
  base::Value::Dict result;
  result.Set("gridHighlightConfig", internal::ToValue(*grid_highlight_config_));
  result.Set("nodeId", internal::ToValue(node_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<GridNodeHighlightConfig> GridNodeHighlightConfig::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GridNodeHighlightConfig> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<FlexNodeHighlightConfig> FlexNodeHighlightConfig::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("FlexNodeHighlightConfig");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<FlexNodeHighlightConfig> result(new FlexNodeHighlightConfig());
  errors->Push();
  errors->SetName("FlexNodeHighlightConfig");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* flex_container_highlight_config_value = dict.Find("flexContainerHighlightConfig");
  if (flex_container_highlight_config_value) {
    errors->SetName("flexContainerHighlightConfig");
    result->flex_container_highlight_config_ = internal::FromValue<::headless::overlay::FlexContainerHighlightConfig>::Parse(*flex_container_highlight_config_value, errors);
  } else {
    errors->AddError("required property missing: flexContainerHighlightConfig");
  }
  const base::Value* node_id_value = dict.Find("nodeId");
  if (node_id_value) {
    errors->SetName("nodeId");
    result->node_id_ = internal::FromValue<int>::Parse(*node_id_value, errors);
  } else {
    errors->AddError("required property missing: nodeId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value FlexNodeHighlightConfig::Serialize() const {
  base::Value::Dict result;
  result.Set("flexContainerHighlightConfig", internal::ToValue(*flex_container_highlight_config_));
  result.Set("nodeId", internal::ToValue(node_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<FlexNodeHighlightConfig> FlexNodeHighlightConfig::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<FlexNodeHighlightConfig> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ScrollSnapContainerHighlightConfig> ScrollSnapContainerHighlightConfig::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ScrollSnapContainerHighlightConfig");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ScrollSnapContainerHighlightConfig> result(new ScrollSnapContainerHighlightConfig());
  errors->Push();
  errors->SetName("ScrollSnapContainerHighlightConfig");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* snapport_border_value = dict.Find("snapportBorder");
  if (snapport_border_value) {
    errors->SetName("snapportBorder");
    result->snapport_border_ = internal::FromValue<::headless::overlay::LineStyle>::Parse(*snapport_border_value, errors);
  }
  const base::Value* snap_area_border_value = dict.Find("snapAreaBorder");
  if (snap_area_border_value) {
    errors->SetName("snapAreaBorder");
    result->snap_area_border_ = internal::FromValue<::headless::overlay::LineStyle>::Parse(*snap_area_border_value, errors);
  }
  const base::Value* scroll_margin_color_value = dict.Find("scrollMarginColor");
  if (scroll_margin_color_value) {
    errors->SetName("scrollMarginColor");
    result->scroll_margin_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*scroll_margin_color_value, errors);
  }
  const base::Value* scroll_padding_color_value = dict.Find("scrollPaddingColor");
  if (scroll_padding_color_value) {
    errors->SetName("scrollPaddingColor");
    result->scroll_padding_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*scroll_padding_color_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ScrollSnapContainerHighlightConfig::Serialize() const {
  base::Value::Dict result;
  if (snapport_border_)
    result.Set("snapportBorder", internal::ToValue(*snapport_border_.value()));
  if (snap_area_border_)
    result.Set("snapAreaBorder", internal::ToValue(*snap_area_border_.value()));
  if (scroll_margin_color_)
    result.Set("scrollMarginColor", internal::ToValue(*scroll_margin_color_.value()));
  if (scroll_padding_color_)
    result.Set("scrollPaddingColor", internal::ToValue(*scroll_padding_color_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<ScrollSnapContainerHighlightConfig> ScrollSnapContainerHighlightConfig::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ScrollSnapContainerHighlightConfig> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ScrollSnapHighlightConfig> ScrollSnapHighlightConfig::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ScrollSnapHighlightConfig");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ScrollSnapHighlightConfig> result(new ScrollSnapHighlightConfig());
  errors->Push();
  errors->SetName("ScrollSnapHighlightConfig");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* scroll_snap_container_highlight_config_value = dict.Find("scrollSnapContainerHighlightConfig");
  if (scroll_snap_container_highlight_config_value) {
    errors->SetName("scrollSnapContainerHighlightConfig");
    result->scroll_snap_container_highlight_config_ = internal::FromValue<::headless::overlay::ScrollSnapContainerHighlightConfig>::Parse(*scroll_snap_container_highlight_config_value, errors);
  } else {
    errors->AddError("required property missing: scrollSnapContainerHighlightConfig");
  }
  const base::Value* node_id_value = dict.Find("nodeId");
  if (node_id_value) {
    errors->SetName("nodeId");
    result->node_id_ = internal::FromValue<int>::Parse(*node_id_value, errors);
  } else {
    errors->AddError("required property missing: nodeId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ScrollSnapHighlightConfig::Serialize() const {
  base::Value::Dict result;
  result.Set("scrollSnapContainerHighlightConfig", internal::ToValue(*scroll_snap_container_highlight_config_));
  result.Set("nodeId", internal::ToValue(node_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<ScrollSnapHighlightConfig> ScrollSnapHighlightConfig::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ScrollSnapHighlightConfig> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<HingeConfig> HingeConfig::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("HingeConfig");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<HingeConfig> result(new HingeConfig());
  errors->Push();
  errors->SetName("HingeConfig");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* rect_value = dict.Find("rect");
  if (rect_value) {
    errors->SetName("rect");
    result->rect_ = internal::FromValue<::headless::dom::Rect>::Parse(*rect_value, errors);
  } else {
    errors->AddError("required property missing: rect");
  }
  const base::Value* content_color_value = dict.Find("contentColor");
  if (content_color_value) {
    errors->SetName("contentColor");
    result->content_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*content_color_value, errors);
  }
  const base::Value* outline_color_value = dict.Find("outlineColor");
  if (outline_color_value) {
    errors->SetName("outlineColor");
    result->outline_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*outline_color_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value HingeConfig::Serialize() const {
  base::Value::Dict result;
  result.Set("rect", internal::ToValue(*rect_));
  if (content_color_)
    result.Set("contentColor", internal::ToValue(*content_color_.value()));
  if (outline_color_)
    result.Set("outlineColor", internal::ToValue(*outline_color_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<HingeConfig> HingeConfig::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<HingeConfig> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<WindowControlsOverlayConfig> WindowControlsOverlayConfig::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("WindowControlsOverlayConfig");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<WindowControlsOverlayConfig> result(new WindowControlsOverlayConfig());
  errors->Push();
  errors->SetName("WindowControlsOverlayConfig");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* showcss_value = dict.Find("showCSS");
  if (showcss_value) {
    errors->SetName("showCSS");
    result->showcss_ = internal::FromValue<bool>::Parse(*showcss_value, errors);
  } else {
    errors->AddError("required property missing: showCSS");
  }
  const base::Value* selected_platform_value = dict.Find("selectedPlatform");
  if (selected_platform_value) {
    errors->SetName("selectedPlatform");
    result->selected_platform_ = internal::FromValue<std::string>::Parse(*selected_platform_value, errors);
  } else {
    errors->AddError("required property missing: selectedPlatform");
  }
  const base::Value* theme_color_value = dict.Find("themeColor");
  if (theme_color_value) {
    errors->SetName("themeColor");
    result->theme_color_ = internal::FromValue<std::string>::Parse(*theme_color_value, errors);
  } else {
    errors->AddError("required property missing: themeColor");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value WindowControlsOverlayConfig::Serialize() const {
  base::Value::Dict result;
  result.Set("showCSS", internal::ToValue(showcss_));
  result.Set("selectedPlatform", internal::ToValue(selected_platform_));
  result.Set("themeColor", internal::ToValue(theme_color_));
  return base::Value(std::move(result));
}

std::unique_ptr<WindowControlsOverlayConfig> WindowControlsOverlayConfig::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<WindowControlsOverlayConfig> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ContainerQueryHighlightConfig> ContainerQueryHighlightConfig::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ContainerQueryHighlightConfig");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ContainerQueryHighlightConfig> result(new ContainerQueryHighlightConfig());
  errors->Push();
  errors->SetName("ContainerQueryHighlightConfig");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* container_query_container_highlight_config_value = dict.Find("containerQueryContainerHighlightConfig");
  if (container_query_container_highlight_config_value) {
    errors->SetName("containerQueryContainerHighlightConfig");
    result->container_query_container_highlight_config_ = internal::FromValue<::headless::overlay::ContainerQueryContainerHighlightConfig>::Parse(*container_query_container_highlight_config_value, errors);
  } else {
    errors->AddError("required property missing: containerQueryContainerHighlightConfig");
  }
  const base::Value* node_id_value = dict.Find("nodeId");
  if (node_id_value) {
    errors->SetName("nodeId");
    result->node_id_ = internal::FromValue<int>::Parse(*node_id_value, errors);
  } else {
    errors->AddError("required property missing: nodeId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ContainerQueryHighlightConfig::Serialize() const {
  base::Value::Dict result;
  result.Set("containerQueryContainerHighlightConfig", internal::ToValue(*container_query_container_highlight_config_));
  result.Set("nodeId", internal::ToValue(node_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<ContainerQueryHighlightConfig> ContainerQueryHighlightConfig::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ContainerQueryHighlightConfig> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ContainerQueryContainerHighlightConfig> ContainerQueryContainerHighlightConfig::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ContainerQueryContainerHighlightConfig");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ContainerQueryContainerHighlightConfig> result(new ContainerQueryContainerHighlightConfig());
  errors->Push();
  errors->SetName("ContainerQueryContainerHighlightConfig");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* container_border_value = dict.Find("containerBorder");
  if (container_border_value) {
    errors->SetName("containerBorder");
    result->container_border_ = internal::FromValue<::headless::overlay::LineStyle>::Parse(*container_border_value, errors);
  }
  const base::Value* descendant_border_value = dict.Find("descendantBorder");
  if (descendant_border_value) {
    errors->SetName("descendantBorder");
    result->descendant_border_ = internal::FromValue<::headless::overlay::LineStyle>::Parse(*descendant_border_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ContainerQueryContainerHighlightConfig::Serialize() const {
  base::Value::Dict result;
  if (container_border_)
    result.Set("containerBorder", internal::ToValue(*container_border_.value()));
  if (descendant_border_)
    result.Set("descendantBorder", internal::ToValue(*descendant_border_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<ContainerQueryContainerHighlightConfig> ContainerQueryContainerHighlightConfig::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ContainerQueryContainerHighlightConfig> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<IsolatedElementHighlightConfig> IsolatedElementHighlightConfig::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("IsolatedElementHighlightConfig");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<IsolatedElementHighlightConfig> result(new IsolatedElementHighlightConfig());
  errors->Push();
  errors->SetName("IsolatedElementHighlightConfig");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* isolation_mode_highlight_config_value = dict.Find("isolationModeHighlightConfig");
  if (isolation_mode_highlight_config_value) {
    errors->SetName("isolationModeHighlightConfig");
    result->isolation_mode_highlight_config_ = internal::FromValue<::headless::overlay::IsolationModeHighlightConfig>::Parse(*isolation_mode_highlight_config_value, errors);
  } else {
    errors->AddError("required property missing: isolationModeHighlightConfig");
  }
  const base::Value* node_id_value = dict.Find("nodeId");
  if (node_id_value) {
    errors->SetName("nodeId");
    result->node_id_ = internal::FromValue<int>::Parse(*node_id_value, errors);
  } else {
    errors->AddError("required property missing: nodeId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value IsolatedElementHighlightConfig::Serialize() const {
  base::Value::Dict result;
  result.Set("isolationModeHighlightConfig", internal::ToValue(*isolation_mode_highlight_config_));
  result.Set("nodeId", internal::ToValue(node_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<IsolatedElementHighlightConfig> IsolatedElementHighlightConfig::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<IsolatedElementHighlightConfig> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<IsolationModeHighlightConfig> IsolationModeHighlightConfig::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("IsolationModeHighlightConfig");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<IsolationModeHighlightConfig> result(new IsolationModeHighlightConfig());
  errors->Push();
  errors->SetName("IsolationModeHighlightConfig");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* resizer_color_value = dict.Find("resizerColor");
  if (resizer_color_value) {
    errors->SetName("resizerColor");
    result->resizer_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*resizer_color_value, errors);
  }
  const base::Value* resizer_handle_color_value = dict.Find("resizerHandleColor");
  if (resizer_handle_color_value) {
    errors->SetName("resizerHandleColor");
    result->resizer_handle_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*resizer_handle_color_value, errors);
  }
  const base::Value* mask_color_value = dict.Find("maskColor");
  if (mask_color_value) {
    errors->SetName("maskColor");
    result->mask_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*mask_color_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value IsolationModeHighlightConfig::Serialize() const {
  base::Value::Dict result;
  if (resizer_color_)
    result.Set("resizerColor", internal::ToValue(*resizer_color_.value()));
  if (resizer_handle_color_)
    result.Set("resizerHandleColor", internal::ToValue(*resizer_handle_color_.value()));
  if (mask_color_)
    result.Set("maskColor", internal::ToValue(*mask_color_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<IsolationModeHighlightConfig> IsolationModeHighlightConfig::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<IsolationModeHighlightConfig> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DisableParams> DisableParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DisableParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DisableParams> result(new DisableParams());
  errors->Push();
  errors->SetName("DisableParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DisableParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<DisableParams> DisableParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DisableParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DisableResult> DisableResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DisableResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DisableResult> result(new DisableResult());
  errors->Push();
  errors->SetName("DisableResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DisableResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<DisableResult> DisableResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DisableResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<EnableParams> EnableParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("EnableParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<EnableParams> result(new EnableParams());
  errors->Push();
  errors->SetName("EnableParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value EnableParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<EnableParams> EnableParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<EnableParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<EnableResult> EnableResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("EnableResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<EnableResult> result(new EnableResult());
  errors->Push();
  errors->SetName("EnableResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value EnableResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<EnableResult> EnableResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<EnableResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetHighlightObjectForTestParams> GetHighlightObjectForTestParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetHighlightObjectForTestParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetHighlightObjectForTestParams> result(new GetHighlightObjectForTestParams());
  errors->Push();
  errors->SetName("GetHighlightObjectForTestParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* node_id_value = dict.Find("nodeId");
  if (node_id_value) {
    errors->SetName("nodeId");
    result->node_id_ = internal::FromValue<int>::Parse(*node_id_value, errors);
  } else {
    errors->AddError("required property missing: nodeId");
  }
  const base::Value* include_distance_value = dict.Find("includeDistance");
  if (include_distance_value) {
    errors->SetName("includeDistance");
    result->include_distance_ = internal::FromValue<bool>::Parse(*include_distance_value, errors);
  }
  const base::Value* include_style_value = dict.Find("includeStyle");
  if (include_style_value) {
    errors->SetName("includeStyle");
    result->include_style_ = internal::FromValue<bool>::Parse(*include_style_value, errors);
  }
  const base::Value* color_format_value = dict.Find("colorFormat");
  if (color_format_value) {
    errors->SetName("colorFormat");
    result->color_format_ = internal::FromValue<::headless::overlay::ColorFormat>::Parse(*color_format_value, errors);
  }
  const base::Value* show_accessibility_info_value = dict.Find("showAccessibilityInfo");
  if (show_accessibility_info_value) {
    errors->SetName("showAccessibilityInfo");
    result->show_accessibility_info_ = internal::FromValue<bool>::Parse(*show_accessibility_info_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetHighlightObjectForTestParams::Serialize() const {
  base::Value::Dict result;
  result.Set("nodeId", internal::ToValue(node_id_));
  if (include_distance_)
    result.Set("includeDistance", internal::ToValue(include_distance_.value()));
  if (include_style_)
    result.Set("includeStyle", internal::ToValue(include_style_.value()));
  if (color_format_)
    result.Set("colorFormat", internal::ToValue(color_format_.value()));
  if (show_accessibility_info_)
    result.Set("showAccessibilityInfo", internal::ToValue(show_accessibility_info_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<GetHighlightObjectForTestParams> GetHighlightObjectForTestParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetHighlightObjectForTestParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetHighlightObjectForTestResult> GetHighlightObjectForTestResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetHighlightObjectForTestResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetHighlightObjectForTestResult> result(new GetHighlightObjectForTestResult());
  errors->Push();
  errors->SetName("GetHighlightObjectForTestResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* highlight_value = dict.Find("highlight");
  if (highlight_value) {
    errors->SetName("highlight");
    result->highlight_ = internal::FromValue<base::Value>::Parse(*highlight_value, errors);
  } else {
    errors->AddError("required property missing: highlight");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetHighlightObjectForTestResult::Serialize() const {
  base::Value::Dict result;
  result.Set("highlight", internal::ToValue(*highlight_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetHighlightObjectForTestResult> GetHighlightObjectForTestResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetHighlightObjectForTestResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetGridHighlightObjectsForTestParams> GetGridHighlightObjectsForTestParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetGridHighlightObjectsForTestParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetGridHighlightObjectsForTestParams> result(new GetGridHighlightObjectsForTestParams());
  errors->Push();
  errors->SetName("GetGridHighlightObjectsForTestParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* node_ids_value = dict.Find("nodeIds");
  if (node_ids_value) {
    errors->SetName("nodeIds");
    result->node_ids_ = internal::FromValue<std::vector<int>>::Parse(*node_ids_value, errors);
  } else {
    errors->AddError("required property missing: nodeIds");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetGridHighlightObjectsForTestParams::Serialize() const {
  base::Value::Dict result;
  result.Set("nodeIds", internal::ToValue(node_ids_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetGridHighlightObjectsForTestParams> GetGridHighlightObjectsForTestParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetGridHighlightObjectsForTestParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetGridHighlightObjectsForTestResult> GetGridHighlightObjectsForTestResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetGridHighlightObjectsForTestResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetGridHighlightObjectsForTestResult> result(new GetGridHighlightObjectsForTestResult());
  errors->Push();
  errors->SetName("GetGridHighlightObjectsForTestResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* highlights_value = dict.Find("highlights");
  if (highlights_value) {
    errors->SetName("highlights");
    result->highlights_ = internal::FromValue<base::Value>::Parse(*highlights_value, errors);
  } else {
    errors->AddError("required property missing: highlights");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetGridHighlightObjectsForTestResult::Serialize() const {
  base::Value::Dict result;
  result.Set("highlights", internal::ToValue(*highlights_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetGridHighlightObjectsForTestResult> GetGridHighlightObjectsForTestResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetGridHighlightObjectsForTestResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetSourceOrderHighlightObjectForTestParams> GetSourceOrderHighlightObjectForTestParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetSourceOrderHighlightObjectForTestParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetSourceOrderHighlightObjectForTestParams> result(new GetSourceOrderHighlightObjectForTestParams());
  errors->Push();
  errors->SetName("GetSourceOrderHighlightObjectForTestParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* node_id_value = dict.Find("nodeId");
  if (node_id_value) {
    errors->SetName("nodeId");
    result->node_id_ = internal::FromValue<int>::Parse(*node_id_value, errors);
  } else {
    errors->AddError("required property missing: nodeId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetSourceOrderHighlightObjectForTestParams::Serialize() const {
  base::Value::Dict result;
  result.Set("nodeId", internal::ToValue(node_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetSourceOrderHighlightObjectForTestParams> GetSourceOrderHighlightObjectForTestParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetSourceOrderHighlightObjectForTestParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetSourceOrderHighlightObjectForTestResult> GetSourceOrderHighlightObjectForTestResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetSourceOrderHighlightObjectForTestResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetSourceOrderHighlightObjectForTestResult> result(new GetSourceOrderHighlightObjectForTestResult());
  errors->Push();
  errors->SetName("GetSourceOrderHighlightObjectForTestResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* highlight_value = dict.Find("highlight");
  if (highlight_value) {
    errors->SetName("highlight");
    result->highlight_ = internal::FromValue<base::Value>::Parse(*highlight_value, errors);
  } else {
    errors->AddError("required property missing: highlight");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetSourceOrderHighlightObjectForTestResult::Serialize() const {
  base::Value::Dict result;
  result.Set("highlight", internal::ToValue(*highlight_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetSourceOrderHighlightObjectForTestResult> GetSourceOrderHighlightObjectForTestResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetSourceOrderHighlightObjectForTestResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<HideHighlightParams> HideHighlightParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("HideHighlightParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<HideHighlightParams> result(new HideHighlightParams());
  errors->Push();
  errors->SetName("HideHighlightParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value HideHighlightParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<HideHighlightParams> HideHighlightParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<HideHighlightParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<HideHighlightResult> HideHighlightResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("HideHighlightResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<HideHighlightResult> result(new HideHighlightResult());
  errors->Push();
  errors->SetName("HideHighlightResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value HideHighlightResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<HideHighlightResult> HideHighlightResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<HideHighlightResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<HighlightFrameParams> HighlightFrameParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("HighlightFrameParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<HighlightFrameParams> result(new HighlightFrameParams());
  errors->Push();
  errors->SetName("HighlightFrameParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  } else {
    errors->AddError("required property missing: frameId");
  }
  const base::Value* content_color_value = dict.Find("contentColor");
  if (content_color_value) {
    errors->SetName("contentColor");
    result->content_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*content_color_value, errors);
  }
  const base::Value* content_outline_color_value = dict.Find("contentOutlineColor");
  if (content_outline_color_value) {
    errors->SetName("contentOutlineColor");
    result->content_outline_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*content_outline_color_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value HighlightFrameParams::Serialize() const {
  base::Value::Dict result;
  result.Set("frameId", internal::ToValue(frame_id_));
  if (content_color_)
    result.Set("contentColor", internal::ToValue(*content_color_.value()));
  if (content_outline_color_)
    result.Set("contentOutlineColor", internal::ToValue(*content_outline_color_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<HighlightFrameParams> HighlightFrameParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<HighlightFrameParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<HighlightFrameResult> HighlightFrameResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("HighlightFrameResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<HighlightFrameResult> result(new HighlightFrameResult());
  errors->Push();
  errors->SetName("HighlightFrameResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value HighlightFrameResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<HighlightFrameResult> HighlightFrameResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<HighlightFrameResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<HighlightNodeParams> HighlightNodeParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("HighlightNodeParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<HighlightNodeParams> result(new HighlightNodeParams());
  errors->Push();
  errors->SetName("HighlightNodeParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* highlight_config_value = dict.Find("highlightConfig");
  if (highlight_config_value) {
    errors->SetName("highlightConfig");
    result->highlight_config_ = internal::FromValue<::headless::overlay::HighlightConfig>::Parse(*highlight_config_value, errors);
  } else {
    errors->AddError("required property missing: highlightConfig");
  }
  const base::Value* node_id_value = dict.Find("nodeId");
  if (node_id_value) {
    errors->SetName("nodeId");
    result->node_id_ = internal::FromValue<int>::Parse(*node_id_value, errors);
  }
  const base::Value* backend_node_id_value = dict.Find("backendNodeId");
  if (backend_node_id_value) {
    errors->SetName("backendNodeId");
    result->backend_node_id_ = internal::FromValue<int>::Parse(*backend_node_id_value, errors);
  }
  const base::Value* object_id_value = dict.Find("objectId");
  if (object_id_value) {
    errors->SetName("objectId");
    result->object_id_ = internal::FromValue<std::string>::Parse(*object_id_value, errors);
  }
  const base::Value* selector_value = dict.Find("selector");
  if (selector_value) {
    errors->SetName("selector");
    result->selector_ = internal::FromValue<std::string>::Parse(*selector_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value HighlightNodeParams::Serialize() const {
  base::Value::Dict result;
  result.Set("highlightConfig", internal::ToValue(*highlight_config_));
  if (node_id_)
    result.Set("nodeId", internal::ToValue(node_id_.value()));
  if (backend_node_id_)
    result.Set("backendNodeId", internal::ToValue(backend_node_id_.value()));
  if (object_id_)
    result.Set("objectId", internal::ToValue(object_id_.value()));
  if (selector_)
    result.Set("selector", internal::ToValue(selector_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<HighlightNodeParams> HighlightNodeParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<HighlightNodeParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<HighlightNodeResult> HighlightNodeResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("HighlightNodeResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<HighlightNodeResult> result(new HighlightNodeResult());
  errors->Push();
  errors->SetName("HighlightNodeResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value HighlightNodeResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<HighlightNodeResult> HighlightNodeResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<HighlightNodeResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<HighlightQuadParams> HighlightQuadParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("HighlightQuadParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<HighlightQuadParams> result(new HighlightQuadParams());
  errors->Push();
  errors->SetName("HighlightQuadParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* quad_value = dict.Find("quad");
  if (quad_value) {
    errors->SetName("quad");
    result->quad_ = internal::FromValue<std::vector<double>>::Parse(*quad_value, errors);
  } else {
    errors->AddError("required property missing: quad");
  }
  const base::Value* color_value = dict.Find("color");
  if (color_value) {
    errors->SetName("color");
    result->color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*color_value, errors);
  }
  const base::Value* outline_color_value = dict.Find("outlineColor");
  if (outline_color_value) {
    errors->SetName("outlineColor");
    result->outline_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*outline_color_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value HighlightQuadParams::Serialize() const {
  base::Value::Dict result;
  result.Set("quad", internal::ToValue(quad_));
  if (color_)
    result.Set("color", internal::ToValue(*color_.value()));
  if (outline_color_)
    result.Set("outlineColor", internal::ToValue(*outline_color_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<HighlightQuadParams> HighlightQuadParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<HighlightQuadParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<HighlightQuadResult> HighlightQuadResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("HighlightQuadResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<HighlightQuadResult> result(new HighlightQuadResult());
  errors->Push();
  errors->SetName("HighlightQuadResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value HighlightQuadResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<HighlightQuadResult> HighlightQuadResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<HighlightQuadResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<HighlightRectParams> HighlightRectParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("HighlightRectParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<HighlightRectParams> result(new HighlightRectParams());
  errors->Push();
  errors->SetName("HighlightRectParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* x_value = dict.Find("x");
  if (x_value) {
    errors->SetName("x");
    result->x_ = internal::FromValue<int>::Parse(*x_value, errors);
  } else {
    errors->AddError("required property missing: x");
  }
  const base::Value* y_value = dict.Find("y");
  if (y_value) {
    errors->SetName("y");
    result->y_ = internal::FromValue<int>::Parse(*y_value, errors);
  } else {
    errors->AddError("required property missing: y");
  }
  const base::Value* width_value = dict.Find("width");
  if (width_value) {
    errors->SetName("width");
    result->width_ = internal::FromValue<int>::Parse(*width_value, errors);
  } else {
    errors->AddError("required property missing: width");
  }
  const base::Value* height_value = dict.Find("height");
  if (height_value) {
    errors->SetName("height");
    result->height_ = internal::FromValue<int>::Parse(*height_value, errors);
  } else {
    errors->AddError("required property missing: height");
  }
  const base::Value* color_value = dict.Find("color");
  if (color_value) {
    errors->SetName("color");
    result->color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*color_value, errors);
  }
  const base::Value* outline_color_value = dict.Find("outlineColor");
  if (outline_color_value) {
    errors->SetName("outlineColor");
    result->outline_color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*outline_color_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value HighlightRectParams::Serialize() const {
  base::Value::Dict result;
  result.Set("x", internal::ToValue(x_));
  result.Set("y", internal::ToValue(y_));
  result.Set("width", internal::ToValue(width_));
  result.Set("height", internal::ToValue(height_));
  if (color_)
    result.Set("color", internal::ToValue(*color_.value()));
  if (outline_color_)
    result.Set("outlineColor", internal::ToValue(*outline_color_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<HighlightRectParams> HighlightRectParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<HighlightRectParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<HighlightRectResult> HighlightRectResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("HighlightRectResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<HighlightRectResult> result(new HighlightRectResult());
  errors->Push();
  errors->SetName("HighlightRectResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value HighlightRectResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<HighlightRectResult> HighlightRectResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<HighlightRectResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<HighlightSourceOrderParams> HighlightSourceOrderParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("HighlightSourceOrderParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<HighlightSourceOrderParams> result(new HighlightSourceOrderParams());
  errors->Push();
  errors->SetName("HighlightSourceOrderParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* source_order_config_value = dict.Find("sourceOrderConfig");
  if (source_order_config_value) {
    errors->SetName("sourceOrderConfig");
    result->source_order_config_ = internal::FromValue<::headless::overlay::SourceOrderConfig>::Parse(*source_order_config_value, errors);
  } else {
    errors->AddError("required property missing: sourceOrderConfig");
  }
  const base::Value* node_id_value = dict.Find("nodeId");
  if (node_id_value) {
    errors->SetName("nodeId");
    result->node_id_ = internal::FromValue<int>::Parse(*node_id_value, errors);
  }
  const base::Value* backend_node_id_value = dict.Find("backendNodeId");
  if (backend_node_id_value) {
    errors->SetName("backendNodeId");
    result->backend_node_id_ = internal::FromValue<int>::Parse(*backend_node_id_value, errors);
  }
  const base::Value* object_id_value = dict.Find("objectId");
  if (object_id_value) {
    errors->SetName("objectId");
    result->object_id_ = internal::FromValue<std::string>::Parse(*object_id_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value HighlightSourceOrderParams::Serialize() const {
  base::Value::Dict result;
  result.Set("sourceOrderConfig", internal::ToValue(*source_order_config_));
  if (node_id_)
    result.Set("nodeId", internal::ToValue(node_id_.value()));
  if (backend_node_id_)
    result.Set("backendNodeId", internal::ToValue(backend_node_id_.value()));
  if (object_id_)
    result.Set("objectId", internal::ToValue(object_id_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<HighlightSourceOrderParams> HighlightSourceOrderParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<HighlightSourceOrderParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<HighlightSourceOrderResult> HighlightSourceOrderResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("HighlightSourceOrderResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<HighlightSourceOrderResult> result(new HighlightSourceOrderResult());
  errors->Push();
  errors->SetName("HighlightSourceOrderResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value HighlightSourceOrderResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<HighlightSourceOrderResult> HighlightSourceOrderResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<HighlightSourceOrderResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetInspectModeParams> SetInspectModeParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetInspectModeParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetInspectModeParams> result(new SetInspectModeParams());
  errors->Push();
  errors->SetName("SetInspectModeParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* mode_value = dict.Find("mode");
  if (mode_value) {
    errors->SetName("mode");
    result->mode_ = internal::FromValue<::headless::overlay::InspectMode>::Parse(*mode_value, errors);
  } else {
    errors->AddError("required property missing: mode");
  }
  const base::Value* highlight_config_value = dict.Find("highlightConfig");
  if (highlight_config_value) {
    errors->SetName("highlightConfig");
    result->highlight_config_ = internal::FromValue<::headless::overlay::HighlightConfig>::Parse(*highlight_config_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetInspectModeParams::Serialize() const {
  base::Value::Dict result;
  result.Set("mode", internal::ToValue(mode_));
  if (highlight_config_)
    result.Set("highlightConfig", internal::ToValue(*highlight_config_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetInspectModeParams> SetInspectModeParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetInspectModeParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetInspectModeResult> SetInspectModeResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetInspectModeResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetInspectModeResult> result(new SetInspectModeResult());
  errors->Push();
  errors->SetName("SetInspectModeResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetInspectModeResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetInspectModeResult> SetInspectModeResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetInspectModeResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowAdHighlightsParams> SetShowAdHighlightsParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowAdHighlightsParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowAdHighlightsParams> result(new SetShowAdHighlightsParams());
  errors->Push();
  errors->SetName("SetShowAdHighlightsParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* show_value = dict.Find("show");
  if (show_value) {
    errors->SetName("show");
    result->show_ = internal::FromValue<bool>::Parse(*show_value, errors);
  } else {
    errors->AddError("required property missing: show");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowAdHighlightsParams::Serialize() const {
  base::Value::Dict result;
  result.Set("show", internal::ToValue(show_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowAdHighlightsParams> SetShowAdHighlightsParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowAdHighlightsParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowAdHighlightsResult> SetShowAdHighlightsResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowAdHighlightsResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowAdHighlightsResult> result(new SetShowAdHighlightsResult());
  errors->Push();
  errors->SetName("SetShowAdHighlightsResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowAdHighlightsResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowAdHighlightsResult> SetShowAdHighlightsResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowAdHighlightsResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetPausedInDebuggerMessageParams> SetPausedInDebuggerMessageParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetPausedInDebuggerMessageParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetPausedInDebuggerMessageParams> result(new SetPausedInDebuggerMessageParams());
  errors->Push();
  errors->SetName("SetPausedInDebuggerMessageParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* message_value = dict.Find("message");
  if (message_value) {
    errors->SetName("message");
    result->message_ = internal::FromValue<std::string>::Parse(*message_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetPausedInDebuggerMessageParams::Serialize() const {
  base::Value::Dict result;
  if (message_)
    result.Set("message", internal::ToValue(message_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetPausedInDebuggerMessageParams> SetPausedInDebuggerMessageParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetPausedInDebuggerMessageParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetPausedInDebuggerMessageResult> SetPausedInDebuggerMessageResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetPausedInDebuggerMessageResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetPausedInDebuggerMessageResult> result(new SetPausedInDebuggerMessageResult());
  errors->Push();
  errors->SetName("SetPausedInDebuggerMessageResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetPausedInDebuggerMessageResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetPausedInDebuggerMessageResult> SetPausedInDebuggerMessageResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetPausedInDebuggerMessageResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowDebugBordersParams> SetShowDebugBordersParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowDebugBordersParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowDebugBordersParams> result(new SetShowDebugBordersParams());
  errors->Push();
  errors->SetName("SetShowDebugBordersParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* show_value = dict.Find("show");
  if (show_value) {
    errors->SetName("show");
    result->show_ = internal::FromValue<bool>::Parse(*show_value, errors);
  } else {
    errors->AddError("required property missing: show");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowDebugBordersParams::Serialize() const {
  base::Value::Dict result;
  result.Set("show", internal::ToValue(show_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowDebugBordersParams> SetShowDebugBordersParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowDebugBordersParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowDebugBordersResult> SetShowDebugBordersResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowDebugBordersResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowDebugBordersResult> result(new SetShowDebugBordersResult());
  errors->Push();
  errors->SetName("SetShowDebugBordersResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowDebugBordersResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowDebugBordersResult> SetShowDebugBordersResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowDebugBordersResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowFPSCounterParams> SetShowFPSCounterParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowFPSCounterParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowFPSCounterParams> result(new SetShowFPSCounterParams());
  errors->Push();
  errors->SetName("SetShowFPSCounterParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* show_value = dict.Find("show");
  if (show_value) {
    errors->SetName("show");
    result->show_ = internal::FromValue<bool>::Parse(*show_value, errors);
  } else {
    errors->AddError("required property missing: show");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowFPSCounterParams::Serialize() const {
  base::Value::Dict result;
  result.Set("show", internal::ToValue(show_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowFPSCounterParams> SetShowFPSCounterParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowFPSCounterParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowFPSCounterResult> SetShowFPSCounterResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowFPSCounterResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowFPSCounterResult> result(new SetShowFPSCounterResult());
  errors->Push();
  errors->SetName("SetShowFPSCounterResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowFPSCounterResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowFPSCounterResult> SetShowFPSCounterResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowFPSCounterResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowGridOverlaysParams> SetShowGridOverlaysParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowGridOverlaysParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowGridOverlaysParams> result(new SetShowGridOverlaysParams());
  errors->Push();
  errors->SetName("SetShowGridOverlaysParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* grid_node_highlight_configs_value = dict.Find("gridNodeHighlightConfigs");
  if (grid_node_highlight_configs_value) {
    errors->SetName("gridNodeHighlightConfigs");
    result->grid_node_highlight_configs_ = internal::FromValue<std::vector<std::unique_ptr<::headless::overlay::GridNodeHighlightConfig>>>::Parse(*grid_node_highlight_configs_value, errors);
  } else {
    errors->AddError("required property missing: gridNodeHighlightConfigs");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowGridOverlaysParams::Serialize() const {
  base::Value::Dict result;
  result.Set("gridNodeHighlightConfigs", internal::ToValue(grid_node_highlight_configs_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowGridOverlaysParams> SetShowGridOverlaysParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowGridOverlaysParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowGridOverlaysResult> SetShowGridOverlaysResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowGridOverlaysResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowGridOverlaysResult> result(new SetShowGridOverlaysResult());
  errors->Push();
  errors->SetName("SetShowGridOverlaysResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowGridOverlaysResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowGridOverlaysResult> SetShowGridOverlaysResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowGridOverlaysResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowFlexOverlaysParams> SetShowFlexOverlaysParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowFlexOverlaysParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowFlexOverlaysParams> result(new SetShowFlexOverlaysParams());
  errors->Push();
  errors->SetName("SetShowFlexOverlaysParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* flex_node_highlight_configs_value = dict.Find("flexNodeHighlightConfigs");
  if (flex_node_highlight_configs_value) {
    errors->SetName("flexNodeHighlightConfigs");
    result->flex_node_highlight_configs_ = internal::FromValue<std::vector<std::unique_ptr<::headless::overlay::FlexNodeHighlightConfig>>>::Parse(*flex_node_highlight_configs_value, errors);
  } else {
    errors->AddError("required property missing: flexNodeHighlightConfigs");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowFlexOverlaysParams::Serialize() const {
  base::Value::Dict result;
  result.Set("flexNodeHighlightConfigs", internal::ToValue(flex_node_highlight_configs_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowFlexOverlaysParams> SetShowFlexOverlaysParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowFlexOverlaysParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowFlexOverlaysResult> SetShowFlexOverlaysResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowFlexOverlaysResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowFlexOverlaysResult> result(new SetShowFlexOverlaysResult());
  errors->Push();
  errors->SetName("SetShowFlexOverlaysResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowFlexOverlaysResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowFlexOverlaysResult> SetShowFlexOverlaysResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowFlexOverlaysResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowScrollSnapOverlaysParams> SetShowScrollSnapOverlaysParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowScrollSnapOverlaysParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowScrollSnapOverlaysParams> result(new SetShowScrollSnapOverlaysParams());
  errors->Push();
  errors->SetName("SetShowScrollSnapOverlaysParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* scroll_snap_highlight_configs_value = dict.Find("scrollSnapHighlightConfigs");
  if (scroll_snap_highlight_configs_value) {
    errors->SetName("scrollSnapHighlightConfigs");
    result->scroll_snap_highlight_configs_ = internal::FromValue<std::vector<std::unique_ptr<::headless::overlay::ScrollSnapHighlightConfig>>>::Parse(*scroll_snap_highlight_configs_value, errors);
  } else {
    errors->AddError("required property missing: scrollSnapHighlightConfigs");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowScrollSnapOverlaysParams::Serialize() const {
  base::Value::Dict result;
  result.Set("scrollSnapHighlightConfigs", internal::ToValue(scroll_snap_highlight_configs_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowScrollSnapOverlaysParams> SetShowScrollSnapOverlaysParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowScrollSnapOverlaysParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowScrollSnapOverlaysResult> SetShowScrollSnapOverlaysResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowScrollSnapOverlaysResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowScrollSnapOverlaysResult> result(new SetShowScrollSnapOverlaysResult());
  errors->Push();
  errors->SetName("SetShowScrollSnapOverlaysResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowScrollSnapOverlaysResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowScrollSnapOverlaysResult> SetShowScrollSnapOverlaysResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowScrollSnapOverlaysResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowContainerQueryOverlaysParams> SetShowContainerQueryOverlaysParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowContainerQueryOverlaysParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowContainerQueryOverlaysParams> result(new SetShowContainerQueryOverlaysParams());
  errors->Push();
  errors->SetName("SetShowContainerQueryOverlaysParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* container_query_highlight_configs_value = dict.Find("containerQueryHighlightConfigs");
  if (container_query_highlight_configs_value) {
    errors->SetName("containerQueryHighlightConfigs");
    result->container_query_highlight_configs_ = internal::FromValue<std::vector<std::unique_ptr<::headless::overlay::ContainerQueryHighlightConfig>>>::Parse(*container_query_highlight_configs_value, errors);
  } else {
    errors->AddError("required property missing: containerQueryHighlightConfigs");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowContainerQueryOverlaysParams::Serialize() const {
  base::Value::Dict result;
  result.Set("containerQueryHighlightConfigs", internal::ToValue(container_query_highlight_configs_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowContainerQueryOverlaysParams> SetShowContainerQueryOverlaysParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowContainerQueryOverlaysParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowContainerQueryOverlaysResult> SetShowContainerQueryOverlaysResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowContainerQueryOverlaysResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowContainerQueryOverlaysResult> result(new SetShowContainerQueryOverlaysResult());
  errors->Push();
  errors->SetName("SetShowContainerQueryOverlaysResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowContainerQueryOverlaysResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowContainerQueryOverlaysResult> SetShowContainerQueryOverlaysResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowContainerQueryOverlaysResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowPaintRectsParams> SetShowPaintRectsParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowPaintRectsParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowPaintRectsParams> result(new SetShowPaintRectsParams());
  errors->Push();
  errors->SetName("SetShowPaintRectsParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* result_value = dict.Find("result");
  if (result_value) {
    errors->SetName("result");
    result->result_ = internal::FromValue<bool>::Parse(*result_value, errors);
  } else {
    errors->AddError("required property missing: result");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowPaintRectsParams::Serialize() const {
  base::Value::Dict result;
  result.Set("result", internal::ToValue(result_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowPaintRectsParams> SetShowPaintRectsParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowPaintRectsParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowPaintRectsResult> SetShowPaintRectsResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowPaintRectsResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowPaintRectsResult> result(new SetShowPaintRectsResult());
  errors->Push();
  errors->SetName("SetShowPaintRectsResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowPaintRectsResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowPaintRectsResult> SetShowPaintRectsResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowPaintRectsResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowLayoutShiftRegionsParams> SetShowLayoutShiftRegionsParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowLayoutShiftRegionsParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowLayoutShiftRegionsParams> result(new SetShowLayoutShiftRegionsParams());
  errors->Push();
  errors->SetName("SetShowLayoutShiftRegionsParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* result_value = dict.Find("result");
  if (result_value) {
    errors->SetName("result");
    result->result_ = internal::FromValue<bool>::Parse(*result_value, errors);
  } else {
    errors->AddError("required property missing: result");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowLayoutShiftRegionsParams::Serialize() const {
  base::Value::Dict result;
  result.Set("result", internal::ToValue(result_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowLayoutShiftRegionsParams> SetShowLayoutShiftRegionsParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowLayoutShiftRegionsParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowLayoutShiftRegionsResult> SetShowLayoutShiftRegionsResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowLayoutShiftRegionsResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowLayoutShiftRegionsResult> result(new SetShowLayoutShiftRegionsResult());
  errors->Push();
  errors->SetName("SetShowLayoutShiftRegionsResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowLayoutShiftRegionsResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowLayoutShiftRegionsResult> SetShowLayoutShiftRegionsResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowLayoutShiftRegionsResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowScrollBottleneckRectsParams> SetShowScrollBottleneckRectsParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowScrollBottleneckRectsParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowScrollBottleneckRectsParams> result(new SetShowScrollBottleneckRectsParams());
  errors->Push();
  errors->SetName("SetShowScrollBottleneckRectsParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* show_value = dict.Find("show");
  if (show_value) {
    errors->SetName("show");
    result->show_ = internal::FromValue<bool>::Parse(*show_value, errors);
  } else {
    errors->AddError("required property missing: show");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowScrollBottleneckRectsParams::Serialize() const {
  base::Value::Dict result;
  result.Set("show", internal::ToValue(show_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowScrollBottleneckRectsParams> SetShowScrollBottleneckRectsParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowScrollBottleneckRectsParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowScrollBottleneckRectsResult> SetShowScrollBottleneckRectsResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowScrollBottleneckRectsResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowScrollBottleneckRectsResult> result(new SetShowScrollBottleneckRectsResult());
  errors->Push();
  errors->SetName("SetShowScrollBottleneckRectsResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowScrollBottleneckRectsResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowScrollBottleneckRectsResult> SetShowScrollBottleneckRectsResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowScrollBottleneckRectsResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowHitTestBordersParams> SetShowHitTestBordersParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowHitTestBordersParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowHitTestBordersParams> result(new SetShowHitTestBordersParams());
  errors->Push();
  errors->SetName("SetShowHitTestBordersParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* show_value = dict.Find("show");
  if (show_value) {
    errors->SetName("show");
    result->show_ = internal::FromValue<bool>::Parse(*show_value, errors);
  } else {
    errors->AddError("required property missing: show");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowHitTestBordersParams::Serialize() const {
  base::Value::Dict result;
  result.Set("show", internal::ToValue(show_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowHitTestBordersParams> SetShowHitTestBordersParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowHitTestBordersParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowHitTestBordersResult> SetShowHitTestBordersResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowHitTestBordersResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowHitTestBordersResult> result(new SetShowHitTestBordersResult());
  errors->Push();
  errors->SetName("SetShowHitTestBordersResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowHitTestBordersResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowHitTestBordersResult> SetShowHitTestBordersResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowHitTestBordersResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowWebVitalsParams> SetShowWebVitalsParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowWebVitalsParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowWebVitalsParams> result(new SetShowWebVitalsParams());
  errors->Push();
  errors->SetName("SetShowWebVitalsParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* show_value = dict.Find("show");
  if (show_value) {
    errors->SetName("show");
    result->show_ = internal::FromValue<bool>::Parse(*show_value, errors);
  } else {
    errors->AddError("required property missing: show");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowWebVitalsParams::Serialize() const {
  base::Value::Dict result;
  result.Set("show", internal::ToValue(show_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowWebVitalsParams> SetShowWebVitalsParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowWebVitalsParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowWebVitalsResult> SetShowWebVitalsResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowWebVitalsResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowWebVitalsResult> result(new SetShowWebVitalsResult());
  errors->Push();
  errors->SetName("SetShowWebVitalsResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowWebVitalsResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowWebVitalsResult> SetShowWebVitalsResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowWebVitalsResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowViewportSizeOnResizeParams> SetShowViewportSizeOnResizeParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowViewportSizeOnResizeParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowViewportSizeOnResizeParams> result(new SetShowViewportSizeOnResizeParams());
  errors->Push();
  errors->SetName("SetShowViewportSizeOnResizeParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* show_value = dict.Find("show");
  if (show_value) {
    errors->SetName("show");
    result->show_ = internal::FromValue<bool>::Parse(*show_value, errors);
  } else {
    errors->AddError("required property missing: show");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowViewportSizeOnResizeParams::Serialize() const {
  base::Value::Dict result;
  result.Set("show", internal::ToValue(show_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowViewportSizeOnResizeParams> SetShowViewportSizeOnResizeParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowViewportSizeOnResizeParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowViewportSizeOnResizeResult> SetShowViewportSizeOnResizeResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowViewportSizeOnResizeResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowViewportSizeOnResizeResult> result(new SetShowViewportSizeOnResizeResult());
  errors->Push();
  errors->SetName("SetShowViewportSizeOnResizeResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowViewportSizeOnResizeResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowViewportSizeOnResizeResult> SetShowViewportSizeOnResizeResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowViewportSizeOnResizeResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowHingeParams> SetShowHingeParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowHingeParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowHingeParams> result(new SetShowHingeParams());
  errors->Push();
  errors->SetName("SetShowHingeParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* hinge_config_value = dict.Find("hingeConfig");
  if (hinge_config_value) {
    errors->SetName("hingeConfig");
    result->hinge_config_ = internal::FromValue<::headless::overlay::HingeConfig>::Parse(*hinge_config_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowHingeParams::Serialize() const {
  base::Value::Dict result;
  if (hinge_config_)
    result.Set("hingeConfig", internal::ToValue(*hinge_config_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowHingeParams> SetShowHingeParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowHingeParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowHingeResult> SetShowHingeResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowHingeResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowHingeResult> result(new SetShowHingeResult());
  errors->Push();
  errors->SetName("SetShowHingeResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowHingeResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowHingeResult> SetShowHingeResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowHingeResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowIsolatedElementsParams> SetShowIsolatedElementsParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowIsolatedElementsParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowIsolatedElementsParams> result(new SetShowIsolatedElementsParams());
  errors->Push();
  errors->SetName("SetShowIsolatedElementsParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* isolated_element_highlight_configs_value = dict.Find("isolatedElementHighlightConfigs");
  if (isolated_element_highlight_configs_value) {
    errors->SetName("isolatedElementHighlightConfigs");
    result->isolated_element_highlight_configs_ = internal::FromValue<std::vector<std::unique_ptr<::headless::overlay::IsolatedElementHighlightConfig>>>::Parse(*isolated_element_highlight_configs_value, errors);
  } else {
    errors->AddError("required property missing: isolatedElementHighlightConfigs");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowIsolatedElementsParams::Serialize() const {
  base::Value::Dict result;
  result.Set("isolatedElementHighlightConfigs", internal::ToValue(isolated_element_highlight_configs_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowIsolatedElementsParams> SetShowIsolatedElementsParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowIsolatedElementsParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowIsolatedElementsResult> SetShowIsolatedElementsResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowIsolatedElementsResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowIsolatedElementsResult> result(new SetShowIsolatedElementsResult());
  errors->Push();
  errors->SetName("SetShowIsolatedElementsResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowIsolatedElementsResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowIsolatedElementsResult> SetShowIsolatedElementsResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowIsolatedElementsResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowWindowControlsOverlayParams> SetShowWindowControlsOverlayParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowWindowControlsOverlayParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowWindowControlsOverlayParams> result(new SetShowWindowControlsOverlayParams());
  errors->Push();
  errors->SetName("SetShowWindowControlsOverlayParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* window_controls_overlay_config_value = dict.Find("windowControlsOverlayConfig");
  if (window_controls_overlay_config_value) {
    errors->SetName("windowControlsOverlayConfig");
    result->window_controls_overlay_config_ = internal::FromValue<::headless::overlay::WindowControlsOverlayConfig>::Parse(*window_controls_overlay_config_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowWindowControlsOverlayParams::Serialize() const {
  base::Value::Dict result;
  if (window_controls_overlay_config_)
    result.Set("windowControlsOverlayConfig", internal::ToValue(*window_controls_overlay_config_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowWindowControlsOverlayParams> SetShowWindowControlsOverlayParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowWindowControlsOverlayParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetShowWindowControlsOverlayResult> SetShowWindowControlsOverlayResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetShowWindowControlsOverlayResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetShowWindowControlsOverlayResult> result(new SetShowWindowControlsOverlayResult());
  errors->Push();
  errors->SetName("SetShowWindowControlsOverlayResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetShowWindowControlsOverlayResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetShowWindowControlsOverlayResult> SetShowWindowControlsOverlayResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetShowWindowControlsOverlayResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<InspectNodeRequestedParams> InspectNodeRequestedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("InspectNodeRequestedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<InspectNodeRequestedParams> result(new InspectNodeRequestedParams());
  errors->Push();
  errors->SetName("InspectNodeRequestedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* backend_node_id_value = dict.Find("backendNodeId");
  if (backend_node_id_value) {
    errors->SetName("backendNodeId");
    result->backend_node_id_ = internal::FromValue<int>::Parse(*backend_node_id_value, errors);
  } else {
    errors->AddError("required property missing: backendNodeId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value InspectNodeRequestedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("backendNodeId", internal::ToValue(backend_node_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<InspectNodeRequestedParams> InspectNodeRequestedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<InspectNodeRequestedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<NodeHighlightRequestedParams> NodeHighlightRequestedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("NodeHighlightRequestedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<NodeHighlightRequestedParams> result(new NodeHighlightRequestedParams());
  errors->Push();
  errors->SetName("NodeHighlightRequestedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* node_id_value = dict.Find("nodeId");
  if (node_id_value) {
    errors->SetName("nodeId");
    result->node_id_ = internal::FromValue<int>::Parse(*node_id_value, errors);
  } else {
    errors->AddError("required property missing: nodeId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value NodeHighlightRequestedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("nodeId", internal::ToValue(node_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<NodeHighlightRequestedParams> NodeHighlightRequestedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<NodeHighlightRequestedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ScreenshotRequestedParams> ScreenshotRequestedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ScreenshotRequestedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ScreenshotRequestedParams> result(new ScreenshotRequestedParams());
  errors->Push();
  errors->SetName("ScreenshotRequestedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* viewport_value = dict.Find("viewport");
  if (viewport_value) {
    errors->SetName("viewport");
    result->viewport_ = internal::FromValue<::headless::page::Viewport>::Parse(*viewport_value, errors);
  } else {
    errors->AddError("required property missing: viewport");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ScreenshotRequestedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("viewport", internal::ToValue(*viewport_));
  return base::Value(std::move(result));
}

std::unique_ptr<ScreenshotRequestedParams> ScreenshotRequestedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ScreenshotRequestedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<InspectModeCanceledParams> InspectModeCanceledParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("InspectModeCanceledParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<InspectModeCanceledParams> result(new InspectModeCanceledParams());
  errors->Push();
  errors->SetName("InspectModeCanceledParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value InspectModeCanceledParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<InspectModeCanceledParams> InspectModeCanceledParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<InspectModeCanceledParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


}  // namespace overlay
}  // namespace headless
