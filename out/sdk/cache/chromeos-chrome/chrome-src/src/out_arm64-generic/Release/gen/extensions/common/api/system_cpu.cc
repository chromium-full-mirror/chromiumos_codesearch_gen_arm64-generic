// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/system_cpu.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/system_cpu.h"

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
namespace system_cpu {
//
// Types
//

CpuTime::CpuTime()
: user(0.0),
kernel(0.0),
idle(0.0),
total(0.0) {}

CpuTime::~CpuTime() = default;
CpuTime::CpuTime(CpuTime&& rhs) = default;
CpuTime& CpuTime::operator=(CpuTime&& rhs) = default;
CpuTime CpuTime::Clone() const {
  CpuTime out;
  out.user = user;
  out.kernel = kernel;
  out.idle = idle;
  out.total = total;
  return out;
}

// static
bool CpuTime::Populate(
    const base::Value::Dict& dict, CpuTime& out) {
  const base::Value* user_value = dict.Find("user");
  if (!user_value) {
    return false;
  }
  {
    auto temp = (*user_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.user = *temp;
  }

  const base::Value* kernel_value = dict.Find("kernel");
  if (!kernel_value) {
    return false;
  }
  {
    auto temp = (*kernel_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.kernel = *temp;
  }

  const base::Value* idle_value = dict.Find("idle");
  if (!idle_value) {
    return false;
  }
  {
    auto temp = (*idle_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.idle = *temp;
  }

  const base::Value* total_value = dict.Find("total");
  if (!total_value) {
    return false;
  }
  {
    auto temp = (*total_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.total = *temp;
  }

  return true;
}

// static
bool CpuTime::Populate(
    const base::Value& value, CpuTime& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<CpuTime> CpuTime::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<CpuTime>();
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
absl::optional<CpuTime> CpuTime::FromValue(const base::Value::Dict& value) {
  CpuTime out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CpuTime> CpuTime::FromValue(const base::Value& value) {
  CpuTime out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict CpuTime::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("user", this->user);

  to_value_result.Set("kernel", this->kernel);

  to_value_result.Set("idle", this->idle);

  to_value_result.Set("total", this->total);


  return to_value_result;
}


ProcessorInfo::ProcessorInfo()
 {}

ProcessorInfo::~ProcessorInfo() = default;
ProcessorInfo::ProcessorInfo(ProcessorInfo&& rhs) = default;
ProcessorInfo& ProcessorInfo::operator=(ProcessorInfo&& rhs) = default;
ProcessorInfo ProcessorInfo::Clone() const {
  ProcessorInfo out;
  out.usage = usage.Clone();
  return out;
}

// static
bool ProcessorInfo::Populate(
    const base::Value::Dict& dict, ProcessorInfo& out) {
  const base::Value* usage_value = dict.Find("usage");
  if (!usage_value) {
    return false;
  }
  {
    if (!(*usage_value).is_dict()) {
      return false;
    }
    if (!CpuTime::Populate((*usage_value).GetDict(), out.usage)) {
      return false;
    }
  }

  return true;
}

// static
bool ProcessorInfo::Populate(
    const base::Value& value, ProcessorInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ProcessorInfo> ProcessorInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ProcessorInfo>();
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
absl::optional<ProcessorInfo> ProcessorInfo::FromValue(const base::Value::Dict& value) {
  ProcessorInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ProcessorInfo> ProcessorInfo::FromValue(const base::Value& value) {
  ProcessorInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ProcessorInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("usage", (this->usage).ToValue());


  return to_value_result;
}


CpuInfo::CpuInfo()
: num_of_processors(0) {}

CpuInfo::~CpuInfo() = default;
CpuInfo::CpuInfo(CpuInfo&& rhs) = default;
CpuInfo& CpuInfo::operator=(CpuInfo&& rhs) = default;
CpuInfo CpuInfo::Clone() const {
  CpuInfo out;
  out.num_of_processors = num_of_processors;
  out.arch_name = arch_name;
  out.model_name = model_name;
  out.features = features;
  out.processors.reserve(processors.size());
  for (const auto& element : processors) {
    json_schema_compiler::util::AppendToContainer(out.processors, element.Clone());
  }
  out.temperatures = temperatures;
  return out;
}

// static
bool CpuInfo::Populate(
    const base::Value::Dict& dict, CpuInfo& out) {
  const base::Value* num_of_processors_value = dict.Find("numOfProcessors");
  if (!num_of_processors_value) {
    return false;
  }
  {
    auto temp = (*num_of_processors_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.num_of_processors = *temp;
  }

  const base::Value* arch_name_value = dict.Find("archName");
  if (!arch_name_value) {
    return false;
  }
  {
    auto* temp = (*arch_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.arch_name = *temp;
  }

  const base::Value* model_name_value = dict.Find("modelName");
  if (!model_name_value) {
    return false;
  }
  {
    auto* temp = (*model_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.model_name = *temp;
  }

  const base::Value* features_value = dict.Find("features");
  if (!features_value) {
    return false;
  }
  {
    if (!(*features_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*features_value).GetList(), out.features)) {
        return false;
      }
    }
  }

  const base::Value* processors_value = dict.Find("processors");
  if (!processors_value) {
    return false;
  }
  {
    if (!(*processors_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*processors_value).GetList(), out.processors)) {
        return false;
      }
    }
  }

  const base::Value* temperatures_value = dict.Find("temperatures");
  if (!temperatures_value) {
    return false;
  }
  {
    if (!(*temperatures_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*temperatures_value).GetList(), out.temperatures)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool CpuInfo::Populate(
    const base::Value& value, CpuInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<CpuInfo> CpuInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<CpuInfo>();
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
absl::optional<CpuInfo> CpuInfo::FromValue(const base::Value::Dict& value) {
  CpuInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CpuInfo> CpuInfo::FromValue(const base::Value& value) {
  CpuInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict CpuInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("numOfProcessors", this->num_of_processors);

  to_value_result.Set("archName", this->arch_name);

  to_value_result.Set("modelName", this->model_name);

  to_value_result.Set("features", json_schema_compiler::util::CreateValueFromArray(this->features));

  to_value_result.Set("processors", json_schema_compiler::util::CreateValueFromArray(this->processors));

  to_value_result.Set("temperatures", json_schema_compiler::util::CreateValueFromArray(this->temperatures));


  return to_value_result;
}



//
// Functions
//

namespace GetInfo {

base::Value::List Results::Create(const CpuInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}
}  // namespace GetInfo

}  // namespace system_cpu
}  // namespace api
}  // namespace extensions

