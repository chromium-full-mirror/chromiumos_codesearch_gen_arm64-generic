// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/notifications.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/notifications.h"

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


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace notifications {
//
// Types
//

const char* ToString(TemplateType enum_param) {
  switch (enum_param) {
    case TemplateType::kBasic:
      return "basic";
    case TemplateType::kImage:
      return "image";
    case TemplateType::kList:
      return "list";
    case TemplateType::kProgress:
      return "progress";
    case TemplateType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

TemplateType ParseTemplateType(base::StringPiece enum_string) {
  if (enum_string == "basic")
    return TemplateType::kBasic;
  if (enum_string == "image")
    return TemplateType::kImage;
  if (enum_string == "list")
    return TemplateType::kList;
  if (enum_string == "progress")
    return TemplateType::kProgress;
  return TemplateType::kNone;
}

std::u16string GetTemplateTypeParseError(base::StringPiece enum_string) {
  return u"expected \"basic\" or \"image\" or \"list\" or \"progress\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(PermissionLevel enum_param) {
  switch (enum_param) {
    case PermissionLevel::kGranted:
      return "granted";
    case PermissionLevel::kDenied:
      return "denied";
    case PermissionLevel::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

PermissionLevel ParsePermissionLevel(base::StringPiece enum_string) {
  if (enum_string == "granted")
    return PermissionLevel::kGranted;
  if (enum_string == "denied")
    return PermissionLevel::kDenied;
  return PermissionLevel::kNone;
}

std::u16string GetPermissionLevelParseError(base::StringPiece enum_string) {
  return u"expected \"granted\" or \"denied\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


NotificationItem::NotificationItem()
 {}

NotificationItem::~NotificationItem() = default;
NotificationItem::NotificationItem(NotificationItem&& rhs) noexcept = default;
NotificationItem& NotificationItem::operator=(NotificationItem&& rhs) noexcept = default;
NotificationItem NotificationItem::Clone() const {
  NotificationItem out;
  out.title = title;
  out.message = message;
  return out;
}

// static
bool NotificationItem::Populate(
    const base::Value::Dict& dict, NotificationItem& out) {
  const base::Value* title_value = dict.Find("title");
  if (!title_value) {
    return false;
  }
  {
    auto* temp = (*title_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.title = *temp;
  }

  const base::Value* message_value = dict.Find("message");
  if (!message_value) {
    return false;
  }
  {
    auto* temp = (*message_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.message = *temp;
  }

  return true;
}

// static
bool NotificationItem::Populate(
    const base::Value& value, NotificationItem& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<NotificationItem> NotificationItem::FromValue(const base::Value::Dict& value) {
  NotificationItem out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<NotificationItem> NotificationItem::FromValue(const base::Value& value) {
  NotificationItem out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict NotificationItem::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("title", this->title);

  to_value_result.Set("message", this->message);


  return to_value_result;
}


NotificationBitmap::NotificationBitmap()
: width(0),
height(0) {}

NotificationBitmap::~NotificationBitmap() = default;
NotificationBitmap::NotificationBitmap(NotificationBitmap&& rhs) noexcept = default;
NotificationBitmap& NotificationBitmap::operator=(NotificationBitmap&& rhs) noexcept = default;
NotificationBitmap NotificationBitmap::Clone() const {
  NotificationBitmap out;
  out.width = width;
  out.height = height;
  out.data = data;
  return out;
}

// static
bool NotificationBitmap::Populate(
    const base::Value::Dict& dict, NotificationBitmap& out) {
  const base::Value* width_value = dict.Find("width");
  if (!width_value) {
    return false;
  }
  {
    auto temp = (*width_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.width = *temp;
  }

  const base::Value* height_value = dict.Find("height");
  if (!height_value) {
    return false;
  }
  {
    auto temp = (*height_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.height = *temp;
  }

  const base::Value* data_value = dict.Find("data");
  if (data_value) {
    {
      if (!(*data_value).is_blob()) {
        return false;
      }
      else {
        out.data = (*data_value).GetBlob();
      }
    }
  }

  return true;
}

// static
bool NotificationBitmap::Populate(
    const base::Value& value, NotificationBitmap& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<NotificationBitmap> NotificationBitmap::FromValue(const base::Value::Dict& value) {
  NotificationBitmap out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<NotificationBitmap> NotificationBitmap::FromValue(const base::Value& value) {
  NotificationBitmap out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict NotificationBitmap::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("width", this->width);

  to_value_result.Set("height", this->height);

  if (this->data) {
    to_value_result.Set("data", base::Value(*this->data));

  }

  return to_value_result;
}


NotificationButton::NotificationButton()
 {}

NotificationButton::~NotificationButton() = default;
NotificationButton::NotificationButton(NotificationButton&& rhs) noexcept = default;
NotificationButton& NotificationButton::operator=(NotificationButton&& rhs) noexcept = default;
NotificationButton NotificationButton::Clone() const {
  NotificationButton out;
  out.title = title;
  out.icon_url = icon_url;
  if (icon_bitmap) {
    out.icon_bitmap = icon_bitmap->Clone();
  }
  return out;
}

// static
bool NotificationButton::Populate(
    const base::Value::Dict& dict, NotificationButton& out) {
  const base::Value* title_value = dict.Find("title");
  if (!title_value) {
    return false;
  }
  {
    auto* temp = (*title_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.title = *temp;
  }

  const base::Value* icon_url_value = dict.Find("iconUrl");
  if (icon_url_value) {
    {
      auto* temp = (*icon_url_value).GetIfString();
      if (!temp) {
        out.icon_url = std::nullopt;
        return false;
      }
      out.icon_url = *temp;
    }
  }

  const base::Value* icon_bitmap_value = dict.Find("iconBitmap");
  if (icon_bitmap_value) {
    {
      if (!(*icon_bitmap_value).is_dict()) {
        return false;
      }
      else {
        NotificationBitmap temp;
        if (!NotificationBitmap::Populate((*icon_bitmap_value).GetDict(), temp))
          return false;
        out.icon_bitmap = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool NotificationButton::Populate(
    const base::Value& value, NotificationButton& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<NotificationButton> NotificationButton::FromValue(const base::Value::Dict& value) {
  NotificationButton out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<NotificationButton> NotificationButton::FromValue(const base::Value& value) {
  NotificationButton out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict NotificationButton::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("title", this->title);

  if (this->icon_url) {
    to_value_result.Set("iconUrl", *this->icon_url);

  }
  if (this->icon_bitmap) {
    to_value_result.Set("iconBitmap", (this->icon_bitmap)->ToValue());

  }

  return to_value_result;
}


NotificationOptions::NotificationOptions()
: type() {}

NotificationOptions::~NotificationOptions() = default;
NotificationOptions::NotificationOptions(NotificationOptions&& rhs) noexcept = default;
NotificationOptions& NotificationOptions::operator=(NotificationOptions&& rhs) noexcept = default;
NotificationOptions NotificationOptions::Clone() const {
  NotificationOptions out;
  out.type = type;
  out.icon_url = icon_url;
  if (icon_bitmap) {
    out.icon_bitmap = icon_bitmap->Clone();
  }
  out.app_icon_mask_url = app_icon_mask_url;
  if (app_icon_mask_bitmap) {
    out.app_icon_mask_bitmap = app_icon_mask_bitmap->Clone();
  }
  out.title = title;
  out.message = message;
  out.context_message = context_message;
  out.priority = priority;
  out.event_time = event_time;
  if (buttons) {
    out.buttons.emplace();
    out.buttons->reserve(buttons->size());
    for (const auto& element : *buttons) {
      json_schema_compiler::util::AppendToContainer(*out.buttons, element.Clone());
    }
  }
  out.expanded_message = expanded_message;
  out.image_url = image_url;
  if (image_bitmap) {
    out.image_bitmap = image_bitmap->Clone();
  }
  if (items) {
    out.items.emplace();
    out.items->reserve(items->size());
    for (const auto& element : *items) {
      json_schema_compiler::util::AppendToContainer(*out.items, element.Clone());
    }
  }
  out.progress = progress;
  out.is_clickable = is_clickable;
  out.require_interaction = require_interaction;
  out.silent = silent;
  return out;
}

// static
bool NotificationOptions::Populate(
    const base::Value::Dict& dict, NotificationOptions& out) {
  out.type = TemplateType();
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    {
      const std::string* template_type_as_string = (*type_value).GetIfString();
      if (!template_type_as_string) {
        return false;
      }
      out.type = ParseTemplateType(*template_type_as_string);
      if (out.type == TemplateType()) {
        return false;
      }
    }
    } else {
    out.type = TemplateType();
  }

  const base::Value* icon_url_value = dict.Find("iconUrl");
  if (icon_url_value) {
    {
      auto* temp = (*icon_url_value).GetIfString();
      if (!temp) {
        out.icon_url = std::nullopt;
        return false;
      }
      out.icon_url = *temp;
    }
  }

  const base::Value* icon_bitmap_value = dict.Find("iconBitmap");
  if (icon_bitmap_value) {
    {
      if (!(*icon_bitmap_value).is_dict()) {
        return false;
      }
      else {
        NotificationBitmap temp;
        if (!NotificationBitmap::Populate((*icon_bitmap_value).GetDict(), temp))
          return false;
        out.icon_bitmap = std::move(temp);
      }
    }
  }

  const base::Value* app_icon_mask_url_value = dict.Find("appIconMaskUrl");
  if (app_icon_mask_url_value) {
    {
      auto* temp = (*app_icon_mask_url_value).GetIfString();
      if (!temp) {
        out.app_icon_mask_url = std::nullopt;
        return false;
      }
      out.app_icon_mask_url = *temp;
    }
  }

  const base::Value* app_icon_mask_bitmap_value = dict.Find("appIconMaskBitmap");
  if (app_icon_mask_bitmap_value) {
    {
      if (!(*app_icon_mask_bitmap_value).is_dict()) {
        return false;
      }
      else {
        NotificationBitmap temp;
        if (!NotificationBitmap::Populate((*app_icon_mask_bitmap_value).GetDict(), temp))
          return false;
        out.app_icon_mask_bitmap = std::move(temp);
      }
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

  const base::Value* message_value = dict.Find("message");
  if (message_value) {
    {
      auto* temp = (*message_value).GetIfString();
      if (!temp) {
        out.message = std::nullopt;
        return false;
      }
      out.message = *temp;
    }
  }

  const base::Value* context_message_value = dict.Find("contextMessage");
  if (context_message_value) {
    {
      auto* temp = (*context_message_value).GetIfString();
      if (!temp) {
        out.context_message = std::nullopt;
        return false;
      }
      out.context_message = *temp;
    }
  }

  const base::Value* priority_value = dict.Find("priority");
  if (priority_value) {
    {
      auto temp = (*priority_value).GetIfInt();
      if (!temp.has_value()) {
        out.priority = std::nullopt;
        return false;
      }
      out.priority = *temp;
    }
  }

  const base::Value* event_time_value = dict.Find("eventTime");
  if (event_time_value) {
    {
      auto temp = (*event_time_value).GetIfDouble();
      if (!temp.has_value()) {
        out.event_time = std::nullopt;
        return false;
      }
      out.event_time = *temp;
    }
  }

  const base::Value* buttons_value = dict.Find("buttons");
  if (buttons_value) {
    {
      if (!(*buttons_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*buttons_value).GetList(), out.buttons)) {
          return false;
        }
      }
    }
  }

  const base::Value* expanded_message_value = dict.Find("expandedMessage");
  if (expanded_message_value) {
    {
      auto* temp = (*expanded_message_value).GetIfString();
      if (!temp) {
        out.expanded_message = std::nullopt;
        return false;
      }
      out.expanded_message = *temp;
    }
  }

  const base::Value* image_url_value = dict.Find("imageUrl");
  if (image_url_value) {
    {
      auto* temp = (*image_url_value).GetIfString();
      if (!temp) {
        out.image_url = std::nullopt;
        return false;
      }
      out.image_url = *temp;
    }
  }

  const base::Value* image_bitmap_value = dict.Find("imageBitmap");
  if (image_bitmap_value) {
    {
      if (!(*image_bitmap_value).is_dict()) {
        return false;
      }
      else {
        NotificationBitmap temp;
        if (!NotificationBitmap::Populate((*image_bitmap_value).GetDict(), temp))
          return false;
        out.image_bitmap = std::move(temp);
      }
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

  const base::Value* progress_value = dict.Find("progress");
  if (progress_value) {
    {
      auto temp = (*progress_value).GetIfInt();
      if (!temp.has_value()) {
        out.progress = std::nullopt;
        return false;
      }
      out.progress = *temp;
    }
  }

  const base::Value* is_clickable_value = dict.Find("isClickable");
  if (is_clickable_value) {
    {
      auto temp = (*is_clickable_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_clickable = std::nullopt;
        return false;
      }
      out.is_clickable = *temp;
    }
  }

  const base::Value* require_interaction_value = dict.Find("requireInteraction");
  if (require_interaction_value) {
    {
      auto temp = (*require_interaction_value).GetIfBool();
      if (!temp.has_value()) {
        out.require_interaction = std::nullopt;
        return false;
      }
      out.require_interaction = *temp;
    }
  }

  const base::Value* silent_value = dict.Find("silent");
  if (silent_value) {
    {
      auto temp = (*silent_value).GetIfBool();
      if (!temp.has_value()) {
        out.silent = std::nullopt;
        return false;
      }
      out.silent = *temp;
    }
  }

  return true;
}

// static
bool NotificationOptions::Populate(
    const base::Value& value, NotificationOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<NotificationOptions> NotificationOptions::FromValue(const base::Value::Dict& value) {
  NotificationOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<NotificationOptions> NotificationOptions::FromValue(const base::Value& value) {
  NotificationOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict NotificationOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->type != TemplateType()) {
    to_value_result.Set("type", notifications::ToString(this->type));

  }
  if (this->icon_url) {
    to_value_result.Set("iconUrl", *this->icon_url);

  }
  if (this->icon_bitmap) {
    to_value_result.Set("iconBitmap", (this->icon_bitmap)->ToValue());

  }
  if (this->app_icon_mask_url) {
    to_value_result.Set("appIconMaskUrl", *this->app_icon_mask_url);

  }
  if (this->app_icon_mask_bitmap) {
    to_value_result.Set("appIconMaskBitmap", (this->app_icon_mask_bitmap)->ToValue());

  }
  if (this->title) {
    to_value_result.Set("title", *this->title);

  }
  if (this->message) {
    to_value_result.Set("message", *this->message);

  }
  if (this->context_message) {
    to_value_result.Set("contextMessage", *this->context_message);

  }
  if (this->priority) {
    to_value_result.Set("priority", *this->priority);

  }
  if (this->event_time) {
    to_value_result.Set("eventTime", *this->event_time);

  }
  if (this->buttons) {
    to_value_result.Set("buttons", json_schema_compiler::util::CreateValueFromArray(*this->buttons));

  }
  if (this->expanded_message) {
    to_value_result.Set("expandedMessage", *this->expanded_message);

  }
  if (this->image_url) {
    to_value_result.Set("imageUrl", *this->image_url);

  }
  if (this->image_bitmap) {
    to_value_result.Set("imageBitmap", (this->image_bitmap)->ToValue());

  }
  if (this->items) {
    to_value_result.Set("items", json_schema_compiler::util::CreateValueFromArray(*this->items));

  }
  if (this->progress) {
    to_value_result.Set("progress", *this->progress);

  }
  if (this->is_clickable) {
    to_value_result.Set("isClickable", *this->is_clickable);

  }
  if (this->require_interaction) {
    to_value_result.Set("requireInteraction", *this->require_interaction);

  }
  if (this->silent) {
    to_value_result.Set("silent", *this->silent);

  }

  return to_value_result;
}



//
// Functions
//

namespace Create {

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
    const base::Value& notification_id_value = args[0];
    {
      auto* temp = notification_id_value.GetIfString();
      if (!temp) {
        params.notification_id = std::nullopt;
        return std::nullopt;
      }
      params.notification_id = *temp;
    }
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& options_value = args[1];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      if (!NotificationOptions::Populate(options_value.GetDict(), params.options)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& notification_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(notification_id);

  return create_results;
}
}  // namespace Create

namespace Update {

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
    const base::Value& notification_id_value = args[0];
    {
      auto* temp = notification_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.notification_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& options_value = args[1];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      if (!NotificationOptions::Populate(options_value.GetDict(), params.options)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool was_updated) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(was_updated);

  return create_results;
}
}  // namespace Update

namespace Clear {

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
    const base::Value& notification_id_value = args[0];
    {
      auto* temp = notification_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.notification_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool was_cleared) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(was_cleared);

  return create_results;
}
}  // namespace Clear

namespace GetAll {

Results::Notifications::Notifications()
 {}

Results::Notifications::~Notifications() = default;
Results::Notifications::Notifications(Notifications&& rhs) noexcept = default;
Results::Notifications& Results::Notifications::operator=(Notifications&& rhs) noexcept = default;
base::Value::Dict Results::Notifications::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::Value::List Results::Create(const Notifications& notifications) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((notifications).ToValue());

  return create_results;
}
}  // namespace GetAll

namespace GetPermissionLevel {

base::Value::List Results::Create(const PermissionLevel& level) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(notifications::ToString(level));

  return create_results;
}
}  // namespace GetPermissionLevel

//
// Events
//

namespace OnClosed {

const char kEventName[] = "notifications.onClosed";

base::Value::List Create(const std::string& notification_id, bool by_user) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(notification_id);

  create_results.Append(by_user);

  return create_results;
}

}  // namespace OnClosed

namespace OnClicked {

const char kEventName[] = "notifications.onClicked";

base::Value::List Create(const std::string& notification_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(notification_id);

  return create_results;
}

}  // namespace OnClicked

namespace OnButtonClicked {

const char kEventName[] = "notifications.onButtonClicked";

base::Value::List Create(const std::string& notification_id, int button_index) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(notification_id);

  create_results.Append(button_index);

  return create_results;
}

}  // namespace OnButtonClicked

namespace OnPermissionLevelChanged {

const char kEventName[] = "notifications.onPermissionLevelChanged";

base::Value::List Create(const PermissionLevel& level) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(notifications::ToString(level));

  return create_results;
}

}  // namespace OnPermissionLevelChanged

namespace OnShowSettings {

const char kEventName[] = "notifications.onShowSettings";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnShowSettings

}  // namespace notifications
}  // namespace api
}  // namespace extensions

