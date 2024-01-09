// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/search.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/search.h"

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
namespace search {
//
// Types
//

const char* ToString(Disposition enum_param) {
  switch (enum_param) {
    case Disposition::kCurrentTab:
      return "CURRENT_TAB";
    case Disposition::kNewTab:
      return "NEW_TAB";
    case Disposition::kNewWindow:
      return "NEW_WINDOW";
    case Disposition::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

Disposition ParseDisposition(base::StringPiece enum_string) {
  if (enum_string == "CURRENT_TAB")
    return Disposition::kCurrentTab;
  if (enum_string == "NEW_TAB")
    return Disposition::kNewTab;
  if (enum_string == "NEW_WINDOW")
    return Disposition::kNewWindow;
  return Disposition::kNone;
}

std::u16string GetDispositionParseError(base::StringPiece enum_string) {
  return u"expected \"CURRENT_TAB\" or \"NEW_TAB\" or \"NEW_WINDOW\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


QueryInfo::QueryInfo()
: disposition() {}

QueryInfo::~QueryInfo() = default;
QueryInfo::QueryInfo(QueryInfo&& rhs) noexcept = default;
QueryInfo& QueryInfo::operator=(QueryInfo&& rhs) noexcept = default;
QueryInfo QueryInfo::Clone() const {
  QueryInfo out;
  out.text = text;
  out.disposition = disposition;
  out.tab_id = tab_id;
  return out;
}

// static
bool QueryInfo::Populate(
    const base::Value::Dict& dict, QueryInfo& out) {
  out.disposition = Disposition();
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

  const base::Value* disposition_value = dict.Find("disposition");
  if (disposition_value) {
    {
      const std::string* disposition_as_string = (*disposition_value).GetIfString();
      if (!disposition_as_string) {
        return false;
      }
      out.disposition = ParseDisposition(*disposition_as_string);
      if (out.disposition == Disposition()) {
        return false;
      }
    }
    } else {
    out.disposition = Disposition();
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
bool QueryInfo::Populate(
    const base::Value& value, QueryInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<QueryInfo> QueryInfo::FromValue(const base::Value::Dict& value) {
  QueryInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<QueryInfo> QueryInfo::FromValue(const base::Value& value) {
  QueryInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict QueryInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("text", this->text);

  if (this->disposition != Disposition()) {
    to_value_result.Set("disposition", search::ToString(this->disposition));

  }
  if (this->tab_id) {
    to_value_result.Set("tabId", *this->tab_id);

  }

  return to_value_result;
}



//
// Functions
//

namespace Query {

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
    const base::Value& query_info_value = args[0];
    {
      if (!query_info_value.is_dict()) {
        return std::nullopt;
      }
      if (!QueryInfo::Populate(query_info_value.GetDict(), params.query_info)) {
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
}  // namespace Query

}  // namespace search
}  // namespace api
}  // namespace extensions

