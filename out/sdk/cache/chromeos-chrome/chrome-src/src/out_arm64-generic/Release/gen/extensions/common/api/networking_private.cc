// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/networking_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/networking_private.h"

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
namespace networking_private {
//
// Types
//

const char* ToString(ActivationStateType enum_param) {
  switch (enum_param) {
    case ActivationStateType::kActivated:
      return "Activated";
    case ActivationStateType::kActivating:
      return "Activating";
    case ActivationStateType::kNotActivated:
      return "NotActivated";
    case ActivationStateType::kPartiallyActivated:
      return "PartiallyActivated";
    case ActivationStateType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ActivationStateType ParseActivationStateType(base::StringPiece enum_string) {
  if (enum_string == "Activated")
    return ActivationStateType::kActivated;
  if (enum_string == "Activating")
    return ActivationStateType::kActivating;
  if (enum_string == "NotActivated")
    return ActivationStateType::kNotActivated;
  if (enum_string == "PartiallyActivated")
    return ActivationStateType::kPartiallyActivated;
  return ActivationStateType::kNone;
}

std::u16string GetActivationStateTypeParseError(base::StringPiece enum_string) {
  return u"expected \"Activated\" or \"Activating\" or \"NotActivated\" or \"PartiallyActivated\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(CaptivePortalStatus enum_param) {
  switch (enum_param) {
    case CaptivePortalStatus::kUnknown:
      return "Unknown";
    case CaptivePortalStatus::kOffline:
      return "Offline";
    case CaptivePortalStatus::kOnline:
      return "Online";
    case CaptivePortalStatus::kPortal:
      return "Portal";
    case CaptivePortalStatus::kProxyAuthRequired:
      return "ProxyAuthRequired";
    case CaptivePortalStatus::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

CaptivePortalStatus ParseCaptivePortalStatus(base::StringPiece enum_string) {
  if (enum_string == "Unknown")
    return CaptivePortalStatus::kUnknown;
  if (enum_string == "Offline")
    return CaptivePortalStatus::kOffline;
  if (enum_string == "Online")
    return CaptivePortalStatus::kOnline;
  if (enum_string == "Portal")
    return CaptivePortalStatus::kPortal;
  if (enum_string == "ProxyAuthRequired")
    return CaptivePortalStatus::kProxyAuthRequired;
  return CaptivePortalStatus::kNone;
}

std::u16string GetCaptivePortalStatusParseError(base::StringPiece enum_string) {
  return u"expected \"Unknown\" or \"Offline\" or \"Online\" or \"Portal\" or \"ProxyAuthRequired\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ConnectionStateType enum_param) {
  switch (enum_param) {
    case ConnectionStateType::kConnected:
      return "Connected";
    case ConnectionStateType::kConnecting:
      return "Connecting";
    case ConnectionStateType::kNotConnected:
      return "NotConnected";
    case ConnectionStateType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ConnectionStateType ParseConnectionStateType(base::StringPiece enum_string) {
  if (enum_string == "Connected")
    return ConnectionStateType::kConnected;
  if (enum_string == "Connecting")
    return ConnectionStateType::kConnecting;
  if (enum_string == "NotConnected")
    return ConnectionStateType::kNotConnected;
  return ConnectionStateType::kNone;
}

std::u16string GetConnectionStateTypeParseError(base::StringPiece enum_string) {
  return u"expected \"Connected\" or \"Connecting\" or \"NotConnected\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DeviceStateType enum_param) {
  switch (enum_param) {
    case DeviceStateType::kUninitialized:
      return "Uninitialized";
    case DeviceStateType::kDisabled:
      return "Disabled";
    case DeviceStateType::kEnabling:
      return "Enabling";
    case DeviceStateType::kEnabled:
      return "Enabled";
    case DeviceStateType::kProhibited:
      return "Prohibited";
    case DeviceStateType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DeviceStateType ParseDeviceStateType(base::StringPiece enum_string) {
  if (enum_string == "Uninitialized")
    return DeviceStateType::kUninitialized;
  if (enum_string == "Disabled")
    return DeviceStateType::kDisabled;
  if (enum_string == "Enabling")
    return DeviceStateType::kEnabling;
  if (enum_string == "Enabled")
    return DeviceStateType::kEnabled;
  if (enum_string == "Prohibited")
    return DeviceStateType::kProhibited;
  return DeviceStateType::kNone;
}

std::u16string GetDeviceStateTypeParseError(base::StringPiece enum_string) {
  return u"expected \"Uninitialized\" or \"Disabled\" or \"Enabling\" or \"Enabled\" or \"Prohibited\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(IPConfigType enum_param) {
  switch (enum_param) {
    case IPConfigType::kDhcp:
      return "DHCP";
    case IPConfigType::kStatic:
      return "Static";
    case IPConfigType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

IPConfigType ParseIPConfigType(base::StringPiece enum_string) {
  if (enum_string == "DHCP")
    return IPConfigType::kDhcp;
  if (enum_string == "Static")
    return IPConfigType::kStatic;
  return IPConfigType::kNone;
}

std::u16string GetIPConfigTypeParseError(base::StringPiece enum_string) {
  return u"expected \"DHCP\" or \"Static\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(NetworkType enum_param) {
  switch (enum_param) {
    case NetworkType::kAll:
      return "All";
    case NetworkType::kCellular:
      return "Cellular";
    case NetworkType::kEthernet:
      return "Ethernet";
    case NetworkType::kTether:
      return "Tether";
    case NetworkType::kVpn:
      return "VPN";
    case NetworkType::kWireless:
      return "Wireless";
    case NetworkType::kWiFi:
      return "WiFi";
    case NetworkType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

NetworkType ParseNetworkType(base::StringPiece enum_string) {
  if (enum_string == "All")
    return NetworkType::kAll;
  if (enum_string == "Cellular")
    return NetworkType::kCellular;
  if (enum_string == "Ethernet")
    return NetworkType::kEthernet;
  if (enum_string == "Tether")
    return NetworkType::kTether;
  if (enum_string == "VPN")
    return NetworkType::kVpn;
  if (enum_string == "Wireless")
    return NetworkType::kWireless;
  if (enum_string == "WiFi")
    return NetworkType::kWiFi;
  return NetworkType::kNone;
}

std::u16string GetNetworkTypeParseError(base::StringPiece enum_string) {
  return u"expected \"All\" or \"Cellular\" or \"Ethernet\" or \"Tether\" or \"VPN\" or \"Wireless\" or \"WiFi\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ProxySettingsType enum_param) {
  switch (enum_param) {
    case ProxySettingsType::kDirect:
      return "Direct";
    case ProxySettingsType::kManual:
      return "Manual";
    case ProxySettingsType::kPac:
      return "PAC";
    case ProxySettingsType::kWpad:
      return "WPAD";
    case ProxySettingsType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ProxySettingsType ParseProxySettingsType(base::StringPiece enum_string) {
  if (enum_string == "Direct")
    return ProxySettingsType::kDirect;
  if (enum_string == "Manual")
    return ProxySettingsType::kManual;
  if (enum_string == "PAC")
    return ProxySettingsType::kPac;
  if (enum_string == "WPAD")
    return ProxySettingsType::kWpad;
  return ProxySettingsType::kNone;
}

std::u16string GetProxySettingsTypeParseError(base::StringPiece enum_string) {
  return u"expected \"Direct\" or \"Manual\" or \"PAC\" or \"WPAD\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ManagedBoolean::ManagedBoolean()
 {}

ManagedBoolean::~ManagedBoolean() = default;
ManagedBoolean::ManagedBoolean(ManagedBoolean&& rhs) = default;
ManagedBoolean& ManagedBoolean::operator=(ManagedBoolean&& rhs) = default;
ManagedBoolean ManagedBoolean::Clone() const {
  ManagedBoolean out;
  out.active = active;
  out.effective = effective;
  out.user_policy = user_policy;
  out.device_policy = device_policy;
  out.user_setting = user_setting;
  out.shared_setting = shared_setting;
  out.user_editable = user_editable;
  out.device_editable = device_editable;
  return out;
}

// static
bool ManagedBoolean::Populate(
    const base::Value::Dict& dict, ManagedBoolean& out) {
  const base::Value* active_value = dict.Find("Active");
  if (active_value) {
    {
      auto temp = (*active_value).GetIfBool();
      if (!temp.has_value()) {
        out.active = absl::nullopt;
        return false;
      }
      out.active = *temp;
    }
  }

  const base::Value* effective_value = dict.Find("Effective");
  if (effective_value) {
    {
      auto* temp = (*effective_value).GetIfString();
      if (!temp) {
        out.effective = absl::nullopt;
        return false;
      }
      out.effective = *temp;
    }
  }

  const base::Value* user_policy_value = dict.Find("UserPolicy");
  if (user_policy_value) {
    {
      auto temp = (*user_policy_value).GetIfBool();
      if (!temp.has_value()) {
        out.user_policy = absl::nullopt;
        return false;
      }
      out.user_policy = *temp;
    }
  }

  const base::Value* device_policy_value = dict.Find("DevicePolicy");
  if (device_policy_value) {
    {
      auto temp = (*device_policy_value).GetIfBool();
      if (!temp.has_value()) {
        out.device_policy = absl::nullopt;
        return false;
      }
      out.device_policy = *temp;
    }
  }

  const base::Value* user_setting_value = dict.Find("UserSetting");
  if (user_setting_value) {
    {
      auto temp = (*user_setting_value).GetIfBool();
      if (!temp.has_value()) {
        out.user_setting = absl::nullopt;
        return false;
      }
      out.user_setting = *temp;
    }
  }

  const base::Value* shared_setting_value = dict.Find("SharedSetting");
  if (shared_setting_value) {
    {
      auto temp = (*shared_setting_value).GetIfBool();
      if (!temp.has_value()) {
        out.shared_setting = absl::nullopt;
        return false;
      }
      out.shared_setting = *temp;
    }
  }

  const base::Value* user_editable_value = dict.Find("UserEditable");
  if (user_editable_value) {
    {
      auto temp = (*user_editable_value).GetIfBool();
      if (!temp.has_value()) {
        out.user_editable = absl::nullopt;
        return false;
      }
      out.user_editable = *temp;
    }
  }

  const base::Value* device_editable_value = dict.Find("DeviceEditable");
  if (device_editable_value) {
    {
      auto temp = (*device_editable_value).GetIfBool();
      if (!temp.has_value()) {
        out.device_editable = absl::nullopt;
        return false;
      }
      out.device_editable = *temp;
    }
  }

  return true;
}

// static
bool ManagedBoolean::Populate(
    const base::Value& value, ManagedBoolean& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ManagedBoolean> ManagedBoolean::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ManagedBoolean>();
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
absl::optional<ManagedBoolean> ManagedBoolean::FromValue(const base::Value::Dict& value) {
  ManagedBoolean out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ManagedBoolean> ManagedBoolean::FromValue(const base::Value& value) {
  ManagedBoolean out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ManagedBoolean::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->active) {
    to_value_result.Set("Active", *this->active);

  }
  if (this->effective) {
    to_value_result.Set("Effective", *this->effective);

  }
  if (this->user_policy) {
    to_value_result.Set("UserPolicy", *this->user_policy);

  }
  if (this->device_policy) {
    to_value_result.Set("DevicePolicy", *this->device_policy);

  }
  if (this->user_setting) {
    to_value_result.Set("UserSetting", *this->user_setting);

  }
  if (this->shared_setting) {
    to_value_result.Set("SharedSetting", *this->shared_setting);

  }
  if (this->user_editable) {
    to_value_result.Set("UserEditable", *this->user_editable);

  }
  if (this->device_editable) {
    to_value_result.Set("DeviceEditable", *this->device_editable);

  }

  return to_value_result;
}


ManagedLong::ManagedLong()
 {}

ManagedLong::~ManagedLong() = default;
ManagedLong::ManagedLong(ManagedLong&& rhs) = default;
ManagedLong& ManagedLong::operator=(ManagedLong&& rhs) = default;
ManagedLong ManagedLong::Clone() const {
  ManagedLong out;
  out.active = active;
  out.effective = effective;
  out.user_policy = user_policy;
  out.device_policy = device_policy;
  out.user_setting = user_setting;
  out.shared_setting = shared_setting;
  out.user_editable = user_editable;
  out.device_editable = device_editable;
  return out;
}

// static
bool ManagedLong::Populate(
    const base::Value::Dict& dict, ManagedLong& out) {
  const base::Value* active_value = dict.Find("Active");
  if (active_value) {
    {
      auto temp = (*active_value).GetIfInt();
      if (!temp.has_value()) {
        out.active = absl::nullopt;
        return false;
      }
      out.active = *temp;
    }
  }

  const base::Value* effective_value = dict.Find("Effective");
  if (effective_value) {
    {
      auto* temp = (*effective_value).GetIfString();
      if (!temp) {
        out.effective = absl::nullopt;
        return false;
      }
      out.effective = *temp;
    }
  }

  const base::Value* user_policy_value = dict.Find("UserPolicy");
  if (user_policy_value) {
    {
      auto temp = (*user_policy_value).GetIfInt();
      if (!temp.has_value()) {
        out.user_policy = absl::nullopt;
        return false;
      }
      out.user_policy = *temp;
    }
  }

  const base::Value* device_policy_value = dict.Find("DevicePolicy");
  if (device_policy_value) {
    {
      auto temp = (*device_policy_value).GetIfInt();
      if (!temp.has_value()) {
        out.device_policy = absl::nullopt;
        return false;
      }
      out.device_policy = *temp;
    }
  }

  const base::Value* user_setting_value = dict.Find("UserSetting");
  if (user_setting_value) {
    {
      auto temp = (*user_setting_value).GetIfInt();
      if (!temp.has_value()) {
        out.user_setting = absl::nullopt;
        return false;
      }
      out.user_setting = *temp;
    }
  }

  const base::Value* shared_setting_value = dict.Find("SharedSetting");
  if (shared_setting_value) {
    {
      auto temp = (*shared_setting_value).GetIfInt();
      if (!temp.has_value()) {
        out.shared_setting = absl::nullopt;
        return false;
      }
      out.shared_setting = *temp;
    }
  }

  const base::Value* user_editable_value = dict.Find("UserEditable");
  if (user_editable_value) {
    {
      auto temp = (*user_editable_value).GetIfBool();
      if (!temp.has_value()) {
        out.user_editable = absl::nullopt;
        return false;
      }
      out.user_editable = *temp;
    }
  }

  const base::Value* device_editable_value = dict.Find("DeviceEditable");
  if (device_editable_value) {
    {
      auto temp = (*device_editable_value).GetIfBool();
      if (!temp.has_value()) {
        out.device_editable = absl::nullopt;
        return false;
      }
      out.device_editable = *temp;
    }
  }

  return true;
}

// static
bool ManagedLong::Populate(
    const base::Value& value, ManagedLong& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ManagedLong> ManagedLong::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ManagedLong>();
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
absl::optional<ManagedLong> ManagedLong::FromValue(const base::Value::Dict& value) {
  ManagedLong out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ManagedLong> ManagedLong::FromValue(const base::Value& value) {
  ManagedLong out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ManagedLong::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->active) {
    to_value_result.Set("Active", *this->active);

  }
  if (this->effective) {
    to_value_result.Set("Effective", *this->effective);

  }
  if (this->user_policy) {
    to_value_result.Set("UserPolicy", *this->user_policy);

  }
  if (this->device_policy) {
    to_value_result.Set("DevicePolicy", *this->device_policy);

  }
  if (this->user_setting) {
    to_value_result.Set("UserSetting", *this->user_setting);

  }
  if (this->shared_setting) {
    to_value_result.Set("SharedSetting", *this->shared_setting);

  }
  if (this->user_editable) {
    to_value_result.Set("UserEditable", *this->user_editable);

  }
  if (this->device_editable) {
    to_value_result.Set("DeviceEditable", *this->device_editable);

  }

  return to_value_result;
}


ManagedDOMString::ManagedDOMString()
 {}

ManagedDOMString::~ManagedDOMString() = default;
ManagedDOMString::ManagedDOMString(ManagedDOMString&& rhs) = default;
ManagedDOMString& ManagedDOMString::operator=(ManagedDOMString&& rhs) = default;
ManagedDOMString ManagedDOMString::Clone() const {
  ManagedDOMString out;
  out.active = active;
  out.effective = effective;
  out.user_policy = user_policy;
  out.device_policy = device_policy;
  out.user_setting = user_setting;
  out.shared_setting = shared_setting;
  out.user_editable = user_editable;
  out.device_editable = device_editable;
  return out;
}

// static
bool ManagedDOMString::Populate(
    const base::Value::Dict& dict, ManagedDOMString& out) {
  const base::Value* active_value = dict.Find("Active");
  if (active_value) {
    {
      auto* temp = (*active_value).GetIfString();
      if (!temp) {
        out.active = absl::nullopt;
        return false;
      }
      out.active = *temp;
    }
  }

  const base::Value* effective_value = dict.Find("Effective");
  if (effective_value) {
    {
      auto* temp = (*effective_value).GetIfString();
      if (!temp) {
        out.effective = absl::nullopt;
        return false;
      }
      out.effective = *temp;
    }
  }

  const base::Value* user_policy_value = dict.Find("UserPolicy");
  if (user_policy_value) {
    {
      auto* temp = (*user_policy_value).GetIfString();
      if (!temp) {
        out.user_policy = absl::nullopt;
        return false;
      }
      out.user_policy = *temp;
    }
  }

  const base::Value* device_policy_value = dict.Find("DevicePolicy");
  if (device_policy_value) {
    {
      auto* temp = (*device_policy_value).GetIfString();
      if (!temp) {
        out.device_policy = absl::nullopt;
        return false;
      }
      out.device_policy = *temp;
    }
  }

  const base::Value* user_setting_value = dict.Find("UserSetting");
  if (user_setting_value) {
    {
      auto* temp = (*user_setting_value).GetIfString();
      if (!temp) {
        out.user_setting = absl::nullopt;
        return false;
      }
      out.user_setting = *temp;
    }
  }

  const base::Value* shared_setting_value = dict.Find("SharedSetting");
  if (shared_setting_value) {
    {
      auto* temp = (*shared_setting_value).GetIfString();
      if (!temp) {
        out.shared_setting = absl::nullopt;
        return false;
      }
      out.shared_setting = *temp;
    }
  }

  const base::Value* user_editable_value = dict.Find("UserEditable");
  if (user_editable_value) {
    {
      auto temp = (*user_editable_value).GetIfBool();
      if (!temp.has_value()) {
        out.user_editable = absl::nullopt;
        return false;
      }
      out.user_editable = *temp;
    }
  }

  const base::Value* device_editable_value = dict.Find("DeviceEditable");
  if (device_editable_value) {
    {
      auto temp = (*device_editable_value).GetIfBool();
      if (!temp.has_value()) {
        out.device_editable = absl::nullopt;
        return false;
      }
      out.device_editable = *temp;
    }
  }

  return true;
}

// static
bool ManagedDOMString::Populate(
    const base::Value& value, ManagedDOMString& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ManagedDOMString> ManagedDOMString::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ManagedDOMString>();
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
absl::optional<ManagedDOMString> ManagedDOMString::FromValue(const base::Value::Dict& value) {
  ManagedDOMString out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ManagedDOMString> ManagedDOMString::FromValue(const base::Value& value) {
  ManagedDOMString out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ManagedDOMString::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->active) {
    to_value_result.Set("Active", *this->active);

  }
  if (this->effective) {
    to_value_result.Set("Effective", *this->effective);

  }
  if (this->user_policy) {
    to_value_result.Set("UserPolicy", *this->user_policy);

  }
  if (this->device_policy) {
    to_value_result.Set("DevicePolicy", *this->device_policy);

  }
  if (this->user_setting) {
    to_value_result.Set("UserSetting", *this->user_setting);

  }
  if (this->shared_setting) {
    to_value_result.Set("SharedSetting", *this->shared_setting);

  }
  if (this->user_editable) {
    to_value_result.Set("UserEditable", *this->user_editable);

  }
  if (this->device_editable) {
    to_value_result.Set("DeviceEditable", *this->device_editable);

  }

  return to_value_result;
}


ManagedDOMStringList::ManagedDOMStringList()
 {}

ManagedDOMStringList::~ManagedDOMStringList() = default;
ManagedDOMStringList::ManagedDOMStringList(ManagedDOMStringList&& rhs) = default;
ManagedDOMStringList& ManagedDOMStringList::operator=(ManagedDOMStringList&& rhs) = default;
ManagedDOMStringList ManagedDOMStringList::Clone() const {
  ManagedDOMStringList out;
  out.active = active;
  out.effective = effective;
  out.user_policy = user_policy;
  out.device_policy = device_policy;
  out.user_setting = user_setting;
  out.shared_setting = shared_setting;
  out.user_editable = user_editable;
  out.device_editable = device_editable;
  return out;
}

// static
bool ManagedDOMStringList::Populate(
    const base::Value::Dict& dict, ManagedDOMStringList& out) {
  const base::Value* active_value = dict.Find("Active");
  if (active_value) {
    {
      if (!(*active_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*active_value).GetList(), out.active)) {
          return false;
        }
      }
    }
  }

  const base::Value* effective_value = dict.Find("Effective");
  if (effective_value) {
    {
      auto* temp = (*effective_value).GetIfString();
      if (!temp) {
        out.effective = absl::nullopt;
        return false;
      }
      out.effective = *temp;
    }
  }

  const base::Value* user_policy_value = dict.Find("UserPolicy");
  if (user_policy_value) {
    {
      if (!(*user_policy_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*user_policy_value).GetList(), out.user_policy)) {
          return false;
        }
      }
    }
  }

  const base::Value* device_policy_value = dict.Find("DevicePolicy");
  if (device_policy_value) {
    {
      if (!(*device_policy_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*device_policy_value).GetList(), out.device_policy)) {
          return false;
        }
      }
    }
  }

  const base::Value* user_setting_value = dict.Find("UserSetting");
  if (user_setting_value) {
    {
      if (!(*user_setting_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*user_setting_value).GetList(), out.user_setting)) {
          return false;
        }
      }
    }
  }

  const base::Value* shared_setting_value = dict.Find("SharedSetting");
  if (shared_setting_value) {
    {
      if (!(*shared_setting_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*shared_setting_value).GetList(), out.shared_setting)) {
          return false;
        }
      }
    }
  }

  const base::Value* user_editable_value = dict.Find("UserEditable");
  if (user_editable_value) {
    {
      auto temp = (*user_editable_value).GetIfBool();
      if (!temp.has_value()) {
        out.user_editable = absl::nullopt;
        return false;
      }
      out.user_editable = *temp;
    }
  }

  const base::Value* device_editable_value = dict.Find("DeviceEditable");
  if (device_editable_value) {
    {
      auto temp = (*device_editable_value).GetIfBool();
      if (!temp.has_value()) {
        out.device_editable = absl::nullopt;
        return false;
      }
      out.device_editable = *temp;
    }
  }

  return true;
}

// static
bool ManagedDOMStringList::Populate(
    const base::Value& value, ManagedDOMStringList& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ManagedDOMStringList> ManagedDOMStringList::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ManagedDOMStringList>();
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
absl::optional<ManagedDOMStringList> ManagedDOMStringList::FromValue(const base::Value::Dict& value) {
  ManagedDOMStringList out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ManagedDOMStringList> ManagedDOMStringList::FromValue(const base::Value& value) {
  ManagedDOMStringList out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ManagedDOMStringList::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->active) {
    to_value_result.Set("Active", json_schema_compiler::util::CreateValueFromArray(*this->active));

  }
  if (this->effective) {
    to_value_result.Set("Effective", *this->effective);

  }
  if (this->user_policy) {
    to_value_result.Set("UserPolicy", json_schema_compiler::util::CreateValueFromArray(*this->user_policy));

  }
  if (this->device_policy) {
    to_value_result.Set("DevicePolicy", json_schema_compiler::util::CreateValueFromArray(*this->device_policy));

  }
  if (this->user_setting) {
    to_value_result.Set("UserSetting", json_schema_compiler::util::CreateValueFromArray(*this->user_setting));

  }
  if (this->shared_setting) {
    to_value_result.Set("SharedSetting", json_schema_compiler::util::CreateValueFromArray(*this->shared_setting));

  }
  if (this->user_editable) {
    to_value_result.Set("UserEditable", *this->user_editable);

  }
  if (this->device_editable) {
    to_value_result.Set("DeviceEditable", *this->device_editable);

  }

  return to_value_result;
}


ManagedIPConfigType::ManagedIPConfigType()
: active(),
user_policy(),
device_policy(),
user_setting(),
shared_setting() {}

ManagedIPConfigType::~ManagedIPConfigType() = default;
ManagedIPConfigType::ManagedIPConfigType(ManagedIPConfigType&& rhs) = default;
ManagedIPConfigType& ManagedIPConfigType::operator=(ManagedIPConfigType&& rhs) = default;
ManagedIPConfigType ManagedIPConfigType::Clone() const {
  ManagedIPConfigType out;
  out.active = active;
  out.effective = effective;
  out.user_policy = user_policy;
  out.device_policy = device_policy;
  out.user_setting = user_setting;
  out.shared_setting = shared_setting;
  out.user_editable = user_editable;
  out.device_editable = device_editable;
  return out;
}

// static
bool ManagedIPConfigType::Populate(
    const base::Value::Dict& dict, ManagedIPConfigType& out) {
  out.active = IPConfigType();
  out.user_policy = IPConfigType();
  out.device_policy = IPConfigType();
  out.user_setting = IPConfigType();
  out.shared_setting = IPConfigType();
  const base::Value* active_value = dict.Find("Active");
  if (active_value) {
    {
      const std::string* ip_config_type_as_string = (*active_value).GetIfString();
      if (!ip_config_type_as_string) {
        return false;
      }
      out.active = ParseIPConfigType(*ip_config_type_as_string);
      if (out.active == IPConfigType()) {
        return false;
      }
    }
    } else {
    out.active = IPConfigType();
  }

  const base::Value* effective_value = dict.Find("Effective");
  if (effective_value) {
    {
      auto* temp = (*effective_value).GetIfString();
      if (!temp) {
        out.effective = absl::nullopt;
        return false;
      }
      out.effective = *temp;
    }
  }

  const base::Value* user_policy_value = dict.Find("UserPolicy");
  if (user_policy_value) {
    {
      const std::string* ip_config_type_as_string = (*user_policy_value).GetIfString();
      if (!ip_config_type_as_string) {
        return false;
      }
      out.user_policy = ParseIPConfigType(*ip_config_type_as_string);
      if (out.user_policy == IPConfigType()) {
        return false;
      }
    }
    } else {
    out.user_policy = IPConfigType();
  }

  const base::Value* device_policy_value = dict.Find("DevicePolicy");
  if (device_policy_value) {
    {
      const std::string* ip_config_type_as_string = (*device_policy_value).GetIfString();
      if (!ip_config_type_as_string) {
        return false;
      }
      out.device_policy = ParseIPConfigType(*ip_config_type_as_string);
      if (out.device_policy == IPConfigType()) {
        return false;
      }
    }
    } else {
    out.device_policy = IPConfigType();
  }

  const base::Value* user_setting_value = dict.Find("UserSetting");
  if (user_setting_value) {
    {
      const std::string* ip_config_type_as_string = (*user_setting_value).GetIfString();
      if (!ip_config_type_as_string) {
        return false;
      }
      out.user_setting = ParseIPConfigType(*ip_config_type_as_string);
      if (out.user_setting == IPConfigType()) {
        return false;
      }
    }
    } else {
    out.user_setting = IPConfigType();
  }

  const base::Value* shared_setting_value = dict.Find("SharedSetting");
  if (shared_setting_value) {
    {
      const std::string* ip_config_type_as_string = (*shared_setting_value).GetIfString();
      if (!ip_config_type_as_string) {
        return false;
      }
      out.shared_setting = ParseIPConfigType(*ip_config_type_as_string);
      if (out.shared_setting == IPConfigType()) {
        return false;
      }
    }
    } else {
    out.shared_setting = IPConfigType();
  }

  const base::Value* user_editable_value = dict.Find("UserEditable");
  if (user_editable_value) {
    {
      auto temp = (*user_editable_value).GetIfBool();
      if (!temp.has_value()) {
        out.user_editable = absl::nullopt;
        return false;
      }
      out.user_editable = *temp;
    }
  }

  const base::Value* device_editable_value = dict.Find("DeviceEditable");
  if (device_editable_value) {
    {
      auto temp = (*device_editable_value).GetIfBool();
      if (!temp.has_value()) {
        out.device_editable = absl::nullopt;
        return false;
      }
      out.device_editable = *temp;
    }
  }

  return true;
}

// static
bool ManagedIPConfigType::Populate(
    const base::Value& value, ManagedIPConfigType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ManagedIPConfigType> ManagedIPConfigType::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ManagedIPConfigType>();
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
absl::optional<ManagedIPConfigType> ManagedIPConfigType::FromValue(const base::Value::Dict& value) {
  ManagedIPConfigType out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ManagedIPConfigType> ManagedIPConfigType::FromValue(const base::Value& value) {
  ManagedIPConfigType out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ManagedIPConfigType::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->active != IPConfigType()) {
    to_value_result.Set("Active", networking_private::ToString(this->active));

  }
  if (this->effective) {
    to_value_result.Set("Effective", *this->effective);

  }
  if (this->user_policy != IPConfigType()) {
    to_value_result.Set("UserPolicy", networking_private::ToString(this->user_policy));

  }
  if (this->device_policy != IPConfigType()) {
    to_value_result.Set("DevicePolicy", networking_private::ToString(this->device_policy));

  }
  if (this->user_setting != IPConfigType()) {
    to_value_result.Set("UserSetting", networking_private::ToString(this->user_setting));

  }
  if (this->shared_setting != IPConfigType()) {
    to_value_result.Set("SharedSetting", networking_private::ToString(this->shared_setting));

  }
  if (this->user_editable) {
    to_value_result.Set("UserEditable", *this->user_editable);

  }
  if (this->device_editable) {
    to_value_result.Set("DeviceEditable", *this->device_editable);

  }

  return to_value_result;
}


ManagedProxySettingsType::ManagedProxySettingsType()
: active(),
user_policy(),
device_policy(),
user_setting(),
shared_setting() {}

ManagedProxySettingsType::~ManagedProxySettingsType() = default;
ManagedProxySettingsType::ManagedProxySettingsType(ManagedProxySettingsType&& rhs) = default;
ManagedProxySettingsType& ManagedProxySettingsType::operator=(ManagedProxySettingsType&& rhs) = default;
ManagedProxySettingsType ManagedProxySettingsType::Clone() const {
  ManagedProxySettingsType out;
  out.active = active;
  out.effective = effective;
  out.user_policy = user_policy;
  out.device_policy = device_policy;
  out.user_setting = user_setting;
  out.shared_setting = shared_setting;
  out.user_editable = user_editable;
  out.device_editable = device_editable;
  return out;
}

// static
bool ManagedProxySettingsType::Populate(
    const base::Value::Dict& dict, ManagedProxySettingsType& out) {
  out.active = ProxySettingsType();
  out.user_policy = ProxySettingsType();
  out.device_policy = ProxySettingsType();
  out.user_setting = ProxySettingsType();
  out.shared_setting = ProxySettingsType();
  const base::Value* active_value = dict.Find("Active");
  if (active_value) {
    {
      const std::string* proxy_settings_type_as_string = (*active_value).GetIfString();
      if (!proxy_settings_type_as_string) {
        return false;
      }
      out.active = ParseProxySettingsType(*proxy_settings_type_as_string);
      if (out.active == ProxySettingsType()) {
        return false;
      }
    }
    } else {
    out.active = ProxySettingsType();
  }

  const base::Value* effective_value = dict.Find("Effective");
  if (effective_value) {
    {
      auto* temp = (*effective_value).GetIfString();
      if (!temp) {
        out.effective = absl::nullopt;
        return false;
      }
      out.effective = *temp;
    }
  }

  const base::Value* user_policy_value = dict.Find("UserPolicy");
  if (user_policy_value) {
    {
      const std::string* proxy_settings_type_as_string = (*user_policy_value).GetIfString();
      if (!proxy_settings_type_as_string) {
        return false;
      }
      out.user_policy = ParseProxySettingsType(*proxy_settings_type_as_string);
      if (out.user_policy == ProxySettingsType()) {
        return false;
      }
    }
    } else {
    out.user_policy = ProxySettingsType();
  }

  const base::Value* device_policy_value = dict.Find("DevicePolicy");
  if (device_policy_value) {
    {
      const std::string* proxy_settings_type_as_string = (*device_policy_value).GetIfString();
      if (!proxy_settings_type_as_string) {
        return false;
      }
      out.device_policy = ParseProxySettingsType(*proxy_settings_type_as_string);
      if (out.device_policy == ProxySettingsType()) {
        return false;
      }
    }
    } else {
    out.device_policy = ProxySettingsType();
  }

  const base::Value* user_setting_value = dict.Find("UserSetting");
  if (user_setting_value) {
    {
      const std::string* proxy_settings_type_as_string = (*user_setting_value).GetIfString();
      if (!proxy_settings_type_as_string) {
        return false;
      }
      out.user_setting = ParseProxySettingsType(*proxy_settings_type_as_string);
      if (out.user_setting == ProxySettingsType()) {
        return false;
      }
    }
    } else {
    out.user_setting = ProxySettingsType();
  }

  const base::Value* shared_setting_value = dict.Find("SharedSetting");
  if (shared_setting_value) {
    {
      const std::string* proxy_settings_type_as_string = (*shared_setting_value).GetIfString();
      if (!proxy_settings_type_as_string) {
        return false;
      }
      out.shared_setting = ParseProxySettingsType(*proxy_settings_type_as_string);
      if (out.shared_setting == ProxySettingsType()) {
        return false;
      }
    }
    } else {
    out.shared_setting = ProxySettingsType();
  }

  const base::Value* user_editable_value = dict.Find("UserEditable");
  if (user_editable_value) {
    {
      auto temp = (*user_editable_value).GetIfBool();
      if (!temp.has_value()) {
        out.user_editable = absl::nullopt;
        return false;
      }
      out.user_editable = *temp;
    }
  }

  const base::Value* device_editable_value = dict.Find("DeviceEditable");
  if (device_editable_value) {
    {
      auto temp = (*device_editable_value).GetIfBool();
      if (!temp.has_value()) {
        out.device_editable = absl::nullopt;
        return false;
      }
      out.device_editable = *temp;
    }
  }

  return true;
}

// static
bool ManagedProxySettingsType::Populate(
    const base::Value& value, ManagedProxySettingsType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ManagedProxySettingsType> ManagedProxySettingsType::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ManagedProxySettingsType>();
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
absl::optional<ManagedProxySettingsType> ManagedProxySettingsType::FromValue(const base::Value::Dict& value) {
  ManagedProxySettingsType out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ManagedProxySettingsType> ManagedProxySettingsType::FromValue(const base::Value& value) {
  ManagedProxySettingsType out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ManagedProxySettingsType::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->active != ProxySettingsType()) {
    to_value_result.Set("Active", networking_private::ToString(this->active));

  }
  if (this->effective) {
    to_value_result.Set("Effective", *this->effective);

  }
  if (this->user_policy != ProxySettingsType()) {
    to_value_result.Set("UserPolicy", networking_private::ToString(this->user_policy));

  }
  if (this->device_policy != ProxySettingsType()) {
    to_value_result.Set("DevicePolicy", networking_private::ToString(this->device_policy));

  }
  if (this->user_setting != ProxySettingsType()) {
    to_value_result.Set("UserSetting", networking_private::ToString(this->user_setting));

  }
  if (this->shared_setting != ProxySettingsType()) {
    to_value_result.Set("SharedSetting", networking_private::ToString(this->shared_setting));

  }
  if (this->user_editable) {
    to_value_result.Set("UserEditable", *this->user_editable);

  }
  if (this->device_editable) {
    to_value_result.Set("DeviceEditable", *this->device_editable);

  }

  return to_value_result;
}


APNProperties::APNProperties()
 {}

APNProperties::~APNProperties() = default;
APNProperties::APNProperties(APNProperties&& rhs) = default;
APNProperties& APNProperties::operator=(APNProperties&& rhs) = default;
APNProperties APNProperties::Clone() const {
  APNProperties out;
  out.access_point_name = access_point_name;
  out.authentication = authentication;
  out.language = language;
  out.localized_name = localized_name;
  out.name = name;
  out.password = password;
  out.username = username;
  return out;
}

// static
bool APNProperties::Populate(
    const base::Value::Dict& dict, APNProperties& out) {
  const base::Value* access_point_name_value = dict.Find("AccessPointName");
  if (!access_point_name_value) {
    return false;
  }
  {
    auto* temp = (*access_point_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.access_point_name = *temp;
  }

  const base::Value* authentication_value = dict.Find("Authentication");
  if (authentication_value) {
    {
      auto* temp = (*authentication_value).GetIfString();
      if (!temp) {
        out.authentication = absl::nullopt;
        return false;
      }
      out.authentication = *temp;
    }
  }

  const base::Value* language_value = dict.Find("Language");
  if (language_value) {
    {
      auto* temp = (*language_value).GetIfString();
      if (!temp) {
        out.language = absl::nullopt;
        return false;
      }
      out.language = *temp;
    }
  }

  const base::Value* localized_name_value = dict.Find("LocalizedName");
  if (localized_name_value) {
    {
      auto* temp = (*localized_name_value).GetIfString();
      if (!temp) {
        out.localized_name = absl::nullopt;
        return false;
      }
      out.localized_name = *temp;
    }
  }

  const base::Value* name_value = dict.Find("Name");
  if (name_value) {
    {
      auto* temp = (*name_value).GetIfString();
      if (!temp) {
        out.name = absl::nullopt;
        return false;
      }
      out.name = *temp;
    }
  }

  const base::Value* password_value = dict.Find("Password");
  if (password_value) {
    {
      auto* temp = (*password_value).GetIfString();
      if (!temp) {
        out.password = absl::nullopt;
        return false;
      }
      out.password = *temp;
    }
  }

  const base::Value* username_value = dict.Find("Username");
  if (username_value) {
    {
      auto* temp = (*username_value).GetIfString();
      if (!temp) {
        out.username = absl::nullopt;
        return false;
      }
      out.username = *temp;
    }
  }

  return true;
}

// static
bool APNProperties::Populate(
    const base::Value& value, APNProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<APNProperties> APNProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<APNProperties>();
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
absl::optional<APNProperties> APNProperties::FromValue(const base::Value::Dict& value) {
  APNProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<APNProperties> APNProperties::FromValue(const base::Value& value) {
  APNProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict APNProperties::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("AccessPointName", this->access_point_name);

  if (this->authentication) {
    to_value_result.Set("Authentication", *this->authentication);

  }
  if (this->language) {
    to_value_result.Set("Language", *this->language);

  }
  if (this->localized_name) {
    to_value_result.Set("LocalizedName", *this->localized_name);

  }
  if (this->name) {
    to_value_result.Set("Name", *this->name);

  }
  if (this->password) {
    to_value_result.Set("Password", *this->password);

  }
  if (this->username) {
    to_value_result.Set("Username", *this->username);

  }

  return to_value_result;
}


ManagedAPNProperties::ManagedAPNProperties()
 {}

ManagedAPNProperties::~ManagedAPNProperties() = default;
ManagedAPNProperties::ManagedAPNProperties(ManagedAPNProperties&& rhs) = default;
ManagedAPNProperties& ManagedAPNProperties::operator=(ManagedAPNProperties&& rhs) = default;
ManagedAPNProperties ManagedAPNProperties::Clone() const {
  ManagedAPNProperties out;
  out.access_point_name = access_point_name.Clone();
  if (authentication) {
    out.authentication = authentication->Clone();
  }
  if (language) {
    out.language = language->Clone();
  }
  if (localized_name) {
    out.localized_name = localized_name->Clone();
  }
  if (name) {
    out.name = name->Clone();
  }
  if (password) {
    out.password = password->Clone();
  }
  if (username) {
    out.username = username->Clone();
  }
  return out;
}

// static
bool ManagedAPNProperties::Populate(
    const base::Value::Dict& dict, ManagedAPNProperties& out) {
  const base::Value* access_point_name_value = dict.Find("AccessPointName");
  if (!access_point_name_value) {
    return false;
  }
  {
    if (!(*access_point_name_value).is_dict()) {
      return false;
    }
    if (!ManagedDOMString::Populate((*access_point_name_value).GetDict(), out.access_point_name)) {
      return false;
    }
  }

  const base::Value* authentication_value = dict.Find("Authentication");
  if (authentication_value) {
    {
      if (!(*authentication_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*authentication_value).GetDict(), temp))
          return false;
        out.authentication = std::move(temp);
      }
    }
  }

  const base::Value* language_value = dict.Find("Language");
  if (language_value) {
    {
      if (!(*language_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*language_value).GetDict(), temp))
          return false;
        out.language = std::move(temp);
      }
    }
  }

  const base::Value* localized_name_value = dict.Find("LocalizedName");
  if (localized_name_value) {
    {
      if (!(*localized_name_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*localized_name_value).GetDict(), temp))
          return false;
        out.localized_name = std::move(temp);
      }
    }
  }

  const base::Value* name_value = dict.Find("Name");
  if (name_value) {
    {
      if (!(*name_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*name_value).GetDict(), temp))
          return false;
        out.name = std::move(temp);
      }
    }
  }

  const base::Value* password_value = dict.Find("Password");
  if (password_value) {
    {
      if (!(*password_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*password_value).GetDict(), temp))
          return false;
        out.password = std::move(temp);
      }
    }
  }

  const base::Value* username_value = dict.Find("Username");
  if (username_value) {
    {
      if (!(*username_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*username_value).GetDict(), temp))
          return false;
        out.username = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool ManagedAPNProperties::Populate(
    const base::Value& value, ManagedAPNProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ManagedAPNProperties> ManagedAPNProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ManagedAPNProperties>();
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
absl::optional<ManagedAPNProperties> ManagedAPNProperties::FromValue(const base::Value::Dict& value) {
  ManagedAPNProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ManagedAPNProperties> ManagedAPNProperties::FromValue(const base::Value& value) {
  ManagedAPNProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ManagedAPNProperties::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("AccessPointName", (this->access_point_name).ToValue());

  if (this->authentication) {
    to_value_result.Set("Authentication", (this->authentication)->ToValue());

  }
  if (this->language) {
    to_value_result.Set("Language", (this->language)->ToValue());

  }
  if (this->localized_name) {
    to_value_result.Set("LocalizedName", (this->localized_name)->ToValue());

  }
  if (this->name) {
    to_value_result.Set("Name", (this->name)->ToValue());

  }
  if (this->password) {
    to_value_result.Set("Password", (this->password)->ToValue());

  }
  if (this->username) {
    to_value_result.Set("Username", (this->username)->ToValue());

  }

  return to_value_result;
}


ManagedAPNList::ManagedAPNList()
 {}

ManagedAPNList::~ManagedAPNList() = default;
ManagedAPNList::ManagedAPNList(ManagedAPNList&& rhs) = default;
ManagedAPNList& ManagedAPNList::operator=(ManagedAPNList&& rhs) = default;
ManagedAPNList ManagedAPNList::Clone() const {
  ManagedAPNList out;
  if (active) {
    out.active.emplace();
    out.active->reserve(active->size());
    for (const auto& element : *active) {
      json_schema_compiler::util::AppendToContainer(*out.active, element.Clone());
    }
  }
  out.effective = effective;
  if (user_policy) {
    out.user_policy.emplace();
    out.user_policy->reserve(user_policy->size());
    for (const auto& element : *user_policy) {
      json_schema_compiler::util::AppendToContainer(*out.user_policy, element.Clone());
    }
  }
  if (device_policy) {
    out.device_policy.emplace();
    out.device_policy->reserve(device_policy->size());
    for (const auto& element : *device_policy) {
      json_schema_compiler::util::AppendToContainer(*out.device_policy, element.Clone());
    }
  }
  if (user_setting) {
    out.user_setting.emplace();
    out.user_setting->reserve(user_setting->size());
    for (const auto& element : *user_setting) {
      json_schema_compiler::util::AppendToContainer(*out.user_setting, element.Clone());
    }
  }
  if (shared_setting) {
    out.shared_setting.emplace();
    out.shared_setting->reserve(shared_setting->size());
    for (const auto& element : *shared_setting) {
      json_schema_compiler::util::AppendToContainer(*out.shared_setting, element.Clone());
    }
  }
  out.user_editable = user_editable;
  out.device_editable = device_editable;
  return out;
}

// static
bool ManagedAPNList::Populate(
    const base::Value::Dict& dict, ManagedAPNList& out) {
  const base::Value* active_value = dict.Find("Active");
  if (active_value) {
    {
      if (!(*active_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*active_value).GetList(), out.active)) {
          return false;
        }
      }
    }
  }

  const base::Value* effective_value = dict.Find("Effective");
  if (effective_value) {
    {
      auto* temp = (*effective_value).GetIfString();
      if (!temp) {
        out.effective = absl::nullopt;
        return false;
      }
      out.effective = *temp;
    }
  }

  const base::Value* user_policy_value = dict.Find("UserPolicy");
  if (user_policy_value) {
    {
      if (!(*user_policy_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*user_policy_value).GetList(), out.user_policy)) {
          return false;
        }
      }
    }
  }

  const base::Value* device_policy_value = dict.Find("DevicePolicy");
  if (device_policy_value) {
    {
      if (!(*device_policy_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*device_policy_value).GetList(), out.device_policy)) {
          return false;
        }
      }
    }
  }

  const base::Value* user_setting_value = dict.Find("UserSetting");
  if (user_setting_value) {
    {
      if (!(*user_setting_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*user_setting_value).GetList(), out.user_setting)) {
          return false;
        }
      }
    }
  }

  const base::Value* shared_setting_value = dict.Find("SharedSetting");
  if (shared_setting_value) {
    {
      if (!(*shared_setting_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*shared_setting_value).GetList(), out.shared_setting)) {
          return false;
        }
      }
    }
  }

  const base::Value* user_editable_value = dict.Find("UserEditable");
  if (user_editable_value) {
    {
      auto temp = (*user_editable_value).GetIfBool();
      if (!temp.has_value()) {
        out.user_editable = absl::nullopt;
        return false;
      }
      out.user_editable = *temp;
    }
  }

  const base::Value* device_editable_value = dict.Find("DeviceEditable");
  if (device_editable_value) {
    {
      auto temp = (*device_editable_value).GetIfBool();
      if (!temp.has_value()) {
        out.device_editable = absl::nullopt;
        return false;
      }
      out.device_editable = *temp;
    }
  }

  return true;
}

// static
bool ManagedAPNList::Populate(
    const base::Value& value, ManagedAPNList& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ManagedAPNList> ManagedAPNList::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ManagedAPNList>();
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
absl::optional<ManagedAPNList> ManagedAPNList::FromValue(const base::Value::Dict& value) {
  ManagedAPNList out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ManagedAPNList> ManagedAPNList::FromValue(const base::Value& value) {
  ManagedAPNList out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ManagedAPNList::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->active) {
    to_value_result.Set("Active", json_schema_compiler::util::CreateValueFromArray(*this->active));

  }
  if (this->effective) {
    to_value_result.Set("Effective", *this->effective);

  }
  if (this->user_policy) {
    to_value_result.Set("UserPolicy", json_schema_compiler::util::CreateValueFromArray(*this->user_policy));

  }
  if (this->device_policy) {
    to_value_result.Set("DevicePolicy", json_schema_compiler::util::CreateValueFromArray(*this->device_policy));

  }
  if (this->user_setting) {
    to_value_result.Set("UserSetting", json_schema_compiler::util::CreateValueFromArray(*this->user_setting));

  }
  if (this->shared_setting) {
    to_value_result.Set("SharedSetting", json_schema_compiler::util::CreateValueFromArray(*this->shared_setting));

  }
  if (this->user_editable) {
    to_value_result.Set("UserEditable", *this->user_editable);

  }
  if (this->device_editable) {
    to_value_result.Set("DeviceEditable", *this->device_editable);

  }

  return to_value_result;
}


CellularProviderProperties::CellularProviderProperties()
 {}

CellularProviderProperties::~CellularProviderProperties() = default;
CellularProviderProperties::CellularProviderProperties(CellularProviderProperties&& rhs) = default;
CellularProviderProperties& CellularProviderProperties::operator=(CellularProviderProperties&& rhs) = default;
CellularProviderProperties CellularProviderProperties::Clone() const {
  CellularProviderProperties out;
  out.name = name;
  out.code = code;
  out.country = country;
  return out;
}

// static
bool CellularProviderProperties::Populate(
    const base::Value::Dict& dict, CellularProviderProperties& out) {
  const base::Value* name_value = dict.Find("Name");
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

  const base::Value* code_value = dict.Find("Code");
  if (!code_value) {
    return false;
  }
  {
    auto* temp = (*code_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.code = *temp;
  }

  const base::Value* country_value = dict.Find("Country");
  if (country_value) {
    {
      auto* temp = (*country_value).GetIfString();
      if (!temp) {
        out.country = absl::nullopt;
        return false;
      }
      out.country = *temp;
    }
  }

  return true;
}

// static
bool CellularProviderProperties::Populate(
    const base::Value& value, CellularProviderProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<CellularProviderProperties> CellularProviderProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<CellularProviderProperties>();
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
absl::optional<CellularProviderProperties> CellularProviderProperties::FromValue(const base::Value::Dict& value) {
  CellularProviderProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CellularProviderProperties> CellularProviderProperties::FromValue(const base::Value& value) {
  CellularProviderProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict CellularProviderProperties::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("Name", this->name);

  to_value_result.Set("Code", this->code);

  if (this->country) {
    to_value_result.Set("Country", *this->country);

  }

  return to_value_result;
}


CellularSimState::CellularSimState()
: require_pin(false) {}

CellularSimState::~CellularSimState() = default;
CellularSimState::CellularSimState(CellularSimState&& rhs) = default;
CellularSimState& CellularSimState::operator=(CellularSimState&& rhs) = default;
CellularSimState CellularSimState::Clone() const {
  CellularSimState out;
  out.require_pin = require_pin;
  out.current_pin = current_pin;
  out.new_pin = new_pin;
  return out;
}

// static
bool CellularSimState::Populate(
    const base::Value::Dict& dict, CellularSimState& out) {
  const base::Value* require_pin_value = dict.Find("requirePin");
  if (!require_pin_value) {
    return false;
  }
  {
    auto temp = (*require_pin_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.require_pin = *temp;
  }

  const base::Value* current_pin_value = dict.Find("currentPin");
  if (!current_pin_value) {
    return false;
  }
  {
    auto* temp = (*current_pin_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.current_pin = *temp;
  }

  const base::Value* new_pin_value = dict.Find("newPin");
  if (new_pin_value) {
    {
      auto* temp = (*new_pin_value).GetIfString();
      if (!temp) {
        out.new_pin = absl::nullopt;
        return false;
      }
      out.new_pin = *temp;
    }
  }

  return true;
}

// static
bool CellularSimState::Populate(
    const base::Value& value, CellularSimState& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<CellularSimState> CellularSimState::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<CellularSimState>();
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
absl::optional<CellularSimState> CellularSimState::FromValue(const base::Value::Dict& value) {
  CellularSimState out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CellularSimState> CellularSimState::FromValue(const base::Value& value) {
  CellularSimState out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict CellularSimState::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("requirePin", this->require_pin);

  to_value_result.Set("currentPin", this->current_pin);

  if (this->new_pin) {
    to_value_result.Set("newPin", *this->new_pin);

  }

  return to_value_result;
}


IssuerSubjectPattern::IssuerSubjectPattern()
 {}

IssuerSubjectPattern::~IssuerSubjectPattern() = default;
IssuerSubjectPattern::IssuerSubjectPattern(IssuerSubjectPattern&& rhs) = default;
IssuerSubjectPattern& IssuerSubjectPattern::operator=(IssuerSubjectPattern&& rhs) = default;
IssuerSubjectPattern IssuerSubjectPattern::Clone() const {
  IssuerSubjectPattern out;
  out.common_name = common_name;
  out.locality = locality;
  out.organization = organization;
  out.organizational_unit = organizational_unit;
  return out;
}

// static
bool IssuerSubjectPattern::Populate(
    const base::Value::Dict& dict, IssuerSubjectPattern& out) {
  const base::Value* common_name_value = dict.Find("CommonName");
  if (common_name_value) {
    {
      auto* temp = (*common_name_value).GetIfString();
      if (!temp) {
        out.common_name = absl::nullopt;
        return false;
      }
      out.common_name = *temp;
    }
  }

  const base::Value* locality_value = dict.Find("Locality");
  if (locality_value) {
    {
      auto* temp = (*locality_value).GetIfString();
      if (!temp) {
        out.locality = absl::nullopt;
        return false;
      }
      out.locality = *temp;
    }
  }

  const base::Value* organization_value = dict.Find("Organization");
  if (organization_value) {
    {
      auto* temp = (*organization_value).GetIfString();
      if (!temp) {
        out.organization = absl::nullopt;
        return false;
      }
      out.organization = *temp;
    }
  }

  const base::Value* organizational_unit_value = dict.Find("OrganizationalUnit");
  if (organizational_unit_value) {
    {
      auto* temp = (*organizational_unit_value).GetIfString();
      if (!temp) {
        out.organizational_unit = absl::nullopt;
        return false;
      }
      out.organizational_unit = *temp;
    }
  }

  return true;
}

// static
bool IssuerSubjectPattern::Populate(
    const base::Value& value, IssuerSubjectPattern& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<IssuerSubjectPattern> IssuerSubjectPattern::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<IssuerSubjectPattern>();
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
absl::optional<IssuerSubjectPattern> IssuerSubjectPattern::FromValue(const base::Value::Dict& value) {
  IssuerSubjectPattern out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<IssuerSubjectPattern> IssuerSubjectPattern::FromValue(const base::Value& value) {
  IssuerSubjectPattern out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict IssuerSubjectPattern::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->common_name) {
    to_value_result.Set("CommonName", *this->common_name);

  }
  if (this->locality) {
    to_value_result.Set("Locality", *this->locality);

  }
  if (this->organization) {
    to_value_result.Set("Organization", *this->organization);

  }
  if (this->organizational_unit) {
    to_value_result.Set("OrganizationalUnit", *this->organizational_unit);

  }

  return to_value_result;
}


ManagedIssuerSubjectPattern::ManagedIssuerSubjectPattern()
 {}

ManagedIssuerSubjectPattern::~ManagedIssuerSubjectPattern() = default;
ManagedIssuerSubjectPattern::ManagedIssuerSubjectPattern(ManagedIssuerSubjectPattern&& rhs) = default;
ManagedIssuerSubjectPattern& ManagedIssuerSubjectPattern::operator=(ManagedIssuerSubjectPattern&& rhs) = default;
ManagedIssuerSubjectPattern ManagedIssuerSubjectPattern::Clone() const {
  ManagedIssuerSubjectPattern out;
  if (common_name) {
    out.common_name = common_name->Clone();
  }
  if (locality) {
    out.locality = locality->Clone();
  }
  if (organization) {
    out.organization = organization->Clone();
  }
  if (organizational_unit) {
    out.organizational_unit = organizational_unit->Clone();
  }
  return out;
}

// static
bool ManagedIssuerSubjectPattern::Populate(
    const base::Value::Dict& dict, ManagedIssuerSubjectPattern& out) {
  const base::Value* common_name_value = dict.Find("CommonName");
  if (common_name_value) {
    {
      if (!(*common_name_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*common_name_value).GetDict(), temp))
          return false;
        out.common_name = std::move(temp);
      }
    }
  }

  const base::Value* locality_value = dict.Find("Locality");
  if (locality_value) {
    {
      if (!(*locality_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*locality_value).GetDict(), temp))
          return false;
        out.locality = std::move(temp);
      }
    }
  }

  const base::Value* organization_value = dict.Find("Organization");
  if (organization_value) {
    {
      if (!(*organization_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*organization_value).GetDict(), temp))
          return false;
        out.organization = std::move(temp);
      }
    }
  }

  const base::Value* organizational_unit_value = dict.Find("OrganizationalUnit");
  if (organizational_unit_value) {
    {
      if (!(*organizational_unit_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*organizational_unit_value).GetDict(), temp))
          return false;
        out.organizational_unit = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool ManagedIssuerSubjectPattern::Populate(
    const base::Value& value, ManagedIssuerSubjectPattern& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ManagedIssuerSubjectPattern> ManagedIssuerSubjectPattern::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ManagedIssuerSubjectPattern>();
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
absl::optional<ManagedIssuerSubjectPattern> ManagedIssuerSubjectPattern::FromValue(const base::Value::Dict& value) {
  ManagedIssuerSubjectPattern out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ManagedIssuerSubjectPattern> ManagedIssuerSubjectPattern::FromValue(const base::Value& value) {
  ManagedIssuerSubjectPattern out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ManagedIssuerSubjectPattern::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->common_name) {
    to_value_result.Set("CommonName", (this->common_name)->ToValue());

  }
  if (this->locality) {
    to_value_result.Set("Locality", (this->locality)->ToValue());

  }
  if (this->organization) {
    to_value_result.Set("Organization", (this->organization)->ToValue());

  }
  if (this->organizational_unit) {
    to_value_result.Set("OrganizationalUnit", (this->organizational_unit)->ToValue());

  }

  return to_value_result;
}


CertificatePattern::CertificatePattern()
 {}

CertificatePattern::~CertificatePattern() = default;
CertificatePattern::CertificatePattern(CertificatePattern&& rhs) = default;
CertificatePattern& CertificatePattern::operator=(CertificatePattern&& rhs) = default;
CertificatePattern CertificatePattern::Clone() const {
  CertificatePattern out;
  out.enrollment_uri = enrollment_uri;
  if (issuer) {
    out.issuer = issuer->Clone();
  }
  out.issuer_cape_ms = issuer_cape_ms;
  out.issuer_ca_ref = issuer_ca_ref;
  if (subject) {
    out.subject = subject->Clone();
  }
  return out;
}

// static
bool CertificatePattern::Populate(
    const base::Value::Dict& dict, CertificatePattern& out) {
  const base::Value* enrollment_uri_value = dict.Find("EnrollmentURI");
  if (enrollment_uri_value) {
    {
      if (!(*enrollment_uri_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*enrollment_uri_value).GetList(), out.enrollment_uri)) {
          return false;
        }
      }
    }
  }

  const base::Value* issuer_value = dict.Find("Issuer");
  if (issuer_value) {
    {
      if (!(*issuer_value).is_dict()) {
        return false;
      }
      else {
        IssuerSubjectPattern temp;
        if (!IssuerSubjectPattern::Populate((*issuer_value).GetDict(), temp))
          return false;
        out.issuer = std::move(temp);
      }
    }
  }

  const base::Value* issuer_cape_ms_value = dict.Find("IssuerCAPEMs");
  if (issuer_cape_ms_value) {
    {
      if (!(*issuer_cape_ms_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*issuer_cape_ms_value).GetList(), out.issuer_cape_ms)) {
          return false;
        }
      }
    }
  }

  const base::Value* issuer_ca_ref_value = dict.Find("IssuerCARef");
  if (issuer_ca_ref_value) {
    {
      if (!(*issuer_ca_ref_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*issuer_ca_ref_value).GetList(), out.issuer_ca_ref)) {
          return false;
        }
      }
    }
  }

  const base::Value* subject_value = dict.Find("Subject");
  if (subject_value) {
    {
      if (!(*subject_value).is_dict()) {
        return false;
      }
      else {
        IssuerSubjectPattern temp;
        if (!IssuerSubjectPattern::Populate((*subject_value).GetDict(), temp))
          return false;
        out.subject = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool CertificatePattern::Populate(
    const base::Value& value, CertificatePattern& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<CertificatePattern> CertificatePattern::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<CertificatePattern>();
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
absl::optional<CertificatePattern> CertificatePattern::FromValue(const base::Value::Dict& value) {
  CertificatePattern out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CertificatePattern> CertificatePattern::FromValue(const base::Value& value) {
  CertificatePattern out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict CertificatePattern::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->enrollment_uri) {
    to_value_result.Set("EnrollmentURI", json_schema_compiler::util::CreateValueFromArray(*this->enrollment_uri));

  }
  if (this->issuer) {
    to_value_result.Set("Issuer", (this->issuer)->ToValue());

  }
  if (this->issuer_cape_ms) {
    to_value_result.Set("IssuerCAPEMs", json_schema_compiler::util::CreateValueFromArray(*this->issuer_cape_ms));

  }
  if (this->issuer_ca_ref) {
    to_value_result.Set("IssuerCARef", json_schema_compiler::util::CreateValueFromArray(*this->issuer_ca_ref));

  }
  if (this->subject) {
    to_value_result.Set("Subject", (this->subject)->ToValue());

  }

  return to_value_result;
}


ManagedCertificatePattern::ManagedCertificatePattern()
 {}

ManagedCertificatePattern::~ManagedCertificatePattern() = default;
ManagedCertificatePattern::ManagedCertificatePattern(ManagedCertificatePattern&& rhs) = default;
ManagedCertificatePattern& ManagedCertificatePattern::operator=(ManagedCertificatePattern&& rhs) = default;
ManagedCertificatePattern ManagedCertificatePattern::Clone() const {
  ManagedCertificatePattern out;
  if (enrollment_uri) {
    out.enrollment_uri = enrollment_uri->Clone();
  }
  if (issuer) {
    out.issuer = issuer->Clone();
  }
  if (issuer_ca_ref) {
    out.issuer_ca_ref = issuer_ca_ref->Clone();
  }
  if (subject) {
    out.subject = subject->Clone();
  }
  return out;
}

// static
bool ManagedCertificatePattern::Populate(
    const base::Value::Dict& dict, ManagedCertificatePattern& out) {
  const base::Value* enrollment_uri_value = dict.Find("EnrollmentURI");
  if (enrollment_uri_value) {
    {
      if (!(*enrollment_uri_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMStringList temp;
        if (!ManagedDOMStringList::Populate((*enrollment_uri_value).GetDict(), temp))
          return false;
        out.enrollment_uri = std::move(temp);
      }
    }
  }

  const base::Value* issuer_value = dict.Find("Issuer");
  if (issuer_value) {
    {
      if (!(*issuer_value).is_dict()) {
        return false;
      }
      else {
        ManagedIssuerSubjectPattern temp;
        if (!ManagedIssuerSubjectPattern::Populate((*issuer_value).GetDict(), temp))
          return false;
        out.issuer = std::move(temp);
      }
    }
  }

  const base::Value* issuer_ca_ref_value = dict.Find("IssuerCARef");
  if (issuer_ca_ref_value) {
    {
      if (!(*issuer_ca_ref_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMStringList temp;
        if (!ManagedDOMStringList::Populate((*issuer_ca_ref_value).GetDict(), temp))
          return false;
        out.issuer_ca_ref = std::move(temp);
      }
    }
  }

  const base::Value* subject_value = dict.Find("Subject");
  if (subject_value) {
    {
      if (!(*subject_value).is_dict()) {
        return false;
      }
      else {
        ManagedIssuerSubjectPattern temp;
        if (!ManagedIssuerSubjectPattern::Populate((*subject_value).GetDict(), temp))
          return false;
        out.subject = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool ManagedCertificatePattern::Populate(
    const base::Value& value, ManagedCertificatePattern& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ManagedCertificatePattern> ManagedCertificatePattern::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ManagedCertificatePattern>();
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
absl::optional<ManagedCertificatePattern> ManagedCertificatePattern::FromValue(const base::Value::Dict& value) {
  ManagedCertificatePattern out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ManagedCertificatePattern> ManagedCertificatePattern::FromValue(const base::Value& value) {
  ManagedCertificatePattern out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ManagedCertificatePattern::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->enrollment_uri) {
    to_value_result.Set("EnrollmentURI", (this->enrollment_uri)->ToValue());

  }
  if (this->issuer) {
    to_value_result.Set("Issuer", (this->issuer)->ToValue());

  }
  if (this->issuer_ca_ref) {
    to_value_result.Set("IssuerCARef", (this->issuer_ca_ref)->ToValue());

  }
  if (this->subject) {
    to_value_result.Set("Subject", (this->subject)->ToValue());

  }

  return to_value_result;
}


EAPProperties::EAPProperties()
 {}

EAPProperties::~EAPProperties() = default;
EAPProperties::EAPProperties(EAPProperties&& rhs) = default;
EAPProperties& EAPProperties::operator=(EAPProperties&& rhs) = default;
EAPProperties EAPProperties::Clone() const {
  EAPProperties out;
  out.anonymous_identity = anonymous_identity;
  if (client_cert_pattern) {
    out.client_cert_pattern = client_cert_pattern->Clone();
  }
  out.client_cert_pkcs11_id = client_cert_pkcs11_id;
  out.client_cert_provisioning_profile_id = client_cert_provisioning_profile_id;
  out.client_cert_ref = client_cert_ref;
  out.client_cert_type = client_cert_type;
  out.identity = identity;
  out.inner = inner;
  out.outer = outer;
  out.password = password;
  out.save_credentials = save_credentials;
  out.server_cape_ms = server_cape_ms;
  out.server_ca_refs = server_ca_refs;
  out.subject_match = subject_match;
  out.tls_version_max = tls_version_max;
  out.use_proactive_key_caching = use_proactive_key_caching;
  out.use_system_c_as = use_system_c_as;
  return out;
}

// static
bool EAPProperties::Populate(
    const base::Value::Dict& dict, EAPProperties& out) {
  const base::Value* anonymous_identity_value = dict.Find("AnonymousIdentity");
  if (anonymous_identity_value) {
    {
      auto* temp = (*anonymous_identity_value).GetIfString();
      if (!temp) {
        out.anonymous_identity = absl::nullopt;
        return false;
      }
      out.anonymous_identity = *temp;
    }
  }

  const base::Value* client_cert_pattern_value = dict.Find("ClientCertPattern");
  if (client_cert_pattern_value) {
    {
      if (!(*client_cert_pattern_value).is_dict()) {
        return false;
      }
      else {
        CertificatePattern temp;
        if (!CertificatePattern::Populate((*client_cert_pattern_value).GetDict(), temp))
          return false;
        out.client_cert_pattern = std::move(temp);
      }
    }
  }

  const base::Value* client_cert_pkcs11_id_value = dict.Find("ClientCertPKCS11Id");
  if (client_cert_pkcs11_id_value) {
    {
      auto* temp = (*client_cert_pkcs11_id_value).GetIfString();
      if (!temp) {
        out.client_cert_pkcs11_id = absl::nullopt;
        return false;
      }
      out.client_cert_pkcs11_id = *temp;
    }
  }

  const base::Value* client_cert_provisioning_profile_id_value = dict.Find("ClientCertProvisioningProfileId");
  if (client_cert_provisioning_profile_id_value) {
    {
      auto* temp = (*client_cert_provisioning_profile_id_value).GetIfString();
      if (!temp) {
        out.client_cert_provisioning_profile_id = absl::nullopt;
        return false;
      }
      out.client_cert_provisioning_profile_id = *temp;
    }
  }

  const base::Value* client_cert_ref_value = dict.Find("ClientCertRef");
  if (client_cert_ref_value) {
    {
      auto* temp = (*client_cert_ref_value).GetIfString();
      if (!temp) {
        out.client_cert_ref = absl::nullopt;
        return false;
      }
      out.client_cert_ref = *temp;
    }
  }

  const base::Value* client_cert_type_value = dict.Find("ClientCertType");
  if (client_cert_type_value) {
    {
      auto* temp = (*client_cert_type_value).GetIfString();
      if (!temp) {
        out.client_cert_type = absl::nullopt;
        return false;
      }
      out.client_cert_type = *temp;
    }
  }

  const base::Value* identity_value = dict.Find("Identity");
  if (identity_value) {
    {
      auto* temp = (*identity_value).GetIfString();
      if (!temp) {
        out.identity = absl::nullopt;
        return false;
      }
      out.identity = *temp;
    }
  }

  const base::Value* inner_value = dict.Find("Inner");
  if (inner_value) {
    {
      auto* temp = (*inner_value).GetIfString();
      if (!temp) {
        out.inner = absl::nullopt;
        return false;
      }
      out.inner = *temp;
    }
  }

  const base::Value* outer_value = dict.Find("Outer");
  if (outer_value) {
    {
      auto* temp = (*outer_value).GetIfString();
      if (!temp) {
        out.outer = absl::nullopt;
        return false;
      }
      out.outer = *temp;
    }
  }

  const base::Value* password_value = dict.Find("Password");
  if (password_value) {
    {
      auto* temp = (*password_value).GetIfString();
      if (!temp) {
        out.password = absl::nullopt;
        return false;
      }
      out.password = *temp;
    }
  }

  const base::Value* save_credentials_value = dict.Find("SaveCredentials");
  if (save_credentials_value) {
    {
      auto temp = (*save_credentials_value).GetIfBool();
      if (!temp.has_value()) {
        out.save_credentials = absl::nullopt;
        return false;
      }
      out.save_credentials = *temp;
    }
  }

  const base::Value* server_cape_ms_value = dict.Find("ServerCAPEMs");
  if (server_cape_ms_value) {
    {
      if (!(*server_cape_ms_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*server_cape_ms_value).GetList(), out.server_cape_ms)) {
          return false;
        }
      }
    }
  }

  const base::Value* server_ca_refs_value = dict.Find("ServerCARefs");
  if (server_ca_refs_value) {
    {
      if (!(*server_ca_refs_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*server_ca_refs_value).GetList(), out.server_ca_refs)) {
          return false;
        }
      }
    }
  }

  const base::Value* subject_match_value = dict.Find("SubjectMatch");
  if (subject_match_value) {
    {
      auto* temp = (*subject_match_value).GetIfString();
      if (!temp) {
        out.subject_match = absl::nullopt;
        return false;
      }
      out.subject_match = *temp;
    }
  }

  const base::Value* tls_version_max_value = dict.Find("TLSVersionMax");
  if (tls_version_max_value) {
    {
      auto* temp = (*tls_version_max_value).GetIfString();
      if (!temp) {
        out.tls_version_max = absl::nullopt;
        return false;
      }
      out.tls_version_max = *temp;
    }
  }

  const base::Value* use_proactive_key_caching_value = dict.Find("UseProactiveKeyCaching");
  if (use_proactive_key_caching_value) {
    {
      auto temp = (*use_proactive_key_caching_value).GetIfBool();
      if (!temp.has_value()) {
        out.use_proactive_key_caching = absl::nullopt;
        return false;
      }
      out.use_proactive_key_caching = *temp;
    }
  }

  const base::Value* use_system_c_as_value = dict.Find("UseSystemCAs");
  if (use_system_c_as_value) {
    {
      auto temp = (*use_system_c_as_value).GetIfBool();
      if (!temp.has_value()) {
        out.use_system_c_as = absl::nullopt;
        return false;
      }
      out.use_system_c_as = *temp;
    }
  }

  return true;
}

// static
bool EAPProperties::Populate(
    const base::Value& value, EAPProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<EAPProperties> EAPProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<EAPProperties>();
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
absl::optional<EAPProperties> EAPProperties::FromValue(const base::Value::Dict& value) {
  EAPProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<EAPProperties> EAPProperties::FromValue(const base::Value& value) {
  EAPProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict EAPProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->anonymous_identity) {
    to_value_result.Set("AnonymousIdentity", *this->anonymous_identity);

  }
  if (this->client_cert_pattern) {
    to_value_result.Set("ClientCertPattern", (this->client_cert_pattern)->ToValue());

  }
  if (this->client_cert_pkcs11_id) {
    to_value_result.Set("ClientCertPKCS11Id", *this->client_cert_pkcs11_id);

  }
  if (this->client_cert_provisioning_profile_id) {
    to_value_result.Set("ClientCertProvisioningProfileId", *this->client_cert_provisioning_profile_id);

  }
  if (this->client_cert_ref) {
    to_value_result.Set("ClientCertRef", *this->client_cert_ref);

  }
  if (this->client_cert_type) {
    to_value_result.Set("ClientCertType", *this->client_cert_type);

  }
  if (this->identity) {
    to_value_result.Set("Identity", *this->identity);

  }
  if (this->inner) {
    to_value_result.Set("Inner", *this->inner);

  }
  if (this->outer) {
    to_value_result.Set("Outer", *this->outer);

  }
  if (this->password) {
    to_value_result.Set("Password", *this->password);

  }
  if (this->save_credentials) {
    to_value_result.Set("SaveCredentials", *this->save_credentials);

  }
  if (this->server_cape_ms) {
    to_value_result.Set("ServerCAPEMs", json_schema_compiler::util::CreateValueFromArray(*this->server_cape_ms));

  }
  if (this->server_ca_refs) {
    to_value_result.Set("ServerCARefs", json_schema_compiler::util::CreateValueFromArray(*this->server_ca_refs));

  }
  if (this->subject_match) {
    to_value_result.Set("SubjectMatch", *this->subject_match);

  }
  if (this->tls_version_max) {
    to_value_result.Set("TLSVersionMax", *this->tls_version_max);

  }
  if (this->use_proactive_key_caching) {
    to_value_result.Set("UseProactiveKeyCaching", *this->use_proactive_key_caching);

  }
  if (this->use_system_c_as) {
    to_value_result.Set("UseSystemCAs", *this->use_system_c_as);

  }

  return to_value_result;
}


ManagedEAPProperties::ManagedEAPProperties()
 {}

ManagedEAPProperties::~ManagedEAPProperties() = default;
ManagedEAPProperties::ManagedEAPProperties(ManagedEAPProperties&& rhs) = default;
ManagedEAPProperties& ManagedEAPProperties::operator=(ManagedEAPProperties&& rhs) = default;
ManagedEAPProperties ManagedEAPProperties::Clone() const {
  ManagedEAPProperties out;
  if (anonymous_identity) {
    out.anonymous_identity = anonymous_identity->Clone();
  }
  if (client_cert_pattern) {
    out.client_cert_pattern = client_cert_pattern->Clone();
  }
  if (client_cert_pkcs11_id) {
    out.client_cert_pkcs11_id = client_cert_pkcs11_id->Clone();
  }
  if (client_cert_provisioning_profile_id) {
    out.client_cert_provisioning_profile_id = client_cert_provisioning_profile_id->Clone();
  }
  if (client_cert_ref) {
    out.client_cert_ref = client_cert_ref->Clone();
  }
  if (client_cert_type) {
    out.client_cert_type = client_cert_type->Clone();
  }
  if (identity) {
    out.identity = identity->Clone();
  }
  if (inner) {
    out.inner = inner->Clone();
  }
  if (outer) {
    out.outer = outer->Clone();
  }
  if (password) {
    out.password = password->Clone();
  }
  if (save_credentials) {
    out.save_credentials = save_credentials->Clone();
  }
  if (server_cape_ms) {
    out.server_cape_ms = server_cape_ms->Clone();
  }
  if (server_ca_refs) {
    out.server_ca_refs = server_ca_refs->Clone();
  }
  if (subject_match) {
    out.subject_match = subject_match->Clone();
  }
  if (tls_version_max) {
    out.tls_version_max = tls_version_max->Clone();
  }
  if (use_proactive_key_caching) {
    out.use_proactive_key_caching = use_proactive_key_caching->Clone();
  }
  if (use_system_c_as) {
    out.use_system_c_as = use_system_c_as->Clone();
  }
  return out;
}

// static
bool ManagedEAPProperties::Populate(
    const base::Value::Dict& dict, ManagedEAPProperties& out) {
  const base::Value* anonymous_identity_value = dict.Find("AnonymousIdentity");
  if (anonymous_identity_value) {
    {
      if (!(*anonymous_identity_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*anonymous_identity_value).GetDict(), temp))
          return false;
        out.anonymous_identity = std::move(temp);
      }
    }
  }

  const base::Value* client_cert_pattern_value = dict.Find("ClientCertPattern");
  if (client_cert_pattern_value) {
    {
      if (!(*client_cert_pattern_value).is_dict()) {
        return false;
      }
      else {
        ManagedCertificatePattern temp;
        if (!ManagedCertificatePattern::Populate((*client_cert_pattern_value).GetDict(), temp))
          return false;
        out.client_cert_pattern = std::move(temp);
      }
    }
  }

  const base::Value* client_cert_pkcs11_id_value = dict.Find("ClientCertPKCS11Id");
  if (client_cert_pkcs11_id_value) {
    {
      if (!(*client_cert_pkcs11_id_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*client_cert_pkcs11_id_value).GetDict(), temp))
          return false;
        out.client_cert_pkcs11_id = std::move(temp);
      }
    }
  }

  const base::Value* client_cert_provisioning_profile_id_value = dict.Find("ClientCertProvisioningProfileId");
  if (client_cert_provisioning_profile_id_value) {
    {
      if (!(*client_cert_provisioning_profile_id_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*client_cert_provisioning_profile_id_value).GetDict(), temp))
          return false;
        out.client_cert_provisioning_profile_id = std::move(temp);
      }
    }
  }

  const base::Value* client_cert_ref_value = dict.Find("ClientCertRef");
  if (client_cert_ref_value) {
    {
      if (!(*client_cert_ref_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*client_cert_ref_value).GetDict(), temp))
          return false;
        out.client_cert_ref = std::move(temp);
      }
    }
  }

  const base::Value* client_cert_type_value = dict.Find("ClientCertType");
  if (client_cert_type_value) {
    {
      if (!(*client_cert_type_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*client_cert_type_value).GetDict(), temp))
          return false;
        out.client_cert_type = std::move(temp);
      }
    }
  }

  const base::Value* identity_value = dict.Find("Identity");
  if (identity_value) {
    {
      if (!(*identity_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*identity_value).GetDict(), temp))
          return false;
        out.identity = std::move(temp);
      }
    }
  }

  const base::Value* inner_value = dict.Find("Inner");
  if (inner_value) {
    {
      if (!(*inner_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*inner_value).GetDict(), temp))
          return false;
        out.inner = std::move(temp);
      }
    }
  }

  const base::Value* outer_value = dict.Find("Outer");
  if (outer_value) {
    {
      if (!(*outer_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*outer_value).GetDict(), temp))
          return false;
        out.outer = std::move(temp);
      }
    }
  }

  const base::Value* password_value = dict.Find("Password");
  if (password_value) {
    {
      if (!(*password_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*password_value).GetDict(), temp))
          return false;
        out.password = std::move(temp);
      }
    }
  }

  const base::Value* save_credentials_value = dict.Find("SaveCredentials");
  if (save_credentials_value) {
    {
      if (!(*save_credentials_value).is_dict()) {
        return false;
      }
      else {
        ManagedBoolean temp;
        if (!ManagedBoolean::Populate((*save_credentials_value).GetDict(), temp))
          return false;
        out.save_credentials = std::move(temp);
      }
    }
  }

  const base::Value* server_cape_ms_value = dict.Find("ServerCAPEMs");
  if (server_cape_ms_value) {
    {
      if (!(*server_cape_ms_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMStringList temp;
        if (!ManagedDOMStringList::Populate((*server_cape_ms_value).GetDict(), temp))
          return false;
        out.server_cape_ms = std::move(temp);
      }
    }
  }

  const base::Value* server_ca_refs_value = dict.Find("ServerCARefs");
  if (server_ca_refs_value) {
    {
      if (!(*server_ca_refs_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMStringList temp;
        if (!ManagedDOMStringList::Populate((*server_ca_refs_value).GetDict(), temp))
          return false;
        out.server_ca_refs = std::move(temp);
      }
    }
  }

  const base::Value* subject_match_value = dict.Find("SubjectMatch");
  if (subject_match_value) {
    {
      if (!(*subject_match_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*subject_match_value).GetDict(), temp))
          return false;
        out.subject_match = std::move(temp);
      }
    }
  }

  const base::Value* tls_version_max_value = dict.Find("TLSVersionMax");
  if (tls_version_max_value) {
    {
      if (!(*tls_version_max_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*tls_version_max_value).GetDict(), temp))
          return false;
        out.tls_version_max = std::move(temp);
      }
    }
  }

  const base::Value* use_proactive_key_caching_value = dict.Find("UseProactiveKeyCaching");
  if (use_proactive_key_caching_value) {
    {
      if (!(*use_proactive_key_caching_value).is_dict()) {
        return false;
      }
      else {
        ManagedBoolean temp;
        if (!ManagedBoolean::Populate((*use_proactive_key_caching_value).GetDict(), temp))
          return false;
        out.use_proactive_key_caching = std::move(temp);
      }
    }
  }

  const base::Value* use_system_c_as_value = dict.Find("UseSystemCAs");
  if (use_system_c_as_value) {
    {
      if (!(*use_system_c_as_value).is_dict()) {
        return false;
      }
      else {
        ManagedBoolean temp;
        if (!ManagedBoolean::Populate((*use_system_c_as_value).GetDict(), temp))
          return false;
        out.use_system_c_as = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool ManagedEAPProperties::Populate(
    const base::Value& value, ManagedEAPProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ManagedEAPProperties> ManagedEAPProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ManagedEAPProperties>();
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
absl::optional<ManagedEAPProperties> ManagedEAPProperties::FromValue(const base::Value::Dict& value) {
  ManagedEAPProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ManagedEAPProperties> ManagedEAPProperties::FromValue(const base::Value& value) {
  ManagedEAPProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ManagedEAPProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->anonymous_identity) {
    to_value_result.Set("AnonymousIdentity", (this->anonymous_identity)->ToValue());

  }
  if (this->client_cert_pattern) {
    to_value_result.Set("ClientCertPattern", (this->client_cert_pattern)->ToValue());

  }
  if (this->client_cert_pkcs11_id) {
    to_value_result.Set("ClientCertPKCS11Id", (this->client_cert_pkcs11_id)->ToValue());

  }
  if (this->client_cert_provisioning_profile_id) {
    to_value_result.Set("ClientCertProvisioningProfileId", (this->client_cert_provisioning_profile_id)->ToValue());

  }
  if (this->client_cert_ref) {
    to_value_result.Set("ClientCertRef", (this->client_cert_ref)->ToValue());

  }
  if (this->client_cert_type) {
    to_value_result.Set("ClientCertType", (this->client_cert_type)->ToValue());

  }
  if (this->identity) {
    to_value_result.Set("Identity", (this->identity)->ToValue());

  }
  if (this->inner) {
    to_value_result.Set("Inner", (this->inner)->ToValue());

  }
  if (this->outer) {
    to_value_result.Set("Outer", (this->outer)->ToValue());

  }
  if (this->password) {
    to_value_result.Set("Password", (this->password)->ToValue());

  }
  if (this->save_credentials) {
    to_value_result.Set("SaveCredentials", (this->save_credentials)->ToValue());

  }
  if (this->server_cape_ms) {
    to_value_result.Set("ServerCAPEMs", (this->server_cape_ms)->ToValue());

  }
  if (this->server_ca_refs) {
    to_value_result.Set("ServerCARefs", (this->server_ca_refs)->ToValue());

  }
  if (this->subject_match) {
    to_value_result.Set("SubjectMatch", (this->subject_match)->ToValue());

  }
  if (this->tls_version_max) {
    to_value_result.Set("TLSVersionMax", (this->tls_version_max)->ToValue());

  }
  if (this->use_proactive_key_caching) {
    to_value_result.Set("UseProactiveKeyCaching", (this->use_proactive_key_caching)->ToValue());

  }
  if (this->use_system_c_as) {
    to_value_result.Set("UseSystemCAs", (this->use_system_c_as)->ToValue());

  }

  return to_value_result;
}


FoundNetworkProperties::FoundNetworkProperties()
 {}

FoundNetworkProperties::~FoundNetworkProperties() = default;
FoundNetworkProperties::FoundNetworkProperties(FoundNetworkProperties&& rhs) = default;
FoundNetworkProperties& FoundNetworkProperties::operator=(FoundNetworkProperties&& rhs) = default;
FoundNetworkProperties FoundNetworkProperties::Clone() const {
  FoundNetworkProperties out;
  out.status = status;
  out.network_id = network_id;
  out.technology = technology;
  out.short_name = short_name;
  out.long_name = long_name;
  return out;
}

// static
bool FoundNetworkProperties::Populate(
    const base::Value::Dict& dict, FoundNetworkProperties& out) {
  const base::Value* status_value = dict.Find("Status");
  if (!status_value) {
    return false;
  }
  {
    auto* temp = (*status_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.status = *temp;
  }

  const base::Value* network_id_value = dict.Find("NetworkId");
  if (!network_id_value) {
    return false;
  }
  {
    auto* temp = (*network_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.network_id = *temp;
  }

  const base::Value* technology_value = dict.Find("Technology");
  if (!technology_value) {
    return false;
  }
  {
    auto* temp = (*technology_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.technology = *temp;
  }

  const base::Value* short_name_value = dict.Find("ShortName");
  if (short_name_value) {
    {
      auto* temp = (*short_name_value).GetIfString();
      if (!temp) {
        out.short_name = absl::nullopt;
        return false;
      }
      out.short_name = *temp;
    }
  }

  const base::Value* long_name_value = dict.Find("LongName");
  if (long_name_value) {
    {
      auto* temp = (*long_name_value).GetIfString();
      if (!temp) {
        out.long_name = absl::nullopt;
        return false;
      }
      out.long_name = *temp;
    }
  }

  return true;
}

// static
bool FoundNetworkProperties::Populate(
    const base::Value& value, FoundNetworkProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<FoundNetworkProperties> FoundNetworkProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<FoundNetworkProperties>();
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
absl::optional<FoundNetworkProperties> FoundNetworkProperties::FromValue(const base::Value::Dict& value) {
  FoundNetworkProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<FoundNetworkProperties> FoundNetworkProperties::FromValue(const base::Value& value) {
  FoundNetworkProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict FoundNetworkProperties::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("Status", this->status);

  to_value_result.Set("NetworkId", this->network_id);

  to_value_result.Set("Technology", this->technology);

  if (this->short_name) {
    to_value_result.Set("ShortName", *this->short_name);

  }
  if (this->long_name) {
    to_value_result.Set("LongName", *this->long_name);

  }

  return to_value_result;
}


IPConfigProperties::IPConfigProperties()
 {}

IPConfigProperties::~IPConfigProperties() = default;
IPConfigProperties::IPConfigProperties(IPConfigProperties&& rhs) = default;
IPConfigProperties& IPConfigProperties::operator=(IPConfigProperties&& rhs) = default;
IPConfigProperties IPConfigProperties::Clone() const {
  IPConfigProperties out;
  out.gateway = gateway;
  out.ip_address = ip_address;
  out.excluded_routes = excluded_routes;
  out.included_routes = included_routes;
  out.name_servers = name_servers;
  out.search_domains = search_domains;
  out.routing_prefix = routing_prefix;
  out.type = type;
  out.web_proxy_auto_discovery_url = web_proxy_auto_discovery_url;
  return out;
}

// static
bool IPConfigProperties::Populate(
    const base::Value::Dict& dict, IPConfigProperties& out) {
  const base::Value* gateway_value = dict.Find("Gateway");
  if (gateway_value) {
    {
      auto* temp = (*gateway_value).GetIfString();
      if (!temp) {
        out.gateway = absl::nullopt;
        return false;
      }
      out.gateway = *temp;
    }
  }

  const base::Value* ip_address_value = dict.Find("IPAddress");
  if (ip_address_value) {
    {
      auto* temp = (*ip_address_value).GetIfString();
      if (!temp) {
        out.ip_address = absl::nullopt;
        return false;
      }
      out.ip_address = *temp;
    }
  }

  const base::Value* excluded_routes_value = dict.Find("ExcludedRoutes");
  if (excluded_routes_value) {
    {
      if (!(*excluded_routes_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*excluded_routes_value).GetList(), out.excluded_routes)) {
          return false;
        }
      }
    }
  }

  const base::Value* included_routes_value = dict.Find("IncludedRoutes");
  if (included_routes_value) {
    {
      if (!(*included_routes_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*included_routes_value).GetList(), out.included_routes)) {
          return false;
        }
      }
    }
  }

  const base::Value* name_servers_value = dict.Find("NameServers");
  if (name_servers_value) {
    {
      if (!(*name_servers_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*name_servers_value).GetList(), out.name_servers)) {
          return false;
        }
      }
    }
  }

  const base::Value* search_domains_value = dict.Find("SearchDomains");
  if (search_domains_value) {
    {
      if (!(*search_domains_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*search_domains_value).GetList(), out.search_domains)) {
          return false;
        }
      }
    }
  }

  const base::Value* routing_prefix_value = dict.Find("RoutingPrefix");
  if (routing_prefix_value) {
    {
      auto temp = (*routing_prefix_value).GetIfInt();
      if (!temp.has_value()) {
        out.routing_prefix = absl::nullopt;
        return false;
      }
      out.routing_prefix = *temp;
    }
  }

  const base::Value* type_value = dict.Find("Type");
  if (type_value) {
    {
      auto* temp = (*type_value).GetIfString();
      if (!temp) {
        out.type = absl::nullopt;
        return false;
      }
      out.type = *temp;
    }
  }

  const base::Value* web_proxy_auto_discovery_url_value = dict.Find("WebProxyAutoDiscoveryUrl");
  if (web_proxy_auto_discovery_url_value) {
    {
      auto* temp = (*web_proxy_auto_discovery_url_value).GetIfString();
      if (!temp) {
        out.web_proxy_auto_discovery_url = absl::nullopt;
        return false;
      }
      out.web_proxy_auto_discovery_url = *temp;
    }
  }

  return true;
}

// static
bool IPConfigProperties::Populate(
    const base::Value& value, IPConfigProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<IPConfigProperties> IPConfigProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<IPConfigProperties>();
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
absl::optional<IPConfigProperties> IPConfigProperties::FromValue(const base::Value::Dict& value) {
  IPConfigProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<IPConfigProperties> IPConfigProperties::FromValue(const base::Value& value) {
  IPConfigProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict IPConfigProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->gateway) {
    to_value_result.Set("Gateway", *this->gateway);

  }
  if (this->ip_address) {
    to_value_result.Set("IPAddress", *this->ip_address);

  }
  if (this->excluded_routes) {
    to_value_result.Set("ExcludedRoutes", json_schema_compiler::util::CreateValueFromArray(*this->excluded_routes));

  }
  if (this->included_routes) {
    to_value_result.Set("IncludedRoutes", json_schema_compiler::util::CreateValueFromArray(*this->included_routes));

  }
  if (this->name_servers) {
    to_value_result.Set("NameServers", json_schema_compiler::util::CreateValueFromArray(*this->name_servers));

  }
  if (this->search_domains) {
    to_value_result.Set("SearchDomains", json_schema_compiler::util::CreateValueFromArray(*this->search_domains));

  }
  if (this->routing_prefix) {
    to_value_result.Set("RoutingPrefix", *this->routing_prefix);

  }
  if (this->type) {
    to_value_result.Set("Type", *this->type);

  }
  if (this->web_proxy_auto_discovery_url) {
    to_value_result.Set("WebProxyAutoDiscoveryUrl", *this->web_proxy_auto_discovery_url);

  }

  return to_value_result;
}


ManagedIPConfigProperties::ManagedIPConfigProperties()
 {}

ManagedIPConfigProperties::~ManagedIPConfigProperties() = default;
ManagedIPConfigProperties::ManagedIPConfigProperties(ManagedIPConfigProperties&& rhs) = default;
ManagedIPConfigProperties& ManagedIPConfigProperties::operator=(ManagedIPConfigProperties&& rhs) = default;
ManagedIPConfigProperties ManagedIPConfigProperties::Clone() const {
  ManagedIPConfigProperties out;
  if (gateway) {
    out.gateway = gateway->Clone();
  }
  if (ip_address) {
    out.ip_address = ip_address->Clone();
  }
  if (name_servers) {
    out.name_servers = name_servers->Clone();
  }
  if (routing_prefix) {
    out.routing_prefix = routing_prefix->Clone();
  }
  if (type) {
    out.type = type->Clone();
  }
  if (web_proxy_auto_discovery_url) {
    out.web_proxy_auto_discovery_url = web_proxy_auto_discovery_url->Clone();
  }
  return out;
}

// static
bool ManagedIPConfigProperties::Populate(
    const base::Value::Dict& dict, ManagedIPConfigProperties& out) {
  const base::Value* gateway_value = dict.Find("Gateway");
  if (gateway_value) {
    {
      if (!(*gateway_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*gateway_value).GetDict(), temp))
          return false;
        out.gateway = std::move(temp);
      }
    }
  }

  const base::Value* ip_address_value = dict.Find("IPAddress");
  if (ip_address_value) {
    {
      if (!(*ip_address_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*ip_address_value).GetDict(), temp))
          return false;
        out.ip_address = std::move(temp);
      }
    }
  }

  const base::Value* name_servers_value = dict.Find("NameServers");
  if (name_servers_value) {
    {
      if (!(*name_servers_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMStringList temp;
        if (!ManagedDOMStringList::Populate((*name_servers_value).GetDict(), temp))
          return false;
        out.name_servers = std::move(temp);
      }
    }
  }

  const base::Value* routing_prefix_value = dict.Find("RoutingPrefix");
  if (routing_prefix_value) {
    {
      if (!(*routing_prefix_value).is_dict()) {
        return false;
      }
      else {
        ManagedLong temp;
        if (!ManagedLong::Populate((*routing_prefix_value).GetDict(), temp))
          return false;
        out.routing_prefix = std::move(temp);
      }
    }
  }

  const base::Value* type_value = dict.Find("Type");
  if (type_value) {
    {
      if (!(*type_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*type_value).GetDict(), temp))
          return false;
        out.type = std::move(temp);
      }
    }
  }

  const base::Value* web_proxy_auto_discovery_url_value = dict.Find("WebProxyAutoDiscoveryUrl");
  if (web_proxy_auto_discovery_url_value) {
    {
      if (!(*web_proxy_auto_discovery_url_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*web_proxy_auto_discovery_url_value).GetDict(), temp))
          return false;
        out.web_proxy_auto_discovery_url = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool ManagedIPConfigProperties::Populate(
    const base::Value& value, ManagedIPConfigProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ManagedIPConfigProperties> ManagedIPConfigProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ManagedIPConfigProperties>();
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
absl::optional<ManagedIPConfigProperties> ManagedIPConfigProperties::FromValue(const base::Value::Dict& value) {
  ManagedIPConfigProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ManagedIPConfigProperties> ManagedIPConfigProperties::FromValue(const base::Value& value) {
  ManagedIPConfigProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ManagedIPConfigProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->gateway) {
    to_value_result.Set("Gateway", (this->gateway)->ToValue());

  }
  if (this->ip_address) {
    to_value_result.Set("IPAddress", (this->ip_address)->ToValue());

  }
  if (this->name_servers) {
    to_value_result.Set("NameServers", (this->name_servers)->ToValue());

  }
  if (this->routing_prefix) {
    to_value_result.Set("RoutingPrefix", (this->routing_prefix)->ToValue());

  }
  if (this->type) {
    to_value_result.Set("Type", (this->type)->ToValue());

  }
  if (this->web_proxy_auto_discovery_url) {
    to_value_result.Set("WebProxyAutoDiscoveryUrl", (this->web_proxy_auto_discovery_url)->ToValue());

  }

  return to_value_result;
}


XAUTHProperties::XAUTHProperties()
 {}

XAUTHProperties::~XAUTHProperties() = default;
XAUTHProperties::XAUTHProperties(XAUTHProperties&& rhs) = default;
XAUTHProperties& XAUTHProperties::operator=(XAUTHProperties&& rhs) = default;
XAUTHProperties XAUTHProperties::Clone() const {
  XAUTHProperties out;
  out.password = password;
  out.save_credentials = save_credentials;
  out.username = username;
  return out;
}

// static
bool XAUTHProperties::Populate(
    const base::Value::Dict& dict, XAUTHProperties& out) {
  const base::Value* password_value = dict.Find("Password");
  if (password_value) {
    {
      auto* temp = (*password_value).GetIfString();
      if (!temp) {
        out.password = absl::nullopt;
        return false;
      }
      out.password = *temp;
    }
  }

  const base::Value* save_credentials_value = dict.Find("SaveCredentials");
  if (save_credentials_value) {
    {
      auto temp = (*save_credentials_value).GetIfBool();
      if (!temp.has_value()) {
        out.save_credentials = absl::nullopt;
        return false;
      }
      out.save_credentials = *temp;
    }
  }

  const base::Value* username_value = dict.Find("Username");
  if (username_value) {
    {
      auto* temp = (*username_value).GetIfString();
      if (!temp) {
        out.username = absl::nullopt;
        return false;
      }
      out.username = *temp;
    }
  }

  return true;
}

// static
bool XAUTHProperties::Populate(
    const base::Value& value, XAUTHProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<XAUTHProperties> XAUTHProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<XAUTHProperties>();
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
absl::optional<XAUTHProperties> XAUTHProperties::FromValue(const base::Value::Dict& value) {
  XAUTHProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<XAUTHProperties> XAUTHProperties::FromValue(const base::Value& value) {
  XAUTHProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict XAUTHProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->password) {
    to_value_result.Set("Password", *this->password);

  }
  if (this->save_credentials) {
    to_value_result.Set("SaveCredentials", *this->save_credentials);

  }
  if (this->username) {
    to_value_result.Set("Username", *this->username);

  }

  return to_value_result;
}


ManagedXAUTHProperties::ManagedXAUTHProperties()
 {}

ManagedXAUTHProperties::~ManagedXAUTHProperties() = default;
ManagedXAUTHProperties::ManagedXAUTHProperties(ManagedXAUTHProperties&& rhs) = default;
ManagedXAUTHProperties& ManagedXAUTHProperties::operator=(ManagedXAUTHProperties&& rhs) = default;
ManagedXAUTHProperties ManagedXAUTHProperties::Clone() const {
  ManagedXAUTHProperties out;
  if (password) {
    out.password = password->Clone();
  }
  if (save_credentials) {
    out.save_credentials = save_credentials->Clone();
  }
  if (username) {
    out.username = username->Clone();
  }
  return out;
}

// static
bool ManagedXAUTHProperties::Populate(
    const base::Value::Dict& dict, ManagedXAUTHProperties& out) {
  const base::Value* password_value = dict.Find("Password");
  if (password_value) {
    {
      if (!(*password_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*password_value).GetDict(), temp))
          return false;
        out.password = std::move(temp);
      }
    }
  }

  const base::Value* save_credentials_value = dict.Find("SaveCredentials");
  if (save_credentials_value) {
    {
      if (!(*save_credentials_value).is_dict()) {
        return false;
      }
      else {
        ManagedBoolean temp;
        if (!ManagedBoolean::Populate((*save_credentials_value).GetDict(), temp))
          return false;
        out.save_credentials = std::move(temp);
      }
    }
  }

  const base::Value* username_value = dict.Find("Username");
  if (username_value) {
    {
      if (!(*username_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*username_value).GetDict(), temp))
          return false;
        out.username = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool ManagedXAUTHProperties::Populate(
    const base::Value& value, ManagedXAUTHProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ManagedXAUTHProperties> ManagedXAUTHProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ManagedXAUTHProperties>();
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
absl::optional<ManagedXAUTHProperties> ManagedXAUTHProperties::FromValue(const base::Value::Dict& value) {
  ManagedXAUTHProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ManagedXAUTHProperties> ManagedXAUTHProperties::FromValue(const base::Value& value) {
  ManagedXAUTHProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ManagedXAUTHProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->password) {
    to_value_result.Set("Password", (this->password)->ToValue());

  }
  if (this->save_credentials) {
    to_value_result.Set("SaveCredentials", (this->save_credentials)->ToValue());

  }
  if (this->username) {
    to_value_result.Set("Username", (this->username)->ToValue());

  }

  return to_value_result;
}


IPSecProperties::IPSecProperties()
 {}

IPSecProperties::~IPSecProperties() = default;
IPSecProperties::IPSecProperties(IPSecProperties&& rhs) = default;
IPSecProperties& IPSecProperties::operator=(IPSecProperties&& rhs) = default;
IPSecProperties IPSecProperties::Clone() const {
  IPSecProperties out;
  out.authentication_type = authentication_type;
  if (client_cert_pattern) {
    out.client_cert_pattern = client_cert_pattern->Clone();
  }
  out.client_cert_pkcs11_id = client_cert_pkcs11_id;
  out.client_cert_provisioning_profile_id = client_cert_provisioning_profile_id;
  out.client_cert_ref = client_cert_ref;
  out.client_cert_type = client_cert_type;
  if (eap) {
    out.eap = eap->Clone();
  }
  out.group = group;
  out.ike_version = ike_version;
  out.local_identity = local_identity;
  out.psk = psk;
  out.remote_identity = remote_identity;
  out.save_credentials = save_credentials;
  out.server_cape_ms = server_cape_ms;
  out.server_ca_refs = server_ca_refs;
  if (xauth) {
    out.xauth = xauth->Clone();
  }
  return out;
}

// static
bool IPSecProperties::Populate(
    const base::Value::Dict& dict, IPSecProperties& out) {
  const base::Value* authentication_type_value = dict.Find("AuthenticationType");
  if (!authentication_type_value) {
    return false;
  }
  {
    auto* temp = (*authentication_type_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.authentication_type = *temp;
  }

  const base::Value* client_cert_pattern_value = dict.Find("ClientCertPattern");
  if (client_cert_pattern_value) {
    {
      if (!(*client_cert_pattern_value).is_dict()) {
        return false;
      }
      else {
        CertificatePattern temp;
        if (!CertificatePattern::Populate((*client_cert_pattern_value).GetDict(), temp))
          return false;
        out.client_cert_pattern = std::move(temp);
      }
    }
  }

  const base::Value* client_cert_pkcs11_id_value = dict.Find("ClientCertPKCS11Id");
  if (client_cert_pkcs11_id_value) {
    {
      auto* temp = (*client_cert_pkcs11_id_value).GetIfString();
      if (!temp) {
        out.client_cert_pkcs11_id = absl::nullopt;
        return false;
      }
      out.client_cert_pkcs11_id = *temp;
    }
  }

  const base::Value* client_cert_provisioning_profile_id_value = dict.Find("ClientCertProvisioningProfileId");
  if (client_cert_provisioning_profile_id_value) {
    {
      auto* temp = (*client_cert_provisioning_profile_id_value).GetIfString();
      if (!temp) {
        out.client_cert_provisioning_profile_id = absl::nullopt;
        return false;
      }
      out.client_cert_provisioning_profile_id = *temp;
    }
  }

  const base::Value* client_cert_ref_value = dict.Find("ClientCertRef");
  if (client_cert_ref_value) {
    {
      auto* temp = (*client_cert_ref_value).GetIfString();
      if (!temp) {
        out.client_cert_ref = absl::nullopt;
        return false;
      }
      out.client_cert_ref = *temp;
    }
  }

  const base::Value* client_cert_type_value = dict.Find("ClientCertType");
  if (client_cert_type_value) {
    {
      auto* temp = (*client_cert_type_value).GetIfString();
      if (!temp) {
        out.client_cert_type = absl::nullopt;
        return false;
      }
      out.client_cert_type = *temp;
    }
  }

  const base::Value* eap_value = dict.Find("EAP");
  if (eap_value) {
    {
      if (!(*eap_value).is_dict()) {
        return false;
      }
      else {
        EAPProperties temp;
        if (!EAPProperties::Populate((*eap_value).GetDict(), temp))
          return false;
        out.eap = std::move(temp);
      }
    }
  }

  const base::Value* group_value = dict.Find("Group");
  if (group_value) {
    {
      auto* temp = (*group_value).GetIfString();
      if (!temp) {
        out.group = absl::nullopt;
        return false;
      }
      out.group = *temp;
    }
  }

  const base::Value* ike_version_value = dict.Find("IKEVersion");
  if (ike_version_value) {
    {
      auto temp = (*ike_version_value).GetIfInt();
      if (!temp.has_value()) {
        out.ike_version = absl::nullopt;
        return false;
      }
      out.ike_version = *temp;
    }
  }

  const base::Value* local_identity_value = dict.Find("LocalIdentity");
  if (local_identity_value) {
    {
      auto* temp = (*local_identity_value).GetIfString();
      if (!temp) {
        out.local_identity = absl::nullopt;
        return false;
      }
      out.local_identity = *temp;
    }
  }

  const base::Value* psk_value = dict.Find("PSK");
  if (psk_value) {
    {
      auto* temp = (*psk_value).GetIfString();
      if (!temp) {
        out.psk = absl::nullopt;
        return false;
      }
      out.psk = *temp;
    }
  }

  const base::Value* remote_identity_value = dict.Find("RemoteIdentity");
  if (remote_identity_value) {
    {
      auto* temp = (*remote_identity_value).GetIfString();
      if (!temp) {
        out.remote_identity = absl::nullopt;
        return false;
      }
      out.remote_identity = *temp;
    }
  }

  const base::Value* save_credentials_value = dict.Find("SaveCredentials");
  if (save_credentials_value) {
    {
      auto temp = (*save_credentials_value).GetIfBool();
      if (!temp.has_value()) {
        out.save_credentials = absl::nullopt;
        return false;
      }
      out.save_credentials = *temp;
    }
  }

  const base::Value* server_cape_ms_value = dict.Find("ServerCAPEMs");
  if (server_cape_ms_value) {
    {
      if (!(*server_cape_ms_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*server_cape_ms_value).GetList(), out.server_cape_ms)) {
          return false;
        }
      }
    }
  }

  const base::Value* server_ca_refs_value = dict.Find("ServerCARefs");
  if (server_ca_refs_value) {
    {
      if (!(*server_ca_refs_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*server_ca_refs_value).GetList(), out.server_ca_refs)) {
          return false;
        }
      }
    }
  }

  const base::Value* xauth_value = dict.Find("XAUTH");
  if (xauth_value) {
    {
      if (!(*xauth_value).is_dict()) {
        return false;
      }
      else {
        XAUTHProperties temp;
        if (!XAUTHProperties::Populate((*xauth_value).GetDict(), temp))
          return false;
        out.xauth = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool IPSecProperties::Populate(
    const base::Value& value, IPSecProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<IPSecProperties> IPSecProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<IPSecProperties>();
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
absl::optional<IPSecProperties> IPSecProperties::FromValue(const base::Value::Dict& value) {
  IPSecProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<IPSecProperties> IPSecProperties::FromValue(const base::Value& value) {
  IPSecProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict IPSecProperties::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("AuthenticationType", this->authentication_type);

  if (this->client_cert_pattern) {
    to_value_result.Set("ClientCertPattern", (this->client_cert_pattern)->ToValue());

  }
  if (this->client_cert_pkcs11_id) {
    to_value_result.Set("ClientCertPKCS11Id", *this->client_cert_pkcs11_id);

  }
  if (this->client_cert_provisioning_profile_id) {
    to_value_result.Set("ClientCertProvisioningProfileId", *this->client_cert_provisioning_profile_id);

  }
  if (this->client_cert_ref) {
    to_value_result.Set("ClientCertRef", *this->client_cert_ref);

  }
  if (this->client_cert_type) {
    to_value_result.Set("ClientCertType", *this->client_cert_type);

  }
  if (this->eap) {
    to_value_result.Set("EAP", (this->eap)->ToValue());

  }
  if (this->group) {
    to_value_result.Set("Group", *this->group);

  }
  if (this->ike_version) {
    to_value_result.Set("IKEVersion", *this->ike_version);

  }
  if (this->local_identity) {
    to_value_result.Set("LocalIdentity", *this->local_identity);

  }
  if (this->psk) {
    to_value_result.Set("PSK", *this->psk);

  }
  if (this->remote_identity) {
    to_value_result.Set("RemoteIdentity", *this->remote_identity);

  }
  if (this->save_credentials) {
    to_value_result.Set("SaveCredentials", *this->save_credentials);

  }
  if (this->server_cape_ms) {
    to_value_result.Set("ServerCAPEMs", json_schema_compiler::util::CreateValueFromArray(*this->server_cape_ms));

  }
  if (this->server_ca_refs) {
    to_value_result.Set("ServerCARefs", json_schema_compiler::util::CreateValueFromArray(*this->server_ca_refs));

  }
  if (this->xauth) {
    to_value_result.Set("XAUTH", (this->xauth)->ToValue());

  }

  return to_value_result;
}


ManagedIPSecProperties::ManagedIPSecProperties()
 {}

ManagedIPSecProperties::~ManagedIPSecProperties() = default;
ManagedIPSecProperties::ManagedIPSecProperties(ManagedIPSecProperties&& rhs) = default;
ManagedIPSecProperties& ManagedIPSecProperties::operator=(ManagedIPSecProperties&& rhs) = default;
ManagedIPSecProperties ManagedIPSecProperties::Clone() const {
  ManagedIPSecProperties out;
  out.authentication_type = authentication_type.Clone();
  if (client_cert_pattern) {
    out.client_cert_pattern = client_cert_pattern->Clone();
  }
  if (client_cert_pkcs11_id) {
    out.client_cert_pkcs11_id = client_cert_pkcs11_id->Clone();
  }
  if (client_cert_provisioning_profile_id) {
    out.client_cert_provisioning_profile_id = client_cert_provisioning_profile_id->Clone();
  }
  if (client_cert_ref) {
    out.client_cert_ref = client_cert_ref->Clone();
  }
  if (client_cert_type) {
    out.client_cert_type = client_cert_type->Clone();
  }
  if (eap) {
    out.eap = eap->Clone();
  }
  if (group) {
    out.group = group->Clone();
  }
  if (ike_version) {
    out.ike_version = ike_version->Clone();
  }
  if (psk) {
    out.psk = psk->Clone();
  }
  if (save_credentials) {
    out.save_credentials = save_credentials->Clone();
  }
  if (server_cape_ms) {
    out.server_cape_ms = server_cape_ms->Clone();
  }
  if (server_ca_refs) {
    out.server_ca_refs = server_ca_refs->Clone();
  }
  if (xauth) {
    out.xauth = xauth->Clone();
  }
  return out;
}

// static
bool ManagedIPSecProperties::Populate(
    const base::Value::Dict& dict, ManagedIPSecProperties& out) {
  const base::Value* authentication_type_value = dict.Find("AuthenticationType");
  if (!authentication_type_value) {
    return false;
  }
  {
    if (!(*authentication_type_value).is_dict()) {
      return false;
    }
    if (!ManagedDOMString::Populate((*authentication_type_value).GetDict(), out.authentication_type)) {
      return false;
    }
  }

  const base::Value* client_cert_pattern_value = dict.Find("ClientCertPattern");
  if (client_cert_pattern_value) {
    {
      if (!(*client_cert_pattern_value).is_dict()) {
        return false;
      }
      else {
        ManagedCertificatePattern temp;
        if (!ManagedCertificatePattern::Populate((*client_cert_pattern_value).GetDict(), temp))
          return false;
        out.client_cert_pattern = std::move(temp);
      }
    }
  }

  const base::Value* client_cert_pkcs11_id_value = dict.Find("ClientCertPKCS11Id");
  if (client_cert_pkcs11_id_value) {
    {
      if (!(*client_cert_pkcs11_id_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*client_cert_pkcs11_id_value).GetDict(), temp))
          return false;
        out.client_cert_pkcs11_id = std::move(temp);
      }
    }
  }

  const base::Value* client_cert_provisioning_profile_id_value = dict.Find("ClientCertProvisioningProfileId");
  if (client_cert_provisioning_profile_id_value) {
    {
      if (!(*client_cert_provisioning_profile_id_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*client_cert_provisioning_profile_id_value).GetDict(), temp))
          return false;
        out.client_cert_provisioning_profile_id = std::move(temp);
      }
    }
  }

  const base::Value* client_cert_ref_value = dict.Find("ClientCertRef");
  if (client_cert_ref_value) {
    {
      if (!(*client_cert_ref_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*client_cert_ref_value).GetDict(), temp))
          return false;
        out.client_cert_ref = std::move(temp);
      }
    }
  }

  const base::Value* client_cert_type_value = dict.Find("ClientCertType");
  if (client_cert_type_value) {
    {
      if (!(*client_cert_type_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*client_cert_type_value).GetDict(), temp))
          return false;
        out.client_cert_type = std::move(temp);
      }
    }
  }

  const base::Value* eap_value = dict.Find("EAP");
  if (eap_value) {
    {
      if (!(*eap_value).is_dict()) {
        return false;
      }
      else {
        ManagedEAPProperties temp;
        if (!ManagedEAPProperties::Populate((*eap_value).GetDict(), temp))
          return false;
        out.eap = std::move(temp);
      }
    }
  }

  const base::Value* group_value = dict.Find("Group");
  if (group_value) {
    {
      if (!(*group_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*group_value).GetDict(), temp))
          return false;
        out.group = std::move(temp);
      }
    }
  }

  const base::Value* ike_version_value = dict.Find("IKEVersion");
  if (ike_version_value) {
    {
      if (!(*ike_version_value).is_dict()) {
        return false;
      }
      else {
        ManagedLong temp;
        if (!ManagedLong::Populate((*ike_version_value).GetDict(), temp))
          return false;
        out.ike_version = std::move(temp);
      }
    }
  }

  const base::Value* psk_value = dict.Find("PSK");
  if (psk_value) {
    {
      if (!(*psk_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*psk_value).GetDict(), temp))
          return false;
        out.psk = std::move(temp);
      }
    }
  }

  const base::Value* save_credentials_value = dict.Find("SaveCredentials");
  if (save_credentials_value) {
    {
      if (!(*save_credentials_value).is_dict()) {
        return false;
      }
      else {
        ManagedBoolean temp;
        if (!ManagedBoolean::Populate((*save_credentials_value).GetDict(), temp))
          return false;
        out.save_credentials = std::move(temp);
      }
    }
  }

  const base::Value* server_cape_ms_value = dict.Find("ServerCAPEMs");
  if (server_cape_ms_value) {
    {
      if (!(*server_cape_ms_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMStringList temp;
        if (!ManagedDOMStringList::Populate((*server_cape_ms_value).GetDict(), temp))
          return false;
        out.server_cape_ms = std::move(temp);
      }
    }
  }

  const base::Value* server_ca_refs_value = dict.Find("ServerCARefs");
  if (server_ca_refs_value) {
    {
      if (!(*server_ca_refs_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMStringList temp;
        if (!ManagedDOMStringList::Populate((*server_ca_refs_value).GetDict(), temp))
          return false;
        out.server_ca_refs = std::move(temp);
      }
    }
  }

  const base::Value* xauth_value = dict.Find("XAUTH");
  if (xauth_value) {
    {
      if (!(*xauth_value).is_dict()) {
        return false;
      }
      else {
        ManagedXAUTHProperties temp;
        if (!ManagedXAUTHProperties::Populate((*xauth_value).GetDict(), temp))
          return false;
        out.xauth = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool ManagedIPSecProperties::Populate(
    const base::Value& value, ManagedIPSecProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ManagedIPSecProperties> ManagedIPSecProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ManagedIPSecProperties>();
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
absl::optional<ManagedIPSecProperties> ManagedIPSecProperties::FromValue(const base::Value::Dict& value) {
  ManagedIPSecProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ManagedIPSecProperties> ManagedIPSecProperties::FromValue(const base::Value& value) {
  ManagedIPSecProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ManagedIPSecProperties::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("AuthenticationType", (this->authentication_type).ToValue());

  if (this->client_cert_pattern) {
    to_value_result.Set("ClientCertPattern", (this->client_cert_pattern)->ToValue());

  }
  if (this->client_cert_pkcs11_id) {
    to_value_result.Set("ClientCertPKCS11Id", (this->client_cert_pkcs11_id)->ToValue());

  }
  if (this->client_cert_provisioning_profile_id) {
    to_value_result.Set("ClientCertProvisioningProfileId", (this->client_cert_provisioning_profile_id)->ToValue());

  }
  if (this->client_cert_ref) {
    to_value_result.Set("ClientCertRef", (this->client_cert_ref)->ToValue());

  }
  if (this->client_cert_type) {
    to_value_result.Set("ClientCertType", (this->client_cert_type)->ToValue());

  }
  if (this->eap) {
    to_value_result.Set("EAP", (this->eap)->ToValue());

  }
  if (this->group) {
    to_value_result.Set("Group", (this->group)->ToValue());

  }
  if (this->ike_version) {
    to_value_result.Set("IKEVersion", (this->ike_version)->ToValue());

  }
  if (this->psk) {
    to_value_result.Set("PSK", (this->psk)->ToValue());

  }
  if (this->save_credentials) {
    to_value_result.Set("SaveCredentials", (this->save_credentials)->ToValue());

  }
  if (this->server_cape_ms) {
    to_value_result.Set("ServerCAPEMs", (this->server_cape_ms)->ToValue());

  }
  if (this->server_ca_refs) {
    to_value_result.Set("ServerCARefs", (this->server_ca_refs)->ToValue());

  }
  if (this->xauth) {
    to_value_result.Set("XAUTH", (this->xauth)->ToValue());

  }

  return to_value_result;
}


L2TPProperties::L2TPProperties()
 {}

L2TPProperties::~L2TPProperties() = default;
L2TPProperties::L2TPProperties(L2TPProperties&& rhs) = default;
L2TPProperties& L2TPProperties::operator=(L2TPProperties&& rhs) = default;
L2TPProperties L2TPProperties::Clone() const {
  L2TPProperties out;
  out.lcp_echo_disabled = lcp_echo_disabled;
  out.password = password;
  out.save_credentials = save_credentials;
  out.username = username;
  return out;
}

// static
bool L2TPProperties::Populate(
    const base::Value::Dict& dict, L2TPProperties& out) {
  const base::Value* lcp_echo_disabled_value = dict.Find("LcpEchoDisabled");
  if (lcp_echo_disabled_value) {
    {
      auto temp = (*lcp_echo_disabled_value).GetIfBool();
      if (!temp.has_value()) {
        out.lcp_echo_disabled = absl::nullopt;
        return false;
      }
      out.lcp_echo_disabled = *temp;
    }
  }

  const base::Value* password_value = dict.Find("Password");
  if (password_value) {
    {
      auto* temp = (*password_value).GetIfString();
      if (!temp) {
        out.password = absl::nullopt;
        return false;
      }
      out.password = *temp;
    }
  }

  const base::Value* save_credentials_value = dict.Find("SaveCredentials");
  if (save_credentials_value) {
    {
      auto temp = (*save_credentials_value).GetIfBool();
      if (!temp.has_value()) {
        out.save_credentials = absl::nullopt;
        return false;
      }
      out.save_credentials = *temp;
    }
  }

  const base::Value* username_value = dict.Find("Username");
  if (username_value) {
    {
      auto* temp = (*username_value).GetIfString();
      if (!temp) {
        out.username = absl::nullopt;
        return false;
      }
      out.username = *temp;
    }
  }

  return true;
}

// static
bool L2TPProperties::Populate(
    const base::Value& value, L2TPProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<L2TPProperties> L2TPProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<L2TPProperties>();
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
absl::optional<L2TPProperties> L2TPProperties::FromValue(const base::Value::Dict& value) {
  L2TPProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<L2TPProperties> L2TPProperties::FromValue(const base::Value& value) {
  L2TPProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict L2TPProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->lcp_echo_disabled) {
    to_value_result.Set("LcpEchoDisabled", *this->lcp_echo_disabled);

  }
  if (this->password) {
    to_value_result.Set("Password", *this->password);

  }
  if (this->save_credentials) {
    to_value_result.Set("SaveCredentials", *this->save_credentials);

  }
  if (this->username) {
    to_value_result.Set("Username", *this->username);

  }

  return to_value_result;
}


ManagedL2TPProperties::ManagedL2TPProperties()
 {}

ManagedL2TPProperties::~ManagedL2TPProperties() = default;
ManagedL2TPProperties::ManagedL2TPProperties(ManagedL2TPProperties&& rhs) = default;
ManagedL2TPProperties& ManagedL2TPProperties::operator=(ManagedL2TPProperties&& rhs) = default;
ManagedL2TPProperties ManagedL2TPProperties::Clone() const {
  ManagedL2TPProperties out;
  if (lcp_echo_disabled) {
    out.lcp_echo_disabled = lcp_echo_disabled->Clone();
  }
  if (password) {
    out.password = password->Clone();
  }
  if (save_credentials) {
    out.save_credentials = save_credentials->Clone();
  }
  if (username) {
    out.username = username->Clone();
  }
  return out;
}

// static
bool ManagedL2TPProperties::Populate(
    const base::Value::Dict& dict, ManagedL2TPProperties& out) {
  const base::Value* lcp_echo_disabled_value = dict.Find("LcpEchoDisabled");
  if (lcp_echo_disabled_value) {
    {
      if (!(*lcp_echo_disabled_value).is_dict()) {
        return false;
      }
      else {
        ManagedBoolean temp;
        if (!ManagedBoolean::Populate((*lcp_echo_disabled_value).GetDict(), temp))
          return false;
        out.lcp_echo_disabled = std::move(temp);
      }
    }
  }

  const base::Value* password_value = dict.Find("Password");
  if (password_value) {
    {
      if (!(*password_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*password_value).GetDict(), temp))
          return false;
        out.password = std::move(temp);
      }
    }
  }

  const base::Value* save_credentials_value = dict.Find("SaveCredentials");
  if (save_credentials_value) {
    {
      if (!(*save_credentials_value).is_dict()) {
        return false;
      }
      else {
        ManagedBoolean temp;
        if (!ManagedBoolean::Populate((*save_credentials_value).GetDict(), temp))
          return false;
        out.save_credentials = std::move(temp);
      }
    }
  }

  const base::Value* username_value = dict.Find("Username");
  if (username_value) {
    {
      if (!(*username_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*username_value).GetDict(), temp))
          return false;
        out.username = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool ManagedL2TPProperties::Populate(
    const base::Value& value, ManagedL2TPProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ManagedL2TPProperties> ManagedL2TPProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ManagedL2TPProperties>();
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
absl::optional<ManagedL2TPProperties> ManagedL2TPProperties::FromValue(const base::Value::Dict& value) {
  ManagedL2TPProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ManagedL2TPProperties> ManagedL2TPProperties::FromValue(const base::Value& value) {
  ManagedL2TPProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ManagedL2TPProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->lcp_echo_disabled) {
    to_value_result.Set("LcpEchoDisabled", (this->lcp_echo_disabled)->ToValue());

  }
  if (this->password) {
    to_value_result.Set("Password", (this->password)->ToValue());

  }
  if (this->save_credentials) {
    to_value_result.Set("SaveCredentials", (this->save_credentials)->ToValue());

  }
  if (this->username) {
    to_value_result.Set("Username", (this->username)->ToValue());

  }

  return to_value_result;
}


PaymentPortal::PaymentPortal()
 {}

PaymentPortal::~PaymentPortal() = default;
PaymentPortal::PaymentPortal(PaymentPortal&& rhs) = default;
PaymentPortal& PaymentPortal::operator=(PaymentPortal&& rhs) = default;
PaymentPortal PaymentPortal::Clone() const {
  PaymentPortal out;
  out.method = method;
  out.post_data = post_data;
  out.url = url;
  return out;
}

// static
bool PaymentPortal::Populate(
    const base::Value::Dict& dict, PaymentPortal& out) {
  const base::Value* method_value = dict.Find("Method");
  if (!method_value) {
    return false;
  }
  {
    auto* temp = (*method_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.method = *temp;
  }

  const base::Value* post_data_value = dict.Find("PostData");
  if (post_data_value) {
    {
      auto* temp = (*post_data_value).GetIfString();
      if (!temp) {
        out.post_data = absl::nullopt;
        return false;
      }
      out.post_data = *temp;
    }
  }

  const base::Value* url_value = dict.Find("Url");
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

  return true;
}

// static
bool PaymentPortal::Populate(
    const base::Value& value, PaymentPortal& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<PaymentPortal> PaymentPortal::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<PaymentPortal>();
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
absl::optional<PaymentPortal> PaymentPortal::FromValue(const base::Value::Dict& value) {
  PaymentPortal out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<PaymentPortal> PaymentPortal::FromValue(const base::Value& value) {
  PaymentPortal out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict PaymentPortal::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("Method", this->method);

  if (this->post_data) {
    to_value_result.Set("PostData", *this->post_data);

  }
  if (this->url) {
    to_value_result.Set("Url", *this->url);

  }

  return to_value_result;
}


ProxyLocation::ProxyLocation()
: port(0) {}

ProxyLocation::~ProxyLocation() = default;
ProxyLocation::ProxyLocation(ProxyLocation&& rhs) = default;
ProxyLocation& ProxyLocation::operator=(ProxyLocation&& rhs) = default;
ProxyLocation ProxyLocation::Clone() const {
  ProxyLocation out;
  out.host = host;
  out.port = port;
  return out;
}

// static
bool ProxyLocation::Populate(
    const base::Value::Dict& dict, ProxyLocation& out) {
  const base::Value* host_value = dict.Find("Host");
  if (!host_value) {
    return false;
  }
  {
    auto* temp = (*host_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.host = *temp;
  }

  const base::Value* port_value = dict.Find("Port");
  if (!port_value) {
    return false;
  }
  {
    auto temp = (*port_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.port = *temp;
  }

  return true;
}

// static
bool ProxyLocation::Populate(
    const base::Value& value, ProxyLocation& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ProxyLocation> ProxyLocation::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ProxyLocation>();
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
absl::optional<ProxyLocation> ProxyLocation::FromValue(const base::Value::Dict& value) {
  ProxyLocation out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ProxyLocation> ProxyLocation::FromValue(const base::Value& value) {
  ProxyLocation out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ProxyLocation::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("Host", this->host);

  to_value_result.Set("Port", this->port);


  return to_value_result;
}


ManagedProxyLocation::ManagedProxyLocation()
 {}

ManagedProxyLocation::~ManagedProxyLocation() = default;
ManagedProxyLocation::ManagedProxyLocation(ManagedProxyLocation&& rhs) = default;
ManagedProxyLocation& ManagedProxyLocation::operator=(ManagedProxyLocation&& rhs) = default;
ManagedProxyLocation ManagedProxyLocation::Clone() const {
  ManagedProxyLocation out;
  out.host = host.Clone();
  out.port = port.Clone();
  return out;
}

// static
bool ManagedProxyLocation::Populate(
    const base::Value::Dict& dict, ManagedProxyLocation& out) {
  const base::Value* host_value = dict.Find("Host");
  if (!host_value) {
    return false;
  }
  {
    if (!(*host_value).is_dict()) {
      return false;
    }
    if (!ManagedDOMString::Populate((*host_value).GetDict(), out.host)) {
      return false;
    }
  }

  const base::Value* port_value = dict.Find("Port");
  if (!port_value) {
    return false;
  }
  {
    if (!(*port_value).is_dict()) {
      return false;
    }
    if (!ManagedLong::Populate((*port_value).GetDict(), out.port)) {
      return false;
    }
  }

  return true;
}

// static
bool ManagedProxyLocation::Populate(
    const base::Value& value, ManagedProxyLocation& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ManagedProxyLocation> ManagedProxyLocation::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ManagedProxyLocation>();
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
absl::optional<ManagedProxyLocation> ManagedProxyLocation::FromValue(const base::Value::Dict& value) {
  ManagedProxyLocation out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ManagedProxyLocation> ManagedProxyLocation::FromValue(const base::Value& value) {
  ManagedProxyLocation out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ManagedProxyLocation::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("Host", (this->host).ToValue());

  to_value_result.Set("Port", (this->port).ToValue());


  return to_value_result;
}


ManualProxySettings::ManualProxySettings()
 {}

ManualProxySettings::~ManualProxySettings() = default;
ManualProxySettings::ManualProxySettings(ManualProxySettings&& rhs) = default;
ManualProxySettings& ManualProxySettings::operator=(ManualProxySettings&& rhs) = default;
ManualProxySettings ManualProxySettings::Clone() const {
  ManualProxySettings out;
  if (http_proxy) {
    out.http_proxy = http_proxy->Clone();
  }
  if (secure_http_proxy) {
    out.secure_http_proxy = secure_http_proxy->Clone();
  }
  if (ftp_proxy) {
    out.ftp_proxy = ftp_proxy->Clone();
  }
  if (socks) {
    out.socks = socks->Clone();
  }
  return out;
}

// static
bool ManualProxySettings::Populate(
    const base::Value::Dict& dict, ManualProxySettings& out) {
  const base::Value* http_proxy_value = dict.Find("HTTPProxy");
  if (http_proxy_value) {
    {
      if (!(*http_proxy_value).is_dict()) {
        return false;
      }
      else {
        ProxyLocation temp;
        if (!ProxyLocation::Populate((*http_proxy_value).GetDict(), temp))
          return false;
        out.http_proxy = std::move(temp);
      }
    }
  }

  const base::Value* secure_http_proxy_value = dict.Find("SecureHTTPProxy");
  if (secure_http_proxy_value) {
    {
      if (!(*secure_http_proxy_value).is_dict()) {
        return false;
      }
      else {
        ProxyLocation temp;
        if (!ProxyLocation::Populate((*secure_http_proxy_value).GetDict(), temp))
          return false;
        out.secure_http_proxy = std::move(temp);
      }
    }
  }

  const base::Value* ftp_proxy_value = dict.Find("FTPProxy");
  if (ftp_proxy_value) {
    {
      if (!(*ftp_proxy_value).is_dict()) {
        return false;
      }
      else {
        ProxyLocation temp;
        if (!ProxyLocation::Populate((*ftp_proxy_value).GetDict(), temp))
          return false;
        out.ftp_proxy = std::move(temp);
      }
    }
  }

  const base::Value* socks_value = dict.Find("SOCKS");
  if (socks_value) {
    {
      if (!(*socks_value).is_dict()) {
        return false;
      }
      else {
        ProxyLocation temp;
        if (!ProxyLocation::Populate((*socks_value).GetDict(), temp))
          return false;
        out.socks = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool ManualProxySettings::Populate(
    const base::Value& value, ManualProxySettings& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ManualProxySettings> ManualProxySettings::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ManualProxySettings>();
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
absl::optional<ManualProxySettings> ManualProxySettings::FromValue(const base::Value::Dict& value) {
  ManualProxySettings out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ManualProxySettings> ManualProxySettings::FromValue(const base::Value& value) {
  ManualProxySettings out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ManualProxySettings::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->http_proxy) {
    to_value_result.Set("HTTPProxy", (this->http_proxy)->ToValue());

  }
  if (this->secure_http_proxy) {
    to_value_result.Set("SecureHTTPProxy", (this->secure_http_proxy)->ToValue());

  }
  if (this->ftp_proxy) {
    to_value_result.Set("FTPProxy", (this->ftp_proxy)->ToValue());

  }
  if (this->socks) {
    to_value_result.Set("SOCKS", (this->socks)->ToValue());

  }

  return to_value_result;
}


ManagedManualProxySettings::ManagedManualProxySettings()
 {}

ManagedManualProxySettings::~ManagedManualProxySettings() = default;
ManagedManualProxySettings::ManagedManualProxySettings(ManagedManualProxySettings&& rhs) = default;
ManagedManualProxySettings& ManagedManualProxySettings::operator=(ManagedManualProxySettings&& rhs) = default;
ManagedManualProxySettings ManagedManualProxySettings::Clone() const {
  ManagedManualProxySettings out;
  if (http_proxy) {
    out.http_proxy = http_proxy->Clone();
  }
  if (secure_http_proxy) {
    out.secure_http_proxy = secure_http_proxy->Clone();
  }
  if (ftp_proxy) {
    out.ftp_proxy = ftp_proxy->Clone();
  }
  if (socks) {
    out.socks = socks->Clone();
  }
  return out;
}

// static
bool ManagedManualProxySettings::Populate(
    const base::Value::Dict& dict, ManagedManualProxySettings& out) {
  const base::Value* http_proxy_value = dict.Find("HTTPProxy");
  if (http_proxy_value) {
    {
      if (!(*http_proxy_value).is_dict()) {
        return false;
      }
      else {
        ManagedProxyLocation temp;
        if (!ManagedProxyLocation::Populate((*http_proxy_value).GetDict(), temp))
          return false;
        out.http_proxy = std::move(temp);
      }
    }
  }

  const base::Value* secure_http_proxy_value = dict.Find("SecureHTTPProxy");
  if (secure_http_proxy_value) {
    {
      if (!(*secure_http_proxy_value).is_dict()) {
        return false;
      }
      else {
        ManagedProxyLocation temp;
        if (!ManagedProxyLocation::Populate((*secure_http_proxy_value).GetDict(), temp))
          return false;
        out.secure_http_proxy = std::move(temp);
      }
    }
  }

  const base::Value* ftp_proxy_value = dict.Find("FTPProxy");
  if (ftp_proxy_value) {
    {
      if (!(*ftp_proxy_value).is_dict()) {
        return false;
      }
      else {
        ManagedProxyLocation temp;
        if (!ManagedProxyLocation::Populate((*ftp_proxy_value).GetDict(), temp))
          return false;
        out.ftp_proxy = std::move(temp);
      }
    }
  }

  const base::Value* socks_value = dict.Find("SOCKS");
  if (socks_value) {
    {
      if (!(*socks_value).is_dict()) {
        return false;
      }
      else {
        ManagedProxyLocation temp;
        if (!ManagedProxyLocation::Populate((*socks_value).GetDict(), temp))
          return false;
        out.socks = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool ManagedManualProxySettings::Populate(
    const base::Value& value, ManagedManualProxySettings& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ManagedManualProxySettings> ManagedManualProxySettings::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ManagedManualProxySettings>();
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
absl::optional<ManagedManualProxySettings> ManagedManualProxySettings::FromValue(const base::Value::Dict& value) {
  ManagedManualProxySettings out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ManagedManualProxySettings> ManagedManualProxySettings::FromValue(const base::Value& value) {
  ManagedManualProxySettings out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ManagedManualProxySettings::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->http_proxy) {
    to_value_result.Set("HTTPProxy", (this->http_proxy)->ToValue());

  }
  if (this->secure_http_proxy) {
    to_value_result.Set("SecureHTTPProxy", (this->secure_http_proxy)->ToValue());

  }
  if (this->ftp_proxy) {
    to_value_result.Set("FTPProxy", (this->ftp_proxy)->ToValue());

  }
  if (this->socks) {
    to_value_result.Set("SOCKS", (this->socks)->ToValue());

  }

  return to_value_result;
}


ProxySettings::ProxySettings()
: type() {}

ProxySettings::~ProxySettings() = default;
ProxySettings::ProxySettings(ProxySettings&& rhs) = default;
ProxySettings& ProxySettings::operator=(ProxySettings&& rhs) = default;
ProxySettings ProxySettings::Clone() const {
  ProxySettings out;
  out.type = type;
  if (manual) {
    out.manual = manual->Clone();
  }
  out.exclude_domains = exclude_domains;
  out.pac = pac;
  return out;
}

// static
bool ProxySettings::Populate(
    const base::Value::Dict& dict, ProxySettings& out) {
  const base::Value* type_value = dict.Find("Type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* proxy_settings_type_as_string = (*type_value).GetIfString();
    if (!proxy_settings_type_as_string) {
      return false;
    }
    out.type = ParseProxySettingsType(*proxy_settings_type_as_string);
    if (out.type == ProxySettingsType()) {
      return false;
    }
  }

  const base::Value* manual_value = dict.Find("Manual");
  if (manual_value) {
    {
      if (!(*manual_value).is_dict()) {
        return false;
      }
      else {
        ManualProxySettings temp;
        if (!ManualProxySettings::Populate((*manual_value).GetDict(), temp))
          return false;
        out.manual = std::move(temp);
      }
    }
  }

  const base::Value* exclude_domains_value = dict.Find("ExcludeDomains");
  if (exclude_domains_value) {
    {
      if (!(*exclude_domains_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*exclude_domains_value).GetList(), out.exclude_domains)) {
          return false;
        }
      }
    }
  }

  const base::Value* pac_value = dict.Find("PAC");
  if (pac_value) {
    {
      auto* temp = (*pac_value).GetIfString();
      if (!temp) {
        out.pac = absl::nullopt;
        return false;
      }
      out.pac = *temp;
    }
  }

  return true;
}

// static
bool ProxySettings::Populate(
    const base::Value& value, ProxySettings& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ProxySettings> ProxySettings::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ProxySettings>();
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
absl::optional<ProxySettings> ProxySettings::FromValue(const base::Value::Dict& value) {
  ProxySettings out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ProxySettings> ProxySettings::FromValue(const base::Value& value) {
  ProxySettings out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ProxySettings::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("Type", networking_private::ToString(this->type));

  if (this->manual) {
    to_value_result.Set("Manual", (this->manual)->ToValue());

  }
  if (this->exclude_domains) {
    to_value_result.Set("ExcludeDomains", json_schema_compiler::util::CreateValueFromArray(*this->exclude_domains));

  }
  if (this->pac) {
    to_value_result.Set("PAC", *this->pac);

  }

  return to_value_result;
}


ManagedProxySettings::ManagedProxySettings()
 {}

ManagedProxySettings::~ManagedProxySettings() = default;
ManagedProxySettings::ManagedProxySettings(ManagedProxySettings&& rhs) = default;
ManagedProxySettings& ManagedProxySettings::operator=(ManagedProxySettings&& rhs) = default;
ManagedProxySettings ManagedProxySettings::Clone() const {
  ManagedProxySettings out;
  out.type = type.Clone();
  if (manual) {
    out.manual = manual->Clone();
  }
  if (exclude_domains) {
    out.exclude_domains = exclude_domains->Clone();
  }
  if (pac) {
    out.pac = pac->Clone();
  }
  return out;
}

// static
bool ManagedProxySettings::Populate(
    const base::Value::Dict& dict, ManagedProxySettings& out) {
  const base::Value* type_value = dict.Find("Type");
  if (!type_value) {
    return false;
  }
  {
    if (!(*type_value).is_dict()) {
      return false;
    }
    if (!ManagedProxySettingsType::Populate((*type_value).GetDict(), out.type)) {
      return false;
    }
  }

  const base::Value* manual_value = dict.Find("Manual");
  if (manual_value) {
    {
      if (!(*manual_value).is_dict()) {
        return false;
      }
      else {
        ManagedManualProxySettings temp;
        if (!ManagedManualProxySettings::Populate((*manual_value).GetDict(), temp))
          return false;
        out.manual = std::move(temp);
      }
    }
  }

  const base::Value* exclude_domains_value = dict.Find("ExcludeDomains");
  if (exclude_domains_value) {
    {
      if (!(*exclude_domains_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMStringList temp;
        if (!ManagedDOMStringList::Populate((*exclude_domains_value).GetDict(), temp))
          return false;
        out.exclude_domains = std::move(temp);
      }
    }
  }

  const base::Value* pac_value = dict.Find("PAC");
  if (pac_value) {
    {
      if (!(*pac_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*pac_value).GetDict(), temp))
          return false;
        out.pac = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool ManagedProxySettings::Populate(
    const base::Value& value, ManagedProxySettings& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ManagedProxySettings> ManagedProxySettings::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ManagedProxySettings>();
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
absl::optional<ManagedProxySettings> ManagedProxySettings::FromValue(const base::Value::Dict& value) {
  ManagedProxySettings out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ManagedProxySettings> ManagedProxySettings::FromValue(const base::Value& value) {
  ManagedProxySettings out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ManagedProxySettings::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("Type", (this->type).ToValue());

  if (this->manual) {
    to_value_result.Set("Manual", (this->manual)->ToValue());

  }
  if (this->exclude_domains) {
    to_value_result.Set("ExcludeDomains", (this->exclude_domains)->ToValue());

  }
  if (this->pac) {
    to_value_result.Set("PAC", (this->pac)->ToValue());

  }

  return to_value_result;
}


VerifyX509::VerifyX509()
 {}

VerifyX509::~VerifyX509() = default;
VerifyX509::VerifyX509(VerifyX509&& rhs) = default;
VerifyX509& VerifyX509::operator=(VerifyX509&& rhs) = default;
VerifyX509 VerifyX509::Clone() const {
  VerifyX509 out;
  out.name = name;
  out.type = type;
  return out;
}

// static
bool VerifyX509::Populate(
    const base::Value::Dict& dict, VerifyX509& out) {
  const base::Value* name_value = dict.Find("Name");
  if (name_value) {
    {
      auto* temp = (*name_value).GetIfString();
      if (!temp) {
        out.name = absl::nullopt;
        return false;
      }
      out.name = *temp;
    }
  }

  const base::Value* type_value = dict.Find("Type");
  if (type_value) {
    {
      auto* temp = (*type_value).GetIfString();
      if (!temp) {
        out.type = absl::nullopt;
        return false;
      }
      out.type = *temp;
    }
  }

  return true;
}

// static
bool VerifyX509::Populate(
    const base::Value& value, VerifyX509& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<VerifyX509> VerifyX509::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<VerifyX509>();
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
absl::optional<VerifyX509> VerifyX509::FromValue(const base::Value::Dict& value) {
  VerifyX509 out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<VerifyX509> VerifyX509::FromValue(const base::Value& value) {
  VerifyX509 out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict VerifyX509::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->name) {
    to_value_result.Set("Name", *this->name);

  }
  if (this->type) {
    to_value_result.Set("Type", *this->type);

  }

  return to_value_result;
}


ManagedVerifyX509::ManagedVerifyX509()
 {}

ManagedVerifyX509::~ManagedVerifyX509() = default;
ManagedVerifyX509::ManagedVerifyX509(ManagedVerifyX509&& rhs) = default;
ManagedVerifyX509& ManagedVerifyX509::operator=(ManagedVerifyX509&& rhs) = default;
ManagedVerifyX509 ManagedVerifyX509::Clone() const {
  ManagedVerifyX509 out;
  if (name) {
    out.name = name->Clone();
  }
  if (type) {
    out.type = type->Clone();
  }
  return out;
}

// static
bool ManagedVerifyX509::Populate(
    const base::Value::Dict& dict, ManagedVerifyX509& out) {
  const base::Value* name_value = dict.Find("Name");
  if (name_value) {
    {
      if (!(*name_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*name_value).GetDict(), temp))
          return false;
        out.name = std::move(temp);
      }
    }
  }

  const base::Value* type_value = dict.Find("Type");
  if (type_value) {
    {
      if (!(*type_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*type_value).GetDict(), temp))
          return false;
        out.type = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool ManagedVerifyX509::Populate(
    const base::Value& value, ManagedVerifyX509& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ManagedVerifyX509> ManagedVerifyX509::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ManagedVerifyX509>();
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
absl::optional<ManagedVerifyX509> ManagedVerifyX509::FromValue(const base::Value::Dict& value) {
  ManagedVerifyX509 out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ManagedVerifyX509> ManagedVerifyX509::FromValue(const base::Value& value) {
  ManagedVerifyX509 out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ManagedVerifyX509::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->name) {
    to_value_result.Set("Name", (this->name)->ToValue());

  }
  if (this->type) {
    to_value_result.Set("Type", (this->type)->ToValue());

  }

  return to_value_result;
}


OpenVPNProperties::OpenVPNProperties()
 {}

OpenVPNProperties::~OpenVPNProperties() = default;
OpenVPNProperties::OpenVPNProperties(OpenVPNProperties&& rhs) = default;
OpenVPNProperties& OpenVPNProperties::operator=(OpenVPNProperties&& rhs) = default;
OpenVPNProperties OpenVPNProperties::Clone() const {
  OpenVPNProperties out;
  out.auth = auth;
  out.auth_retry = auth_retry;
  out.auth_no_cache = auth_no_cache;
  out.cipher = cipher;
  out.client_cert_pkcs11_id = client_cert_pkcs11_id;
  if (client_cert_pattern) {
    out.client_cert_pattern = client_cert_pattern->Clone();
  }
  out.client_cert_provisioning_profile_id = client_cert_provisioning_profile_id;
  out.client_cert_ref = client_cert_ref;
  out.client_cert_type = client_cert_type;
  out.comp_lzo = comp_lzo;
  out.comp_no_adapt = comp_no_adapt;
  out.extra_hosts = extra_hosts;
  out.ignore_default_route = ignore_default_route;
  out.key_direction = key_direction;
  out.ns_cert_type = ns_cert_type;
  out.otp = otp;
  out.password = password;
  out.port = port;
  out.proto = proto;
  out.push_peer_info = push_peer_info;
  out.remote_cert_eku = remote_cert_eku;
  out.remote_cert_ku = remote_cert_ku;
  out.remote_cert_tls = remote_cert_tls;
  out.reneg_sec = reneg_sec;
  out.save_credentials = save_credentials;
  out.server_cape_ms = server_cape_ms;
  out.server_ca_refs = server_ca_refs;
  out.server_cert_ref = server_cert_ref;
  out.server_poll_timeout = server_poll_timeout;
  out.shaper = shaper;
  out.static_challenge = static_challenge;
  out.tls_auth_contents = tls_auth_contents;
  out.tls_remote = tls_remote;
  out.tls_version_min = tls_version_min;
  out.user_authentication_type = user_authentication_type;
  out.username = username;
  out.verb = verb;
  out.verify_hash = verify_hash;
  if (verify_x509) {
    out.verify_x509 = verify_x509->Clone();
  }
  return out;
}

// static
bool OpenVPNProperties::Populate(
    const base::Value::Dict& dict, OpenVPNProperties& out) {
  const base::Value* auth_value = dict.Find("Auth");
  if (auth_value) {
    {
      auto* temp = (*auth_value).GetIfString();
      if (!temp) {
        out.auth = absl::nullopt;
        return false;
      }
      out.auth = *temp;
    }
  }

  const base::Value* auth_retry_value = dict.Find("AuthRetry");
  if (auth_retry_value) {
    {
      auto* temp = (*auth_retry_value).GetIfString();
      if (!temp) {
        out.auth_retry = absl::nullopt;
        return false;
      }
      out.auth_retry = *temp;
    }
  }

  const base::Value* auth_no_cache_value = dict.Find("AuthNoCache");
  if (auth_no_cache_value) {
    {
      auto temp = (*auth_no_cache_value).GetIfBool();
      if (!temp.has_value()) {
        out.auth_no_cache = absl::nullopt;
        return false;
      }
      out.auth_no_cache = *temp;
    }
  }

  const base::Value* cipher_value = dict.Find("Cipher");
  if (cipher_value) {
    {
      auto* temp = (*cipher_value).GetIfString();
      if (!temp) {
        out.cipher = absl::nullopt;
        return false;
      }
      out.cipher = *temp;
    }
  }

  const base::Value* client_cert_pkcs11_id_value = dict.Find("ClientCertPKCS11Id");
  if (client_cert_pkcs11_id_value) {
    {
      auto* temp = (*client_cert_pkcs11_id_value).GetIfString();
      if (!temp) {
        out.client_cert_pkcs11_id = absl::nullopt;
        return false;
      }
      out.client_cert_pkcs11_id = *temp;
    }
  }

  const base::Value* client_cert_pattern_value = dict.Find("ClientCertPattern");
  if (client_cert_pattern_value) {
    {
      if (!(*client_cert_pattern_value).is_dict()) {
        return false;
      }
      else {
        CertificatePattern temp;
        if (!CertificatePattern::Populate((*client_cert_pattern_value).GetDict(), temp))
          return false;
        out.client_cert_pattern = std::move(temp);
      }
    }
  }

  const base::Value* client_cert_provisioning_profile_id_value = dict.Find("ClientCertProvisioningProfileId");
  if (client_cert_provisioning_profile_id_value) {
    {
      auto* temp = (*client_cert_provisioning_profile_id_value).GetIfString();
      if (!temp) {
        out.client_cert_provisioning_profile_id = absl::nullopt;
        return false;
      }
      out.client_cert_provisioning_profile_id = *temp;
    }
  }

  const base::Value* client_cert_ref_value = dict.Find("ClientCertRef");
  if (client_cert_ref_value) {
    {
      auto* temp = (*client_cert_ref_value).GetIfString();
      if (!temp) {
        out.client_cert_ref = absl::nullopt;
        return false;
      }
      out.client_cert_ref = *temp;
    }
  }

  const base::Value* client_cert_type_value = dict.Find("ClientCertType");
  if (client_cert_type_value) {
    {
      auto* temp = (*client_cert_type_value).GetIfString();
      if (!temp) {
        out.client_cert_type = absl::nullopt;
        return false;
      }
      out.client_cert_type = *temp;
    }
  }

  const base::Value* comp_lzo_value = dict.Find("CompLZO");
  if (comp_lzo_value) {
    {
      auto* temp = (*comp_lzo_value).GetIfString();
      if (!temp) {
        out.comp_lzo = absl::nullopt;
        return false;
      }
      out.comp_lzo = *temp;
    }
  }

  const base::Value* comp_no_adapt_value = dict.Find("CompNoAdapt");
  if (comp_no_adapt_value) {
    {
      auto temp = (*comp_no_adapt_value).GetIfBool();
      if (!temp.has_value()) {
        out.comp_no_adapt = absl::nullopt;
        return false;
      }
      out.comp_no_adapt = *temp;
    }
  }

  const base::Value* extra_hosts_value = dict.Find("ExtraHosts");
  if (extra_hosts_value) {
    {
      if (!(*extra_hosts_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*extra_hosts_value).GetList(), out.extra_hosts)) {
          return false;
        }
      }
    }
  }

  const base::Value* ignore_default_route_value = dict.Find("IgnoreDefaultRoute");
  if (ignore_default_route_value) {
    {
      auto temp = (*ignore_default_route_value).GetIfBool();
      if (!temp.has_value()) {
        out.ignore_default_route = absl::nullopt;
        return false;
      }
      out.ignore_default_route = *temp;
    }
  }

  const base::Value* key_direction_value = dict.Find("KeyDirection");
  if (key_direction_value) {
    {
      auto* temp = (*key_direction_value).GetIfString();
      if (!temp) {
        out.key_direction = absl::nullopt;
        return false;
      }
      out.key_direction = *temp;
    }
  }

  const base::Value* ns_cert_type_value = dict.Find("NsCertType");
  if (ns_cert_type_value) {
    {
      auto* temp = (*ns_cert_type_value).GetIfString();
      if (!temp) {
        out.ns_cert_type = absl::nullopt;
        return false;
      }
      out.ns_cert_type = *temp;
    }
  }

  const base::Value* otp_value = dict.Find("OTP");
  if (otp_value) {
    {
      auto* temp = (*otp_value).GetIfString();
      if (!temp) {
        out.otp = absl::nullopt;
        return false;
      }
      out.otp = *temp;
    }
  }

  const base::Value* password_value = dict.Find("Password");
  if (password_value) {
    {
      auto* temp = (*password_value).GetIfString();
      if (!temp) {
        out.password = absl::nullopt;
        return false;
      }
      out.password = *temp;
    }
  }

  const base::Value* port_value = dict.Find("Port");
  if (port_value) {
    {
      auto temp = (*port_value).GetIfInt();
      if (!temp.has_value()) {
        out.port = absl::nullopt;
        return false;
      }
      out.port = *temp;
    }
  }

  const base::Value* proto_value = dict.Find("Proto");
  if (proto_value) {
    {
      auto* temp = (*proto_value).GetIfString();
      if (!temp) {
        out.proto = absl::nullopt;
        return false;
      }
      out.proto = *temp;
    }
  }

  const base::Value* push_peer_info_value = dict.Find("PushPeerInfo");
  if (push_peer_info_value) {
    {
      auto temp = (*push_peer_info_value).GetIfBool();
      if (!temp.has_value()) {
        out.push_peer_info = absl::nullopt;
        return false;
      }
      out.push_peer_info = *temp;
    }
  }

  const base::Value* remote_cert_eku_value = dict.Find("RemoteCertEKU");
  if (remote_cert_eku_value) {
    {
      auto* temp = (*remote_cert_eku_value).GetIfString();
      if (!temp) {
        out.remote_cert_eku = absl::nullopt;
        return false;
      }
      out.remote_cert_eku = *temp;
    }
  }

  const base::Value* remote_cert_ku_value = dict.Find("RemoteCertKU");
  if (remote_cert_ku_value) {
    {
      if (!(*remote_cert_ku_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*remote_cert_ku_value).GetList(), out.remote_cert_ku)) {
          return false;
        }
      }
    }
  }

  const base::Value* remote_cert_tls_value = dict.Find("RemoteCertTLS");
  if (remote_cert_tls_value) {
    {
      auto* temp = (*remote_cert_tls_value).GetIfString();
      if (!temp) {
        out.remote_cert_tls = absl::nullopt;
        return false;
      }
      out.remote_cert_tls = *temp;
    }
  }

  const base::Value* reneg_sec_value = dict.Find("RenegSec");
  if (reneg_sec_value) {
    {
      auto temp = (*reneg_sec_value).GetIfInt();
      if (!temp.has_value()) {
        out.reneg_sec = absl::nullopt;
        return false;
      }
      out.reneg_sec = *temp;
    }
  }

  const base::Value* save_credentials_value = dict.Find("SaveCredentials");
  if (save_credentials_value) {
    {
      auto temp = (*save_credentials_value).GetIfBool();
      if (!temp.has_value()) {
        out.save_credentials = absl::nullopt;
        return false;
      }
      out.save_credentials = *temp;
    }
  }

  const base::Value* server_cape_ms_value = dict.Find("ServerCAPEMs");
  if (server_cape_ms_value) {
    {
      if (!(*server_cape_ms_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*server_cape_ms_value).GetList(), out.server_cape_ms)) {
          return false;
        }
      }
    }
  }

  const base::Value* server_ca_refs_value = dict.Find("ServerCARefs");
  if (server_ca_refs_value) {
    {
      if (!(*server_ca_refs_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*server_ca_refs_value).GetList(), out.server_ca_refs)) {
          return false;
        }
      }
    }
  }

  const base::Value* server_cert_ref_value = dict.Find("ServerCertRef");
  if (server_cert_ref_value) {
    {
      auto* temp = (*server_cert_ref_value).GetIfString();
      if (!temp) {
        out.server_cert_ref = absl::nullopt;
        return false;
      }
      out.server_cert_ref = *temp;
    }
  }

  const base::Value* server_poll_timeout_value = dict.Find("ServerPollTimeout");
  if (server_poll_timeout_value) {
    {
      auto temp = (*server_poll_timeout_value).GetIfInt();
      if (!temp.has_value()) {
        out.server_poll_timeout = absl::nullopt;
        return false;
      }
      out.server_poll_timeout = *temp;
    }
  }

  const base::Value* shaper_value = dict.Find("Shaper");
  if (shaper_value) {
    {
      auto temp = (*shaper_value).GetIfInt();
      if (!temp.has_value()) {
        out.shaper = absl::nullopt;
        return false;
      }
      out.shaper = *temp;
    }
  }

  const base::Value* static_challenge_value = dict.Find("StaticChallenge");
  if (static_challenge_value) {
    {
      auto* temp = (*static_challenge_value).GetIfString();
      if (!temp) {
        out.static_challenge = absl::nullopt;
        return false;
      }
      out.static_challenge = *temp;
    }
  }

  const base::Value* tls_auth_contents_value = dict.Find("TLSAuthContents");
  if (tls_auth_contents_value) {
    {
      auto* temp = (*tls_auth_contents_value).GetIfString();
      if (!temp) {
        out.tls_auth_contents = absl::nullopt;
        return false;
      }
      out.tls_auth_contents = *temp;
    }
  }

  const base::Value* tls_remote_value = dict.Find("TLSRemote");
  if (tls_remote_value) {
    {
      auto* temp = (*tls_remote_value).GetIfString();
      if (!temp) {
        out.tls_remote = absl::nullopt;
        return false;
      }
      out.tls_remote = *temp;
    }
  }

  const base::Value* tls_version_min_value = dict.Find("TLSVersionMin");
  if (tls_version_min_value) {
    {
      auto* temp = (*tls_version_min_value).GetIfString();
      if (!temp) {
        out.tls_version_min = absl::nullopt;
        return false;
      }
      out.tls_version_min = *temp;
    }
  }

  const base::Value* user_authentication_type_value = dict.Find("UserAuthenticationType");
  if (user_authentication_type_value) {
    {
      auto* temp = (*user_authentication_type_value).GetIfString();
      if (!temp) {
        out.user_authentication_type = absl::nullopt;
        return false;
      }
      out.user_authentication_type = *temp;
    }
  }

  const base::Value* username_value = dict.Find("Username");
  if (username_value) {
    {
      auto* temp = (*username_value).GetIfString();
      if (!temp) {
        out.username = absl::nullopt;
        return false;
      }
      out.username = *temp;
    }
  }

  const base::Value* verb_value = dict.Find("Verb");
  if (verb_value) {
    {
      auto* temp = (*verb_value).GetIfString();
      if (!temp) {
        out.verb = absl::nullopt;
        return false;
      }
      out.verb = *temp;
    }
  }

  const base::Value* verify_hash_value = dict.Find("VerifyHash");
  if (verify_hash_value) {
    {
      auto* temp = (*verify_hash_value).GetIfString();
      if (!temp) {
        out.verify_hash = absl::nullopt;
        return false;
      }
      out.verify_hash = *temp;
    }
  }

  const base::Value* verify_x509_value = dict.Find("VerifyX509");
  if (verify_x509_value) {
    {
      if (!(*verify_x509_value).is_dict()) {
        return false;
      }
      else {
        VerifyX509 temp;
        if (!VerifyX509::Populate((*verify_x509_value).GetDict(), temp))
          return false;
        out.verify_x509 = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool OpenVPNProperties::Populate(
    const base::Value& value, OpenVPNProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<OpenVPNProperties> OpenVPNProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<OpenVPNProperties>();
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
absl::optional<OpenVPNProperties> OpenVPNProperties::FromValue(const base::Value::Dict& value) {
  OpenVPNProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<OpenVPNProperties> OpenVPNProperties::FromValue(const base::Value& value) {
  OpenVPNProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict OpenVPNProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->auth) {
    to_value_result.Set("Auth", *this->auth);

  }
  if (this->auth_retry) {
    to_value_result.Set("AuthRetry", *this->auth_retry);

  }
  if (this->auth_no_cache) {
    to_value_result.Set("AuthNoCache", *this->auth_no_cache);

  }
  if (this->cipher) {
    to_value_result.Set("Cipher", *this->cipher);

  }
  if (this->client_cert_pkcs11_id) {
    to_value_result.Set("ClientCertPKCS11Id", *this->client_cert_pkcs11_id);

  }
  if (this->client_cert_pattern) {
    to_value_result.Set("ClientCertPattern", (this->client_cert_pattern)->ToValue());

  }
  if (this->client_cert_provisioning_profile_id) {
    to_value_result.Set("ClientCertProvisioningProfileId", *this->client_cert_provisioning_profile_id);

  }
  if (this->client_cert_ref) {
    to_value_result.Set("ClientCertRef", *this->client_cert_ref);

  }
  if (this->client_cert_type) {
    to_value_result.Set("ClientCertType", *this->client_cert_type);

  }
  if (this->comp_lzo) {
    to_value_result.Set("CompLZO", *this->comp_lzo);

  }
  if (this->comp_no_adapt) {
    to_value_result.Set("CompNoAdapt", *this->comp_no_adapt);

  }
  if (this->extra_hosts) {
    to_value_result.Set("ExtraHosts", json_schema_compiler::util::CreateValueFromArray(*this->extra_hosts));

  }
  if (this->ignore_default_route) {
    to_value_result.Set("IgnoreDefaultRoute", *this->ignore_default_route);

  }
  if (this->key_direction) {
    to_value_result.Set("KeyDirection", *this->key_direction);

  }
  if (this->ns_cert_type) {
    to_value_result.Set("NsCertType", *this->ns_cert_type);

  }
  if (this->otp) {
    to_value_result.Set("OTP", *this->otp);

  }
  if (this->password) {
    to_value_result.Set("Password", *this->password);

  }
  if (this->port) {
    to_value_result.Set("Port", *this->port);

  }
  if (this->proto) {
    to_value_result.Set("Proto", *this->proto);

  }
  if (this->push_peer_info) {
    to_value_result.Set("PushPeerInfo", *this->push_peer_info);

  }
  if (this->remote_cert_eku) {
    to_value_result.Set("RemoteCertEKU", *this->remote_cert_eku);

  }
  if (this->remote_cert_ku) {
    to_value_result.Set("RemoteCertKU", json_schema_compiler::util::CreateValueFromArray(*this->remote_cert_ku));

  }
  if (this->remote_cert_tls) {
    to_value_result.Set("RemoteCertTLS", *this->remote_cert_tls);

  }
  if (this->reneg_sec) {
    to_value_result.Set("RenegSec", *this->reneg_sec);

  }
  if (this->save_credentials) {
    to_value_result.Set("SaveCredentials", *this->save_credentials);

  }
  if (this->server_cape_ms) {
    to_value_result.Set("ServerCAPEMs", json_schema_compiler::util::CreateValueFromArray(*this->server_cape_ms));

  }
  if (this->server_ca_refs) {
    to_value_result.Set("ServerCARefs", json_schema_compiler::util::CreateValueFromArray(*this->server_ca_refs));

  }
  if (this->server_cert_ref) {
    to_value_result.Set("ServerCertRef", *this->server_cert_ref);

  }
  if (this->server_poll_timeout) {
    to_value_result.Set("ServerPollTimeout", *this->server_poll_timeout);

  }
  if (this->shaper) {
    to_value_result.Set("Shaper", *this->shaper);

  }
  if (this->static_challenge) {
    to_value_result.Set("StaticChallenge", *this->static_challenge);

  }
  if (this->tls_auth_contents) {
    to_value_result.Set("TLSAuthContents", *this->tls_auth_contents);

  }
  if (this->tls_remote) {
    to_value_result.Set("TLSRemote", *this->tls_remote);

  }
  if (this->tls_version_min) {
    to_value_result.Set("TLSVersionMin", *this->tls_version_min);

  }
  if (this->user_authentication_type) {
    to_value_result.Set("UserAuthenticationType", *this->user_authentication_type);

  }
  if (this->username) {
    to_value_result.Set("Username", *this->username);

  }
  if (this->verb) {
    to_value_result.Set("Verb", *this->verb);

  }
  if (this->verify_hash) {
    to_value_result.Set("VerifyHash", *this->verify_hash);

  }
  if (this->verify_x509) {
    to_value_result.Set("VerifyX509", (this->verify_x509)->ToValue());

  }

  return to_value_result;
}


ManagedOpenVPNProperties::ManagedOpenVPNProperties()
 {}

ManagedOpenVPNProperties::~ManagedOpenVPNProperties() = default;
ManagedOpenVPNProperties::ManagedOpenVPNProperties(ManagedOpenVPNProperties&& rhs) = default;
ManagedOpenVPNProperties& ManagedOpenVPNProperties::operator=(ManagedOpenVPNProperties&& rhs) = default;
ManagedOpenVPNProperties ManagedOpenVPNProperties::Clone() const {
  ManagedOpenVPNProperties out;
  if (auth) {
    out.auth = auth->Clone();
  }
  if (auth_retry) {
    out.auth_retry = auth_retry->Clone();
  }
  if (auth_no_cache) {
    out.auth_no_cache = auth_no_cache->Clone();
  }
  if (cipher) {
    out.cipher = cipher->Clone();
  }
  if (client_cert_pkcs11_id) {
    out.client_cert_pkcs11_id = client_cert_pkcs11_id->Clone();
  }
  if (client_cert_pattern) {
    out.client_cert_pattern = client_cert_pattern->Clone();
  }
  if (client_cert_provisioning_profile_id) {
    out.client_cert_provisioning_profile_id = client_cert_provisioning_profile_id->Clone();
  }
  if (client_cert_ref) {
    out.client_cert_ref = client_cert_ref->Clone();
  }
  if (client_cert_type) {
    out.client_cert_type = client_cert_type->Clone();
  }
  if (comp_lzo) {
    out.comp_lzo = comp_lzo->Clone();
  }
  if (comp_no_adapt) {
    out.comp_no_adapt = comp_no_adapt->Clone();
  }
  if (extra_hosts) {
    out.extra_hosts = extra_hosts->Clone();
  }
  if (ignore_default_route) {
    out.ignore_default_route = ignore_default_route->Clone();
  }
  if (key_direction) {
    out.key_direction = key_direction->Clone();
  }
  if (ns_cert_type) {
    out.ns_cert_type = ns_cert_type->Clone();
  }
  if (otp) {
    out.otp = otp->Clone();
  }
  if (password) {
    out.password = password->Clone();
  }
  if (port) {
    out.port = port->Clone();
  }
  if (proto) {
    out.proto = proto->Clone();
  }
  if (push_peer_info) {
    out.push_peer_info = push_peer_info->Clone();
  }
  if (remote_cert_eku) {
    out.remote_cert_eku = remote_cert_eku->Clone();
  }
  if (remote_cert_ku) {
    out.remote_cert_ku = remote_cert_ku->Clone();
  }
  if (remote_cert_tls) {
    out.remote_cert_tls = remote_cert_tls->Clone();
  }
  if (reneg_sec) {
    out.reneg_sec = reneg_sec->Clone();
  }
  if (save_credentials) {
    out.save_credentials = save_credentials->Clone();
  }
  if (server_cape_ms) {
    out.server_cape_ms = server_cape_ms->Clone();
  }
  if (server_ca_refs) {
    out.server_ca_refs = server_ca_refs->Clone();
  }
  if (server_cert_ref) {
    out.server_cert_ref = server_cert_ref->Clone();
  }
  if (server_poll_timeout) {
    out.server_poll_timeout = server_poll_timeout->Clone();
  }
  if (shaper) {
    out.shaper = shaper->Clone();
  }
  if (static_challenge) {
    out.static_challenge = static_challenge->Clone();
  }
  if (tls_auth_contents) {
    out.tls_auth_contents = tls_auth_contents->Clone();
  }
  if (tls_remote) {
    out.tls_remote = tls_remote->Clone();
  }
  if (tls_version_min) {
    out.tls_version_min = tls_version_min->Clone();
  }
  if (user_authentication_type) {
    out.user_authentication_type = user_authentication_type->Clone();
  }
  if (username) {
    out.username = username->Clone();
  }
  if (verb) {
    out.verb = verb->Clone();
  }
  if (verify_hash) {
    out.verify_hash = verify_hash->Clone();
  }
  if (verify_x509) {
    out.verify_x509 = verify_x509->Clone();
  }
  return out;
}

// static
bool ManagedOpenVPNProperties::Populate(
    const base::Value::Dict& dict, ManagedOpenVPNProperties& out) {
  const base::Value* auth_value = dict.Find("Auth");
  if (auth_value) {
    {
      if (!(*auth_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*auth_value).GetDict(), temp))
          return false;
        out.auth = std::move(temp);
      }
    }
  }

  const base::Value* auth_retry_value = dict.Find("AuthRetry");
  if (auth_retry_value) {
    {
      if (!(*auth_retry_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*auth_retry_value).GetDict(), temp))
          return false;
        out.auth_retry = std::move(temp);
      }
    }
  }

  const base::Value* auth_no_cache_value = dict.Find("AuthNoCache");
  if (auth_no_cache_value) {
    {
      if (!(*auth_no_cache_value).is_dict()) {
        return false;
      }
      else {
        ManagedBoolean temp;
        if (!ManagedBoolean::Populate((*auth_no_cache_value).GetDict(), temp))
          return false;
        out.auth_no_cache = std::move(temp);
      }
    }
  }

  const base::Value* cipher_value = dict.Find("Cipher");
  if (cipher_value) {
    {
      if (!(*cipher_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*cipher_value).GetDict(), temp))
          return false;
        out.cipher = std::move(temp);
      }
    }
  }

  const base::Value* client_cert_pkcs11_id_value = dict.Find("ClientCertPKCS11Id");
  if (client_cert_pkcs11_id_value) {
    {
      if (!(*client_cert_pkcs11_id_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*client_cert_pkcs11_id_value).GetDict(), temp))
          return false;
        out.client_cert_pkcs11_id = std::move(temp);
      }
    }
  }

  const base::Value* client_cert_pattern_value = dict.Find("ClientCertPattern");
  if (client_cert_pattern_value) {
    {
      if (!(*client_cert_pattern_value).is_dict()) {
        return false;
      }
      else {
        ManagedCertificatePattern temp;
        if (!ManagedCertificatePattern::Populate((*client_cert_pattern_value).GetDict(), temp))
          return false;
        out.client_cert_pattern = std::move(temp);
      }
    }
  }

  const base::Value* client_cert_provisioning_profile_id_value = dict.Find("ClientCertProvisioningProfileId");
  if (client_cert_provisioning_profile_id_value) {
    {
      if (!(*client_cert_provisioning_profile_id_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*client_cert_provisioning_profile_id_value).GetDict(), temp))
          return false;
        out.client_cert_provisioning_profile_id = std::move(temp);
      }
    }
  }

  const base::Value* client_cert_ref_value = dict.Find("ClientCertRef");
  if (client_cert_ref_value) {
    {
      if (!(*client_cert_ref_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*client_cert_ref_value).GetDict(), temp))
          return false;
        out.client_cert_ref = std::move(temp);
      }
    }
  }

  const base::Value* client_cert_type_value = dict.Find("ClientCertType");
  if (client_cert_type_value) {
    {
      if (!(*client_cert_type_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*client_cert_type_value).GetDict(), temp))
          return false;
        out.client_cert_type = std::move(temp);
      }
    }
  }

  const base::Value* comp_lzo_value = dict.Find("CompLZO");
  if (comp_lzo_value) {
    {
      if (!(*comp_lzo_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*comp_lzo_value).GetDict(), temp))
          return false;
        out.comp_lzo = std::move(temp);
      }
    }
  }

  const base::Value* comp_no_adapt_value = dict.Find("CompNoAdapt");
  if (comp_no_adapt_value) {
    {
      if (!(*comp_no_adapt_value).is_dict()) {
        return false;
      }
      else {
        ManagedBoolean temp;
        if (!ManagedBoolean::Populate((*comp_no_adapt_value).GetDict(), temp))
          return false;
        out.comp_no_adapt = std::move(temp);
      }
    }
  }

  const base::Value* extra_hosts_value = dict.Find("ExtraHosts");
  if (extra_hosts_value) {
    {
      if (!(*extra_hosts_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMStringList temp;
        if (!ManagedDOMStringList::Populate((*extra_hosts_value).GetDict(), temp))
          return false;
        out.extra_hosts = std::move(temp);
      }
    }
  }

  const base::Value* ignore_default_route_value = dict.Find("IgnoreDefaultRoute");
  if (ignore_default_route_value) {
    {
      if (!(*ignore_default_route_value).is_dict()) {
        return false;
      }
      else {
        ManagedBoolean temp;
        if (!ManagedBoolean::Populate((*ignore_default_route_value).GetDict(), temp))
          return false;
        out.ignore_default_route = std::move(temp);
      }
    }
  }

  const base::Value* key_direction_value = dict.Find("KeyDirection");
  if (key_direction_value) {
    {
      if (!(*key_direction_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*key_direction_value).GetDict(), temp))
          return false;
        out.key_direction = std::move(temp);
      }
    }
  }

  const base::Value* ns_cert_type_value = dict.Find("NsCertType");
  if (ns_cert_type_value) {
    {
      if (!(*ns_cert_type_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*ns_cert_type_value).GetDict(), temp))
          return false;
        out.ns_cert_type = std::move(temp);
      }
    }
  }

  const base::Value* otp_value = dict.Find("OTP");
  if (otp_value) {
    {
      if (!(*otp_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*otp_value).GetDict(), temp))
          return false;
        out.otp = std::move(temp);
      }
    }
  }

  const base::Value* password_value = dict.Find("Password");
  if (password_value) {
    {
      if (!(*password_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*password_value).GetDict(), temp))
          return false;
        out.password = std::move(temp);
      }
    }
  }

  const base::Value* port_value = dict.Find("Port");
  if (port_value) {
    {
      if (!(*port_value).is_dict()) {
        return false;
      }
      else {
        ManagedLong temp;
        if (!ManagedLong::Populate((*port_value).GetDict(), temp))
          return false;
        out.port = std::move(temp);
      }
    }
  }

  const base::Value* proto_value = dict.Find("Proto");
  if (proto_value) {
    {
      if (!(*proto_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*proto_value).GetDict(), temp))
          return false;
        out.proto = std::move(temp);
      }
    }
  }

  const base::Value* push_peer_info_value = dict.Find("PushPeerInfo");
  if (push_peer_info_value) {
    {
      if (!(*push_peer_info_value).is_dict()) {
        return false;
      }
      else {
        ManagedBoolean temp;
        if (!ManagedBoolean::Populate((*push_peer_info_value).GetDict(), temp))
          return false;
        out.push_peer_info = std::move(temp);
      }
    }
  }

  const base::Value* remote_cert_eku_value = dict.Find("RemoteCertEKU");
  if (remote_cert_eku_value) {
    {
      if (!(*remote_cert_eku_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*remote_cert_eku_value).GetDict(), temp))
          return false;
        out.remote_cert_eku = std::move(temp);
      }
    }
  }

  const base::Value* remote_cert_ku_value = dict.Find("RemoteCertKU");
  if (remote_cert_ku_value) {
    {
      if (!(*remote_cert_ku_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMStringList temp;
        if (!ManagedDOMStringList::Populate((*remote_cert_ku_value).GetDict(), temp))
          return false;
        out.remote_cert_ku = std::move(temp);
      }
    }
  }

  const base::Value* remote_cert_tls_value = dict.Find("RemoteCertTLS");
  if (remote_cert_tls_value) {
    {
      if (!(*remote_cert_tls_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*remote_cert_tls_value).GetDict(), temp))
          return false;
        out.remote_cert_tls = std::move(temp);
      }
    }
  }

  const base::Value* reneg_sec_value = dict.Find("RenegSec");
  if (reneg_sec_value) {
    {
      if (!(*reneg_sec_value).is_dict()) {
        return false;
      }
      else {
        ManagedLong temp;
        if (!ManagedLong::Populate((*reneg_sec_value).GetDict(), temp))
          return false;
        out.reneg_sec = std::move(temp);
      }
    }
  }

  const base::Value* save_credentials_value = dict.Find("SaveCredentials");
  if (save_credentials_value) {
    {
      if (!(*save_credentials_value).is_dict()) {
        return false;
      }
      else {
        ManagedBoolean temp;
        if (!ManagedBoolean::Populate((*save_credentials_value).GetDict(), temp))
          return false;
        out.save_credentials = std::move(temp);
      }
    }
  }

  const base::Value* server_cape_ms_value = dict.Find("ServerCAPEMs");
  if (server_cape_ms_value) {
    {
      if (!(*server_cape_ms_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMStringList temp;
        if (!ManagedDOMStringList::Populate((*server_cape_ms_value).GetDict(), temp))
          return false;
        out.server_cape_ms = std::move(temp);
      }
    }
  }

  const base::Value* server_ca_refs_value = dict.Find("ServerCARefs");
  if (server_ca_refs_value) {
    {
      if (!(*server_ca_refs_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMStringList temp;
        if (!ManagedDOMStringList::Populate((*server_ca_refs_value).GetDict(), temp))
          return false;
        out.server_ca_refs = std::move(temp);
      }
    }
  }

  const base::Value* server_cert_ref_value = dict.Find("ServerCertRef");
  if (server_cert_ref_value) {
    {
      if (!(*server_cert_ref_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*server_cert_ref_value).GetDict(), temp))
          return false;
        out.server_cert_ref = std::move(temp);
      }
    }
  }

  const base::Value* server_poll_timeout_value = dict.Find("ServerPollTimeout");
  if (server_poll_timeout_value) {
    {
      if (!(*server_poll_timeout_value).is_dict()) {
        return false;
      }
      else {
        ManagedLong temp;
        if (!ManagedLong::Populate((*server_poll_timeout_value).GetDict(), temp))
          return false;
        out.server_poll_timeout = std::move(temp);
      }
    }
  }

  const base::Value* shaper_value = dict.Find("Shaper");
  if (shaper_value) {
    {
      if (!(*shaper_value).is_dict()) {
        return false;
      }
      else {
        ManagedLong temp;
        if (!ManagedLong::Populate((*shaper_value).GetDict(), temp))
          return false;
        out.shaper = std::move(temp);
      }
    }
  }

  const base::Value* static_challenge_value = dict.Find("StaticChallenge");
  if (static_challenge_value) {
    {
      if (!(*static_challenge_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*static_challenge_value).GetDict(), temp))
          return false;
        out.static_challenge = std::move(temp);
      }
    }
  }

  const base::Value* tls_auth_contents_value = dict.Find("TLSAuthContents");
  if (tls_auth_contents_value) {
    {
      if (!(*tls_auth_contents_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*tls_auth_contents_value).GetDict(), temp))
          return false;
        out.tls_auth_contents = std::move(temp);
      }
    }
  }

  const base::Value* tls_remote_value = dict.Find("TLSRemote");
  if (tls_remote_value) {
    {
      if (!(*tls_remote_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*tls_remote_value).GetDict(), temp))
          return false;
        out.tls_remote = std::move(temp);
      }
    }
  }

  const base::Value* tls_version_min_value = dict.Find("TLSVersionMin");
  if (tls_version_min_value) {
    {
      if (!(*tls_version_min_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*tls_version_min_value).GetDict(), temp))
          return false;
        out.tls_version_min = std::move(temp);
      }
    }
  }

  const base::Value* user_authentication_type_value = dict.Find("UserAuthenticationType");
  if (user_authentication_type_value) {
    {
      if (!(*user_authentication_type_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*user_authentication_type_value).GetDict(), temp))
          return false;
        out.user_authentication_type = std::move(temp);
      }
    }
  }

  const base::Value* username_value = dict.Find("Username");
  if (username_value) {
    {
      if (!(*username_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*username_value).GetDict(), temp))
          return false;
        out.username = std::move(temp);
      }
    }
  }

  const base::Value* verb_value = dict.Find("Verb");
  if (verb_value) {
    {
      if (!(*verb_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*verb_value).GetDict(), temp))
          return false;
        out.verb = std::move(temp);
      }
    }
  }

  const base::Value* verify_hash_value = dict.Find("VerifyHash");
  if (verify_hash_value) {
    {
      if (!(*verify_hash_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*verify_hash_value).GetDict(), temp))
          return false;
        out.verify_hash = std::move(temp);
      }
    }
  }

  const base::Value* verify_x509_value = dict.Find("VerifyX509");
  if (verify_x509_value) {
    {
      if (!(*verify_x509_value).is_dict()) {
        return false;
      }
      else {
        ManagedVerifyX509 temp;
        if (!ManagedVerifyX509::Populate((*verify_x509_value).GetDict(), temp))
          return false;
        out.verify_x509 = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool ManagedOpenVPNProperties::Populate(
    const base::Value& value, ManagedOpenVPNProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ManagedOpenVPNProperties> ManagedOpenVPNProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ManagedOpenVPNProperties>();
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
absl::optional<ManagedOpenVPNProperties> ManagedOpenVPNProperties::FromValue(const base::Value::Dict& value) {
  ManagedOpenVPNProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ManagedOpenVPNProperties> ManagedOpenVPNProperties::FromValue(const base::Value& value) {
  ManagedOpenVPNProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ManagedOpenVPNProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->auth) {
    to_value_result.Set("Auth", (this->auth)->ToValue());

  }
  if (this->auth_retry) {
    to_value_result.Set("AuthRetry", (this->auth_retry)->ToValue());

  }
  if (this->auth_no_cache) {
    to_value_result.Set("AuthNoCache", (this->auth_no_cache)->ToValue());

  }
  if (this->cipher) {
    to_value_result.Set("Cipher", (this->cipher)->ToValue());

  }
  if (this->client_cert_pkcs11_id) {
    to_value_result.Set("ClientCertPKCS11Id", (this->client_cert_pkcs11_id)->ToValue());

  }
  if (this->client_cert_pattern) {
    to_value_result.Set("ClientCertPattern", (this->client_cert_pattern)->ToValue());

  }
  if (this->client_cert_provisioning_profile_id) {
    to_value_result.Set("ClientCertProvisioningProfileId", (this->client_cert_provisioning_profile_id)->ToValue());

  }
  if (this->client_cert_ref) {
    to_value_result.Set("ClientCertRef", (this->client_cert_ref)->ToValue());

  }
  if (this->client_cert_type) {
    to_value_result.Set("ClientCertType", (this->client_cert_type)->ToValue());

  }
  if (this->comp_lzo) {
    to_value_result.Set("CompLZO", (this->comp_lzo)->ToValue());

  }
  if (this->comp_no_adapt) {
    to_value_result.Set("CompNoAdapt", (this->comp_no_adapt)->ToValue());

  }
  if (this->extra_hosts) {
    to_value_result.Set("ExtraHosts", (this->extra_hosts)->ToValue());

  }
  if (this->ignore_default_route) {
    to_value_result.Set("IgnoreDefaultRoute", (this->ignore_default_route)->ToValue());

  }
  if (this->key_direction) {
    to_value_result.Set("KeyDirection", (this->key_direction)->ToValue());

  }
  if (this->ns_cert_type) {
    to_value_result.Set("NsCertType", (this->ns_cert_type)->ToValue());

  }
  if (this->otp) {
    to_value_result.Set("OTP", (this->otp)->ToValue());

  }
  if (this->password) {
    to_value_result.Set("Password", (this->password)->ToValue());

  }
  if (this->port) {
    to_value_result.Set("Port", (this->port)->ToValue());

  }
  if (this->proto) {
    to_value_result.Set("Proto", (this->proto)->ToValue());

  }
  if (this->push_peer_info) {
    to_value_result.Set("PushPeerInfo", (this->push_peer_info)->ToValue());

  }
  if (this->remote_cert_eku) {
    to_value_result.Set("RemoteCertEKU", (this->remote_cert_eku)->ToValue());

  }
  if (this->remote_cert_ku) {
    to_value_result.Set("RemoteCertKU", (this->remote_cert_ku)->ToValue());

  }
  if (this->remote_cert_tls) {
    to_value_result.Set("RemoteCertTLS", (this->remote_cert_tls)->ToValue());

  }
  if (this->reneg_sec) {
    to_value_result.Set("RenegSec", (this->reneg_sec)->ToValue());

  }
  if (this->save_credentials) {
    to_value_result.Set("SaveCredentials", (this->save_credentials)->ToValue());

  }
  if (this->server_cape_ms) {
    to_value_result.Set("ServerCAPEMs", (this->server_cape_ms)->ToValue());

  }
  if (this->server_ca_refs) {
    to_value_result.Set("ServerCARefs", (this->server_ca_refs)->ToValue());

  }
  if (this->server_cert_ref) {
    to_value_result.Set("ServerCertRef", (this->server_cert_ref)->ToValue());

  }
  if (this->server_poll_timeout) {
    to_value_result.Set("ServerPollTimeout", (this->server_poll_timeout)->ToValue());

  }
  if (this->shaper) {
    to_value_result.Set("Shaper", (this->shaper)->ToValue());

  }
  if (this->static_challenge) {
    to_value_result.Set("StaticChallenge", (this->static_challenge)->ToValue());

  }
  if (this->tls_auth_contents) {
    to_value_result.Set("TLSAuthContents", (this->tls_auth_contents)->ToValue());

  }
  if (this->tls_remote) {
    to_value_result.Set("TLSRemote", (this->tls_remote)->ToValue());

  }
  if (this->tls_version_min) {
    to_value_result.Set("TLSVersionMin", (this->tls_version_min)->ToValue());

  }
  if (this->user_authentication_type) {
    to_value_result.Set("UserAuthenticationType", (this->user_authentication_type)->ToValue());

  }
  if (this->username) {
    to_value_result.Set("Username", (this->username)->ToValue());

  }
  if (this->verb) {
    to_value_result.Set("Verb", (this->verb)->ToValue());

  }
  if (this->verify_hash) {
    to_value_result.Set("VerifyHash", (this->verify_hash)->ToValue());

  }
  if (this->verify_x509) {
    to_value_result.Set("VerifyX509", (this->verify_x509)->ToValue());

  }

  return to_value_result;
}


SIMLockStatus::SIMLockStatus()
: lock_enabled(false) {}

SIMLockStatus::~SIMLockStatus() = default;
SIMLockStatus::SIMLockStatus(SIMLockStatus&& rhs) = default;
SIMLockStatus& SIMLockStatus::operator=(SIMLockStatus&& rhs) = default;
SIMLockStatus SIMLockStatus::Clone() const {
  SIMLockStatus out;
  out.lock_type = lock_type;
  out.lock_enabled = lock_enabled;
  out.retries_left = retries_left;
  return out;
}

// static
bool SIMLockStatus::Populate(
    const base::Value::Dict& dict, SIMLockStatus& out) {
  const base::Value* lock_type_value = dict.Find("LockType");
  if (!lock_type_value) {
    return false;
  }
  {
    auto* temp = (*lock_type_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.lock_type = *temp;
  }

  const base::Value* lock_enabled_value = dict.Find("LockEnabled");
  if (!lock_enabled_value) {
    return false;
  }
  {
    auto temp = (*lock_enabled_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.lock_enabled = *temp;
  }

  const base::Value* retries_left_value = dict.Find("RetriesLeft");
  if (retries_left_value) {
    {
      auto temp = (*retries_left_value).GetIfInt();
      if (!temp.has_value()) {
        out.retries_left = absl::nullopt;
        return false;
      }
      out.retries_left = *temp;
    }
  }

  return true;
}

// static
bool SIMLockStatus::Populate(
    const base::Value& value, SIMLockStatus& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<SIMLockStatus> SIMLockStatus::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<SIMLockStatus>();
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
absl::optional<SIMLockStatus> SIMLockStatus::FromValue(const base::Value::Dict& value) {
  SIMLockStatus out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<SIMLockStatus> SIMLockStatus::FromValue(const base::Value& value) {
  SIMLockStatus out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict SIMLockStatus::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("LockType", this->lock_type);

  to_value_result.Set("LockEnabled", this->lock_enabled);

  if (this->retries_left) {
    to_value_result.Set("RetriesLeft", *this->retries_left);

  }

  return to_value_result;
}


ThirdPartyVPNProperties::ThirdPartyVPNProperties()
 {}

ThirdPartyVPNProperties::~ThirdPartyVPNProperties() = default;
ThirdPartyVPNProperties::ThirdPartyVPNProperties(ThirdPartyVPNProperties&& rhs) = default;
ThirdPartyVPNProperties& ThirdPartyVPNProperties::operator=(ThirdPartyVPNProperties&& rhs) = default;
ThirdPartyVPNProperties ThirdPartyVPNProperties::Clone() const {
  ThirdPartyVPNProperties out;
  out.extension_id = extension_id;
  out.provider_name = provider_name;
  return out;
}

// static
bool ThirdPartyVPNProperties::Populate(
    const base::Value::Dict& dict, ThirdPartyVPNProperties& out) {
  const base::Value* extension_id_value = dict.Find("ExtensionID");
  if (!extension_id_value) {
    return false;
  }
  {
    auto* temp = (*extension_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.extension_id = *temp;
  }

  const base::Value* provider_name_value = dict.Find("ProviderName");
  if (provider_name_value) {
    {
      auto* temp = (*provider_name_value).GetIfString();
      if (!temp) {
        out.provider_name = absl::nullopt;
        return false;
      }
      out.provider_name = *temp;
    }
  }

  return true;
}

// static
bool ThirdPartyVPNProperties::Populate(
    const base::Value& value, ThirdPartyVPNProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ThirdPartyVPNProperties> ThirdPartyVPNProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ThirdPartyVPNProperties>();
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
absl::optional<ThirdPartyVPNProperties> ThirdPartyVPNProperties::FromValue(const base::Value::Dict& value) {
  ThirdPartyVPNProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ThirdPartyVPNProperties> ThirdPartyVPNProperties::FromValue(const base::Value& value) {
  ThirdPartyVPNProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ThirdPartyVPNProperties::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("ExtensionID", this->extension_id);

  if (this->provider_name) {
    to_value_result.Set("ProviderName", *this->provider_name);

  }

  return to_value_result;
}


ManagedThirdPartyVPNProperties::ManagedThirdPartyVPNProperties()
 {}

ManagedThirdPartyVPNProperties::~ManagedThirdPartyVPNProperties() = default;
ManagedThirdPartyVPNProperties::ManagedThirdPartyVPNProperties(ManagedThirdPartyVPNProperties&& rhs) = default;
ManagedThirdPartyVPNProperties& ManagedThirdPartyVPNProperties::operator=(ManagedThirdPartyVPNProperties&& rhs) = default;
ManagedThirdPartyVPNProperties ManagedThirdPartyVPNProperties::Clone() const {
  ManagedThirdPartyVPNProperties out;
  out.extension_id = extension_id.Clone();
  out.provider_name = provider_name;
  return out;
}

// static
bool ManagedThirdPartyVPNProperties::Populate(
    const base::Value::Dict& dict, ManagedThirdPartyVPNProperties& out) {
  const base::Value* extension_id_value = dict.Find("ExtensionID");
  if (!extension_id_value) {
    return false;
  }
  {
    if (!(*extension_id_value).is_dict()) {
      return false;
    }
    if (!ManagedDOMString::Populate((*extension_id_value).GetDict(), out.extension_id)) {
      return false;
    }
  }

  const base::Value* provider_name_value = dict.Find("ProviderName");
  if (provider_name_value) {
    {
      auto* temp = (*provider_name_value).GetIfString();
      if (!temp) {
        out.provider_name = absl::nullopt;
        return false;
      }
      out.provider_name = *temp;
    }
  }

  return true;
}

// static
bool ManagedThirdPartyVPNProperties::Populate(
    const base::Value& value, ManagedThirdPartyVPNProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ManagedThirdPartyVPNProperties> ManagedThirdPartyVPNProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ManagedThirdPartyVPNProperties>();
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
absl::optional<ManagedThirdPartyVPNProperties> ManagedThirdPartyVPNProperties::FromValue(const base::Value::Dict& value) {
  ManagedThirdPartyVPNProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ManagedThirdPartyVPNProperties> ManagedThirdPartyVPNProperties::FromValue(const base::Value& value) {
  ManagedThirdPartyVPNProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ManagedThirdPartyVPNProperties::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("ExtensionID", (this->extension_id).ToValue());

  if (this->provider_name) {
    to_value_result.Set("ProviderName", *this->provider_name);

  }

  return to_value_result;
}


CellularProperties::CellularProperties()
: activation_state() {}

CellularProperties::~CellularProperties() = default;
CellularProperties::CellularProperties(CellularProperties&& rhs) = default;
CellularProperties& CellularProperties::operator=(CellularProperties&& rhs) = default;
CellularProperties CellularProperties::Clone() const {
  CellularProperties out;
  out.auto_connect = auto_connect;
  if (apn) {
    out.apn = apn->Clone();
  }
  if (apn_list) {
    out.apn_list.emplace();
    out.apn_list->reserve(apn_list->size());
    for (const auto& element : *apn_list) {
      json_schema_compiler::util::AppendToContainer(*out.apn_list, element.Clone());
    }
  }
  out.activation_type = activation_type;
  out.activation_state = activation_state;
  out.allow_roaming = allow_roaming;
  out.esn = esn;
  out.family = family;
  out.firmware_revision = firmware_revision;
  if (found_networks) {
    out.found_networks.emplace();
    out.found_networks->reserve(found_networks->size());
    for (const auto& element : *found_networks) {
      json_schema_compiler::util::AppendToContainer(*out.found_networks, element.Clone());
    }
  }
  out.hardware_revision = hardware_revision;
  if (home_provider) {
    out.home_provider = home_provider->Clone();
  }
  out.iccid = iccid;
  out.imei = imei;
  if (last_good_apn) {
    out.last_good_apn = last_good_apn->Clone();
  }
  out.manufacturer = manufacturer;
  out.mdn = mdn;
  out.meid = meid;
  out.min = min;
  out.model_id = model_id;
  out.network_technology = network_technology;
  if (payment_portal) {
    out.payment_portal = payment_portal->Clone();
  }
  out.roaming_state = roaming_state;
  out.scanning = scanning;
  if (serving_operator) {
    out.serving_operator = serving_operator->Clone();
  }
  if (sim_lock_status) {
    out.sim_lock_status = sim_lock_status->Clone();
  }
  out.sim_present = sim_present;
  out.signal_strength = signal_strength;
  out.support_network_scan = support_network_scan;
  return out;
}

// static
bool CellularProperties::Populate(
    const base::Value::Dict& dict, CellularProperties& out) {
  out.activation_state = ActivationStateType();
  const base::Value* auto_connect_value = dict.Find("AutoConnect");
  if (auto_connect_value) {
    {
      auto temp = (*auto_connect_value).GetIfBool();
      if (!temp.has_value()) {
        out.auto_connect = absl::nullopt;
        return false;
      }
      out.auto_connect = *temp;
    }
  }

  const base::Value* apn_value = dict.Find("APN");
  if (apn_value) {
    {
      if (!(*apn_value).is_dict()) {
        return false;
      }
      else {
        APNProperties temp;
        if (!APNProperties::Populate((*apn_value).GetDict(), temp))
          return false;
        out.apn = std::move(temp);
      }
    }
  }

  const base::Value* apn_list_value = dict.Find("APNList");
  if (apn_list_value) {
    {
      if (!(*apn_list_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*apn_list_value).GetList(), out.apn_list)) {
          return false;
        }
      }
    }
  }

  const base::Value* activation_type_value = dict.Find("ActivationType");
  if (activation_type_value) {
    {
      auto* temp = (*activation_type_value).GetIfString();
      if (!temp) {
        out.activation_type = absl::nullopt;
        return false;
      }
      out.activation_type = *temp;
    }
  }

  const base::Value* activation_state_value = dict.Find("ActivationState");
  if (activation_state_value) {
    {
      const std::string* activation_state_type_as_string = (*activation_state_value).GetIfString();
      if (!activation_state_type_as_string) {
        return false;
      }
      out.activation_state = ParseActivationStateType(*activation_state_type_as_string);
      if (out.activation_state == ActivationStateType()) {
        return false;
      }
    }
    } else {
    out.activation_state = ActivationStateType();
  }

  const base::Value* allow_roaming_value = dict.Find("AllowRoaming");
  if (allow_roaming_value) {
    {
      auto temp = (*allow_roaming_value).GetIfBool();
      if (!temp.has_value()) {
        out.allow_roaming = absl::nullopt;
        return false;
      }
      out.allow_roaming = *temp;
    }
  }

  const base::Value* esn_value = dict.Find("ESN");
  if (esn_value) {
    {
      auto* temp = (*esn_value).GetIfString();
      if (!temp) {
        out.esn = absl::nullopt;
        return false;
      }
      out.esn = *temp;
    }
  }

  const base::Value* family_value = dict.Find("Family");
  if (family_value) {
    {
      auto* temp = (*family_value).GetIfString();
      if (!temp) {
        out.family = absl::nullopt;
        return false;
      }
      out.family = *temp;
    }
  }

  const base::Value* firmware_revision_value = dict.Find("FirmwareRevision");
  if (firmware_revision_value) {
    {
      auto* temp = (*firmware_revision_value).GetIfString();
      if (!temp) {
        out.firmware_revision = absl::nullopt;
        return false;
      }
      out.firmware_revision = *temp;
    }
  }

  const base::Value* found_networks_value = dict.Find("FoundNetworks");
  if (found_networks_value) {
    {
      if (!(*found_networks_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*found_networks_value).GetList(), out.found_networks)) {
          return false;
        }
      }
    }
  }

  const base::Value* hardware_revision_value = dict.Find("HardwareRevision");
  if (hardware_revision_value) {
    {
      auto* temp = (*hardware_revision_value).GetIfString();
      if (!temp) {
        out.hardware_revision = absl::nullopt;
        return false;
      }
      out.hardware_revision = *temp;
    }
  }

  const base::Value* home_provider_value = dict.Find("HomeProvider");
  if (home_provider_value) {
    {
      if (!(*home_provider_value).is_dict()) {
        return false;
      }
      else {
        CellularProviderProperties temp;
        if (!CellularProviderProperties::Populate((*home_provider_value).GetDict(), temp))
          return false;
        out.home_provider = std::move(temp);
      }
    }
  }

  const base::Value* iccid_value = dict.Find("ICCID");
  if (iccid_value) {
    {
      auto* temp = (*iccid_value).GetIfString();
      if (!temp) {
        out.iccid = absl::nullopt;
        return false;
      }
      out.iccid = *temp;
    }
  }

  const base::Value* imei_value = dict.Find("IMEI");
  if (imei_value) {
    {
      auto* temp = (*imei_value).GetIfString();
      if (!temp) {
        out.imei = absl::nullopt;
        return false;
      }
      out.imei = *temp;
    }
  }

  const base::Value* last_good_apn_value = dict.Find("LastGoodAPN");
  if (last_good_apn_value) {
    {
      if (!(*last_good_apn_value).is_dict()) {
        return false;
      }
      else {
        APNProperties temp;
        if (!APNProperties::Populate((*last_good_apn_value).GetDict(), temp))
          return false;
        out.last_good_apn = std::move(temp);
      }
    }
  }

  const base::Value* manufacturer_value = dict.Find("Manufacturer");
  if (manufacturer_value) {
    {
      auto* temp = (*manufacturer_value).GetIfString();
      if (!temp) {
        out.manufacturer = absl::nullopt;
        return false;
      }
      out.manufacturer = *temp;
    }
  }

  const base::Value* mdn_value = dict.Find("MDN");
  if (mdn_value) {
    {
      auto* temp = (*mdn_value).GetIfString();
      if (!temp) {
        out.mdn = absl::nullopt;
        return false;
      }
      out.mdn = *temp;
    }
  }

  const base::Value* meid_value = dict.Find("MEID");
  if (meid_value) {
    {
      auto* temp = (*meid_value).GetIfString();
      if (!temp) {
        out.meid = absl::nullopt;
        return false;
      }
      out.meid = *temp;
    }
  }

  const base::Value* min_value = dict.Find("MIN");
  if (min_value) {
    {
      auto* temp = (*min_value).GetIfString();
      if (!temp) {
        out.min = absl::nullopt;
        return false;
      }
      out.min = *temp;
    }
  }

  const base::Value* model_id_value = dict.Find("ModelID");
  if (model_id_value) {
    {
      auto* temp = (*model_id_value).GetIfString();
      if (!temp) {
        out.model_id = absl::nullopt;
        return false;
      }
      out.model_id = *temp;
    }
  }

  const base::Value* network_technology_value = dict.Find("NetworkTechnology");
  if (network_technology_value) {
    {
      auto* temp = (*network_technology_value).GetIfString();
      if (!temp) {
        out.network_technology = absl::nullopt;
        return false;
      }
      out.network_technology = *temp;
    }
  }

  const base::Value* payment_portal_value = dict.Find("PaymentPortal");
  if (payment_portal_value) {
    {
      if (!(*payment_portal_value).is_dict()) {
        return false;
      }
      else {
        PaymentPortal temp;
        if (!PaymentPortal::Populate((*payment_portal_value).GetDict(), temp))
          return false;
        out.payment_portal = std::move(temp);
      }
    }
  }

  const base::Value* roaming_state_value = dict.Find("RoamingState");
  if (roaming_state_value) {
    {
      auto* temp = (*roaming_state_value).GetIfString();
      if (!temp) {
        out.roaming_state = absl::nullopt;
        return false;
      }
      out.roaming_state = *temp;
    }
  }

  const base::Value* scanning_value = dict.Find("Scanning");
  if (scanning_value) {
    {
      auto temp = (*scanning_value).GetIfBool();
      if (!temp.has_value()) {
        out.scanning = absl::nullopt;
        return false;
      }
      out.scanning = *temp;
    }
  }

  const base::Value* serving_operator_value = dict.Find("ServingOperator");
  if (serving_operator_value) {
    {
      if (!(*serving_operator_value).is_dict()) {
        return false;
      }
      else {
        CellularProviderProperties temp;
        if (!CellularProviderProperties::Populate((*serving_operator_value).GetDict(), temp))
          return false;
        out.serving_operator = std::move(temp);
      }
    }
  }

  const base::Value* sim_lock_status_value = dict.Find("SIMLockStatus");
  if (sim_lock_status_value) {
    {
      if (!(*sim_lock_status_value).is_dict()) {
        return false;
      }
      else {
        SIMLockStatus temp;
        if (!SIMLockStatus::Populate((*sim_lock_status_value).GetDict(), temp))
          return false;
        out.sim_lock_status = std::move(temp);
      }
    }
  }

  const base::Value* sim_present_value = dict.Find("SIMPresent");
  if (sim_present_value) {
    {
      auto temp = (*sim_present_value).GetIfBool();
      if (!temp.has_value()) {
        out.sim_present = absl::nullopt;
        return false;
      }
      out.sim_present = *temp;
    }
  }

  const base::Value* signal_strength_value = dict.Find("SignalStrength");
  if (signal_strength_value) {
    {
      auto temp = (*signal_strength_value).GetIfInt();
      if (!temp.has_value()) {
        out.signal_strength = absl::nullopt;
        return false;
      }
      out.signal_strength = *temp;
    }
  }

  const base::Value* support_network_scan_value = dict.Find("SupportNetworkScan");
  if (support_network_scan_value) {
    {
      auto temp = (*support_network_scan_value).GetIfBool();
      if (!temp.has_value()) {
        out.support_network_scan = absl::nullopt;
        return false;
      }
      out.support_network_scan = *temp;
    }
  }

  return true;
}

// static
bool CellularProperties::Populate(
    const base::Value& value, CellularProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<CellularProperties> CellularProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<CellularProperties>();
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
absl::optional<CellularProperties> CellularProperties::FromValue(const base::Value::Dict& value) {
  CellularProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CellularProperties> CellularProperties::FromValue(const base::Value& value) {
  CellularProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict CellularProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->auto_connect) {
    to_value_result.Set("AutoConnect", *this->auto_connect);

  }
  if (this->apn) {
    to_value_result.Set("APN", (this->apn)->ToValue());

  }
  if (this->apn_list) {
    to_value_result.Set("APNList", json_schema_compiler::util::CreateValueFromArray(*this->apn_list));

  }
  if (this->activation_type) {
    to_value_result.Set("ActivationType", *this->activation_type);

  }
  if (this->activation_state != ActivationStateType()) {
    to_value_result.Set("ActivationState", networking_private::ToString(this->activation_state));

  }
  if (this->allow_roaming) {
    to_value_result.Set("AllowRoaming", *this->allow_roaming);

  }
  if (this->esn) {
    to_value_result.Set("ESN", *this->esn);

  }
  if (this->family) {
    to_value_result.Set("Family", *this->family);

  }
  if (this->firmware_revision) {
    to_value_result.Set("FirmwareRevision", *this->firmware_revision);

  }
  if (this->found_networks) {
    to_value_result.Set("FoundNetworks", json_schema_compiler::util::CreateValueFromArray(*this->found_networks));

  }
  if (this->hardware_revision) {
    to_value_result.Set("HardwareRevision", *this->hardware_revision);

  }
  if (this->home_provider) {
    to_value_result.Set("HomeProvider", (this->home_provider)->ToValue());

  }
  if (this->iccid) {
    to_value_result.Set("ICCID", *this->iccid);

  }
  if (this->imei) {
    to_value_result.Set("IMEI", *this->imei);

  }
  if (this->last_good_apn) {
    to_value_result.Set("LastGoodAPN", (this->last_good_apn)->ToValue());

  }
  if (this->manufacturer) {
    to_value_result.Set("Manufacturer", *this->manufacturer);

  }
  if (this->mdn) {
    to_value_result.Set("MDN", *this->mdn);

  }
  if (this->meid) {
    to_value_result.Set("MEID", *this->meid);

  }
  if (this->min) {
    to_value_result.Set("MIN", *this->min);

  }
  if (this->model_id) {
    to_value_result.Set("ModelID", *this->model_id);

  }
  if (this->network_technology) {
    to_value_result.Set("NetworkTechnology", *this->network_technology);

  }
  if (this->payment_portal) {
    to_value_result.Set("PaymentPortal", (this->payment_portal)->ToValue());

  }
  if (this->roaming_state) {
    to_value_result.Set("RoamingState", *this->roaming_state);

  }
  if (this->scanning) {
    to_value_result.Set("Scanning", *this->scanning);

  }
  if (this->serving_operator) {
    to_value_result.Set("ServingOperator", (this->serving_operator)->ToValue());

  }
  if (this->sim_lock_status) {
    to_value_result.Set("SIMLockStatus", (this->sim_lock_status)->ToValue());

  }
  if (this->sim_present) {
    to_value_result.Set("SIMPresent", *this->sim_present);

  }
  if (this->signal_strength) {
    to_value_result.Set("SignalStrength", *this->signal_strength);

  }
  if (this->support_network_scan) {
    to_value_result.Set("SupportNetworkScan", *this->support_network_scan);

  }

  return to_value_result;
}


ManagedCellularProperties::ManagedCellularProperties()
: activation_state() {}

ManagedCellularProperties::~ManagedCellularProperties() = default;
ManagedCellularProperties::ManagedCellularProperties(ManagedCellularProperties&& rhs) = default;
ManagedCellularProperties& ManagedCellularProperties::operator=(ManagedCellularProperties&& rhs) = default;
ManagedCellularProperties ManagedCellularProperties::Clone() const {
  ManagedCellularProperties out;
  if (auto_connect) {
    out.auto_connect = auto_connect->Clone();
  }
  if (apn) {
    out.apn = apn->Clone();
  }
  if (apn_list) {
    out.apn_list = apn_list->Clone();
  }
  out.activation_type = activation_type;
  out.activation_state = activation_state;
  out.allow_roaming = allow_roaming;
  out.esn = esn;
  out.family = family;
  out.firmware_revision = firmware_revision;
  if (found_networks) {
    out.found_networks.emplace();
    out.found_networks->reserve(found_networks->size());
    for (const auto& element : *found_networks) {
      json_schema_compiler::util::AppendToContainer(*out.found_networks, element.Clone());
    }
  }
  out.hardware_revision = hardware_revision;
  if (home_provider) {
    out.home_provider = home_provider->Clone();
  }
  out.iccid = iccid;
  out.imei = imei;
  if (last_good_apn) {
    out.last_good_apn = last_good_apn->Clone();
  }
  out.manufacturer = manufacturer;
  out.mdn = mdn;
  out.meid = meid;
  out.min = min;
  out.model_id = model_id;
  out.network_technology = network_technology;
  if (payment_portal) {
    out.payment_portal = payment_portal->Clone();
  }
  out.roaming_state = roaming_state;
  out.scanning = scanning;
  if (serving_operator) {
    out.serving_operator = serving_operator->Clone();
  }
  if (sim_lock_status) {
    out.sim_lock_status = sim_lock_status->Clone();
  }
  out.sim_present = sim_present;
  out.signal_strength = signal_strength;
  out.support_network_scan = support_network_scan;
  return out;
}

// static
bool ManagedCellularProperties::Populate(
    const base::Value::Dict& dict, ManagedCellularProperties& out) {
  out.activation_state = ActivationStateType();
  const base::Value* auto_connect_value = dict.Find("AutoConnect");
  if (auto_connect_value) {
    {
      if (!(*auto_connect_value).is_dict()) {
        return false;
      }
      else {
        ManagedBoolean temp;
        if (!ManagedBoolean::Populate((*auto_connect_value).GetDict(), temp))
          return false;
        out.auto_connect = std::move(temp);
      }
    }
  }

  const base::Value* apn_value = dict.Find("APN");
  if (apn_value) {
    {
      if (!(*apn_value).is_dict()) {
        return false;
      }
      else {
        ManagedAPNProperties temp;
        if (!ManagedAPNProperties::Populate((*apn_value).GetDict(), temp))
          return false;
        out.apn = std::move(temp);
      }
    }
  }

  const base::Value* apn_list_value = dict.Find("APNList");
  if (apn_list_value) {
    {
      if (!(*apn_list_value).is_dict()) {
        return false;
      }
      else {
        ManagedAPNList temp;
        if (!ManagedAPNList::Populate((*apn_list_value).GetDict(), temp))
          return false;
        out.apn_list = std::move(temp);
      }
    }
  }

  const base::Value* activation_type_value = dict.Find("ActivationType");
  if (activation_type_value) {
    {
      auto* temp = (*activation_type_value).GetIfString();
      if (!temp) {
        out.activation_type = absl::nullopt;
        return false;
      }
      out.activation_type = *temp;
    }
  }

  const base::Value* activation_state_value = dict.Find("ActivationState");
  if (activation_state_value) {
    {
      const std::string* activation_state_type_as_string = (*activation_state_value).GetIfString();
      if (!activation_state_type_as_string) {
        return false;
      }
      out.activation_state = ParseActivationStateType(*activation_state_type_as_string);
      if (out.activation_state == ActivationStateType()) {
        return false;
      }
    }
    } else {
    out.activation_state = ActivationStateType();
  }

  const base::Value* allow_roaming_value = dict.Find("AllowRoaming");
  if (allow_roaming_value) {
    {
      auto temp = (*allow_roaming_value).GetIfBool();
      if (!temp.has_value()) {
        out.allow_roaming = absl::nullopt;
        return false;
      }
      out.allow_roaming = *temp;
    }
  }

  const base::Value* esn_value = dict.Find("ESN");
  if (esn_value) {
    {
      auto* temp = (*esn_value).GetIfString();
      if (!temp) {
        out.esn = absl::nullopt;
        return false;
      }
      out.esn = *temp;
    }
  }

  const base::Value* family_value = dict.Find("Family");
  if (family_value) {
    {
      auto* temp = (*family_value).GetIfString();
      if (!temp) {
        out.family = absl::nullopt;
        return false;
      }
      out.family = *temp;
    }
  }

  const base::Value* firmware_revision_value = dict.Find("FirmwareRevision");
  if (firmware_revision_value) {
    {
      auto* temp = (*firmware_revision_value).GetIfString();
      if (!temp) {
        out.firmware_revision = absl::nullopt;
        return false;
      }
      out.firmware_revision = *temp;
    }
  }

  const base::Value* found_networks_value = dict.Find("FoundNetworks");
  if (found_networks_value) {
    {
      if (!(*found_networks_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*found_networks_value).GetList(), out.found_networks)) {
          return false;
        }
      }
    }
  }

  const base::Value* hardware_revision_value = dict.Find("HardwareRevision");
  if (hardware_revision_value) {
    {
      auto* temp = (*hardware_revision_value).GetIfString();
      if (!temp) {
        out.hardware_revision = absl::nullopt;
        return false;
      }
      out.hardware_revision = *temp;
    }
  }

  const base::Value* home_provider_value = dict.Find("HomeProvider");
  if (home_provider_value) {
    {
      if (!(*home_provider_value).is_dict()) {
        return false;
      }
      else {
        CellularProviderProperties temp;
        if (!CellularProviderProperties::Populate((*home_provider_value).GetDict(), temp))
          return false;
        out.home_provider = std::move(temp);
      }
    }
  }

  const base::Value* iccid_value = dict.Find("ICCID");
  if (iccid_value) {
    {
      auto* temp = (*iccid_value).GetIfString();
      if (!temp) {
        out.iccid = absl::nullopt;
        return false;
      }
      out.iccid = *temp;
    }
  }

  const base::Value* imei_value = dict.Find("IMEI");
  if (imei_value) {
    {
      auto* temp = (*imei_value).GetIfString();
      if (!temp) {
        out.imei = absl::nullopt;
        return false;
      }
      out.imei = *temp;
    }
  }

  const base::Value* last_good_apn_value = dict.Find("LastGoodAPN");
  if (last_good_apn_value) {
    {
      if (!(*last_good_apn_value).is_dict()) {
        return false;
      }
      else {
        APNProperties temp;
        if (!APNProperties::Populate((*last_good_apn_value).GetDict(), temp))
          return false;
        out.last_good_apn = std::move(temp);
      }
    }
  }

  const base::Value* manufacturer_value = dict.Find("Manufacturer");
  if (manufacturer_value) {
    {
      auto* temp = (*manufacturer_value).GetIfString();
      if (!temp) {
        out.manufacturer = absl::nullopt;
        return false;
      }
      out.manufacturer = *temp;
    }
  }

  const base::Value* mdn_value = dict.Find("MDN");
  if (mdn_value) {
    {
      auto* temp = (*mdn_value).GetIfString();
      if (!temp) {
        out.mdn = absl::nullopt;
        return false;
      }
      out.mdn = *temp;
    }
  }

  const base::Value* meid_value = dict.Find("MEID");
  if (meid_value) {
    {
      auto* temp = (*meid_value).GetIfString();
      if (!temp) {
        out.meid = absl::nullopt;
        return false;
      }
      out.meid = *temp;
    }
  }

  const base::Value* min_value = dict.Find("MIN");
  if (min_value) {
    {
      auto* temp = (*min_value).GetIfString();
      if (!temp) {
        out.min = absl::nullopt;
        return false;
      }
      out.min = *temp;
    }
  }

  const base::Value* model_id_value = dict.Find("ModelID");
  if (model_id_value) {
    {
      auto* temp = (*model_id_value).GetIfString();
      if (!temp) {
        out.model_id = absl::nullopt;
        return false;
      }
      out.model_id = *temp;
    }
  }

  const base::Value* network_technology_value = dict.Find("NetworkTechnology");
  if (network_technology_value) {
    {
      auto* temp = (*network_technology_value).GetIfString();
      if (!temp) {
        out.network_technology = absl::nullopt;
        return false;
      }
      out.network_technology = *temp;
    }
  }

  const base::Value* payment_portal_value = dict.Find("PaymentPortal");
  if (payment_portal_value) {
    {
      if (!(*payment_portal_value).is_dict()) {
        return false;
      }
      else {
        PaymentPortal temp;
        if (!PaymentPortal::Populate((*payment_portal_value).GetDict(), temp))
          return false;
        out.payment_portal = std::move(temp);
      }
    }
  }

  const base::Value* roaming_state_value = dict.Find("RoamingState");
  if (roaming_state_value) {
    {
      auto* temp = (*roaming_state_value).GetIfString();
      if (!temp) {
        out.roaming_state = absl::nullopt;
        return false;
      }
      out.roaming_state = *temp;
    }
  }

  const base::Value* scanning_value = dict.Find("Scanning");
  if (scanning_value) {
    {
      auto temp = (*scanning_value).GetIfBool();
      if (!temp.has_value()) {
        out.scanning = absl::nullopt;
        return false;
      }
      out.scanning = *temp;
    }
  }

  const base::Value* serving_operator_value = dict.Find("ServingOperator");
  if (serving_operator_value) {
    {
      if (!(*serving_operator_value).is_dict()) {
        return false;
      }
      else {
        CellularProviderProperties temp;
        if (!CellularProviderProperties::Populate((*serving_operator_value).GetDict(), temp))
          return false;
        out.serving_operator = std::move(temp);
      }
    }
  }

  const base::Value* sim_lock_status_value = dict.Find("SIMLockStatus");
  if (sim_lock_status_value) {
    {
      if (!(*sim_lock_status_value).is_dict()) {
        return false;
      }
      else {
        SIMLockStatus temp;
        if (!SIMLockStatus::Populate((*sim_lock_status_value).GetDict(), temp))
          return false;
        out.sim_lock_status = std::move(temp);
      }
    }
  }

  const base::Value* sim_present_value = dict.Find("SIMPresent");
  if (sim_present_value) {
    {
      auto temp = (*sim_present_value).GetIfBool();
      if (!temp.has_value()) {
        out.sim_present = absl::nullopt;
        return false;
      }
      out.sim_present = *temp;
    }
  }

  const base::Value* signal_strength_value = dict.Find("SignalStrength");
  if (signal_strength_value) {
    {
      auto temp = (*signal_strength_value).GetIfInt();
      if (!temp.has_value()) {
        out.signal_strength = absl::nullopt;
        return false;
      }
      out.signal_strength = *temp;
    }
  }

  const base::Value* support_network_scan_value = dict.Find("SupportNetworkScan");
  if (support_network_scan_value) {
    {
      auto temp = (*support_network_scan_value).GetIfBool();
      if (!temp.has_value()) {
        out.support_network_scan = absl::nullopt;
        return false;
      }
      out.support_network_scan = *temp;
    }
  }

  return true;
}

// static
bool ManagedCellularProperties::Populate(
    const base::Value& value, ManagedCellularProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ManagedCellularProperties> ManagedCellularProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ManagedCellularProperties>();
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
absl::optional<ManagedCellularProperties> ManagedCellularProperties::FromValue(const base::Value::Dict& value) {
  ManagedCellularProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ManagedCellularProperties> ManagedCellularProperties::FromValue(const base::Value& value) {
  ManagedCellularProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ManagedCellularProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->auto_connect) {
    to_value_result.Set("AutoConnect", (this->auto_connect)->ToValue());

  }
  if (this->apn) {
    to_value_result.Set("APN", (this->apn)->ToValue());

  }
  if (this->apn_list) {
    to_value_result.Set("APNList", (this->apn_list)->ToValue());

  }
  if (this->activation_type) {
    to_value_result.Set("ActivationType", *this->activation_type);

  }
  if (this->activation_state != ActivationStateType()) {
    to_value_result.Set("ActivationState", networking_private::ToString(this->activation_state));

  }
  if (this->allow_roaming) {
    to_value_result.Set("AllowRoaming", *this->allow_roaming);

  }
  if (this->esn) {
    to_value_result.Set("ESN", *this->esn);

  }
  if (this->family) {
    to_value_result.Set("Family", *this->family);

  }
  if (this->firmware_revision) {
    to_value_result.Set("FirmwareRevision", *this->firmware_revision);

  }
  if (this->found_networks) {
    to_value_result.Set("FoundNetworks", json_schema_compiler::util::CreateValueFromArray(*this->found_networks));

  }
  if (this->hardware_revision) {
    to_value_result.Set("HardwareRevision", *this->hardware_revision);

  }
  if (this->home_provider) {
    to_value_result.Set("HomeProvider", (this->home_provider)->ToValue());

  }
  if (this->iccid) {
    to_value_result.Set("ICCID", *this->iccid);

  }
  if (this->imei) {
    to_value_result.Set("IMEI", *this->imei);

  }
  if (this->last_good_apn) {
    to_value_result.Set("LastGoodAPN", (this->last_good_apn)->ToValue());

  }
  if (this->manufacturer) {
    to_value_result.Set("Manufacturer", *this->manufacturer);

  }
  if (this->mdn) {
    to_value_result.Set("MDN", *this->mdn);

  }
  if (this->meid) {
    to_value_result.Set("MEID", *this->meid);

  }
  if (this->min) {
    to_value_result.Set("MIN", *this->min);

  }
  if (this->model_id) {
    to_value_result.Set("ModelID", *this->model_id);

  }
  if (this->network_technology) {
    to_value_result.Set("NetworkTechnology", *this->network_technology);

  }
  if (this->payment_portal) {
    to_value_result.Set("PaymentPortal", (this->payment_portal)->ToValue());

  }
  if (this->roaming_state) {
    to_value_result.Set("RoamingState", *this->roaming_state);

  }
  if (this->scanning) {
    to_value_result.Set("Scanning", *this->scanning);

  }
  if (this->serving_operator) {
    to_value_result.Set("ServingOperator", (this->serving_operator)->ToValue());

  }
  if (this->sim_lock_status) {
    to_value_result.Set("SIMLockStatus", (this->sim_lock_status)->ToValue());

  }
  if (this->sim_present) {
    to_value_result.Set("SIMPresent", *this->sim_present);

  }
  if (this->signal_strength) {
    to_value_result.Set("SignalStrength", *this->signal_strength);

  }
  if (this->support_network_scan) {
    to_value_result.Set("SupportNetworkScan", *this->support_network_scan);

  }

  return to_value_result;
}


CellularStateProperties::CellularStateProperties()
: activation_state() {}

CellularStateProperties::~CellularStateProperties() = default;
CellularStateProperties::CellularStateProperties(CellularStateProperties&& rhs) = default;
CellularStateProperties& CellularStateProperties::operator=(CellularStateProperties&& rhs) = default;
CellularStateProperties CellularStateProperties::Clone() const {
  CellularStateProperties out;
  out.activation_state = activation_state;
  out.eid = eid;
  out.iccid = iccid;
  out.network_technology = network_technology;
  out.roaming_state = roaming_state;
  out.scanning = scanning;
  out.sim_present = sim_present;
  out.signal_strength = signal_strength;
  return out;
}

// static
bool CellularStateProperties::Populate(
    const base::Value::Dict& dict, CellularStateProperties& out) {
  out.activation_state = ActivationStateType();
  const base::Value* activation_state_value = dict.Find("ActivationState");
  if (activation_state_value) {
    {
      const std::string* activation_state_type_as_string = (*activation_state_value).GetIfString();
      if (!activation_state_type_as_string) {
        return false;
      }
      out.activation_state = ParseActivationStateType(*activation_state_type_as_string);
      if (out.activation_state == ActivationStateType()) {
        return false;
      }
    }
    } else {
    out.activation_state = ActivationStateType();
  }

  const base::Value* eid_value = dict.Find("EID");
  if (eid_value) {
    {
      auto* temp = (*eid_value).GetIfString();
      if (!temp) {
        out.eid = absl::nullopt;
        return false;
      }
      out.eid = *temp;
    }
  }

  const base::Value* iccid_value = dict.Find("ICCID");
  if (iccid_value) {
    {
      auto* temp = (*iccid_value).GetIfString();
      if (!temp) {
        out.iccid = absl::nullopt;
        return false;
      }
      out.iccid = *temp;
    }
  }

  const base::Value* network_technology_value = dict.Find("NetworkTechnology");
  if (network_technology_value) {
    {
      auto* temp = (*network_technology_value).GetIfString();
      if (!temp) {
        out.network_technology = absl::nullopt;
        return false;
      }
      out.network_technology = *temp;
    }
  }

  const base::Value* roaming_state_value = dict.Find("RoamingState");
  if (roaming_state_value) {
    {
      auto* temp = (*roaming_state_value).GetIfString();
      if (!temp) {
        out.roaming_state = absl::nullopt;
        return false;
      }
      out.roaming_state = *temp;
    }
  }

  const base::Value* scanning_value = dict.Find("Scanning");
  if (scanning_value) {
    {
      auto temp = (*scanning_value).GetIfBool();
      if (!temp.has_value()) {
        out.scanning = absl::nullopt;
        return false;
      }
      out.scanning = *temp;
    }
  }

  const base::Value* sim_present_value = dict.Find("SIMPresent");
  if (sim_present_value) {
    {
      auto temp = (*sim_present_value).GetIfBool();
      if (!temp.has_value()) {
        out.sim_present = absl::nullopt;
        return false;
      }
      out.sim_present = *temp;
    }
  }

  const base::Value* signal_strength_value = dict.Find("SignalStrength");
  if (signal_strength_value) {
    {
      auto temp = (*signal_strength_value).GetIfInt();
      if (!temp.has_value()) {
        out.signal_strength = absl::nullopt;
        return false;
      }
      out.signal_strength = *temp;
    }
  }

  return true;
}

// static
bool CellularStateProperties::Populate(
    const base::Value& value, CellularStateProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<CellularStateProperties> CellularStateProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<CellularStateProperties>();
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
absl::optional<CellularStateProperties> CellularStateProperties::FromValue(const base::Value::Dict& value) {
  CellularStateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CellularStateProperties> CellularStateProperties::FromValue(const base::Value& value) {
  CellularStateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict CellularStateProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->activation_state != ActivationStateType()) {
    to_value_result.Set("ActivationState", networking_private::ToString(this->activation_state));

  }
  if (this->eid) {
    to_value_result.Set("EID", *this->eid);

  }
  if (this->iccid) {
    to_value_result.Set("ICCID", *this->iccid);

  }
  if (this->network_technology) {
    to_value_result.Set("NetworkTechnology", *this->network_technology);

  }
  if (this->roaming_state) {
    to_value_result.Set("RoamingState", *this->roaming_state);

  }
  if (this->scanning) {
    to_value_result.Set("Scanning", *this->scanning);

  }
  if (this->sim_present) {
    to_value_result.Set("SIMPresent", *this->sim_present);

  }
  if (this->signal_strength) {
    to_value_result.Set("SignalStrength", *this->signal_strength);

  }

  return to_value_result;
}


EAPStateProperties::EAPStateProperties()
 {}

EAPStateProperties::~EAPStateProperties() = default;
EAPStateProperties::EAPStateProperties(EAPStateProperties&& rhs) = default;
EAPStateProperties& EAPStateProperties::operator=(EAPStateProperties&& rhs) = default;
EAPStateProperties EAPStateProperties::Clone() const {
  EAPStateProperties out;
  out.outer = outer;
  return out;
}

// static
bool EAPStateProperties::Populate(
    const base::Value::Dict& dict, EAPStateProperties& out) {
  const base::Value* outer_value = dict.Find("Outer");
  if (outer_value) {
    {
      auto* temp = (*outer_value).GetIfString();
      if (!temp) {
        out.outer = absl::nullopt;
        return false;
      }
      out.outer = *temp;
    }
  }

  return true;
}

// static
bool EAPStateProperties::Populate(
    const base::Value& value, EAPStateProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<EAPStateProperties> EAPStateProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<EAPStateProperties>();
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
absl::optional<EAPStateProperties> EAPStateProperties::FromValue(const base::Value::Dict& value) {
  EAPStateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<EAPStateProperties> EAPStateProperties::FromValue(const base::Value& value) {
  EAPStateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict EAPStateProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->outer) {
    to_value_result.Set("Outer", *this->outer);

  }

  return to_value_result;
}


EthernetProperties::EthernetProperties()
 {}

EthernetProperties::~EthernetProperties() = default;
EthernetProperties::EthernetProperties(EthernetProperties&& rhs) = default;
EthernetProperties& EthernetProperties::operator=(EthernetProperties&& rhs) = default;
EthernetProperties EthernetProperties::Clone() const {
  EthernetProperties out;
  out.auto_connect = auto_connect;
  out.authentication = authentication;
  if (eap) {
    out.eap = eap->Clone();
  }
  return out;
}

// static
bool EthernetProperties::Populate(
    const base::Value::Dict& dict, EthernetProperties& out) {
  const base::Value* auto_connect_value = dict.Find("AutoConnect");
  if (auto_connect_value) {
    {
      auto temp = (*auto_connect_value).GetIfBool();
      if (!temp.has_value()) {
        out.auto_connect = absl::nullopt;
        return false;
      }
      out.auto_connect = *temp;
    }
  }

  const base::Value* authentication_value = dict.Find("Authentication");
  if (authentication_value) {
    {
      auto* temp = (*authentication_value).GetIfString();
      if (!temp) {
        out.authentication = absl::nullopt;
        return false;
      }
      out.authentication = *temp;
    }
  }

  const base::Value* eap_value = dict.Find("EAP");
  if (eap_value) {
    {
      if (!(*eap_value).is_dict()) {
        return false;
      }
      else {
        EAPProperties temp;
        if (!EAPProperties::Populate((*eap_value).GetDict(), temp))
          return false;
        out.eap = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool EthernetProperties::Populate(
    const base::Value& value, EthernetProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<EthernetProperties> EthernetProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<EthernetProperties>();
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
absl::optional<EthernetProperties> EthernetProperties::FromValue(const base::Value::Dict& value) {
  EthernetProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<EthernetProperties> EthernetProperties::FromValue(const base::Value& value) {
  EthernetProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict EthernetProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->auto_connect) {
    to_value_result.Set("AutoConnect", *this->auto_connect);

  }
  if (this->authentication) {
    to_value_result.Set("Authentication", *this->authentication);

  }
  if (this->eap) {
    to_value_result.Set("EAP", (this->eap)->ToValue());

  }

  return to_value_result;
}


ManagedEthernetProperties::ManagedEthernetProperties()
 {}

ManagedEthernetProperties::~ManagedEthernetProperties() = default;
ManagedEthernetProperties::ManagedEthernetProperties(ManagedEthernetProperties&& rhs) = default;
ManagedEthernetProperties& ManagedEthernetProperties::operator=(ManagedEthernetProperties&& rhs) = default;
ManagedEthernetProperties ManagedEthernetProperties::Clone() const {
  ManagedEthernetProperties out;
  if (auto_connect) {
    out.auto_connect = auto_connect->Clone();
  }
  if (authentication) {
    out.authentication = authentication->Clone();
  }
  if (eap) {
    out.eap = eap->Clone();
  }
  return out;
}

// static
bool ManagedEthernetProperties::Populate(
    const base::Value::Dict& dict, ManagedEthernetProperties& out) {
  const base::Value* auto_connect_value = dict.Find("AutoConnect");
  if (auto_connect_value) {
    {
      if (!(*auto_connect_value).is_dict()) {
        return false;
      }
      else {
        ManagedBoolean temp;
        if (!ManagedBoolean::Populate((*auto_connect_value).GetDict(), temp))
          return false;
        out.auto_connect = std::move(temp);
      }
    }
  }

  const base::Value* authentication_value = dict.Find("Authentication");
  if (authentication_value) {
    {
      if (!(*authentication_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*authentication_value).GetDict(), temp))
          return false;
        out.authentication = std::move(temp);
      }
    }
  }

  const base::Value* eap_value = dict.Find("EAP");
  if (eap_value) {
    {
      if (!(*eap_value).is_dict()) {
        return false;
      }
      else {
        ManagedEAPProperties temp;
        if (!ManagedEAPProperties::Populate((*eap_value).GetDict(), temp))
          return false;
        out.eap = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool ManagedEthernetProperties::Populate(
    const base::Value& value, ManagedEthernetProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ManagedEthernetProperties> ManagedEthernetProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ManagedEthernetProperties>();
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
absl::optional<ManagedEthernetProperties> ManagedEthernetProperties::FromValue(const base::Value::Dict& value) {
  ManagedEthernetProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ManagedEthernetProperties> ManagedEthernetProperties::FromValue(const base::Value& value) {
  ManagedEthernetProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ManagedEthernetProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->auto_connect) {
    to_value_result.Set("AutoConnect", (this->auto_connect)->ToValue());

  }
  if (this->authentication) {
    to_value_result.Set("Authentication", (this->authentication)->ToValue());

  }
  if (this->eap) {
    to_value_result.Set("EAP", (this->eap)->ToValue());

  }

  return to_value_result;
}


EthernetStateProperties::EthernetStateProperties()
 {}

EthernetStateProperties::~EthernetStateProperties() = default;
EthernetStateProperties::EthernetStateProperties(EthernetStateProperties&& rhs) = default;
EthernetStateProperties& EthernetStateProperties::operator=(EthernetStateProperties&& rhs) = default;
EthernetStateProperties EthernetStateProperties::Clone() const {
  EthernetStateProperties out;
  out.authentication = authentication;
  return out;
}

// static
bool EthernetStateProperties::Populate(
    const base::Value::Dict& dict, EthernetStateProperties& out) {
  const base::Value* authentication_value = dict.Find("Authentication");
  if (!authentication_value) {
    return false;
  }
  {
    auto* temp = (*authentication_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.authentication = *temp;
  }

  return true;
}

// static
bool EthernetStateProperties::Populate(
    const base::Value& value, EthernetStateProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<EthernetStateProperties> EthernetStateProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<EthernetStateProperties>();
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
absl::optional<EthernetStateProperties> EthernetStateProperties::FromValue(const base::Value::Dict& value) {
  EthernetStateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<EthernetStateProperties> EthernetStateProperties::FromValue(const base::Value& value) {
  EthernetStateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict EthernetStateProperties::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("Authentication", this->authentication);


  return to_value_result;
}


TetherProperties::TetherProperties()
: has_connected_to_host(false) {}

TetherProperties::~TetherProperties() = default;
TetherProperties::TetherProperties(TetherProperties&& rhs) = default;
TetherProperties& TetherProperties::operator=(TetherProperties&& rhs) = default;
TetherProperties TetherProperties::Clone() const {
  TetherProperties out;
  out.battery_percentage = battery_percentage;
  out.carrier = carrier;
  out.has_connected_to_host = has_connected_to_host;
  out.signal_strength = signal_strength;
  return out;
}

// static
bool TetherProperties::Populate(
    const base::Value::Dict& dict, TetherProperties& out) {
  const base::Value* battery_percentage_value = dict.Find("BatteryPercentage");
  if (battery_percentage_value) {
    {
      auto temp = (*battery_percentage_value).GetIfInt();
      if (!temp.has_value()) {
        out.battery_percentage = absl::nullopt;
        return false;
      }
      out.battery_percentage = *temp;
    }
  }

  const base::Value* carrier_value = dict.Find("Carrier");
  if (carrier_value) {
    {
      auto* temp = (*carrier_value).GetIfString();
      if (!temp) {
        out.carrier = absl::nullopt;
        return false;
      }
      out.carrier = *temp;
    }
  }

  const base::Value* has_connected_to_host_value = dict.Find("HasConnectedToHost");
  if (!has_connected_to_host_value) {
    return false;
  }
  {
    auto temp = (*has_connected_to_host_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.has_connected_to_host = *temp;
  }

  const base::Value* signal_strength_value = dict.Find("SignalStrength");
  if (signal_strength_value) {
    {
      auto temp = (*signal_strength_value).GetIfInt();
      if (!temp.has_value()) {
        out.signal_strength = absl::nullopt;
        return false;
      }
      out.signal_strength = *temp;
    }
  }

  return true;
}

// static
bool TetherProperties::Populate(
    const base::Value& value, TetherProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<TetherProperties> TetherProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<TetherProperties>();
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
absl::optional<TetherProperties> TetherProperties::FromValue(const base::Value::Dict& value) {
  TetherProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<TetherProperties> TetherProperties::FromValue(const base::Value& value) {
  TetherProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict TetherProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->battery_percentage) {
    to_value_result.Set("BatteryPercentage", *this->battery_percentage);

  }
  if (this->carrier) {
    to_value_result.Set("Carrier", *this->carrier);

  }
  to_value_result.Set("HasConnectedToHost", this->has_connected_to_host);

  if (this->signal_strength) {
    to_value_result.Set("SignalStrength", *this->signal_strength);

  }

  return to_value_result;
}


VPNProperties::VPNProperties()
 {}

VPNProperties::~VPNProperties() = default;
VPNProperties::VPNProperties(VPNProperties&& rhs) = default;
VPNProperties& VPNProperties::operator=(VPNProperties&& rhs) = default;
VPNProperties VPNProperties::Clone() const {
  VPNProperties out;
  out.auto_connect = auto_connect;
  out.host = host;
  if (i_psec) {
    out.i_psec = i_psec->Clone();
  }
  if (l2tp) {
    out.l2tp = l2tp->Clone();
  }
  if (open_vpn) {
    out.open_vpn = open_vpn->Clone();
  }
  if (third_party_vpn) {
    out.third_party_vpn = third_party_vpn->Clone();
  }
  out.type = type;
  return out;
}

// static
bool VPNProperties::Populate(
    const base::Value::Dict& dict, VPNProperties& out) {
  const base::Value* auto_connect_value = dict.Find("AutoConnect");
  if (auto_connect_value) {
    {
      auto temp = (*auto_connect_value).GetIfBool();
      if (!temp.has_value()) {
        out.auto_connect = absl::nullopt;
        return false;
      }
      out.auto_connect = *temp;
    }
  }

  const base::Value* host_value = dict.Find("Host");
  if (host_value) {
    {
      auto* temp = (*host_value).GetIfString();
      if (!temp) {
        out.host = absl::nullopt;
        return false;
      }
      out.host = *temp;
    }
  }

  const base::Value* i_psec_value = dict.Find("IPsec");
  if (i_psec_value) {
    {
      if (!(*i_psec_value).is_dict()) {
        return false;
      }
      else {
        IPSecProperties temp;
        if (!IPSecProperties::Populate((*i_psec_value).GetDict(), temp))
          return false;
        out.i_psec = std::move(temp);
      }
    }
  }

  const base::Value* l2tp_value = dict.Find("L2TP");
  if (l2tp_value) {
    {
      if (!(*l2tp_value).is_dict()) {
        return false;
      }
      else {
        L2TPProperties temp;
        if (!L2TPProperties::Populate((*l2tp_value).GetDict(), temp))
          return false;
        out.l2tp = std::move(temp);
      }
    }
  }

  const base::Value* open_vpn_value = dict.Find("OpenVPN");
  if (open_vpn_value) {
    {
      if (!(*open_vpn_value).is_dict()) {
        return false;
      }
      else {
        OpenVPNProperties temp;
        if (!OpenVPNProperties::Populate((*open_vpn_value).GetDict(), temp))
          return false;
        out.open_vpn = std::move(temp);
      }
    }
  }

  const base::Value* third_party_vpn_value = dict.Find("ThirdPartyVPN");
  if (third_party_vpn_value) {
    {
      if (!(*third_party_vpn_value).is_dict()) {
        return false;
      }
      else {
        ThirdPartyVPNProperties temp;
        if (!ThirdPartyVPNProperties::Populate((*third_party_vpn_value).GetDict(), temp))
          return false;
        out.third_party_vpn = std::move(temp);
      }
    }
  }

  const base::Value* type_value = dict.Find("Type");
  if (type_value) {
    {
      auto* temp = (*type_value).GetIfString();
      if (!temp) {
        out.type = absl::nullopt;
        return false;
      }
      out.type = *temp;
    }
  }

  return true;
}

// static
bool VPNProperties::Populate(
    const base::Value& value, VPNProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<VPNProperties> VPNProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<VPNProperties>();
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
absl::optional<VPNProperties> VPNProperties::FromValue(const base::Value::Dict& value) {
  VPNProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<VPNProperties> VPNProperties::FromValue(const base::Value& value) {
  VPNProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict VPNProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->auto_connect) {
    to_value_result.Set("AutoConnect", *this->auto_connect);

  }
  if (this->host) {
    to_value_result.Set("Host", *this->host);

  }
  if (this->i_psec) {
    to_value_result.Set("IPsec", (this->i_psec)->ToValue());

  }
  if (this->l2tp) {
    to_value_result.Set("L2TP", (this->l2tp)->ToValue());

  }
  if (this->open_vpn) {
    to_value_result.Set("OpenVPN", (this->open_vpn)->ToValue());

  }
  if (this->third_party_vpn) {
    to_value_result.Set("ThirdPartyVPN", (this->third_party_vpn)->ToValue());

  }
  if (this->type) {
    to_value_result.Set("Type", *this->type);

  }

  return to_value_result;
}


ManagedVPNProperties::ManagedVPNProperties()
 {}

ManagedVPNProperties::~ManagedVPNProperties() = default;
ManagedVPNProperties::ManagedVPNProperties(ManagedVPNProperties&& rhs) = default;
ManagedVPNProperties& ManagedVPNProperties::operator=(ManagedVPNProperties&& rhs) = default;
ManagedVPNProperties ManagedVPNProperties::Clone() const {
  ManagedVPNProperties out;
  if (auto_connect) {
    out.auto_connect = auto_connect->Clone();
  }
  if (host) {
    out.host = host->Clone();
  }
  if (i_psec) {
    out.i_psec = i_psec->Clone();
  }
  if (l2tp) {
    out.l2tp = l2tp->Clone();
  }
  if (open_vpn) {
    out.open_vpn = open_vpn->Clone();
  }
  if (third_party_vpn) {
    out.third_party_vpn = third_party_vpn->Clone();
  }
  if (type) {
    out.type = type->Clone();
  }
  return out;
}

// static
bool ManagedVPNProperties::Populate(
    const base::Value::Dict& dict, ManagedVPNProperties& out) {
  const base::Value* auto_connect_value = dict.Find("AutoConnect");
  if (auto_connect_value) {
    {
      if (!(*auto_connect_value).is_dict()) {
        return false;
      }
      else {
        ManagedBoolean temp;
        if (!ManagedBoolean::Populate((*auto_connect_value).GetDict(), temp))
          return false;
        out.auto_connect = std::move(temp);
      }
    }
  }

  const base::Value* host_value = dict.Find("Host");
  if (host_value) {
    {
      if (!(*host_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*host_value).GetDict(), temp))
          return false;
        out.host = std::move(temp);
      }
    }
  }

  const base::Value* i_psec_value = dict.Find("IPsec");
  if (i_psec_value) {
    {
      if (!(*i_psec_value).is_dict()) {
        return false;
      }
      else {
        ManagedIPSecProperties temp;
        if (!ManagedIPSecProperties::Populate((*i_psec_value).GetDict(), temp))
          return false;
        out.i_psec = std::move(temp);
      }
    }
  }

  const base::Value* l2tp_value = dict.Find("L2TP");
  if (l2tp_value) {
    {
      if (!(*l2tp_value).is_dict()) {
        return false;
      }
      else {
        ManagedL2TPProperties temp;
        if (!ManagedL2TPProperties::Populate((*l2tp_value).GetDict(), temp))
          return false;
        out.l2tp = std::move(temp);
      }
    }
  }

  const base::Value* open_vpn_value = dict.Find("OpenVPN");
  if (open_vpn_value) {
    {
      if (!(*open_vpn_value).is_dict()) {
        return false;
      }
      else {
        ManagedOpenVPNProperties temp;
        if (!ManagedOpenVPNProperties::Populate((*open_vpn_value).GetDict(), temp))
          return false;
        out.open_vpn = std::move(temp);
      }
    }
  }

  const base::Value* third_party_vpn_value = dict.Find("ThirdPartyVPN");
  if (third_party_vpn_value) {
    {
      if (!(*third_party_vpn_value).is_dict()) {
        return false;
      }
      else {
        ManagedThirdPartyVPNProperties temp;
        if (!ManagedThirdPartyVPNProperties::Populate((*third_party_vpn_value).GetDict(), temp))
          return false;
        out.third_party_vpn = std::move(temp);
      }
    }
  }

  const base::Value* type_value = dict.Find("Type");
  if (type_value) {
    {
      if (!(*type_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*type_value).GetDict(), temp))
          return false;
        out.type = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool ManagedVPNProperties::Populate(
    const base::Value& value, ManagedVPNProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ManagedVPNProperties> ManagedVPNProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ManagedVPNProperties>();
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
absl::optional<ManagedVPNProperties> ManagedVPNProperties::FromValue(const base::Value::Dict& value) {
  ManagedVPNProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ManagedVPNProperties> ManagedVPNProperties::FromValue(const base::Value& value) {
  ManagedVPNProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ManagedVPNProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->auto_connect) {
    to_value_result.Set("AutoConnect", (this->auto_connect)->ToValue());

  }
  if (this->host) {
    to_value_result.Set("Host", (this->host)->ToValue());

  }
  if (this->i_psec) {
    to_value_result.Set("IPsec", (this->i_psec)->ToValue());

  }
  if (this->l2tp) {
    to_value_result.Set("L2TP", (this->l2tp)->ToValue());

  }
  if (this->open_vpn) {
    to_value_result.Set("OpenVPN", (this->open_vpn)->ToValue());

  }
  if (this->third_party_vpn) {
    to_value_result.Set("ThirdPartyVPN", (this->third_party_vpn)->ToValue());

  }
  if (this->type) {
    to_value_result.Set("Type", (this->type)->ToValue());

  }

  return to_value_result;
}


VPNStateProperties::VPNStateProperties()
 {}

VPNStateProperties::~VPNStateProperties() = default;
VPNStateProperties::VPNStateProperties(VPNStateProperties&& rhs) = default;
VPNStateProperties& VPNStateProperties::operator=(VPNStateProperties&& rhs) = default;
VPNStateProperties VPNStateProperties::Clone() const {
  VPNStateProperties out;
  out.type = type;
  if (i_psec) {
    out.i_psec = i_psec->Clone();
  }
  if (third_party_vpn) {
    out.third_party_vpn = third_party_vpn->Clone();
  }
  return out;
}

// static
bool VPNStateProperties::Populate(
    const base::Value::Dict& dict, VPNStateProperties& out) {
  const base::Value* type_value = dict.Find("Type");
  if (!type_value) {
    return false;
  }
  {
    auto* temp = (*type_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.type = *temp;
  }

  const base::Value* i_psec_value = dict.Find("IPsec");
  if (i_psec_value) {
    {
      if (!(*i_psec_value).is_dict()) {
        return false;
      }
      else {
        IPSecProperties temp;
        if (!IPSecProperties::Populate((*i_psec_value).GetDict(), temp))
          return false;
        out.i_psec = std::move(temp);
      }
    }
  }

  const base::Value* third_party_vpn_value = dict.Find("ThirdPartyVPN");
  if (third_party_vpn_value) {
    {
      if (!(*third_party_vpn_value).is_dict()) {
        return false;
      }
      else {
        ThirdPartyVPNProperties temp;
        if (!ThirdPartyVPNProperties::Populate((*third_party_vpn_value).GetDict(), temp))
          return false;
        out.third_party_vpn = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool VPNStateProperties::Populate(
    const base::Value& value, VPNStateProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<VPNStateProperties> VPNStateProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<VPNStateProperties>();
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
absl::optional<VPNStateProperties> VPNStateProperties::FromValue(const base::Value::Dict& value) {
  VPNStateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<VPNStateProperties> VPNStateProperties::FromValue(const base::Value& value) {
  VPNStateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict VPNStateProperties::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("Type", this->type);

  if (this->i_psec) {
    to_value_result.Set("IPsec", (this->i_psec)->ToValue());

  }
  if (this->third_party_vpn) {
    to_value_result.Set("ThirdPartyVPN", (this->third_party_vpn)->ToValue());

  }

  return to_value_result;
}


WiFiProperties::WiFiProperties()
 {}

WiFiProperties::~WiFiProperties() = default;
WiFiProperties::WiFiProperties(WiFiProperties&& rhs) = default;
WiFiProperties& WiFiProperties::operator=(WiFiProperties&& rhs) = default;
WiFiProperties WiFiProperties::Clone() const {
  WiFiProperties out;
  out.allow_gateway_arp_polling = allow_gateway_arp_polling;
  out.auto_connect = auto_connect;
  out.bssid = bssid;
  if (eap) {
    out.eap = eap->Clone();
  }
  out.frequency = frequency;
  out.frequency_list = frequency_list;
  out.hex_ssid = hex_ssid;
  out.hidden_ssid = hidden_ssid;
  out.passphrase = passphrase;
  out.ssid = ssid;
  out.security = security;
  out.signal_strength = signal_strength;
  return out;
}

// static
bool WiFiProperties::Populate(
    const base::Value::Dict& dict, WiFiProperties& out) {
  const base::Value* allow_gateway_arp_polling_value = dict.Find("AllowGatewayARPPolling");
  if (allow_gateway_arp_polling_value) {
    {
      auto temp = (*allow_gateway_arp_polling_value).GetIfBool();
      if (!temp.has_value()) {
        out.allow_gateway_arp_polling = absl::nullopt;
        return false;
      }
      out.allow_gateway_arp_polling = *temp;
    }
  }

  const base::Value* auto_connect_value = dict.Find("AutoConnect");
  if (auto_connect_value) {
    {
      auto temp = (*auto_connect_value).GetIfBool();
      if (!temp.has_value()) {
        out.auto_connect = absl::nullopt;
        return false;
      }
      out.auto_connect = *temp;
    }
  }

  const base::Value* bssid_value = dict.Find("BSSID");
  if (bssid_value) {
    {
      auto* temp = (*bssid_value).GetIfString();
      if (!temp) {
        out.bssid = absl::nullopt;
        return false;
      }
      out.bssid = *temp;
    }
  }

  const base::Value* eap_value = dict.Find("EAP");
  if (eap_value) {
    {
      if (!(*eap_value).is_dict()) {
        return false;
      }
      else {
        EAPProperties temp;
        if (!EAPProperties::Populate((*eap_value).GetDict(), temp))
          return false;
        out.eap = std::move(temp);
      }
    }
  }

  const base::Value* frequency_value = dict.Find("Frequency");
  if (frequency_value) {
    {
      auto temp = (*frequency_value).GetIfInt();
      if (!temp.has_value()) {
        out.frequency = absl::nullopt;
        return false;
      }
      out.frequency = *temp;
    }
  }

  const base::Value* frequency_list_value = dict.Find("FrequencyList");
  if (frequency_list_value) {
    {
      if (!(*frequency_list_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*frequency_list_value).GetList(), out.frequency_list)) {
          return false;
        }
      }
    }
  }

  const base::Value* hex_ssid_value = dict.Find("HexSSID");
  if (hex_ssid_value) {
    {
      auto* temp = (*hex_ssid_value).GetIfString();
      if (!temp) {
        out.hex_ssid = absl::nullopt;
        return false;
      }
      out.hex_ssid = *temp;
    }
  }

  const base::Value* hidden_ssid_value = dict.Find("HiddenSSID");
  if (hidden_ssid_value) {
    {
      auto temp = (*hidden_ssid_value).GetIfBool();
      if (!temp.has_value()) {
        out.hidden_ssid = absl::nullopt;
        return false;
      }
      out.hidden_ssid = *temp;
    }
  }

  const base::Value* passphrase_value = dict.Find("Passphrase");
  if (passphrase_value) {
    {
      auto* temp = (*passphrase_value).GetIfString();
      if (!temp) {
        out.passphrase = absl::nullopt;
        return false;
      }
      out.passphrase = *temp;
    }
  }

  const base::Value* ssid_value = dict.Find("SSID");
  if (ssid_value) {
    {
      auto* temp = (*ssid_value).GetIfString();
      if (!temp) {
        out.ssid = absl::nullopt;
        return false;
      }
      out.ssid = *temp;
    }
  }

  const base::Value* security_value = dict.Find("Security");
  if (security_value) {
    {
      auto* temp = (*security_value).GetIfString();
      if (!temp) {
        out.security = absl::nullopt;
        return false;
      }
      out.security = *temp;
    }
  }

  const base::Value* signal_strength_value = dict.Find("SignalStrength");
  if (signal_strength_value) {
    {
      auto temp = (*signal_strength_value).GetIfInt();
      if (!temp.has_value()) {
        out.signal_strength = absl::nullopt;
        return false;
      }
      out.signal_strength = *temp;
    }
  }

  return true;
}

// static
bool WiFiProperties::Populate(
    const base::Value& value, WiFiProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<WiFiProperties> WiFiProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<WiFiProperties>();
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
absl::optional<WiFiProperties> WiFiProperties::FromValue(const base::Value::Dict& value) {
  WiFiProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<WiFiProperties> WiFiProperties::FromValue(const base::Value& value) {
  WiFiProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict WiFiProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->allow_gateway_arp_polling) {
    to_value_result.Set("AllowGatewayARPPolling", *this->allow_gateway_arp_polling);

  }
  if (this->auto_connect) {
    to_value_result.Set("AutoConnect", *this->auto_connect);

  }
  if (this->bssid) {
    to_value_result.Set("BSSID", *this->bssid);

  }
  if (this->eap) {
    to_value_result.Set("EAP", (this->eap)->ToValue());

  }
  if (this->frequency) {
    to_value_result.Set("Frequency", *this->frequency);

  }
  if (this->frequency_list) {
    to_value_result.Set("FrequencyList", json_schema_compiler::util::CreateValueFromArray(*this->frequency_list));

  }
  if (this->hex_ssid) {
    to_value_result.Set("HexSSID", *this->hex_ssid);

  }
  if (this->hidden_ssid) {
    to_value_result.Set("HiddenSSID", *this->hidden_ssid);

  }
  if (this->passphrase) {
    to_value_result.Set("Passphrase", *this->passphrase);

  }
  if (this->ssid) {
    to_value_result.Set("SSID", *this->ssid);

  }
  if (this->security) {
    to_value_result.Set("Security", *this->security);

  }
  if (this->signal_strength) {
    to_value_result.Set("SignalStrength", *this->signal_strength);

  }

  return to_value_result;
}


ManagedWiFiProperties::ManagedWiFiProperties()
 {}

ManagedWiFiProperties::~ManagedWiFiProperties() = default;
ManagedWiFiProperties::ManagedWiFiProperties(ManagedWiFiProperties&& rhs) = default;
ManagedWiFiProperties& ManagedWiFiProperties::operator=(ManagedWiFiProperties&& rhs) = default;
ManagedWiFiProperties ManagedWiFiProperties::Clone() const {
  ManagedWiFiProperties out;
  if (allow_gateway_arp_polling) {
    out.allow_gateway_arp_polling = allow_gateway_arp_polling->Clone();
  }
  if (auto_connect) {
    out.auto_connect = auto_connect->Clone();
  }
  out.bssid = bssid;
  if (eap) {
    out.eap = eap->Clone();
  }
  out.frequency = frequency;
  out.frequency_list = frequency_list;
  if (hex_ssid) {
    out.hex_ssid = hex_ssid->Clone();
  }
  if (hidden_ssid) {
    out.hidden_ssid = hidden_ssid->Clone();
  }
  if (passphrase) {
    out.passphrase = passphrase->Clone();
  }
  if (ssid) {
    out.ssid = ssid->Clone();
  }
  out.security = security.Clone();
  out.signal_strength = signal_strength;
  return out;
}

// static
bool ManagedWiFiProperties::Populate(
    const base::Value::Dict& dict, ManagedWiFiProperties& out) {
  const base::Value* allow_gateway_arp_polling_value = dict.Find("AllowGatewayARPPolling");
  if (allow_gateway_arp_polling_value) {
    {
      if (!(*allow_gateway_arp_polling_value).is_dict()) {
        return false;
      }
      else {
        ManagedBoolean temp;
        if (!ManagedBoolean::Populate((*allow_gateway_arp_polling_value).GetDict(), temp))
          return false;
        out.allow_gateway_arp_polling = std::move(temp);
      }
    }
  }

  const base::Value* auto_connect_value = dict.Find("AutoConnect");
  if (auto_connect_value) {
    {
      if (!(*auto_connect_value).is_dict()) {
        return false;
      }
      else {
        ManagedBoolean temp;
        if (!ManagedBoolean::Populate((*auto_connect_value).GetDict(), temp))
          return false;
        out.auto_connect = std::move(temp);
      }
    }
  }

  const base::Value* bssid_value = dict.Find("BSSID");
  if (bssid_value) {
    {
      auto* temp = (*bssid_value).GetIfString();
      if (!temp) {
        out.bssid = absl::nullopt;
        return false;
      }
      out.bssid = *temp;
    }
  }

  const base::Value* eap_value = dict.Find("EAP");
  if (eap_value) {
    {
      if (!(*eap_value).is_dict()) {
        return false;
      }
      else {
        ManagedEAPProperties temp;
        if (!ManagedEAPProperties::Populate((*eap_value).GetDict(), temp))
          return false;
        out.eap = std::move(temp);
      }
    }
  }

  const base::Value* frequency_value = dict.Find("Frequency");
  if (frequency_value) {
    {
      auto temp = (*frequency_value).GetIfInt();
      if (!temp.has_value()) {
        out.frequency = absl::nullopt;
        return false;
      }
      out.frequency = *temp;
    }
  }

  const base::Value* frequency_list_value = dict.Find("FrequencyList");
  if (frequency_list_value) {
    {
      if (!(*frequency_list_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*frequency_list_value).GetList(), out.frequency_list)) {
          return false;
        }
      }
    }
  }

  const base::Value* hex_ssid_value = dict.Find("HexSSID");
  if (hex_ssid_value) {
    {
      if (!(*hex_ssid_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*hex_ssid_value).GetDict(), temp))
          return false;
        out.hex_ssid = std::move(temp);
      }
    }
  }

  const base::Value* hidden_ssid_value = dict.Find("HiddenSSID");
  if (hidden_ssid_value) {
    {
      if (!(*hidden_ssid_value).is_dict()) {
        return false;
      }
      else {
        ManagedBoolean temp;
        if (!ManagedBoolean::Populate((*hidden_ssid_value).GetDict(), temp))
          return false;
        out.hidden_ssid = std::move(temp);
      }
    }
  }

  const base::Value* passphrase_value = dict.Find("Passphrase");
  if (passphrase_value) {
    {
      if (!(*passphrase_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*passphrase_value).GetDict(), temp))
          return false;
        out.passphrase = std::move(temp);
      }
    }
  }

  const base::Value* ssid_value = dict.Find("SSID");
  if (ssid_value) {
    {
      if (!(*ssid_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*ssid_value).GetDict(), temp))
          return false;
        out.ssid = std::move(temp);
      }
    }
  }

  const base::Value* security_value = dict.Find("Security");
  if (!security_value) {
    return false;
  }
  {
    if (!(*security_value).is_dict()) {
      return false;
    }
    if (!ManagedDOMString::Populate((*security_value).GetDict(), out.security)) {
      return false;
    }
  }

  const base::Value* signal_strength_value = dict.Find("SignalStrength");
  if (signal_strength_value) {
    {
      auto temp = (*signal_strength_value).GetIfInt();
      if (!temp.has_value()) {
        out.signal_strength = absl::nullopt;
        return false;
      }
      out.signal_strength = *temp;
    }
  }

  return true;
}

// static
bool ManagedWiFiProperties::Populate(
    const base::Value& value, ManagedWiFiProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ManagedWiFiProperties> ManagedWiFiProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ManagedWiFiProperties>();
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
absl::optional<ManagedWiFiProperties> ManagedWiFiProperties::FromValue(const base::Value::Dict& value) {
  ManagedWiFiProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ManagedWiFiProperties> ManagedWiFiProperties::FromValue(const base::Value& value) {
  ManagedWiFiProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ManagedWiFiProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->allow_gateway_arp_polling) {
    to_value_result.Set("AllowGatewayARPPolling", (this->allow_gateway_arp_polling)->ToValue());

  }
  if (this->auto_connect) {
    to_value_result.Set("AutoConnect", (this->auto_connect)->ToValue());

  }
  if (this->bssid) {
    to_value_result.Set("BSSID", *this->bssid);

  }
  if (this->eap) {
    to_value_result.Set("EAP", (this->eap)->ToValue());

  }
  if (this->frequency) {
    to_value_result.Set("Frequency", *this->frequency);

  }
  if (this->frequency_list) {
    to_value_result.Set("FrequencyList", json_schema_compiler::util::CreateValueFromArray(*this->frequency_list));

  }
  if (this->hex_ssid) {
    to_value_result.Set("HexSSID", (this->hex_ssid)->ToValue());

  }
  if (this->hidden_ssid) {
    to_value_result.Set("HiddenSSID", (this->hidden_ssid)->ToValue());

  }
  if (this->passphrase) {
    to_value_result.Set("Passphrase", (this->passphrase)->ToValue());

  }
  if (this->ssid) {
    to_value_result.Set("SSID", (this->ssid)->ToValue());

  }
  to_value_result.Set("Security", (this->security).ToValue());

  if (this->signal_strength) {
    to_value_result.Set("SignalStrength", *this->signal_strength);

  }

  return to_value_result;
}


WiFiStateProperties::WiFiStateProperties()
 {}

WiFiStateProperties::~WiFiStateProperties() = default;
WiFiStateProperties::WiFiStateProperties(WiFiStateProperties&& rhs) = default;
WiFiStateProperties& WiFiStateProperties::operator=(WiFiStateProperties&& rhs) = default;
WiFiStateProperties WiFiStateProperties::Clone() const {
  WiFiStateProperties out;
  out.bssid = bssid;
  if (eap) {
    out.eap = eap->Clone();
  }
  out.frequency = frequency;
  out.hex_ssid = hex_ssid;
  out.security = security;
  out.signal_strength = signal_strength;
  out.ssid = ssid;
  return out;
}

// static
bool WiFiStateProperties::Populate(
    const base::Value::Dict& dict, WiFiStateProperties& out) {
  const base::Value* bssid_value = dict.Find("BSSID");
  if (bssid_value) {
    {
      auto* temp = (*bssid_value).GetIfString();
      if (!temp) {
        out.bssid = absl::nullopt;
        return false;
      }
      out.bssid = *temp;
    }
  }

  const base::Value* eap_value = dict.Find("EAP");
  if (eap_value) {
    {
      if (!(*eap_value).is_dict()) {
        return false;
      }
      else {
        EAPStateProperties temp;
        if (!EAPStateProperties::Populate((*eap_value).GetDict(), temp))
          return false;
        out.eap = std::move(temp);
      }
    }
  }

  const base::Value* frequency_value = dict.Find("Frequency");
  if (frequency_value) {
    {
      auto temp = (*frequency_value).GetIfInt();
      if (!temp.has_value()) {
        out.frequency = absl::nullopt;
        return false;
      }
      out.frequency = *temp;
    }
  }

  const base::Value* hex_ssid_value = dict.Find("HexSSID");
  if (hex_ssid_value) {
    {
      auto* temp = (*hex_ssid_value).GetIfString();
      if (!temp) {
        out.hex_ssid = absl::nullopt;
        return false;
      }
      out.hex_ssid = *temp;
    }
  }

  const base::Value* security_value = dict.Find("Security");
  if (!security_value) {
    return false;
  }
  {
    auto* temp = (*security_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.security = *temp;
  }

  const base::Value* signal_strength_value = dict.Find("SignalStrength");
  if (signal_strength_value) {
    {
      auto temp = (*signal_strength_value).GetIfInt();
      if (!temp.has_value()) {
        out.signal_strength = absl::nullopt;
        return false;
      }
      out.signal_strength = *temp;
    }
  }

  const base::Value* ssid_value = dict.Find("SSID");
  if (ssid_value) {
    {
      auto* temp = (*ssid_value).GetIfString();
      if (!temp) {
        out.ssid = absl::nullopt;
        return false;
      }
      out.ssid = *temp;
    }
  }

  return true;
}

// static
bool WiFiStateProperties::Populate(
    const base::Value& value, WiFiStateProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<WiFiStateProperties> WiFiStateProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<WiFiStateProperties>();
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
absl::optional<WiFiStateProperties> WiFiStateProperties::FromValue(const base::Value::Dict& value) {
  WiFiStateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<WiFiStateProperties> WiFiStateProperties::FromValue(const base::Value& value) {
  WiFiStateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict WiFiStateProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->bssid) {
    to_value_result.Set("BSSID", *this->bssid);

  }
  if (this->eap) {
    to_value_result.Set("EAP", (this->eap)->ToValue());

  }
  if (this->frequency) {
    to_value_result.Set("Frequency", *this->frequency);

  }
  if (this->hex_ssid) {
    to_value_result.Set("HexSSID", *this->hex_ssid);

  }
  to_value_result.Set("Security", this->security);

  if (this->signal_strength) {
    to_value_result.Set("SignalStrength", *this->signal_strength);

  }
  if (this->ssid) {
    to_value_result.Set("SSID", *this->ssid);

  }

  return to_value_result;
}


NetworkConfigProperties::NetworkConfigProperties()
: ip_address_config_type(),
name_servers_config_type(),
type() {}

NetworkConfigProperties::~NetworkConfigProperties() = default;
NetworkConfigProperties::NetworkConfigProperties(NetworkConfigProperties&& rhs) = default;
NetworkConfigProperties& NetworkConfigProperties::operator=(NetworkConfigProperties&& rhs) = default;
NetworkConfigProperties NetworkConfigProperties::Clone() const {
  NetworkConfigProperties out;
  if (cellular) {
    out.cellular = cellular->Clone();
  }
  if (ethernet) {
    out.ethernet = ethernet->Clone();
  }
  out.guid = guid;
  out.ip_address_config_type = ip_address_config_type;
  out.name = name;
  out.name_servers_config_type = name_servers_config_type;
  out.priority = priority;
  if (proxy_settings) {
    out.proxy_settings = proxy_settings->Clone();
  }
  if (static_ip_config) {
    out.static_ip_config = static_ip_config->Clone();
  }
  out.type = type;
  if (vpn) {
    out.vpn = vpn->Clone();
  }
  if (wi_fi) {
    out.wi_fi = wi_fi->Clone();
  }
  return out;
}

// static
bool NetworkConfigProperties::Populate(
    const base::Value::Dict& dict, NetworkConfigProperties& out) {
  out.ip_address_config_type = IPConfigType();
  out.name_servers_config_type = IPConfigType();
  out.type = NetworkType();
  const base::Value* cellular_value = dict.Find("Cellular");
  if (cellular_value) {
    {
      if (!(*cellular_value).is_dict()) {
        return false;
      }
      else {
        CellularProperties temp;
        if (!CellularProperties::Populate((*cellular_value).GetDict(), temp))
          return false;
        out.cellular = std::move(temp);
      }
    }
  }

  const base::Value* ethernet_value = dict.Find("Ethernet");
  if (ethernet_value) {
    {
      if (!(*ethernet_value).is_dict()) {
        return false;
      }
      else {
        EthernetProperties temp;
        if (!EthernetProperties::Populate((*ethernet_value).GetDict(), temp))
          return false;
        out.ethernet = std::move(temp);
      }
    }
  }

  const base::Value* guid_value = dict.Find("GUID");
  if (guid_value) {
    {
      auto* temp = (*guid_value).GetIfString();
      if (!temp) {
        out.guid = absl::nullopt;
        return false;
      }
      out.guid = *temp;
    }
  }

  const base::Value* ip_address_config_type_value = dict.Find("IPAddressConfigType");
  if (ip_address_config_type_value) {
    {
      const std::string* ip_config_type_as_string = (*ip_address_config_type_value).GetIfString();
      if (!ip_config_type_as_string) {
        return false;
      }
      out.ip_address_config_type = ParseIPConfigType(*ip_config_type_as_string);
      if (out.ip_address_config_type == IPConfigType()) {
        return false;
      }
    }
    } else {
    out.ip_address_config_type = IPConfigType();
  }

  const base::Value* name_value = dict.Find("Name");
  if (name_value) {
    {
      auto* temp = (*name_value).GetIfString();
      if (!temp) {
        out.name = absl::nullopt;
        return false;
      }
      out.name = *temp;
    }
  }

  const base::Value* name_servers_config_type_value = dict.Find("NameServersConfigType");
  if (name_servers_config_type_value) {
    {
      const std::string* ip_config_type_as_string = (*name_servers_config_type_value).GetIfString();
      if (!ip_config_type_as_string) {
        return false;
      }
      out.name_servers_config_type = ParseIPConfigType(*ip_config_type_as_string);
      if (out.name_servers_config_type == IPConfigType()) {
        return false;
      }
    }
    } else {
    out.name_servers_config_type = IPConfigType();
  }

  const base::Value* priority_value = dict.Find("Priority");
  if (priority_value) {
    {
      auto temp = (*priority_value).GetIfInt();
      if (!temp.has_value()) {
        out.priority = absl::nullopt;
        return false;
      }
      out.priority = *temp;
    }
  }

  const base::Value* proxy_settings_value = dict.Find("ProxySettings");
  if (proxy_settings_value) {
    {
      if (!(*proxy_settings_value).is_dict()) {
        return false;
      }
      else {
        ProxySettings temp;
        if (!ProxySettings::Populate((*proxy_settings_value).GetDict(), temp))
          return false;
        out.proxy_settings = std::move(temp);
      }
    }
  }

  const base::Value* static_ip_config_value = dict.Find("StaticIPConfig");
  if (static_ip_config_value) {
    {
      if (!(*static_ip_config_value).is_dict()) {
        return false;
      }
      else {
        IPConfigProperties temp;
        if (!IPConfigProperties::Populate((*static_ip_config_value).GetDict(), temp))
          return false;
        out.static_ip_config = std::move(temp);
      }
    }
  }

  const base::Value* type_value = dict.Find("Type");
  if (type_value) {
    {
      const std::string* network_type_as_string = (*type_value).GetIfString();
      if (!network_type_as_string) {
        return false;
      }
      out.type = ParseNetworkType(*network_type_as_string);
      if (out.type == NetworkType()) {
        return false;
      }
    }
    } else {
    out.type = NetworkType();
  }

  const base::Value* vpn_value = dict.Find("VPN");
  if (vpn_value) {
    {
      if (!(*vpn_value).is_dict()) {
        return false;
      }
      else {
        VPNProperties temp;
        if (!VPNProperties::Populate((*vpn_value).GetDict(), temp))
          return false;
        out.vpn = std::move(temp);
      }
    }
  }

  const base::Value* wi_fi_value = dict.Find("WiFi");
  if (wi_fi_value) {
    {
      if (!(*wi_fi_value).is_dict()) {
        return false;
      }
      else {
        WiFiProperties temp;
        if (!WiFiProperties::Populate((*wi_fi_value).GetDict(), temp))
          return false;
        out.wi_fi = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool NetworkConfigProperties::Populate(
    const base::Value& value, NetworkConfigProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<NetworkConfigProperties> NetworkConfigProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<NetworkConfigProperties>();
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
absl::optional<NetworkConfigProperties> NetworkConfigProperties::FromValue(const base::Value::Dict& value) {
  NetworkConfigProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<NetworkConfigProperties> NetworkConfigProperties::FromValue(const base::Value& value) {
  NetworkConfigProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict NetworkConfigProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->cellular) {
    to_value_result.Set("Cellular", (this->cellular)->ToValue());

  }
  if (this->ethernet) {
    to_value_result.Set("Ethernet", (this->ethernet)->ToValue());

  }
  if (this->guid) {
    to_value_result.Set("GUID", *this->guid);

  }
  if (this->ip_address_config_type != IPConfigType()) {
    to_value_result.Set("IPAddressConfigType", networking_private::ToString(this->ip_address_config_type));

  }
  if (this->name) {
    to_value_result.Set("Name", *this->name);

  }
  if (this->name_servers_config_type != IPConfigType()) {
    to_value_result.Set("NameServersConfigType", networking_private::ToString(this->name_servers_config_type));

  }
  if (this->priority) {
    to_value_result.Set("Priority", *this->priority);

  }
  if (this->proxy_settings) {
    to_value_result.Set("ProxySettings", (this->proxy_settings)->ToValue());

  }
  if (this->static_ip_config) {
    to_value_result.Set("StaticIPConfig", (this->static_ip_config)->ToValue());

  }
  if (this->type != NetworkType()) {
    to_value_result.Set("Type", networking_private::ToString(this->type));

  }
  if (this->vpn) {
    to_value_result.Set("VPN", (this->vpn)->ToValue());

  }
  if (this->wi_fi) {
    to_value_result.Set("WiFi", (this->wi_fi)->ToValue());

  }

  return to_value_result;
}


NetworkProperties::NetworkProperties()
: connection_state(),
ip_address_config_type(),
name_servers_config_type(),
type() {}

NetworkProperties::~NetworkProperties() = default;
NetworkProperties::NetworkProperties(NetworkProperties&& rhs) = default;
NetworkProperties& NetworkProperties::operator=(NetworkProperties&& rhs) = default;
NetworkProperties NetworkProperties::Clone() const {
  NetworkProperties out;
  if (cellular) {
    out.cellular = cellular->Clone();
  }
  out.connectable = connectable;
  out.connection_state = connection_state;
  out.error_state = error_state;
  if (ethernet) {
    out.ethernet = ethernet->Clone();
  }
  out.guid = guid;
  out.ip_address_config_type = ip_address_config_type;
  if (ip_configs) {
    out.ip_configs.emplace();
    out.ip_configs->reserve(ip_configs->size());
    for (const auto& element : *ip_configs) {
      json_schema_compiler::util::AppendToContainer(*out.ip_configs, element.Clone());
    }
  }
  out.mac_address = mac_address;
  out.metered = metered;
  out.name = name;
  out.name_servers_config_type = name_servers_config_type;
  out.priority = priority;
  if (proxy_settings) {
    out.proxy_settings = proxy_settings->Clone();
  }
  out.restricted_connectivity = restricted_connectivity;
  if (static_ip_config) {
    out.static_ip_config = static_ip_config->Clone();
  }
  if (saved_ip_config) {
    out.saved_ip_config = saved_ip_config->Clone();
  }
  out.source = source;
  if (tether) {
    out.tether = tether->Clone();
  }
  out.type = type;
  if (vpn) {
    out.vpn = vpn->Clone();
  }
  if (wi_fi) {
    out.wi_fi = wi_fi->Clone();
  }
  return out;
}

// static
bool NetworkProperties::Populate(
    const base::Value::Dict& dict, NetworkProperties& out) {
  out.connection_state = ConnectionStateType();
  out.ip_address_config_type = IPConfigType();
  out.name_servers_config_type = IPConfigType();
  const base::Value* cellular_value = dict.Find("Cellular");
  if (cellular_value) {
    {
      if (!(*cellular_value).is_dict()) {
        return false;
      }
      else {
        CellularProperties temp;
        if (!CellularProperties::Populate((*cellular_value).GetDict(), temp))
          return false;
        out.cellular = std::move(temp);
      }
    }
  }

  const base::Value* connectable_value = dict.Find("Connectable");
  if (connectable_value) {
    {
      auto temp = (*connectable_value).GetIfBool();
      if (!temp.has_value()) {
        out.connectable = absl::nullopt;
        return false;
      }
      out.connectable = *temp;
    }
  }

  const base::Value* connection_state_value = dict.Find("ConnectionState");
  if (connection_state_value) {
    {
      const std::string* connection_state_type_as_string = (*connection_state_value).GetIfString();
      if (!connection_state_type_as_string) {
        return false;
      }
      out.connection_state = ParseConnectionStateType(*connection_state_type_as_string);
      if (out.connection_state == ConnectionStateType()) {
        return false;
      }
    }
    } else {
    out.connection_state = ConnectionStateType();
  }

  const base::Value* error_state_value = dict.Find("ErrorState");
  if (error_state_value) {
    {
      auto* temp = (*error_state_value).GetIfString();
      if (!temp) {
        out.error_state = absl::nullopt;
        return false;
      }
      out.error_state = *temp;
    }
  }

  const base::Value* ethernet_value = dict.Find("Ethernet");
  if (ethernet_value) {
    {
      if (!(*ethernet_value).is_dict()) {
        return false;
      }
      else {
        EthernetProperties temp;
        if (!EthernetProperties::Populate((*ethernet_value).GetDict(), temp))
          return false;
        out.ethernet = std::move(temp);
      }
    }
  }

  const base::Value* guid_value = dict.Find("GUID");
  if (!guid_value) {
    return false;
  }
  {
    auto* temp = (*guid_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.guid = *temp;
  }

  const base::Value* ip_address_config_type_value = dict.Find("IPAddressConfigType");
  if (ip_address_config_type_value) {
    {
      const std::string* ip_config_type_as_string = (*ip_address_config_type_value).GetIfString();
      if (!ip_config_type_as_string) {
        return false;
      }
      out.ip_address_config_type = ParseIPConfigType(*ip_config_type_as_string);
      if (out.ip_address_config_type == IPConfigType()) {
        return false;
      }
    }
    } else {
    out.ip_address_config_type = IPConfigType();
  }

  const base::Value* ip_configs_value = dict.Find("IPConfigs");
  if (ip_configs_value) {
    {
      if (!(*ip_configs_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*ip_configs_value).GetList(), out.ip_configs)) {
          return false;
        }
      }
    }
  }

  const base::Value* mac_address_value = dict.Find("MacAddress");
  if (mac_address_value) {
    {
      auto* temp = (*mac_address_value).GetIfString();
      if (!temp) {
        out.mac_address = absl::nullopt;
        return false;
      }
      out.mac_address = *temp;
    }
  }

  const base::Value* metered_value = dict.Find("Metered");
  if (metered_value) {
    {
      auto temp = (*metered_value).GetIfBool();
      if (!temp.has_value()) {
        out.metered = absl::nullopt;
        return false;
      }
      out.metered = *temp;
    }
  }

  const base::Value* name_value = dict.Find("Name");
  if (name_value) {
    {
      auto* temp = (*name_value).GetIfString();
      if (!temp) {
        out.name = absl::nullopt;
        return false;
      }
      out.name = *temp;
    }
  }

  const base::Value* name_servers_config_type_value = dict.Find("NameServersConfigType");
  if (name_servers_config_type_value) {
    {
      const std::string* ip_config_type_as_string = (*name_servers_config_type_value).GetIfString();
      if (!ip_config_type_as_string) {
        return false;
      }
      out.name_servers_config_type = ParseIPConfigType(*ip_config_type_as_string);
      if (out.name_servers_config_type == IPConfigType()) {
        return false;
      }
    }
    } else {
    out.name_servers_config_type = IPConfigType();
  }

  const base::Value* priority_value = dict.Find("Priority");
  if (priority_value) {
    {
      auto temp = (*priority_value).GetIfInt();
      if (!temp.has_value()) {
        out.priority = absl::nullopt;
        return false;
      }
      out.priority = *temp;
    }
  }

  const base::Value* proxy_settings_value = dict.Find("ProxySettings");
  if (proxy_settings_value) {
    {
      if (!(*proxy_settings_value).is_dict()) {
        return false;
      }
      else {
        ProxySettings temp;
        if (!ProxySettings::Populate((*proxy_settings_value).GetDict(), temp))
          return false;
        out.proxy_settings = std::move(temp);
      }
    }
  }

  const base::Value* restricted_connectivity_value = dict.Find("RestrictedConnectivity");
  if (restricted_connectivity_value) {
    {
      auto temp = (*restricted_connectivity_value).GetIfBool();
      if (!temp.has_value()) {
        out.restricted_connectivity = absl::nullopt;
        return false;
      }
      out.restricted_connectivity = *temp;
    }
  }

  const base::Value* static_ip_config_value = dict.Find("StaticIPConfig");
  if (static_ip_config_value) {
    {
      if (!(*static_ip_config_value).is_dict()) {
        return false;
      }
      else {
        IPConfigProperties temp;
        if (!IPConfigProperties::Populate((*static_ip_config_value).GetDict(), temp))
          return false;
        out.static_ip_config = std::move(temp);
      }
    }
  }

  const base::Value* saved_ip_config_value = dict.Find("SavedIPConfig");
  if (saved_ip_config_value) {
    {
      if (!(*saved_ip_config_value).is_dict()) {
        return false;
      }
      else {
        IPConfigProperties temp;
        if (!IPConfigProperties::Populate((*saved_ip_config_value).GetDict(), temp))
          return false;
        out.saved_ip_config = std::move(temp);
      }
    }
  }

  const base::Value* source_value = dict.Find("Source");
  if (source_value) {
    {
      auto* temp = (*source_value).GetIfString();
      if (!temp) {
        out.source = absl::nullopt;
        return false;
      }
      out.source = *temp;
    }
  }

  const base::Value* tether_value = dict.Find("Tether");
  if (tether_value) {
    {
      if (!(*tether_value).is_dict()) {
        return false;
      }
      else {
        TetherProperties temp;
        if (!TetherProperties::Populate((*tether_value).GetDict(), temp))
          return false;
        out.tether = std::move(temp);
      }
    }
  }

  const base::Value* type_value = dict.Find("Type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* network_type_as_string = (*type_value).GetIfString();
    if (!network_type_as_string) {
      return false;
    }
    out.type = ParseNetworkType(*network_type_as_string);
    if (out.type == NetworkType()) {
      return false;
    }
  }

  const base::Value* vpn_value = dict.Find("VPN");
  if (vpn_value) {
    {
      if (!(*vpn_value).is_dict()) {
        return false;
      }
      else {
        VPNProperties temp;
        if (!VPNProperties::Populate((*vpn_value).GetDict(), temp))
          return false;
        out.vpn = std::move(temp);
      }
    }
  }

  const base::Value* wi_fi_value = dict.Find("WiFi");
  if (wi_fi_value) {
    {
      if (!(*wi_fi_value).is_dict()) {
        return false;
      }
      else {
        WiFiProperties temp;
        if (!WiFiProperties::Populate((*wi_fi_value).GetDict(), temp))
          return false;
        out.wi_fi = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool NetworkProperties::Populate(
    const base::Value& value, NetworkProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<NetworkProperties> NetworkProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<NetworkProperties>();
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
absl::optional<NetworkProperties> NetworkProperties::FromValue(const base::Value::Dict& value) {
  NetworkProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<NetworkProperties> NetworkProperties::FromValue(const base::Value& value) {
  NetworkProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict NetworkProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->cellular) {
    to_value_result.Set("Cellular", (this->cellular)->ToValue());

  }
  if (this->connectable) {
    to_value_result.Set("Connectable", *this->connectable);

  }
  if (this->connection_state != ConnectionStateType()) {
    to_value_result.Set("ConnectionState", networking_private::ToString(this->connection_state));

  }
  if (this->error_state) {
    to_value_result.Set("ErrorState", *this->error_state);

  }
  if (this->ethernet) {
    to_value_result.Set("Ethernet", (this->ethernet)->ToValue());

  }
  to_value_result.Set("GUID", this->guid);

  if (this->ip_address_config_type != IPConfigType()) {
    to_value_result.Set("IPAddressConfigType", networking_private::ToString(this->ip_address_config_type));

  }
  if (this->ip_configs) {
    to_value_result.Set("IPConfigs", json_schema_compiler::util::CreateValueFromArray(*this->ip_configs));

  }
  if (this->mac_address) {
    to_value_result.Set("MacAddress", *this->mac_address);

  }
  if (this->metered) {
    to_value_result.Set("Metered", *this->metered);

  }
  if (this->name) {
    to_value_result.Set("Name", *this->name);

  }
  if (this->name_servers_config_type != IPConfigType()) {
    to_value_result.Set("NameServersConfigType", networking_private::ToString(this->name_servers_config_type));

  }
  if (this->priority) {
    to_value_result.Set("Priority", *this->priority);

  }
  if (this->proxy_settings) {
    to_value_result.Set("ProxySettings", (this->proxy_settings)->ToValue());

  }
  if (this->restricted_connectivity) {
    to_value_result.Set("RestrictedConnectivity", *this->restricted_connectivity);

  }
  if (this->static_ip_config) {
    to_value_result.Set("StaticIPConfig", (this->static_ip_config)->ToValue());

  }
  if (this->saved_ip_config) {
    to_value_result.Set("SavedIPConfig", (this->saved_ip_config)->ToValue());

  }
  if (this->source) {
    to_value_result.Set("Source", *this->source);

  }
  if (this->tether) {
    to_value_result.Set("Tether", (this->tether)->ToValue());

  }
  to_value_result.Set("Type", networking_private::ToString(this->type));

  if (this->vpn) {
    to_value_result.Set("VPN", (this->vpn)->ToValue());

  }
  if (this->wi_fi) {
    to_value_result.Set("WiFi", (this->wi_fi)->ToValue());

  }

  return to_value_result;
}


ManagedProperties::ManagedProperties()
: connection_state(),
type() {}

ManagedProperties::~ManagedProperties() = default;
ManagedProperties::ManagedProperties(ManagedProperties&& rhs) = default;
ManagedProperties& ManagedProperties::operator=(ManagedProperties&& rhs) = default;
ManagedProperties ManagedProperties::Clone() const {
  ManagedProperties out;
  if (cellular) {
    out.cellular = cellular->Clone();
  }
  out.connectable = connectable;
  out.connection_state = connection_state;
  out.error_state = error_state;
  if (ethernet) {
    out.ethernet = ethernet->Clone();
  }
  out.guid = guid;
  if (ip_address_config_type) {
    out.ip_address_config_type = ip_address_config_type->Clone();
  }
  if (ip_configs) {
    out.ip_configs.emplace();
    out.ip_configs->reserve(ip_configs->size());
    for (const auto& element : *ip_configs) {
      json_schema_compiler::util::AppendToContainer(*out.ip_configs, element.Clone());
    }
  }
  out.mac_address = mac_address;
  if (metered) {
    out.metered = metered->Clone();
  }
  if (name) {
    out.name = name->Clone();
  }
  if (name_servers_config_type) {
    out.name_servers_config_type = name_servers_config_type->Clone();
  }
  if (priority) {
    out.priority = priority->Clone();
  }
  if (proxy_settings) {
    out.proxy_settings = proxy_settings->Clone();
  }
  out.restricted_connectivity = restricted_connectivity;
  if (static_ip_config) {
    out.static_ip_config = static_ip_config->Clone();
  }
  if (saved_ip_config) {
    out.saved_ip_config = saved_ip_config->Clone();
  }
  out.source = source;
  if (tether) {
    out.tether = tether->Clone();
  }
  out.type = type;
  if (vpn) {
    out.vpn = vpn->Clone();
  }
  if (wi_fi) {
    out.wi_fi = wi_fi->Clone();
  }
  return out;
}

// static
bool ManagedProperties::Populate(
    const base::Value::Dict& dict, ManagedProperties& out) {
  out.connection_state = ConnectionStateType();
  const base::Value* cellular_value = dict.Find("Cellular");
  if (cellular_value) {
    {
      if (!(*cellular_value).is_dict()) {
        return false;
      }
      else {
        ManagedCellularProperties temp;
        if (!ManagedCellularProperties::Populate((*cellular_value).GetDict(), temp))
          return false;
        out.cellular = std::move(temp);
      }
    }
  }

  const base::Value* connectable_value = dict.Find("Connectable");
  if (connectable_value) {
    {
      auto temp = (*connectable_value).GetIfBool();
      if (!temp.has_value()) {
        out.connectable = absl::nullopt;
        return false;
      }
      out.connectable = *temp;
    }
  }

  const base::Value* connection_state_value = dict.Find("ConnectionState");
  if (connection_state_value) {
    {
      const std::string* connection_state_type_as_string = (*connection_state_value).GetIfString();
      if (!connection_state_type_as_string) {
        return false;
      }
      out.connection_state = ParseConnectionStateType(*connection_state_type_as_string);
      if (out.connection_state == ConnectionStateType()) {
        return false;
      }
    }
    } else {
    out.connection_state = ConnectionStateType();
  }

  const base::Value* error_state_value = dict.Find("ErrorState");
  if (error_state_value) {
    {
      auto* temp = (*error_state_value).GetIfString();
      if (!temp) {
        out.error_state = absl::nullopt;
        return false;
      }
      out.error_state = *temp;
    }
  }

  const base::Value* ethernet_value = dict.Find("Ethernet");
  if (ethernet_value) {
    {
      if (!(*ethernet_value).is_dict()) {
        return false;
      }
      else {
        ManagedEthernetProperties temp;
        if (!ManagedEthernetProperties::Populate((*ethernet_value).GetDict(), temp))
          return false;
        out.ethernet = std::move(temp);
      }
    }
  }

  const base::Value* guid_value = dict.Find("GUID");
  if (!guid_value) {
    return false;
  }
  {
    auto* temp = (*guid_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.guid = *temp;
  }

  const base::Value* ip_address_config_type_value = dict.Find("IPAddressConfigType");
  if (ip_address_config_type_value) {
    {
      if (!(*ip_address_config_type_value).is_dict()) {
        return false;
      }
      else {
        ManagedIPConfigType temp;
        if (!ManagedIPConfigType::Populate((*ip_address_config_type_value).GetDict(), temp))
          return false;
        out.ip_address_config_type = std::move(temp);
      }
    }
  }

  const base::Value* ip_configs_value = dict.Find("IPConfigs");
  if (ip_configs_value) {
    {
      if (!(*ip_configs_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*ip_configs_value).GetList(), out.ip_configs)) {
          return false;
        }
      }
    }
  }

  const base::Value* mac_address_value = dict.Find("MacAddress");
  if (mac_address_value) {
    {
      auto* temp = (*mac_address_value).GetIfString();
      if (!temp) {
        out.mac_address = absl::nullopt;
        return false;
      }
      out.mac_address = *temp;
    }
  }

  const base::Value* metered_value = dict.Find("Metered");
  if (metered_value) {
    {
      if (!(*metered_value).is_dict()) {
        return false;
      }
      else {
        ManagedBoolean temp;
        if (!ManagedBoolean::Populate((*metered_value).GetDict(), temp))
          return false;
        out.metered = std::move(temp);
      }
    }
  }

  const base::Value* name_value = dict.Find("Name");
  if (name_value) {
    {
      if (!(*name_value).is_dict()) {
        return false;
      }
      else {
        ManagedDOMString temp;
        if (!ManagedDOMString::Populate((*name_value).GetDict(), temp))
          return false;
        out.name = std::move(temp);
      }
    }
  }

  const base::Value* name_servers_config_type_value = dict.Find("NameServersConfigType");
  if (name_servers_config_type_value) {
    {
      if (!(*name_servers_config_type_value).is_dict()) {
        return false;
      }
      else {
        ManagedIPConfigType temp;
        if (!ManagedIPConfigType::Populate((*name_servers_config_type_value).GetDict(), temp))
          return false;
        out.name_servers_config_type = std::move(temp);
      }
    }
  }

  const base::Value* priority_value = dict.Find("Priority");
  if (priority_value) {
    {
      if (!(*priority_value).is_dict()) {
        return false;
      }
      else {
        ManagedLong temp;
        if (!ManagedLong::Populate((*priority_value).GetDict(), temp))
          return false;
        out.priority = std::move(temp);
      }
    }
  }

  const base::Value* proxy_settings_value = dict.Find("ProxySettings");
  if (proxy_settings_value) {
    {
      if (!(*proxy_settings_value).is_dict()) {
        return false;
      }
      else {
        ManagedProxySettings temp;
        if (!ManagedProxySettings::Populate((*proxy_settings_value).GetDict(), temp))
          return false;
        out.proxy_settings = std::move(temp);
      }
    }
  }

  const base::Value* restricted_connectivity_value = dict.Find("RestrictedConnectivity");
  if (restricted_connectivity_value) {
    {
      auto temp = (*restricted_connectivity_value).GetIfBool();
      if (!temp.has_value()) {
        out.restricted_connectivity = absl::nullopt;
        return false;
      }
      out.restricted_connectivity = *temp;
    }
  }

  const base::Value* static_ip_config_value = dict.Find("StaticIPConfig");
  if (static_ip_config_value) {
    {
      if (!(*static_ip_config_value).is_dict()) {
        return false;
      }
      else {
        ManagedIPConfigProperties temp;
        if (!ManagedIPConfigProperties::Populate((*static_ip_config_value).GetDict(), temp))
          return false;
        out.static_ip_config = std::move(temp);
      }
    }
  }

  const base::Value* saved_ip_config_value = dict.Find("SavedIPConfig");
  if (saved_ip_config_value) {
    {
      if (!(*saved_ip_config_value).is_dict()) {
        return false;
      }
      else {
        IPConfigProperties temp;
        if (!IPConfigProperties::Populate((*saved_ip_config_value).GetDict(), temp))
          return false;
        out.saved_ip_config = std::move(temp);
      }
    }
  }

  const base::Value* source_value = dict.Find("Source");
  if (source_value) {
    {
      auto* temp = (*source_value).GetIfString();
      if (!temp) {
        out.source = absl::nullopt;
        return false;
      }
      out.source = *temp;
    }
  }

  const base::Value* tether_value = dict.Find("Tether");
  if (tether_value) {
    {
      if (!(*tether_value).is_dict()) {
        return false;
      }
      else {
        TetherProperties temp;
        if (!TetherProperties::Populate((*tether_value).GetDict(), temp))
          return false;
        out.tether = std::move(temp);
      }
    }
  }

  const base::Value* type_value = dict.Find("Type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* network_type_as_string = (*type_value).GetIfString();
    if (!network_type_as_string) {
      return false;
    }
    out.type = ParseNetworkType(*network_type_as_string);
    if (out.type == NetworkType()) {
      return false;
    }
  }

  const base::Value* vpn_value = dict.Find("VPN");
  if (vpn_value) {
    {
      if (!(*vpn_value).is_dict()) {
        return false;
      }
      else {
        ManagedVPNProperties temp;
        if (!ManagedVPNProperties::Populate((*vpn_value).GetDict(), temp))
          return false;
        out.vpn = std::move(temp);
      }
    }
  }

  const base::Value* wi_fi_value = dict.Find("WiFi");
  if (wi_fi_value) {
    {
      if (!(*wi_fi_value).is_dict()) {
        return false;
      }
      else {
        ManagedWiFiProperties temp;
        if (!ManagedWiFiProperties::Populate((*wi_fi_value).GetDict(), temp))
          return false;
        out.wi_fi = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool ManagedProperties::Populate(
    const base::Value& value, ManagedProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ManagedProperties> ManagedProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ManagedProperties>();
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
absl::optional<ManagedProperties> ManagedProperties::FromValue(const base::Value::Dict& value) {
  ManagedProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ManagedProperties> ManagedProperties::FromValue(const base::Value& value) {
  ManagedProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ManagedProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->cellular) {
    to_value_result.Set("Cellular", (this->cellular)->ToValue());

  }
  if (this->connectable) {
    to_value_result.Set("Connectable", *this->connectable);

  }
  if (this->connection_state != ConnectionStateType()) {
    to_value_result.Set("ConnectionState", networking_private::ToString(this->connection_state));

  }
  if (this->error_state) {
    to_value_result.Set("ErrorState", *this->error_state);

  }
  if (this->ethernet) {
    to_value_result.Set("Ethernet", (this->ethernet)->ToValue());

  }
  to_value_result.Set("GUID", this->guid);

  if (this->ip_address_config_type) {
    to_value_result.Set("IPAddressConfigType", (this->ip_address_config_type)->ToValue());

  }
  if (this->ip_configs) {
    to_value_result.Set("IPConfigs", json_schema_compiler::util::CreateValueFromArray(*this->ip_configs));

  }
  if (this->mac_address) {
    to_value_result.Set("MacAddress", *this->mac_address);

  }
  if (this->metered) {
    to_value_result.Set("Metered", (this->metered)->ToValue());

  }
  if (this->name) {
    to_value_result.Set("Name", (this->name)->ToValue());

  }
  if (this->name_servers_config_type) {
    to_value_result.Set("NameServersConfigType", (this->name_servers_config_type)->ToValue());

  }
  if (this->priority) {
    to_value_result.Set("Priority", (this->priority)->ToValue());

  }
  if (this->proxy_settings) {
    to_value_result.Set("ProxySettings", (this->proxy_settings)->ToValue());

  }
  if (this->restricted_connectivity) {
    to_value_result.Set("RestrictedConnectivity", *this->restricted_connectivity);

  }
  if (this->static_ip_config) {
    to_value_result.Set("StaticIPConfig", (this->static_ip_config)->ToValue());

  }
  if (this->saved_ip_config) {
    to_value_result.Set("SavedIPConfig", (this->saved_ip_config)->ToValue());

  }
  if (this->source) {
    to_value_result.Set("Source", *this->source);

  }
  if (this->tether) {
    to_value_result.Set("Tether", (this->tether)->ToValue());

  }
  to_value_result.Set("Type", networking_private::ToString(this->type));

  if (this->vpn) {
    to_value_result.Set("VPN", (this->vpn)->ToValue());

  }
  if (this->wi_fi) {
    to_value_result.Set("WiFi", (this->wi_fi)->ToValue());

  }

  return to_value_result;
}


NetworkStateProperties::NetworkStateProperties()
: connection_state(),
type() {}

NetworkStateProperties::~NetworkStateProperties() = default;
NetworkStateProperties::NetworkStateProperties(NetworkStateProperties&& rhs) = default;
NetworkStateProperties& NetworkStateProperties::operator=(NetworkStateProperties&& rhs) = default;
NetworkStateProperties NetworkStateProperties::Clone() const {
  NetworkStateProperties out;
  if (cellular) {
    out.cellular = cellular->Clone();
  }
  out.connectable = connectable;
  out.connection_state = connection_state;
  if (ethernet) {
    out.ethernet = ethernet->Clone();
  }
  out.error_state = error_state;
  out.guid = guid;
  out.name = name;
  out.priority = priority;
  out.source = source;
  if (tether) {
    out.tether = tether->Clone();
  }
  out.type = type;
  if (vpn) {
    out.vpn = vpn->Clone();
  }
  if (wi_fi) {
    out.wi_fi = wi_fi->Clone();
  }
  return out;
}

// static
bool NetworkStateProperties::Populate(
    const base::Value::Dict& dict, NetworkStateProperties& out) {
  out.connection_state = ConnectionStateType();
  const base::Value* cellular_value = dict.Find("Cellular");
  if (cellular_value) {
    {
      if (!(*cellular_value).is_dict()) {
        return false;
      }
      else {
        CellularStateProperties temp;
        if (!CellularStateProperties::Populate((*cellular_value).GetDict(), temp))
          return false;
        out.cellular = std::move(temp);
      }
    }
  }

  const base::Value* connectable_value = dict.Find("Connectable");
  if (connectable_value) {
    {
      auto temp = (*connectable_value).GetIfBool();
      if (!temp.has_value()) {
        out.connectable = absl::nullopt;
        return false;
      }
      out.connectable = *temp;
    }
  }

  const base::Value* connection_state_value = dict.Find("ConnectionState");
  if (connection_state_value) {
    {
      const std::string* connection_state_type_as_string = (*connection_state_value).GetIfString();
      if (!connection_state_type_as_string) {
        return false;
      }
      out.connection_state = ParseConnectionStateType(*connection_state_type_as_string);
      if (out.connection_state == ConnectionStateType()) {
        return false;
      }
    }
    } else {
    out.connection_state = ConnectionStateType();
  }

  const base::Value* ethernet_value = dict.Find("Ethernet");
  if (ethernet_value) {
    {
      if (!(*ethernet_value).is_dict()) {
        return false;
      }
      else {
        EthernetStateProperties temp;
        if (!EthernetStateProperties::Populate((*ethernet_value).GetDict(), temp))
          return false;
        out.ethernet = std::move(temp);
      }
    }
  }

  const base::Value* error_state_value = dict.Find("ErrorState");
  if (error_state_value) {
    {
      auto* temp = (*error_state_value).GetIfString();
      if (!temp) {
        out.error_state = absl::nullopt;
        return false;
      }
      out.error_state = *temp;
    }
  }

  const base::Value* guid_value = dict.Find("GUID");
  if (!guid_value) {
    return false;
  }
  {
    auto* temp = (*guid_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.guid = *temp;
  }

  const base::Value* name_value = dict.Find("Name");
  if (name_value) {
    {
      auto* temp = (*name_value).GetIfString();
      if (!temp) {
        out.name = absl::nullopt;
        return false;
      }
      out.name = *temp;
    }
  }

  const base::Value* priority_value = dict.Find("Priority");
  if (priority_value) {
    {
      auto temp = (*priority_value).GetIfInt();
      if (!temp.has_value()) {
        out.priority = absl::nullopt;
        return false;
      }
      out.priority = *temp;
    }
  }

  const base::Value* source_value = dict.Find("Source");
  if (source_value) {
    {
      auto* temp = (*source_value).GetIfString();
      if (!temp) {
        out.source = absl::nullopt;
        return false;
      }
      out.source = *temp;
    }
  }

  const base::Value* tether_value = dict.Find("Tether");
  if (tether_value) {
    {
      if (!(*tether_value).is_dict()) {
        return false;
      }
      else {
        TetherProperties temp;
        if (!TetherProperties::Populate((*tether_value).GetDict(), temp))
          return false;
        out.tether = std::move(temp);
      }
    }
  }

  const base::Value* type_value = dict.Find("Type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* network_type_as_string = (*type_value).GetIfString();
    if (!network_type_as_string) {
      return false;
    }
    out.type = ParseNetworkType(*network_type_as_string);
    if (out.type == NetworkType()) {
      return false;
    }
  }

  const base::Value* vpn_value = dict.Find("VPN");
  if (vpn_value) {
    {
      if (!(*vpn_value).is_dict()) {
        return false;
      }
      else {
        VPNStateProperties temp;
        if (!VPNStateProperties::Populate((*vpn_value).GetDict(), temp))
          return false;
        out.vpn = std::move(temp);
      }
    }
  }

  const base::Value* wi_fi_value = dict.Find("WiFi");
  if (wi_fi_value) {
    {
      if (!(*wi_fi_value).is_dict()) {
        return false;
      }
      else {
        WiFiStateProperties temp;
        if (!WiFiStateProperties::Populate((*wi_fi_value).GetDict(), temp))
          return false;
        out.wi_fi = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool NetworkStateProperties::Populate(
    const base::Value& value, NetworkStateProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<NetworkStateProperties> NetworkStateProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<NetworkStateProperties>();
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
absl::optional<NetworkStateProperties> NetworkStateProperties::FromValue(const base::Value::Dict& value) {
  NetworkStateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<NetworkStateProperties> NetworkStateProperties::FromValue(const base::Value& value) {
  NetworkStateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict NetworkStateProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->cellular) {
    to_value_result.Set("Cellular", (this->cellular)->ToValue());

  }
  if (this->connectable) {
    to_value_result.Set("Connectable", *this->connectable);

  }
  if (this->connection_state != ConnectionStateType()) {
    to_value_result.Set("ConnectionState", networking_private::ToString(this->connection_state));

  }
  if (this->ethernet) {
    to_value_result.Set("Ethernet", (this->ethernet)->ToValue());

  }
  if (this->error_state) {
    to_value_result.Set("ErrorState", *this->error_state);

  }
  to_value_result.Set("GUID", this->guid);

  if (this->name) {
    to_value_result.Set("Name", *this->name);

  }
  if (this->priority) {
    to_value_result.Set("Priority", *this->priority);

  }
  if (this->source) {
    to_value_result.Set("Source", *this->source);

  }
  if (this->tether) {
    to_value_result.Set("Tether", (this->tether)->ToValue());

  }
  to_value_result.Set("Type", networking_private::ToString(this->type));

  if (this->vpn) {
    to_value_result.Set("VPN", (this->vpn)->ToValue());

  }
  if (this->wi_fi) {
    to_value_result.Set("WiFi", (this->wi_fi)->ToValue());

  }

  return to_value_result;
}


DeviceStateProperties::DeviceStateProperties()
: state(),
type() {}

DeviceStateProperties::~DeviceStateProperties() = default;
DeviceStateProperties::DeviceStateProperties(DeviceStateProperties&& rhs) = default;
DeviceStateProperties& DeviceStateProperties::operator=(DeviceStateProperties&& rhs) = default;
DeviceStateProperties DeviceStateProperties::Clone() const {
  DeviceStateProperties out;
  out.scanning = scanning;
  if (sim_lock_status) {
    out.sim_lock_status = sim_lock_status->Clone();
  }
  out.sim_present = sim_present;
  out.state = state;
  out.type = type;
  out.managed_network_available = managed_network_available;
  return out;
}

// static
bool DeviceStateProperties::Populate(
    const base::Value::Dict& dict, DeviceStateProperties& out) {
  const base::Value* scanning_value = dict.Find("Scanning");
  if (scanning_value) {
    {
      auto temp = (*scanning_value).GetIfBool();
      if (!temp.has_value()) {
        out.scanning = absl::nullopt;
        return false;
      }
      out.scanning = *temp;
    }
  }

  const base::Value* sim_lock_status_value = dict.Find("SIMLockStatus");
  if (sim_lock_status_value) {
    {
      if (!(*sim_lock_status_value).is_dict()) {
        return false;
      }
      else {
        SIMLockStatus temp;
        if (!SIMLockStatus::Populate((*sim_lock_status_value).GetDict(), temp))
          return false;
        out.sim_lock_status = std::move(temp);
      }
    }
  }

  const base::Value* sim_present_value = dict.Find("SIMPresent");
  if (sim_present_value) {
    {
      auto temp = (*sim_present_value).GetIfBool();
      if (!temp.has_value()) {
        out.sim_present = absl::nullopt;
        return false;
      }
      out.sim_present = *temp;
    }
  }

  const base::Value* state_value = dict.Find("State");
  if (!state_value) {
    return false;
  }
  {
    const std::string* device_state_type_as_string = (*state_value).GetIfString();
    if (!device_state_type_as_string) {
      return false;
    }
    out.state = ParseDeviceStateType(*device_state_type_as_string);
    if (out.state == DeviceStateType()) {
      return false;
    }
  }

  const base::Value* type_value = dict.Find("Type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* network_type_as_string = (*type_value).GetIfString();
    if (!network_type_as_string) {
      return false;
    }
    out.type = ParseNetworkType(*network_type_as_string);
    if (out.type == NetworkType()) {
      return false;
    }
  }

  const base::Value* managed_network_available_value = dict.Find("ManagedNetworkAvailable");
  if (managed_network_available_value) {
    {
      auto temp = (*managed_network_available_value).GetIfBool();
      if (!temp.has_value()) {
        out.managed_network_available = absl::nullopt;
        return false;
      }
      out.managed_network_available = *temp;
    }
  }

  return true;
}

// static
bool DeviceStateProperties::Populate(
    const base::Value& value, DeviceStateProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<DeviceStateProperties> DeviceStateProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<DeviceStateProperties>();
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
absl::optional<DeviceStateProperties> DeviceStateProperties::FromValue(const base::Value::Dict& value) {
  DeviceStateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DeviceStateProperties> DeviceStateProperties::FromValue(const base::Value& value) {
  DeviceStateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict DeviceStateProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->scanning) {
    to_value_result.Set("Scanning", *this->scanning);

  }
  if (this->sim_lock_status) {
    to_value_result.Set("SIMLockStatus", (this->sim_lock_status)->ToValue());

  }
  if (this->sim_present) {
    to_value_result.Set("SIMPresent", *this->sim_present);

  }
  to_value_result.Set("State", networking_private::ToString(this->state));

  to_value_result.Set("Type", networking_private::ToString(this->type));

  if (this->managed_network_available) {
    to_value_result.Set("ManagedNetworkAvailable", *this->managed_network_available);

  }

  return to_value_result;
}


NetworkFilter::NetworkFilter()
: network_type() {}

NetworkFilter::~NetworkFilter() = default;
NetworkFilter::NetworkFilter(NetworkFilter&& rhs) = default;
NetworkFilter& NetworkFilter::operator=(NetworkFilter&& rhs) = default;
NetworkFilter NetworkFilter::Clone() const {
  NetworkFilter out;
  out.network_type = network_type;
  out.visible = visible;
  out.configured = configured;
  out.limit = limit;
  return out;
}

// static
bool NetworkFilter::Populate(
    const base::Value::Dict& dict, NetworkFilter& out) {
  const base::Value* network_type_value = dict.Find("networkType");
  if (!network_type_value) {
    return false;
  }
  {
    const std::string* network_type_as_string = (*network_type_value).GetIfString();
    if (!network_type_as_string) {
      return false;
    }
    out.network_type = ParseNetworkType(*network_type_as_string);
    if (out.network_type == NetworkType()) {
      return false;
    }
  }

  const base::Value* visible_value = dict.Find("visible");
  if (visible_value) {
    {
      auto temp = (*visible_value).GetIfBool();
      if (!temp.has_value()) {
        out.visible = absl::nullopt;
        return false;
      }
      out.visible = *temp;
    }
  }

  const base::Value* configured_value = dict.Find("configured");
  if (configured_value) {
    {
      auto temp = (*configured_value).GetIfBool();
      if (!temp.has_value()) {
        out.configured = absl::nullopt;
        return false;
      }
      out.configured = *temp;
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

  return true;
}

// static
bool NetworkFilter::Populate(
    const base::Value& value, NetworkFilter& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<NetworkFilter> NetworkFilter::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<NetworkFilter>();
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
absl::optional<NetworkFilter> NetworkFilter::FromValue(const base::Value::Dict& value) {
  NetworkFilter out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<NetworkFilter> NetworkFilter::FromValue(const base::Value& value) {
  NetworkFilter out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict NetworkFilter::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("networkType", networking_private::ToString(this->network_type));

  if (this->visible) {
    to_value_result.Set("visible", *this->visible);

  }
  if (this->configured) {
    to_value_result.Set("configured", *this->configured);

  }
  if (this->limit) {
    to_value_result.Set("limit", *this->limit);

  }

  return to_value_result;
}


GlobalPolicy::GlobalPolicy()
 {}

GlobalPolicy::~GlobalPolicy() = default;
GlobalPolicy::GlobalPolicy(GlobalPolicy&& rhs) = default;
GlobalPolicy& GlobalPolicy::operator=(GlobalPolicy&& rhs) = default;
GlobalPolicy GlobalPolicy::Clone() const {
  GlobalPolicy out;
  out.allow_only_policy_networks_to_autoconnect = allow_only_policy_networks_to_autoconnect;
  out.allow_only_policy_networks_to_connect = allow_only_policy_networks_to_connect;
  out.allow_only_policy_networks_to_connect_if_available = allow_only_policy_networks_to_connect_if_available;
  out.blocked_hex_ssi_ds = blocked_hex_ssi_ds;
  return out;
}

// static
bool GlobalPolicy::Populate(
    const base::Value::Dict& dict, GlobalPolicy& out) {
  const base::Value* allow_only_policy_networks_to_autoconnect_value = dict.Find("AllowOnlyPolicyNetworksToAutoconnect");
  if (allow_only_policy_networks_to_autoconnect_value) {
    {
      auto temp = (*allow_only_policy_networks_to_autoconnect_value).GetIfBool();
      if (!temp.has_value()) {
        out.allow_only_policy_networks_to_autoconnect = absl::nullopt;
        return false;
      }
      out.allow_only_policy_networks_to_autoconnect = *temp;
    }
  }

  const base::Value* allow_only_policy_networks_to_connect_value = dict.Find("AllowOnlyPolicyNetworksToConnect");
  if (allow_only_policy_networks_to_connect_value) {
    {
      auto temp = (*allow_only_policy_networks_to_connect_value).GetIfBool();
      if (!temp.has_value()) {
        out.allow_only_policy_networks_to_connect = absl::nullopt;
        return false;
      }
      out.allow_only_policy_networks_to_connect = *temp;
    }
  }

  const base::Value* allow_only_policy_networks_to_connect_if_available_value = dict.Find("AllowOnlyPolicyNetworksToConnectIfAvailable");
  if (allow_only_policy_networks_to_connect_if_available_value) {
    {
      auto temp = (*allow_only_policy_networks_to_connect_if_available_value).GetIfBool();
      if (!temp.has_value()) {
        out.allow_only_policy_networks_to_connect_if_available = absl::nullopt;
        return false;
      }
      out.allow_only_policy_networks_to_connect_if_available = *temp;
    }
  }

  const base::Value* blocked_hex_ssi_ds_value = dict.Find("BlockedHexSSIDs");
  if (blocked_hex_ssi_ds_value) {
    {
      if (!(*blocked_hex_ssi_ds_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*blocked_hex_ssi_ds_value).GetList(), out.blocked_hex_ssi_ds)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool GlobalPolicy::Populate(
    const base::Value& value, GlobalPolicy& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<GlobalPolicy> GlobalPolicy::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<GlobalPolicy>();
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
absl::optional<GlobalPolicy> GlobalPolicy::FromValue(const base::Value::Dict& value) {
  GlobalPolicy out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<GlobalPolicy> GlobalPolicy::FromValue(const base::Value& value) {
  GlobalPolicy out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict GlobalPolicy::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->allow_only_policy_networks_to_autoconnect) {
    to_value_result.Set("AllowOnlyPolicyNetworksToAutoconnect", *this->allow_only_policy_networks_to_autoconnect);

  }
  if (this->allow_only_policy_networks_to_connect) {
    to_value_result.Set("AllowOnlyPolicyNetworksToConnect", *this->allow_only_policy_networks_to_connect);

  }
  if (this->allow_only_policy_networks_to_connect_if_available) {
    to_value_result.Set("AllowOnlyPolicyNetworksToConnectIfAvailable", *this->allow_only_policy_networks_to_connect_if_available);

  }
  if (this->blocked_hex_ssi_ds) {
    to_value_result.Set("BlockedHexSSIDs", json_schema_compiler::util::CreateValueFromArray(*this->blocked_hex_ssi_ds));

  }

  return to_value_result;
}


Certificate::Certificate()
: hardware_backed(false),
device_wide(false) {}

Certificate::~Certificate() = default;
Certificate::Certificate(Certificate&& rhs) = default;
Certificate& Certificate::operator=(Certificate&& rhs) = default;
Certificate Certificate::Clone() const {
  Certificate out;
  out.hash = hash;
  out.issued_by = issued_by;
  out.issued_to = issued_to;
  out.pem = pem;
  out.pkcs11_id = pkcs11_id;
  out.hardware_backed = hardware_backed;
  out.device_wide = device_wide;
  return out;
}

// static
bool Certificate::Populate(
    const base::Value::Dict& dict, Certificate& out) {
  const base::Value* hash_value = dict.Find("hash");
  if (!hash_value) {
    return false;
  }
  {
    auto* temp = (*hash_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.hash = *temp;
  }

  const base::Value* issued_by_value = dict.Find("issuedBy");
  if (!issued_by_value) {
    return false;
  }
  {
    auto* temp = (*issued_by_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.issued_by = *temp;
  }

  const base::Value* issued_to_value = dict.Find("issuedTo");
  if (!issued_to_value) {
    return false;
  }
  {
    auto* temp = (*issued_to_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.issued_to = *temp;
  }

  const base::Value* pem_value = dict.Find("pem");
  if (pem_value) {
    {
      auto* temp = (*pem_value).GetIfString();
      if (!temp) {
        out.pem = absl::nullopt;
        return false;
      }
      out.pem = *temp;
    }
  }

  const base::Value* pkcs11_id_value = dict.Find("PKCS11Id");
  if (pkcs11_id_value) {
    {
      auto* temp = (*pkcs11_id_value).GetIfString();
      if (!temp) {
        out.pkcs11_id = absl::nullopt;
        return false;
      }
      out.pkcs11_id = *temp;
    }
  }

  const base::Value* hardware_backed_value = dict.Find("hardwareBacked");
  if (!hardware_backed_value) {
    return false;
  }
  {
    auto temp = (*hardware_backed_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.hardware_backed = *temp;
  }

  const base::Value* device_wide_value = dict.Find("deviceWide");
  if (!device_wide_value) {
    return false;
  }
  {
    auto temp = (*device_wide_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.device_wide = *temp;
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

  to_value_result.Set("hash", this->hash);

  to_value_result.Set("issuedBy", this->issued_by);

  to_value_result.Set("issuedTo", this->issued_to);

  if (this->pem) {
    to_value_result.Set("pem", *this->pem);

  }
  if (this->pkcs11_id) {
    to_value_result.Set("PKCS11Id", *this->pkcs11_id);

  }
  to_value_result.Set("hardwareBacked", this->hardware_backed);

  to_value_result.Set("deviceWide", this->device_wide);


  return to_value_result;
}


CertificateLists::CertificateLists()
 {}

CertificateLists::~CertificateLists() = default;
CertificateLists::CertificateLists(CertificateLists&& rhs) = default;
CertificateLists& CertificateLists::operator=(CertificateLists&& rhs) = default;
CertificateLists CertificateLists::Clone() const {
  CertificateLists out;
  out.server_ca_certificates.reserve(server_ca_certificates.size());
  for (const auto& element : server_ca_certificates) {
    json_schema_compiler::util::AppendToContainer(out.server_ca_certificates, element.Clone());
  }
  out.user_certificates.reserve(user_certificates.size());
  for (const auto& element : user_certificates) {
    json_schema_compiler::util::AppendToContainer(out.user_certificates, element.Clone());
  }
  return out;
}

// static
bool CertificateLists::Populate(
    const base::Value::Dict& dict, CertificateLists& out) {
  const base::Value* server_ca_certificates_value = dict.Find("serverCaCertificates");
  if (!server_ca_certificates_value) {
    return false;
  }
  {
    if (!(*server_ca_certificates_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*server_ca_certificates_value).GetList(), out.server_ca_certificates)) {
        return false;
      }
    }
  }

  const base::Value* user_certificates_value = dict.Find("userCertificates");
  if (!user_certificates_value) {
    return false;
  }
  {
    if (!(*user_certificates_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*user_certificates_value).GetList(), out.user_certificates)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool CertificateLists::Populate(
    const base::Value& value, CertificateLists& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<CertificateLists> CertificateLists::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<CertificateLists>();
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
absl::optional<CertificateLists> CertificateLists::FromValue(const base::Value::Dict& value) {
  CertificateLists out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CertificateLists> CertificateLists::FromValue(const base::Value& value) {
  CertificateLists out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict CertificateLists::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("serverCaCertificates", json_schema_compiler::util::CreateValueFromArray(this->server_ca_certificates));

  to_value_result.Set("userCertificates", json_schema_compiler::util::CreateValueFromArray(this->user_certificates));


  return to_value_result;
}



//
// Functions
//

namespace GetProperties {

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
    const base::Value& network_guid_value = args[0];
    {
      auto* temp = network_guid_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.network_guid = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const NetworkProperties& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace GetProperties

namespace GetManagedProperties {

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
    const base::Value& network_guid_value = args[0];
    {
      auto* temp = network_guid_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.network_guid = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const ManagedProperties& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace GetManagedProperties

namespace GetState {

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
    const base::Value& network_guid_value = args[0];
    {
      auto* temp = network_guid_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.network_guid = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const NetworkStateProperties& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace GetState

namespace SetProperties {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& network_guid_value = args[0];
    {
      auto* temp = network_guid_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.network_guid = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& properties_value = args[1];
    {
      if (!properties_value.is_dict()) {
        return absl::nullopt;
      }
      if (!NetworkConfigProperties::Populate(properties_value.GetDict(), params.properties)) {
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
}  // namespace SetProperties

namespace CreateNetwork {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& shared_value = args[0];
    {
      auto temp = shared_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.shared = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& properties_value = args[1];
    {
      if (!properties_value.is_dict()) {
        return absl::nullopt;
      }
      if (!NetworkConfigProperties::Populate(properties_value.GetDict(), params.properties)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace CreateNetwork

namespace ForgetNetwork {

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
    const base::Value& network_guid_value = args[0];
    {
      auto* temp = network_guid_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.network_guid = *temp;
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
}  // namespace ForgetNetwork

namespace GetNetworks {

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
    const base::Value& filter_value = args[0];
    {
      if (!filter_value.is_dict()) {
        return absl::nullopt;
      }
      if (!NetworkFilter::Populate(filter_value.GetDict(), params.filter)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<NetworkStateProperties>& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(result));

  return create_results;
}
}  // namespace GetNetworks

namespace GetVisibleNetworks {

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
    const base::Value& network_type_value = args[0];
    {
      const std::string* network_type_as_string = network_type_value.GetIfString();
      if (!network_type_as_string) {
        return absl::nullopt;
      }
      params.network_type = ParseNetworkType(*network_type_as_string);
      if (params.network_type == NetworkType()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<NetworkStateProperties>& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(result));

  return create_results;
}
}  // namespace GetVisibleNetworks

namespace GetEnabledNetworkTypes {

base::Value::List Results::Create(const std::vector<NetworkType>& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  {
    std::vector<std::string> result_list;
    for (const auto& it : (result)) {
      result_list.emplace_back(networking_private::ToString(it));
    }
    create_results.Append(json_schema_compiler::util::CreateValueFromArray(result_list));
  }

  return create_results;
}
}  // namespace GetEnabledNetworkTypes

namespace GetDeviceStates {

base::Value::List Results::Create(const std::vector<DeviceStateProperties>& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(result));

  return create_results;
}
}  // namespace GetDeviceStates

namespace EnableNetworkType {

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
    const base::Value& network_type_value = args[0];
    {
      const std::string* network_type_as_string = network_type_value.GetIfString();
      if (!network_type_as_string) {
        return absl::nullopt;
      }
      params.network_type = ParseNetworkType(*network_type_as_string);
      if (params.network_type == NetworkType()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace EnableNetworkType

namespace DisableNetworkType {

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
    const base::Value& network_type_value = args[0];
    {
      const std::string* network_type_as_string = network_type_value.GetIfString();
      if (!network_type_as_string) {
        return absl::nullopt;
      }
      params.network_type = ParseNetworkType(*network_type_as_string);
      if (params.network_type == NetworkType()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace DisableNetworkType

namespace RequestNetworkScan {

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
  params.network_type = NetworkType();

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& network_type_value = args[0];
    {
      const std::string* network_type_as_string = network_type_value.GetIfString();
      if (!network_type_as_string) {
        return absl::nullopt;
      }
      params.network_type = ParseNetworkType(*network_type_as_string);
      if (params.network_type == NetworkType()) {
        return absl::nullopt;
      }
    }
  }

  return params;
}


}  // namespace RequestNetworkScan

namespace StartConnect {

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
    const base::Value& network_guid_value = args[0];
    {
      auto* temp = network_guid_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.network_guid = *temp;
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
}  // namespace StartConnect

namespace StartDisconnect {

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
    const base::Value& network_guid_value = args[0];
    {
      auto* temp = network_guid_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.network_guid = *temp;
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
}  // namespace StartDisconnect

namespace StartActivate {

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
    const base::Value& network_guid_value = args[0];
    {
      auto* temp = network_guid_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.network_guid = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& carrier_value = args[1];
    {
      auto* temp = carrier_value.GetIfString();
      if (!temp) {
        params.carrier = absl::nullopt;
        return absl::nullopt;
      }
      params.carrier = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace StartActivate

namespace GetCaptivePortalStatus {

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
    const base::Value& network_guid_value = args[0];
    {
      auto* temp = network_guid_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.network_guid = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const CaptivePortalStatus& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(networking_private::ToString(result));

  return create_results;
}
}  // namespace GetCaptivePortalStatus

namespace UnlockCellularSim {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 2 || args.size() > 3) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& network_guid_value = args[0];
    {
      auto* temp = network_guid_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.network_guid = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& pin_value = args[1];
    {
      auto* temp = pin_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.pin = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& puk_value = args[2];
    {
      auto* temp = puk_value.GetIfString();
      if (!temp) {
        params.puk = absl::nullopt;
        return absl::nullopt;
      }
      params.puk = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace UnlockCellularSim

namespace SetCellularSimState {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& network_guid_value = args[0];
    {
      auto* temp = network_guid_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.network_guid = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& sim_state_value = args[1];
    {
      if (!sim_state_value.is_dict()) {
        return absl::nullopt;
      }
      if (!CellularSimState::Populate(sim_state_value.GetDict(), params.sim_state)) {
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
}  // namespace SetCellularSimState

namespace SelectCellularMobileNetwork {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& network_guid_value = args[0];
    {
      auto* temp = network_guid_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.network_guid = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& network_id_value = args[1];
    {
      auto* temp = network_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.network_id = *temp;
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
}  // namespace SelectCellularMobileNetwork

namespace GetGlobalPolicy {

base::Value::List Results::Create(const GlobalPolicy& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace GetGlobalPolicy

namespace GetCertificateLists {

base::Value::List Results::Create(const CertificateLists& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace GetCertificateLists

//
// Events
//

namespace OnNetworksChanged {

const char kEventName[] = "networkingPrivate.onNetworksChanged";

base::Value::List Create(const std::vector<std::string>& changes) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(changes));

  return create_results;
}

}  // namespace OnNetworksChanged

namespace OnNetworkListChanged {

const char kEventName[] = "networkingPrivate.onNetworkListChanged";

base::Value::List Create(const std::vector<std::string>& changes) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(changes));

  return create_results;
}

}  // namespace OnNetworkListChanged

namespace OnDeviceStateListChanged {

const char kEventName[] = "networkingPrivate.onDeviceStateListChanged";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnDeviceStateListChanged

namespace OnPortalDetectionCompleted {

const char kEventName[] = "networkingPrivate.onPortalDetectionCompleted";

base::Value::List Create(const std::string& network_guid, const CaptivePortalStatus& status) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(network_guid);

  create_results.Append(networking_private::ToString(status));

  return create_results;
}

}  // namespace OnPortalDetectionCompleted

namespace OnCertificateListsChanged {

const char kEventName[] = "networkingPrivate.onCertificateListsChanged";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnCertificateListsChanged

}  // namespace networking_private
}  // namespace api
}  // namespace extensions

