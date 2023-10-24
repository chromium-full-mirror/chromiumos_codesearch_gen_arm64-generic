// Automatic generation of D-Bus interface mock proxies for:
//  - org.chromium.bluetooth.Manager
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_DIAGNOSTICS_DBUS_BINDINGS_BLUETOOTH_MANAGER_DBUS_PROXY_MOCKS_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_DIAGNOSTICS_DBUS_BINDINGS_BLUETOOTH_MANAGER_DBUS_PROXY_MOCKS_H
#include <string>
#include <vector>

#include <base/functional/callback_forward.h>
#include <base/logging.h>
#include <brillo/any.h>
#include <brillo/errors/error.h>
#include <brillo/variant_dictionary.h>
#include <gmock/gmock.h>

#include "diagnostics/dbus_bindings/bluetooth_manager/dbus-proxies.h"

namespace org {
namespace chromium {
namespace bluetooth {

// Mock object for ManagerProxyInterface.
class ManagerProxyMock : public ManagerProxyInterface {
 public:
  ManagerProxyMock() = default;
  ManagerProxyMock(const ManagerProxyMock&) = delete;
  ManagerProxyMock& operator=(const ManagerProxyMock&) = delete;

  MOCK_METHOD(bool,
              GetFlossEnabled,
              (bool* /*out_enabled*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetFlossEnabledAsync,
              (base::OnceCallback<void(bool /*enabled*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetDefaultAdapter,
              (int32_t* /*out_hci_interface*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetDefaultAdapterAsync,
              (base::OnceCallback<void(int32_t /*hci_interface*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetAvailableAdapters,
              (std::vector<brillo::VariantDictionary>* /*out_adapters*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetAvailableAdaptersAsync,
              (base::OnceCallback<void(const std::vector<brillo::VariantDictionary>& /*adapters*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetAdapterEnabled,
              (int32_t /*in_hci_interface*/,
               bool* /*out_enabled*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetAdapterEnabledAsync,
              (int32_t /*in_hci_interface*/,
               base::OnceCallback<void(bool /*enabled*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Start,
              (int32_t /*in_hci_interface*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              StartAsync,
              (int32_t /*in_hci_interface*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Stop,
              (int32_t /*in_hci_interface*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              StopAsync,
              (int32_t /*in_hci_interface*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RegisterCallback,
              (const dbus::ObjectPath& /*in_callback_path*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RegisterCallbackAsync,
              (const dbus::ObjectPath& /*in_callback_path*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace bluetooth
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_DIAGNOSTICS_DBUS_BINDINGS_BLUETOOTH_MANAGER_DBUS_PROXY_MOCKS_H
