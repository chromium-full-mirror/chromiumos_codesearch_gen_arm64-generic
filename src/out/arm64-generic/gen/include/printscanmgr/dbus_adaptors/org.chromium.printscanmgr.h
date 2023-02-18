// Automatic generation of D-Bus interfaces:
//  - org.chromium.printscanmgr
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_PRINTSCANMGR_OUT_DEFAULT_GEN_INCLUDE_PRINTSCANMGR_DBUS_ADAPTORS_ORG_CHROMIUM_PRINTSCANMGR_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_PRINTSCANMGR_OUT_DEFAULT_GEN_INCLUDE_PRINTSCANMGR_DBUS_ADAPTORS_ORG_CHROMIUM_PRINTSCANMGR_H
#include <memory>
#include <string>
#include <tuple>
#include <vector>

#include <base/files/scoped_file.h>
#include <dbus/object_path.h>
#include <brillo/any.h>
#include <brillo/dbus/dbus_object.h>
#include <brillo/dbus/exported_object_manager.h>
#include <brillo/dbus/file_descriptor.h>
#include <brillo/variant_dictionary.h>

namespace org {
namespace chromium {

// Interface definition for org::chromium::printscanmgr.
class printscanmgrInterface {
 public:
  virtual ~printscanmgrInterface() = default;

  // Add a printer that can be auto-configured to CUPS.  Immediately attempt
  // to connect.  Returns a CupsResult - see
  // src/platform2/system_api/dbus/printscanmgr/dbus-constants.h for details.
  virtual int32_t CupsAddAutoConfiguredPrinter(
      const std::string& in_name,
      const std::string& in_uri) = 0;
  // Add a printer to CUPS using the passed PPD contents.  Immediately
  // attempt to connect.  Returns a CupsResult - see
  // src/platform2/system_api/dbus/printscanmgr/dbus-constants.h for details.
  virtual int32_t CupsAddManuallyConfiguredPrinter(
      const std::string& in_name,
      const std::string& in_uri,
      const std::vector<uint8_t>& in_ppd_contents) = 0;
  // Remove a printer from CUPS.  Returns true if the printer was removed
  // successfully.
  virtual bool CupsRemovePrinter(
      const std::string& in_name) = 0;
  // Retrieve the PPD from CUPS for a given printer.  On success, returns the
  // PPD as a vector of bytes.  On error, returns an empty vector.
  virtual std::vector<uint8_t> CupsRetrievePpd(
      const std::string& in_name) = 0;
  // Collect printscan debug logs for the specified categories.
  // If no categories are specified, disable log collection
  // for all categories.
  virtual bool PrintscanDebugSetCategories(
      brillo::ErrorPtr* error,
      uint32_t in_categories) = 0;
};

// Interface adaptor for org::chromium::printscanmgr.
class printscanmgrAdaptor {
 public:
  printscanmgrAdaptor(printscanmgrInterface* interface) : interface_(interface) {}
  printscanmgrAdaptor(const printscanmgrAdaptor&) = delete;
  printscanmgrAdaptor& operator=(const printscanmgrAdaptor&) = delete;

  void RegisterWithDBusObject(brillo::dbus_utils::DBusObject* object) {
    brillo::dbus_utils::DBusInterface* itf =
        object->AddOrGetInterface("org.chromium.printscanmgr");

    itf->AddSimpleMethodHandler(
        "CupsAddAutoConfiguredPrinter",
        base::Unretained(interface_),
        &printscanmgrInterface::CupsAddAutoConfiguredPrinter);
    itf->AddSimpleMethodHandler(
        "CupsAddManuallyConfiguredPrinter",
        base::Unretained(interface_),
        &printscanmgrInterface::CupsAddManuallyConfiguredPrinter);
    itf->AddSimpleMethodHandler(
        "CupsRemovePrinter",
        base::Unretained(interface_),
        &printscanmgrInterface::CupsRemovePrinter);
    itf->AddSimpleMethodHandler(
        "CupsRetrievePpd",
        base::Unretained(interface_),
        &printscanmgrInterface::CupsRetrievePpd);
    itf->AddSimpleMethodHandlerWithError(
        "PrintscanDebugSetCategories",
        base::Unretained(interface_),
        &printscanmgrInterface::PrintscanDebugSetCategories);
  }

  static dbus::ObjectPath GetObjectPath() {
    return dbus::ObjectPath{"/org/chromium/printscanmgr"};
  }

  static const char* GetIntrospectionXml() {
    return
        "  <interface name=\"org.chromium.printscanmgr\">\n"
        "    <method name=\"CupsAddAutoConfiguredPrinter\">\n"
        "      <arg name=\"name\" type=\"s\" direction=\"in\"/>\n"
        "      <arg name=\"uri\" type=\"s\" direction=\"in\"/>\n"
        "      <arg name=\"result\" type=\"i\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"CupsAddManuallyConfiguredPrinter\">\n"
        "      <arg name=\"name\" type=\"s\" direction=\"in\"/>\n"
        "      <arg name=\"uri\" type=\"s\" direction=\"in\"/>\n"
        "      <arg name=\"ppd_contents\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"result\" type=\"i\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"CupsRemovePrinter\">\n"
        "      <arg name=\"name\" type=\"s\" direction=\"in\"/>\n"
        "      <arg name=\"result\" type=\"b\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"CupsRetrievePpd\">\n"
        "      <arg name=\"name\" type=\"s\" direction=\"in\"/>\n"
        "      <arg name=\"ppd\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"PrintscanDebugSetCategories\">\n"
        "      <arg name=\"categories\" type=\"u\" direction=\"in\"/>\n"
        "    </method>\n"
        "  </interface>\n";
  }

 private:
  printscanmgrInterface* interface_;  // Owned by container of this adapter.
};

}  // namespace chromium
}  // namespace org
#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_PRINTSCANMGR_OUT_DEFAULT_GEN_INCLUDE_PRINTSCANMGR_DBUS_ADAPTORS_ORG_CHROMIUM_PRINTSCANMGR_H
