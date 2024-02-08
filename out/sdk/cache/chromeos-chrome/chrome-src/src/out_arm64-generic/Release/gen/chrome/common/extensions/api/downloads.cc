// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/downloads.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/downloads.h"

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
namespace downloads {
//
// Types
//

HeaderNameValuePair::HeaderNameValuePair()
 {}

HeaderNameValuePair::~HeaderNameValuePair() = default;
HeaderNameValuePair::HeaderNameValuePair(HeaderNameValuePair&& rhs) noexcept = default;
HeaderNameValuePair& HeaderNameValuePair::operator=(HeaderNameValuePair&& rhs) noexcept = default;
HeaderNameValuePair HeaderNameValuePair::Clone() const {
  HeaderNameValuePair out;
  out.name = name;
  out.value = value;
  return out;
}

// static
bool HeaderNameValuePair::Populate(
    const base::Value::Dict& dict, HeaderNameValuePair& out) {
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
bool HeaderNameValuePair::Populate(
    const base::Value& value, HeaderNameValuePair& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<HeaderNameValuePair> HeaderNameValuePair::FromValue(const base::Value::Dict& value) {
  HeaderNameValuePair out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<HeaderNameValuePair> HeaderNameValuePair::FromValue(const base::Value& value) {
  HeaderNameValuePair out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict HeaderNameValuePair::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("name", this->name);

  to_value_result.Set("value", this->value);


  return to_value_result;
}


const char* ToString(FilenameConflictAction enum_param) {
  switch (enum_param) {
    case FilenameConflictAction::kUniquify:
      return "uniquify";
    case FilenameConflictAction::kOverwrite:
      return "overwrite";
    case FilenameConflictAction::kPrompt:
      return "prompt";
    case FilenameConflictAction::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

FilenameConflictAction ParseFilenameConflictAction(base::StringPiece enum_string) {
  if (enum_string == "uniquify")
    return FilenameConflictAction::kUniquify;
  if (enum_string == "overwrite")
    return FilenameConflictAction::kOverwrite;
  if (enum_string == "prompt")
    return FilenameConflictAction::kPrompt;
  return FilenameConflictAction::kNone;
}

std::u16string GetFilenameConflictActionParseError(base::StringPiece enum_string) {
  return u"expected \"uniquify\" or \"overwrite\" or \"prompt\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


FilenameSuggestion::FilenameSuggestion()
: conflict_action() {}

FilenameSuggestion::~FilenameSuggestion() = default;
FilenameSuggestion::FilenameSuggestion(FilenameSuggestion&& rhs) noexcept = default;
FilenameSuggestion& FilenameSuggestion::operator=(FilenameSuggestion&& rhs) noexcept = default;
FilenameSuggestion FilenameSuggestion::Clone() const {
  FilenameSuggestion out;
  out.filename = filename;
  out.conflict_action = conflict_action;
  return out;
}

// static
bool FilenameSuggestion::Populate(
    const base::Value::Dict& dict, FilenameSuggestion& out) {
  out.conflict_action = FilenameConflictAction();
  const base::Value* filename_value = dict.Find("filename");
  if (!filename_value) {
    return false;
  }
  {
    auto* temp = (*filename_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.filename = *temp;
  }

  const base::Value* conflict_action_value = dict.Find("conflictAction");
  if (conflict_action_value) {
    {
      const std::string* filename_conflict_action_as_string = (*conflict_action_value).GetIfString();
      if (!filename_conflict_action_as_string) {
        return false;
      }
      out.conflict_action = ParseFilenameConflictAction(*filename_conflict_action_as_string);
      if (out.conflict_action == FilenameConflictAction()) {
        return false;
      }
    }
    } else {
    out.conflict_action = FilenameConflictAction();
  }

  return true;
}

// static
bool FilenameSuggestion::Populate(
    const base::Value& value, FilenameSuggestion& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<FilenameSuggestion> FilenameSuggestion::FromValue(const base::Value::Dict& value) {
  FilenameSuggestion out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<FilenameSuggestion> FilenameSuggestion::FromValue(const base::Value& value) {
  FilenameSuggestion out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict FilenameSuggestion::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("filename", this->filename);

  if (this->conflict_action != FilenameConflictAction()) {
    to_value_result.Set("conflictAction", downloads::ToString(this->conflict_action));

  }

  return to_value_result;
}


const char* ToString(HttpMethod enum_param) {
  switch (enum_param) {
    case HttpMethod::kGet:
      return "GET";
    case HttpMethod::kPost:
      return "POST";
    case HttpMethod::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

HttpMethod ParseHttpMethod(base::StringPiece enum_string) {
  if (enum_string == "GET")
    return HttpMethod::kGet;
  if (enum_string == "POST")
    return HttpMethod::kPost;
  return HttpMethod::kNone;
}

std::u16string GetHttpMethodParseError(base::StringPiece enum_string) {
  return u"expected \"GET\" or \"POST\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(InterruptReason enum_param) {
  switch (enum_param) {
    case InterruptReason::kFileFailed:
      return "FILE_FAILED";
    case InterruptReason::kFileAccessDenied:
      return "FILE_ACCESS_DENIED";
    case InterruptReason::kFileNoSpace:
      return "FILE_NO_SPACE";
    case InterruptReason::kFileNameTooLong:
      return "FILE_NAME_TOO_LONG";
    case InterruptReason::kFileTooLarge:
      return "FILE_TOO_LARGE";
    case InterruptReason::kFileVirusInfected:
      return "FILE_VIRUS_INFECTED";
    case InterruptReason::kFileTransientError:
      return "FILE_TRANSIENT_ERROR";
    case InterruptReason::kFileBlocked:
      return "FILE_BLOCKED";
    case InterruptReason::kFileSecurityCheckFailed:
      return "FILE_SECURITY_CHECK_FAILED";
    case InterruptReason::kFileTooShort:
      return "FILE_TOO_SHORT";
    case InterruptReason::kFileHashMismatch:
      return "FILE_HASH_MISMATCH";
    case InterruptReason::kFileSameAsSource:
      return "FILE_SAME_AS_SOURCE";
    case InterruptReason::kNetworkFailed:
      return "NETWORK_FAILED";
    case InterruptReason::kNetworkTimeout:
      return "NETWORK_TIMEOUT";
    case InterruptReason::kNetworkDisconnected:
      return "NETWORK_DISCONNECTED";
    case InterruptReason::kNetworkServerDown:
      return "NETWORK_SERVER_DOWN";
    case InterruptReason::kNetworkInvalidRequest:
      return "NETWORK_INVALID_REQUEST";
    case InterruptReason::kServerFailed:
      return "SERVER_FAILED";
    case InterruptReason::kServerNoRange:
      return "SERVER_NO_RANGE";
    case InterruptReason::kServerBadContent:
      return "SERVER_BAD_CONTENT";
    case InterruptReason::kServerUnauthorized:
      return "SERVER_UNAUTHORIZED";
    case InterruptReason::kServerCertProblem:
      return "SERVER_CERT_PROBLEM";
    case InterruptReason::kServerForbidden:
      return "SERVER_FORBIDDEN";
    case InterruptReason::kServerUnreachable:
      return "SERVER_UNREACHABLE";
    case InterruptReason::kServerContentLengthMismatch:
      return "SERVER_CONTENT_LENGTH_MISMATCH";
    case InterruptReason::kServerCrossOriginRedirect:
      return "SERVER_CROSS_ORIGIN_REDIRECT";
    case InterruptReason::kUserCanceled:
      return "USER_CANCELED";
    case InterruptReason::kUserShutdown:
      return "USER_SHUTDOWN";
    case InterruptReason::kCrash:
      return "CRASH";
    case InterruptReason::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

InterruptReason ParseInterruptReason(base::StringPiece enum_string) {
  if (enum_string == "FILE_FAILED")
    return InterruptReason::kFileFailed;
  if (enum_string == "FILE_ACCESS_DENIED")
    return InterruptReason::kFileAccessDenied;
  if (enum_string == "FILE_NO_SPACE")
    return InterruptReason::kFileNoSpace;
  if (enum_string == "FILE_NAME_TOO_LONG")
    return InterruptReason::kFileNameTooLong;
  if (enum_string == "FILE_TOO_LARGE")
    return InterruptReason::kFileTooLarge;
  if (enum_string == "FILE_VIRUS_INFECTED")
    return InterruptReason::kFileVirusInfected;
  if (enum_string == "FILE_TRANSIENT_ERROR")
    return InterruptReason::kFileTransientError;
  if (enum_string == "FILE_BLOCKED")
    return InterruptReason::kFileBlocked;
  if (enum_string == "FILE_SECURITY_CHECK_FAILED")
    return InterruptReason::kFileSecurityCheckFailed;
  if (enum_string == "FILE_TOO_SHORT")
    return InterruptReason::kFileTooShort;
  if (enum_string == "FILE_HASH_MISMATCH")
    return InterruptReason::kFileHashMismatch;
  if (enum_string == "FILE_SAME_AS_SOURCE")
    return InterruptReason::kFileSameAsSource;
  if (enum_string == "NETWORK_FAILED")
    return InterruptReason::kNetworkFailed;
  if (enum_string == "NETWORK_TIMEOUT")
    return InterruptReason::kNetworkTimeout;
  if (enum_string == "NETWORK_DISCONNECTED")
    return InterruptReason::kNetworkDisconnected;
  if (enum_string == "NETWORK_SERVER_DOWN")
    return InterruptReason::kNetworkServerDown;
  if (enum_string == "NETWORK_INVALID_REQUEST")
    return InterruptReason::kNetworkInvalidRequest;
  if (enum_string == "SERVER_FAILED")
    return InterruptReason::kServerFailed;
  if (enum_string == "SERVER_NO_RANGE")
    return InterruptReason::kServerNoRange;
  if (enum_string == "SERVER_BAD_CONTENT")
    return InterruptReason::kServerBadContent;
  if (enum_string == "SERVER_UNAUTHORIZED")
    return InterruptReason::kServerUnauthorized;
  if (enum_string == "SERVER_CERT_PROBLEM")
    return InterruptReason::kServerCertProblem;
  if (enum_string == "SERVER_FORBIDDEN")
    return InterruptReason::kServerForbidden;
  if (enum_string == "SERVER_UNREACHABLE")
    return InterruptReason::kServerUnreachable;
  if (enum_string == "SERVER_CONTENT_LENGTH_MISMATCH")
    return InterruptReason::kServerContentLengthMismatch;
  if (enum_string == "SERVER_CROSS_ORIGIN_REDIRECT")
    return InterruptReason::kServerCrossOriginRedirect;
  if (enum_string == "USER_CANCELED")
    return InterruptReason::kUserCanceled;
  if (enum_string == "USER_SHUTDOWN")
    return InterruptReason::kUserShutdown;
  if (enum_string == "CRASH")
    return InterruptReason::kCrash;
  return InterruptReason::kNone;
}

std::u16string GetInterruptReasonParseError(base::StringPiece enum_string) {
  return u"expected \"FILE_FAILED\" or \"FILE_ACCESS_DENIED\" or \"FILE_NO_SPACE\" or \"FILE_NAME_TOO_LONG\" or \"FILE_TOO_LARGE\" or \"FILE_VIRUS_INFECTED\" or \"FILE_TRANSIENT_ERROR\" or \"FILE_BLOCKED\" or \"FILE_SECURITY_CHECK_FAILED\" or \"FILE_TOO_SHORT\" or \"FILE_HASH_MISMATCH\" or \"FILE_SAME_AS_SOURCE\" or \"NETWORK_FAILED\" or \"NETWORK_TIMEOUT\" or \"NETWORK_DISCONNECTED\" or \"NETWORK_SERVER_DOWN\" or \"NETWORK_INVALID_REQUEST\" or \"SERVER_FAILED\" or \"SERVER_NO_RANGE\" or \"SERVER_BAD_CONTENT\" or \"SERVER_UNAUTHORIZED\" or \"SERVER_CERT_PROBLEM\" or \"SERVER_FORBIDDEN\" or \"SERVER_UNREACHABLE\" or \"SERVER_CONTENT_LENGTH_MISMATCH\" or \"SERVER_CROSS_ORIGIN_REDIRECT\" or \"USER_CANCELED\" or \"USER_SHUTDOWN\" or \"CRASH\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


DownloadOptions::DownloadOptions()
: conflict_action(),
method() {}

DownloadOptions::~DownloadOptions() = default;
DownloadOptions::DownloadOptions(DownloadOptions&& rhs) noexcept = default;
DownloadOptions& DownloadOptions::operator=(DownloadOptions&& rhs) noexcept = default;
DownloadOptions DownloadOptions::Clone() const {
  DownloadOptions out;
  out.url = url;
  out.filename = filename;
  out.conflict_action = conflict_action;
  out.save_as = save_as;
  out.method = method;
  if (headers) {
    out.headers.emplace();
    out.headers->reserve(headers->size());
    for (const auto& element : *headers) {
      json_schema_compiler::util::AppendToContainer(*out.headers, element.Clone());
    }
  }
  out.body = body;
  return out;
}

// static
bool DownloadOptions::Populate(
    const base::Value::Dict& dict, DownloadOptions& out) {
  out.conflict_action = FilenameConflictAction();
  out.method = HttpMethod();
  const base::Value* url_value = dict.Find("url");
  if (!url_value) {
    return false;
  }
  {
    auto* temp = (*url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.url = *temp;
  }

  const base::Value* filename_value = dict.Find("filename");
  if (filename_value) {
    {
      auto* temp = (*filename_value).GetIfString();
      if (!temp) {
        out.filename = std::nullopt;
        return false;
      }
      out.filename = *temp;
    }
  }

  const base::Value* conflict_action_value = dict.Find("conflictAction");
  if (conflict_action_value) {
    {
      const std::string* filename_conflict_action_as_string = (*conflict_action_value).GetIfString();
      if (!filename_conflict_action_as_string) {
        return false;
      }
      out.conflict_action = ParseFilenameConflictAction(*filename_conflict_action_as_string);
      if (out.conflict_action == FilenameConflictAction()) {
        return false;
      }
    }
    } else {
    out.conflict_action = FilenameConflictAction();
  }

  const base::Value* save_as_value = dict.Find("saveAs");
  if (save_as_value) {
    {
      auto temp = (*save_as_value).GetIfBool();
      if (!temp.has_value()) {
        out.save_as = std::nullopt;
        return false;
      }
      out.save_as = *temp;
    }
  }

  const base::Value* method_value = dict.Find("method");
  if (method_value) {
    {
      const std::string* http_method_as_string = (*method_value).GetIfString();
      if (!http_method_as_string) {
        return false;
      }
      out.method = ParseHttpMethod(*http_method_as_string);
      if (out.method == HttpMethod()) {
        return false;
      }
    }
    } else {
    out.method = HttpMethod();
  }

  const base::Value* headers_value = dict.Find("headers");
  if (headers_value) {
    {
      if (!(*headers_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*headers_value).GetList(), out.headers)) {
          return false;
        }
      }
    }
  }

  const base::Value* body_value = dict.Find("body");
  if (body_value) {
    {
      auto* temp = (*body_value).GetIfString();
      if (!temp) {
        out.body = std::nullopt;
        return false;
      }
      out.body = *temp;
    }
  }

  return true;
}

// static
bool DownloadOptions::Populate(
    const base::Value& value, DownloadOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DownloadOptions> DownloadOptions::FromValue(const base::Value::Dict& value) {
  DownloadOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DownloadOptions> DownloadOptions::FromValue(const base::Value& value) {
  DownloadOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DownloadOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("url", this->url);

  if (this->filename) {
    to_value_result.Set("filename", *this->filename);

  }
  if (this->conflict_action != FilenameConflictAction()) {
    to_value_result.Set("conflictAction", downloads::ToString(this->conflict_action));

  }
  if (this->save_as) {
    to_value_result.Set("saveAs", *this->save_as);

  }
  if (this->method != HttpMethod()) {
    to_value_result.Set("method", downloads::ToString(this->method));

  }
  if (this->headers) {
    to_value_result.Set("headers", json_schema_compiler::util::CreateValueFromArray(*this->headers));

  }
  if (this->body) {
    to_value_result.Set("body", *this->body);

  }

  return to_value_result;
}


const char* ToString(DangerType enum_param) {
  switch (enum_param) {
    case DangerType::kFile:
      return "file";
    case DangerType::kUrl:
      return "url";
    case DangerType::kContent:
      return "content";
    case DangerType::kUncommon:
      return "uncommon";
    case DangerType::kHost:
      return "host";
    case DangerType::kUnwanted:
      return "unwanted";
    case DangerType::kSafe:
      return "safe";
    case DangerType::kAccepted:
      return "accepted";
    case DangerType::kAllowlistedByPolicy:
      return "allowlistedByPolicy";
    case DangerType::kAsyncScanning:
      return "asyncScanning";
    case DangerType::kAsyncLocalPasswordScanning:
      return "asyncLocalPasswordScanning";
    case DangerType::kPasswordProtected:
      return "passwordProtected";
    case DangerType::kBlockedTooLarge:
      return "blockedTooLarge";
    case DangerType::kSensitiveContentWarning:
      return "sensitiveContentWarning";
    case DangerType::kSensitiveContentBlock:
      return "sensitiveContentBlock";
    case DangerType::kUnsupportedFileType:
      return "unsupportedFileType";
    case DangerType::kDeepScannedFailed:
      return "deepScannedFailed";
    case DangerType::kDeepScannedSafe:
      return "deepScannedSafe";
    case DangerType::kDeepScannedOpenedDangerous:
      return "deepScannedOpenedDangerous";
    case DangerType::kPromptForScanning:
      return "promptForScanning";
    case DangerType::kPromptForLocalPasswordScanning:
      return "promptForLocalPasswordScanning";
    case DangerType::kAccountCompromise:
      return "accountCompromise";
    case DangerType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DangerType ParseDangerType(base::StringPiece enum_string) {
  if (enum_string == "file")
    return DangerType::kFile;
  if (enum_string == "url")
    return DangerType::kUrl;
  if (enum_string == "content")
    return DangerType::kContent;
  if (enum_string == "uncommon")
    return DangerType::kUncommon;
  if (enum_string == "host")
    return DangerType::kHost;
  if (enum_string == "unwanted")
    return DangerType::kUnwanted;
  if (enum_string == "safe")
    return DangerType::kSafe;
  if (enum_string == "accepted")
    return DangerType::kAccepted;
  if (enum_string == "allowlistedByPolicy")
    return DangerType::kAllowlistedByPolicy;
  if (enum_string == "asyncScanning")
    return DangerType::kAsyncScanning;
  if (enum_string == "asyncLocalPasswordScanning")
    return DangerType::kAsyncLocalPasswordScanning;
  if (enum_string == "passwordProtected")
    return DangerType::kPasswordProtected;
  if (enum_string == "blockedTooLarge")
    return DangerType::kBlockedTooLarge;
  if (enum_string == "sensitiveContentWarning")
    return DangerType::kSensitiveContentWarning;
  if (enum_string == "sensitiveContentBlock")
    return DangerType::kSensitiveContentBlock;
  if (enum_string == "unsupportedFileType")
    return DangerType::kUnsupportedFileType;
  if (enum_string == "deepScannedFailed")
    return DangerType::kDeepScannedFailed;
  if (enum_string == "deepScannedSafe")
    return DangerType::kDeepScannedSafe;
  if (enum_string == "deepScannedOpenedDangerous")
    return DangerType::kDeepScannedOpenedDangerous;
  if (enum_string == "promptForScanning")
    return DangerType::kPromptForScanning;
  if (enum_string == "promptForLocalPasswordScanning")
    return DangerType::kPromptForLocalPasswordScanning;
  if (enum_string == "accountCompromise")
    return DangerType::kAccountCompromise;
  return DangerType::kNone;
}

std::u16string GetDangerTypeParseError(base::StringPiece enum_string) {
  return u"expected \"file\" or \"url\" or \"content\" or \"uncommon\" or \"host\" or \"unwanted\" or \"safe\" or \"accepted\" or \"allowlistedByPolicy\" or \"asyncScanning\" or \"asyncLocalPasswordScanning\" or \"passwordProtected\" or \"blockedTooLarge\" or \"sensitiveContentWarning\" or \"sensitiveContentBlock\" or \"unsupportedFileType\" or \"deepScannedFailed\" or \"deepScannedSafe\" or \"deepScannedOpenedDangerous\" or \"promptForScanning\" or \"promptForLocalPasswordScanning\" or \"accountCompromise\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(State enum_param) {
  switch (enum_param) {
    case State::kInProgress:
      return "in_progress";
    case State::kInterrupted:
      return "interrupted";
    case State::kComplete:
      return "complete";
    case State::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

State ParseState(base::StringPiece enum_string) {
  if (enum_string == "in_progress")
    return State::kInProgress;
  if (enum_string == "interrupted")
    return State::kInterrupted;
  if (enum_string == "complete")
    return State::kComplete;
  return State::kNone;
}

std::u16string GetStateParseError(base::StringPiece enum_string) {
  return u"expected \"in_progress\" or \"interrupted\" or \"complete\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


DownloadItem::DownloadItem()
: id(0),
incognito(false),
danger(),
state(),
paused(false),
can_resume(false),
error(),
bytes_received(0.0),
total_bytes(0.0),
file_size(0.0),
exists(false) {}

DownloadItem::~DownloadItem() = default;
DownloadItem::DownloadItem(DownloadItem&& rhs) noexcept = default;
DownloadItem& DownloadItem::operator=(DownloadItem&& rhs) noexcept = default;
DownloadItem DownloadItem::Clone() const {
  DownloadItem out;
  out.id = id;
  out.url = url;
  out.final_url = final_url;
  out.referrer = referrer;
  out.filename = filename;
  out.incognito = incognito;
  out.danger = danger;
  out.mime = mime;
  out.start_time = start_time;
  out.end_time = end_time;
  out.estimated_end_time = estimated_end_time;
  out.state = state;
  out.paused = paused;
  out.can_resume = can_resume;
  out.error = error;
  out.bytes_received = bytes_received;
  out.total_bytes = total_bytes;
  out.file_size = file_size;
  out.exists = exists;
  out.by_extension_id = by_extension_id;
  out.by_extension_name = by_extension_name;
  return out;
}

// static
bool DownloadItem::Populate(
    const base::Value::Dict& dict, DownloadItem& out) {
  out.error = InterruptReason();
  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto temp = (*id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* url_value = dict.Find("url");
  if (!url_value) {
    return false;
  }
  {
    auto* temp = (*url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.url = *temp;
  }

  const base::Value* final_url_value = dict.Find("finalUrl");
  if (!final_url_value) {
    return false;
  }
  {
    auto* temp = (*final_url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.final_url = *temp;
  }

  const base::Value* referrer_value = dict.Find("referrer");
  if (!referrer_value) {
    return false;
  }
  {
    auto* temp = (*referrer_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.referrer = *temp;
  }

  const base::Value* filename_value = dict.Find("filename");
  if (!filename_value) {
    return false;
  }
  {
    auto* temp = (*filename_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.filename = *temp;
  }

  const base::Value* incognito_value = dict.Find("incognito");
  if (!incognito_value) {
    return false;
  }
  {
    auto temp = (*incognito_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.incognito = *temp;
  }

  const base::Value* danger_value = dict.Find("danger");
  if (!danger_value) {
    return false;
  }
  {
    const std::string* danger_type_as_string = (*danger_value).GetIfString();
    if (!danger_type_as_string) {
      return false;
    }
    out.danger = ParseDangerType(*danger_type_as_string);
    if (out.danger == DangerType()) {
      return false;
    }
  }

  const base::Value* mime_value = dict.Find("mime");
  if (!mime_value) {
    return false;
  }
  {
    auto* temp = (*mime_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.mime = *temp;
  }

  const base::Value* start_time_value = dict.Find("startTime");
  if (!start_time_value) {
    return false;
  }
  {
    auto* temp = (*start_time_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.start_time = *temp;
  }

  const base::Value* end_time_value = dict.Find("endTime");
  if (end_time_value) {
    {
      auto* temp = (*end_time_value).GetIfString();
      if (!temp) {
        out.end_time = std::nullopt;
        return false;
      }
      out.end_time = *temp;
    }
  }

  const base::Value* estimated_end_time_value = dict.Find("estimatedEndTime");
  if (estimated_end_time_value) {
    {
      auto* temp = (*estimated_end_time_value).GetIfString();
      if (!temp) {
        out.estimated_end_time = std::nullopt;
        return false;
      }
      out.estimated_end_time = *temp;
    }
  }

  const base::Value* state_value = dict.Find("state");
  if (!state_value) {
    return false;
  }
  {
    const std::string* state_as_string = (*state_value).GetIfString();
    if (!state_as_string) {
      return false;
    }
    out.state = ParseState(*state_as_string);
    if (out.state == State()) {
      return false;
    }
  }

  const base::Value* paused_value = dict.Find("paused");
  if (!paused_value) {
    return false;
  }
  {
    auto temp = (*paused_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.paused = *temp;
  }

  const base::Value* can_resume_value = dict.Find("canResume");
  if (!can_resume_value) {
    return false;
  }
  {
    auto temp = (*can_resume_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.can_resume = *temp;
  }

  const base::Value* error_value = dict.Find("error");
  if (error_value) {
    {
      const std::string* interrupt_reason_as_string = (*error_value).GetIfString();
      if (!interrupt_reason_as_string) {
        return false;
      }
      out.error = ParseInterruptReason(*interrupt_reason_as_string);
      if (out.error == InterruptReason()) {
        return false;
      }
    }
    } else {
    out.error = InterruptReason();
  }

  const base::Value* bytes_received_value = dict.Find("bytesReceived");
  if (!bytes_received_value) {
    return false;
  }
  {
    auto temp = (*bytes_received_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.bytes_received = *temp;
  }

  const base::Value* total_bytes_value = dict.Find("totalBytes");
  if (!total_bytes_value) {
    return false;
  }
  {
    auto temp = (*total_bytes_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.total_bytes = *temp;
  }

  const base::Value* file_size_value = dict.Find("fileSize");
  if (!file_size_value) {
    return false;
  }
  {
    auto temp = (*file_size_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.file_size = *temp;
  }

  const base::Value* exists_value = dict.Find("exists");
  if (!exists_value) {
    return false;
  }
  {
    auto temp = (*exists_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.exists = *temp;
  }

  const base::Value* by_extension_id_value = dict.Find("byExtensionId");
  if (by_extension_id_value) {
    {
      auto* temp = (*by_extension_id_value).GetIfString();
      if (!temp) {
        out.by_extension_id = std::nullopt;
        return false;
      }
      out.by_extension_id = *temp;
    }
  }

  const base::Value* by_extension_name_value = dict.Find("byExtensionName");
  if (by_extension_name_value) {
    {
      auto* temp = (*by_extension_name_value).GetIfString();
      if (!temp) {
        out.by_extension_name = std::nullopt;
        return false;
      }
      out.by_extension_name = *temp;
    }
  }

  return true;
}

// static
bool DownloadItem::Populate(
    const base::Value& value, DownloadItem& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DownloadItem> DownloadItem::FromValue(const base::Value::Dict& value) {
  DownloadItem out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DownloadItem> DownloadItem::FromValue(const base::Value& value) {
  DownloadItem out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DownloadItem::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("url", this->url);

  to_value_result.Set("finalUrl", this->final_url);

  to_value_result.Set("referrer", this->referrer);

  to_value_result.Set("filename", this->filename);

  to_value_result.Set("incognito", this->incognito);

  to_value_result.Set("danger", downloads::ToString(this->danger));

  to_value_result.Set("mime", this->mime);

  to_value_result.Set("startTime", this->start_time);

  if (this->end_time) {
    to_value_result.Set("endTime", *this->end_time);

  }
  if (this->estimated_end_time) {
    to_value_result.Set("estimatedEndTime", *this->estimated_end_time);

  }
  to_value_result.Set("state", downloads::ToString(this->state));

  to_value_result.Set("paused", this->paused);

  to_value_result.Set("canResume", this->can_resume);

  if (this->error != InterruptReason()) {
    to_value_result.Set("error", downloads::ToString(this->error));

  }
  to_value_result.Set("bytesReceived", this->bytes_received);

  to_value_result.Set("totalBytes", this->total_bytes);

  to_value_result.Set("fileSize", this->file_size);

  to_value_result.Set("exists", this->exists);

  if (this->by_extension_id) {
    to_value_result.Set("byExtensionId", *this->by_extension_id);

  }
  if (this->by_extension_name) {
    to_value_result.Set("byExtensionName", *this->by_extension_name);

  }

  return to_value_result;
}


DownloadQuery::DownloadQuery()
: danger(),
state(),
error() {}

DownloadQuery::~DownloadQuery() = default;
DownloadQuery::DownloadQuery(DownloadQuery&& rhs) noexcept = default;
DownloadQuery& DownloadQuery::operator=(DownloadQuery&& rhs) noexcept = default;
DownloadQuery DownloadQuery::Clone() const {
  DownloadQuery out;
  out.query = query;
  out.started_before = started_before;
  out.started_after = started_after;
  out.ended_before = ended_before;
  out.ended_after = ended_after;
  out.total_bytes_greater = total_bytes_greater;
  out.total_bytes_less = total_bytes_less;
  out.filename_regex = filename_regex;
  out.url_regex = url_regex;
  out.final_url_regex = final_url_regex;
  out.limit = limit;
  out.order_by = order_by;
  out.id = id;
  out.url = url;
  out.final_url = final_url;
  out.filename = filename;
  out.danger = danger;
  out.mime = mime;
  out.start_time = start_time;
  out.end_time = end_time;
  out.state = state;
  out.paused = paused;
  out.error = error;
  out.bytes_received = bytes_received;
  out.total_bytes = total_bytes;
  out.file_size = file_size;
  out.exists = exists;
  return out;
}

// static
bool DownloadQuery::Populate(
    const base::Value::Dict& dict, DownloadQuery& out) {
  out.danger = DangerType();
  out.state = State();
  out.error = InterruptReason();
  const base::Value* query_value = dict.Find("query");
  if (query_value) {
    {
      if (!(*query_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*query_value).GetList(), out.query)) {
          return false;
        }
      }
    }
  }

  const base::Value* started_before_value = dict.Find("startedBefore");
  if (started_before_value) {
    {
      auto* temp = (*started_before_value).GetIfString();
      if (!temp) {
        out.started_before = std::nullopt;
        return false;
      }
      out.started_before = *temp;
    }
  }

  const base::Value* started_after_value = dict.Find("startedAfter");
  if (started_after_value) {
    {
      auto* temp = (*started_after_value).GetIfString();
      if (!temp) {
        out.started_after = std::nullopt;
        return false;
      }
      out.started_after = *temp;
    }
  }

  const base::Value* ended_before_value = dict.Find("endedBefore");
  if (ended_before_value) {
    {
      auto* temp = (*ended_before_value).GetIfString();
      if (!temp) {
        out.ended_before = std::nullopt;
        return false;
      }
      out.ended_before = *temp;
    }
  }

  const base::Value* ended_after_value = dict.Find("endedAfter");
  if (ended_after_value) {
    {
      auto* temp = (*ended_after_value).GetIfString();
      if (!temp) {
        out.ended_after = std::nullopt;
        return false;
      }
      out.ended_after = *temp;
    }
  }

  const base::Value* total_bytes_greater_value = dict.Find("totalBytesGreater");
  if (total_bytes_greater_value) {
    {
      auto temp = (*total_bytes_greater_value).GetIfDouble();
      if (!temp.has_value()) {
        out.total_bytes_greater = std::nullopt;
        return false;
      }
      out.total_bytes_greater = *temp;
    }
  }

  const base::Value* total_bytes_less_value = dict.Find("totalBytesLess");
  if (total_bytes_less_value) {
    {
      auto temp = (*total_bytes_less_value).GetIfDouble();
      if (!temp.has_value()) {
        out.total_bytes_less = std::nullopt;
        return false;
      }
      out.total_bytes_less = *temp;
    }
  }

  const base::Value* filename_regex_value = dict.Find("filenameRegex");
  if (filename_regex_value) {
    {
      auto* temp = (*filename_regex_value).GetIfString();
      if (!temp) {
        out.filename_regex = std::nullopt;
        return false;
      }
      out.filename_regex = *temp;
    }
  }

  const base::Value* url_regex_value = dict.Find("urlRegex");
  if (url_regex_value) {
    {
      auto* temp = (*url_regex_value).GetIfString();
      if (!temp) {
        out.url_regex = std::nullopt;
        return false;
      }
      out.url_regex = *temp;
    }
  }

  const base::Value* final_url_regex_value = dict.Find("finalUrlRegex");
  if (final_url_regex_value) {
    {
      auto* temp = (*final_url_regex_value).GetIfString();
      if (!temp) {
        out.final_url_regex = std::nullopt;
        return false;
      }
      out.final_url_regex = *temp;
    }
  }

  const base::Value* limit_value = dict.Find("limit");
  if (limit_value) {
    {
      auto temp = (*limit_value).GetIfInt();
      if (!temp.has_value()) {
        out.limit = std::nullopt;
        return false;
      }
      out.limit = *temp;
    }
  }

  const base::Value* order_by_value = dict.Find("orderBy");
  if (order_by_value) {
    {
      if (!(*order_by_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*order_by_value).GetList(), out.order_by)) {
          return false;
        }
      }
    }
  }

  const base::Value* id_value = dict.Find("id");
  if (id_value) {
    {
      auto temp = (*id_value).GetIfInt();
      if (!temp.has_value()) {
        out.id = std::nullopt;
        return false;
      }
      out.id = *temp;
    }
  }

  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    {
      auto* temp = (*url_value).GetIfString();
      if (!temp) {
        out.url = std::nullopt;
        return false;
      }
      out.url = *temp;
    }
  }

  const base::Value* final_url_value = dict.Find("finalUrl");
  if (final_url_value) {
    {
      auto* temp = (*final_url_value).GetIfString();
      if (!temp) {
        out.final_url = std::nullopt;
        return false;
      }
      out.final_url = *temp;
    }
  }

  const base::Value* filename_value = dict.Find("filename");
  if (filename_value) {
    {
      auto* temp = (*filename_value).GetIfString();
      if (!temp) {
        out.filename = std::nullopt;
        return false;
      }
      out.filename = *temp;
    }
  }

  const base::Value* danger_value = dict.Find("danger");
  if (danger_value) {
    {
      const std::string* danger_type_as_string = (*danger_value).GetIfString();
      if (!danger_type_as_string) {
        return false;
      }
      out.danger = ParseDangerType(*danger_type_as_string);
      if (out.danger == DangerType()) {
        return false;
      }
    }
    } else {
    out.danger = DangerType();
  }

  const base::Value* mime_value = dict.Find("mime");
  if (mime_value) {
    {
      auto* temp = (*mime_value).GetIfString();
      if (!temp) {
        out.mime = std::nullopt;
        return false;
      }
      out.mime = *temp;
    }
  }

  const base::Value* start_time_value = dict.Find("startTime");
  if (start_time_value) {
    {
      auto* temp = (*start_time_value).GetIfString();
      if (!temp) {
        out.start_time = std::nullopt;
        return false;
      }
      out.start_time = *temp;
    }
  }

  const base::Value* end_time_value = dict.Find("endTime");
  if (end_time_value) {
    {
      auto* temp = (*end_time_value).GetIfString();
      if (!temp) {
        out.end_time = std::nullopt;
        return false;
      }
      out.end_time = *temp;
    }
  }

  const base::Value* state_value = dict.Find("state");
  if (state_value) {
    {
      const std::string* state_as_string = (*state_value).GetIfString();
      if (!state_as_string) {
        return false;
      }
      out.state = ParseState(*state_as_string);
      if (out.state == State()) {
        return false;
      }
    }
    } else {
    out.state = State();
  }

  const base::Value* paused_value = dict.Find("paused");
  if (paused_value) {
    {
      auto temp = (*paused_value).GetIfBool();
      if (!temp.has_value()) {
        out.paused = std::nullopt;
        return false;
      }
      out.paused = *temp;
    }
  }

  const base::Value* error_value = dict.Find("error");
  if (error_value) {
    {
      const std::string* interrupt_reason_as_string = (*error_value).GetIfString();
      if (!interrupt_reason_as_string) {
        return false;
      }
      out.error = ParseInterruptReason(*interrupt_reason_as_string);
      if (out.error == InterruptReason()) {
        return false;
      }
    }
    } else {
    out.error = InterruptReason();
  }

  const base::Value* bytes_received_value = dict.Find("bytesReceived");
  if (bytes_received_value) {
    {
      auto temp = (*bytes_received_value).GetIfDouble();
      if (!temp.has_value()) {
        out.bytes_received = std::nullopt;
        return false;
      }
      out.bytes_received = *temp;
    }
  }

  const base::Value* total_bytes_value = dict.Find("totalBytes");
  if (total_bytes_value) {
    {
      auto temp = (*total_bytes_value).GetIfDouble();
      if (!temp.has_value()) {
        out.total_bytes = std::nullopt;
        return false;
      }
      out.total_bytes = *temp;
    }
  }

  const base::Value* file_size_value = dict.Find("fileSize");
  if (file_size_value) {
    {
      auto temp = (*file_size_value).GetIfDouble();
      if (!temp.has_value()) {
        out.file_size = std::nullopt;
        return false;
      }
      out.file_size = *temp;
    }
  }

  const base::Value* exists_value = dict.Find("exists");
  if (exists_value) {
    {
      auto temp = (*exists_value).GetIfBool();
      if (!temp.has_value()) {
        out.exists = std::nullopt;
        return false;
      }
      out.exists = *temp;
    }
  }

  return true;
}

// static
bool DownloadQuery::Populate(
    const base::Value& value, DownloadQuery& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DownloadQuery> DownloadQuery::FromValue(const base::Value::Dict& value) {
  DownloadQuery out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DownloadQuery> DownloadQuery::FromValue(const base::Value& value) {
  DownloadQuery out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DownloadQuery::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->query) {
    to_value_result.Set("query", json_schema_compiler::util::CreateValueFromArray(*this->query));

  }
  if (this->started_before) {
    to_value_result.Set("startedBefore", *this->started_before);

  }
  if (this->started_after) {
    to_value_result.Set("startedAfter", *this->started_after);

  }
  if (this->ended_before) {
    to_value_result.Set("endedBefore", *this->ended_before);

  }
  if (this->ended_after) {
    to_value_result.Set("endedAfter", *this->ended_after);

  }
  if (this->total_bytes_greater) {
    to_value_result.Set("totalBytesGreater", *this->total_bytes_greater);

  }
  if (this->total_bytes_less) {
    to_value_result.Set("totalBytesLess", *this->total_bytes_less);

  }
  if (this->filename_regex) {
    to_value_result.Set("filenameRegex", *this->filename_regex);

  }
  if (this->url_regex) {
    to_value_result.Set("urlRegex", *this->url_regex);

  }
  if (this->final_url_regex) {
    to_value_result.Set("finalUrlRegex", *this->final_url_regex);

  }
  if (this->limit) {
    to_value_result.Set("limit", *this->limit);

  }
  if (this->order_by) {
    to_value_result.Set("orderBy", json_schema_compiler::util::CreateValueFromArray(*this->order_by));

  }
  if (this->id) {
    to_value_result.Set("id", *this->id);

  }
  if (this->url) {
    to_value_result.Set("url", *this->url);

  }
  if (this->final_url) {
    to_value_result.Set("finalUrl", *this->final_url);

  }
  if (this->filename) {
    to_value_result.Set("filename", *this->filename);

  }
  if (this->danger != DangerType()) {
    to_value_result.Set("danger", downloads::ToString(this->danger));

  }
  if (this->mime) {
    to_value_result.Set("mime", *this->mime);

  }
  if (this->start_time) {
    to_value_result.Set("startTime", *this->start_time);

  }
  if (this->end_time) {
    to_value_result.Set("endTime", *this->end_time);

  }
  if (this->state != State()) {
    to_value_result.Set("state", downloads::ToString(this->state));

  }
  if (this->paused) {
    to_value_result.Set("paused", *this->paused);

  }
  if (this->error != InterruptReason()) {
    to_value_result.Set("error", downloads::ToString(this->error));

  }
  if (this->bytes_received) {
    to_value_result.Set("bytesReceived", *this->bytes_received);

  }
  if (this->total_bytes) {
    to_value_result.Set("totalBytes", *this->total_bytes);

  }
  if (this->file_size) {
    to_value_result.Set("fileSize", *this->file_size);

  }
  if (this->exists) {
    to_value_result.Set("exists", *this->exists);

  }

  return to_value_result;
}


StringDelta::StringDelta()
 {}

StringDelta::~StringDelta() = default;
StringDelta::StringDelta(StringDelta&& rhs) noexcept = default;
StringDelta& StringDelta::operator=(StringDelta&& rhs) noexcept = default;
StringDelta StringDelta::Clone() const {
  StringDelta out;
  out.previous = previous;
  out.current = current;
  return out;
}

// static
bool StringDelta::Populate(
    const base::Value::Dict& dict, StringDelta& out) {
  const base::Value* previous_value = dict.Find("previous");
  if (previous_value) {
    {
      auto* temp = (*previous_value).GetIfString();
      if (!temp) {
        out.previous = std::nullopt;
        return false;
      }
      out.previous = *temp;
    }
  }

  const base::Value* current_value = dict.Find("current");
  if (current_value) {
    {
      auto* temp = (*current_value).GetIfString();
      if (!temp) {
        out.current = std::nullopt;
        return false;
      }
      out.current = *temp;
    }
  }

  return true;
}

// static
bool StringDelta::Populate(
    const base::Value& value, StringDelta& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<StringDelta> StringDelta::FromValue(const base::Value::Dict& value) {
  StringDelta out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<StringDelta> StringDelta::FromValue(const base::Value& value) {
  StringDelta out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict StringDelta::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->previous) {
    to_value_result.Set("previous", *this->previous);

  }
  if (this->current) {
    to_value_result.Set("current", *this->current);

  }

  return to_value_result;
}


DoubleDelta::DoubleDelta()
 {}

DoubleDelta::~DoubleDelta() = default;
DoubleDelta::DoubleDelta(DoubleDelta&& rhs) noexcept = default;
DoubleDelta& DoubleDelta::operator=(DoubleDelta&& rhs) noexcept = default;
DoubleDelta DoubleDelta::Clone() const {
  DoubleDelta out;
  out.previous = previous;
  out.current = current;
  return out;
}

// static
bool DoubleDelta::Populate(
    const base::Value::Dict& dict, DoubleDelta& out) {
  const base::Value* previous_value = dict.Find("previous");
  if (previous_value) {
    {
      auto temp = (*previous_value).GetIfDouble();
      if (!temp.has_value()) {
        out.previous = std::nullopt;
        return false;
      }
      out.previous = *temp;
    }
  }

  const base::Value* current_value = dict.Find("current");
  if (current_value) {
    {
      auto temp = (*current_value).GetIfDouble();
      if (!temp.has_value()) {
        out.current = std::nullopt;
        return false;
      }
      out.current = *temp;
    }
  }

  return true;
}

// static
bool DoubleDelta::Populate(
    const base::Value& value, DoubleDelta& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DoubleDelta> DoubleDelta::FromValue(const base::Value::Dict& value) {
  DoubleDelta out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DoubleDelta> DoubleDelta::FromValue(const base::Value& value) {
  DoubleDelta out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DoubleDelta::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->previous) {
    to_value_result.Set("previous", *this->previous);

  }
  if (this->current) {
    to_value_result.Set("current", *this->current);

  }

  return to_value_result;
}


BooleanDelta::BooleanDelta()
 {}

BooleanDelta::~BooleanDelta() = default;
BooleanDelta::BooleanDelta(BooleanDelta&& rhs) noexcept = default;
BooleanDelta& BooleanDelta::operator=(BooleanDelta&& rhs) noexcept = default;
BooleanDelta BooleanDelta::Clone() const {
  BooleanDelta out;
  out.previous = previous;
  out.current = current;
  return out;
}

// static
bool BooleanDelta::Populate(
    const base::Value::Dict& dict, BooleanDelta& out) {
  const base::Value* previous_value = dict.Find("previous");
  if (previous_value) {
    {
      auto temp = (*previous_value).GetIfBool();
      if (!temp.has_value()) {
        out.previous = std::nullopt;
        return false;
      }
      out.previous = *temp;
    }
  }

  const base::Value* current_value = dict.Find("current");
  if (current_value) {
    {
      auto temp = (*current_value).GetIfBool();
      if (!temp.has_value()) {
        out.current = std::nullopt;
        return false;
      }
      out.current = *temp;
    }
  }

  return true;
}

// static
bool BooleanDelta::Populate(
    const base::Value& value, BooleanDelta& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<BooleanDelta> BooleanDelta::FromValue(const base::Value::Dict& value) {
  BooleanDelta out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<BooleanDelta> BooleanDelta::FromValue(const base::Value& value) {
  BooleanDelta out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict BooleanDelta::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->previous) {
    to_value_result.Set("previous", *this->previous);

  }
  if (this->current) {
    to_value_result.Set("current", *this->current);

  }

  return to_value_result;
}


DownloadDelta::DownloadDelta()
: id(0) {}

DownloadDelta::~DownloadDelta() = default;
DownloadDelta::DownloadDelta(DownloadDelta&& rhs) noexcept = default;
DownloadDelta& DownloadDelta::operator=(DownloadDelta&& rhs) noexcept = default;
DownloadDelta DownloadDelta::Clone() const {
  DownloadDelta out;
  out.id = id;
  if (url) {
    out.url = url->Clone();
  }
  if (final_url) {
    out.final_url = final_url->Clone();
  }
  if (filename) {
    out.filename = filename->Clone();
  }
  if (danger) {
    out.danger = danger->Clone();
  }
  if (mime) {
    out.mime = mime->Clone();
  }
  if (start_time) {
    out.start_time = start_time->Clone();
  }
  if (end_time) {
    out.end_time = end_time->Clone();
  }
  if (state) {
    out.state = state->Clone();
  }
  if (can_resume) {
    out.can_resume = can_resume->Clone();
  }
  if (paused) {
    out.paused = paused->Clone();
  }
  if (error) {
    out.error = error->Clone();
  }
  if (total_bytes) {
    out.total_bytes = total_bytes->Clone();
  }
  if (file_size) {
    out.file_size = file_size->Clone();
  }
  if (exists) {
    out.exists = exists->Clone();
  }
  return out;
}

// static
bool DownloadDelta::Populate(
    const base::Value::Dict& dict, DownloadDelta& out) {
  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto temp = (*id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    {
      if (!(*url_value).is_dict()) {
        return false;
      }
      else {
        StringDelta temp;
        if (!StringDelta::Populate((*url_value).GetDict(), temp))
          return false;
        out.url = std::move(temp);
      }
    }
  }

  const base::Value* final_url_value = dict.Find("finalUrl");
  if (final_url_value) {
    {
      if (!(*final_url_value).is_dict()) {
        return false;
      }
      else {
        StringDelta temp;
        if (!StringDelta::Populate((*final_url_value).GetDict(), temp))
          return false;
        out.final_url = std::move(temp);
      }
    }
  }

  const base::Value* filename_value = dict.Find("filename");
  if (filename_value) {
    {
      if (!(*filename_value).is_dict()) {
        return false;
      }
      else {
        StringDelta temp;
        if (!StringDelta::Populate((*filename_value).GetDict(), temp))
          return false;
        out.filename = std::move(temp);
      }
    }
  }

  const base::Value* danger_value = dict.Find("danger");
  if (danger_value) {
    {
      if (!(*danger_value).is_dict()) {
        return false;
      }
      else {
        StringDelta temp;
        if (!StringDelta::Populate((*danger_value).GetDict(), temp))
          return false;
        out.danger = std::move(temp);
      }
    }
  }

  const base::Value* mime_value = dict.Find("mime");
  if (mime_value) {
    {
      if (!(*mime_value).is_dict()) {
        return false;
      }
      else {
        StringDelta temp;
        if (!StringDelta::Populate((*mime_value).GetDict(), temp))
          return false;
        out.mime = std::move(temp);
      }
    }
  }

  const base::Value* start_time_value = dict.Find("startTime");
  if (start_time_value) {
    {
      if (!(*start_time_value).is_dict()) {
        return false;
      }
      else {
        StringDelta temp;
        if (!StringDelta::Populate((*start_time_value).GetDict(), temp))
          return false;
        out.start_time = std::move(temp);
      }
    }
  }

  const base::Value* end_time_value = dict.Find("endTime");
  if (end_time_value) {
    {
      if (!(*end_time_value).is_dict()) {
        return false;
      }
      else {
        StringDelta temp;
        if (!StringDelta::Populate((*end_time_value).GetDict(), temp))
          return false;
        out.end_time = std::move(temp);
      }
    }
  }

  const base::Value* state_value = dict.Find("state");
  if (state_value) {
    {
      if (!(*state_value).is_dict()) {
        return false;
      }
      else {
        StringDelta temp;
        if (!StringDelta::Populate((*state_value).GetDict(), temp))
          return false;
        out.state = std::move(temp);
      }
    }
  }

  const base::Value* can_resume_value = dict.Find("canResume");
  if (can_resume_value) {
    {
      if (!(*can_resume_value).is_dict()) {
        return false;
      }
      else {
        BooleanDelta temp;
        if (!BooleanDelta::Populate((*can_resume_value).GetDict(), temp))
          return false;
        out.can_resume = std::move(temp);
      }
    }
  }

  const base::Value* paused_value = dict.Find("paused");
  if (paused_value) {
    {
      if (!(*paused_value).is_dict()) {
        return false;
      }
      else {
        BooleanDelta temp;
        if (!BooleanDelta::Populate((*paused_value).GetDict(), temp))
          return false;
        out.paused = std::move(temp);
      }
    }
  }

  const base::Value* error_value = dict.Find("error");
  if (error_value) {
    {
      if (!(*error_value).is_dict()) {
        return false;
      }
      else {
        StringDelta temp;
        if (!StringDelta::Populate((*error_value).GetDict(), temp))
          return false;
        out.error = std::move(temp);
      }
    }
  }

  const base::Value* total_bytes_value = dict.Find("totalBytes");
  if (total_bytes_value) {
    {
      if (!(*total_bytes_value).is_dict()) {
        return false;
      }
      else {
        DoubleDelta temp;
        if (!DoubleDelta::Populate((*total_bytes_value).GetDict(), temp))
          return false;
        out.total_bytes = std::move(temp);
      }
    }
  }

  const base::Value* file_size_value = dict.Find("fileSize");
  if (file_size_value) {
    {
      if (!(*file_size_value).is_dict()) {
        return false;
      }
      else {
        DoubleDelta temp;
        if (!DoubleDelta::Populate((*file_size_value).GetDict(), temp))
          return false;
        out.file_size = std::move(temp);
      }
    }
  }

  const base::Value* exists_value = dict.Find("exists");
  if (exists_value) {
    {
      if (!(*exists_value).is_dict()) {
        return false;
      }
      else {
        BooleanDelta temp;
        if (!BooleanDelta::Populate((*exists_value).GetDict(), temp))
          return false;
        out.exists = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool DownloadDelta::Populate(
    const base::Value& value, DownloadDelta& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DownloadDelta> DownloadDelta::FromValue(const base::Value::Dict& value) {
  DownloadDelta out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DownloadDelta> DownloadDelta::FromValue(const base::Value& value) {
  DownloadDelta out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DownloadDelta::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  if (this->url) {
    to_value_result.Set("url", (this->url)->ToValue());

  }
  if (this->final_url) {
    to_value_result.Set("finalUrl", (this->final_url)->ToValue());

  }
  if (this->filename) {
    to_value_result.Set("filename", (this->filename)->ToValue());

  }
  if (this->danger) {
    to_value_result.Set("danger", (this->danger)->ToValue());

  }
  if (this->mime) {
    to_value_result.Set("mime", (this->mime)->ToValue());

  }
  if (this->start_time) {
    to_value_result.Set("startTime", (this->start_time)->ToValue());

  }
  if (this->end_time) {
    to_value_result.Set("endTime", (this->end_time)->ToValue());

  }
  if (this->state) {
    to_value_result.Set("state", (this->state)->ToValue());

  }
  if (this->can_resume) {
    to_value_result.Set("canResume", (this->can_resume)->ToValue());

  }
  if (this->paused) {
    to_value_result.Set("paused", (this->paused)->ToValue());

  }
  if (this->error) {
    to_value_result.Set("error", (this->error)->ToValue());

  }
  if (this->total_bytes) {
    to_value_result.Set("totalBytes", (this->total_bytes)->ToValue());

  }
  if (this->file_size) {
    to_value_result.Set("fileSize", (this->file_size)->ToValue());

  }
  if (this->exists) {
    to_value_result.Set("exists", (this->exists)->ToValue());

  }

  return to_value_result;
}


GetFileIconOptions::GetFileIconOptions()
 {}

GetFileIconOptions::~GetFileIconOptions() = default;
GetFileIconOptions::GetFileIconOptions(GetFileIconOptions&& rhs) noexcept = default;
GetFileIconOptions& GetFileIconOptions::operator=(GetFileIconOptions&& rhs) noexcept = default;
GetFileIconOptions GetFileIconOptions::Clone() const {
  GetFileIconOptions out;
  out.size = size;
  return out;
}

// static
bool GetFileIconOptions::Populate(
    const base::Value::Dict& dict, GetFileIconOptions& out) {
  const base::Value* size_value = dict.Find("size");
  if (size_value) {
    {
      auto temp = (*size_value).GetIfInt();
      if (!temp.has_value()) {
        out.size = std::nullopt;
        return false;
      }
      out.size = *temp;
    }
  }

  return true;
}

// static
bool GetFileIconOptions::Populate(
    const base::Value& value, GetFileIconOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GetFileIconOptions> GetFileIconOptions::FromValue(const base::Value::Dict& value) {
  GetFileIconOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GetFileIconOptions> GetFileIconOptions::FromValue(const base::Value& value) {
  GetFileIconOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict GetFileIconOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->size) {
    to_value_result.Set("size", *this->size);

  }

  return to_value_result;
}


UiOptions::UiOptions()
: enabled(false) {}

UiOptions::~UiOptions() = default;
UiOptions::UiOptions(UiOptions&& rhs) noexcept = default;
UiOptions& UiOptions::operator=(UiOptions&& rhs) noexcept = default;
UiOptions UiOptions::Clone() const {
  UiOptions out;
  out.enabled = enabled;
  return out;
}

// static
bool UiOptions::Populate(
    const base::Value::Dict& dict, UiOptions& out) {
  const base::Value* enabled_value = dict.Find("enabled");
  if (!enabled_value) {
    return false;
  }
  {
    auto temp = (*enabled_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.enabled = *temp;
  }

  return true;
}

// static
bool UiOptions::Populate(
    const base::Value& value, UiOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<UiOptions> UiOptions::FromValue(const base::Value::Dict& value) {
  UiOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<UiOptions> UiOptions::FromValue(const base::Value& value) {
  UiOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict UiOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("enabled", this->enabled);


  return to_value_result;
}



//
// Functions
//

namespace Download {

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
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      if (!DownloadOptions::Populate(options_value.GetDict(), params.options)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(int download_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(download_id);

  return create_results;
}
}  // namespace Download

namespace Search {

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
    const base::Value& query_value = args[0];
    {
      if (!query_value.is_dict()) {
        return std::nullopt;
      }
      if (!DownloadQuery::Populate(query_value.GetDict(), params.query)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<DownloadItem>& results) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(results));

  return create_results;
}
}  // namespace Search

namespace Pause {

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
    const base::Value& download_id_value = args[0];
    {
      auto temp = download_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.download_id = *temp;
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
}  // namespace Pause

namespace Resume {

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
    const base::Value& download_id_value = args[0];
    {
      auto temp = download_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.download_id = *temp;
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
}  // namespace Resume

namespace Cancel {

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
    const base::Value& download_id_value = args[0];
    {
      auto temp = download_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.download_id = *temp;
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
}  // namespace Cancel

namespace GetFileIcon {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& download_id_value = args[0];
    {
      auto temp = download_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.download_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& options_value = args[1];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      else {
        GetFileIconOptions temp;
        if (!GetFileIconOptions::Populate(options_value.GetDict(), temp))
          return std::nullopt;
        params.options = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const std::string& icon_url) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(icon_url);

  return create_results;
}
}  // namespace GetFileIcon

namespace Open {

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
    const base::Value& download_id_value = args[0];
    {
      auto temp = download_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.download_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace Open

namespace Show {

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
    const base::Value& download_id_value = args[0];
    {
      auto temp = download_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.download_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace Show

namespace ShowDefaultFolder {

}  // namespace ShowDefaultFolder

namespace Erase {

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
    const base::Value& query_value = args[0];
    {
      if (!query_value.is_dict()) {
        return std::nullopt;
      }
      if (!DownloadQuery::Populate(query_value.GetDict(), params.query)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<int>& erased_ids) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(erased_ids));

  return create_results;
}
}  // namespace Erase

namespace RemoveFile {

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
    const base::Value& download_id_value = args[0];
    {
      auto temp = download_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.download_id = *temp;
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
}  // namespace RemoveFile

namespace AcceptDanger {

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
    const base::Value& download_id_value = args[0];
    {
      auto temp = download_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.download_id = *temp;
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
}  // namespace AcceptDanger

namespace SetShelfEnabled {

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
    const base::Value& enabled_value = args[0];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.enabled = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetShelfEnabled

namespace SetUiOptions {

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
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      if (!UiOptions::Populate(options_value.GetDict(), params.options)) {
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
}  // namespace SetUiOptions

//
// Events
//

namespace OnCreated {

const char kEventName[] = "downloads.onCreated";

base::Value::List Create(const DownloadItem& download_item) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((download_item).ToValue());

  return create_results;
}

}  // namespace OnCreated

namespace OnErased {

const char kEventName[] = "downloads.onErased";

base::Value::List Create(int download_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(download_id);

  return create_results;
}

}  // namespace OnErased

namespace OnChanged {

const char kEventName[] = "downloads.onChanged";

base::Value::List Create(const DownloadDelta& download_delta) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((download_delta).ToValue());

  return create_results;
}

}  // namespace OnChanged

namespace OnDeterminingFilename {

const char kEventName[] = "downloads.onDeterminingFilename";

base::Value::List Create(const DownloadItem& download_item, base::Value::Dict suggest) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append((download_item).ToValue());

  create_results.Append((suggest).Clone());

  return create_results;
}

}  // namespace OnDeterminingFilename

}  // namespace downloads
}  // namespace api
}  // namespace extensions

