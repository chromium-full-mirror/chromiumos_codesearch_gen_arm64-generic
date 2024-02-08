// Generated from gen_validator.py. DO NOT EDIT!
// source: structured.xml

#include "components/metrics/structured/structured_metrics_validator.h"

#include <cstdint>
#include <string>

#include "components/metrics/structured/enums.h"
#include "components/metrics/structured/event.h"
#include "components/metrics/structured/event_validator.h"
#include "components/metrics/structured/project_validator.h"
#include <optional>
#include "third_party/metrics_proto/structured_data.pb.h"

namespace metrics {
namespace structured {

namespace {

//---------------------EventValidator Classes----------------------------------
class MonitorInfoEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    MonitorInfoEventValidator();
    ~MonitorInfoEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(2134486541903110786);
};

MonitorInfoEventValidator::MonitorInfoEventValidator() :
  ::metrics::structured::EventValidator(MonitorInfoEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

MonitorInfoEventValidator::~MonitorInfoEventValidator() = default;

void MonitorInfoEventValidator::Initialize() {
  metric_metadata_ = {
    {"DisplayName", { Event::MetricType::kRawString, UINT64_C(4289270646520720629)}},
  {"ManufacturerId", { Event::MetricType::kRawString, UINT64_C(15125530491922306148)}},
  {"ProductId", { Event::MetricType::kLong, UINT64_C(3765840483194334735)}},
  {"NativeModeSize", { Event::MetricType::kRawString, UINT64_C(5170292205527742159)}},
  {"NativeModeRefreshRate", { Event::MetricType::kDouble, UINT64_C(5698152332635855491)}},
  {"PhysicalSize", { Event::MetricType::kRawString, UINT64_C(17526088120773883476)}},
  {"ConnectionType", { Event::MetricType::kRawString, UINT64_C(15958005172467117203)}},
  {"IsVrrCapable", { Event::MetricType::kLong, UINT64_C(6788392488518635712)}}
   };


  metrics_name_map_ = {
    { UINT64_C(4289270646520720629), "DisplayName" },
  { UINT64_C(15125530491922306148), "ManufacturerId" },
  { UINT64_C(3765840483194334735), "ProductId" },
  { UINT64_C(5170292205527742159), "NativeModeSize" },
  { UINT64_C(5698152332635855491), "NativeModeRefreshRate" },
  { UINT64_C(17526088120773883476), "PhysicalSize" },
  { UINT64_C(15958005172467117203), "ConnectionType" },
  { UINT64_C(6788392488518635712), "IsVrrCapable" }
  };
}
class DiscoveryNotificationShownEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    DiscoveryNotificationShownEventValidator();
    ~DiscoveryNotificationShownEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(9794167847225427927);
};

DiscoveryNotificationShownEventValidator::DiscoveryNotificationShownEventValidator() :
  ::metrics::structured::EventValidator(DiscoveryNotificationShownEventValidator::kEventNameHash,
                                        false)
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


  metrics_name_map_ = {
    { UINT64_C(9838808232981121206), "Protocol" },
  { UINT64_C(7275670451123585686), "FastPairVersion" },
  { UINT64_C(3121773042410042095), "ModelId" },
  { UINT64_C(7508615291271386745), "RSSI" },
  { UINT64_C(1493188836192841721), "TxPower" }
  };
}

class PairingStartEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    PairingStartEventValidator();
    ~PairingStartEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(2342185101128577068);
};

PairingStartEventValidator::PairingStartEventValidator() :
  ::metrics::structured::EventValidator(PairingStartEventValidator::kEventNameHash,
                                        false)
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


  metrics_name_map_ = {
    { UINT64_C(9838808232981121206), "Protocol" },
  { UINT64_C(7275670451123585686), "FastPairVersion" },
  { UINT64_C(3121773042410042095), "ModelId" },
  { UINT64_C(7508615291271386745), "RSSI" },
  { UINT64_C(1493188836192841721), "TxPower" }
  };
}

class PairingCompleteEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    PairingCompleteEventValidator();
    ~PairingCompleteEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(7548910873986616453);
};

PairingCompleteEventValidator::PairingCompleteEventValidator() :
  ::metrics::structured::EventValidator(PairingCompleteEventValidator::kEventNameHash,
                                        false)
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


  metrics_name_map_ = {
    { UINT64_C(9838808232981121206), "Protocol" },
  { UINT64_C(7275670451123585686), "FastPairVersion" },
  { UINT64_C(3121773042410042095), "ModelId" },
  { UINT64_C(7508615291271386745), "RSSI" },
  { UINT64_C(1493188836192841721), "TxPower" }
  };
}

class PairFailureEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    PairFailureEventValidator();
    ~PairFailureEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(17174637411246838540);
};

PairFailureEventValidator::PairFailureEventValidator() :
  ::metrics::structured::EventValidator(PairFailureEventValidator::kEventNameHash,
                                        false)
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


  metrics_name_map_ = {
    { UINT64_C(9838808232981121206), "Protocol" },
  { UINT64_C(7275670451123585686), "FastPairVersion" },
  { UINT64_C(18445816987321669298), "Reason" },
  { UINT64_C(3121773042410042095), "ModelId" }
  };
}
class CrOSActionEvent_FileOpenedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    CrOSActionEvent_FileOpenedEventValidator();
    ~CrOSActionEvent_FileOpenedEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(6176288366907657397);
};

CrOSActionEvent_FileOpenedEventValidator::CrOSActionEvent_FileOpenedEventValidator() :
  ::metrics::structured::EventValidator(CrOSActionEvent_FileOpenedEventValidator::kEventNameHash,
                                        false)
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


  metrics_name_map_ = {
    { UINT64_C(1391895386658060561), "Filename" },
  { UINT64_C(10506272911216643482), "OpenType" },
  { UINT64_C(8860601784949375835), "SequenceId" },
  { UINT64_C(15150636701605912378), "TimeSinceLastAction" }
  };
}

class CrOSActionEvent_SearchResultLaunchedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    CrOSActionEvent_SearchResultLaunchedEventValidator();
    ~CrOSActionEvent_SearchResultLaunchedEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(7258544623737125992);
};

CrOSActionEvent_SearchResultLaunchedEventValidator::CrOSActionEvent_SearchResultLaunchedEventValidator() :
  ::metrics::structured::EventValidator(CrOSActionEvent_SearchResultLaunchedEventValidator::kEventNameHash,
                                        false)
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


  metrics_name_map_ = {
    { UINT64_C(7404398033256593499), "Query" },
  { UINT64_C(8293845286137751377), "ResultType" },
  { UINT64_C(8748164516837068211), "SearchResultId" },
  { UINT64_C(8860601784949375835), "SequenceId" },
  { UINT64_C(15150636701605912378), "TimeSinceLastAction" }
  };
}

class CrOSActionEvent_SettingChangedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    CrOSActionEvent_SettingChangedEventValidator();
    ~CrOSActionEvent_SettingChangedEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(15173432087155953262);
};

CrOSActionEvent_SettingChangedEventValidator::CrOSActionEvent_SettingChangedEventValidator() :
  ::metrics::structured::EventValidator(CrOSActionEvent_SettingChangedEventValidator::kEventNameHash,
                                        false)
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


  metrics_name_map_ = {
    { UINT64_C(4480604349707933716), "CurrentValue" },
  { UINT64_C(12685882687934574180), "PreviousValue" },
  { UINT64_C(8860601784949375835), "SequenceId" },
  { UINT64_C(8375811908993639483), "SettingId" },
  { UINT64_C(211450250705861929), "SettingType" },
  { UINT64_C(15150636701605912378), "TimeSinceLastAction" }
  };
}

class CrOSActionEvent_TabEvent_TabNavigatedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    CrOSActionEvent_TabEvent_TabNavigatedEventValidator();
    ~CrOSActionEvent_TabEvent_TabNavigatedEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(11495565264134779777);
};

CrOSActionEvent_TabEvent_TabNavigatedEventValidator::CrOSActionEvent_TabEvent_TabNavigatedEventValidator() :
  ::metrics::structured::EventValidator(CrOSActionEvent_TabEvent_TabNavigatedEventValidator::kEventNameHash,
                                        false)
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


  metrics_name_map_ = {
    { UINT64_C(17736770626535281502), "PageTransition" },
  { UINT64_C(8860601784949375835), "SequenceId" },
  { UINT64_C(15150636701605912378), "TimeSinceLastAction" },
  { UINT64_C(16623790803831280729), "URL" },
  { UINT64_C(1669047024429367828), "Visibility" }
  };
}

class CrOSActionEvent_TabEvent_TabOpenedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    CrOSActionEvent_TabEvent_TabOpenedEventValidator();
    ~CrOSActionEvent_TabEvent_TabOpenedEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(13824184328368382026);
};

CrOSActionEvent_TabEvent_TabOpenedEventValidator::CrOSActionEvent_TabEvent_TabOpenedEventValidator() :
  ::metrics::structured::EventValidator(CrOSActionEvent_TabEvent_TabOpenedEventValidator::kEventNameHash,
                                        false)
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


  metrics_name_map_ = {
    { UINT64_C(8860601784949375835), "SequenceId" },
  { UINT64_C(15150636701605912378), "TimeSinceLastAction" },
  { UINT64_C(16623790803831280729), "URL" },
  { UINT64_C(7878775340823931445), "URLOpened" },
  { UINT64_C(17804395139469765033), "WindowOpenDisposition" }
  };
}

class CrOSActionEvent_TabEvent_TabReactivatedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    CrOSActionEvent_TabEvent_TabReactivatedEventValidator();
    ~CrOSActionEvent_TabEvent_TabReactivatedEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(1414982393805218127);
};

CrOSActionEvent_TabEvent_TabReactivatedEventValidator::CrOSActionEvent_TabEvent_TabReactivatedEventValidator() :
  ::metrics::structured::EventValidator(CrOSActionEvent_TabEvent_TabReactivatedEventValidator::kEventNameHash,
                                        false)
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


  metrics_name_map_ = {
    { UINT64_C(8860601784949375835), "SequenceId" },
  { UINT64_C(15150636701605912378), "TimeSinceLastAction" },
  { UINT64_C(16623790803831280729), "URL" }
  };
}
class LauncherUsageEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    LauncherUsageEventValidator();
    ~LauncherUsageEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(338987758122020898);
};

LauncherUsageEventValidator::LauncherUsageEventValidator() :
  ::metrics::structured::EventValidator(LauncherUsageEventValidator::kEventNameHash,
                                        false)
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


  metrics_name_map_ = {
    { UINT64_C(12431693315825569690), "App" },
  { UINT64_C(16926279638941368063), "Domain" },
  { UINT64_C(13068971801390763210), "Hour" },
  { UINT64_C(15485758544594317646), "ProviderType" },
  { UINT64_C(6760243690594795363), "Score" },
  { UINT64_C(3417621012679571145), "SearchQuery" },
  { UINT64_C(12117433152880007486), "SearchQueryLength" },
  { UINT64_C(14130661245465482316), "Target" }
  };
}
class DiscoveryEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    DiscoveryEventValidator();
    ~DiscoveryEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(8121790022846552438);
};

DiscoveryEventValidator::DiscoveryEventValidator() :
  ::metrics::structured::EventValidator(DiscoveryEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

DiscoveryEventValidator::~DiscoveryEventValidator() = default;

void DiscoveryEventValidator::Initialize() {
  metric_metadata_ = {
    {"Platform", { Event::MetricType::kLong, UINT64_C(4728558894243024398)}},
  {"DeviceRelationship", { Event::MetricType::kLong, UINT64_C(13896013314141638305)}},
  {"TimeToDiscovery", { Event::MetricType::kLong, UINT64_C(11511130230327788576)}}
   };


  metrics_name_map_ = {
    { UINT64_C(4728558894243024398), "Platform" },
  { UINT64_C(13896013314141638305), "DeviceRelationship" },
  { UINT64_C(11511130230327788576), "TimeToDiscovery" }
  };
}

class ThroughputEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    ThroughputEventValidator();
    ~ThroughputEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(12486561721064188940);
};

ThroughputEventValidator::ThroughputEventValidator() :
  ::metrics::structured::EventValidator(ThroughputEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

ThroughputEventValidator::~ThroughputEventValidator() = default;

void ThroughputEventValidator::Initialize() {
  metric_metadata_ = {
    {"IsReceiving", { Event::MetricType::kLong, UINT64_C(9128428000102963387)}},
  {"Platform", { Event::MetricType::kLong, UINT64_C(4728558894243024398)}},
  {"DeviceRelationship", { Event::MetricType::kLong, UINT64_C(13896013314141638305)}},
  {"Medium", { Event::MetricType::kLong, UINT64_C(9797764244958727891)}},
  {"UpdateBytes", { Event::MetricType::kLong, UINT64_C(408764248645399113)}},
  {"UpdateMillis", { Event::MetricType::kLong, UINT64_C(12242757734491391520)}},
  {"TransferredBytes", { Event::MetricType::kLong, UINT64_C(9118773029146018532)}},
  {"TotalTransferBytes", { Event::MetricType::kLong, UINT64_C(5936024394832739350)}}
   };


  metrics_name_map_ = {
    { UINT64_C(9128428000102963387), "IsReceiving" },
  { UINT64_C(4728558894243024398), "Platform" },
  { UINT64_C(13896013314141638305), "DeviceRelationship" },
  { UINT64_C(9797764244958727891), "Medium" },
  { UINT64_C(408764248645399113), "UpdateBytes" },
  { UINT64_C(12242757734491391520), "UpdateMillis" },
  { UINT64_C(9118773029146018532), "TransferredBytes" },
  { UINT64_C(5936024394832739350), "TotalTransferBytes" }
  };
}

class FileAttachmentEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    FileAttachmentEventValidator();
    ~FileAttachmentEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(16611026906961162750);
};

FileAttachmentEventValidator::FileAttachmentEventValidator() :
  ::metrics::structured::EventValidator(FileAttachmentEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

FileAttachmentEventValidator::~FileAttachmentEventValidator() = default;

void FileAttachmentEventValidator::Initialize() {
  metric_metadata_ = {
    {"IsReceiving", { Event::MetricType::kLong, UINT64_C(9128428000102963387)}},
  {"Platform", { Event::MetricType::kLong, UINT64_C(4728558894243024398)}},
  {"DeviceRelationship", { Event::MetricType::kLong, UINT64_C(13896013314141638305)}},
  {"FileType", { Event::MetricType::kLong, UINT64_C(1646892813222506878)}},
  {"Size", { Event::MetricType::kLong, UINT64_C(8028993641010258682)}},
  {"Result", { Event::MetricType::kLong, UINT64_C(10298151285721392449)}}
   };


  metrics_name_map_ = {
    { UINT64_C(9128428000102963387), "IsReceiving" },
  { UINT64_C(4728558894243024398), "Platform" },
  { UINT64_C(13896013314141638305), "DeviceRelationship" },
  { UINT64_C(1646892813222506878), "FileType" },
  { UINT64_C(8028993641010258682), "Size" },
  { UINT64_C(10298151285721392449), "Result" }
  };
}

class TextAttachmentEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    TextAttachmentEventValidator();
    ~TextAttachmentEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(6709412692638581792);
};

TextAttachmentEventValidator::TextAttachmentEventValidator() :
  ::metrics::structured::EventValidator(TextAttachmentEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

TextAttachmentEventValidator::~TextAttachmentEventValidator() = default;

void TextAttachmentEventValidator::Initialize() {
  metric_metadata_ = {
    {"IsReceiving", { Event::MetricType::kLong, UINT64_C(9128428000102963387)}},
  {"Platform", { Event::MetricType::kLong, UINT64_C(4728558894243024398)}},
  {"DeviceRelationship", { Event::MetricType::kLong, UINT64_C(13896013314141638305)}},
  {"TextType", { Event::MetricType::kLong, UINT64_C(17216547163414011577)}},
  {"Size", { Event::MetricType::kLong, UINT64_C(8028993641010258682)}},
  {"Result", { Event::MetricType::kLong, UINT64_C(10298151285721392449)}}
   };


  metrics_name_map_ = {
    { UINT64_C(9128428000102963387), "IsReceiving" },
  { UINT64_C(4728558894243024398), "Platform" },
  { UINT64_C(13896013314141638305), "DeviceRelationship" },
  { UINT64_C(17216547163414011577), "TextType" },
  { UINT64_C(8028993641010258682), "Size" },
  { UINT64_C(10298151285721392449), "Result" }
  };
}

class ShareSessionEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    ShareSessionEventValidator();
    ~ShareSessionEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(3465270551632052329);
};

ShareSessionEventValidator::ShareSessionEventValidator() :
  ::metrics::structured::EventValidator(ShareSessionEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

ShareSessionEventValidator::~ShareSessionEventValidator() = default;

void ShareSessionEventValidator::Initialize() {
  metric_metadata_ = {
    {"IsReceiving", { Event::MetricType::kLong, UINT64_C(9128428000102963387)}},
  {"Platform", { Event::MetricType::kLong, UINT64_C(4728558894243024398)}},
  {"DeviceRelationship", { Event::MetricType::kLong, UINT64_C(13896013314141638305)}},
  {"TimeToDiscovery", { Event::MetricType::kLong, UINT64_C(11511130230327788576)}},
  {"TimeToSelect", { Event::MetricType::kLong, UINT64_C(9117514697115207368)}},
  {"TimeToConnect", { Event::MetricType::kLong, UINT64_C(13628493367322951889)}},
  {"TimeToAccept", { Event::MetricType::kLong, UINT64_C(6624773114135395023)}},
  {"TimeToTransferComplete", { Event::MetricType::kLong, UINT64_C(1950847233332487065)}},
  {"InitialMedium", { Event::MetricType::kLong, UINT64_C(8520335851354841661)}},
  {"TimeToUpgrade", { Event::MetricType::kLong, UINT64_C(8775751502897238848)}},
  {"FinalMedium", { Event::MetricType::kLong, UINT64_C(10668180146530993290)}},
  {"NumberOfFiles", { Event::MetricType::kLong, UINT64_C(11792151616168586475)}},
  {"NumberOfTexts", { Event::MetricType::kLong, UINT64_C(2367228332571108755)}},
  {"NumberOfWiFiCredentials", { Event::MetricType::kLong, UINT64_C(15567319932061774315)}},
  {"TotalTransferBytes", { Event::MetricType::kLong, UINT64_C(5936024394832739350)}},
  {"BytesTransferred", { Event::MetricType::kLong, UINT64_C(3708151605264891472)}},
  {"Result", { Event::MetricType::kLong, UINT64_C(10298151285721392449)}}
   };


  metrics_name_map_ = {
    { UINT64_C(9128428000102963387), "IsReceiving" },
  { UINT64_C(4728558894243024398), "Platform" },
  { UINT64_C(13896013314141638305), "DeviceRelationship" },
  { UINT64_C(11511130230327788576), "TimeToDiscovery" },
  { UINT64_C(9117514697115207368), "TimeToSelect" },
  { UINT64_C(13628493367322951889), "TimeToConnect" },
  { UINT64_C(6624773114135395023), "TimeToAccept" },
  { UINT64_C(1950847233332487065), "TimeToTransferComplete" },
  { UINT64_C(8520335851354841661), "InitialMedium" },
  { UINT64_C(8775751502897238848), "TimeToUpgrade" },
  { UINT64_C(10668180146530993290), "FinalMedium" },
  { UINT64_C(11792151616168586475), "NumberOfFiles" },
  { UINT64_C(2367228332571108755), "NumberOfTexts" },
  { UINT64_C(15567319932061774315), "NumberOfWiFiCredentials" },
  { UINT64_C(5936024394832739350), "TotalTransferBytes" },
  { UINT64_C(3708151605264891472), "BytesTransferred" },
  { UINT64_C(10298151285721392449), "Result" }
  };
}
class InitializationEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    InitializationEventValidator();
    ~InitializationEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(17627823560409533063);
};

InitializationEventValidator::InitializationEventValidator() :
  ::metrics::structured::EventValidator(InitializationEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

InitializationEventValidator::~InitializationEventValidator() = default;

void InitializationEventValidator::Initialize() {
  metric_metadata_ = {
    {"Platform", { Event::MetricType::kLong, UINT64_C(4728558894243024398)}}
   };


  metrics_name_map_ = {
    { UINT64_C(4728558894243024398), "Platform" }
  };
}
class AppDiscovery_AppInstalledEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    AppDiscovery_AppInstalledEventValidator();
    ~AppDiscovery_AppInstalledEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(7058343684005446180);
};

AppDiscovery_AppInstalledEventValidator::AppDiscovery_AppInstalledEventValidator() :
  ::metrics::structured::EventValidator(AppDiscovery_AppInstalledEventValidator::kEventNameHash,
                                        false)
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


  metrics_name_map_ = {
    { UINT64_C(3436411431909560556), "AppId" },
  { UINT64_C(8663828604683851647), "AppType" },
  { UINT64_C(7897354207534621578), "InstallSource" },
  { UINT64_C(1281400133578045381), "InstallReason" }
  };
}

class AppDiscovery_AppLaunchedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    AppDiscovery_AppLaunchedEventValidator();
    ~AppDiscovery_AppLaunchedEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(10707673304400816961);
};

AppDiscovery_AppLaunchedEventValidator::AppDiscovery_AppLaunchedEventValidator() :
  ::metrics::structured::EventValidator(AppDiscovery_AppLaunchedEventValidator::kEventNameHash,
                                        false)
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


  metrics_name_map_ = {
    { UINT64_C(3436411431909560556), "AppId" },
  { UINT64_C(8663828604683851647), "AppType" },
  { UINT64_C(5360095524695749322), "LaunchSource" }
  };
}

class AppDiscovery_AppUninstallEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    AppDiscovery_AppUninstallEventValidator();
    ~AppDiscovery_AppUninstallEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(2738328505235822343);
};

AppDiscovery_AppUninstallEventValidator::AppDiscovery_AppUninstallEventValidator() :
  ::metrics::structured::EventValidator(AppDiscovery_AppUninstallEventValidator::kEventNameHash,
                                        false)
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


  metrics_name_map_ = {
    { UINT64_C(3436411431909560556), "AppId" },
  { UINT64_C(8663828604683851647), "AppType" },
  { UINT64_C(8215808397380782455), "UninstallSource" }
  };
}

class AppDiscovery_AppStateChangedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    AppDiscovery_AppStateChangedEventValidator();
    ~AppDiscovery_AppStateChangedEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(9243762327526693209);
};

AppDiscovery_AppStateChangedEventValidator::AppDiscovery_AppStateChangedEventValidator() :
  ::metrics::structured::EventValidator(AppDiscovery_AppStateChangedEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

AppDiscovery_AppStateChangedEventValidator::~AppDiscovery_AppStateChangedEventValidator() = default;

void AppDiscovery_AppStateChangedEventValidator::Initialize() {
  metric_metadata_ = {
    {"AppId", { Event::MetricType::kRawString, UINT64_C(3436411431909560556)}},
  {"AppState", { Event::MetricType::kLong, UINT64_C(7939215552227078667)}}
   };


  metrics_name_map_ = {
    { UINT64_C(3436411431909560556), "AppId" },
  { UINT64_C(7939215552227078667), "AppState" }
  };
}

class AppDiscovery_LauncherOpenEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    AppDiscovery_LauncherOpenEventValidator();
    ~AppDiscovery_LauncherOpenEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(14878222005301987403);
};

AppDiscovery_LauncherOpenEventValidator::AppDiscovery_LauncherOpenEventValidator() :
  ::metrics::structured::EventValidator(AppDiscovery_LauncherOpenEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

AppDiscovery_LauncherOpenEventValidator::~AppDiscovery_LauncherOpenEventValidator() = default;

void AppDiscovery_LauncherOpenEventValidator::Initialize() {
  metric_metadata_ = {
    
   };


  metrics_name_map_ = {
    
  };
}

class AppDiscovery_AppLauncherResultOpenedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    AppDiscovery_AppLauncherResultOpenedEventValidator();
    ~AppDiscovery_AppLauncherResultOpenedEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(8029308694385404808);
};

AppDiscovery_AppLauncherResultOpenedEventValidator::AppDiscovery_AppLauncherResultOpenedEventValidator() :
  ::metrics::structured::EventValidator(AppDiscovery_AppLauncherResultOpenedEventValidator::kEventNameHash,
                                        false)
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


  metrics_name_map_ = {
    { UINT64_C(14159803595132072453), "FuzzyStringMatch" },
  { UINT64_C(3436411431909560556), "AppId" },
  { UINT64_C(12020578951758927002), "AppName" },
  { UINT64_C(1461456690361619671), "ResultCategory" }
  };
}

class AppDiscovery_Browser_OmniboxInstallIconClickedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    AppDiscovery_Browser_OmniboxInstallIconClickedEventValidator();
    ~AppDiscovery_Browser_OmniboxInstallIconClickedEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(3850425801585793723);
};

AppDiscovery_Browser_OmniboxInstallIconClickedEventValidator::AppDiscovery_Browser_OmniboxInstallIconClickedEventValidator() :
  ::metrics::structured::EventValidator(AppDiscovery_Browser_OmniboxInstallIconClickedEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

AppDiscovery_Browser_OmniboxInstallIconClickedEventValidator::~AppDiscovery_Browser_OmniboxInstallIconClickedEventValidator() = default;

void AppDiscovery_Browser_OmniboxInstallIconClickedEventValidator::Initialize() {
  metric_metadata_ = {
    {"IPHShown", { Event::MetricType::kLong, UINT64_C(7048166618781235113)}}
   };


  metrics_name_map_ = {
    { UINT64_C(7048166618781235113), "IPHShown" }
  };
}

class AppDiscovery_Browser_AppInstallDialogShownEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    AppDiscovery_Browser_AppInstallDialogShownEventValidator();
    ~AppDiscovery_Browser_AppInstallDialogShownEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(12637046804977021887);
};

AppDiscovery_Browser_AppInstallDialogShownEventValidator::AppDiscovery_Browser_AppInstallDialogShownEventValidator() :
  ::metrics::structured::EventValidator(AppDiscovery_Browser_AppInstallDialogShownEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

AppDiscovery_Browser_AppInstallDialogShownEventValidator::~AppDiscovery_Browser_AppInstallDialogShownEventValidator() = default;

void AppDiscovery_Browser_AppInstallDialogShownEventValidator::Initialize() {
  metric_metadata_ = {
    {"AppId", { Event::MetricType::kRawString, UINT64_C(3436411431909560556)}}
   };


  metrics_name_map_ = {
    { UINT64_C(3436411431909560556), "AppId" }
  };
}

class AppDiscovery_Browser_AppInstallDialogResultEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    AppDiscovery_Browser_AppInstallDialogResultEventValidator();
    ~AppDiscovery_Browser_AppInstallDialogResultEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(13700312836166654669);
};

AppDiscovery_Browser_AppInstallDialogResultEventValidator::AppDiscovery_Browser_AppInstallDialogResultEventValidator() :
  ::metrics::structured::EventValidator(AppDiscovery_Browser_AppInstallDialogResultEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

AppDiscovery_Browser_AppInstallDialogResultEventValidator::~AppDiscovery_Browser_AppInstallDialogResultEventValidator() = default;

void AppDiscovery_Browser_AppInstallDialogResultEventValidator::Initialize() {
  metric_metadata_ = {
    {"WebAppInstallStatus", { Event::MetricType::kLong, UINT64_C(17331805925352160966)}},
  {"AppId", { Event::MetricType::kRawString, UINT64_C(3436411431909560556)}}
   };


  metrics_name_map_ = {
    { UINT64_C(17331805925352160966), "WebAppInstallStatus" },
  { UINT64_C(3436411431909560556), "AppId" }
  };
}

class AppDiscovery_Browser_ClickInstallAppFromMenuEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    AppDiscovery_Browser_ClickInstallAppFromMenuEventValidator();
    ~AppDiscovery_Browser_ClickInstallAppFromMenuEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(9038997657104637664);
};

AppDiscovery_Browser_ClickInstallAppFromMenuEventValidator::AppDiscovery_Browser_ClickInstallAppFromMenuEventValidator() :
  ::metrics::structured::EventValidator(AppDiscovery_Browser_ClickInstallAppFromMenuEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

AppDiscovery_Browser_ClickInstallAppFromMenuEventValidator::~AppDiscovery_Browser_ClickInstallAppFromMenuEventValidator() = default;

void AppDiscovery_Browser_ClickInstallAppFromMenuEventValidator::Initialize() {
  metric_metadata_ = {
    {"AppId", { Event::MetricType::kRawString, UINT64_C(3436411431909560556)}}
   };


  metrics_name_map_ = {
    { UINT64_C(3436411431909560556), "AppId" }
  };
}

class AppDiscovery_Browser_CreateShortcutEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    AppDiscovery_Browser_CreateShortcutEventValidator();
    ~AppDiscovery_Browser_CreateShortcutEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(1826365659052634425);
};

AppDiscovery_Browser_CreateShortcutEventValidator::AppDiscovery_Browser_CreateShortcutEventValidator() :
  ::metrics::structured::EventValidator(AppDiscovery_Browser_CreateShortcutEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

AppDiscovery_Browser_CreateShortcutEventValidator::~AppDiscovery_Browser_CreateShortcutEventValidator() = default;

void AppDiscovery_Browser_CreateShortcutEventValidator::Initialize() {
  metric_metadata_ = {
    {"AppId", { Event::MetricType::kRawString, UINT64_C(3436411431909560556)}}
   };


  metrics_name_map_ = {
    { UINT64_C(3436411431909560556), "AppId" }
  };
}

class OOBE_GaiaSigninRequestedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    OOBE_GaiaSigninRequestedEventValidator();
    ~OOBE_GaiaSigninRequestedEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(7215278611898390473);
};

OOBE_GaiaSigninRequestedEventValidator::OOBE_GaiaSigninRequestedEventValidator() :
  ::metrics::structured::EventValidator(OOBE_GaiaSigninRequestedEventValidator::kEventNameHash,
                                        true)
  {
  Initialize();
}

OOBE_GaiaSigninRequestedEventValidator::~OOBE_GaiaSigninRequestedEventValidator() = default;

void OOBE_GaiaSigninRequestedEventValidator::Initialize() {
  metric_metadata_ = {
    {"IsReauthentication", { Event::MetricType::kLong, UINT64_C(5577652860899525433)}},
  {"IsFlexFlow", { Event::MetricType::kLong, UINT64_C(5798416126479240383)}},
  {"IsDemoModeFlow", { Event::MetricType::kLong, UINT64_C(17073063279367758864)}},
  {"IsOwnerUser", { Event::MetricType::kLong, UINT64_C(9505254692993180831)}},
  {"IsEphemeralOrMGS", { Event::MetricType::kLong, UINT64_C(6790006799240086503)}},
  {"IsFirstOnboarding", { Event::MetricType::kLong, UINT64_C(13225088464573499838)}},
  {"ChromeMilestone", { Event::MetricType::kLong, UINT64_C(8933670696912054868)}}
   };


  metrics_name_map_ = {
    { UINT64_C(5577652860899525433), "IsReauthentication" },
  { UINT64_C(5798416126479240383), "IsFlexFlow" },
  { UINT64_C(17073063279367758864), "IsDemoModeFlow" },
  { UINT64_C(9505254692993180831), "IsOwnerUser" },
  { UINT64_C(6790006799240086503), "IsEphemeralOrMGS" },
  { UINT64_C(13225088464573499838), "IsFirstOnboarding" },
  { UINT64_C(8933670696912054868), "ChromeMilestone" }
  };
}

class OOBE_GaiaSigninCompletedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    OOBE_GaiaSigninCompletedEventValidator();
    ~OOBE_GaiaSigninCompletedEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(4496792889211345956);
};

OOBE_GaiaSigninCompletedEventValidator::OOBE_GaiaSigninCompletedEventValidator() :
  ::metrics::structured::EventValidator(OOBE_GaiaSigninCompletedEventValidator::kEventNameHash,
                                        true)
  {
  Initialize();
}

OOBE_GaiaSigninCompletedEventValidator::~OOBE_GaiaSigninCompletedEventValidator() = default;

void OOBE_GaiaSigninCompletedEventValidator::Initialize() {
  metric_metadata_ = {
    {"IsReauthentication", { Event::MetricType::kLong, UINT64_C(5577652860899525433)}},
  {"IsFlexFlow", { Event::MetricType::kLong, UINT64_C(5798416126479240383)}},
  {"IsDemoModeFlow", { Event::MetricType::kLong, UINT64_C(17073063279367758864)}},
  {"IsOwnerUser", { Event::MetricType::kLong, UINT64_C(9505254692993180831)}},
  {"IsEphemeralOrMGS", { Event::MetricType::kLong, UINT64_C(6790006799240086503)}},
  {"IsFirstOnboarding", { Event::MetricType::kLong, UINT64_C(13225088464573499838)}},
  {"ChromeMilestone", { Event::MetricType::kLong, UINT64_C(8933670696912054868)}}
   };


  metrics_name_map_ = {
    { UINT64_C(5577652860899525433), "IsReauthentication" },
  { UINT64_C(5798416126479240383), "IsFlexFlow" },
  { UINT64_C(17073063279367758864), "IsDemoModeFlow" },
  { UINT64_C(9505254692993180831), "IsOwnerUser" },
  { UINT64_C(6790006799240086503), "IsEphemeralOrMGS" },
  { UINT64_C(13225088464573499838), "IsFirstOnboarding" },
  { UINT64_C(8933670696912054868), "ChromeMilestone" }
  };
}

class OOBE_OobeStartedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    OOBE_OobeStartedEventValidator();
    ~OOBE_OobeStartedEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(16917942210530705939);
};

OOBE_OobeStartedEventValidator::OOBE_OobeStartedEventValidator() :
  ::metrics::structured::EventValidator(OOBE_OobeStartedEventValidator::kEventNameHash,
                                        true)
  {
  Initialize();
}

OOBE_OobeStartedEventValidator::~OOBE_OobeStartedEventValidator() = default;

void OOBE_OobeStartedEventValidator::Initialize() {
  metric_metadata_ = {
    {"IsFlexFlow", { Event::MetricType::kLong, UINT64_C(5798416126479240383)}},
  {"ChromeMilestone", { Event::MetricType::kLong, UINT64_C(8933670696912054868)}}
   };


  metrics_name_map_ = {
    { UINT64_C(5798416126479240383), "IsFlexFlow" },
  { UINT64_C(8933670696912054868), "ChromeMilestone" }
  };
}

class OOBE_PreLoginOobeCompletedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    OOBE_PreLoginOobeCompletedEventValidator();
    ~OOBE_PreLoginOobeCompletedEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(16454148751386228729);
};

OOBE_PreLoginOobeCompletedEventValidator::OOBE_PreLoginOobeCompletedEventValidator() :
  ::metrics::structured::EventValidator(OOBE_PreLoginOobeCompletedEventValidator::kEventNameHash,
                                        true)
  {
  Initialize();
}

OOBE_PreLoginOobeCompletedEventValidator::~OOBE_PreLoginOobeCompletedEventValidator() = default;

void OOBE_PreLoginOobeCompletedEventValidator::Initialize() {
  metric_metadata_ = {
    {"CompletedFlowType", { Event::MetricType::kLong, UINT64_C(4412736575066763809)}},
  {"IsFlexFlow", { Event::MetricType::kLong, UINT64_C(5798416126479240383)}},
  {"IsDemoModeFlow", { Event::MetricType::kLong, UINT64_C(17073063279367758864)}},
  {"ChromeMilestone", { Event::MetricType::kLong, UINT64_C(8933670696912054868)}}
   };


  metrics_name_map_ = {
    { UINT64_C(4412736575066763809), "CompletedFlowType" },
  { UINT64_C(5798416126479240383), "IsFlexFlow" },
  { UINT64_C(17073063279367758864), "IsDemoModeFlow" },
  { UINT64_C(8933670696912054868), "ChromeMilestone" }
  };
}

class OOBE_DeviceRegisteredEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    OOBE_DeviceRegisteredEventValidator();
    ~OOBE_DeviceRegisteredEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(8463510949069965716);
};

OOBE_DeviceRegisteredEventValidator::OOBE_DeviceRegisteredEventValidator() :
  ::metrics::structured::EventValidator(OOBE_DeviceRegisteredEventValidator::kEventNameHash,
                                        true)
  {
  Initialize();
}

OOBE_DeviceRegisteredEventValidator::~OOBE_DeviceRegisteredEventValidator() = default;

void OOBE_DeviceRegisteredEventValidator::Initialize() {
  metric_metadata_ = {
    {"IsFirstOnboarding", { Event::MetricType::kLong, UINT64_C(13225088464573499838)}},
  {"IsFlexFlow", { Event::MetricType::kLong, UINT64_C(5798416126479240383)}},
  {"IsDemoModeFlow", { Event::MetricType::kLong, UINT64_C(17073063279367758864)}},
  {"ChromeMilestone", { Event::MetricType::kLong, UINT64_C(8933670696912054868)}}
   };


  metrics_name_map_ = {
    { UINT64_C(13225088464573499838), "IsFirstOnboarding" },
  { UINT64_C(5798416126479240383), "IsFlexFlow" },
  { UINT64_C(17073063279367758864), "IsDemoModeFlow" },
  { UINT64_C(8933670696912054868), "ChromeMilestone" }
  };
}

class OOBE_OobeCompletedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    OOBE_OobeCompletedEventValidator();
    ~OOBE_OobeCompletedEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(10747825633360213518);
};

OOBE_OobeCompletedEventValidator::OOBE_OobeCompletedEventValidator() :
  ::metrics::structured::EventValidator(OOBE_OobeCompletedEventValidator::kEventNameHash,
                                        true)
  {
  Initialize();
}

OOBE_OobeCompletedEventValidator::~OOBE_OobeCompletedEventValidator() = default;

void OOBE_OobeCompletedEventValidator::Initialize() {
  metric_metadata_ = {
    {"IsFlexFlow", { Event::MetricType::kLong, UINT64_C(5798416126479240383)}},
  {"IsDemoModeFlow", { Event::MetricType::kLong, UINT64_C(17073063279367758864)}},
  {"IsOwnerUser", { Event::MetricType::kLong, UINT64_C(9505254692993180831)}},
  {"IsEphemeralOrMGS", { Event::MetricType::kLong, UINT64_C(6790006799240086503)}},
  {"IsFirstOnboarding", { Event::MetricType::kLong, UINT64_C(13225088464573499838)}},
  {"ChromeMilestone", { Event::MetricType::kLong, UINT64_C(8933670696912054868)}}
   };


  metrics_name_map_ = {
    { UINT64_C(5798416126479240383), "IsFlexFlow" },
  { UINT64_C(17073063279367758864), "IsDemoModeFlow" },
  { UINT64_C(9505254692993180831), "IsOwnerUser" },
  { UINT64_C(6790006799240086503), "IsEphemeralOrMGS" },
  { UINT64_C(13225088464573499838), "IsFirstOnboarding" },
  { UINT64_C(8933670696912054868), "ChromeMilestone" }
  };
}

class OOBE_OnboardingStartedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    OOBE_OnboardingStartedEventValidator();
    ~OOBE_OnboardingStartedEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(11157696941906249496);
};

OOBE_OnboardingStartedEventValidator::OOBE_OnboardingStartedEventValidator() :
  ::metrics::structured::EventValidator(OOBE_OnboardingStartedEventValidator::kEventNameHash,
                                        true)
  {
  Initialize();
}

OOBE_OnboardingStartedEventValidator::~OOBE_OnboardingStartedEventValidator() = default;

void OOBE_OnboardingStartedEventValidator::Initialize() {
  metric_metadata_ = {
    {"IsFlexFlow", { Event::MetricType::kLong, UINT64_C(5798416126479240383)}},
  {"IsDemoModeFlow", { Event::MetricType::kLong, UINT64_C(17073063279367758864)}},
  {"IsOwnerUser", { Event::MetricType::kLong, UINT64_C(9505254692993180831)}},
  {"IsEphemeralOrMGS", { Event::MetricType::kLong, UINT64_C(6790006799240086503)}},
  {"IsFirstOnboarding", { Event::MetricType::kLong, UINT64_C(13225088464573499838)}},
  {"ChromeMilestone", { Event::MetricType::kLong, UINT64_C(8933670696912054868)}}
   };


  metrics_name_map_ = {
    { UINT64_C(5798416126479240383), "IsFlexFlow" },
  { UINT64_C(17073063279367758864), "IsDemoModeFlow" },
  { UINT64_C(9505254692993180831), "IsOwnerUser" },
  { UINT64_C(6790006799240086503), "IsEphemeralOrMGS" },
  { UINT64_C(13225088464573499838), "IsFirstOnboarding" },
  { UINT64_C(8933670696912054868), "ChromeMilestone" }
  };
}

class OOBE_OnboardingCompletedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    OOBE_OnboardingCompletedEventValidator();
    ~OOBE_OnboardingCompletedEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(17879153985667426106);
};

OOBE_OnboardingCompletedEventValidator::OOBE_OnboardingCompletedEventValidator() :
  ::metrics::structured::EventValidator(OOBE_OnboardingCompletedEventValidator::kEventNameHash,
                                        true)
  {
  Initialize();
}

OOBE_OnboardingCompletedEventValidator::~OOBE_OnboardingCompletedEventValidator() = default;

void OOBE_OnboardingCompletedEventValidator::Initialize() {
  metric_metadata_ = {
    {"IsFlexFlow", { Event::MetricType::kLong, UINT64_C(5798416126479240383)}},
  {"IsDemoModeFlow", { Event::MetricType::kLong, UINT64_C(17073063279367758864)}},
  {"IsOwnerUser", { Event::MetricType::kLong, UINT64_C(9505254692993180831)}},
  {"IsEphemeralOrMGS", { Event::MetricType::kLong, UINT64_C(6790006799240086503)}},
  {"IsFirstOnboarding", { Event::MetricType::kLong, UINT64_C(13225088464573499838)}},
  {"ChromeMilestone", { Event::MetricType::kLong, UINT64_C(8933670696912054868)}}
   };


  metrics_name_map_ = {
    { UINT64_C(5798416126479240383), "IsFlexFlow" },
  { UINT64_C(17073063279367758864), "IsDemoModeFlow" },
  { UINT64_C(9505254692993180831), "IsOwnerUser" },
  { UINT64_C(6790006799240086503), "IsEphemeralOrMGS" },
  { UINT64_C(13225088464573499838), "IsFirstOnboarding" },
  { UINT64_C(8933670696912054868), "ChromeMilestone" }
  };
}

class OOBE_PageEnteredEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    OOBE_PageEnteredEventValidator();
    ~OOBE_PageEnteredEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(5040523310352364307);
};

OOBE_PageEnteredEventValidator::OOBE_PageEnteredEventValidator() :
  ::metrics::structured::EventValidator(OOBE_PageEnteredEventValidator::kEventNameHash,
                                        true)
  {
  Initialize();
}

OOBE_PageEnteredEventValidator::~OOBE_PageEnteredEventValidator() = default;

void OOBE_PageEnteredEventValidator::Initialize() {
  metric_metadata_ = {
    {"PageId", { Event::MetricType::kRawString, UINT64_C(10985869583411328777)}},
  {"IsFlexFlow", { Event::MetricType::kLong, UINT64_C(5798416126479240383)}},
  {"IsDemoModeFlow", { Event::MetricType::kLong, UINT64_C(17073063279367758864)}},
  {"IsOwnerUser", { Event::MetricType::kLong, UINT64_C(9505254692993180831)}},
  {"IsEphemeralOrMGS", { Event::MetricType::kLong, UINT64_C(6790006799240086503)}},
  {"IsFirstOnboarding", { Event::MetricType::kLong, UINT64_C(13225088464573499838)}},
  {"ChromeMilestone", { Event::MetricType::kLong, UINT64_C(8933670696912054868)}}
   };


  metrics_name_map_ = {
    { UINT64_C(10985869583411328777), "PageId" },
  { UINT64_C(5798416126479240383), "IsFlexFlow" },
  { UINT64_C(17073063279367758864), "IsDemoModeFlow" },
  { UINT64_C(9505254692993180831), "IsOwnerUser" },
  { UINT64_C(6790006799240086503), "IsEphemeralOrMGS" },
  { UINT64_C(13225088464573499838), "IsFirstOnboarding" },
  { UINT64_C(8933670696912054868), "ChromeMilestone" }
  };
}

class OOBE_PageSkippedBySystemEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    OOBE_PageSkippedBySystemEventValidator();
    ~OOBE_PageSkippedBySystemEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(3047534590220959328);
};

OOBE_PageSkippedBySystemEventValidator::OOBE_PageSkippedBySystemEventValidator() :
  ::metrics::structured::EventValidator(OOBE_PageSkippedBySystemEventValidator::kEventNameHash,
                                        true)
  {
  Initialize();
}

OOBE_PageSkippedBySystemEventValidator::~OOBE_PageSkippedBySystemEventValidator() = default;

void OOBE_PageSkippedBySystemEventValidator::Initialize() {
  metric_metadata_ = {
    {"PageId", { Event::MetricType::kRawString, UINT64_C(10985869583411328777)}},
  {"IsFlexFlow", { Event::MetricType::kLong, UINT64_C(5798416126479240383)}},
  {"IsDemoModeFlow", { Event::MetricType::kLong, UINT64_C(17073063279367758864)}},
  {"IsOwnerUser", { Event::MetricType::kLong, UINT64_C(9505254692993180831)}},
  {"IsEphemeralOrMGS", { Event::MetricType::kLong, UINT64_C(6790006799240086503)}},
  {"IsFirstOnboarding", { Event::MetricType::kLong, UINT64_C(13225088464573499838)}},
  {"ChromeMilestone", { Event::MetricType::kLong, UINT64_C(8933670696912054868)}}
   };


  metrics_name_map_ = {
    { UINT64_C(10985869583411328777), "PageId" },
  { UINT64_C(5798416126479240383), "IsFlexFlow" },
  { UINT64_C(17073063279367758864), "IsDemoModeFlow" },
  { UINT64_C(9505254692993180831), "IsOwnerUser" },
  { UINT64_C(6790006799240086503), "IsEphemeralOrMGS" },
  { UINT64_C(13225088464573499838), "IsFirstOnboarding" },
  { UINT64_C(8933670696912054868), "ChromeMilestone" }
  };
}

class OOBE_PageLeftEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    OOBE_PageLeftEventValidator();
    ~OOBE_PageLeftEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(9866162796307818893);
};

OOBE_PageLeftEventValidator::OOBE_PageLeftEventValidator() :
  ::metrics::structured::EventValidator(OOBE_PageLeftEventValidator::kEventNameHash,
                                        true)
  {
  Initialize();
}

OOBE_PageLeftEventValidator::~OOBE_PageLeftEventValidator() = default;

void OOBE_PageLeftEventValidator::Initialize() {
  metric_metadata_ = {
    {"PageId", { Event::MetricType::kRawString, UINT64_C(10985869583411328777)}},
  {"ExitReason", { Event::MetricType::kRawString, UINT64_C(17511456341007791027)}},
  {"IsFlexFlow", { Event::MetricType::kLong, UINT64_C(5798416126479240383)}},
  {"IsDemoModeFlow", { Event::MetricType::kLong, UINT64_C(17073063279367758864)}},
  {"IsOwnerUser", { Event::MetricType::kLong, UINT64_C(9505254692993180831)}},
  {"IsEphemeralOrMGS", { Event::MetricType::kLong, UINT64_C(6790006799240086503)}},
  {"IsFirstOnboarding", { Event::MetricType::kLong, UINT64_C(13225088464573499838)}},
  {"ChromeMilestone", { Event::MetricType::kLong, UINT64_C(8933670696912054868)}}
   };


  metrics_name_map_ = {
    { UINT64_C(10985869583411328777), "PageId" },
  { UINT64_C(17511456341007791027), "ExitReason" },
  { UINT64_C(5798416126479240383), "IsFlexFlow" },
  { UINT64_C(17073063279367758864), "IsDemoModeFlow" },
  { UINT64_C(9505254692993180831), "IsOwnerUser" },
  { UINT64_C(6790006799240086503), "IsEphemeralOrMGS" },
  { UINT64_C(13225088464573499838), "IsFirstOnboarding" },
  { UINT64_C(8933670696912054868), "ChromeMilestone" }
  };
}

class OOBE_PreLoginOobeResumedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    OOBE_PreLoginOobeResumedEventValidator();
    ~OOBE_PreLoginOobeResumedEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(5945023717299231192);
};

OOBE_PreLoginOobeResumedEventValidator::OOBE_PreLoginOobeResumedEventValidator() :
  ::metrics::structured::EventValidator(OOBE_PreLoginOobeResumedEventValidator::kEventNameHash,
                                        true)
  {
  Initialize();
}

OOBE_PreLoginOobeResumedEventValidator::~OOBE_PreLoginOobeResumedEventValidator() = default;

void OOBE_PreLoginOobeResumedEventValidator::Initialize() {
  metric_metadata_ = {
    {"PendingPageId", { Event::MetricType::kRawString, UINT64_C(18257920047382457110)}},
  {"ExitReason", { Event::MetricType::kRawString, UINT64_C(17511456341007791027)}},
  {"IsFlexFlow", { Event::MetricType::kLong, UINT64_C(5798416126479240383)}},
  {"IsDemoModeFlow", { Event::MetricType::kLong, UINT64_C(17073063279367758864)}},
  {"IsOwnerUser", { Event::MetricType::kLong, UINT64_C(9505254692993180831)}},
  {"IsEphemeralOrMGS", { Event::MetricType::kLong, UINT64_C(6790006799240086503)}},
  {"IsFirstOnboarding", { Event::MetricType::kLong, UINT64_C(13225088464573499838)}},
  {"ChromeMilestone", { Event::MetricType::kLong, UINT64_C(8933670696912054868)}}
   };


  metrics_name_map_ = {
    { UINT64_C(18257920047382457110), "PendingPageId" },
  { UINT64_C(17511456341007791027), "ExitReason" },
  { UINT64_C(5798416126479240383), "IsFlexFlow" },
  { UINT64_C(17073063279367758864), "IsDemoModeFlow" },
  { UINT64_C(9505254692993180831), "IsOwnerUser" },
  { UINT64_C(6790006799240086503), "IsEphemeralOrMGS" },
  { UINT64_C(13225088464573499838), "IsFirstOnboarding" },
  { UINT64_C(8933670696912054868), "ChromeMilestone" }
  };
}

class OOBE_OnboardingResumedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    OOBE_OnboardingResumedEventValidator();
    ~OOBE_OnboardingResumedEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(10437926740417395028);
};

OOBE_OnboardingResumedEventValidator::OOBE_OnboardingResumedEventValidator() :
  ::metrics::structured::EventValidator(OOBE_OnboardingResumedEventValidator::kEventNameHash,
                                        true)
  {
  Initialize();
}

OOBE_OnboardingResumedEventValidator::~OOBE_OnboardingResumedEventValidator() = default;

void OOBE_OnboardingResumedEventValidator::Initialize() {
  metric_metadata_ = {
    {"PendingPageId", { Event::MetricType::kRawString, UINT64_C(18257920047382457110)}},
  {"ExitReason", { Event::MetricType::kRawString, UINT64_C(17511456341007791027)}},
  {"IsFlexFlow", { Event::MetricType::kLong, UINT64_C(5798416126479240383)}},
  {"IsDemoModeFlow", { Event::MetricType::kLong, UINT64_C(17073063279367758864)}},
  {"IsOwnerUser", { Event::MetricType::kLong, UINT64_C(9505254692993180831)}},
  {"IsEphemeralOrMGS", { Event::MetricType::kLong, UINT64_C(6790006799240086503)}},
  {"IsFirstOnboarding", { Event::MetricType::kLong, UINT64_C(13225088464573499838)}},
  {"ChromeMilestone", { Event::MetricType::kLong, UINT64_C(8933670696912054868)}}
   };


  metrics_name_map_ = {
    { UINT64_C(18257920047382457110), "PendingPageId" },
  { UINT64_C(17511456341007791027), "ExitReason" },
  { UINT64_C(5798416126479240383), "IsFlexFlow" },
  { UINT64_C(17073063279367758864), "IsDemoModeFlow" },
  { UINT64_C(9505254692993180831), "IsOwnerUser" },
  { UINT64_C(6790006799240086503), "IsEphemeralOrMGS" },
  { UINT64_C(13225088464573499838), "IsFirstOnboarding" },
  { UINT64_C(8933670696912054868), "ChromeMilestone" }
  };
}

class OOBE_ChoobeResumedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    OOBE_ChoobeResumedEventValidator();
    ~OOBE_ChoobeResumedEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(5000399004328028203);
};

OOBE_ChoobeResumedEventValidator::OOBE_ChoobeResumedEventValidator() :
  ::metrics::structured::EventValidator(OOBE_ChoobeResumedEventValidator::kEventNameHash,
                                        true)
  {
  Initialize();
}

OOBE_ChoobeResumedEventValidator::~OOBE_ChoobeResumedEventValidator() = default;

void OOBE_ChoobeResumedEventValidator::Initialize() {
  metric_metadata_ = {
    {"ExitReason", { Event::MetricType::kRawString, UINT64_C(17511456341007791027)}},
  {"IsFlexFlow", { Event::MetricType::kLong, UINT64_C(5798416126479240383)}},
  {"IsDemoModeFlow", { Event::MetricType::kLong, UINT64_C(17073063279367758864)}},
  {"IsOwnerUser", { Event::MetricType::kLong, UINT64_C(9505254692993180831)}},
  {"IsEphemeralOrMGS", { Event::MetricType::kLong, UINT64_C(6790006799240086503)}},
  {"IsFirstOnboarding", { Event::MetricType::kLong, UINT64_C(13225088464573499838)}},
  {"ChromeMilestone", { Event::MetricType::kLong, UINT64_C(8933670696912054868)}}
   };


  metrics_name_map_ = {
    { UINT64_C(17511456341007791027), "ExitReason" },
  { UINT64_C(5798416126479240383), "IsFlexFlow" },
  { UINT64_C(17073063279367758864), "IsDemoModeFlow" },
  { UINT64_C(9505254692993180831), "IsOwnerUser" },
  { UINT64_C(6790006799240086503), "IsEphemeralOrMGS" },
  { UINT64_C(13225088464573499838), "IsFirstOnboarding" },
  { UINT64_C(8933670696912054868), "ChromeMilestone" }
  };
}

class UserLoginEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    UserLoginEventValidator();
    ~UserLoginEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(3946957472799472890);
};

UserLoginEventValidator::UserLoginEventValidator() :
  ::metrics::structured::EventValidator(UserLoginEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

UserLoginEventValidator::~UserLoginEventValidator() = default;

void UserLoginEventValidator::Initialize() {
  metric_metadata_ = {
    
   };


  metrics_name_map_ = {
    
  };
}

class UserLogoutEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    UserLogoutEventValidator();
    ~UserLogoutEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(15162740773924916380);
};

UserLogoutEventValidator::UserLogoutEventValidator() :
  ::metrics::structured::EventValidator(UserLogoutEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

UserLogoutEventValidator::~UserLogoutEventValidator() = default;

void UserLogoutEventValidator::Initialize() {
  metric_metadata_ = {
    
   };


  metrics_name_map_ = {
    
  };
}

class SystemSuspendedEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    SystemSuspendedEventValidator();
    ~SystemSuspendedEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(9156818098953353395);
};

SystemSuspendedEventValidator::SystemSuspendedEventValidator() :
  ::metrics::structured::EventValidator(SystemSuspendedEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

SystemSuspendedEventValidator::~SystemSuspendedEventValidator() = default;

void SystemSuspendedEventValidator::Initialize() {
  metric_metadata_ = {
    {"Reason", { Event::MetricType::kLong, UINT64_C(18445816987321669298)}}
   };


  metrics_name_map_ = {
    { UINT64_C(18445816987321669298), "Reason" }
  };
}

class Test1EventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    Test1EventValidator();
    ~Test1EventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(5509740142892158459);
};

Test1EventValidator::Test1EventValidator() :
  ::metrics::structured::EventValidator(Test1EventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

Test1EventValidator::~Test1EventValidator() = default;

void Test1EventValidator::Initialize() {
  metric_metadata_ = {
    {"Metric1", { Event::MetricType::kDouble, UINT64_C(8511085042759365099)}}
   };


  metrics_name_map_ = {
    { UINT64_C(8511085042759365099), "Metric1" }
  };
}

class NoMetricsEventEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    NoMetricsEventEventValidator();
    ~NoMetricsEventEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(5106854608989380457);
};

NoMetricsEventEventValidator::NoMetricsEventEventValidator() :
  ::metrics::structured::EventValidator(NoMetricsEventEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

NoMetricsEventEventValidator::~NoMetricsEventEventValidator() = default;

void NoMetricsEventEventValidator::Initialize() {
  metric_metadata_ = {
    
   };


  metrics_name_map_ = {
    
  };
}
class SessionStartEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    SessionStartEventValidator();
    ~SessionStartEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(13744243518034680300);
};

SessionStartEventValidator::SessionStartEventValidator() :
  ::metrics::structured::EventValidator(SessionStartEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

SessionStartEventValidator::~SessionStartEventValidator() = default;

void SessionStartEventValidator::Initialize() {
  metric_metadata_ = {
    {"Trigger", { Event::MetricType::kLong, UINT64_C(17769223356561141745)}},
  {"DockSide", { Event::MetricType::kLong, UINT64_C(11856538614544483686)}},
  {"SessionId", { Event::MetricType::kLong, UINT64_C(4297293875635157131)}}
   };


  metrics_name_map_ = {
    { UINT64_C(17769223356561141745), "Trigger" },
  { UINT64_C(11856538614544483686), "DockSide" },
  { UINT64_C(4297293875635157131), "SessionId" }
  };
}

class SessionEndEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    SessionEndEventValidator();
    ~SessionEndEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(3262187048172162891);
};

SessionEndEventValidator::SessionEndEventValidator() :
  ::metrics::structured::EventValidator(SessionEndEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

SessionEndEventValidator::~SessionEndEventValidator() = default;

void SessionEndEventValidator::Initialize() {
  metric_metadata_ = {
    {"Trigger", { Event::MetricType::kLong, UINT64_C(17769223356561141745)}},
  {"TimeSinceSessionStart", { Event::MetricType::kLong, UINT64_C(16337824081306684483)}},
  {"SessionId", { Event::MetricType::kLong, UINT64_C(4297293875635157131)}}
   };


  metrics_name_map_ = {
    { UINT64_C(17769223356561141745), "Trigger" },
  { UINT64_C(16337824081306684483), "TimeSinceSessionStart" },
  { UINT64_C(4297293875635157131), "SessionId" }
  };
}

class ImpressionEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    ImpressionEventValidator();
    ~ImpressionEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(4398047322841981703);
};

ImpressionEventValidator::ImpressionEventValidator() :
  ::metrics::structured::EventValidator(ImpressionEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

ImpressionEventValidator::~ImpressionEventValidator() = default;

void ImpressionEventValidator::Initialize() {
  metric_metadata_ = {
    {"VeId", { Event::MetricType::kLong, UINT64_C(15328103879772752934)}},
  {"VeType", { Event::MetricType::kLong, UINT64_C(15167065131200700515)}},
  {"VeParent", { Event::MetricType::kLong, UINT64_C(16136417644891610031)}},
  {"VeContext", { Event::MetricType::kLong, UINT64_C(15142575525071682906)}},
  {"TimeSinceSessionStart", { Event::MetricType::kLong, UINT64_C(16337824081306684483)}},
  {"SessionId", { Event::MetricType::kLong, UINT64_C(4297293875635157131)}},
  {"Width", { Event::MetricType::kLong, UINT64_C(3644896802912593514)}},
  {"Height", { Event::MetricType::kLong, UINT64_C(17205655745617698527)}}
   };


  metrics_name_map_ = {
    { UINT64_C(15328103879772752934), "VeId" },
  { UINT64_C(15167065131200700515), "VeType" },
  { UINT64_C(16136417644891610031), "VeParent" },
  { UINT64_C(15142575525071682906), "VeContext" },
  { UINT64_C(16337824081306684483), "TimeSinceSessionStart" },
  { UINT64_C(4297293875635157131), "SessionId" },
  { UINT64_C(3644896802912593514), "Width" },
  { UINT64_C(17205655745617698527), "Height" }
  };
}

class ResizeEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    ResizeEventValidator();
    ~ResizeEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(15727676286859240);
};

ResizeEventValidator::ResizeEventValidator() :
  ::metrics::structured::EventValidator(ResizeEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

ResizeEventValidator::~ResizeEventValidator() = default;

void ResizeEventValidator::Initialize() {
  metric_metadata_ = {
    {"VeId", { Event::MetricType::kLong, UINT64_C(15328103879772752934)}},
  {"TimeSinceSessionStart", { Event::MetricType::kLong, UINT64_C(16337824081306684483)}},
  {"SessionId", { Event::MetricType::kLong, UINT64_C(4297293875635157131)}},
  {"Width", { Event::MetricType::kLong, UINT64_C(3644896802912593514)}},
  {"Height", { Event::MetricType::kLong, UINT64_C(17205655745617698527)}}
   };


  metrics_name_map_ = {
    { UINT64_C(15328103879772752934), "VeId" },
  { UINT64_C(16337824081306684483), "TimeSinceSessionStart" },
  { UINT64_C(4297293875635157131), "SessionId" },
  { UINT64_C(3644896802912593514), "Width" },
  { UINT64_C(17205655745617698527), "Height" }
  };
}

class ClickEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    ClickEventValidator();
    ~ClickEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(5980286229304309245);
};

ClickEventValidator::ClickEventValidator() :
  ::metrics::structured::EventValidator(ClickEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

ClickEventValidator::~ClickEventValidator() = default;

void ClickEventValidator::Initialize() {
  metric_metadata_ = {
    {"VeId", { Event::MetricType::kLong, UINT64_C(15328103879772752934)}},
  {"MouseButton", { Event::MetricType::kLong, UINT64_C(5321775134026642721)}},
  {"Context", { Event::MetricType::kLong, UINT64_C(12487954430760699291)}},
  {"TimeSinceSessionStart", { Event::MetricType::kLong, UINT64_C(16337824081306684483)}},
  {"SessionId", { Event::MetricType::kLong, UINT64_C(4297293875635157131)}}
   };


  metrics_name_map_ = {
    { UINT64_C(15328103879772752934), "VeId" },
  { UINT64_C(5321775134026642721), "MouseButton" },
  { UINT64_C(12487954430760699291), "Context" },
  { UINT64_C(16337824081306684483), "TimeSinceSessionStart" },
  { UINT64_C(4297293875635157131), "SessionId" }
  };
}

class HoverEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    HoverEventValidator();
    ~HoverEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(4890306395588587268);
};

HoverEventValidator::HoverEventValidator() :
  ::metrics::structured::EventValidator(HoverEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

HoverEventValidator::~HoverEventValidator() = default;

void HoverEventValidator::Initialize() {
  metric_metadata_ = {
    {"VeId", { Event::MetricType::kLong, UINT64_C(15328103879772752934)}},
  {"Time", { Event::MetricType::kLong, UINT64_C(12064385795062408818)}},
  {"Context", { Event::MetricType::kLong, UINT64_C(12487954430760699291)}},
  {"TimeSinceSessionStart", { Event::MetricType::kLong, UINT64_C(16337824081306684483)}},
  {"SessionId", { Event::MetricType::kLong, UINT64_C(4297293875635157131)}}
   };


  metrics_name_map_ = {
    { UINT64_C(15328103879772752934), "VeId" },
  { UINT64_C(12064385795062408818), "Time" },
  { UINT64_C(12487954430760699291), "Context" },
  { UINT64_C(16337824081306684483), "TimeSinceSessionStart" },
  { UINT64_C(4297293875635157131), "SessionId" }
  };
}

class DragEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    DragEventValidator();
    ~DragEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(17504965937910711994);
};

DragEventValidator::DragEventValidator() :
  ::metrics::structured::EventValidator(DragEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

DragEventValidator::~DragEventValidator() = default;

void DragEventValidator::Initialize() {
  metric_metadata_ = {
    {"VeId", { Event::MetricType::kLong, UINT64_C(15328103879772752934)}},
  {"Distance", { Event::MetricType::kLong, UINT64_C(767569209284850633)}},
  {"Context", { Event::MetricType::kLong, UINT64_C(12487954430760699291)}},
  {"TimeSinceSessionStart", { Event::MetricType::kLong, UINT64_C(16337824081306684483)}},
  {"SessionId", { Event::MetricType::kLong, UINT64_C(4297293875635157131)}}
   };


  metrics_name_map_ = {
    { UINT64_C(15328103879772752934), "VeId" },
  { UINT64_C(767569209284850633), "Distance" },
  { UINT64_C(12487954430760699291), "Context" },
  { UINT64_C(16337824081306684483), "TimeSinceSessionStart" },
  { UINT64_C(4297293875635157131), "SessionId" }
  };
}

class ChangeEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    ChangeEventValidator();
    ~ChangeEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(11431363328394973259);
};

ChangeEventValidator::ChangeEventValidator() :
  ::metrics::structured::EventValidator(ChangeEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

ChangeEventValidator::~ChangeEventValidator() = default;

void ChangeEventValidator::Initialize() {
  metric_metadata_ = {
    {"VeId", { Event::MetricType::kLong, UINT64_C(15328103879772752934)}},
  {"Context", { Event::MetricType::kLong, UINT64_C(12487954430760699291)}},
  {"TimeSinceSessionStart", { Event::MetricType::kLong, UINT64_C(16337824081306684483)}},
  {"SessionId", { Event::MetricType::kLong, UINT64_C(4297293875635157131)}}
   };


  metrics_name_map_ = {
    { UINT64_C(15328103879772752934), "VeId" },
  { UINT64_C(12487954430760699291), "Context" },
  { UINT64_C(16337824081306684483), "TimeSinceSessionStart" },
  { UINT64_C(4297293875635157131), "SessionId" }
  };
}

class KeyDownEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    KeyDownEventValidator();
    ~KeyDownEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(1502882311982410087);
};

KeyDownEventValidator::KeyDownEventValidator() :
  ::metrics::structured::EventValidator(KeyDownEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

KeyDownEventValidator::~KeyDownEventValidator() = default;

void KeyDownEventValidator::Initialize() {
  metric_metadata_ = {
    {"VeId", { Event::MetricType::kLong, UINT64_C(15328103879772752934)}},
  {"Context", { Event::MetricType::kLong, UINT64_C(12487954430760699291)}},
  {"TimeSinceSessionStart", { Event::MetricType::kLong, UINT64_C(16337824081306684483)}},
  {"SessionId", { Event::MetricType::kLong, UINT64_C(4297293875635157131)}}
   };


  metrics_name_map_ = {
    { UINT64_C(15328103879772752934), "VeId" },
  { UINT64_C(12487954430760699291), "Context" },
  { UINT64_C(16337824081306684483), "TimeSinceSessionStart" },
  { UINT64_C(4297293875635157131), "SessionId" }
  };
}
class TestEventOneEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    TestEventOneEventValidator();
    ~TestEventOneEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(13593049295042080097);
};

TestEventOneEventValidator::TestEventOneEventValidator() :
  ::metrics::structured::EventValidator(TestEventOneEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

TestEventOneEventValidator::~TestEventOneEventValidator() = default;

void TestEventOneEventValidator::Initialize() {
  metric_metadata_ = {
    {"TestMetricOne", { Event::MetricType::kHmac, UINT64_C(637929385654885975)}},
  {"TestMetricTwo", { Event::MetricType::kLong, UINT64_C(14083999144141567134)}}
   };


  metrics_name_map_ = {
    { UINT64_C(637929385654885975), "TestMetricOne" },
  { UINT64_C(14083999144141567134), "TestMetricTwo" }
  };
}
class TestEventThreeEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    TestEventThreeEventValidator();
    ~TestEventThreeEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(5848687377041124372);
};

TestEventThreeEventValidator::TestEventThreeEventValidator() :
  ::metrics::structured::EventValidator(TestEventThreeEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

TestEventThreeEventValidator::~TestEventThreeEventValidator() = default;

void TestEventThreeEventValidator::Initialize() {
  metric_metadata_ = {
    {"TestMetricFour", { Event::MetricType::kHmac, UINT64_C(2917855408523247722)}}
   };


  metrics_name_map_ = {
    { UINT64_C(2917855408523247722), "TestMetricFour" }
  };
}

class TestEventTwoEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    TestEventTwoEventValidator();
    ~TestEventTwoEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(8995967733561999410);
};

TestEventTwoEventValidator::TestEventTwoEventValidator() :
  ::metrics::structured::EventValidator(TestEventTwoEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

TestEventTwoEventValidator::~TestEventTwoEventValidator() = default;

void TestEventTwoEventValidator::Initialize() {
  metric_metadata_ = {
    {"TestMetricThree", { Event::MetricType::kHmac, UINT64_C(13469300759843809564)}}
   };


  metrics_name_map_ = {
    { UINT64_C(13469300759843809564), "TestMetricThree" }
  };
}
class TestEventFourEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    TestEventFourEventValidator();
    ~TestEventFourEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(1718797808092246258);
};

TestEventFourEventValidator::TestEventFourEventValidator() :
  ::metrics::structured::EventValidator(TestEventFourEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

TestEventFourEventValidator::~TestEventFourEventValidator() = default;

void TestEventFourEventValidator::Initialize() {
  metric_metadata_ = {
    {"TestMetricFour", { Event::MetricType::kLong, UINT64_C(2917855408523247722)}}
   };


  metrics_name_map_ = {
    { UINT64_C(2917855408523247722), "TestMetricFour" }
  };
}
class TestEventFiveEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    TestEventFiveEventValidator();
    ~TestEventFiveEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(7045523601811399253);
};

TestEventFiveEventValidator::TestEventFiveEventValidator() :
  ::metrics::structured::EventValidator(TestEventFiveEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

TestEventFiveEventValidator::~TestEventFiveEventValidator() = default;

void TestEventFiveEventValidator::Initialize() {
  metric_metadata_ = {
    {"TestMetricFive", { Event::MetricType::kHmac, UINT64_C(8665976921794972190)}}
   };


  metrics_name_map_ = {
    { UINT64_C(8665976921794972190), "TestMetricFive" }
  };
}
class TestEventSixEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    TestEventSixEventValidator();
    ~TestEventSixEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(2873337042686447043);
};

TestEventSixEventValidator::TestEventSixEventValidator() :
  ::metrics::structured::EventValidator(TestEventSixEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

TestEventSixEventValidator::~TestEventSixEventValidator() = default;

void TestEventSixEventValidator::Initialize() {
  metric_metadata_ = {
    {"TestMetricSix", { Event::MetricType::kRawString, UINT64_C(3431522567539822144)}}
   };


  metrics_name_map_ = {
    { UINT64_C(3431522567539822144), "TestMetricSix" }
  };
}
class TestEventSevenEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    TestEventSevenEventValidator();
    ~TestEventSevenEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(16749091071228286247);
};

TestEventSevenEventValidator::TestEventSevenEventValidator() :
  ::metrics::structured::EventValidator(TestEventSevenEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

TestEventSevenEventValidator::~TestEventSevenEventValidator() = default;

void TestEventSevenEventValidator::Initialize() {
  metric_metadata_ = {
    {"TestMetricSeven", { Event::MetricType::kDouble, UINT64_C(8395865158198697574)}}
   };


  metrics_name_map_ = {
    { UINT64_C(8395865158198697574), "TestMetricSeven" }
  };
}

class TestEnumEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    TestEnumEventValidator();
    ~TestEnumEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(14837072141472316574);
};

TestEnumEventValidator::TestEnumEventValidator() :
  ::metrics::structured::EventValidator(TestEnumEventValidator::kEventNameHash,
                                        false)
  {
  Initialize();
}

TestEnumEventValidator::~TestEnumEventValidator() = default;

void TestEnumEventValidator::Initialize() {
  metric_metadata_ = {
    {"TestEnumMetric", { Event::MetricType::kInt, UINT64_C(16584986597633634829)}}
   };


  metrics_name_map_ = {
    { UINT64_C(16584986597633634829), "TestEnumMetric" }
  };
}
class TestEventEightEventValidator final :
    public ::metrics::structured::EventValidator {
  public:
    TestEventEightEventValidator();
    ~TestEventEightEventValidator();

    void Initialize();

    static constexpr uint64_t kEventNameHash = UINT64_C(16290206418240617738);
};

TestEventEightEventValidator::TestEventEightEventValidator() :
  ::metrics::structured::EventValidator(TestEventEightEventValidator::kEventNameHash,
                                        true)
  {
  Initialize();
}

TestEventEightEventValidator::~TestEventEightEventValidator() = default;

void TestEventEightEventValidator::Initialize() {
  metric_metadata_ = {
    {"TestMetricEight", { Event::MetricType::kDouble, UINT64_C(6311095899609065709)}}
   };


  metrics_name_map_ = {
    { UINT64_C(6311095899609065709), "TestMetricEight" }
  };
}

//---------------------ProjectValidator Classes---------------------------------
class PopularDisplaysProjectValidator final :
    public ::metrics::structured::ProjectValidator {
  public:
    PopularDisplaysProjectValidator();
    ~PopularDisplaysProjectValidator() override;

    void Initialize();

    static constexpr uint64_t kProjectNameHash = UINT64_C(13666187132464558198);
    static constexpr IdType kIdType = IdType::kUnidentified;
    static constexpr IdScope kIdScope = IdScope::kPerDevice;
    static constexpr EventType kEventType =
        StructuredEventProto_EventType_RAW_STRING;
    static constexpr int kKeyRotationPeriod =
        90;
};

PopularDisplaysProjectValidator::PopularDisplaysProjectValidator() :
  ::metrics::structured::ProjectValidator(
  PopularDisplaysProjectValidator::kProjectNameHash,
  PopularDisplaysProjectValidator::kIdType,
  PopularDisplaysProjectValidator::kIdScope,
  PopularDisplaysProjectValidator::kEventType,
  PopularDisplaysProjectValidator::kKeyRotationPeriod
)
  {
  Initialize();
}

void PopularDisplaysProjectValidator::Initialize() {
  event_validators_.emplace("MonitorInfo", std::make_unique<MonitorInfoEventValidator>());

  event_name_map_.emplace(UINT64_C(2134486541903110786), "MonitorInfo");
}

PopularDisplaysProjectValidator::~PopularDisplaysProjectValidator() = default;

class FastPairProjectValidator final :
    public ::metrics::structured::ProjectValidator {
  public:
    FastPairProjectValidator();
    ~FastPairProjectValidator() override;

    void Initialize();

    static constexpr uint64_t kProjectNameHash = UINT64_C(4257181691211608017);
    static constexpr IdType kIdType = IdType::kUnidentified;
    static constexpr IdScope kIdScope = IdScope::kPerProfile;
    static constexpr EventType kEventType =
        StructuredEventProto_EventType_REGULAR;
    static constexpr int kKeyRotationPeriod =
        30;
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

  event_name_map_.emplace(UINT64_C(9794167847225427927), "DiscoveryNotificationShown");
  event_name_map_.emplace(UINT64_C(2342185101128577068), "PairingStart");
  event_name_map_.emplace(UINT64_C(7548910873986616453), "PairingComplete");
  event_name_map_.emplace(UINT64_C(17174637411246838540), "PairFailure");
}

FastPairProjectValidator::~FastPairProjectValidator() = default;

class HindsightProjectValidator final :
    public ::metrics::structured::ProjectValidator {
  public:
    HindsightProjectValidator();
    ~HindsightProjectValidator() override;

    void Initialize();

    static constexpr uint64_t kProjectNameHash = UINT64_C(16658867201751992801);
    static constexpr IdType kIdType = IdType::kProjectId;
    static constexpr IdScope kIdScope = IdScope::kPerProfile;
    static constexpr EventType kEventType =
        StructuredEventProto_EventType_REGULAR;
    static constexpr int kKeyRotationPeriod =
        90;
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

  event_name_map_.emplace(UINT64_C(6176288366907657397), "CrOSActionEvent_FileOpened");
  event_name_map_.emplace(UINT64_C(7258544623737125992), "CrOSActionEvent_SearchResultLaunched");
  event_name_map_.emplace(UINT64_C(15173432087155953262), "CrOSActionEvent_SettingChanged");
  event_name_map_.emplace(UINT64_C(11495565264134779777), "CrOSActionEvent_TabEvent_TabNavigated");
  event_name_map_.emplace(UINT64_C(13824184328368382026), "CrOSActionEvent_TabEvent_TabOpened");
  event_name_map_.emplace(UINT64_C(1414982393805218127), "CrOSActionEvent_TabEvent_TabReactivated");
}

HindsightProjectValidator::~HindsightProjectValidator() = default;

class LauncherUsageProjectValidator final :
    public ::metrics::structured::ProjectValidator {
  public:
    LauncherUsageProjectValidator();
    ~LauncherUsageProjectValidator() override;

    void Initialize();

    static constexpr uint64_t kProjectNameHash = UINT64_C(10270819838268357145);
    static constexpr IdType kIdType = IdType::kProjectId;
    static constexpr IdScope kIdScope = IdScope::kPerProfile;
    static constexpr EventType kEventType =
        StructuredEventProto_EventType_REGULAR;
    static constexpr int kKeyRotationPeriod =
        90;
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

  event_name_map_.emplace(UINT64_C(338987758122020898), "LauncherUsage");
}

LauncherUsageProjectValidator::~LauncherUsageProjectValidator() = default;

class NearbyShareProjectValidator final :
    public ::metrics::structured::ProjectValidator {
  public:
    NearbyShareProjectValidator();
    ~NearbyShareProjectValidator() override;

    void Initialize();

    static constexpr uint64_t kProjectNameHash = UINT64_C(16660214177681096661);
    static constexpr IdType kIdType = IdType::kUnidentified;
    static constexpr IdScope kIdScope = IdScope::kPerProfile;
    static constexpr EventType kEventType =
        StructuredEventProto_EventType_REGULAR;
    static constexpr int kKeyRotationPeriod =
        30;
};

NearbyShareProjectValidator::NearbyShareProjectValidator() :
  ::metrics::structured::ProjectValidator(
  NearbyShareProjectValidator::kProjectNameHash,
  NearbyShareProjectValidator::kIdType,
  NearbyShareProjectValidator::kIdScope,
  NearbyShareProjectValidator::kEventType,
  NearbyShareProjectValidator::kKeyRotationPeriod
)
  {
  Initialize();
}

void NearbyShareProjectValidator::Initialize() {
  event_validators_.emplace("Discovery", std::make_unique<DiscoveryEventValidator>());
  event_validators_.emplace("Throughput", std::make_unique<ThroughputEventValidator>());
  event_validators_.emplace("FileAttachment", std::make_unique<FileAttachmentEventValidator>());
  event_validators_.emplace("TextAttachment", std::make_unique<TextAttachmentEventValidator>());
  event_validators_.emplace("ShareSession", std::make_unique<ShareSessionEventValidator>());

  event_name_map_.emplace(UINT64_C(8121790022846552438), "Discovery");
  event_name_map_.emplace(UINT64_C(12486561721064188940), "Throughput");
  event_name_map_.emplace(UINT64_C(16611026906961162750), "FileAttachment");
  event_name_map_.emplace(UINT64_C(6709412692638581792), "TextAttachment");
  event_name_map_.emplace(UINT64_C(3465270551632052329), "ShareSession");
}

NearbyShareProjectValidator::~NearbyShareProjectValidator() = default;

class StructuredMetricsProjectValidator final :
    public ::metrics::structured::ProjectValidator {
  public:
    StructuredMetricsProjectValidator();
    ~StructuredMetricsProjectValidator() override;

    void Initialize();

    static constexpr uint64_t kProjectNameHash = UINT64_C(12908457551569912491);
    static constexpr IdType kIdType = IdType::kProjectId;
    static constexpr IdScope kIdScope = IdScope::kPerDevice;
    static constexpr EventType kEventType =
        StructuredEventProto_EventType_REGULAR;
    static constexpr int kKeyRotationPeriod =
        90;
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

  event_name_map_.emplace(UINT64_C(17627823560409533063), "Initialization");
}

StructuredMetricsProjectValidator::~StructuredMetricsProjectValidator() = default;

class CrOSEventsProjectValidator final :
    public ::metrics::structured::ProjectValidator {
  public:
    CrOSEventsProjectValidator();
    ~CrOSEventsProjectValidator() override;

    void Initialize();

    static constexpr uint64_t kProjectNameHash = UINT64_C(12657197978410187837);
    static constexpr IdType kIdType = IdType::kProjectId;
    static constexpr IdScope kIdScope = IdScope::kPerDevice;
    static constexpr EventType kEventType =
        StructuredEventProto_EventType_SEQUENCE;
    static constexpr int kKeyRotationPeriod =
        120;
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
  event_validators_.emplace("OOBE_GaiaSigninRequested", std::make_unique<OOBE_GaiaSigninRequestedEventValidator>());
  event_validators_.emplace("OOBE_GaiaSigninCompleted", std::make_unique<OOBE_GaiaSigninCompletedEventValidator>());
  event_validators_.emplace("OOBE_OobeStarted", std::make_unique<OOBE_OobeStartedEventValidator>());
  event_validators_.emplace("OOBE_PreLoginOobeCompleted", std::make_unique<OOBE_PreLoginOobeCompletedEventValidator>());
  event_validators_.emplace("OOBE_DeviceRegistered", std::make_unique<OOBE_DeviceRegisteredEventValidator>());
  event_validators_.emplace("OOBE_OobeCompleted", std::make_unique<OOBE_OobeCompletedEventValidator>());
  event_validators_.emplace("OOBE_OnboardingStarted", std::make_unique<OOBE_OnboardingStartedEventValidator>());
  event_validators_.emplace("OOBE_OnboardingCompleted", std::make_unique<OOBE_OnboardingCompletedEventValidator>());
  event_validators_.emplace("OOBE_PageEntered", std::make_unique<OOBE_PageEnteredEventValidator>());
  event_validators_.emplace("OOBE_PageSkippedBySystem", std::make_unique<OOBE_PageSkippedBySystemEventValidator>());
  event_validators_.emplace("OOBE_PageLeft", std::make_unique<OOBE_PageLeftEventValidator>());
  event_validators_.emplace("OOBE_PreLoginOobeResumed", std::make_unique<OOBE_PreLoginOobeResumedEventValidator>());
  event_validators_.emplace("OOBE_OnboardingResumed", std::make_unique<OOBE_OnboardingResumedEventValidator>());
  event_validators_.emplace("OOBE_ChoobeResumed", std::make_unique<OOBE_ChoobeResumedEventValidator>());
  event_validators_.emplace("UserLogin", std::make_unique<UserLoginEventValidator>());
  event_validators_.emplace("UserLogout", std::make_unique<UserLogoutEventValidator>());
  event_validators_.emplace("SystemSuspended", std::make_unique<SystemSuspendedEventValidator>());
  event_validators_.emplace("Test1", std::make_unique<Test1EventValidator>());
  event_validators_.emplace("NoMetricsEvent", std::make_unique<NoMetricsEventEventValidator>());

  event_name_map_.emplace(UINT64_C(7058343684005446180), "AppDiscovery_AppInstalled");
  event_name_map_.emplace(UINT64_C(10707673304400816961), "AppDiscovery_AppLaunched");
  event_name_map_.emplace(UINT64_C(2738328505235822343), "AppDiscovery_AppUninstall");
  event_name_map_.emplace(UINT64_C(9243762327526693209), "AppDiscovery_AppStateChanged");
  event_name_map_.emplace(UINT64_C(14878222005301987403), "AppDiscovery_LauncherOpen");
  event_name_map_.emplace(UINT64_C(8029308694385404808), "AppDiscovery_AppLauncherResultOpened");
  event_name_map_.emplace(UINT64_C(3850425801585793723), "AppDiscovery_Browser_OmniboxInstallIconClicked");
  event_name_map_.emplace(UINT64_C(12637046804977021887), "AppDiscovery_Browser_AppInstallDialogShown");
  event_name_map_.emplace(UINT64_C(13700312836166654669), "AppDiscovery_Browser_AppInstallDialogResult");
  event_name_map_.emplace(UINT64_C(9038997657104637664), "AppDiscovery_Browser_ClickInstallAppFromMenu");
  event_name_map_.emplace(UINT64_C(1826365659052634425), "AppDiscovery_Browser_CreateShortcut");
  event_name_map_.emplace(UINT64_C(7215278611898390473), "OOBE_GaiaSigninRequested");
  event_name_map_.emplace(UINT64_C(4496792889211345956), "OOBE_GaiaSigninCompleted");
  event_name_map_.emplace(UINT64_C(16917942210530705939), "OOBE_OobeStarted");
  event_name_map_.emplace(UINT64_C(16454148751386228729), "OOBE_PreLoginOobeCompleted");
  event_name_map_.emplace(UINT64_C(8463510949069965716), "OOBE_DeviceRegistered");
  event_name_map_.emplace(UINT64_C(10747825633360213518), "OOBE_OobeCompleted");
  event_name_map_.emplace(UINT64_C(11157696941906249496), "OOBE_OnboardingStarted");
  event_name_map_.emplace(UINT64_C(17879153985667426106), "OOBE_OnboardingCompleted");
  event_name_map_.emplace(UINT64_C(5040523310352364307), "OOBE_PageEntered");
  event_name_map_.emplace(UINT64_C(3047534590220959328), "OOBE_PageSkippedBySystem");
  event_name_map_.emplace(UINT64_C(9866162796307818893), "OOBE_PageLeft");
  event_name_map_.emplace(UINT64_C(5945023717299231192), "OOBE_PreLoginOobeResumed");
  event_name_map_.emplace(UINT64_C(10437926740417395028), "OOBE_OnboardingResumed");
  event_name_map_.emplace(UINT64_C(5000399004328028203), "OOBE_ChoobeResumed");
  event_name_map_.emplace(UINT64_C(3946957472799472890), "UserLogin");
  event_name_map_.emplace(UINT64_C(15162740773924916380), "UserLogout");
  event_name_map_.emplace(UINT64_C(9156818098953353395), "SystemSuspended");
  event_name_map_.emplace(UINT64_C(5509740142892158459), "Test1");
  event_name_map_.emplace(UINT64_C(5106854608989380457), "NoMetricsEvent");
}

CrOSEventsProjectValidator::~CrOSEventsProjectValidator() = default;

class DevToolsProjectValidator final :
    public ::metrics::structured::ProjectValidator {
  public:
    DevToolsProjectValidator();
    ~DevToolsProjectValidator() override;

    void Initialize();

    static constexpr uint64_t kProjectNameHash = UINT64_C(5200054249928363981);
    static constexpr IdType kIdType = IdType::kProjectId;
    static constexpr IdScope kIdScope = IdScope::kPerDevice;
    static constexpr EventType kEventType =
        StructuredEventProto_EventType_REGULAR;
    static constexpr int kKeyRotationPeriod =
        120;
};

DevToolsProjectValidator::DevToolsProjectValidator() :
  ::metrics::structured::ProjectValidator(
  DevToolsProjectValidator::kProjectNameHash,
  DevToolsProjectValidator::kIdType,
  DevToolsProjectValidator::kIdScope,
  DevToolsProjectValidator::kEventType,
  DevToolsProjectValidator::kKeyRotationPeriod
)
  {
  Initialize();
}

void DevToolsProjectValidator::Initialize() {
  event_validators_.emplace("SessionStart", std::make_unique<SessionStartEventValidator>());
  event_validators_.emplace("SessionEnd", std::make_unique<SessionEndEventValidator>());
  event_validators_.emplace("Impression", std::make_unique<ImpressionEventValidator>());
  event_validators_.emplace("Resize", std::make_unique<ResizeEventValidator>());
  event_validators_.emplace("Click", std::make_unique<ClickEventValidator>());
  event_validators_.emplace("Hover", std::make_unique<HoverEventValidator>());
  event_validators_.emplace("Drag", std::make_unique<DragEventValidator>());
  event_validators_.emplace("Change", std::make_unique<ChangeEventValidator>());
  event_validators_.emplace("KeyDown", std::make_unique<KeyDownEventValidator>());

  event_name_map_.emplace(UINT64_C(13744243518034680300), "SessionStart");
  event_name_map_.emplace(UINT64_C(3262187048172162891), "SessionEnd");
  event_name_map_.emplace(UINT64_C(4398047322841981703), "Impression");
  event_name_map_.emplace(UINT64_C(15727676286859240), "Resize");
  event_name_map_.emplace(UINT64_C(5980286229304309245), "Click");
  event_name_map_.emplace(UINT64_C(4890306395588587268), "Hover");
  event_name_map_.emplace(UINT64_C(17504965937910711994), "Drag");
  event_name_map_.emplace(UINT64_C(11431363328394973259), "Change");
  event_name_map_.emplace(UINT64_C(1502882311982410087), "KeyDown");
}

DevToolsProjectValidator::~DevToolsProjectValidator() = default;

class TestProjectOneProjectValidator final :
    public ::metrics::structured::ProjectValidator {
  public:
    TestProjectOneProjectValidator();
    ~TestProjectOneProjectValidator() override;

    void Initialize();

    static constexpr uint64_t kProjectNameHash = UINT64_C(16881314472396226433);
    static constexpr IdType kIdType = IdType::kProjectId;
    static constexpr IdScope kIdScope = IdScope::kPerProfile;
    static constexpr EventType kEventType =
        StructuredEventProto_EventType_REGULAR;
    static constexpr int kKeyRotationPeriod =
        90;
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

  event_name_map_.emplace(UINT64_C(13593049295042080097), "TestEventOne");
}

TestProjectOneProjectValidator::~TestProjectOneProjectValidator() = default;

class TestProjectTwoProjectValidator final :
    public ::metrics::structured::ProjectValidator {
  public:
    TestProjectTwoProjectValidator();
    ~TestProjectTwoProjectValidator() override;

    void Initialize();

    static constexpr uint64_t kProjectNameHash = UINT64_C(5876808001962504629);
    static constexpr IdType kIdType = IdType::kProjectId;
    static constexpr IdScope kIdScope = IdScope::kPerProfile;
    static constexpr EventType kEventType =
        StructuredEventProto_EventType_REGULAR;
    static constexpr int kKeyRotationPeriod =
        90;
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

  event_name_map_.emplace(UINT64_C(5848687377041124372), "TestEventThree");
  event_name_map_.emplace(UINT64_C(8995967733561999410), "TestEventTwo");
}

TestProjectTwoProjectValidator::~TestProjectTwoProjectValidator() = default;

class TestProjectThreeProjectValidator final :
    public ::metrics::structured::ProjectValidator {
  public:
    TestProjectThreeProjectValidator();
    ~TestProjectThreeProjectValidator() override;

    void Initialize();

    static constexpr uint64_t kProjectNameHash = UINT64_C(10860358748803291132);
    static constexpr IdType kIdType = IdType::kUmaId;
    static constexpr IdScope kIdScope = IdScope::kPerProfile;
    static constexpr EventType kEventType =
        StructuredEventProto_EventType_REGULAR;
    static constexpr int kKeyRotationPeriod =
        90;
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

  event_name_map_.emplace(UINT64_C(1718797808092246258), "TestEventFour");
}

TestProjectThreeProjectValidator::~TestProjectThreeProjectValidator() = default;

class TestProjectFourProjectValidator final :
    public ::metrics::structured::ProjectValidator {
  public:
    TestProjectFourProjectValidator();
    ~TestProjectFourProjectValidator() override;

    void Initialize();

    static constexpr uint64_t kProjectNameHash = UINT64_C(6801665881746546626);
    static constexpr IdType kIdType = IdType::kProjectId;
    static constexpr IdScope kIdScope = IdScope::kPerDevice;
    static constexpr EventType kEventType =
        StructuredEventProto_EventType_REGULAR;
    static constexpr int kKeyRotationPeriod =
        90;
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

  event_name_map_.emplace(UINT64_C(7045523601811399253), "TestEventFive");
}

TestProjectFourProjectValidator::~TestProjectFourProjectValidator() = default;

class TestProjectFiveProjectValidator final :
    public ::metrics::structured::ProjectValidator {
  public:
    TestProjectFiveProjectValidator();
    ~TestProjectFiveProjectValidator() override;

    void Initialize();

    static constexpr uint64_t kProjectNameHash = UINT64_C(3960582687892677139);
    static constexpr IdType kIdType = IdType::kUnidentified;
    static constexpr IdScope kIdScope = IdScope::kPerProfile;
    static constexpr EventType kEventType =
        StructuredEventProto_EventType_RAW_STRING;
    static constexpr int kKeyRotationPeriod =
        90;
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

  event_name_map_.emplace(UINT64_C(2873337042686447043), "TestEventSix");
}

TestProjectFiveProjectValidator::~TestProjectFiveProjectValidator() = default;

class TestProjectSixProjectValidator final :
    public ::metrics::structured::ProjectValidator {
  public:
    TestProjectSixProjectValidator();
    ~TestProjectSixProjectValidator() override;

    void Initialize();

    static constexpr uint64_t kProjectNameHash = UINT64_C(6972396123792667134);
    static constexpr IdType kIdType = IdType::kUnidentified;
    static constexpr IdScope kIdScope = IdScope::kPerProfile;
    static constexpr EventType kEventType =
        StructuredEventProto_EventType_REGULAR;
    static constexpr int kKeyRotationPeriod =
        90;
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
  event_validators_.emplace("TestEnum", std::make_unique<TestEnumEventValidator>());

  event_name_map_.emplace(UINT64_C(16749091071228286247), "TestEventSeven");
  event_name_map_.emplace(UINT64_C(14837072141472316574), "TestEnum");
}

TestProjectSixProjectValidator::~TestProjectSixProjectValidator() = default;

class TestProjectSevenProjectValidator final :
    public ::metrics::structured::ProjectValidator {
  public:
    TestProjectSevenProjectValidator();
    ~TestProjectSevenProjectValidator() override;

    void Initialize();

    static constexpr uint64_t kProjectNameHash = UINT64_C(10319251808101486833);
    static constexpr IdType kIdType = IdType::kUnidentified;
    static constexpr IdScope kIdScope = IdScope::kPerProfile;
    static constexpr EventType kEventType =
        StructuredEventProto_EventType_REGULAR;
    static constexpr int kKeyRotationPeriod =
        90;
};

TestProjectSevenProjectValidator::TestProjectSevenProjectValidator() :
  ::metrics::structured::ProjectValidator(
  TestProjectSevenProjectValidator::kProjectNameHash,
  TestProjectSevenProjectValidator::kIdType,
  TestProjectSevenProjectValidator::kIdScope,
  TestProjectSevenProjectValidator::kEventType,
  TestProjectSevenProjectValidator::kKeyRotationPeriod
)
  {
  Initialize();
}

void TestProjectSevenProjectValidator::Initialize() {
  event_validators_.emplace("TestEventEight", std::make_unique<TestEventEightEventValidator>());

  event_name_map_.emplace(UINT64_C(16290206418240617738), "TestEventEight");
}

TestProjectSevenProjectValidator::~TestProjectSevenProjectValidator() = default;



}

namespace validator {

Validators::Validators() {
  Initialize();
}

void Validators::Initialize() {
  validators_.emplace("PopularDisplays", std::make_unique<PopularDisplaysProjectValidator>());
  validators_.emplace("FastPair", std::make_unique<FastPairProjectValidator>());
  validators_.emplace("Hindsight", std::make_unique<HindsightProjectValidator>());
  validators_.emplace("LauncherUsage", std::make_unique<LauncherUsageProjectValidator>());
  validators_.emplace("NearbyShare", std::make_unique<NearbyShareProjectValidator>());
  validators_.emplace("StructuredMetrics", std::make_unique<StructuredMetricsProjectValidator>());
  validators_.emplace("CrOSEvents", std::make_unique<CrOSEventsProjectValidator>());
  validators_.emplace("DevTools", std::make_unique<DevToolsProjectValidator>());
  validators_.emplace("TestProjectOne", std::make_unique<TestProjectOneProjectValidator>());
  validators_.emplace("TestProjectTwo", std::make_unique<TestProjectTwoProjectValidator>());
  validators_.emplace("TestProjectThree", std::make_unique<TestProjectThreeProjectValidator>());
  validators_.emplace("TestProjectFour", std::make_unique<TestProjectFourProjectValidator>());
  validators_.emplace("TestProjectFive", std::make_unique<TestProjectFiveProjectValidator>());
  validators_.emplace("TestProjectSix", std::make_unique<TestProjectSixProjectValidator>());
  validators_.emplace("TestProjectSeven", std::make_unique<TestProjectSevenProjectValidator>());

  project_name_map_.emplace(UINT64_C(13666187132464558198), "PopularDisplays");
  project_name_map_.emplace(UINT64_C(4257181691211608017), "FastPair");
  project_name_map_.emplace(UINT64_C(16658867201751992801), "Hindsight");
  project_name_map_.emplace(UINT64_C(10270819838268357145), "LauncherUsage");
  project_name_map_.emplace(UINT64_C(16660214177681096661), "NearbyShare");
  project_name_map_.emplace(UINT64_C(12908457551569912491), "StructuredMetrics");
  project_name_map_.emplace(UINT64_C(12657197978410187837), "CrOSEvents");
  project_name_map_.emplace(UINT64_C(5200054249928363981), "DevTools");
  project_name_map_.emplace(UINT64_C(16881314472396226433), "TestProjectOne");
  project_name_map_.emplace(UINT64_C(5876808001962504629), "TestProjectTwo");
  project_name_map_.emplace(UINT64_C(10860358748803291132), "TestProjectThree");
  project_name_map_.emplace(UINT64_C(6801665881746546626), "TestProjectFour");
  project_name_map_.emplace(UINT64_C(3960582687892677139), "TestProjectFive");
  project_name_map_.emplace(UINT64_C(6972396123792667134), "TestProjectSix");
  project_name_map_.emplace(UINT64_C(10319251808101486833), "TestProjectSeven");
}

std::optional<const ProjectValidator*>
  Validators::GetProjectValidator(base::StringPiece project_name) const {
    const auto it = validators_.find(project_name);
    if (it == validators_.end())
      return std::nullopt;
    return it->second.get();
}

std::optional<base::StringPiece>
  Validators::GetProjectName(uint64_t project_name_hash) const {
    const auto it = project_name_map_.find(project_name_hash);
    if (it == project_name_map_.end())
      return std::nullopt;
    // This lookup will never fail.
    return it->second;
}

// static
Validators* Validators::Get() {
  static base::NoDestructor<Validators> validators;
  return validators.get();
}

} // namespace validator
}  // namespace structured
}  // namespace metrics