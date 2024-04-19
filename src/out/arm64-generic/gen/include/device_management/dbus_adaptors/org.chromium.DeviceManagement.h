// Automatic generation of D-Bus interfaces:
//  - org.chromium.DeviceManagement
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DEVICE_MANAGEMENT_OUT_DEFAULT_GEN_INCLUDE_DEVICE_MANAGEMENT_DBUS_ADAPTORS_ORG_CHROMIUM_DEVICEMANAGEMENT_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DEVICE_MANAGEMENT_OUT_DEFAULT_GEN_INCLUDE_DEVICE_MANAGEMENT_DBUS_ADAPTORS_ORG_CHROMIUM_DEVICEMANAGEMENT_H
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

// Interface definition for org::chromium::DeviceManagement.
class DeviceManagementInterface {
 public:
  virtual ~DeviceManagementInterface() = default;

  virtual void InstallAttributesGet(
      std::unique_ptr<brillo::dbus_utils::DBusMethodResponse<device_management::InstallAttributesGetReply>> response,
      const device_management::InstallAttributesGetRequest& in_request) = 0;
  virtual void InstallAttributesSet(
      std::unique_ptr<brillo::dbus_utils::DBusMethodResponse<device_management::InstallAttributesSetReply>> response,
      const device_management::InstallAttributesSetRequest& in_request) = 0;
  virtual void InstallAttributesFinalize(
      std::unique_ptr<brillo::dbus_utils::DBusMethodResponse<device_management::InstallAttributesFinalizeReply>> response,
      const device_management::InstallAttributesFinalizeRequest& in_request) = 0;
  virtual void InstallAttributesGetStatus(
      std::unique_ptr<brillo::dbus_utils::DBusMethodResponse<device_management::InstallAttributesGetStatusReply>> response,
      const device_management::InstallAttributesGetStatusRequest& in_request) = 0;
  virtual void EnterpriseOwnedGetStatus(
      std::unique_ptr<brillo::dbus_utils::DBusMethodResponse<device_management::EnterpriseOwnedGetStatusReply>> response,
      const device_management::EnterpriseOwnedGetStatusRequest& in_request) = 0;
  virtual void GetFirmwareManagementParameters(
      std::unique_ptr<brillo::dbus_utils::DBusMethodResponse<device_management::GetFirmwareManagementParametersReply>> response,
      const device_management::GetFirmwareManagementParametersRequest& in_request) = 0;
  virtual void RemoveFirmwareManagementParameters(
      std::unique_ptr<brillo::dbus_utils::DBusMethodResponse<device_management::RemoveFirmwareManagementParametersReply>> response,
      const device_management::RemoveFirmwareManagementParametersRequest& in_request) = 0;
  virtual void SetFirmwareManagementParameters(
      std::unique_ptr<brillo::dbus_utils::DBusMethodResponse<device_management::SetFirmwareManagementParametersReply>> response,
      const device_management::SetFirmwareManagementParametersRequest& in_request) = 0;
};

// Interface adaptor for org::chromium::DeviceManagement.
class DeviceManagementAdaptor {
 public:
  DeviceManagementAdaptor(DeviceManagementInterface* interface) : interface_(interface) {}
  DeviceManagementAdaptor(const DeviceManagementAdaptor&) = delete;
  DeviceManagementAdaptor& operator=(const DeviceManagementAdaptor&) = delete;

  void RegisterWithDBusObject(brillo::dbus_utils::DBusObject* object) {
    brillo::dbus_utils::DBusInterface* itf =
        object->AddOrGetInterface("org.chromium.DeviceManagement");

    itf->AddMethodHandler(
        "InstallAttributesGet",
        base::Unretained(interface_),
        &DeviceManagementInterface::InstallAttributesGet);
    itf->AddMethodHandler(
        "InstallAttributesSet",
        base::Unretained(interface_),
        &DeviceManagementInterface::InstallAttributesSet);
    itf->AddMethodHandler(
        "InstallAttributesFinalize",
        base::Unretained(interface_),
        &DeviceManagementInterface::InstallAttributesFinalize);
    itf->AddMethodHandler(
        "InstallAttributesGetStatus",
        base::Unretained(interface_),
        &DeviceManagementInterface::InstallAttributesGetStatus);
    itf->AddMethodHandler(
        "EnterpriseOwnedGetStatus",
        base::Unretained(interface_),
        &DeviceManagementInterface::EnterpriseOwnedGetStatus);
    itf->AddMethodHandler(
        "GetFirmwareManagementParameters",
        base::Unretained(interface_),
        &DeviceManagementInterface::GetFirmwareManagementParameters);
    itf->AddMethodHandler(
        "RemoveFirmwareManagementParameters",
        base::Unretained(interface_),
        &DeviceManagementInterface::RemoveFirmwareManagementParameters);
    itf->AddMethodHandler(
        "SetFirmwareManagementParameters",
        base::Unretained(interface_),
        &DeviceManagementInterface::SetFirmwareManagementParameters);
  }

  static dbus::ObjectPath GetObjectPath() {
    return dbus::ObjectPath{"/org/chromium/DeviceManagement"};
  }

  static const char* GetIntrospectionXml() {
    return
        "  <interface name=\"org.chromium.DeviceManagement\">\n"
        "    <method name=\"InstallAttributesGet\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"reply\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"InstallAttributesSet\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"reply\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"InstallAttributesFinalize\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"reply\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"InstallAttributesGetStatus\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"reply\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"EnterpriseOwnedGetStatus\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"reply\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"GetFirmwareManagementParameters\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"reply\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"RemoveFirmwareManagementParameters\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"reply\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"SetFirmwareManagementParameters\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"reply\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "  </interface>\n";
  }

 private:
  DeviceManagementInterface* interface_;  // Owned by container of this adapter.
};

}  // namespace chromium
}  // namespace org
#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DEVICE_MANAGEMENT_OUT_DEFAULT_GEN_INCLUDE_DEVICE_MANAGEMENT_DBUS_ADAPTORS_ORG_CHROMIUM_DEVICEMANAGEMENT_H
