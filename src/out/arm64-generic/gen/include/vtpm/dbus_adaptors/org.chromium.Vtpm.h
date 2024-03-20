// Automatic generation of D-Bus interfaces:
//  - org.chromium.Vtpm
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_VTPM_OUT_DEFAULT_GEN_INCLUDE_VTPM_DBUS_ADAPTORS_ORG_CHROMIUM_VTPM_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_VTPM_OUT_DEFAULT_GEN_INCLUDE_VTPM_DBUS_ADAPTORS_ORG_CHROMIUM_VTPM_H
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

// Interface definition for org::chromium::Vtpm.
class VtpmInterface {
 public:
  virtual ~VtpmInterface() = default;

  virtual void SendCommand(
      std::unique_ptr<brillo::dbus_utils::DBusMethodResponse<vtpm::SendCommandResponse>> response,
      const vtpm::SendCommandRequest& in_request) = 0;
};

// Interface adaptor for org::chromium::Vtpm.
class VtpmAdaptor {
 public:
  VtpmAdaptor(VtpmInterface* interface) : interface_(interface) {}
  VtpmAdaptor(const VtpmAdaptor&) = delete;
  VtpmAdaptor& operator=(const VtpmAdaptor&) = delete;

  void RegisterWithDBusObject(brillo::dbus_utils::DBusObject* object) {
    brillo::dbus_utils::DBusInterface* itf =
        object->AddOrGetInterface("org.chromium.Vtpm");

    itf->AddMethodHandler(
        "SendCommand",
        base::Unretained(interface_),
        &VtpmInterface::SendCommand);
  }

  static dbus::ObjectPath GetObjectPath() {
    return dbus::ObjectPath{"/org/chromium/Vtpm"};
  }

  static const char* GetIntrospectionXml() {
    return
        "  <interface name=\"org.chromium.Vtpm\">\n"
        "    <method name=\"SendCommand\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"reply\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "  </interface>\n";
  }

 private:
  VtpmInterface* interface_;  // Owned by container of this adapter.
};

}  // namespace chromium
}  // namespace org
#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_VTPM_OUT_DEFAULT_GEN_INCLUDE_VTPM_DBUS_ADAPTORS_ORG_CHROMIUM_VTPM_H
