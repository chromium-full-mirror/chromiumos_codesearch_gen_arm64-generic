// Automatic generation of D-Bus interfaces:
//  - org.chromium.SwapManagement
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_SWAP_MANAGEMENT_OUT_DEFAULT_GEN_INCLUDE_SWAP_MANAGEMENT_DBUS_ADAPTORS_ORG_CHROMIUM_SWAPMANAGEMENT_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_SWAP_MANAGEMENT_OUT_DEFAULT_GEN_INCLUDE_SWAP_MANAGEMENT_DBUS_ADAPTORS_ORG_CHROMIUM_SWAPMANAGEMENT_H
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

// Interface definition for org::chromium::SwapManagement.
class SwapManagementInterface {
 public:
  virtual ~SwapManagementInterface() = default;

  // Enable swap file usage via config files.
  virtual std::string SwapEnable(
      int32_t in_size,
      bool in_change_now) = 0;
  // Disable swap file usage via config files.
  virtual std::string SwapDisable(
      bool in_change_now) = 0;
  // Enable/Disable the MGLRU feature.
  virtual bool MGLRUSetEnable(
      brillo::ErrorPtr* error,
      bool in_enable,
      bool* out_result) = 0;
  // Turn swap usage on/off (leaves config files alone).
  virtual std::string SwapStartStop(
      bool in_on) = 0;
  // Show current swap status.
  virtual std::string SwapStatus() = 0;
  // Persistently change the value of various parameters.
  virtual std::string SwapSetParameter(
      const std::string& in_command_name,
      uint32_t in_value) = 0;
  // Enable writeback of zram swapped pages.
  virtual std::string SwapZramEnableWriteback(
      uint32_t in_size_mb) = 0;
  // Mark pages as idle which have been in zram for |age| in seconds.
  virtual std::string SwapZramMarkIdle(
      uint32_t in_age) = 0;
  // Set the zram writeback page limit to |limit| pages.
  virtual std::string SwapZramSetWritebackLimit(
      uint32_t in_limit) = 0;
  // Initiate a zram writeback using the provided |mode|.
  virtual std::string InitiateSwapZramWriteback(
      uint32_t in_mode) = 0;
};

// Interface adaptor for org::chromium::SwapManagement.
class SwapManagementAdaptor {
 public:
  SwapManagementAdaptor(SwapManagementInterface* interface) : interface_(interface) {}
  SwapManagementAdaptor(const SwapManagementAdaptor&) = delete;
  SwapManagementAdaptor& operator=(const SwapManagementAdaptor&) = delete;

  void RegisterWithDBusObject(brillo::dbus_utils::DBusObject* object) {
    brillo::dbus_utils::DBusInterface* itf =
        object->AddOrGetInterface("org.chromium.SwapManagement");

    itf->AddSimpleMethodHandler(
        "SwapEnable",
        base::Unretained(interface_),
        &SwapManagementInterface::SwapEnable);
    itf->AddSimpleMethodHandler(
        "SwapDisable",
        base::Unretained(interface_),
        &SwapManagementInterface::SwapDisable);
    itf->AddSimpleMethodHandlerWithError(
        "MGLRUSetEnable",
        base::Unretained(interface_),
        &SwapManagementInterface::MGLRUSetEnable);
    itf->AddSimpleMethodHandler(
        "SwapStartStop",
        base::Unretained(interface_),
        &SwapManagementInterface::SwapStartStop);
    itf->AddSimpleMethodHandler(
        "SwapStatus",
        base::Unretained(interface_),
        &SwapManagementInterface::SwapStatus);
    itf->AddSimpleMethodHandler(
        "SwapSetParameter",
        base::Unretained(interface_),
        &SwapManagementInterface::SwapSetParameter);
    itf->AddSimpleMethodHandler(
        "SwapZramEnableWriteback",
        base::Unretained(interface_),
        &SwapManagementInterface::SwapZramEnableWriteback);
    itf->AddSimpleMethodHandler(
        "SwapZramMarkIdle",
        base::Unretained(interface_),
        &SwapManagementInterface::SwapZramMarkIdle);
    itf->AddSimpleMethodHandler(
        "SwapZramSetWritebackLimit",
        base::Unretained(interface_),
        &SwapManagementInterface::SwapZramSetWritebackLimit);
    itf->AddSimpleMethodHandler(
        "InitiateSwapZramWriteback",
        base::Unretained(interface_),
        &SwapManagementInterface::InitiateSwapZramWriteback);
  }

  static dbus::ObjectPath GetObjectPath() {
    return dbus::ObjectPath{"/org/chromium/SwapManagement"};
  }

  static const char* GetIntrospectionXml() {
    return
        "  <interface name=\"org.chromium.SwapManagement\">\n"
        "    <method name=\"SwapEnable\">\n"
        "      <arg name=\"size\" type=\"i\" direction=\"in\"/>\n"
        "      <arg name=\"change_now\" type=\"b\" direction=\"in\"/>\n"
        "      <arg name=\"status\" type=\"s\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"SwapDisable\">\n"
        "      <arg name=\"change_now\" type=\"b\" direction=\"in\"/>\n"
        "      <arg name=\"status\" type=\"s\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"MGLRUSetEnable\">\n"
        "      <arg name=\"enable\" type=\"b\" direction=\"in\"/>\n"
        "      <arg name=\"result\" type=\"b\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"SwapStartStop\">\n"
        "      <arg name=\"on\" type=\"b\" direction=\"in\"/>\n"
        "      <arg name=\"status\" type=\"s\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"SwapStatus\">\n"
        "      <arg name=\"status\" type=\"s\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"SwapSetParameter\">\n"
        "      <arg name=\"command_name\" type=\"s\" direction=\"in\"/>\n"
        "      <arg name=\"value\" type=\"u\" direction=\"in\"/>\n"
        "      <arg name=\"status\" type=\"s\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"SwapZramEnableWriteback\">\n"
        "      <arg name=\"size_mb\" type=\"u\" direction=\"in\"/>\n"
        "      <arg name=\"result\" type=\"s\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"SwapZramMarkIdle\">\n"
        "      <arg name=\"age\" type=\"u\" direction=\"in\"/>\n"
        "      <arg name=\"result\" type=\"s\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"SwapZramSetWritebackLimit\">\n"
        "      <arg name=\"limit\" type=\"u\" direction=\"in\"/>\n"
        "      <arg name=\"result\" type=\"s\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"InitiateSwapZramWriteback\">\n"
        "      <arg name=\"mode\" type=\"u\" direction=\"in\"/>\n"
        "      <arg name=\"result\" type=\"s\" direction=\"out\"/>\n"
        "    </method>\n"
        "  </interface>\n";
  }

 private:
  SwapManagementInterface* interface_;  // Owned by container of this adapter.
};

}  // namespace chromium
}  // namespace org
#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_SWAP_MANAGEMENT_OUT_DEFAULT_GEN_INCLUDE_SWAP_MANAGEMENT_DBUS_ADAPTORS_ORG_CHROMIUM_SWAPMANAGEMENT_H
