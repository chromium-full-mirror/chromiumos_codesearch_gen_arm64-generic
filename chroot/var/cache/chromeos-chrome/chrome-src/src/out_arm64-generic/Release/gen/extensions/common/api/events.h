// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/events.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_EVENTS_H__
#define EXTENSIONS_COMMON_API_EVENTS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace events {

//
// Types
//

// Description of a declarative rule for handling events.
struct Rule {
  Rule();
  ~Rule();
  Rule(const Rule&) = delete;
  Rule& operator=(const Rule&) = delete;
  Rule(Rule&& rhs);
  Rule& operator=(Rule&& rhs);

  // Populates a Rule object from a base::Value. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value& value, Rule* out);

  // Creates a Rule object from a base::Value, or NULL on failure.
  static std::unique_ptr<Rule> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRule object.
  base::Value::Dict ToValue() const;

  // Optional identifier that allows referencing this rule.
  absl::optional<std::string> id;

  // Tags can be used to annotate rules and perform operations on sets of rules.
  absl::optional<std::vector<std::string>> tags;

  // List of conditions that can trigger the actions.
  std::vector<base::Value> conditions;

  // List of actions that are triggered if one of the conditions is fulfilled.
  std::vector<base::Value> actions;

  // Optional priority of this rule. Defaults to 100.
  absl::optional<int> priority;

};

namespace Event {

namespace AddRules {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Name of the event this function affects.
  std::string event_name;

  // If provided, this is an integer that uniquely identfies the <webview>
  // associated with this function call.
  int web_view_instance_id;

  // Rules to be registered. These do not replace previously registered rules.
  std::vector<Rule> rules;


 private:
  Params();
};

namespace Results {

// Rules that were registered, the optional parameters are filled with values.
base::Value::List Create(const std::vector<Rule>& rules);
}  // namespace Results

}  // namespace AddRules

namespace GetRules {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Name of the event this function affects.
  std::string event_name;

  // If provided, this is an integer that uniquely identfies the <webview>
  // associated with this function call.
  int web_view_instance_id;

  // If an array is passed, only rules with identifiers contained in this array
  // are returned.
  absl::optional<std::vector<std::string>> rule_identifiers;


 private:
  Params();
};

namespace Results {

// Rules that were registered, the optional parameters are filled with values.
base::Value::List Create(const std::vector<Rule>& rules);
}  // namespace Results

}  // namespace GetRules

namespace RemoveRules {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Name of the event this function affects.
  std::string event_name;

  // If provided, this is an integer that uniquely identfies the <webview>
  // associated with this function call.
  int web_view_instance_id;

  // If an array is passed, only rules with identifiers contained in this array
  // are unregistered.
  absl::optional<std::vector<std::string>> rule_identifiers;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RemoveRules

}  // namespace Event


}  // namespace events
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_EVENTS_H__
