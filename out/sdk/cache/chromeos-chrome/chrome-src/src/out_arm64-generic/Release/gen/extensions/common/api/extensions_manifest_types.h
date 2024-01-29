// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/extensions_manifest_types.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_EXTENSIONS_MANIFEST_TYPES_H__
#define EXTENSIONS_COMMON_API_EXTENSIONS_MANIFEST_TYPES_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/types/expected.h"


namespace extensions {
namespace api {
namespace extensions_manifest_types {

//
// Types
//

// This API provides programmatic access to the user interface elements of
// Chrome. This includes everything in the web view, and optionally Chrome's
// full user interface.
struct Automation {
  Automation();
  ~Automation();
  Automation(const Automation&) = delete;
  Automation& operator=(const Automation&) = delete;
  Automation(Automation&& rhs) noexcept;
  Automation& operator=(Automation&& rhs) noexcept;

  // Populates a Automation object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Automation& out, std::u16string& error);

  // Creates a deep copy of Automation.
  Automation Clone() const;

  // Creates a Automation object from a base::Value, or unexpected on failure.
  static base::expected<Automation, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value representing the serialized form of
  // thisAutomation object.
  base::Value ToValue() const;
  struct Object {
    Object();
    ~Object();
    Object(const Object&) = delete;
    Object& operator=(const Object&) = delete;
    Object(Object&& rhs) noexcept;
    Object& operator=(Object&& rhs) noexcept;

    // Populates a Object object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Object& out, std::u16string& error);

    // Populates a Object object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Object& out, std::u16string& error);

    // Creates a deep copy of Object.
    Object Clone() const;

    // Creates a Object object from a base::Value::Dict, or unexpected on failure.
    static base::expected<Object, std::u16string> FromValue(const base::Value::Dict& value);

    // Creates a Object object from a base::Value, or unexpected on failure.
    static base::expected<Object, std::u16string> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisObject object.
    base::Value::Dict ToValue() const;

    // Whether to request permission to the whole ChromeOS desktop. If granted, this
    // gives the extension access to every aspect of the desktop, and every site and
    // app. If this permission is requested, all other permissions are implicitly
    // included and do not need to be requested separately.
    std::optional<bool> desktop;

    // A list of URL patterns for which this extension may request an automation
    // tree. If not specified, automation permission will be granted for the sites
    // for which the extension has a <a
    // href='https://developer.chrome.com/extensions/declare_permissions#host-permissions'>host permission</a> or <a href='https://developer.chrome.com/extensions/declare_permissions#activeTab'>activeTab permission</a>).
    std::optional<std::vector<std::string>> matches;

  };


  // Choices:
  std::optional<bool> as_boolean;
  std::optional<Object> as_object;
};

// The <code>content_capabilities</code> manifest entry allows an extension to
// grant certain additional capabilities to web contents whose locations match a
// given set of URL patterns.
struct ContentCapabilities {
  ContentCapabilities();
  ~ContentCapabilities();
  ContentCapabilities(const ContentCapabilities&) = delete;
  ContentCapabilities& operator=(const ContentCapabilities&) = delete;
  ContentCapabilities(ContentCapabilities&& rhs) noexcept;
  ContentCapabilities& operator=(ContentCapabilities&& rhs) noexcept;

  // Populates a ContentCapabilities object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ContentCapabilities& out, std::u16string& error);

  // Populates a ContentCapabilities object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ContentCapabilities& out, std::u16string& error);

  // Creates a deep copy of ContentCapabilities.
  ContentCapabilities Clone() const;

  // Creates a ContentCapabilities object from a base::Value::Dict, or
  // unexpected on failure.
  static base::expected<ContentCapabilities, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a ContentCapabilities object from a base::Value, or unexpected on
  // failure.
  static base::expected<ContentCapabilities, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisContentCapabilities object.
  base::Value::Dict ToValue() const;

  // The set of URL patterns to match against. If any of the given patterns match
  // a URL, its contents will be granted the specified capabilities.
  std::vector<std::string> matches;

  // The set of capabilities to grant matched contents. This is currently limited
  // to <code>clipboardRead</code>, <code>clipboardWrite</code>, and
  // <code>unlimitedStorage</code>.
  std::vector<std::string> permissions;

};

struct ExternallyConnectable {
  ExternallyConnectable();
  ~ExternallyConnectable();
  ExternallyConnectable(const ExternallyConnectable&) = delete;
  ExternallyConnectable& operator=(const ExternallyConnectable&) = delete;
  ExternallyConnectable(ExternallyConnectable&& rhs) noexcept;
  ExternallyConnectable& operator=(ExternallyConnectable&& rhs) noexcept;

  // Populates a ExternallyConnectable object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ExternallyConnectable& out, std::u16string& error);

  // Populates a ExternallyConnectable object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ExternallyConnectable& out, std::u16string& error);

  // Creates a deep copy of ExternallyConnectable.
  ExternallyConnectable Clone() const;

  // Creates a ExternallyConnectable object from a base::Value::Dict, or
  // unexpected on failure.
  static base::expected<ExternallyConnectable, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a ExternallyConnectable object from a base::Value, or unexpected on
  // failure.
  static base::expected<ExternallyConnectable, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisExternallyConnectable object.
  base::Value::Dict ToValue() const;

  // <p>The IDs of extensions or apps that are allowed to connect. If left empty
  // or unspecified, no extensions or apps can connect.</p><p>The wildcard
  // <code>"*"</code> will allow all extensions and apps to connect.</p>
  std::optional<std::vector<std::string>> ids;

  // <p>The URL patterns for <em>web pages</em> that are allowed to connect.
  // <em>This does not affect content scripts.</em> If left empty or unspecified,
  // no web pages can connect.</p><p>Patterns cannot include wildcard domains nor
  // subdomains of <a href="http://publicsuffix.org/list/">(effective) top level
  // domains</a>; <code>*://google.com/*</code> and
  // <code>http://*.chromium.org/*</code> are valid, while
  // <code>&lt;all_urls&gt;</code>, <code>http://*/*</code>,
  // <code>*://*.com/*</code>, and even <code>http://*.appspot.com/*</code> are
  // not.</p>
  std::optional<std::vector<std::string>> matches;

  // If <code>true</code>, messages sent via $(ref:runtime.connect) or
  // $(ref:runtime.sendMessage) will set $(ref:runtime.MessageSender.tlsChannelId)
  // if those methods request it to be. If <code>false</code>,
  // $(ref:runtime.MessageSender.tlsChannelId) will never be set under any
  // circumstance.
  std::optional<bool> accepts_tls_channel_id;

};

// The <code>options_ui</code> manifest property declares how the options page
// should be displayed.
struct OptionsUI {
  OptionsUI();
  ~OptionsUI();
  OptionsUI(const OptionsUI&) = delete;
  OptionsUI& operator=(const OptionsUI&) = delete;
  OptionsUI(OptionsUI&& rhs) noexcept;
  OptionsUI& operator=(OptionsUI&& rhs) noexcept;

  // Populates a OptionsUI object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, OptionsUI& out, std::u16string& error);

  // Populates a OptionsUI object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, OptionsUI& out, std::u16string& error);

  // Creates a deep copy of OptionsUI.
  OptionsUI Clone() const;

  // Creates a OptionsUI object from a base::Value::Dict, or unexpected on
  // failure.
  static base::expected<OptionsUI, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a OptionsUI object from a base::Value, or unexpected on failure.
  static base::expected<OptionsUI, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisOptionsUI object.
  base::Value::Dict ToValue() const;

  // The path to your options page, relative to your extension's root.
  std::string page;

  // If <code>true</code>, a Chrome user agent stylesheet will be applied to your
  // options page. The default value is <code>false</code>. We do not recommend
  // you enable it as it no longer results in a consistent UI with Chrome. This
  // option will be removed in Manifest V3.
  std::optional<bool> chrome_style;

  // <p>If <code>true</code>, your extension's options page will be opened in a
  // new tab rather than embedded in <em>chrome://extensions</em>. The default is
  // <code>false</code>, and we recommend that you don't change
  // it.</p><p><strong>This is only useful to delay the inevitable deprecation of
  // the old options UI!</strong> It will be removed soon, so try not to use it.
  // It will break.</p>
  std::optional<bool> open_in_tab;

};

// <p>A single string or a list of strings representing host:port patterns.</p>
struct SocketHostPatterns {
  SocketHostPatterns();
  ~SocketHostPatterns();
  SocketHostPatterns(const SocketHostPatterns&) = delete;
  SocketHostPatterns& operator=(const SocketHostPatterns&) = delete;
  SocketHostPatterns(SocketHostPatterns&& rhs) noexcept;
  SocketHostPatterns& operator=(SocketHostPatterns&& rhs) noexcept;

  // Populates a SocketHostPatterns object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SocketHostPatterns& out, std::u16string& error);

  // Creates a deep copy of SocketHostPatterns.
  SocketHostPatterns Clone() const;

  // Creates a SocketHostPatterns object from a base::Value, or unexpected on
  // failure.
  static base::expected<SocketHostPatterns, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value representing the serialized form of
  // thisSocketHostPatterns object.
  base::Value ToValue() const;
  // Choices:
  std::optional<std::string> as_string;
  std::optional<std::vector<std::string>> as_strings;
};

// The <code>sockets</code> manifest property declares which sockets operations
// an app can issue.
struct Sockets {
  Sockets();
  ~Sockets();
  Sockets(const Sockets&) = delete;
  Sockets& operator=(const Sockets&) = delete;
  Sockets(Sockets&& rhs) noexcept;
  Sockets& operator=(Sockets&& rhs) noexcept;

  // Populates a Sockets object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Sockets& out, std::u16string& error);

  // Populates a Sockets object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Sockets& out, std::u16string& error);

  // Creates a deep copy of Sockets.
  Sockets Clone() const;

  // Creates a Sockets object from a base::Value::Dict, or unexpected on
  // failure.
  static base::expected<Sockets, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a Sockets object from a base::Value, or unexpected on failure.
  static base::expected<Sockets, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSockets object.
  base::Value::Dict ToValue() const;

  // The <code>udp</code> manifest property declares which sockets.udp operations
  // an app can issue.
  struct Udp {
    Udp();
    ~Udp();
    Udp(const Udp&) = delete;
    Udp& operator=(const Udp&) = delete;
    Udp(Udp&& rhs) noexcept;
    Udp& operator=(Udp&& rhs) noexcept;

    // Populates a Udp object from a base::Value& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value& value, Udp& out, std::u16string& error);

    // Populates a Udp object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Udp& out, std::u16string& error);

    // Creates a deep copy of Udp.
    Udp Clone() const;

    // Creates a Udp object from a base::Value::Dict, or unexpected on failure.
    static base::expected<Udp, std::u16string> FromValue(const base::Value::Dict& value);

    // Creates a Udp object from a base::Value, or unexpected on failure.
    static base::expected<Udp, std::u16string> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of thisUdp
    // object.
    base::Value::Dict ToValue() const;

    // <p>The host:port pattern for <code>bind</code> operations.</p>
    std::optional<SocketHostPatterns> bind;

    // <p>The host:port pattern for <code>send</code> operations.</p>
    std::optional<SocketHostPatterns> send;

    // <p>The host:port pattern for <code>joinGroup</code> operations.</p>
    std::optional<SocketHostPatterns> multicast_membership;

  };

  // The <code>tcp</code> manifest property declares which sockets.tcp operations
  // an app can issue.
  struct Tcp {
    Tcp();
    ~Tcp();
    Tcp(const Tcp&) = delete;
    Tcp& operator=(const Tcp&) = delete;
    Tcp(Tcp&& rhs) noexcept;
    Tcp& operator=(Tcp&& rhs) noexcept;

    // Populates a Tcp object from a base::Value& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value& value, Tcp& out, std::u16string& error);

    // Populates a Tcp object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Tcp& out, std::u16string& error);

    // Creates a deep copy of Tcp.
    Tcp Clone() const;

    // Creates a Tcp object from a base::Value::Dict, or unexpected on failure.
    static base::expected<Tcp, std::u16string> FromValue(const base::Value::Dict& value);

    // Creates a Tcp object from a base::Value, or unexpected on failure.
    static base::expected<Tcp, std::u16string> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of thisTcp
    // object.
    base::Value::Dict ToValue() const;

    // <p>The host:port pattern for <code>connect</code> operations.</p>
    std::optional<SocketHostPatterns> connect;

  };

  // The <code>tcpServer</code> manifest property declares which sockets.tcpServer
  // operations an app can issue.
  struct TcpServer {
    TcpServer();
    ~TcpServer();
    TcpServer(const TcpServer&) = delete;
    TcpServer& operator=(const TcpServer&) = delete;
    TcpServer(TcpServer&& rhs) noexcept;
    TcpServer& operator=(TcpServer&& rhs) noexcept;

    // Populates a TcpServer object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, TcpServer& out, std::u16string& error);

    // Populates a TcpServer object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, TcpServer& out, std::u16string& error);

    // Creates a deep copy of TcpServer.
    TcpServer Clone() const;

    // Creates a TcpServer object from a base::Value::Dict, or unexpected on
    // failure.
    static base::expected<TcpServer, std::u16string> FromValue(const base::Value::Dict& value);

    // Creates a TcpServer object from a base::Value, or unexpected on failure.
    static base::expected<TcpServer, std::u16string> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisTcpServer object.
    base::Value::Dict ToValue() const;

    // <p>The host:port pattern for <code>listen</code> operations.</p>
    std::optional<SocketHostPatterns> listen;

  };


  // The <code>udp</code> manifest property declares which sockets.udp operations
  // an app can issue.
  std::optional<Udp> udp;

  // The <code>tcp</code> manifest property declares which sockets.tcp operations
  // an app can issue.
  std::optional<Tcp> tcp;

  // The <code>tcpServer</code> manifest property declares which sockets.tcpServer
  // operations an app can issue.
  std::optional<TcpServer> tcp_server;

};

// The <code>bluetooth</code> manifest property give permission to an app to use
// the $(ref:bluetooth) API. A list of UUIDs can be optionally specified to
// enable communication with devices.
struct Bluetooth {
  Bluetooth();
  ~Bluetooth();
  Bluetooth(const Bluetooth&) = delete;
  Bluetooth& operator=(const Bluetooth&) = delete;
  Bluetooth(Bluetooth&& rhs) noexcept;
  Bluetooth& operator=(Bluetooth&& rhs) noexcept;

  // Populates a Bluetooth object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Bluetooth& out, std::u16string& error);

  // Populates a Bluetooth object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, Bluetooth& out, std::u16string& error);

  // Creates a deep copy of Bluetooth.
  Bluetooth Clone() const;

  // Creates a Bluetooth object from a base::Value::Dict, or unexpected on
  // failure.
  static base::expected<Bluetooth, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a Bluetooth object from a base::Value, or unexpected on failure.
  static base::expected<Bluetooth, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisBluetooth object.
  base::Value::Dict ToValue() const;

  // The <code>uuids</code> manifest property declares the list of protocols,
  // profiles and services that an app can communicate using.
  std::optional<std::vector<std::string>> uuids;

  // If <code>true</code>, gives permission to an app to use the
  // $(ref:bluetoothSocket) API
  std::optional<bool> socket;

  // If <code>true</code>, gives permission to an app to use the
  // $(ref:bluetoothLowEnergy) API
  std::optional<bool> low_energy;

  // If <code>true</code>, gives permission to an app to use the advertisement
  // functions in the $(ref:bluetoothLowEnergy) API
  std::optional<bool> peripheral;

};

// The <code>usb_printers</code> manifest property lists the USB printers
// supported by an app implementing the $(ref:printerProvider) API.
struct UsbPrinters {
  UsbPrinters();
  ~UsbPrinters();
  UsbPrinters(const UsbPrinters&) = delete;
  UsbPrinters& operator=(const UsbPrinters&) = delete;
  UsbPrinters(UsbPrinters&& rhs) noexcept;
  UsbPrinters& operator=(UsbPrinters&& rhs) noexcept;

  // Populates a UsbPrinters object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UsbPrinters& out, std::u16string& error);

  // Populates a UsbPrinters object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, UsbPrinters& out, std::u16string& error);

  // Creates a deep copy of UsbPrinters.
  UsbPrinters Clone() const;

  // Creates a UsbPrinters object from a base::Value::Dict, or unexpected on
  // failure.
  static base::expected<UsbPrinters, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a UsbPrinters object from a base::Value, or unexpected on failure.
  static base::expected<UsbPrinters, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisUsbPrinters object.
  base::Value::Dict ToValue() const;

  struct FiltersType {
    FiltersType();
    ~FiltersType();
    FiltersType(const FiltersType&) = delete;
    FiltersType& operator=(const FiltersType&) = delete;
    FiltersType(FiltersType&& rhs) noexcept;
    FiltersType& operator=(FiltersType&& rhs) noexcept;

    // Populates a FiltersType object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, FiltersType& out, std::u16string& error);

    // Populates a FiltersType object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, FiltersType& out, std::u16string& error);

    // Creates a deep copy of FiltersType.
    FiltersType Clone() const;

    // Creates a FiltersType object from a base::Value::Dict, or unexpected on
    // failure.
    static base::expected<FiltersType, std::u16string> FromValue(const base::Value::Dict& value);

    // Creates a FiltersType object from a base::Value, or unexpected on failure.
    static base::expected<FiltersType, std::u16string> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisFiltersType object.
    base::Value::Dict ToValue() const;

    // USB vendor ID of matching devices
    int vendor_id;

    // USB product ID of matching devices
    std::optional<int> product_id;

    // USB interface class implemented by any interface of a matching device.
    std::optional<int> interface_class;

    // USB interface sub-class implemented by the interface matching
    // $(ref:interfaceClass).
    std::optional<int> interface_subclass;

    // USB interface protocol implemented by the interface matching
    // $(ref:interfaceClass) and $(ref:interfaceSubclass).
    std::optional<int> interface_protocol;

  };



  // A list of $(ref:usb.DeviceFilter USB device filters) matching supported
  // devices. A device only needs to match one of the provided filters. A
  // <code>vendorId</code> is required and only one of <code>productId</code> or
  // <code>interfaceClass</code> may be provided.
  std::vector<FiltersType> filters;

};

// The <code>kiosk_secondary_apps</code> manifest property lists the secondary
// kiosk apps to be deployed by the primary kiosk app.
struct KioskSecondaryAppsType {
  KioskSecondaryAppsType();
  ~KioskSecondaryAppsType();
  KioskSecondaryAppsType(const KioskSecondaryAppsType&) = delete;
  KioskSecondaryAppsType& operator=(const KioskSecondaryAppsType&) = delete;
  KioskSecondaryAppsType(KioskSecondaryAppsType&& rhs) noexcept;
  KioskSecondaryAppsType& operator=(KioskSecondaryAppsType&& rhs) noexcept;

  // Populates a KioskSecondaryAppsType object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, KioskSecondaryAppsType& out, std::u16string& error);

  // Populates a KioskSecondaryAppsType object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, KioskSecondaryAppsType& out, std::u16string& error);

  // Creates a deep copy of KioskSecondaryAppsType.
  KioskSecondaryAppsType Clone() const;

  // Creates a KioskSecondaryAppsType object from a base::Value::Dict, or
  // unexpected on failure.
  static base::expected<KioskSecondaryAppsType, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a KioskSecondaryAppsType object from a base::Value, or unexpected
  // on failure.
  static base::expected<KioskSecondaryAppsType, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisKioskSecondaryAppsType object.
  base::Value::Dict ToValue() const;

  // ID of secondary kiosk app
  std::string id;

  // Whether the secondary app should be enabled when kiosk app is launched. If
  // true, the app will be enabled before the kiosk app launch; if false the app
  // will be disabled before the kiosk app launch; if not set, the app's enabled
  // state will not be changed during the kiosk app launch. The ${ref:management}
  // API can be used to later change the secondary app state.
  std::optional<bool> enabled_on_launch;

};

using KioskSecondaryApps = std::vector<KioskSecondaryAppsType >;


}  // namespace extensions_manifest_types
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_EXTENSIONS_MANIFEST_TYPES_H__
