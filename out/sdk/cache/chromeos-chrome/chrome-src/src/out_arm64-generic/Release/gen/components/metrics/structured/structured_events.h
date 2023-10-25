
// Generated from gen_events.py. DO NOT EDIT!
// source: structured.xml

#ifndef METRICS_STRUCTURED_STRUCTURED_EVENTS_H
#define METRICS_STRUCTURED_STRUCTURED_EVENTS_H

#include <cstdint>
#include <string>

#include "components/metrics/structured/event.h"

namespace metrics {
namespace structured {
namespace events {
namespace v2 {

namespace fast_pair {

class DiscoveryNotificationShown final : public ::metrics::structured::Event {
 public:
  DiscoveryNotificationShown();
  ~DiscoveryNotificationShown() override;

    DiscoveryNotificationShown& SetProtocol(const int64_t value);
  DiscoveryNotificationShown& SetFastPairVersion(const int64_t value);
  DiscoveryNotificationShown& SetModelId(const int64_t value);
  DiscoveryNotificationShown& SetRSSI(const int64_t value);
  DiscoveryNotificationShown& SetTxPower(const int64_t value);
};

class PairingStart final : public ::metrics::structured::Event {
 public:
  PairingStart();
  ~PairingStart() override;

    PairingStart& SetProtocol(const int64_t value);
  PairingStart& SetFastPairVersion(const int64_t value);
  PairingStart& SetModelId(const int64_t value);
  PairingStart& SetRSSI(const int64_t value);
  PairingStart& SetTxPower(const int64_t value);
};

class PairingComplete final : public ::metrics::structured::Event {
 public:
  PairingComplete();
  ~PairingComplete() override;

    PairingComplete& SetProtocol(const int64_t value);
  PairingComplete& SetFastPairVersion(const int64_t value);
  PairingComplete& SetModelId(const int64_t value);
  PairingComplete& SetRSSI(const int64_t value);
  PairingComplete& SetTxPower(const int64_t value);
};

class PairFailure final : public ::metrics::structured::Event {
 public:
  PairFailure();
  ~PairFailure() override;

    PairFailure& SetProtocol(const int64_t value);
  PairFailure& SetFastPairVersion(const int64_t value);
  PairFailure& SetReason(const int64_t value);
  PairFailure& SetModelId(const int64_t value);
};

}  // namespace fast_pair

namespace hindsight {

class CrOSActionEvent_FileOpened final : public ::metrics::structured::Event {
 public:
  CrOSActionEvent_FileOpened();
  ~CrOSActionEvent_FileOpened() override;

    CrOSActionEvent_FileOpened& SetFilename(const std::string& value);
  CrOSActionEvent_FileOpened& SetOpenType(const int64_t value);
  CrOSActionEvent_FileOpened& SetSequenceId(const int64_t value);
  CrOSActionEvent_FileOpened& SetTimeSinceLastAction(const int64_t value);
};

class CrOSActionEvent_SearchResultLaunched final : public ::metrics::structured::Event {
 public:
  CrOSActionEvent_SearchResultLaunched();
  ~CrOSActionEvent_SearchResultLaunched() override;

    CrOSActionEvent_SearchResultLaunched& SetQuery(const std::string& value);
  CrOSActionEvent_SearchResultLaunched& SetResultType(const int64_t value);
  CrOSActionEvent_SearchResultLaunched& SetSearchResultId(const std::string& value);
  CrOSActionEvent_SearchResultLaunched& SetSequenceId(const int64_t value);
  CrOSActionEvent_SearchResultLaunched& SetTimeSinceLastAction(const int64_t value);
};

class CrOSActionEvent_SettingChanged final : public ::metrics::structured::Event {
 public:
  CrOSActionEvent_SettingChanged();
  ~CrOSActionEvent_SettingChanged() override;

    CrOSActionEvent_SettingChanged& SetCurrentValue(const int64_t value);
  CrOSActionEvent_SettingChanged& SetPreviousValue(const int64_t value);
  CrOSActionEvent_SettingChanged& SetSequenceId(const int64_t value);
  CrOSActionEvent_SettingChanged& SetSettingId(const int64_t value);
  CrOSActionEvent_SettingChanged& SetSettingType(const int64_t value);
  CrOSActionEvent_SettingChanged& SetTimeSinceLastAction(const int64_t value);
};

class CrOSActionEvent_TabEvent_TabNavigated final : public ::metrics::structured::Event {
 public:
  CrOSActionEvent_TabEvent_TabNavigated();
  ~CrOSActionEvent_TabEvent_TabNavigated() override;

    CrOSActionEvent_TabEvent_TabNavigated& SetPageTransition(const int64_t value);
  CrOSActionEvent_TabEvent_TabNavigated& SetSequenceId(const int64_t value);
  CrOSActionEvent_TabEvent_TabNavigated& SetTimeSinceLastAction(const int64_t value);
  CrOSActionEvent_TabEvent_TabNavigated& SetURL(const std::string& value);
  CrOSActionEvent_TabEvent_TabNavigated& SetVisibility(const int64_t value);
};

class CrOSActionEvent_TabEvent_TabOpened final : public ::metrics::structured::Event {
 public:
  CrOSActionEvent_TabEvent_TabOpened();
  ~CrOSActionEvent_TabEvent_TabOpened() override;

    CrOSActionEvent_TabEvent_TabOpened& SetSequenceId(const int64_t value);
  CrOSActionEvent_TabEvent_TabOpened& SetTimeSinceLastAction(const int64_t value);
  CrOSActionEvent_TabEvent_TabOpened& SetURL(const std::string& value);
  CrOSActionEvent_TabEvent_TabOpened& SetURLOpened(const std::string& value);
  CrOSActionEvent_TabEvent_TabOpened& SetWindowOpenDisposition(const int64_t value);
};

class CrOSActionEvent_TabEvent_TabReactivated final : public ::metrics::structured::Event {
 public:
  CrOSActionEvent_TabEvent_TabReactivated();
  ~CrOSActionEvent_TabEvent_TabReactivated() override;

    CrOSActionEvent_TabEvent_TabReactivated& SetSequenceId(const int64_t value);
  CrOSActionEvent_TabEvent_TabReactivated& SetTimeSinceLastAction(const int64_t value);
  CrOSActionEvent_TabEvent_TabReactivated& SetURL(const std::string& value);
};

}  // namespace hindsight

namespace launcher_usage {

class LauncherUsage final : public ::metrics::structured::Event {
 public:
  LauncherUsage();
  ~LauncherUsage() override;

    LauncherUsage& SetApp(const std::string& value);
  LauncherUsage& SetDomain(const std::string& value);
  LauncherUsage& SetHour(const int64_t value);
  LauncherUsage& SetProviderType(const int64_t value);
  LauncherUsage& SetScore(const int64_t value);
  LauncherUsage& SetSearchQuery(const std::string& value);
  LauncherUsage& SetSearchQueryLength(const int64_t value);
  LauncherUsage& SetTarget(const std::string& value);
};

}  // namespace launcher_usage

namespace structured_metrics {

class Initialization final : public ::metrics::structured::Event {
 public:
  Initialization();
  ~Initialization() override;

    Initialization& SetPlatform(const int64_t value);
};

}  // namespace structured_metrics

namespace cr_os_events {

class AppDiscovery_AppInstalled final : public ::metrics::structured::Event {
 public:
  AppDiscovery_AppInstalled();
  ~AppDiscovery_AppInstalled() override;

    AppDiscovery_AppInstalled& SetAppId(const std::string& value);
  AppDiscovery_AppInstalled& SetAppType(const int64_t value);
  AppDiscovery_AppInstalled& SetInstallSource(const int64_t value);
  AppDiscovery_AppInstalled& SetInstallReason(const int64_t value);
};

class AppDiscovery_AppLaunched final : public ::metrics::structured::Event {
 public:
  AppDiscovery_AppLaunched();
  ~AppDiscovery_AppLaunched() override;

    AppDiscovery_AppLaunched& SetAppId(const std::string& value);
  AppDiscovery_AppLaunched& SetAppType(const int64_t value);
  AppDiscovery_AppLaunched& SetLaunchSource(const int64_t value);
};

class AppDiscovery_AppUninstall final : public ::metrics::structured::Event {
 public:
  AppDiscovery_AppUninstall();
  ~AppDiscovery_AppUninstall() override;

    AppDiscovery_AppUninstall& SetAppId(const std::string& value);
  AppDiscovery_AppUninstall& SetAppType(const int64_t value);
  AppDiscovery_AppUninstall& SetUninstallSource(const int64_t value);
};

class AppDiscovery_AppStateChanged final : public ::metrics::structured::Event {
 public:
  AppDiscovery_AppStateChanged();
  ~AppDiscovery_AppStateChanged() override;

    AppDiscovery_AppStateChanged& SetAppId(const std::string& value);
  AppDiscovery_AppStateChanged& SetAppState(const int64_t value);
};

class AppDiscovery_LauncherOpen final : public ::metrics::structured::Event {
 public:
  AppDiscovery_LauncherOpen();
  ~AppDiscovery_LauncherOpen() override;

  };

class AppDiscovery_AppLauncherResultOpened final : public ::metrics::structured::Event {
 public:
  AppDiscovery_AppLauncherResultOpened();
  ~AppDiscovery_AppLauncherResultOpened() override;

    AppDiscovery_AppLauncherResultOpened& SetFuzzyStringMatch(const double value);
  AppDiscovery_AppLauncherResultOpened& SetAppId(const std::string& value);
  AppDiscovery_AppLauncherResultOpened& SetAppName(const std::string& value);
  AppDiscovery_AppLauncherResultOpened& SetResultCategory(const int64_t value);
};

class AppDiscovery_Browser_OmniboxInstallIconClicked final : public ::metrics::structured::Event {
 public:
  AppDiscovery_Browser_OmniboxInstallIconClicked();
  ~AppDiscovery_Browser_OmniboxInstallIconClicked() override;

    AppDiscovery_Browser_OmniboxInstallIconClicked& SetIPHShown(const int64_t value);
};

class AppDiscovery_Browser_AppInstallDialogShown final : public ::metrics::structured::Event {
 public:
  AppDiscovery_Browser_AppInstallDialogShown();
  ~AppDiscovery_Browser_AppInstallDialogShown() override;

    AppDiscovery_Browser_AppInstallDialogShown& SetAppId(const std::string& value);
};

class AppDiscovery_Browser_AppInstallDialogResult final : public ::metrics::structured::Event {
 public:
  AppDiscovery_Browser_AppInstallDialogResult();
  ~AppDiscovery_Browser_AppInstallDialogResult() override;

    AppDiscovery_Browser_AppInstallDialogResult& SetWebAppInstallStatus(const int64_t value);
  AppDiscovery_Browser_AppInstallDialogResult& SetAppId(const std::string& value);
};

class AppDiscovery_Browser_ClickInstallAppFromMenu final : public ::metrics::structured::Event {
 public:
  AppDiscovery_Browser_ClickInstallAppFromMenu();
  ~AppDiscovery_Browser_ClickInstallAppFromMenu() override;

    AppDiscovery_Browser_ClickInstallAppFromMenu& SetAppId(const std::string& value);
};

class AppDiscovery_Browser_CreateShortcut final : public ::metrics::structured::Event {
 public:
  AppDiscovery_Browser_CreateShortcut();
  ~AppDiscovery_Browser_CreateShortcut() override;

    AppDiscovery_Browser_CreateShortcut& SetAppId(const std::string& value);
};

class UserLogin final : public ::metrics::structured::Event {
 public:
  UserLogin();
  ~UserLogin() override;

  };

class UserLogout final : public ::metrics::structured::Event {
 public:
  UserLogout();
  ~UserLogout() override;

  };

class SystemSuspended final : public ::metrics::structured::Event {
 public:
  SystemSuspended();
  ~SystemSuspended() override;

    SystemSuspended& SetReason(const int64_t value);
};

class Test1 final : public ::metrics::structured::Event {
 public:
  Test1();
  ~Test1() override;

    Test1& SetMetric1(const double value);
};

class NoMetricsEvent final : public ::metrics::structured::Event {
 public:
  NoMetricsEvent();
  ~NoMetricsEvent() override;

  };

}  // namespace cr_os_events

namespace test_project_one {

class TestEventOne final : public ::metrics::structured::Event {
 public:
  TestEventOne();
  ~TestEventOne() override;

    TestEventOne& SetTestMetricOne(const std::string& value);
  TestEventOne& SetTestMetricTwo(const int64_t value);
};

}  // namespace test_project_one

namespace test_project_two {

class TestEventThree final : public ::metrics::structured::Event {
 public:
  TestEventThree();
  ~TestEventThree() override;

    TestEventThree& SetTestMetricFour(const std::string& value);
};

class TestEventTwo final : public ::metrics::structured::Event {
 public:
  TestEventTwo();
  ~TestEventTwo() override;

    TestEventTwo& SetTestMetricThree(const std::string& value);
};

}  // namespace test_project_two

namespace test_project_three {

class TestEventFour final : public ::metrics::structured::Event {
 public:
  TestEventFour();
  ~TestEventFour() override;

    TestEventFour& SetTestMetricFour(const int64_t value);
};

}  // namespace test_project_three

namespace test_project_four {

class TestEventFive final : public ::metrics::structured::Event {
 public:
  TestEventFive();
  ~TestEventFive() override;

    TestEventFive& SetTestMetricFive(const std::string& value);
};

}  // namespace test_project_four

namespace test_project_five {

class TestEventSix final : public ::metrics::structured::Event {
 public:
  TestEventSix();
  ~TestEventSix() override;

    TestEventSix& SetTestMetricSix(const std::string& value);
};

}  // namespace test_project_five

namespace test_project_six {

class TestEventSeven final : public ::metrics::structured::Event {
 public:
  TestEventSeven();
  ~TestEventSeven() override;

    TestEventSeven& SetTestMetricSeven(const double value);
};

}  // namespace test_project_six



}  // namespace v2
}  // namespace events
}  // namespace structured
}  // namespace metrics

#endif  // METRICS_STRUCTURED_STRUCTURED_EVENTS_H