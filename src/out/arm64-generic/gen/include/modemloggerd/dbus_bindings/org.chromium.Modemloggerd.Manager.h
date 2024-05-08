// Automatic generation of D-Bus interfaces:
//  - org.chromium.Modemloggerd.Manager

#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_MODEMLOGGERD_DEV_OUT_DEFAULT_GEN_INCLUDE_MODEMLOGGERD_DBUS_BINDINGS_ORG_CHROMIUM_MODEMLOGGERD_MANAGER_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_MODEMLOGGERD_DEV_OUT_DEFAULT_GEN_INCLUDE_MODEMLOGGERD_DBUS_BINDINGS_ORG_CHROMIUM_MODEMLOGGERD_MANAGER_H
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
namespace Modemloggerd {

// Interface definition for org::chromium::Modemloggerd::Manager.
class ManagerInterface {
 public:
  virtual ~ManagerInterface() = default;
};

// Interface adaptor for org::chromium::Modemloggerd::Manager.
class ManagerAdaptor {
 public:
  ManagerAdaptor(ManagerInterface* /* interface */) {}
  ManagerAdaptor(const ManagerAdaptor&) = delete;
  ManagerAdaptor& operator=(const ManagerAdaptor&) = delete;

  void RegisterWithDBusObject(brillo::dbus_utils::DBusObject* object) {
    brillo::dbus_utils::DBusInterface* itf =
        object->AddOrGetInterface("org.chromium.Modemloggerd.Manager");

    itf->AddProperty(AvailableModemsName(), &available_modems_);
  }

  static const char* AvailableModemsName() { return "AvailableModems"; }
  std::vector<dbus::ObjectPath> GetAvailableModems() const {
    return available_modems_.GetValue().Get<std::vector<dbus::ObjectPath>>();
  }
  void SetAvailableModems(const std::vector<dbus::ObjectPath>& available_modems) {
    available_modems_.SetValue(available_modems);
  }

  static dbus::ObjectPath GetObjectPath() {
    return dbus::ObjectPath{"/org/chromium/Modemloggerd/Manager"};
  }

  static const char* GetIntrospectionXml() {
    return
        "  <interface name=\"org.chromium.Modemloggerd.Manager\">\n"
        "  </interface>\n";
  }

 private:

  brillo::dbus_utils::ExportedProperty<std::vector<dbus::ObjectPath>> available_modems_;
};

}  // namespace Modemloggerd
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_MODEMLOGGERD_DEV_OUT_DEFAULT_GEN_INCLUDE_MODEMLOGGERD_DBUS_BINDINGS_ORG_CHROMIUM_MODEMLOGGERD_MANAGER_H
