// Automatic generation of D-Bus interfaces:
//  - org.chromium.DeviceManagement

#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DEVICE_MANAGEMENT_CLIENT_OUT_DEFAULT_GEN_INCLUDE_DEVICE_MANAGEMENT_DBUS_PROXIES_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DEVICE_MANAGEMENT_CLIENT_OUT_DEFAULT_GEN_INCLUDE_DEVICE_MANAGEMENT_DBUS_PROXIES_H
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

// Abstract interface proxy for org::chromium::DeviceManagement.
class DeviceManagementProxyInterface {
 public:
  virtual ~DeviceManagementProxyInterface() = default;

  virtual bool InstallAttributesGet(
      const device_management::InstallAttributesGetRequest& in_request,
      device_management::InstallAttributesGetReply* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void InstallAttributesGetAsync(
      const device_management::InstallAttributesGetRequest& in_request,
      base::OnceCallback<void(const device_management::InstallAttributesGetReply& /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool InstallAttributesSet(
      const device_management::InstallAttributesSetRequest& in_request,
      device_management::InstallAttributesSetReply* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void InstallAttributesSetAsync(
      const device_management::InstallAttributesSetRequest& in_request,
      base::OnceCallback<void(const device_management::InstallAttributesSetReply& /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool InstallAttributesFinalize(
      const device_management::InstallAttributesFinalizeRequest& in_request,
      device_management::InstallAttributesFinalizeReply* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void InstallAttributesFinalizeAsync(
      const device_management::InstallAttributesFinalizeRequest& in_request,
      base::OnceCallback<void(const device_management::InstallAttributesFinalizeReply& /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool InstallAttributesGetStatus(
      const device_management::InstallAttributesGetStatusRequest& in_request,
      device_management::InstallAttributesGetStatusReply* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void InstallAttributesGetStatusAsync(
      const device_management::InstallAttributesGetStatusRequest& in_request,
      base::OnceCallback<void(const device_management::InstallAttributesGetStatusReply& /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool EnterpriseOwnedGetStatus(
      const device_management::EnterpriseOwnedGetStatusRequest& in_request,
      device_management::EnterpriseOwnedGetStatusReply* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void EnterpriseOwnedGetStatusAsync(
      const device_management::EnterpriseOwnedGetStatusRequest& in_request,
      base::OnceCallback<void(const device_management::EnterpriseOwnedGetStatusReply& /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool GetFirmwareManagementParameters(
      const device_management::GetFirmwareManagementParametersRequest& in_request,
      device_management::GetFirmwareManagementParametersReply* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetFirmwareManagementParametersAsync(
      const device_management::GetFirmwareManagementParametersRequest& in_request,
      base::OnceCallback<void(const device_management::GetFirmwareManagementParametersReply& /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool RemoveFirmwareManagementParameters(
      const device_management::RemoveFirmwareManagementParametersRequest& in_request,
      device_management::RemoveFirmwareManagementParametersReply* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void RemoveFirmwareManagementParametersAsync(
      const device_management::RemoveFirmwareManagementParametersRequest& in_request,
      base::OnceCallback<void(const device_management::RemoveFirmwareManagementParametersReply& /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool SetFirmwareManagementParameters(
      const device_management::SetFirmwareManagementParametersRequest& in_request,
      device_management::SetFirmwareManagementParametersReply* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void SetFirmwareManagementParametersAsync(
      const device_management::SetFirmwareManagementParametersRequest& in_request,
      base::OnceCallback<void(const device_management::SetFirmwareManagementParametersReply& /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual const dbus::ObjectPath& GetObjectPath() const = 0;
  virtual dbus::ObjectProxy* GetObjectProxy() const = 0;
};

}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {

// Interface proxy for org::chromium::DeviceManagement.
class DeviceManagementProxy final : public DeviceManagementProxyInterface {
 public:

  DeviceManagementProxy(const scoped_refptr<dbus::Bus>& bus) :
      bus_{bus},
      dbus_object_proxy_{
          bus_->GetObjectProxy(service_name_, object_path_)} {
  }

  DeviceManagementProxy(const DeviceManagementProxy&) = delete;
  DeviceManagementProxy& operator=(const DeviceManagementProxy&) = delete;

  ~DeviceManagementProxy() override {
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

  bool InstallAttributesGet(
      const device_management::InstallAttributesGetRequest& in_request,
      device_management::InstallAttributesGetReply* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.DeviceManagement",
        "InstallAttributesGet",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_reply);
  }

  void InstallAttributesGetAsync(
      const device_management::InstallAttributesGetRequest& in_request,
      base::OnceCallback<void(const device_management::InstallAttributesGetReply& /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.DeviceManagement",
        "InstallAttributesGet",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool InstallAttributesSet(
      const device_management::InstallAttributesSetRequest& in_request,
      device_management::InstallAttributesSetReply* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.DeviceManagement",
        "InstallAttributesSet",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_reply);
  }

  void InstallAttributesSetAsync(
      const device_management::InstallAttributesSetRequest& in_request,
      base::OnceCallback<void(const device_management::InstallAttributesSetReply& /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.DeviceManagement",
        "InstallAttributesSet",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool InstallAttributesFinalize(
      const device_management::InstallAttributesFinalizeRequest& in_request,
      device_management::InstallAttributesFinalizeReply* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.DeviceManagement",
        "InstallAttributesFinalize",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_reply);
  }

  void InstallAttributesFinalizeAsync(
      const device_management::InstallAttributesFinalizeRequest& in_request,
      base::OnceCallback<void(const device_management::InstallAttributesFinalizeReply& /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.DeviceManagement",
        "InstallAttributesFinalize",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool InstallAttributesGetStatus(
      const device_management::InstallAttributesGetStatusRequest& in_request,
      device_management::InstallAttributesGetStatusReply* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.DeviceManagement",
        "InstallAttributesGetStatus",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_reply);
  }

  void InstallAttributesGetStatusAsync(
      const device_management::InstallAttributesGetStatusRequest& in_request,
      base::OnceCallback<void(const device_management::InstallAttributesGetStatusReply& /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.DeviceManagement",
        "InstallAttributesGetStatus",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool EnterpriseOwnedGetStatus(
      const device_management::EnterpriseOwnedGetStatusRequest& in_request,
      device_management::EnterpriseOwnedGetStatusReply* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.DeviceManagement",
        "EnterpriseOwnedGetStatus",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_reply);
  }

  void EnterpriseOwnedGetStatusAsync(
      const device_management::EnterpriseOwnedGetStatusRequest& in_request,
      base::OnceCallback<void(const device_management::EnterpriseOwnedGetStatusReply& /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.DeviceManagement",
        "EnterpriseOwnedGetStatus",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool GetFirmwareManagementParameters(
      const device_management::GetFirmwareManagementParametersRequest& in_request,
      device_management::GetFirmwareManagementParametersReply* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.DeviceManagement",
        "GetFirmwareManagementParameters",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_reply);
  }

  void GetFirmwareManagementParametersAsync(
      const device_management::GetFirmwareManagementParametersRequest& in_request,
      base::OnceCallback<void(const device_management::GetFirmwareManagementParametersReply& /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.DeviceManagement",
        "GetFirmwareManagementParameters",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool RemoveFirmwareManagementParameters(
      const device_management::RemoveFirmwareManagementParametersRequest& in_request,
      device_management::RemoveFirmwareManagementParametersReply* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.DeviceManagement",
        "RemoveFirmwareManagementParameters",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_reply);
  }

  void RemoveFirmwareManagementParametersAsync(
      const device_management::RemoveFirmwareManagementParametersRequest& in_request,
      base::OnceCallback<void(const device_management::RemoveFirmwareManagementParametersReply& /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.DeviceManagement",
        "RemoveFirmwareManagementParameters",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool SetFirmwareManagementParameters(
      const device_management::SetFirmwareManagementParametersRequest& in_request,
      device_management::SetFirmwareManagementParametersReply* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.DeviceManagement",
        "SetFirmwareManagementParameters",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_reply);
  }

  void SetFirmwareManagementParametersAsync(
      const device_management::SetFirmwareManagementParametersRequest& in_request,
      base::OnceCallback<void(const device_management::SetFirmwareManagementParametersReply& /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.DeviceManagement",
        "SetFirmwareManagementParameters",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

 private:

  scoped_refptr<dbus::Bus> bus_;
  const std::string service_name_{"org.chromium.DeviceManagement"};
  const dbus::ObjectPath object_path_{"/org/chromium/DeviceManagement"};
  dbus::ObjectProxy* dbus_object_proxy_;
};

}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DEVICE_MANAGEMENT_CLIENT_OUT_DEFAULT_GEN_INCLUDE_DEVICE_MANAGEMENT_DBUS_PROXIES_H
