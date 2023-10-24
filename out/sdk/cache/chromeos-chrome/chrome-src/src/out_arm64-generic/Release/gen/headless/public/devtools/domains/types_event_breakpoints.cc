// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "headless/public/devtools/domains/types_event_breakpoints.h"

#include "base/values.h"
#include "headless/public/devtools/internal/type_conversions_event_breakpoints.h"

namespace headless {

namespace event_breakpoints {

std::unique_ptr<SetInstrumentationBreakpointParams> SetInstrumentationBreakpointParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetInstrumentationBreakpointParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetInstrumentationBreakpointParams> result(new SetInstrumentationBreakpointParams());
  errors->Push();
  errors->SetName("SetInstrumentationBreakpointParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* event_name_value = dict.Find("eventName");
  if (event_name_value) {
    errors->SetName("eventName");
    result->event_name_ = internal::FromValue<std::string>::Parse(*event_name_value, errors);
  } else {
    errors->AddError("required property missing: eventName");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetInstrumentationBreakpointParams::Serialize() const {
  base::Value::Dict result;
  result.Set("eventName", internal::ToValue(event_name_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetInstrumentationBreakpointParams> SetInstrumentationBreakpointParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetInstrumentationBreakpointParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetInstrumentationBreakpointResult> SetInstrumentationBreakpointResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetInstrumentationBreakpointResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetInstrumentationBreakpointResult> result(new SetInstrumentationBreakpointResult());
  errors->Push();
  errors->SetName("SetInstrumentationBreakpointResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetInstrumentationBreakpointResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetInstrumentationBreakpointResult> SetInstrumentationBreakpointResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetInstrumentationBreakpointResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<RemoveInstrumentationBreakpointParams> RemoveInstrumentationBreakpointParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("RemoveInstrumentationBreakpointParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<RemoveInstrumentationBreakpointParams> result(new RemoveInstrumentationBreakpointParams());
  errors->Push();
  errors->SetName("RemoveInstrumentationBreakpointParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* event_name_value = dict.Find("eventName");
  if (event_name_value) {
    errors->SetName("eventName");
    result->event_name_ = internal::FromValue<std::string>::Parse(*event_name_value, errors);
  } else {
    errors->AddError("required property missing: eventName");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value RemoveInstrumentationBreakpointParams::Serialize() const {
  base::Value::Dict result;
  result.Set("eventName", internal::ToValue(event_name_));
  return base::Value(std::move(result));
}

std::unique_ptr<RemoveInstrumentationBreakpointParams> RemoveInstrumentationBreakpointParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<RemoveInstrumentationBreakpointParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<RemoveInstrumentationBreakpointResult> RemoveInstrumentationBreakpointResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("RemoveInstrumentationBreakpointResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<RemoveInstrumentationBreakpointResult> result(new RemoveInstrumentationBreakpointResult());
  errors->Push();
  errors->SetName("RemoveInstrumentationBreakpointResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value RemoveInstrumentationBreakpointResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<RemoveInstrumentationBreakpointResult> RemoveInstrumentationBreakpointResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<RemoveInstrumentationBreakpointResult> result = Parse(Serialize(), &errors);
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


}  // namespace event_breakpoints
}  // namespace headless
