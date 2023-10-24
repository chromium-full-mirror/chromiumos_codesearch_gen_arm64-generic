// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// vector_icons.h.template is used to generate vector_icons.h. Edit the former
// rather than the latter.

#ifndef ASH_PUBLIC_CPP_APP_LIST_VECTOR_ICONS_H_
#define ASH_PUBLIC_CPP_APP_LIST_VECTOR_ICONS_H_

namespace gfx {
struct VectorIcon;
}

#define VECTOR_ICON_TEMPLATE_H(icon_name) \
extern const gfx::VectorIcon icon_name;

namespace ash {

VECTOR_ICON_TEMPLATE_H(kArrowUpIcon)
VECTOR_ICON_TEMPLATE_H(kBadgeInstantIcon)
VECTOR_ICON_TEMPLATE_H(kBadgePlayIcon)
VECTOR_ICON_TEMPLATE_H(kBadgeRatingIcon)
VECTOR_ICON_TEMPLATE_H(kBookmarkIcon)
VECTOR_ICON_TEMPLATE_H(kEqualIcon)
VECTOR_ICON_TEMPLATE_H(kGameGenericIcon)
VECTOR_ICON_TEMPLATE_H(kGoogleBlackIcon)
VECTOR_ICON_TEMPLATE_H(kHistoryIcon)
VECTOR_ICON_TEMPLATE_H(kMicBlackIcon)
VECTOR_ICON_TEMPLATE_H(kOmniboxGenericIcon)
VECTOR_ICON_TEMPLATE_H(kReleaseNotesChipIcon)
VECTOR_ICON_TEMPLATE_H(kSearchIcon)
VECTOR_ICON_TEMPLATE_H(kSearchEngineNotGoogleIcon)
VECTOR_ICON_TEMPLATE_H(kSearchResultRemoveIcon)
VECTOR_ICON_TEMPLATE_H(kVerticalBarEndIcon)
VECTOR_ICON_TEMPLATE_H(kVerticalBarMiddleIcon)
VECTOR_ICON_TEMPLATE_H(kVerticalBarSingleIcon)
VECTOR_ICON_TEMPLATE_H(kVerticalBarStartIcon)

}  // namespace ash

#undef VECTOR_ICON_TEMPLATE_H

#endif  // ASH_PUBLIC_CPP_APP_LIST_VECTOR_ICONS_H_
