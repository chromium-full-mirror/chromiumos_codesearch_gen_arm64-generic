// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_OVERLAY_H_
#define HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_OVERLAY_H_

#include "base/notreached.h"
#include "base/values.h"
#include "headless/public/devtools/domains/types_overlay.h"
#include "headless/public/internal/value_conversions.h"

namespace headless {
namespace internal {


template <>
struct FromValue<overlay::SourceOrderConfig> {
  static std::unique_ptr<overlay::SourceOrderConfig> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SourceOrderConfig::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SourceOrderConfig& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::GridHighlightConfig> {
  static std::unique_ptr<overlay::GridHighlightConfig> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::GridHighlightConfig::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::GridHighlightConfig& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::FlexContainerHighlightConfig> {
  static std::unique_ptr<overlay::FlexContainerHighlightConfig> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::FlexContainerHighlightConfig::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::FlexContainerHighlightConfig& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::FlexItemHighlightConfig> {
  static std::unique_ptr<overlay::FlexItemHighlightConfig> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::FlexItemHighlightConfig::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::FlexItemHighlightConfig& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::LineStyle> {
  static std::unique_ptr<overlay::LineStyle> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::LineStyle::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::LineStyle& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::BoxStyle> {
  static std::unique_ptr<overlay::BoxStyle> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::BoxStyle::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::BoxStyle& value) {
  return value.Serialize();
}

template <>
struct FromValue<overlay::ContrastAlgorithm> {
  static overlay::ContrastAlgorithm Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return overlay::ContrastAlgorithm::AA;
    }
    if (value.GetString() == "aa")
      return overlay::ContrastAlgorithm::AA;
    if (value.GetString() == "aaa")
      return overlay::ContrastAlgorithm::AAA;
    if (value.GetString() == "apca")
      return overlay::ContrastAlgorithm::APCA;
    errors->AddError("invalid enum value");
    return overlay::ContrastAlgorithm::AA;
  }
};

template <>
inline base::Value ToValue(const overlay::ContrastAlgorithm& value) {
  switch (value) {
    case overlay::ContrastAlgorithm::AA:
      return base::Value("aa");
    case overlay::ContrastAlgorithm::AAA:
      return base::Value("aaa");
    case overlay::ContrastAlgorithm::APCA:
      return base::Value("apca");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<overlay::HighlightConfig> {
  static std::unique_ptr<overlay::HighlightConfig> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::HighlightConfig::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::HighlightConfig& value) {
  return value.Serialize();
}

template <>
struct FromValue<overlay::ColorFormat> {
  static overlay::ColorFormat Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return overlay::ColorFormat::RGB;
    }
    if (value.GetString() == "rgb")
      return overlay::ColorFormat::RGB;
    if (value.GetString() == "hsl")
      return overlay::ColorFormat::HSL;
    if (value.GetString() == "hwb")
      return overlay::ColorFormat::HWB;
    if (value.GetString() == "hex")
      return overlay::ColorFormat::HEX;
    errors->AddError("invalid enum value");
    return overlay::ColorFormat::RGB;
  }
};

template <>
inline base::Value ToValue(const overlay::ColorFormat& value) {
  switch (value) {
    case overlay::ColorFormat::RGB:
      return base::Value("rgb");
    case overlay::ColorFormat::HSL:
      return base::Value("hsl");
    case overlay::ColorFormat::HWB:
      return base::Value("hwb");
    case overlay::ColorFormat::HEX:
      return base::Value("hex");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<overlay::GridNodeHighlightConfig> {
  static std::unique_ptr<overlay::GridNodeHighlightConfig> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::GridNodeHighlightConfig::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::GridNodeHighlightConfig& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::FlexNodeHighlightConfig> {
  static std::unique_ptr<overlay::FlexNodeHighlightConfig> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::FlexNodeHighlightConfig::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::FlexNodeHighlightConfig& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::ScrollSnapContainerHighlightConfig> {
  static std::unique_ptr<overlay::ScrollSnapContainerHighlightConfig> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::ScrollSnapContainerHighlightConfig::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::ScrollSnapContainerHighlightConfig& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::ScrollSnapHighlightConfig> {
  static std::unique_ptr<overlay::ScrollSnapHighlightConfig> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::ScrollSnapHighlightConfig::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::ScrollSnapHighlightConfig& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::HingeConfig> {
  static std::unique_ptr<overlay::HingeConfig> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::HingeConfig::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::HingeConfig& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::WindowControlsOverlayConfig> {
  static std::unique_ptr<overlay::WindowControlsOverlayConfig> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::WindowControlsOverlayConfig::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::WindowControlsOverlayConfig& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::ContainerQueryHighlightConfig> {
  static std::unique_ptr<overlay::ContainerQueryHighlightConfig> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::ContainerQueryHighlightConfig::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::ContainerQueryHighlightConfig& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::ContainerQueryContainerHighlightConfig> {
  static std::unique_ptr<overlay::ContainerQueryContainerHighlightConfig> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::ContainerQueryContainerHighlightConfig::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::ContainerQueryContainerHighlightConfig& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::IsolatedElementHighlightConfig> {
  static std::unique_ptr<overlay::IsolatedElementHighlightConfig> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::IsolatedElementHighlightConfig::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::IsolatedElementHighlightConfig& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::IsolationModeHighlightConfig> {
  static std::unique_ptr<overlay::IsolationModeHighlightConfig> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::IsolationModeHighlightConfig::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::IsolationModeHighlightConfig& value) {
  return value.Serialize();
}

template <>
struct FromValue<overlay::InspectMode> {
  static overlay::InspectMode Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return overlay::InspectMode::SEARCH_FOR_NODE;
    }
    if (value.GetString() == "searchForNode")
      return overlay::InspectMode::SEARCH_FOR_NODE;
    if (value.GetString() == "searchForUAShadowDOM")
      return overlay::InspectMode::SEARCH_FORUA_SHADOWDOM;
    if (value.GetString() == "captureAreaScreenshot")
      return overlay::InspectMode::CAPTURE_AREA_SCREENSHOT;
    if (value.GetString() == "showDistances")
      return overlay::InspectMode::SHOW_DISTANCES;
    if (value.GetString() == "none")
      return overlay::InspectMode::NONE;
    errors->AddError("invalid enum value");
    return overlay::InspectMode::SEARCH_FOR_NODE;
  }
};

template <>
inline base::Value ToValue(const overlay::InspectMode& value) {
  switch (value) {
    case overlay::InspectMode::SEARCH_FOR_NODE:
      return base::Value("searchForNode");
    case overlay::InspectMode::SEARCH_FORUA_SHADOWDOM:
      return base::Value("searchForUAShadowDOM");
    case overlay::InspectMode::CAPTURE_AREA_SCREENSHOT:
      return base::Value("captureAreaScreenshot");
    case overlay::InspectMode::SHOW_DISTANCES:
      return base::Value("showDistances");
    case overlay::InspectMode::NONE:
      return base::Value("none");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<overlay::LineStylePattern> {
  static overlay::LineStylePattern Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return overlay::LineStylePattern::DASHED;
    }
    if (value.GetString() == "dashed")
      return overlay::LineStylePattern::DASHED;
    if (value.GetString() == "dotted")
      return overlay::LineStylePattern::DOTTED;
    errors->AddError("invalid enum value");
    return overlay::LineStylePattern::DASHED;
  }
};

template <>
inline base::Value ToValue(const overlay::LineStylePattern& value) {
  switch (value) {
    case overlay::LineStylePattern::DASHED:
      return base::Value("dashed");
    case overlay::LineStylePattern::DOTTED:
      return base::Value("dotted");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<overlay::DisableParams> {
  static std::unique_ptr<overlay::DisableParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::DisableParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::DisableParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::DisableResult> {
  static std::unique_ptr<overlay::DisableResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::DisableResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::DisableResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::EnableParams> {
  static std::unique_ptr<overlay::EnableParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::EnableParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::EnableParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::EnableResult> {
  static std::unique_ptr<overlay::EnableResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::EnableResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::EnableResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::GetHighlightObjectForTestParams> {
  static std::unique_ptr<overlay::GetHighlightObjectForTestParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::GetHighlightObjectForTestParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::GetHighlightObjectForTestParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::GetHighlightObjectForTestResult> {
  static std::unique_ptr<overlay::GetHighlightObjectForTestResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::GetHighlightObjectForTestResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::GetHighlightObjectForTestResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::GetGridHighlightObjectsForTestParams> {
  static std::unique_ptr<overlay::GetGridHighlightObjectsForTestParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::GetGridHighlightObjectsForTestParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::GetGridHighlightObjectsForTestParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::GetGridHighlightObjectsForTestResult> {
  static std::unique_ptr<overlay::GetGridHighlightObjectsForTestResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::GetGridHighlightObjectsForTestResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::GetGridHighlightObjectsForTestResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::GetSourceOrderHighlightObjectForTestParams> {
  static std::unique_ptr<overlay::GetSourceOrderHighlightObjectForTestParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::GetSourceOrderHighlightObjectForTestParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::GetSourceOrderHighlightObjectForTestParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::GetSourceOrderHighlightObjectForTestResult> {
  static std::unique_ptr<overlay::GetSourceOrderHighlightObjectForTestResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::GetSourceOrderHighlightObjectForTestResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::GetSourceOrderHighlightObjectForTestResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::HideHighlightParams> {
  static std::unique_ptr<overlay::HideHighlightParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::HideHighlightParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::HideHighlightParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::HideHighlightResult> {
  static std::unique_ptr<overlay::HideHighlightResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::HideHighlightResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::HideHighlightResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::HighlightFrameParams> {
  static std::unique_ptr<overlay::HighlightFrameParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::HighlightFrameParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::HighlightFrameParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::HighlightFrameResult> {
  static std::unique_ptr<overlay::HighlightFrameResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::HighlightFrameResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::HighlightFrameResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::HighlightNodeParams> {
  static std::unique_ptr<overlay::HighlightNodeParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::HighlightNodeParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::HighlightNodeParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::HighlightNodeResult> {
  static std::unique_ptr<overlay::HighlightNodeResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::HighlightNodeResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::HighlightNodeResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::HighlightQuadParams> {
  static std::unique_ptr<overlay::HighlightQuadParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::HighlightQuadParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::HighlightQuadParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::HighlightQuadResult> {
  static std::unique_ptr<overlay::HighlightQuadResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::HighlightQuadResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::HighlightQuadResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::HighlightRectParams> {
  static std::unique_ptr<overlay::HighlightRectParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::HighlightRectParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::HighlightRectParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::HighlightRectResult> {
  static std::unique_ptr<overlay::HighlightRectResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::HighlightRectResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::HighlightRectResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::HighlightSourceOrderParams> {
  static std::unique_ptr<overlay::HighlightSourceOrderParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::HighlightSourceOrderParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::HighlightSourceOrderParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::HighlightSourceOrderResult> {
  static std::unique_ptr<overlay::HighlightSourceOrderResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::HighlightSourceOrderResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::HighlightSourceOrderResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetInspectModeParams> {
  static std::unique_ptr<overlay::SetInspectModeParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetInspectModeParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetInspectModeParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetInspectModeResult> {
  static std::unique_ptr<overlay::SetInspectModeResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetInspectModeResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetInspectModeResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowAdHighlightsParams> {
  static std::unique_ptr<overlay::SetShowAdHighlightsParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowAdHighlightsParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowAdHighlightsParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowAdHighlightsResult> {
  static std::unique_ptr<overlay::SetShowAdHighlightsResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowAdHighlightsResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowAdHighlightsResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetPausedInDebuggerMessageParams> {
  static std::unique_ptr<overlay::SetPausedInDebuggerMessageParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetPausedInDebuggerMessageParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetPausedInDebuggerMessageParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetPausedInDebuggerMessageResult> {
  static std::unique_ptr<overlay::SetPausedInDebuggerMessageResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetPausedInDebuggerMessageResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetPausedInDebuggerMessageResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowDebugBordersParams> {
  static std::unique_ptr<overlay::SetShowDebugBordersParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowDebugBordersParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowDebugBordersParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowDebugBordersResult> {
  static std::unique_ptr<overlay::SetShowDebugBordersResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowDebugBordersResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowDebugBordersResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowFPSCounterParams> {
  static std::unique_ptr<overlay::SetShowFPSCounterParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowFPSCounterParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowFPSCounterParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowFPSCounterResult> {
  static std::unique_ptr<overlay::SetShowFPSCounterResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowFPSCounterResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowFPSCounterResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowGridOverlaysParams> {
  static std::unique_ptr<overlay::SetShowGridOverlaysParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowGridOverlaysParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowGridOverlaysParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowGridOverlaysResult> {
  static std::unique_ptr<overlay::SetShowGridOverlaysResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowGridOverlaysResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowGridOverlaysResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowFlexOverlaysParams> {
  static std::unique_ptr<overlay::SetShowFlexOverlaysParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowFlexOverlaysParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowFlexOverlaysParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowFlexOverlaysResult> {
  static std::unique_ptr<overlay::SetShowFlexOverlaysResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowFlexOverlaysResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowFlexOverlaysResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowScrollSnapOverlaysParams> {
  static std::unique_ptr<overlay::SetShowScrollSnapOverlaysParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowScrollSnapOverlaysParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowScrollSnapOverlaysParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowScrollSnapOverlaysResult> {
  static std::unique_ptr<overlay::SetShowScrollSnapOverlaysResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowScrollSnapOverlaysResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowScrollSnapOverlaysResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowContainerQueryOverlaysParams> {
  static std::unique_ptr<overlay::SetShowContainerQueryOverlaysParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowContainerQueryOverlaysParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowContainerQueryOverlaysParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowContainerQueryOverlaysResult> {
  static std::unique_ptr<overlay::SetShowContainerQueryOverlaysResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowContainerQueryOverlaysResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowContainerQueryOverlaysResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowPaintRectsParams> {
  static std::unique_ptr<overlay::SetShowPaintRectsParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowPaintRectsParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowPaintRectsParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowPaintRectsResult> {
  static std::unique_ptr<overlay::SetShowPaintRectsResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowPaintRectsResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowPaintRectsResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowLayoutShiftRegionsParams> {
  static std::unique_ptr<overlay::SetShowLayoutShiftRegionsParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowLayoutShiftRegionsParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowLayoutShiftRegionsParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowLayoutShiftRegionsResult> {
  static std::unique_ptr<overlay::SetShowLayoutShiftRegionsResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowLayoutShiftRegionsResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowLayoutShiftRegionsResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowScrollBottleneckRectsParams> {
  static std::unique_ptr<overlay::SetShowScrollBottleneckRectsParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowScrollBottleneckRectsParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowScrollBottleneckRectsParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowScrollBottleneckRectsResult> {
  static std::unique_ptr<overlay::SetShowScrollBottleneckRectsResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowScrollBottleneckRectsResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowScrollBottleneckRectsResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowHitTestBordersParams> {
  static std::unique_ptr<overlay::SetShowHitTestBordersParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowHitTestBordersParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowHitTestBordersParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowHitTestBordersResult> {
  static std::unique_ptr<overlay::SetShowHitTestBordersResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowHitTestBordersResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowHitTestBordersResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowWebVitalsParams> {
  static std::unique_ptr<overlay::SetShowWebVitalsParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowWebVitalsParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowWebVitalsParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowWebVitalsResult> {
  static std::unique_ptr<overlay::SetShowWebVitalsResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowWebVitalsResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowWebVitalsResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowViewportSizeOnResizeParams> {
  static std::unique_ptr<overlay::SetShowViewportSizeOnResizeParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowViewportSizeOnResizeParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowViewportSizeOnResizeParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowViewportSizeOnResizeResult> {
  static std::unique_ptr<overlay::SetShowViewportSizeOnResizeResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowViewportSizeOnResizeResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowViewportSizeOnResizeResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowHingeParams> {
  static std::unique_ptr<overlay::SetShowHingeParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowHingeParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowHingeParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowHingeResult> {
  static std::unique_ptr<overlay::SetShowHingeResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowHingeResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowHingeResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowIsolatedElementsParams> {
  static std::unique_ptr<overlay::SetShowIsolatedElementsParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowIsolatedElementsParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowIsolatedElementsParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowIsolatedElementsResult> {
  static std::unique_ptr<overlay::SetShowIsolatedElementsResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowIsolatedElementsResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowIsolatedElementsResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowWindowControlsOverlayParams> {
  static std::unique_ptr<overlay::SetShowWindowControlsOverlayParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowWindowControlsOverlayParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowWindowControlsOverlayParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::SetShowWindowControlsOverlayResult> {
  static std::unique_ptr<overlay::SetShowWindowControlsOverlayResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::SetShowWindowControlsOverlayResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::SetShowWindowControlsOverlayResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::InspectNodeRequestedParams> {
  static std::unique_ptr<overlay::InspectNodeRequestedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::InspectNodeRequestedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::InspectNodeRequestedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::NodeHighlightRequestedParams> {
  static std::unique_ptr<overlay::NodeHighlightRequestedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::NodeHighlightRequestedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::NodeHighlightRequestedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::ScreenshotRequestedParams> {
  static std::unique_ptr<overlay::ScreenshotRequestedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::ScreenshotRequestedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::ScreenshotRequestedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<overlay::InspectModeCanceledParams> {
  static std::unique_ptr<overlay::InspectModeCanceledParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return overlay::InspectModeCanceledParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const overlay::InspectModeCanceledParams& value) {
  return value.Serialize();
}


}  // namespace internal
}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_OVERLAY_H_
