// Automatic generation of D-Bus interface mock proxies for:
//  - org.chromium.DlpFilesPolicyService
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DLP_OUT_DEFAULT_GEN_INCLUDE_DLP_DBUS_PROXY_MOCKS_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DLP_OUT_DEFAULT_GEN_INCLUDE_DLP_DBUS_PROXY_MOCKS_H
#include <string>
#include <vector>

#include <base/functional/callback_forward.h>
#include <base/logging.h>
#include <brillo/any.h>
#include <brillo/errors/error.h>
#include <brillo/variant_dictionary.h>
#include <gmock/gmock.h>

#include "dbus-proxies.h"

namespace org {
namespace chromium {

// Mock object for DlpFilesPolicyServiceProxyInterface.
class DlpFilesPolicyServiceProxyMock : public DlpFilesPolicyServiceProxyInterface {
 public:
  DlpFilesPolicyServiceProxyMock() = default;
  DlpFilesPolicyServiceProxyMock(const DlpFilesPolicyServiceProxyMock&) = delete;
  DlpFilesPolicyServiceProxyMock& operator=(const DlpFilesPolicyServiceProxyMock&) = delete;

  MOCK_METHOD(bool,
              IsDlpPolicyMatched,
              (const std::vector<uint8_t>& /*in_request*/,
               std::vector<uint8_t>* /*out_response*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              IsDlpPolicyMatchedAsync,
              (const std::vector<uint8_t>& /*in_request*/,
               base::OnceCallback<void(const std::vector<uint8_t>& /*response*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              IsFilesTransferRestricted,
              (const std::vector<uint8_t>& /*in_request*/,
               std::vector<uint8_t>* /*out_response*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              IsFilesTransferRestrictedAsync,
              (const std::vector<uint8_t>& /*in_request*/,
               base::OnceCallback<void(const std::vector<uint8_t>& /*response*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DLP_OUT_DEFAULT_GEN_INCLUDE_DLP_DBUS_PROXY_MOCKS_H
