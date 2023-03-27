// Generated from gen_events.py. DO NOT EDIT!
// source: structured.xml

#include "components/metrics/structured/structured_events.h"

#include "base/strings/string_number_conversions.h"
#include "base/values.h"

namespace metrics {
namespace structured {
namespace events {
namespace v2 {

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

namespace neutrino_devices {

ClientIdChanged::ClientIdChanged() :
  ::metrics::structured::Event("NeutrinoDevices",
                               "ClientIdChanged",
                               false) {}
ClientIdChanged::~ClientIdChanged() = default;

ClientIdChanged& ClientIdChanged::SetInitialClientId(const std::string& value) {
  AddMetric("InitialClientId", Event::MetricType::kHmac,
            base::Value(value));
  return *this;
}

ClientIdChanged& ClientIdChanged::SetFinalClientId(const std::string& value) {
  AddMetric("FinalClientId", Event::MetricType::kHmac,
            base::Value(value));
  return *this;
}

ClientIdChanged& ClientIdChanged::SetLog2TimeSinceInstallation(const int64_t value) {
  AddMetric("Log2TimeSinceInstallation", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

ClientIdChanged& ClientIdChanged::SetLog2TimeSinceMetricsEnabled(const int64_t value) {
  AddMetric("Log2TimeSinceMetricsEnabled", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

ClientIdChanged& ClientIdChanged::SetLocation(const int64_t value) {
  AddMetric("Location", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

ClientIdChanged& ClientIdChanged::SetDaysSinceKeyRotation(const int64_t value) {
  AddMetric("DaysSinceKeyRotation", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

ClientIdCleared::ClientIdCleared() :
  ::metrics::structured::Event("NeutrinoDevices",
                               "ClientIdCleared",
                               false) {}
ClientIdCleared::~ClientIdCleared() = default;

ClientIdCleared& ClientIdCleared::SetInitialClientId(const std::string& value) {
  AddMetric("InitialClientId", Event::MetricType::kHmac,
            base::Value(value));
  return *this;
}

ClientIdCleared& ClientIdCleared::SetLog2TimeSinceInstallation(const int64_t value) {
  AddMetric("Log2TimeSinceInstallation", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

ClientIdCleared& ClientIdCleared::SetLog2TimeSinceMetricsEnabled(const int64_t value) {
  AddMetric("Log2TimeSinceMetricsEnabled", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Enrollment::Enrollment() :
  ::metrics::structured::Event("NeutrinoDevices",
                               "Enrollment",
                               false) {}
Enrollment::~Enrollment() = default;

Enrollment& Enrollment::SetClientId(const std::string& value) {
  AddMetric("ClientId", Event::MetricType::kHmac,
            base::Value(value));
  return *this;
}

Enrollment& Enrollment::SetLocation(const int64_t value) {
  AddMetric("Location", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Enrollment& Enrollment::SetIsManagedDevice(const int64_t value) {
  AddMetric("IsManagedDevice", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

Enrollment& Enrollment::SetIsManagedPolicy(const int64_t value) {
  AddMetric("IsManagedPolicy", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

CodePoint::CodePoint() :
  ::metrics::structured::Event("NeutrinoDevices",
                               "CodePoint",
                               false) {}
CodePoint::~CodePoint() = default;

CodePoint& CodePoint::SetClientId(const std::string& value) {
  AddMetric("ClientId", Event::MetricType::kHmac,
            base::Value(value));
  return *this;
}

CodePoint& CodePoint::SetLocation(const int64_t value) {
  AddMetric("Location", Event::MetricType::kLong,
            base::Value(base::NumberToString(value)));
  return *this;
}

}  // namespace neutrino_devices

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

}  // namespace test_project_six


}  // namespace v2
}  // namespace events
}  // namespace structured
}  // namespace metrics