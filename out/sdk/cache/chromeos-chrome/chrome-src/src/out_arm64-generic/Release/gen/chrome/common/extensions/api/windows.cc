// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/windows.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/windows.h"

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
#include "chrome/common/extensions/api/tabs.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace windows {
//
// Properties
//

const int WINDOW_ID_NONE = -1;

const int WINDOW_ID_CURRENT = -2;

//
// Types
//

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


const char* ToString(WindowState enum_param) {
  switch (enum_param) {
    case WindowState::kNormal:
      return "normal";
    case WindowState::kMinimized:
      return "minimized";
    case WindowState::kMaximized:
      return "maximized";
    case WindowState::kFullscreen:
      return "fullscreen";
    case WindowState::kLockedFullscreen:
      return "locked-fullscreen";
    case WindowState::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

WindowState ParseWindowState(base::StringPiece enum_string) {
  if (enum_string == "normal")
    return WindowState::kNormal;
  if (enum_string == "minimized")
    return WindowState::kMinimized;
  if (enum_string == "maximized")
    return WindowState::kMaximized;
  if (enum_string == "fullscreen")
    return WindowState::kFullscreen;
  if (enum_string == "locked-fullscreen")
    return WindowState::kLockedFullscreen;
  return WindowState::kNone;
}

std::u16string GetWindowStateParseError(base::StringPiece enum_string) {
  return u"expected \"normal\" or \"minimized\" or \"maximized\" or \"fullscreen\" or \"locked-fullscreen\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


Window::Window()
: focused(false),
incognito(false),
type(),
state(),
always_on_top(false) {}

Window::~Window() = default;
Window::Window(Window&& rhs) noexcept = default;
Window& Window::operator=(Window&& rhs) noexcept = default;
Window Window::Clone() const {
  Window out;
  out.id = id;
  out.focused = focused;
  out.top = top;
  out.left = left;
  out.width = width;
  out.height = height;
  if (tabs) {
    out.tabs.emplace();
    out.tabs->reserve(tabs->size());
    for (const auto& element : *tabs) {
      json_schema_compiler::util::AppendToContainer(*out.tabs, element.Clone());
    }
  }
  out.incognito = incognito;
  out.type = type;
  out.state = state;
  out.always_on_top = always_on_top;
  out.session_id = session_id;
  return out;
}

// static
bool Window::Populate(
    const base::Value::Dict& dict, Window& out) {
  out.type = WindowType();
  out.state = WindowState();
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

  const base::Value* focused_value = dict.Find("focused");
  if (!focused_value) {
    return false;
  }
  {
    auto temp = (*focused_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.focused = *temp;
  }

  const base::Value* top_value = dict.Find("top");
  if (top_value) {
    {
      auto temp = (*top_value).GetIfInt();
      if (!temp.has_value()) {
        out.top = std::nullopt;
        return false;
      }
      out.top = *temp;
    }
  }

  const base::Value* left_value = dict.Find("left");
  if (left_value) {
    {
      auto temp = (*left_value).GetIfInt();
      if (!temp.has_value()) {
        out.left = std::nullopt;
        return false;
      }
      out.left = *temp;
    }
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

  const base::Value* tabs_value = dict.Find("tabs");
  if (tabs_value) {
    {
      if (!(*tabs_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*tabs_value).GetList(), out.tabs)) {
          return false;
        }
      }
    }
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

  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    {
      const std::string* window_type_as_string = (*type_value).GetIfString();
      if (!window_type_as_string) {
        return false;
      }
      out.type = ParseWindowType(*window_type_as_string);
      if (out.type == WindowType()) {
        return false;
      }
    }
    } else {
    out.type = WindowType();
  }

  const base::Value* state_value = dict.Find("state");
  if (state_value) {
    {
      const std::string* window_state_as_string = (*state_value).GetIfString();
      if (!window_state_as_string) {
        return false;
      }
      out.state = ParseWindowState(*window_state_as_string);
      if (out.state == WindowState()) {
        return false;
      }
    }
    } else {
    out.state = WindowState();
  }

  const base::Value* always_on_top_value = dict.Find("alwaysOnTop");
  if (!always_on_top_value) {
    return false;
  }
  {
    auto temp = (*always_on_top_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.always_on_top = *temp;
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
bool Window::Populate(
    const base::Value& value, Window& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Window> Window::FromValue(const base::Value::Dict& value) {
  Window out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Window> Window::FromValue(const base::Value& value) {
  Window out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Window::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->id) {
    to_value_result.Set("id", *this->id);

  }
  to_value_result.Set("focused", this->focused);

  if (this->top) {
    to_value_result.Set("top", *this->top);

  }
  if (this->left) {
    to_value_result.Set("left", *this->left);

  }
  if (this->width) {
    to_value_result.Set("width", *this->width);

  }
  if (this->height) {
    to_value_result.Set("height", *this->height);

  }
  if (this->tabs) {
    to_value_result.Set("tabs", json_schema_compiler::util::CreateValueFromArray(*this->tabs));

  }
  to_value_result.Set("incognito", this->incognito);

  if (this->type != WindowType()) {
    to_value_result.Set("type", windows::ToString(this->type));

  }
  if (this->state != WindowState()) {
    to_value_result.Set("state", windows::ToString(this->state));

  }
  to_value_result.Set("alwaysOnTop", this->always_on_top);

  if (this->session_id) {
    to_value_result.Set("sessionId", *this->session_id);

  }

  return to_value_result;
}


const char* ToString(CreateType enum_param) {
  switch (enum_param) {
    case CreateType::kNormal:
      return "normal";
    case CreateType::kPopup:
      return "popup";
    case CreateType::kPanel:
      return "panel";
    case CreateType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

CreateType ParseCreateType(base::StringPiece enum_string) {
  if (enum_string == "normal")
    return CreateType::kNormal;
  if (enum_string == "popup")
    return CreateType::kPopup;
  if (enum_string == "panel")
    return CreateType::kPanel;
  return CreateType::kNone;
}

std::u16string GetCreateTypeParseError(base::StringPiece enum_string) {
  return u"expected \"normal\" or \"popup\" or \"panel\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


QueryOptions::QueryOptions()
 {}

QueryOptions::~QueryOptions() = default;
QueryOptions::QueryOptions(QueryOptions&& rhs) noexcept = default;
QueryOptions& QueryOptions::operator=(QueryOptions&& rhs) noexcept = default;
QueryOptions QueryOptions::Clone() const {
  QueryOptions out;
  out.populate = populate;
  out.window_types = window_types;
  return out;
}

// static
bool QueryOptions::Populate(
    const base::Value::Dict& dict, QueryOptions& out) {
  const base::Value* populate_value = dict.Find("populate");
  if (populate_value) {
    {
      auto temp = (*populate_value).GetIfBool();
      if (!temp.has_value()) {
        out.populate = std::nullopt;
        return false;
      }
      out.populate = *temp;
    }
  }

  const base::Value* window_types_value = dict.Find("windowTypes");
  if (window_types_value) {
    {
      if (!(*window_types_value).is_list()) {
        return false;
      }
      else {
        out.window_types.emplace();
        for (const auto& it : ((*window_types_value)).GetList()) {
          WindowType tmp;
          const std::string* window_type_as_string = (it).GetIfString();
          if (!window_type_as_string) {
            return false;
          }
          tmp = ParseWindowType(*window_type_as_string);
          if (tmp == WindowType()) {
            return false;
          }
          out.window_types->push_back(tmp);
        }
      }
    }
  }

  return true;
}

// static
bool QueryOptions::Populate(
    const base::Value& value, QueryOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<QueryOptions> QueryOptions::FromValue(const base::Value::Dict& value) {
  QueryOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<QueryOptions> QueryOptions::FromValue(const base::Value& value) {
  QueryOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict QueryOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->populate) {
    to_value_result.Set("populate", *this->populate);

  }
  if (this->window_types) {
    {
      std::vector<std::string> windowTypes_list;
      for (const auto& it : *(this->window_types)) {
        windowTypes_list.emplace_back(windows::ToString(it));
      }
      to_value_result.Set("windowTypes", json_schema_compiler::util::CreateValueFromArray(windowTypes_list));
    }

  }

  return to_value_result;
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
  if (args.size() < 1 || args.size() > 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& window_id_value = args[0];
    {
      auto temp = window_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.window_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& query_options_value = args[1];
    {
      if (!query_options_value.is_dict()) {
        return std::nullopt;
      }
      else {
        QueryOptions temp;
        if (!QueryOptions::Populate(query_options_value.GetDict(), temp))
          return std::nullopt;
        params.query_options = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const Window& window) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((window).ToValue());

  return create_results;
}
}  // namespace Get

namespace GetCurrent {

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
    const base::Value& query_options_value = args[0];
    {
      if (!query_options_value.is_dict()) {
        return std::nullopt;
      }
      else {
        QueryOptions temp;
        if (!QueryOptions::Populate(query_options_value.GetDict(), temp))
          return std::nullopt;
        params.query_options = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const Window& window) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((window).ToValue());

  return create_results;
}
}  // namespace GetCurrent

namespace GetLastFocused {

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
    const base::Value& query_options_value = args[0];
    {
      if (!query_options_value.is_dict()) {
        return std::nullopt;
      }
      else {
        QueryOptions temp;
        if (!QueryOptions::Populate(query_options_value.GetDict(), temp))
          return std::nullopt;
        params.query_options = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const Window& window) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((window).ToValue());

  return create_results;
}
}  // namespace GetLastFocused

namespace GetAll {

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
    const base::Value& query_options_value = args[0];
    {
      if (!query_options_value.is_dict()) {
        return std::nullopt;
      }
      else {
        QueryOptions temp;
        if (!QueryOptions::Populate(query_options_value.GetDict(), temp))
          return std::nullopt;
        params.query_options = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const std::vector<Window>& windows) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(windows));

  return create_results;
}
}  // namespace GetAll

namespace Create {

Params::CreateData::Url::Url()
 {}

Params::CreateData::Url::~Url() = default;
Params::CreateData::Url::Url(Url&& rhs) noexcept = default;
Params::CreateData::Url& Params::CreateData::Url::operator=(Url&& rhs) noexcept = default;
Params::CreateData::Url Params::CreateData::Url::Clone() const {
  Url out;
  out.as_string = as_string;
  out.as_strings = as_strings;
  return out;
}

// static
bool Params::CreateData::Url::Populate(
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
std::optional<Params::CreateData::Url> Params::CreateData::Url::FromValue(const base::Value& value) {
  Url out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}



Params::CreateData::CreateData()
: type(),
state() {}

Params::CreateData::~CreateData() = default;
Params::CreateData::CreateData(CreateData&& rhs) noexcept = default;
Params::CreateData& Params::CreateData::operator=(CreateData&& rhs) noexcept = default;
Params::CreateData Params::CreateData::Clone() const {
  CreateData out;
  if (url) {
    out.url = url->Clone();
  }
  out.tab_id = tab_id;
  out.left = left;
  out.top = top;
  out.width = width;
  out.height = height;
  out.focused = focused;
  out.incognito = incognito;
  out.type = type;
  out.state = state;
  out.set_self_as_opener = set_self_as_opener;
  return out;
}

// static
bool Params::CreateData::Populate(
    const base::Value::Dict& dict, CreateData& out) {
  out.type = CreateType();
  out.state = WindowState();
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    {
      Url temp;
      if (!Url::Populate((*url_value), temp))
        return false;
      out.url = std::move(temp);
    }
  }

  const base::Value* tab_id_value = dict.Find("tabId");
  if (tab_id_value) {
    {
      auto temp = (*tab_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.tab_id = std::nullopt;
        return false;
      }
      out.tab_id = *temp;
    }
  }

  const base::Value* left_value = dict.Find("left");
  if (left_value) {
    {
      auto temp = (*left_value).GetIfInt();
      if (!temp.has_value()) {
        out.left = std::nullopt;
        return false;
      }
      out.left = *temp;
    }
  }

  const base::Value* top_value = dict.Find("top");
  if (top_value) {
    {
      auto temp = (*top_value).GetIfInt();
      if (!temp.has_value()) {
        out.top = std::nullopt;
        return false;
      }
      out.top = *temp;
    }
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

  const base::Value* focused_value = dict.Find("focused");
  if (focused_value) {
    {
      auto temp = (*focused_value).GetIfBool();
      if (!temp.has_value()) {
        out.focused = std::nullopt;
        return false;
      }
      out.focused = *temp;
    }
  }

  const base::Value* incognito_value = dict.Find("incognito");
  if (incognito_value) {
    {
      auto temp = (*incognito_value).GetIfBool();
      if (!temp.has_value()) {
        out.incognito = std::nullopt;
        return false;
      }
      out.incognito = *temp;
    }
  }

  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    {
      const std::string* create_type_as_string = (*type_value).GetIfString();
      if (!create_type_as_string) {
        return false;
      }
      out.type = ParseCreateType(*create_type_as_string);
      if (out.type == CreateType()) {
        return false;
      }
    }
    } else {
    out.type = CreateType();
  }

  const base::Value* state_value = dict.Find("state");
  if (state_value) {
    {
      const std::string* window_state_as_string = (*state_value).GetIfString();
      if (!window_state_as_string) {
        return false;
      }
      out.state = ParseWindowState(*window_state_as_string);
      if (out.state == WindowState()) {
        return false;
      }
    }
    } else {
    out.state = WindowState();
  }

  const base::Value* set_self_as_opener_value = dict.Find("setSelfAsOpener");
  if (set_self_as_opener_value) {
    {
      auto temp = (*set_self_as_opener_value).GetIfBool();
      if (!temp.has_value()) {
        out.set_self_as_opener = std::nullopt;
        return false;
      }
      out.set_self_as_opener = *temp;
    }
  }

  return true;
}

// static
bool Params::CreateData::Populate(
    const base::Value& value, CreateData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::CreateData> Params::CreateData::FromValue(const base::Value::Dict& value) {
  CreateData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::CreateData> Params::CreateData::FromValue(const base::Value& value) {
  CreateData out;
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
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& create_data_value = args[0];
    {
      if (!create_data_value.is_dict()) {
        return std::nullopt;
      }
      else {
        CreateData temp;
        if (!CreateData::Populate(create_data_value.GetDict(), temp))
          return std::nullopt;
        params.create_data = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const Window& window) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((window).ToValue());

  return create_results;
}
}  // namespace Create

namespace Update {

Params::UpdateInfo::UpdateInfo()
: state() {}

Params::UpdateInfo::~UpdateInfo() = default;
Params::UpdateInfo::UpdateInfo(UpdateInfo&& rhs) noexcept = default;
Params::UpdateInfo& Params::UpdateInfo::operator=(UpdateInfo&& rhs) noexcept = default;
Params::UpdateInfo Params::UpdateInfo::Clone() const {
  UpdateInfo out;
  out.left = left;
  out.top = top;
  out.width = width;
  out.height = height;
  out.focused = focused;
  out.draw_attention = draw_attention;
  out.state = state;
  return out;
}

// static
bool Params::UpdateInfo::Populate(
    const base::Value::Dict& dict, UpdateInfo& out) {
  out.state = WindowState();
  const base::Value* left_value = dict.Find("left");
  if (left_value) {
    {
      auto temp = (*left_value).GetIfInt();
      if (!temp.has_value()) {
        out.left = std::nullopt;
        return false;
      }
      out.left = *temp;
    }
  }

  const base::Value* top_value = dict.Find("top");
  if (top_value) {
    {
      auto temp = (*top_value).GetIfInt();
      if (!temp.has_value()) {
        out.top = std::nullopt;
        return false;
      }
      out.top = *temp;
    }
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

  const base::Value* focused_value = dict.Find("focused");
  if (focused_value) {
    {
      auto temp = (*focused_value).GetIfBool();
      if (!temp.has_value()) {
        out.focused = std::nullopt;
        return false;
      }
      out.focused = *temp;
    }
  }

  const base::Value* draw_attention_value = dict.Find("drawAttention");
  if (draw_attention_value) {
    {
      auto temp = (*draw_attention_value).GetIfBool();
      if (!temp.has_value()) {
        out.draw_attention = std::nullopt;
        return false;
      }
      out.draw_attention = *temp;
    }
  }

  const base::Value* state_value = dict.Find("state");
  if (state_value) {
    {
      const std::string* window_state_as_string = (*state_value).GetIfString();
      if (!window_state_as_string) {
        return false;
      }
      out.state = ParseWindowState(*window_state_as_string);
      if (out.state == WindowState()) {
        return false;
      }
    }
    } else {
    out.state = WindowState();
  }

  return true;
}

// static
bool Params::UpdateInfo::Populate(
    const base::Value& value, UpdateInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::UpdateInfo> Params::UpdateInfo::FromValue(const base::Value::Dict& value) {
  UpdateInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::UpdateInfo> Params::UpdateInfo::FromValue(const base::Value& value) {
  UpdateInfo out;
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
    const base::Value& window_id_value = args[0];
    {
      auto temp = window_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.window_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& update_info_value = args[1];
    {
      if (!update_info_value.is_dict()) {
        return std::nullopt;
      }
      if (!UpdateInfo::Populate(update_info_value.GetDict(), params.update_info)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const Window& window) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((window).ToValue());

  return create_results;
}
}  // namespace Update

namespace Remove {

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
    const base::Value& window_id_value = args[0];
    {
      auto temp = window_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.window_id = *temp;
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

//
// Events
//

namespace OnCreated {

const char kEventName[] = "windows.onCreated";

base::Value::List Create(const Window& window) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((window).ToValue());

  return create_results;
}

}  // namespace OnCreated

namespace OnRemoved {

const char kEventName[] = "windows.onRemoved";

base::Value::List Create(int window_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(window_id);

  return create_results;
}

}  // namespace OnRemoved

namespace OnFocusChanged {

const char kEventName[] = "windows.onFocusChanged";

base::Value::List Create(int window_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(window_id);

  return create_results;
}

}  // namespace OnFocusChanged

namespace OnBoundsChanged {

const char kEventName[] = "windows.onBoundsChanged";

base::Value::List Create(const Window& window) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((window).ToValue());

  return create_results;
}

}  // namespace OnBoundsChanged

}  // namespace windows
}  // namespace api
}  // namespace extensions

