// Generated from generate_histograms_variants_allowlist.py. Do not edit!

#ifndef UI_VIEWS_BUBBLE_HISTOGRAMS_VARIANT_H_
#define UI_VIEWS_BUBBLE_HISTOGRAMS_VARIANT_H_

#include <algorithm>
#include <string_view>

namespace views_metrics {

inline constexpr std::string_view kBubbleNameVariantAllowList[] = {
  "All",
  "DownloadBubbleContentsView",
  "ExtensionsMenuView",
  "PageInfoBubbleViewBase",
  "PermissionPromptBaseView",
  "ProfileMenuViewBase",
};

constexpr bool IsValidBubbleNameVariant(std::string_view s) {
  return std::binary_search(
    std::cbegin(kBubbleNameVariantAllowList),
    std::cend(kBubbleNameVariantAllowList),
    s);
}

}  // namespace views_metrics

#endif  // UI_VIEWS_BUBBLE_HISTOGRAMS_VARIANT_H_
