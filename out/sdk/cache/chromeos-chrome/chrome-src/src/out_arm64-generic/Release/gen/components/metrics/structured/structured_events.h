
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

namespace popular_displays {

class MonitorInfo final : public ::metrics::structured::Event {
 public:
  MonitorInfo();
  ~MonitorInfo() override;

    MonitorInfo& SetDisplayName(const std::string& value);
  MonitorInfo& SetProductCode(const std::string& value);
};

}  // namespace popular_displays

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

namespace nearby_share {

class Discovery final : public ::metrics::structured::Event {
 public:
  Discovery();
  ~Discovery() override;

    Discovery& SetPlatform(const int64_t value);
  Discovery& SetDeviceRelationship(const int64_t value);
  Discovery& SetTimeToDiscovery(const int64_t value);
};

class Throughput final : public ::metrics::structured::Event {
 public:
  Throughput();
  ~Throughput() override;

    Throughput& SetIsReceiving(const int64_t value);
  Throughput& SetPlatform(const int64_t value);
  Throughput& SetDeviceRelationship(const int64_t value);
  Throughput& SetMedium(const int64_t value);
  Throughput& SetUpdateBytes(const int64_t value);
  Throughput& SetUpdateMillis(const int64_t value);
  Throughput& SetTransferredBytes(const int64_t value);
  Throughput& SetTotalTransferBytes(const int64_t value);
};

class FileAttachment final : public ::metrics::structured::Event {
 public:
  FileAttachment();
  ~FileAttachment() override;

    FileAttachment& SetIsReceiving(const int64_t value);
  FileAttachment& SetPlatform(const int64_t value);
  FileAttachment& SetDeviceRelationship(const int64_t value);
  FileAttachment& SetFileType(const int64_t value);
  FileAttachment& SetSize(const int64_t value);
  FileAttachment& SetResult(const int64_t value);
};

class TextAttachment final : public ::metrics::structured::Event {
 public:
  TextAttachment();
  ~TextAttachment() override;

    TextAttachment& SetIsReceiving(const int64_t value);
  TextAttachment& SetPlatform(const int64_t value);
  TextAttachment& SetDeviceRelationship(const int64_t value);
  TextAttachment& SetTextType(const int64_t value);
  TextAttachment& SetSize(const int64_t value);
  TextAttachment& SetResult(const int64_t value);
};

class ShareSession final : public ::metrics::structured::Event {
 public:
  ShareSession();
  ~ShareSession() override;

    ShareSession& SetIsReceiving(const int64_t value);
  ShareSession& SetPlatform(const int64_t value);
  ShareSession& SetDeviceRelationship(const int64_t value);
  ShareSession& SetTimeToDiscovery(const int64_t value);
  ShareSession& SetTimeToSelect(const int64_t value);
  ShareSession& SetTimeToConnect(const int64_t value);
  ShareSession& SetTimeToAccept(const int64_t value);
  ShareSession& SetTimeToTransferComplete(const int64_t value);
  ShareSession& SetInitialMedium(const int64_t value);
  ShareSession& SetTimeToUpgrade(const int64_t value);
  ShareSession& SetFinalMedium(const int64_t value);
  ShareSession& SetNumberOfFiles(const int64_t value);
  ShareSession& SetNumberOfTexts(const int64_t value);
  ShareSession& SetNumberOfWiFiCredentials(const int64_t value);
  ShareSession& SetTotalTransferBytes(const int64_t value);
  ShareSession& SetBytesTransferred(const int64_t value);
  ShareSession& SetResult(const int64_t value);
};

}  // namespace nearby_share

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

class OOBE_GaiaSigninRequested final : public ::metrics::structured::Event {
 public:
  OOBE_GaiaSigninRequested();
  ~OOBE_GaiaSigninRequested() override;

    OOBE_GaiaSigninRequested& SetIsReauthentication(const int64_t value);
  OOBE_GaiaSigninRequested& SetIsFlexFlow(const int64_t value);
  OOBE_GaiaSigninRequested& SetIsDemoModeFlow(const int64_t value);
  OOBE_GaiaSigninRequested& SetIsOwnerUser(const int64_t value);
  OOBE_GaiaSigninRequested& SetIsEphemeralOrMGS(const int64_t value);
  OOBE_GaiaSigninRequested& SetIsFirstOnboarding(const int64_t value);
  OOBE_GaiaSigninRequested& SetChromeMilestone(const int64_t value);
};

class OOBE_GaiaSigninCompleted final : public ::metrics::structured::Event {
 public:
  OOBE_GaiaSigninCompleted();
  ~OOBE_GaiaSigninCompleted() override;

    OOBE_GaiaSigninCompleted& SetIsReauthentication(const int64_t value);
  OOBE_GaiaSigninCompleted& SetIsFlexFlow(const int64_t value);
  OOBE_GaiaSigninCompleted& SetIsDemoModeFlow(const int64_t value);
  OOBE_GaiaSigninCompleted& SetIsOwnerUser(const int64_t value);
  OOBE_GaiaSigninCompleted& SetIsEphemeralOrMGS(const int64_t value);
  OOBE_GaiaSigninCompleted& SetIsFirstOnboarding(const int64_t value);
  OOBE_GaiaSigninCompleted& SetChromeMilestone(const int64_t value);
};

class OOBE_OobeStarted final : public ::metrics::structured::Event {
 public:
  OOBE_OobeStarted();
  ~OOBE_OobeStarted() override;

    OOBE_OobeStarted& SetIsFlexFlow(const int64_t value);
  OOBE_OobeStarted& SetChromeMilestone(const int64_t value);
};

class OOBE_PreLoginOobeCompleted final : public ::metrics::structured::Event {
 public:
  OOBE_PreLoginOobeCompleted();
  ~OOBE_PreLoginOobeCompleted() override;

    OOBE_PreLoginOobeCompleted& SetCompletedFlowType(const int64_t value);
  OOBE_PreLoginOobeCompleted& SetIsFlexFlow(const int64_t value);
  OOBE_PreLoginOobeCompleted& SetIsDemoModeFlow(const int64_t value);
  OOBE_PreLoginOobeCompleted& SetChromeMilestone(const int64_t value);
};

class OOBE_DeviceRegistered final : public ::metrics::structured::Event {
 public:
  OOBE_DeviceRegistered();
  ~OOBE_DeviceRegistered() override;

    OOBE_DeviceRegistered& SetIsFirstOnboarding(const int64_t value);
  OOBE_DeviceRegistered& SetIsFlexFlow(const int64_t value);
  OOBE_DeviceRegistered& SetIsDemoModeFlow(const int64_t value);
  OOBE_DeviceRegistered& SetChromeMilestone(const int64_t value);
};

class OOBE_OobeCompleted final : public ::metrics::structured::Event {
 public:
  OOBE_OobeCompleted();
  ~OOBE_OobeCompleted() override;

    OOBE_OobeCompleted& SetIsFlexFlow(const int64_t value);
  OOBE_OobeCompleted& SetIsDemoModeFlow(const int64_t value);
  OOBE_OobeCompleted& SetIsOwnerUser(const int64_t value);
  OOBE_OobeCompleted& SetIsEphemeralOrMGS(const int64_t value);
  OOBE_OobeCompleted& SetIsFirstOnboarding(const int64_t value);
  OOBE_OobeCompleted& SetChromeMilestone(const int64_t value);
};

class OOBE_OnboardingStarted final : public ::metrics::structured::Event {
 public:
  OOBE_OnboardingStarted();
  ~OOBE_OnboardingStarted() override;

    OOBE_OnboardingStarted& SetIsFlexFlow(const int64_t value);
  OOBE_OnboardingStarted& SetIsDemoModeFlow(const int64_t value);
  OOBE_OnboardingStarted& SetIsOwnerUser(const int64_t value);
  OOBE_OnboardingStarted& SetIsEphemeralOrMGS(const int64_t value);
  OOBE_OnboardingStarted& SetIsFirstOnboarding(const int64_t value);
  OOBE_OnboardingStarted& SetChromeMilestone(const int64_t value);
};

class OOBE_OnboardingCompleted final : public ::metrics::structured::Event {
 public:
  OOBE_OnboardingCompleted();
  ~OOBE_OnboardingCompleted() override;

    OOBE_OnboardingCompleted& SetIsFlexFlow(const int64_t value);
  OOBE_OnboardingCompleted& SetIsDemoModeFlow(const int64_t value);
  OOBE_OnboardingCompleted& SetIsOwnerUser(const int64_t value);
  OOBE_OnboardingCompleted& SetIsEphemeralOrMGS(const int64_t value);
  OOBE_OnboardingCompleted& SetIsFirstOnboarding(const int64_t value);
  OOBE_OnboardingCompleted& SetChromeMilestone(const int64_t value);
};

class OOBE_PageEntered final : public ::metrics::structured::Event {
 public:
  OOBE_PageEntered();
  ~OOBE_PageEntered() override;

    OOBE_PageEntered& SetPageId(const std::string& value);
  OOBE_PageEntered& SetIsFlexFlow(const int64_t value);
  OOBE_PageEntered& SetIsDemoModeFlow(const int64_t value);
  OOBE_PageEntered& SetIsOwnerUser(const int64_t value);
  OOBE_PageEntered& SetIsEphemeralOrMGS(const int64_t value);
  OOBE_PageEntered& SetIsFirstOnboarding(const int64_t value);
  OOBE_PageEntered& SetChromeMilestone(const int64_t value);
};

class OOBE_PageSkippedBySystem final : public ::metrics::structured::Event {
 public:
  OOBE_PageSkippedBySystem();
  ~OOBE_PageSkippedBySystem() override;

    OOBE_PageSkippedBySystem& SetPageId(const std::string& value);
  OOBE_PageSkippedBySystem& SetIsFlexFlow(const int64_t value);
  OOBE_PageSkippedBySystem& SetIsDemoModeFlow(const int64_t value);
  OOBE_PageSkippedBySystem& SetIsOwnerUser(const int64_t value);
  OOBE_PageSkippedBySystem& SetIsEphemeralOrMGS(const int64_t value);
  OOBE_PageSkippedBySystem& SetIsFirstOnboarding(const int64_t value);
  OOBE_PageSkippedBySystem& SetChromeMilestone(const int64_t value);
};

class OOBE_PageLeft final : public ::metrics::structured::Event {
 public:
  OOBE_PageLeft();
  ~OOBE_PageLeft() override;

    OOBE_PageLeft& SetPageId(const std::string& value);
  OOBE_PageLeft& SetExitReason(const std::string& value);
  OOBE_PageLeft& SetIsFlexFlow(const int64_t value);
  OOBE_PageLeft& SetIsDemoModeFlow(const int64_t value);
  OOBE_PageLeft& SetIsOwnerUser(const int64_t value);
  OOBE_PageLeft& SetIsEphemeralOrMGS(const int64_t value);
  OOBE_PageLeft& SetIsFirstOnboarding(const int64_t value);
  OOBE_PageLeft& SetChromeMilestone(const int64_t value);
};

class OOBE_PreLoginOobeResumed final : public ::metrics::structured::Event {
 public:
  OOBE_PreLoginOobeResumed();
  ~OOBE_PreLoginOobeResumed() override;

    OOBE_PreLoginOobeResumed& SetPendingPageId(const std::string& value);
  OOBE_PreLoginOobeResumed& SetExitReason(const std::string& value);
  OOBE_PreLoginOobeResumed& SetIsFlexFlow(const int64_t value);
  OOBE_PreLoginOobeResumed& SetIsDemoModeFlow(const int64_t value);
  OOBE_PreLoginOobeResumed& SetIsOwnerUser(const int64_t value);
  OOBE_PreLoginOobeResumed& SetIsEphemeralOrMGS(const int64_t value);
  OOBE_PreLoginOobeResumed& SetIsFirstOnboarding(const int64_t value);
  OOBE_PreLoginOobeResumed& SetChromeMilestone(const int64_t value);
};

class OOBE_OnboardingResumed final : public ::metrics::structured::Event {
 public:
  OOBE_OnboardingResumed();
  ~OOBE_OnboardingResumed() override;

    OOBE_OnboardingResumed& SetPendingPageId(const std::string& value);
  OOBE_OnboardingResumed& SetExitReason(const std::string& value);
  OOBE_OnboardingResumed& SetIsFlexFlow(const int64_t value);
  OOBE_OnboardingResumed& SetIsDemoModeFlow(const int64_t value);
  OOBE_OnboardingResumed& SetIsOwnerUser(const int64_t value);
  OOBE_OnboardingResumed& SetIsEphemeralOrMGS(const int64_t value);
  OOBE_OnboardingResumed& SetIsFirstOnboarding(const int64_t value);
  OOBE_OnboardingResumed& SetChromeMilestone(const int64_t value);
};

class OOBE_ChoobeResumed final : public ::metrics::structured::Event {
 public:
  OOBE_ChoobeResumed();
  ~OOBE_ChoobeResumed() override;

    OOBE_ChoobeResumed& SetExitReason(const std::string& value);
  OOBE_ChoobeResumed& SetIsFlexFlow(const int64_t value);
  OOBE_ChoobeResumed& SetIsDemoModeFlow(const int64_t value);
  OOBE_ChoobeResumed& SetIsOwnerUser(const int64_t value);
  OOBE_ChoobeResumed& SetIsEphemeralOrMGS(const int64_t value);
  OOBE_ChoobeResumed& SetIsFirstOnboarding(const int64_t value);
  OOBE_ChoobeResumed& SetChromeMilestone(const int64_t value);
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

namespace dev_tools {

class SessionStart final : public ::metrics::structured::Event {
 public:
  SessionStart();
  ~SessionStart() override;

    SessionStart& SetTrigger(const int64_t value);
  SessionStart& SetDockSide(const int64_t value);
  SessionStart& SetSessionId(const int64_t value);
};

class SessionEnd final : public ::metrics::structured::Event {
 public:
  SessionEnd();
  ~SessionEnd() override;

    SessionEnd& SetTrigger(const int64_t value);
  SessionEnd& SetTimeSinceLastAction(const int64_t value);
  SessionEnd& SetSessionId(const int64_t value);
};

class Impression final : public ::metrics::structured::Event {
 public:
  Impression();
  ~Impression() override;

    Impression& SetVeId(const int64_t value);
  Impression& SetVeType(const int64_t value);
  Impression& SetVeParent(const int64_t value);
  Impression& SetVeContext(const int64_t value);
  Impression& SetTimeSinceLastAction(const int64_t value);
  Impression& SetSessionId(const int64_t value);
};

class Click final : public ::metrics::structured::Event {
 public:
  Click();
  ~Click() override;

    Click& SetVeId(const int64_t value);
  Click& SetMouseButton(const int64_t value);
  Click& SetContext(const int64_t value);
  Click& SetTimeSinceLastAction(const int64_t value);
  Click& SetSessionId(const int64_t value);
};

class Hover final : public ::metrics::structured::Event {
 public:
  Hover();
  ~Hover() override;

    Hover& SetVeId(const int64_t value);
  Hover& SetTime(const int64_t value);
  Hover& SetContext(const int64_t value);
  Hover& SetTimeSinceLastAction(const int64_t value);
  Hover& SetSessionId(const int64_t value);
};

class Drag final : public ::metrics::structured::Event {
 public:
  Drag();
  ~Drag() override;

    Drag& SetVeId(const int64_t value);
  Drag& SetDistance(const int64_t value);
  Drag& SetContext(const int64_t value);
  Drag& SetTimeSinceLastAction(const int64_t value);
  Drag& SetSessionId(const int64_t value);
};

class Change final : public ::metrics::structured::Event {
 public:
  Change();
  ~Change() override;

    Change& SetVeId(const int64_t value);
  Change& SetContext(const int64_t value);
  Change& SetTimeSinceLastAction(const int64_t value);
  Change& SetSessionId(const int64_t value);
};

class KeyDown final : public ::metrics::structured::Event {
 public:
  KeyDown();
  ~KeyDown() override;

    KeyDown& SetVeId(const int64_t value);
  KeyDown& SetContext(const int64_t value);
  KeyDown& SetTimeSinceLastAction(const int64_t value);
  KeyDown& SetSessionId(const int64_t value);
};

}  // namespace dev_tools

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

namespace test_project_seven {

class TestEventEight final : public ::metrics::structured::Event {
 public:
  TestEventEight();
  ~TestEventEight() override;

    TestEventEight& SetTestMetricEight(const double value);
};

}  // namespace test_project_seven



}  // namespace v2
}  // namespace events
}  // namespace structured
}  // namespace metrics

#endif  // METRICS_STRUCTURED_STRUCTURED_EVENTS_H