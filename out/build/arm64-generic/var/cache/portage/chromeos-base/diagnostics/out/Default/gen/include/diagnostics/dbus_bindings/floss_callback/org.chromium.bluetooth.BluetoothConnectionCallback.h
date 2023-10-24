// Automatic generation of D-Bus interfaces:
//  - org.chromium.bluetooth.BluetoothConnectionCallback
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_DIAGNOSTICS_DBUS_BINDINGS_FLOSS_CALLBACK_ORG_CHROMIUM_BLUETOOTH_BLUETOOTHCONNECTIONCALLBACK_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_DIAGNOSTICS_DBUS_BINDINGS_FLOSS_CALLBACK_ORG_CHROMIUM_BLUETOOTH_BLUETOOTHCONNECTIONCALLBACK_H
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

// Interface definition for org::chromium::bluetooth::BluetoothConnectionCallback.
class BluetoothConnectionCallbackInterface {
 public:
  virtual ~BluetoothConnectionCallbackInterface() = default;

  virtual void OnDeviceConnected(
      const brillo::VariantDictionary& in_device) = 0;
  virtual void OnDeviceDisconnected(
      const brillo::VariantDictionary& in_device) = 0;
};

// Interface adaptor for org::chromium::bluetooth::BluetoothConnectionCallback.
class BluetoothConnectionCallbackAdaptor {
 public:
  BluetoothConnectionCallbackAdaptor(BluetoothConnectionCallbackInterface* interface) : interface_(interface) {}
  BluetoothConnectionCallbackAdaptor(const BluetoothConnectionCallbackAdaptor&) = delete;
  BluetoothConnectionCallbackAdaptor& operator=(const BluetoothConnectionCallbackAdaptor&) = delete;

  void RegisterWithDBusObject(brillo::dbus_utils::DBusObject* object) {
    brillo::dbus_utils::DBusInterface* itf =
        object->AddOrGetInterface("org.chromium.bluetooth.BluetoothConnectionCallback");

    itf->AddSimpleMethodHandler(
        "OnDeviceConnected",
        base::Unretained(interface_),
        &BluetoothConnectionCallbackInterface::OnDeviceConnected);
    itf->AddSimpleMethodHandler(
        "OnDeviceDisconnected",
        base::Unretained(interface_),
        &BluetoothConnectionCallbackInterface::OnDeviceDisconnected);
  }

  static const char* GetIntrospectionXml() {
    return
        "  <interface name=\"org.chromium.bluetooth.BluetoothConnectionCallback\">\n"
        "    <method name=\"OnDeviceConnected\">\n"
        "      <arg name=\"device\" type=\"a{sv}\" direction=\"in\"/>\n"
        "    </method>\n"
        "    <method name=\"OnDeviceDisconnected\">\n"
        "      <arg name=\"device\" type=\"a{sv}\" direction=\"in\"/>\n"
        "    </method>\n"
        "  </interface>\n";
  }

 private:
  BluetoothConnectionCallbackInterface* interface_;  // Owned by container of this adapter.
};

}  // namespace bluetooth
}  // namespace chromium
}  // namespace org
#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_DIAGNOSTICS_DBUS_BINDINGS_FLOSS_CALLBACK_ORG_CHROMIUM_BLUETOOTH_BLUETOOTHCONNECTIONCALLBACK_H
