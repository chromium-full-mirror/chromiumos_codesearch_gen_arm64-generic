// Automatic generation of D-Bus interface mock proxies for:
//  - org.chromium.UserDataAuthInterface
//  - org.chromium.CryptohomePkcs11Interface
//  - org.chromium.InstallAttributesInterface
//  - org.chromium.CryptohomeMiscInterface
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_CRYPTOHOME_CLIENT_OUT_DEFAULT_GEN_INCLUDE_USER_DATA_AUTH_DBUS_PROXY_MOCKS_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_CRYPTOHOME_CLIENT_OUT_DEFAULT_GEN_INCLUDE_USER_DATA_AUTH_DBUS_PROXY_MOCKS_H
#include <string>
#include <vector>

#include <base/functional/callback_forward.h>
#include <base/logging.h>
#include <brillo/any.h>
#include <brillo/errors/error.h>
#include <brillo/variant_dictionary.h>
#include <gmock/gmock.h>

#include "user_data_auth/dbus-proxies.h"

namespace org {
namespace chromium {

// Mock object for UserDataAuthInterfaceProxyInterface.
class UserDataAuthInterfaceProxyMock : public UserDataAuthInterfaceProxyInterface {
 public:
  UserDataAuthInterfaceProxyMock() = default;
  UserDataAuthInterfaceProxyMock(const UserDataAuthInterfaceProxyMock&) = delete;
  UserDataAuthInterfaceProxyMock& operator=(const UserDataAuthInterfaceProxyMock&) = delete;

  MOCK_METHOD(bool,
              IsMounted,
              (const user_data_auth::IsMountedRequest& /*in_request*/,
               user_data_auth::IsMountedReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              IsMountedAsync,
              (const user_data_auth::IsMountedRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::IsMountedReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Unmount,
              (const user_data_auth::UnmountRequest& /*in_request*/,
               user_data_auth::UnmountReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              UnmountAsync,
              (const user_data_auth::UnmountRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::UnmountReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Remove,
              (const user_data_auth::RemoveRequest& /*in_request*/,
               user_data_auth::RemoveReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RemoveAsync,
              (const user_data_auth::RemoveRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::RemoveReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ListKeys,
              (const user_data_auth::ListKeysRequest& /*in_request*/,
               user_data_auth::ListKeysReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ListKeysAsync,
              (const user_data_auth::ListKeysRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::ListKeysReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetWebAuthnSecret,
              (const user_data_auth::GetWebAuthnSecretRequest& /*in_request*/,
               user_data_auth::GetWebAuthnSecretReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetWebAuthnSecretAsync,
              (const user_data_auth::GetWebAuthnSecretRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::GetWebAuthnSecretReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetWebAuthnSecretHash,
              (const user_data_auth::GetWebAuthnSecretHashRequest& /*in_request*/,
               user_data_auth::GetWebAuthnSecretHashReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetWebAuthnSecretHashAsync,
              (const user_data_auth::GetWebAuthnSecretHashRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::GetWebAuthnSecretHashReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetHibernateSecret,
              (const user_data_auth::GetHibernateSecretRequest& /*in_request*/,
               user_data_auth::GetHibernateSecretReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetHibernateSecretAsync,
              (const user_data_auth::GetHibernateSecretRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::GetHibernateSecretReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetEncryptionInfo,
              (const user_data_auth::GetEncryptionInfoRequest& /*in_request*/,
               user_data_auth::GetEncryptionInfoReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetEncryptionInfoAsync,
              (const user_data_auth::GetEncryptionInfoRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::GetEncryptionInfoReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              StartMigrateToDircrypto,
              (const user_data_auth::StartMigrateToDircryptoRequest& /*in_request*/,
               user_data_auth::StartMigrateToDircryptoReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              StartMigrateToDircryptoAsync,
              (const user_data_auth::StartMigrateToDircryptoRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::StartMigrateToDircryptoReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              NeedsDircryptoMigration,
              (const user_data_auth::NeedsDircryptoMigrationRequest& /*in_request*/,
               user_data_auth::NeedsDircryptoMigrationReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              NeedsDircryptoMigrationAsync,
              (const user_data_auth::NeedsDircryptoMigrationRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::NeedsDircryptoMigrationReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetSupportedKeyPolicies,
              (const user_data_auth::GetSupportedKeyPoliciesRequest& /*in_request*/,
               user_data_auth::GetSupportedKeyPoliciesReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetSupportedKeyPoliciesAsync,
              (const user_data_auth::GetSupportedKeyPoliciesRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::GetSupportedKeyPoliciesReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetAccountDiskUsage,
              (const user_data_auth::GetAccountDiskUsageRequest& /*in_request*/,
               user_data_auth::GetAccountDiskUsageReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetAccountDiskUsageAsync,
              (const user_data_auth::GetAccountDiskUsageRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::GetAccountDiskUsageReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              StartAuthSession,
              (const user_data_auth::StartAuthSessionRequest& /*in_request*/,
               user_data_auth::StartAuthSessionReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              StartAuthSessionAsync,
              (const user_data_auth::StartAuthSessionRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::StartAuthSessionReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              InvalidateAuthSession,
              (const user_data_auth::InvalidateAuthSessionRequest& /*in_request*/,
               user_data_auth::InvalidateAuthSessionReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              InvalidateAuthSessionAsync,
              (const user_data_auth::InvalidateAuthSessionRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::InvalidateAuthSessionReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ExtendAuthSession,
              (const user_data_auth::ExtendAuthSessionRequest& /*in_request*/,
               user_data_auth::ExtendAuthSessionReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ExtendAuthSessionAsync,
              (const user_data_auth::ExtendAuthSessionRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::ExtendAuthSessionReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetAuthSessionStatus,
              (const user_data_auth::GetAuthSessionStatusRequest& /*in_request*/,
               user_data_auth::GetAuthSessionStatusReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetAuthSessionStatusAsync,
              (const user_data_auth::GetAuthSessionStatusRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::GetAuthSessionStatusReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              CreatePersistentUser,
              (const user_data_auth::CreatePersistentUserRequest& /*in_request*/,
               user_data_auth::CreatePersistentUserReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              CreatePersistentUserAsync,
              (const user_data_auth::CreatePersistentUserRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::CreatePersistentUserReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              AuthenticateAuthFactor,
              (const user_data_auth::AuthenticateAuthFactorRequest& /*in_request*/,
               user_data_auth::AuthenticateAuthFactorReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              AuthenticateAuthFactorAsync,
              (const user_data_auth::AuthenticateAuthFactorRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::AuthenticateAuthFactorReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              PrepareGuestVault,
              (const user_data_auth::PrepareGuestVaultRequest& /*in_request*/,
               user_data_auth::PrepareGuestVaultReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              PrepareGuestVaultAsync,
              (const user_data_auth::PrepareGuestVaultRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::PrepareGuestVaultReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              PrepareEphemeralVault,
              (const user_data_auth::PrepareEphemeralVaultRequest& /*in_request*/,
               user_data_auth::PrepareEphemeralVaultReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              PrepareEphemeralVaultAsync,
              (const user_data_auth::PrepareEphemeralVaultRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::PrepareEphemeralVaultReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              PreparePersistentVault,
              (const user_data_auth::PreparePersistentVaultRequest& /*in_request*/,
               user_data_auth::PreparePersistentVaultReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              PreparePersistentVaultAsync,
              (const user_data_auth::PreparePersistentVaultRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::PreparePersistentVaultReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              PrepareVaultForMigration,
              (const user_data_auth::PrepareVaultForMigrationRequest& /*in_request*/,
               user_data_auth::PrepareVaultForMigrationReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              PrepareVaultForMigrationAsync,
              (const user_data_auth::PrepareVaultForMigrationRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::PrepareVaultForMigrationReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              AddAuthFactor,
              (const user_data_auth::AddAuthFactorRequest& /*in_request*/,
               user_data_auth::AddAuthFactorReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              AddAuthFactorAsync,
              (const user_data_auth::AddAuthFactorRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::AddAuthFactorReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              UpdateAuthFactor,
              (const user_data_auth::UpdateAuthFactorRequest& /*in_request*/,
               user_data_auth::UpdateAuthFactorReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              UpdateAuthFactorAsync,
              (const user_data_auth::UpdateAuthFactorRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::UpdateAuthFactorReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              UpdateAuthFactorMetadata,
              (const user_data_auth::UpdateAuthFactorMetadataRequest& /*in_request*/,
               user_data_auth::UpdateAuthFactorMetadataReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              UpdateAuthFactorMetadataAsync,
              (const user_data_auth::UpdateAuthFactorMetadataRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::UpdateAuthFactorMetadataReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RelabelAuthFactor,
              (const user_data_auth::RelabelAuthFactorRequest& /*in_request*/,
               user_data_auth::RelabelAuthFactorReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RelabelAuthFactorAsync,
              (const user_data_auth::RelabelAuthFactorRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::RelabelAuthFactorReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ReplaceAuthFactor,
              (const user_data_auth::ReplaceAuthFactorRequest& /*in_request*/,
               user_data_auth::ReplaceAuthFactorReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ReplaceAuthFactorAsync,
              (const user_data_auth::ReplaceAuthFactorRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::ReplaceAuthFactorReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RemoveAuthFactor,
              (const user_data_auth::RemoveAuthFactorRequest& /*in_request*/,
               user_data_auth::RemoveAuthFactorReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RemoveAuthFactorAsync,
              (const user_data_auth::RemoveAuthFactorRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::RemoveAuthFactorReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ListAuthFactors,
              (const user_data_auth::ListAuthFactorsRequest& /*in_request*/,
               user_data_auth::ListAuthFactorsReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ListAuthFactorsAsync,
              (const user_data_auth::ListAuthFactorsRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::ListAuthFactorsReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetAuthFactorExtendedInfo,
              (const user_data_auth::GetAuthFactorExtendedInfoRequest& /*in_request*/,
               user_data_auth::GetAuthFactorExtendedInfoReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetAuthFactorExtendedInfoAsync,
              (const user_data_auth::GetAuthFactorExtendedInfoRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::GetAuthFactorExtendedInfoReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              PrepareAuthFactor,
              (const user_data_auth::PrepareAuthFactorRequest& /*in_request*/,
               user_data_auth::PrepareAuthFactorReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              PrepareAuthFactorAsync,
              (const user_data_auth::PrepareAuthFactorRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::PrepareAuthFactorReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              TerminateAuthFactor,
              (const user_data_auth::TerminateAuthFactorRequest& /*in_request*/,
               user_data_auth::TerminateAuthFactorReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              TerminateAuthFactorAsync,
              (const user_data_auth::TerminateAuthFactorRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::TerminateAuthFactorReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetRecoveryRequest,
              (const user_data_auth::GetRecoveryRequestRequest& /*in_request*/,
               user_data_auth::GetRecoveryRequestReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetRecoveryRequestAsync,
              (const user_data_auth::GetRecoveryRequestRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::GetRecoveryRequestReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ResetApplicationContainer,
              (const user_data_auth::ResetApplicationContainerRequest& /*in_request*/,
               user_data_auth::ResetApplicationContainerReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ResetApplicationContainerAsync,
              (const user_data_auth::ResetApplicationContainerRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::ResetApplicationContainerReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              CreateVaultKeyset,
              (const user_data_auth::CreateVaultKeysetRequest& /*in_request*/,
               user_data_auth::CreateVaultKeysetReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              CreateVaultKeysetAsync,
              (const user_data_auth::CreateVaultKeysetRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::CreateVaultKeysetReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetArcDiskFeatures,
              (const user_data_auth::GetArcDiskFeaturesRequest& /*in_request*/,
               user_data_auth::GetArcDiskFeaturesReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetArcDiskFeaturesAsync,
              (const user_data_auth::GetArcDiskFeaturesRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::GetArcDiskFeaturesReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  void RegisterDircryptoMigrationProgressSignalHandler(
    const base::RepeatingCallback<void(const user_data_auth::DircryptoMigrationProgress&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterDircryptoMigrationProgressSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterDircryptoMigrationProgressSignalHandler,
              (const base::RepeatingCallback<void(const user_data_auth::DircryptoMigrationProgress&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterAuthFactorStatusUpdateSignalHandler(
    const base::RepeatingCallback<void(const user_data_auth::AuthFactorStatusUpdate&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterAuthFactorStatusUpdateSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterAuthFactorStatusUpdateSignalHandler,
              (const base::RepeatingCallback<void(const user_data_auth::AuthFactorStatusUpdate&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterLowDiskSpaceSignalHandler(
    const base::RepeatingCallback<void(const user_data_auth::LowDiskSpace&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterLowDiskSpaceSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterLowDiskSpaceSignalHandler,
              (const base::RepeatingCallback<void(const user_data_auth::LowDiskSpace&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterAuthScanResultSignalHandler(
    const base::RepeatingCallback<void(const user_data_auth::AuthScanResult&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterAuthScanResultSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterAuthScanResultSignalHandler,
              (const base::RepeatingCallback<void(const user_data_auth::AuthScanResult&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterPrepareAuthFactorProgressSignalHandler(
    const base::RepeatingCallback<void(const user_data_auth::PrepareAuthFactorProgress&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterPrepareAuthFactorProgressSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterPrepareAuthFactorProgressSignalHandler,
              (const base::RepeatingCallback<void(const user_data_auth::PrepareAuthFactorProgress&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterAuthenticateAuthFactorCompletedSignalHandler(
    const base::RepeatingCallback<void(const user_data_auth::AuthenticateAuthFactorCompleted&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterAuthenticateAuthFactorCompletedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterAuthenticateAuthFactorCompletedSignalHandler,
              (const base::RepeatingCallback<void(const user_data_auth::AuthenticateAuthFactorCompleted&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {

// Mock object for CryptohomePkcs11InterfaceProxyInterface.
class CryptohomePkcs11InterfaceProxyMock : public CryptohomePkcs11InterfaceProxyInterface {
 public:
  CryptohomePkcs11InterfaceProxyMock() = default;
  CryptohomePkcs11InterfaceProxyMock(const CryptohomePkcs11InterfaceProxyMock&) = delete;
  CryptohomePkcs11InterfaceProxyMock& operator=(const CryptohomePkcs11InterfaceProxyMock&) = delete;

  MOCK_METHOD(bool,
              Pkcs11IsTpmTokenReady,
              (const user_data_auth::Pkcs11IsTpmTokenReadyRequest& /*in_request*/,
               user_data_auth::Pkcs11IsTpmTokenReadyReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              Pkcs11IsTpmTokenReadyAsync,
              (const user_data_auth::Pkcs11IsTpmTokenReadyRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::Pkcs11IsTpmTokenReadyReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Pkcs11GetTpmTokenInfo,
              (const user_data_auth::Pkcs11GetTpmTokenInfoRequest& /*in_request*/,
               user_data_auth::Pkcs11GetTpmTokenInfoReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              Pkcs11GetTpmTokenInfoAsync,
              (const user_data_auth::Pkcs11GetTpmTokenInfoRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::Pkcs11GetTpmTokenInfoReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Pkcs11Terminate,
              (const user_data_auth::Pkcs11TerminateRequest& /*in_request*/,
               user_data_auth::Pkcs11TerminateReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              Pkcs11TerminateAsync,
              (const user_data_auth::Pkcs11TerminateRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::Pkcs11TerminateReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Pkcs11RestoreTpmTokens,
              (const user_data_auth::Pkcs11RestoreTpmTokensRequest& /*in_request*/,
               user_data_auth::Pkcs11RestoreTpmTokensReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              Pkcs11RestoreTpmTokensAsync,
              (const user_data_auth::Pkcs11RestoreTpmTokensRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::Pkcs11RestoreTpmTokensReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {

// Mock object for InstallAttributesInterfaceProxyInterface.
class InstallAttributesInterfaceProxyMock : public InstallAttributesInterfaceProxyInterface {
 public:
  InstallAttributesInterfaceProxyMock() = default;
  InstallAttributesInterfaceProxyMock(const InstallAttributesInterfaceProxyMock&) = delete;
  InstallAttributesInterfaceProxyMock& operator=(const InstallAttributesInterfaceProxyMock&) = delete;

  MOCK_METHOD(bool,
              InstallAttributesGet,
              (const user_data_auth::InstallAttributesGetRequest& /*in_request*/,
               user_data_auth::InstallAttributesGetReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              InstallAttributesGetAsync,
              (const user_data_auth::InstallAttributesGetRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::InstallAttributesGetReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              InstallAttributesSet,
              (const user_data_auth::InstallAttributesSetRequest& /*in_request*/,
               user_data_auth::InstallAttributesSetReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              InstallAttributesSetAsync,
              (const user_data_auth::InstallAttributesSetRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::InstallAttributesSetReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              InstallAttributesFinalize,
              (const user_data_auth::InstallAttributesFinalizeRequest& /*in_request*/,
               user_data_auth::InstallAttributesFinalizeReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              InstallAttributesFinalizeAsync,
              (const user_data_auth::InstallAttributesFinalizeRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::InstallAttributesFinalizeReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              InstallAttributesGetStatus,
              (const user_data_auth::InstallAttributesGetStatusRequest& /*in_request*/,
               user_data_auth::InstallAttributesGetStatusReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              InstallAttributesGetStatusAsync,
              (const user_data_auth::InstallAttributesGetStatusRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::InstallAttributesGetStatusReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetFirmwareManagementParameters,
              (const user_data_auth::GetFirmwareManagementParametersRequest& /*in_request*/,
               user_data_auth::GetFirmwareManagementParametersReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetFirmwareManagementParametersAsync,
              (const user_data_auth::GetFirmwareManagementParametersRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::GetFirmwareManagementParametersReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RemoveFirmwareManagementParameters,
              (const user_data_auth::RemoveFirmwareManagementParametersRequest& /*in_request*/,
               user_data_auth::RemoveFirmwareManagementParametersReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RemoveFirmwareManagementParametersAsync,
              (const user_data_auth::RemoveFirmwareManagementParametersRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::RemoveFirmwareManagementParametersReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetFirmwareManagementParameters,
              (const user_data_auth::SetFirmwareManagementParametersRequest& /*in_request*/,
               user_data_auth::SetFirmwareManagementParametersReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetFirmwareManagementParametersAsync,
              (const user_data_auth::SetFirmwareManagementParametersRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::SetFirmwareManagementParametersReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace chromium
}  // namespace org

namespace org {
namespace chromium {

// Mock object for CryptohomeMiscInterfaceProxyInterface.
class CryptohomeMiscInterfaceProxyMock : public CryptohomeMiscInterfaceProxyInterface {
 public:
  CryptohomeMiscInterfaceProxyMock() = default;
  CryptohomeMiscInterfaceProxyMock(const CryptohomeMiscInterfaceProxyMock&) = delete;
  CryptohomeMiscInterfaceProxyMock& operator=(const CryptohomeMiscInterfaceProxyMock&) = delete;

  MOCK_METHOD(bool,
              GetSystemSalt,
              (const user_data_auth::GetSystemSaltRequest& /*in_request*/,
               user_data_auth::GetSystemSaltReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetSystemSaltAsync,
              (const user_data_auth::GetSystemSaltRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::GetSystemSaltReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              UpdateCurrentUserActivityTimestamp,
              (const user_data_auth::UpdateCurrentUserActivityTimestampRequest& /*in_request*/,
               user_data_auth::UpdateCurrentUserActivityTimestampReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              UpdateCurrentUserActivityTimestampAsync,
              (const user_data_auth::UpdateCurrentUserActivityTimestampRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::UpdateCurrentUserActivityTimestampReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetSanitizedUsername,
              (const user_data_auth::GetSanitizedUsernameRequest& /*in_request*/,
               user_data_auth::GetSanitizedUsernameReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetSanitizedUsernameAsync,
              (const user_data_auth::GetSanitizedUsernameRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::GetSanitizedUsernameReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetLoginStatus,
              (const user_data_auth::GetLoginStatusRequest& /*in_request*/,
               user_data_auth::GetLoginStatusReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetLoginStatusAsync,
              (const user_data_auth::GetLoginStatusRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::GetLoginStatusReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              LockToSingleUserMountUntilReboot,
              (const user_data_auth::LockToSingleUserMountUntilRebootRequest& /*in_request*/,
               user_data_auth::LockToSingleUserMountUntilRebootReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              LockToSingleUserMountUntilRebootAsync,
              (const user_data_auth::LockToSingleUserMountUntilRebootRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::LockToSingleUserMountUntilRebootReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetRsuDeviceId,
              (const user_data_auth::GetRsuDeviceIdRequest& /*in_request*/,
               user_data_auth::GetRsuDeviceIdReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetRsuDeviceIdAsync,
              (const user_data_auth::GetRsuDeviceIdRequest& /*in_request*/,
               base::OnceCallback<void(const user_data_auth::GetRsuDeviceIdReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_CRYPTOHOME_CLIENT_OUT_DEFAULT_GEN_INCLUDE_USER_DATA_AUTH_DBUS_PROXY_MOCKS_H
