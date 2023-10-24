// Generated from gen_events.py. DO NOT EDIT!
// source: structured.xml

#include "structured_events.h"

namespace metrics {
namespace structured {
namespace events {
namespace bluetooth {

BluetoothAdapterStateChanged::BluetoothAdapterStateChanged() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
BluetoothAdapterStateChanged::~BluetoothAdapterStateChanged() = default;
BluetoothAdapterStateChanged& BluetoothAdapterStateChanged::SetBootId(const std::string& value) {
  AddHmacMetric(kBootIdNameHash, value);
  return *this;
}

std::string BluetoothAdapterStateChanged::GetBootIdForTest() const {
  return GetHmacMetricForTest(kBootIdNameHash);
}

BluetoothAdapterStateChanged& BluetoothAdapterStateChanged::SetSystemTime(const int64_t value) {
  AddIntMetric(kSystemTimeNameHash, value);
  return *this;
}

int64_t BluetoothAdapterStateChanged::GetSystemTimeForTest() const {
  return GetIntMetricForTest(kSystemTimeNameHash);
}

BluetoothAdapterStateChanged& BluetoothAdapterStateChanged::SetIsFloss(const int64_t value) {
  AddIntMetric(kIsFlossNameHash, value);
  return *this;
}

int64_t BluetoothAdapterStateChanged::GetIsFlossForTest() const {
  return GetIntMetricForTest(kIsFlossNameHash);
}

BluetoothAdapterStateChanged& BluetoothAdapterStateChanged::SetAdapterState(const int64_t value) {
  AddIntMetric(kAdapterStateNameHash, value);
  return *this;
}

int64_t BluetoothAdapterStateChanged::GetAdapterStateForTest() const {
  return GetIntMetricForTest(kAdapterStateNameHash);
}

BluetoothPairingStateChanged::BluetoothPairingStateChanged() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
BluetoothPairingStateChanged::~BluetoothPairingStateChanged() = default;
BluetoothPairingStateChanged& BluetoothPairingStateChanged::SetBootId(const std::string& value) {
  AddHmacMetric(kBootIdNameHash, value);
  return *this;
}

std::string BluetoothPairingStateChanged::GetBootIdForTest() const {
  return GetHmacMetricForTest(kBootIdNameHash);
}

BluetoothPairingStateChanged& BluetoothPairingStateChanged::SetSystemTime(const int64_t value) {
  AddIntMetric(kSystemTimeNameHash, value);
  return *this;
}

int64_t BluetoothPairingStateChanged::GetSystemTimeForTest() const {
  return GetIntMetricForTest(kSystemTimeNameHash);
}

BluetoothPairingStateChanged& BluetoothPairingStateChanged::SetDeviceId(const std::string& value) {
  AddHmacMetric(kDeviceIdNameHash, value);
  return *this;
}

std::string BluetoothPairingStateChanged::GetDeviceIdForTest() const {
  return GetHmacMetricForTest(kDeviceIdNameHash);
}

BluetoothPairingStateChanged& BluetoothPairingStateChanged::SetDeviceType(const int64_t value) {
  AddIntMetric(kDeviceTypeNameHash, value);
  return *this;
}

int64_t BluetoothPairingStateChanged::GetDeviceTypeForTest() const {
  return GetIntMetricForTest(kDeviceTypeNameHash);
}

BluetoothPairingStateChanged& BluetoothPairingStateChanged::SetPairingState(const int64_t value) {
  AddIntMetric(kPairingStateNameHash, value);
  return *this;
}

int64_t BluetoothPairingStateChanged::GetPairingStateForTest() const {
  return GetIntMetricForTest(kPairingStateNameHash);
}

BluetoothAclConnectionStateChanged::BluetoothAclConnectionStateChanged() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
BluetoothAclConnectionStateChanged::~BluetoothAclConnectionStateChanged() = default;
BluetoothAclConnectionStateChanged& BluetoothAclConnectionStateChanged::SetBootId(const std::string& value) {
  AddHmacMetric(kBootIdNameHash, value);
  return *this;
}

std::string BluetoothAclConnectionStateChanged::GetBootIdForTest() const {
  return GetHmacMetricForTest(kBootIdNameHash);
}

BluetoothAclConnectionStateChanged& BluetoothAclConnectionStateChanged::SetSystemTime(const int64_t value) {
  AddIntMetric(kSystemTimeNameHash, value);
  return *this;
}

int64_t BluetoothAclConnectionStateChanged::GetSystemTimeForTest() const {
  return GetIntMetricForTest(kSystemTimeNameHash);
}

BluetoothAclConnectionStateChanged& BluetoothAclConnectionStateChanged::SetIsFloss(const int64_t value) {
  AddIntMetric(kIsFlossNameHash, value);
  return *this;
}

int64_t BluetoothAclConnectionStateChanged::GetIsFlossForTest() const {
  return GetIntMetricForTest(kIsFlossNameHash);
}

BluetoothAclConnectionStateChanged& BluetoothAclConnectionStateChanged::SetDeviceId(const std::string& value) {
  AddHmacMetric(kDeviceIdNameHash, value);
  return *this;
}

std::string BluetoothAclConnectionStateChanged::GetDeviceIdForTest() const {
  return GetHmacMetricForTest(kDeviceIdNameHash);
}

BluetoothAclConnectionStateChanged& BluetoothAclConnectionStateChanged::SetDeviceType(const int64_t value) {
  AddIntMetric(kDeviceTypeNameHash, value);
  return *this;
}

int64_t BluetoothAclConnectionStateChanged::GetDeviceTypeForTest() const {
  return GetIntMetricForTest(kDeviceTypeNameHash);
}

BluetoothAclConnectionStateChanged& BluetoothAclConnectionStateChanged::SetConnectionDirection(const int64_t value) {
  AddIntMetric(kConnectionDirectionNameHash, value);
  return *this;
}

int64_t BluetoothAclConnectionStateChanged::GetConnectionDirectionForTest() const {
  return GetIntMetricForTest(kConnectionDirectionNameHash);
}

BluetoothAclConnectionStateChanged& BluetoothAclConnectionStateChanged::SetConnectionInitiator(const int64_t value) {
  AddIntMetric(kConnectionInitiatorNameHash, value);
  return *this;
}

int64_t BluetoothAclConnectionStateChanged::GetConnectionInitiatorForTest() const {
  return GetIntMetricForTest(kConnectionInitiatorNameHash);
}

BluetoothAclConnectionStateChanged& BluetoothAclConnectionStateChanged::SetStateChangeType(const int64_t value) {
  AddIntMetric(kStateChangeTypeNameHash, value);
  return *this;
}

int64_t BluetoothAclConnectionStateChanged::GetStateChangeTypeForTest() const {
  return GetIntMetricForTest(kStateChangeTypeNameHash);
}

BluetoothAclConnectionStateChanged& BluetoothAclConnectionStateChanged::SetAclConnectionState(const int64_t value) {
  AddIntMetric(kAclConnectionStateNameHash, value);
  return *this;
}

int64_t BluetoothAclConnectionStateChanged::GetAclConnectionStateForTest() const {
  return GetIntMetricForTest(kAclConnectionStateNameHash);
}

BluetoothProfileConnectionStateChanged::BluetoothProfileConnectionStateChanged() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
BluetoothProfileConnectionStateChanged::~BluetoothProfileConnectionStateChanged() = default;
BluetoothProfileConnectionStateChanged& BluetoothProfileConnectionStateChanged::SetBootId(const std::string& value) {
  AddHmacMetric(kBootIdNameHash, value);
  return *this;
}

std::string BluetoothProfileConnectionStateChanged::GetBootIdForTest() const {
  return GetHmacMetricForTest(kBootIdNameHash);
}

BluetoothProfileConnectionStateChanged& BluetoothProfileConnectionStateChanged::SetSystemTime(const int64_t value) {
  AddIntMetric(kSystemTimeNameHash, value);
  return *this;
}

int64_t BluetoothProfileConnectionStateChanged::GetSystemTimeForTest() const {
  return GetIntMetricForTest(kSystemTimeNameHash);
}

BluetoothProfileConnectionStateChanged& BluetoothProfileConnectionStateChanged::SetDeviceId(const std::string& value) {
  AddHmacMetric(kDeviceIdNameHash, value);
  return *this;
}

std::string BluetoothProfileConnectionStateChanged::GetDeviceIdForTest() const {
  return GetHmacMetricForTest(kDeviceIdNameHash);
}

BluetoothProfileConnectionStateChanged& BluetoothProfileConnectionStateChanged::SetStateChangeType(const int64_t value) {
  AddIntMetric(kStateChangeTypeNameHash, value);
  return *this;
}

int64_t BluetoothProfileConnectionStateChanged::GetStateChangeTypeForTest() const {
  return GetIntMetricForTest(kStateChangeTypeNameHash);
}

BluetoothProfileConnectionStateChanged& BluetoothProfileConnectionStateChanged::SetProfile(const int64_t value) {
  AddIntMetric(kProfileNameHash, value);
  return *this;
}

int64_t BluetoothProfileConnectionStateChanged::GetProfileForTest() const {
  return GetIntMetricForTest(kProfileNameHash);
}

BluetoothProfileConnectionStateChanged& BluetoothProfileConnectionStateChanged::SetProfileConnectionState(const int64_t value) {
  AddIntMetric(kProfileConnectionStateNameHash, value);
  return *this;
}

int64_t BluetoothProfileConnectionStateChanged::GetProfileConnectionStateForTest() const {
  return GetIntMetricForTest(kProfileConnectionStateNameHash);
}

BluetoothDeviceInfoReport::BluetoothDeviceInfoReport() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
BluetoothDeviceInfoReport::~BluetoothDeviceInfoReport() = default;
BluetoothDeviceInfoReport& BluetoothDeviceInfoReport::SetBootId(const std::string& value) {
  AddHmacMetric(kBootIdNameHash, value);
  return *this;
}

std::string BluetoothDeviceInfoReport::GetBootIdForTest() const {
  return GetHmacMetricForTest(kBootIdNameHash);
}

BluetoothDeviceInfoReport& BluetoothDeviceInfoReport::SetSystemTime(const int64_t value) {
  AddIntMetric(kSystemTimeNameHash, value);
  return *this;
}

int64_t BluetoothDeviceInfoReport::GetSystemTimeForTest() const {
  return GetIntMetricForTest(kSystemTimeNameHash);
}

BluetoothDeviceInfoReport& BluetoothDeviceInfoReport::SetDeviceId(const std::string& value) {
  AddHmacMetric(kDeviceIdNameHash, value);
  return *this;
}

std::string BluetoothDeviceInfoReport::GetDeviceIdForTest() const {
  return GetHmacMetricForTest(kDeviceIdNameHash);
}

BluetoothDeviceInfoReport& BluetoothDeviceInfoReport::SetDeviceType(const int64_t value) {
  AddIntMetric(kDeviceTypeNameHash, value);
  return *this;
}

int64_t BluetoothDeviceInfoReport::GetDeviceTypeForTest() const {
  return GetIntMetricForTest(kDeviceTypeNameHash);
}

BluetoothDeviceInfoReport& BluetoothDeviceInfoReport::SetDeviceClass(const int64_t value) {
  AddIntMetric(kDeviceClassNameHash, value);
  return *this;
}

int64_t BluetoothDeviceInfoReport::GetDeviceClassForTest() const {
  return GetIntMetricForTest(kDeviceClassNameHash);
}

BluetoothDeviceInfoReport& BluetoothDeviceInfoReport::SetDeviceCategory(const int64_t value) {
  AddIntMetric(kDeviceCategoryNameHash, value);
  return *this;
}

int64_t BluetoothDeviceInfoReport::GetDeviceCategoryForTest() const {
  return GetIntMetricForTest(kDeviceCategoryNameHash);
}

BluetoothDeviceInfoReport& BluetoothDeviceInfoReport::SetVendorId(const int64_t value) {
  AddIntMetric(kVendorIdNameHash, value);
  return *this;
}

int64_t BluetoothDeviceInfoReport::GetVendorIdForTest() const {
  return GetIntMetricForTest(kVendorIdNameHash);
}

BluetoothDeviceInfoReport& BluetoothDeviceInfoReport::SetVendorIdSource(const int64_t value) {
  AddIntMetric(kVendorIdSourceNameHash, value);
  return *this;
}

int64_t BluetoothDeviceInfoReport::GetVendorIdSourceForTest() const {
  return GetIntMetricForTest(kVendorIdSourceNameHash);
}

BluetoothDeviceInfoReport& BluetoothDeviceInfoReport::SetProductId(const int64_t value) {
  AddIntMetric(kProductIdNameHash, value);
  return *this;
}

int64_t BluetoothDeviceInfoReport::GetProductIdForTest() const {
  return GetIntMetricForTest(kProductIdNameHash);
}

BluetoothDeviceInfoReport& BluetoothDeviceInfoReport::SetProductVersion(const int64_t value) {
  AddIntMetric(kProductVersionNameHash, value);
  return *this;
}

int64_t BluetoothDeviceInfoReport::GetProductVersionForTest() const {
  return GetIntMetricForTest(kProductVersionNameHash);
}

BluetoothAudioQualityReport::BluetoothAudioQualityReport() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
BluetoothAudioQualityReport::~BluetoothAudioQualityReport() = default;
BluetoothAudioQualityReport& BluetoothAudioQualityReport::SetBootId(const std::string& value) {
  AddHmacMetric(kBootIdNameHash, value);
  return *this;
}

std::string BluetoothAudioQualityReport::GetBootIdForTest() const {
  return GetHmacMetricForTest(kBootIdNameHash);
}

BluetoothAudioQualityReport& BluetoothAudioQualityReport::SetSystemTime(const int64_t value) {
  AddIntMetric(kSystemTimeNameHash, value);
  return *this;
}

int64_t BluetoothAudioQualityReport::GetSystemTimeForTest() const {
  return GetIntMetricForTest(kSystemTimeNameHash);
}

BluetoothAudioQualityReport& BluetoothAudioQualityReport::SetDeviceId(const std::string& value) {
  AddHmacMetric(kDeviceIdNameHash, value);
  return *this;
}

std::string BluetoothAudioQualityReport::GetDeviceIdForTest() const {
  return GetHmacMetricForTest(kDeviceIdNameHash);
}

BluetoothAudioQualityReport& BluetoothAudioQualityReport::SetProfile(const int64_t value) {
  AddIntMetric(kProfileNameHash, value);
  return *this;
}

int64_t BluetoothAudioQualityReport::GetProfileForTest() const {
  return GetIntMetricForTest(kProfileNameHash);
}

BluetoothAudioQualityReport& BluetoothAudioQualityReport::SetQualityType(const int64_t value) {
  AddIntMetric(kQualityTypeNameHash, value);
  return *this;
}

int64_t BluetoothAudioQualityReport::GetQualityTypeForTest() const {
  return GetIntMetricForTest(kQualityTypeNameHash);
}

BluetoothAudioQualityReport& BluetoothAudioQualityReport::SetAverage(const int64_t value) {
  AddIntMetric(kAverageNameHash, value);
  return *this;
}

int64_t BluetoothAudioQualityReport::GetAverageForTest() const {
  return GetIntMetricForTest(kAverageNameHash);
}

BluetoothAudioQualityReport& BluetoothAudioQualityReport::SetStdDev(const int64_t value) {
  AddIntMetric(kStdDevNameHash, value);
  return *this;
}

int64_t BluetoothAudioQualityReport::GetStdDevForTest() const {
  return GetIntMetricForTest(kStdDevNameHash);
}

BluetoothAudioQualityReport& BluetoothAudioQualityReport::SetPercentile95(const int64_t value) {
  AddIntMetric(kPercentile95NameHash, value);
  return *this;
}

int64_t BluetoothAudioQualityReport::GetPercentile95ForTest() const {
  return GetIntMetricForTest(kPercentile95NameHash);
}

BluetoothChipsetInfoReport::BluetoothChipsetInfoReport() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
BluetoothChipsetInfoReport::~BluetoothChipsetInfoReport() = default;
BluetoothChipsetInfoReport& BluetoothChipsetInfoReport::SetBootId(const std::string& value) {
  AddHmacMetric(kBootIdNameHash, value);
  return *this;
}

std::string BluetoothChipsetInfoReport::GetBootIdForTest() const {
  return GetHmacMetricForTest(kBootIdNameHash);
}

BluetoothChipsetInfoReport& BluetoothChipsetInfoReport::SetVendorId(const int64_t value) {
  AddIntMetric(kVendorIdNameHash, value);
  return *this;
}

int64_t BluetoothChipsetInfoReport::GetVendorIdForTest() const {
  return GetIntMetricForTest(kVendorIdNameHash);
}

BluetoothChipsetInfoReport& BluetoothChipsetInfoReport::SetProductId(const int64_t value) {
  AddIntMetric(kProductIdNameHash, value);
  return *this;
}

int64_t BluetoothChipsetInfoReport::GetProductIdForTest() const {
  return GetIntMetricForTest(kProductIdNameHash);
}

BluetoothChipsetInfoReport& BluetoothChipsetInfoReport::SetTransport(const int64_t value) {
  AddIntMetric(kTransportNameHash, value);
  return *this;
}

int64_t BluetoothChipsetInfoReport::GetTransportForTest() const {
  return GetIntMetricForTest(kTransportNameHash);
}

BluetoothChipsetInfoReport& BluetoothChipsetInfoReport::SetChipsetStringHashValue(const int64_t value) {
  AddIntMetric(kChipsetStringHashValueNameHash, value);
  return *this;
}

int64_t BluetoothChipsetInfoReport::GetChipsetStringHashValueForTest() const {
  return GetIntMetricForTest(kChipsetStringHashValueNameHash);
}

BluetoothA2dpAudioOverrun::BluetoothA2dpAudioOverrun() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
BluetoothA2dpAudioOverrun::~BluetoothA2dpAudioOverrun() = default;
BluetoothA2dpAudioOverrun& BluetoothA2dpAudioOverrun::SetBootId(const std::string& value) {
  AddHmacMetric(kBootIdNameHash, value);
  return *this;
}

std::string BluetoothA2dpAudioOverrun::GetBootIdForTest() const {
  return GetHmacMetricForTest(kBootIdNameHash);
}

BluetoothA2dpAudioOverrun& BluetoothA2dpAudioOverrun::SetSystemTime(const int64_t value) {
  AddIntMetric(kSystemTimeNameHash, value);
  return *this;
}

int64_t BluetoothA2dpAudioOverrun::GetSystemTimeForTest() const {
  return GetIntMetricForTest(kSystemTimeNameHash);
}

BluetoothA2dpAudioOverrun& BluetoothA2dpAudioOverrun::SetDeviceId(const std::string& value) {
  AddHmacMetric(kDeviceIdNameHash, value);
  return *this;
}

std::string BluetoothA2dpAudioOverrun::GetDeviceIdForTest() const {
  return GetHmacMetricForTest(kDeviceIdNameHash);
}

BluetoothA2dpAudioOverrun& BluetoothA2dpAudioOverrun::SetEncodingInterval(const int64_t value) {
  AddIntMetric(kEncodingIntervalNameHash, value);
  return *this;
}

int64_t BluetoothA2dpAudioOverrun::GetEncodingIntervalForTest() const {
  return GetIntMetricForTest(kEncodingIntervalNameHash);
}

BluetoothA2dpAudioOverrun& BluetoothA2dpAudioOverrun::SetDroppedBuffers(const int64_t value) {
  AddIntMetric(kDroppedBuffersNameHash, value);
  return *this;
}

int64_t BluetoothA2dpAudioOverrun::GetDroppedBuffersForTest() const {
  return GetIntMetricForTest(kDroppedBuffersNameHash);
}

BluetoothA2dpAudioOverrun& BluetoothA2dpAudioOverrun::SetDroppedFrames(const int64_t value) {
  AddIntMetric(kDroppedFramesNameHash, value);
  return *this;
}

int64_t BluetoothA2dpAudioOverrun::GetDroppedFramesForTest() const {
  return GetIntMetricForTest(kDroppedFramesNameHash);
}

BluetoothA2dpAudioOverrun& BluetoothA2dpAudioOverrun::SetDroppedBytes(const int64_t value) {
  AddIntMetric(kDroppedBytesNameHash, value);
  return *this;
}

int64_t BluetoothA2dpAudioOverrun::GetDroppedBytesForTest() const {
  return GetIntMetricForTest(kDroppedBytesNameHash);
}

BluetoothHfpPacketLoss::BluetoothHfpPacketLoss() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
BluetoothHfpPacketLoss::~BluetoothHfpPacketLoss() = default;
BluetoothHfpPacketLoss& BluetoothHfpPacketLoss::SetBootId(const std::string& value) {
  AddHmacMetric(kBootIdNameHash, value);
  return *this;
}

std::string BluetoothHfpPacketLoss::GetBootIdForTest() const {
  return GetHmacMetricForTest(kBootIdNameHash);
}

BluetoothHfpPacketLoss& BluetoothHfpPacketLoss::SetSystemTime(const int64_t value) {
  AddIntMetric(kSystemTimeNameHash, value);
  return *this;
}

int64_t BluetoothHfpPacketLoss::GetSystemTimeForTest() const {
  return GetIntMetricForTest(kSystemTimeNameHash);
}

BluetoothHfpPacketLoss& BluetoothHfpPacketLoss::SetDeviceId(const std::string& value) {
  AddHmacMetric(kDeviceIdNameHash, value);
  return *this;
}

std::string BluetoothHfpPacketLoss::GetDeviceIdForTest() const {
  return GetHmacMetricForTest(kDeviceIdNameHash);
}

BluetoothHfpPacketLoss& BluetoothHfpPacketLoss::SetDecodedFrames(const int64_t value) {
  AddIntMetric(kDecodedFramesNameHash, value);
  return *this;
}

int64_t BluetoothHfpPacketLoss::GetDecodedFramesForTest() const {
  return GetIntMetricForTest(kDecodedFramesNameHash);
}

BluetoothHfpPacketLoss& BluetoothHfpPacketLoss::SetPacketLossRatio(const double value) {
  AddDoubleMetric(kPacketLossRatioNameHash, value);
  return *this;
}

double BluetoothHfpPacketLoss::GetPacketLossRatioForTest() const {
  return GetDoubleMetricForTest(kPacketLossRatioNameHash);
}

BluetoothHfpPacketLoss& BluetoothHfpPacketLoss::SetCodecType(const int64_t value) {
  AddIntMetric(kCodecTypeNameHash, value);
  return *this;
}

int64_t BluetoothHfpPacketLoss::GetCodecTypeForTest() const {
  return GetIntMetricForTest(kCodecTypeNameHash);
}

BluetoothMmcTranscodeRtt::BluetoothMmcTranscodeRtt() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
BluetoothMmcTranscodeRtt::~BluetoothMmcTranscodeRtt() = default;
BluetoothMmcTranscodeRtt& BluetoothMmcTranscodeRtt::SetBootId(const std::string& value) {
  AddHmacMetric(kBootIdNameHash, value);
  return *this;
}

std::string BluetoothMmcTranscodeRtt::GetBootIdForTest() const {
  return GetHmacMetricForTest(kBootIdNameHash);
}

BluetoothMmcTranscodeRtt& BluetoothMmcTranscodeRtt::SetSystemTime(const int64_t value) {
  AddIntMetric(kSystemTimeNameHash, value);
  return *this;
}

int64_t BluetoothMmcTranscodeRtt::GetSystemTimeForTest() const {
  return GetIntMetricForTest(kSystemTimeNameHash);
}

BluetoothMmcTranscodeRtt& BluetoothMmcTranscodeRtt::SetMaximumRtt(const int64_t value) {
  AddIntMetric(kMaximumRttNameHash, value);
  return *this;
}

int64_t BluetoothMmcTranscodeRtt::GetMaximumRttForTest() const {
  return GetIntMetricForTest(kMaximumRttNameHash);
}

BluetoothMmcTranscodeRtt& BluetoothMmcTranscodeRtt::SetMeanRtt(const double value) {
  AddDoubleMetric(kMeanRttNameHash, value);
  return *this;
}

double BluetoothMmcTranscodeRtt::GetMeanRttForTest() const {
  return GetDoubleMetricForTest(kMeanRttNameHash);
}

BluetoothMmcTranscodeRtt& BluetoothMmcTranscodeRtt::SetNumRequests(const int64_t value) {
  AddIntMetric(kNumRequestsNameHash, value);
  return *this;
}

int64_t BluetoothMmcTranscodeRtt::GetNumRequestsForTest() const {
  return GetIntMetricForTest(kNumRequestsNameHash);
}

BluetoothMmcTranscodeRtt& BluetoothMmcTranscodeRtt::SetCodecType(const int64_t value) {
  AddIntMetric(kCodecTypeNameHash, value);
  return *this;
}

int64_t BluetoothMmcTranscodeRtt::GetCodecTypeForTest() const {
  return GetIntMetricForTest(kCodecTypeNameHash);
}

}  // namespace bluetooth

namespace bluetooth_device {

BluetoothDeviceInfo::BluetoothDeviceInfo() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
BluetoothDeviceInfo::~BluetoothDeviceInfo() = default;
BluetoothDeviceInfo& BluetoothDeviceInfo::SetDeviceType(const int64_t value) {
  AddIntMetric(kDeviceTypeNameHash, value);
  return *this;
}

int64_t BluetoothDeviceInfo::GetDeviceTypeForTest() const {
  return GetIntMetricForTest(kDeviceTypeNameHash);
}

BluetoothDeviceInfo& BluetoothDeviceInfo::SetDeviceClass(const int64_t value) {
  AddIntMetric(kDeviceClassNameHash, value);
  return *this;
}

int64_t BluetoothDeviceInfo::GetDeviceClassForTest() const {
  return GetIntMetricForTest(kDeviceClassNameHash);
}

BluetoothDeviceInfo& BluetoothDeviceInfo::SetDeviceCategory(const int64_t value) {
  AddIntMetric(kDeviceCategoryNameHash, value);
  return *this;
}

int64_t BluetoothDeviceInfo::GetDeviceCategoryForTest() const {
  return GetIntMetricForTest(kDeviceCategoryNameHash);
}

BluetoothDeviceInfo& BluetoothDeviceInfo::SetVendorId(const int64_t value) {
  AddIntMetric(kVendorIdNameHash, value);
  return *this;
}

int64_t BluetoothDeviceInfo::GetVendorIdForTest() const {
  return GetIntMetricForTest(kVendorIdNameHash);
}

BluetoothDeviceInfo& BluetoothDeviceInfo::SetVendorIdSource(const int64_t value) {
  AddIntMetric(kVendorIdSourceNameHash, value);
  return *this;
}

int64_t BluetoothDeviceInfo::GetVendorIdSourceForTest() const {
  return GetIntMetricForTest(kVendorIdSourceNameHash);
}

BluetoothDeviceInfo& BluetoothDeviceInfo::SetProductId(const int64_t value) {
  AddIntMetric(kProductIdNameHash, value);
  return *this;
}

int64_t BluetoothDeviceInfo::GetProductIdForTest() const {
  return GetIntMetricForTest(kProductIdNameHash);
}

BluetoothDeviceInfo& BluetoothDeviceInfo::SetProductVersion(const int64_t value) {
  AddIntMetric(kProductVersionNameHash, value);
  return *this;
}

int64_t BluetoothDeviceInfo::GetProductVersionForTest() const {
  return GetIntMetricForTest(kProductVersionNameHash);
}

}  // namespace bluetooth_device

namespace bluetooth_chipset {

BluetoothChipsetInfo::BluetoothChipsetInfo() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
BluetoothChipsetInfo::~BluetoothChipsetInfo() = default;
BluetoothChipsetInfo& BluetoothChipsetInfo::SetVendorId(const int64_t value) {
  AddIntMetric(kVendorIdNameHash, value);
  return *this;
}

int64_t BluetoothChipsetInfo::GetVendorIdForTest() const {
  return GetIntMetricForTest(kVendorIdNameHash);
}

BluetoothChipsetInfo& BluetoothChipsetInfo::SetProductId(const int64_t value) {
  AddIntMetric(kProductIdNameHash, value);
  return *this;
}

int64_t BluetoothChipsetInfo::GetProductIdForTest() const {
  return GetIntMetricForTest(kProductIdNameHash);
}

BluetoothChipsetInfo& BluetoothChipsetInfo::SetTransport(const int64_t value) {
  AddIntMetric(kTransportNameHash, value);
  return *this;
}

int64_t BluetoothChipsetInfo::GetTransportForTest() const {
  return GetIntMetricForTest(kTransportNameHash);
}

BluetoothChipsetInfo& BluetoothChipsetInfo::SetChipsetString(const std::string& value) {
  AddRawStringMetric(kChipsetStringNameHash, value);
  return *this;
}

std::string BluetoothChipsetInfo::GetChipsetStringForTest() const {
  return GetRawStringMetricForTest(kChipsetStringNameHash);
}

}  // namespace bluetooth_chipset

namespace hardware_verifier {

HwVerificationReport::HwVerificationReport() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
HwVerificationReport::~HwVerificationReport() = default;
HwVerificationReport& HwVerificationReport::SetIsCompliant(const int64_t value) {
  AddIntMetric(kIsCompliantNameHash, value);
  return *this;
}

int64_t HwVerificationReport::GetIsCompliantForTest() const {
  return GetIntMetricForTest(kIsCompliantNameHash);
}

HwVerificationReport& HwVerificationReport::SetQualificationStatusDisplayPanel(const int64_t value) {
  AddIntMetric(kQualificationStatusDisplayPanelNameHash, value);
  return *this;
}

int64_t HwVerificationReport::GetQualificationStatusDisplayPanelForTest() const {
  return GetIntMetricForTest(kQualificationStatusDisplayPanelNameHash);
}

HwVerificationReport& HwVerificationReport::SetQualificationStatusStorage(const int64_t value) {
  AddIntMetric(kQualificationStatusStorageNameHash, value);
  return *this;
}

int64_t HwVerificationReport::GetQualificationStatusStorageForTest() const {
  return GetIntMetricForTest(kQualificationStatusStorageNameHash);
}

ComponentInfo::ComponentInfo() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
ComponentInfo::~ComponentInfo() = default;
ComponentInfo& ComponentInfo::SetComponentCategory(const int64_t value) {
  AddIntMetric(kComponentCategoryNameHash, value);
  return *this;
}

int64_t ComponentInfo::GetComponentCategoryForTest() const {
  return GetIntMetricForTest(kComponentCategoryNameHash);
}

ComponentInfo& ComponentInfo::SetDisplayPanelVendor(const int64_t value) {
  AddIntMetric(kDisplayPanelVendorNameHash, value);
  return *this;
}

int64_t ComponentInfo::GetDisplayPanelVendorForTest() const {
  return GetIntMetricForTest(kDisplayPanelVendorNameHash);
}

ComponentInfo& ComponentInfo::SetDisplayPanelProductId(const int64_t value) {
  AddIntMetric(kDisplayPanelProductIdNameHash, value);
  return *this;
}

int64_t ComponentInfo::GetDisplayPanelProductIdForTest() const {
  return GetIntMetricForTest(kDisplayPanelProductIdNameHash);
}

ComponentInfo& ComponentInfo::SetDisplayPanelHeight(const int64_t value) {
  AddIntMetric(kDisplayPanelHeightNameHash, value);
  return *this;
}

int64_t ComponentInfo::GetDisplayPanelHeightForTest() const {
  return GetIntMetricForTest(kDisplayPanelHeightNameHash);
}

ComponentInfo& ComponentInfo::SetDisplayPanelWidth(const int64_t value) {
  AddIntMetric(kDisplayPanelWidthNameHash, value);
  return *this;
}

int64_t ComponentInfo::GetDisplayPanelWidthForTest() const {
  return GetIntMetricForTest(kDisplayPanelWidthNameHash);
}

ComponentInfo& ComponentInfo::SetStorageMmcManfid(const int64_t value) {
  AddIntMetric(kStorageMmcManfidNameHash, value);
  return *this;
}

int64_t ComponentInfo::GetStorageMmcManfidForTest() const {
  return GetIntMetricForTest(kStorageMmcManfidNameHash);
}

ComponentInfo& ComponentInfo::SetStorageMmcHwrev(const int64_t value) {
  AddIntMetric(kStorageMmcHwrevNameHash, value);
  return *this;
}

int64_t ComponentInfo::GetStorageMmcHwrevForTest() const {
  return GetIntMetricForTest(kStorageMmcHwrevNameHash);
}

ComponentInfo& ComponentInfo::SetStorageMmcOemid(const int64_t value) {
  AddIntMetric(kStorageMmcOemidNameHash, value);
  return *this;
}

int64_t ComponentInfo::GetStorageMmcOemidForTest() const {
  return GetIntMetricForTest(kStorageMmcOemidNameHash);
}

ComponentInfo& ComponentInfo::SetStorageMmcPrv(const int64_t value) {
  AddIntMetric(kStorageMmcPrvNameHash, value);
  return *this;
}

int64_t ComponentInfo::GetStorageMmcPrvForTest() const {
  return GetIntMetricForTest(kStorageMmcPrvNameHash);
}

ComponentInfo& ComponentInfo::SetStoragePciVendor(const int64_t value) {
  AddIntMetric(kStoragePciVendorNameHash, value);
  return *this;
}

int64_t ComponentInfo::GetStoragePciVendorForTest() const {
  return GetIntMetricForTest(kStoragePciVendorNameHash);
}

ComponentInfo& ComponentInfo::SetStoragePciDevice(const int64_t value) {
  AddIntMetric(kStoragePciDeviceNameHash, value);
  return *this;
}

int64_t ComponentInfo::GetStoragePciDeviceForTest() const {
  return GetIntMetricForTest(kStoragePciDeviceNameHash);
}

ComponentInfo& ComponentInfo::SetStoragePciClass(const int64_t value) {
  AddIntMetric(kStoragePciClassNameHash, value);
  return *this;
}

int64_t ComponentInfo::GetStoragePciClassForTest() const {
  return GetIntMetricForTest(kStoragePciClassNameHash);
}

}  // namespace hardware_verifier

namespace cellular {

CellularConnectionAttempt::CellularConnectionAttempt() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
CellularConnectionAttempt::~CellularConnectionAttempt() = default;
CellularConnectionAttempt& CellularConnectionAttempt::Setapn_id(const int64_t value) {
  AddIntMetric(kapn_idNameHash, value);
  return *this;
}

int64_t CellularConnectionAttempt::Getapn_idForTest() const {
  return GetIntMetricForTest(kapn_idNameHash);
}

CellularConnectionAttempt& CellularConnectionAttempt::Setipv4_config_method(const int64_t value) {
  AddIntMetric(kipv4_config_methodNameHash, value);
  return *this;
}

int64_t CellularConnectionAttempt::Getipv4_config_methodForTest() const {
  return GetIntMetricForTest(kipv4_config_methodNameHash);
}

CellularConnectionAttempt& CellularConnectionAttempt::Setipv6_config_method(const int64_t value) {
  AddIntMetric(kipv6_config_methodNameHash, value);
  return *this;
}

int64_t CellularConnectionAttempt::Getipv6_config_methodForTest() const {
  return GetIntMetricForTest(kipv6_config_methodNameHash);
}

CellularConnectionAttempt& CellularConnectionAttempt::Setconnect_result(const int64_t value) {
  AddIntMetric(kconnect_resultNameHash, value);
  return *this;
}

int64_t CellularConnectionAttempt::Getconnect_resultForTest() const {
  return GetIntMetricForTest(kconnect_resultNameHash);
}

CellularConnectionAttempt& CellularConnectionAttempt::Sethome_mccmnc(const int64_t value) {
  AddIntMetric(khome_mccmncNameHash, value);
  return *this;
}

int64_t CellularConnectionAttempt::Gethome_mccmncForTest() const {
  return GetIntMetricForTest(khome_mccmncNameHash);
}

CellularConnectionAttempt& CellularConnectionAttempt::Setserving_mccmnc(const int64_t value) {
  AddIntMetric(kserving_mccmncNameHash, value);
  return *this;
}

int64_t CellularConnectionAttempt::Getserving_mccmncForTest() const {
  return GetIntMetricForTest(kserving_mccmncNameHash);
}

CellularConnectionAttempt& CellularConnectionAttempt::Setroaming_state(const int64_t value) {
  AddIntMetric(kroaming_stateNameHash, value);
  return *this;
}

int64_t CellularConnectionAttempt::Getroaming_stateForTest() const {
  return GetIntMetricForTest(kroaming_stateNameHash);
}

CellularConnectionAttempt& CellularConnectionAttempt::Setapn_types(const int64_t value) {
  AddIntMetric(kapn_typesNameHash, value);
  return *this;
}

int64_t CellularConnectionAttempt::Getapn_typesForTest() const {
  return GetIntMetricForTest(kapn_typesNameHash);
}

CellularConnectionAttempt& CellularConnectionAttempt::Setapn_source(const int64_t value) {
  AddIntMetric(kapn_sourceNameHash, value);
  return *this;
}

int64_t CellularConnectionAttempt::Getapn_sourceForTest() const {
  return GetIntMetricForTest(kapn_sourceNameHash);
}

CellularConnectionAttempt& CellularConnectionAttempt::Settech_used(const int64_t value) {
  AddIntMetric(ktech_usedNameHash, value);
  return *this;
}

int64_t CellularConnectionAttempt::Gettech_usedForTest() const {
  return GetIntMetricForTest(ktech_usedNameHash);
}

CellularConnectionAttempt& CellularConnectionAttempt::Seticcid_length(const int64_t value) {
  AddIntMetric(kiccid_lengthNameHash, value);
  return *this;
}

int64_t CellularConnectionAttempt::Geticcid_lengthForTest() const {
  return GetIntMetricForTest(kiccid_lengthNameHash);
}

CellularConnectionAttempt& CellularConnectionAttempt::Setsim_type(const int64_t value) {
  AddIntMetric(ksim_typeNameHash, value);
  return *this;
}

int64_t CellularConnectionAttempt::Getsim_typeForTest() const {
  return GetIntMetricForTest(ksim_typeNameHash);
}

CellularConnectionAttempt& CellularConnectionAttempt::Setmodem_state(const int64_t value) {
  AddIntMetric(kmodem_stateNameHash, value);
  return *this;
}

int64_t CellularConnectionAttempt::Getmodem_stateForTest() const {
  return GetIntMetricForTest(kmodem_stateNameHash);
}

CellularConnectionAttempt& CellularConnectionAttempt::Setconnect_time(const int64_t value) {
  AddIntMetric(kconnect_timeNameHash, value);
  return *this;
}

int64_t CellularConnectionAttempt::Getconnect_timeForTest() const {
  return GetIntMetricForTest(kconnect_timeNameHash);
}

CellularConnectionAttempt& CellularConnectionAttempt::Setscan_connect_time(const int64_t value) {
  AddIntMetric(kscan_connect_timeNameHash, value);
  return *this;
}

int64_t CellularConnectionAttempt::Getscan_connect_timeForTest() const {
  return GetIntMetricForTest(kscan_connect_timeNameHash);
}

CellularConnectionAttempt& CellularConnectionAttempt::Setdetailed_error(const int64_t value) {
  AddIntMetric(kdetailed_errorNameHash, value);
  return *this;
}

int64_t CellularConnectionAttempt::Getdetailed_errorForTest() const {
  return GetIntMetricForTest(kdetailed_errorNameHash);
}

CellularConnectionAttempt& CellularConnectionAttempt::Setgid1(const int64_t value) {
  AddIntMetric(kgid1NameHash, value);
  return *this;
}

int64_t CellularConnectionAttempt::Getgid1ForTest() const {
  return GetIntMetricForTest(kgid1NameHash);
}

CellularConnectionAttempt& CellularConnectionAttempt::Setuse_apn_revamp_ui(const int64_t value) {
  AddIntMetric(kuse_apn_revamp_uiNameHash, value);
  return *this;
}

int64_t CellularConnectionAttempt::Getuse_apn_revamp_uiForTest() const {
  return GetIntMetricForTest(kuse_apn_revamp_uiNameHash);
}

CellularConnectionAttempt& CellularConnectionAttempt::Setconnection_attempt_type(const int64_t value) {
  AddIntMetric(kconnection_attempt_typeNameHash, value);
  return *this;
}

int64_t CellularConnectionAttempt::Getconnection_attempt_typeForTest() const {
  return GetIntMetricForTest(kconnection_attempt_typeNameHash);
}

CellularConnectionAttempt& CellularConnectionAttempt::Setsubscription_error_seen(const int64_t value) {
  AddIntMetric(ksubscription_error_seenNameHash, value);
  return *this;
}

int64_t CellularConnectionAttempt::Getsubscription_error_seenForTest() const {
  return GetIntMetricForTest(ksubscription_error_seenNameHash);
}

CellularConnectionAttempt& CellularConnectionAttempt::Setconnection_apn_types(const int64_t value) {
  AddIntMetric(kconnection_apn_typesNameHash, value);
  return *this;
}

int64_t CellularConnectionAttempt::Getconnection_apn_typesForTest() const {
  return GetIntMetricForTest(kconnection_apn_typesNameHash);
}

ModemFwdFwInstallResult::ModemFwdFwInstallResult() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
ModemFwdFwInstallResult::~ModemFwdFwInstallResult() = default;
ModemFwdFwInstallResult& ModemFwdFwInstallResult::Setfirmware_types(const int64_t value) {
  AddIntMetric(kfirmware_typesNameHash, value);
  return *this;
}

int64_t ModemFwdFwInstallResult::Getfirmware_typesForTest() const {
  return GetIntMetricForTest(kfirmware_typesNameHash);
}

ModemFwdFwInstallResult& ModemFwdFwInstallResult::Setfw_install_result(const int64_t value) {
  AddIntMetric(kfw_install_resultNameHash, value);
  return *this;
}

int64_t ModemFwdFwInstallResult::Getfw_install_resultForTest() const {
  return GetIntMetricForTest(kfw_install_resultNameHash);
}

HermesOp::HermesOp() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
HermesOp::~HermesOp() = default;
HermesOp& HermesOp::SetOperation(const int64_t value) {
  AddIntMetric(kOperationNameHash, value);
  return *this;
}

int64_t HermesOp::GetOperationForTest() const {
  return GetIntMetricForTest(kOperationNameHash);
}

HermesOp& HermesOp::SetResult(const int64_t value) {
  AddIntMetric(kResultNameHash, value);
  return *this;
}

int64_t HermesOp::GetResultForTest() const {
  return GetIntMetricForTest(kResultNameHash);
}

HermesOp& HermesOp::Sethome_mccmnc(const int64_t value) {
  AddIntMetric(khome_mccmncNameHash, value);
  return *this;
}

int64_t HermesOp::Gethome_mccmncForTest() const {
  return GetIntMetricForTest(khome_mccmncNameHash);
}

PowerOptimization::PowerOptimization() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
PowerOptimization::~PowerOptimization() = default;
PowerOptimization& PowerOptimization::Setpower_state(const int64_t value) {
  AddIntMetric(kpower_stateNameHash, value);
  return *this;
}

int64_t PowerOptimization::Getpower_stateForTest() const {
  return GetIntMetricForTest(kpower_stateNameHash);
}

PowerOptimization& PowerOptimization::Setreason(const int64_t value) {
  AddIntMetric(kreasonNameHash, value);
  return *this;
}

int64_t PowerOptimization::GetreasonForTest() const {
  return GetIntMetricForTest(kreasonNameHash);
}

PowerOptimization& PowerOptimization::Setsince_last_online_hours(const int64_t value) {
  AddIntMetric(ksince_last_online_hoursNameHash, value);
  return *this;
}

int64_t PowerOptimization::Getsince_last_online_hoursForTest() const {
  return GetIntMetricForTest(ksince_last_online_hoursNameHash);
}

}  // namespace cellular

namespace rollback_enterprise {

RollbackPolicyActivated::RollbackPolicyActivated() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
RollbackPolicyActivated::~RollbackPolicyActivated() = default;
RollbackPolicyActivated& RollbackPolicyActivated::Setorigin_chromeos_version_major(const int64_t value) {
  AddIntMetric(korigin_chromeos_version_majorNameHash, value);
  return *this;
}

int64_t RollbackPolicyActivated::Getorigin_chromeos_version_majorForTest() const {
  return GetIntMetricForTest(korigin_chromeos_version_majorNameHash);
}

RollbackPolicyActivated& RollbackPolicyActivated::Setorigin_chromeos_version_minor(const int64_t value) {
  AddIntMetric(korigin_chromeos_version_minorNameHash, value);
  return *this;
}

int64_t RollbackPolicyActivated::Getorigin_chromeos_version_minorForTest() const {
  return GetIntMetricForTest(korigin_chromeos_version_minorNameHash);
}

RollbackPolicyActivated& RollbackPolicyActivated::Setorigin_chromeos_version_patch(const int64_t value) {
  AddIntMetric(korigin_chromeos_version_patchNameHash, value);
  return *this;
}

int64_t RollbackPolicyActivated::Getorigin_chromeos_version_patchForTest() const {
  return GetIntMetricForTest(korigin_chromeos_version_patchNameHash);
}

RollbackPolicyActivated& RollbackPolicyActivated::Settarget_chromeos_version_major(const int64_t value) {
  AddIntMetric(ktarget_chromeos_version_majorNameHash, value);
  return *this;
}

int64_t RollbackPolicyActivated::Gettarget_chromeos_version_majorForTest() const {
  return GetIntMetricForTest(ktarget_chromeos_version_majorNameHash);
}

RollbackPolicyActivated& RollbackPolicyActivated::Settarget_chromeos_version_minor(const int64_t value) {
  AddIntMetric(ktarget_chromeos_version_minorNameHash, value);
  return *this;
}

int64_t RollbackPolicyActivated::Gettarget_chromeos_version_minorForTest() const {
  return GetIntMetricForTest(ktarget_chromeos_version_minorNameHash);
}

RollbackPolicyActivated& RollbackPolicyActivated::Settarget_chromeos_version_patch(const int64_t value) {
  AddIntMetric(ktarget_chromeos_version_patchNameHash, value);
  return *this;
}

int64_t RollbackPolicyActivated::Gettarget_chromeos_version_patchForTest() const {
  return GetIntMetricForTest(ktarget_chromeos_version_patchNameHash);
}

RollbackOobeConfigSave::RollbackOobeConfigSave() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
RollbackOobeConfigSave::~RollbackOobeConfigSave() = default;
RollbackOobeConfigSave& RollbackOobeConfigSave::Setorigin_chromeos_version_major(const int64_t value) {
  AddIntMetric(korigin_chromeos_version_majorNameHash, value);
  return *this;
}

int64_t RollbackOobeConfigSave::Getorigin_chromeos_version_majorForTest() const {
  return GetIntMetricForTest(korigin_chromeos_version_majorNameHash);
}

RollbackOobeConfigSave& RollbackOobeConfigSave::Setorigin_chromeos_version_minor(const int64_t value) {
  AddIntMetric(korigin_chromeos_version_minorNameHash, value);
  return *this;
}

int64_t RollbackOobeConfigSave::Getorigin_chromeos_version_minorForTest() const {
  return GetIntMetricForTest(korigin_chromeos_version_minorNameHash);
}

RollbackOobeConfigSave& RollbackOobeConfigSave::Setorigin_chromeos_version_patch(const int64_t value) {
  AddIntMetric(korigin_chromeos_version_patchNameHash, value);
  return *this;
}

int64_t RollbackOobeConfigSave::Getorigin_chromeos_version_patchForTest() const {
  return GetIntMetricForTest(korigin_chromeos_version_patchNameHash);
}

RollbackOobeConfigSave& RollbackOobeConfigSave::Settarget_chromeos_version_major(const int64_t value) {
  AddIntMetric(ktarget_chromeos_version_majorNameHash, value);
  return *this;
}

int64_t RollbackOobeConfigSave::Gettarget_chromeos_version_majorForTest() const {
  return GetIntMetricForTest(ktarget_chromeos_version_majorNameHash);
}

RollbackOobeConfigSave& RollbackOobeConfigSave::Settarget_chromeos_version_minor(const int64_t value) {
  AddIntMetric(ktarget_chromeos_version_minorNameHash, value);
  return *this;
}

int64_t RollbackOobeConfigSave::Gettarget_chromeos_version_minorForTest() const {
  return GetIntMetricForTest(ktarget_chromeos_version_minorNameHash);
}

RollbackOobeConfigSave& RollbackOobeConfigSave::Settarget_chromeos_version_patch(const int64_t value) {
  AddIntMetric(ktarget_chromeos_version_patchNameHash, value);
  return *this;
}

int64_t RollbackOobeConfigSave::Gettarget_chromeos_version_patchForTest() const {
  return GetIntMetricForTest(ktarget_chromeos_version_patchNameHash);
}

RollbackOobeConfigSave& RollbackOobeConfigSave::Setresult(const int64_t value) {
  AddIntMetric(kresultNameHash, value);
  return *this;
}

int64_t RollbackOobeConfigSave::GetresultForTest() const {
  return GetIntMetricForTest(kresultNameHash);
}

RollbackOobeConfigRestore::RollbackOobeConfigRestore() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
RollbackOobeConfigRestore::~RollbackOobeConfigRestore() = default;
RollbackOobeConfigRestore& RollbackOobeConfigRestore::Setorigin_chromeos_version_major(const int64_t value) {
  AddIntMetric(korigin_chromeos_version_majorNameHash, value);
  return *this;
}

int64_t RollbackOobeConfigRestore::Getorigin_chromeos_version_majorForTest() const {
  return GetIntMetricForTest(korigin_chromeos_version_majorNameHash);
}

RollbackOobeConfigRestore& RollbackOobeConfigRestore::Setorigin_chromeos_version_minor(const int64_t value) {
  AddIntMetric(korigin_chromeos_version_minorNameHash, value);
  return *this;
}

int64_t RollbackOobeConfigRestore::Getorigin_chromeos_version_minorForTest() const {
  return GetIntMetricForTest(korigin_chromeos_version_minorNameHash);
}

RollbackOobeConfigRestore& RollbackOobeConfigRestore::Setorigin_chromeos_version_patch(const int64_t value) {
  AddIntMetric(korigin_chromeos_version_patchNameHash, value);
  return *this;
}

int64_t RollbackOobeConfigRestore::Getorigin_chromeos_version_patchForTest() const {
  return GetIntMetricForTest(korigin_chromeos_version_patchNameHash);
}

RollbackOobeConfigRestore& RollbackOobeConfigRestore::Settarget_chromeos_version_major(const int64_t value) {
  AddIntMetric(ktarget_chromeos_version_majorNameHash, value);
  return *this;
}

int64_t RollbackOobeConfigRestore::Gettarget_chromeos_version_majorForTest() const {
  return GetIntMetricForTest(ktarget_chromeos_version_majorNameHash);
}

RollbackOobeConfigRestore& RollbackOobeConfigRestore::Settarget_chromeos_version_minor(const int64_t value) {
  AddIntMetric(ktarget_chromeos_version_minorNameHash, value);
  return *this;
}

int64_t RollbackOobeConfigRestore::Gettarget_chromeos_version_minorForTest() const {
  return GetIntMetricForTest(ktarget_chromeos_version_minorNameHash);
}

RollbackOobeConfigRestore& RollbackOobeConfigRestore::Settarget_chromeos_version_patch(const int64_t value) {
  AddIntMetric(ktarget_chromeos_version_patchNameHash, value);
  return *this;
}

int64_t RollbackOobeConfigRestore::Gettarget_chromeos_version_patchForTest() const {
  return GetIntMetricForTest(ktarget_chromeos_version_patchNameHash);
}

RollbackOobeConfigRestore& RollbackOobeConfigRestore::Setresult_chromeos_version_major(const int64_t value) {
  AddIntMetric(kresult_chromeos_version_majorNameHash, value);
  return *this;
}

int64_t RollbackOobeConfigRestore::Getresult_chromeos_version_majorForTest() const {
  return GetIntMetricForTest(kresult_chromeos_version_majorNameHash);
}

RollbackOobeConfigRestore& RollbackOobeConfigRestore::Setresult_chromeos_version_minor(const int64_t value) {
  AddIntMetric(kresult_chromeos_version_minorNameHash, value);
  return *this;
}

int64_t RollbackOobeConfigRestore::Getresult_chromeos_version_minorForTest() const {
  return GetIntMetricForTest(kresult_chromeos_version_minorNameHash);
}

RollbackOobeConfigRestore& RollbackOobeConfigRestore::Setresult_chromeos_version_patch(const int64_t value) {
  AddIntMetric(kresult_chromeos_version_patchNameHash, value);
  return *this;
}

int64_t RollbackOobeConfigRestore::Getresult_chromeos_version_patchForTest() const {
  return GetIntMetricForTest(kresult_chromeos_version_patchNameHash);
}

RollbackOobeConfigRestore& RollbackOobeConfigRestore::Setresult(const int64_t value) {
  AddIntMetric(kresultNameHash, value);
  return *this;
}

int64_t RollbackOobeConfigRestore::GetresultForTest() const {
  return GetIntMetricForTest(kresultNameHash);
}

RollbackUpdateFailure::RollbackUpdateFailure() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
RollbackUpdateFailure::~RollbackUpdateFailure() = default;
RollbackUpdateFailure& RollbackUpdateFailure::Setorigin_chromeos_version_major(const int64_t value) {
  AddIntMetric(korigin_chromeos_version_majorNameHash, value);
  return *this;
}

int64_t RollbackUpdateFailure::Getorigin_chromeos_version_majorForTest() const {
  return GetIntMetricForTest(korigin_chromeos_version_majorNameHash);
}

RollbackUpdateFailure& RollbackUpdateFailure::Setorigin_chromeos_version_minor(const int64_t value) {
  AddIntMetric(korigin_chromeos_version_minorNameHash, value);
  return *this;
}

int64_t RollbackUpdateFailure::Getorigin_chromeos_version_minorForTest() const {
  return GetIntMetricForTest(korigin_chromeos_version_minorNameHash);
}

RollbackUpdateFailure& RollbackUpdateFailure::Setorigin_chromeos_version_patch(const int64_t value) {
  AddIntMetric(korigin_chromeos_version_patchNameHash, value);
  return *this;
}

int64_t RollbackUpdateFailure::Getorigin_chromeos_version_patchForTest() const {
  return GetIntMetricForTest(korigin_chromeos_version_patchNameHash);
}

RollbackUpdateFailure& RollbackUpdateFailure::Settarget_chromeos_version_major(const int64_t value) {
  AddIntMetric(ktarget_chromeos_version_majorNameHash, value);
  return *this;
}

int64_t RollbackUpdateFailure::Gettarget_chromeos_version_majorForTest() const {
  return GetIntMetricForTest(ktarget_chromeos_version_majorNameHash);
}

RollbackUpdateFailure& RollbackUpdateFailure::Settarget_chromeos_version_minor(const int64_t value) {
  AddIntMetric(ktarget_chromeos_version_minorNameHash, value);
  return *this;
}

int64_t RollbackUpdateFailure::Gettarget_chromeos_version_minorForTest() const {
  return GetIntMetricForTest(ktarget_chromeos_version_minorNameHash);
}

RollbackUpdateFailure& RollbackUpdateFailure::Settarget_chromeos_version_patch(const int64_t value) {
  AddIntMetric(ktarget_chromeos_version_patchNameHash, value);
  return *this;
}

int64_t RollbackUpdateFailure::Gettarget_chromeos_version_patchForTest() const {
  return GetIntMetricForTest(ktarget_chromeos_version_patchNameHash);
}

}  // namespace rollback_enterprise

namespace rmad {

ShimlessRmaReport::ShimlessRmaReport() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
ShimlessRmaReport::~ShimlessRmaReport() = default;
ShimlessRmaReport& ShimlessRmaReport::SetOverallTime(const double value) {
  AddDoubleMetric(kOverallTimeNameHash, value);
  return *this;
}

double ShimlessRmaReport::GetOverallTimeForTest() const {
  return GetDoubleMetricForTest(kOverallTimeNameHash);
}

ShimlessRmaReport& ShimlessRmaReport::SetRunningTime(const double value) {
  AddDoubleMetric(kRunningTimeNameHash, value);
  return *this;
}

double ShimlessRmaReport::GetRunningTimeForTest() const {
  return GetDoubleMetricForTest(kRunningTimeNameHash);
}

ShimlessRmaReport& ShimlessRmaReport::SetIsComplete(const int64_t value) {
  AddIntMetric(kIsCompleteNameHash, value);
  return *this;
}

int64_t ShimlessRmaReport::GetIsCompleteForTest() const {
  return GetIntMetricForTest(kIsCompleteNameHash);
}

ShimlessRmaReport& ShimlessRmaReport::SetRoVerificationStatus(const int64_t value) {
  AddIntMetric(kRoVerificationStatusNameHash, value);
  return *this;
}

int64_t ShimlessRmaReport::GetRoVerificationStatusForTest() const {
  return GetIntMetricForTest(kRoVerificationStatusNameHash);
}

ShimlessRmaReport& ShimlessRmaReport::SetReturningOwner(const int64_t value) {
  AddIntMetric(kReturningOwnerNameHash, value);
  return *this;
}

int64_t ShimlessRmaReport::GetReturningOwnerForTest() const {
  return GetIntMetricForTest(kReturningOwnerNameHash);
}

ShimlessRmaReport& ShimlessRmaReport::SetMainboardReplacement(const int64_t value) {
  AddIntMetric(kMainboardReplacementNameHash, value);
  return *this;
}

int64_t ShimlessRmaReport::GetMainboardReplacementForTest() const {
  return GetIntMetricForTest(kMainboardReplacementNameHash);
}

ShimlessRmaReport& ShimlessRmaReport::SetWriteProtectDisableMethod(const int64_t value) {
  AddIntMetric(kWriteProtectDisableMethodNameHash, value);
  return *this;
}

int64_t ShimlessRmaReport::GetWriteProtectDisableMethodForTest() const {
  return GetIntMetricForTest(kWriteProtectDisableMethodNameHash);
}

ReplacedComponent::ReplacedComponent() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
ReplacedComponent::~ReplacedComponent() = default;
ReplacedComponent& ReplacedComponent::SetComponentCategory(const int64_t value) {
  AddIntMetric(kComponentCategoryNameHash, value);
  return *this;
}

int64_t ReplacedComponent::GetComponentCategoryForTest() const {
  return GetIntMetricForTest(kComponentCategoryNameHash);
}

OccurredError::OccurredError() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
OccurredError::~OccurredError() = default;
OccurredError& OccurredError::SetErrorType(const int64_t value) {
  AddIntMetric(kErrorTypeNameHash, value);
  return *this;
}

int64_t OccurredError::GetErrorTypeForTest() const {
  return GetIntMetricForTest(kErrorTypeNameHash);
}

AdditionalActivity::AdditionalActivity() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
AdditionalActivity::~AdditionalActivity() = default;
AdditionalActivity& AdditionalActivity::SetActivityType(const int64_t value) {
  AddIntMetric(kActivityTypeNameHash, value);
  return *this;
}

int64_t AdditionalActivity::GetActivityTypeForTest() const {
  return GetIntMetricForTest(kActivityTypeNameHash);
}

ShimlessRmaStateReport::ShimlessRmaStateReport() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
ShimlessRmaStateReport::~ShimlessRmaStateReport() = default;
ShimlessRmaStateReport& ShimlessRmaStateReport::SetStateCase(const int64_t value) {
  AddIntMetric(kStateCaseNameHash, value);
  return *this;
}

int64_t ShimlessRmaStateReport::GetStateCaseForTest() const {
  return GetIntMetricForTest(kStateCaseNameHash);
}

ShimlessRmaStateReport& ShimlessRmaStateReport::SetIsAborted(const int64_t value) {
  AddIntMetric(kIsAbortedNameHash, value);
  return *this;
}

int64_t ShimlessRmaStateReport::GetIsAbortedForTest() const {
  return GetIntMetricForTest(kIsAbortedNameHash);
}

ShimlessRmaStateReport& ShimlessRmaStateReport::SetOverallTime(const double value) {
  AddDoubleMetric(kOverallTimeNameHash, value);
  return *this;
}

double ShimlessRmaStateReport::GetOverallTimeForTest() const {
  return GetDoubleMetricForTest(kOverallTimeNameHash);
}

ShimlessRmaStateReport& ShimlessRmaStateReport::SetTransitionCount(const int64_t value) {
  AddIntMetric(kTransitionCountNameHash, value);
  return *this;
}

int64_t ShimlessRmaStateReport::GetTransitionCountForTest() const {
  return GetIntMetricForTest(kTransitionCountNameHash);
}

ShimlessRmaStateReport& ShimlessRmaStateReport::SetGetLogCount(const int64_t value) {
  AddIntMetric(kGetLogCountNameHash, value);
  return *this;
}

int64_t ShimlessRmaStateReport::GetGetLogCountForTest() const {
  return GetIntMetricForTest(kGetLogCountNameHash);
}

ShimlessRmaStateReport& ShimlessRmaStateReport::SetSaveLogCount(const int64_t value) {
  AddIntMetric(kSaveLogCountNameHash, value);
  return *this;
}

int64_t ShimlessRmaStateReport::GetSaveLogCountForTest() const {
  return GetIntMetricForTest(kSaveLogCountNameHash);
}

}  // namespace rmad

namespace usb_device {

UsbDeviceInfo::UsbDeviceInfo() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
UsbDeviceInfo::~UsbDeviceInfo() = default;
UsbDeviceInfo& UsbDeviceInfo::SetVendorId(const int64_t value) {
  AddIntMetric(kVendorIdNameHash, value);
  return *this;
}

int64_t UsbDeviceInfo::GetVendorIdForTest() const {
  return GetIntMetricForTest(kVendorIdNameHash);
}

UsbDeviceInfo& UsbDeviceInfo::SetVendorName(const std::string& value) {
  AddRawStringMetric(kVendorNameNameHash, value);
  return *this;
}

std::string UsbDeviceInfo::GetVendorNameForTest() const {
  return GetRawStringMetricForTest(kVendorNameNameHash);
}

UsbDeviceInfo& UsbDeviceInfo::SetProductId(const int64_t value) {
  AddIntMetric(kProductIdNameHash, value);
  return *this;
}

int64_t UsbDeviceInfo::GetProductIdForTest() const {
  return GetIntMetricForTest(kProductIdNameHash);
}

UsbDeviceInfo& UsbDeviceInfo::SetProductName(const std::string& value) {
  AddRawStringMetric(kProductNameNameHash, value);
  return *this;
}

std::string UsbDeviceInfo::GetProductNameForTest() const {
  return GetRawStringMetricForTest(kProductNameNameHash);
}

UsbDeviceInfo& UsbDeviceInfo::SetDeviceClass(const int64_t value) {
  AddIntMetric(kDeviceClassNameHash, value);
  return *this;
}

int64_t UsbDeviceInfo::GetDeviceClassForTest() const {
  return GetIntMetricForTest(kDeviceClassNameHash);
}

UsbDeviceInfo& UsbDeviceInfo::SetInterfaceClass(const std::vector<int64_t>& value) {
  AddIntArrayMetric(kInterfaceClassNameHash, value, UsbDeviceInfo::GetInterfaceClassMaxLength());
  return *this;
}

std::vector<int64_t> UsbDeviceInfo::GetInterfaceClassForTest() const {
  return GetIntArrayMetricForTest(kInterfaceClassNameHash);
}

}  // namespace usb_device

namespace usb_session {

UsbSessionEvent::UsbSessionEvent() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
UsbSessionEvent::~UsbSessionEvent() = default;
UsbSessionEvent& UsbSessionEvent::SetBootId(const std::string& value) {
  AddHmacMetric(kBootIdNameHash, value);
  return *this;
}

std::string UsbSessionEvent::GetBootIdForTest() const {
  return GetHmacMetricForTest(kBootIdNameHash);
}

UsbSessionEvent& UsbSessionEvent::SetSystemTime(const int64_t value) {
  AddIntMetric(kSystemTimeNameHash, value);
  return *this;
}

int64_t UsbSessionEvent::GetSystemTimeForTest() const {
  return GetIntMetricForTest(kSystemTimeNameHash);
}

UsbSessionEvent& UsbSessionEvent::SetAction(const int64_t value) {
  AddIntMetric(kActionNameHash, value);
  return *this;
}

int64_t UsbSessionEvent::GetActionForTest() const {
  return GetIntMetricForTest(kActionNameHash);
}

UsbSessionEvent& UsbSessionEvent::SetDeviceNum(const int64_t value) {
  AddIntMetric(kDeviceNumNameHash, value);
  return *this;
}

int64_t UsbSessionEvent::GetDeviceNumForTest() const {
  return GetIntMetricForTest(kDeviceNumNameHash);
}

UsbSessionEvent& UsbSessionEvent::SetBusNum(const int64_t value) {
  AddIntMetric(kBusNumNameHash, value);
  return *this;
}

int64_t UsbSessionEvent::GetBusNumForTest() const {
  return GetIntMetricForTest(kBusNumNameHash);
}

UsbSessionEvent& UsbSessionEvent::SetDepth(const int64_t value) {
  AddIntMetric(kDepthNameHash, value);
  return *this;
}

int64_t UsbSessionEvent::GetDepthForTest() const {
  return GetIntMetricForTest(kDepthNameHash);
}

UsbSessionEvent& UsbSessionEvent::SetVendorId(const int64_t value) {
  AddIntMetric(kVendorIdNameHash, value);
  return *this;
}

int64_t UsbSessionEvent::GetVendorIdForTest() const {
  return GetIntMetricForTest(kVendorIdNameHash);
}

UsbSessionEvent& UsbSessionEvent::SetProductId(const int64_t value) {
  AddIntMetric(kProductIdNameHash, value);
  return *this;
}

int64_t UsbSessionEvent::GetProductIdForTest() const {
  return GetIntMetricForTest(kProductIdNameHash);
}

}  // namespace usb_session

namespace usb_error {

HubError::HubError() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
HubError::~HubError() = default;
HubError& HubError::SetErrorCode(const int64_t value) {
  AddIntMetric(kErrorCodeNameHash, value);
  return *this;
}

int64_t HubError::GetErrorCodeForTest() const {
  return GetIntMetricForTest(kErrorCodeNameHash);
}

HubError& HubError::SetDeviceClass(const int64_t value) {
  AddIntMetric(kDeviceClassNameHash, value);
  return *this;
}

int64_t HubError::GetDeviceClassForTest() const {
  return GetIntMetricForTest(kDeviceClassNameHash);
}

HubError& HubError::SetVendorId(const int64_t value) {
  AddIntMetric(kVendorIdNameHash, value);
  return *this;
}

int64_t HubError::GetVendorIdForTest() const {
  return GetIntMetricForTest(kVendorIdNameHash);
}

HubError& HubError::SetProductId(const int64_t value) {
  AddIntMetric(kProductIdNameHash, value);
  return *this;
}

int64_t HubError::GetProductIdForTest() const {
  return GetIntMetricForTest(kProductIdNameHash);
}

HubError& HubError::SetDevicePath(const std::string& value) {
  AddRawStringMetric(kDevicePathNameHash, value);
  return *this;
}

std::string HubError::GetDevicePathForTest() const {
  return GetRawStringMetricForTest(kDevicePathNameHash);
}

HubError& HubError::SetConnectedDuration(const int64_t value) {
  AddIntMetric(kConnectedDurationNameHash, value);
  return *this;
}

int64_t HubError::GetConnectedDurationForTest() const {
  return GetIntMetricForTest(kConnectedDurationNameHash);
}

XhciError::XhciError() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
XhciError::~XhciError() = default;
XhciError& XhciError::SetErrorCode(const int64_t value) {
  AddIntMetric(kErrorCodeNameHash, value);
  return *this;
}

int64_t XhciError::GetErrorCodeForTest() const {
  return GetIntMetricForTest(kErrorCodeNameHash);
}

XhciError& XhciError::SetDeviceClass(const int64_t value) {
  AddIntMetric(kDeviceClassNameHash, value);
  return *this;
}

int64_t XhciError::GetDeviceClassForTest() const {
  return GetIntMetricForTest(kDeviceClassNameHash);
}

}  // namespace usb_error

namespace usb_pd_device {

UsbPdDeviceInfo::UsbPdDeviceInfo() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
UsbPdDeviceInfo::~UsbPdDeviceInfo() = default;
UsbPdDeviceInfo& UsbPdDeviceInfo::SetVendorId(const int64_t value) {
  AddIntMetric(kVendorIdNameHash, value);
  return *this;
}

int64_t UsbPdDeviceInfo::GetVendorIdForTest() const {
  return GetIntMetricForTest(kVendorIdNameHash);
}

UsbPdDeviceInfo& UsbPdDeviceInfo::SetProductId(const int64_t value) {
  AddIntMetric(kProductIdNameHash, value);
  return *this;
}

int64_t UsbPdDeviceInfo::GetProductIdForTest() const {
  return GetIntMetricForTest(kProductIdNameHash);
}

UsbPdDeviceInfo& UsbPdDeviceInfo::SetExitId(const int64_t value) {
  AddIntMetric(kExitIdNameHash, value);
  return *this;
}

int64_t UsbPdDeviceInfo::GetExitIdForTest() const {
  return GetIntMetricForTest(kExitIdNameHash);
}

UsbPdDeviceInfo& UsbPdDeviceInfo::SetSupportsPd(const int64_t value) {
  AddIntMetric(kSupportsPdNameHash, value);
  return *this;
}

int64_t UsbPdDeviceInfo::GetSupportsPdForTest() const {
  return GetIntMetricForTest(kSupportsPdNameHash);
}

UsbPdDeviceInfo& UsbPdDeviceInfo::SetSupportsUsb(const int64_t value) {
  AddIntMetric(kSupportsUsbNameHash, value);
  return *this;
}

int64_t UsbPdDeviceInfo::GetSupportsUsbForTest() const {
  return GetIntMetricForTest(kSupportsUsbNameHash);
}

UsbPdDeviceInfo& UsbPdDeviceInfo::SetSupportsDp(const int64_t value) {
  AddIntMetric(kSupportsDpNameHash, value);
  return *this;
}

int64_t UsbPdDeviceInfo::GetSupportsDpForTest() const {
  return GetIntMetricForTest(kSupportsDpNameHash);
}

UsbPdDeviceInfo& UsbPdDeviceInfo::SetSupportsTbt(const int64_t value) {
  AddIntMetric(kSupportsTbtNameHash, value);
  return *this;
}

int64_t UsbPdDeviceInfo::GetSupportsTbtForTest() const {
  return GetIntMetricForTest(kSupportsTbtNameHash);
}

UsbPdDeviceInfo& UsbPdDeviceInfo::SetSupportsUsb4(const int64_t value) {
  AddIntMetric(kSupportsUsb4NameHash, value);
  return *this;
}

int64_t UsbPdDeviceInfo::GetSupportsUsb4ForTest() const {
  return GetIntMetricForTest(kSupportsUsb4NameHash);
}

UsbPdDeviceInfo& UsbPdDeviceInfo::SetDataRole(const int64_t value) {
  AddIntMetric(kDataRoleNameHash, value);
  return *this;
}

int64_t UsbPdDeviceInfo::GetDataRoleForTest() const {
  return GetIntMetricForTest(kDataRoleNameHash);
}

UsbPdDeviceInfo& UsbPdDeviceInfo::SetPowerRole(const int64_t value) {
  AddIntMetric(kPowerRoleNameHash, value);
  return *this;
}

int64_t UsbPdDeviceInfo::GetPowerRoleForTest() const {
  return GetIntMetricForTest(kPowerRoleNameHash);
}

UsbPdDeviceInfo& UsbPdDeviceInfo::SetPartnerType(const int64_t value) {
  AddIntMetric(kPartnerTypeNameHash, value);
  return *this;
}

int64_t UsbPdDeviceInfo::GetPartnerTypeForTest() const {
  return GetIntMetricForTest(kPartnerTypeNameHash);
}

}  // namespace usb_pd_device

namespace wi_fi_chipset {

WiFiChipsetInfo::WiFiChipsetInfo() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
WiFiChipsetInfo::~WiFiChipsetInfo() = default;
WiFiChipsetInfo& WiFiChipsetInfo::SetEventVersion(const int64_t value) {
  AddIntMetric(kEventVersionNameHash, value);
  return *this;
}

int64_t WiFiChipsetInfo::GetEventVersionForTest() const {
  return GetIntMetricForTest(kEventVersionNameHash);
}

WiFiChipsetInfo& WiFiChipsetInfo::SetVendorId(const int64_t value) {
  AddIntMetric(kVendorIdNameHash, value);
  return *this;
}

int64_t WiFiChipsetInfo::GetVendorIdForTest() const {
  return GetIntMetricForTest(kVendorIdNameHash);
}

WiFiChipsetInfo& WiFiChipsetInfo::SetProductId(const int64_t value) {
  AddIntMetric(kProductIdNameHash, value);
  return *this;
}

int64_t WiFiChipsetInfo::GetProductIdForTest() const {
  return GetIntMetricForTest(kProductIdNameHash);
}

WiFiChipsetInfo& WiFiChipsetInfo::SetSubsystemId(const int64_t value) {
  AddIntMetric(kSubsystemIdNameHash, value);
  return *this;
}

int64_t WiFiChipsetInfo::GetSubsystemIdForTest() const {
  return GetIntMetricForTest(kSubsystemIdNameHash);
}

}  // namespace wi_fi_chipset

namespace wi_fi_ap {

WiFiAPInfo::WiFiAPInfo() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
WiFiAPInfo::~WiFiAPInfo() = default;
WiFiAPInfo& WiFiAPInfo::SetEventVersion(const int64_t value) {
  AddIntMetric(kEventVersionNameHash, value);
  return *this;
}

int64_t WiFiAPInfo::GetEventVersionForTest() const {
  return GetIntMetricForTest(kEventVersionNameHash);
}

WiFiAPInfo& WiFiAPInfo::SetAPOUI(const int64_t value) {
  AddIntMetric(kAPOUINameHash, value);
  return *this;
}

int64_t WiFiAPInfo::GetAPOUIForTest() const {
  return GetIntMetricForTest(kAPOUINameHash);
}

}  // namespace wi_fi_ap

namespace wi_fi {

WiFiAdapterStateChanged::WiFiAdapterStateChanged() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
WiFiAdapterStateChanged::~WiFiAdapterStateChanged() = default;
WiFiAdapterStateChanged& WiFiAdapterStateChanged::SetBootId(const std::string& value) {
  AddHmacMetric(kBootIdNameHash, value);
  return *this;
}

std::string WiFiAdapterStateChanged::GetBootIdForTest() const {
  return GetHmacMetricForTest(kBootIdNameHash);
}

WiFiAdapterStateChanged& WiFiAdapterStateChanged::SetSystemTime(const int64_t value) {
  AddIntMetric(kSystemTimeNameHash, value);
  return *this;
}

int64_t WiFiAdapterStateChanged::GetSystemTimeForTest() const {
  return GetIntMetricForTest(kSystemTimeNameHash);
}

WiFiAdapterStateChanged& WiFiAdapterStateChanged::SetEventVersion(const int64_t value) {
  AddIntMetric(kEventVersionNameHash, value);
  return *this;
}

int64_t WiFiAdapterStateChanged::GetEventVersionForTest() const {
  return GetIntMetricForTest(kEventVersionNameHash);
}

WiFiAdapterStateChanged& WiFiAdapterStateChanged::SetAdapterState(const int64_t value) {
  AddIntMetric(kAdapterStateNameHash, value);
  return *this;
}

int64_t WiFiAdapterStateChanged::GetAdapterStateForTest() const {
  return GetIntMetricForTest(kAdapterStateNameHash);
}

WiFiAdapterStateChanged& WiFiAdapterStateChanged::SetVendorId(const int64_t value) {
  AddIntMetric(kVendorIdNameHash, value);
  return *this;
}

int64_t WiFiAdapterStateChanged::GetVendorIdForTest() const {
  return GetIntMetricForTest(kVendorIdNameHash);
}

WiFiAdapterStateChanged& WiFiAdapterStateChanged::SetProductId(const int64_t value) {
  AddIntMetric(kProductIdNameHash, value);
  return *this;
}

int64_t WiFiAdapterStateChanged::GetProductIdForTest() const {
  return GetIntMetricForTest(kProductIdNameHash);
}

WiFiAdapterStateChanged& WiFiAdapterStateChanged::SetSubsystemId(const int64_t value) {
  AddIntMetric(kSubsystemIdNameHash, value);
  return *this;
}

int64_t WiFiAdapterStateChanged::GetSubsystemIdForTest() const {
  return GetIntMetricForTest(kSubsystemIdNameHash);
}

WiFiConnectionAttempt::WiFiConnectionAttempt() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
WiFiConnectionAttempt::~WiFiConnectionAttempt() = default;
WiFiConnectionAttempt& WiFiConnectionAttempt::SetBootId(const std::string& value) {
  AddHmacMetric(kBootIdNameHash, value);
  return *this;
}

std::string WiFiConnectionAttempt::GetBootIdForTest() const {
  return GetHmacMetricForTest(kBootIdNameHash);
}

WiFiConnectionAttempt& WiFiConnectionAttempt::SetSystemTime(const int64_t value) {
  AddIntMetric(kSystemTimeNameHash, value);
  return *this;
}

int64_t WiFiConnectionAttempt::GetSystemTimeForTest() const {
  return GetIntMetricForTest(kSystemTimeNameHash);
}

WiFiConnectionAttempt& WiFiConnectionAttempt::SetEventVersion(const int64_t value) {
  AddIntMetric(kEventVersionNameHash, value);
  return *this;
}

int64_t WiFiConnectionAttempt::GetEventVersionForTest() const {
  return GetIntMetricForTest(kEventVersionNameHash);
}

WiFiConnectionAttempt& WiFiConnectionAttempt::SetSessionTag(const int64_t value) {
  AddIntMetric(kSessionTagNameHash, value);
  return *this;
}

int64_t WiFiConnectionAttempt::GetSessionTagForTest() const {
  return GetIntMetricForTest(kSessionTagNameHash);
}

WiFiConnectionAttempt& WiFiConnectionAttempt::SetAttemptType(const int64_t value) {
  AddIntMetric(kAttemptTypeNameHash, value);
  return *this;
}

int64_t WiFiConnectionAttempt::GetAttemptTypeForTest() const {
  return GetIntMetricForTest(kAttemptTypeNameHash);
}

WiFiConnectionAttempt& WiFiConnectionAttempt::SetAPPhyMode(const int64_t value) {
  AddIntMetric(kAPPhyModeNameHash, value);
  return *this;
}

int64_t WiFiConnectionAttempt::GetAPPhyModeForTest() const {
  return GetIntMetricForTest(kAPPhyModeNameHash);
}

WiFiConnectionAttempt& WiFiConnectionAttempt::SetAPSecurityMode(const int64_t value) {
  AddIntMetric(kAPSecurityModeNameHash, value);
  return *this;
}

int64_t WiFiConnectionAttempt::GetAPSecurityModeForTest() const {
  return GetIntMetricForTest(kAPSecurityModeNameHash);
}

WiFiConnectionAttempt& WiFiConnectionAttempt::SetAPSecurityEAPInnerProtocol(const int64_t value) {
  AddIntMetric(kAPSecurityEAPInnerProtocolNameHash, value);
  return *this;
}

int64_t WiFiConnectionAttempt::GetAPSecurityEAPInnerProtocolForTest() const {
  return GetIntMetricForTest(kAPSecurityEAPInnerProtocolNameHash);
}

WiFiConnectionAttempt& WiFiConnectionAttempt::SetAPSecurityEAPOuterProtocol(const int64_t value) {
  AddIntMetric(kAPSecurityEAPOuterProtocolNameHash, value);
  return *this;
}

int64_t WiFiConnectionAttempt::GetAPSecurityEAPOuterProtocolForTest() const {
  return GetIntMetricForTest(kAPSecurityEAPOuterProtocolNameHash);
}

WiFiConnectionAttempt& WiFiConnectionAttempt::SetAPBand(const int64_t value) {
  AddIntMetric(kAPBandNameHash, value);
  return *this;
}

int64_t WiFiConnectionAttempt::GetAPBandForTest() const {
  return GetIntMetricForTest(kAPBandNameHash);
}

WiFiConnectionAttempt& WiFiConnectionAttempt::SetAPChannel(const int64_t value) {
  AddIntMetric(kAPChannelNameHash, value);
  return *this;
}

int64_t WiFiConnectionAttempt::GetAPChannelForTest() const {
  return GetIntMetricForTest(kAPChannelNameHash);
}

WiFiConnectionAttempt& WiFiConnectionAttempt::SetRSSI(const int64_t value) {
  AddIntMetric(kRSSINameHash, value);
  return *this;
}

int64_t WiFiConnectionAttempt::GetRSSIForTest() const {
  return GetIntMetricForTest(kRSSINameHash);
}

WiFiConnectionAttempt& WiFiConnectionAttempt::SetSSID(const std::string& value) {
  AddHmacMetric(kSSIDNameHash, value);
  return *this;
}

std::string WiFiConnectionAttempt::GetSSIDForTest() const {
  return GetHmacMetricForTest(kSSIDNameHash);
}

WiFiConnectionAttempt& WiFiConnectionAttempt::SetSSIDProvisioningMode(const int64_t value) {
  AddIntMetric(kSSIDProvisioningModeNameHash, value);
  return *this;
}

int64_t WiFiConnectionAttempt::GetSSIDProvisioningModeForTest() const {
  return GetIntMetricForTest(kSSIDProvisioningModeNameHash);
}

WiFiConnectionAttempt& WiFiConnectionAttempt::SetSSIDHidden(const int64_t value) {
  AddIntMetric(kSSIDHiddenNameHash, value);
  return *this;
}

int64_t WiFiConnectionAttempt::GetSSIDHiddenForTest() const {
  return GetIntMetricForTest(kSSIDHiddenNameHash);
}

WiFiConnectionAttempt& WiFiConnectionAttempt::SetBSSID(const std::string& value) {
  AddHmacMetric(kBSSIDNameHash, value);
  return *this;
}

std::string WiFiConnectionAttempt::GetBSSIDForTest() const {
  return GetHmacMetricForTest(kBSSIDNameHash);
}

WiFiConnectionAttempt& WiFiConnectionAttempt::SetAPOUI(const int64_t value) {
  AddIntMetric(kAPOUINameHash, value);
  return *this;
}

int64_t WiFiConnectionAttempt::GetAPOUIForTest() const {
  return GetIntMetricForTest(kAPOUINameHash);
}

WiFiConnectionAttempt& WiFiConnectionAttempt::SetAP_80211krv_NLSSupport(const int64_t value) {
  AddIntMetric(kAP_80211krv_NLSSupportNameHash, value);
  return *this;
}

int64_t WiFiConnectionAttempt::GetAP_80211krv_NLSSupportForTest() const {
  return GetIntMetricForTest(kAP_80211krv_NLSSupportNameHash);
}

WiFiConnectionAttempt& WiFiConnectionAttempt::SetAP_80211krv_OTA_FTSupport(const int64_t value) {
  AddIntMetric(kAP_80211krv_OTA_FTSupportNameHash, value);
  return *this;
}

int64_t WiFiConnectionAttempt::GetAP_80211krv_OTA_FTSupportForTest() const {
  return GetIntMetricForTest(kAP_80211krv_OTA_FTSupportNameHash);
}

WiFiConnectionAttempt& WiFiConnectionAttempt::SetAP_80211krv_OTDS_FTSupport(const int64_t value) {
  AddIntMetric(kAP_80211krv_OTDS_FTSupportNameHash, value);
  return *this;
}

int64_t WiFiConnectionAttempt::GetAP_80211krv_OTDS_FTSupportForTest() const {
  return GetIntMetricForTest(kAP_80211krv_OTDS_FTSupportNameHash);
}

WiFiConnectionAttempt& WiFiConnectionAttempt::SetAP_80211krv_DMSSupport(const int64_t value) {
  AddIntMetric(kAP_80211krv_DMSSupportNameHash, value);
  return *this;
}

int64_t WiFiConnectionAttempt::GetAP_80211krv_DMSSupportForTest() const {
  return GetIntMetricForTest(kAP_80211krv_DMSSupportNameHash);
}

WiFiConnectionAttempt& WiFiConnectionAttempt::SetAP_80211krv_BSSMaxIdleSupport(const int64_t value) {
  AddIntMetric(kAP_80211krv_BSSMaxIdleSupportNameHash, value);
  return *this;
}

int64_t WiFiConnectionAttempt::GetAP_80211krv_BSSMaxIdleSupportForTest() const {
  return GetIntMetricForTest(kAP_80211krv_BSSMaxIdleSupportNameHash);
}

WiFiConnectionAttempt& WiFiConnectionAttempt::SetAP_80211krv_BSSTMSupport(const int64_t value) {
  AddIntMetric(kAP_80211krv_BSSTMSupportNameHash, value);
  return *this;
}

int64_t WiFiConnectionAttempt::GetAP_80211krv_BSSTMSupportForTest() const {
  return GetIntMetricForTest(kAP_80211krv_BSSTMSupportNameHash);
}

WiFiConnectionAttempt& WiFiConnectionAttempt::SetAP_HS20Support(const int64_t value) {
  AddIntMetric(kAP_HS20SupportNameHash, value);
  return *this;
}

int64_t WiFiConnectionAttempt::GetAP_HS20SupportForTest() const {
  return GetIntMetricForTest(kAP_HS20SupportNameHash);
}

WiFiConnectionAttempt& WiFiConnectionAttempt::SetAP_HS20Version(const int64_t value) {
  AddIntMetric(kAP_HS20VersionNameHash, value);
  return *this;
}

int64_t WiFiConnectionAttempt::GetAP_HS20VersionForTest() const {
  return GetIntMetricForTest(kAP_HS20VersionNameHash);
}

WiFiConnectionAttempt& WiFiConnectionAttempt::SetAP_MBOSupport(const int64_t value) {
  AddIntMetric(kAP_MBOSupportNameHash, value);
  return *this;
}

int64_t WiFiConnectionAttempt::GetAP_MBOSupportForTest() const {
  return GetIntMetricForTest(kAP_MBOSupportNameHash);
}

WiFiConnectionAttemptResult::WiFiConnectionAttemptResult() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
WiFiConnectionAttemptResult::~WiFiConnectionAttemptResult() = default;
WiFiConnectionAttemptResult& WiFiConnectionAttemptResult::SetBootId(const std::string& value) {
  AddHmacMetric(kBootIdNameHash, value);
  return *this;
}

std::string WiFiConnectionAttemptResult::GetBootIdForTest() const {
  return GetHmacMetricForTest(kBootIdNameHash);
}

WiFiConnectionAttemptResult& WiFiConnectionAttemptResult::SetSystemTime(const int64_t value) {
  AddIntMetric(kSystemTimeNameHash, value);
  return *this;
}

int64_t WiFiConnectionAttemptResult::GetSystemTimeForTest() const {
  return GetIntMetricForTest(kSystemTimeNameHash);
}

WiFiConnectionAttemptResult& WiFiConnectionAttemptResult::SetEventVersion(const int64_t value) {
  AddIntMetric(kEventVersionNameHash, value);
  return *this;
}

int64_t WiFiConnectionAttemptResult::GetEventVersionForTest() const {
  return GetIntMetricForTest(kEventVersionNameHash);
}

WiFiConnectionAttemptResult& WiFiConnectionAttemptResult::SetSessionTag(const int64_t value) {
  AddIntMetric(kSessionTagNameHash, value);
  return *this;
}

int64_t WiFiConnectionAttemptResult::GetSessionTagForTest() const {
  return GetIntMetricForTest(kSessionTagNameHash);
}

WiFiConnectionAttemptResult& WiFiConnectionAttemptResult::SetResultCode(const int64_t value) {
  AddIntMetric(kResultCodeNameHash, value);
  return *this;
}

int64_t WiFiConnectionAttemptResult::GetResultCodeForTest() const {
  return GetIntMetricForTest(kResultCodeNameHash);
}

WiFiIPConnectivityStatus::WiFiIPConnectivityStatus() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
WiFiIPConnectivityStatus::~WiFiIPConnectivityStatus() = default;
WiFiIPConnectivityStatus& WiFiIPConnectivityStatus::SetBootId(const std::string& value) {
  AddHmacMetric(kBootIdNameHash, value);
  return *this;
}

std::string WiFiIPConnectivityStatus::GetBootIdForTest() const {
  return GetHmacMetricForTest(kBootIdNameHash);
}

WiFiIPConnectivityStatus& WiFiIPConnectivityStatus::SetSystemTime(const int64_t value) {
  AddIntMetric(kSystemTimeNameHash, value);
  return *this;
}

int64_t WiFiIPConnectivityStatus::GetSystemTimeForTest() const {
  return GetIntMetricForTest(kSystemTimeNameHash);
}

WiFiIPConnectivityStatus& WiFiIPConnectivityStatus::SetEventVersion(const int64_t value) {
  AddIntMetric(kEventVersionNameHash, value);
  return *this;
}

int64_t WiFiIPConnectivityStatus::GetEventVersionForTest() const {
  return GetIntMetricForTest(kEventVersionNameHash);
}

WiFiIPConnectivityStatus& WiFiIPConnectivityStatus::SetIPConnectivityStatus(const int64_t value) {
  AddIntMetric(kIPConnectivityStatusNameHash, value);
  return *this;
}

int64_t WiFiIPConnectivityStatus::GetIPConnectivityStatusForTest() const {
  return GetIntMetricForTest(kIPConnectivityStatusNameHash);
}

WiFiIPConnectivityStatus& WiFiIPConnectivityStatus::SetIPConnectivityType(const int64_t value) {
  AddIntMetric(kIPConnectivityTypeNameHash, value);
  return *this;
}

int64_t WiFiIPConnectivityStatus::GetIPConnectivityTypeForTest() const {
  return GetIntMetricForTest(kIPConnectivityTypeNameHash);
}

WiFiPortalDetectionStatus::WiFiPortalDetectionStatus() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
WiFiPortalDetectionStatus::~WiFiPortalDetectionStatus() = default;
WiFiPortalDetectionStatus& WiFiPortalDetectionStatus::SetBootId(const std::string& value) {
  AddHmacMetric(kBootIdNameHash, value);
  return *this;
}

std::string WiFiPortalDetectionStatus::GetBootIdForTest() const {
  return GetHmacMetricForTest(kBootIdNameHash);
}

WiFiPortalDetectionStatus& WiFiPortalDetectionStatus::SetSystemTime(const int64_t value) {
  AddIntMetric(kSystemTimeNameHash, value);
  return *this;
}

int64_t WiFiPortalDetectionStatus::GetSystemTimeForTest() const {
  return GetIntMetricForTest(kSystemTimeNameHash);
}

WiFiPortalDetectionStatus& WiFiPortalDetectionStatus::SetEventVersion(const int64_t value) {
  AddIntMetric(kEventVersionNameHash, value);
  return *this;
}

int64_t WiFiPortalDetectionStatus::GetEventVersionForTest() const {
  return GetIntMetricForTest(kEventVersionNameHash);
}

WiFiPortalDetectionStatus& WiFiPortalDetectionStatus::SetPortalDetectionStatus(const int64_t value) {
  AddIntMetric(kPortalDetectionStatusNameHash, value);
  return *this;
}

int64_t WiFiPortalDetectionStatus::GetPortalDetectionStatusForTest() const {
  return GetIntMetricForTest(kPortalDetectionStatusNameHash);
}

WiFiConnectionEnd::WiFiConnectionEnd() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
WiFiConnectionEnd::~WiFiConnectionEnd() = default;
WiFiConnectionEnd& WiFiConnectionEnd::SetBootId(const std::string& value) {
  AddHmacMetric(kBootIdNameHash, value);
  return *this;
}

std::string WiFiConnectionEnd::GetBootIdForTest() const {
  return GetHmacMetricForTest(kBootIdNameHash);
}

WiFiConnectionEnd& WiFiConnectionEnd::SetSystemTime(const int64_t value) {
  AddIntMetric(kSystemTimeNameHash, value);
  return *this;
}

int64_t WiFiConnectionEnd::GetSystemTimeForTest() const {
  return GetIntMetricForTest(kSystemTimeNameHash);
}

WiFiConnectionEnd& WiFiConnectionEnd::SetEventVersion(const int64_t value) {
  AddIntMetric(kEventVersionNameHash, value);
  return *this;
}

int64_t WiFiConnectionEnd::GetEventVersionForTest() const {
  return GetIntMetricForTest(kEventVersionNameHash);
}

WiFiConnectionEnd& WiFiConnectionEnd::SetSessionTag(const int64_t value) {
  AddIntMetric(kSessionTagNameHash, value);
  return *this;
}

int64_t WiFiConnectionEnd::GetSessionTagForTest() const {
  return GetIntMetricForTest(kSessionTagNameHash);
}

WiFiConnectionEnd& WiFiConnectionEnd::SetDisconnectionType(const int64_t value) {
  AddIntMetric(kDisconnectionTypeNameHash, value);
  return *this;
}

int64_t WiFiConnectionEnd::GetDisconnectionTypeForTest() const {
  return GetIntMetricForTest(kDisconnectionTypeNameHash);
}

WiFiConnectionEnd& WiFiConnectionEnd::SetDisconnectionReasonCode(const int64_t value) {
  AddIntMetric(kDisconnectionReasonCodeNameHash, value);
  return *this;
}

int64_t WiFiConnectionEnd::GetDisconnectionReasonCodeForTest() const {
  return GetIntMetricForTest(kDisconnectionReasonCodeNameHash);
}

WiFiLinkQualityTrigger::WiFiLinkQualityTrigger() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
WiFiLinkQualityTrigger::~WiFiLinkQualityTrigger() = default;
WiFiLinkQualityTrigger& WiFiLinkQualityTrigger::SetBootId(const std::string& value) {
  AddHmacMetric(kBootIdNameHash, value);
  return *this;
}

std::string WiFiLinkQualityTrigger::GetBootIdForTest() const {
  return GetHmacMetricForTest(kBootIdNameHash);
}

WiFiLinkQualityTrigger& WiFiLinkQualityTrigger::SetSystemTime(const int64_t value) {
  AddIntMetric(kSystemTimeNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityTrigger::GetSystemTimeForTest() const {
  return GetIntMetricForTest(kSystemTimeNameHash);
}

WiFiLinkQualityTrigger& WiFiLinkQualityTrigger::SetEventVersion(const int64_t value) {
  AddIntMetric(kEventVersionNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityTrigger::GetEventVersionForTest() const {
  return GetIntMetricForTest(kEventVersionNameHash);
}

WiFiLinkQualityTrigger& WiFiLinkQualityTrigger::SetSessionTag(const int64_t value) {
  AddIntMetric(kSessionTagNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityTrigger::GetSessionTagForTest() const {
  return GetIntMetricForTest(kSessionTagNameHash);
}

WiFiLinkQualityTrigger& WiFiLinkQualityTrigger::SetType(const int64_t value) {
  AddIntMetric(kTypeNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityTrigger::GetTypeForTest() const {
  return GetIntMetricForTest(kTypeNameHash);
}

WiFiLinkQualityReport::WiFiLinkQualityReport() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
WiFiLinkQualityReport::~WiFiLinkQualityReport() = default;
WiFiLinkQualityReport& WiFiLinkQualityReport::SetBootId(const std::string& value) {
  AddHmacMetric(kBootIdNameHash, value);
  return *this;
}

std::string WiFiLinkQualityReport::GetBootIdForTest() const {
  return GetHmacMetricForTest(kBootIdNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetSystemTime(const int64_t value) {
  AddIntMetric(kSystemTimeNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetSystemTimeForTest() const {
  return GetIntMetricForTest(kSystemTimeNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetEventVersion(const int64_t value) {
  AddIntMetric(kEventVersionNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetEventVersionForTest() const {
  return GetIntMetricForTest(kEventVersionNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetSessionTag(const int64_t value) {
  AddIntMetric(kSessionTagNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetSessionTagForTest() const {
  return GetIntMetricForTest(kSessionTagNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetRXPackets(const int64_t value) {
  AddIntMetric(kRXPacketsNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetRXPacketsForTest() const {
  return GetIntMetricForTest(kRXPacketsNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetRXBytes(const int64_t value) {
  AddIntMetric(kRXBytesNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetRXBytesForTest() const {
  return GetIntMetricForTest(kRXBytesNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetTXPackets(const int64_t value) {
  AddIntMetric(kTXPacketsNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetTXPacketsForTest() const {
  return GetIntMetricForTest(kTXPacketsNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetTXBytes(const int64_t value) {
  AddIntMetric(kTXBytesNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetTXBytesForTest() const {
  return GetIntMetricForTest(kTXBytesNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetTXRetries(const int64_t value) {
  AddIntMetric(kTXRetriesNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetTXRetriesForTest() const {
  return GetIntMetricForTest(kTXRetriesNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetTXFailures(const int64_t value) {
  AddIntMetric(kTXFailuresNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetTXFailuresForTest() const {
  return GetIntMetricForTest(kTXFailuresNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetRXDrops(const int64_t value) {
  AddIntMetric(kRXDropsNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetRXDropsForTest() const {
  return GetIntMetricForTest(kRXDropsNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetChain0Signal(const int64_t value) {
  AddIntMetric(kChain0SignalNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetChain0SignalForTest() const {
  return GetIntMetricForTest(kChain0SignalNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetChain0SignalAvg(const int64_t value) {
  AddIntMetric(kChain0SignalAvgNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetChain0SignalAvgForTest() const {
  return GetIntMetricForTest(kChain0SignalAvgNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetChain1Signal(const int64_t value) {
  AddIntMetric(kChain1SignalNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetChain1SignalForTest() const {
  return GetIntMetricForTest(kChain1SignalNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetChain1SignalAvg(const int64_t value) {
  AddIntMetric(kChain1SignalAvgNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetChain1SignalAvgForTest() const {
  return GetIntMetricForTest(kChain1SignalAvgNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetBeaconSignalAvg(const int64_t value) {
  AddIntMetric(kBeaconSignalAvgNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetBeaconSignalAvgForTest() const {
  return GetIntMetricForTest(kBeaconSignalAvgNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetBeaconsReceived(const int64_t value) {
  AddIntMetric(kBeaconsReceivedNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetBeaconsReceivedForTest() const {
  return GetIntMetricForTest(kBeaconsReceivedNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetBeaconsLost(const int64_t value) {
  AddIntMetric(kBeaconsLostNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetBeaconsLostForTest() const {
  return GetIntMetricForTest(kBeaconsLostNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetExpectedThroughput(const int64_t value) {
  AddIntMetric(kExpectedThroughputNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetExpectedThroughputForTest() const {
  return GetIntMetricForTest(kExpectedThroughputNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetRXRate(const int64_t value) {
  AddIntMetric(kRXRateNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetRXRateForTest() const {
  return GetIntMetricForTest(kRXRateNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetRXMCS(const int64_t value) {
  AddIntMetric(kRXMCSNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetRXMCSForTest() const {
  return GetIntMetricForTest(kRXMCSNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetRXChannelWidth(const int64_t value) {
  AddIntMetric(kRXChannelWidthNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetRXChannelWidthForTest() const {
  return GetIntMetricForTest(kRXChannelWidthNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetRXMode(const int64_t value) {
  AddIntMetric(kRXModeNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetRXModeForTest() const {
  return GetIntMetricForTest(kRXModeNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetRXGuardInterval(const int64_t value) {
  AddIntMetric(kRXGuardIntervalNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetRXGuardIntervalForTest() const {
  return GetIntMetricForTest(kRXGuardIntervalNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetRXNSS(const int64_t value) {
  AddIntMetric(kRXNSSNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetRXNSSForTest() const {
  return GetIntMetricForTest(kRXNSSNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetRXDCM(const int64_t value) {
  AddIntMetric(kRXDCMNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetRXDCMForTest() const {
  return GetIntMetricForTest(kRXDCMNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetTXRate(const int64_t value) {
  AddIntMetric(kTXRateNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetTXRateForTest() const {
  return GetIntMetricForTest(kTXRateNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetTXMCS(const int64_t value) {
  AddIntMetric(kTXMCSNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetTXMCSForTest() const {
  return GetIntMetricForTest(kTXMCSNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetTXChannelWidth(const int64_t value) {
  AddIntMetric(kTXChannelWidthNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetTXChannelWidthForTest() const {
  return GetIntMetricForTest(kTXChannelWidthNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetTXMode(const int64_t value) {
  AddIntMetric(kTXModeNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetTXModeForTest() const {
  return GetIntMetricForTest(kTXModeNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetTXGuardInterval(const int64_t value) {
  AddIntMetric(kTXGuardIntervalNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetTXGuardIntervalForTest() const {
  return GetIntMetricForTest(kTXGuardIntervalNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetTXNSS(const int64_t value) {
  AddIntMetric(kTXNSSNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetTXNSSForTest() const {
  return GetIntMetricForTest(kTXNSSNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetTXDCM(const int64_t value) {
  AddIntMetric(kTXDCMNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetTXDCMForTest() const {
  return GetIntMetricForTest(kTXDCMNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetBTEnabled(const int64_t value) {
  AddIntMetric(kBTEnabledNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetBTEnabledForTest() const {
  return GetIntMetricForTest(kBTEnabledNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetBTStack(const int64_t value) {
  AddIntMetric(kBTStackNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetBTStackForTest() const {
  return GetIntMetricForTest(kBTStackNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetBTHFP(const int64_t value) {
  AddIntMetric(kBTHFPNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetBTHFPForTest() const {
  return GetIntMetricForTest(kBTHFPNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetBTA2DP(const int64_t value) {
  AddIntMetric(kBTA2DPNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetBTA2DPForTest() const {
  return GetIntMetricForTest(kBTA2DPNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetBTActivelyScanning(const int64_t value) {
  AddIntMetric(kBTActivelyScanningNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetBTActivelyScanningForTest() const {
  return GetIntMetricForTest(kBTActivelyScanningNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetFCSErrors(const int64_t value) {
  AddIntMetric(kFCSErrorsNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetFCSErrorsForTest() const {
  return GetIntMetricForTest(kFCSErrorsNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetRXMPDUS(const int64_t value) {
  AddIntMetric(kRXMPDUSNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetRXMPDUSForTest() const {
  return GetIntMetricForTest(kRXMPDUSNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetInactiveTime(const int64_t value) {
  AddIntMetric(kInactiveTimeNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetInactiveTimeForTest() const {
  return GetIntMetricForTest(kInactiveTimeNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetNoise(const int64_t value) {
  AddIntMetric(kNoiseNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetNoiseForTest() const {
  return GetIntMetricForTest(kNoiseNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetAckSignalAverage(const int64_t value) {
  AddIntMetric(kAckSignalAverageNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetAckSignalAverageForTest() const {
  return GetIntMetricForTest(kAckSignalAverageNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetLastAckSignal(const int64_t value) {
  AddIntMetric(kLastAckSignalNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetLastAckSignalForTest() const {
  return GetIntMetricForTest(kLastAckSignalNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetSignal(const int64_t value) {
  AddIntMetric(kSignalNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetSignalForTest() const {
  return GetIntMetricForTest(kSignalNameHash);
}

WiFiLinkQualityReport& WiFiLinkQualityReport::SetSignalAverage(const int64_t value) {
  AddIntMetric(kSignalAverageNameHash, value);
  return *this;
}

int64_t WiFiLinkQualityReport::GetSignalAverageForTest() const {
  return GetIntMetricForTest(kSignalAverageNameHash);
}

}  // namespace wi_fi

namespace audio_peripheral_info {

Info::Info() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
Info::~Info() = default;
Info& Info::SetType(const int64_t value) {
  AddIntMetric(kTypeNameHash, value);
  return *this;
}

int64_t Info::GetTypeForTest() const {
  return GetIntMetricForTest(kTypeNameHash);
}

Info& Info::SetVendorId(const int64_t value) {
  AddIntMetric(kVendorIdNameHash, value);
  return *this;
}

int64_t Info::GetVendorIdForTest() const {
  return GetIntMetricForTest(kVendorIdNameHash);
}

Info& Info::SetProductId(const int64_t value) {
  AddIntMetric(kProductIdNameHash, value);
  return *this;
}

int64_t Info::GetProductIdForTest() const {
  return GetIntMetricForTest(kProductIdNameHash);
}

}  // namespace audio_peripheral_info

namespace audio_peripheral {

Close::Close() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
Close::~Close() = default;
Close& Close::SetType(const int64_t value) {
  AddIntMetric(kTypeNameHash, value);
  return *this;
}

int64_t Close::GetTypeForTest() const {
  return GetIntMetricForTest(kTypeNameHash);
}

Close& Close::SetVendorId(const int64_t value) {
  AddIntMetric(kVendorIdNameHash, value);
  return *this;
}

int64_t Close::GetVendorIdForTest() const {
  return GetIntMetricForTest(kVendorIdNameHash);
}

Close& Close::SetProductId(const int64_t value) {
  AddIntMetric(kProductIdNameHash, value);
  return *this;
}

int64_t Close::GetProductIdForTest() const {
  return GetIntMetricForTest(kProductIdNameHash);
}

Close& Close::SetDeviceRuntime(const int64_t value) {
  AddIntMetric(kDeviceRuntimeNameHash, value);
  return *this;
}

int64_t Close::GetDeviceRuntimeForTest() const {
  return GetIntMetricForTest(kDeviceRuntimeNameHash);
}

Close& Close::SetSamplingRate(const int64_t value) {
  AddIntMetric(kSamplingRateNameHash, value);
  return *this;
}

int64_t Close::GetSamplingRateForTest() const {
  return GetIntMetricForTest(kSamplingRateNameHash);
}

Close& Close::SetChannel(const int64_t value) {
  AddIntMetric(kChannelNameHash, value);
  return *this;
}

int64_t Close::GetChannelForTest() const {
  return GetIntMetricForTest(kChannelNameHash);
}

Close& Close::SetPCMFormat(const int64_t value) {
  AddIntMetric(kPCMFormatNameHash, value);
  return *this;
}

int64_t Close::GetPCMFormatForTest() const {
  return GetIntMetricForTest(kPCMFormatNameHash);
}

}  // namespace audio_peripheral

namespace test_project_one {

TestEventOne::TestEventOne() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
TestEventOne::~TestEventOne() = default;
TestEventOne& TestEventOne::SetTestMetricOne(const std::string& value) {
  AddHmacMetric(kTestMetricOneNameHash, value);
  return *this;
}

std::string TestEventOne::GetTestMetricOneForTest() const {
  return GetHmacMetricForTest(kTestMetricOneNameHash);
}

TestEventOne& TestEventOne::SetTestMetricTwo(const int64_t value) {
  AddIntMetric(kTestMetricTwoNameHash, value);
  return *this;
}

int64_t TestEventOne::GetTestMetricTwoForTest() const {
  return GetIntMetricForTest(kTestMetricTwoNameHash);
}

TestEventOne& TestEventOne::SetTestMetricThree(const double value) {
  AddDoubleMetric(kTestMetricThreeNameHash, value);
  return *this;
}

double TestEventOne::GetTestMetricThreeForTest() const {
  return GetDoubleMetricForTest(kTestMetricThreeNameHash);
}

TestEventTwo::TestEventTwo() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
TestEventTwo::~TestEventTwo() = default;
TestEventTwo& TestEventTwo::SetTestMetricThree(const int64_t value) {
  AddIntMetric(kTestMetricThreeNameHash, value);
  return *this;
}

int64_t TestEventTwo::GetTestMetricThreeForTest() const {
  return GetIntMetricForTest(kTestMetricThreeNameHash);
}

}  // namespace test_project_one

namespace test_project_two {

TestEventThree::TestEventThree() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
TestEventThree::~TestEventThree() = default;
TestEventThree& TestEventThree::SetTestMetricFour(const std::string& value) {
  AddHmacMetric(kTestMetricFourNameHash, value);
  return *this;
}

std::string TestEventThree::GetTestMetricFourForTest() const {
  return GetHmacMetricForTest(kTestMetricFourNameHash);
}

}  // namespace test_project_two

namespace test_project_three {

TestEventFour::TestEventFour() :
  ::metrics::structured::EventBase(kEventNameHash, kProjectNameHash, kIdType, kEventType) {}
TestEventFour::~TestEventFour() = default;
TestEventFour& TestEventFour::SetTestMetricFive(const std::vector<int64_t>& value) {
  AddIntArrayMetric(kTestMetricFiveNameHash, value, TestEventFour::GetTestMetricFiveMaxLength());
  return *this;
}

std::vector<int64_t> TestEventFour::GetTestMetricFiveForTest() const {
  return GetIntArrayMetricForTest(kTestMetricFiveNameHash);
}

}  // namespace test_project_three


}  // namespace events
}  // namespace structured
}  // namespace metrics