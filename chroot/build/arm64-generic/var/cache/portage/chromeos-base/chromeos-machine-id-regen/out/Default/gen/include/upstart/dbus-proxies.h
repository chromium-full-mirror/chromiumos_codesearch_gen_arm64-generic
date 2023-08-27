// Automatic generation of D-Bus interfaces:
//  - com.ubuntu.Upstart0_6
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_CHROMEOS_MACHINE_ID_REGEN_OUT_DEFAULT_GEN_INCLUDE_UPSTART_DBUS_PROXIES_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_CHROMEOS_MACHINE_ID_REGEN_OUT_DEFAULT_GEN_INCLUDE_UPSTART_DBUS_PROXIES_H
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

namespace com {
namespace ubuntu {

// Abstract interface proxy for com::ubuntu::Upstart0_6.
class Upstart0_6ProxyInterface {
 public:
  virtual ~Upstart0_6ProxyInterface() = default;

  virtual bool ReloadConfiguration(
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void ReloadConfigurationAsync(
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool GetJobByName(
      const std::string& in_name,
      dbus::ObjectPath* out_job,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetJobByNameAsync(
      const std::string& in_name,
      base::OnceCallback<void(const dbus::ObjectPath& /*job*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool GetAllJobs(
      std::vector<dbus::ObjectPath>* out_jobs,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetAllJobsAsync(
      base::OnceCallback<void(const std::vector<dbus::ObjectPath>& /*jobs*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool GetState(
      std::string* out_state,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetStateAsync(
      base::OnceCallback<void(const std::string& /*state*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool Restart(
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void RestartAsync(
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool GetEnv(
      const std::vector<std::string>& in_job_details,
      const std::string& in_name,
      std::string* out_value,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetEnvAsync(
      const std::vector<std::string>& in_job_details,
      const std::string& in_name,
      base::OnceCallback<void(const std::string& /*value*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool SetEnv(
      const std::vector<std::string>& in_job_details,
      const std::string& in_var,
      bool in_replace,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void SetEnvAsync(
      const std::vector<std::string>& in_job_details,
      const std::string& in_var,
      bool in_replace,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool SetEnvList(
      const std::vector<std::string>& in_job_details,
      const std::vector<std::string>& in_vars,
      bool in_replace,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void SetEnvListAsync(
      const std::vector<std::string>& in_job_details,
      const std::vector<std::string>& in_vars,
      bool in_replace,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool UnsetEnv(
      const std::vector<std::string>& in_job_details,
      const std::string& in_name,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void UnsetEnvAsync(
      const std::vector<std::string>& in_job_details,
      const std::string& in_name,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool UnsetEnvList(
      const std::vector<std::string>& in_job_details,
      const std::vector<std::string>& in_name,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void UnsetEnvListAsync(
      const std::vector<std::string>& in_job_details,
      const std::vector<std::string>& in_name,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool ListEnv(
      const std::vector<std::string>& in_job_details,
      std::vector<std::string>* out_env,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void ListEnvAsync(
      const std::vector<std::string>& in_job_details,
      base::OnceCallback<void(const std::vector<std::string>& /*env*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool ResetEnv(
      const std::vector<std::string>& in_job_details,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void ResetEnvAsync(
      const std::vector<std::string>& in_job_details,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool EmitEvent(
      const std::string& in_name,
      const std::vector<std::string>& in_env,
      bool in_wait,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void EmitEventAsync(
      const std::string& in_name,
      const std::vector<std::string>& in_env,
      bool in_wait,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool EmitEventWithFile(
      const std::string& in_name,
      const std::vector<std::string>& in_env,
      bool in_wait,
      const base::ScopedFD& in_file,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void EmitEventWithFileAsync(
      const std::string& in_name,
      const std::vector<std::string>& in_env,
      bool in_wait,
      const base::ScopedFD& in_file,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool NotifyDiskWriteable(
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void NotifyDiskWriteableAsync(
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool NotifyDBusAddress(
      const std::string& in_address,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void NotifyDBusAddressAsync(
      const std::string& in_address,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool NotifyCGroupManagerAddress(
      const std::string& in_address,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void NotifyCGroupManagerAddressAsync(
      const std::string& in_address,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool EndSession(
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void EndSessionAsync(
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void RegisterJobAddedSignalHandler(
      const base::RepeatingCallback<void(const dbus::ObjectPath&)>& signal_callback,
      dbus::ObjectProxy::OnConnectedCallback on_connected_callback) = 0;

  virtual void RegisterJobRemovedSignalHandler(
      const base::RepeatingCallback<void(const dbus::ObjectPath&)>& signal_callback,
      dbus::ObjectProxy::OnConnectedCallback on_connected_callback) = 0;

  virtual void RegisterEventEmittedSignalHandler(
      const base::RepeatingCallback<void(const std::string&,
                                         const std::vector<std::string>&)>& signal_callback,
      dbus::ObjectProxy::OnConnectedCallback on_connected_callback) = 0;

  virtual void RegisterRestartedSignalHandler(
      base::RepeatingClosure signal_callback,
      dbus::ObjectProxy::OnConnectedCallback on_connected_callback) = 0;

  static const char* versionName() { return "version"; }
  virtual const std::string& version() const = 0;
  virtual bool is_version_valid() const = 0;
  static const char* log_priorityName() { return "log_priority"; }
  virtual const std::string& log_priority() const = 0;
  virtual bool is_log_priority_valid() const = 0;
  virtual void set_log_priority(const std::string& value,
                                base::OnceCallback<void(bool)> callback) = 0;

  virtual const dbus::ObjectPath& GetObjectPath() const = 0;
  virtual dbus::ObjectProxy* GetObjectProxy() const = 0;

  virtual void InitializeProperties(
      const base::RepeatingCallback<void(Upstart0_6ProxyInterface*, const std::string&)>& callback) = 0;
};

}  // namespace ubuntu
}  // namespace com

namespace com {
namespace ubuntu {

// Interface proxy for com::ubuntu::Upstart0_6.
class Upstart0_6Proxy final : public Upstart0_6ProxyInterface {
 public:
  class PropertySet : public dbus::PropertySet {
   public:
    PropertySet(dbus::ObjectProxy* object_proxy,
                const PropertyChangedCallback& callback)
        : dbus::PropertySet{object_proxy,
                            "com.ubuntu.Upstart0_6",
                            callback} {
      RegisterProperty(versionName(), &version);
      RegisterProperty(log_priorityName(), &log_priority);
    }
    PropertySet(const PropertySet&) = delete;
    PropertySet& operator=(const PropertySet&) = delete;

    brillo::dbus_utils::Property<std::string> version;
    brillo::dbus_utils::Property<std::string> log_priority;

  };

  Upstart0_6Proxy(
      const scoped_refptr<dbus::Bus>& bus,
      const std::string& service_name) :
          bus_{bus},
          service_name_{service_name},
          dbus_object_proxy_{
              bus_->GetObjectProxy(service_name_, object_path_)} {
  }

  Upstart0_6Proxy(const Upstart0_6Proxy&) = delete;
  Upstart0_6Proxy& operator=(const Upstart0_6Proxy&) = delete;

  ~Upstart0_6Proxy() override {
  }

  void RegisterJobAddedSignalHandler(
      const base::RepeatingCallback<void(const dbus::ObjectPath&)>& signal_callback,
      dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    brillo::dbus_utils::ConnectToSignal(
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "JobAdded",
        signal_callback,
        std::move(on_connected_callback));
  }

  void RegisterJobRemovedSignalHandler(
      const base::RepeatingCallback<void(const dbus::ObjectPath&)>& signal_callback,
      dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    brillo::dbus_utils::ConnectToSignal(
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "JobRemoved",
        signal_callback,
        std::move(on_connected_callback));
  }

  void RegisterEventEmittedSignalHandler(
      const base::RepeatingCallback<void(const std::string&,
                                         const std::vector<std::string>&)>& signal_callback,
      dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    brillo::dbus_utils::ConnectToSignal(
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "EventEmitted",
        signal_callback,
        std::move(on_connected_callback));
  }

  void RegisterRestartedSignalHandler(
      base::RepeatingClosure signal_callback,
      dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    brillo::dbus_utils::ConnectToSignal(
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "Restarted",
        signal_callback,
        std::move(on_connected_callback));
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
      const base::RepeatingCallback<void(Upstart0_6ProxyInterface*, const std::string&)>& callback) override {
    property_set_.reset(
        new PropertySet(dbus_object_proxy_, base::BindRepeating(callback, this)));
    property_set_->ConnectSignals();
    property_set_->GetAll();
  }

  const PropertySet* GetProperties() const { return &(*property_set_); }
  PropertySet* GetProperties() { return &(*property_set_); }

  bool ReloadConfiguration(
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "ReloadConfiguration",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error);
  }

  void ReloadConfigurationAsync(
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "ReloadConfiguration",
        std::move(success_callback),
        std::move(error_callback));
  }

  bool GetJobByName(
      const std::string& in_name,
      dbus::ObjectPath* out_job,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "GetJobByName",
        error,
        in_name);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_job);
  }

  void GetJobByNameAsync(
      const std::string& in_name,
      base::OnceCallback<void(const dbus::ObjectPath& /*job*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "GetJobByName",
        std::move(success_callback),
        std::move(error_callback),
        in_name);
  }

  bool GetAllJobs(
      std::vector<dbus::ObjectPath>* out_jobs,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "GetAllJobs",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_jobs);
  }

  void GetAllJobsAsync(
      base::OnceCallback<void(const std::vector<dbus::ObjectPath>& /*jobs*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "GetAllJobs",
        std::move(success_callback),
        std::move(error_callback));
  }

  bool GetState(
      std::string* out_state,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "GetState",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_state);
  }

  void GetStateAsync(
      base::OnceCallback<void(const std::string& /*state*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "GetState",
        std::move(success_callback),
        std::move(error_callback));
  }

  bool Restart(
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "Restart",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error);
  }

  void RestartAsync(
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "Restart",
        std::move(success_callback),
        std::move(error_callback));
  }

  bool GetEnv(
      const std::vector<std::string>& in_job_details,
      const std::string& in_name,
      std::string* out_value,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "GetEnv",
        error,
        in_job_details,
        in_name);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_value);
  }

  void GetEnvAsync(
      const std::vector<std::string>& in_job_details,
      const std::string& in_name,
      base::OnceCallback<void(const std::string& /*value*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "GetEnv",
        std::move(success_callback),
        std::move(error_callback),
        in_job_details,
        in_name);
  }

  bool SetEnv(
      const std::vector<std::string>& in_job_details,
      const std::string& in_var,
      bool in_replace,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "SetEnv",
        error,
        in_job_details,
        in_var,
        in_replace);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error);
  }

  void SetEnvAsync(
      const std::vector<std::string>& in_job_details,
      const std::string& in_var,
      bool in_replace,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "SetEnv",
        std::move(success_callback),
        std::move(error_callback),
        in_job_details,
        in_var,
        in_replace);
  }

  bool SetEnvList(
      const std::vector<std::string>& in_job_details,
      const std::vector<std::string>& in_vars,
      bool in_replace,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "SetEnvList",
        error,
        in_job_details,
        in_vars,
        in_replace);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error);
  }

  void SetEnvListAsync(
      const std::vector<std::string>& in_job_details,
      const std::vector<std::string>& in_vars,
      bool in_replace,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "SetEnvList",
        std::move(success_callback),
        std::move(error_callback),
        in_job_details,
        in_vars,
        in_replace);
  }

  bool UnsetEnv(
      const std::vector<std::string>& in_job_details,
      const std::string& in_name,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "UnsetEnv",
        error,
        in_job_details,
        in_name);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error);
  }

  void UnsetEnvAsync(
      const std::vector<std::string>& in_job_details,
      const std::string& in_name,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "UnsetEnv",
        std::move(success_callback),
        std::move(error_callback),
        in_job_details,
        in_name);
  }

  bool UnsetEnvList(
      const std::vector<std::string>& in_job_details,
      const std::vector<std::string>& in_name,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "UnsetEnvList",
        error,
        in_job_details,
        in_name);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error);
  }

  void UnsetEnvListAsync(
      const std::vector<std::string>& in_job_details,
      const std::vector<std::string>& in_name,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "UnsetEnvList",
        std::move(success_callback),
        std::move(error_callback),
        in_job_details,
        in_name);
  }

  bool ListEnv(
      const std::vector<std::string>& in_job_details,
      std::vector<std::string>* out_env,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "ListEnv",
        error,
        in_job_details);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_env);
  }

  void ListEnvAsync(
      const std::vector<std::string>& in_job_details,
      base::OnceCallback<void(const std::vector<std::string>& /*env*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "ListEnv",
        std::move(success_callback),
        std::move(error_callback),
        in_job_details);
  }

  bool ResetEnv(
      const std::vector<std::string>& in_job_details,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "ResetEnv",
        error,
        in_job_details);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error);
  }

  void ResetEnvAsync(
      const std::vector<std::string>& in_job_details,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "ResetEnv",
        std::move(success_callback),
        std::move(error_callback),
        in_job_details);
  }

  bool EmitEvent(
      const std::string& in_name,
      const std::vector<std::string>& in_env,
      bool in_wait,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "EmitEvent",
        error,
        in_name,
        in_env,
        in_wait);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error);
  }

  void EmitEventAsync(
      const std::string& in_name,
      const std::vector<std::string>& in_env,
      bool in_wait,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "EmitEvent",
        std::move(success_callback),
        std::move(error_callback),
        in_name,
        in_env,
        in_wait);
  }

  bool EmitEventWithFile(
      const std::string& in_name,
      const std::vector<std::string>& in_env,
      bool in_wait,
      const base::ScopedFD& in_file,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "EmitEventWithFile",
        error,
        in_name,
        in_env,
        in_wait,
        in_file);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error);
  }

  void EmitEventWithFileAsync(
      const std::string& in_name,
      const std::vector<std::string>& in_env,
      bool in_wait,
      const base::ScopedFD& in_file,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "EmitEventWithFile",
        std::move(success_callback),
        std::move(error_callback),
        in_name,
        in_env,
        in_wait,
        in_file);
  }

  bool NotifyDiskWriteable(
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "NotifyDiskWriteable",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error);
  }

  void NotifyDiskWriteableAsync(
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "NotifyDiskWriteable",
        std::move(success_callback),
        std::move(error_callback));
  }

  bool NotifyDBusAddress(
      const std::string& in_address,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "NotifyDBusAddress",
        error,
        in_address);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error);
  }

  void NotifyDBusAddressAsync(
      const std::string& in_address,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "NotifyDBusAddress",
        std::move(success_callback),
        std::move(error_callback),
        in_address);
  }

  bool NotifyCGroupManagerAddress(
      const std::string& in_address,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "NotifyCGroupManagerAddress",
        error,
        in_address);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error);
  }

  void NotifyCGroupManagerAddressAsync(
      const std::string& in_address,
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "NotifyCGroupManagerAddress",
        std::move(success_callback),
        std::move(error_callback),
        in_address);
  }

  bool EndSession(
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "EndSession",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error);
  }

  void EndSessionAsync(
      base::OnceCallback<void()> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "com.ubuntu.Upstart0_6",
        "EndSession",
        std::move(success_callback),
        std::move(error_callback));
  }

  const std::string& version() const override {
    return property_set_->version.value();
  }

  bool is_version_valid() const override {
    return property_set_->version.is_valid();
  }

  const std::string& log_priority() const override {
    return property_set_->log_priority.value();
  }

  bool is_log_priority_valid() const override {
    return property_set_->log_priority.is_valid();
  }

  void set_log_priority(const std::string& value,
                        base::OnceCallback<void(bool)> callback) override {
    property_set_->log_priority.Set(value, std::move(callback));
  }

 private:
  scoped_refptr<dbus::Bus> bus_;
  std::string service_name_;
  const dbus::ObjectPath object_path_{"/com/ubuntu/Upstart"};
  dbus::ObjectProxy* dbus_object_proxy_;
  std::unique_ptr<PropertySet> property_set_;

};

}  // namespace ubuntu
}  // namespace com

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_CHROMEOS_MACHINE_ID_REGEN_OUT_DEFAULT_GEN_INCLUDE_UPSTART_DBUS_PROXIES_H
