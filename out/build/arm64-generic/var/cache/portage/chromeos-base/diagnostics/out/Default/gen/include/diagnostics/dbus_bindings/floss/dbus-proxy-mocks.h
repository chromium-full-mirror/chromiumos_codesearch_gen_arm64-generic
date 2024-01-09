// Automatic generation of D-Bus interface mock proxies for:
//  - org.chromium.bluetooth.BatteryManager
//  - org.chromium.bluetooth.Bluetooth
//  - org.chromium.bluetooth.BluetoothAdmin
//  - org.chromium.bluetooth.BluetoothGatt
//  - org.chromium.bluetooth.BluetoothQA
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_DIAGNOSTICS_DBUS_BINDINGS_FLOSS_DBUS_PROXY_MOCKS_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_DIAGNOSTICS_DBUS_BINDINGS_FLOSS_DBUS_PROXY_MOCKS_H
#include <string>
#include <vector>

#include <base/functional/callback_forward.h>
#include <base/logging.h>
#include <brillo/any.h>
#include <brillo/errors/error.h>
#include <brillo/variant_dictionary.h>
#include <gmock/gmock.h>

#include "diagnostics/dbus_bindings/floss/dbus-proxies.h"

namespace org {
namespace chromium {
namespace bluetooth {

// Mock object for BatteryManagerProxyInterface.
class BatteryManagerProxyMock : public BatteryManagerProxyInterface {
 public:
  BatteryManagerProxyMock() = default;
  BatteryManagerProxyMock(const BatteryManagerProxyMock&) = delete;
  BatteryManagerProxyMock& operator=(const BatteryManagerProxyMock&) = delete;

  MOCK_METHOD(bool,
              GetBatteryInformation,
              (const std::string& /*in_address*/,
               brillo::VariantDictionary* /*out_info*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetBatteryInformationAsync,
              (const std::string& /*in_address*/,
               base::OnceCallback<void(const brillo::VariantDictionary& /*info*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace bluetooth
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {
namespace bluetooth {

// Mock object for BluetoothProxyInterface.
class BluetoothProxyMock : public BluetoothProxyInterface {
 public:
  BluetoothProxyMock() = default;
  BluetoothProxyMock(const BluetoothProxyMock&) = delete;
  BluetoothProxyMock& operator=(const BluetoothProxyMock&) = delete;

  MOCK_METHOD(bool,
              GetAddress,
              (std::string* /*out_address*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetAddressAsync,
              (base::OnceCallback<void(const std::string& /*address*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetName,
              (std::string* /*out_name*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetNameAsync,
              (base::OnceCallback<void(const std::string& /*name*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetDiscoverable,
              (bool* /*out_discoverable*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetDiscoverableAsync,
              (base::OnceCallback<void(bool /*discoverable*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              IsDiscovering,
              (bool* /*out_discovering*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              IsDiscoveringAsync,
              (base::OnceCallback<void(bool /*discovering*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetUuids,
              (std::vector<std::vector<uint8_t>>* /*out_uuids*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetUuidsAsync,
              (base::OnceCallback<void(const std::vector<std::vector<uint8_t>>& /*uuids*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetRemoteType,
              (const brillo::VariantDictionary& /*in_device*/,
               uint32_t* /*out_type*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetRemoteTypeAsync,
              (const brillo::VariantDictionary& /*in_device*/,
               base::OnceCallback<void(uint32_t /*type*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetRemoteAppearance,
              (const brillo::VariantDictionary& /*in_device*/,
               uint16_t* /*out_appearance*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetRemoteAppearanceAsync,
              (const brillo::VariantDictionary& /*in_device*/,
               base::OnceCallback<void(uint16_t /*appearance*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetRemoteVendorProductInfo,
              (const brillo::VariantDictionary& /*in_device*/,
               brillo::VariantDictionary* /*out_info*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetRemoteVendorProductInfoAsync,
              (const brillo::VariantDictionary& /*in_device*/,
               base::OnceCallback<void(const brillo::VariantDictionary& /*info*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetRemoteRSSI,
              (const brillo::VariantDictionary& /*in_device*/,
               int16_t* /*out_rssi*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetRemoteRSSIAsync,
              (const brillo::VariantDictionary& /*in_device*/,
               base::OnceCallback<void(int16_t /*rssi*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetRemoteUuids,
              (const brillo::VariantDictionary& /*in_device*/,
               std::vector<std::vector<uint8_t>>* /*out_uuids*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetRemoteUuidsAsync,
              (const brillo::VariantDictionary& /*in_device*/,
               base::OnceCallback<void(const std::vector<std::vector<uint8_t>>& /*uuids*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetRemoteClass,
              (const brillo::VariantDictionary& /*in_device*/,
               uint32_t* /*out_bluetooth_class*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetRemoteClassAsync,
              (const brillo::VariantDictionary& /*in_device*/,
               base::OnceCallback<void(uint32_t /*bluetooth_class*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetRemoteAddressType,
              (const brillo::VariantDictionary& /*in_device*/,
               uint32_t* /*out_address_type*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetRemoteAddressTypeAsync,
              (const brillo::VariantDictionary& /*in_device*/,
               base::OnceCallback<void(uint32_t /*address_type*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetRemoteAlias,
              (const brillo::VariantDictionary& /*in_device*/,
               std::string* /*out_alias*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetRemoteAliasAsync,
              (const brillo::VariantDictionary& /*in_device*/,
               base::OnceCallback<void(const std::string& /*alias*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetRemoteAlias,
              (const brillo::VariantDictionary& /*in_device*/,
               const std::string& /*in_alias*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetRemoteAliasAsync,
              (const brillo::VariantDictionary& /*in_device*/,
               const std::string& /*in_alias*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetConnectionState,
              (const brillo::VariantDictionary& /*in_device*/,
               uint32_t* /*out_state*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetConnectionStateAsync,
              (const brillo::VariantDictionary& /*in_device*/,
               base::OnceCallback<void(uint32_t /*state*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              StartDiscovery,
              (bool* /*out_is_success*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              StartDiscoveryAsync,
              (base::OnceCallback<void(bool /*is_success*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              CancelDiscovery,
              (bool* /*out_is_success*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              CancelDiscoveryAsync,
              (base::OnceCallback<void(bool /*is_success*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetConnectedDevices,
              (std::vector<brillo::VariantDictionary>* /*out_devices*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetConnectedDevicesAsync,
              (base::OnceCallback<void(const std::vector<brillo::VariantDictionary>& /*devices*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetBondedDevices,
              (std::vector<brillo::VariantDictionary>* /*out_devices*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetBondedDevicesAsync,
              (base::OnceCallback<void(const std::vector<brillo::VariantDictionary>& /*devices*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              CreateBond,
              (const brillo::VariantDictionary& /*in_device*/,
               uint32_t /*in_transport*/,
               bool* /*out_is_success*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              CreateBondAsync,
              (const brillo::VariantDictionary& /*in_device*/,
               uint32_t /*in_transport*/,
               base::OnceCallback<void(bool /*is_success*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RemoveBond,
              (const brillo::VariantDictionary& /*in_device*/,
               bool* /*out_is_success*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RemoveBondAsync,
              (const brillo::VariantDictionary& /*in_device*/,
               base::OnceCallback<void(bool /*is_success*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetPairingConfirmation,
              (const brillo::VariantDictionary& /*in_device*/,
               bool /*in_accept*/,
               bool* /*out_is_success*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetPairingConfirmationAsync,
              (const brillo::VariantDictionary& /*in_device*/,
               bool /*in_accept*/,
               base::OnceCallback<void(bool /*is_success*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RegisterCallback,
              (const dbus::ObjectPath& /*in_callback_path*/,
               uint32_t* /*out_callback_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RegisterCallbackAsync,
              (const dbus::ObjectPath& /*in_callback_path*/,
               base::OnceCallback<void(uint32_t /*callback_id*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RegisterConnectionCallback,
              (const dbus::ObjectPath& /*in_callback_path*/,
               uint32_t* /*out_callback_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RegisterConnectionCallbackAsync,
              (const dbus::ObjectPath& /*in_callback_path*/,
               base::OnceCallback<void(uint32_t /*callback_id*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace bluetooth
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {
namespace bluetooth {

// Mock object for BluetoothAdminProxyInterface.
class BluetoothAdminProxyMock : public BluetoothAdminProxyInterface {
 public:
  BluetoothAdminProxyMock() = default;
  BluetoothAdminProxyMock(const BluetoothAdminProxyMock&) = delete;
  BluetoothAdminProxyMock& operator=(const BluetoothAdminProxyMock&) = delete;

  MOCK_METHOD(bool,
              GetAllowedServices,
              (std::vector<std::vector<uint8_t>>* /*out_services*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetAllowedServicesAsync,
              (base::OnceCallback<void(const std::vector<std::vector<uint8_t>>& /*services*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace bluetooth
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {
namespace bluetooth {

// Mock object for BluetoothGattProxyInterface.
class BluetoothGattProxyMock : public BluetoothGattProxyInterface {
 public:
  BluetoothGattProxyMock() = default;
  BluetoothGattProxyMock(const BluetoothGattProxyMock&) = delete;
  BluetoothGattProxyMock& operator=(const BluetoothGattProxyMock&) = delete;

  MOCK_METHOD(bool,
              RegisterScannerCallback,
              (const dbus::ObjectPath& /*in_callback_path*/,
               uint32_t* /*out_callback_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RegisterScannerCallbackAsync,
              (const dbus::ObjectPath& /*in_callback_path*/,
               base::OnceCallback<void(uint32_t /*callback_id*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace bluetooth
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {
namespace bluetooth {

// Mock object for BluetoothQAProxyInterface.
class BluetoothQAProxyMock : public BluetoothQAProxyInterface {
 public:
  BluetoothQAProxyMock() = default;
  BluetoothQAProxyMock(const BluetoothQAProxyMock&) = delete;
  BluetoothQAProxyMock& operator=(const BluetoothQAProxyMock&) = delete;

  MOCK_METHOD(bool,
              GetModalias,
              (std::string* /*out_modalias*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetModaliasAsync,
              (base::OnceCallback<void(const std::string& /*modalias*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace bluetooth
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_DIAGNOSTICS_DBUS_BINDINGS_FLOSS_DBUS_PROXY_MOCKS_H
