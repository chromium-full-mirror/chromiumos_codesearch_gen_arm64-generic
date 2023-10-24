// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/search.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/search.h"

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
namespace search {
//
// Types
//

const char* ToString(Disposition enum_param) {
  switch (enum_param) {
    case DISPOSITION_CURRENT_TAB:
      return "CURRENT_TAB";
    case DISPOSITION_NEW_TAB:
      return "NEW_TAB";
    case DISPOSITION_NEW_WINDOW:
      return "NEW_WINDOW";
    case DISPOSITION_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

Disposition ParseDisposition(base::StringPiece enum_string) {
  if (enum_string == "CURRENT_TAB")
    return DISPOSITION_CURRENT_TAB;
  if (enum_string == "NEW_TAB")
    return DISPOSITION_NEW_TAB;
  if (enum_string == "NEW_WINDOW")
    return DISPOSITION_NEW_WINDOW;
  return DISPOSITION_NONE;
}

std::u16string GetDispositionParseError(base::StringPiece enum_string) {
  return u"expected \"CURRENT_TAB\" or \"NEW_TAB\" or \"NEW_WINDOW\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


QueryInfo::QueryInfo()
: disposition() {}

QueryInfo::~QueryInfo() = default;
QueryInfo::QueryInfo(QueryInfo&& rhs) = default;
QueryInfo& QueryInfo::operator=(QueryInfo&& rhs) = default;
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
        out.tab_id = absl::nullopt;
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
std::unique_ptr<QueryInfo> QueryInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<QueryInfo>();
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
absl::optional<QueryInfo> QueryInfo::FromValue(const base::Value::Dict& value) {
  QueryInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<QueryInfo> QueryInfo::FromValue(const base::Value& value) {
  QueryInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
    const base::Value& query_info_value = args[0];
    {
      if (!query_info_value.is_dict()) {
        return absl::nullopt;
      }
      if (!QueryInfo::Populate(query_info_value.GetDict(), params.query_info)) {
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
}  // namespace Query

}  // namespace search
}  // namespace api
}  // namespace extensions

