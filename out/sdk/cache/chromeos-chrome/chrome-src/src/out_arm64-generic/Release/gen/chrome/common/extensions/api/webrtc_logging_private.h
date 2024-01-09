// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/webrtc_logging_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_WEBRTC_LOGGING_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_WEBRTC_LOGGING_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace webrtc_logging_private {

//
// Types
//

struct MetaDataEntry {
  MetaDataEntry();
  ~MetaDataEntry();
  MetaDataEntry(const MetaDataEntry&) = delete;
  MetaDataEntry& operator=(const MetaDataEntry&) = delete;
  MetaDataEntry(MetaDataEntry&& rhs) noexcept;
  MetaDataEntry& operator=(MetaDataEntry&& rhs) noexcept;

  // Populates a MetaDataEntry object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MetaDataEntry& out);

  // Populates a MetaDataEntry object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, MetaDataEntry& out);

  // Creates a deep copy of MetaDataEntry.
  MetaDataEntry Clone() const;

  // Creates a MetaDataEntry object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<MetaDataEntry> FromValue(const base::Value::Dict& value);

  // Creates a MetaDataEntry object from a base::Value, or nullopt on failure.
  static std::optional<MetaDataEntry> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMetaDataEntry object.
  base::Value::Dict ToValue() const;

  // The meta data entry key.
  std::string key;

  // The meta data entry value.
  std::string value;

};

struct UploadResult {
  UploadResult();
  ~UploadResult();
  UploadResult(const UploadResult&) = delete;
  UploadResult& operator=(const UploadResult&) = delete;
  UploadResult(UploadResult&& rhs) noexcept;
  UploadResult& operator=(UploadResult&& rhs) noexcept;

  // Populates a UploadResult object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UploadResult& out);

  // Populates a UploadResult object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, UploadResult& out);

  // Creates a deep copy of UploadResult.
  UploadResult Clone() const;

  // Creates a UploadResult object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<UploadResult> FromValue(const base::Value::Dict& value);

  // Creates a UploadResult object from a base::Value, or nullopt on failure.
  static std::optional<UploadResult> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisUploadResult object.
  base::Value::Dict ToValue() const;

  // The report ID for the uploaded log. Will be empty if not successful.
  std::string report_id;

};

struct RequestInfo {
  RequestInfo();
  ~RequestInfo();
  RequestInfo(const RequestInfo&) = delete;
  RequestInfo& operator=(const RequestInfo&) = delete;
  RequestInfo(RequestInfo&& rhs) noexcept;
  RequestInfo& operator=(RequestInfo&& rhs) noexcept;

  // Populates a RequestInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RequestInfo& out);

  // Populates a RequestInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, RequestInfo& out);

  // Creates a deep copy of RequestInfo.
  RequestInfo Clone() const;

  // Creates a RequestInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<RequestInfo> FromValue(const base::Value::Dict& value);

  // Creates a RequestInfo object from a base::Value, or nullopt on failure.
  static std::optional<RequestInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRequestInfo object.
  base::Value::Dict ToValue() const;

  // The tab identifier from the chrome.tabs API, if the request is from a tab.
  std::optional<int> tab_id;

  // The guest process id for the requester, if the request is from a webview.
  std::optional<int> guest_process_id;

  // Use the render process of the webview in the current page. This allows an app
  // to make a request for a webview it contains. If there are more or less than 1
  // webview, this will fail with a runtime error.
  std::optional<bool> target_webview;

};

struct RecordingInfo {
  RecordingInfo();
  ~RecordingInfo();
  RecordingInfo(const RecordingInfo&) = delete;
  RecordingInfo& operator=(const RecordingInfo&) = delete;
  RecordingInfo(RecordingInfo&& rhs) noexcept;
  RecordingInfo& operator=(RecordingInfo&& rhs) noexcept;

  // Populates a RecordingInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RecordingInfo& out);

  // Populates a RecordingInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RecordingInfo& out);

  // Creates a deep copy of RecordingInfo.
  RecordingInfo Clone() const;

  // Creates a RecordingInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<RecordingInfo> FromValue(const base::Value::Dict& value);

  // Creates a RecordingInfo object from a base::Value, or nullopt on failure.
  static std::optional<RecordingInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRecordingInfo object.
  base::Value::Dict ToValue() const;

  // Absolute path prefix for the files with the audio debug recordings.
  std::string prefix_path;

  // Indicates if recording was stopped (either by a timed callback after the time
  // limit has elapsed, or by a manual call).
  bool did_stop;

  // Indicates if recording was stopped manually through a
  // stopAudioDebugRecordings() call.
  bool did_manual_stop;

};

struct StartEventLoggingResult {
  StartEventLoggingResult();
  ~StartEventLoggingResult();
  StartEventLoggingResult(const StartEventLoggingResult&) = delete;
  StartEventLoggingResult& operator=(const StartEventLoggingResult&) = delete;
  StartEventLoggingResult(StartEventLoggingResult&& rhs) noexcept;
  StartEventLoggingResult& operator=(StartEventLoggingResult&& rhs) noexcept;

  // Populates a StartEventLoggingResult object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, StartEventLoggingResult& out);

  // Populates a StartEventLoggingResult object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, StartEventLoggingResult& out);

  // Creates a deep copy of StartEventLoggingResult.
  StartEventLoggingResult Clone() const;

  // Creates a StartEventLoggingResult object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<StartEventLoggingResult> FromValue(const base::Value::Dict& value);

  // Creates a StartEventLoggingResult object from a base::Value, or nullopt on
  // failure.
  static std::optional<StartEventLoggingResult> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisStartEventLoggingResult object.
  base::Value::Dict ToValue() const;

  // The log ID. Non-empty if and only if StartEventLogging() was successful.
  std::string log_id;

};


//
// Functions
//

namespace SetMetaData {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  RequestInfo request;

  std::string security_origin;

  std::vector<MetaDataEntry> meta_data;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetMetaData

namespace Start {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  RequestInfo request;

  std::string security_origin;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Start

namespace SetUploadOnRenderClose {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  RequestInfo request;

  std::string security_origin;

  bool should_upload;


 private:
  Params();
};

}  // namespace SetUploadOnRenderClose

namespace Stop {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  RequestInfo request;

  std::string security_origin;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Stop

namespace Store {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  RequestInfo request;

  std::string security_origin;

  std::string log_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Store

namespace UploadStored {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  RequestInfo request;

  std::string security_origin;

  std::string log_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const UploadResult& result);
}  // namespace Results

}  // namespace UploadStored

namespace Upload {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  RequestInfo request;

  std::string security_origin;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const UploadResult& result);
}  // namespace Results

}  // namespace Upload

namespace Discard {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  RequestInfo request;

  std::string security_origin;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Discard

namespace StartRtpDump {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  RequestInfo request;

  std::string security_origin;

  bool incoming;

  bool outgoing;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace StartRtpDump

namespace StopRtpDump {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  RequestInfo request;

  std::string security_origin;

  bool incoming;

  bool outgoing;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace StopRtpDump

namespace StartAudioDebugRecordings {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  RequestInfo request;

  std::string security_origin;

  int seconds;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const RecordingInfo& info);
}  // namespace Results

}  // namespace StartAudioDebugRecordings

namespace StopAudioDebugRecordings {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  RequestInfo request;

  std::string security_origin;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const RecordingInfo& info);
}  // namespace Results

}  // namespace StopAudioDebugRecordings

namespace StartEventLogging {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  RequestInfo request;

  std::string security_origin;

  std::string session_id;

  int max_log_size_bytes;

  int output_period_ms;

  int web_app_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const StartEventLoggingResult& result);
}  // namespace Results

}  // namespace StartEventLogging

namespace GetLogsDirectory {

namespace Results {

struct Entry {
  Entry();
  ~Entry();
  Entry(const Entry&) = delete;
  Entry& operator=(const Entry&) = delete;
  Entry(Entry&& rhs) noexcept;
  Entry& operator=(Entry&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisEntry object.
  base::Value::Dict ToValue() const;

  base::Value::Dict additional_properties;
};


base::Value::List Create(const Entry& entry);
}  // namespace Results

}  // namespace GetLogsDirectory

}  // namespace webrtc_logging_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_WEBRTC_LOGGING_PRIVATE_H__
