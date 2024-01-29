// Automatic generation of D-Bus interface mock proxies for:
//  - org.freedesktop.fwupd
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_FWUPD_DBUS_PROXY_MOCKS_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_FWUPD_DBUS_PROXY_MOCKS_H
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
namespace freedesktop {

// Mock object for fwupdProxyInterface.
class fwupdProxyMock : public fwupdProxyInterface {
 public:
  fwupdProxyMock() = default;
  fwupdProxyMock(const fwupdProxyMock&) = delete;
  fwupdProxyMock& operator=(const fwupdProxyMock&) = delete;

  MOCK_METHOD(bool,
              GetDevices,
              (std::vector<brillo::VariantDictionary>* /*out_devices*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetDevicesAsync,
              (base::OnceCallback<void(const std::vector<brillo::VariantDictionary>& /*devices*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetPlugins,
              (std::vector<brillo::VariantDictionary>* /*out_plugins*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetPluginsAsync,
              (base::OnceCallback<void(const std::vector<brillo::VariantDictionary>& /*plugins*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetReleases,
              (const std::string& /*in_device_id*/,
               std::vector<brillo::VariantDictionary>* /*out_releases*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetReleasesAsync,
              (const std::string& /*in_device_id*/,
               base::OnceCallback<void(const std::vector<brillo::VariantDictionary>& /*releases*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetDowngrades,
              (const std::string& /*in_device_id*/,
               std::vector<brillo::VariantDictionary>* /*out_releases*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetDowngradesAsync,
              (const std::string& /*in_device_id*/,
               base::OnceCallback<void(const std::vector<brillo::VariantDictionary>& /*releases*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetUpgrades,
              (const std::string& /*in_device_id*/,
               std::vector<brillo::VariantDictionary>* /*out_releases*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetUpgradesAsync,
              (const std::string& /*in_device_id*/,
               base::OnceCallback<void(const std::vector<brillo::VariantDictionary>& /*releases*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetDetails,
              (const base::ScopedFD& /*in_handle*/,
               std::vector<brillo::VariantDictionary>* /*out_results*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetDetailsAsync,
              (const base::ScopedFD& /*in_handle*/,
               base::OnceCallback<void(const std::vector<brillo::VariantDictionary>& /*results*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetHistory,
              (std::vector<brillo::VariantDictionary>* /*out_devices*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetHistoryAsync,
              (base::OnceCallback<void(const std::vector<brillo::VariantDictionary>& /*devices*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetHostSecurityAttrs,
              (std::vector<brillo::VariantDictionary>* /*out_attrs*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetHostSecurityAttrsAsync,
              (base::OnceCallback<void(const std::vector<brillo::VariantDictionary>& /*attrs*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetHostSecurityEvents,
              (uint32_t /*in_limit*/,
               std::vector<brillo::VariantDictionary>* /*out_attrs*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetHostSecurityEventsAsync,
              (uint32_t /*in_limit*/,
               base::OnceCallback<void(const std::vector<brillo::VariantDictionary>& /*attrs*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetReportMetadata,
              ((std::map<std::string, std::string>*) /*out_attrs*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetReportMetadataAsync,
              ((base::OnceCallback<void(const std::map<std::string, std::string>& /*attrs*/)>) /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetHints,
              ((const std::map<std::string, std::string>&) /*in_hints*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetHintsAsync,
              ((const std::map<std::string, std::string>&) /*in_hints*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Install,
              (const std::string& /*in_id*/,
               const base::ScopedFD& /*in_handle*/,
               const brillo::VariantDictionary& /*in_options*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              InstallAsync,
              (const std::string& /*in_id*/,
               const base::ScopedFD& /*in_handle*/,
               const brillo::VariantDictionary& /*in_options*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Verify,
              (const std::string& /*in_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              VerifyAsync,
              (const std::string& /*in_id*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              VerifyUpdate,
              (const std::string& /*in_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              VerifyUpdateAsync,
              (const std::string& /*in_id*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Unlock,
              (const std::string& /*in_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              UnlockAsync,
              (const std::string& /*in_id*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Activate,
              (const std::string& /*in_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ActivateAsync,
              (const std::string& /*in_id*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetResults,
              (const std::string& /*in_id*/,
               brillo::VariantDictionary* /*out_results*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetResultsAsync,
              (const std::string& /*in_id*/,
               base::OnceCallback<void(const brillo::VariantDictionary& /*results*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetRemotes,
              (std::vector<brillo::VariantDictionary>* /*out_results*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetRemotesAsync,
              (base::OnceCallback<void(const std::vector<brillo::VariantDictionary>& /*results*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetApprovedFirmware,
              (std::vector<std::string>* /*out_checksums*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetApprovedFirmwareAsync,
              (base::OnceCallback<void(const std::vector<std::string>& /*checksums*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetApprovedFirmware,
              (const std::vector<std::string>& /*in_checksums*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetApprovedFirmwareAsync,
              (const std::vector<std::string>& /*in_checksums*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetBlockedFirmware,
              (std::vector<std::string>* /*out_checksums*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetBlockedFirmwareAsync,
              (base::OnceCallback<void(const std::vector<std::string>& /*checksums*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetBlockedFirmware,
              (const std::vector<std::string>& /*in_checksums*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetBlockedFirmwareAsync,
              (const std::vector<std::string>& /*in_checksums*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetFeatureFlags,
              (uint64_t /*in_feature_flags*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetFeatureFlagsAsync,
              (uint64_t /*in_feature_flags*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ClearResults,
              (const std::string& /*in_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ClearResultsAsync,
              (const std::string& /*in_id*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ModifyDevice,
              (const std::string& /*in_device_id*/,
               const std::string& /*in_key*/,
               const std::string& /*in_value*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ModifyDeviceAsync,
              (const std::string& /*in_device_id*/,
               const std::string& /*in_key*/,
               const std::string& /*in_value*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ModifyConfig,
              (const std::string& /*in_key*/,
               const std::string& /*in_value*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ModifyConfigAsync,
              (const std::string& /*in_key*/,
               const std::string& /*in_value*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              UpdateMetadata,
              (const std::string& /*in_remote_id*/,
               const base::ScopedFD& /*in_data*/,
               const base::ScopedFD& /*in_signature*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              UpdateMetadataAsync,
              (const std::string& /*in_remote_id*/,
               const base::ScopedFD& /*in_data*/,
               const base::ScopedFD& /*in_signature*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ModifyRemote,
              (const std::string& /*in_remote_id*/,
               const std::string& /*in_key*/,
               const std::string& /*in_value*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ModifyRemoteAsync,
              (const std::string& /*in_remote_id*/,
               const std::string& /*in_key*/,
               const std::string& /*in_value*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              FixHostSecurityAttr,
              (const std::string& /*in_appstream_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              FixHostSecurityAttrAsync,
              (const std::string& /*in_appstream_id*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              UndoHostSecurityAttr,
              (const std::string& /*in_appstream_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              UndoHostSecurityAttrAsync,
              (const std::string& /*in_appstream_id*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SelfSign,
              (const std::string& /*in_data*/,
               const brillo::VariantDictionary& /*in_options*/,
               std::string* /*out_sig*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SelfSignAsync,
              (const std::string& /*in_data*/,
               const brillo::VariantDictionary& /*in_options*/,
               base::OnceCallback<void(const std::string& /*sig*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetBiosSettings,
              ((const std::map<std::string, std::string>&) /*in_settings*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetBiosSettingsAsync,
              ((const std::map<std::string, std::string>&) /*in_settings*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetBiosSettings,
              (std::vector<brillo::VariantDictionary>* /*out_attrs*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetBiosSettingsAsync,
              (base::OnceCallback<void(const std::vector<brillo::VariantDictionary>& /*attrs*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Inhibit,
              (const std::string& /*in_reason*/,
               std::string* /*out_inhibit_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              InhibitAsync,
              (const std::string& /*in_reason*/,
               base::OnceCallback<void(const std::string& /*inhibit_id*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Uninhibit,
              (const std::string& /*in_inhibit_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              UninhibitAsync,
              (const std::string& /*in_inhibit_id*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Quit,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              QuitAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              EmulationLoad,
              (const std::vector<uint8_t>& /*in_data*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              EmulationLoadAsync,
              (const std::vector<uint8_t>& /*in_data*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              EmulationSave,
              (std::vector<uint8_t>* /*out_data*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              EmulationSaveAsync,
              (base::OnceCallback<void(const std::vector<uint8_t>& /*data*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  void RegisterChangedSignalHandler(
    base::RepeatingClosure signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterChangedSignalHandler,
              (base::RepeatingClosure /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterDeviceAddedSignalHandler(
    const base::RepeatingCallback<void(const brillo::VariantDictionary&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterDeviceAddedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterDeviceAddedSignalHandler,
              (const base::RepeatingCallback<void(const brillo::VariantDictionary&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterDeviceRemovedSignalHandler(
    const base::RepeatingCallback<void(const brillo::VariantDictionary&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterDeviceRemovedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterDeviceRemovedSignalHandler,
              (const base::RepeatingCallback<void(const brillo::VariantDictionary&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterDeviceChangedSignalHandler(
    const base::RepeatingCallback<void(const brillo::VariantDictionary&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterDeviceChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterDeviceChangedSignalHandler,
              (const base::RepeatingCallback<void(const brillo::VariantDictionary&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterDeviceRequestSignalHandler(
    const base::RepeatingCallback<void(const brillo::VariantDictionary&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterDeviceRequestSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterDeviceRequestSignalHandler,
              (const base::RepeatingCallback<void(const brillo::VariantDictionary&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  MOCK_METHOD(const std::string&, daemon_version, (), (const, override));
  MOCK_METHOD(bool, is_daemon_version_valid, (), (const, override));

  MOCK_METHOD(const std::string&, host_bkc, (), (const, override));
  MOCK_METHOD(bool, is_host_bkc_valid, (), (const, override));

  MOCK_METHOD(const std::string&, host_vendor, (), (const, override));
  MOCK_METHOD(bool, is_host_vendor_valid, (), (const, override));

  MOCK_METHOD(const std::string&, host_product, (), (const, override));
  MOCK_METHOD(bool, is_host_product_valid, (), (const, override));

  MOCK_METHOD(const std::string&, host_machine_id, (), (const, override));
  MOCK_METHOD(bool, is_host_machine_id_valid, (), (const, override));

  MOCK_METHOD(const std::string&, host_security_id, (), (const, override));
  MOCK_METHOD(bool, is_host_security_id_valid, (), (const, override));

  MOCK_METHOD(bool, tainted, (), (const, override));
  MOCK_METHOD(bool, is_tainted_valid, (), (const, override));

  MOCK_METHOD(bool, interactive, (), (const, override));
  MOCK_METHOD(bool, is_interactive_valid, (), (const, override));

  MOCK_METHOD(uint32_t, status, (), (const, override));
  MOCK_METHOD(bool, is_status_valid, (), (const, override));

  MOCK_METHOD(uint32_t, percentage, (), (const, override));
  MOCK_METHOD(bool, is_percentage_valid, (), (const, override));

  MOCK_METHOD(uint32_t, battery_level, (), (const, override));
  MOCK_METHOD(bool, is_battery_level_valid, (), (const, override));

  MOCK_METHOD(uint32_t, battery_threshold, (), (const, override));
  MOCK_METHOD(bool, is_battery_threshold_valid, (), (const, override));

  MOCK_METHOD(bool, only_trusted, (), (const, override));
  MOCK_METHOD(bool, is_only_trusted_valid, (), (const, override));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));

  MOCK_METHOD(void,
              InitializeProperties,
              ((const base::RepeatingCallback<void(fwupdProxyInterface*,
                                                   const std::string&)>&)),
              (override));
};
}  // namespace freedesktop
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_FWUPD_DBUS_PROXY_MOCKS_H
