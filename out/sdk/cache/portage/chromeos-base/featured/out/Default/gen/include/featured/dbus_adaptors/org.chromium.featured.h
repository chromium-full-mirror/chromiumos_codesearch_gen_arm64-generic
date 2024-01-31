// Automatic generation of D-Bus interfaces:
//  - org.chromium.featured
#ifndef ____CHROMEOS_DBUS_BINDING___VAR_CACHE_PORTAGE_CHROMEOS_BASE_FEATURED_OUT_DEFAULT_GEN_INCLUDE_FEATURED_DBUS_ADAPTORS_ORG_CHROMIUM_FEATURED_H
#define ____CHROMEOS_DBUS_BINDING___VAR_CACHE_PORTAGE_CHROMEOS_BASE_FEATURED_OUT_DEFAULT_GEN_INCLUDE_FEATURED_DBUS_ADAPTORS_ORG_CHROMIUM_FEATURED_H
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

// Interface definition for org::chromium::featured.
class featuredInterface {
 public:
  virtual ~featuredInterface() = default;
};

// Interface adaptor for org::chromium::featured.
class featuredAdaptor {
 public:
  featuredAdaptor(featuredInterface* /* interface */) {}
  featuredAdaptor(const featuredAdaptor&) = delete;
  featuredAdaptor& operator=(const featuredAdaptor&) = delete;

  void RegisterWithDBusObject(brillo::dbus_utils::DBusObject* object) {
    brillo::dbus_utils::DBusInterface* itf =
        object->AddOrGetInterface("org.chromium.featured");
  }

  static dbus::ObjectPath GetObjectPath() {
    return dbus::ObjectPath{"/org/chromium/featured"};
  }

  static const char* GetIntrospectionXml() {
    return
        "  <interface name=\"org.chromium.featured\">\n"
        "  </interface>\n";
  }

 private:
};

}  // namespace chromium
}  // namespace org
#endif  // ____CHROMEOS_DBUS_BINDING___VAR_CACHE_PORTAGE_CHROMEOS_BASE_FEATURED_OUT_DEFAULT_GEN_INCLUDE_FEATURED_DBUS_ADAPTORS_ORG_CHROMIUM_FEATURED_H
