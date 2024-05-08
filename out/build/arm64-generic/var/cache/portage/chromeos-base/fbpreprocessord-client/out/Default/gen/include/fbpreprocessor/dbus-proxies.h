// Automatic generation of D-Bus interfaces:
//  - org.chromium.FbPreprocessor

#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_FBPREPROCESSORD_CLIENT_OUT_DEFAULT_GEN_INCLUDE_FBPREPROCESSOR_DBUS_PROXIES_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_FBPREPROCESSORD_CLIENT_OUT_DEFAULT_GEN_INCLUDE_FBPREPROCESSOR_DBUS_PROXIES_H
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

// Abstract interface proxy for org::chromium::FbPreprocessor.
class FbPreprocessorProxyInterface {
 public:
  virtual ~FbPreprocessorProxyInterface() = default;

  virtual bool GetDebugDumps(
      fbpreprocessor::DebugDumps* out_DebugDumps,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetDebugDumpsAsync(
      base::OnceCallback<void(const fbpreprocessor::DebugDumps& /*DebugDumps*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual const dbus::ObjectPath& GetObjectPath() const = 0;
  virtual dbus::ObjectProxy* GetObjectProxy() const = 0;
};

}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {

// Interface proxy for org::chromium::FbPreprocessor.
class FbPreprocessorProxy final : public FbPreprocessorProxyInterface {
 public:

  FbPreprocessorProxy(const scoped_refptr<dbus::Bus>& bus) :
      bus_{bus},
      dbus_object_proxy_{
          bus_->GetObjectProxy(service_name_, object_path_)} {
  }

  FbPreprocessorProxy(const FbPreprocessorProxy&) = delete;
  FbPreprocessorProxy& operator=(const FbPreprocessorProxy&) = delete;

  ~FbPreprocessorProxy() override {
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

  bool GetDebugDumps(
      fbpreprocessor::DebugDumps* out_DebugDumps,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.FbPreprocessor",
        "GetDebugDumps",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_DebugDumps);
  }

  void GetDebugDumpsAsync(
      base::OnceCallback<void(const fbpreprocessor::DebugDumps& /*DebugDumps*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.FbPreprocessor",
        "GetDebugDumps",
        std::move(success_callback),
        std::move(error_callback));
  }

 private:

  scoped_refptr<dbus::Bus> bus_;
  const std::string service_name_{"org.chromium.FbPreprocessor"};
  const dbus::ObjectPath object_path_{"/org/chromium/FbPreprocessor"};
  dbus::ObjectProxy* dbus_object_proxy_;
};

}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_FBPREPROCESSORD_CLIENT_OUT_DEFAULT_GEN_INCLUDE_FBPREPROCESSOR_DBUS_PROXIES_H
