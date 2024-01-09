// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/printing.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_PRINTING_H__
#define CHROME_COMMON_EXTENSIONS_API_PRINTING_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"
#include "extensions/common/api/printer_provider.h"


namespace extensions {
namespace api {
namespace printing {

//
// Properties
//

// The maximum number of times that $(ref:submitJob) can be called per minute.
extern const int MAX_SUBMIT_JOB_CALLS_PER_MINUTE;

// The maximum number of times that $(ref:getPrinterInfo) can be called per
// minute.
extern const int MAX_GET_PRINTER_INFO_CALLS_PER_MINUTE;

//
// Types
//

struct SubmitJobRequest {
  SubmitJobRequest();
  ~SubmitJobRequest();
  SubmitJobRequest(const SubmitJobRequest&) = delete;
  SubmitJobRequest& operator=(const SubmitJobRequest&) = delete;
  SubmitJobRequest(SubmitJobRequest&& rhs) noexcept;
  SubmitJobRequest& operator=(SubmitJobRequest&& rhs) noexcept;

  // Populates a SubmitJobRequest object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SubmitJobRequest& out);

  // Populates a SubmitJobRequest object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SubmitJobRequest& out);

  // Creates a deep copy of SubmitJobRequest.
  SubmitJobRequest Clone() const;

  // Creates a SubmitJobRequest object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<SubmitJobRequest> FromValue(const base::Value::Dict& value);

  // Creates a SubmitJobRequest object from a base::Value, or nullopt on
  // failure.
  static std::optional<SubmitJobRequest> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSubmitJobRequest object.
  base::Value::Dict ToValue() const;

  // The print job to be submitted. The only supported content type is
  // "application/pdf", and the <a
  // href="https://developers.google.com/cloud-print/docs/cdd#cjt">Cloud Job
  // Ticket</a> shouldn't include <code>FitToPageTicketItem</code>,
  // <code>PageRangeTicketItem</code>, <code>ReverseOrderTicketItem</code> and
  // <code>VendorTicketItem</code> fields since they are irrelevant for native
  // printing. All other fields must be present.
  extensions::api::printer_provider::PrintJob job;

  // Used internally to store the blob uuid after parameter customization and
  // shouldn't be populated by the extension.
  std::optional<std::string> document_blob_uuid;

};

// The status of $(ref:submitJob) request.
enum class SubmitJobStatus {
  kNone = 0,
  kOk,
  kUserRejected,
  kMaxValue = kUserRejected,
};


const char* ToString(SubmitJobStatus as_enum);
SubmitJobStatus ParseSubmitJobStatus(base::StringPiece as_string);
std::u16string GetSubmitJobStatusParseError(base::StringPiece as_string);

struct SubmitJobResponse {
  SubmitJobResponse();
  ~SubmitJobResponse();
  SubmitJobResponse(const SubmitJobResponse&) = delete;
  SubmitJobResponse& operator=(const SubmitJobResponse&) = delete;
  SubmitJobResponse(SubmitJobResponse&& rhs) noexcept;
  SubmitJobResponse& operator=(SubmitJobResponse&& rhs) noexcept;

  // Populates a SubmitJobResponse object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SubmitJobResponse& out);

  // Populates a SubmitJobResponse object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SubmitJobResponse& out);

  // Creates a deep copy of SubmitJobResponse.
  SubmitJobResponse Clone() const;

  // Creates a SubmitJobResponse object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<SubmitJobResponse> FromValue(const base::Value::Dict& value);

  // Creates a SubmitJobResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<SubmitJobResponse> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSubmitJobResponse object.
  base::Value::Dict ToValue() const;

  // The status of the request.
  SubmitJobStatus status;

  // The id of created print job. This is a unique identifier among all print jobs
  // on the device. If status is not OK, jobId will be null.
  std::optional<std::string> job_id;

};

// The source of the printer.
enum class PrinterSource {
  kNone = 0,
  kUser,
  kPolicy,
  kMaxValue = kPolicy,
};


const char* ToString(PrinterSource as_enum);
PrinterSource ParsePrinterSource(base::StringPiece as_string);
std::u16string GetPrinterSourceParseError(base::StringPiece as_string);

struct Printer {
  Printer();
  ~Printer();
  Printer(const Printer&) = delete;
  Printer& operator=(const Printer&) = delete;
  Printer(Printer&& rhs) noexcept;
  Printer& operator=(Printer&& rhs) noexcept;

  // Populates a Printer object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Printer& out);

  // Populates a Printer object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Printer& out);

  // Creates a deep copy of Printer.
  Printer Clone() const;

  // Creates a Printer object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Printer> FromValue(const base::Value::Dict& value);

  // Creates a Printer object from a base::Value, or nullopt on failure.
  static std::optional<Printer> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPrinter object.
  base::Value::Dict ToValue() const;

  // The printer's identifier; guaranteed to be unique among printers on the
  // device.
  std::string id;

  // The name of the printer.
  std::string name;

  // The human-readable description of the printer.
  std::string description;

  // The printer URI. This can be used by extensions to choose the printer for the
  // user.
  std::string uri;

  // The source of the printer (user or policy configured).
  PrinterSource source;

  // The flag which shows whether the printer fits <a
  // href="https://chromium.org/administrators/policy-list-3#DefaultPrinterSelection"> DefaultPrinterSelection</a> rules. Note that several printers could be flagged.
  bool is_default;

  // The value showing how recent the printer was used for printing from Chrome.
  // The lower the value is the more recent the printer was used. The minimum
  // value is 0. Missing value indicates that the printer wasn't used recently.
  // This value is guaranteed to be unique amongst printers.
  std::optional<int> recently_used_rank;

};

// The status of the printer.
enum class PrinterStatus {
  kNone = 0,
  kDoorOpen,
  kTrayMissing,
  kOutOfInk,
  kOutOfPaper,
  kOutputFull,
  kPaperJam,
  kGenericIssue,
  kStopped,
  kUnreachable,
  kExpiredCertificate,
  kAvailable,
  kMaxValue = kAvailable,
};


const char* ToString(PrinterStatus as_enum);
PrinterStatus ParsePrinterStatus(base::StringPiece as_string);
std::u16string GetPrinterStatusParseError(base::StringPiece as_string);

struct GetPrinterInfoResponse {
  GetPrinterInfoResponse();
  ~GetPrinterInfoResponse();
  GetPrinterInfoResponse(const GetPrinterInfoResponse&) = delete;
  GetPrinterInfoResponse& operator=(const GetPrinterInfoResponse&) = delete;
  GetPrinterInfoResponse(GetPrinterInfoResponse&& rhs) noexcept;
  GetPrinterInfoResponse& operator=(GetPrinterInfoResponse&& rhs) noexcept;

  // Populates a GetPrinterInfoResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetPrinterInfoResponse& out);

  // Populates a GetPrinterInfoResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetPrinterInfoResponse& out);

  // Creates a deep copy of GetPrinterInfoResponse.
  GetPrinterInfoResponse Clone() const;

  // Creates a GetPrinterInfoResponse object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<GetPrinterInfoResponse> FromValue(const base::Value::Dict& value);

  // Creates a GetPrinterInfoResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<GetPrinterInfoResponse> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetPrinterInfoResponse object.
  base::Value::Dict ToValue() const;

  // Printer capabilities in <a
  // href="https://developers.google.com/cloud-print/docs/cdd#cdd"> CDD
  // format</a>. The property may be missing.
  struct Capabilities {
    Capabilities();
    ~Capabilities();
    Capabilities(const Capabilities&) = delete;
    Capabilities& operator=(const Capabilities&) = delete;
    Capabilities(Capabilities&& rhs) noexcept;
    Capabilities& operator=(Capabilities&& rhs) noexcept;

    // Populates a Capabilities object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, Capabilities& out);

    // Populates a Capabilities object from a Dict& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value::Dict& value, Capabilities& out);

    // Creates a deep copy of Capabilities.
    Capabilities Clone() const;

    // Creates a Capabilities object from a base::Value::Dict, or nullopt on
    // failure.
    static std::optional<Capabilities> FromValue(const base::Value::Dict& value);

    // Creates a Capabilities object from a base::Value, or nullopt on failure.
    static std::optional<Capabilities> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisCapabilities object.
    base::Value::Dict ToValue() const;

    base::Value::Dict additional_properties;
  };


  // Printer capabilities in <a
  // href="https://developers.google.com/cloud-print/docs/cdd#cdd"> CDD
  // format</a>. The property may be missing.
  std::optional<Capabilities> capabilities;

  // The status of the printer.
  PrinterStatus status;

};

// Status of the print job.
enum class JobStatus {
  kNone = 0,
  kPending,
  kInProgress,
  kFailed,
  kCanceled,
  kPrinted,
  kMaxValue = kPrinted,
};


const char* ToString(JobStatus as_enum);
JobStatus ParseJobStatus(base::StringPiece as_string);
std::u16string GetJobStatusParseError(base::StringPiece as_string);


//
// Functions
//

namespace SubmitJob {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  SubmitJobRequest request;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const SubmitJobResponse& response);
}  // namespace Results

}  // namespace SubmitJob

namespace CancelJob {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The id of the print job to cancel. This should be the same id received in a
  // $(ref:SubmitJobResponse).
  std::string job_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace CancelJob

namespace GetPrinters {

namespace Results {

base::Value::List Create(const std::vector<Printer>& printers);
}  // namespace Results

}  // namespace GetPrinters

namespace GetPrinterInfo {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string printer_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const GetPrinterInfoResponse& response);
}  // namespace Results

}  // namespace GetPrinterInfo

//
// Events
//

namespace OnJobStatusChanged {

extern const char kEventName[];  // "printing.onJobStatusChanged"

base::Value::List Create(const std::string& job_id, const JobStatus& status);
}  // namespace OnJobStatusChanged

}  // namespace printing
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_PRINTING_H__
