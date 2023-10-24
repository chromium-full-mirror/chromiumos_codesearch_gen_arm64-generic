// Automatic generation of D-Bus interface mock proxies for:
//  - org.chromium.BootLockboxInterface
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_BOOTLOCKBOX_CLIENT_OUT_DEFAULT_GEN_INCLUDE_BOOTLOCKBOX_DBUS_PROXY_MOCKS_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_BOOTLOCKBOX_CLIENT_OUT_DEFAULT_GEN_INCLUDE_BOOTLOCKBOX_DBUS_PROXY_MOCKS_H
#include <string>
#include <vector>

#include <base/functional/callback_forward.h>
#include <base/logging.h>
#include <brillo/any.h>
#include <brillo/errors/error.h>
#include <brillo/variant_dictionary.h>
#include <gmock/gmock.h>

#include "bootlockbox/dbus-proxies.h"

namespace org {
namespace chromium {

// Mock object for BootLockboxInterfaceProxyInterface.
class BootLockboxInterfaceProxyMock : public BootLockboxInterfaceProxyInterface {
 public:
  BootLockboxInterfaceProxyMock() = default;
  BootLockboxInterfaceProxyMock(const BootLockboxInterfaceProxyMock&) = delete;
  BootLockboxInterfaceProxyMock& operator=(const BootLockboxInterfaceProxyMock&) = delete;

  MOCK_METHOD(bool,
              StoreBootLockbox,
              (const bootlockbox::StoreBootLockboxRequest& /*in_request*/,
               bootlockbox::StoreBootLockboxReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              StoreBootLockboxAsync,
              (const bootlockbox::StoreBootLockboxRequest& /*in_request*/,
               base::OnceCallback<void(const bootlockbox::StoreBootLockboxReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ReadBootLockbox,
              (const bootlockbox::ReadBootLockboxRequest& /*in_request*/,
               bootlockbox::ReadBootLockboxReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ReadBootLockboxAsync,
              (const bootlockbox::ReadBootLockboxRequest& /*in_request*/,
               base::OnceCallback<void(const bootlockbox::ReadBootLockboxReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              FinalizeBootLockbox,
              (const bootlockbox::FinalizeNVRamBootLockboxRequest& /*in_request*/,
               bootlockbox::FinalizeBootLockboxReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              FinalizeBootLockboxAsync,
              (const bootlockbox::FinalizeNVRamBootLockboxRequest& /*in_request*/,
               base::OnceCallback<void(const bootlockbox::FinalizeBootLockboxReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_BOOTLOCKBOX_CLIENT_OUT_DEFAULT_GEN_INCLUDE_BOOTLOCKBOX_DBUS_PROXY_MOCKS_H
