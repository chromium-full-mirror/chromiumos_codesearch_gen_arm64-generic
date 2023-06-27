// Automatic generation of D-Bus interface mock proxies for:
//  - org.chromium.SmbFs
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_SMBFS_OUT_DEFAULT_GEN_INCLUDE_SMBFS_DBUS_PROXY_MOCKS_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_SMBFS_OUT_DEFAULT_GEN_INCLUDE_SMBFS_DBUS_PROXY_MOCKS_H
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

// Mock object for SmbFsProxyInterface.
class SmbFsProxyMock : public SmbFsProxyInterface {
 public:
  SmbFsProxyMock() = default;
  SmbFsProxyMock(const SmbFsProxyMock&) = delete;
  SmbFsProxyMock& operator=(const SmbFsProxyMock&) = delete;

  MOCK_METHOD(bool,
              OpenIpcChannel,
              (const std::string& /*in_identity*/,
               const base::ScopedFD& /*in_socket*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              OpenIpcChannelAsync,
              (const std::string& /*in_identity*/,
               const base::ScopedFD& /*in_socket*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_SMBFS_OUT_DEFAULT_GEN_INCLUDE_SMBFS_DBUS_PROXY_MOCKS_H
