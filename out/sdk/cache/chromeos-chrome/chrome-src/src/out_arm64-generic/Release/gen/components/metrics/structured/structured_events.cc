// Generated from gen_events.py. DO NOT EDIT!
// source: structured.xml

#include "components/metrics/structured/structured_events.h"

#include "base/strings/string_number_conversions.h"
#include "base/values.h"

namespace metrics {
namespace structured {
namespace events {
namespace v2 {

namespace popular_displays {

MonitorInfo::MonitorInfo() :
  ::metrics::structured::Event("PopularDisplays",
                               "MonitorInfo",
                               false) {}
MonitorInfo::~MonitorInfo() = default;

MonitorInfo& MonitorInfo::SetDisplayName(const std::string& value) {
  AddMetric("DisplayName", Event::MetricType::kRawString,
            base::Value(value));
  return *this;
}

MonitorInfo& MonitorInfo::SetManufacturerId(const std::string& value) {
  AddMetric("ManufacturerId", Event::MetricType::kRawString,
            base::Value(value));
  return *this;
}

MonitorInfo& MonitorInfo::SetProductId(const int64_t value) {
  AddMetric("ProductId", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

MonitorInfo& MonitorInfo::SetNativeModeSize(const std::string& value) {
  AddMetric("NativeModeSize", Event::MetricType::kRawString,
            base::Value(value));
  return *this;
}

MonitorInfo& MonitorInfo::SetNativeModeRefreshRate(const double value) {
  AddMetric("NativeModeRefreshRate", Event::MetricType::kDouble,
            base::Value(value));
  return *this;
}

MonitorInfo& MonitorInfo::SetPhysicalSize(const std::string& value) {
  AddMetric("PhysicalSize", Event::MetricType::kRawString,
            base::Value(value));
  return *this;
}

MonitorInfo& MonitorInfo::SetConnectionType(const std::string& value) {
  AddMetric("ConnectionType", Event::MetricType::kRawString,
            base::Value(value));
  return *this;
}

MonitorInfo& MonitorInfo::SetIsVrrCapable(const int64_t value) {
  AddMetric("IsVrrCapable", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

}  // namespace popular_displays

namespace fast_pair {

DiscoveryNotificationShown::DiscoveryNotificationShown() :
  ::metrics::structured::Event("FastPair",
                               "DiscoveryNotificationShown",
                               false) {}
DiscoveryNotificationShown::~DiscoveryNotificationShown() = default;

DiscoveryNotificationShown& DiscoveryNotificationShown::SetProtocol(const int64_t value) {
  AddMetric("Protocol", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

DiscoveryNotificationShown& DiscoveryNotificationShown::SetFastPairVersion(const int64_t value) {
  AddMetric("FastPairVersion", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

DiscoveryNotificationShown& DiscoveryNotificationShown::SetModelId(const int64_t value) {
  AddMetric("ModelId", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

DiscoveryNotificationShown& DiscoveryNotificationShown::SetRSSI(const int64_t value) {
  AddMetric("RSSI", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

DiscoveryNotificationShown& DiscoveryNotificationShown::SetTxPower(const int64_t value) {
  AddMetric("TxPower", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

PairingStart::PairingStart() :
  ::metrics::structured::Event("FastPair",
                               "PairingStart",
                               false) {}
PairingStart::~PairingStart() = default;

PairingStart& PairingStart::SetProtocol(const int64_t value) {
  AddMetric("Protocol", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

PairingStart& PairingStart::SetFastPairVersion(const int64_t value) {
  AddMetric("FastPairVersion", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

PairingStart& PairingStart::SetModelId(const int64_t value) {
  AddMetric("ModelId", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

PairingStart& PairingStart::SetRSSI(const int64_t value) {
  AddMetric("RSSI", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

PairingStart& PairingStart::SetTxPower(const int64_t value) {
  AddMetric("TxPower", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

PairingComplete::PairingComplete() :
  ::metrics::structured::Event("FastPair",
                               "PairingComplete",
                               false) {}
PairingComplete::~PairingComplete() = default;

PairingComplete& PairingComplete::SetProtocol(const int64_t value) {
  AddMetric("Protocol", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

PairingComplete& PairingComplete::SetFastPairVersion(const int64_t value) {
  AddMetric("FastPairVersion", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

PairingComplete& PairingComplete::SetModelId(const int64_t value) {
  AddMetric("ModelId", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

PairingComplete& PairingComplete::SetRSSI(const int64_t value) {
  AddMetric("RSSI", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

PairingComplete& PairingComplete::SetTxPower(const int64_t value) {
  AddMetric("TxPower", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

PairFailure::PairFailure() :
  ::metrics::structured::Event("FastPair",
                               "PairFailure",
                               false) {}
PairFailure::~PairFailure() = default;

PairFailure& PairFailure::SetProtocol(const int64_t value) {
  AddMetric("Protocol", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

PairFailure& PairFailure::SetFastPairVersion(const int64_t value) {
  AddMetric("FastPairVersion", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

PairFailure& PairFailure::SetReason(const int64_t value) {
  AddMetric("Reason", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

PairFailure& PairFailure::SetModelId(const int64_t value) {
  AddMetric("ModelId", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

}  // namespace fast_pair

namespace hindsight {

CrOSActionEvent_FileOpened::CrOSActionEvent_FileOpened() :
  ::metrics::structured::Event("Hindsight",
                               "CrOSActionEvent_FileOpened",
                               false) {}
CrOSActionEvent_FileOpened::~CrOSActionEvent_FileOpened() = default;

CrOSActionEvent_FileOpened& CrOSActionEvent_FileOpened::SetFilename(const std::string& value) {
  AddMetric("Filename", Event::MetricType::kHmac,
            base::Value(value));
  return *this;
}

CrOSActionEvent_FileOpened& CrOSActionEvent_FileOpened::SetOpenType(const int64_t value) {
  AddMetric("OpenType", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

CrOSActionEvent_FileOpened& CrOSActionEvent_FileOpened::SetSequenceId(const int64_t value) {
  AddMetric("SequenceId", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

CrOSActionEvent_FileOpened& CrOSActionEvent_FileOpened::SetTimeSinceLastAction(const int64_t value) {
  AddMetric("TimeSinceLastAction", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

CrOSActionEvent_SearchResultLaunched::CrOSActionEvent_SearchResultLaunched() :
  ::metrics::structured::Event("Hindsight",
                               "CrOSActionEvent_SearchResultLaunched",
                               false) {}
CrOSActionEvent_SearchResultLaunched::~CrOSActionEvent_SearchResultLaunched() = default;

CrOSActionEvent_SearchResultLaunched& CrOSActionEvent_SearchResultLaunched::SetQuery(const std::string& value) {
  AddMetric("Query", Event::MetricType::kHmac,
            base::Value(value));
  return *this;
}

CrOSActionEvent_SearchResultLaunched& CrOSActionEvent_SearchResultLaunched::SetResultType(const int64_t value) {
  AddMetric("ResultType", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

CrOSActionEvent_SearchResultLaunched& CrOSActionEvent_SearchResultLaunched::SetSearchResultId(const std::string& value) {
  AddMetric("SearchResultId", Event::MetricType::kHmac,
            base::Value(value));
  return *this;
}

CrOSActionEvent_SearchResultLaunched& CrOSActionEvent_SearchResultLaunched::SetSequenceId(const int64_t value) {
  AddMetric("SequenceId", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

CrOSActionEvent_SearchResultLaunched& CrOSActionEvent_SearchResultLaunched::SetTimeSinceLastAction(const int64_t value) {
  AddMetric("TimeSinceLastAction", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

CrOSActionEvent_SettingChanged::CrOSActionEvent_SettingChanged() :
  ::metrics::structured::Event("Hindsight",
                               "CrOSActionEvent_SettingChanged",
                               false) {}
CrOSActionEvent_SettingChanged::~CrOSActionEvent_SettingChanged() = default;

CrOSActionEvent_SettingChanged& CrOSActionEvent_SettingChanged::SetCurrentValue(const int64_t value) {
  AddMetric("CurrentValue", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

CrOSActionEvent_SettingChanged& CrOSActionEvent_SettingChanged::SetPreviousValue(const int64_t value) {
  AddMetric("PreviousValue", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

CrOSActionEvent_SettingChanged& CrOSActionEvent_SettingChanged::SetSequenceId(const int64_t value) {
  AddMetric("SequenceId", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

CrOSActionEvent_SettingChanged& CrOSActionEvent_SettingChanged::SetSettingId(const int64_t value) {
  AddMetric("SettingId", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

CrOSActionEvent_SettingChanged& CrOSActionEvent_SettingChanged::SetSettingType(const int64_t value) {
  AddMetric("SettingType", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

CrOSActionEvent_SettingChanged& CrOSActionEvent_SettingChanged::SetTimeSinceLastAction(const int64_t value) {
  AddMetric("TimeSinceLastAction", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

CrOSActionEvent_TabEvent_TabNavigated::CrOSActionEvent_TabEvent_TabNavigated() :
  ::metrics::structured::Event("Hindsight",
                               "CrOSActionEvent_TabEvent_TabNavigated",
                               false) {}
CrOSActionEvent_TabEvent_TabNavigated::~CrOSActionEvent_TabEvent_TabNavigated() = default;

CrOSActionEvent_TabEvent_TabNavigated& CrOSActionEvent_TabEvent_TabNavigated::SetPageTransition(const int64_t value) {
  AddMetric("PageTransition", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

CrOSActionEvent_TabEvent_TabNavigated& CrOSActionEvent_TabEvent_TabNavigated::SetSequenceId(const int64_t value) {
  AddMetric("SequenceId", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

CrOSActionEvent_TabEvent_TabNavigated& CrOSActionEvent_TabEvent_TabNavigated::SetTimeSinceLastAction(const int64_t value) {
  AddMetric("TimeSinceLastAction", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

CrOSActionEvent_TabEvent_TabNavigated& CrOSActionEvent_TabEvent_TabNavigated::SetURL(const std::string& value) {
  AddMetric("URL", Event::MetricType::kHmac,
            base::Value(value));
  return *this;
}

CrOSActionEvent_TabEvent_TabNavigated& CrOSActionEvent_TabEvent_TabNavigated::SetVisibility(const int64_t value) {
  AddMetric("Visibility", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

CrOSActionEvent_TabEvent_TabOpened::CrOSActionEvent_TabEvent_TabOpened() :
  ::metrics::structured::Event("Hindsight",
                               "CrOSActionEvent_TabEvent_TabOpened",
                               false) {}
CrOSActionEvent_TabEvent_TabOpened::~CrOSActionEvent_TabEvent_TabOpened() = default;

CrOSActionEvent_TabEvent_TabOpened& CrOSActionEvent_TabEvent_TabOpened::SetSequenceId(const int64_t value) {
  AddMetric("SequenceId", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

CrOSActionEvent_TabEvent_TabOpened& CrOSActionEvent_TabEvent_TabOpened::SetTimeSinceLastAction(const int64_t value) {
  AddMetric("TimeSinceLastAction", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

CrOSActionEvent_TabEvent_TabOpened& CrOSActionEvent_TabEvent_TabOpened::SetURL(const std::string& value) {
  AddMetric("URL", Event::MetricType::kHmac,
            base::Value(value));
  return *this;
}

CrOSActionEvent_TabEvent_TabOpened& CrOSActionEvent_TabEvent_TabOpened::SetURLOpened(const std::string& value) {
  AddMetric("URLOpened", Event::MetricType::kHmac,
            base::Value(value));
  return *this;
}

CrOSActionEvent_TabEvent_TabOpened& CrOSActionEvent_TabEvent_TabOpened::SetWindowOpenDisposition(const int64_t value) {
  AddMetric("WindowOpenDisposition", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

CrOSActionEvent_TabEvent_TabReactivated::CrOSActionEvent_TabEvent_TabReactivated() :
  ::metrics::structured::Event("Hindsight",
                               "CrOSActionEvent_TabEvent_TabReactivated",
                               false) {}
CrOSActionEvent_TabEvent_TabReactivated::~CrOSActionEvent_TabEvent_TabReactivated() = default;

CrOSActionEvent_TabEvent_TabReactivated& CrOSActionEvent_TabEvent_TabReactivated::SetSequenceId(const int64_t value) {
  AddMetric("SequenceId", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

CrOSActionEvent_TabEvent_TabReactivated& CrOSActionEvent_TabEvent_TabReactivated::SetTimeSinceLastAction(const int64_t value) {
  AddMetric("TimeSinceLastAction", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

CrOSActionEvent_TabEvent_TabReactivated& CrOSActionEvent_TabEvent_TabReactivated::SetURL(const std::string& value) {
  AddMetric("URL", Event::MetricType::kHmac,
            base::Value(value));
  return *this;
}

}  // namespace hindsight

namespace launcher_usage {

LauncherUsage::LauncherUsage() :
  ::metrics::structured::Event("LauncherUsage",
                               "LauncherUsage",
                               false) {}
LauncherUsage::~LauncherUsage() = default;

LauncherUsage& LauncherUsage::SetApp(const std::string& value) {
  AddMetric("App", Event::MetricType::kHmac,
            base::Value(value));
  return *this;
}

LauncherUsage& LauncherUsage::SetDomain(const std::string& value) {
  AddMetric("Domain", Event::MetricType::kHmac,
            base::Value(value));
  return *this;
}

LauncherUsage& LauncherUsage::SetHour(const int64_t value) {
  AddMetric("Hour", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

LauncherUsage& LauncherUsage::SetProviderType(const int64_t value) {
  AddMetric("ProviderType", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

LauncherUsage& LauncherUsage::SetScore(const int64_t value) {
  AddMetric("Score", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

LauncherUsage& LauncherUsage::SetSearchQuery(const std::string& value) {
  AddMetric("SearchQuery", Event::MetricType::kHmac,
            base::Value(value));
  return *this;
}

LauncherUsage& LauncherUsage::SetSearchQueryLength(const int64_t value) {
  AddMetric("SearchQueryLength", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

LauncherUsage& LauncherUsage::SetTarget(const std::string& value) {
  AddMetric("Target", Event::MetricType::kHmac,
            base::Value(value));
  return *this;
}

}  // namespace launcher_usage

namespace nearby_share {

Discovery::Discovery() :
  ::metrics::structured::Event("NearbyShare",
                               "Discovery",
                               false) {}
Discovery::~Discovery() = default;

Discovery& Discovery::SetPlatform(const int64_t value) {
  AddMetric("Platform", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Discovery& Discovery::SetDeviceRelationship(const int64_t value) {
  AddMetric("DeviceRelationship", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Discovery& Discovery::SetTimeToDiscovery(const int64_t value) {
  AddMetric("TimeToDiscovery", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Throughput::Throughput() :
  ::metrics::structured::Event("NearbyShare",
                               "Throughput",
                               false) {}
Throughput::~Throughput() = default;

Throughput& Throughput::SetIsReceiving(const int64_t value) {
  AddMetric("IsReceiving", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Throughput& Throughput::SetPlatform(const int64_t value) {
  AddMetric("Platform", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Throughput& Throughput::SetDeviceRelationship(const int64_t value) {
  AddMetric("DeviceRelationship", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Throughput& Throughput::SetMedium(const int64_t value) {
  AddMetric("Medium", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Throughput& Throughput::SetUpdateBytes(const int64_t value) {
  AddMetric("UpdateBytes", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Throughput& Throughput::SetUpdateMillis(const int64_t value) {
  AddMetric("UpdateMillis", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Throughput& Throughput::SetTransferredBytes(const int64_t value) {
  AddMetric("TransferredBytes", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Throughput& Throughput::SetTotalTransferBytes(const int64_t value) {
  AddMetric("TotalTransferBytes", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

FileAttachment::FileAttachment() :
  ::metrics::structured::Event("NearbyShare",
                               "FileAttachment",
                               false) {}
FileAttachment::~FileAttachment() = default;

FileAttachment& FileAttachment::SetIsReceiving(const int64_t value) {
  AddMetric("IsReceiving", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

FileAttachment& FileAttachment::SetPlatform(const int64_t value) {
  AddMetric("Platform", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

FileAttachment& FileAttachment::SetDeviceRelationship(const int64_t value) {
  AddMetric("DeviceRelationship", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

FileAttachment& FileAttachment::SetFileType(const int64_t value) {
  AddMetric("FileType", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

FileAttachment& FileAttachment::SetSize(const int64_t value) {
  AddMetric("Size", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

FileAttachment& FileAttachment::SetResult(const int64_t value) {
  AddMetric("Result", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

TextAttachment::TextAttachment() :
  ::metrics::structured::Event("NearbyShare",
                               "TextAttachment",
                               false) {}
TextAttachment::~TextAttachment() = default;

TextAttachment& TextAttachment::SetIsReceiving(const int64_t value) {
  AddMetric("IsReceiving", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

TextAttachment& TextAttachment::SetPlatform(const int64_t value) {
  AddMetric("Platform", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

TextAttachment& TextAttachment::SetDeviceRelationship(const int64_t value) {
  AddMetric("DeviceRelationship", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

TextAttachment& TextAttachment::SetTextType(const int64_t value) {
  AddMetric("TextType", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

TextAttachment& TextAttachment::SetSize(const int64_t value) {
  AddMetric("Size", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

TextAttachment& TextAttachment::SetResult(const int64_t value) {
  AddMetric("Result", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

ShareSession::ShareSession() :
  ::metrics::structured::Event("NearbyShare",
                               "ShareSession",
                               false) {}
ShareSession::~ShareSession() = default;

ShareSession& ShareSession::SetIsReceiving(const int64_t value) {
  AddMetric("IsReceiving", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

ShareSession& ShareSession::SetPlatform(const int64_t value) {
  AddMetric("Platform", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

ShareSession& ShareSession::SetDeviceRelationship(const int64_t value) {
  AddMetric("DeviceRelationship", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

ShareSession& ShareSession::SetTimeToDiscovery(const int64_t value) {
  AddMetric("TimeToDiscovery", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

ShareSession& ShareSession::SetTimeToSelect(const int64_t value) {
  AddMetric("TimeToSelect", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

ShareSession& ShareSession::SetTimeToConnect(const int64_t value) {
  AddMetric("TimeToConnect", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

ShareSession& ShareSession::SetTimeToAccept(const int64_t value) {
  AddMetric("TimeToAccept", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

ShareSession& ShareSession::SetTimeToTransferComplete(const int64_t value) {
  AddMetric("TimeToTransferComplete", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

ShareSession& ShareSession::SetInitialMedium(const int64_t value) {
  AddMetric("InitialMedium", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

ShareSession& ShareSession::SetTimeToUpgrade(const int64_t value) {
  AddMetric("TimeToUpgrade", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

ShareSession& ShareSession::SetFinalMedium(const int64_t value) {
  AddMetric("FinalMedium", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

ShareSession& ShareSession::SetNumberOfFiles(const int64_t value) {
  AddMetric("NumberOfFiles", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

ShareSession& ShareSession::SetNumberOfTexts(const int64_t value) {
  AddMetric("NumberOfTexts", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

ShareSession& ShareSession::SetNumberOfWiFiCredentials(const int64_t value) {
  AddMetric("NumberOfWiFiCredentials", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

ShareSession& ShareSession::SetTotalTransferBytes(const int64_t value) {
  AddMetric("TotalTransferBytes", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

ShareSession& ShareSession::SetBytesTransferred(const int64_t value) {
  AddMetric("BytesTransferred", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

ShareSession& ShareSession::SetResult(const int64_t value) {
  AddMetric("Result", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

}  // namespace nearby_share

namespace structured_metrics {

Initialization::Initialization() :
  ::metrics::structured::Event("StructuredMetrics",
                               "Initialization",
                               false) {}
Initialization::~Initialization() = default;

Initialization& Initialization::SetPlatform(const int64_t value) {
  AddMetric("Platform", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

}  // namespace structured_metrics

namespace cr_os_events {

AppDiscovery_AppInstalled::AppDiscovery_AppInstalled() :
  ::metrics::structured::Event("CrOSEvents",
                               "AppDiscovery_AppInstalled",
                               true) {}
AppDiscovery_AppInstalled::~AppDiscovery_AppInstalled() = default;

AppDiscovery_AppInstalled& AppDiscovery_AppInstalled::SetAppId(const std::string& value) {
  AddMetric("AppId", Event::MetricType::kRawString,
            base::Value(value));
  return *this;
}

AppDiscovery_AppInstalled& AppDiscovery_AppInstalled::SetAppType(const int64_t value) {
  AddMetric("AppType", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

AppDiscovery_AppInstalled& AppDiscovery_AppInstalled::SetInstallSource(const int64_t value) {
  AddMetric("InstallSource", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

AppDiscovery_AppInstalled& AppDiscovery_AppInstalled::SetInstallReason(const int64_t value) {
  AddMetric("InstallReason", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

AppDiscovery_AppLaunched::AppDiscovery_AppLaunched() :
  ::metrics::structured::Event("CrOSEvents",
                               "AppDiscovery_AppLaunched",
                               true) {}
AppDiscovery_AppLaunched::~AppDiscovery_AppLaunched() = default;

AppDiscovery_AppLaunched& AppDiscovery_AppLaunched::SetAppId(const std::string& value) {
  AddMetric("AppId", Event::MetricType::kRawString,
            base::Value(value));
  return *this;
}

AppDiscovery_AppLaunched& AppDiscovery_AppLaunched::SetAppType(const int64_t value) {
  AddMetric("AppType", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

AppDiscovery_AppLaunched& AppDiscovery_AppLaunched::SetLaunchSource(const int64_t value) {
  AddMetric("LaunchSource", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

AppDiscovery_AppUninstall::AppDiscovery_AppUninstall() :
  ::metrics::structured::Event("CrOSEvents",
                               "AppDiscovery_AppUninstall",
                               true) {}
AppDiscovery_AppUninstall::~AppDiscovery_AppUninstall() = default;

AppDiscovery_AppUninstall& AppDiscovery_AppUninstall::SetAppId(const std::string& value) {
  AddMetric("AppId", Event::MetricType::kRawString,
            base::Value(value));
  return *this;
}

AppDiscovery_AppUninstall& AppDiscovery_AppUninstall::SetAppType(const int64_t value) {
  AddMetric("AppType", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

AppDiscovery_AppUninstall& AppDiscovery_AppUninstall::SetUninstallSource(const int64_t value) {
  AddMetric("UninstallSource", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

AppDiscovery_AppStateChanged::AppDiscovery_AppStateChanged() :
  ::metrics::structured::Event("CrOSEvents",
                               "AppDiscovery_AppStateChanged",
                               true) {}
AppDiscovery_AppStateChanged::~AppDiscovery_AppStateChanged() = default;

AppDiscovery_AppStateChanged& AppDiscovery_AppStateChanged::SetAppId(const std::string& value) {
  AddMetric("AppId", Event::MetricType::kRawString,
            base::Value(value));
  return *this;
}

AppDiscovery_AppStateChanged& AppDiscovery_AppStateChanged::SetAppState(const int64_t value) {
  AddMetric("AppState", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

AppDiscovery_LauncherOpen::AppDiscovery_LauncherOpen() :
  ::metrics::structured::Event("CrOSEvents",
                               "AppDiscovery_LauncherOpen",
                               true) {}
AppDiscovery_LauncherOpen::~AppDiscovery_LauncherOpen() = default;

AppDiscovery_AppLauncherResultOpened::AppDiscovery_AppLauncherResultOpened() :
  ::metrics::structured::Event("CrOSEvents",
                               "AppDiscovery_AppLauncherResultOpened",
                               true) {}
AppDiscovery_AppLauncherResultOpened::~AppDiscovery_AppLauncherResultOpened() = default;

AppDiscovery_AppLauncherResultOpened& AppDiscovery_AppLauncherResultOpened::SetFuzzyStringMatch(const double value) {
  AddMetric("FuzzyStringMatch", Event::MetricType::kDouble,
            base::Value(value));
  return *this;
}

AppDiscovery_AppLauncherResultOpened& AppDiscovery_AppLauncherResultOpened::SetAppId(const std::string& value) {
  AddMetric("AppId", Event::MetricType::kRawString,
            base::Value(value));
  return *this;
}

AppDiscovery_AppLauncherResultOpened& AppDiscovery_AppLauncherResultOpened::SetAppName(const std::string& value) {
  AddMetric("AppName", Event::MetricType::kRawString,
            base::Value(value));
  return *this;
}

AppDiscovery_AppLauncherResultOpened& AppDiscovery_AppLauncherResultOpened::SetResultCategory(const int64_t value) {
  AddMetric("ResultCategory", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

AppDiscovery_Browser_OmniboxInstallIconClicked::AppDiscovery_Browser_OmniboxInstallIconClicked() :
  ::metrics::structured::Event("CrOSEvents",
                               "AppDiscovery_Browser_OmniboxInstallIconClicked",
                               true) {}
AppDiscovery_Browser_OmniboxInstallIconClicked::~AppDiscovery_Browser_OmniboxInstallIconClicked() = default;

AppDiscovery_Browser_OmniboxInstallIconClicked& AppDiscovery_Browser_OmniboxInstallIconClicked::SetIPHShown(const int64_t value) {
  AddMetric("IPHShown", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

AppDiscovery_Browser_AppInstallDialogShown::AppDiscovery_Browser_AppInstallDialogShown() :
  ::metrics::structured::Event("CrOSEvents",
                               "AppDiscovery_Browser_AppInstallDialogShown",
                               true) {}
AppDiscovery_Browser_AppInstallDialogShown::~AppDiscovery_Browser_AppInstallDialogShown() = default;

AppDiscovery_Browser_AppInstallDialogShown& AppDiscovery_Browser_AppInstallDialogShown::SetAppId(const std::string& value) {
  AddMetric("AppId", Event::MetricType::kRawString,
            base::Value(value));
  return *this;
}

AppDiscovery_Browser_AppInstallDialogResult::AppDiscovery_Browser_AppInstallDialogResult() :
  ::metrics::structured::Event("CrOSEvents",
                               "AppDiscovery_Browser_AppInstallDialogResult",
                               true) {}
AppDiscovery_Browser_AppInstallDialogResult::~AppDiscovery_Browser_AppInstallDialogResult() = default;

AppDiscovery_Browser_AppInstallDialogResult& AppDiscovery_Browser_AppInstallDialogResult::SetWebAppInstallStatus(const int64_t value) {
  AddMetric("WebAppInstallStatus", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

AppDiscovery_Browser_AppInstallDialogResult& AppDiscovery_Browser_AppInstallDialogResult::SetAppId(const std::string& value) {
  AddMetric("AppId", Event::MetricType::kRawString,
            base::Value(value));
  return *this;
}

AppDiscovery_Browser_ClickInstallAppFromMenu::AppDiscovery_Browser_ClickInstallAppFromMenu() :
  ::metrics::structured::Event("CrOSEvents",
                               "AppDiscovery_Browser_ClickInstallAppFromMenu",
                               true) {}
AppDiscovery_Browser_ClickInstallAppFromMenu::~AppDiscovery_Browser_ClickInstallAppFromMenu() = default;

AppDiscovery_Browser_ClickInstallAppFromMenu& AppDiscovery_Browser_ClickInstallAppFromMenu::SetAppId(const std::string& value) {
  AddMetric("AppId", Event::MetricType::kRawString,
            base::Value(value));
  return *this;
}

AppDiscovery_Browser_CreateShortcut::AppDiscovery_Browser_CreateShortcut() :
  ::metrics::structured::Event("CrOSEvents",
                               "AppDiscovery_Browser_CreateShortcut",
                               true) {}
AppDiscovery_Browser_CreateShortcut::~AppDiscovery_Browser_CreateShortcut() = default;

AppDiscovery_Browser_CreateShortcut& AppDiscovery_Browser_CreateShortcut::SetAppId(const std::string& value) {
  AddMetric("AppId", Event::MetricType::kRawString,
            base::Value(value));
  return *this;
}

OOBE_GaiaSigninRequested::OOBE_GaiaSigninRequested() :
  ::metrics::structured::Event("CrOSEvents",
                               "OOBE_GaiaSigninRequested",
                               true) {}
OOBE_GaiaSigninRequested::~OOBE_GaiaSigninRequested() = default;

OOBE_GaiaSigninRequested& OOBE_GaiaSigninRequested::SetIsReauthentication(const int64_t value) {
  AddMetric("IsReauthentication", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_GaiaSigninRequested& OOBE_GaiaSigninRequested::SetIsFlexFlow(const int64_t value) {
  AddMetric("IsFlexFlow", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_GaiaSigninRequested& OOBE_GaiaSigninRequested::SetIsDemoModeFlow(const int64_t value) {
  AddMetric("IsDemoModeFlow", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_GaiaSigninRequested& OOBE_GaiaSigninRequested::SetIsOwnerUser(const int64_t value) {
  AddMetric("IsOwnerUser", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_GaiaSigninRequested& OOBE_GaiaSigninRequested::SetIsEphemeralOrMGS(const int64_t value) {
  AddMetric("IsEphemeralOrMGS", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_GaiaSigninRequested& OOBE_GaiaSigninRequested::SetIsFirstOnboarding(const int64_t value) {
  AddMetric("IsFirstOnboarding", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_GaiaSigninRequested& OOBE_GaiaSigninRequested::SetChromeMilestone(const int64_t value) {
  AddMetric("ChromeMilestone", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_GaiaSigninCompleted::OOBE_GaiaSigninCompleted() :
  ::metrics::structured::Event("CrOSEvents",
                               "OOBE_GaiaSigninCompleted",
                               true) {}
OOBE_GaiaSigninCompleted::~OOBE_GaiaSigninCompleted() = default;

OOBE_GaiaSigninCompleted& OOBE_GaiaSigninCompleted::SetIsReauthentication(const int64_t value) {
  AddMetric("IsReauthentication", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_GaiaSigninCompleted& OOBE_GaiaSigninCompleted::SetIsFlexFlow(const int64_t value) {
  AddMetric("IsFlexFlow", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_GaiaSigninCompleted& OOBE_GaiaSigninCompleted::SetIsDemoModeFlow(const int64_t value) {
  AddMetric("IsDemoModeFlow", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_GaiaSigninCompleted& OOBE_GaiaSigninCompleted::SetIsOwnerUser(const int64_t value) {
  AddMetric("IsOwnerUser", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_GaiaSigninCompleted& OOBE_GaiaSigninCompleted::SetIsEphemeralOrMGS(const int64_t value) {
  AddMetric("IsEphemeralOrMGS", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_GaiaSigninCompleted& OOBE_GaiaSigninCompleted::SetIsFirstOnboarding(const int64_t value) {
  AddMetric("IsFirstOnboarding", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_GaiaSigninCompleted& OOBE_GaiaSigninCompleted::SetChromeMilestone(const int64_t value) {
  AddMetric("ChromeMilestone", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_OobeStarted::OOBE_OobeStarted() :
  ::metrics::structured::Event("CrOSEvents",
                               "OOBE_OobeStarted",
                               true) {}
OOBE_OobeStarted::~OOBE_OobeStarted() = default;

OOBE_OobeStarted& OOBE_OobeStarted::SetIsFlexFlow(const int64_t value) {
  AddMetric("IsFlexFlow", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_OobeStarted& OOBE_OobeStarted::SetChromeMilestone(const int64_t value) {
  AddMetric("ChromeMilestone", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_PreLoginOobeCompleted::OOBE_PreLoginOobeCompleted() :
  ::metrics::structured::Event("CrOSEvents",
                               "OOBE_PreLoginOobeCompleted",
                               true) {}
OOBE_PreLoginOobeCompleted::~OOBE_PreLoginOobeCompleted() = default;

OOBE_PreLoginOobeCompleted& OOBE_PreLoginOobeCompleted::SetCompletedFlowType(const int64_t value) {
  AddMetric("CompletedFlowType", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_PreLoginOobeCompleted& OOBE_PreLoginOobeCompleted::SetIsFlexFlow(const int64_t value) {
  AddMetric("IsFlexFlow", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_PreLoginOobeCompleted& OOBE_PreLoginOobeCompleted::SetIsDemoModeFlow(const int64_t value) {
  AddMetric("IsDemoModeFlow", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_PreLoginOobeCompleted& OOBE_PreLoginOobeCompleted::SetChromeMilestone(const int64_t value) {
  AddMetric("ChromeMilestone", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_DeviceRegistered::OOBE_DeviceRegistered() :
  ::metrics::structured::Event("CrOSEvents",
                               "OOBE_DeviceRegistered",
                               true) {}
OOBE_DeviceRegistered::~OOBE_DeviceRegistered() = default;

OOBE_DeviceRegistered& OOBE_DeviceRegistered::SetIsFirstOnboarding(const int64_t value) {
  AddMetric("IsFirstOnboarding", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_DeviceRegistered& OOBE_DeviceRegistered::SetIsFlexFlow(const int64_t value) {
  AddMetric("IsFlexFlow", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_DeviceRegistered& OOBE_DeviceRegistered::SetIsDemoModeFlow(const int64_t value) {
  AddMetric("IsDemoModeFlow", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_DeviceRegistered& OOBE_DeviceRegistered::SetChromeMilestone(const int64_t value) {
  AddMetric("ChromeMilestone", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_OobeCompleted::OOBE_OobeCompleted() :
  ::metrics::structured::Event("CrOSEvents",
                               "OOBE_OobeCompleted",
                               true) {}
OOBE_OobeCompleted::~OOBE_OobeCompleted() = default;

OOBE_OobeCompleted& OOBE_OobeCompleted::SetIsFlexFlow(const int64_t value) {
  AddMetric("IsFlexFlow", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_OobeCompleted& OOBE_OobeCompleted::SetIsDemoModeFlow(const int64_t value) {
  AddMetric("IsDemoModeFlow", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_OobeCompleted& OOBE_OobeCompleted::SetIsOwnerUser(const int64_t value) {
  AddMetric("IsOwnerUser", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_OobeCompleted& OOBE_OobeCompleted::SetIsEphemeralOrMGS(const int64_t value) {
  AddMetric("IsEphemeralOrMGS", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_OobeCompleted& OOBE_OobeCompleted::SetIsFirstOnboarding(const int64_t value) {
  AddMetric("IsFirstOnboarding", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_OobeCompleted& OOBE_OobeCompleted::SetChromeMilestone(const int64_t value) {
  AddMetric("ChromeMilestone", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_OnboardingStarted::OOBE_OnboardingStarted() :
  ::metrics::structured::Event("CrOSEvents",
                               "OOBE_OnboardingStarted",
                               true) {}
OOBE_OnboardingStarted::~OOBE_OnboardingStarted() = default;

OOBE_OnboardingStarted& OOBE_OnboardingStarted::SetIsFlexFlow(const int64_t value) {
  AddMetric("IsFlexFlow", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_OnboardingStarted& OOBE_OnboardingStarted::SetIsDemoModeFlow(const int64_t value) {
  AddMetric("IsDemoModeFlow", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_OnboardingStarted& OOBE_OnboardingStarted::SetIsOwnerUser(const int64_t value) {
  AddMetric("IsOwnerUser", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_OnboardingStarted& OOBE_OnboardingStarted::SetIsEphemeralOrMGS(const int64_t value) {
  AddMetric("IsEphemeralOrMGS", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_OnboardingStarted& OOBE_OnboardingStarted::SetIsFirstOnboarding(const int64_t value) {
  AddMetric("IsFirstOnboarding", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_OnboardingStarted& OOBE_OnboardingStarted::SetChromeMilestone(const int64_t value) {
  AddMetric("ChromeMilestone", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_OnboardingCompleted::OOBE_OnboardingCompleted() :
  ::metrics::structured::Event("CrOSEvents",
                               "OOBE_OnboardingCompleted",
                               true) {}
OOBE_OnboardingCompleted::~OOBE_OnboardingCompleted() = default;

OOBE_OnboardingCompleted& OOBE_OnboardingCompleted::SetIsFlexFlow(const int64_t value) {
  AddMetric("IsFlexFlow", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_OnboardingCompleted& OOBE_OnboardingCompleted::SetIsDemoModeFlow(const int64_t value) {
  AddMetric("IsDemoModeFlow", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_OnboardingCompleted& OOBE_OnboardingCompleted::SetIsOwnerUser(const int64_t value) {
  AddMetric("IsOwnerUser", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_OnboardingCompleted& OOBE_OnboardingCompleted::SetIsEphemeralOrMGS(const int64_t value) {
  AddMetric("IsEphemeralOrMGS", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_OnboardingCompleted& OOBE_OnboardingCompleted::SetIsFirstOnboarding(const int64_t value) {
  AddMetric("IsFirstOnboarding", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_OnboardingCompleted& OOBE_OnboardingCompleted::SetChromeMilestone(const int64_t value) {
  AddMetric("ChromeMilestone", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_PageEntered::OOBE_PageEntered() :
  ::metrics::structured::Event("CrOSEvents",
                               "OOBE_PageEntered",
                               true) {}
OOBE_PageEntered::~OOBE_PageEntered() = default;

OOBE_PageEntered& OOBE_PageEntered::SetPageId(const std::string& value) {
  AddMetric("PageId", Event::MetricType::kRawString,
            base::Value(value));
  return *this;
}

OOBE_PageEntered& OOBE_PageEntered::SetIsFlexFlow(const int64_t value) {
  AddMetric("IsFlexFlow", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_PageEntered& OOBE_PageEntered::SetIsDemoModeFlow(const int64_t value) {
  AddMetric("IsDemoModeFlow", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_PageEntered& OOBE_PageEntered::SetIsOwnerUser(const int64_t value) {
  AddMetric("IsOwnerUser", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_PageEntered& OOBE_PageEntered::SetIsEphemeralOrMGS(const int64_t value) {
  AddMetric("IsEphemeralOrMGS", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_PageEntered& OOBE_PageEntered::SetIsFirstOnboarding(const int64_t value) {
  AddMetric("IsFirstOnboarding", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_PageEntered& OOBE_PageEntered::SetChromeMilestone(const int64_t value) {
  AddMetric("ChromeMilestone", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_PageSkippedBySystem::OOBE_PageSkippedBySystem() :
  ::metrics::structured::Event("CrOSEvents",
                               "OOBE_PageSkippedBySystem",
                               true) {}
OOBE_PageSkippedBySystem::~OOBE_PageSkippedBySystem() = default;

OOBE_PageSkippedBySystem& OOBE_PageSkippedBySystem::SetPageId(const std::string& value) {
  AddMetric("PageId", Event::MetricType::kRawString,
            base::Value(value));
  return *this;
}

OOBE_PageSkippedBySystem& OOBE_PageSkippedBySystem::SetIsFlexFlow(const int64_t value) {
  AddMetric("IsFlexFlow", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_PageSkippedBySystem& OOBE_PageSkippedBySystem::SetIsDemoModeFlow(const int64_t value) {
  AddMetric("IsDemoModeFlow", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_PageSkippedBySystem& OOBE_PageSkippedBySystem::SetIsOwnerUser(const int64_t value) {
  AddMetric("IsOwnerUser", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_PageSkippedBySystem& OOBE_PageSkippedBySystem::SetIsEphemeralOrMGS(const int64_t value) {
  AddMetric("IsEphemeralOrMGS", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_PageSkippedBySystem& OOBE_PageSkippedBySystem::SetIsFirstOnboarding(const int64_t value) {
  AddMetric("IsFirstOnboarding", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_PageSkippedBySystem& OOBE_PageSkippedBySystem::SetChromeMilestone(const int64_t value) {
  AddMetric("ChromeMilestone", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_PageLeft::OOBE_PageLeft() :
  ::metrics::structured::Event("CrOSEvents",
                               "OOBE_PageLeft",
                               true) {}
OOBE_PageLeft::~OOBE_PageLeft() = default;

OOBE_PageLeft& OOBE_PageLeft::SetPageId(const std::string& value) {
  AddMetric("PageId", Event::MetricType::kRawString,
            base::Value(value));
  return *this;
}

OOBE_PageLeft& OOBE_PageLeft::SetExitReason(const std::string& value) {
  AddMetric("ExitReason", Event::MetricType::kRawString,
            base::Value(value));
  return *this;
}

OOBE_PageLeft& OOBE_PageLeft::SetIsFlexFlow(const int64_t value) {
  AddMetric("IsFlexFlow", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_PageLeft& OOBE_PageLeft::SetIsDemoModeFlow(const int64_t value) {
  AddMetric("IsDemoModeFlow", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_PageLeft& OOBE_PageLeft::SetIsOwnerUser(const int64_t value) {
  AddMetric("IsOwnerUser", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_PageLeft& OOBE_PageLeft::SetIsEphemeralOrMGS(const int64_t value) {
  AddMetric("IsEphemeralOrMGS", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_PageLeft& OOBE_PageLeft::SetIsFirstOnboarding(const int64_t value) {
  AddMetric("IsFirstOnboarding", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_PageLeft& OOBE_PageLeft::SetChromeMilestone(const int64_t value) {
  AddMetric("ChromeMilestone", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_PreLoginOobeResumed::OOBE_PreLoginOobeResumed() :
  ::metrics::structured::Event("CrOSEvents",
                               "OOBE_PreLoginOobeResumed",
                               true) {}
OOBE_PreLoginOobeResumed::~OOBE_PreLoginOobeResumed() = default;

OOBE_PreLoginOobeResumed& OOBE_PreLoginOobeResumed::SetPendingPageId(const std::string& value) {
  AddMetric("PendingPageId", Event::MetricType::kRawString,
            base::Value(value));
  return *this;
}

OOBE_PreLoginOobeResumed& OOBE_PreLoginOobeResumed::SetExitReason(const std::string& value) {
  AddMetric("ExitReason", Event::MetricType::kRawString,
            base::Value(value));
  return *this;
}

OOBE_PreLoginOobeResumed& OOBE_PreLoginOobeResumed::SetIsFlexFlow(const int64_t value) {
  AddMetric("IsFlexFlow", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_PreLoginOobeResumed& OOBE_PreLoginOobeResumed::SetIsDemoModeFlow(const int64_t value) {
  AddMetric("IsDemoModeFlow", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_PreLoginOobeResumed& OOBE_PreLoginOobeResumed::SetIsOwnerUser(const int64_t value) {
  AddMetric("IsOwnerUser", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_PreLoginOobeResumed& OOBE_PreLoginOobeResumed::SetIsEphemeralOrMGS(const int64_t value) {
  AddMetric("IsEphemeralOrMGS", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_PreLoginOobeResumed& OOBE_PreLoginOobeResumed::SetIsFirstOnboarding(const int64_t value) {
  AddMetric("IsFirstOnboarding", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_PreLoginOobeResumed& OOBE_PreLoginOobeResumed::SetChromeMilestone(const int64_t value) {
  AddMetric("ChromeMilestone", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_OnboardingResumed::OOBE_OnboardingResumed() :
  ::metrics::structured::Event("CrOSEvents",
                               "OOBE_OnboardingResumed",
                               true) {}
OOBE_OnboardingResumed::~OOBE_OnboardingResumed() = default;

OOBE_OnboardingResumed& OOBE_OnboardingResumed::SetPendingPageId(const std::string& value) {
  AddMetric("PendingPageId", Event::MetricType::kRawString,
            base::Value(value));
  return *this;
}

OOBE_OnboardingResumed& OOBE_OnboardingResumed::SetExitReason(const std::string& value) {
  AddMetric("ExitReason", Event::MetricType::kRawString,
            base::Value(value));
  return *this;
}

OOBE_OnboardingResumed& OOBE_OnboardingResumed::SetIsFlexFlow(const int64_t value) {
  AddMetric("IsFlexFlow", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_OnboardingResumed& OOBE_OnboardingResumed::SetIsDemoModeFlow(const int64_t value) {
  AddMetric("IsDemoModeFlow", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_OnboardingResumed& OOBE_OnboardingResumed::SetIsOwnerUser(const int64_t value) {
  AddMetric("IsOwnerUser", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_OnboardingResumed& OOBE_OnboardingResumed::SetIsEphemeralOrMGS(const int64_t value) {
  AddMetric("IsEphemeralOrMGS", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_OnboardingResumed& OOBE_OnboardingResumed::SetIsFirstOnboarding(const int64_t value) {
  AddMetric("IsFirstOnboarding", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_OnboardingResumed& OOBE_OnboardingResumed::SetChromeMilestone(const int64_t value) {
  AddMetric("ChromeMilestone", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_ChoobeResumed::OOBE_ChoobeResumed() :
  ::metrics::structured::Event("CrOSEvents",
                               "OOBE_ChoobeResumed",
                               true) {}
OOBE_ChoobeResumed::~OOBE_ChoobeResumed() = default;

OOBE_ChoobeResumed& OOBE_ChoobeResumed::SetExitReason(const std::string& value) {
  AddMetric("ExitReason", Event::MetricType::kRawString,
            base::Value(value));
  return *this;
}

OOBE_ChoobeResumed& OOBE_ChoobeResumed::SetIsFlexFlow(const int64_t value) {
  AddMetric("IsFlexFlow", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_ChoobeResumed& OOBE_ChoobeResumed::SetIsDemoModeFlow(const int64_t value) {
  AddMetric("IsDemoModeFlow", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_ChoobeResumed& OOBE_ChoobeResumed::SetIsOwnerUser(const int64_t value) {
  AddMetric("IsOwnerUser", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_ChoobeResumed& OOBE_ChoobeResumed::SetIsEphemeralOrMGS(const int64_t value) {
  AddMetric("IsEphemeralOrMGS", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_ChoobeResumed& OOBE_ChoobeResumed::SetIsFirstOnboarding(const int64_t value) {
  AddMetric("IsFirstOnboarding", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

OOBE_ChoobeResumed& OOBE_ChoobeResumed::SetChromeMilestone(const int64_t value) {
  AddMetric("ChromeMilestone", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

UserLogin::UserLogin() :
  ::metrics::structured::Event("CrOSEvents",
                               "UserLogin",
                               true) {}
UserLogin::~UserLogin() = default;

UserLogout::UserLogout() :
  ::metrics::structured::Event("CrOSEvents",
                               "UserLogout",
                               true) {}
UserLogout::~UserLogout() = default;

SystemSuspended::SystemSuspended() :
  ::metrics::structured::Event("CrOSEvents",
                               "SystemSuspended",
                               true) {}
SystemSuspended::~SystemSuspended() = default;

SystemSuspended& SystemSuspended::SetReason(const int64_t value) {
  AddMetric("Reason", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Test1::Test1() :
  ::metrics::structured::Event("CrOSEvents",
                               "Test1",
                               true) {}
Test1::~Test1() = default;

Test1& Test1::SetMetric1(const double value) {
  AddMetric("Metric1", Event::MetricType::kDouble,
            base::Value(value));
  return *this;
}

NoMetricsEvent::NoMetricsEvent() :
  ::metrics::structured::Event("CrOSEvents",
                               "NoMetricsEvent",
                               true) {}
NoMetricsEvent::~NoMetricsEvent() = default;

}  // namespace cr_os_events

namespace dev_tools {

SessionStart::SessionStart() :
  ::metrics::structured::Event("DevTools",
                               "SessionStart",
                               false) {}
SessionStart::~SessionStart() = default;

SessionStart& SessionStart::SetTrigger(const int64_t value) {
  AddMetric("Trigger", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

SessionStart& SessionStart::SetDockSide(const int64_t value) {
  AddMetric("DockSide", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

SessionStart& SessionStart::SetSessionId(const int64_t value) {
  AddMetric("SessionId", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

SessionEnd::SessionEnd() :
  ::metrics::structured::Event("DevTools",
                               "SessionEnd",
                               false) {}
SessionEnd::~SessionEnd() = default;

SessionEnd& SessionEnd::SetTrigger(const int64_t value) {
  AddMetric("Trigger", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

SessionEnd& SessionEnd::SetTimeSinceSessionStart(const int64_t value) {
  AddMetric("TimeSinceSessionStart", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

SessionEnd& SessionEnd::SetSessionId(const int64_t value) {
  AddMetric("SessionId", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Impression::Impression() :
  ::metrics::structured::Event("DevTools",
                               "Impression",
                               false) {}
Impression::~Impression() = default;

Impression& Impression::SetVeId(const int64_t value) {
  AddMetric("VeId", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Impression& Impression::SetVeType(const int64_t value) {
  AddMetric("VeType", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Impression& Impression::SetVeParent(const int64_t value) {
  AddMetric("VeParent", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Impression& Impression::SetVeContext(const int64_t value) {
  AddMetric("VeContext", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Impression& Impression::SetTimeSinceSessionStart(const int64_t value) {
  AddMetric("TimeSinceSessionStart", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Impression& Impression::SetSessionId(const int64_t value) {
  AddMetric("SessionId", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Impression& Impression::SetWidth(const int64_t value) {
  AddMetric("Width", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Impression& Impression::SetHeight(const int64_t value) {
  AddMetric("Height", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Resize::Resize() :
  ::metrics::structured::Event("DevTools",
                               "Resize",
                               false) {}
Resize::~Resize() = default;

Resize& Resize::SetVeId(const int64_t value) {
  AddMetric("VeId", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Resize& Resize::SetTimeSinceSessionStart(const int64_t value) {
  AddMetric("TimeSinceSessionStart", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Resize& Resize::SetSessionId(const int64_t value) {
  AddMetric("SessionId", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Resize& Resize::SetWidth(const int64_t value) {
  AddMetric("Width", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Resize& Resize::SetHeight(const int64_t value) {
  AddMetric("Height", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Click::Click() :
  ::metrics::structured::Event("DevTools",
                               "Click",
                               false) {}
Click::~Click() = default;

Click& Click::SetVeId(const int64_t value) {
  AddMetric("VeId", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Click& Click::SetMouseButton(const int64_t value) {
  AddMetric("MouseButton", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Click& Click::SetContext(const int64_t value) {
  AddMetric("Context", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Click& Click::SetTimeSinceSessionStart(const int64_t value) {
  AddMetric("TimeSinceSessionStart", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Click& Click::SetSessionId(const int64_t value) {
  AddMetric("SessionId", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Hover::Hover() :
  ::metrics::structured::Event("DevTools",
                               "Hover",
                               false) {}
Hover::~Hover() = default;

Hover& Hover::SetVeId(const int64_t value) {
  AddMetric("VeId", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Hover& Hover::SetTime(const int64_t value) {
  AddMetric("Time", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Hover& Hover::SetContext(const int64_t value) {
  AddMetric("Context", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Hover& Hover::SetTimeSinceSessionStart(const int64_t value) {
  AddMetric("TimeSinceSessionStart", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Hover& Hover::SetSessionId(const int64_t value) {
  AddMetric("SessionId", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Drag::Drag() :
  ::metrics::structured::Event("DevTools",
                               "Drag",
                               false) {}
Drag::~Drag() = default;

Drag& Drag::SetVeId(const int64_t value) {
  AddMetric("VeId", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Drag& Drag::SetDistance(const int64_t value) {
  AddMetric("Distance", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Drag& Drag::SetContext(const int64_t value) {
  AddMetric("Context", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Drag& Drag::SetTimeSinceSessionStart(const int64_t value) {
  AddMetric("TimeSinceSessionStart", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Drag& Drag::SetSessionId(const int64_t value) {
  AddMetric("SessionId", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Change::Change() :
  ::metrics::structured::Event("DevTools",
                               "Change",
                               false) {}
Change::~Change() = default;

Change& Change::SetVeId(const int64_t value) {
  AddMetric("VeId", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Change& Change::SetContext(const int64_t value) {
  AddMetric("Context", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Change& Change::SetTimeSinceSessionStart(const int64_t value) {
  AddMetric("TimeSinceSessionStart", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Change& Change::SetSessionId(const int64_t value) {
  AddMetric("SessionId", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

KeyDown::KeyDown() :
  ::metrics::structured::Event("DevTools",
                               "KeyDown",
                               false) {}
KeyDown::~KeyDown() = default;

KeyDown& KeyDown::SetVeId(const int64_t value) {
  AddMetric("VeId", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

KeyDown& KeyDown::SetContext(const int64_t value) {
  AddMetric("Context", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

KeyDown& KeyDown::SetTimeSinceSessionStart(const int64_t value) {
  AddMetric("TimeSinceSessionStart", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

KeyDown& KeyDown::SetSessionId(const int64_t value) {
  AddMetric("SessionId", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

}  // namespace dev_tools

namespace test_project_one {

TestEventOne::TestEventOne() :
  ::metrics::structured::Event("TestProjectOne",
                               "TestEventOne",
                               false) {}
TestEventOne::~TestEventOne() = default;

TestEventOne& TestEventOne::SetTestMetricOne(const std::string& value) {
  AddMetric("TestMetricOne", Event::MetricType::kHmac,
            base::Value(value));
  return *this;
}

TestEventOne& TestEventOne::SetTestMetricTwo(const int64_t value) {
  AddMetric("TestMetricTwo", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

}  // namespace test_project_one

namespace test_project_two {

TestEventThree::TestEventThree() :
  ::metrics::structured::Event("TestProjectTwo",
                               "TestEventThree",
                               false) {}
TestEventThree::~TestEventThree() = default;

TestEventThree& TestEventThree::SetTestMetricFour(const std::string& value) {
  AddMetric("TestMetricFour", Event::MetricType::kHmac,
            base::Value(value));
  return *this;
}

TestEventTwo::TestEventTwo() :
  ::metrics::structured::Event("TestProjectTwo",
                               "TestEventTwo",
                               false) {}
TestEventTwo::~TestEventTwo() = default;

TestEventTwo& TestEventTwo::SetTestMetricThree(const std::string& value) {
  AddMetric("TestMetricThree", Event::MetricType::kHmac,
            base::Value(value));
  return *this;
}

}  // namespace test_project_two

namespace test_project_three {

TestEventFour::TestEventFour() :
  ::metrics::structured::Event("TestProjectThree",
                               "TestEventFour",
                               false) {}
TestEventFour::~TestEventFour() = default;

TestEventFour& TestEventFour::SetTestMetricFour(const int64_t value) {
  AddMetric("TestMetricFour", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

}  // namespace test_project_three

namespace test_project_four {

TestEventFive::TestEventFive() :
  ::metrics::structured::Event("TestProjectFour",
                               "TestEventFive",
                               false) {}
TestEventFive::~TestEventFive() = default;

TestEventFive& TestEventFive::SetTestMetricFive(const std::string& value) {
  AddMetric("TestMetricFive", Event::MetricType::kHmac,
            base::Value(value));
  return *this;
}

}  // namespace test_project_four

namespace test_project_five {

TestEventSix::TestEventSix() :
  ::metrics::structured::Event("TestProjectFive",
                               "TestEventSix",
                               false) {}
TestEventSix::~TestEventSix() = default;

TestEventSix& TestEventSix::SetTestMetricSix(const std::string& value) {
  AddMetric("TestMetricSix", Event::MetricType::kRawString,
            base::Value(value));
  return *this;
}

}  // namespace test_project_five

namespace test_project_six {

TestEventSeven::TestEventSeven() :
  ::metrics::structured::Event("TestProjectSix",
                               "TestEventSeven",
                               false) {}
TestEventSeven::~TestEventSeven() = default;

TestEventSeven& TestEventSeven::SetTestMetricSeven(const double value) {
  AddMetric("TestMetricSeven", Event::MetricType::kDouble,
            base::Value(value));
  return *this;
}

TestEnum::TestEnum() :
  ::metrics::structured::Event("TestProjectSix",
                               "TestEnum",
                               false) {}
TestEnum::~TestEnum() = default;

TestEnum& TestEnum::SetTestEnumMetric(const Enum1 value) {
  AddMetric("TestEnumMetric", Event::MetricType::kInt,
            base::Value((int) value));
  return *this;
}

}  // namespace test_project_six

namespace test_project_seven {

TestEventEight::TestEventEight() :
  ::metrics::structured::Event("TestProjectSeven",
                               "TestEventEight",
                               false) {}
TestEventEight::~TestEventEight() = default;

TestEventEight& TestEventEight::SetTestMetricEight(const double value) {
  AddMetric("TestMetricEight", Event::MetricType::kDouble,
            base::Value(value));
  return *this;
}

}  // namespace test_project_seven


}  // namespace v2
}  // namespace events
}  // namespace structured
}  // namespace metrics