// Copyright 2022 The Chromium Authors. All rights reserved.
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
// static
bool AcceptOption::Populate(
    const base::Value& value, AcceptOption* out) {
  if (!value.is_dict()) {
    return false;
  }
  const auto* dict = static_cast<const base::DictionaryValue*>(&value);
  const base::Value* description_value = dict->FindKey("description");
  if (description_value) {
    {
      auto* temp = (*description_value).GetIfString();
      if (!temp) {
        out->description.reset();
        return false;
      }
      out->description = std::make_unique<std::string>(*temp);
    }
  }

  const base::Value* mime_types_value = dict->FindKey("mimeTypes");
  if (mime_types_value) {
    {
      if (!(*mime_types_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*mime_types_value).GetList(), &out->mime_types)) {
          return false;
        }
      }
    }
  }

  const base::Value* extensions_value = dict->FindKey("extensions");
  if (extensions_value) {
    {
      if (!(*extensions_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*extensions_value).GetList(), &out->extensions)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
std::unique_ptr<AcceptOption> AcceptOption::FromValue(const base::Value& value) {
  auto out = std::make_unique<AcceptOption>();
  bool result = Populate(value, out.get());
  if (!result)
    return nullptr;
  return out;
}

std::unique_ptr<base::DictionaryValue> AcceptOption::ToValue() const {
  auto to_value_result =
      std::make_unique<base::DictionaryValue>();

  if (this->description) {
    to_value_result->SetWithoutPathExpansion("description", std::make_unique<base::Value>(*this->description));

  }
  if (this->mime_types) {
    to_value_result->SetWithoutPathExpansion("mimeTypes", json_schema_compiler::util::CreateValueFromArray(*this->mime_types));

  }
  if (this->extensions) {
    to_value_result->SetWithoutPathExpansion("extensions", json_schema_compiler::util::CreateValueFromArray(*this->extensions));

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

ChooseEntryType ParseChooseEntryType(const std::string& enum_string) {
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
: type(CHOOSE_ENTRY_TYPE_NONE) {}

ChooseEntryOptions::~ChooseEntryOptions() = default;
ChooseEntryOptions::ChooseEntryOptions(ChooseEntryOptions&& rhs) = default;
ChooseEntryOptions& ChooseEntryOptions::operator=(ChooseEntryOptions&& rhs) = default;
// static
bool ChooseEntryOptions::Populate(
    const base::Value& value, ChooseEntryOptions* out) {
  if (!value.is_dict()) {
    return false;
  }
  const auto* dict = static_cast<const base::DictionaryValue*>(&value);
  out->type = CHOOSE_ENTRY_TYPE_NONE;
  const base::Value* type_value = dict->FindKey("type");
  if (type_value) {
    {
      const std::string* choose_entry_type_as_string = (*type_value).GetIfString();
      if (!choose_entry_type_as_string) {
        return false;
      }
      out->type = ParseChooseEntryType(*choose_entry_type_as_string);
      if (out->type == CHOOSE_ENTRY_TYPE_NONE) {
        return false;
      }
    }
    } else {
    out->type = CHOOSE_ENTRY_TYPE_NONE;
  }

  const base::Value* suggested_name_value = dict->FindKey("suggestedName");
  if (suggested_name_value) {
    {
      auto* temp = (*suggested_name_value).GetIfString();
      if (!temp) {
        out->suggested_name.reset();
        return false;
      }
      out->suggested_name = std::make_unique<std::string>(*temp);
    }
  }

  const base::Value* accepts_value = dict->FindKey("accepts");
  if (accepts_value) {
    {
      if (!(*accepts_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*accepts_value).GetList(), &out->accepts)) {
          return false;
        }
      }
    }
  }

  const base::Value* accepts_all_types_value = dict->FindKey("acceptsAllTypes");
  if (accepts_all_types_value) {
    {
      auto temp = (*accepts_all_types_value).GetIfBool();
      if (!temp.has_value()) {
        out->accepts_all_types.reset();
        return false;
      }
      out->accepts_all_types = temp.value();
    }
  }

  const base::Value* accepts_multiple_value = dict->FindKey("acceptsMultiple");
  if (accepts_multiple_value) {
    {
      auto temp = (*accepts_multiple_value).GetIfBool();
      if (!temp.has_value()) {
        out->accepts_multiple.reset();
        return false;
      }
      out->accepts_multiple = temp.value();
    }
  }

  return true;
}

// static
std::unique_ptr<ChooseEntryOptions> ChooseEntryOptions::FromValue(const base::Value& value) {
  auto out = std::make_unique<ChooseEntryOptions>();
  bool result = Populate(value, out.get());
  if (!result)
    return nullptr;
  return out;
}

std::unique_ptr<base::DictionaryValue> ChooseEntryOptions::ToValue() const {
  auto to_value_result =
      std::make_unique<base::DictionaryValue>();

  if (this->type != CHOOSE_ENTRY_TYPE_NONE) {
    to_value_result->SetWithoutPathExpansion("type", std::make_unique<base::Value>(file_system::ToString(this->type)));

  }
  if (this->suggested_name) {
    to_value_result->SetWithoutPathExpansion("suggestedName", std::make_unique<base::Value>(*this->suggested_name));

  }
  if (this->accepts) {
    to_value_result->SetWithoutPathExpansion("accepts", json_schema_compiler::util::CreateValueFromArray(*this->accepts));

  }
  if (this->accepts_all_types) {
    to_value_result->SetWithoutPathExpansion("acceptsAllTypes", std::make_unique<base::Value>(*this->accepts_all_types));

  }
  if (this->accepts_multiple) {
    to_value_result->SetWithoutPathExpansion("acceptsMultiple", std::make_unique<base::Value>(*this->accepts_multiple));

  }

  return to_value_result;
}


RequestFileSystemOptions::RequestFileSystemOptions()
 {}

RequestFileSystemOptions::~RequestFileSystemOptions() = default;
RequestFileSystemOptions::RequestFileSystemOptions(RequestFileSystemOptions&& rhs) = default;
RequestFileSystemOptions& RequestFileSystemOptions::operator=(RequestFileSystemOptions&& rhs) = default;
// static
bool RequestFileSystemOptions::Populate(
    const base::Value& value, RequestFileSystemOptions* out) {
  if (!value.is_dict()) {
    return false;
  }
  const auto* dict = static_cast<const base::DictionaryValue*>(&value);
  const base::Value* volume_id_value = dict->FindKey("volumeId");
  if (!volume_id_value) {
    return false;
  }
  {
    auto* temp = (*volume_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out->volume_id = *temp;
  }

  const base::Value* writable_value = dict->FindKey("writable");
  if (writable_value) {
    {
      auto temp = (*writable_value).GetIfBool();
      if (!temp.has_value()) {
        out->writable.reset();
        return false;
      }
      out->writable = temp.value();
    }
  }

  return true;
}

// static
std::unique_ptr<RequestFileSystemOptions> RequestFileSystemOptions::FromValue(const base::Value& value) {
  auto out = std::make_unique<RequestFileSystemOptions>();
  bool result = Populate(value, out.get());
  if (!result)
    return nullptr;
  return out;
}

std::unique_ptr<base::DictionaryValue> RequestFileSystemOptions::ToValue() const {
  auto to_value_result =
      std::make_unique<base::DictionaryValue>();

  to_value_result->SetWithoutPathExpansion("volumeId", std::make_unique<base::Value>(this->volume_id));

  if (this->writable) {
    to_value_result->SetWithoutPathExpansion("writable", std::make_unique<base::Value>(*this->writable));

  }

  return to_value_result;
}


Volume::Volume()
: writable(false) {}

Volume::~Volume() = default;
Volume::Volume(Volume&& rhs) = default;
Volume& Volume::operator=(Volume&& rhs) = default;
// static
bool Volume::Populate(
    const base::Value& value, Volume* out) {
  if (!value.is_dict()) {
    return false;
  }
  const auto* dict = static_cast<const base::DictionaryValue*>(&value);
  const base::Value* volume_id_value = dict->FindKey("volumeId");
  if (!volume_id_value) {
    return false;
  }
  {
    auto* temp = (*volume_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out->volume_id = *temp;
  }

  const base::Value* writable_value = dict->FindKey("writable");
  if (!writable_value) {
    return false;
  }
  {
    auto temp = (*writable_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out->writable = temp.value();
  }

  return true;
}

// static
std::unique_ptr<Volume> Volume::FromValue(const base::Value& value) {
  auto out = std::make_unique<Volume>();
  bool result = Populate(value, out.get());
  if (!result)
    return nullptr;
  return out;
}

std::unique_ptr<base::DictionaryValue> Volume::ToValue() const {
  auto to_value_result =
      std::make_unique<base::DictionaryValue>();

  to_value_result->SetWithoutPathExpansion("volumeId", std::make_unique<base::Value>(this->volume_id));

  to_value_result->SetWithoutPathExpansion("writable", std::make_unique<base::Value>(this->writable));


  return to_value_result;
}


VolumeListChangedEvent::VolumeListChangedEvent()
 {}

VolumeListChangedEvent::~VolumeListChangedEvent() = default;
VolumeListChangedEvent::VolumeListChangedEvent(VolumeListChangedEvent&& rhs) = default;
VolumeListChangedEvent& VolumeListChangedEvent::operator=(VolumeListChangedEvent&& rhs) = default;
// static
bool VolumeListChangedEvent::Populate(
    const base::Value& value, VolumeListChangedEvent* out) {
  if (!value.is_dict()) {
    return false;
  }
  const auto* dict = static_cast<const base::DictionaryValue*>(&value);
  const base::Value* volumes_value = dict->FindKey("volumes");
  if (!volumes_value) {
    return false;
  }
  {
    if (!(*volumes_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*volumes_value).GetList(), &out->volumes)) {
        return false;
      }
    }
  }

  return true;
}

// static
std::unique_ptr<VolumeListChangedEvent> VolumeListChangedEvent::FromValue(const base::Value& value) {
  auto out = std::make_unique<VolumeListChangedEvent>();
  bool result = Populate(value, out.get());
  if (!result)
    return nullptr;
  return out;
}

std::unique_ptr<base::DictionaryValue> VolumeListChangedEvent::ToValue() const {
  auto to_value_result =
      std::make_unique<base::DictionaryValue>();

  to_value_result->SetWithoutPathExpansion("volumes", json_schema_compiler::util::CreateValueFromArray(this->volumes));


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
// static
bool Params::Entry::Populate(
    const base::Value& value, Entry* out) {
  if (!value.is_dict()) {
    return false;
  }
  const auto* dict = static_cast<const base::DictionaryValue*>(&value);
  out->additional_properties.MergeDictionary(dict);
  return true;
}


Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& entry_value = args[0];
    {
      if (!entry_value.is_dict()) {
        return std::unique_ptr<Params>();
      }
      if (!Entry::Populate(entry_value, &params->entry)) {
        return std::unique_ptr<Params>();
      }
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


base::Value::List Results::Create(const std::string& display_path) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value::FromUniquePtrValue(std::make_unique<base::Value>(display_path)));

  return create_results;
}
}  // namespace GetDisplayPath

namespace GetWritableEntry {

Params::Entry::Entry()
 {}

Params::Entry::~Entry() = default;
Params::Entry::Entry(Entry&& rhs) = default;
Params::Entry& Params::Entry::operator=(Entry&& rhs) = default;
// static
bool Params::Entry::Populate(
    const base::Value& value, Entry* out) {
  if (!value.is_dict()) {
    return false;
  }
  const auto* dict = static_cast<const base::DictionaryValue*>(&value);
  out->additional_properties.MergeDictionary(dict);
  return true;
}


Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& entry_value = args[0];
    {
      if (!entry_value.is_dict()) {
        return std::unique_ptr<Params>();
      }
      if (!Entry::Populate(entry_value, &params->entry)) {
        return std::unique_ptr<Params>();
      }
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


Results::Entry::Entry()
 {}

Results::Entry::~Entry() = default;
Results::Entry::Entry(Entry&& rhs) = default;
Results::Entry& Results::Entry::operator=(Entry&& rhs) = default;
std::unique_ptr<base::DictionaryValue> Results::Entry::ToValue() const {
  auto to_value_result =
      std::make_unique<base::DictionaryValue>();

  to_value_result->MergeDictionary(&additional_properties);

  return to_value_result;
}


base::Value::List Results::Create(const Entry& entry) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value::FromUniquePtrValue((entry).ToValue()));

  return create_results;
}
}  // namespace GetWritableEntry

namespace IsWritableEntry {

Params::Entry::Entry()
 {}

Params::Entry::~Entry() = default;
Params::Entry::Entry(Entry&& rhs) = default;
Params::Entry& Params::Entry::operator=(Entry&& rhs) = default;
// static
bool Params::Entry::Populate(
    const base::Value& value, Entry* out) {
  if (!value.is_dict()) {
    return false;
  }
  const auto* dict = static_cast<const base::DictionaryValue*>(&value);
  out->additional_properties.MergeDictionary(dict);
  return true;
}


Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& entry_value = args[0];
    {
      if (!entry_value.is_dict()) {
        return std::unique_ptr<Params>();
      }
      if (!Entry::Populate(entry_value, &params->entry)) {
        return std::unique_ptr<Params>();
      }
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


base::Value::List Results::Create(bool is_writable) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value::FromUniquePtrValue(std::make_unique<base::Value>(is_writable)));

  return create_results;
}
}  // namespace IsWritableEntry

namespace ChooseEntry {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return std::unique_ptr<Params>();
      }
      else {
        auto temp = std::make_unique<ChooseEntryOptions>();
        if (!ChooseEntryOptions::Populate(options_value, temp.get())) {
          return std::unique_ptr<Params>();
        }
        else
          params->options = std::move(temp);
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
std::unique_ptr<base::DictionaryValue> Results::Entry::ToValue() const {
  auto to_value_result =
      std::make_unique<base::DictionaryValue>();

  to_value_result->MergeDictionary(&additional_properties);

  return to_value_result;
}


Results::FileEntriesType::FileEntriesType()
 {}

Results::FileEntriesType::~FileEntriesType() = default;
Results::FileEntriesType::FileEntriesType(FileEntriesType&& rhs) = default;
Results::FileEntriesType& Results::FileEntriesType::operator=(FileEntriesType&& rhs) = default;
std::unique_ptr<base::DictionaryValue> Results::FileEntriesType::ToValue() const {
  auto to_value_result =
      std::make_unique<base::DictionaryValue>();

  to_value_result->MergeDictionary(&additional_properties);

  return to_value_result;
}



base::Value::List Results::Create(const Entry& entry, const std::vector<FileEntriesType>& file_entries) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(base::Value::FromUniquePtrValue((entry).ToValue()));

  create_results.Append(base::Value::FromUniquePtrValue(json_schema_compiler::util::CreateValueFromArray(file_entries)));

  return create_results;
}
}  // namespace ChooseEntry

namespace RestoreEntry {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return std::unique_ptr<Params>();
      }
      params->id = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


Results::Entry::Entry()
 {}

Results::Entry::~Entry() = default;
Results::Entry::Entry(Entry&& rhs) = default;
Results::Entry& Results::Entry::operator=(Entry&& rhs) = default;
std::unique_ptr<base::DictionaryValue> Results::Entry::ToValue() const {
  auto to_value_result =
      std::make_unique<base::DictionaryValue>();

  to_value_result->MergeDictionary(&additional_properties);

  return to_value_result;
}


base::Value::List Results::Create(const Entry& entry) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value::FromUniquePtrValue((entry).ToValue()));

  return create_results;
}
}  // namespace RestoreEntry

namespace IsRestorable {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return std::unique_ptr<Params>();
      }
      params->id = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


base::Value::List Results::Create(bool is_restorable) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value::FromUniquePtrValue(std::make_unique<base::Value>(is_restorable)));

  return create_results;
}
}  // namespace IsRestorable

namespace RetainEntry {

Params::Entry::Entry()
 {}

Params::Entry::~Entry() = default;
Params::Entry::Entry(Entry&& rhs) = default;
Params::Entry& Params::Entry::operator=(Entry&& rhs) = default;
// static
bool Params::Entry::Populate(
    const base::Value& value, Entry* out) {
  if (!value.is_dict()) {
    return false;
  }
  const auto* dict = static_cast<const base::DictionaryValue*>(&value);
  out->additional_properties.MergeDictionary(dict);
  return true;
}


Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& entry_value = args[0];
    {
      if (!entry_value.is_dict()) {
        return std::unique_ptr<Params>();
      }
      if (!Entry::Populate(entry_value, &params->entry)) {
        return std::unique_ptr<Params>();
      }
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


}  // namespace RetainEntry

namespace RequestFileSystem {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return std::unique_ptr<Params>();
      }
      if (!RequestFileSystemOptions::Populate(options_value, &params->options)) {
        return std::unique_ptr<Params>();
      }
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


Results::FileSystem::FileSystem()
 {}

Results::FileSystem::~FileSystem() = default;
Results::FileSystem::FileSystem(FileSystem&& rhs) = default;
Results::FileSystem& Results::FileSystem::operator=(FileSystem&& rhs) = default;
std::unique_ptr<base::DictionaryValue> Results::FileSystem::ToValue() const {
  auto to_value_result =
      std::make_unique<base::DictionaryValue>();

  to_value_result->MergeDictionary(&additional_properties);

  return to_value_result;
}


base::Value::List Results::Create(const FileSystem& file_system) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value::FromUniquePtrValue((file_system).ToValue()));

  return create_results;
}
}  // namespace RequestFileSystem

namespace GetVolumeList {

base::Value::List Results::Create(const std::vector<Volume>& volumes) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value::FromUniquePtrValue(json_schema_compiler::util::CreateValueFromArray(volumes)));

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
  create_results.Append(base::Value::FromUniquePtrValue((event).ToValue()));

  return create_results;
}

}  // namespace OnVolumeListChanged

}  // namespace file_system
}  // namespace api
}  // namespace extensions

