// Copyright 2024 The Chromium Authors
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
#include <optional>
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
  ManagedBoolean(ManagedBoolean&& rhs) noexcept;
  ManagedBoolean& operator=(ManagedBoolean&& rhs) noexcept;

  // Populates a ManagedBoolean object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedBoolean& out);

  // Populates a ManagedBoolean object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedBoolean& out);

  // Creates a deep copy of ManagedBoolean.
  ManagedBoolean Clone() const;

  // Creates a ManagedBoolean object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ManagedBoolean> FromValue(const base::Value::Dict& value);

  // Creates a ManagedBoolean object from a base::Value, or nullopt on failure.
  static std::optional<ManagedBoolean> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedBoolean object.
  base::Value::Dict ToValue() const;

  std::optional<bool> active;

  std::optional<std::string> effective;

  std::optional<bool> user_policy;

  std::optional<bool> device_policy;

  std::optional<bool> user_setting;

  std::optional<bool> shared_setting;

  std::optional<bool> user_editable;

  std::optional<bool> device_editable;

};

struct ManagedLong {
  ManagedLong();
  ~ManagedLong();
  ManagedLong(const ManagedLong&) = delete;
  ManagedLong& operator=(const ManagedLong&) = delete;
  ManagedLong(ManagedLong&& rhs) noexcept;
  ManagedLong& operator=(ManagedLong&& rhs) noexcept;

  // Populates a ManagedLong object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedLong& out);

  // Populates a ManagedLong object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedLong& out);

  // Creates a deep copy of ManagedLong.
  ManagedLong Clone() const;

  // Creates a ManagedLong object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ManagedLong> FromValue(const base::Value::Dict& value);

  // Creates a ManagedLong object from a base::Value, or nullopt on failure.
  static std::optional<ManagedLong> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedLong object.
  base::Value::Dict ToValue() const;

  std::optional<int> active;

  std::optional<std::string> effective;

  std::optional<int> user_policy;

  std::optional<int> device_policy;

  std::optional<int> user_setting;

  std::optional<int> shared_setting;

  std::optional<bool> user_editable;

  std::optional<bool> device_editable;

};

struct ManagedDOMString {
  ManagedDOMString();
  ~ManagedDOMString();
  ManagedDOMString(const ManagedDOMString&) = delete;
  ManagedDOMString& operator=(const ManagedDOMString&) = delete;
  ManagedDOMString(ManagedDOMString&& rhs) noexcept;
  ManagedDOMString& operator=(ManagedDOMString&& rhs) noexcept;

  // Populates a ManagedDOMString object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedDOMString& out);

  // Populates a ManagedDOMString object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedDOMString& out);

  // Creates a deep copy of ManagedDOMString.
  ManagedDOMString Clone() const;

  // Creates a ManagedDOMString object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ManagedDOMString> FromValue(const base::Value::Dict& value);

  // Creates a ManagedDOMString object from a base::Value, or nullopt on
  // failure.
  static std::optional<ManagedDOMString> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedDOMString object.
  base::Value::Dict ToValue() const;

  std::optional<std::string> active;

  std::optional<std::string> effective;

  std::optional<std::string> user_policy;

  std::optional<std::string> device_policy;

  std::optional<std::string> user_setting;

  std::optional<std::string> shared_setting;

  std::optional<bool> user_editable;

  std::optional<bool> device_editable;

};

struct ManagedDOMStringList {
  ManagedDOMStringList();
  ~ManagedDOMStringList();
  ManagedDOMStringList(const ManagedDOMStringList&) = delete;
  ManagedDOMStringList& operator=(const ManagedDOMStringList&) = delete;
  ManagedDOMStringList(ManagedDOMStringList&& rhs) noexcept;
  ManagedDOMStringList& operator=(ManagedDOMStringList&& rhs) noexcept;

  // Populates a ManagedDOMStringList object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedDOMStringList& out);

  // Populates a ManagedDOMStringList object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedDOMStringList& out);

  // Creates a deep copy of ManagedDOMStringList.
  ManagedDOMStringList Clone() const;

  // Creates a ManagedDOMStringList object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<ManagedDOMStringList> FromValue(const base::Value::Dict& value);

  // Creates a ManagedDOMStringList object from a base::Value, or nullopt on
  // failure.
  static std::optional<ManagedDOMStringList> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedDOMStringList object.
  base::Value::Dict ToValue() const;

  std::optional<std::vector<std::string>> active;

  std::optional<std::string> effective;

  std::optional<std::vector<std::string>> user_policy;

  std::optional<std::vector<std::string>> device_policy;

  std::optional<std::vector<std::string>> user_setting;

  std::optional<std::vector<std::string>> shared_setting;

  std::optional<bool> user_editable;

  std::optional<bool> device_editable;

};

struct ManagedIPConfigType {
  ManagedIPConfigType();
  ~ManagedIPConfigType();
  ManagedIPConfigType(const ManagedIPConfigType&) = delete;
  ManagedIPConfigType& operator=(const ManagedIPConfigType&) = delete;
  ManagedIPConfigType(ManagedIPConfigType&& rhs) noexcept;
  ManagedIPConfigType& operator=(ManagedIPConfigType&& rhs) noexcept;

  // Populates a ManagedIPConfigType object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedIPConfigType& out);

  // Populates a ManagedIPConfigType object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedIPConfigType& out);

  // Creates a deep copy of ManagedIPConfigType.
  ManagedIPConfigType Clone() const;

  // Creates a ManagedIPConfigType object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<ManagedIPConfigType> FromValue(const base::Value::Dict& value);

  // Creates a ManagedIPConfigType object from a base::Value, or nullopt on
  // failure.
  static std::optional<ManagedIPConfigType> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedIPConfigType object.
  base::Value::Dict ToValue() const;

  IPConfigType active;

  std::optional<std::string> effective;

  IPConfigType user_policy;

  IPConfigType device_policy;

  IPConfigType user_setting;

  IPConfigType shared_setting;

  std::optional<bool> user_editable;

  std::optional<bool> device_editable;

};

struct ManagedProxySettingsType {
  ManagedProxySettingsType();
  ~ManagedProxySettingsType();
  ManagedProxySettingsType(const ManagedProxySettingsType&) = delete;
  ManagedProxySettingsType& operator=(const ManagedProxySettingsType&) = delete;
  ManagedProxySettingsType(ManagedProxySettingsType&& rhs) noexcept;
  ManagedProxySettingsType& operator=(ManagedProxySettingsType&& rhs) noexcept;

  // Populates a ManagedProxySettingsType object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedProxySettingsType& out);

  // Populates a ManagedProxySettingsType object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedProxySettingsType& out);

  // Creates a deep copy of ManagedProxySettingsType.
  ManagedProxySettingsType Clone() const;

  // Creates a ManagedProxySettingsType object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<ManagedProxySettingsType> FromValue(const base::Value::Dict& value);

  // Creates a ManagedProxySettingsType object from a base::Value, or nullopt on
  // failure.
  static std::optional<ManagedProxySettingsType> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedProxySettingsType object.
  base::Value::Dict ToValue() const;

  ProxySettingsType active;

  std::optional<std::string> effective;

  ProxySettingsType user_policy;

  ProxySettingsType device_policy;

  ProxySettingsType user_setting;

  ProxySettingsType shared_setting;

  std::optional<bool> user_editable;

  std::optional<bool> device_editable;

};

struct APNProperties {
  APNProperties();
  ~APNProperties();
  APNProperties(const APNProperties&) = delete;
  APNProperties& operator=(const APNProperties&) = delete;
  APNProperties(APNProperties&& rhs) noexcept;
  APNProperties& operator=(APNProperties&& rhs) noexcept;

  // Populates a APNProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, APNProperties& out);

  // Populates a APNProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, APNProperties& out);

  // Creates a deep copy of APNProperties.
  APNProperties Clone() const;

  // Creates a APNProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<APNProperties> FromValue(const base::Value::Dict& value);

  // Creates a APNProperties object from a base::Value, or nullopt on failure.
  static std::optional<APNProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAPNProperties object.
  base::Value::Dict ToValue() const;

  std::string access_point_name;

  std::optional<std::string> authentication;

  std::optional<std::string> language;

  std::optional<std::string> localized_name;

  std::optional<std::string> name;

  std::optional<std::string> password;

  std::optional<std::string> username;

};

struct ManagedAPNProperties {
  ManagedAPNProperties();
  ~ManagedAPNProperties();
  ManagedAPNProperties(const ManagedAPNProperties&) = delete;
  ManagedAPNProperties& operator=(const ManagedAPNProperties&) = delete;
  ManagedAPNProperties(ManagedAPNProperties&& rhs) noexcept;
  ManagedAPNProperties& operator=(ManagedAPNProperties&& rhs) noexcept;

  // Populates a ManagedAPNProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedAPNProperties& out);

  // Populates a ManagedAPNProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedAPNProperties& out);

  // Creates a deep copy of ManagedAPNProperties.
  ManagedAPNProperties Clone() const;

  // Creates a ManagedAPNProperties object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<ManagedAPNProperties> FromValue(const base::Value::Dict& value);

  // Creates a ManagedAPNProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<ManagedAPNProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedAPNProperties object.
  base::Value::Dict ToValue() const;

  ManagedDOMString access_point_name;

  std::optional<ManagedDOMString> authentication;

  std::optional<ManagedDOMString> language;

  std::optional<ManagedDOMString> localized_name;

  std::optional<ManagedDOMString> name;

  std::optional<ManagedDOMString> password;

  std::optional<ManagedDOMString> username;

};

struct ManagedAPNList {
  ManagedAPNList();
  ~ManagedAPNList();
  ManagedAPNList(const ManagedAPNList&) = delete;
  ManagedAPNList& operator=(const ManagedAPNList&) = delete;
  ManagedAPNList(ManagedAPNList&& rhs) noexcept;
  ManagedAPNList& operator=(ManagedAPNList&& rhs) noexcept;

  // Populates a ManagedAPNList object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedAPNList& out);

  // Populates a ManagedAPNList object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedAPNList& out);

  // Creates a deep copy of ManagedAPNList.
  ManagedAPNList Clone() const;

  // Creates a ManagedAPNList object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ManagedAPNList> FromValue(const base::Value::Dict& value);

  // Creates a ManagedAPNList object from a base::Value, or nullopt on failure.
  static std::optional<ManagedAPNList> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedAPNList object.
  base::Value::Dict ToValue() const;

  std::optional<std::vector<APNProperties>> active;

  std::optional<std::string> effective;

  std::optional<std::vector<APNProperties>> user_policy;

  std::optional<std::vector<APNProperties>> device_policy;

  std::optional<std::vector<APNProperties>> user_setting;

  std::optional<std::vector<APNProperties>> shared_setting;

  std::optional<bool> user_editable;

  std::optional<bool> device_editable;

};

struct CellularProviderProperties {
  CellularProviderProperties();
  ~CellularProviderProperties();
  CellularProviderProperties(const CellularProviderProperties&) = delete;
  CellularProviderProperties& operator=(const CellularProviderProperties&) = delete;
  CellularProviderProperties(CellularProviderProperties&& rhs) noexcept;
  CellularProviderProperties& operator=(CellularProviderProperties&& rhs) noexcept;

  // Populates a CellularProviderProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CellularProviderProperties& out);

  // Populates a CellularProviderProperties object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CellularProviderProperties& out);

  // Creates a deep copy of CellularProviderProperties.
  CellularProviderProperties Clone() const;

  // Creates a CellularProviderProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<CellularProviderProperties> FromValue(const base::Value::Dict& value);

  // Creates a CellularProviderProperties object from a base::Value, or nullopt
  // on failure.
  static std::optional<CellularProviderProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCellularProviderProperties object.
  base::Value::Dict ToValue() const;

  std::string name;

  std::string code;

  std::optional<std::string> country;

};

struct CellularSimState {
  CellularSimState();
  ~CellularSimState();
  CellularSimState(const CellularSimState&) = delete;
  CellularSimState& operator=(const CellularSimState&) = delete;
  CellularSimState(CellularSimState&& rhs) noexcept;
  CellularSimState& operator=(CellularSimState&& rhs) noexcept;

  // Populates a CellularSimState object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CellularSimState& out);

  // Populates a CellularSimState object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CellularSimState& out);

  // Creates a deep copy of CellularSimState.
  CellularSimState Clone() const;

  // Creates a CellularSimState object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<CellularSimState> FromValue(const base::Value::Dict& value);

  // Creates a CellularSimState object from a base::Value, or nullopt on
  // failure.
  static std::optional<CellularSimState> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCellularSimState object.
  base::Value::Dict ToValue() const;

  // Whether or not a PIN should be required.
  bool require_pin;

  // The current PIN (required for any change, even when the SIM is unlocked).
  std::string current_pin;

  // If provided, change the PIN to |newPin|. |requirePin| must be true.
  std::optional<std::string> new_pin;

};

struct IssuerSubjectPattern {
  IssuerSubjectPattern();
  ~IssuerSubjectPattern();
  IssuerSubjectPattern(const IssuerSubjectPattern&) = delete;
  IssuerSubjectPattern& operator=(const IssuerSubjectPattern&) = delete;
  IssuerSubjectPattern(IssuerSubjectPattern&& rhs) noexcept;
  IssuerSubjectPattern& operator=(IssuerSubjectPattern&& rhs) noexcept;

  // Populates a IssuerSubjectPattern object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, IssuerSubjectPattern& out);

  // Populates a IssuerSubjectPattern object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, IssuerSubjectPattern& out);

  // Creates a deep copy of IssuerSubjectPattern.
  IssuerSubjectPattern Clone() const;

  // Creates a IssuerSubjectPattern object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<IssuerSubjectPattern> FromValue(const base::Value::Dict& value);

  // Creates a IssuerSubjectPattern object from a base::Value, or nullopt on
  // failure.
  static std::optional<IssuerSubjectPattern> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisIssuerSubjectPattern object.
  base::Value::Dict ToValue() const;

  std::optional<std::string> common_name;

  std::optional<std::string> locality;

  std::optional<std::string> organization;

  std::optional<std::string> organizational_unit;

};

struct ManagedIssuerSubjectPattern {
  ManagedIssuerSubjectPattern();
  ~ManagedIssuerSubjectPattern();
  ManagedIssuerSubjectPattern(const ManagedIssuerSubjectPattern&) = delete;
  ManagedIssuerSubjectPattern& operator=(const ManagedIssuerSubjectPattern&) = delete;
  ManagedIssuerSubjectPattern(ManagedIssuerSubjectPattern&& rhs) noexcept;
  ManagedIssuerSubjectPattern& operator=(ManagedIssuerSubjectPattern&& rhs) noexcept;

  // Populates a ManagedIssuerSubjectPattern object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedIssuerSubjectPattern& out);

  // Populates a ManagedIssuerSubjectPattern object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedIssuerSubjectPattern& out);

  // Creates a deep copy of ManagedIssuerSubjectPattern.
  ManagedIssuerSubjectPattern Clone() const;

  // Creates a ManagedIssuerSubjectPattern object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<ManagedIssuerSubjectPattern> FromValue(const base::Value::Dict& value);

  // Creates a ManagedIssuerSubjectPattern object from a base::Value, or nullopt
  // on failure.
  static std::optional<ManagedIssuerSubjectPattern> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedIssuerSubjectPattern object.
  base::Value::Dict ToValue() const;

  std::optional<ManagedDOMString> common_name;

  std::optional<ManagedDOMString> locality;

  std::optional<ManagedDOMString> organization;

  std::optional<ManagedDOMString> organizational_unit;

};

struct CertificatePattern {
  CertificatePattern();
  ~CertificatePattern();
  CertificatePattern(const CertificatePattern&) = delete;
  CertificatePattern& operator=(const CertificatePattern&) = delete;
  CertificatePattern(CertificatePattern&& rhs) noexcept;
  CertificatePattern& operator=(CertificatePattern&& rhs) noexcept;

  // Populates a CertificatePattern object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CertificatePattern& out);

  // Populates a CertificatePattern object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CertificatePattern& out);

  // Creates a deep copy of CertificatePattern.
  CertificatePattern Clone() const;

  // Creates a CertificatePattern object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<CertificatePattern> FromValue(const base::Value::Dict& value);

  // Creates a CertificatePattern object from a base::Value, or nullopt on
  // failure.
  static std::optional<CertificatePattern> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCertificatePattern object.
  base::Value::Dict ToValue() const;

  std::optional<std::vector<std::string>> enrollment_uri;

  std::optional<IssuerSubjectPattern> issuer;

  std::optional<std::vector<std::string>> issuer_cape_ms;

  std::optional<std::vector<std::string>> issuer_ca_ref;

  std::optional<IssuerSubjectPattern> subject;

};

struct ManagedCertificatePattern {
  ManagedCertificatePattern();
  ~ManagedCertificatePattern();
  ManagedCertificatePattern(const ManagedCertificatePattern&) = delete;
  ManagedCertificatePattern& operator=(const ManagedCertificatePattern&) = delete;
  ManagedCertificatePattern(ManagedCertificatePattern&& rhs) noexcept;
  ManagedCertificatePattern& operator=(ManagedCertificatePattern&& rhs) noexcept;

  // Populates a ManagedCertificatePattern object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedCertificatePattern& out);

  // Populates a ManagedCertificatePattern object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedCertificatePattern& out);

  // Creates a deep copy of ManagedCertificatePattern.
  ManagedCertificatePattern Clone() const;

  // Creates a ManagedCertificatePattern object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<ManagedCertificatePattern> FromValue(const base::Value::Dict& value);

  // Creates a ManagedCertificatePattern object from a base::Value, or nullopt
  // on failure.
  static std::optional<ManagedCertificatePattern> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedCertificatePattern object.
  base::Value::Dict ToValue() const;

  std::optional<ManagedDOMStringList> enrollment_uri;

  std::optional<ManagedIssuerSubjectPattern> issuer;

  std::optional<ManagedDOMStringList> issuer_ca_ref;

  std::optional<ManagedIssuerSubjectPattern> subject;

};

struct EAPProperties {
  EAPProperties();
  ~EAPProperties();
  EAPProperties(const EAPProperties&) = delete;
  EAPProperties& operator=(const EAPProperties&) = delete;
  EAPProperties(EAPProperties&& rhs) noexcept;
  EAPProperties& operator=(EAPProperties&& rhs) noexcept;

  // Populates a EAPProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EAPProperties& out);

  // Populates a EAPProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, EAPProperties& out);

  // Creates a deep copy of EAPProperties.
  EAPProperties Clone() const;

  // Creates a EAPProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<EAPProperties> FromValue(const base::Value::Dict& value);

  // Creates a EAPProperties object from a base::Value, or nullopt on failure.
  static std::optional<EAPProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisEAPProperties object.
  base::Value::Dict ToValue() const;

  std::optional<std::string> anonymous_identity;

  std::optional<CertificatePattern> client_cert_pattern;

  std::optional<std::string> client_cert_pkcs11_id;

  std::optional<std::string> client_cert_provisioning_profile_id;

  std::optional<std::string> client_cert_ref;

  std::optional<std::string> client_cert_type;

  std::optional<std::string> identity;

  std::optional<std::string> inner;

  // The outer EAP type. Required by ONC, but may not be provided when translating
  // from Shill.
  std::optional<std::string> outer;

  std::optional<std::string> password;

  std::optional<bool> save_credentials;

  std::optional<std::vector<std::string>> server_cape_ms;

  std::optional<std::vector<std::string>> server_ca_refs;

  std::optional<std::string> subject_match;

  std::optional<std::string> tls_version_max;

  std::optional<bool> use_proactive_key_caching;

  std::optional<bool> use_system_c_as;

};

struct ManagedEAPProperties {
  ManagedEAPProperties();
  ~ManagedEAPProperties();
  ManagedEAPProperties(const ManagedEAPProperties&) = delete;
  ManagedEAPProperties& operator=(const ManagedEAPProperties&) = delete;
  ManagedEAPProperties(ManagedEAPProperties&& rhs) noexcept;
  ManagedEAPProperties& operator=(ManagedEAPProperties&& rhs) noexcept;

  // Populates a ManagedEAPProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedEAPProperties& out);

  // Populates a ManagedEAPProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedEAPProperties& out);

  // Creates a deep copy of ManagedEAPProperties.
  ManagedEAPProperties Clone() const;

  // Creates a ManagedEAPProperties object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<ManagedEAPProperties> FromValue(const base::Value::Dict& value);

  // Creates a ManagedEAPProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<ManagedEAPProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedEAPProperties object.
  base::Value::Dict ToValue() const;

  std::optional<ManagedDOMString> anonymous_identity;

  std::optional<ManagedCertificatePattern> client_cert_pattern;

  std::optional<ManagedDOMString> client_cert_pkcs11_id;

  std::optional<ManagedDOMString> client_cert_provisioning_profile_id;

  std::optional<ManagedDOMString> client_cert_ref;

  std::optional<ManagedDOMString> client_cert_type;

  std::optional<ManagedDOMString> identity;

  std::optional<ManagedDOMString> inner;

  // The outer EAP type. Required by ONC, but may not be provided when translating
  // from Shill.
  std::optional<ManagedDOMString> outer;

  std::optional<ManagedDOMString> password;

  std::optional<ManagedBoolean> save_credentials;

  std::optional<ManagedDOMStringList> server_cape_ms;

  std::optional<ManagedDOMStringList> server_ca_refs;

  std::optional<ManagedDOMString> subject_match;

  std::optional<ManagedDOMString> tls_version_max;

  std::optional<ManagedBoolean> use_proactive_key_caching;

  std::optional<ManagedBoolean> use_system_c_as;

};

struct FoundNetworkProperties {
  FoundNetworkProperties();
  ~FoundNetworkProperties();
  FoundNetworkProperties(const FoundNetworkProperties&) = delete;
  FoundNetworkProperties& operator=(const FoundNetworkProperties&) = delete;
  FoundNetworkProperties(FoundNetworkProperties&& rhs) noexcept;
  FoundNetworkProperties& operator=(FoundNetworkProperties&& rhs) noexcept;

  // Populates a FoundNetworkProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, FoundNetworkProperties& out);

  // Populates a FoundNetworkProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, FoundNetworkProperties& out);

  // Creates a deep copy of FoundNetworkProperties.
  FoundNetworkProperties Clone() const;

  // Creates a FoundNetworkProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<FoundNetworkProperties> FromValue(const base::Value::Dict& value);

  // Creates a FoundNetworkProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<FoundNetworkProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisFoundNetworkProperties object.
  base::Value::Dict ToValue() const;

  std::string status;

  std::string network_id;

  std::string technology;

  std::optional<std::string> short_name;

  std::optional<std::string> long_name;

};

struct IPConfigProperties {
  IPConfigProperties();
  ~IPConfigProperties();
  IPConfigProperties(const IPConfigProperties&) = delete;
  IPConfigProperties& operator=(const IPConfigProperties&) = delete;
  IPConfigProperties(IPConfigProperties&& rhs) noexcept;
  IPConfigProperties& operator=(IPConfigProperties&& rhs) noexcept;

  // Populates a IPConfigProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, IPConfigProperties& out);

  // Populates a IPConfigProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, IPConfigProperties& out);

  // Creates a deep copy of IPConfigProperties.
  IPConfigProperties Clone() const;

  // Creates a IPConfigProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<IPConfigProperties> FromValue(const base::Value::Dict& value);

  // Creates a IPConfigProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<IPConfigProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisIPConfigProperties object.
  base::Value::Dict ToValue() const;

  std::optional<std::string> gateway;

  std::optional<std::string> ip_address;

  std::optional<std::vector<std::string>> excluded_routes;

  std::optional<std::vector<std::string>> included_routes;

  std::optional<std::vector<std::string>> name_servers;

  std::optional<std::vector<std::string>> search_domains;

  std::optional<int> routing_prefix;

  std::optional<std::string> type;

  std::optional<std::string> web_proxy_auto_discovery_url;

};

struct ManagedIPConfigProperties {
  ManagedIPConfigProperties();
  ~ManagedIPConfigProperties();
  ManagedIPConfigProperties(const ManagedIPConfigProperties&) = delete;
  ManagedIPConfigProperties& operator=(const ManagedIPConfigProperties&) = delete;
  ManagedIPConfigProperties(ManagedIPConfigProperties&& rhs) noexcept;
  ManagedIPConfigProperties& operator=(ManagedIPConfigProperties&& rhs) noexcept;

  // Populates a ManagedIPConfigProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedIPConfigProperties& out);

  // Populates a ManagedIPConfigProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedIPConfigProperties& out);

  // Creates a deep copy of ManagedIPConfigProperties.
  ManagedIPConfigProperties Clone() const;

  // Creates a ManagedIPConfigProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<ManagedIPConfigProperties> FromValue(const base::Value::Dict& value);

  // Creates a ManagedIPConfigProperties object from a base::Value, or nullopt
  // on failure.
  static std::optional<ManagedIPConfigProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedIPConfigProperties object.
  base::Value::Dict ToValue() const;

  std::optional<ManagedDOMString> gateway;

  std::optional<ManagedDOMString> ip_address;

  std::optional<ManagedDOMStringList> name_servers;

  std::optional<ManagedLong> routing_prefix;

  std::optional<ManagedDOMString> type;

  std::optional<ManagedDOMString> web_proxy_auto_discovery_url;

};

struct XAUTHProperties {
  XAUTHProperties();
  ~XAUTHProperties();
  XAUTHProperties(const XAUTHProperties&) = delete;
  XAUTHProperties& operator=(const XAUTHProperties&) = delete;
  XAUTHProperties(XAUTHProperties&& rhs) noexcept;
  XAUTHProperties& operator=(XAUTHProperties&& rhs) noexcept;

  // Populates a XAUTHProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, XAUTHProperties& out);

  // Populates a XAUTHProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, XAUTHProperties& out);

  // Creates a deep copy of XAUTHProperties.
  XAUTHProperties Clone() const;

  // Creates a XAUTHProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<XAUTHProperties> FromValue(const base::Value::Dict& value);

  // Creates a XAUTHProperties object from a base::Value, or nullopt on failure.
  static std::optional<XAUTHProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisXAUTHProperties object.
  base::Value::Dict ToValue() const;

  std::optional<std::string> password;

  std::optional<bool> save_credentials;

  std::optional<std::string> username;

};

struct ManagedXAUTHProperties {
  ManagedXAUTHProperties();
  ~ManagedXAUTHProperties();
  ManagedXAUTHProperties(const ManagedXAUTHProperties&) = delete;
  ManagedXAUTHProperties& operator=(const ManagedXAUTHProperties&) = delete;
  ManagedXAUTHProperties(ManagedXAUTHProperties&& rhs) noexcept;
  ManagedXAUTHProperties& operator=(ManagedXAUTHProperties&& rhs) noexcept;

  // Populates a ManagedXAUTHProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedXAUTHProperties& out);

  // Populates a ManagedXAUTHProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedXAUTHProperties& out);

  // Creates a deep copy of ManagedXAUTHProperties.
  ManagedXAUTHProperties Clone() const;

  // Creates a ManagedXAUTHProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<ManagedXAUTHProperties> FromValue(const base::Value::Dict& value);

  // Creates a ManagedXAUTHProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<ManagedXAUTHProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedXAUTHProperties object.
  base::Value::Dict ToValue() const;

  std::optional<ManagedDOMString> password;

  std::optional<ManagedBoolean> save_credentials;

  std::optional<ManagedDOMString> username;

};

struct IPSecProperties {
  IPSecProperties();
  ~IPSecProperties();
  IPSecProperties(const IPSecProperties&) = delete;
  IPSecProperties& operator=(const IPSecProperties&) = delete;
  IPSecProperties(IPSecProperties&& rhs) noexcept;
  IPSecProperties& operator=(IPSecProperties&& rhs) noexcept;

  // Populates a IPSecProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, IPSecProperties& out);

  // Populates a IPSecProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, IPSecProperties& out);

  // Creates a deep copy of IPSecProperties.
  IPSecProperties Clone() const;

  // Creates a IPSecProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<IPSecProperties> FromValue(const base::Value::Dict& value);

  // Creates a IPSecProperties object from a base::Value, or nullopt on failure.
  static std::optional<IPSecProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisIPSecProperties object.
  base::Value::Dict ToValue() const;

  std::string authentication_type;

  std::optional<CertificatePattern> client_cert_pattern;

  std::optional<std::string> client_cert_pkcs11_id;

  std::optional<std::string> client_cert_provisioning_profile_id;

  std::optional<std::string> client_cert_ref;

  std::optional<std::string> client_cert_type;

  std::optional<EAPProperties> eap;

  std::optional<std::string> group;

  std::optional<int> ike_version;

  std::optional<std::string> local_identity;

  std::optional<std::string> psk;

  std::optional<std::string> remote_identity;

  std::optional<bool> save_credentials;

  std::optional<std::vector<std::string>> server_cape_ms;

  std::optional<std::vector<std::string>> server_ca_refs;

  std::optional<XAUTHProperties> xauth;

};

struct ManagedIPSecProperties {
  ManagedIPSecProperties();
  ~ManagedIPSecProperties();
  ManagedIPSecProperties(const ManagedIPSecProperties&) = delete;
  ManagedIPSecProperties& operator=(const ManagedIPSecProperties&) = delete;
  ManagedIPSecProperties(ManagedIPSecProperties&& rhs) noexcept;
  ManagedIPSecProperties& operator=(ManagedIPSecProperties&& rhs) noexcept;

  // Populates a ManagedIPSecProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedIPSecProperties& out);

  // Populates a ManagedIPSecProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedIPSecProperties& out);

  // Creates a deep copy of ManagedIPSecProperties.
  ManagedIPSecProperties Clone() const;

  // Creates a ManagedIPSecProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<ManagedIPSecProperties> FromValue(const base::Value::Dict& value);

  // Creates a ManagedIPSecProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<ManagedIPSecProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedIPSecProperties object.
  base::Value::Dict ToValue() const;

  ManagedDOMString authentication_type;

  std::optional<ManagedCertificatePattern> client_cert_pattern;

  std::optional<ManagedDOMString> client_cert_pkcs11_id;

  std::optional<ManagedDOMString> client_cert_provisioning_profile_id;

  std::optional<ManagedDOMString> client_cert_ref;

  std::optional<ManagedDOMString> client_cert_type;

  std::optional<ManagedEAPProperties> eap;

  std::optional<ManagedDOMString> group;

  std::optional<ManagedLong> ike_version;

  std::optional<ManagedDOMString> psk;

  std::optional<ManagedBoolean> save_credentials;

  std::optional<ManagedDOMStringList> server_cape_ms;

  std::optional<ManagedDOMStringList> server_ca_refs;

  std::optional<ManagedXAUTHProperties> xauth;

};

struct L2TPProperties {
  L2TPProperties();
  ~L2TPProperties();
  L2TPProperties(const L2TPProperties&) = delete;
  L2TPProperties& operator=(const L2TPProperties&) = delete;
  L2TPProperties(L2TPProperties&& rhs) noexcept;
  L2TPProperties& operator=(L2TPProperties&& rhs) noexcept;

  // Populates a L2TPProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, L2TPProperties& out);

  // Populates a L2TPProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, L2TPProperties& out);

  // Creates a deep copy of L2TPProperties.
  L2TPProperties Clone() const;

  // Creates a L2TPProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<L2TPProperties> FromValue(const base::Value::Dict& value);

  // Creates a L2TPProperties object from a base::Value, or nullopt on failure.
  static std::optional<L2TPProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisL2TPProperties object.
  base::Value::Dict ToValue() const;

  std::optional<bool> lcp_echo_disabled;

  std::optional<std::string> password;

  std::optional<bool> save_credentials;

  std::optional<std::string> username;

};

struct ManagedL2TPProperties {
  ManagedL2TPProperties();
  ~ManagedL2TPProperties();
  ManagedL2TPProperties(const ManagedL2TPProperties&) = delete;
  ManagedL2TPProperties& operator=(const ManagedL2TPProperties&) = delete;
  ManagedL2TPProperties(ManagedL2TPProperties&& rhs) noexcept;
  ManagedL2TPProperties& operator=(ManagedL2TPProperties&& rhs) noexcept;

  // Populates a ManagedL2TPProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedL2TPProperties& out);

  // Populates a ManagedL2TPProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedL2TPProperties& out);

  // Creates a deep copy of ManagedL2TPProperties.
  ManagedL2TPProperties Clone() const;

  // Creates a ManagedL2TPProperties object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<ManagedL2TPProperties> FromValue(const base::Value::Dict& value);

  // Creates a ManagedL2TPProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<ManagedL2TPProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedL2TPProperties object.
  base::Value::Dict ToValue() const;

  std::optional<ManagedBoolean> lcp_echo_disabled;

  std::optional<ManagedDOMString> password;

  std::optional<ManagedBoolean> save_credentials;

  std::optional<ManagedDOMString> username;

};

struct PaymentPortal {
  PaymentPortal();
  ~PaymentPortal();
  PaymentPortal(const PaymentPortal&) = delete;
  PaymentPortal& operator=(const PaymentPortal&) = delete;
  PaymentPortal(PaymentPortal&& rhs) noexcept;
  PaymentPortal& operator=(PaymentPortal&& rhs) noexcept;

  // Populates a PaymentPortal object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PaymentPortal& out);

  // Populates a PaymentPortal object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PaymentPortal& out);

  // Creates a deep copy of PaymentPortal.
  PaymentPortal Clone() const;

  // Creates a PaymentPortal object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<PaymentPortal> FromValue(const base::Value::Dict& value);

  // Creates a PaymentPortal object from a base::Value, or nullopt on failure.
  static std::optional<PaymentPortal> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPaymentPortal object.
  base::Value::Dict ToValue() const;

  std::string method;

  std::optional<std::string> post_data;

  std::optional<std::string> url;

};

struct ProxyLocation {
  ProxyLocation();
  ~ProxyLocation();
  ProxyLocation(const ProxyLocation&) = delete;
  ProxyLocation& operator=(const ProxyLocation&) = delete;
  ProxyLocation(ProxyLocation&& rhs) noexcept;
  ProxyLocation& operator=(ProxyLocation&& rhs) noexcept;

  // Populates a ProxyLocation object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ProxyLocation& out);

  // Populates a ProxyLocation object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ProxyLocation& out);

  // Creates a deep copy of ProxyLocation.
  ProxyLocation Clone() const;

  // Creates a ProxyLocation object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ProxyLocation> FromValue(const base::Value::Dict& value);

  // Creates a ProxyLocation object from a base::Value, or nullopt on failure.
  static std::optional<ProxyLocation> FromValue(const base::Value& value);

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
  ManagedProxyLocation(ManagedProxyLocation&& rhs) noexcept;
  ManagedProxyLocation& operator=(ManagedProxyLocation&& rhs) noexcept;

  // Populates a ManagedProxyLocation object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedProxyLocation& out);

  // Populates a ManagedProxyLocation object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedProxyLocation& out);

  // Creates a deep copy of ManagedProxyLocation.
  ManagedProxyLocation Clone() const;

  // Creates a ManagedProxyLocation object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<ManagedProxyLocation> FromValue(const base::Value::Dict& value);

  // Creates a ManagedProxyLocation object from a base::Value, or nullopt on
  // failure.
  static std::optional<ManagedProxyLocation> FromValue(const base::Value& value);

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
  ManualProxySettings(ManualProxySettings&& rhs) noexcept;
  ManualProxySettings& operator=(ManualProxySettings&& rhs) noexcept;

  // Populates a ManualProxySettings object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManualProxySettings& out);

  // Populates a ManualProxySettings object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManualProxySettings& out);

  // Creates a deep copy of ManualProxySettings.
  ManualProxySettings Clone() const;

  // Creates a ManualProxySettings object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<ManualProxySettings> FromValue(const base::Value::Dict& value);

  // Creates a ManualProxySettings object from a base::Value, or nullopt on
  // failure.
  static std::optional<ManualProxySettings> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManualProxySettings object.
  base::Value::Dict ToValue() const;

  std::optional<ProxyLocation> http_proxy;

  std::optional<ProxyLocation> secure_http_proxy;

  std::optional<ProxyLocation> ftp_proxy;

  std::optional<ProxyLocation> socks;

};

struct ManagedManualProxySettings {
  ManagedManualProxySettings();
  ~ManagedManualProxySettings();
  ManagedManualProxySettings(const ManagedManualProxySettings&) = delete;
  ManagedManualProxySettings& operator=(const ManagedManualProxySettings&) = delete;
  ManagedManualProxySettings(ManagedManualProxySettings&& rhs) noexcept;
  ManagedManualProxySettings& operator=(ManagedManualProxySettings&& rhs) noexcept;

  // Populates a ManagedManualProxySettings object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedManualProxySettings& out);

  // Populates a ManagedManualProxySettings object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedManualProxySettings& out);

  // Creates a deep copy of ManagedManualProxySettings.
  ManagedManualProxySettings Clone() const;

  // Creates a ManagedManualProxySettings object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<ManagedManualProxySettings> FromValue(const base::Value::Dict& value);

  // Creates a ManagedManualProxySettings object from a base::Value, or nullopt
  // on failure.
  static std::optional<ManagedManualProxySettings> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedManualProxySettings object.
  base::Value::Dict ToValue() const;

  std::optional<ManagedProxyLocation> http_proxy;

  std::optional<ManagedProxyLocation> secure_http_proxy;

  std::optional<ManagedProxyLocation> ftp_proxy;

  std::optional<ManagedProxyLocation> socks;

};

struct ProxySettings {
  ProxySettings();
  ~ProxySettings();
  ProxySettings(const ProxySettings&) = delete;
  ProxySettings& operator=(const ProxySettings&) = delete;
  ProxySettings(ProxySettings&& rhs) noexcept;
  ProxySettings& operator=(ProxySettings&& rhs) noexcept;

  // Populates a ProxySettings object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ProxySettings& out);

  // Populates a ProxySettings object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ProxySettings& out);

  // Creates a deep copy of ProxySettings.
  ProxySettings Clone() const;

  // Creates a ProxySettings object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ProxySettings> FromValue(const base::Value::Dict& value);

  // Creates a ProxySettings object from a base::Value, or nullopt on failure.
  static std::optional<ProxySettings> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisProxySettings object.
  base::Value::Dict ToValue() const;

  ProxySettingsType type;

  std::optional<ManualProxySettings> manual;

  std::optional<std::vector<std::string>> exclude_domains;

  std::optional<std::string> pac;

};

struct ManagedProxySettings {
  ManagedProxySettings();
  ~ManagedProxySettings();
  ManagedProxySettings(const ManagedProxySettings&) = delete;
  ManagedProxySettings& operator=(const ManagedProxySettings&) = delete;
  ManagedProxySettings(ManagedProxySettings&& rhs) noexcept;
  ManagedProxySettings& operator=(ManagedProxySettings&& rhs) noexcept;

  // Populates a ManagedProxySettings object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedProxySettings& out);

  // Populates a ManagedProxySettings object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedProxySettings& out);

  // Creates a deep copy of ManagedProxySettings.
  ManagedProxySettings Clone() const;

  // Creates a ManagedProxySettings object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<ManagedProxySettings> FromValue(const base::Value::Dict& value);

  // Creates a ManagedProxySettings object from a base::Value, or nullopt on
  // failure.
  static std::optional<ManagedProxySettings> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedProxySettings object.
  base::Value::Dict ToValue() const;

  ManagedProxySettingsType type;

  std::optional<ManagedManualProxySettings> manual;

  std::optional<ManagedDOMStringList> exclude_domains;

  std::optional<ManagedDOMString> pac;

};

struct VerifyX509 {
  VerifyX509();
  ~VerifyX509();
  VerifyX509(const VerifyX509&) = delete;
  VerifyX509& operator=(const VerifyX509&) = delete;
  VerifyX509(VerifyX509&& rhs) noexcept;
  VerifyX509& operator=(VerifyX509&& rhs) noexcept;

  // Populates a VerifyX509 object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, VerifyX509& out);

  // Populates a VerifyX509 object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, VerifyX509& out);

  // Creates a deep copy of VerifyX509.
  VerifyX509 Clone() const;

  // Creates a VerifyX509 object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<VerifyX509> FromValue(const base::Value::Dict& value);

  // Creates a VerifyX509 object from a base::Value, or nullopt on failure.
  static std::optional<VerifyX509> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisVerifyX509 object.
  base::Value::Dict ToValue() const;

  std::optional<std::string> name;

  std::optional<std::string> type;

};

struct ManagedVerifyX509 {
  ManagedVerifyX509();
  ~ManagedVerifyX509();
  ManagedVerifyX509(const ManagedVerifyX509&) = delete;
  ManagedVerifyX509& operator=(const ManagedVerifyX509&) = delete;
  ManagedVerifyX509(ManagedVerifyX509&& rhs) noexcept;
  ManagedVerifyX509& operator=(ManagedVerifyX509&& rhs) noexcept;

  // Populates a ManagedVerifyX509 object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedVerifyX509& out);

  // Populates a ManagedVerifyX509 object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedVerifyX509& out);

  // Creates a deep copy of ManagedVerifyX509.
  ManagedVerifyX509 Clone() const;

  // Creates a ManagedVerifyX509 object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ManagedVerifyX509> FromValue(const base::Value::Dict& value);

  // Creates a ManagedVerifyX509 object from a base::Value, or nullopt on
  // failure.
  static std::optional<ManagedVerifyX509> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedVerifyX509 object.
  base::Value::Dict ToValue() const;

  std::optional<ManagedDOMString> name;

  std::optional<ManagedDOMString> type;

};

struct OpenVPNProperties {
  OpenVPNProperties();
  ~OpenVPNProperties();
  OpenVPNProperties(const OpenVPNProperties&) = delete;
  OpenVPNProperties& operator=(const OpenVPNProperties&) = delete;
  OpenVPNProperties(OpenVPNProperties&& rhs) noexcept;
  OpenVPNProperties& operator=(OpenVPNProperties&& rhs) noexcept;

  // Populates a OpenVPNProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, OpenVPNProperties& out);

  // Populates a OpenVPNProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, OpenVPNProperties& out);

  // Creates a deep copy of OpenVPNProperties.
  OpenVPNProperties Clone() const;

  // Creates a OpenVPNProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<OpenVPNProperties> FromValue(const base::Value::Dict& value);

  // Creates a OpenVPNProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<OpenVPNProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisOpenVPNProperties object.
  base::Value::Dict ToValue() const;

  std::optional<std::string> auth;

  std::optional<std::string> auth_retry;

  std::optional<bool> auth_no_cache;

  std::optional<std::string> cipher;

  std::optional<std::string> client_cert_pkcs11_id;

  std::optional<CertificatePattern> client_cert_pattern;

  std::optional<std::string> client_cert_provisioning_profile_id;

  std::optional<std::string> client_cert_ref;

  std::optional<std::string> client_cert_type;

  std::optional<std::string> comp_lzo;

  std::optional<bool> comp_no_adapt;

  std::optional<std::vector<std::string>> extra_hosts;

  std::optional<bool> ignore_default_route;

  std::optional<std::string> key_direction;

  std::optional<std::string> ns_cert_type;

  std::optional<std::string> otp;

  std::optional<std::string> password;

  std::optional<int> port;

  std::optional<std::string> proto;

  std::optional<bool> push_peer_info;

  std::optional<std::string> remote_cert_eku;

  std::optional<std::vector<std::string>> remote_cert_ku;

  std::optional<std::string> remote_cert_tls;

  std::optional<int> reneg_sec;

  std::optional<bool> save_credentials;

  std::optional<std::vector<std::string>> server_cape_ms;

  std::optional<std::vector<std::string>> server_ca_refs;

  std::optional<std::string> server_cert_ref;

  std::optional<int> server_poll_timeout;

  std::optional<int> shaper;

  std::optional<std::string> static_challenge;

  std::optional<std::string> tls_auth_contents;

  std::optional<std::string> tls_remote;

  std::optional<std::string> tls_version_min;

  std::optional<std::string> user_authentication_type;

  std::optional<std::string> username;

  std::optional<std::string> verb;

  std::optional<std::string> verify_hash;

  std::optional<VerifyX509> verify_x509;

};

struct ManagedOpenVPNProperties {
  ManagedOpenVPNProperties();
  ~ManagedOpenVPNProperties();
  ManagedOpenVPNProperties(const ManagedOpenVPNProperties&) = delete;
  ManagedOpenVPNProperties& operator=(const ManagedOpenVPNProperties&) = delete;
  ManagedOpenVPNProperties(ManagedOpenVPNProperties&& rhs) noexcept;
  ManagedOpenVPNProperties& operator=(ManagedOpenVPNProperties&& rhs) noexcept;

  // Populates a ManagedOpenVPNProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedOpenVPNProperties& out);

  // Populates a ManagedOpenVPNProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedOpenVPNProperties& out);

  // Creates a deep copy of ManagedOpenVPNProperties.
  ManagedOpenVPNProperties Clone() const;

  // Creates a ManagedOpenVPNProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<ManagedOpenVPNProperties> FromValue(const base::Value::Dict& value);

  // Creates a ManagedOpenVPNProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<ManagedOpenVPNProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedOpenVPNProperties object.
  base::Value::Dict ToValue() const;

  std::optional<ManagedDOMString> auth;

  std::optional<ManagedDOMString> auth_retry;

  std::optional<ManagedBoolean> auth_no_cache;

  std::optional<ManagedDOMString> cipher;

  std::optional<ManagedDOMString> client_cert_pkcs11_id;

  std::optional<ManagedCertificatePattern> client_cert_pattern;

  std::optional<ManagedDOMString> client_cert_provisioning_profile_id;

  std::optional<ManagedDOMString> client_cert_ref;

  std::optional<ManagedDOMString> client_cert_type;

  std::optional<ManagedDOMString> comp_lzo;

  std::optional<ManagedBoolean> comp_no_adapt;

  std::optional<ManagedDOMStringList> extra_hosts;

  std::optional<ManagedBoolean> ignore_default_route;

  std::optional<ManagedDOMString> key_direction;

  std::optional<ManagedDOMString> ns_cert_type;

  std::optional<ManagedDOMString> otp;

  std::optional<ManagedDOMString> password;

  std::optional<ManagedLong> port;

  std::optional<ManagedDOMString> proto;

  std::optional<ManagedBoolean> push_peer_info;

  std::optional<ManagedDOMString> remote_cert_eku;

  std::optional<ManagedDOMStringList> remote_cert_ku;

  std::optional<ManagedDOMString> remote_cert_tls;

  std::optional<ManagedLong> reneg_sec;

  std::optional<ManagedBoolean> save_credentials;

  std::optional<ManagedDOMStringList> server_cape_ms;

  std::optional<ManagedDOMStringList> server_ca_refs;

  std::optional<ManagedDOMString> server_cert_ref;

  std::optional<ManagedLong> server_poll_timeout;

  std::optional<ManagedLong> shaper;

  std::optional<ManagedDOMString> static_challenge;

  std::optional<ManagedDOMString> tls_auth_contents;

  std::optional<ManagedDOMString> tls_remote;

  std::optional<ManagedDOMString> tls_version_min;

  std::optional<ManagedDOMString> user_authentication_type;

  std::optional<ManagedDOMString> username;

  std::optional<ManagedDOMString> verb;

  std::optional<ManagedDOMString> verify_hash;

  std::optional<ManagedVerifyX509> verify_x509;

};

struct SIMLockStatus {
  SIMLockStatus();
  ~SIMLockStatus();
  SIMLockStatus(const SIMLockStatus&) = delete;
  SIMLockStatus& operator=(const SIMLockStatus&) = delete;
  SIMLockStatus(SIMLockStatus&& rhs) noexcept;
  SIMLockStatus& operator=(SIMLockStatus&& rhs) noexcept;

  // Populates a SIMLockStatus object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SIMLockStatus& out);

  // Populates a SIMLockStatus object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SIMLockStatus& out);

  // Creates a deep copy of SIMLockStatus.
  SIMLockStatus Clone() const;

  // Creates a SIMLockStatus object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<SIMLockStatus> FromValue(const base::Value::Dict& value);

  // Creates a SIMLockStatus object from a base::Value, or nullopt on failure.
  static std::optional<SIMLockStatus> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSIMLockStatus object.
  base::Value::Dict ToValue() const;

  std::string lock_type;

  // sim-pin, sim-puk, or ''
  bool lock_enabled;

  std::optional<int> retries_left;

};

struct ThirdPartyVPNProperties {
  ThirdPartyVPNProperties();
  ~ThirdPartyVPNProperties();
  ThirdPartyVPNProperties(const ThirdPartyVPNProperties&) = delete;
  ThirdPartyVPNProperties& operator=(const ThirdPartyVPNProperties&) = delete;
  ThirdPartyVPNProperties(ThirdPartyVPNProperties&& rhs) noexcept;
  ThirdPartyVPNProperties& operator=(ThirdPartyVPNProperties&& rhs) noexcept;

  // Populates a ThirdPartyVPNProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ThirdPartyVPNProperties& out);

  // Populates a ThirdPartyVPNProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ThirdPartyVPNProperties& out);

  // Creates a deep copy of ThirdPartyVPNProperties.
  ThirdPartyVPNProperties Clone() const;

  // Creates a ThirdPartyVPNProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<ThirdPartyVPNProperties> FromValue(const base::Value::Dict& value);

  // Creates a ThirdPartyVPNProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<ThirdPartyVPNProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisThirdPartyVPNProperties object.
  base::Value::Dict ToValue() const;

  std::string extension_id;

  std::optional<std::string> provider_name;

};

struct ManagedThirdPartyVPNProperties {
  ManagedThirdPartyVPNProperties();
  ~ManagedThirdPartyVPNProperties();
  ManagedThirdPartyVPNProperties(const ManagedThirdPartyVPNProperties&) = delete;
  ManagedThirdPartyVPNProperties& operator=(const ManagedThirdPartyVPNProperties&) = delete;
  ManagedThirdPartyVPNProperties(ManagedThirdPartyVPNProperties&& rhs) noexcept;
  ManagedThirdPartyVPNProperties& operator=(ManagedThirdPartyVPNProperties&& rhs) noexcept;

  // Populates a ManagedThirdPartyVPNProperties object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedThirdPartyVPNProperties& out);

  // Populates a ManagedThirdPartyVPNProperties object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedThirdPartyVPNProperties& out);

  // Creates a deep copy of ManagedThirdPartyVPNProperties.
  ManagedThirdPartyVPNProperties Clone() const;

  // Creates a ManagedThirdPartyVPNProperties object from a base::Value::Dict,
  // or nullopt on failure.
  static std::optional<ManagedThirdPartyVPNProperties> FromValue(const base::Value::Dict& value);

  // Creates a ManagedThirdPartyVPNProperties object from a base::Value, or
  // nullopt on failure.
  static std::optional<ManagedThirdPartyVPNProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedThirdPartyVPNProperties object.
  base::Value::Dict ToValue() const;

  ManagedDOMString extension_id;

  std::optional<std::string> provider_name;

};

struct CellularProperties {
  CellularProperties();
  ~CellularProperties();
  CellularProperties(const CellularProperties&) = delete;
  CellularProperties& operator=(const CellularProperties&) = delete;
  CellularProperties(CellularProperties&& rhs) noexcept;
  CellularProperties& operator=(CellularProperties&& rhs) noexcept;

  // Populates a CellularProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CellularProperties& out);

  // Populates a CellularProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CellularProperties& out);

  // Creates a deep copy of CellularProperties.
  CellularProperties Clone() const;

  // Creates a CellularProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<CellularProperties> FromValue(const base::Value::Dict& value);

  // Creates a CellularProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<CellularProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCellularProperties object.
  base::Value::Dict ToValue() const;

  std::optional<bool> auto_connect;

  std::optional<APNProperties> apn;

  std::optional<std::vector<APNProperties>> apn_list;

  std::optional<std::string> activation_type;

  ActivationStateType activation_state;

  std::optional<bool> allow_roaming;

  std::optional<std::string> esn;

  std::optional<std::string> family;

  std::optional<std::string> firmware_revision;

  std::optional<std::vector<FoundNetworkProperties>> found_networks;

  std::optional<std::string> hardware_revision;

  std::optional<CellularProviderProperties> home_provider;

  std::optional<std::string> iccid;

  std::optional<std::string> imei;

  std::optional<APNProperties> last_good_apn;

  std::optional<std::string> manufacturer;

  std::optional<std::string> mdn;

  std::optional<std::string> meid;

  std::optional<std::string> min;

  std::optional<std::string> model_id;

  std::optional<std::string> network_technology;

  std::optional<PaymentPortal> payment_portal;

  std::optional<std::string> roaming_state;

  std::optional<bool> scanning;

  std::optional<CellularProviderProperties> serving_operator;

  std::optional<SIMLockStatus> sim_lock_status;

  std::optional<bool> sim_present;

  std::optional<int> signal_strength;

  std::optional<bool> support_network_scan;

};

struct ManagedCellularProperties {
  ManagedCellularProperties();
  ~ManagedCellularProperties();
  ManagedCellularProperties(const ManagedCellularProperties&) = delete;
  ManagedCellularProperties& operator=(const ManagedCellularProperties&) = delete;
  ManagedCellularProperties(ManagedCellularProperties&& rhs) noexcept;
  ManagedCellularProperties& operator=(ManagedCellularProperties&& rhs) noexcept;

  // Populates a ManagedCellularProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedCellularProperties& out);

  // Populates a ManagedCellularProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedCellularProperties& out);

  // Creates a deep copy of ManagedCellularProperties.
  ManagedCellularProperties Clone() const;

  // Creates a ManagedCellularProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<ManagedCellularProperties> FromValue(const base::Value::Dict& value);

  // Creates a ManagedCellularProperties object from a base::Value, or nullopt
  // on failure.
  static std::optional<ManagedCellularProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedCellularProperties object.
  base::Value::Dict ToValue() const;

  std::optional<ManagedBoolean> auto_connect;

  std::optional<ManagedAPNProperties> apn;

  std::optional<ManagedAPNList> apn_list;

  std::optional<std::string> activation_type;

  ActivationStateType activation_state;

  std::optional<bool> allow_roaming;

  std::optional<std::string> esn;

  std::optional<std::string> family;

  std::optional<std::string> firmware_revision;

  std::optional<std::vector<FoundNetworkProperties>> found_networks;

  std::optional<std::string> hardware_revision;

  std::optional<CellularProviderProperties> home_provider;

  std::optional<std::string> iccid;

  std::optional<std::string> imei;

  std::optional<APNProperties> last_good_apn;

  std::optional<std::string> manufacturer;

  std::optional<std::string> mdn;

  std::optional<std::string> meid;

  std::optional<std::string> min;

  std::optional<std::string> model_id;

  std::optional<std::string> network_technology;

  std::optional<PaymentPortal> payment_portal;

  std::optional<std::string> roaming_state;

  std::optional<bool> scanning;

  std::optional<CellularProviderProperties> serving_operator;

  std::optional<SIMLockStatus> sim_lock_status;

  std::optional<bool> sim_present;

  std::optional<int> signal_strength;

  std::optional<bool> support_network_scan;

};

struct CellularStateProperties {
  CellularStateProperties();
  ~CellularStateProperties();
  CellularStateProperties(const CellularStateProperties&) = delete;
  CellularStateProperties& operator=(const CellularStateProperties&) = delete;
  CellularStateProperties(CellularStateProperties&& rhs) noexcept;
  CellularStateProperties& operator=(CellularStateProperties&& rhs) noexcept;

  // Populates a CellularStateProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CellularStateProperties& out);

  // Populates a CellularStateProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CellularStateProperties& out);

  // Creates a deep copy of CellularStateProperties.
  CellularStateProperties Clone() const;

  // Creates a CellularStateProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<CellularStateProperties> FromValue(const base::Value::Dict& value);

  // Creates a CellularStateProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<CellularStateProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCellularStateProperties object.
  base::Value::Dict ToValue() const;

  ActivationStateType activation_state;

  std::optional<std::string> eid;

  std::optional<std::string> iccid;

  std::optional<std::string> network_technology;

  std::optional<std::string> roaming_state;

  std::optional<bool> scanning;

  std::optional<bool> sim_present;

  std::optional<int> signal_strength;

};

struct EAPStateProperties {
  EAPStateProperties();
  ~EAPStateProperties();
  EAPStateProperties(const EAPStateProperties&) = delete;
  EAPStateProperties& operator=(const EAPStateProperties&) = delete;
  EAPStateProperties(EAPStateProperties&& rhs) noexcept;
  EAPStateProperties& operator=(EAPStateProperties&& rhs) noexcept;

  // Populates a EAPStateProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EAPStateProperties& out);

  // Populates a EAPStateProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, EAPStateProperties& out);

  // Creates a deep copy of EAPStateProperties.
  EAPStateProperties Clone() const;

  // Creates a EAPStateProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<EAPStateProperties> FromValue(const base::Value::Dict& value);

  // Creates a EAPStateProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<EAPStateProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisEAPStateProperties object.
  base::Value::Dict ToValue() const;

  std::optional<std::string> outer;

};

struct EthernetProperties {
  EthernetProperties();
  ~EthernetProperties();
  EthernetProperties(const EthernetProperties&) = delete;
  EthernetProperties& operator=(const EthernetProperties&) = delete;
  EthernetProperties(EthernetProperties&& rhs) noexcept;
  EthernetProperties& operator=(EthernetProperties&& rhs) noexcept;

  // Populates a EthernetProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EthernetProperties& out);

  // Populates a EthernetProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, EthernetProperties& out);

  // Creates a deep copy of EthernetProperties.
  EthernetProperties Clone() const;

  // Creates a EthernetProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<EthernetProperties> FromValue(const base::Value::Dict& value);

  // Creates a EthernetProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<EthernetProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisEthernetProperties object.
  base::Value::Dict ToValue() const;

  std::optional<bool> auto_connect;

  std::optional<std::string> authentication;

  std::optional<EAPProperties> eap;

};

struct ManagedEthernetProperties {
  ManagedEthernetProperties();
  ~ManagedEthernetProperties();
  ManagedEthernetProperties(const ManagedEthernetProperties&) = delete;
  ManagedEthernetProperties& operator=(const ManagedEthernetProperties&) = delete;
  ManagedEthernetProperties(ManagedEthernetProperties&& rhs) noexcept;
  ManagedEthernetProperties& operator=(ManagedEthernetProperties&& rhs) noexcept;

  // Populates a ManagedEthernetProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedEthernetProperties& out);

  // Populates a ManagedEthernetProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedEthernetProperties& out);

  // Creates a deep copy of ManagedEthernetProperties.
  ManagedEthernetProperties Clone() const;

  // Creates a ManagedEthernetProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<ManagedEthernetProperties> FromValue(const base::Value::Dict& value);

  // Creates a ManagedEthernetProperties object from a base::Value, or nullopt
  // on failure.
  static std::optional<ManagedEthernetProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedEthernetProperties object.
  base::Value::Dict ToValue() const;

  std::optional<ManagedBoolean> auto_connect;

  std::optional<ManagedDOMString> authentication;

  std::optional<ManagedEAPProperties> eap;

};

struct EthernetStateProperties {
  EthernetStateProperties();
  ~EthernetStateProperties();
  EthernetStateProperties(const EthernetStateProperties&) = delete;
  EthernetStateProperties& operator=(const EthernetStateProperties&) = delete;
  EthernetStateProperties(EthernetStateProperties&& rhs) noexcept;
  EthernetStateProperties& operator=(EthernetStateProperties&& rhs) noexcept;

  // Populates a EthernetStateProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EthernetStateProperties& out);

  // Populates a EthernetStateProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, EthernetStateProperties& out);

  // Creates a deep copy of EthernetStateProperties.
  EthernetStateProperties Clone() const;

  // Creates a EthernetStateProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<EthernetStateProperties> FromValue(const base::Value::Dict& value);

  // Creates a EthernetStateProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<EthernetStateProperties> FromValue(const base::Value& value);

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
  TetherProperties(TetherProperties&& rhs) noexcept;
  TetherProperties& operator=(TetherProperties&& rhs) noexcept;

  // Populates a TetherProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, TetherProperties& out);

  // Populates a TetherProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, TetherProperties& out);

  // Creates a deep copy of TetherProperties.
  TetherProperties Clone() const;

  // Creates a TetherProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<TetherProperties> FromValue(const base::Value::Dict& value);

  // Creates a TetherProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<TetherProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTetherProperties object.
  base::Value::Dict ToValue() const;

  std::optional<int> battery_percentage;

  std::optional<std::string> carrier;

  bool has_connected_to_host;

  std::optional<int> signal_strength;

};

struct VPNProperties {
  VPNProperties();
  ~VPNProperties();
  VPNProperties(const VPNProperties&) = delete;
  VPNProperties& operator=(const VPNProperties&) = delete;
  VPNProperties(VPNProperties&& rhs) noexcept;
  VPNProperties& operator=(VPNProperties&& rhs) noexcept;

  // Populates a VPNProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, VPNProperties& out);

  // Populates a VPNProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, VPNProperties& out);

  // Creates a deep copy of VPNProperties.
  VPNProperties Clone() const;

  // Creates a VPNProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<VPNProperties> FromValue(const base::Value::Dict& value);

  // Creates a VPNProperties object from a base::Value, or nullopt on failure.
  static std::optional<VPNProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisVPNProperties object.
  base::Value::Dict ToValue() const;

  std::optional<bool> auto_connect;

  std::optional<std::string> host;

  std::optional<IPSecProperties> i_psec;

  std::optional<L2TPProperties> l2tp;

  std::optional<OpenVPNProperties> open_vpn;

  std::optional<ThirdPartyVPNProperties> third_party_vpn;

  // The VPN type. This cannot be an enum because of 'L2TP-IPSec'. This is
  // optional for NetworkConfigProperties which is passed to setProperties which
  // may be used to set only specific properties.
  std::optional<std::string> type;

};

struct ManagedVPNProperties {
  ManagedVPNProperties();
  ~ManagedVPNProperties();
  ManagedVPNProperties(const ManagedVPNProperties&) = delete;
  ManagedVPNProperties& operator=(const ManagedVPNProperties&) = delete;
  ManagedVPNProperties(ManagedVPNProperties&& rhs) noexcept;
  ManagedVPNProperties& operator=(ManagedVPNProperties&& rhs) noexcept;

  // Populates a ManagedVPNProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedVPNProperties& out);

  // Populates a ManagedVPNProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedVPNProperties& out);

  // Creates a deep copy of ManagedVPNProperties.
  ManagedVPNProperties Clone() const;

  // Creates a ManagedVPNProperties object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<ManagedVPNProperties> FromValue(const base::Value::Dict& value);

  // Creates a ManagedVPNProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<ManagedVPNProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedVPNProperties object.
  base::Value::Dict ToValue() const;

  std::optional<ManagedBoolean> auto_connect;

  std::optional<ManagedDOMString> host;

  std::optional<ManagedIPSecProperties> i_psec;

  std::optional<ManagedL2TPProperties> l2tp;

  std::optional<ManagedOpenVPNProperties> open_vpn;

  std::optional<ManagedThirdPartyVPNProperties> third_party_vpn;

  std::optional<ManagedDOMString> type;

};

struct VPNStateProperties {
  VPNStateProperties();
  ~VPNStateProperties();
  VPNStateProperties(const VPNStateProperties&) = delete;
  VPNStateProperties& operator=(const VPNStateProperties&) = delete;
  VPNStateProperties(VPNStateProperties&& rhs) noexcept;
  VPNStateProperties& operator=(VPNStateProperties&& rhs) noexcept;

  // Populates a VPNStateProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, VPNStateProperties& out);

  // Populates a VPNStateProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, VPNStateProperties& out);

  // Creates a deep copy of VPNStateProperties.
  VPNStateProperties Clone() const;

  // Creates a VPNStateProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<VPNStateProperties> FromValue(const base::Value::Dict& value);

  // Creates a VPNStateProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<VPNStateProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisVPNStateProperties object.
  base::Value::Dict ToValue() const;

  std::string type;

  std::optional<IPSecProperties> i_psec;

  std::optional<ThirdPartyVPNProperties> third_party_vpn;

};

struct WiFiProperties {
  WiFiProperties();
  ~WiFiProperties();
  WiFiProperties(const WiFiProperties&) = delete;
  WiFiProperties& operator=(const WiFiProperties&) = delete;
  WiFiProperties(WiFiProperties&& rhs) noexcept;
  WiFiProperties& operator=(WiFiProperties&& rhs) noexcept;

  // Populates a WiFiProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, WiFiProperties& out);

  // Populates a WiFiProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, WiFiProperties& out);

  // Creates a deep copy of WiFiProperties.
  WiFiProperties Clone() const;

  // Creates a WiFiProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<WiFiProperties> FromValue(const base::Value::Dict& value);

  // Creates a WiFiProperties object from a base::Value, or nullopt on failure.
  static std::optional<WiFiProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisWiFiProperties object.
  base::Value::Dict ToValue() const;

  std::optional<bool> allow_gateway_arp_polling;

  std::optional<bool> auto_connect;

  std::optional<std::string> bssid;

  std::optional<EAPProperties> eap;

  std::optional<int> frequency;

  std::optional<std::vector<int>> frequency_list;

  std::optional<std::string> hex_ssid;

  std::optional<bool> hidden_ssid;

  std::optional<std::string> passphrase;

  std::optional<std::string> ssid;

  std::optional<std::string> security;

  std::optional<int> signal_strength;

};

struct ManagedWiFiProperties {
  ManagedWiFiProperties();
  ~ManagedWiFiProperties();
  ManagedWiFiProperties(const ManagedWiFiProperties&) = delete;
  ManagedWiFiProperties& operator=(const ManagedWiFiProperties&) = delete;
  ManagedWiFiProperties(ManagedWiFiProperties&& rhs) noexcept;
  ManagedWiFiProperties& operator=(ManagedWiFiProperties&& rhs) noexcept;

  // Populates a ManagedWiFiProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedWiFiProperties& out);

  // Populates a ManagedWiFiProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedWiFiProperties& out);

  // Creates a deep copy of ManagedWiFiProperties.
  ManagedWiFiProperties Clone() const;

  // Creates a ManagedWiFiProperties object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<ManagedWiFiProperties> FromValue(const base::Value::Dict& value);

  // Creates a ManagedWiFiProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<ManagedWiFiProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedWiFiProperties object.
  base::Value::Dict ToValue() const;

  std::optional<ManagedBoolean> allow_gateway_arp_polling;

  std::optional<ManagedBoolean> auto_connect;

  std::optional<std::string> bssid;

  std::optional<ManagedEAPProperties> eap;

  std::optional<int> frequency;

  std::optional<std::vector<int>> frequency_list;

  std::optional<ManagedDOMString> hex_ssid;

  std::optional<ManagedBoolean> hidden_ssid;

  std::optional<ManagedDOMString> passphrase;

  std::optional<ManagedDOMString> ssid;

  ManagedDOMString security;

  std::optional<int> signal_strength;

};

struct WiFiStateProperties {
  WiFiStateProperties();
  ~WiFiStateProperties();
  WiFiStateProperties(const WiFiStateProperties&) = delete;
  WiFiStateProperties& operator=(const WiFiStateProperties&) = delete;
  WiFiStateProperties(WiFiStateProperties&& rhs) noexcept;
  WiFiStateProperties& operator=(WiFiStateProperties&& rhs) noexcept;

  // Populates a WiFiStateProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, WiFiStateProperties& out);

  // Populates a WiFiStateProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, WiFiStateProperties& out);

  // Creates a deep copy of WiFiStateProperties.
  WiFiStateProperties Clone() const;

  // Creates a WiFiStateProperties object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<WiFiStateProperties> FromValue(const base::Value::Dict& value);

  // Creates a WiFiStateProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<WiFiStateProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisWiFiStateProperties object.
  base::Value::Dict ToValue() const;

  std::optional<std::string> bssid;

  std::optional<EAPStateProperties> eap;

  std::optional<int> frequency;

  std::optional<std::string> hex_ssid;

  std::string security;

  std::optional<int> signal_strength;

  std::optional<std::string> ssid;

};

struct NetworkConfigProperties {
  NetworkConfigProperties();
  ~NetworkConfigProperties();
  NetworkConfigProperties(const NetworkConfigProperties&) = delete;
  NetworkConfigProperties& operator=(const NetworkConfigProperties&) = delete;
  NetworkConfigProperties(NetworkConfigProperties&& rhs) noexcept;
  NetworkConfigProperties& operator=(NetworkConfigProperties&& rhs) noexcept;

  // Populates a NetworkConfigProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NetworkConfigProperties& out);

  // Populates a NetworkConfigProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, NetworkConfigProperties& out);

  // Creates a deep copy of NetworkConfigProperties.
  NetworkConfigProperties Clone() const;

  // Creates a NetworkConfigProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<NetworkConfigProperties> FromValue(const base::Value::Dict& value);

  // Creates a NetworkConfigProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<NetworkConfigProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisNetworkConfigProperties object.
  base::Value::Dict ToValue() const;

  std::optional<CellularProperties> cellular;

  std::optional<EthernetProperties> ethernet;

  std::optional<std::string> guid;

  IPConfigType ip_address_config_type;

  std::optional<std::string> name;

  IPConfigType name_servers_config_type;

  std::optional<int> priority;

  std::optional<ProxySettings> proxy_settings;

  std::optional<IPConfigProperties> static_ip_config;

  NetworkType type;

  std::optional<VPNProperties> vpn;

  std::optional<WiFiProperties> wi_fi;

};

struct NetworkProperties {
  NetworkProperties();
  ~NetworkProperties();
  NetworkProperties(const NetworkProperties&) = delete;
  NetworkProperties& operator=(const NetworkProperties&) = delete;
  NetworkProperties(NetworkProperties&& rhs) noexcept;
  NetworkProperties& operator=(NetworkProperties&& rhs) noexcept;

  // Populates a NetworkProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NetworkProperties& out);

  // Populates a NetworkProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, NetworkProperties& out);

  // Creates a deep copy of NetworkProperties.
  NetworkProperties Clone() const;

  // Creates a NetworkProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<NetworkProperties> FromValue(const base::Value::Dict& value);

  // Creates a NetworkProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<NetworkProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisNetworkProperties object.
  base::Value::Dict ToValue() const;

  std::optional<CellularProperties> cellular;

  std::optional<bool> connectable;

  ConnectionStateType connection_state;

  std::optional<std::string> error_state;

  std::optional<EthernetProperties> ethernet;

  std::string guid;

  IPConfigType ip_address_config_type;

  std::optional<std::vector<IPConfigProperties>> ip_configs;

  std::optional<std::string> mac_address;

  std::optional<bool> metered;

  std::optional<std::string> name;

  IPConfigType name_servers_config_type;

  std::optional<int> priority;

  std::optional<ProxySettings> proxy_settings;

  std::optional<bool> restricted_connectivity;

  std::optional<IPConfigProperties> static_ip_config;

  std::optional<IPConfigProperties> saved_ip_config;

  // Indicates whether and how the network is configured. 'Source' can be Device,
  // DevicePolicy, User, UserPolicy or None. 'None' conflicts with extension code
  // generation so we must use a string for 'Source' instead of a SourceType enum.
  std::optional<std::string> source;

  std::optional<TetherProperties> tether;

  NetworkType type;

  std::optional<VPNProperties> vpn;

  std::optional<WiFiProperties> wi_fi;

};

struct ManagedProperties {
  ManagedProperties();
  ~ManagedProperties();
  ManagedProperties(const ManagedProperties&) = delete;
  ManagedProperties& operator=(const ManagedProperties&) = delete;
  ManagedProperties(ManagedProperties&& rhs) noexcept;
  ManagedProperties& operator=(ManagedProperties&& rhs) noexcept;

  // Populates a ManagedProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManagedProperties& out);

  // Populates a ManagedProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManagedProperties& out);

  // Creates a deep copy of ManagedProperties.
  ManagedProperties Clone() const;

  // Creates a ManagedProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ManagedProperties> FromValue(const base::Value::Dict& value);

  // Creates a ManagedProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<ManagedProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManagedProperties object.
  base::Value::Dict ToValue() const;

  std::optional<ManagedCellularProperties> cellular;

  std::optional<bool> connectable;

  ConnectionStateType connection_state;

  std::optional<std::string> error_state;

  std::optional<ManagedEthernetProperties> ethernet;

  std::string guid;

  std::optional<ManagedIPConfigType> ip_address_config_type;

  std::optional<std::vector<IPConfigProperties>> ip_configs;

  std::optional<std::string> mac_address;

  std::optional<ManagedBoolean> metered;

  std::optional<ManagedDOMString> name;

  std::optional<ManagedIPConfigType> name_servers_config_type;

  std::optional<ManagedLong> priority;

  std::optional<ManagedProxySettings> proxy_settings;

  std::optional<bool> restricted_connectivity;

  std::optional<ManagedIPConfigProperties> static_ip_config;

  std::optional<IPConfigProperties> saved_ip_config;

  // See $(ref:NetworkProperties.Source).
  std::optional<std::string> source;

  std::optional<TetherProperties> tether;

  NetworkType type;

  std::optional<ManagedVPNProperties> vpn;

  std::optional<ManagedWiFiProperties> wi_fi;

};

struct NetworkStateProperties {
  NetworkStateProperties();
  ~NetworkStateProperties();
  NetworkStateProperties(const NetworkStateProperties&) = delete;
  NetworkStateProperties& operator=(const NetworkStateProperties&) = delete;
  NetworkStateProperties(NetworkStateProperties&& rhs) noexcept;
  NetworkStateProperties& operator=(NetworkStateProperties&& rhs) noexcept;

  // Populates a NetworkStateProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NetworkStateProperties& out);

  // Populates a NetworkStateProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, NetworkStateProperties& out);

  // Creates a deep copy of NetworkStateProperties.
  NetworkStateProperties Clone() const;

  // Creates a NetworkStateProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<NetworkStateProperties> FromValue(const base::Value::Dict& value);

  // Creates a NetworkStateProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<NetworkStateProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisNetworkStateProperties object.
  base::Value::Dict ToValue() const;

  std::optional<CellularStateProperties> cellular;

  std::optional<bool> connectable;

  ConnectionStateType connection_state;

  std::optional<EthernetStateProperties> ethernet;

  std::optional<std::string> error_state;

  std::string guid;

  std::optional<std::string> name;

  std::optional<int> priority;

  // See $(ref:NetworkProperties.Source).
  std::optional<std::string> source;

  std::optional<TetherProperties> tether;

  NetworkType type;

  std::optional<VPNStateProperties> vpn;

  std::optional<WiFiStateProperties> wi_fi;

};

struct DeviceStateProperties {
  DeviceStateProperties();
  ~DeviceStateProperties();
  DeviceStateProperties(const DeviceStateProperties&) = delete;
  DeviceStateProperties& operator=(const DeviceStateProperties&) = delete;
  DeviceStateProperties(DeviceStateProperties&& rhs) noexcept;
  DeviceStateProperties& operator=(DeviceStateProperties&& rhs) noexcept;

  // Populates a DeviceStateProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DeviceStateProperties& out);

  // Populates a DeviceStateProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DeviceStateProperties& out);

  // Creates a deep copy of DeviceStateProperties.
  DeviceStateProperties Clone() const;

  // Creates a DeviceStateProperties object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<DeviceStateProperties> FromValue(const base::Value::Dict& value);

  // Creates a DeviceStateProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<DeviceStateProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDeviceStateProperties object.
  base::Value::Dict ToValue() const;

  // Set if the device is enabled. True if the device is currently scanning.
  std::optional<bool> scanning;

  // The SIM lock status if Type = Cellular and SIMPresent = True.
  std::optional<SIMLockStatus> sim_lock_status;

  // Set to the SIM present state if the device type is Cellular.
  std::optional<bool> sim_present;

  // The current state of the device.
  DeviceStateType state;

  // The network type associated with the device (Cellular, Ethernet or WiFi).
  NetworkType type;

  // Whether or not any managed networks are available/visible.
  std::optional<bool> managed_network_available;

};

struct NetworkFilter {
  NetworkFilter();
  ~NetworkFilter();
  NetworkFilter(const NetworkFilter&) = delete;
  NetworkFilter& operator=(const NetworkFilter&) = delete;
  NetworkFilter(NetworkFilter&& rhs) noexcept;
  NetworkFilter& operator=(NetworkFilter&& rhs) noexcept;

  // Populates a NetworkFilter object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NetworkFilter& out);

  // Populates a NetworkFilter object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, NetworkFilter& out);

  // Creates a deep copy of NetworkFilter.
  NetworkFilter Clone() const;

  // Creates a NetworkFilter object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<NetworkFilter> FromValue(const base::Value::Dict& value);

  // Creates a NetworkFilter object from a base::Value, or nullopt on failure.
  static std::optional<NetworkFilter> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisNetworkFilter object.
  base::Value::Dict ToValue() const;

  // The type of networks to return.
  NetworkType network_type;

  // If true, only include visible (physically connected or in-range) networks.
  // Defaults to 'false'.
  std::optional<bool> visible;

  // If true, only include configured (saved) networks. Defaults to 'false'.
  std::optional<bool> configured;

  // Maximum number of networks to return. Defaults to 1000 if unspecified. Use 0
  // for no limit.
  std::optional<int> limit;

};

struct GlobalPolicy {
  GlobalPolicy();
  ~GlobalPolicy();
  GlobalPolicy(const GlobalPolicy&) = delete;
  GlobalPolicy& operator=(const GlobalPolicy&) = delete;
  GlobalPolicy(GlobalPolicy&& rhs) noexcept;
  GlobalPolicy& operator=(GlobalPolicy&& rhs) noexcept;

  // Populates a GlobalPolicy object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GlobalPolicy& out);

  // Populates a GlobalPolicy object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GlobalPolicy& out);

  // Creates a deep copy of GlobalPolicy.
  GlobalPolicy Clone() const;

  // Creates a GlobalPolicy object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<GlobalPolicy> FromValue(const base::Value::Dict& value);

  // Creates a GlobalPolicy object from a base::Value, or nullopt on failure.
  static std::optional<GlobalPolicy> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGlobalPolicy object.
  base::Value::Dict ToValue() const;

  // If true, only policy networks may auto connect. Defaults to false.
  std::optional<bool> allow_only_policy_networks_to_autoconnect;

  // If true, only policy networks may be connected to and no new networks may be
  // added or configured. Defaults to false.
  std::optional<bool> allow_only_policy_networks_to_connect;

  // If true and a managed network is available in the visible network list, only
  // policy networks may be connected to and no new networks may be added or
  // configured. Defaults to false.
  std::optional<bool> allow_only_policy_networks_to_connect_if_available;

  // List of blocked networks. Connections to blocked networks are prohibited.
  // Networks can be allowed again by specifying an explicit network
  // configuration. Defaults to an empty list.
  std::optional<std::vector<std::string>> blocked_hex_ssi_ds;

};

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

  // Unique hash for the certificate.
  std::string hash;

  // Certificate issuer common name.
  std::string issued_by;

  // Certificate name or nickname.
  std::string issued_to;

  // PEM for server CA certificates.
  std::optional<std::string> pem;

  // PKCS#11 id for user certificates.
  std::optional<std::string> pkcs11_id;

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
  CertificateLists(CertificateLists&& rhs) noexcept;
  CertificateLists& operator=(CertificateLists&& rhs) noexcept;

  // Populates a CertificateLists object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CertificateLists& out);

  // Populates a CertificateLists object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CertificateLists& out);

  // Creates a deep copy of CertificateLists.
  CertificateLists Clone() const;

  // Creates a CertificateLists object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<CertificateLists> FromValue(const base::Value::Dict& value);

  // Creates a CertificateLists object from a base::Value, or nullopt on
  // failure.
  static std::optional<CertificateLists> FromValue(const base::Value& value);

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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The type of network to enable.
  NetworkType network_type;


 private:
  Params();
};

}  // namespace EnableNetworkType

namespace DisableNetworkType {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The type of network to disable.
  NetworkType network_type;


 private:
  Params();
};

}  // namespace DisableNetworkType

namespace RequestNetworkScan {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The GUID of the Cellular network to activate.
  std::string network_guid;

  // Optional name of carrier to activate.
  std::optional<std::string> carrier;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace StartActivate

namespace GetCaptivePortalStatus {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The GUID of the cellular network to unlock.     If empty, the default
  // cellular device will be used.
  std::string network_guid;

  // The current SIM PIN, or the new PIN if PUK is provided.
  std::string pin;

  // The operator provided PUK for unblocking a blocked SIM.
  std::optional<std::string> puk;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace UnlockCellularSim

namespace SetCellularSimState {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
