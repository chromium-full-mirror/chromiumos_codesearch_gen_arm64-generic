// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/enterprise_reporting_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_REPORTING_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_REPORTING_PRIVATE_H__

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
namespace enterprise_reporting_private {

//
// Types
//

// Possible states a particular device setting can be in.
enum class SettingValue {
  kNone = 0,
  kUnknown,
  kDisabled,
  kEnabled,
  kMaxValue = kEnabled,
};


const char* ToString(SettingValue as_enum);
SettingValue ParseSettingValue(base::StringPiece as_string);
std::u16string GetSettingValueParseError(base::StringPiece as_string);

struct DeviceInfo {
  DeviceInfo();
  ~DeviceInfo();
  DeviceInfo(const DeviceInfo&) = delete;
  DeviceInfo& operator=(const DeviceInfo&) = delete;
  DeviceInfo(DeviceInfo&& rhs) noexcept;
  DeviceInfo& operator=(DeviceInfo&& rhs) noexcept;

  // Populates a DeviceInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, DeviceInfo& out);

  // Populates a DeviceInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, DeviceInfo& out);

  // Creates a deep copy of DeviceInfo.
  DeviceInfo Clone() const;

  // Creates a DeviceInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<DeviceInfo> FromValue(const base::Value::Dict& value);

  // Creates a DeviceInfo object from a base::Value, or nullopt on failure.
  static std::optional<DeviceInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDeviceInfo object.
  base::Value::Dict ToValue() const;

  std::string os_name;

  std::string os_version;

  std::string device_host_name;

  std::string device_model;

  std::string serial_number;

  SettingValue screen_lock_secured;

  SettingValue disk_encrypted;

  std::vector<std::string> mac_addresses;

  std::optional<std::string> windows_machine_domain;

  std::optional<std::string> windows_user_domain;

  std::string security_patch_level;

  // This value is only returned on Windows for now.
  SettingValue secure_boot_enabled;

};

// Possible states for the EnterpriseRealTimeUrlCheckMode policy.
enum class RealtimeUrlCheckMode {
  kNone = 0,
  kDisabled,
  kEnabledMainFrame,
  kMaxValue = kEnabledMainFrame,
};


const char* ToString(RealtimeUrlCheckMode as_enum);
RealtimeUrlCheckMode ParseRealtimeUrlCheckMode(base::StringPiece as_string);
std::u16string GetRealtimeUrlCheckModeParseError(base::StringPiece as_string);

// Possible states for the SafeBrowsingProtectionLevel policy.
enum class SafeBrowsingLevel {
  kNone = 0,
  kDisabled,
  kStandard,
  kEnhanced,
  kMaxValue = kEnhanced,
};


const char* ToString(SafeBrowsingLevel as_enum);
SafeBrowsingLevel ParseSafeBrowsingLevel(base::StringPiece as_string);
std::u16string GetSafeBrowsingLevelParseError(base::StringPiece as_string);

// Possible states for the PasswordProtectionWarningTrigger policy
enum class PasswordProtectionTrigger {
  kNone = 0,
  kPasswordProtectionOff,
  kPasswordReuse,
  kPhishingReuse,
  kPolicyUnset,
  kMaxValue = kPolicyUnset,
};


const char* ToString(PasswordProtectionTrigger as_enum);
PasswordProtectionTrigger ParsePasswordProtectionTrigger(base::StringPiece as_string);
std::u16string GetPasswordProtectionTriggerParseError(base::StringPiece as_string);

struct ContextInfo {
  ContextInfo();
  ~ContextInfo();
  ContextInfo(const ContextInfo&) = delete;
  ContextInfo& operator=(const ContextInfo&) = delete;
  ContextInfo(ContextInfo&& rhs) noexcept;
  ContextInfo& operator=(ContextInfo&& rhs) noexcept;

  // Populates a ContextInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ContextInfo& out);

  // Populates a ContextInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ContextInfo& out);

  // Creates a deep copy of ContextInfo.
  ContextInfo Clone() const;

  // Creates a ContextInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ContextInfo> FromValue(const base::Value::Dict& value);

  // Creates a ContextInfo object from a base::Value, or nullopt on failure.
  static std::optional<ContextInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisContextInfo object.
  base::Value::Dict ToValue() const;

  std::vector<std::string> browser_affiliation_ids;

  std::vector<std::string> profile_affiliation_ids;

  std::vector<std::string> on_file_attached_providers;

  std::vector<std::string> on_file_downloaded_providers;

  std::vector<std::string> on_bulk_data_entry_providers;

  std::vector<std::string> on_print_providers;

  RealtimeUrlCheckMode realtime_url_check_mode;

  std::vector<std::string> on_security_event_providers;

  std::string browser_version;

  SafeBrowsingLevel safe_browsing_protection_level;

  bool site_isolation_enabled;

  bool built_in_dns_client_enabled;

  PasswordProtectionTrigger password_protection_warning_trigger;

  bool chrome_remote_desktop_app_blocked;

  std::optional<bool> third_party_blocking_enabled;

  SettingValue os_firewall;

  std::vector<std::string> system_dns_servers;

  std::optional<std::string> enterprise_profile_id;

};

// The status passed to the callback of <code>getCertificate</code> to indicate
// if the required policy is set.
enum class CertificateStatus {
  kNone = 0,
  kOk,
  kPolicyUnset,
  kMaxValue = kPolicyUnset,
};


const char* ToString(CertificateStatus as_enum);
CertificateStatus ParseCertificateStatus(base::StringPiece as_string);
std::u16string GetCertificateStatusParseError(base::StringPiece as_string);

struct Certificate {
  Certificate();
  ~Certificate();
  Certificate(const Certificate&) = delete;
  Certificate& operator=(const Certificate&) = delete;
  Certificate(Certificate&& rhs) noexcept;
  Certificate& operator=(Certificate&& rhs) noexcept;

  // Populates a Certificate object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, Certificate& out);

  // Populates a Certificate object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, Certificate& out);

  // Creates a deep copy of Certificate.
  Certificate Clone() const;

  // Creates a Certificate object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<Certificate> FromValue(const base::Value::Dict& value);

  // Creates a Certificate object from a base::Value, or nullopt on failure.
  static std::optional<Certificate> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCertificate object.
  base::Value::Dict ToValue() const;

  CertificateStatus status;

  std::optional<std::vector<uint8_t>> encoded_certificate;

};

// Captures the type of event so it can be associated with user or device in
// Chrome for reporting purposes
enum class EventType {
  kNone = 0,
  kDevice,
  kUser,
  kMaxValue = kUser,
};


const char* ToString(EventType as_enum);
EventType ParseEventType(base::StringPiece as_string);
std::u16string GetEventTypeParseError(base::StringPiece as_string);

struct EnqueueRecordRequest {
  EnqueueRecordRequest();
  ~EnqueueRecordRequest();
  EnqueueRecordRequest(const EnqueueRecordRequest&) = delete;
  EnqueueRecordRequest& operator=(const EnqueueRecordRequest&) = delete;
  EnqueueRecordRequest(EnqueueRecordRequest&& rhs) noexcept;
  EnqueueRecordRequest& operator=(EnqueueRecordRequest&& rhs) noexcept;

  // Populates a EnqueueRecordRequest object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EnqueueRecordRequest& out);

  // Populates a EnqueueRecordRequest object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, EnqueueRecordRequest& out);

  // Creates a deep copy of EnqueueRecordRequest.
  EnqueueRecordRequest Clone() const;

  // Creates a EnqueueRecordRequest object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<EnqueueRecordRequest> FromValue(const base::Value::Dict& value);

  // Creates a EnqueueRecordRequest object from a base::Value, or nullopt on
  // failure.
  static std::optional<EnqueueRecordRequest> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisEnqueueRecordRequest object.
  base::Value::Dict ToValue() const;

  // Serialized record data binary based on the proto definition in
  // //components/reporting/proto/synced/record.proto.
  std::vector<uint8_t> record_data;

  // Serialized priority based on the proto definition in
  // //components/reporting/proto/synced/record_constants.proto. Used to determine
  // which records are shed first.
  int priority;

  EventType event_type;

};

struct UserContext {
  UserContext();
  ~UserContext();
  UserContext(const UserContext&) = delete;
  UserContext& operator=(const UserContext&) = delete;
  UserContext(UserContext&& rhs) noexcept;
  UserContext& operator=(UserContext&& rhs) noexcept;

  // Populates a UserContext object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UserContext& out);

  // Populates a UserContext object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, UserContext& out);

  // Creates a deep copy of UserContext.
  UserContext Clone() const;

  // Creates a UserContext object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<UserContext> FromValue(const base::Value::Dict& value);

  // Creates a UserContext object from a base::Value, or nullopt on failure.
  static std::optional<UserContext> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisUserContext object.
  base::Value::Dict ToValue() const;

  std::string user_id;

};

// Enumeration of the various states an AntiVirus software product can be in.
enum class AntiVirusProductState {
  kNone = 0,
  kOn,
  kOff,
  kSnoozed,
  kExpired,
  kMaxValue = kExpired,
};


const char* ToString(AntiVirusProductState as_enum);
AntiVirusProductState ParseAntiVirusProductState(base::StringPiece as_string);
std::u16string GetAntiVirusProductStateParseError(base::StringPiece as_string);

struct AntiVirusSignal {
  AntiVirusSignal();
  ~AntiVirusSignal();
  AntiVirusSignal(const AntiVirusSignal&) = delete;
  AntiVirusSignal& operator=(const AntiVirusSignal&) = delete;
  AntiVirusSignal(AntiVirusSignal&& rhs) noexcept;
  AntiVirusSignal& operator=(AntiVirusSignal&& rhs) noexcept;

  // Populates a AntiVirusSignal object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AntiVirusSignal& out);

  // Populates a AntiVirusSignal object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AntiVirusSignal& out);

  // Creates a deep copy of AntiVirusSignal.
  AntiVirusSignal Clone() const;

  // Creates a AntiVirusSignal object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<AntiVirusSignal> FromValue(const base::Value::Dict& value);

  // Creates a AntiVirusSignal object from a base::Value, or nullopt on failure.
  static std::optional<AntiVirusSignal> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAntiVirusSignal object.
  base::Value::Dict ToValue() const;

  std::string display_name;

  std::string product_id;

  AntiVirusProductState state;

};

struct HotfixSignal {
  HotfixSignal();
  ~HotfixSignal();
  HotfixSignal(const HotfixSignal&) = delete;
  HotfixSignal& operator=(const HotfixSignal&) = delete;
  HotfixSignal(HotfixSignal&& rhs) noexcept;
  HotfixSignal& operator=(HotfixSignal&& rhs) noexcept;

  // Populates a HotfixSignal object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, HotfixSignal& out);

  // Populates a HotfixSignal object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, HotfixSignal& out);

  // Creates a deep copy of HotfixSignal.
  HotfixSignal Clone() const;

  // Creates a HotfixSignal object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<HotfixSignal> FromValue(const base::Value::Dict& value);

  // Creates a HotfixSignal object from a base::Value, or nullopt on failure.
  static std::optional<HotfixSignal> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisHotfixSignal object.
  base::Value::Dict ToValue() const;

  std::string hotfix_id;

};

// Used to indicate whether a given signal was correctly found or not, or
// indicate a reason for not being able to find it.
enum class PresenceValue {
  kNone = 0,
  kUnspecified,
  kAccessDenied,
  kNotFound,
  kFound,
  kMaxValue = kFound,
};


const char* ToString(PresenceValue as_enum);
PresenceValue ParsePresenceValue(base::StringPiece as_string);
std::u16string GetPresenceValueParseError(base::StringPiece as_string);

struct GetFileSystemInfoOptions {
  GetFileSystemInfoOptions();
  ~GetFileSystemInfoOptions();
  GetFileSystemInfoOptions(const GetFileSystemInfoOptions&) = delete;
  GetFileSystemInfoOptions& operator=(const GetFileSystemInfoOptions&) = delete;
  GetFileSystemInfoOptions(GetFileSystemInfoOptions&& rhs) noexcept;
  GetFileSystemInfoOptions& operator=(GetFileSystemInfoOptions&& rhs) noexcept;

  // Populates a GetFileSystemInfoOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetFileSystemInfoOptions& out);

  // Populates a GetFileSystemInfoOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetFileSystemInfoOptions& out);

  // Creates a deep copy of GetFileSystemInfoOptions.
  GetFileSystemInfoOptions Clone() const;

  // Creates a GetFileSystemInfoOptions object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<GetFileSystemInfoOptions> FromValue(const base::Value::Dict& value);

  // Creates a GetFileSystemInfoOptions object from a base::Value, or nullopt on
  // failure.
  static std::optional<GetFileSystemInfoOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetFileSystemInfoOptions object.
  base::Value::Dict ToValue() const;

  std::string path;

  bool compute_sha256;

  bool compute_executable_metadata;

};

struct GetFileSystemInfoRequest {
  GetFileSystemInfoRequest();
  ~GetFileSystemInfoRequest();
  GetFileSystemInfoRequest(const GetFileSystemInfoRequest&) = delete;
  GetFileSystemInfoRequest& operator=(const GetFileSystemInfoRequest&) = delete;
  GetFileSystemInfoRequest(GetFileSystemInfoRequest&& rhs) noexcept;
  GetFileSystemInfoRequest& operator=(GetFileSystemInfoRequest&& rhs) noexcept;

  // Populates a GetFileSystemInfoRequest object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetFileSystemInfoRequest& out);

  // Populates a GetFileSystemInfoRequest object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetFileSystemInfoRequest& out);

  // Creates a deep copy of GetFileSystemInfoRequest.
  GetFileSystemInfoRequest Clone() const;

  // Creates a GetFileSystemInfoRequest object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<GetFileSystemInfoRequest> FromValue(const base::Value::Dict& value);

  // Creates a GetFileSystemInfoRequest object from a base::Value, or nullopt on
  // failure.
  static std::optional<GetFileSystemInfoRequest> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetFileSystemInfoRequest object.
  base::Value::Dict ToValue() const;

  // Information about the for whom the signal collection request is for.
  UserContext user_context;

  // Collection of parameters used to conduct signals collection about specific
  // file system resources.
  std::vector<GetFileSystemInfoOptions> options;

};

struct GetFileSystemInfoResponse {
  GetFileSystemInfoResponse();
  ~GetFileSystemInfoResponse();
  GetFileSystemInfoResponse(const GetFileSystemInfoResponse&) = delete;
  GetFileSystemInfoResponse& operator=(const GetFileSystemInfoResponse&) = delete;
  GetFileSystemInfoResponse(GetFileSystemInfoResponse&& rhs) noexcept;
  GetFileSystemInfoResponse& operator=(GetFileSystemInfoResponse&& rhs) noexcept;

  // Populates a GetFileSystemInfoResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetFileSystemInfoResponse& out);

  // Populates a GetFileSystemInfoResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetFileSystemInfoResponse& out);

  // Creates a deep copy of GetFileSystemInfoResponse.
  GetFileSystemInfoResponse Clone() const;

  // Creates a GetFileSystemInfoResponse object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<GetFileSystemInfoResponse> FromValue(const base::Value::Dict& value);

  // Creates a GetFileSystemInfoResponse object from a base::Value, or nullopt
  // on failure.
  static std::optional<GetFileSystemInfoResponse> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetFileSystemInfoResponse object.
  base::Value::Dict ToValue() const;

  // Path to the file system object for whom those signals were collected.
  std::string path;

  // Value indicating whether the specific resource could be found or not.
  PresenceValue presence;

  // Sha256 hash of a file's bytes. Ignored when path points to a directory.
  // Collected only when computeSha256 is set to true in the given signals
  // collection parameters.
  std::optional<std::string> sha256_hash;

  // Is true if a currently running process was spawned from this file.
  std::optional<bool> is_running;

  // SHA-256 hashes of the public keys of the certificates used to sign the
  // executable. A hash is computed over the DER-encoded SubjectPublicKeyInfo
  // representation of the key.
  std::optional<std::vector<std::string>> public_keys_hashes;

  // Product name of this executable.
  std::optional<std::string> product_name;

  // Version of this executable.
  std::optional<std::string> version;

};

enum class RegistryHive {
  kNone = 0,
  kHkeyClassesRoot,
  kHkeyLocalMachine,
  kHkeyCurrentUser,
  kMaxValue = kHkeyCurrentUser,
};


const char* ToString(RegistryHive as_enum);
RegistryHive ParseRegistryHive(base::StringPiece as_string);
std::u16string GetRegistryHiveParseError(base::StringPiece as_string);

struct GetSettingsOptions {
  GetSettingsOptions();
  ~GetSettingsOptions();
  GetSettingsOptions(const GetSettingsOptions&) = delete;
  GetSettingsOptions& operator=(const GetSettingsOptions&) = delete;
  GetSettingsOptions(GetSettingsOptions&& rhs) noexcept;
  GetSettingsOptions& operator=(GetSettingsOptions&& rhs) noexcept;

  // Populates a GetSettingsOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetSettingsOptions& out);

  // Populates a GetSettingsOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetSettingsOptions& out);

  // Creates a deep copy of GetSettingsOptions.
  GetSettingsOptions Clone() const;

  // Creates a GetSettingsOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<GetSettingsOptions> FromValue(const base::Value::Dict& value);

  // Creates a GetSettingsOptions object from a base::Value, or nullopt on
  // failure.
  static std::optional<GetSettingsOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetSettingsOptions object.
  base::Value::Dict ToValue() const;

  // Path to a collection of settings. On Windows it would be the path to the reg
  // key inside the hive. On Mac it would be the path to the plist file.
  std::string path;

  // Key specifying the setting entry we're looking for. On Windows, that will be
  // the registry key itself. On Mac, this is a key path used to retrieve a value
  // from valueForKeyPath:.
  std::string key;

  // When set to true, the retrieved signal will also include the setting's value.
  // When false, the signal will only contain the setting's presence. Supported
  // setting types on Windows: - REG_SZ - REG_DWORD - REG_QWORD Supported setting
  // types on Mac: - NSString - NSNumber
  bool get_value;

  // Windows registry hive containing the desired value. Required value on
  // Windows, will be ignored on other platforms.
  RegistryHive hive;

};

struct GetSettingsRequest {
  GetSettingsRequest();
  ~GetSettingsRequest();
  GetSettingsRequest(const GetSettingsRequest&) = delete;
  GetSettingsRequest& operator=(const GetSettingsRequest&) = delete;
  GetSettingsRequest(GetSettingsRequest&& rhs) noexcept;
  GetSettingsRequest& operator=(GetSettingsRequest&& rhs) noexcept;

  // Populates a GetSettingsRequest object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetSettingsRequest& out);

  // Populates a GetSettingsRequest object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetSettingsRequest& out);

  // Creates a deep copy of GetSettingsRequest.
  GetSettingsRequest Clone() const;

  // Creates a GetSettingsRequest object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<GetSettingsRequest> FromValue(const base::Value::Dict& value);

  // Creates a GetSettingsRequest object from a base::Value, or nullopt on
  // failure.
  static std::optional<GetSettingsRequest> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetSettingsRequest object.
  base::Value::Dict ToValue() const;

  // Information about the for whom the signal collection request is for.
  UserContext user_context;

  // Collection of parameters used to conduct signals collection about specific
  // settings of the system.
  std::vector<GetSettingsOptions> options;

};

struct GetSettingsResponse {
  GetSettingsResponse();
  ~GetSettingsResponse();
  GetSettingsResponse(const GetSettingsResponse&) = delete;
  GetSettingsResponse& operator=(const GetSettingsResponse&) = delete;
  GetSettingsResponse(GetSettingsResponse&& rhs) noexcept;
  GetSettingsResponse& operator=(GetSettingsResponse&& rhs) noexcept;

  // Populates a GetSettingsResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetSettingsResponse& out);

  // Populates a GetSettingsResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetSettingsResponse& out);

  // Creates a deep copy of GetSettingsResponse.
  GetSettingsResponse Clone() const;

  // Creates a GetSettingsResponse object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<GetSettingsResponse> FromValue(const base::Value::Dict& value);

  // Creates a GetSettingsResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<GetSettingsResponse> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetSettingsResponse object.
  base::Value::Dict ToValue() const;

  // Path as given in the corresponding <code>GetSettingsOptions</code> request.
  std::string path;

  // Key as given in the corresponding <code>GetSettingsOptions</code> request.
  std::string key;

  // Hive as given in the corresponding <code>GetSettingsOptions</code> request.
  // Present on Windows only.
  RegistryHive hive;

  // Value indicating whether the specific resource could be found or not.
  PresenceValue presence;

  // JSON-stringified value of the setting. Only set if <code>getValue</code> was
  // true in the corresponding request, and if the setting value was retrievable.
  std::optional<std::string> value;

};


//
// Functions
//

namespace GetDeviceId {

namespace Results {

base::Value::List Create(const std::string& id);
}  // namespace Results

}  // namespace GetDeviceId

namespace GetPersistentSecret {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::optional<bool> reset_secret;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<uint8_t>& secret);
}  // namespace Results

}  // namespace GetPersistentSecret

namespace GetDeviceData {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<uint8_t>& data);
}  // namespace Results

}  // namespace GetDeviceData

namespace SetDeviceData {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string id;

  std::optional<std::vector<uint8_t>> data;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetDeviceData

namespace GetDeviceInfo {

namespace Results {

base::Value::List Create(const DeviceInfo& device_info);
}  // namespace Results

}  // namespace GetDeviceInfo

namespace GetContextInfo {

namespace Results {

base::Value::List Create(const ContextInfo& context_info);
}  // namespace Results

}  // namespace GetContextInfo

namespace GetCertificate {

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

base::Value::List Create(const Certificate& certificate);
}  // namespace Results

}  // namespace GetCertificate

namespace EnqueueRecord {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Composite object that captures everything we need for uploading records.
  EnqueueRecordRequest request;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace EnqueueRecord

namespace GetFileSystemInfo {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  GetFileSystemInfoRequest request;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<GetFileSystemInfoResponse>& file_system_signals);
}  // namespace Results

}  // namespace GetFileSystemInfo

namespace GetSettings {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  GetSettingsRequest request;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<GetSettingsResponse>& settings);
}  // namespace Results

}  // namespace GetSettings

namespace GetAvInfo {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  UserContext user_context;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<AntiVirusSignal>& av_signals);
}  // namespace Results

}  // namespace GetAvInfo

namespace GetHotfixes {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  UserContext user_context;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<HotfixSignal>& hotfix_signals);
}  // namespace Results

}  // namespace GetHotfixes

}  // namespace enterprise_reporting_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_REPORTING_PRIVATE_H__
