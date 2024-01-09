// Automatic generation of D-Bus interfaces:
//  - org.chromium.PatchPanel
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_PATCHPANEL_OUT_DEFAULT_GEN_INCLUDE_PATCHPANEL_DBUS_ADAPTORS_ORG_CHROMIUM_PATCHPANEL_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_PATCHPANEL_OUT_DEFAULT_GEN_INCLUDE_PATCHPANEL_DBUS_ADAPTORS_ORG_CHROMIUM_PATCHPANEL_H
#include <memory>
#include <string>
#include <tuple>
#include <vector>

#include <base/files/scoped_file.h>
#include <dbus/object_path.h>
#include <brillo/any.h>
#include <brillo/dbus/dbus_object.h>
#include <brillo/dbus/exported_object_manager.h>
#include <brillo/variant_dictionary.h>

namespace org {
namespace chromium {

// Interface definition for org::chromium::PatchPanel.
class PatchPanelInterface {
 public:
  virtual ~PatchPanelInterface() = default;

  virtual patchpanel::ArcShutdownResponse ArcShutdown(
      const patchpanel::ArcShutdownRequest& in_request) = 0;
  virtual patchpanel::ArcStartupResponse ArcStartup(
      const patchpanel::ArcStartupRequest& in_request) = 0;
  virtual patchpanel::ArcVmShutdownResponse ArcVmShutdown(
      const patchpanel::ArcVmShutdownRequest& in_request) = 0;
  virtual patchpanel::ArcVmStartupResponse ArcVmStartup(
      const patchpanel::ArcVmStartupRequest& in_request) = 0;
  virtual patchpanel::ConnectNamespaceResponse ConnectNamespace(
      const patchpanel::ConnectNamespaceRequest& in_request,
      const base::ScopedFD& in_client_fd) = 0;
  virtual patchpanel::LocalOnlyNetworkResponse CreateLocalOnlyNetwork(
      const patchpanel::LocalOnlyNetworkRequest& in_request,
      const base::ScopedFD& in_client_fd) = 0;
  virtual patchpanel::TetheredNetworkResponse CreateTetheredNetwork(
      const patchpanel::TetheredNetworkRequest& in_request,
      const base::ScopedFD& in_client_fd) = 0;
  virtual patchpanel::ConfigureNetworkResponse ConfigureNetwork(
      const patchpanel::ConfigureNetworkRequest& in_request) = 0;
  virtual patchpanel::GetDevicesResponse GetDevices(
      const patchpanel::GetDevicesRequest& in_request) const = 0;
  virtual patchpanel::GetDownstreamNetworkInfoResponse GetDownstreamNetworkInfo(
      const patchpanel::GetDownstreamNetworkInfoRequest& in_request) const = 0;
  virtual patchpanel::TrafficCountersResponse GetTrafficCounters(
      const patchpanel::TrafficCountersRequest& in_request) const = 0;
  virtual patchpanel::ModifyPortRuleResponse ModifyPortRule(
      const patchpanel::ModifyPortRuleRequest& in_request) = 0;
  virtual patchpanel::ParallelsVmShutdownResponse ParallelsVmShutdown(
      const patchpanel::ParallelsVmShutdownRequest& in_request) = 0;
  virtual patchpanel::ParallelsVmStartupResponse ParallelsVmStartup(
      const patchpanel::ParallelsVmStartupRequest& in_request) = 0;
  virtual patchpanel::BruschettaVmShutdownResponse BruschettaVmShutdown(
      const patchpanel::BruschettaVmShutdownRequest& in_request) = 0;
  virtual patchpanel::BruschettaVmStartupResponse BruschettaVmStartup(
      const patchpanel::BruschettaVmStartupRequest& in_request) = 0;
  virtual patchpanel::BorealisVmShutdownResponse BorealisVmShutdown(
      const patchpanel::BorealisVmShutdownRequest& in_request) = 0;
  virtual patchpanel::BorealisVmStartupResponse BorealisVmStartup(
      const patchpanel::BorealisVmStartupRequest& in_request) = 0;
  virtual patchpanel::SetDnsRedirectionRuleResponse SetDnsRedirectionRule(
      const patchpanel::SetDnsRedirectionRuleRequest& in_request,
      const base::ScopedFD& in_client_fd) = 0;
  virtual patchpanel::SetVpnIntentResponse SetVpnIntent(
      const patchpanel::SetVpnIntentRequest& in_request,
      const base::ScopedFD& in_socket_fd) = 0;
  virtual patchpanel::SetVpnLockdownResponse SetVpnLockdown(
      const patchpanel::SetVpnLockdownRequest& in_request) = 0;
  virtual patchpanel::TerminaVmShutdownResponse TerminaVmShutdown(
      const patchpanel::TerminaVmShutdownRequest& in_request) = 0;
  virtual patchpanel::TerminaVmStartupResponse TerminaVmStartup(
      const patchpanel::TerminaVmStartupRequest& in_request) = 0;
  virtual patchpanel::NotifyAndroidWifiMulticastLockChangeResponse NotifyAndroidWifiMulticastLockChange(
      const patchpanel::NotifyAndroidWifiMulticastLockChangeRequest& in_request) = 0;
  virtual patchpanel::NotifyAndroidInteractiveStateResponse NotifyAndroidInteractiveState(
      const patchpanel::NotifyAndroidInteractiveStateRequest& in_request) = 0;
  virtual patchpanel::NotifySocketConnectionEventResponse NotifySocketConnectionEvent(
      const patchpanel::NotifySocketConnectionEventRequest& in_request) = 0;
  virtual patchpanel::SetFeatureFlagResponse SetFeatureFlag(
      const patchpanel::SetFeatureFlagRequest& in_request) = 0;
};

// Interface adaptor for org::chromium::PatchPanel.
class PatchPanelAdaptor {
 public:
  PatchPanelAdaptor(PatchPanelInterface* interface) : interface_(interface) {}
  PatchPanelAdaptor(const PatchPanelAdaptor&) = delete;
  PatchPanelAdaptor& operator=(const PatchPanelAdaptor&) = delete;

  void RegisterWithDBusObject(brillo::dbus_utils::DBusObject* object) {
    brillo::dbus_utils::DBusInterface* itf =
        object->AddOrGetInterface("org.chromium.PatchPanel");

    itf->AddSimpleMethodHandler(
        "ArcShutdown",
        base::Unretained(interface_),
        &PatchPanelInterface::ArcShutdown);
    itf->AddSimpleMethodHandler(
        "ArcStartup",
        base::Unretained(interface_),
        &PatchPanelInterface::ArcStartup);
    itf->AddSimpleMethodHandler(
        "ArcVmShutdown",
        base::Unretained(interface_),
        &PatchPanelInterface::ArcVmShutdown);
    itf->AddSimpleMethodHandler(
        "ArcVmStartup",
        base::Unretained(interface_),
        &PatchPanelInterface::ArcVmStartup);
    itf->AddSimpleMethodHandler(
        "ConnectNamespace",
        base::Unretained(interface_),
        &PatchPanelInterface::ConnectNamespace);
    itf->AddSimpleMethodHandler(
        "CreateLocalOnlyNetwork",
        base::Unretained(interface_),
        &PatchPanelInterface::CreateLocalOnlyNetwork);
    itf->AddSimpleMethodHandler(
        "CreateTetheredNetwork",
        base::Unretained(interface_),
        &PatchPanelInterface::CreateTetheredNetwork);
    itf->AddSimpleMethodHandler(
        "ConfigureNetwork",
        base::Unretained(interface_),
        &PatchPanelInterface::ConfigureNetwork);
    itf->AddSimpleMethodHandler(
        "GetDevices",
        base::Unretained(interface_),
        &PatchPanelInterface::GetDevices);
    itf->AddSimpleMethodHandler(
        "GetDownstreamNetworkInfo",
        base::Unretained(interface_),
        &PatchPanelInterface::GetDownstreamNetworkInfo);
    itf->AddSimpleMethodHandler(
        "GetTrafficCounters",
        base::Unretained(interface_),
        &PatchPanelInterface::GetTrafficCounters);
    itf->AddSimpleMethodHandler(
        "ModifyPortRule",
        base::Unretained(interface_),
        &PatchPanelInterface::ModifyPortRule);
    itf->AddSimpleMethodHandler(
        "ParallelsVmShutdown",
        base::Unretained(interface_),
        &PatchPanelInterface::ParallelsVmShutdown);
    itf->AddSimpleMethodHandler(
        "ParallelsVmStartup",
        base::Unretained(interface_),
        &PatchPanelInterface::ParallelsVmStartup);
    itf->AddSimpleMethodHandler(
        "BruschettaVmShutdown",
        base::Unretained(interface_),
        &PatchPanelInterface::BruschettaVmShutdown);
    itf->AddSimpleMethodHandler(
        "BruschettaVmStartup",
        base::Unretained(interface_),
        &PatchPanelInterface::BruschettaVmStartup);
    itf->AddSimpleMethodHandler(
        "BorealisVmShutdown",
        base::Unretained(interface_),
        &PatchPanelInterface::BorealisVmShutdown);
    itf->AddSimpleMethodHandler(
        "BorealisVmStartup",
        base::Unretained(interface_),
        &PatchPanelInterface::BorealisVmStartup);
    itf->AddSimpleMethodHandler(
        "SetDnsRedirectionRule",
        base::Unretained(interface_),
        &PatchPanelInterface::SetDnsRedirectionRule);
    itf->AddSimpleMethodHandler(
        "SetVpnIntent",
        base::Unretained(interface_),
        &PatchPanelInterface::SetVpnIntent);
    itf->AddSimpleMethodHandler(
        "SetVpnLockdown",
        base::Unretained(interface_),
        &PatchPanelInterface::SetVpnLockdown);
    itf->AddSimpleMethodHandler(
        "TerminaVmShutdown",
        base::Unretained(interface_),
        &PatchPanelInterface::TerminaVmShutdown);
    itf->AddSimpleMethodHandler(
        "TerminaVmStartup",
        base::Unretained(interface_),
        &PatchPanelInterface::TerminaVmStartup);
    itf->AddSimpleMethodHandler(
        "NotifyAndroidWifiMulticastLockChange",
        base::Unretained(interface_),
        &PatchPanelInterface::NotifyAndroidWifiMulticastLockChange);
    itf->AddSimpleMethodHandler(
        "NotifyAndroidInteractiveState",
        base::Unretained(interface_),
        &PatchPanelInterface::NotifyAndroidInteractiveState);
    itf->AddSimpleMethodHandler(
        "NotifySocketConnectionEvent",
        base::Unretained(interface_),
        &PatchPanelInterface::NotifySocketConnectionEvent);
    itf->AddSimpleMethodHandler(
        "SetFeatureFlag",
        base::Unretained(interface_),
        &PatchPanelInterface::SetFeatureFlag);

    signal_NetworkDeviceChanged_ = itf->RegisterSignalOfType<SignalNetworkDeviceChangedType>("NetworkDeviceChanged");
    signal_NetworkConfigurationChanged_ = itf->RegisterSignalOfType<SignalNetworkConfigurationChangedType>("NetworkConfigurationChanged");
    signal_NeighborReachabilityEvent_ = itf->RegisterSignalOfType<SignalNeighborReachabilityEventType>("NeighborReachabilityEvent");
  }

  void SendNetworkDeviceChangedSignal(
      const patchpanel::NetworkDeviceChangedSignal& in_payload) {
    auto signal = signal_NetworkDeviceChanged_.lock();
    if (signal)
      signal->Send(in_payload);
  }
  void SendNetworkConfigurationChangedSignal(
      const patchpanel::NetworkConfigurationChangedSignal& in_payload) {
    auto signal = signal_NetworkConfigurationChanged_.lock();
    if (signal)
      signal->Send(in_payload);
  }
  void SendNeighborReachabilityEventSignal(
      const patchpanel::NeighborReachabilityEventSignal& in_payload) {
    auto signal = signal_NeighborReachabilityEvent_.lock();
    if (signal)
      signal->Send(in_payload);
  }

  static dbus::ObjectPath GetObjectPath() {
    return dbus::ObjectPath{"/org/chromium/PatchPanel"};
  }

  static const char* GetIntrospectionXml() {
    return
        "  <interface name=\"org.chromium.PatchPanel\">\n"
        "    <method name=\"ArcShutdown\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"ArcStartup\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"ArcVmShutdown\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"ArcVmStartup\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"ConnectNamespace\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"client_fd\" type=\"h\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"CreateLocalOnlyNetwork\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"client_fd\" type=\"h\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"CreateTetheredNetwork\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"client_fd\" type=\"h\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"ConfigureNetwork\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"GetDevices\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"GetDownstreamNetworkInfo\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"GetTrafficCounters\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"ModifyPortRule\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"ParallelsVmShutdown\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"ParallelsVmStartup\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"BruschettaVmShutdown\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"BruschettaVmStartup\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"BorealisVmShutdown\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"BorealisVmStartup\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"SetDnsRedirectionRule\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"client_fd\" type=\"h\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"SetVpnIntent\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"socket_fd\" type=\"h\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"SetVpnLockdown\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"TerminaVmShutdown\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"TerminaVmStartup\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"NotifyAndroidWifiMulticastLockChange\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"NotifyAndroidInteractiveState\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"NotifySocketConnectionEvent\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"SetFeatureFlag\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <signal name=\"NetworkDeviceChanged\">\n"
        "      <arg name=\"payload\" type=\"ay\"/>\n"
        "    </signal>\n"
        "    <signal name=\"NetworkConfigurationChanged\">\n"
        "      <arg name=\"payload\" type=\"ay\"/>\n"
        "    </signal>\n"
        "    <signal name=\"NeighborReachabilityEvent\">\n"
        "      <arg name=\"payload\" type=\"ay\"/>\n"
        "    </signal>\n"
        "  </interface>\n";
  }

 private:
  using SignalNetworkDeviceChangedType = brillo::dbus_utils::DBusSignal<
      patchpanel::NetworkDeviceChangedSignal /*payload*/>;
  std::weak_ptr<SignalNetworkDeviceChangedType> signal_NetworkDeviceChanged_;

  using SignalNetworkConfigurationChangedType = brillo::dbus_utils::DBusSignal<
      patchpanel::NetworkConfigurationChangedSignal /*payload*/>;
  std::weak_ptr<SignalNetworkConfigurationChangedType> signal_NetworkConfigurationChanged_;

  using SignalNeighborReachabilityEventType = brillo::dbus_utils::DBusSignal<
      patchpanel::NeighborReachabilityEventSignal /*payload*/>;
  std::weak_ptr<SignalNeighborReachabilityEventType> signal_NeighborReachabilityEvent_;

  PatchPanelInterface* interface_;  // Owned by container of this adapter.
};

}  // namespace chromium
}  // namespace org
#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_PATCHPANEL_OUT_DEFAULT_GEN_INCLUDE_PATCHPANEL_DBUS_ADAPTORS_ORG_CHROMIUM_PATCHPANEL_H
