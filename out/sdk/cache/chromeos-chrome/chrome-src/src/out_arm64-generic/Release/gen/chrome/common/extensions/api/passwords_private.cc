// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/passwords_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/passwords_private.h"

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
namespace passwords_private {
//
// Types
//

const char* ToString(PlaintextReason enum_param) {
  switch (enum_param) {
    case PlaintextReason::kView:
      return "VIEW";
    case PlaintextReason::kCopy:
      return "COPY";
    case PlaintextReason::kEdit:
      return "EDIT";
    case PlaintextReason::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

PlaintextReason ParsePlaintextReason(base::StringPiece enum_string) {
  if (enum_string == "VIEW")
    return PlaintextReason::kView;
  if (enum_string == "COPY")
    return PlaintextReason::kCopy;
  if (enum_string == "EDIT")
    return PlaintextReason::kEdit;
  return PlaintextReason::kNone;
}

std::u16string GetPlaintextReasonParseError(base::StringPiece enum_string) {
  return u"expected \"VIEW\" or \"COPY\" or \"EDIT\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ExportProgressStatus enum_param) {
  switch (enum_param) {
    case ExportProgressStatus::kNotStarted:
      return "NOT_STARTED";
    case ExportProgressStatus::kInProgress:
      return "IN_PROGRESS";
    case ExportProgressStatus::kSucceeded:
      return "SUCCEEDED";
    case ExportProgressStatus::kFailedCancelled:
      return "FAILED_CANCELLED";
    case ExportProgressStatus::kFailedWriteFailed:
      return "FAILED_WRITE_FAILED";
    case ExportProgressStatus::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ExportProgressStatus ParseExportProgressStatus(base::StringPiece enum_string) {
  if (enum_string == "NOT_STARTED")
    return ExportProgressStatus::kNotStarted;
  if (enum_string == "IN_PROGRESS")
    return ExportProgressStatus::kInProgress;
  if (enum_string == "SUCCEEDED")
    return ExportProgressStatus::kSucceeded;
  if (enum_string == "FAILED_CANCELLED")
    return ExportProgressStatus::kFailedCancelled;
  if (enum_string == "FAILED_WRITE_FAILED")
    return ExportProgressStatus::kFailedWriteFailed;
  return ExportProgressStatus::kNone;
}

std::u16string GetExportProgressStatusParseError(base::StringPiece enum_string) {
  return u"expected \"NOT_STARTED\" or \"IN_PROGRESS\" or \"SUCCEEDED\" or \"FAILED_CANCELLED\" or \"FAILED_WRITE_FAILED\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(CompromiseType enum_param) {
  switch (enum_param) {
    case CompromiseType::kLeaked:
      return "LEAKED";
    case CompromiseType::kPhished:
      return "PHISHED";
    case CompromiseType::kReused:
      return "REUSED";
    case CompromiseType::kWeak:
      return "WEAK";
    case CompromiseType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

CompromiseType ParseCompromiseType(base::StringPiece enum_string) {
  if (enum_string == "LEAKED")
    return CompromiseType::kLeaked;
  if (enum_string == "PHISHED")
    return CompromiseType::kPhished;
  if (enum_string == "REUSED")
    return CompromiseType::kReused;
  if (enum_string == "WEAK")
    return CompromiseType::kWeak;
  return CompromiseType::kNone;
}

std::u16string GetCompromiseTypeParseError(base::StringPiece enum_string) {
  return u"expected \"LEAKED\" or \"PHISHED\" or \"REUSED\" or \"WEAK\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(PasswordStoreSet enum_param) {
  switch (enum_param) {
    case PasswordStoreSet::kDevice:
      return "DEVICE";
    case PasswordStoreSet::kAccount:
      return "ACCOUNT";
    case PasswordStoreSet::kDeviceAndAccount:
      return "DEVICE_AND_ACCOUNT";
    case PasswordStoreSet::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

PasswordStoreSet ParsePasswordStoreSet(base::StringPiece enum_string) {
  if (enum_string == "DEVICE")
    return PasswordStoreSet::kDevice;
  if (enum_string == "ACCOUNT")
    return PasswordStoreSet::kAccount;
  if (enum_string == "DEVICE_AND_ACCOUNT")
    return PasswordStoreSet::kDeviceAndAccount;
  return PasswordStoreSet::kNone;
}

std::u16string GetPasswordStoreSetParseError(base::StringPiece enum_string) {
  return u"expected \"DEVICE\" or \"ACCOUNT\" or \"DEVICE_AND_ACCOUNT\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(PasswordCheckState enum_param) {
  switch (enum_param) {
    case PasswordCheckState::kIdle:
      return "IDLE";
    case PasswordCheckState::kRunning:
      return "RUNNING";
    case PasswordCheckState::kCanceled:
      return "CANCELED";
    case PasswordCheckState::kOffline:
      return "OFFLINE";
    case PasswordCheckState::kSignedOut:
      return "SIGNED_OUT";
    case PasswordCheckState::kNoPasswords:
      return "NO_PASSWORDS";
    case PasswordCheckState::kQuotaLimit:
      return "QUOTA_LIMIT";
    case PasswordCheckState::kOtherError:
      return "OTHER_ERROR";
    case PasswordCheckState::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

PasswordCheckState ParsePasswordCheckState(base::StringPiece enum_string) {
  if (enum_string == "IDLE")
    return PasswordCheckState::kIdle;
  if (enum_string == "RUNNING")
    return PasswordCheckState::kRunning;
  if (enum_string == "CANCELED")
    return PasswordCheckState::kCanceled;
  if (enum_string == "OFFLINE")
    return PasswordCheckState::kOffline;
  if (enum_string == "SIGNED_OUT")
    return PasswordCheckState::kSignedOut;
  if (enum_string == "NO_PASSWORDS")
    return PasswordCheckState::kNoPasswords;
  if (enum_string == "QUOTA_LIMIT")
    return PasswordCheckState::kQuotaLimit;
  if (enum_string == "OTHER_ERROR")
    return PasswordCheckState::kOtherError;
  return PasswordCheckState::kNone;
}

std::u16string GetPasswordCheckStateParseError(base::StringPiece enum_string) {
  return u"expected \"IDLE\" or \"RUNNING\" or \"CANCELED\" or \"OFFLINE\" or \"SIGNED_OUT\" or \"NO_PASSWORDS\" or \"QUOTA_LIMIT\" or \"OTHER_ERROR\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ImportResultsStatus enum_param) {
  switch (enum_param) {
    case ImportResultsStatus::kUnknownError:
      return "UNKNOWN_ERROR";
    case ImportResultsStatus::kSuccess:
      return "SUCCESS";
    case ImportResultsStatus::kIoError:
      return "IO_ERROR";
    case ImportResultsStatus::kBadFormat:
      return "BAD_FORMAT";
    case ImportResultsStatus::kDismissed:
      return "DISMISSED";
    case ImportResultsStatus::kMaxFileSize:
      return "MAX_FILE_SIZE";
    case ImportResultsStatus::kImportAlreadyActive:
      return "IMPORT_ALREADY_ACTIVE";
    case ImportResultsStatus::kNumPasswordsExceeded:
      return "NUM_PASSWORDS_EXCEEDED";
    case ImportResultsStatus::kConflicts:
      return "CONFLICTS";
    case ImportResultsStatus::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ImportResultsStatus ParseImportResultsStatus(base::StringPiece enum_string) {
  if (enum_string == "UNKNOWN_ERROR")
    return ImportResultsStatus::kUnknownError;
  if (enum_string == "SUCCESS")
    return ImportResultsStatus::kSuccess;
  if (enum_string == "IO_ERROR")
    return ImportResultsStatus::kIoError;
  if (enum_string == "BAD_FORMAT")
    return ImportResultsStatus::kBadFormat;
  if (enum_string == "DISMISSED")
    return ImportResultsStatus::kDismissed;
  if (enum_string == "MAX_FILE_SIZE")
    return ImportResultsStatus::kMaxFileSize;
  if (enum_string == "IMPORT_ALREADY_ACTIVE")
    return ImportResultsStatus::kImportAlreadyActive;
  if (enum_string == "NUM_PASSWORDS_EXCEEDED")
    return ImportResultsStatus::kNumPasswordsExceeded;
  if (enum_string == "CONFLICTS")
    return ImportResultsStatus::kConflicts;
  return ImportResultsStatus::kNone;
}

std::u16string GetImportResultsStatusParseError(base::StringPiece enum_string) {
  return u"expected \"UNKNOWN_ERROR\" or \"SUCCESS\" or \"IO_ERROR\" or \"BAD_FORMAT\" or \"DISMISSED\" or \"MAX_FILE_SIZE\" or \"IMPORT_ALREADY_ACTIVE\" or \"NUM_PASSWORDS_EXCEEDED\" or \"CONFLICTS\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ImportEntryStatus enum_param) {
  switch (enum_param) {
    case ImportEntryStatus::kUnknownError:
      return "UNKNOWN_ERROR";
    case ImportEntryStatus::kMissingPassword:
      return "MISSING_PASSWORD";
    case ImportEntryStatus::kMissingUrl:
      return "MISSING_URL";
    case ImportEntryStatus::kInvalidUrl:
      return "INVALID_URL";
    case ImportEntryStatus::kNonAsciiUrl:
      return "NON_ASCII_URL";
    case ImportEntryStatus::kLongUrl:
      return "LONG_URL";
    case ImportEntryStatus::kLongPassword:
      return "LONG_PASSWORD";
    case ImportEntryStatus::kLongUsername:
      return "LONG_USERNAME";
    case ImportEntryStatus::kConflictProfile:
      return "CONFLICT_PROFILE";
    case ImportEntryStatus::kConflictAccount:
      return "CONFLICT_ACCOUNT";
    case ImportEntryStatus::kLongNote:
      return "LONG_NOTE";
    case ImportEntryStatus::kLongConcatenatedNote:
      return "LONG_CONCATENATED_NOTE";
    case ImportEntryStatus::kValid:
      return "VALID";
    case ImportEntryStatus::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ImportEntryStatus ParseImportEntryStatus(base::StringPiece enum_string) {
  if (enum_string == "UNKNOWN_ERROR")
    return ImportEntryStatus::kUnknownError;
  if (enum_string == "MISSING_PASSWORD")
    return ImportEntryStatus::kMissingPassword;
  if (enum_string == "MISSING_URL")
    return ImportEntryStatus::kMissingUrl;
  if (enum_string == "INVALID_URL")
    return ImportEntryStatus::kInvalidUrl;
  if (enum_string == "NON_ASCII_URL")
    return ImportEntryStatus::kNonAsciiUrl;
  if (enum_string == "LONG_URL")
    return ImportEntryStatus::kLongUrl;
  if (enum_string == "LONG_PASSWORD")
    return ImportEntryStatus::kLongPassword;
  if (enum_string == "LONG_USERNAME")
    return ImportEntryStatus::kLongUsername;
  if (enum_string == "CONFLICT_PROFILE")
    return ImportEntryStatus::kConflictProfile;
  if (enum_string == "CONFLICT_ACCOUNT")
    return ImportEntryStatus::kConflictAccount;
  if (enum_string == "LONG_NOTE")
    return ImportEntryStatus::kLongNote;
  if (enum_string == "LONG_CONCATENATED_NOTE")
    return ImportEntryStatus::kLongConcatenatedNote;
  if (enum_string == "VALID")
    return ImportEntryStatus::kValid;
  return ImportEntryStatus::kNone;
}

std::u16string GetImportEntryStatusParseError(base::StringPiece enum_string) {
  return u"expected \"UNKNOWN_ERROR\" or \"MISSING_PASSWORD\" or \"MISSING_URL\" or \"INVALID_URL\" or \"NON_ASCII_URL\" or \"LONG_URL\" or \"LONG_PASSWORD\" or \"LONG_USERNAME\" or \"CONFLICT_PROFILE\" or \"CONFLICT_ACCOUNT\" or \"LONG_NOTE\" or \"LONG_CONCATENATED_NOTE\" or \"VALID\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(FamilyFetchStatus enum_param) {
  switch (enum_param) {
    case FamilyFetchStatus::kUnknownError:
      return "UNKNOWN_ERROR";
    case FamilyFetchStatus::kNoMembers:
      return "NO_MEMBERS";
    case FamilyFetchStatus::kSuccess:
      return "SUCCESS";
    case FamilyFetchStatus::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

FamilyFetchStatus ParseFamilyFetchStatus(base::StringPiece enum_string) {
  if (enum_string == "UNKNOWN_ERROR")
    return FamilyFetchStatus::kUnknownError;
  if (enum_string == "NO_MEMBERS")
    return FamilyFetchStatus::kNoMembers;
  if (enum_string == "SUCCESS")
    return FamilyFetchStatus::kSuccess;
  return FamilyFetchStatus::kNone;
}

std::u16string GetFamilyFetchStatusParseError(base::StringPiece enum_string) {
  return u"expected \"UNKNOWN_ERROR\" or \"NO_MEMBERS\" or \"SUCCESS\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


PublicKey::PublicKey()
: version(0) {}

PublicKey::~PublicKey() = default;
PublicKey::PublicKey(PublicKey&& rhs) noexcept = default;
PublicKey& PublicKey::operator=(PublicKey&& rhs) noexcept = default;
PublicKey PublicKey::Clone() const {
  PublicKey out;
  out.value = value;
  out.version = version;
  return out;
}

// static
bool PublicKey::Populate(
    const base::Value::Dict& dict, PublicKey& out) {
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

  const base::Value* version_value = dict.Find("version");
  if (!version_value) {
    return false;
  }
  {
    auto temp = (*version_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.version = *temp;
  }

  return true;
}

// static
bool PublicKey::Populate(
    const base::Value& value, PublicKey& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PublicKey> PublicKey::FromValue(const base::Value::Dict& value) {
  PublicKey out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PublicKey> PublicKey::FromValue(const base::Value& value) {
  PublicKey out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict PublicKey::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("value", this->value);

  to_value_result.Set("version", this->version);


  return to_value_result;
}


RecipientInfo::RecipientInfo()
: is_eligible(false) {}

RecipientInfo::~RecipientInfo() = default;
RecipientInfo::RecipientInfo(RecipientInfo&& rhs) noexcept = default;
RecipientInfo& RecipientInfo::operator=(RecipientInfo&& rhs) noexcept = default;
RecipientInfo RecipientInfo::Clone() const {
  RecipientInfo out;
  out.user_id = user_id;
  out.email = email;
  out.display_name = display_name;
  out.profile_image_url = profile_image_url;
  out.is_eligible = is_eligible;
  if (public_key) {
    out.public_key = public_key->Clone();
  }
  return out;
}

// static
bool RecipientInfo::Populate(
    const base::Value::Dict& dict, RecipientInfo& out) {
  const base::Value* user_id_value = dict.Find("userId");
  if (!user_id_value) {
    return false;
  }
  {
    auto* temp = (*user_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.user_id = *temp;
  }

  const base::Value* email_value = dict.Find("email");
  if (!email_value) {
    return false;
  }
  {
    auto* temp = (*email_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.email = *temp;
  }

  const base::Value* display_name_value = dict.Find("displayName");
  if (!display_name_value) {
    return false;
  }
  {
    auto* temp = (*display_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.display_name = *temp;
  }

  const base::Value* profile_image_url_value = dict.Find("profileImageUrl");
  if (!profile_image_url_value) {
    return false;
  }
  {
    auto* temp = (*profile_image_url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.profile_image_url = *temp;
  }

  const base::Value* is_eligible_value = dict.Find("isEligible");
  if (!is_eligible_value) {
    return false;
  }
  {
    auto temp = (*is_eligible_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_eligible = *temp;
  }

  const base::Value* public_key_value = dict.Find("publicKey");
  if (public_key_value) {
    {
      if (!(*public_key_value).is_dict()) {
        return false;
      }
      else {
        PublicKey temp;
        if (!PublicKey::Populate((*public_key_value).GetDict(), temp))
          return false;
        out.public_key = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool RecipientInfo::Populate(
    const base::Value& value, RecipientInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RecipientInfo> RecipientInfo::FromValue(const base::Value::Dict& value) {
  RecipientInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RecipientInfo> RecipientInfo::FromValue(const base::Value& value) {
  RecipientInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RecipientInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("userId", this->user_id);

  to_value_result.Set("email", this->email);

  to_value_result.Set("displayName", this->display_name);

  to_value_result.Set("profileImageUrl", this->profile_image_url);

  to_value_result.Set("isEligible", this->is_eligible);

  if (this->public_key) {
    to_value_result.Set("publicKey", (this->public_key)->ToValue());

  }

  return to_value_result;
}


FamilyFetchResults::FamilyFetchResults()
: status() {}

FamilyFetchResults::~FamilyFetchResults() = default;
FamilyFetchResults::FamilyFetchResults(FamilyFetchResults&& rhs) noexcept = default;
FamilyFetchResults& FamilyFetchResults::operator=(FamilyFetchResults&& rhs) noexcept = default;
FamilyFetchResults FamilyFetchResults::Clone() const {
  FamilyFetchResults out;
  out.status = status;
  out.family_members.reserve(family_members.size());
  for (const auto& element : family_members) {
    json_schema_compiler::util::AppendToContainer(out.family_members, element.Clone());
  }
  return out;
}

// static
bool FamilyFetchResults::Populate(
    const base::Value::Dict& dict, FamilyFetchResults& out) {
  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    const std::string* family_fetch_status_as_string = (*status_value).GetIfString();
    if (!family_fetch_status_as_string) {
      return false;
    }
    out.status = ParseFamilyFetchStatus(*family_fetch_status_as_string);
    if (out.status == FamilyFetchStatus()) {
      return false;
    }
  }

  const base::Value* family_members_value = dict.Find("familyMembers");
  if (!family_members_value) {
    return false;
  }
  {
    if (!(*family_members_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*family_members_value).GetList(), out.family_members)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool FamilyFetchResults::Populate(
    const base::Value& value, FamilyFetchResults& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<FamilyFetchResults> FamilyFetchResults::FromValue(const base::Value::Dict& value) {
  FamilyFetchResults out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<FamilyFetchResults> FamilyFetchResults::FromValue(const base::Value& value) {
  FamilyFetchResults out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict FamilyFetchResults::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("status", passwords_private::ToString(this->status));

  to_value_result.Set("familyMembers", json_schema_compiler::util::CreateValueFromArray(this->family_members));


  return to_value_result;
}


ImportEntry::ImportEntry()
: status(),
id(0) {}

ImportEntry::~ImportEntry() = default;
ImportEntry::ImportEntry(ImportEntry&& rhs) noexcept = default;
ImportEntry& ImportEntry::operator=(ImportEntry&& rhs) noexcept = default;
ImportEntry ImportEntry::Clone() const {
  ImportEntry out;
  out.status = status;
  out.url = url;
  out.username = username;
  out.password = password;
  out.id = id;
  return out;
}

// static
bool ImportEntry::Populate(
    const base::Value::Dict& dict, ImportEntry& out) {
  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    const std::string* import_entry_status_as_string = (*status_value).GetIfString();
    if (!import_entry_status_as_string) {
      return false;
    }
    out.status = ParseImportEntryStatus(*import_entry_status_as_string);
    if (out.status == ImportEntryStatus()) {
      return false;
    }
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

  const base::Value* username_value = dict.Find("username");
  if (!username_value) {
    return false;
  }
  {
    auto* temp = (*username_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.username = *temp;
  }

  const base::Value* password_value = dict.Find("password");
  if (!password_value) {
    return false;
  }
  {
    auto* temp = (*password_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.password = *temp;
  }

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

  return true;
}

// static
bool ImportEntry::Populate(
    const base::Value& value, ImportEntry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ImportEntry> ImportEntry::FromValue(const base::Value::Dict& value) {
  ImportEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ImportEntry> ImportEntry::FromValue(const base::Value& value) {
  ImportEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ImportEntry::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("status", passwords_private::ToString(this->status));

  to_value_result.Set("url", this->url);

  to_value_result.Set("username", this->username);

  to_value_result.Set("password", this->password);

  to_value_result.Set("id", this->id);


  return to_value_result;
}


ImportResults::ImportResults()
: status(),
number_imported(0) {}

ImportResults::~ImportResults() = default;
ImportResults::ImportResults(ImportResults&& rhs) noexcept = default;
ImportResults& ImportResults::operator=(ImportResults&& rhs) noexcept = default;
ImportResults ImportResults::Clone() const {
  ImportResults out;
  out.status = status;
  out.number_imported = number_imported;
  out.displayed_entries.reserve(displayed_entries.size());
  for (const auto& element : displayed_entries) {
    json_schema_compiler::util::AppendToContainer(out.displayed_entries, element.Clone());
  }
  out.file_name = file_name;
  return out;
}

// static
bool ImportResults::Populate(
    const base::Value::Dict& dict, ImportResults& out) {
  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    const std::string* import_results_status_as_string = (*status_value).GetIfString();
    if (!import_results_status_as_string) {
      return false;
    }
    out.status = ParseImportResultsStatus(*import_results_status_as_string);
    if (out.status == ImportResultsStatus()) {
      return false;
    }
  }

  const base::Value* number_imported_value = dict.Find("numberImported");
  if (!number_imported_value) {
    return false;
  }
  {
    auto temp = (*number_imported_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.number_imported = *temp;
  }

  const base::Value* displayed_entries_value = dict.Find("displayedEntries");
  if (!displayed_entries_value) {
    return false;
  }
  {
    if (!(*displayed_entries_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*displayed_entries_value).GetList(), out.displayed_entries)) {
        return false;
      }
    }
  }

  const base::Value* file_name_value = dict.Find("fileName");
  if (!file_name_value) {
    return false;
  }
  {
    auto* temp = (*file_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_name = *temp;
  }

  return true;
}

// static
bool ImportResults::Populate(
    const base::Value& value, ImportResults& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ImportResults> ImportResults::FromValue(const base::Value::Dict& value) {
  ImportResults out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ImportResults> ImportResults::FromValue(const base::Value& value) {
  ImportResults out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ImportResults::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("status", passwords_private::ToString(this->status));

  to_value_result.Set("numberImported", this->number_imported);

  to_value_result.Set("displayedEntries", json_schema_compiler::util::CreateValueFromArray(this->displayed_entries));

  to_value_result.Set("fileName", this->file_name);


  return to_value_result;
}


UrlCollection::UrlCollection()
 {}

UrlCollection::~UrlCollection() = default;
UrlCollection::UrlCollection(UrlCollection&& rhs) noexcept = default;
UrlCollection& UrlCollection::operator=(UrlCollection&& rhs) noexcept = default;
UrlCollection UrlCollection::Clone() const {
  UrlCollection out;
  out.signon_realm = signon_realm;
  out.shown = shown;
  out.link = link;
  return out;
}

// static
bool UrlCollection::Populate(
    const base::Value::Dict& dict, UrlCollection& out) {
  const base::Value* signon_realm_value = dict.Find("signonRealm");
  if (!signon_realm_value) {
    return false;
  }
  {
    auto* temp = (*signon_realm_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.signon_realm = *temp;
  }

  const base::Value* shown_value = dict.Find("shown");
  if (!shown_value) {
    return false;
  }
  {
    auto* temp = (*shown_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.shown = *temp;
  }

  const base::Value* link_value = dict.Find("link");
  if (!link_value) {
    return false;
  }
  {
    auto* temp = (*link_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.link = *temp;
  }

  return true;
}

// static
bool UrlCollection::Populate(
    const base::Value& value, UrlCollection& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<UrlCollection> UrlCollection::FromValue(const base::Value::Dict& value) {
  UrlCollection out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<UrlCollection> UrlCollection::FromValue(const base::Value& value) {
  UrlCollection out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict UrlCollection::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("signonRealm", this->signon_realm);

  to_value_result.Set("shown", this->shown);

  to_value_result.Set("link", this->link);


  return to_value_result;
}


CompromisedInfo::CompromisedInfo()
: compromise_time(0.0),
is_muted(false) {}

CompromisedInfo::~CompromisedInfo() = default;
CompromisedInfo::CompromisedInfo(CompromisedInfo&& rhs) noexcept = default;
CompromisedInfo& CompromisedInfo::operator=(CompromisedInfo&& rhs) noexcept = default;
CompromisedInfo CompromisedInfo::Clone() const {
  CompromisedInfo out;
  out.compromise_time = compromise_time;
  out.elapsed_time_since_compromise = elapsed_time_since_compromise;
  out.compromise_types = compromise_types;
  out.is_muted = is_muted;
  return out;
}

// static
bool CompromisedInfo::Populate(
    const base::Value::Dict& dict, CompromisedInfo& out) {
  const base::Value* compromise_time_value = dict.Find("compromiseTime");
  if (!compromise_time_value) {
    return false;
  }
  {
    auto temp = (*compromise_time_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.compromise_time = *temp;
  }

  const base::Value* elapsed_time_since_compromise_value = dict.Find("elapsedTimeSinceCompromise");
  if (!elapsed_time_since_compromise_value) {
    return false;
  }
  {
    auto* temp = (*elapsed_time_since_compromise_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.elapsed_time_since_compromise = *temp;
  }

  const base::Value* compromise_types_value = dict.Find("compromiseTypes");
  if (!compromise_types_value) {
    return false;
  }
  {
    if (!(*compromise_types_value).is_list()) {
      return false;
    }
    else {
      for (const auto& it : ((*compromise_types_value)).GetList()) {
        CompromiseType tmp;
        const std::string* compromise_type_as_string = (it).GetIfString();
        if (!compromise_type_as_string) {
          return false;
        }
        tmp = ParseCompromiseType(*compromise_type_as_string);
        if (tmp == CompromiseType()) {
          return false;
        }
        out.compromise_types.push_back(tmp);
      }
    }
  }

  const base::Value* is_muted_value = dict.Find("isMuted");
  if (!is_muted_value) {
    return false;
  }
  {
    auto temp = (*is_muted_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_muted = *temp;
  }

  return true;
}

// static
bool CompromisedInfo::Populate(
    const base::Value& value, CompromisedInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CompromisedInfo> CompromisedInfo::FromValue(const base::Value::Dict& value) {
  CompromisedInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CompromisedInfo> CompromisedInfo::FromValue(const base::Value& value) {
  CompromisedInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict CompromisedInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("compromiseTime", this->compromise_time);

  to_value_result.Set("elapsedTimeSinceCompromise", this->elapsed_time_since_compromise);

  {
    std::vector<std::string> compromiseTypes_list;
    for (const auto& it : (this->compromise_types)) {
      compromiseTypes_list.emplace_back(passwords_private::ToString(it));
    }
    to_value_result.Set("compromiseTypes", json_schema_compiler::util::CreateValueFromArray(compromiseTypes_list));
  }

  to_value_result.Set("isMuted", this->is_muted);


  return to_value_result;
}


DomainInfo::DomainInfo()
 {}

DomainInfo::~DomainInfo() = default;
DomainInfo::DomainInfo(DomainInfo&& rhs) noexcept = default;
DomainInfo& DomainInfo::operator=(DomainInfo&& rhs) noexcept = default;
DomainInfo DomainInfo::Clone() const {
  DomainInfo out;
  out.name = name;
  out.url = url;
  out.signon_realm = signon_realm;
  return out;
}

// static
bool DomainInfo::Populate(
    const base::Value::Dict& dict, DomainInfo& out) {
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

  const base::Value* signon_realm_value = dict.Find("signonRealm");
  if (!signon_realm_value) {
    return false;
  }
  {
    auto* temp = (*signon_realm_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.signon_realm = *temp;
  }

  return true;
}

// static
bool DomainInfo::Populate(
    const base::Value& value, DomainInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DomainInfo> DomainInfo::FromValue(const base::Value::Dict& value) {
  DomainInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DomainInfo> DomainInfo::FromValue(const base::Value& value) {
  DomainInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DomainInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("name", this->name);

  to_value_result.Set("url", this->url);

  to_value_result.Set("signonRealm", this->signon_realm);


  return to_value_result;
}


PasswordUiEntry::PasswordUiEntry()
: id(0),
stored_in(),
is_passkey(false) {}

PasswordUiEntry::~PasswordUiEntry() = default;
PasswordUiEntry::PasswordUiEntry(PasswordUiEntry&& rhs) noexcept = default;
PasswordUiEntry& PasswordUiEntry::operator=(PasswordUiEntry&& rhs) noexcept = default;
PasswordUiEntry PasswordUiEntry::Clone() const {
  PasswordUiEntry out;
  out.affiliated_domains.reserve(affiliated_domains.size());
  for (const auto& element : affiliated_domains) {
    json_schema_compiler::util::AppendToContainer(out.affiliated_domains, element.Clone());
  }
  out.username = username;
  out.display_name = display_name;
  out.password = password;
  out.federation_text = federation_text;
  out.id = id;
  out.stored_in = stored_in;
  out.is_passkey = is_passkey;
  out.note = note;
  out.change_password_url = change_password_url;
  if (compromised_info) {
    out.compromised_info = compromised_info->Clone();
  }
  return out;
}

// static
bool PasswordUiEntry::Populate(
    const base::Value::Dict& dict, PasswordUiEntry& out) {
  const base::Value* affiliated_domains_value = dict.Find("affiliatedDomains");
  if (!affiliated_domains_value) {
    return false;
  }
  {
    if (!(*affiliated_domains_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*affiliated_domains_value).GetList(), out.affiliated_domains)) {
        return false;
      }
    }
  }

  const base::Value* username_value = dict.Find("username");
  if (!username_value) {
    return false;
  }
  {
    auto* temp = (*username_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.username = *temp;
  }

  const base::Value* display_name_value = dict.Find("displayName");
  if (display_name_value) {
    {
      auto* temp = (*display_name_value).GetIfString();
      if (!temp) {
        out.display_name = std::nullopt;
        return false;
      }
      out.display_name = *temp;
    }
  }

  const base::Value* password_value = dict.Find("password");
  if (password_value) {
    {
      auto* temp = (*password_value).GetIfString();
      if (!temp) {
        out.password = std::nullopt;
        return false;
      }
      out.password = *temp;
    }
  }

  const base::Value* federation_text_value = dict.Find("federationText");
  if (federation_text_value) {
    {
      auto* temp = (*federation_text_value).GetIfString();
      if (!temp) {
        out.federation_text = std::nullopt;
        return false;
      }
      out.federation_text = *temp;
    }
  }

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

  const base::Value* stored_in_value = dict.Find("storedIn");
  if (!stored_in_value) {
    return false;
  }
  {
    const std::string* password_store_set_as_string = (*stored_in_value).GetIfString();
    if (!password_store_set_as_string) {
      return false;
    }
    out.stored_in = ParsePasswordStoreSet(*password_store_set_as_string);
    if (out.stored_in == PasswordStoreSet()) {
      return false;
    }
  }

  const base::Value* is_passkey_value = dict.Find("isPasskey");
  if (!is_passkey_value) {
    return false;
  }
  {
    auto temp = (*is_passkey_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_passkey = *temp;
  }

  const base::Value* note_value = dict.Find("note");
  if (note_value) {
    {
      auto* temp = (*note_value).GetIfString();
      if (!temp) {
        out.note = std::nullopt;
        return false;
      }
      out.note = *temp;
    }
  }

  const base::Value* change_password_url_value = dict.Find("changePasswordUrl");
  if (change_password_url_value) {
    {
      auto* temp = (*change_password_url_value).GetIfString();
      if (!temp) {
        out.change_password_url = std::nullopt;
        return false;
      }
      out.change_password_url = *temp;
    }
  }

  const base::Value* compromised_info_value = dict.Find("compromisedInfo");
  if (compromised_info_value) {
    {
      if (!(*compromised_info_value).is_dict()) {
        return false;
      }
      else {
        CompromisedInfo temp;
        if (!CompromisedInfo::Populate((*compromised_info_value).GetDict(), temp))
          return false;
        out.compromised_info = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool PasswordUiEntry::Populate(
    const base::Value& value, PasswordUiEntry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PasswordUiEntry> PasswordUiEntry::FromValue(const base::Value::Dict& value) {
  PasswordUiEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PasswordUiEntry> PasswordUiEntry::FromValue(const base::Value& value) {
  PasswordUiEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict PasswordUiEntry::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("affiliatedDomains", json_schema_compiler::util::CreateValueFromArray(this->affiliated_domains));

  to_value_result.Set("username", this->username);

  if (this->display_name) {
    to_value_result.Set("displayName", *this->display_name);

  }
  if (this->password) {
    to_value_result.Set("password", *this->password);

  }
  if (this->federation_text) {
    to_value_result.Set("federationText", *this->federation_text);

  }
  to_value_result.Set("id", this->id);

  to_value_result.Set("storedIn", passwords_private::ToString(this->stored_in));

  to_value_result.Set("isPasskey", this->is_passkey);

  if (this->note) {
    to_value_result.Set("note", *this->note);

  }
  if (this->change_password_url) {
    to_value_result.Set("changePasswordUrl", *this->change_password_url);

  }
  if (this->compromised_info) {
    to_value_result.Set("compromisedInfo", (this->compromised_info)->ToValue());

  }

  return to_value_result;
}


CredentialGroup::CredentialGroup()
 {}

CredentialGroup::~CredentialGroup() = default;
CredentialGroup::CredentialGroup(CredentialGroup&& rhs) noexcept = default;
CredentialGroup& CredentialGroup::operator=(CredentialGroup&& rhs) noexcept = default;
CredentialGroup CredentialGroup::Clone() const {
  CredentialGroup out;
  out.name = name;
  out.icon_url = icon_url;
  out.entries.reserve(entries.size());
  for (const auto& element : entries) {
    json_schema_compiler::util::AppendToContainer(out.entries, element.Clone());
  }
  return out;
}

// static
bool CredentialGroup::Populate(
    const base::Value::Dict& dict, CredentialGroup& out) {
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

  const base::Value* icon_url_value = dict.Find("iconUrl");
  if (!icon_url_value) {
    return false;
  }
  {
    auto* temp = (*icon_url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.icon_url = *temp;
  }

  const base::Value* entries_value = dict.Find("entries");
  if (!entries_value) {
    return false;
  }
  {
    if (!(*entries_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*entries_value).GetList(), out.entries)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool CredentialGroup::Populate(
    const base::Value& value, CredentialGroup& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CredentialGroup> CredentialGroup::FromValue(const base::Value::Dict& value) {
  CredentialGroup out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CredentialGroup> CredentialGroup::FromValue(const base::Value& value) {
  CredentialGroup out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict CredentialGroup::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("name", this->name);

  to_value_result.Set("iconUrl", this->icon_url);

  to_value_result.Set("entries", json_schema_compiler::util::CreateValueFromArray(this->entries));


  return to_value_result;
}


ExceptionEntry::ExceptionEntry()
: id(0) {}

ExceptionEntry::~ExceptionEntry() = default;
ExceptionEntry::ExceptionEntry(ExceptionEntry&& rhs) noexcept = default;
ExceptionEntry& ExceptionEntry::operator=(ExceptionEntry&& rhs) noexcept = default;
ExceptionEntry ExceptionEntry::Clone() const {
  ExceptionEntry out;
  out.urls = urls.Clone();
  out.id = id;
  return out;
}

// static
bool ExceptionEntry::Populate(
    const base::Value::Dict& dict, ExceptionEntry& out) {
  const base::Value* urls_value = dict.Find("urls");
  if (!urls_value) {
    return false;
  }
  {
    if (!(*urls_value).is_dict()) {
      return false;
    }
    if (!UrlCollection::Populate((*urls_value).GetDict(), out.urls)) {
      return false;
    }
  }

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

  return true;
}

// static
bool ExceptionEntry::Populate(
    const base::Value& value, ExceptionEntry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ExceptionEntry> ExceptionEntry::FromValue(const base::Value::Dict& value) {
  ExceptionEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ExceptionEntry> ExceptionEntry::FromValue(const base::Value& value) {
  ExceptionEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ExceptionEntry::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("urls", (this->urls).ToValue());

  to_value_result.Set("id", this->id);


  return to_value_result;
}


PasswordExportProgress::PasswordExportProgress()
: status() {}

PasswordExportProgress::~PasswordExportProgress() = default;
PasswordExportProgress::PasswordExportProgress(PasswordExportProgress&& rhs) noexcept = default;
PasswordExportProgress& PasswordExportProgress::operator=(PasswordExportProgress&& rhs) noexcept = default;
PasswordExportProgress PasswordExportProgress::Clone() const {
  PasswordExportProgress out;
  out.status = status;
  out.file_path = file_path;
  out.folder_name = folder_name;
  return out;
}

// static
bool PasswordExportProgress::Populate(
    const base::Value::Dict& dict, PasswordExportProgress& out) {
  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    const std::string* export_progress_status_as_string = (*status_value).GetIfString();
    if (!export_progress_status_as_string) {
      return false;
    }
    out.status = ParseExportProgressStatus(*export_progress_status_as_string);
    if (out.status == ExportProgressStatus()) {
      return false;
    }
  }

  const base::Value* file_path_value = dict.Find("filePath");
  if (file_path_value) {
    {
      auto* temp = (*file_path_value).GetIfString();
      if (!temp) {
        out.file_path = std::nullopt;
        return false;
      }
      out.file_path = *temp;
    }
  }

  const base::Value* folder_name_value = dict.Find("folderName");
  if (folder_name_value) {
    {
      auto* temp = (*folder_name_value).GetIfString();
      if (!temp) {
        out.folder_name = std::nullopt;
        return false;
      }
      out.folder_name = *temp;
    }
  }

  return true;
}

// static
bool PasswordExportProgress::Populate(
    const base::Value& value, PasswordExportProgress& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PasswordExportProgress> PasswordExportProgress::FromValue(const base::Value::Dict& value) {
  PasswordExportProgress out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PasswordExportProgress> PasswordExportProgress::FromValue(const base::Value& value) {
  PasswordExportProgress out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict PasswordExportProgress::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("status", passwords_private::ToString(this->status));

  if (this->file_path) {
    to_value_result.Set("filePath", *this->file_path);

  }
  if (this->folder_name) {
    to_value_result.Set("folderName", *this->folder_name);

  }

  return to_value_result;
}


PasswordCheckStatus::PasswordCheckStatus()
: state() {}

PasswordCheckStatus::~PasswordCheckStatus() = default;
PasswordCheckStatus::PasswordCheckStatus(PasswordCheckStatus&& rhs) noexcept = default;
PasswordCheckStatus& PasswordCheckStatus::operator=(PasswordCheckStatus&& rhs) noexcept = default;
PasswordCheckStatus PasswordCheckStatus::Clone() const {
  PasswordCheckStatus out;
  out.state = state;
  out.total_number_of_passwords = total_number_of_passwords;
  out.already_processed = already_processed;
  out.remaining_in_queue = remaining_in_queue;
  out.elapsed_time_since_last_check = elapsed_time_since_last_check;
  return out;
}

// static
bool PasswordCheckStatus::Populate(
    const base::Value::Dict& dict, PasswordCheckStatus& out) {
  const base::Value* state_value = dict.Find("state");
  if (!state_value) {
    return false;
  }
  {
    const std::string* password_check_state_as_string = (*state_value).GetIfString();
    if (!password_check_state_as_string) {
      return false;
    }
    out.state = ParsePasswordCheckState(*password_check_state_as_string);
    if (out.state == PasswordCheckState()) {
      return false;
    }
  }

  const base::Value* total_number_of_passwords_value = dict.Find("totalNumberOfPasswords");
  if (total_number_of_passwords_value) {
    {
      auto temp = (*total_number_of_passwords_value).GetIfInt();
      if (!temp.has_value()) {
        out.total_number_of_passwords = std::nullopt;
        return false;
      }
      out.total_number_of_passwords = *temp;
    }
  }

  const base::Value* already_processed_value = dict.Find("alreadyProcessed");
  if (already_processed_value) {
    {
      auto temp = (*already_processed_value).GetIfInt();
      if (!temp.has_value()) {
        out.already_processed = std::nullopt;
        return false;
      }
      out.already_processed = *temp;
    }
  }

  const base::Value* remaining_in_queue_value = dict.Find("remainingInQueue");
  if (remaining_in_queue_value) {
    {
      auto temp = (*remaining_in_queue_value).GetIfInt();
      if (!temp.has_value()) {
        out.remaining_in_queue = std::nullopt;
        return false;
      }
      out.remaining_in_queue = *temp;
    }
  }

  const base::Value* elapsed_time_since_last_check_value = dict.Find("elapsedTimeSinceLastCheck");
  if (elapsed_time_since_last_check_value) {
    {
      auto* temp = (*elapsed_time_since_last_check_value).GetIfString();
      if (!temp) {
        out.elapsed_time_since_last_check = std::nullopt;
        return false;
      }
      out.elapsed_time_since_last_check = *temp;
    }
  }

  return true;
}

// static
bool PasswordCheckStatus::Populate(
    const base::Value& value, PasswordCheckStatus& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PasswordCheckStatus> PasswordCheckStatus::FromValue(const base::Value::Dict& value) {
  PasswordCheckStatus out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PasswordCheckStatus> PasswordCheckStatus::FromValue(const base::Value& value) {
  PasswordCheckStatus out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict PasswordCheckStatus::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("state", passwords_private::ToString(this->state));

  if (this->total_number_of_passwords) {
    to_value_result.Set("totalNumberOfPasswords", *this->total_number_of_passwords);

  }
  if (this->already_processed) {
    to_value_result.Set("alreadyProcessed", *this->already_processed);

  }
  if (this->remaining_in_queue) {
    to_value_result.Set("remainingInQueue", *this->remaining_in_queue);

  }
  if (this->elapsed_time_since_last_check) {
    to_value_result.Set("elapsedTimeSinceLastCheck", *this->elapsed_time_since_last_check);

  }

  return to_value_result;
}


AddPasswordOptions::AddPasswordOptions()
: use_account_store(false) {}

AddPasswordOptions::~AddPasswordOptions() = default;
AddPasswordOptions::AddPasswordOptions(AddPasswordOptions&& rhs) noexcept = default;
AddPasswordOptions& AddPasswordOptions::operator=(AddPasswordOptions&& rhs) noexcept = default;
AddPasswordOptions AddPasswordOptions::Clone() const {
  AddPasswordOptions out;
  out.url = url;
  out.username = username;
  out.password = password;
  out.note = note;
  out.use_account_store = use_account_store;
  return out;
}

// static
bool AddPasswordOptions::Populate(
    const base::Value::Dict& dict, AddPasswordOptions& out) {
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

  const base::Value* username_value = dict.Find("username");
  if (!username_value) {
    return false;
  }
  {
    auto* temp = (*username_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.username = *temp;
  }

  const base::Value* password_value = dict.Find("password");
  if (!password_value) {
    return false;
  }
  {
    auto* temp = (*password_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.password = *temp;
  }

  const base::Value* note_value = dict.Find("note");
  if (!note_value) {
    return false;
  }
  {
    auto* temp = (*note_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.note = *temp;
  }

  const base::Value* use_account_store_value = dict.Find("useAccountStore");
  if (!use_account_store_value) {
    return false;
  }
  {
    auto temp = (*use_account_store_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.use_account_store = *temp;
  }

  return true;
}

// static
bool AddPasswordOptions::Populate(
    const base::Value& value, AddPasswordOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AddPasswordOptions> AddPasswordOptions::FromValue(const base::Value::Dict& value) {
  AddPasswordOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AddPasswordOptions> AddPasswordOptions::FromValue(const base::Value& value) {
  AddPasswordOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict AddPasswordOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("url", this->url);

  to_value_result.Set("username", this->username);

  to_value_result.Set("password", this->password);

  to_value_result.Set("note", this->note);

  to_value_result.Set("useAccountStore", this->use_account_store);


  return to_value_result;
}


PasswordUiEntryList::PasswordUiEntryList()
 {}

PasswordUiEntryList::~PasswordUiEntryList() = default;
PasswordUiEntryList::PasswordUiEntryList(PasswordUiEntryList&& rhs) noexcept = default;
PasswordUiEntryList& PasswordUiEntryList::operator=(PasswordUiEntryList&& rhs) noexcept = default;
PasswordUiEntryList PasswordUiEntryList::Clone() const {
  PasswordUiEntryList out;
  out.entries.reserve(entries.size());
  for (const auto& element : entries) {
    json_schema_compiler::util::AppendToContainer(out.entries, element.Clone());
  }
  return out;
}

// static
bool PasswordUiEntryList::Populate(
    const base::Value::Dict& dict, PasswordUiEntryList& out) {
  const base::Value* entries_value = dict.Find("entries");
  if (!entries_value) {
    return false;
  }
  {
    if (!(*entries_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*entries_value).GetList(), out.entries)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool PasswordUiEntryList::Populate(
    const base::Value& value, PasswordUiEntryList& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PasswordUiEntryList> PasswordUiEntryList::FromValue(const base::Value::Dict& value) {
  PasswordUiEntryList out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PasswordUiEntryList> PasswordUiEntryList::FromValue(const base::Value& value) {
  PasswordUiEntryList out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict PasswordUiEntryList::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("entries", json_schema_compiler::util::CreateValueFromArray(this->entries));


  return to_value_result;
}



//
// Functions
//

namespace RecordPasswordsPageAccessInSettings {

}  // namespace RecordPasswordsPageAccessInSettings

namespace ChangeCredential {

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
    const base::Value& credential_value = args[0];
    {
      if (!credential_value.is_dict()) {
        return std::nullopt;
      }
      if (!PasswordUiEntry::Populate(credential_value.GetDict(), params.credential)) {
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
}  // namespace ChangeCredential

namespace RemoveCredential {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& id_value = args[0];
    {
      auto temp = id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& from_stores_value = args[1];
    {
      const std::string* password_store_set_as_string = from_stores_value.GetIfString();
      if (!password_store_set_as_string) {
        return std::nullopt;
      }
      params.from_stores = ParsePasswordStoreSet(*password_store_set_as_string);
      if (params.from_stores == PasswordStoreSet()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace RemoveCredential

namespace RemovePasswordException {

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
    const base::Value& id_value = args[0];
    {
      auto temp = id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace RemovePasswordException

namespace UndoRemoveSavedPasswordOrException {

}  // namespace UndoRemoveSavedPasswordOrException

namespace RequestPlaintextPassword {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& id_value = args[0];
    {
      auto temp = id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& reason_value = args[1];
    {
      const std::string* plaintext_reason_as_string = reason_value.GetIfString();
      if (!plaintext_reason_as_string) {
        return std::nullopt;
      }
      params.reason = ParsePlaintextReason(*plaintext_reason_as_string);
      if (params.reason == PlaintextReason()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& password) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(password);

  return create_results;
}
}  // namespace RequestPlaintextPassword

namespace RequestCredentialsDetails {

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
    const base::Value& ids_value = args[0];
    {
      if (!ids_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(ids_value.GetList(), params.ids)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<PasswordUiEntry>& entries) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(entries));

  return create_results;
}
}  // namespace RequestCredentialsDetails

namespace GetSavedPasswordList {

base::Value::List Results::Create(const std::vector<PasswordUiEntry>& entries) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(entries));

  return create_results;
}
}  // namespace GetSavedPasswordList

namespace GetCredentialGroups {

base::Value::List Results::Create(const std::vector<CredentialGroup>& entries) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(entries));

  return create_results;
}
}  // namespace GetCredentialGroups

namespace GetPasswordExceptionList {

base::Value::List Results::Create(const std::vector<ExceptionEntry>& exceptions) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(exceptions));

  return create_results;
}
}  // namespace GetPasswordExceptionList

namespace MovePasswordsToAccount {

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
    const base::Value& ids_value = args[0];
    {
      if (!ids_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(ids_value.GetList(), params.ids)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace MovePasswordsToAccount

namespace FetchFamilyMembers {

base::Value::List Results::Create(const FamilyFetchResults& results) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((results).ToValue());

  return create_results;
}
}  // namespace FetchFamilyMembers

namespace SharePassword {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& id_value = args[0];
    {
      auto temp = id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& recipients_value = args[1];
    {
      if (!recipients_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(recipients_value.GetList(), params.recipients)) {
          return std::nullopt;
        }
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
}  // namespace SharePassword

namespace ImportPasswords {

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
    const base::Value& to_store_value = args[0];
    {
      const std::string* password_store_set_as_string = to_store_value.GetIfString();
      if (!password_store_set_as_string) {
        return std::nullopt;
      }
      params.to_store = ParsePasswordStoreSet(*password_store_set_as_string);
      if (params.to_store == PasswordStoreSet()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const ImportResults& results) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((results).ToValue());

  return create_results;
}
}  // namespace ImportPasswords

namespace ContinueImport {

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
    const base::Value& selected_ids_value = args[0];
    {
      if (!selected_ids_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(selected_ids_value.GetList(), params.selected_ids)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const ImportResults& results) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((results).ToValue());

  return create_results;
}
}  // namespace ContinueImport

namespace ResetImporter {

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
    const base::Value& delete_file_value = args[0];
    {
      auto temp = delete_file_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.delete_file = *temp;
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
}  // namespace ResetImporter

namespace ExportPasswords {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace ExportPasswords

namespace RequestExportProgressStatus {

base::Value::List Results::Create(const ExportProgressStatus& status) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(passwords_private::ToString(status));

  return create_results;
}
}  // namespace RequestExportProgressStatus

namespace IsOptedInForAccountStorage {

base::Value::List Results::Create(bool opted_in) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(opted_in);

  return create_results;
}
}  // namespace IsOptedInForAccountStorage

namespace OptInForAccountStorage {

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
    const base::Value& opt_in_value = args[0];
    {
      auto temp = opt_in_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.opt_in = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace OptInForAccountStorage

namespace GetInsecureCredentials {

base::Value::List Results::Create(const std::vector<PasswordUiEntry>& entries) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(entries));

  return create_results;
}
}  // namespace GetInsecureCredentials

namespace GetCredentialsWithReusedPassword {

base::Value::List Results::Create(const std::vector<PasswordUiEntryList>& entries) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(entries));

  return create_results;
}
}  // namespace GetCredentialsWithReusedPassword

namespace MuteInsecureCredential {

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
    const base::Value& credential_value = args[0];
    {
      if (!credential_value.is_dict()) {
        return std::nullopt;
      }
      if (!PasswordUiEntry::Populate(credential_value.GetDict(), params.credential)) {
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
}  // namespace MuteInsecureCredential

namespace UnmuteInsecureCredential {

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
    const base::Value& credential_value = args[0];
    {
      if (!credential_value.is_dict()) {
        return std::nullopt;
      }
      if (!PasswordUiEntry::Populate(credential_value.GetDict(), params.credential)) {
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
}  // namespace UnmuteInsecureCredential

namespace StartPasswordCheck {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace StartPasswordCheck

namespace GetPasswordCheckStatus {

base::Value::List Results::Create(const PasswordCheckStatus& status) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((status).ToValue());

  return create_results;
}
}  // namespace GetPasswordCheckStatus

namespace IsAccountStoreDefault {

base::Value::List Results::Create(bool is_default) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(is_default);

  return create_results;
}
}  // namespace IsAccountStoreDefault

namespace GetUrlCollection {

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
    const base::Value& url_value = args[0];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const UrlCollection& url_collection) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((url_collection).ToValue());

  return create_results;
}
}  // namespace GetUrlCollection

namespace AddPassword {

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
      if (!AddPasswordOptions::Populate(options_value.GetDict(), params.options)) {
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
}  // namespace AddPassword

namespace ExtendAuthValidity {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace ExtendAuthValidity

namespace SwitchBiometricAuthBeforeFillingState {

}  // namespace SwitchBiometricAuthBeforeFillingState

namespace ShowAddShortcutDialog {

}  // namespace ShowAddShortcutDialog

namespace ShowExportedFileInShell {

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
    const base::Value& file_path_value = args[0];
    {
      auto* temp = file_path_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.file_path = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace ShowExportedFileInShell

//
// Events
//

namespace OnSavedPasswordsListChanged {

const char kEventName[] = "passwordsPrivate.onSavedPasswordsListChanged";

base::Value::List Create(const std::vector<PasswordUiEntry>& entries) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(entries));

  return create_results;
}

}  // namespace OnSavedPasswordsListChanged

namespace OnPasswordExceptionsListChanged {

const char kEventName[] = "passwordsPrivate.onPasswordExceptionsListChanged";

base::Value::List Create(const std::vector<ExceptionEntry>& exceptions) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(exceptions));

  return create_results;
}

}  // namespace OnPasswordExceptionsListChanged

namespace OnPasswordsFileExportProgress {

const char kEventName[] = "passwordsPrivate.onPasswordsFileExportProgress";

base::Value::List Create(const PasswordExportProgress& status) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((status).ToValue());

  return create_results;
}

}  // namespace OnPasswordsFileExportProgress

namespace OnAccountStorageOptInStateChanged {

const char kEventName[] = "passwordsPrivate.onAccountStorageOptInStateChanged";

base::Value::List Create(bool opted_in) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(opted_in);

  return create_results;
}

}  // namespace OnAccountStorageOptInStateChanged

namespace OnInsecureCredentialsChanged {

const char kEventName[] = "passwordsPrivate.onInsecureCredentialsChanged";

base::Value::List Create(const std::vector<PasswordUiEntry>& insecure_credentials) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(insecure_credentials));

  return create_results;
}

}  // namespace OnInsecureCredentialsChanged

namespace OnPasswordCheckStatusChanged {

const char kEventName[] = "passwordsPrivate.onPasswordCheckStatusChanged";

base::Value::List Create(const PasswordCheckStatus& status) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((status).ToValue());

  return create_results;
}

}  // namespace OnPasswordCheckStatusChanged

namespace OnPasswordManagerAuthTimeout {

const char kEventName[] = "passwordsPrivate.onPasswordManagerAuthTimeout";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnPasswordManagerAuthTimeout

}  // namespace passwords_private
}  // namespace api
}  // namespace extensions

