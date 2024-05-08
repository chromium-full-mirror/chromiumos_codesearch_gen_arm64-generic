// Automatic generation of D-Bus interfaces:
//  - org.chromium.Spaced

#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_SPACED_OUT_DEFAULT_GEN_INCLUDE_SPACED_DBUS_ADAPTORS_ORG_CHROMIUM_SPACED_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_SPACED_OUT_DEFAULT_GEN_INCLUDE_SPACED_DBUS_ADAPTORS_ORG_CHROMIUM_SPACED_H
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

// Interface definition for org::chromium::Spaced.
class SpacedInterface {
 public:
  virtual ~SpacedInterface() = default;

  // Get free disk space available for the given file path.
  virtual int64_t GetFreeDiskSpace(
      const std::string& in_path) = 0;
  // Get total disk space available.
  virtual int64_t GetTotalDiskSpace(
      const std::string& in_path) = 0;
  // Get the size of the root storage device.
  virtual int64_t GetRootDeviceSize() = 0;
  // Returns whether the given path is mounted with quota option enabled.
  virtual bool IsQuotaSupported(
      const std::string& in_path) = 0;
  // Returns the disk space currently used by the given UID.
  virtual int64_t GetQuotaCurrentSpaceForUid(
      const std::string& in_path,
      uint32_t in_uid) = 0;
  // Returns the disk space currently used by the given GID.
  virtual int64_t GetQuotaCurrentSpaceForGid(
      const std::string& in_path,
      uint32_t in_gid) = 0;
  // Returns the disk space currently used by the given project ID.
  virtual int64_t GetQuotaCurrentSpaceForProjectId(
      const std::string& in_path,
      uint32_t in_project_id) = 0;
  // Sets the project ID to the given file.
  virtual spaced::SetProjectIdReply SetProjectId(
      const base::ScopedFD& in_fd,
      uint32_t in_project_id) = 0;
  // Sets the project inheritance flag to the given file.
  virtual spaced::SetProjectInheritanceFlagReply SetProjectInheritanceFlag(
      const base::ScopedFD& in_fd,
      bool in_enable) = 0;
};

// Interface adaptor for org::chromium::Spaced.
class SpacedAdaptor {
 public:
  SpacedAdaptor(SpacedInterface* interface) : interface_(interface) {}
  SpacedAdaptor(const SpacedAdaptor&) = delete;
  SpacedAdaptor& operator=(const SpacedAdaptor&) = delete;

  void RegisterWithDBusObject(brillo::dbus_utils::DBusObject* object) {
    brillo::dbus_utils::DBusInterface* itf =
        object->AddOrGetInterface("org.chromium.Spaced");

    itf->AddSimpleMethodHandler(
        "GetFreeDiskSpace",
        base::Unretained(interface_),
        &SpacedInterface::GetFreeDiskSpace);
    itf->AddSimpleMethodHandler(
        "GetTotalDiskSpace",
        base::Unretained(interface_),
        &SpacedInterface::GetTotalDiskSpace);
    itf->AddSimpleMethodHandler(
        "GetRootDeviceSize",
        base::Unretained(interface_),
        &SpacedInterface::GetRootDeviceSize);
    itf->AddSimpleMethodHandler(
        "IsQuotaSupported",
        base::Unretained(interface_),
        &SpacedInterface::IsQuotaSupported);
    itf->AddSimpleMethodHandler(
        "GetQuotaCurrentSpaceForUid",
        base::Unretained(interface_),
        &SpacedInterface::GetQuotaCurrentSpaceForUid);
    itf->AddSimpleMethodHandler(
        "GetQuotaCurrentSpaceForGid",
        base::Unretained(interface_),
        &SpacedInterface::GetQuotaCurrentSpaceForGid);
    itf->AddSimpleMethodHandler(
        "GetQuotaCurrentSpaceForProjectId",
        base::Unretained(interface_),
        &SpacedInterface::GetQuotaCurrentSpaceForProjectId);
    itf->AddSimpleMethodHandler(
        "SetProjectId",
        base::Unretained(interface_),
        &SpacedInterface::SetProjectId);
    itf->AddSimpleMethodHandler(
        "SetProjectInheritanceFlag",
        base::Unretained(interface_),
        &SpacedInterface::SetProjectInheritanceFlag);

    signal_StatefulDiskSpaceUpdate_ = itf->RegisterSignalOfType<SignalStatefulDiskSpaceUpdateType>("StatefulDiskSpaceUpdate");
  }

  void SendStatefulDiskSpaceUpdateSignal(
      const spaced::StatefulDiskSpaceUpdate& in_status) {
    auto signal = signal_StatefulDiskSpaceUpdate_.lock();
    if (signal)
      signal->Send(in_status);
  }

  static dbus::ObjectPath GetObjectPath() {
    return dbus::ObjectPath{"/org/chromium/Spaced"};
  }

  static const char* GetIntrospectionXml() {
    return
        "  <interface name=\"org.chromium.Spaced\">\n"
        "    <method name=\"GetFreeDiskSpace\">\n"
        "      <arg name=\"path\" type=\"s\" direction=\"in\"/>\n"
        "      <arg name=\"reply\" type=\"x\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"GetTotalDiskSpace\">\n"
        "      <arg name=\"path\" type=\"s\" direction=\"in\"/>\n"
        "      <arg name=\"reply\" type=\"x\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"GetRootDeviceSize\">\n"
        "      <arg name=\"reply\" type=\"x\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"IsQuotaSupported\">\n"
        "      <arg name=\"path\" type=\"s\" direction=\"in\"/>\n"
        "      <arg name=\"reply\" type=\"b\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"GetQuotaCurrentSpaceForUid\">\n"
        "      <arg name=\"path\" type=\"s\" direction=\"in\"/>\n"
        "      <arg name=\"uid\" type=\"u\" direction=\"in\"/>\n"
        "      <arg name=\"reply\" type=\"x\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"GetQuotaCurrentSpaceForGid\">\n"
        "      <arg name=\"path\" type=\"s\" direction=\"in\"/>\n"
        "      <arg name=\"gid\" type=\"u\" direction=\"in\"/>\n"
        "      <arg name=\"reply\" type=\"x\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"GetQuotaCurrentSpaceForProjectId\">\n"
        "      <arg name=\"path\" type=\"s\" direction=\"in\"/>\n"
        "      <arg name=\"project_id\" type=\"u\" direction=\"in\"/>\n"
        "      <arg name=\"reply\" type=\"x\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"SetProjectId\">\n"
        "      <arg name=\"fd\" type=\"h\" direction=\"in\"/>\n"
        "      <arg name=\"project_id\" type=\"u\" direction=\"in\"/>\n"
        "      <arg name=\"reply\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <method name=\"SetProjectInheritanceFlag\">\n"
        "      <arg name=\"fd\" type=\"h\" direction=\"in\"/>\n"
        "      <arg name=\"enable\" type=\"b\" direction=\"in\"/>\n"
        "      <arg name=\"reply\" type=\"ay\" direction=\"out\"/>\n"
        "    </method>\n"
        "    <signal name=\"StatefulDiskSpaceUpdate\">\n"
        "      <arg name=\"status\" type=\"ay\"/>\n"
        "    </signal>\n"
        "  </interface>\n";
  }

 private:

  using SignalStatefulDiskSpaceUpdateType = brillo::dbus_utils::DBusSignal<
      spaced::StatefulDiskSpaceUpdate /*status*/>;
  std::weak_ptr<SignalStatefulDiskSpaceUpdateType> signal_StatefulDiskSpaceUpdate_;

  SpacedInterface* interface_;  // Owned by container of this adapter.
};

}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_SPACED_OUT_DEFAULT_GEN_INCLUDE_SPACED_DBUS_ADAPTORS_ORG_CHROMIUM_SPACED_H
