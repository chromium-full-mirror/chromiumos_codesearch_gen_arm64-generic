// Generated from gen_events.py. DO NOT EDIT!
// source: structured.xml

#ifndef METRICS_STRUCTURED_STRUCTURED_EVENTS_H
#define METRICS_STRUCTURED_STRUCTURED_EVENTS_H

#include <cstdint>
#include <string>

#include <brillo/brillo_export.h>

#include "metrics/structured/event_base.h"

namespace metrics {
namespace structured {
namespace events {

constexpr uint64_t kProjectNameHashes[] = {UINT64_C(9074739597929991885), UINT64_C(11181229631788078243), UINT64_C(1745381000935843040), UINT64_C(8206859287963243715), UINT64_C(11294265225635075664), UINT64_C(16881314472396226433), UINT64_C(10860358748803291132), UINT64_C(5876808001962504629), UINT64_C(17922303533051575891), UINT64_C(1370722622176744014), UINT64_C(6962789877417678651), UINT64_C(4320592646346933548), UINT64_C(7302676440391025918), UINT64_C(4690103929823698613), UINT64_C(9675127341789951965)};

namespace bluetooth {

class BRILLO_EXPORT BluetoothAdapterStateChanged final : public ::metrics::structured::EventBase {
 public:
  BluetoothAdapterStateChanged();
  ~BluetoothAdapterStateChanged() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(959829856916771459);
  static constexpr uint64_t kProjectNameHash = UINT64_C(9074739597929991885);
  static constexpr IdType kIdType = IdType::kProjectId;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kBootIdNameHash = UINT64_C(9983133050293312198);
  BluetoothAdapterStateChanged& SetBootId(const std::string& value);
  std::string GetBootIdForTest() const;

  static constexpr uint64_t kSystemTimeNameHash = UINT64_C(5430963162341175395);
  BluetoothAdapterStateChanged& SetSystemTime(const int64_t value);
  int64_t GetSystemTimeForTest() const;

  static constexpr uint64_t kIsFlossNameHash = UINT64_C(15868727231156599609);
  BluetoothAdapterStateChanged& SetIsFloss(const int64_t value);
  int64_t GetIsFlossForTest() const;

  static constexpr uint64_t kAdapterStateNameHash = UINT64_C(12219887874367467564);
  BluetoothAdapterStateChanged& SetAdapterState(const int64_t value);
  int64_t GetAdapterStateForTest() const;

};

class BRILLO_EXPORT BluetoothPairingStateChanged final : public ::metrics::structured::EventBase {
 public:
  BluetoothPairingStateChanged();
  ~BluetoothPairingStateChanged() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(11839023048095184048);
  static constexpr uint64_t kProjectNameHash = UINT64_C(9074739597929991885);
  static constexpr IdType kIdType = IdType::kProjectId;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kBootIdNameHash = UINT64_C(9983133050293312198);
  BluetoothPairingStateChanged& SetBootId(const std::string& value);
  std::string GetBootIdForTest() const;

  static constexpr uint64_t kSystemTimeNameHash = UINT64_C(5430963162341175395);
  BluetoothPairingStateChanged& SetSystemTime(const int64_t value);
  int64_t GetSystemTimeForTest() const;

  static constexpr uint64_t kDeviceIdNameHash = UINT64_C(14998742047592455339);
  BluetoothPairingStateChanged& SetDeviceId(const std::string& value);
  std::string GetDeviceIdForTest() const;

  static constexpr uint64_t kDeviceTypeNameHash = UINT64_C(7795620498098931292);
  BluetoothPairingStateChanged& SetDeviceType(const int64_t value);
  int64_t GetDeviceTypeForTest() const;

  static constexpr uint64_t kPairingStateNameHash = UINT64_C(10324313318937084101);
  BluetoothPairingStateChanged& SetPairingState(const int64_t value);
  int64_t GetPairingStateForTest() const;

};

class BRILLO_EXPORT BluetoothAclConnectionStateChanged final : public ::metrics::structured::EventBase {
 public:
  BluetoothAclConnectionStateChanged();
  ~BluetoothAclConnectionStateChanged() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(1880220404408566268);
  static constexpr uint64_t kProjectNameHash = UINT64_C(9074739597929991885);
  static constexpr IdType kIdType = IdType::kProjectId;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kBootIdNameHash = UINT64_C(9983133050293312198);
  BluetoothAclConnectionStateChanged& SetBootId(const std::string& value);
  std::string GetBootIdForTest() const;

  static constexpr uint64_t kSystemTimeNameHash = UINT64_C(5430963162341175395);
  BluetoothAclConnectionStateChanged& SetSystemTime(const int64_t value);
  int64_t GetSystemTimeForTest() const;

  static constexpr uint64_t kIsFlossNameHash = UINT64_C(15868727231156599609);
  BluetoothAclConnectionStateChanged& SetIsFloss(const int64_t value);
  int64_t GetIsFlossForTest() const;

  static constexpr uint64_t kDeviceIdNameHash = UINT64_C(14998742047592455339);
  BluetoothAclConnectionStateChanged& SetDeviceId(const std::string& value);
  std::string GetDeviceIdForTest() const;

  static constexpr uint64_t kDeviceTypeNameHash = UINT64_C(7795620498098931292);
  BluetoothAclConnectionStateChanged& SetDeviceType(const int64_t value);
  int64_t GetDeviceTypeForTest() const;

  static constexpr uint64_t kConnectionDirectionNameHash = UINT64_C(10325946006427534911);
  BluetoothAclConnectionStateChanged& SetConnectionDirection(const int64_t value);
  int64_t GetConnectionDirectionForTest() const;

  static constexpr uint64_t kConnectionInitiatorNameHash = UINT64_C(3855198013004374807);
  BluetoothAclConnectionStateChanged& SetConnectionInitiator(const int64_t value);
  int64_t GetConnectionInitiatorForTest() const;

  static constexpr uint64_t kStateChangeTypeNameHash = UINT64_C(7769237458221075087);
  BluetoothAclConnectionStateChanged& SetStateChangeType(const int64_t value);
  int64_t GetStateChangeTypeForTest() const;

  static constexpr uint64_t kAclConnectionStateNameHash = UINT64_C(927065894624438386);
  BluetoothAclConnectionStateChanged& SetAclConnectionState(const int64_t value);
  int64_t GetAclConnectionStateForTest() const;

};

class BRILLO_EXPORT BluetoothProfileConnectionStateChanged final : public ::metrics::structured::EventBase {
 public:
  BluetoothProfileConnectionStateChanged();
  ~BluetoothProfileConnectionStateChanged() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(7217682640379679663);
  static constexpr uint64_t kProjectNameHash = UINT64_C(9074739597929991885);
  static constexpr IdType kIdType = IdType::kProjectId;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kBootIdNameHash = UINT64_C(9983133050293312198);
  BluetoothProfileConnectionStateChanged& SetBootId(const std::string& value);
  std::string GetBootIdForTest() const;

  static constexpr uint64_t kSystemTimeNameHash = UINT64_C(5430963162341175395);
  BluetoothProfileConnectionStateChanged& SetSystemTime(const int64_t value);
  int64_t GetSystemTimeForTest() const;

  static constexpr uint64_t kDeviceIdNameHash = UINT64_C(14998742047592455339);
  BluetoothProfileConnectionStateChanged& SetDeviceId(const std::string& value);
  std::string GetDeviceIdForTest() const;

  static constexpr uint64_t kStateChangeTypeNameHash = UINT64_C(7769237458221075087);
  BluetoothProfileConnectionStateChanged& SetStateChangeType(const int64_t value);
  int64_t GetStateChangeTypeForTest() const;

  static constexpr uint64_t kProfileNameHash = UINT64_C(14765504761742342519);
  BluetoothProfileConnectionStateChanged& SetProfile(const int64_t value);
  int64_t GetProfileForTest() const;

  static constexpr uint64_t kProfileConnectionStateNameHash = UINT64_C(3087232370221097682);
  BluetoothProfileConnectionStateChanged& SetProfileConnectionState(const int64_t value);
  int64_t GetProfileConnectionStateForTest() const;

};

class BRILLO_EXPORT BluetoothDeviceInfoReport final : public ::metrics::structured::EventBase {
 public:
  BluetoothDeviceInfoReport();
  ~BluetoothDeviceInfoReport() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(1506471670382892394);
  static constexpr uint64_t kProjectNameHash = UINT64_C(9074739597929991885);
  static constexpr IdType kIdType = IdType::kProjectId;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kBootIdNameHash = UINT64_C(9983133050293312198);
  BluetoothDeviceInfoReport& SetBootId(const std::string& value);
  std::string GetBootIdForTest() const;

  static constexpr uint64_t kSystemTimeNameHash = UINT64_C(5430963162341175395);
  BluetoothDeviceInfoReport& SetSystemTime(const int64_t value);
  int64_t GetSystemTimeForTest() const;

  static constexpr uint64_t kDeviceIdNameHash = UINT64_C(14998742047592455339);
  BluetoothDeviceInfoReport& SetDeviceId(const std::string& value);
  std::string GetDeviceIdForTest() const;

  static constexpr uint64_t kDeviceTypeNameHash = UINT64_C(7795620498098931292);
  BluetoothDeviceInfoReport& SetDeviceType(const int64_t value);
  int64_t GetDeviceTypeForTest() const;

  static constexpr uint64_t kDeviceClassNameHash = UINT64_C(4411699667986879574);
  BluetoothDeviceInfoReport& SetDeviceClass(const int64_t value);
  int64_t GetDeviceClassForTest() const;

  static constexpr uint64_t kDeviceCategoryNameHash = UINT64_C(9022598035322877834);
  BluetoothDeviceInfoReport& SetDeviceCategory(const int64_t value);
  int64_t GetDeviceCategoryForTest() const;

  static constexpr uint64_t kVendorIdNameHash = UINT64_C(7982341394845147735);
  BluetoothDeviceInfoReport& SetVendorId(const int64_t value);
  int64_t GetVendorIdForTest() const;

  static constexpr uint64_t kVendorIdSourceNameHash = UINT64_C(11271343156353958088);
  BluetoothDeviceInfoReport& SetVendorIdSource(const int64_t value);
  int64_t GetVendorIdSourceForTest() const;

  static constexpr uint64_t kProductIdNameHash = UINT64_C(3765840483194334735);
  BluetoothDeviceInfoReport& SetProductId(const int64_t value);
  int64_t GetProductIdForTest() const;

  static constexpr uint64_t kProductVersionNameHash = UINT64_C(13046660159880260301);
  BluetoothDeviceInfoReport& SetProductVersion(const int64_t value);
  int64_t GetProductVersionForTest() const;

};

class BRILLO_EXPORT BluetoothAudioQualityReport final : public ::metrics::structured::EventBase {
 public:
  BluetoothAudioQualityReport();
  ~BluetoothAudioQualityReport() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(1658296165039992926);
  static constexpr uint64_t kProjectNameHash = UINT64_C(9074739597929991885);
  static constexpr IdType kIdType = IdType::kProjectId;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kBootIdNameHash = UINT64_C(9983133050293312198);
  BluetoothAudioQualityReport& SetBootId(const std::string& value);
  std::string GetBootIdForTest() const;

  static constexpr uint64_t kSystemTimeNameHash = UINT64_C(5430963162341175395);
  BluetoothAudioQualityReport& SetSystemTime(const int64_t value);
  int64_t GetSystemTimeForTest() const;

  static constexpr uint64_t kDeviceIdNameHash = UINT64_C(14998742047592455339);
  BluetoothAudioQualityReport& SetDeviceId(const std::string& value);
  std::string GetDeviceIdForTest() const;

  static constexpr uint64_t kProfileNameHash = UINT64_C(14765504761742342519);
  BluetoothAudioQualityReport& SetProfile(const int64_t value);
  int64_t GetProfileForTest() const;

  static constexpr uint64_t kQualityTypeNameHash = UINT64_C(17628057088911476486);
  BluetoothAudioQualityReport& SetQualityType(const int64_t value);
  int64_t GetQualityTypeForTest() const;

  static constexpr uint64_t kAverageNameHash = UINT64_C(12792884953155676512);
  BluetoothAudioQualityReport& SetAverage(const int64_t value);
  int64_t GetAverageForTest() const;

  static constexpr uint64_t kStdDevNameHash = UINT64_C(5713238848873808269);
  BluetoothAudioQualityReport& SetStdDev(const int64_t value);
  int64_t GetStdDevForTest() const;

  static constexpr uint64_t kPercentile95NameHash = UINT64_C(18351270367364284124);
  BluetoothAudioQualityReport& SetPercentile95(const int64_t value);
  int64_t GetPercentile95ForTest() const;

};

class BRILLO_EXPORT BluetoothChipsetInfoReport final : public ::metrics::structured::EventBase {
 public:
  BluetoothChipsetInfoReport();
  ~BluetoothChipsetInfoReport() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(16129006935014876138);
  static constexpr uint64_t kProjectNameHash = UINT64_C(9074739597929991885);
  static constexpr IdType kIdType = IdType::kProjectId;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kBootIdNameHash = UINT64_C(9983133050293312198);
  BluetoothChipsetInfoReport& SetBootId(const std::string& value);
  std::string GetBootIdForTest() const;

  static constexpr uint64_t kVendorIdNameHash = UINT64_C(7982341394845147735);
  BluetoothChipsetInfoReport& SetVendorId(const int64_t value);
  int64_t GetVendorIdForTest() const;

  static constexpr uint64_t kProductIdNameHash = UINT64_C(3765840483194334735);
  BluetoothChipsetInfoReport& SetProductId(const int64_t value);
  int64_t GetProductIdForTest() const;

  static constexpr uint64_t kTransportNameHash = UINT64_C(17721880626079387512);
  BluetoothChipsetInfoReport& SetTransport(const int64_t value);
  int64_t GetTransportForTest() const;

  static constexpr uint64_t kChipsetStringHashValueNameHash = UINT64_C(5567784120503214630);
  BluetoothChipsetInfoReport& SetChipsetStringHashValue(const int64_t value);
  int64_t GetChipsetStringHashValueForTest() const;

};

class BRILLO_EXPORT BluetoothA2dpAudioOverrun final : public ::metrics::structured::EventBase {
 public:
  BluetoothA2dpAudioOverrun();
  ~BluetoothA2dpAudioOverrun() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(7375723148381645329);
  static constexpr uint64_t kProjectNameHash = UINT64_C(9074739597929991885);
  static constexpr IdType kIdType = IdType::kProjectId;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kBootIdNameHash = UINT64_C(9983133050293312198);
  BluetoothA2dpAudioOverrun& SetBootId(const std::string& value);
  std::string GetBootIdForTest() const;

  static constexpr uint64_t kSystemTimeNameHash = UINT64_C(5430963162341175395);
  BluetoothA2dpAudioOverrun& SetSystemTime(const int64_t value);
  int64_t GetSystemTimeForTest() const;

  static constexpr uint64_t kDeviceIdNameHash = UINT64_C(14998742047592455339);
  BluetoothA2dpAudioOverrun& SetDeviceId(const std::string& value);
  std::string GetDeviceIdForTest() const;

  static constexpr uint64_t kEncodingIntervalNameHash = UINT64_C(3606412102905407189);
  BluetoothA2dpAudioOverrun& SetEncodingInterval(const int64_t value);
  int64_t GetEncodingIntervalForTest() const;

  static constexpr uint64_t kDroppedBuffersNameHash = UINT64_C(5021913592946419848);
  BluetoothA2dpAudioOverrun& SetDroppedBuffers(const int64_t value);
  int64_t GetDroppedBuffersForTest() const;

  static constexpr uint64_t kDroppedFramesNameHash = UINT64_C(5995504238522425793);
  BluetoothA2dpAudioOverrun& SetDroppedFrames(const int64_t value);
  int64_t GetDroppedFramesForTest() const;

  static constexpr uint64_t kDroppedBytesNameHash = UINT64_C(12141048787197260247);
  BluetoothA2dpAudioOverrun& SetDroppedBytes(const int64_t value);
  int64_t GetDroppedBytesForTest() const;

};

class BRILLO_EXPORT BluetoothHfpPacketLoss final : public ::metrics::structured::EventBase {
 public:
  BluetoothHfpPacketLoss();
  ~BluetoothHfpPacketLoss() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(14058296020743738184);
  static constexpr uint64_t kProjectNameHash = UINT64_C(9074739597929991885);
  static constexpr IdType kIdType = IdType::kProjectId;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kBootIdNameHash = UINT64_C(9983133050293312198);
  BluetoothHfpPacketLoss& SetBootId(const std::string& value);
  std::string GetBootIdForTest() const;

  static constexpr uint64_t kSystemTimeNameHash = UINT64_C(5430963162341175395);
  BluetoothHfpPacketLoss& SetSystemTime(const int64_t value);
  int64_t GetSystemTimeForTest() const;

  static constexpr uint64_t kDeviceIdNameHash = UINT64_C(14998742047592455339);
  BluetoothHfpPacketLoss& SetDeviceId(const std::string& value);
  std::string GetDeviceIdForTest() const;

  static constexpr uint64_t kDecodedFramesNameHash = UINT64_C(5654182682437251239);
  BluetoothHfpPacketLoss& SetDecodedFrames(const int64_t value);
  int64_t GetDecodedFramesForTest() const;

  static constexpr uint64_t kPacketLossRatioNameHash = UINT64_C(18416157911454717678);
  BluetoothHfpPacketLoss& SetPacketLossRatio(const double value);
  double GetPacketLossRatioForTest() const;

};

}  // namespace bluetooth

namespace bluetooth_device {

class BRILLO_EXPORT BluetoothDeviceInfo final : public ::metrics::structured::EventBase {
 public:
  BluetoothDeviceInfo();
  ~BluetoothDeviceInfo() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(2982383022172587778);
  static constexpr uint64_t kProjectNameHash = UINT64_C(1745381000935843040);
  static constexpr IdType kIdType = IdType::kUnidentified;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kDeviceTypeNameHash = UINT64_C(7795620498098931292);
  BluetoothDeviceInfo& SetDeviceType(const int64_t value);
  int64_t GetDeviceTypeForTest() const;

  static constexpr uint64_t kDeviceClassNameHash = UINT64_C(4411699667986879574);
  BluetoothDeviceInfo& SetDeviceClass(const int64_t value);
  int64_t GetDeviceClassForTest() const;

  static constexpr uint64_t kDeviceCategoryNameHash = UINT64_C(9022598035322877834);
  BluetoothDeviceInfo& SetDeviceCategory(const int64_t value);
  int64_t GetDeviceCategoryForTest() const;

  static constexpr uint64_t kVendorIdNameHash = UINT64_C(7982341394845147735);
  BluetoothDeviceInfo& SetVendorId(const int64_t value);
  int64_t GetVendorIdForTest() const;

  static constexpr uint64_t kVendorIdSourceNameHash = UINT64_C(11271343156353958088);
  BluetoothDeviceInfo& SetVendorIdSource(const int64_t value);
  int64_t GetVendorIdSourceForTest() const;

  static constexpr uint64_t kProductIdNameHash = UINT64_C(3765840483194334735);
  BluetoothDeviceInfo& SetProductId(const int64_t value);
  int64_t GetProductIdForTest() const;

  static constexpr uint64_t kProductVersionNameHash = UINT64_C(13046660159880260301);
  BluetoothDeviceInfo& SetProductVersion(const int64_t value);
  int64_t GetProductVersionForTest() const;

};

}  // namespace bluetooth_device

namespace bluetooth_chipset {

class BRILLO_EXPORT BluetoothChipsetInfo final : public ::metrics::structured::EventBase {
 public:
  BluetoothChipsetInfo();
  ~BluetoothChipsetInfo() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(15863163262883578450);
  static constexpr uint64_t kProjectNameHash = UINT64_C(11181229631788078243);
  static constexpr IdType kIdType = IdType::kUnidentified;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_RAW_STRING;

  static constexpr uint64_t kVendorIdNameHash = UINT64_C(7982341394845147735);
  BluetoothChipsetInfo& SetVendorId(const int64_t value);
  int64_t GetVendorIdForTest() const;

  static constexpr uint64_t kProductIdNameHash = UINT64_C(3765840483194334735);
  BluetoothChipsetInfo& SetProductId(const int64_t value);
  int64_t GetProductIdForTest() const;

  static constexpr uint64_t kTransportNameHash = UINT64_C(17721880626079387512);
  BluetoothChipsetInfo& SetTransport(const int64_t value);
  int64_t GetTransportForTest() const;

  static constexpr uint64_t kChipsetStringNameHash = UINT64_C(16660529255980526929);
  BluetoothChipsetInfo& SetChipsetString(const std::string& value);
  std::string GetChipsetStringForTest() const;

};

}  // namespace bluetooth_chipset

namespace hardware_verifier {

class BRILLO_EXPORT HwVerificationReport final : public ::metrics::structured::EventBase {
 public:
  HwVerificationReport();
  ~HwVerificationReport() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(2834323400914921560);
  static constexpr uint64_t kProjectNameHash = UINT64_C(11294265225635075664);
  static constexpr IdType kIdType = IdType::kProjectId;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kIsCompliantNameHash = UINT64_C(12836332056303855230);
  HwVerificationReport& SetIsCompliant(const int64_t value);
  int64_t GetIsCompliantForTest() const;

  static constexpr uint64_t kQualificationStatusDisplayPanelNameHash = UINT64_C(14807089032170983128);
  HwVerificationReport& SetQualificationStatusDisplayPanel(const int64_t value);
  int64_t GetQualificationStatusDisplayPanelForTest() const;

  static constexpr uint64_t kQualificationStatusStorageNameHash = UINT64_C(6061898696972760018);
  HwVerificationReport& SetQualificationStatusStorage(const int64_t value);
  int64_t GetQualificationStatusStorageForTest() const;

};

class BRILLO_EXPORT ComponentInfo final : public ::metrics::structured::EventBase {
 public:
  ComponentInfo();
  ~ComponentInfo() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(7901409434669589766);
  static constexpr uint64_t kProjectNameHash = UINT64_C(11294265225635075664);
  static constexpr IdType kIdType = IdType::kProjectId;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kComponentCategoryNameHash = UINT64_C(6840617904732463222);
  ComponentInfo& SetComponentCategory(const int64_t value);
  int64_t GetComponentCategoryForTest() const;

  static constexpr uint64_t kDisplayPanelVendorNameHash = UINT64_C(6647879576829928130);
  ComponentInfo& SetDisplayPanelVendor(const int64_t value);
  int64_t GetDisplayPanelVendorForTest() const;

  static constexpr uint64_t kDisplayPanelProductIdNameHash = UINT64_C(4333866374950481047);
  ComponentInfo& SetDisplayPanelProductId(const int64_t value);
  int64_t GetDisplayPanelProductIdForTest() const;

  static constexpr uint64_t kDisplayPanelHeightNameHash = UINT64_C(5381484897643542489);
  ComponentInfo& SetDisplayPanelHeight(const int64_t value);
  int64_t GetDisplayPanelHeightForTest() const;

  static constexpr uint64_t kDisplayPanelWidthNameHash = UINT64_C(2683133854057537060);
  ComponentInfo& SetDisplayPanelWidth(const int64_t value);
  int64_t GetDisplayPanelWidthForTest() const;

  static constexpr uint64_t kStorageMmcManfidNameHash = UINT64_C(3658527411330783922);
  ComponentInfo& SetStorageMmcManfid(const int64_t value);
  int64_t GetStorageMmcManfidForTest() const;

  static constexpr uint64_t kStorageMmcHwrevNameHash = UINT64_C(9255816344494856668);
  ComponentInfo& SetStorageMmcHwrev(const int64_t value);
  int64_t GetStorageMmcHwrevForTest() const;

  static constexpr uint64_t kStorageMmcOemidNameHash = UINT64_C(15487174416604640309);
  ComponentInfo& SetStorageMmcOemid(const int64_t value);
  int64_t GetStorageMmcOemidForTest() const;

  static constexpr uint64_t kStorageMmcPrvNameHash = UINT64_C(6362008749797374891);
  ComponentInfo& SetStorageMmcPrv(const int64_t value);
  int64_t GetStorageMmcPrvForTest() const;

  static constexpr uint64_t kStoragePciVendorNameHash = UINT64_C(15576586824452424376);
  ComponentInfo& SetStoragePciVendor(const int64_t value);
  int64_t GetStoragePciVendorForTest() const;

  static constexpr uint64_t kStoragePciDeviceNameHash = UINT64_C(5646923230218809814);
  ComponentInfo& SetStoragePciDevice(const int64_t value);
  int64_t GetStoragePciDeviceForTest() const;

  static constexpr uint64_t kStoragePciClassNameHash = UINT64_C(15622462130487462637);
  ComponentInfo& SetStoragePciClass(const int64_t value);
  int64_t GetStoragePciClassForTest() const;

};

}  // namespace hardware_verifier

namespace cellular {

class BRILLO_EXPORT CellularConnectionAttempt final : public ::metrics::structured::EventBase {
 public:
  CellularConnectionAttempt();
  ~CellularConnectionAttempt() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(9565573741214161702);
  static constexpr uint64_t kProjectNameHash = UINT64_C(8206859287963243715);
  static constexpr IdType kIdType = IdType::kProjectId;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kapn_idNameHash = UINT64_C(16969126494759758697);
  CellularConnectionAttempt& Setapn_id(const int64_t value);
  int64_t Getapn_idForTest() const;

  static constexpr uint64_t kipv4_config_methodNameHash = UINT64_C(9076171686243363883);
  CellularConnectionAttempt& Setipv4_config_method(const int64_t value);
  int64_t Getipv4_config_methodForTest() const;

  static constexpr uint64_t kipv6_config_methodNameHash = UINT64_C(1716075125711039121);
  CellularConnectionAttempt& Setipv6_config_method(const int64_t value);
  int64_t Getipv6_config_methodForTest() const;

  static constexpr uint64_t kconnect_resultNameHash = UINT64_C(15598723620146594619);
  CellularConnectionAttempt& Setconnect_result(const int64_t value);
  int64_t Getconnect_resultForTest() const;

  static constexpr uint64_t khome_mccmncNameHash = UINT64_C(37695558241520739);
  CellularConnectionAttempt& Sethome_mccmnc(const int64_t value);
  int64_t Gethome_mccmncForTest() const;

  static constexpr uint64_t kserving_mccmncNameHash = UINT64_C(12771439443288387275);
  CellularConnectionAttempt& Setserving_mccmnc(const int64_t value);
  int64_t Getserving_mccmncForTest() const;

  static constexpr uint64_t kroaming_stateNameHash = UINT64_C(532797944946872246);
  CellularConnectionAttempt& Setroaming_state(const int64_t value);
  int64_t Getroaming_stateForTest() const;

  static constexpr uint64_t kapn_typesNameHash = UINT64_C(8517920636314770527);
  CellularConnectionAttempt& Setapn_types(const int64_t value);
  int64_t Getapn_typesForTest() const;

  static constexpr uint64_t kapn_sourceNameHash = UINT64_C(17270104400182726796);
  CellularConnectionAttempt& Setapn_source(const int64_t value);
  int64_t Getapn_sourceForTest() const;

  static constexpr uint64_t ktech_usedNameHash = UINT64_C(16667945462103010669);
  CellularConnectionAttempt& Settech_used(const int64_t value);
  int64_t Gettech_usedForTest() const;

  static constexpr uint64_t kiccid_lengthNameHash = UINT64_C(5784223339536231838);
  CellularConnectionAttempt& Seticcid_length(const int64_t value);
  int64_t Geticcid_lengthForTest() const;

  static constexpr uint64_t ksim_typeNameHash = UINT64_C(5174493250357414186);
  CellularConnectionAttempt& Setsim_type(const int64_t value);
  int64_t Getsim_typeForTest() const;

  static constexpr uint64_t kmodem_stateNameHash = UINT64_C(17447318209902125520);
  CellularConnectionAttempt& Setmodem_state(const int64_t value);
  int64_t Getmodem_stateForTest() const;

  static constexpr uint64_t kconnect_timeNameHash = UINT64_C(15404119718930226429);
  CellularConnectionAttempt& Setconnect_time(const int64_t value);
  int64_t Getconnect_timeForTest() const;

  static constexpr uint64_t kscan_connect_timeNameHash = UINT64_C(1148666456833482689);
  CellularConnectionAttempt& Setscan_connect_time(const int64_t value);
  int64_t Getscan_connect_timeForTest() const;

  static constexpr uint64_t kdetailed_errorNameHash = UINT64_C(1755108877035597562);
  CellularConnectionAttempt& Setdetailed_error(const int64_t value);
  int64_t Getdetailed_errorForTest() const;

  static constexpr uint64_t kgid1NameHash = UINT64_C(10647497580367333237);
  CellularConnectionAttempt& Setgid1(const int64_t value);
  int64_t Getgid1ForTest() const;

  static constexpr uint64_t kuse_apn_revamp_uiNameHash = UINT64_C(12104499805283108665);
  CellularConnectionAttempt& Setuse_apn_revamp_ui(const int64_t value);
  int64_t Getuse_apn_revamp_uiForTest() const;

  static constexpr uint64_t kconnection_attempt_typeNameHash = UINT64_C(11442697273927239582);
  CellularConnectionAttempt& Setconnection_attempt_type(const int64_t value);
  int64_t Getconnection_attempt_typeForTest() const;

  static constexpr uint64_t ksubscription_error_seenNameHash = UINT64_C(939310898319965974);
  CellularConnectionAttempt& Setsubscription_error_seen(const int64_t value);
  int64_t Getsubscription_error_seenForTest() const;

};

class BRILLO_EXPORT ModemFwdFwInstallResult final : public ::metrics::structured::EventBase {
 public:
  ModemFwdFwInstallResult();
  ~ModemFwdFwInstallResult() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(14156919410880982639);
  static constexpr uint64_t kProjectNameHash = UINT64_C(8206859287963243715);
  static constexpr IdType kIdType = IdType::kProjectId;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kfirmware_typesNameHash = UINT64_C(9912504727039983873);
  ModemFwdFwInstallResult& Setfirmware_types(const int64_t value);
  int64_t Getfirmware_typesForTest() const;

  static constexpr uint64_t kfw_install_resultNameHash = UINT64_C(10120023257186796185);
  ModemFwdFwInstallResult& Setfw_install_result(const int64_t value);
  int64_t Getfw_install_resultForTest() const;

};

class BRILLO_EXPORT HermesOp final : public ::metrics::structured::EventBase {
 public:
  HermesOp();
  ~HermesOp() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(8206569500191090563);
  static constexpr uint64_t kProjectNameHash = UINT64_C(8206859287963243715);
  static constexpr IdType kIdType = IdType::kProjectId;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kOperationNameHash = UINT64_C(3060457039018605748);
  HermesOp& SetOperation(const int64_t value);
  int64_t GetOperationForTest() const;

  static constexpr uint64_t kResultNameHash = UINT64_C(10298151285721392449);
  HermesOp& SetResult(const int64_t value);
  int64_t GetResultForTest() const;

  static constexpr uint64_t khome_mccmncNameHash = UINT64_C(37695558241520739);
  HermesOp& Sethome_mccmnc(const int64_t value);
  int64_t Gethome_mccmncForTest() const;

};

}  // namespace cellular

namespace rmad {

class BRILLO_EXPORT ShimlessRmaReport final : public ::metrics::structured::EventBase {
 public:
  ShimlessRmaReport();
  ~ShimlessRmaReport() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(16290457139838424490);
  static constexpr uint64_t kProjectNameHash = UINT64_C(9675127341789951965);
  static constexpr IdType kIdType = IdType::kProjectId;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kOverallTimeNameHash = UINT64_C(9999132872938351554);
  ShimlessRmaReport& SetOverallTime(const double value);
  double GetOverallTimeForTest() const;

  static constexpr uint64_t kRunningTimeNameHash = UINT64_C(4417369112820092838);
  ShimlessRmaReport& SetRunningTime(const double value);
  double GetRunningTimeForTest() const;

  static constexpr uint64_t kIsCompleteNameHash = UINT64_C(13430706429255306620);
  ShimlessRmaReport& SetIsComplete(const int64_t value);
  int64_t GetIsCompleteForTest() const;

  static constexpr uint64_t kRoVerificationStatusNameHash = UINT64_C(13707564053607163786);
  ShimlessRmaReport& SetRoVerificationStatus(const int64_t value);
  int64_t GetRoVerificationStatusForTest() const;

  static constexpr uint64_t kReturningOwnerNameHash = UINT64_C(12951406561128878647);
  ShimlessRmaReport& SetReturningOwner(const int64_t value);
  int64_t GetReturningOwnerForTest() const;

  static constexpr uint64_t kMainboardReplacementNameHash = UINT64_C(9805118565725983617);
  ShimlessRmaReport& SetMainboardReplacement(const int64_t value);
  int64_t GetMainboardReplacementForTest() const;

  static constexpr uint64_t kWriteProtectDisableMethodNameHash = UINT64_C(3945735952585306939);
  ShimlessRmaReport& SetWriteProtectDisableMethod(const int64_t value);
  int64_t GetWriteProtectDisableMethodForTest() const;

};

class BRILLO_EXPORT ReplacedComponent final : public ::metrics::structured::EventBase {
 public:
  ReplacedComponent();
  ~ReplacedComponent() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(18142902924169883861);
  static constexpr uint64_t kProjectNameHash = UINT64_C(9675127341789951965);
  static constexpr IdType kIdType = IdType::kProjectId;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kComponentCategoryNameHash = UINT64_C(6840617904732463222);
  ReplacedComponent& SetComponentCategory(const int64_t value);
  int64_t GetComponentCategoryForTest() const;

};

class BRILLO_EXPORT OccurredError final : public ::metrics::structured::EventBase {
 public:
  OccurredError();
  ~OccurredError() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(11339814705699381436);
  static constexpr uint64_t kProjectNameHash = UINT64_C(9675127341789951965);
  static constexpr IdType kIdType = IdType::kProjectId;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kErrorTypeNameHash = UINT64_C(9540451424322945387);
  OccurredError& SetErrorType(const int64_t value);
  int64_t GetErrorTypeForTest() const;

};

class BRILLO_EXPORT AdditionalActivity final : public ::metrics::structured::EventBase {
 public:
  AdditionalActivity();
  ~AdditionalActivity() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(2928394770253852778);
  static constexpr uint64_t kProjectNameHash = UINT64_C(9675127341789951965);
  static constexpr IdType kIdType = IdType::kProjectId;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kActivityTypeNameHash = UINT64_C(3974259668746749924);
  AdditionalActivity& SetActivityType(const int64_t value);
  int64_t GetActivityTypeForTest() const;

};

class BRILLO_EXPORT ShimlessRmaStateReport final : public ::metrics::structured::EventBase {
 public:
  ShimlessRmaStateReport();
  ~ShimlessRmaStateReport() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(16392598288670824837);
  static constexpr uint64_t kProjectNameHash = UINT64_C(9675127341789951965);
  static constexpr IdType kIdType = IdType::kProjectId;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kStateCaseNameHash = UINT64_C(13460237998353539460);
  ShimlessRmaStateReport& SetStateCase(const int64_t value);
  int64_t GetStateCaseForTest() const;

  static constexpr uint64_t kIsAbortedNameHash = UINT64_C(13515923925635749904);
  ShimlessRmaStateReport& SetIsAborted(const int64_t value);
  int64_t GetIsAbortedForTest() const;

  static constexpr uint64_t kOverallTimeNameHash = UINT64_C(9999132872938351554);
  ShimlessRmaStateReport& SetOverallTime(const double value);
  double GetOverallTimeForTest() const;

  static constexpr uint64_t kTransitionCountNameHash = UINT64_C(7754660623504676373);
  ShimlessRmaStateReport& SetTransitionCount(const int64_t value);
  int64_t GetTransitionCountForTest() const;

  static constexpr uint64_t kGetLogCountNameHash = UINT64_C(17272710721354435355);
  ShimlessRmaStateReport& SetGetLogCount(const int64_t value);
  int64_t GetGetLogCountForTest() const;

  static constexpr uint64_t kSaveLogCountNameHash = UINT64_C(6565524739584770050);
  ShimlessRmaStateReport& SetSaveLogCount(const int64_t value);
  int64_t GetSaveLogCountForTest() const;

};

}  // namespace rmad

namespace usb_device {

class BRILLO_EXPORT UsbDeviceInfo final : public ::metrics::structured::EventBase {
 public:
  UsbDeviceInfo();
  ~UsbDeviceInfo() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(10597249090784089806);
  static constexpr uint64_t kProjectNameHash = UINT64_C(17922303533051575891);
  static constexpr IdType kIdType = IdType::kUnidentified;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_RAW_STRING;

  static constexpr uint64_t kVendorIdNameHash = UINT64_C(7982341394845147735);
  UsbDeviceInfo& SetVendorId(const int64_t value);
  int64_t GetVendorIdForTest() const;

  static constexpr uint64_t kVendorNameNameHash = UINT64_C(14838106656619457772);
  UsbDeviceInfo& SetVendorName(const std::string& value);
  std::string GetVendorNameForTest() const;

  static constexpr uint64_t kProductIdNameHash = UINT64_C(3765840483194334735);
  UsbDeviceInfo& SetProductId(const int64_t value);
  int64_t GetProductIdForTest() const;

  static constexpr uint64_t kProductNameNameHash = UINT64_C(400454577602154052);
  UsbDeviceInfo& SetProductName(const std::string& value);
  std::string GetProductNameForTest() const;

  static constexpr uint64_t kDeviceClassNameHash = UINT64_C(4411699667986879574);
  UsbDeviceInfo& SetDeviceClass(const int64_t value);
  int64_t GetDeviceClassForTest() const;

};

}  // namespace usb_device

namespace usb_session {

class BRILLO_EXPORT UsbSessionEvent final : public ::metrics::structured::EventBase {
 public:
  UsbSessionEvent();
  ~UsbSessionEvent() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(16939735174067274714);
  static constexpr uint64_t kProjectNameHash = UINT64_C(6962789877417678651);
  static constexpr IdType kIdType = IdType::kProjectId;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kBootIdNameHash = UINT64_C(9983133050293312198);
  UsbSessionEvent& SetBootId(const std::string& value);
  std::string GetBootIdForTest() const;

  static constexpr uint64_t kSystemTimeNameHash = UINT64_C(5430963162341175395);
  UsbSessionEvent& SetSystemTime(const int64_t value);
  int64_t GetSystemTimeForTest() const;

  static constexpr uint64_t kActionNameHash = UINT64_C(21381969153622804);
  UsbSessionEvent& SetAction(const int64_t value);
  int64_t GetActionForTest() const;

  static constexpr uint64_t kDeviceNumNameHash = UINT64_C(4313316212571108991);
  UsbSessionEvent& SetDeviceNum(const int64_t value);
  int64_t GetDeviceNumForTest() const;

  static constexpr uint64_t kBusNumNameHash = UINT64_C(17302990436816966546);
  UsbSessionEvent& SetBusNum(const int64_t value);
  int64_t GetBusNumForTest() const;

  static constexpr uint64_t kDepthNameHash = UINT64_C(7444545485412611639);
  UsbSessionEvent& SetDepth(const int64_t value);
  int64_t GetDepthForTest() const;

  static constexpr uint64_t kVendorIdNameHash = UINT64_C(7982341394845147735);
  UsbSessionEvent& SetVendorId(const int64_t value);
  int64_t GetVendorIdForTest() const;

  static constexpr uint64_t kProductIdNameHash = UINT64_C(3765840483194334735);
  UsbSessionEvent& SetProductId(const int64_t value);
  int64_t GetProductIdForTest() const;

};

}  // namespace usb_session

namespace usb_error {

class BRILLO_EXPORT HubError final : public ::metrics::structured::EventBase {
 public:
  HubError();
  ~HubError() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(6687292436821539008);
  static constexpr uint64_t kProjectNameHash = UINT64_C(1370722622176744014);
  static constexpr IdType kIdType = IdType::kUnidentified;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_RAW_STRING;

  static constexpr uint64_t kErrorCodeNameHash = UINT64_C(11225621437500415592);
  HubError& SetErrorCode(const int64_t value);
  int64_t GetErrorCodeForTest() const;

  static constexpr uint64_t kDeviceClassNameHash = UINT64_C(4411699667986879574);
  HubError& SetDeviceClass(const int64_t value);
  int64_t GetDeviceClassForTest() const;

  static constexpr uint64_t kVendorIdNameHash = UINT64_C(7982341394845147735);
  HubError& SetVendorId(const int64_t value);
  int64_t GetVendorIdForTest() const;

  static constexpr uint64_t kProductIdNameHash = UINT64_C(3765840483194334735);
  HubError& SetProductId(const int64_t value);
  int64_t GetProductIdForTest() const;

  static constexpr uint64_t kDevicePathNameHash = UINT64_C(13815078691433964739);
  HubError& SetDevicePath(const std::string& value);
  std::string GetDevicePathForTest() const;

  static constexpr uint64_t kConnectedDurationNameHash = UINT64_C(17111721530407745744);
  HubError& SetConnectedDuration(const int64_t value);
  int64_t GetConnectedDurationForTest() const;

};

class BRILLO_EXPORT XhciError final : public ::metrics::structured::EventBase {
 public:
  XhciError();
  ~XhciError() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(12746154833217383793);
  static constexpr uint64_t kProjectNameHash = UINT64_C(1370722622176744014);
  static constexpr IdType kIdType = IdType::kUnidentified;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_RAW_STRING;

  static constexpr uint64_t kErrorCodeNameHash = UINT64_C(11225621437500415592);
  XhciError& SetErrorCode(const int64_t value);
  int64_t GetErrorCodeForTest() const;

  static constexpr uint64_t kDeviceClassNameHash = UINT64_C(4411699667986879574);
  XhciError& SetDeviceClass(const int64_t value);
  int64_t GetDeviceClassForTest() const;

};

}  // namespace usb_error

namespace wi_fi_chipset {

class BRILLO_EXPORT WiFiChipsetInfo final : public ::metrics::structured::EventBase {
 public:
  WiFiChipsetInfo();
  ~WiFiChipsetInfo() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(8949599978721997824);
  static constexpr uint64_t kProjectNameHash = UINT64_C(4690103929823698613);
  static constexpr IdType kIdType = IdType::kUnidentified;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kEventVersionNameHash = UINT64_C(16640453375065674525);
  WiFiChipsetInfo& SetEventVersion(const int64_t value);
  int64_t GetEventVersionForTest() const;

  static constexpr uint64_t kVendorIdNameHash = UINT64_C(7982341394845147735);
  WiFiChipsetInfo& SetVendorId(const int64_t value);
  int64_t GetVendorIdForTest() const;

  static constexpr uint64_t kProductIdNameHash = UINT64_C(3765840483194334735);
  WiFiChipsetInfo& SetProductId(const int64_t value);
  int64_t GetProductIdForTest() const;

  static constexpr uint64_t kSubsystemIdNameHash = UINT64_C(1787939335700279301);
  WiFiChipsetInfo& SetSubsystemId(const int64_t value);
  int64_t GetSubsystemIdForTest() const;

};

}  // namespace wi_fi_chipset

namespace wi_fi_ap {

class BRILLO_EXPORT WiFiAPInfo final : public ::metrics::structured::EventBase {
 public:
  WiFiAPInfo();
  ~WiFiAPInfo() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(3203698821781850467);
  static constexpr uint64_t kProjectNameHash = UINT64_C(7302676440391025918);
  static constexpr IdType kIdType = IdType::kUnidentified;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kEventVersionNameHash = UINT64_C(16640453375065674525);
  WiFiAPInfo& SetEventVersion(const int64_t value);
  int64_t GetEventVersionForTest() const;

  static constexpr uint64_t kAPOUINameHash = UINT64_C(17648906605096151474);
  WiFiAPInfo& SetAPOUI(const int64_t value);
  int64_t GetAPOUIForTest() const;

};

}  // namespace wi_fi_ap

namespace wi_fi {

class BRILLO_EXPORT WiFiAdapterStateChanged final : public ::metrics::structured::EventBase {
 public:
  WiFiAdapterStateChanged();
  ~WiFiAdapterStateChanged() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(712395881256357385);
  static constexpr uint64_t kProjectNameHash = UINT64_C(4320592646346933548);
  static constexpr IdType kIdType = IdType::kProjectId;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kBootIdNameHash = UINT64_C(9983133050293312198);
  WiFiAdapterStateChanged& SetBootId(const std::string& value);
  std::string GetBootIdForTest() const;

  static constexpr uint64_t kSystemTimeNameHash = UINT64_C(5430963162341175395);
  WiFiAdapterStateChanged& SetSystemTime(const int64_t value);
  int64_t GetSystemTimeForTest() const;

  static constexpr uint64_t kEventVersionNameHash = UINT64_C(16640453375065674525);
  WiFiAdapterStateChanged& SetEventVersion(const int64_t value);
  int64_t GetEventVersionForTest() const;

  static constexpr uint64_t kAdapterStateNameHash = UINT64_C(12219887874367467564);
  WiFiAdapterStateChanged& SetAdapterState(const int64_t value);
  int64_t GetAdapterStateForTest() const;

  static constexpr uint64_t kVendorIdNameHash = UINT64_C(7982341394845147735);
  WiFiAdapterStateChanged& SetVendorId(const int64_t value);
  int64_t GetVendorIdForTest() const;

  static constexpr uint64_t kProductIdNameHash = UINT64_C(3765840483194334735);
  WiFiAdapterStateChanged& SetProductId(const int64_t value);
  int64_t GetProductIdForTest() const;

  static constexpr uint64_t kSubsystemIdNameHash = UINT64_C(1787939335700279301);
  WiFiAdapterStateChanged& SetSubsystemId(const int64_t value);
  int64_t GetSubsystemIdForTest() const;

};

class BRILLO_EXPORT WiFiConnectionAttempt final : public ::metrics::structured::EventBase {
 public:
  WiFiConnectionAttempt();
  ~WiFiConnectionAttempt() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(1666654794282642243);
  static constexpr uint64_t kProjectNameHash = UINT64_C(4320592646346933548);
  static constexpr IdType kIdType = IdType::kProjectId;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kBootIdNameHash = UINT64_C(9983133050293312198);
  WiFiConnectionAttempt& SetBootId(const std::string& value);
  std::string GetBootIdForTest() const;

  static constexpr uint64_t kSystemTimeNameHash = UINT64_C(5430963162341175395);
  WiFiConnectionAttempt& SetSystemTime(const int64_t value);
  int64_t GetSystemTimeForTest() const;

  static constexpr uint64_t kEventVersionNameHash = UINT64_C(16640453375065674525);
  WiFiConnectionAttempt& SetEventVersion(const int64_t value);
  int64_t GetEventVersionForTest() const;

  static constexpr uint64_t kSessionTagNameHash = UINT64_C(17993910024827537162);
  WiFiConnectionAttempt& SetSessionTag(const int64_t value);
  int64_t GetSessionTagForTest() const;

  static constexpr uint64_t kAttemptTypeNameHash = UINT64_C(1076825646773901714);
  WiFiConnectionAttempt& SetAttemptType(const int64_t value);
  int64_t GetAttemptTypeForTest() const;

  static constexpr uint64_t kAPPhyModeNameHash = UINT64_C(10624366125648376523);
  WiFiConnectionAttempt& SetAPPhyMode(const int64_t value);
  int64_t GetAPPhyModeForTest() const;

  static constexpr uint64_t kAPSecurityModeNameHash = UINT64_C(5344296387346893171);
  WiFiConnectionAttempt& SetAPSecurityMode(const int64_t value);
  int64_t GetAPSecurityModeForTest() const;

  static constexpr uint64_t kAPSecurityEAPInnerProtocolNameHash = UINT64_C(12558771549648493785);
  WiFiConnectionAttempt& SetAPSecurityEAPInnerProtocol(const int64_t value);
  int64_t GetAPSecurityEAPInnerProtocolForTest() const;

  static constexpr uint64_t kAPSecurityEAPOuterProtocolNameHash = UINT64_C(13976314105449930700);
  WiFiConnectionAttempt& SetAPSecurityEAPOuterProtocol(const int64_t value);
  int64_t GetAPSecurityEAPOuterProtocolForTest() const;

  static constexpr uint64_t kAPBandNameHash = UINT64_C(15945507885291025263);
  WiFiConnectionAttempt& SetAPBand(const int64_t value);
  int64_t GetAPBandForTest() const;

  static constexpr uint64_t kAPChannelNameHash = UINT64_C(9443718677209127399);
  WiFiConnectionAttempt& SetAPChannel(const int64_t value);
  int64_t GetAPChannelForTest() const;

  static constexpr uint64_t kRSSINameHash = UINT64_C(7508615291271386745);
  WiFiConnectionAttempt& SetRSSI(const int64_t value);
  int64_t GetRSSIForTest() const;

  static constexpr uint64_t kSSIDNameHash = UINT64_C(939519157834106403);
  WiFiConnectionAttempt& SetSSID(const std::string& value);
  std::string GetSSIDForTest() const;

  static constexpr uint64_t kSSIDProvisioningModeNameHash = UINT64_C(1488851835668942072);
  WiFiConnectionAttempt& SetSSIDProvisioningMode(const int64_t value);
  int64_t GetSSIDProvisioningModeForTest() const;

  static constexpr uint64_t kSSIDHiddenNameHash = UINT64_C(1065718776176264714);
  WiFiConnectionAttempt& SetSSIDHidden(const int64_t value);
  int64_t GetSSIDHiddenForTest() const;

  static constexpr uint64_t kBSSIDNameHash = UINT64_C(5670702108860320605);
  WiFiConnectionAttempt& SetBSSID(const std::string& value);
  std::string GetBSSIDForTest() const;

  static constexpr uint64_t kAPOUINameHash = UINT64_C(17648906605096151474);
  WiFiConnectionAttempt& SetAPOUI(const int64_t value);
  int64_t GetAPOUIForTest() const;

  static constexpr uint64_t kAP_80211krv_NLSSupportNameHash = UINT64_C(2466001655202338830);
  WiFiConnectionAttempt& SetAP_80211krv_NLSSupport(const int64_t value);
  int64_t GetAP_80211krv_NLSSupportForTest() const;

  static constexpr uint64_t kAP_80211krv_OTA_FTSupportNameHash = UINT64_C(3766376923419614227);
  WiFiConnectionAttempt& SetAP_80211krv_OTA_FTSupport(const int64_t value);
  int64_t GetAP_80211krv_OTA_FTSupportForTest() const;

  static constexpr uint64_t kAP_80211krv_OTDS_FTSupportNameHash = UINT64_C(17226534418478032240);
  WiFiConnectionAttempt& SetAP_80211krv_OTDS_FTSupport(const int64_t value);
  int64_t GetAP_80211krv_OTDS_FTSupportForTest() const;

  static constexpr uint64_t kAP_80211krv_DMSSupportNameHash = UINT64_C(264625629166588074);
  WiFiConnectionAttempt& SetAP_80211krv_DMSSupport(const int64_t value);
  int64_t GetAP_80211krv_DMSSupportForTest() const;

  static constexpr uint64_t kAP_80211krv_BSSMaxIdleSupportNameHash = UINT64_C(10384705939500767290);
  WiFiConnectionAttempt& SetAP_80211krv_BSSMaxIdleSupport(const int64_t value);
  int64_t GetAP_80211krv_BSSMaxIdleSupportForTest() const;

  static constexpr uint64_t kAP_80211krv_BSSTMSupportNameHash = UINT64_C(11108539677176483011);
  WiFiConnectionAttempt& SetAP_80211krv_BSSTMSupport(const int64_t value);
  int64_t GetAP_80211krv_BSSTMSupportForTest() const;

  static constexpr uint64_t kAP_HS20SupportNameHash = UINT64_C(17650250833285491950);
  WiFiConnectionAttempt& SetAP_HS20Support(const int64_t value);
  int64_t GetAP_HS20SupportForTest() const;

  static constexpr uint64_t kAP_HS20VersionNameHash = UINT64_C(15412572593867193316);
  WiFiConnectionAttempt& SetAP_HS20Version(const int64_t value);
  int64_t GetAP_HS20VersionForTest() const;

  static constexpr uint64_t kAP_MBOSupportNameHash = UINT64_C(2357877664271108867);
  WiFiConnectionAttempt& SetAP_MBOSupport(const int64_t value);
  int64_t GetAP_MBOSupportForTest() const;

};

class BRILLO_EXPORT WiFiConnectionAttemptResult final : public ::metrics::structured::EventBase {
 public:
  WiFiConnectionAttemptResult();
  ~WiFiConnectionAttemptResult() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(11158508809305650629);
  static constexpr uint64_t kProjectNameHash = UINT64_C(4320592646346933548);
  static constexpr IdType kIdType = IdType::kProjectId;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kBootIdNameHash = UINT64_C(9983133050293312198);
  WiFiConnectionAttemptResult& SetBootId(const std::string& value);
  std::string GetBootIdForTest() const;

  static constexpr uint64_t kSystemTimeNameHash = UINT64_C(5430963162341175395);
  WiFiConnectionAttemptResult& SetSystemTime(const int64_t value);
  int64_t GetSystemTimeForTest() const;

  static constexpr uint64_t kEventVersionNameHash = UINT64_C(16640453375065674525);
  WiFiConnectionAttemptResult& SetEventVersion(const int64_t value);
  int64_t GetEventVersionForTest() const;

  static constexpr uint64_t kSessionTagNameHash = UINT64_C(17993910024827537162);
  WiFiConnectionAttemptResult& SetSessionTag(const int64_t value);
  int64_t GetSessionTagForTest() const;

  static constexpr uint64_t kResultCodeNameHash = UINT64_C(16006853255194879345);
  WiFiConnectionAttemptResult& SetResultCode(const int64_t value);
  int64_t GetResultCodeForTest() const;

};

class BRILLO_EXPORT WiFiIPConnectivityStatus final : public ::metrics::structured::EventBase {
 public:
  WiFiIPConnectivityStatus();
  ~WiFiIPConnectivityStatus() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(8628520796612200324);
  static constexpr uint64_t kProjectNameHash = UINT64_C(4320592646346933548);
  static constexpr IdType kIdType = IdType::kProjectId;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kBootIdNameHash = UINT64_C(9983133050293312198);
  WiFiIPConnectivityStatus& SetBootId(const std::string& value);
  std::string GetBootIdForTest() const;

  static constexpr uint64_t kSystemTimeNameHash = UINT64_C(5430963162341175395);
  WiFiIPConnectivityStatus& SetSystemTime(const int64_t value);
  int64_t GetSystemTimeForTest() const;

  static constexpr uint64_t kEventVersionNameHash = UINT64_C(16640453375065674525);
  WiFiIPConnectivityStatus& SetEventVersion(const int64_t value);
  int64_t GetEventVersionForTest() const;

  static constexpr uint64_t kIPConnectivityStatusNameHash = UINT64_C(9272595525244154652);
  WiFiIPConnectivityStatus& SetIPConnectivityStatus(const int64_t value);
  int64_t GetIPConnectivityStatusForTest() const;

  static constexpr uint64_t kIPConnectivityTypeNameHash = UINT64_C(9400292009307729378);
  WiFiIPConnectivityStatus& SetIPConnectivityType(const int64_t value);
  int64_t GetIPConnectivityTypeForTest() const;

};

class BRILLO_EXPORT WiFiPortalDetectionStatus final : public ::metrics::structured::EventBase {
 public:
  WiFiPortalDetectionStatus();
  ~WiFiPortalDetectionStatus() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(1477634351488400735);
  static constexpr uint64_t kProjectNameHash = UINT64_C(4320592646346933548);
  static constexpr IdType kIdType = IdType::kProjectId;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kBootIdNameHash = UINT64_C(9983133050293312198);
  WiFiPortalDetectionStatus& SetBootId(const std::string& value);
  std::string GetBootIdForTest() const;

  static constexpr uint64_t kSystemTimeNameHash = UINT64_C(5430963162341175395);
  WiFiPortalDetectionStatus& SetSystemTime(const int64_t value);
  int64_t GetSystemTimeForTest() const;

  static constexpr uint64_t kEventVersionNameHash = UINT64_C(16640453375065674525);
  WiFiPortalDetectionStatus& SetEventVersion(const int64_t value);
  int64_t GetEventVersionForTest() const;

  static constexpr uint64_t kPortalDetectionStatusNameHash = UINT64_C(3858682471204091838);
  WiFiPortalDetectionStatus& SetPortalDetectionStatus(const int64_t value);
  int64_t GetPortalDetectionStatusForTest() const;

};

class BRILLO_EXPORT WiFiConnectionEnd final : public ::metrics::structured::EventBase {
 public:
  WiFiConnectionEnd();
  ~WiFiConnectionEnd() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(16118400771523474582);
  static constexpr uint64_t kProjectNameHash = UINT64_C(4320592646346933548);
  static constexpr IdType kIdType = IdType::kProjectId;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kBootIdNameHash = UINT64_C(9983133050293312198);
  WiFiConnectionEnd& SetBootId(const std::string& value);
  std::string GetBootIdForTest() const;

  static constexpr uint64_t kSystemTimeNameHash = UINT64_C(5430963162341175395);
  WiFiConnectionEnd& SetSystemTime(const int64_t value);
  int64_t GetSystemTimeForTest() const;

  static constexpr uint64_t kEventVersionNameHash = UINT64_C(16640453375065674525);
  WiFiConnectionEnd& SetEventVersion(const int64_t value);
  int64_t GetEventVersionForTest() const;

  static constexpr uint64_t kSessionTagNameHash = UINT64_C(17993910024827537162);
  WiFiConnectionEnd& SetSessionTag(const int64_t value);
  int64_t GetSessionTagForTest() const;

  static constexpr uint64_t kDisconnectionTypeNameHash = UINT64_C(5489713198643466610);
  WiFiConnectionEnd& SetDisconnectionType(const int64_t value);
  int64_t GetDisconnectionTypeForTest() const;

  static constexpr uint64_t kDisconnectionReasonCodeNameHash = UINT64_C(10425992208290386059);
  WiFiConnectionEnd& SetDisconnectionReasonCode(const int64_t value);
  int64_t GetDisconnectionReasonCodeForTest() const;

};

class BRILLO_EXPORT WiFiLinkQualityTrigger final : public ::metrics::structured::EventBase {
 public:
  WiFiLinkQualityTrigger();
  ~WiFiLinkQualityTrigger() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(7481353691260635032);
  static constexpr uint64_t kProjectNameHash = UINT64_C(4320592646346933548);
  static constexpr IdType kIdType = IdType::kProjectId;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kBootIdNameHash = UINT64_C(9983133050293312198);
  WiFiLinkQualityTrigger& SetBootId(const std::string& value);
  std::string GetBootIdForTest() const;

  static constexpr uint64_t kSystemTimeNameHash = UINT64_C(5430963162341175395);
  WiFiLinkQualityTrigger& SetSystemTime(const int64_t value);
  int64_t GetSystemTimeForTest() const;

  static constexpr uint64_t kEventVersionNameHash = UINT64_C(16640453375065674525);
  WiFiLinkQualityTrigger& SetEventVersion(const int64_t value);
  int64_t GetEventVersionForTest() const;

  static constexpr uint64_t kSessionTagNameHash = UINT64_C(17993910024827537162);
  WiFiLinkQualityTrigger& SetSessionTag(const int64_t value);
  int64_t GetSessionTagForTest() const;

  static constexpr uint64_t kTypeNameHash = UINT64_C(11671684778792498320);
  WiFiLinkQualityTrigger& SetType(const int64_t value);
  int64_t GetTypeForTest() const;

};

class BRILLO_EXPORT WiFiLinkQualityReport final : public ::metrics::structured::EventBase {
 public:
  WiFiLinkQualityReport();
  ~WiFiLinkQualityReport() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(9450233159258993332);
  static constexpr uint64_t kProjectNameHash = UINT64_C(4320592646346933548);
  static constexpr IdType kIdType = IdType::kProjectId;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kBootIdNameHash = UINT64_C(9983133050293312198);
  WiFiLinkQualityReport& SetBootId(const std::string& value);
  std::string GetBootIdForTest() const;

  static constexpr uint64_t kSystemTimeNameHash = UINT64_C(5430963162341175395);
  WiFiLinkQualityReport& SetSystemTime(const int64_t value);
  int64_t GetSystemTimeForTest() const;

  static constexpr uint64_t kEventVersionNameHash = UINT64_C(16640453375065674525);
  WiFiLinkQualityReport& SetEventVersion(const int64_t value);
  int64_t GetEventVersionForTest() const;

  static constexpr uint64_t kSessionTagNameHash = UINT64_C(17993910024827537162);
  WiFiLinkQualityReport& SetSessionTag(const int64_t value);
  int64_t GetSessionTagForTest() const;

  static constexpr uint64_t kRXPacketsNameHash = UINT64_C(7105794985843644325);
  WiFiLinkQualityReport& SetRXPackets(const int64_t value);
  int64_t GetRXPacketsForTest() const;

  static constexpr uint64_t kRXBytesNameHash = UINT64_C(10544463948688889058);
  WiFiLinkQualityReport& SetRXBytes(const int64_t value);
  int64_t GetRXBytesForTest() const;

  static constexpr uint64_t kTXPacketsNameHash = UINT64_C(10478602410474332936);
  WiFiLinkQualityReport& SetTXPackets(const int64_t value);
  int64_t GetTXPacketsForTest() const;

  static constexpr uint64_t kTXBytesNameHash = UINT64_C(2501592160331470859);
  WiFiLinkQualityReport& SetTXBytes(const int64_t value);
  int64_t GetTXBytesForTest() const;

  static constexpr uint64_t kTXRetriesNameHash = UINT64_C(9308980182811283580);
  WiFiLinkQualityReport& SetTXRetries(const int64_t value);
  int64_t GetTXRetriesForTest() const;

  static constexpr uint64_t kTXFailuresNameHash = UINT64_C(13901264391317610499);
  WiFiLinkQualityReport& SetTXFailures(const int64_t value);
  int64_t GetTXFailuresForTest() const;

  static constexpr uint64_t kRXDropsNameHash = UINT64_C(3027679419883671081);
  WiFiLinkQualityReport& SetRXDrops(const int64_t value);
  int64_t GetRXDropsForTest() const;

  static constexpr uint64_t kChain0SignalNameHash = UINT64_C(11911311885019620543);
  WiFiLinkQualityReport& SetChain0Signal(const int64_t value);
  int64_t GetChain0SignalForTest() const;

  static constexpr uint64_t kChain0SignalAvgNameHash = UINT64_C(6620818394394387405);
  WiFiLinkQualityReport& SetChain0SignalAvg(const int64_t value);
  int64_t GetChain0SignalAvgForTest() const;

  static constexpr uint64_t kChain1SignalNameHash = UINT64_C(16935198125035652291);
  WiFiLinkQualityReport& SetChain1Signal(const int64_t value);
  int64_t GetChain1SignalForTest() const;

  static constexpr uint64_t kChain1SignalAvgNameHash = UINT64_C(884964695392994095);
  WiFiLinkQualityReport& SetChain1SignalAvg(const int64_t value);
  int64_t GetChain1SignalAvgForTest() const;

  static constexpr uint64_t kBeaconSignalAvgNameHash = UINT64_C(7538017328061378970);
  WiFiLinkQualityReport& SetBeaconSignalAvg(const int64_t value);
  int64_t GetBeaconSignalAvgForTest() const;

  static constexpr uint64_t kBeaconsReceivedNameHash = UINT64_C(1258692833791259398);
  WiFiLinkQualityReport& SetBeaconsReceived(const int64_t value);
  int64_t GetBeaconsReceivedForTest() const;

  static constexpr uint64_t kBeaconsLostNameHash = UINT64_C(1018380494248751899);
  WiFiLinkQualityReport& SetBeaconsLost(const int64_t value);
  int64_t GetBeaconsLostForTest() const;

  static constexpr uint64_t kExpectedThroughputNameHash = UINT64_C(2592935567011135559);
  WiFiLinkQualityReport& SetExpectedThroughput(const int64_t value);
  int64_t GetExpectedThroughputForTest() const;

  static constexpr uint64_t kRXRateNameHash = UINT64_C(12035331905988488012);
  WiFiLinkQualityReport& SetRXRate(const int64_t value);
  int64_t GetRXRateForTest() const;

  static constexpr uint64_t kRXMCSNameHash = UINT64_C(5865277763103815393);
  WiFiLinkQualityReport& SetRXMCS(const int64_t value);
  int64_t GetRXMCSForTest() const;

  static constexpr uint64_t kRXChannelWidthNameHash = UINT64_C(1721891022488936054);
  WiFiLinkQualityReport& SetRXChannelWidth(const int64_t value);
  int64_t GetRXChannelWidthForTest() const;

  static constexpr uint64_t kRXModeNameHash = UINT64_C(5905150458059193614);
  WiFiLinkQualityReport& SetRXMode(const int64_t value);
  int64_t GetRXModeForTest() const;

  static constexpr uint64_t kRXGuardIntervalNameHash = UINT64_C(7142059799856873399);
  WiFiLinkQualityReport& SetRXGuardInterval(const int64_t value);
  int64_t GetRXGuardIntervalForTest() const;

  static constexpr uint64_t kRXNSSNameHash = UINT64_C(614048839857613072);
  WiFiLinkQualityReport& SetRXNSS(const int64_t value);
  int64_t GetRXNSSForTest() const;

  static constexpr uint64_t kRXDCMNameHash = UINT64_C(18335562395711139574);
  WiFiLinkQualityReport& SetRXDCM(const int64_t value);
  int64_t GetRXDCMForTest() const;

  static constexpr uint64_t kTXRateNameHash = UINT64_C(10179747812426294189);
  WiFiLinkQualityReport& SetTXRate(const int64_t value);
  int64_t GetTXRateForTest() const;

  static constexpr uint64_t kTXMCSNameHash = UINT64_C(8504260015439808721);
  WiFiLinkQualityReport& SetTXMCS(const int64_t value);
  int64_t GetTXMCSForTest() const;

  static constexpr uint64_t kTXChannelWidthNameHash = UINT64_C(3251628047626487965);
  WiFiLinkQualityReport& SetTXChannelWidth(const int64_t value);
  int64_t GetTXChannelWidthForTest() const;

  static constexpr uint64_t kTXModeNameHash = UINT64_C(1928231536935154120);
  WiFiLinkQualityReport& SetTXMode(const int64_t value);
  int64_t GetTXModeForTest() const;

  static constexpr uint64_t kTXGuardIntervalNameHash = UINT64_C(8157853018105453257);
  WiFiLinkQualityReport& SetTXGuardInterval(const int64_t value);
  int64_t GetTXGuardIntervalForTest() const;

  static constexpr uint64_t kTXNSSNameHash = UINT64_C(16763757227936851524);
  WiFiLinkQualityReport& SetTXNSS(const int64_t value);
  int64_t GetTXNSSForTest() const;

  static constexpr uint64_t kTXDCMNameHash = UINT64_C(3069112994238134799);
  WiFiLinkQualityReport& SetTXDCM(const int64_t value);
  int64_t GetTXDCMForTest() const;

  static constexpr uint64_t kBTEnabledNameHash = UINT64_C(15747177435389473954);
  WiFiLinkQualityReport& SetBTEnabled(const int64_t value);
  int64_t GetBTEnabledForTest() const;

  static constexpr uint64_t kBTStackNameHash = UINT64_C(8405949737899968258);
  WiFiLinkQualityReport& SetBTStack(const int64_t value);
  int64_t GetBTStackForTest() const;

  static constexpr uint64_t kBTHFPNameHash = UINT64_C(11404229425485018955);
  WiFiLinkQualityReport& SetBTHFP(const int64_t value);
  int64_t GetBTHFPForTest() const;

  static constexpr uint64_t kBTA2DPNameHash = UINT64_C(10528485639018036148);
  WiFiLinkQualityReport& SetBTA2DP(const int64_t value);
  int64_t GetBTA2DPForTest() const;

  static constexpr uint64_t kBTActivelyScanningNameHash = UINT64_C(8919887253805068389);
  WiFiLinkQualityReport& SetBTActivelyScanning(const int64_t value);
  int64_t GetBTActivelyScanningForTest() const;

};

}  // namespace wi_fi

namespace test_project_one {

class BRILLO_EXPORT TestEventOne final : public ::metrics::structured::EventBase {
 public:
  TestEventOne();
  ~TestEventOne() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(16542188217976373364);
  static constexpr uint64_t kProjectNameHash = UINT64_C(16881314472396226433);
  static constexpr IdType kIdType = IdType::kUnidentified;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kTestMetricOneNameHash = UINT64_C(637929385654885975);
  TestEventOne& SetTestMetricOne(const std::string& value);
  std::string GetTestMetricOneForTest() const;

  static constexpr uint64_t kTestMetricTwoNameHash = UINT64_C(14083999144141567134);
  TestEventOne& SetTestMetricTwo(const int64_t value);
  int64_t GetTestMetricTwoForTest() const;

  static constexpr uint64_t kTestMetricThreeNameHash = UINT64_C(13469300759843809564);
  TestEventOne& SetTestMetricThree(const double value);
  double GetTestMetricThreeForTest() const;

};

class BRILLO_EXPORT TestEventTwo final : public ::metrics::structured::EventBase {
 public:
  TestEventTwo();
  ~TestEventTwo() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(13768178553954802986);
  static constexpr uint64_t kProjectNameHash = UINT64_C(16881314472396226433);
  static constexpr IdType kIdType = IdType::kUnidentified;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kTestMetricThreeNameHash = UINT64_C(13469300759843809564);
  TestEventTwo& SetTestMetricThree(const int64_t value);
  int64_t GetTestMetricThreeForTest() const;

};

}  // namespace test_project_one

namespace test_project_two {

class BRILLO_EXPORT TestEventThree final : public ::metrics::structured::EventBase {
 public:
  TestEventThree();
  ~TestEventThree() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(18051195235939111613);
  static constexpr uint64_t kProjectNameHash = UINT64_C(5876808001962504629);
  static constexpr IdType kIdType = IdType::kUnidentified;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kTestMetricFourNameHash = UINT64_C(2917855408523247722);
  TestEventThree& SetTestMetricFour(const std::string& value);
  std::string GetTestMetricFourForTest() const;

};

}  // namespace test_project_two

namespace test_project_three {

class BRILLO_EXPORT TestEventFour final : public ::metrics::structured::EventBase {
 public:
  TestEventFour();
  ~TestEventFour() override;

  static constexpr uint64_t kEventNameHash = UINT64_C(17925971916030281540);
  static constexpr uint64_t kProjectNameHash = UINT64_C(10860358748803291132);
  static constexpr IdType kIdType = IdType::kUnidentified;
  static constexpr StructuredEventProto_EventType kEventType =
    StructuredEventProto_EventType_REGULAR;

  static constexpr uint64_t kTestMetricFiveNameHash = UINT64_C(8665976921794972190);
  TestEventFour& SetTestMetricFive(const std::vector<int64_t>& value);
  std::vector<int64_t> GetTestMetricFiveForTest() const;

  static constexpr size_t GetTestMetricFiveMaxLength() { return 10; }
};

}  // namespace test_project_three



}  // namespace events
}  // namespace structured
}  // namespace metrics

#endif  // METRICS_STRUCTURED_STRUCTURED_EVENTS_H