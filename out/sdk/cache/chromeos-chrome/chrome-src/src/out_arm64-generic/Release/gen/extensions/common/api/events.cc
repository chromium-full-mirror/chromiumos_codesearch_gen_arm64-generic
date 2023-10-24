// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/events.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/events.h"

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
namespace events {
//
// Types
//

Rule::Rule()
 {}

Rule::~Rule() = default;
Rule::Rule(Rule&& rhs) = default;
Rule& Rule::operator=(Rule&& rhs) = default;
Rule Rule::Clone() const {
  Rule out;
  out.id = id;
  out.tags = tags;
  out.conditions.reserve(conditions.size());
  for (const auto& element : conditions) {
    json_schema_compiler::util::AppendToContainer(out.conditions, element.Clone());
  }
  out.actions.reserve(actions.size());
  for (const auto& element : actions) {
    json_schema_compiler::util::AppendToContainer(out.actions, element.Clone());
  }
  out.priority = priority;
  return out;
}

// static
bool Rule::Populate(
    const base::Value::Dict& dict, Rule& out) {
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

  const base::Value* tags_value = dict.Find("tags");
  if (tags_value) {
    {
      if (!(*tags_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*tags_value).GetList(), out.tags)) {
          return false;
        }
      }
    }
  }

  const base::Value* conditions_value = dict.Find("conditions");
  if (!conditions_value) {
    return false;
  }
  {
    if (!(*conditions_value).is_list()) {
      return false;
    }
    else {
      out.conditions = (*conditions_value).GetList().Clone();
    }
  }

  const base::Value* actions_value = dict.Find("actions");
  if (!actions_value) {
    return false;
  }
  {
    if (!(*actions_value).is_list()) {
      return false;
    }
    else {
      out.actions = (*actions_value).GetList().Clone();
    }
  }

  const base::Value* priority_value = dict.Find("priority");
  if (priority_value) {
    {
      auto temp = (*priority_value).GetIfInt();
      if (!temp.has_value()) {
        out.priority = absl::nullopt;
        return false;
      }
      out.priority = *temp;
    }
  }

  return true;
}

// static
bool Rule::Populate(
    const base::Value& value, Rule& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<Rule> Rule::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Rule>();
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
absl::optional<Rule> Rule::FromValue(const base::Value::Dict& value) {
  Rule out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Rule> Rule::FromValue(const base::Value& value) {
  Rule out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict Rule::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->id) {
    to_value_result.Set("id", *this->id);

  }
  if (this->tags) {
    to_value_result.Set("tags", json_schema_compiler::util::CreateValueFromArray(*this->tags));

  }
  to_value_result.Set("conditions", (this->conditions).Clone());

  to_value_result.Set("actions", (this->actions).Clone());

  if (this->priority) {
    to_value_result.Set("priority", *this->priority);

  }

  return to_value_result;
}


namespace Event {

namespace AddRules {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 3) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& event_name_value = args[0];
    {
      auto* temp = event_name_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.event_name = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& web_view_instance_id_value = args[1];
    {
      auto temp = web_view_instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.web_view_instance_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& rules_value = args[2];
    {
      if (!rules_value.is_list()) {
        return absl::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(rules_value.GetList(), params.rules)) {
          return absl::nullopt;
        }
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<Rule>& rules) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(rules));

  return create_results;
}
}  // namespace AddRules

namespace GetRules {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 2 || args.size() > 3) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& event_name_value = args[0];
    {
      auto* temp = event_name_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.event_name = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& web_view_instance_id_value = args[1];
    {
      auto temp = web_view_instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.web_view_instance_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& rule_identifiers_value = args[2];
    {
      if (!rule_identifiers_value.is_list()) {
        return absl::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(rule_identifiers_value.GetList(), params.rule_identifiers)) {
          return absl::nullopt;
        }
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const std::vector<Rule>& rules) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(rules));

  return create_results;
}
}  // namespace GetRules

namespace RemoveRules {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 2 || args.size() > 3) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& event_name_value = args[0];
    {
      auto* temp = event_name_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.event_name = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& web_view_instance_id_value = args[1];
    {
      auto temp = web_view_instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.web_view_instance_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& rule_identifiers_value = args[2];
    {
      if (!rule_identifiers_value.is_list()) {
        return absl::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(rule_identifiers_value.GetList(), params.rule_identifiers)) {
          return absl::nullopt;
        }
      }
    }
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace RemoveRules

}  // namespace Event


}  // namespace events
}  // namespace api
}  // namespace extensions

