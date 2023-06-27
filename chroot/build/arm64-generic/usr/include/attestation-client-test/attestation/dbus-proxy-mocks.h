// Automatic generation of D-Bus interface mock proxies for:
//  - org.chromium.Attestation
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_ATTESTATION_CLIENT_OUT_DEFAULT_GEN_INCLUDE_ATTESTATION_DBUS_PROXY_MOCKS_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_ATTESTATION_CLIENT_OUT_DEFAULT_GEN_INCLUDE_ATTESTATION_DBUS_PROXY_MOCKS_H
#include <string>
#include <vector>

#include <base/functional/callback_forward.h>
#include <base/logging.h>
#include <brillo/any.h>
#include <brillo/errors/error.h>
#include <brillo/variant_dictionary.h>
#include <gmock/gmock.h>

#include "attestation/dbus-proxies.h"

namespace org {
namespace chromium {

// Mock object for AttestationProxyInterface.
class AttestationProxyMock : public AttestationProxyInterface {
 public:
  AttestationProxyMock() = default;
  AttestationProxyMock(const AttestationProxyMock&) = delete;
  AttestationProxyMock& operator=(const AttestationProxyMock&) = delete;

  MOCK_METHOD(bool,
              GetFeatures,
              (const attestation::GetFeaturesRequest& /*in_request*/,
               attestation::GetFeaturesReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetFeaturesAsync,
              (const attestation::GetFeaturesRequest& /*in_request*/,
               base::OnceCallback<void(const attestation::GetFeaturesReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetKeyInfo,
              (const attestation::GetKeyInfoRequest& /*in_request*/,
               attestation::GetKeyInfoReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetKeyInfoAsync,
              (const attestation::GetKeyInfoRequest& /*in_request*/,
               base::OnceCallback<void(const attestation::GetKeyInfoReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetEndorsementInfo,
              (const attestation::GetEndorsementInfoRequest& /*in_request*/,
               attestation::GetEndorsementInfoReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetEndorsementInfoAsync,
              (const attestation::GetEndorsementInfoRequest& /*in_request*/,
               base::OnceCallback<void(const attestation::GetEndorsementInfoReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetAttestationKeyInfo,
              (const attestation::GetAttestationKeyInfoRequest& /*in_request*/,
               attestation::GetAttestationKeyInfoReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetAttestationKeyInfoAsync,
              (const attestation::GetAttestationKeyInfoRequest& /*in_request*/,
               base::OnceCallback<void(const attestation::GetAttestationKeyInfoReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ActivateAttestationKey,
              (const attestation::ActivateAttestationKeyRequest& /*in_request*/,
               attestation::ActivateAttestationKeyReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ActivateAttestationKeyAsync,
              (const attestation::ActivateAttestationKeyRequest& /*in_request*/,
               base::OnceCallback<void(const attestation::ActivateAttestationKeyReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              CreateCertifiableKey,
              (const attestation::CreateCertifiableKeyRequest& /*in_request*/,
               attestation::CreateCertifiableKeyReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              CreateCertifiableKeyAsync,
              (const attestation::CreateCertifiableKeyRequest& /*in_request*/,
               base::OnceCallback<void(const attestation::CreateCertifiableKeyReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Decrypt,
              (const attestation::DecryptRequest& /*in_request*/,
               attestation::DecryptReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              DecryptAsync,
              (const attestation::DecryptRequest& /*in_request*/,
               base::OnceCallback<void(const attestation::DecryptReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Sign,
              (const attestation::SignRequest& /*in_request*/,
               attestation::SignReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SignAsync,
              (const attestation::SignRequest& /*in_request*/,
               base::OnceCallback<void(const attestation::SignReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RegisterKeyWithChapsToken,
              (const attestation::RegisterKeyWithChapsTokenRequest& /*in_request*/,
               attestation::RegisterKeyWithChapsTokenReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RegisterKeyWithChapsTokenAsync,
              (const attestation::RegisterKeyWithChapsTokenRequest& /*in_request*/,
               base::OnceCallback<void(const attestation::RegisterKeyWithChapsTokenReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetEnrollmentPreparations,
              (const attestation::GetEnrollmentPreparationsRequest& /*in_request*/,
               attestation::GetEnrollmentPreparationsReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetEnrollmentPreparationsAsync,
              (const attestation::GetEnrollmentPreparationsRequest& /*in_request*/,
               base::OnceCallback<void(const attestation::GetEnrollmentPreparationsReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetStatus,
              (const attestation::GetStatusRequest& /*in_request*/,
               attestation::GetStatusReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetStatusAsync,
              (const attestation::GetStatusRequest& /*in_request*/,
               base::OnceCallback<void(const attestation::GetStatusReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Verify,
              (const attestation::VerifyRequest& /*in_request*/,
               attestation::VerifyReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              VerifyAsync,
              (const attestation::VerifyRequest& /*in_request*/,
               base::OnceCallback<void(const attestation::VerifyReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              CreateEnrollRequest,
              (const attestation::CreateEnrollRequestRequest& /*in_request*/,
               attestation::CreateEnrollRequestReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              CreateEnrollRequestAsync,
              (const attestation::CreateEnrollRequestRequest& /*in_request*/,
               base::OnceCallback<void(const attestation::CreateEnrollRequestReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              FinishEnroll,
              (const attestation::FinishEnrollRequest& /*in_request*/,
               attestation::FinishEnrollReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              FinishEnrollAsync,
              (const attestation::FinishEnrollRequest& /*in_request*/,
               base::OnceCallback<void(const attestation::FinishEnrollReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              CreateCertificateRequest,
              (const attestation::CreateCertificateRequestRequest& /*in_request*/,
               attestation::CreateCertificateRequestReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              CreateCertificateRequestAsync,
              (const attestation::CreateCertificateRequestRequest& /*in_request*/,
               base::OnceCallback<void(const attestation::CreateCertificateRequestReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              FinishCertificateRequest,
              (const attestation::FinishCertificateRequestRequest& /*in_request*/,
               attestation::FinishCertificateRequestReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              FinishCertificateRequestAsync,
              (const attestation::FinishCertificateRequestRequest& /*in_request*/,
               base::OnceCallback<void(const attestation::FinishCertificateRequestReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Enroll,
              (const attestation::EnrollRequest& /*in_request*/,
               attestation::EnrollReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              EnrollAsync,
              (const attestation::EnrollRequest& /*in_request*/,
               base::OnceCallback<void(const attestation::EnrollReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetCertificate,
              (const attestation::GetCertificateRequest& /*in_request*/,
               attestation::GetCertificateReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetCertificateAsync,
              (const attestation::GetCertificateRequest& /*in_request*/,
               base::OnceCallback<void(const attestation::GetCertificateReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SignEnterpriseChallenge,
              (const attestation::SignEnterpriseChallengeRequest& /*in_request*/,
               attestation::SignEnterpriseChallengeReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SignEnterpriseChallengeAsync,
              (const attestation::SignEnterpriseChallengeRequest& /*in_request*/,
               base::OnceCallback<void(const attestation::SignEnterpriseChallengeReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SignSimpleChallenge,
              (const attestation::SignSimpleChallengeRequest& /*in_request*/,
               attestation::SignSimpleChallengeReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SignSimpleChallengeAsync,
              (const attestation::SignSimpleChallengeRequest& /*in_request*/,
               base::OnceCallback<void(const attestation::SignSimpleChallengeReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetKeyPayload,
              (const attestation::SetKeyPayloadRequest& /*in_request*/,
               attestation::SetKeyPayloadReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetKeyPayloadAsync,
              (const attestation::SetKeyPayloadRequest& /*in_request*/,
               base::OnceCallback<void(const attestation::SetKeyPayloadReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              DeleteKeys,
              (const attestation::DeleteKeysRequest& /*in_request*/,
               attestation::DeleteKeysReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              DeleteKeysAsync,
              (const attestation::DeleteKeysRequest& /*in_request*/,
               base::OnceCallback<void(const attestation::DeleteKeysReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ResetIdentity,
              (const attestation::ResetIdentityRequest& /*in_request*/,
               attestation::ResetIdentityReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ResetIdentityAsync,
              (const attestation::ResetIdentityRequest& /*in_request*/,
               base::OnceCallback<void(const attestation::ResetIdentityReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetEnrollmentId,
              (const attestation::GetEnrollmentIdRequest& /*in_request*/,
               attestation::GetEnrollmentIdReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetEnrollmentIdAsync,
              (const attestation::GetEnrollmentIdRequest& /*in_request*/,
               base::OnceCallback<void(const attestation::GetEnrollmentIdReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetCertifiedNvIndex,
              (const attestation::GetCertifiedNvIndexRequest& /*in_request*/,
               attestation::GetCertifiedNvIndexReply* /*out_reply*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetCertifiedNvIndexAsync,
              (const attestation::GetCertifiedNvIndexRequest& /*in_request*/,
               base::OnceCallback<void(const attestation::GetCertifiedNvIndexReply& /*reply*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_ATTESTATION_CLIENT_OUT_DEFAULT_GEN_INCLUDE_ATTESTATION_DBUS_PROXY_MOCKS_H
