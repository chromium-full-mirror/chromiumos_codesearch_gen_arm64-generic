// Automatic generation of D-Bus interfaces:
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
