// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/downloads.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/downloads.h"

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
namespace downloads {
//
// Types
//

HeaderNameValuePair::HeaderNameValuePair()
 {}

HeaderNameValuePair::~HeaderNameValuePair() = default;
HeaderNameValuePair::HeaderNameValuePair(HeaderNameValuePair&& rhs) = default;
HeaderNameValuePair& HeaderNameValuePair::operator=(HeaderNameValuePair&& rhs) = default;
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
std::unique_ptr<HeaderNameValuePair> HeaderNameValuePair::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<HeaderNameValuePair>();
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
absl::optional<HeaderNameValuePair> HeaderNameValuePair::FromValue(const base::Value::Dict& value) {
  HeaderNameValuePair out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<HeaderNameValuePair> HeaderNameValuePair::FromValue(const base::Value& value) {
  HeaderNameValuePair out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
    case FILENAME_CONFLICT_ACTION_UNIQUIFY:
      return "uniquify";
    case FILENAME_CONFLICT_ACTION_OVERWRITE:
      return "overwrite";
    case FILENAME_CONFLICT_ACTION_PROMPT:
      return "prompt";
    case FILENAME_CONFLICT_ACTION_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

FilenameConflictAction ParseFilenameConflictAction(base::StringPiece enum_string) {
  if (enum_string == "uniquify")
    return FILENAME_CONFLICT_ACTION_UNIQUIFY;
  if (enum_string == "overwrite")
    return FILENAME_CONFLICT_ACTION_OVERWRITE;
  if (enum_string == "prompt")
    return FILENAME_CONFLICT_ACTION_PROMPT;
  return FILENAME_CONFLICT_ACTION_NONE;
}

std::u16string GetFilenameConflictActionParseError(base::StringPiece enum_string) {
  return u"expected \"uniquify\" or \"overwrite\" or \"prompt\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


FilenameSuggestion::FilenameSuggestion()
: conflict_action() {}

FilenameSuggestion::~FilenameSuggestion() = default;
FilenameSuggestion::FilenameSuggestion(FilenameSuggestion&& rhs) = default;
FilenameSuggestion& FilenameSuggestion::operator=(FilenameSuggestion&& rhs) = default;
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
std::unique_ptr<FilenameSuggestion> FilenameSuggestion::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<FilenameSuggestion>();
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
absl::optional<FilenameSuggestion> FilenameSuggestion::FromValue(const base::Value::Dict& value) {
  FilenameSuggestion out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<FilenameSuggestion> FilenameSuggestion::FromValue(const base::Value& value) {
  FilenameSuggestion out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
    case HTTP_METHOD_GET:
      return "GET";
    case HTTP_METHOD_POST:
      return "POST";
    case HTTP_METHOD_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

HttpMethod ParseHttpMethod(base::StringPiece enum_string) {
  if (enum_string == "GET")
    return HTTP_METHOD_GET;
  if (enum_string == "POST")
    return HTTP_METHOD_POST;
  return HTTP_METHOD_NONE;
}

std::u16string GetHttpMethodParseError(base::StringPiece enum_string) {
  return u"expected \"GET\" or \"POST\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(InterruptReason enum_param) {
  switch (enum_param) {
    case INTERRUPT_REASON_FILE_FAILED:
      return "FILE_FAILED";
    case INTERRUPT_REASON_FILE_ACCESS_DENIED:
      return "FILE_ACCESS_DENIED";
    case INTERRUPT_REASON_FILE_NO_SPACE:
      return "FILE_NO_SPACE";
    case INTERRUPT_REASON_FILE_NAME_TOO_LONG:
      return "FILE_NAME_TOO_LONG";
    case INTERRUPT_REASON_FILE_TOO_LARGE:
      return "FILE_TOO_LARGE";
    case INTERRUPT_REASON_FILE_VIRUS_INFECTED:
      return "FILE_VIRUS_INFECTED";
    case INTERRUPT_REASON_FILE_TRANSIENT_ERROR:
      return "FILE_TRANSIENT_ERROR";
    case INTERRUPT_REASON_FILE_BLOCKED:
      return "FILE_BLOCKED";
    case INTERRUPT_REASON_FILE_SECURITY_CHECK_FAILED:
      return "FILE_SECURITY_CHECK_FAILED";
    case INTERRUPT_REASON_FILE_TOO_SHORT:
      return "FILE_TOO_SHORT";
    case INTERRUPT_REASON_FILE_HASH_MISMATCH:
      return "FILE_HASH_MISMATCH";
    case INTERRUPT_REASON_FILE_SAME_AS_SOURCE:
      return "FILE_SAME_AS_SOURCE";
    case INTERRUPT_REASON_NETWORK_FAILED:
      return "NETWORK_FAILED";
    case INTERRUPT_REASON_NETWORK_TIMEOUT:
      return "NETWORK_TIMEOUT";
    case INTERRUPT_REASON_NETWORK_DISCONNECTED:
      return "NETWORK_DISCONNECTED";
    case INTERRUPT_REASON_NETWORK_SERVER_DOWN:
      return "NETWORK_SERVER_DOWN";
    case INTERRUPT_REASON_NETWORK_INVALID_REQUEST:
      return "NETWORK_INVALID_REQUEST";
    case INTERRUPT_REASON_SERVER_FAILED:
      return "SERVER_FAILED";
    case INTERRUPT_REASON_SERVER_NO_RANGE:
      return "SERVER_NO_RANGE";
    case INTERRUPT_REASON_SERVER_BAD_CONTENT:
      return "SERVER_BAD_CONTENT";
    case INTERRUPT_REASON_SERVER_UNAUTHORIZED:
      return "SERVER_UNAUTHORIZED";
    case INTERRUPT_REASON_SERVER_CERT_PROBLEM:
      return "SERVER_CERT_PROBLEM";
    case INTERRUPT_REASON_SERVER_FORBIDDEN:
      return "SERVER_FORBIDDEN";
    case INTERRUPT_REASON_SERVER_UNREACHABLE:
      return "SERVER_UNREACHABLE";
    case INTERRUPT_REASON_SERVER_CONTENT_LENGTH_MISMATCH:
      return "SERVER_CONTENT_LENGTH_MISMATCH";
    case INTERRUPT_REASON_SERVER_CROSS_ORIGIN_REDIRECT:
      return "SERVER_CROSS_ORIGIN_REDIRECT";
    case INTERRUPT_REASON_USER_CANCELED:
      return "USER_CANCELED";
    case INTERRUPT_REASON_USER_SHUTDOWN:
      return "USER_SHUTDOWN";
    case INTERRUPT_REASON_CRASH:
      return "CRASH";
    case INTERRUPT_REASON_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

InterruptReason ParseInterruptReason(base::StringPiece enum_string) {
  if (enum_string == "FILE_FAILED")
    return INTERRUPT_REASON_FILE_FAILED;
  if (enum_string == "FILE_ACCESS_DENIED")
    return INTERRUPT_REASON_FILE_ACCESS_DENIED;
  if (enum_string == "FILE_NO_SPACE")
    return INTERRUPT_REASON_FILE_NO_SPACE;
  if (enum_string == "FILE_NAME_TOO_LONG")
    return INTERRUPT_REASON_FILE_NAME_TOO_LONG;
  if (enum_string == "FILE_TOO_LARGE")
    return INTERRUPT_REASON_FILE_TOO_LARGE;
  if (enum_string == "FILE_VIRUS_INFECTED")
    return INTERRUPT_REASON_FILE_VIRUS_INFECTED;
  if (enum_string == "FILE_TRANSIENT_ERROR")
    return INTERRUPT_REASON_FILE_TRANSIENT_ERROR;
  if (enum_string == "FILE_BLOCKED")
    return INTERRUPT_REASON_FILE_BLOCKED;
  if (enum_string == "FILE_SECURITY_CHECK_FAILED")
    return INTERRUPT_REASON_FILE_SECURITY_CHECK_FAILED;
  if (enum_string == "FILE_TOO_SHORT")
    return INTERRUPT_REASON_FILE_TOO_SHORT;
  if (enum_string == "FILE_HASH_MISMATCH")
    return INTERRUPT_REASON_FILE_HASH_MISMATCH;
  if (enum_string == "FILE_SAME_AS_SOURCE")
    return INTERRUPT_REASON_FILE_SAME_AS_SOURCE;
  if (enum_string == "NETWORK_FAILED")
    return INTERRUPT_REASON_NETWORK_FAILED;
  if (enum_string == "NETWORK_TIMEOUT")
    return INTERRUPT_REASON_NETWORK_TIMEOUT;
  if (enum_string == "NETWORK_DISCONNECTED")
    return INTERRUPT_REASON_NETWORK_DISCONNECTED;
  if (enum_string == "NETWORK_SERVER_DOWN")
    return INTERRUPT_REASON_NETWORK_SERVER_DOWN;
  if (enum_string == "NETWORK_INVALID_REQUEST")
    return INTERRUPT_REASON_NETWORK_INVALID_REQUEST;
  if (enum_string == "SERVER_FAILED")
    return INTERRUPT_REASON_SERVER_FAILED;
  if (enum_string == "SERVER_NO_RANGE")
    return INTERRUPT_REASON_SERVER_NO_RANGE;
  if (enum_string == "SERVER_BAD_CONTENT")
    return INTERRUPT_REASON_SERVER_BAD_CONTENT;
  if (enum_string == "SERVER_UNAUTHORIZED")
    return INTERRUPT_REASON_SERVER_UNAUTHORIZED;
  if (enum_string == "SERVER_CERT_PROBLEM")
    return INTERRUPT_REASON_SERVER_CERT_PROBLEM;
  if (enum_string == "SERVER_FORBIDDEN")
    return INTERRUPT_REASON_SERVER_FORBIDDEN;
  if (enum_string == "SERVER_UNREACHABLE")
    return INTERRUPT_REASON_SERVER_UNREACHABLE;
  if (enum_string == "SERVER_CONTENT_LENGTH_MISMATCH")
    return INTERRUPT_REASON_SERVER_CONTENT_LENGTH_MISMATCH;
  if (enum_string == "SERVER_CROSS_ORIGIN_REDIRECT")
    return INTERRUPT_REASON_SERVER_CROSS_ORIGIN_REDIRECT;
  if (enum_string == "USER_CANCELED")
    return INTERRUPT_REASON_USER_CANCELED;
  if (enum_string == "USER_SHUTDOWN")
    return INTERRUPT_REASON_USER_SHUTDOWN;
  if (enum_string == "CRASH")
    return INTERRUPT_REASON_CRASH;
  return INTERRUPT_REASON_NONE;
}

std::u16string GetInterruptReasonParseError(base::StringPiece enum_string) {
  return u"expected \"FILE_FAILED\" or \"FILE_ACCESS_DENIED\" or \"FILE_NO_SPACE\" or \"FILE_NAME_TOO_LONG\" or \"FILE_TOO_LARGE\" or \"FILE_VIRUS_INFECTED\" or \"FILE_TRANSIENT_ERROR\" or \"FILE_BLOCKED\" or \"FILE_SECURITY_CHECK_FAILED\" or \"FILE_TOO_SHORT\" or \"FILE_HASH_MISMATCH\" or \"FILE_SAME_AS_SOURCE\" or \"NETWORK_FAILED\" or \"NETWORK_TIMEOUT\" or \"NETWORK_DISCONNECTED\" or \"NETWORK_SERVER_DOWN\" or \"NETWORK_INVALID_REQUEST\" or \"SERVER_FAILED\" or \"SERVER_NO_RANGE\" or \"SERVER_BAD_CONTENT\" or \"SERVER_UNAUTHORIZED\" or \"SERVER_CERT_PROBLEM\" or \"SERVER_FORBIDDEN\" or \"SERVER_UNREACHABLE\" or \"SERVER_CONTENT_LENGTH_MISMATCH\" or \"SERVER_CROSS_ORIGIN_REDIRECT\" or \"USER_CANCELED\" or \"USER_SHUTDOWN\" or \"CRASH\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


DownloadOptions::DownloadOptions()
: conflict_action(),
method() {}

DownloadOptions::~DownloadOptions() = default;
DownloadOptions::DownloadOptions(DownloadOptions&& rhs) = default;
DownloadOptions& DownloadOptions::operator=(DownloadOptions&& rhs) = default;
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
        out.filename = absl::nullopt;
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
        out.save_as = absl::nullopt;
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
        out.body = absl::nullopt;
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
std::unique_ptr<DownloadOptions> DownloadOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<DownloadOptions>();
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
absl::optional<DownloadOptions> DownloadOptions::FromValue(const base::Value::Dict& value) {
  DownloadOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DownloadOptions> DownloadOptions::FromValue(const base::Value& value) {
  DownloadOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
    case DANGER_TYPE_FILE:
      return "file";
    case DANGER_TYPE_URL:
      return "url";
    case DANGER_TYPE_CONTENT:
      return "content";
    case DANGER_TYPE_UNCOMMON:
      return "uncommon";
    case DANGER_TYPE_HOST:
      return "host";
    case DANGER_TYPE_UNWANTED:
      return "unwanted";
    case DANGER_TYPE_SAFE:
      return "safe";
    case DANGER_TYPE_ACCEPTED:
      return "accepted";
    case DANGER_TYPE_ALLOWLISTEDBYPOLICY:
      return "allowlistedByPolicy";
    case DANGER_TYPE_ASYNCSCANNING:
      return "asyncScanning";
    case DANGER_TYPE_PASSWORDPROTECTED:
      return "passwordProtected";
    case DANGER_TYPE_BLOCKEDTOOLARGE:
      return "blockedTooLarge";
    case DANGER_TYPE_SENSITIVECONTENTWARNING:
      return "sensitiveContentWarning";
    case DANGER_TYPE_SENSITIVECONTENTBLOCK:
      return "sensitiveContentBlock";
    case DANGER_TYPE_UNSUPPORTEDFILETYPE:
      return "unsupportedFileType";
    case DANGER_TYPE_DEEPSCANNEDFAILED:
      return "deepScannedFailed";
    case DANGER_TYPE_DEEPSCANNEDSAFE:
      return "deepScannedSafe";
    case DANGER_TYPE_DEEPSCANNEDOPENEDDANGEROUS:
      return "deepScannedOpenedDangerous";
    case DANGER_TYPE_PROMPTFORSCANNING:
      return "promptForScanning";
    case DANGER_TYPE_PROMPTFORLOCALPASSWORDSCANNING:
      return "promptForLocalPasswordScanning";
    case DANGER_TYPE_ACCOUNTCOMPROMISE:
      return "accountCompromise";
    case DANGER_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

DangerType ParseDangerType(base::StringPiece enum_string) {
  if (enum_string == "file")
    return DANGER_TYPE_FILE;
  if (enum_string == "url")
    return DANGER_TYPE_URL;
  if (enum_string == "content")
    return DANGER_TYPE_CONTENT;
  if (enum_string == "uncommon")
    return DANGER_TYPE_UNCOMMON;
  if (enum_string == "host")
    return DANGER_TYPE_HOST;
  if (enum_string == "unwanted")
    return DANGER_TYPE_UNWANTED;
  if (enum_string == "safe")
    return DANGER_TYPE_SAFE;
  if (enum_string == "accepted")
    return DANGER_TYPE_ACCEPTED;
  if (enum_string == "allowlistedByPolicy")
    return DANGER_TYPE_ALLOWLISTEDBYPOLICY;
  if (enum_string == "asyncScanning")
    return DANGER_TYPE_ASYNCSCANNING;
  if (enum_string == "passwordProtected")
    return DANGER_TYPE_PASSWORDPROTECTED;
  if (enum_string == "blockedTooLarge")
    return DANGER_TYPE_BLOCKEDTOOLARGE;
  if (enum_string == "sensitiveContentWarning")
    return DANGER_TYPE_SENSITIVECONTENTWARNING;
  if (enum_string == "sensitiveContentBlock")
    return DANGER_TYPE_SENSITIVECONTENTBLOCK;
  if (enum_string == "unsupportedFileType")
    return DANGER_TYPE_UNSUPPORTEDFILETYPE;
  if (enum_string == "deepScannedFailed")
    return DANGER_TYPE_DEEPSCANNEDFAILED;
  if (enum_string == "deepScannedSafe")
    return DANGER_TYPE_DEEPSCANNEDSAFE;
  if (enum_string == "deepScannedOpenedDangerous")
    return DANGER_TYPE_DEEPSCANNEDOPENEDDANGEROUS;
  if (enum_string == "promptForScanning")
    return DANGER_TYPE_PROMPTFORSCANNING;
  if (enum_string == "promptForLocalPasswordScanning")
    return DANGER_TYPE_PROMPTFORLOCALPASSWORDSCANNING;
  if (enum_string == "accountCompromise")
    return DANGER_TYPE_ACCOUNTCOMPROMISE;
  return DANGER_TYPE_NONE;
}

std::u16string GetDangerTypeParseError(base::StringPiece enum_string) {
  return u"expected \"file\" or \"url\" or \"content\" or \"uncommon\" or \"host\" or \"unwanted\" or \"safe\" or \"accepted\" or \"allowlistedByPolicy\" or \"asyncScanning\" or \"passwordProtected\" or \"blockedTooLarge\" or \"sensitiveContentWarning\" or \"sensitiveContentBlock\" or \"unsupportedFileType\" or \"deepScannedFailed\" or \"deepScannedSafe\" or \"deepScannedOpenedDangerous\" or \"promptForScanning\" or \"promptForLocalPasswordScanning\" or \"accountCompromise\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(State enum_param) {
  switch (enum_param) {
    case STATE_IN_PROGRESS:
      return "in_progress";
    case STATE_INTERRUPTED:
      return "interrupted";
    case STATE_COMPLETE:
      return "complete";
    case STATE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

State ParseState(base::StringPiece enum_string) {
  if (enum_string == "in_progress")
    return STATE_IN_PROGRESS;
  if (enum_string == "interrupted")
    return STATE_INTERRUPTED;
  if (enum_string == "complete")
    return STATE_COMPLETE;
  return STATE_NONE;
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
DownloadItem::DownloadItem(DownloadItem&& rhs) = default;
DownloadItem& DownloadItem::operator=(DownloadItem&& rhs) = default;
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
        out.end_time = absl::nullopt;
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
        out.estimated_end_time = absl::nullopt;
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
        out.by_extension_id = absl::nullopt;
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
        out.by_extension_name = absl::nullopt;
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
std::unique_ptr<DownloadItem> DownloadItem::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<DownloadItem>();
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
absl::optional<DownloadItem> DownloadItem::FromValue(const base::Value::Dict& value) {
  DownloadItem out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DownloadItem> DownloadItem::FromValue(const base::Value& value) {
  DownloadItem out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
DownloadQuery::DownloadQuery(DownloadQuery&& rhs) = default;
DownloadQuery& DownloadQuery::operator=(DownloadQuery&& rhs) = default;
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
        out.started_before = absl::nullopt;
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
        out.started_after = absl::nullopt;
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
        out.ended_before = absl::nullopt;
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
        out.ended_after = absl::nullopt;
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
        out.total_bytes_greater = absl::nullopt;
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
        out.total_bytes_less = absl::nullopt;
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
        out.filename_regex = absl::nullopt;
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
        out.url_regex = absl::nullopt;
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
        out.final_url_regex = absl::nullopt;
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
        out.limit = absl::nullopt;
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
        out.id = absl::nullopt;
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
        out.url = absl::nullopt;
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
        out.final_url = absl::nullopt;
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
        out.filename = absl::nullopt;
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
        out.mime = absl::nullopt;
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
        out.start_time = absl::nullopt;
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
        out.end_time = absl::nullopt;
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
        out.paused = absl::nullopt;
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
        out.bytes_received = absl::nullopt;
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
        out.total_bytes = absl::nullopt;
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
        out.file_size = absl::nullopt;
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
        out.exists = absl::nullopt;
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
std::unique_ptr<DownloadQuery> DownloadQuery::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<DownloadQuery>();
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
absl::optional<DownloadQuery> DownloadQuery::FromValue(const base::Value::Dict& value) {
  DownloadQuery out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DownloadQuery> DownloadQuery::FromValue(const base::Value& value) {
  DownloadQuery out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
StringDelta::StringDelta(StringDelta&& rhs) = default;
StringDelta& StringDelta::operator=(StringDelta&& rhs) = default;
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
        out.previous = absl::nullopt;
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
        out.current = absl::nullopt;
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
std::unique_ptr<StringDelta> StringDelta::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<StringDelta>();
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
absl::optional<StringDelta> StringDelta::FromValue(const base::Value::Dict& value) {
  StringDelta out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<StringDelta> StringDelta::FromValue(const base::Value& value) {
  StringDelta out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
DoubleDelta::DoubleDelta(DoubleDelta&& rhs) = default;
DoubleDelta& DoubleDelta::operator=(DoubleDelta&& rhs) = default;
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
        out.previous = absl::nullopt;
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
        out.current = absl::nullopt;
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
std::unique_ptr<DoubleDelta> DoubleDelta::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<DoubleDelta>();
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
absl::optional<DoubleDelta> DoubleDelta::FromValue(const base::Value::Dict& value) {
  DoubleDelta out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DoubleDelta> DoubleDelta::FromValue(const base::Value& value) {
  DoubleDelta out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
BooleanDelta::BooleanDelta(BooleanDelta&& rhs) = default;
BooleanDelta& BooleanDelta::operator=(BooleanDelta&& rhs) = default;
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
        out.previous = absl::nullopt;
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
        out.current = absl::nullopt;
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
std::unique_ptr<BooleanDelta> BooleanDelta::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<BooleanDelta>();
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
absl::optional<BooleanDelta> BooleanDelta::FromValue(const base::Value::Dict& value) {
  BooleanDelta out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<BooleanDelta> BooleanDelta::FromValue(const base::Value& value) {
  BooleanDelta out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
DownloadDelta::DownloadDelta(DownloadDelta&& rhs) = default;
DownloadDelta& DownloadDelta::operator=(DownloadDelta&& rhs) = default;
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
std::unique_ptr<DownloadDelta> DownloadDelta::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<DownloadDelta>();
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
absl::optional<DownloadDelta> DownloadDelta::FromValue(const base::Value::Dict& value) {
  DownloadDelta out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DownloadDelta> DownloadDelta::FromValue(const base::Value& value) {
  DownloadDelta out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
GetFileIconOptions::GetFileIconOptions(GetFileIconOptions&& rhs) = default;
GetFileIconOptions& GetFileIconOptions::operator=(GetFileIconOptions&& rhs) = default;
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
        out.size = absl::nullopt;
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
std::unique_ptr<GetFileIconOptions> GetFileIconOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<GetFileIconOptions>();
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
absl::optional<GetFileIconOptions> GetFileIconOptions::FromValue(const base::Value::Dict& value) {
  GetFileIconOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<GetFileIconOptions> GetFileIconOptions::FromValue(const base::Value& value) {
  GetFileIconOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
UiOptions::UiOptions(UiOptions&& rhs) = default;
UiOptions& UiOptions::operator=(UiOptions&& rhs) = default;
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
std::unique_ptr<UiOptions> UiOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<UiOptions>();
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
absl::optional<UiOptions> UiOptions::FromValue(const base::Value::Dict& value) {
  UiOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<UiOptions> UiOptions::FromValue(const base::Value& value) {
  UiOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
      if (!DownloadOptions::Populate(options_value.GetDict(), params.options)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
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
    const base::Value& query_value = args[0];
    {
      if (!query_value.is_dict()) {
        return absl::nullopt;
      }
      if (!DownloadQuery::Populate(query_value.GetDict(), params.query)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
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
    const base::Value& download_id_value = args[0];
    {
      auto temp = download_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.download_id = *temp;
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
}  // namespace Pause

namespace Resume {

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
    const base::Value& download_id_value = args[0];
    {
      auto temp = download_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.download_id = *temp;
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
}  // namespace Resume

namespace Cancel {

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
    const base::Value& download_id_value = args[0];
    {
      auto temp = download_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.download_id = *temp;
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
}  // namespace Cancel

namespace GetFileIcon {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& download_id_value = args[0];
    {
      auto temp = download_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.download_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& options_value = args[1];
    {
      if (!options_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        GetFileIconOptions temp;
        if (!GetFileIconOptions::Populate(options_value.GetDict(), temp))
          return absl::nullopt;
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
    const base::Value& download_id_value = args[0];
    {
      auto temp = download_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.download_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace Open

namespace Show {

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
    const base::Value& download_id_value = args[0];
    {
      auto temp = download_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.download_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace Show

namespace ShowDefaultFolder {

}  // namespace ShowDefaultFolder

namespace Erase {

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
    const base::Value& query_value = args[0];
    {
      if (!query_value.is_dict()) {
        return absl::nullopt;
      }
      if (!DownloadQuery::Populate(query_value.GetDict(), params.query)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
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
    const base::Value& download_id_value = args[0];
    {
      auto temp = download_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.download_id = *temp;
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
}  // namespace RemoveFile

namespace AcceptDanger {

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
    const base::Value& download_id_value = args[0];
    {
      auto temp = download_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.download_id = *temp;
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
}  // namespace AcceptDanger

namespace SetShelfEnabled {

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
    const base::Value& enabled_value = args[0];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.enabled = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SetShelfEnabled

namespace SetUiOptions {

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
      if (!UiOptions::Populate(options_value.GetDict(), params.options)) {
        return absl::nullopt;
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

base::Value::List Create(const DownloadItem& download_item) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((download_item).ToValue());

  return create_results;
}

}  // namespace OnDeterminingFilename

}  // namespace downloads
}  // namespace api
}  // namespace extensions

