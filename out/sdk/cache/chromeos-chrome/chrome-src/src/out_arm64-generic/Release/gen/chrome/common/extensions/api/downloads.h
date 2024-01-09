// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/downloads.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_DOWNLOADS_H__
#define CHROME_COMMON_EXTENSIONS_API_DOWNLOADS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace downloads {

//
// Types
//

struct HeaderNameValuePair {
  HeaderNameValuePair();
  ~HeaderNameValuePair();
  HeaderNameValuePair(const HeaderNameValuePair&) = delete;
  HeaderNameValuePair& operator=(const HeaderNameValuePair&) = delete;
  HeaderNameValuePair(HeaderNameValuePair&& rhs) noexcept;
  HeaderNameValuePair& operator=(HeaderNameValuePair&& rhs) noexcept;

  // Populates a HeaderNameValuePair object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, HeaderNameValuePair& out);

  // Populates a HeaderNameValuePair object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, HeaderNameValuePair& out);

  // Creates a deep copy of HeaderNameValuePair.
  HeaderNameValuePair Clone() const;

  // Creates a HeaderNameValuePair object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<HeaderNameValuePair> FromValue(const base::Value::Dict& value);

  // Creates a HeaderNameValuePair object from a base::Value, or nullopt on
  // failure.
  static std::optional<HeaderNameValuePair> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisHeaderNameValuePair object.
  base::Value::Dict ToValue() const;

  // Name of the HTTP header.
  std::string name;

  // Value of the HTTP header.
  std::string value;

};

// <dl><dt>uniquify</dt>     <dd>To avoid duplication, the <code>filename</code>
// is changed to     include a counter before the filename extension.</dd>
// <dt>overwrite</dt>     <dd>The existing file will be overwritten with the new
// file.</dd>     <dt>prompt</dt>     <dd>The user will be prompted with a file
// chooser dialog.</dd> </dl>
enum class FilenameConflictAction {
  kNone = 0,
  kUniquify,
  kOverwrite,
  kPrompt,
  kMaxValue = kPrompt,
};


const char* ToString(FilenameConflictAction as_enum);
FilenameConflictAction ParseFilenameConflictAction(base::StringPiece as_string);
std::u16string GetFilenameConflictActionParseError(base::StringPiece as_string);

struct FilenameSuggestion {
  FilenameSuggestion();
  ~FilenameSuggestion();
  FilenameSuggestion(const FilenameSuggestion&) = delete;
  FilenameSuggestion& operator=(const FilenameSuggestion&) = delete;
  FilenameSuggestion(FilenameSuggestion&& rhs) noexcept;
  FilenameSuggestion& operator=(FilenameSuggestion&& rhs) noexcept;

  // Populates a FilenameSuggestion object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, FilenameSuggestion& out);

  // Populates a FilenameSuggestion object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, FilenameSuggestion& out);

  // Creates a deep copy of FilenameSuggestion.
  FilenameSuggestion Clone() const;

  // Creates a FilenameSuggestion object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<FilenameSuggestion> FromValue(const base::Value::Dict& value);

  // Creates a FilenameSuggestion object from a base::Value, or nullopt on
  // failure.
  static std::optional<FilenameSuggestion> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisFilenameSuggestion object.
  base::Value::Dict ToValue() const;

  // The $(ref:DownloadItem)'s new target $(ref:DownloadItem.filename), as a path
  // relative to the user's default Downloads directory, possibly containing
  // subdirectories. Absolute paths, empty paths, and paths containing
  // back-references ".." will be ignored. <code>filename</code> is ignored if
  // there are any $(ref:onDeterminingFilename) listeners registered by any
  // extensions.
  std::string filename;

  // The action to take if <code>filename</code> already exists.
  FilenameConflictAction conflict_action;

};

enum class HttpMethod {
  kNone = 0,
  kGet,
  kPost,
  kMaxValue = kPost,
};


const char* ToString(HttpMethod as_enum);
HttpMethod ParseHttpMethod(base::StringPiece as_string);
std::u16string GetHttpMethodParseError(base::StringPiece as_string);

enum class InterruptReason {
  kNone = 0,
  kFileFailed,
  kFileAccessDenied,
  kFileNoSpace,
  kFileNameTooLong,
  kFileTooLarge,
  kFileVirusInfected,
  kFileTransientError,
  kFileBlocked,
  kFileSecurityCheckFailed,
  kFileTooShort,
  kFileHashMismatch,
  kFileSameAsSource,
  kNetworkFailed,
  kNetworkTimeout,
  kNetworkDisconnected,
  kNetworkServerDown,
  kNetworkInvalidRequest,
  kServerFailed,
  kServerNoRange,
  kServerBadContent,
  kServerUnauthorized,
  kServerCertProblem,
  kServerForbidden,
  kServerUnreachable,
  kServerContentLengthMismatch,
  kServerCrossOriginRedirect,
  kUserCanceled,
  kUserShutdown,
  kCrash,
  kMaxValue = kCrash,
};


const char* ToString(InterruptReason as_enum);
InterruptReason ParseInterruptReason(base::StringPiece as_string);
std::u16string GetInterruptReasonParseError(base::StringPiece as_string);

struct DownloadOptions {
  DownloadOptions();
  ~DownloadOptions();
  DownloadOptions(const DownloadOptions&) = delete;
  DownloadOptions& operator=(const DownloadOptions&) = delete;
  DownloadOptions(DownloadOptions&& rhs) noexcept;
  DownloadOptions& operator=(DownloadOptions&& rhs) noexcept;

  // Populates a DownloadOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DownloadOptions& out);

  // Populates a DownloadOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DownloadOptions& out);

  // Creates a deep copy of DownloadOptions.
  DownloadOptions Clone() const;

  // Creates a DownloadOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<DownloadOptions> FromValue(const base::Value::Dict& value);

  // Creates a DownloadOptions object from a base::Value, or nullopt on failure.
  static std::optional<DownloadOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDownloadOptions object.
  base::Value::Dict ToValue() const;

  // The URL to download.
  std::string url;

  // A file path relative to the Downloads directory to contain the downloaded
  // file, possibly containing subdirectories. Absolute paths, empty paths, and
  // paths containing back-references ".." will cause an error.
  // $(ref:onDeterminingFilename) allows suggesting a filename after the file's
  // MIME type and a tentative filename have been determined.
  std::optional<std::string> filename;

  // The action to take if <code>filename</code> already exists.
  FilenameConflictAction conflict_action;

  // Use a file-chooser to allow the user to select a filename regardless of
  // whether <code>filename</code> is set or already exists.
  std::optional<bool> save_as;

  // The HTTP method to use if the URL uses the HTTP[S] protocol.
  HttpMethod method;

  // Extra HTTP headers to send with the request if the URL uses the HTTP[s]
  // protocol. Each header is represented as a dictionary containing the keys
  // <code>name</code> and either <code>value</code> or <code>binaryValue</code>,
  // restricted to those allowed by XMLHttpRequest.
  std::optional<std::vector<HeaderNameValuePair>> headers;

  // Post body.
  std::optional<std::string> body;

};

// <dl><dt>file</dt>     <dd>The download's filename is suspicious.</dd>
// <dt>url</dt>     <dd>The download's URL is known to be malicious.</dd>
// <dt>content</dt>     <dd>The downloaded file is known to be malicious.</dd>
// <dt>uncommon</dt>     <dd>The download's URL is not commonly downloaded and
// could be     dangerous.</dd>     <dt>host</dt>     <dd>The download came from
// a host known to distribute malicious     binaries and is likely
// dangerous.</dd>     <dt>unwanted</dt>     <dd>The download is potentially
// unwanted or unsafe. E.g. it could make     changes to browser or computer
// settings.</dd>     <dt>safe</dt>     <dd>The download presents no known
// danger to the user's computer.</dd>     <dt>accepted</dt>     <dd>The user
// has accepted the dangerous download.</dd> </dl>
enum class DangerType {
  kNone = 0,
  kFile,
  kUrl,
  kContent,
  kUncommon,
  kHost,
  kUnwanted,
  kSafe,
  kAccepted,
  kAllowlistedByPolicy,
  kAsyncScanning,
  kAsyncLocalPasswordScanning,
  kPasswordProtected,
  kBlockedTooLarge,
  kSensitiveContentWarning,
  kSensitiveContentBlock,
  kUnsupportedFileType,
  kDeepScannedFailed,
  kDeepScannedSafe,
  kDeepScannedOpenedDangerous,
  kPromptForScanning,
  kPromptForLocalPasswordScanning,
  kAccountCompromise,
  kMaxValue = kAccountCompromise,
};


const char* ToString(DangerType as_enum);
DangerType ParseDangerType(base::StringPiece as_string);
std::u16string GetDangerTypeParseError(base::StringPiece as_string);

// <dl><dt>in_progress</dt>     <dd>The download is currently receiving data
// from the server.</dd>     <dt>interrupted</dt>     <dd>An error broke the
// connection with the file host.</dd>     <dt>complete</dt>     <dd>The
// download completed successfully.</dd> </dl>
enum class State {
  kNone = 0,
  kInProgress,
  kInterrupted,
  kComplete,
  kMaxValue = kComplete,
};


const char* ToString(State as_enum);
State ParseState(base::StringPiece as_string);
std::u16string GetStateParseError(base::StringPiece as_string);

struct DownloadItem {
  DownloadItem();
  ~DownloadItem();
  DownloadItem(const DownloadItem&) = delete;
  DownloadItem& operator=(const DownloadItem&) = delete;
  DownloadItem(DownloadItem&& rhs) noexcept;
  DownloadItem& operator=(DownloadItem&& rhs) noexcept;

  // Populates a DownloadItem object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DownloadItem& out);

  // Populates a DownloadItem object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DownloadItem& out);

  // Creates a deep copy of DownloadItem.
  DownloadItem Clone() const;

  // Creates a DownloadItem object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<DownloadItem> FromValue(const base::Value::Dict& value);

  // Creates a DownloadItem object from a base::Value, or nullopt on failure.
  static std::optional<DownloadItem> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDownloadItem object.
  base::Value::Dict ToValue() const;

  // An identifier that is persistent across browser sessions.
  int id;

  // The absolute URL that this download initiated from, before any redirects.
  std::string url;

  // The absolute URL that this download is being made from, after all redirects.
  std::string final_url;

  // Absolute URL.
  std::string referrer;

  // Absolute local path.
  std::string filename;

  // False if this download is recorded in the history, true if it is not
  // recorded.
  bool incognito;

  // Indication of whether this download is thought to be safe or known to be
  // suspicious.
  DangerType danger;

  // The file's MIME type.
  std::string mime;

  // The time when the download began in ISO 8601 format. May be passed directly
  // to the Date constructor: <code>chrome.downloads.search({},
  // function(items){items.forEach(function(item){console.log(new
  // Date(item.startTime))})})</code>
  std::string start_time;

  // The time when the download ended in ISO 8601 format. May be passed directly
  // to the Date constructor: <code>chrome.downloads.search({},
  // function(items){items.forEach(function(item){if (item.endTime)
  // console.log(new Date(item.endTime))})})</code>
  std::optional<std::string> end_time;

  // Estimated time when the download will complete in ISO 8601 format. May be
  // passed directly to the Date constructor: <code>chrome.downloads.search({},
  // function(items){items.forEach(function(item){if (item.estimatedEndTime)
  // console.log(new Date(item.estimatedEndTime))})})</code>
  std::optional<std::string> estimated_end_time;

  // Indicates whether the download is progressing, interrupted, or complete.
  State state;

  // True if the download has stopped reading data from the host, but kept the
  // connection open.
  bool paused;

  // True if the download is in progress and paused, or else if it is interrupted
  // and can be resumed starting from where it was interrupted.
  bool can_resume;

  // Why the download was interrupted. Several kinds of HTTP errors may be grouped
  // under one of the errors beginning with <code>SERVER_</code>. Errors relating
  // to the network begin with <code>NETWORK_</code>, errors relating to the
  // process of writing the file to the file system begin with <code>FILE_</code>,
  // and interruptions initiated by the user begin with <code>USER_</code>.
  InterruptReason error;

  // Number of bytes received so far from the host, without considering file
  // compression.
  double bytes_received;

  // Number of bytes in the whole file, without considering file compression, or
  // -1 if unknown.
  double total_bytes;

  // Number of bytes in the whole file post-decompression, or -1 if unknown.
  double file_size;

  // Whether the downloaded file still exists. This information may be out of date
  // because Chrome does not automatically watch for file removal. Call
  // $(ref:search)() in order to trigger the check for file existence. When the
  // existence check completes, if the file has been deleted, then an
  // $(ref:onChanged) event will fire. Note that $(ref:search)() does not wait for
  // the existence check to finish before returning, so results from
  // $(ref:search)() may not accurately reflect the file system. Also,
  // $(ref:search)() may be called as often as necessary, but will not check for
  // file existence any more frequently than once every 10 seconds.
  bool exists;

  // The identifier for the extension that initiated this download if this
  // download was initiated by an extension. Does not change once it is set.
  std::optional<std::string> by_extension_id;

  // The localized name of the extension that initiated this download if this
  // download was initiated by an extension. May change if the extension changes
  // its name or if the user changes their locale.
  std::optional<std::string> by_extension_name;

};

struct DownloadQuery {
  DownloadQuery();
  ~DownloadQuery();
  DownloadQuery(const DownloadQuery&) = delete;
  DownloadQuery& operator=(const DownloadQuery&) = delete;
  DownloadQuery(DownloadQuery&& rhs) noexcept;
  DownloadQuery& operator=(DownloadQuery&& rhs) noexcept;

  // Populates a DownloadQuery object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DownloadQuery& out);

  // Populates a DownloadQuery object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DownloadQuery& out);

  // Creates a deep copy of DownloadQuery.
  DownloadQuery Clone() const;

  // Creates a DownloadQuery object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<DownloadQuery> FromValue(const base::Value::Dict& value);

  // Creates a DownloadQuery object from a base::Value, or nullopt on failure.
  static std::optional<DownloadQuery> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDownloadQuery object.
  base::Value::Dict ToValue() const;

  // This array of search terms limits results to $(ref:DownloadItem) whose
  // <code>filename</code> or <code>url</code> or <code>finalUrl</code> contain
  // all of the search terms that do not begin with a dash '-' and none of the
  // search terms that do begin with a dash.
  std::optional<std::vector<std::string>> query;

  // Limits results to $(ref:DownloadItem) that started before the given ms since
  // the epoch.
  std::optional<std::string> started_before;

  // Limits results to $(ref:DownloadItem) that started after the given ms since
  // the epoch.
  std::optional<std::string> started_after;

  // Limits results to $(ref:DownloadItem) that ended before the given ms since
  // the epoch.
  std::optional<std::string> ended_before;

  // Limits results to $(ref:DownloadItem) that ended after the given ms since the
  // epoch.
  std::optional<std::string> ended_after;

  // Limits results to $(ref:DownloadItem) whose <code>totalBytes</code> is
  // greater than the given integer.
  std::optional<double> total_bytes_greater;

  // Limits results to $(ref:DownloadItem) whose <code>totalBytes</code> is less
  // than the given integer.
  std::optional<double> total_bytes_less;

  // Limits results to $(ref:DownloadItem) whose <code>filename</code> matches the
  // given regular expression.
  std::optional<std::string> filename_regex;

  // Limits results to $(ref:DownloadItem) whose <code>url</code> matches the
  // given regular expression.
  std::optional<std::string> url_regex;

  // Limits results to $(ref:DownloadItem) whose <code>finalUrl</code> matches the
  // given regular expression.
  std::optional<std::string> final_url_regex;

  // The maximum number of matching $(ref:DownloadItem) returned. Defaults to
  // 1000. Set to 0 in order to return all matching $(ref:DownloadItem). See
  // $(ref:search) for how to page through results.
  std::optional<int> limit;

  // Set elements of this array to $(ref:DownloadItem) properties in order to sort
  // search results. For example, setting <code>orderBy=['startTime']</code> sorts
  // the $(ref:DownloadItem) by their start time in ascending order. To specify
  // descending order, prefix with a hyphen: '-startTime'.
  std::optional<std::vector<std::string>> order_by;

  // The <code>id</code> of the $(ref:DownloadItem) to query.
  std::optional<int> id;

  // The absolute URL that this download initiated from, before any redirects.
  std::optional<std::string> url;

  // The absolute URL that this download is being made from, after all redirects.
  std::optional<std::string> final_url;

  // Absolute local path.
  std::optional<std::string> filename;

  // Indication of whether this download is thought to be safe or known to be
  // suspicious.
  DangerType danger;

  // The file's MIME type.
  std::optional<std::string> mime;

  // The time when the download began in ISO 8601 format.
  std::optional<std::string> start_time;

  // The time when the download ended in ISO 8601 format.
  std::optional<std::string> end_time;

  // Indicates whether the download is progressing, interrupted, or complete.
  State state;

  // True if the download has stopped reading data from the host, but kept the
  // connection open.
  std::optional<bool> paused;

  // Why a download was interrupted.
  InterruptReason error;

  // Number of bytes received so far from the host, without considering file
  // compression.
  std::optional<double> bytes_received;

  // Number of bytes in the whole file, without considering file compression, or
  // -1 if unknown.
  std::optional<double> total_bytes;

  // Number of bytes in the whole file post-decompression, or -1 if unknown.
  std::optional<double> file_size;

  // Whether the downloaded file exists;
  std::optional<bool> exists;

};

struct StringDelta {
  StringDelta();
  ~StringDelta();
  StringDelta(const StringDelta&) = delete;
  StringDelta& operator=(const StringDelta&) = delete;
  StringDelta(StringDelta&& rhs) noexcept;
  StringDelta& operator=(StringDelta&& rhs) noexcept;

  // Populates a StringDelta object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, StringDelta& out);

  // Populates a StringDelta object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, StringDelta& out);

  // Creates a deep copy of StringDelta.
  StringDelta Clone() const;

  // Creates a StringDelta object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<StringDelta> FromValue(const base::Value::Dict& value);

  // Creates a StringDelta object from a base::Value, or nullopt on failure.
  static std::optional<StringDelta> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisStringDelta object.
  base::Value::Dict ToValue() const;

  std::optional<std::string> previous;

  std::optional<std::string> current;

};

struct DoubleDelta {
  DoubleDelta();
  ~DoubleDelta();
  DoubleDelta(const DoubleDelta&) = delete;
  DoubleDelta& operator=(const DoubleDelta&) = delete;
  DoubleDelta(DoubleDelta&& rhs) noexcept;
  DoubleDelta& operator=(DoubleDelta&& rhs) noexcept;

  // Populates a DoubleDelta object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DoubleDelta& out);

  // Populates a DoubleDelta object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, DoubleDelta& out);

  // Creates a deep copy of DoubleDelta.
  DoubleDelta Clone() const;

  // Creates a DoubleDelta object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<DoubleDelta> FromValue(const base::Value::Dict& value);

  // Creates a DoubleDelta object from a base::Value, or nullopt on failure.
  static std::optional<DoubleDelta> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDoubleDelta object.
  base::Value::Dict ToValue() const;

  std::optional<double> previous;

  std::optional<double> current;

};

struct BooleanDelta {
  BooleanDelta();
  ~BooleanDelta();
  BooleanDelta(const BooleanDelta&) = delete;
  BooleanDelta& operator=(const BooleanDelta&) = delete;
  BooleanDelta(BooleanDelta&& rhs) noexcept;
  BooleanDelta& operator=(BooleanDelta&& rhs) noexcept;

  // Populates a BooleanDelta object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, BooleanDelta& out);

  // Populates a BooleanDelta object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, BooleanDelta& out);

  // Creates a deep copy of BooleanDelta.
  BooleanDelta Clone() const;

  // Creates a BooleanDelta object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<BooleanDelta> FromValue(const base::Value::Dict& value);

  // Creates a BooleanDelta object from a base::Value, or nullopt on failure.
  static std::optional<BooleanDelta> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisBooleanDelta object.
  base::Value::Dict ToValue() const;

  std::optional<bool> previous;

  std::optional<bool> current;

};

struct DownloadDelta {
  DownloadDelta();
  ~DownloadDelta();
  DownloadDelta(const DownloadDelta&) = delete;
  DownloadDelta& operator=(const DownloadDelta&) = delete;
  DownloadDelta(DownloadDelta&& rhs) noexcept;
  DownloadDelta& operator=(DownloadDelta&& rhs) noexcept;

  // Populates a DownloadDelta object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DownloadDelta& out);

  // Populates a DownloadDelta object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DownloadDelta& out);

  // Creates a deep copy of DownloadDelta.
  DownloadDelta Clone() const;

  // Creates a DownloadDelta object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<DownloadDelta> FromValue(const base::Value::Dict& value);

  // Creates a DownloadDelta object from a base::Value, or nullopt on failure.
  static std::optional<DownloadDelta> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDownloadDelta object.
  base::Value::Dict ToValue() const;

  // The <code>id</code> of the $(ref:DownloadItem) that changed.
  int id;

  // The change in <code>url</code>, if any.
  std::optional<StringDelta> url;

  // The change in <code>finalUrl</code>, if any.
  std::optional<StringDelta> final_url;

  // The change in <code>filename</code>, if any.
  std::optional<StringDelta> filename;

  // The change in <code>danger</code>, if any.
  std::optional<StringDelta> danger;

  // The change in <code>mime</code>, if any.
  std::optional<StringDelta> mime;

  // The change in <code>startTime</code>, if any.
  std::optional<StringDelta> start_time;

  // The change in <code>endTime</code>, if any.
  std::optional<StringDelta> end_time;

  // The change in <code>state</code>, if any.
  std::optional<StringDelta> state;

  // The change in <code>canResume</code>, if any.
  std::optional<BooleanDelta> can_resume;

  // The change in <code>paused</code>, if any.
  std::optional<BooleanDelta> paused;

  // The change in <code>error</code>, if any.
  std::optional<StringDelta> error;

  // The change in <code>totalBytes</code>, if any.
  std::optional<DoubleDelta> total_bytes;

  // The change in <code>fileSize</code>, if any.
  std::optional<DoubleDelta> file_size;

  // The change in <code>exists</code>, if any.
  std::optional<BooleanDelta> exists;

};

struct GetFileIconOptions {
  GetFileIconOptions();
  ~GetFileIconOptions();
  GetFileIconOptions(const GetFileIconOptions&) = delete;
  GetFileIconOptions& operator=(const GetFileIconOptions&) = delete;
  GetFileIconOptions(GetFileIconOptions&& rhs) noexcept;
  GetFileIconOptions& operator=(GetFileIconOptions&& rhs) noexcept;

  // Populates a GetFileIconOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetFileIconOptions& out);

  // Populates a GetFileIconOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetFileIconOptions& out);

  // Creates a deep copy of GetFileIconOptions.
  GetFileIconOptions Clone() const;

  // Creates a GetFileIconOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<GetFileIconOptions> FromValue(const base::Value::Dict& value);

  // Creates a GetFileIconOptions object from a base::Value, or nullopt on
  // failure.
  static std::optional<GetFileIconOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetFileIconOptions object.
  base::Value::Dict ToValue() const;

  // The size of the returned icon. The icon will be square with dimensions size *
  // size pixels. The default and largest size for the icon is 32x32 pixels. The
  // only supported sizes are 16 and 32. It is an error to specify any other size.
  std::optional<int> size;

};

struct UiOptions {
  UiOptions();
  ~UiOptions();
  UiOptions(const UiOptions&) = delete;
  UiOptions& operator=(const UiOptions&) = delete;
  UiOptions(UiOptions&& rhs) noexcept;
  UiOptions& operator=(UiOptions&& rhs) noexcept;

  // Populates a UiOptions object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, UiOptions& out);

  // Populates a UiOptions object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, UiOptions& out);

  // Creates a deep copy of UiOptions.
  UiOptions Clone() const;

  // Creates a UiOptions object from a base::Value::Dict, or nullopt on failure.
  static std::optional<UiOptions> FromValue(const base::Value::Dict& value);

  // Creates a UiOptions object from a base::Value, or nullopt on failure.
  static std::optional<UiOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisUiOptions object.
  base::Value::Dict ToValue() const;

  // Enable or disable the download UI.
  bool enabled;

};


//
// Functions
//

namespace Download {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // What to download and how.
  DownloadOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(int download_id);
}  // namespace Results

}  // namespace Download

namespace Search {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  DownloadQuery query;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<DownloadItem>& results);
}  // namespace Results

}  // namespace Search

namespace Pause {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The id of the download to pause.
  int download_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Pause

namespace Resume {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The id of the download to resume.
  int download_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Resume

namespace Cancel {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The id of the download to cancel.
  int download_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Cancel

namespace GetFileIcon {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The identifier for the download.
  int download_id;

  std::optional<GetFileIconOptions> options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& icon_url);
}  // namespace Results

}  // namespace GetFileIcon

namespace Open {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The identifier for the downloaded file.
  int download_id;


 private:
  Params();
};

}  // namespace Open

namespace Show {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The identifier for the downloaded file.
  int download_id;


 private:
  Params();
};

}  // namespace Show

namespace ShowDefaultFolder {

}  // namespace ShowDefaultFolder

namespace Erase {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  DownloadQuery query;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<int>& erased_ids);
}  // namespace Results

}  // namespace Erase

namespace RemoveFile {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int download_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RemoveFile

namespace AcceptDanger {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The identifier for the $(ref:DownloadItem).
  int download_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace AcceptDanger

namespace SetShelfEnabled {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  bool enabled;


 private:
  Params();
};

}  // namespace SetShelfEnabled

namespace SetUiOptions {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Encapsulate a change to the download UI.
  UiOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetUiOptions

//
// Events
//

namespace OnCreated {

extern const char kEventName[];  // "downloads.onCreated"

base::Value::List Create(const DownloadItem& download_item);
}  // namespace OnCreated

namespace OnErased {

extern const char kEventName[];  // "downloads.onErased"

// The <code>id</code> of the $(ref:DownloadItem) that was erased.
base::Value::List Create(int download_id);
}  // namespace OnErased

namespace OnChanged {

extern const char kEventName[];  // "downloads.onChanged"

base::Value::List Create(const DownloadDelta& download_delta);
}  // namespace OnChanged

namespace OnDeterminingFilename {

extern const char kEventName[];  // "downloads.onDeterminingFilename"

base::Value::List Create(const DownloadItem& download_item);
}  // namespace OnDeterminingFilename

}  // namespace downloads
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_DOWNLOADS_H__
