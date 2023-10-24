// Automatic generation of D-Bus interface mock proxies for:
//  - org.chromium.PermissionBroker
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_PERMISSION_BROKER_CLIENT_OUT_DEFAULT_GEN_INCLUDE_PERMISSION_BROKER_DBUS_PROXY_MOCKS_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_PERMISSION_BROKER_CLIENT_OUT_DEFAULT_GEN_INCLUDE_PERMISSION_BROKER_DBUS_PROXY_MOCKS_H
#include <string>
#include <vector>

#include <base/functional/callback_forward.h>
#include <base/logging.h>
#include <brillo/any.h>
#include <brillo/errors/error.h>
#include <brillo/variant_dictionary.h>
#include <gmock/gmock.h>

#include "permission_broker/dbus-proxies.h"

namespace org {
namespace chromium {

// Mock object for PermissionBrokerProxyInterface.
class PermissionBrokerProxyMock : public PermissionBrokerProxyInterface {
 public:
  PermissionBrokerProxyMock() = default;
  PermissionBrokerProxyMock(const PermissionBrokerProxyMock&) = delete;
  PermissionBrokerProxyMock& operator=(const PermissionBrokerProxyMock&) = delete;

  MOCK_METHOD(bool,
              CheckPathAccess,
              (const std::string& /*in_path*/,
               bool* /*out_allowed*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              CheckPathAccessAsync,
              (const std::string& /*in_path*/,
               base::OnceCallback<void(bool /*allowed*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              OpenPath,
              (const std::string& /*in_path*/,
               base::ScopedFD* /*out_fd*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              OpenPathAsync,
              (const std::string& /*in_path*/,
               base::OnceCallback<void(const base::ScopedFD& /*fd*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ClaimDevicePath,
              (const std::string& /*in_path*/,
               uint32_t /*in_drop_privileges_mask*/,
               const base::ScopedFD& /*in_lifeline_fd*/,
               base::ScopedFD* /*out_fd*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ClaimDevicePathAsync,
              (const std::string& /*in_path*/,
               uint32_t /*in_drop_privileges_mask*/,
               const base::ScopedFD& /*in_lifeline_fd*/,
               base::OnceCallback<void(const base::ScopedFD& /*fd*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              OpenPathAndRegisterClient,
              (const std::string& /*in_path*/,
               uint32_t /*in_drop_privileges_mask*/,
               const base::ScopedFD& /*in_lifeline_fd*/,
               base::ScopedFD* /*out_fd*/,
               std::string* /*out_client_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              OpenPathAndRegisterClientAsync,
              (const std::string& /*in_path*/,
               uint32_t /*in_drop_privileges_mask*/,
               const base::ScopedFD& /*in_lifeline_fd*/,
               (base::OnceCallback<void(const base::ScopedFD& /*fd*/, const std::string& /*client_id*/)>) /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              DetachInterface,
              (const std::string& /*in_client_id*/,
               uint8_t /*in_iface_num*/,
               bool* /*out_success*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              DetachInterfaceAsync,
              (const std::string& /*in_client_id*/,
               uint8_t /*in_iface_num*/,
               base::OnceCallback<void(bool /*success*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ReattachInterface,
              (const std::string& /*in_client_id*/,
               uint8_t /*in_iface_num*/,
               bool* /*out_success*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ReattachInterfaceAsync,
              (const std::string& /*in_client_id*/,
               uint8_t /*in_iface_num*/,
               base::OnceCallback<void(bool /*success*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              PowerCycleUsbPorts,
              (uint16_t /*in_vid*/,
               uint16_t /*in_pid*/,
               int64_t /*in_delay*/,
               bool* /*out_success*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              PowerCycleUsbPortsAsync,
              (uint16_t /*in_vid*/,
               uint16_t /*in_pid*/,
               int64_t /*in_delay*/,
               base::OnceCallback<void(bool /*success*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RequestTcpPortAccess,
              (uint16_t /*in_port*/,
               const std::string& /*in_interface*/,
               const base::ScopedFD& /*in_lifeline_fd*/,
               bool* /*out_allowed*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RequestTcpPortAccessAsync,
              (uint16_t /*in_port*/,
               const std::string& /*in_interface*/,
               const base::ScopedFD& /*in_lifeline_fd*/,
               base::OnceCallback<void(bool /*allowed*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RequestUdpPortAccess,
              (uint16_t /*in_port*/,
               const std::string& /*in_interface*/,
               const base::ScopedFD& /*in_lifeline_fd*/,
               bool* /*out_allowed*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RequestUdpPortAccessAsync,
              (uint16_t /*in_port*/,
               const std::string& /*in_interface*/,
               const base::ScopedFD& /*in_lifeline_fd*/,
               base::OnceCallback<void(bool /*allowed*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RequestLoopbackTcpPortLockdown,
              (uint16_t /*in_port*/,
               const base::ScopedFD& /*in_lifeline_fd*/,
               bool* /*out_allowed*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RequestLoopbackTcpPortLockdownAsync,
              (uint16_t /*in_port*/,
               const base::ScopedFD& /*in_lifeline_fd*/,
               base::OnceCallback<void(bool /*allowed*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ReleaseTcpPort,
              (uint16_t /*in_port*/,
               const std::string& /*in_interface*/,
               bool* /*out_success*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ReleaseTcpPortAsync,
              (uint16_t /*in_port*/,
               const std::string& /*in_interface*/,
               base::OnceCallback<void(bool /*success*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ReleaseUdpPort,
              (uint16_t /*in_port*/,
               const std::string& /*in_interface*/,
               bool* /*out_success*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ReleaseUdpPortAsync,
              (uint16_t /*in_port*/,
               const std::string& /*in_interface*/,
               base::OnceCallback<void(bool /*success*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ReleaseLoopbackTcpPort,
              (uint16_t /*in_port*/,
               bool* /*out_allowed*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ReleaseLoopbackTcpPortAsync,
              (uint16_t /*in_port*/,
               base::OnceCallback<void(bool /*allowed*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RequestTcpPortForward,
              (uint16_t /*in_port*/,
               const std::string& /*in_interface*/,
               const std::string& /*in_dst_ip*/,
               uint16_t /*in_dst_port*/,
               const base::ScopedFD& /*in_lifeline_fd*/,
               bool* /*out_allowed*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RequestTcpPortForwardAsync,
              (uint16_t /*in_port*/,
               const std::string& /*in_interface*/,
               const std::string& /*in_dst_ip*/,
               uint16_t /*in_dst_port*/,
               const base::ScopedFD& /*in_lifeline_fd*/,
               base::OnceCallback<void(bool /*allowed*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RequestUdpPortForward,
              (uint16_t /*in_port*/,
               const std::string& /*in_interface*/,
               const std::string& /*in_dst_ip*/,
               uint16_t /*in_dst_port*/,
               const base::ScopedFD& /*in_lifeline_fd*/,
               bool* /*out_allowed*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RequestUdpPortForwardAsync,
              (uint16_t /*in_port*/,
               const std::string& /*in_interface*/,
               const std::string& /*in_dst_ip*/,
               uint16_t /*in_dst_port*/,
               const base::ScopedFD& /*in_lifeline_fd*/,
               base::OnceCallback<void(bool /*allowed*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ReleaseTcpPortForward,
              (uint16_t /*in_port*/,
               const std::string& /*in_interface*/,
               bool* /*out_success*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ReleaseTcpPortForwardAsync,
              (uint16_t /*in_port*/,
               const std::string& /*in_interface*/,
               base::OnceCallback<void(bool /*success*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ReleaseUdpPortForward,
              (uint16_t /*in_port*/,
               const std::string& /*in_interface*/,
               bool* /*out_success*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ReleaseUdpPortForwardAsync,
              (uint16_t /*in_port*/,
               const std::string& /*in_interface*/,
               base::OnceCallback<void(bool /*success*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_PERMISSION_BROKER_CLIENT_OUT_DEFAULT_GEN_INCLUDE_PERMISSION_BROKER_DBUS_PROXY_MOCKS_H
