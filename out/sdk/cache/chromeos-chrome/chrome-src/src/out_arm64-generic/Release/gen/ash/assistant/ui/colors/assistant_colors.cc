// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is generated from:
//   ../../../../../../../home/chrome-bot/chrome_root/src/ash/assistant/ui/colors/assistant_colors.json5
//   ../../../../../../../home/chrome-bot/chrome_root/src/ui/chromeos/styles/cros_palette.json5

#include "ash/assistant/ui/colors/assistant_colors.h"

#include "third_party/abseil-cpp/absl/types/optional.h"
#include "third_party/skia/include/core/SkColor.h"

namespace assistant_colors {

bool g_dark_mode_enabled = false;
bool g_debug_colors_enabled = false;

bool DarkModeEnabled() {
  return g_dark_mode_enabled;
}

bool DebugColorsEnabled() {
  return g_debug_colors_enabled;
}

void SetDarkModeEnabled(bool enabled) {
  g_dark_mode_enabled = enabled;
}

void SetDebugColorsEnabled(bool enabled) {
  g_debug_colors_enabled = enabled;
}

SkAlpha GetOpacity(OpacityName opacity_name, bool is_dark_mode) {
  switch (opacity_name) {
    case OpacityName::kFakeOpacity:
      return 0x0;
  }
}

absl::optional<SkColor> GetDebugColor(ColorName color_name, bool is_dark_mode) {
  switch (color_name) {
    default:
      return absl::nullopt;
  }
}

SkColor ResolveColor(ColorName color_name,
                     bool is_dark_mode,
                     bool use_debug_colors) {
  if (use_debug_colors) {
    auto debug_color = GetDebugColor(color_name, is_dark_mode);
    if (debug_color) {
      return *debug_color;
    }
  }
  switch (color_name) {
    case ColorName::kGoogleBlue50:
      return SkColorSetRGB(0xE8, 0xF0, 0xFE);
    case ColorName::kGoogleBlue100:
      return SkColorSetRGB(0xD2, 0xE3, 0xFC);
    case ColorName::kGoogleBlue200:
      return SkColorSetRGB(0xAE, 0xCB, 0xFA);
    case ColorName::kGoogleBlue300:
      return SkColorSetRGB(0x8A, 0xB4, 0xF8);
    case ColorName::kGoogleBlue400:
      return SkColorSetRGB(0x66, 0x9D, 0xF6);
    case ColorName::kGoogleBlue500:
      return SkColorSetRGB(0x42, 0x85, 0xF4);
    case ColorName::kGoogleBlue600:
      return SkColorSetRGB(0x1A, 0x73, 0xE8);
    case ColorName::kGoogleBlue700:
      return SkColorSetRGB(0x19, 0x67, 0xD2);
    case ColorName::kGoogleBlue800:
      return SkColorSetRGB(0x18, 0x5A, 0xBC);
    case ColorName::kGoogleBlue900:
      return SkColorSetRGB(0x17, 0x4E, 0xA6);
    case ColorName::kGoogleGreen50:
      return SkColorSetRGB(0xE6, 0xF4, 0xEA);
    case ColorName::kGoogleGreen100:
      return SkColorSetRGB(0xCE, 0xEA, 0xD6);
    case ColorName::kGoogleGreen200:
      return SkColorSetRGB(0xA8, 0xDA, 0xB5);
    case ColorName::kGoogleGreen300:
      return SkColorSetRGB(0x81, 0xC9, 0x95);
    case ColorName::kGoogleGreen400:
      return SkColorSetRGB(0x5B, 0xB9, 0x74);
    case ColorName::kGoogleGreen500:
      return SkColorSetRGB(0x34, 0xA8, 0x53);
    case ColorName::kGoogleGreen600:
      return SkColorSetRGB(0x1E, 0x8E, 0x3E);
    case ColorName::kGoogleGreen700:
      return SkColorSetRGB(0x18, 0x80, 0x38);
    case ColorName::kGoogleGreen800:
      return SkColorSetRGB(0x13, 0x73, 0x33);
    case ColorName::kGoogleGreen900:
      return SkColorSetRGB(0xD, 0x65, 0x2D);
    case ColorName::kGoogleGrey50:
      return SkColorSetRGB(0xF8, 0xF9, 0xFA);
    case ColorName::kGoogleGrey100:
      return SkColorSetRGB(0xF1, 0xF3, 0xF4);
    case ColorName::kGoogleGrey200:
      return SkColorSetRGB(0xE8, 0xEA, 0xED);
    case ColorName::kGoogleGrey300:
      return SkColorSetRGB(0xDA, 0xDC, 0xE0);
    case ColorName::kGoogleGrey400:
      return SkColorSetRGB(0xBD, 0xC1, 0xC6);
    case ColorName::kGoogleGrey500:
      return SkColorSetRGB(0x9A, 0xA0, 0xA6);
    case ColorName::kGoogleGrey600:
      return SkColorSetRGB(0x80, 0x86, 0x8B);
    case ColorName::kGoogleGrey700:
      return SkColorSetRGB(0x5F, 0x63, 0x68);
    case ColorName::kGoogleGrey800:
      return SkColorSetRGB(0x3C, 0x40, 0x43);
    case ColorName::kGoogleGrey900:
      return SkColorSetRGB(0x20, 0x21, 0x24);
    case ColorName::kGoogleRed50:
      return SkColorSetRGB(0xFC, 0xE8, 0xE6);
    case ColorName::kGoogleRed100:
      return SkColorSetRGB(0xFA, 0xD2, 0xCF);
    case ColorName::kGoogleRed200:
      return SkColorSetRGB(0xF6, 0xAE, 0xA9);
    case ColorName::kGoogleRed300:
      return SkColorSetRGB(0xF2, 0x8B, 0x82);
    case ColorName::kGoogleRed400:
      return SkColorSetRGB(0xEE, 0x67, 0x5C);
    case ColorName::kGoogleRed500:
      return SkColorSetRGB(0xEA, 0x43, 0x35);
    case ColorName::kGoogleRed600:
      return SkColorSetRGB(0xD9, 0x30, 0x25);
    case ColorName::kGoogleRed700:
      return SkColorSetRGB(0xC5, 0x22, 0x1F);
    case ColorName::kGoogleRed800:
      return SkColorSetRGB(0xB3, 0x14, 0x12);
    case ColorName::kGoogleRed900:
      return SkColorSetRGB(0xA5, 0xE, 0xE);
    case ColorName::kGoogleYellow50:
      return SkColorSetRGB(0xFE, 0xF7, 0xE0);
    case ColorName::kGoogleYellow100:
      return SkColorSetRGB(0xFE, 0xEF, 0xC3);
    case ColorName::kGoogleYellow200:
      return SkColorSetRGB(0xFD, 0xE2, 0x93);
    case ColorName::kGoogleYellow300:
      return SkColorSetRGB(0xFD, 0xD6, 0x63);
    case ColorName::kGoogleYellow400:
      return SkColorSetRGB(0xFC, 0xC9, 0x34);
    case ColorName::kGoogleYellow500:
      return SkColorSetRGB(0xFB, 0xBC, 0x4);
    case ColorName::kGoogleYellow600:
      return SkColorSetRGB(0xF9, 0xAB, 0x0);
    case ColorName::kGoogleYellow700:
      return SkColorSetRGB(0xF2, 0x99, 0x0);
    case ColorName::kGoogleYellow800:
      return SkColorSetRGB(0xEA, 0x86, 0x0);
    case ColorName::kGoogleYellow900:
      return SkColorSetRGB(0xE3, 0x74, 0x0);
    case ColorName::kGoogleOrange50:
      return SkColorSetRGB(0xFE, 0xEF, 0xE3);
    case ColorName::kGoogleOrange100:
      return SkColorSetRGB(0xFE, 0xDF, 0xC8);
    case ColorName::kGoogleOrange200:
      return SkColorSetRGB(0xFD, 0xC6, 0x9C);
    case ColorName::kGoogleOrange300:
      return SkColorSetRGB(0xFC, 0xAD, 0x70);
    case ColorName::kGoogleOrange400:
      return SkColorSetRGB(0xFA, 0x90, 0x3E);
    case ColorName::kGoogleOrange500:
      return SkColorSetRGB(0xFA, 0x7B, 0x17);
    case ColorName::kGoogleOrange600:
      return SkColorSetRGB(0xE8, 0x71, 0xA);
    case ColorName::kGoogleOrange700:
      return SkColorSetRGB(0xD5, 0x6E, 0xC);
    case ColorName::kGoogleOrange800:
      return SkColorSetRGB(0xC2, 0x64, 0x1);
    case ColorName::kGoogleOrange900:
      return SkColorSetRGB(0xB0, 0x60, 0x0);
    case ColorName::kGooglePink50:
      return SkColorSetRGB(0xFD, 0xE7, 0xF3);
    case ColorName::kGooglePink100:
      return SkColorSetRGB(0xFD, 0xCF, 0xE8);
    case ColorName::kGooglePink200:
      return SkColorSetRGB(0xFB, 0xA9, 0xD6);
    case ColorName::kGooglePink300:
      return SkColorSetRGB(0xFF, 0x8B, 0xCB);
    case ColorName::kGooglePink400:
      return SkColorSetRGB(0xFF, 0x63, 0xB8);
    case ColorName::kGooglePink500:
      return SkColorSetRGB(0xF4, 0x39, 0xA0);
    case ColorName::kGooglePink600:
      return SkColorSetRGB(0xE5, 0x25, 0x92);
    case ColorName::kGooglePink700:
      return SkColorSetRGB(0xD0, 0x18, 0x84);
    case ColorName::kGooglePink800:
      return SkColorSetRGB(0xB8, 0x6, 0x72);
    case ColorName::kGooglePink900:
      return SkColorSetRGB(0x9C, 0x16, 0x6B);
    case ColorName::kGooglePurple50:
      return SkColorSetRGB(0xF3, 0xE8, 0xFD);
    case ColorName::kGooglePurple100:
      return SkColorSetRGB(0xE9, 0xD2, 0xFD);
    case ColorName::kGooglePurple200:
      return SkColorSetRGB(0xD7, 0xAE, 0xFB);
    case ColorName::kGooglePurple300:
      return SkColorSetRGB(0xC5, 0x8A, 0xF9);
    case ColorName::kGooglePurple400:
      return SkColorSetRGB(0xAF, 0x5C, 0xF7);
    case ColorName::kGooglePurple500:
      return SkColorSetRGB(0xA1, 0x42, 0xF4);
    case ColorName::kGooglePurple600:
      return SkColorSetRGB(0x93, 0x34, 0xE6);
    case ColorName::kGooglePurple700:
      return SkColorSetRGB(0x84, 0x30, 0xCE);
    case ColorName::kGooglePurple800:
      return SkColorSetRGB(0x76, 0x27, 0xBB);
    case ColorName::kGooglePurple900:
      return SkColorSetRGB(0x68, 0x1D, 0xA8);
    case ColorName::kGoogleCyan50:
      return SkColorSetRGB(0xE4, 0xF7, 0xFB);
    case ColorName::kGoogleCyan100:
      return SkColorSetRGB(0xCB, 0xF0, 0xF8);
    case ColorName::kGoogleCyan200:
      return SkColorSetRGB(0xA1, 0xE4, 0xF2);
    case ColorName::kGoogleCyan300:
      return SkColorSetRGB(0x78, 0xD9, 0xEC);
    case ColorName::kGoogleCyan400:
      return SkColorSetRGB(0x4E, 0xCD, 0xE6);
    case ColorName::kGoogleCyan500:
      return SkColorSetRGB(0x24, 0xC1, 0xE0);
    case ColorName::kGoogleCyan600:
      return SkColorSetRGB(0x12, 0xB5, 0xCB);
    case ColorName::kGoogleCyan700:
      return SkColorSetRGB(0x12, 0x9E, 0xAF);
    case ColorName::kGoogleCyan800:
      return SkColorSetRGB(0x9, 0x85, 0x91);
    case ColorName::kGoogleCyan900:
      return SkColorSetRGB(0x0, 0x7B, 0x83);
    case ColorName::kBgAssistantPlate:
      if (is_dark_mode)
        return SkColorSetRGB(0x1C, 0x2B, 0x3B);
      return SkColorSetRGB(0xEC, 0xEF, 0xEE);
  }
}

}  // namespace assistant_colors
