// Automatic generation of D-Bus interfaces:
//  - org.chromium.PrivateComputing

#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_PRIVATE_COMPUTING_OUT_DEFAULT_GEN_INCLUDE_PRIVATE_COMPUTING_ORG_CHROMIUM_PRIVATECOMPUTING_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_PRIVATE_COMPUTING_OUT_DEFAULT_GEN_INCLUDE_PRIVATE_COMPUTING_ORG_CHROMIUM_PRIVATECOMPUTING_H
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

// Interface definition for org::chromium::PrivateComputing.
class PrivateComputingInterface {
 public:
  virtual ~PrivateComputingInterface() = default;

  // Sets the device last ping dates status to preserved file.
  virtual std::vector<uint8_t> SaveLastPingDatesStatus(
      const std::vector<uint8_t>& in_request) = 0;
  // Retrieve the device last ping dates status from preserved file.
  virtual std::vector<uint8_t> GetLastPingDatesStatus() = 0;
};

// Interface adaptor for org::chromium::PrivateComputing.
class PrivateComputingAdaptor {
 public:
  PrivateComputingAdaptor(PrivateComputingInterface* interface) : interface_(interface) {}
  PrivateComputingAdaptor(const PrivateComputingAdaptor&) = delete;
  PrivateComputingAdaptor& operator=(const PrivateComputingAdaptor&) = delete;

  void RegisterWithDBusObject(brillo::dbus_utils::DBusObject* object) {
    brillo::dbus_utils::DBusInterface* itf =
        object->AddOrGetInterface("org.chromium.PrivateComputing");

    itf->AddSimpleMethodHandler(
        "SaveLastPingDatesStatus",
        base::Unretained(interface_),
        &PrivateComputingInterface::SaveLastPingDatesStatus);
    itf->AddSimpleMethodHandler(
        "GetLastPingDatesStatus",
        base::Unretained(interface_),
        &PrivateComputingInterface::GetLastPingDatesStatus);
  }

  static dbus::ObjectPath GetObjectPath() {
    return dbus::ObjectPath{"/org/chromium/PrivateComputing"};
  }

  static const char* GetIntrospectionXml() {
    return
        "  <interface name=\"org.chromium.PrivateComputing\">\n"
        "    <method name=\"SaveLastPingDatesStatus\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"GetLastPingDatesStatus\">\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "  </interface>\n";
  }

 private:

  PrivateComputingInterface* interface_;  // Owned by container of this adapter.
};

}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_PRIVATE_COMPUTING_OUT_DEFAULT_GEN_INCLUDE_PRIVATE_COMPUTING_ORG_CHROMIUM_PRIVATECOMPUTING_H
