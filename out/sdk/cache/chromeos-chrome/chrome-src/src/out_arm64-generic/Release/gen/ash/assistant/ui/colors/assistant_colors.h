// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is generated from:
//   ../../../../../../../home/chrome-bot/chrome_root/src/ash/assistant/ui/colors/assistant_colors.json5
//   ../../../../../../../home/chrome-bot/chrome_root/src/ui/chromeos/styles/cros_palette.json5

#ifndef GEN_ASH_ASSISTANT_UI_COLORS_ASSISTANT_COLORS_H_
#define GEN_ASH_ASSISTANT_UI_COLORS_ASSISTANT_COLORS_H_

#include "base/component_export.h"
#include "third_party/skia/include/core/SkColor.h"

namespace assistant_colors {

COMPONENT_EXPORT(assistant_colors) bool DarkModeEnabled();
COMPONENT_EXPORT(assistant_colors) bool DebugColorsEnabled();
COMPONENT_EXPORT(assistant_colors) void SetDarkModeEnabled(bool enabled);
COMPONENT_EXPORT(assistant_colors) void SetDebugColorsEnabled(bool enabled);

enum class ColorName {
  kGoogleBlue50,
  kGoogleBlue100,
  kGoogleBlue200,
  kGoogleBlue300,
  kGoogleBlue400,
  kGoogleBlue500,
  kGoogleBlue600,
  kGoogleBlue700,
  kGoogleBlue800,
  kGoogleBlue900,
  kGoogleGreen50,
  kGoogleGreen100,
  kGoogleGreen200,
  kGoogleGreen300,
  kGoogleGreen400,
  kGoogleGreen500,
  kGoogleGreen600,
  kGoogleGreen700,
  kGoogleGreen800,
  kGoogleGreen900,
  kGoogleGrey50,
  kGoogleGrey100,
  kGoogleGrey200,
  kGoogleGrey300,
  kGoogleGrey400,
  kGoogleGrey500,
  kGoogleGrey600,
  kGoogleGrey700,
  kGoogleGrey800,
  kGoogleGrey900,
  kGoogleRed50,
  kGoogleRed100,
  kGoogleRed200,
  kGoogleRed300,
  kGoogleRed400,
  kGoogleRed500,
  kGoogleRed600,
  kGoogleRed700,
  kGoogleRed800,
  kGoogleRed900,
  kGoogleYellow50,
  kGoogleYellow100,
  kGoogleYellow200,
  kGoogleYellow300,
  kGoogleYellow400,
  kGoogleYellow500,
  kGoogleYellow600,
  kGoogleYellow700,
  kGoogleYellow800,
  kGoogleYellow900,
  kGoogleOrange50,
  kGoogleOrange100,
  kGoogleOrange200,
  kGoogleOrange300,
  kGoogleOrange400,
  kGoogleOrange500,
  kGoogleOrange600,
  kGoogleOrange700,
  kGoogleOrange800,
  kGoogleOrange900,
  kGooglePink50,
  kGooglePink100,
  kGooglePink200,
  kGooglePink300,
  kGooglePink400,
  kGooglePink500,
  kGooglePink600,
  kGooglePink700,
  kGooglePink800,
  kGooglePink900,
  kGooglePurple50,
  kGooglePurple100,
  kGooglePurple200,
  kGooglePurple300,
  kGooglePurple400,
  kGooglePurple500,
  kGooglePurple600,
  kGooglePurple700,
  kGooglePurple800,
  kGooglePurple900,
  kGoogleCyan50,
  kGoogleCyan100,
  kGoogleCyan200,
  kGoogleCyan300,
  kGoogleCyan400,
  kGoogleCyan500,
  kGoogleCyan600,
  kGoogleCyan700,
  kGoogleCyan800,
  kGoogleCyan900,
  kBgAssistantPlate,
};

enum class OpacityName {
  kFakeOpacity,
};

COMPONENT_EXPORT(assistant_colors) SkAlpha GetOpacity(
    OpacityName opacity_name,
    bool is_dark_mode = DarkModeEnabled());

COMPONENT_EXPORT(assistant_colors) SkColor ResolveColor(
    ColorName color_name,
    bool is_dark_mode = DarkModeEnabled(),
    bool use_debug_colors = DebugColorsEnabled());

}  // namespace assistant_colors
#endif  // GEN_ASH_ASSISTANT_UI_COLORS_ASSISTANT_COLORS_H_
