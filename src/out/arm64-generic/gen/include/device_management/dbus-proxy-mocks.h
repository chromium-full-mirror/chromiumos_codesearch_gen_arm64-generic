// Automatic generation of D-Bus interface mock proxies for:
//  - org.chromium.DeviceManagement
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DEVICE_MANAGEMENT_CLIENT_OUT_DEFAULT_GEN_INCLUDE_DEVICE_MANAGEMENT_DBUS_PROXY_MOCKS_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DEVICE_MANAGEMENT_CLIENT_OUT_DEFAULT_GEN_INCLUDE_DEVICE_MANAGEMENT_DBUS_PROXY_MOCKS_H
#include <string>
#include <vector>

#include <base/functional/callback_forward.h>
#include <base/logging.h>
#include <brillo/any.h>
#include <brillo/errors/error.h>
#include <brillo/variant_dictionary.h>
#include <gmock/gmock.h>

#include "device_management/dbus-proxies.h"

namespace org {
namespace chromium {

// Mock object for DeviceManagementProxyInterface.
class DeviceManagementProxyMock : public DeviceManagementProxyInterface {
 public:
  DeviceManagementProxyMock() = default;
  DeviceManagementProxyMock(const DeviceManagementProxyMock&) = delete;
  DeviceManagementProxyMock& operator=(const DeviceManagementProxyMock&) = delete;

  MOCK_METHOD(bool,
              InstallAttributesGet,
              (const device_management::InstallAttributesGetRequest& /*in_request*/,
               device_management::InstallAttributesGetReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              InstallAttributesGetAsync,
              (const device_management::InstallAttributesGetRequest& /*in_request*/,
               base::OnceCallback<void(const device_management::InstallAttributesGetReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              InstallAttributesSet,
              (const device_management::InstallAttributesSetRequest& /*in_request*/,
               device_management::InstallAttributesSetReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              InstallAttributesSetAsync,
              (const device_management::InstallAttributesSetRequest& /*in_request*/,
               base::OnceCallback<void(const device_management::InstallAttributesSetReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              InstallAttributesFinalize,
              (const device_management::InstallAttributesFinalizeRequest& /*in_request*/,
               device_management::InstallAttributesFinalizeReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              InstallAttributesFinalizeAsync,
              (const device_management::InstallAttributesFinalizeRequest& /*in_request*/,
               base::OnceCallback<void(const device_management::InstallAttributesFinalizeReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              InstallAttributesGetStatus,
              (const device_management::InstallAttributesGetStatusRequest& /*in_request*/,
               device_management::InstallAttributesGetStatusReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              InstallAttributesGetStatusAsync,
              (const device_management::InstallAttributesGetStatusRequest& /*in_request*/,
               base::OnceCallback<void(const device_management::InstallAttributesGetStatusReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              EnterpriseOwnedGetStatus,
              (const device_management::EnterpriseOwnedGetStatusRequest& /*in_request*/,
               device_management::EnterpriseOwnedGetStatusReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              EnterpriseOwnedGetStatusAsync,
              (const device_management::EnterpriseOwnedGetStatusRequest& /*in_request*/,
               base::OnceCallback<void(const device_management::EnterpriseOwnedGetStatusReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetFirmwareManagementParameters,
              (const device_management::GetFirmwareManagementParametersRequest& /*in_request*/,
               device_management::GetFirmwareManagementParametersReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetFirmwareManagementParametersAsync,
              (const device_management::GetFirmwareManagementParametersRequest& /*in_request*/,
               base::OnceCallback<void(const device_management::GetFirmwareManagementParametersReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RemoveFirmwareManagementParameters,
              (const device_management::RemoveFirmwareManagementParametersRequest& /*in_request*/,
               device_management::RemoveFirmwareManagementParametersReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RemoveFirmwareManagementParametersAsync,
              (const device_management::RemoveFirmwareManagementParametersRequest& /*in_request*/,
               base::OnceCallback<void(const device_management::RemoveFirmwareManagementParametersReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetFirmwareManagementParameters,
              (const device_management::SetFirmwareManagementParametersRequest& /*in_request*/,
               device_management::SetFirmwareManagementParametersReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetFirmwareManagementParametersAsync,
              (const device_management::SetFirmwareManagementParametersRequest& /*in_request*/,
               base::OnceCallback<void(const device_management::SetFirmwareManagementParametersReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DEVICE_MANAGEMENT_CLIENT_OUT_DEFAULT_GEN_INCLUDE_DEVICE_MANAGEMENT_DBUS_PROXY_MOCKS_H
