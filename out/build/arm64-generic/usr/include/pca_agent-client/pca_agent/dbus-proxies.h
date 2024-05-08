// Automatic generation of D-Bus interfaces:
//  - org.chromium.PcaAgent
//  - org.chromium.RksAgent

#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_ATTESTATION_CLIENT_OUT_DEFAULT_GEN_INCLUDE_PCA_AGENT_DBUS_PROXIES_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_ATTESTATION_CLIENT_OUT_DEFAULT_GEN_INCLUDE_PCA_AGENT_DBUS_PROXIES_H
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

// Abstract interface proxy for org::chromium::PcaAgent.
class PcaAgentProxyInterface {
 public:
  virtual ~PcaAgentProxyInterface() = default;

  virtual bool Enroll(
      const attestation::pca_agent::EnrollRequest& in_request,
      attestation::pca_agent::EnrollReply* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void EnrollAsync(
      const attestation::pca_agent::EnrollRequest& in_request,
      base::OnceCallback<void(const attestation::pca_agent::EnrollReply& /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual bool GetCertificate(
      const attestation::pca_agent::GetCertificateRequest& in_request,
      attestation::pca_agent::GetCertificateReply* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetCertificateAsync(
      const attestation::pca_agent::GetCertificateRequest& in_request,
      base::OnceCallback<void(const attestation::pca_agent::GetCertificateReply& /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual const dbus::ObjectPath& GetObjectPath() const = 0;
  virtual dbus::ObjectProxy* GetObjectProxy() const = 0;
};

}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {

// Interface proxy for org::chromium::PcaAgent.
class PcaAgentProxy final : public PcaAgentProxyInterface {
 public:

  PcaAgentProxy(const scoped_refptr<dbus::Bus>& bus) :
      bus_{bus},
      dbus_object_proxy_{
          bus_->GetObjectProxy(service_name_, object_path_)} {
  }

  PcaAgentProxy(const PcaAgentProxy&) = delete;
  PcaAgentProxy& operator=(const PcaAgentProxy&) = delete;

  ~PcaAgentProxy() override {
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

  bool Enroll(
      const attestation::pca_agent::EnrollRequest& in_request,
      attestation::pca_agent::EnrollReply* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PcaAgent",
        "Enroll",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_reply);
  }

  void EnrollAsync(
      const attestation::pca_agent::EnrollRequest& in_request,
      base::OnceCallback<void(const attestation::pca_agent::EnrollReply& /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PcaAgent",
        "Enroll",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  bool GetCertificate(
      const attestation::pca_agent::GetCertificateRequest& in_request,
      attestation::pca_agent::GetCertificateReply* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PcaAgent",
        "GetCertificate",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_reply);
  }

  void GetCertificateAsync(
      const attestation::pca_agent::GetCertificateRequest& in_request,
      base::OnceCallback<void(const attestation::pca_agent::GetCertificateReply& /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.PcaAgent",
        "GetCertificate",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

 private:

  scoped_refptr<dbus::Bus> bus_;
  const std::string service_name_{"org.chromium.PcaAgent"};
  const dbus::ObjectPath object_path_{"/org/chromium/PcaAgent"};
  dbus::ObjectProxy* dbus_object_proxy_;
};

}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {

// Abstract interface proxy for org::chromium::RksAgent.
class RksAgentProxyInterface {
 public:
  virtual ~RksAgentProxyInterface() = default;

  virtual bool GetCertificate(
      attestation::pca_agent::RksCertificateAndSignature* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void GetCertificateAsync(
      base::OnceCallback<void(const attestation::pca_agent::RksCertificateAndSignature& /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void RegisterCertificateFetchedSignalHandler(
      const base::RepeatingCallback<void(const attestation::pca_agent::RksCertificateAndSignature&)>& signal_callback,
      dbus::ObjectProxy::OnConnectedCallback on_connected_callback) = 0;

  virtual const dbus::ObjectPath& GetObjectPath() const = 0;
  virtual dbus::ObjectProxy* GetObjectProxy() const = 0;
};

}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {

// Interface proxy for org::chromium::RksAgent.
class RksAgentProxy final : public RksAgentProxyInterface {
 public:

  RksAgentProxy(const scoped_refptr<dbus::Bus>& bus) :
      bus_{bus},
      dbus_object_proxy_{
          bus_->GetObjectProxy(service_name_, object_path_)} {
  }

  RksAgentProxy(const RksAgentProxy&) = delete;
  RksAgentProxy& operator=(const RksAgentProxy&) = delete;

  ~RksAgentProxy() override {
  }

  void RegisterCertificateFetchedSignalHandler(
      const base::RepeatingCallback<void(const attestation::pca_agent::RksCertificateAndSignature&)>& signal_callback,
      dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    brillo::dbus_utils::ConnectToSignal(
        dbus_object_proxy_,
        "org.chromium.RksAgent",
        "CertificateFetched",
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

  bool GetCertificate(
      attestation::pca_agent::RksCertificateAndSignature* out_reply,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.RksAgent",
        "GetCertificate",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_reply);
  }

  void GetCertificateAsync(
      base::OnceCallback<void(const attestation::pca_agent::RksCertificateAndSignature& /*reply*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.RksAgent",
        "GetCertificate",
        std::move(success_callback),
        std::move(error_callback));
  }

 private:

  scoped_refptr<dbus::Bus> bus_;
  const std::string service_name_{"org.chromium.PcaAgent"};
  const dbus::ObjectPath object_path_{"/org/chromium/PcaAgent"};
  dbus::ObjectProxy* dbus_object_proxy_;
};

}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_ATTESTATION_CLIENT_OUT_DEFAULT_GEN_INCLUDE_PCA_AGENT_DBUS_PROXIES_H
