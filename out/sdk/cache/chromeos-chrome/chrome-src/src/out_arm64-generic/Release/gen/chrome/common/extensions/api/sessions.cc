// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/sessions.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/sessions.h"

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
#include "chrome/common/extensions/api/tabs.h"
#include "chrome/common/extensions/api/windows.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace sessions {
//
// Properties
//

const int MAX_SESSION_RESULTS = 25;

//
// Types
//

Filter::Filter()
 {}

Filter::~Filter() = default;
Filter::Filter(Filter&& rhs) noexcept = default;
Filter& Filter::operator=(Filter&& rhs) noexcept = default;
Filter Filter::Clone() const {
  Filter out;
  out.max_results = max_results;
  return out;
}

// static
bool Filter::Populate(
    const base::Value::Dict& dict, Filter& out) {
  const base::Value* max_results_value = dict.Find("maxResults");
  if (max_results_value) {
    {
      auto temp = (*max_results_value).GetIfInt();
      if (!temp.has_value()) {
        out.max_results = std::nullopt;
        return false;
      }
      out.max_results = *temp;
    }
  }

  return true;
}

// static
bool Filter::Populate(
    const base::Value& value, Filter& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Filter> Filter::FromValue(const base::Value::Dict& value) {
  Filter out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Filter> Filter::FromValue(const base::Value& value) {
  Filter out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Filter::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->max_results) {
    to_value_result.Set("maxResults", *this->max_results);

  }

  return to_value_result;
}


Session::Session()
: last_modified(0) {}

Session::~Session() = default;
Session::Session(Session&& rhs) noexcept = default;
Session& Session::operator=(Session&& rhs) noexcept = default;
Session Session::Clone() const {
  Session out;
  out.last_modified = last_modified;
  if (tab) {
    out.tab = tab->Clone();
  }
  if (window) {
    out.window = window->Clone();
  }
  return out;
}

// static
bool Session::Populate(
    const base::Value::Dict& dict, Session& out) {
  const base::Value* last_modified_value = dict.Find("lastModified");
  if (!last_modified_value) {
    return false;
  }
  {
    auto temp = (*last_modified_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.last_modified = *temp;
  }

  const base::Value* tab_value = dict.Find("tab");
  if (tab_value) {
    {
      if (!(*tab_value).is_dict()) {
        return false;
      }
      else {
        extensions::api::tabs::Tab temp;
        if (!extensions::api::tabs::Tab::Populate((*tab_value).GetDict(), temp))
          return false;
        out.tab = std::move(temp);
      }
    }
  }

  const base::Value* window_value = dict.Find("window");
  if (window_value) {
    {
      if (!(*window_value).is_dict()) {
        return false;
      }
      else {
        extensions::api::windows::Window temp;
        if (!extensions::api::windows::Window::Populate((*window_value).GetDict(), temp))
          return false;
        out.window = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool Session::Populate(
    const base::Value& value, Session& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Session> Session::FromValue(const base::Value::Dict& value) {
  Session out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Session> Session::FromValue(const base::Value& value) {
  Session out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Session::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("lastModified", this->last_modified);

  if (this->tab) {
    to_value_result.Set("tab", (this->tab)->ToValue());

  }
  if (this->window) {
    to_value_result.Set("window", (this->window)->ToValue());

  }

  return to_value_result;
}


Device::Device()
 {}

Device::~Device() = default;
Device::Device(Device&& rhs) noexcept = default;
Device& Device::operator=(Device&& rhs) noexcept = default;
Device Device::Clone() const {
  Device out;
  out.info = info;
  out.device_name = device_name;
  out.sessions.reserve(sessions.size());
  for (const auto& element : sessions) {
    json_schema_compiler::util::AppendToContainer(out.sessions, element.Clone());
  }
  return out;
}

// static
bool Device::Populate(
    const base::Value::Dict& dict, Device& out) {
  const base::Value* info_value = dict.Find("info");
  if (!info_value) {
    return false;
  }
  {
    auto* temp = (*info_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.info = *temp;
  }

  const base::Value* device_name_value = dict.Find("deviceName");
  if (!device_name_value) {
    return false;
  }
  {
    auto* temp = (*device_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.device_name = *temp;
  }

  const base::Value* sessions_value = dict.Find("sessions");
  if (!sessions_value) {
    return false;
  }
  {
    if (!(*sessions_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*sessions_value).GetList(), out.sessions)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool Device::Populate(
    const base::Value& value, Device& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Device> Device::FromValue(const base::Value::Dict& value) {
  Device out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Device> Device::FromValue(const base::Value& value) {
  Device out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Device::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("info", this->info);

  to_value_result.Set("deviceName", this->device_name);

  to_value_result.Set("sessions", json_schema_compiler::util::CreateValueFromArray(this->sessions));


  return to_value_result;
}



//
// Functions
//

namespace GetRecentlyClosed {

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
    const base::Value& filter_value = args[0];
    {
      if (!filter_value.is_dict()) {
        return std::nullopt;
      }
      else {
        Filter temp;
        if (!Filter::Populate(filter_value.GetDict(), temp))
          return std::nullopt;
        params.filter = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const std::vector<Session>& sessions) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(sessions));

  return create_results;
}
}  // namespace GetRecentlyClosed

namespace GetDevices {

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
    const base::Value& filter_value = args[0];
    {
      if (!filter_value.is_dict()) {
        return std::nullopt;
      }
      else {
        Filter temp;
        if (!Filter::Populate(filter_value.GetDict(), temp))
          return std::nullopt;
        params.filter = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const std::vector<Device>& devices) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(devices));

  return create_results;
}
}  // namespace GetDevices

namespace Restore {

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
    const base::Value& session_id_value = args[0];
    {
      auto* temp = session_id_value.GetIfString();
      if (!temp) {
        params.session_id = std::nullopt;
        return std::nullopt;
      }
      params.session_id = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create(const Session& restored_session) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((restored_session).ToValue());

  return create_results;
}
}  // namespace Restore

//
// Events
//

namespace OnChanged {

const char kEventName[] = "sessions.onChanged";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnChanged

}  // namespace sessions
}  // namespace api
}  // namespace extensions

