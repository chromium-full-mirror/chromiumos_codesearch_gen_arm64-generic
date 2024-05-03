// Automatic generation of D-Bus interfaces:
//  - org.chromium.bluetooth.Manager
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_DIAGNOSTICS_DBUS_BINDINGS_BLUETOOTH_MANAGER_DBUS_PROXIES_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_DIAGNOSTICS_DBUS_BINDINGS_BLUETOOTH_MANAGER_DBUS_PROXIES_H
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
namespace Manager {
class ObjectManagerProxy;
}  // namespace Manager
}  // namespace bluetooth
}  // namespace chromium
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

  // Gets the default adapter's HCI interface number.
  virtual bool GetDefaultAdapter(
      int32_t* out_hci_interface,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Gets the default adapter's HCI interface number.
  virtual void GetDefaultAdapterAsync(
      base::OnceCallback<void(int32_t /*hci_interface*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Gets available adapters' HCI interface number and enabled state.
  virtual bool GetAvailableAdapters(
      std::vector<brillo::VariantDictionary>* out_adapters,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Gets available adapters' HCI interface number and enabled state.
  virtual void GetAvailableAdaptersAsync(
      base::OnceCallback<void(const std::vector<brillo::VariantDictionary>& /*adapters*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Gets the specific adapter's powered/enabled state.
  virtual bool GetAdapterEnabled(
      int32_t in_hci_interface,
      bool* out_enabled,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Gets the specific adapter's powered/enabled state.
  virtual void GetAdapterEnabledAsync(
      int32_t in_hci_interface,
      base::OnceCallback<void(bool /*enabled*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Powers on the specific adapter.
  virtual bool Start(
      int32_t in_hci_interface,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Powers on the specific adapter.
  virtual void StartAsync(
      int32_t in_hci_interface,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Powers off the specific adapter.
  virtual bool Stop(
      int32_t in_hci_interface,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Powers off the specific adapter.
  virtual void StopAsync(
      int32_t in_hci_interface,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool RegisterCallback(
      const dbus::ObjectPath& in_callback_path,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void RegisterCallbackAsync(
      const dbus::ObjectPath& in_callback_path,
      base::OnceCallback<void()> success_callback,
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
  class PropertySet : public dbus::PropertySet {
   public:
    PropertySet(dbus::ObjectProxy* object_proxy,
                const PropertyChangedCallback& callback)
        : dbus::PropertySet{object_proxy,
                            "org.chromium.bluetooth.Manager",
                            callback} {
    }
    PropertySet(const PropertySet&) = delete;
    PropertySet& operator=(const PropertySet&) = delete;
  };

  ManagerProxy(
      const scoped_refptr<dbus::Bus>& bus,
      const dbus::ObjectPath& object_path) :
          bus_{bus},
          object_path_{object_path},
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

  // Gets the default adapter's HCI interface number.
  bool GetDefaultAdapter(
      int32_t* out_hci_interface,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Manager",
        "GetDefaultAdapter",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_hci_interface);
  }

  // Gets the default adapter's HCI interface number.
  void GetDefaultAdapterAsync(
      base::OnceCallback<void(int32_t /*hci_interface*/)> success_callback,
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

  // Gets available adapters' HCI interface number and enabled state.
  bool GetAvailableAdapters(
      std::vector<brillo::VariantDictionary>* out_adapters,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Manager",
        "GetAvailableAdapters",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_adapters);
  }

  // Gets available adapters' HCI interface number and enabled state.
  void GetAvailableAdaptersAsync(
      base::OnceCallback<void(const std::vector<brillo::VariantDictionary>& /*adapters*/)> success_callback,
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

  // Gets the specific adapter's powered/enabled state.
  bool GetAdapterEnabled(
      int32_t in_hci_interface,
      bool* out_enabled,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Manager",
        "GetAdapterEnabled",
        error,
        in_hci_interface);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_enabled);
  }

  // Gets the specific adapter's powered/enabled state.
  void GetAdapterEnabledAsync(
      int32_t in_hci_interface,
      base::OnceCallback<void(bool /*enabled*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Manager",
        "GetAdapterEnabled",
        std::move(success_callback),
        std::move(error_callback),
        in_hci_interface);
  }

  // Powers on the specific adapter.
  bool Start(
      int32_t in_hci_interface,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Manager",
        "Start",
        error,
        in_hci_interface);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error);
  }

  // Powers on the specific adapter.
  void StartAsync(
      int32_t in_hci_interface,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Manager",
        "Start",
        std::move(success_callback),
        std::move(error_callback),
        in_hci_interface);
  }

  // Powers off the specific adapter.
  bool Stop(
      int32_t in_hci_interface,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Manager",
        "Stop",
        error,
        in_hci_interface);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error);
  }

  // Powers off the specific adapter.
  void StopAsync(
      int32_t in_hci_interface,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Manager",
        "Stop",
        std::move(success_callback),
        std::move(error_callback),
        in_hci_interface);
  }

  bool RegisterCallback(
      const dbus::ObjectPath& in_callback_path,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Manager",
        "RegisterCallback",
        error,
        in_callback_path);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error);
  }

  void RegisterCallbackAsync(
      const dbus::ObjectPath& in_callback_path,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.bluetooth.Manager",
        "RegisterCallback",
        std::move(success_callback),
        std::move(error_callback),
        in_callback_path);
  }

 private:
  scoped_refptr<dbus::Bus> bus_;
  const std::string service_name_{"org.chromium.bluetooth.Manager"};
  dbus::ObjectPath object_path_;
  dbus::ObjectProxy* dbus_object_proxy_;

};

}  // namespace bluetooth
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {
namespace bluetooth {
namespace Manager {

class ObjectManagerProxy : public dbus::ObjectManager::Interface {
 public:
  ObjectManagerProxy(const scoped_refptr<dbus::Bus>& bus)
      : bus_{bus},
        dbus_object_manager_{bus->GetObjectManager(
            "org.chromium.bluetooth.Manager",
            dbus::ObjectPath{"/"})} {
    dbus_object_manager_->RegisterInterface("org.chromium.bluetooth.Manager", this);
  }

  ObjectManagerProxy(const ObjectManagerProxy&) = delete;
  ObjectManagerProxy& operator=(const ObjectManagerProxy&) = delete;

  ~ObjectManagerProxy() override {
    dbus_object_manager_->UnregisterInterface("org.chromium.bluetooth.Manager");
  }

  dbus::ObjectManager* GetObjectManagerProxy() const {
    return dbus_object_manager_;
  }

  org::chromium::bluetooth::ManagerProxyInterface* GetManagerProxy(
      const dbus::ObjectPath& object_path) {
    auto p = manager_instances_.find(object_path);
    if (p != manager_instances_.end())
      return p->second.get();
    return nullptr;
  }
  std::vector<org::chromium::bluetooth::ManagerProxyInterface*> GetManagerInstances() const {
    std::vector<org::chromium::bluetooth::ManagerProxyInterface*> values;
    values.reserve(manager_instances_.size());
    for (const auto& pair : manager_instances_)
      values.push_back(pair.second.get());
    return values;
  }
  void SetManagerAddedCallback(
      const base::RepeatingCallback<void(org::chromium::bluetooth::ManagerProxyInterface*)>& callback) {
    on_manager_added_ = callback;
  }
  void SetManagerRemovedCallback(
      const base::RepeatingCallback<void(const dbus::ObjectPath&)>& callback) {
    on_manager_removed_ = callback;
  }

 private:
  void OnPropertyChanged(const dbus::ObjectPath& /* object_path */,
                         const std::string& /* interface_name */,
                         const std::string& /* property_name */) {}

  void ObjectAdded(
      const dbus::ObjectPath& object_path,
      const std::string& interface_name) override {
    if (interface_name == "org.chromium.bluetooth.Manager") {
      std::unique_ptr<org::chromium::bluetooth::ManagerProxy> manager_proxy{
        new org::chromium::bluetooth::ManagerProxy{bus_, object_path}
      };
      auto p = manager_instances_.emplace(object_path, std::move(manager_proxy));
      if (!on_manager_added_.is_null())
        on_manager_added_.Run(p.first->second.get());
      return;
    }
  }

  void ObjectRemoved(
      const dbus::ObjectPath& object_path,
      const std::string& interface_name) override {
    if (interface_name == "org.chromium.bluetooth.Manager") {
      auto p = manager_instances_.find(object_path);
      if (p != manager_instances_.end()) {
        if (!on_manager_removed_.is_null())
          on_manager_removed_.Run(object_path);
        manager_instances_.erase(p);
      }
      return;
    }
  }

  dbus::PropertySet* CreateProperties(
      dbus::ObjectProxy* object_proxy,
      const dbus::ObjectPath& object_path,
      const std::string& interface_name) override {
    if (interface_name == "org.chromium.bluetooth.Manager") {
      return new org::chromium::bluetooth::ManagerProxy::PropertySet{
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
           std::unique_ptr<org::chromium::bluetooth::ManagerProxy>> manager_instances_;
  base::RepeatingCallback<void(org::chromium::bluetooth::ManagerProxyInterface*)> on_manager_added_;
  base::RepeatingCallback<void(const dbus::ObjectPath&)> on_manager_removed_;
  base::WeakPtrFactory<ObjectManagerProxy> weak_ptr_factory_{this};
};

}  // namespace Manager
}  // namespace bluetooth
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_DIAGNOSTICS_DBUS_BINDINGS_BLUETOOTH_MANAGER_DBUS_PROXIES_H
