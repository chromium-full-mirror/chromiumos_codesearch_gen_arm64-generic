// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/feedback_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_FEEDBACK_PRIVATE_H__
#define EXTENSIONS_COMMON_API_FEEDBACK_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace feedback_private {

//
// Types
//

struct AttachedFile {
  AttachedFile();
  ~AttachedFile();
  AttachedFile(const AttachedFile&) = delete;
  AttachedFile& operator=(const AttachedFile&) = delete;
  AttachedFile(AttachedFile&& rhs);
  AttachedFile& operator=(AttachedFile&& rhs);

  // Populates a AttachedFile object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AttachedFile& out);

  // Populates a AttachedFile object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AttachedFile& out);

  // Creates a deep copy of AttachedFile.
  AttachedFile Clone() const;

  // Creates a AttachedFile object from a base::Value, or NULL on failure.
  static std::unique_ptr<AttachedFile> FromValueDeprecated(const base::Value& value);

  // Creates a AttachedFile object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<AttachedFile> FromValue(const base::Value::Dict& value);

  // Creates a AttachedFile object from a base::Value, or nullopt on failure.
  static absl::optional<AttachedFile> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAttachedFile object.
  base::Value::Dict ToValue() const;

  struct Data {
    Data();
    ~Data();
    Data(const Data&) = delete;
    Data& operator=(const Data&) = delete;
    Data(Data&& rhs);
    Data& operator=(Data&& rhs);

    // Populates a Data object from a base::Value& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value& value, Data& out);

    // Populates a Data object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Data& out);

    // Creates a deep copy of Data.
    Data Clone() const;

    // Creates a Data object from a base::Value::Dict, or nullopt on failure.
    static absl::optional<Data> FromValue(const base::Value::Dict& value);

    // Creates a Data object from a base::Value, or nullopt on failure.
    static absl::optional<Data> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisData object.
    base::Value::Dict ToValue() const;

    base::Value::Dict additional_properties;
  };


  std::string name;

  absl::optional<Data> data;

};

struct LogsMapEntry {
  LogsMapEntry();
  ~LogsMapEntry();
  LogsMapEntry(const LogsMapEntry&) = delete;
  LogsMapEntry& operator=(const LogsMapEntry&) = delete;
  LogsMapEntry(LogsMapEntry&& rhs);
  LogsMapEntry& operator=(LogsMapEntry&& rhs);

  // Populates a LogsMapEntry object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, LogsMapEntry& out);

  // Populates a LogsMapEntry object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, LogsMapEntry& out);

  // Creates a deep copy of LogsMapEntry.
  LogsMapEntry Clone() const;

  // Creates a LogsMapEntry object from a base::Value, or NULL on failure.
  static std::unique_ptr<LogsMapEntry> FromValueDeprecated(const base::Value& value);

  // Creates a LogsMapEntry object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<LogsMapEntry> FromValue(const base::Value::Dict& value);

  // Creates a LogsMapEntry object from a base::Value, or nullopt on failure.
  static absl::optional<LogsMapEntry> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisLogsMapEntry object.
  base::Value::Dict ToValue() const;

  std::string key;

  std::string value;

};

// Supported feedback flows.
enum class FeedbackFlow {
  kNone = 0,
  kRegular,
  kLogin,
  kSadTabCrash,
  kGoogleInternal,
  kMaxValue = kGoogleInternal,
};


const char* ToString(FeedbackFlow as_enum);
FeedbackFlow ParseFeedbackFlow(base::StringPiece as_string);
std::u16string GetFeedbackFlowParseError(base::StringPiece as_string);

struct FeedbackInfo {
  FeedbackInfo();
  ~FeedbackInfo();
  FeedbackInfo(const FeedbackInfo&) = delete;
  FeedbackInfo& operator=(const FeedbackInfo&) = delete;
  FeedbackInfo(FeedbackInfo&& rhs);
  FeedbackInfo& operator=(FeedbackInfo&& rhs);

  // Populates a FeedbackInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, FeedbackInfo& out);

  // Populates a FeedbackInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, FeedbackInfo& out);

  // Creates a deep copy of FeedbackInfo.
  FeedbackInfo Clone() const;

  // Creates a FeedbackInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<FeedbackInfo> FromValueDeprecated(const base::Value& value);

  // Creates a FeedbackInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<FeedbackInfo> FromValue(const base::Value::Dict& value);

  // Creates a FeedbackInfo object from a base::Value, or nullopt on failure.
  static absl::optional<FeedbackInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisFeedbackInfo object.
  base::Value::Dict ToValue() const;

  // Screenshot to send with this feedback.
  struct Screenshot {
    Screenshot();
    ~Screenshot();
    Screenshot(const Screenshot&) = delete;
    Screenshot& operator=(const Screenshot&) = delete;
    Screenshot(Screenshot&& rhs);
    Screenshot& operator=(Screenshot&& rhs);

    // Populates a Screenshot object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Screenshot& out);

    // Populates a Screenshot object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, Screenshot& out);

    // Creates a deep copy of Screenshot.
    Screenshot Clone() const;

    // Creates a Screenshot object from a base::Value::Dict, or nullopt on
    // failure.
    static absl::optional<Screenshot> FromValue(const base::Value::Dict& value);

    // Creates a Screenshot object from a base::Value, or nullopt on failure.
    static absl::optional<Screenshot> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisScreenshot object.
    base::Value::Dict ToValue() const;

    base::Value::Dict additional_properties;
  };


  // File to attach to the feedback report.
  absl::optional<AttachedFile> attached_file;

  // An optional tag to label what type this feedback is.
  absl::optional<std::string> category_tag;

  // The feedback text describing the user issue.
  std::string description;

  // The placeholder text that will be shown in the description field when it's
  // empty.
  absl::optional<std::string> description_placeholder;

  // The e-mail of the user that initiated this feedback.
  absl::optional<std::string> email;

  // The URL of the page that this issue was being experienced on.
  absl::optional<std::string> page_url;

  // Optional product ID to override the Chrome [OS] product id that is usually
  // passed to the feedback server.
  absl::optional<int> product_id;

  // Screenshot to send with this feedback.
  absl::optional<Screenshot> screenshot;

  // Optional id for performance trace data that can be included in this report.
  absl::optional<int> trace_id;

  // An array of key/value pairs providing system information for this feedback
  // report.
  absl::optional<std::vector<LogsMapEntry>> system_information;

  // True if we have permission to add histograms to this feedback report.
  absl::optional<bool> send_histograms;

  // Optional feedback UI flow. Default is the regular user flow.
  FeedbackFlow flow;

  // TODO(rkc): Remove these once we have bindings to send blobs to Chrome. Used
  // internally to store the blob uuid after parameter customization.
  absl::optional<std::string> attached_file_blob_uuid;

  absl::optional<std::string> screenshot_blob_uuid;

  // Whether to use the system-provided window frame or custom frame controls.
  absl::optional<bool> use_system_window_frame;

  // Whether or not to send bluetooth logs with this report.
  absl::optional<bool> send_bluetooth_logs;

  // Whether or not to send tab titles with this report.
  absl::optional<bool> send_tab_titles;

  // Whether or not to send Assistant feedback to Assistant server.
  absl::optional<bool> assistant_debug_info_allowed;

  // Whether or not triggered from Assistant.
  absl::optional<bool> from_assistant;

  // Whether or not to include bluetooth logs.
  absl::optional<bool> include_bluetooth_logs;

  // Whether to show questionnaire in the report description based on detected
  // domain-related keywords (crbug/1241169).
  absl::optional<bool> show_questionnaire;

  // Whether or not triggered for Autofill.
  absl::optional<bool> from_autofill;

  // A JSON formatted string containing autofill metadata for this feedback
  // report.
  absl::optional<std::string> autofill_metadata;

  // Whether or not |autofillMetadata| should be included in the feedback report.
  absl::optional<bool> send_autofill_metadata;

};

// Possible statuses that can result from sending feedback.
enum class Status {
  kNone = 0,
  kSuccess,
  kDelayed,
  kMaxValue = kDelayed,
};


const char* ToString(Status as_enum);
Status ParseStatus(base::StringPiece as_string);
std::u16string GetStatusParseError(base::StringPiece as_string);

// Landing page types that can be shown after sending feedback.
enum class LandingPageType {
  kNone = 0,
  kNormal,
  kTechstop,
  kNoLandingPage,
  kMaxValue = kNoLandingPage,
};


const char* ToString(LandingPageType as_enum);
LandingPageType ParseLandingPageType(base::StringPiece as_string);
std::u16string GetLandingPageTypeParseError(base::StringPiece as_string);

struct SendFeedbackResult {
  SendFeedbackResult();
  ~SendFeedbackResult();
  SendFeedbackResult(const SendFeedbackResult&) = delete;
  SendFeedbackResult& operator=(const SendFeedbackResult&) = delete;
  SendFeedbackResult(SendFeedbackResult&& rhs);
  SendFeedbackResult& operator=(SendFeedbackResult&& rhs);

  // Populates a SendFeedbackResult object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SendFeedbackResult& out);

  // Populates a SendFeedbackResult object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SendFeedbackResult& out);

  // Creates a deep copy of SendFeedbackResult.
  SendFeedbackResult Clone() const;

  // Creates a SendFeedbackResult object from a base::Value, or NULL on failure.
  static std::unique_ptr<SendFeedbackResult> FromValueDeprecated(const base::Value& value);

  // Creates a SendFeedbackResult object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<SendFeedbackResult> FromValue(const base::Value::Dict& value);

  // Creates a SendFeedbackResult object from a base::Value, or nullopt on
  // failure.
  static absl::optional<SendFeedbackResult> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSendFeedbackResult object.
  base::Value::Dict ToValue() const;

  // Status of the sending of a feedback report.
  Status status;

  // The type of landing page shown to the use when the feedback report is
  // successfully sent, if one should be shown.
  LandingPageType landing_page_type;

};

// Allowed log sources on Chrome OS.
enum class LogSource {
  kNone = 0,
  kMessages,
  kUiLatest,
  kDrmModetest,
  kLsusb,
  kAtrusLog,
  kNetLog,
  kEventLog,
  kUpdateEngineLog,
  kPowerdLatest,
  kPowerdPrevious,
  kLspci,
  kIfconfig,
  kUptime,
  kMaxValue = kUptime,
};


const char* ToString(LogSource as_enum);
LogSource ParseLogSource(base::StringPiece as_string);
std::u16string GetLogSourceParseError(base::StringPiece as_string);

// Source of the feedback.
enum class FeedbackSource {
  kNone = 0,
  kQuickoffice,
  kMaxValue = kQuickoffice,
};


const char* ToString(FeedbackSource as_enum);
FeedbackSource ParseFeedbackSource(base::StringPiece as_string);
std::u16string GetFeedbackSourceParseError(base::StringPiece as_string);

struct ReadLogSourceParams {
  ReadLogSourceParams();
  ~ReadLogSourceParams();
  ReadLogSourceParams(const ReadLogSourceParams&) = delete;
  ReadLogSourceParams& operator=(const ReadLogSourceParams&) = delete;
  ReadLogSourceParams(ReadLogSourceParams&& rhs);
  ReadLogSourceParams& operator=(ReadLogSourceParams&& rhs);

  // Populates a ReadLogSourceParams object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ReadLogSourceParams& out);

  // Populates a ReadLogSourceParams object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ReadLogSourceParams& out);

  // Creates a deep copy of ReadLogSourceParams.
  ReadLogSourceParams Clone() const;

  // Creates a ReadLogSourceParams object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ReadLogSourceParams> FromValueDeprecated(const base::Value& value);

  // Creates a ReadLogSourceParams object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<ReadLogSourceParams> FromValue(const base::Value::Dict& value);

  // Creates a ReadLogSourceParams object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ReadLogSourceParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisReadLogSourceParams object.
  base::Value::Dict ToValue() const;

  // The log source from which to read.
  LogSource source;

  // For file-based log sources, read from source without closing the file handle.
  // The next time $(ref:readLogSource) is called, the file read will continue
  // where it left off. $(ref:readLogSource) can be called with
  // <code>incremental=true</code> repeatedly. To subsequently close the file
  // handle, pass in <code>incremental=false</code>.
  bool incremental;

  // To read from an existing file handle, set this to a valid
  // <code>readerId</code> value that was returned from a previous
  // $(ref:readLogSource) call. The reader must previously have been created for
  // the same value of <code>source</code>. If no <code>readerId</code> is
  // provided, $(ref:readLogSource) will attempt to open a new log source reader
  // handle.
  absl::optional<int> reader_id;

};

struct ReadLogSourceResult {
  ReadLogSourceResult();
  ~ReadLogSourceResult();
  ReadLogSourceResult(const ReadLogSourceResult&) = delete;
  ReadLogSourceResult& operator=(const ReadLogSourceResult&) = delete;
  ReadLogSourceResult(ReadLogSourceResult&& rhs);
  ReadLogSourceResult& operator=(ReadLogSourceResult&& rhs);

  // Populates a ReadLogSourceResult object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ReadLogSourceResult& out);

  // Populates a ReadLogSourceResult object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ReadLogSourceResult& out);

  // Creates a deep copy of ReadLogSourceResult.
  ReadLogSourceResult Clone() const;

  // Creates a ReadLogSourceResult object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ReadLogSourceResult> FromValueDeprecated(const base::Value& value);

  // Creates a ReadLogSourceResult object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<ReadLogSourceResult> FromValue(const base::Value::Dict& value);

  // Creates a ReadLogSourceResult object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ReadLogSourceResult> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisReadLogSourceResult object.
  base::Value::Dict ToValue() const;

  // The ID of the log source reader that was created to read from the log source.
  // If the reader was destroyed at the end of a read by passing in
  // <code>incremental=false</code>, this is always set to 0. If the call was to
  // use an existing reader with an existing ID, this will be set to the same
  // <code>readerId</code> that was passed into $(ref:readLogSource).
  int reader_id;

  // Each DOMString in this array represents one line of logging that was fetched
  // from the log source.
  std::vector<std::string> log_lines;

};


//
// Functions
//

namespace GetUserEmail {

namespace Results {

base::Value::List Create(const std::string& email);
}  // namespace Results

}  // namespace GetUserEmail

namespace GetSystemInformation {

namespace Results {

base::Value::List Create(const std::vector<LogsMapEntry>& system_information);
}  // namespace Results

}  // namespace GetSystemInformation

namespace OpenFeedback {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  FeedbackSource source;


 private:
  Params();
};

}  // namespace OpenFeedback

namespace SendFeedback {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  FeedbackInfo feedback;

  // Optional flag when present and is true, the backend should load system
  // information before sending the report. This is added to reduce user's wait
  // time when sending reports because loading system information is slow.
  absl::optional<bool> load_system_info;

  // The epoch time when the feedback form was opened. This is used for metrics.
  absl::optional<double> form_open_time;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const SendFeedbackResult& result);
}  // namespace Results

}  // namespace SendFeedback

namespace ReadLogSource {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  ReadLogSourceParams params;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const ReadLogSourceResult& result);
}  // namespace Results

}  // namespace ReadLogSource

//
// Events
//

namespace OnFeedbackRequested {

extern const char kEventName[];  // "feedbackPrivate.onFeedbackRequested"

base::Value::List Create(const FeedbackInfo& feedback);
}  // namespace OnFeedbackRequested

}  // namespace feedback_private
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_FEEDBACK_PRIVATE_H__
