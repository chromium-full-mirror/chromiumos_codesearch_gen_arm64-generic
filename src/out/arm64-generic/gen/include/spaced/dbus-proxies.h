// Automatic generation of D-Bus interfaces:
//  - org.chromium.Spaced
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_SPACED_OUT_DEFAULT_GEN_INCLUDE_SPACED_DBUS_PROXIES_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_SPACED_OUT_DEFAULT_GEN_INCLUDE_SPACED_DBUS_PROXIES_H
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

// Abstract interface proxy for org::chromium::Spaced.
class SpacedProxyInterface {
 public:
  virtual ~SpacedProxyInterface() = default;

  // Get free disk space available for the given file path.
  virtual bool GetFreeDiskSpace(
      const std::string& in_path,
      int64_t* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Get free disk space available for the given file path.
  virtual void GetFreeDiskSpaceAsync(
      const std::string& in_path,
      base::OnceCallback<void(int64_t /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Get total disk space available.
  virtual bool GetTotalDiskSpace(
      const std::string& in_path,
      int64_t* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Get total disk space available.
  virtual void GetTotalDiskSpaceAsync(
      const std::string& in_path,
      base::OnceCallback<void(int64_t /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Get the size of the root storage device.
  virtual bool GetRootDeviceSize(
      int64_t* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Get the size of the root storage device.
  virtual void GetRootDeviceSizeAsync(
      base::OnceCallback<void(int64_t /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Returns whether the given path is mounted with quota option enabled.
  virtual bool IsQuotaSupported(
      const std::string& in_path,
      bool* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Returns whether the given path is mounted with quota option enabled.
  virtual void IsQuotaSupportedAsync(
      const std::string& in_path,
      base::OnceCallback<void(bool /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Returns the disk space currently used by the given UID.
  virtual bool GetQuotaCurrentSpaceForUid(
      const std::string& in_path,
      uint32_t in_uid,
      int64_t* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Returns the disk space currently used by the given UID.
  virtual void GetQuotaCurrentSpaceForUidAsync(
      const std::string& in_path,
      uint32_t in_uid,
      base::OnceCallback<void(int64_t /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Returns the disk space currently used by the given GID.
  virtual bool GetQuotaCurrentSpaceForGid(
      const std::string& in_path,
      uint32_t in_gid,
      int64_t* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Returns the disk space currently used by the given GID.
  virtual void GetQuotaCurrentSpaceForGidAsync(
      const std::string& in_path,
      uint32_t in_gid,
      base::OnceCallback<void(int64_t /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Returns the disk space currently used by the given project ID.
  virtual bool GetQuotaCurrentSpaceForProjectId(
      const std::string& in_path,
      uint32_t in_project_id,
      int64_t* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Returns the disk space currently used by the given project ID.
  virtual void GetQuotaCurrentSpaceForProjectIdAsync(
      const std::string& in_path,
      uint32_t in_project_id,
      base::OnceCallback<void(int64_t /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Sets the project ID to the given file.
  virtual bool SetProjectId(
      const base::ScopedFD& in_fd,
      uint32_t in_project_id,
      spaced::SetProjectIdReply* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Sets the project ID to the given file.
  virtual void SetProjectIdAsync(
      const base::ScopedFD& in_fd,
      uint32_t in_project_id,
      base::OnceCallback<void(const spaced::SetProjectIdReply& /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Sets the project inheritance flag to the given file.
  virtual bool SetProjectInheritanceFlag(
      const base::ScopedFD& in_fd,
      bool in_enable,
      spaced::SetProjectInheritanceFlagReply* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Sets the project inheritance flag to the given file.
  virtual void SetProjectInheritanceFlagAsync(
      const base::ScopedFD& in_fd,
      bool in_enable,
      base::OnceCallback<void(const spaced::SetProjectInheritanceFlagReply& /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void RegisterStatefulDiskSpaceUpdateSignalHandler(
      const base::RepeatingCallback<void(const spaced::StatefulDiskSpaceUpdate&)>& signal_callback,
      dbus::ObjectProxy::OnConnectedCallback on_connected_callback) = 0;

  virtual const dbus::ObjectPath& GetObjectPath() const = 0;
  virtual dbus::ObjectProxy* GetObjectProxy() const = 0;
};

}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {

// Interface proxy for org::chromium::Spaced.
class SpacedProxy final : public SpacedProxyInterface {
 public:
  SpacedProxy(const scoped_refptr<dbus::Bus>& bus) :
      bus_{bus},
      dbus_object_proxy_{
          bus_->GetObjectProxy(service_name_, object_path_)} {
  }

  SpacedProxy(const SpacedProxy&) = delete;
  SpacedProxy& operator=(const SpacedProxy&) = delete;

  ~SpacedProxy() override {
  }

  void RegisterStatefulDiskSpaceUpdateSignalHandler(
      const base::RepeatingCallback<void(const spaced::StatefulDiskSpaceUpdate&)>& signal_callback,
      dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    brillo::dbus_utils::ConnectToSignal(
        dbus_object_proxy_,
        "org.chromium.Spaced",
        "StatefulDiskSpaceUpdate",
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

  // Get free disk space available for the given file path.
  bool GetFreeDiskSpace(
      const std::string& in_path,
      int64_t* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.Spaced",
        "GetFreeDiskSpace",
        error,
        in_path);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_reply);
  }

  // Get free disk space available for the given file path.
  void GetFreeDiskSpaceAsync(
      const std::string& in_path,
      base::OnceCallback<void(int64_t /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.Spaced",
        "GetFreeDiskSpace",
        std::move(success_callback),
        std::move(error_callback),
        in_path);
  }

  // Get total disk space available.
  bool GetTotalDiskSpace(
      const std::string& in_path,
      int64_t* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.Spaced",
        "GetTotalDiskSpace",
        error,
        in_path);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_reply);
  }

  // Get total disk space available.
  void GetTotalDiskSpaceAsync(
      const std::string& in_path,
      base::OnceCallback<void(int64_t /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.Spaced",
        "GetTotalDiskSpace",
        std::move(success_callback),
        std::move(error_callback),
        in_path);
  }

  // Get the size of the root storage device.
  bool GetRootDeviceSize(
      int64_t* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.Spaced",
        "GetRootDeviceSize",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_reply);
  }

  // Get the size of the root storage device.
  void GetRootDeviceSizeAsync(
      base::OnceCallback<void(int64_t /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.Spaced",
        "GetRootDeviceSize",
        std::move(success_callback),
        std::move(error_callback));
  }

  // Returns whether the given path is mounted with quota option enabled.
  bool IsQuotaSupported(
      const std::string& in_path,
      bool* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.Spaced",
        "IsQuotaSupported",
        error,
        in_path);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_reply);
  }

  // Returns whether the given path is mounted with quota option enabled.
  void IsQuotaSupportedAsync(
      const std::string& in_path,
      base::OnceCallback<void(bool /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.Spaced",
        "IsQuotaSupported",
        std::move(success_callback),
        std::move(error_callback),
        in_path);
  }

  // Returns the disk space currently used by the given UID.
  bool GetQuotaCurrentSpaceForUid(
      const std::string& in_path,
      uint32_t in_uid,
      int64_t* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.Spaced",
        "GetQuotaCurrentSpaceForUid",
        error,
        in_path,
        in_uid);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_reply);
  }

  // Returns the disk space currently used by the given UID.
  void GetQuotaCurrentSpaceForUidAsync(
      const std::string& in_path,
      uint32_t in_uid,
      base::OnceCallback<void(int64_t /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.Spaced",
        "GetQuotaCurrentSpaceForUid",
        std::move(success_callback),
        std::move(error_callback),
        in_path,
        in_uid);
  }

  // Returns the disk space currently used by the given GID.
  bool GetQuotaCurrentSpaceForGid(
      const std::string& in_path,
      uint32_t in_gid,
      int64_t* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.Spaced",
        "GetQuotaCurrentSpaceForGid",
        error,
        in_path,
        in_gid);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_reply);
  }

  // Returns the disk space currently used by the given GID.
  void GetQuotaCurrentSpaceForGidAsync(
      const std::string& in_path,
      uint32_t in_gid,
      base::OnceCallback<void(int64_t /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.Spaced",
        "GetQuotaCurrentSpaceForGid",
        std::move(success_callback),
        std::move(error_callback),
        in_path,
        in_gid);
  }

  // Returns the disk space currently used by the given project ID.
  bool GetQuotaCurrentSpaceForProjectId(
      const std::string& in_path,
      uint32_t in_project_id,
      int64_t* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.Spaced",
        "GetQuotaCurrentSpaceForProjectId",
        error,
        in_path,
        in_project_id);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_reply);
  }

  // Returns the disk space currently used by the given project ID.
  void GetQuotaCurrentSpaceForProjectIdAsync(
      const std::string& in_path,
      uint32_t in_project_id,
      base::OnceCallback<void(int64_t /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.Spaced",
        "GetQuotaCurrentSpaceForProjectId",
        std::move(success_callback),
        std::move(error_callback),
        in_path,
        in_project_id);
  }

  // Sets the project ID to the given file.
  bool SetProjectId(
      const base::ScopedFD& in_fd,
      uint32_t in_project_id,
      spaced::SetProjectIdReply* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.Spaced",
        "SetProjectId",
        error,
        in_fd,
        in_project_id);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_reply);
  }

  // Sets the project ID to the given file.
  void SetProjectIdAsync(
      const base::ScopedFD& in_fd,
      uint32_t in_project_id,
      base::OnceCallback<void(const spaced::SetProjectIdReply& /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.Spaced",
        "SetProjectId",
        std::move(success_callback),
        std::move(error_callback),
        in_fd,
        in_project_id);
  }

  // Sets the project inheritance flag to the given file.
  bool SetProjectInheritanceFlag(
      const base::ScopedFD& in_fd,
      bool in_enable,
      spaced::SetProjectInheritanceFlagReply* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.Spaced",
        "SetProjectInheritanceFlag",
        error,
        in_fd,
        in_enable);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_reply);
  }

  // Sets the project inheritance flag to the given file.
  void SetProjectInheritanceFlagAsync(
      const base::ScopedFD& in_fd,
      bool in_enable,
      base::OnceCallback<void(const spaced::SetProjectInheritanceFlagReply& /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.Spaced",
        "SetProjectInheritanceFlag",
        std::move(success_callback),
        std::move(error_callback),
        in_fd,
        in_enable);
  }

 private:
  scoped_refptr<dbus::Bus> bus_;
  const std::string service_name_{"org.chromium.Spaced"};
  const dbus::ObjectPath object_path_{"/org/chromium/Spaced"};
  dbus::ObjectProxy* dbus_object_proxy_;

};

}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_SPACED_OUT_DEFAULT_GEN_INCLUDE_SPACED_DBUS_PROXIES_H
