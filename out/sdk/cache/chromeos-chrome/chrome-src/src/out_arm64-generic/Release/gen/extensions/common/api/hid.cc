// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/hid.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/hid.h"

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
namespace hid {
//
// Types
//

HidCollectionInfo::HidCollectionInfo()
: usage_page(0),
usage(0) {}

HidCollectionInfo::~HidCollectionInfo() = default;
HidCollectionInfo::HidCollectionInfo(HidCollectionInfo&& rhs) = default;
HidCollectionInfo& HidCollectionInfo::operator=(HidCollectionInfo&& rhs) = default;
HidCollectionInfo HidCollectionInfo::Clone() const {
  HidCollectionInfo out;
  out.usage_page = usage_page;
  out.usage = usage;
  out.report_ids = report_ids;
  return out;
}

// static
bool HidCollectionInfo::Populate(
    const base::Value::Dict& dict, HidCollectionInfo& out) {
  const base::Value* usage_page_value = dict.Find("usagePage");
  if (!usage_page_value) {
    return false;
  }
  {
    auto temp = (*usage_page_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.usage_page = *temp;
  }

  const base::Value* usage_value = dict.Find("usage");
  if (!usage_value) {
    return false;
  }
  {
    auto temp = (*usage_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.usage = *temp;
  }

  const base::Value* report_ids_value = dict.Find("reportIds");
  if (!report_ids_value) {
    return false;
  }
  {
    if (!(*report_ids_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*report_ids_value).GetList(), out.report_ids)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool HidCollectionInfo::Populate(
    const base::Value& value, HidCollectionInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<HidCollectionInfo> HidCollectionInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<HidCollectionInfo>();
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
absl::optional<HidCollectionInfo> HidCollectionInfo::FromValue(const base::Value::Dict& value) {
  HidCollectionInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<HidCollectionInfo> HidCollectionInfo::FromValue(const base::Value& value) {
  HidCollectionInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict HidCollectionInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("usagePage", this->usage_page);

  to_value_result.Set("usage", this->usage);

  to_value_result.Set("reportIds", json_schema_compiler::util::CreateValueFromArray(this->report_ids));


  return to_value_result;
}


HidDeviceInfo::HidDeviceInfo()
: device_id(0),
vendor_id(0),
product_id(0),
max_input_report_size(0),
max_output_report_size(0),
max_feature_report_size(0) {}

HidDeviceInfo::~HidDeviceInfo() = default;
HidDeviceInfo::HidDeviceInfo(HidDeviceInfo&& rhs) = default;
HidDeviceInfo& HidDeviceInfo::operator=(HidDeviceInfo&& rhs) = default;
HidDeviceInfo HidDeviceInfo::Clone() const {
  HidDeviceInfo out;
  out.device_id = device_id;
  out.vendor_id = vendor_id;
  out.product_id = product_id;
  out.product_name = product_name;
  out.serial_number = serial_number;
  out.collections.reserve(collections.size());
  for (const auto& element : collections) {
    json_schema_compiler::util::AppendToContainer(out.collections, element.Clone());
  }
  out.max_input_report_size = max_input_report_size;
  out.max_output_report_size = max_output_report_size;
  out.max_feature_report_size = max_feature_report_size;
  out.report_descriptor = report_descriptor;
  return out;
}

// static
bool HidDeviceInfo::Populate(
    const base::Value::Dict& dict, HidDeviceInfo& out) {
  const base::Value* device_id_value = dict.Find("deviceId");
  if (!device_id_value) {
    return false;
  }
  {
    auto temp = (*device_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.device_id = *temp;
  }

  const base::Value* vendor_id_value = dict.Find("vendorId");
  if (!vendor_id_value) {
    return false;
  }
  {
    auto temp = (*vendor_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.vendor_id = *temp;
  }

  const base::Value* product_id_value = dict.Find("productId");
  if (!product_id_value) {
    return false;
  }
  {
    auto temp = (*product_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.product_id = *temp;
  }

  const base::Value* product_name_value = dict.Find("productName");
  if (!product_name_value) {
    return false;
  }
  {
    auto* temp = (*product_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.product_name = *temp;
  }

  const base::Value* serial_number_value = dict.Find("serialNumber");
  if (!serial_number_value) {
    return false;
  }
  {
    auto* temp = (*serial_number_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.serial_number = *temp;
  }

  const base::Value* collections_value = dict.Find("collections");
  if (!collections_value) {
    return false;
  }
  {
    if (!(*collections_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*collections_value).GetList(), out.collections)) {
        return false;
      }
    }
  }

  const base::Value* max_input_report_size_value = dict.Find("maxInputReportSize");
  if (!max_input_report_size_value) {
    return false;
  }
  {
    auto temp = (*max_input_report_size_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.max_input_report_size = *temp;
  }

  const base::Value* max_output_report_size_value = dict.Find("maxOutputReportSize");
  if (!max_output_report_size_value) {
    return false;
  }
  {
    auto temp = (*max_output_report_size_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.max_output_report_size = *temp;
  }

  const base::Value* max_feature_report_size_value = dict.Find("maxFeatureReportSize");
  if (!max_feature_report_size_value) {
    return false;
  }
  {
    auto temp = (*max_feature_report_size_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.max_feature_report_size = *temp;
  }

  const base::Value* report_descriptor_value = dict.Find("reportDescriptor");
  if (!report_descriptor_value) {
    return false;
  }
  {
    if (!(*report_descriptor_value).is_blob()) {
      return false;
    }
    else {
      out.report_descriptor = (*report_descriptor_value).GetBlob();
    }
  }

  return true;
}

// static
bool HidDeviceInfo::Populate(
    const base::Value& value, HidDeviceInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<HidDeviceInfo> HidDeviceInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<HidDeviceInfo>();
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
absl::optional<HidDeviceInfo> HidDeviceInfo::FromValue(const base::Value::Dict& value) {
  HidDeviceInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<HidDeviceInfo> HidDeviceInfo::FromValue(const base::Value& value) {
  HidDeviceInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict HidDeviceInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("deviceId", this->device_id);

  to_value_result.Set("vendorId", this->vendor_id);

  to_value_result.Set("productId", this->product_id);

  to_value_result.Set("productName", this->product_name);

  to_value_result.Set("serialNumber", this->serial_number);

  to_value_result.Set("collections", json_schema_compiler::util::CreateValueFromArray(this->collections));

  to_value_result.Set("maxInputReportSize", this->max_input_report_size);

  to_value_result.Set("maxOutputReportSize", this->max_output_report_size);

  to_value_result.Set("maxFeatureReportSize", this->max_feature_report_size);

  to_value_result.Set("reportDescriptor", base::Value(this->report_descriptor));


  return to_value_result;
}


HidConnectInfo::HidConnectInfo()
: connection_id(0) {}

HidConnectInfo::~HidConnectInfo() = default;
HidConnectInfo::HidConnectInfo(HidConnectInfo&& rhs) = default;
HidConnectInfo& HidConnectInfo::operator=(HidConnectInfo&& rhs) = default;
HidConnectInfo HidConnectInfo::Clone() const {
  HidConnectInfo out;
  out.connection_id = connection_id;
  return out;
}

// static
bool HidConnectInfo::Populate(
    const base::Value::Dict& dict, HidConnectInfo& out) {
  const base::Value* connection_id_value = dict.Find("connectionId");
  if (!connection_id_value) {
    return false;
  }
  {
    auto temp = (*connection_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.connection_id = *temp;
  }

  return true;
}

// static
bool HidConnectInfo::Populate(
    const base::Value& value, HidConnectInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<HidConnectInfo> HidConnectInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<HidConnectInfo>();
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
absl::optional<HidConnectInfo> HidConnectInfo::FromValue(const base::Value::Dict& value) {
  HidConnectInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<HidConnectInfo> HidConnectInfo::FromValue(const base::Value& value) {
  HidConnectInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict HidConnectInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("connectionId", this->connection_id);


  return to_value_result;
}


DeviceFilter::DeviceFilter()
 {}

DeviceFilter::~DeviceFilter() = default;
DeviceFilter::DeviceFilter(DeviceFilter&& rhs) = default;
DeviceFilter& DeviceFilter::operator=(DeviceFilter&& rhs) = default;
DeviceFilter DeviceFilter::Clone() const {
  DeviceFilter out;
  out.vendor_id = vendor_id;
  out.product_id = product_id;
  out.usage_page = usage_page;
  out.usage = usage;
  return out;
}

// static
bool DeviceFilter::Populate(
    const base::Value::Dict& dict, DeviceFilter& out) {
  const base::Value* vendor_id_value = dict.Find("vendorId");
  if (vendor_id_value) {
    {
      auto temp = (*vendor_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.vendor_id = absl::nullopt;
        return false;
      }
      out.vendor_id = *temp;
    }
  }

  const base::Value* product_id_value = dict.Find("productId");
  if (product_id_value) {
    {
      auto temp = (*product_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.product_id = absl::nullopt;
        return false;
      }
      out.product_id = *temp;
    }
  }

  const base::Value* usage_page_value = dict.Find("usagePage");
  if (usage_page_value) {
    {
      auto temp = (*usage_page_value).GetIfInt();
      if (!temp.has_value()) {
        out.usage_page = absl::nullopt;
        return false;
      }
      out.usage_page = *temp;
    }
  }

  const base::Value* usage_value = dict.Find("usage");
  if (usage_value) {
    {
      auto temp = (*usage_value).GetIfInt();
      if (!temp.has_value()) {
        out.usage = absl::nullopt;
        return false;
      }
      out.usage = *temp;
    }
  }

  return true;
}

// static
bool DeviceFilter::Populate(
    const base::Value& value, DeviceFilter& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<DeviceFilter> DeviceFilter::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<DeviceFilter>();
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
absl::optional<DeviceFilter> DeviceFilter::FromValue(const base::Value::Dict& value) {
  DeviceFilter out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DeviceFilter> DeviceFilter::FromValue(const base::Value& value) {
  DeviceFilter out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict DeviceFilter::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->vendor_id) {
    to_value_result.Set("vendorId", *this->vendor_id);

  }
  if (this->product_id) {
    to_value_result.Set("productId", *this->product_id);

  }
  if (this->usage_page) {
    to_value_result.Set("usagePage", *this->usage_page);

  }
  if (this->usage) {
    to_value_result.Set("usage", *this->usage);

  }

  return to_value_result;
}


GetDevicesOptions::GetDevicesOptions()
 {}

GetDevicesOptions::~GetDevicesOptions() = default;
GetDevicesOptions::GetDevicesOptions(GetDevicesOptions&& rhs) = default;
GetDevicesOptions& GetDevicesOptions::operator=(GetDevicesOptions&& rhs) = default;
GetDevicesOptions GetDevicesOptions::Clone() const {
  GetDevicesOptions out;
  out.vendor_id = vendor_id;
  out.product_id = product_id;
  if (filters) {
    out.filters.emplace();
    out.filters->reserve(filters->size());
    for (const auto& element : *filters) {
      json_schema_compiler::util::AppendToContainer(*out.filters, element.Clone());
    }
  }
  return out;
}

// static
bool GetDevicesOptions::Populate(
    const base::Value::Dict& dict, GetDevicesOptions& out) {
  const base::Value* vendor_id_value = dict.Find("vendorId");
  if (vendor_id_value) {
    {
      auto temp = (*vendor_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.vendor_id = absl::nullopt;
        return false;
      }
      out.vendor_id = *temp;
    }
  }

  const base::Value* product_id_value = dict.Find("productId");
  if (product_id_value) {
    {
      auto temp = (*product_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.product_id = absl::nullopt;
        return false;
      }
      out.product_id = *temp;
    }
  }

  const base::Value* filters_value = dict.Find("filters");
  if (filters_value) {
    {
      if (!(*filters_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*filters_value).GetList(), out.filters)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool GetDevicesOptions::Populate(
    const base::Value& value, GetDevicesOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<GetDevicesOptions> GetDevicesOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<GetDevicesOptions>();
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
absl::optional<GetDevicesOptions> GetDevicesOptions::FromValue(const base::Value::Dict& value) {
  GetDevicesOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<GetDevicesOptions> GetDevicesOptions::FromValue(const base::Value& value) {
  GetDevicesOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict GetDevicesOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->vendor_id) {
    to_value_result.Set("vendorId", *this->vendor_id);

  }
  if (this->product_id) {
    to_value_result.Set("productId", *this->product_id);

  }
  if (this->filters) {
    to_value_result.Set("filters", json_schema_compiler::util::CreateValueFromArray(*this->filters));

  }

  return to_value_result;
}



//
// Functions
//

namespace GetDevices {

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
      if (!GetDevicesOptions::Populate(options_value.GetDict(), params.options)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<HidDeviceInfo>& devices) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(devices));

  return create_results;
}
}  // namespace GetDevices

namespace Connect {

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
    const base::Value& device_id_value = args[0];
    {
      auto temp = device_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.device_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const HidConnectInfo& connection) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((connection).ToValue());

  return create_results;
}
}  // namespace Connect

namespace Disconnect {

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
    const base::Value& connection_id_value = args[0];
    {
      auto temp = connection_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.connection_id = *temp;
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
}  // namespace Disconnect

namespace Receive {

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
    const base::Value& connection_id_value = args[0];
    {
      auto temp = connection_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.connection_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(int report_id, const std::vector<uint8_t>& data) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(report_id);

  create_results.Append(base::Value(data));

  return create_results;
}
}  // namespace Receive

namespace Send {

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
    const base::Value& connection_id_value = args[0];
    {
      auto temp = connection_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.connection_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& report_id_value = args[1];
    {
      auto temp = report_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.report_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& data_value = args[2];
    {
      if (!data_value.is_blob()) {
        return absl::nullopt;
      }
      else {
        params.data = data_value.GetBlob();
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
}  // namespace Send

namespace ReceiveFeatureReport {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& connection_id_value = args[0];
    {
      auto temp = connection_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.connection_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& report_id_value = args[1];
    {
      auto temp = report_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.report_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<uint8_t>& data) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value(data));

  return create_results;
}
}  // namespace ReceiveFeatureReport

namespace SendFeatureReport {

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
    const base::Value& connection_id_value = args[0];
    {
      auto temp = connection_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.connection_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& report_id_value = args[1];
    {
      auto temp = report_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.report_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& data_value = args[2];
    {
      if (!data_value.is_blob()) {
        return absl::nullopt;
      }
      else {
        params.data = data_value.GetBlob();
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
}  // namespace SendFeatureReport

//
// Events
//

namespace OnDeviceAdded {

const char kEventName[] = "hid.onDeviceAdded";

base::Value::List Create(const HidDeviceInfo& device) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((device).ToValue());

  return create_results;
}

}  // namespace OnDeviceAdded

namespace OnDeviceRemoved {

const char kEventName[] = "hid.onDeviceRemoved";

base::Value::List Create(int device_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(device_id);

  return create_results;
}

}  // namespace OnDeviceRemoved

}  // namespace hid
}  // namespace api
}  // namespace extensions

