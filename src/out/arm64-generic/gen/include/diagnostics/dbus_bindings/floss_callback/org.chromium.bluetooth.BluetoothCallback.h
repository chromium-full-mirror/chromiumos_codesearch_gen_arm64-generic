// Automatic generation of D-Bus interfaces:
//  - org.chromium.bluetooth.BluetoothCallback
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_DIAGNOSTICS_DBUS_BINDINGS_FLOSS_CALLBACK_ORG_CHROMIUM_BLUETOOTH_BLUETOOTHCALLBACK_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_DIAGNOSTICS_DBUS_BINDINGS_FLOSS_CALLBACK_ORG_CHROMIUM_BLUETOOTH_BLUETOOTHCALLBACK_H
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
namespace bluetooth {

// Interface definition for org::chromium::bluetooth::BluetoothCallback.
class BluetoothCallbackInterface {
 public:
  virtual ~BluetoothCallbackInterface() = default;

  virtual void OnAdapterPropertyChanged(
      uint32_t in_prop) = 0;
  virtual void OnAddressChanged(
      const std::string& in_address) = 0;
  virtual void OnNameChanged(
      const std::string& in_name) = 0;
  virtual void OnDiscoverableChanged(
      bool in_discoverable) = 0;
  virtual void OnDiscoveringChanged(
      bool in_discovering) = 0;
  virtual void OnDeviceFound(
      const brillo::VariantDictionary& in_device) = 0;
  virtual void OnDeviceCleared(
      const brillo::VariantDictionary& in_device) = 0;
  virtual void OnDevicePropertiesChanged(
      const brillo::VariantDictionary& in_device,
      const std::vector<uint32_t>& in_props) = 0;
  virtual void OnBondStateChanged(
      uint32_t in_bt_status,
      const std::string& in_address,
      uint32_t in_bond_state) = 0;
  // Secure Simple Pairing (SSP) request event, which would be sent when
  // creating bond.
  virtual void OnSspRequest(
      const brillo::VariantDictionary& in_device,
      uint32_t in_cod,
      uint32_t in_bt_ssp_variant,
      uint32_t in_passkey) = 0;
  virtual void OnSdpSearchComplete(
      const brillo::VariantDictionary& in_device,
      const std::vector<uint8_t>& in_searched_uuid,
      const std::vector<brillo::VariantDictionary>& in_sdp_records) = 0;
};

// Interface adaptor for org::chromium::bluetooth::BluetoothCallback.
class BluetoothCallbackAdaptor {
 public:
  BluetoothCallbackAdaptor(BluetoothCallbackInterface* interface) : interface_(interface) {}
  BluetoothCallbackAdaptor(const BluetoothCallbackAdaptor&) = delete;
  BluetoothCallbackAdaptor& operator=(const BluetoothCallbackAdaptor&) = delete;

  void RegisterWithDBusObject(brillo::dbus_utils::DBusObject* object) {
    brillo::dbus_utils::DBusInterface* itf =
        object->AddOrGetInterface("org.chromium.bluetooth.BluetoothCallback");

    itf->AddSimpleMethodHandler(
        "OnAdapterPropertyChanged",
        base::Unretained(interface_),
        &BluetoothCallbackInterface::OnAdapterPropertyChanged);
    itf->AddSimpleMethodHandler(
        "OnAddressChanged",
        base::Unretained(interface_),
        &BluetoothCallbackInterface::OnAddressChanged);
    itf->AddSimpleMethodHandler(
        "OnNameChanged",
        base::Unretained(interface_),
        &BluetoothCallbackInterface::OnNameChanged);
    itf->AddSimpleMethodHandler(
        "OnDiscoverableChanged",
        base::Unretained(interface_),
        &BluetoothCallbackInterface::OnDiscoverableChanged);
    itf->AddSimpleMethodHandler(
        "OnDiscoveringChanged",
        base::Unretained(interface_),
        &BluetoothCallbackInterface::OnDiscoveringChanged);
    itf->AddSimpleMethodHandler(
        "OnDeviceFound",
        base::Unretained(interface_),
        &BluetoothCallbackInterface::OnDeviceFound);
    itf->AddSimpleMethodHandler(
        "OnDeviceCleared",
        base::Unretained(interface_),
        &BluetoothCallbackInterface::OnDeviceCleared);
    itf->AddSimpleMethodHandler(
        "OnDevicePropertiesChanged",
        base::Unretained(interface_),
        &BluetoothCallbackInterface::OnDevicePropertiesChanged);
    itf->AddSimpleMethodHandler(
        "OnBondStateChanged",
        base::Unretained(interface_),
        &BluetoothCallbackInterface::OnBondStateChanged);
    itf->AddSimpleMethodHandler(
        "OnSspRequest",
        base::Unretained(interface_),
        &BluetoothCallbackInterface::OnSspRequest);
    itf->AddSimpleMethodHandler(
        "OnSdpSearchComplete",
        base::Unretained(interface_),
        &BluetoothCallbackInterface::OnSdpSearchComplete);
  }

  static const char* GetIntrospectionXml() {
    return
        "  <interface name=\"org.chromium.bluetooth.BluetoothCallback\">\n"
        "    <method name=\"OnAdapterPropertyChanged\">\n"
        "      <arg name=\"prop\" type=\"u\" direction=\"in\"/>\n"
        "    </method>\n"
        "    <method name=\"OnAddressChanged\">\n"
        "      <arg name=\"address\" type=\"s\" direction=\"in\"/>\n"
        "    </method>\n"
        "    <method name=\"OnNameChanged\">\n"
        "      <arg name=\"name\" type=\"s\" direction=\"in\"/>\n"
        "    </method>\n"
        "    <method name=\"OnDiscoverableChanged\">\n"
        "      <arg name=\"discoverable\" type=\"b\" direction=\"in\"/>\n"
        "    </method>\n"
        "    <method name=\"OnDiscoveringChanged\">\n"
        "      <arg name=\"discovering\" type=\"b\" direction=\"in\"/>\n"
        "    </method>\n"
        "    <method name=\"OnDeviceFound\">\n"
        "      <arg name=\"device\" type=\"a{sv}\" direction=\"in\"/>\n"
        "    </method>\n"
        "    <method name=\"OnDeviceCleared\">\n"
        "      <arg name=\"device\" type=\"a{sv}\" direction=\"in\"/>\n"
        "    </method>\n"
        "    <method name=\"OnDevicePropertiesChanged\">\n"
        "      <arg name=\"device\" type=\"a{sv}\" direction=\"in\"/>\n"
        "      <arg name=\"props\" type=\"au\" direction=\"in\"/>\n"
        "    </method>\n"
        "    <method name=\"OnBondStateChanged\">\n"
        "      <arg name=\"bt_status\" type=\"u\" direction=\"in\"/>\n"
        "      <arg name=\"address\" type=\"s\" direction=\"in\"/>\n"
        "      <arg name=\"bond_state\" type=\"u\" direction=\"in\"/>\n"
        "    </method>\n"
        "    <method name=\"OnSspRequest\">\n"
        "      <arg name=\"device\" type=\"a{sv}\" direction=\"in\"/>\n"
        "      <arg name=\"cod\" type=\"u\" direction=\"in\"/>\n"
        "      <arg name=\"bt_ssp_variant\" type=\"u\" direction=\"in\"/>\n"
        "      <arg name=\"passkey\" type=\"u\" direction=\"in\"/>\n"
        "    </method>\n"
        "    <method name=\"OnSdpSearchComplete\">\n"
        "      <arg name=\"device\" type=\"a{sv}\" direction=\"in\"/>\n"
        "      <arg name=\"searched_uuid\" type=\"ay\" direction=\"in\"/>\n"
        "      <arg name=\"sdp_records\" type=\"aa{sv}\" direction=\"in\"/>\n"
        "    </method>\n"
        "  </interface>\n";
  }

 private:
  BluetoothCallbackInterface* interface_;  // Owned by container of this adapter.
};

}  // namespace bluetooth
}  // namespace chromium
}  // namespace org
#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_DIAGNOSTICS_DBUS_BINDINGS_FLOSS_CALLBACK_ORG_CHROMIUM_BLUETOOTH_BLUETOOTHCALLBACK_H
