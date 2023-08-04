// Automatic generation of D-Bus interface mock proxies for:
//  - org.chromium.Spaced
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_SPACED_OUT_DEFAULT_GEN_INCLUDE_SPACED_DBUS_PROXY_MOCKS_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_SPACED_OUT_DEFAULT_GEN_INCLUDE_SPACED_DBUS_PROXY_MOCKS_H
#include <string>
#include <vector>

#include <base/functional/callback_forward.h>
#include <base/logging.h>
#include <brillo/any.h>
#include <brillo/errors/error.h>
#include <brillo/variant_dictionary.h>
#include <gmock/gmock.h>

#include "spaced/dbus-proxies.h"

namespace org {
namespace chromium {

// Mock object for SpacedProxyInterface.
class SpacedProxyMock : public SpacedProxyInterface {
 public:
  SpacedProxyMock() = default;
  SpacedProxyMock(const SpacedProxyMock&) = delete;
  SpacedProxyMock& operator=(const SpacedProxyMock&) = delete;

  MOCK_METHOD(bool,
              GetFreeDiskSpace,
              (const std::string& /*in_path*/,
               int64_t* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetFreeDiskSpaceAsync,
              (const std::string& /*in_path*/,
               base::OnceCallback<void(int64_t /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetTotalDiskSpace,
              (const std::string& /*in_path*/,
               int64_t* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetTotalDiskSpaceAsync,
              (const std::string& /*in_path*/,
               base::OnceCallback<void(int64_t /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetRootDeviceSize,
              (int64_t* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetRootDeviceSizeAsync,
              (base::OnceCallback<void(int64_t /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              IsQuotaSupported,
              (const std::string& /*in_path*/,
               bool* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              IsQuotaSupportedAsync,
              (const std::string& /*in_path*/,
               base::OnceCallback<void(bool /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetQuotaCurrentSpaceForUid,
              (const std::string& /*in_path*/,
               uint32_t /*in_uid*/,
               int64_t* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetQuotaCurrentSpaceForUidAsync,
              (const std::string& /*in_path*/,
               uint32_t /*in_uid*/,
               base::OnceCallback<void(int64_t /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetQuotaCurrentSpaceForGid,
              (const std::string& /*in_path*/,
               uint32_t /*in_gid*/,
               int64_t* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetQuotaCurrentSpaceForGidAsync,
              (const std::string& /*in_path*/,
               uint32_t /*in_gid*/,
               base::OnceCallback<void(int64_t /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetQuotaCurrentSpaceForProjectId,
              (const std::string& /*in_path*/,
               uint32_t /*in_project_id*/,
               int64_t* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetQuotaCurrentSpaceForProjectIdAsync,
              (const std::string& /*in_path*/,
               uint32_t /*in_project_id*/,
               base::OnceCallback<void(int64_t /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetProjectId,
              (const base::ScopedFD& /*in_fd*/,
               uint32_t /*in_project_id*/,
               spaced::SetProjectIdReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetProjectIdAsync,
              (const base::ScopedFD& /*in_fd*/,
               uint32_t /*in_project_id*/,
               base::OnceCallback<void(const spaced::SetProjectIdReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetProjectInheritanceFlag,
              (const base::ScopedFD& /*in_fd*/,
               bool /*in_enable*/,
               spaced::SetProjectInheritanceFlagReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetProjectInheritanceFlagAsync,
              (const base::ScopedFD& /*in_fd*/,
               bool /*in_enable*/,
               base::OnceCallback<void(const spaced::SetProjectInheritanceFlagReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  void RegisterStatefulDiskSpaceUpdateSignalHandler(
    const base::RepeatingCallback<void(const spaced::StatefulDiskSpaceUpdate&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterStatefulDiskSpaceUpdateSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterStatefulDiskSpaceUpdateSignalHandler,
              (const base::RepeatingCallback<void(const spaced::StatefulDiskSpaceUpdate&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_SPACED_OUT_DEFAULT_GEN_INCLUDE_SPACED_DBUS_PROXY_MOCKS_H
