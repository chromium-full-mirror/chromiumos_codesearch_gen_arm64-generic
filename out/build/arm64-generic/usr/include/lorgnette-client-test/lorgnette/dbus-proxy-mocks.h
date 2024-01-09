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

  MOCK_METHOD(bool,
              ListScanners,
              (::lorgnette::ListScannersResponse* /*out_scanner_list*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ListScannersAsync,
              (base::OnceCallback<void(const ::lorgnette::ListScannersResponse& /*scanner_list*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetScannerCapabilities,
              (const std::string& /*in_device_name*/,
               ::lorgnette::ScannerCapabilities* /*out_capabilities*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetScannerCapabilitiesAsync,
              (const std::string& /*in_device_name*/,
               base::OnceCallback<void(const ::lorgnette::ScannerCapabilities& /*capabilities*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              OpenScanner,
              (const ::lorgnette::OpenScannerRequest& /*in_request*/,
               ::lorgnette::OpenScannerResponse* /*out_response*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              OpenScannerAsync,
              (const ::lorgnette::OpenScannerRequest& /*in_request*/,
               base::OnceCallback<void(const ::lorgnette::OpenScannerResponse& /*response*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              CloseScanner,
              (const ::lorgnette::CloseScannerRequest& /*in_request*/,
               ::lorgnette::CloseScannerResponse* /*out_response*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              CloseScannerAsync,
              (const ::lorgnette::CloseScannerRequest& /*in_request*/,
               base::OnceCallback<void(const ::lorgnette::CloseScannerResponse& /*response*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetOptions,
              (const ::lorgnette::SetOptionsRequest& /*in_request*/,
               ::lorgnette::SetOptionsResponse* /*out_response*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetOptionsAsync,
              (const ::lorgnette::SetOptionsRequest& /*in_request*/,
               base::OnceCallback<void(const ::lorgnette::SetOptionsResponse& /*response*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetCurrentConfig,
              (const ::lorgnette::GetCurrentConfigRequest& /*in_request*/,
               ::lorgnette::GetCurrentConfigResponse* /*out_response*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetCurrentConfigAsync,
              (const ::lorgnette::GetCurrentConfigRequest& /*in_request*/,
               base::OnceCallback<void(const ::lorgnette::GetCurrentConfigResponse& /*response*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              StartPreparedScan,
              (const ::lorgnette::StartPreparedScanRequest& /*in_request*/,
               ::lorgnette::StartPreparedScanResponse* /*out_response*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              StartPreparedScanAsync,
              (const ::lorgnette::StartPreparedScanRequest& /*in_request*/,
               base::OnceCallback<void(const ::lorgnette::StartPreparedScanResponse& /*response*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              StartScan,
              (const ::lorgnette::StartScanRequest& /*in_start_scan_request*/,
               ::lorgnette::StartScanResponse* /*out_start_scan_response*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              StartScanAsync,
              (const ::lorgnette::StartScanRequest& /*in_start_scan_request*/,
               base::OnceCallback<void(const ::lorgnette::StartScanResponse& /*start_scan_response*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ReadScanData,
              (const ::lorgnette::ReadScanDataRequest& /*in_request*/,
               ::lorgnette::ReadScanDataResponse* /*out_response*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ReadScanDataAsync,
              (const ::lorgnette::ReadScanDataRequest& /*in_request*/,
               base::OnceCallback<void(const ::lorgnette::ReadScanDataResponse& /*response*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetNextImage,
              (const ::lorgnette::GetNextImageRequest& /*in_get_next_image_request*/,
               const base::ScopedFD& /*in_out_fd*/,
               ::lorgnette::GetNextImageResponse* /*out_get_next_image_response*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetNextImageAsync,
              (const ::lorgnette::GetNextImageRequest& /*in_get_next_image_request*/,
               const base::ScopedFD& /*in_out_fd*/,
               base::OnceCallback<void(const ::lorgnette::GetNextImageResponse& /*get_next_image_response*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              CancelScan,
              (const ::lorgnette::CancelScanRequest& /*in_cancel_scan_request*/,
               ::lorgnette::CancelScanResponse* /*out_cancel_scan_response*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              CancelScanAsync,
              (const ::lorgnette::CancelScanRequest& /*in_cancel_scan_request*/,
               base::OnceCallback<void(const ::lorgnette::CancelScanResponse& /*cancel_scan_response*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetDebugConfig,
              (const ::lorgnette::SetDebugConfigRequest& /*in_request*/,
               ::lorgnette::SetDebugConfigResponse* /*out_response*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetDebugConfigAsync,
              (const ::lorgnette::SetDebugConfigRequest& /*in_request*/,
               base::OnceCallback<void(const ::lorgnette::SetDebugConfigResponse& /*response*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              StartScannerDiscovery,
              (const ::lorgnette::StartScannerDiscoveryRequest& /*in_request*/,
               ::lorgnette::StartScannerDiscoveryResponse* /*out_response*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              StartScannerDiscoveryAsync,
              (const ::lorgnette::StartScannerDiscoveryRequest& /*in_request*/,
               base::OnceCallback<void(const ::lorgnette::StartScannerDiscoveryResponse& /*response*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              StopScannerDiscovery,
              (const ::lorgnette::StopScannerDiscoveryRequest& /*in_request*/,
               ::lorgnette::StopScannerDiscoveryResponse* /*out_response*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              StopScannerDiscoveryAsync,
              (const ::lorgnette::StopScannerDiscoveryRequest& /*in_request*/,
               base::OnceCallback<void(const ::lorgnette::StopScannerDiscoveryResponse& /*response*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  void RegisterScannerListChangedSignalHandler(
    const base::RepeatingCallback<void(const ::lorgnette::ScannerListChangedSignal&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterScannerListChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterScannerListChangedSignalHandler,
              (const base::RepeatingCallback<void(const ::lorgnette::ScannerListChangedSignal&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterScanStatusChangedSignalHandler(
    const base::RepeatingCallback<void(const ::lorgnette::ScanStatusChangedSignal&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterScanStatusChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterScanStatusChangedSignalHandler,
              (const base::RepeatingCallback<void(const ::lorgnette::ScanStatusChangedSignal&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace lorgnette
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_LORGNETTE_CLIENT_OUT_DEFAULT_GEN_INCLUDE_LORGNETTE_DBUS_PROXY_MOCKS_H
