// Automatic generation of D-Bus interfaces:
//  - org.chromium.PatchPanel
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_PATCHPANEL_CLIENT_OUT_DEFAULT_GEN_INCLUDE_PATCHPANEL_DBUS_PROXIES_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_PATCHPANEL_CLIENT_OUT_DEFAULT_GEN_INCLUDE_PATCHPANEL_DBUS_PROXIES_H
#include <memory>
#include <string>
#include <vector>

#include <base/files/scoped_file.h>
#include <base/functional/bind.h>
#include <base/functional/callback.h>
#include <base/logging.h>
#include <base/memory/ref_counted.h>
#include <brillo/any.h>
#include <brillo/dbus/dbus_method_invoker.h>
#include <brillo/dbus/dbus_property.h>
#include <brillo/dbus/dbus_signal_handler.h>
#include <brillo/errors/error.h>
#include <brillo/variant_dictionary.h>
#include <dbus/bus.h>
#include <dbus/message.h>
#include <dbus/object_manager.h>
#include <dbus/object_path.h>
#include <dbus/object_proxy.h>

namespace org {
namespace chromium {

// Abstract interface proxy for org::chromium::PatchPanel.
class PatchPanelProxyInterface {
 public:
  virtual ~PatchPanelProxyInterface() = default;

  virtual bool ArcShutdown(
      const patchpanel::ArcShutdownRequest& in_request,
      patchpanel::ArcShutdownResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void ArcShutdownAsync(
      const patchpanel::ArcShutdownRequest& in_request,
      base::OnceCallback<void(const patchpanel::ArcShutdownResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool ArcStartup(
      const patchpanel::ArcStartupRequest& in_request,
      patchpanel::ArcStartupResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void ArcStartupAsync(
      const patchpanel::ArcStartupRequest& in_request,
      base::OnceCallback<void(const patchpanel::ArcStartupResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool ArcVmShutdown(
      const patchpanel::ArcVmShutdownRequest& in_request,
      patchpanel::ArcVmShutdownResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void ArcVmShutdownAsync(
      const patchpanel::ArcVmShutdownRequest& in_request,
      base::OnceCallback<void(const patchpanel::ArcVmShutdownResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool ArcVmStartup(
      const patchpanel::ArcVmStartupRequest& in_request,
      patchpanel::ArcVmStartupResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void ArcVmStartupAsync(
      const patchpanel::ArcVmStartupRequest& in_request,
      base::OnceCallback<void(const patchpanel::ArcVmStartupResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool ConnectNamespace(
      const patchpanel::ConnectNamespaceRequest& in_request,
      const base::ScopedFD& in_client_fd,
      patchpanel::ConnectNamespaceResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void ConnectNamespaceAsync(
      const patchpanel::ConnectNamespaceRequest& in_request,
      const base::ScopedFD& in_client_fd,
      base::OnceCallback<void(const patchpanel::ConnectNamespaceResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool CreateLocalOnlyNetwork(
      const patchpanel::LocalOnlyNetworkRequest& in_request,
      const base::ScopedFD& in_client_fd,
      patchpanel::LocalOnlyNetworkResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void CreateLocalOnlyNetworkAsync(
      const patchpanel::LocalOnlyNetworkRequest& in_request,
      const base::ScopedFD& in_client_fd,
      base::OnceCallback<void(const patchpanel::LocalOnlyNetworkResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool CreateTetheredNetwork(
      const patchpanel::TetheredNetworkRequest& in_request,
      const base::ScopedFD& in_client_fd,
      patchpanel::TetheredNetworkResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void CreateTetheredNetworkAsync(
      const patchpanel::TetheredNetworkRequest& in_request,
      const base::ScopedFD& in_client_fd,
      base::OnceCallback<void(const patchpanel::TetheredNetworkResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool ConfigureNetwork(
      const patchpanel::ConfigureNetworkRequest& in_request,
      patchpanel::ConfigureNetworkResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void ConfigureNetworkAsync(
      const patchpanel::ConfigureNetworkRequest& in_request,
      base::OnceCallback<void(const patchpanel::ConfigureNetworkResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool GetDevices(
      const patchpanel::GetDevicesRequest& in_request,
      patchpanel::GetDevicesResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetDevicesAsync(
      const patchpanel::GetDevicesRequest& in_request,
      base::OnceCallback<void(const patchpanel::GetDevicesResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool GetDownstreamNetworkInfo(
      const patchpanel::GetDownstreamNetworkInfoRequest& in_request,
      patchpanel::GetDownstreamNetworkInfoResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetDownstreamNetworkInfoAsync(
      const patchpanel::GetDownstreamNetworkInfoRequest& in_request,
      base::OnceCallback<void(const patchpanel::GetDownstreamNetworkInfoResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool GetTrafficCounters(
      const patchpanel::TrafficCountersRequest& in_request,
      patchpanel::TrafficCountersResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetTrafficCountersAsync(
      const patchpanel::TrafficCountersRequest& in_request,
      base::OnceCallback<void(const patchpanel::TrafficCountersResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool ModifyPortRule(
      const patchpanel::ModifyPortRuleRequest& in_request,
      patchpanel::ModifyPortRuleResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void ModifyPortRuleAsync(
      const patchpanel::ModifyPortRuleRequest& in_request,
      base::OnceCallback<void(const patchpanel::ModifyPortRuleResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool ParallelsVmShutdown(
      const patchpanel::ParallelsVmShutdownRequest& in_request,
      patchpanel::ParallelsVmShutdownResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void ParallelsVmShutdownAsync(
      const patchpanel::ParallelsVmShutdownRequest& in_request,
      base::OnceCallback<void(const patchpanel::ParallelsVmShutdownResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool ParallelsVmStartup(
      const patchpanel::ParallelsVmStartupRequest& in_request,
      patchpanel::ParallelsVmStartupResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void ParallelsVmStartupAsync(
      const patchpanel::ParallelsVmStartupRequest& in_request,
      base::OnceCallback<void(const patchpanel::ParallelsVmStartupResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool BruschettaVmShutdown(
      const patchpanel::BruschettaVmShutdownRequest& in_request,
      patchpanel::BruschettaVmShutdownResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void BruschettaVmShutdownAsync(
      const patchpanel::BruschettaVmShutdownRequest& in_request,
      base::OnceCallback<void(const patchpanel::BruschettaVmShutdownResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool BruschettaVmStartup(
      const patchpanel::BruschettaVmStartupRequest& in_request,
      patchpanel::BruschettaVmStartupResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void BruschettaVmStartupAsync(
      const patchpanel::BruschettaVmStartupRequest& in_request,
      base::OnceCallback<void(const patchpanel::BruschettaVmStartupResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool BorealisVmShutdown(
      const patchpanel::BorealisVmShutdownRequest& in_request,
      patchpanel::BorealisVmShutdownResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void BorealisVmShutdownAsync(
      const patchpanel::BorealisVmShutdownRequest& in_request,
      base::OnceCallback<void(const patchpanel::BorealisVmShutdownResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool BorealisVmStartup(
      const patchpanel::BorealisVmStartupRequest& in_request,
      patchpanel::BorealisVmStartupResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void BorealisVmStartupAsync(
      const patchpanel::BorealisVmStartupRequest& in_request,
      base::OnceCallback<void(const patchpanel::BorealisVmStartupResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool SetDnsRedirectionRule(
      const patchpanel::SetDnsRedirectionRuleRequest& in_request,
      const base::ScopedFD& in_client_fd,
      patchpanel::SetDnsRedirectionRuleResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void SetDnsRedirectionRuleAsync(
      const patchpanel::SetDnsRedirectionRuleRequest& in_request,
      const base::ScopedFD& in_client_fd,
      base::OnceCallback<void(const patchpanel::SetDnsRedirectionRuleResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool SetVpnIntent(
      const patchpanel::SetVpnIntentRequest& in_request,
      const base::ScopedFD& in_socket_fd,
      patchpanel::SetVpnIntentResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void SetVpnIntentAsync(
      const patchpanel::SetVpnIntentRequest& in_request,
      const base::ScopedFD& in_socket_fd,
      base::OnceCallback<void(const patchpanel::SetVpnIntentResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool SetVpnLockdown(
      const patchpanel::SetVpnLockdownRequest& in_request,
      patchpanel::SetVpnLockdownResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void SetVpnLockdownAsync(
      const patchpanel::SetVpnLockdownRequest& in_request,
      base::OnceCallback<void(const patchpanel::SetVpnLockdownResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool TerminaVmShutdown(
      const patchpanel::TerminaVmShutdownRequest& in_request,
      patchpanel::TerminaVmShutdownResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void TerminaVmShutdownAsync(
      const patchpanel::TerminaVmShutdownRequest& in_request,
      base::OnceCallback<void(const patchpanel::TerminaVmShutdownResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool TerminaVmStartup(
      const patchpanel::TerminaVmStartupRequest& in_request,
      patchpanel::TerminaVmStartupResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void TerminaVmStartupAsync(
      const patchpanel::TerminaVmStartupRequest& in_request,
      base::OnceCallback<void(const patchpanel::TerminaVmStartupResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool NotifyAndroidWifiMulticastLockChange(
      const patchpanel::NotifyAndroidWifiMulticastLockChangeRequest& in_request,
      patchpanel::NotifyAndroidWifiMulticastLockChangeResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void NotifyAndroidWifiMulticastLockChangeAsync(
      const patchpanel::NotifyAndroidWifiMulticastLockChangeRequest& in_request,
      base::OnceCallback<void(const patchpanel::NotifyAndroidWifiMulticastLockChangeResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool NotifyAndroidInteractiveState(
      const patchpanel::NotifyAndroidInteractiveStateRequest& in_request,
      patchpanel::NotifyAndroidInteractiveStateResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void NotifyAndroidInteractiveStateAsync(
      const patchpanel::NotifyAndroidInteractiveStateRequest& in_request,
      base::OnceCallback<void(const patchpanel::NotifyAndroidInteractiveStateResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool NotifySocketConnectionEvent(
      const patchpanel::NotifySocketConnectionEventRequest& in_request,
      patchpanel::NotifySocketConnectionEventResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void NotifySocketConnectionEventAsync(
      const patchpanel::NotifySocketConnectionEventRequest& in_request,
      base::OnceCallback<void(const patchpanel::NotifySocketConnectionEventResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool NotifyARCVPNSocketConnectionEvent(
      const patchpanel::NotifyARCVPNSocketConnectionEventRequest& in_request,
      patchpanel::NotifyARCVPNSocketConnectionEventResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void NotifyARCVPNSocketConnectionEventAsync(
      const patchpanel::NotifyARCVPNSocketConnectionEventRequest& in_request,
      base::OnceCallback<void(const patchpanel::NotifyARCVPNSocketConnectionEventResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool SetFeatureFlag(
      const patchpanel::SetFeatureFlagRequest& in_request,
      patchpanel::SetFeatureFlagResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void SetFeatureFlagAsync(
      const patchpanel::SetFeatureFlagRequest& in_request,
      base::OnceCallback<void(const patchpanel::SetFeatureFlagResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void RegisterNetworkDeviceChangedSignalHandler(
      const base::RepeatingCallback<void(const patchpanel::NetworkDeviceChangedSignal&)>& signal_callback,
      dbus::ObjectProxy::OnConnectedCallback on_connected_callback) = 0;

  virtual void RegisterNetworkConfigurationChangedSignalHandler(
      const base::RepeatingCallback<void(const patchpanel::NetworkConfigurationChangedSignal&)>& signal_callback,
      dbus::ObjectProxy::OnConnectedCallback on_connected_callback) = 0;

  virtual void RegisterNeighborReachabilityEventSignalHandler(
      const base::RepeatingCallback<void(const patchpanel::NeighborReachabilityEventSignal&)>& signal_callback,
      dbus::ObjectProxy::OnConnectedCallback on_connected_callback) = 0;

  virtual const dbus::ObjectPath& GetObjectPath() const = 0;
  virtual dbus::ObjectProxy* GetObjectProxy() const = 0;
};

}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {

// Interface proxy for org::chromium::PatchPanel.
class PatchPanelProxy final : public PatchPanelProxyInterface {
 public:
  PatchPanelProxy(const scoped_refptr<dbus::Bus>& bus) :
      bus_{bus},
      dbus_object_proxy_{
          bus_->GetObjectProxy(service_name_, object_path_)} {
  }

  PatchPanelProxy(const PatchPanelProxy&) = delete;
  PatchPanelProxy& operator=(const PatchPanelProxy&) = delete;

  ~PatchPanelProxy() override {
  }

  void RegisterNetworkDeviceChangedSignalHandler(
      const base::RepeatingCallback<void(const patchpanel::NetworkDeviceChangedSignal&)>& signal_callback,
      dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    brillo::dbus_utils::ConnectToSignal(
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "NetworkDeviceChanged",
        signal_callback,
        std::move(on_connected_callback));
  }

  void RegisterNetworkConfigurationChangedSignalHandler(
      const base::RepeatingCallback<void(const patchpanel::NetworkConfigurationChangedSignal&)>& signal_callback,
      dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    brillo::dbus_utils::ConnectToSignal(
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "NetworkConfigurationChanged",
        signal_callback,
        std::move(on_connected_callback));
  }

  void RegisterNeighborReachabilityEventSignalHandler(
      const base::RepeatingCallback<void(const patchpanel::NeighborReachabilityEventSignal&)>& signal_callback,
      dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    brillo::dbus_utils::ConnectToSignal(
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "NeighborReachabilityEvent",
        signal_callback,
        std::move(on_connected_callback));
  }

  void ReleaseObjectProxy(base::OnceClosure callback) {
    bus_->RemoveObjectProxy(service_name_, object_path_, std::move(callback));
  }

  const dbus::ObjectPath& GetObjectPath() const override {
    return object_path_;
  }

  dbus::ObjectProxy* GetObjectProxy() const override {
    return dbus_object_proxy_;
  }

  bool ArcShutdown(
      const patchpanel::ArcShutdownRequest& in_request,
      patchpanel::ArcShutdownResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "ArcShutdown",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  void ArcShutdownAsync(
      const patchpanel::ArcShutdownRequest& in_request,
      base::OnceCallback<void(const patchpanel::ArcShutdownResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "ArcShutdown",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool ArcStartup(
      const patchpanel::ArcStartupRequest& in_request,
      patchpanel::ArcStartupResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "ArcStartup",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  void ArcStartupAsync(
      const patchpanel::ArcStartupRequest& in_request,
      base::OnceCallback<void(const patchpanel::ArcStartupResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "ArcStartup",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool ArcVmShutdown(
      const patchpanel::ArcVmShutdownRequest& in_request,
      patchpanel::ArcVmShutdownResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "ArcVmShutdown",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  void ArcVmShutdownAsync(
      const patchpanel::ArcVmShutdownRequest& in_request,
      base::OnceCallback<void(const patchpanel::ArcVmShutdownResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "ArcVmShutdown",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool ArcVmStartup(
      const patchpanel::ArcVmStartupRequest& in_request,
      patchpanel::ArcVmStartupResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "ArcVmStartup",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  void ArcVmStartupAsync(
      const patchpanel::ArcVmStartupRequest& in_request,
      base::OnceCallback<void(const patchpanel::ArcVmStartupResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "ArcVmStartup",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool ConnectNamespace(
      const patchpanel::ConnectNamespaceRequest& in_request,
      const base::ScopedFD& in_client_fd,
      patchpanel::ConnectNamespaceResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "ConnectNamespace",
        error,
        in_request,
        in_client_fd);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  void ConnectNamespaceAsync(
      const patchpanel::ConnectNamespaceRequest& in_request,
      const base::ScopedFD& in_client_fd,
      base::OnceCallback<void(const patchpanel::ConnectNamespaceResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "ConnectNamespace",
        std::move(success_callback),
        std::move(error_callback),
        in_request,
        in_client_fd);
  }

  bool CreateLocalOnlyNetwork(
      const patchpanel::LocalOnlyNetworkRequest& in_request,
      const base::ScopedFD& in_client_fd,
      patchpanel::LocalOnlyNetworkResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "CreateLocalOnlyNetwork",
        error,
        in_request,
        in_client_fd);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  void CreateLocalOnlyNetworkAsync(
      const patchpanel::LocalOnlyNetworkRequest& in_request,
      const base::ScopedFD& in_client_fd,
      base::OnceCallback<void(const patchpanel::LocalOnlyNetworkResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "CreateLocalOnlyNetwork",
        std::move(success_callback),
        std::move(error_callback),
        in_request,
        in_client_fd);
  }

  bool CreateTetheredNetwork(
      const patchpanel::TetheredNetworkRequest& in_request,
      const base::ScopedFD& in_client_fd,
      patchpanel::TetheredNetworkResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "CreateTetheredNetwork",
        error,
        in_request,
        in_client_fd);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  void CreateTetheredNetworkAsync(
      const patchpanel::TetheredNetworkRequest& in_request,
      const base::ScopedFD& in_client_fd,
      base::OnceCallback<void(const patchpanel::TetheredNetworkResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "CreateTetheredNetwork",
        std::move(success_callback),
        std::move(error_callback),
        in_request,
        in_client_fd);
  }

  bool ConfigureNetwork(
      const patchpanel::ConfigureNetworkRequest& in_request,
      patchpanel::ConfigureNetworkResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "ConfigureNetwork",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  void ConfigureNetworkAsync(
      const patchpanel::ConfigureNetworkRequest& in_request,
      base::OnceCallback<void(const patchpanel::ConfigureNetworkResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "ConfigureNetwork",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool GetDevices(
      const patchpanel::GetDevicesRequest& in_request,
      patchpanel::GetDevicesResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "GetDevices",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  void GetDevicesAsync(
      const patchpanel::GetDevicesRequest& in_request,
      base::OnceCallback<void(const patchpanel::GetDevicesResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "GetDevices",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool GetDownstreamNetworkInfo(
      const patchpanel::GetDownstreamNetworkInfoRequest& in_request,
      patchpanel::GetDownstreamNetworkInfoResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "GetDownstreamNetworkInfo",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  void GetDownstreamNetworkInfoAsync(
      const patchpanel::GetDownstreamNetworkInfoRequest& in_request,
      base::OnceCallback<void(const patchpanel::GetDownstreamNetworkInfoResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "GetDownstreamNetworkInfo",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool GetTrafficCounters(
      const patchpanel::TrafficCountersRequest& in_request,
      patchpanel::TrafficCountersResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "GetTrafficCounters",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  void GetTrafficCountersAsync(
      const patchpanel::TrafficCountersRequest& in_request,
      base::OnceCallback<void(const patchpanel::TrafficCountersResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "GetTrafficCounters",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool ModifyPortRule(
      const patchpanel::ModifyPortRuleRequest& in_request,
      patchpanel::ModifyPortRuleResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "ModifyPortRule",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  void ModifyPortRuleAsync(
      const patchpanel::ModifyPortRuleRequest& in_request,
      base::OnceCallback<void(const patchpanel::ModifyPortRuleResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "ModifyPortRule",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool ParallelsVmShutdown(
      const patchpanel::ParallelsVmShutdownRequest& in_request,
      patchpanel::ParallelsVmShutdownResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "ParallelsVmShutdown",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  void ParallelsVmShutdownAsync(
      const patchpanel::ParallelsVmShutdownRequest& in_request,
      base::OnceCallback<void(const patchpanel::ParallelsVmShutdownResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "ParallelsVmShutdown",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool ParallelsVmStartup(
      const patchpanel::ParallelsVmStartupRequest& in_request,
      patchpanel::ParallelsVmStartupResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "ParallelsVmStartup",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  void ParallelsVmStartupAsync(
      const patchpanel::ParallelsVmStartupRequest& in_request,
      base::OnceCallback<void(const patchpanel::ParallelsVmStartupResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "ParallelsVmStartup",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool BruschettaVmShutdown(
      const patchpanel::BruschettaVmShutdownRequest& in_request,
      patchpanel::BruschettaVmShutdownResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "BruschettaVmShutdown",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  void BruschettaVmShutdownAsync(
      const patchpanel::BruschettaVmShutdownRequest& in_request,
      base::OnceCallback<void(const patchpanel::BruschettaVmShutdownResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "BruschettaVmShutdown",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool BruschettaVmStartup(
      const patchpanel::BruschettaVmStartupRequest& in_request,
      patchpanel::BruschettaVmStartupResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "BruschettaVmStartup",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  void BruschettaVmStartupAsync(
      const patchpanel::BruschettaVmStartupRequest& in_request,
      base::OnceCallback<void(const patchpanel::BruschettaVmStartupResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "BruschettaVmStartup",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool BorealisVmShutdown(
      const patchpanel::BorealisVmShutdownRequest& in_request,
      patchpanel::BorealisVmShutdownResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "BorealisVmShutdown",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  void BorealisVmShutdownAsync(
      const patchpanel::BorealisVmShutdownRequest& in_request,
      base::OnceCallback<void(const patchpanel::BorealisVmShutdownResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "BorealisVmShutdown",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool BorealisVmStartup(
      const patchpanel::BorealisVmStartupRequest& in_request,
      patchpanel::BorealisVmStartupResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "BorealisVmStartup",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  void BorealisVmStartupAsync(
      const patchpanel::BorealisVmStartupRequest& in_request,
      base::OnceCallback<void(const patchpanel::BorealisVmStartupResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "BorealisVmStartup",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool SetDnsRedirectionRule(
      const patchpanel::SetDnsRedirectionRuleRequest& in_request,
      const base::ScopedFD& in_client_fd,
      patchpanel::SetDnsRedirectionRuleResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "SetDnsRedirectionRule",
        error,
        in_request,
        in_client_fd);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  void SetDnsRedirectionRuleAsync(
      const patchpanel::SetDnsRedirectionRuleRequest& in_request,
      const base::ScopedFD& in_client_fd,
      base::OnceCallback<void(const patchpanel::SetDnsRedirectionRuleResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "SetDnsRedirectionRule",
        std::move(success_callback),
        std::move(error_callback),
        in_request,
        in_client_fd);
  }

  bool SetVpnIntent(
      const patchpanel::SetVpnIntentRequest& in_request,
      const base::ScopedFD& in_socket_fd,
      patchpanel::SetVpnIntentResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "SetVpnIntent",
        error,
        in_request,
        in_socket_fd);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  void SetVpnIntentAsync(
      const patchpanel::SetVpnIntentRequest& in_request,
      const base::ScopedFD& in_socket_fd,
      base::OnceCallback<void(const patchpanel::SetVpnIntentResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "SetVpnIntent",
        std::move(success_callback),
        std::move(error_callback),
        in_request,
        in_socket_fd);
  }

  bool SetVpnLockdown(
      const patchpanel::SetVpnLockdownRequest& in_request,
      patchpanel::SetVpnLockdownResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "SetVpnLockdown",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  void SetVpnLockdownAsync(
      const patchpanel::SetVpnLockdownRequest& in_request,
      base::OnceCallback<void(const patchpanel::SetVpnLockdownResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "SetVpnLockdown",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool TerminaVmShutdown(
      const patchpanel::TerminaVmShutdownRequest& in_request,
      patchpanel::TerminaVmShutdownResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "TerminaVmShutdown",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  void TerminaVmShutdownAsync(
      const patchpanel::TerminaVmShutdownRequest& in_request,
      base::OnceCallback<void(const patchpanel::TerminaVmShutdownResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "TerminaVmShutdown",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool TerminaVmStartup(
      const patchpanel::TerminaVmStartupRequest& in_request,
      patchpanel::TerminaVmStartupResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "TerminaVmStartup",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  void TerminaVmStartupAsync(
      const patchpanel::TerminaVmStartupRequest& in_request,
      base::OnceCallback<void(const patchpanel::TerminaVmStartupResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "TerminaVmStartup",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool NotifyAndroidWifiMulticastLockChange(
      const patchpanel::NotifyAndroidWifiMulticastLockChangeRequest& in_request,
      patchpanel::NotifyAndroidWifiMulticastLockChangeResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "NotifyAndroidWifiMulticastLockChange",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  void NotifyAndroidWifiMulticastLockChangeAsync(
      const patchpanel::NotifyAndroidWifiMulticastLockChangeRequest& in_request,
      base::OnceCallback<void(const patchpanel::NotifyAndroidWifiMulticastLockChangeResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "NotifyAndroidWifiMulticastLockChange",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool NotifyAndroidInteractiveState(
      const patchpanel::NotifyAndroidInteractiveStateRequest& in_request,
      patchpanel::NotifyAndroidInteractiveStateResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "NotifyAndroidInteractiveState",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  void NotifyAndroidInteractiveStateAsync(
      const patchpanel::NotifyAndroidInteractiveStateRequest& in_request,
      base::OnceCallback<void(const patchpanel::NotifyAndroidInteractiveStateResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "NotifyAndroidInteractiveState",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool NotifySocketConnectionEvent(
      const patchpanel::NotifySocketConnectionEventRequest& in_request,
      patchpanel::NotifySocketConnectionEventResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "NotifySocketConnectionEvent",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  void NotifySocketConnectionEventAsync(
      const patchpanel::NotifySocketConnectionEventRequest& in_request,
      base::OnceCallback<void(const patchpanel::NotifySocketConnectionEventResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "NotifySocketConnectionEvent",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool NotifyARCVPNSocketConnectionEvent(
      const patchpanel::NotifyARCVPNSocketConnectionEventRequest& in_request,
      patchpanel::NotifyARCVPNSocketConnectionEventResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "NotifyARCVPNSocketConnectionEvent",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  void NotifyARCVPNSocketConnectionEventAsync(
      const patchpanel::NotifyARCVPNSocketConnectionEventRequest& in_request,
      base::OnceCallback<void(const patchpanel::NotifyARCVPNSocketConnectionEventResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "NotifyARCVPNSocketConnectionEvent",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool SetFeatureFlag(
      const patchpanel::SetFeatureFlagRequest& in_request,
      patchpanel::SetFeatureFlagResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "SetFeatureFlag",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  void SetFeatureFlagAsync(
      const patchpanel::SetFeatureFlagRequest& in_request,
      base::OnceCallback<void(const patchpanel::SetFeatureFlagResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PatchPanel",
        "SetFeatureFlag",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

 private:
  scoped_refptr<dbus::Bus> bus_;
  const std::string service_name_{"org.chromium.PatchPanel"};
  const dbus::ObjectPath object_path_{"/org/chromium/PatchPanel"};
  dbus::ObjectProxy* dbus_object_proxy_;

};

}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_PATCHPANEL_CLIENT_OUT_DEFAULT_GEN_INCLUDE_PATCHPANEL_DBUS_PROXIES_H
