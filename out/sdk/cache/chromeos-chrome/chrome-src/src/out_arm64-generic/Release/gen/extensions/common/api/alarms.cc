// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/alarms.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/alarms.h"

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
namespace alarms {
//
// Types
//

Alarm::Alarm()
: scheduled_time(0.0) {}

Alarm::~Alarm() = default;
Alarm::Alarm(Alarm&& rhs) = default;
Alarm& Alarm::operator=(Alarm&& rhs) = default;
Alarm Alarm::Clone() const {
  Alarm out;
  out.name = name;
  out.scheduled_time = scheduled_time;
  out.period_in_minutes = period_in_minutes;
  return out;
}

// static
bool Alarm::Populate(
    const base::Value::Dict& dict, Alarm& out) {
  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.name = *temp;
  }

  const base::Value* scheduled_time_value = dict.Find("scheduledTime");
  if (!scheduled_time_value) {
    return false;
  }
  {
    auto temp = (*scheduled_time_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.scheduled_time = *temp;
  }

  const base::Value* period_in_minutes_value = dict.Find("periodInMinutes");
  if (period_in_minutes_value) {
    {
      auto temp = (*period_in_minutes_value).GetIfDouble();
      if (!temp.has_value()) {
        out.period_in_minutes = absl::nullopt;
        return false;
      }
      out.period_in_minutes = *temp;
    }
  }

  return true;
}

// static
bool Alarm::Populate(
    const base::Value& value, Alarm& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<Alarm> Alarm::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Alarm>();
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
absl::optional<Alarm> Alarm::FromValue(const base::Value::Dict& value) {
  Alarm out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Alarm> Alarm::FromValue(const base::Value& value) {
  Alarm out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict Alarm::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("name", this->name);

  to_value_result.Set("scheduledTime", this->scheduled_time);

  if (this->period_in_minutes) {
    to_value_result.Set("periodInMinutes", *this->period_in_minutes);

  }

  return to_value_result;
}


AlarmCreateInfo::AlarmCreateInfo()
 {}

AlarmCreateInfo::~AlarmCreateInfo() = default;
AlarmCreateInfo::AlarmCreateInfo(AlarmCreateInfo&& rhs) = default;
AlarmCreateInfo& AlarmCreateInfo::operator=(AlarmCreateInfo&& rhs) = default;
AlarmCreateInfo AlarmCreateInfo::Clone() const {
  AlarmCreateInfo out;
  out.when = when;
  out.delay_in_minutes = delay_in_minutes;
  out.period_in_minutes = period_in_minutes;
  return out;
}

// static
bool AlarmCreateInfo::Populate(
    const base::Value::Dict& dict, AlarmCreateInfo& out) {
  const base::Value* when_value = dict.Find("when");
  if (when_value) {
    {
      auto temp = (*when_value).GetIfDouble();
      if (!temp.has_value()) {
        out.when = absl::nullopt;
        return false;
      }
      out.when = *temp;
    }
  }

  const base::Value* delay_in_minutes_value = dict.Find("delayInMinutes");
  if (delay_in_minutes_value) {
    {
      auto temp = (*delay_in_minutes_value).GetIfDouble();
      if (!temp.has_value()) {
        out.delay_in_minutes = absl::nullopt;
        return false;
      }
      out.delay_in_minutes = *temp;
    }
  }

  const base::Value* period_in_minutes_value = dict.Find("periodInMinutes");
  if (period_in_minutes_value) {
    {
      auto temp = (*period_in_minutes_value).GetIfDouble();
      if (!temp.has_value()) {
        out.period_in_minutes = absl::nullopt;
        return false;
      }
      out.period_in_minutes = *temp;
    }
  }

  return true;
}

// static
bool AlarmCreateInfo::Populate(
    const base::Value& value, AlarmCreateInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<AlarmCreateInfo> AlarmCreateInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<AlarmCreateInfo>();
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
absl::optional<AlarmCreateInfo> AlarmCreateInfo::FromValue(const base::Value::Dict& value) {
  AlarmCreateInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<AlarmCreateInfo> AlarmCreateInfo::FromValue(const base::Value& value) {
  AlarmCreateInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict AlarmCreateInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->when) {
    to_value_result.Set("when", *this->when);

  }
  if (this->delay_in_minutes) {
    to_value_result.Set("delayInMinutes", *this->delay_in_minutes);

  }
  if (this->period_in_minutes) {
    to_value_result.Set("periodInMinutes", *this->period_in_minutes);

  }

  return to_value_result;
}



//
// Functions
//

namespace Create {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& name_value = args[0];
    {
      auto* temp = name_value.GetIfString();
      if (!temp) {
        params.name = absl::nullopt;
        return absl::nullopt;
      }
      params.name = *temp;
    }
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& alarm_info_value = args[1];
    {
      if (!alarm_info_value.is_dict()) {
        return absl::nullopt;
      }
      if (!AlarmCreateInfo::Populate(alarm_info_value.GetDict(), params.alarm_info)) {
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

namespace Get {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& name_value = args[0];
    {
      auto* temp = name_value.GetIfString();
      if (!temp) {
        params.name = absl::nullopt;
        return absl::nullopt;
      }
      params.name = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create(const Alarm& alarm) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((alarm).ToValue());

  return create_results;
}
}  // namespace Get

namespace GetAll {

base::Value::List Results::Create(const std::vector<Alarm>& alarms) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(alarms));

  return create_results;
}
}  // namespace GetAll

namespace Clear {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& name_value = args[0];
    {
      auto* temp = name_value.GetIfString();
      if (!temp) {
        params.name = absl::nullopt;
        return absl::nullopt;
      }
      params.name = *temp;
    }
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

namespace ClearAll {

base::Value::List Results::Create(bool was_cleared) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(was_cleared);

  return create_results;
}
}  // namespace ClearAll

//
// Events
//

namespace OnAlarm {

const char kEventName[] = "alarms.onAlarm";

base::Value::List Create(const Alarm& alarm) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((alarm).ToValue());

  return create_results;
}

}  // namespace OnAlarm

}  // namespace alarms
}  // namespace api
}  // namespace extensions

