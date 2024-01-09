// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/image_writer_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/image_writer_private.h"

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
namespace image_writer_private {
//
// Types
//

const char* ToString(Stage enum_param) {
  switch (enum_param) {
    case Stage::kConfirmation:
      return "confirmation";
    case Stage::kDownload:
      return "download";
    case Stage::kVerifyDownload:
      return "verifyDownload";
    case Stage::kUnzip:
      return "unzip";
    case Stage::kWrite:
      return "write";
    case Stage::kVerifyWrite:
      return "verifyWrite";
    case Stage::kUnknown:
      return "unknown";
    case Stage::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

Stage ParseStage(base::StringPiece enum_string) {
  if (enum_string == "confirmation")
    return Stage::kConfirmation;
  if (enum_string == "download")
    return Stage::kDownload;
  if (enum_string == "verifyDownload")
    return Stage::kVerifyDownload;
  if (enum_string == "unzip")
    return Stage::kUnzip;
  if (enum_string == "write")
    return Stage::kWrite;
  if (enum_string == "verifyWrite")
    return Stage::kVerifyWrite;
  if (enum_string == "unknown")
    return Stage::kUnknown;
  return Stage::kNone;
}

std::u16string GetStageParseError(base::StringPiece enum_string) {
  return u"expected \"confirmation\" or \"download\" or \"verifyDownload\" or \"unzip\" or \"write\" or \"verifyWrite\" or \"unknown\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


UrlWriteOptions::UrlWriteOptions()
 {}

UrlWriteOptions::~UrlWriteOptions() = default;
UrlWriteOptions::UrlWriteOptions(UrlWriteOptions&& rhs) noexcept = default;
UrlWriteOptions& UrlWriteOptions::operator=(UrlWriteOptions&& rhs) noexcept = default;
UrlWriteOptions UrlWriteOptions::Clone() const {
  UrlWriteOptions out;
  out.image_hash = image_hash;
  out.save_as_download = save_as_download;
  return out;
}

// static
bool UrlWriteOptions::Populate(
    const base::Value::Dict& dict, UrlWriteOptions& out) {
  const base::Value* image_hash_value = dict.Find("imageHash");
  if (image_hash_value) {
    {
      auto* temp = (*image_hash_value).GetIfString();
      if (!temp) {
        out.image_hash = std::nullopt;
        return false;
      }
      out.image_hash = *temp;
    }
  }

  const base::Value* save_as_download_value = dict.Find("saveAsDownload");
  if (save_as_download_value) {
    {
      auto temp = (*save_as_download_value).GetIfBool();
      if (!temp.has_value()) {
        out.save_as_download = std::nullopt;
        return false;
      }
      out.save_as_download = *temp;
    }
  }

  return true;
}

// static
bool UrlWriteOptions::Populate(
    const base::Value& value, UrlWriteOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<UrlWriteOptions> UrlWriteOptions::FromValue(const base::Value::Dict& value) {
  UrlWriteOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<UrlWriteOptions> UrlWriteOptions::FromValue(const base::Value& value) {
  UrlWriteOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict UrlWriteOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->image_hash) {
    to_value_result.Set("imageHash", *this->image_hash);

  }
  if (this->save_as_download) {
    to_value_result.Set("saveAsDownload", *this->save_as_download);

  }

  return to_value_result;
}


ProgressInfo::ProgressInfo()
: stage(),
percent_complete(0) {}

ProgressInfo::~ProgressInfo() = default;
ProgressInfo::ProgressInfo(ProgressInfo&& rhs) noexcept = default;
ProgressInfo& ProgressInfo::operator=(ProgressInfo&& rhs) noexcept = default;
ProgressInfo ProgressInfo::Clone() const {
  ProgressInfo out;
  out.stage = stage;
  out.percent_complete = percent_complete;
  return out;
}

// static
bool ProgressInfo::Populate(
    const base::Value::Dict& dict, ProgressInfo& out) {
  const base::Value* stage_value = dict.Find("stage");
  if (!stage_value) {
    return false;
  }
  {
    const std::string* stage_as_string = (*stage_value).GetIfString();
    if (!stage_as_string) {
      return false;
    }
    out.stage = ParseStage(*stage_as_string);
    if (out.stage == Stage()) {
      return false;
    }
  }

  const base::Value* percent_complete_value = dict.Find("percentComplete");
  if (!percent_complete_value) {
    return false;
  }
  {
    auto temp = (*percent_complete_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.percent_complete = *temp;
  }

  return true;
}

// static
bool ProgressInfo::Populate(
    const base::Value& value, ProgressInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ProgressInfo> ProgressInfo::FromValue(const base::Value::Dict& value) {
  ProgressInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ProgressInfo> ProgressInfo::FromValue(const base::Value& value) {
  ProgressInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ProgressInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("stage", image_writer_private::ToString(this->stage));

  to_value_result.Set("percentComplete", this->percent_complete);


  return to_value_result;
}


RemovableStorageDevice::RemovableStorageDevice()
: capacity(0.0),
removable(false) {}

RemovableStorageDevice::~RemovableStorageDevice() = default;
RemovableStorageDevice::RemovableStorageDevice(RemovableStorageDevice&& rhs) noexcept = default;
RemovableStorageDevice& RemovableStorageDevice::operator=(RemovableStorageDevice&& rhs) noexcept = default;
RemovableStorageDevice RemovableStorageDevice::Clone() const {
  RemovableStorageDevice out;
  out.storage_unit_id = storage_unit_id;
  out.capacity = capacity;
  out.vendor = vendor;
  out.model = model;
  out.removable = removable;
  return out;
}

// static
bool RemovableStorageDevice::Populate(
    const base::Value::Dict& dict, RemovableStorageDevice& out) {
  const base::Value* storage_unit_id_value = dict.Find("storageUnitId");
  if (!storage_unit_id_value) {
    return false;
  }
  {
    auto* temp = (*storage_unit_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.storage_unit_id = *temp;
  }

  const base::Value* capacity_value = dict.Find("capacity");
  if (!capacity_value) {
    return false;
  }
  {
    auto temp = (*capacity_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.capacity = *temp;
  }

  const base::Value* vendor_value = dict.Find("vendor");
  if (!vendor_value) {
    return false;
  }
  {
    auto* temp = (*vendor_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.vendor = *temp;
  }

  const base::Value* model_value = dict.Find("model");
  if (!model_value) {
    return false;
  }
  {
    auto* temp = (*model_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.model = *temp;
  }

  const base::Value* removable_value = dict.Find("removable");
  if (!removable_value) {
    return false;
  }
  {
    auto temp = (*removable_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.removable = *temp;
  }

  return true;
}

// static
bool RemovableStorageDevice::Populate(
    const base::Value& value, RemovableStorageDevice& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RemovableStorageDevice> RemovableStorageDevice::FromValue(const base::Value::Dict& value) {
  RemovableStorageDevice out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RemovableStorageDevice> RemovableStorageDevice::FromValue(const base::Value& value) {
  RemovableStorageDevice out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RemovableStorageDevice::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("storageUnitId", this->storage_unit_id);

  to_value_result.Set("capacity", this->capacity);

  to_value_result.Set("vendor", this->vendor);

  to_value_result.Set("model", this->model);

  to_value_result.Set("removable", this->removable);


  return to_value_result;
}



//
// Functions
//

namespace WriteFromUrl {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 2 || args.size() > 3) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& storage_unit_id_value = args[0];
    {
      auto* temp = storage_unit_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.storage_unit_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& image_url_value = args[1];
    {
      auto* temp = image_url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.image_url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& options_value = args[2];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      else {
        UrlWriteOptions temp;
        if (!UrlWriteOptions::Populate(options_value.GetDict(), temp))
          return std::nullopt;
        params.options = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace WriteFromUrl

namespace WriteFromFile {

Params::FileEntry::FileEntry()
 {}

Params::FileEntry::~FileEntry() = default;
Params::FileEntry::FileEntry(FileEntry&& rhs) noexcept = default;
Params::FileEntry& Params::FileEntry::operator=(FileEntry&& rhs) noexcept = default;
Params::FileEntry Params::FileEntry::Clone() const {
  FileEntry out;
  return out;
}

// static
bool Params::FileEntry::Populate(
    const base::Value::Dict& dict, FileEntry& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool Params::FileEntry::Populate(
    const base::Value& value, FileEntry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::FileEntry> Params::FileEntry::FromValue(const base::Value::Dict& value) {
  FileEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::FileEntry> Params::FileEntry::FromValue(const base::Value& value) {
  FileEntry out;
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
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& storage_unit_id_value = args[0];
    {
      auto* temp = storage_unit_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.storage_unit_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& file_entry_value = args[1];
    {
      if (!file_entry_value.is_dict()) {
        return std::nullopt;
      }
      if (!FileEntry::Populate(file_entry_value.GetDict(), params.file_entry)) {
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
}  // namespace WriteFromFile

namespace CancelWrite {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace CancelWrite

namespace DestroyPartitions {

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
    const base::Value& storage_unit_id_value = args[0];
    {
      auto* temp = storage_unit_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.storage_unit_id = *temp;
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
}  // namespace DestroyPartitions

namespace ListRemovableStorageDevices {

base::Value::List Results::Create(const std::vector<RemovableStorageDevice>& devices) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(devices));

  return create_results;
}
}  // namespace ListRemovableStorageDevices

//
// Events
//

namespace OnWriteProgress {

const char kEventName[] = "imageWriterPrivate.onWriteProgress";

base::Value::List Create(const ProgressInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}

}  // namespace OnWriteProgress

namespace OnWriteComplete {

const char kEventName[] = "imageWriterPrivate.onWriteComplete";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnWriteComplete

namespace OnWriteError {

const char kEventName[] = "imageWriterPrivate.onWriteError";

base::Value::List Create(const ProgressInfo& info, const std::string& error) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append((info).ToValue());

  create_results.Append(error);

  return create_results;
}

}  // namespace OnWriteError

namespace OnDeviceInserted {

const char kEventName[] = "imageWriterPrivate.onDeviceInserted";

base::Value::List Create(const RemovableStorageDevice& device) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((device).ToValue());

  return create_results;
}

}  // namespace OnDeviceInserted

namespace OnDeviceRemoved {

const char kEventName[] = "imageWriterPrivate.onDeviceRemoved";

base::Value::List Create(const RemovableStorageDevice& device) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((device).ToValue());

  return create_results;
}

}  // namespace OnDeviceRemoved

}  // namespace image_writer_private
}  // namespace api
}  // namespace extensions

