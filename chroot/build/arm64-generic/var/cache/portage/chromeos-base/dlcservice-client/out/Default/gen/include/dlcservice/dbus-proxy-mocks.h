// Automatic generation of D-Bus interface mock proxies for:
//  - org.chromium.DlcServiceInterface
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DLCSERVICE_CLIENT_OUT_DEFAULT_GEN_INCLUDE_DLCSERVICE_DBUS_PROXY_MOCKS_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DLCSERVICE_CLIENT_OUT_DEFAULT_GEN_INCLUDE_DLCSERVICE_DBUS_PROXY_MOCKS_H
#include <string>
#include <vector>

#include <base/functional/callback_forward.h>
#include <base/logging.h>
#include <brillo/any.h>
#include <brillo/errors/error.h>
#include <brillo/variant_dictionary.h>
#include <gmock/gmock.h>

#include "dlcservice/dbus-proxies.h"

namespace org {
namespace chromium {

// Mock object for DlcServiceInterfaceProxyInterface.
class DlcServiceInterfaceProxyMock : public DlcServiceInterfaceProxyInterface {
 public:
  DlcServiceInterfaceProxyMock() = default;
  DlcServiceInterfaceProxyMock(const DlcServiceInterfaceProxyMock&) = delete;
  DlcServiceInterfaceProxyMock& operator=(const DlcServiceInterfaceProxyMock&) = delete;

  MOCK_METHOD(bool,
              InstallDlc,
              (const std::string& /*in_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              InstallDlcAsync,
              (const std::string& /*in_id*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              InstallWithOmahaUrl,
              (const std::string& /*in_id*/,
               const std::string& /*in_omaha_url*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              InstallWithOmahaUrlAsync,
              (const std::string& /*in_id*/,
               const std::string& /*in_omaha_url*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Install,
              (const dlcservice::InstallRequest& /*in_install_request*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              InstallAsync,
              (const dlcservice::InstallRequest& /*in_install_request*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Uninstall,
              (const std::string& /*in_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              UninstallAsync,
              (const std::string& /*in_id*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              Purge,
              (const std::string& /*in_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              PurgeAsync,
              (const std::string& /*in_id*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetInstalled,
              (std::vector<std::string>* /*out_ids*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetInstalledAsync,
              (base::OnceCallback<void(const std::vector<std::string>& /*ids*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetExistingDlcs,
              (dlcservice::DlcsWithContent* /*out_dlc_list*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetExistingDlcsAsync,
              (base::OnceCallback<void(const dlcservice::DlcsWithContent& /*dlc_list*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetDlcsToUpdate,
              (std::vector<std::string>* /*out_ids*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetDlcsToUpdateAsync,
              (base::OnceCallback<void(const std::vector<std::string>& /*ids*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetDlcState,
              (const std::string& /*in_id*/,
               dlcservice::DlcState* /*out_state*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetDlcStateAsync,
              (const std::string& /*in_id*/,
               base::OnceCallback<void(const dlcservice::DlcState& /*state*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              InstallCompleted,
              (const std::vector<std::string>& /*in_ids*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              InstallCompletedAsync,
              (const std::vector<std::string>& /*in_ids*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              UpdateCompleted,
              (const std::vector<std::string>& /*in_ids*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              UpdateCompletedAsync,
              (const std::vector<std::string>& /*in_ids*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  void RegisterDlcStateChangedSignalHandler(
    const base::RepeatingCallback<void(const dlcservice::DlcState&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterDlcStateChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterDlcStateChangedSignalHandler,
              (const base::RepeatingCallback<void(const dlcservice::DlcState&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DLCSERVICE_CLIENT_OUT_DEFAULT_GEN_INCLUDE_DLCSERVICE_DBUS_PROXY_MOCKS_H
