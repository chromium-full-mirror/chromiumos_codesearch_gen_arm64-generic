// Automatic generation of D-Bus interface mock proxies for:
//  - org.chromium.PcaAgent
//  - org.chromium.RksAgent
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_ATTESTATION_OUT_DEFAULT_GEN_INCLUDE_ATTESTATION_PCA_AGENT_DBUS_PROXY_MOCKS_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_ATTESTATION_OUT_DEFAULT_GEN_INCLUDE_ATTESTATION_PCA_AGENT_DBUS_PROXY_MOCKS_H
#include <string>
#include <vector>

#include <base/functional/callback_forward.h>
#include <base/logging.h>
#include <brillo/any.h>
#include <brillo/errors/error.h>
#include <brillo/variant_dictionary.h>
#include <gmock/gmock.h>

#include "attestation/pca_agent/dbus-proxies.h"

namespace org {
namespace chromium {

// Mock object for PcaAgentProxyInterface.
class PcaAgentProxyMock : public PcaAgentProxyInterface {
 public:
  PcaAgentProxyMock() = default;
  PcaAgentProxyMock(const PcaAgentProxyMock&) = delete;
  PcaAgentProxyMock& operator=(const PcaAgentProxyMock&) = delete;

  MOCK_METHOD(bool,
              Enroll,
              (const attestation::pca_agent::EnrollRequest& /*in_request*/,
               attestation::pca_agent::EnrollReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              EnrollAsync,
              (const attestation::pca_agent::EnrollRequest& /*in_request*/,
               base::OnceCallback<void(const attestation::pca_agent::EnrollReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetCertificate,
              (const attestation::pca_agent::GetCertificateRequest& /*in_request*/,
               attestation::pca_agent::GetCertificateReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetCertificateAsync,
              (const attestation::pca_agent::GetCertificateRequest& /*in_request*/,
               base::OnceCallback<void(const attestation::pca_agent::GetCertificateReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {

// Mock object for RksAgentProxyInterface.
class RksAgentProxyMock : public RksAgentProxyInterface {
 public:
  RksAgentProxyMock() = default;
  RksAgentProxyMock(const RksAgentProxyMock&) = delete;
  RksAgentProxyMock& operator=(const RksAgentProxyMock&) = delete;

  MOCK_METHOD(bool,
              GetCertificate,
              (attestation::pca_agent::RksCertificateAndSignature* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetCertificateAsync,
              (base::OnceCallback<void(const attestation::pca_agent::RksCertificateAndSignature& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  void RegisterCertificateFetchedSignalHandler(
    const base::RepeatingCallback<void(const attestation::pca_agent::RksCertificateAndSignature&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterCertificateFetchedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterCertificateFetchedSignalHandler,
              (const base::RepeatingCallback<void(const attestation::pca_agent::RksCertificateAndSignature&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_ATTESTATION_OUT_DEFAULT_GEN_INCLUDE_ATTESTATION_PCA_AGENT_DBUS_PROXY_MOCKS_H
