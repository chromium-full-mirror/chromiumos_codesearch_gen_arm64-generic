// Automatic generation of D-Bus interface mock proxies for:
//  - org.bluez.Adapter1
//  - org.bluez.AdminPolicyStatus1
//  - org.bluez.Battery1
//  - org.bluez.Device1
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_DIAGNOSTICS_DBUS_BINDINGS_BLUETOOTH_DBUS_PROXY_MOCKS_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_DIAGNOSTICS_DBUS_BINDINGS_BLUETOOTH_DBUS_PROXY_MOCKS_H
#include <string>
#include <vector>

#include <base/functional/callback_forward.h>
#include <base/logging.h>
#include <brillo/any.h>
#include <brillo/errors/error.h>
#include <brillo/variant_dictionary.h>
#include <gmock/gmock.h>

#include "diagnostics/dbus_bindings/bluetooth/dbus-proxies.h"

namespace org {
namespace bluez {

// Mock object for Adapter1ProxyInterface.
class Adapter1ProxyMock : public Adapter1ProxyInterface {
 public:
  Adapter1ProxyMock() = default;
  Adapter1ProxyMock(const Adapter1ProxyMock&) = delete;
  Adapter1ProxyMock& operator=(const Adapter1ProxyMock&) = delete;

  MOCK_METHOD(bool,
              StartDiscovery,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              StartDiscoveryAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              StopDiscovery,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              StopDiscoveryAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RemoveDevice,
              (const dbus::ObjectPath& /*in_device*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RemoveDeviceAsync,
              (const dbus::ObjectPath& /*in_device*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(const std::string&, address, (), (const, override));
  MOCK_METHOD(bool, is_address_valid, (), (const, override));

  MOCK_METHOD(const std::string&, name, (), (const, override));
  MOCK_METHOD(bool, is_name_valid, (), (const, override));

  MOCK_METHOD(bool, powered, (), (const, override));
  MOCK_METHOD(bool, is_powered_valid, (), (const, override));
  MOCK_METHOD(void,
              set_powered,
              (bool, base::OnceCallback<void(bool)>),
              (override));

  MOCK_METHOD(bool, discoverable, (), (const, override));
  MOCK_METHOD(bool, is_discoverable_valid, (), (const, override));

  MOCK_METHOD(bool, discovering, (), (const, override));
  MOCK_METHOD(bool, is_discovering_valid, (), (const, override));

  MOCK_METHOD(const std::vector<std::string>&, uuids, (), (const, override));
  MOCK_METHOD(bool, is_uuids_valid, (), (const, override));

  MOCK_METHOD(const std::string&, modalias, (), (const, override));
  MOCK_METHOD(bool, is_modalias_valid, (), (const, override));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));

  MOCK_METHOD(void,
              SetPropertyChangedCallback,
              ((const base::RepeatingCallback<void(Adapter1ProxyInterface*,
                                                   const std::string&)>&)),
              (override));
};
}  // namespace bluez
}  // namespace org

namespace org {
namespace bluez {

// Mock object for AdminPolicyStatus1ProxyInterface.
class AdminPolicyStatus1ProxyMock : public AdminPolicyStatus1ProxyInterface {
 public:
  AdminPolicyStatus1ProxyMock() = default;
  AdminPolicyStatus1ProxyMock(const AdminPolicyStatus1ProxyMock&) = delete;
  AdminPolicyStatus1ProxyMock& operator=(const AdminPolicyStatus1ProxyMock&) = delete;

  MOCK_METHOD(const std::vector<std::string>&, service_allow_list, (), (const, override));
  MOCK_METHOD(bool, is_service_allow_list_valid, (), (const, override));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));

  MOCK_METHOD(void,
              SetPropertyChangedCallback,
              ((const base::RepeatingCallback<void(AdminPolicyStatus1ProxyInterface*,
                                                   const std::string&)>&)),
              (override));
};
}  // namespace bluez
}  // namespace org

namespace org {
namespace bluez {

// Mock object for Battery1ProxyInterface.
class Battery1ProxyMock : public Battery1ProxyInterface {
 public:
  Battery1ProxyMock() = default;
  Battery1ProxyMock(const Battery1ProxyMock&) = delete;
  Battery1ProxyMock& operator=(const Battery1ProxyMock&) = delete;

  MOCK_METHOD(uint8_t, percentage, (), (const, override));
  MOCK_METHOD(bool, is_percentage_valid, (), (const, override));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));

  MOCK_METHOD(void,
              SetPropertyChangedCallback,
              ((const base::RepeatingCallback<void(Battery1ProxyInterface*,
                                                   const std::string&)>&)),
              (override));
};
}  // namespace bluez
}  // namespace org

namespace org {
namespace bluez {

// Mock object for Device1ProxyInterface.
class Device1ProxyMock : public Device1ProxyInterface {
 public:
  Device1ProxyMock() = default;
  Device1ProxyMock(const Device1ProxyMock&) = delete;
  Device1ProxyMock& operator=(const Device1ProxyMock&) = delete;

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
              Pair,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              PairAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(const std::string&, address, (), (const, override));
  MOCK_METHOD(bool, is_address_valid, (), (const, override));

  MOCK_METHOD(const std::string&, address_type, (), (const, override));
  MOCK_METHOD(bool, is_address_type_valid, (), (const, override));

  MOCK_METHOD(const std::string&, alias, (), (const, override));
  MOCK_METHOD(bool, is_alias_valid, (), (const, override));
  MOCK_METHOD(void,
              set_alias,
              (const std::string&, base::OnceCallback<void(bool)>),
              (override));

  MOCK_METHOD(const std::string&, name, (), (const, override));
  MOCK_METHOD(bool, is_name_valid, (), (const, override));

  MOCK_METHOD(const std::string&, type, (), (const, override));
  MOCK_METHOD(bool, is_type_valid, (), (const, override));

  MOCK_METHOD(uint16_t, appearance, (), (const, override));
  MOCK_METHOD(bool, is_appearance_valid, (), (const, override));

  MOCK_METHOD(const std::string&, modalias, (), (const, override));
  MOCK_METHOD(bool, is_modalias_valid, (), (const, override));

  MOCK_METHOD(int16_t, rssi, (), (const, override));
  MOCK_METHOD(bool, is_rssi_valid, (), (const, override));

  MOCK_METHOD(uint16_t, mtu, (), (const, override));
  MOCK_METHOD(bool, is_mtu_valid, (), (const, override));

  MOCK_METHOD(const std::vector<std::string>&, uuids, (), (const, override));
  MOCK_METHOD(bool, is_uuids_valid, (), (const, override));

  MOCK_METHOD(uint32_t, bluetooth_class, (), (const, override));
  MOCK_METHOD(bool, is_bluetooth_class_valid, (), (const, override));

  MOCK_METHOD(bool, paired, (), (const, override));
  MOCK_METHOD(bool, is_paired_valid, (), (const, override));

  MOCK_METHOD(bool, connected, (), (const, override));
  MOCK_METHOD(bool, is_connected_valid, (), (const, override));

  MOCK_METHOD(const dbus::ObjectPath&, adapter, (), (const, override));
  MOCK_METHOD(bool, is_adapter_valid, (), (const, override));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));

  MOCK_METHOD(void,
              SetPropertyChangedCallback,
              ((const base::RepeatingCallback<void(Device1ProxyInterface*,
                                                   const std::string&)>&)),
              (override));
};
}  // namespace bluez
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_DIAGNOSTICS_DBUS_BINDINGS_BLUETOOTH_DBUS_PROXY_MOCKS_H
