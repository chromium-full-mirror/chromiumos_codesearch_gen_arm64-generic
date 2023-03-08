// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/vpn_provider.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_VPN_PROVIDER_H__
#define CHROME_COMMON_EXTENSIONS_API_VPN_PROVIDER_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace vpn_provider {

//
// Types
//

struct Parameters {
  Parameters();
  ~Parameters();
  Parameters(const Parameters&) = delete;
  Parameters& operator=(const Parameters&) = delete;
  Parameters(Parameters&& rhs);
  Parameters& operator=(Parameters&& rhs);

  // Populates a Parameters object from a base::Value. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value& value, Parameters* out);

  // Creates a Parameters object from a base::Value, or NULL on failure.
  static std::unique_ptr<Parameters> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisParameters object.
  base::Value::Dict ToValue() const;

  // IP address for the VPN interface in CIDR notation. IPv4 is currently the only
  // supported mode.
  std::string address;

  // Broadcast address for the VPN interface. (default: deduced from IP address
  // and mask)
  absl::optional<std::string> broadcast_address;

  // MTU setting for the VPN interface. (default: 1500 bytes)
  absl::optional<std::string> mtu;

  // Exclude network traffic to the list of IP blocks in CIDR notation from the
  // tunnel. This can be used to bypass traffic to and from the VPN server. When
  // many rules match a destination, the rule with the longest matching prefix
  // wins. Entries that correspond to the same CIDR block are treated as
  // duplicates. Such duplicates in the collated (exclusionList + inclusionList)
  // list are eliminated and the exact duplicate entry that will be eliminated is
  // undefined.
  std::vector<std::string> exclusion_list;

  // Include network traffic to the list of IP blocks in CIDR notation to the
  // tunnel. This parameter can be used to set up a split tunnel. By default no
  // traffic is directed to the tunnel. Adding the entry "0.0.0.0/0" to this list
  // gets all the user traffic redirected to the tunnel. When many rules match a
  // destination, the rule with the longest matching prefix wins. Entries that
  // correspond to the same CIDR block are treated as duplicates. Such duplicates
  // in the collated (exclusionList + inclusionList) list are eliminated and the
  // exact duplicate entry that will be eliminated is undefined.
  std::vector<std::string> inclusion_list;

  // A list of search domains. (default: no search domain)
  absl::optional<std::vector<std::string>> domain_search;

  // A list of IPs for the DNS servers.
  std::vector<std::string> dns_servers;

  // <p>Whether or not the VPN extension implements auto-reconnection.</p><p>If
  // true, the <code>linkDown</code>, <code>linkUp</code>,
  // <code>linkChanged</code>, <code>suspend</code>, and <code>resume</code>
  // platform messages will be used to signal the respective events. If false, the
  // system will forcibly disconnect the VPN if the network topology changes, and
  // the user will need to reconnect manually. (default: false)</p><p>This
  // property is new in Chrome 51; it will generate an exception in earlier
  // versions. try/catch can be used to conditionally enable the feature based on
  // browser support.</p>
  absl::optional<std::string> reconnect;

};

// The enum is used by the platform to notify the client of the VPN session
// status.
enum PlatformMessage {
  PLATFORM_MESSAGE_NONE,
  PLATFORM_MESSAGE_CONNECTED,
  PLATFORM_MESSAGE_DISCONNECTED,
  PLATFORM_MESSAGE_ERROR,
  PLATFORM_MESSAGE_LINKDOWN,
  PLATFORM_MESSAGE_LINKUP,
  PLATFORM_MESSAGE_LINKCHANGED,
  PLATFORM_MESSAGE_SUSPEND,
  PLATFORM_MESSAGE_RESUME,
  PLATFORM_MESSAGE_LAST = PLATFORM_MESSAGE_RESUME,
};


const char* ToString(PlatformMessage as_enum);
PlatformMessage ParsePlatformMessage(const std::string& as_string);

// The enum is used by the VPN client to inform the platform of its current
// state. This helps provide meaningful messages to the user.
enum VpnConnectionState {
  VPN_CONNECTION_STATE_NONE,
  VPN_CONNECTION_STATE_CONNECTED,
  VPN_CONNECTION_STATE_FAILURE,
  VPN_CONNECTION_STATE_LAST = VPN_CONNECTION_STATE_FAILURE,
};


const char* ToString(VpnConnectionState as_enum);
VpnConnectionState ParseVpnConnectionState(const std::string& as_string);

// The enum is used by the platform to indicate the event that triggered
// <code>onUIEvent</code>.
enum UIEvent {
  UI_EVENT_NONE,
  UI_EVENT_SHOWADDDIALOG,
  UI_EVENT_SHOWCONFIGUREDIALOG,
  UI_EVENT_LAST = UI_EVENT_SHOWCONFIGUREDIALOG,
};


const char* ToString(UIEvent as_enum);
UIEvent ParseUIEvent(const std::string& as_string);


//
// Functions
//

namespace CreateConfig {

struct Params {
  static std::unique_ptr<Params> CreateDeprecated(const base::Value::List& args);
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The name of the VPN configuration.
  std::string name;


 private:
  Params();
};

namespace Results {

// A unique ID for the created configuration, or <code>undefined</code> on
// failure.
base::Value::List Create(const std::string& id);
}  // namespace Results

}  // namespace CreateConfig

namespace DestroyConfig {

struct Params {
  static std::unique_ptr<Params> CreateDeprecated(const base::Value::List& args);
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // ID of the VPN configuration to destroy.
  std::string id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace DestroyConfig

namespace SetParameters {

struct Params {
  static std::unique_ptr<Params> CreateDeprecated(const base::Value::List& args);
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The parameters for the VPN session.
  Parameters parameters;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetParameters

namespace SendPacket {

struct Params {
  static std::unique_ptr<Params> CreateDeprecated(const base::Value::List& args);
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The IP packet to be sent to the platform.
  std::vector<uint8_t> data;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SendPacket

namespace NotifyConnectionStateChanged {

struct Params {
  static std::unique_ptr<Params> CreateDeprecated(const base::Value::List& args);
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The VPN session state of the VPN client.
  VpnConnectionState state;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace NotifyConnectionStateChanged

//
// Events
//

namespace OnPlatformMessage {

extern const char kEventName[];  // "vpnProvider.onPlatformMessage"

// ID of the configuration the message is intended for.
// The message received from the platform.  Note that new message types may be
// added in future Chrome versions to support new features.
// Error message when there is an error.
base::Value::List Create(const std::string& id, const PlatformMessage& message, const std::string& error);
}  // namespace OnPlatformMessage

namespace OnPacketReceived {

extern const char kEventName[];  // "vpnProvider.onPacketReceived"

// The IP packet received from the platform.
base::Value::List Create(const std::vector<uint8_t>& data);
}  // namespace OnPacketReceived

namespace OnConfigRemoved {

extern const char kEventName[];  // "vpnProvider.onConfigRemoved"

// ID of the removed configuration.
base::Value::List Create(const std::string& id);
}  // namespace OnConfigRemoved

namespace OnConfigCreated {

extern const char kEventName[];  // "vpnProvider.onConfigCreated"

// Configuration data provided by the administrator.
struct Data {
  Data();
  ~Data();
  Data(const Data&) = delete;
  Data& operator=(const Data&) = delete;
  Data(Data&& rhs);
  Data& operator=(Data&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisData object.
  base::Value::Dict ToValue() const;

  base::Value::Dict additional_properties;
};


// ID of the configuration created.
// Name of the configuration created.
// Configuration data provided by the administrator.
base::Value::List Create(const std::string& id, const std::string& name, const Data& data);
}  // namespace OnConfigCreated

namespace OnUIEvent {

extern const char kEventName[];  // "vpnProvider.onUIEvent"

// The UI event that is triggered.
// ID of the configuration for which the UI event was triggered.
base::Value::List Create(const UIEvent& event, const std::string& id);
}  // namespace OnUIEvent

}  // namespace vpn_provider
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_VPN_PROVIDER_H__
