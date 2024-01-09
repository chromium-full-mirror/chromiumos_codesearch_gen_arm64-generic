// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/passwords_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_PASSWORDS_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_PASSWORDS_PRIVATE_H__

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
namespace passwords_private {

//
// Types
//

// Possible reasons why a plaintext password was requested.
enum class PlaintextReason {
  kNone = 0,
  kView,
  kCopy,
  kEdit,
  kMaxValue = kEdit,
};


const char* ToString(PlaintextReason as_enum);
PlaintextReason ParsePlaintextReason(base::StringPiece as_string);
std::u16string GetPlaintextReasonParseError(base::StringPiece as_string);

enum class ExportProgressStatus {
  kNone = 0,
  kNotStarted,
  kInProgress,
  kSucceeded,
  kFailedCancelled,
  kFailedWriteFailed,
  kMaxValue = kFailedWriteFailed,
};


const char* ToString(ExportProgressStatus as_enum);
ExportProgressStatus ParseExportProgressStatus(base::StringPiece as_string);
std::u16string GetExportProgressStatusParseError(base::StringPiece as_string);

enum class CompromiseType {
  kNone = 0,
  kLeaked,
  kPhished,
  kReused,
  kWeak,
  kMaxValue = kWeak,
};


const char* ToString(CompromiseType as_enum);
CompromiseType ParseCompromiseType(base::StringPiece as_string);
std::u16string GetCompromiseTypeParseError(base::StringPiece as_string);

enum class PasswordStoreSet {
  kNone = 0,
  kDevice,
  kAccount,
  kDeviceAndAccount,
  kMaxValue = kDeviceAndAccount,
};


const char* ToString(PasswordStoreSet as_enum);
PasswordStoreSet ParsePasswordStoreSet(base::StringPiece as_string);
std::u16string GetPasswordStoreSetParseError(base::StringPiece as_string);

enum class PasswordCheckState {
  kNone = 0,
  kIdle,
  kRunning,
  kCanceled,
  kOffline,
  kSignedOut,
  kNoPasswords,
  kQuotaLimit,
  kOtherError,
  kMaxValue = kOtherError,
};


const char* ToString(PasswordCheckState as_enum);
PasswordCheckState ParsePasswordCheckState(base::StringPiece as_string);
std::u16string GetPasswordCheckStateParseError(base::StringPiece as_string);

enum class ImportResultsStatus {
  kNone = 0,
  kUnknownError,
  kSuccess,
  kIoError,
  kBadFormat,
  kDismissed,
  kMaxFileSize,
  kImportAlreadyActive,
  kNumPasswordsExceeded,
  kConflicts,
  kMaxValue = kConflicts,
};


const char* ToString(ImportResultsStatus as_enum);
ImportResultsStatus ParseImportResultsStatus(base::StringPiece as_string);
std::u16string GetImportResultsStatusParseError(base::StringPiece as_string);

enum class ImportEntryStatus {
  kNone = 0,
  kUnknownError,
  kMissingPassword,
  kMissingUrl,
  kInvalidUrl,
  kNonAsciiUrl,
  kLongUrl,
  kLongPassword,
  kLongUsername,
  kConflictProfile,
  kConflictAccount,
  kLongNote,
  kLongConcatenatedNote,
  kValid,
  kMaxValue = kValid,
};


const char* ToString(ImportEntryStatus as_enum);
ImportEntryStatus ParseImportEntryStatus(base::StringPiece as_string);
std::u16string GetImportEntryStatusParseError(base::StringPiece as_string);

enum class FamilyFetchStatus {
  kNone = 0,
  kUnknownError,
  kNoMembers,
  kSuccess,
  kMaxValue = kSuccess,
};


const char* ToString(FamilyFetchStatus as_enum);
FamilyFetchStatus ParseFamilyFetchStatus(base::StringPiece as_string);
std::u16string GetFamilyFetchStatusParseError(base::StringPiece as_string);

struct PublicKey {
  PublicKey();
  ~PublicKey();
  PublicKey(const PublicKey&) = delete;
  PublicKey& operator=(const PublicKey&) = delete;
  PublicKey(PublicKey&& rhs) noexcept;
  PublicKey& operator=(PublicKey&& rhs) noexcept;

  // Populates a PublicKey object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, PublicKey& out);

  // Populates a PublicKey object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, PublicKey& out);

  // Creates a deep copy of PublicKey.
  PublicKey Clone() const;

  // Creates a PublicKey object from a base::Value::Dict, or nullopt on failure.
  static std::optional<PublicKey> FromValue(const base::Value::Dict& value);

  // Creates a PublicKey object from a base::Value, or nullopt on failure.
  static std::optional<PublicKey> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPublicKey object.
  base::Value::Dict ToValue() const;

  // The value of the public key.
  std::string value;

  // The version of the public key.
  int version;

};

struct RecipientInfo {
  RecipientInfo();
  ~RecipientInfo();
  RecipientInfo(const RecipientInfo&) = delete;
  RecipientInfo& operator=(const RecipientInfo&) = delete;
  RecipientInfo(RecipientInfo&& rhs) noexcept;
  RecipientInfo& operator=(RecipientInfo&& rhs) noexcept;

  // Populates a RecipientInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RecipientInfo& out);

  // Populates a RecipientInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RecipientInfo& out);

  // Creates a deep copy of RecipientInfo.
  RecipientInfo Clone() const;

  // Creates a RecipientInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<RecipientInfo> FromValue(const base::Value::Dict& value);

  // Creates a RecipientInfo object from a base::Value, or nullopt on failure.
  static std::optional<RecipientInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRecipientInfo object.
  base::Value::Dict ToValue() const;

  // User ID of the recipient.
  std::string user_id;

  // Email of the recipient.
  std::string email;

  // Name of the recipient.
  std::string display_name;

  // Profile image URL of the recipient.
  std::string profile_image_url;

  // Whether the user can receive passwords.
  bool is_eligible;

  // The public key of the recipient.
  std::optional<PublicKey> public_key;

};

struct FamilyFetchResults {
  FamilyFetchResults();
  ~FamilyFetchResults();
  FamilyFetchResults(const FamilyFetchResults&) = delete;
  FamilyFetchResults& operator=(const FamilyFetchResults&) = delete;
  FamilyFetchResults(FamilyFetchResults&& rhs) noexcept;
  FamilyFetchResults& operator=(FamilyFetchResults&& rhs) noexcept;

  // Populates a FamilyFetchResults object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, FamilyFetchResults& out);

  // Populates a FamilyFetchResults object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, FamilyFetchResults& out);

  // Creates a deep copy of FamilyFetchResults.
  FamilyFetchResults Clone() const;

  // Creates a FamilyFetchResults object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<FamilyFetchResults> FromValue(const base::Value::Dict& value);

  // Creates a FamilyFetchResults object from a base::Value, or nullopt on
  // failure.
  static std::optional<FamilyFetchResults> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisFamilyFetchResults object.
  base::Value::Dict ToValue() const;

  // Status of the family members fetch.
  FamilyFetchStatus status;

  // List of family members.
  std::vector<RecipientInfo> family_members;

};

struct ImportEntry {
  ImportEntry();
  ~ImportEntry();
  ImportEntry(const ImportEntry&) = delete;
  ImportEntry& operator=(const ImportEntry&) = delete;
  ImportEntry(ImportEntry&& rhs) noexcept;
  ImportEntry& operator=(ImportEntry&& rhs) noexcept;

  // Populates a ImportEntry object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ImportEntry& out);

  // Populates a ImportEntry object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ImportEntry& out);

  // Creates a deep copy of ImportEntry.
  ImportEntry Clone() const;

  // Creates a ImportEntry object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ImportEntry> FromValue(const base::Value::Dict& value);

  // Creates a ImportEntry object from a base::Value, or nullopt on failure.
  static std::optional<ImportEntry> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisImportEntry object.
  base::Value::Dict ToValue() const;

  // The parsing status of individual row that represents credential during import
  // process.
  ImportEntryStatus status;

  // The url of the credential.
  std::string url;

  // The username of the credential.
  std::string username;

  // The password of the credential.
  std::string password;

  // Unique identifier of the credential.
  int id;

};

struct ImportResults {
  ImportResults();
  ~ImportResults();
  ImportResults(const ImportResults&) = delete;
  ImportResults& operator=(const ImportResults&) = delete;
  ImportResults(ImportResults&& rhs) noexcept;
  ImportResults& operator=(ImportResults&& rhs) noexcept;

  // Populates a ImportResults object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ImportResults& out);

  // Populates a ImportResults object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ImportResults& out);

  // Creates a deep copy of ImportResults.
  ImportResults Clone() const;

  // Creates a ImportResults object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ImportResults> FromValue(const base::Value::Dict& value);

  // Creates a ImportResults object from a base::Value, or nullopt on failure.
  static std::optional<ImportResults> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisImportResults object.
  base::Value::Dict ToValue() const;

  // General status of the triggered passwords import process.
  ImportResultsStatus status;

  // Number of successfully imported passwords.
  int number_imported;

  // Possibly emtpy, list of credentials that couldn't be imported.
  std::vector<ImportEntry> displayed_entries;

  // Name of file that user has chosen for the import.
  std::string file_name;

};

struct UrlCollection {
  UrlCollection();
  ~UrlCollection();
  UrlCollection(const UrlCollection&) = delete;
  UrlCollection& operator=(const UrlCollection&) = delete;
  UrlCollection(UrlCollection&& rhs) noexcept;
  UrlCollection& operator=(UrlCollection&& rhs) noexcept;

  // Populates a UrlCollection object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UrlCollection& out);

  // Populates a UrlCollection object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, UrlCollection& out);

  // Creates a deep copy of UrlCollection.
  UrlCollection Clone() const;

  // Creates a UrlCollection object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<UrlCollection> FromValue(const base::Value::Dict& value);

  // Creates a UrlCollection object from a base::Value, or nullopt on failure.
  static std::optional<UrlCollection> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisUrlCollection object.
  base::Value::Dict ToValue() const;

  // The signon realm of the credential.
  std::string signon_realm;

  // A human readable version of the URL of the credential's origin. For android
  // credentials this is usually App name.
  std::string shown;

  // The URL that will be linked to when an entry is clicked.
  std::string link;

};

struct CompromisedInfo {
  CompromisedInfo();
  ~CompromisedInfo();
  CompromisedInfo(const CompromisedInfo&) = delete;
  CompromisedInfo& operator=(const CompromisedInfo&) = delete;
  CompromisedInfo(CompromisedInfo&& rhs) noexcept;
  CompromisedInfo& operator=(CompromisedInfo&& rhs) noexcept;

  // Populates a CompromisedInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CompromisedInfo& out);

  // Populates a CompromisedInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CompromisedInfo& out);

  // Creates a deep copy of CompromisedInfo.
  CompromisedInfo Clone() const;

  // Creates a CompromisedInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<CompromisedInfo> FromValue(const base::Value::Dict& value);

  // Creates a CompromisedInfo object from a base::Value, or nullopt on failure.
  static std::optional<CompromisedInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCompromisedInfo object.
  base::Value::Dict ToValue() const;

  // The timestamp of when this credential was determined to be compromised.
  // Specified in milliseconds since the UNIX epoch. Intended to be passed to the
  // JavaScript Date() constructor.
  double compromise_time;

  // The elapsed time since this credential was determined to be compromised. This
  // is passed as an already formatted string, since JavaScript lacks the required
  // formatting APIs. Example: "5 minutes ago"
  std::string elapsed_time_since_compromise;

  // The types of credential issues.
  std::vector<CompromiseType> compromise_types;

  // Indicates whether this credential is muted.
  bool is_muted;

};

struct DomainInfo {
  DomainInfo();
  ~DomainInfo();
  DomainInfo(const DomainInfo&) = delete;
  DomainInfo& operator=(const DomainInfo&) = delete;
  DomainInfo(DomainInfo&& rhs) noexcept;
  DomainInfo& operator=(DomainInfo&& rhs) noexcept;

  // Populates a DomainInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, DomainInfo& out);

  // Populates a DomainInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, DomainInfo& out);

  // Creates a deep copy of DomainInfo.
  DomainInfo Clone() const;

  // Creates a DomainInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<DomainInfo> FromValue(const base::Value::Dict& value);

  // Creates a DomainInfo object from a base::Value, or nullopt on failure.
  static std::optional<DomainInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDomainInfo object.
  base::Value::Dict ToValue() const;

  // A human readable version of the URL of the credential's origin. For android
  // credentials this is usually the app name.
  std::string name;

  // The URL that will be linked to when an entry is clicked.
  std::string url;

  // The signon_realm of corresponding PasswordForm.
  std::string signon_realm;

};

struct PasswordUiEntry {
  PasswordUiEntry();
  ~PasswordUiEntry();
  PasswordUiEntry(const PasswordUiEntry&) = delete;
  PasswordUiEntry& operator=(const PasswordUiEntry&) = delete;
  PasswordUiEntry(PasswordUiEntry&& rhs) noexcept;
  PasswordUiEntry& operator=(PasswordUiEntry&& rhs) noexcept;

  // Populates a PasswordUiEntry object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PasswordUiEntry& out);

  // Populates a PasswordUiEntry object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PasswordUiEntry& out);

  // Creates a deep copy of PasswordUiEntry.
  PasswordUiEntry Clone() const;

  // Creates a PasswordUiEntry object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<PasswordUiEntry> FromValue(const base::Value::Dict& value);

  // Creates a PasswordUiEntry object from a base::Value, or nullopt on failure.
  static std::optional<PasswordUiEntry> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPasswordUiEntry object.
  base::Value::Dict ToValue() const;

  // The URL collection corresponding to this saved password entry.
  std::vector<DomainInfo> affiliated_domains;

  // The username used in conjunction with the saved password.
  std::string username;

  // If this is a passkey, the user's display name. Empty otherwise.
  std::optional<std::string> display_name;

  // The password of the credential. Empty by default, only set if explicitly
  // requested.
  std::optional<std::string> password;

  // Text shown if the password was obtained via a federated identity.
  std::optional<std::string> federation_text;

  // An index to refer back to a unique password entry record.
  int id;

  // Corresponds to where the credential is stored.
  PasswordStoreSet stored_in;

  // Indicates whether this credential is a passkey.
  bool is_passkey;

  // The value of the attached note.
  std::optional<std::string> note;

  // The URL where the insecure password can be changed. Might be not set for
  // Android apps.
  std::optional<std::string> change_password_url;

  // Additional information in case a credential is compromised.
  std::optional<CompromisedInfo> compromised_info;

};

struct CredentialGroup {
  CredentialGroup();
  ~CredentialGroup();
  CredentialGroup(const CredentialGroup&) = delete;
  CredentialGroup& operator=(const CredentialGroup&) = delete;
  CredentialGroup(CredentialGroup&& rhs) noexcept;
  CredentialGroup& operator=(CredentialGroup&& rhs) noexcept;

  // Populates a CredentialGroup object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CredentialGroup& out);

  // Populates a CredentialGroup object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CredentialGroup& out);

  // Creates a deep copy of CredentialGroup.
  CredentialGroup Clone() const;

  // Creates a CredentialGroup object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<CredentialGroup> FromValue(const base::Value::Dict& value);

  // Creates a CredentialGroup object from a base::Value, or nullopt on failure.
  static std::optional<CredentialGroup> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCredentialGroup object.
  base::Value::Dict ToValue() const;

  // Group name being displayed.
  std::string name;

  // Icon url for the given group.
  std::string icon_url;

  // Entries in the group.
  std::vector<PasswordUiEntry> entries;

};

struct ExceptionEntry {
  ExceptionEntry();
  ~ExceptionEntry();
  ExceptionEntry(const ExceptionEntry&) = delete;
  ExceptionEntry& operator=(const ExceptionEntry&) = delete;
  ExceptionEntry(ExceptionEntry&& rhs) noexcept;
  ExceptionEntry& operator=(ExceptionEntry&& rhs) noexcept;

  // Populates a ExceptionEntry object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ExceptionEntry& out);

  // Populates a ExceptionEntry object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ExceptionEntry& out);

  // Creates a deep copy of ExceptionEntry.
  ExceptionEntry Clone() const;

  // Creates a ExceptionEntry object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ExceptionEntry> FromValue(const base::Value::Dict& value);

  // Creates a ExceptionEntry object from a base::Value, or nullopt on failure.
  static std::optional<ExceptionEntry> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisExceptionEntry object.
  base::Value::Dict ToValue() const;

  // The URL collection corresponding to this exception entry.
  UrlCollection urls;

  // An id to refer back to a unique exception entry record.
  int id;

};

struct PasswordExportProgress {
  PasswordExportProgress();
  ~PasswordExportProgress();
  PasswordExportProgress(const PasswordExportProgress&) = delete;
  PasswordExportProgress& operator=(const PasswordExportProgress&) = delete;
  PasswordExportProgress(PasswordExportProgress&& rhs) noexcept;
  PasswordExportProgress& operator=(PasswordExportProgress&& rhs) noexcept;

  // Populates a PasswordExportProgress object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PasswordExportProgress& out);

  // Populates a PasswordExportProgress object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PasswordExportProgress& out);

  // Creates a deep copy of PasswordExportProgress.
  PasswordExportProgress Clone() const;

  // Creates a PasswordExportProgress object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<PasswordExportProgress> FromValue(const base::Value::Dict& value);

  // Creates a PasswordExportProgress object from a base::Value, or nullopt on
  // failure.
  static std::optional<PasswordExportProgress> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPasswordExportProgress object.
  base::Value::Dict ToValue() const;

  // The current status of the export task.
  ExportProgressStatus status;

  // If |status| is $ref(ExportProgressStatus.SUCCEEDED), this will be the full
  // path of the written file.
  std::optional<std::string> file_path;

  // If |status| is $ref(ExportProgressStatus.FAILED_WRITE_FAILED), this will be
  // the name of the selected folder to export to.
  std::optional<std::string> folder_name;

};

struct PasswordCheckStatus {
  PasswordCheckStatus();
  ~PasswordCheckStatus();
  PasswordCheckStatus(const PasswordCheckStatus&) = delete;
  PasswordCheckStatus& operator=(const PasswordCheckStatus&) = delete;
  PasswordCheckStatus(PasswordCheckStatus&& rhs) noexcept;
  PasswordCheckStatus& operator=(PasswordCheckStatus&& rhs) noexcept;

  // Populates a PasswordCheckStatus object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PasswordCheckStatus& out);

  // Populates a PasswordCheckStatus object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PasswordCheckStatus& out);

  // Creates a deep copy of PasswordCheckStatus.
  PasswordCheckStatus Clone() const;

  // Creates a PasswordCheckStatus object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<PasswordCheckStatus> FromValue(const base::Value::Dict& value);

  // Creates a PasswordCheckStatus object from a base::Value, or nullopt on
  // failure.
  static std::optional<PasswordCheckStatus> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPasswordCheckStatus object.
  base::Value::Dict ToValue() const;

  // The state of the password check.
  PasswordCheckState state;

  // Total number of saved passwords.
  std::optional<int> total_number_of_passwords;

  // How many passwords have already been processed. Populated if and only if the
  // password check is currently running.
  std::optional<int> already_processed;

  // How many passwords are remaining in the queue. Populated if and only if the
  // password check is currently running.
  std::optional<int> remaining_in_queue;

  // The elapsed time since the last full password check was performed. This is
  // passed as a string, since JavaScript lacks the required formatting APIs. If
  // no check has been performed yet this is not set.
  std::optional<std::string> elapsed_time_since_last_check;

};

struct AddPasswordOptions {
  AddPasswordOptions();
  ~AddPasswordOptions();
  AddPasswordOptions(const AddPasswordOptions&) = delete;
  AddPasswordOptions& operator=(const AddPasswordOptions&) = delete;
  AddPasswordOptions(AddPasswordOptions&& rhs) noexcept;
  AddPasswordOptions& operator=(AddPasswordOptions&& rhs) noexcept;

  // Populates a AddPasswordOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AddPasswordOptions& out);

  // Populates a AddPasswordOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AddPasswordOptions& out);

  // Creates a deep copy of AddPasswordOptions.
  AddPasswordOptions Clone() const;

  // Creates a AddPasswordOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<AddPasswordOptions> FromValue(const base::Value::Dict& value);

  // Creates a AddPasswordOptions object from a base::Value, or nullopt on
  // failure.
  static std::optional<AddPasswordOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAddPasswordOptions object.
  base::Value::Dict ToValue() const;

  // The url to save the password for.
  std::string url;

  // The username to save the password for.
  std::string username;

  // The password value to be saved.
  std::string password;

  // The note attached the password.
  std::string note;

  // True for account store, false for device store.
  bool use_account_store;

};

struct PasswordUiEntryList {
  PasswordUiEntryList();
  ~PasswordUiEntryList();
  PasswordUiEntryList(const PasswordUiEntryList&) = delete;
  PasswordUiEntryList& operator=(const PasswordUiEntryList&) = delete;
  PasswordUiEntryList(PasswordUiEntryList&& rhs) noexcept;
  PasswordUiEntryList& operator=(PasswordUiEntryList&& rhs) noexcept;

  // Populates a PasswordUiEntryList object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PasswordUiEntryList& out);

  // Populates a PasswordUiEntryList object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PasswordUiEntryList& out);

  // Creates a deep copy of PasswordUiEntryList.
  PasswordUiEntryList Clone() const;

  // Creates a PasswordUiEntryList object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<PasswordUiEntryList> FromValue(const base::Value::Dict& value);

  // Creates a PasswordUiEntryList object from a base::Value, or nullopt on
  // failure.
  static std::optional<PasswordUiEntryList> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPasswordUiEntryList object.
  base::Value::Dict ToValue() const;

  std::vector<PasswordUiEntry> entries;

};


//
// Functions
//

namespace RecordPasswordsPageAccessInSettings {

}  // namespace RecordPasswordsPageAccessInSettings

namespace ChangeCredential {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The credential to update. This will be matched to the existing credential by
  // id.
  PasswordUiEntry credential;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ChangeCredential

namespace RemoveCredential {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The id for the credential being removed.
  int id;

  // The store(s) from which the credential is being removed.
  PasswordStoreSet from_stores;


 private:
  Params();
};

}  // namespace RemoveCredential

namespace RemovePasswordException {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The id for the exception url entry is being removed.
  int id;


 private:
  Params();
};

}  // namespace RemovePasswordException

namespace UndoRemoveSavedPasswordOrException {

}  // namespace UndoRemoveSavedPasswordOrException

namespace RequestPlaintextPassword {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The id for the password entry being being retrieved.
  int id;

  // The reason why the plaintext password is requested.
  PlaintextReason reason;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& password);
}  // namespace Results

}  // namespace RequestPlaintextPassword

namespace RequestCredentialsDetails {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Ids for the password entries being retrieved.
  std::vector<int> ids;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<PasswordUiEntry>& entries);
}  // namespace Results

}  // namespace RequestCredentialsDetails

namespace GetSavedPasswordList {

namespace Results {

base::Value::List Create(const std::vector<PasswordUiEntry>& entries);
}  // namespace Results

}  // namespace GetSavedPasswordList

namespace GetCredentialGroups {

namespace Results {

base::Value::List Create(const std::vector<CredentialGroup>& entries);
}  // namespace Results

}  // namespace GetCredentialGroups

namespace GetPasswordExceptionList {

namespace Results {

base::Value::List Create(const std::vector<ExceptionEntry>& exceptions);
}  // namespace Results

}  // namespace GetPasswordExceptionList

namespace MovePasswordsToAccount {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The ids for the password entries being moved.
  std::vector<int> ids;


 private:
  Params();
};

}  // namespace MovePasswordsToAccount

namespace FetchFamilyMembers {

namespace Results {

base::Value::List Create(const FamilyFetchResults& results);
}  // namespace Results

}  // namespace FetchFamilyMembers

namespace SharePassword {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The id of the password entry to be shared.
  int id;

  // The list of selected recipients.
  std::vector<RecipientInfo> recipients;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SharePassword

namespace ImportPasswords {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  PasswordStoreSet to_store;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const ImportResults& results);
}  // namespace Results

}  // namespace ImportPasswords

namespace ContinueImport {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The ids of passwords that need to be replaced.
  std::vector<int> selected_ids;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const ImportResults& results);
}  // namespace Results

}  // namespace ContinueImport

namespace ResetImporter {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Whether to trigger deletion of the last imported file.
  bool delete_file;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ResetImporter

namespace ExportPasswords {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ExportPasswords

namespace RequestExportProgressStatus {

namespace Results {

base::Value::List Create(const ExportProgressStatus& status);
}  // namespace Results

}  // namespace RequestExportProgressStatus

namespace IsOptedInForAccountStorage {

namespace Results {

base::Value::List Create(bool opted_in);
}  // namespace Results

}  // namespace IsOptedInForAccountStorage

namespace OptInForAccountStorage {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  bool opt_in;


 private:
  Params();
};

}  // namespace OptInForAccountStorage

namespace GetInsecureCredentials {

namespace Results {

base::Value::List Create(const std::vector<PasswordUiEntry>& entries);
}  // namespace Results

}  // namespace GetInsecureCredentials

namespace GetCredentialsWithReusedPassword {

namespace Results {

base::Value::List Create(const std::vector<PasswordUiEntryList>& entries);
}  // namespace Results

}  // namespace GetCredentialsWithReusedPassword

namespace MuteInsecureCredential {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  PasswordUiEntry credential;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace MuteInsecureCredential

namespace UnmuteInsecureCredential {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  PasswordUiEntry credential;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace UnmuteInsecureCredential

namespace StartPasswordCheck {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace StartPasswordCheck

namespace GetPasswordCheckStatus {

namespace Results {

base::Value::List Create(const PasswordCheckStatus& status);
}  // namespace Results

}  // namespace GetPasswordCheckStatus

namespace IsAccountStoreDefault {

namespace Results {

base::Value::List Create(bool is_default);
}  // namespace Results

}  // namespace IsAccountStoreDefault

namespace GetUrlCollection {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string url;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const UrlCollection& url_collection);
}  // namespace Results

}  // namespace GetUrlCollection

namespace AddPassword {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Details about a new password and storage to be used.
  AddPasswordOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace AddPassword

namespace ExtendAuthValidity {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ExtendAuthValidity

namespace SwitchBiometricAuthBeforeFillingState {

}  // namespace SwitchBiometricAuthBeforeFillingState

namespace ShowAddShortcutDialog {

}  // namespace ShowAddShortcutDialog

namespace ShowExportedFileInShell {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string file_path;


 private:
  Params();
};

}  // namespace ShowExportedFileInShell

//
// Events
//

namespace OnSavedPasswordsListChanged {

extern const char kEventName[];  // "passwordsPrivate.onSavedPasswordsListChanged"

// The updated list of password entries.
base::Value::List Create(const std::vector<PasswordUiEntry>& entries);
}  // namespace OnSavedPasswordsListChanged

namespace OnPasswordExceptionsListChanged {

extern const char kEventName[];  // "passwordsPrivate.onPasswordExceptionsListChanged"

// The updated list of password exceptions.
base::Value::List Create(const std::vector<ExceptionEntry>& exceptions);
}  // namespace OnPasswordExceptionsListChanged

namespace OnPasswordsFileExportProgress {

extern const char kEventName[];  // "passwordsPrivate.onPasswordsFileExportProgress"

// The progress status and an optional UI message.
base::Value::List Create(const PasswordExportProgress& status);
}  // namespace OnPasswordsFileExportProgress

namespace OnAccountStorageOptInStateChanged {

extern const char kEventName[];  // "passwordsPrivate.onAccountStorageOptInStateChanged"

// The new opt-in state.
base::Value::List Create(bool opted_in);
}  // namespace OnAccountStorageOptInStateChanged

namespace OnInsecureCredentialsChanged {

extern const char kEventName[];  // "passwordsPrivate.onInsecureCredentialsChanged"

// The updated insecure credentials.
base::Value::List Create(const std::vector<PasswordUiEntry>& insecure_credentials);
}  // namespace OnInsecureCredentialsChanged

namespace OnPasswordCheckStatusChanged {

extern const char kEventName[];  // "passwordsPrivate.onPasswordCheckStatusChanged"

// The updated status of the password check.
base::Value::List Create(const PasswordCheckStatus& status);
}  // namespace OnPasswordCheckStatusChanged

namespace OnPasswordManagerAuthTimeout {

extern const char kEventName[];  // "passwordsPrivate.onPasswordManagerAuthTimeout"

base::Value::List Create();
}  // namespace OnPasswordManagerAuthTimeout

}  // namespace passwords_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_PASSWORDS_PRIVATE_H__
