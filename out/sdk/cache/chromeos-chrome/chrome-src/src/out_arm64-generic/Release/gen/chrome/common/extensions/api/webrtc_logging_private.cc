// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/webrtc_logging_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/webrtc_logging_private.h"

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
namespace webrtc_logging_private {
//
// Types
//

MetaDataEntry::MetaDataEntry()
 {}

MetaDataEntry::~MetaDataEntry() = default;
MetaDataEntry::MetaDataEntry(MetaDataEntry&& rhs) = default;
MetaDataEntry& MetaDataEntry::operator=(MetaDataEntry&& rhs) = default;
MetaDataEntry MetaDataEntry::Clone() const {
  MetaDataEntry out;
  out.key = key;
  out.value = value;
  return out;
}

// static
bool MetaDataEntry::Populate(
    const base::Value::Dict& dict, MetaDataEntry& out) {
  const base::Value* key_value = dict.Find("key");
  if (!key_value) {
    return false;
  }
  {
    auto* temp = (*key_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.key = *temp;
  }

  const base::Value* value_value = dict.Find("value");
  if (!value_value) {
    return false;
  }
  {
    auto* temp = (*value_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.value = *temp;
  }

  return true;
}

// static
bool MetaDataEntry::Populate(
    const base::Value& value, MetaDataEntry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<MetaDataEntry> MetaDataEntry::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<MetaDataEntry>();
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
absl::optional<MetaDataEntry> MetaDataEntry::FromValue(const base::Value::Dict& value) {
  MetaDataEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<MetaDataEntry> MetaDataEntry::FromValue(const base::Value& value) {
  MetaDataEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict MetaDataEntry::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("key", this->key);

  to_value_result.Set("value", this->value);


  return to_value_result;
}


UploadResult::UploadResult()
 {}

UploadResult::~UploadResult() = default;
UploadResult::UploadResult(UploadResult&& rhs) = default;
UploadResult& UploadResult::operator=(UploadResult&& rhs) = default;
UploadResult UploadResult::Clone() const {
  UploadResult out;
  out.report_id = report_id;
  return out;
}

// static
bool UploadResult::Populate(
    const base::Value::Dict& dict, UploadResult& out) {
  const base::Value* report_id_value = dict.Find("reportId");
  if (!report_id_value) {
    return false;
  }
  {
    auto* temp = (*report_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.report_id = *temp;
  }

  return true;
}

// static
bool UploadResult::Populate(
    const base::Value& value, UploadResult& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<UploadResult> UploadResult::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<UploadResult>();
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
absl::optional<UploadResult> UploadResult::FromValue(const base::Value::Dict& value) {
  UploadResult out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<UploadResult> UploadResult::FromValue(const base::Value& value) {
  UploadResult out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict UploadResult::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("reportId", this->report_id);


  return to_value_result;
}


RequestInfo::RequestInfo()
 {}

RequestInfo::~RequestInfo() = default;
RequestInfo::RequestInfo(RequestInfo&& rhs) = default;
RequestInfo& RequestInfo::operator=(RequestInfo&& rhs) = default;
RequestInfo RequestInfo::Clone() const {
  RequestInfo out;
  out.tab_id = tab_id;
  out.guest_process_id = guest_process_id;
  out.target_webview = target_webview;
  return out;
}

// static
bool RequestInfo::Populate(
    const base::Value::Dict& dict, RequestInfo& out) {
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

  const base::Value* guest_process_id_value = dict.Find("guestProcessId");
  if (guest_process_id_value) {
    {
      auto temp = (*guest_process_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.guest_process_id = absl::nullopt;
        return false;
      }
      out.guest_process_id = *temp;
    }
  }

  const base::Value* target_webview_value = dict.Find("targetWebview");
  if (target_webview_value) {
    {
      auto temp = (*target_webview_value).GetIfBool();
      if (!temp.has_value()) {
        out.target_webview = absl::nullopt;
        return false;
      }
      out.target_webview = *temp;
    }
  }

  return true;
}

// static
bool RequestInfo::Populate(
    const base::Value& value, RequestInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<RequestInfo> RequestInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<RequestInfo>();
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
absl::optional<RequestInfo> RequestInfo::FromValue(const base::Value::Dict& value) {
  RequestInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<RequestInfo> RequestInfo::FromValue(const base::Value& value) {
  RequestInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict RequestInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->tab_id) {
    to_value_result.Set("tabId", *this->tab_id);

  }
  if (this->guest_process_id) {
    to_value_result.Set("guestProcessId", *this->guest_process_id);

  }
  if (this->target_webview) {
    to_value_result.Set("targetWebview", *this->target_webview);

  }

  return to_value_result;
}


RecordingInfo::RecordingInfo()
: did_stop(false),
did_manual_stop(false) {}

RecordingInfo::~RecordingInfo() = default;
RecordingInfo::RecordingInfo(RecordingInfo&& rhs) = default;
RecordingInfo& RecordingInfo::operator=(RecordingInfo&& rhs) = default;
RecordingInfo RecordingInfo::Clone() const {
  RecordingInfo out;
  out.prefix_path = prefix_path;
  out.did_stop = did_stop;
  out.did_manual_stop = did_manual_stop;
  return out;
}

// static
bool RecordingInfo::Populate(
    const base::Value::Dict& dict, RecordingInfo& out) {
  const base::Value* prefix_path_value = dict.Find("prefixPath");
  if (!prefix_path_value) {
    return false;
  }
  {
    auto* temp = (*prefix_path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.prefix_path = *temp;
  }

  const base::Value* did_stop_value = dict.Find("didStop");
  if (!did_stop_value) {
    return false;
  }
  {
    auto temp = (*did_stop_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.did_stop = *temp;
  }

  const base::Value* did_manual_stop_value = dict.Find("didManualStop");
  if (!did_manual_stop_value) {
    return false;
  }
  {
    auto temp = (*did_manual_stop_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.did_manual_stop = *temp;
  }

  return true;
}

// static
bool RecordingInfo::Populate(
    const base::Value& value, RecordingInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<RecordingInfo> RecordingInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<RecordingInfo>();
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
absl::optional<RecordingInfo> RecordingInfo::FromValue(const base::Value::Dict& value) {
  RecordingInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<RecordingInfo> RecordingInfo::FromValue(const base::Value& value) {
  RecordingInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict RecordingInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("prefixPath", this->prefix_path);

  to_value_result.Set("didStop", this->did_stop);

  to_value_result.Set("didManualStop", this->did_manual_stop);


  return to_value_result;
}


StartEventLoggingResult::StartEventLoggingResult()
 {}

StartEventLoggingResult::~StartEventLoggingResult() = default;
StartEventLoggingResult::StartEventLoggingResult(StartEventLoggingResult&& rhs) = default;
StartEventLoggingResult& StartEventLoggingResult::operator=(StartEventLoggingResult&& rhs) = default;
StartEventLoggingResult StartEventLoggingResult::Clone() const {
  StartEventLoggingResult out;
  out.log_id = log_id;
  return out;
}

// static
bool StartEventLoggingResult::Populate(
    const base::Value::Dict& dict, StartEventLoggingResult& out) {
  const base::Value* log_id_value = dict.Find("logId");
  if (!log_id_value) {
    return false;
  }
  {
    auto* temp = (*log_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.log_id = *temp;
  }

  return true;
}

// static
bool StartEventLoggingResult::Populate(
    const base::Value& value, StartEventLoggingResult& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<StartEventLoggingResult> StartEventLoggingResult::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<StartEventLoggingResult>();
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
absl::optional<StartEventLoggingResult> StartEventLoggingResult::FromValue(const base::Value::Dict& value) {
  StartEventLoggingResult out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<StartEventLoggingResult> StartEventLoggingResult::FromValue(const base::Value& value) {
  StartEventLoggingResult out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict StartEventLoggingResult::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("logId", this->log_id);


  return to_value_result;
}



//
// Functions
//

namespace SetMetaData {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return absl::nullopt;
      }
      if (!RequestInfo::Populate(request_value.GetDict(), params.request)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& security_origin_value = args[1];
    {
      auto* temp = security_origin_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.security_origin = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& meta_data_value = args[2];
    {
      if (!meta_data_value.is_list()) {
        return absl::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(meta_data_value.GetList(), params.meta_data)) {
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
}  // namespace SetMetaData

namespace Start {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return absl::nullopt;
      }
      if (!RequestInfo::Populate(request_value.GetDict(), params.request)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& security_origin_value = args[1];
    {
      auto* temp = security_origin_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.security_origin = *temp;
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
}  // namespace Start

namespace SetUploadOnRenderClose {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return absl::nullopt;
      }
      if (!RequestInfo::Populate(request_value.GetDict(), params.request)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& security_origin_value = args[1];
    {
      auto* temp = security_origin_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.security_origin = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& should_upload_value = args[2];
    {
      auto temp = should_upload_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.should_upload = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SetUploadOnRenderClose

namespace Stop {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return absl::nullopt;
      }
      if (!RequestInfo::Populate(request_value.GetDict(), params.request)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& security_origin_value = args[1];
    {
      auto* temp = security_origin_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.security_origin = *temp;
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
}  // namespace Stop

namespace Store {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return absl::nullopt;
      }
      if (!RequestInfo::Populate(request_value.GetDict(), params.request)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& security_origin_value = args[1];
    {
      auto* temp = security_origin_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.security_origin = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& log_id_value = args[2];
    {
      auto* temp = log_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.log_id = *temp;
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
}  // namespace Store

namespace UploadStored {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return absl::nullopt;
      }
      if (!RequestInfo::Populate(request_value.GetDict(), params.request)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& security_origin_value = args[1];
    {
      auto* temp = security_origin_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.security_origin = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& log_id_value = args[2];
    {
      auto* temp = log_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.log_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const UploadResult& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace UploadStored

namespace Upload {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return absl::nullopt;
      }
      if (!RequestInfo::Populate(request_value.GetDict(), params.request)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& security_origin_value = args[1];
    {
      auto* temp = security_origin_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.security_origin = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const UploadResult& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace Upload

namespace Discard {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return absl::nullopt;
      }
      if (!RequestInfo::Populate(request_value.GetDict(), params.request)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& security_origin_value = args[1];
    {
      auto* temp = security_origin_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.security_origin = *temp;
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
}  // namespace Discard

namespace StartRtpDump {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 4) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return absl::nullopt;
      }
      if (!RequestInfo::Populate(request_value.GetDict(), params.request)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& security_origin_value = args[1];
    {
      auto* temp = security_origin_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.security_origin = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& incoming_value = args[2];
    {
      auto temp = incoming_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.incoming = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (3 < args.size() &&
      !args[3].is_none()) {
    const base::Value& outgoing_value = args[3];
    {
      auto temp = outgoing_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.outgoing = *temp;
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
}  // namespace StartRtpDump

namespace StopRtpDump {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 4) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return absl::nullopt;
      }
      if (!RequestInfo::Populate(request_value.GetDict(), params.request)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& security_origin_value = args[1];
    {
      auto* temp = security_origin_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.security_origin = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& incoming_value = args[2];
    {
      auto temp = incoming_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.incoming = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (3 < args.size() &&
      !args[3].is_none()) {
    const base::Value& outgoing_value = args[3];
    {
      auto temp = outgoing_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.outgoing = *temp;
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
}  // namespace StopRtpDump

namespace StartAudioDebugRecordings {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return absl::nullopt;
      }
      if (!RequestInfo::Populate(request_value.GetDict(), params.request)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& security_origin_value = args[1];
    {
      auto* temp = security_origin_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.security_origin = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& seconds_value = args[2];
    {
      auto temp = seconds_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.seconds = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const RecordingInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}
}  // namespace StartAudioDebugRecordings

namespace StopAudioDebugRecordings {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return absl::nullopt;
      }
      if (!RequestInfo::Populate(request_value.GetDict(), params.request)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& security_origin_value = args[1];
    {
      auto* temp = security_origin_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.security_origin = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const RecordingInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}
}  // namespace StopAudioDebugRecordings

namespace StartEventLogging {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 6) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return absl::nullopt;
      }
      if (!RequestInfo::Populate(request_value.GetDict(), params.request)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& security_origin_value = args[1];
    {
      auto* temp = security_origin_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.security_origin = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& session_id_value = args[2];
    {
      auto* temp = session_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.session_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (3 < args.size() &&
      !args[3].is_none()) {
    const base::Value& max_log_size_bytes_value = args[3];
    {
      auto temp = max_log_size_bytes_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.max_log_size_bytes = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (4 < args.size() &&
      !args[4].is_none()) {
    const base::Value& output_period_ms_value = args[4];
    {
      auto temp = output_period_ms_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.output_period_ms = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (5 < args.size() &&
      !args[5].is_none()) {
    const base::Value& web_app_id_value = args[5];
    {
      auto temp = web_app_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.web_app_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const StartEventLoggingResult& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace StartEventLogging

namespace GetLogsDirectory {

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
}  // namespace GetLogsDirectory

}  // namespace webrtc_logging_private
}  // namespace api
}  // namespace extensions

