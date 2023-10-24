// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/reading_list.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/reading_list.h"

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
namespace reading_list {
//
// Types
//

ReadingListEntry::ReadingListEntry()
: has_been_read(false),
last_update_time(0.0),
creation_time(0.0) {}

ReadingListEntry::~ReadingListEntry() = default;
ReadingListEntry::ReadingListEntry(ReadingListEntry&& rhs) = default;
ReadingListEntry& ReadingListEntry::operator=(ReadingListEntry&& rhs) = default;
ReadingListEntry ReadingListEntry::Clone() const {
  ReadingListEntry out;
  out.url = url;
  out.title = title;
  out.has_been_read = has_been_read;
  out.last_update_time = last_update_time;
  out.creation_time = creation_time;
  return out;
}

// static
bool ReadingListEntry::Populate(
    const base::Value::Dict& dict, ReadingListEntry& out) {
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

  const base::Value* has_been_read_value = dict.Find("hasBeenRead");
  if (!has_been_read_value) {
    return false;
  }
  {
    auto temp = (*has_been_read_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.has_been_read = *temp;
  }

  const base::Value* last_update_time_value = dict.Find("lastUpdateTime");
  if (!last_update_time_value) {
    return false;
  }
  {
    auto temp = (*last_update_time_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.last_update_time = *temp;
  }

  const base::Value* creation_time_value = dict.Find("creationTime");
  if (!creation_time_value) {
    return false;
  }
  {
    auto temp = (*creation_time_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.creation_time = *temp;
  }

  return true;
}

// static
bool ReadingListEntry::Populate(
    const base::Value& value, ReadingListEntry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ReadingListEntry> ReadingListEntry::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ReadingListEntry>();
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
absl::optional<ReadingListEntry> ReadingListEntry::FromValue(const base::Value::Dict& value) {
  ReadingListEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ReadingListEntry> ReadingListEntry::FromValue(const base::Value& value) {
  ReadingListEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ReadingListEntry::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("url", this->url);

  to_value_result.Set("title", this->title);

  to_value_result.Set("hasBeenRead", this->has_been_read);

  to_value_result.Set("lastUpdateTime", this->last_update_time);

  to_value_result.Set("creationTime", this->creation_time);


  return to_value_result;
}


AddEntryOptions::AddEntryOptions()
: has_been_read(false) {}

AddEntryOptions::~AddEntryOptions() = default;
AddEntryOptions::AddEntryOptions(AddEntryOptions&& rhs) = default;
AddEntryOptions& AddEntryOptions::operator=(AddEntryOptions&& rhs) = default;
AddEntryOptions AddEntryOptions::Clone() const {
  AddEntryOptions out;
  out.url = url;
  out.title = title;
  out.has_been_read = has_been_read;
  return out;
}

// static
bool AddEntryOptions::Populate(
    const base::Value::Dict& dict, AddEntryOptions& out) {
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

  const base::Value* has_been_read_value = dict.Find("hasBeenRead");
  if (!has_been_read_value) {
    return false;
  }
  {
    auto temp = (*has_been_read_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.has_been_read = *temp;
  }

  return true;
}

// static
bool AddEntryOptions::Populate(
    const base::Value& value, AddEntryOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<AddEntryOptions> AddEntryOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<AddEntryOptions>();
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
absl::optional<AddEntryOptions> AddEntryOptions::FromValue(const base::Value::Dict& value) {
  AddEntryOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<AddEntryOptions> AddEntryOptions::FromValue(const base::Value& value) {
  AddEntryOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict AddEntryOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("url", this->url);

  to_value_result.Set("title", this->title);

  to_value_result.Set("hasBeenRead", this->has_been_read);


  return to_value_result;
}


RemoveOptions::RemoveOptions()
 {}

RemoveOptions::~RemoveOptions() = default;
RemoveOptions::RemoveOptions(RemoveOptions&& rhs) = default;
RemoveOptions& RemoveOptions::operator=(RemoveOptions&& rhs) = default;
RemoveOptions RemoveOptions::Clone() const {
  RemoveOptions out;
  out.url = url;
  return out;
}

// static
bool RemoveOptions::Populate(
    const base::Value::Dict& dict, RemoveOptions& out) {
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
bool RemoveOptions::Populate(
    const base::Value& value, RemoveOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<RemoveOptions> RemoveOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<RemoveOptions>();
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
absl::optional<RemoveOptions> RemoveOptions::FromValue(const base::Value::Dict& value) {
  RemoveOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<RemoveOptions> RemoveOptions::FromValue(const base::Value& value) {
  RemoveOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict RemoveOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("url", this->url);


  return to_value_result;
}


UpdateEntryOptions::UpdateEntryOptions()
 {}

UpdateEntryOptions::~UpdateEntryOptions() = default;
UpdateEntryOptions::UpdateEntryOptions(UpdateEntryOptions&& rhs) = default;
UpdateEntryOptions& UpdateEntryOptions::operator=(UpdateEntryOptions&& rhs) = default;
UpdateEntryOptions UpdateEntryOptions::Clone() const {
  UpdateEntryOptions out;
  out.url = url;
  out.title = title;
  out.has_been_read = has_been_read;
  return out;
}

// static
bool UpdateEntryOptions::Populate(
    const base::Value::Dict& dict, UpdateEntryOptions& out) {
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

  const base::Value* title_value = dict.Find("title");
  if (title_value) {
    {
      auto* temp = (*title_value).GetIfString();
      if (!temp) {
        out.title = absl::nullopt;
        return false;
      }
      out.title = *temp;
    }
  }

  const base::Value* has_been_read_value = dict.Find("hasBeenRead");
  if (has_been_read_value) {
    {
      auto temp = (*has_been_read_value).GetIfBool();
      if (!temp.has_value()) {
        out.has_been_read = absl::nullopt;
        return false;
      }
      out.has_been_read = *temp;
    }
  }

  return true;
}

// static
bool UpdateEntryOptions::Populate(
    const base::Value& value, UpdateEntryOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<UpdateEntryOptions> UpdateEntryOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<UpdateEntryOptions>();
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
absl::optional<UpdateEntryOptions> UpdateEntryOptions::FromValue(const base::Value::Dict& value) {
  UpdateEntryOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<UpdateEntryOptions> UpdateEntryOptions::FromValue(const base::Value& value) {
  UpdateEntryOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict UpdateEntryOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("url", this->url);

  if (this->title) {
    to_value_result.Set("title", *this->title);

  }
  if (this->has_been_read) {
    to_value_result.Set("hasBeenRead", *this->has_been_read);

  }

  return to_value_result;
}


QueryInfo::QueryInfo()
 {}

QueryInfo::~QueryInfo() = default;
QueryInfo::QueryInfo(QueryInfo&& rhs) = default;
QueryInfo& QueryInfo::operator=(QueryInfo&& rhs) = default;
QueryInfo QueryInfo::Clone() const {
  QueryInfo out;
  out.url = url;
  out.title = title;
  out.has_been_read = has_been_read;
  return out;
}

// static
bool QueryInfo::Populate(
    const base::Value::Dict& dict, QueryInfo& out) {
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    {
      auto* temp = (*url_value).GetIfString();
      if (!temp) {
        out.url = absl::nullopt;
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
        out.title = absl::nullopt;
        return false;
      }
      out.title = *temp;
    }
  }

  const base::Value* has_been_read_value = dict.Find("hasBeenRead");
  if (has_been_read_value) {
    {
      auto temp = (*has_been_read_value).GetIfBool();
      if (!temp.has_value()) {
        out.has_been_read = absl::nullopt;
        return false;
      }
      out.has_been_read = *temp;
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

  if (this->url) {
    to_value_result.Set("url", *this->url);

  }
  if (this->title) {
    to_value_result.Set("title", *this->title);

  }
  if (this->has_been_read) {
    to_value_result.Set("hasBeenRead", *this->has_been_read);

  }

  return to_value_result;
}



//
// Functions
//

namespace AddEntry {

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
    const base::Value& entry_value = args[0];
    {
      if (!entry_value.is_dict()) {
        return absl::nullopt;
      }
      if (!AddEntryOptions::Populate(entry_value.GetDict(), params.entry)) {
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
}  // namespace AddEntry

namespace RemoveEntry {

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
    const base::Value& info_value = args[0];
    {
      if (!info_value.is_dict()) {
        return absl::nullopt;
      }
      if (!RemoveOptions::Populate(info_value.GetDict(), params.info)) {
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
}  // namespace RemoveEntry

namespace UpdateEntry {

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
    const base::Value& info_value = args[0];
    {
      if (!info_value.is_dict()) {
        return absl::nullopt;
      }
      if (!UpdateEntryOptions::Populate(info_value.GetDict(), params.info)) {
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
}  // namespace UpdateEntry

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
    const base::Value& info_value = args[0];
    {
      if (!info_value.is_dict()) {
        return absl::nullopt;
      }
      if (!QueryInfo::Populate(info_value.GetDict(), params.info)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<ReadingListEntry>& entries) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(entries));

  return create_results;
}
}  // namespace Query

//
// Events
//

namespace OnEntryAdded {

const char kEventName[] = "readingList.onEntryAdded";

base::Value::List Create(const ReadingListEntry& entry) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((entry).ToValue());

  return create_results;
}

}  // namespace OnEntryAdded

namespace OnEntryRemoved {

const char kEventName[] = "readingList.onEntryRemoved";

base::Value::List Create(const ReadingListEntry& entry) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((entry).ToValue());

  return create_results;
}

}  // namespace OnEntryRemoved

namespace OnEntryUpdated {

const char kEventName[] = "readingList.onEntryUpdated";

base::Value::List Create(const ReadingListEntry& entry) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((entry).ToValue());

  return create_results;
}

}  // namespace OnEntryUpdated

}  // namespace reading_list
}  // namespace api
}  // namespace extensions

