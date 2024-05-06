// Automatic generation of D-Bus interfaces:
//  - org.chromium.lorgnette.Manager
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_TMP_PORTAGE_CHROMEOS_BASE_LORGNETTE_CLI_0_0_1_R610_WORK_BUILD_OUT_DEFAULT_GEN_INCLUDE_LORGNETTE_DBUS_PROXIES_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_TMP_PORTAGE_CHROMEOS_BASE_LORGNETTE_CLI_0_0_1_R610_WORK_BUILD_OUT_DEFAULT_GEN_INCLUDE_LORGNETTE_DBUS_PROXIES_H
#include <memory>
#include <string>
#include <vector>

#include <base/files/scoped_file.h>
#include <base/functional/bind.h>
#include <base/functional/callback.h>
#include <base/logging.h>
#include <base/memory/ref_counted.h>
#include <brillo/any.h>
#include <brillo/dbus/dbus_method_invoker.h>
#include <brillo/dbus/dbus_property.h>
#include <brillo/dbus/dbus_signal_handler.h>
#include <brillo/errors/error.h>
#include <brillo/variant_dictionary.h>
#include <dbus/bus.h>
#include <dbus/message.h>
#include <dbus/object_manager.h>
#include <dbus/object_path.h>
#include <dbus/object_proxy.h>

namespace org {
namespace chromium {
namespace lorgnette {

// Abstract interface proxy for org::chromium::lorgnette::Manager.
class ManagerProxyInterface {
 public:
  virtual ~ManagerProxyInterface() = default;

  virtual bool ListScanners(
      ::lorgnette::ListScannersResponse* out_scanner_list,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void ListScannersAsync(
      base::OnceCallback<void(const ::lorgnette::ListScannersResponse& /*scanner_list*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Returns the supported capabilities for scanner |device_name|.
  virtual bool GetScannerCapabilities(
      const std::string& in_device_name,
      ::lorgnette::ScannerCapabilities* out_capabilities,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Returns the supported capabilities for scanner |device_name|.
  virtual void GetScannerCapabilitiesAsync(
      const std::string& in_device_name,
      base::OnceCallback<void(const ::lorgnette::ScannerCapabilities& /*capabilities*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Starts a session with the scanner specified in |request| and returns the
  // current scanner configuration.
  virtual bool OpenScanner(
      const ::lorgnette::OpenScannerRequest& in_request,
      ::lorgnette::OpenScannerResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Starts a session with the scanner specified in |request| and returns the
  // current scanner configuration.
  virtual void OpenScannerAsync(
      const ::lorgnette::OpenScannerRequest& in_request,
      base::OnceCallback<void(const ::lorgnette::OpenScannerResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Close a previously opened scanner handle identified by |request|.
  virtual bool CloseScanner(
      const ::lorgnette::CloseScannerRequest& in_request,
      ::lorgnette::CloseScannerResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Close a previously opened scanner handle identified by |request|.
  virtual void CloseScannerAsync(
      const ::lorgnette::CloseScannerRequest& in_request,
      base::OnceCallback<void(const ::lorgnette::CloseScannerResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Sets SANE options for the specified scanner.  The scanner must have been
  // previously opened with OpenScanner.
  virtual bool SetOptions(
      const ::lorgnette::SetOptionsRequest& in_request,
      ::lorgnette::SetOptionsResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Sets SANE options for the specified scanner.  The scanner must have been
  // previously opened with OpenScanner.
  virtual void SetOptionsAsync(
      const ::lorgnette::SetOptionsRequest& in_request,
      base::OnceCallback<void(const ::lorgnette::SetOptionsResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Get the current config for the specified scanner.  The scanner must have
  // been previously opened with OpenScanner.
  virtual bool GetCurrentConfig(
      const ::lorgnette::GetCurrentConfigRequest& in_request,
      ::lorgnette::GetCurrentConfigResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Get the current config for the specified scanner.  The scanner must have
  // been previously opened with OpenScanner.
  virtual void GetCurrentConfigAsync(
      const ::lorgnette::GetCurrentConfigRequest& in_request,
      base::OnceCallback<void(const ::lorgnette::GetCurrentConfigResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Starts a scan using the currently configured options.  Options should
  // be set with SetOptions first if needed.  If the result is successful,
  // the caller can read scanned data with ReadScanData.
  virtual bool StartPreparedScan(
      const ::lorgnette::StartPreparedScanRequest& in_request,
      ::lorgnette::StartPreparedScanResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Starts a scan using the currently configured options.  Options should
  // be set with SetOptions first if needed.  If the result is successful,
  // the caller can read scanned data with ReadScanData.
  virtual void StartPreparedScanAsync(
      const ::lorgnette::StartPreparedScanRequest& in_request,
      base::OnceCallback<void(const ::lorgnette::StartPreparedScanResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Sets up a multi-page scan job.
  // Initiates a connection to the scanner and prepares for scanning. Once
  // called, the client can call GetNextImage to fetch image data.
  virtual bool StartScan(
      const ::lorgnette::StartScanRequest& in_start_scan_request,
      ::lorgnette::StartScanResponse* out_start_scan_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Sets up a multi-page scan job.
  // Initiates a connection to the scanner and prepares for scanning. Once
  // called, the client can call GetNextImage to fetch image data.
  virtual void StartScanAsync(
      const ::lorgnette::StartScanRequest& in_start_scan_request,
      base::OnceCallback<void(const ::lorgnette::StartScanResponse& /*start_scan_response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Reads the next chunk of data from an in-progress scan job.
  virtual bool ReadScanData(
      const ::lorgnette::ReadScanDataRequest& in_request,
      ::lorgnette::ReadScanDataResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Reads the next chunk of data from an in-progress scan job.
  virtual void ReadScanDataAsync(
      const ::lorgnette::ReadScanDataRequest& in_request,
      base::OnceCallback<void(const ::lorgnette::ReadScanDataResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Reads the next image for the given scan job and outputs image data to
  // out_fd.
  //
  // A response will be sent once image acquisition has started successfully
  // or if acquiring the image failed.
  virtual bool GetNextImage(
      const ::lorgnette::GetNextImageRequest& in_get_next_image_request,
      const base::ScopedFD& in_out_fd,
      ::lorgnette::GetNextImageResponse* out_get_next_image_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Reads the next image for the given scan job and outputs image data to
  // out_fd.
  //
  // A response will be sent once image acquisition has started successfully
  // or if acquiring the image failed.
  virtual void GetNextImageAsync(
      const ::lorgnette::GetNextImageRequest& in_get_next_image_request,
      const base::ScopedFD& in_out_fd,
      base::OnceCallback<void(const ::lorgnette::GetNextImageResponse& /*get_next_image_response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Attempts to cancel the scan job specified by the given UUID.
  virtual bool CancelScan(
      const ::lorgnette::CancelScanRequest& in_cancel_scan_request,
      ::lorgnette::CancelScanResponse* out_cancel_scan_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Attempts to cancel the scan job specified by the given UUID.
  virtual void CancelScanAsync(
      const ::lorgnette::CancelScanRequest& in_cancel_scan_request,
      base::OnceCallback<void(const ::lorgnette::CancelScanResponse& /*cancel_scan_response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Configure lorgnette debugging.  Lorgnette will exit automatically
  // after returning from this call if the requested config can't be
  // implemented without restarting the process.
  virtual bool SetDebugConfig(
      const ::lorgnette::SetDebugConfigRequest& in_request,
      ::lorgnette::SetDebugConfigResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Configure lorgnette debugging.  Lorgnette will exit automatically
  // after returning from this call if the requested config can't be
  // implemented without restarting the process.
  virtual void SetDebugConfigAsync(
      const ::lorgnette::SetDebugConfigRequest& in_request,
      base::OnceCallback<void(const ::lorgnette::SetDebugConfigResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Start monitoring for scanners and send ScannerListChanged signals
  // when devices that match the request are found.
  virtual bool StartScannerDiscovery(
      const ::lorgnette::StartScannerDiscoveryRequest& in_request,
      ::lorgnette::StartScannerDiscoveryResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Start monitoring for scanners and send ScannerListChanged signals
  // when devices that match the request are found.
  virtual void StartScannerDiscoveryAsync(
      const ::lorgnette::StartScannerDiscoveryRequest& in_request,
      base::OnceCallback<void(const ::lorgnette::StartScannerDiscoveryResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Stop a previously started discovery session. Note that
  // ScannerListChanged signals may continue to be sent if other
  // discovery sessions are still active.
  virtual bool StopScannerDiscovery(
      const ::lorgnette::StopScannerDiscoveryRequest& in_request,
      ::lorgnette::StopScannerDiscoveryResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  // Stop a previously started discovery session. Note that
  // ScannerListChanged signals may continue to be sent if other
  // discovery sessions are still active.
  virtual void StopScannerDiscoveryAsync(
      const ::lorgnette::StopScannerDiscoveryRequest& in_request,
      base::OnceCallback<void(const ::lorgnette::StopScannerDiscoveryResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) = 0;

  virtual void RegisterScannerListChangedSignalHandler(
      const base::RepeatingCallback<void(const ::lorgnette::ScannerListChangedSignal&)>& signal_callback,
      dbus::ObjectProxy::OnConnectedCallback on_connected_callback) = 0;

  virtual void RegisterScanStatusChangedSignalHandler(
      const base::RepeatingCallback<void(const ::lorgnette::ScanStatusChangedSignal&)>& signal_callback,
      dbus::ObjectProxy::OnConnectedCallback on_connected_callback) = 0;

  virtual const dbus::ObjectPath& GetObjectPath() const = 0;
  virtual dbus::ObjectProxy* GetObjectProxy() const = 0;
};

}  // namespace lorgnette
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {
namespace lorgnette {

// Interface proxy for org::chromium::lorgnette::Manager.
class ManagerProxy final : public ManagerProxyInterface {
 public:
  ManagerProxy(
      const scoped_refptr<dbus::Bus>& bus,
      const std::string& service_name) :
          bus_{bus},
          service_name_{service_name},
          dbus_object_proxy_{
              bus_->GetObjectProxy(service_name_, object_path_)} {
  }

  ManagerProxy(const ManagerProxy&) = delete;
  ManagerProxy& operator=(const ManagerProxy&) = delete;

  ~ManagerProxy() override {
  }

  void RegisterScannerListChangedSignalHandler(
      const base::RepeatingCallback<void(const ::lorgnette::ScannerListChangedSignal&)>& signal_callback,
      dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    brillo::dbus_utils::ConnectToSignal(
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "ScannerListChanged",
        signal_callback,
        std::move(on_connected_callback));
  }

  void RegisterScanStatusChangedSignalHandler(
      const base::RepeatingCallback<void(const ::lorgnette::ScanStatusChangedSignal&)>& signal_callback,
      dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    brillo::dbus_utils::ConnectToSignal(
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "ScanStatusChanged",
        signal_callback,
        std::move(on_connected_callback));
  }

  void ReleaseObjectProxy(base::OnceClosure callback) {
    bus_->RemoveObjectProxy(service_name_, object_path_, std::move(callback));
  }

  const dbus::ObjectPath& GetObjectPath() const override {
    return object_path_;
  }

  dbus::ObjectProxy* GetObjectProxy() const override {
    return dbus_object_proxy_;
  }

  bool ListScanners(
      ::lorgnette::ListScannersResponse* out_scanner_list,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "ListScanners",
        error);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_scanner_list);
  }

  void ListScannersAsync(
      base::OnceCallback<void(const ::lorgnette::ListScannersResponse& /*scanner_list*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "ListScanners",
        std::move(success_callback),
        std::move(error_callback));
  }

  // Returns the supported capabilities for scanner |device_name|.
  bool GetScannerCapabilities(
      const std::string& in_device_name,
      ::lorgnette::ScannerCapabilities* out_capabilities,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "GetScannerCapabilities",
        error,
        in_device_name);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_capabilities);
  }

  // Returns the supported capabilities for scanner |device_name|.
  void GetScannerCapabilitiesAsync(
      const std::string& in_device_name,
      base::OnceCallback<void(const ::lorgnette::ScannerCapabilities& /*capabilities*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "GetScannerCapabilities",
        std::move(success_callback),
        std::move(error_callback),
        in_device_name);
  }

  // Starts a session with the scanner specified in |request| and returns the
  // current scanner configuration.
  bool OpenScanner(
      const ::lorgnette::OpenScannerRequest& in_request,
      ::lorgnette::OpenScannerResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "OpenScanner",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  // Starts a session with the scanner specified in |request| and returns the
  // current scanner configuration.
  void OpenScannerAsync(
      const ::lorgnette::OpenScannerRequest& in_request,
      base::OnceCallback<void(const ::lorgnette::OpenScannerResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "OpenScanner",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  // Close a previously opened scanner handle identified by |request|.
  bool CloseScanner(
      const ::lorgnette::CloseScannerRequest& in_request,
      ::lorgnette::CloseScannerResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "CloseScanner",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  // Close a previously opened scanner handle identified by |request|.
  void CloseScannerAsync(
      const ::lorgnette::CloseScannerRequest& in_request,
      base::OnceCallback<void(const ::lorgnette::CloseScannerResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "CloseScanner",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  // Sets SANE options for the specified scanner.  The scanner must have been
  // previously opened with OpenScanner.
  bool SetOptions(
      const ::lorgnette::SetOptionsRequest& in_request,
      ::lorgnette::SetOptionsResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "SetOptions",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  // Sets SANE options for the specified scanner.  The scanner must have been
  // previously opened with OpenScanner.
  void SetOptionsAsync(
      const ::lorgnette::SetOptionsRequest& in_request,
      base::OnceCallback<void(const ::lorgnette::SetOptionsResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "SetOptions",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  // Get the current config for the specified scanner.  The scanner must have
  // been previously opened with OpenScanner.
  bool GetCurrentConfig(
      const ::lorgnette::GetCurrentConfigRequest& in_request,
      ::lorgnette::GetCurrentConfigResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "GetCurrentConfig",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  // Get the current config for the specified scanner.  The scanner must have
  // been previously opened with OpenScanner.
  void GetCurrentConfigAsync(
      const ::lorgnette::GetCurrentConfigRequest& in_request,
      base::OnceCallback<void(const ::lorgnette::GetCurrentConfigResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "GetCurrentConfig",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  // Starts a scan using the currently configured options.  Options should
  // be set with SetOptions first if needed.  If the result is successful,
  // the caller can read scanned data with ReadScanData.
  bool StartPreparedScan(
      const ::lorgnette::StartPreparedScanRequest& in_request,
      ::lorgnette::StartPreparedScanResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "StartPreparedScan",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  // Starts a scan using the currently configured options.  Options should
  // be set with SetOptions first if needed.  If the result is successful,
  // the caller can read scanned data with ReadScanData.
  void StartPreparedScanAsync(
      const ::lorgnette::StartPreparedScanRequest& in_request,
      base::OnceCallback<void(const ::lorgnette::StartPreparedScanResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "StartPreparedScan",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  // Sets up a multi-page scan job.
  // Initiates a connection to the scanner and prepares for scanning. Once
  // called, the client can call GetNextImage to fetch image data.
  bool StartScan(
      const ::lorgnette::StartScanRequest& in_start_scan_request,
      ::lorgnette::StartScanResponse* out_start_scan_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "StartScan",
        error,
        in_start_scan_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_start_scan_response);
  }

  // Sets up a multi-page scan job.
  // Initiates a connection to the scanner and prepares for scanning. Once
  // called, the client can call GetNextImage to fetch image data.
  void StartScanAsync(
      const ::lorgnette::StartScanRequest& in_start_scan_request,
      base::OnceCallback<void(const ::lorgnette::StartScanResponse& /*start_scan_response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "StartScan",
        std::move(success_callback),
        std::move(error_callback),
        in_start_scan_request);
  }

  // Reads the next chunk of data from an in-progress scan job.
  bool ReadScanData(
      const ::lorgnette::ReadScanDataRequest& in_request,
      ::lorgnette::ReadScanDataResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "ReadScanData",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  // Reads the next chunk of data from an in-progress scan job.
  void ReadScanDataAsync(
      const ::lorgnette::ReadScanDataRequest& in_request,
      base::OnceCallback<void(const ::lorgnette::ReadScanDataResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "ReadScanData",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  // Reads the next image for the given scan job and outputs image data to
  // out_fd.
  //
  // A response will be sent once image acquisition has started successfully
  // or if acquiring the image failed.
  bool GetNextImage(
      const ::lorgnette::GetNextImageRequest& in_get_next_image_request,
      const base::ScopedFD& in_out_fd,
      ::lorgnette::GetNextImageResponse* out_get_next_image_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "GetNextImage",
        error,
        in_get_next_image_request,
        in_out_fd);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_get_next_image_response);
  }

  // Reads the next image for the given scan job and outputs image data to
  // out_fd.
  //
  // A response will be sent once image acquisition has started successfully
  // or if acquiring the image failed.
  void GetNextImageAsync(
      const ::lorgnette::GetNextImageRequest& in_get_next_image_request,
      const base::ScopedFD& in_out_fd,
      base::OnceCallback<void(const ::lorgnette::GetNextImageResponse& /*get_next_image_response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "GetNextImage",
        std::move(success_callback),
        std::move(error_callback),
        in_get_next_image_request,
        in_out_fd);
  }

  // Attempts to cancel the scan job specified by the given UUID.
  bool CancelScan(
      const ::lorgnette::CancelScanRequest& in_cancel_scan_request,
      ::lorgnette::CancelScanResponse* out_cancel_scan_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "CancelScan",
        error,
        in_cancel_scan_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_cancel_scan_response);
  }

  // Attempts to cancel the scan job specified by the given UUID.
  void CancelScanAsync(
      const ::lorgnette::CancelScanRequest& in_cancel_scan_request,
      base::OnceCallback<void(const ::lorgnette::CancelScanResponse& /*cancel_scan_response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "CancelScan",
        std::move(success_callback),
        std::move(error_callback),
        in_cancel_scan_request);
  }

  // Configure lorgnette debugging.  Lorgnette will exit automatically
  // after returning from this call if the requested config can't be
  // implemented without restarting the process.
  bool SetDebugConfig(
      const ::lorgnette::SetDebugConfigRequest& in_request,
      ::lorgnette::SetDebugConfigResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "SetDebugConfig",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  // Configure lorgnette debugging.  Lorgnette will exit automatically
  // after returning from this call if the requested config can't be
  // implemented without restarting the process.
  void SetDebugConfigAsync(
      const ::lorgnette::SetDebugConfigRequest& in_request,
      base::OnceCallback<void(const ::lorgnette::SetDebugConfigResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "SetDebugConfig",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  // Start monitoring for scanners and send ScannerListChanged signals
  // when devices that match the request are found.
  bool StartScannerDiscovery(
      const ::lorgnette::StartScannerDiscoveryRequest& in_request,
      ::lorgnette::StartScannerDiscoveryResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "StartScannerDiscovery",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  // Start monitoring for scanners and send ScannerListChanged signals
  // when devices that match the request are found.
  void StartScannerDiscoveryAsync(
      const ::lorgnette::StartScannerDiscoveryRequest& in_request,
      base::OnceCallback<void(const ::lorgnette::StartScannerDiscoveryResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "StartScannerDiscovery",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

  // Stop a previously started discovery session. Note that
  // ScannerListChanged signals may continue to be sent if other
  // discovery sessions are still active.
  bool StopScannerDiscovery(
      const ::lorgnette::StopScannerDiscoveryRequest& in_request,
      ::lorgnette::StopScannerDiscoveryResponse* out_response,
      brillo::ErrorPtr* error,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    auto response = brillo::dbus_utils::CallMethodAndBlockWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "StopScannerDiscovery",
        error,
        in_request);
    return response && brillo::dbus_utils::ExtractMethodCallResults(
        response.get(), error, out_response);
  }

  // Stop a previously started discovery session. Note that
  // ScannerListChanged signals may continue to be sent if other
  // discovery sessions are still active.
  void StopScannerDiscoveryAsync(
      const ::lorgnette::StopScannerDiscoveryRequest& in_request,
      base::OnceCallback<void(const ::lorgnette::StopScannerDiscoveryResponse& /*response*/)> success_callback,
      base::OnceCallback<void(brillo::Error*)> error_callback,
      int timeout_ms = dbus::ObjectProxy::TIMEOUT_USE_DEFAULT) override {
    brillo::dbus_utils::CallMethodWithTimeout(
        timeout_ms,
        dbus_object_proxy_,
        "org.chromium.lorgnette.Manager",
        "StopScannerDiscovery",
        std::move(success_callback),
        std::move(error_callback),
        in_request);
  }

 private:
  scoped_refptr<dbus::Bus> bus_;
  std::string service_name_;
  const dbus::ObjectPath object_path_{"/org/chromium/lorgnette/Manager"};
  dbus::ObjectProxy* dbus_object_proxy_;

};

}  // namespace lorgnette
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_TMP_PORTAGE_CHROMEOS_BASE_LORGNETTE_CLI_0_0_1_R610_WORK_BUILD_OUT_DEFAULT_GEN_INCLUDE_LORGNETTE_DBUS_PROXIES_H
