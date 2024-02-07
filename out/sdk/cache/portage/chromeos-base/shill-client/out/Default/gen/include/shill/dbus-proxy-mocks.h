// Automatic generation of D-Bus interface mock proxies for:
//  - org.chromium.flimflam.Device
//  - org.chromium.flimflam.IPConfig
//  - org.chromium.flimflam.Manager
//  - org.chromium.flimflam.Profile
//  - org.chromium.flimflam.Service
//  - org.chromium.flimflam.Task
//  - org.chromium.flimflam.ThirdPartyVpn
#ifndef ____CHROMEOS_DBUS_BINDING___VAR_CACHE_PORTAGE_CHROMEOS_BASE_SHILL_CLIENT_OUT_DEFAULT_GEN_INCLUDE_SHILL_DBUS_PROXY_MOCKS_H
#define ____CHROMEOS_DBUS_BINDING___VAR_CACHE_PORTAGE_CHROMEOS_BASE_SHILL_CLIENT_OUT_DEFAULT_GEN_INCLUDE_SHILL_DBUS_PROXY_MOCKS_H
#include <string>
#include <vector>

#include <base/functional/callback_forward.h>
#include <base/logging.h>
#include <brillo/any.h>
#include <brillo/errors/error.h>
#include <brillo/variant_dictionary.h>
#include <gmock/gmock.h>

#include "shill/dbus-proxies.h"

namespace org {
namespace chromium {
namespace flimflam {

// Mock object for DeviceProxyInterface.
class DeviceProxyMock : public DeviceProxyInterface {
 public:
  DeviceProxyMock() = default;
  DeviceProxyMock(const DeviceProxyMock&) = delete;
  DeviceProxyMock& operator=(const DeviceProxyMock&) = delete;

  MOCK_METHOD(bool,
              GetProperties,
              (brillo::VariantDictionary*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetPropertiesAsync,
              (base::OnceCallback<void(const brillo::VariantDictionary&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetProperty,
              (const std::string&,
               const brillo::Any&,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetPropertyAsync,
              (const std::string&,
               const brillo::Any&,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ClearProperty,
              (const std::string&,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ClearPropertyAsync,
              (const std::string&,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Enable,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              EnableAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Disable,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              DisableAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Register,
              (const std::string&,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RegisterAsync,
              (const std::string&,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RequirePin,
              (const std::string&,
               bool,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RequirePinAsync,
              (const std::string&,
               bool,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              EnterPin,
              (const std::string&,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              EnterPinAsync,
              (const std::string&,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              UnblockPin,
              (const std::string&,
               const std::string&,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              UnblockPinAsync,
              (const std::string&,
               const std::string&,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ChangePin,
              (const std::string&,
               const std::string&,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ChangePinAsync,
              (const std::string&,
               const std::string&,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Reset,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ResetAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RequestRoam,
              (const std::string&,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RequestRoamAsync,
              (const std::string&,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetUsbEthernetMacAddressSource,
              (const std::string&,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetUsbEthernetMacAddressSourceAsync,
              (const std::string&,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  void RegisterPropertyChangedSignalHandler(
    const base::RepeatingCallback<void(const std::string&,
                                       const brillo::Any&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterPropertyChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterPropertyChangedSignalHandler,
              (const base::RepeatingCallback<void(const std::string&,
                                                  const brillo::Any&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace flimflam
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {
namespace flimflam {

// Mock object for IPConfigProxyInterface.
class IPConfigProxyMock : public IPConfigProxyInterface {
 public:
  IPConfigProxyMock() = default;
  IPConfigProxyMock(const IPConfigProxyMock&) = delete;
  IPConfigProxyMock& operator=(const IPConfigProxyMock&) = delete;

  MOCK_METHOD(bool,
              GetProperties,
              (brillo::VariantDictionary*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetPropertiesAsync,
              (base::OnceCallback<void(const brillo::VariantDictionary&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetProperty,
              (const std::string&,
               const brillo::Any&,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetPropertyAsync,
              (const std::string&,
               const brillo::Any&,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ClearProperty,
              (const std::string&,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ClearPropertyAsync,
              (const std::string&,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Remove,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RemoveAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  void RegisterPropertyChangedSignalHandler(
    const base::RepeatingCallback<void(const std::string&,
                                       const brillo::Any&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterPropertyChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterPropertyChangedSignalHandler,
              (const base::RepeatingCallback<void(const std::string&,
                                                  const brillo::Any&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace flimflam
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {
namespace flimflam {

// Mock object for ManagerProxyInterface.
class ManagerProxyMock : public ManagerProxyInterface {
 public:
  ManagerProxyMock() = default;
  ManagerProxyMock(const ManagerProxyMock&) = delete;
  ManagerProxyMock& operator=(const ManagerProxyMock&) = delete;

  MOCK_METHOD(bool,
              GetProperties,
              (brillo::VariantDictionary*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetPropertiesAsync,
              (base::OnceCallback<void(const brillo::VariantDictionary&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetProperty,
              (const std::string&,
               const brillo::Any&,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetPropertyAsync,
              (const std::string&,
               const brillo::Any&,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetState,
              (std::string*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetStateAsync,
              (base::OnceCallback<void(const std::string&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              CreateProfile,
              (const std::string&,
               dbus::ObjectPath*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              CreateProfileAsync,
              (const std::string&,
               base::OnceCallback<void(const dbus::ObjectPath&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RemoveProfile,
              (const std::string&,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RemoveProfileAsync,
              (const std::string&,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              PushProfile,
              (const std::string&,
               dbus::ObjectPath*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              PushProfileAsync,
              (const std::string&,
               base::OnceCallback<void(const dbus::ObjectPath&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              InsertUserProfile,
              (const std::string&,
               const std::string&,
               dbus::ObjectPath*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              InsertUserProfileAsync,
              (const std::string&,
               const std::string&,
               base::OnceCallback<void(const dbus::ObjectPath&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              PopProfile,
              (const std::string&,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              PopProfileAsync,
              (const std::string&,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              PopAnyProfile,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              PopAnyProfileAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              PopAllUserProfiles,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              PopAllUserProfilesAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RecheckPortal,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RecheckPortalAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RequestScan,
              (const std::string&,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RequestScanAsync,
              (const std::string&,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              EnableTechnology,
              (const std::string&,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              EnableTechnologyAsync,
              (const std::string&,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetNetworkThrottlingStatus,
              (bool,
               uint32_t,
               uint32_t,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetNetworkThrottlingStatusAsync,
              (bool,
               uint32_t,
               uint32_t,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              DisableTechnology,
              (const std::string&,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              DisableTechnologyAsync,
              (const std::string&,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetService,
              (const brillo::VariantDictionary&,
               dbus::ObjectPath*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetServiceAsync,
              (const brillo::VariantDictionary&,
               base::OnceCallback<void(const dbus::ObjectPath&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ConfigureService,
              (const brillo::VariantDictionary&,
               dbus::ObjectPath*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ConfigureServiceAsync,
              (const brillo::VariantDictionary&,
               base::OnceCallback<void(const dbus::ObjectPath&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ConfigureServiceForProfile,
              (const dbus::ObjectPath&,
               const brillo::VariantDictionary&,
               dbus::ObjectPath*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ConfigureServiceForProfileAsync,
              (const dbus::ObjectPath&,
               const brillo::VariantDictionary&,
               base::OnceCallback<void(const dbus::ObjectPath&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              FindMatchingService,
              (const brillo::VariantDictionary&,
               dbus::ObjectPath*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              FindMatchingServiceAsync,
              (const brillo::VariantDictionary&,
               base::OnceCallback<void(const dbus::ObjectPath&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetDebugLevel,
              (int32_t*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetDebugLevelAsync,
              (base::OnceCallback<void(int32_t)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetDebugLevel,
              (int32_t,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetDebugLevelAsync,
              (int32_t,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetServiceOrder,
              (std::string*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetServiceOrderAsync,
              (base::OnceCallback<void(const std::string&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetServiceOrder,
              (const std::string&,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetServiceOrderAsync,
              (const std::string&,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetDebugTags,
              (std::string*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetDebugTagsAsync,
              (base::OnceCallback<void(const std::string&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetDebugTags,
              (const std::string&,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetDebugTagsAsync,
              (const std::string&,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ListDebugTags,
              (std::string*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ListDebugTagsAsync,
              (base::OnceCallback<void(const std::string&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              PersistDebugConfig,
              (bool,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              PersistDebugConfigAsync,
              (bool,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetNetworksForGeolocation,
              (brillo::VariantDictionary*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetNetworksForGeolocationAsync,
              (base::OnceCallback<void(const brillo::VariantDictionary&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetWiFiNetworksForGeolocation,
              (brillo::VariantDictionary*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetWiFiNetworksForGeolocationAsync,
              (base::OnceCallback<void(const brillo::VariantDictionary&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetCellularNetworksForGeolocation,
              (brillo::VariantDictionary*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetCellularNetworksForGeolocationAsync,
              (base::OnceCallback<void(const brillo::VariantDictionary&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ScanAndConnectToBestServices,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ScanAndConnectToBestServicesAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              CreateConnectivityReport,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              CreateConnectivityReportAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ClaimInterface,
              (const std::string& /*in_claimer_name*/,
               const std::string& /*in_interface_name*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ClaimInterfaceAsync,
              (const std::string& /*in_claimer_name*/,
               const std::string& /*in_interface_name*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ReleaseInterface,
              (const std::string& /*in_claimer_name*/,
               const std::string& /*in_interface_name*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ReleaseInterfaceAsync,
              (const std::string& /*in_claimer_name*/,
               const std::string& /*in_interface_name*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetDNSProxyAddresses,
              (const std::vector<std::string>&,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetDNSProxyAddressesAsync,
              (const std::vector<std::string>&,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ClearDNSProxyAddresses,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ClearDNSProxyAddressesAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetDNSProxyDOHProviders,
              (const brillo::VariantDictionary&,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetDNSProxyDOHProvidersAsync,
              (const brillo::VariantDictionary&,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              AddPasspointCredentials,
              (const dbus::ObjectPath& /*in_profile*/,
               const brillo::VariantDictionary& /*in_properties*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              AddPasspointCredentialsAsync,
              (const dbus::ObjectPath& /*in_profile*/,
               const brillo::VariantDictionary& /*in_properties*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RemovePasspointCredentials,
              (const dbus::ObjectPath& /*in_profile*/,
               const brillo::VariantDictionary& /*in_properties*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RemovePasspointCredentialsAsync,
              (const dbus::ObjectPath& /*in_profile*/,
               const brillo::VariantDictionary& /*in_properties*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetTetheringEnabled,
              (bool,
               std::string*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetTetheringEnabledAsync,
              (bool,
               base::OnceCallback<void(const std::string&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              CheckTetheringReadiness,
              (std::string*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              CheckTetheringReadinessAsync,
              (base::OnceCallback<void(const std::string&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetLOHSEnabled,
              (bool,
               std::string*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetLOHSEnabledAsync,
              (bool,
               base::OnceCallback<void(const std::string&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              CreateP2PGroup,
              (const brillo::VariantDictionary&,
               brillo::VariantDictionary*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              CreateP2PGroupAsync,
              (const brillo::VariantDictionary&,
               base::OnceCallback<void(const brillo::VariantDictionary&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ConnectToP2PGroup,
              (const brillo::VariantDictionary&,
               brillo::VariantDictionary*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ConnectToP2PGroupAsync,
              (const brillo::VariantDictionary&,
               base::OnceCallback<void(const brillo::VariantDictionary&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              DestroyP2PGroup,
              (int32_t,
               brillo::VariantDictionary*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              DestroyP2PGroupAsync,
              (int32_t,
               base::OnceCallback<void(const brillo::VariantDictionary&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              DisconnectFromP2PGroup,
              (int32_t,
               brillo::VariantDictionary*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              DisconnectFromP2PGroupAsync,
              (int32_t,
               base::OnceCallback<void(const brillo::VariantDictionary&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  void RegisterPropertyChangedSignalHandler(
    const base::RepeatingCallback<void(const std::string&,
                                       const brillo::Any&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterPropertyChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterPropertyChangedSignalHandler,
              (const base::RepeatingCallback<void(const std::string&,
                                                  const brillo::Any&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterStateChangedSignalHandler(
    const base::RepeatingCallback<void(const std::string&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterStateChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterStateChangedSignalHandler,
              (const base::RepeatingCallback<void(const std::string&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace flimflam
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {
namespace flimflam {

// Mock object for ProfileProxyInterface.
class ProfileProxyMock : public ProfileProxyInterface {
 public:
  ProfileProxyMock() = default;
  ProfileProxyMock(const ProfileProxyMock&) = delete;
  ProfileProxyMock& operator=(const ProfileProxyMock&) = delete;

  MOCK_METHOD(bool,
              GetProperties,
              (brillo::VariantDictionary*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetPropertiesAsync,
              (base::OnceCallback<void(const brillo::VariantDictionary&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetProperty,
              (const std::string&,
               const brillo::Any&,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetPropertyAsync,
              (const std::string&,
               const brillo::Any&,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetEntry,
              (const std::string&,
               brillo::VariantDictionary*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetEntryAsync,
              (const std::string&,
               base::OnceCallback<void(const brillo::VariantDictionary&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              DeleteEntry,
              (const std::string&,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              DeleteEntryAsync,
              (const std::string&,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  void RegisterPropertyChangedSignalHandler(
    const base::RepeatingCallback<void(const std::string&,
                                       const brillo::Any&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterPropertyChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterPropertyChangedSignalHandler,
              (const base::RepeatingCallback<void(const std::string&,
                                                  const brillo::Any&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace flimflam
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {
namespace flimflam {

// Mock object for ServiceProxyInterface.
class ServiceProxyMock : public ServiceProxyInterface {
 public:
  ServiceProxyMock() = default;
  ServiceProxyMock(const ServiceProxyMock&) = delete;
  ServiceProxyMock& operator=(const ServiceProxyMock&) = delete;

  MOCK_METHOD(bool,
              GetProperties,
              (brillo::VariantDictionary*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetPropertiesAsync,
              (base::OnceCallback<void(const brillo::VariantDictionary&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetProperty,
              (const std::string&,
               const brillo::Any&,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetPropertyAsync,
              (const std::string&,
               const brillo::Any&,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetProperties,
              (const brillo::VariantDictionary&,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetPropertiesAsync,
              (const brillo::VariantDictionary&,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ClearProperty,
              (const std::string&,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ClearPropertyAsync,
              (const std::string&,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ClearProperties,
              (const std::vector<std::string>&,
               std::vector<bool>*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ClearPropertiesAsync,
              (const std::vector<std::string>&,
               base::OnceCallback<void(const std::vector<bool>&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Connect,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ConnectAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Disconnect,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              DisconnectAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Remove,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RemoveAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              CompleteCellularActivation,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              CompleteCellularActivationAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetLoadableProfileEntries,
              ((std::map<dbus::ObjectPath, std::string>*),
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetLoadableProfileEntriesAsync,
              ((base::OnceCallback<void(const std::map<dbus::ObjectPath, std::string>&)>) /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetWiFiPassphrase,
              (std::string*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetWiFiPassphraseAsync,
              (base::OnceCallback<void(const std::string&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetEapPassphrase,
              (std::string*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetEapPassphraseAsync,
              (base::OnceCallback<void(const std::string&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RequestPortalDetection,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RequestPortalDetectionAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RequestTrafficCounters,
              (std::vector<brillo::VariantDictionary>*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RequestTrafficCountersAsync,
              (base::OnceCallback<void(const std::vector<brillo::VariantDictionary>&)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ResetTrafficCounters,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ResetTrafficCountersAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  void RegisterPropertyChangedSignalHandler(
    const base::RepeatingCallback<void(const std::string&,
                                       const brillo::Any&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterPropertyChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterPropertyChangedSignalHandler,
              (const base::RepeatingCallback<void(const std::string&,
                                                  const brillo::Any&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace flimflam
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {
namespace flimflam {

// Mock object for TaskProxyInterface.
class TaskProxyMock : public TaskProxyInterface {
 public:
  TaskProxyMock() = default;
  TaskProxyMock(const TaskProxyMock&) = delete;
  TaskProxyMock& operator=(const TaskProxyMock&) = delete;

  MOCK_METHOD(bool,
              getsec,
              (std::string*,
               std::string*,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              getsecAsync,
              ((base::OnceCallback<void(const std::string&, const std::string&)>) /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              notify,
              (const std::string&,
               (const std::map<std::string, std::string>&),
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              notifyAsync,
              (const std::string&,
               (const std::map<std::string, std::string>&),
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace flimflam
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {
namespace flimflam {

// Mock object for ThirdPartyVpnProxyInterface.
class ThirdPartyVpnProxyMock : public ThirdPartyVpnProxyInterface {
 public:
  ThirdPartyVpnProxyMock() = default;
  ThirdPartyVpnProxyMock(const ThirdPartyVpnProxyMock&) = delete;
  ThirdPartyVpnProxyMock& operator=(const ThirdPartyVpnProxyMock&) = delete;

  MOCK_METHOD(bool,
              SetParameters,
              ((const std::map<std::string, std::string>&) /*in_parameters*/,
               std::string* /*out_warning*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetParametersAsync,
              ((const std::map<std::string, std::string>&) /*in_parameters*/,
               base::OnceCallback<void(const std::string& /*warning*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              UpdateConnectionState,
              (uint32_t /*in_connection_state*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              UpdateConnectionStateAsync,
              (uint32_t /*in_connection_state*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SendPacket,
              (const std::vector<uint8_t>& /*in_ip_packet*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SendPacketAsync,
              (const std::vector<uint8_t>& /*in_ip_packet*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  void RegisterOnPacketReceivedSignalHandler(
    const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterOnPacketReceivedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterOnPacketReceivedSignalHandler,
              (const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterOnPlatformMessageSignalHandler(
    const base::RepeatingCallback<void(uint32_t)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterOnPlatformMessageSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterOnPlatformMessageSignalHandler,
              (const base::RepeatingCallback<void(uint32_t)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace flimflam
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___VAR_CACHE_PORTAGE_CHROMEOS_BASE_SHILL_CLIENT_OUT_DEFAULT_GEN_INCLUDE_SHILL_DBUS_PROXY_MOCKS_H
