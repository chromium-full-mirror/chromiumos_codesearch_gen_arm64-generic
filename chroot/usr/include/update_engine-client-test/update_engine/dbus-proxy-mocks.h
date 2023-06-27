// Automatic generation of D-Bus interface mock proxies for:
//  - org.chromium.UpdateEngineInterface
#ifndef ____CHROMEOS_DBUS_BINDING___VAR_CACHE_PORTAGE_CHROMEOS_BASE_UPDATE_ENGINE_CLIENT_OUT_DEFAULT_GEN_INCLUDE_UPDATE_ENGINE_DBUS_PROXY_MOCKS_H
#define ____CHROMEOS_DBUS_BINDING___VAR_CACHE_PORTAGE_CHROMEOS_BASE_UPDATE_ENGINE_CLIENT_OUT_DEFAULT_GEN_INCLUDE_UPDATE_ENGINE_DBUS_PROXY_MOCKS_H
#include <string>
#include <vector>

#include <base/functional/callback_forward.h>
#include <base/logging.h>
#include <brillo/any.h>
#include <brillo/errors/error.h>
#include <brillo/variant_dictionary.h>
#include <gmock/gmock.h>

#include "update_engine/dbus-proxies.h"

namespace org {
namespace chromium {

// Mock object for UpdateEngineInterfaceProxyInterface.
class UpdateEngineInterfaceProxyMock : public UpdateEngineInterfaceProxyInterface {
 public:
  UpdateEngineInterfaceProxyMock() = default;
  UpdateEngineInterfaceProxyMock(const UpdateEngineInterfaceProxyMock&) = delete;
  UpdateEngineInterfaceProxyMock& operator=(const UpdateEngineInterfaceProxyMock&) = delete;

  MOCK_METHOD(bool,
              Update,
              (const update_engine::UpdateParams& /*in_update_params*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              UpdateAsync,
              (const update_engine::UpdateParams& /*in_update_params*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ApplyDeferredUpdate,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ApplyDeferredUpdateAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ApplyDeferredUpdateAdvanced,
              (const update_engine::ApplyUpdateConfig& /*in_config*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ApplyDeferredUpdateAdvancedAsync,
              (const update_engine::ApplyUpdateConfig& /*in_config*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              AttemptInstall,
              (const std::string& /*in_omaha_url*/,
               const std::vector<std::string>& /*in_dlc_ids*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              AttemptInstallAsync,
              (const std::string& /*in_omaha_url*/,
               const std::vector<std::string>& /*in_dlc_ids*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Install,
              (const update_engine::InstallParams& /*in_install_params*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              InstallAsync,
              (const update_engine::InstallParams& /*in_install_params*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              AttemptRollback,
              (bool /*in_powerwash*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              AttemptRollbackAsync,
              (bool /*in_powerwash*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              CanRollback,
              (bool* /*out_can_rollback*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              CanRollbackAsync,
              (base::OnceCallback<void(bool /*can_rollback*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ResetStatus,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ResetStatusAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetDlcActiveValue,
              (bool /*in_is_active*/,
               const std::string& /*in_dlc_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetDlcActiveValueAsync,
              (bool /*in_is_active*/,
               const std::string& /*in_dlc_id*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetStatusAdvanced,
              (update_engine::StatusResult* /*out_status*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetStatusAdvancedAsync,
              (base::OnceCallback<void(const update_engine::StatusResult& /*status*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetStatus,
              (int32_t /*in_update_status*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetStatusAsync,
              (int32_t /*in_update_status*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RebootIfNeeded,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RebootIfNeededAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetChannel,
              (const std::string& /*in_target_channel*/,
               bool /*in_is_powerwash_allowed*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetChannelAsync,
              (const std::string& /*in_target_channel*/,
               bool /*in_is_powerwash_allowed*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetChannel,
              (bool /*in_get_current_channel*/,
               std::string* /*out_channel*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetChannelAsync,
              (bool /*in_get_current_channel*/,
               base::OnceCallback<void(const std::string& /*channel*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetCohortHint,
              (const std::string& /*in_cohort_hint*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetCohortHintAsync,
              (const std::string& /*in_cohort_hint*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetCohortHint,
              (std::string* /*out_cohort_hint*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetCohortHintAsync,
              (base::OnceCallback<void(const std::string& /*cohort_hint*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetP2PUpdatePermission,
              (bool /*in_enabled*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetP2PUpdatePermissionAsync,
              (bool /*in_enabled*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetP2PUpdatePermission,
              (bool* /*out_enabled*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetP2PUpdatePermissionAsync,
              (base::OnceCallback<void(bool /*enabled*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetUpdateOverCellularPermission,
              (bool /*in_allowed*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetUpdateOverCellularPermissionAsync,
              (bool /*in_allowed*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetUpdateOverCellularTarget,
              (const std::string& /*in_target_version*/,
               int64_t /*in_target_size*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetUpdateOverCellularTargetAsync,
              (const std::string& /*in_target_version*/,
               int64_t /*in_target_size*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetUpdateOverCellularPermission,
              (bool* /*out_allowed*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetUpdateOverCellularPermissionAsync,
              (base::OnceCallback<void(bool /*allowed*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ToggleFeature,
              (const std::string& /*in_feature*/,
               bool /*in_enable*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ToggleFeatureAsync,
              (const std::string& /*in_feature*/,
               bool /*in_enable*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              IsFeatureEnabled,
              (const std::string& /*in_feature*/,
               bool* /*out_enabled*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              IsFeatureEnabledAsync,
              (const std::string& /*in_feature*/,
               base::OnceCallback<void(bool /*enabled*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetDurationSinceUpdate,
              (int64_t* /*out_usec_wallclock*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetDurationSinceUpdateAsync,
              (base::OnceCallback<void(int64_t /*usec_wallclock*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetPrevVersion,
              (std::string* /*out_prev_version*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetPrevVersionAsync,
              (base::OnceCallback<void(const std::string& /*prev_version*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetRollbackPartition,
              (std::string* /*out_rollback_partition_name*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetRollbackPartitionAsync,
              (base::OnceCallback<void(const std::string& /*rollback_partition_name*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetLastAttemptError,
              (int32_t* /*out_last_attempt_error*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetLastAttemptErrorAsync,
              (base::OnceCallback<void(int32_t /*last_attempt_error*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  void RegisterStatusUpdateAdvancedSignalHandler(
    const base::RepeatingCallback<void(const update_engine::StatusResult&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterStatusUpdateAdvancedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterStatusUpdateAdvancedSignalHandler,
              (const base::RepeatingCallback<void(const update_engine::StatusResult&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___VAR_CACHE_PORTAGE_CHROMEOS_BASE_UPDATE_ENGINE_CLIENT_OUT_DEFAULT_GEN_INCLUDE_UPDATE_ENGINE_DBUS_PROXY_MOCKS_H
