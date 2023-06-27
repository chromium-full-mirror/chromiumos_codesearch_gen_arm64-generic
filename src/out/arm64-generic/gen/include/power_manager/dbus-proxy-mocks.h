// Automatic generation of D-Bus interface mock proxies for:
//  - org.chromium.PowerManager
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_POWER_MANAGER_CLIENT_OUT_DEFAULT_GEN_INCLUDE_POWER_MANAGER_DBUS_PROXY_MOCKS_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_POWER_MANAGER_CLIENT_OUT_DEFAULT_GEN_INCLUDE_POWER_MANAGER_DBUS_PROXY_MOCKS_H
#include <string>
#include <vector>

#include <base/functional/callback_forward.h>
#include <base/logging.h>
#include <brillo/any.h>
#include <brillo/errors/error.h>
#include <brillo/variant_dictionary.h>
#include <gmock/gmock.h>

#include "power_manager/dbus-proxies.h"

namespace org {
namespace chromium {

// Mock object for PowerManagerProxyInterface.
class PowerManagerProxyMock : public PowerManagerProxyInterface {
 public:
  PowerManagerProxyMock() = default;
  PowerManagerProxyMock(const PowerManagerProxyMock&) = delete;
  PowerManagerProxyMock& operator=(const PowerManagerProxyMock&) = delete;

  MOCK_METHOD(bool,
              RequestShutdown,
              (int32_t /*in_reason*/,
               const std::string& /*in_description*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RequestShutdownAsync,
              (int32_t /*in_reason*/,
               const std::string& /*in_description*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RequestRestart,
              (int32_t /*in_reason*/,
               const std::string& /*in_description*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RequestRestartAsync,
              (int32_t /*in_reason*/,
               const std::string& /*in_description*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ChangeWifiRegDomain,
              (int32_t /*in_domain*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ChangeWifiRegDomainAsync,
              (int32_t /*in_domain*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RequestSuspend,
              (uint64_t /*in_external_wakeup_count*/,
               int32_t /*in_wakeup_timeout*/,
               uint32_t /*in_suspend_flavor*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RequestSuspendAsync,
              (uint64_t /*in_external_wakeup_count*/,
               int32_t /*in_wakeup_timeout*/,
               uint32_t /*in_suspend_flavor*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetScreenBrightness,
              (const std::vector<uint8_t>& /*in_serialized_proto*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetScreenBrightnessAsync,
              (const std::vector<uint8_t>& /*in_serialized_proto*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              DecreaseScreenBrightness,
              (bool /*in_allow_off*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              DecreaseScreenBrightnessAsync,
              (bool /*in_allow_off*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              IncreaseScreenBrightness,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              IncreaseScreenBrightnessAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetScreenBrightnessPercent,
              (double* /*out_percent*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetScreenBrightnessPercentAsync,
              (base::OnceCallback<void(double /*percent*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              DecreaseKeyboardBrightness,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              DecreaseKeyboardBrightnessAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              IncreaseKeyboardBrightness,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              IncreaseKeyboardBrightnessAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ToggleKeyboardBacklight,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ToggleKeyboardBacklightAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetKeyboardBrightness,
              (const std::vector<uint8_t>& /*in_serialized_proto*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetKeyboardBrightnessAsync,
              (const std::vector<uint8_t>& /*in_serialized_proto*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetKeyboardBrightnessPercent,
              (double* /*out_percent*/,
               bool* /*out_success*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetKeyboardBrightnessPercentAsync,
              ((base::OnceCallback<void(double /*percent*/, bool /*success*/)>) /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetPowerSupplyProperties,
              (std::vector<uint8_t>* /*out_serialized_proto*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetPowerSupplyPropertiesAsync,
              (base::OnceCallback<void(const std::vector<uint8_t>& /*serialized_proto*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetBatteryState,
              (uint32_t* /*out_external_power_type*/,
               uint32_t* /*out_battery_state*/,
               double* /*out_display_battery_percentage*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetBatteryStateAsync,
              ((base::OnceCallback<void(uint32_t /*external_power_type*/, uint32_t /*battery_state*/, double /*display_battery_percentage*/)>) /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              HandleVideoActivity,
              (bool /*in_fullscreen*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              HandleVideoActivityAsync,
              (bool /*in_fullscreen*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              HandleUserActivity,
              (int32_t /*in_type*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              HandleUserActivityAsync,
              (int32_t /*in_type*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetIsProjecting,
              (bool /*in_is_projecting*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetIsProjectingAsync,
              (bool /*in_is_projecting*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetPolicy,
              (const std::vector<uint8_t>& /*in_serialized_proto*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetPolicyAsync,
              (const std::vector<uint8_t>& /*in_serialized_proto*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetPowerSource,
              (const std::string& /*in_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetPowerSourceAsync,
              (const std::string& /*in_id*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              HandlePowerButtonAcknowledgment,
              (int64_t /*in_timestamp_internal*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              HandlePowerButtonAcknowledgmentAsync,
              (int64_t /*in_timestamp_internal*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              IgnoreNextPowerButtonPress,
              (int64_t /*in_timeout_internal*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              IgnoreNextPowerButtonPressAsync,
              (int64_t /*in_timeout_internal*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RegisterSuspendDelay,
              (const std::vector<uint8_t>& /*in_serialized_request_proto*/,
               std::vector<uint8_t>* /*out_serialized_reply_proto*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RegisterSuspendDelayAsync,
              (const std::vector<uint8_t>& /*in_serialized_request_proto*/,
               base::OnceCallback<void(const std::vector<uint8_t>& /*serialized_reply_proto*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              UnregisterSuspendDelay,
              (const std::vector<uint8_t>& /*in_serialized_proto*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              UnregisterSuspendDelayAsync,
              (const std::vector<uint8_t>& /*in_serialized_proto*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              HandleSuspendReadiness,
              (const std::vector<uint8_t>& /*in_serialized_proto*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              HandleSuspendReadinessAsync,
              (const std::vector<uint8_t>& /*in_serialized_proto*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RegisterDarkSuspendDelay,
              (const std::vector<uint8_t>& /*in_serialized_request_proto*/,
               std::vector<uint8_t>* /*out_serialized_reply_proto*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RegisterDarkSuspendDelayAsync,
              (const std::vector<uint8_t>& /*in_serialized_request_proto*/,
               base::OnceCallback<void(const std::vector<uint8_t>& /*serialized_reply_proto*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              UnregisterDarkSuspendDelay,
              (const std::vector<uint8_t>& /*in_serialized_proto*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              UnregisterDarkSuspendDelayAsync,
              (const std::vector<uint8_t>& /*in_serialized_proto*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              HandleDarkSuspendReadiness,
              (const std::vector<uint8_t>& /*in_serialized_proto*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              HandleDarkSuspendReadinessAsync,
              (const std::vector<uint8_t>& /*in_serialized_proto*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RecordDarkResumeWakeReason,
              (const std::vector<uint8_t>& /*in_serialized_proto*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RecordDarkResumeWakeReasonAsync,
              (const std::vector<uint8_t>& /*in_serialized_proto*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetInactivityDelays,
              (std::vector<uint8_t>* /*out_serialized_reply_proto*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetInactivityDelaysAsync,
              (base::OnceCallback<void(const std::vector<uint8_t>& /*serialized_reply_proto*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              HasAmbientColorDevice,
              (bool* /*out_has_device*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              HasAmbientColorDeviceAsync,
              (base::OnceCallback<void(bool /*has_device*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetThermalState,
              (std::vector<uint8_t>* /*out_serialized_proto*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetThermalStateAsync,
              (base::OnceCallback<void(const std::vector<uint8_t>& /*serialized_proto*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetExternalDisplayALSBrightness,
              (bool /*in_enabled*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetExternalDisplayALSBrightnessAsync,
              (bool /*in_enabled*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetExternalDisplayALSBrightness,
              (bool* /*out_enabled*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetExternalDisplayALSBrightnessAsync,
              (base::OnceCallback<void(bool /*enabled*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              ChargeNowForAdaptiveCharging,
              (brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              ChargeNowForAdaptiveChargingAsync,
              (base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetChargeHistory,
              (std::vector<uint8_t>* /*out_serialized_proto*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetChargeHistoryAsync,
              (base::OnceCallback<void(const std::vector<uint8_t>& /*serialized_proto*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetBatterySaverModeState,
              (std::vector<uint8_t>* /*out_serialized_proto*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetBatterySaverModeStateAsync,
              (base::OnceCallback<void(const std::vector<uint8_t>& /*serialized_proto*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetBatterySaverModeState,
              (const std::vector<uint8_t>& /*in_serialized_proto*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetBatterySaverModeStateAsync,
              (const std::vector<uint8_t>& /*in_serialized_proto*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              BatteryStatePoll,
              (uint32_t* /*out_external_power_type*/,
               uint32_t* /*out_battery_state*/,
               double* /*out_display_battery_percentage*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              BatteryStatePollAsync,
              ((base::OnceCallback<void(uint32_t /*external_power_type*/, uint32_t /*battery_state*/, double /*display_battery_percentage*/)>) /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  void RegisterBatterySaverModeStateChangedSignalHandler(
    const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterBatterySaverModeStateChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterBatterySaverModeStateChangedSignalHandler,
              (const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterScreenBrightnessChangedSignalHandler(
    const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterScreenBrightnessChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterScreenBrightnessChangedSignalHandler,
              (const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterKeyboardBrightnessChangedSignalHandler(
    const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterKeyboardBrightnessChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterKeyboardBrightnessChangedSignalHandler,
              (const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterPeripheralBatteryStatusSignalHandler(
    const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterPeripheralBatteryStatusSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterPeripheralBatteryStatusSignalHandler,
              (const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterPowerSupplyPollSignalHandler(
    const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterPowerSupplyPollSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterPowerSupplyPollSignalHandler,
              (const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterLidOpenedSignalHandler(
    base::RepeatingClosure signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterLidOpenedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterLidOpenedSignalHandler,
              (base::RepeatingClosure /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterLidClosedSignalHandler(
    base::RepeatingClosure signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterLidClosedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterLidClosedSignalHandler,
              (base::RepeatingClosure /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterSuspendImminentSignalHandler(
    const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterSuspendImminentSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterSuspendImminentSignalHandler,
              (const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterSuspendDoneSignalHandler(
    const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterSuspendDoneSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterSuspendDoneSignalHandler,
              (const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterDarkSuspendImminentSignalHandler(
    const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterDarkSuspendImminentSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterDarkSuspendImminentSignalHandler,
              (const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterHibernateResumeReadySignalHandler(
    const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterHibernateResumeReadySignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterHibernateResumeReadySignalHandler,
              (const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterInputEventSignalHandler(
    const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterInputEventSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterInputEventSignalHandler,
              (const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterIdleActionImminentSignalHandler(
    const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterIdleActionImminentSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterIdleActionImminentSignalHandler,
              (const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterIdleActionDeferredSignalHandler(
    base::RepeatingClosure signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterIdleActionDeferredSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterIdleActionDeferredSignalHandler,
              (base::RepeatingClosure /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterScreenIdleStateChangedSignalHandler(
    const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterScreenIdleStateChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterScreenIdleStateChangedSignalHandler,
              (const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterInactivityDelaysChangedSignalHandler(
    const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterInactivityDelaysChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterInactivityDelaysChangedSignalHandler,
              (const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterAmbientColorTemperatureChangedSignalHandler(
    const base::RepeatingCallback<void(uint32_t)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterAmbientColorTemperatureChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterAmbientColorTemperatureChangedSignalHandler,
              (const base::RepeatingCallback<void(uint32_t)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterThermalEventSignalHandler(
    const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterThermalEventSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterThermalEventSignalHandler,
              (const base::RepeatingCallback<void(const std::vector<uint8_t>&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace chromium
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_POWER_MANAGER_CLIENT_OUT_DEFAULT_GEN_INCLUDE_POWER_MANAGER_DBUS_PROXY_MOCKS_H
