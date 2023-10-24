// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/activity_log_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/activity_log_private.h"

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


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace activity_log_private {
//
// Types
//

const char* ToString(ExtensionActivityType enum_param) {
  switch (enum_param) {
    case ExtensionActivityType::kApiCall:
      return "api_call";
    case ExtensionActivityType::kApiEvent:
      return "api_event";
    case ExtensionActivityType::kContentScript:
      return "content_script";
    case ExtensionActivityType::kDomAccess:
      return "dom_access";
    case ExtensionActivityType::kDomEvent:
      return "dom_event";
    case ExtensionActivityType::kWebRequest:
      return "web_request";
    case ExtensionActivityType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ExtensionActivityType ParseExtensionActivityType(base::StringPiece enum_string) {
  if (enum_string == "api_call")
    return ExtensionActivityType::kApiCall;
  if (enum_string == "api_event")
    return ExtensionActivityType::kApiEvent;
  if (enum_string == "content_script")
    return ExtensionActivityType::kContentScript;
  if (enum_string == "dom_access")
    return ExtensionActivityType::kDomAccess;
  if (enum_string == "dom_event")
    return ExtensionActivityType::kDomEvent;
  if (enum_string == "web_request")
    return ExtensionActivityType::kWebRequest;
  return ExtensionActivityType::kNone;
}

std::u16string GetExtensionActivityTypeParseError(base::StringPiece enum_string) {
  return u"expected \"api_call\" or \"api_event\" or \"content_script\" or \"dom_access\" or \"dom_event\" or \"web_request\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ExtensionActivityFilter enum_param) {
  switch (enum_param) {
    case ExtensionActivityFilter::kApiCall:
      return "api_call";
    case ExtensionActivityFilter::kApiEvent:
      return "api_event";
    case ExtensionActivityFilter::kContentScript:
      return "content_script";
    case ExtensionActivityFilter::kDomAccess:
      return "dom_access";
    case ExtensionActivityFilter::kDomEvent:
      return "dom_event";
    case ExtensionActivityFilter::kWebRequest:
      return "web_request";
    case ExtensionActivityFilter::kAny:
      return "any";
    case ExtensionActivityFilter::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ExtensionActivityFilter ParseExtensionActivityFilter(base::StringPiece enum_string) {
  if (enum_string == "api_call")
    return ExtensionActivityFilter::kApiCall;
  if (enum_string == "api_event")
    return ExtensionActivityFilter::kApiEvent;
  if (enum_string == "content_script")
    return ExtensionActivityFilter::kContentScript;
  if (enum_string == "dom_access")
    return ExtensionActivityFilter::kDomAccess;
  if (enum_string == "dom_event")
    return ExtensionActivityFilter::kDomEvent;
  if (enum_string == "web_request")
    return ExtensionActivityFilter::kWebRequest;
  if (enum_string == "any")
    return ExtensionActivityFilter::kAny;
  return ExtensionActivityFilter::kNone;
}

std::u16string GetExtensionActivityFilterParseError(base::StringPiece enum_string) {
  return u"expected \"api_call\" or \"api_event\" or \"content_script\" or \"dom_access\" or \"dom_event\" or \"web_request\" or \"any\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ExtensionActivityDomVerb enum_param) {
  switch (enum_param) {
    case ExtensionActivityDomVerb::kGetter:
      return "getter";
    case ExtensionActivityDomVerb::kSetter:
      return "setter";
    case ExtensionActivityDomVerb::kMethod:
      return "method";
    case ExtensionActivityDomVerb::kInserted:
      return "inserted";
    case ExtensionActivityDomVerb::kXhr:
      return "xhr";
    case ExtensionActivityDomVerb::kWebrequest:
      return "webrequest";
    case ExtensionActivityDomVerb::kModified:
      return "modified";
    case ExtensionActivityDomVerb::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ExtensionActivityDomVerb ParseExtensionActivityDomVerb(base::StringPiece enum_string) {
  if (enum_string == "getter")
    return ExtensionActivityDomVerb::kGetter;
  if (enum_string == "setter")
    return ExtensionActivityDomVerb::kSetter;
  if (enum_string == "method")
    return ExtensionActivityDomVerb::kMethod;
  if (enum_string == "inserted")
    return ExtensionActivityDomVerb::kInserted;
  if (enum_string == "xhr")
    return ExtensionActivityDomVerb::kXhr;
  if (enum_string == "webrequest")
    return ExtensionActivityDomVerb::kWebrequest;
  if (enum_string == "modified")
    return ExtensionActivityDomVerb::kModified;
  return ExtensionActivityDomVerb::kNone;
}

std::u16string GetExtensionActivityDomVerbParseError(base::StringPiece enum_string) {
  return u"expected \"getter\" or \"setter\" or \"method\" or \"inserted\" or \"xhr\" or \"webrequest\" or \"modified\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ExtensionActivity::Other::Other()
: dom_verb() {}

ExtensionActivity::Other::~Other() = default;
ExtensionActivity::Other::Other(Other&& rhs) = default;
ExtensionActivity::Other& ExtensionActivity::Other::operator=(Other&& rhs) = default;
ExtensionActivity::Other ExtensionActivity::Other::Clone() const {
  Other out;
  out.prerender = prerender;
  out.dom_verb = dom_verb;
  out.web_request = web_request;
  out.extra = extra;
  return out;
}

// static
bool ExtensionActivity::Other::Populate(
    const base::Value::Dict& dict, Other& out) {
  out.dom_verb = ExtensionActivityDomVerb();
  const base::Value* prerender_value = dict.Find("prerender");
  if (prerender_value) {
    {
      auto temp = (*prerender_value).GetIfBool();
      if (!temp.has_value()) {
        out.prerender = absl::nullopt;
        return false;
      }
      out.prerender = *temp;
    }
  }

  const base::Value* dom_verb_value = dict.Find("domVerb");
  if (dom_verb_value) {
    {
      const std::string* extension_activity_dom_verb_as_string = (*dom_verb_value).GetIfString();
      if (!extension_activity_dom_verb_as_string) {
        return false;
      }
      out.dom_verb = ParseExtensionActivityDomVerb(*extension_activity_dom_verb_as_string);
      if (out.dom_verb == ExtensionActivityDomVerb()) {
        return false;
      }
    }
    } else {
    out.dom_verb = ExtensionActivityDomVerb();
  }

  const base::Value* web_request_value = dict.Find("webRequest");
  if (web_request_value) {
    {
      auto* temp = (*web_request_value).GetIfString();
      if (!temp) {
        out.web_request = absl::nullopt;
        return false;
      }
      out.web_request = *temp;
    }
  }

  const base::Value* extra_value = dict.Find("extra");
  if (extra_value) {
    {
      auto* temp = (*extra_value).GetIfString();
      if (!temp) {
        out.extra = absl::nullopt;
        return false;
      }
      out.extra = *temp;
    }
  }

  return true;
}

// static
bool ExtensionActivity::Other::Populate(
    const base::Value& value, Other& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<ExtensionActivity::Other> ExtensionActivity::Other::FromValue(const base::Value::Dict& value) {
  Other out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ExtensionActivity::Other> ExtensionActivity::Other::FromValue(const base::Value& value) {
  Other out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ExtensionActivity::Other::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->prerender) {
    to_value_result.Set("prerender", *this->prerender);

  }
  if (this->dom_verb != ExtensionActivityDomVerb()) {
    to_value_result.Set("domVerb", activity_log_private::ToString(this->dom_verb));

  }
  if (this->web_request) {
    to_value_result.Set("webRequest", *this->web_request);

  }
  if (this->extra) {
    to_value_result.Set("extra", *this->extra);

  }

  return to_value_result;
}



ExtensionActivity::ExtensionActivity()
: activity_type() {}

ExtensionActivity::~ExtensionActivity() = default;
ExtensionActivity::ExtensionActivity(ExtensionActivity&& rhs) = default;
ExtensionActivity& ExtensionActivity::operator=(ExtensionActivity&& rhs) = default;
ExtensionActivity ExtensionActivity::Clone() const {
  ExtensionActivity out;
  out.activity_id = activity_id;
  out.extension_id = extension_id;
  out.activity_type = activity_type;
  out.time = time;
  out.api_call = api_call;
  out.args = args;
  out.count = count;
  out.page_url = page_url;
  out.page_title = page_title;
  out.arg_url = arg_url;
  if (other) {
    out.other = other->Clone();
  }
  return out;
}

// static
bool ExtensionActivity::Populate(
    const base::Value::Dict& dict, ExtensionActivity& out) {
  const base::Value* activity_id_value = dict.Find("activityId");
  if (activity_id_value) {
    {
      auto* temp = (*activity_id_value).GetIfString();
      if (!temp) {
        out.activity_id = absl::nullopt;
        return false;
      }
      out.activity_id = *temp;
    }
  }

  const base::Value* extension_id_value = dict.Find("extensionId");
  if (extension_id_value) {
    {
      auto* temp = (*extension_id_value).GetIfString();
      if (!temp) {
        out.extension_id = absl::nullopt;
        return false;
      }
      out.extension_id = *temp;
    }
  }

  const base::Value* activity_type_value = dict.Find("activityType");
  if (!activity_type_value) {
    return false;
  }
  {
    const std::string* extension_activity_type_as_string = (*activity_type_value).GetIfString();
    if (!extension_activity_type_as_string) {
      return false;
    }
    out.activity_type = ParseExtensionActivityType(*extension_activity_type_as_string);
    if (out.activity_type == ExtensionActivityType()) {
      return false;
    }
  }

  const base::Value* time_value = dict.Find("time");
  if (time_value) {
    {
      auto temp = (*time_value).GetIfDouble();
      if (!temp.has_value()) {
        out.time = absl::nullopt;
        return false;
      }
      out.time = *temp;
    }
  }

  const base::Value* api_call_value = dict.Find("apiCall");
  if (api_call_value) {
    {
      auto* temp = (*api_call_value).GetIfString();
      if (!temp) {
        out.api_call = absl::nullopt;
        return false;
      }
      out.api_call = *temp;
    }
  }

  const base::Value* args_value = dict.Find("args");
  if (args_value) {
    {
      auto* temp = (*args_value).GetIfString();
      if (!temp) {
        out.args = absl::nullopt;
        return false;
      }
      out.args = *temp;
    }
  }

  const base::Value* count_value = dict.Find("count");
  if (count_value) {
    {
      auto temp = (*count_value).GetIfDouble();
      if (!temp.has_value()) {
        out.count = absl::nullopt;
        return false;
      }
      out.count = *temp;
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

  const base::Value* page_title_value = dict.Find("pageTitle");
  if (page_title_value) {
    {
      auto* temp = (*page_title_value).GetIfString();
      if (!temp) {
        out.page_title = absl::nullopt;
        return false;
      }
      out.page_title = *temp;
    }
  }

  const base::Value* arg_url_value = dict.Find("argUrl");
  if (arg_url_value) {
    {
      auto* temp = (*arg_url_value).GetIfString();
      if (!temp) {
        out.arg_url = absl::nullopt;
        return false;
      }
      out.arg_url = *temp;
    }
  }

  const base::Value* other_value = dict.Find("other");
  if (other_value) {
    {
      if (!(*other_value).is_dict()) {
        return false;
      }
      else {
        Other temp;
        if (!Other::Populate((*other_value).GetDict(), temp))
          return false;
        out.other = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool ExtensionActivity::Populate(
    const base::Value& value, ExtensionActivity& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ExtensionActivity> ExtensionActivity::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ExtensionActivity>();
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
absl::optional<ExtensionActivity> ExtensionActivity::FromValue(const base::Value::Dict& value) {
  ExtensionActivity out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ExtensionActivity> ExtensionActivity::FromValue(const base::Value& value) {
  ExtensionActivity out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ExtensionActivity::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->activity_id) {
    to_value_result.Set("activityId", *this->activity_id);

  }
  if (this->extension_id) {
    to_value_result.Set("extensionId", *this->extension_id);

  }
  to_value_result.Set("activityType", activity_log_private::ToString(this->activity_type));

  if (this->time) {
    to_value_result.Set("time", *this->time);

  }
  if (this->api_call) {
    to_value_result.Set("apiCall", *this->api_call);

  }
  if (this->args) {
    to_value_result.Set("args", *this->args);

  }
  if (this->count) {
    to_value_result.Set("count", *this->count);

  }
  if (this->page_url) {
    to_value_result.Set("pageUrl", *this->page_url);

  }
  if (this->page_title) {
    to_value_result.Set("pageTitle", *this->page_title);

  }
  if (this->arg_url) {
    to_value_result.Set("argUrl", *this->arg_url);

  }
  if (this->other) {
    to_value_result.Set("other", (this->other)->ToValue());

  }

  return to_value_result;
}


Filter::Filter()
: activity_type() {}

Filter::~Filter() = default;
Filter::Filter(Filter&& rhs) = default;
Filter& Filter::operator=(Filter&& rhs) = default;
Filter Filter::Clone() const {
  Filter out;
  out.extension_id = extension_id;
  out.activity_type = activity_type;
  out.api_call = api_call;
  out.page_url = page_url;
  out.arg_url = arg_url;
  out.days_ago = days_ago;
  return out;
}

// static
bool Filter::Populate(
    const base::Value::Dict& dict, Filter& out) {
  const base::Value* extension_id_value = dict.Find("extensionId");
  if (extension_id_value) {
    {
      auto* temp = (*extension_id_value).GetIfString();
      if (!temp) {
        out.extension_id = absl::nullopt;
        return false;
      }
      out.extension_id = *temp;
    }
  }

  const base::Value* activity_type_value = dict.Find("activityType");
  if (!activity_type_value) {
    return false;
  }
  {
    const std::string* extension_activity_filter_as_string = (*activity_type_value).GetIfString();
    if (!extension_activity_filter_as_string) {
      return false;
    }
    out.activity_type = ParseExtensionActivityFilter(*extension_activity_filter_as_string);
    if (out.activity_type == ExtensionActivityFilter()) {
      return false;
    }
  }

  const base::Value* api_call_value = dict.Find("apiCall");
  if (api_call_value) {
    {
      auto* temp = (*api_call_value).GetIfString();
      if (!temp) {
        out.api_call = absl::nullopt;
        return false;
      }
      out.api_call = *temp;
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

  const base::Value* arg_url_value = dict.Find("argUrl");
  if (arg_url_value) {
    {
      auto* temp = (*arg_url_value).GetIfString();
      if (!temp) {
        out.arg_url = absl::nullopt;
        return false;
      }
      out.arg_url = *temp;
    }
  }

  const base::Value* days_ago_value = dict.Find("daysAgo");
  if (days_ago_value) {
    {
      auto temp = (*days_ago_value).GetIfInt();
      if (!temp.has_value()) {
        out.days_ago = absl::nullopt;
        return false;
      }
      out.days_ago = *temp;
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
std::unique_ptr<Filter> Filter::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Filter>();
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
absl::optional<Filter> Filter::FromValue(const base::Value::Dict& value) {
  Filter out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Filter> Filter::FromValue(const base::Value& value) {
  Filter out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict Filter::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->extension_id) {
    to_value_result.Set("extensionId", *this->extension_id);

  }
  to_value_result.Set("activityType", activity_log_private::ToString(this->activity_type));

  if (this->api_call) {
    to_value_result.Set("apiCall", *this->api_call);

  }
  if (this->page_url) {
    to_value_result.Set("pageUrl", *this->page_url);

  }
  if (this->arg_url) {
    to_value_result.Set("argUrl", *this->arg_url);

  }
  if (this->days_ago) {
    to_value_result.Set("daysAgo", *this->days_ago);

  }

  return to_value_result;
}


ActivityResultSet::ActivityResultSet()
 {}

ActivityResultSet::~ActivityResultSet() = default;
ActivityResultSet::ActivityResultSet(ActivityResultSet&& rhs) = default;
ActivityResultSet& ActivityResultSet::operator=(ActivityResultSet&& rhs) = default;
ActivityResultSet ActivityResultSet::Clone() const {
  ActivityResultSet out;
  out.activities.reserve(activities.size());
  for (const auto& element : activities) {
    json_schema_compiler::util::AppendToContainer(out.activities, element.Clone());
  }
  return out;
}

// static
bool ActivityResultSet::Populate(
    const base::Value::Dict& dict, ActivityResultSet& out) {
  const base::Value* activities_value = dict.Find("activities");
  if (!activities_value) {
    return false;
  }
  {
    if (!(*activities_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*activities_value).GetList(), out.activities)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool ActivityResultSet::Populate(
    const base::Value& value, ActivityResultSet& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ActivityResultSet> ActivityResultSet::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ActivityResultSet>();
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
absl::optional<ActivityResultSet> ActivityResultSet::FromValue(const base::Value::Dict& value) {
  ActivityResultSet out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ActivityResultSet> ActivityResultSet::FromValue(const base::Value& value) {
  ActivityResultSet out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ActivityResultSet::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("activities", json_schema_compiler::util::CreateValueFromArray(this->activities));


  return to_value_result;
}



//
// Functions
//

namespace GetExtensionActivities {

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
    const base::Value& filter_value = args[0];
    {
      if (!filter_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Filter::Populate(filter_value.GetDict(), params.filter)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const ActivityResultSet& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace GetExtensionActivities

namespace DeleteActivities {

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
    const base::Value& activity_ids_value = args[0];
    {
      if (!activity_ids_value.is_list()) {
        return absl::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(activity_ids_value.GetList(), params.activity_ids)) {
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


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace DeleteActivities

namespace DeleteActivitiesByExtension {

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
    const base::Value& extension_id_value = args[0];
    {
      auto* temp = extension_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.extension_id = *temp;
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
}  // namespace DeleteActivitiesByExtension

namespace DeleteDatabase {

}  // namespace DeleteDatabase

namespace DeleteUrls {

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
    const base::Value& urls_value = args[0];
    {
      if (!urls_value.is_list()) {
        return absl::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(urls_value.GetList(), params.urls)) {
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


}  // namespace DeleteUrls

//
// Events
//

namespace OnExtensionActivity {

const char kEventName[] = "activityLogPrivate.onExtensionActivity";

base::Value::List Create(const ExtensionActivity& activity) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((activity).ToValue());

  return create_results;
}

}  // namespace OnExtensionActivity

}  // namespace activity_log_private
}  // namespace api
}  // namespace extensions

