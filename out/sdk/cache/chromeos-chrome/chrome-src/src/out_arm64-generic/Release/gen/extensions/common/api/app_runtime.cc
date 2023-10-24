// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/app_runtime.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/app_runtime.h"

#include <memory>
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


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace app_runtime {
//
// Types
//

LaunchItem::Entry::Entry()
 {}

LaunchItem::Entry::~Entry() = default;
LaunchItem::Entry::Entry(Entry&& rhs) = default;
LaunchItem::Entry& LaunchItem::Entry::operator=(Entry&& rhs) = default;
LaunchItem::Entry LaunchItem::Entry::Clone() const {
  Entry out;
  return out;
}

// static
bool LaunchItem::Entry::Populate(
    const base::Value::Dict& dict, Entry& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool LaunchItem::Entry::Populate(
    const base::Value& value, Entry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<LaunchItem::Entry> LaunchItem::Entry::FromValue(const base::Value::Dict& value) {
  Entry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<LaunchItem::Entry> LaunchItem::Entry::FromValue(const base::Value& value) {
  Entry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict LaunchItem::Entry::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



LaunchItem::LaunchItem()
 {}

LaunchItem::~LaunchItem() = default;
LaunchItem::LaunchItem(LaunchItem&& rhs) = default;
LaunchItem& LaunchItem::operator=(LaunchItem&& rhs) = default;
LaunchItem LaunchItem::Clone() const {
  LaunchItem out;
  out.entry = entry.Clone();
  out.type = type;
  return out;
}

// static
bool LaunchItem::Populate(
    const base::Value::Dict& dict, LaunchItem& out) {
  const base::Value* entry_value = dict.Find("entry");
  if (!entry_value) {
    return false;
  }
  {
    if (!(*entry_value).is_dict()) {
      return false;
    }
    if (!Entry::Populate((*entry_value).GetDict(), out.entry)) {
      return false;
    }
  }

  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    {
      auto* temp = (*type_value).GetIfString();
      if (!temp) {
        out.type = absl::nullopt;
        return false;
      }
      out.type = *temp;
    }
  }

  return true;
}

// static
bool LaunchItem::Populate(
    const base::Value& value, LaunchItem& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<LaunchItem> LaunchItem::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<LaunchItem>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<LaunchItem> LaunchItem::FromValue(const base::Value::Dict& value) {
  LaunchItem out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<LaunchItem> LaunchItem::FromValue(const base::Value& value) {
  LaunchItem out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict LaunchItem::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("entry", (this->entry).ToValue());

  if (this->type) {
    to_value_result.Set("type", *this->type);

  }

  return to_value_result;
}


const char* ToString(LaunchSource enum_param) {
  switch (enum_param) {
    case LaunchSource::kUntracked:
      return "untracked";
    case LaunchSource::kAppLauncher:
      return "app_launcher";
    case LaunchSource::kNewTabPage:
      return "new_tab_page";
    case LaunchSource::kReload:
      return "reload";
    case LaunchSource::kRestart:
      return "restart";
    case LaunchSource::kLoadAndLaunch:
      return "load_and_launch";
    case LaunchSource::kCommandLine:
      return "command_line";
    case LaunchSource::kFileHandler:
      return "file_handler";
    case LaunchSource::kUrlHandler:
      return "url_handler";
    case LaunchSource::kSystemTray:
      return "system_tray";
    case LaunchSource::kAboutPage:
      return "about_page";
    case LaunchSource::kKeyboard:
      return "keyboard";
    case LaunchSource::kExtensionsPage:
      return "extensions_page";
    case LaunchSource::kManagementApi:
      return "management_api";
    case LaunchSource::kEphemeralApp:
      return "ephemeral_app";
    case LaunchSource::kBackground:
      return "background";
    case LaunchSource::kKiosk:
      return "kiosk";
    case LaunchSource::kChromeInternal:
      return "chrome_internal";
    case LaunchSource::kTest:
      return "test";
    case LaunchSource::kInstalledNotification:
      return "installed_notification";
    case LaunchSource::kContextMenu:
      return "context_menu";
    case LaunchSource::kArc:
      return "arc";
    case LaunchSource::kIntentUrl:
      return "intent_url";
    case LaunchSource::kAppHomePage:
      return "app_home_page";
    case LaunchSource::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

LaunchSource ParseLaunchSource(base::StringPiece enum_string) {
  if (enum_string == "untracked")
    return LaunchSource::kUntracked;
  if (enum_string == "app_launcher")
    return LaunchSource::kAppLauncher;
  if (enum_string == "new_tab_page")
    return LaunchSource::kNewTabPage;
  if (enum_string == "reload")
    return LaunchSource::kReload;
  if (enum_string == "restart")
    return LaunchSource::kRestart;
  if (enum_string == "load_and_launch")
    return LaunchSource::kLoadAndLaunch;
  if (enum_string == "command_line")
    return LaunchSource::kCommandLine;
  if (enum_string == "file_handler")
    return LaunchSource::kFileHandler;
  if (enum_string == "url_handler")
    return LaunchSource::kUrlHandler;
  if (enum_string == "system_tray")
    return LaunchSource::kSystemTray;
  if (enum_string == "about_page")
    return LaunchSource::kAboutPage;
  if (enum_string == "keyboard")
    return LaunchSource::kKeyboard;
  if (enum_string == "extensions_page")
    return LaunchSource::kExtensionsPage;
  if (enum_string == "management_api")
    return LaunchSource::kManagementApi;
  if (enum_string == "ephemeral_app")
    return LaunchSource::kEphemeralApp;
  if (enum_string == "background")
    return LaunchSource::kBackground;
  if (enum_string == "kiosk")
    return LaunchSource::kKiosk;
  if (enum_string == "chrome_internal")
    return LaunchSource::kChromeInternal;
  if (enum_string == "test")
    return LaunchSource::kTest;
  if (enum_string == "installed_notification")
    return LaunchSource::kInstalledNotification;
  if (enum_string == "context_menu")
    return LaunchSource::kContextMenu;
  if (enum_string == "arc")
    return LaunchSource::kArc;
  if (enum_string == "intent_url")
    return LaunchSource::kIntentUrl;
  if (enum_string == "app_home_page")
    return LaunchSource::kAppHomePage;
  return LaunchSource::kNone;
}

std::u16string GetLaunchSourceParseError(base::StringPiece enum_string) {
  return u"expected \"untracked\" or \"app_launcher\" or \"new_tab_page\" or \"reload\" or \"restart\" or \"load_and_launch\" or \"command_line\" or \"file_handler\" or \"url_handler\" or \"system_tray\" or \"about_page\" or \"keyboard\" or \"extensions_page\" or \"management_api\" or \"ephemeral_app\" or \"background\" or \"kiosk\" or \"chrome_internal\" or \"test\" or \"installed_notification\" or \"context_menu\" or \"arc\" or \"intent_url\" or \"app_home_page\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ActionType enum_param) {
  switch (enum_param) {
    case ActionType::kNewNote:
      return "new_note";
    case ActionType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ActionType ParseActionType(base::StringPiece enum_string) {
  if (enum_string == "new_note")
    return ActionType::kNewNote;
  return ActionType::kNone;
}

std::u16string GetActionTypeParseError(base::StringPiece enum_string) {
  return u"expected \"new_note\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ActionData::ActionData()
: action_type() {}

ActionData::~ActionData() = default;
ActionData::ActionData(ActionData&& rhs) = default;
ActionData& ActionData::operator=(ActionData&& rhs) = default;
ActionData ActionData::Clone() const {
  ActionData out;
  out.action_type = action_type;
  out.is_lock_screen_action = is_lock_screen_action;
  out.restore_last_action_state = restore_last_action_state;
  return out;
}

// static
bool ActionData::Populate(
    const base::Value::Dict& dict, ActionData& out) {
  const base::Value* action_type_value = dict.Find("actionType");
  if (!action_type_value) {
    return false;
  }
  {
    const std::string* action_type_as_string = (*action_type_value).GetIfString();
    if (!action_type_as_string) {
      return false;
    }
    out.action_type = ParseActionType(*action_type_as_string);
    if (out.action_type == ActionType()) {
      return false;
    }
  }

  const base::Value* is_lock_screen_action_value = dict.Find("isLockScreenAction");
  if (is_lock_screen_action_value) {
    {
      auto temp = (*is_lock_screen_action_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_lock_screen_action = absl::nullopt;
        return false;
      }
      out.is_lock_screen_action = *temp;
    }
  }

  const base::Value* restore_last_action_state_value = dict.Find("restoreLastActionState");
  if (restore_last_action_state_value) {
    {
      auto temp = (*restore_last_action_state_value).GetIfBool();
      if (!temp.has_value()) {
        out.restore_last_action_state = absl::nullopt;
        return false;
      }
      out.restore_last_action_state = *temp;
    }
  }

  return true;
}

// static
bool ActionData::Populate(
    const base::Value& value, ActionData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ActionData> ActionData::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ActionData>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<ActionData> ActionData::FromValue(const base::Value::Dict& value) {
  ActionData out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ActionData> ActionData::FromValue(const base::Value& value) {
  ActionData out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ActionData::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("actionType", app_runtime::ToString(this->action_type));

  if (this->is_lock_screen_action) {
    to_value_result.Set("isLockScreenAction", *this->is_lock_screen_action);

  }
  if (this->restore_last_action_state) {
    to_value_result.Set("restoreLastActionState", *this->restore_last_action_state);

  }

  return to_value_result;
}


LaunchData::LaunchData()
: source() {}

LaunchData::~LaunchData() = default;
LaunchData::LaunchData(LaunchData&& rhs) = default;
LaunchData& LaunchData::operator=(LaunchData&& rhs) = default;
LaunchData LaunchData::Clone() const {
  LaunchData out;
  out.id = id;
  if (items) {
    out.items.emplace();
    out.items->reserve(items->size());
    for (const auto& element : *items) {
      json_schema_compiler::util::AppendToContainer(*out.items, element.Clone());
    }
  }
  out.url = url;
  out.referrer_url = referrer_url;
  out.is_demo_session = is_demo_session;
  out.is_kiosk_session = is_kiosk_session;
  out.is_public_session = is_public_session;
  out.source = source;
  if (action_data) {
    out.action_data = action_data->Clone();
  }
  return out;
}

// static
bool LaunchData::Populate(
    const base::Value::Dict& dict, LaunchData& out) {
  out.source = LaunchSource();
  const base::Value* id_value = dict.Find("id");
  if (id_value) {
    {
      auto* temp = (*id_value).GetIfString();
      if (!temp) {
        out.id = absl::nullopt;
        return false;
      }
      out.id = *temp;
    }
  }

  const base::Value* items_value = dict.Find("items");
  if (items_value) {
    {
      if (!(*items_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*items_value).GetList(), out.items)) {
          return false;
        }
      }
    }
  }

  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    {
      auto* temp = (*url_value).GetIfString();
      if (!temp) {
        out.url = absl::nullopt;
        return false;
      }
      out.url = *temp;
    }
  }

  const base::Value* referrer_url_value = dict.Find("referrerUrl");
  if (referrer_url_value) {
    {
      auto* temp = (*referrer_url_value).GetIfString();
      if (!temp) {
        out.referrer_url = absl::nullopt;
        return false;
      }
      out.referrer_url = *temp;
    }
  }

  const base::Value* is_demo_session_value = dict.Find("isDemoSession");
  if (is_demo_session_value) {
    {
      auto temp = (*is_demo_session_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_demo_session = absl::nullopt;
        return false;
      }
      out.is_demo_session = *temp;
    }
  }

  const base::Value* is_kiosk_session_value = dict.Find("isKioskSession");
  if (is_kiosk_session_value) {
    {
      auto temp = (*is_kiosk_session_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_kiosk_session = absl::nullopt;
        return false;
      }
      out.is_kiosk_session = *temp;
    }
  }

  const base::Value* is_public_session_value = dict.Find("isPublicSession");
  if (is_public_session_value) {
    {
      auto temp = (*is_public_session_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_public_session = absl::nullopt;
        return false;
      }
      out.is_public_session = *temp;
    }
  }

  const base::Value* source_value = dict.Find("source");
  if (source_value) {
    {
      const std::string* launch_source_as_string = (*source_value).GetIfString();
      if (!launch_source_as_string) {
        return false;
      }
      out.source = ParseLaunchSource(*launch_source_as_string);
      if (out.source == LaunchSource()) {
        return false;
      }
    }
    } else {
    out.source = LaunchSource();
  }

  const base::Value* action_data_value = dict.Find("actionData");
  if (action_data_value) {
    {
      if (!(*action_data_value).is_dict()) {
        return false;
      }
      else {
        ActionData temp;
        if (!ActionData::Populate((*action_data_value).GetDict(), temp))
          return false;
        out.action_data = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool LaunchData::Populate(
    const base::Value& value, LaunchData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<LaunchData> LaunchData::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<LaunchData>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<LaunchData> LaunchData::FromValue(const base::Value::Dict& value) {
  LaunchData out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<LaunchData> LaunchData::FromValue(const base::Value& value) {
  LaunchData out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict LaunchData::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->id) {
    to_value_result.Set("id", *this->id);

  }
  if (this->items) {
    to_value_result.Set("items", json_schema_compiler::util::CreateValueFromArray(*this->items));

  }
  if (this->url) {
    to_value_result.Set("url", *this->url);

  }
  if (this->referrer_url) {
    to_value_result.Set("referrerUrl", *this->referrer_url);

  }
  if (this->is_demo_session) {
    to_value_result.Set("isDemoSession", *this->is_demo_session);

  }
  if (this->is_kiosk_session) {
    to_value_result.Set("isKioskSession", *this->is_kiosk_session);

  }
  if (this->is_public_session) {
    to_value_result.Set("isPublicSession", *this->is_public_session);

  }
  if (this->source != LaunchSource()) {
    to_value_result.Set("source", app_runtime::ToString(this->source));

  }
  if (this->action_data) {
    to_value_result.Set("actionData", (this->action_data)->ToValue());

  }

  return to_value_result;
}


EmbedRequest::EmbedRequest()
 {}

EmbedRequest::~EmbedRequest() = default;
EmbedRequest::EmbedRequest(EmbedRequest&& rhs) = default;
EmbedRequest& EmbedRequest::operator=(EmbedRequest&& rhs) = default;
EmbedRequest EmbedRequest::Clone() const {
  EmbedRequest out;
  out.embedder_id = embedder_id;
  if (data) {
    out.data = data->Clone();
  }
  return out;
}

// static
bool EmbedRequest::Populate(
    const base::Value::Dict& dict, EmbedRequest& out) {
  const base::Value* embedder_id_value = dict.Find("embedderId");
  if (!embedder_id_value) {
    return false;
  }
  {
    auto* temp = (*embedder_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.embedder_id = *temp;
  }

  const base::Value* data_value = dict.Find("data");
  if (data_value) {
    {
      out.data = (*data_value).Clone();
    }
  }

  return true;
}

// static
bool EmbedRequest::Populate(
    const base::Value& value, EmbedRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<EmbedRequest> EmbedRequest::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<EmbedRequest>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<EmbedRequest> EmbedRequest::FromValue(const base::Value::Dict& value) {
  EmbedRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<EmbedRequest> EmbedRequest::FromValue(const base::Value& value) {
  EmbedRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict EmbedRequest::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("embedderId", this->embedder_id);

  if (this->data) {
    to_value_result.Set("data", (this->data)->Clone());

  }

  return to_value_result;
}



//
// Events
//

namespace OnEmbedRequested {

const char kEventName[] = "app.runtime.onEmbedRequested";

base::Value::List Create(const EmbedRequest& request) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((request).ToValue());

  return create_results;
}

}  // namespace OnEmbedRequested

namespace OnLaunched {

const char kEventName[] = "app.runtime.onLaunched";

base::Value::List Create(const LaunchData& launch_data) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((launch_data).ToValue());

  return create_results;
}

}  // namespace OnLaunched

namespace OnRestarted {

const char kEventName[] = "app.runtime.onRestarted";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnRestarted

}  // namespace app_runtime
}  // namespace api
}  // namespace extensions

