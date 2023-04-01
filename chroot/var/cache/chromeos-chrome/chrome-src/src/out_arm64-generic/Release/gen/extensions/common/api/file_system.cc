// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/file_system.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/file_system.h"

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
namespace file_system {
//
// Types
//

AcceptOption::AcceptOption()
 {}

AcceptOption::~AcceptOption() = default;
AcceptOption::AcceptOption(AcceptOption&& rhs) = default;
AcceptOption& AcceptOption::operator=(AcceptOption&& rhs) = default;
AcceptOption AcceptOption::Clone() const {
  AcceptOption out;
  out.description = description;
  out.mime_types = mime_types;
  out.extensions = extensions;
  return out;
}

// static
bool AcceptOption::Populate(
    const base::Value::Dict& dict, AcceptOption& out) {
  const base::Value* description_value = dict.Find("description");
  if (description_value) {
    {
      auto* temp = (*description_value).GetIfString();
      if (!temp) {
        out.description = absl::nullopt;
        return false;
      }
      out.description = *temp;
    }
  }

  const base::Value* mime_types_value = dict.Find("mimeTypes");
  if (mime_types_value) {
    {
      if (!(*mime_types_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*mime_types_value).GetList(), out.mime_types)) {
          return false;
        }
      }
    }
  }

  const base::Value* extensions_value = dict.Find("extensions");
  if (extensions_value) {
    {
      if (!(*extensions_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*extensions_value).GetList(), out.extensions)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool AcceptOption::Populate(
    const base::Value& value, AcceptOption& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<AcceptOption> AcceptOption::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<AcceptOption>();
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
absl::optional<AcceptOption> AcceptOption::FromValue(const base::Value::Dict& value) {
  AcceptOption out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<AcceptOption> AcceptOption::FromValue(const base::Value& value) {
  AcceptOption out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict AcceptOption::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->description) {
    to_value_result.Set("description", *this->description);

  }
  if (this->mime_types) {
    to_value_result.Set("mimeTypes", json_schema_compiler::util::CreateValueFromArray(*this->mime_types));

  }
  if (this->extensions) {
    to_value_result.Set("extensions", json_schema_compiler::util::CreateValueFromArray(*this->extensions));

  }

  return to_value_result;
}


const char* ToString(ChooseEntryType enum_param) {
  switch (enum_param) {
    case CHOOSE_ENTRY_TYPE_OPENFILE:
      return "openFile";
    case CHOOSE_ENTRY_TYPE_OPENWRITABLEFILE:
      return "openWritableFile";
    case CHOOSE_ENTRY_TYPE_SAVEFILE:
      return "saveFile";
    case CHOOSE_ENTRY_TYPE_OPENDIRECTORY:
      return "openDirectory";
    case CHOOSE_ENTRY_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

ChooseEntryType ParseChooseEntryType(base::StringPiece enum_string) {
  if (enum_string == "openFile")
    return CHOOSE_ENTRY_TYPE_OPENFILE;
  if (enum_string == "openWritableFile")
    return CHOOSE_ENTRY_TYPE_OPENWRITABLEFILE;
  if (enum_string == "saveFile")
    return CHOOSE_ENTRY_TYPE_SAVEFILE;
  if (enum_string == "openDirectory")
    return CHOOSE_ENTRY_TYPE_OPENDIRECTORY;
  return CHOOSE_ENTRY_TYPE_NONE;
}


ChooseEntryOptions::ChooseEntryOptions()
: type() {}

ChooseEntryOptions::~ChooseEntryOptions() = default;
ChooseEntryOptions::ChooseEntryOptions(ChooseEntryOptions&& rhs) = default;
ChooseEntryOptions& ChooseEntryOptions::operator=(ChooseEntryOptions&& rhs) = default;
ChooseEntryOptions ChooseEntryOptions::Clone() const {
  ChooseEntryOptions out;
  out.type = type;
  out.suggested_name = suggested_name;
  if (accepts) {
    out.accepts.emplace();
    out.accepts->reserve(accepts->size());
    for (const auto& element : *accepts) {
      out.accepts->push_back(element.Clone());
    }
  }
  out.accepts_all_types = accepts_all_types;
  out.accepts_multiple = accepts_multiple;
  return out;
}

// static
bool ChooseEntryOptions::Populate(
    const base::Value::Dict& dict, ChooseEntryOptions& out) {
  out.type = ChooseEntryType();
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    {
      const std::string* choose_entry_type_as_string = (*type_value).GetIfString();
      if (!choose_entry_type_as_string) {
        return false;
      }
      out.type = ParseChooseEntryType(*choose_entry_type_as_string);
      if (out.type == ChooseEntryType()) {
        return false;
      }
    }
    } else {
    out.type = ChooseEntryType();
  }

  const base::Value* suggested_name_value = dict.Find("suggestedName");
  if (suggested_name_value) {
    {
      auto* temp = (*suggested_name_value).GetIfString();
      if (!temp) {
        out.suggested_name = absl::nullopt;
        return false;
      }
      out.suggested_name = *temp;
    }
  }

  const base::Value* accepts_value = dict.Find("accepts");
  if (accepts_value) {
    {
      if (!(*accepts_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*accepts_value).GetList(), out.accepts)) {
          return false;
        }
      }
    }
  }

  const base::Value* accepts_all_types_value = dict.Find("acceptsAllTypes");
  if (accepts_all_types_value) {
    {
      auto temp = (*accepts_all_types_value).GetIfBool();
      if (!temp.has_value()) {
        out.accepts_all_types = absl::nullopt;
        return false;
      }
      out.accepts_all_types = *temp;
    }
  }

  const base::Value* accepts_multiple_value = dict.Find("acceptsMultiple");
  if (accepts_multiple_value) {
    {
      auto temp = (*accepts_multiple_value).GetIfBool();
      if (!temp.has_value()) {
        out.accepts_multiple = absl::nullopt;
        return false;
      }
      out.accepts_multiple = *temp;
    }
  }

  return true;
}

// static
bool ChooseEntryOptions::Populate(
    const base::Value& value, ChooseEntryOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ChooseEntryOptions> ChooseEntryOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ChooseEntryOptions>();
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
absl::optional<ChooseEntryOptions> ChooseEntryOptions::FromValue(const base::Value::Dict& value) {
  ChooseEntryOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ChooseEntryOptions> ChooseEntryOptions::FromValue(const base::Value& value) {
  ChooseEntryOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ChooseEntryOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->type != ChooseEntryType()) {
    to_value_result.Set("type", file_system::ToString(this->type));

  }
  if (this->suggested_name) {
    to_value_result.Set("suggestedName", *this->suggested_name);

  }
  if (this->accepts) {
    to_value_result.Set("accepts", json_schema_compiler::util::CreateValueFromArray(*this->accepts));

  }
  if (this->accepts_all_types) {
    to_value_result.Set("acceptsAllTypes", *this->accepts_all_types);

  }
  if (this->accepts_multiple) {
    to_value_result.Set("acceptsMultiple", *this->accepts_multiple);

  }

  return to_value_result;
}


RequestFileSystemOptions::RequestFileSystemOptions()
 {}

RequestFileSystemOptions::~RequestFileSystemOptions() = default;
RequestFileSystemOptions::RequestFileSystemOptions(RequestFileSystemOptions&& rhs) = default;
RequestFileSystemOptions& RequestFileSystemOptions::operator=(RequestFileSystemOptions&& rhs) = default;
RequestFileSystemOptions RequestFileSystemOptions::Clone() const {
  RequestFileSystemOptions out;
  out.volume_id = volume_id;
  out.writable = writable;
  return out;
}

// static
bool RequestFileSystemOptions::Populate(
    const base::Value::Dict& dict, RequestFileSystemOptions& out) {
  const base::Value* volume_id_value = dict.Find("volumeId");
  if (!volume_id_value) {
    return false;
  }
  {
    auto* temp = (*volume_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.volume_id = *temp;
  }

  const base::Value* writable_value = dict.Find("writable");
  if (writable_value) {
    {
      auto temp = (*writable_value).GetIfBool();
      if (!temp.has_value()) {
        out.writable = absl::nullopt;
        return false;
      }
      out.writable = *temp;
    }
  }

  return true;
}

// static
bool RequestFileSystemOptions::Populate(
    const base::Value& value, RequestFileSystemOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<RequestFileSystemOptions> RequestFileSystemOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<RequestFileSystemOptions>();
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
absl::optional<RequestFileSystemOptions> RequestFileSystemOptions::FromValue(const base::Value::Dict& value) {
  RequestFileSystemOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<RequestFileSystemOptions> RequestFileSystemOptions::FromValue(const base::Value& value) {
  RequestFileSystemOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict RequestFileSystemOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("volumeId", this->volume_id);

  if (this->writable) {
    to_value_result.Set("writable", *this->writable);

  }

  return to_value_result;
}


Volume::Volume()
: writable(false) {}

Volume::~Volume() = default;
Volume::Volume(Volume&& rhs) = default;
Volume& Volume::operator=(Volume&& rhs) = default;
Volume Volume::Clone() const {
  Volume out;
  out.volume_id = volume_id;
  out.writable = writable;
  return out;
}

// static
bool Volume::Populate(
    const base::Value::Dict& dict, Volume& out) {
  const base::Value* volume_id_value = dict.Find("volumeId");
  if (!volume_id_value) {
    return false;
  }
  {
    auto* temp = (*volume_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.volume_id = *temp;
  }

  const base::Value* writable_value = dict.Find("writable");
  if (!writable_value) {
    return false;
  }
  {
    auto temp = (*writable_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.writable = *temp;
  }

  return true;
}

// static
bool Volume::Populate(
    const base::Value& value, Volume& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<Volume> Volume::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Volume>();
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
absl::optional<Volume> Volume::FromValue(const base::Value::Dict& value) {
  Volume out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Volume> Volume::FromValue(const base::Value& value) {
  Volume out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict Volume::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("volumeId", this->volume_id);

  to_value_result.Set("writable", this->writable);


  return to_value_result;
}


VolumeListChangedEvent::VolumeListChangedEvent()
 {}

VolumeListChangedEvent::~VolumeListChangedEvent() = default;
VolumeListChangedEvent::VolumeListChangedEvent(VolumeListChangedEvent&& rhs) = default;
VolumeListChangedEvent& VolumeListChangedEvent::operator=(VolumeListChangedEvent&& rhs) = default;
VolumeListChangedEvent VolumeListChangedEvent::Clone() const {
  VolumeListChangedEvent out;
  out.volumes.reserve(volumes.size());
  for (const auto& element : volumes) {
    out.volumes.push_back(element.Clone());
  }
  return out;
}

// static
bool VolumeListChangedEvent::Populate(
    const base::Value::Dict& dict, VolumeListChangedEvent& out) {
  const base::Value* volumes_value = dict.Find("volumes");
  if (!volumes_value) {
    return false;
  }
  {
    if (!(*volumes_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*volumes_value).GetList(), out.volumes)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool VolumeListChangedEvent::Populate(
    const base::Value& value, VolumeListChangedEvent& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<VolumeListChangedEvent> VolumeListChangedEvent::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<VolumeListChangedEvent>();
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
absl::optional<VolumeListChangedEvent> VolumeListChangedEvent::FromValue(const base::Value::Dict& value) {
  VolumeListChangedEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<VolumeListChangedEvent> VolumeListChangedEvent::FromValue(const base::Value& value) {
  VolumeListChangedEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict VolumeListChangedEvent::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("volumes", json_schema_compiler::util::CreateValueFromArray(this->volumes));


  return to_value_result;
}



//
// Functions
//

namespace GetDisplayPath {

Params::Entry::Entry()
 {}

Params::Entry::~Entry() = default;
Params::Entry::Entry(Entry&& rhs) = default;
Params::Entry& Params::Entry::operator=(Entry&& rhs) = default;
Params::Entry Params::Entry::Clone() const {
  Entry out;
  return out;
}

// static
bool Params::Entry::Populate(
    const base::Value::Dict& dict, Entry& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool Params::Entry::Populate(
    const base::Value& value, Entry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Entry> Params::Entry::FromValue(const base::Value::Dict& value) {
  Entry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Entry> Params::Entry::FromValue(const base::Value& value) {
  Entry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


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
      if (!Entry::Populate(entry_value.GetDict(), params.entry)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& display_path) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(display_path);

  return create_results;
}
}  // namespace GetDisplayPath

namespace GetWritableEntry {

Params::Entry::Entry()
 {}

Params::Entry::~Entry() = default;
Params::Entry::Entry(Entry&& rhs) = default;
Params::Entry& Params::Entry::operator=(Entry&& rhs) = default;
Params::Entry Params::Entry::Clone() const {
  Entry out;
  return out;
}

// static
bool Params::Entry::Populate(
    const base::Value::Dict& dict, Entry& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool Params::Entry::Populate(
    const base::Value& value, Entry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Entry> Params::Entry::FromValue(const base::Value::Dict& value) {
  Entry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Entry> Params::Entry::FromValue(const base::Value& value) {
  Entry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


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
      if (!Entry::Populate(entry_value.GetDict(), params.entry)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


Results::Entry::Entry()
 {}

Results::Entry::~Entry() = default;
Results::Entry::Entry(Entry&& rhs) = default;
Results::Entry& Results::Entry::operator=(Entry&& rhs) = default;
base::Value::Dict Results::Entry::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::Value::List Results::Create(const Entry& entry) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((entry).ToValue());

  return create_results;
}
}  // namespace GetWritableEntry

namespace IsWritableEntry {

Params::Entry::Entry()
 {}

Params::Entry::~Entry() = default;
Params::Entry::Entry(Entry&& rhs) = default;
Params::Entry& Params::Entry::operator=(Entry&& rhs) = default;
Params::Entry Params::Entry::Clone() const {
  Entry out;
  return out;
}

// static
bool Params::Entry::Populate(
    const base::Value::Dict& dict, Entry& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool Params::Entry::Populate(
    const base::Value& value, Entry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Entry> Params::Entry::FromValue(const base::Value::Dict& value) {
  Entry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Entry> Params::Entry::FromValue(const base::Value& value) {
  Entry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


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
      if (!Entry::Populate(entry_value.GetDict(), params.entry)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool is_writable) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(is_writable);

  return create_results;
}
}  // namespace IsWritableEntry

namespace ChooseEntry {

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
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        ChooseEntryOptions temp;
        if (!ChooseEntryOptions::Populate(options_value.GetDict(), temp))
          return absl::nullopt;
        params.options = std::move(temp);
      }
    }
  }

  return params;
}


Results::Entry::Entry()
 {}

Results::Entry::~Entry() = default;
Results::Entry::Entry(Entry&& rhs) = default;
Results::Entry& Results::Entry::operator=(Entry&& rhs) = default;
base::Value::Dict Results::Entry::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


Results::FileEntriesType::FileEntriesType()
 {}

Results::FileEntriesType::~FileEntriesType() = default;
Results::FileEntriesType::FileEntriesType(FileEntriesType&& rhs) = default;
Results::FileEntriesType& Results::FileEntriesType::operator=(FileEntriesType&& rhs) = default;
base::Value::Dict Results::FileEntriesType::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



base::Value::List Results::Create(const Entry& entry, const std::vector<FileEntriesType>& file_entries) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append((entry).ToValue());

  create_results.Append(json_schema_compiler::util::CreateValueFromArray(file_entries));

  return create_results;
}
}  // namespace ChooseEntry

namespace RestoreEntry {

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
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


Results::Entry::Entry()
 {}

Results::Entry::~Entry() = default;
Results::Entry::Entry(Entry&& rhs) = default;
Results::Entry& Results::Entry::operator=(Entry&& rhs) = default;
base::Value::Dict Results::Entry::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::Value::List Results::Create(const Entry& entry) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((entry).ToValue());

  return create_results;
}
}  // namespace RestoreEntry

namespace IsRestorable {

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
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool is_restorable) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(is_restorable);

  return create_results;
}
}  // namespace IsRestorable

namespace RetainEntry {

Params::Entry::Entry()
 {}

Params::Entry::~Entry() = default;
Params::Entry::Entry(Entry&& rhs) = default;
Params::Entry& Params::Entry::operator=(Entry&& rhs) = default;
Params::Entry Params::Entry::Clone() const {
  Entry out;
  return out;
}

// static
bool Params::Entry::Populate(
    const base::Value::Dict& dict, Entry& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool Params::Entry::Populate(
    const base::Value& value, Entry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Entry> Params::Entry::FromValue(const base::Value::Dict& value) {
  Entry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Entry> Params::Entry::FromValue(const base::Value& value) {
  Entry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


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
      if (!Entry::Populate(entry_value.GetDict(), params.entry)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace RetainEntry

namespace RequestFileSystem {

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
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return absl::nullopt;
      }
      if (!RequestFileSystemOptions::Populate(options_value.GetDict(), params.options)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


Results::FileSystem::FileSystem()
 {}

Results::FileSystem::~FileSystem() = default;
Results::FileSystem::FileSystem(FileSystem&& rhs) = default;
Results::FileSystem& Results::FileSystem::operator=(FileSystem&& rhs) = default;
base::Value::Dict Results::FileSystem::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::Value::List Results::Create(const FileSystem& file_system) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((file_system).ToValue());

  return create_results;
}
}  // namespace RequestFileSystem

namespace GetVolumeList {

base::Value::List Results::Create(const std::vector<Volume>& volumes) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(volumes));

  return create_results;
}
}  // namespace GetVolumeList

//
// Events
//

namespace OnVolumeListChanged {

const char kEventName[] = "fileSystem.onVolumeListChanged";

base::Value::List Create(const VolumeListChangedEvent& event) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event).ToValue());

  return create_results;
}

}  // namespace OnVolumeListChanged

}  // namespace file_system
}  // namespace api
}  // namespace extensions

