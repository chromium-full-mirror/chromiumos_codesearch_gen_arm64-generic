// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "headless/public/devtools/domains/types_dom.h"
#include "headless/public/devtools/domains/types_debugger.h"
#include "headless/public/devtools/domains/types_emulation.h"
#include "headless/public/devtools/domains/types_io.h"
#include "headless/public/devtools/domains/types_network.h"
#include "headless/public/devtools/domains/types_page.h"
#include "headless/public/devtools/domains/types_performance_timeline.h"
#include "headless/public/devtools/domains/types_runtime.h"
#include "headless/public/devtools/domains/types_security.h"

#include "base/values.h"
#include "headless/public/devtools/internal/type_conversions_dom.h"
#include "headless/public/devtools/internal/type_conversions_debugger.h"
#include "headless/public/devtools/internal/type_conversions_emulation.h"
#include "headless/public/devtools/internal/type_conversions_io.h"
#include "headless/public/devtools/internal/type_conversions_network.h"
#include "headless/public/devtools/internal/type_conversions_page.h"
#include "headless/public/devtools/internal/type_conversions_performance_timeline.h"
#include "headless/public/devtools/internal/type_conversions_runtime.h"
#include "headless/public/devtools/internal/type_conversions_security.h"

namespace headless {

namespace performance_timeline {

std::unique_ptr<LargestContentfulPaint> LargestContentfulPaint::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("LargestContentfulPaint");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<LargestContentfulPaint> result(new LargestContentfulPaint());
  errors->Push();
  errors->SetName("LargestContentfulPaint");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* render_time_value = dict.Find("renderTime");
  if (render_time_value) {
    errors->SetName("renderTime");
    result->render_time_ = internal::FromValue<double>::Parse(*render_time_value, errors);
  } else {
    errors->AddError("required property missing: renderTime");
  }
  const base::Value* load_time_value = dict.Find("loadTime");
  if (load_time_value) {
    errors->SetName("loadTime");
    result->load_time_ = internal::FromValue<double>::Parse(*load_time_value, errors);
  } else {
    errors->AddError("required property missing: loadTime");
  }
  const base::Value* size_value = dict.Find("size");
  if (size_value) {
    errors->SetName("size");
    result->size_ = internal::FromValue<double>::Parse(*size_value, errors);
  } else {
    errors->AddError("required property missing: size");
  }
  const base::Value* element_id_value = dict.Find("elementId");
  if (element_id_value) {
    errors->SetName("elementId");
    result->element_id_ = internal::FromValue<std::string>::Parse(*element_id_value, errors);
  }
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  }
  const base::Value* node_id_value = dict.Find("nodeId");
  if (node_id_value) {
    errors->SetName("nodeId");
    result->node_id_ = internal::FromValue<int>::Parse(*node_id_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value LargestContentfulPaint::Serialize() const {
  base::Value::Dict result;
  result.Set("renderTime", internal::ToValue(render_time_));
  result.Set("loadTime", internal::ToValue(load_time_));
  result.Set("size", internal::ToValue(size_));
  if (element_id_)
    result.Set("elementId", internal::ToValue(element_id_.value()));
  if (url_)
    result.Set("url", internal::ToValue(url_.value()));
  if (node_id_)
    result.Set("nodeId", internal::ToValue(node_id_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<LargestContentfulPaint> LargestContentfulPaint::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<LargestContentfulPaint> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<LayoutShiftAttribution> LayoutShiftAttribution::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("LayoutShiftAttribution");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<LayoutShiftAttribution> result(new LayoutShiftAttribution());
  errors->Push();
  errors->SetName("LayoutShiftAttribution");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* previous_rect_value = dict.Find("previousRect");
  if (previous_rect_value) {
    errors->SetName("previousRect");
    result->previous_rect_ = internal::FromValue<::headless::dom::Rect>::Parse(*previous_rect_value, errors);
  } else {
    errors->AddError("required property missing: previousRect");
  }
  const base::Value* current_rect_value = dict.Find("currentRect");
  if (current_rect_value) {
    errors->SetName("currentRect");
    result->current_rect_ = internal::FromValue<::headless::dom::Rect>::Parse(*current_rect_value, errors);
  } else {
    errors->AddError("required property missing: currentRect");
  }
  const base::Value* node_id_value = dict.Find("nodeId");
  if (node_id_value) {
    errors->SetName("nodeId");
    result->node_id_ = internal::FromValue<int>::Parse(*node_id_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value LayoutShiftAttribution::Serialize() const {
  base::Value::Dict result;
  result.Set("previousRect", internal::ToValue(*previous_rect_));
  result.Set("currentRect", internal::ToValue(*current_rect_));
  if (node_id_)
    result.Set("nodeId", internal::ToValue(node_id_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<LayoutShiftAttribution> LayoutShiftAttribution::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<LayoutShiftAttribution> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<LayoutShift> LayoutShift::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("LayoutShift");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<LayoutShift> result(new LayoutShift());
  errors->Push();
  errors->SetName("LayoutShift");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    errors->SetName("value");
    result->value_ = internal::FromValue<double>::Parse(*value_value, errors);
  } else {
    errors->AddError("required property missing: value");
  }
  const base::Value* had_recent_input_value = dict.Find("hadRecentInput");
  if (had_recent_input_value) {
    errors->SetName("hadRecentInput");
    result->had_recent_input_ = internal::FromValue<bool>::Parse(*had_recent_input_value, errors);
  } else {
    errors->AddError("required property missing: hadRecentInput");
  }
  const base::Value* last_input_time_value = dict.Find("lastInputTime");
  if (last_input_time_value) {
    errors->SetName("lastInputTime");
    result->last_input_time_ = internal::FromValue<double>::Parse(*last_input_time_value, errors);
  } else {
    errors->AddError("required property missing: lastInputTime");
  }
  const base::Value* sources_value = dict.Find("sources");
  if (sources_value) {
    errors->SetName("sources");
    result->sources_ = internal::FromValue<std::vector<std::unique_ptr<::headless::performance_timeline::LayoutShiftAttribution>>>::Parse(*sources_value, errors);
  } else {
    errors->AddError("required property missing: sources");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value LayoutShift::Serialize() const {
  base::Value::Dict result;
  result.Set("value", internal::ToValue(value_));
  result.Set("hadRecentInput", internal::ToValue(had_recent_input_));
  result.Set("lastInputTime", internal::ToValue(last_input_time_));
  result.Set("sources", internal::ToValue(sources_));
  return base::Value(std::move(result));
}

std::unique_ptr<LayoutShift> LayoutShift::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<LayoutShift> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<TimelineEvent> TimelineEvent::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("TimelineEvent");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<TimelineEvent> result(new TimelineEvent());
  errors->Push();
  errors->SetName("TimelineEvent");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  } else {
    errors->AddError("required property missing: frameId");
  }
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    errors->SetName("type");
    result->type_ = internal::FromValue<std::string>::Parse(*type_value, errors);
  } else {
    errors->AddError("required property missing: type");
  }
  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    errors->SetName("name");
    result->name_ = internal::FromValue<std::string>::Parse(*name_value, errors);
  } else {
    errors->AddError("required property missing: name");
  }
  const base::Value* time_value = dict.Find("time");
  if (time_value) {
    errors->SetName("time");
    result->time_ = internal::FromValue<double>::Parse(*time_value, errors);
  } else {
    errors->AddError("required property missing: time");
  }
  const base::Value* duration_value = dict.Find("duration");
  if (duration_value) {
    errors->SetName("duration");
    result->duration_ = internal::FromValue<double>::Parse(*duration_value, errors);
  }
  const base::Value* lcp_details_value = dict.Find("lcpDetails");
  if (lcp_details_value) {
    errors->SetName("lcpDetails");
    result->lcp_details_ = internal::FromValue<::headless::performance_timeline::LargestContentfulPaint>::Parse(*lcp_details_value, errors);
  }
  const base::Value* layout_shift_details_value = dict.Find("layoutShiftDetails");
  if (layout_shift_details_value) {
    errors->SetName("layoutShiftDetails");
    result->layout_shift_details_ = internal::FromValue<::headless::performance_timeline::LayoutShift>::Parse(*layout_shift_details_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value TimelineEvent::Serialize() const {
  base::Value::Dict result;
  result.Set("frameId", internal::ToValue(frame_id_));
  result.Set("type", internal::ToValue(type_));
  result.Set("name", internal::ToValue(name_));
  result.Set("time", internal::ToValue(time_));
  if (duration_)
    result.Set("duration", internal::ToValue(duration_.value()));
  if (lcp_details_)
    result.Set("lcpDetails", internal::ToValue(*lcp_details_.value()));
  if (layout_shift_details_)
    result.Set("layoutShiftDetails", internal::ToValue(*layout_shift_details_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<TimelineEvent> TimelineEvent::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<TimelineEvent> result = Parse(Serialize(), &errors);
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
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* event_types_value = dict.Find("eventTypes");
  if (event_types_value) {
    errors->SetName("eventTypes");
    result->event_types_ = internal::FromValue<std::vector<std::string>>::Parse(*event_types_value, errors);
  } else {
    errors->AddError("required property missing: eventTypes");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value EnableParams::Serialize() const {
  base::Value::Dict result;
  result.Set("eventTypes", internal::ToValue(event_types_));
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


std::unique_ptr<TimelineEventAddedParams> TimelineEventAddedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("TimelineEventAddedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<TimelineEventAddedParams> result(new TimelineEventAddedParams());
  errors->Push();
  errors->SetName("TimelineEventAddedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* event_value = dict.Find("event");
  if (event_value) {
    errors->SetName("event");
    result->event_ = internal::FromValue<::headless::performance_timeline::TimelineEvent>::Parse(*event_value, errors);
  } else {
    errors->AddError("required property missing: event");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value TimelineEventAddedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("event", internal::ToValue(*event_));
  return base::Value(std::move(result));
}

std::unique_ptr<TimelineEventAddedParams> TimelineEventAddedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<TimelineEventAddedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


}  // namespace performance_timeline
}  // namespace headless
