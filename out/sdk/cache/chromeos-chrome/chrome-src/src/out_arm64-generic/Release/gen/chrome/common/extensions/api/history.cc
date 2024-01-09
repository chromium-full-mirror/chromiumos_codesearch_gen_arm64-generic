// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/history.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/history.h"

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
namespace history {
//
// Types
//

const char* ToString(TransitionType enum_param) {
  switch (enum_param) {
    case TransitionType::kLink:
      return "link";
    case TransitionType::kTyped:
      return "typed";
    case TransitionType::kAutoBookmark:
      return "auto_bookmark";
    case TransitionType::kAutoSubframe:
      return "auto_subframe";
    case TransitionType::kManualSubframe:
      return "manual_subframe";
    case TransitionType::kGenerated:
      return "generated";
    case TransitionType::kAutoToplevel:
      return "auto_toplevel";
    case TransitionType::kFormSubmit:
      return "form_submit";
    case TransitionType::kReload:
      return "reload";
    case TransitionType::kKeyword:
      return "keyword";
    case TransitionType::kKeywordGenerated:
      return "keyword_generated";
    case TransitionType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

TransitionType ParseTransitionType(base::StringPiece enum_string) {
  if (enum_string == "link")
    return TransitionType::kLink;
  if (enum_string == "typed")
    return TransitionType::kTyped;
  if (enum_string == "auto_bookmark")
    return TransitionType::kAutoBookmark;
  if (enum_string == "auto_subframe")
    return TransitionType::kAutoSubframe;
  if (enum_string == "manual_subframe")
    return TransitionType::kManualSubframe;
  if (enum_string == "generated")
    return TransitionType::kGenerated;
  if (enum_string == "auto_toplevel")
    return TransitionType::kAutoToplevel;
  if (enum_string == "form_submit")
    return TransitionType::kFormSubmit;
  if (enum_string == "reload")
    return TransitionType::kReload;
  if (enum_string == "keyword")
    return TransitionType::kKeyword;
  if (enum_string == "keyword_generated")
    return TransitionType::kKeywordGenerated;
  return TransitionType::kNone;
}

std::u16string GetTransitionTypeParseError(base::StringPiece enum_string) {
  return u"expected \"link\" or \"typed\" or \"auto_bookmark\" or \"auto_subframe\" or \"manual_subframe\" or \"generated\" or \"auto_toplevel\" or \"form_submit\" or \"reload\" or \"keyword\" or \"keyword_generated\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


HistoryItem::HistoryItem()
 {}

HistoryItem::~HistoryItem() = default;
HistoryItem::HistoryItem(HistoryItem&& rhs) noexcept = default;
HistoryItem& HistoryItem::operator=(HistoryItem&& rhs) noexcept = default;
HistoryItem HistoryItem::Clone() const {
  HistoryItem out;
  out.id = id;
  out.url = url;
  out.title = title;
  out.last_visit_time = last_visit_time;
  out.visit_count = visit_count;
  out.typed_count = typed_count;
  return out;
}

// static
bool HistoryItem::Populate(
    const base::Value::Dict& dict, HistoryItem& out) {
  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto* temp = (*id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    {
      auto* temp = (*url_value).GetIfString();
      if (!temp) {
        out.url = std::nullopt;
        return false;
      }
      out.url = *temp;
    }
  }

  const base::Value* title_value = dict.Find("title");
  if (title_value) {
    {
      auto* temp = (*title_value).GetIfString();
      if (!temp) {
        out.title = std::nullopt;
        return false;
      }
      out.title = *temp;
    }
  }

  const base::Value* last_visit_time_value = dict.Find("lastVisitTime");
  if (last_visit_time_value) {
    {
      auto temp = (*last_visit_time_value).GetIfDouble();
      if (!temp.has_value()) {
        out.last_visit_time = std::nullopt;
        return false;
      }
      out.last_visit_time = *temp;
    }
  }

  const base::Value* visit_count_value = dict.Find("visitCount");
  if (visit_count_value) {
    {
      auto temp = (*visit_count_value).GetIfInt();
      if (!temp.has_value()) {
        out.visit_count = std::nullopt;
        return false;
      }
      out.visit_count = *temp;
    }
  }

  const base::Value* typed_count_value = dict.Find("typedCount");
  if (typed_count_value) {
    {
      auto temp = (*typed_count_value).GetIfInt();
      if (!temp.has_value()) {
        out.typed_count = std::nullopt;
        return false;
      }
      out.typed_count = *temp;
    }
  }

  return true;
}

// static
bool HistoryItem::Populate(
    const base::Value& value, HistoryItem& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<HistoryItem> HistoryItem::FromValue(const base::Value::Dict& value) {
  HistoryItem out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<HistoryItem> HistoryItem::FromValue(const base::Value& value) {
  HistoryItem out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict HistoryItem::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  if (this->url) {
    to_value_result.Set("url", *this->url);

  }
  if (this->title) {
    to_value_result.Set("title", *this->title);

  }
  if (this->last_visit_time) {
    to_value_result.Set("lastVisitTime", *this->last_visit_time);

  }
  if (this->visit_count) {
    to_value_result.Set("visitCount", *this->visit_count);

  }
  if (this->typed_count) {
    to_value_result.Set("typedCount", *this->typed_count);

  }

  return to_value_result;
}


VisitItem::VisitItem()
: transition(),
is_local(false) {}

VisitItem::~VisitItem() = default;
VisitItem::VisitItem(VisitItem&& rhs) noexcept = default;
VisitItem& VisitItem::operator=(VisitItem&& rhs) noexcept = default;
VisitItem VisitItem::Clone() const {
  VisitItem out;
  out.id = id;
  out.visit_id = visit_id;
  out.visit_time = visit_time;
  out.referring_visit_id = referring_visit_id;
  out.transition = transition;
  out.is_local = is_local;
  return out;
}

// static
bool VisitItem::Populate(
    const base::Value::Dict& dict, VisitItem& out) {
  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto* temp = (*id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* visit_id_value = dict.Find("visitId");
  if (!visit_id_value) {
    return false;
  }
  {
    auto* temp = (*visit_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.visit_id = *temp;
  }

  const base::Value* visit_time_value = dict.Find("visitTime");
  if (visit_time_value) {
    {
      auto temp = (*visit_time_value).GetIfDouble();
      if (!temp.has_value()) {
        out.visit_time = std::nullopt;
        return false;
      }
      out.visit_time = *temp;
    }
  }

  const base::Value* referring_visit_id_value = dict.Find("referringVisitId");
  if (!referring_visit_id_value) {
    return false;
  }
  {
    auto* temp = (*referring_visit_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.referring_visit_id = *temp;
  }

  const base::Value* transition_value = dict.Find("transition");
  if (!transition_value) {
    return false;
  }
  {
    const std::string* transition_type_as_string = (*transition_value).GetIfString();
    if (!transition_type_as_string) {
      return false;
    }
    out.transition = ParseTransitionType(*transition_type_as_string);
    if (out.transition == TransitionType()) {
      return false;
    }
  }

  const base::Value* is_local_value = dict.Find("isLocal");
  if (!is_local_value) {
    return false;
  }
  {
    auto temp = (*is_local_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_local = *temp;
  }

  return true;
}

// static
bool VisitItem::Populate(
    const base::Value& value, VisitItem& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<VisitItem> VisitItem::FromValue(const base::Value::Dict& value) {
  VisitItem out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<VisitItem> VisitItem::FromValue(const base::Value& value) {
  VisitItem out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict VisitItem::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("visitId", this->visit_id);

  if (this->visit_time) {
    to_value_result.Set("visitTime", *this->visit_time);

  }
  to_value_result.Set("referringVisitId", this->referring_visit_id);

  to_value_result.Set("transition", history::ToString(this->transition));

  to_value_result.Set("isLocal", this->is_local);


  return to_value_result;
}


UrlDetails::UrlDetails()
 {}

UrlDetails::~UrlDetails() = default;
UrlDetails::UrlDetails(UrlDetails&& rhs) noexcept = default;
UrlDetails& UrlDetails::operator=(UrlDetails&& rhs) noexcept = default;
UrlDetails UrlDetails::Clone() const {
  UrlDetails out;
  out.url = url;
  return out;
}

// static
bool UrlDetails::Populate(
    const base::Value::Dict& dict, UrlDetails& out) {
  const base::Value* url_value = dict.Find("url");
  if (!url_value) {
    return false;
  }
  {
    auto* temp = (*url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.url = *temp;
  }

  return true;
}

// static
bool UrlDetails::Populate(
    const base::Value& value, UrlDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<UrlDetails> UrlDetails::FromValue(const base::Value::Dict& value) {
  UrlDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<UrlDetails> UrlDetails::FromValue(const base::Value& value) {
  UrlDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict UrlDetails::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("url", this->url);


  return to_value_result;
}



//
// Functions
//

namespace Search {

Params::Query::Query()
 {}

Params::Query::~Query() = default;
Params::Query::Query(Query&& rhs) noexcept = default;
Params::Query& Params::Query::operator=(Query&& rhs) noexcept = default;
Params::Query Params::Query::Clone() const {
  Query out;
  out.text = text;
  out.start_time = start_time;
  out.end_time = end_time;
  out.max_results = max_results;
  return out;
}

// static
bool Params::Query::Populate(
    const base::Value::Dict& dict, Query& out) {
  const base::Value* text_value = dict.Find("text");
  if (!text_value) {
    return false;
  }
  {
    auto* temp = (*text_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.text = *temp;
  }

  const base::Value* start_time_value = dict.Find("startTime");
  if (start_time_value) {
    {
      auto temp = (*start_time_value).GetIfDouble();
      if (!temp.has_value()) {
        out.start_time = std::nullopt;
        return false;
      }
      out.start_time = *temp;
    }
  }

  const base::Value* end_time_value = dict.Find("endTime");
  if (end_time_value) {
    {
      auto temp = (*end_time_value).GetIfDouble();
      if (!temp.has_value()) {
        out.end_time = std::nullopt;
        return false;
      }
      out.end_time = *temp;
    }
  }

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
bool Params::Query::Populate(
    const base::Value& value, Query& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Query> Params::Query::FromValue(const base::Value::Dict& value) {
  Query out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Query> Params::Query::FromValue(const base::Value& value) {
  Query out;
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
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& query_value = args[0];
    {
      if (!query_value.is_dict()) {
        return std::nullopt;
      }
      if (!Query::Populate(query_value.GetDict(), params.query)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<HistoryItem>& results) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(results));

  return create_results;
}
}  // namespace Search

namespace GetVisits {

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
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      if (!UrlDetails::Populate(details_value.GetDict(), params.details)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<VisitItem>& results) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(results));

  return create_results;
}
}  // namespace GetVisits

namespace AddUrl {

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
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      if (!UrlDetails::Populate(details_value.GetDict(), params.details)) {
        return std::nullopt;
      }
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
}  // namespace AddUrl

namespace DeleteUrl {

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
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      if (!UrlDetails::Populate(details_value.GetDict(), params.details)) {
        return std::nullopt;
      }
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
}  // namespace DeleteUrl

namespace DeleteRange {

Params::Range::Range()
: start_time(0.0),
end_time(0.0) {}

Params::Range::~Range() = default;
Params::Range::Range(Range&& rhs) noexcept = default;
Params::Range& Params::Range::operator=(Range&& rhs) noexcept = default;
Params::Range Params::Range::Clone() const {
  Range out;
  out.start_time = start_time;
  out.end_time = end_time;
  return out;
}

// static
bool Params::Range::Populate(
    const base::Value::Dict& dict, Range& out) {
  const base::Value* start_time_value = dict.Find("startTime");
  if (!start_time_value) {
    return false;
  }
  {
    auto temp = (*start_time_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.start_time = *temp;
  }

  const base::Value* end_time_value = dict.Find("endTime");
  if (!end_time_value) {
    return false;
  }
  {
    auto temp = (*end_time_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.end_time = *temp;
  }

  return true;
}

// static
bool Params::Range::Populate(
    const base::Value& value, Range& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Range> Params::Range::FromValue(const base::Value::Dict& value) {
  Range out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Range> Params::Range::FromValue(const base::Value& value) {
  Range out;
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
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& range_value = args[0];
    {
      if (!range_value.is_dict()) {
        return std::nullopt;
      }
      if (!Range::Populate(range_value.GetDict(), params.range)) {
        return std::nullopt;
      }
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
}  // namespace DeleteRange

namespace DeleteAll {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace DeleteAll

//
// Events
//

namespace OnVisited {

const char kEventName[] = "history.onVisited";

base::Value::List Create(const HistoryItem& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}

}  // namespace OnVisited

namespace OnVisitRemoved {

const char kEventName[] = "history.onVisitRemoved";

Removed::Removed()
: all_history(false) {}

Removed::~Removed() = default;
Removed::Removed(Removed&& rhs) noexcept = default;
Removed& Removed::operator=(Removed&& rhs) noexcept = default;
base::Value::Dict Removed::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("allHistory", this->all_history);

  if (this->urls) {
    to_value_result.Set("urls", json_schema_compiler::util::CreateValueFromArray(*this->urls));

  }

  return to_value_result;
}


base::Value::List Create(const Removed& removed) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((removed).ToValue());

  return create_results;
}

}  // namespace OnVisitRemoved

}  // namespace history
}  // namespace api
}  // namespace extensions

