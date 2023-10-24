// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// vector_icons.cc.template is used to generate vector_icons.cc. Edit the former
// rather than the latter.

#include "components/permissions/vector_icons/vector_icons.h"

#include "components/vector_icons/cc_macros.h"
#include "ui/gfx/animation/tween.h"
#include "ui/gfx/vector_icon_types.h"

#define DECLARE_VECTOR_COMMAND(x) using gfx::x;
DECLARE_VECTOR_COMMANDS

namespace permissions {

VECTOR_ICON_REP_TEMPLATE(kAccessibilityPath, CANVAS_DIMENSIONS, 32,
MOVE_TO, 16, 11.44f,
R_CUBIC_TO, -3.5f, 0, -7.2f, -0.62f, -10.27f, -1.44f,
LINE_TO, 5, 12.16f,
R_CUBIC_TO, 2.27f, 0.77f, 5.56f, 1.05f, 8, 1.34f,
V_LINE_TO, 28,
R_H_LINE_TO, 2,
R_V_LINE_TO, -7,
R_H_LINE_TO, 2,
R_V_LINE_TO, 7,
R_H_LINE_TO, 2,
V_LINE_TO, 13.5f,
R_CUBIC_TO, 2.44f, -0.29f, 5.73f, -0.57f, 8, -1.34f,
LINE_TO, 26.27f, 10,
R_CUBIC_TO, -3.07f, 0.82f, -6.77f, 1.44f, -10.27f, 1.44f,
CLOSE,
R_MOVE_TO, 0, -1.94f,
R_ARC_TO, 2.5f, 2.5f, 0, 1, 0, 0, -5,
R_ARC_TO, 2.5f, 2.5f, 0, 0, 0, 0, 5,
CLOSE)
VECTOR_ICON_TEMPLATE_CC(kAccessibilityRepList, kAccessibilityIcon, {kAccessibilityPath, std::size(kAccessibilityPath)})
VECTOR_ICON_REP_TEMPLATE(kUsbSecurityKeyPath, CANVAS_DIMENSIONS, 4,
MOVE_TO, 0.34f, 3.5f,
R_H_LINE_TO, 3.03f,
R_ARC_TO, 0.35f, 0.35f, 0, 0, 0, 0.34f, -0.35f,
V_LINE_TO, 0.68f,
R_ARC_TO, 0.35f, 0.35f, 0, 0, 0, -0.34f, -0.35f,
H_LINE_TO, 0.34f,
ARC_TO, 0.35f, 0.35f, 0, 0, 0, 0, 0.68f,
R_V_LINE_TO, 2.47f,
R_CUBIC_TO, 0, 0.19f, 0.15f, 0.35f, 0.34f, 0.35f,
CLOSE,
R_MOVE_TO, 1.52f, -0.93f,
R_H_LINE_TO, 1.32f,
R_V_LINE_TO, 0.4f,
H_LINE_TO, 1.85f,
CLOSE,
R_MOVE_TO, 0, -0.79f,
R_H_LINE_TO, 1.32f,
R_V_LINE_TO, 0.4f,
H_LINE_TO, 1.85f,
CLOSE,
R_MOVE_TO, 0, -0.93f,
R_H_LINE_TO, 1.32f,
R_V_LINE_TO, 0.4f,
H_LINE_TO, 1.85f,
CLOSE)
VECTOR_ICON_TEMPLATE_CC(kUsbSecurityKeyRepList, kUsbSecurityKeyIcon, {kUsbSecurityKeyPath, std::size(kUsbSecurityKeyPath)})

}  // namespace permissions
