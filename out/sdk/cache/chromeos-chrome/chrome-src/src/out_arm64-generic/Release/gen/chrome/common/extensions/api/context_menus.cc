// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/context_menus.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/context_menus.h"

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
#include "chrome/common/extensions/api/tabs.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace context_menus {
//
// Properties
//

const int ACTION_MENU_TOP_LEVEL_LIMIT = 6;

//
// Types
//

const char* ToString(ContextType enum_param) {
  switch (enum_param) {
    case CONTEXT_TYPE_ALL:
      return "all";
    case CONTEXT_TYPE_PAGE:
      return "page";
    case CONTEXT_TYPE_FRAME:
      return "frame";
    case CONTEXT_TYPE_SELECTION:
      return "selection";
    case CONTEXT_TYPE_LINK:
      return "link";
    case CONTEXT_TYPE_EDITABLE:
      return "editable";
    case CONTEXT_TYPE_IMAGE:
      return "image";
    case CONTEXT_TYPE_VIDEO:
      return "video";
    case CONTEXT_TYPE_AUDIO:
      return "audio";
    case CONTEXT_TYPE_LAUNCHER:
      return "launcher";
    case CONTEXT_TYPE_BROWSER_ACTION:
      return "browser_action";
    case CONTEXT_TYPE_PAGE_ACTION:
      return "page_action";
    case CONTEXT_TYPE_ACTION:
      return "action";
    case CONTEXT_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

ContextType ParseContextType(base::StringPiece enum_string) {
  if (enum_string == "all")
    return CONTEXT_TYPE_ALL;
  if (enum_string == "page")
    return CONTEXT_TYPE_PAGE;
  if (enum_string == "frame")
    return CONTEXT_TYPE_FRAME;
  if (enum_string == "selection")
    return CONTEXT_TYPE_SELECTION;
  if (enum_string == "link")
    return CONTEXT_TYPE_LINK;
  if (enum_string == "editable")
    return CONTEXT_TYPE_EDITABLE;
  if (enum_string == "image")
    return CONTEXT_TYPE_IMAGE;
  if (enum_string == "video")
    return CONTEXT_TYPE_VIDEO;
  if (enum_string == "audio")
    return CONTEXT_TYPE_AUDIO;
  if (enum_string == "launcher")
    return CONTEXT_TYPE_LAUNCHER;
  if (enum_string == "browser_action")
    return CONTEXT_TYPE_BROWSER_ACTION;
  if (enum_string == "page_action")
    return CONTEXT_TYPE_PAGE_ACTION;
  if (enum_string == "action")
    return CONTEXT_TYPE_ACTION;
  return CONTEXT_TYPE_NONE;
}

std::u16string GetContextTypeParseError(base::StringPiece enum_string) {
  return u"expected \"all\" or \"page\" or \"frame\" or \"selection\" or \"link\" or \"editable\" or \"image\" or \"video\" or \"audio\" or \"launcher\" or \"browser_action\" or \"page_action\" or \"action\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ItemType enum_param) {
  switch (enum_param) {
    case ITEM_TYPE_NORMAL:
      return "normal";
    case ITEM_TYPE_CHECKBOX:
      return "checkbox";
    case ITEM_TYPE_RADIO:
      return "radio";
    case ITEM_TYPE_SEPARATOR:
      return "separator";
    case ITEM_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

ItemType ParseItemType(base::StringPiece enum_string) {
  if (enum_string == "normal")
    return ITEM_TYPE_NORMAL;
  if (enum_string == "checkbox")
    return ITEM_TYPE_CHECKBOX;
  if (enum_string == "radio")
    return ITEM_TYPE_RADIO;
  if (enum_string == "separator")
    return ITEM_TYPE_SEPARATOR;
  return ITEM_TYPE_NONE;
}

std::u16string GetItemTypeParseError(base::StringPiece enum_string) {
  return u"expected \"normal\" or \"checkbox\" or \"radio\" or \"separator\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


OnClickData::MenuItemId::MenuItemId()
 {}

OnClickData::MenuItemId::~MenuItemId() = default;
OnClickData::MenuItemId::MenuItemId(MenuItemId&& rhs) = default;
OnClickData::MenuItemId& OnClickData::MenuItemId::operator=(MenuItemId&& rhs) = default;
OnClickData::MenuItemId OnClickData::MenuItemId::Clone() const {
  MenuItemId out;
  out.as_integer = as_integer;
  out.as_string = as_string;
  return out;
}

// static
bool OnClickData::MenuItemId::Populate(
    const base::Value& value, MenuItemId& out) {
  if (value.type() == base::Value::Type::INTEGER) {
    {
      auto temp = value.GetIfInt();
      if (!temp.has_value()) {
        out.as_integer = absl::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out.as_string = absl::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  return false;
}

// static
absl::optional<OnClickData::MenuItemId> OnClickData::MenuItemId::FromValue(const base::Value& value) {
  MenuItemId out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value OnClickData::MenuItemId::ToValue() const {
  base::Value result;
  if (as_integer) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for menu_item_id";
    result = base::Value(*as_integer);

  }
  if (as_string) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for menu_item_id";
    result = base::Value(*as_string);

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for menu_item_id";
  return result;
}


OnClickData::ParentMenuItemId::ParentMenuItemId()
 {}

OnClickData::ParentMenuItemId::~ParentMenuItemId() = default;
OnClickData::ParentMenuItemId::ParentMenuItemId(ParentMenuItemId&& rhs) = default;
OnClickData::ParentMenuItemId& OnClickData::ParentMenuItemId::operator=(ParentMenuItemId&& rhs) = default;
OnClickData::ParentMenuItemId OnClickData::ParentMenuItemId::Clone() const {
  ParentMenuItemId out;
  out.as_integer = as_integer;
  out.as_string = as_string;
  return out;
}

// static
bool OnClickData::ParentMenuItemId::Populate(
    const base::Value& value, ParentMenuItemId& out) {
  if (value.type() == base::Value::Type::INTEGER) {
    {
      auto temp = value.GetIfInt();
      if (!temp.has_value()) {
        out.as_integer = absl::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out.as_string = absl::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  return false;
}

// static
absl::optional<OnClickData::ParentMenuItemId> OnClickData::ParentMenuItemId::FromValue(const base::Value& value) {
  ParentMenuItemId out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value OnClickData::ParentMenuItemId::ToValue() const {
  base::Value result;
  if (as_integer) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for parent_menu_item_id";
    result = base::Value(*as_integer);

  }
  if (as_string) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for parent_menu_item_id";
    result = base::Value(*as_string);

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for parent_menu_item_id";
  return result;
}



OnClickData::OnClickData()
: editable(false) {}

OnClickData::~OnClickData() = default;
OnClickData::OnClickData(OnClickData&& rhs) = default;
OnClickData& OnClickData::operator=(OnClickData&& rhs) = default;
OnClickData OnClickData::Clone() const {
  OnClickData out;
  out.menu_item_id = menu_item_id.Clone();
  if (parent_menu_item_id) {
    out.parent_menu_item_id = parent_menu_item_id->Clone();
  }
  out.media_type = media_type;
  out.link_url = link_url;
  out.src_url = src_url;
  out.page_url = page_url;
  out.frame_url = frame_url;
  out.frame_id = frame_id;
  out.selection_text = selection_text;
  out.editable = editable;
  out.was_checked = was_checked;
  out.checked = checked;
  return out;
}

// static
bool OnClickData::Populate(
    const base::Value::Dict& dict, OnClickData& out) {
  const base::Value* menu_item_id_value = dict.Find("menuItemId");
  if (!menu_item_id_value) {
    return false;
  }
  {
    if (!MenuItemId::Populate((*menu_item_id_value), out.menu_item_id))
      return false;
  }

  const base::Value* parent_menu_item_id_value = dict.Find("parentMenuItemId");
  if (parent_menu_item_id_value) {
    {
      ParentMenuItemId temp;
      if (!ParentMenuItemId::Populate((*parent_menu_item_id_value), temp))
        return false;
      out.parent_menu_item_id = std::move(temp);
    }
  }

  const base::Value* media_type_value = dict.Find("mediaType");
  if (media_type_value) {
    {
      auto* temp = (*media_type_value).GetIfString();
      if (!temp) {
        out.media_type = absl::nullopt;
        return false;
      }
      out.media_type = *temp;
    }
  }

  const base::Value* link_url_value = dict.Find("linkUrl");
  if (link_url_value) {
    {
      auto* temp = (*link_url_value).GetIfString();
      if (!temp) {
        out.link_url = absl::nullopt;
        return false;
      }
      out.link_url = *temp;
    }
  }

  const base::Value* src_url_value = dict.Find("srcUrl");
  if (src_url_value) {
    {
      auto* temp = (*src_url_value).GetIfString();
      if (!temp) {
        out.src_url = absl::nullopt;
        return false;
      }
      out.src_url = *temp;
    }
  }

  const base::Value* page_url_value = dict.Find("pageUrl");
  if (page_url_value) {
    {
      auto* temp = (*page_url_value).GetIfString();
      if (!temp) {
        out.page_url = absl::nullopt;
        return false;
      }
      out.page_url = *temp;
    }
  }

  const base::Value* frame_url_value = dict.Find("frameUrl");
  if (frame_url_value) {
    {
      auto* temp = (*frame_url_value).GetIfString();
      if (!temp) {
        out.frame_url = absl::nullopt;
        return false;
      }
      out.frame_url = *temp;
    }
  }

  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    {
      auto temp = (*frame_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.frame_id = absl::nullopt;
        return false;
      }
      out.frame_id = *temp;
    }
  }

  const base::Value* selection_text_value = dict.Find("selectionText");
  if (selection_text_value) {
    {
      auto* temp = (*selection_text_value).GetIfString();
      if (!temp) {
        out.selection_text = absl::nullopt;
        return false;
      }
      out.selection_text = *temp;
    }
  }

  const base::Value* editable_value = dict.Find("editable");
  if (!editable_value) {
    return false;
  }
  {
    auto temp = (*editable_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.editable = *temp;
  }

  const base::Value* was_checked_value = dict.Find("wasChecked");
  if (was_checked_value) {
    {
      auto temp = (*was_checked_value).GetIfBool();
      if (!temp.has_value()) {
        out.was_checked = absl::nullopt;
        return false;
      }
      out.was_checked = *temp;
    }
  }

  const base::Value* checked_value = dict.Find("checked");
  if (checked_value) {
    {
      auto temp = (*checked_value).GetIfBool();
      if (!temp.has_value()) {
        out.checked = absl::nullopt;
        return false;
      }
      out.checked = *temp;
    }
  }

  return true;
}

// static
bool OnClickData::Populate(
    const base::Value& value, OnClickData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<OnClickData> OnClickData::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<OnClickData>();
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
absl::optional<OnClickData> OnClickData::FromValue(const base::Value::Dict& value) {
  OnClickData out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<OnClickData> OnClickData::FromValue(const base::Value& value) {
  OnClickData out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict OnClickData::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("menuItemId", (this->menu_item_id).ToValue());

  if (this->parent_menu_item_id) {
    to_value_result.Set("parentMenuItemId", (this->parent_menu_item_id)->ToValue());

  }
  if (this->media_type) {
    to_value_result.Set("mediaType", *this->media_type);

  }
  if (this->link_url) {
    to_value_result.Set("linkUrl", *this->link_url);

  }
  if (this->src_url) {
    to_value_result.Set("srcUrl", *this->src_url);

  }
  if (this->page_url) {
    to_value_result.Set("pageUrl", *this->page_url);

  }
  if (this->frame_url) {
    to_value_result.Set("frameUrl", *this->frame_url);

  }
  if (this->frame_id) {
    to_value_result.Set("frameId", *this->frame_id);

  }
  if (this->selection_text) {
    to_value_result.Set("selectionText", *this->selection_text);

  }
  to_value_result.Set("editable", this->editable);

  if (this->was_checked) {
    to_value_result.Set("wasChecked", *this->was_checked);

  }
  if (this->checked) {
    to_value_result.Set("checked", *this->checked);

  }

  return to_value_result;
}



//
// Functions
//

namespace Create {

Params::CreateProperties::ParentId::ParentId()
 {}

Params::CreateProperties::ParentId::~ParentId() = default;
Params::CreateProperties::ParentId::ParentId(ParentId&& rhs) = default;
Params::CreateProperties::ParentId& Params::CreateProperties::ParentId::operator=(ParentId&& rhs) = default;
Params::CreateProperties::ParentId Params::CreateProperties::ParentId::Clone() const {
  ParentId out;
  out.as_integer = as_integer;
  out.as_string = as_string;
  return out;
}

// static
bool Params::CreateProperties::ParentId::Populate(
    const base::Value& value, ParentId& out) {
  if (value.type() == base::Value::Type::INTEGER) {
    {
      auto temp = value.GetIfInt();
      if (!temp.has_value()) {
        out.as_integer = absl::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out.as_string = absl::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  return false;
}

// static
absl::optional<Params::CreateProperties::ParentId> Params::CreateProperties::ParentId::FromValue(const base::Value& value) {
  ParentId out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}



Params::CreateProperties::CreateProperties()
: type() {}

Params::CreateProperties::~CreateProperties() = default;
Params::CreateProperties::CreateProperties(CreateProperties&& rhs) = default;
Params::CreateProperties& Params::CreateProperties::operator=(CreateProperties&& rhs) = default;
Params::CreateProperties Params::CreateProperties::Clone() const {
  CreateProperties out;
  out.type = type;
  out.id = id;
  out.title = title;
  out.checked = checked;
  out.contexts = contexts;
  out.visible = visible;
  if (onclick) {
    out.onclick = onclick->Clone();
  }
  if (parent_id) {
    out.parent_id = parent_id->Clone();
  }
  out.document_url_patterns = document_url_patterns;
  out.target_url_patterns = target_url_patterns;
  out.enabled = enabled;
  return out;
}

// static
bool Params::CreateProperties::Populate(
    const base::Value::Dict& dict, CreateProperties& out) {
  out.type = ItemType();
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    {
      const std::string* item_type_as_string = (*type_value).GetIfString();
      if (!item_type_as_string) {
        return false;
      }
      out.type = ParseItemType(*item_type_as_string);
      if (out.type == ItemType()) {
        return false;
      }
    }
    } else {
    out.type = ItemType();
  }

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

  const base::Value* title_value = dict.Find("title");
  if (title_value) {
    {
      auto* temp = (*title_value).GetIfString();
      if (!temp) {
        out.title = absl::nullopt;
        return false;
      }
      out.title = *temp;
    }
  }

  const base::Value* checked_value = dict.Find("checked");
  if (checked_value) {
    {
      auto temp = (*checked_value).GetIfBool();
      if (!temp.has_value()) {
        out.checked = absl::nullopt;
        return false;
      }
      out.checked = *temp;
    }
  }

  const base::Value* contexts_value = dict.Find("contexts");
  if (contexts_value) {
    {
      if (!(*contexts_value).is_list()) {
        return false;
      }
      else {
        out.contexts.emplace();
        for (const auto& it : ((*contexts_value)).GetList()) {
          ContextType tmp;
          const std::string* context_type_as_string = (it).GetIfString();
          if (!context_type_as_string) {
            return false;
          }
          tmp = ParseContextType(*context_type_as_string);
          if (tmp == ContextType()) {
            return false;
          }
          out.contexts->push_back(tmp);
        }
      }
    }
  }

  const base::Value* visible_value = dict.Find("visible");
  if (visible_value) {
    {
      auto temp = (*visible_value).GetIfBool();
      if (!temp.has_value()) {
        out.visible = absl::nullopt;
        return false;
      }
      out.visible = *temp;
    }
  }

  const base::Value* onclick_value = dict.Find("onclick");
  if (onclick_value) {
    {
      out.onclick.emplace();
    }
  }

  const base::Value* parent_id_value = dict.Find("parentId");
  if (parent_id_value) {
    {
      ParentId temp;
      if (!ParentId::Populate((*parent_id_value), temp))
        return false;
      out.parent_id = std::move(temp);
    }
  }

  const base::Value* document_url_patterns_value = dict.Find("documentUrlPatterns");
  if (document_url_patterns_value) {
    {
      if (!(*document_url_patterns_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*document_url_patterns_value).GetList(), out.document_url_patterns)) {
          return false;
        }
      }
    }
  }

  const base::Value* target_url_patterns_value = dict.Find("targetUrlPatterns");
  if (target_url_patterns_value) {
    {
      if (!(*target_url_patterns_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*target_url_patterns_value).GetList(), out.target_url_patterns)) {
          return false;
        }
      }
    }
  }

  const base::Value* enabled_value = dict.Find("enabled");
  if (enabled_value) {
    {
      auto temp = (*enabled_value).GetIfBool();
      if (!temp.has_value()) {
        out.enabled = absl::nullopt;
        return false;
      }
      out.enabled = *temp;
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
absl::optional<Params::CreateProperties> Params::CreateProperties::FromValue(const base::Value::Dict& value) {
  CreateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::CreateProperties> Params::CreateProperties::FromValue(const base::Value& value) {
  CreateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& create_properties_value = args[0];
    {
      if (!create_properties_value.is_dict()) {
        return absl::nullopt;
      }
      if (!CreateProperties::Populate(create_properties_value.GetDict(), params.create_properties)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace Create

namespace Update {

Params::Id::Id()
 {}

Params::Id::~Id() = default;
Params::Id::Id(Id&& rhs) = default;
Params::Id& Params::Id::operator=(Id&& rhs) = default;
Params::Id Params::Id::Clone() const {
  Id out;
  out.as_integer = as_integer;
  out.as_string = as_string;
  return out;
}

// static
bool Params::Id::Populate(
    const base::Value& value, Id& out) {
  if (value.type() == base::Value::Type::INTEGER) {
    {
      auto temp = value.GetIfInt();
      if (!temp.has_value()) {
        out.as_integer = absl::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out.as_string = absl::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  return false;
}

// static
absl::optional<Params::Id> Params::Id::FromValue(const base::Value& value) {
  Id out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


Params::UpdateProperties::ParentId::ParentId()
 {}

Params::UpdateProperties::ParentId::~ParentId() = default;
Params::UpdateProperties::ParentId::ParentId(ParentId&& rhs) = default;
Params::UpdateProperties::ParentId& Params::UpdateProperties::ParentId::operator=(ParentId&& rhs) = default;
Params::UpdateProperties::ParentId Params::UpdateProperties::ParentId::Clone() const {
  ParentId out;
  out.as_integer = as_integer;
  out.as_string = as_string;
  return out;
}

// static
bool Params::UpdateProperties::ParentId::Populate(
    const base::Value& value, ParentId& out) {
  if (value.type() == base::Value::Type::INTEGER) {
    {
      auto temp = value.GetIfInt();
      if (!temp.has_value()) {
        out.as_integer = absl::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out.as_string = absl::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  return false;
}

// static
absl::optional<Params::UpdateProperties::ParentId> Params::UpdateProperties::ParentId::FromValue(const base::Value& value) {
  ParentId out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}



Params::UpdateProperties::UpdateProperties()
: type() {}

Params::UpdateProperties::~UpdateProperties() = default;
Params::UpdateProperties::UpdateProperties(UpdateProperties&& rhs) = default;
Params::UpdateProperties& Params::UpdateProperties::operator=(UpdateProperties&& rhs) = default;
Params::UpdateProperties Params::UpdateProperties::Clone() const {
  UpdateProperties out;
  out.type = type;
  out.title = title;
  out.checked = checked;
  out.contexts = contexts;
  out.visible = visible;
  if (onclick) {
    out.onclick = onclick->Clone();
  }
  if (parent_id) {
    out.parent_id = parent_id->Clone();
  }
  out.document_url_patterns = document_url_patterns;
  out.target_url_patterns = target_url_patterns;
  out.enabled = enabled;
  return out;
}

// static
bool Params::UpdateProperties::Populate(
    const base::Value::Dict& dict, UpdateProperties& out) {
  out.type = ItemType();
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    {
      const std::string* item_type_as_string = (*type_value).GetIfString();
      if (!item_type_as_string) {
        return false;
      }
      out.type = ParseItemType(*item_type_as_string);
      if (out.type == ItemType()) {
        return false;
      }
    }
    } else {
    out.type = ItemType();
  }

  const base::Value* title_value = dict.Find("title");
  if (title_value) {
    {
      auto* temp = (*title_value).GetIfString();
      if (!temp) {
        out.title = absl::nullopt;
        return false;
      }
      out.title = *temp;
    }
  }

  const base::Value* checked_value = dict.Find("checked");
  if (checked_value) {
    {
      auto temp = (*checked_value).GetIfBool();
      if (!temp.has_value()) {
        out.checked = absl::nullopt;
        return false;
      }
      out.checked = *temp;
    }
  }

  const base::Value* contexts_value = dict.Find("contexts");
  if (contexts_value) {
    {
      if (!(*contexts_value).is_list()) {
        return false;
      }
      else {
        out.contexts.emplace();
        for (const auto& it : ((*contexts_value)).GetList()) {
          ContextType tmp;
          const std::string* context_type_as_string = (it).GetIfString();
          if (!context_type_as_string) {
            return false;
          }
          tmp = ParseContextType(*context_type_as_string);
          if (tmp == ContextType()) {
            return false;
          }
          out.contexts->push_back(tmp);
        }
      }
    }
  }

  const base::Value* visible_value = dict.Find("visible");
  if (visible_value) {
    {
      auto temp = (*visible_value).GetIfBool();
      if (!temp.has_value()) {
        out.visible = absl::nullopt;
        return false;
      }
      out.visible = *temp;
    }
  }

  const base::Value* onclick_value = dict.Find("onclick");
  if (onclick_value) {
    {
      out.onclick.emplace();
    }
  }

  const base::Value* parent_id_value = dict.Find("parentId");
  if (parent_id_value) {
    {
      ParentId temp;
      if (!ParentId::Populate((*parent_id_value), temp))
        return false;
      out.parent_id = std::move(temp);
    }
  }

  const base::Value* document_url_patterns_value = dict.Find("documentUrlPatterns");
  if (document_url_patterns_value) {
    {
      if (!(*document_url_patterns_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*document_url_patterns_value).GetList(), out.document_url_patterns)) {
          return false;
        }
      }
    }
  }

  const base::Value* target_url_patterns_value = dict.Find("targetUrlPatterns");
  if (target_url_patterns_value) {
    {
      if (!(*target_url_patterns_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*target_url_patterns_value).GetList(), out.target_url_patterns)) {
          return false;
        }
      }
    }
  }

  const base::Value* enabled_value = dict.Find("enabled");
  if (enabled_value) {
    {
      auto temp = (*enabled_value).GetIfBool();
      if (!temp.has_value()) {
        out.enabled = absl::nullopt;
        return false;
      }
      out.enabled = *temp;
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
absl::optional<Params::UpdateProperties> Params::UpdateProperties::FromValue(const base::Value::Dict& value) {
  UpdateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::UpdateProperties> Params::UpdateProperties::FromValue(const base::Value& value) {
  UpdateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& id_value = args[0];
    {
      if (!Id::Populate(id_value, params.id))
        return absl::nullopt;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& update_properties_value = args[1];
    {
      if (!update_properties_value.is_dict()) {
        return absl::nullopt;
      }
      if (!UpdateProperties::Populate(update_properties_value.GetDict(), params.update_properties)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace Update

namespace Remove {

Params::MenuItemId::MenuItemId()
 {}

Params::MenuItemId::~MenuItemId() = default;
Params::MenuItemId::MenuItemId(MenuItemId&& rhs) = default;
Params::MenuItemId& Params::MenuItemId::operator=(MenuItemId&& rhs) = default;
Params::MenuItemId Params::MenuItemId::Clone() const {
  MenuItemId out;
  out.as_integer = as_integer;
  out.as_string = as_string;
  return out;
}

// static
bool Params::MenuItemId::Populate(
    const base::Value& value, MenuItemId& out) {
  if (value.type() == base::Value::Type::INTEGER) {
    {
      auto temp = value.GetIfInt();
      if (!temp.has_value()) {
        out.as_integer = absl::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out.as_string = absl::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  return false;
}

// static
absl::optional<Params::MenuItemId> Params::MenuItemId::FromValue(const base::Value& value) {
  MenuItemId out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& menu_item_id_value = args[0];
    {
      if (!MenuItemId::Populate(menu_item_id_value, params.menu_item_id))
        return absl::nullopt;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace Remove

namespace RemoveAll {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace RemoveAll

//
// Events
//

namespace OnClicked {

const char kEventName[] = "contextMenus.onClicked";

base::Value::List Create(const OnClickData& info, const extensions::api::tabs::Tab& tab) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append((info).ToValue());

  create_results.Append((tab).ToValue());

  return create_results;
}

}  // namespace OnClicked

}  // namespace context_menus
}  // namespace api
}  // namespace extensions

