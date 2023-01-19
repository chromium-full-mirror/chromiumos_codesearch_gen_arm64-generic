// Automatic generation of D-Bus interfaces:
//  - org.chromium.bluetooth.Bluetooth
//  - org.bluez.Adapter1
//  - org.chromium.bluetooth.Manager
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_SHILL_OUT_DEFAULT_GEN_INCLUDE_BLUETOOTH_DBUS_PROXIES_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_SHILL_OUT_DEFAULT_GEN_INCLUDE_BLUETOOTH_DBUS_PROXIES_H
#include <memory>
#include <string>
#include <vector>

#include <base/bind.h>
#include <base/callback.h>
#include <base/files/scoped_file.h>
#include <base/logging.h>
#include <base/memory/ref_counted.h>
#include <brillo/any.h>
#include <brillo/dbus/dbus_method_invoker.h>
#include <brillo/dbus/dbus_property.h>
#include <brillo/dbus/dbus_signal_handler.h>
#include <brillo/dbus/file_descriptor.h>
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

// Abstract interface proxy for org::chromium::bluetooth::Bluetooth.
class BluetoothProxyInterface {
 public:
  virtual ~BluetoothProxyInterface() = default;

  virtual bool GetProfileConnectionState(
      const std::vector<uint8_t>& in_profile,
      uint32_t* out_state,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetProfileConnectionStateAsync(
      const std::vector<uint8_t>& in_profile,
      base::OnceCallback<void(uint32_t /*state*/)> success_callback,
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
  BluetoothProxy(
      const scoped_refptr<dbus::Bus>& bus,
      const std::string& service_name,
      const dbus::ObjectPath& object_path) :
          bus_{bus},
          service_name_{service_name},
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

  bool GetProfileConnectionState(
      const std::vector<uint8_t>& in_profile,
      uint32_t* out_state,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetProfileConnectionState",
        error,
        in_profile);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_state);
  }

  void GetProfileConnectionStateAsync(
      const std::vector<uint8_t>& in_profile,
      base::OnceCallback<void(uint32_t /*state*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Bluetooth",
        "GetProfileConnectionState",
        std::move(success_callback),
        std::move(error_callback),
        in_profile);
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

 private:
  scoped_refptr<dbus::Bus> bus_;
  std::string service_name_;
  dbus::ObjectPath object_path_;
  dbus::ObjectProxy* dbus_object_proxy_;

};

}  // namespace bluetooth
}  // namespace chromium
}  // namespace org

namespace org {
namespace bluez {

// Abstract interface proxy for org::bluez::Adapter1.
class Adapter1ProxyInterface {
 public:
  virtual ~Adapter1ProxyInterface() = default;

  static const char* PoweredName() { return "Powered"; }
  virtual bool powered() const = 0;
  virtual bool is_powered_valid() const = 0;

  virtual const dbus::ObjectPath& GetObjectPath() const = 0;
  virtual dbus::ObjectProxy* GetObjectProxy() const = 0;

  virtual void InitializeProperties(
      const base::RepeatingCallback<void(Adapter1ProxyInterface*, const std::string&)>& callback) = 0;
};

}  // namespace bluez
}  // namespace org

namespace org {
namespace bluez {

// Interface proxy for org::bluez::Adapter1.
class Adapter1Proxy final : public Adapter1ProxyInterface {
 public:
  class PropertySet : public dbus::PropertySet {
   public:
    PropertySet(dbus::ObjectProxy* object_proxy,
                const PropertyChangedCallback& callback)
        : dbus::PropertySet{object_proxy,
                            "org.bluez.Adapter1",
                            callback} {
      RegisterProperty(PoweredName(), &powered);
    }
    PropertySet(const PropertySet&) = delete;
    PropertySet& operator=(const PropertySet&) = delete;

    brillo::dbus_utils::Property<bool> powered;

  };

  Adapter1Proxy(
      const scoped_refptr<dbus::Bus>& bus,
      const std::string& service_name,
      const dbus::ObjectPath& object_path) :
          bus_{bus},
          service_name_{service_name},
          object_path_{object_path},
          dbus_object_proxy_{
              bus_->GetObjectProxy(service_name_, object_path_)} {
  }

  Adapter1Proxy(const Adapter1Proxy&) = delete;
  Adapter1Proxy& operator=(const Adapter1Proxy&) = delete;

  ~Adapter1Proxy() override {
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

  void InitializeProperties(
      const base::RepeatingCallback<void(Adapter1ProxyInterface*, const std::string&)>& callback) override {
    property_set_.reset(
        new PropertySet(dbus_object_proxy_, base::BindRepeating(callback, this)));
    property_set_->ConnectSignals();
    property_set_->GetAll();
  }

  const PropertySet* GetProperties() const { return &(*property_set_); }
  PropertySet* GetProperties() { return &(*property_set_); }

  bool powered() const override {
    return property_set_->powered.value();
  }

  bool is_powered_valid() const override {
    return property_set_->powered.is_valid();
  }

 private:
  scoped_refptr<dbus::Bus> bus_;
  std::string service_name_;
  dbus::ObjectPath object_path_;
  dbus::ObjectProxy* dbus_object_proxy_;
  std::unique_ptr<PropertySet> property_set_;

};

}  // namespace bluez
}  // namespace org

namespace org {
namespace chromium {
namespace bluetooth {

// Abstract interface proxy for org::chromium::bluetooth::Manager.
class ManagerProxyInterface {
 public:
  virtual ~ManagerProxyInterface() = default;

  virtual bool GetFlossEnabled(
      bool* out_enabled,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetFlossEnabledAsync(
      base::OnceCallback<void(bool /*enabled*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool GetAvailableAdapters(
      std::vector<brillo::VariantDictionary>* out_AdapterWithEnabled,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetAvailableAdaptersAsync(
      base::OnceCallback<void(const std::vector<brillo::VariantDictionary>& /*AdapterWithEnabled*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool GetDefaultAdapter(
      int32_t* out_hci,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetDefaultAdapterAsync(
      base::OnceCallback<void(int32_t /*hci*/)> success_callback,
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

// Interface proxy for org::chromium::bluetooth::Manager.
class ManagerProxy final : public ManagerProxyInterface {
 public:
  ManagerProxy(
      const scoped_refptr<dbus::Bus>& bus,
      const std::string& service_name) :
          bus_{bus},
          service_name_{service_name},
          dbus_object_proxy_{
              bus_->GetObjectProxy(service_name_, object_path_)} {
  }

  ManagerProxy(const ManagerProxy&) = delete;
  ManagerProxy& operator=(const ManagerProxy&) = delete;

  ~ManagerProxy() override {
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

  bool GetFlossEnabled(
      bool* out_enabled,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Manager",
        "GetFlossEnabled",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_enabled);
  }

  void GetFlossEnabledAsync(
      base::OnceCallback<void(bool /*enabled*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Manager",
        "GetFlossEnabled",
        std::move(success_callback),
        std::move(error_callback));
  }

  bool GetAvailableAdapters(
      std::vector<brillo::VariantDictionary>* out_AdapterWithEnabled,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Manager",
        "GetAvailableAdapters",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_AdapterWithEnabled);
  }

  void GetAvailableAdaptersAsync(
      base::OnceCallback<void(const std::vector<brillo::VariantDictionary>& /*AdapterWithEnabled*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Manager",
        "GetAvailableAdapters",
        std::move(success_callback),
        std::move(error_callback));
  }

  bool GetDefaultAdapter(
      int32_t* out_hci,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Manager",
        "GetDefaultAdapter",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_hci);
  }

  void GetDefaultAdapterAsync(
      base::OnceCallback<void(int32_t /*hci*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Manager",
        "GetDefaultAdapter",
        std::move(success_callback),
        std::move(error_callback));
  }

 private:
  scoped_refptr<dbus::Bus> bus_;
  std::string service_name_;
  const dbus::ObjectPath object_path_{"/org/chromium/bluetooth/Manager"};
  dbus::ObjectProxy* dbus_object_proxy_;

};

}  // namespace bluetooth
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_SHILL_OUT_DEFAULT_GEN_INCLUDE_BLUETOOTH_DBUS_PROXIES_H
