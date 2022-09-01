// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/processes.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/processes.h"

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

using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace processes {
//
// Types
//

const char* ToString(ProcessType enum_param) {
  switch (enum_param) {
    case PROCESS_TYPE_BROWSER:
      return "browser";
    case PROCESS_TYPE_RENDERER:
      return "renderer";
    case PROCESS_TYPE_EXTENSION:
      return "extension";
    case PROCESS_TYPE_NOTIFICATION:
      return "notification";
    case PROCESS_TYPE_PLUGIN:
      return "plugin";
    case PROCESS_TYPE_WORKER:
      return "worker";
    case PROCESS_TYPE_NACL:
      return "nacl";
    case PROCESS_TYPE_SERVICE_WORKER:
      return "service_worker";
    case PROCESS_TYPE_UTILITY:
      return "utility";
    case PROCESS_TYPE_GPU:
      return "gpu";
    case PROCESS_TYPE_OTHER:
      return "other";
    case PROCESS_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

ProcessType ParseProcessType(const std::string& enum_string) {
  if (enum_string == "browser")
    return PROCESS_TYPE_BROWSER;
  if (enum_string == "renderer")
    return PROCESS_TYPE_RENDERER;
  if (enum_string == "extension")
    return PROCESS_TYPE_EXTENSION;
  if (enum_string == "notification")
    return PROCESS_TYPE_NOTIFICATION;
  if (enum_string == "plugin")
    return PROCESS_TYPE_PLUGIN;
  if (enum_string == "worker")
    return PROCESS_TYPE_WORKER;
  if (enum_string == "nacl")
    return PROCESS_TYPE_NACL;
  if (enum_string == "service_worker")
    return PROCESS_TYPE_SERVICE_WORKER;
  if (enum_string == "utility")
    return PROCESS_TYPE_UTILITY;
  if (enum_string == "gpu")
    return PROCESS_TYPE_GPU;
  if (enum_string == "other")
    return PROCESS_TYPE_OTHER;
  return PROCESS_TYPE_NONE;
}


TaskInfo::TaskInfo()
 {}

TaskInfo::~TaskInfo() = default;
TaskInfo::TaskInfo(TaskInfo&& rhs) = default;
TaskInfo& TaskInfo::operator=(TaskInfo&& rhs) = default;
// static
bool TaskInfo::Populate(
    const base::Value& value, TaskInfo* out) {
  if (!value.is_dict()) {
    return false;
  }
  const auto* dict = static_cast<const base::DictionaryValue*>(&value);
  const base::Value* title_value = dict->FindKey("title");
  if (!title_value) {
    return false;
  }
  {
    auto* temp = (*title_value).GetIfString();
    if (!temp) {
      return false;
    }
    out->title = *temp;
  }

  const base::Value* tab_id_value = dict->FindKey("tabId");
  if (tab_id_value) {
    {
      auto temp = (*tab_id_value).GetIfInt();
      if (!temp.has_value()) {
        out->tab_id.reset();
        return false;
      }
      out->tab_id = temp.value();
    }
  }

  return true;
}

// static
std::unique_ptr<TaskInfo> TaskInfo::FromValue(const base::Value& value) {
  auto out = std::make_unique<TaskInfo>();
  bool result = Populate(value, out.get());
  if (!result)
    return nullptr;
  return out;
}

std::unique_ptr<base::DictionaryValue> TaskInfo::ToValue() const {
  auto to_value_result =
      std::make_unique<base::DictionaryValue>();

  to_value_result->SetWithoutPathExpansion("title", std::make_unique<base::Value>(this->title));

  if (this->tab_id) {
    to_value_result->SetWithoutPathExpansion("tabId", std::make_unique<base::Value>(*this->tab_id));

  }

  return to_value_result;
}


Cache::Cache()
: size(0.0),
live_size(0.0) {}

Cache::~Cache() = default;
Cache::Cache(Cache&& rhs) = default;
Cache& Cache::operator=(Cache&& rhs) = default;
// static
bool Cache::Populate(
    const base::Value& value, Cache* out) {
  if (!value.is_dict()) {
    return false;
  }
  const auto* dict = static_cast<const base::DictionaryValue*>(&value);
  const base::Value* size_value = dict->FindKey("size");
  if (!size_value) {
    return false;
  }
  {
    auto temp = (*size_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out->size = temp.value();
  }

  const base::Value* live_size_value = dict->FindKey("liveSize");
  if (!live_size_value) {
    return false;
  }
  {
    auto temp = (*live_size_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out->live_size = temp.value();
  }

  return true;
}

// static
std::unique_ptr<Cache> Cache::FromValue(const base::Value& value) {
  auto out = std::make_unique<Cache>();
  bool result = Populate(value, out.get());
  if (!result)
    return nullptr;
  return out;
}

std::unique_ptr<base::DictionaryValue> Cache::ToValue() const {
  auto to_value_result =
      std::make_unique<base::DictionaryValue>();

  to_value_result->SetWithoutPathExpansion("size", std::make_unique<base::Value>(this->size));

  to_value_result->SetWithoutPathExpansion("liveSize", std::make_unique<base::Value>(this->live_size));


  return to_value_result;
}


Process::Process()
: id(0),
os_process_id(0),
type(PROCESS_TYPE_NONE),
nacl_debug_port(0) {}

Process::~Process() = default;
Process::Process(Process&& rhs) = default;
Process& Process::operator=(Process&& rhs) = default;
// static
bool Process::Populate(
    const base::Value& value, Process* out) {
  if (!value.is_dict()) {
    return false;
  }
  const auto* dict = static_cast<const base::DictionaryValue*>(&value);
  const base::Value* id_value = dict->FindKey("id");
  if (!id_value) {
    return false;
  }
  {
    auto temp = (*id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out->id = temp.value();
  }

  const base::Value* os_process_id_value = dict->FindKey("osProcessId");
  if (!os_process_id_value) {
    return false;
  }
  {
    auto temp = (*os_process_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out->os_process_id = temp.value();
  }

  const base::Value* type_value = dict->FindKey("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* process_type_as_string = (*type_value).GetIfString();
    if (!process_type_as_string) {
      return false;
    }
    out->type = ParseProcessType(*process_type_as_string);
    if (out->type == PROCESS_TYPE_NONE) {
      return false;
    }
  }

  const base::Value* profile_value = dict->FindKey("profile");
  if (!profile_value) {
    return false;
  }
  {
    auto* temp = (*profile_value).GetIfString();
    if (!temp) {
      return false;
    }
    out->profile = *temp;
  }

  const base::Value* nacl_debug_port_value = dict->FindKey("naclDebugPort");
  if (!nacl_debug_port_value) {
    return false;
  }
  {
    auto temp = (*nacl_debug_port_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out->nacl_debug_port = temp.value();
  }

  const base::Value* tasks_value = dict->FindKey("tasks");
  if (!tasks_value) {
    return false;
  }
  {
    if (!(*tasks_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*tasks_value).GetList(), &out->tasks)) {
        return false;
      }
    }
  }

  const base::Value* cpu_value = dict->FindKey("cpu");
  if (cpu_value) {
    {
      auto temp = (*cpu_value).GetIfDouble();
      if (!temp.has_value()) {
        out->cpu.reset();
        return false;
      }
      out->cpu = temp.value();
    }
  }

  const base::Value* network_value = dict->FindKey("network");
  if (network_value) {
    {
      auto temp = (*network_value).GetIfDouble();
      if (!temp.has_value()) {
        out->network.reset();
        return false;
      }
      out->network = temp.value();
    }
  }

  const base::Value* private_memory_value = dict->FindKey("privateMemory");
  if (private_memory_value) {
    {
      auto temp = (*private_memory_value).GetIfDouble();
      if (!temp.has_value()) {
        out->private_memory.reset();
        return false;
      }
      out->private_memory = temp.value();
    }
  }

  const base::Value* js_memory_allocated_value = dict->FindKey("jsMemoryAllocated");
  if (js_memory_allocated_value) {
    {
      auto temp = (*js_memory_allocated_value).GetIfDouble();
      if (!temp.has_value()) {
        out->js_memory_allocated.reset();
        return false;
      }
      out->js_memory_allocated = temp.value();
    }
  }

  const base::Value* js_memory_used_value = dict->FindKey("jsMemoryUsed");
  if (js_memory_used_value) {
    {
      auto temp = (*js_memory_used_value).GetIfDouble();
      if (!temp.has_value()) {
        out->js_memory_used.reset();
        return false;
      }
      out->js_memory_used = temp.value();
    }
  }

  const base::Value* sqlite_memory_value = dict->FindKey("sqliteMemory");
  if (sqlite_memory_value) {
    {
      auto temp = (*sqlite_memory_value).GetIfDouble();
      if (!temp.has_value()) {
        out->sqlite_memory.reset();
        return false;
      }
      out->sqlite_memory = temp.value();
    }
  }

  const base::Value* image_cache_value = dict->FindKey("imageCache");
  if (image_cache_value) {
    {
      if (!(*image_cache_value).is_dict()) {
        return false;
      }
      else {
        auto temp = std::make_unique<Cache>();
        if (!Cache::Populate((*image_cache_value), temp.get())) {
          return false;
        }
        else
          out->image_cache = std::move(temp);
      }
    }
  }

  const base::Value* script_cache_value = dict->FindKey("scriptCache");
  if (script_cache_value) {
    {
      if (!(*script_cache_value).is_dict()) {
        return false;
      }
      else {
        auto temp = std::make_unique<Cache>();
        if (!Cache::Populate((*script_cache_value), temp.get())) {
          return false;
        }
        else
          out->script_cache = std::move(temp);
      }
    }
  }

  const base::Value* css_cache_value = dict->FindKey("cssCache");
  if (css_cache_value) {
    {
      if (!(*css_cache_value).is_dict()) {
        return false;
      }
      else {
        auto temp = std::make_unique<Cache>();
        if (!Cache::Populate((*css_cache_value), temp.get())) {
          return false;
        }
        else
          out->css_cache = std::move(temp);
      }
    }
  }

  return true;
}

// static
std::unique_ptr<Process> Process::FromValue(const base::Value& value) {
  auto out = std::make_unique<Process>();
  bool result = Populate(value, out.get());
  if (!result)
    return nullptr;
  return out;
}

std::unique_ptr<base::DictionaryValue> Process::ToValue() const {
  auto to_value_result =
      std::make_unique<base::DictionaryValue>();

  to_value_result->SetWithoutPathExpansion("id", std::make_unique<base::Value>(this->id));

  to_value_result->SetWithoutPathExpansion("osProcessId", std::make_unique<base::Value>(this->os_process_id));

  to_value_result->SetWithoutPathExpansion("type", std::make_unique<base::Value>(processes::ToString(this->type)));

  to_value_result->SetWithoutPathExpansion("profile", std::make_unique<base::Value>(this->profile));

  to_value_result->SetWithoutPathExpansion("naclDebugPort", std::make_unique<base::Value>(this->nacl_debug_port));

  to_value_result->SetWithoutPathExpansion("tasks", json_schema_compiler::util::CreateValueFromArray(this->tasks));

  if (this->cpu) {
    to_value_result->SetWithoutPathExpansion("cpu", std::make_unique<base::Value>(*this->cpu));

  }
  if (this->network) {
    to_value_result->SetWithoutPathExpansion("network", std::make_unique<base::Value>(*this->network));

  }
  if (this->private_memory) {
    to_value_result->SetWithoutPathExpansion("privateMemory", std::make_unique<base::Value>(*this->private_memory));

  }
  if (this->js_memory_allocated) {
    to_value_result->SetWithoutPathExpansion("jsMemoryAllocated", std::make_unique<base::Value>(*this->js_memory_allocated));

  }
  if (this->js_memory_used) {
    to_value_result->SetWithoutPathExpansion("jsMemoryUsed", std::make_unique<base::Value>(*this->js_memory_used));

  }
  if (this->sqlite_memory) {
    to_value_result->SetWithoutPathExpansion("sqliteMemory", std::make_unique<base::Value>(*this->sqlite_memory));

  }
  if (this->image_cache) {
    to_value_result->SetWithoutPathExpansion("imageCache", (this->image_cache)->ToValue());

  }
  if (this->script_cache) {
    to_value_result->SetWithoutPathExpansion("scriptCache", (this->script_cache)->ToValue());

  }
  if (this->css_cache) {
    to_value_result->SetWithoutPathExpansion("cssCache", (this->css_cache)->ToValue());

  }

  return to_value_result;
}



//
// Functions
//

namespace GetProcessIdForTab {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& tab_id_value = args[0];
    {
      auto temp = tab_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->tab_id = temp.value();
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


base::Value::List Results::Create(int process_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value::FromUniquePtrValue(std::make_unique<base::Value>(process_id)));

  return create_results;
}
}  // namespace GetProcessIdForTab

namespace Terminate {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& process_id_value = args[0];
    {
      auto temp = process_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->process_id = temp.value();
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


base::Value::List Results::Create(bool did_terminate) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value::FromUniquePtrValue(std::make_unique<base::Value>(did_terminate)));

  return create_results;
}
}  // namespace Terminate

namespace GetProcessInfo {

Params::ProcessIds::ProcessIds()
 {}

Params::ProcessIds::~ProcessIds() = default;
Params::ProcessIds::ProcessIds(ProcessIds&& rhs) = default;
Params::ProcessIds& Params::ProcessIds::operator=(ProcessIds&& rhs) = default;
// static
bool Params::ProcessIds::Populate(
    const base::Value& value, ProcessIds* out) {
  if (value.type() == base::Value::Type::INTEGER) {
    {
      auto temp = value.GetIfInt();
      if (!temp.has_value()) {
        out->as_integer.reset();
        return false;
      }
      out->as_integer = temp.value();
    }
    return true;
  }
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), &out->as_integers)) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
}


Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& process_ids_value = args[0];
    {
      if (!ProcessIds::Populate(process_ids_value, &params->process_ids))
        return std::unique_ptr<Params>();
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& include_memory_value = args[1];
    {
      auto temp = include_memory_value.GetIfBool();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->include_memory = temp.value();
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


Results::Processes::Processes()
 {}

Results::Processes::~Processes() = default;
Results::Processes::Processes(Processes&& rhs) = default;
Results::Processes& Results::Processes::operator=(Processes&& rhs) = default;
std::unique_ptr<base::DictionaryValue> Results::Processes::ToValue() const {
  auto to_value_result =
      std::make_unique<base::DictionaryValue>();

  to_value_result->MergeDictionary(&additional_properties);

  return to_value_result;
}


base::Value::List Results::Create(const Processes& processes) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value::FromUniquePtrValue((processes).ToValue()));

  return create_results;
}
}  // namespace GetProcessInfo

//
// Events
//

namespace OnUpdated {

const char kEventName[] = "processes.onUpdated";

Processes::Processes()
 {}

Processes::~Processes() = default;
Processes::Processes(Processes&& rhs) = default;
Processes& Processes::operator=(Processes&& rhs) = default;
std::unique_ptr<base::DictionaryValue> Processes::ToValue() const {
  auto to_value_result =
      std::make_unique<base::DictionaryValue>();

  to_value_result->MergeDictionary(&additional_properties);

  return to_value_result;
}


base::Value::List Create(const Processes& processes) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value::FromUniquePtrValue((processes).ToValue()));

  return create_results;
}

}  // namespace OnUpdated

namespace OnUpdatedWithMemory {

const char kEventName[] = "processes.onUpdatedWithMemory";

Processes::Processes()
 {}

Processes::~Processes() = default;
Processes::Processes(Processes&& rhs) = default;
Processes& Processes::operator=(Processes&& rhs) = default;
std::unique_ptr<base::DictionaryValue> Processes::ToValue() const {
  auto to_value_result =
      std::make_unique<base::DictionaryValue>();

  to_value_result->MergeDictionary(&additional_properties);

  return to_value_result;
}


base::Value::List Create(const Processes& processes) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value::FromUniquePtrValue((processes).ToValue()));

  return create_results;
}

}  // namespace OnUpdatedWithMemory

namespace OnCreated {

const char kEventName[] = "processes.onCreated";

base::Value::List Create(const Process& process) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value::FromUniquePtrValue((process).ToValue()));

  return create_results;
}

}  // namespace OnCreated

namespace OnUnresponsive {

const char kEventName[] = "processes.onUnresponsive";

base::Value::List Create(const Process& process) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value::FromUniquePtrValue((process).ToValue()));

  return create_results;
}

}  // namespace OnUnresponsive

namespace OnExited {

const char kEventName[] = "processes.onExited";

base::Value::List Create(int process_id, int exit_type, int exit_code) {
  base::Value::List create_results;
  create_results.reserve(3);
  create_results.Append(base::Value::FromUniquePtrValue(std::make_unique<base::Value>(process_id)));

  create_results.Append(base::Value::FromUniquePtrValue(std::make_unique<base::Value>(exit_type)));

  create_results.Append(base::Value::FromUniquePtrValue(std::make_unique<base::Value>(exit_code)));

  return create_results;
}

}  // namespace OnExited

}  // namespace processes
}  // namespace api
}  // namespace extensions

