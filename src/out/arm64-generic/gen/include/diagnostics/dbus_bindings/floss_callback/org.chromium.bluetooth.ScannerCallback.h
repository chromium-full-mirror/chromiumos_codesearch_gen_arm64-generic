// Automatic generation of D-Bus interfaces:
//  - org.chromium.bluetooth.ScannerCallback

#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_DIAGNOSTICS_DBUS_BINDINGS_FLOSS_CALLBACK_ORG_CHROMIUM_BLUETOOTH_SCANNERCALLBACK_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_DIAGNOSTICS_DBUS_BINDINGS_FLOSS_CALLBACK_ORG_CHROMIUM_BLUETOOTH_SCANNERCALLBACK_H
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

// Interface definition for org::chromium::bluetooth::ScannerCallback.
class ScannerCallbackInterface {
 public:
  virtual ~ScannerCallbackInterface() = default;

  virtual void OnScanResult(
      const brillo::VariantDictionary& in_scan_result) = 0;
};

// Interface adaptor for org::chromium::bluetooth::ScannerCallback.
class ScannerCallbackAdaptor {
 public:
  ScannerCallbackAdaptor(ScannerCallbackInterface* interface) : interface_(interface) {}
  ScannerCallbackAdaptor(const ScannerCallbackAdaptor&) = delete;
  ScannerCallbackAdaptor& operator=(const ScannerCallbackAdaptor&) = delete;

  void RegisterWithDBusObject(brillo::dbus_utils::DBusObject* object) {
    brillo::dbus_utils::DBusInterface* itf =
        object->AddOrGetInterface("org.chromium.bluetooth.ScannerCallback");

    itf->AddSimpleMethodHandler(
        "OnScanResult",
        base::Unretained(interface_),
        &ScannerCallbackInterface::OnScanResult);
  }

  static const char* GetIntrospectionXml() {
    return
        "  <interface name=\"org.chromium.bluetooth.ScannerCallback\">\n"
        "    <method name=\"OnScanResult\">\n"
        "      <arg name=\"scan_result\" type=\"a{sv}\" direction=\"in\"/>\n"
        "    </method>\n"
        "  </interface>\n";
  }

 private:

  ScannerCallbackInterface* interface_;  // Owned by container of this adapter.
};

}  // namespace bluetooth
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_DIAGNOSTICS_DBUS_BINDINGS_FLOSS_CALLBACK_ORG_CHROMIUM_BLUETOOTH_SCANNERCALLBACK_H
