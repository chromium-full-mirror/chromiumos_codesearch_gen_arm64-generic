// Automatic generation of D-Bus interface mock proxies for:
//  - org.chromium.SessionManagerInterface
#ifndef ____CHROMEOS_DBUS_BINDING___VAR_CACHE_PORTAGE_CHROMEOS_BASE_SESSION_MANAGER_CLIENT_OUT_DEFAULT_GEN_INCLUDE_SESSION_MANAGER_DBUS_PROXY_MOCKS_H
#define ____CHROMEOS_DBUS_BINDING___VAR_CACHE_PORTAGE_CHROMEOS_BASE_SESSION_MANAGER_CLIENT_OUT_DEFAULT_GEN_INCLUDE_SESSION_MANAGER_DBUS_PROXY_MOCKS_H
#include <string>
#include <vector>

#include <base/functional/callback_forward.h>
#include <base/logging.h>
#include <brillo/any.h>
#include <brillo/errors/error.h>
#include <brillo/variant_dictionary.h>
#include <gmock/gmock.h>

#include "session_manager/dbus-proxies.h"

namespace org {
namespace chromium {

// Mock object for SessionManagerInterfaceProxyInterface.
class SessionManagerInterfaceProxyMock : public SessionManagerInterfaceProxyInterface {
 public:
  SessionManagerInterfaceProxyMock() = default;
  SessionManagerInterfaceProxyMock(const SessionManagerInterfaceProxyMock&) = delete;
  SessionManagerInterfaceProxyMock& operator=(const SessionManagerInterfaceProxyMock&) = delete;

  MOCK_METHOD(bool,
              EmitLoginPromptVisible,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              EmitLoginPromptVisibleAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              EmitAshInitialized,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              EmitAshInitializedAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              EnableChromeTesting,
              (bool /*in_force_relaunch*/,
               const std::vector<std::string>& /*in_extra_arguments*/,
               const std::vector<std::string>& /*in_extra_environment_variables*/,
               std::string* /*out_filepath*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              EnableChromeTestingAsync,
              (bool /*in_force_relaunch*/,
               const std::vector<std::string>& /*in_extra_arguments*/,
               const std::vector<std::string>& /*in_extra_environment_variables*/,
               base::OnceCallback<void(const std::string& /*filepath*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SaveLoginPassword,
              (const base::ScopedFD& /*in_password_fd*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SaveLoginPasswordAsync,
              (const base::ScopedFD& /*in_password_fd*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              LoginScreenStorageStore,
              (const std::string& /*in_key*/,
               const std::vector<uint8_t>& /*in_metadata*/,
               uint64_t /*in_value_size*/,
               const base::ScopedFD& /*in_value_fd*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              LoginScreenStorageStoreAsync,
              (const std::string& /*in_key*/,
               const std::vector<uint8_t>& /*in_metadata*/,
               uint64_t /*in_value_size*/,
               const base::ScopedFD& /*in_value_fd*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              LoginScreenStorageRetrieve,
              (const std::string& /*in_key*/,
               uint64_t* /*out_value_size*/,
               base::ScopedFD* /*out_value_fd*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              LoginScreenStorageRetrieveAsync,
              (const std::string& /*in_key*/,
               (base::OnceCallback<void(uint64_t /*value_size*/, const base::ScopedFD& /*value_fd*/)>) /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              LoginScreenStorageListKeys,
              (std::vector<std::string>* /*out_keys*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              LoginScreenStorageListKeysAsync,
              (base::OnceCallback<void(const std::vector<std::string>& /*keys*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              LoginScreenStorageDelete,
              (const std::string& /*in_key*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              LoginScreenStorageDeleteAsync,
              (const std::string& /*in_key*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              StartSession,
              (const std::string& /*in_account_id*/,
               const std::string& /*in_unique_identifier*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              StartSessionAsync,
              (const std::string& /*in_account_id*/,
               const std::string& /*in_unique_identifier*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              StartSessionEx,
              (const std::string& /*in_account_id*/,
               const std::string& /*in_unique_identifier*/,
               bool /*in_chrome_owner_key*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              StartSessionExAsync,
              (const std::string& /*in_account_id*/,
               const std::string& /*in_unique_identifier*/,
               bool /*in_chrome_owner_key*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              StopSession,
              (const std::string& /*in_unique_identifier*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              StopSessionAsync,
              (const std::string& /*in_unique_identifier*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              StopSessionWithReason,
              (uint32_t /*in_reason*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              StopSessionWithReasonAsync,
              (uint32_t /*in_reason*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              LoadShillProfile,
              (const std::string& /*in_account_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              LoadShillProfileAsync,
              (const std::string& /*in_account_id*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              StorePolicyEx,
              (const std::vector<uint8_t>& /*in_descriptor_blob*/,
               const std::vector<uint8_t>& /*in_policy_blob*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              StorePolicyExAsync,
              (const std::vector<uint8_t>& /*in_descriptor_blob*/,
               const std::vector<uint8_t>& /*in_policy_blob*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RetrievePolicyEx,
              (const std::vector<uint8_t>& /*in_descriptor_blob*/,
               std::vector<uint8_t>* /*out_policy_blob*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RetrievePolicyExAsync,
              (const std::vector<uint8_t>& /*in_descriptor_blob*/,
               base::OnceCallback<void(const std::vector<uint8_t>& /*policy_blob*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RetrieveSessionState,
              (std::string* /*out_state*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RetrieveSessionStateAsync,
              (base::OnceCallback<void(const std::string& /*state*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RetrieveActiveSessions,
              ((std::map<std::string, std::string>*) /*out_sessions*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RetrieveActiveSessionsAsync,
              ((base::OnceCallback<void(const std::map<std::string, std::string>& /*sessions*/)>) /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RetrievePrimarySession,
              (std::string* /*out_username*/,
               std::string* /*out_sanitized_username*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RetrievePrimarySessionAsync,
              ((base::OnceCallback<void(const std::string& /*username*/, const std::string& /*sanitized_username*/)>) /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              IsGuestSessionActive,
              (bool* /*out_is_guest*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              IsGuestSessionActiveAsync,
              (base::OnceCallback<void(bool /*is_guest*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              HandleSupervisedUserCreationStarting,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              HandleSupervisedUserCreationStartingAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              HandleSupervisedUserCreationFinished,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              HandleSupervisedUserCreationFinishedAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              LockScreen,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              LockScreenAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              HandleLockScreenShown,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              HandleLockScreenShownAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              HandleLockScreenDismissed,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              HandleLockScreenDismissedAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              IsScreenLocked,
              (bool* /*out_screen_locked*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              IsScreenLockedAsync,
              (base::OnceCallback<void(bool /*screen_locked*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RestartJob,
              (const base::ScopedFD& /*in_cred_fd*/,
               const std::vector<std::string>& /*in_argv*/,
               uint32_t /*in_mode*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RestartJobAsync,
              (const base::ScopedFD& /*in_cred_fd*/,
               const std::vector<std::string>& /*in_argv*/,
               uint32_t /*in_mode*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              StartDeviceWipe,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              StartDeviceWipeAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              StartRemoteDeviceWipe,
              (const std::vector<uint8_t>& /*in_signed_command*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              StartRemoteDeviceWipeAsync,
              (const std::vector<uint8_t>& /*in_signed_command*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ClearForcedReEnrollmentVpd,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ClearForcedReEnrollmentVpdAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              StartTPMFirmwareUpdate,
              (const std::string& /*in_update_mode*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              StartTPMFirmwareUpdateAsync,
              (const std::string& /*in_update_mode*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetFlagsForUser,
              (const std::string& /*in_account_id*/,
               const std::vector<std::string>& /*in_flags*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetFlagsForUserAsync,
              (const std::string& /*in_account_id*/,
               const std::vector<std::string>& /*in_flags*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetFeatureFlagsForUser,
              (const std::string& /*in_account_id*/,
               const std::vector<std::string>& /*in_feature_flags*/,
               (const std::map<std::string, std::string>&) /*in_origin_list_flags*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetFeatureFlagsForUserAsync,
              (const std::string& /*in_account_id*/,
               const std::vector<std::string>& /*in_feature_flags*/,
               (const std::map<std::string, std::string>&) /*in_origin_list_flags*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetServerBackedStateKeys,
              (std::vector<std::vector<uint8_t>>* /*out_state_keys*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetServerBackedStateKeysAsync,
              (base::OnceCallback<void(const std::vector<std::vector<uint8_t>>& /*state_keys*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetPsmDeviceActiveSecret,
              (std::string* /*out_derived_secret*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetPsmDeviceActiveSecretAsync,
              (base::OnceCallback<void(const std::string& /*derived_secret*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              InitMachineInfo,
              (const std::string& /*in_data*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              InitMachineInfoAsync,
              (const std::string& /*in_data*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              StartArcMiniContainer,
              (const std::vector<uint8_t>& /*in_request*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              StartArcMiniContainerAsync,
              (const std::vector<uint8_t>& /*in_request*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              UpgradeArcContainer,
              (const std::vector<uint8_t>& /*in_request*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              UpgradeArcContainerAsync,
              (const std::vector<uint8_t>& /*in_request*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              StopArcInstance,
              (const std::string& /*in_account_id*/,
               bool /*in_should_backup_log*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              StopArcInstanceAsync,
              (const std::string& /*in_account_id*/,
               bool /*in_should_backup_log*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetArcCpuRestriction,
              (uint32_t /*in_restriction_state*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetArcCpuRestrictionAsync,
              (uint32_t /*in_restriction_state*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              EmitArcBooted,
              (const std::string& /*in_account_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              EmitArcBootedAsync,
              (const std::string& /*in_account_id*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetArcStartTimeTicks,
              (int64_t* /*out_start_time*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetArcStartTimeTicksAsync,
              (base::OnceCallback<void(int64_t /*start_time*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              EnableAdbSideload,
              (bool* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              EnableAdbSideloadAsync,
              (base::OnceCallback<void(bool /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              QueryAdbSideload,
              (bool* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              QueryAdbSideloadAsync,
              (base::OnceCallback<void(bool /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              StartBrowserDataMigration,
              (const std::string& /*in_account_id*/,
               const std::string& /*in_mode*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              StartBrowserDataMigrationAsync,
              (const std::string& /*in_account_id*/,
               const std::string& /*in_mode*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              StartBrowserDataBackwardMigration,
              (const std::string& /*in_account_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              StartBrowserDataBackwardMigrationAsync,
              (const std::string& /*in_account_id*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              UnblockDevModeForInitialStateDetermination,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              UnblockDevModeForInitialStateDeterminationAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              UnblockDevModeForEnrollment,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              UnblockDevModeForEnrollmentAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              UnblockDevModeForCarrierLock,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              UnblockDevModeForCarrierLockAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              IsDevModeBlockedForCarrierLock,
              (bool* /*out_is_blocked*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              IsDevModeBlockedForCarrierLockAsync,
              (base::OnceCallback<void(bool /*is_blocked*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  void RegisterLoginPromptVisibleSignalHandler(
    base::RepeatingClosure signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterLoginPromptVisibleSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterLoginPromptVisibleSignalHandler,
              (base::RepeatingClosure /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterSessionStateChangedSignalHandler(
    const base::RepeatingCallback<void(const std::string&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterSessionStateChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterSessionStateChangedSignalHandler,
              (const base::RepeatingCallback<void(const std::string&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterSetOwnerKeyCompleteSignalHandler(
    const base::RepeatingCallback<void(const std::string&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterSetOwnerKeyCompleteSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterSetOwnerKeyCompleteSignalHandler,
              (const base::RepeatingCallback<void(const std::string&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterPropertyChangeCompleteSignalHandler(
    const base::RepeatingCallback<void(const std::string&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterPropertyChangeCompleteSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterPropertyChangeCompleteSignalHandler,
              (const base::RepeatingCallback<void(const std::string&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterScreenIsLockedSignalHandler(
    base::RepeatingClosure signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterScreenIsLockedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterScreenIsLockedSignalHandler,
              (base::RepeatingClosure /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterScreenIsUnlockedSignalHandler(
    base::RepeatingClosure signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterScreenIsUnlockedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterScreenIsUnlockedSignalHandler,
              (base::RepeatingClosure /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterArcInstanceStoppedSignalHandler(
    const base::RepeatingCallback<void(uint32_t)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterArcInstanceStoppedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterArcInstanceStoppedSignalHandler,
              (const base::RepeatingCallback<void(uint32_t)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___VAR_CACHE_PORTAGE_CHROMEOS_BASE_SESSION_MANAGER_CLIENT_OUT_DEFAULT_GEN_INCLUDE_SESSION_MANAGER_DBUS_PROXY_MOCKS_H
