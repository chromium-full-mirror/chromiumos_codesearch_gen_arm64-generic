// Automatic generation of D-Bus interfaces:
//  - org.chromium.Modemloggerd.Modem

#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_MODEMLOGGERD_DEV_OUT_DEFAULT_GEN_INCLUDE_MODEMLOGGERD_DBUS_BINDINGS_ORG_CHROMIUM_MODEMLOGGERD_MODEM_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_MODEMLOGGERD_DEV_OUT_DEFAULT_GEN_INCLUDE_MODEMLOGGERD_DBUS_BINDINGS_ORG_CHROMIUM_MODEMLOGGERD_MODEM_H
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

// Interface definition for org::chromium::Modemloggerd::Modem.
class ModemInterface {
 public:
  virtual ~ModemInterface() = default;

  // Enables/Disables logging functionality in the modem. Does not dump any
  // logs to disk.
  virtual void SetEnabled(
      std::unique_ptr<brillo::dbus_utils::DBusMethodResponse<>> response,
      bool in_enable) = 0;
  // Start logging
  virtual void Start(
      std::unique_ptr<brillo::dbus_utils::DBusMethodResponse<>> response) = 0;
  // Stop logging
  virtual void Stop(
      std::unique_ptr<brillo::dbus_utils::DBusMethodResponse<>> response) = 0;
  // Set output directory for modem logs
  virtual void SetOutputDir(
      std::unique_ptr<brillo::dbus_utils::DBusMethodResponse<>> response,
      const std::string& in_output_dir) = 0;
  // Set whether logging should start automatically after boot.
  virtual void SetAutoStart(
      std::unique_ptr<brillo::dbus_utils::DBusMethodResponse<>> response,
      bool in_auto_start) = 0;
};

// Interface adaptor for org::chromium::Modemloggerd::Modem.
class ModemAdaptor {
 public:
  ModemAdaptor(ModemInterface* interface) : interface_(interface) {}
  ModemAdaptor(const ModemAdaptor&) = delete;
  ModemAdaptor& operator=(const ModemAdaptor&) = delete;

  void RegisterWithDBusObject(brillo::dbus_utils::DBusObject* object) {
    brillo::dbus_utils::DBusInterface* itf =
        object->AddOrGetInterface("org.chromium.Modemloggerd.Modem");

    itf->AddMethodHandler(
        "SetEnabled",
        base::Unretained(interface_),
        &ModemInterface::SetEnabled);
    itf->AddMethodHandler(
        "Start",
        base::Unretained(interface_),
        &ModemInterface::Start);
    itf->AddMethodHandler(
        "Stop",
        base::Unretained(interface_),
        &ModemInterface::Stop);
    itf->AddMethodHandler(
        "SetOutputDir",
        base::Unretained(interface_),
        &ModemInterface::SetOutputDir);
    itf->AddMethodHandler(
        "SetAutoStart",
        base::Unretained(interface_),
        &ModemInterface::SetAutoStart);
  }

  static const char* GetIntrospectionXml() {
    return
        "  <interface name=\"org.chromium.Modemloggerd.Modem\">\n"
        "    <method name=\"SetEnabled\">\n"
        "      <arg name=\"enable\" type=\"b\" direction=\"in\"/>\n"
        "    </method>\n"
        "    <method name=\"Start\">\n"
        "    </method>\n"
        "    <method name=\"Stop\">\n"
        "    </method>\n"
        "    <method name=\"SetOutputDir\">\n"
        "      <arg name=\"output_dir\" type=\"s\" direction=\"in\"/>\n"
        "    </method>\n"
        "    <method name=\"SetAutoStart\">\n"
        "      <arg name=\"auto_start\" type=\"b\" direction=\"in\"/>\n"
        "    </method>\n"
        "  </interface>\n";
  }

 private:

  ModemInterface* interface_;  // Owned by container of this adapter.
};

}  // namespace Modemloggerd
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_MODEMLOGGERD_DEV_OUT_DEFAULT_GEN_INCLUDE_MODEMLOGGERD_DBUS_BINDINGS_ORG_CHROMIUM_MODEMLOGGERD_MODEM_H
