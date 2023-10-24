// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is generated from:
//   ../../../../../../../home/chrome-bot/chrome_root/src/ui/chromeos/styles/cros_colors.json5
//   ../../../../../../../home/chrome-bot/chrome_root/src/ui/chromeos/styles/cros_palette.json5
//   ../../../../../../../home/chrome-bot/chrome_root/src/ui/chromeos/styles/cros_ref_colors.json5
//   ../../../../../../../home/chrome-bot/chrome_root/src/ui/chromeos/styles/cros_sys_colors.json5

#include "ui/chromeos/styles/cros_tokens_color_mappings.h"

#include "third_party/skia/include/core/SkColor.h"
#include "ui/color/color_mixer.h"
#include "ui/color/color_recipe.h"

namespace cros_tokens {


void AddLegacySemanticColorsToMixer(ui::ColorMixer& mixer, bool dark_mode) {
  mixer[kColorPrimaryLight] = {kGoogleGrey900};
  mixer[kColorPrimaryDark] = {kGoogleGrey200};
  if (dark_mode) {
    mixer[kColorPrimaryInverted] = {kColorPrimaryLight};
  } else {
    mixer[kColorPrimaryInverted] = {kColorPrimaryDark};
  }
  if (dark_mode) {
    mixer[kColorPrimary] = {kColorPrimaryDark};
  } else {
    mixer[kColorPrimary] = {kColorPrimaryLight};
  }
  mixer[kColorSecondaryLight] = {kGoogleGrey700};
  mixer[kColorSecondaryDark] = {kGoogleGrey400};
  if (dark_mode) {
    mixer[kColorSecondary] = {kColorSecondaryDark};
  } else {
    mixer[kColorSecondary] = {kColorSecondaryLight};
  }
  mixer[kColorDisabledLight] = {kGoogleGrey600};
  mixer[kColorDisabledDark] = {kGoogleGrey500};
  if (dark_mode) {
    mixer[kColorDisabled] = {kColorDisabledDark};
  } else {
    mixer[kColorDisabled] = {kColorDisabledLight};
  }
  mixer[kColorProminentLight] = {kGoogleBlue600};
  mixer[kColorProminentDark] = {kGoogleBlue300};
  mixer[kColorProminentDebug] = {kGoogleRed600};
  if (dark_mode) {
    mixer[kColorProminentInverted] = {kColorProminentLight};
  } else {
    mixer[kColorProminentInverted] = {kColorProminentDark};
  }
  if (dark_mode) {
    mixer[kColorProminent] = {kColorProminentDark};
  } else {
    mixer[kColorProminent] = {kColorProminentLight};
  }
  mixer[kColorAlertLight] = {kGoogleRed600};
  mixer[kColorAlertDark] = {kGoogleRed300};
  if (dark_mode) {
    mixer[kColorAlertInverted] = {kColorAlertLight};
  } else {
    mixer[kColorAlertInverted] = {kColorAlertDark};
  }
  if (dark_mode) {
    mixer[kColorAlert] = {kColorAlertDark};
  } else {
    mixer[kColorAlert] = {kColorAlertLight};
  }
  mixer[kColorWarningLight] = {kGoogleYellow900};
  mixer[kColorWarningDark] = {kGoogleYellow300};
  if (dark_mode) {
    mixer[kColorWarningInverted] = {kColorWarningLight};
  } else {
    mixer[kColorWarningInverted] = {kColorWarningDark};
  }
  if (dark_mode) {
    mixer[kColorWarning] = {kColorWarningDark};
  } else {
    mixer[kColorWarning] = {kColorWarningLight};
  }
  if (dark_mode) {
    mixer[kColorPositive] = {kGoogleGreen300};
  } else {
    mixer[kColorPositive] = {kGoogleGreen700};
  }
  mixer[kColorSelectionLight] = {kGoogleBlue700};
  mixer[kColorSelectionDark] = {kGoogleBlue200};
  mixer[kColorSelectionDebug] = {kGoogleRed700};
  if (dark_mode) {
    mixer[kColorSelection] = {kColorSelectionDark};
  } else {
    mixer[kColorSelection] = {kColorSelectionLight};
  }
  mixer[kBgColorLight] = {SkColorSetRGB(0xFF, 0xFF, 0xFF)};
  mixer[kBgColorDark] = {kGoogleGrey900};
  if (dark_mode) {
    mixer[kBgColor] = {kBgColorDark};
  } else {
    mixer[kBgColor] = {kBgColorLight};
  }
  if (dark_mode) {
    mixer[kBgColorElevation1] = {SkColorSetRGB(0x29, 0x2A, 0x2D)};
  } else {
    mixer[kBgColorElevation1] = {SkColorSetRGB(0xFF, 0xFF, 0xFF)};
  }
  mixer[kBgColorElevation2Light] = {SkColorSetRGB(0xFF, 0xFF, 0xFF)};
  mixer[kBgColorElevation2Dark] = {SkColorSetRGB(0x2D, 0x2E, 0x31)};
  if (dark_mode) {
    mixer[kBgColorElevation2Inverted] = {kBgColorElevation2Light};
  } else {
    mixer[kBgColorElevation2Inverted] = {kBgColorElevation2Dark};
  }
  if (dark_mode) {
    mixer[kBgColorElevation2] = {kBgColorElevation2Dark};
  } else {
    mixer[kBgColorElevation2] = {kBgColorElevation2Light};
  }
  if (dark_mode) {
    mixer[kBgColorElevation3] = {SkColorSetRGB(0x32, 0x33, 0x36)};
  } else {
    mixer[kBgColorElevation3] = {SkColorSetRGB(0xFF, 0xFF, 0xFF)};
  }
  if (dark_mode) {
    mixer[kBgColorElevation4] = {SkColorSetRGB(0x36, 0x37, 0x3A)};
  } else {
    mixer[kBgColorElevation4] = {SkColorSetRGB(0xFF, 0xFF, 0xFF)};
  }
  if (dark_mode) {
    mixer[kBgColorElevation5] = {SkColorSetRGB(0x3B, 0x3C, 0x3E)};
  } else {
    mixer[kBgColorElevation5] = {SkColorSetRGB(0xFF, 0xFF, 0xFF)};
  }
  if (dark_mode) {
    mixer[kBgColorDroppedElevation1] = {SkColorSetRGB(0x1A, 0x1A, 0x1D)};
  } else {
    mixer[kBgColorDroppedElevation1] = {kGoogleGrey50};
  }
  if (dark_mode) {
    mixer[kBgColorDroppedElevation2] = {SkColorSetRGB(0x0, 0x0, 0x0)};
  } else {
    mixer[kBgColorDroppedElevation2] = {kGoogleGrey200};
  }
  mixer[kTextColorPrimaryLight] = {kColorPrimaryLight};
  mixer[kTextColorPrimaryDark] = {kColorPrimaryDark};
  mixer[kTextColorPrimaryDebug] = {kGoogleGreen400};
  if (dark_mode) {
    mixer[kTextColorPrimaryInverted] = {kTextColorPrimaryLight};
  } else {
    mixer[kTextColorPrimaryInverted] = {kTextColorPrimaryDark};
  }
  if (dark_mode) {
    mixer[kTextColorPrimary] = {kTextColorPrimaryDark};
  } else {
    mixer[kTextColorPrimary] = {kTextColorPrimaryLight};
  }
  mixer[kTextColorSecondaryLight] = {kColorSecondaryLight};
  mixer[kTextColorSecondaryDark] = {kColorSecondaryDark};
  mixer[kTextColorSecondaryDebug] = {kGoogleGreen400};
  if (dark_mode) {
    mixer[kTextColorSecondary] = {kTextColorSecondaryDark};
  } else {
    mixer[kTextColorSecondary] = {kTextColorSecondaryLight};
  }
  mixer[kTextColorDisabled] = {kColorDisabled};
  mixer[kTextColorProminent] = {kColorProminent};
  mixer[kTextColorSelection] = {kColorSelection};
  mixer[kTextColorPositive] = {kColorPositive};
  mixer[kTextColorWarning] = {kColorWarning};
  mixer[kTextColorAlert] = {kColorAlert};
  if (dark_mode) {
    mixer[kTextHighlightColor] = ui::SetAlpha({kGoogleBlue400}, 0x4C);
  } else {
    mixer[kTextHighlightColor] = ui::SetAlpha({kGoogleBlue600}, 0x4C);
  }
  mixer[kIconColorPrimaryLight] = {kColorPrimaryLight};
  mixer[kIconColorPrimaryDark] = {kColorPrimaryDark};
  mixer[kIconColorPrimaryDebug] = {SkColorSetRGB(0xFF, 0x0, 0xFF)};
  if (dark_mode) {
    mixer[kIconColorPrimaryInverted] = {kIconColorPrimaryLight};
  } else {
    mixer[kIconColorPrimaryInverted] = {kIconColorPrimaryDark};
  }
  if (dark_mode) {
    mixer[kIconColorPrimary] = {kIconColorPrimaryDark};
  } else {
    mixer[kIconColorPrimary] = {kIconColorPrimaryLight};
  }
  mixer[kIconColorSecondaryLight] = {kColorSecondaryLight};
  mixer[kIconColorSecondaryDark] = {kColorSecondaryDark};
  mixer[kIconColorSecondaryDebug] = {SkColorSetRGB(0x0, 0xFF, 0xFF)};
  if (dark_mode) {
    mixer[kIconColorSecondary] = {kIconColorSecondaryDark};
  } else {
    mixer[kIconColorSecondary] = {kIconColorSecondaryLight};
  }
  mixer[kIconColorDisabled] = {kColorDisabled};
  mixer[kIconColorProminent] = {kColorProminent};
  mixer[kIconColorSelection] = {kColorSelection};
  mixer[kIconColorPositive] = {kColorPositive};
  mixer[kIconColorWarning] = {kColorWarning};
  mixer[kIconColorAlert] = {kColorAlert};
  if (dark_mode) {
    mixer[kIconColorRed] = {kGoogleRed300};
  } else {
    mixer[kIconColorRed] = {kGoogleRed600};
  }
  if (dark_mode) {
    mixer[kIconColorBlue] = {kGoogleBlue300};
  } else {
    mixer[kIconColorBlue] = {kGoogleBlue600};
  }
  if (dark_mode) {
    mixer[kIconColorGreen] = {kGoogleGreen300};
  } else {
    mixer[kIconColorGreen] = {kGoogleGreen600};
  }
  if (dark_mode) {
    mixer[kIconColorYellow] = {kGoogleYellow300};
  } else {
    mixer[kIconColorYellow] = {kGoogleYellow600};
  }
  if (dark_mode) {
    mixer[kAppShieldColor] = {SkColorSetRGB(0x0, 0x0, 0x0)};
  } else {
    mixer[kAppShieldColor] = ui::SetAlpha({kGoogleGrey300}, 0xFF);
  }
  if (dark_mode) {
    mixer[kAppShield80] = {SkColorSetARGB(0xCC, 0x0, 0x0, 0x0)};
  } else {
    mixer[kAppShield80] = ui::SetAlpha({kGoogleGrey300}, 0xCC);
  }
  if (dark_mode) {
    mixer[kAppShield60] = {SkColorSetARGB(0x99, 0x0, 0x0, 0x0)};
  } else {
    mixer[kAppShield60] = ui::SetAlpha({kGoogleGrey300}, 0x99);
  }
  mixer[kAppShield40Light] = ui::SetAlpha({kGoogleGrey300}, 0x66);
  mixer[kAppShield40Dark] = {SkColorSetARGB(0x66, 0x0, 0x0, 0x0)};
  if (dark_mode) {
    mixer[kAppShield40] = {kAppShield40Dark};
  } else {
    mixer[kAppShield40] = {kAppShield40Light};
  }
  if (dark_mode) {
    mixer[kAppShield20] = {SkColorSetARGB(0x33, 0x0, 0x0, 0x0)};
  } else {
    mixer[kAppShield20] = ui::SetAlpha({kGoogleGrey300}, 0x33);
  }
  mixer[kFocusRingColorLight] = {kColorProminentLight};
  mixer[kFocusRingColorDark] = {kColorProminentDark};
  if (dark_mode) {
    mixer[kFocusRingColor] = {kFocusRingColorDark};
  } else {
    mixer[kFocusRingColor] = {kFocusRingColorLight};
  }
  mixer[kFocusRingColorInactive] = {kIconColorSecondary};
  mixer[kFocusAuraColor] = ui::SetAlpha({kColorProminent}, 0x3D);
  if (dark_mode) {
    mixer[kSeparatorColor] = {SkColorSetARGB(0x23, 0xFF, 0xFF, 0xFF)};
  } else {
    mixer[kSeparatorColor] = {SkColorSetARGB(0x23, 0x0, 0x0, 0x0)};
  }
  if (dark_mode) {
    mixer[kShadowColorKey] = {SkColorSetARGB(0x4C, 0x0, 0x0, 0x0)};
  } else {
    mixer[kShadowColorKey] = ui::SetAlpha({kGoogleGrey800}, 0x4C);
  }
  if (dark_mode) {
    mixer[kShadowColorAmbient] = {SkColorSetARGB(0x26, 0x0, 0x0, 0x0)};
  } else {
    mixer[kShadowColorAmbient] = ui::SetAlpha({kGoogleGrey800}, 0x26);
  }
  mixer[kLinkColor] = {kColorProminent};
  if (dark_mode) {
    mixer[kHighlightColor] = ui::SetAlpha({kGoogleBlue300}, 0x4C);
  } else {
    mixer[kHighlightColor] = {kGoogleBlue50};
  }
  if (dark_mode) {
    mixer[kHighlightColorError] = ui::SetAlpha({kColorAlert}, 0x4C);
  } else {
    mixer[kHighlightColorError] = {kGoogleRed50};
  }
  mixer[kHighlightColorHoverLight] = ui::SetAlpha({kGoogleGrey700}, 0x33);
  mixer[kHighlightColorHoverDark] = {SkColorSetARGB(0x33, 0xFF, 0xFF, 0xFF)};
  if (dark_mode) {
    mixer[kHighlightColorHover] = {kHighlightColorHoverDark};
  } else {
    mixer[kHighlightColorHover] = {kHighlightColorHoverLight};
  }
  if (dark_mode) {
    mixer[kHighlightColorFocus] = {SkColorSetARGB(0x14, 0xFF, 0xFF, 0xFF)};
  } else {
    mixer[kHighlightColorFocus] = {SkColorSetARGB(0xF, 0x0, 0x0, 0x0)};
  }
  if (dark_mode) {
    mixer[kHighlightColorGreen] = ui::SetAlpha({kGoogleGreen300}, 0x4C);
  } else {
    mixer[kHighlightColorGreen] = ui::SetAlpha({kGoogleGreen50}, 0xFF);
  }
  if (dark_mode) {
    mixer[kHighlightColorRed] = ui::SetAlpha({kGoogleRed600}, 0x4C);
  } else {
    mixer[kHighlightColorRed] = ui::SetAlpha({kGoogleRed50}, 0xFF);
  }
  if (dark_mode) {
    mixer[kHighlightColorYellow] = ui::SetAlpha({kGoogleYellow600}, 0x4C);
  } else {
    mixer[kHighlightColorYellow] = ui::SetAlpha({kGoogleYellow50}, 0xFF);
  }
  mixer[kRippleColorLight] = {SkColorSetARGB(0xF, 0x0, 0x0, 0x0)};
  mixer[kRippleColorDark] = {SkColorSetARGB(0xF, 0xFF, 0xFF, 0xFF)};
  if (dark_mode) {
    mixer[kRippleColor] = {kRippleColorDark};
  } else {
    mixer[kRippleColor] = {kRippleColorLight};
  }
  if (dark_mode) {
    mixer[kRippleColorProminent] = ui::SetAlpha({kColorProminent}, 0x14);
  } else {
    mixer[kRippleColorProminent] = ui::SetAlpha({kColorProminent}, 0xF);
  }
  if (dark_mode) {
    mixer[kToolbarSearchBgColor] = {SkColorSetARGB(0x19, 0xFF, 0xFF, 0xFF)};
  } else {
    mixer[kToolbarSearchBgColor] = {kGoogleGrey100};
  }
  mixer[kMenuItemBgColorFocus] = {kHighlightColorFocus};
  mixer[kMenuItemRippleColor] = {kRippleColor};
  mixer[kRadioButtonColor] = {kColorProminent};
  mixer[kRadioButtonRippleColor] = ui::SetAlpha({kRadioButtonColor}, 0x33);
  mixer[kRadioButtonColorUnchecked] = {kGoogleGrey700};
  mixer[kRadioButtonRippleColorUnchecked] = ui::SetAlpha({kGoogleGrey600}, 0x26);
  mixer[kButtonBackgroundColorPrimary] = {kColorProminent};
  if (dark_mode) {
    mixer[kButtonLabelColorPrimary] = {kGoogleGrey900};
  } else {
    mixer[kButtonLabelColorPrimary] = {SkColorSetRGB(0xFF, 0xFF, 0xFF)};
  }
  if (dark_mode) {
    mixer[kButtonRippleColorPrimary] = {SkColorSetRGB(0x0, 0x0, 0x0)};
  } else {
    mixer[kButtonRippleColorPrimary] = {SkColorSetRGB(0xFF, 0xFF, 0xFF)};
  }
  mixer[kButtonBackgroundColorPrimaryHover] = {SkColorSetARGB(0x14, 0x0, 0x0, 0x0)};
  if (dark_mode) {
    mixer[kButtonBackgroundColorPrimaryHoverPreblended] = {SkColorSetRGB(0x7F, 0xA6, 0xE4)};
  } else {
    mixer[kButtonBackgroundColorPrimaryHoverPreblended] = {SkColorSetRGB(0x18, 0x6A, 0xD5)};
  }
  if (dark_mode) {
    mixer[kButtonActiveShadowColorAmbientPrimary] = ui::SetAlpha({kGoogleBlue400}, 0x26);
  } else {
    mixer[kButtonActiveShadowColorAmbientPrimary] = ui::SetAlpha({kGoogleBlue500}, 0x26);
  }
  if (dark_mode) {
    mixer[kButtonActiveShadowColorKeyPrimary] = ui::SetAlpha({kGoogleBlue400}, 0x4C);
  } else {
    mixer[kButtonActiveShadowColorKeyPrimary] = ui::SetAlpha({kGoogleBlue500}, 0x4C);
  }
  if (dark_mode) {
    mixer[kButtonBackgroundColorPrimaryDisabled] = {kGoogleGrey800};
  } else {
    mixer[kButtonBackgroundColorPrimaryDisabled] = {kGoogleGrey100};
  }
  if (dark_mode) {
    mixer[kButtonLabelColorPrimaryDisabled] = {kGoogleGrey500};
  } else {
    mixer[kButtonLabelColorPrimaryDisabled] = {kGoogleGrey600};
  }
  mixer[kButtonLabelColorSecondary] = {kColorProminent};
  if (dark_mode) {
    mixer[kButtonStrokeColorSecondary] = {kGoogleGrey700};
  } else {
    mixer[kButtonStrokeColorSecondary] = {kGoogleGrey300};
  }
  mixer[kButtonRippleColorSecondary] = {kColorProminent};
  if (dark_mode) {
    mixer[kButtonStrokeColorSecondaryHover] = ui::SetAlpha({kGoogleBlue300}, 0x51);
  } else {
    mixer[kButtonStrokeColorSecondaryHover] = {kGoogleBlue100};
  }
  if (dark_mode) {
    mixer[kButtonBackgroundColorSecondaryHover] = ui::SetAlpha({kGoogleBlue300}, 0x14);
  } else {
    mixer[kButtonBackgroundColorSecondaryHover] = ui::SetAlpha({kGoogleBlue500}, 0xA);
  }
  if (dark_mode) {
    mixer[kButtonActiveShadowColorAmbientSecondary] = ui::SetAlpha({kGoogleGrey600}, 0x26);
  } else {
    mixer[kButtonActiveShadowColorAmbientSecondary] = ui::SetAlpha({kGoogleGrey500}, 0x26);
  }
  if (dark_mode) {
    mixer[kButtonActiveShadowColorKeySecondary] = ui::SetAlpha({kGoogleGrey600}, 0x4C);
  } else {
    mixer[kButtonActiveShadowColorKeySecondary] = ui::SetAlpha({kGoogleGrey500}, 0x4C);
  }
  if (dark_mode) {
    mixer[kButtonLabelColorSecondaryDisabled] = {kGoogleGrey500};
  } else {
    mixer[kButtonLabelColorSecondaryDisabled] = {kGoogleGrey600};
  }
  if (dark_mode) {
    mixer[kButtonStrokeColorSecondaryDisabled] = {kGoogleGrey800};
  } else {
    mixer[kButtonStrokeColorSecondaryDisabled] = {kGoogleGrey100};
  }
  if (dark_mode) {
    mixer[kButtonIconColorPrimary] = {kGoogleGrey900};
  } else {
    mixer[kButtonIconColorPrimary] = {SkColorSetRGB(0xFF, 0xFF, 0xFF)};
  }
  if (dark_mode) {
    mixer[kButtonIconColorPrimaryDisabled] = {kGoogleGrey500};
  } else {
    mixer[kButtonIconColorPrimaryDisabled] = {kGoogleGrey600};
  }
  if (dark_mode) {
    mixer[kButtonIconColorSecondary] = {kGoogleBlue300};
  } else {
    mixer[kButtonIconColorSecondary] = {kGoogleBlue600};
  }
  if (dark_mode) {
    mixer[kButtonIconColorSecondaryDisabled] = {kGoogleGrey900};
  } else {
    mixer[kButtonIconColorSecondaryDisabled] = {kGoogleGrey200};
  }
  if (dark_mode) {
    mixer[kIconButtonBackgroundColor] = {SkColorSetARGB(0xD4, 0x30, 0x34, 0x36)};
  } else {
    mixer[kIconButtonBackgroundColor] = {SkColorSetARGB(0xDC, 0xF1, 0xF2, 0xF4)};
  }
  if (dark_mode) {
    mixer[kIconButtonPressedColor] = {SkColorSetARGB(0x27, 0xFF, 0xFF, 0xFF)};
  } else {
    mixer[kIconButtonPressedColor] = {SkColorSetARGB(0x1D, 0x0, 0x0, 0x0)};
  }
  if (dark_mode) {
    mixer[kMenuLabelColor] = {kGoogleGrey200};
  } else {
    mixer[kMenuLabelColor] = {kGoogleGrey900};
  }
  if (dark_mode) {
    mixer[kMenuIconColor] = {kGoogleGrey200};
  } else {
    mixer[kMenuIconColor] = {kGoogleGrey900};
  }
  if (dark_mode) {
    mixer[kMenuShortcutColor] = {kGoogleGrey500};
  } else {
    mixer[kMenuShortcutColor] = {kGoogleGrey700};
  }
  mixer[kMenuItemBackgroundHover] = {kRippleColor};
  mixer[kNudgeLabelColor] = {kButtonLabelColorPrimary};
  mixer[kNudgeIconColor] = {kButtonIconColorPrimary};
  mixer[kNudgeBackgroundColor] = {kColorProminent};
  if (dark_mode) {
    mixer[kAppScrollbarColorHover] = {kGoogleGrey400};
  } else {
    mixer[kAppScrollbarColorHover] = {kGoogleGrey600};
  }
  mixer[kAppScrollbarColor] = ui::SetAlpha({kAppScrollbarColorHover}, 0x60);
  mixer[kSliderColorActive] = {kColorProminent};
  mixer[kSliderColorInactive] = {kColorSecondary};
  mixer[kSliderLabelBackgroundColor] = {kColorProminent};
  if (dark_mode) {
    mixer[kSliderLabelTextColor] = {kGoogleGrey900};
  } else {
    mixer[kSliderLabelTextColor] = {SkColorSetRGB(0xFF, 0xFF, 0xFF)};
  }
  mixer[kSliderTrackColorActive] = ui::SetAlpha({kSliderColorActive}, 0x4C);
  mixer[kSliderTrackColorInactive] = ui::SetAlpha({kSliderColorInactive}, 0x4C);
  mixer[kSwitchKnobColorActive] = {kColorProminent};
  if (dark_mode) {
    mixer[kSwitchKnobColorInactive] = {kGoogleGrey400};
  } else {
    mixer[kSwitchKnobColorInactive] = {SkColorSetRGB(0xFF, 0xFF, 0xFF)};
  }
  mixer[kSwitchTrackColorActive] = {kSliderTrackColorActive};
  mixer[kSwitchTrackColorInactive] = {kSliderTrackColorInactive};
  if (dark_mode) {
    mixer[kTabLabelColorActive] = {kGoogleBlue300};
  } else {
    mixer[kTabLabelColorActive] = {kGoogleBlue600};
  }
  if (dark_mode) {
    mixer[kTabLabelColorInactive] = {kGoogleGrey500};
  } else {
    mixer[kTabLabelColorInactive] = {kGoogleGrey600};
  }
  if (dark_mode) {
    mixer[kTabIconColorActive] = {kGoogleBlue300};
  } else {
    mixer[kTabIconColorActive] = {kGoogleBlue600};
  }
  if (dark_mode) {
    mixer[kTabIconColorInactive] = {kGoogleGrey500};
  } else {
    mixer[kTabIconColorInactive] = {kGoogleGrey600};
  }
  if (dark_mode) {
    mixer[kTabSliderTrackColor] = {SkColorSetARGB(0x19, 0xFF, 0xFF, 0xFF)};
  } else {
    mixer[kTabSliderTrackColor] = {SkColorSetARGB(0xF, 0x0, 0x0, 0x0)};
  }
  if (dark_mode) {
    mixer[kTextfieldBackgroundColor] = {SkColorSetARGB(0x4C, 0x0, 0x0, 0x0)};
  } else {
    mixer[kTextfieldBackgroundColor] = {kGoogleGrey100};
  }
  if (dark_mode) {
    mixer[kTextfieldLabelColor] = {SkColorSetARGB(0x99, 0xFF, 0xFF, 0xFF)};
  } else {
    mixer[kTextfieldLabelColor] = {kGoogleGrey700};
  }
  mixer[kTextfieldInputColor] = {kColorPrimary};
  mixer[kTextfieldCursorColorFocus] = {kColorProminent};
  mixer[kTextfieldLabelColorFocus] = {kColorProminent};
  if (dark_mode) {
    mixer[kTextfieldLabelColorError] = {kGoogleRed300};
  } else {
    mixer[kTextfieldLabelColorError] = {kGoogleRed600};
  }
  mixer[kTextfieldUnderlineColorError] = {kColorAlert};
  mixer[kTextfieldCursorColorError] = {kColorAlert};
  if (dark_mode) {
    mixer[kTextfieldBackgroundColorDisabled] = {SkColorSetARGB(0x1C, 0x0, 0x0, 0x0)};
  } else {
    mixer[kTextfieldBackgroundColorDisabled] = ui::SetAlpha({kGoogleGrey100}, 0x60);
  }
  if (dark_mode) {
    mixer[kTextfieldLabelColorDisabled] = {SkColorSetARGB(0x3A, 0x0, 0x0, 0x0)};
  } else {
    mixer[kTextfieldLabelColorDisabled] = ui::SetAlpha({kGoogleGrey700}, 0x60);
  }
  if (dark_mode) {
    mixer[kTextfieldInputColorDisabled] = {SkColorSetARGB(0x54, 0xFF, 0xFF, 0xFF)};
  } else {
    mixer[kTextfieldInputColorDisabled] = ui::SetAlpha({kGoogleGrey900}, 0x60);
  }
  if (dark_mode) {
    mixer[kTooltipBackgroundColor] = {SkColorSetARGB(0xCC, 0xFF, 0xFF, 0xFF)};
  } else {
    mixer[kTooltipBackgroundColor] = ui::SetAlpha({kGoogleGrey900}, 0xCC);
  }
  mixer[kTooltipIconColor] = {kColorPrimaryInverted};
  if (dark_mode) {
    mixer[kTooltipLabelColor] = {kGoogleGrey900};
  } else {
    mixer[kTooltipLabelColor] = {kGoogleGrey100};
  }
  mixer[kTooltipLinkColor] = {kColorProminentInverted};
  if (dark_mode) {
    mixer[kShortcutBackgroundColor] = {kGoogleGrey900};
  } else {
    mixer[kShortcutBackgroundColor] = {kGoogleGrey200};
  }
  if (dark_mode) {
    mixer[kShortcutBackgroundGradientColor] = {SkColorSetARGB(0x1E, 0xFF, 0xFF, 0xFF)};
  } else {
    mixer[kShortcutBackgroundGradientColor] = {SkColorSetARGB(0x0, 0xFF, 0xFF, 0xFF)};
  }
  if (dark_mode) {
    mixer[kDialogTitleBackgroundColor] = {kGoogleGrey900};
  } else {
    mixer[kDialogTitleBackgroundColor] = {kGoogleGrey100};
  }
  mixer[kDialogTitleBarColorLight] = {SkColorSetRGB(0xDF, 0xE0, 0xE1)};
  mixer[kDialogTitleBarColorDark] = {SkColorSetRGB(0x4D, 0x4D, 0x50)};
  if (dark_mode) {
    mixer[kDialogTitleBarColor] = {kDialogTitleBarColorDark};
  } else {
    mixer[kDialogTitleBarColor] = {kDialogTitleBarColorLight};
  }
  mixer[kToastBackgroundColor] = {kBgColorElevation2Inverted};
  mixer[kToastButtonColor] = {kColorProminentInverted};
  mixer[kToastTextColor] = {kColorPrimaryInverted};
  mixer[kToastIconColor] = {kColorPrimaryInverted};
  mixer[kToastIconColorWarning] = {kColorWarningInverted};
  mixer[kToastIconColorError] = {kColorAlertInverted};
  if (dark_mode) {
    mixer[kSelectionOutline] = {SkColorSetARGB(0x1E, 0xFF, 0xFF, 0xFF)};
  } else {
    mixer[kSelectionOutline] = {SkColorSetARGB(0x19, 0x0, 0x0, 0x0)};
  }
  if (dark_mode) {
    mixer[kSwatchBorder] = {SkColorSetARGB(0x60, 0xFF, 0xFF, 0xFF)};
  } else {
    mixer[kSwatchBorder] = ui::SetAlpha({kGoogleGrey900}, 0x7F);
  }
  if (dark_mode) {
    mixer[kIllustrationColor1] = {kGoogleBlue400};
  } else {
    mixer[kIllustrationColor1] = {kGoogleBlue500};
  }
  if (dark_mode) {
    mixer[kIllustrationColor2] = {kGoogleGreen400};
  } else {
    mixer[kIllustrationColor2] = {kGoogleGreen500};
  }
  if (dark_mode) {
    mixer[kIllustrationColor3] = {kGoogleYellow400};
  } else {
    mixer[kIllustrationColor3] = {kGoogleYellow500};
  }
  mixer[kIllustrationColor4] = {kGoogleRed500};
  if (dark_mode) {
    mixer[kIllustrationColor5] = {SkColorSetRGB(0xF8, 0x82, 0xFF)};
  } else {
    mixer[kIllustrationColor5] = {SkColorSetRGB(0xEE, 0x5F, 0xFA)};
  }
  if (dark_mode) {
    mixer[kIllustrationColor6] = {SkColorSetRGB(0x5E, 0xF1, 0xF2)};
  } else {
    mixer[kIllustrationColor6] = {SkColorSetRGB(0x30, 0xE2, 0xEA)};
  }
  if (dark_mode) {
    mixer[kIllustrationBaseColor] = {kGoogleGrey900};
  } else {
    mixer[kIllustrationBaseColor] = {SkColorSetRGB(0xFF, 0xFF, 0xFF)};
  }
  if (dark_mode) {
    mixer[kIllustrationSecondaryColor] = {SkColorSetRGB(0x5C, 0x5D, 0x60)};
  } else {
    mixer[kIllustrationSecondaryColor] = {kGoogleGrey200};
  }
  if (dark_mode) {
    mixer[kIllustrationColor1Shade1] = {SkColorSetRGB(0x1E, 0x3A, 0x5F)};
  } else {
    mixer[kIllustrationColor1Shade1] = {kGoogleBlue300};
  }
  if (dark_mode) {
    mixer[kIllustrationColor1Shade2] = {SkColorSetRGB(0x40, 0x4D, 0x64)};
  } else {
    mixer[kIllustrationColor1Shade2] = {kGoogleBlue100};
  }
  if (dark_mode) {
    mixer[kIllustrationElevationColor1Shade1] = {SkColorSetRGB(0x28, 0x4D, 0x7D)};
  } else {
    mixer[kIllustrationElevationColor1Shade1] = {kIllustrationColor1Shade1};
  }
  if (dark_mode) {
    mixer[kIllustrationElevationColor1Shade2] = {SkColorSetRGB(0x55, 0x67, 0x84)};
  } else {
    mixer[kIllustrationElevationColor1Shade2] = {kIllustrationColor1Shade2};
  }
  if (dark_mode) {
    mixer[kIllustrationElevationBaseColor] = {SkColorSetRGB(0x32, 0x33, 0x36)};
  } else {
    mixer[kIllustrationElevationBaseColor] = {kIllustrationBaseColor};
  }
  if (dark_mode) {
    mixer[kIllustrationElevationSecondaryColor] = {kGoogleGrey700};
  } else {
    mixer[kIllustrationElevationSecondaryColor] = {kIllustrationSecondaryColor};
  }
  mixer[kColorPreviewRed] = {kGoogleRed600};
  mixer[kColorPreviewOrange] = {kGoogleOrange600};
  mixer[kColorPreviewYellow] = {kGoogleYellow600};
  mixer[kColorPreviewGreen] = {kGoogleGreen600};
  mixer[kColorPreviewCyan] = {kGoogleCyan600};
  mixer[kColorPreviewBlue] = {kGoogleBlue600};
  mixer[kColorPreviewPurple] = {kGooglePurple600};
  mixer[kColorPreviewGrey] = {kGoogleGrey600};
  mixer[kGoogleBlue50] = {SkColorSetRGB(0xE8, 0xF0, 0xFE)};
  mixer[kGoogleBlue100] = {SkColorSetRGB(0xD2, 0xE3, 0xFC)};
  mixer[kGoogleBlue200] = {SkColorSetRGB(0xAE, 0xCB, 0xFA)};
  mixer[kGoogleBlue300] = {SkColorSetRGB(0x8A, 0xB4, 0xF8)};
  mixer[kGoogleBlue400] = {SkColorSetRGB(0x66, 0x9D, 0xF6)};
  mixer[kGoogleBlue500] = {SkColorSetRGB(0x42, 0x85, 0xF4)};
  mixer[kGoogleBlue600] = {SkColorSetRGB(0x1A, 0x73, 0xE8)};
  mixer[kGoogleBlue700] = {SkColorSetRGB(0x19, 0x67, 0xD2)};
  mixer[kGoogleBlue800] = {SkColorSetRGB(0x18, 0x5A, 0xBC)};
  mixer[kGoogleBlue900] = {SkColorSetRGB(0x17, 0x4E, 0xA6)};
  mixer[kGoogleGreen50] = {SkColorSetRGB(0xE6, 0xF4, 0xEA)};
  mixer[kGoogleGreen100] = {SkColorSetRGB(0xCE, 0xEA, 0xD6)};
  mixer[kGoogleGreen200] = {SkColorSetRGB(0xA8, 0xDA, 0xB5)};
  mixer[kGoogleGreen300] = {SkColorSetRGB(0x81, 0xC9, 0x95)};
  mixer[kGoogleGreen400] = {SkColorSetRGB(0x5B, 0xB9, 0x74)};
  mixer[kGoogleGreen500] = {SkColorSetRGB(0x34, 0xA8, 0x53)};
  mixer[kGoogleGreen600] = {SkColorSetRGB(0x1E, 0x8E, 0x3E)};
  mixer[kGoogleGreen700] = {SkColorSetRGB(0x18, 0x80, 0x38)};
  mixer[kGoogleGreen800] = {SkColorSetRGB(0x13, 0x73, 0x33)};
  mixer[kGoogleGreen900] = {SkColorSetRGB(0xD, 0x65, 0x2D)};
  mixer[kGoogleGrey50] = {SkColorSetRGB(0xF8, 0xF9, 0xFA)};
  mixer[kGoogleGrey100] = {SkColorSetRGB(0xF1, 0xF3, 0xF4)};
  mixer[kGoogleGrey200] = {SkColorSetRGB(0xE8, 0xEA, 0xED)};
  mixer[kGoogleGrey300] = {SkColorSetRGB(0xDA, 0xDC, 0xE0)};
  mixer[kGoogleGrey400] = {SkColorSetRGB(0xBD, 0xC1, 0xC6)};
  mixer[kGoogleGrey500] = {SkColorSetRGB(0x9A, 0xA0, 0xA6)};
  mixer[kGoogleGrey600] = {SkColorSetRGB(0x80, 0x86, 0x8B)};
  mixer[kGoogleGrey700] = {SkColorSetRGB(0x5F, 0x63, 0x68)};
  mixer[kGoogleGrey800] = {SkColorSetRGB(0x3C, 0x40, 0x43)};
  mixer[kGoogleGrey900] = {SkColorSetRGB(0x20, 0x21, 0x24)};
  mixer[kGoogleRed50] = {SkColorSetRGB(0xFC, 0xE8, 0xE6)};
  mixer[kGoogleRed100] = {SkColorSetRGB(0xFA, 0xD2, 0xCF)};
  mixer[kGoogleRed200] = {SkColorSetRGB(0xF6, 0xAE, 0xA9)};
  mixer[kGoogleRed300] = {SkColorSetRGB(0xF2, 0x8B, 0x82)};
  mixer[kGoogleRed400] = {SkColorSetRGB(0xEE, 0x67, 0x5C)};
  mixer[kGoogleRed500] = {SkColorSetRGB(0xEA, 0x43, 0x35)};
  mixer[kGoogleRed600] = {SkColorSetRGB(0xD9, 0x30, 0x25)};
  mixer[kGoogleRed700] = {SkColorSetRGB(0xC5, 0x22, 0x1F)};
  mixer[kGoogleRed800] = {SkColorSetRGB(0xB3, 0x14, 0x12)};
  mixer[kGoogleRed900] = {SkColorSetRGB(0xA5, 0xE, 0xE)};
  mixer[kGoogleYellow50] = {SkColorSetRGB(0xFE, 0xF7, 0xE0)};
  mixer[kGoogleYellow100] = {SkColorSetRGB(0xFE, 0xEF, 0xC3)};
  mixer[kGoogleYellow200] = {SkColorSetRGB(0xFD, 0xE2, 0x93)};
  mixer[kGoogleYellow300] = {SkColorSetRGB(0xFD, 0xD6, 0x63)};
  mixer[kGoogleYellow400] = {SkColorSetRGB(0xFC, 0xC9, 0x34)};
  mixer[kGoogleYellow500] = {SkColorSetRGB(0xFB, 0xBC, 0x4)};
  mixer[kGoogleYellow600] = {SkColorSetRGB(0xF9, 0xAB, 0x0)};
  mixer[kGoogleYellow700] = {SkColorSetRGB(0xF2, 0x99, 0x0)};
  mixer[kGoogleYellow800] = {SkColorSetRGB(0xEA, 0x86, 0x0)};
  mixer[kGoogleYellow900] = {SkColorSetRGB(0xE3, 0x74, 0x0)};
  mixer[kGoogleOrange50] = {SkColorSetRGB(0xFE, 0xEF, 0xE3)};
  mixer[kGoogleOrange100] = {SkColorSetRGB(0xFE, 0xDF, 0xC8)};
  mixer[kGoogleOrange200] = {SkColorSetRGB(0xFD, 0xC6, 0x9C)};
  mixer[kGoogleOrange300] = {SkColorSetRGB(0xFC, 0xAD, 0x70)};
  mixer[kGoogleOrange400] = {SkColorSetRGB(0xFA, 0x90, 0x3E)};
  mixer[kGoogleOrange500] = {SkColorSetRGB(0xFA, 0x7B, 0x17)};
  mixer[kGoogleOrange600] = {SkColorSetRGB(0xE8, 0x71, 0xA)};
  mixer[kGoogleOrange700] = {SkColorSetRGB(0xD5, 0x6E, 0xC)};
  mixer[kGoogleOrange800] = {SkColorSetRGB(0xC2, 0x64, 0x1)};
  mixer[kGoogleOrange900] = {SkColorSetRGB(0xB0, 0x60, 0x0)};
  mixer[kGooglePink50] = {SkColorSetRGB(0xFD, 0xE7, 0xF3)};
  mixer[kGooglePink100] = {SkColorSetRGB(0xFD, 0xCF, 0xE8)};
  mixer[kGooglePink200] = {SkColorSetRGB(0xFB, 0xA9, 0xD6)};
  mixer[kGooglePink300] = {SkColorSetRGB(0xFF, 0x8B, 0xCB)};
  mixer[kGooglePink400] = {SkColorSetRGB(0xFF, 0x63, 0xB8)};
  mixer[kGooglePink500] = {SkColorSetRGB(0xF4, 0x39, 0xA0)};
  mixer[kGooglePink600] = {SkColorSetRGB(0xE5, 0x25, 0x92)};
  mixer[kGooglePink700] = {SkColorSetRGB(0xD0, 0x18, 0x84)};
  mixer[kGooglePink800] = {SkColorSetRGB(0xB8, 0x6, 0x72)};
  mixer[kGooglePink900] = {SkColorSetRGB(0x9C, 0x16, 0x6B)};
  mixer[kGooglePurple50] = {SkColorSetRGB(0xF3, 0xE8, 0xFD)};
  mixer[kGooglePurple100] = {SkColorSetRGB(0xE9, 0xD2, 0xFD)};
  mixer[kGooglePurple200] = {SkColorSetRGB(0xD7, 0xAE, 0xFB)};
  mixer[kGooglePurple300] = {SkColorSetRGB(0xC5, 0x8A, 0xF9)};
  mixer[kGooglePurple400] = {SkColorSetRGB(0xAF, 0x5C, 0xF7)};
  mixer[kGooglePurple500] = {SkColorSetRGB(0xA1, 0x42, 0xF4)};
  mixer[kGooglePurple600] = {SkColorSetRGB(0x93, 0x34, 0xE6)};
  mixer[kGooglePurple700] = {SkColorSetRGB(0x84, 0x30, 0xCE)};
  mixer[kGooglePurple800] = {SkColorSetRGB(0x76, 0x27, 0xBB)};
  mixer[kGooglePurple900] = {SkColorSetRGB(0x68, 0x1D, 0xA8)};
  mixer[kGoogleCyan50] = {SkColorSetRGB(0xE4, 0xF7, 0xFB)};
  mixer[kGoogleCyan100] = {SkColorSetRGB(0xCB, 0xF0, 0xF8)};
  mixer[kGoogleCyan200] = {SkColorSetRGB(0xA1, 0xE4, 0xF2)};
  mixer[kGoogleCyan300] = {SkColorSetRGB(0x78, 0xD9, 0xEC)};
  mixer[kGoogleCyan400] = {SkColorSetRGB(0x4E, 0xCD, 0xE6)};
  mixer[kGoogleCyan500] = {SkColorSetRGB(0x24, 0xC1, 0xE0)};
  mixer[kGoogleCyan600] = {SkColorSetRGB(0x12, 0xB5, 0xCB)};
  mixer[kGoogleCyan700] = {SkColorSetRGB(0x12, 0x9E, 0xAF)};
  mixer[kGoogleCyan800] = {SkColorSetRGB(0x9, 0x85, 0x91)};
  mixer[kGoogleCyan900] = {SkColorSetRGB(0x0, 0x7B, 0x83)};
}


void AddCrosRefColorsToMixer(ui::ColorMixer& mixer, bool dark_mode) {
  mixer[kCrosRefPrimary0] = {SkColorSetRGB(0x0, 0x0, 0x0)};
  mixer[kCrosRefPrimary10] = {SkColorSetRGB(0x4, 0x1E, 0x49)};
  mixer[kCrosRefPrimary20] = {SkColorSetRGB(0x6, 0x2E, 0x6F)};
  mixer[kCrosRefPrimary30] = {SkColorSetRGB(0x8, 0x42, 0xA0)};
  mixer[kCrosRefPrimary40] = {SkColorSetRGB(0xB, 0x57, 0xD0)};
  mixer[kCrosRefPrimary50] = {SkColorSetRGB(0x1B, 0x6E, 0xF3)};
  mixer[kCrosRefPrimary60] = {SkColorSetRGB(0x4C, 0x8D, 0xF6)};
  mixer[kCrosRefPrimary70] = {SkColorSetRGB(0x7C, 0xAC, 0xF8)};
  mixer[kCrosRefPrimary80] = {SkColorSetRGB(0xA8, 0xC7, 0xFA)};
  mixer[kCrosRefPrimary90] = {SkColorSetRGB(0xD3, 0xE3, 0xFD)};
  mixer[kCrosRefPrimary95] = {SkColorSetRGB(0xEC, 0xF3, 0xFE)};
  mixer[kCrosRefPrimary99] = {SkColorSetRGB(0xFA, 0xFB, 0xFF)};
  mixer[kCrosRefPrimary100] = {SkColorSetRGB(0xFF, 0xFF, 0xFF)};
  mixer[kCrosRefSecondary0] = {SkColorSetRGB(0x0, 0x0, 0x0)};
  mixer[kCrosRefSecondary10] = {SkColorSetRGB(0x0, 0x1D, 0x35)};
  mixer[kCrosRefSecondary12] = {SkColorSetRGB(0x0, 0x22, 0x38)};
  mixer[kCrosRefSecondary15] = {SkColorSetRGB(0x0, 0x28, 0x44)};
  mixer[kCrosRefSecondary20] = {SkColorSetRGB(0x0, 0x33, 0x55)};
  mixer[kCrosRefSecondary30] = {SkColorSetRGB(0x0, 0x4A, 0x77)};
  mixer[kCrosRefSecondary40] = {SkColorSetRGB(0x0, 0x63, 0x9B)};
  mixer[kCrosRefSecondary50] = {SkColorSetRGB(0x4, 0x7D, 0xB7)};
  mixer[kCrosRefSecondary60] = {SkColorSetRGB(0x39, 0x98, 0xD3)};
  mixer[kCrosRefSecondary70] = {SkColorSetRGB(0x5A, 0xB3, 0xF0)};
  mixer[kCrosRefSecondary80] = {SkColorSetRGB(0x7F, 0xCF, 0xFF)};
  mixer[kCrosRefSecondary90] = {SkColorSetRGB(0xC2, 0xE7, 0xFF)};
  mixer[kCrosRefSecondary95] = {SkColorSetRGB(0xDF, 0xF3, 0xFF)};
  mixer[kCrosRefSecondary99] = {SkColorSetRGB(0xF7, 0xFC, 0xFF)};
  mixer[kCrosRefSecondary100] = {SkColorSetRGB(0xFF, 0xFF, 0xFF)};
  mixer[kCrosRefTertiary0] = {SkColorSetRGB(0x0, 0x0, 0x0)};
  mixer[kCrosRefTertiary10] = {SkColorSetRGB(0x7, 0x27, 0x11)};
  mixer[kCrosRefTertiary20] = {SkColorSetRGB(0xA, 0x38, 0x18)};
  mixer[kCrosRefTertiary30] = {SkColorSetRGB(0xF, 0x52, 0x23)};
  mixer[kCrosRefTertiary40] = {SkColorSetRGB(0x14, 0x6C, 0x2E)};
  mixer[kCrosRefTertiary50] = {SkColorSetRGB(0x19, 0x86, 0x39)};
  mixer[kCrosRefTertiary60] = {SkColorSetRGB(0x1E, 0xA4, 0x46)};
  mixer[kCrosRefTertiary70] = {SkColorSetRGB(0x37, 0xBE, 0x5F)};
  mixer[kCrosRefTertiary80] = {SkColorSetRGB(0x6D, 0xD5, 0x8C)};
  mixer[kCrosRefTertiary90] = {SkColorSetRGB(0xC4, 0xEE, 0xD0)};
  mixer[kCrosRefTertiary95] = {SkColorSetRGB(0xE7, 0xF8, 0xED)};
  mixer[kCrosRefTertiary99] = {SkColorSetRGB(0xF2, 0xFF, 0xEE)};
  mixer[kCrosRefTertiary100] = {SkColorSetRGB(0xFF, 0xFF, 0xFF)};
  mixer[kCrosRefError0] = {SkColorSetRGB(0x0, 0x0, 0x0)};
  mixer[kCrosRefError10] = {SkColorSetRGB(0x41, 0xE, 0xB)};
  mixer[kCrosRefError20] = {SkColorSetRGB(0x60, 0x14, 0x10)};
  mixer[kCrosRefError30] = {SkColorSetRGB(0x8C, 0x1D, 0x18)};
  mixer[kCrosRefError40] = {SkColorSetRGB(0xB3, 0x26, 0x1E)};
  mixer[kCrosRefError50] = {SkColorSetRGB(0xDC, 0x36, 0x2E)};
  mixer[kCrosRefError60] = {SkColorSetRGB(0xE4, 0x69, 0x62)};
  mixer[kCrosRefError70] = {SkColorSetRGB(0xEC, 0x92, 0x8E)};
  mixer[kCrosRefError80] = {SkColorSetRGB(0xF2, 0xB8, 0xB5)};
  mixer[kCrosRefError90] = {SkColorSetRGB(0xF9, 0xDE, 0xDC)};
  mixer[kCrosRefError95] = {SkColorSetRGB(0xFC, 0xEE, 0xEE)};
  mixer[kCrosRefError99] = {SkColorSetRGB(0xFF, 0xFB, 0xF9)};
  mixer[kCrosRefError100] = {SkColorSetRGB(0xFF, 0xFF, 0xFF)};
  mixer[kCrosRefNeutral0] = {SkColorSetRGB(0x0, 0x0, 0x0)};
  mixer[kCrosRefNeutral8] = {SkColorSetRGB(0x16, 0x18, 0x18)};
  mixer[kCrosRefNeutral10] = {SkColorSetRGB(0x1F, 0x1F, 0x1F)};
  mixer[kCrosRefNeutral20] = {SkColorSetRGB(0x30, 0x30, 0x30)};
  mixer[kCrosRefNeutral25] = {SkColorSetRGB(0x3C, 0x3C, 0x3C)};
  mixer[kCrosRefNeutral30] = {SkColorSetRGB(0x47, 0x47, 0x47)};
  mixer[kCrosRefNeutral40] = {SkColorSetRGB(0x5E, 0x5E, 0x5E)};
  mixer[kCrosRefNeutral50] = {SkColorSetRGB(0x75, 0x75, 0x75)};
  mixer[kCrosRefNeutral60] = {SkColorSetRGB(0x8F, 0x8F, 0x8F)};
  mixer[kCrosRefNeutral70] = {SkColorSetRGB(0xAB, 0xAB, 0xAB)};
  mixer[kCrosRefNeutral80] = {SkColorSetRGB(0xC7, 0xC7, 0xC7)};
  mixer[kCrosRefNeutral90] = {SkColorSetRGB(0xE3, 0xE3, 0xE3)};
  mixer[kCrosRefNeutral95] = {SkColorSetRGB(0xF2, 0xF2, 0xF2)};
  mixer[kCrosRefNeutral99] = {SkColorSetRGB(0xFD, 0xFC, 0xFB)};
  mixer[kCrosRefNeutral100] = {SkColorSetRGB(0xFF, 0xFF, 0xFF)};
  mixer[kCrosRefNeutralvariant0] = {SkColorSetRGB(0x0, 0x0, 0x0)};
  mixer[kCrosRefNeutralvariant10] = {SkColorSetRGB(0x19, 0x1D, 0x1C)};
  mixer[kCrosRefNeutralvariant20] = {SkColorSetRGB(0x2D, 0x31, 0x2F)};
  mixer[kCrosRefNeutralvariant30] = {SkColorSetRGB(0x44, 0x47, 0x46)};
  mixer[kCrosRefNeutralvariant40] = {SkColorSetRGB(0x5C, 0x5F, 0x5E)};
  mixer[kCrosRefNeutralvariant50] = {SkColorSetRGB(0x74, 0x77, 0x75)};
  mixer[kCrosRefNeutralvariant60] = {SkColorSetRGB(0x8E, 0x91, 0x8F)};
  mixer[kCrosRefNeutralvariant70] = {SkColorSetRGB(0xA9, 0xAC, 0xAA)};
  mixer[kCrosRefNeutralvariant80] = {SkColorSetRGB(0xC4, 0xC7, 0xC5)};
  mixer[kCrosRefNeutralvariant90] = {SkColorSetRGB(0xE1, 0xE3, 0xE1)};
  mixer[kCrosRefNeutralvariant95] = {SkColorSetRGB(0xEF, 0xF2, 0xEF)};
  mixer[kCrosRefNeutralvariant99] = {SkColorSetRGB(0xFA, 0xFD, 0xFB)};
  mixer[kCrosRefNeutralvariant100] = {SkColorSetRGB(0xFF, 0xFF, 0xFF)};
  mixer[kCrosRefRed0] = {SkColorSetRGB(0x0, 0x0, 0x0)};
  mixer[kCrosRefRed10] = {SkColorSetRGB(0x40, 0x0, 0xC)};
  mixer[kCrosRefRed20] = {SkColorSetRGB(0x68, 0x0, 0x19)};
  mixer[kCrosRefRed30] = {SkColorSetRGB(0x92, 0x0, 0x27)};
  mixer[kCrosRefRed40] = {SkColorSetRGB(0xBD, 0x8, 0x37)};
  mixer[kCrosRefRed50] = {SkColorSetRGB(0xE1, 0x2E, 0x4D)};
  mixer[kCrosRefRed60] = {SkColorSetRGB(0xFF, 0x51, 0x67)};
  mixer[kCrosRefRed70] = {SkColorSetRGB(0xFF, 0x88, 0x90)};
  mixer[kCrosRefRed80] = {SkColorSetRGB(0xFF, 0xB3, 0xB6)};
  mixer[kCrosRefRed90] = {SkColorSetRGB(0xFF, 0xDA, 0xDA)};
  mixer[kCrosRefRed95] = {SkColorSetRGB(0xFF, 0xED, 0xEC)};
  mixer[kCrosRefRed99] = {SkColorSetRGB(0xFF, 0xFB, 0xFF)};
  mixer[kCrosRefRed100] = {SkColorSetRGB(0xFF, 0xFF, 0xFF)};
  mixer[kCrosRefBlue0] = {SkColorSetRGB(0x0, 0x0, 0x0)};
  mixer[kCrosRefBlue10] = {SkColorSetRGB(0x0, 0x17, 0x4C)};
  mixer[kCrosRefBlue20] = {SkColorSetRGB(0x2, 0x29, 0x78)};
  mixer[kCrosRefBlue30] = {SkColorSetRGB(0x24, 0x42, 0x90)};
  mixer[kCrosRefBlue40] = {SkColorSetRGB(0x3F, 0x5A, 0xA9)};
  mixer[kCrosRefBlue50] = {SkColorSetRGB(0x59, 0x73, 0xC4)};
  mixer[kCrosRefBlue60] = {SkColorSetRGB(0x73, 0x8D, 0xE0)};
  mixer[kCrosRefBlue70] = {SkColorSetRGB(0x8E, 0xA8, 0xFD)};
  mixer[kCrosRefBlue80] = {SkColorSetRGB(0xB4, 0xC5, 0xFF)};
  mixer[kCrosRefBlue90] = {SkColorSetRGB(0xDB, 0xE1, 0xFF)};
  mixer[kCrosRefBlue95] = {SkColorSetRGB(0xEF, 0xF0, 0xFF)};
  mixer[kCrosRefBlue99] = {SkColorSetRGB(0xFE, 0xFB, 0xFF)};
  mixer[kCrosRefBlue100] = {SkColorSetRGB(0xFF, 0xFF, 0xFF)};
  mixer[kCrosRefYellow0] = {SkColorSetRGB(0x0, 0x0, 0x0)};
  mixer[kCrosRefYellow10] = {SkColorSetRGB(0x29, 0x18, 0x0)};
  mixer[kCrosRefYellow20] = {SkColorSetRGB(0x45, 0x2B, 0x0)};
  mixer[kCrosRefYellow30] = {SkColorSetRGB(0x62, 0x40, 0x0)};
  mixer[kCrosRefYellow40] = {SkColorSetRGB(0x82, 0x55, 0x0)};
  mixer[kCrosRefYellow50] = {SkColorSetRGB(0xA2, 0x6C, 0x0)};
  mixer[kCrosRefYellow60] = {SkColorSetRGB(0xC5, 0x83, 0x0)};
  mixer[kCrosRefYellow70] = {SkColorSetRGB(0xE8, 0x9C, 0x0)};
  mixer[kCrosRefYellow80] = {SkColorSetRGB(0xFF, 0xB9, 0x4F)};
  mixer[kCrosRefYellow90] = {SkColorSetRGB(0xFF, 0xDD, 0xB3)};
  mixer[kCrosRefYellow95] = {SkColorSetRGB(0xFF, 0xEE, 0xDC)};
  mixer[kCrosRefYellow99] = {SkColorSetRGB(0xFF, 0xFB, 0xFF)};
  mixer[kCrosRefYellow100] = {SkColorSetRGB(0xFF, 0xFF, 0xFF)};
  mixer[kCrosRefGreen0] = {SkColorSetRGB(0x0, 0x0, 0x0)};
  mixer[kCrosRefGreen10] = {SkColorSetRGB(0x0, 0x21, 0x14)};
  mixer[kCrosRefGreen20] = {SkColorSetRGB(0x0, 0x38, 0x25)};
  mixer[kCrosRefGreen30] = {SkColorSetRGB(0x0, 0x52, 0x37)};
  mixer[kCrosRefGreen40] = {SkColorSetRGB(0x0, 0x6C, 0x4A)};
  mixer[kCrosRefGreen50] = {SkColorSetRGB(0x0, 0x88, 0x5E)};
  mixer[kCrosRefGreen60] = {SkColorSetRGB(0x2E, 0xA3, 0x76)};
  mixer[kCrosRefGreen70] = {SkColorSetRGB(0x4F, 0xBF, 0x8F)};
  mixer[kCrosRefGreen80] = {SkColorSetRGB(0x6C, 0xDB, 0xA9)};
  mixer[kCrosRefGreen90] = {SkColorSetRGB(0x89, 0xF8, 0xC4)};
  mixer[kCrosRefGreen95] = {SkColorSetRGB(0xBE, 0xFF, 0xDC)};
  mixer[kCrosRefGreen99] = {SkColorSetRGB(0xF4, 0xFF, 0xF6)};
  mixer[kCrosRefGreen100] = {SkColorSetRGB(0xFF, 0xFF, 0xFF)};
}


void AddCrosSysColorsToMixer(ui::ColorMixer& mixer, bool dark_mode) {
  mixer[kCrosSysPrimaryLight] = {kCrosRefPrimary40};
  mixer[kCrosSysPrimaryDark] = {kCrosRefPrimary80};
  if (dark_mode) {
    mixer[kCrosSysPrimary] = {kCrosSysPrimaryDark};
  } else {
    mixer[kCrosSysPrimary] = {kCrosSysPrimaryLight};
  }
  if (dark_mode) {
    mixer[kCrosSysInversePrimary] = {kCrosRefPrimary40};
  } else {
    mixer[kCrosSysInversePrimary] = {kCrosRefPrimary80};
  }
  mixer[kCrosSysOnPrimaryLight] = {kCrosRefPrimary100};
  mixer[kCrosSysOnPrimaryDark] = {kCrosRefPrimary20};
  if (dark_mode) {
    mixer[kCrosSysOnPrimary] = {kCrosSysOnPrimaryDark};
  } else {
    mixer[kCrosSysOnPrimary] = {kCrosSysOnPrimaryLight};
  }
  if (dark_mode) {
    mixer[kCrosSysPrimaryContainer] = ui::GetResultingPaintColor(ui::SetAlpha({kCrosRefPrimary30}, 0x14), {kCrosRefSecondary30});
  } else {
    mixer[kCrosSysPrimaryContainer] = {kCrosRefPrimary90};
  }
  if (dark_mode) {
    mixer[kCrosSysOnPrimaryContainer] = {kCrosRefPrimary90};
  } else {
    mixer[kCrosSysOnPrimaryContainer] = {kCrosRefPrimary10};
  }
  mixer[kCrosSysSecondaryLight] = {kCrosRefSecondary40};
  mixer[kCrosSysSecondaryDark] = {kCrosRefSecondary80};
  if (dark_mode) {
    mixer[kCrosSysSecondary] = {kCrosSysSecondaryDark};
  } else {
    mixer[kCrosSysSecondary] = {kCrosSysSecondaryLight};
  }
  if (dark_mode) {
    mixer[kCrosSysOnSecondary] = {kCrosRefSecondary20};
  } else {
    mixer[kCrosSysOnSecondary] = {kCrosRefSecondary100};
  }
  if (dark_mode) {
    mixer[kCrosSysSecondaryContainer] = {kCrosRefSecondary30};
  } else {
    mixer[kCrosSysSecondaryContainer] = {kCrosRefSecondary90};
  }
  if (dark_mode) {
    mixer[kCrosSysOnSecondaryContainer] = {kCrosRefSecondary90};
  } else {
    mixer[kCrosSysOnSecondaryContainer] = {kCrosRefSecondary10};
  }
  if (dark_mode) {
    mixer[kCrosSysTertiary] = {kCrosRefTertiary80};
  } else {
    mixer[kCrosSysTertiary] = {kCrosRefTertiary40};
  }
  if (dark_mode) {
    mixer[kCrosSysOnTertiary] = {kCrosRefTertiary20};
  } else {
    mixer[kCrosSysOnTertiary] = {kCrosRefTertiary100};
  }
  if (dark_mode) {
    mixer[kCrosSysTertiaryContainer] = {kCrosRefTertiary30};
  } else {
    mixer[kCrosSysTertiaryContainer] = {kCrosRefTertiary90};
  }
  if (dark_mode) {
    mixer[kCrosSysOnTertiaryContainer] = {kCrosRefTertiary90};
  } else {
    mixer[kCrosSysOnTertiaryContainer] = {kCrosRefTertiary10};
  }
  if (dark_mode) {
    mixer[kCrosSysError] = {kCrosRefRed80};
  } else {
    mixer[kCrosSysError] = {kCrosRefRed50};
  }
  if (dark_mode) {
    mixer[kCrosSysOnError] = {kCrosRefError20};
  } else {
    mixer[kCrosSysOnError] = {kCrosRefError100};
  }
  if (dark_mode) {
    mixer[kCrosSysErrorContainer] = ui::GetResultingPaintColor(ui::SetAlpha({kCrosRefRed80}, 0x33), {SkColorSetRGB(0x0, 0x0, 0x0)});
  } else {
    mixer[kCrosSysErrorContainer] = {kCrosRefRed90};
  }
  if (dark_mode) {
    mixer[kCrosSysOnErrorContainer] = {kCrosRefRed80};
  } else {
    mixer[kCrosSysOnErrorContainer] = {kCrosRefRed30};
  }
  if (dark_mode) {
    mixer[kCrosSysErrorHighlight] = ui::SetAlpha({kCrosRefError80}, 0x4C);
  } else {
    mixer[kCrosSysErrorHighlight] = ui::SetAlpha({kCrosRefError40}, 0x4C);
  }
  if (dark_mode) {
    mixer[kCrosSysSurfaceVariant] = {kCrosRefNeutralvariant30};
  } else {
    mixer[kCrosSysSurfaceVariant] = {kCrosRefNeutralvariant90};
  }
  mixer[kCrosSysOnSurfaceVariantLight] = {kCrosRefNeutralvariant30};
  mixer[kCrosSysOnSurfaceVariantDark] = {kCrosRefNeutralvariant80};
  if (dark_mode) {
    mixer[kCrosSysOnSurfaceVariant] = {kCrosSysOnSurfaceVariantDark};
  } else {
    mixer[kCrosSysOnSurfaceVariant] = {kCrosSysOnSurfaceVariantLight};
  }
  if (dark_mode) {
    mixer[kCrosSysOutline] = {kCrosRefNeutralvariant60};
  } else {
    mixer[kCrosSysOutline] = {kCrosRefNeutralvariant50};
  }
  if (dark_mode) {
    mixer[kCrosSysSeparator] = ui::SetAlpha({kCrosRefNeutral90}, 0x23);
  } else {
    mixer[kCrosSysSeparator] = ui::SetAlpha({kCrosRefNeutral10}, 0x23);
  }
  if (dark_mode) {
    mixer[kCrosSysWhite] = {kCrosRefNeutral100};
  } else {
    mixer[kCrosSysWhite] = {kCrosRefNeutral100};
  }
  if (dark_mode) {
    mixer[kCrosSysBlack] = {kCrosRefNeutral0};
  } else {
    mixer[kCrosSysBlack] = {kCrosRefNeutral0};
  }
  if (dark_mode) {
    mixer[kCrosSysHeader] = {kCrosRefSecondary12};
  } else {
    mixer[kCrosSysHeader] = {kCrosRefSecondary90};
  }
  if (dark_mode) {
    mixer[kCrosSysHeaderUnfocused] = ui::GetResultingPaintColor(ui::SetAlpha({kCrosRefSecondary12}, 0x99), {kCrosRefNeutral25});
  } else {
    mixer[kCrosSysHeaderUnfocused] = ui::GetResultingPaintColor(ui::SetAlpha({kCrosRefSecondary90}, 0x47), {kCrosRefNeutralvariant90});
  }
  if (dark_mode) {
    mixer[kCrosSysAppBaseShaded] = {kCrosRefNeutral0};
  } else {
    mixer[kCrosSysAppBaseShaded] = {kCrosRefNeutralvariant95};
  }
  if (dark_mode) {
    mixer[kCrosSysAppBase] = {kCrosRefNeutral8};
  } else {
    mixer[kCrosSysAppBase] = {kCrosRefNeutral99};
  }
  mixer[kCrosSysBaseElevatedLight] = {kCrosRefNeutralvariant100};
  mixer[kCrosSysBaseElevatedDark] = ui::GetResultingPaintColor(ui::SetAlpha({kCrosRefPrimary80}, 0x1C), ui::GetResultingPaintColor(ui::SetAlpha({kCrosRefNeutral80}, 0x5), {kCrosRefNeutral10}));
  if (dark_mode) {
    mixer[kCrosSysBaseElevated] = {kCrosSysBaseElevatedDark};
  } else {
    mixer[kCrosSysBaseElevated] = {kCrosSysBaseElevatedLight};
  }
  if (dark_mode) {
    mixer[kCrosSysSystemBase] = {kCrosRefNeutralvariant0};
  } else {
    mixer[kCrosSysSystemBase] = {kCrosRefNeutralvariant90};
  }
  if (dark_mode) {
    mixer[kCrosSysSystemBaseElevated] = ui::SetAlpha({kCrosSysSurface3}, 0xE5);
  } else {
    mixer[kCrosSysSystemBaseElevated] = ui::SetAlpha({kCrosSysSurface3}, 0xE5);
  }
  if (dark_mode) {
    mixer[kCrosSysSystemBaseElevatedOpaque] = {kCrosSysSurface3};
  } else {
    mixer[kCrosSysSystemBaseElevatedOpaque] = {kCrosSysSurface3};
  }
  if (dark_mode) {
    mixer[kCrosSysSurface] = {kCrosRefNeutral10};
  } else {
    mixer[kCrosSysSurface] = {kCrosRefNeutral99};
  }
  if (dark_mode) {
    mixer[kCrosSysSurface1] = ui::GetResultingPaintColor(ui::SetAlpha({kCrosRefPrimary80}, 0xC), {kCrosRefNeutral10});
  } else {
    mixer[kCrosSysSurface1] = ui::GetResultingPaintColor(ui::SetAlpha({kCrosRefPrimary40}, 0xC), {kCrosRefNeutral99});
  }
  if (dark_mode) {
    mixer[kCrosSysSurface2] = ui::GetResultingPaintColor(ui::SetAlpha({kCrosRefPrimary80}, 0x14), {kCrosRefNeutral10});
  } else {
    mixer[kCrosSysSurface2] = ui::GetResultingPaintColor(ui::SetAlpha({kCrosRefPrimary40}, 0x14), {kCrosRefNeutral99});
  }
  if (dark_mode) {
    mixer[kCrosSysSurface3] = ui::GetResultingPaintColor(ui::SetAlpha({kCrosRefPrimary80}, 0x1C), {kCrosRefNeutral10});
  } else {
    mixer[kCrosSysSurface3] = ui::GetResultingPaintColor(ui::SetAlpha({kCrosRefPrimary40}, 0x1C), {kCrosRefNeutral99});
  }
  if (dark_mode) {
    mixer[kCrosSysSurface4] = ui::GetResultingPaintColor(ui::SetAlpha({kCrosRefPrimary80}, 0x1E), {kCrosRefNeutral10});
  } else {
    mixer[kCrosSysSurface4] = ui::GetResultingPaintColor(ui::SetAlpha({kCrosRefPrimary40}, 0x1E), {kCrosRefNeutral99});
  }
  if (dark_mode) {
    mixer[kCrosSysSurface5] = ui::GetResultingPaintColor(ui::SetAlpha({kCrosRefPrimary80}, 0x23), {kCrosRefNeutral10});
  } else {
    mixer[kCrosSysSurface5] = ui::GetResultingPaintColor(ui::SetAlpha({kCrosRefPrimary40}, 0x23), {kCrosRefNeutral99});
  }
  if (dark_mode) {
    mixer[kCrosSysScrim] = ui::SetAlpha({kCrosRefNeutralvariant0}, 0x99);
  } else {
    mixer[kCrosSysScrim] = ui::SetAlpha({kCrosRefNeutralvariant60}, 0x99);
  }
  if (dark_mode) {
    mixer[kCrosSysScrim2] = ui::SetAlpha({kCrosRefSecondary30}, 0x7A);
  } else {
    mixer[kCrosSysScrim2] = ui::SetAlpha({kCrosRefSecondary90}, 0x99);
  }
  mixer[kCrosSysDialogContainer] = {kCrosSysBaseElevated};
  if (dark_mode) {
    mixer[kCrosSysInverseSurface] = {kCrosRefNeutral90};
  } else {
    mixer[kCrosSysInverseSurface] = {kCrosRefNeutral20};
  }
  if (dark_mode) {
    mixer[kCrosSysScrollbar] = ui::SetAlpha({kCrosRefNeutralvariant50}, 0x99);
  } else {
    mixer[kCrosSysScrollbar] = ui::SetAlpha({kCrosRefNeutralvariant60}, 0x99);
  }
  if (dark_mode) {
    mixer[kCrosSysScrollbarHover] = ui::SetAlpha({kCrosRefNeutralvariant90}, 0x99);
  } else {
    mixer[kCrosSysScrollbarHover] = ui::SetAlpha({kCrosRefNeutralvariant30}, 0x99);
  }
  if (dark_mode) {
    mixer[kCrosSysScrollbarBorder] = ui::SetAlpha({kCrosRefNeutralvariant0}, 0x23);
  } else {
    mixer[kCrosSysScrollbarBorder] = ui::SetAlpha({kCrosRefNeutralvariant100}, 0x23);
  }
  if (dark_mode) {
    mixer[kCrosSysInputFieldOnShaded] = ui::SetAlpha({kCrosRefNeutral50}, 0x66);
  } else {
    mixer[kCrosSysInputFieldOnShaded] = {kCrosRefNeutral99};
  }
  if (dark_mode) {
    mixer[kCrosSysInputFieldOnBase] = ui::SetAlpha({kCrosRefNeutral0}, 0x99);
  } else {
    mixer[kCrosSysInputFieldOnBase] = {kCrosRefNeutral95};
  }
  if (dark_mode) {
    mixer[kCrosSysSystemOnBase] = ui::SetAlpha({kCrosRefNeutralvariant40}, 0x7F);
  } else {
    mixer[kCrosSysSystemOnBase] = ui::SetAlpha({kCrosRefNeutralvariant99}, 0x99);
  }
  if (dark_mode) {
    mixer[kCrosSysSystemOnBaseOpaque] = {kCrosRefNeutralvariant30};
  } else {
    mixer[kCrosSysSystemOnBaseOpaque] = {kCrosRefNeutralvariant95};
  }
  if (dark_mode) {
    mixer[kCrosSysSystemOnBase1] = ui::SetAlpha({kCrosRefNeutral99}, 0x19);
  } else {
    mixer[kCrosSysSystemOnBase1] = ui::SetAlpha({kCrosRefNeutral10}, 0xF);
  }
  if (dark_mode) {
    mixer[kCrosSysSystemPrimaryContainer] = {kCrosRefPrimary80};
  } else {
    mixer[kCrosSysSystemPrimaryContainer] = {kCrosRefPrimary80};
  }
  if (dark_mode) {
    mixer[kCrosSysSystemOnPrimaryContainer] = {kCrosRefPrimary10};
  } else {
    mixer[kCrosSysSystemOnPrimaryContainer] = {kCrosRefPrimary10};
  }
  mixer[kCrosSysSystemOnPrimaryContainerDisabled] = ui::SetAlpha({kCrosSysSystemOnPrimaryContainer}, 0x60);
  if (dark_mode) {
    mixer[kCrosSysOnPositiveContainer] = {kCrosRefGreen90};
  } else {
    mixer[kCrosSysOnPositiveContainer] = {kCrosRefGreen30};
  }
  if (dark_mode) {
    mixer[kCrosSysPositiveContainer] = ui::GetResultingPaintColor(ui::SetAlpha({kCrosRefGreen95}, 0x33), {SkColorSetRGB(0x0, 0x0, 0x0)});
  } else {
    mixer[kCrosSysPositiveContainer] = {kCrosRefGreen95};
  }
  if (dark_mode) {
    mixer[kCrosSysPositive] = {kCrosRefGreen80};
  } else {
    mixer[kCrosSysPositive] = {kCrosRefGreen50};
  }
  if (dark_mode) {
    mixer[kCrosSysOnWarningContainer] = {kCrosRefYellow80};
  } else {
    mixer[kCrosSysOnWarningContainer] = {kCrosRefYellow30};
  }
  if (dark_mode) {
    mixer[kCrosSysWarningContainer] = ui::GetResultingPaintColor(ui::SetAlpha({kCrosRefYellow90}, 0x33), {SkColorSetRGB(0x0, 0x0, 0x0)});
  } else {
    mixer[kCrosSysWarningContainer] = {kCrosRefYellow90};
  }
  if (dark_mode) {
    mixer[kCrosSysSystemOnWarningContainer] = {kCrosRefYellow10};
  } else {
    mixer[kCrosSysSystemOnWarningContainer] = {kCrosRefYellow10};
  }
  if (dark_mode) {
    mixer[kCrosSysSystemWarningContainer] = {kCrosRefYellow80};
  } else {
    mixer[kCrosSysSystemWarningContainer] = {kCrosRefYellow80};
  }
  if (dark_mode) {
    mixer[kCrosSysWarning] = {kCrosRefYellow80};
  } else {
    mixer[kCrosSysWarning] = {kCrosRefYellow50};
  }
  if (dark_mode) {
    mixer[kCrosSysOnProgressContainer] = {kCrosRefBlue80};
  } else {
    mixer[kCrosSysOnProgressContainer] = {kCrosRefBlue30};
  }
  if (dark_mode) {
    mixer[kCrosSysProgressContainer] = ui::GetResultingPaintColor(ui::SetAlpha({kCrosRefBlue80}, 0x33), {SkColorSetRGB(0x0, 0x0, 0x0)});
  } else {
    mixer[kCrosSysProgressContainer] = {kCrosRefBlue90};
  }
  if (dark_mode) {
    mixer[kCrosSysProgress] = {kCrosRefBlue80};
  } else {
    mixer[kCrosSysProgress] = {kCrosRefBlue50};
  }
  if (dark_mode) {
    mixer[kCrosSysSystemOnNegativeContainer] = {kCrosRefRed10};
  } else {
    mixer[kCrosSysSystemOnNegativeContainer] = {kCrosRefRed10};
  }
  if (dark_mode) {
    mixer[kCrosSysSystemNegativeContainer] = {kCrosRefRed80};
  } else {
    mixer[kCrosSysSystemNegativeContainer] = {kCrosRefRed80};
  }
  mixer[kCrosSysOnSurfaceLight] = {kCrosRefNeutral10};
  mixer[kCrosSysOnSurfaceDark] = {kCrosRefNeutral90};
  if (dark_mode) {
    mixer[kCrosSysOnSurface] = {kCrosSysOnSurfaceDark};
  } else {
    mixer[kCrosSysOnSurface] = {kCrosSysOnSurfaceLight};
  }
  if (dark_mode) {
    mixer[kCrosSysInverseOnSurface] = {kCrosRefNeutral10};
  } else {
    mixer[kCrosSysInverseOnSurface] = {kCrosRefNeutral95};
  }
  if (dark_mode) {
    mixer[kCrosSysOnSurfaceBodytext] = {kCrosRefNeutral70};
  } else {
    mixer[kCrosSysOnSurfaceBodytext] = {kCrosRefNeutral40};
  }
  if (dark_mode) {
    mixer[kCrosSysDisabled] = ui::SetAlpha({kCrosSysOnSurface}, 0x60);
  } else {
    mixer[kCrosSysDisabled] = ui::SetAlpha({kCrosSysOnSurface}, 0x60);
  }
  if (dark_mode) {
    mixer[kCrosSysDisabledOpaque] = {kCrosRefNeutralvariant30};
  } else {
    mixer[kCrosSysDisabledOpaque] = {kCrosRefNeutralvariant80};
  }
  mixer[kCrosSysDisabledContainer] = ui::SetAlpha({kCrosSysOnSurface}, 0x1E);
  if (dark_mode) {
    mixer[kCrosSysPrivacyIndicator] = {SkColorSetRGB(0x37, 0xBE, 0x5F)};
  } else {
    mixer[kCrosSysPrivacyIndicator] = {SkColorSetRGB(0x14, 0x6C, 0x2E)};
  }
  if (dark_mode) {
    mixer[kCrosSysHoverOnProminent] = ui::SetAlpha({kCrosRefNeutral10}, 0xF);
  } else {
    mixer[kCrosSysHoverOnProminent] = ui::SetAlpha({kCrosRefNeutral99}, 0x19);
  }
  if (dark_mode) {
    mixer[kCrosSysHoverOnSubtle] = ui::SetAlpha({kCrosRefNeutral99}, 0x19);
  } else {
    mixer[kCrosSysHoverOnSubtle] = ui::SetAlpha({kCrosRefNeutral10}, 0xF);
  }
  if (dark_mode) {
    mixer[kCrosSysInverseHoverOnSubtle] = ui::SetAlpha({kCrosRefNeutral10}, 0xF);
  } else {
    mixer[kCrosSysInverseHoverOnSubtle] = ui::SetAlpha({kCrosRefNeutral99}, 0x19);
  }
  if (dark_mode) {
    mixer[kCrosSysRipplePrimary] = ui::SetAlpha({kCrosRefPrimary60}, 0x51);
  } else {
    mixer[kCrosSysRipplePrimary] = ui::SetAlpha({kCrosRefPrimary70}, 0x51);
  }
  if (dark_mode) {
    mixer[kCrosSysRippleNeutralOnProminent] = ui::SetAlpha({kCrosRefNeutral10}, 0x14);
  } else {
    mixer[kCrosSysRippleNeutralOnProminent] = ui::SetAlpha({kCrosRefNeutral99}, 0x28);
  }
  if (dark_mode) {
    mixer[kCrosSysRippleNeutralOnSubtle] = ui::SetAlpha({kCrosRefNeutral90}, 0x28);
  } else {
    mixer[kCrosSysRippleNeutralOnSubtle] = ui::SetAlpha({kCrosRefNeutral10}, 0x1E);
  }
  if (dark_mode) {
    mixer[kCrosSysHighlightShape] = ui::SetAlpha({kCrosRefPrimary70}, 0x4C);
  } else {
    mixer[kCrosSysHighlightShape] = ui::SetAlpha({kCrosRefPrimary70}, 0x4C);
  }
  if (dark_mode) {
    mixer[kCrosSysHighlightText] = ui::SetAlpha({kCrosRefPrimary70}, 0x99);
  } else {
    mixer[kCrosSysHighlightText] = ui::SetAlpha({kCrosRefPrimary70}, 0x99);
  }
  if (dark_mode) {
    mixer[kCrosSysSystemHighlight] = ui::SetAlpha({kCrosRefNeutral100}, 0xF);
  } else {
    mixer[kCrosSysSystemHighlight] = ui::SetAlpha({kCrosRefNeutral100}, 0x28);
  }
  mixer[kCrosSysSystemBorder] = ui::SetAlpha({kCrosRefNeutral0}, 0x14);
  if (dark_mode) {
    mixer[kCrosSysSystemHighlight1] = ui::SetAlpha({kCrosRefNeutral100}, 0xF);
  } else {
    mixer[kCrosSysSystemHighlight1] = ui::SetAlpha({kCrosRefNeutral100}, 0x28);
  }
  if (dark_mode) {
    mixer[kCrosSysSystemBorder1] = ui::SetAlpha({kCrosRefNeutral0}, 0x14);
  } else {
    mixer[kCrosSysSystemBorder1] = ui::SetAlpha({kCrosRefNeutral0}, 0xF);
  }
  if (dark_mode) {
    mixer[kCrosSysFocusRing] = {kCrosRefPrimary80};
  } else {
    mixer[kCrosSysFocusRing] = {kCrosRefPrimary40};
  }
  if (dark_mode) {
    mixer[kCrosSysInverseFocusRing] = {kCrosRefPrimary40};
  } else {
    mixer[kCrosSysInverseFocusRing] = {kCrosRefPrimary80};
  }
  if (dark_mode) {
    mixer[kCrosSysFocusRingOnPrimaryContainer] = {kCrosRefPrimary40};
  } else {
    mixer[kCrosSysFocusRingOnPrimaryContainer] = {kCrosRefPrimary40};
  }
  if (dark_mode) {
    mixer[kCrosSysShadow] = {kCrosRefNeutral0};
  } else {
    mixer[kCrosSysShadow] = {kCrosRefNeutral30};
  }
  if (dark_mode) {
    mixer[kCrosSysPressedOnProminent] = ui::GetResultingPaintColor({kCrosSysHoverOnProminent}, {kCrosSysRippleNeutralOnProminent});
  } else {
    mixer[kCrosSysPressedOnProminent] = ui::GetResultingPaintColor({kCrosSysHoverOnProminent}, {kCrosSysRippleNeutralOnProminent});
  }
  if (dark_mode) {
    mixer[kCrosSysPressedOnSubtle] = ui::GetResultingPaintColor({kCrosSysHoverOnSubtle}, {kCrosSysRippleNeutralOnSubtle});
  } else {
    mixer[kCrosSysPressedOnSubtle] = ui::GetResultingPaintColor({kCrosSysHoverOnSubtle}, {kCrosSysRippleNeutralOnSubtle});
  }
  mixer[kCrosSysIlloColor1Light] = {kCrosRefPrimary30};
  mixer[kCrosSysIlloColor1Dark] = {kCrosRefPrimary80};
  if (dark_mode) {
    mixer[kCrosSysIlloColor1] = {kCrosSysIlloColor1Dark};
  } else {
    mixer[kCrosSysIlloColor1] = {kCrosSysIlloColor1Light};
  }
  mixer[kCrosSysIlloColor11Light] = {kCrosRefPrimary80};
  mixer[kCrosSysIlloColor11Dark] = {kCrosRefSecondary40};
  if (dark_mode) {
    mixer[kCrosSysIlloColor11] = {kCrosSysIlloColor11Dark};
  } else {
    mixer[kCrosSysIlloColor11] = {kCrosSysIlloColor11Light};
  }
  mixer[kCrosSysIlloColor12Light] = {kCrosRefPrimary90};
  mixer[kCrosSysIlloColor12Dark] = {kCrosRefSecondary30};
  if (dark_mode) {
    mixer[kCrosSysIlloColor12] = {kCrosSysIlloColor12Dark};
  } else {
    mixer[kCrosSysIlloColor12] = {kCrosSysIlloColor12Light};
  }
  mixer[kCrosSysIlloColor2Light] = {kCrosRefGreen60};
  mixer[kCrosSysIlloColor2Dark] = {kCrosRefGreen70};
  if (dark_mode) {
    mixer[kCrosSysIlloColor2] = {kCrosSysIlloColor2Dark};
  } else {
    mixer[kCrosSysIlloColor2] = {kCrosSysIlloColor2Light};
  }
  mixer[kCrosSysIlloColor3Light] = {kCrosRefYellow70};
  mixer[kCrosSysIlloColor3Dark] = {kCrosRefYellow80};
  if (dark_mode) {
    mixer[kCrosSysIlloColor3] = {kCrosSysIlloColor3Dark};
  } else {
    mixer[kCrosSysIlloColor3] = {kCrosSysIlloColor3Light};
  }
  mixer[kCrosSysIlloColor4Light] = {kCrosRefRed60};
  mixer[kCrosSysIlloColor4Dark] = {kCrosRefRed60};
  if (dark_mode) {
    mixer[kCrosSysIlloColor4] = {kCrosSysIlloColor4Dark};
  } else {
    mixer[kCrosSysIlloColor4] = {kCrosSysIlloColor4Light};
  }
  mixer[kCrosSysIlloColor5Light] = {kCrosRefTertiary70};
  mixer[kCrosSysIlloColor5Dark] = {kCrosRefTertiary40};
  if (dark_mode) {
    mixer[kCrosSysIlloColor5] = {kCrosSysIlloColor5Dark};
  } else {
    mixer[kCrosSysIlloColor5] = {kCrosSysIlloColor5Light};
  }
  mixer[kCrosSysIlloColor6Light] = {kCrosRefSecondary90};
  mixer[kCrosSysIlloColor6Dark] = {kCrosRefSecondary50};
  if (dark_mode) {
    mixer[kCrosSysIlloColor6] = {kCrosSysIlloColor6Dark};
  } else {
    mixer[kCrosSysIlloColor6] = {kCrosSysIlloColor6Light};
  }
  mixer[kCrosSysIlloBaseLight] = {kCrosRefSecondary100};
  mixer[kCrosSysIlloBaseDark] = {kCrosRefSecondary0};
  if (dark_mode) {
    mixer[kCrosSysIlloBase] = {kCrosSysIlloBaseDark};
  } else {
    mixer[kCrosSysIlloBase] = {kCrosSysIlloBaseLight};
  }
  mixer[kCrosSysIlloSecondaryLight] = {kCrosRefNeutralvariant90};
  mixer[kCrosSysIlloSecondaryDark] = {kCrosRefNeutralvariant40};
  if (dark_mode) {
    mixer[kCrosSysIlloSecondary] = {kCrosSysIlloSecondaryDark};
  } else {
    mixer[kCrosSysIlloSecondary] = {kCrosSysIlloSecondaryLight};
  }
  mixer[kCrosSysIlloCardColor1Light] = {SkColorSetRGB(0xFC, 0xE3, 0xE0)};
  mixer[kCrosSysIlloCardColor1Dark] = {SkColorSetRGB(0x4D, 0x27, 0x26)};
  if (dark_mode) {
    mixer[kCrosSysIlloCardColor1] = {kCrosSysIlloCardColor1Dark};
  } else {
    mixer[kCrosSysIlloCardColor1] = {kCrosSysIlloCardColor1Light};
  }
  mixer[kCrosSysIlloCardOnColor1Light] = {SkColorSetRGB(0xA5, 0xE, 0xE)};
  mixer[kCrosSysIlloCardOnColor1Dark] = {SkColorSetRGB(0xF6, 0xAE, 0xA9)};
  if (dark_mode) {
    mixer[kCrosSysIlloCardOnColor1] = {kCrosSysIlloCardOnColor1Dark};
  } else {
    mixer[kCrosSysIlloCardOnColor1] = {kCrosSysIlloCardOnColor1Light};
  }
  mixer[kCrosSysIlloCardColor2Light] = {SkColorSetRGB(0xFE, 0xF2, 0xCB)};
  mixer[kCrosSysIlloCardColor2Dark] = {SkColorSetRGB(0x44, 0x31, 0x17)};
  if (dark_mode) {
    mixer[kCrosSysIlloCardColor2] = {kCrosSysIlloCardColor2Dark};
  } else {
    mixer[kCrosSysIlloCardColor2] = {kCrosSysIlloCardColor2Light};
  }
  mixer[kCrosSysIlloCardOnColor2Light] = {SkColorSetRGB(0x9B, 0x61, 0x0)};
  mixer[kCrosSysIlloCardOnColor2Dark] = {SkColorSetRGB(0xFD, 0xE2, 0x93)};
  if (dark_mode) {
    mixer[kCrosSysIlloCardOnColor2] = {kCrosSysIlloCardOnColor2Dark};
  } else {
    mixer[kCrosSysIlloCardOnColor2] = {kCrosSysIlloCardOnColor2Light};
  }
  mixer[kCrosSysIlloCardColor3Light] = {SkColorSetRGB(0xDC, 0xF4, 0xE3)};
  mixer[kCrosSysIlloCardColor3Dark] = {SkColorSetRGB(0x16, 0x34, 0x1E)};
  if (dark_mode) {
    mixer[kCrosSysIlloCardColor3] = {kCrosSysIlloCardColor3Dark};
  } else {
    mixer[kCrosSysIlloCardColor3] = {kCrosSysIlloCardColor3Light};
  }
  mixer[kCrosSysIlloCardOnColor3Light] = {SkColorSetRGB(0xD, 0x65, 0x2D)};
  mixer[kCrosSysIlloCardOnColor3Dark] = {SkColorSetRGB(0xA8, 0xDA, 0xB5)};
  if (dark_mode) {
    mixer[kCrosSysIlloCardOnColor3] = {kCrosSysIlloCardOnColor3Dark};
  } else {
    mixer[kCrosSysIlloCardOnColor3] = {kCrosSysIlloCardOnColor3Light};
  }
  mixer[kCrosSysIlloCardColor4Light] = {SkColorSetRGB(0xD6, 0xE5, 0xFC)};
  mixer[kCrosSysIlloCardColor4Dark] = {SkColorSetRGB(0x20, 0x31, 0x4E)};
  if (dark_mode) {
    mixer[kCrosSysIlloCardColor4] = {kCrosSysIlloCardColor4Dark};
  } else {
    mixer[kCrosSysIlloCardColor4] = {kCrosSysIlloCardColor4Light};
  }
  mixer[kCrosSysIlloCardOnColor4Light] = {SkColorSetRGB(0x18, 0x5A, 0xBC)};
  mixer[kCrosSysIlloCardOnColor4Dark] = {SkColorSetRGB(0xAE, 0xCB, 0xFA)};
  if (dark_mode) {
    mixer[kCrosSysIlloCardOnColor4] = {kCrosSysIlloCardOnColor4Dark};
  } else {
    mixer[kCrosSysIlloCardOnColor4] = {kCrosSysIlloCardOnColor4Light};
  }
  mixer[kCrosSysIlloCardColor5Light] = {SkColorSetRGB(0xF4, 0xE3, 0xFE)};
  mixer[kCrosSysIlloCardColor5Dark] = {SkColorSetRGB(0x43, 0x33, 0x55)};
  if (dark_mode) {
    mixer[kCrosSysIlloCardColor5] = {kCrosSysIlloCardColor5Dark};
  } else {
    mixer[kCrosSysIlloCardColor5] = {kCrosSysIlloCardColor5Light};
  }
  mixer[kCrosSysIlloCardOnColor5Light] = {SkColorSetRGB(0x75, 0x9, 0x9B)};
  mixer[kCrosSysIlloCardOnColor5Dark] = {SkColorSetRGB(0xD7, 0xAE, 0xFB)};
  if (dark_mode) {
    mixer[kCrosSysIlloCardOnColor5] = {kCrosSysIlloCardOnColor5Dark};
  } else {
    mixer[kCrosSysIlloCardOnColor5] = {kCrosSysIlloCardOnColor5Light};
  }
  mixer[kCrosSysIlloElevatedColor11] = {kCrosSysIlloColor11};
  mixer[kCrosSysIlloElevatedColor12] = {kCrosSysIlloColor12};
  mixer[kCrosSysIlloElevatedBase] = {kCrosSysIlloBase};
  mixer[kCrosSysIlloElevatedSecondary] = {kCrosSysIlloSecondary};
  mixer[kCrosSysFileMsExcel] = {SkColorSetRGB(0x16, 0xA7, 0x65)};
  mixer[kCrosSysFileMsWord] = {SkColorSetRGB(0x49, 0x86, 0xE7)};
  mixer[kCrosSysFileMsPpt] = {SkColorSetRGB(0xFF, 0x76, 0x37)};
  if (dark_mode) {
    mixer[kCrosSysFileSite] = {SkColorSetRGB(0x8C, 0x9E, 0xFF)};
  } else {
    mixer[kCrosSysFileSite] = {SkColorSetRGB(0x47, 0x58, 0xB5)};
  }
  if (dark_mode) {
    mixer[kCrosSysFileForm] = {SkColorSetRGB(0xB4, 0x8C, 0xFF)};
  } else {
    mixer[kCrosSysFileForm] = {SkColorSetRGB(0x72, 0x48, 0xB9)};
  }
}




std::string ColorIdName(ui::ColorId id) {
  switch(id) {
    case kColorPrimaryLight:
      return "--cros-color-primary-light";
    case kColorPrimaryDark:
      return "--cros-color-primary-dark";
    case kColorPrimaryInverted:
      return "--cros-color-primary-inverted";
    case kColorPrimary:
      return "--cros-color-primary";
    case kColorSecondaryLight:
      return "--cros-color-secondary-light";
    case kColorSecondaryDark:
      return "--cros-color-secondary-dark";
    case kColorSecondary:
      return "--cros-color-secondary";
    case kColorDisabledLight:
      return "--cros-color-disabled-light";
    case kColorDisabledDark:
      return "--cros-color-disabled-dark";
    case kColorDisabled:
      return "--cros-color-disabled";
    case kColorProminentLight:
      return "--cros-color-prominent-light";
    case kColorProminentDark:
      return "--cros-color-prominent-dark";
    case kColorProminentDebug:
      return "--cros-color-prominent-debug";
    case kColorProminentInverted:
      return "--cros-color-prominent-inverted";
    case kColorProminent:
      return "--cros-color-prominent";
    case kColorAlertLight:
      return "--cros-color-alert-light";
    case kColorAlertDark:
      return "--cros-color-alert-dark";
    case kColorAlertInverted:
      return "--cros-color-alert-inverted";
    case kColorAlert:
      return "--cros-color-alert";
    case kColorWarningLight:
      return "--cros-color-warning-light";
    case kColorWarningDark:
      return "--cros-color-warning-dark";
    case kColorWarningInverted:
      return "--cros-color-warning-inverted";
    case kColorWarning:
      return "--cros-color-warning";
    case kColorPositive:
      return "--cros-color-positive";
    case kColorSelectionLight:
      return "--cros-color-selection-light";
    case kColorSelectionDark:
      return "--cros-color-selection-dark";
    case kColorSelectionDebug:
      return "--cros-color-selection-debug";
    case kColorSelection:
      return "--cros-color-selection";
    case kBgColorLight:
      return "--cros-bg-color-light";
    case kBgColorDark:
      return "--cros-bg-color-dark";
    case kBgColor:
      return "--cros-bg-color";
    case kBgColorElevation1:
      return "--cros-bg-color-elevation-1";
    case kBgColorElevation2Light:
      return "--cros-bg-color-elevation-2-light";
    case kBgColorElevation2Dark:
      return "--cros-bg-color-elevation-2-dark";
    case kBgColorElevation2Inverted:
      return "--cros-bg-color-elevation-2-inverted";
    case kBgColorElevation2:
      return "--cros-bg-color-elevation-2";
    case kBgColorElevation3:
      return "--cros-bg-color-elevation-3";
    case kBgColorElevation4:
      return "--cros-bg-color-elevation-4";
    case kBgColorElevation5:
      return "--cros-bg-color-elevation-5";
    case kBgColorDroppedElevation1:
      return "--cros-bg-color-dropped-elevation-1";
    case kBgColorDroppedElevation2:
      return "--cros-bg-color-dropped-elevation-2";
    case kTextColorPrimaryLight:
      return "--cros-text-color-primary-light";
    case kTextColorPrimaryDark:
      return "--cros-text-color-primary-dark";
    case kTextColorPrimaryDebug:
      return "--cros-text-color-primary-debug";
    case kTextColorPrimaryInverted:
      return "--cros-text-color-primary-inverted";
    case kTextColorPrimary:
      return "--cros-text-color-primary";
    case kTextColorSecondaryLight:
      return "--cros-text-color-secondary-light";
    case kTextColorSecondaryDark:
      return "--cros-text-color-secondary-dark";
    case kTextColorSecondaryDebug:
      return "--cros-text-color-secondary-debug";
    case kTextColorSecondary:
      return "--cros-text-color-secondary";
    case kTextColorDisabled:
      return "--cros-text-color-disabled";
    case kTextColorProminent:
      return "--cros-text-color-prominent";
    case kTextColorSelection:
      return "--cros-text-color-selection";
    case kTextColorPositive:
      return "--cros-text-color-positive";
    case kTextColorWarning:
      return "--cros-text-color-warning";
    case kTextColorAlert:
      return "--cros-text-color-alert";
    case kTextHighlightColor:
      return "--cros-text-highlight-color";
    case kIconColorPrimaryLight:
      return "--cros-icon-color-primary-light";
    case kIconColorPrimaryDark:
      return "--cros-icon-color-primary-dark";
    case kIconColorPrimaryDebug:
      return "--cros-icon-color-primary-debug";
    case kIconColorPrimaryInverted:
      return "--cros-icon-color-primary-inverted";
    case kIconColorPrimary:
      return "--cros-icon-color-primary";
    case kIconColorSecondaryLight:
      return "--cros-icon-color-secondary-light";
    case kIconColorSecondaryDark:
      return "--cros-icon-color-secondary-dark";
    case kIconColorSecondaryDebug:
      return "--cros-icon-color-secondary-debug";
    case kIconColorSecondary:
      return "--cros-icon-color-secondary";
    case kIconColorDisabled:
      return "--cros-icon-color-disabled";
    case kIconColorProminent:
      return "--cros-icon-color-prominent";
    case kIconColorSelection:
      return "--cros-icon-color-selection";
    case kIconColorPositive:
      return "--cros-icon-color-positive";
    case kIconColorWarning:
      return "--cros-icon-color-warning";
    case kIconColorAlert:
      return "--cros-icon-color-alert";
    case kIconColorRed:
      return "--cros-icon-color-red";
    case kIconColorBlue:
      return "--cros-icon-color-blue";
    case kIconColorGreen:
      return "--cros-icon-color-green";
    case kIconColorYellow:
      return "--cros-icon-color-yellow";
    case kAppShieldColor:
      return "--cros-app-shield-color";
    case kAppShield80:
      return "--cros-app-shield-80";
    case kAppShield60:
      return "--cros-app-shield-60";
    case kAppShield40Light:
      return "--cros-app-shield-40-light";
    case kAppShield40Dark:
      return "--cros-app-shield-40-dark";
    case kAppShield40:
      return "--cros-app-shield-40";
    case kAppShield20:
      return "--cros-app-shield-20";
    case kFocusRingColorLight:
      return "--cros-focus-ring-color-light";
    case kFocusRingColorDark:
      return "--cros-focus-ring-color-dark";
    case kFocusRingColor:
      return "--cros-focus-ring-color";
    case kFocusRingColorInactive:
      return "--cros-focus-ring-color-inactive";
    case kFocusAuraColor:
      return "--cros-focus-aura-color";
    case kSeparatorColor:
      return "--cros-separator-color";
    case kShadowColorKey:
      return "--cros-shadow-color-key";
    case kShadowColorAmbient:
      return "--cros-shadow-color-ambient";
    case kLinkColor:
      return "--cros-link-color";
    case kHighlightColor:
      return "--cros-highlight-color";
    case kHighlightColorError:
      return "--cros-highlight-color-error";
    case kHighlightColorHoverLight:
      return "--cros-highlight-color-hover-light";
    case kHighlightColorHoverDark:
      return "--cros-highlight-color-hover-dark";
    case kHighlightColorHover:
      return "--cros-highlight-color-hover";
    case kHighlightColorFocus:
      return "--cros-highlight-color-focus";
    case kHighlightColorGreen:
      return "--cros-highlight-color-green";
    case kHighlightColorRed:
      return "--cros-highlight-color-red";
    case kHighlightColorYellow:
      return "--cros-highlight-color-yellow";
    case kRippleColorLight:
      return "--cros-ripple-color-light";
    case kRippleColorDark:
      return "--cros-ripple-color-dark";
    case kRippleColor:
      return "--cros-ripple-color";
    case kRippleColorProminent:
      return "--cros-ripple-color-prominent";
    case kToolbarSearchBgColor:
      return "--cros-toolbar-search-bg-color";
    case kMenuItemBgColorFocus:
      return "--cros-menu-item-bg-color-focus";
    case kMenuItemRippleColor:
      return "--cros-menu-item-ripple-color";
    case kRadioButtonColor:
      return "--cros-radio-button-color";
    case kRadioButtonRippleColor:
      return "--cros-radio-button-ripple-color";
    case kRadioButtonColorUnchecked:
      return "--cros-radio-button-color-unchecked";
    case kRadioButtonRippleColorUnchecked:
      return "--cros-radio-button-ripple-color-unchecked";
    case kButtonBackgroundColorPrimary:
      return "--cros-button-background-color-primary";
    case kButtonLabelColorPrimary:
      return "--cros-button-label-color-primary";
    case kButtonRippleColorPrimary:
      return "--cros-button-ripple-color-primary";
    case kButtonBackgroundColorPrimaryHover:
      return "--cros-button-background-color-primary-hover";
    case kButtonBackgroundColorPrimaryHoverPreblended:
      return "--cros-button-background-color-primary-hover-preblended";
    case kButtonActiveShadowColorAmbientPrimary:
      return "--cros-button-active-shadow-color-ambient-primary";
    case kButtonActiveShadowColorKeyPrimary:
      return "--cros-button-active-shadow-color-key-primary";
    case kButtonBackgroundColorPrimaryDisabled:
      return "--cros-button-background-color-primary-disabled";
    case kButtonLabelColorPrimaryDisabled:
      return "--cros-button-label-color-primary-disabled";
    case kButtonLabelColorSecondary:
      return "--cros-button-label-color-secondary";
    case kButtonStrokeColorSecondary:
      return "--cros-button-stroke-color-secondary";
    case kButtonRippleColorSecondary:
      return "--cros-button-ripple-color-secondary";
    case kButtonStrokeColorSecondaryHover:
      return "--cros-button-stroke-color-secondary-hover";
    case kButtonBackgroundColorSecondaryHover:
      return "--cros-button-background-color-secondary-hover";
    case kButtonActiveShadowColorAmbientSecondary:
      return "--cros-button-active-shadow-color-ambient-secondary";
    case kButtonActiveShadowColorKeySecondary:
      return "--cros-button-active-shadow-color-key-secondary";
    case kButtonLabelColorSecondaryDisabled:
      return "--cros-button-label-color-secondary-disabled";
    case kButtonStrokeColorSecondaryDisabled:
      return "--cros-button-stroke-color-secondary-disabled";
    case kButtonIconColorPrimary:
      return "--cros-button-icon-color-primary";
    case kButtonIconColorPrimaryDisabled:
      return "--cros-button-icon-color-primary-disabled";
    case kButtonIconColorSecondary:
      return "--cros-button-icon-color-secondary";
    case kButtonIconColorSecondaryDisabled:
      return "--cros-button-icon-color-secondary-disabled";
    case kIconButtonBackgroundColor:
      return "--cros-icon-button-background-color";
    case kIconButtonPressedColor:
      return "--cros-icon-button-pressed-color";
    case kMenuLabelColor:
      return "--cros-menu-label-color";
    case kMenuIconColor:
      return "--cros-menu-icon-color";
    case kMenuShortcutColor:
      return "--cros-menu-shortcut-color";
    case kMenuItemBackgroundHover:
      return "--cros-menu-item-background-hover";
    case kNudgeLabelColor:
      return "--cros-nudge-label-color";
    case kNudgeIconColor:
      return "--cros-nudge-icon-color";
    case kNudgeBackgroundColor:
      return "--cros-nudge-background-color";
    case kAppScrollbarColorHover:
      return "--cros-app-scrollbar-color-hover";
    case kAppScrollbarColor:
      return "--cros-app-scrollbar-color";
    case kSliderColorActive:
      return "--cros-slider-color-active";
    case kSliderColorInactive:
      return "--cros-slider-color-inactive";
    case kSliderLabelBackgroundColor:
      return "--cros-slider-label-background-color";
    case kSliderLabelTextColor:
      return "--cros-slider-label-text-color";
    case kSliderTrackColorActive:
      return "--cros-slider-track-color-active";
    case kSliderTrackColorInactive:
      return "--cros-slider-track-color-inactive";
    case kSwitchKnobColorActive:
      return "--cros-switch-knob-color-active";
    case kSwitchKnobColorInactive:
      return "--cros-switch-knob-color-inactive";
    case kSwitchTrackColorActive:
      return "--cros-switch-track-color-active";
    case kSwitchTrackColorInactive:
      return "--cros-switch-track-color-inactive";
    case kTabLabelColorActive:
      return "--cros-tab-label-color-active";
    case kTabLabelColorInactive:
      return "--cros-tab-label-color-inactive";
    case kTabIconColorActive:
      return "--cros-tab-icon-color-active";
    case kTabIconColorInactive:
      return "--cros-tab-icon-color-inactive";
    case kTabSliderTrackColor:
      return "--cros-tab-slider-track-color";
    case kTextfieldBackgroundColor:
      return "--cros-textfield-background-color";
    case kTextfieldLabelColor:
      return "--cros-textfield-label-color";
    case kTextfieldInputColor:
      return "--cros-textfield-input-color";
    case kTextfieldCursorColorFocus:
      return "--cros-textfield-cursor-color-focus";
    case kTextfieldLabelColorFocus:
      return "--cros-textfield-label-color-focus";
    case kTextfieldLabelColorError:
      return "--cros-textfield-label-color-error";
    case kTextfieldUnderlineColorError:
      return "--cros-textfield-underline-color-error";
    case kTextfieldCursorColorError:
      return "--cros-textfield-cursor-color-error";
    case kTextfieldBackgroundColorDisabled:
      return "--cros-textfield-background-color-disabled";
    case kTextfieldLabelColorDisabled:
      return "--cros-textfield-label-color-disabled";
    case kTextfieldInputColorDisabled:
      return "--cros-textfield-input-color-disabled";
    case kTooltipBackgroundColor:
      return "--cros-tooltip-background-color";
    case kTooltipIconColor:
      return "--cros-tooltip-icon-color";
    case kTooltipLabelColor:
      return "--cros-tooltip-label-color";
    case kTooltipLinkColor:
      return "--cros-tooltip-link-color";
    case kShortcutBackgroundColor:
      return "--cros-shortcut-background-color";
    case kShortcutBackgroundGradientColor:
      return "--cros-shortcut-background-gradient-color";
    case kDialogTitleBackgroundColor:
      return "--cros-dialog-title-background-color";
    case kDialogTitleBarColorLight:
      return "--cros-dialog-title-bar-color-light";
    case kDialogTitleBarColorDark:
      return "--cros-dialog-title-bar-color-dark";
    case kDialogTitleBarColor:
      return "--cros-dialog-title-bar-color";
    case kToastBackgroundColor:
      return "--cros-toast-background-color";
    case kToastButtonColor:
      return "--cros-toast-button-color";
    case kToastTextColor:
      return "--cros-toast-text-color";
    case kToastIconColor:
      return "--cros-toast-icon-color";
    case kToastIconColorWarning:
      return "--cros-toast-icon-color-warning";
    case kToastIconColorError:
      return "--cros-toast-icon-color-error";
    case kSelectionOutline:
      return "--cros-selection-outline";
    case kSwatchBorder:
      return "--cros-swatch-border";
    case kIllustrationColor1:
      return "--cros-illustration-color-1";
    case kIllustrationColor2:
      return "--cros-illustration-color-2";
    case kIllustrationColor3:
      return "--cros-illustration-color-3";
    case kIllustrationColor4:
      return "--cros-illustration-color-4";
    case kIllustrationColor5:
      return "--cros-illustration-color-5";
    case kIllustrationColor6:
      return "--cros-illustration-color-6";
    case kIllustrationBaseColor:
      return "--cros-illustration-base-color";
    case kIllustrationSecondaryColor:
      return "--cros-illustration-secondary-color";
    case kIllustrationColor1Shade1:
      return "--cros-illustration-color-1-shade-1";
    case kIllustrationColor1Shade2:
      return "--cros-illustration-color-1-shade-2";
    case kIllustrationElevationColor1Shade1:
      return "--cros-illustration-elevation-color-1-shade-1";
    case kIllustrationElevationColor1Shade2:
      return "--cros-illustration-elevation-color-1-shade-2";
    case kIllustrationElevationBaseColor:
      return "--cros-illustration-elevation-base-color";
    case kIllustrationElevationSecondaryColor:
      return "--cros-illustration-elevation-secondary-color";
    case kColorPreviewRed:
      return "--cros-color-preview-red";
    case kColorPreviewOrange:
      return "--cros-color-preview-orange";
    case kColorPreviewYellow:
      return "--cros-color-preview-yellow";
    case kColorPreviewGreen:
      return "--cros-color-preview-green";
    case kColorPreviewCyan:
      return "--cros-color-preview-cyan";
    case kColorPreviewBlue:
      return "--cros-color-preview-blue";
    case kColorPreviewPurple:
      return "--cros-color-preview-purple";
    case kColorPreviewGrey:
      return "--cros-color-preview-grey";
    case kGoogleBlue50:
      return "--google-blue-50";
    case kGoogleBlue100:
      return "--google-blue-100";
    case kGoogleBlue200:
      return "--google-blue-200";
    case kGoogleBlue300:
      return "--google-blue-300";
    case kGoogleBlue400:
      return "--google-blue-400";
    case kGoogleBlue500:
      return "--google-blue-500";
    case kGoogleBlue600:
      return "--google-blue-600";
    case kGoogleBlue700:
      return "--google-blue-700";
    case kGoogleBlue800:
      return "--google-blue-800";
    case kGoogleBlue900:
      return "--google-blue-900";
    case kGoogleGreen50:
      return "--google-green-50";
    case kGoogleGreen100:
      return "--google-green-100";
    case kGoogleGreen200:
      return "--google-green-200";
    case kGoogleGreen300:
      return "--google-green-300";
    case kGoogleGreen400:
      return "--google-green-400";
    case kGoogleGreen500:
      return "--google-green-500";
    case kGoogleGreen600:
      return "--google-green-600";
    case kGoogleGreen700:
      return "--google-green-700";
    case kGoogleGreen800:
      return "--google-green-800";
    case kGoogleGreen900:
      return "--google-green-900";
    case kGoogleGrey50:
      return "--google-grey-50";
    case kGoogleGrey100:
      return "--google-grey-100";
    case kGoogleGrey200:
      return "--google-grey-200";
    case kGoogleGrey300:
      return "--google-grey-300";
    case kGoogleGrey400:
      return "--google-grey-400";
    case kGoogleGrey500:
      return "--google-grey-500";
    case kGoogleGrey600:
      return "--google-grey-600";
    case kGoogleGrey700:
      return "--google-grey-700";
    case kGoogleGrey800:
      return "--google-grey-800";
    case kGoogleGrey900:
      return "--google-grey-900";
    case kGoogleRed50:
      return "--google-red-50";
    case kGoogleRed100:
      return "--google-red-100";
    case kGoogleRed200:
      return "--google-red-200";
    case kGoogleRed300:
      return "--google-red-300";
    case kGoogleRed400:
      return "--google-red-400";
    case kGoogleRed500:
      return "--google-red-500";
    case kGoogleRed600:
      return "--google-red-600";
    case kGoogleRed700:
      return "--google-red-700";
    case kGoogleRed800:
      return "--google-red-800";
    case kGoogleRed900:
      return "--google-red-900";
    case kGoogleYellow50:
      return "--google-yellow-50";
    case kGoogleYellow100:
      return "--google-yellow-100";
    case kGoogleYellow200:
      return "--google-yellow-200";
    case kGoogleYellow300:
      return "--google-yellow-300";
    case kGoogleYellow400:
      return "--google-yellow-400";
    case kGoogleYellow500:
      return "--google-yellow-500";
    case kGoogleYellow600:
      return "--google-yellow-600";
    case kGoogleYellow700:
      return "--google-yellow-700";
    case kGoogleYellow800:
      return "--google-yellow-800";
    case kGoogleYellow900:
      return "--google-yellow-900";
    case kGoogleOrange50:
      return "--google-orange-50";
    case kGoogleOrange100:
      return "--google-orange-100";
    case kGoogleOrange200:
      return "--google-orange-200";
    case kGoogleOrange300:
      return "--google-orange-300";
    case kGoogleOrange400:
      return "--google-orange-400";
    case kGoogleOrange500:
      return "--google-orange-500";
    case kGoogleOrange600:
      return "--google-orange-600";
    case kGoogleOrange700:
      return "--google-orange-700";
    case kGoogleOrange800:
      return "--google-orange-800";
    case kGoogleOrange900:
      return "--google-orange-900";
    case kGooglePink50:
      return "--google-pink-50";
    case kGooglePink100:
      return "--google-pink-100";
    case kGooglePink200:
      return "--google-pink-200";
    case kGooglePink300:
      return "--google-pink-300";
    case kGooglePink400:
      return "--google-pink-400";
    case kGooglePink500:
      return "--google-pink-500";
    case kGooglePink600:
      return "--google-pink-600";
    case kGooglePink700:
      return "--google-pink-700";
    case kGooglePink800:
      return "--google-pink-800";
    case kGooglePink900:
      return "--google-pink-900";
    case kGooglePurple50:
      return "--google-purple-50";
    case kGooglePurple100:
      return "--google-purple-100";
    case kGooglePurple200:
      return "--google-purple-200";
    case kGooglePurple300:
      return "--google-purple-300";
    case kGooglePurple400:
      return "--google-purple-400";
    case kGooglePurple500:
      return "--google-purple-500";
    case kGooglePurple600:
      return "--google-purple-600";
    case kGooglePurple700:
      return "--google-purple-700";
    case kGooglePurple800:
      return "--google-purple-800";
    case kGooglePurple900:
      return "--google-purple-900";
    case kGoogleCyan50:
      return "--google-cyan-50";
    case kGoogleCyan100:
      return "--google-cyan-100";
    case kGoogleCyan200:
      return "--google-cyan-200";
    case kGoogleCyan300:
      return "--google-cyan-300";
    case kGoogleCyan400:
      return "--google-cyan-400";
    case kGoogleCyan500:
      return "--google-cyan-500";
    case kGoogleCyan600:
      return "--google-cyan-600";
    case kGoogleCyan700:
      return "--google-cyan-700";
    case kGoogleCyan800:
      return "--google-cyan-800";
    case kGoogleCyan900:
      return "--google-cyan-900";
    case kCrosRefPrimary0:
      return "--cros-ref-primary0";
    case kCrosRefPrimary10:
      return "--cros-ref-primary10";
    case kCrosRefPrimary20:
      return "--cros-ref-primary20";
    case kCrosRefPrimary30:
      return "--cros-ref-primary30";
    case kCrosRefPrimary40:
      return "--cros-ref-primary40";
    case kCrosRefPrimary50:
      return "--cros-ref-primary50";
    case kCrosRefPrimary60:
      return "--cros-ref-primary60";
    case kCrosRefPrimary70:
      return "--cros-ref-primary70";
    case kCrosRefPrimary80:
      return "--cros-ref-primary80";
    case kCrosRefPrimary90:
      return "--cros-ref-primary90";
    case kCrosRefPrimary95:
      return "--cros-ref-primary95";
    case kCrosRefPrimary99:
      return "--cros-ref-primary99";
    case kCrosRefPrimary100:
      return "--cros-ref-primary100";
    case kCrosRefSecondary0:
      return "--cros-ref-secondary0";
    case kCrosRefSecondary10:
      return "--cros-ref-secondary10";
    case kCrosRefSecondary12:
      return "--cros-ref-secondary12";
    case kCrosRefSecondary15:
      return "--cros-ref-secondary15";
    case kCrosRefSecondary20:
      return "--cros-ref-secondary20";
    case kCrosRefSecondary30:
      return "--cros-ref-secondary30";
    case kCrosRefSecondary40:
      return "--cros-ref-secondary40";
    case kCrosRefSecondary50:
      return "--cros-ref-secondary50";
    case kCrosRefSecondary60:
      return "--cros-ref-secondary60";
    case kCrosRefSecondary70:
      return "--cros-ref-secondary70";
    case kCrosRefSecondary80:
      return "--cros-ref-secondary80";
    case kCrosRefSecondary90:
      return "--cros-ref-secondary90";
    case kCrosRefSecondary95:
      return "--cros-ref-secondary95";
    case kCrosRefSecondary99:
      return "--cros-ref-secondary99";
    case kCrosRefSecondary100:
      return "--cros-ref-secondary100";
    case kCrosRefTertiary0:
      return "--cros-ref-tertiary0";
    case kCrosRefTertiary10:
      return "--cros-ref-tertiary10";
    case kCrosRefTertiary20:
      return "--cros-ref-tertiary20";
    case kCrosRefTertiary30:
      return "--cros-ref-tertiary30";
    case kCrosRefTertiary40:
      return "--cros-ref-tertiary40";
    case kCrosRefTertiary50:
      return "--cros-ref-tertiary50";
    case kCrosRefTertiary60:
      return "--cros-ref-tertiary60";
    case kCrosRefTertiary70:
      return "--cros-ref-tertiary70";
    case kCrosRefTertiary80:
      return "--cros-ref-tertiary80";
    case kCrosRefTertiary90:
      return "--cros-ref-tertiary90";
    case kCrosRefTertiary95:
      return "--cros-ref-tertiary95";
    case kCrosRefTertiary99:
      return "--cros-ref-tertiary99";
    case kCrosRefTertiary100:
      return "--cros-ref-tertiary100";
    case kCrosRefError0:
      return "--cros-ref-error0";
    case kCrosRefError10:
      return "--cros-ref-error10";
    case kCrosRefError20:
      return "--cros-ref-error20";
    case kCrosRefError30:
      return "--cros-ref-error30";
    case kCrosRefError40:
      return "--cros-ref-error40";
    case kCrosRefError50:
      return "--cros-ref-error50";
    case kCrosRefError60:
      return "--cros-ref-error60";
    case kCrosRefError70:
      return "--cros-ref-error70";
    case kCrosRefError80:
      return "--cros-ref-error80";
    case kCrosRefError90:
      return "--cros-ref-error90";
    case kCrosRefError95:
      return "--cros-ref-error95";
    case kCrosRefError99:
      return "--cros-ref-error99";
    case kCrosRefError100:
      return "--cros-ref-error100";
    case kCrosRefNeutral0:
      return "--cros-ref-neutral0";
    case kCrosRefNeutral8:
      return "--cros-ref-neutral8";
    case kCrosRefNeutral10:
      return "--cros-ref-neutral10";
    case kCrosRefNeutral20:
      return "--cros-ref-neutral20";
    case kCrosRefNeutral25:
      return "--cros-ref-neutral25";
    case kCrosRefNeutral30:
      return "--cros-ref-neutral30";
    case kCrosRefNeutral40:
      return "--cros-ref-neutral40";
    case kCrosRefNeutral50:
      return "--cros-ref-neutral50";
    case kCrosRefNeutral60:
      return "--cros-ref-neutral60";
    case kCrosRefNeutral70:
      return "--cros-ref-neutral70";
    case kCrosRefNeutral80:
      return "--cros-ref-neutral80";
    case kCrosRefNeutral90:
      return "--cros-ref-neutral90";
    case kCrosRefNeutral95:
      return "--cros-ref-neutral95";
    case kCrosRefNeutral99:
      return "--cros-ref-neutral99";
    case kCrosRefNeutral100:
      return "--cros-ref-neutral100";
    case kCrosRefNeutralvariant0:
      return "--cros-ref-neutralvariant0";
    case kCrosRefNeutralvariant10:
      return "--cros-ref-neutralvariant10";
    case kCrosRefNeutralvariant20:
      return "--cros-ref-neutralvariant20";
    case kCrosRefNeutralvariant30:
      return "--cros-ref-neutralvariant30";
    case kCrosRefNeutralvariant40:
      return "--cros-ref-neutralvariant40";
    case kCrosRefNeutralvariant50:
      return "--cros-ref-neutralvariant50";
    case kCrosRefNeutralvariant60:
      return "--cros-ref-neutralvariant60";
    case kCrosRefNeutralvariant70:
      return "--cros-ref-neutralvariant70";
    case kCrosRefNeutralvariant80:
      return "--cros-ref-neutralvariant80";
    case kCrosRefNeutralvariant90:
      return "--cros-ref-neutralvariant90";
    case kCrosRefNeutralvariant95:
      return "--cros-ref-neutralvariant95";
    case kCrosRefNeutralvariant99:
      return "--cros-ref-neutralvariant99";
    case kCrosRefNeutralvariant100:
      return "--cros-ref-neutralvariant100";
    case kCrosRefRed0:
      return "--cros-ref-red0";
    case kCrosRefRed10:
      return "--cros-ref-red10";
    case kCrosRefRed20:
      return "--cros-ref-red20";
    case kCrosRefRed30:
      return "--cros-ref-red30";
    case kCrosRefRed40:
      return "--cros-ref-red40";
    case kCrosRefRed50:
      return "--cros-ref-red50";
    case kCrosRefRed60:
      return "--cros-ref-red60";
    case kCrosRefRed70:
      return "--cros-ref-red70";
    case kCrosRefRed80:
      return "--cros-ref-red80";
    case kCrosRefRed90:
      return "--cros-ref-red90";
    case kCrosRefRed95:
      return "--cros-ref-red95";
    case kCrosRefRed99:
      return "--cros-ref-red99";
    case kCrosRefRed100:
      return "--cros-ref-red100";
    case kCrosRefBlue0:
      return "--cros-ref-blue0";
    case kCrosRefBlue10:
      return "--cros-ref-blue10";
    case kCrosRefBlue20:
      return "--cros-ref-blue20";
    case kCrosRefBlue30:
      return "--cros-ref-blue30";
    case kCrosRefBlue40:
      return "--cros-ref-blue40";
    case kCrosRefBlue50:
      return "--cros-ref-blue50";
    case kCrosRefBlue60:
      return "--cros-ref-blue60";
    case kCrosRefBlue70:
      return "--cros-ref-blue70";
    case kCrosRefBlue80:
      return "--cros-ref-blue80";
    case kCrosRefBlue90:
      return "--cros-ref-blue90";
    case kCrosRefBlue95:
      return "--cros-ref-blue95";
    case kCrosRefBlue99:
      return "--cros-ref-blue99";
    case kCrosRefBlue100:
      return "--cros-ref-blue100";
    case kCrosRefYellow0:
      return "--cros-ref-yellow0";
    case kCrosRefYellow10:
      return "--cros-ref-yellow10";
    case kCrosRefYellow20:
      return "--cros-ref-yellow20";
    case kCrosRefYellow30:
      return "--cros-ref-yellow30";
    case kCrosRefYellow40:
      return "--cros-ref-yellow40";
    case kCrosRefYellow50:
      return "--cros-ref-yellow50";
    case kCrosRefYellow60:
      return "--cros-ref-yellow60";
    case kCrosRefYellow70:
      return "--cros-ref-yellow70";
    case kCrosRefYellow80:
      return "--cros-ref-yellow80";
    case kCrosRefYellow90:
      return "--cros-ref-yellow90";
    case kCrosRefYellow95:
      return "--cros-ref-yellow95";
    case kCrosRefYellow99:
      return "--cros-ref-yellow99";
    case kCrosRefYellow100:
      return "--cros-ref-yellow100";
    case kCrosRefGreen0:
      return "--cros-ref-green0";
    case kCrosRefGreen10:
      return "--cros-ref-green10";
    case kCrosRefGreen20:
      return "--cros-ref-green20";
    case kCrosRefGreen30:
      return "--cros-ref-green30";
    case kCrosRefGreen40:
      return "--cros-ref-green40";
    case kCrosRefGreen50:
      return "--cros-ref-green50";
    case kCrosRefGreen60:
      return "--cros-ref-green60";
    case kCrosRefGreen70:
      return "--cros-ref-green70";
    case kCrosRefGreen80:
      return "--cros-ref-green80";
    case kCrosRefGreen90:
      return "--cros-ref-green90";
    case kCrosRefGreen95:
      return "--cros-ref-green95";
    case kCrosRefGreen99:
      return "--cros-ref-green99";
    case kCrosRefGreen100:
      return "--cros-ref-green100";
    case kCrosSysPrimaryLight:
      return "--cros-sys-primary-light";
    case kCrosSysPrimaryDark:
      return "--cros-sys-primary-dark";
    case kCrosSysPrimary:
      return "--cros-sys-primary";
    case kCrosSysInversePrimary:
      return "--cros-sys-inverse_primary";
    case kCrosSysOnPrimaryLight:
      return "--cros-sys-on_primary-light";
    case kCrosSysOnPrimaryDark:
      return "--cros-sys-on_primary-dark";
    case kCrosSysOnPrimary:
      return "--cros-sys-on_primary";
    case kCrosSysPrimaryContainer:
      return "--cros-sys-primary_container";
    case kCrosSysOnPrimaryContainer:
      return "--cros-sys-on_primary_container";
    case kCrosSysSecondaryLight:
      return "--cros-sys-secondary-light";
    case kCrosSysSecondaryDark:
      return "--cros-sys-secondary-dark";
    case kCrosSysSecondary:
      return "--cros-sys-secondary";
    case kCrosSysOnSecondary:
      return "--cros-sys-on_secondary";
    case kCrosSysSecondaryContainer:
      return "--cros-sys-secondary_container";
    case kCrosSysOnSecondaryContainer:
      return "--cros-sys-on_secondary_container";
    case kCrosSysTertiary:
      return "--cros-sys-tertiary";
    case kCrosSysOnTertiary:
      return "--cros-sys-on_tertiary";
    case kCrosSysTertiaryContainer:
      return "--cros-sys-tertiary_container";
    case kCrosSysOnTertiaryContainer:
      return "--cros-sys-on_tertiary_container";
    case kCrosSysError:
      return "--cros-sys-error";
    case kCrosSysOnError:
      return "--cros-sys-on_error";
    case kCrosSysErrorContainer:
      return "--cros-sys-error_container";
    case kCrosSysOnErrorContainer:
      return "--cros-sys-on_error_container";
    case kCrosSysErrorHighlight:
      return "--cros-sys-error_highlight";
    case kCrosSysSurfaceVariant:
      return "--cros-sys-surface_variant";
    case kCrosSysOnSurfaceVariantLight:
      return "--cros-sys-on_surface_variant-light";
    case kCrosSysOnSurfaceVariantDark:
      return "--cros-sys-on_surface_variant-dark";
    case kCrosSysOnSurfaceVariant:
      return "--cros-sys-on_surface_variant";
    case kCrosSysOutline:
      return "--cros-sys-outline";
    case kCrosSysSeparator:
      return "--cros-sys-separator";
    case kCrosSysWhite:
      return "--cros-sys-white";
    case kCrosSysBlack:
      return "--cros-sys-black";
    case kCrosSysHeader:
      return "--cros-sys-header";
    case kCrosSysHeaderUnfocused:
      return "--cros-sys-header_unfocused";
    case kCrosSysAppBaseShaded:
      return "--cros-sys-app_base_shaded";
    case kCrosSysAppBase:
      return "--cros-sys-app_base";
    case kCrosSysBaseElevatedLight:
      return "--cros-sys-base_elevated-light";
    case kCrosSysBaseElevatedDark:
      return "--cros-sys-base_elevated-dark";
    case kCrosSysBaseElevated:
      return "--cros-sys-base_elevated";
    case kCrosSysSystemBase:
      return "--cros-sys-system_base";
    case kCrosSysSystemBaseElevated:
      return "--cros-sys-system_base_elevated";
    case kCrosSysSystemBaseElevatedOpaque:
      return "--cros-sys-system_base_elevated_opaque";
    case kCrosSysSurface:
      return "--cros-sys-surface";
    case kCrosSysSurface1:
      return "--cros-sys-surface1";
    case kCrosSysSurface2:
      return "--cros-sys-surface2";
    case kCrosSysSurface3:
      return "--cros-sys-surface3";
    case kCrosSysSurface4:
      return "--cros-sys-surface4";
    case kCrosSysSurface5:
      return "--cros-sys-surface5";
    case kCrosSysScrim:
      return "--cros-sys-scrim";
    case kCrosSysScrim2:
      return "--cros-sys-scrim2";
    case kCrosSysDialogContainer:
      return "--cros-sys-dialog_container";
    case kCrosSysInverseSurface:
      return "--cros-sys-inverse_surface";
    case kCrosSysScrollbar:
      return "--cros-sys-scrollbar";
    case kCrosSysScrollbarHover:
      return "--cros-sys-scrollbar_hover";
    case kCrosSysScrollbarBorder:
      return "--cros-sys-scrollbar_border";
    case kCrosSysInputFieldOnShaded:
      return "--cros-sys-input_field_on_shaded";
    case kCrosSysInputFieldOnBase:
      return "--cros-sys-input_field_on_base";
    case kCrosSysSystemOnBase:
      return "--cros-sys-system_on_base";
    case kCrosSysSystemOnBaseOpaque:
      return "--cros-sys-system_on_base_opaque";
    case kCrosSysSystemOnBase1:
      return "--cros-sys-system_on_base1";
    case kCrosSysSystemPrimaryContainer:
      return "--cros-sys-system_primary_container";
    case kCrosSysSystemOnPrimaryContainer:
      return "--cros-sys-system_on_primary_container";
    case kCrosSysSystemOnPrimaryContainerDisabled:
      return "--cros-sys-system_on_primary_container_disabled";
    case kCrosSysOnPositiveContainer:
      return "--cros-sys-on_positive_container";
    case kCrosSysPositiveContainer:
      return "--cros-sys-positive_container";
    case kCrosSysPositive:
      return "--cros-sys-positive";
    case kCrosSysOnWarningContainer:
      return "--cros-sys-on_warning_container";
    case kCrosSysWarningContainer:
      return "--cros-sys-warning_container";
    case kCrosSysSystemOnWarningContainer:
      return "--cros-sys-system_on_warning_container";
    case kCrosSysSystemWarningContainer:
      return "--cros-sys-system_warning_container";
    case kCrosSysWarning:
      return "--cros-sys-warning";
    case kCrosSysOnProgressContainer:
      return "--cros-sys-on_progress_container";
    case kCrosSysProgressContainer:
      return "--cros-sys-progress_container";
    case kCrosSysProgress:
      return "--cros-sys-progress";
    case kCrosSysSystemOnNegativeContainer:
      return "--cros-sys-system_on_negative_container";
    case kCrosSysSystemNegativeContainer:
      return "--cros-sys-system_negative_container";
    case kCrosSysOnSurfaceLight:
      return "--cros-sys-on_surface-light";
    case kCrosSysOnSurfaceDark:
      return "--cros-sys-on_surface-dark";
    case kCrosSysOnSurface:
      return "--cros-sys-on_surface";
    case kCrosSysInverseOnSurface:
      return "--cros-sys-inverse_on_surface";
    case kCrosSysOnSurfaceBodytext:
      return "--cros-sys-on_surface_bodytext";
    case kCrosSysDisabled:
      return "--cros-sys-disabled";
    case kCrosSysDisabledOpaque:
      return "--cros-sys-disabled_opaque";
    case kCrosSysDisabledContainer:
      return "--cros-sys-disabled_container";
    case kCrosSysPrivacyIndicator:
      return "--cros-sys-privacy_indicator";
    case kCrosSysHoverOnProminent:
      return "--cros-sys-hover_on_prominent";
    case kCrosSysHoverOnSubtle:
      return "--cros-sys-hover_on_subtle";
    case kCrosSysInverseHoverOnSubtle:
      return "--cros-sys-inverse_hover_on_subtle";
    case kCrosSysRipplePrimary:
      return "--cros-sys-ripple_primary";
    case kCrosSysRippleNeutralOnProminent:
      return "--cros-sys-ripple_neutral_on_prominent";
    case kCrosSysRippleNeutralOnSubtle:
      return "--cros-sys-ripple_neutral_on_subtle";
    case kCrosSysHighlightShape:
      return "--cros-sys-highlight_shape";
    case kCrosSysHighlightText:
      return "--cros-sys-highlight_text";
    case kCrosSysSystemHighlight:
      return "--cros-sys-system_highlight";
    case kCrosSysSystemBorder:
      return "--cros-sys-system_border";
    case kCrosSysSystemHighlight1:
      return "--cros-sys-system_highlight1";
    case kCrosSysSystemBorder1:
      return "--cros-sys-system_border1";
    case kCrosSysFocusRing:
      return "--cros-sys-focus_ring";
    case kCrosSysInverseFocusRing:
      return "--cros-sys-inverse_focus_ring";
    case kCrosSysFocusRingOnPrimaryContainer:
      return "--cros-sys-focus_ring_on_primary_container";
    case kCrosSysShadow:
      return "--cros-sys-shadow";
    case kCrosSysPressedOnProminent:
      return "--cros-sys-pressed_on_prominent";
    case kCrosSysPressedOnSubtle:
      return "--cros-sys-pressed_on_subtle";
    case kCrosSysIlloColor1Light:
      return "--cros-sys-illo-color1-light";
    case kCrosSysIlloColor1Dark:
      return "--cros-sys-illo-color1-dark";
    case kCrosSysIlloColor1:
      return "--cros-sys-illo-color1";
    case kCrosSysIlloColor11Light:
      return "--cros-sys-illo-color1-1-light";
    case kCrosSysIlloColor11Dark:
      return "--cros-sys-illo-color1-1-dark";
    case kCrosSysIlloColor11:
      return "--cros-sys-illo-color1-1";
    case kCrosSysIlloColor12Light:
      return "--cros-sys-illo-color1-2-light";
    case kCrosSysIlloColor12Dark:
      return "--cros-sys-illo-color1-2-dark";
    case kCrosSysIlloColor12:
      return "--cros-sys-illo-color1-2";
    case kCrosSysIlloColor2Light:
      return "--cros-sys-illo-color2-light";
    case kCrosSysIlloColor2Dark:
      return "--cros-sys-illo-color2-dark";
    case kCrosSysIlloColor2:
      return "--cros-sys-illo-color2";
    case kCrosSysIlloColor3Light:
      return "--cros-sys-illo-color3-light";
    case kCrosSysIlloColor3Dark:
      return "--cros-sys-illo-color3-dark";
    case kCrosSysIlloColor3:
      return "--cros-sys-illo-color3";
    case kCrosSysIlloColor4Light:
      return "--cros-sys-illo-color4-light";
    case kCrosSysIlloColor4Dark:
      return "--cros-sys-illo-color4-dark";
    case kCrosSysIlloColor4:
      return "--cros-sys-illo-color4";
    case kCrosSysIlloColor5Light:
      return "--cros-sys-illo-color5-light";
    case kCrosSysIlloColor5Dark:
      return "--cros-sys-illo-color5-dark";
    case kCrosSysIlloColor5:
      return "--cros-sys-illo-color5";
    case kCrosSysIlloColor6Light:
      return "--cros-sys-illo-color6-light";
    case kCrosSysIlloColor6Dark:
      return "--cros-sys-illo-color6-dark";
    case kCrosSysIlloColor6:
      return "--cros-sys-illo-color6";
    case kCrosSysIlloBaseLight:
      return "--cros-sys-illo-base-light";
    case kCrosSysIlloBaseDark:
      return "--cros-sys-illo-base-dark";
    case kCrosSysIlloBase:
      return "--cros-sys-illo-base";
    case kCrosSysIlloSecondaryLight:
      return "--cros-sys-illo-secondary-light";
    case kCrosSysIlloSecondaryDark:
      return "--cros-sys-illo-secondary-dark";
    case kCrosSysIlloSecondary:
      return "--cros-sys-illo-secondary";
    case kCrosSysIlloCardColor1Light:
      return "--cros-sys-illo-card-color1-light";
    case kCrosSysIlloCardColor1Dark:
      return "--cros-sys-illo-card-color1-dark";
    case kCrosSysIlloCardColor1:
      return "--cros-sys-illo-card-color1";
    case kCrosSysIlloCardOnColor1Light:
      return "--cros-sys-illo-card-on_color1-light";
    case kCrosSysIlloCardOnColor1Dark:
      return "--cros-sys-illo-card-on_color1-dark";
    case kCrosSysIlloCardOnColor1:
      return "--cros-sys-illo-card-on_color1";
    case kCrosSysIlloCardColor2Light:
      return "--cros-sys-illo-card-color2-light";
    case kCrosSysIlloCardColor2Dark:
      return "--cros-sys-illo-card-color2-dark";
    case kCrosSysIlloCardColor2:
      return "--cros-sys-illo-card-color2";
    case kCrosSysIlloCardOnColor2Light:
      return "--cros-sys-illo-card-on_color2-light";
    case kCrosSysIlloCardOnColor2Dark:
      return "--cros-sys-illo-card-on_color2-dark";
    case kCrosSysIlloCardOnColor2:
      return "--cros-sys-illo-card-on_color2";
    case kCrosSysIlloCardColor3Light:
      return "--cros-sys-illo-card-color3-light";
    case kCrosSysIlloCardColor3Dark:
      return "--cros-sys-illo-card-color3-dark";
    case kCrosSysIlloCardColor3:
      return "--cros-sys-illo-card-color3";
    case kCrosSysIlloCardOnColor3Light:
      return "--cros-sys-illo-card-on_color3-light";
    case kCrosSysIlloCardOnColor3Dark:
      return "--cros-sys-illo-card-on_color3-dark";
    case kCrosSysIlloCardOnColor3:
      return "--cros-sys-illo-card-on_color3";
    case kCrosSysIlloCardColor4Light:
      return "--cros-sys-illo-card-color4-light";
    case kCrosSysIlloCardColor4Dark:
      return "--cros-sys-illo-card-color4-dark";
    case kCrosSysIlloCardColor4:
      return "--cros-sys-illo-card-color4";
    case kCrosSysIlloCardOnColor4Light:
      return "--cros-sys-illo-card-on_color4-light";
    case kCrosSysIlloCardOnColor4Dark:
      return "--cros-sys-illo-card-on_color4-dark";
    case kCrosSysIlloCardOnColor4:
      return "--cros-sys-illo-card-on_color4";
    case kCrosSysIlloCardColor5Light:
      return "--cros-sys-illo-card-color5-light";
    case kCrosSysIlloCardColor5Dark:
      return "--cros-sys-illo-card-color5-dark";
    case kCrosSysIlloCardColor5:
      return "--cros-sys-illo-card-color5";
    case kCrosSysIlloCardOnColor5Light:
      return "--cros-sys-illo-card-on_color5-light";
    case kCrosSysIlloCardOnColor5Dark:
      return "--cros-sys-illo-card-on_color5-dark";
    case kCrosSysIlloCardOnColor5:
      return "--cros-sys-illo-card-on_color5";
    case kCrosSysIlloElevatedColor11:
      return "--cros-sys-illo-elevated-color1-1";
    case kCrosSysIlloElevatedColor12:
      return "--cros-sys-illo-elevated-color1-2";
    case kCrosSysIlloElevatedBase:
      return "--cros-sys-illo-elevated-base";
    case kCrosSysIlloElevatedSecondary:
      return "--cros-sys-illo-elevated-secondary";
    case kCrosSysFileMsExcel:
      return "--cros-sys-file_ms_excel";
    case kCrosSysFileMsWord:
      return "--cros-sys-file_ms_word";
    case kCrosSysFileMsPpt:
      return "--cros-sys-file_ms_ppt";
    case kCrosSysFileSite:
      return "--cros-sys-file_site";
    case kCrosSysFileForm:
      return "--cros-sys-file_form";
  }
  NOTREACHED();
  return "";
}

}  // namespace cros_tokens
