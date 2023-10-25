// Generated from gen_validator.py. DO NOT EDIT!
// source: structured.xml

#include "components/metrics/structured/structured_metrics_validator.h"

#include <cstdint>
#include <string>

#include "components/metrics/structured/enums.h"
#include "components/metrics/structured/event.h"
#include "components/metrics/structured/event_validator.h"
#include "components/metrics/structured/project_validator.h"
#include "third_party/abseil-cpp/absl/types/optional.h"
#include "third_party/metrics_proto/structured_data.pb.h"

namespace metrics {
namespace structured {

namespace {

//---------------------EventValidator Classes----------------------------------
class DiscoveryNotificationShownEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    DiscoveryNotificationShownEventValidator();
    ~DiscoveryNotificationShownEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(9794167847225427927);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

DiscoveryNotificationShownEventValidator::DiscoveryNotificationShownEventValidator() :
  ::metrics::structured::EventValidator(DiscoveryNotificationShownEventValidator::kEventNameHash)
  {
  Initialize();
}

DiscoveryNotificationShownEventValidator::~DiscoveryNotificationShownEventValidator() = default;

void DiscoveryNotificationShownEventValidator::Initialize() {
  metric_metadata_ = {
    {"Protocol", { Event::MetricType::kLong, UINT64_C(9838808232981121206)}},
  {"FastPairVersion", { Event::MetricType::kLong, UINT64_C(7275670451123585686)}},
  {"ModelId", { Event::MetricType::kLong, UINT64_C(3121773042410042095)}},
  {"RSSI", { Event::MetricType::kLong, UINT64_C(7508615291271386745)}},
  {"TxPower", { Event::MetricType::kLong, UINT64_C(1493188836192841721)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
DiscoveryNotificationShownEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}

class PairingStartEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    PairingStartEventValidator();
    ~PairingStartEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(2342185101128577068);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

PairingStartEventValidator::PairingStartEventValidator() :
  ::metrics::structured::EventValidator(PairingStartEventValidator::kEventNameHash)
  {
  Initialize();
}

PairingStartEventValidator::~PairingStartEventValidator() = default;

void PairingStartEventValidator::Initialize() {
  metric_metadata_ = {
    {"Protocol", { Event::MetricType::kLong, UINT64_C(9838808232981121206)}},
  {"FastPairVersion", { Event::MetricType::kLong, UINT64_C(7275670451123585686)}},
  {"ModelId", { Event::MetricType::kLong, UINT64_C(3121773042410042095)}},
  {"RSSI", { Event::MetricType::kLong, UINT64_C(7508615291271386745)}},
  {"TxPower", { Event::MetricType::kLong, UINT64_C(1493188836192841721)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
PairingStartEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}

class PairingCompleteEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    PairingCompleteEventValidator();
    ~PairingCompleteEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(7548910873986616453);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

PairingCompleteEventValidator::PairingCompleteEventValidator() :
  ::metrics::structured::EventValidator(PairingCompleteEventValidator::kEventNameHash)
  {
  Initialize();
}

PairingCompleteEventValidator::~PairingCompleteEventValidator() = default;

void PairingCompleteEventValidator::Initialize() {
  metric_metadata_ = {
    {"Protocol", { Event::MetricType::kLong, UINT64_C(9838808232981121206)}},
  {"FastPairVersion", { Event::MetricType::kLong, UINT64_C(7275670451123585686)}},
  {"ModelId", { Event::MetricType::kLong, UINT64_C(3121773042410042095)}},
  {"RSSI", { Event::MetricType::kLong, UINT64_C(7508615291271386745)}},
  {"TxPower", { Event::MetricType::kLong, UINT64_C(1493188836192841721)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
PairingCompleteEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}

class PairFailureEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    PairFailureEventValidator();
    ~PairFailureEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(17174637411246838540);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

PairFailureEventValidator::PairFailureEventValidator() :
  ::metrics::structured::EventValidator(PairFailureEventValidator::kEventNameHash)
  {
  Initialize();
}

PairFailureEventValidator::~PairFailureEventValidator() = default;

void PairFailureEventValidator::Initialize() {
  metric_metadata_ = {
    {"Protocol", { Event::MetricType::kLong, UINT64_C(9838808232981121206)}},
  {"FastPairVersion", { Event::MetricType::kLong, UINT64_C(7275670451123585686)}},
  {"Reason", { Event::MetricType::kLong, UINT64_C(18445816987321669298)}},
  {"ModelId", { Event::MetricType::kLong, UINT64_C(3121773042410042095)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
PairFailureEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}
class CrOSActionEvent_FileOpenedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    CrOSActionEvent_FileOpenedEventValidator();
    ~CrOSActionEvent_FileOpenedEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(6176288366907657397);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

CrOSActionEvent_FileOpenedEventValidator::CrOSActionEvent_FileOpenedEventValidator() :
  ::metrics::structured::EventValidator(CrOSActionEvent_FileOpenedEventValidator::kEventNameHash)
  {
  Initialize();
}

CrOSActionEvent_FileOpenedEventValidator::~CrOSActionEvent_FileOpenedEventValidator() = default;

void CrOSActionEvent_FileOpenedEventValidator::Initialize() {
  metric_metadata_ = {
    {"Filename", { Event::MetricType::kHmac, UINT64_C(1391895386658060561)}},
  {"OpenType", { Event::MetricType::kLong, UINT64_C(10506272911216643482)}},
  {"SequenceId", { Event::MetricType::kLong, UINT64_C(8860601784949375835)}},
  {"TimeSinceLastAction", { Event::MetricType::kLong, UINT64_C(15150636701605912378)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
CrOSActionEvent_FileOpenedEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}

class CrOSActionEvent_SearchResultLaunchedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    CrOSActionEvent_SearchResultLaunchedEventValidator();
    ~CrOSActionEvent_SearchResultLaunchedEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(7258544623737125992);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

CrOSActionEvent_SearchResultLaunchedEventValidator::CrOSActionEvent_SearchResultLaunchedEventValidator() :
  ::metrics::structured::EventValidator(CrOSActionEvent_SearchResultLaunchedEventValidator::kEventNameHash)
  {
  Initialize();
}

CrOSActionEvent_SearchResultLaunchedEventValidator::~CrOSActionEvent_SearchResultLaunchedEventValidator() = default;

void CrOSActionEvent_SearchResultLaunchedEventValidator::Initialize() {
  metric_metadata_ = {
    {"Query", { Event::MetricType::kHmac, UINT64_C(7404398033256593499)}},
  {"ResultType", { Event::MetricType::kLong, UINT64_C(8293845286137751377)}},
  {"SearchResultId", { Event::MetricType::kHmac, UINT64_C(8748164516837068211)}},
  {"SequenceId", { Event::MetricType::kLong, UINT64_C(8860601784949375835)}},
  {"TimeSinceLastAction", { Event::MetricType::kLong, UINT64_C(15150636701605912378)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
CrOSActionEvent_SearchResultLaunchedEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}

class CrOSActionEvent_SettingChangedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    CrOSActionEvent_SettingChangedEventValidator();
    ~CrOSActionEvent_SettingChangedEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(15173432087155953262);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

CrOSActionEvent_SettingChangedEventValidator::CrOSActionEvent_SettingChangedEventValidator() :
  ::metrics::structured::EventValidator(CrOSActionEvent_SettingChangedEventValidator::kEventNameHash)
  {
  Initialize();
}

CrOSActionEvent_SettingChangedEventValidator::~CrOSActionEvent_SettingChangedEventValidator() = default;

void CrOSActionEvent_SettingChangedEventValidator::Initialize() {
  metric_metadata_ = {
    {"CurrentValue", { Event::MetricType::kLong, UINT64_C(4480604349707933716)}},
  {"PreviousValue", { Event::MetricType::kLong, UINT64_C(12685882687934574180)}},
  {"SequenceId", { Event::MetricType::kLong, UINT64_C(8860601784949375835)}},
  {"SettingId", { Event::MetricType::kLong, UINT64_C(8375811908993639483)}},
  {"SettingType", { Event::MetricType::kLong, UINT64_C(211450250705861929)}},
  {"TimeSinceLastAction", { Event::MetricType::kLong, UINT64_C(15150636701605912378)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
CrOSActionEvent_SettingChangedEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}

class CrOSActionEvent_TabEvent_TabNavigatedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    CrOSActionEvent_TabEvent_TabNavigatedEventValidator();
    ~CrOSActionEvent_TabEvent_TabNavigatedEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(11495565264134779777);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

CrOSActionEvent_TabEvent_TabNavigatedEventValidator::CrOSActionEvent_TabEvent_TabNavigatedEventValidator() :
  ::metrics::structured::EventValidator(CrOSActionEvent_TabEvent_TabNavigatedEventValidator::kEventNameHash)
  {
  Initialize();
}

CrOSActionEvent_TabEvent_TabNavigatedEventValidator::~CrOSActionEvent_TabEvent_TabNavigatedEventValidator() = default;

void CrOSActionEvent_TabEvent_TabNavigatedEventValidator::Initialize() {
  metric_metadata_ = {
    {"PageTransition", { Event::MetricType::kLong, UINT64_C(17736770626535281502)}},
  {"SequenceId", { Event::MetricType::kLong, UINT64_C(8860601784949375835)}},
  {"TimeSinceLastAction", { Event::MetricType::kLong, UINT64_C(15150636701605912378)}},
  {"URL", { Event::MetricType::kHmac, UINT64_C(16623790803831280729)}},
  {"Visibility", { Event::MetricType::kLong, UINT64_C(1669047024429367828)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
CrOSActionEvent_TabEvent_TabNavigatedEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}

class CrOSActionEvent_TabEvent_TabOpenedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    CrOSActionEvent_TabEvent_TabOpenedEventValidator();
    ~CrOSActionEvent_TabEvent_TabOpenedEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(13824184328368382026);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

CrOSActionEvent_TabEvent_TabOpenedEventValidator::CrOSActionEvent_TabEvent_TabOpenedEventValidator() :
  ::metrics::structured::EventValidator(CrOSActionEvent_TabEvent_TabOpenedEventValidator::kEventNameHash)
  {
  Initialize();
}

CrOSActionEvent_TabEvent_TabOpenedEventValidator::~CrOSActionEvent_TabEvent_TabOpenedEventValidator() = default;

void CrOSActionEvent_TabEvent_TabOpenedEventValidator::Initialize() {
  metric_metadata_ = {
    {"SequenceId", { Event::MetricType::kLong, UINT64_C(8860601784949375835)}},
  {"TimeSinceLastAction", { Event::MetricType::kLong, UINT64_C(15150636701605912378)}},
  {"URL", { Event::MetricType::kHmac, UINT64_C(16623790803831280729)}},
  {"URLOpened", { Event::MetricType::kHmac, UINT64_C(7878775340823931445)}},
  {"WindowOpenDisposition", { Event::MetricType::kLong, UINT64_C(17804395139469765033)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
CrOSActionEvent_TabEvent_TabOpenedEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}

class CrOSActionEvent_TabEvent_TabReactivatedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    CrOSActionEvent_TabEvent_TabReactivatedEventValidator();
    ~CrOSActionEvent_TabEvent_TabReactivatedEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(1414982393805218127);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

CrOSActionEvent_TabEvent_TabReactivatedEventValidator::CrOSActionEvent_TabEvent_TabReactivatedEventValidator() :
  ::metrics::structured::EventValidator(CrOSActionEvent_TabEvent_TabReactivatedEventValidator::kEventNameHash)
  {
  Initialize();
}

CrOSActionEvent_TabEvent_TabReactivatedEventValidator::~CrOSActionEvent_TabEvent_TabReactivatedEventValidator() = default;

void CrOSActionEvent_TabEvent_TabReactivatedEventValidator::Initialize() {
  metric_metadata_ = {
    {"SequenceId", { Event::MetricType::kLong, UINT64_C(8860601784949375835)}},
  {"TimeSinceLastAction", { Event::MetricType::kLong, UINT64_C(15150636701605912378)}},
  {"URL", { Event::MetricType::kHmac, UINT64_C(16623790803831280729)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
CrOSActionEvent_TabEvent_TabReactivatedEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}
class LauncherUsageEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    LauncherUsageEventValidator();
    ~LauncherUsageEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(338987758122020898);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

LauncherUsageEventValidator::LauncherUsageEventValidator() :
  ::metrics::structured::EventValidator(LauncherUsageEventValidator::kEventNameHash)
  {
  Initialize();
}

LauncherUsageEventValidator::~LauncherUsageEventValidator() = default;

void LauncherUsageEventValidator::Initialize() {
  metric_metadata_ = {
    {"App", { Event::MetricType::kHmac, UINT64_C(12431693315825569690)}},
  {"Domain", { Event::MetricType::kHmac, UINT64_C(16926279638941368063)}},
  {"Hour", { Event::MetricType::kLong, UINT64_C(13068971801390763210)}},
  {"ProviderType", { Event::MetricType::kLong, UINT64_C(15485758544594317646)}},
  {"Score", { Event::MetricType::kLong, UINT64_C(6760243690594795363)}},
  {"SearchQuery", { Event::MetricType::kHmac, UINT64_C(3417621012679571145)}},
  {"SearchQueryLength", { Event::MetricType::kLong, UINT64_C(12117433152880007486)}},
  {"Target", { Event::MetricType::kHmac, UINT64_C(14130661245465482316)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
LauncherUsageEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}
class InitializationEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    InitializationEventValidator();
    ~InitializationEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(17627823560409533063);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

InitializationEventValidator::InitializationEventValidator() :
  ::metrics::structured::EventValidator(InitializationEventValidator::kEventNameHash)
  {
  Initialize();
}

InitializationEventValidator::~InitializationEventValidator() = default;

void InitializationEventValidator::Initialize() {
  metric_metadata_ = {
    {"Platform", { Event::MetricType::kLong, UINT64_C(4728558894243024398)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
InitializationEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}
class AppDiscovery_AppInstalledEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    AppDiscovery_AppInstalledEventValidator();
    ~AppDiscovery_AppInstalledEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(7058343684005446180);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

AppDiscovery_AppInstalledEventValidator::AppDiscovery_AppInstalledEventValidator() :
  ::metrics::structured::EventValidator(AppDiscovery_AppInstalledEventValidator::kEventNameHash)
  {
  Initialize();
}

AppDiscovery_AppInstalledEventValidator::~AppDiscovery_AppInstalledEventValidator() = default;

void AppDiscovery_AppInstalledEventValidator::Initialize() {
  metric_metadata_ = {
    {"AppId", { Event::MetricType::kRawString, UINT64_C(3436411431909560556)}},
  {"AppType", { Event::MetricType::kLong, UINT64_C(8663828604683851647)}},
  {"InstallSource", { Event::MetricType::kLong, UINT64_C(7897354207534621578)}},
  {"InstallReason", { Event::MetricType::kLong, UINT64_C(1281400133578045381)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
AppDiscovery_AppInstalledEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}

class AppDiscovery_AppLaunchedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    AppDiscovery_AppLaunchedEventValidator();
    ~AppDiscovery_AppLaunchedEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(10707673304400816961);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

AppDiscovery_AppLaunchedEventValidator::AppDiscovery_AppLaunchedEventValidator() :
  ::metrics::structured::EventValidator(AppDiscovery_AppLaunchedEventValidator::kEventNameHash)
  {
  Initialize();
}

AppDiscovery_AppLaunchedEventValidator::~AppDiscovery_AppLaunchedEventValidator() = default;

void AppDiscovery_AppLaunchedEventValidator::Initialize() {
  metric_metadata_ = {
    {"AppId", { Event::MetricType::kRawString, UINT64_C(3436411431909560556)}},
  {"AppType", { Event::MetricType::kLong, UINT64_C(8663828604683851647)}},
  {"LaunchSource", { Event::MetricType::kLong, UINT64_C(5360095524695749322)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
AppDiscovery_AppLaunchedEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}

class AppDiscovery_AppUninstallEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    AppDiscovery_AppUninstallEventValidator();
    ~AppDiscovery_AppUninstallEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(2738328505235822343);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

AppDiscovery_AppUninstallEventValidator::AppDiscovery_AppUninstallEventValidator() :
  ::metrics::structured::EventValidator(AppDiscovery_AppUninstallEventValidator::kEventNameHash)
  {
  Initialize();
}

AppDiscovery_AppUninstallEventValidator::~AppDiscovery_AppUninstallEventValidator() = default;

void AppDiscovery_AppUninstallEventValidator::Initialize() {
  metric_metadata_ = {
    {"AppId", { Event::MetricType::kRawString, UINT64_C(3436411431909560556)}},
  {"AppType", { Event::MetricType::kLong, UINT64_C(8663828604683851647)}},
  {"UninstallSource", { Event::MetricType::kLong, UINT64_C(8215808397380782455)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
AppDiscovery_AppUninstallEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}

class AppDiscovery_AppStateChangedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    AppDiscovery_AppStateChangedEventValidator();
    ~AppDiscovery_AppStateChangedEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(9243762327526693209);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

AppDiscovery_AppStateChangedEventValidator::AppDiscovery_AppStateChangedEventValidator() :
  ::metrics::structured::EventValidator(AppDiscovery_AppStateChangedEventValidator::kEventNameHash)
  {
  Initialize();
}

AppDiscovery_AppStateChangedEventValidator::~AppDiscovery_AppStateChangedEventValidator() = default;

void AppDiscovery_AppStateChangedEventValidator::Initialize() {
  metric_metadata_ = {
    {"AppId", { Event::MetricType::kRawString, UINT64_C(3436411431909560556)}},
  {"AppState", { Event::MetricType::kLong, UINT64_C(7939215552227078667)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
AppDiscovery_AppStateChangedEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}

class AppDiscovery_LauncherOpenEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    AppDiscovery_LauncherOpenEventValidator();
    ~AppDiscovery_LauncherOpenEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(14878222005301987403);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

AppDiscovery_LauncherOpenEventValidator::AppDiscovery_LauncherOpenEventValidator() :
  ::metrics::structured::EventValidator(AppDiscovery_LauncherOpenEventValidator::kEventNameHash)
  {
  Initialize();
}

AppDiscovery_LauncherOpenEventValidator::~AppDiscovery_LauncherOpenEventValidator() = default;

void AppDiscovery_LauncherOpenEventValidator::Initialize() {
  metric_metadata_ = {
    
   };
}

absl::optional<EventValidator::MetricMetadata>
AppDiscovery_LauncherOpenEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}

class AppDiscovery_AppLauncherResultOpenedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    AppDiscovery_AppLauncherResultOpenedEventValidator();
    ~AppDiscovery_AppLauncherResultOpenedEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(8029308694385404808);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

AppDiscovery_AppLauncherResultOpenedEventValidator::AppDiscovery_AppLauncherResultOpenedEventValidator() :
  ::metrics::structured::EventValidator(AppDiscovery_AppLauncherResultOpenedEventValidator::kEventNameHash)
  {
  Initialize();
}

AppDiscovery_AppLauncherResultOpenedEventValidator::~AppDiscovery_AppLauncherResultOpenedEventValidator() = default;

void AppDiscovery_AppLauncherResultOpenedEventValidator::Initialize() {
  metric_metadata_ = {
    {"FuzzyStringMatch", { Event::MetricType::kDouble, UINT64_C(14159803595132072453)}},
  {"AppId", { Event::MetricType::kRawString, UINT64_C(3436411431909560556)}},
  {"AppName", { Event::MetricType::kRawString, UINT64_C(12020578951758927002)}},
  {"ResultCategory", { Event::MetricType::kLong, UINT64_C(1461456690361619671)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
AppDiscovery_AppLauncherResultOpenedEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}

class AppDiscovery_Browser_OmniboxInstallIconClickedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    AppDiscovery_Browser_OmniboxInstallIconClickedEventValidator();
    ~AppDiscovery_Browser_OmniboxInstallIconClickedEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(3850425801585793723);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

AppDiscovery_Browser_OmniboxInstallIconClickedEventValidator::AppDiscovery_Browser_OmniboxInstallIconClickedEventValidator() :
  ::metrics::structured::EventValidator(AppDiscovery_Browser_OmniboxInstallIconClickedEventValidator::kEventNameHash)
  {
  Initialize();
}

AppDiscovery_Browser_OmniboxInstallIconClickedEventValidator::~AppDiscovery_Browser_OmniboxInstallIconClickedEventValidator() = default;

void AppDiscovery_Browser_OmniboxInstallIconClickedEventValidator::Initialize() {
  metric_metadata_ = {
    {"IPHShown", { Event::MetricType::kLong, UINT64_C(7048166618781235113)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
AppDiscovery_Browser_OmniboxInstallIconClickedEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}

class AppDiscovery_Browser_AppInstallDialogShownEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    AppDiscovery_Browser_AppInstallDialogShownEventValidator();
    ~AppDiscovery_Browser_AppInstallDialogShownEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(12637046804977021887);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

AppDiscovery_Browser_AppInstallDialogShownEventValidator::AppDiscovery_Browser_AppInstallDialogShownEventValidator() :
  ::metrics::structured::EventValidator(AppDiscovery_Browser_AppInstallDialogShownEventValidator::kEventNameHash)
  {
  Initialize();
}

AppDiscovery_Browser_AppInstallDialogShownEventValidator::~AppDiscovery_Browser_AppInstallDialogShownEventValidator() = default;

void AppDiscovery_Browser_AppInstallDialogShownEventValidator::Initialize() {
  metric_metadata_ = {
    {"AppId", { Event::MetricType::kRawString, UINT64_C(3436411431909560556)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
AppDiscovery_Browser_AppInstallDialogShownEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}

class AppDiscovery_Browser_AppInstallDialogResultEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    AppDiscovery_Browser_AppInstallDialogResultEventValidator();
    ~AppDiscovery_Browser_AppInstallDialogResultEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(13700312836166654669);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

AppDiscovery_Browser_AppInstallDialogResultEventValidator::AppDiscovery_Browser_AppInstallDialogResultEventValidator() :
  ::metrics::structured::EventValidator(AppDiscovery_Browser_AppInstallDialogResultEventValidator::kEventNameHash)
  {
  Initialize();
}

AppDiscovery_Browser_AppInstallDialogResultEventValidator::~AppDiscovery_Browser_AppInstallDialogResultEventValidator() = default;

void AppDiscovery_Browser_AppInstallDialogResultEventValidator::Initialize() {
  metric_metadata_ = {
    {"WebAppInstallStatus", { Event::MetricType::kLong, UINT64_C(17331805925352160966)}},
  {"AppId", { Event::MetricType::kRawString, UINT64_C(3436411431909560556)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
AppDiscovery_Browser_AppInstallDialogResultEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}

class AppDiscovery_Browser_ClickInstallAppFromMenuEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    AppDiscovery_Browser_ClickInstallAppFromMenuEventValidator();
    ~AppDiscovery_Browser_ClickInstallAppFromMenuEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(9038997657104637664);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

AppDiscovery_Browser_ClickInstallAppFromMenuEventValidator::AppDiscovery_Browser_ClickInstallAppFromMenuEventValidator() :
  ::metrics::structured::EventValidator(AppDiscovery_Browser_ClickInstallAppFromMenuEventValidator::kEventNameHash)
  {
  Initialize();
}

AppDiscovery_Browser_ClickInstallAppFromMenuEventValidator::~AppDiscovery_Browser_ClickInstallAppFromMenuEventValidator() = default;

void AppDiscovery_Browser_ClickInstallAppFromMenuEventValidator::Initialize() {
  metric_metadata_ = {
    {"AppId", { Event::MetricType::kRawString, UINT64_C(3436411431909560556)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
AppDiscovery_Browser_ClickInstallAppFromMenuEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}

class AppDiscovery_Browser_CreateShortcutEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    AppDiscovery_Browser_CreateShortcutEventValidator();
    ~AppDiscovery_Browser_CreateShortcutEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(1826365659052634425);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

AppDiscovery_Browser_CreateShortcutEventValidator::AppDiscovery_Browser_CreateShortcutEventValidator() :
  ::metrics::structured::EventValidator(AppDiscovery_Browser_CreateShortcutEventValidator::kEventNameHash)
  {
  Initialize();
}

AppDiscovery_Browser_CreateShortcutEventValidator::~AppDiscovery_Browser_CreateShortcutEventValidator() = default;

void AppDiscovery_Browser_CreateShortcutEventValidator::Initialize() {
  metric_metadata_ = {
    {"AppId", { Event::MetricType::kRawString, UINT64_C(3436411431909560556)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
AppDiscovery_Browser_CreateShortcutEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}

class UserLoginEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    UserLoginEventValidator();
    ~UserLoginEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(3946957472799472890);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

UserLoginEventValidator::UserLoginEventValidator() :
  ::metrics::structured::EventValidator(UserLoginEventValidator::kEventNameHash)
  {
  Initialize();
}

UserLoginEventValidator::~UserLoginEventValidator() = default;

void UserLoginEventValidator::Initialize() {
  metric_metadata_ = {
    
   };
}

absl::optional<EventValidator::MetricMetadata>
UserLoginEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}

class UserLogoutEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    UserLogoutEventValidator();
    ~UserLogoutEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(15162740773924916380);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

UserLogoutEventValidator::UserLogoutEventValidator() :
  ::metrics::structured::EventValidator(UserLogoutEventValidator::kEventNameHash)
  {
  Initialize();
}

UserLogoutEventValidator::~UserLogoutEventValidator() = default;

void UserLogoutEventValidator::Initialize() {
  metric_metadata_ = {
    
   };
}

absl::optional<EventValidator::MetricMetadata>
UserLogoutEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}

class SystemSuspendedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    SystemSuspendedEventValidator();
    ~SystemSuspendedEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(9156818098953353395);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

SystemSuspendedEventValidator::SystemSuspendedEventValidator() :
  ::metrics::structured::EventValidator(SystemSuspendedEventValidator::kEventNameHash)
  {
  Initialize();
}

SystemSuspendedEventValidator::~SystemSuspendedEventValidator() = default;

void SystemSuspendedEventValidator::Initialize() {
  metric_metadata_ = {
    {"Reason", { Event::MetricType::kLong, UINT64_C(18445816987321669298)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
SystemSuspendedEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}

class Test1EventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    Test1EventValidator();
    ~Test1EventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(5509740142892158459);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

Test1EventValidator::Test1EventValidator() :
  ::metrics::structured::EventValidator(Test1EventValidator::kEventNameHash)
  {
  Initialize();
}

Test1EventValidator::~Test1EventValidator() = default;

void Test1EventValidator::Initialize() {
  metric_metadata_ = {
    {"Metric1", { Event::MetricType::kDouble, UINT64_C(8511085042759365099)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
Test1EventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}

class NoMetricsEventEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    NoMetricsEventEventValidator();
    ~NoMetricsEventEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(5106854608989380457);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

NoMetricsEventEventValidator::NoMetricsEventEventValidator() :
  ::metrics::structured::EventValidator(NoMetricsEventEventValidator::kEventNameHash)
  {
  Initialize();
}

NoMetricsEventEventValidator::~NoMetricsEventEventValidator() = default;

void NoMetricsEventEventValidator::Initialize() {
  metric_metadata_ = {
    
   };
}

absl::optional<EventValidator::MetricMetadata>
NoMetricsEventEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}
class TestEventOneEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    TestEventOneEventValidator();
    ~TestEventOneEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(13593049295042080097);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

TestEventOneEventValidator::TestEventOneEventValidator() :
  ::metrics::structured::EventValidator(TestEventOneEventValidator::kEventNameHash)
  {
  Initialize();
}

TestEventOneEventValidator::~TestEventOneEventValidator() = default;

void TestEventOneEventValidator::Initialize() {
  metric_metadata_ = {
    {"TestMetricOne", { Event::MetricType::kHmac, UINT64_C(637929385654885975)}},
  {"TestMetricTwo", { Event::MetricType::kLong, UINT64_C(14083999144141567134)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
TestEventOneEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}
class TestEventThreeEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    TestEventThreeEventValidator();
    ~TestEventThreeEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(5848687377041124372);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

TestEventThreeEventValidator::TestEventThreeEventValidator() :
  ::metrics::structured::EventValidator(TestEventThreeEventValidator::kEventNameHash)
  {
  Initialize();
}

TestEventThreeEventValidator::~TestEventThreeEventValidator() = default;

void TestEventThreeEventValidator::Initialize() {
  metric_metadata_ = {
    {"TestMetricFour", { Event::MetricType::kHmac, UINT64_C(2917855408523247722)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
TestEventThreeEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}

class TestEventTwoEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    TestEventTwoEventValidator();
    ~TestEventTwoEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(8995967733561999410);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

TestEventTwoEventValidator::TestEventTwoEventValidator() :
  ::metrics::structured::EventValidator(TestEventTwoEventValidator::kEventNameHash)
  {
  Initialize();
}

TestEventTwoEventValidator::~TestEventTwoEventValidator() = default;

void TestEventTwoEventValidator::Initialize() {
  metric_metadata_ = {
    {"TestMetricThree", { Event::MetricType::kHmac, UINT64_C(13469300759843809564)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
TestEventTwoEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}
class TestEventFourEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    TestEventFourEventValidator();
    ~TestEventFourEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(1718797808092246258);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

TestEventFourEventValidator::TestEventFourEventValidator() :
  ::metrics::structured::EventValidator(TestEventFourEventValidator::kEventNameHash)
  {
  Initialize();
}

TestEventFourEventValidator::~TestEventFourEventValidator() = default;

void TestEventFourEventValidator::Initialize() {
  metric_metadata_ = {
    {"TestMetricFour", { Event::MetricType::kLong, UINT64_C(2917855408523247722)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
TestEventFourEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}
class TestEventFiveEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    TestEventFiveEventValidator();
    ~TestEventFiveEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(7045523601811399253);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

TestEventFiveEventValidator::TestEventFiveEventValidator() :
  ::metrics::structured::EventValidator(TestEventFiveEventValidator::kEventNameHash)
  {
  Initialize();
}

TestEventFiveEventValidator::~TestEventFiveEventValidator() = default;

void TestEventFiveEventValidator::Initialize() {
  metric_metadata_ = {
    {"TestMetricFive", { Event::MetricType::kHmac, UINT64_C(8665976921794972190)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
TestEventFiveEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}
class TestEventSixEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    TestEventSixEventValidator();
    ~TestEventSixEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(2873337042686447043);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

TestEventSixEventValidator::TestEventSixEventValidator() :
  ::metrics::structured::EventValidator(TestEventSixEventValidator::kEventNameHash)
  {
  Initialize();
}

TestEventSixEventValidator::~TestEventSixEventValidator() = default;

void TestEventSixEventValidator::Initialize() {
  metric_metadata_ = {
    {"TestMetricSix", { Event::MetricType::kRawString, UINT64_C(3431522567539822144)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
TestEventSixEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}
class TestEventSevenEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    TestEventSevenEventValidator();
    ~TestEventSevenEventValidator() override;

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(16749091071228286247);

    absl::optional<MetricMetadata>
      GetMetricMetadata(const std::string& metric_name) const override;

  private:
    std::unordered_map<base::StringPiece, EventValidator::MetricMetadata>
        metric_metadata_;
};

TestEventSevenEventValidator::TestEventSevenEventValidator() :
  ::metrics::structured::EventValidator(TestEventSevenEventValidator::kEventNameHash)
  {
  Initialize();
}

TestEventSevenEventValidator::~TestEventSevenEventValidator() = default;

void TestEventSevenEventValidator::Initialize() {
  metric_metadata_ = {
    {"TestMetricSeven", { Event::MetricType::kDouble, UINT64_C(8395865158198697574)}}
   };
}

absl::optional<EventValidator::MetricMetadata>
TestEventSevenEventValidator::GetMetricMetadata(const std::string& metric_name)
const {
   const auto it = metric_metadata_.find(metric_name);
   if (it == metric_metadata_.end())
      return absl::nullopt;
   return it->second;
}

//---------------------ProjectValidator Classes---------------------------------
class FastPairProjectValidator final :
    public ::metrics::structured::ProjectValidator {
  public:
    FastPairProjectValidator();
    ~FastPairProjectValidator();

    absl::optional<const EventValidator*> GetEventValidator(
      const std::string& event_name) const override;

    void Initialize();

    static constexpr uint64_t kProjectNameHash = UINT64_C(4257181691211608017);
    static constexpr IdType kIdType = IdType::kUnidentified;
    static constexpr IdScope kIdScope = IdScope::kPerProfile;
    static constexpr EventType kEventType =
        StructuredEventProto_EventType_REGULAR;
    static constexpr int kKeyRotationPeriod =
        30;

  private:
    std::unordered_map<base::StringPiece,
        std::unique_ptr<EventValidator>> event_validators_;
};

FastPairProjectValidator::FastPairProjectValidator() :
  ::metrics::structured::ProjectValidator(
  FastPairProjectValidator::kProjectNameHash,
  FastPairProjectValidator::kIdType,
  FastPairProjectValidator::kIdScope,
  FastPairProjectValidator::kEventType,
  FastPairProjectValidator::kKeyRotationPeriod
)
  {
  Initialize();
}

void FastPairProjectValidator::Initialize() {
  event_validators_.emplace("DiscoveryNotificationShown", std::make_unique<DiscoveryNotificationShownEventValidator>());
  event_validators_.emplace("PairingStart", std::make_unique<PairingStartEventValidator>());
  event_validators_.emplace("PairingComplete", std::make_unique<PairingCompleteEventValidator>());
  event_validators_.emplace("PairFailure", std::make_unique<PairFailureEventValidator>());
}

FastPairProjectValidator::~FastPairProjectValidator() = default;

absl::optional<const EventValidator*> FastPairProjectValidator::GetEventValidator(
                                        const std::string& event_name) const {
   const auto it = event_validators_.find(event_name);
   if (it == event_validators_.end())
      return absl::nullopt;
   return it->second.get();
}
class HindsightProjectValidator final :
    public ::metrics::structured::ProjectValidator {
  public:
    HindsightProjectValidator();
    ~HindsightProjectValidator();

    absl::optional<const EventValidator*> GetEventValidator(
      const std::string& event_name) const override;

    void Initialize();

    static constexpr uint64_t kProjectNameHash = UINT64_C(16658867201751992801);
    static constexpr IdType kIdType = IdType::kProjectId;
    static constexpr IdScope kIdScope = IdScope::kPerProfile;
    static constexpr EventType kEventType =
        StructuredEventProto_EventType_REGULAR;
    static constexpr int kKeyRotationPeriod =
        90;

  private:
    std::unordered_map<base::StringPiece,
        std::unique_ptr<EventValidator>> event_validators_;
};

HindsightProjectValidator::HindsightProjectValidator() :
  ::metrics::structured::ProjectValidator(
  HindsightProjectValidator::kProjectNameHash,
  HindsightProjectValidator::kIdType,
  HindsightProjectValidator::kIdScope,
  HindsightProjectValidator::kEventType,
  HindsightProjectValidator::kKeyRotationPeriod
)
  {
  Initialize();
}

void HindsightProjectValidator::Initialize() {
  event_validators_.emplace("CrOSActionEvent_FileOpened", std::make_unique<CrOSActionEvent_FileOpenedEventValidator>());
  event_validators_.emplace("CrOSActionEvent_SearchResultLaunched", std::make_unique<CrOSActionEvent_SearchResultLaunchedEventValidator>());
  event_validators_.emplace("CrOSActionEvent_SettingChanged", std::make_unique<CrOSActionEvent_SettingChangedEventValidator>());
  event_validators_.emplace("CrOSActionEvent_TabEvent_TabNavigated", std::make_unique<CrOSActionEvent_TabEvent_TabNavigatedEventValidator>());
  event_validators_.emplace("CrOSActionEvent_TabEvent_TabOpened", std::make_unique<CrOSActionEvent_TabEvent_TabOpenedEventValidator>());
  event_validators_.emplace("CrOSActionEvent_TabEvent_TabReactivated", std::make_unique<CrOSActionEvent_TabEvent_TabReactivatedEventValidator>());
}

HindsightProjectValidator::~HindsightProjectValidator() = default;

absl::optional<const EventValidator*> HindsightProjectValidator::GetEventValidator(
                                        const std::string& event_name) const {
   const auto it = event_validators_.find(event_name);
   if (it == event_validators_.end())
      return absl::nullopt;
   return it->second.get();
}
class LauncherUsageProjectValidator final :
    public ::metrics::structured::ProjectValidator {
  public:
    LauncherUsageProjectValidator();
    ~LauncherUsageProjectValidator();

    absl::optional<const EventValidator*> GetEventValidator(
      const std::string& event_name) const override;

    void Initialize();

    static constexpr uint64_t kProjectNameHash = UINT64_C(10270819838268357145);
    static constexpr IdType kIdType = IdType::kProjectId;
    static constexpr IdScope kIdScope = IdScope::kPerProfile;
    static constexpr EventType kEventType =
        StructuredEventProto_EventType_REGULAR;
    static constexpr int kKeyRotationPeriod =
        90;

  private:
    std::unordered_map<base::StringPiece,
        std::unique_ptr<EventValidator>> event_validators_;
};

LauncherUsageProjectValidator::LauncherUsageProjectValidator() :
  ::metrics::structured::ProjectValidator(
  LauncherUsageProjectValidator::kProjectNameHash,
  LauncherUsageProjectValidator::kIdType,
  LauncherUsageProjectValidator::kIdScope,
  LauncherUsageProjectValidator::kEventType,
  LauncherUsageProjectValidator::kKeyRotationPeriod
)
  {
  Initialize();
}

void LauncherUsageProjectValidator::Initialize() {
  event_validators_.emplace("LauncherUsage", std::make_unique<LauncherUsageEventValidator>());
}

LauncherUsageProjectValidator::~LauncherUsageProjectValidator() = default;

absl::optional<const EventValidator*> LauncherUsageProjectValidator::GetEventValidator(
                                        const std::string& event_name) const {
   const auto it = event_validators_.find(event_name);
   if (it == event_validators_.end())
      return absl::nullopt;
   return it->second.get();
}
class StructuredMetricsProjectValidator final :
    public ::metrics::structured::ProjectValidator {
  public:
    StructuredMetricsProjectValidator();
    ~StructuredMetricsProjectValidator();

    absl::optional<const EventValidator*> GetEventValidator(
      const std::string& event_name) const override;

    void Initialize();

    static constexpr uint64_t kProjectNameHash = UINT64_C(12908457551569912491);
    static constexpr IdType kIdType = IdType::kProjectId;
    static constexpr IdScope kIdScope = IdScope::kPerDevice;
    static constexpr EventType kEventType =
        StructuredEventProto_EventType_REGULAR;
    static constexpr int kKeyRotationPeriod =
        90;

  private:
    std::unordered_map<base::StringPiece,
        std::unique_ptr<EventValidator>> event_validators_;
};

StructuredMetricsProjectValidator::StructuredMetricsProjectValidator() :
  ::metrics::structured::ProjectValidator(
  StructuredMetricsProjectValidator::kProjectNameHash,
  StructuredMetricsProjectValidator::kIdType,
  StructuredMetricsProjectValidator::kIdScope,
  StructuredMetricsProjectValidator::kEventType,
  StructuredMetricsProjectValidator::kKeyRotationPeriod
)
  {
  Initialize();
}

void StructuredMetricsProjectValidator::Initialize() {
  event_validators_.emplace("Initialization", std::make_unique<InitializationEventValidator>());
}

StructuredMetricsProjectValidator::~StructuredMetricsProjectValidator() = default;

absl::optional<const EventValidator*> StructuredMetricsProjectValidator::GetEventValidator(
                                        const std::string& event_name) const {
   const auto it = event_validators_.find(event_name);
   if (it == event_validators_.end())
      return absl::nullopt;
   return it->second.get();
}
class CrOSEventsProjectValidator final :
    public ::metrics::structured::ProjectValidator {
  public:
    CrOSEventsProjectValidator();
    ~CrOSEventsProjectValidator();

    absl::optional<const EventValidator*> GetEventValidator(
      const std::string& event_name) const override;

    void Initialize();

    static constexpr uint64_t kProjectNameHash = UINT64_C(12657197978410187837);
    static constexpr IdType kIdType = IdType::kProjectId;
    static constexpr IdScope kIdScope = IdScope::kPerDevice;
    static constexpr EventType kEventType =
        StructuredEventProto_EventType_SEQUENCE;
    static constexpr int kKeyRotationPeriod =
        120;

  private:
    std::unordered_map<base::StringPiece,
        std::unique_ptr<EventValidator>> event_validators_;
};

CrOSEventsProjectValidator::CrOSEventsProjectValidator() :
  ::metrics::structured::ProjectValidator(
  CrOSEventsProjectValidator::kProjectNameHash,
  CrOSEventsProjectValidator::kIdType,
  CrOSEventsProjectValidator::kIdScope,
  CrOSEventsProjectValidator::kEventType,
  CrOSEventsProjectValidator::kKeyRotationPeriod
)
  {
  Initialize();
}

void CrOSEventsProjectValidator::Initialize() {
  event_validators_.emplace("AppDiscovery_AppInstalled", std::make_unique<AppDiscovery_AppInstalledEventValidator>());
  event_validators_.emplace("AppDiscovery_AppLaunched", std::make_unique<AppDiscovery_AppLaunchedEventValidator>());
  event_validators_.emplace("AppDiscovery_AppUninstall", std::make_unique<AppDiscovery_AppUninstallEventValidator>());
  event_validators_.emplace("AppDiscovery_AppStateChanged", std::make_unique<AppDiscovery_AppStateChangedEventValidator>());
  event_validators_.emplace("AppDiscovery_LauncherOpen", std::make_unique<AppDiscovery_LauncherOpenEventValidator>());
  event_validators_.emplace("AppDiscovery_AppLauncherResultOpened", std::make_unique<AppDiscovery_AppLauncherResultOpenedEventValidator>());
  event_validators_.emplace("AppDiscovery_Browser_OmniboxInstallIconClicked", std::make_unique<AppDiscovery_Browser_OmniboxInstallIconClickedEventValidator>());
  event_validators_.emplace("AppDiscovery_Browser_AppInstallDialogShown", std::make_unique<AppDiscovery_Browser_AppInstallDialogShownEventValidator>());
  event_validators_.emplace("AppDiscovery_Browser_AppInstallDialogResult", std::make_unique<AppDiscovery_Browser_AppInstallDialogResultEventValidator>());
  event_validators_.emplace("AppDiscovery_Browser_ClickInstallAppFromMenu", std::make_unique<AppDiscovery_Browser_ClickInstallAppFromMenuEventValidator>());
  event_validators_.emplace("AppDiscovery_Browser_CreateShortcut", std::make_unique<AppDiscovery_Browser_CreateShortcutEventValidator>());
  event_validators_.emplace("UserLogin", std::make_unique<UserLoginEventValidator>());
  event_validators_.emplace("UserLogout", std::make_unique<UserLogoutEventValidator>());
  event_validators_.emplace("SystemSuspended", std::make_unique<SystemSuspendedEventValidator>());
  event_validators_.emplace("Test1", std::make_unique<Test1EventValidator>());
  event_validators_.emplace("NoMetricsEvent", std::make_unique<NoMetricsEventEventValidator>());
}

CrOSEventsProjectValidator::~CrOSEventsProjectValidator() = default;

absl::optional<const EventValidator*> CrOSEventsProjectValidator::GetEventValidator(
                                        const std::string& event_name) const {
   const auto it = event_validators_.find(event_name);
   if (it == event_validators_.end())
      return absl::nullopt;
   return it->second.get();
}
class TestProjectOneProjectValidator final :
    public ::metrics::structured::ProjectValidator {
  public:
    TestProjectOneProjectValidator();
    ~TestProjectOneProjectValidator();

    absl::optional<const EventValidator*> GetEventValidator(
      const std::string& event_name) const override;

    void Initialize();

    static constexpr uint64_t kProjectNameHash = UINT64_C(16881314472396226433);
    static constexpr IdType kIdType = IdType::kProjectId;
    static constexpr IdScope kIdScope = IdScope::kPerProfile;
    static constexpr EventType kEventType =
        StructuredEventProto_EventType_REGULAR;
    static constexpr int kKeyRotationPeriod =
        90;

  private:
    std::unordered_map<base::StringPiece,
        std::unique_ptr<EventValidator>> event_validators_;
};

TestProjectOneProjectValidator::TestProjectOneProjectValidator() :
  ::metrics::structured::ProjectValidator(
  TestProjectOneProjectValidator::kProjectNameHash,
  TestProjectOneProjectValidator::kIdType,
  TestProjectOneProjectValidator::kIdScope,
  TestProjectOneProjectValidator::kEventType,
  TestProjectOneProjectValidator::kKeyRotationPeriod
)
  {
  Initialize();
}

void TestProjectOneProjectValidator::Initialize() {
  event_validators_.emplace("TestEventOne", std::make_unique<TestEventOneEventValidator>());
}

TestProjectOneProjectValidator::~TestProjectOneProjectValidator() = default;

absl::optional<const EventValidator*> TestProjectOneProjectValidator::GetEventValidator(
                                        const std::string& event_name) const {
   const auto it = event_validators_.find(event_name);
   if (it == event_validators_.end())
      return absl::nullopt;
   return it->second.get();
}
class TestProjectTwoProjectValidator final :
    public ::metrics::structured::ProjectValidator {
  public:
    TestProjectTwoProjectValidator();
    ~TestProjectTwoProjectValidator();

    absl::optional<const EventValidator*> GetEventValidator(
      const std::string& event_name) const override;

    void Initialize();

    static constexpr uint64_t kProjectNameHash = UINT64_C(5876808001962504629);
    static constexpr IdType kIdType = IdType::kProjectId;
    static constexpr IdScope kIdScope = IdScope::kPerProfile;
    static constexpr EventType kEventType =
        StructuredEventProto_EventType_REGULAR;
    static constexpr int kKeyRotationPeriod =
        90;

  private:
    std::unordered_map<base::StringPiece,
        std::unique_ptr<EventValidator>> event_validators_;
};

TestProjectTwoProjectValidator::TestProjectTwoProjectValidator() :
  ::metrics::structured::ProjectValidator(
  TestProjectTwoProjectValidator::kProjectNameHash,
  TestProjectTwoProjectValidator::kIdType,
  TestProjectTwoProjectValidator::kIdScope,
  TestProjectTwoProjectValidator::kEventType,
  TestProjectTwoProjectValidator::kKeyRotationPeriod
)
  {
  Initialize();
}

void TestProjectTwoProjectValidator::Initialize() {
  event_validators_.emplace("TestEventThree", std::make_unique<TestEventThreeEventValidator>());
  event_validators_.emplace("TestEventTwo", std::make_unique<TestEventTwoEventValidator>());
}

TestProjectTwoProjectValidator::~TestProjectTwoProjectValidator() = default;

absl::optional<const EventValidator*> TestProjectTwoProjectValidator::GetEventValidator(
                                        const std::string& event_name) const {
   const auto it = event_validators_.find(event_name);
   if (it == event_validators_.end())
      return absl::nullopt;
   return it->second.get();
}
class TestProjectThreeProjectValidator final :
    public ::metrics::structured::ProjectValidator {
  public:
    TestProjectThreeProjectValidator();
    ~TestProjectThreeProjectValidator();

    absl::optional<const EventValidator*> GetEventValidator(
      const std::string& event_name) const override;

    void Initialize();

    static constexpr uint64_t kProjectNameHash = UINT64_C(10860358748803291132);
    static constexpr IdType kIdType = IdType::kUmaId;
    static constexpr IdScope kIdScope = IdScope::kPerProfile;
    static constexpr EventType kEventType =
        StructuredEventProto_EventType_REGULAR;
    static constexpr int kKeyRotationPeriod =
        90;

  private:
    std::unordered_map<base::StringPiece,
        std::unique_ptr<EventValidator>> event_validators_;
};

TestProjectThreeProjectValidator::TestProjectThreeProjectValidator() :
  ::metrics::structured::ProjectValidator(
  TestProjectThreeProjectValidator::kProjectNameHash,
  TestProjectThreeProjectValidator::kIdType,
  TestProjectThreeProjectValidator::kIdScope,
  TestProjectThreeProjectValidator::kEventType,
  TestProjectThreeProjectValidator::kKeyRotationPeriod
)
  {
  Initialize();
}

void TestProjectThreeProjectValidator::Initialize() {
  event_validators_.emplace("TestEventFour", std::make_unique<TestEventFourEventValidator>());
}

TestProjectThreeProjectValidator::~TestProjectThreeProjectValidator() = default;

absl::optional<const EventValidator*> TestProjectThreeProjectValidator::GetEventValidator(
                                        const std::string& event_name) const {
   const auto it = event_validators_.find(event_name);
   if (it == event_validators_.end())
      return absl::nullopt;
   return it->second.get();
}
class TestProjectFourProjectValidator final :
    public ::metrics::structured::ProjectValidator {
  public:
    TestProjectFourProjectValidator();
    ~TestProjectFourProjectValidator();

    absl::optional<const EventValidator*> GetEventValidator(
      const std::string& event_name) const override;

    void Initialize();

    static constexpr uint64_t kProjectNameHash = UINT64_C(6801665881746546626);
    static constexpr IdType kIdType = IdType::kProjectId;
    static constexpr IdScope kIdScope = IdScope::kPerDevice;
    static constexpr EventType kEventType =
        StructuredEventProto_EventType_REGULAR;
    static constexpr int kKeyRotationPeriod =
        90;

  private:
    std::unordered_map<base::StringPiece,
        std::unique_ptr<EventValidator>> event_validators_;
};

TestProjectFourProjectValidator::TestProjectFourProjectValidator() :
  ::metrics::structured::ProjectValidator(
  TestProjectFourProjectValidator::kProjectNameHash,
  TestProjectFourProjectValidator::kIdType,
  TestProjectFourProjectValidator::kIdScope,
  TestProjectFourProjectValidator::kEventType,
  TestProjectFourProjectValidator::kKeyRotationPeriod
)
  {
  Initialize();
}

void TestProjectFourProjectValidator::Initialize() {
  event_validators_.emplace("TestEventFive", std::make_unique<TestEventFiveEventValidator>());
}

TestProjectFourProjectValidator::~TestProjectFourProjectValidator() = default;

absl::optional<const EventValidator*> TestProjectFourProjectValidator::GetEventValidator(
                                        const std::string& event_name) const {
   const auto it = event_validators_.find(event_name);
   if (it == event_validators_.end())
      return absl::nullopt;
   return it->second.get();
}
class TestProjectFiveProjectValidator final :
    public ::metrics::structured::ProjectValidator {
  public:
    TestProjectFiveProjectValidator();
    ~TestProjectFiveProjectValidator();

    absl::optional<const EventValidator*> GetEventValidator(
      const std::string& event_name) const override;

    void Initialize();

    static constexpr uint64_t kProjectNameHash = UINT64_C(3960582687892677139);
    static constexpr IdType kIdType = IdType::kUnidentified;
    static constexpr IdScope kIdScope = IdScope::kPerProfile;
    static constexpr EventType kEventType =
        StructuredEventProto_EventType_RAW_STRING;
    static constexpr int kKeyRotationPeriod =
        90;

  private:
    std::unordered_map<base::StringPiece,
        std::unique_ptr<EventValidator>> event_validators_;
};

TestProjectFiveProjectValidator::TestProjectFiveProjectValidator() :
  ::metrics::structured::ProjectValidator(
  TestProjectFiveProjectValidator::kProjectNameHash,
  TestProjectFiveProjectValidator::kIdType,
  TestProjectFiveProjectValidator::kIdScope,
  TestProjectFiveProjectValidator::kEventType,
  TestProjectFiveProjectValidator::kKeyRotationPeriod
)
  {
  Initialize();
}

void TestProjectFiveProjectValidator::Initialize() {
  event_validators_.emplace("TestEventSix", std::make_unique<TestEventSixEventValidator>());
}

TestProjectFiveProjectValidator::~TestProjectFiveProjectValidator() = default;

absl::optional<const EventValidator*> TestProjectFiveProjectValidator::GetEventValidator(
                                        const std::string& event_name) const {
   const auto it = event_validators_.find(event_name);
   if (it == event_validators_.end())
      return absl::nullopt;
   return it->second.get();
}
class TestProjectSixProjectValidator final :
    public ::metrics::structured::ProjectValidator {
  public:
    TestProjectSixProjectValidator();
    ~TestProjectSixProjectValidator();

    absl::optional<const EventValidator*> GetEventValidator(
      const std::string& event_name) const override;

    void Initialize();

    static constexpr uint64_t kProjectNameHash = UINT64_C(6972396123792667134);
    static constexpr IdType kIdType = IdType::kUnidentified;
    static constexpr IdScope kIdScope = IdScope::kPerProfile;
    static constexpr EventType kEventType =
        StructuredEventProto_EventType_REGULAR;
    static constexpr int kKeyRotationPeriod =
        90;

  private:
    std::unordered_map<base::StringPiece,
        std::unique_ptr<EventValidator>> event_validators_;
};

TestProjectSixProjectValidator::TestProjectSixProjectValidator() :
  ::metrics::structured::ProjectValidator(
  TestProjectSixProjectValidator::kProjectNameHash,
  TestProjectSixProjectValidator::kIdType,
  TestProjectSixProjectValidator::kIdScope,
  TestProjectSixProjectValidator::kEventType,
  TestProjectSixProjectValidator::kKeyRotationPeriod
)
  {
  Initialize();
}

void TestProjectSixProjectValidator::Initialize() {
  event_validators_.emplace("TestEventSeven", std::make_unique<TestEventSevenEventValidator>());
}

TestProjectSixProjectValidator::~TestProjectSixProjectValidator() = default;

absl::optional<const EventValidator*> TestProjectSixProjectValidator::GetEventValidator(
                                        const std::string& event_name) const {
   const auto it = event_validators_.find(event_name);
   if (it == event_validators_.end())
      return absl::nullopt;
   return it->second.get();
}


}

namespace validator {

Validators::Validators() {
  Initialize();
}

void Validators::Initialize() {
  validators_.emplace("FastPair", std::make_unique<FastPairProjectValidator>());
  validators_.emplace("Hindsight", std::make_unique<HindsightProjectValidator>());
  validators_.emplace("LauncherUsage", std::make_unique<LauncherUsageProjectValidator>());
  validators_.emplace("StructuredMetrics", std::make_unique<StructuredMetricsProjectValidator>());
  validators_.emplace("CrOSEvents", std::make_unique<CrOSEventsProjectValidator>());
  validators_.emplace("TestProjectOne", std::make_unique<TestProjectOneProjectValidator>());
  validators_.emplace("TestProjectTwo", std::make_unique<TestProjectTwoProjectValidator>());
  validators_.emplace("TestProjectThree", std::make_unique<TestProjectThreeProjectValidator>());
  validators_.emplace("TestProjectFour", std::make_unique<TestProjectFourProjectValidator>());
  validators_.emplace("TestProjectFive", std::make_unique<TestProjectFiveProjectValidator>());
  validators_.emplace("TestProjectSix", std::make_unique<TestProjectSixProjectValidator>());
}

absl::optional<const ProjectValidator*>
  Validators::GetProjectValidator(const std::string& project_name) {
    const auto it = validators_.find(project_name);
     if (it == validators_.end())
        return absl::nullopt;
     return it->second.get();
}

} // namespace validator
}  // namespace structured
}  // namespace metrics