// Automatic generation of D-Bus interface mock proxies for:
//  - org.chromium.debugd
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DEBUGD_CLIENT_OUT_DEFAULT_GEN_INCLUDE_DEBUGD_DBUS_PROXY_MOCKS_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DEBUGD_CLIENT_OUT_DEFAULT_GEN_INCLUDE_DEBUGD_DBUS_PROXY_MOCKS_H
#include <string>
#include <vector>

#include <base/functional/callback_forward.h>
#include <base/logging.h>
#include <brillo/any.h>
#include <brillo/errors/error.h>
#include <brillo/variant_dictionary.h>
#include <gmock/gmock.h>

#include "debugd/dbus-proxies.h"

namespace org {
namespace chromium {

// Mock object for debugdProxyInterface.
class debugdProxyMock : public debugdProxyInterface {
 public:
  debugdProxyMock() = default;
  debugdProxyMock(const debugdProxyMock&) = delete;
  debugdProxyMock& operator=(const debugdProxyMock&) = delete;

  MOCK_METHOD(bool,
              PingStart,
              (const base::ScopedFD& /*in_outfd*/,
               const std::string& /*in_destination*/,
               const brillo::VariantDictionary& /*in_options*/,
               std::string* /*out_handle*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              PingStartAsync,
              (const base::ScopedFD& /*in_outfd*/,
               const std::string& /*in_destination*/,
               const brillo::VariantDictionary& /*in_options*/,
               base::OnceCallback<void(const std::string& /*handle*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              PingStop,
              (const std::string& /*in_handle*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              PingStopAsync,
              (const std::string& /*in_handle*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SystraceStart,
              (const std::string& /*in_categories*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SystraceStartAsync,
              (const std::string& /*in_categories*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SystraceStop,
              (const base::ScopedFD& /*in_outfd*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SystraceStopAsync,
              (const base::ScopedFD& /*in_outfd*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SystraceStatus,
              (std::string* /*out_status*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SystraceStatusAsync,
              (base::OnceCallback<void(const std::string& /*status*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              TracePathStart,
              (const base::ScopedFD& /*in_outfd*/,
               const std::string& /*in_destination*/,
               const brillo::VariantDictionary& /*in_options*/,
               std::string* /*out_handle*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              TracePathStartAsync,
              (const base::ScopedFD& /*in_outfd*/,
               const std::string& /*in_destination*/,
               const brillo::VariantDictionary& /*in_options*/,
               base::OnceCallback<void(const std::string& /*handle*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              TracePathStop,
              (const std::string& /*in_handle*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              TracePathStopAsync,
              (const std::string& /*in_handle*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetIpAddresses,
              (const brillo::VariantDictionary& /*in_options*/,
               std::vector<std::string>* /*out_result*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetIpAddressesAsync,
              (const brillo::VariantDictionary& /*in_options*/,
               base::OnceCallback<void(const std::vector<std::string>& /*result*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetRoutes,
              (const brillo::VariantDictionary& /*in_options*/,
               std::vector<std::string>* /*out_result*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetRoutesAsync,
              (const brillo::VariantDictionary& /*in_options*/,
               base::OnceCallback<void(const std::vector<std::string>& /*result*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetNetworkStatus,
              (std::string* /*out_status*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetNetworkStatusAsync,
              (base::OnceCallback<void(const std::string& /*status*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetPerfOutput,
              (uint32_t /*in_duration_sec*/,
               const std::vector<std::string>& /*in_perf_args*/,
               int32_t* /*out_status*/,
               std::vector<uint8_t>* /*out_perf_data*/,
               std::vector<uint8_t>* /*out_perf_stat*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetPerfOutputAsync,
              (uint32_t /*in_duration_sec*/,
               const std::vector<std::string>& /*in_perf_args*/,
               (base::OnceCallback<void(int32_t /*status*/, const std::vector<uint8_t>& /*perf_data*/, const std::vector<uint8_t>& /*perf_stat*/)>) /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetPerfOutputFd,
              (uint32_t /*in_duration_sec*/,
               const std::vector<std::string>& /*in_perf_args*/,
               const base::ScopedFD& /*in_stdout*/,
               uint64_t* /*out_session_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetPerfOutputFdAsync,
              (uint32_t /*in_duration_sec*/,
               const std::vector<std::string>& /*in_perf_args*/,
               const base::ScopedFD& /*in_stdout*/,
               base::OnceCallback<void(uint64_t /*session_id*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              StopPerf,
              (uint64_t /*in_session_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              StopPerfAsync,
              (uint64_t /*in_session_id*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetPerfOutputV2,
              (const std::vector<std::string>& /*in_quipper_args*/,
               bool /*in_disable_cpu_idle*/,
               const base::ScopedFD& /*in_stdout*/,
               uint64_t* /*out_session_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetPerfOutputV2Async,
              (const std::vector<std::string>& /*in_quipper_args*/,
               bool /*in_disable_cpu_idle*/,
               const base::ScopedFD& /*in_stdout*/,
               base::OnceCallback<void(uint64_t /*session_id*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              DumpDebugLogs,
              (bool /*in_is_compressed*/,
               const base::ScopedFD& /*in_outfd*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              DumpDebugLogsAsync,
              (bool /*in_is_compressed*/,
               const base::ScopedFD& /*in_outfd*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetDebugMode,
              (const std::string& /*in_subsystem*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetDebugModeAsync,
              (const std::string& /*in_subsystem*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetLog,
              (const std::string& /*in_log*/,
               std::string* /*out_contents*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetLogAsync,
              (const std::string& /*in_log*/,
               base::OnceCallback<void(const std::string& /*contents*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetAllLogs,
              ((std::map<std::string, std::string>*) /*out_logs*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetAllLogsAsync,
              ((base::OnceCallback<void(const std::map<std::string, std::string>& /*logs*/)>) /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetFeedbackLogsV2,
              (const base::ScopedFD& /*in_outfd*/,
               const std::string& /*in_username*/,
               const std::vector<int32_t>& /*in_requested_logs*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetFeedbackLogsV2Async,
              (const base::ScopedFD& /*in_outfd*/,
               const std::string& /*in_username*/,
               const std::vector<int32_t>& /*in_requested_logs*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetFeedbackLogsV3,
              (const base::ScopedFD& /*in_outfd*/,
               const std::string& /*in_username*/,
               const std::vector<int32_t>& /*in_requested_logs*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetFeedbackLogsV3Async,
              (const base::ScopedFD& /*in_outfd*/,
               const std::string& /*in_username*/,
               const std::vector<int32_t>& /*in_requested_logs*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              BackupArcBugReport,
              (const std::string& /*in_username*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              BackupArcBugReportAsync,
              (const std::string& /*in_username*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              DeleteArcBugReportBackup,
              (const std::string& /*in_username*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              DeleteArcBugReportBackupAsync,
              (const std::string& /*in_username*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetExample,
              (std::string* /*out_result*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetExampleAsync,
              (base::OnceCallback<void(const std::string& /*result*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              CupsAddAutoConfiguredPrinter,
              (const std::string& /*in_name*/,
               const std::string& /*in_uri*/,
               int32_t* /*out_result*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              CupsAddAutoConfiguredPrinterAsync,
              (const std::string& /*in_name*/,
               const std::string& /*in_uri*/,
               base::OnceCallback<void(int32_t /*result*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              CupsAddAutoConfiguredPrinterV2,
              (const std::string& /*in_name*/,
               const std::string& /*in_uri*/,
               const std::string& /*in_language*/,
               int32_t* /*out_result*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              CupsAddAutoConfiguredPrinterV2Async,
              (const std::string& /*in_name*/,
               const std::string& /*in_uri*/,
               const std::string& /*in_language*/,
               base::OnceCallback<void(int32_t /*result*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              CupsAddManuallyConfiguredPrinter,
              (const std::string& /*in_name*/,
               const std::string& /*in_uri*/,
               const std::vector<uint8_t>& /*in_ppd_contents*/,
               int32_t* /*out_result*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              CupsAddManuallyConfiguredPrinterAsync,
              (const std::string& /*in_name*/,
               const std::string& /*in_uri*/,
               const std::vector<uint8_t>& /*in_ppd_contents*/,
               base::OnceCallback<void(int32_t /*result*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              CupsAddManuallyConfiguredPrinterV2,
              (const std::string& /*in_name*/,
               const std::string& /*in_uri*/,
               const std::string& /*in_language*/,
               const std::vector<uint8_t>& /*in_ppd_contents*/,
               int32_t* /*out_result*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              CupsAddManuallyConfiguredPrinterV2Async,
              (const std::string& /*in_name*/,
               const std::string& /*in_uri*/,
               const std::string& /*in_language*/,
               const std::vector<uint8_t>& /*in_ppd_contents*/,
               base::OnceCallback<void(int32_t /*result*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              CupsRemovePrinter,
              (const std::string& /*in_name*/,
               bool* /*out_result*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              CupsRemovePrinterAsync,
              (const std::string& /*in_name*/,
               base::OnceCallback<void(bool /*result*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              CupsRetrievePpd,
              (const std::string& /*in_name*/,
               std::vector<uint8_t>* /*out_ppd*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              CupsRetrievePpdAsync,
              (const std::string& /*in_name*/,
               base::OnceCallback<void(const std::vector<uint8_t>& /*ppd*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetInterfaces,
              (std::string* /*out_result*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetInterfacesAsync,
              (base::OnceCallback<void(const std::string& /*result*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              TestICMP,
              (const std::string& /*in_host*/,
               std::string* /*out_result*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              TestICMPAsync,
              (const std::string& /*in_host*/,
               base::OnceCallback<void(const std::string& /*result*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              TestICMPWithOptions,
              (const std::string& /*in_host*/,
               (const std::map<std::string, std::string>&) /*in_options*/,
               std::string* /*out_result*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              TestICMPWithOptionsAsync,
              (const std::string& /*in_host*/,
               (const std::map<std::string, std::string>&) /*in_options*/,
               base::OnceCallback<void(const std::string& /*result*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              BatteryFirmware,
              (const std::string& /*in_option*/,
               std::string* /*out_result*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              BatteryFirmwareAsync,
              (const std::string& /*in_option*/,
               base::OnceCallback<void(const std::string& /*result*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Smartctl,
              (const std::string& /*in_option*/,
               std::string* /*out_result*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SmartctlAsync,
              (const std::string& /*in_option*/,
               base::OnceCallback<void(const std::string& /*result*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Mmc,
              (const std::string& /*in_option*/,
               std::string* /*out_result*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              MmcAsync,
              (const std::string& /*in_option*/,
               base::OnceCallback<void(const std::string& /*result*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Ufs,
              (const std::string& /*in_option*/,
               std::string* /*out_result*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              UfsAsync,
              (const std::string& /*in_option*/,
               base::OnceCallback<void(const std::string& /*result*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Nvme,
              (const std::string& /*in_option*/,
               std::string* /*out_result*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              NvmeAsync,
              (const std::string& /*in_option*/,
               base::OnceCallback<void(const std::string& /*result*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              NvmeLog,
              (uint32_t /*in_page_id*/,
               uint32_t /*in_length*/,
               bool /*in_raw_binary*/,
               std::string* /*out_result*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              NvmeLogAsync,
              (uint32_t /*in_page_id*/,
               uint32_t /*in_length*/,
               bool /*in_raw_binary*/,
               base::OnceCallback<void(const std::string& /*result*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              MemtesterStart,
              (const base::ScopedFD& /*in_outfd*/,
               uint32_t /*in_memory*/,
               std::string* /*out_status*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              MemtesterStartAsync,
              (const base::ScopedFD& /*in_outfd*/,
               uint32_t /*in_memory*/,
               base::OnceCallback<void(const std::string& /*status*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              MemtesterStop,
              (const std::string& /*in_handle*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              MemtesterStopAsync,
              (const std::string& /*in_handle*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              BadblocksStart,
              (const base::ScopedFD& /*in_outfd*/,
               std::string* /*out_status*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              BadblocksStartAsync,
              (const base::ScopedFD& /*in_outfd*/,
               base::OnceCallback<void(const std::string& /*status*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              BadblocksStop,
              (const std::string& /*in_handle*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              BadblocksStopAsync,
              (const std::string& /*in_handle*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              PacketCaptureStart,
              (const base::ScopedFD& /*in_statfd*/,
               const base::ScopedFD& /*in_outfd*/,
               const brillo::VariantDictionary& /*in_options*/,
               std::string* /*out_handle*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              PacketCaptureStartAsync,
              (const base::ScopedFD& /*in_statfd*/,
               const base::ScopedFD& /*in_outfd*/,
               const brillo::VariantDictionary& /*in_options*/,
               base::OnceCallback<void(const std::string& /*handle*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              PacketCaptureStop,
              (const std::string& /*in_handle*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              PacketCaptureStopAsync,
              (const std::string& /*in_handle*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              LogKernelTaskStates,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              LogKernelTaskStatesAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              UploadCrashes,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              UploadCrashesAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              UploadSingleCrash,
              ((const std::vector<std::tuple<std::string, base::ScopedFD>>&) /*in_files*/,
               bool /*in_consent_already_checked_by_crash_reporter*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              UploadSingleCrashAsync,
              ((const std::vector<std::tuple<std::string, base::ScopedFD>>&) /*in_files*/,
               bool /*in_consent_already_checked_by_crash_reporter*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetCrashSenderTestMode,
              (bool /*in_mode*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetCrashSenderTestModeAsync,
              (bool /*in_mode*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RemoveRootfsVerification,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RemoveRootfsVerificationAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              EnableBootFromUsb,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              EnableBootFromUsbAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ConfigureSshServer,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ConfigureSshServerAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetUserPassword,
              (const std::string& /*in_username*/,
               const std::string& /*in_password*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetUserPasswordAsync,
              (const std::string& /*in_username*/,
               const std::string& /*in_password*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              EnableChromeRemoteDebugging,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              EnableChromeRemoteDebuggingAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              EnableChromeDevFeatures,
              (const std::string& /*in_root_password*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              EnableChromeDevFeaturesAsync,
              (const std::string& /*in_root_password*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              QueryDevFeatures,
              (int32_t* /*out_features*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              QueryDevFeaturesAsync,
              (base::OnceCallback<void(int32_t /*features*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              EnableDevCoredumpUpload,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              EnableDevCoredumpUploadAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              DisableDevCoredumpUpload,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              DisableDevCoredumpUploadAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetOomScoreAdj,
              ((const std::map<int32_t, int32_t>&) /*in_scores*/,
               std::string* /*out_out*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetOomScoreAdjAsync,
              ((const std::map<int32_t, int32_t>&) /*in_scores*/,
               base::OnceCallback<void(const std::string& /*out*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SwapEnable,
              (int32_t /*in_size*/,
               bool /*in_change_now*/,
               std::string* /*out_status*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SwapEnableAsync,
              (int32_t /*in_size*/,
               bool /*in_change_now*/,
               base::OnceCallback<void(const std::string& /*status*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SwapDisable,
              (bool /*in_change_now*/,
               std::string* /*out_status*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SwapDisableAsync,
              (bool /*in_change_now*/,
               base::OnceCallback<void(const std::string& /*status*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              KstaledSetRatio,
              (uint8_t /*in_ratio*/,
               bool* /*out_result*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              KstaledSetRatioAsync,
              (uint8_t /*in_ratio*/,
               base::OnceCallback<void(bool /*result*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SwapStartStop,
              (bool /*in_on*/,
               std::string* /*out_status*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SwapStartStopAsync,
              (bool /*in_on*/,
               base::OnceCallback<void(const std::string& /*status*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SwapStatus,
              (std::string* /*out_status*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SwapStatusAsync,
              (base::OnceCallback<void(const std::string& /*status*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SwapSetParameter,
              (const std::string& /*in_command_name*/,
               int32_t /*in_value*/,
               std::string* /*out_status*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SwapSetParameterAsync,
              (const std::string& /*in_command_name*/,
               int32_t /*in_value*/,
               base::OnceCallback<void(const std::string& /*status*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SwapZramEnableWriteback,
              (uint32_t /*in_size_mb*/,
               std::string* /*out_result*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SwapZramEnableWritebackAsync,
              (uint32_t /*in_size_mb*/,
               base::OnceCallback<void(const std::string& /*result*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SwapZramMarkIdle,
              (uint32_t /*in_age*/,
               std::string* /*out_status*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SwapZramMarkIdleAsync,
              (uint32_t /*in_age*/,
               base::OnceCallback<void(const std::string& /*status*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SwapZramSetWritebackLimit,
              (uint32_t /*in_limit*/,
               std::string* /*out_status*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SwapZramSetWritebackLimitAsync,
              (uint32_t /*in_limit*/,
               base::OnceCallback<void(const std::string& /*status*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              InitiateSwapZramWriteback,
              (uint32_t /*in_mode*/,
               std::string* /*out_status*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              InitiateSwapZramWritebackAsync,
              (uint32_t /*in_mode*/,
               base::OnceCallback<void(const std::string& /*status*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SwapSetSwappiness,
              (uint32_t /*in_swappiness_value*/,
               std::string* /*out_status*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SwapSetSwappinessAsync,
              (uint32_t /*in_swappiness_value*/,
               base::OnceCallback<void(const std::string& /*status*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetU2fFlags,
              (const std::string& /*in_flags*/,
               std::string* /*out_status*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetU2fFlagsAsync,
              (const std::string& /*in_flags*/,
               base::OnceCallback<void(const std::string& /*status*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetU2fFlags,
              (std::string* /*out_flags*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetU2fFlagsAsync,
              (base::OnceCallback<void(const std::string& /*flags*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ContainerStarted,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ContainerStartedAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ContainerStopped,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ContainerStoppedAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetWifiPowerSave,
              (bool /*in_enable*/,
               std::string* /*out_status*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetWifiPowerSaveAsync,
              (bool /*in_enable*/,
               base::OnceCallback<void(const std::string& /*status*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetWifiPowerSave,
              (std::string* /*out_status*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetWifiPowerSaveAsync,
              (base::OnceCallback<void(const std::string& /*status*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RunShillScriptStart,
              (const base::ScopedFD& /*in_outfd*/,
               const std::string& /*in_script*/,
               const std::vector<std::string>& /*in_script_args*/,
               std::string* /*out_handle*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RunShillScriptStartAsync,
              (const base::ScopedFD& /*in_outfd*/,
               const std::string& /*in_script*/,
               const std::vector<std::string>& /*in_script_args*/,
               base::OnceCallback<void(const std::string& /*handle*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RunShillScriptStop,
              (const std::string& /*in_handle*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RunShillScriptStopAsync,
              (const std::string& /*in_handle*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              StartVmPluginDispatcher,
              (const std::string& /*in_user_id_hash*/,
               const std::string& /*in_lang*/,
               bool* /*out_status*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              StartVmPluginDispatcherAsync,
              (const std::string& /*in_user_id_hash*/,
               const std::string& /*in_lang*/,
               base::OnceCallback<void(bool /*status*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              StopVmPluginDispatcher,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              StopVmPluginDispatcherAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetRlzPingSent,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetRlzPingSentAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              UpdateAndVerifyFWOnUsbStart,
              (const base::ScopedFD& /*in_outfd*/,
               const std::string& /*in_image_file*/,
               const std::string& /*in_ro_db_dir*/,
               std::string* /*out_handle*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              UpdateAndVerifyFWOnUsbStartAsync,
              (const base::ScopedFD& /*in_outfd*/,
               const std::string& /*in_image_file*/,
               const std::string& /*in_ro_db_dir*/,
               base::OnceCallback<void(const std::string& /*handle*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              UpdateAndVerifyFWOnUsbStop,
              (const std::string& /*in_handle*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              UpdateAndVerifyFWOnUsbStopAsync,
              (const std::string& /*in_handle*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetSchedulerConfiguration,
              (const std::string& /*in_policy*/,
               bool* /*out_result*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetSchedulerConfigurationAsync,
              (const std::string& /*in_policy*/,
               base::OnceCallback<void(bool /*result*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              EvaluateProbeFunction,
              (const std::string& /*in_probe_statement*/,
               int32_t /*in_log_level*/,
               base::ScopedFD* /*out_result_fd*/,
               base::ScopedFD* /*out_error_fd*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              EvaluateProbeFunctionAsync,
              (const std::string& /*in_probe_statement*/,
               int32_t /*in_log_level*/,
               (base::OnceCallback<void(const base::ScopedFD& /*result_fd*/, const base::ScopedFD& /*error_fd*/)>) /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetSchedulerConfigurationV2,
              (const std::string& /*in_policy*/,
               bool /*in_lock_policy*/,
               bool* /*out_result*/,
               uint32_t* /*out_num_cores_disabled*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetSchedulerConfigurationV2Async,
              (const std::string& /*in_policy*/,
               bool /*in_lock_policy*/,
               (base::OnceCallback<void(bool /*result*/, uint32_t /*num_cores_disabled*/)>) /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              WifiFWDump,
              (std::string* /*out_output*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              WifiFWDumpAsync,
              (base::OnceCallback<void(const std::string& /*output*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              CollectSmartBatteryMetric,
              (const std::string& /*in_metric_name*/,
               std::string* /*out_output*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              CollectSmartBatteryMetricAsync,
              (const std::string& /*in_metric_name*/,
               base::OnceCallback<void(const std::string& /*output*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              EcGetInventory,
              (std::string* /*out_output*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              EcGetInventoryAsync,
              (base::OnceCallback<void(const std::string& /*output*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              CallDmesg,
              (const brillo::VariantDictionary& /*in_options*/,
               std::string* /*out_output*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              CallDmesgAsync,
              (const brillo::VariantDictionary& /*in_options*/,
               base::OnceCallback<void(const std::string& /*output*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              EcTypeCEnterMode,
              (uint32_t /*in_port_num*/,
               uint32_t /*in_mode*/,
               std::string* /*out_output*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              EcTypeCEnterModeAsync,
              (uint32_t /*in_port_num*/,
               uint32_t /*in_mode*/,
               base::OnceCallback<void(const std::string& /*output*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              EcTypeCExitMode,
              (uint32_t /*in_port_num*/,
               std::string* /*out_output*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              EcTypeCExitModeAsync,
              (uint32_t /*in_port_num*/,
               base::OnceCallback<void(const std::string& /*output*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              EcTypeCDpState,
              (uint32_t /*in_port_num*/,
               bool* /*out_output*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              EcTypeCDpStateAsync,
              (uint32_t /*in_port_num*/,
               base::OnceCallback<void(bool /*output*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              EcTypeCHpdState,
              (uint32_t /*in_port_num*/,
               bool* /*out_output*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              EcTypeCHpdStateAsync,
              (uint32_t /*in_port_num*/,
               base::OnceCallback<void(bool /*output*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              KernelFeatureEnable,
              (const std::string& /*in_name*/,
               bool* /*out_result*/,
               std::string* /*out_err_str*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              KernelFeatureEnableAsync,
              (const std::string& /*in_name*/,
               (base::OnceCallback<void(bool /*result*/, const std::string& /*err_str*/)>) /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              KernelFeatureList,
              (bool* /*out_result*/,
               std::string* /*out_csv*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              KernelFeatureListAsync,
              ((base::OnceCallback<void(bool /*result*/, const std::string& /*csv*/)>) /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              DRMTraceSetCategories,
              (uint32_t /*in_categories*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              DRMTraceSetCategoriesAsync,
              (uint32_t /*in_categories*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              DRMTraceSetSize,
              (uint32_t /*in_size*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              DRMTraceSetSizeAsync,
              (uint32_t /*in_size*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              DRMTraceAnnotateLog,
              (const std::string& /*in_log*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              DRMTraceAnnotateLogAsync,
              (const std::string& /*in_log*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              DRMTraceSnapshot,
              (uint32_t /*in_type*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              DRMTraceSnapshotAsync,
              (uint32_t /*in_type*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              PrintscanDebugSetCategories,
              (uint32_t /*in_categories*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              PrintscanDebugSetCategoriesAsync,
              (uint32_t /*in_categories*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  void RegisterPacketCaptureStartSignalHandler(
    base::RepeatingClosure signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterPacketCaptureStartSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterPacketCaptureStartSignalHandler,
              (base::RepeatingClosure /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterPacketCaptureStopSignalHandler(
    base::RepeatingClosure signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterPacketCaptureStopSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterPacketCaptureStopSignalHandler,
              (base::RepeatingClosure /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DEBUGD_CLIENT_OUT_DEFAULT_GEN_INCLUDE_DEBUGD_DBUS_PROXY_MOCKS_H
