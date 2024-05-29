// Automatic generation of D-Bus interfaces:
//  - org.chromium.PrimaryIoManager

#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_PRIMARY_IO_MANAGER_CLIENT_OUT_DEFAULT_GEN_INCLUDE_PRIMARY_IO_MANAGER_DBUS_PROXIES_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_PRIMARY_IO_MANAGER_CLIENT_OUT_DEFAULT_GEN_INCLUDE_PRIMARY_IO_MANAGER_DBUS_PROXIES_H
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

// Abstract interface proxy for org::chromium::PrimaryIoManager.
class PrimaryIoManagerProxyInterface {
 public:
  virtual ~PrimaryIoManagerProxyInterface() = default;

  virtual bool GetIoDevices(
      std::vector<std::string>* out_devices,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetIoDevicesAsync(
      base::OnceCallback<void(const std::vector<std::string>& /*devices*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool UnsetPrimaryKeyboard(
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void UnsetPrimaryKeyboardAsync(
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool UnsetPrimaryMouse(
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void UnsetPrimaryMouseAsync(
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool IsPrimaryIoDevice(
      const std::string& in_device,
      bool* out_primary,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void IsPrimaryIoDeviceAsync(
      const std::string& in_device,
      base::OnceCallback<void(bool /*primary*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual const dbus::ObjectPath& GetObjectPath() const = 0;
  virtual dbus::ObjectProxy* GetObjectProxy() const = 0;
};

}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {

// Interface proxy for org::chromium::PrimaryIoManager.
class PrimaryIoManagerProxy final : public PrimaryIoManagerProxyInterface {
 public:

  PrimaryIoManagerProxy(const scoped_refptr<dbus::Bus>& bus) :
      bus_{bus},
      dbus_object_proxy_{
          bus_->GetObjectProxy(service_name_, object_path_)} {
  }

  PrimaryIoManagerProxy(const PrimaryIoManagerProxy&) = delete;
  PrimaryIoManagerProxy& operator=(const PrimaryIoManagerProxy&) = delete;

  ~PrimaryIoManagerProxy() override {
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

  bool GetIoDevices(
      std::vector<std::string>* out_devices,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PrimaryIoManager",
        "GetIoDevices",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_devices);
  }

  void GetIoDevicesAsync(
      base::OnceCallback<void(const std::vector<std::string>& /*devices*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PrimaryIoManager",
        "GetIoDevices",
        std::move(success_callback),
        std::move(error_callback));
  }

  bool UnsetPrimaryKeyboard(
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PrimaryIoManager",
        "UnsetPrimaryKeyboard",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error);
  }

  void UnsetPrimaryKeyboardAsync(
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PrimaryIoManager",
        "UnsetPrimaryKeyboard",
        std::move(success_callback),
        std::move(error_callback));
  }

  bool UnsetPrimaryMouse(
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PrimaryIoManager",
        "UnsetPrimaryMouse",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error);
  }

  void UnsetPrimaryMouseAsync(
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PrimaryIoManager",
        "UnsetPrimaryMouse",
        std::move(success_callback),
        std::move(error_callback));
  }

  bool IsPrimaryIoDevice(
      const std::string& in_device,
      bool* out_primary,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PrimaryIoManager",
        "IsPrimaryIoDevice",
        error,
        in_device);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_primary);
  }

  void IsPrimaryIoDeviceAsync(
      const std::string& in_device,
      base::OnceCallback<void(bool /*primary*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PrimaryIoManager",
        "IsPrimaryIoDevice",
        std::move(success_callback),
        std::move(error_callback),
        in_device);
  }

 private:

  scoped_refptr<dbus::Bus> bus_;
  const std::string service_name_{"org.chromium.PrimaryIoManager"};
  const dbus::ObjectPath object_path_{"/org/chromium/PrimaryIoManager"};
  dbus::ObjectProxy* dbus_object_proxy_;
};

}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_PRIMARY_IO_MANAGER_CLIENT_OUT_DEFAULT_GEN_INCLUDE_PRIMARY_IO_MANAGER_DBUS_PROXIES_H
