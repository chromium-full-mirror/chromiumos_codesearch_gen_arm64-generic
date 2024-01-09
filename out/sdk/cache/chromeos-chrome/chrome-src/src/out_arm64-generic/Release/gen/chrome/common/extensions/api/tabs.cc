// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/tabs.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/tabs.h"

#include <memory>
#include <optional>
#include <ostream>
#include <string>
#include <utility>
#include <vector>

#include "base/check.h"
#include "base/check_op.h"
#include "base/notreached.h"
#include "base/strings/string_number_conversions.h"
#include "base/strings/utf_string_conversions.h"
#include "base/values.h"
#include "tools/json_schema_compiler/util.h"
#include "base/strings/string_piece.h"
#include "extensions/common/api/extension_types.h"
#include "chrome/common/extensions/api/windows.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace tabs {
//
// Properties
//

const int MAX_CAPTURE_VISIBLE_TAB_CALLS_PER_SECOND = 2;

const int TAB_ID_NONE = -1;

//
// Types
//

const char* ToString(TabStatus enum_param) {
  switch (enum_param) {
    case TabStatus::kUnloaded:
      return "unloaded";
    case TabStatus::kLoading:
      return "loading";
    case TabStatus::kComplete:
      return "complete";
    case TabStatus::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

TabStatus ParseTabStatus(base::StringPiece enum_string) {
  if (enum_string == "unloaded")
    return TabStatus::kUnloaded;
  if (enum_string == "loading")
    return TabStatus::kLoading;
  if (enum_string == "complete")
    return TabStatus::kComplete;
  return TabStatus::kNone;
}

std::u16string GetTabStatusParseError(base::StringPiece enum_string) {
  return u"expected \"unloaded\" or \"loading\" or \"complete\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(MutedInfoReason enum_param) {
  switch (enum_param) {
    case MutedInfoReason::kUser:
      return "user";
    case MutedInfoReason::kCapture:
      return "capture";
    case MutedInfoReason::kExtension:
      return "extension";
    case MutedInfoReason::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

MutedInfoReason ParseMutedInfoReason(base::StringPiece enum_string) {
  if (enum_string == "user")
    return MutedInfoReason::kUser;
  if (enum_string == "capture")
    return MutedInfoReason::kCapture;
  if (enum_string == "extension")
    return MutedInfoReason::kExtension;
  return MutedInfoReason::kNone;
}

std::u16string GetMutedInfoReasonParseError(base::StringPiece enum_string) {
  return u"expected \"user\" or \"capture\" or \"extension\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


MutedInfo::MutedInfo()
: muted(false),
reason() {}

MutedInfo::~MutedInfo() = default;
MutedInfo::MutedInfo(MutedInfo&& rhs) noexcept = default;
MutedInfo& MutedInfo::operator=(MutedInfo&& rhs) noexcept = default;
MutedInfo MutedInfo::Clone() const {
  MutedInfo out;
  out.muted = muted;
  out.reason = reason;
  out.extension_id = extension_id;
  return out;
}

// static
bool MutedInfo::Populate(
    const base::Value::Dict& dict, MutedInfo& out) {
  out.reason = MutedInfoReason();
  const base::Value* muted_value = dict.Find("muted");
  if (!muted_value) {
    return false;
  }
  {
    auto temp = (*muted_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.muted = *temp;
  }

  const base::Value* reason_value = dict.Find("reason");
  if (reason_value) {
    {
      const std::string* muted_info_reason_as_string = (*reason_value).GetIfString();
      if (!muted_info_reason_as_string) {
        return false;
      }
      out.reason = ParseMutedInfoReason(*muted_info_reason_as_string);
      if (out.reason == MutedInfoReason()) {
        return false;
      }
    }
    } else {
    out.reason = MutedInfoReason();
  }

  const base::Value* extension_id_value = dict.Find("extensionId");
  if (extension_id_value) {
    {
      auto* temp = (*extension_id_value).GetIfString();
      if (!temp) {
        out.extension_id = std::nullopt;
        return false;
      }
      out.extension_id = *temp;
    }
  }

  return true;
}

// static
bool MutedInfo::Populate(
    const base::Value& value, MutedInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<MutedInfo> MutedInfo::FromValue(const base::Value::Dict& value) {
  MutedInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<MutedInfo> MutedInfo::FromValue(const base::Value& value) {
  MutedInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict MutedInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("muted", this->muted);

  if (this->reason != MutedInfoReason()) {
    to_value_result.Set("reason", tabs::ToString(this->reason));

  }
  if (this->extension_id) {
    to_value_result.Set("extensionId", *this->extension_id);

  }

  return to_value_result;
}


Tab::Tab()
: index(0),
group_id(0),
window_id(0),
selected(false),
highlighted(false),
active(false),
pinned(false),
discarded(false),
auto_discardable(false),
status(),
incognito(false) {}

Tab::~Tab() = default;
Tab::Tab(Tab&& rhs) noexcept = default;
Tab& Tab::operator=(Tab&& rhs) noexcept = default;
Tab Tab::Clone() const {
  Tab out;
  out.id = id;
  out.index = index;
  out.group_id = group_id;
  out.window_id = window_id;
  out.opener_tab_id = opener_tab_id;
  out.selected = selected;
  out.last_accessed = last_accessed;
  out.highlighted = highlighted;
  out.active = active;
  out.pinned = pinned;
  out.audible = audible;
  out.discarded = discarded;
  out.auto_discardable = auto_discardable;
  if (muted_info) {
    out.muted_info = muted_info->Clone();
  }
  out.url = url;
  out.pending_url = pending_url;
  out.title = title;
  out.fav_icon_url = fav_icon_url;
  out.status = status;
  out.incognito = incognito;
  out.width = width;
  out.height = height;
  out.session_id = session_id;
  return out;
}

// static
bool Tab::Populate(
    const base::Value::Dict& dict, Tab& out) {
  out.status = TabStatus();
  const base::Value* id_value = dict.Find("id");
  if (id_value) {
    {
      auto temp = (*id_value).GetIfInt();
      if (!temp.has_value()) {
        out.id = std::nullopt;
        return false;
      }
      out.id = *temp;
    }
  }

  const base::Value* index_value = dict.Find("index");
  if (!index_value) {
    return false;
  }
  {
    auto temp = (*index_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.index = *temp;
  }

  const base::Value* group_id_value = dict.Find("groupId");
  if (!group_id_value) {
    return false;
  }
  {
    auto temp = (*group_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.group_id = *temp;
  }

  const base::Value* window_id_value = dict.Find("windowId");
  if (!window_id_value) {
    return false;
  }
  {
    auto temp = (*window_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.window_id = *temp;
  }

  const base::Value* opener_tab_id_value = dict.Find("openerTabId");
  if (opener_tab_id_value) {
    {
      auto temp = (*opener_tab_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.opener_tab_id = std::nullopt;
        return false;
      }
      out.opener_tab_id = *temp;
    }
  }

  const base::Value* selected_value = dict.Find("selected");
  if (!selected_value) {
    return false;
  }
  {
    auto temp = (*selected_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.selected = *temp;
  }

  const base::Value* last_accessed_value = dict.Find("lastAccessed");
  if (last_accessed_value) {
    {
      auto temp = (*last_accessed_value).GetIfDouble();
      if (!temp.has_value()) {
        out.last_accessed = std::nullopt;
        return false;
      }
      out.last_accessed = *temp;
    }
  }

  const base::Value* highlighted_value = dict.Find("highlighted");
  if (!highlighted_value) {
    return false;
  }
  {
    auto temp = (*highlighted_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.highlighted = *temp;
  }

  const base::Value* active_value = dict.Find("active");
  if (!active_value) {
    return false;
  }
  {
    auto temp = (*active_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.active = *temp;
  }

  const base::Value* pinned_value = dict.Find("pinned");
  if (!pinned_value) {
    return false;
  }
  {
    auto temp = (*pinned_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.pinned = *temp;
  }

  const base::Value* audible_value = dict.Find("audible");
  if (audible_value) {
    {
      auto temp = (*audible_value).GetIfBool();
      if (!temp.has_value()) {
        out.audible = std::nullopt;
        return false;
      }
      out.audible = *temp;
    }
  }

  const base::Value* discarded_value = dict.Find("discarded");
  if (!discarded_value) {
    return false;
  }
  {
    auto temp = (*discarded_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.discarded = *temp;
  }

  const base::Value* auto_discardable_value = dict.Find("autoDiscardable");
  if (!auto_discardable_value) {
    return false;
  }
  {
    auto temp = (*auto_discardable_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.auto_discardable = *temp;
  }

  const base::Value* muted_info_value = dict.Find("mutedInfo");
  if (muted_info_value) {
    {
      if (!(*muted_info_value).is_dict()) {
        return false;
      }
      else {
        MutedInfo temp;
        if (!MutedInfo::Populate((*muted_info_value).GetDict(), temp))
          return false;
        out.muted_info = std::move(temp);
      }
    }
  }

  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    {
      auto* temp = (*url_value).GetIfString();
      if (!temp) {
        out.url = std::nullopt;
        return false;
      }
      out.url = *temp;
    }
  }

  const base::Value* pending_url_value = dict.Find("pendingUrl");
  if (pending_url_value) {
    {
      auto* temp = (*pending_url_value).GetIfString();
      if (!temp) {
        out.pending_url = std::nullopt;
        return false;
      }
      out.pending_url = *temp;
    }
  }

  const base::Value* title_value = dict.Find("title");
  if (title_value) {
    {
      auto* temp = (*title_value).GetIfString();
      if (!temp) {
        out.title = std::nullopt;
        return false;
      }
      out.title = *temp;
    }
  }

  const base::Value* fav_icon_url_value = dict.Find("favIconUrl");
  if (fav_icon_url_value) {
    {
      auto* temp = (*fav_icon_url_value).GetIfString();
      if (!temp) {
        out.fav_icon_url = std::nullopt;
        return false;
      }
      out.fav_icon_url = *temp;
    }
  }

  const base::Value* status_value = dict.Find("status");
  if (status_value) {
    {
      const std::string* tab_status_as_string = (*status_value).GetIfString();
      if (!tab_status_as_string) {
        return false;
      }
      out.status = ParseTabStatus(*tab_status_as_string);
      if (out.status == TabStatus()) {
        return false;
      }
    }
    } else {
    out.status = TabStatus();
  }

  const base::Value* incognito_value = dict.Find("incognito");
  if (!incognito_value) {
    return false;
  }
  {
    auto temp = (*incognito_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.incognito = *temp;
  }

  const base::Value* width_value = dict.Find("width");
  if (width_value) {
    {
      auto temp = (*width_value).GetIfInt();
      if (!temp.has_value()) {
        out.width = std::nullopt;
        return false;
      }
      out.width = *temp;
    }
  }

  const base::Value* height_value = dict.Find("height");
  if (height_value) {
    {
      auto temp = (*height_value).GetIfInt();
      if (!temp.has_value()) {
        out.height = std::nullopt;
        return false;
      }
      out.height = *temp;
    }
  }

  const base::Value* session_id_value = dict.Find("sessionId");
  if (session_id_value) {
    {
      auto* temp = (*session_id_value).GetIfString();
      if (!temp) {
        out.session_id = std::nullopt;
        return false;
      }
      out.session_id = *temp;
    }
  }

  return true;
}

// static
bool Tab::Populate(
    const base::Value& value, Tab& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Tab> Tab::FromValue(const base::Value::Dict& value) {
  Tab out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Tab> Tab::FromValue(const base::Value& value) {
  Tab out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Tab::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->id) {
    to_value_result.Set("id", *this->id);

  }
  to_value_result.Set("index", this->index);

  to_value_result.Set("groupId", this->group_id);

  to_value_result.Set("windowId", this->window_id);

  if (this->opener_tab_id) {
    to_value_result.Set("openerTabId", *this->opener_tab_id);

  }
  to_value_result.Set("selected", this->selected);

  if (this->last_accessed) {
    to_value_result.Set("lastAccessed", *this->last_accessed);

  }
  to_value_result.Set("highlighted", this->highlighted);

  to_value_result.Set("active", this->active);

  to_value_result.Set("pinned", this->pinned);

  if (this->audible) {
    to_value_result.Set("audible", *this->audible);

  }
  to_value_result.Set("discarded", this->discarded);

  to_value_result.Set("autoDiscardable", this->auto_discardable);

  if (this->muted_info) {
    to_value_result.Set("mutedInfo", (this->muted_info)->ToValue());

  }
  if (this->url) {
    to_value_result.Set("url", *this->url);

  }
  if (this->pending_url) {
    to_value_result.Set("pendingUrl", *this->pending_url);

  }
  if (this->title) {
    to_value_result.Set("title", *this->title);

  }
  if (this->fav_icon_url) {
    to_value_result.Set("favIconUrl", *this->fav_icon_url);

  }
  if (this->status != TabStatus()) {
    to_value_result.Set("status", tabs::ToString(this->status));

  }
  to_value_result.Set("incognito", this->incognito);

  if (this->width) {
    to_value_result.Set("width", *this->width);

  }
  if (this->height) {
    to_value_result.Set("height", *this->height);

  }
  if (this->session_id) {
    to_value_result.Set("sessionId", *this->session_id);

  }

  return to_value_result;
}


const char* ToString(ZoomSettingsMode enum_param) {
  switch (enum_param) {
    case ZoomSettingsMode::kAutomatic:
      return "automatic";
    case ZoomSettingsMode::kManual:
      return "manual";
    case ZoomSettingsMode::kDisabled:
      return "disabled";
    case ZoomSettingsMode::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ZoomSettingsMode ParseZoomSettingsMode(base::StringPiece enum_string) {
  if (enum_string == "automatic")
    return ZoomSettingsMode::kAutomatic;
  if (enum_string == "manual")
    return ZoomSettingsMode::kManual;
  if (enum_string == "disabled")
    return ZoomSettingsMode::kDisabled;
  return ZoomSettingsMode::kNone;
}

std::u16string GetZoomSettingsModeParseError(base::StringPiece enum_string) {
  return u"expected \"automatic\" or \"manual\" or \"disabled\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ZoomSettingsScope enum_param) {
  switch (enum_param) {
    case ZoomSettingsScope::kPerOrigin:
      return "per-origin";
    case ZoomSettingsScope::kPerTab:
      return "per-tab";
    case ZoomSettingsScope::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ZoomSettingsScope ParseZoomSettingsScope(base::StringPiece enum_string) {
  if (enum_string == "per-origin")
    return ZoomSettingsScope::kPerOrigin;
  if (enum_string == "per-tab")
    return ZoomSettingsScope::kPerTab;
  return ZoomSettingsScope::kNone;
}

std::u16string GetZoomSettingsScopeParseError(base::StringPiece enum_string) {
  return u"expected \"per-origin\" or \"per-tab\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ZoomSettings::ZoomSettings()
: mode(),
scope() {}

ZoomSettings::~ZoomSettings() = default;
ZoomSettings::ZoomSettings(ZoomSettings&& rhs) noexcept = default;
ZoomSettings& ZoomSettings::operator=(ZoomSettings&& rhs) noexcept = default;
ZoomSettings ZoomSettings::Clone() const {
  ZoomSettings out;
  out.mode = mode;
  out.scope = scope;
  out.default_zoom_factor = default_zoom_factor;
  return out;
}

// static
bool ZoomSettings::Populate(
    const base::Value::Dict& dict, ZoomSettings& out) {
  out.mode = ZoomSettingsMode();
  out.scope = ZoomSettingsScope();
  const base::Value* mode_value = dict.Find("mode");
  if (mode_value) {
    {
      const std::string* zoom_settings_mode_as_string = (*mode_value).GetIfString();
      if (!zoom_settings_mode_as_string) {
        return false;
      }
      out.mode = ParseZoomSettingsMode(*zoom_settings_mode_as_string);
      if (out.mode == ZoomSettingsMode()) {
        return false;
      }
    }
    } else {
    out.mode = ZoomSettingsMode();
  }

  const base::Value* scope_value = dict.Find("scope");
  if (scope_value) {
    {
      const std::string* zoom_settings_scope_as_string = (*scope_value).GetIfString();
      if (!zoom_settings_scope_as_string) {
        return false;
      }
      out.scope = ParseZoomSettingsScope(*zoom_settings_scope_as_string);
      if (out.scope == ZoomSettingsScope()) {
        return false;
      }
    }
    } else {
    out.scope = ZoomSettingsScope();
  }

  const base::Value* default_zoom_factor_value = dict.Find("defaultZoomFactor");
  if (default_zoom_factor_value) {
    {
      auto temp = (*default_zoom_factor_value).GetIfDouble();
      if (!temp.has_value()) {
        out.default_zoom_factor = std::nullopt;
        return false;
      }
      out.default_zoom_factor = *temp;
    }
  }

  return true;
}

// static
bool ZoomSettings::Populate(
    const base::Value& value, ZoomSettings& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ZoomSettings> ZoomSettings::FromValue(const base::Value::Dict& value) {
  ZoomSettings out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ZoomSettings> ZoomSettings::FromValue(const base::Value& value) {
  ZoomSettings out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ZoomSettings::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->mode != ZoomSettingsMode()) {
    to_value_result.Set("mode", tabs::ToString(this->mode));

  }
  if (this->scope != ZoomSettingsScope()) {
    to_value_result.Set("scope", tabs::ToString(this->scope));

  }
  if (this->default_zoom_factor) {
    to_value_result.Set("defaultZoomFactor", *this->default_zoom_factor);

  }

  return to_value_result;
}


const char* ToString(WindowType enum_param) {
  switch (enum_param) {
    case WindowType::kNormal:
      return "normal";
    case WindowType::kPopup:
      return "popup";
    case WindowType::kPanel:
      return "panel";
    case WindowType::kApp:
      return "app";
    case WindowType::kDevtools:
      return "devtools";
    case WindowType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

WindowType ParseWindowType(base::StringPiece enum_string) {
  if (enum_string == "normal")
    return WindowType::kNormal;
  if (enum_string == "popup")
    return WindowType::kPopup;
  if (enum_string == "panel")
    return WindowType::kPanel;
  if (enum_string == "app")
    return WindowType::kApp;
  if (enum_string == "devtools")
    return WindowType::kDevtools;
  return WindowType::kNone;
}

std::u16string GetWindowTypeParseError(base::StringPiece enum_string) {
  return u"expected \"normal\" or \"popup\" or \"panel\" or \"app\" or \"devtools\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



//
// Functions
//

namespace Get {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& tab_id_value = args[0];
    {
      auto temp = tab_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.tab_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const Tab& tab) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((tab).ToValue());

  return create_results;
}
}  // namespace Get

namespace GetCurrent {

base::Value::List Results::Create(const Tab& tab) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((tab).ToValue());

  return create_results;
}
}  // namespace GetCurrent

namespace GetSelected {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& window_id_value = args[0];
    {
      auto temp = window_id_value.GetIfInt();
      if (!temp.has_value()) {
        params.window_id = std::nullopt;
        return std::nullopt;
      }
      params.window_id = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create(const Tab& tab) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((tab).ToValue());

  return create_results;
}
}  // namespace GetSelected

namespace GetAllInWindow {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& window_id_value = args[0];
    {
      auto temp = window_id_value.GetIfInt();
      if (!temp.has_value()) {
        params.window_id = std::nullopt;
        return std::nullopt;
      }
      params.window_id = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create(const std::vector<Tab>& tabs) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(tabs));

  return create_results;
}
}  // namespace GetAllInWindow

namespace Create {

Params::CreateProperties::CreateProperties()
 {}

Params::CreateProperties::~CreateProperties() = default;
Params::CreateProperties::CreateProperties(CreateProperties&& rhs) noexcept = default;
Params::CreateProperties& Params::CreateProperties::operator=(CreateProperties&& rhs) noexcept = default;
Params::CreateProperties Params::CreateProperties::Clone() const {
  CreateProperties out;
  out.window_id = window_id;
  out.index = index;
  out.url = url;
  out.active = active;
  out.selected = selected;
  out.pinned = pinned;
  out.opener_tab_id = opener_tab_id;
  return out;
}

// static
bool Params::CreateProperties::Populate(
    const base::Value::Dict& dict, CreateProperties& out) {
  const base::Value* window_id_value = dict.Find("windowId");
  if (window_id_value) {
    {
      auto temp = (*window_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.window_id = std::nullopt;
        return false;
      }
      out.window_id = *temp;
    }
  }

  const base::Value* index_value = dict.Find("index");
  if (index_value) {
    {
      auto temp = (*index_value).GetIfInt();
      if (!temp.has_value()) {
        out.index = std::nullopt;
        return false;
      }
      out.index = *temp;
    }
  }

  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    {
      auto* temp = (*url_value).GetIfString();
      if (!temp) {
        out.url = std::nullopt;
        return false;
      }
      out.url = *temp;
    }
  }

  const base::Value* active_value = dict.Find("active");
  if (active_value) {
    {
      auto temp = (*active_value).GetIfBool();
      if (!temp.has_value()) {
        out.active = std::nullopt;
        return false;
      }
      out.active = *temp;
    }
  }

  const base::Value* selected_value = dict.Find("selected");
  if (selected_value) {
    {
      auto temp = (*selected_value).GetIfBool();
      if (!temp.has_value()) {
        out.selected = std::nullopt;
        return false;
      }
      out.selected = *temp;
    }
  }

  const base::Value* pinned_value = dict.Find("pinned");
  if (pinned_value) {
    {
      auto temp = (*pinned_value).GetIfBool();
      if (!temp.has_value()) {
        out.pinned = std::nullopt;
        return false;
      }
      out.pinned = *temp;
    }
  }

  const base::Value* opener_tab_id_value = dict.Find("openerTabId");
  if (opener_tab_id_value) {
    {
      auto temp = (*opener_tab_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.opener_tab_id = std::nullopt;
        return false;
      }
      out.opener_tab_id = *temp;
    }
  }

  return true;
}

// static
bool Params::CreateProperties::Populate(
    const base::Value& value, CreateProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::CreateProperties> Params::CreateProperties::FromValue(const base::Value::Dict& value) {
  CreateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::CreateProperties> Params::CreateProperties::FromValue(const base::Value& value) {
  CreateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& create_properties_value = args[0];
    {
      if (!create_properties_value.is_dict()) {
        return std::nullopt;
      }
      if (!CreateProperties::Populate(create_properties_value.GetDict(), params.create_properties)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const Tab& tab) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((tab).ToValue());

  return create_results;
}
}  // namespace Create

namespace Duplicate {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& tab_id_value = args[0];
    {
      auto temp = tab_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.tab_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const Tab& tab) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((tab).ToValue());

  return create_results;
}
}  // namespace Duplicate

namespace Query {

Params::QueryInfo::Url::Url()
 {}

Params::QueryInfo::Url::~Url() = default;
Params::QueryInfo::Url::Url(Url&& rhs) noexcept = default;
Params::QueryInfo::Url& Params::QueryInfo::Url::operator=(Url&& rhs) noexcept = default;
Params::QueryInfo::Url Params::QueryInfo::Url::Clone() const {
  Url out;
  out.as_string = as_string;
  out.as_strings = as_strings;
  return out;
}

// static
bool Params::QueryInfo::Url::Populate(
    const base::Value& value, Url& out) {
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out.as_string = std::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_strings)) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
}

// static
std::optional<Params::QueryInfo::Url> Params::QueryInfo::Url::FromValue(const base::Value& value) {
  Url out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}



Params::QueryInfo::QueryInfo()
: status(),
window_type() {}

Params::QueryInfo::~QueryInfo() = default;
Params::QueryInfo::QueryInfo(QueryInfo&& rhs) noexcept = default;
Params::QueryInfo& Params::QueryInfo::operator=(QueryInfo&& rhs) noexcept = default;
Params::QueryInfo Params::QueryInfo::Clone() const {
  QueryInfo out;
  out.active = active;
  out.pinned = pinned;
  out.audible = audible;
  out.muted = muted;
  out.highlighted = highlighted;
  out.discarded = discarded;
  out.auto_discardable = auto_discardable;
  out.current_window = current_window;
  out.last_focused_window = last_focused_window;
  out.status = status;
  out.title = title;
  if (url) {
    out.url = url->Clone();
  }
  out.group_id = group_id;
  out.window_id = window_id;
  out.window_type = window_type;
  out.index = index;
  return out;
}

// static
bool Params::QueryInfo::Populate(
    const base::Value::Dict& dict, QueryInfo& out) {
  out.status = TabStatus();
  out.window_type = WindowType();
  const base::Value* active_value = dict.Find("active");
  if (active_value) {
    {
      auto temp = (*active_value).GetIfBool();
      if (!temp.has_value()) {
        out.active = std::nullopt;
        return false;
      }
      out.active = *temp;
    }
  }

  const base::Value* pinned_value = dict.Find("pinned");
  if (pinned_value) {
    {
      auto temp = (*pinned_value).GetIfBool();
      if (!temp.has_value()) {
        out.pinned = std::nullopt;
        return false;
      }
      out.pinned = *temp;
    }
  }

  const base::Value* audible_value = dict.Find("audible");
  if (audible_value) {
    {
      auto temp = (*audible_value).GetIfBool();
      if (!temp.has_value()) {
        out.audible = std::nullopt;
        return false;
      }
      out.audible = *temp;
    }
  }

  const base::Value* muted_value = dict.Find("muted");
  if (muted_value) {
    {
      auto temp = (*muted_value).GetIfBool();
      if (!temp.has_value()) {
        out.muted = std::nullopt;
        return false;
      }
      out.muted = *temp;
    }
  }

  const base::Value* highlighted_value = dict.Find("highlighted");
  if (highlighted_value) {
    {
      auto temp = (*highlighted_value).GetIfBool();
      if (!temp.has_value()) {
        out.highlighted = std::nullopt;
        return false;
      }
      out.highlighted = *temp;
    }
  }

  const base::Value* discarded_value = dict.Find("discarded");
  if (discarded_value) {
    {
      auto temp = (*discarded_value).GetIfBool();
      if (!temp.has_value()) {
        out.discarded = std::nullopt;
        return false;
      }
      out.discarded = *temp;
    }
  }

  const base::Value* auto_discardable_value = dict.Find("autoDiscardable");
  if (auto_discardable_value) {
    {
      auto temp = (*auto_discardable_value).GetIfBool();
      if (!temp.has_value()) {
        out.auto_discardable = std::nullopt;
        return false;
      }
      out.auto_discardable = *temp;
    }
  }

  const base::Value* current_window_value = dict.Find("currentWindow");
  if (current_window_value) {
    {
      auto temp = (*current_window_value).GetIfBool();
      if (!temp.has_value()) {
        out.current_window = std::nullopt;
        return false;
      }
      out.current_window = *temp;
    }
  }

  const base::Value* last_focused_window_value = dict.Find("lastFocusedWindow");
  if (last_focused_window_value) {
    {
      auto temp = (*last_focused_window_value).GetIfBool();
      if (!temp.has_value()) {
        out.last_focused_window = std::nullopt;
        return false;
      }
      out.last_focused_window = *temp;
    }
  }

  const base::Value* status_value = dict.Find("status");
  if (status_value) {
    {
      const std::string* tab_status_as_string = (*status_value).GetIfString();
      if (!tab_status_as_string) {
        return false;
      }
      out.status = ParseTabStatus(*tab_status_as_string);
      if (out.status == TabStatus()) {
        return false;
      }
    }
    } else {
    out.status = TabStatus();
  }

  const base::Value* title_value = dict.Find("title");
  if (title_value) {
    {
      auto* temp = (*title_value).GetIfString();
      if (!temp) {
        out.title = std::nullopt;
        return false;
      }
      out.title = *temp;
    }
  }

  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    {
      Url temp;
      if (!Url::Populate((*url_value), temp))
        return false;
      out.url = std::move(temp);
    }
  }

  const base::Value* group_id_value = dict.Find("groupId");
  if (group_id_value) {
    {
      auto temp = (*group_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.group_id = std::nullopt;
        return false;
      }
      out.group_id = *temp;
    }
  }

  const base::Value* window_id_value = dict.Find("windowId");
  if (window_id_value) {
    {
      auto temp = (*window_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.window_id = std::nullopt;
        return false;
      }
      out.window_id = *temp;
    }
  }

  const base::Value* window_type_value = dict.Find("windowType");
  if (window_type_value) {
    {
      const std::string* window_type_as_string = (*window_type_value).GetIfString();
      if (!window_type_as_string) {
        return false;
      }
      out.window_type = ParseWindowType(*window_type_as_string);
      if (out.window_type == WindowType()) {
        return false;
      }
    }
    } else {
    out.window_type = WindowType();
  }

  const base::Value* index_value = dict.Find("index");
  if (index_value) {
    {
      auto temp = (*index_value).GetIfInt();
      if (!temp.has_value()) {
        out.index = std::nullopt;
        return false;
      }
      out.index = *temp;
    }
  }

  return true;
}

// static
bool Params::QueryInfo::Populate(
    const base::Value& value, QueryInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::QueryInfo> Params::QueryInfo::FromValue(const base::Value::Dict& value) {
  QueryInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::QueryInfo> Params::QueryInfo::FromValue(const base::Value& value) {
  QueryInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& query_info_value = args[0];
    {
      if (!query_info_value.is_dict()) {
        return std::nullopt;
      }
      if (!QueryInfo::Populate(query_info_value.GetDict(), params.query_info)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<Tab>& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(result));

  return create_results;
}
}  // namespace Query

namespace Highlight {

Params::HighlightInfo::Tabs::Tabs()
 {}

Params::HighlightInfo::Tabs::~Tabs() = default;
Params::HighlightInfo::Tabs::Tabs(Tabs&& rhs) noexcept = default;
Params::HighlightInfo::Tabs& Params::HighlightInfo::Tabs::operator=(Tabs&& rhs) noexcept = default;
Params::HighlightInfo::Tabs Params::HighlightInfo::Tabs::Clone() const {
  Tabs out;
  out.as_integers = as_integers;
  out.as_integer = as_integer;
  return out;
}

// static
bool Params::HighlightInfo::Tabs::Populate(
    const base::Value& value, Tabs& out) {
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_integers)) {
          return false;
        }
      }
    }
    return true;
  }
  if (value.type() == base::Value::Type::INTEGER) {
    {
      auto temp = value.GetIfInt();
      if (!temp.has_value()) {
        out.as_integer = std::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  return false;
}

// static
std::optional<Params::HighlightInfo::Tabs> Params::HighlightInfo::Tabs::FromValue(const base::Value& value) {
  Tabs out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}



Params::HighlightInfo::HighlightInfo()
 {}

Params::HighlightInfo::~HighlightInfo() = default;
Params::HighlightInfo::HighlightInfo(HighlightInfo&& rhs) noexcept = default;
Params::HighlightInfo& Params::HighlightInfo::operator=(HighlightInfo&& rhs) noexcept = default;
Params::HighlightInfo Params::HighlightInfo::Clone() const {
  HighlightInfo out;
  out.window_id = window_id;
  out.tabs = tabs.Clone();
  return out;
}

// static
bool Params::HighlightInfo::Populate(
    const base::Value::Dict& dict, HighlightInfo& out) {
  const base::Value* window_id_value = dict.Find("windowId");
  if (window_id_value) {
    {
      auto temp = (*window_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.window_id = std::nullopt;
        return false;
      }
      out.window_id = *temp;
    }
  }

  const base::Value* tabs_value = dict.Find("tabs");
  if (!tabs_value) {
    return false;
  }
  {
    if (!Tabs::Populate((*tabs_value), out.tabs))
      return false;
  }

  return true;
}

// static
bool Params::HighlightInfo::Populate(
    const base::Value& value, HighlightInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::HighlightInfo> Params::HighlightInfo::FromValue(const base::Value::Dict& value) {
  HighlightInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::HighlightInfo> Params::HighlightInfo::FromValue(const base::Value& value) {
  HighlightInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& highlight_info_value = args[0];
    {
      if (!highlight_info_value.is_dict()) {
        return std::nullopt;
      }
      if (!HighlightInfo::Populate(highlight_info_value.GetDict(), params.highlight_info)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const extensions::api::windows::Window& window) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((window).ToValue());

  return create_results;
}
}  // namespace Highlight

namespace Update {

Params::UpdateProperties::UpdateProperties()
 {}

Params::UpdateProperties::~UpdateProperties() = default;
Params::UpdateProperties::UpdateProperties(UpdateProperties&& rhs) noexcept = default;
Params::UpdateProperties& Params::UpdateProperties::operator=(UpdateProperties&& rhs) noexcept = default;
Params::UpdateProperties Params::UpdateProperties::Clone() const {
  UpdateProperties out;
  out.url = url;
  out.active = active;
  out.highlighted = highlighted;
  out.selected = selected;
  out.pinned = pinned;
  out.muted = muted;
  out.opener_tab_id = opener_tab_id;
  out.auto_discardable = auto_discardable;
  return out;
}

// static
bool Params::UpdateProperties::Populate(
    const base::Value::Dict& dict, UpdateProperties& out) {
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    {
      auto* temp = (*url_value).GetIfString();
      if (!temp) {
        out.url = std::nullopt;
        return false;
      }
      out.url = *temp;
    }
  }

  const base::Value* active_value = dict.Find("active");
  if (active_value) {
    {
      auto temp = (*active_value).GetIfBool();
      if (!temp.has_value()) {
        out.active = std::nullopt;
        return false;
      }
      out.active = *temp;
    }
  }

  const base::Value* highlighted_value = dict.Find("highlighted");
  if (highlighted_value) {
    {
      auto temp = (*highlighted_value).GetIfBool();
      if (!temp.has_value()) {
        out.highlighted = std::nullopt;
        return false;
      }
      out.highlighted = *temp;
    }
  }

  const base::Value* selected_value = dict.Find("selected");
  if (selected_value) {
    {
      auto temp = (*selected_value).GetIfBool();
      if (!temp.has_value()) {
        out.selected = std::nullopt;
        return false;
      }
      out.selected = *temp;
    }
  }

  const base::Value* pinned_value = dict.Find("pinned");
  if (pinned_value) {
    {
      auto temp = (*pinned_value).GetIfBool();
      if (!temp.has_value()) {
        out.pinned = std::nullopt;
        return false;
      }
      out.pinned = *temp;
    }
  }

  const base::Value* muted_value = dict.Find("muted");
  if (muted_value) {
    {
      auto temp = (*muted_value).GetIfBool();
      if (!temp.has_value()) {
        out.muted = std::nullopt;
        return false;
      }
      out.muted = *temp;
    }
  }

  const base::Value* opener_tab_id_value = dict.Find("openerTabId");
  if (opener_tab_id_value) {
    {
      auto temp = (*opener_tab_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.opener_tab_id = std::nullopt;
        return false;
      }
      out.opener_tab_id = *temp;
    }
  }

  const base::Value* auto_discardable_value = dict.Find("autoDiscardable");
  if (auto_discardable_value) {
    {
      auto temp = (*auto_discardable_value).GetIfBool();
      if (!temp.has_value()) {
        out.auto_discardable = std::nullopt;
        return false;
      }
      out.auto_discardable = *temp;
    }
  }

  return true;
}

// static
bool Params::UpdateProperties::Populate(
    const base::Value& value, UpdateProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::UpdateProperties> Params::UpdateProperties::FromValue(const base::Value::Dict& value) {
  UpdateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::UpdateProperties> Params::UpdateProperties::FromValue(const base::Value& value) {
  UpdateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& tab_id_value = args[0];
    {
      auto temp = tab_id_value.GetIfInt();
      if (!temp.has_value()) {
        params.tab_id = std::nullopt;
        return std::nullopt;
      }
      params.tab_id = *temp;
    }
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& update_properties_value = args[1];
    {
      if (!update_properties_value.is_dict()) {
        return std::nullopt;
      }
      if (!UpdateProperties::Populate(update_properties_value.GetDict(), params.update_properties)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const Tab& tab) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((tab).ToValue());

  return create_results;
}
}  // namespace Update

namespace Move {

Params::TabIds::TabIds()
 {}

Params::TabIds::~TabIds() = default;
Params::TabIds::TabIds(TabIds&& rhs) noexcept = default;
Params::TabIds& Params::TabIds::operator=(TabIds&& rhs) noexcept = default;
Params::TabIds Params::TabIds::Clone() const {
  TabIds out;
  out.as_integer = as_integer;
  out.as_integers = as_integers;
  return out;
}

// static
bool Params::TabIds::Populate(
    const base::Value& value, TabIds& out) {
  if (value.type() == base::Value::Type::INTEGER) {
    {
      auto temp = value.GetIfInt();
      if (!temp.has_value()) {
        out.as_integer = std::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_integers)) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
}

// static
std::optional<Params::TabIds> Params::TabIds::FromValue(const base::Value& value) {
  TabIds out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::MoveProperties::MoveProperties()
: index(0) {}

Params::MoveProperties::~MoveProperties() = default;
Params::MoveProperties::MoveProperties(MoveProperties&& rhs) noexcept = default;
Params::MoveProperties& Params::MoveProperties::operator=(MoveProperties&& rhs) noexcept = default;
Params::MoveProperties Params::MoveProperties::Clone() const {
  MoveProperties out;
  out.window_id = window_id;
  out.index = index;
  return out;
}

// static
bool Params::MoveProperties::Populate(
    const base::Value::Dict& dict, MoveProperties& out) {
  const base::Value* window_id_value = dict.Find("windowId");
  if (window_id_value) {
    {
      auto temp = (*window_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.window_id = std::nullopt;
        return false;
      }
      out.window_id = *temp;
    }
  }

  const base::Value* index_value = dict.Find("index");
  if (!index_value) {
    return false;
  }
  {
    auto temp = (*index_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.index = *temp;
  }

  return true;
}

// static
bool Params::MoveProperties::Populate(
    const base::Value& value, MoveProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::MoveProperties> Params::MoveProperties::FromValue(const base::Value::Dict& value) {
  MoveProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::MoveProperties> Params::MoveProperties::FromValue(const base::Value& value) {
  MoveProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& tab_ids_value = args[0];
    {
      if (!TabIds::Populate(tab_ids_value, params.tab_ids))
        return std::nullopt;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& move_properties_value = args[1];
    {
      if (!move_properties_value.is_dict()) {
        return std::nullopt;
      }
      if (!MoveProperties::Populate(move_properties_value.GetDict(), params.move_properties)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


Results::Tabs::Tabs()
 {}

Results::Tabs::~Tabs() = default;
Results::Tabs::Tabs(Tabs&& rhs) noexcept = default;
Results::Tabs& Results::Tabs::operator=(Tabs&& rhs) noexcept = default;
base::Value Results::Tabs::ToValue() const {
  base::Value result;
  if (as_tab) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for tabs";
    result = base::Value((as_tab)->ToValue());

  }
  if (as_tabs) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for tabs";
    result = base::Value(json_schema_compiler::util::CreateValueFromArray(*as_tabs));

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for tabs";
  return result;
}


base::Value::List Results::Create(const Tabs& tabs) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((tabs).ToValue());

  return create_results;
}
}  // namespace Move

namespace Reload {

Params::ReloadProperties::ReloadProperties()
 {}

Params::ReloadProperties::~ReloadProperties() = default;
Params::ReloadProperties::ReloadProperties(ReloadProperties&& rhs) noexcept = default;
Params::ReloadProperties& Params::ReloadProperties::operator=(ReloadProperties&& rhs) noexcept = default;
Params::ReloadProperties Params::ReloadProperties::Clone() const {
  ReloadProperties out;
  out.bypass_cache = bypass_cache;
  return out;
}

// static
bool Params::ReloadProperties::Populate(
    const base::Value::Dict& dict, ReloadProperties& out) {
  const base::Value* bypass_cache_value = dict.Find("bypassCache");
  if (bypass_cache_value) {
    {
      auto temp = (*bypass_cache_value).GetIfBool();
      if (!temp.has_value()) {
        out.bypass_cache = std::nullopt;
        return false;
      }
      out.bypass_cache = *temp;
    }
  }

  return true;
}

// static
bool Params::ReloadProperties::Populate(
    const base::Value& value, ReloadProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::ReloadProperties> Params::ReloadProperties::FromValue(const base::Value::Dict& value) {
  ReloadProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::ReloadProperties> Params::ReloadProperties::FromValue(const base::Value& value) {
  ReloadProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& tab_id_value = args[0];
    {
      auto temp = tab_id_value.GetIfInt();
      if (!temp.has_value()) {
        params.tab_id = std::nullopt;
        return std::nullopt;
      }
      params.tab_id = *temp;
    }
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& reload_properties_value = args[1];
    {
      if (!reload_properties_value.is_dict()) {
        return std::nullopt;
      }
      else {
        ReloadProperties temp;
        if (!ReloadProperties::Populate(reload_properties_value.GetDict(), temp))
          return std::nullopt;
        params.reload_properties = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace Reload

namespace Remove {

Params::TabIds::TabIds()
 {}

Params::TabIds::~TabIds() = default;
Params::TabIds::TabIds(TabIds&& rhs) noexcept = default;
Params::TabIds& Params::TabIds::operator=(TabIds&& rhs) noexcept = default;
Params::TabIds Params::TabIds::Clone() const {
  TabIds out;
  out.as_integer = as_integer;
  out.as_integers = as_integers;
  return out;
}

// static
bool Params::TabIds::Populate(
    const base::Value& value, TabIds& out) {
  if (value.type() == base::Value::Type::INTEGER) {
    {
      auto temp = value.GetIfInt();
      if (!temp.has_value()) {
        out.as_integer = std::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_integers)) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
}

// static
std::optional<Params::TabIds> Params::TabIds::FromValue(const base::Value& value) {
  TabIds out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& tab_ids_value = args[0];
    {
      if (!TabIds::Populate(tab_ids_value, params.tab_ids))
        return std::nullopt;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace Remove

namespace Group {

Params::Options::TabIds::TabIds()
 {}

Params::Options::TabIds::~TabIds() = default;
Params::Options::TabIds::TabIds(TabIds&& rhs) noexcept = default;
Params::Options::TabIds& Params::Options::TabIds::operator=(TabIds&& rhs) noexcept = default;
Params::Options::TabIds Params::Options::TabIds::Clone() const {
  TabIds out;
  out.as_integer = as_integer;
  out.as_integers = as_integers;
  return out;
}

// static
bool Params::Options::TabIds::Populate(
    const base::Value& value, TabIds& out) {
  if (value.type() == base::Value::Type::INTEGER) {
    {
      auto temp = value.GetIfInt();
      if (!temp.has_value()) {
        out.as_integer = std::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_integers)) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
}

// static
std::optional<Params::Options::TabIds> Params::Options::TabIds::FromValue(const base::Value& value) {
  TabIds out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Options::CreateProperties::CreateProperties()
 {}

Params::Options::CreateProperties::~CreateProperties() = default;
Params::Options::CreateProperties::CreateProperties(CreateProperties&& rhs) noexcept = default;
Params::Options::CreateProperties& Params::Options::CreateProperties::operator=(CreateProperties&& rhs) noexcept = default;
Params::Options::CreateProperties Params::Options::CreateProperties::Clone() const {
  CreateProperties out;
  out.window_id = window_id;
  return out;
}

// static
bool Params::Options::CreateProperties::Populate(
    const base::Value::Dict& dict, CreateProperties& out) {
  const base::Value* window_id_value = dict.Find("windowId");
  if (window_id_value) {
    {
      auto temp = (*window_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.window_id = std::nullopt;
        return false;
      }
      out.window_id = *temp;
    }
  }

  return true;
}

// static
bool Params::Options::CreateProperties::Populate(
    const base::Value& value, CreateProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Options::CreateProperties> Params::Options::CreateProperties::FromValue(const base::Value::Dict& value) {
  CreateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Options::CreateProperties> Params::Options::CreateProperties::FromValue(const base::Value& value) {
  CreateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}



Params::Options::Options()
 {}

Params::Options::~Options() = default;
Params::Options::Options(Options&& rhs) noexcept = default;
Params::Options& Params::Options::operator=(Options&& rhs) noexcept = default;
Params::Options Params::Options::Clone() const {
  Options out;
  out.tab_ids = tab_ids.Clone();
  out.group_id = group_id;
  if (create_properties) {
    out.create_properties = create_properties->Clone();
  }
  return out;
}

// static
bool Params::Options::Populate(
    const base::Value::Dict& dict, Options& out) {
  const base::Value* tab_ids_value = dict.Find("tabIds");
  if (!tab_ids_value) {
    return false;
  }
  {
    if (!TabIds::Populate((*tab_ids_value), out.tab_ids))
      return false;
  }

  const base::Value* group_id_value = dict.Find("groupId");
  if (group_id_value) {
    {
      auto temp = (*group_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.group_id = std::nullopt;
        return false;
      }
      out.group_id = *temp;
    }
  }

  const base::Value* create_properties_value = dict.Find("createProperties");
  if (create_properties_value) {
    {
      if (!(*create_properties_value).is_dict()) {
        return false;
      }
      else {
        CreateProperties temp;
        if (!CreateProperties::Populate((*create_properties_value).GetDict(), temp))
          return false;
        out.create_properties = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool Params::Options::Populate(
    const base::Value& value, Options& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Options> Params::Options::FromValue(const base::Value::Dict& value) {
  Options out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Options> Params::Options::FromValue(const base::Value& value) {
  Options out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      if (!Options::Populate(options_value.GetDict(), params.options)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(int group_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(group_id);

  return create_results;
}
}  // namespace Group

namespace Ungroup {

Params::TabIds::TabIds()
 {}

Params::TabIds::~TabIds() = default;
Params::TabIds::TabIds(TabIds&& rhs) noexcept = default;
Params::TabIds& Params::TabIds::operator=(TabIds&& rhs) noexcept = default;
Params::TabIds Params::TabIds::Clone() const {
  TabIds out;
  out.as_integer = as_integer;
  out.as_integers = as_integers;
  return out;
}

// static
bool Params::TabIds::Populate(
    const base::Value& value, TabIds& out) {
  if (value.type() == base::Value::Type::INTEGER) {
    {
      auto temp = value.GetIfInt();
      if (!temp.has_value()) {
        out.as_integer = std::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_integers)) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
}

// static
std::optional<Params::TabIds> Params::TabIds::FromValue(const base::Value& value) {
  TabIds out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& tab_ids_value = args[0];
    {
      if (!TabIds::Populate(tab_ids_value, params.tab_ids))
        return std::nullopt;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace Ungroup

namespace DetectLanguage {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& tab_id_value = args[0];
    {
      auto temp = tab_id_value.GetIfInt();
      if (!temp.has_value()) {
        params.tab_id = std::nullopt;
        return std::nullopt;
      }
      params.tab_id = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create(const std::string& language) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(language);

  return create_results;
}
}  // namespace DetectLanguage

namespace CaptureVisibleTab {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& window_id_value = args[0];
    {
      auto temp = window_id_value.GetIfInt();
      if (!temp.has_value()) {
        params.window_id = std::nullopt;
        return std::nullopt;
      }
      params.window_id = *temp;
    }
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& options_value = args[1];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      else {
        extensions::api::extension_types::ImageDetails temp;
        if (!extensions::api::extension_types::ImageDetails::Populate(options_value.GetDict(), temp))
          return std::nullopt;
        params.options = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const std::string& data_url) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(data_url);

  return create_results;
}
}  // namespace CaptureVisibleTab

namespace ExecuteScript {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& tab_id_value = args[0];
    {
      auto temp = tab_id_value.GetIfInt();
      if (!temp.has_value()) {
        params.tab_id = std::nullopt;
        return std::nullopt;
      }
      params.tab_id = *temp;
    }
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& details_value = args[1];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      if (!extensions::api::extension_types::InjectDetails::Populate(details_value.GetDict(), params.details)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const base::Value::List& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).Clone());

  return create_results;
}
}  // namespace ExecuteScript

namespace InsertCSS {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& tab_id_value = args[0];
    {
      auto temp = tab_id_value.GetIfInt();
      if (!temp.has_value()) {
        params.tab_id = std::nullopt;
        return std::nullopt;
      }
      params.tab_id = *temp;
    }
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& details_value = args[1];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      if (!extensions::api::extension_types::InjectDetails::Populate(details_value.GetDict(), params.details)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace InsertCSS

namespace RemoveCSS {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& tab_id_value = args[0];
    {
      auto temp = tab_id_value.GetIfInt();
      if (!temp.has_value()) {
        params.tab_id = std::nullopt;
        return std::nullopt;
      }
      params.tab_id = *temp;
    }
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& details_value = args[1];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      if (!extensions::api::extension_types::DeleteInjectionDetails::Populate(details_value.GetDict(), params.details)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace RemoveCSS

namespace SetZoom {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& tab_id_value = args[0];
    {
      auto temp = tab_id_value.GetIfInt();
      if (!temp.has_value()) {
        params.tab_id = std::nullopt;
        return std::nullopt;
      }
      params.tab_id = *temp;
    }
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& zoom_factor_value = args[1];
    {
      auto temp = zoom_factor_value.GetIfDouble();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.zoom_factor = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetZoom

namespace GetZoom {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& tab_id_value = args[0];
    {
      auto temp = tab_id_value.GetIfInt();
      if (!temp.has_value()) {
        params.tab_id = std::nullopt;
        return std::nullopt;
      }
      params.tab_id = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create(double zoom_factor) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(zoom_factor);

  return create_results;
}
}  // namespace GetZoom

namespace SetZoomSettings {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& tab_id_value = args[0];
    {
      auto temp = tab_id_value.GetIfInt();
      if (!temp.has_value()) {
        params.tab_id = std::nullopt;
        return std::nullopt;
      }
      params.tab_id = *temp;
    }
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& zoom_settings_value = args[1];
    {
      if (!zoom_settings_value.is_dict()) {
        return std::nullopt;
      }
      if (!ZoomSettings::Populate(zoom_settings_value.GetDict(), params.zoom_settings)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetZoomSettings

namespace GetZoomSettings {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& tab_id_value = args[0];
    {
      auto temp = tab_id_value.GetIfInt();
      if (!temp.has_value()) {
        params.tab_id = std::nullopt;
        return std::nullopt;
      }
      params.tab_id = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create(const ZoomSettings& zoom_settings) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((zoom_settings).ToValue());

  return create_results;
}
}  // namespace GetZoomSettings

namespace Discard {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& tab_id_value = args[0];
    {
      auto temp = tab_id_value.GetIfInt();
      if (!temp.has_value()) {
        params.tab_id = std::nullopt;
        return std::nullopt;
      }
      params.tab_id = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create(const Tab& tab) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((tab).ToValue());

  return create_results;
}
}  // namespace Discard

namespace GoForward {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& tab_id_value = args[0];
    {
      auto temp = tab_id_value.GetIfInt();
      if (!temp.has_value()) {
        params.tab_id = std::nullopt;
        return std::nullopt;
      }
      params.tab_id = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace GoForward

namespace GoBack {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& tab_id_value = args[0];
    {
      auto temp = tab_id_value.GetIfInt();
      if (!temp.has_value()) {
        params.tab_id = std::nullopt;
        return std::nullopt;
      }
      params.tab_id = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace GoBack

//
// Events
//

namespace OnCreated {

const char kEventName[] = "tabs.onCreated";

base::Value::List Create(const Tab& tab) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((tab).ToValue());

  return create_results;
}

}  // namespace OnCreated

namespace OnUpdated {

const char kEventName[] = "tabs.onUpdated";

ChangeInfo::ChangeInfo()
: status() {}

ChangeInfo::~ChangeInfo() = default;
ChangeInfo::ChangeInfo(ChangeInfo&& rhs) noexcept = default;
ChangeInfo& ChangeInfo::operator=(ChangeInfo&& rhs) noexcept = default;
base::Value::Dict ChangeInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->status != TabStatus()) {
    to_value_result.Set("status", tabs::ToString(this->status));

  }
  if (this->url) {
    to_value_result.Set("url", *this->url);

  }
  if (this->group_id) {
    to_value_result.Set("groupId", *this->group_id);

  }
  if (this->pinned) {
    to_value_result.Set("pinned", *this->pinned);

  }
  if (this->audible) {
    to_value_result.Set("audible", *this->audible);

  }
  if (this->discarded) {
    to_value_result.Set("discarded", *this->discarded);

  }
  if (this->auto_discardable) {
    to_value_result.Set("autoDiscardable", *this->auto_discardable);

  }
  if (this->muted_info) {
    to_value_result.Set("mutedInfo", (this->muted_info)->ToValue());

  }
  if (this->fav_icon_url) {
    to_value_result.Set("favIconUrl", *this->fav_icon_url);

  }
  if (this->title) {
    to_value_result.Set("title", *this->title);

  }

  return to_value_result;
}


base::Value::List Create(int tab_id, const ChangeInfo& change_info, const Tab& tab) {
  base::Value::List create_results;
  create_results.reserve(3);
  create_results.Append(tab_id);

  create_results.Append((change_info).ToValue());

  create_results.Append((tab).ToValue());

  return create_results;
}

}  // namespace OnUpdated

namespace OnMoved {

const char kEventName[] = "tabs.onMoved";

MoveInfo::MoveInfo()
: window_id(0),
from_index(0),
to_index(0) {}

MoveInfo::~MoveInfo() = default;
MoveInfo::MoveInfo(MoveInfo&& rhs) noexcept = default;
MoveInfo& MoveInfo::operator=(MoveInfo&& rhs) noexcept = default;
base::Value::Dict MoveInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("windowId", this->window_id);

  to_value_result.Set("fromIndex", this->from_index);

  to_value_result.Set("toIndex", this->to_index);


  return to_value_result;
}


base::Value::List Create(int tab_id, const MoveInfo& move_info) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(tab_id);

  create_results.Append((move_info).ToValue());

  return create_results;
}

}  // namespace OnMoved

namespace OnSelectionChanged {

const char kEventName[] = "tabs.onSelectionChanged";

SelectInfo::SelectInfo()
: window_id(0) {}

SelectInfo::~SelectInfo() = default;
SelectInfo::SelectInfo(SelectInfo&& rhs) noexcept = default;
SelectInfo& SelectInfo::operator=(SelectInfo&& rhs) noexcept = default;
base::Value::Dict SelectInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("windowId", this->window_id);


  return to_value_result;
}


base::Value::List Create(int tab_id, const SelectInfo& select_info) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(tab_id);

  create_results.Append((select_info).ToValue());

  return create_results;
}

}  // namespace OnSelectionChanged

namespace OnActiveChanged {

const char kEventName[] = "tabs.onActiveChanged";

SelectInfo::SelectInfo()
: window_id(0) {}

SelectInfo::~SelectInfo() = default;
SelectInfo::SelectInfo(SelectInfo&& rhs) noexcept = default;
SelectInfo& SelectInfo::operator=(SelectInfo&& rhs) noexcept = default;
base::Value::Dict SelectInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("windowId", this->window_id);


  return to_value_result;
}


base::Value::List Create(int tab_id, const SelectInfo& select_info) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(tab_id);

  create_results.Append((select_info).ToValue());

  return create_results;
}

}  // namespace OnActiveChanged

namespace OnActivated {

const char kEventName[] = "tabs.onActivated";

ActiveInfo::ActiveInfo()
: tab_id(0),
window_id(0) {}

ActiveInfo::~ActiveInfo() = default;
ActiveInfo::ActiveInfo(ActiveInfo&& rhs) noexcept = default;
ActiveInfo& ActiveInfo::operator=(ActiveInfo&& rhs) noexcept = default;
base::Value::Dict ActiveInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("tabId", this->tab_id);

  to_value_result.Set("windowId", this->window_id);


  return to_value_result;
}


base::Value::List Create(const ActiveInfo& active_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((active_info).ToValue());

  return create_results;
}

}  // namespace OnActivated

namespace OnHighlightChanged {

const char kEventName[] = "tabs.onHighlightChanged";

SelectInfo::SelectInfo()
: window_id(0) {}

SelectInfo::~SelectInfo() = default;
SelectInfo::SelectInfo(SelectInfo&& rhs) noexcept = default;
SelectInfo& SelectInfo::operator=(SelectInfo&& rhs) noexcept = default;
base::Value::Dict SelectInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("windowId", this->window_id);

  to_value_result.Set("tabIds", json_schema_compiler::util::CreateValueFromArray(this->tab_ids));


  return to_value_result;
}


base::Value::List Create(const SelectInfo& select_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((select_info).ToValue());

  return create_results;
}

}  // namespace OnHighlightChanged

namespace OnHighlighted {

const char kEventName[] = "tabs.onHighlighted";

HighlightInfo::HighlightInfo()
: window_id(0) {}

HighlightInfo::~HighlightInfo() = default;
HighlightInfo::HighlightInfo(HighlightInfo&& rhs) noexcept = default;
HighlightInfo& HighlightInfo::operator=(HighlightInfo&& rhs) noexcept = default;
base::Value::Dict HighlightInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("windowId", this->window_id);

  to_value_result.Set("tabIds", json_schema_compiler::util::CreateValueFromArray(this->tab_ids));


  return to_value_result;
}


base::Value::List Create(const HighlightInfo& highlight_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((highlight_info).ToValue());

  return create_results;
}

}  // namespace OnHighlighted

namespace OnDetached {

const char kEventName[] = "tabs.onDetached";

DetachInfo::DetachInfo()
: old_window_id(0),
old_position(0) {}

DetachInfo::~DetachInfo() = default;
DetachInfo::DetachInfo(DetachInfo&& rhs) noexcept = default;
DetachInfo& DetachInfo::operator=(DetachInfo&& rhs) noexcept = default;
base::Value::Dict DetachInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("oldWindowId", this->old_window_id);

  to_value_result.Set("oldPosition", this->old_position);


  return to_value_result;
}


base::Value::List Create(int tab_id, const DetachInfo& detach_info) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(tab_id);

  create_results.Append((detach_info).ToValue());

  return create_results;
}

}  // namespace OnDetached

namespace OnAttached {

const char kEventName[] = "tabs.onAttached";

AttachInfo::AttachInfo()
: new_window_id(0),
new_position(0) {}

AttachInfo::~AttachInfo() = default;
AttachInfo::AttachInfo(AttachInfo&& rhs) noexcept = default;
AttachInfo& AttachInfo::operator=(AttachInfo&& rhs) noexcept = default;
base::Value::Dict AttachInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("newWindowId", this->new_window_id);

  to_value_result.Set("newPosition", this->new_position);


  return to_value_result;
}


base::Value::List Create(int tab_id, const AttachInfo& attach_info) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(tab_id);

  create_results.Append((attach_info).ToValue());

  return create_results;
}

}  // namespace OnAttached

namespace OnRemoved {

const char kEventName[] = "tabs.onRemoved";

RemoveInfo::RemoveInfo()
: window_id(0),
is_window_closing(false) {}

RemoveInfo::~RemoveInfo() = default;
RemoveInfo::RemoveInfo(RemoveInfo&& rhs) noexcept = default;
RemoveInfo& RemoveInfo::operator=(RemoveInfo&& rhs) noexcept = default;
base::Value::Dict RemoveInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("windowId", this->window_id);

  to_value_result.Set("isWindowClosing", this->is_window_closing);


  return to_value_result;
}


base::Value::List Create(int tab_id, const RemoveInfo& remove_info) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(tab_id);

  create_results.Append((remove_info).ToValue());

  return create_results;
}

}  // namespace OnRemoved

namespace OnReplaced {

const char kEventName[] = "tabs.onReplaced";

base::Value::List Create(int added_tab_id, int removed_tab_id) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(added_tab_id);

  create_results.Append(removed_tab_id);

  return create_results;
}

}  // namespace OnReplaced

namespace OnZoomChange {

const char kEventName[] = "tabs.onZoomChange";

ZoomChangeInfo::ZoomChangeInfo()
: tab_id(0),
old_zoom_factor(0.0),
new_zoom_factor(0.0) {}

ZoomChangeInfo::~ZoomChangeInfo() = default;
ZoomChangeInfo::ZoomChangeInfo(ZoomChangeInfo&& rhs) noexcept = default;
ZoomChangeInfo& ZoomChangeInfo::operator=(ZoomChangeInfo&& rhs) noexcept = default;
base::Value::Dict ZoomChangeInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("tabId", this->tab_id);

  to_value_result.Set("oldZoomFactor", this->old_zoom_factor);

  to_value_result.Set("newZoomFactor", this->new_zoom_factor);

  to_value_result.Set("zoomSettings", (this->zoom_settings).ToValue());


  return to_value_result;
}


base::Value::List Create(const ZoomChangeInfo& zoom_change_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((zoom_change_info).ToValue());

  return create_results;
}

}  // namespace OnZoomChange

}  // namespace tabs
}  // namespace api
}  // namespace extensions

