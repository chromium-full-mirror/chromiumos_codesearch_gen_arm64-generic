// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/tabs.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_TABS_H__
#define CHROME_COMMON_EXTENSIONS_API_TABS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"
#include "extensions/common/api/extension_types.h"
#include "chrome/common/extensions/api/windows.h"


namespace extensions {
namespace api {
namespace extension_types {
struct ImageDetails;
}  // namespace extension_types
}  // namespace api
}  // namespace extensions

namespace extensions {
namespace api {
namespace tabs {

//
// Properties
//

// The maximum number of times that $(ref:captureVisibleTab) can be called per
// second. $(ref:captureVisibleTab) is expensive and should not be called too
// often.
extern const int MAX_CAPTURE_VISIBLE_TAB_CALLS_PER_SECOND;

// An ID that represents the absence of a browser tab.
extern const int TAB_ID_NONE;

//
// Types
//

// The tab's loading status.
enum  TabStatus {
  TAB_STATUS_NONE = 0,
  TAB_STATUS_UNLOADED,
  TAB_STATUS_LOADING,
  TAB_STATUS_COMPLETE,
  TAB_STATUS_LAST = TAB_STATUS_COMPLETE,
};


const char* ToString(TabStatus as_enum);
TabStatus ParseTabStatus(base::StringPiece as_string);
std::u16string GetTabStatusParseError(base::StringPiece as_string);

// An event that caused a muted state change.
enum  MutedInfoReason {
  MUTED_INFO_REASON_NONE = 0,
  MUTED_INFO_REASON_USER,
  MUTED_INFO_REASON_CAPTURE,
  MUTED_INFO_REASON_EXTENSION,
  MUTED_INFO_REASON_LAST = MUTED_INFO_REASON_EXTENSION,
};


const char* ToString(MutedInfoReason as_enum);
MutedInfoReason ParseMutedInfoReason(base::StringPiece as_string);
std::u16string GetMutedInfoReasonParseError(base::StringPiece as_string);

// The tab's muted state and the reason for the last state change.
struct MutedInfo {
  MutedInfo();
  ~MutedInfo();
  MutedInfo(const MutedInfo&) = delete;
  MutedInfo& operator=(const MutedInfo&) = delete;
  MutedInfo(MutedInfo&& rhs);
  MutedInfo& operator=(MutedInfo&& rhs);

  // Populates a MutedInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, MutedInfo& out);

  // Populates a MutedInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, MutedInfo& out);

  // Creates a deep copy of MutedInfo.
  MutedInfo Clone() const;

  // Creates a MutedInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<MutedInfo> FromValueDeprecated(const base::Value& value);

  // Creates a MutedInfo object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<MutedInfo> FromValue(const base::Value::Dict& value);

  // Creates a MutedInfo object from a base::Value, or nullopt on failure.
  static absl::optional<MutedInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMutedInfo object.
  base::Value::Dict ToValue() const;

  // Whether the tab is muted (prevented from playing sound). The tab may be muted
  // even if it has not played or is not currently playing sound. Equivalent to
  // whether the 'muted' audio indicator is showing.
  bool muted;

  // The reason the tab was muted or unmuted. Not set if the tab's mute state has
  // never been changed.
  MutedInfoReason reason;

  // The ID of the extension that changed the muted state. Not set if an extension
  // was not the reason the muted state last changed.
  absl::optional<std::string> extension_id;

};

struct Tab {
  Tab();
  ~Tab();
  Tab(const Tab&) = delete;
  Tab& operator=(const Tab&) = delete;
  Tab(Tab&& rhs);
  Tab& operator=(Tab&& rhs);

  // Populates a Tab object from a base::Value& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value& value, Tab& out);

  // Populates a Tab object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Tab& out);

  // Creates a deep copy of Tab.
  Tab Clone() const;

  // Creates a Tab object from a base::Value, or NULL on failure.
  static std::unique_ptr<Tab> FromValueDeprecated(const base::Value& value);

  // Creates a Tab object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<Tab> FromValue(const base::Value::Dict& value);

  // Creates a Tab object from a base::Value, or nullopt on failure.
  static absl::optional<Tab> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of thisTab
  // object.
  base::Value::Dict ToValue() const;

  // The ID of the tab. Tab IDs are unique within a browser session. Under some
  // circumstances a tab may not be assigned an ID; for example, when querying
  // foreign tabs using the $(ref:sessions) API, in which case a session ID may be
  // present. Tab ID can also be set to <code>chrome.tabs.TAB_ID_NONE</code> for
  // apps and devtools windows.
  absl::optional<int> id;

  // The zero-based index of the tab within its window.
  int index;

  // The ID of the group that the tab belongs to.
  int group_id;

  // The ID of the window that contains the tab.
  int window_id;

  // The ID of the tab that opened this tab, if any. This property is only present
  // if the opener tab still exists.
  absl::optional<int> opener_tab_id;

  // Whether the tab is selected.
  bool selected;

  // Whether the tab is highlighted.
  bool highlighted;

  // Whether the tab is active in its window. Does not necessarily mean the window
  // is focused.
  bool active;

  // Whether the tab is pinned.
  bool pinned;

  // Whether the tab has produced sound over the past couple of seconds (but it
  // might not be heard if also muted). Equivalent to whether the 'speaker audio'
  // indicator is showing.
  absl::optional<bool> audible;

  // Whether the tab is discarded. A discarded tab is one whose content has been
  // unloaded from memory, but is still visible in the tab strip. Its content is
  // reloaded the next time it is activated.
  bool discarded;

  // Whether the tab can be discarded automatically by the browser when resources
  // are low.
  bool auto_discardable;

  // The tab's muted state and the reason for the last state change.
  absl::optional<MutedInfo> muted_info;

  // The last committed URL of the main frame of the tab. This property is only
  // present if the extension's manifest includes the <code>"tabs"</code>
  // permission and may be an empty string if the tab has not yet committed. See
  // also $(ref:Tab.pendingUrl).
  absl::optional<std::string> url;

  // The URL the tab is navigating to, before it has committed. This property is
  // only present if the extension's manifest includes the <code>"tabs"</code>
  // permission and there is a pending navigation.
  absl::optional<std::string> pending_url;

  // The title of the tab. This property is only present if the extension's
  // manifest includes the <code>"tabs"</code> permission.
  absl::optional<std::string> title;

  // The URL of the tab's favicon. This property is only present if the
  // extension's manifest includes the <code>"tabs"</code> permission. It may also
  // be an empty string if the tab is loading.
  absl::optional<std::string> fav_icon_url;

  // The tab's loading status.
  TabStatus status;

  // Whether the tab is in an incognito window.
  bool incognito;

  // The width of the tab in pixels.
  absl::optional<int> width;

  // The height of the tab in pixels.
  absl::optional<int> height;

  // The session ID used to uniquely identify a tab obtained from the
  // $(ref:sessions) API.
  absl::optional<std::string> session_id;

};

// Defines how zoom changes are handled, i.e., which entity is responsible for
// the actual scaling of the page; defaults to <code>automatic</code>.
enum  ZoomSettingsMode {
  ZOOM_SETTINGS_MODE_NONE = 0,
  ZOOM_SETTINGS_MODE_AUTOMATIC,
  ZOOM_SETTINGS_MODE_MANUAL,
  ZOOM_SETTINGS_MODE_DISABLED,
  ZOOM_SETTINGS_MODE_LAST = ZOOM_SETTINGS_MODE_DISABLED,
};


const char* ToString(ZoomSettingsMode as_enum);
ZoomSettingsMode ParseZoomSettingsMode(base::StringPiece as_string);
std::u16string GetZoomSettingsModeParseError(base::StringPiece as_string);

// Defines whether zoom changes persist for the page's origin, or only take
// effect in this tab; defaults to <code>per-origin</code> when in
// <code>automatic</code> mode, and <code>per-tab</code> otherwise.
enum  ZoomSettingsScope {
  ZOOM_SETTINGS_SCOPE_NONE = 0,
  ZOOM_SETTINGS_SCOPE_PER_ORIGIN,
  ZOOM_SETTINGS_SCOPE_PER_TAB,
  ZOOM_SETTINGS_SCOPE_LAST = ZOOM_SETTINGS_SCOPE_PER_TAB,
};


const char* ToString(ZoomSettingsScope as_enum);
ZoomSettingsScope ParseZoomSettingsScope(base::StringPiece as_string);
std::u16string GetZoomSettingsScopeParseError(base::StringPiece as_string);

// Defines how zoom changes in a tab are handled and at what scope.
struct ZoomSettings {
  ZoomSettings();
  ~ZoomSettings();
  ZoomSettings(const ZoomSettings&) = delete;
  ZoomSettings& operator=(const ZoomSettings&) = delete;
  ZoomSettings(ZoomSettings&& rhs);
  ZoomSettings& operator=(ZoomSettings&& rhs);

  // Populates a ZoomSettings object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ZoomSettings& out);

  // Populates a ZoomSettings object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ZoomSettings& out);

  // Creates a deep copy of ZoomSettings.
  ZoomSettings Clone() const;

  // Creates a ZoomSettings object from a base::Value, or NULL on failure.
  static std::unique_ptr<ZoomSettings> FromValueDeprecated(const base::Value& value);

  // Creates a ZoomSettings object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ZoomSettings> FromValue(const base::Value::Dict& value);

  // Creates a ZoomSettings object from a base::Value, or nullopt on failure.
  static absl::optional<ZoomSettings> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisZoomSettings object.
  base::Value::Dict ToValue() const;

  // Defines how zoom changes are handled, i.e., which entity is responsible for
  // the actual scaling of the page; defaults to <code>automatic</code>.
  ZoomSettingsMode mode;

  // Defines whether zoom changes persist for the page's origin, or only take
  // effect in this tab; defaults to <code>per-origin</code> when in
  // <code>automatic</code> mode, and <code>per-tab</code> otherwise.
  ZoomSettingsScope scope;

  // Used to return the default zoom level for the current tab in calls to
  // tabs.getZoomSettings.
  absl::optional<double> default_zoom_factor;

};

// The type of window.
enum  WindowType {
  WINDOW_TYPE_NONE = 0,
  WINDOW_TYPE_NORMAL,
  WINDOW_TYPE_POPUP,
  WINDOW_TYPE_PANEL,
  WINDOW_TYPE_APP,
  WINDOW_TYPE_DEVTOOLS,
  WINDOW_TYPE_LAST = WINDOW_TYPE_DEVTOOLS,
};


const char* ToString(WindowType as_enum);
WindowType ParseWindowType(base::StringPiece as_string);
std::u16string GetWindowTypeParseError(base::StringPiece as_string);


//
// Functions
//

namespace Get {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  int tab_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const Tab& tab);
}  // namespace Results

}  // namespace Get

namespace GetCurrent {

namespace Results {

base::Value::List Create(const Tab& tab);
}  // namespace Results

}  // namespace GetCurrent

namespace GetSelected {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Defaults to the <a href='windows#current-window'>current window</a>.
  absl::optional<int> window_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const Tab& tab);
}  // namespace Results

}  // namespace GetSelected

namespace GetAllInWindow {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Defaults to the <a href='windows#current-window'>current window</a>.
  absl::optional<int> window_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<Tab>& tabs);
}  // namespace Results

}  // namespace GetAllInWindow

namespace Create {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  struct CreateProperties {
    CreateProperties();
    ~CreateProperties();
    CreateProperties(const CreateProperties&) = delete;
    CreateProperties& operator=(const CreateProperties&) = delete;
    CreateProperties(CreateProperties&& rhs);
    CreateProperties& operator=(CreateProperties&& rhs);

    // Populates a CreateProperties object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, CreateProperties& out);

    // Populates a CreateProperties object from a Dict& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value::Dict& value, CreateProperties& out);

    // Creates a deep copy of CreateProperties.
    CreateProperties Clone() const;

    // Creates a CreateProperties object from a base::Value::Dict, or nullopt on
    // failure.
    static absl::optional<CreateProperties> FromValue(const base::Value::Dict& value);

    // Creates a CreateProperties object from a base::Value, or nullopt on
    // failure.
    static absl::optional<CreateProperties> FromValue(const base::Value& value);

    // The window in which to create the new tab. Defaults to the <a
    // href='windows#current-window'>current window</a>.
    absl::optional<int> window_id;

    // The position the tab should take in the window. The provided value is clamped
    // to between zero and the number of tabs in the window.
    absl::optional<int> index;

    // The URL to initially navigate the tab to. Fully-qualified URLs must include a
    // scheme (i.e., 'http://www.google.com', not 'www.google.com'). Relative URLs
    // are relative to the current page within the extension. Defaults to the New
    // Tab Page.
    absl::optional<std::string> url;

    // Whether the tab should become the active tab in the window. Does not affect
    // whether the window is focused (see $(ref:windows.update)). Defaults to
    // <var>true</var>.
    absl::optional<bool> active;

    // Whether the tab should become the selected tab in the window. Defaults to
    // <var>true</var>
    absl::optional<bool> selected;

    // Whether the tab should be pinned. Defaults to <var>false</var>
    absl::optional<bool> pinned;

    // The ID of the tab that opened this tab. If specified, the opener tab must be
    // in the same window as the newly created tab.
    absl::optional<int> opener_tab_id;

  };


  CreateProperties create_properties;


 private:
  Params();
};

namespace Results {

// The created tab.
base::Value::List Create(const Tab& tab);
}  // namespace Results

}  // namespace Create

namespace Duplicate {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The ID of the tab to duplicate.
  int tab_id;


 private:
  Params();
};

namespace Results {

// Details about the duplicated tab. The $(ref:tabs.Tab) object does not contain
// <code>url</code>, <code>pendingUrl</code>, <code>title</code>, and
// <code>favIconUrl</code> if the <code>"tabs"</code> permission has not been
// requested.
base::Value::List Create(const Tab& tab);
}  // namespace Results

}  // namespace Duplicate

namespace Query {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  struct QueryInfo {
    QueryInfo();
    ~QueryInfo();
    QueryInfo(const QueryInfo&) = delete;
    QueryInfo& operator=(const QueryInfo&) = delete;
    QueryInfo(QueryInfo&& rhs);
    QueryInfo& operator=(QueryInfo&& rhs);

    // Populates a QueryInfo object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, QueryInfo& out);

    // Populates a QueryInfo object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, QueryInfo& out);

    // Creates a deep copy of QueryInfo.
    QueryInfo Clone() const;

    // Creates a QueryInfo object from a base::Value::Dict, or nullopt on failure.
    static absl::optional<QueryInfo> FromValue(const base::Value::Dict& value);

    // Creates a QueryInfo object from a base::Value, or nullopt on failure.
    static absl::optional<QueryInfo> FromValue(const base::Value& value);

    // Match tabs against one or more <a href='match_patterns'>URL patterns</a>.
    // Fragment identifiers are not matched. This property is ignored if the
    // extension does not have the <code>"tabs"</code> permission.
    struct Url {
      Url();
      ~Url();
      Url(const Url&) = delete;
      Url& operator=(const Url&) = delete;
      Url(Url&& rhs);
      Url& operator=(Url&& rhs);

      // Populates a Url object from a base::Value& instance. Returns whether |out|
      // was successfully populated.
      static bool Populate(const base::Value& value, Url& out);

      // Creates a deep copy of Url.
      Url Clone() const;

      // Creates a Url object from a base::Value, or nullopt on failure.
      static absl::optional<Url> FromValue(const base::Value& value);
      // Choices:
      absl::optional<std::string> as_string;
      absl::optional<std::vector<std::string>> as_strings;
    };


    // Whether the tabs are active in their windows.
    absl::optional<bool> active;

    // Whether the tabs are pinned.
    absl::optional<bool> pinned;

    // Whether the tabs are audible.
    absl::optional<bool> audible;

    // Whether the tabs are muted.
    absl::optional<bool> muted;

    // Whether the tabs are highlighted.
    absl::optional<bool> highlighted;

    // Whether the tabs are discarded. A discarded tab is one whose content has been
    // unloaded from memory, but is still visible in the tab strip. Its content is
    // reloaded the next time it is activated.
    absl::optional<bool> discarded;

    // Whether the tabs can be discarded automatically by the browser when resources
    // are low.
    absl::optional<bool> auto_discardable;

    // Whether the tabs are in the <a href='windows#current-window'>current
    // window</a>.
    absl::optional<bool> current_window;

    // Whether the tabs are in the last focused window.
    absl::optional<bool> last_focused_window;

    // The tab loading status.
    TabStatus status;

    // Match page titles against a pattern. This property is ignored if the
    // extension does not have the <code>"tabs"</code> permission.
    absl::optional<std::string> title;

    // Match tabs against one or more <a href='match_patterns'>URL patterns</a>.
    // Fragment identifiers are not matched. This property is ignored if the
    // extension does not have the <code>"tabs"</code> permission.
    absl::optional<Url> url;

    // The ID of the group that the tabs are in, or
    // $(ref:tabGroups.TAB_GROUP_ID_NONE) for ungrouped tabs.
    absl::optional<int> group_id;

    // The ID of the parent window, or $(ref:windows.WINDOW_ID_CURRENT) for the <a
    // href='windows#current-window'>current window</a>.
    absl::optional<int> window_id;

    // The type of window the tabs are in.
    WindowType window_type;

    // The position of the tabs within their windows.
    absl::optional<int> index;

  };


  QueryInfo query_info;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<Tab>& result);
}  // namespace Results

}  // namespace Query

namespace Highlight {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  struct HighlightInfo {
    HighlightInfo();
    ~HighlightInfo();
    HighlightInfo(const HighlightInfo&) = delete;
    HighlightInfo& operator=(const HighlightInfo&) = delete;
    HighlightInfo(HighlightInfo&& rhs);
    HighlightInfo& operator=(HighlightInfo&& rhs);

    // Populates a HighlightInfo object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, HighlightInfo& out);

    // Populates a HighlightInfo object from a Dict& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value::Dict& value, HighlightInfo& out);

    // Creates a deep copy of HighlightInfo.
    HighlightInfo Clone() const;

    // Creates a HighlightInfo object from a base::Value::Dict, or nullopt on
    // failure.
    static absl::optional<HighlightInfo> FromValue(const base::Value::Dict& value);

    // Creates a HighlightInfo object from a base::Value, or nullopt on failure.
    static absl::optional<HighlightInfo> FromValue(const base::Value& value);

    // One or more tab indices to highlight.
    struct Tabs {
      Tabs();
      ~Tabs();
      Tabs(const Tabs&) = delete;
      Tabs& operator=(const Tabs&) = delete;
      Tabs(Tabs&& rhs);
      Tabs& operator=(Tabs&& rhs);

      // Populates a Tabs object from a base::Value& instance. Returns whether |out|
      // was successfully populated.
      static bool Populate(const base::Value& value, Tabs& out);

      // Creates a deep copy of Tabs.
      Tabs Clone() const;

      // Creates a Tabs object from a base::Value, or nullopt on failure.
      static absl::optional<Tabs> FromValue(const base::Value& value);
      // Choices:
      absl::optional<std::vector<int>> as_integers;
      absl::optional<int> as_integer;
    };


    // The window that contains the tabs.
    absl::optional<int> window_id;

    // One or more tab indices to highlight.
    Tabs tabs;

  };


  HighlightInfo highlight_info;


 private:
  Params();
};

namespace Results {

// Contains details about the window whose tabs were highlighted.
base::Value::List Create(const extensions::api::windows::Window& window);
}  // namespace Results

}  // namespace Highlight

namespace Update {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  struct UpdateProperties {
    UpdateProperties();
    ~UpdateProperties();
    UpdateProperties(const UpdateProperties&) = delete;
    UpdateProperties& operator=(const UpdateProperties&) = delete;
    UpdateProperties(UpdateProperties&& rhs);
    UpdateProperties& operator=(UpdateProperties&& rhs);

    // Populates a UpdateProperties object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, UpdateProperties& out);

    // Populates a UpdateProperties object from a Dict& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value::Dict& value, UpdateProperties& out);

    // Creates a deep copy of UpdateProperties.
    UpdateProperties Clone() const;

    // Creates a UpdateProperties object from a base::Value::Dict, or nullopt on
    // failure.
    static absl::optional<UpdateProperties> FromValue(const base::Value::Dict& value);

    // Creates a UpdateProperties object from a base::Value, or nullopt on
    // failure.
    static absl::optional<UpdateProperties> FromValue(const base::Value& value);

    // A URL to navigate the tab to. JavaScript URLs are not supported; use
    // $(ref:scripting.executeScript) instead.
    absl::optional<std::string> url;

    // Whether the tab should be active. Does not affect whether the window is
    // focused (see $(ref:windows.update)).
    absl::optional<bool> active;

    // Adds or removes the tab from the current selection.
    absl::optional<bool> highlighted;

    // Whether the tab should be selected.
    absl::optional<bool> selected;

    // Whether the tab should be pinned.
    absl::optional<bool> pinned;

    // Whether the tab should be muted.
    absl::optional<bool> muted;

    // The ID of the tab that opened this tab. If specified, the opener tab must be
    // in the same window as this tab.
    absl::optional<int> opener_tab_id;

    // Whether the tab should be discarded automatically by the browser when
    // resources are low.
    absl::optional<bool> auto_discardable;

  };


  // Defaults to the selected tab of the <a href='windows#current-window'>current
  // window</a>.
  absl::optional<int> tab_id;

  UpdateProperties update_properties;


 private:
  Params();
};

namespace Results {

// Details about the updated tab. The $(ref:tabs.Tab) object does not contain
// <code>url</code>, <code>pendingUrl</code>, <code>title</code>, and
// <code>favIconUrl</code> if the <code>"tabs"</code> permission has not been
// requested.
base::Value::List Create(const Tab& tab);
}  // namespace Results

}  // namespace Update

namespace Move {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The tab ID or list of tab IDs to move.
  struct TabIds {
    TabIds();
    ~TabIds();
    TabIds(const TabIds&) = delete;
    TabIds& operator=(const TabIds&) = delete;
    TabIds(TabIds&& rhs);
    TabIds& operator=(TabIds&& rhs);

    // Populates a TabIds object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, TabIds& out);

    // Creates a deep copy of TabIds.
    TabIds Clone() const;

    // Creates a TabIds object from a base::Value, or nullopt on failure.
    static absl::optional<TabIds> FromValue(const base::Value& value);
    // Choices:
    absl::optional<int> as_integer;
    absl::optional<std::vector<int>> as_integers;
  };

  struct MoveProperties {
    MoveProperties();
    ~MoveProperties();
    MoveProperties(const MoveProperties&) = delete;
    MoveProperties& operator=(const MoveProperties&) = delete;
    MoveProperties(MoveProperties&& rhs);
    MoveProperties& operator=(MoveProperties&& rhs);

    // Populates a MoveProperties object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, MoveProperties& out);

    // Populates a MoveProperties object from a Dict& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value::Dict& value, MoveProperties& out);

    // Creates a deep copy of MoveProperties.
    MoveProperties Clone() const;

    // Creates a MoveProperties object from a base::Value::Dict, or nullopt on
    // failure.
    static absl::optional<MoveProperties> FromValue(const base::Value::Dict& value);

    // Creates a MoveProperties object from a base::Value, or nullopt on failure.
    static absl::optional<MoveProperties> FromValue(const base::Value& value);

    // Defaults to the window the tab is currently in.
    absl::optional<int> window_id;

    // The position to move the window to. Use <code>-1</code> to place the tab at
    // the end of the window.
    int index;

  };


  // The tab ID or list of tab IDs to move.
  TabIds tab_ids;

  MoveProperties move_properties;


 private:
  Params();
};

namespace Results {

// Details about the moved tabs.
struct Tabs {
  Tabs();
  ~Tabs();
  Tabs(const Tabs&) = delete;
  Tabs& operator=(const Tabs&) = delete;
  Tabs(Tabs&& rhs);
  Tabs& operator=(Tabs&& rhs);

  // Returns a new base::Value representing the serialized form of thisTabs
  // object.
  base::Value ToValue() const;
  // Choices:
  absl::optional<Tab> as_tab;
  absl::optional<std::vector<Tab>> as_tabs;
};


// Details about the moved tabs.
base::Value::List Create(const Tabs& tabs);
}  // namespace Results

}  // namespace Move

namespace Reload {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  struct ReloadProperties {
    ReloadProperties();
    ~ReloadProperties();
    ReloadProperties(const ReloadProperties&) = delete;
    ReloadProperties& operator=(const ReloadProperties&) = delete;
    ReloadProperties(ReloadProperties&& rhs);
    ReloadProperties& operator=(ReloadProperties&& rhs);

    // Populates a ReloadProperties object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, ReloadProperties& out);

    // Populates a ReloadProperties object from a Dict& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value::Dict& value, ReloadProperties& out);

    // Creates a deep copy of ReloadProperties.
    ReloadProperties Clone() const;

    // Creates a ReloadProperties object from a base::Value::Dict, or nullopt on
    // failure.
    static absl::optional<ReloadProperties> FromValue(const base::Value::Dict& value);

    // Creates a ReloadProperties object from a base::Value, or nullopt on
    // failure.
    static absl::optional<ReloadProperties> FromValue(const base::Value& value);

    // Whether to bypass local caching. Defaults to <code>false</code>.
    absl::optional<bool> bypass_cache;

  };


  // The ID of the tab to reload; defaults to the selected tab of the current
  // window.
  absl::optional<int> tab_id;

  absl::optional<ReloadProperties> reload_properties;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Reload

namespace Remove {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The tab ID or list of tab IDs to close.
  struct TabIds {
    TabIds();
    ~TabIds();
    TabIds(const TabIds&) = delete;
    TabIds& operator=(const TabIds&) = delete;
    TabIds(TabIds&& rhs);
    TabIds& operator=(TabIds&& rhs);

    // Populates a TabIds object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, TabIds& out);

    // Creates a deep copy of TabIds.
    TabIds Clone() const;

    // Creates a TabIds object from a base::Value, or nullopt on failure.
    static absl::optional<TabIds> FromValue(const base::Value& value);
    // Choices:
    absl::optional<int> as_integer;
    absl::optional<std::vector<int>> as_integers;
  };


  // The tab ID or list of tab IDs to close.
  TabIds tab_ids;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Remove

namespace Group {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  struct Options {
    Options();
    ~Options();
    Options(const Options&) = delete;
    Options& operator=(const Options&) = delete;
    Options(Options&& rhs);
    Options& operator=(Options&& rhs);

    // Populates a Options object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Options& out);

    // Populates a Options object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Options& out);

    // Creates a deep copy of Options.
    Options Clone() const;

    // Creates a Options object from a base::Value::Dict, or nullopt on failure.
    static absl::optional<Options> FromValue(const base::Value::Dict& value);

    // Creates a Options object from a base::Value, or nullopt on failure.
    static absl::optional<Options> FromValue(const base::Value& value);

    // The tab ID or list of tab IDs to add to the specified group.
    struct TabIds {
      TabIds();
      ~TabIds();
      TabIds(const TabIds&) = delete;
      TabIds& operator=(const TabIds&) = delete;
      TabIds(TabIds&& rhs);
      TabIds& operator=(TabIds&& rhs);

      // Populates a TabIds object from a base::Value& instance. Returns whether
      // |out| was successfully populated.
      static bool Populate(const base::Value& value, TabIds& out);

      // Creates a deep copy of TabIds.
      TabIds Clone() const;

      // Creates a TabIds object from a base::Value, or nullopt on failure.
      static absl::optional<TabIds> FromValue(const base::Value& value);
      // Choices:
      absl::optional<int> as_integer;
      absl::optional<std::vector<int>> as_integers;
    };

    // Configurations for creating a group. Cannot be used if groupId is already
    // specified.
    struct CreateProperties {
      CreateProperties();
      ~CreateProperties();
      CreateProperties(const CreateProperties&) = delete;
      CreateProperties& operator=(const CreateProperties&) = delete;
      CreateProperties(CreateProperties&& rhs);
      CreateProperties& operator=(CreateProperties&& rhs);

      // Populates a CreateProperties object from a base::Value& instance. Returns
      // whether |out| was successfully populated.
      static bool Populate(const base::Value& value, CreateProperties& out);

      // Populates a CreateProperties object from a Dict& instance. Returns whether
      // |out| was successfully populated.
      static bool Populate(const base::Value::Dict& value, CreateProperties& out);

      // Creates a deep copy of CreateProperties.
      CreateProperties Clone() const;

      // Creates a CreateProperties object from a base::Value::Dict, or nullopt on
      // failure.
      static absl::optional<CreateProperties> FromValue(const base::Value::Dict& value);

      // Creates a CreateProperties object from a base::Value, or nullopt on
      // failure.
      static absl::optional<CreateProperties> FromValue(const base::Value& value);

      // The window of the new group. Defaults to the current window.
      absl::optional<int> window_id;

    };


    // The tab ID or list of tab IDs to add to the specified group.
    TabIds tab_ids;

    // The ID of the group to add the tabs to. If not specified, a new group will be
    // created.
    absl::optional<int> group_id;

    // Configurations for creating a group. Cannot be used if groupId is already
    // specified.
    absl::optional<CreateProperties> create_properties;

  };


  Options options;


 private:
  Params();
};

namespace Results {

// The ID of the group that the tabs were added to.
base::Value::List Create(int group_id);
}  // namespace Results

}  // namespace Group

namespace Ungroup {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The tab ID or list of tab IDs to remove from their respective groups.
  struct TabIds {
    TabIds();
    ~TabIds();
    TabIds(const TabIds&) = delete;
    TabIds& operator=(const TabIds&) = delete;
    TabIds(TabIds&& rhs);
    TabIds& operator=(TabIds&& rhs);

    // Populates a TabIds object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, TabIds& out);

    // Creates a deep copy of TabIds.
    TabIds Clone() const;

    // Creates a TabIds object from a base::Value, or nullopt on failure.
    static absl::optional<TabIds> FromValue(const base::Value& value);
    // Choices:
    absl::optional<int> as_integer;
    absl::optional<std::vector<int>> as_integers;
  };


  // The tab ID or list of tab IDs to remove from their respective groups.
  TabIds tab_ids;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Ungroup

namespace DetectLanguage {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Defaults to the active tab of the <a href='windows#current-window'>current
  // window</a>.
  absl::optional<int> tab_id;


 private:
  Params();
};

namespace Results {

// An ISO language code such as <code>en</code> or <code>fr</code>. For a
// complete list of languages supported by this method, see <a
// href='http://src.chromium.org/viewvc/chrome/trunk/src/third_party/cld/languages/internal/languages.cc'>kLanguageInfoTable</a>. The second to fourth columns are checked and the first non-NULL value is returned, except for Simplified Chinese for which <code>zh-CN</code> is returned. For an unknown/undefined language, <code>und</code> is returned.
base::Value::List Create(const std::string& language);
}  // namespace Results

}  // namespace DetectLanguage

namespace CaptureVisibleTab {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The target window. Defaults to the <a href='windows#current-window'>current
  // window</a>.
  absl::optional<int> window_id;

  absl::optional<extensions::api::extension_types::ImageDetails> options;


 private:
  Params();
};

namespace Results {

// A data URL that encodes an image of the visible area of the captured tab. May
// be assigned to the 'src' property of an HTML <code>img</code> element for
// display.
base::Value::List Create(const std::string& data_url);
}  // namespace Results

}  // namespace CaptureVisibleTab

namespace ExecuteScript {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The ID of the tab in which to run the script; defaults to the active tab of
  // the current window.
  absl::optional<int> tab_id;

  // Details of the script to run. Either the code or the file property must be
  // set, but both may not be set at the same time.
  extensions::api::extension_types::InjectDetails details;


 private:
  Params();
};

namespace Results {

// The result of the script in every injected frame.
base::Value::List Create(const base::Value::List& result);
}  // namespace Results

}  // namespace ExecuteScript

namespace InsertCSS {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The ID of the tab in which to insert the CSS; defaults to the active tab of
  // the current window.
  absl::optional<int> tab_id;

  // Details of the CSS text to insert. Either the code or the file property must
  // be set, but both may not be set at the same time.
  extensions::api::extension_types::InjectDetails details;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace InsertCSS

namespace RemoveCSS {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The ID of the tab from which to remove the CSS; defaults to the active tab of
  // the current window.
  absl::optional<int> tab_id;

  // Details of the CSS text to remove. Either the code or the file property must
  // be set, but both may not be set at the same time.
  extensions::api::extension_types::DeleteInjectionDetails details;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RemoveCSS

namespace SetZoom {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The ID of the tab to zoom; defaults to the active tab of the current window.
  absl::optional<int> tab_id;

  // The new zoom factor. A value of <code>0</code> sets the tab to its current
  // default zoom factor. Values greater than <code>0</code> specify a (possibly
  // non-default) zoom factor for the tab.
  double zoom_factor;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetZoom

namespace GetZoom {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The ID of the tab to get the current zoom factor from; defaults to the active
  // tab of the current window.
  absl::optional<int> tab_id;


 private:
  Params();
};

namespace Results {

// The tab's current zoom factor.
base::Value::List Create(double zoom_factor);
}  // namespace Results

}  // namespace GetZoom

namespace SetZoomSettings {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The ID of the tab to change the zoom settings for; defaults to the active tab
  // of the current window.
  absl::optional<int> tab_id;

  // Defines how zoom changes are handled and at what scope.
  ZoomSettings zoom_settings;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetZoomSettings

namespace GetZoomSettings {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The ID of the tab to get the current zoom settings from; defaults to the
  // active tab of the current window.
  absl::optional<int> tab_id;


 private:
  Params();
};

namespace Results {

// The tab's current zoom settings.
base::Value::List Create(const ZoomSettings& zoom_settings);
}  // namespace Results

}  // namespace GetZoomSettings

namespace Discard {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The ID of the tab to be discarded. If specified, the tab is discarded unless
  // it is active or already discarded. If omitted, the browser discards the least
  // important tab. This can fail if no discardable tabs exist.
  absl::optional<int> tab_id;


 private:
  Params();
};

namespace Results {

// The discarded tab, if it was successfully discarded; undefined otherwise.
base::Value::List Create(const Tab& tab);
}  // namespace Results

}  // namespace Discard

namespace GoForward {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The ID of the tab to navigate forward; defaults to the selected tab of the
  // current window.
  absl::optional<int> tab_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace GoForward

namespace GoBack {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The ID of the tab to navigate back; defaults to the selected tab of the
  // current window.
  absl::optional<int> tab_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace GoBack

//
// Events
//

namespace OnCreated {

extern const char kEventName[];  // "tabs.onCreated"

// Details of the tab that was created.
base::Value::List Create(const Tab& tab);
}  // namespace OnCreated

namespace OnUpdated {

extern const char kEventName[];  // "tabs.onUpdated"

// Lists the changes to the state of the tab that was updated.
struct ChangeInfo {
  ChangeInfo();
  ~ChangeInfo();
  ChangeInfo(const ChangeInfo&) = delete;
  ChangeInfo& operator=(const ChangeInfo&) = delete;
  ChangeInfo(ChangeInfo&& rhs);
  ChangeInfo& operator=(ChangeInfo&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisChangeInfo object.
  base::Value::Dict ToValue() const;

  // The tab's loading status.
  TabStatus status;

  // The tab's URL if it has changed.
  absl::optional<std::string> url;

  // The tab's new group.
  absl::optional<int> group_id;

  // The tab's new pinned state.
  absl::optional<bool> pinned;

  // The tab's new audible state.
  absl::optional<bool> audible;

  // The tab's new discarded state.
  absl::optional<bool> discarded;

  // The tab's new auto-discardable state.
  absl::optional<bool> auto_discardable;

  // The tab's new muted state and the reason for the change.
  absl::optional<MutedInfo> muted_info;

  // The tab's new favicon URL.
  absl::optional<std::string> fav_icon_url;

  // The tab's new title.
  absl::optional<std::string> title;

};


// Lists the changes to the state of the tab that was updated.
// Gives the state of the tab that was updated.
base::Value::List Create(int tab_id, const ChangeInfo& change_info, const Tab& tab);
}  // namespace OnUpdated

namespace OnMoved {

extern const char kEventName[];  // "tabs.onMoved"

struct MoveInfo {
  MoveInfo();
  ~MoveInfo();
  MoveInfo(const MoveInfo&) = delete;
  MoveInfo& operator=(const MoveInfo&) = delete;
  MoveInfo(MoveInfo&& rhs);
  MoveInfo& operator=(MoveInfo&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMoveInfo object.
  base::Value::Dict ToValue() const;

  int window_id;

  int from_index;

  int to_index;

};


base::Value::List Create(int tab_id, const MoveInfo& move_info);
}  // namespace OnMoved

namespace OnSelectionChanged {

extern const char kEventName[];  // "tabs.onSelectionChanged"

struct SelectInfo {
  SelectInfo();
  ~SelectInfo();
  SelectInfo(const SelectInfo&) = delete;
  SelectInfo& operator=(const SelectInfo&) = delete;
  SelectInfo(SelectInfo&& rhs);
  SelectInfo& operator=(SelectInfo&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSelectInfo object.
  base::Value::Dict ToValue() const;

  // The ID of the window the selected tab changed inside of.
  int window_id;

};


// The ID of the tab that has become active.
base::Value::List Create(int tab_id, const SelectInfo& select_info);
}  // namespace OnSelectionChanged

namespace OnActiveChanged {

extern const char kEventName[];  // "tabs.onActiveChanged"

struct SelectInfo {
  SelectInfo();
  ~SelectInfo();
  SelectInfo(const SelectInfo&) = delete;
  SelectInfo& operator=(const SelectInfo&) = delete;
  SelectInfo(SelectInfo&& rhs);
  SelectInfo& operator=(SelectInfo&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSelectInfo object.
  base::Value::Dict ToValue() const;

  // The ID of the window the selected tab changed inside of.
  int window_id;

};


// The ID of the tab that has become active.
base::Value::List Create(int tab_id, const SelectInfo& select_info);
}  // namespace OnActiveChanged

namespace OnActivated {

extern const char kEventName[];  // "tabs.onActivated"

struct ActiveInfo {
  ActiveInfo();
  ~ActiveInfo();
  ActiveInfo(const ActiveInfo&) = delete;
  ActiveInfo& operator=(const ActiveInfo&) = delete;
  ActiveInfo(ActiveInfo&& rhs);
  ActiveInfo& operator=(ActiveInfo&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisActiveInfo object.
  base::Value::Dict ToValue() const;

  // The ID of the tab that has become active.
  int tab_id;

  // The ID of the window the active tab changed inside of.
  int window_id;

};


base::Value::List Create(const ActiveInfo& active_info);
}  // namespace OnActivated

namespace OnHighlightChanged {

extern const char kEventName[];  // "tabs.onHighlightChanged"

struct SelectInfo {
  SelectInfo();
  ~SelectInfo();
  SelectInfo(const SelectInfo&) = delete;
  SelectInfo& operator=(const SelectInfo&) = delete;
  SelectInfo(SelectInfo&& rhs);
  SelectInfo& operator=(SelectInfo&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSelectInfo object.
  base::Value::Dict ToValue() const;

  // The window whose tabs changed.
  int window_id;

  // All highlighted tabs in the window.
  std::vector<int> tab_ids;

};


base::Value::List Create(const SelectInfo& select_info);
}  // namespace OnHighlightChanged

namespace OnHighlighted {

extern const char kEventName[];  // "tabs.onHighlighted"

struct HighlightInfo {
  HighlightInfo();
  ~HighlightInfo();
  HighlightInfo(const HighlightInfo&) = delete;
  HighlightInfo& operator=(const HighlightInfo&) = delete;
  HighlightInfo(HighlightInfo&& rhs);
  HighlightInfo& operator=(HighlightInfo&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisHighlightInfo object.
  base::Value::Dict ToValue() const;

  // The window whose tabs changed.
  int window_id;

  // All highlighted tabs in the window.
  std::vector<int> tab_ids;

};


base::Value::List Create(const HighlightInfo& highlight_info);
}  // namespace OnHighlighted

namespace OnDetached {

extern const char kEventName[];  // "tabs.onDetached"

struct DetachInfo {
  DetachInfo();
  ~DetachInfo();
  DetachInfo(const DetachInfo&) = delete;
  DetachInfo& operator=(const DetachInfo&) = delete;
  DetachInfo(DetachInfo&& rhs);
  DetachInfo& operator=(DetachInfo&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDetachInfo object.
  base::Value::Dict ToValue() const;

  int old_window_id;

  int old_position;

};


base::Value::List Create(int tab_id, const DetachInfo& detach_info);
}  // namespace OnDetached

namespace OnAttached {

extern const char kEventName[];  // "tabs.onAttached"

struct AttachInfo {
  AttachInfo();
  ~AttachInfo();
  AttachInfo(const AttachInfo&) = delete;
  AttachInfo& operator=(const AttachInfo&) = delete;
  AttachInfo(AttachInfo&& rhs);
  AttachInfo& operator=(AttachInfo&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAttachInfo object.
  base::Value::Dict ToValue() const;

  int new_window_id;

  int new_position;

};


base::Value::List Create(int tab_id, const AttachInfo& attach_info);
}  // namespace OnAttached

namespace OnRemoved {

extern const char kEventName[];  // "tabs.onRemoved"

struct RemoveInfo {
  RemoveInfo();
  ~RemoveInfo();
  RemoveInfo(const RemoveInfo&) = delete;
  RemoveInfo& operator=(const RemoveInfo&) = delete;
  RemoveInfo(RemoveInfo&& rhs);
  RemoveInfo& operator=(RemoveInfo&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRemoveInfo object.
  base::Value::Dict ToValue() const;

  // The window whose tab is closed.
  int window_id;

  // True when the tab was closed because its parent window was closed.
  bool is_window_closing;

};


base::Value::List Create(int tab_id, const RemoveInfo& remove_info);
}  // namespace OnRemoved

namespace OnReplaced {

extern const char kEventName[];  // "tabs.onReplaced"

base::Value::List Create(int added_tab_id, int removed_tab_id);
}  // namespace OnReplaced

namespace OnZoomChange {

extern const char kEventName[];  // "tabs.onZoomChange"

struct ZoomChangeInfo {
  ZoomChangeInfo();
  ~ZoomChangeInfo();
  ZoomChangeInfo(const ZoomChangeInfo&) = delete;
  ZoomChangeInfo& operator=(const ZoomChangeInfo&) = delete;
  ZoomChangeInfo(ZoomChangeInfo&& rhs);
  ZoomChangeInfo& operator=(ZoomChangeInfo&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisZoomChangeInfo object.
  base::Value::Dict ToValue() const;

  int tab_id;

  double old_zoom_factor;

  double new_zoom_factor;

  ZoomSettings zoom_settings;

};


base::Value::List Create(const ZoomChangeInfo& zoom_change_info);
}  // namespace OnZoomChange

}  // namespace tabs
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_TABS_H__
