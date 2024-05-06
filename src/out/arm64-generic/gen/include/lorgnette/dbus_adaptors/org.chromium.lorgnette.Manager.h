// Automatic generation of D-Bus interfaces:
//  - org.chromium.lorgnette.Manager
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_TMP_PORTAGE_CHROMEOS_BASE_LORGNETTE_CLI_0_0_1_R609_WORK_BUILD_OUT_DEFAULT_GEN_INCLUDE_LORGNETTE_DBUS_ADAPTORS_ORG_CHROMIUM_LORGNETTE_MANAGER_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_TMP_PORTAGE_CHROMEOS_BASE_LORGNETTE_CLI_0_0_1_R609_WORK_BUILD_OUT_DEFAULT_GEN_INCLUDE_LORGNETTE_DBUS_ADAPTORS_ORG_CHROMIUM_LORGNETTE_MANAGER_H
#include <memory>
#include <string>
#include <tuple>
#include <vector>

#include <base/files/scoped_file.h>
#include <dbus/object_path.h>
#include <brillo/any.h>
#include <brillo/dbus/dbus_object.h>
#include <brillo/dbus/exported_object_manager.h>
#include <brillo/variant_dictionary.h>

namespace org {
namespace chromium {
namespace lorgnette {

// Interface definition for org::chromium::lorgnette::Manager.
class ManagerInterface {
 public:
  virtual ~ManagerInterface() = default;

  virtual bool ListScanners(
      brillo::ErrorPtr* error,
      ::lorgnette::ListScannersResponse* out_scanner_list) = 0;
  // Returns the supported capabilities for scanner |device_name|.
  virtual bool GetScannerCapabilities(
      brillo::ErrorPtr* error,
      const std::string& in_device_name,
      ::lorgnette::ScannerCapabilities* out_capabilities) = 0;
  // Starts a session with the scanner specified in |request| and returns the
  // current scanner configuration.
  virtual ::lorgnette::OpenScannerResponse OpenScanner(
      const ::lorgnette::OpenScannerRequest& in_request) = 0;
  // Close a previously opened scanner handle identified by |request|.
  virtual ::lorgnette::CloseScannerResponse CloseScanner(
      const ::lorgnette::CloseScannerRequest& in_request) = 0;
  // Sets SANE options for the specified scanner.  The scanner must have been
  // previously opened with OpenScanner.
  virtual ::lorgnette::SetOptionsResponse SetOptions(
      const ::lorgnette::SetOptionsRequest& in_request) = 0;
  // Get the current config for the specified scanner.  The scanner must have
  // been previously opened with OpenScanner.
  virtual ::lorgnette::GetCurrentConfigResponse GetCurrentConfig(
      const ::lorgnette::GetCurrentConfigRequest& in_request) = 0;
  // Starts a scan using the currently configured options.  Options should
  // be set with SetOptions first if needed.  If the result is successful,
  // the caller can read scanned data with ReadScanData.
  virtual ::lorgnette::StartPreparedScanResponse StartPreparedScan(
      const ::lorgnette::StartPreparedScanRequest& in_request) = 0;
  // Sets up a multi-page scan job.
  // Initiates a connection to the scanner and prepares for scanning. Once
  // called, the client can call GetNextImage to fetch image data.
  virtual ::lorgnette::StartScanResponse StartScan(
      const ::lorgnette::StartScanRequest& in_start_scan_request) = 0;
  // Reads the next chunk of data from an in-progress scan job.
  virtual ::lorgnette::ReadScanDataResponse ReadScanData(
      const ::lorgnette::ReadScanDataRequest& in_request) = 0;
  // Reads the next image for the given scan job and outputs image data to
  // out_fd.
  //
  // A response will be sent once image acquisition has started successfully
  // or if acquiring the image failed.
  virtual void GetNextImage(
      std::unique_ptr<brillo::dbus_utils::DBusMethodResponse<::lorgnette::GetNextImageResponse>> response,
      const ::lorgnette::GetNextImageRequest& in_get_next_image_request,
      const base::ScopedFD& in_out_fd) = 0;
  // Attempts to cancel the scan job specified by the given UUID.
  virtual ::lorgnette::CancelScanResponse CancelScan(
      const ::lorgnette::CancelScanRequest& in_cancel_scan_request) = 0;
  // Configure lorgnette debugging.  Lorgnette will exit automatically
  // after returning from this call if the requested config can't be
  // implemented without restarting the process.
  virtual ::lorgnette::SetDebugConfigResponse SetDebugConfig(
      const ::lorgnette::SetDebugConfigRequest& in_request) = 0;
  // Start monitoring for scanners and send ScannerListChanged signals
  // when devices that match the request are found.
  virtual ::lorgnette::StartScannerDiscoveryResponse StartScannerDiscovery(
      const ::lorgnette::StartScannerDiscoveryRequest& in_request) = 0;
  // Stop a previously started discovery session. Note that
  // ScannerListChanged signals may continue to be sent if other
  // discovery sessions are still active.
  virtual ::lorgnette::StopScannerDiscoveryResponse StopScannerDiscovery(
      const ::lorgnette::StopScannerDiscoveryRequest& in_request) = 0;
};

// Interface adaptor for org::chromium::lorgnette::Manager.
class ManagerAdaptor {
 public:
  ManagerAdaptor(ManagerInterface* interface) : interface_(interface) {}
  ManagerAdaptor(const ManagerAdaptor&) = delete;
  ManagerAdaptor& operator=(const ManagerAdaptor&) = delete;

  void RegisterWithDBusObject(brillo::dbus_utils::DBusObject* object) {
    brillo::dbus_utils::DBusInterface* itf =
        object->AddOrGetInterface("org.chromium.lorgnette.Manager");

    itf->AddSimpleMethodHandlerWithError(
        "ListScanners",
        base::Unretained(interface_),
        &ManagerInterface::ListScanners);
    itf->AddSimpleMethodHandlerWithError(
        "GetScannerCapabilities",
        base::Unretained(interface_),
        &ManagerInterface::GetScannerCapabilities);
    itf->AddSimpleMethodHandler(
        "OpenScanner",
        base::Unretained(interface_),
        &ManagerInterface::OpenScanner);
    itf->AddSimpleMethodHandler(
        "CloseScanner",
        base::Unretained(interface_),
        &ManagerInterface::CloseScanner);
    itf->AddSimpleMethodHandler(
        "SetOptions",
        base::Unretained(interface_),
        &ManagerInterface::SetOptions);
    itf->AddSimpleMethodHandler(
        "GetCurrentConfig",
        base::Unretained(interface_),
        &ManagerInterface::GetCurrentConfig);
    itf->AddSimpleMethodHandler(
        "StartPreparedScan",
        base::Unretained(interface_),
        &ManagerInterface::StartPreparedScan);
    itf->AddSimpleMethodHandler(
        "StartScan",
        base::Unretained(interface_),
        &ManagerInterface::StartScan);
    itf->AddSimpleMethodHandler(
        "ReadScanData",
        base::Unretained(interface_),
        &ManagerInterface::ReadScanData);
    itf->AddMethodHandler(
        "GetNextImage",
        base::Unretained(interface_),
        &ManagerInterface::GetNextImage);
    itf->AddSimpleMethodHandler(
        "CancelScan",
        base::Unretained(interface_),
        &ManagerInterface::CancelScan);
    itf->AddSimpleMethodHandler(
        "SetDebugConfig",
        base::Unretained(interface_),
        &ManagerInterface::SetDebugConfig);
    itf->AddSimpleMethodHandler(
        "StartScannerDiscovery",
        base::Unretained(interface_),
        &ManagerInterface::StartScannerDiscovery);
    itf->AddSimpleMethodHandler(
        "StopScannerDiscovery",
        base::Unretained(interface_),
        &ManagerInterface::StopScannerDiscovery);

    signal_ScannerListChanged_ = itf->RegisterSignalOfType<SignalScannerListChangedType>("ScannerListChanged");
    signal_ScanStatusChanged_ = itf->RegisterSignalOfType<SignalScanStatusChangedType>("ScanStatusChanged");
  }

  void SendScannerListChangedSignal(
      const ::lorgnette::ScannerListChangedSignal& in_signal) {
    auto signal = signal_ScannerListChanged_.lock();
    if (signal)
      signal->Send(in_signal);
  }
  void SendScanStatusChangedSignal(
      const ::lorgnette::ScanStatusChangedSignal& in_scan_status_changed_signal) {
    auto signal = signal_ScanStatusChanged_.lock();
    if (signal)
      signal->Send(in_scan_status_changed_signal);
  }

  static dbus::ObjectPath GetObjectPath() {
    return dbus::ObjectPath{"/org/chromium/lorgnette/Manager"};
  }

  static const char* GetIntrospectionXml() {
    return
        "  <interface name=\"org.chromium.lorgnette.Manager\">\n"
        "    <method name=\"ListScanners\">\n"
        "      <arg name=\"scanner_list\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"GetScannerCapabilities\">\n"
        "      <arg name=\"device_name\" type=\"s\" direction=\"in\"/>\n"
        "      <arg name=\"capabilities\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"OpenScanner\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"CloseScanner\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"SetOptions\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"GetCurrentConfig\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"StartPreparedScan\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"StartScan\">\n"
        "      <arg name=\"start_scan_request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"start_scan_response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"ReadScanData\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"GetNextImage\">\n"
        "      <arg name=\"get_next_image_request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"out_fd\" type=\"h\" direction=\"in\"/>\n"
        "      <arg name=\"get_next_image_response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"CancelScan\">\n"
        "      <arg name=\"cancel_scan_request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"cancel_scan_response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"SetDebugConfig\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"StartScannerDiscovery\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"StopScannerDiscovery\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <signal name=\"ScannerListChanged\">\n"
        "      <arg name=\"signal\" type=\"ay\"/>\n"
        "    </signal>\n"
        "    <signal name=\"ScanStatusChanged\">\n"
        "      <arg name=\"scan_status_changed_signal\" type=\"ay\"/>\n"
        "    </signal>\n"
        "  </interface>\n";
  }

 private:
  using SignalScannerListChangedType = brillo::dbus_utils::DBusSignal<
      ::lorgnette::ScannerListChangedSignal /*signal*/>;
  std::weak_ptr<SignalScannerListChangedType> signal_ScannerListChanged_;

  using SignalScanStatusChangedType = brillo::dbus_utils::DBusSignal<
      ::lorgnette::ScanStatusChangedSignal /*scan_status_changed_signal*/>;
  std::weak_ptr<SignalScanStatusChangedType> signal_ScanStatusChanged_;

  ManagerInterface* interface_;  // Owned by container of this adapter.
};

}  // namespace lorgnette
}  // namespace chromium
}  // namespace org
#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_TMP_PORTAGE_CHROMEOS_BASE_LORGNETTE_CLI_0_0_1_R609_WORK_BUILD_OUT_DEFAULT_GEN_INCLUDE_LORGNETTE_DBUS_ADAPTORS_ORG_CHROMIUM_LORGNETTE_MANAGER_H
