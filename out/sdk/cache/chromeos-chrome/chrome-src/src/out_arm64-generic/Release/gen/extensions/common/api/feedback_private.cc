// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/feedback_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/feedback_private.h"

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
namespace feedback_private {
//
// Types
//

AttachedFile::Data::Data()
 {}

AttachedFile::Data::~Data() = default;
AttachedFile::Data::Data(Data&& rhs) = default;
AttachedFile::Data& AttachedFile::Data::operator=(Data&& rhs) = default;
AttachedFile::Data AttachedFile::Data::Clone() const {
  Data out;
  return out;
}

// static
bool AttachedFile::Data::Populate(
    const base::Value::Dict& dict, Data& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool AttachedFile::Data::Populate(
    const base::Value& value, Data& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<AttachedFile::Data> AttachedFile::Data::FromValue(const base::Value::Dict& value) {
  Data out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<AttachedFile::Data> AttachedFile::Data::FromValue(const base::Value& value) {
  Data out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict AttachedFile::Data::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



AttachedFile::AttachedFile()
 {}

AttachedFile::~AttachedFile() = default;
AttachedFile::AttachedFile(AttachedFile&& rhs) = default;
AttachedFile& AttachedFile::operator=(AttachedFile&& rhs) = default;
AttachedFile AttachedFile::Clone() const {
  AttachedFile out;
  out.name = name;
  if (data) {
    out.data = data->Clone();
  }
  return out;
}

// static
bool AttachedFile::Populate(
    const base::Value::Dict& dict, AttachedFile& out) {
  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.name = *temp;
  }

  const base::Value* data_value = dict.Find("data");
  if (data_value) {
    {
      if (!(*data_value).is_dict()) {
        return false;
      }
      else {
        Data temp;
        if (!Data::Populate((*data_value).GetDict(), temp))
          return false;
        out.data = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool AttachedFile::Populate(
    const base::Value& value, AttachedFile& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<AttachedFile> AttachedFile::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<AttachedFile>();
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
absl::optional<AttachedFile> AttachedFile::FromValue(const base::Value::Dict& value) {
  AttachedFile out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<AttachedFile> AttachedFile::FromValue(const base::Value& value) {
  AttachedFile out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict AttachedFile::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("name", this->name);

  if (this->data) {
    to_value_result.Set("data", (this->data)->ToValue());

  }

  return to_value_result;
}


LogsMapEntry::LogsMapEntry()
 {}

LogsMapEntry::~LogsMapEntry() = default;
LogsMapEntry::LogsMapEntry(LogsMapEntry&& rhs) = default;
LogsMapEntry& LogsMapEntry::operator=(LogsMapEntry&& rhs) = default;
LogsMapEntry LogsMapEntry::Clone() const {
  LogsMapEntry out;
  out.key = key;
  out.value = value;
  return out;
}

// static
bool LogsMapEntry::Populate(
    const base::Value::Dict& dict, LogsMapEntry& out) {
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
bool LogsMapEntry::Populate(
    const base::Value& value, LogsMapEntry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<LogsMapEntry> LogsMapEntry::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<LogsMapEntry>();
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
absl::optional<LogsMapEntry> LogsMapEntry::FromValue(const base::Value::Dict& value) {
  LogsMapEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<LogsMapEntry> LogsMapEntry::FromValue(const base::Value& value) {
  LogsMapEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict LogsMapEntry::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("key", this->key);

  to_value_result.Set("value", this->value);


  return to_value_result;
}


const char* ToString(FeedbackFlow enum_param) {
  switch (enum_param) {
    case FeedbackFlow::kRegular:
      return "regular";
    case FeedbackFlow::kLogin:
      return "login";
    case FeedbackFlow::kSadTabCrash:
      return "sadTabCrash";
    case FeedbackFlow::kGoogleInternal:
      return "googleInternal";
    case FeedbackFlow::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

FeedbackFlow ParseFeedbackFlow(base::StringPiece enum_string) {
  if (enum_string == "regular")
    return FeedbackFlow::kRegular;
  if (enum_string == "login")
    return FeedbackFlow::kLogin;
  if (enum_string == "sadTabCrash")
    return FeedbackFlow::kSadTabCrash;
  if (enum_string == "googleInternal")
    return FeedbackFlow::kGoogleInternal;
  return FeedbackFlow::kNone;
}

std::u16string GetFeedbackFlowParseError(base::StringPiece enum_string) {
  return u"expected \"regular\" or \"login\" or \"sadTabCrash\" or \"googleInternal\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


FeedbackInfo::Screenshot::Screenshot()
 {}

FeedbackInfo::Screenshot::~Screenshot() = default;
FeedbackInfo::Screenshot::Screenshot(Screenshot&& rhs) = default;
FeedbackInfo::Screenshot& FeedbackInfo::Screenshot::operator=(Screenshot&& rhs) = default;
FeedbackInfo::Screenshot FeedbackInfo::Screenshot::Clone() const {
  Screenshot out;
  return out;
}

// static
bool FeedbackInfo::Screenshot::Populate(
    const base::Value::Dict& dict, Screenshot& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool FeedbackInfo::Screenshot::Populate(
    const base::Value& value, Screenshot& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<FeedbackInfo::Screenshot> FeedbackInfo::Screenshot::FromValue(const base::Value::Dict& value) {
  Screenshot out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<FeedbackInfo::Screenshot> FeedbackInfo::Screenshot::FromValue(const base::Value& value) {
  Screenshot out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict FeedbackInfo::Screenshot::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



FeedbackInfo::FeedbackInfo()
: flow() {}

FeedbackInfo::~FeedbackInfo() = default;
FeedbackInfo::FeedbackInfo(FeedbackInfo&& rhs) = default;
FeedbackInfo& FeedbackInfo::operator=(FeedbackInfo&& rhs) = default;
FeedbackInfo FeedbackInfo::Clone() const {
  FeedbackInfo out;
  if (attached_file) {
    out.attached_file = attached_file->Clone();
  }
  out.category_tag = category_tag;
  out.description = description;
  out.description_placeholder = description_placeholder;
  out.email = email;
  out.page_url = page_url;
  out.product_id = product_id;
  if (screenshot) {
    out.screenshot = screenshot->Clone();
  }
  out.trace_id = trace_id;
  if (system_information) {
    out.system_information.emplace();
    out.system_information->reserve(system_information->size());
    for (const auto& element : *system_information) {
      json_schema_compiler::util::AppendToContainer(*out.system_information, element.Clone());
    }
  }
  out.send_histograms = send_histograms;
  out.flow = flow;
  out.attached_file_blob_uuid = attached_file_blob_uuid;
  out.screenshot_blob_uuid = screenshot_blob_uuid;
  out.use_system_window_frame = use_system_window_frame;
  out.send_bluetooth_logs = send_bluetooth_logs;
  out.send_tab_titles = send_tab_titles;
  out.assistant_debug_info_allowed = assistant_debug_info_allowed;
  out.from_assistant = from_assistant;
  out.include_bluetooth_logs = include_bluetooth_logs;
  out.show_questionnaire = show_questionnaire;
  out.from_autofill = from_autofill;
  out.autofill_metadata = autofill_metadata;
  out.send_autofill_metadata = send_autofill_metadata;
  return out;
}

// static
bool FeedbackInfo::Populate(
    const base::Value::Dict& dict, FeedbackInfo& out) {
  out.flow = FeedbackFlow();
  const base::Value* attached_file_value = dict.Find("attachedFile");
  if (attached_file_value) {
    {
      if (!(*attached_file_value).is_dict()) {
        return false;
      }
      else {
        AttachedFile temp;
        if (!AttachedFile::Populate((*attached_file_value).GetDict(), temp))
          return false;
        out.attached_file = std::move(temp);
      }
    }
  }

  const base::Value* category_tag_value = dict.Find("categoryTag");
  if (category_tag_value) {
    {
      auto* temp = (*category_tag_value).GetIfString();
      if (!temp) {
        out.category_tag = absl::nullopt;
        return false;
      }
      out.category_tag = *temp;
    }
  }

  const base::Value* description_value = dict.Find("description");
  if (!description_value) {
    return false;
  }
  {
    auto* temp = (*description_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.description = *temp;
  }

  const base::Value* description_placeholder_value = dict.Find("descriptionPlaceholder");
  if (description_placeholder_value) {
    {
      auto* temp = (*description_placeholder_value).GetIfString();
      if (!temp) {
        out.description_placeholder = absl::nullopt;
        return false;
      }
      out.description_placeholder = *temp;
    }
  }

  const base::Value* email_value = dict.Find("email");
  if (email_value) {
    {
      auto* temp = (*email_value).GetIfString();
      if (!temp) {
        out.email = absl::nullopt;
        return false;
      }
      out.email = *temp;
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

  const base::Value* screenshot_value = dict.Find("screenshot");
  if (screenshot_value) {
    {
      if (!(*screenshot_value).is_dict()) {
        return false;
      }
      else {
        Screenshot temp;
        if (!Screenshot::Populate((*screenshot_value).GetDict(), temp))
          return false;
        out.screenshot = std::move(temp);
      }
    }
  }

  const base::Value* trace_id_value = dict.Find("traceId");
  if (trace_id_value) {
    {
      auto temp = (*trace_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.trace_id = absl::nullopt;
        return false;
      }
      out.trace_id = *temp;
    }
  }

  const base::Value* system_information_value = dict.Find("systemInformation");
  if (system_information_value) {
    {
      if (!(*system_information_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*system_information_value).GetList(), out.system_information)) {
          return false;
        }
      }
    }
  }

  const base::Value* send_histograms_value = dict.Find("sendHistograms");
  if (send_histograms_value) {
    {
      auto temp = (*send_histograms_value).GetIfBool();
      if (!temp.has_value()) {
        out.send_histograms = absl::nullopt;
        return false;
      }
      out.send_histograms = *temp;
    }
  }

  const base::Value* flow_value = dict.Find("flow");
  if (flow_value) {
    {
      const std::string* feedback_flow_as_string = (*flow_value).GetIfString();
      if (!feedback_flow_as_string) {
        return false;
      }
      out.flow = ParseFeedbackFlow(*feedback_flow_as_string);
      if (out.flow == FeedbackFlow()) {
        return false;
      }
    }
    } else {
    out.flow = FeedbackFlow();
  }

  const base::Value* attached_file_blob_uuid_value = dict.Find("attachedFileBlobUuid");
  if (attached_file_blob_uuid_value) {
    {
      auto* temp = (*attached_file_blob_uuid_value).GetIfString();
      if (!temp) {
        out.attached_file_blob_uuid = absl::nullopt;
        return false;
      }
      out.attached_file_blob_uuid = *temp;
    }
  }

  const base::Value* screenshot_blob_uuid_value = dict.Find("screenshotBlobUuid");
  if (screenshot_blob_uuid_value) {
    {
      auto* temp = (*screenshot_blob_uuid_value).GetIfString();
      if (!temp) {
        out.screenshot_blob_uuid = absl::nullopt;
        return false;
      }
      out.screenshot_blob_uuid = *temp;
    }
  }

  const base::Value* use_system_window_frame_value = dict.Find("useSystemWindowFrame");
  if (use_system_window_frame_value) {
    {
      auto temp = (*use_system_window_frame_value).GetIfBool();
      if (!temp.has_value()) {
        out.use_system_window_frame = absl::nullopt;
        return false;
      }
      out.use_system_window_frame = *temp;
    }
  }

  const base::Value* send_bluetooth_logs_value = dict.Find("sendBluetoothLogs");
  if (send_bluetooth_logs_value) {
    {
      auto temp = (*send_bluetooth_logs_value).GetIfBool();
      if (!temp.has_value()) {
        out.send_bluetooth_logs = absl::nullopt;
        return false;
      }
      out.send_bluetooth_logs = *temp;
    }
  }

  const base::Value* send_tab_titles_value = dict.Find("sendTabTitles");
  if (send_tab_titles_value) {
    {
      auto temp = (*send_tab_titles_value).GetIfBool();
      if (!temp.has_value()) {
        out.send_tab_titles = absl::nullopt;
        return false;
      }
      out.send_tab_titles = *temp;
    }
  }

  const base::Value* assistant_debug_info_allowed_value = dict.Find("assistantDebugInfoAllowed");
  if (assistant_debug_info_allowed_value) {
    {
      auto temp = (*assistant_debug_info_allowed_value).GetIfBool();
      if (!temp.has_value()) {
        out.assistant_debug_info_allowed = absl::nullopt;
        return false;
      }
      out.assistant_debug_info_allowed = *temp;
    }
  }

  const base::Value* from_assistant_value = dict.Find("fromAssistant");
  if (from_assistant_value) {
    {
      auto temp = (*from_assistant_value).GetIfBool();
      if (!temp.has_value()) {
        out.from_assistant = absl::nullopt;
        return false;
      }
      out.from_assistant = *temp;
    }
  }

  const base::Value* include_bluetooth_logs_value = dict.Find("includeBluetoothLogs");
  if (include_bluetooth_logs_value) {
    {
      auto temp = (*include_bluetooth_logs_value).GetIfBool();
      if (!temp.has_value()) {
        out.include_bluetooth_logs = absl::nullopt;
        return false;
      }
      out.include_bluetooth_logs = *temp;
    }
  }

  const base::Value* show_questionnaire_value = dict.Find("showQuestionnaire");
  if (show_questionnaire_value) {
    {
      auto temp = (*show_questionnaire_value).GetIfBool();
      if (!temp.has_value()) {
        out.show_questionnaire = absl::nullopt;
        return false;
      }
      out.show_questionnaire = *temp;
    }
  }

  const base::Value* from_autofill_value = dict.Find("fromAutofill");
  if (from_autofill_value) {
    {
      auto temp = (*from_autofill_value).GetIfBool();
      if (!temp.has_value()) {
        out.from_autofill = absl::nullopt;
        return false;
      }
      out.from_autofill = *temp;
    }
  }

  const base::Value* autofill_metadata_value = dict.Find("autofillMetadata");
  if (autofill_metadata_value) {
    {
      auto* temp = (*autofill_metadata_value).GetIfString();
      if (!temp) {
        out.autofill_metadata = absl::nullopt;
        return false;
      }
      out.autofill_metadata = *temp;
    }
  }

  const base::Value* send_autofill_metadata_value = dict.Find("sendAutofillMetadata");
  if (send_autofill_metadata_value) {
    {
      auto temp = (*send_autofill_metadata_value).GetIfBool();
      if (!temp.has_value()) {
        out.send_autofill_metadata = absl::nullopt;
        return false;
      }
      out.send_autofill_metadata = *temp;
    }
  }

  return true;
}

// static
bool FeedbackInfo::Populate(
    const base::Value& value, FeedbackInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<FeedbackInfo> FeedbackInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<FeedbackInfo>();
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
absl::optional<FeedbackInfo> FeedbackInfo::FromValue(const base::Value::Dict& value) {
  FeedbackInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<FeedbackInfo> FeedbackInfo::FromValue(const base::Value& value) {
  FeedbackInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict FeedbackInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->attached_file) {
    to_value_result.Set("attachedFile", (this->attached_file)->ToValue());

  }
  if (this->category_tag) {
    to_value_result.Set("categoryTag", *this->category_tag);

  }
  to_value_result.Set("description", this->description);

  if (this->description_placeholder) {
    to_value_result.Set("descriptionPlaceholder", *this->description_placeholder);

  }
  if (this->email) {
    to_value_result.Set("email", *this->email);

  }
  if (this->page_url) {
    to_value_result.Set("pageUrl", *this->page_url);

  }
  if (this->product_id) {
    to_value_result.Set("productId", *this->product_id);

  }
  if (this->screenshot) {
    to_value_result.Set("screenshot", (this->screenshot)->ToValue());

  }
  if (this->trace_id) {
    to_value_result.Set("traceId", *this->trace_id);

  }
  if (this->system_information) {
    to_value_result.Set("systemInformation", json_schema_compiler::util::CreateValueFromArray(*this->system_information));

  }
  if (this->send_histograms) {
    to_value_result.Set("sendHistograms", *this->send_histograms);

  }
  if (this->flow != FeedbackFlow()) {
    to_value_result.Set("flow", feedback_private::ToString(this->flow));

  }
  if (this->attached_file_blob_uuid) {
    to_value_result.Set("attachedFileBlobUuid", *this->attached_file_blob_uuid);

  }
  if (this->screenshot_blob_uuid) {
    to_value_result.Set("screenshotBlobUuid", *this->screenshot_blob_uuid);

  }
  if (this->use_system_window_frame) {
    to_value_result.Set("useSystemWindowFrame", *this->use_system_window_frame);

  }
  if (this->send_bluetooth_logs) {
    to_value_result.Set("sendBluetoothLogs", *this->send_bluetooth_logs);

  }
  if (this->send_tab_titles) {
    to_value_result.Set("sendTabTitles", *this->send_tab_titles);

  }
  if (this->assistant_debug_info_allowed) {
    to_value_result.Set("assistantDebugInfoAllowed", *this->assistant_debug_info_allowed);

  }
  if (this->from_assistant) {
    to_value_result.Set("fromAssistant", *this->from_assistant);

  }
  if (this->include_bluetooth_logs) {
    to_value_result.Set("includeBluetoothLogs", *this->include_bluetooth_logs);

  }
  if (this->show_questionnaire) {
    to_value_result.Set("showQuestionnaire", *this->show_questionnaire);

  }
  if (this->from_autofill) {
    to_value_result.Set("fromAutofill", *this->from_autofill);

  }
  if (this->autofill_metadata) {
    to_value_result.Set("autofillMetadata", *this->autofill_metadata);

  }
  if (this->send_autofill_metadata) {
    to_value_result.Set("sendAutofillMetadata", *this->send_autofill_metadata);

  }

  return to_value_result;
}


const char* ToString(Status enum_param) {
  switch (enum_param) {
    case Status::kSuccess:
      return "success";
    case Status::kDelayed:
      return "delayed";
    case Status::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

Status ParseStatus(base::StringPiece enum_string) {
  if (enum_string == "success")
    return Status::kSuccess;
  if (enum_string == "delayed")
    return Status::kDelayed;
  return Status::kNone;
}

std::u16string GetStatusParseError(base::StringPiece enum_string) {
  return u"expected \"success\" or \"delayed\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(LandingPageType enum_param) {
  switch (enum_param) {
    case LandingPageType::kNormal:
      return "normal";
    case LandingPageType::kTechstop:
      return "techstop";
    case LandingPageType::kNoLandingPage:
      return "noLandingPage";
    case LandingPageType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

LandingPageType ParseLandingPageType(base::StringPiece enum_string) {
  if (enum_string == "normal")
    return LandingPageType::kNormal;
  if (enum_string == "techstop")
    return LandingPageType::kTechstop;
  if (enum_string == "noLandingPage")
    return LandingPageType::kNoLandingPage;
  return LandingPageType::kNone;
}

std::u16string GetLandingPageTypeParseError(base::StringPiece enum_string) {
  return u"expected \"normal\" or \"techstop\" or \"noLandingPage\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


SendFeedbackResult::SendFeedbackResult()
: status(),
landing_page_type() {}

SendFeedbackResult::~SendFeedbackResult() = default;
SendFeedbackResult::SendFeedbackResult(SendFeedbackResult&& rhs) = default;
SendFeedbackResult& SendFeedbackResult::operator=(SendFeedbackResult&& rhs) = default;
SendFeedbackResult SendFeedbackResult::Clone() const {
  SendFeedbackResult out;
  out.status = status;
  out.landing_page_type = landing_page_type;
  return out;
}

// static
bool SendFeedbackResult::Populate(
    const base::Value::Dict& dict, SendFeedbackResult& out) {
  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    const std::string* status_as_string = (*status_value).GetIfString();
    if (!status_as_string) {
      return false;
    }
    out.status = ParseStatus(*status_as_string);
    if (out.status == Status()) {
      return false;
    }
  }

  const base::Value* landing_page_type_value = dict.Find("landingPageType");
  if (!landing_page_type_value) {
    return false;
  }
  {
    const std::string* landing_page_type_as_string = (*landing_page_type_value).GetIfString();
    if (!landing_page_type_as_string) {
      return false;
    }
    out.landing_page_type = ParseLandingPageType(*landing_page_type_as_string);
    if (out.landing_page_type == LandingPageType()) {
      return false;
    }
  }

  return true;
}

// static
bool SendFeedbackResult::Populate(
    const base::Value& value, SendFeedbackResult& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<SendFeedbackResult> SendFeedbackResult::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<SendFeedbackResult>();
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
absl::optional<SendFeedbackResult> SendFeedbackResult::FromValue(const base::Value::Dict& value) {
  SendFeedbackResult out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<SendFeedbackResult> SendFeedbackResult::FromValue(const base::Value& value) {
  SendFeedbackResult out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict SendFeedbackResult::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("status", feedback_private::ToString(this->status));

  to_value_result.Set("landingPageType", feedback_private::ToString(this->landing_page_type));


  return to_value_result;
}


const char* ToString(LogSource enum_param) {
  switch (enum_param) {
    case LogSource::kMessages:
      return "messages";
    case LogSource::kUiLatest:
      return "uiLatest";
    case LogSource::kDrmModetest:
      return "drmModetest";
    case LogSource::kLsusb:
      return "lsusb";
    case LogSource::kAtrusLog:
      return "atrusLog";
    case LogSource::kNetLog:
      return "netLog";
    case LogSource::kEventLog:
      return "eventLog";
    case LogSource::kUpdateEngineLog:
      return "updateEngineLog";
    case LogSource::kPowerdLatest:
      return "powerdLatest";
    case LogSource::kPowerdPrevious:
      return "powerdPrevious";
    case LogSource::kLspci:
      return "lspci";
    case LogSource::kIfconfig:
      return "ifconfig";
    case LogSource::kUptime:
      return "uptime";
    case LogSource::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

LogSource ParseLogSource(base::StringPiece enum_string) {
  if (enum_string == "messages")
    return LogSource::kMessages;
  if (enum_string == "uiLatest")
    return LogSource::kUiLatest;
  if (enum_string == "drmModetest")
    return LogSource::kDrmModetest;
  if (enum_string == "lsusb")
    return LogSource::kLsusb;
  if (enum_string == "atrusLog")
    return LogSource::kAtrusLog;
  if (enum_string == "netLog")
    return LogSource::kNetLog;
  if (enum_string == "eventLog")
    return LogSource::kEventLog;
  if (enum_string == "updateEngineLog")
    return LogSource::kUpdateEngineLog;
  if (enum_string == "powerdLatest")
    return LogSource::kPowerdLatest;
  if (enum_string == "powerdPrevious")
    return LogSource::kPowerdPrevious;
  if (enum_string == "lspci")
    return LogSource::kLspci;
  if (enum_string == "ifconfig")
    return LogSource::kIfconfig;
  if (enum_string == "uptime")
    return LogSource::kUptime;
  return LogSource::kNone;
}

std::u16string GetLogSourceParseError(base::StringPiece enum_string) {
  return u"expected \"messages\" or \"uiLatest\" or \"drmModetest\" or \"lsusb\" or \"atrusLog\" or \"netLog\" or \"eventLog\" or \"updateEngineLog\" or \"powerdLatest\" or \"powerdPrevious\" or \"lspci\" or \"ifconfig\" or \"uptime\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(FeedbackSource enum_param) {
  switch (enum_param) {
    case FeedbackSource::kQuickoffice:
      return "quickoffice";
    case FeedbackSource::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

FeedbackSource ParseFeedbackSource(base::StringPiece enum_string) {
  if (enum_string == "quickoffice")
    return FeedbackSource::kQuickoffice;
  return FeedbackSource::kNone;
}

std::u16string GetFeedbackSourceParseError(base::StringPiece enum_string) {
  return u"expected \"quickoffice\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ReadLogSourceParams::ReadLogSourceParams()
: source(),
incremental(false) {}

ReadLogSourceParams::~ReadLogSourceParams() = default;
ReadLogSourceParams::ReadLogSourceParams(ReadLogSourceParams&& rhs) = default;
ReadLogSourceParams& ReadLogSourceParams::operator=(ReadLogSourceParams&& rhs) = default;
ReadLogSourceParams ReadLogSourceParams::Clone() const {
  ReadLogSourceParams out;
  out.source = source;
  out.incremental = incremental;
  out.reader_id = reader_id;
  return out;
}

// static
bool ReadLogSourceParams::Populate(
    const base::Value::Dict& dict, ReadLogSourceParams& out) {
  const base::Value* source_value = dict.Find("source");
  if (!source_value) {
    return false;
  }
  {
    const std::string* log_source_as_string = (*source_value).GetIfString();
    if (!log_source_as_string) {
      return false;
    }
    out.source = ParseLogSource(*log_source_as_string);
    if (out.source == LogSource()) {
      return false;
    }
  }

  const base::Value* incremental_value = dict.Find("incremental");
  if (!incremental_value) {
    return false;
  }
  {
    auto temp = (*incremental_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.incremental = *temp;
  }

  const base::Value* reader_id_value = dict.Find("readerId");
  if (reader_id_value) {
    {
      auto temp = (*reader_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.reader_id = absl::nullopt;
        return false;
      }
      out.reader_id = *temp;
    }
  }

  return true;
}

// static
bool ReadLogSourceParams::Populate(
    const base::Value& value, ReadLogSourceParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ReadLogSourceParams> ReadLogSourceParams::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ReadLogSourceParams>();
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
absl::optional<ReadLogSourceParams> ReadLogSourceParams::FromValue(const base::Value::Dict& value) {
  ReadLogSourceParams out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ReadLogSourceParams> ReadLogSourceParams::FromValue(const base::Value& value) {
  ReadLogSourceParams out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ReadLogSourceParams::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("source", feedback_private::ToString(this->source));

  to_value_result.Set("incremental", this->incremental);

  if (this->reader_id) {
    to_value_result.Set("readerId", *this->reader_id);

  }

  return to_value_result;
}


ReadLogSourceResult::ReadLogSourceResult()
: reader_id(0) {}

ReadLogSourceResult::~ReadLogSourceResult() = default;
ReadLogSourceResult::ReadLogSourceResult(ReadLogSourceResult&& rhs) = default;
ReadLogSourceResult& ReadLogSourceResult::operator=(ReadLogSourceResult&& rhs) = default;
ReadLogSourceResult ReadLogSourceResult::Clone() const {
  ReadLogSourceResult out;
  out.reader_id = reader_id;
  out.log_lines = log_lines;
  return out;
}

// static
bool ReadLogSourceResult::Populate(
    const base::Value::Dict& dict, ReadLogSourceResult& out) {
  const base::Value* reader_id_value = dict.Find("readerId");
  if (!reader_id_value) {
    return false;
  }
  {
    auto temp = (*reader_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.reader_id = *temp;
  }

  const base::Value* log_lines_value = dict.Find("logLines");
  if (!log_lines_value) {
    return false;
  }
  {
    if (!(*log_lines_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*log_lines_value).GetList(), out.log_lines)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool ReadLogSourceResult::Populate(
    const base::Value& value, ReadLogSourceResult& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ReadLogSourceResult> ReadLogSourceResult::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ReadLogSourceResult>();
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
absl::optional<ReadLogSourceResult> ReadLogSourceResult::FromValue(const base::Value::Dict& value) {
  ReadLogSourceResult out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ReadLogSourceResult> ReadLogSourceResult::FromValue(const base::Value& value) {
  ReadLogSourceResult out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ReadLogSourceResult::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("readerId", this->reader_id);

  to_value_result.Set("logLines", json_schema_compiler::util::CreateValueFromArray(this->log_lines));


  return to_value_result;
}



//
// Functions
//

namespace GetUserEmail {

base::Value::List Results::Create(const std::string& email) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(email);

  return create_results;
}
}  // namespace GetUserEmail

namespace GetSystemInformation {

base::Value::List Results::Create(const std::vector<LogsMapEntry>& system_information) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(system_information));

  return create_results;
}
}  // namespace GetSystemInformation

namespace OpenFeedback {

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
    const base::Value& source_value = args[0];
    {
      const std::string* feedback_source_as_string = source_value.GetIfString();
      if (!feedback_source_as_string) {
        return absl::nullopt;
      }
      params.source = ParseFeedbackSource(*feedback_source_as_string);
      if (params.source == FeedbackSource()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace OpenFeedback

namespace SendFeedback {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 3) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& feedback_value = args[0];
    {
      if (!feedback_value.is_dict()) {
        return absl::nullopt;
      }
      if (!FeedbackInfo::Populate(feedback_value.GetDict(), params.feedback)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& load_system_info_value = args[1];
    {
      auto temp = load_system_info_value.GetIfBool();
      if (!temp.has_value()) {
        params.load_system_info = absl::nullopt;
        return absl::nullopt;
      }
      params.load_system_info = *temp;
    }
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& form_open_time_value = args[2];
    {
      auto temp = form_open_time_value.GetIfDouble();
      if (!temp.has_value()) {
        params.form_open_time = absl::nullopt;
        return absl::nullopt;
      }
      params.form_open_time = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create(const SendFeedbackResult& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace SendFeedback

namespace ReadLogSource {

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
    const base::Value& params_value = args[0];
    {
      if (!params_value.is_dict()) {
        return absl::nullopt;
      }
      if (!ReadLogSourceParams::Populate(params_value.GetDict(), params.params)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const ReadLogSourceResult& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace ReadLogSource

//
// Events
//

namespace OnFeedbackRequested {

const char kEventName[] = "feedbackPrivate.onFeedbackRequested";

base::Value::List Create(const FeedbackInfo& feedback) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((feedback).ToValue());

  return create_results;
}

}  // namespace OnFeedbackRequested

}  // namespace feedback_private
}  // namespace api
}  // namespace extensions

