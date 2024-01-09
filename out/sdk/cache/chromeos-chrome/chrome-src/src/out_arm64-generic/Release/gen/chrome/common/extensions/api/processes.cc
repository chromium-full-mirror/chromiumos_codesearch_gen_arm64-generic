// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/processes.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/processes.h"

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
namespace processes {
//
// Types
//

const char* ToString(ProcessType enum_param) {
  switch (enum_param) {
    case ProcessType::kBrowser:
      return "browser";
    case ProcessType::kRenderer:
      return "renderer";
    case ProcessType::kExtension:
      return "extension";
    case ProcessType::kNotification:
      return "notification";
    case ProcessType::kPlugin:
      return "plugin";
    case ProcessType::kWorker:
      return "worker";
    case ProcessType::kNacl:
      return "nacl";
    case ProcessType::kServiceWorker:
      return "service_worker";
    case ProcessType::kUtility:
      return "utility";
    case ProcessType::kGpu:
      return "gpu";
    case ProcessType::kOther:
      return "other";
    case ProcessType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ProcessType ParseProcessType(base::StringPiece enum_string) {
  if (enum_string == "browser")
    return ProcessType::kBrowser;
  if (enum_string == "renderer")
    return ProcessType::kRenderer;
  if (enum_string == "extension")
    return ProcessType::kExtension;
  if (enum_string == "notification")
    return ProcessType::kNotification;
  if (enum_string == "plugin")
    return ProcessType::kPlugin;
  if (enum_string == "worker")
    return ProcessType::kWorker;
  if (enum_string == "nacl")
    return ProcessType::kNacl;
  if (enum_string == "service_worker")
    return ProcessType::kServiceWorker;
  if (enum_string == "utility")
    return ProcessType::kUtility;
  if (enum_string == "gpu")
    return ProcessType::kGpu;
  if (enum_string == "other")
    return ProcessType::kOther;
  return ProcessType::kNone;
}

std::u16string GetProcessTypeParseError(base::StringPiece enum_string) {
  return u"expected \"browser\" or \"renderer\" or \"extension\" or \"notification\" or \"plugin\" or \"worker\" or \"nacl\" or \"service_worker\" or \"utility\" or \"gpu\" or \"other\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


TaskInfo::TaskInfo()
 {}

TaskInfo::~TaskInfo() = default;
TaskInfo::TaskInfo(TaskInfo&& rhs) noexcept = default;
TaskInfo& TaskInfo::operator=(TaskInfo&& rhs) noexcept = default;
TaskInfo TaskInfo::Clone() const {
  TaskInfo out;
  out.title = title;
  out.tab_id = tab_id;
  return out;
}

// static
bool TaskInfo::Populate(
    const base::Value::Dict& dict, TaskInfo& out) {
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

  return true;
}

// static
bool TaskInfo::Populate(
    const base::Value& value, TaskInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<TaskInfo> TaskInfo::FromValue(const base::Value::Dict& value) {
  TaskInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<TaskInfo> TaskInfo::FromValue(const base::Value& value) {
  TaskInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict TaskInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("title", this->title);

  if (this->tab_id) {
    to_value_result.Set("tabId", *this->tab_id);

  }

  return to_value_result;
}


Cache::Cache()
: size(0.0),
live_size(0.0) {}

Cache::~Cache() = default;
Cache::Cache(Cache&& rhs) noexcept = default;
Cache& Cache::operator=(Cache&& rhs) noexcept = default;
Cache Cache::Clone() const {
  Cache out;
  out.size = size;
  out.live_size = live_size;
  return out;
}

// static
bool Cache::Populate(
    const base::Value::Dict& dict, Cache& out) {
  const base::Value* size_value = dict.Find("size");
  if (!size_value) {
    return false;
  }
  {
    auto temp = (*size_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.size = *temp;
  }

  const base::Value* live_size_value = dict.Find("liveSize");
  if (!live_size_value) {
    return false;
  }
  {
    auto temp = (*live_size_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.live_size = *temp;
  }

  return true;
}

// static
bool Cache::Populate(
    const base::Value& value, Cache& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Cache> Cache::FromValue(const base::Value::Dict& value) {
  Cache out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Cache> Cache::FromValue(const base::Value& value) {
  Cache out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Cache::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("size", this->size);

  to_value_result.Set("liveSize", this->live_size);


  return to_value_result;
}


Process::Process()
: id(0),
os_process_id(0),
type(),
nacl_debug_port(0) {}

Process::~Process() = default;
Process::Process(Process&& rhs) noexcept = default;
Process& Process::operator=(Process&& rhs) noexcept = default;
Process Process::Clone() const {
  Process out;
  out.id = id;
  out.os_process_id = os_process_id;
  out.type = type;
  out.profile = profile;
  out.nacl_debug_port = nacl_debug_port;
  out.tasks.reserve(tasks.size());
  for (const auto& element : tasks) {
    json_schema_compiler::util::AppendToContainer(out.tasks, element.Clone());
  }
  out.cpu = cpu;
  out.network = network;
  out.private_memory = private_memory;
  out.js_memory_allocated = js_memory_allocated;
  out.js_memory_used = js_memory_used;
  out.sqlite_memory = sqlite_memory;
  if (image_cache) {
    out.image_cache = image_cache->Clone();
  }
  if (script_cache) {
    out.script_cache = script_cache->Clone();
  }
  if (css_cache) {
    out.css_cache = css_cache->Clone();
  }
  return out;
}

// static
bool Process::Populate(
    const base::Value::Dict& dict, Process& out) {
  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto temp = (*id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* os_process_id_value = dict.Find("osProcessId");
  if (!os_process_id_value) {
    return false;
  }
  {
    auto temp = (*os_process_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.os_process_id = *temp;
  }

  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* process_type_as_string = (*type_value).GetIfString();
    if (!process_type_as_string) {
      return false;
    }
    out.type = ParseProcessType(*process_type_as_string);
    if (out.type == ProcessType()) {
      return false;
    }
  }

  const base::Value* profile_value = dict.Find("profile");
  if (!profile_value) {
    return false;
  }
  {
    auto* temp = (*profile_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.profile = *temp;
  }

  const base::Value* nacl_debug_port_value = dict.Find("naclDebugPort");
  if (!nacl_debug_port_value) {
    return false;
  }
  {
    auto temp = (*nacl_debug_port_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.nacl_debug_port = *temp;
  }

  const base::Value* tasks_value = dict.Find("tasks");
  if (!tasks_value) {
    return false;
  }
  {
    if (!(*tasks_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*tasks_value).GetList(), out.tasks)) {
        return false;
      }
    }
  }

  const base::Value* cpu_value = dict.Find("cpu");
  if (cpu_value) {
    {
      auto temp = (*cpu_value).GetIfDouble();
      if (!temp.has_value()) {
        out.cpu = std::nullopt;
        return false;
      }
      out.cpu = *temp;
    }
  }

  const base::Value* network_value = dict.Find("network");
  if (network_value) {
    {
      auto temp = (*network_value).GetIfDouble();
      if (!temp.has_value()) {
        out.network = std::nullopt;
        return false;
      }
      out.network = *temp;
    }
  }

  const base::Value* private_memory_value = dict.Find("privateMemory");
  if (private_memory_value) {
    {
      auto temp = (*private_memory_value).GetIfDouble();
      if (!temp.has_value()) {
        out.private_memory = std::nullopt;
        return false;
      }
      out.private_memory = *temp;
    }
  }

  const base::Value* js_memory_allocated_value = dict.Find("jsMemoryAllocated");
  if (js_memory_allocated_value) {
    {
      auto temp = (*js_memory_allocated_value).GetIfDouble();
      if (!temp.has_value()) {
        out.js_memory_allocated = std::nullopt;
        return false;
      }
      out.js_memory_allocated = *temp;
    }
  }

  const base::Value* js_memory_used_value = dict.Find("jsMemoryUsed");
  if (js_memory_used_value) {
    {
      auto temp = (*js_memory_used_value).GetIfDouble();
      if (!temp.has_value()) {
        out.js_memory_used = std::nullopt;
        return false;
      }
      out.js_memory_used = *temp;
    }
  }

  const base::Value* sqlite_memory_value = dict.Find("sqliteMemory");
  if (sqlite_memory_value) {
    {
      auto temp = (*sqlite_memory_value).GetIfDouble();
      if (!temp.has_value()) {
        out.sqlite_memory = std::nullopt;
        return false;
      }
      out.sqlite_memory = *temp;
    }
  }

  const base::Value* image_cache_value = dict.Find("imageCache");
  if (image_cache_value) {
    {
      if (!(*image_cache_value).is_dict()) {
        return false;
      }
      else {
        Cache temp;
        if (!Cache::Populate((*image_cache_value).GetDict(), temp))
          return false;
        out.image_cache = std::move(temp);
      }
    }
  }

  const base::Value* script_cache_value = dict.Find("scriptCache");
  if (script_cache_value) {
    {
      if (!(*script_cache_value).is_dict()) {
        return false;
      }
      else {
        Cache temp;
        if (!Cache::Populate((*script_cache_value).GetDict(), temp))
          return false;
        out.script_cache = std::move(temp);
      }
    }
  }

  const base::Value* css_cache_value = dict.Find("cssCache");
  if (css_cache_value) {
    {
      if (!(*css_cache_value).is_dict()) {
        return false;
      }
      else {
        Cache temp;
        if (!Cache::Populate((*css_cache_value).GetDict(), temp))
          return false;
        out.css_cache = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool Process::Populate(
    const base::Value& value, Process& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Process> Process::FromValue(const base::Value::Dict& value) {
  Process out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Process> Process::FromValue(const base::Value& value) {
  Process out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Process::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("osProcessId", this->os_process_id);

  to_value_result.Set("type", processes::ToString(this->type));

  to_value_result.Set("profile", this->profile);

  to_value_result.Set("naclDebugPort", this->nacl_debug_port);

  to_value_result.Set("tasks", json_schema_compiler::util::CreateValueFromArray(this->tasks));

  if (this->cpu) {
    to_value_result.Set("cpu", *this->cpu);

  }
  if (this->network) {
    to_value_result.Set("network", *this->network);

  }
  if (this->private_memory) {
    to_value_result.Set("privateMemory", *this->private_memory);

  }
  if (this->js_memory_allocated) {
    to_value_result.Set("jsMemoryAllocated", *this->js_memory_allocated);

  }
  if (this->js_memory_used) {
    to_value_result.Set("jsMemoryUsed", *this->js_memory_used);

  }
  if (this->sqlite_memory) {
    to_value_result.Set("sqliteMemory", *this->sqlite_memory);

  }
  if (this->image_cache) {
    to_value_result.Set("imageCache", (this->image_cache)->ToValue());

  }
  if (this->script_cache) {
    to_value_result.Set("scriptCache", (this->script_cache)->ToValue());

  }
  if (this->css_cache) {
    to_value_result.Set("cssCache", (this->css_cache)->ToValue());

  }

  return to_value_result;
}



//
// Functions
//

namespace GetProcessIdForTab {

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


base::Value::List Results::Create(int process_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(process_id);

  return create_results;
}
}  // namespace GetProcessIdForTab

namespace Terminate {

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
    const base::Value& process_id_value = args[0];
    {
      auto temp = process_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.process_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool did_terminate) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(did_terminate);

  return create_results;
}
}  // namespace Terminate

namespace GetProcessInfo {

Params::ProcessIds::ProcessIds()
 {}

Params::ProcessIds::~ProcessIds() = default;
Params::ProcessIds::ProcessIds(ProcessIds&& rhs) noexcept = default;
Params::ProcessIds& Params::ProcessIds::operator=(ProcessIds&& rhs) noexcept = default;
Params::ProcessIds Params::ProcessIds::Clone() const {
  ProcessIds out;
  out.as_integer = as_integer;
  out.as_integers = as_integers;
  return out;
}

// static
bool Params::ProcessIds::Populate(
    const base::Value& value, ProcessIds& out) {
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
std::optional<Params::ProcessIds> Params::ProcessIds::FromValue(const base::Value& value) {
  ProcessIds out;
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
    const base::Value& process_ids_value = args[0];
    {
      if (!ProcessIds::Populate(process_ids_value, params.process_ids))
        return std::nullopt;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& include_memory_value = args[1];
    {
      auto temp = include_memory_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.include_memory = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


Results::Processes::Processes()
 {}

Results::Processes::~Processes() = default;
Results::Processes::Processes(Processes&& rhs) noexcept = default;
Results::Processes& Results::Processes::operator=(Processes&& rhs) noexcept = default;
base::Value::Dict Results::Processes::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::Value::List Results::Create(const Processes& processes) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((processes).ToValue());

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
Processes::Processes(Processes&& rhs) noexcept = default;
Processes& Processes::operator=(Processes&& rhs) noexcept = default;
base::Value::Dict Processes::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::Value::List Create(const Processes& processes) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((processes).ToValue());

  return create_results;
}

}  // namespace OnUpdated

namespace OnUpdatedWithMemory {

const char kEventName[] = "processes.onUpdatedWithMemory";

Processes::Processes()
 {}

Processes::~Processes() = default;
Processes::Processes(Processes&& rhs) noexcept = default;
Processes& Processes::operator=(Processes&& rhs) noexcept = default;
base::Value::Dict Processes::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::Value::List Create(const Processes& processes) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((processes).ToValue());

  return create_results;
}

}  // namespace OnUpdatedWithMemory

namespace OnCreated {

const char kEventName[] = "processes.onCreated";

base::Value::List Create(const Process& process) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((process).ToValue());

  return create_results;
}

}  // namespace OnCreated

namespace OnUnresponsive {

const char kEventName[] = "processes.onUnresponsive";

base::Value::List Create(const Process& process) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((process).ToValue());

  return create_results;
}

}  // namespace OnUnresponsive

namespace OnExited {

const char kEventName[] = "processes.onExited";

base::Value::List Create(int process_id, int exit_type, int exit_code) {
  base::Value::List create_results;
  create_results.reserve(3);
  create_results.Append(process_id);

  create_results.Append(exit_type);

  create_results.Append(exit_code);

  return create_results;
}

}  // namespace OnExited

}  // namespace processes
}  // namespace api
}  // namespace extensions

