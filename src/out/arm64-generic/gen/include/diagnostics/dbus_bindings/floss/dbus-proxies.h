// Automatic generation of D-Bus interfaces:
//  - org.chromium.bluetooth.BatteryManager
//  - org.chromium.bluetooth.Bluetooth
//  - org.chromium.bluetooth.BluetoothAdmin
//  - org.chromium.bluetooth.BluetoothGatt
//  - org.chromium.bluetooth.BluetoothQA
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_DIAGNOSTICS_DBUS_BINDINGS_FLOSS_DBUS_PROXIES_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_DIAGNOSTICS_DBUS_BINDINGS_FLOSS_DBUS_PROXIES_H
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
namespace bluetooth {
class ObjectManagerProxy;
}  // namespace bluetooth
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {
namespace bluetooth {

// Abstract interface proxy for org::chromium::bluetooth::BatteryManager.
class BatteryManagerProxyInterface {
 public:
  virtual ~BatteryManagerProxyInterface() = default;

  virtual bool GetBatteryInformation(
      const std::string& in_address,
      brillo::VariantDictionary* out_info,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetBatteryInformationAsync(
      const std::string& in_address,
      base::OnceCallback<void(const brillo::VariantDictionary& /*info*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual const dbus::ObjectPath& GetObjectPath() const = 0;
  virtual dbus::ObjectProxy* GetObjectProxy() const = 0;
};

}  // namespace bluetooth
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {
namespace bluetooth {

// Interface proxy for org::chromium::bluetooth::BatteryManager.
class BatteryManagerProxy final : public BatteryManagerProxyInterface {
 public:
  class PropertySet : public dbus::PropertySet {
   public:
    PropertySet(dbus::ObjectProxy* object_proxy,
                const PropertyChangedCallback& callback)
        : dbus::PropertySet{object_proxy,
                            "org.chromium.bluetooth.BatteryManager",
                            callback} {
    }
    PropertySet(const PropertySet&) = delete;
    PropertySet& operator=(const PropertySet&) = delete;
  };

  BatteryManagerProxy(
      const scoped_refptr<dbus::Bus>& bus,
      const dbus::ObjectPath& object_path) :
          bus_{bus},
          object_path_{object_path},
          dbus_object_proxy_{
              bus_->GetObjectProxy(service_name_, object_path_)} {
  }

  BatteryManagerProxy(const BatteryManagerProxy&) = delete;
  BatteryManagerProxy& operator=(const BatteryManagerProxy&) = delete;

  ~BatteryManagerProxy() override {
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

  bool GetBatteryInformation(
      const std::string& in_address,
      brillo::VariantDictionary* out_info,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.BatteryManager",
        "GetBatteryInformation",
        error,
        in_address);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_info);
  }

  void GetBatteryInformationAsync(
      const std::string& in_address,
      base::OnceCallback<void(const brillo::VariantDictionary& /*info*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.BatteryManager",
        "GetBatteryInformation",
        std::move(success_callback),
        std::move(error_callback),
        in_address);
  }

 private:
  scoped_refptr<dbus::Bus> bus_;
  const std::string service_name_{"org.chromium.bluetooth"};
  dbus::ObjectPath object_path_;
  dbus::ObjectProxy* dbus_object_proxy_;

};

}  // namespace bluetooth
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {
namespace bluetooth {

// Abstract interface proxy for org::chromium::bluetooth::Bluetooth.
class BluetoothProxyInterface {
 public:
  virtual ~BluetoothProxyInterface() = default;

  virtual bool GetAddress(
      std::string* out_address,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetAddressAsync(
      base::OnceCallback<void(const std::string& /*address*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool GetName(
      std::string* out_name,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetNameAsync(
      base::OnceCallback<void(const std::string& /*name*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool GetDiscoverable(
      bool* out_discoverable,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetDiscoverableAsync(
      base::OnceCallback<void(bool /*discoverable*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool IsDiscovering(
      bool* out_discovering,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void IsDiscoveringAsync(
      base::OnceCallback<void(bool /*discovering*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool GetUuids(
      std::vector<std::vector<uint8_t>>* out_uuids,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetUuidsAsync(
      base::OnceCallback<void(const std::vector<std::vector<uint8_t>>& /*uuids*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool GetRemoteType(
      const brillo::VariantDictionary& in_device,
      uint32_t* out_type,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetRemoteTypeAsync(
      const brillo::VariantDictionary& in_device,
      base::OnceCallback<void(uint32_t /*type*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool GetRemoteAppearance(
      const brillo::VariantDictionary& in_device,
      uint16_t* out_appearance,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetRemoteAppearanceAsync(
      const brillo::VariantDictionary& in_device,
      base::OnceCallback<void(uint16_t /*appearance*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool GetRemoteVendorProductInfo(
      const brillo::VariantDictionary& in_device,
      brillo::VariantDictionary* out_info,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetRemoteVendorProductInfoAsync(
      const brillo::VariantDictionary& in_device,
      base::OnceCallback<void(const brillo::VariantDictionary& /*info*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool GetRemoteRSSI(
      const brillo::VariantDictionary& in_device,
      int16_t* out_rssi,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetRemoteRSSIAsync(
      const brillo::VariantDictionary& in_device,
      base::OnceCallback<void(int16_t /*rssi*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool GetRemoteUuids(
      const brillo::VariantDictionary& in_device,
      std::vector<std::vector<uint8_t>>* out_uuids,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetRemoteUuidsAsync(
      const brillo::VariantDictionary& in_device,
      base::OnceCallback<void(const std::vector<std::vector<uint8_t>>& /*uuids*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool GetRemoteClass(
      const brillo::VariantDictionary& in_device,
      uint32_t* out_bluetooth_class,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetRemoteClassAsync(
      const brillo::VariantDictionary& in_device,
      base::OnceCallback<void(uint32_t /*bluetooth_class*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool GetRemoteAddressType(
      const brillo::VariantDictionary& in_device,
      uint32_t* out_address_type,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetRemoteAddressTypeAsync(
      const brillo::VariantDictionary& in_device,
      base::OnceCallback<void(uint32_t /*address_type*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool GetRemoteAlias(
      const brillo::VariantDictionary& in_device,
      std::string* out_alias,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetRemoteAliasAsync(
      const brillo::VariantDictionary& in_device,
      base::OnceCallback<void(const std::string& /*alias*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool SetRemoteAlias(
      const brillo::VariantDictionary& in_device,
      const std::string& in_alias,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void SetRemoteAliasAsync(
      const brillo::VariantDictionary& in_device,
      const std::string& in_alias,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool GetConnectionState(
      const brillo::VariantDictionary& in_device,
      uint32_t* out_state,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetConnectionStateAsync(
      const brillo::VariantDictionary& in_device,
      base::OnceCallback<void(uint32_t /*state*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool StartDiscovery(
      bool* out_is_success,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void StartDiscoveryAsync(
      base::OnceCallback<void(bool /*is_success*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool CancelDiscovery(
      bool* out_is_success,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void CancelDiscoveryAsync(
      base::OnceCallback<void(bool /*is_success*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool GetConnectedDevices(
      std::vector<brillo::VariantDictionary>* out_devices,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetConnectedDevicesAsync(
      base::OnceCallback<void(const std::vector<brillo::VariantDictionary>& /*devices*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool GetBondedDevices(
      std::vector<brillo::VariantDictionary>* out_devices,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetBondedDevicesAsync(
      base::OnceCallback<void(const std::vector<brillo::VariantDictionary>& /*devices*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool CreateBond(
      const brillo::VariantDictionary& in_device,
      uint32_t in_transport,
      bool* out_is_success,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void CreateBondAsync(
      const brillo::VariantDictionary& in_device,
      uint32_t in_transport,
      base::OnceCallback<void(bool /*is_success*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool RemoveBond(
      const brillo::VariantDictionary& in_device,
      bool* out_is_success,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void RemoveBondAsync(
      const brillo::VariantDictionary& in_device,
      base::OnceCallback<void(bool /*is_success*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool SetPairingConfirmation(
      const brillo::VariantDictionary& in_device,
      bool in_accept,
      bool* out_is_success,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void SetPairingConfirmationAsync(
      const brillo::VariantDictionary& in_device,
      bool in_accept,
      base::OnceCallback<void(bool /*is_success*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool RegisterCallback(
      const dbus::ObjectPath& in_callback_path,
      uint32_t* out_callback_id,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void RegisterCallbackAsync(
      const dbus::ObjectPath& in_callback_path,
      base::OnceCallback<void(uint32_t /*callback_id*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool RegisterConnectionCallback(
      const dbus::ObjectPath& in_callback_path,
      uint32_t* out_callback_id,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void RegisterConnectionCallbackAsync(
      const dbus::ObjectPath& in_callback_path,
      base::OnceCallback<void(uint32_t /*callback_id*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual const dbus::ObjectPath& GetObjectPath() const = 0;
  virtual dbus::ObjectProxy* GetObjectProxy() const = 0;
};

}  // namespace bluetooth
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {
namespace bluetooth {

// Interface proxy for org::chromium::bluetooth::Bluetooth.
class BluetoothProxy final : public BluetoothProxyInterface {
 public:
  class PropertySet : public dbus::PropertySet {
   public:
    PropertySet(dbus::ObjectProxy* object_proxy,
                const PropertyChangedCallback& callback)
        : dbus::PropertySet{object_proxy,
                            "org.chromium.bluetooth.Bluetooth",
                            callback} {
    }
    PropertySet(const PropertySet&) = delete;
    PropertySet& operator=(const PropertySet&) = delete;
  };

  BluetoothProxy(
      const scoped_refptr<dbus::Bus>& bus,
      const dbus::ObjectPath& object_path) :
          bus_{bus},
          object_path_{object_path},
          dbus_object_proxy_{
              bus_->GetObjectProxy(service_name_, object_path_)} {
  }

  BluetoothProxy(const BluetoothProxy&) = delete;
  BluetoothProxy& operator=(const BluetoothProxy&) = delete;

  ~BluetoothProxy() override {
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

  bool GetAddress(
      std::string* out_address,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetAddress",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_address);
  }

  void GetAddressAsync(
      base::OnceCallback<void(const std::string& /*address*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetAddress",
        std::move(success_callback),
        std::move(error_callback));
  }

  bool GetName(
      std::string* out_name,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetName",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_name);
  }

  void GetNameAsync(
      base::OnceCallback<void(const std::string& /*name*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetName",
        std::move(success_callback),
        std::move(error_callback));
  }

  bool GetDiscoverable(
      bool* out_discoverable,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetDiscoverable",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_discoverable);
  }

  void GetDiscoverableAsync(
      base::OnceCallback<void(bool /*discoverable*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetDiscoverable",
        std::move(success_callback),
        std::move(error_callback));
  }

  bool IsDiscovering(
      bool* out_discovering,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "IsDiscovering",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_discovering);
  }

  void IsDiscoveringAsync(
      base::OnceCallback<void(bool /*discovering*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "IsDiscovering",
        std::move(success_callback),
        std::move(error_callback));
  }

  bool GetUuids(
      std::vector<std::vector<uint8_t>>* out_uuids,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetUuids",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_uuids);
  }

  void GetUuidsAsync(
      base::OnceCallback<void(const std::vector<std::vector<uint8_t>>& /*uuids*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetUuids",
        std::move(success_callback),
        std::move(error_callback));
  }

  bool GetRemoteType(
      const brillo::VariantDictionary& in_device,
      uint32_t* out_type,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetRemoteType",
        error,
        in_device);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_type);
  }

  void GetRemoteTypeAsync(
      const brillo::VariantDictionary& in_device,
      base::OnceCallback<void(uint32_t /*type*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetRemoteType",
        std::move(success_callback),
        std::move(error_callback),
        in_device);
  }

  bool GetRemoteAppearance(
      const brillo::VariantDictionary& in_device,
      uint16_t* out_appearance,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetRemoteAppearance",
        error,
        in_device);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_appearance);
  }

  void GetRemoteAppearanceAsync(
      const brillo::VariantDictionary& in_device,
      base::OnceCallback<void(uint16_t /*appearance*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetRemoteAppearance",
        std::move(success_callback),
        std::move(error_callback),
        in_device);
  }

  bool GetRemoteVendorProductInfo(
      const brillo::VariantDictionary& in_device,
      brillo::VariantDictionary* out_info,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetRemoteVendorProductInfo",
        error,
        in_device);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_info);
  }

  void GetRemoteVendorProductInfoAsync(
      const brillo::VariantDictionary& in_device,
      base::OnceCallback<void(const brillo::VariantDictionary& /*info*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetRemoteVendorProductInfo",
        std::move(success_callback),
        std::move(error_callback),
        in_device);
  }

  bool GetRemoteRSSI(
      const brillo::VariantDictionary& in_device,
      int16_t* out_rssi,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetRemoteRSSI",
        error,
        in_device);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_rssi);
  }

  void GetRemoteRSSIAsync(
      const brillo::VariantDictionary& in_device,
      base::OnceCallback<void(int16_t /*rssi*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetRemoteRSSI",
        std::move(success_callback),
        std::move(error_callback),
        in_device);
  }

  bool GetRemoteUuids(
      const brillo::VariantDictionary& in_device,
      std::vector<std::vector<uint8_t>>* out_uuids,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetRemoteUuids",
        error,
        in_device);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_uuids);
  }

  void GetRemoteUuidsAsync(
      const brillo::VariantDictionary& in_device,
      base::OnceCallback<void(const std::vector<std::vector<uint8_t>>& /*uuids*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetRemoteUuids",
        std::move(success_callback),
        std::move(error_callback),
        in_device);
  }

  bool GetRemoteClass(
      const brillo::VariantDictionary& in_device,
      uint32_t* out_bluetooth_class,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetRemoteClass",
        error,
        in_device);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_bluetooth_class);
  }

  void GetRemoteClassAsync(
      const brillo::VariantDictionary& in_device,
      base::OnceCallback<void(uint32_t /*bluetooth_class*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetRemoteClass",
        std::move(success_callback),
        std::move(error_callback),
        in_device);
  }

  bool GetRemoteAddressType(
      const brillo::VariantDictionary& in_device,
      uint32_t* out_address_type,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetRemoteAddressType",
        error,
        in_device);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_address_type);
  }

  void GetRemoteAddressTypeAsync(
      const brillo::VariantDictionary& in_device,
      base::OnceCallback<void(uint32_t /*address_type*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetRemoteAddressType",
        std::move(success_callback),
        std::move(error_callback),
        in_device);
  }

  bool GetRemoteAlias(
      const brillo::VariantDictionary& in_device,
      std::string* out_alias,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetRemoteAlias",
        error,
        in_device);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_alias);
  }

  void GetRemoteAliasAsync(
      const brillo::VariantDictionary& in_device,
      base::OnceCallback<void(const std::string& /*alias*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetRemoteAlias",
        std::move(success_callback),
        std::move(error_callback),
        in_device);
  }

  bool SetRemoteAlias(
      const brillo::VariantDictionary& in_device,
      const std::string& in_alias,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "SetRemoteAlias",
        error,
        in_device,
        in_alias);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error);
  }

  void SetRemoteAliasAsync(
      const brillo::VariantDictionary& in_device,
      const std::string& in_alias,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "SetRemoteAlias",
        std::move(success_callback),
        std::move(error_callback),
        in_device,
        in_alias);
  }

  bool GetConnectionState(
      const brillo::VariantDictionary& in_device,
      uint32_t* out_state,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetConnectionState",
        error,
        in_device);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_state);
  }

  void GetConnectionStateAsync(
      const brillo::VariantDictionary& in_device,
      base::OnceCallback<void(uint32_t /*state*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetConnectionState",
        std::move(success_callback),
        std::move(error_callback),
        in_device);
  }

  bool StartDiscovery(
      bool* out_is_success,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "StartDiscovery",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_is_success);
  }

  void StartDiscoveryAsync(
      base::OnceCallback<void(bool /*is_success*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "StartDiscovery",
        std::move(success_callback),
        std::move(error_callback));
  }

  bool CancelDiscovery(
      bool* out_is_success,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "CancelDiscovery",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_is_success);
  }

  void CancelDiscoveryAsync(
      base::OnceCallback<void(bool /*is_success*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "CancelDiscovery",
        std::move(success_callback),
        std::move(error_callback));
  }

  bool GetConnectedDevices(
      std::vector<brillo::VariantDictionary>* out_devices,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetConnectedDevices",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_devices);
  }

  void GetConnectedDevicesAsync(
      base::OnceCallback<void(const std::vector<brillo::VariantDictionary>& /*devices*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetConnectedDevices",
        std::move(success_callback),
        std::move(error_callback));
  }

  bool GetBondedDevices(
      std::vector<brillo::VariantDictionary>* out_devices,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetBondedDevices",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_devices);
  }

  void GetBondedDevicesAsync(
      base::OnceCallback<void(const std::vector<brillo::VariantDictionary>& /*devices*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetBondedDevices",
        std::move(success_callback),
        std::move(error_callback));
  }

  bool CreateBond(
      const brillo::VariantDictionary& in_device,
      uint32_t in_transport,
      bool* out_is_success,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "CreateBond",
        error,
        in_device,
        in_transport);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_is_success);
  }

  void CreateBondAsync(
      const brillo::VariantDictionary& in_device,
      uint32_t in_transport,
      base::OnceCallback<void(bool /*is_success*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "CreateBond",
        std::move(success_callback),
        std::move(error_callback),
        in_device,
        in_transport);
  }

  bool RemoveBond(
      const brillo::VariantDictionary& in_device,
      bool* out_is_success,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "RemoveBond",
        error,
        in_device);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_is_success);
  }

  void RemoveBondAsync(
      const brillo::VariantDictionary& in_device,
      base::OnceCallback<void(bool /*is_success*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "RemoveBond",
        std::move(success_callback),
        std::move(error_callback),
        in_device);
  }

  bool SetPairingConfirmation(
      const brillo::VariantDictionary& in_device,
      bool in_accept,
      bool* out_is_success,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "SetPairingConfirmation",
        error,
        in_device,
        in_accept);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_is_success);
  }

  void SetPairingConfirmationAsync(
      const brillo::VariantDictionary& in_device,
      bool in_accept,
      base::OnceCallback<void(bool /*is_success*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "SetPairingConfirmation",
        std::move(success_callback),
        std::move(error_callback),
        in_device,
        in_accept);
  }

  bool RegisterCallback(
      const dbus::ObjectPath& in_callback_path,
      uint32_t* out_callback_id,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "RegisterCallback",
        error,
        in_callback_path);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_callback_id);
  }

  void RegisterCallbackAsync(
      const dbus::ObjectPath& in_callback_path,
      base::OnceCallback<void(uint32_t /*callback_id*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "RegisterCallback",
        std::move(success_callback),
        std::move(error_callback),
        in_callback_path);
  }

  bool RegisterConnectionCallback(
      const dbus::ObjectPath& in_callback_path,
      uint32_t* out_callback_id,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "RegisterConnectionCallback",
        error,
        in_callback_path);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_callback_id);
  }

  void RegisterConnectionCallbackAsync(
      const dbus::ObjectPath& in_callback_path,
      base::OnceCallback<void(uint32_t /*callback_id*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "RegisterConnectionCallback",
        std::move(success_callback),
        std::move(error_callback),
        in_callback_path);
  }

 private:
  scoped_refptr<dbus::Bus> bus_;
  const std::string service_name_{"org.chromium.bluetooth"};
  dbus::ObjectPath object_path_;
  dbus::ObjectProxy* dbus_object_proxy_;

};

}  // namespace bluetooth
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {
namespace bluetooth {

// Abstract interface proxy for org::chromium::bluetooth::BluetoothAdmin.
class BluetoothAdminProxyInterface {
 public:
  virtual ~BluetoothAdminProxyInterface() = default;

  virtual bool GetAllowedServices(
      std::vector<std::vector<uint8_t>>* out_services,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetAllowedServicesAsync(
      base::OnceCallback<void(const std::vector<std::vector<uint8_t>>& /*services*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual const dbus::ObjectPath& GetObjectPath() const = 0;
  virtual dbus::ObjectProxy* GetObjectProxy() const = 0;
};

}  // namespace bluetooth
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {
namespace bluetooth {

// Interface proxy for org::chromium::bluetooth::BluetoothAdmin.
class BluetoothAdminProxy final : public BluetoothAdminProxyInterface {
 public:
  class PropertySet : public dbus::PropertySet {
   public:
    PropertySet(dbus::ObjectProxy* object_proxy,
                const PropertyChangedCallback& callback)
        : dbus::PropertySet{object_proxy,
                            "org.chromium.bluetooth.BluetoothAdmin",
                            callback} {
    }
    PropertySet(const PropertySet&) = delete;
    PropertySet& operator=(const PropertySet&) = delete;
  };

  BluetoothAdminProxy(
      const scoped_refptr<dbus::Bus>& bus,
      const dbus::ObjectPath& object_path) :
          bus_{bus},
          object_path_{object_path},
          dbus_object_proxy_{
              bus_->GetObjectProxy(service_name_, object_path_)} {
  }

  BluetoothAdminProxy(const BluetoothAdminProxy&) = delete;
  BluetoothAdminProxy& operator=(const BluetoothAdminProxy&) = delete;

  ~BluetoothAdminProxy() override {
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

  bool GetAllowedServices(
      std::vector<std::vector<uint8_t>>* out_services,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.BluetoothAdmin",
        "GetAllowedServices",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_services);
  }

  void GetAllowedServicesAsync(
      base::OnceCallback<void(const std::vector<std::vector<uint8_t>>& /*services*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.BluetoothAdmin",
        "GetAllowedServices",
        std::move(success_callback),
        std::move(error_callback));
  }

 private:
  scoped_refptr<dbus::Bus> bus_;
  const std::string service_name_{"org.chromium.bluetooth"};
  dbus::ObjectPath object_path_;
  dbus::ObjectProxy* dbus_object_proxy_;

};

}  // namespace bluetooth
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {
namespace bluetooth {

// Abstract interface proxy for org::chromium::bluetooth::BluetoothGatt.
// The Generic Attributes (GATT) define a hierarchical data structure that
// is exposed to connected Bluetooth Low Energy (LE) devices.
class BluetoothGattProxyInterface {
 public:
  virtual ~BluetoothGattProxyInterface() = default;

  virtual bool RegisterScannerCallback(
      const dbus::ObjectPath& in_callback_path,
      uint32_t* out_callback_id,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void RegisterScannerCallbackAsync(
      const dbus::ObjectPath& in_callback_path,
      base::OnceCallback<void(uint32_t /*callback_id*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual const dbus::ObjectPath& GetObjectPath() const = 0;
  virtual dbus::ObjectProxy* GetObjectProxy() const = 0;
};

}  // namespace bluetooth
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {
namespace bluetooth {

// Interface proxy for org::chromium::bluetooth::BluetoothGatt.
// The Generic Attributes (GATT) define a hierarchical data structure that
// is exposed to connected Bluetooth Low Energy (LE) devices.
class BluetoothGattProxy final : public BluetoothGattProxyInterface {
 public:
  class PropertySet : public dbus::PropertySet {
   public:
    PropertySet(dbus::ObjectProxy* object_proxy,
                const PropertyChangedCallback& callback)
        : dbus::PropertySet{object_proxy,
                            "org.chromium.bluetooth.BluetoothGatt",
                            callback} {
    }
    PropertySet(const PropertySet&) = delete;
    PropertySet& operator=(const PropertySet&) = delete;
  };

  BluetoothGattProxy(
      const scoped_refptr<dbus::Bus>& bus,
      const dbus::ObjectPath& object_path) :
          bus_{bus},
          object_path_{object_path},
          dbus_object_proxy_{
              bus_->GetObjectProxy(service_name_, object_path_)} {
  }

  BluetoothGattProxy(const BluetoothGattProxy&) = delete;
  BluetoothGattProxy& operator=(const BluetoothGattProxy&) = delete;

  ~BluetoothGattProxy() override {
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

  bool RegisterScannerCallback(
      const dbus::ObjectPath& in_callback_path,
      uint32_t* out_callback_id,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.BluetoothGatt",
        "RegisterScannerCallback",
        error,
        in_callback_path);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_callback_id);
  }

  void RegisterScannerCallbackAsync(
      const dbus::ObjectPath& in_callback_path,
      base::OnceCallback<void(uint32_t /*callback_id*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.BluetoothGatt",
        "RegisterScannerCallback",
        std::move(success_callback),
        std::move(error_callback),
        in_callback_path);
  }

 private:
  scoped_refptr<dbus::Bus> bus_;
  const std::string service_name_{"org.chromium.bluetooth"};
  dbus::ObjectPath object_path_;
  dbus::ObjectProxy* dbus_object_proxy_;

};

}  // namespace bluetooth
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {
namespace bluetooth {

// Abstract interface proxy for org::chromium::bluetooth::BluetoothQA.
class BluetoothQAProxyInterface {
 public:
  virtual ~BluetoothQAProxyInterface() = default;

  virtual bool GetModalias(
      std::string* out_modalias,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetModaliasAsync(
      base::OnceCallback<void(const std::string& /*modalias*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual const dbus::ObjectPath& GetObjectPath() const = 0;
  virtual dbus::ObjectProxy* GetObjectProxy() const = 0;
};

}  // namespace bluetooth
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {
namespace bluetooth {

// Interface proxy for org::chromium::bluetooth::BluetoothQA.
class BluetoothQAProxy final : public BluetoothQAProxyInterface {
 public:
  class PropertySet : public dbus::PropertySet {
   public:
    PropertySet(dbus::ObjectProxy* object_proxy,
                const PropertyChangedCallback& callback)
        : dbus::PropertySet{object_proxy,
                            "org.chromium.bluetooth.BluetoothQA",
                            callback} {
    }
    PropertySet(const PropertySet&) = delete;
    PropertySet& operator=(const PropertySet&) = delete;
  };

  BluetoothQAProxy(
      const scoped_refptr<dbus::Bus>& bus,
      const dbus::ObjectPath& object_path) :
          bus_{bus},
          object_path_{object_path},
          dbus_object_proxy_{
              bus_->GetObjectProxy(service_name_, object_path_)} {
  }

  BluetoothQAProxy(const BluetoothQAProxy&) = delete;
  BluetoothQAProxy& operator=(const BluetoothQAProxy&) = delete;

  ~BluetoothQAProxy() override {
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

  bool GetModalias(
      std::string* out_modalias,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.BluetoothQA",
        "GetModalias",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_modalias);
  }

  void GetModaliasAsync(
      base::OnceCallback<void(const std::string& /*modalias*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.BluetoothQA",
        "GetModalias",
        std::move(success_callback),
        std::move(error_callback));
  }

 private:
  scoped_refptr<dbus::Bus> bus_;
  const std::string service_name_{"org.chromium.bluetooth"};
  dbus::ObjectPath object_path_;
  dbus::ObjectProxy* dbus_object_proxy_;

};

}  // namespace bluetooth
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {
namespace bluetooth {

class ObjectManagerProxy : public dbus::ObjectManager::Interface {
 public:
  ObjectManagerProxy(const scoped_refptr<dbus::Bus>& bus)
      : bus_{bus},
        dbus_object_manager_{bus->GetObjectManager(
            "org.chromium.bluetooth",
            dbus::ObjectPath{"/"})} {
    dbus_object_manager_->RegisterInterface("org.chromium.bluetooth.BatteryManager", this);
    dbus_object_manager_->RegisterInterface("org.chromium.bluetooth.Bluetooth", this);
    dbus_object_manager_->RegisterInterface("org.chromium.bluetooth.BluetoothAdmin", this);
    dbus_object_manager_->RegisterInterface("org.chromium.bluetooth.BluetoothGatt", this);
    dbus_object_manager_->RegisterInterface("org.chromium.bluetooth.BluetoothQA", this);
  }

  ObjectManagerProxy(const ObjectManagerProxy&) = delete;
  ObjectManagerProxy& operator=(const ObjectManagerProxy&) = delete;

  ~ObjectManagerProxy() override {
    dbus_object_manager_->UnregisterInterface("org.chromium.bluetooth.BatteryManager");
    dbus_object_manager_->UnregisterInterface("org.chromium.bluetooth.Bluetooth");
    dbus_object_manager_->UnregisterInterface("org.chromium.bluetooth.BluetoothAdmin");
    dbus_object_manager_->UnregisterInterface("org.chromium.bluetooth.BluetoothGatt");
    dbus_object_manager_->UnregisterInterface("org.chromium.bluetooth.BluetoothQA");
  }

  dbus::ObjectManager* GetObjectManagerProxy() const {
    return dbus_object_manager_;
  }

  org::chromium::bluetooth::BatteryManagerProxyInterface* GetBatteryManagerProxy(
      const dbus::ObjectPath& object_path) {
    auto p = battery_manager_instances_.find(object_path);
    if (p != battery_manager_instances_.end())
      return p->second.get();
    return nullptr;
  }
  std::vector<org::chromium::bluetooth::BatteryManagerProxyInterface*> GetBatteryManagerInstances() const {
    std::vector<org::chromium::bluetooth::BatteryManagerProxyInterface*> values;
    values.reserve(battery_manager_instances_.size());
    for (const auto& pair : battery_manager_instances_)
      values.push_back(pair.second.get());
    return values;
  }
  void SetBatteryManagerAddedCallback(
      const base::RepeatingCallback<void(org::chromium::bluetooth::BatteryManagerProxyInterface*)>& callback) {
    on_battery_manager_added_ = callback;
  }
  void SetBatteryManagerRemovedCallback(
      const base::RepeatingCallback<void(const dbus::ObjectPath&)>& callback) {
    on_battery_manager_removed_ = callback;
  }

  org::chromium::bluetooth::BluetoothProxyInterface* GetBluetoothProxy(
      const dbus::ObjectPath& object_path) {
    auto p = bluetooth_instances_.find(object_path);
    if (p != bluetooth_instances_.end())
      return p->second.get();
    return nullptr;
  }
  std::vector<org::chromium::bluetooth::BluetoothProxyInterface*> GetBluetoothInstances() const {
    std::vector<org::chromium::bluetooth::BluetoothProxyInterface*> values;
    values.reserve(bluetooth_instances_.size());
    for (const auto& pair : bluetooth_instances_)
      values.push_back(pair.second.get());
    return values;
  }
  void SetBluetoothAddedCallback(
      const base::RepeatingCallback<void(org::chromium::bluetooth::BluetoothProxyInterface*)>& callback) {
    on_bluetooth_added_ = callback;
  }
  void SetBluetoothRemovedCallback(
      const base::RepeatingCallback<void(const dbus::ObjectPath&)>& callback) {
    on_bluetooth_removed_ = callback;
  }

  org::chromium::bluetooth::BluetoothAdminProxyInterface* GetBluetoothAdminProxy(
      const dbus::ObjectPath& object_path) {
    auto p = bluetooth_admin_instances_.find(object_path);
    if (p != bluetooth_admin_instances_.end())
      return p->second.get();
    return nullptr;
  }
  std::vector<org::chromium::bluetooth::BluetoothAdminProxyInterface*> GetBluetoothAdminInstances() const {
    std::vector<org::chromium::bluetooth::BluetoothAdminProxyInterface*> values;
    values.reserve(bluetooth_admin_instances_.size());
    for (const auto& pair : bluetooth_admin_instances_)
      values.push_back(pair.second.get());
    return values;
  }
  void SetBluetoothAdminAddedCallback(
      const base::RepeatingCallback<void(org::chromium::bluetooth::BluetoothAdminProxyInterface*)>& callback) {
    on_bluetooth_admin_added_ = callback;
  }
  void SetBluetoothAdminRemovedCallback(
      const base::RepeatingCallback<void(const dbus::ObjectPath&)>& callback) {
    on_bluetooth_admin_removed_ = callback;
  }

  org::chromium::bluetooth::BluetoothGattProxyInterface* GetBluetoothGattProxy(
      const dbus::ObjectPath& object_path) {
    auto p = bluetooth_gatt_instances_.find(object_path);
    if (p != bluetooth_gatt_instances_.end())
      return p->second.get();
    return nullptr;
  }
  std::vector<org::chromium::bluetooth::BluetoothGattProxyInterface*> GetBluetoothGattInstances() const {
    std::vector<org::chromium::bluetooth::BluetoothGattProxyInterface*> values;
    values.reserve(bluetooth_gatt_instances_.size());
    for (const auto& pair : bluetooth_gatt_instances_)
      values.push_back(pair.second.get());
    return values;
  }
  void SetBluetoothGattAddedCallback(
      const base::RepeatingCallback<void(org::chromium::bluetooth::BluetoothGattProxyInterface*)>& callback) {
    on_bluetooth_gatt_added_ = callback;
  }
  void SetBluetoothGattRemovedCallback(
      const base::RepeatingCallback<void(const dbus::ObjectPath&)>& callback) {
    on_bluetooth_gatt_removed_ = callback;
  }

  org::chromium::bluetooth::BluetoothQAProxyInterface* GetBluetoothQAProxy(
      const dbus::ObjectPath& object_path) {
    auto p = bluetooth_qa_instances_.find(object_path);
    if (p != bluetooth_qa_instances_.end())
      return p->second.get();
    return nullptr;
  }
  std::vector<org::chromium::bluetooth::BluetoothQAProxyInterface*> GetBluetoothQAInstances() const {
    std::vector<org::chromium::bluetooth::BluetoothQAProxyInterface*> values;
    values.reserve(bluetooth_qa_instances_.size());
    for (const auto& pair : bluetooth_qa_instances_)
      values.push_back(pair.second.get());
    return values;
  }
  void SetBluetoothQAAddedCallback(
      const base::RepeatingCallback<void(org::chromium::bluetooth::BluetoothQAProxyInterface*)>& callback) {
    on_bluetooth_qa_added_ = callback;
  }
  void SetBluetoothQARemovedCallback(
      const base::RepeatingCallback<void(const dbus::ObjectPath&)>& callback) {
    on_bluetooth_qa_removed_ = callback;
  }

 private:
  void OnPropertyChanged(const dbus::ObjectPath& /* object_path */,
                         const std::string& /* interface_name */,
                         const std::string& /* property_name */) {}

  void ObjectAdded(
      const dbus::ObjectPath& object_path,
      const std::string& interface_name) override {
    if (interface_name == "org.chromium.bluetooth.BatteryManager") {
      std::unique_ptr<org::chromium::bluetooth::BatteryManagerProxy> battery_manager_proxy{
        new org::chromium::bluetooth::BatteryManagerProxy{bus_, object_path}
      };
      auto p = battery_manager_instances_.emplace(object_path, std::move(battery_manager_proxy));
      if (!on_battery_manager_added_.is_null())
        on_battery_manager_added_.Run(p.first->second.get());
      return;
    }
    if (interface_name == "org.chromium.bluetooth.Bluetooth") {
      std::unique_ptr<org::chromium::bluetooth::BluetoothProxy> bluetooth_proxy{
        new org::chromium::bluetooth::BluetoothProxy{bus_, object_path}
      };
      auto p = bluetooth_instances_.emplace(object_path, std::move(bluetooth_proxy));
      if (!on_bluetooth_added_.is_null())
        on_bluetooth_added_.Run(p.first->second.get());
      return;
    }
    if (interface_name == "org.chromium.bluetooth.BluetoothAdmin") {
      std::unique_ptr<org::chromium::bluetooth::BluetoothAdminProxy> bluetooth_admin_proxy{
        new org::chromium::bluetooth::BluetoothAdminProxy{bus_, object_path}
      };
      auto p = bluetooth_admin_instances_.emplace(object_path, std::move(bluetooth_admin_proxy));
      if (!on_bluetooth_admin_added_.is_null())
        on_bluetooth_admin_added_.Run(p.first->second.get());
      return;
    }
    if (interface_name == "org.chromium.bluetooth.BluetoothGatt") {
      std::unique_ptr<org::chromium::bluetooth::BluetoothGattProxy> bluetooth_gatt_proxy{
        new org::chromium::bluetooth::BluetoothGattProxy{bus_, object_path}
      };
      auto p = bluetooth_gatt_instances_.emplace(object_path, std::move(bluetooth_gatt_proxy));
      if (!on_bluetooth_gatt_added_.is_null())
        on_bluetooth_gatt_added_.Run(p.first->second.get());
      return;
    }
    if (interface_name == "org.chromium.bluetooth.BluetoothQA") {
      std::unique_ptr<org::chromium::bluetooth::BluetoothQAProxy> bluetooth_qa_proxy{
        new org::chromium::bluetooth::BluetoothQAProxy{bus_, object_path}
      };
      auto p = bluetooth_qa_instances_.emplace(object_path, std::move(bluetooth_qa_proxy));
      if (!on_bluetooth_qa_added_.is_null())
        on_bluetooth_qa_added_.Run(p.first->second.get());
      return;
    }
  }

  void ObjectRemoved(
      const dbus::ObjectPath& object_path,
      const std::string& interface_name) override {
    if (interface_name == "org.chromium.bluetooth.BatteryManager") {
      auto p = battery_manager_instances_.find(object_path);
      if (p != battery_manager_instances_.end()) {
        if (!on_battery_manager_removed_.is_null())
          on_battery_manager_removed_.Run(object_path);
        battery_manager_instances_.erase(p);
      }
      return;
    }
    if (interface_name == "org.chromium.bluetooth.Bluetooth") {
      auto p = bluetooth_instances_.find(object_path);
      if (p != bluetooth_instances_.end()) {
        if (!on_bluetooth_removed_.is_null())
          on_bluetooth_removed_.Run(object_path);
        bluetooth_instances_.erase(p);
      }
      return;
    }
    if (interface_name == "org.chromium.bluetooth.BluetoothAdmin") {
      auto p = bluetooth_admin_instances_.find(object_path);
      if (p != bluetooth_admin_instances_.end()) {
        if (!on_bluetooth_admin_removed_.is_null())
          on_bluetooth_admin_removed_.Run(object_path);
        bluetooth_admin_instances_.erase(p);
      }
      return;
    }
    if (interface_name == "org.chromium.bluetooth.BluetoothGatt") {
      auto p = bluetooth_gatt_instances_.find(object_path);
      if (p != bluetooth_gatt_instances_.end()) {
        if (!on_bluetooth_gatt_removed_.is_null())
          on_bluetooth_gatt_removed_.Run(object_path);
        bluetooth_gatt_instances_.erase(p);
      }
      return;
    }
    if (interface_name == "org.chromium.bluetooth.BluetoothQA") {
      auto p = bluetooth_qa_instances_.find(object_path);
      if (p != bluetooth_qa_instances_.end()) {
        if (!on_bluetooth_qa_removed_.is_null())
          on_bluetooth_qa_removed_.Run(object_path);
        bluetooth_qa_instances_.erase(p);
      }
      return;
    }
  }

  dbus::PropertySet* CreateProperties(
      dbus::ObjectProxy* object_proxy,
      const dbus::ObjectPath& object_path,
      const std::string& interface_name) override {
    if (interface_name == "org.chromium.bluetooth.BatteryManager") {
      return new org::chromium::bluetooth::BatteryManagerProxy::PropertySet{
          object_proxy,
          base::BindRepeating(&ObjectManagerProxy::OnPropertyChanged,
                              weak_ptr_factory_.GetWeakPtr(),
                              object_path,
                              interface_name)
      };
    }
    if (interface_name == "org.chromium.bluetooth.Bluetooth") {
      return new org::chromium::bluetooth::BluetoothProxy::PropertySet{
          object_proxy,
          base::BindRepeating(&ObjectManagerProxy::OnPropertyChanged,
                              weak_ptr_factory_.GetWeakPtr(),
                              object_path,
                              interface_name)
      };
    }
    if (interface_name == "org.chromium.bluetooth.BluetoothAdmin") {
      return new org::chromium::bluetooth::BluetoothAdminProxy::PropertySet{
          object_proxy,
          base::BindRepeating(&ObjectManagerProxy::OnPropertyChanged,
                              weak_ptr_factory_.GetWeakPtr(),
                              object_path,
                              interface_name)
      };
    }
    if (interface_name == "org.chromium.bluetooth.BluetoothGatt") {
      return new org::chromium::bluetooth::BluetoothGattProxy::PropertySet{
          object_proxy,
          base::BindRepeating(&ObjectManagerProxy::OnPropertyChanged,
                              weak_ptr_factory_.GetWeakPtr(),
                              object_path,
                              interface_name)
      };
    }
    if (interface_name == "org.chromium.bluetooth.BluetoothQA") {
      return new org::chromium::bluetooth::BluetoothQAProxy::PropertySet{
          object_proxy,
          base::BindRepeating(&ObjectManagerProxy::OnPropertyChanged,
                              weak_ptr_factory_.GetWeakPtr(),
                              object_path,
                              interface_name)
      };
    }
    LOG(FATAL) << "Creating properties for unsupported interface "
               << interface_name;
    return nullptr;
  }

  scoped_refptr<dbus::Bus> bus_;
  dbus::ObjectManager* dbus_object_manager_;
  std::map<dbus::ObjectPath,
           std::unique_ptr<org::chromium::bluetooth::BatteryManagerProxy>> battery_manager_instances_;
  base::RepeatingCallback<void(org::chromium::bluetooth::BatteryManagerProxyInterface*)> on_battery_manager_added_;
  base::RepeatingCallback<void(const dbus::ObjectPath&)> on_battery_manager_removed_;
  std::map<dbus::ObjectPath,
           std::unique_ptr<org::chromium::bluetooth::BluetoothProxy>> bluetooth_instances_;
  base::RepeatingCallback<void(org::chromium::bluetooth::BluetoothProxyInterface*)> on_bluetooth_added_;
  base::RepeatingCallback<void(const dbus::ObjectPath&)> on_bluetooth_removed_;
  std::map<dbus::ObjectPath,
           std::unique_ptr<org::chromium::bluetooth::BluetoothAdminProxy>> bluetooth_admin_instances_;
  base::RepeatingCallback<void(org::chromium::bluetooth::BluetoothAdminProxyInterface*)> on_bluetooth_admin_added_;
  base::RepeatingCallback<void(const dbus::ObjectPath&)> on_bluetooth_admin_removed_;
  std::map<dbus::ObjectPath,
           std::unique_ptr<org::chromium::bluetooth::BluetoothGattProxy>> bluetooth_gatt_instances_;
  base::RepeatingCallback<void(org::chromium::bluetooth::BluetoothGattProxyInterface*)> on_bluetooth_gatt_added_;
  base::RepeatingCallback<void(const dbus::ObjectPath&)> on_bluetooth_gatt_removed_;
  std::map<dbus::ObjectPath,
           std::unique_ptr<org::chromium::bluetooth::BluetoothQAProxy>> bluetooth_qa_instances_;
  base::RepeatingCallback<void(org::chromium::bluetooth::BluetoothQAProxyInterface*)> on_bluetooth_qa_added_;
  base::RepeatingCallback<void(const dbus::ObjectPath&)> on_bluetooth_qa_removed_;
  base::WeakPtrFactory<ObjectManagerProxy> weak_ptr_factory_{this};
};

}  // namespace bluetooth
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_DIAGNOSTICS_DBUS_BINDINGS_FLOSS_DBUS_PROXIES_H
