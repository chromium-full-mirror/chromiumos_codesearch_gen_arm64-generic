// Automatic generation of D-Bus interface mock proxies for:
//  - org.chromium.lorgnette.Manager
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_LORGNETTE_CLIENT_OUT_DEFAULT_GEN_INCLUDE_LORGNETTE_DBUS_PROXY_MOCKS_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_LORGNETTE_CLIENT_OUT_DEFAULT_GEN_INCLUDE_LORGNETTE_DBUS_PROXY_MOCKS_H
#include <string>
#include <vector>

#include <base/functional/callback_forward.h>
#include <base/logging.h>
#include <brillo/any.h>
#include <brillo/errors/error.h>
#include <brillo/variant_dictionary.h>
#include <gmock/gmock.h>

#include "lorgnette/dbus-proxies.h"

namespace org {
namespace chromium {
namespace lorgnette {

// Mock object for ManagerProxyInterface.
class ManagerProxyMock : public ManagerProxyInterface {
 public:
  ManagerProxyMock() = default;
  ManagerProxyMock(const ManagerProxyMock&) = delete;
  ManagerProxyMock& operator=(const ManagerProxyMock&) = delete;

  MOCK_METHOD3(ListScanners,
               bool(::lorgnette::ListScannersResponse* /*out_scanner_list*/,
                    brillo::ErrorPtr* /*error*/,
                    int /*timeout_ms*/));
  MOCK_METHOD3(ListScannersAsync,
               void(base::OnceCallback<void(const ::lorgnette::ListScannersResponse& /*scanner_list*/)> /*success_callback*/,
                    base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
                    int /*timeout_ms*/));
  MOCK_METHOD4(GetScannerCapabilities,
               bool(const std::string& /*in_device_name*/,
                    ::lorgnette::ScannerCapabilities* /*out_capabilities*/,
                    brillo::ErrorPtr* /*error*/,
                    int /*timeout_ms*/));
  MOCK_METHOD4(GetScannerCapabilitiesAsync,
               void(const std::string& /*in_device_name*/,
                    base::OnceCallback<void(const ::lorgnette::ScannerCapabilities& /*capabilities*/)> /*success_callback*/,
                    base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
                    int /*timeout_ms*/));
  MOCK_METHOD4(StartScan,
               bool(const ::lorgnette::StartScanRequest& /*in_start_scan_request*/,
                    ::lorgnette::StartScanResponse* /*out_start_scan_response*/,
                    brillo::ErrorPtr* /*error*/,
                    int /*timeout_ms*/));
  MOCK_METHOD4(StartScanAsync,
               void(const ::lorgnette::StartScanRequest& /*in_start_scan_request*/,
                    base::OnceCallback<void(const ::lorgnette::StartScanResponse& /*start_scan_response*/)> /*success_callback*/,
                    base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
                    int /*timeout_ms*/));
  MOCK_METHOD5(GetNextImage,
               bool(const ::lorgnette::GetNextImageRequest& /*in_get_next_image_request*/,
                    const base::ScopedFD& /*in_out_fd*/,
                    ::lorgnette::GetNextImageResponse* /*out_get_next_image_response*/,
                    brillo::ErrorPtr* /*error*/,
                    int /*timeout_ms*/));
  MOCK_METHOD5(GetNextImageAsync,
               void(const ::lorgnette::GetNextImageRequest& /*in_get_next_image_request*/,
                    const base::ScopedFD& /*in_out_fd*/,
                    base::OnceCallback<void(const ::lorgnette::GetNextImageResponse& /*get_next_image_response*/)> /*success_callback*/,
                    base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
                    int /*timeout_ms*/));
  MOCK_METHOD4(CancelScan,
               bool(const ::lorgnette::CancelScanRequest& /*in_cancel_scan_request*/,
                    ::lorgnette::CancelScanResponse* /*out_cancel_scan_response*/,
                    brillo::ErrorPtr* /*error*/,
                    int /*timeout_ms*/));
  MOCK_METHOD4(CancelScanAsync,
               void(const ::lorgnette::CancelScanRequest& /*in_cancel_scan_request*/,
                    base::OnceCallback<void(const ::lorgnette::CancelScanResponse& /*cancel_scan_response*/)> /*success_callback*/,
                    base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
                    int /*timeout_ms*/));
  MOCK_METHOD4(SetDebugConfig,
               bool(const ::lorgnette::SetDebugConfigRequest& /*in_request*/,
                    ::lorgnette::SetDebugConfigResponse* /*out_response*/,
                    brillo::ErrorPtr* /*error*/,
                    int /*timeout_ms*/));
  MOCK_METHOD4(SetDebugConfigAsync,
               void(const ::lorgnette::SetDebugConfigRequest& /*in_request*/,
                    base::OnceCallback<void(const ::lorgnette::SetDebugConfigResponse& /*response*/)> /*success_callback*/,
                    base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
                    int /*timeout_ms*/));
  MOCK_METHOD4(StartScannerDiscovery,
               bool(const ::lorgnette::StartScannerDiscoveryRequest& /*in_request*/,
                    ::lorgnette::StartScannerDiscoveryResponse* /*out_response*/,
                    brillo::ErrorPtr* /*error*/,
                    int /*timeout_ms*/));
  MOCK_METHOD4(StartScannerDiscoveryAsync,
               void(const ::lorgnette::StartScannerDiscoveryRequest& /*in_request*/,
                    base::OnceCallback<void(const ::lorgnette::StartScannerDiscoveryResponse& /*response*/)> /*success_callback*/,
                    base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
                    int /*timeout_ms*/));
  MOCK_METHOD4(StopScannerDiscovery,
               bool(const ::lorgnette::StopScannerDiscoveryRequest& /*in_request*/,
                    ::lorgnette::StopScannerDiscoveryResponse* /*out_response*/,
                    brillo::ErrorPtr* /*error*/,
                    int /*timeout_ms*/));
  MOCK_METHOD4(StopScannerDiscoveryAsync,
               void(const ::lorgnette::StopScannerDiscoveryRequest& /*in_request*/,
                    base::OnceCallback<void(const ::lorgnette::StopScannerDiscoveryResponse& /*response*/)> /*success_callback*/,
                    base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
                    int /*timeout_ms*/));
  void RegisterScannerListChangedSignalHandler(
    const base::RepeatingCallback<void(const ::lorgnette::ScannerListChangedSignal&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) {
    DoRegisterScannerListChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD2(DoRegisterScannerListChangedSignalHandler,
               void(const base::RepeatingCallback<void(const ::lorgnette::ScannerListChangedSignal&)>& /*signal_callback*/,
                    dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));
  void RegisterScanStatusChangedSignalHandler(
    const base::RepeatingCallback<void(const ::lorgnette::ScanStatusChangedSignal&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) {
    DoRegisterScanStatusChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD2(DoRegisterScanStatusChangedSignalHandler,
               void(const base::RepeatingCallback<void(const ::lorgnette::ScanStatusChangedSignal&)>& /*signal_callback*/,
                    dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));
  MOCK_CONST_METHOD0(GetObjectPath, const dbus::ObjectPath&());
  MOCK_CONST_METHOD0(GetObjectProxy, dbus::ObjectProxy*());
};
}  // namespace lorgnette
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_LORGNETTE_CLIENT_OUT_DEFAULT_GEN_INCLUDE_LORGNETTE_DBUS_PROXY_MOCKS_H
