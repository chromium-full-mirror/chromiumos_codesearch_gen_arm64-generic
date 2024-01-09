// Generated from generate_histograms_variants_allowlist.py. Do not edit!

#ifndef CHROME_BROWSER_UI_WEBUI_NAME_VARIANTS_H_
#define CHROME_BROWSER_UI_WEBUI_NAME_VARIANTS_H_

#include <algorithm>
#include <string_view>

namespace views_metrics {

inline constexpr std::string_view kWebUINameVariantAllowList[] = {
  "",
  ".BookmarksSidePanel",
  ".CompanionSidePanelUntrusted",
  ".Compose",
  ".CustomizeChrome",
  ".Emoji",
  ".Feed",
  ".HistoryClustersSidePanel",
  ".MakoUntrusted",
  ".PerformanceSidePanel",
  ".ReadAnythingUntrusted",
  ".ReadingList",
  ".ShoppingInsightsSidePanel",
  ".TabSearch",
  ".UserNotesSidePanel",
};

constexpr bool IsValidWebUINameVariant(std::string_view s) {
  return std::binary_search(
    std::cbegin(kWebUINameVariantAllowList),
    std::cend(kWebUINameVariantAllowList),
    s);
}

}  // namespace views_metrics

#endif  // CHROME_BROWSER_UI_WEBUI_NAME_VARIANTS_H_
