// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is generated from:
//   ../../../../../../../home/chrome-bot/chrome_root/src/ui/chromeos/styles/cros_colors.json5
//   ../../../../../../../home/chrome-bot/chrome_root/src/ui/chromeos/styles/cros_palette.json5
//   ../../../../../../../home/chrome-bot/chrome_root/src/ui/chromeos/styles/cros_shadows.json5
//   ../../../../../../../home/chrome-bot/chrome_root/src/ui/chromeos/styles/cros_typography.json5

#include "ui/chromeos/styles/cros_styles.h"

#include "third_party/abseil-cpp/absl/types/optional.h"
#include "third_party/skia/include/core/SkColor.h"

namespace cros_styles {

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
    case OpacityName::kDisabledOpacity:
      return 0x60;
    case OpacityName::kButtonPrimaryRippleOpacity:
      if (is_dark_mode) {
        return 0x28;
      } else {
        return 0x51;
      }
    case OpacityName::kButtonSecondaryRippleOpacity:
      if (is_dark_mode) {
        return 0x28;
      } else {
        return 0x19;
      }
    case OpacityName::kRippleOpacity:
      if (is_dark_mode) {
        return 0x14;
      } else {
        return 0xF;
      }
    case OpacityName::kSecondToneOpacity:
      return 0x4C;
  }
}

absl::optional<SkColor> GetDebugColor(ColorName color_name, bool is_dark_mode) {
  switch (color_name) {
    case ColorName::kColorProminent:
      return ResolveColor(ColorName::kColorProminentDebug, is_dark_mode);
    case ColorName::kColorSelection:
      return ResolveColor(ColorName::kColorSelectionDebug, is_dark_mode);
    case ColorName::kTextColorPrimary:
      return ResolveColor(ColorName::kTextColorPrimaryDebug, is_dark_mode);
    case ColorName::kTextColorSecondary:
      return ResolveColor(ColorName::kTextColorSecondaryDebug, is_dark_mode);
    case ColorName::kIconColorPrimary:
      return ResolveColor(ColorName::kIconColorPrimaryDebug, is_dark_mode);
    case ColorName::kIconColorSecondary:
      return ResolveColor(ColorName::kIconColorSecondaryDebug, is_dark_mode);
    case ColorName::kHighlightColor:
      return SkColorSetA(ResolveColor(ColorName::kGoogleRed300, is_dark_mode), 0x4C);
    case ColorName::kButtonBackgroundColorPrimaryHoverPreblended:
      return SkColorSetRGB(0xC8, 0x2C, 0x22);
    case ColorName::kIconButtonPressedColor:
      return SkColorSetARGB(0x1D, 0x0, 0x0, 0x0);
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
    case ColorName::kColorPrimaryLight:
      return ResolveColor(ColorName::kGoogleGrey900, is_dark_mode);
    case ColorName::kColorPrimaryDark:
      return ResolveColor(ColorName::kGoogleGrey200, is_dark_mode);
    case ColorName::kColorPrimaryInverted:
      if (is_dark_mode)
        return ResolveColor(ColorName::kColorPrimaryLight, is_dark_mode);
      return ResolveColor(ColorName::kColorPrimaryDark, is_dark_mode);
    case ColorName::kColorPrimary:
      if (is_dark_mode)
        return ResolveColor(ColorName::kColorPrimaryDark, is_dark_mode);
      return ResolveColor(ColorName::kColorPrimaryLight, is_dark_mode);
    case ColorName::kColorSecondaryLight:
      return ResolveColor(ColorName::kGoogleGrey700, is_dark_mode);
    case ColorName::kColorSecondaryDark:
      return ResolveColor(ColorName::kGoogleGrey400, is_dark_mode);
    case ColorName::kColorSecondary:
      if (is_dark_mode)
        return ResolveColor(ColorName::kColorSecondaryDark, is_dark_mode);
      return ResolveColor(ColorName::kColorSecondaryLight, is_dark_mode);
    case ColorName::kColorDisabledLight:
      return ResolveColor(ColorName::kGoogleGrey600, is_dark_mode);
    case ColorName::kColorDisabledDark:
      return ResolveColor(ColorName::kGoogleGrey500, is_dark_mode);
    case ColorName::kColorDisabled:
      if (is_dark_mode)
        return ResolveColor(ColorName::kColorDisabledDark, is_dark_mode);
      return ResolveColor(ColorName::kColorDisabledLight, is_dark_mode);
    case ColorName::kColorProminentLight:
      return ResolveColor(ColorName::kGoogleBlue600, is_dark_mode);
    case ColorName::kColorProminentDark:
      return ResolveColor(ColorName::kGoogleBlue300, is_dark_mode);
    case ColorName::kColorProminentDebug:
      return ResolveColor(ColorName::kGoogleRed600, is_dark_mode);
    case ColorName::kColorProminentInverted:
      if (is_dark_mode)
        return ResolveColor(ColorName::kColorProminentLight, is_dark_mode);
      return ResolveColor(ColorName::kColorProminentDark, is_dark_mode);
    case ColorName::kColorProminent:
      if (is_dark_mode)
        return ResolveColor(ColorName::kColorProminentDark, is_dark_mode);
      return ResolveColor(ColorName::kColorProminentLight, is_dark_mode);
    case ColorName::kColorAlertLight:
      return ResolveColor(ColorName::kGoogleRed600, is_dark_mode);
    case ColorName::kColorAlertDark:
      return ResolveColor(ColorName::kGoogleRed300, is_dark_mode);
    case ColorName::kColorAlertInverted:
      if (is_dark_mode)
        return ResolveColor(ColorName::kColorAlertLight, is_dark_mode);
      return ResolveColor(ColorName::kColorAlertDark, is_dark_mode);
    case ColorName::kColorAlert:
      if (is_dark_mode)
        return ResolveColor(ColorName::kColorAlertDark, is_dark_mode);
      return ResolveColor(ColorName::kColorAlertLight, is_dark_mode);
    case ColorName::kColorWarningLight:
      return ResolveColor(ColorName::kGoogleYellow900, is_dark_mode);
    case ColorName::kColorWarningDark:
      return ResolveColor(ColorName::kGoogleYellow300, is_dark_mode);
    case ColorName::kColorWarningInverted:
      if (is_dark_mode)
        return ResolveColor(ColorName::kColorWarningLight, is_dark_mode);
      return ResolveColor(ColorName::kColorWarningDark, is_dark_mode);
    case ColorName::kColorWarning:
      if (is_dark_mode)
        return ResolveColor(ColorName::kColorWarningDark, is_dark_mode);
      return ResolveColor(ColorName::kColorWarningLight, is_dark_mode);
    case ColorName::kColorPositive:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleGreen300, is_dark_mode);
      return ResolveColor(ColorName::kGoogleGreen700, is_dark_mode);
    case ColorName::kColorSelectionLight:
      return ResolveColor(ColorName::kGoogleBlue700, is_dark_mode);
    case ColorName::kColorSelectionDark:
      return ResolveColor(ColorName::kGoogleBlue200, is_dark_mode);
    case ColorName::kColorSelectionDebug:
      return ResolveColor(ColorName::kGoogleRed700, is_dark_mode);
    case ColorName::kColorSelection:
      if (is_dark_mode)
        return ResolveColor(ColorName::kColorSelectionDark, is_dark_mode);
      return ResolveColor(ColorName::kColorSelectionLight, is_dark_mode);
    case ColorName::kBgColorLight:
      return SkColorSetRGB(0xFF, 0xFF, 0xFF);
    case ColorName::kBgColorDark:
      return ResolveColor(ColorName::kGoogleGrey900, is_dark_mode);
    case ColorName::kBgColor:
      if (is_dark_mode)
        return ResolveColor(ColorName::kBgColorDark, is_dark_mode);
      return ResolveColor(ColorName::kBgColorLight, is_dark_mode);
    case ColorName::kBgColorElevation1:
      if (is_dark_mode)
        return SkColorSetRGB(0x29, 0x2A, 0x2D);
      return SkColorSetRGB(0xFF, 0xFF, 0xFF);
    case ColorName::kBgColorElevation2Light:
      return SkColorSetRGB(0xFF, 0xFF, 0xFF);
    case ColorName::kBgColorElevation2Dark:
      return SkColorSetRGB(0x2D, 0x2E, 0x31);
    case ColorName::kBgColorElevation2Inverted:
      if (is_dark_mode)
        return ResolveColor(ColorName::kBgColorElevation2Light, is_dark_mode);
      return ResolveColor(ColorName::kBgColorElevation2Dark, is_dark_mode);
    case ColorName::kBgColorElevation2:
      if (is_dark_mode)
        return ResolveColor(ColorName::kBgColorElevation2Dark, is_dark_mode);
      return ResolveColor(ColorName::kBgColorElevation2Light, is_dark_mode);
    case ColorName::kBgColorElevation3:
      if (is_dark_mode)
        return SkColorSetRGB(0x32, 0x33, 0x36);
      return SkColorSetRGB(0xFF, 0xFF, 0xFF);
    case ColorName::kBgColorElevation4:
      if (is_dark_mode)
        return SkColorSetRGB(0x36, 0x37, 0x3A);
      return SkColorSetRGB(0xFF, 0xFF, 0xFF);
    case ColorName::kBgColorElevation5:
      if (is_dark_mode)
        return SkColorSetRGB(0x3B, 0x3C, 0x3E);
      return SkColorSetRGB(0xFF, 0xFF, 0xFF);
    case ColorName::kBgColorDroppedElevation1:
      if (is_dark_mode)
        return SkColorSetRGB(0x1A, 0x1A, 0x1D);
      return ResolveColor(ColorName::kGoogleGrey50, is_dark_mode);
    case ColorName::kBgColorDroppedElevation2:
      if (is_dark_mode)
        return SkColorSetRGB(0x0, 0x0, 0x0);
      return ResolveColor(ColorName::kGoogleGrey200, is_dark_mode);
    case ColorName::kTextColorPrimaryLight:
      return ResolveColor(ColorName::kColorPrimaryLight, is_dark_mode);
    case ColorName::kTextColorPrimaryDark:
      return ResolveColor(ColorName::kColorPrimaryDark, is_dark_mode);
    case ColorName::kTextColorPrimaryDebug:
      return ResolveColor(ColorName::kGoogleGreen400, is_dark_mode);
    case ColorName::kTextColorPrimaryInverted:
      if (is_dark_mode)
        return ResolveColor(ColorName::kTextColorPrimaryLight, is_dark_mode);
      return ResolveColor(ColorName::kTextColorPrimaryDark, is_dark_mode);
    case ColorName::kTextColorPrimary:
      if (is_dark_mode)
        return ResolveColor(ColorName::kTextColorPrimaryDark, is_dark_mode);
      return ResolveColor(ColorName::kTextColorPrimaryLight, is_dark_mode);
    case ColorName::kTextColorSecondaryLight:
      return ResolveColor(ColorName::kColorSecondaryLight, is_dark_mode);
    case ColorName::kTextColorSecondaryDark:
      return ResolveColor(ColorName::kColorSecondaryDark, is_dark_mode);
    case ColorName::kTextColorSecondaryDebug:
      return ResolveColor(ColorName::kGoogleGreen400, is_dark_mode);
    case ColorName::kTextColorSecondary:
      if (is_dark_mode)
        return ResolveColor(ColorName::kTextColorSecondaryDark, is_dark_mode);
      return ResolveColor(ColorName::kTextColorSecondaryLight, is_dark_mode);
    case ColorName::kTextColorDisabled:
      return ResolveColor(ColorName::kColorDisabled, is_dark_mode);
    case ColorName::kTextColorProminent:
      return ResolveColor(ColorName::kColorProminent, is_dark_mode);
    case ColorName::kTextColorSelection:
      return ResolveColor(ColorName::kColorSelection, is_dark_mode);
    case ColorName::kTextColorPositive:
      return ResolveColor(ColorName::kColorPositive, is_dark_mode);
    case ColorName::kTextColorWarning:
      return ResolveColor(ColorName::kColorWarning, is_dark_mode);
    case ColorName::kTextColorAlert:
      return ResolveColor(ColorName::kColorAlert, is_dark_mode);
    case ColorName::kTextHighlightColor:
      if (is_dark_mode)
        return SkColorSetA(ResolveColor(ColorName::kGoogleBlue400, is_dark_mode), 0x4C);
      return SkColorSetA(ResolveColor(ColorName::kGoogleBlue600, is_dark_mode), 0x4C);
    case ColorName::kIconColorPrimaryLight:
      return ResolveColor(ColorName::kColorPrimaryLight, is_dark_mode);
    case ColorName::kIconColorPrimaryDark:
      return ResolveColor(ColorName::kColorPrimaryDark, is_dark_mode);
    case ColorName::kIconColorPrimaryDebug:
      return SkColorSetRGB(0xFF, 0x0, 0xFF);
    case ColorName::kIconColorPrimaryInverted:
      if (is_dark_mode)
        return ResolveColor(ColorName::kIconColorPrimaryLight, is_dark_mode);
      return ResolveColor(ColorName::kIconColorPrimaryDark, is_dark_mode);
    case ColorName::kIconColorPrimary:
      if (is_dark_mode)
        return ResolveColor(ColorName::kIconColorPrimaryDark, is_dark_mode);
      return ResolveColor(ColorName::kIconColorPrimaryLight, is_dark_mode);
    case ColorName::kIconColorSecondaryLight:
      return ResolveColor(ColorName::kColorSecondaryLight, is_dark_mode);
    case ColorName::kIconColorSecondaryDark:
      return ResolveColor(ColorName::kColorSecondaryDark, is_dark_mode);
    case ColorName::kIconColorSecondaryDebug:
      return SkColorSetRGB(0x0, 0xFF, 0xFF);
    case ColorName::kIconColorSecondary:
      if (is_dark_mode)
        return ResolveColor(ColorName::kIconColorSecondaryDark, is_dark_mode);
      return ResolveColor(ColorName::kIconColorSecondaryLight, is_dark_mode);
    case ColorName::kIconColorDisabled:
      return ResolveColor(ColorName::kColorDisabled, is_dark_mode);
    case ColorName::kIconColorProminent:
      return ResolveColor(ColorName::kColorProminent, is_dark_mode);
    case ColorName::kIconColorSelection:
      return ResolveColor(ColorName::kColorSelection, is_dark_mode);
    case ColorName::kIconColorPositive:
      return ResolveColor(ColorName::kColorPositive, is_dark_mode);
    case ColorName::kIconColorWarning:
      return ResolveColor(ColorName::kColorWarning, is_dark_mode);
    case ColorName::kIconColorAlert:
      return ResolveColor(ColorName::kColorAlert, is_dark_mode);
    case ColorName::kIconColorRed:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleRed300, is_dark_mode);
      return ResolveColor(ColorName::kGoogleRed600, is_dark_mode);
    case ColorName::kIconColorBlue:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleBlue300, is_dark_mode);
      return ResolveColor(ColorName::kGoogleBlue600, is_dark_mode);
    case ColorName::kIconColorGreen:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleGreen300, is_dark_mode);
      return ResolveColor(ColorName::kGoogleGreen600, is_dark_mode);
    case ColorName::kIconColorYellow:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleYellow300, is_dark_mode);
      return ResolveColor(ColorName::kGoogleYellow600, is_dark_mode);
    case ColorName::kAppShieldColor:
      if (is_dark_mode)
        return SkColorSetRGB(0x0, 0x0, 0x0);
      return SkColorSetA(ResolveColor(ColorName::kGoogleGrey300, is_dark_mode), 0xFF);
    case ColorName::kAppShield80:
      if (is_dark_mode)
        return SkColorSetARGB(0xCC, 0x0, 0x0, 0x0);
      return SkColorSetA(ResolveColor(ColorName::kGoogleGrey300, is_dark_mode), 0xCC);
    case ColorName::kAppShield60:
      if (is_dark_mode)
        return SkColorSetARGB(0x99, 0x0, 0x0, 0x0);
      return SkColorSetA(ResolveColor(ColorName::kGoogleGrey300, is_dark_mode), 0x99);
    case ColorName::kAppShield40Light:
      return SkColorSetA(ResolveColor(ColorName::kGoogleGrey300, is_dark_mode), 0x66);
    case ColorName::kAppShield40Dark:
      return SkColorSetARGB(0x66, 0x0, 0x0, 0x0);
    case ColorName::kAppShield40:
      if (is_dark_mode)
        return ResolveColor(ColorName::kAppShield40Dark, is_dark_mode);
      return ResolveColor(ColorName::kAppShield40Light, is_dark_mode);
    case ColorName::kAppShield20:
      if (is_dark_mode)
        return SkColorSetARGB(0x33, 0x0, 0x0, 0x0);
      return SkColorSetA(ResolveColor(ColorName::kGoogleGrey300, is_dark_mode), 0x33);
    case ColorName::kFocusRingColorLight:
      return ResolveColor(ColorName::kColorProminentLight, is_dark_mode);
    case ColorName::kFocusRingColorDark:
      return ResolveColor(ColorName::kColorProminentDark, is_dark_mode);
    case ColorName::kFocusRingColor:
      if (is_dark_mode)
        return ResolveColor(ColorName::kFocusRingColorDark, is_dark_mode);
      return ResolveColor(ColorName::kFocusRingColorLight, is_dark_mode);
    case ColorName::kFocusRingColorInactive:
      return ResolveColor(ColorName::kIconColorSecondary, is_dark_mode);
    case ColorName::kFocusAuraColor:
      return SkColorSetA(ResolveColor(ColorName::kColorProminent, is_dark_mode), 0x3D);
    case ColorName::kSeparatorColor:
      if (is_dark_mode)
        return SkColorSetARGB(0x23, 0xFF, 0xFF, 0xFF);
      return SkColorSetARGB(0x23, 0x0, 0x0, 0x0);
    case ColorName::kShadowColorKey:
      if (is_dark_mode)
        return SkColorSetARGB(0x4C, 0x0, 0x0, 0x0);
      return SkColorSetA(ResolveColor(ColorName::kGoogleGrey800, is_dark_mode), 0x4C);
    case ColorName::kShadowColorAmbient:
      if (is_dark_mode)
        return SkColorSetARGB(0x26, 0x0, 0x0, 0x0);
      return SkColorSetA(ResolveColor(ColorName::kGoogleGrey800, is_dark_mode), 0x26);
    case ColorName::kLinkColor:
      return ResolveColor(ColorName::kColorProminent, is_dark_mode);
    case ColorName::kHighlightColor:
      if (is_dark_mode)
        return SkColorSetA(ResolveColor(ColorName::kGoogleBlue300, is_dark_mode), 0x4C);
      return ResolveColor(ColorName::kGoogleBlue50, is_dark_mode);
    case ColorName::kHighlightColorError:
      if (is_dark_mode)
        return SkColorSetA(ResolveColor(ColorName::kColorAlert, is_dark_mode), 0x4C);
      return ResolveColor(ColorName::kGoogleRed50, is_dark_mode);
    case ColorName::kHighlightColorHoverLight:
      return SkColorSetA(ResolveColor(ColorName::kGoogleGrey700, is_dark_mode), 0x33);
    case ColorName::kHighlightColorHoverDark:
      return SkColorSetARGB(0x33, 0xFF, 0xFF, 0xFF);
    case ColorName::kHighlightColorHover:
      if (is_dark_mode)
        return ResolveColor(ColorName::kHighlightColorHoverDark, is_dark_mode);
      return ResolveColor(ColorName::kHighlightColorHoverLight, is_dark_mode);
    case ColorName::kHighlightColorFocus:
      if (is_dark_mode)
        return SkColorSetARGB(GetOpacity(OpacityName::kRippleOpacity, is_dark_mode), 0xFF, 0xFF, 0xFF);
      return SkColorSetARGB(GetOpacity(OpacityName::kRippleOpacity, is_dark_mode), 0x0, 0x0, 0x0);
    case ColorName::kHighlightColorGreen:
      if (is_dark_mode)
        return SkColorSetA(ResolveColor(ColorName::kGoogleGreen300, is_dark_mode), 0x4C);
      return SkColorSetA(ResolveColor(ColorName::kGoogleGreen50, is_dark_mode), 0xFF);
    case ColorName::kHighlightColorRed:
      if (is_dark_mode)
        return SkColorSetA(ResolveColor(ColorName::kGoogleRed600, is_dark_mode), 0x4C);
      return SkColorSetA(ResolveColor(ColorName::kGoogleRed50, is_dark_mode), 0xFF);
    case ColorName::kHighlightColorYellow:
      if (is_dark_mode)
        return SkColorSetA(ResolveColor(ColorName::kGoogleYellow600, is_dark_mode), 0x4C);
      return SkColorSetA(ResolveColor(ColorName::kGoogleYellow50, is_dark_mode), 0xFF);
    case ColorName::kRippleColorLight:
      return SkColorSetARGB(GetOpacity(OpacityName::kRippleOpacity, is_dark_mode), 0x0, 0x0, 0x0);
    case ColorName::kRippleColorDark:
      return SkColorSetARGB(GetOpacity(OpacityName::kRippleOpacity, is_dark_mode), 0xFF, 0xFF, 0xFF);
    case ColorName::kRippleColor:
      if (is_dark_mode)
        return ResolveColor(ColorName::kRippleColorDark, is_dark_mode);
      return ResolveColor(ColorName::kRippleColorLight, is_dark_mode);
    case ColorName::kRippleColorProminent:
      if (is_dark_mode)
        return SkColorSetA(ResolveColor(ColorName::kColorProminent, is_dark_mode), GetOpacity(OpacityName::kRippleOpacity, is_dark_mode));
      return SkColorSetA(ResolveColor(ColorName::kColorProminent, is_dark_mode), GetOpacity(OpacityName::kRippleOpacity, is_dark_mode));
    case ColorName::kToolbarSearchBgColor:
      if (is_dark_mode)
        return SkColorSetARGB(0x19, 0xFF, 0xFF, 0xFF);
      return ResolveColor(ColorName::kGoogleGrey100, is_dark_mode);
    case ColorName::kMenuItemBgColorFocus:
      return ResolveColor(ColorName::kHighlightColorFocus, is_dark_mode);
    case ColorName::kMenuItemRippleColor:
      return ResolveColor(ColorName::kRippleColor, is_dark_mode);
    case ColorName::kRadioButtonColor:
      return ResolveColor(ColorName::kColorProminent, is_dark_mode);
    case ColorName::kRadioButtonRippleColor:
      return SkColorSetA(ResolveColor(ColorName::kRadioButtonColor, is_dark_mode), 0x33);
    case ColorName::kRadioButtonColorUnchecked:
      return ResolveColor(ColorName::kGoogleGrey700, is_dark_mode);
    case ColorName::kRadioButtonRippleColorUnchecked:
      return SkColorSetA(ResolveColor(ColorName::kGoogleGrey600, is_dark_mode), 0x26);
    case ColorName::kButtonBackgroundColorPrimary:
      return ResolveColor(ColorName::kColorProminent, is_dark_mode);
    case ColorName::kButtonLabelColorPrimary:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleGrey900, is_dark_mode);
      return SkColorSetRGB(0xFF, 0xFF, 0xFF);
    case ColorName::kButtonRippleColorPrimary:
      if (is_dark_mode)
        return SkColorSetRGB(0x0, 0x0, 0x0);
      return SkColorSetRGB(0xFF, 0xFF, 0xFF);
    case ColorName::kButtonBackgroundColorPrimaryHover:
      return SkColorSetARGB(0x14, 0x0, 0x0, 0x0);
    case ColorName::kButtonBackgroundColorPrimaryHoverPreblended:
      if (is_dark_mode)
        return SkColorSetRGB(0x7F, 0xA6, 0xE4);
      return SkColorSetRGB(0x18, 0x6A, 0xD5);
    case ColorName::kButtonActiveShadowColorAmbientPrimary:
      if (is_dark_mode)
        return SkColorSetA(ResolveColor(ColorName::kGoogleBlue400, is_dark_mode), 0x26);
      return SkColorSetA(ResolveColor(ColorName::kGoogleBlue500, is_dark_mode), 0x26);
    case ColorName::kButtonActiveShadowColorKeyPrimary:
      if (is_dark_mode)
        return SkColorSetA(ResolveColor(ColorName::kGoogleBlue400, is_dark_mode), 0x4C);
      return SkColorSetA(ResolveColor(ColorName::kGoogleBlue500, is_dark_mode), 0x4C);
    case ColorName::kButtonBackgroundColorPrimaryDisabled:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleGrey800, is_dark_mode);
      return ResolveColor(ColorName::kGoogleGrey100, is_dark_mode);
    case ColorName::kButtonLabelColorPrimaryDisabled:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleGrey500, is_dark_mode);
      return ResolveColor(ColorName::kGoogleGrey600, is_dark_mode);
    case ColorName::kButtonLabelColorSecondary:
      return ResolveColor(ColorName::kColorProminent, is_dark_mode);
    case ColorName::kButtonStrokeColorSecondary:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleGrey700, is_dark_mode);
      return ResolveColor(ColorName::kGoogleGrey300, is_dark_mode);
    case ColorName::kButtonRippleColorSecondary:
      return ResolveColor(ColorName::kColorProminent, is_dark_mode);
    case ColorName::kButtonStrokeColorSecondaryHover:
      if (is_dark_mode)
        return SkColorSetA(ResolveColor(ColorName::kGoogleBlue300, is_dark_mode), 0x51);
      return ResolveColor(ColorName::kGoogleBlue100, is_dark_mode);
    case ColorName::kButtonBackgroundColorSecondaryHover:
      if (is_dark_mode)
        return SkColorSetA(ResolveColor(ColorName::kGoogleBlue300, is_dark_mode), 0x14);
      return SkColorSetA(ResolveColor(ColorName::kGoogleBlue500, is_dark_mode), 0xA);
    case ColorName::kButtonActiveShadowColorAmbientSecondary:
      if (is_dark_mode)
        return SkColorSetA(ResolveColor(ColorName::kGoogleGrey600, is_dark_mode), 0x26);
      return SkColorSetA(ResolveColor(ColorName::kGoogleGrey500, is_dark_mode), 0x26);
    case ColorName::kButtonActiveShadowColorKeySecondary:
      if (is_dark_mode)
        return SkColorSetA(ResolveColor(ColorName::kGoogleGrey600, is_dark_mode), 0x4C);
      return SkColorSetA(ResolveColor(ColorName::kGoogleGrey500, is_dark_mode), 0x4C);
    case ColorName::kButtonLabelColorSecondaryDisabled:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleGrey500, is_dark_mode);
      return ResolveColor(ColorName::kGoogleGrey600, is_dark_mode);
    case ColorName::kButtonStrokeColorSecondaryDisabled:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleGrey800, is_dark_mode);
      return ResolveColor(ColorName::kGoogleGrey100, is_dark_mode);
    case ColorName::kButtonIconColorPrimary:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleGrey900, is_dark_mode);
      return SkColorSetRGB(0xFF, 0xFF, 0xFF);
    case ColorName::kButtonIconColorPrimaryDisabled:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleGrey500, is_dark_mode);
      return ResolveColor(ColorName::kGoogleGrey600, is_dark_mode);
    case ColorName::kButtonIconColorSecondary:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleBlue300, is_dark_mode);
      return ResolveColor(ColorName::kGoogleBlue600, is_dark_mode);
    case ColorName::kButtonIconColorSecondaryDisabled:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleGrey900, is_dark_mode);
      return ResolveColor(ColorName::kGoogleGrey200, is_dark_mode);
    case ColorName::kIconButtonBackgroundColor:
      if (is_dark_mode)
        return SkColorSetARGB(0xD4, 0x30, 0x34, 0x36);
      return SkColorSetARGB(0xDC, 0xF1, 0xF2, 0xF4);
    case ColorName::kIconButtonPressedColor:
      if (is_dark_mode)
        return SkColorSetARGB(0x27, 0xFF, 0xFF, 0xFF);
      return SkColorSetARGB(0x1D, 0x0, 0x0, 0x0);
    case ColorName::kMenuLabelColor:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleGrey200, is_dark_mode);
      return ResolveColor(ColorName::kGoogleGrey900, is_dark_mode);
    case ColorName::kMenuIconColor:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleGrey200, is_dark_mode);
      return ResolveColor(ColorName::kGoogleGrey900, is_dark_mode);
    case ColorName::kMenuShortcutColor:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleGrey500, is_dark_mode);
      return ResolveColor(ColorName::kGoogleGrey700, is_dark_mode);
    case ColorName::kMenuItemBackgroundHover:
      return ResolveColor(ColorName::kRippleColor, is_dark_mode);
    case ColorName::kNudgeLabelColor:
      return ResolveColor(ColorName::kButtonLabelColorPrimary, is_dark_mode);
    case ColorName::kNudgeIconColor:
      return ResolveColor(ColorName::kButtonIconColorPrimary, is_dark_mode);
    case ColorName::kNudgeBackgroundColor:
      return ResolveColor(ColorName::kColorProminent, is_dark_mode);
    case ColorName::kAppScrollbarColorHover:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleGrey400, is_dark_mode);
      return ResolveColor(ColorName::kGoogleGrey600, is_dark_mode);
    case ColorName::kAppScrollbarColor:
      return SkColorSetA(ResolveColor(ColorName::kAppScrollbarColorHover, is_dark_mode), GetOpacity(OpacityName::kDisabledOpacity, is_dark_mode));
    case ColorName::kSliderColorActive:
      return ResolveColor(ColorName::kColorProminent, is_dark_mode);
    case ColorName::kSliderColorInactive:
      return ResolveColor(ColorName::kColorSecondary, is_dark_mode);
    case ColorName::kSliderLabelBackgroundColor:
      return ResolveColor(ColorName::kColorProminent, is_dark_mode);
    case ColorName::kSliderLabelTextColor:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleGrey900, is_dark_mode);
      return SkColorSetRGB(0xFF, 0xFF, 0xFF);
    case ColorName::kSliderTrackColorActive:
      return SkColorSetA(ResolveColor(ColorName::kSliderColorActive, is_dark_mode), GetOpacity(OpacityName::kSecondToneOpacity, is_dark_mode));
    case ColorName::kSliderTrackColorInactive:
      return SkColorSetA(ResolveColor(ColorName::kSliderColorInactive, is_dark_mode), GetOpacity(OpacityName::kSecondToneOpacity, is_dark_mode));
    case ColorName::kSwitchKnobColorActive:
      return ResolveColor(ColorName::kColorProminent, is_dark_mode);
    case ColorName::kSwitchKnobColorInactive:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleGrey400, is_dark_mode);
      return SkColorSetRGB(0xFF, 0xFF, 0xFF);
    case ColorName::kSwitchTrackColorActive:
      return ResolveColor(ColorName::kSliderTrackColorActive, is_dark_mode);
    case ColorName::kSwitchTrackColorInactive:
      return ResolveColor(ColorName::kSliderTrackColorInactive, is_dark_mode);
    case ColorName::kTabLabelColorActive:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleBlue300, is_dark_mode);
      return ResolveColor(ColorName::kGoogleBlue600, is_dark_mode);
    case ColorName::kTabLabelColorInactive:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleGrey500, is_dark_mode);
      return ResolveColor(ColorName::kGoogleGrey600, is_dark_mode);
    case ColorName::kTabIconColorActive:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleBlue300, is_dark_mode);
      return ResolveColor(ColorName::kGoogleBlue600, is_dark_mode);
    case ColorName::kTabIconColorInactive:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleGrey500, is_dark_mode);
      return ResolveColor(ColorName::kGoogleGrey600, is_dark_mode);
    case ColorName::kTabSliderTrackColor:
      if (is_dark_mode)
        return SkColorSetARGB(0x19, 0xFF, 0xFF, 0xFF);
      return SkColorSetARGB(0xF, 0x0, 0x0, 0x0);
    case ColorName::kTextfieldBackgroundColor:
      if (is_dark_mode)
        return SkColorSetARGB(0x4C, 0x0, 0x0, 0x0);
      return ResolveColor(ColorName::kGoogleGrey100, is_dark_mode);
    case ColorName::kTextfieldLabelColor:
      if (is_dark_mode)
        return SkColorSetARGB(0x99, 0xFF, 0xFF, 0xFF);
      return ResolveColor(ColorName::kGoogleGrey700, is_dark_mode);
    case ColorName::kTextfieldInputColor:
      return ResolveColor(ColorName::kColorPrimary, is_dark_mode);
    case ColorName::kTextfieldCursorColorFocus:
      return ResolveColor(ColorName::kColorProminent, is_dark_mode);
    case ColorName::kTextfieldLabelColorFocus:
      return ResolveColor(ColorName::kColorProminent, is_dark_mode);
    case ColorName::kTextfieldLabelColorError:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleRed300, is_dark_mode);
      return ResolveColor(ColorName::kGoogleRed600, is_dark_mode);
    case ColorName::kTextfieldUnderlineColorError:
      return ResolveColor(ColorName::kColorAlert, is_dark_mode);
    case ColorName::kTextfieldCursorColorError:
      return ResolveColor(ColorName::kColorAlert, is_dark_mode);
    case ColorName::kTextfieldBackgroundColorDisabled:
      if (is_dark_mode)
        return SkColorSetARGB(0x1C, 0x0, 0x0, 0x0);
      return SkColorSetA(ResolveColor(ColorName::kGoogleGrey100, is_dark_mode), 0x60);
    case ColorName::kTextfieldLabelColorDisabled:
      if (is_dark_mode)
        return SkColorSetARGB(0x3A, 0x0, 0x0, 0x0);
      return SkColorSetA(ResolveColor(ColorName::kGoogleGrey700, is_dark_mode), 0x60);
    case ColorName::kTextfieldInputColorDisabled:
      if (is_dark_mode)
        return SkColorSetARGB(0x54, 0xFF, 0xFF, 0xFF);
      return SkColorSetA(ResolveColor(ColorName::kGoogleGrey900, is_dark_mode), 0x60);
    case ColorName::kTooltipBackgroundColor:
      if (is_dark_mode)
        return SkColorSetARGB(0xCC, 0xFF, 0xFF, 0xFF);
      return SkColorSetA(ResolveColor(ColorName::kGoogleGrey900, is_dark_mode), 0xCC);
    case ColorName::kTooltipIconColor:
      return ResolveColor(ColorName::kColorPrimaryInverted, is_dark_mode);
    case ColorName::kTooltipLabelColor:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleGrey900, is_dark_mode);
      return ResolveColor(ColorName::kGoogleGrey100, is_dark_mode);
    case ColorName::kTooltipLinkColor:
      return ResolveColor(ColorName::kColorProminentInverted, is_dark_mode);
    case ColorName::kShortcutBackgroundColor:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleGrey900, is_dark_mode);
      return ResolveColor(ColorName::kGoogleGrey200, is_dark_mode);
    case ColorName::kShortcutBackgroundGradientColor:
      if (is_dark_mode)
        return SkColorSetARGB(0x1E, 0xFF, 0xFF, 0xFF);
      return SkColorSetARGB(0x0, 0xFF, 0xFF, 0xFF);
    case ColorName::kDialogTitleBackgroundColor:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleGrey900, is_dark_mode);
      return ResolveColor(ColorName::kGoogleGrey100, is_dark_mode);
    case ColorName::kDialogTitleBarColorLight:
      return SkColorSetRGB(0xDF, 0xE0, 0xE1);
    case ColorName::kDialogTitleBarColorDark:
      return SkColorSetRGB(0x4D, 0x4D, 0x50);
    case ColorName::kDialogTitleBarColor:
      if (is_dark_mode)
        return ResolveColor(ColorName::kDialogTitleBarColorDark, is_dark_mode);
      return ResolveColor(ColorName::kDialogTitleBarColorLight, is_dark_mode);
    case ColorName::kToastBackgroundColor:
      return ResolveColor(ColorName::kBgColorElevation2Inverted, is_dark_mode);
    case ColorName::kToastButtonColor:
      return ResolveColor(ColorName::kColorProminentInverted, is_dark_mode);
    case ColorName::kToastTextColor:
      return ResolveColor(ColorName::kColorPrimaryInverted, is_dark_mode);
    case ColorName::kToastIconColor:
      return ResolveColor(ColorName::kColorPrimaryInverted, is_dark_mode);
    case ColorName::kToastIconColorWarning:
      return ResolveColor(ColorName::kColorWarningInverted, is_dark_mode);
    case ColorName::kToastIconColorError:
      return ResolveColor(ColorName::kColorAlertInverted, is_dark_mode);
    case ColorName::kSelectionOutline:
      if (is_dark_mode)
        return SkColorSetARGB(0x1E, 0xFF, 0xFF, 0xFF);
      return SkColorSetARGB(0x19, 0x0, 0x0, 0x0);
    case ColorName::kSwatchBorder:
      if (is_dark_mode)
        return SkColorSetARGB(0x60, 0xFF, 0xFF, 0xFF);
      return SkColorSetA(ResolveColor(ColorName::kGoogleGrey900, is_dark_mode), 0x7F);
    case ColorName::kIllustrationColor1:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleBlue400, is_dark_mode);
      return ResolveColor(ColorName::kGoogleBlue500, is_dark_mode);
    case ColorName::kIllustrationColor2:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleGreen400, is_dark_mode);
      return ResolveColor(ColorName::kGoogleGreen500, is_dark_mode);
    case ColorName::kIllustrationColor3:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleYellow400, is_dark_mode);
      return ResolveColor(ColorName::kGoogleYellow500, is_dark_mode);
    case ColorName::kIllustrationColor4:
      return ResolveColor(ColorName::kGoogleRed500, is_dark_mode);
    case ColorName::kIllustrationColor5:
      if (is_dark_mode)
        return SkColorSetRGB(0xF8, 0x82, 0xFF);
      return SkColorSetRGB(0xEE, 0x5F, 0xFA);
    case ColorName::kIllustrationColor6:
      if (is_dark_mode)
        return SkColorSetRGB(0x5E, 0xF1, 0xF2);
      return SkColorSetRGB(0x30, 0xE2, 0xEA);
    case ColorName::kIllustrationBaseColor:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleGrey900, is_dark_mode);
      return SkColorSetRGB(0xFF, 0xFF, 0xFF);
    case ColorName::kIllustrationSecondaryColor:
      if (is_dark_mode)
        return SkColorSetRGB(0x5C, 0x5D, 0x60);
      return ResolveColor(ColorName::kGoogleGrey200, is_dark_mode);
    case ColorName::kIllustrationColor1Shade1:
      if (is_dark_mode)
        return SkColorSetRGB(0x1E, 0x3A, 0x5F);
      return ResolveColor(ColorName::kGoogleBlue300, is_dark_mode);
    case ColorName::kIllustrationColor1Shade2:
      if (is_dark_mode)
        return SkColorSetRGB(0x40, 0x4D, 0x64);
      return ResolveColor(ColorName::kGoogleBlue100, is_dark_mode);
    case ColorName::kIllustrationElevationColor1Shade1:
      if (is_dark_mode)
        return SkColorSetRGB(0x28, 0x4D, 0x7D);
      return ResolveColor(ColorName::kIllustrationColor1Shade1, is_dark_mode);
    case ColorName::kIllustrationElevationColor1Shade2:
      if (is_dark_mode)
        return SkColorSetRGB(0x55, 0x67, 0x84);
      return ResolveColor(ColorName::kIllustrationColor1Shade2, is_dark_mode);
    case ColorName::kIllustrationElevationBaseColor:
      if (is_dark_mode)
        return SkColorSetRGB(0x32, 0x33, 0x36);
      return ResolveColor(ColorName::kIllustrationBaseColor, is_dark_mode);
    case ColorName::kIllustrationElevationSecondaryColor:
      if (is_dark_mode)
        return ResolveColor(ColorName::kGoogleGrey700, is_dark_mode);
      return ResolveColor(ColorName::kIllustrationSecondaryColor, is_dark_mode);
    case ColorName::kColorPreviewRed:
      return ResolveColor(ColorName::kGoogleRed600, is_dark_mode);
    case ColorName::kColorPreviewOrange:
      return ResolveColor(ColorName::kGoogleOrange600, is_dark_mode);
    case ColorName::kColorPreviewYellow:
      return ResolveColor(ColorName::kGoogleYellow600, is_dark_mode);
    case ColorName::kColorPreviewGreen:
      return ResolveColor(ColorName::kGoogleGreen600, is_dark_mode);
    case ColorName::kColorPreviewCyan:
      return ResolveColor(ColorName::kGoogleCyan600, is_dark_mode);
    case ColorName::kColorPreviewBlue:
      return ResolveColor(ColorName::kGoogleBlue600, is_dark_mode);
    case ColorName::kColorPreviewPurple:
      return ResolveColor(ColorName::kGooglePurple600, is_dark_mode);
    case ColorName::kColorPreviewGrey:
      return ResolveColor(ColorName::kGoogleGrey600, is_dark_mode);
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
  }
}

}  // namespace cros_styles
