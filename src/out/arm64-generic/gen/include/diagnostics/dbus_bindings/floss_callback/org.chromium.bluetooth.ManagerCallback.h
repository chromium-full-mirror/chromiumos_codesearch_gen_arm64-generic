// Automatic generation of D-Bus interfaces:
//  - org.chromium.bluetooth.ManagerCallback
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_DIAGNOSTICS_DBUS_BINDINGS_FLOSS_CALLBACK_ORG_CHROMIUM_BLUETOOTH_MANAGERCALLBACK_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_DIAGNOSTICS_DBUS_BINDINGS_FLOSS_CALLBACK_ORG_CHROMIUM_BLUETOOTH_MANAGERCALLBACK_H
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
namespace bluetooth {

// Interface definition for org::chromium::bluetooth::ManagerCallback.
class ManagerCallbackInterface {
 public:
  virtual ~ManagerCallbackInterface() = default;

  // Will be triggered when the adapter powered/enabled state changed.
  virtual void OnHciEnabledChanged(
      int32_t in_hci_interface,
      bool in_enabled) = 0;
  virtual void OnHciDeviceChanged(
      int32_t in_hci_interface,
      bool in_present) = 0;
  virtual void OnDefaultAdapterChanged(
      int32_t in_hci_interface) = 0;
};

// Interface adaptor for org::chromium::bluetooth::ManagerCallback.
class ManagerCallbackAdaptor {
 public:
  ManagerCallbackAdaptor(ManagerCallbackInterface* interface) : interface_(interface) {}
  ManagerCallbackAdaptor(const ManagerCallbackAdaptor&) = delete;
  ManagerCallbackAdaptor& operator=(const ManagerCallbackAdaptor&) = delete;

  void RegisterWithDBusObject(brillo::dbus_utils::DBusObject* object) {
    brillo::dbus_utils::DBusInterface* itf =
        object->AddOrGetInterface("org.chromium.bluetooth.ManagerCallback");

    itf->AddSimpleMethodHandler(
        "OnHciEnabledChanged",
        base::Unretained(interface_),
        &ManagerCallbackInterface::OnHciEnabledChanged);
    itf->AddSimpleMethodHandler(
        "OnHciDeviceChanged",
        base::Unretained(interface_),
        &ManagerCallbackInterface::OnHciDeviceChanged);
    itf->AddSimpleMethodHandler(
        "OnDefaultAdapterChanged",
        base::Unretained(interface_),
        &ManagerCallbackInterface::OnDefaultAdapterChanged);
  }

  static const char* GetIntrospectionXml() {
    return
        "  <interface name=\"org.chromium.bluetooth.ManagerCallback\">\n"
        "    <method name=\"OnHciEnabledChanged\">\n"
        "      <arg name=\"hci_interface\" type=\"i\" direction=\"in\"/>\n"
        "      <arg name=\"enabled\" type=\"b\" direction=\"in\"/>\n"
        "    </method>\n"
        "    <method name=\"OnHciDeviceChanged\">\n"
        "      <arg name=\"hci_interface\" type=\"i\" direction=\"in\"/>\n"
        "      <arg name=\"present\" type=\"b\" direction=\"in\"/>\n"
        "    </method>\n"
        "    <method name=\"OnDefaultAdapterChanged\">\n"
        "      <arg name=\"hci_interface\" type=\"i\" direction=\"in\"/>\n"
        "    </method>\n"
        "  </interface>\n";
  }

 private:
  ManagerCallbackInterface* interface_;  // Owned by container of this adapter.
};

}  // namespace bluetooth
}  // namespace chromium
}  // namespace org
#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_DIAGNOSTICS_DBUS_BINDINGS_FLOSS_CALLBACK_ORG_CHROMIUM_BLUETOOTH_MANAGERCALLBACK_H
