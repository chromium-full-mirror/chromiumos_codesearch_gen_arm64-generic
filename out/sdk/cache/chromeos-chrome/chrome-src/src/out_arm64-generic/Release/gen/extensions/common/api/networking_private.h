// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/networking_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_NETWORKING_PRIVATE_H__
#define EXTENSIONS_COMMON_API_NETWORKING_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace networking_private {

//
// Types
//

enum class ActivationStateType {
  kNone = 0,
  kActivated,
  kActivating,
  kNotActivated,
  kPartiallyActivated,
  kMaxValue = kPartiallyActivated,
};


const char* ToString(ActivationStateType as_enum);
ActivationStateType ParseActivationStateType(base::StringPiece as_string);
std::u16string GetActivationStateTypeParseError(base::StringPiece as_string);

enum class CaptivePortalStatus {
  kNone = 0,
  kUnknown,
  kOffline,
  kOnline,
  kPortal,
  kProxyAuthRequired,
  kMaxValue = kProxyAuthRequired,
};


const char* ToString(CaptivePortalStatus as_enum);
CaptivePortalStatus ParseCaptivePortalStatus(base::StringPiece as_string);
std::u16string GetCaptivePortalStatusParseError(base::StringPiece as_string);

enum class ConnectionStateType {
  kNone = 0,
  kConnected,
  kConnecting,
  kNotConnected,
  kMaxValue = kNotConnected,
};


const char* ToString(ConnectionStateType as_enum);
ConnectionStateType ParseConnectionStateType(base::StringPiece as_string);
std::u16string GetConnectionStateTypeParseError(base::StringPiece as_string);

enum class DeviceStateType {
  kNone = 0,
  kUninitialized,
  kDisabled,
  kEnabling,
  kEnabled,
  kProhibited,
  kMaxValue = kProhibited,
};


const char* ToString(DeviceStateType as_enum);
DeviceStateType ParseDeviceStateType(base::StringPiece as_string);
std::u16string GetDeviceStateTypeParseError(base::StringPiece as_string);

enum class IPConfigType {
  kNone = 0,
  kDhcp,
  kStatic,
  kMaxValue = kStatic,
};


const char* ToString(IPConfigType as_enum);
IPConfigType ParseIPConfigType(base::StringPiece as_string);
std::u16string GetIPConfigTypeParseError(base::StringPiece as_string);

enum class NetworkType {
  kNone = 0,
  kAll,
  kCellular,
  kEthernet,
  kTether,
  kVpn,
  kWireless,
  kWiFi,
  kMaxValue = kWiFi,
};


const char* ToString(NetworkType as_enum);
NetworkType ParseNetworkType(base::StringPiece as_string);
std::u16string GetNetworkTypeParseError(base::StringPiece as_string);

enum class ProxySettingsType {
  kNone = 0,
  kDirect,
  kManual,
  kPac,
  kWpad,
  kMaxValue = kWpad,
};


const char* ToString(ProxySettingsType as_enum);
ProxySettingsType ParseProxySettingsType(base::StringPiece as_string);
std::u16string GetProxySettingsTypeParseError(base::StringPiece as_string);

struct ManagedBoolean {
  ManagedBoolean();
  ~ManagedBoolean();
  ManagedBoolean(const ManagedBoolean&) = delete;
  ManagedBoolean& operator=(const ManagedBoolean&) = delete;
  ManagedBoolean(ManagedBoolean&& rhs);
  ManagedBoolean& operator=(ManagedBoolean&& rhs);

  // Populates a ManagedBoolean object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedBoolean& out);

  // Populates a ManagedBoolean object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedBoolean& out);

  // Creates a deep copy of ManagedBoolean.
  ManagedBoolean Clone() const;

  // Creates a ManagedBoolean object from a base::Value, or NULL on failure.
  static std::unique_ptr<ManagedBoolean> FromValueDeprecated(const base::Value& value);

  // Creates a ManagedBoolean object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ManagedBoolean> FromValue(const base::Value::Dict& value);

  // Creates a ManagedBoolean object from a base::Value, or nullopt on failure.
  static absl::optional<ManagedBoolean> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedBoolean object.
  base::Value::Dict ToValue() const;

  absl::optional<bool> active;

  absl::optional<std::string> effective;

  absl::optional<bool> user_policy;

  absl::optional<bool> device_policy;

  absl::optional<bool> user_setting;

  absl::optional<bool> shared_setting;

  absl::optional<bool> user_editable;

  absl::optional<bool> device_editable;

};

struct ManagedLong {
  ManagedLong();
  ~ManagedLong();
  ManagedLong(const ManagedLong&) = delete;
  ManagedLong& operator=(const ManagedLong&) = delete;
  ManagedLong(ManagedLong&& rhs);
  ManagedLong& operator=(ManagedLong&& rhs);

  // Populates a ManagedLong object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedLong& out);

  // Populates a ManagedLong object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedLong& out);

  // Creates a deep copy of ManagedLong.
  ManagedLong Clone() const;

  // Creates a ManagedLong object from a base::Value, or NULL on failure.
  static std::unique_ptr<ManagedLong> FromValueDeprecated(const base::Value& value);

  // Creates a ManagedLong object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ManagedLong> FromValue(const base::Value::Dict& value);

  // Creates a ManagedLong object from a base::Value, or nullopt on failure.
  static absl::optional<ManagedLong> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedLong object.
  base::Value::Dict ToValue() const;

  absl::optional<int> active;

  absl::optional<std::string> effective;

  absl::optional<int> user_policy;

  absl::optional<int> device_policy;

  absl::optional<int> user_setting;

  absl::optional<int> shared_setting;

  absl::optional<bool> user_editable;

  absl::optional<bool> device_editable;

};

struct ManagedDOMString {
  ManagedDOMString();
  ~ManagedDOMString();
  ManagedDOMString(const ManagedDOMString&) = delete;
  ManagedDOMString& operator=(const ManagedDOMString&) = delete;
  ManagedDOMString(ManagedDOMString&& rhs);
  ManagedDOMString& operator=(ManagedDOMString&& rhs);

  // Populates a ManagedDOMString object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedDOMString& out);

  // Populates a ManagedDOMString object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedDOMString& out);

  // Creates a deep copy of ManagedDOMString.
  ManagedDOMString Clone() const;

  // Creates a ManagedDOMString object from a base::Value, or NULL on failure.
  static std::unique_ptr<ManagedDOMString> FromValueDeprecated(const base::Value& value);

  // Creates a ManagedDOMString object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ManagedDOMString> FromValue(const base::Value::Dict& value);

  // Creates a ManagedDOMString object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ManagedDOMString> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedDOMString object.
  base::Value::Dict ToValue() const;

  absl::optional<std::string> active;

  absl::optional<std::string> effective;

  absl::optional<std::string> user_policy;

  absl::optional<std::string> device_policy;

  absl::optional<std::string> user_setting;

  absl::optional<std::string> shared_setting;

  absl::optional<bool> user_editable;

  absl::optional<bool> device_editable;

};

struct ManagedDOMStringList {
  ManagedDOMStringList();
  ~ManagedDOMStringList();
  ManagedDOMStringList(const ManagedDOMStringList&) = delete;
  ManagedDOMStringList& operator=(const ManagedDOMStringList&) = delete;
  ManagedDOMStringList(ManagedDOMStringList&& rhs);
  ManagedDOMStringList& operator=(ManagedDOMStringList&& rhs);

  // Populates a ManagedDOMStringList object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedDOMStringList& out);

  // Populates a ManagedDOMStringList object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedDOMStringList& out);

  // Creates a deep copy of ManagedDOMStringList.
  ManagedDOMStringList Clone() const;

  // Creates a ManagedDOMStringList object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ManagedDOMStringList> FromValueDeprecated(const base::Value& value);

  // Creates a ManagedDOMStringList object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<ManagedDOMStringList> FromValue(const base::Value::Dict& value);

  // Creates a ManagedDOMStringList object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ManagedDOMStringList> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedDOMStringList object.
  base::Value::Dict ToValue() const;

  absl::optional<std::vector<std::string>> active;

  absl::optional<std::string> effective;

  absl::optional<std::vector<std::string>> user_policy;

  absl::optional<std::vector<std::string>> device_policy;

  absl::optional<std::vector<std::string>> user_setting;

  absl::optional<std::vector<std::string>> shared_setting;

  absl::optional<bool> user_editable;

  absl::optional<bool> device_editable;

};

struct ManagedIPConfigType {
  ManagedIPConfigType();
  ~ManagedIPConfigType();
  ManagedIPConfigType(const ManagedIPConfigType&) = delete;
  ManagedIPConfigType& operator=(const ManagedIPConfigType&) = delete;
  ManagedIPConfigType(ManagedIPConfigType&& rhs);
  ManagedIPConfigType& operator=(ManagedIPConfigType&& rhs);

  // Populates a ManagedIPConfigType object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedIPConfigType& out);

  // Populates a ManagedIPConfigType object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedIPConfigType& out);

  // Creates a deep copy of ManagedIPConfigType.
  ManagedIPConfigType Clone() const;

  // Creates a ManagedIPConfigType object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ManagedIPConfigType> FromValueDeprecated(const base::Value& value);

  // Creates a ManagedIPConfigType object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<ManagedIPConfigType> FromValue(const base::Value::Dict& value);

  // Creates a ManagedIPConfigType object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ManagedIPConfigType> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedIPConfigType object.
  base::Value::Dict ToValue() const;

  IPConfigType active;

  absl::optional<std::string> effective;

  IPConfigType user_policy;

  IPConfigType device_policy;

  IPConfigType user_setting;

  IPConfigType shared_setting;

  absl::optional<bool> user_editable;

  absl::optional<bool> device_editable;

};

struct ManagedProxySettingsType {
  ManagedProxySettingsType();
  ~ManagedProxySettingsType();
  ManagedProxySettingsType(const ManagedProxySettingsType&) = delete;
  ManagedProxySettingsType& operator=(const ManagedProxySettingsType&) = delete;
  ManagedProxySettingsType(ManagedProxySettingsType&& rhs);
  ManagedProxySettingsType& operator=(ManagedProxySettingsType&& rhs);

  // Populates a ManagedProxySettingsType object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedProxySettingsType& out);

  // Populates a ManagedProxySettingsType object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedProxySettingsType& out);

  // Creates a deep copy of ManagedProxySettingsType.
  ManagedProxySettingsType Clone() const;

  // Creates a ManagedProxySettingsType object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ManagedProxySettingsType> FromValueDeprecated(const base::Value& value);

  // Creates a ManagedProxySettingsType object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<ManagedProxySettingsType> FromValue(const base::Value::Dict& value);

  // Creates a ManagedProxySettingsType object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ManagedProxySettingsType> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedProxySettingsType object.
  base::Value::Dict ToValue() const;

  ProxySettingsType active;

  absl::optional<std::string> effective;

  ProxySettingsType user_policy;

  ProxySettingsType device_policy;

  ProxySettingsType user_setting;

  ProxySettingsType shared_setting;

  absl::optional<bool> user_editable;

  absl::optional<bool> device_editable;

};

struct APNProperties {
  APNProperties();
  ~APNProperties();
  APNProperties(const APNProperties&) = delete;
  APNProperties& operator=(const APNProperties&) = delete;
  APNProperties(APNProperties&& rhs);
  APNProperties& operator=(APNProperties&& rhs);

  // Populates a APNProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, APNProperties& out);

  // Populates a APNProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, APNProperties& out);

  // Creates a deep copy of APNProperties.
  APNProperties Clone() const;

  // Creates a APNProperties object from a base::Value, or NULL on failure.
  static std::unique_ptr<APNProperties> FromValueDeprecated(const base::Value& value);

  // Creates a APNProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<APNProperties> FromValue(const base::Value::Dict& value);

  // Creates a APNProperties object from a base::Value, or nullopt on failure.
  static absl::optional<APNProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAPNProperties object.
  base::Value::Dict ToValue() const;

  std::string access_point_name;

  absl::optional<std::string> authentication;

  absl::optional<std::string> language;

  absl::optional<std::string> localized_name;

  absl::optional<std::string> name;

  absl::optional<std::string> password;

  absl::optional<std::string> username;

};

struct ManagedAPNProperties {
  ManagedAPNProperties();
  ~ManagedAPNProperties();
  ManagedAPNProperties(const ManagedAPNProperties&) = delete;
  ManagedAPNProperties& operator=(const ManagedAPNProperties&) = delete;
  ManagedAPNProperties(ManagedAPNProperties&& rhs);
  ManagedAPNProperties& operator=(ManagedAPNProperties&& rhs);

  // Populates a ManagedAPNProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedAPNProperties& out);

  // Populates a ManagedAPNProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedAPNProperties& out);

  // Creates a deep copy of ManagedAPNProperties.
  ManagedAPNProperties Clone() const;

  // Creates a ManagedAPNProperties object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ManagedAPNProperties> FromValueDeprecated(const base::Value& value);

  // Creates a ManagedAPNProperties object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<ManagedAPNProperties> FromValue(const base::Value::Dict& value);

  // Creates a ManagedAPNProperties object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ManagedAPNProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedAPNProperties object.
  base::Value::Dict ToValue() const;

  ManagedDOMString access_point_name;

  absl::optional<ManagedDOMString> authentication;

  absl::optional<ManagedDOMString> language;

  absl::optional<ManagedDOMString> localized_name;

  absl::optional<ManagedDOMString> name;

  absl::optional<ManagedDOMString> password;

  absl::optional<ManagedDOMString> username;

};

struct ManagedAPNList {
  ManagedAPNList();
  ~ManagedAPNList();
  ManagedAPNList(const ManagedAPNList&) = delete;
  ManagedAPNList& operator=(const ManagedAPNList&) = delete;
  ManagedAPNList(ManagedAPNList&& rhs);
  ManagedAPNList& operator=(ManagedAPNList&& rhs);

  // Populates a ManagedAPNList object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedAPNList& out);

  // Populates a ManagedAPNList object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedAPNList& out);

  // Creates a deep copy of ManagedAPNList.
  ManagedAPNList Clone() const;

  // Creates a ManagedAPNList object from a base::Value, or NULL on failure.
  static std::unique_ptr<ManagedAPNList> FromValueDeprecated(const base::Value& value);

  // Creates a ManagedAPNList object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ManagedAPNList> FromValue(const base::Value::Dict& value);

  // Creates a ManagedAPNList object from a base::Value, or nullopt on failure.
  static absl::optional<ManagedAPNList> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedAPNList object.
  base::Value::Dict ToValue() const;

  absl::optional<std::vector<APNProperties>> active;

  absl::optional<std::string> effective;

  absl::optional<std::vector<APNProperties>> user_policy;

  absl::optional<std::vector<APNProperties>> device_policy;

  absl::optional<std::vector<APNProperties>> user_setting;

  absl::optional<std::vector<APNProperties>> shared_setting;

  absl::optional<bool> user_editable;

  absl::optional<bool> device_editable;

};

struct CellularProviderProperties {
  CellularProviderProperties();
  ~CellularProviderProperties();
  CellularProviderProperties(const CellularProviderProperties&) = delete;
  CellularProviderProperties& operator=(const CellularProviderProperties&) = delete;
  CellularProviderProperties(CellularProviderProperties&& rhs);
  CellularProviderProperties& operator=(CellularProviderProperties&& rhs);

  // Populates a CellularProviderProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CellularProviderProperties& out);

  // Populates a CellularProviderProperties object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CellularProviderProperties& out);

  // Creates a deep copy of CellularProviderProperties.
  CellularProviderProperties Clone() const;

  // Creates a CellularProviderProperties object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<CellularProviderProperties> FromValueDeprecated(const base::Value& value);

  // Creates a CellularProviderProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<CellularProviderProperties> FromValue(const base::Value::Dict& value);

  // Creates a CellularProviderProperties object from a base::Value, or nullopt
  // on failure.
  static absl::optional<CellularProviderProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCellularProviderProperties object.
  base::Value::Dict ToValue() const;

  std::string name;

  std::string code;

  absl::optional<std::string> country;

};

struct CellularSimState {
  CellularSimState();
  ~CellularSimState();
  CellularSimState(const CellularSimState&) = delete;
  CellularSimState& operator=(const CellularSimState&) = delete;
  CellularSimState(CellularSimState&& rhs);
  CellularSimState& operator=(CellularSimState&& rhs);

  // Populates a CellularSimState object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CellularSimState& out);

  // Populates a CellularSimState object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CellularSimState& out);

  // Creates a deep copy of CellularSimState.
  CellularSimState Clone() const;

  // Creates a CellularSimState object from a base::Value, or NULL on failure.
  static std::unique_ptr<CellularSimState> FromValueDeprecated(const base::Value& value);

  // Creates a CellularSimState object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<CellularSimState> FromValue(const base::Value::Dict& value);

  // Creates a CellularSimState object from a base::Value, or nullopt on
  // failure.
  static absl::optional<CellularSimState> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCellularSimState object.
  base::Value::Dict ToValue() const;

  // Whether or not a PIN should be required.
  bool require_pin;

  // The current PIN (required for any change, even when the SIM is unlocked).
  std::string current_pin;

  // If provided, change the PIN to |newPin|. |requirePin| must be true.
  absl::optional<std::string> new_pin;

};

struct IssuerSubjectPattern {
  IssuerSubjectPattern();
  ~IssuerSubjectPattern();
  IssuerSubjectPattern(const IssuerSubjectPattern&) = delete;
  IssuerSubjectPattern& operator=(const IssuerSubjectPattern&) = delete;
  IssuerSubjectPattern(IssuerSubjectPattern&& rhs);
  IssuerSubjectPattern& operator=(IssuerSubjectPattern&& rhs);

  // Populates a IssuerSubjectPattern object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, IssuerSubjectPattern& out);

  // Populates a IssuerSubjectPattern object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, IssuerSubjectPattern& out);

  // Creates a deep copy of IssuerSubjectPattern.
  IssuerSubjectPattern Clone() const;

  // Creates a IssuerSubjectPattern object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<IssuerSubjectPattern> FromValueDeprecated(const base::Value& value);

  // Creates a IssuerSubjectPattern object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<IssuerSubjectPattern> FromValue(const base::Value::Dict& value);

  // Creates a IssuerSubjectPattern object from a base::Value, or nullopt on
  // failure.
  static absl::optional<IssuerSubjectPattern> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisIssuerSubjectPattern object.
  base::Value::Dict ToValue() const;

  absl::optional<std::string> common_name;

  absl::optional<std::string> locality;

  absl::optional<std::string> organization;

  absl::optional<std::string> organizational_unit;

};

struct ManagedIssuerSubjectPattern {
  ManagedIssuerSubjectPattern();
  ~ManagedIssuerSubjectPattern();
  ManagedIssuerSubjectPattern(const ManagedIssuerSubjectPattern&) = delete;
  ManagedIssuerSubjectPattern& operator=(const ManagedIssuerSubjectPattern&) = delete;
  ManagedIssuerSubjectPattern(ManagedIssuerSubjectPattern&& rhs);
  ManagedIssuerSubjectPattern& operator=(ManagedIssuerSubjectPattern&& rhs);

  // Populates a ManagedIssuerSubjectPattern object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedIssuerSubjectPattern& out);

  // Populates a ManagedIssuerSubjectPattern object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedIssuerSubjectPattern& out);

  // Creates a deep copy of ManagedIssuerSubjectPattern.
  ManagedIssuerSubjectPattern Clone() const;

  // Creates a ManagedIssuerSubjectPattern object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ManagedIssuerSubjectPattern> FromValueDeprecated(const base::Value& value);

  // Creates a ManagedIssuerSubjectPattern object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<ManagedIssuerSubjectPattern> FromValue(const base::Value::Dict& value);

  // Creates a ManagedIssuerSubjectPattern object from a base::Value, or nullopt
  // on failure.
  static absl::optional<ManagedIssuerSubjectPattern> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedIssuerSubjectPattern object.
  base::Value::Dict ToValue() const;

  absl::optional<ManagedDOMString> common_name;

  absl::optional<ManagedDOMString> locality;

  absl::optional<ManagedDOMString> organization;

  absl::optional<ManagedDOMString> organizational_unit;

};

struct CertificatePattern {
  CertificatePattern();
  ~CertificatePattern();
  CertificatePattern(const CertificatePattern&) = delete;
  CertificatePattern& operator=(const CertificatePattern&) = delete;
  CertificatePattern(CertificatePattern&& rhs);
  CertificatePattern& operator=(CertificatePattern&& rhs);

  // Populates a CertificatePattern object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CertificatePattern& out);

  // Populates a CertificatePattern object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CertificatePattern& out);

  // Creates a deep copy of CertificatePattern.
  CertificatePattern Clone() const;

  // Creates a CertificatePattern object from a base::Value, or NULL on failure.
  static std::unique_ptr<CertificatePattern> FromValueDeprecated(const base::Value& value);

  // Creates a CertificatePattern object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<CertificatePattern> FromValue(const base::Value::Dict& value);

  // Creates a CertificatePattern object from a base::Value, or nullopt on
  // failure.
  static absl::optional<CertificatePattern> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCertificatePattern object.
  base::Value::Dict ToValue() const;

  absl::optional<std::vector<std::string>> enrollment_uri;

  absl::optional<IssuerSubjectPattern> issuer;

  absl::optional<std::vector<std::string>> issuer_cape_ms;

  absl::optional<std::vector<std::string>> issuer_ca_ref;

  absl::optional<IssuerSubjectPattern> subject;

};

struct ManagedCertificatePattern {
  ManagedCertificatePattern();
  ~ManagedCertificatePattern();
  ManagedCertificatePattern(const ManagedCertificatePattern&) = delete;
  ManagedCertificatePattern& operator=(const ManagedCertificatePattern&) = delete;
  ManagedCertificatePattern(ManagedCertificatePattern&& rhs);
  ManagedCertificatePattern& operator=(ManagedCertificatePattern&& rhs);

  // Populates a ManagedCertificatePattern object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedCertificatePattern& out);

  // Populates a ManagedCertificatePattern object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedCertificatePattern& out);

  // Creates a deep copy of ManagedCertificatePattern.
  ManagedCertificatePattern Clone() const;

  // Creates a ManagedCertificatePattern object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ManagedCertificatePattern> FromValueDeprecated(const base::Value& value);

  // Creates a ManagedCertificatePattern object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<ManagedCertificatePattern> FromValue(const base::Value::Dict& value);

  // Creates a ManagedCertificatePattern object from a base::Value, or nullopt
  // on failure.
  static absl::optional<ManagedCertificatePattern> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedCertificatePattern object.
  base::Value::Dict ToValue() const;

  absl::optional<ManagedDOMStringList> enrollment_uri;

  absl::optional<ManagedIssuerSubjectPattern> issuer;

  absl::optional<ManagedDOMStringList> issuer_ca_ref;

  absl::optional<ManagedIssuerSubjectPattern> subject;

};

struct EAPProperties {
  EAPProperties();
  ~EAPProperties();
  EAPProperties(const EAPProperties&) = delete;
  EAPProperties& operator=(const EAPProperties&) = delete;
  EAPProperties(EAPProperties&& rhs);
  EAPProperties& operator=(EAPProperties&& rhs);

  // Populates a EAPProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EAPProperties& out);

  // Populates a EAPProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, EAPProperties& out);

  // Creates a deep copy of EAPProperties.
  EAPProperties Clone() const;

  // Creates a EAPProperties object from a base::Value, or NULL on failure.
  static std::unique_ptr<EAPProperties> FromValueDeprecated(const base::Value& value);

  // Creates a EAPProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<EAPProperties> FromValue(const base::Value::Dict& value);

  // Creates a EAPProperties object from a base::Value, or nullopt on failure.
  static absl::optional<EAPProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisEAPProperties object.
  base::Value::Dict ToValue() const;

  absl::optional<std::string> anonymous_identity;

  absl::optional<CertificatePattern> client_cert_pattern;

  absl::optional<std::string> client_cert_pkcs11_id;

  absl::optional<std::string> client_cert_provisioning_profile_id;

  absl::optional<std::string> client_cert_ref;

  absl::optional<std::string> client_cert_type;

  absl::optional<std::string> identity;

  absl::optional<std::string> inner;

  // The outer EAP type. Required by ONC, but may not be provided when translating
  // from Shill.
  absl::optional<std::string> outer;

  absl::optional<std::string> password;

  absl::optional<bool> save_credentials;

  absl::optional<std::vector<std::string>> server_cape_ms;

  absl::optional<std::vector<std::string>> server_ca_refs;

  absl::optional<std::string> subject_match;

  absl::optional<std::string> tls_version_max;

  absl::optional<bool> use_proactive_key_caching;

  absl::optional<bool> use_system_c_as;

};

struct ManagedEAPProperties {
  ManagedEAPProperties();
  ~ManagedEAPProperties();
  ManagedEAPProperties(const ManagedEAPProperties&) = delete;
  ManagedEAPProperties& operator=(const ManagedEAPProperties&) = delete;
  ManagedEAPProperties(ManagedEAPProperties&& rhs);
  ManagedEAPProperties& operator=(ManagedEAPProperties&& rhs);

  // Populates a ManagedEAPProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedEAPProperties& out);

  // Populates a ManagedEAPProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedEAPProperties& out);

  // Creates a deep copy of ManagedEAPProperties.
  ManagedEAPProperties Clone() const;

  // Creates a ManagedEAPProperties object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ManagedEAPProperties> FromValueDeprecated(const base::Value& value);

  // Creates a ManagedEAPProperties object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<ManagedEAPProperties> FromValue(const base::Value::Dict& value);

  // Creates a ManagedEAPProperties object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ManagedEAPProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedEAPProperties object.
  base::Value::Dict ToValue() const;

  absl::optional<ManagedDOMString> anonymous_identity;

  absl::optional<ManagedCertificatePattern> client_cert_pattern;

  absl::optional<ManagedDOMString> client_cert_pkcs11_id;

  absl::optional<ManagedDOMString> client_cert_provisioning_profile_id;

  absl::optional<ManagedDOMString> client_cert_ref;

  absl::optional<ManagedDOMString> client_cert_type;

  absl::optional<ManagedDOMString> identity;

  absl::optional<ManagedDOMString> inner;

  // The outer EAP type. Required by ONC, but may not be provided when translating
  // from Shill.
  absl::optional<ManagedDOMString> outer;

  absl::optional<ManagedDOMString> password;

  absl::optional<ManagedBoolean> save_credentials;

  absl::optional<ManagedDOMStringList> server_cape_ms;

  absl::optional<ManagedDOMStringList> server_ca_refs;

  absl::optional<ManagedDOMString> subject_match;

  absl::optional<ManagedDOMString> tls_version_max;

  absl::optional<ManagedBoolean> use_proactive_key_caching;

  absl::optional<ManagedBoolean> use_system_c_as;

};

struct FoundNetworkProperties {
  FoundNetworkProperties();
  ~FoundNetworkProperties();
  FoundNetworkProperties(const FoundNetworkProperties&) = delete;
  FoundNetworkProperties& operator=(const FoundNetworkProperties&) = delete;
  FoundNetworkProperties(FoundNetworkProperties&& rhs);
  FoundNetworkProperties& operator=(FoundNetworkProperties&& rhs);

  // Populates a FoundNetworkProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, FoundNetworkProperties& out);

  // Populates a FoundNetworkProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, FoundNetworkProperties& out);

  // Creates a deep copy of FoundNetworkProperties.
  FoundNetworkProperties Clone() const;

  // Creates a FoundNetworkProperties object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<FoundNetworkProperties> FromValueDeprecated(const base::Value& value);

  // Creates a FoundNetworkProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<FoundNetworkProperties> FromValue(const base::Value::Dict& value);

  // Creates a FoundNetworkProperties object from a base::Value, or nullopt on
  // failure.
  static absl::optional<FoundNetworkProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisFoundNetworkProperties object.
  base::Value::Dict ToValue() const;

  std::string status;

  std::string network_id;

  std::string technology;

  absl::optional<std::string> short_name;

  absl::optional<std::string> long_name;

};

struct IPConfigProperties {
  IPConfigProperties();
  ~IPConfigProperties();
  IPConfigProperties(const IPConfigProperties&) = delete;
  IPConfigProperties& operator=(const IPConfigProperties&) = delete;
  IPConfigProperties(IPConfigProperties&& rhs);
  IPConfigProperties& operator=(IPConfigProperties&& rhs);

  // Populates a IPConfigProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, IPConfigProperties& out);

  // Populates a IPConfigProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, IPConfigProperties& out);

  // Creates a deep copy of IPConfigProperties.
  IPConfigProperties Clone() const;

  // Creates a IPConfigProperties object from a base::Value, or NULL on failure.
  static std::unique_ptr<IPConfigProperties> FromValueDeprecated(const base::Value& value);

  // Creates a IPConfigProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<IPConfigProperties> FromValue(const base::Value::Dict& value);

  // Creates a IPConfigProperties object from a base::Value, or nullopt on
  // failure.
  static absl::optional<IPConfigProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisIPConfigProperties object.
  base::Value::Dict ToValue() const;

  absl::optional<std::string> gateway;

  absl::optional<std::string> ip_address;

  absl::optional<std::vector<std::string>> excluded_routes;

  absl::optional<std::vector<std::string>> included_routes;

  absl::optional<std::vector<std::string>> name_servers;

  absl::optional<std::vector<std::string>> search_domains;

  absl::optional<int> routing_prefix;

  absl::optional<std::string> type;

  absl::optional<std::string> web_proxy_auto_discovery_url;

};

struct ManagedIPConfigProperties {
  ManagedIPConfigProperties();
  ~ManagedIPConfigProperties();
  ManagedIPConfigProperties(const ManagedIPConfigProperties&) = delete;
  ManagedIPConfigProperties& operator=(const ManagedIPConfigProperties&) = delete;
  ManagedIPConfigProperties(ManagedIPConfigProperties&& rhs);
  ManagedIPConfigProperties& operator=(ManagedIPConfigProperties&& rhs);

  // Populates a ManagedIPConfigProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedIPConfigProperties& out);

  // Populates a ManagedIPConfigProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedIPConfigProperties& out);

  // Creates a deep copy of ManagedIPConfigProperties.
  ManagedIPConfigProperties Clone() const;

  // Creates a ManagedIPConfigProperties object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ManagedIPConfigProperties> FromValueDeprecated(const base::Value& value);

  // Creates a ManagedIPConfigProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<ManagedIPConfigProperties> FromValue(const base::Value::Dict& value);

  // Creates a ManagedIPConfigProperties object from a base::Value, or nullopt
  // on failure.
  static absl::optional<ManagedIPConfigProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedIPConfigProperties object.
  base::Value::Dict ToValue() const;

  absl::optional<ManagedDOMString> gateway;

  absl::optional<ManagedDOMString> ip_address;

  absl::optional<ManagedDOMStringList> name_servers;

  absl::optional<ManagedLong> routing_prefix;

  absl::optional<ManagedDOMString> type;

  absl::optional<ManagedDOMString> web_proxy_auto_discovery_url;

};

struct XAUTHProperties {
  XAUTHProperties();
  ~XAUTHProperties();
  XAUTHProperties(const XAUTHProperties&) = delete;
  XAUTHProperties& operator=(const XAUTHProperties&) = delete;
  XAUTHProperties(XAUTHProperties&& rhs);
  XAUTHProperties& operator=(XAUTHProperties&& rhs);

  // Populates a XAUTHProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, XAUTHProperties& out);

  // Populates a XAUTHProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, XAUTHProperties& out);

  // Creates a deep copy of XAUTHProperties.
  XAUTHProperties Clone() const;

  // Creates a XAUTHProperties object from a base::Value, or NULL on failure.
  static std::unique_ptr<XAUTHProperties> FromValueDeprecated(const base::Value& value);

  // Creates a XAUTHProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<XAUTHProperties> FromValue(const base::Value::Dict& value);

  // Creates a XAUTHProperties object from a base::Value, or nullopt on failure.
  static absl::optional<XAUTHProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisXAUTHProperties object.
  base::Value::Dict ToValue() const;

  absl::optional<std::string> password;

  absl::optional<bool> save_credentials;

  absl::optional<std::string> username;

};

struct ManagedXAUTHProperties {
  ManagedXAUTHProperties();
  ~ManagedXAUTHProperties();
  ManagedXAUTHProperties(const ManagedXAUTHProperties&) = delete;
  ManagedXAUTHProperties& operator=(const ManagedXAUTHProperties&) = delete;
  ManagedXAUTHProperties(ManagedXAUTHProperties&& rhs);
  ManagedXAUTHProperties& operator=(ManagedXAUTHProperties&& rhs);

  // Populates a ManagedXAUTHProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedXAUTHProperties& out);

  // Populates a ManagedXAUTHProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedXAUTHProperties& out);

  // Creates a deep copy of ManagedXAUTHProperties.
  ManagedXAUTHProperties Clone() const;

  // Creates a ManagedXAUTHProperties object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ManagedXAUTHProperties> FromValueDeprecated(const base::Value& value);

  // Creates a ManagedXAUTHProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<ManagedXAUTHProperties> FromValue(const base::Value::Dict& value);

  // Creates a ManagedXAUTHProperties object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ManagedXAUTHProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedXAUTHProperties object.
  base::Value::Dict ToValue() const;

  absl::optional<ManagedDOMString> password;

  absl::optional<ManagedBoolean> save_credentials;

  absl::optional<ManagedDOMString> username;

};

struct IPSecProperties {
  IPSecProperties();
  ~IPSecProperties();
  IPSecProperties(const IPSecProperties&) = delete;
  IPSecProperties& operator=(const IPSecProperties&) = delete;
  IPSecProperties(IPSecProperties&& rhs);
  IPSecProperties& operator=(IPSecProperties&& rhs);

  // Populates a IPSecProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, IPSecProperties& out);

  // Populates a IPSecProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, IPSecProperties& out);

  // Creates a deep copy of IPSecProperties.
  IPSecProperties Clone() const;

  // Creates a IPSecProperties object from a base::Value, or NULL on failure.
  static std::unique_ptr<IPSecProperties> FromValueDeprecated(const base::Value& value);

  // Creates a IPSecProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<IPSecProperties> FromValue(const base::Value::Dict& value);

  // Creates a IPSecProperties object from a base::Value, or nullopt on failure.
  static absl::optional<IPSecProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisIPSecProperties object.
  base::Value::Dict ToValue() const;

  std::string authentication_type;

  absl::optional<CertificatePattern> client_cert_pattern;

  absl::optional<std::string> client_cert_pkcs11_id;

  absl::optional<std::string> client_cert_provisioning_profile_id;

  absl::optional<std::string> client_cert_ref;

  absl::optional<std::string> client_cert_type;

  absl::optional<EAPProperties> eap;

  absl::optional<std::string> group;

  absl::optional<int> ike_version;

  absl::optional<std::string> local_identity;

  absl::optional<std::string> psk;

  absl::optional<std::string> remote_identity;

  absl::optional<bool> save_credentials;

  absl::optional<std::vector<std::string>> server_cape_ms;

  absl::optional<std::vector<std::string>> server_ca_refs;

  absl::optional<XAUTHProperties> xauth;

};

struct ManagedIPSecProperties {
  ManagedIPSecProperties();
  ~ManagedIPSecProperties();
  ManagedIPSecProperties(const ManagedIPSecProperties&) = delete;
  ManagedIPSecProperties& operator=(const ManagedIPSecProperties&) = delete;
  ManagedIPSecProperties(ManagedIPSecProperties&& rhs);
  ManagedIPSecProperties& operator=(ManagedIPSecProperties&& rhs);

  // Populates a ManagedIPSecProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedIPSecProperties& out);

  // Populates a ManagedIPSecProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedIPSecProperties& out);

  // Creates a deep copy of ManagedIPSecProperties.
  ManagedIPSecProperties Clone() const;

  // Creates a ManagedIPSecProperties object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ManagedIPSecProperties> FromValueDeprecated(const base::Value& value);

  // Creates a ManagedIPSecProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<ManagedIPSecProperties> FromValue(const base::Value::Dict& value);

  // Creates a ManagedIPSecProperties object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ManagedIPSecProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedIPSecProperties object.
  base::Value::Dict ToValue() const;

  ManagedDOMString authentication_type;

  absl::optional<ManagedCertificatePattern> client_cert_pattern;

  absl::optional<ManagedDOMString> client_cert_pkcs11_id;

  absl::optional<ManagedDOMString> client_cert_provisioning_profile_id;

  absl::optional<ManagedDOMString> client_cert_ref;

  absl::optional<ManagedDOMString> client_cert_type;

  absl::optional<ManagedEAPProperties> eap;

  absl::optional<ManagedDOMString> group;

  absl::optional<ManagedLong> ike_version;

  absl::optional<ManagedDOMString> psk;

  absl::optional<ManagedBoolean> save_credentials;

  absl::optional<ManagedDOMStringList> server_cape_ms;

  absl::optional<ManagedDOMStringList> server_ca_refs;

  absl::optional<ManagedXAUTHProperties> xauth;

};

struct L2TPProperties {
  L2TPProperties();
  ~L2TPProperties();
  L2TPProperties(const L2TPProperties&) = delete;
  L2TPProperties& operator=(const L2TPProperties&) = delete;
  L2TPProperties(L2TPProperties&& rhs);
  L2TPProperties& operator=(L2TPProperties&& rhs);

  // Populates a L2TPProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, L2TPProperties& out);

  // Populates a L2TPProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, L2TPProperties& out);

  // Creates a deep copy of L2TPProperties.
  L2TPProperties Clone() const;

  // Creates a L2TPProperties object from a base::Value, or NULL on failure.
  static std::unique_ptr<L2TPProperties> FromValueDeprecated(const base::Value& value);

  // Creates a L2TPProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<L2TPProperties> FromValue(const base::Value::Dict& value);

  // Creates a L2TPProperties object from a base::Value, or nullopt on failure.
  static absl::optional<L2TPProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisL2TPProperties object.
  base::Value::Dict ToValue() const;

  absl::optional<bool> lcp_echo_disabled;

  absl::optional<std::string> password;

  absl::optional<bool> save_credentials;

  absl::optional<std::string> username;

};

struct ManagedL2TPProperties {
  ManagedL2TPProperties();
  ~ManagedL2TPProperties();
  ManagedL2TPProperties(const ManagedL2TPProperties&) = delete;
  ManagedL2TPProperties& operator=(const ManagedL2TPProperties&) = delete;
  ManagedL2TPProperties(ManagedL2TPProperties&& rhs);
  ManagedL2TPProperties& operator=(ManagedL2TPProperties&& rhs);

  // Populates a ManagedL2TPProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedL2TPProperties& out);

  // Populates a ManagedL2TPProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedL2TPProperties& out);

  // Creates a deep copy of ManagedL2TPProperties.
  ManagedL2TPProperties Clone() const;

  // Creates a ManagedL2TPProperties object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ManagedL2TPProperties> FromValueDeprecated(const base::Value& value);

  // Creates a ManagedL2TPProperties object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<ManagedL2TPProperties> FromValue(const base::Value::Dict& value);

  // Creates a ManagedL2TPProperties object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ManagedL2TPProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedL2TPProperties object.
  base::Value::Dict ToValue() const;

  absl::optional<ManagedBoolean> lcp_echo_disabled;

  absl::optional<ManagedDOMString> password;

  absl::optional<ManagedBoolean> save_credentials;

  absl::optional<ManagedDOMString> username;

};

struct PaymentPortal {
  PaymentPortal();
  ~PaymentPortal();
  PaymentPortal(const PaymentPortal&) = delete;
  PaymentPortal& operator=(const PaymentPortal&) = delete;
  PaymentPortal(PaymentPortal&& rhs);
  PaymentPortal& operator=(PaymentPortal&& rhs);

  // Populates a PaymentPortal object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PaymentPortal& out);

  // Populates a PaymentPortal object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PaymentPortal& out);

  // Creates a deep copy of PaymentPortal.
  PaymentPortal Clone() const;

  // Creates a PaymentPortal object from a base::Value, or NULL on failure.
  static std::unique_ptr<PaymentPortal> FromValueDeprecated(const base::Value& value);

  // Creates a PaymentPortal object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<PaymentPortal> FromValue(const base::Value::Dict& value);

  // Creates a PaymentPortal object from a base::Value, or nullopt on failure.
  static absl::optional<PaymentPortal> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPaymentPortal object.
  base::Value::Dict ToValue() const;

  std::string method;

  absl::optional<std::string> post_data;

  absl::optional<std::string> url;

};

struct ProxyLocation {
  ProxyLocation();
  ~ProxyLocation();
  ProxyLocation(const ProxyLocation&) = delete;
  ProxyLocation& operator=(const ProxyLocation&) = delete;
  ProxyLocation(ProxyLocation&& rhs);
  ProxyLocation& operator=(ProxyLocation&& rhs);

  // Populates a ProxyLocation object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ProxyLocation& out);

  // Populates a ProxyLocation object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ProxyLocation& out);

  // Creates a deep copy of ProxyLocation.
  ProxyLocation Clone() const;

  // Creates a ProxyLocation object from a base::Value, or NULL on failure.
  static std::unique_ptr<ProxyLocation> FromValueDeprecated(const base::Value& value);

  // Creates a ProxyLocation object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ProxyLocation> FromValue(const base::Value::Dict& value);

  // Creates a ProxyLocation object from a base::Value, or nullopt on failure.
  static absl::optional<ProxyLocation> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisProxyLocation object.
  base::Value::Dict ToValue() const;

  std::string host;

  int port;

};

struct ManagedProxyLocation {
  ManagedProxyLocation();
  ~ManagedProxyLocation();
  ManagedProxyLocation(const ManagedProxyLocation&) = delete;
  ManagedProxyLocation& operator=(const ManagedProxyLocation&) = delete;
  ManagedProxyLocation(ManagedProxyLocation&& rhs);
  ManagedProxyLocation& operator=(ManagedProxyLocation&& rhs);

  // Populates a ManagedProxyLocation object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedProxyLocation& out);

  // Populates a ManagedProxyLocation object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedProxyLocation& out);

  // Creates a deep copy of ManagedProxyLocation.
  ManagedProxyLocation Clone() const;

  // Creates a ManagedProxyLocation object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ManagedProxyLocation> FromValueDeprecated(const base::Value& value);

  // Creates a ManagedProxyLocation object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<ManagedProxyLocation> FromValue(const base::Value::Dict& value);

  // Creates a ManagedProxyLocation object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ManagedProxyLocation> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedProxyLocation object.
  base::Value::Dict ToValue() const;

  ManagedDOMString host;

  ManagedLong port;

};

struct ManualProxySettings {
  ManualProxySettings();
  ~ManualProxySettings();
  ManualProxySettings(const ManualProxySettings&) = delete;
  ManualProxySettings& operator=(const ManualProxySettings&) = delete;
  ManualProxySettings(ManualProxySettings&& rhs);
  ManualProxySettings& operator=(ManualProxySettings&& rhs);

  // Populates a ManualProxySettings object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManualProxySettings& out);

  // Populates a ManualProxySettings object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManualProxySettings& out);

  // Creates a deep copy of ManualProxySettings.
  ManualProxySettings Clone() const;

  // Creates a ManualProxySettings object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ManualProxySettings> FromValueDeprecated(const base::Value& value);

  // Creates a ManualProxySettings object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<ManualProxySettings> FromValue(const base::Value::Dict& value);

  // Creates a ManualProxySettings object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ManualProxySettings> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManualProxySettings object.
  base::Value::Dict ToValue() const;

  absl::optional<ProxyLocation> http_proxy;

  absl::optional<ProxyLocation> secure_http_proxy;

  absl::optional<ProxyLocation> ftp_proxy;

  absl::optional<ProxyLocation> socks;

};

struct ManagedManualProxySettings {
  ManagedManualProxySettings();
  ~ManagedManualProxySettings();
  ManagedManualProxySettings(const ManagedManualProxySettings&) = delete;
  ManagedManualProxySettings& operator=(const ManagedManualProxySettings&) = delete;
  ManagedManualProxySettings(ManagedManualProxySettings&& rhs);
  ManagedManualProxySettings& operator=(ManagedManualProxySettings&& rhs);

  // Populates a ManagedManualProxySettings object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedManualProxySettings& out);

  // Populates a ManagedManualProxySettings object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedManualProxySettings& out);

  // Creates a deep copy of ManagedManualProxySettings.
  ManagedManualProxySettings Clone() const;

  // Creates a ManagedManualProxySettings object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ManagedManualProxySettings> FromValueDeprecated(const base::Value& value);

  // Creates a ManagedManualProxySettings object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<ManagedManualProxySettings> FromValue(const base::Value::Dict& value);

  // Creates a ManagedManualProxySettings object from a base::Value, or nullopt
  // on failure.
  static absl::optional<ManagedManualProxySettings> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedManualProxySettings object.
  base::Value::Dict ToValue() const;

  absl::optional<ManagedProxyLocation> http_proxy;

  absl::optional<ManagedProxyLocation> secure_http_proxy;

  absl::optional<ManagedProxyLocation> ftp_proxy;

  absl::optional<ManagedProxyLocation> socks;

};

struct ProxySettings {
  ProxySettings();
  ~ProxySettings();
  ProxySettings(const ProxySettings&) = delete;
  ProxySettings& operator=(const ProxySettings&) = delete;
  ProxySettings(ProxySettings&& rhs);
  ProxySettings& operator=(ProxySettings&& rhs);

  // Populates a ProxySettings object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ProxySettings& out);

  // Populates a ProxySettings object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ProxySettings& out);

  // Creates a deep copy of ProxySettings.
  ProxySettings Clone() const;

  // Creates a ProxySettings object from a base::Value, or NULL on failure.
  static std::unique_ptr<ProxySettings> FromValueDeprecated(const base::Value& value);

  // Creates a ProxySettings object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ProxySettings> FromValue(const base::Value::Dict& value);

  // Creates a ProxySettings object from a base::Value, or nullopt on failure.
  static absl::optional<ProxySettings> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisProxySettings object.
  base::Value::Dict ToValue() const;

  ProxySettingsType type;

  absl::optional<ManualProxySettings> manual;

  absl::optional<std::vector<std::string>> exclude_domains;

  absl::optional<std::string> pac;

};

struct ManagedProxySettings {
  ManagedProxySettings();
  ~ManagedProxySettings();
  ManagedProxySettings(const ManagedProxySettings&) = delete;
  ManagedProxySettings& operator=(const ManagedProxySettings&) = delete;
  ManagedProxySettings(ManagedProxySettings&& rhs);
  ManagedProxySettings& operator=(ManagedProxySettings&& rhs);

  // Populates a ManagedProxySettings object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedProxySettings& out);

  // Populates a ManagedProxySettings object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedProxySettings& out);

  // Creates a deep copy of ManagedProxySettings.
  ManagedProxySettings Clone() const;

  // Creates a ManagedProxySettings object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ManagedProxySettings> FromValueDeprecated(const base::Value& value);

  // Creates a ManagedProxySettings object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<ManagedProxySettings> FromValue(const base::Value::Dict& value);

  // Creates a ManagedProxySettings object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ManagedProxySettings> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedProxySettings object.
  base::Value::Dict ToValue() const;

  ManagedProxySettingsType type;

  absl::optional<ManagedManualProxySettings> manual;

  absl::optional<ManagedDOMStringList> exclude_domains;

  absl::optional<ManagedDOMString> pac;

};

struct VerifyX509 {
  VerifyX509();
  ~VerifyX509();
  VerifyX509(const VerifyX509&) = delete;
  VerifyX509& operator=(const VerifyX509&) = delete;
  VerifyX509(VerifyX509&& rhs);
  VerifyX509& operator=(VerifyX509&& rhs);

  // Populates a VerifyX509 object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, VerifyX509& out);

  // Populates a VerifyX509 object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, VerifyX509& out);

  // Creates a deep copy of VerifyX509.
  VerifyX509 Clone() const;

  // Creates a VerifyX509 object from a base::Value, or NULL on failure.
  static std::unique_ptr<VerifyX509> FromValueDeprecated(const base::Value& value);

  // Creates a VerifyX509 object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<VerifyX509> FromValue(const base::Value::Dict& value);

  // Creates a VerifyX509 object from a base::Value, or nullopt on failure.
  static absl::optional<VerifyX509> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisVerifyX509 object.
  base::Value::Dict ToValue() const;

  absl::optional<std::string> name;

  absl::optional<std::string> type;

};

struct ManagedVerifyX509 {
  ManagedVerifyX509();
  ~ManagedVerifyX509();
  ManagedVerifyX509(const ManagedVerifyX509&) = delete;
  ManagedVerifyX509& operator=(const ManagedVerifyX509&) = delete;
  ManagedVerifyX509(ManagedVerifyX509&& rhs);
  ManagedVerifyX509& operator=(ManagedVerifyX509&& rhs);

  // Populates a ManagedVerifyX509 object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedVerifyX509& out);

  // Populates a ManagedVerifyX509 object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedVerifyX509& out);

  // Creates a deep copy of ManagedVerifyX509.
  ManagedVerifyX509 Clone() const;

  // Creates a ManagedVerifyX509 object from a base::Value, or NULL on failure.
  static std::unique_ptr<ManagedVerifyX509> FromValueDeprecated(const base::Value& value);

  // Creates a ManagedVerifyX509 object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ManagedVerifyX509> FromValue(const base::Value::Dict& value);

  // Creates a ManagedVerifyX509 object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ManagedVerifyX509> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedVerifyX509 object.
  base::Value::Dict ToValue() const;

  absl::optional<ManagedDOMString> name;

  absl::optional<ManagedDOMString> type;

};

struct OpenVPNProperties {
  OpenVPNProperties();
  ~OpenVPNProperties();
  OpenVPNProperties(const OpenVPNProperties&) = delete;
  OpenVPNProperties& operator=(const OpenVPNProperties&) = delete;
  OpenVPNProperties(OpenVPNProperties&& rhs);
  OpenVPNProperties& operator=(OpenVPNProperties&& rhs);

  // Populates a OpenVPNProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, OpenVPNProperties& out);

  // Populates a OpenVPNProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, OpenVPNProperties& out);

  // Creates a deep copy of OpenVPNProperties.
  OpenVPNProperties Clone() const;

  // Creates a OpenVPNProperties object from a base::Value, or NULL on failure.
  static std::unique_ptr<OpenVPNProperties> FromValueDeprecated(const base::Value& value);

  // Creates a OpenVPNProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<OpenVPNProperties> FromValue(const base::Value::Dict& value);

  // Creates a OpenVPNProperties object from a base::Value, or nullopt on
  // failure.
  static absl::optional<OpenVPNProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisOpenVPNProperties object.
  base::Value::Dict ToValue() const;

  absl::optional<std::string> auth;

  absl::optional<std::string> auth_retry;

  absl::optional<bool> auth_no_cache;

  absl::optional<std::string> cipher;

  absl::optional<std::string> client_cert_pkcs11_id;

  absl::optional<CertificatePattern> client_cert_pattern;

  absl::optional<std::string> client_cert_provisioning_profile_id;

  absl::optional<std::string> client_cert_ref;

  absl::optional<std::string> client_cert_type;

  absl::optional<std::string> comp_lzo;

  absl::optional<bool> comp_no_adapt;

  absl::optional<std::vector<std::string>> extra_hosts;

  absl::optional<bool> ignore_default_route;

  absl::optional<std::string> key_direction;

  absl::optional<std::string> ns_cert_type;

  absl::optional<std::string> otp;

  absl::optional<std::string> password;

  absl::optional<int> port;

  absl::optional<std::string> proto;

  absl::optional<bool> push_peer_info;

  absl::optional<std::string> remote_cert_eku;

  absl::optional<std::vector<std::string>> remote_cert_ku;

  absl::optional<std::string> remote_cert_tls;

  absl::optional<int> reneg_sec;

  absl::optional<bool> save_credentials;

  absl::optional<std::vector<std::string>> server_cape_ms;

  absl::optional<std::vector<std::string>> server_ca_refs;

  absl::optional<std::string> server_cert_ref;

  absl::optional<int> server_poll_timeout;

  absl::optional<int> shaper;

  absl::optional<std::string> static_challenge;

  absl::optional<std::string> tls_auth_contents;

  absl::optional<std::string> tls_remote;

  absl::optional<std::string> tls_version_min;

  absl::optional<std::string> user_authentication_type;

  absl::optional<std::string> username;

  absl::optional<std::string> verb;

  absl::optional<std::string> verify_hash;

  absl::optional<VerifyX509> verify_x509;

};

struct ManagedOpenVPNProperties {
  ManagedOpenVPNProperties();
  ~ManagedOpenVPNProperties();
  ManagedOpenVPNProperties(const ManagedOpenVPNProperties&) = delete;
  ManagedOpenVPNProperties& operator=(const ManagedOpenVPNProperties&) = delete;
  ManagedOpenVPNProperties(ManagedOpenVPNProperties&& rhs);
  ManagedOpenVPNProperties& operator=(ManagedOpenVPNProperties&& rhs);

  // Populates a ManagedOpenVPNProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedOpenVPNProperties& out);

  // Populates a ManagedOpenVPNProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedOpenVPNProperties& out);

  // Creates a deep copy of ManagedOpenVPNProperties.
  ManagedOpenVPNProperties Clone() const;

  // Creates a ManagedOpenVPNProperties object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ManagedOpenVPNProperties> FromValueDeprecated(const base::Value& value);

  // Creates a ManagedOpenVPNProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<ManagedOpenVPNProperties> FromValue(const base::Value::Dict& value);

  // Creates a ManagedOpenVPNProperties object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ManagedOpenVPNProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedOpenVPNProperties object.
  base::Value::Dict ToValue() const;

  absl::optional<ManagedDOMString> auth;

  absl::optional<ManagedDOMString> auth_retry;

  absl::optional<ManagedBoolean> auth_no_cache;

  absl::optional<ManagedDOMString> cipher;

  absl::optional<ManagedDOMString> client_cert_pkcs11_id;

  absl::optional<ManagedCertificatePattern> client_cert_pattern;

  absl::optional<ManagedDOMString> client_cert_provisioning_profile_id;

  absl::optional<ManagedDOMString> client_cert_ref;

  absl::optional<ManagedDOMString> client_cert_type;

  absl::optional<ManagedDOMString> comp_lzo;

  absl::optional<ManagedBoolean> comp_no_adapt;

  absl::optional<ManagedDOMStringList> extra_hosts;

  absl::optional<ManagedBoolean> ignore_default_route;

  absl::optional<ManagedDOMString> key_direction;

  absl::optional<ManagedDOMString> ns_cert_type;

  absl::optional<ManagedDOMString> otp;

  absl::optional<ManagedDOMString> password;

  absl::optional<ManagedLong> port;

  absl::optional<ManagedDOMString> proto;

  absl::optional<ManagedBoolean> push_peer_info;

  absl::optional<ManagedDOMString> remote_cert_eku;

  absl::optional<ManagedDOMStringList> remote_cert_ku;

  absl::optional<ManagedDOMString> remote_cert_tls;

  absl::optional<ManagedLong> reneg_sec;

  absl::optional<ManagedBoolean> save_credentials;

  absl::optional<ManagedDOMStringList> server_cape_ms;

  absl::optional<ManagedDOMStringList> server_ca_refs;

  absl::optional<ManagedDOMString> server_cert_ref;

  absl::optional<ManagedLong> server_poll_timeout;

  absl::optional<ManagedLong> shaper;

  absl::optional<ManagedDOMString> static_challenge;

  absl::optional<ManagedDOMString> tls_auth_contents;

  absl::optional<ManagedDOMString> tls_remote;

  absl::optional<ManagedDOMString> tls_version_min;

  absl::optional<ManagedDOMString> user_authentication_type;

  absl::optional<ManagedDOMString> username;

  absl::optional<ManagedDOMString> verb;

  absl::optional<ManagedDOMString> verify_hash;

  absl::optional<ManagedVerifyX509> verify_x509;

};

struct SIMLockStatus {
  SIMLockStatus();
  ~SIMLockStatus();
  SIMLockStatus(const SIMLockStatus&) = delete;
  SIMLockStatus& operator=(const SIMLockStatus&) = delete;
  SIMLockStatus(SIMLockStatus&& rhs);
  SIMLockStatus& operator=(SIMLockStatus&& rhs);

  // Populates a SIMLockStatus object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SIMLockStatus& out);

  // Populates a SIMLockStatus object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SIMLockStatus& out);

  // Creates a deep copy of SIMLockStatus.
  SIMLockStatus Clone() const;

  // Creates a SIMLockStatus object from a base::Value, or NULL on failure.
  static std::unique_ptr<SIMLockStatus> FromValueDeprecated(const base::Value& value);

  // Creates a SIMLockStatus object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<SIMLockStatus> FromValue(const base::Value::Dict& value);

  // Creates a SIMLockStatus object from a base::Value, or nullopt on failure.
  static absl::optional<SIMLockStatus> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSIMLockStatus object.
  base::Value::Dict ToValue() const;

  std::string lock_type;

  // sim-pin, sim-puk, or ''
  bool lock_enabled;

  absl::optional<int> retries_left;

};

struct ThirdPartyVPNProperties {
  ThirdPartyVPNProperties();
  ~ThirdPartyVPNProperties();
  ThirdPartyVPNProperties(const ThirdPartyVPNProperties&) = delete;
  ThirdPartyVPNProperties& operator=(const ThirdPartyVPNProperties&) = delete;
  ThirdPartyVPNProperties(ThirdPartyVPNProperties&& rhs);
  ThirdPartyVPNProperties& operator=(ThirdPartyVPNProperties&& rhs);

  // Populates a ThirdPartyVPNProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ThirdPartyVPNProperties& out);

  // Populates a ThirdPartyVPNProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ThirdPartyVPNProperties& out);

  // Creates a deep copy of ThirdPartyVPNProperties.
  ThirdPartyVPNProperties Clone() const;

  // Creates a ThirdPartyVPNProperties object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ThirdPartyVPNProperties> FromValueDeprecated(const base::Value& value);

  // Creates a ThirdPartyVPNProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<ThirdPartyVPNProperties> FromValue(const base::Value::Dict& value);

  // Creates a ThirdPartyVPNProperties object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ThirdPartyVPNProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisThirdPartyVPNProperties object.
  base::Value::Dict ToValue() const;

  std::string extension_id;

  absl::optional<std::string> provider_name;

};

struct ManagedThirdPartyVPNProperties {
  ManagedThirdPartyVPNProperties();
  ~ManagedThirdPartyVPNProperties();
  ManagedThirdPartyVPNProperties(const ManagedThirdPartyVPNProperties&) = delete;
  ManagedThirdPartyVPNProperties& operator=(const ManagedThirdPartyVPNProperties&) = delete;
  ManagedThirdPartyVPNProperties(ManagedThirdPartyVPNProperties&& rhs);
  ManagedThirdPartyVPNProperties& operator=(ManagedThirdPartyVPNProperties&& rhs);

  // Populates a ManagedThirdPartyVPNProperties object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedThirdPartyVPNProperties& out);

  // Populates a ManagedThirdPartyVPNProperties object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedThirdPartyVPNProperties& out);

  // Creates a deep copy of ManagedThirdPartyVPNProperties.
  ManagedThirdPartyVPNProperties Clone() const;

  // Creates a ManagedThirdPartyVPNProperties object from a base::Value, or NULL
  // on failure.
  static std::unique_ptr<ManagedThirdPartyVPNProperties> FromValueDeprecated(const base::Value& value);

  // Creates a ManagedThirdPartyVPNProperties object from a base::Value::Dict,
  // or nullopt on failure.
  static absl::optional<ManagedThirdPartyVPNProperties> FromValue(const base::Value::Dict& value);

  // Creates a ManagedThirdPartyVPNProperties object from a base::Value, or
  // nullopt on failure.
  static absl::optional<ManagedThirdPartyVPNProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedThirdPartyVPNProperties object.
  base::Value::Dict ToValue() const;

  ManagedDOMString extension_id;

  absl::optional<std::string> provider_name;

};

struct CellularProperties {
  CellularProperties();
  ~CellularProperties();
  CellularProperties(const CellularProperties&) = delete;
  CellularProperties& operator=(const CellularProperties&) = delete;
  CellularProperties(CellularProperties&& rhs);
  CellularProperties& operator=(CellularProperties&& rhs);

  // Populates a CellularProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CellularProperties& out);

  // Populates a CellularProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CellularProperties& out);

  // Creates a deep copy of CellularProperties.
  CellularProperties Clone() const;

  // Creates a CellularProperties object from a base::Value, or NULL on failure.
  static std::unique_ptr<CellularProperties> FromValueDeprecated(const base::Value& value);

  // Creates a CellularProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<CellularProperties> FromValue(const base::Value::Dict& value);

  // Creates a CellularProperties object from a base::Value, or nullopt on
  // failure.
  static absl::optional<CellularProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCellularProperties object.
  base::Value::Dict ToValue() const;

  absl::optional<bool> auto_connect;

  absl::optional<APNProperties> apn;

  absl::optional<std::vector<APNProperties>> apn_list;

  absl::optional<std::string> activation_type;

  ActivationStateType activation_state;

  absl::optional<bool> allow_roaming;

  absl::optional<std::string> esn;

  absl::optional<std::string> family;

  absl::optional<std::string> firmware_revision;

  absl::optional<std::vector<FoundNetworkProperties>> found_networks;

  absl::optional<std::string> hardware_revision;

  absl::optional<CellularProviderProperties> home_provider;

  absl::optional<std::string> iccid;

  absl::optional<std::string> imei;

  absl::optional<APNProperties> last_good_apn;

  absl::optional<std::string> manufacturer;

  absl::optional<std::string> mdn;

  absl::optional<std::string> meid;

  absl::optional<std::string> min;

  absl::optional<std::string> model_id;

  absl::optional<std::string> network_technology;

  absl::optional<PaymentPortal> payment_portal;

  absl::optional<std::string> roaming_state;

  absl::optional<bool> scanning;

  absl::optional<CellularProviderProperties> serving_operator;

  absl::optional<SIMLockStatus> sim_lock_status;

  absl::optional<bool> sim_present;

  absl::optional<int> signal_strength;

  absl::optional<bool> support_network_scan;

};

struct ManagedCellularProperties {
  ManagedCellularProperties();
  ~ManagedCellularProperties();
  ManagedCellularProperties(const ManagedCellularProperties&) = delete;
  ManagedCellularProperties& operator=(const ManagedCellularProperties&) = delete;
  ManagedCellularProperties(ManagedCellularProperties&& rhs);
  ManagedCellularProperties& operator=(ManagedCellularProperties&& rhs);

  // Populates a ManagedCellularProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedCellularProperties& out);

  // Populates a ManagedCellularProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedCellularProperties& out);

  // Creates a deep copy of ManagedCellularProperties.
  ManagedCellularProperties Clone() const;

  // Creates a ManagedCellularProperties object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ManagedCellularProperties> FromValueDeprecated(const base::Value& value);

  // Creates a ManagedCellularProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<ManagedCellularProperties> FromValue(const base::Value::Dict& value);

  // Creates a ManagedCellularProperties object from a base::Value, or nullopt
  // on failure.
  static absl::optional<ManagedCellularProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedCellularProperties object.
  base::Value::Dict ToValue() const;

  absl::optional<ManagedBoolean> auto_connect;

  absl::optional<ManagedAPNProperties> apn;

  absl::optional<ManagedAPNList> apn_list;

  absl::optional<std::string> activation_type;

  ActivationStateType activation_state;

  absl::optional<bool> allow_roaming;

  absl::optional<std::string> esn;

  absl::optional<std::string> family;

  absl::optional<std::string> firmware_revision;

  absl::optional<std::vector<FoundNetworkProperties>> found_networks;

  absl::optional<std::string> hardware_revision;

  absl::optional<CellularProviderProperties> home_provider;

  absl::optional<std::string> iccid;

  absl::optional<std::string> imei;

  absl::optional<APNProperties> last_good_apn;

  absl::optional<std::string> manufacturer;

  absl::optional<std::string> mdn;

  absl::optional<std::string> meid;

  absl::optional<std::string> min;

  absl::optional<std::string> model_id;

  absl::optional<std::string> network_technology;

  absl::optional<PaymentPortal> payment_portal;

  absl::optional<std::string> roaming_state;

  absl::optional<bool> scanning;

  absl::optional<CellularProviderProperties> serving_operator;

  absl::optional<SIMLockStatus> sim_lock_status;

  absl::optional<bool> sim_present;

  absl::optional<int> signal_strength;

  absl::optional<bool> support_network_scan;

};

struct CellularStateProperties {
  CellularStateProperties();
  ~CellularStateProperties();
  CellularStateProperties(const CellularStateProperties&) = delete;
  CellularStateProperties& operator=(const CellularStateProperties&) = delete;
  CellularStateProperties(CellularStateProperties&& rhs);
  CellularStateProperties& operator=(CellularStateProperties&& rhs);

  // Populates a CellularStateProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CellularStateProperties& out);

  // Populates a CellularStateProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CellularStateProperties& out);

  // Creates a deep copy of CellularStateProperties.
  CellularStateProperties Clone() const;

  // Creates a CellularStateProperties object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<CellularStateProperties> FromValueDeprecated(const base::Value& value);

  // Creates a CellularStateProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<CellularStateProperties> FromValue(const base::Value::Dict& value);

  // Creates a CellularStateProperties object from a base::Value, or nullopt on
  // failure.
  static absl::optional<CellularStateProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCellularStateProperties object.
  base::Value::Dict ToValue() const;

  ActivationStateType activation_state;

  absl::optional<std::string> eid;

  absl::optional<std::string> iccid;

  absl::optional<std::string> network_technology;

  absl::optional<std::string> roaming_state;

  absl::optional<bool> scanning;

  absl::optional<bool> sim_present;

  absl::optional<int> signal_strength;

};

struct EAPStateProperties {
  EAPStateProperties();
  ~EAPStateProperties();
  EAPStateProperties(const EAPStateProperties&) = delete;
  EAPStateProperties& operator=(const EAPStateProperties&) = delete;
  EAPStateProperties(EAPStateProperties&& rhs);
  EAPStateProperties& operator=(EAPStateProperties&& rhs);

  // Populates a EAPStateProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EAPStateProperties& out);

  // Populates a EAPStateProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, EAPStateProperties& out);

  // Creates a deep copy of EAPStateProperties.
  EAPStateProperties Clone() const;

  // Creates a EAPStateProperties object from a base::Value, or NULL on failure.
  static std::unique_ptr<EAPStateProperties> FromValueDeprecated(const base::Value& value);

  // Creates a EAPStateProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<EAPStateProperties> FromValue(const base::Value::Dict& value);

  // Creates a EAPStateProperties object from a base::Value, or nullopt on
  // failure.
  static absl::optional<EAPStateProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisEAPStateProperties object.
  base::Value::Dict ToValue() const;

  absl::optional<std::string> outer;

};

struct EthernetProperties {
  EthernetProperties();
  ~EthernetProperties();
  EthernetProperties(const EthernetProperties&) = delete;
  EthernetProperties& operator=(const EthernetProperties&) = delete;
  EthernetProperties(EthernetProperties&& rhs);
  EthernetProperties& operator=(EthernetProperties&& rhs);

  // Populates a EthernetProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EthernetProperties& out);

  // Populates a EthernetProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, EthernetProperties& out);

  // Creates a deep copy of EthernetProperties.
  EthernetProperties Clone() const;

  // Creates a EthernetProperties object from a base::Value, or NULL on failure.
  static std::unique_ptr<EthernetProperties> FromValueDeprecated(const base::Value& value);

  // Creates a EthernetProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<EthernetProperties> FromValue(const base::Value::Dict& value);

  // Creates a EthernetProperties object from a base::Value, or nullopt on
  // failure.
  static absl::optional<EthernetProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisEthernetProperties object.
  base::Value::Dict ToValue() const;

  absl::optional<bool> auto_connect;

  absl::optional<std::string> authentication;

  absl::optional<EAPProperties> eap;

};

struct ManagedEthernetProperties {
  ManagedEthernetProperties();
  ~ManagedEthernetProperties();
  ManagedEthernetProperties(const ManagedEthernetProperties&) = delete;
  ManagedEthernetProperties& operator=(const ManagedEthernetProperties&) = delete;
  ManagedEthernetProperties(ManagedEthernetProperties&& rhs);
  ManagedEthernetProperties& operator=(ManagedEthernetProperties&& rhs);

  // Populates a ManagedEthernetProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedEthernetProperties& out);

  // Populates a ManagedEthernetProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedEthernetProperties& out);

  // Creates a deep copy of ManagedEthernetProperties.
  ManagedEthernetProperties Clone() const;

  // Creates a ManagedEthernetProperties object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ManagedEthernetProperties> FromValueDeprecated(const base::Value& value);

  // Creates a ManagedEthernetProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<ManagedEthernetProperties> FromValue(const base::Value::Dict& value);

  // Creates a ManagedEthernetProperties object from a base::Value, or nullopt
  // on failure.
  static absl::optional<ManagedEthernetProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedEthernetProperties object.
  base::Value::Dict ToValue() const;

  absl::optional<ManagedBoolean> auto_connect;

  absl::optional<ManagedDOMString> authentication;

  absl::optional<ManagedEAPProperties> eap;

};

struct EthernetStateProperties {
  EthernetStateProperties();
  ~EthernetStateProperties();
  EthernetStateProperties(const EthernetStateProperties&) = delete;
  EthernetStateProperties& operator=(const EthernetStateProperties&) = delete;
  EthernetStateProperties(EthernetStateProperties&& rhs);
  EthernetStateProperties& operator=(EthernetStateProperties&& rhs);

  // Populates a EthernetStateProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EthernetStateProperties& out);

  // Populates a EthernetStateProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, EthernetStateProperties& out);

  // Creates a deep copy of EthernetStateProperties.
  EthernetStateProperties Clone() const;

  // Creates a EthernetStateProperties object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<EthernetStateProperties> FromValueDeprecated(const base::Value& value);

  // Creates a EthernetStateProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<EthernetStateProperties> FromValue(const base::Value::Dict& value);

  // Creates a EthernetStateProperties object from a base::Value, or nullopt on
  // failure.
  static absl::optional<EthernetStateProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisEthernetStateProperties object.
  base::Value::Dict ToValue() const;

  std::string authentication;

};

struct TetherProperties {
  TetherProperties();
  ~TetherProperties();
  TetherProperties(const TetherProperties&) = delete;
  TetherProperties& operator=(const TetherProperties&) = delete;
  TetherProperties(TetherProperties&& rhs);
  TetherProperties& operator=(TetherProperties&& rhs);

  // Populates a TetherProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, TetherProperties& out);

  // Populates a TetherProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, TetherProperties& out);

  // Creates a deep copy of TetherProperties.
  TetherProperties Clone() const;

  // Creates a TetherProperties object from a base::Value, or NULL on failure.
  static std::unique_ptr<TetherProperties> FromValueDeprecated(const base::Value& value);

  // Creates a TetherProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<TetherProperties> FromValue(const base::Value::Dict& value);

  // Creates a TetherProperties object from a base::Value, or nullopt on
  // failure.
  static absl::optional<TetherProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTetherProperties object.
  base::Value::Dict ToValue() const;

  absl::optional<int> battery_percentage;

  absl::optional<std::string> carrier;

  bool has_connected_to_host;

  absl::optional<int> signal_strength;

};

struct VPNProperties {
  VPNProperties();
  ~VPNProperties();
  VPNProperties(const VPNProperties&) = delete;
  VPNProperties& operator=(const VPNProperties&) = delete;
  VPNProperties(VPNProperties&& rhs);
  VPNProperties& operator=(VPNProperties&& rhs);

  // Populates a VPNProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, VPNProperties& out);

  // Populates a VPNProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, VPNProperties& out);

  // Creates a deep copy of VPNProperties.
  VPNProperties Clone() const;

  // Creates a VPNProperties object from a base::Value, or NULL on failure.
  static std::unique_ptr<VPNProperties> FromValueDeprecated(const base::Value& value);

  // Creates a VPNProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<VPNProperties> FromValue(const base::Value::Dict& value);

  // Creates a VPNProperties object from a base::Value, or nullopt on failure.
  static absl::optional<VPNProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisVPNProperties object.
  base::Value::Dict ToValue() const;

  absl::optional<bool> auto_connect;

  absl::optional<std::string> host;

  absl::optional<IPSecProperties> i_psec;

  absl::optional<L2TPProperties> l2tp;

  absl::optional<OpenVPNProperties> open_vpn;

  absl::optional<ThirdPartyVPNProperties> third_party_vpn;

  // The VPN type. This cannot be an enum because of 'L2TP-IPSec'. This is
  // optional for NetworkConfigProperties which is passed to setProperties which
  // may be used to set only specific properties.
  absl::optional<std::string> type;

};

struct ManagedVPNProperties {
  ManagedVPNProperties();
  ~ManagedVPNProperties();
  ManagedVPNProperties(const ManagedVPNProperties&) = delete;
  ManagedVPNProperties& operator=(const ManagedVPNProperties&) = delete;
  ManagedVPNProperties(ManagedVPNProperties&& rhs);
  ManagedVPNProperties& operator=(ManagedVPNProperties&& rhs);

  // Populates a ManagedVPNProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedVPNProperties& out);

  // Populates a ManagedVPNProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedVPNProperties& out);

  // Creates a deep copy of ManagedVPNProperties.
  ManagedVPNProperties Clone() const;

  // Creates a ManagedVPNProperties object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ManagedVPNProperties> FromValueDeprecated(const base::Value& value);

  // Creates a ManagedVPNProperties object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<ManagedVPNProperties> FromValue(const base::Value::Dict& value);

  // Creates a ManagedVPNProperties object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ManagedVPNProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedVPNProperties object.
  base::Value::Dict ToValue() const;

  absl::optional<ManagedBoolean> auto_connect;

  absl::optional<ManagedDOMString> host;

  absl::optional<ManagedIPSecProperties> i_psec;

  absl::optional<ManagedL2TPProperties> l2tp;

  absl::optional<ManagedOpenVPNProperties> open_vpn;

  absl::optional<ManagedThirdPartyVPNProperties> third_party_vpn;

  absl::optional<ManagedDOMString> type;

};

struct VPNStateProperties {
  VPNStateProperties();
  ~VPNStateProperties();
  VPNStateProperties(const VPNStateProperties&) = delete;
  VPNStateProperties& operator=(const VPNStateProperties&) = delete;
  VPNStateProperties(VPNStateProperties&& rhs);
  VPNStateProperties& operator=(VPNStateProperties&& rhs);

  // Populates a VPNStateProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, VPNStateProperties& out);

  // Populates a VPNStateProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, VPNStateProperties& out);

  // Creates a deep copy of VPNStateProperties.
  VPNStateProperties Clone() const;

  // Creates a VPNStateProperties object from a base::Value, or NULL on failure.
  static std::unique_ptr<VPNStateProperties> FromValueDeprecated(const base::Value& value);

  // Creates a VPNStateProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<VPNStateProperties> FromValue(const base::Value::Dict& value);

  // Creates a VPNStateProperties object from a base::Value, or nullopt on
  // failure.
  static absl::optional<VPNStateProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisVPNStateProperties object.
  base::Value::Dict ToValue() const;

  std::string type;

  absl::optional<IPSecProperties> i_psec;

  absl::optional<ThirdPartyVPNProperties> third_party_vpn;

};

struct WiFiProperties {
  WiFiProperties();
  ~WiFiProperties();
  WiFiProperties(const WiFiProperties&) = delete;
  WiFiProperties& operator=(const WiFiProperties&) = delete;
  WiFiProperties(WiFiProperties&& rhs);
  WiFiProperties& operator=(WiFiProperties&& rhs);

  // Populates a WiFiProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, WiFiProperties& out);

  // Populates a WiFiProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, WiFiProperties& out);

  // Creates a deep copy of WiFiProperties.
  WiFiProperties Clone() const;

  // Creates a WiFiProperties object from a base::Value, or NULL on failure.
  static std::unique_ptr<WiFiProperties> FromValueDeprecated(const base::Value& value);

  // Creates a WiFiProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<WiFiProperties> FromValue(const base::Value::Dict& value);

  // Creates a WiFiProperties object from a base::Value, or nullopt on failure.
  static absl::optional<WiFiProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisWiFiProperties object.
  base::Value::Dict ToValue() const;

  absl::optional<bool> allow_gateway_arp_polling;

  absl::optional<bool> auto_connect;

  absl::optional<std::string> bssid;

  absl::optional<EAPProperties> eap;

  absl::optional<int> frequency;

  absl::optional<std::vector<int>> frequency_list;

  absl::optional<std::string> hex_ssid;

  absl::optional<bool> hidden_ssid;

  absl::optional<std::string> passphrase;

  absl::optional<std::string> ssid;

  absl::optional<std::string> security;

  absl::optional<int> signal_strength;

};

struct ManagedWiFiProperties {
  ManagedWiFiProperties();
  ~ManagedWiFiProperties();
  ManagedWiFiProperties(const ManagedWiFiProperties&) = delete;
  ManagedWiFiProperties& operator=(const ManagedWiFiProperties&) = delete;
  ManagedWiFiProperties(ManagedWiFiProperties&& rhs);
  ManagedWiFiProperties& operator=(ManagedWiFiProperties&& rhs);

  // Populates a ManagedWiFiProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedWiFiProperties& out);

  // Populates a ManagedWiFiProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedWiFiProperties& out);

  // Creates a deep copy of ManagedWiFiProperties.
  ManagedWiFiProperties Clone() const;

  // Creates a ManagedWiFiProperties object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ManagedWiFiProperties> FromValueDeprecated(const base::Value& value);

  // Creates a ManagedWiFiProperties object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<ManagedWiFiProperties> FromValue(const base::Value::Dict& value);

  // Creates a ManagedWiFiProperties object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ManagedWiFiProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedWiFiProperties object.
  base::Value::Dict ToValue() const;

  absl::optional<ManagedBoolean> allow_gateway_arp_polling;

  absl::optional<ManagedBoolean> auto_connect;

  absl::optional<std::string> bssid;

  absl::optional<ManagedEAPProperties> eap;

  absl::optional<int> frequency;

  absl::optional<std::vector<int>> frequency_list;

  absl::optional<ManagedDOMString> hex_ssid;

  absl::optional<ManagedBoolean> hidden_ssid;

  absl::optional<ManagedDOMString> passphrase;

  absl::optional<ManagedDOMString> ssid;

  ManagedDOMString security;

  absl::optional<int> signal_strength;

};

struct WiFiStateProperties {
  WiFiStateProperties();
  ~WiFiStateProperties();
  WiFiStateProperties(const WiFiStateProperties&) = delete;
  WiFiStateProperties& operator=(const WiFiStateProperties&) = delete;
  WiFiStateProperties(WiFiStateProperties&& rhs);
  WiFiStateProperties& operator=(WiFiStateProperties&& rhs);

  // Populates a WiFiStateProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, WiFiStateProperties& out);

  // Populates a WiFiStateProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, WiFiStateProperties& out);

  // Creates a deep copy of WiFiStateProperties.
  WiFiStateProperties Clone() const;

  // Creates a WiFiStateProperties object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<WiFiStateProperties> FromValueDeprecated(const base::Value& value);

  // Creates a WiFiStateProperties object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<WiFiStateProperties> FromValue(const base::Value::Dict& value);

  // Creates a WiFiStateProperties object from a base::Value, or nullopt on
  // failure.
  static absl::optional<WiFiStateProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisWiFiStateProperties object.
  base::Value::Dict ToValue() const;

  absl::optional<std::string> bssid;

  absl::optional<EAPStateProperties> eap;

  absl::optional<int> frequency;

  absl::optional<std::string> hex_ssid;

  std::string security;

  absl::optional<int> signal_strength;

  absl::optional<std::string> ssid;

};

struct NetworkConfigProperties {
  NetworkConfigProperties();
  ~NetworkConfigProperties();
  NetworkConfigProperties(const NetworkConfigProperties&) = delete;
  NetworkConfigProperties& operator=(const NetworkConfigProperties&) = delete;
  NetworkConfigProperties(NetworkConfigProperties&& rhs);
  NetworkConfigProperties& operator=(NetworkConfigProperties&& rhs);

  // Populates a NetworkConfigProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NetworkConfigProperties& out);

  // Populates a NetworkConfigProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, NetworkConfigProperties& out);

  // Creates a deep copy of NetworkConfigProperties.
  NetworkConfigProperties Clone() const;

  // Creates a NetworkConfigProperties object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<NetworkConfigProperties> FromValueDeprecated(const base::Value& value);

  // Creates a NetworkConfigProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<NetworkConfigProperties> FromValue(const base::Value::Dict& value);

  // Creates a NetworkConfigProperties object from a base::Value, or nullopt on
  // failure.
  static absl::optional<NetworkConfigProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisNetworkConfigProperties object.
  base::Value::Dict ToValue() const;

  absl::optional<CellularProperties> cellular;

  absl::optional<EthernetProperties> ethernet;

  absl::optional<std::string> guid;

  IPConfigType ip_address_config_type;

  absl::optional<std::string> name;

  IPConfigType name_servers_config_type;

  absl::optional<int> priority;

  absl::optional<ProxySettings> proxy_settings;

  absl::optional<IPConfigProperties> static_ip_config;

  NetworkType type;

  absl::optional<VPNProperties> vpn;

  absl::optional<WiFiProperties> wi_fi;

};

struct NetworkProperties {
  NetworkProperties();
  ~NetworkProperties();
  NetworkProperties(const NetworkProperties&) = delete;
  NetworkProperties& operator=(const NetworkProperties&) = delete;
  NetworkProperties(NetworkProperties&& rhs);
  NetworkProperties& operator=(NetworkProperties&& rhs);

  // Populates a NetworkProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NetworkProperties& out);

  // Populates a NetworkProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, NetworkProperties& out);

  // Creates a deep copy of NetworkProperties.
  NetworkProperties Clone() const;

  // Creates a NetworkProperties object from a base::Value, or NULL on failure.
  static std::unique_ptr<NetworkProperties> FromValueDeprecated(const base::Value& value);

  // Creates a NetworkProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<NetworkProperties> FromValue(const base::Value::Dict& value);

  // Creates a NetworkProperties object from a base::Value, or nullopt on
  // failure.
  static absl::optional<NetworkProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisNetworkProperties object.
  base::Value::Dict ToValue() const;

  absl::optional<CellularProperties> cellular;

  absl::optional<bool> connectable;

  ConnectionStateType connection_state;

  absl::optional<std::string> error_state;

  absl::optional<EthernetProperties> ethernet;

  std::string guid;

  IPConfigType ip_address_config_type;

  absl::optional<std::vector<IPConfigProperties>> ip_configs;

  absl::optional<std::string> mac_address;

  absl::optional<bool> metered;

  absl::optional<std::string> name;

  IPConfigType name_servers_config_type;

  absl::optional<int> priority;

  absl::optional<ProxySettings> proxy_settings;

  absl::optional<bool> restricted_connectivity;

  absl::optional<IPConfigProperties> static_ip_config;

  absl::optional<IPConfigProperties> saved_ip_config;

  // Indicates whether and how the network is configured. 'Source' can be Device,
  // DevicePolicy, User, UserPolicy or None. 'None' conflicts with extension code
  // generation so we must use a string for 'Source' instead of a SourceType enum.
  absl::optional<std::string> source;

  absl::optional<TetherProperties> tether;

  NetworkType type;

  absl::optional<VPNProperties> vpn;

  absl::optional<WiFiProperties> wi_fi;

};

struct ManagedProperties {
  ManagedProperties();
  ~ManagedProperties();
  ManagedProperties(const ManagedProperties&) = delete;
  ManagedProperties& operator=(const ManagedProperties&) = delete;
  ManagedProperties(ManagedProperties&& rhs);
  ManagedProperties& operator=(ManagedProperties&& rhs);

  // Populates a ManagedProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedProperties& out);

  // Populates a ManagedProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedProperties& out);

  // Creates a deep copy of ManagedProperties.
  ManagedProperties Clone() const;

  // Creates a ManagedProperties object from a base::Value, or NULL on failure.
  static std::unique_ptr<ManagedProperties> FromValueDeprecated(const base::Value& value);

  // Creates a ManagedProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ManagedProperties> FromValue(const base::Value::Dict& value);

  // Creates a ManagedProperties object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ManagedProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedProperties object.
  base::Value::Dict ToValue() const;

  absl::optional<ManagedCellularProperties> cellular;

  absl::optional<bool> connectable;

  ConnectionStateType connection_state;

  absl::optional<std::string> error_state;

  absl::optional<ManagedEthernetProperties> ethernet;

  std::string guid;

  absl::optional<ManagedIPConfigType> ip_address_config_type;

  absl::optional<std::vector<IPConfigProperties>> ip_configs;

  absl::optional<std::string> mac_address;

  absl::optional<ManagedBoolean> metered;

  absl::optional<ManagedDOMString> name;

  absl::optional<ManagedIPConfigType> name_servers_config_type;

  absl::optional<ManagedLong> priority;

  absl::optional<ManagedProxySettings> proxy_settings;

  absl::optional<bool> restricted_connectivity;

  absl::optional<ManagedIPConfigProperties> static_ip_config;

  absl::optional<IPConfigProperties> saved_ip_config;

  // See $(ref:NetworkProperties.Source).
  absl::optional<std::string> source;

  absl::optional<TetherProperties> tether;

  NetworkType type;

  absl::optional<ManagedVPNProperties> vpn;

  absl::optional<ManagedWiFiProperties> wi_fi;

};

struct NetworkStateProperties {
  NetworkStateProperties();
  ~NetworkStateProperties();
  NetworkStateProperties(const NetworkStateProperties&) = delete;
  NetworkStateProperties& operator=(const NetworkStateProperties&) = delete;
  NetworkStateProperties(NetworkStateProperties&& rhs);
  NetworkStateProperties& operator=(NetworkStateProperties&& rhs);

  // Populates a NetworkStateProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NetworkStateProperties& out);

  // Populates a NetworkStateProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, NetworkStateProperties& out);

  // Creates a deep copy of NetworkStateProperties.
  NetworkStateProperties Clone() const;

  // Creates a NetworkStateProperties object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<NetworkStateProperties> FromValueDeprecated(const base::Value& value);

  // Creates a NetworkStateProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<NetworkStateProperties> FromValue(const base::Value::Dict& value);

  // Creates a NetworkStateProperties object from a base::Value, or nullopt on
  // failure.
  static absl::optional<NetworkStateProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisNetworkStateProperties object.
  base::Value::Dict ToValue() const;

  absl::optional<CellularStateProperties> cellular;

  absl::optional<bool> connectable;

  ConnectionStateType connection_state;

  absl::optional<EthernetStateProperties> ethernet;

  absl::optional<std::string> error_state;

  std::string guid;

  absl::optional<std::string> name;

  absl::optional<int> priority;

  // See $(ref:NetworkProperties.Source).
  absl::optional<std::string> source;

  absl::optional<TetherProperties> tether;

  NetworkType type;

  absl::optional<VPNStateProperties> vpn;

  absl::optional<WiFiStateProperties> wi_fi;

};

struct DeviceStateProperties {
  DeviceStateProperties();
  ~DeviceStateProperties();
  DeviceStateProperties(const DeviceStateProperties&) = delete;
  DeviceStateProperties& operator=(const DeviceStateProperties&) = delete;
  DeviceStateProperties(DeviceStateProperties&& rhs);
  DeviceStateProperties& operator=(DeviceStateProperties&& rhs);

  // Populates a DeviceStateProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DeviceStateProperties& out);

  // Populates a DeviceStateProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DeviceStateProperties& out);

  // Creates a deep copy of DeviceStateProperties.
  DeviceStateProperties Clone() const;

  // Creates a DeviceStateProperties object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<DeviceStateProperties> FromValueDeprecated(const base::Value& value);

  // Creates a DeviceStateProperties object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<DeviceStateProperties> FromValue(const base::Value::Dict& value);

  // Creates a DeviceStateProperties object from a base::Value, or nullopt on
  // failure.
  static absl::optional<DeviceStateProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDeviceStateProperties object.
  base::Value::Dict ToValue() const;

  // Set if the device is enabled. True if the device is currently scanning.
  absl::optional<bool> scanning;

  // The SIM lock status if Type = Cellular and SIMPresent = True.
  absl::optional<SIMLockStatus> sim_lock_status;

  // Set to the SIM present state if the device type is Cellular.
  absl::optional<bool> sim_present;

  // The current state of the device.
  DeviceStateType state;

  // The network type associated with the device (Cellular, Ethernet or WiFi).
  NetworkType type;

  // Whether or not any managed networks are available/visible.
  absl::optional<bool> managed_network_available;

};

struct NetworkFilter {
  NetworkFilter();
  ~NetworkFilter();
  NetworkFilter(const NetworkFilter&) = delete;
  NetworkFilter& operator=(const NetworkFilter&) = delete;
  NetworkFilter(NetworkFilter&& rhs);
  NetworkFilter& operator=(NetworkFilter&& rhs);

  // Populates a NetworkFilter object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NetworkFilter& out);

  // Populates a NetworkFilter object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, NetworkFilter& out);

  // Creates a deep copy of NetworkFilter.
  NetworkFilter Clone() const;

  // Creates a NetworkFilter object from a base::Value, or NULL on failure.
  static std::unique_ptr<NetworkFilter> FromValueDeprecated(const base::Value& value);

  // Creates a NetworkFilter object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<NetworkFilter> FromValue(const base::Value::Dict& value);

  // Creates a NetworkFilter object from a base::Value, or nullopt on failure.
  static absl::optional<NetworkFilter> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisNetworkFilter object.
  base::Value::Dict ToValue() const;

  // The type of networks to return.
  NetworkType network_type;

  // If true, only include visible (physically connected or in-range) networks.
  // Defaults to 'false'.
  absl::optional<bool> visible;

  // If true, only include configured (saved) networks. Defaults to 'false'.
  absl::optional<bool> configured;

  // Maximum number of networks to return. Defaults to 1000 if unspecified. Use 0
  // for no limit.
  absl::optional<int> limit;

};

struct GlobalPolicy {
  GlobalPolicy();
  ~GlobalPolicy();
  GlobalPolicy(const GlobalPolicy&) = delete;
  GlobalPolicy& operator=(const GlobalPolicy&) = delete;
  GlobalPolicy(GlobalPolicy&& rhs);
  GlobalPolicy& operator=(GlobalPolicy&& rhs);

  // Populates a GlobalPolicy object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GlobalPolicy& out);

  // Populates a GlobalPolicy object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GlobalPolicy& out);

  // Creates a deep copy of GlobalPolicy.
  GlobalPolicy Clone() const;

  // Creates a GlobalPolicy object from a base::Value, or NULL on failure.
  static std::unique_ptr<GlobalPolicy> FromValueDeprecated(const base::Value& value);

  // Creates a GlobalPolicy object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<GlobalPolicy> FromValue(const base::Value::Dict& value);

  // Creates a GlobalPolicy object from a base::Value, or nullopt on failure.
  static absl::optional<GlobalPolicy> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGlobalPolicy object.
  base::Value::Dict ToValue() const;

  // If true, only policy networks may auto connect. Defaults to false.
  absl::optional<bool> allow_only_policy_networks_to_autoconnect;

  // If true, only policy networks may be connected to and no new networks may be
  // added or configured. Defaults to false.
  absl::optional<bool> allow_only_policy_networks_to_connect;

  // If true and a managed network is available in the visible network list, only
  // policy networks may be connected to and no new networks may be added or
  // configured. Defaults to false.
  absl::optional<bool> allow_only_policy_networks_to_connect_if_available;

  // List of blocked networks. Connections to blocked networks are prohibited.
  // Networks can be allowed again by specifying an explicit network
  // configuration. Defaults to an empty list.
  absl::optional<std::vector<std::string>> blocked_hex_ssi_ds;

};

struct Certificate {
  Certificate();
  ~Certificate();
  Certificate(const Certificate&) = delete;
  Certificate& operator=(const Certificate&) = delete;
  Certificate(Certificate&& rhs);
  Certificate& operator=(Certificate&& rhs);

  // Populates a Certificate object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, Certificate& out);

  // Populates a Certificate object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, Certificate& out);

  // Creates a deep copy of Certificate.
  Certificate Clone() const;

  // Creates a Certificate object from a base::Value, or NULL on failure.
  static std::unique_ptr<Certificate> FromValueDeprecated(const base::Value& value);

  // Creates a Certificate object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<Certificate> FromValue(const base::Value::Dict& value);

  // Creates a Certificate object from a base::Value, or nullopt on failure.
  static absl::optional<Certificate> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCertificate object.
  base::Value::Dict ToValue() const;

  // Unique hash for the certificate.
  std::string hash;

  // Certificate issuer common name.
  std::string issued_by;

  // Certificate name or nickname.
  std::string issued_to;

  // PEM for server CA certificates.
  absl::optional<std::string> pem;

  // PKCS#11 id for user certificates.
  absl::optional<std::string> pkcs11_id;

  // Whether or not the certificate is hardware backed.
  bool hardware_backed;

  // Whether or not the certificate is device wide.
  bool device_wide;

};

struct CertificateLists {
  CertificateLists();
  ~CertificateLists();
  CertificateLists(const CertificateLists&) = delete;
  CertificateLists& operator=(const CertificateLists&) = delete;
  CertificateLists(CertificateLists&& rhs);
  CertificateLists& operator=(CertificateLists&& rhs);

  // Populates a CertificateLists object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CertificateLists& out);

  // Populates a CertificateLists object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CertificateLists& out);

  // Creates a deep copy of CertificateLists.
  CertificateLists Clone() const;

  // Creates a CertificateLists object from a base::Value, or NULL on failure.
  static std::unique_ptr<CertificateLists> FromValueDeprecated(const base::Value& value);

  // Creates a CertificateLists object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<CertificateLists> FromValue(const base::Value::Dict& value);

  // Creates a CertificateLists object from a base::Value, or nullopt on
  // failure.
  static absl::optional<CertificateLists> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCertificateLists object.
  base::Value::Dict ToValue() const;

  // List of avaliable server CA certificates.
  std::vector<Certificate> server_ca_certificates;

  // List of available user certificates.
  std::vector<Certificate> user_certificates;

};


//
// Functions
//

namespace GetProperties {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The GUID of the network to get properties for.
  std::string network_guid;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const NetworkProperties& result);
}  // namespace Results

}  // namespace GetProperties

namespace GetManagedProperties {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The GUID of the network to get properties for.
  std::string network_guid;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const ManagedProperties& result);
}  // namespace Results

}  // namespace GetManagedProperties

namespace GetState {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The GUID of the network to get properties for.
  std::string network_guid;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const NetworkStateProperties& result);
}  // namespace Results

}  // namespace GetState

namespace SetProperties {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The GUID of the network to set properties for.
  std::string network_guid;

  // The properties to set.
  NetworkConfigProperties properties;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetProperties

namespace CreateNetwork {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // If true, share this network configuration with other users.
  bool shared;

  // The properties to configure the new network with.
  NetworkConfigProperties properties;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& result);
}  // namespace Results

}  // namespace CreateNetwork

namespace ForgetNetwork {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The GUID of the network to forget.
  std::string network_guid;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ForgetNetwork

namespace GetNetworks {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Describes which networks to return.
  NetworkFilter filter;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<NetworkStateProperties>& result);
}  // namespace Results

}  // namespace GetNetworks

namespace GetVisibleNetworks {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  NetworkType network_type;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<NetworkStateProperties>& result);
}  // namespace Results

}  // namespace GetVisibleNetworks

namespace GetEnabledNetworkTypes {

namespace Results {

base::Value::List Create(const std::vector<NetworkType>& result);
}  // namespace Results

}  // namespace GetEnabledNetworkTypes

namespace GetDeviceStates {

namespace Results {

base::Value::List Create(const std::vector<DeviceStateProperties>& result);
}  // namespace Results

}  // namespace GetDeviceStates

namespace EnableNetworkType {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The type of network to enable.
  NetworkType network_type;


 private:
  Params();
};

}  // namespace EnableNetworkType

namespace DisableNetworkType {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The type of network to disable.
  NetworkType network_type;


 private:
  Params();
};

}  // namespace DisableNetworkType

namespace RequestNetworkScan {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // If provided, requests a scan specific to the type.     For Cellular a mobile
  // network scan will be requested if supported.
  NetworkType network_type;


 private:
  Params();
};

}  // namespace RequestNetworkScan

namespace StartConnect {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The GUID of the network to connect to.
  std::string network_guid;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace StartConnect

namespace StartDisconnect {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The GUID of the network to disconnect from.
  std::string network_guid;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace StartDisconnect

namespace StartActivate {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The GUID of the Cellular network to activate.
  std::string network_guid;

  // Optional name of carrier to activate.
  absl::optional<std::string> carrier;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace StartActivate

namespace GetCaptivePortalStatus {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The GUID of the network to get captive portal status for.
  std::string network_guid;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const CaptivePortalStatus& result);
}  // namespace Results

}  // namespace GetCaptivePortalStatus

namespace UnlockCellularSim {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The GUID of the cellular network to unlock.     If empty, the default
  // cellular device will be used.
  std::string network_guid;

  // The current SIM PIN, or the new PIN if PUK is provided.
  std::string pin;

  // The operator provided PUK for unblocking a blocked SIM.
  absl::optional<std::string> puk;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace UnlockCellularSim

namespace SetCellularSimState {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The GUID of the cellular network to set the SIM state of.     If empty, the
  // default cellular device will be used.
  std::string network_guid;

  // The SIM state to set.
  CellularSimState sim_state;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetCellularSimState

namespace SelectCellularMobileNetwork {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The GUID of the cellular network to select the network     for. If empty, the
  // default cellular device will be used.
  std::string network_guid;

  // The networkId to select.
  std::string network_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SelectCellularMobileNetwork

namespace GetGlobalPolicy {

namespace Results {

base::Value::List Create(const GlobalPolicy& result);
}  // namespace Results

}  // namespace GetGlobalPolicy

namespace GetCertificateLists {

namespace Results {

base::Value::List Create(const CertificateLists& result);
}  // namespace Results

}  // namespace GetCertificateLists

//
// Events
//

namespace OnNetworksChanged {

extern const char kEventName[];  // "networkingPrivate.onNetworksChanged"

base::Value::List Create(const std::vector<std::string>& changes);
}  // namespace OnNetworksChanged

namespace OnNetworkListChanged {

extern const char kEventName[];  // "networkingPrivate.onNetworkListChanged"

base::Value::List Create(const std::vector<std::string>& changes);
}  // namespace OnNetworkListChanged

namespace OnDeviceStateListChanged {

extern const char kEventName[];  // "networkingPrivate.onDeviceStateListChanged"

base::Value::List Create();
}  // namespace OnDeviceStateListChanged

namespace OnPortalDetectionCompleted {

extern const char kEventName[];  // "networkingPrivate.onPortalDetectionCompleted"

base::Value::List Create(const std::string& network_guid, const CaptivePortalStatus& status);
}  // namespace OnPortalDetectionCompleted

namespace OnCertificateListsChanged {

extern const char kEventName[];  // "networkingPrivate.onCertificateListsChanged"

base::Value::List Create();
}  // namespace OnCertificateListsChanged

}  // namespace networking_private
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_NETWORKING_PRIVATE_H__
