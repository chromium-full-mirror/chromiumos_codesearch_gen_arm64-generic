// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/enterprise_reporting_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/enterprise_reporting_private.h"

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
namespace enterprise_reporting_private {
//
// Types
//

const char* ToString(SettingValue enum_param) {
  switch (enum_param) {
    case SETTING_VALUE_UNKNOWN:
      return "UNKNOWN";
    case SETTING_VALUE_DISABLED:
      return "DISABLED";
    case SETTING_VALUE_ENABLED:
      return "ENABLED";
    case SETTING_VALUE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

SettingValue ParseSettingValue(base::StringPiece enum_string) {
  if (enum_string == "UNKNOWN")
    return SETTING_VALUE_UNKNOWN;
  if (enum_string == "DISABLED")
    return SETTING_VALUE_DISABLED;
  if (enum_string == "ENABLED")
    return SETTING_VALUE_ENABLED;
  return SETTING_VALUE_NONE;
}

std::u16string GetSettingValueParseError(base::StringPiece enum_string) {
  return u"expected \"UNKNOWN\" or \"DISABLED\" or \"ENABLED\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


DeviceInfo::DeviceInfo()
: screen_lock_secured(),
disk_encrypted(),
secure_boot_enabled() {}

DeviceInfo::~DeviceInfo() = default;
DeviceInfo::DeviceInfo(DeviceInfo&& rhs) = default;
DeviceInfo& DeviceInfo::operator=(DeviceInfo&& rhs) = default;
DeviceInfo DeviceInfo::Clone() const {
  DeviceInfo out;
  out.os_name = os_name;
  out.os_version = os_version;
  out.device_host_name = device_host_name;
  out.device_model = device_model;
  out.serial_number = serial_number;
  out.screen_lock_secured = screen_lock_secured;
  out.disk_encrypted = disk_encrypted;
  out.mac_addresses = mac_addresses;
  out.windows_machine_domain = windows_machine_domain;
  out.windows_user_domain = windows_user_domain;
  out.security_patch_level = security_patch_level;
  out.secure_boot_enabled = secure_boot_enabled;
  return out;
}

// static
bool DeviceInfo::Populate(
    const base::Value::Dict& dict, DeviceInfo& out) {
  out.secure_boot_enabled = SettingValue();
  const base::Value* os_name_value = dict.Find("osName");
  if (!os_name_value) {
    return false;
  }
  {
    auto* temp = (*os_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.os_name = *temp;
  }

  const base::Value* os_version_value = dict.Find("osVersion");
  if (!os_version_value) {
    return false;
  }
  {
    auto* temp = (*os_version_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.os_version = *temp;
  }

  const base::Value* device_host_name_value = dict.Find("deviceHostName");
  if (!device_host_name_value) {
    return false;
  }
  {
    auto* temp = (*device_host_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.device_host_name = *temp;
  }

  const base::Value* device_model_value = dict.Find("deviceModel");
  if (!device_model_value) {
    return false;
  }
  {
    auto* temp = (*device_model_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.device_model = *temp;
  }

  const base::Value* serial_number_value = dict.Find("serialNumber");
  if (!serial_number_value) {
    return false;
  }
  {
    auto* temp = (*serial_number_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.serial_number = *temp;
  }

  const base::Value* screen_lock_secured_value = dict.Find("screenLockSecured");
  if (!screen_lock_secured_value) {
    return false;
  }
  {
    const std::string* setting_value_as_string = (*screen_lock_secured_value).GetIfString();
    if (!setting_value_as_string) {
      return false;
    }
    out.screen_lock_secured = ParseSettingValue(*setting_value_as_string);
    if (out.screen_lock_secured == SettingValue()) {
      return false;
    }
  }

  const base::Value* disk_encrypted_value = dict.Find("diskEncrypted");
  if (!disk_encrypted_value) {
    return false;
  }
  {
    const std::string* setting_value_as_string = (*disk_encrypted_value).GetIfString();
    if (!setting_value_as_string) {
      return false;
    }
    out.disk_encrypted = ParseSettingValue(*setting_value_as_string);
    if (out.disk_encrypted == SettingValue()) {
      return false;
    }
  }

  const base::Value* mac_addresses_value = dict.Find("macAddresses");
  if (!mac_addresses_value) {
    return false;
  }
  {
    if (!(*mac_addresses_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*mac_addresses_value).GetList(), out.mac_addresses)) {
        return false;
      }
    }
  }

  const base::Value* windows_machine_domain_value = dict.Find("windowsMachineDomain");
  if (windows_machine_domain_value) {
    {
      auto* temp = (*windows_machine_domain_value).GetIfString();
      if (!temp) {
        out.windows_machine_domain = absl::nullopt;
        return false;
      }
      out.windows_machine_domain = *temp;
    }
  }

  const base::Value* windows_user_domain_value = dict.Find("windowsUserDomain");
  if (windows_user_domain_value) {
    {
      auto* temp = (*windows_user_domain_value).GetIfString();
      if (!temp) {
        out.windows_user_domain = absl::nullopt;
        return false;
      }
      out.windows_user_domain = *temp;
    }
  }

  const base::Value* security_patch_level_value = dict.Find("securityPatchLevel");
  if (!security_patch_level_value) {
    return false;
  }
  {
    auto* temp = (*security_patch_level_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.security_patch_level = *temp;
  }

  const base::Value* secure_boot_enabled_value = dict.Find("secureBootEnabled");
  if (secure_boot_enabled_value) {
    {
      const std::string* setting_value_as_string = (*secure_boot_enabled_value).GetIfString();
      if (!setting_value_as_string) {
        return false;
      }
      out.secure_boot_enabled = ParseSettingValue(*setting_value_as_string);
      if (out.secure_boot_enabled == SettingValue()) {
        return false;
      }
    }
    } else {
    out.secure_boot_enabled = SettingValue();
  }

  return true;
}

// static
bool DeviceInfo::Populate(
    const base::Value& value, DeviceInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<DeviceInfo> DeviceInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<DeviceInfo>();
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
absl::optional<DeviceInfo> DeviceInfo::FromValue(const base::Value::Dict& value) {
  DeviceInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DeviceInfo> DeviceInfo::FromValue(const base::Value& value) {
  DeviceInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict DeviceInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("osName", this->os_name);

  to_value_result.Set("osVersion", this->os_version);

  to_value_result.Set("deviceHostName", this->device_host_name);

  to_value_result.Set("deviceModel", this->device_model);

  to_value_result.Set("serialNumber", this->serial_number);

  to_value_result.Set("screenLockSecured", enterprise_reporting_private::ToString(this->screen_lock_secured));

  to_value_result.Set("diskEncrypted", enterprise_reporting_private::ToString(this->disk_encrypted));

  to_value_result.Set("macAddresses", json_schema_compiler::util::CreateValueFromArray(this->mac_addresses));

  if (this->windows_machine_domain) {
    to_value_result.Set("windowsMachineDomain", *this->windows_machine_domain);

  }
  if (this->windows_user_domain) {
    to_value_result.Set("windowsUserDomain", *this->windows_user_domain);

  }
  to_value_result.Set("securityPatchLevel", this->security_patch_level);

  if (this->secure_boot_enabled != SettingValue()) {
    to_value_result.Set("secureBootEnabled", enterprise_reporting_private::ToString(this->secure_boot_enabled));

  }

  return to_value_result;
}


const char* ToString(RealtimeUrlCheckMode enum_param) {
  switch (enum_param) {
    case REALTIME_URL_CHECK_MODE_DISABLED:
      return "DISABLED";
    case REALTIME_URL_CHECK_MODE_ENABLED_MAIN_FRAME:
      return "ENABLED_MAIN_FRAME";
    case REALTIME_URL_CHECK_MODE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

RealtimeUrlCheckMode ParseRealtimeUrlCheckMode(base::StringPiece enum_string) {
  if (enum_string == "DISABLED")
    return REALTIME_URL_CHECK_MODE_DISABLED;
  if (enum_string == "ENABLED_MAIN_FRAME")
    return REALTIME_URL_CHECK_MODE_ENABLED_MAIN_FRAME;
  return REALTIME_URL_CHECK_MODE_NONE;
}

std::u16string GetRealtimeUrlCheckModeParseError(base::StringPiece enum_string) {
  return u"expected \"DISABLED\" or \"ENABLED_MAIN_FRAME\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SafeBrowsingLevel enum_param) {
  switch (enum_param) {
    case SAFE_BROWSING_LEVEL_DISABLED:
      return "DISABLED";
    case SAFE_BROWSING_LEVEL_STANDARD:
      return "STANDARD";
    case SAFE_BROWSING_LEVEL_ENHANCED:
      return "ENHANCED";
    case SAFE_BROWSING_LEVEL_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

SafeBrowsingLevel ParseSafeBrowsingLevel(base::StringPiece enum_string) {
  if (enum_string == "DISABLED")
    return SAFE_BROWSING_LEVEL_DISABLED;
  if (enum_string == "STANDARD")
    return SAFE_BROWSING_LEVEL_STANDARD;
  if (enum_string == "ENHANCED")
    return SAFE_BROWSING_LEVEL_ENHANCED;
  return SAFE_BROWSING_LEVEL_NONE;
}

std::u16string GetSafeBrowsingLevelParseError(base::StringPiece enum_string) {
  return u"expected \"DISABLED\" or \"STANDARD\" or \"ENHANCED\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(PasswordProtectionTrigger enum_param) {
  switch (enum_param) {
    case PASSWORD_PROTECTION_TRIGGER_PASSWORD_PROTECTION_OFF:
      return "PASSWORD_PROTECTION_OFF";
    case PASSWORD_PROTECTION_TRIGGER_PASSWORD_REUSE:
      return "PASSWORD_REUSE";
    case PASSWORD_PROTECTION_TRIGGER_PHISHING_REUSE:
      return "PHISHING_REUSE";
    case PASSWORD_PROTECTION_TRIGGER_POLICY_UNSET:
      return "POLICY_UNSET";
    case PASSWORD_PROTECTION_TRIGGER_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

PasswordProtectionTrigger ParsePasswordProtectionTrigger(base::StringPiece enum_string) {
  if (enum_string == "PASSWORD_PROTECTION_OFF")
    return PASSWORD_PROTECTION_TRIGGER_PASSWORD_PROTECTION_OFF;
  if (enum_string == "PASSWORD_REUSE")
    return PASSWORD_PROTECTION_TRIGGER_PASSWORD_REUSE;
  if (enum_string == "PHISHING_REUSE")
    return PASSWORD_PROTECTION_TRIGGER_PHISHING_REUSE;
  if (enum_string == "POLICY_UNSET")
    return PASSWORD_PROTECTION_TRIGGER_POLICY_UNSET;
  return PASSWORD_PROTECTION_TRIGGER_NONE;
}

std::u16string GetPasswordProtectionTriggerParseError(base::StringPiece enum_string) {
  return u"expected \"PASSWORD_PROTECTION_OFF\" or \"PASSWORD_REUSE\" or \"PHISHING_REUSE\" or \"POLICY_UNSET\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ContextInfo::ContextInfo()
: realtime_url_check_mode(),
safe_browsing_protection_level(),
site_isolation_enabled(false),
built_in_dns_client_enabled(false),
password_protection_warning_trigger(),
chrome_remote_desktop_app_blocked(false),
os_firewall() {}

ContextInfo::~ContextInfo() = default;
ContextInfo::ContextInfo(ContextInfo&& rhs) = default;
ContextInfo& ContextInfo::operator=(ContextInfo&& rhs) = default;
ContextInfo ContextInfo::Clone() const {
  ContextInfo out;
  out.browser_affiliation_ids = browser_affiliation_ids;
  out.profile_affiliation_ids = profile_affiliation_ids;
  out.on_file_attached_providers = on_file_attached_providers;
  out.on_file_downloaded_providers = on_file_downloaded_providers;
  out.on_bulk_data_entry_providers = on_bulk_data_entry_providers;
  out.on_print_providers = on_print_providers;
  out.realtime_url_check_mode = realtime_url_check_mode;
  out.on_security_event_providers = on_security_event_providers;
  out.browser_version = browser_version;
  out.safe_browsing_protection_level = safe_browsing_protection_level;
  out.site_isolation_enabled = site_isolation_enabled;
  out.built_in_dns_client_enabled = built_in_dns_client_enabled;
  out.password_protection_warning_trigger = password_protection_warning_trigger;
  out.chrome_remote_desktop_app_blocked = chrome_remote_desktop_app_blocked;
  out.third_party_blocking_enabled = third_party_blocking_enabled;
  out.os_firewall = os_firewall;
  out.system_dns_servers = system_dns_servers;
  out.enterprise_profile_id = enterprise_profile_id;
  return out;
}

// static
bool ContextInfo::Populate(
    const base::Value::Dict& dict, ContextInfo& out) {
  const base::Value* browser_affiliation_ids_value = dict.Find("browserAffiliationIds");
  if (!browser_affiliation_ids_value) {
    return false;
  }
  {
    if (!(*browser_affiliation_ids_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*browser_affiliation_ids_value).GetList(), out.browser_affiliation_ids)) {
        return false;
      }
    }
  }

  const base::Value* profile_affiliation_ids_value = dict.Find("profileAffiliationIds");
  if (!profile_affiliation_ids_value) {
    return false;
  }
  {
    if (!(*profile_affiliation_ids_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*profile_affiliation_ids_value).GetList(), out.profile_affiliation_ids)) {
        return false;
      }
    }
  }

  const base::Value* on_file_attached_providers_value = dict.Find("onFileAttachedProviders");
  if (!on_file_attached_providers_value) {
    return false;
  }
  {
    if (!(*on_file_attached_providers_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*on_file_attached_providers_value).GetList(), out.on_file_attached_providers)) {
        return false;
      }
    }
  }

  const base::Value* on_file_downloaded_providers_value = dict.Find("onFileDownloadedProviders");
  if (!on_file_downloaded_providers_value) {
    return false;
  }
  {
    if (!(*on_file_downloaded_providers_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*on_file_downloaded_providers_value).GetList(), out.on_file_downloaded_providers)) {
        return false;
      }
    }
  }

  const base::Value* on_bulk_data_entry_providers_value = dict.Find("onBulkDataEntryProviders");
  if (!on_bulk_data_entry_providers_value) {
    return false;
  }
  {
    if (!(*on_bulk_data_entry_providers_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*on_bulk_data_entry_providers_value).GetList(), out.on_bulk_data_entry_providers)) {
        return false;
      }
    }
  }

  const base::Value* on_print_providers_value = dict.Find("onPrintProviders");
  if (!on_print_providers_value) {
    return false;
  }
  {
    if (!(*on_print_providers_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*on_print_providers_value).GetList(), out.on_print_providers)) {
        return false;
      }
    }
  }

  const base::Value* realtime_url_check_mode_value = dict.Find("realtimeUrlCheckMode");
  if (!realtime_url_check_mode_value) {
    return false;
  }
  {
    const std::string* realtime_url_check_mode_as_string = (*realtime_url_check_mode_value).GetIfString();
    if (!realtime_url_check_mode_as_string) {
      return false;
    }
    out.realtime_url_check_mode = ParseRealtimeUrlCheckMode(*realtime_url_check_mode_as_string);
    if (out.realtime_url_check_mode == RealtimeUrlCheckMode()) {
      return false;
    }
  }

  const base::Value* on_security_event_providers_value = dict.Find("onSecurityEventProviders");
  if (!on_security_event_providers_value) {
    return false;
  }
  {
    if (!(*on_security_event_providers_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*on_security_event_providers_value).GetList(), out.on_security_event_providers)) {
        return false;
      }
    }
  }

  const base::Value* browser_version_value = dict.Find("browserVersion");
  if (!browser_version_value) {
    return false;
  }
  {
    auto* temp = (*browser_version_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.browser_version = *temp;
  }

  const base::Value* safe_browsing_protection_level_value = dict.Find("safeBrowsingProtectionLevel");
  if (!safe_browsing_protection_level_value) {
    return false;
  }
  {
    const std::string* safe_browsing_level_as_string = (*safe_browsing_protection_level_value).GetIfString();
    if (!safe_browsing_level_as_string) {
      return false;
    }
    out.safe_browsing_protection_level = ParseSafeBrowsingLevel(*safe_browsing_level_as_string);
    if (out.safe_browsing_protection_level == SafeBrowsingLevel()) {
      return false;
    }
  }

  const base::Value* site_isolation_enabled_value = dict.Find("siteIsolationEnabled");
  if (!site_isolation_enabled_value) {
    return false;
  }
  {
    auto temp = (*site_isolation_enabled_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.site_isolation_enabled = *temp;
  }

  const base::Value* built_in_dns_client_enabled_value = dict.Find("builtInDnsClientEnabled");
  if (!built_in_dns_client_enabled_value) {
    return false;
  }
  {
    auto temp = (*built_in_dns_client_enabled_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.built_in_dns_client_enabled = *temp;
  }

  const base::Value* password_protection_warning_trigger_value = dict.Find("passwordProtectionWarningTrigger");
  if (!password_protection_warning_trigger_value) {
    return false;
  }
  {
    const std::string* password_protection_trigger_as_string = (*password_protection_warning_trigger_value).GetIfString();
    if (!password_protection_trigger_as_string) {
      return false;
    }
    out.password_protection_warning_trigger = ParsePasswordProtectionTrigger(*password_protection_trigger_as_string);
    if (out.password_protection_warning_trigger == PasswordProtectionTrigger()) {
      return false;
    }
  }

  const base::Value* chrome_remote_desktop_app_blocked_value = dict.Find("chromeRemoteDesktopAppBlocked");
  if (!chrome_remote_desktop_app_blocked_value) {
    return false;
  }
  {
    auto temp = (*chrome_remote_desktop_app_blocked_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.chrome_remote_desktop_app_blocked = *temp;
  }

  const base::Value* third_party_blocking_enabled_value = dict.Find("thirdPartyBlockingEnabled");
  if (third_party_blocking_enabled_value) {
    {
      auto temp = (*third_party_blocking_enabled_value).GetIfBool();
      if (!temp.has_value()) {
        out.third_party_blocking_enabled = absl::nullopt;
        return false;
      }
      out.third_party_blocking_enabled = *temp;
    }
  }

  const base::Value* os_firewall_value = dict.Find("osFirewall");
  if (!os_firewall_value) {
    return false;
  }
  {
    const std::string* setting_value_as_string = (*os_firewall_value).GetIfString();
    if (!setting_value_as_string) {
      return false;
    }
    out.os_firewall = ParseSettingValue(*setting_value_as_string);
    if (out.os_firewall == SettingValue()) {
      return false;
    }
  }

  const base::Value* system_dns_servers_value = dict.Find("systemDnsServers");
  if (!system_dns_servers_value) {
    return false;
  }
  {
    if (!(*system_dns_servers_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*system_dns_servers_value).GetList(), out.system_dns_servers)) {
        return false;
      }
    }
  }

  const base::Value* enterprise_profile_id_value = dict.Find("enterpriseProfileId");
  if (enterprise_profile_id_value) {
    {
      auto* temp = (*enterprise_profile_id_value).GetIfString();
      if (!temp) {
        out.enterprise_profile_id = absl::nullopt;
        return false;
      }
      out.enterprise_profile_id = *temp;
    }
  }

  return true;
}

// static
bool ContextInfo::Populate(
    const base::Value& value, ContextInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ContextInfo> ContextInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ContextInfo>();
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
absl::optional<ContextInfo> ContextInfo::FromValue(const base::Value::Dict& value) {
  ContextInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ContextInfo> ContextInfo::FromValue(const base::Value& value) {
  ContextInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ContextInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("browserAffiliationIds", json_schema_compiler::util::CreateValueFromArray(this->browser_affiliation_ids));

  to_value_result.Set("profileAffiliationIds", json_schema_compiler::util::CreateValueFromArray(this->profile_affiliation_ids));

  to_value_result.Set("onFileAttachedProviders", json_schema_compiler::util::CreateValueFromArray(this->on_file_attached_providers));

  to_value_result.Set("onFileDownloadedProviders", json_schema_compiler::util::CreateValueFromArray(this->on_file_downloaded_providers));

  to_value_result.Set("onBulkDataEntryProviders", json_schema_compiler::util::CreateValueFromArray(this->on_bulk_data_entry_providers));

  to_value_result.Set("onPrintProviders", json_schema_compiler::util::CreateValueFromArray(this->on_print_providers));

  to_value_result.Set("realtimeUrlCheckMode", enterprise_reporting_private::ToString(this->realtime_url_check_mode));

  to_value_result.Set("onSecurityEventProviders", json_schema_compiler::util::CreateValueFromArray(this->on_security_event_providers));

  to_value_result.Set("browserVersion", this->browser_version);

  to_value_result.Set("safeBrowsingProtectionLevel", enterprise_reporting_private::ToString(this->safe_browsing_protection_level));

  to_value_result.Set("siteIsolationEnabled", this->site_isolation_enabled);

  to_value_result.Set("builtInDnsClientEnabled", this->built_in_dns_client_enabled);

  to_value_result.Set("passwordProtectionWarningTrigger", enterprise_reporting_private::ToString(this->password_protection_warning_trigger));

  to_value_result.Set("chromeRemoteDesktopAppBlocked", this->chrome_remote_desktop_app_blocked);

  if (this->third_party_blocking_enabled) {
    to_value_result.Set("thirdPartyBlockingEnabled", *this->third_party_blocking_enabled);

  }
  to_value_result.Set("osFirewall", enterprise_reporting_private::ToString(this->os_firewall));

  to_value_result.Set("systemDnsServers", json_schema_compiler::util::CreateValueFromArray(this->system_dns_servers));

  if (this->enterprise_profile_id) {
    to_value_result.Set("enterpriseProfileId", *this->enterprise_profile_id);

  }

  return to_value_result;
}


const char* ToString(CertificateStatus enum_param) {
  switch (enum_param) {
    case CERTIFICATE_STATUS_OK:
      return "OK";
    case CERTIFICATE_STATUS_POLICY_UNSET:
      return "POLICY_UNSET";
    case CERTIFICATE_STATUS_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

CertificateStatus ParseCertificateStatus(base::StringPiece enum_string) {
  if (enum_string == "OK")
    return CERTIFICATE_STATUS_OK;
  if (enum_string == "POLICY_UNSET")
    return CERTIFICATE_STATUS_POLICY_UNSET;
  return CERTIFICATE_STATUS_NONE;
}

std::u16string GetCertificateStatusParseError(base::StringPiece enum_string) {
  return u"expected \"OK\" or \"POLICY_UNSET\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


Certificate::Certificate()
: status() {}

Certificate::~Certificate() = default;
Certificate::Certificate(Certificate&& rhs) = default;
Certificate& Certificate::operator=(Certificate&& rhs) = default;
Certificate Certificate::Clone() const {
  Certificate out;
  out.status = status;
  out.encoded_certificate = encoded_certificate;
  return out;
}

// static
bool Certificate::Populate(
    const base::Value::Dict& dict, Certificate& out) {
  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    const std::string* certificate_status_as_string = (*status_value).GetIfString();
    if (!certificate_status_as_string) {
      return false;
    }
    out.status = ParseCertificateStatus(*certificate_status_as_string);
    if (out.status == CertificateStatus()) {
      return false;
    }
  }

  const base::Value* encoded_certificate_value = dict.Find("encodedCertificate");
  if (encoded_certificate_value) {
    {
      if (!(*encoded_certificate_value).is_blob()) {
        return false;
      }
      else {
        out.encoded_certificate = (*encoded_certificate_value).GetBlob();
      }
    }
  }

  return true;
}

// static
bool Certificate::Populate(
    const base::Value& value, Certificate& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<Certificate> Certificate::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Certificate>();
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
absl::optional<Certificate> Certificate::FromValue(const base::Value::Dict& value) {
  Certificate out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Certificate> Certificate::FromValue(const base::Value& value) {
  Certificate out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict Certificate::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("status", enterprise_reporting_private::ToString(this->status));

  if (this->encoded_certificate) {
    to_value_result.Set("encodedCertificate", base::Value(*this->encoded_certificate));

  }

  return to_value_result;
}


const char* ToString(EventType enum_param) {
  switch (enum_param) {
    case EVENT_TYPE_DEVICE:
      return "DEVICE";
    case EVENT_TYPE_USER:
      return "USER";
    case EVENT_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

EventType ParseEventType(base::StringPiece enum_string) {
  if (enum_string == "DEVICE")
    return EVENT_TYPE_DEVICE;
  if (enum_string == "USER")
    return EVENT_TYPE_USER;
  return EVENT_TYPE_NONE;
}

std::u16string GetEventTypeParseError(base::StringPiece enum_string) {
  return u"expected \"DEVICE\" or \"USER\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


EnqueueRecordRequest::EnqueueRecordRequest()
: priority(0),
event_type() {}

EnqueueRecordRequest::~EnqueueRecordRequest() = default;
EnqueueRecordRequest::EnqueueRecordRequest(EnqueueRecordRequest&& rhs) = default;
EnqueueRecordRequest& EnqueueRecordRequest::operator=(EnqueueRecordRequest&& rhs) = default;
EnqueueRecordRequest EnqueueRecordRequest::Clone() const {
  EnqueueRecordRequest out;
  out.record_data = record_data;
  out.priority = priority;
  out.event_type = event_type;
  return out;
}

// static
bool EnqueueRecordRequest::Populate(
    const base::Value::Dict& dict, EnqueueRecordRequest& out) {
  const base::Value* record_data_value = dict.Find("recordData");
  if (!record_data_value) {
    return false;
  }
  {
    if (!(*record_data_value).is_blob()) {
      return false;
    }
    else {
      out.record_data = (*record_data_value).GetBlob();
    }
  }

  const base::Value* priority_value = dict.Find("priority");
  if (!priority_value) {
    return false;
  }
  {
    auto temp = (*priority_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.priority = *temp;
  }

  const base::Value* event_type_value = dict.Find("eventType");
  if (!event_type_value) {
    return false;
  }
  {
    const std::string* event_type_as_string = (*event_type_value).GetIfString();
    if (!event_type_as_string) {
      return false;
    }
    out.event_type = ParseEventType(*event_type_as_string);
    if (out.event_type == EventType()) {
      return false;
    }
  }

  return true;
}

// static
bool EnqueueRecordRequest::Populate(
    const base::Value& value, EnqueueRecordRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<EnqueueRecordRequest> EnqueueRecordRequest::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<EnqueueRecordRequest>();
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
absl::optional<EnqueueRecordRequest> EnqueueRecordRequest::FromValue(const base::Value::Dict& value) {
  EnqueueRecordRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<EnqueueRecordRequest> EnqueueRecordRequest::FromValue(const base::Value& value) {
  EnqueueRecordRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict EnqueueRecordRequest::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("recordData", base::Value(this->record_data));

  to_value_result.Set("priority", this->priority);

  to_value_result.Set("eventType", enterprise_reporting_private::ToString(this->event_type));


  return to_value_result;
}


UserContext::UserContext()
 {}

UserContext::~UserContext() = default;
UserContext::UserContext(UserContext&& rhs) = default;
UserContext& UserContext::operator=(UserContext&& rhs) = default;
UserContext UserContext::Clone() const {
  UserContext out;
  out.user_id = user_id;
  return out;
}

// static
bool UserContext::Populate(
    const base::Value::Dict& dict, UserContext& out) {
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

  return true;
}

// static
bool UserContext::Populate(
    const base::Value& value, UserContext& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<UserContext> UserContext::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<UserContext>();
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
absl::optional<UserContext> UserContext::FromValue(const base::Value::Dict& value) {
  UserContext out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<UserContext> UserContext::FromValue(const base::Value& value) {
  UserContext out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict UserContext::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("userId", this->user_id);


  return to_value_result;
}


const char* ToString(AntiVirusProductState enum_param) {
  switch (enum_param) {
    case ANTI_VIRUS_PRODUCT_STATE_ON:
      return "ON";
    case ANTI_VIRUS_PRODUCT_STATE_OFF:
      return "OFF";
    case ANTI_VIRUS_PRODUCT_STATE_SNOOZED:
      return "SNOOZED";
    case ANTI_VIRUS_PRODUCT_STATE_EXPIRED:
      return "EXPIRED";
    case ANTI_VIRUS_PRODUCT_STATE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

AntiVirusProductState ParseAntiVirusProductState(base::StringPiece enum_string) {
  if (enum_string == "ON")
    return ANTI_VIRUS_PRODUCT_STATE_ON;
  if (enum_string == "OFF")
    return ANTI_VIRUS_PRODUCT_STATE_OFF;
  if (enum_string == "SNOOZED")
    return ANTI_VIRUS_PRODUCT_STATE_SNOOZED;
  if (enum_string == "EXPIRED")
    return ANTI_VIRUS_PRODUCT_STATE_EXPIRED;
  return ANTI_VIRUS_PRODUCT_STATE_NONE;
}

std::u16string GetAntiVirusProductStateParseError(base::StringPiece enum_string) {
  return u"expected \"ON\" or \"OFF\" or \"SNOOZED\" or \"EXPIRED\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


AntiVirusSignal::AntiVirusSignal()
: state() {}

AntiVirusSignal::~AntiVirusSignal() = default;
AntiVirusSignal::AntiVirusSignal(AntiVirusSignal&& rhs) = default;
AntiVirusSignal& AntiVirusSignal::operator=(AntiVirusSignal&& rhs) = default;
AntiVirusSignal AntiVirusSignal::Clone() const {
  AntiVirusSignal out;
  out.display_name = display_name;
  out.product_id = product_id;
  out.state = state;
  return out;
}

// static
bool AntiVirusSignal::Populate(
    const base::Value::Dict& dict, AntiVirusSignal& out) {
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

  const base::Value* product_id_value = dict.Find("productId");
  if (!product_id_value) {
    return false;
  }
  {
    auto* temp = (*product_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.product_id = *temp;
  }

  const base::Value* state_value = dict.Find("state");
  if (!state_value) {
    return false;
  }
  {
    const std::string* anti_virus_product_state_as_string = (*state_value).GetIfString();
    if (!anti_virus_product_state_as_string) {
      return false;
    }
    out.state = ParseAntiVirusProductState(*anti_virus_product_state_as_string);
    if (out.state == AntiVirusProductState()) {
      return false;
    }
  }

  return true;
}

// static
bool AntiVirusSignal::Populate(
    const base::Value& value, AntiVirusSignal& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<AntiVirusSignal> AntiVirusSignal::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<AntiVirusSignal>();
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
absl::optional<AntiVirusSignal> AntiVirusSignal::FromValue(const base::Value::Dict& value) {
  AntiVirusSignal out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<AntiVirusSignal> AntiVirusSignal::FromValue(const base::Value& value) {
  AntiVirusSignal out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict AntiVirusSignal::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("displayName", this->display_name);

  to_value_result.Set("productId", this->product_id);

  to_value_result.Set("state", enterprise_reporting_private::ToString(this->state));


  return to_value_result;
}


HotfixSignal::HotfixSignal()
 {}

HotfixSignal::~HotfixSignal() = default;
HotfixSignal::HotfixSignal(HotfixSignal&& rhs) = default;
HotfixSignal& HotfixSignal::operator=(HotfixSignal&& rhs) = default;
HotfixSignal HotfixSignal::Clone() const {
  HotfixSignal out;
  out.hotfix_id = hotfix_id;
  return out;
}

// static
bool HotfixSignal::Populate(
    const base::Value::Dict& dict, HotfixSignal& out) {
  const base::Value* hotfix_id_value = dict.Find("hotfixId");
  if (!hotfix_id_value) {
    return false;
  }
  {
    auto* temp = (*hotfix_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.hotfix_id = *temp;
  }

  return true;
}

// static
bool HotfixSignal::Populate(
    const base::Value& value, HotfixSignal& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<HotfixSignal> HotfixSignal::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<HotfixSignal>();
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
absl::optional<HotfixSignal> HotfixSignal::FromValue(const base::Value::Dict& value) {
  HotfixSignal out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<HotfixSignal> HotfixSignal::FromValue(const base::Value& value) {
  HotfixSignal out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict HotfixSignal::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("hotfixId", this->hotfix_id);


  return to_value_result;
}


const char* ToString(PresenceValue enum_param) {
  switch (enum_param) {
    case PRESENCE_VALUE_UNSPECIFIED:
      return "UNSPECIFIED";
    case PRESENCE_VALUE_ACCESS_DENIED:
      return "ACCESS_DENIED";
    case PRESENCE_VALUE_NOT_FOUND:
      return "NOT_FOUND";
    case PRESENCE_VALUE_FOUND:
      return "FOUND";
    case PRESENCE_VALUE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

PresenceValue ParsePresenceValue(base::StringPiece enum_string) {
  if (enum_string == "UNSPECIFIED")
    return PRESENCE_VALUE_UNSPECIFIED;
  if (enum_string == "ACCESS_DENIED")
    return PRESENCE_VALUE_ACCESS_DENIED;
  if (enum_string == "NOT_FOUND")
    return PRESENCE_VALUE_NOT_FOUND;
  if (enum_string == "FOUND")
    return PRESENCE_VALUE_FOUND;
  return PRESENCE_VALUE_NONE;
}

std::u16string GetPresenceValueParseError(base::StringPiece enum_string) {
  return u"expected \"UNSPECIFIED\" or \"ACCESS_DENIED\" or \"NOT_FOUND\" or \"FOUND\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


GetFileSystemInfoOptions::GetFileSystemInfoOptions()
: compute_sha256(false),
compute_executable_metadata(false) {}

GetFileSystemInfoOptions::~GetFileSystemInfoOptions() = default;
GetFileSystemInfoOptions::GetFileSystemInfoOptions(GetFileSystemInfoOptions&& rhs) = default;
GetFileSystemInfoOptions& GetFileSystemInfoOptions::operator=(GetFileSystemInfoOptions&& rhs) = default;
GetFileSystemInfoOptions GetFileSystemInfoOptions::Clone() const {
  GetFileSystemInfoOptions out;
  out.path = path;
  out.compute_sha256 = compute_sha256;
  out.compute_executable_metadata = compute_executable_metadata;
  return out;
}

// static
bool GetFileSystemInfoOptions::Populate(
    const base::Value::Dict& dict, GetFileSystemInfoOptions& out) {
  const base::Value* path_value = dict.Find("path");
  if (!path_value) {
    return false;
  }
  {
    auto* temp = (*path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.path = *temp;
  }

  const base::Value* compute_sha256_value = dict.Find("computeSha256");
  if (!compute_sha256_value) {
    return false;
  }
  {
    auto temp = (*compute_sha256_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.compute_sha256 = *temp;
  }

  const base::Value* compute_executable_metadata_value = dict.Find("computeExecutableMetadata");
  if (!compute_executable_metadata_value) {
    return false;
  }
  {
    auto temp = (*compute_executable_metadata_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.compute_executable_metadata = *temp;
  }

  return true;
}

// static
bool GetFileSystemInfoOptions::Populate(
    const base::Value& value, GetFileSystemInfoOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<GetFileSystemInfoOptions> GetFileSystemInfoOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<GetFileSystemInfoOptions>();
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
absl::optional<GetFileSystemInfoOptions> GetFileSystemInfoOptions::FromValue(const base::Value::Dict& value) {
  GetFileSystemInfoOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<GetFileSystemInfoOptions> GetFileSystemInfoOptions::FromValue(const base::Value& value) {
  GetFileSystemInfoOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict GetFileSystemInfoOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("path", this->path);

  to_value_result.Set("computeSha256", this->compute_sha256);

  to_value_result.Set("computeExecutableMetadata", this->compute_executable_metadata);


  return to_value_result;
}


GetFileSystemInfoRequest::GetFileSystemInfoRequest()
 {}

GetFileSystemInfoRequest::~GetFileSystemInfoRequest() = default;
GetFileSystemInfoRequest::GetFileSystemInfoRequest(GetFileSystemInfoRequest&& rhs) = default;
GetFileSystemInfoRequest& GetFileSystemInfoRequest::operator=(GetFileSystemInfoRequest&& rhs) = default;
GetFileSystemInfoRequest GetFileSystemInfoRequest::Clone() const {
  GetFileSystemInfoRequest out;
  out.user_context = user_context.Clone();
  out.options.reserve(options.size());
  for (const auto& element : options) {
    json_schema_compiler::util::AppendToContainer(out.options, element.Clone());
  }
  return out;
}

// static
bool GetFileSystemInfoRequest::Populate(
    const base::Value::Dict& dict, GetFileSystemInfoRequest& out) {
  const base::Value* user_context_value = dict.Find("userContext");
  if (!user_context_value) {
    return false;
  }
  {
    if (!(*user_context_value).is_dict()) {
      return false;
    }
    if (!UserContext::Populate((*user_context_value).GetDict(), out.user_context)) {
      return false;
    }
  }

  const base::Value* options_value = dict.Find("options");
  if (!options_value) {
    return false;
  }
  {
    if (!(*options_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*options_value).GetList(), out.options)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool GetFileSystemInfoRequest::Populate(
    const base::Value& value, GetFileSystemInfoRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<GetFileSystemInfoRequest> GetFileSystemInfoRequest::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<GetFileSystemInfoRequest>();
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
absl::optional<GetFileSystemInfoRequest> GetFileSystemInfoRequest::FromValue(const base::Value::Dict& value) {
  GetFileSystemInfoRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<GetFileSystemInfoRequest> GetFileSystemInfoRequest::FromValue(const base::Value& value) {
  GetFileSystemInfoRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict GetFileSystemInfoRequest::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("userContext", (this->user_context).ToValue());

  to_value_result.Set("options", json_schema_compiler::util::CreateValueFromArray(this->options));


  return to_value_result;
}


GetFileSystemInfoResponse::GetFileSystemInfoResponse()
: presence() {}

GetFileSystemInfoResponse::~GetFileSystemInfoResponse() = default;
GetFileSystemInfoResponse::GetFileSystemInfoResponse(GetFileSystemInfoResponse&& rhs) = default;
GetFileSystemInfoResponse& GetFileSystemInfoResponse::operator=(GetFileSystemInfoResponse&& rhs) = default;
GetFileSystemInfoResponse GetFileSystemInfoResponse::Clone() const {
  GetFileSystemInfoResponse out;
  out.path = path;
  out.presence = presence;
  out.sha256_hash = sha256_hash;
  out.is_running = is_running;
  out.public_keys_hashes = public_keys_hashes;
  out.product_name = product_name;
  out.version = version;
  return out;
}

// static
bool GetFileSystemInfoResponse::Populate(
    const base::Value::Dict& dict, GetFileSystemInfoResponse& out) {
  const base::Value* path_value = dict.Find("path");
  if (!path_value) {
    return false;
  }
  {
    auto* temp = (*path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.path = *temp;
  }

  const base::Value* presence_value = dict.Find("presence");
  if (!presence_value) {
    return false;
  }
  {
    const std::string* presence_value_as_string = (*presence_value).GetIfString();
    if (!presence_value_as_string) {
      return false;
    }
    out.presence = ParsePresenceValue(*presence_value_as_string);
    if (out.presence == PresenceValue()) {
      return false;
    }
  }

  const base::Value* sha256_hash_value = dict.Find("sha256Hash");
  if (sha256_hash_value) {
    {
      auto* temp = (*sha256_hash_value).GetIfString();
      if (!temp) {
        out.sha256_hash = absl::nullopt;
        return false;
      }
      out.sha256_hash = *temp;
    }
  }

  const base::Value* is_running_value = dict.Find("isRunning");
  if (is_running_value) {
    {
      auto temp = (*is_running_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_running = absl::nullopt;
        return false;
      }
      out.is_running = *temp;
    }
  }

  const base::Value* public_keys_hashes_value = dict.Find("publicKeysHashes");
  if (public_keys_hashes_value) {
    {
      if (!(*public_keys_hashes_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*public_keys_hashes_value).GetList(), out.public_keys_hashes)) {
          return false;
        }
      }
    }
  }

  const base::Value* product_name_value = dict.Find("productName");
  if (product_name_value) {
    {
      auto* temp = (*product_name_value).GetIfString();
      if (!temp) {
        out.product_name = absl::nullopt;
        return false;
      }
      out.product_name = *temp;
    }
  }

  const base::Value* version_value = dict.Find("version");
  if (version_value) {
    {
      auto* temp = (*version_value).GetIfString();
      if (!temp) {
        out.version = absl::nullopt;
        return false;
      }
      out.version = *temp;
    }
  }

  return true;
}

// static
bool GetFileSystemInfoResponse::Populate(
    const base::Value& value, GetFileSystemInfoResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<GetFileSystemInfoResponse> GetFileSystemInfoResponse::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<GetFileSystemInfoResponse>();
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
absl::optional<GetFileSystemInfoResponse> GetFileSystemInfoResponse::FromValue(const base::Value::Dict& value) {
  GetFileSystemInfoResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<GetFileSystemInfoResponse> GetFileSystemInfoResponse::FromValue(const base::Value& value) {
  GetFileSystemInfoResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict GetFileSystemInfoResponse::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("path", this->path);

  to_value_result.Set("presence", enterprise_reporting_private::ToString(this->presence));

  if (this->sha256_hash) {
    to_value_result.Set("sha256Hash", *this->sha256_hash);

  }
  if (this->is_running) {
    to_value_result.Set("isRunning", *this->is_running);

  }
  if (this->public_keys_hashes) {
    to_value_result.Set("publicKeysHashes", json_schema_compiler::util::CreateValueFromArray(*this->public_keys_hashes));

  }
  if (this->product_name) {
    to_value_result.Set("productName", *this->product_name);

  }
  if (this->version) {
    to_value_result.Set("version", *this->version);

  }

  return to_value_result;
}


const char* ToString(RegistryHive enum_param) {
  switch (enum_param) {
    case REGISTRY_HIVE_HKEY_CLASSES_ROOT:
      return "HKEY_CLASSES_ROOT";
    case REGISTRY_HIVE_HKEY_LOCAL_MACHINE:
      return "HKEY_LOCAL_MACHINE";
    case REGISTRY_HIVE_HKEY_CURRENT_USER:
      return "HKEY_CURRENT_USER";
    case REGISTRY_HIVE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

RegistryHive ParseRegistryHive(base::StringPiece enum_string) {
  if (enum_string == "HKEY_CLASSES_ROOT")
    return REGISTRY_HIVE_HKEY_CLASSES_ROOT;
  if (enum_string == "HKEY_LOCAL_MACHINE")
    return REGISTRY_HIVE_HKEY_LOCAL_MACHINE;
  if (enum_string == "HKEY_CURRENT_USER")
    return REGISTRY_HIVE_HKEY_CURRENT_USER;
  return REGISTRY_HIVE_NONE;
}

std::u16string GetRegistryHiveParseError(base::StringPiece enum_string) {
  return u"expected \"HKEY_CLASSES_ROOT\" or \"HKEY_LOCAL_MACHINE\" or \"HKEY_CURRENT_USER\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


GetSettingsOptions::GetSettingsOptions()
: get_value(false),
hive() {}

GetSettingsOptions::~GetSettingsOptions() = default;
GetSettingsOptions::GetSettingsOptions(GetSettingsOptions&& rhs) = default;
GetSettingsOptions& GetSettingsOptions::operator=(GetSettingsOptions&& rhs) = default;
GetSettingsOptions GetSettingsOptions::Clone() const {
  GetSettingsOptions out;
  out.path = path;
  out.key = key;
  out.get_value = get_value;
  out.hive = hive;
  return out;
}

// static
bool GetSettingsOptions::Populate(
    const base::Value::Dict& dict, GetSettingsOptions& out) {
  out.hive = RegistryHive();
  const base::Value* path_value = dict.Find("path");
  if (!path_value) {
    return false;
  }
  {
    auto* temp = (*path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.path = *temp;
  }

  const base::Value* key_value = dict.Find("key");
  if (!key_value) {
    return false;
  }
  {
    auto* temp = (*key_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.key = *temp;
  }

  const base::Value* get_value_value = dict.Find("getValue");
  if (!get_value_value) {
    return false;
  }
  {
    auto temp = (*get_value_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.get_value = *temp;
  }

  const base::Value* hive_value = dict.Find("hive");
  if (hive_value) {
    {
      const std::string* registry_hive_as_string = (*hive_value).GetIfString();
      if (!registry_hive_as_string) {
        return false;
      }
      out.hive = ParseRegistryHive(*registry_hive_as_string);
      if (out.hive == RegistryHive()) {
        return false;
      }
    }
    } else {
    out.hive = RegistryHive();
  }

  return true;
}

// static
bool GetSettingsOptions::Populate(
    const base::Value& value, GetSettingsOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<GetSettingsOptions> GetSettingsOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<GetSettingsOptions>();
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
absl::optional<GetSettingsOptions> GetSettingsOptions::FromValue(const base::Value::Dict& value) {
  GetSettingsOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<GetSettingsOptions> GetSettingsOptions::FromValue(const base::Value& value) {
  GetSettingsOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict GetSettingsOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("path", this->path);

  to_value_result.Set("key", this->key);

  to_value_result.Set("getValue", this->get_value);

  if (this->hive != RegistryHive()) {
    to_value_result.Set("hive", enterprise_reporting_private::ToString(this->hive));

  }

  return to_value_result;
}


GetSettingsRequest::GetSettingsRequest()
 {}

GetSettingsRequest::~GetSettingsRequest() = default;
GetSettingsRequest::GetSettingsRequest(GetSettingsRequest&& rhs) = default;
GetSettingsRequest& GetSettingsRequest::operator=(GetSettingsRequest&& rhs) = default;
GetSettingsRequest GetSettingsRequest::Clone() const {
  GetSettingsRequest out;
  out.user_context = user_context.Clone();
  out.options.reserve(options.size());
  for (const auto& element : options) {
    json_schema_compiler::util::AppendToContainer(out.options, element.Clone());
  }
  return out;
}

// static
bool GetSettingsRequest::Populate(
    const base::Value::Dict& dict, GetSettingsRequest& out) {
  const base::Value* user_context_value = dict.Find("userContext");
  if (!user_context_value) {
    return false;
  }
  {
    if (!(*user_context_value).is_dict()) {
      return false;
    }
    if (!UserContext::Populate((*user_context_value).GetDict(), out.user_context)) {
      return false;
    }
  }

  const base::Value* options_value = dict.Find("options");
  if (!options_value) {
    return false;
  }
  {
    if (!(*options_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*options_value).GetList(), out.options)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool GetSettingsRequest::Populate(
    const base::Value& value, GetSettingsRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<GetSettingsRequest> GetSettingsRequest::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<GetSettingsRequest>();
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
absl::optional<GetSettingsRequest> GetSettingsRequest::FromValue(const base::Value::Dict& value) {
  GetSettingsRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<GetSettingsRequest> GetSettingsRequest::FromValue(const base::Value& value) {
  GetSettingsRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict GetSettingsRequest::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("userContext", (this->user_context).ToValue());

  to_value_result.Set("options", json_schema_compiler::util::CreateValueFromArray(this->options));


  return to_value_result;
}


GetSettingsResponse::GetSettingsResponse()
: hive(),
presence() {}

GetSettingsResponse::~GetSettingsResponse() = default;
GetSettingsResponse::GetSettingsResponse(GetSettingsResponse&& rhs) = default;
GetSettingsResponse& GetSettingsResponse::operator=(GetSettingsResponse&& rhs) = default;
GetSettingsResponse GetSettingsResponse::Clone() const {
  GetSettingsResponse out;
  out.path = path;
  out.key = key;
  out.hive = hive;
  out.presence = presence;
  out.value = value;
  return out;
}

// static
bool GetSettingsResponse::Populate(
    const base::Value::Dict& dict, GetSettingsResponse& out) {
  out.hive = RegistryHive();
  const base::Value* path_value = dict.Find("path");
  if (!path_value) {
    return false;
  }
  {
    auto* temp = (*path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.path = *temp;
  }

  const base::Value* key_value = dict.Find("key");
  if (!key_value) {
    return false;
  }
  {
    auto* temp = (*key_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.key = *temp;
  }

  const base::Value* hive_value = dict.Find("hive");
  if (hive_value) {
    {
      const std::string* registry_hive_as_string = (*hive_value).GetIfString();
      if (!registry_hive_as_string) {
        return false;
      }
      out.hive = ParseRegistryHive(*registry_hive_as_string);
      if (out.hive == RegistryHive()) {
        return false;
      }
    }
    } else {
    out.hive = RegistryHive();
  }

  const base::Value* presence_value = dict.Find("presence");
  if (!presence_value) {
    return false;
  }
  {
    const std::string* presence_value_as_string = (*presence_value).GetIfString();
    if (!presence_value_as_string) {
      return false;
    }
    out.presence = ParsePresenceValue(*presence_value_as_string);
    if (out.presence == PresenceValue()) {
      return false;
    }
  }

  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    {
      auto* temp = (*value_value).GetIfString();
      if (!temp) {
        out.value = absl::nullopt;
        return false;
      }
      out.value = *temp;
    }
  }

  return true;
}

// static
bool GetSettingsResponse::Populate(
    const base::Value& value, GetSettingsResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<GetSettingsResponse> GetSettingsResponse::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<GetSettingsResponse>();
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
absl::optional<GetSettingsResponse> GetSettingsResponse::FromValue(const base::Value::Dict& value) {
  GetSettingsResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<GetSettingsResponse> GetSettingsResponse::FromValue(const base::Value& value) {
  GetSettingsResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict GetSettingsResponse::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("path", this->path);

  to_value_result.Set("key", this->key);

  if (this->hive != RegistryHive()) {
    to_value_result.Set("hive", enterprise_reporting_private::ToString(this->hive));

  }
  to_value_result.Set("presence", enterprise_reporting_private::ToString(this->presence));

  if (this->value) {
    to_value_result.Set("value", *this->value);

  }

  return to_value_result;
}



//
// Functions
//

namespace GetDeviceId {

base::Value::List Results::Create(const std::string& id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(id);

  return create_results;
}
}  // namespace GetDeviceId

namespace GetPersistentSecret {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& reset_secret_value = args[0];
    {
      auto temp = reset_secret_value.GetIfBool();
      if (!temp.has_value()) {
        params.reset_secret = absl::nullopt;
        return absl::nullopt;
      }
      params.reset_secret = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create(const std::vector<uint8_t>& secret) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value(secret));

  return create_results;
}
}  // namespace GetPersistentSecret

namespace GetDeviceData {

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
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<uint8_t>& data) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value(data));

  return create_results;
}
}  // namespace GetDeviceData

namespace SetDeviceData {

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
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& data_value = args[1];
    {
      if (!data_value.is_blob()) {
        return absl::nullopt;
      }
      else {
        params.data = data_value.GetBlob();
      }
    }
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetDeviceData

namespace GetDeviceInfo {

base::Value::List Results::Create(const DeviceInfo& device_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((device_info).ToValue());

  return create_results;
}
}  // namespace GetDeviceInfo

namespace GetContextInfo {

base::Value::List Results::Create(const ContextInfo& context_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((context_info).ToValue());

  return create_results;
}
}  // namespace GetContextInfo

namespace GetCertificate {

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
    const base::Value& url_value = args[0];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const Certificate& certificate) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((certificate).ToValue());

  return create_results;
}
}  // namespace GetCertificate

namespace EnqueueRecord {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return absl::nullopt;
      }
      if (!EnqueueRecordRequest::Populate(request_value.GetDict(), params.request)) {
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
}  // namespace EnqueueRecord

namespace GetFileSystemInfo {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return absl::nullopt;
      }
      if (!GetFileSystemInfoRequest::Populate(request_value.GetDict(), params.request)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<GetFileSystemInfoResponse>& file_system_signals) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(file_system_signals));

  return create_results;
}
}  // namespace GetFileSystemInfo

namespace GetSettings {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return absl::nullopt;
      }
      if (!GetSettingsRequest::Populate(request_value.GetDict(), params.request)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<GetSettingsResponse>& settings) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(settings));

  return create_results;
}
}  // namespace GetSettings

namespace GetAvInfo {

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
    const base::Value& user_context_value = args[0];
    {
      if (!user_context_value.is_dict()) {
        return absl::nullopt;
      }
      if (!UserContext::Populate(user_context_value.GetDict(), params.user_context)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<AntiVirusSignal>& av_signals) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(av_signals));

  return create_results;
}
}  // namespace GetAvInfo

namespace GetHotfixes {

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
    const base::Value& user_context_value = args[0];
    {
      if (!user_context_value.is_dict()) {
        return absl::nullopt;
      }
      if (!UserContext::Populate(user_context_value.GetDict(), params.user_context)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<HotfixSignal>& hotfix_signals) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(hotfix_signals));

  return create_results;
}
}  // namespace GetHotfixes

}  // namespace enterprise_reporting_private
}  // namespace api
}  // namespace extensions

