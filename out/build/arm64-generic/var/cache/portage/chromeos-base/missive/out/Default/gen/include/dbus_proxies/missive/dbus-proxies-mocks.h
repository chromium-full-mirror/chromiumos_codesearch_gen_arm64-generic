// Automatic generation of D-Bus interface mock proxies for:
//  - org.chromium.Missived
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_MISSIVE_OUT_DEFAULT_GEN_INCLUDE_DBUS_PROXIES_MISSIVE_DBUS_PROXIES_MOCKS_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_MISSIVE_OUT_DEFAULT_GEN_INCLUDE_DBUS_PROXIES_MISSIVE_DBUS_PROXIES_MOCKS_H
#include <string>
#include <vector>

#include <base/functional/callback_forward.h>
#include <base/logging.h>
#include <brillo/any.h>
#include <brillo/errors/error.h>
#include <brillo/variant_dictionary.h>
#include <gmock/gmock.h>

#include "missive/dbus-proxies.h"

namespace org {
namespace chromium {

// Mock object for MissivedProxyInterface.
class MissivedProxyMock : public MissivedProxyInterface {
 public:
  MissivedProxyMock() = default;
  MissivedProxyMock(const MissivedProxyMock&) = delete;
  MissivedProxyMock& operator=(const MissivedProxyMock&) = delete;

  MOCK_METHOD(bool,
              EnqueueRecord,
              (const ::reporting::EnqueueRecordRequest& /*in_request*/,
               ::reporting::EnqueueRecordResponse* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              EnqueueRecordAsync,
              (const ::reporting::EnqueueRecordRequest& /*in_request*/,
               base::OnceCallback<void(const ::reporting::EnqueueRecordResponse& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              FlushPriority,
              (const ::reporting::FlushPriorityRequest& /*in_request*/,
               ::reporting::FlushPriorityResponse* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              FlushPriorityAsync,
              (const ::reporting::FlushPriorityRequest& /*in_request*/,
               base::OnceCallback<void(const ::reporting::FlushPriorityResponse& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ConfirmRecordUpload,
              (const ::reporting::ConfirmRecordUploadRequest& /*in_request*/,
               ::reporting::ConfirmRecordUploadResponse* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ConfirmRecordUploadAsync,
              (const ::reporting::ConfirmRecordUploadRequest& /*in_request*/,
               base::OnceCallback<void(const ::reporting::ConfirmRecordUploadResponse& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              UpdateConfigInMissive,
              (const ::reporting::UpdateConfigInMissiveRequest& /*in_request*/,
               ::reporting::UpdateConfigInMissiveResponse* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              UpdateConfigInMissiveAsync,
              (const ::reporting::UpdateConfigInMissiveRequest& /*in_request*/,
               base::OnceCallback<void(const ::reporting::UpdateConfigInMissiveResponse& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              UpdateEncryptionKey,
              (const ::reporting::UpdateEncryptionKeyRequest& /*in_request*/,
               ::reporting::UpdateEncryptionKeyResponse* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              UpdateEncryptionKeyAsync,
              (const ::reporting::UpdateEncryptionKeyRequest& /*in_request*/,
               base::OnceCallback<void(const ::reporting::UpdateEncryptionKeyResponse& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_MISSIVE_OUT_DEFAULT_GEN_INCLUDE_DBUS_PROXIES_MISSIVE_DBUS_PROXIES_MOCKS_H
