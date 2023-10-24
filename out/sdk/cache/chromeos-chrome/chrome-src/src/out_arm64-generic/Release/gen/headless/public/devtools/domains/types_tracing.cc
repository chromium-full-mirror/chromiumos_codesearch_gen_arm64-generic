// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "headless/public/devtools/domains/types_io.h"
#include "headless/public/devtools/domains/types_runtime.h"
#include "headless/public/devtools/domains/types_tracing.h"

#include "base/values.h"
#include "headless/public/devtools/internal/type_conversions_io.h"
#include "headless/public/devtools/internal/type_conversions_runtime.h"
#include "headless/public/devtools/internal/type_conversions_tracing.h"

namespace headless {

namespace tracing {

std::unique_ptr<TraceConfig> TraceConfig::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("TraceConfig");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<TraceConfig> result(new TraceConfig());
  errors->Push();
  errors->SetName("TraceConfig");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* record_mode_value = dict.Find("recordMode");
  if (record_mode_value) {
    errors->SetName("recordMode");
    result->record_mode_ = internal::FromValue<::headless::tracing::TraceConfigRecordMode>::Parse(*record_mode_value, errors);
  }
  const base::Value* trace_buffer_size_in_kb_value = dict.Find("traceBufferSizeInKb");
  if (trace_buffer_size_in_kb_value) {
    errors->SetName("traceBufferSizeInKb");
    result->trace_buffer_size_in_kb_ = internal::FromValue<double>::Parse(*trace_buffer_size_in_kb_value, errors);
  }
  const base::Value* enable_sampling_value = dict.Find("enableSampling");
  if (enable_sampling_value) {
    errors->SetName("enableSampling");
    result->enable_sampling_ = internal::FromValue<bool>::Parse(*enable_sampling_value, errors);
  }
  const base::Value* enable_systrace_value = dict.Find("enableSystrace");
  if (enable_systrace_value) {
    errors->SetName("enableSystrace");
    result->enable_systrace_ = internal::FromValue<bool>::Parse(*enable_systrace_value, errors);
  }
  const base::Value* enable_argument_filter_value = dict.Find("enableArgumentFilter");
  if (enable_argument_filter_value) {
    errors->SetName("enableArgumentFilter");
    result->enable_argument_filter_ = internal::FromValue<bool>::Parse(*enable_argument_filter_value, errors);
  }
  const base::Value* included_categories_value = dict.Find("includedCategories");
  if (included_categories_value) {
    errors->SetName("includedCategories");
    result->included_categories_ = internal::FromValue<std::vector<std::string>>::Parse(*included_categories_value, errors);
  }
  const base::Value* excluded_categories_value = dict.Find("excludedCategories");
  if (excluded_categories_value) {
    errors->SetName("excludedCategories");
    result->excluded_categories_ = internal::FromValue<std::vector<std::string>>::Parse(*excluded_categories_value, errors);
  }
  const base::Value* synthetic_delays_value = dict.Find("syntheticDelays");
  if (synthetic_delays_value) {
    errors->SetName("syntheticDelays");
    result->synthetic_delays_ = internal::FromValue<std::vector<std::string>>::Parse(*synthetic_delays_value, errors);
  }
  const base::Value* memory_dump_config_value = dict.Find("memoryDumpConfig");
  if (memory_dump_config_value) {
    errors->SetName("memoryDumpConfig");
    result->memory_dump_config_ = internal::FromValue<base::Value::Dict>::Parse(*memory_dump_config_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value TraceConfig::Serialize() const {
  base::Value::Dict result;
  if (record_mode_)
    result.Set("recordMode", internal::ToValue(record_mode_.value()));
  if (trace_buffer_size_in_kb_)
    result.Set("traceBufferSizeInKb", internal::ToValue(trace_buffer_size_in_kb_.value()));
  if (enable_sampling_)
    result.Set("enableSampling", internal::ToValue(enable_sampling_.value()));
  if (enable_systrace_)
    result.Set("enableSystrace", internal::ToValue(enable_systrace_.value()));
  if (enable_argument_filter_)
    result.Set("enableArgumentFilter", internal::ToValue(enable_argument_filter_.value()));
  if (included_categories_)
    result.Set("includedCategories", internal::ToValue(included_categories_.value()));
  if (excluded_categories_)
    result.Set("excludedCategories", internal::ToValue(excluded_categories_.value()));
  if (synthetic_delays_)
    result.Set("syntheticDelays", internal::ToValue(synthetic_delays_.value()));
  if (memory_dump_config_)
    result.Set("memoryDumpConfig", internal::ToValue(*memory_dump_config_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<TraceConfig> TraceConfig::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<TraceConfig> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<EndParams> EndParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("EndParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<EndParams> result(new EndParams());
  errors->Push();
  errors->SetName("EndParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value EndParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<EndParams> EndParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<EndParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<EndResult> EndResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("EndResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<EndResult> result(new EndResult());
  errors->Push();
  errors->SetName("EndResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value EndResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<EndResult> EndResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<EndResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetCategoriesParams> GetCategoriesParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetCategoriesParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetCategoriesParams> result(new GetCategoriesParams());
  errors->Push();
  errors->SetName("GetCategoriesParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetCategoriesParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<GetCategoriesParams> GetCategoriesParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetCategoriesParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetCategoriesResult> GetCategoriesResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetCategoriesResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetCategoriesResult> result(new GetCategoriesResult());
  errors->Push();
  errors->SetName("GetCategoriesResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* categories_value = dict.Find("categories");
  if (categories_value) {
    errors->SetName("categories");
    result->categories_ = internal::FromValue<std::vector<std::string>>::Parse(*categories_value, errors);
  } else {
    errors->AddError("required property missing: categories");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetCategoriesResult::Serialize() const {
  base::Value::Dict result;
  result.Set("categories", internal::ToValue(categories_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetCategoriesResult> GetCategoriesResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetCategoriesResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<RecordClockSyncMarkerParams> RecordClockSyncMarkerParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("RecordClockSyncMarkerParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<RecordClockSyncMarkerParams> result(new RecordClockSyncMarkerParams());
  errors->Push();
  errors->SetName("RecordClockSyncMarkerParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* sync_id_value = dict.Find("syncId");
  if (sync_id_value) {
    errors->SetName("syncId");
    result->sync_id_ = internal::FromValue<std::string>::Parse(*sync_id_value, errors);
  } else {
    errors->AddError("required property missing: syncId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value RecordClockSyncMarkerParams::Serialize() const {
  base::Value::Dict result;
  result.Set("syncId", internal::ToValue(sync_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<RecordClockSyncMarkerParams> RecordClockSyncMarkerParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<RecordClockSyncMarkerParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<RecordClockSyncMarkerResult> RecordClockSyncMarkerResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("RecordClockSyncMarkerResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<RecordClockSyncMarkerResult> result(new RecordClockSyncMarkerResult());
  errors->Push();
  errors->SetName("RecordClockSyncMarkerResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value RecordClockSyncMarkerResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<RecordClockSyncMarkerResult> RecordClockSyncMarkerResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<RecordClockSyncMarkerResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<RequestMemoryDumpParams> RequestMemoryDumpParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("RequestMemoryDumpParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<RequestMemoryDumpParams> result(new RequestMemoryDumpParams());
  errors->Push();
  errors->SetName("RequestMemoryDumpParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* deterministic_value = dict.Find("deterministic");
  if (deterministic_value) {
    errors->SetName("deterministic");
    result->deterministic_ = internal::FromValue<bool>::Parse(*deterministic_value, errors);
  }
  const base::Value* level_of_detail_value = dict.Find("levelOfDetail");
  if (level_of_detail_value) {
    errors->SetName("levelOfDetail");
    result->level_of_detail_ = internal::FromValue<::headless::tracing::MemoryDumpLevelOfDetail>::Parse(*level_of_detail_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value RequestMemoryDumpParams::Serialize() const {
  base::Value::Dict result;
  if (deterministic_)
    result.Set("deterministic", internal::ToValue(deterministic_.value()));
  if (level_of_detail_)
    result.Set("levelOfDetail", internal::ToValue(level_of_detail_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<RequestMemoryDumpParams> RequestMemoryDumpParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<RequestMemoryDumpParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<RequestMemoryDumpResult> RequestMemoryDumpResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("RequestMemoryDumpResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<RequestMemoryDumpResult> result(new RequestMemoryDumpResult());
  errors->Push();
  errors->SetName("RequestMemoryDumpResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* dump_guid_value = dict.Find("dumpGuid");
  if (dump_guid_value) {
    errors->SetName("dumpGuid");
    result->dump_guid_ = internal::FromValue<std::string>::Parse(*dump_guid_value, errors);
  } else {
    errors->AddError("required property missing: dumpGuid");
  }
  const base::Value* success_value = dict.Find("success");
  if (success_value) {
    errors->SetName("success");
    result->success_ = internal::FromValue<bool>::Parse(*success_value, errors);
  } else {
    errors->AddError("required property missing: success");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value RequestMemoryDumpResult::Serialize() const {
  base::Value::Dict result;
  result.Set("dumpGuid", internal::ToValue(dump_guid_));
  result.Set("success", internal::ToValue(success_));
  return base::Value(std::move(result));
}

std::unique_ptr<RequestMemoryDumpResult> RequestMemoryDumpResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<RequestMemoryDumpResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StartParams> StartParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StartParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StartParams> result(new StartParams());
  errors->Push();
  errors->SetName("StartParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* categories_value = dict.Find("categories");
  if (categories_value) {
    errors->SetName("categories");
    result->categories_ = internal::FromValue<std::string>::Parse(*categories_value, errors);
  }
  const base::Value* options_value = dict.Find("options");
  if (options_value) {
    errors->SetName("options");
    result->options_ = internal::FromValue<std::string>::Parse(*options_value, errors);
  }
  const base::Value* buffer_usage_reporting_interval_value = dict.Find("bufferUsageReportingInterval");
  if (buffer_usage_reporting_interval_value) {
    errors->SetName("bufferUsageReportingInterval");
    result->buffer_usage_reporting_interval_ = internal::FromValue<double>::Parse(*buffer_usage_reporting_interval_value, errors);
  }
  const base::Value* transfer_mode_value = dict.Find("transferMode");
  if (transfer_mode_value) {
    errors->SetName("transferMode");
    result->transfer_mode_ = internal::FromValue<::headless::tracing::StartTransferMode>::Parse(*transfer_mode_value, errors);
  }
  const base::Value* stream_format_value = dict.Find("streamFormat");
  if (stream_format_value) {
    errors->SetName("streamFormat");
    result->stream_format_ = internal::FromValue<::headless::tracing::StreamFormat>::Parse(*stream_format_value, errors);
  }
  const base::Value* stream_compression_value = dict.Find("streamCompression");
  if (stream_compression_value) {
    errors->SetName("streamCompression");
    result->stream_compression_ = internal::FromValue<::headless::tracing::StreamCompression>::Parse(*stream_compression_value, errors);
  }
  const base::Value* trace_config_value = dict.Find("traceConfig");
  if (trace_config_value) {
    errors->SetName("traceConfig");
    result->trace_config_ = internal::FromValue<::headless::tracing::TraceConfig>::Parse(*trace_config_value, errors);
  }
  const base::Value* perfetto_config_value = dict.Find("perfettoConfig");
  if (perfetto_config_value) {
    errors->SetName("perfettoConfig");
    result->perfetto_config_ = internal::FromValue<protocol::Binary>::Parse(*perfetto_config_value, errors);
  }
  const base::Value* tracing_backend_value = dict.Find("tracingBackend");
  if (tracing_backend_value) {
    errors->SetName("tracingBackend");
    result->tracing_backend_ = internal::FromValue<::headless::tracing::TracingBackend>::Parse(*tracing_backend_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StartParams::Serialize() const {
  base::Value::Dict result;
  if (categories_)
    result.Set("categories", internal::ToValue(categories_.value()));
  if (options_)
    result.Set("options", internal::ToValue(options_.value()));
  if (buffer_usage_reporting_interval_)
    result.Set("bufferUsageReportingInterval", internal::ToValue(buffer_usage_reporting_interval_.value()));
  if (transfer_mode_)
    result.Set("transferMode", internal::ToValue(transfer_mode_.value()));
  if (stream_format_)
    result.Set("streamFormat", internal::ToValue(stream_format_.value()));
  if (stream_compression_)
    result.Set("streamCompression", internal::ToValue(stream_compression_.value()));
  if (trace_config_)
    result.Set("traceConfig", internal::ToValue(*trace_config_.value()));
  if (perfetto_config_)
    result.Set("perfettoConfig", internal::ToValue(perfetto_config_.value()));
  if (tracing_backend_)
    result.Set("tracingBackend", internal::ToValue(tracing_backend_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<StartParams> StartParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StartParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StartResult> StartResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StartResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StartResult> result(new StartResult());
  errors->Push();
  errors->SetName("StartResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StartResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<StartResult> StartResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StartResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<BufferUsageParams> BufferUsageParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("BufferUsageParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<BufferUsageParams> result(new BufferUsageParams());
  errors->Push();
  errors->SetName("BufferUsageParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* percent_full_value = dict.Find("percentFull");
  if (percent_full_value) {
    errors->SetName("percentFull");
    result->percent_full_ = internal::FromValue<double>::Parse(*percent_full_value, errors);
  }
  const base::Value* event_count_value = dict.Find("eventCount");
  if (event_count_value) {
    errors->SetName("eventCount");
    result->event_count_ = internal::FromValue<double>::Parse(*event_count_value, errors);
  }
  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    errors->SetName("value");
    result->value_ = internal::FromValue<double>::Parse(*value_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value BufferUsageParams::Serialize() const {
  base::Value::Dict result;
  if (percent_full_)
    result.Set("percentFull", internal::ToValue(percent_full_.value()));
  if (event_count_)
    result.Set("eventCount", internal::ToValue(event_count_.value()));
  if (value_)
    result.Set("value", internal::ToValue(value_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<BufferUsageParams> BufferUsageParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<BufferUsageParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DataCollectedParams> DataCollectedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DataCollectedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DataCollectedParams> result(new DataCollectedParams());
  errors->Push();
  errors->SetName("DataCollectedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    errors->SetName("value");
    result->value_ = internal::FromValue<std::vector<std::unique_ptr<base::Value>>>::Parse(*value_value, errors);
  } else {
    errors->AddError("required property missing: value");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DataCollectedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("value", internal::ToValue(value_));
  return base::Value(std::move(result));
}

std::unique_ptr<DataCollectedParams> DataCollectedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DataCollectedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<TracingCompleteParams> TracingCompleteParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("TracingCompleteParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<TracingCompleteParams> result(new TracingCompleteParams());
  errors->Push();
  errors->SetName("TracingCompleteParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* data_loss_occurred_value = dict.Find("dataLossOccurred");
  if (data_loss_occurred_value) {
    errors->SetName("dataLossOccurred");
    result->data_loss_occurred_ = internal::FromValue<bool>::Parse(*data_loss_occurred_value, errors);
  } else {
    errors->AddError("required property missing: dataLossOccurred");
  }
  const base::Value* stream_value = dict.Find("stream");
  if (stream_value) {
    errors->SetName("stream");
    result->stream_ = internal::FromValue<std::string>::Parse(*stream_value, errors);
  }
  const base::Value* trace_format_value = dict.Find("traceFormat");
  if (trace_format_value) {
    errors->SetName("traceFormat");
    result->trace_format_ = internal::FromValue<::headless::tracing::StreamFormat>::Parse(*trace_format_value, errors);
  }
  const base::Value* stream_compression_value = dict.Find("streamCompression");
  if (stream_compression_value) {
    errors->SetName("streamCompression");
    result->stream_compression_ = internal::FromValue<::headless::tracing::StreamCompression>::Parse(*stream_compression_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value TracingCompleteParams::Serialize() const {
  base::Value::Dict result;
  result.Set("dataLossOccurred", internal::ToValue(data_loss_occurred_));
  if (stream_)
    result.Set("stream", internal::ToValue(stream_.value()));
  if (trace_format_)
    result.Set("traceFormat", internal::ToValue(trace_format_.value()));
  if (stream_compression_)
    result.Set("streamCompression", internal::ToValue(stream_compression_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<TracingCompleteParams> TracingCompleteParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<TracingCompleteParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


}  // namespace tracing
}  // namespace headless
