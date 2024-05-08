// Automatic generation of D-Bus interfaces:
//  - org.chromium.Trunks

#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_TRUNKS_OUT_DEFAULT_GEN_INCLUDE_TRUNKS_DBUS_ADAPTORS_ORG_CHROMIUM_TRUNKS_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_TRUNKS_OUT_DEFAULT_GEN_INCLUDE_TRUNKS_DBUS_ADAPTORS_ORG_CHROMIUM_TRUNKS_H
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

// Interface definition for org::chromium::Trunks.
class TrunksInterface {
 public:
  virtual ~TrunksInterface() = default;

  virtual void SendCommand(
      std::unique_ptr<brillo::dbus_utils::DBusMethodResponse<trunks::SendCommandResponse>> response,
      const trunks::SendCommandRequest& in_request) = 0;
  virtual void StartEvent(
      std::unique_ptr<brillo::dbus_utils::DBusMethodResponse<trunks::StartEventResponse>> response,
      const trunks::StartEventRequest& in_request) = 0;
  virtual void StopEvent(
      std::unique_ptr<brillo::dbus_utils::DBusMethodResponse<trunks::StopEventResponse>> response,
      const trunks::StopEventRequest& in_request) = 0;
};

// Interface adaptor for org::chromium::Trunks.
class TrunksAdaptor {
 public:
  TrunksAdaptor(TrunksInterface* interface) : interface_(interface) {}
  TrunksAdaptor(const TrunksAdaptor&) = delete;
  TrunksAdaptor& operator=(const TrunksAdaptor&) = delete;

  void RegisterWithDBusObject(brillo::dbus_utils::DBusObject* object) {
    brillo::dbus_utils::DBusInterface* itf =
        object->AddOrGetInterface("org.chromium.Trunks");

    itf->AddMethodHandler(
        "SendCommand",
        base::Unretained(interface_),
        &TrunksInterface::SendCommand);
    itf->AddMethodHandler(
        "StartEvent",
        base::Unretained(interface_),
        &TrunksInterface::StartEvent);
    itf->AddMethodHandler(
        "StopEvent",
        base::Unretained(interface_),
        &TrunksInterface::StopEvent);
  }

  static dbus::ObjectPath GetObjectPath() {
    return dbus::ObjectPath{"/org/chromium/Trunks"};
  }

  static const char* GetIntrospectionXml() {
    return
        "  <interface name=\"org.chromium.Trunks\">\n"
        "    <method name=\"SendCommand\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"reply\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"StartEvent\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"reply\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"StopEvent\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"reply\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "  </interface>\n";
  }

 private:

  TrunksInterface* interface_;  // Owned by container of this adapter.
};

}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_TRUNKS_OUT_DEFAULT_GEN_INCLUDE_TRUNKS_DBUS_ADAPTORS_ORG_CHROMIUM_TRUNKS_H
