// Automatic generation of D-Bus interface mock proxies for:
//  - org.chromium.ImageLoaderInterface
#ifndef ____CHROMEOS_DBUS_BINDING___VAR_CACHE_PORTAGE_CHROMEOS_BASE_IMAGELOADER_CLIENT_OUT_DEFAULT_GEN_INCLUDE_IMAGELOADER_DBUS_PROXY_MOCKS_H
#define ____CHROMEOS_DBUS_BINDING___VAR_CACHE_PORTAGE_CHROMEOS_BASE_IMAGELOADER_CLIENT_OUT_DEFAULT_GEN_INCLUDE_IMAGELOADER_DBUS_PROXY_MOCKS_H
#include <string>
#include <vector>

#include <base/functional/callback_forward.h>
#include <base/logging.h>
#include <brillo/any.h>
#include <brillo/errors/error.h>
#include <brillo/variant_dictionary.h>
#include <gmock/gmock.h>

#include "imageloader/dbus-proxies.h"

namespace org {
namespace chromium {

// Mock object for ImageLoaderInterfaceProxyInterface.
class ImageLoaderInterfaceProxyMock : public ImageLoaderInterfaceProxyInterface {
 public:
  ImageLoaderInterfaceProxyMock() = default;
  ImageLoaderInterfaceProxyMock(const ImageLoaderInterfaceProxyMock&) = delete;
  ImageLoaderInterfaceProxyMock& operator=(const ImageLoaderInterfaceProxyMock&) = delete;

  MOCK_METHOD(bool,
              RegisterComponent,
              (const std::string& /*in_name*/,
               const std::string& /*in_version*/,
               const std::string& /*in_component_folder_abs_path*/,
               bool* /*out_success*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RegisterComponentAsync,
              (const std::string& /*in_name*/,
               const std::string& /*in_version*/,
               const std::string& /*in_component_folder_abs_path*/,
               base::OnceCallback<void(bool /*success*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetComponentVersion,
              (const std::string& /*in_name*/,
               std::string* /*out_version*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetComponentVersionAsync,
              (const std::string& /*in_name*/,
               base::OnceCallback<void(const std::string& /*version*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              LoadComponent,
              (const std::string& /*in_name*/,
               std::string* /*out_mount_point*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              LoadComponentAsync,
              (const std::string& /*in_name*/,
               base::OnceCallback<void(const std::string& /*mount_point*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              LoadComponentAtPath,
              (const std::string& /*in_name*/,
               const std::string& /*in_absolute_path*/,
               std::string* /*out_mount_point*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              LoadComponentAtPathAsync,
              (const std::string& /*in_name*/,
               const std::string& /*in_absolute_path*/,
               base::OnceCallback<void(const std::string& /*mount_point*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              LoadDlcImage,
              (const std::string& /*in_id*/,
               const std::string& /*in_package*/,
               const std::string& /*in_a_or_b*/,
               std::string* /*out_mount_point*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              LoadDlcImageAsync,
              (const std::string& /*in_id*/,
               const std::string& /*in_package*/,
               const std::string& /*in_a_or_b*/,
               base::OnceCallback<void(const std::string& /*mount_point*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              LoadDlc,
              (const imageloader::LoadDlcRequest& /*in_load_request*/,
               std::string* /*out_mount_point*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              LoadDlcAsync,
              (const imageloader::LoadDlcRequest& /*in_load_request*/,
               base::OnceCallback<void(const std::string& /*mount_point*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RemoveComponent,
              (const std::string& /*in_name*/,
               bool* /*out_success*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RemoveComponentAsync,
              (const std::string& /*in_name*/,
               base::OnceCallback<void(bool /*success*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetComponentMetadata,
              (const std::string& /*in_name*/,
               (std::map<std::string, std::string>*) /*out_metadata*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetComponentMetadataAsync,
              (const std::string& /*in_name*/,
               (base::OnceCallback<void(const std::map<std::string, std::string>& /*metadata*/)>) /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              UnmountComponent,
              (const std::string& /*in_name*/,
               bool* /*out_success*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              UnmountComponentAsync,
              (const std::string& /*in_name*/,
               base::OnceCallback<void(bool /*success*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              UnloadDlcImage,
              (const std::string& /*in_id*/,
               const std::string& /*in_package*/,
               bool* /*out_success*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              UnloadDlcImageAsync,
              (const std::string& /*in_id*/,
               const std::string& /*in_package*/,
               base::OnceCallback<void(bool /*success*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___VAR_CACHE_PORTAGE_CHROMEOS_BASE_IMAGELOADER_CLIENT_OUT_DEFAULT_GEN_INCLUDE_IMAGELOADER_DBUS_PROXY_MOCKS_H
