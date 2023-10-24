// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_TRACING_H_
#define HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_TRACING_H_

#include "base/notreached.h"
#include "base/values.h"
#include "headless/public/devtools/domains/types_tracing.h"
#include "headless/public/internal/value_conversions.h"

namespace headless {
namespace internal {



template <>
struct FromValue<tracing::TraceConfig> {
  static std::unique_ptr<tracing::TraceConfig> Parse(const base::Value& value, ErrorReporter* errors) {
    return tracing::TraceConfig::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const tracing::TraceConfig& value) {
  return value.Serialize();
}

template <>
struct FromValue<tracing::StreamFormat> {
  static tracing::StreamFormat Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return tracing::StreamFormat::JSON;
    }
    if (value.GetString() == "json")
      return tracing::StreamFormat::JSON;
    if (value.GetString() == "proto")
      return tracing::StreamFormat::PROTO;
    errors->AddError("invalid enum value");
    return tracing::StreamFormat::JSON;
  }
};

template <>
inline base::Value ToValue(const tracing::StreamFormat& value) {
  switch (value) {
    case tracing::StreamFormat::JSON:
      return base::Value("json");
    case tracing::StreamFormat::PROTO:
      return base::Value("proto");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<tracing::StreamCompression> {
  static tracing::StreamCompression Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return tracing::StreamCompression::NONE;
    }
    if (value.GetString() == "none")
      return tracing::StreamCompression::NONE;
    if (value.GetString() == "gzip")
      return tracing::StreamCompression::GZIP;
    errors->AddError("invalid enum value");
    return tracing::StreamCompression::NONE;
  }
};

template <>
inline base::Value ToValue(const tracing::StreamCompression& value) {
  switch (value) {
    case tracing::StreamCompression::NONE:
      return base::Value("none");
    case tracing::StreamCompression::GZIP:
      return base::Value("gzip");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<tracing::MemoryDumpLevelOfDetail> {
  static tracing::MemoryDumpLevelOfDetail Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return tracing::MemoryDumpLevelOfDetail::BACKGROUND;
    }
    if (value.GetString() == "background")
      return tracing::MemoryDumpLevelOfDetail::BACKGROUND;
    if (value.GetString() == "light")
      return tracing::MemoryDumpLevelOfDetail::LIGHT;
    if (value.GetString() == "detailed")
      return tracing::MemoryDumpLevelOfDetail::DETAILED;
    errors->AddError("invalid enum value");
    return tracing::MemoryDumpLevelOfDetail::BACKGROUND;
  }
};

template <>
inline base::Value ToValue(const tracing::MemoryDumpLevelOfDetail& value) {
  switch (value) {
    case tracing::MemoryDumpLevelOfDetail::BACKGROUND:
      return base::Value("background");
    case tracing::MemoryDumpLevelOfDetail::LIGHT:
      return base::Value("light");
    case tracing::MemoryDumpLevelOfDetail::DETAILED:
      return base::Value("detailed");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<tracing::TracingBackend> {
  static tracing::TracingBackend Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return tracing::TracingBackend::AUTO;
    }
    if (value.GetString() == "auto")
      return tracing::TracingBackend::AUTO;
    if (value.GetString() == "chrome")
      return tracing::TracingBackend::CHROME;
    if (value.GetString() == "system")
      return tracing::TracingBackend::SYSTEM;
    errors->AddError("invalid enum value");
    return tracing::TracingBackend::AUTO;
  }
};

template <>
inline base::Value ToValue(const tracing::TracingBackend& value) {
  switch (value) {
    case tracing::TracingBackend::AUTO:
      return base::Value("auto");
    case tracing::TracingBackend::CHROME:
      return base::Value("chrome");
    case tracing::TracingBackend::SYSTEM:
      return base::Value("system");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<tracing::TraceConfigRecordMode> {
  static tracing::TraceConfigRecordMode Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return tracing::TraceConfigRecordMode::RECORD_UNTIL_FULL;
    }
    if (value.GetString() == "recordUntilFull")
      return tracing::TraceConfigRecordMode::RECORD_UNTIL_FULL;
    if (value.GetString() == "recordContinuously")
      return tracing::TraceConfigRecordMode::RECORD_CONTINUOUSLY;
    if (value.GetString() == "recordAsMuchAsPossible")
      return tracing::TraceConfigRecordMode::RECORD_AS_MUCH_AS_POSSIBLE;
    if (value.GetString() == "echoToConsole")
      return tracing::TraceConfigRecordMode::ECHO_TO_CONSOLE;
    errors->AddError("invalid enum value");
    return tracing::TraceConfigRecordMode::RECORD_UNTIL_FULL;
  }
};

template <>
inline base::Value ToValue(const tracing::TraceConfigRecordMode& value) {
  switch (value) {
    case tracing::TraceConfigRecordMode::RECORD_UNTIL_FULL:
      return base::Value("recordUntilFull");
    case tracing::TraceConfigRecordMode::RECORD_CONTINUOUSLY:
      return base::Value("recordContinuously");
    case tracing::TraceConfigRecordMode::RECORD_AS_MUCH_AS_POSSIBLE:
      return base::Value("recordAsMuchAsPossible");
    case tracing::TraceConfigRecordMode::ECHO_TO_CONSOLE:
      return base::Value("echoToConsole");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<tracing::EndParams> {
  static std::unique_ptr<tracing::EndParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return tracing::EndParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const tracing::EndParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<tracing::EndResult> {
  static std::unique_ptr<tracing::EndResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return tracing::EndResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const tracing::EndResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<tracing::GetCategoriesParams> {
  static std::unique_ptr<tracing::GetCategoriesParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return tracing::GetCategoriesParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const tracing::GetCategoriesParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<tracing::GetCategoriesResult> {
  static std::unique_ptr<tracing::GetCategoriesResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return tracing::GetCategoriesResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const tracing::GetCategoriesResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<tracing::RecordClockSyncMarkerParams> {
  static std::unique_ptr<tracing::RecordClockSyncMarkerParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return tracing::RecordClockSyncMarkerParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const tracing::RecordClockSyncMarkerParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<tracing::RecordClockSyncMarkerResult> {
  static std::unique_ptr<tracing::RecordClockSyncMarkerResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return tracing::RecordClockSyncMarkerResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const tracing::RecordClockSyncMarkerResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<tracing::RequestMemoryDumpParams> {
  static std::unique_ptr<tracing::RequestMemoryDumpParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return tracing::RequestMemoryDumpParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const tracing::RequestMemoryDumpParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<tracing::RequestMemoryDumpResult> {
  static std::unique_ptr<tracing::RequestMemoryDumpResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return tracing::RequestMemoryDumpResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const tracing::RequestMemoryDumpResult& value) {
  return value.Serialize();
}

template <>
struct FromValue<tracing::StartTransferMode> {
  static tracing::StartTransferMode Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return tracing::StartTransferMode::REPORT_EVENTS;
    }
    if (value.GetString() == "ReportEvents")
      return tracing::StartTransferMode::REPORT_EVENTS;
    if (value.GetString() == "ReturnAsStream")
      return tracing::StartTransferMode::RETURN_AS_STREAM;
    errors->AddError("invalid enum value");
    return tracing::StartTransferMode::REPORT_EVENTS;
  }
};

template <>
inline base::Value ToValue(const tracing::StartTransferMode& value) {
  switch (value) {
    case tracing::StartTransferMode::REPORT_EVENTS:
      return base::Value("ReportEvents");
    case tracing::StartTransferMode::RETURN_AS_STREAM:
      return base::Value("ReturnAsStream");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<tracing::StartParams> {
  static std::unique_ptr<tracing::StartParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return tracing::StartParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const tracing::StartParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<tracing::StartResult> {
  static std::unique_ptr<tracing::StartResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return tracing::StartResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const tracing::StartResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<tracing::BufferUsageParams> {
  static std::unique_ptr<tracing::BufferUsageParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return tracing::BufferUsageParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const tracing::BufferUsageParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<tracing::DataCollectedParams> {
  static std::unique_ptr<tracing::DataCollectedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return tracing::DataCollectedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const tracing::DataCollectedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<tracing::TracingCompleteParams> {
  static std::unique_ptr<tracing::TracingCompleteParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return tracing::TracingCompleteParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const tracing::TracingCompleteParams& value) {
  return value.Serialize();
}


}  // namespace internal
}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_TRACING_H_
