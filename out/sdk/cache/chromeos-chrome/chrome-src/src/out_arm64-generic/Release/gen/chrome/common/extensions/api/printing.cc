// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/printing.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/printing.h"

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
#include "extensions/common/api/printer_provider.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace printing {
//
// Properties
//

const int MAX_SUBMIT_JOB_CALLS_PER_MINUTE = 40;

const int MAX_GET_PRINTER_INFO_CALLS_PER_MINUTE = 20;

//
// Types
//

SubmitJobRequest::SubmitJobRequest()
 {}

SubmitJobRequest::~SubmitJobRequest() = default;
SubmitJobRequest::SubmitJobRequest(SubmitJobRequest&& rhs) noexcept = default;
SubmitJobRequest& SubmitJobRequest::operator=(SubmitJobRequest&& rhs) noexcept = default;
SubmitJobRequest SubmitJobRequest::Clone() const {
  SubmitJobRequest out;
  out.job = job.Clone();
  out.document_blob_uuid = document_blob_uuid;
  return out;
}

// static
bool SubmitJobRequest::Populate(
    const base::Value::Dict& dict, SubmitJobRequest& out) {
  const base::Value* job_value = dict.Find("job");
  if (!job_value) {
    return false;
  }
  {
    if (!(*job_value).is_dict()) {
      return false;
    }
    if (!extensions::api::printer_provider::PrintJob::Populate((*job_value).GetDict(), out.job)) {
      return false;
    }
  }

  const base::Value* document_blob_uuid_value = dict.Find("documentBlobUuid");
  if (document_blob_uuid_value) {
    {
      auto* temp = (*document_blob_uuid_value).GetIfString();
      if (!temp) {
        out.document_blob_uuid = std::nullopt;
        return false;
      }
      out.document_blob_uuid = *temp;
    }
  }

  return true;
}

// static
bool SubmitJobRequest::Populate(
    const base::Value& value, SubmitJobRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SubmitJobRequest> SubmitJobRequest::FromValue(const base::Value::Dict& value) {
  SubmitJobRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SubmitJobRequest> SubmitJobRequest::FromValue(const base::Value& value) {
  SubmitJobRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SubmitJobRequest::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("job", (this->job).ToValue());

  if (this->document_blob_uuid) {
    to_value_result.Set("documentBlobUuid", *this->document_blob_uuid);

  }

  return to_value_result;
}


const char* ToString(SubmitJobStatus enum_param) {
  switch (enum_param) {
    case SubmitJobStatus::kOk:
      return "OK";
    case SubmitJobStatus::kUserRejected:
      return "USER_REJECTED";
    case SubmitJobStatus::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

SubmitJobStatus ParseSubmitJobStatus(base::StringPiece enum_string) {
  if (enum_string == "OK")
    return SubmitJobStatus::kOk;
  if (enum_string == "USER_REJECTED")
    return SubmitJobStatus::kUserRejected;
  return SubmitJobStatus::kNone;
}

std::u16string GetSubmitJobStatusParseError(base::StringPiece enum_string) {
  return u"expected \"OK\" or \"USER_REJECTED\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


SubmitJobResponse::SubmitJobResponse()
: status() {}

SubmitJobResponse::~SubmitJobResponse() = default;
SubmitJobResponse::SubmitJobResponse(SubmitJobResponse&& rhs) noexcept = default;
SubmitJobResponse& SubmitJobResponse::operator=(SubmitJobResponse&& rhs) noexcept = default;
SubmitJobResponse SubmitJobResponse::Clone() const {
  SubmitJobResponse out;
  out.status = status;
  out.job_id = job_id;
  return out;
}

// static
bool SubmitJobResponse::Populate(
    const base::Value::Dict& dict, SubmitJobResponse& out) {
  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    const std::string* submit_job_status_as_string = (*status_value).GetIfString();
    if (!submit_job_status_as_string) {
      return false;
    }
    out.status = ParseSubmitJobStatus(*submit_job_status_as_string);
    if (out.status == SubmitJobStatus()) {
      return false;
    }
  }

  const base::Value* job_id_value = dict.Find("jobId");
  if (job_id_value) {
    {
      auto* temp = (*job_id_value).GetIfString();
      if (!temp) {
        out.job_id = std::nullopt;
        return false;
      }
      out.job_id = *temp;
    }
  }

  return true;
}

// static
bool SubmitJobResponse::Populate(
    const base::Value& value, SubmitJobResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SubmitJobResponse> SubmitJobResponse::FromValue(const base::Value::Dict& value) {
  SubmitJobResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SubmitJobResponse> SubmitJobResponse::FromValue(const base::Value& value) {
  SubmitJobResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SubmitJobResponse::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("status", printing::ToString(this->status));

  if (this->job_id) {
    to_value_result.Set("jobId", *this->job_id);

  }

  return to_value_result;
}


const char* ToString(PrinterSource enum_param) {
  switch (enum_param) {
    case PrinterSource::kUser:
      return "USER";
    case PrinterSource::kPolicy:
      return "POLICY";
    case PrinterSource::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

PrinterSource ParsePrinterSource(base::StringPiece enum_string) {
  if (enum_string == "USER")
    return PrinterSource::kUser;
  if (enum_string == "POLICY")
    return PrinterSource::kPolicy;
  return PrinterSource::kNone;
}

std::u16string GetPrinterSourceParseError(base::StringPiece enum_string) {
  return u"expected \"USER\" or \"POLICY\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


Printer::Printer()
: source(),
is_default(false) {}

Printer::~Printer() = default;
Printer::Printer(Printer&& rhs) noexcept = default;
Printer& Printer::operator=(Printer&& rhs) noexcept = default;
Printer Printer::Clone() const {
  Printer out;
  out.id = id;
  out.name = name;
  out.description = description;
  out.uri = uri;
  out.source = source;
  out.is_default = is_default;
  out.recently_used_rank = recently_used_rank;
  return out;
}

// static
bool Printer::Populate(
    const base::Value::Dict& dict, Printer& out) {
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

  const base::Value* uri_value = dict.Find("uri");
  if (!uri_value) {
    return false;
  }
  {
    auto* temp = (*uri_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.uri = *temp;
  }

  const base::Value* source_value = dict.Find("source");
  if (!source_value) {
    return false;
  }
  {
    const std::string* printer_source_as_string = (*source_value).GetIfString();
    if (!printer_source_as_string) {
      return false;
    }
    out.source = ParsePrinterSource(*printer_source_as_string);
    if (out.source == PrinterSource()) {
      return false;
    }
  }

  const base::Value* is_default_value = dict.Find("isDefault");
  if (!is_default_value) {
    return false;
  }
  {
    auto temp = (*is_default_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_default = *temp;
  }

  const base::Value* recently_used_rank_value = dict.Find("recentlyUsedRank");
  if (recently_used_rank_value) {
    {
      auto temp = (*recently_used_rank_value).GetIfInt();
      if (!temp.has_value()) {
        out.recently_used_rank = std::nullopt;
        return false;
      }
      out.recently_used_rank = *temp;
    }
  }

  return true;
}

// static
bool Printer::Populate(
    const base::Value& value, Printer& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Printer> Printer::FromValue(const base::Value::Dict& value) {
  Printer out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Printer> Printer::FromValue(const base::Value& value) {
  Printer out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Printer::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("name", this->name);

  to_value_result.Set("description", this->description);

  to_value_result.Set("uri", this->uri);

  to_value_result.Set("source", printing::ToString(this->source));

  to_value_result.Set("isDefault", this->is_default);

  if (this->recently_used_rank) {
    to_value_result.Set("recentlyUsedRank", *this->recently_used_rank);

  }

  return to_value_result;
}


const char* ToString(PrinterStatus enum_param) {
  switch (enum_param) {
    case PrinterStatus::kDoorOpen:
      return "DOOR_OPEN";
    case PrinterStatus::kTrayMissing:
      return "TRAY_MISSING";
    case PrinterStatus::kOutOfInk:
      return "OUT_OF_INK";
    case PrinterStatus::kOutOfPaper:
      return "OUT_OF_PAPER";
    case PrinterStatus::kOutputFull:
      return "OUTPUT_FULL";
    case PrinterStatus::kPaperJam:
      return "PAPER_JAM";
    case PrinterStatus::kGenericIssue:
      return "GENERIC_ISSUE";
    case PrinterStatus::kStopped:
      return "STOPPED";
    case PrinterStatus::kUnreachable:
      return "UNREACHABLE";
    case PrinterStatus::kExpiredCertificate:
      return "EXPIRED_CERTIFICATE";
    case PrinterStatus::kAvailable:
      return "AVAILABLE";
    case PrinterStatus::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

PrinterStatus ParsePrinterStatus(base::StringPiece enum_string) {
  if (enum_string == "DOOR_OPEN")
    return PrinterStatus::kDoorOpen;
  if (enum_string == "TRAY_MISSING")
    return PrinterStatus::kTrayMissing;
  if (enum_string == "OUT_OF_INK")
    return PrinterStatus::kOutOfInk;
  if (enum_string == "OUT_OF_PAPER")
    return PrinterStatus::kOutOfPaper;
  if (enum_string == "OUTPUT_FULL")
    return PrinterStatus::kOutputFull;
  if (enum_string == "PAPER_JAM")
    return PrinterStatus::kPaperJam;
  if (enum_string == "GENERIC_ISSUE")
    return PrinterStatus::kGenericIssue;
  if (enum_string == "STOPPED")
    return PrinterStatus::kStopped;
  if (enum_string == "UNREACHABLE")
    return PrinterStatus::kUnreachable;
  if (enum_string == "EXPIRED_CERTIFICATE")
    return PrinterStatus::kExpiredCertificate;
  if (enum_string == "AVAILABLE")
    return PrinterStatus::kAvailable;
  return PrinterStatus::kNone;
}

std::u16string GetPrinterStatusParseError(base::StringPiece enum_string) {
  return u"expected \"DOOR_OPEN\" or \"TRAY_MISSING\" or \"OUT_OF_INK\" or \"OUT_OF_PAPER\" or \"OUTPUT_FULL\" or \"PAPER_JAM\" or \"GENERIC_ISSUE\" or \"STOPPED\" or \"UNREACHABLE\" or \"EXPIRED_CERTIFICATE\" or \"AVAILABLE\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


GetPrinterInfoResponse::Capabilities::Capabilities()
 {}

GetPrinterInfoResponse::Capabilities::~Capabilities() = default;
GetPrinterInfoResponse::Capabilities::Capabilities(Capabilities&& rhs) noexcept = default;
GetPrinterInfoResponse::Capabilities& GetPrinterInfoResponse::Capabilities::operator=(Capabilities&& rhs) noexcept = default;
GetPrinterInfoResponse::Capabilities GetPrinterInfoResponse::Capabilities::Clone() const {
  Capabilities out;
  return out;
}

// static
bool GetPrinterInfoResponse::Capabilities::Populate(
    const base::Value::Dict& dict, Capabilities& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool GetPrinterInfoResponse::Capabilities::Populate(
    const base::Value& value, Capabilities& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GetPrinterInfoResponse::Capabilities> GetPrinterInfoResponse::Capabilities::FromValue(const base::Value::Dict& value) {
  Capabilities out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GetPrinterInfoResponse::Capabilities> GetPrinterInfoResponse::Capabilities::FromValue(const base::Value& value) {
  Capabilities out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict GetPrinterInfoResponse::Capabilities::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



GetPrinterInfoResponse::GetPrinterInfoResponse()
: status() {}

GetPrinterInfoResponse::~GetPrinterInfoResponse() = default;
GetPrinterInfoResponse::GetPrinterInfoResponse(GetPrinterInfoResponse&& rhs) noexcept = default;
GetPrinterInfoResponse& GetPrinterInfoResponse::operator=(GetPrinterInfoResponse&& rhs) noexcept = default;
GetPrinterInfoResponse GetPrinterInfoResponse::Clone() const {
  GetPrinterInfoResponse out;
  if (capabilities) {
    out.capabilities = capabilities->Clone();
  }
  out.status = status;
  return out;
}

// static
bool GetPrinterInfoResponse::Populate(
    const base::Value::Dict& dict, GetPrinterInfoResponse& out) {
  const base::Value* capabilities_value = dict.Find("capabilities");
  if (capabilities_value) {
    {
      if (!(*capabilities_value).is_dict()) {
        return false;
      }
      else {
        Capabilities temp;
        if (!Capabilities::Populate((*capabilities_value).GetDict(), temp))
          return false;
        out.capabilities = std::move(temp);
      }
    }
  }

  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    const std::string* printer_status_as_string = (*status_value).GetIfString();
    if (!printer_status_as_string) {
      return false;
    }
    out.status = ParsePrinterStatus(*printer_status_as_string);
    if (out.status == PrinterStatus()) {
      return false;
    }
  }

  return true;
}

// static
bool GetPrinterInfoResponse::Populate(
    const base::Value& value, GetPrinterInfoResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GetPrinterInfoResponse> GetPrinterInfoResponse::FromValue(const base::Value::Dict& value) {
  GetPrinterInfoResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GetPrinterInfoResponse> GetPrinterInfoResponse::FromValue(const base::Value& value) {
  GetPrinterInfoResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict GetPrinterInfoResponse::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->capabilities) {
    to_value_result.Set("capabilities", (this->capabilities)->ToValue());

  }
  to_value_result.Set("status", printing::ToString(this->status));


  return to_value_result;
}


const char* ToString(JobStatus enum_param) {
  switch (enum_param) {
    case JobStatus::kPending:
      return "PENDING";
    case JobStatus::kInProgress:
      return "IN_PROGRESS";
    case JobStatus::kFailed:
      return "FAILED";
    case JobStatus::kCanceled:
      return "CANCELED";
    case JobStatus::kPrinted:
      return "PRINTED";
    case JobStatus::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

JobStatus ParseJobStatus(base::StringPiece enum_string) {
  if (enum_string == "PENDING")
    return JobStatus::kPending;
  if (enum_string == "IN_PROGRESS")
    return JobStatus::kInProgress;
  if (enum_string == "FAILED")
    return JobStatus::kFailed;
  if (enum_string == "CANCELED")
    return JobStatus::kCanceled;
  if (enum_string == "PRINTED")
    return JobStatus::kPrinted;
  return JobStatus::kNone;
}

std::u16string GetJobStatusParseError(base::StringPiece enum_string) {
  return u"expected \"PENDING\" or \"IN_PROGRESS\" or \"FAILED\" or \"CANCELED\" or \"PRINTED\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



//
// Functions
//

namespace SubmitJob {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return std::nullopt;
      }
      if (!SubmitJobRequest::Populate(request_value.GetDict(), params.request)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const SubmitJobResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace SubmitJob

namespace CancelJob {

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
    const base::Value& job_id_value = args[0];
    {
      auto* temp = job_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.job_id = *temp;
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
}  // namespace CancelJob

namespace GetPrinters {

base::Value::List Results::Create(const std::vector<Printer>& printers) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(printers));

  return create_results;
}
}  // namespace GetPrinters

namespace GetPrinterInfo {

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
    const base::Value& printer_id_value = args[0];
    {
      auto* temp = printer_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.printer_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const GetPrinterInfoResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace GetPrinterInfo

//
// Events
//

namespace OnJobStatusChanged {

const char kEventName[] = "printing.onJobStatusChanged";

base::Value::List Create(const std::string& job_id, const JobStatus& status) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(job_id);

  create_results.Append(printing::ToString(status));

  return create_results;
}

}  // namespace OnJobStatusChanged

}  // namespace printing
}  // namespace api
}  // namespace extensions

