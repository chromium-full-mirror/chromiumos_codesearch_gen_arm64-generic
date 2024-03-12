// Automatic generation of D-Bus interfaces:
//  - org.chromium.CrashReporterInterface
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_CRASH_REPORTER_OUT_DEFAULT_GEN_INCLUDE_CRASH_REPORTER_DBUS_ADAPTORS_ORG_CHROMIUM_CRASHREPORTERINTERFACE_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_CRASH_REPORTER_OUT_DEFAULT_GEN_INCLUDE_CRASH_REPORTER_DBUS_ADAPTORS_ORG_CHROMIUM_CRASHREPORTERINTERFACE_H
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

// Interface definition for org::chromium::CrashReporterInterface.
class CrashReporterInterfaceInterface {
 public:
  virtual ~CrashReporterInterfaceInterface() = default;
};

// Interface adaptor for org::chromium::CrashReporterInterface.
class CrashReporterInterfaceAdaptor {
 public:
  CrashReporterInterfaceAdaptor(CrashReporterInterfaceInterface* /* interface */) {}
  CrashReporterInterfaceAdaptor(const CrashReporterInterfaceAdaptor&) = delete;
  CrashReporterInterfaceAdaptor& operator=(const CrashReporterInterfaceAdaptor&) = delete;

  void RegisterWithDBusObject(brillo::dbus_utils::DBusObject* object) {
    brillo::dbus_utils::DBusInterface* itf =
        object->AddOrGetInterface("org.chromium.CrashReporterInterface");

    signal_DebugDumpCreated_ = itf->RegisterSignalOfType<SignalDebugDumpCreatedType>("DebugDumpCreated");
  }

  void SendDebugDumpCreatedSignal(
      const fbpreprocessor::DebugDumps& in_DebugDumps) {
    auto signal = signal_DebugDumpCreated_.lock();
    if (signal)
      signal->Send(in_DebugDumps);
  }

  static dbus::ObjectPath GetObjectPath() {
    return dbus::ObjectPath{"/org/chromium/CrashReporter"};
  }

  static const char* GetIntrospectionXml() {
    return
        "  <interface name=\"org.chromium.CrashReporterInterface\">\n"
        "    <signal name=\"DebugDumpCreated\">\n"
        "      <arg name=\"DebugDumps\" type=\"ay\"/>\n"
        "    </signal>\n"
        "  </interface>\n";
  }

 private:
  using SignalDebugDumpCreatedType = brillo::dbus_utils::DBusSignal<
      fbpreprocessor::DebugDumps /*DebugDumps*/>;
  std::weak_ptr<SignalDebugDumpCreatedType> signal_DebugDumpCreated_;

};

}  // namespace chromium
}  // namespace org
#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_CRASH_REPORTER_OUT_DEFAULT_GEN_INCLUDE_CRASH_REPORTER_DBUS_ADAPTORS_ORG_CHROMIUM_CRASHREPORTERINTERFACE_H
