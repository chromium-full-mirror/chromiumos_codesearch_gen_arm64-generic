// Automatic generation of D-Bus interfaces:
//  - org.chromium.Modemloggerd.Manager
//  - org.chromium.Modemloggerd.Modem
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_MODEMLOGGERD_DEV_OUT_DEFAULT_GEN_INCLUDE_MODEMLOGGERD_DBUS_BINDINGS_MODEMLOGGERD_PROXIES_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_MODEMLOGGERD_DEV_OUT_DEFAULT_GEN_INCLUDE_MODEMLOGGERD_DBUS_BINDINGS_MODEMLOGGERD_PROXIES_H
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
namespace Modemloggerd {

// Abstract interface proxy for org::chromium::Modemloggerd::Manager.
class ManagerProxyInterface {
 public:
  virtual ~ManagerProxyInterface() = default;

  static const char* AvailableModemsName() { return "AvailableModems"; }
  virtual const std::vector<dbus::ObjectPath>& available_modems() const = 0;
  virtual bool is_available_modems_valid() const = 0;

  virtual const dbus::ObjectPath& GetObjectPath() const = 0;
  virtual dbus::ObjectProxy* GetObjectProxy() const = 0;

  virtual void InitializeProperties(
      const base::RepeatingCallback<void(ManagerProxyInterface*, const std::string&)>& callback) = 0;
};

}  // namespace Modemloggerd
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {
namespace Modemloggerd {

// Interface proxy for org::chromium::Modemloggerd::Manager.
class ManagerProxy final : public ManagerProxyInterface {
 public:
  class PropertySet : public dbus::PropertySet {
   public:
    PropertySet(dbus::ObjectProxy* object_proxy,
                const PropertyChangedCallback& callback)
        : dbus::PropertySet{object_proxy,
                            "org.chromium.Modemloggerd.Manager",
                            callback} {
      RegisterProperty(AvailableModemsName(), &available_modems);
    }
    PropertySet(const PropertySet&) = delete;
    PropertySet& operator=(const PropertySet&) = delete;

    brillo::dbus_utils::Property<std::vector<dbus::ObjectPath>> available_modems;

  };

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

  void InitializeProperties(
      const base::RepeatingCallback<void(ManagerProxyInterface*, const std::string&)>& callback) override {
    property_set_.reset(
        new PropertySet(dbus_object_proxy_, base::BindRepeating(callback, this)));
    property_set_->ConnectSignals();
    property_set_->GetAll();
  }

  const PropertySet* GetProperties() const { return &(*property_set_); }
  PropertySet* GetProperties() { return &(*property_set_); }

  const std::vector<dbus::ObjectPath>& available_modems() const override {
    return property_set_->available_modems.value();
  }

  bool is_available_modems_valid() const override {
    return property_set_->available_modems.is_valid();
  }

 private:
  scoped_refptr<dbus::Bus> bus_;
  std::string service_name_;
  const dbus::ObjectPath object_path_{"/org/chromium/Modemloggerd/Manager"};
  dbus::ObjectProxy* dbus_object_proxy_;
  std::unique_ptr<PropertySet> property_set_;

};

}  // namespace Modemloggerd
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {
namespace Modemloggerd {

// Abstract interface proxy for org::chromium::Modemloggerd::Modem.
class ModemProxyInterface {
 public:
  virtual ~ModemProxyInterface() = default;

  // Enables/Disables logging functionality in the modem. Does not dump any
  // logs to disk.
  virtual bool SetEnabled(
      bool in_enable,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Enables/Disables logging functionality in the modem. Does not dump any
  // logs to disk.
  virtual void SetEnabledAsync(
      bool in_enable,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Start logging
  virtual bool Start(
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Start logging
  virtual void StartAsync(
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Stop logging
  virtual bool Stop(
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Stop logging
  virtual void StopAsync(
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Set output directory for modem logs
  virtual bool SetOutputDir(
      const std::string& in_output_dir,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Set output directory for modem logs
  virtual void SetOutputDirAsync(
      const std::string& in_output_dir,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Set whether logging should start automatically after boot.
  virtual bool SetAutoStart(
      bool in_auto_start,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Set whether logging should start automatically after boot.
  virtual void SetAutoStartAsync(
      bool in_auto_start,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual const dbus::ObjectPath& GetObjectPath() const = 0;
  virtual dbus::ObjectProxy* GetObjectProxy() const = 0;
};

}  // namespace Modemloggerd
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {
namespace Modemloggerd {

// Interface proxy for org::chromium::Modemloggerd::Modem.
class ModemProxy final : public ModemProxyInterface {
 public:
  ModemProxy(
      const scoped_refptr<dbus::Bus>& bus,
      const std::string& service_name,
      const dbus::ObjectPath& object_path) :
          bus_{bus},
          service_name_{service_name},
          object_path_{object_path},
          dbus_object_proxy_{
              bus_->GetObjectProxy(service_name_, object_path_)} {
  }

  ModemProxy(const ModemProxy&) = delete;
  ModemProxy& operator=(const ModemProxy&) = delete;

  ~ModemProxy() override {
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

  // Enables/Disables logging functionality in the modem. Does not dump any
  // logs to disk.
  bool SetEnabled(
      bool in_enable,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.Modemloggerd.Modem",
        "SetEnabled",
        error,
        in_enable);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error);
  }

  // Enables/Disables logging functionality in the modem. Does not dump any
  // logs to disk.
  void SetEnabledAsync(
      bool in_enable,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.Modemloggerd.Modem",
        "SetEnabled",
        std::move(success_callback),
        std::move(error_callback),
        in_enable);
  }

  // Start logging
  bool Start(
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.Modemloggerd.Modem",
        "Start",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error);
  }

  // Start logging
  void StartAsync(
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.Modemloggerd.Modem",
        "Start",
        std::move(success_callback),
        std::move(error_callback));
  }

  // Stop logging
  bool Stop(
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.Modemloggerd.Modem",
        "Stop",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error);
  }

  // Stop logging
  void StopAsync(
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.Modemloggerd.Modem",
        "Stop",
        std::move(success_callback),
        std::move(error_callback));
  }

  // Set output directory for modem logs
  bool SetOutputDir(
      const std::string& in_output_dir,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.Modemloggerd.Modem",
        "SetOutputDir",
        error,
        in_output_dir);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error);
  }

  // Set output directory for modem logs
  void SetOutputDirAsync(
      const std::string& in_output_dir,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.Modemloggerd.Modem",
        "SetOutputDir",
        std::move(success_callback),
        std::move(error_callback),
        in_output_dir);
  }

  // Set whether logging should start automatically after boot.
  bool SetAutoStart(
      bool in_auto_start,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.Modemloggerd.Modem",
        "SetAutoStart",
        error,
        in_auto_start);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error);
  }

  // Set whether logging should start automatically after boot.
  void SetAutoStartAsync(
      bool in_auto_start,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.Modemloggerd.Modem",
        "SetAutoStart",
        std::move(success_callback),
        std::move(error_callback),
        in_auto_start);
  }

 private:
  scoped_refptr<dbus::Bus> bus_;
  std::string service_name_;
  dbus::ObjectPath object_path_;
  dbus::ObjectProxy* dbus_object_proxy_;

};

}  // namespace Modemloggerd
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_MODEMLOGGERD_DEV_OUT_DEFAULT_GEN_INCLUDE_MODEMLOGGERD_DBUS_BINDINGS_MODEMLOGGERD_PROXIES_H
