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
#include <brillo/variant_dictionary.h>

namespace org {
namespace chromium {

// Interface definition for org::chromium::SwapManagement.
class SwapManagementInterface {
 public:
  virtual ~SwapManagementInterface() = default;

  // Turn swap usage on (leaves config files alone).
  virtual bool SwapStart(
      brillo::ErrorPtr* error) = 0;
  // Turn swap usage off (leaves config files alone).
  virtual bool SwapStop(
      brillo::ErrorPtr* error) = 0;
  // Turn swap usage off and then on (leaves config files alone).
  virtual bool SwapRestart(
      brillo::ErrorPtr* error) = 0;
  // Set zram size in swap file, or disable swap. Change can be applied after
  // SwapRestart or reboot, and persistently across reboot.
  virtual bool SwapSetSize(
      brillo::ErrorPtr* error,
      int32_t in_size) = 0;
  // Set the /proc/sys/vm/swappiness to the provided |swappiness|.
  virtual bool SwapSetSwappiness(
      brillo::ErrorPtr* error,
      uint32_t in_swappiness) = 0;
  // Show current swap status.
  virtual std::string SwapStatus() = 0;
  // Enable/Disable the MGLRU feature.
  virtual bool MGLRUSetEnable(
      brillo::ErrorPtr* error,
      uint8_t in_value) = 0;
  // Enable writeback of zram swapped pages.
  virtual bool SwapZramEnableWriteback(
      brillo::ErrorPtr* error,
      uint32_t in_size) = 0;
  // Mark pages as idle which have been in zram for |age| in seconds.
  virtual bool SwapZramMarkIdle(
      brillo::ErrorPtr* error,
      uint32_t in_age) = 0;
  // Set the zram writeback page limit to |limit| pages.
  virtual bool SwapZramSetWritebackLimit(
      brillo::ErrorPtr* error,
      uint32_t in_limit) = 0;
  // Initiate a zram writeback using the provided |mode|.
  virtual bool InitiateSwapZramWriteback(
      brillo::ErrorPtr* error,
      uint32_t in_mode) = 0;
  // Perform a memory reclaim for all processes.
  virtual bool ReclaimAllProcesses(
      brillo::ErrorPtr* error,
      uint8_t in_memory_types) = 0;
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

    itf->AddSimpleMethodHandlerWithError(
        "SwapStart",
        base::Unretained(interface_),
        &SwapManagementInterface::SwapStart);
    itf->AddSimpleMethodHandlerWithError(
        "SwapStop",
        base::Unretained(interface_),
        &SwapManagementInterface::SwapStop);
    itf->AddSimpleMethodHandlerWithError(
        "SwapRestart",
        base::Unretained(interface_),
        &SwapManagementInterface::SwapRestart);
    itf->AddSimpleMethodHandlerWithError(
        "SwapSetSize",
        base::Unretained(interface_),
        &SwapManagementInterface::SwapSetSize);
    itf->AddSimpleMethodHandlerWithError(
        "SwapSetSwappiness",
        base::Unretained(interface_),
        &SwapManagementInterface::SwapSetSwappiness);
    itf->AddSimpleMethodHandler(
        "SwapStatus",
        base::Unretained(interface_),
        &SwapManagementInterface::SwapStatus);
    itf->AddSimpleMethodHandlerWithError(
        "MGLRUSetEnable",
        base::Unretained(interface_),
        &SwapManagementInterface::MGLRUSetEnable);
    itf->AddSimpleMethodHandlerWithError(
        "SwapZramEnableWriteback",
        base::Unretained(interface_),
        &SwapManagementInterface::SwapZramEnableWriteback);
    itf->AddSimpleMethodHandlerWithError(
        "SwapZramMarkIdle",
        base::Unretained(interface_),
        &SwapManagementInterface::SwapZramMarkIdle);
    itf->AddSimpleMethodHandlerWithError(
        "SwapZramSetWritebackLimit",
        base::Unretained(interface_),
        &SwapManagementInterface::SwapZramSetWritebackLimit);
    itf->AddSimpleMethodHandlerWithError(
        "InitiateSwapZramWriteback",
        base::Unretained(interface_),
        &SwapManagementInterface::InitiateSwapZramWriteback);
    itf->AddSimpleMethodHandlerWithError(
        "ReclaimAllProcesses",
        base::Unretained(interface_),
        &SwapManagementInterface::ReclaimAllProcesses);
  }

  static dbus::ObjectPath GetObjectPath() {
    return dbus::ObjectPath{"/org/chromium/SwapManagement"};
  }

  static const char* GetIntrospectionXml() {
    return
        "  <interface name=\"org.chromium.SwapManagement\">\n"
        "    <method name=\"SwapStart\">\n"
        "    </method>\n"
        "    <method name=\"SwapStop\">\n"
        "    </method>\n"
        "    <method name=\"SwapRestart\">\n"
        "    </method>\n"
        "    <method name=\"SwapSetSize\">\n"
        "      <arg name=\"size\" type=\"i\" direction=\"in\"/>\n"
        "    </method>\n"
        "    <method name=\"SwapSetSwappiness\">\n"
        "      <arg name=\"swappiness\" type=\"u\" direction=\"in\"/>\n"
        "    </method>\n"
        "    <method name=\"SwapStatus\">\n"
        "      <arg name=\"status\" type=\"s\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"MGLRUSetEnable\">\n"
        "      <arg name=\"value\" type=\"y\" direction=\"in\"/>\n"
        "    </method>\n"
        "    <method name=\"SwapZramEnableWriteback\">\n"
        "      <arg name=\"size\" type=\"u\" direction=\"in\"/>\n"
        "    </method>\n"
        "    <method name=\"SwapZramMarkIdle\">\n"
        "      <arg name=\"age\" type=\"u\" direction=\"in\"/>\n"
        "    </method>\n"
        "    <method name=\"SwapZramSetWritebackLimit\">\n"
        "      <arg name=\"limit\" type=\"u\" direction=\"in\"/>\n"
        "    </method>\n"
        "    <method name=\"InitiateSwapZramWriteback\">\n"
        "      <arg name=\"mode\" type=\"u\" direction=\"in\"/>\n"
        "    </method>\n"
        "    <method name=\"ReclaimAllProcesses\">\n"
        "      <arg name=\"memory_types\" type=\"y\" direction=\"in\"/>\n"
        "    </method>\n"
        "  </interface>\n";
  }

 private:

  SwapManagementInterface* interface_;  // Owned by container of this adapter.
};

}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_SWAP_MANAGEMENT_OUT_DEFAULT_GEN_INCLUDE_SWAP_MANAGEMENT_DBUS_ADAPTORS_ORG_CHROMIUM_SWAPMANAGEMENT_H
