// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_OVERLAY_H_
#define HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_OVERLAY_H_

#include "base/values.h"
#include "third_party/abseil-cpp/absl/types/optional.h"
#include "third_party/inspector_protocol/crdtp/chromium/protocol_traits.h"

#include "headless/public/devtools/internal/types_forward_declarations_dom.h"
#include "headless/public/devtools/internal/types_forward_declarations_debugger.h"
#include "headless/public/devtools/internal/types_forward_declarations_emulation.h"
#include "headless/public/devtools/internal/types_forward_declarations_io.h"
#include "headless/public/devtools/internal/types_forward_declarations_network.h"
#include "headless/public/devtools/internal/types_forward_declarations_overlay.h"
#include "headless/public/devtools/internal/types_forward_declarations_page.h"
#include "headless/public/devtools/internal/types_forward_declarations_runtime.h"
#include "headless/public/devtools/internal/types_forward_declarations_security.h"
#include "headless/public/headless_export.h"

namespace headless {
namespace protocol {
using Binary = crdtp::Binary;
}

class ErrorReporter;

namespace overlay {

// Configuration data for drawing the source order of an elements children.
class HEADLESS_EXPORT SourceOrderConfig {
 public:
  static std::unique_ptr<SourceOrderConfig> Parse(const base::Value& value, ErrorReporter* errors);

  SourceOrderConfig(const SourceOrderConfig&) = delete;
  SourceOrderConfig& operator=(const SourceOrderConfig&) = delete;

  ~SourceOrderConfig() { }


  // the color to outline the givent element in.
  const ::headless::dom::RGBA* GetParentOutlineColor() const { return parent_outline_color_.get(); }
  void SetParentOutlineColor(std::unique_ptr<::headless::dom::RGBA> value) { parent_outline_color_ = std::move(value); }

  // the color to outline the child elements in.
  const ::headless::dom::RGBA* GetChildOutlineColor() const { return child_outline_color_.get(); }
  void SetChildOutlineColor(std::unique_ptr<::headless::dom::RGBA> value) { child_outline_color_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<SourceOrderConfig> Clone() const;

  template<int STATE>
  class SourceOrderConfigBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kParentOutlineColorSet = 1 << 1,
    kChildOutlineColorSet = 1 << 2,
      kAllRequiredFieldsSet = (kParentOutlineColorSet | kChildOutlineColorSet | 0)
    };

    SourceOrderConfigBuilder<STATE | kParentOutlineColorSet>& SetParentOutlineColor(std::unique_ptr<::headless::dom::RGBA> value) {
      static_assert(!(STATE & kParentOutlineColorSet), "property parentOutlineColor should not have already been set");
      result_->SetParentOutlineColor(std::move(value));
      return CastState<kParentOutlineColorSet>();
    }

    SourceOrderConfigBuilder<STATE | kChildOutlineColorSet>& SetChildOutlineColor(std::unique_ptr<::headless::dom::RGBA> value) {
      static_assert(!(STATE & kChildOutlineColorSet), "property childOutlineColor should not have already been set");
      result_->SetChildOutlineColor(std::move(value));
      return CastState<kChildOutlineColorSet>();
    }

    std::unique_ptr<SourceOrderConfig> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SourceOrderConfig;
    SourceOrderConfigBuilder() : result_(new SourceOrderConfig()) { }

    template<int STEP> SourceOrderConfigBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SourceOrderConfigBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SourceOrderConfig> result_;
  };

  static SourceOrderConfigBuilder<0> Builder() {
    return SourceOrderConfigBuilder<0>();
  }

 private:
  SourceOrderConfig() { }

  std::unique_ptr<::headless::dom::RGBA> parent_outline_color_;
  std::unique_ptr<::headless::dom::RGBA> child_outline_color_;
};


// Configuration data for the highlighting of Grid elements.
class HEADLESS_EXPORT GridHighlightConfig {
 public:
  static std::unique_ptr<GridHighlightConfig> Parse(const base::Value& value, ErrorReporter* errors);

  GridHighlightConfig(const GridHighlightConfig&) = delete;
  GridHighlightConfig& operator=(const GridHighlightConfig&) = delete;

  ~GridHighlightConfig() { }


  // Whether the extension lines from grid cells to the rulers should be shown (default: false).
  bool HasShowGridExtensionLines() const { return !!show_grid_extension_lines_; }
  bool GetShowGridExtensionLines() const { DCHECK(HasShowGridExtensionLines()); return show_grid_extension_lines_.value(); }
  void SetShowGridExtensionLines(bool value) { show_grid_extension_lines_ = value; }

  // Show Positive line number labels (default: false).
  bool HasShowPositiveLineNumbers() const { return !!show_positive_line_numbers_; }
  bool GetShowPositiveLineNumbers() const { DCHECK(HasShowPositiveLineNumbers()); return show_positive_line_numbers_.value(); }
  void SetShowPositiveLineNumbers(bool value) { show_positive_line_numbers_ = value; }

  // Show Negative line number labels (default: false).
  bool HasShowNegativeLineNumbers() const { return !!show_negative_line_numbers_; }
  bool GetShowNegativeLineNumbers() const { DCHECK(HasShowNegativeLineNumbers()); return show_negative_line_numbers_.value(); }
  void SetShowNegativeLineNumbers(bool value) { show_negative_line_numbers_ = value; }

  // Show area name labels (default: false).
  bool HasShowAreaNames() const { return !!show_area_names_; }
  bool GetShowAreaNames() const { DCHECK(HasShowAreaNames()); return show_area_names_.value(); }
  void SetShowAreaNames(bool value) { show_area_names_ = value; }

  // Show line name labels (default: false).
  bool HasShowLineNames() const { return !!show_line_names_; }
  bool GetShowLineNames() const { DCHECK(HasShowLineNames()); return show_line_names_.value(); }
  void SetShowLineNames(bool value) { show_line_names_ = value; }

  // Show track size labels (default: false).
  bool HasShowTrackSizes() const { return !!show_track_sizes_; }
  bool GetShowTrackSizes() const { DCHECK(HasShowTrackSizes()); return show_track_sizes_.value(); }
  void SetShowTrackSizes(bool value) { show_track_sizes_ = value; }

  // The grid container border highlight color (default: transparent).
  bool HasGridBorderColor() const { return !!grid_border_color_; }
  const ::headless::dom::RGBA* GetGridBorderColor() const { DCHECK(HasGridBorderColor()); return grid_border_color_.value().get(); }
  void SetGridBorderColor(std::unique_ptr<::headless::dom::RGBA> value) { grid_border_color_ = std::move(value); }

  // The cell border color (default: transparent). Deprecated, please use rowLineColor and columnLineColor instead.
  bool HasCellBorderColor() const { return !!cell_border_color_; }
  const ::headless::dom::RGBA* GetCellBorderColor() const { DCHECK(HasCellBorderColor()); return cell_border_color_.value().get(); }
  void SetCellBorderColor(std::unique_ptr<::headless::dom::RGBA> value) { cell_border_color_ = std::move(value); }

  // The row line color (default: transparent).
  bool HasRowLineColor() const { return !!row_line_color_; }
  const ::headless::dom::RGBA* GetRowLineColor() const { DCHECK(HasRowLineColor()); return row_line_color_.value().get(); }
  void SetRowLineColor(std::unique_ptr<::headless::dom::RGBA> value) { row_line_color_ = std::move(value); }

  // The column line color (default: transparent).
  bool HasColumnLineColor() const { return !!column_line_color_; }
  const ::headless::dom::RGBA* GetColumnLineColor() const { DCHECK(HasColumnLineColor()); return column_line_color_.value().get(); }
  void SetColumnLineColor(std::unique_ptr<::headless::dom::RGBA> value) { column_line_color_ = std::move(value); }

  // Whether the grid border is dashed (default: false).
  bool HasGridBorderDash() const { return !!grid_border_dash_; }
  bool GetGridBorderDash() const { DCHECK(HasGridBorderDash()); return grid_border_dash_.value(); }
  void SetGridBorderDash(bool value) { grid_border_dash_ = value; }

  // Whether the cell border is dashed (default: false). Deprecated, please us rowLineDash and columnLineDash instead.
  bool HasCellBorderDash() const { return !!cell_border_dash_; }
  bool GetCellBorderDash() const { DCHECK(HasCellBorderDash()); return cell_border_dash_.value(); }
  void SetCellBorderDash(bool value) { cell_border_dash_ = value; }

  // Whether row lines are dashed (default: false).
  bool HasRowLineDash() const { return !!row_line_dash_; }
  bool GetRowLineDash() const { DCHECK(HasRowLineDash()); return row_line_dash_.value(); }
  void SetRowLineDash(bool value) { row_line_dash_ = value; }

  // Whether column lines are dashed (default: false).
  bool HasColumnLineDash() const { return !!column_line_dash_; }
  bool GetColumnLineDash() const { DCHECK(HasColumnLineDash()); return column_line_dash_.value(); }
  void SetColumnLineDash(bool value) { column_line_dash_ = value; }

  // The row gap highlight fill color (default: transparent).
  bool HasRowGapColor() const { return !!row_gap_color_; }
  const ::headless::dom::RGBA* GetRowGapColor() const { DCHECK(HasRowGapColor()); return row_gap_color_.value().get(); }
  void SetRowGapColor(std::unique_ptr<::headless::dom::RGBA> value) { row_gap_color_ = std::move(value); }

  // The row gap hatching fill color (default: transparent).
  bool HasRowHatchColor() const { return !!row_hatch_color_; }
  const ::headless::dom::RGBA* GetRowHatchColor() const { DCHECK(HasRowHatchColor()); return row_hatch_color_.value().get(); }
  void SetRowHatchColor(std::unique_ptr<::headless::dom::RGBA> value) { row_hatch_color_ = std::move(value); }

  // The column gap highlight fill color (default: transparent).
  bool HasColumnGapColor() const { return !!column_gap_color_; }
  const ::headless::dom::RGBA* GetColumnGapColor() const { DCHECK(HasColumnGapColor()); return column_gap_color_.value().get(); }
  void SetColumnGapColor(std::unique_ptr<::headless::dom::RGBA> value) { column_gap_color_ = std::move(value); }

  // The column gap hatching fill color (default: transparent).
  bool HasColumnHatchColor() const { return !!column_hatch_color_; }
  const ::headless::dom::RGBA* GetColumnHatchColor() const { DCHECK(HasColumnHatchColor()); return column_hatch_color_.value().get(); }
  void SetColumnHatchColor(std::unique_ptr<::headless::dom::RGBA> value) { column_hatch_color_ = std::move(value); }

  // The named grid areas border color (Default: transparent).
  bool HasAreaBorderColor() const { return !!area_border_color_; }
  const ::headless::dom::RGBA* GetAreaBorderColor() const { DCHECK(HasAreaBorderColor()); return area_border_color_.value().get(); }
  void SetAreaBorderColor(std::unique_ptr<::headless::dom::RGBA> value) { area_border_color_ = std::move(value); }

  // The grid container background color (Default: transparent).
  bool HasGridBackgroundColor() const { return !!grid_background_color_; }
  const ::headless::dom::RGBA* GetGridBackgroundColor() const { DCHECK(HasGridBackgroundColor()); return grid_background_color_.value().get(); }
  void SetGridBackgroundColor(std::unique_ptr<::headless::dom::RGBA> value) { grid_background_color_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<GridHighlightConfig> Clone() const;

  template<int STATE>
  class GridHighlightConfigBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    GridHighlightConfigBuilder<STATE>& SetShowGridExtensionLines(bool value) {
      result_->SetShowGridExtensionLines(value);
      return *this;
    }

    GridHighlightConfigBuilder<STATE>& SetShowPositiveLineNumbers(bool value) {
      result_->SetShowPositiveLineNumbers(value);
      return *this;
    }

    GridHighlightConfigBuilder<STATE>& SetShowNegativeLineNumbers(bool value) {
      result_->SetShowNegativeLineNumbers(value);
      return *this;
    }

    GridHighlightConfigBuilder<STATE>& SetShowAreaNames(bool value) {
      result_->SetShowAreaNames(value);
      return *this;
    }

    GridHighlightConfigBuilder<STATE>& SetShowLineNames(bool value) {
      result_->SetShowLineNames(value);
      return *this;
    }

    GridHighlightConfigBuilder<STATE>& SetShowTrackSizes(bool value) {
      result_->SetShowTrackSizes(value);
      return *this;
    }

    GridHighlightConfigBuilder<STATE>& SetGridBorderColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetGridBorderColor(std::move(value));
      return *this;
    }

    GridHighlightConfigBuilder<STATE>& SetCellBorderColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetCellBorderColor(std::move(value));
      return *this;
    }

    GridHighlightConfigBuilder<STATE>& SetRowLineColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetRowLineColor(std::move(value));
      return *this;
    }

    GridHighlightConfigBuilder<STATE>& SetColumnLineColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetColumnLineColor(std::move(value));
      return *this;
    }

    GridHighlightConfigBuilder<STATE>& SetGridBorderDash(bool value) {
      result_->SetGridBorderDash(value);
      return *this;
    }

    GridHighlightConfigBuilder<STATE>& SetCellBorderDash(bool value) {
      result_->SetCellBorderDash(value);
      return *this;
    }

    GridHighlightConfigBuilder<STATE>& SetRowLineDash(bool value) {
      result_->SetRowLineDash(value);
      return *this;
    }

    GridHighlightConfigBuilder<STATE>& SetColumnLineDash(bool value) {
      result_->SetColumnLineDash(value);
      return *this;
    }

    GridHighlightConfigBuilder<STATE>& SetRowGapColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetRowGapColor(std::move(value));
      return *this;
    }

    GridHighlightConfigBuilder<STATE>& SetRowHatchColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetRowHatchColor(std::move(value));
      return *this;
    }

    GridHighlightConfigBuilder<STATE>& SetColumnGapColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetColumnGapColor(std::move(value));
      return *this;
    }

    GridHighlightConfigBuilder<STATE>& SetColumnHatchColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetColumnHatchColor(std::move(value));
      return *this;
    }

    GridHighlightConfigBuilder<STATE>& SetAreaBorderColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetAreaBorderColor(std::move(value));
      return *this;
    }

    GridHighlightConfigBuilder<STATE>& SetGridBackgroundColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetGridBackgroundColor(std::move(value));
      return *this;
    }

    std::unique_ptr<GridHighlightConfig> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GridHighlightConfig;
    GridHighlightConfigBuilder() : result_(new GridHighlightConfig()) { }

    template<int STEP> GridHighlightConfigBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GridHighlightConfigBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GridHighlightConfig> result_;
  };

  static GridHighlightConfigBuilder<0> Builder() {
    return GridHighlightConfigBuilder<0>();
  }

 private:
  GridHighlightConfig() { }

  absl::optional<bool> show_grid_extension_lines_;
  absl::optional<bool> show_positive_line_numbers_;
  absl::optional<bool> show_negative_line_numbers_;
  absl::optional<bool> show_area_names_;
  absl::optional<bool> show_line_names_;
  absl::optional<bool> show_track_sizes_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> grid_border_color_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> cell_border_color_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> row_line_color_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> column_line_color_;
  absl::optional<bool> grid_border_dash_;
  absl::optional<bool> cell_border_dash_;
  absl::optional<bool> row_line_dash_;
  absl::optional<bool> column_line_dash_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> row_gap_color_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> row_hatch_color_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> column_gap_color_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> column_hatch_color_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> area_border_color_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> grid_background_color_;
};


// Configuration data for the highlighting of Flex container elements.
class HEADLESS_EXPORT FlexContainerHighlightConfig {
 public:
  static std::unique_ptr<FlexContainerHighlightConfig> Parse(const base::Value& value, ErrorReporter* errors);

  FlexContainerHighlightConfig(const FlexContainerHighlightConfig&) = delete;
  FlexContainerHighlightConfig& operator=(const FlexContainerHighlightConfig&) = delete;

  ~FlexContainerHighlightConfig() { }


  // The style of the container border
  bool HasContainerBorder() const { return !!container_border_; }
  const ::headless::overlay::LineStyle* GetContainerBorder() const { DCHECK(HasContainerBorder()); return container_border_.value().get(); }
  void SetContainerBorder(std::unique_ptr<::headless::overlay::LineStyle> value) { container_border_ = std::move(value); }

  // The style of the separator between lines
  bool HasLineSeparator() const { return !!line_separator_; }
  const ::headless::overlay::LineStyle* GetLineSeparator() const { DCHECK(HasLineSeparator()); return line_separator_.value().get(); }
  void SetLineSeparator(std::unique_ptr<::headless::overlay::LineStyle> value) { line_separator_ = std::move(value); }

  // The style of the separator between items
  bool HasItemSeparator() const { return !!item_separator_; }
  const ::headless::overlay::LineStyle* GetItemSeparator() const { DCHECK(HasItemSeparator()); return item_separator_.value().get(); }
  void SetItemSeparator(std::unique_ptr<::headless::overlay::LineStyle> value) { item_separator_ = std::move(value); }

  // Style of content-distribution space on the main axis (justify-content).
  bool HasMainDistributedSpace() const { return !!main_distributed_space_; }
  const ::headless::overlay::BoxStyle* GetMainDistributedSpace() const { DCHECK(HasMainDistributedSpace()); return main_distributed_space_.value().get(); }
  void SetMainDistributedSpace(std::unique_ptr<::headless::overlay::BoxStyle> value) { main_distributed_space_ = std::move(value); }

  // Style of content-distribution space on the cross axis (align-content).
  bool HasCrossDistributedSpace() const { return !!cross_distributed_space_; }
  const ::headless::overlay::BoxStyle* GetCrossDistributedSpace() const { DCHECK(HasCrossDistributedSpace()); return cross_distributed_space_.value().get(); }
  void SetCrossDistributedSpace(std::unique_ptr<::headless::overlay::BoxStyle> value) { cross_distributed_space_ = std::move(value); }

  // Style of empty space caused by row gaps (gap/row-gap).
  bool HasRowGapSpace() const { return !!row_gap_space_; }
  const ::headless::overlay::BoxStyle* GetRowGapSpace() const { DCHECK(HasRowGapSpace()); return row_gap_space_.value().get(); }
  void SetRowGapSpace(std::unique_ptr<::headless::overlay::BoxStyle> value) { row_gap_space_ = std::move(value); }

  // Style of empty space caused by columns gaps (gap/column-gap).
  bool HasColumnGapSpace() const { return !!column_gap_space_; }
  const ::headless::overlay::BoxStyle* GetColumnGapSpace() const { DCHECK(HasColumnGapSpace()); return column_gap_space_.value().get(); }
  void SetColumnGapSpace(std::unique_ptr<::headless::overlay::BoxStyle> value) { column_gap_space_ = std::move(value); }

  // Style of the self-alignment line (align-items).
  bool HasCrossAlignment() const { return !!cross_alignment_; }
  const ::headless::overlay::LineStyle* GetCrossAlignment() const { DCHECK(HasCrossAlignment()); return cross_alignment_.value().get(); }
  void SetCrossAlignment(std::unique_ptr<::headless::overlay::LineStyle> value) { cross_alignment_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<FlexContainerHighlightConfig> Clone() const;

  template<int STATE>
  class FlexContainerHighlightConfigBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    FlexContainerHighlightConfigBuilder<STATE>& SetContainerBorder(std::unique_ptr<::headless::overlay::LineStyle> value) {
      result_->SetContainerBorder(std::move(value));
      return *this;
    }

    FlexContainerHighlightConfigBuilder<STATE>& SetLineSeparator(std::unique_ptr<::headless::overlay::LineStyle> value) {
      result_->SetLineSeparator(std::move(value));
      return *this;
    }

    FlexContainerHighlightConfigBuilder<STATE>& SetItemSeparator(std::unique_ptr<::headless::overlay::LineStyle> value) {
      result_->SetItemSeparator(std::move(value));
      return *this;
    }

    FlexContainerHighlightConfigBuilder<STATE>& SetMainDistributedSpace(std::unique_ptr<::headless::overlay::BoxStyle> value) {
      result_->SetMainDistributedSpace(std::move(value));
      return *this;
    }

    FlexContainerHighlightConfigBuilder<STATE>& SetCrossDistributedSpace(std::unique_ptr<::headless::overlay::BoxStyle> value) {
      result_->SetCrossDistributedSpace(std::move(value));
      return *this;
    }

    FlexContainerHighlightConfigBuilder<STATE>& SetRowGapSpace(std::unique_ptr<::headless::overlay::BoxStyle> value) {
      result_->SetRowGapSpace(std::move(value));
      return *this;
    }

    FlexContainerHighlightConfigBuilder<STATE>& SetColumnGapSpace(std::unique_ptr<::headless::overlay::BoxStyle> value) {
      result_->SetColumnGapSpace(std::move(value));
      return *this;
    }

    FlexContainerHighlightConfigBuilder<STATE>& SetCrossAlignment(std::unique_ptr<::headless::overlay::LineStyle> value) {
      result_->SetCrossAlignment(std::move(value));
      return *this;
    }

    std::unique_ptr<FlexContainerHighlightConfig> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class FlexContainerHighlightConfig;
    FlexContainerHighlightConfigBuilder() : result_(new FlexContainerHighlightConfig()) { }

    template<int STEP> FlexContainerHighlightConfigBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<FlexContainerHighlightConfigBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<FlexContainerHighlightConfig> result_;
  };

  static FlexContainerHighlightConfigBuilder<0> Builder() {
    return FlexContainerHighlightConfigBuilder<0>();
  }

 private:
  FlexContainerHighlightConfig() { }

  absl::optional<std::unique_ptr<::headless::overlay::LineStyle>> container_border_;
  absl::optional<std::unique_ptr<::headless::overlay::LineStyle>> line_separator_;
  absl::optional<std::unique_ptr<::headless::overlay::LineStyle>> item_separator_;
  absl::optional<std::unique_ptr<::headless::overlay::BoxStyle>> main_distributed_space_;
  absl::optional<std::unique_ptr<::headless::overlay::BoxStyle>> cross_distributed_space_;
  absl::optional<std::unique_ptr<::headless::overlay::BoxStyle>> row_gap_space_;
  absl::optional<std::unique_ptr<::headless::overlay::BoxStyle>> column_gap_space_;
  absl::optional<std::unique_ptr<::headless::overlay::LineStyle>> cross_alignment_;
};


// Configuration data for the highlighting of Flex item elements.
class HEADLESS_EXPORT FlexItemHighlightConfig {
 public:
  static std::unique_ptr<FlexItemHighlightConfig> Parse(const base::Value& value, ErrorReporter* errors);

  FlexItemHighlightConfig(const FlexItemHighlightConfig&) = delete;
  FlexItemHighlightConfig& operator=(const FlexItemHighlightConfig&) = delete;

  ~FlexItemHighlightConfig() { }


  // Style of the box representing the item's base size
  bool HasBaseSizeBox() const { return !!base_size_box_; }
  const ::headless::overlay::BoxStyle* GetBaseSizeBox() const { DCHECK(HasBaseSizeBox()); return base_size_box_.value().get(); }
  void SetBaseSizeBox(std::unique_ptr<::headless::overlay::BoxStyle> value) { base_size_box_ = std::move(value); }

  // Style of the border around the box representing the item's base size
  bool HasBaseSizeBorder() const { return !!base_size_border_; }
  const ::headless::overlay::LineStyle* GetBaseSizeBorder() const { DCHECK(HasBaseSizeBorder()); return base_size_border_.value().get(); }
  void SetBaseSizeBorder(std::unique_ptr<::headless::overlay::LineStyle> value) { base_size_border_ = std::move(value); }

  // Style of the arrow representing if the item grew or shrank
  bool HasFlexibilityArrow() const { return !!flexibility_arrow_; }
  const ::headless::overlay::LineStyle* GetFlexibilityArrow() const { DCHECK(HasFlexibilityArrow()); return flexibility_arrow_.value().get(); }
  void SetFlexibilityArrow(std::unique_ptr<::headless::overlay::LineStyle> value) { flexibility_arrow_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<FlexItemHighlightConfig> Clone() const;

  template<int STATE>
  class FlexItemHighlightConfigBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    FlexItemHighlightConfigBuilder<STATE>& SetBaseSizeBox(std::unique_ptr<::headless::overlay::BoxStyle> value) {
      result_->SetBaseSizeBox(std::move(value));
      return *this;
    }

    FlexItemHighlightConfigBuilder<STATE>& SetBaseSizeBorder(std::unique_ptr<::headless::overlay::LineStyle> value) {
      result_->SetBaseSizeBorder(std::move(value));
      return *this;
    }

    FlexItemHighlightConfigBuilder<STATE>& SetFlexibilityArrow(std::unique_ptr<::headless::overlay::LineStyle> value) {
      result_->SetFlexibilityArrow(std::move(value));
      return *this;
    }

    std::unique_ptr<FlexItemHighlightConfig> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class FlexItemHighlightConfig;
    FlexItemHighlightConfigBuilder() : result_(new FlexItemHighlightConfig()) { }

    template<int STEP> FlexItemHighlightConfigBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<FlexItemHighlightConfigBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<FlexItemHighlightConfig> result_;
  };

  static FlexItemHighlightConfigBuilder<0> Builder() {
    return FlexItemHighlightConfigBuilder<0>();
  }

 private:
  FlexItemHighlightConfig() { }

  absl::optional<std::unique_ptr<::headless::overlay::BoxStyle>> base_size_box_;
  absl::optional<std::unique_ptr<::headless::overlay::LineStyle>> base_size_border_;
  absl::optional<std::unique_ptr<::headless::overlay::LineStyle>> flexibility_arrow_;
};


// Style information for drawing a line.
class HEADLESS_EXPORT LineStyle {
 public:
  static std::unique_ptr<LineStyle> Parse(const base::Value& value, ErrorReporter* errors);

  LineStyle(const LineStyle&) = delete;
  LineStyle& operator=(const LineStyle&) = delete;

  ~LineStyle() { }


  // The color of the line (default: transparent)
  bool HasColor() const { return !!color_; }
  const ::headless::dom::RGBA* GetColor() const { DCHECK(HasColor()); return color_.value().get(); }
  void SetColor(std::unique_ptr<::headless::dom::RGBA> value) { color_ = std::move(value); }

  // The line pattern (default: solid)
  bool HasPattern() const { return !!pattern_; }
  ::headless::overlay::LineStylePattern GetPattern() const { DCHECK(HasPattern()); return pattern_.value(); }
  void SetPattern(::headless::overlay::LineStylePattern value) { pattern_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<LineStyle> Clone() const;

  template<int STATE>
  class LineStyleBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    LineStyleBuilder<STATE>& SetColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetColor(std::move(value));
      return *this;
    }

    LineStyleBuilder<STATE>& SetPattern(::headless::overlay::LineStylePattern value) {
      result_->SetPattern(value);
      return *this;
    }

    std::unique_ptr<LineStyle> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class LineStyle;
    LineStyleBuilder() : result_(new LineStyle()) { }

    template<int STEP> LineStyleBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<LineStyleBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<LineStyle> result_;
  };

  static LineStyleBuilder<0> Builder() {
    return LineStyleBuilder<0>();
  }

 private:
  LineStyle() { }

  absl::optional<std::unique_ptr<::headless::dom::RGBA>> color_;
  absl::optional<::headless::overlay::LineStylePattern> pattern_;
};


// Style information for drawing a box.
class HEADLESS_EXPORT BoxStyle {
 public:
  static std::unique_ptr<BoxStyle> Parse(const base::Value& value, ErrorReporter* errors);

  BoxStyle(const BoxStyle&) = delete;
  BoxStyle& operator=(const BoxStyle&) = delete;

  ~BoxStyle() { }


  // The background color for the box (default: transparent)
  bool HasFillColor() const { return !!fill_color_; }
  const ::headless::dom::RGBA* GetFillColor() const { DCHECK(HasFillColor()); return fill_color_.value().get(); }
  void SetFillColor(std::unique_ptr<::headless::dom::RGBA> value) { fill_color_ = std::move(value); }

  // The hatching color for the box (default: transparent)
  bool HasHatchColor() const { return !!hatch_color_; }
  const ::headless::dom::RGBA* GetHatchColor() const { DCHECK(HasHatchColor()); return hatch_color_.value().get(); }
  void SetHatchColor(std::unique_ptr<::headless::dom::RGBA> value) { hatch_color_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<BoxStyle> Clone() const;

  template<int STATE>
  class BoxStyleBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    BoxStyleBuilder<STATE>& SetFillColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetFillColor(std::move(value));
      return *this;
    }

    BoxStyleBuilder<STATE>& SetHatchColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetHatchColor(std::move(value));
      return *this;
    }

    std::unique_ptr<BoxStyle> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class BoxStyle;
    BoxStyleBuilder() : result_(new BoxStyle()) { }

    template<int STEP> BoxStyleBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<BoxStyleBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<BoxStyle> result_;
  };

  static BoxStyleBuilder<0> Builder() {
    return BoxStyleBuilder<0>();
  }

 private:
  BoxStyle() { }

  absl::optional<std::unique_ptr<::headless::dom::RGBA>> fill_color_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> hatch_color_;
};


// Configuration data for the highlighting of page elements.
class HEADLESS_EXPORT HighlightConfig {
 public:
  static std::unique_ptr<HighlightConfig> Parse(const base::Value& value, ErrorReporter* errors);

  HighlightConfig(const HighlightConfig&) = delete;
  HighlightConfig& operator=(const HighlightConfig&) = delete;

  ~HighlightConfig() { }


  // Whether the node info tooltip should be shown (default: false).
  bool HasShowInfo() const { return !!show_info_; }
  bool GetShowInfo() const { DCHECK(HasShowInfo()); return show_info_.value(); }
  void SetShowInfo(bool value) { show_info_ = value; }

  // Whether the node styles in the tooltip (default: false).
  bool HasShowStyles() const { return !!show_styles_; }
  bool GetShowStyles() const { DCHECK(HasShowStyles()); return show_styles_.value(); }
  void SetShowStyles(bool value) { show_styles_ = value; }

  // Whether the rulers should be shown (default: false).
  bool HasShowRulers() const { return !!show_rulers_; }
  bool GetShowRulers() const { DCHECK(HasShowRulers()); return show_rulers_.value(); }
  void SetShowRulers(bool value) { show_rulers_ = value; }

  // Whether the a11y info should be shown (default: true).
  bool HasShowAccessibilityInfo() const { return !!show_accessibility_info_; }
  bool GetShowAccessibilityInfo() const { DCHECK(HasShowAccessibilityInfo()); return show_accessibility_info_.value(); }
  void SetShowAccessibilityInfo(bool value) { show_accessibility_info_ = value; }

  // Whether the extension lines from node to the rulers should be shown (default: false).
  bool HasShowExtensionLines() const { return !!show_extension_lines_; }
  bool GetShowExtensionLines() const { DCHECK(HasShowExtensionLines()); return show_extension_lines_.value(); }
  void SetShowExtensionLines(bool value) { show_extension_lines_ = value; }

  // The content box highlight fill color (default: transparent).
  bool HasContentColor() const { return !!content_color_; }
  const ::headless::dom::RGBA* GetContentColor() const { DCHECK(HasContentColor()); return content_color_.value().get(); }
  void SetContentColor(std::unique_ptr<::headless::dom::RGBA> value) { content_color_ = std::move(value); }

  // The padding highlight fill color (default: transparent).
  bool HasPaddingColor() const { return !!padding_color_; }
  const ::headless::dom::RGBA* GetPaddingColor() const { DCHECK(HasPaddingColor()); return padding_color_.value().get(); }
  void SetPaddingColor(std::unique_ptr<::headless::dom::RGBA> value) { padding_color_ = std::move(value); }

  // The border highlight fill color (default: transparent).
  bool HasBorderColor() const { return !!border_color_; }
  const ::headless::dom::RGBA* GetBorderColor() const { DCHECK(HasBorderColor()); return border_color_.value().get(); }
  void SetBorderColor(std::unique_ptr<::headless::dom::RGBA> value) { border_color_ = std::move(value); }

  // The margin highlight fill color (default: transparent).
  bool HasMarginColor() const { return !!margin_color_; }
  const ::headless::dom::RGBA* GetMarginColor() const { DCHECK(HasMarginColor()); return margin_color_.value().get(); }
  void SetMarginColor(std::unique_ptr<::headless::dom::RGBA> value) { margin_color_ = std::move(value); }

  // The event target element highlight fill color (default: transparent).
  bool HasEventTargetColor() const { return !!event_target_color_; }
  const ::headless::dom::RGBA* GetEventTargetColor() const { DCHECK(HasEventTargetColor()); return event_target_color_.value().get(); }
  void SetEventTargetColor(std::unique_ptr<::headless::dom::RGBA> value) { event_target_color_ = std::move(value); }

  // The shape outside fill color (default: transparent).
  bool HasShapeColor() const { return !!shape_color_; }
  const ::headless::dom::RGBA* GetShapeColor() const { DCHECK(HasShapeColor()); return shape_color_.value().get(); }
  void SetShapeColor(std::unique_ptr<::headless::dom::RGBA> value) { shape_color_ = std::move(value); }

  // The shape margin fill color (default: transparent).
  bool HasShapeMarginColor() const { return !!shape_margin_color_; }
  const ::headless::dom::RGBA* GetShapeMarginColor() const { DCHECK(HasShapeMarginColor()); return shape_margin_color_.value().get(); }
  void SetShapeMarginColor(std::unique_ptr<::headless::dom::RGBA> value) { shape_margin_color_ = std::move(value); }

  // The grid layout color (default: transparent).
  bool HasCssGridColor() const { return !!css_grid_color_; }
  const ::headless::dom::RGBA* GetCssGridColor() const { DCHECK(HasCssGridColor()); return css_grid_color_.value().get(); }
  void SetCssGridColor(std::unique_ptr<::headless::dom::RGBA> value) { css_grid_color_ = std::move(value); }

  // The color format used to format color styles (default: hex).
  bool HasColorFormat() const { return !!color_format_; }
  ::headless::overlay::ColorFormat GetColorFormat() const { DCHECK(HasColorFormat()); return color_format_.value(); }
  void SetColorFormat(::headless::overlay::ColorFormat value) { color_format_ = value; }

  // The grid layout highlight configuration (default: all transparent).
  bool HasGridHighlightConfig() const { return !!grid_highlight_config_; }
  const ::headless::overlay::GridHighlightConfig* GetGridHighlightConfig() const { DCHECK(HasGridHighlightConfig()); return grid_highlight_config_.value().get(); }
  void SetGridHighlightConfig(std::unique_ptr<::headless::overlay::GridHighlightConfig> value) { grid_highlight_config_ = std::move(value); }

  // The flex container highlight configuration (default: all transparent).
  bool HasFlexContainerHighlightConfig() const { return !!flex_container_highlight_config_; }
  const ::headless::overlay::FlexContainerHighlightConfig* GetFlexContainerHighlightConfig() const { DCHECK(HasFlexContainerHighlightConfig()); return flex_container_highlight_config_.value().get(); }
  void SetFlexContainerHighlightConfig(std::unique_ptr<::headless::overlay::FlexContainerHighlightConfig> value) { flex_container_highlight_config_ = std::move(value); }

  // The flex item highlight configuration (default: all transparent).
  bool HasFlexItemHighlightConfig() const { return !!flex_item_highlight_config_; }
  const ::headless::overlay::FlexItemHighlightConfig* GetFlexItemHighlightConfig() const { DCHECK(HasFlexItemHighlightConfig()); return flex_item_highlight_config_.value().get(); }
  void SetFlexItemHighlightConfig(std::unique_ptr<::headless::overlay::FlexItemHighlightConfig> value) { flex_item_highlight_config_ = std::move(value); }

  // The contrast algorithm to use for the contrast ratio (default: aa).
  bool HasContrastAlgorithm() const { return !!contrast_algorithm_; }
  ::headless::overlay::ContrastAlgorithm GetContrastAlgorithm() const { DCHECK(HasContrastAlgorithm()); return contrast_algorithm_.value(); }
  void SetContrastAlgorithm(::headless::overlay::ContrastAlgorithm value) { contrast_algorithm_ = value; }

  // The container query container highlight configuration (default: all transparent).
  bool HasContainerQueryContainerHighlightConfig() const { return !!container_query_container_highlight_config_; }
  const ::headless::overlay::ContainerQueryContainerHighlightConfig* GetContainerQueryContainerHighlightConfig() const { DCHECK(HasContainerQueryContainerHighlightConfig()); return container_query_container_highlight_config_.value().get(); }
  void SetContainerQueryContainerHighlightConfig(std::unique_ptr<::headless::overlay::ContainerQueryContainerHighlightConfig> value) { container_query_container_highlight_config_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<HighlightConfig> Clone() const;

  template<int STATE>
  class HighlightConfigBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    HighlightConfigBuilder<STATE>& SetShowInfo(bool value) {
      result_->SetShowInfo(value);
      return *this;
    }

    HighlightConfigBuilder<STATE>& SetShowStyles(bool value) {
      result_->SetShowStyles(value);
      return *this;
    }

    HighlightConfigBuilder<STATE>& SetShowRulers(bool value) {
      result_->SetShowRulers(value);
      return *this;
    }

    HighlightConfigBuilder<STATE>& SetShowAccessibilityInfo(bool value) {
      result_->SetShowAccessibilityInfo(value);
      return *this;
    }

    HighlightConfigBuilder<STATE>& SetShowExtensionLines(bool value) {
      result_->SetShowExtensionLines(value);
      return *this;
    }

    HighlightConfigBuilder<STATE>& SetContentColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetContentColor(std::move(value));
      return *this;
    }

    HighlightConfigBuilder<STATE>& SetPaddingColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetPaddingColor(std::move(value));
      return *this;
    }

    HighlightConfigBuilder<STATE>& SetBorderColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetBorderColor(std::move(value));
      return *this;
    }

    HighlightConfigBuilder<STATE>& SetMarginColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetMarginColor(std::move(value));
      return *this;
    }

    HighlightConfigBuilder<STATE>& SetEventTargetColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetEventTargetColor(std::move(value));
      return *this;
    }

    HighlightConfigBuilder<STATE>& SetShapeColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetShapeColor(std::move(value));
      return *this;
    }

    HighlightConfigBuilder<STATE>& SetShapeMarginColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetShapeMarginColor(std::move(value));
      return *this;
    }

    HighlightConfigBuilder<STATE>& SetCssGridColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetCssGridColor(std::move(value));
      return *this;
    }

    HighlightConfigBuilder<STATE>& SetColorFormat(::headless::overlay::ColorFormat value) {
      result_->SetColorFormat(value);
      return *this;
    }

    HighlightConfigBuilder<STATE>& SetGridHighlightConfig(std::unique_ptr<::headless::overlay::GridHighlightConfig> value) {
      result_->SetGridHighlightConfig(std::move(value));
      return *this;
    }

    HighlightConfigBuilder<STATE>& SetFlexContainerHighlightConfig(std::unique_ptr<::headless::overlay::FlexContainerHighlightConfig> value) {
      result_->SetFlexContainerHighlightConfig(std::move(value));
      return *this;
    }

    HighlightConfigBuilder<STATE>& SetFlexItemHighlightConfig(std::unique_ptr<::headless::overlay::FlexItemHighlightConfig> value) {
      result_->SetFlexItemHighlightConfig(std::move(value));
      return *this;
    }

    HighlightConfigBuilder<STATE>& SetContrastAlgorithm(::headless::overlay::ContrastAlgorithm value) {
      result_->SetContrastAlgorithm(value);
      return *this;
    }

    HighlightConfigBuilder<STATE>& SetContainerQueryContainerHighlightConfig(std::unique_ptr<::headless::overlay::ContainerQueryContainerHighlightConfig> value) {
      result_->SetContainerQueryContainerHighlightConfig(std::move(value));
      return *this;
    }

    std::unique_ptr<HighlightConfig> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class HighlightConfig;
    HighlightConfigBuilder() : result_(new HighlightConfig()) { }

    template<int STEP> HighlightConfigBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<HighlightConfigBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<HighlightConfig> result_;
  };

  static HighlightConfigBuilder<0> Builder() {
    return HighlightConfigBuilder<0>();
  }

 private:
  HighlightConfig() { }

  absl::optional<bool> show_info_;
  absl::optional<bool> show_styles_;
  absl::optional<bool> show_rulers_;
  absl::optional<bool> show_accessibility_info_;
  absl::optional<bool> show_extension_lines_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> content_color_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> padding_color_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> border_color_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> margin_color_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> event_target_color_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> shape_color_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> shape_margin_color_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> css_grid_color_;
  absl::optional<::headless::overlay::ColorFormat> color_format_;
  absl::optional<std::unique_ptr<::headless::overlay::GridHighlightConfig>> grid_highlight_config_;
  absl::optional<std::unique_ptr<::headless::overlay::FlexContainerHighlightConfig>> flex_container_highlight_config_;
  absl::optional<std::unique_ptr<::headless::overlay::FlexItemHighlightConfig>> flex_item_highlight_config_;
  absl::optional<::headless::overlay::ContrastAlgorithm> contrast_algorithm_;
  absl::optional<std::unique_ptr<::headless::overlay::ContainerQueryContainerHighlightConfig>> container_query_container_highlight_config_;
};


// Configurations for Persistent Grid Highlight
class HEADLESS_EXPORT GridNodeHighlightConfig {
 public:
  static std::unique_ptr<GridNodeHighlightConfig> Parse(const base::Value& value, ErrorReporter* errors);

  GridNodeHighlightConfig(const GridNodeHighlightConfig&) = delete;
  GridNodeHighlightConfig& operator=(const GridNodeHighlightConfig&) = delete;

  ~GridNodeHighlightConfig() { }


  // A descriptor for the highlight appearance.
  const ::headless::overlay::GridHighlightConfig* GetGridHighlightConfig() const { return grid_highlight_config_.get(); }
  void SetGridHighlightConfig(std::unique_ptr<::headless::overlay::GridHighlightConfig> value) { grid_highlight_config_ = std::move(value); }

  // Identifier of the node to highlight.
  int GetNodeId() const { return node_id_; }
  void SetNodeId(int value) { node_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<GridNodeHighlightConfig> Clone() const;

  template<int STATE>
  class GridNodeHighlightConfigBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kGridHighlightConfigSet = 1 << 1,
    kNodeIdSet = 1 << 2,
      kAllRequiredFieldsSet = (kGridHighlightConfigSet | kNodeIdSet | 0)
    };

    GridNodeHighlightConfigBuilder<STATE | kGridHighlightConfigSet>& SetGridHighlightConfig(std::unique_ptr<::headless::overlay::GridHighlightConfig> value) {
      static_assert(!(STATE & kGridHighlightConfigSet), "property gridHighlightConfig should not have already been set");
      result_->SetGridHighlightConfig(std::move(value));
      return CastState<kGridHighlightConfigSet>();
    }

    GridNodeHighlightConfigBuilder<STATE | kNodeIdSet>& SetNodeId(int value) {
      static_assert(!(STATE & kNodeIdSet), "property nodeId should not have already been set");
      result_->SetNodeId(value);
      return CastState<kNodeIdSet>();
    }

    std::unique_ptr<GridNodeHighlightConfig> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GridNodeHighlightConfig;
    GridNodeHighlightConfigBuilder() : result_(new GridNodeHighlightConfig()) { }

    template<int STEP> GridNodeHighlightConfigBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GridNodeHighlightConfigBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GridNodeHighlightConfig> result_;
  };

  static GridNodeHighlightConfigBuilder<0> Builder() {
    return GridNodeHighlightConfigBuilder<0>();
  }

 private:
  GridNodeHighlightConfig() { }

  std::unique_ptr<::headless::overlay::GridHighlightConfig> grid_highlight_config_;
  int node_id_;
};


class HEADLESS_EXPORT FlexNodeHighlightConfig {
 public:
  static std::unique_ptr<FlexNodeHighlightConfig> Parse(const base::Value& value, ErrorReporter* errors);

  FlexNodeHighlightConfig(const FlexNodeHighlightConfig&) = delete;
  FlexNodeHighlightConfig& operator=(const FlexNodeHighlightConfig&) = delete;

  ~FlexNodeHighlightConfig() { }


  // A descriptor for the highlight appearance of flex containers.
  const ::headless::overlay::FlexContainerHighlightConfig* GetFlexContainerHighlightConfig() const { return flex_container_highlight_config_.get(); }
  void SetFlexContainerHighlightConfig(std::unique_ptr<::headless::overlay::FlexContainerHighlightConfig> value) { flex_container_highlight_config_ = std::move(value); }

  // Identifier of the node to highlight.
  int GetNodeId() const { return node_id_; }
  void SetNodeId(int value) { node_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<FlexNodeHighlightConfig> Clone() const;

  template<int STATE>
  class FlexNodeHighlightConfigBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kFlexContainerHighlightConfigSet = 1 << 1,
    kNodeIdSet = 1 << 2,
      kAllRequiredFieldsSet = (kFlexContainerHighlightConfigSet | kNodeIdSet | 0)
    };

    FlexNodeHighlightConfigBuilder<STATE | kFlexContainerHighlightConfigSet>& SetFlexContainerHighlightConfig(std::unique_ptr<::headless::overlay::FlexContainerHighlightConfig> value) {
      static_assert(!(STATE & kFlexContainerHighlightConfigSet), "property flexContainerHighlightConfig should not have already been set");
      result_->SetFlexContainerHighlightConfig(std::move(value));
      return CastState<kFlexContainerHighlightConfigSet>();
    }

    FlexNodeHighlightConfigBuilder<STATE | kNodeIdSet>& SetNodeId(int value) {
      static_assert(!(STATE & kNodeIdSet), "property nodeId should not have already been set");
      result_->SetNodeId(value);
      return CastState<kNodeIdSet>();
    }

    std::unique_ptr<FlexNodeHighlightConfig> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class FlexNodeHighlightConfig;
    FlexNodeHighlightConfigBuilder() : result_(new FlexNodeHighlightConfig()) { }

    template<int STEP> FlexNodeHighlightConfigBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<FlexNodeHighlightConfigBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<FlexNodeHighlightConfig> result_;
  };

  static FlexNodeHighlightConfigBuilder<0> Builder() {
    return FlexNodeHighlightConfigBuilder<0>();
  }

 private:
  FlexNodeHighlightConfig() { }

  std::unique_ptr<::headless::overlay::FlexContainerHighlightConfig> flex_container_highlight_config_;
  int node_id_;
};


class HEADLESS_EXPORT ScrollSnapContainerHighlightConfig {
 public:
  static std::unique_ptr<ScrollSnapContainerHighlightConfig> Parse(const base::Value& value, ErrorReporter* errors);

  ScrollSnapContainerHighlightConfig(const ScrollSnapContainerHighlightConfig&) = delete;
  ScrollSnapContainerHighlightConfig& operator=(const ScrollSnapContainerHighlightConfig&) = delete;

  ~ScrollSnapContainerHighlightConfig() { }


  // The style of the snapport border (default: transparent)
  bool HasSnapportBorder() const { return !!snapport_border_; }
  const ::headless::overlay::LineStyle* GetSnapportBorder() const { DCHECK(HasSnapportBorder()); return snapport_border_.value().get(); }
  void SetSnapportBorder(std::unique_ptr<::headless::overlay::LineStyle> value) { snapport_border_ = std::move(value); }

  // The style of the snap area border (default: transparent)
  bool HasSnapAreaBorder() const { return !!snap_area_border_; }
  const ::headless::overlay::LineStyle* GetSnapAreaBorder() const { DCHECK(HasSnapAreaBorder()); return snap_area_border_.value().get(); }
  void SetSnapAreaBorder(std::unique_ptr<::headless::overlay::LineStyle> value) { snap_area_border_ = std::move(value); }

  // The margin highlight fill color (default: transparent).
  bool HasScrollMarginColor() const { return !!scroll_margin_color_; }
  const ::headless::dom::RGBA* GetScrollMarginColor() const { DCHECK(HasScrollMarginColor()); return scroll_margin_color_.value().get(); }
  void SetScrollMarginColor(std::unique_ptr<::headless::dom::RGBA> value) { scroll_margin_color_ = std::move(value); }

  // The padding highlight fill color (default: transparent).
  bool HasScrollPaddingColor() const { return !!scroll_padding_color_; }
  const ::headless::dom::RGBA* GetScrollPaddingColor() const { DCHECK(HasScrollPaddingColor()); return scroll_padding_color_.value().get(); }
  void SetScrollPaddingColor(std::unique_ptr<::headless::dom::RGBA> value) { scroll_padding_color_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<ScrollSnapContainerHighlightConfig> Clone() const;

  template<int STATE>
  class ScrollSnapContainerHighlightConfigBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    ScrollSnapContainerHighlightConfigBuilder<STATE>& SetSnapportBorder(std::unique_ptr<::headless::overlay::LineStyle> value) {
      result_->SetSnapportBorder(std::move(value));
      return *this;
    }

    ScrollSnapContainerHighlightConfigBuilder<STATE>& SetSnapAreaBorder(std::unique_ptr<::headless::overlay::LineStyle> value) {
      result_->SetSnapAreaBorder(std::move(value));
      return *this;
    }

    ScrollSnapContainerHighlightConfigBuilder<STATE>& SetScrollMarginColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetScrollMarginColor(std::move(value));
      return *this;
    }

    ScrollSnapContainerHighlightConfigBuilder<STATE>& SetScrollPaddingColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetScrollPaddingColor(std::move(value));
      return *this;
    }

    std::unique_ptr<ScrollSnapContainerHighlightConfig> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class ScrollSnapContainerHighlightConfig;
    ScrollSnapContainerHighlightConfigBuilder() : result_(new ScrollSnapContainerHighlightConfig()) { }

    template<int STEP> ScrollSnapContainerHighlightConfigBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<ScrollSnapContainerHighlightConfigBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<ScrollSnapContainerHighlightConfig> result_;
  };

  static ScrollSnapContainerHighlightConfigBuilder<0> Builder() {
    return ScrollSnapContainerHighlightConfigBuilder<0>();
  }

 private:
  ScrollSnapContainerHighlightConfig() { }

  absl::optional<std::unique_ptr<::headless::overlay::LineStyle>> snapport_border_;
  absl::optional<std::unique_ptr<::headless::overlay::LineStyle>> snap_area_border_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> scroll_margin_color_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> scroll_padding_color_;
};


class HEADLESS_EXPORT ScrollSnapHighlightConfig {
 public:
  static std::unique_ptr<ScrollSnapHighlightConfig> Parse(const base::Value& value, ErrorReporter* errors);

  ScrollSnapHighlightConfig(const ScrollSnapHighlightConfig&) = delete;
  ScrollSnapHighlightConfig& operator=(const ScrollSnapHighlightConfig&) = delete;

  ~ScrollSnapHighlightConfig() { }


  // A descriptor for the highlight appearance of scroll snap containers.
  const ::headless::overlay::ScrollSnapContainerHighlightConfig* GetScrollSnapContainerHighlightConfig() const { return scroll_snap_container_highlight_config_.get(); }
  void SetScrollSnapContainerHighlightConfig(std::unique_ptr<::headless::overlay::ScrollSnapContainerHighlightConfig> value) { scroll_snap_container_highlight_config_ = std::move(value); }

  // Identifier of the node to highlight.
  int GetNodeId() const { return node_id_; }
  void SetNodeId(int value) { node_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<ScrollSnapHighlightConfig> Clone() const;

  template<int STATE>
  class ScrollSnapHighlightConfigBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kScrollSnapContainerHighlightConfigSet = 1 << 1,
    kNodeIdSet = 1 << 2,
      kAllRequiredFieldsSet = (kScrollSnapContainerHighlightConfigSet | kNodeIdSet | 0)
    };

    ScrollSnapHighlightConfigBuilder<STATE | kScrollSnapContainerHighlightConfigSet>& SetScrollSnapContainerHighlightConfig(std::unique_ptr<::headless::overlay::ScrollSnapContainerHighlightConfig> value) {
      static_assert(!(STATE & kScrollSnapContainerHighlightConfigSet), "property scrollSnapContainerHighlightConfig should not have already been set");
      result_->SetScrollSnapContainerHighlightConfig(std::move(value));
      return CastState<kScrollSnapContainerHighlightConfigSet>();
    }

    ScrollSnapHighlightConfigBuilder<STATE | kNodeIdSet>& SetNodeId(int value) {
      static_assert(!(STATE & kNodeIdSet), "property nodeId should not have already been set");
      result_->SetNodeId(value);
      return CastState<kNodeIdSet>();
    }

    std::unique_ptr<ScrollSnapHighlightConfig> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class ScrollSnapHighlightConfig;
    ScrollSnapHighlightConfigBuilder() : result_(new ScrollSnapHighlightConfig()) { }

    template<int STEP> ScrollSnapHighlightConfigBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<ScrollSnapHighlightConfigBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<ScrollSnapHighlightConfig> result_;
  };

  static ScrollSnapHighlightConfigBuilder<0> Builder() {
    return ScrollSnapHighlightConfigBuilder<0>();
  }

 private:
  ScrollSnapHighlightConfig() { }

  std::unique_ptr<::headless::overlay::ScrollSnapContainerHighlightConfig> scroll_snap_container_highlight_config_;
  int node_id_;
};


// Configuration for dual screen hinge
class HEADLESS_EXPORT HingeConfig {
 public:
  static std::unique_ptr<HingeConfig> Parse(const base::Value& value, ErrorReporter* errors);

  HingeConfig(const HingeConfig&) = delete;
  HingeConfig& operator=(const HingeConfig&) = delete;

  ~HingeConfig() { }


  // A rectangle represent hinge
  const ::headless::dom::Rect* GetRect() const { return rect_.get(); }
  void SetRect(std::unique_ptr<::headless::dom::Rect> value) { rect_ = std::move(value); }

  // The content box highlight fill color (default: a dark color).
  bool HasContentColor() const { return !!content_color_; }
  const ::headless::dom::RGBA* GetContentColor() const { DCHECK(HasContentColor()); return content_color_.value().get(); }
  void SetContentColor(std::unique_ptr<::headless::dom::RGBA> value) { content_color_ = std::move(value); }

  // The content box highlight outline color (default: transparent).
  bool HasOutlineColor() const { return !!outline_color_; }
  const ::headless::dom::RGBA* GetOutlineColor() const { DCHECK(HasOutlineColor()); return outline_color_.value().get(); }
  void SetOutlineColor(std::unique_ptr<::headless::dom::RGBA> value) { outline_color_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<HingeConfig> Clone() const;

  template<int STATE>
  class HingeConfigBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kRectSet = 1 << 1,
      kAllRequiredFieldsSet = (kRectSet | 0)
    };

    HingeConfigBuilder<STATE | kRectSet>& SetRect(std::unique_ptr<::headless::dom::Rect> value) {
      static_assert(!(STATE & kRectSet), "property rect should not have already been set");
      result_->SetRect(std::move(value));
      return CastState<kRectSet>();
    }

    HingeConfigBuilder<STATE>& SetContentColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetContentColor(std::move(value));
      return *this;
    }

    HingeConfigBuilder<STATE>& SetOutlineColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetOutlineColor(std::move(value));
      return *this;
    }

    std::unique_ptr<HingeConfig> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class HingeConfig;
    HingeConfigBuilder() : result_(new HingeConfig()) { }

    template<int STEP> HingeConfigBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<HingeConfigBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<HingeConfig> result_;
  };

  static HingeConfigBuilder<0> Builder() {
    return HingeConfigBuilder<0>();
  }

 private:
  HingeConfig() { }

  std::unique_ptr<::headless::dom::Rect> rect_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> content_color_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> outline_color_;
};


// Configuration for Window Controls Overlay
class HEADLESS_EXPORT WindowControlsOverlayConfig {
 public:
  static std::unique_ptr<WindowControlsOverlayConfig> Parse(const base::Value& value, ErrorReporter* errors);

  WindowControlsOverlayConfig(const WindowControlsOverlayConfig&) = delete;
  WindowControlsOverlayConfig& operator=(const WindowControlsOverlayConfig&) = delete;

  ~WindowControlsOverlayConfig() { }


  // Whether the title bar CSS should be shown when emulating the Window Controls Overlay.
  bool GetShowCSS() const { return showcss_; }
  void SetShowCSS(bool value) { showcss_ = value; }

  // Seleted platforms to show the overlay.
  std::string GetSelectedPlatform() const { return selected_platform_; }
  void SetSelectedPlatform(const std::string& value) { selected_platform_ = value; }

  // The theme color defined in app manifest.
  std::string GetThemeColor() const { return theme_color_; }
  void SetThemeColor(const std::string& value) { theme_color_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<WindowControlsOverlayConfig> Clone() const;

  template<int STATE>
  class WindowControlsOverlayConfigBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kShowCSSSet = 1 << 1,
    kSelectedPlatformSet = 1 << 2,
    kThemeColorSet = 1 << 3,
      kAllRequiredFieldsSet = (kShowCSSSet | kSelectedPlatformSet | kThemeColorSet | 0)
    };

    WindowControlsOverlayConfigBuilder<STATE | kShowCSSSet>& SetShowCSS(bool value) {
      static_assert(!(STATE & kShowCSSSet), "property showCSS should not have already been set");
      result_->SetShowCSS(value);
      return CastState<kShowCSSSet>();
    }

    WindowControlsOverlayConfigBuilder<STATE | kSelectedPlatformSet>& SetSelectedPlatform(const std::string& value) {
      static_assert(!(STATE & kSelectedPlatformSet), "property selectedPlatform should not have already been set");
      result_->SetSelectedPlatform(value);
      return CastState<kSelectedPlatformSet>();
    }

    WindowControlsOverlayConfigBuilder<STATE | kThemeColorSet>& SetThemeColor(const std::string& value) {
      static_assert(!(STATE & kThemeColorSet), "property themeColor should not have already been set");
      result_->SetThemeColor(value);
      return CastState<kThemeColorSet>();
    }

    std::unique_ptr<WindowControlsOverlayConfig> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class WindowControlsOverlayConfig;
    WindowControlsOverlayConfigBuilder() : result_(new WindowControlsOverlayConfig()) { }

    template<int STEP> WindowControlsOverlayConfigBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<WindowControlsOverlayConfigBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<WindowControlsOverlayConfig> result_;
  };

  static WindowControlsOverlayConfigBuilder<0> Builder() {
    return WindowControlsOverlayConfigBuilder<0>();
  }

 private:
  WindowControlsOverlayConfig() { }

  bool showcss_;
  std::string selected_platform_;
  std::string theme_color_;
};


class HEADLESS_EXPORT ContainerQueryHighlightConfig {
 public:
  static std::unique_ptr<ContainerQueryHighlightConfig> Parse(const base::Value& value, ErrorReporter* errors);

  ContainerQueryHighlightConfig(const ContainerQueryHighlightConfig&) = delete;
  ContainerQueryHighlightConfig& operator=(const ContainerQueryHighlightConfig&) = delete;

  ~ContainerQueryHighlightConfig() { }


  // A descriptor for the highlight appearance of container query containers.
  const ::headless::overlay::ContainerQueryContainerHighlightConfig* GetContainerQueryContainerHighlightConfig() const { return container_query_container_highlight_config_.get(); }
  void SetContainerQueryContainerHighlightConfig(std::unique_ptr<::headless::overlay::ContainerQueryContainerHighlightConfig> value) { container_query_container_highlight_config_ = std::move(value); }

  // Identifier of the container node to highlight.
  int GetNodeId() const { return node_id_; }
  void SetNodeId(int value) { node_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<ContainerQueryHighlightConfig> Clone() const;

  template<int STATE>
  class ContainerQueryHighlightConfigBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kContainerQueryContainerHighlightConfigSet = 1 << 1,
    kNodeIdSet = 1 << 2,
      kAllRequiredFieldsSet = (kContainerQueryContainerHighlightConfigSet | kNodeIdSet | 0)
    };

    ContainerQueryHighlightConfigBuilder<STATE | kContainerQueryContainerHighlightConfigSet>& SetContainerQueryContainerHighlightConfig(std::unique_ptr<::headless::overlay::ContainerQueryContainerHighlightConfig> value) {
      static_assert(!(STATE & kContainerQueryContainerHighlightConfigSet), "property containerQueryContainerHighlightConfig should not have already been set");
      result_->SetContainerQueryContainerHighlightConfig(std::move(value));
      return CastState<kContainerQueryContainerHighlightConfigSet>();
    }

    ContainerQueryHighlightConfigBuilder<STATE | kNodeIdSet>& SetNodeId(int value) {
      static_assert(!(STATE & kNodeIdSet), "property nodeId should not have already been set");
      result_->SetNodeId(value);
      return CastState<kNodeIdSet>();
    }

    std::unique_ptr<ContainerQueryHighlightConfig> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class ContainerQueryHighlightConfig;
    ContainerQueryHighlightConfigBuilder() : result_(new ContainerQueryHighlightConfig()) { }

    template<int STEP> ContainerQueryHighlightConfigBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<ContainerQueryHighlightConfigBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<ContainerQueryHighlightConfig> result_;
  };

  static ContainerQueryHighlightConfigBuilder<0> Builder() {
    return ContainerQueryHighlightConfigBuilder<0>();
  }

 private:
  ContainerQueryHighlightConfig() { }

  std::unique_ptr<::headless::overlay::ContainerQueryContainerHighlightConfig> container_query_container_highlight_config_;
  int node_id_;
};


class HEADLESS_EXPORT ContainerQueryContainerHighlightConfig {
 public:
  static std::unique_ptr<ContainerQueryContainerHighlightConfig> Parse(const base::Value& value, ErrorReporter* errors);

  ContainerQueryContainerHighlightConfig(const ContainerQueryContainerHighlightConfig&) = delete;
  ContainerQueryContainerHighlightConfig& operator=(const ContainerQueryContainerHighlightConfig&) = delete;

  ~ContainerQueryContainerHighlightConfig() { }


  // The style of the container border.
  bool HasContainerBorder() const { return !!container_border_; }
  const ::headless::overlay::LineStyle* GetContainerBorder() const { DCHECK(HasContainerBorder()); return container_border_.value().get(); }
  void SetContainerBorder(std::unique_ptr<::headless::overlay::LineStyle> value) { container_border_ = std::move(value); }

  // The style of the descendants' borders.
  bool HasDescendantBorder() const { return !!descendant_border_; }
  const ::headless::overlay::LineStyle* GetDescendantBorder() const { DCHECK(HasDescendantBorder()); return descendant_border_.value().get(); }
  void SetDescendantBorder(std::unique_ptr<::headless::overlay::LineStyle> value) { descendant_border_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<ContainerQueryContainerHighlightConfig> Clone() const;

  template<int STATE>
  class ContainerQueryContainerHighlightConfigBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    ContainerQueryContainerHighlightConfigBuilder<STATE>& SetContainerBorder(std::unique_ptr<::headless::overlay::LineStyle> value) {
      result_->SetContainerBorder(std::move(value));
      return *this;
    }

    ContainerQueryContainerHighlightConfigBuilder<STATE>& SetDescendantBorder(std::unique_ptr<::headless::overlay::LineStyle> value) {
      result_->SetDescendantBorder(std::move(value));
      return *this;
    }

    std::unique_ptr<ContainerQueryContainerHighlightConfig> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class ContainerQueryContainerHighlightConfig;
    ContainerQueryContainerHighlightConfigBuilder() : result_(new ContainerQueryContainerHighlightConfig()) { }

    template<int STEP> ContainerQueryContainerHighlightConfigBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<ContainerQueryContainerHighlightConfigBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<ContainerQueryContainerHighlightConfig> result_;
  };

  static ContainerQueryContainerHighlightConfigBuilder<0> Builder() {
    return ContainerQueryContainerHighlightConfigBuilder<0>();
  }

 private:
  ContainerQueryContainerHighlightConfig() { }

  absl::optional<std::unique_ptr<::headless::overlay::LineStyle>> container_border_;
  absl::optional<std::unique_ptr<::headless::overlay::LineStyle>> descendant_border_;
};


class HEADLESS_EXPORT IsolatedElementHighlightConfig {
 public:
  static std::unique_ptr<IsolatedElementHighlightConfig> Parse(const base::Value& value, ErrorReporter* errors);

  IsolatedElementHighlightConfig(const IsolatedElementHighlightConfig&) = delete;
  IsolatedElementHighlightConfig& operator=(const IsolatedElementHighlightConfig&) = delete;

  ~IsolatedElementHighlightConfig() { }


  // A descriptor for the highlight appearance of an element in isolation mode.
  const ::headless::overlay::IsolationModeHighlightConfig* GetIsolationModeHighlightConfig() const { return isolation_mode_highlight_config_.get(); }
  void SetIsolationModeHighlightConfig(std::unique_ptr<::headless::overlay::IsolationModeHighlightConfig> value) { isolation_mode_highlight_config_ = std::move(value); }

  // Identifier of the isolated element to highlight.
  int GetNodeId() const { return node_id_; }
  void SetNodeId(int value) { node_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<IsolatedElementHighlightConfig> Clone() const;

  template<int STATE>
  class IsolatedElementHighlightConfigBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kIsolationModeHighlightConfigSet = 1 << 1,
    kNodeIdSet = 1 << 2,
      kAllRequiredFieldsSet = (kIsolationModeHighlightConfigSet | kNodeIdSet | 0)
    };

    IsolatedElementHighlightConfigBuilder<STATE | kIsolationModeHighlightConfigSet>& SetIsolationModeHighlightConfig(std::unique_ptr<::headless::overlay::IsolationModeHighlightConfig> value) {
      static_assert(!(STATE & kIsolationModeHighlightConfigSet), "property isolationModeHighlightConfig should not have already been set");
      result_->SetIsolationModeHighlightConfig(std::move(value));
      return CastState<kIsolationModeHighlightConfigSet>();
    }

    IsolatedElementHighlightConfigBuilder<STATE | kNodeIdSet>& SetNodeId(int value) {
      static_assert(!(STATE & kNodeIdSet), "property nodeId should not have already been set");
      result_->SetNodeId(value);
      return CastState<kNodeIdSet>();
    }

    std::unique_ptr<IsolatedElementHighlightConfig> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class IsolatedElementHighlightConfig;
    IsolatedElementHighlightConfigBuilder() : result_(new IsolatedElementHighlightConfig()) { }

    template<int STEP> IsolatedElementHighlightConfigBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<IsolatedElementHighlightConfigBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<IsolatedElementHighlightConfig> result_;
  };

  static IsolatedElementHighlightConfigBuilder<0> Builder() {
    return IsolatedElementHighlightConfigBuilder<0>();
  }

 private:
  IsolatedElementHighlightConfig() { }

  std::unique_ptr<::headless::overlay::IsolationModeHighlightConfig> isolation_mode_highlight_config_;
  int node_id_;
};


class HEADLESS_EXPORT IsolationModeHighlightConfig {
 public:
  static std::unique_ptr<IsolationModeHighlightConfig> Parse(const base::Value& value, ErrorReporter* errors);

  IsolationModeHighlightConfig(const IsolationModeHighlightConfig&) = delete;
  IsolationModeHighlightConfig& operator=(const IsolationModeHighlightConfig&) = delete;

  ~IsolationModeHighlightConfig() { }


  // The fill color of the resizers (default: transparent).
  bool HasResizerColor() const { return !!resizer_color_; }
  const ::headless::dom::RGBA* GetResizerColor() const { DCHECK(HasResizerColor()); return resizer_color_.value().get(); }
  void SetResizerColor(std::unique_ptr<::headless::dom::RGBA> value) { resizer_color_ = std::move(value); }

  // The fill color for resizer handles (default: transparent).
  bool HasResizerHandleColor() const { return !!resizer_handle_color_; }
  const ::headless::dom::RGBA* GetResizerHandleColor() const { DCHECK(HasResizerHandleColor()); return resizer_handle_color_.value().get(); }
  void SetResizerHandleColor(std::unique_ptr<::headless::dom::RGBA> value) { resizer_handle_color_ = std::move(value); }

  // The fill color for the mask covering non-isolated elements (default: transparent).
  bool HasMaskColor() const { return !!mask_color_; }
  const ::headless::dom::RGBA* GetMaskColor() const { DCHECK(HasMaskColor()); return mask_color_.value().get(); }
  void SetMaskColor(std::unique_ptr<::headless::dom::RGBA> value) { mask_color_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<IsolationModeHighlightConfig> Clone() const;

  template<int STATE>
  class IsolationModeHighlightConfigBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    IsolationModeHighlightConfigBuilder<STATE>& SetResizerColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetResizerColor(std::move(value));
      return *this;
    }

    IsolationModeHighlightConfigBuilder<STATE>& SetResizerHandleColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetResizerHandleColor(std::move(value));
      return *this;
    }

    IsolationModeHighlightConfigBuilder<STATE>& SetMaskColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetMaskColor(std::move(value));
      return *this;
    }

    std::unique_ptr<IsolationModeHighlightConfig> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class IsolationModeHighlightConfig;
    IsolationModeHighlightConfigBuilder() : result_(new IsolationModeHighlightConfig()) { }

    template<int STEP> IsolationModeHighlightConfigBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<IsolationModeHighlightConfigBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<IsolationModeHighlightConfig> result_;
  };

  static IsolationModeHighlightConfigBuilder<0> Builder() {
    return IsolationModeHighlightConfigBuilder<0>();
  }

 private:
  IsolationModeHighlightConfig() { }

  absl::optional<std::unique_ptr<::headless::dom::RGBA>> resizer_color_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> resizer_handle_color_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> mask_color_;
};


// Parameters for the Disable command.
class HEADLESS_EXPORT DisableParams {
 public:
  static std::unique_ptr<DisableParams> Parse(const base::Value& value, ErrorReporter* errors);

  DisableParams(const DisableParams&) = delete;
  DisableParams& operator=(const DisableParams&) = delete;

  ~DisableParams() { }


  base::Value Serialize() const;
  std::unique_ptr<DisableParams> Clone() const;

  template<int STATE>
  class DisableParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<DisableParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DisableParams;
    DisableParamsBuilder() : result_(new DisableParams()) { }

    template<int STEP> DisableParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DisableParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DisableParams> result_;
  };

  static DisableParamsBuilder<0> Builder() {
    return DisableParamsBuilder<0>();
  }

 private:
  DisableParams() { }

};


// Result for the Disable command.
class HEADLESS_EXPORT DisableResult {
 public:
  static std::unique_ptr<DisableResult> Parse(const base::Value& value, ErrorReporter* errors);

  DisableResult(const DisableResult&) = delete;
  DisableResult& operator=(const DisableResult&) = delete;

  ~DisableResult() { }


  base::Value Serialize() const;
  std::unique_ptr<DisableResult> Clone() const;

  template<int STATE>
  class DisableResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<DisableResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DisableResult;
    DisableResultBuilder() : result_(new DisableResult()) { }

    template<int STEP> DisableResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DisableResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DisableResult> result_;
  };

  static DisableResultBuilder<0> Builder() {
    return DisableResultBuilder<0>();
  }

 private:
  DisableResult() { }

};


// Parameters for the Enable command.
class HEADLESS_EXPORT EnableParams {
 public:
  static std::unique_ptr<EnableParams> Parse(const base::Value& value, ErrorReporter* errors);

  EnableParams(const EnableParams&) = delete;
  EnableParams& operator=(const EnableParams&) = delete;

  ~EnableParams() { }


  base::Value Serialize() const;
  std::unique_ptr<EnableParams> Clone() const;

  template<int STATE>
  class EnableParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<EnableParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class EnableParams;
    EnableParamsBuilder() : result_(new EnableParams()) { }

    template<int STEP> EnableParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<EnableParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<EnableParams> result_;
  };

  static EnableParamsBuilder<0> Builder() {
    return EnableParamsBuilder<0>();
  }

 private:
  EnableParams() { }

};


// Result for the Enable command.
class HEADLESS_EXPORT EnableResult {
 public:
  static std::unique_ptr<EnableResult> Parse(const base::Value& value, ErrorReporter* errors);

  EnableResult(const EnableResult&) = delete;
  EnableResult& operator=(const EnableResult&) = delete;

  ~EnableResult() { }


  base::Value Serialize() const;
  std::unique_ptr<EnableResult> Clone() const;

  template<int STATE>
  class EnableResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<EnableResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class EnableResult;
    EnableResultBuilder() : result_(new EnableResult()) { }

    template<int STEP> EnableResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<EnableResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<EnableResult> result_;
  };

  static EnableResultBuilder<0> Builder() {
    return EnableResultBuilder<0>();
  }

 private:
  EnableResult() { }

};


// Parameters for the GetHighlightObjectForTest command.
class HEADLESS_EXPORT GetHighlightObjectForTestParams {
 public:
  static std::unique_ptr<GetHighlightObjectForTestParams> Parse(const base::Value& value, ErrorReporter* errors);

  GetHighlightObjectForTestParams(const GetHighlightObjectForTestParams&) = delete;
  GetHighlightObjectForTestParams& operator=(const GetHighlightObjectForTestParams&) = delete;

  ~GetHighlightObjectForTestParams() { }


  // Id of the node to get highlight object for.
  int GetNodeId() const { return node_id_; }
  void SetNodeId(int value) { node_id_ = value; }

  // Whether to include distance info.
  bool HasIncludeDistance() const { return !!include_distance_; }
  bool GetIncludeDistance() const { DCHECK(HasIncludeDistance()); return include_distance_.value(); }
  void SetIncludeDistance(bool value) { include_distance_ = value; }

  // Whether to include style info.
  bool HasIncludeStyle() const { return !!include_style_; }
  bool GetIncludeStyle() const { DCHECK(HasIncludeStyle()); return include_style_.value(); }
  void SetIncludeStyle(bool value) { include_style_ = value; }

  // The color format to get config with (default: hex).
  bool HasColorFormat() const { return !!color_format_; }
  ::headless::overlay::ColorFormat GetColorFormat() const { DCHECK(HasColorFormat()); return color_format_.value(); }
  void SetColorFormat(::headless::overlay::ColorFormat value) { color_format_ = value; }

  // Whether to show accessibility info (default: true).
  bool HasShowAccessibilityInfo() const { return !!show_accessibility_info_; }
  bool GetShowAccessibilityInfo() const { DCHECK(HasShowAccessibilityInfo()); return show_accessibility_info_.value(); }
  void SetShowAccessibilityInfo(bool value) { show_accessibility_info_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<GetHighlightObjectForTestParams> Clone() const;

  template<int STATE>
  class GetHighlightObjectForTestParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kNodeIdSet = 1 << 1,
      kAllRequiredFieldsSet = (kNodeIdSet | 0)
    };

    GetHighlightObjectForTestParamsBuilder<STATE | kNodeIdSet>& SetNodeId(int value) {
      static_assert(!(STATE & kNodeIdSet), "property nodeId should not have already been set");
      result_->SetNodeId(value);
      return CastState<kNodeIdSet>();
    }

    GetHighlightObjectForTestParamsBuilder<STATE>& SetIncludeDistance(bool value) {
      result_->SetIncludeDistance(value);
      return *this;
    }

    GetHighlightObjectForTestParamsBuilder<STATE>& SetIncludeStyle(bool value) {
      result_->SetIncludeStyle(value);
      return *this;
    }

    GetHighlightObjectForTestParamsBuilder<STATE>& SetColorFormat(::headless::overlay::ColorFormat value) {
      result_->SetColorFormat(value);
      return *this;
    }

    GetHighlightObjectForTestParamsBuilder<STATE>& SetShowAccessibilityInfo(bool value) {
      result_->SetShowAccessibilityInfo(value);
      return *this;
    }

    std::unique_ptr<GetHighlightObjectForTestParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetHighlightObjectForTestParams;
    GetHighlightObjectForTestParamsBuilder() : result_(new GetHighlightObjectForTestParams()) { }

    template<int STEP> GetHighlightObjectForTestParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetHighlightObjectForTestParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetHighlightObjectForTestParams> result_;
  };

  static GetHighlightObjectForTestParamsBuilder<0> Builder() {
    return GetHighlightObjectForTestParamsBuilder<0>();
  }

 private:
  GetHighlightObjectForTestParams() { }

  int node_id_;
  absl::optional<bool> include_distance_;
  absl::optional<bool> include_style_;
  absl::optional<::headless::overlay::ColorFormat> color_format_;
  absl::optional<bool> show_accessibility_info_;
};


// Result for the GetHighlightObjectForTest command.
class HEADLESS_EXPORT GetHighlightObjectForTestResult {
 public:
  static std::unique_ptr<GetHighlightObjectForTestResult> Parse(const base::Value& value, ErrorReporter* errors);

  GetHighlightObjectForTestResult(const GetHighlightObjectForTestResult&) = delete;
  GetHighlightObjectForTestResult& operator=(const GetHighlightObjectForTestResult&) = delete;

  ~GetHighlightObjectForTestResult() { }


  // Highlight data for the node.
  const base::Value* GetHighlight() const { return highlight_.get(); }
  void SetHighlight(std::unique_ptr<base::Value> value) { highlight_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<GetHighlightObjectForTestResult> Clone() const;

  template<int STATE>
  class GetHighlightObjectForTestResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kHighlightSet = 1 << 1,
      kAllRequiredFieldsSet = (kHighlightSet | 0)
    };

    GetHighlightObjectForTestResultBuilder<STATE | kHighlightSet>& SetHighlight(std::unique_ptr<base::Value> value) {
      static_assert(!(STATE & kHighlightSet), "property highlight should not have already been set");
      result_->SetHighlight(std::move(value));
      return CastState<kHighlightSet>();
    }

    std::unique_ptr<GetHighlightObjectForTestResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetHighlightObjectForTestResult;
    GetHighlightObjectForTestResultBuilder() : result_(new GetHighlightObjectForTestResult()) { }

    template<int STEP> GetHighlightObjectForTestResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetHighlightObjectForTestResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetHighlightObjectForTestResult> result_;
  };

  static GetHighlightObjectForTestResultBuilder<0> Builder() {
    return GetHighlightObjectForTestResultBuilder<0>();
  }

 private:
  GetHighlightObjectForTestResult() { }

  std::unique_ptr<base::Value> highlight_;
};


// Parameters for the GetGridHighlightObjectsForTest command.
class HEADLESS_EXPORT GetGridHighlightObjectsForTestParams {
 public:
  static std::unique_ptr<GetGridHighlightObjectsForTestParams> Parse(const base::Value& value, ErrorReporter* errors);

  GetGridHighlightObjectsForTestParams(const GetGridHighlightObjectsForTestParams&) = delete;
  GetGridHighlightObjectsForTestParams& operator=(const GetGridHighlightObjectsForTestParams&) = delete;

  ~GetGridHighlightObjectsForTestParams() { }


  // Ids of the node to get highlight object for.
  const std::vector<int>* GetNodeIds() const { return &node_ids_; }
  void SetNodeIds(std::vector<int> value) { node_ids_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<GetGridHighlightObjectsForTestParams> Clone() const;

  template<int STATE>
  class GetGridHighlightObjectsForTestParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kNodeIdsSet = 1 << 1,
      kAllRequiredFieldsSet = (kNodeIdsSet | 0)
    };

    GetGridHighlightObjectsForTestParamsBuilder<STATE | kNodeIdsSet>& SetNodeIds(std::vector<int> value) {
      static_assert(!(STATE & kNodeIdsSet), "property nodeIds should not have already been set");
      result_->SetNodeIds(std::move(value));
      return CastState<kNodeIdsSet>();
    }

    std::unique_ptr<GetGridHighlightObjectsForTestParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetGridHighlightObjectsForTestParams;
    GetGridHighlightObjectsForTestParamsBuilder() : result_(new GetGridHighlightObjectsForTestParams()) { }

    template<int STEP> GetGridHighlightObjectsForTestParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetGridHighlightObjectsForTestParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetGridHighlightObjectsForTestParams> result_;
  };

  static GetGridHighlightObjectsForTestParamsBuilder<0> Builder() {
    return GetGridHighlightObjectsForTestParamsBuilder<0>();
  }

 private:
  GetGridHighlightObjectsForTestParams() { }

  std::vector<int> node_ids_;
};


// Result for the GetGridHighlightObjectsForTest command.
class HEADLESS_EXPORT GetGridHighlightObjectsForTestResult {
 public:
  static std::unique_ptr<GetGridHighlightObjectsForTestResult> Parse(const base::Value& value, ErrorReporter* errors);

  GetGridHighlightObjectsForTestResult(const GetGridHighlightObjectsForTestResult&) = delete;
  GetGridHighlightObjectsForTestResult& operator=(const GetGridHighlightObjectsForTestResult&) = delete;

  ~GetGridHighlightObjectsForTestResult() { }


  // Grid Highlight data for the node ids provided.
  const base::Value* GetHighlights() const { return highlights_.get(); }
  void SetHighlights(std::unique_ptr<base::Value> value) { highlights_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<GetGridHighlightObjectsForTestResult> Clone() const;

  template<int STATE>
  class GetGridHighlightObjectsForTestResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kHighlightsSet = 1 << 1,
      kAllRequiredFieldsSet = (kHighlightsSet | 0)
    };

    GetGridHighlightObjectsForTestResultBuilder<STATE | kHighlightsSet>& SetHighlights(std::unique_ptr<base::Value> value) {
      static_assert(!(STATE & kHighlightsSet), "property highlights should not have already been set");
      result_->SetHighlights(std::move(value));
      return CastState<kHighlightsSet>();
    }

    std::unique_ptr<GetGridHighlightObjectsForTestResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetGridHighlightObjectsForTestResult;
    GetGridHighlightObjectsForTestResultBuilder() : result_(new GetGridHighlightObjectsForTestResult()) { }

    template<int STEP> GetGridHighlightObjectsForTestResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetGridHighlightObjectsForTestResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetGridHighlightObjectsForTestResult> result_;
  };

  static GetGridHighlightObjectsForTestResultBuilder<0> Builder() {
    return GetGridHighlightObjectsForTestResultBuilder<0>();
  }

 private:
  GetGridHighlightObjectsForTestResult() { }

  std::unique_ptr<base::Value> highlights_;
};


// Parameters for the GetSourceOrderHighlightObjectForTest command.
class HEADLESS_EXPORT GetSourceOrderHighlightObjectForTestParams {
 public:
  static std::unique_ptr<GetSourceOrderHighlightObjectForTestParams> Parse(const base::Value& value, ErrorReporter* errors);

  GetSourceOrderHighlightObjectForTestParams(const GetSourceOrderHighlightObjectForTestParams&) = delete;
  GetSourceOrderHighlightObjectForTestParams& operator=(const GetSourceOrderHighlightObjectForTestParams&) = delete;

  ~GetSourceOrderHighlightObjectForTestParams() { }


  // Id of the node to highlight.
  int GetNodeId() const { return node_id_; }
  void SetNodeId(int value) { node_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<GetSourceOrderHighlightObjectForTestParams> Clone() const;

  template<int STATE>
  class GetSourceOrderHighlightObjectForTestParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kNodeIdSet = 1 << 1,
      kAllRequiredFieldsSet = (kNodeIdSet | 0)
    };

    GetSourceOrderHighlightObjectForTestParamsBuilder<STATE | kNodeIdSet>& SetNodeId(int value) {
      static_assert(!(STATE & kNodeIdSet), "property nodeId should not have already been set");
      result_->SetNodeId(value);
      return CastState<kNodeIdSet>();
    }

    std::unique_ptr<GetSourceOrderHighlightObjectForTestParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetSourceOrderHighlightObjectForTestParams;
    GetSourceOrderHighlightObjectForTestParamsBuilder() : result_(new GetSourceOrderHighlightObjectForTestParams()) { }

    template<int STEP> GetSourceOrderHighlightObjectForTestParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetSourceOrderHighlightObjectForTestParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetSourceOrderHighlightObjectForTestParams> result_;
  };

  static GetSourceOrderHighlightObjectForTestParamsBuilder<0> Builder() {
    return GetSourceOrderHighlightObjectForTestParamsBuilder<0>();
  }

 private:
  GetSourceOrderHighlightObjectForTestParams() { }

  int node_id_;
};


// Result for the GetSourceOrderHighlightObjectForTest command.
class HEADLESS_EXPORT GetSourceOrderHighlightObjectForTestResult {
 public:
  static std::unique_ptr<GetSourceOrderHighlightObjectForTestResult> Parse(const base::Value& value, ErrorReporter* errors);

  GetSourceOrderHighlightObjectForTestResult(const GetSourceOrderHighlightObjectForTestResult&) = delete;
  GetSourceOrderHighlightObjectForTestResult& operator=(const GetSourceOrderHighlightObjectForTestResult&) = delete;

  ~GetSourceOrderHighlightObjectForTestResult() { }


  // Source order highlight data for the node id provided.
  const base::Value* GetHighlight() const { return highlight_.get(); }
  void SetHighlight(std::unique_ptr<base::Value> value) { highlight_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<GetSourceOrderHighlightObjectForTestResult> Clone() const;

  template<int STATE>
  class GetSourceOrderHighlightObjectForTestResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kHighlightSet = 1 << 1,
      kAllRequiredFieldsSet = (kHighlightSet | 0)
    };

    GetSourceOrderHighlightObjectForTestResultBuilder<STATE | kHighlightSet>& SetHighlight(std::unique_ptr<base::Value> value) {
      static_assert(!(STATE & kHighlightSet), "property highlight should not have already been set");
      result_->SetHighlight(std::move(value));
      return CastState<kHighlightSet>();
    }

    std::unique_ptr<GetSourceOrderHighlightObjectForTestResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetSourceOrderHighlightObjectForTestResult;
    GetSourceOrderHighlightObjectForTestResultBuilder() : result_(new GetSourceOrderHighlightObjectForTestResult()) { }

    template<int STEP> GetSourceOrderHighlightObjectForTestResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetSourceOrderHighlightObjectForTestResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetSourceOrderHighlightObjectForTestResult> result_;
  };

  static GetSourceOrderHighlightObjectForTestResultBuilder<0> Builder() {
    return GetSourceOrderHighlightObjectForTestResultBuilder<0>();
  }

 private:
  GetSourceOrderHighlightObjectForTestResult() { }

  std::unique_ptr<base::Value> highlight_;
};


// Parameters for the HideHighlight command.
class HEADLESS_EXPORT HideHighlightParams {
 public:
  static std::unique_ptr<HideHighlightParams> Parse(const base::Value& value, ErrorReporter* errors);

  HideHighlightParams(const HideHighlightParams&) = delete;
  HideHighlightParams& operator=(const HideHighlightParams&) = delete;

  ~HideHighlightParams() { }


  base::Value Serialize() const;
  std::unique_ptr<HideHighlightParams> Clone() const;

  template<int STATE>
  class HideHighlightParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<HideHighlightParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class HideHighlightParams;
    HideHighlightParamsBuilder() : result_(new HideHighlightParams()) { }

    template<int STEP> HideHighlightParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<HideHighlightParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<HideHighlightParams> result_;
  };

  static HideHighlightParamsBuilder<0> Builder() {
    return HideHighlightParamsBuilder<0>();
  }

 private:
  HideHighlightParams() { }

};


// Result for the HideHighlight command.
class HEADLESS_EXPORT HideHighlightResult {
 public:
  static std::unique_ptr<HideHighlightResult> Parse(const base::Value& value, ErrorReporter* errors);

  HideHighlightResult(const HideHighlightResult&) = delete;
  HideHighlightResult& operator=(const HideHighlightResult&) = delete;

  ~HideHighlightResult() { }


  base::Value Serialize() const;
  std::unique_ptr<HideHighlightResult> Clone() const;

  template<int STATE>
  class HideHighlightResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<HideHighlightResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class HideHighlightResult;
    HideHighlightResultBuilder() : result_(new HideHighlightResult()) { }

    template<int STEP> HideHighlightResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<HideHighlightResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<HideHighlightResult> result_;
  };

  static HideHighlightResultBuilder<0> Builder() {
    return HideHighlightResultBuilder<0>();
  }

 private:
  HideHighlightResult() { }

};


// Parameters for the HighlightFrame command.
class HEADLESS_EXPORT HighlightFrameParams {
 public:
  static std::unique_ptr<HighlightFrameParams> Parse(const base::Value& value, ErrorReporter* errors);

  HighlightFrameParams(const HighlightFrameParams&) = delete;
  HighlightFrameParams& operator=(const HighlightFrameParams&) = delete;

  ~HighlightFrameParams() { }


  // Identifier of the frame to highlight.
  std::string GetFrameId() const { return frame_id_; }
  void SetFrameId(const std::string& value) { frame_id_ = value; }

  // The content box highlight fill color (default: transparent).
  bool HasContentColor() const { return !!content_color_; }
  const ::headless::dom::RGBA* GetContentColor() const { DCHECK(HasContentColor()); return content_color_.value().get(); }
  void SetContentColor(std::unique_ptr<::headless::dom::RGBA> value) { content_color_ = std::move(value); }

  // The content box highlight outline color (default: transparent).
  bool HasContentOutlineColor() const { return !!content_outline_color_; }
  const ::headless::dom::RGBA* GetContentOutlineColor() const { DCHECK(HasContentOutlineColor()); return content_outline_color_.value().get(); }
  void SetContentOutlineColor(std::unique_ptr<::headless::dom::RGBA> value) { content_outline_color_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<HighlightFrameParams> Clone() const;

  template<int STATE>
  class HighlightFrameParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kFrameIdSet = 1 << 1,
      kAllRequiredFieldsSet = (kFrameIdSet | 0)
    };

    HighlightFrameParamsBuilder<STATE | kFrameIdSet>& SetFrameId(const std::string& value) {
      static_assert(!(STATE & kFrameIdSet), "property frameId should not have already been set");
      result_->SetFrameId(value);
      return CastState<kFrameIdSet>();
    }

    HighlightFrameParamsBuilder<STATE>& SetContentColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetContentColor(std::move(value));
      return *this;
    }

    HighlightFrameParamsBuilder<STATE>& SetContentOutlineColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetContentOutlineColor(std::move(value));
      return *this;
    }

    std::unique_ptr<HighlightFrameParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class HighlightFrameParams;
    HighlightFrameParamsBuilder() : result_(new HighlightFrameParams()) { }

    template<int STEP> HighlightFrameParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<HighlightFrameParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<HighlightFrameParams> result_;
  };

  static HighlightFrameParamsBuilder<0> Builder() {
    return HighlightFrameParamsBuilder<0>();
  }

 private:
  HighlightFrameParams() { }

  std::string frame_id_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> content_color_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> content_outline_color_;
};


// Result for the HighlightFrame command.
class HEADLESS_EXPORT HighlightFrameResult {
 public:
  static std::unique_ptr<HighlightFrameResult> Parse(const base::Value& value, ErrorReporter* errors);

  HighlightFrameResult(const HighlightFrameResult&) = delete;
  HighlightFrameResult& operator=(const HighlightFrameResult&) = delete;

  ~HighlightFrameResult() { }


  base::Value Serialize() const;
  std::unique_ptr<HighlightFrameResult> Clone() const;

  template<int STATE>
  class HighlightFrameResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<HighlightFrameResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class HighlightFrameResult;
    HighlightFrameResultBuilder() : result_(new HighlightFrameResult()) { }

    template<int STEP> HighlightFrameResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<HighlightFrameResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<HighlightFrameResult> result_;
  };

  static HighlightFrameResultBuilder<0> Builder() {
    return HighlightFrameResultBuilder<0>();
  }

 private:
  HighlightFrameResult() { }

};


// Parameters for the HighlightNode command.
class HEADLESS_EXPORT HighlightNodeParams {
 public:
  static std::unique_ptr<HighlightNodeParams> Parse(const base::Value& value, ErrorReporter* errors);

  HighlightNodeParams(const HighlightNodeParams&) = delete;
  HighlightNodeParams& operator=(const HighlightNodeParams&) = delete;

  ~HighlightNodeParams() { }


  // A descriptor for the highlight appearance.
  const ::headless::overlay::HighlightConfig* GetHighlightConfig() const { return highlight_config_.get(); }
  void SetHighlightConfig(std::unique_ptr<::headless::overlay::HighlightConfig> value) { highlight_config_ = std::move(value); }

  // Identifier of the node to highlight.
  bool HasNodeId() const { return !!node_id_; }
  int GetNodeId() const { DCHECK(HasNodeId()); return node_id_.value(); }
  void SetNodeId(int value) { node_id_ = value; }

  // Identifier of the backend node to highlight.
  bool HasBackendNodeId() const { return !!backend_node_id_; }
  int GetBackendNodeId() const { DCHECK(HasBackendNodeId()); return backend_node_id_.value(); }
  void SetBackendNodeId(int value) { backend_node_id_ = value; }

  // JavaScript object id of the node to be highlighted.
  bool HasObjectId() const { return !!object_id_; }
  std::string GetObjectId() const { DCHECK(HasObjectId()); return object_id_.value(); }
  void SetObjectId(const std::string& value) { object_id_ = value; }

  // Selectors to highlight relevant nodes.
  bool HasSelector() const { return !!selector_; }
  std::string GetSelector() const { DCHECK(HasSelector()); return selector_.value(); }
  void SetSelector(const std::string& value) { selector_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<HighlightNodeParams> Clone() const;

  template<int STATE>
  class HighlightNodeParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kHighlightConfigSet = 1 << 1,
      kAllRequiredFieldsSet = (kHighlightConfigSet | 0)
    };

    HighlightNodeParamsBuilder<STATE | kHighlightConfigSet>& SetHighlightConfig(std::unique_ptr<::headless::overlay::HighlightConfig> value) {
      static_assert(!(STATE & kHighlightConfigSet), "property highlightConfig should not have already been set");
      result_->SetHighlightConfig(std::move(value));
      return CastState<kHighlightConfigSet>();
    }

    HighlightNodeParamsBuilder<STATE>& SetNodeId(int value) {
      result_->SetNodeId(value);
      return *this;
    }

    HighlightNodeParamsBuilder<STATE>& SetBackendNodeId(int value) {
      result_->SetBackendNodeId(value);
      return *this;
    }

    HighlightNodeParamsBuilder<STATE>& SetObjectId(const std::string& value) {
      result_->SetObjectId(value);
      return *this;
    }

    HighlightNodeParamsBuilder<STATE>& SetSelector(const std::string& value) {
      result_->SetSelector(value);
      return *this;
    }

    std::unique_ptr<HighlightNodeParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class HighlightNodeParams;
    HighlightNodeParamsBuilder() : result_(new HighlightNodeParams()) { }

    template<int STEP> HighlightNodeParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<HighlightNodeParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<HighlightNodeParams> result_;
  };

  static HighlightNodeParamsBuilder<0> Builder() {
    return HighlightNodeParamsBuilder<0>();
  }

 private:
  HighlightNodeParams() { }

  std::unique_ptr<::headless::overlay::HighlightConfig> highlight_config_;
  absl::optional<int> node_id_;
  absl::optional<int> backend_node_id_;
  absl::optional<std::string> object_id_;
  absl::optional<std::string> selector_;
};


// Result for the HighlightNode command.
class HEADLESS_EXPORT HighlightNodeResult {
 public:
  static std::unique_ptr<HighlightNodeResult> Parse(const base::Value& value, ErrorReporter* errors);

  HighlightNodeResult(const HighlightNodeResult&) = delete;
  HighlightNodeResult& operator=(const HighlightNodeResult&) = delete;

  ~HighlightNodeResult() { }


  base::Value Serialize() const;
  std::unique_ptr<HighlightNodeResult> Clone() const;

  template<int STATE>
  class HighlightNodeResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<HighlightNodeResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class HighlightNodeResult;
    HighlightNodeResultBuilder() : result_(new HighlightNodeResult()) { }

    template<int STEP> HighlightNodeResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<HighlightNodeResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<HighlightNodeResult> result_;
  };

  static HighlightNodeResultBuilder<0> Builder() {
    return HighlightNodeResultBuilder<0>();
  }

 private:
  HighlightNodeResult() { }

};


// Parameters for the HighlightQuad command.
class HEADLESS_EXPORT HighlightQuadParams {
 public:
  static std::unique_ptr<HighlightQuadParams> Parse(const base::Value& value, ErrorReporter* errors);

  HighlightQuadParams(const HighlightQuadParams&) = delete;
  HighlightQuadParams& operator=(const HighlightQuadParams&) = delete;

  ~HighlightQuadParams() { }


  // Quad to highlight
  const std::vector<double>* GetQuad() const { return &quad_; }
  void SetQuad(std::vector<double> value) { quad_ = std::move(value); }

  // The highlight fill color (default: transparent).
  bool HasColor() const { return !!color_; }
  const ::headless::dom::RGBA* GetColor() const { DCHECK(HasColor()); return color_.value().get(); }
  void SetColor(std::unique_ptr<::headless::dom::RGBA> value) { color_ = std::move(value); }

  // The highlight outline color (default: transparent).
  bool HasOutlineColor() const { return !!outline_color_; }
  const ::headless::dom::RGBA* GetOutlineColor() const { DCHECK(HasOutlineColor()); return outline_color_.value().get(); }
  void SetOutlineColor(std::unique_ptr<::headless::dom::RGBA> value) { outline_color_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<HighlightQuadParams> Clone() const;

  template<int STATE>
  class HighlightQuadParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kQuadSet = 1 << 1,
      kAllRequiredFieldsSet = (kQuadSet | 0)
    };

    HighlightQuadParamsBuilder<STATE | kQuadSet>& SetQuad(std::vector<double> value) {
      static_assert(!(STATE & kQuadSet), "property quad should not have already been set");
      result_->SetQuad(std::move(value));
      return CastState<kQuadSet>();
    }

    HighlightQuadParamsBuilder<STATE>& SetColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetColor(std::move(value));
      return *this;
    }

    HighlightQuadParamsBuilder<STATE>& SetOutlineColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetOutlineColor(std::move(value));
      return *this;
    }

    std::unique_ptr<HighlightQuadParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class HighlightQuadParams;
    HighlightQuadParamsBuilder() : result_(new HighlightQuadParams()) { }

    template<int STEP> HighlightQuadParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<HighlightQuadParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<HighlightQuadParams> result_;
  };

  static HighlightQuadParamsBuilder<0> Builder() {
    return HighlightQuadParamsBuilder<0>();
  }

 private:
  HighlightQuadParams() { }

  std::vector<double> quad_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> color_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> outline_color_;
};


// Result for the HighlightQuad command.
class HEADLESS_EXPORT HighlightQuadResult {
 public:
  static std::unique_ptr<HighlightQuadResult> Parse(const base::Value& value, ErrorReporter* errors);

  HighlightQuadResult(const HighlightQuadResult&) = delete;
  HighlightQuadResult& operator=(const HighlightQuadResult&) = delete;

  ~HighlightQuadResult() { }


  base::Value Serialize() const;
  std::unique_ptr<HighlightQuadResult> Clone() const;

  template<int STATE>
  class HighlightQuadResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<HighlightQuadResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class HighlightQuadResult;
    HighlightQuadResultBuilder() : result_(new HighlightQuadResult()) { }

    template<int STEP> HighlightQuadResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<HighlightQuadResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<HighlightQuadResult> result_;
  };

  static HighlightQuadResultBuilder<0> Builder() {
    return HighlightQuadResultBuilder<0>();
  }

 private:
  HighlightQuadResult() { }

};


// Parameters for the HighlightRect command.
class HEADLESS_EXPORT HighlightRectParams {
 public:
  static std::unique_ptr<HighlightRectParams> Parse(const base::Value& value, ErrorReporter* errors);

  HighlightRectParams(const HighlightRectParams&) = delete;
  HighlightRectParams& operator=(const HighlightRectParams&) = delete;

  ~HighlightRectParams() { }


  // X coordinate
  int GetX() const { return x_; }
  void SetX(int value) { x_ = value; }

  // Y coordinate
  int GetY() const { return y_; }
  void SetY(int value) { y_ = value; }

  // Rectangle width
  int GetWidth() const { return width_; }
  void SetWidth(int value) { width_ = value; }

  // Rectangle height
  int GetHeight() const { return height_; }
  void SetHeight(int value) { height_ = value; }

  // The highlight fill color (default: transparent).
  bool HasColor() const { return !!color_; }
  const ::headless::dom::RGBA* GetColor() const { DCHECK(HasColor()); return color_.value().get(); }
  void SetColor(std::unique_ptr<::headless::dom::RGBA> value) { color_ = std::move(value); }

  // The highlight outline color (default: transparent).
  bool HasOutlineColor() const { return !!outline_color_; }
  const ::headless::dom::RGBA* GetOutlineColor() const { DCHECK(HasOutlineColor()); return outline_color_.value().get(); }
  void SetOutlineColor(std::unique_ptr<::headless::dom::RGBA> value) { outline_color_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<HighlightRectParams> Clone() const;

  template<int STATE>
  class HighlightRectParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kXSet = 1 << 1,
    kYSet = 1 << 2,
    kWidthSet = 1 << 3,
    kHeightSet = 1 << 4,
      kAllRequiredFieldsSet = (kXSet | kYSet | kWidthSet | kHeightSet | 0)
    };

    HighlightRectParamsBuilder<STATE | kXSet>& SetX(int value) {
      static_assert(!(STATE & kXSet), "property x should not have already been set");
      result_->SetX(value);
      return CastState<kXSet>();
    }

    HighlightRectParamsBuilder<STATE | kYSet>& SetY(int value) {
      static_assert(!(STATE & kYSet), "property y should not have already been set");
      result_->SetY(value);
      return CastState<kYSet>();
    }

    HighlightRectParamsBuilder<STATE | kWidthSet>& SetWidth(int value) {
      static_assert(!(STATE & kWidthSet), "property width should not have already been set");
      result_->SetWidth(value);
      return CastState<kWidthSet>();
    }

    HighlightRectParamsBuilder<STATE | kHeightSet>& SetHeight(int value) {
      static_assert(!(STATE & kHeightSet), "property height should not have already been set");
      result_->SetHeight(value);
      return CastState<kHeightSet>();
    }

    HighlightRectParamsBuilder<STATE>& SetColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetColor(std::move(value));
      return *this;
    }

    HighlightRectParamsBuilder<STATE>& SetOutlineColor(std::unique_ptr<::headless::dom::RGBA> value) {
      result_->SetOutlineColor(std::move(value));
      return *this;
    }

    std::unique_ptr<HighlightRectParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class HighlightRectParams;
    HighlightRectParamsBuilder() : result_(new HighlightRectParams()) { }

    template<int STEP> HighlightRectParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<HighlightRectParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<HighlightRectParams> result_;
  };

  static HighlightRectParamsBuilder<0> Builder() {
    return HighlightRectParamsBuilder<0>();
  }

 private:
  HighlightRectParams() { }

  int x_;
  int y_;
  int width_;
  int height_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> color_;
  absl::optional<std::unique_ptr<::headless::dom::RGBA>> outline_color_;
};


// Result for the HighlightRect command.
class HEADLESS_EXPORT HighlightRectResult {
 public:
  static std::unique_ptr<HighlightRectResult> Parse(const base::Value& value, ErrorReporter* errors);

  HighlightRectResult(const HighlightRectResult&) = delete;
  HighlightRectResult& operator=(const HighlightRectResult&) = delete;

  ~HighlightRectResult() { }


  base::Value Serialize() const;
  std::unique_ptr<HighlightRectResult> Clone() const;

  template<int STATE>
  class HighlightRectResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<HighlightRectResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class HighlightRectResult;
    HighlightRectResultBuilder() : result_(new HighlightRectResult()) { }

    template<int STEP> HighlightRectResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<HighlightRectResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<HighlightRectResult> result_;
  };

  static HighlightRectResultBuilder<0> Builder() {
    return HighlightRectResultBuilder<0>();
  }

 private:
  HighlightRectResult() { }

};


// Parameters for the HighlightSourceOrder command.
class HEADLESS_EXPORT HighlightSourceOrderParams {
 public:
  static std::unique_ptr<HighlightSourceOrderParams> Parse(const base::Value& value, ErrorReporter* errors);

  HighlightSourceOrderParams(const HighlightSourceOrderParams&) = delete;
  HighlightSourceOrderParams& operator=(const HighlightSourceOrderParams&) = delete;

  ~HighlightSourceOrderParams() { }


  // A descriptor for the appearance of the overlay drawing.
  const ::headless::overlay::SourceOrderConfig* GetSourceOrderConfig() const { return source_order_config_.get(); }
  void SetSourceOrderConfig(std::unique_ptr<::headless::overlay::SourceOrderConfig> value) { source_order_config_ = std::move(value); }

  // Identifier of the node to highlight.
  bool HasNodeId() const { return !!node_id_; }
  int GetNodeId() const { DCHECK(HasNodeId()); return node_id_.value(); }
  void SetNodeId(int value) { node_id_ = value; }

  // Identifier of the backend node to highlight.
  bool HasBackendNodeId() const { return !!backend_node_id_; }
  int GetBackendNodeId() const { DCHECK(HasBackendNodeId()); return backend_node_id_.value(); }
  void SetBackendNodeId(int value) { backend_node_id_ = value; }

  // JavaScript object id of the node to be highlighted.
  bool HasObjectId() const { return !!object_id_; }
  std::string GetObjectId() const { DCHECK(HasObjectId()); return object_id_.value(); }
  void SetObjectId(const std::string& value) { object_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<HighlightSourceOrderParams> Clone() const;

  template<int STATE>
  class HighlightSourceOrderParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kSourceOrderConfigSet = 1 << 1,
      kAllRequiredFieldsSet = (kSourceOrderConfigSet | 0)
    };

    HighlightSourceOrderParamsBuilder<STATE | kSourceOrderConfigSet>& SetSourceOrderConfig(std::unique_ptr<::headless::overlay::SourceOrderConfig> value) {
      static_assert(!(STATE & kSourceOrderConfigSet), "property sourceOrderConfig should not have already been set");
      result_->SetSourceOrderConfig(std::move(value));
      return CastState<kSourceOrderConfigSet>();
    }

    HighlightSourceOrderParamsBuilder<STATE>& SetNodeId(int value) {
      result_->SetNodeId(value);
      return *this;
    }

    HighlightSourceOrderParamsBuilder<STATE>& SetBackendNodeId(int value) {
      result_->SetBackendNodeId(value);
      return *this;
    }

    HighlightSourceOrderParamsBuilder<STATE>& SetObjectId(const std::string& value) {
      result_->SetObjectId(value);
      return *this;
    }

    std::unique_ptr<HighlightSourceOrderParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class HighlightSourceOrderParams;
    HighlightSourceOrderParamsBuilder() : result_(new HighlightSourceOrderParams()) { }

    template<int STEP> HighlightSourceOrderParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<HighlightSourceOrderParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<HighlightSourceOrderParams> result_;
  };

  static HighlightSourceOrderParamsBuilder<0> Builder() {
    return HighlightSourceOrderParamsBuilder<0>();
  }

 private:
  HighlightSourceOrderParams() { }

  std::unique_ptr<::headless::overlay::SourceOrderConfig> source_order_config_;
  absl::optional<int> node_id_;
  absl::optional<int> backend_node_id_;
  absl::optional<std::string> object_id_;
};


// Result for the HighlightSourceOrder command.
class HEADLESS_EXPORT HighlightSourceOrderResult {
 public:
  static std::unique_ptr<HighlightSourceOrderResult> Parse(const base::Value& value, ErrorReporter* errors);

  HighlightSourceOrderResult(const HighlightSourceOrderResult&) = delete;
  HighlightSourceOrderResult& operator=(const HighlightSourceOrderResult&) = delete;

  ~HighlightSourceOrderResult() { }


  base::Value Serialize() const;
  std::unique_ptr<HighlightSourceOrderResult> Clone() const;

  template<int STATE>
  class HighlightSourceOrderResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<HighlightSourceOrderResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class HighlightSourceOrderResult;
    HighlightSourceOrderResultBuilder() : result_(new HighlightSourceOrderResult()) { }

    template<int STEP> HighlightSourceOrderResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<HighlightSourceOrderResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<HighlightSourceOrderResult> result_;
  };

  static HighlightSourceOrderResultBuilder<0> Builder() {
    return HighlightSourceOrderResultBuilder<0>();
  }

 private:
  HighlightSourceOrderResult() { }

};


// Parameters for the SetInspectMode command.
class HEADLESS_EXPORT SetInspectModeParams {
 public:
  static std::unique_ptr<SetInspectModeParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetInspectModeParams(const SetInspectModeParams&) = delete;
  SetInspectModeParams& operator=(const SetInspectModeParams&) = delete;

  ~SetInspectModeParams() { }


  // Set an inspection mode.
  ::headless::overlay::InspectMode GetMode() const { return mode_; }
  void SetMode(::headless::overlay::InspectMode value) { mode_ = value; }

  // A descriptor for the highlight appearance of hovered-over nodes. May be omitted if `enabled
  // == false`.
  bool HasHighlightConfig() const { return !!highlight_config_; }
  const ::headless::overlay::HighlightConfig* GetHighlightConfig() const { DCHECK(HasHighlightConfig()); return highlight_config_.value().get(); }
  void SetHighlightConfig(std::unique_ptr<::headless::overlay::HighlightConfig> value) { highlight_config_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<SetInspectModeParams> Clone() const;

  template<int STATE>
  class SetInspectModeParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kModeSet = 1 << 1,
      kAllRequiredFieldsSet = (kModeSet | 0)
    };

    SetInspectModeParamsBuilder<STATE | kModeSet>& SetMode(::headless::overlay::InspectMode value) {
      static_assert(!(STATE & kModeSet), "property mode should not have already been set");
      result_->SetMode(value);
      return CastState<kModeSet>();
    }

    SetInspectModeParamsBuilder<STATE>& SetHighlightConfig(std::unique_ptr<::headless::overlay::HighlightConfig> value) {
      result_->SetHighlightConfig(std::move(value));
      return *this;
    }

    std::unique_ptr<SetInspectModeParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetInspectModeParams;
    SetInspectModeParamsBuilder() : result_(new SetInspectModeParams()) { }

    template<int STEP> SetInspectModeParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetInspectModeParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetInspectModeParams> result_;
  };

  static SetInspectModeParamsBuilder<0> Builder() {
    return SetInspectModeParamsBuilder<0>();
  }

 private:
  SetInspectModeParams() { }

  ::headless::overlay::InspectMode mode_;
  absl::optional<std::unique_ptr<::headless::overlay::HighlightConfig>> highlight_config_;
};


// Result for the SetInspectMode command.
class HEADLESS_EXPORT SetInspectModeResult {
 public:
  static std::unique_ptr<SetInspectModeResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetInspectModeResult(const SetInspectModeResult&) = delete;
  SetInspectModeResult& operator=(const SetInspectModeResult&) = delete;

  ~SetInspectModeResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetInspectModeResult> Clone() const;

  template<int STATE>
  class SetInspectModeResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetInspectModeResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetInspectModeResult;
    SetInspectModeResultBuilder() : result_(new SetInspectModeResult()) { }

    template<int STEP> SetInspectModeResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetInspectModeResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetInspectModeResult> result_;
  };

  static SetInspectModeResultBuilder<0> Builder() {
    return SetInspectModeResultBuilder<0>();
  }

 private:
  SetInspectModeResult() { }

};


// Parameters for the SetShowAdHighlights command.
class HEADLESS_EXPORT SetShowAdHighlightsParams {
 public:
  static std::unique_ptr<SetShowAdHighlightsParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowAdHighlightsParams(const SetShowAdHighlightsParams&) = delete;
  SetShowAdHighlightsParams& operator=(const SetShowAdHighlightsParams&) = delete;

  ~SetShowAdHighlightsParams() { }


  // True for showing ad highlights
  bool GetShow() const { return show_; }
  void SetShow(bool value) { show_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SetShowAdHighlightsParams> Clone() const;

  template<int STATE>
  class SetShowAdHighlightsParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kShowSet = 1 << 1,
      kAllRequiredFieldsSet = (kShowSet | 0)
    };

    SetShowAdHighlightsParamsBuilder<STATE | kShowSet>& SetShow(bool value) {
      static_assert(!(STATE & kShowSet), "property show should not have already been set");
      result_->SetShow(value);
      return CastState<kShowSet>();
    }

    std::unique_ptr<SetShowAdHighlightsParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowAdHighlightsParams;
    SetShowAdHighlightsParamsBuilder() : result_(new SetShowAdHighlightsParams()) { }

    template<int STEP> SetShowAdHighlightsParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowAdHighlightsParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowAdHighlightsParams> result_;
  };

  static SetShowAdHighlightsParamsBuilder<0> Builder() {
    return SetShowAdHighlightsParamsBuilder<0>();
  }

 private:
  SetShowAdHighlightsParams() { }

  bool show_;
};


// Result for the SetShowAdHighlights command.
class HEADLESS_EXPORT SetShowAdHighlightsResult {
 public:
  static std::unique_ptr<SetShowAdHighlightsResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowAdHighlightsResult(const SetShowAdHighlightsResult&) = delete;
  SetShowAdHighlightsResult& operator=(const SetShowAdHighlightsResult&) = delete;

  ~SetShowAdHighlightsResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetShowAdHighlightsResult> Clone() const;

  template<int STATE>
  class SetShowAdHighlightsResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetShowAdHighlightsResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowAdHighlightsResult;
    SetShowAdHighlightsResultBuilder() : result_(new SetShowAdHighlightsResult()) { }

    template<int STEP> SetShowAdHighlightsResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowAdHighlightsResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowAdHighlightsResult> result_;
  };

  static SetShowAdHighlightsResultBuilder<0> Builder() {
    return SetShowAdHighlightsResultBuilder<0>();
  }

 private:
  SetShowAdHighlightsResult() { }

};


// Parameters for the SetPausedInDebuggerMessage command.
class HEADLESS_EXPORT SetPausedInDebuggerMessageParams {
 public:
  static std::unique_ptr<SetPausedInDebuggerMessageParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetPausedInDebuggerMessageParams(const SetPausedInDebuggerMessageParams&) = delete;
  SetPausedInDebuggerMessageParams& operator=(const SetPausedInDebuggerMessageParams&) = delete;

  ~SetPausedInDebuggerMessageParams() { }


  // The message to display, also triggers resume and step over controls.
  bool HasMessage() const { return !!message_; }
  std::string GetMessage() const { DCHECK(HasMessage()); return message_.value(); }
  void SetMessage(const std::string& value) { message_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SetPausedInDebuggerMessageParams> Clone() const;

  template<int STATE>
  class SetPausedInDebuggerMessageParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    SetPausedInDebuggerMessageParamsBuilder<STATE>& SetMessage(const std::string& value) {
      result_->SetMessage(value);
      return *this;
    }

    std::unique_ptr<SetPausedInDebuggerMessageParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetPausedInDebuggerMessageParams;
    SetPausedInDebuggerMessageParamsBuilder() : result_(new SetPausedInDebuggerMessageParams()) { }

    template<int STEP> SetPausedInDebuggerMessageParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetPausedInDebuggerMessageParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetPausedInDebuggerMessageParams> result_;
  };

  static SetPausedInDebuggerMessageParamsBuilder<0> Builder() {
    return SetPausedInDebuggerMessageParamsBuilder<0>();
  }

 private:
  SetPausedInDebuggerMessageParams() { }

  absl::optional<std::string> message_;
};


// Result for the SetPausedInDebuggerMessage command.
class HEADLESS_EXPORT SetPausedInDebuggerMessageResult {
 public:
  static std::unique_ptr<SetPausedInDebuggerMessageResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetPausedInDebuggerMessageResult(const SetPausedInDebuggerMessageResult&) = delete;
  SetPausedInDebuggerMessageResult& operator=(const SetPausedInDebuggerMessageResult&) = delete;

  ~SetPausedInDebuggerMessageResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetPausedInDebuggerMessageResult> Clone() const;

  template<int STATE>
  class SetPausedInDebuggerMessageResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetPausedInDebuggerMessageResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetPausedInDebuggerMessageResult;
    SetPausedInDebuggerMessageResultBuilder() : result_(new SetPausedInDebuggerMessageResult()) { }

    template<int STEP> SetPausedInDebuggerMessageResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetPausedInDebuggerMessageResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetPausedInDebuggerMessageResult> result_;
  };

  static SetPausedInDebuggerMessageResultBuilder<0> Builder() {
    return SetPausedInDebuggerMessageResultBuilder<0>();
  }

 private:
  SetPausedInDebuggerMessageResult() { }

};


// Parameters for the SetShowDebugBorders command.
class HEADLESS_EXPORT SetShowDebugBordersParams {
 public:
  static std::unique_ptr<SetShowDebugBordersParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowDebugBordersParams(const SetShowDebugBordersParams&) = delete;
  SetShowDebugBordersParams& operator=(const SetShowDebugBordersParams&) = delete;

  ~SetShowDebugBordersParams() { }


  // True for showing debug borders
  bool GetShow() const { return show_; }
  void SetShow(bool value) { show_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SetShowDebugBordersParams> Clone() const;

  template<int STATE>
  class SetShowDebugBordersParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kShowSet = 1 << 1,
      kAllRequiredFieldsSet = (kShowSet | 0)
    };

    SetShowDebugBordersParamsBuilder<STATE | kShowSet>& SetShow(bool value) {
      static_assert(!(STATE & kShowSet), "property show should not have already been set");
      result_->SetShow(value);
      return CastState<kShowSet>();
    }

    std::unique_ptr<SetShowDebugBordersParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowDebugBordersParams;
    SetShowDebugBordersParamsBuilder() : result_(new SetShowDebugBordersParams()) { }

    template<int STEP> SetShowDebugBordersParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowDebugBordersParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowDebugBordersParams> result_;
  };

  static SetShowDebugBordersParamsBuilder<0> Builder() {
    return SetShowDebugBordersParamsBuilder<0>();
  }

 private:
  SetShowDebugBordersParams() { }

  bool show_;
};


// Result for the SetShowDebugBorders command.
class HEADLESS_EXPORT SetShowDebugBordersResult {
 public:
  static std::unique_ptr<SetShowDebugBordersResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowDebugBordersResult(const SetShowDebugBordersResult&) = delete;
  SetShowDebugBordersResult& operator=(const SetShowDebugBordersResult&) = delete;

  ~SetShowDebugBordersResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetShowDebugBordersResult> Clone() const;

  template<int STATE>
  class SetShowDebugBordersResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetShowDebugBordersResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowDebugBordersResult;
    SetShowDebugBordersResultBuilder() : result_(new SetShowDebugBordersResult()) { }

    template<int STEP> SetShowDebugBordersResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowDebugBordersResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowDebugBordersResult> result_;
  };

  static SetShowDebugBordersResultBuilder<0> Builder() {
    return SetShowDebugBordersResultBuilder<0>();
  }

 private:
  SetShowDebugBordersResult() { }

};


// Parameters for the SetShowFPSCounter command.
class HEADLESS_EXPORT SetShowFPSCounterParams {
 public:
  static std::unique_ptr<SetShowFPSCounterParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowFPSCounterParams(const SetShowFPSCounterParams&) = delete;
  SetShowFPSCounterParams& operator=(const SetShowFPSCounterParams&) = delete;

  ~SetShowFPSCounterParams() { }


  // True for showing the FPS counter
  bool GetShow() const { return show_; }
  void SetShow(bool value) { show_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SetShowFPSCounterParams> Clone() const;

  template<int STATE>
  class SetShowFPSCounterParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kShowSet = 1 << 1,
      kAllRequiredFieldsSet = (kShowSet | 0)
    };

    SetShowFPSCounterParamsBuilder<STATE | kShowSet>& SetShow(bool value) {
      static_assert(!(STATE & kShowSet), "property show should not have already been set");
      result_->SetShow(value);
      return CastState<kShowSet>();
    }

    std::unique_ptr<SetShowFPSCounterParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowFPSCounterParams;
    SetShowFPSCounterParamsBuilder() : result_(new SetShowFPSCounterParams()) { }

    template<int STEP> SetShowFPSCounterParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowFPSCounterParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowFPSCounterParams> result_;
  };

  static SetShowFPSCounterParamsBuilder<0> Builder() {
    return SetShowFPSCounterParamsBuilder<0>();
  }

 private:
  SetShowFPSCounterParams() { }

  bool show_;
};


// Result for the SetShowFPSCounter command.
class HEADLESS_EXPORT SetShowFPSCounterResult {
 public:
  static std::unique_ptr<SetShowFPSCounterResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowFPSCounterResult(const SetShowFPSCounterResult&) = delete;
  SetShowFPSCounterResult& operator=(const SetShowFPSCounterResult&) = delete;

  ~SetShowFPSCounterResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetShowFPSCounterResult> Clone() const;

  template<int STATE>
  class SetShowFPSCounterResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetShowFPSCounterResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowFPSCounterResult;
    SetShowFPSCounterResultBuilder() : result_(new SetShowFPSCounterResult()) { }

    template<int STEP> SetShowFPSCounterResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowFPSCounterResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowFPSCounterResult> result_;
  };

  static SetShowFPSCounterResultBuilder<0> Builder() {
    return SetShowFPSCounterResultBuilder<0>();
  }

 private:
  SetShowFPSCounterResult() { }

};


// Parameters for the SetShowGridOverlays command.
class HEADLESS_EXPORT SetShowGridOverlaysParams {
 public:
  static std::unique_ptr<SetShowGridOverlaysParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowGridOverlaysParams(const SetShowGridOverlaysParams&) = delete;
  SetShowGridOverlaysParams& operator=(const SetShowGridOverlaysParams&) = delete;

  ~SetShowGridOverlaysParams() { }


  // An array of node identifiers and descriptors for the highlight appearance.
  const std::vector<std::unique_ptr<::headless::overlay::GridNodeHighlightConfig>>* GetGridNodeHighlightConfigs() const { return &grid_node_highlight_configs_; }
  void SetGridNodeHighlightConfigs(std::vector<std::unique_ptr<::headless::overlay::GridNodeHighlightConfig>> value) { grid_node_highlight_configs_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<SetShowGridOverlaysParams> Clone() const;

  template<int STATE>
  class SetShowGridOverlaysParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kGridNodeHighlightConfigsSet = 1 << 1,
      kAllRequiredFieldsSet = (kGridNodeHighlightConfigsSet | 0)
    };

    SetShowGridOverlaysParamsBuilder<STATE | kGridNodeHighlightConfigsSet>& SetGridNodeHighlightConfigs(std::vector<std::unique_ptr<::headless::overlay::GridNodeHighlightConfig>> value) {
      static_assert(!(STATE & kGridNodeHighlightConfigsSet), "property gridNodeHighlightConfigs should not have already been set");
      result_->SetGridNodeHighlightConfigs(std::move(value));
      return CastState<kGridNodeHighlightConfigsSet>();
    }

    std::unique_ptr<SetShowGridOverlaysParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowGridOverlaysParams;
    SetShowGridOverlaysParamsBuilder() : result_(new SetShowGridOverlaysParams()) { }

    template<int STEP> SetShowGridOverlaysParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowGridOverlaysParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowGridOverlaysParams> result_;
  };

  static SetShowGridOverlaysParamsBuilder<0> Builder() {
    return SetShowGridOverlaysParamsBuilder<0>();
  }

 private:
  SetShowGridOverlaysParams() { }

  std::vector<std::unique_ptr<::headless::overlay::GridNodeHighlightConfig>> grid_node_highlight_configs_;
};


// Result for the SetShowGridOverlays command.
class HEADLESS_EXPORT SetShowGridOverlaysResult {
 public:
  static std::unique_ptr<SetShowGridOverlaysResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowGridOverlaysResult(const SetShowGridOverlaysResult&) = delete;
  SetShowGridOverlaysResult& operator=(const SetShowGridOverlaysResult&) = delete;

  ~SetShowGridOverlaysResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetShowGridOverlaysResult> Clone() const;

  template<int STATE>
  class SetShowGridOverlaysResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetShowGridOverlaysResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowGridOverlaysResult;
    SetShowGridOverlaysResultBuilder() : result_(new SetShowGridOverlaysResult()) { }

    template<int STEP> SetShowGridOverlaysResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowGridOverlaysResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowGridOverlaysResult> result_;
  };

  static SetShowGridOverlaysResultBuilder<0> Builder() {
    return SetShowGridOverlaysResultBuilder<0>();
  }

 private:
  SetShowGridOverlaysResult() { }

};


// Parameters for the SetShowFlexOverlays command.
class HEADLESS_EXPORT SetShowFlexOverlaysParams {
 public:
  static std::unique_ptr<SetShowFlexOverlaysParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowFlexOverlaysParams(const SetShowFlexOverlaysParams&) = delete;
  SetShowFlexOverlaysParams& operator=(const SetShowFlexOverlaysParams&) = delete;

  ~SetShowFlexOverlaysParams() { }


  // An array of node identifiers and descriptors for the highlight appearance.
  const std::vector<std::unique_ptr<::headless::overlay::FlexNodeHighlightConfig>>* GetFlexNodeHighlightConfigs() const { return &flex_node_highlight_configs_; }
  void SetFlexNodeHighlightConfigs(std::vector<std::unique_ptr<::headless::overlay::FlexNodeHighlightConfig>> value) { flex_node_highlight_configs_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<SetShowFlexOverlaysParams> Clone() const;

  template<int STATE>
  class SetShowFlexOverlaysParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kFlexNodeHighlightConfigsSet = 1 << 1,
      kAllRequiredFieldsSet = (kFlexNodeHighlightConfigsSet | 0)
    };

    SetShowFlexOverlaysParamsBuilder<STATE | kFlexNodeHighlightConfigsSet>& SetFlexNodeHighlightConfigs(std::vector<std::unique_ptr<::headless::overlay::FlexNodeHighlightConfig>> value) {
      static_assert(!(STATE & kFlexNodeHighlightConfigsSet), "property flexNodeHighlightConfigs should not have already been set");
      result_->SetFlexNodeHighlightConfigs(std::move(value));
      return CastState<kFlexNodeHighlightConfigsSet>();
    }

    std::unique_ptr<SetShowFlexOverlaysParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowFlexOverlaysParams;
    SetShowFlexOverlaysParamsBuilder() : result_(new SetShowFlexOverlaysParams()) { }

    template<int STEP> SetShowFlexOverlaysParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowFlexOverlaysParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowFlexOverlaysParams> result_;
  };

  static SetShowFlexOverlaysParamsBuilder<0> Builder() {
    return SetShowFlexOverlaysParamsBuilder<0>();
  }

 private:
  SetShowFlexOverlaysParams() { }

  std::vector<std::unique_ptr<::headless::overlay::FlexNodeHighlightConfig>> flex_node_highlight_configs_;
};


// Result for the SetShowFlexOverlays command.
class HEADLESS_EXPORT SetShowFlexOverlaysResult {
 public:
  static std::unique_ptr<SetShowFlexOverlaysResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowFlexOverlaysResult(const SetShowFlexOverlaysResult&) = delete;
  SetShowFlexOverlaysResult& operator=(const SetShowFlexOverlaysResult&) = delete;

  ~SetShowFlexOverlaysResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetShowFlexOverlaysResult> Clone() const;

  template<int STATE>
  class SetShowFlexOverlaysResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetShowFlexOverlaysResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowFlexOverlaysResult;
    SetShowFlexOverlaysResultBuilder() : result_(new SetShowFlexOverlaysResult()) { }

    template<int STEP> SetShowFlexOverlaysResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowFlexOverlaysResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowFlexOverlaysResult> result_;
  };

  static SetShowFlexOverlaysResultBuilder<0> Builder() {
    return SetShowFlexOverlaysResultBuilder<0>();
  }

 private:
  SetShowFlexOverlaysResult() { }

};


// Parameters for the SetShowScrollSnapOverlays command.
class HEADLESS_EXPORT SetShowScrollSnapOverlaysParams {
 public:
  static std::unique_ptr<SetShowScrollSnapOverlaysParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowScrollSnapOverlaysParams(const SetShowScrollSnapOverlaysParams&) = delete;
  SetShowScrollSnapOverlaysParams& operator=(const SetShowScrollSnapOverlaysParams&) = delete;

  ~SetShowScrollSnapOverlaysParams() { }


  // An array of node identifiers and descriptors for the highlight appearance.
  const std::vector<std::unique_ptr<::headless::overlay::ScrollSnapHighlightConfig>>* GetScrollSnapHighlightConfigs() const { return &scroll_snap_highlight_configs_; }
  void SetScrollSnapHighlightConfigs(std::vector<std::unique_ptr<::headless::overlay::ScrollSnapHighlightConfig>> value) { scroll_snap_highlight_configs_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<SetShowScrollSnapOverlaysParams> Clone() const;

  template<int STATE>
  class SetShowScrollSnapOverlaysParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kScrollSnapHighlightConfigsSet = 1 << 1,
      kAllRequiredFieldsSet = (kScrollSnapHighlightConfigsSet | 0)
    };

    SetShowScrollSnapOverlaysParamsBuilder<STATE | kScrollSnapHighlightConfigsSet>& SetScrollSnapHighlightConfigs(std::vector<std::unique_ptr<::headless::overlay::ScrollSnapHighlightConfig>> value) {
      static_assert(!(STATE & kScrollSnapHighlightConfigsSet), "property scrollSnapHighlightConfigs should not have already been set");
      result_->SetScrollSnapHighlightConfigs(std::move(value));
      return CastState<kScrollSnapHighlightConfigsSet>();
    }

    std::unique_ptr<SetShowScrollSnapOverlaysParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowScrollSnapOverlaysParams;
    SetShowScrollSnapOverlaysParamsBuilder() : result_(new SetShowScrollSnapOverlaysParams()) { }

    template<int STEP> SetShowScrollSnapOverlaysParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowScrollSnapOverlaysParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowScrollSnapOverlaysParams> result_;
  };

  static SetShowScrollSnapOverlaysParamsBuilder<0> Builder() {
    return SetShowScrollSnapOverlaysParamsBuilder<0>();
  }

 private:
  SetShowScrollSnapOverlaysParams() { }

  std::vector<std::unique_ptr<::headless::overlay::ScrollSnapHighlightConfig>> scroll_snap_highlight_configs_;
};


// Result for the SetShowScrollSnapOverlays command.
class HEADLESS_EXPORT SetShowScrollSnapOverlaysResult {
 public:
  static std::unique_ptr<SetShowScrollSnapOverlaysResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowScrollSnapOverlaysResult(const SetShowScrollSnapOverlaysResult&) = delete;
  SetShowScrollSnapOverlaysResult& operator=(const SetShowScrollSnapOverlaysResult&) = delete;

  ~SetShowScrollSnapOverlaysResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetShowScrollSnapOverlaysResult> Clone() const;

  template<int STATE>
  class SetShowScrollSnapOverlaysResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetShowScrollSnapOverlaysResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowScrollSnapOverlaysResult;
    SetShowScrollSnapOverlaysResultBuilder() : result_(new SetShowScrollSnapOverlaysResult()) { }

    template<int STEP> SetShowScrollSnapOverlaysResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowScrollSnapOverlaysResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowScrollSnapOverlaysResult> result_;
  };

  static SetShowScrollSnapOverlaysResultBuilder<0> Builder() {
    return SetShowScrollSnapOverlaysResultBuilder<0>();
  }

 private:
  SetShowScrollSnapOverlaysResult() { }

};


// Parameters for the SetShowContainerQueryOverlays command.
class HEADLESS_EXPORT SetShowContainerQueryOverlaysParams {
 public:
  static std::unique_ptr<SetShowContainerQueryOverlaysParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowContainerQueryOverlaysParams(const SetShowContainerQueryOverlaysParams&) = delete;
  SetShowContainerQueryOverlaysParams& operator=(const SetShowContainerQueryOverlaysParams&) = delete;

  ~SetShowContainerQueryOverlaysParams() { }


  // An array of node identifiers and descriptors for the highlight appearance.
  const std::vector<std::unique_ptr<::headless::overlay::ContainerQueryHighlightConfig>>* GetContainerQueryHighlightConfigs() const { return &container_query_highlight_configs_; }
  void SetContainerQueryHighlightConfigs(std::vector<std::unique_ptr<::headless::overlay::ContainerQueryHighlightConfig>> value) { container_query_highlight_configs_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<SetShowContainerQueryOverlaysParams> Clone() const;

  template<int STATE>
  class SetShowContainerQueryOverlaysParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kContainerQueryHighlightConfigsSet = 1 << 1,
      kAllRequiredFieldsSet = (kContainerQueryHighlightConfigsSet | 0)
    };

    SetShowContainerQueryOverlaysParamsBuilder<STATE | kContainerQueryHighlightConfigsSet>& SetContainerQueryHighlightConfigs(std::vector<std::unique_ptr<::headless::overlay::ContainerQueryHighlightConfig>> value) {
      static_assert(!(STATE & kContainerQueryHighlightConfigsSet), "property containerQueryHighlightConfigs should not have already been set");
      result_->SetContainerQueryHighlightConfigs(std::move(value));
      return CastState<kContainerQueryHighlightConfigsSet>();
    }

    std::unique_ptr<SetShowContainerQueryOverlaysParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowContainerQueryOverlaysParams;
    SetShowContainerQueryOverlaysParamsBuilder() : result_(new SetShowContainerQueryOverlaysParams()) { }

    template<int STEP> SetShowContainerQueryOverlaysParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowContainerQueryOverlaysParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowContainerQueryOverlaysParams> result_;
  };

  static SetShowContainerQueryOverlaysParamsBuilder<0> Builder() {
    return SetShowContainerQueryOverlaysParamsBuilder<0>();
  }

 private:
  SetShowContainerQueryOverlaysParams() { }

  std::vector<std::unique_ptr<::headless::overlay::ContainerQueryHighlightConfig>> container_query_highlight_configs_;
};


// Result for the SetShowContainerQueryOverlays command.
class HEADLESS_EXPORT SetShowContainerQueryOverlaysResult {
 public:
  static std::unique_ptr<SetShowContainerQueryOverlaysResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowContainerQueryOverlaysResult(const SetShowContainerQueryOverlaysResult&) = delete;
  SetShowContainerQueryOverlaysResult& operator=(const SetShowContainerQueryOverlaysResult&) = delete;

  ~SetShowContainerQueryOverlaysResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetShowContainerQueryOverlaysResult> Clone() const;

  template<int STATE>
  class SetShowContainerQueryOverlaysResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetShowContainerQueryOverlaysResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowContainerQueryOverlaysResult;
    SetShowContainerQueryOverlaysResultBuilder() : result_(new SetShowContainerQueryOverlaysResult()) { }

    template<int STEP> SetShowContainerQueryOverlaysResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowContainerQueryOverlaysResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowContainerQueryOverlaysResult> result_;
  };

  static SetShowContainerQueryOverlaysResultBuilder<0> Builder() {
    return SetShowContainerQueryOverlaysResultBuilder<0>();
  }

 private:
  SetShowContainerQueryOverlaysResult() { }

};


// Parameters for the SetShowPaintRects command.
class HEADLESS_EXPORT SetShowPaintRectsParams {
 public:
  static std::unique_ptr<SetShowPaintRectsParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowPaintRectsParams(const SetShowPaintRectsParams&) = delete;
  SetShowPaintRectsParams& operator=(const SetShowPaintRectsParams&) = delete;

  ~SetShowPaintRectsParams() { }


  // True for showing paint rectangles
  bool GetResult() const { return result_; }
  void SetResult(bool value) { result_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SetShowPaintRectsParams> Clone() const;

  template<int STATE>
  class SetShowPaintRectsParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kResultSet = 1 << 1,
      kAllRequiredFieldsSet = (kResultSet | 0)
    };

    SetShowPaintRectsParamsBuilder<STATE | kResultSet>& SetResult(bool value) {
      static_assert(!(STATE & kResultSet), "property result should not have already been set");
      result_->SetResult(value);
      return CastState<kResultSet>();
    }

    std::unique_ptr<SetShowPaintRectsParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowPaintRectsParams;
    SetShowPaintRectsParamsBuilder() : result_(new SetShowPaintRectsParams()) { }

    template<int STEP> SetShowPaintRectsParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowPaintRectsParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowPaintRectsParams> result_;
  };

  static SetShowPaintRectsParamsBuilder<0> Builder() {
    return SetShowPaintRectsParamsBuilder<0>();
  }

 private:
  SetShowPaintRectsParams() { }

  bool result_;
};


// Result for the SetShowPaintRects command.
class HEADLESS_EXPORT SetShowPaintRectsResult {
 public:
  static std::unique_ptr<SetShowPaintRectsResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowPaintRectsResult(const SetShowPaintRectsResult&) = delete;
  SetShowPaintRectsResult& operator=(const SetShowPaintRectsResult&) = delete;

  ~SetShowPaintRectsResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetShowPaintRectsResult> Clone() const;

  template<int STATE>
  class SetShowPaintRectsResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetShowPaintRectsResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowPaintRectsResult;
    SetShowPaintRectsResultBuilder() : result_(new SetShowPaintRectsResult()) { }

    template<int STEP> SetShowPaintRectsResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowPaintRectsResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowPaintRectsResult> result_;
  };

  static SetShowPaintRectsResultBuilder<0> Builder() {
    return SetShowPaintRectsResultBuilder<0>();
  }

 private:
  SetShowPaintRectsResult() { }

};


// Parameters for the SetShowLayoutShiftRegions command.
class HEADLESS_EXPORT SetShowLayoutShiftRegionsParams {
 public:
  static std::unique_ptr<SetShowLayoutShiftRegionsParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowLayoutShiftRegionsParams(const SetShowLayoutShiftRegionsParams&) = delete;
  SetShowLayoutShiftRegionsParams& operator=(const SetShowLayoutShiftRegionsParams&) = delete;

  ~SetShowLayoutShiftRegionsParams() { }


  // True for showing layout shift regions
  bool GetResult() const { return result_; }
  void SetResult(bool value) { result_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SetShowLayoutShiftRegionsParams> Clone() const;

  template<int STATE>
  class SetShowLayoutShiftRegionsParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kResultSet = 1 << 1,
      kAllRequiredFieldsSet = (kResultSet | 0)
    };

    SetShowLayoutShiftRegionsParamsBuilder<STATE | kResultSet>& SetResult(bool value) {
      static_assert(!(STATE & kResultSet), "property result should not have already been set");
      result_->SetResult(value);
      return CastState<kResultSet>();
    }

    std::unique_ptr<SetShowLayoutShiftRegionsParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowLayoutShiftRegionsParams;
    SetShowLayoutShiftRegionsParamsBuilder() : result_(new SetShowLayoutShiftRegionsParams()) { }

    template<int STEP> SetShowLayoutShiftRegionsParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowLayoutShiftRegionsParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowLayoutShiftRegionsParams> result_;
  };

  static SetShowLayoutShiftRegionsParamsBuilder<0> Builder() {
    return SetShowLayoutShiftRegionsParamsBuilder<0>();
  }

 private:
  SetShowLayoutShiftRegionsParams() { }

  bool result_;
};


// Result for the SetShowLayoutShiftRegions command.
class HEADLESS_EXPORT SetShowLayoutShiftRegionsResult {
 public:
  static std::unique_ptr<SetShowLayoutShiftRegionsResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowLayoutShiftRegionsResult(const SetShowLayoutShiftRegionsResult&) = delete;
  SetShowLayoutShiftRegionsResult& operator=(const SetShowLayoutShiftRegionsResult&) = delete;

  ~SetShowLayoutShiftRegionsResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetShowLayoutShiftRegionsResult> Clone() const;

  template<int STATE>
  class SetShowLayoutShiftRegionsResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetShowLayoutShiftRegionsResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowLayoutShiftRegionsResult;
    SetShowLayoutShiftRegionsResultBuilder() : result_(new SetShowLayoutShiftRegionsResult()) { }

    template<int STEP> SetShowLayoutShiftRegionsResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowLayoutShiftRegionsResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowLayoutShiftRegionsResult> result_;
  };

  static SetShowLayoutShiftRegionsResultBuilder<0> Builder() {
    return SetShowLayoutShiftRegionsResultBuilder<0>();
  }

 private:
  SetShowLayoutShiftRegionsResult() { }

};


// Parameters for the SetShowScrollBottleneckRects command.
class HEADLESS_EXPORT SetShowScrollBottleneckRectsParams {
 public:
  static std::unique_ptr<SetShowScrollBottleneckRectsParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowScrollBottleneckRectsParams(const SetShowScrollBottleneckRectsParams&) = delete;
  SetShowScrollBottleneckRectsParams& operator=(const SetShowScrollBottleneckRectsParams&) = delete;

  ~SetShowScrollBottleneckRectsParams() { }


  // True for showing scroll bottleneck rects
  bool GetShow() const { return show_; }
  void SetShow(bool value) { show_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SetShowScrollBottleneckRectsParams> Clone() const;

  template<int STATE>
  class SetShowScrollBottleneckRectsParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kShowSet = 1 << 1,
      kAllRequiredFieldsSet = (kShowSet | 0)
    };

    SetShowScrollBottleneckRectsParamsBuilder<STATE | kShowSet>& SetShow(bool value) {
      static_assert(!(STATE & kShowSet), "property show should not have already been set");
      result_->SetShow(value);
      return CastState<kShowSet>();
    }

    std::unique_ptr<SetShowScrollBottleneckRectsParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowScrollBottleneckRectsParams;
    SetShowScrollBottleneckRectsParamsBuilder() : result_(new SetShowScrollBottleneckRectsParams()) { }

    template<int STEP> SetShowScrollBottleneckRectsParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowScrollBottleneckRectsParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowScrollBottleneckRectsParams> result_;
  };

  static SetShowScrollBottleneckRectsParamsBuilder<0> Builder() {
    return SetShowScrollBottleneckRectsParamsBuilder<0>();
  }

 private:
  SetShowScrollBottleneckRectsParams() { }

  bool show_;
};


// Result for the SetShowScrollBottleneckRects command.
class HEADLESS_EXPORT SetShowScrollBottleneckRectsResult {
 public:
  static std::unique_ptr<SetShowScrollBottleneckRectsResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowScrollBottleneckRectsResult(const SetShowScrollBottleneckRectsResult&) = delete;
  SetShowScrollBottleneckRectsResult& operator=(const SetShowScrollBottleneckRectsResult&) = delete;

  ~SetShowScrollBottleneckRectsResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetShowScrollBottleneckRectsResult> Clone() const;

  template<int STATE>
  class SetShowScrollBottleneckRectsResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetShowScrollBottleneckRectsResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowScrollBottleneckRectsResult;
    SetShowScrollBottleneckRectsResultBuilder() : result_(new SetShowScrollBottleneckRectsResult()) { }

    template<int STEP> SetShowScrollBottleneckRectsResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowScrollBottleneckRectsResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowScrollBottleneckRectsResult> result_;
  };

  static SetShowScrollBottleneckRectsResultBuilder<0> Builder() {
    return SetShowScrollBottleneckRectsResultBuilder<0>();
  }

 private:
  SetShowScrollBottleneckRectsResult() { }

};


// Parameters for the SetShowHitTestBorders command.
class HEADLESS_EXPORT SetShowHitTestBordersParams {
 public:
  static std::unique_ptr<SetShowHitTestBordersParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowHitTestBordersParams(const SetShowHitTestBordersParams&) = delete;
  SetShowHitTestBordersParams& operator=(const SetShowHitTestBordersParams&) = delete;

  ~SetShowHitTestBordersParams() { }


  // True for showing hit-test borders
  bool GetShow() const { return show_; }
  void SetShow(bool value) { show_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SetShowHitTestBordersParams> Clone() const;

  template<int STATE>
  class SetShowHitTestBordersParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kShowSet = 1 << 1,
      kAllRequiredFieldsSet = (kShowSet | 0)
    };

    SetShowHitTestBordersParamsBuilder<STATE | kShowSet>& SetShow(bool value) {
      static_assert(!(STATE & kShowSet), "property show should not have already been set");
      result_->SetShow(value);
      return CastState<kShowSet>();
    }

    std::unique_ptr<SetShowHitTestBordersParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowHitTestBordersParams;
    SetShowHitTestBordersParamsBuilder() : result_(new SetShowHitTestBordersParams()) { }

    template<int STEP> SetShowHitTestBordersParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowHitTestBordersParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowHitTestBordersParams> result_;
  };

  static SetShowHitTestBordersParamsBuilder<0> Builder() {
    return SetShowHitTestBordersParamsBuilder<0>();
  }

 private:
  SetShowHitTestBordersParams() { }

  bool show_;
};


// Result for the SetShowHitTestBorders command.
class HEADLESS_EXPORT SetShowHitTestBordersResult {
 public:
  static std::unique_ptr<SetShowHitTestBordersResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowHitTestBordersResult(const SetShowHitTestBordersResult&) = delete;
  SetShowHitTestBordersResult& operator=(const SetShowHitTestBordersResult&) = delete;

  ~SetShowHitTestBordersResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetShowHitTestBordersResult> Clone() const;

  template<int STATE>
  class SetShowHitTestBordersResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetShowHitTestBordersResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowHitTestBordersResult;
    SetShowHitTestBordersResultBuilder() : result_(new SetShowHitTestBordersResult()) { }

    template<int STEP> SetShowHitTestBordersResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowHitTestBordersResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowHitTestBordersResult> result_;
  };

  static SetShowHitTestBordersResultBuilder<0> Builder() {
    return SetShowHitTestBordersResultBuilder<0>();
  }

 private:
  SetShowHitTestBordersResult() { }

};


// Parameters for the SetShowWebVitals command.
class HEADLESS_EXPORT SetShowWebVitalsParams {
 public:
  static std::unique_ptr<SetShowWebVitalsParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowWebVitalsParams(const SetShowWebVitalsParams&) = delete;
  SetShowWebVitalsParams& operator=(const SetShowWebVitalsParams&) = delete;

  ~SetShowWebVitalsParams() { }


  bool GetShow() const { return show_; }
  void SetShow(bool value) { show_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SetShowWebVitalsParams> Clone() const;

  template<int STATE>
  class SetShowWebVitalsParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kShowSet = 1 << 1,
      kAllRequiredFieldsSet = (kShowSet | 0)
    };

    SetShowWebVitalsParamsBuilder<STATE | kShowSet>& SetShow(bool value) {
      static_assert(!(STATE & kShowSet), "property show should not have already been set");
      result_->SetShow(value);
      return CastState<kShowSet>();
    }

    std::unique_ptr<SetShowWebVitalsParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowWebVitalsParams;
    SetShowWebVitalsParamsBuilder() : result_(new SetShowWebVitalsParams()) { }

    template<int STEP> SetShowWebVitalsParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowWebVitalsParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowWebVitalsParams> result_;
  };

  static SetShowWebVitalsParamsBuilder<0> Builder() {
    return SetShowWebVitalsParamsBuilder<0>();
  }

 private:
  SetShowWebVitalsParams() { }

  bool show_;
};


// Result for the SetShowWebVitals command.
class HEADLESS_EXPORT SetShowWebVitalsResult {
 public:
  static std::unique_ptr<SetShowWebVitalsResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowWebVitalsResult(const SetShowWebVitalsResult&) = delete;
  SetShowWebVitalsResult& operator=(const SetShowWebVitalsResult&) = delete;

  ~SetShowWebVitalsResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetShowWebVitalsResult> Clone() const;

  template<int STATE>
  class SetShowWebVitalsResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetShowWebVitalsResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowWebVitalsResult;
    SetShowWebVitalsResultBuilder() : result_(new SetShowWebVitalsResult()) { }

    template<int STEP> SetShowWebVitalsResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowWebVitalsResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowWebVitalsResult> result_;
  };

  static SetShowWebVitalsResultBuilder<0> Builder() {
    return SetShowWebVitalsResultBuilder<0>();
  }

 private:
  SetShowWebVitalsResult() { }

};


// Parameters for the SetShowViewportSizeOnResize command.
class HEADLESS_EXPORT SetShowViewportSizeOnResizeParams {
 public:
  static std::unique_ptr<SetShowViewportSizeOnResizeParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowViewportSizeOnResizeParams(const SetShowViewportSizeOnResizeParams&) = delete;
  SetShowViewportSizeOnResizeParams& operator=(const SetShowViewportSizeOnResizeParams&) = delete;

  ~SetShowViewportSizeOnResizeParams() { }


  // Whether to paint size or not.
  bool GetShow() const { return show_; }
  void SetShow(bool value) { show_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SetShowViewportSizeOnResizeParams> Clone() const;

  template<int STATE>
  class SetShowViewportSizeOnResizeParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kShowSet = 1 << 1,
      kAllRequiredFieldsSet = (kShowSet | 0)
    };

    SetShowViewportSizeOnResizeParamsBuilder<STATE | kShowSet>& SetShow(bool value) {
      static_assert(!(STATE & kShowSet), "property show should not have already been set");
      result_->SetShow(value);
      return CastState<kShowSet>();
    }

    std::unique_ptr<SetShowViewportSizeOnResizeParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowViewportSizeOnResizeParams;
    SetShowViewportSizeOnResizeParamsBuilder() : result_(new SetShowViewportSizeOnResizeParams()) { }

    template<int STEP> SetShowViewportSizeOnResizeParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowViewportSizeOnResizeParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowViewportSizeOnResizeParams> result_;
  };

  static SetShowViewportSizeOnResizeParamsBuilder<0> Builder() {
    return SetShowViewportSizeOnResizeParamsBuilder<0>();
  }

 private:
  SetShowViewportSizeOnResizeParams() { }

  bool show_;
};


// Result for the SetShowViewportSizeOnResize command.
class HEADLESS_EXPORT SetShowViewportSizeOnResizeResult {
 public:
  static std::unique_ptr<SetShowViewportSizeOnResizeResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowViewportSizeOnResizeResult(const SetShowViewportSizeOnResizeResult&) = delete;
  SetShowViewportSizeOnResizeResult& operator=(const SetShowViewportSizeOnResizeResult&) = delete;

  ~SetShowViewportSizeOnResizeResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetShowViewportSizeOnResizeResult> Clone() const;

  template<int STATE>
  class SetShowViewportSizeOnResizeResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetShowViewportSizeOnResizeResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowViewportSizeOnResizeResult;
    SetShowViewportSizeOnResizeResultBuilder() : result_(new SetShowViewportSizeOnResizeResult()) { }

    template<int STEP> SetShowViewportSizeOnResizeResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowViewportSizeOnResizeResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowViewportSizeOnResizeResult> result_;
  };

  static SetShowViewportSizeOnResizeResultBuilder<0> Builder() {
    return SetShowViewportSizeOnResizeResultBuilder<0>();
  }

 private:
  SetShowViewportSizeOnResizeResult() { }

};


// Parameters for the SetShowHinge command.
class HEADLESS_EXPORT SetShowHingeParams {
 public:
  static std::unique_ptr<SetShowHingeParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowHingeParams(const SetShowHingeParams&) = delete;
  SetShowHingeParams& operator=(const SetShowHingeParams&) = delete;

  ~SetShowHingeParams() { }


  // hinge data, null means hideHinge
  bool HasHingeConfig() const { return !!hinge_config_; }
  const ::headless::overlay::HingeConfig* GetHingeConfig() const { DCHECK(HasHingeConfig()); return hinge_config_.value().get(); }
  void SetHingeConfig(std::unique_ptr<::headless::overlay::HingeConfig> value) { hinge_config_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<SetShowHingeParams> Clone() const;

  template<int STATE>
  class SetShowHingeParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    SetShowHingeParamsBuilder<STATE>& SetHingeConfig(std::unique_ptr<::headless::overlay::HingeConfig> value) {
      result_->SetHingeConfig(std::move(value));
      return *this;
    }

    std::unique_ptr<SetShowHingeParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowHingeParams;
    SetShowHingeParamsBuilder() : result_(new SetShowHingeParams()) { }

    template<int STEP> SetShowHingeParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowHingeParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowHingeParams> result_;
  };

  static SetShowHingeParamsBuilder<0> Builder() {
    return SetShowHingeParamsBuilder<0>();
  }

 private:
  SetShowHingeParams() { }

  absl::optional<std::unique_ptr<::headless::overlay::HingeConfig>> hinge_config_;
};


// Result for the SetShowHinge command.
class HEADLESS_EXPORT SetShowHingeResult {
 public:
  static std::unique_ptr<SetShowHingeResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowHingeResult(const SetShowHingeResult&) = delete;
  SetShowHingeResult& operator=(const SetShowHingeResult&) = delete;

  ~SetShowHingeResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetShowHingeResult> Clone() const;

  template<int STATE>
  class SetShowHingeResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetShowHingeResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowHingeResult;
    SetShowHingeResultBuilder() : result_(new SetShowHingeResult()) { }

    template<int STEP> SetShowHingeResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowHingeResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowHingeResult> result_;
  };

  static SetShowHingeResultBuilder<0> Builder() {
    return SetShowHingeResultBuilder<0>();
  }

 private:
  SetShowHingeResult() { }

};


// Parameters for the SetShowIsolatedElements command.
class HEADLESS_EXPORT SetShowIsolatedElementsParams {
 public:
  static std::unique_ptr<SetShowIsolatedElementsParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowIsolatedElementsParams(const SetShowIsolatedElementsParams&) = delete;
  SetShowIsolatedElementsParams& operator=(const SetShowIsolatedElementsParams&) = delete;

  ~SetShowIsolatedElementsParams() { }


  // An array of node identifiers and descriptors for the highlight appearance.
  const std::vector<std::unique_ptr<::headless::overlay::IsolatedElementHighlightConfig>>* GetIsolatedElementHighlightConfigs() const { return &isolated_element_highlight_configs_; }
  void SetIsolatedElementHighlightConfigs(std::vector<std::unique_ptr<::headless::overlay::IsolatedElementHighlightConfig>> value) { isolated_element_highlight_configs_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<SetShowIsolatedElementsParams> Clone() const;

  template<int STATE>
  class SetShowIsolatedElementsParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kIsolatedElementHighlightConfigsSet = 1 << 1,
      kAllRequiredFieldsSet = (kIsolatedElementHighlightConfigsSet | 0)
    };

    SetShowIsolatedElementsParamsBuilder<STATE | kIsolatedElementHighlightConfigsSet>& SetIsolatedElementHighlightConfigs(std::vector<std::unique_ptr<::headless::overlay::IsolatedElementHighlightConfig>> value) {
      static_assert(!(STATE & kIsolatedElementHighlightConfigsSet), "property isolatedElementHighlightConfigs should not have already been set");
      result_->SetIsolatedElementHighlightConfigs(std::move(value));
      return CastState<kIsolatedElementHighlightConfigsSet>();
    }

    std::unique_ptr<SetShowIsolatedElementsParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowIsolatedElementsParams;
    SetShowIsolatedElementsParamsBuilder() : result_(new SetShowIsolatedElementsParams()) { }

    template<int STEP> SetShowIsolatedElementsParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowIsolatedElementsParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowIsolatedElementsParams> result_;
  };

  static SetShowIsolatedElementsParamsBuilder<0> Builder() {
    return SetShowIsolatedElementsParamsBuilder<0>();
  }

 private:
  SetShowIsolatedElementsParams() { }

  std::vector<std::unique_ptr<::headless::overlay::IsolatedElementHighlightConfig>> isolated_element_highlight_configs_;
};


// Result for the SetShowIsolatedElements command.
class HEADLESS_EXPORT SetShowIsolatedElementsResult {
 public:
  static std::unique_ptr<SetShowIsolatedElementsResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowIsolatedElementsResult(const SetShowIsolatedElementsResult&) = delete;
  SetShowIsolatedElementsResult& operator=(const SetShowIsolatedElementsResult&) = delete;

  ~SetShowIsolatedElementsResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetShowIsolatedElementsResult> Clone() const;

  template<int STATE>
  class SetShowIsolatedElementsResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetShowIsolatedElementsResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowIsolatedElementsResult;
    SetShowIsolatedElementsResultBuilder() : result_(new SetShowIsolatedElementsResult()) { }

    template<int STEP> SetShowIsolatedElementsResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowIsolatedElementsResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowIsolatedElementsResult> result_;
  };

  static SetShowIsolatedElementsResultBuilder<0> Builder() {
    return SetShowIsolatedElementsResultBuilder<0>();
  }

 private:
  SetShowIsolatedElementsResult() { }

};


// Parameters for the SetShowWindowControlsOverlay command.
class HEADLESS_EXPORT SetShowWindowControlsOverlayParams {
 public:
  static std::unique_ptr<SetShowWindowControlsOverlayParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowWindowControlsOverlayParams(const SetShowWindowControlsOverlayParams&) = delete;
  SetShowWindowControlsOverlayParams& operator=(const SetShowWindowControlsOverlayParams&) = delete;

  ~SetShowWindowControlsOverlayParams() { }


  // Window Controls Overlay data, null means hide Window Controls Overlay
  bool HasWindowControlsOverlayConfig() const { return !!window_controls_overlay_config_; }
  const ::headless::overlay::WindowControlsOverlayConfig* GetWindowControlsOverlayConfig() const { DCHECK(HasWindowControlsOverlayConfig()); return window_controls_overlay_config_.value().get(); }
  void SetWindowControlsOverlayConfig(std::unique_ptr<::headless::overlay::WindowControlsOverlayConfig> value) { window_controls_overlay_config_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<SetShowWindowControlsOverlayParams> Clone() const;

  template<int STATE>
  class SetShowWindowControlsOverlayParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    SetShowWindowControlsOverlayParamsBuilder<STATE>& SetWindowControlsOverlayConfig(std::unique_ptr<::headless::overlay::WindowControlsOverlayConfig> value) {
      result_->SetWindowControlsOverlayConfig(std::move(value));
      return *this;
    }

    std::unique_ptr<SetShowWindowControlsOverlayParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowWindowControlsOverlayParams;
    SetShowWindowControlsOverlayParamsBuilder() : result_(new SetShowWindowControlsOverlayParams()) { }

    template<int STEP> SetShowWindowControlsOverlayParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowWindowControlsOverlayParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowWindowControlsOverlayParams> result_;
  };

  static SetShowWindowControlsOverlayParamsBuilder<0> Builder() {
    return SetShowWindowControlsOverlayParamsBuilder<0>();
  }

 private:
  SetShowWindowControlsOverlayParams() { }

  absl::optional<std::unique_ptr<::headless::overlay::WindowControlsOverlayConfig>> window_controls_overlay_config_;
};


// Result for the SetShowWindowControlsOverlay command.
class HEADLESS_EXPORT SetShowWindowControlsOverlayResult {
 public:
  static std::unique_ptr<SetShowWindowControlsOverlayResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetShowWindowControlsOverlayResult(const SetShowWindowControlsOverlayResult&) = delete;
  SetShowWindowControlsOverlayResult& operator=(const SetShowWindowControlsOverlayResult&) = delete;

  ~SetShowWindowControlsOverlayResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetShowWindowControlsOverlayResult> Clone() const;

  template<int STATE>
  class SetShowWindowControlsOverlayResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetShowWindowControlsOverlayResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetShowWindowControlsOverlayResult;
    SetShowWindowControlsOverlayResultBuilder() : result_(new SetShowWindowControlsOverlayResult()) { }

    template<int STEP> SetShowWindowControlsOverlayResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetShowWindowControlsOverlayResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetShowWindowControlsOverlayResult> result_;
  };

  static SetShowWindowControlsOverlayResultBuilder<0> Builder() {
    return SetShowWindowControlsOverlayResultBuilder<0>();
  }

 private:
  SetShowWindowControlsOverlayResult() { }

};


// Parameters for the InspectNodeRequested event.
class HEADLESS_EXPORT InspectNodeRequestedParams {
 public:
  static std::unique_ptr<InspectNodeRequestedParams> Parse(const base::Value& value, ErrorReporter* errors);

  InspectNodeRequestedParams(const InspectNodeRequestedParams&) = delete;
  InspectNodeRequestedParams& operator=(const InspectNodeRequestedParams&) = delete;

  ~InspectNodeRequestedParams() { }


  // Id of the node to inspect.
  int GetBackendNodeId() const { return backend_node_id_; }
  void SetBackendNodeId(int value) { backend_node_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<InspectNodeRequestedParams> Clone() const;

  template<int STATE>
  class InspectNodeRequestedParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kBackendNodeIdSet = 1 << 1,
      kAllRequiredFieldsSet = (kBackendNodeIdSet | 0)
    };

    InspectNodeRequestedParamsBuilder<STATE | kBackendNodeIdSet>& SetBackendNodeId(int value) {
      static_assert(!(STATE & kBackendNodeIdSet), "property backendNodeId should not have already been set");
      result_->SetBackendNodeId(value);
      return CastState<kBackendNodeIdSet>();
    }

    std::unique_ptr<InspectNodeRequestedParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class InspectNodeRequestedParams;
    InspectNodeRequestedParamsBuilder() : result_(new InspectNodeRequestedParams()) { }

    template<int STEP> InspectNodeRequestedParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<InspectNodeRequestedParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<InspectNodeRequestedParams> result_;
  };

  static InspectNodeRequestedParamsBuilder<0> Builder() {
    return InspectNodeRequestedParamsBuilder<0>();
  }

 private:
  InspectNodeRequestedParams() { }

  int backend_node_id_;
};


// Parameters for the NodeHighlightRequested event.
class HEADLESS_EXPORT NodeHighlightRequestedParams {
 public:
  static std::unique_ptr<NodeHighlightRequestedParams> Parse(const base::Value& value, ErrorReporter* errors);

  NodeHighlightRequestedParams(const NodeHighlightRequestedParams&) = delete;
  NodeHighlightRequestedParams& operator=(const NodeHighlightRequestedParams&) = delete;

  ~NodeHighlightRequestedParams() { }


  int GetNodeId() const { return node_id_; }
  void SetNodeId(int value) { node_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<NodeHighlightRequestedParams> Clone() const;

  template<int STATE>
  class NodeHighlightRequestedParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kNodeIdSet = 1 << 1,
      kAllRequiredFieldsSet = (kNodeIdSet | 0)
    };

    NodeHighlightRequestedParamsBuilder<STATE | kNodeIdSet>& SetNodeId(int value) {
      static_assert(!(STATE & kNodeIdSet), "property nodeId should not have already been set");
      result_->SetNodeId(value);
      return CastState<kNodeIdSet>();
    }

    std::unique_ptr<NodeHighlightRequestedParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class NodeHighlightRequestedParams;
    NodeHighlightRequestedParamsBuilder() : result_(new NodeHighlightRequestedParams()) { }

    template<int STEP> NodeHighlightRequestedParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<NodeHighlightRequestedParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<NodeHighlightRequestedParams> result_;
  };

  static NodeHighlightRequestedParamsBuilder<0> Builder() {
    return NodeHighlightRequestedParamsBuilder<0>();
  }

 private:
  NodeHighlightRequestedParams() { }

  int node_id_;
};


// Parameters for the ScreenshotRequested event.
class HEADLESS_EXPORT ScreenshotRequestedParams {
 public:
  static std::unique_ptr<ScreenshotRequestedParams> Parse(const base::Value& value, ErrorReporter* errors);

  ScreenshotRequestedParams(const ScreenshotRequestedParams&) = delete;
  ScreenshotRequestedParams& operator=(const ScreenshotRequestedParams&) = delete;

  ~ScreenshotRequestedParams() { }


  // Viewport to capture, in device independent pixels (dip).
  const ::headless::page::Viewport* GetViewport() const { return viewport_.get(); }
  void SetViewport(std::unique_ptr<::headless::page::Viewport> value) { viewport_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<ScreenshotRequestedParams> Clone() const;

  template<int STATE>
  class ScreenshotRequestedParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kViewportSet = 1 << 1,
      kAllRequiredFieldsSet = (kViewportSet | 0)
    };

    ScreenshotRequestedParamsBuilder<STATE | kViewportSet>& SetViewport(std::unique_ptr<::headless::page::Viewport> value) {
      static_assert(!(STATE & kViewportSet), "property viewport should not have already been set");
      result_->SetViewport(std::move(value));
      return CastState<kViewportSet>();
    }

    std::unique_ptr<ScreenshotRequestedParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class ScreenshotRequestedParams;
    ScreenshotRequestedParamsBuilder() : result_(new ScreenshotRequestedParams()) { }

    template<int STEP> ScreenshotRequestedParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<ScreenshotRequestedParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<ScreenshotRequestedParams> result_;
  };

  static ScreenshotRequestedParamsBuilder<0> Builder() {
    return ScreenshotRequestedParamsBuilder<0>();
  }

 private:
  ScreenshotRequestedParams() { }

  std::unique_ptr<::headless::page::Viewport> viewport_;
};


// Parameters for the InspectModeCanceled event.
class HEADLESS_EXPORT InspectModeCanceledParams {
 public:
  static std::unique_ptr<InspectModeCanceledParams> Parse(const base::Value& value, ErrorReporter* errors);

  InspectModeCanceledParams(const InspectModeCanceledParams&) = delete;
  InspectModeCanceledParams& operator=(const InspectModeCanceledParams&) = delete;

  ~InspectModeCanceledParams() { }


  base::Value Serialize() const;
  std::unique_ptr<InspectModeCanceledParams> Clone() const;

  template<int STATE>
  class InspectModeCanceledParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<InspectModeCanceledParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class InspectModeCanceledParams;
    InspectModeCanceledParamsBuilder() : result_(new InspectModeCanceledParams()) { }

    template<int STEP> InspectModeCanceledParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<InspectModeCanceledParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<InspectModeCanceledParams> result_;
  };

  static InspectModeCanceledParamsBuilder<0> Builder() {
    return InspectModeCanceledParamsBuilder<0>();
  }

 private:
  InspectModeCanceledParams() { }

};


}  // namespace overlay

}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_OVERLAY_H_
