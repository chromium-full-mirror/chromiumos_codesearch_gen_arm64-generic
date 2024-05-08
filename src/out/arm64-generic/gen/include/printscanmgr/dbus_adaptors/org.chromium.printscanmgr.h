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
#include <brillo/variant_dictionary.h>

namespace org {
namespace chromium {

// Interface definition for org::chromium::printscanmgr.
class printscanmgrInterface {
 public:
  virtual ~printscanmgrInterface() = default;

  // Adds a printer that can be auto-configured to CUPS. Immediately attempts
  // to connect.
  virtual ::printscanmgr::CupsAddAutoConfiguredPrinterResponse CupsAddAutoConfiguredPrinter(
      const ::printscanmgr::CupsAddAutoConfiguredPrinterRequest& in_request) = 0;
  // Adds a printer to CUPS using the passed PPD contents. Immediately
  // attempts to connect.
  virtual ::printscanmgr::CupsAddManuallyConfiguredPrinterResponse CupsAddManuallyConfiguredPrinter(
      const ::printscanmgr::CupsAddManuallyConfiguredPrinterRequest& in_request) = 0;
  // Removes a printer from CUPS.
  virtual ::printscanmgr::CupsRemovePrinterResponse CupsRemovePrinter(
      const ::printscanmgr::CupsRemovePrinterRequest& in_request) = 0;
  // Retrieves the PPD from CUPS for a given printer.
  virtual ::printscanmgr::CupsRetrievePpdResponse CupsRetrievePpd(
      const ::printscanmgr::CupsRetrievePpdRequest& in_request) = 0;
  // Collect printscan debug logs for the specified categories, or disable
  // printing and scanning debug logging.
  virtual ::printscanmgr::PrintscanDebugSetCategoriesResponse PrintscanDebugSetCategories(
      const ::printscanmgr::PrintscanDebugSetCategoriesRequest& in_request) = 0;
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
    itf->AddSimpleMethodHandler(
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
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"CupsAddManuallyConfiguredPrinter\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"CupsRemovePrinter\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"CupsRetrievePpd\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"PrintscanDebugSetCategories\">\n"
        "      <arg name=\"request\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"response\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "  </interface>\n";
  }

 private:

  printscanmgrInterface* interface_;  // Owned by container of this adapter.
};

}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_PRINTSCANMGR_OUT_DEFAULT_GEN_INCLUDE_PRINTSCANMGR_DBUS_ADAPTORS_ORG_CHROMIUM_PRINTSCANMGR_H
