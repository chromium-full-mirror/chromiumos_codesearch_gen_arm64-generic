// Automatic generation of D-Bus interface mock proxies for:
//  - org.chromium.cras.Control
//  - org.freedesktop.DBus.Introspectable
#ifndef ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_CRAS_DBUS_PROXY_MOCKS_H
#define ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_CRAS_DBUS_PROXY_MOCKS_H
#include <string>
#include <vector>

#include <base/functional/callback_forward.h>
#include <base/logging.h>
#include <brillo/any.h>
#include <brillo/errors/error.h>
#include <brillo/variant_dictionary.h>
#include <gmock/gmock.h>

#include "dbus-proxies.h"

namespace org {
namespace chromium {
namespace cras {

// Mock object for ControlProxyInterface.
class ControlProxyMock : public ControlProxyInterface {
 public:
  ControlProxyMock() = default;
  ControlProxyMock(const ControlProxyMock&) = delete;
  ControlProxyMock& operator=(const ControlProxyMock&) = delete;

  MOCK_METHOD(bool,
              SetOutputVolume,
              (int32_t /*in_volume*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetOutputVolumeAsync,
              (int32_t /*in_volume*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetOutputNodeVolume,
              (uint64_t /*in_node_id*/,
               int32_t /*in_volume*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetOutputNodeVolumeAsync,
              (uint64_t /*in_node_id*/,
               int32_t /*in_volume*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SwapLeftRight,
              (uint64_t /*in_node_id*/,
               bool /*in_swap*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SwapLeftRightAsync,
              (uint64_t /*in_node_id*/,
               bool /*in_swap*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetDisplayRotation,
              (uint64_t /*in_node_id*/,
               uint32_t /*in_rotation*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetDisplayRotationAsync,
              (uint64_t /*in_node_id*/,
               uint32_t /*in_rotation*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetOutputMute,
              (bool /*in_mute_on*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetOutputMuteAsync,
              (bool /*in_mute_on*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetOutputUserMute,
              (bool /*in_mute_on*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetOutputUserMuteAsync,
              (bool /*in_mute_on*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetSuspendAudio,
              (bool /*in_suspend*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetSuspendAudioAsync,
              (bool /*in_suspend*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetInputNodeGain,
              (uint64_t /*in_node_id*/,
               int32_t /*in_gain*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetInputNodeGainAsync,
              (uint64_t /*in_node_id*/,
               int32_t /*in_gain*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetInputMute,
              (bool /*in_mute_on*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetInputMuteAsync,
              (bool /*in_mute_on*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetVolumeState,
              (int32_t* /*out_output_volume*/,
               bool* /*out_output_mute*/,
               bool* /*out_input_mute*/,
               bool* /*out_output_user_mute*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetVolumeStateAsync,
              ((base::OnceCallback<void(int32_t /*output_volume*/, bool /*output_mute*/, bool /*input_mute*/, bool /*output_user_mute*/)>) /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetDefaultOutputBufferSize,
              (int32_t* /*out_buffer_size*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetDefaultOutputBufferSizeAsync,
              (base::OnceCallback<void(int32_t /*buffer_size*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetNodes,
              (brillo::VariantDictionary* /*out_nodes*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetNodesAsync,
              (base::OnceCallback<void(const brillo::VariantDictionary& /*nodes*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetNodeInfos,
              (std::vector<brillo::VariantDictionary>* /*out_nodes*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetNodeInfosAsync,
              (base::OnceCallback<void(const std::vector<brillo::VariantDictionary>& /*nodes*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetSystemAecSupported,
              (bool* /*out_supported*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetSystemAecSupportedAsync,
              (base::OnceCallback<void(bool /*supported*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetSystemAecGroupId,
              (int32_t* /*out_group_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetSystemAecGroupIdAsync,
              (base::OnceCallback<void(int32_t /*group_id*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetSystemNsSupported,
              (bool* /*out_supported*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetSystemNsSupportedAsync,
              (base::OnceCallback<void(bool /*supported*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetSystemAgcSupported,
              (bool* /*out_supported*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetSystemAgcSupportedAsync,
              (base::OnceCallback<void(bool /*supported*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetFeatureFlagForTest,
              (const std::string& /*in_feature*/,
               bool* /*out_enabled*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetFeatureFlagForTestAsync,
              (const std::string& /*in_feature*/,
               base::OnceCallback<void(bool /*enabled*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetDeprioritizeBtWbsMic,
              (bool* /*out_deprioritized*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetDeprioritizeBtWbsMicAsync,
              (base::OnceCallback<void(bool /*deprioritized*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetRtcRunning,
              (bool* /*out_deprioritized*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetRtcRunningAsync,
              (base::OnceCallback<void(bool /*deprioritized*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetActiveOutputNode,
              (uint64_t /*in_node_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetActiveOutputNodeAsync,
              (uint64_t /*in_node_id*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetActiveInputNode,
              (uint64_t /*in_node_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetActiveInputNodeAsync,
              (uint64_t /*in_node_id*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              AddActiveInputNode,
              (uint64_t /*in_node_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              AddActiveInputNodeAsync,
              (uint64_t /*in_node_id*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              AddActiveOutputNode,
              (uint64_t /*in_node_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              AddActiveOutputNodeAsync,
              (uint64_t /*in_node_id*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RemoveActiveInputNode,
              (uint64_t /*in_node_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RemoveActiveInputNodeAsync,
              (uint64_t /*in_node_id*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              RemoveActiveOutputNode,
              (uint64_t /*in_node_id*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              RemoveActiveOutputNodeAsync,
              (uint64_t /*in_node_id*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetFixA2dpPacketSize,
              (bool /*in_toggle*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetFixA2dpPacketSizeAsync,
              (bool /*in_toggle*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetNumberOfActiveStreams,
              (int32_t* /*out_num*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetNumberOfActiveStreamsAsync,
              (base::OnceCallback<void(int32_t /*num*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetNumberOfActiveOutputStreams,
              (int32_t* /*out_num*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetNumberOfActiveOutputStreamsAsync,
              (base::OnceCallback<void(int32_t /*num*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetNumberOfActiveInputStreams,
              (int32_t* /*out_num*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetNumberOfActiveInputStreamsAsync,
              (base::OnceCallback<void(int32_t /*num*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetNumberOfInputStreamsWithPermission,
              (brillo::VariantDictionary* /*out_num*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetNumberOfInputStreamsWithPermissionAsync,
              (base::OnceCallback<void(const brillo::VariantDictionary& /*num*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetGlobalOutputChannelRemix,
              (int32_t /*in_num_channels*/,
               const std::vector<double>& /*in_coefficient*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetGlobalOutputChannelRemixAsync,
              (int32_t /*in_num_channels*/,
               const std::vector<double>& /*in_coefficient*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetHotwordModel,
              (uint64_t /*in_node_id*/,
               const std::string& /*in_model_name*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetHotwordModelAsync,
              (uint64_t /*in_node_id*/,
               const std::string& /*in_model_name*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              IsAudioOutputActive,
              (bool* /*out_active*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              IsAudioOutputActiveAsync,
              (base::OnceCallback<void(bool /*active*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetFlossEnabled,
              (bool /*in_enabled*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetFlossEnabledAsync,
              (bool /*in_enabled*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetWbsEnabled,
              (bool /*in_enabled*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetWbsEnabledAsync,
              (bool /*in_enabled*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetNoiseCancellationEnabled,
              (bool /*in_enabled*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetNoiseCancellationEnabledAsync,
              (bool /*in_enabled*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              IsNoiseCancellationSupported,
              (bool* /*out_supported*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              IsNoiseCancellationSupportedAsync,
              (base::OnceCallback<void(bool /*supported*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetBypassBlockNoiseCancellation,
              (bool /*in_bypass*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetBypassBlockNoiseCancellationAsync,
              (bool /*in_bypass*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetForceSrBtEnabled,
              (bool /*in_enabled*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetForceSrBtEnabledAsync,
              (bool /*in_enabled*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetForceSrBtEnabled,
              (bool* /*out_enabled*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetForceSrBtEnabledAsync,
              (base::OnceCallback<void(bool /*enabled*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetHfpMicSrEnabled,
              (bool /*in_enabled*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetHfpMicSrEnabledAsync,
              (bool /*in_enabled*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              IsHfpMicSrSupported,
              (bool* /*out_supported*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              IsHfpMicSrSupportedAsync,
              (base::OnceCallback<void(bool /*supported*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetPlayerPlaybackStatus,
              (const std::string& /*in_status*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetPlayerPlaybackStatusAsync,
              (const std::string& /*in_status*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetPlayerIdentity,
              (const std::string& /*in_identity*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetPlayerIdentityAsync,
              (const std::string& /*in_identity*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetPlayerPosition,
              (int64_t /*in_position*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetPlayerPositionAsync,
              (int64_t /*in_position*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetPlayerMetadata,
              (const brillo::VariantDictionary& /*in_metadata*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetPlayerMetadataAsync,
              (const brillo::VariantDictionary& /*in_metadata*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetSpeakOnMuteDetection,
              (bool /*in_enable*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetSpeakOnMuteDetectionAsync,
              (bool /*in_enable*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SpeakOnMuteDetectionEnabled,
              (bool* /*out_enable*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SpeakOnMuteDetectionEnabledAsync,
              (base::OnceCallback<void(bool /*enable*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              IsInternalCardDetected,
              (bool* /*out_detected*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              IsInternalCardDetectedAsync,
              (base::OnceCallback<void(bool /*detected*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              GetNumberOfNonChromeOutputStreams,
              (int32_t* /*out_num_non_chrome_output_streams*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              GetNumberOfNonChromeOutputStreamsAsync,
              (base::OnceCallback<void(int32_t /*num_non_chrome_output_streams*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(bool,
              SetForceBtHfpOffloadOnSupport,
              (bool /*in_enabled*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              SetForceBtHfpOffloadOnSupportAsync,
              (bool /*in_enabled*/,
               base::OnceCallback<void()> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  void RegisterOutputVolumeChangedSignalHandler(
    const base::RepeatingCallback<void(int32_t)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterOutputVolumeChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterOutputVolumeChangedSignalHandler,
              (const base::RepeatingCallback<void(int32_t)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterOutputMuteChangedSignalHandler(
    const base::RepeatingCallback<void(bool,
                                       bool)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterOutputMuteChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterOutputMuteChangedSignalHandler,
              (const base::RepeatingCallback<void(bool,
                                                  bool)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterInputGainChangedSignalHandler(
    const base::RepeatingCallback<void(int32_t)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterInputGainChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterInputGainChangedSignalHandler,
              (const base::RepeatingCallback<void(int32_t)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterInputMuteChangedSignalHandler(
    const base::RepeatingCallback<void(bool)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterInputMuteChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterInputMuteChangedSignalHandler,
              (const base::RepeatingCallback<void(bool)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterNodesChangedSignalHandler(
    base::RepeatingClosure signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterNodesChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterNodesChangedSignalHandler,
              (base::RepeatingClosure /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterActiveOutputNodeChangedSignalHandler(
    const base::RepeatingCallback<void(uint64_t)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterActiveOutputNodeChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterActiveOutputNodeChangedSignalHandler,
              (const base::RepeatingCallback<void(uint64_t)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterActiveInputNodeChangedSignalHandler(
    const base::RepeatingCallback<void(uint64_t)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterActiveInputNodeChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterActiveInputNodeChangedSignalHandler,
              (const base::RepeatingCallback<void(uint64_t)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterOutputNodeVolumeChangedSignalHandler(
    const base::RepeatingCallback<void(uint64_t,
                                       int32_t)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterOutputNodeVolumeChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterOutputNodeVolumeChangedSignalHandler,
              (const base::RepeatingCallback<void(uint64_t,
                                                  int32_t)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterInputNodeGainChangedSignalHandler(
    const base::RepeatingCallback<void(uint64_t,
                                       int32_t)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterInputNodeGainChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterInputNodeGainChangedSignalHandler,
              (const base::RepeatingCallback<void(uint64_t,
                                                  int32_t)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterNodeLeftRightSwappedChangedSignalHandler(
    const base::RepeatingCallback<void(uint64_t,
                                       bool)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterNodeLeftRightSwappedChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterNodeLeftRightSwappedChangedSignalHandler,
              (const base::RepeatingCallback<void(uint64_t,
                                                  bool)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterNumberOfActiveStreamsChangedSignalHandler(
    const base::RepeatingCallback<void(int32_t)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterNumberOfActiveStreamsChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterNumberOfActiveStreamsChangedSignalHandler,
              (const base::RepeatingCallback<void(int32_t)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterNumberOfNonChromeOutputStreamsChangedSignalHandler(
    const base::RepeatingCallback<void(int32_t)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterNumberOfNonChromeOutputStreamsChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterNumberOfNonChromeOutputStreamsChangedSignalHandler,
              (const base::RepeatingCallback<void(int32_t)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterNumberOfInputStreamsWithPermissionChangedSignalHandler(
    const base::RepeatingCallback<void(const brillo::VariantDictionary&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterNumberOfInputStreamsWithPermissionChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterNumberOfInputStreamsWithPermissionChangedSignalHandler,
              (const base::RepeatingCallback<void(const brillo::VariantDictionary&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterHotwordTriggeredSignalHandler(
    const base::RepeatingCallback<void(int64_t,
                                       int64_t)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterHotwordTriggeredSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterHotwordTriggeredSignalHandler,
              (const base::RepeatingCallback<void(int64_t,
                                                  int64_t)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterAudioOutputActiveStateChangedSignalHandler(
    const base::RepeatingCallback<void(bool)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterAudioOutputActiveStateChangedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterAudioOutputActiveStateChangedSignalHandler,
              (const base::RepeatingCallback<void(bool)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterSevereUnderrunSignalHandler(
    base::RepeatingClosure signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterSevereUnderrunSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterSevereUnderrunSignalHandler,
              (base::RepeatingClosure /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterUnderrunSignalHandler(
    base::RepeatingClosure signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterUnderrunSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterUnderrunSignalHandler,
              (base::RepeatingClosure /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterSurveyTriggerSignalHandler(
    const base::RepeatingCallback<void(const brillo::VariantDictionary&)>& signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterSurveyTriggerSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterSurveyTriggerSignalHandler,
              (const base::RepeatingCallback<void(const brillo::VariantDictionary&)>& /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  void RegisterSpeakOnMuteDetectedSignalHandler(
    base::RepeatingClosure signal_callback,
    dbus::ObjectProxy::OnConnectedCallback on_connected_callback) override {
    DoRegisterSpeakOnMuteDetectedSignalHandler(signal_callback, &on_connected_callback);
  }
  MOCK_METHOD(void,
              DoRegisterSpeakOnMuteDetectedSignalHandler,
              (base::RepeatingClosure /*signal_callback*/,
               dbus::ObjectProxy::OnConnectedCallback* /*on_connected_callback*/));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace cras
}  // namespace chromium
}  // namespace org

namespace org {
namespace freedesktop {
namespace DBus {

// Mock object for IntrospectableProxyInterface.
class IntrospectableProxyMock : public IntrospectableProxyInterface {
 public:
  IntrospectableProxyMock() = default;
  IntrospectableProxyMock(const IntrospectableProxyMock&) = delete;
  IntrospectableProxyMock& operator=(const IntrospectableProxyMock&) = delete;

  MOCK_METHOD(bool,
              Introspect,
              (std::string* /*out_data*/,
               brillo::ErrorPtr* /*error*/,
               int /*timeout_ms*/),
              (override));
  MOCK_METHOD(void,
              IntrospectAsync,
              (base::OnceCallback<void(const std::string& /*data*/)> /*success_callback*/,
               base::OnceCallback<void(brillo::Error*)> /*error_callback*/,
               int /*timeout_ms*/),
              (override));

  MOCK_METHOD(const dbus::ObjectPath&, GetObjectPath, (), (const, override));
  MOCK_METHOD(dbus::ObjectProxy*, GetObjectProxy, (), (const, override));
};
}  // namespace DBus
}  // namespace freedesktop
}  // namespace org

#endif  // ____CHROMEOS_DBUS_BINDING___BUILD_ARM64_GENERIC_VAR_CACHE_PORTAGE_CHROMEOS_BASE_DIAGNOSTICS_OUT_DEFAULT_GEN_INCLUDE_CRAS_DBUS_PROXY_MOCKS_H
