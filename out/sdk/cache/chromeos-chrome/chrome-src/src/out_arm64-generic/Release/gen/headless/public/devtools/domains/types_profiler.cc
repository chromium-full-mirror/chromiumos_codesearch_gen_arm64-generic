// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "headless/public/devtools/domains/types_debugger.h"
#include "headless/public/devtools/domains/types_profiler.h"
#include "headless/public/devtools/domains/types_runtime.h"

#include "base/values.h"
#include "headless/public/devtools/internal/type_conversions_debugger.h"
#include "headless/public/devtools/internal/type_conversions_profiler.h"
#include "headless/public/devtools/internal/type_conversions_runtime.h"

namespace headless {

namespace profiler {

std::unique_ptr<ProfileNode> ProfileNode::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ProfileNode");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ProfileNode> result(new ProfileNode());
  errors->Push();
  errors->SetName("ProfileNode");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* id_value = dict.Find("id");
  if (id_value) {
    errors->SetName("id");
    result->id_ = internal::FromValue<int>::Parse(*id_value, errors);
  } else {
    errors->AddError("required property missing: id");
  }
  const base::Value* call_frame_value = dict.Find("callFrame");
  if (call_frame_value) {
    errors->SetName("callFrame");
    result->call_frame_ = internal::FromValue<::headless::runtime::CallFrame>::Parse(*call_frame_value, errors);
  } else {
    errors->AddError("required property missing: callFrame");
  }
  const base::Value* hit_count_value = dict.Find("hitCount");
  if (hit_count_value) {
    errors->SetName("hitCount");
    result->hit_count_ = internal::FromValue<int>::Parse(*hit_count_value, errors);
  }
  const base::Value* children_value = dict.Find("children");
  if (children_value) {
    errors->SetName("children");
    result->children_ = internal::FromValue<std::vector<int>>::Parse(*children_value, errors);
  }
  const base::Value* deopt_reason_value = dict.Find("deoptReason");
  if (deopt_reason_value) {
    errors->SetName("deoptReason");
    result->deopt_reason_ = internal::FromValue<std::string>::Parse(*deopt_reason_value, errors);
  }
  const base::Value* position_ticks_value = dict.Find("positionTicks");
  if (position_ticks_value) {
    errors->SetName("positionTicks");
    result->position_ticks_ = internal::FromValue<std::vector<std::unique_ptr<::headless::profiler::PositionTickInfo>>>::Parse(*position_ticks_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ProfileNode::Serialize() const {
  base::Value::Dict result;
  result.Set("id", internal::ToValue(id_));
  result.Set("callFrame", internal::ToValue(*call_frame_));
  if (hit_count_)
    result.Set("hitCount", internal::ToValue(hit_count_.value()));
  if (children_)
    result.Set("children", internal::ToValue(children_.value()));
  if (deopt_reason_)
    result.Set("deoptReason", internal::ToValue(deopt_reason_.value()));
  if (position_ticks_)
    result.Set("positionTicks", internal::ToValue(position_ticks_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<ProfileNode> ProfileNode::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ProfileNode> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<Profile> Profile::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("Profile");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<Profile> result(new Profile());
  errors->Push();
  errors->SetName("Profile");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* nodes_value = dict.Find("nodes");
  if (nodes_value) {
    errors->SetName("nodes");
    result->nodes_ = internal::FromValue<std::vector<std::unique_ptr<::headless::profiler::ProfileNode>>>::Parse(*nodes_value, errors);
  } else {
    errors->AddError("required property missing: nodes");
  }
  const base::Value* start_time_value = dict.Find("startTime");
  if (start_time_value) {
    errors->SetName("startTime");
    result->start_time_ = internal::FromValue<double>::Parse(*start_time_value, errors);
  } else {
    errors->AddError("required property missing: startTime");
  }
  const base::Value* end_time_value = dict.Find("endTime");
  if (end_time_value) {
    errors->SetName("endTime");
    result->end_time_ = internal::FromValue<double>::Parse(*end_time_value, errors);
  } else {
    errors->AddError("required property missing: endTime");
  }
  const base::Value* samples_value = dict.Find("samples");
  if (samples_value) {
    errors->SetName("samples");
    result->samples_ = internal::FromValue<std::vector<int>>::Parse(*samples_value, errors);
  }
  const base::Value* time_deltas_value = dict.Find("timeDeltas");
  if (time_deltas_value) {
    errors->SetName("timeDeltas");
    result->time_deltas_ = internal::FromValue<std::vector<int>>::Parse(*time_deltas_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value Profile::Serialize() const {
  base::Value::Dict result;
  result.Set("nodes", internal::ToValue(nodes_));
  result.Set("startTime", internal::ToValue(start_time_));
  result.Set("endTime", internal::ToValue(end_time_));
  if (samples_)
    result.Set("samples", internal::ToValue(samples_.value()));
  if (time_deltas_)
    result.Set("timeDeltas", internal::ToValue(time_deltas_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<Profile> Profile::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<Profile> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PositionTickInfo> PositionTickInfo::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PositionTickInfo");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PositionTickInfo> result(new PositionTickInfo());
  errors->Push();
  errors->SetName("PositionTickInfo");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* line_value = dict.Find("line");
  if (line_value) {
    errors->SetName("line");
    result->line_ = internal::FromValue<int>::Parse(*line_value, errors);
  } else {
    errors->AddError("required property missing: line");
  }
  const base::Value* ticks_value = dict.Find("ticks");
  if (ticks_value) {
    errors->SetName("ticks");
    result->ticks_ = internal::FromValue<int>::Parse(*ticks_value, errors);
  } else {
    errors->AddError("required property missing: ticks");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PositionTickInfo::Serialize() const {
  base::Value::Dict result;
  result.Set("line", internal::ToValue(line_));
  result.Set("ticks", internal::ToValue(ticks_));
  return base::Value(std::move(result));
}

std::unique_ptr<PositionTickInfo> PositionTickInfo::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PositionTickInfo> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CoverageRange> CoverageRange::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CoverageRange");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CoverageRange> result(new CoverageRange());
  errors->Push();
  errors->SetName("CoverageRange");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* start_offset_value = dict.Find("startOffset");
  if (start_offset_value) {
    errors->SetName("startOffset");
    result->start_offset_ = internal::FromValue<int>::Parse(*start_offset_value, errors);
  } else {
    errors->AddError("required property missing: startOffset");
  }
  const base::Value* end_offset_value = dict.Find("endOffset");
  if (end_offset_value) {
    errors->SetName("endOffset");
    result->end_offset_ = internal::FromValue<int>::Parse(*end_offset_value, errors);
  } else {
    errors->AddError("required property missing: endOffset");
  }
  const base::Value* count_value = dict.Find("count");
  if (count_value) {
    errors->SetName("count");
    result->count_ = internal::FromValue<int>::Parse(*count_value, errors);
  } else {
    errors->AddError("required property missing: count");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CoverageRange::Serialize() const {
  base::Value::Dict result;
  result.Set("startOffset", internal::ToValue(start_offset_));
  result.Set("endOffset", internal::ToValue(end_offset_));
  result.Set("count", internal::ToValue(count_));
  return base::Value(std::move(result));
}

std::unique_ptr<CoverageRange> CoverageRange::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CoverageRange> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<FunctionCoverage> FunctionCoverage::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("FunctionCoverage");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<FunctionCoverage> result(new FunctionCoverage());
  errors->Push();
  errors->SetName("FunctionCoverage");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* function_name_value = dict.Find("functionName");
  if (function_name_value) {
    errors->SetName("functionName");
    result->function_name_ = internal::FromValue<std::string>::Parse(*function_name_value, errors);
  } else {
    errors->AddError("required property missing: functionName");
  }
  const base::Value* ranges_value = dict.Find("ranges");
  if (ranges_value) {
    errors->SetName("ranges");
    result->ranges_ = internal::FromValue<std::vector<std::unique_ptr<::headless::profiler::CoverageRange>>>::Parse(*ranges_value, errors);
  } else {
    errors->AddError("required property missing: ranges");
  }
  const base::Value* is_block_coverage_value = dict.Find("isBlockCoverage");
  if (is_block_coverage_value) {
    errors->SetName("isBlockCoverage");
    result->is_block_coverage_ = internal::FromValue<bool>::Parse(*is_block_coverage_value, errors);
  } else {
    errors->AddError("required property missing: isBlockCoverage");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value FunctionCoverage::Serialize() const {
  base::Value::Dict result;
  result.Set("functionName", internal::ToValue(function_name_));
  result.Set("ranges", internal::ToValue(ranges_));
  result.Set("isBlockCoverage", internal::ToValue(is_block_coverage_));
  return base::Value(std::move(result));
}

std::unique_ptr<FunctionCoverage> FunctionCoverage::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<FunctionCoverage> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ScriptCoverage> ScriptCoverage::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ScriptCoverage");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ScriptCoverage> result(new ScriptCoverage());
  errors->Push();
  errors->SetName("ScriptCoverage");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* script_id_value = dict.Find("scriptId");
  if (script_id_value) {
    errors->SetName("scriptId");
    result->script_id_ = internal::FromValue<std::string>::Parse(*script_id_value, errors);
  } else {
    errors->AddError("required property missing: scriptId");
  }
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  const base::Value* functions_value = dict.Find("functions");
  if (functions_value) {
    errors->SetName("functions");
    result->functions_ = internal::FromValue<std::vector<std::unique_ptr<::headless::profiler::FunctionCoverage>>>::Parse(*functions_value, errors);
  } else {
    errors->AddError("required property missing: functions");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ScriptCoverage::Serialize() const {
  base::Value::Dict result;
  result.Set("scriptId", internal::ToValue(script_id_));
  result.Set("url", internal::ToValue(url_));
  result.Set("functions", internal::ToValue(functions_));
  return base::Value(std::move(result));
}

std::unique_ptr<ScriptCoverage> ScriptCoverage::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ScriptCoverage> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DisableParams> DisableParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DisableParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DisableParams> result(new DisableParams());
  errors->Push();
  errors->SetName("DisableParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DisableParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<DisableParams> DisableParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DisableParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DisableResult> DisableResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DisableResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DisableResult> result(new DisableResult());
  errors->Push();
  errors->SetName("DisableResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DisableResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<DisableResult> DisableResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DisableResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<EnableParams> EnableParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("EnableParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<EnableParams> result(new EnableParams());
  errors->Push();
  errors->SetName("EnableParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value EnableParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<EnableParams> EnableParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<EnableParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<EnableResult> EnableResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("EnableResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<EnableResult> result(new EnableResult());
  errors->Push();
  errors->SetName("EnableResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value EnableResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<EnableResult> EnableResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<EnableResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetBestEffortCoverageParams> GetBestEffortCoverageParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetBestEffortCoverageParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetBestEffortCoverageParams> result(new GetBestEffortCoverageParams());
  errors->Push();
  errors->SetName("GetBestEffortCoverageParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetBestEffortCoverageParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<GetBestEffortCoverageParams> GetBestEffortCoverageParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetBestEffortCoverageParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetBestEffortCoverageResult> GetBestEffortCoverageResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetBestEffortCoverageResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetBestEffortCoverageResult> result(new GetBestEffortCoverageResult());
  errors->Push();
  errors->SetName("GetBestEffortCoverageResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* result_value = dict.Find("result");
  if (result_value) {
    errors->SetName("result");
    result->result_ = internal::FromValue<std::vector<std::unique_ptr<::headless::profiler::ScriptCoverage>>>::Parse(*result_value, errors);
  } else {
    errors->AddError("required property missing: result");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetBestEffortCoverageResult::Serialize() const {
  base::Value::Dict result;
  result.Set("result", internal::ToValue(result_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetBestEffortCoverageResult> GetBestEffortCoverageResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetBestEffortCoverageResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetSamplingIntervalParams> SetSamplingIntervalParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetSamplingIntervalParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetSamplingIntervalParams> result(new SetSamplingIntervalParams());
  errors->Push();
  errors->SetName("SetSamplingIntervalParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* interval_value = dict.Find("interval");
  if (interval_value) {
    errors->SetName("interval");
    result->interval_ = internal::FromValue<int>::Parse(*interval_value, errors);
  } else {
    errors->AddError("required property missing: interval");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetSamplingIntervalParams::Serialize() const {
  base::Value::Dict result;
  result.Set("interval", internal::ToValue(interval_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetSamplingIntervalParams> SetSamplingIntervalParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetSamplingIntervalParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetSamplingIntervalResult> SetSamplingIntervalResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetSamplingIntervalResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetSamplingIntervalResult> result(new SetSamplingIntervalResult());
  errors->Push();
  errors->SetName("SetSamplingIntervalResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetSamplingIntervalResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetSamplingIntervalResult> SetSamplingIntervalResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetSamplingIntervalResult> result = Parse(Serialize(), &errors);
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
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StartParams::Serialize() const {
  base::Value::Dict result;
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


std::unique_ptr<StartPreciseCoverageParams> StartPreciseCoverageParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StartPreciseCoverageParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StartPreciseCoverageParams> result(new StartPreciseCoverageParams());
  errors->Push();
  errors->SetName("StartPreciseCoverageParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* call_count_value = dict.Find("callCount");
  if (call_count_value) {
    errors->SetName("callCount");
    result->call_count_ = internal::FromValue<bool>::Parse(*call_count_value, errors);
  }
  const base::Value* detailed_value = dict.Find("detailed");
  if (detailed_value) {
    errors->SetName("detailed");
    result->detailed_ = internal::FromValue<bool>::Parse(*detailed_value, errors);
  }
  const base::Value* allow_triggered_updates_value = dict.Find("allowTriggeredUpdates");
  if (allow_triggered_updates_value) {
    errors->SetName("allowTriggeredUpdates");
    result->allow_triggered_updates_ = internal::FromValue<bool>::Parse(*allow_triggered_updates_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StartPreciseCoverageParams::Serialize() const {
  base::Value::Dict result;
  if (call_count_)
    result.Set("callCount", internal::ToValue(call_count_.value()));
  if (detailed_)
    result.Set("detailed", internal::ToValue(detailed_.value()));
  if (allow_triggered_updates_)
    result.Set("allowTriggeredUpdates", internal::ToValue(allow_triggered_updates_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<StartPreciseCoverageParams> StartPreciseCoverageParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StartPreciseCoverageParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StartPreciseCoverageResult> StartPreciseCoverageResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StartPreciseCoverageResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StartPreciseCoverageResult> result(new StartPreciseCoverageResult());
  errors->Push();
  errors->SetName("StartPreciseCoverageResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* timestamp_value = dict.Find("timestamp");
  if (timestamp_value) {
    errors->SetName("timestamp");
    result->timestamp_ = internal::FromValue<double>::Parse(*timestamp_value, errors);
  } else {
    errors->AddError("required property missing: timestamp");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StartPreciseCoverageResult::Serialize() const {
  base::Value::Dict result;
  result.Set("timestamp", internal::ToValue(timestamp_));
  return base::Value(std::move(result));
}

std::unique_ptr<StartPreciseCoverageResult> StartPreciseCoverageResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StartPreciseCoverageResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StopParams> StopParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StopParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StopParams> result(new StopParams());
  errors->Push();
  errors->SetName("StopParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StopParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<StopParams> StopParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StopParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StopResult> StopResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StopResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StopResult> result(new StopResult());
  errors->Push();
  errors->SetName("StopResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* profile_value = dict.Find("profile");
  if (profile_value) {
    errors->SetName("profile");
    result->profile_ = internal::FromValue<::headless::profiler::Profile>::Parse(*profile_value, errors);
  } else {
    errors->AddError("required property missing: profile");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StopResult::Serialize() const {
  base::Value::Dict result;
  result.Set("profile", internal::ToValue(*profile_));
  return base::Value(std::move(result));
}

std::unique_ptr<StopResult> StopResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StopResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StopPreciseCoverageParams> StopPreciseCoverageParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StopPreciseCoverageParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StopPreciseCoverageParams> result(new StopPreciseCoverageParams());
  errors->Push();
  errors->SetName("StopPreciseCoverageParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StopPreciseCoverageParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<StopPreciseCoverageParams> StopPreciseCoverageParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StopPreciseCoverageParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StopPreciseCoverageResult> StopPreciseCoverageResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StopPreciseCoverageResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StopPreciseCoverageResult> result(new StopPreciseCoverageResult());
  errors->Push();
  errors->SetName("StopPreciseCoverageResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StopPreciseCoverageResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<StopPreciseCoverageResult> StopPreciseCoverageResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StopPreciseCoverageResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<TakePreciseCoverageParams> TakePreciseCoverageParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("TakePreciseCoverageParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<TakePreciseCoverageParams> result(new TakePreciseCoverageParams());
  errors->Push();
  errors->SetName("TakePreciseCoverageParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value TakePreciseCoverageParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<TakePreciseCoverageParams> TakePreciseCoverageParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<TakePreciseCoverageParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<TakePreciseCoverageResult> TakePreciseCoverageResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("TakePreciseCoverageResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<TakePreciseCoverageResult> result(new TakePreciseCoverageResult());
  errors->Push();
  errors->SetName("TakePreciseCoverageResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* result_value = dict.Find("result");
  if (result_value) {
    errors->SetName("result");
    result->result_ = internal::FromValue<std::vector<std::unique_ptr<::headless::profiler::ScriptCoverage>>>::Parse(*result_value, errors);
  } else {
    errors->AddError("required property missing: result");
  }
  const base::Value* timestamp_value = dict.Find("timestamp");
  if (timestamp_value) {
    errors->SetName("timestamp");
    result->timestamp_ = internal::FromValue<double>::Parse(*timestamp_value, errors);
  } else {
    errors->AddError("required property missing: timestamp");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value TakePreciseCoverageResult::Serialize() const {
  base::Value::Dict result;
  result.Set("result", internal::ToValue(result_));
  result.Set("timestamp", internal::ToValue(timestamp_));
  return base::Value(std::move(result));
}

std::unique_ptr<TakePreciseCoverageResult> TakePreciseCoverageResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<TakePreciseCoverageResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ConsoleProfileFinishedParams> ConsoleProfileFinishedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ConsoleProfileFinishedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ConsoleProfileFinishedParams> result(new ConsoleProfileFinishedParams());
  errors->Push();
  errors->SetName("ConsoleProfileFinishedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* id_value = dict.Find("id");
  if (id_value) {
    errors->SetName("id");
    result->id_ = internal::FromValue<std::string>::Parse(*id_value, errors);
  } else {
    errors->AddError("required property missing: id");
  }
  const base::Value* location_value = dict.Find("location");
  if (location_value) {
    errors->SetName("location");
    result->location_ = internal::FromValue<::headless::debugger::Location>::Parse(*location_value, errors);
  } else {
    errors->AddError("required property missing: location");
  }
  const base::Value* profile_value = dict.Find("profile");
  if (profile_value) {
    errors->SetName("profile");
    result->profile_ = internal::FromValue<::headless::profiler::Profile>::Parse(*profile_value, errors);
  } else {
    errors->AddError("required property missing: profile");
  }
  const base::Value* title_value = dict.Find("title");
  if (title_value) {
    errors->SetName("title");
    result->title_ = internal::FromValue<std::string>::Parse(*title_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ConsoleProfileFinishedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("id", internal::ToValue(id_));
  result.Set("location", internal::ToValue(*location_));
  result.Set("profile", internal::ToValue(*profile_));
  if (title_)
    result.Set("title", internal::ToValue(title_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<ConsoleProfileFinishedParams> ConsoleProfileFinishedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ConsoleProfileFinishedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ConsoleProfileStartedParams> ConsoleProfileStartedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ConsoleProfileStartedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ConsoleProfileStartedParams> result(new ConsoleProfileStartedParams());
  errors->Push();
  errors->SetName("ConsoleProfileStartedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* id_value = dict.Find("id");
  if (id_value) {
    errors->SetName("id");
    result->id_ = internal::FromValue<std::string>::Parse(*id_value, errors);
  } else {
    errors->AddError("required property missing: id");
  }
  const base::Value* location_value = dict.Find("location");
  if (location_value) {
    errors->SetName("location");
    result->location_ = internal::FromValue<::headless::debugger::Location>::Parse(*location_value, errors);
  } else {
    errors->AddError("required property missing: location");
  }
  const base::Value* title_value = dict.Find("title");
  if (title_value) {
    errors->SetName("title");
    result->title_ = internal::FromValue<std::string>::Parse(*title_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ConsoleProfileStartedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("id", internal::ToValue(id_));
  result.Set("location", internal::ToValue(*location_));
  if (title_)
    result.Set("title", internal::ToValue(title_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<ConsoleProfileStartedParams> ConsoleProfileStartedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ConsoleProfileStartedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PreciseCoverageDeltaUpdateParams> PreciseCoverageDeltaUpdateParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PreciseCoverageDeltaUpdateParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PreciseCoverageDeltaUpdateParams> result(new PreciseCoverageDeltaUpdateParams());
  errors->Push();
  errors->SetName("PreciseCoverageDeltaUpdateParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* timestamp_value = dict.Find("timestamp");
  if (timestamp_value) {
    errors->SetName("timestamp");
    result->timestamp_ = internal::FromValue<double>::Parse(*timestamp_value, errors);
  } else {
    errors->AddError("required property missing: timestamp");
  }
  const base::Value* occasion_value = dict.Find("occasion");
  if (occasion_value) {
    errors->SetName("occasion");
    result->occasion_ = internal::FromValue<std::string>::Parse(*occasion_value, errors);
  } else {
    errors->AddError("required property missing: occasion");
  }
  const base::Value* result_value = dict.Find("result");
  if (result_value) {
    errors->SetName("result");
    result->result_ = internal::FromValue<std::vector<std::unique_ptr<::headless::profiler::ScriptCoverage>>>::Parse(*result_value, errors);
  } else {
    errors->AddError("required property missing: result");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PreciseCoverageDeltaUpdateParams::Serialize() const {
  base::Value::Dict result;
  result.Set("timestamp", internal::ToValue(timestamp_));
  result.Set("occasion", internal::ToValue(occasion_));
  result.Set("result", internal::ToValue(result_));
  return base::Value(std::move(result));
}

std::unique_ptr<PreciseCoverageDeltaUpdateParams> PreciseCoverageDeltaUpdateParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PreciseCoverageDeltaUpdateParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


}  // namespace profiler
}  // namespace headless
