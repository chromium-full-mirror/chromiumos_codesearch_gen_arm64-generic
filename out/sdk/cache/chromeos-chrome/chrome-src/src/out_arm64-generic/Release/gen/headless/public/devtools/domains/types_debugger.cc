// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "headless/public/devtools/domains/types_debugger.h"
#include "headless/public/devtools/domains/types_runtime.h"

#include "base/values.h"
#include "headless/public/devtools/internal/type_conversions_debugger.h"
#include "headless/public/devtools/internal/type_conversions_runtime.h"

namespace headless {

namespace debugger {

std::unique_ptr<Location> Location::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("Location");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<Location> result(new Location());
  errors->Push();
  errors->SetName("Location");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* script_id_value = dict.Find("scriptId");
  if (script_id_value) {
    errors->SetName("scriptId");
    result->script_id_ = internal::FromValue<std::string>::Parse(*script_id_value, errors);
  } else {
    errors->AddError("required property missing: scriptId");
  }
  const base::Value* line_number_value = dict.Find("lineNumber");
  if (line_number_value) {
    errors->SetName("lineNumber");
    result->line_number_ = internal::FromValue<int>::Parse(*line_number_value, errors);
  } else {
    errors->AddError("required property missing: lineNumber");
  }
  const base::Value* column_number_value = dict.Find("columnNumber");
  if (column_number_value) {
    errors->SetName("columnNumber");
    result->column_number_ = internal::FromValue<int>::Parse(*column_number_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value Location::Serialize() const {
  base::Value::Dict result;
  result.Set("scriptId", internal::ToValue(script_id_));
  result.Set("lineNumber", internal::ToValue(line_number_));
  if (column_number_)
    result.Set("columnNumber", internal::ToValue(column_number_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<Location> Location::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<Location> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ScriptPosition> ScriptPosition::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ScriptPosition");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ScriptPosition> result(new ScriptPosition());
  errors->Push();
  errors->SetName("ScriptPosition");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* line_number_value = dict.Find("lineNumber");
  if (line_number_value) {
    errors->SetName("lineNumber");
    result->line_number_ = internal::FromValue<int>::Parse(*line_number_value, errors);
  } else {
    errors->AddError("required property missing: lineNumber");
  }
  const base::Value* column_number_value = dict.Find("columnNumber");
  if (column_number_value) {
    errors->SetName("columnNumber");
    result->column_number_ = internal::FromValue<int>::Parse(*column_number_value, errors);
  } else {
    errors->AddError("required property missing: columnNumber");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ScriptPosition::Serialize() const {
  base::Value::Dict result;
  result.Set("lineNumber", internal::ToValue(line_number_));
  result.Set("columnNumber", internal::ToValue(column_number_));
  return base::Value(std::move(result));
}

std::unique_ptr<ScriptPosition> ScriptPosition::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ScriptPosition> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<LocationRange> LocationRange::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("LocationRange");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<LocationRange> result(new LocationRange());
  errors->Push();
  errors->SetName("LocationRange");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* script_id_value = dict.Find("scriptId");
  if (script_id_value) {
    errors->SetName("scriptId");
    result->script_id_ = internal::FromValue<std::string>::Parse(*script_id_value, errors);
  } else {
    errors->AddError("required property missing: scriptId");
  }
  const base::Value* start_value = dict.Find("start");
  if (start_value) {
    errors->SetName("start");
    result->start_ = internal::FromValue<::headless::debugger::ScriptPosition>::Parse(*start_value, errors);
  } else {
    errors->AddError("required property missing: start");
  }
  const base::Value* end_value = dict.Find("end");
  if (end_value) {
    errors->SetName("end");
    result->end_ = internal::FromValue<::headless::debugger::ScriptPosition>::Parse(*end_value, errors);
  } else {
    errors->AddError("required property missing: end");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value LocationRange::Serialize() const {
  base::Value::Dict result;
  result.Set("scriptId", internal::ToValue(script_id_));
  result.Set("start", internal::ToValue(*start_));
  result.Set("end", internal::ToValue(*end_));
  return base::Value(std::move(result));
}

std::unique_ptr<LocationRange> LocationRange::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<LocationRange> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CallFrame> CallFrame::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CallFrame");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CallFrame> result(new CallFrame());
  errors->Push();
  errors->SetName("CallFrame");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* call_frame_id_value = dict.Find("callFrameId");
  if (call_frame_id_value) {
    errors->SetName("callFrameId");
    result->call_frame_id_ = internal::FromValue<std::string>::Parse(*call_frame_id_value, errors);
  } else {
    errors->AddError("required property missing: callFrameId");
  }
  const base::Value* function_name_value = dict.Find("functionName");
  if (function_name_value) {
    errors->SetName("functionName");
    result->function_name_ = internal::FromValue<std::string>::Parse(*function_name_value, errors);
  } else {
    errors->AddError("required property missing: functionName");
  }
  const base::Value* function_location_value = dict.Find("functionLocation");
  if (function_location_value) {
    errors->SetName("functionLocation");
    result->function_location_ = internal::FromValue<::headless::debugger::Location>::Parse(*function_location_value, errors);
  }
  const base::Value* location_value = dict.Find("location");
  if (location_value) {
    errors->SetName("location");
    result->location_ = internal::FromValue<::headless::debugger::Location>::Parse(*location_value, errors);
  } else {
    errors->AddError("required property missing: location");
  }
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  const base::Value* scope_chain_value = dict.Find("scopeChain");
  if (scope_chain_value) {
    errors->SetName("scopeChain");
    result->scope_chain_ = internal::FromValue<std::vector<std::unique_ptr<::headless::debugger::Scope>>>::Parse(*scope_chain_value, errors);
  } else {
    errors->AddError("required property missing: scopeChain");
  }
  const base::Value* this_value = dict.Find("this");
  if (this_value) {
    errors->SetName("this");
    result->this_ = internal::FromValue<::headless::runtime::RemoteObject>::Parse(*this_value, errors);
  } else {
    errors->AddError("required property missing: this");
  }
  const base::Value* return_value_value = dict.Find("returnValue");
  if (return_value_value) {
    errors->SetName("returnValue");
    result->return_value_ = internal::FromValue<::headless::runtime::RemoteObject>::Parse(*return_value_value, errors);
  }
  const base::Value* can_be_restarted_value = dict.Find("canBeRestarted");
  if (can_be_restarted_value) {
    errors->SetName("canBeRestarted");
    result->can_be_restarted_ = internal::FromValue<bool>::Parse(*can_be_restarted_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CallFrame::Serialize() const {
  base::Value::Dict result;
  result.Set("callFrameId", internal::ToValue(call_frame_id_));
  result.Set("functionName", internal::ToValue(function_name_));
  if (function_location_)
    result.Set("functionLocation", internal::ToValue(*function_location_.value()));
  result.Set("location", internal::ToValue(*location_));
  result.Set("url", internal::ToValue(url_));
  result.Set("scopeChain", internal::ToValue(scope_chain_));
  result.Set("this", internal::ToValue(*this_));
  if (return_value_)
    result.Set("returnValue", internal::ToValue(*return_value_.value()));
  if (can_be_restarted_)
    result.Set("canBeRestarted", internal::ToValue(can_be_restarted_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<CallFrame> CallFrame::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CallFrame> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<Scope> Scope::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("Scope");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<Scope> result(new Scope());
  errors->Push();
  errors->SetName("Scope");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    errors->SetName("type");
    result->type_ = internal::FromValue<::headless::debugger::ScopeType>::Parse(*type_value, errors);
  } else {
    errors->AddError("required property missing: type");
  }
  const base::Value* object_value = dict.Find("object");
  if (object_value) {
    errors->SetName("object");
    result->object_ = internal::FromValue<::headless::runtime::RemoteObject>::Parse(*object_value, errors);
  } else {
    errors->AddError("required property missing: object");
  }
  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    errors->SetName("name");
    result->name_ = internal::FromValue<std::string>::Parse(*name_value, errors);
  }
  const base::Value* start_location_value = dict.Find("startLocation");
  if (start_location_value) {
    errors->SetName("startLocation");
    result->start_location_ = internal::FromValue<::headless::debugger::Location>::Parse(*start_location_value, errors);
  }
  const base::Value* end_location_value = dict.Find("endLocation");
  if (end_location_value) {
    errors->SetName("endLocation");
    result->end_location_ = internal::FromValue<::headless::debugger::Location>::Parse(*end_location_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value Scope::Serialize() const {
  base::Value::Dict result;
  result.Set("type", internal::ToValue(type_));
  result.Set("object", internal::ToValue(*object_));
  if (name_)
    result.Set("name", internal::ToValue(name_.value()));
  if (start_location_)
    result.Set("startLocation", internal::ToValue(*start_location_.value()));
  if (end_location_)
    result.Set("endLocation", internal::ToValue(*end_location_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<Scope> Scope::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<Scope> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SearchMatch> SearchMatch::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SearchMatch");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SearchMatch> result(new SearchMatch());
  errors->Push();
  errors->SetName("SearchMatch");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* line_number_value = dict.Find("lineNumber");
  if (line_number_value) {
    errors->SetName("lineNumber");
    result->line_number_ = internal::FromValue<double>::Parse(*line_number_value, errors);
  } else {
    errors->AddError("required property missing: lineNumber");
  }
  const base::Value* line_content_value = dict.Find("lineContent");
  if (line_content_value) {
    errors->SetName("lineContent");
    result->line_content_ = internal::FromValue<std::string>::Parse(*line_content_value, errors);
  } else {
    errors->AddError("required property missing: lineContent");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SearchMatch::Serialize() const {
  base::Value::Dict result;
  result.Set("lineNumber", internal::ToValue(line_number_));
  result.Set("lineContent", internal::ToValue(line_content_));
  return base::Value(std::move(result));
}

std::unique_ptr<SearchMatch> SearchMatch::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SearchMatch> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<BreakLocation> BreakLocation::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("BreakLocation");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<BreakLocation> result(new BreakLocation());
  errors->Push();
  errors->SetName("BreakLocation");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* script_id_value = dict.Find("scriptId");
  if (script_id_value) {
    errors->SetName("scriptId");
    result->script_id_ = internal::FromValue<std::string>::Parse(*script_id_value, errors);
  } else {
    errors->AddError("required property missing: scriptId");
  }
  const base::Value* line_number_value = dict.Find("lineNumber");
  if (line_number_value) {
    errors->SetName("lineNumber");
    result->line_number_ = internal::FromValue<int>::Parse(*line_number_value, errors);
  } else {
    errors->AddError("required property missing: lineNumber");
  }
  const base::Value* column_number_value = dict.Find("columnNumber");
  if (column_number_value) {
    errors->SetName("columnNumber");
    result->column_number_ = internal::FromValue<int>::Parse(*column_number_value, errors);
  }
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    errors->SetName("type");
    result->type_ = internal::FromValue<::headless::debugger::BreakLocationType>::Parse(*type_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value BreakLocation::Serialize() const {
  base::Value::Dict result;
  result.Set("scriptId", internal::ToValue(script_id_));
  result.Set("lineNumber", internal::ToValue(line_number_));
  if (column_number_)
    result.Set("columnNumber", internal::ToValue(column_number_.value()));
  if (type_)
    result.Set("type", internal::ToValue(type_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<BreakLocation> BreakLocation::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<BreakLocation> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<WasmDisassemblyChunk> WasmDisassemblyChunk::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("WasmDisassemblyChunk");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<WasmDisassemblyChunk> result(new WasmDisassemblyChunk());
  errors->Push();
  errors->SetName("WasmDisassemblyChunk");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* lines_value = dict.Find("lines");
  if (lines_value) {
    errors->SetName("lines");
    result->lines_ = internal::FromValue<std::vector<std::string>>::Parse(*lines_value, errors);
  } else {
    errors->AddError("required property missing: lines");
  }
  const base::Value* bytecode_offsets_value = dict.Find("bytecodeOffsets");
  if (bytecode_offsets_value) {
    errors->SetName("bytecodeOffsets");
    result->bytecode_offsets_ = internal::FromValue<std::vector<int>>::Parse(*bytecode_offsets_value, errors);
  } else {
    errors->AddError("required property missing: bytecodeOffsets");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value WasmDisassemblyChunk::Serialize() const {
  base::Value::Dict result;
  result.Set("lines", internal::ToValue(lines_));
  result.Set("bytecodeOffsets", internal::ToValue(bytecode_offsets_));
  return base::Value(std::move(result));
}

std::unique_ptr<WasmDisassemblyChunk> WasmDisassemblyChunk::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<WasmDisassemblyChunk> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DebugSymbols> DebugSymbols::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DebugSymbols");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DebugSymbols> result(new DebugSymbols());
  errors->Push();
  errors->SetName("DebugSymbols");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    errors->SetName("type");
    result->type_ = internal::FromValue<::headless::debugger::DebugSymbolsType>::Parse(*type_value, errors);
  } else {
    errors->AddError("required property missing: type");
  }
  const base::Value* externalurl_value = dict.Find("externalURL");
  if (externalurl_value) {
    errors->SetName("externalURL");
    result->externalurl_ = internal::FromValue<std::string>::Parse(*externalurl_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DebugSymbols::Serialize() const {
  base::Value::Dict result;
  result.Set("type", internal::ToValue(type_));
  if (externalurl_)
    result.Set("externalURL", internal::ToValue(externalurl_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<DebugSymbols> DebugSymbols::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DebugSymbols> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ContinueToLocationParams> ContinueToLocationParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ContinueToLocationParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ContinueToLocationParams> result(new ContinueToLocationParams());
  errors->Push();
  errors->SetName("ContinueToLocationParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* location_value = dict.Find("location");
  if (location_value) {
    errors->SetName("location");
    result->location_ = internal::FromValue<::headless::debugger::Location>::Parse(*location_value, errors);
  } else {
    errors->AddError("required property missing: location");
  }
  const base::Value* target_call_frames_value = dict.Find("targetCallFrames");
  if (target_call_frames_value) {
    errors->SetName("targetCallFrames");
    result->target_call_frames_ = internal::FromValue<::headless::debugger::ContinueToLocationTargetCallFrames>::Parse(*target_call_frames_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ContinueToLocationParams::Serialize() const {
  base::Value::Dict result;
  result.Set("location", internal::ToValue(*location_));
  if (target_call_frames_)
    result.Set("targetCallFrames", internal::ToValue(target_call_frames_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<ContinueToLocationParams> ContinueToLocationParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ContinueToLocationParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ContinueToLocationResult> ContinueToLocationResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ContinueToLocationResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ContinueToLocationResult> result(new ContinueToLocationResult());
  errors->Push();
  errors->SetName("ContinueToLocationResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ContinueToLocationResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ContinueToLocationResult> ContinueToLocationResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ContinueToLocationResult> result = Parse(Serialize(), &errors);
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
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* max_scripts_cache_size_value = dict.Find("maxScriptsCacheSize");
  if (max_scripts_cache_size_value) {
    errors->SetName("maxScriptsCacheSize");
    result->max_scripts_cache_size_ = internal::FromValue<double>::Parse(*max_scripts_cache_size_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value EnableParams::Serialize() const {
  base::Value::Dict result;
  if (max_scripts_cache_size_)
    result.Set("maxScriptsCacheSize", internal::ToValue(max_scripts_cache_size_.value()));
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
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* debugger_id_value = dict.Find("debuggerId");
  if (debugger_id_value) {
    errors->SetName("debuggerId");
    result->debugger_id_ = internal::FromValue<std::string>::Parse(*debugger_id_value, errors);
  } else {
    errors->AddError("required property missing: debuggerId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value EnableResult::Serialize() const {
  base::Value::Dict result;
  result.Set("debuggerId", internal::ToValue(debugger_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<EnableResult> EnableResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<EnableResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<EvaluateOnCallFrameParams> EvaluateOnCallFrameParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("EvaluateOnCallFrameParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<EvaluateOnCallFrameParams> result(new EvaluateOnCallFrameParams());
  errors->Push();
  errors->SetName("EvaluateOnCallFrameParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* call_frame_id_value = dict.Find("callFrameId");
  if (call_frame_id_value) {
    errors->SetName("callFrameId");
    result->call_frame_id_ = internal::FromValue<std::string>::Parse(*call_frame_id_value, errors);
  } else {
    errors->AddError("required property missing: callFrameId");
  }
  const base::Value* expression_value = dict.Find("expression");
  if (expression_value) {
    errors->SetName("expression");
    result->expression_ = internal::FromValue<std::string>::Parse(*expression_value, errors);
  } else {
    errors->AddError("required property missing: expression");
  }
  const base::Value* object_group_value = dict.Find("objectGroup");
  if (object_group_value) {
    errors->SetName("objectGroup");
    result->object_group_ = internal::FromValue<std::string>::Parse(*object_group_value, errors);
  }
  const base::Value* include_command_lineapi_value = dict.Find("includeCommandLineAPI");
  if (include_command_lineapi_value) {
    errors->SetName("includeCommandLineAPI");
    result->include_command_lineapi_ = internal::FromValue<bool>::Parse(*include_command_lineapi_value, errors);
  }
  const base::Value* silent_value = dict.Find("silent");
  if (silent_value) {
    errors->SetName("silent");
    result->silent_ = internal::FromValue<bool>::Parse(*silent_value, errors);
  }
  const base::Value* return_by_value_value = dict.Find("returnByValue");
  if (return_by_value_value) {
    errors->SetName("returnByValue");
    result->return_by_value_ = internal::FromValue<bool>::Parse(*return_by_value_value, errors);
  }
  const base::Value* generate_preview_value = dict.Find("generatePreview");
  if (generate_preview_value) {
    errors->SetName("generatePreview");
    result->generate_preview_ = internal::FromValue<bool>::Parse(*generate_preview_value, errors);
  }
  const base::Value* throw_on_side_effect_value = dict.Find("throwOnSideEffect");
  if (throw_on_side_effect_value) {
    errors->SetName("throwOnSideEffect");
    result->throw_on_side_effect_ = internal::FromValue<bool>::Parse(*throw_on_side_effect_value, errors);
  }
  const base::Value* timeout_value = dict.Find("timeout");
  if (timeout_value) {
    errors->SetName("timeout");
    result->timeout_ = internal::FromValue<double>::Parse(*timeout_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value EvaluateOnCallFrameParams::Serialize() const {
  base::Value::Dict result;
  result.Set("callFrameId", internal::ToValue(call_frame_id_));
  result.Set("expression", internal::ToValue(expression_));
  if (object_group_)
    result.Set("objectGroup", internal::ToValue(object_group_.value()));
  if (include_command_lineapi_)
    result.Set("includeCommandLineAPI", internal::ToValue(include_command_lineapi_.value()));
  if (silent_)
    result.Set("silent", internal::ToValue(silent_.value()));
  if (return_by_value_)
    result.Set("returnByValue", internal::ToValue(return_by_value_.value()));
  if (generate_preview_)
    result.Set("generatePreview", internal::ToValue(generate_preview_.value()));
  if (throw_on_side_effect_)
    result.Set("throwOnSideEffect", internal::ToValue(throw_on_side_effect_.value()));
  if (timeout_)
    result.Set("timeout", internal::ToValue(timeout_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<EvaluateOnCallFrameParams> EvaluateOnCallFrameParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<EvaluateOnCallFrameParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<EvaluateOnCallFrameResult> EvaluateOnCallFrameResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("EvaluateOnCallFrameResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<EvaluateOnCallFrameResult> result(new EvaluateOnCallFrameResult());
  errors->Push();
  errors->SetName("EvaluateOnCallFrameResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* result_value = dict.Find("result");
  if (result_value) {
    errors->SetName("result");
    result->result_ = internal::FromValue<::headless::runtime::RemoteObject>::Parse(*result_value, errors);
  } else {
    errors->AddError("required property missing: result");
  }
  const base::Value* exception_details_value = dict.Find("exceptionDetails");
  if (exception_details_value) {
    errors->SetName("exceptionDetails");
    result->exception_details_ = internal::FromValue<::headless::runtime::ExceptionDetails>::Parse(*exception_details_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value EvaluateOnCallFrameResult::Serialize() const {
  base::Value::Dict result;
  result.Set("result", internal::ToValue(*result_));
  if (exception_details_)
    result.Set("exceptionDetails", internal::ToValue(*exception_details_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<EvaluateOnCallFrameResult> EvaluateOnCallFrameResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<EvaluateOnCallFrameResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetPossibleBreakpointsParams> GetPossibleBreakpointsParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetPossibleBreakpointsParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetPossibleBreakpointsParams> result(new GetPossibleBreakpointsParams());
  errors->Push();
  errors->SetName("GetPossibleBreakpointsParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* start_value = dict.Find("start");
  if (start_value) {
    errors->SetName("start");
    result->start_ = internal::FromValue<::headless::debugger::Location>::Parse(*start_value, errors);
  } else {
    errors->AddError("required property missing: start");
  }
  const base::Value* end_value = dict.Find("end");
  if (end_value) {
    errors->SetName("end");
    result->end_ = internal::FromValue<::headless::debugger::Location>::Parse(*end_value, errors);
  }
  const base::Value* restrict_to_function_value = dict.Find("restrictToFunction");
  if (restrict_to_function_value) {
    errors->SetName("restrictToFunction");
    result->restrict_to_function_ = internal::FromValue<bool>::Parse(*restrict_to_function_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetPossibleBreakpointsParams::Serialize() const {
  base::Value::Dict result;
  result.Set("start", internal::ToValue(*start_));
  if (end_)
    result.Set("end", internal::ToValue(*end_.value()));
  if (restrict_to_function_)
    result.Set("restrictToFunction", internal::ToValue(restrict_to_function_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<GetPossibleBreakpointsParams> GetPossibleBreakpointsParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetPossibleBreakpointsParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetPossibleBreakpointsResult> GetPossibleBreakpointsResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetPossibleBreakpointsResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetPossibleBreakpointsResult> result(new GetPossibleBreakpointsResult());
  errors->Push();
  errors->SetName("GetPossibleBreakpointsResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* locations_value = dict.Find("locations");
  if (locations_value) {
    errors->SetName("locations");
    result->locations_ = internal::FromValue<std::vector<std::unique_ptr<::headless::debugger::BreakLocation>>>::Parse(*locations_value, errors);
  } else {
    errors->AddError("required property missing: locations");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetPossibleBreakpointsResult::Serialize() const {
  base::Value::Dict result;
  result.Set("locations", internal::ToValue(locations_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetPossibleBreakpointsResult> GetPossibleBreakpointsResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetPossibleBreakpointsResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetScriptSourceParams> GetScriptSourceParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetScriptSourceParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetScriptSourceParams> result(new GetScriptSourceParams());
  errors->Push();
  errors->SetName("GetScriptSourceParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* script_id_value = dict.Find("scriptId");
  if (script_id_value) {
    errors->SetName("scriptId");
    result->script_id_ = internal::FromValue<std::string>::Parse(*script_id_value, errors);
  } else {
    errors->AddError("required property missing: scriptId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetScriptSourceParams::Serialize() const {
  base::Value::Dict result;
  result.Set("scriptId", internal::ToValue(script_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetScriptSourceParams> GetScriptSourceParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetScriptSourceParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetScriptSourceResult> GetScriptSourceResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetScriptSourceResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetScriptSourceResult> result(new GetScriptSourceResult());
  errors->Push();
  errors->SetName("GetScriptSourceResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* script_source_value = dict.Find("scriptSource");
  if (script_source_value) {
    errors->SetName("scriptSource");
    result->script_source_ = internal::FromValue<std::string>::Parse(*script_source_value, errors);
  } else {
    errors->AddError("required property missing: scriptSource");
  }
  const base::Value* bytecode_value = dict.Find("bytecode");
  if (bytecode_value) {
    errors->SetName("bytecode");
    result->bytecode_ = internal::FromValue<protocol::Binary>::Parse(*bytecode_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetScriptSourceResult::Serialize() const {
  base::Value::Dict result;
  result.Set("scriptSource", internal::ToValue(script_source_));
  if (bytecode_)
    result.Set("bytecode", internal::ToValue(bytecode_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<GetScriptSourceResult> GetScriptSourceResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetScriptSourceResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DisassembleWasmModuleParams> DisassembleWasmModuleParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DisassembleWasmModuleParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DisassembleWasmModuleParams> result(new DisassembleWasmModuleParams());
  errors->Push();
  errors->SetName("DisassembleWasmModuleParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* script_id_value = dict.Find("scriptId");
  if (script_id_value) {
    errors->SetName("scriptId");
    result->script_id_ = internal::FromValue<std::string>::Parse(*script_id_value, errors);
  } else {
    errors->AddError("required property missing: scriptId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DisassembleWasmModuleParams::Serialize() const {
  base::Value::Dict result;
  result.Set("scriptId", internal::ToValue(script_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<DisassembleWasmModuleParams> DisassembleWasmModuleParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DisassembleWasmModuleParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DisassembleWasmModuleResult> DisassembleWasmModuleResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DisassembleWasmModuleResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DisassembleWasmModuleResult> result(new DisassembleWasmModuleResult());
  errors->Push();
  errors->SetName("DisassembleWasmModuleResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* stream_id_value = dict.Find("streamId");
  if (stream_id_value) {
    errors->SetName("streamId");
    result->stream_id_ = internal::FromValue<std::string>::Parse(*stream_id_value, errors);
  }
  const base::Value* total_number_of_lines_value = dict.Find("totalNumberOfLines");
  if (total_number_of_lines_value) {
    errors->SetName("totalNumberOfLines");
    result->total_number_of_lines_ = internal::FromValue<int>::Parse(*total_number_of_lines_value, errors);
  } else {
    errors->AddError("required property missing: totalNumberOfLines");
  }
  const base::Value* function_body_offsets_value = dict.Find("functionBodyOffsets");
  if (function_body_offsets_value) {
    errors->SetName("functionBodyOffsets");
    result->function_body_offsets_ = internal::FromValue<std::vector<int>>::Parse(*function_body_offsets_value, errors);
  } else {
    errors->AddError("required property missing: functionBodyOffsets");
  }
  const base::Value* chunk_value = dict.Find("chunk");
  if (chunk_value) {
    errors->SetName("chunk");
    result->chunk_ = internal::FromValue<::headless::debugger::WasmDisassemblyChunk>::Parse(*chunk_value, errors);
  } else {
    errors->AddError("required property missing: chunk");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DisassembleWasmModuleResult::Serialize() const {
  base::Value::Dict result;
  if (stream_id_)
    result.Set("streamId", internal::ToValue(stream_id_.value()));
  result.Set("totalNumberOfLines", internal::ToValue(total_number_of_lines_));
  result.Set("functionBodyOffsets", internal::ToValue(function_body_offsets_));
  result.Set("chunk", internal::ToValue(*chunk_));
  return base::Value(std::move(result));
}

std::unique_ptr<DisassembleWasmModuleResult> DisassembleWasmModuleResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DisassembleWasmModuleResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<NextWasmDisassemblyChunkParams> NextWasmDisassemblyChunkParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("NextWasmDisassemblyChunkParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<NextWasmDisassemblyChunkParams> result(new NextWasmDisassemblyChunkParams());
  errors->Push();
  errors->SetName("NextWasmDisassemblyChunkParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* stream_id_value = dict.Find("streamId");
  if (stream_id_value) {
    errors->SetName("streamId");
    result->stream_id_ = internal::FromValue<std::string>::Parse(*stream_id_value, errors);
  } else {
    errors->AddError("required property missing: streamId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value NextWasmDisassemblyChunkParams::Serialize() const {
  base::Value::Dict result;
  result.Set("streamId", internal::ToValue(stream_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<NextWasmDisassemblyChunkParams> NextWasmDisassemblyChunkParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<NextWasmDisassemblyChunkParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<NextWasmDisassemblyChunkResult> NextWasmDisassemblyChunkResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("NextWasmDisassemblyChunkResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<NextWasmDisassemblyChunkResult> result(new NextWasmDisassemblyChunkResult());
  errors->Push();
  errors->SetName("NextWasmDisassemblyChunkResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* chunk_value = dict.Find("chunk");
  if (chunk_value) {
    errors->SetName("chunk");
    result->chunk_ = internal::FromValue<::headless::debugger::WasmDisassemblyChunk>::Parse(*chunk_value, errors);
  } else {
    errors->AddError("required property missing: chunk");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value NextWasmDisassemblyChunkResult::Serialize() const {
  base::Value::Dict result;
  result.Set("chunk", internal::ToValue(*chunk_));
  return base::Value(std::move(result));
}

std::unique_ptr<NextWasmDisassemblyChunkResult> NextWasmDisassemblyChunkResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<NextWasmDisassemblyChunkResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetWasmBytecodeParams> GetWasmBytecodeParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetWasmBytecodeParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetWasmBytecodeParams> result(new GetWasmBytecodeParams());
  errors->Push();
  errors->SetName("GetWasmBytecodeParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* script_id_value = dict.Find("scriptId");
  if (script_id_value) {
    errors->SetName("scriptId");
    result->script_id_ = internal::FromValue<std::string>::Parse(*script_id_value, errors);
  } else {
    errors->AddError("required property missing: scriptId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetWasmBytecodeParams::Serialize() const {
  base::Value::Dict result;
  result.Set("scriptId", internal::ToValue(script_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetWasmBytecodeParams> GetWasmBytecodeParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetWasmBytecodeParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetWasmBytecodeResult> GetWasmBytecodeResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetWasmBytecodeResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetWasmBytecodeResult> result(new GetWasmBytecodeResult());
  errors->Push();
  errors->SetName("GetWasmBytecodeResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* bytecode_value = dict.Find("bytecode");
  if (bytecode_value) {
    errors->SetName("bytecode");
    result->bytecode_ = internal::FromValue<protocol::Binary>::Parse(*bytecode_value, errors);
  } else {
    errors->AddError("required property missing: bytecode");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetWasmBytecodeResult::Serialize() const {
  base::Value::Dict result;
  result.Set("bytecode", internal::ToValue(bytecode_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetWasmBytecodeResult> GetWasmBytecodeResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetWasmBytecodeResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetStackTraceParams> GetStackTraceParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetStackTraceParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetStackTraceParams> result(new GetStackTraceParams());
  errors->Push();
  errors->SetName("GetStackTraceParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* stack_trace_id_value = dict.Find("stackTraceId");
  if (stack_trace_id_value) {
    errors->SetName("stackTraceId");
    result->stack_trace_id_ = internal::FromValue<::headless::runtime::StackTraceId>::Parse(*stack_trace_id_value, errors);
  } else {
    errors->AddError("required property missing: stackTraceId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetStackTraceParams::Serialize() const {
  base::Value::Dict result;
  result.Set("stackTraceId", internal::ToValue(*stack_trace_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetStackTraceParams> GetStackTraceParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetStackTraceParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetStackTraceResult> GetStackTraceResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetStackTraceResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetStackTraceResult> result(new GetStackTraceResult());
  errors->Push();
  errors->SetName("GetStackTraceResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* stack_trace_value = dict.Find("stackTrace");
  if (stack_trace_value) {
    errors->SetName("stackTrace");
    result->stack_trace_ = internal::FromValue<::headless::runtime::StackTrace>::Parse(*stack_trace_value, errors);
  } else {
    errors->AddError("required property missing: stackTrace");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetStackTraceResult::Serialize() const {
  base::Value::Dict result;
  result.Set("stackTrace", internal::ToValue(*stack_trace_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetStackTraceResult> GetStackTraceResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetStackTraceResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PauseParams> PauseParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PauseParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PauseParams> result(new PauseParams());
  errors->Push();
  errors->SetName("PauseParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PauseParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<PauseParams> PauseParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PauseParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PauseResult> PauseResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PauseResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PauseResult> result(new PauseResult());
  errors->Push();
  errors->SetName("PauseResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PauseResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<PauseResult> PauseResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PauseResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PauseOnAsyncCallParams> PauseOnAsyncCallParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PauseOnAsyncCallParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PauseOnAsyncCallParams> result(new PauseOnAsyncCallParams());
  errors->Push();
  errors->SetName("PauseOnAsyncCallParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* parent_stack_trace_id_value = dict.Find("parentStackTraceId");
  if (parent_stack_trace_id_value) {
    errors->SetName("parentStackTraceId");
    result->parent_stack_trace_id_ = internal::FromValue<::headless::runtime::StackTraceId>::Parse(*parent_stack_trace_id_value, errors);
  } else {
    errors->AddError("required property missing: parentStackTraceId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PauseOnAsyncCallParams::Serialize() const {
  base::Value::Dict result;
  result.Set("parentStackTraceId", internal::ToValue(*parent_stack_trace_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<PauseOnAsyncCallParams> PauseOnAsyncCallParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PauseOnAsyncCallParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PauseOnAsyncCallResult> PauseOnAsyncCallResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PauseOnAsyncCallResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PauseOnAsyncCallResult> result(new PauseOnAsyncCallResult());
  errors->Push();
  errors->SetName("PauseOnAsyncCallResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PauseOnAsyncCallResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<PauseOnAsyncCallResult> PauseOnAsyncCallResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PauseOnAsyncCallResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<RemoveBreakpointParams> RemoveBreakpointParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("RemoveBreakpointParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<RemoveBreakpointParams> result(new RemoveBreakpointParams());
  errors->Push();
  errors->SetName("RemoveBreakpointParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* breakpoint_id_value = dict.Find("breakpointId");
  if (breakpoint_id_value) {
    errors->SetName("breakpointId");
    result->breakpoint_id_ = internal::FromValue<std::string>::Parse(*breakpoint_id_value, errors);
  } else {
    errors->AddError("required property missing: breakpointId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value RemoveBreakpointParams::Serialize() const {
  base::Value::Dict result;
  result.Set("breakpointId", internal::ToValue(breakpoint_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<RemoveBreakpointParams> RemoveBreakpointParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<RemoveBreakpointParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<RemoveBreakpointResult> RemoveBreakpointResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("RemoveBreakpointResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<RemoveBreakpointResult> result(new RemoveBreakpointResult());
  errors->Push();
  errors->SetName("RemoveBreakpointResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value RemoveBreakpointResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<RemoveBreakpointResult> RemoveBreakpointResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<RemoveBreakpointResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<RestartFrameParams> RestartFrameParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("RestartFrameParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<RestartFrameParams> result(new RestartFrameParams());
  errors->Push();
  errors->SetName("RestartFrameParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* call_frame_id_value = dict.Find("callFrameId");
  if (call_frame_id_value) {
    errors->SetName("callFrameId");
    result->call_frame_id_ = internal::FromValue<std::string>::Parse(*call_frame_id_value, errors);
  } else {
    errors->AddError("required property missing: callFrameId");
  }
  const base::Value* mode_value = dict.Find("mode");
  if (mode_value) {
    errors->SetName("mode");
    result->mode_ = internal::FromValue<::headless::debugger::RestartFrameMode>::Parse(*mode_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value RestartFrameParams::Serialize() const {
  base::Value::Dict result;
  result.Set("callFrameId", internal::ToValue(call_frame_id_));
  if (mode_)
    result.Set("mode", internal::ToValue(mode_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<RestartFrameParams> RestartFrameParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<RestartFrameParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<RestartFrameResult> RestartFrameResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("RestartFrameResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<RestartFrameResult> result(new RestartFrameResult());
  errors->Push();
  errors->SetName("RestartFrameResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* call_frames_value = dict.Find("callFrames");
  if (call_frames_value) {
    errors->SetName("callFrames");
    result->call_frames_ = internal::FromValue<std::vector<std::unique_ptr<::headless::debugger::CallFrame>>>::Parse(*call_frames_value, errors);
  } else {
    errors->AddError("required property missing: callFrames");
  }
  const base::Value* async_stack_trace_value = dict.Find("asyncStackTrace");
  if (async_stack_trace_value) {
    errors->SetName("asyncStackTrace");
    result->async_stack_trace_ = internal::FromValue<::headless::runtime::StackTrace>::Parse(*async_stack_trace_value, errors);
  }
  const base::Value* async_stack_trace_id_value = dict.Find("asyncStackTraceId");
  if (async_stack_trace_id_value) {
    errors->SetName("asyncStackTraceId");
    result->async_stack_trace_id_ = internal::FromValue<::headless::runtime::StackTraceId>::Parse(*async_stack_trace_id_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value RestartFrameResult::Serialize() const {
  base::Value::Dict result;
  result.Set("callFrames", internal::ToValue(call_frames_));
  if (async_stack_trace_)
    result.Set("asyncStackTrace", internal::ToValue(*async_stack_trace_.value()));
  if (async_stack_trace_id_)
    result.Set("asyncStackTraceId", internal::ToValue(*async_stack_trace_id_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<RestartFrameResult> RestartFrameResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<RestartFrameResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ResumeParams> ResumeParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ResumeParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ResumeParams> result(new ResumeParams());
  errors->Push();
  errors->SetName("ResumeParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* terminate_on_resume_value = dict.Find("terminateOnResume");
  if (terminate_on_resume_value) {
    errors->SetName("terminateOnResume");
    result->terminate_on_resume_ = internal::FromValue<bool>::Parse(*terminate_on_resume_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ResumeParams::Serialize() const {
  base::Value::Dict result;
  if (terminate_on_resume_)
    result.Set("terminateOnResume", internal::ToValue(terminate_on_resume_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<ResumeParams> ResumeParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ResumeParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ResumeResult> ResumeResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ResumeResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ResumeResult> result(new ResumeResult());
  errors->Push();
  errors->SetName("ResumeResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ResumeResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ResumeResult> ResumeResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ResumeResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SearchInContentParams> SearchInContentParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SearchInContentParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SearchInContentParams> result(new SearchInContentParams());
  errors->Push();
  errors->SetName("SearchInContentParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* script_id_value = dict.Find("scriptId");
  if (script_id_value) {
    errors->SetName("scriptId");
    result->script_id_ = internal::FromValue<std::string>::Parse(*script_id_value, errors);
  } else {
    errors->AddError("required property missing: scriptId");
  }
  const base::Value* query_value = dict.Find("query");
  if (query_value) {
    errors->SetName("query");
    result->query_ = internal::FromValue<std::string>::Parse(*query_value, errors);
  } else {
    errors->AddError("required property missing: query");
  }
  const base::Value* case_sensitive_value = dict.Find("caseSensitive");
  if (case_sensitive_value) {
    errors->SetName("caseSensitive");
    result->case_sensitive_ = internal::FromValue<bool>::Parse(*case_sensitive_value, errors);
  }
  const base::Value* is_regex_value = dict.Find("isRegex");
  if (is_regex_value) {
    errors->SetName("isRegex");
    result->is_regex_ = internal::FromValue<bool>::Parse(*is_regex_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SearchInContentParams::Serialize() const {
  base::Value::Dict result;
  result.Set("scriptId", internal::ToValue(script_id_));
  result.Set("query", internal::ToValue(query_));
  if (case_sensitive_)
    result.Set("caseSensitive", internal::ToValue(case_sensitive_.value()));
  if (is_regex_)
    result.Set("isRegex", internal::ToValue(is_regex_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SearchInContentParams> SearchInContentParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SearchInContentParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SearchInContentResult> SearchInContentResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SearchInContentResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SearchInContentResult> result(new SearchInContentResult());
  errors->Push();
  errors->SetName("SearchInContentResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* result_value = dict.Find("result");
  if (result_value) {
    errors->SetName("result");
    result->result_ = internal::FromValue<std::vector<std::unique_ptr<::headless::debugger::SearchMatch>>>::Parse(*result_value, errors);
  } else {
    errors->AddError("required property missing: result");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SearchInContentResult::Serialize() const {
  base::Value::Dict result;
  result.Set("result", internal::ToValue(result_));
  return base::Value(std::move(result));
}

std::unique_ptr<SearchInContentResult> SearchInContentResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SearchInContentResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetAsyncCallStackDepthParams> SetAsyncCallStackDepthParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetAsyncCallStackDepthParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetAsyncCallStackDepthParams> result(new SetAsyncCallStackDepthParams());
  errors->Push();
  errors->SetName("SetAsyncCallStackDepthParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* max_depth_value = dict.Find("maxDepth");
  if (max_depth_value) {
    errors->SetName("maxDepth");
    result->max_depth_ = internal::FromValue<int>::Parse(*max_depth_value, errors);
  } else {
    errors->AddError("required property missing: maxDepth");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetAsyncCallStackDepthParams::Serialize() const {
  base::Value::Dict result;
  result.Set("maxDepth", internal::ToValue(max_depth_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetAsyncCallStackDepthParams> SetAsyncCallStackDepthParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetAsyncCallStackDepthParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetAsyncCallStackDepthResult> SetAsyncCallStackDepthResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetAsyncCallStackDepthResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetAsyncCallStackDepthResult> result(new SetAsyncCallStackDepthResult());
  errors->Push();
  errors->SetName("SetAsyncCallStackDepthResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetAsyncCallStackDepthResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetAsyncCallStackDepthResult> SetAsyncCallStackDepthResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetAsyncCallStackDepthResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetBlackboxPatternsParams> SetBlackboxPatternsParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetBlackboxPatternsParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetBlackboxPatternsParams> result(new SetBlackboxPatternsParams());
  errors->Push();
  errors->SetName("SetBlackboxPatternsParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* patterns_value = dict.Find("patterns");
  if (patterns_value) {
    errors->SetName("patterns");
    result->patterns_ = internal::FromValue<std::vector<std::string>>::Parse(*patterns_value, errors);
  } else {
    errors->AddError("required property missing: patterns");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetBlackboxPatternsParams::Serialize() const {
  base::Value::Dict result;
  result.Set("patterns", internal::ToValue(patterns_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetBlackboxPatternsParams> SetBlackboxPatternsParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetBlackboxPatternsParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetBlackboxPatternsResult> SetBlackboxPatternsResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetBlackboxPatternsResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetBlackboxPatternsResult> result(new SetBlackboxPatternsResult());
  errors->Push();
  errors->SetName("SetBlackboxPatternsResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetBlackboxPatternsResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetBlackboxPatternsResult> SetBlackboxPatternsResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetBlackboxPatternsResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetBlackboxedRangesParams> SetBlackboxedRangesParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetBlackboxedRangesParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetBlackboxedRangesParams> result(new SetBlackboxedRangesParams());
  errors->Push();
  errors->SetName("SetBlackboxedRangesParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* script_id_value = dict.Find("scriptId");
  if (script_id_value) {
    errors->SetName("scriptId");
    result->script_id_ = internal::FromValue<std::string>::Parse(*script_id_value, errors);
  } else {
    errors->AddError("required property missing: scriptId");
  }
  const base::Value* positions_value = dict.Find("positions");
  if (positions_value) {
    errors->SetName("positions");
    result->positions_ = internal::FromValue<std::vector<std::unique_ptr<::headless::debugger::ScriptPosition>>>::Parse(*positions_value, errors);
  } else {
    errors->AddError("required property missing: positions");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetBlackboxedRangesParams::Serialize() const {
  base::Value::Dict result;
  result.Set("scriptId", internal::ToValue(script_id_));
  result.Set("positions", internal::ToValue(positions_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetBlackboxedRangesParams> SetBlackboxedRangesParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetBlackboxedRangesParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetBlackboxedRangesResult> SetBlackboxedRangesResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetBlackboxedRangesResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetBlackboxedRangesResult> result(new SetBlackboxedRangesResult());
  errors->Push();
  errors->SetName("SetBlackboxedRangesResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetBlackboxedRangesResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetBlackboxedRangesResult> SetBlackboxedRangesResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetBlackboxedRangesResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetBreakpointParams> SetBreakpointParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetBreakpointParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetBreakpointParams> result(new SetBreakpointParams());
  errors->Push();
  errors->SetName("SetBreakpointParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* location_value = dict.Find("location");
  if (location_value) {
    errors->SetName("location");
    result->location_ = internal::FromValue<::headless::debugger::Location>::Parse(*location_value, errors);
  } else {
    errors->AddError("required property missing: location");
  }
  const base::Value* condition_value = dict.Find("condition");
  if (condition_value) {
    errors->SetName("condition");
    result->condition_ = internal::FromValue<std::string>::Parse(*condition_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetBreakpointParams::Serialize() const {
  base::Value::Dict result;
  result.Set("location", internal::ToValue(*location_));
  if (condition_)
    result.Set("condition", internal::ToValue(condition_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetBreakpointParams> SetBreakpointParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetBreakpointParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetBreakpointResult> SetBreakpointResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetBreakpointResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetBreakpointResult> result(new SetBreakpointResult());
  errors->Push();
  errors->SetName("SetBreakpointResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* breakpoint_id_value = dict.Find("breakpointId");
  if (breakpoint_id_value) {
    errors->SetName("breakpointId");
    result->breakpoint_id_ = internal::FromValue<std::string>::Parse(*breakpoint_id_value, errors);
  } else {
    errors->AddError("required property missing: breakpointId");
  }
  const base::Value* actual_location_value = dict.Find("actualLocation");
  if (actual_location_value) {
    errors->SetName("actualLocation");
    result->actual_location_ = internal::FromValue<::headless::debugger::Location>::Parse(*actual_location_value, errors);
  } else {
    errors->AddError("required property missing: actualLocation");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetBreakpointResult::Serialize() const {
  base::Value::Dict result;
  result.Set("breakpointId", internal::ToValue(breakpoint_id_));
  result.Set("actualLocation", internal::ToValue(*actual_location_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetBreakpointResult> SetBreakpointResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetBreakpointResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


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
  const base::Value* instrumentation_value = dict.Find("instrumentation");
  if (instrumentation_value) {
    errors->SetName("instrumentation");
    result->instrumentation_ = internal::FromValue<::headless::debugger::SetInstrumentationBreakpointInstrumentation>::Parse(*instrumentation_value, errors);
  } else {
    errors->AddError("required property missing: instrumentation");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetInstrumentationBreakpointParams::Serialize() const {
  base::Value::Dict result;
  result.Set("instrumentation", internal::ToValue(instrumentation_));
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
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* breakpoint_id_value = dict.Find("breakpointId");
  if (breakpoint_id_value) {
    errors->SetName("breakpointId");
    result->breakpoint_id_ = internal::FromValue<std::string>::Parse(*breakpoint_id_value, errors);
  } else {
    errors->AddError("required property missing: breakpointId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetInstrumentationBreakpointResult::Serialize() const {
  base::Value::Dict result;
  result.Set("breakpointId", internal::ToValue(breakpoint_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetInstrumentationBreakpointResult> SetInstrumentationBreakpointResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetInstrumentationBreakpointResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetBreakpointByUrlParams> SetBreakpointByUrlParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetBreakpointByUrlParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetBreakpointByUrlParams> result(new SetBreakpointByUrlParams());
  errors->Push();
  errors->SetName("SetBreakpointByUrlParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* line_number_value = dict.Find("lineNumber");
  if (line_number_value) {
    errors->SetName("lineNumber");
    result->line_number_ = internal::FromValue<int>::Parse(*line_number_value, errors);
  } else {
    errors->AddError("required property missing: lineNumber");
  }
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  }
  const base::Value* url_regex_value = dict.Find("urlRegex");
  if (url_regex_value) {
    errors->SetName("urlRegex");
    result->url_regex_ = internal::FromValue<std::string>::Parse(*url_regex_value, errors);
  }
  const base::Value* script_hash_value = dict.Find("scriptHash");
  if (script_hash_value) {
    errors->SetName("scriptHash");
    result->script_hash_ = internal::FromValue<std::string>::Parse(*script_hash_value, errors);
  }
  const base::Value* column_number_value = dict.Find("columnNumber");
  if (column_number_value) {
    errors->SetName("columnNumber");
    result->column_number_ = internal::FromValue<int>::Parse(*column_number_value, errors);
  }
  const base::Value* condition_value = dict.Find("condition");
  if (condition_value) {
    errors->SetName("condition");
    result->condition_ = internal::FromValue<std::string>::Parse(*condition_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetBreakpointByUrlParams::Serialize() const {
  base::Value::Dict result;
  result.Set("lineNumber", internal::ToValue(line_number_));
  if (url_)
    result.Set("url", internal::ToValue(url_.value()));
  if (url_regex_)
    result.Set("urlRegex", internal::ToValue(url_regex_.value()));
  if (script_hash_)
    result.Set("scriptHash", internal::ToValue(script_hash_.value()));
  if (column_number_)
    result.Set("columnNumber", internal::ToValue(column_number_.value()));
  if (condition_)
    result.Set("condition", internal::ToValue(condition_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetBreakpointByUrlParams> SetBreakpointByUrlParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetBreakpointByUrlParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetBreakpointByUrlResult> SetBreakpointByUrlResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetBreakpointByUrlResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetBreakpointByUrlResult> result(new SetBreakpointByUrlResult());
  errors->Push();
  errors->SetName("SetBreakpointByUrlResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* breakpoint_id_value = dict.Find("breakpointId");
  if (breakpoint_id_value) {
    errors->SetName("breakpointId");
    result->breakpoint_id_ = internal::FromValue<std::string>::Parse(*breakpoint_id_value, errors);
  } else {
    errors->AddError("required property missing: breakpointId");
  }
  const base::Value* locations_value = dict.Find("locations");
  if (locations_value) {
    errors->SetName("locations");
    result->locations_ = internal::FromValue<std::vector<std::unique_ptr<::headless::debugger::Location>>>::Parse(*locations_value, errors);
  } else {
    errors->AddError("required property missing: locations");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetBreakpointByUrlResult::Serialize() const {
  base::Value::Dict result;
  result.Set("breakpointId", internal::ToValue(breakpoint_id_));
  result.Set("locations", internal::ToValue(locations_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetBreakpointByUrlResult> SetBreakpointByUrlResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetBreakpointByUrlResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetBreakpointOnFunctionCallParams> SetBreakpointOnFunctionCallParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetBreakpointOnFunctionCallParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetBreakpointOnFunctionCallParams> result(new SetBreakpointOnFunctionCallParams());
  errors->Push();
  errors->SetName("SetBreakpointOnFunctionCallParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* object_id_value = dict.Find("objectId");
  if (object_id_value) {
    errors->SetName("objectId");
    result->object_id_ = internal::FromValue<std::string>::Parse(*object_id_value, errors);
  } else {
    errors->AddError("required property missing: objectId");
  }
  const base::Value* condition_value = dict.Find("condition");
  if (condition_value) {
    errors->SetName("condition");
    result->condition_ = internal::FromValue<std::string>::Parse(*condition_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetBreakpointOnFunctionCallParams::Serialize() const {
  base::Value::Dict result;
  result.Set("objectId", internal::ToValue(object_id_));
  if (condition_)
    result.Set("condition", internal::ToValue(condition_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetBreakpointOnFunctionCallParams> SetBreakpointOnFunctionCallParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetBreakpointOnFunctionCallParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetBreakpointOnFunctionCallResult> SetBreakpointOnFunctionCallResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetBreakpointOnFunctionCallResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetBreakpointOnFunctionCallResult> result(new SetBreakpointOnFunctionCallResult());
  errors->Push();
  errors->SetName("SetBreakpointOnFunctionCallResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* breakpoint_id_value = dict.Find("breakpointId");
  if (breakpoint_id_value) {
    errors->SetName("breakpointId");
    result->breakpoint_id_ = internal::FromValue<std::string>::Parse(*breakpoint_id_value, errors);
  } else {
    errors->AddError("required property missing: breakpointId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetBreakpointOnFunctionCallResult::Serialize() const {
  base::Value::Dict result;
  result.Set("breakpointId", internal::ToValue(breakpoint_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetBreakpointOnFunctionCallResult> SetBreakpointOnFunctionCallResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetBreakpointOnFunctionCallResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetBreakpointsActiveParams> SetBreakpointsActiveParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetBreakpointsActiveParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetBreakpointsActiveParams> result(new SetBreakpointsActiveParams());
  errors->Push();
  errors->SetName("SetBreakpointsActiveParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* active_value = dict.Find("active");
  if (active_value) {
    errors->SetName("active");
    result->active_ = internal::FromValue<bool>::Parse(*active_value, errors);
  } else {
    errors->AddError("required property missing: active");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetBreakpointsActiveParams::Serialize() const {
  base::Value::Dict result;
  result.Set("active", internal::ToValue(active_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetBreakpointsActiveParams> SetBreakpointsActiveParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetBreakpointsActiveParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetBreakpointsActiveResult> SetBreakpointsActiveResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetBreakpointsActiveResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetBreakpointsActiveResult> result(new SetBreakpointsActiveResult());
  errors->Push();
  errors->SetName("SetBreakpointsActiveResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetBreakpointsActiveResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetBreakpointsActiveResult> SetBreakpointsActiveResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetBreakpointsActiveResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetPauseOnExceptionsParams> SetPauseOnExceptionsParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetPauseOnExceptionsParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetPauseOnExceptionsParams> result(new SetPauseOnExceptionsParams());
  errors->Push();
  errors->SetName("SetPauseOnExceptionsParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* state_value = dict.Find("state");
  if (state_value) {
    errors->SetName("state");
    result->state_ = internal::FromValue<::headless::debugger::SetPauseOnExceptionsState>::Parse(*state_value, errors);
  } else {
    errors->AddError("required property missing: state");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetPauseOnExceptionsParams::Serialize() const {
  base::Value::Dict result;
  result.Set("state", internal::ToValue(state_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetPauseOnExceptionsParams> SetPauseOnExceptionsParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetPauseOnExceptionsParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetPauseOnExceptionsResult> SetPauseOnExceptionsResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetPauseOnExceptionsResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetPauseOnExceptionsResult> result(new SetPauseOnExceptionsResult());
  errors->Push();
  errors->SetName("SetPauseOnExceptionsResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetPauseOnExceptionsResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetPauseOnExceptionsResult> SetPauseOnExceptionsResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetPauseOnExceptionsResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetReturnValueParams> SetReturnValueParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetReturnValueParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetReturnValueParams> result(new SetReturnValueParams());
  errors->Push();
  errors->SetName("SetReturnValueParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* new_value_value = dict.Find("newValue");
  if (new_value_value) {
    errors->SetName("newValue");
    result->new_value_ = internal::FromValue<::headless::runtime::CallArgument>::Parse(*new_value_value, errors);
  } else {
    errors->AddError("required property missing: newValue");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetReturnValueParams::Serialize() const {
  base::Value::Dict result;
  result.Set("newValue", internal::ToValue(*new_value_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetReturnValueParams> SetReturnValueParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetReturnValueParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetReturnValueResult> SetReturnValueResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetReturnValueResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetReturnValueResult> result(new SetReturnValueResult());
  errors->Push();
  errors->SetName("SetReturnValueResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetReturnValueResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetReturnValueResult> SetReturnValueResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetReturnValueResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetScriptSourceParams> SetScriptSourceParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetScriptSourceParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetScriptSourceParams> result(new SetScriptSourceParams());
  errors->Push();
  errors->SetName("SetScriptSourceParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* script_id_value = dict.Find("scriptId");
  if (script_id_value) {
    errors->SetName("scriptId");
    result->script_id_ = internal::FromValue<std::string>::Parse(*script_id_value, errors);
  } else {
    errors->AddError("required property missing: scriptId");
  }
  const base::Value* script_source_value = dict.Find("scriptSource");
  if (script_source_value) {
    errors->SetName("scriptSource");
    result->script_source_ = internal::FromValue<std::string>::Parse(*script_source_value, errors);
  } else {
    errors->AddError("required property missing: scriptSource");
  }
  const base::Value* dry_run_value = dict.Find("dryRun");
  if (dry_run_value) {
    errors->SetName("dryRun");
    result->dry_run_ = internal::FromValue<bool>::Parse(*dry_run_value, errors);
  }
  const base::Value* allow_top_frame_editing_value = dict.Find("allowTopFrameEditing");
  if (allow_top_frame_editing_value) {
    errors->SetName("allowTopFrameEditing");
    result->allow_top_frame_editing_ = internal::FromValue<bool>::Parse(*allow_top_frame_editing_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetScriptSourceParams::Serialize() const {
  base::Value::Dict result;
  result.Set("scriptId", internal::ToValue(script_id_));
  result.Set("scriptSource", internal::ToValue(script_source_));
  if (dry_run_)
    result.Set("dryRun", internal::ToValue(dry_run_.value()));
  if (allow_top_frame_editing_)
    result.Set("allowTopFrameEditing", internal::ToValue(allow_top_frame_editing_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetScriptSourceParams> SetScriptSourceParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetScriptSourceParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetScriptSourceResult> SetScriptSourceResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetScriptSourceResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetScriptSourceResult> result(new SetScriptSourceResult());
  errors->Push();
  errors->SetName("SetScriptSourceResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* call_frames_value = dict.Find("callFrames");
  if (call_frames_value) {
    errors->SetName("callFrames");
    result->call_frames_ = internal::FromValue<std::vector<std::unique_ptr<::headless::debugger::CallFrame>>>::Parse(*call_frames_value, errors);
  }
  const base::Value* stack_changed_value = dict.Find("stackChanged");
  if (stack_changed_value) {
    errors->SetName("stackChanged");
    result->stack_changed_ = internal::FromValue<bool>::Parse(*stack_changed_value, errors);
  }
  const base::Value* async_stack_trace_value = dict.Find("asyncStackTrace");
  if (async_stack_trace_value) {
    errors->SetName("asyncStackTrace");
    result->async_stack_trace_ = internal::FromValue<::headless::runtime::StackTrace>::Parse(*async_stack_trace_value, errors);
  }
  const base::Value* async_stack_trace_id_value = dict.Find("asyncStackTraceId");
  if (async_stack_trace_id_value) {
    errors->SetName("asyncStackTraceId");
    result->async_stack_trace_id_ = internal::FromValue<::headless::runtime::StackTraceId>::Parse(*async_stack_trace_id_value, errors);
  }
  const base::Value* status_value = dict.Find("status");
  if (status_value) {
    errors->SetName("status");
    result->status_ = internal::FromValue<::headless::debugger::SetScriptSourceStatus>::Parse(*status_value, errors);
  } else {
    errors->AddError("required property missing: status");
  }
  const base::Value* exception_details_value = dict.Find("exceptionDetails");
  if (exception_details_value) {
    errors->SetName("exceptionDetails");
    result->exception_details_ = internal::FromValue<::headless::runtime::ExceptionDetails>::Parse(*exception_details_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetScriptSourceResult::Serialize() const {
  base::Value::Dict result;
  if (call_frames_)
    result.Set("callFrames", internal::ToValue(call_frames_.value()));
  if (stack_changed_)
    result.Set("stackChanged", internal::ToValue(stack_changed_.value()));
  if (async_stack_trace_)
    result.Set("asyncStackTrace", internal::ToValue(*async_stack_trace_.value()));
  if (async_stack_trace_id_)
    result.Set("asyncStackTraceId", internal::ToValue(*async_stack_trace_id_.value()));
  result.Set("status", internal::ToValue(status_));
  if (exception_details_)
    result.Set("exceptionDetails", internal::ToValue(*exception_details_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetScriptSourceResult> SetScriptSourceResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetScriptSourceResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetSkipAllPausesParams> SetSkipAllPausesParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetSkipAllPausesParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetSkipAllPausesParams> result(new SetSkipAllPausesParams());
  errors->Push();
  errors->SetName("SetSkipAllPausesParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* skip_value = dict.Find("skip");
  if (skip_value) {
    errors->SetName("skip");
    result->skip_ = internal::FromValue<bool>::Parse(*skip_value, errors);
  } else {
    errors->AddError("required property missing: skip");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetSkipAllPausesParams::Serialize() const {
  base::Value::Dict result;
  result.Set("skip", internal::ToValue(skip_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetSkipAllPausesParams> SetSkipAllPausesParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetSkipAllPausesParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetSkipAllPausesResult> SetSkipAllPausesResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetSkipAllPausesResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetSkipAllPausesResult> result(new SetSkipAllPausesResult());
  errors->Push();
  errors->SetName("SetSkipAllPausesResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetSkipAllPausesResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetSkipAllPausesResult> SetSkipAllPausesResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetSkipAllPausesResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetVariableValueParams> SetVariableValueParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetVariableValueParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetVariableValueParams> result(new SetVariableValueParams());
  errors->Push();
  errors->SetName("SetVariableValueParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* scope_number_value = dict.Find("scopeNumber");
  if (scope_number_value) {
    errors->SetName("scopeNumber");
    result->scope_number_ = internal::FromValue<int>::Parse(*scope_number_value, errors);
  } else {
    errors->AddError("required property missing: scopeNumber");
  }
  const base::Value* variable_name_value = dict.Find("variableName");
  if (variable_name_value) {
    errors->SetName("variableName");
    result->variable_name_ = internal::FromValue<std::string>::Parse(*variable_name_value, errors);
  } else {
    errors->AddError("required property missing: variableName");
  }
  const base::Value* new_value_value = dict.Find("newValue");
  if (new_value_value) {
    errors->SetName("newValue");
    result->new_value_ = internal::FromValue<::headless::runtime::CallArgument>::Parse(*new_value_value, errors);
  } else {
    errors->AddError("required property missing: newValue");
  }
  const base::Value* call_frame_id_value = dict.Find("callFrameId");
  if (call_frame_id_value) {
    errors->SetName("callFrameId");
    result->call_frame_id_ = internal::FromValue<std::string>::Parse(*call_frame_id_value, errors);
  } else {
    errors->AddError("required property missing: callFrameId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetVariableValueParams::Serialize() const {
  base::Value::Dict result;
  result.Set("scopeNumber", internal::ToValue(scope_number_));
  result.Set("variableName", internal::ToValue(variable_name_));
  result.Set("newValue", internal::ToValue(*new_value_));
  result.Set("callFrameId", internal::ToValue(call_frame_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetVariableValueParams> SetVariableValueParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetVariableValueParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetVariableValueResult> SetVariableValueResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetVariableValueResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetVariableValueResult> result(new SetVariableValueResult());
  errors->Push();
  errors->SetName("SetVariableValueResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetVariableValueResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetVariableValueResult> SetVariableValueResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetVariableValueResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StepIntoParams> StepIntoParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StepIntoParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StepIntoParams> result(new StepIntoParams());
  errors->Push();
  errors->SetName("StepIntoParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* break_on_async_call_value = dict.Find("breakOnAsyncCall");
  if (break_on_async_call_value) {
    errors->SetName("breakOnAsyncCall");
    result->break_on_async_call_ = internal::FromValue<bool>::Parse(*break_on_async_call_value, errors);
  }
  const base::Value* skip_list_value = dict.Find("skipList");
  if (skip_list_value) {
    errors->SetName("skipList");
    result->skip_list_ = internal::FromValue<std::vector<std::unique_ptr<::headless::debugger::LocationRange>>>::Parse(*skip_list_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StepIntoParams::Serialize() const {
  base::Value::Dict result;
  if (break_on_async_call_)
    result.Set("breakOnAsyncCall", internal::ToValue(break_on_async_call_.value()));
  if (skip_list_)
    result.Set("skipList", internal::ToValue(skip_list_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<StepIntoParams> StepIntoParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StepIntoParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StepIntoResult> StepIntoResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StepIntoResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StepIntoResult> result(new StepIntoResult());
  errors->Push();
  errors->SetName("StepIntoResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StepIntoResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<StepIntoResult> StepIntoResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StepIntoResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StepOutParams> StepOutParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StepOutParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StepOutParams> result(new StepOutParams());
  errors->Push();
  errors->SetName("StepOutParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StepOutParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<StepOutParams> StepOutParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StepOutParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StepOutResult> StepOutResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StepOutResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StepOutResult> result(new StepOutResult());
  errors->Push();
  errors->SetName("StepOutResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StepOutResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<StepOutResult> StepOutResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StepOutResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StepOverParams> StepOverParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StepOverParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StepOverParams> result(new StepOverParams());
  errors->Push();
  errors->SetName("StepOverParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* skip_list_value = dict.Find("skipList");
  if (skip_list_value) {
    errors->SetName("skipList");
    result->skip_list_ = internal::FromValue<std::vector<std::unique_ptr<::headless::debugger::LocationRange>>>::Parse(*skip_list_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StepOverParams::Serialize() const {
  base::Value::Dict result;
  if (skip_list_)
    result.Set("skipList", internal::ToValue(skip_list_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<StepOverParams> StepOverParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StepOverParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StepOverResult> StepOverResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StepOverResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StepOverResult> result(new StepOverResult());
  errors->Push();
  errors->SetName("StepOverResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StepOverResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<StepOverResult> StepOverResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StepOverResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<BreakpointResolvedParams> BreakpointResolvedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("BreakpointResolvedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<BreakpointResolvedParams> result(new BreakpointResolvedParams());
  errors->Push();
  errors->SetName("BreakpointResolvedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* breakpoint_id_value = dict.Find("breakpointId");
  if (breakpoint_id_value) {
    errors->SetName("breakpointId");
    result->breakpoint_id_ = internal::FromValue<std::string>::Parse(*breakpoint_id_value, errors);
  } else {
    errors->AddError("required property missing: breakpointId");
  }
  const base::Value* location_value = dict.Find("location");
  if (location_value) {
    errors->SetName("location");
    result->location_ = internal::FromValue<::headless::debugger::Location>::Parse(*location_value, errors);
  } else {
    errors->AddError("required property missing: location");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value BreakpointResolvedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("breakpointId", internal::ToValue(breakpoint_id_));
  result.Set("location", internal::ToValue(*location_));
  return base::Value(std::move(result));
}

std::unique_ptr<BreakpointResolvedParams> BreakpointResolvedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<BreakpointResolvedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PausedParams> PausedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PausedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PausedParams> result(new PausedParams());
  errors->Push();
  errors->SetName("PausedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* call_frames_value = dict.Find("callFrames");
  if (call_frames_value) {
    errors->SetName("callFrames");
    result->call_frames_ = internal::FromValue<std::vector<std::unique_ptr<::headless::debugger::CallFrame>>>::Parse(*call_frames_value, errors);
  } else {
    errors->AddError("required property missing: callFrames");
  }
  const base::Value* reason_value = dict.Find("reason");
  if (reason_value) {
    errors->SetName("reason");
    result->reason_ = internal::FromValue<::headless::debugger::PausedReason>::Parse(*reason_value, errors);
  } else {
    errors->AddError("required property missing: reason");
  }
  const base::Value* data_value = dict.Find("data");
  if (data_value) {
    errors->SetName("data");
    result->data_ = internal::FromValue<base::Value>::Parse(*data_value, errors);
  }
  const base::Value* hit_breakpoints_value = dict.Find("hitBreakpoints");
  if (hit_breakpoints_value) {
    errors->SetName("hitBreakpoints");
    result->hit_breakpoints_ = internal::FromValue<std::vector<std::string>>::Parse(*hit_breakpoints_value, errors);
  }
  const base::Value* async_stack_trace_value = dict.Find("asyncStackTrace");
  if (async_stack_trace_value) {
    errors->SetName("asyncStackTrace");
    result->async_stack_trace_ = internal::FromValue<::headless::runtime::StackTrace>::Parse(*async_stack_trace_value, errors);
  }
  const base::Value* async_stack_trace_id_value = dict.Find("asyncStackTraceId");
  if (async_stack_trace_id_value) {
    errors->SetName("asyncStackTraceId");
    result->async_stack_trace_id_ = internal::FromValue<::headless::runtime::StackTraceId>::Parse(*async_stack_trace_id_value, errors);
  }
  const base::Value* async_call_stack_trace_id_value = dict.Find("asyncCallStackTraceId");
  if (async_call_stack_trace_id_value) {
    errors->SetName("asyncCallStackTraceId");
    result->async_call_stack_trace_id_ = internal::FromValue<::headless::runtime::StackTraceId>::Parse(*async_call_stack_trace_id_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PausedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("callFrames", internal::ToValue(call_frames_));
  result.Set("reason", internal::ToValue(reason_));
  if (data_)
    result.Set("data", internal::ToValue(*data_.value()));
  if (hit_breakpoints_)
    result.Set("hitBreakpoints", internal::ToValue(hit_breakpoints_.value()));
  if (async_stack_trace_)
    result.Set("asyncStackTrace", internal::ToValue(*async_stack_trace_.value()));
  if (async_stack_trace_id_)
    result.Set("asyncStackTraceId", internal::ToValue(*async_stack_trace_id_.value()));
  if (async_call_stack_trace_id_)
    result.Set("asyncCallStackTraceId", internal::ToValue(*async_call_stack_trace_id_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<PausedParams> PausedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PausedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ResumedParams> ResumedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ResumedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ResumedParams> result(new ResumedParams());
  errors->Push();
  errors->SetName("ResumedParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ResumedParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ResumedParams> ResumedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ResumedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ScriptFailedToParseParams> ScriptFailedToParseParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ScriptFailedToParseParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ScriptFailedToParseParams> result(new ScriptFailedToParseParams());
  errors->Push();
  errors->SetName("ScriptFailedToParseParams");
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
  const base::Value* start_line_value = dict.Find("startLine");
  if (start_line_value) {
    errors->SetName("startLine");
    result->start_line_ = internal::FromValue<int>::Parse(*start_line_value, errors);
  } else {
    errors->AddError("required property missing: startLine");
  }
  const base::Value* start_column_value = dict.Find("startColumn");
  if (start_column_value) {
    errors->SetName("startColumn");
    result->start_column_ = internal::FromValue<int>::Parse(*start_column_value, errors);
  } else {
    errors->AddError("required property missing: startColumn");
  }
  const base::Value* end_line_value = dict.Find("endLine");
  if (end_line_value) {
    errors->SetName("endLine");
    result->end_line_ = internal::FromValue<int>::Parse(*end_line_value, errors);
  } else {
    errors->AddError("required property missing: endLine");
  }
  const base::Value* end_column_value = dict.Find("endColumn");
  if (end_column_value) {
    errors->SetName("endColumn");
    result->end_column_ = internal::FromValue<int>::Parse(*end_column_value, errors);
  } else {
    errors->AddError("required property missing: endColumn");
  }
  const base::Value* execution_context_id_value = dict.Find("executionContextId");
  if (execution_context_id_value) {
    errors->SetName("executionContextId");
    result->execution_context_id_ = internal::FromValue<int>::Parse(*execution_context_id_value, errors);
  } else {
    errors->AddError("required property missing: executionContextId");
  }
  const base::Value* hash_value = dict.Find("hash");
  if (hash_value) {
    errors->SetName("hash");
    result->hash_ = internal::FromValue<std::string>::Parse(*hash_value, errors);
  } else {
    errors->AddError("required property missing: hash");
  }
  const base::Value* execution_context_aux_data_value = dict.Find("executionContextAuxData");
  if (execution_context_aux_data_value) {
    errors->SetName("executionContextAuxData");
    result->execution_context_aux_data_ = internal::FromValue<base::Value>::Parse(*execution_context_aux_data_value, errors);
  }
  const base::Value* source_mapurl_value = dict.Find("sourceMapURL");
  if (source_mapurl_value) {
    errors->SetName("sourceMapURL");
    result->source_mapurl_ = internal::FromValue<std::string>::Parse(*source_mapurl_value, errors);
  }
  const base::Value* has_sourceurl_value = dict.Find("hasSourceURL");
  if (has_sourceurl_value) {
    errors->SetName("hasSourceURL");
    result->has_sourceurl_ = internal::FromValue<bool>::Parse(*has_sourceurl_value, errors);
  }
  const base::Value* is_module_value = dict.Find("isModule");
  if (is_module_value) {
    errors->SetName("isModule");
    result->is_module_ = internal::FromValue<bool>::Parse(*is_module_value, errors);
  }
  const base::Value* length_value = dict.Find("length");
  if (length_value) {
    errors->SetName("length");
    result->length_ = internal::FromValue<int>::Parse(*length_value, errors);
  }
  const base::Value* stack_trace_value = dict.Find("stackTrace");
  if (stack_trace_value) {
    errors->SetName("stackTrace");
    result->stack_trace_ = internal::FromValue<::headless::runtime::StackTrace>::Parse(*stack_trace_value, errors);
  }
  const base::Value* code_offset_value = dict.Find("codeOffset");
  if (code_offset_value) {
    errors->SetName("codeOffset");
    result->code_offset_ = internal::FromValue<int>::Parse(*code_offset_value, errors);
  }
  const base::Value* script_language_value = dict.Find("scriptLanguage");
  if (script_language_value) {
    errors->SetName("scriptLanguage");
    result->script_language_ = internal::FromValue<::headless::debugger::ScriptLanguage>::Parse(*script_language_value, errors);
  }
  const base::Value* embedder_name_value = dict.Find("embedderName");
  if (embedder_name_value) {
    errors->SetName("embedderName");
    result->embedder_name_ = internal::FromValue<std::string>::Parse(*embedder_name_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ScriptFailedToParseParams::Serialize() const {
  base::Value::Dict result;
  result.Set("scriptId", internal::ToValue(script_id_));
  result.Set("url", internal::ToValue(url_));
  result.Set("startLine", internal::ToValue(start_line_));
  result.Set("startColumn", internal::ToValue(start_column_));
  result.Set("endLine", internal::ToValue(end_line_));
  result.Set("endColumn", internal::ToValue(end_column_));
  result.Set("executionContextId", internal::ToValue(execution_context_id_));
  result.Set("hash", internal::ToValue(hash_));
  if (execution_context_aux_data_)
    result.Set("executionContextAuxData", internal::ToValue(*execution_context_aux_data_.value()));
  if (source_mapurl_)
    result.Set("sourceMapURL", internal::ToValue(source_mapurl_.value()));
  if (has_sourceurl_)
    result.Set("hasSourceURL", internal::ToValue(has_sourceurl_.value()));
  if (is_module_)
    result.Set("isModule", internal::ToValue(is_module_.value()));
  if (length_)
    result.Set("length", internal::ToValue(length_.value()));
  if (stack_trace_)
    result.Set("stackTrace", internal::ToValue(*stack_trace_.value()));
  if (code_offset_)
    result.Set("codeOffset", internal::ToValue(code_offset_.value()));
  if (script_language_)
    result.Set("scriptLanguage", internal::ToValue(script_language_.value()));
  if (embedder_name_)
    result.Set("embedderName", internal::ToValue(embedder_name_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<ScriptFailedToParseParams> ScriptFailedToParseParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ScriptFailedToParseParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ScriptParsedParams> ScriptParsedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ScriptParsedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ScriptParsedParams> result(new ScriptParsedParams());
  errors->Push();
  errors->SetName("ScriptParsedParams");
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
  const base::Value* start_line_value = dict.Find("startLine");
  if (start_line_value) {
    errors->SetName("startLine");
    result->start_line_ = internal::FromValue<int>::Parse(*start_line_value, errors);
  } else {
    errors->AddError("required property missing: startLine");
  }
  const base::Value* start_column_value = dict.Find("startColumn");
  if (start_column_value) {
    errors->SetName("startColumn");
    result->start_column_ = internal::FromValue<int>::Parse(*start_column_value, errors);
  } else {
    errors->AddError("required property missing: startColumn");
  }
  const base::Value* end_line_value = dict.Find("endLine");
  if (end_line_value) {
    errors->SetName("endLine");
    result->end_line_ = internal::FromValue<int>::Parse(*end_line_value, errors);
  } else {
    errors->AddError("required property missing: endLine");
  }
  const base::Value* end_column_value = dict.Find("endColumn");
  if (end_column_value) {
    errors->SetName("endColumn");
    result->end_column_ = internal::FromValue<int>::Parse(*end_column_value, errors);
  } else {
    errors->AddError("required property missing: endColumn");
  }
  const base::Value* execution_context_id_value = dict.Find("executionContextId");
  if (execution_context_id_value) {
    errors->SetName("executionContextId");
    result->execution_context_id_ = internal::FromValue<int>::Parse(*execution_context_id_value, errors);
  } else {
    errors->AddError("required property missing: executionContextId");
  }
  const base::Value* hash_value = dict.Find("hash");
  if (hash_value) {
    errors->SetName("hash");
    result->hash_ = internal::FromValue<std::string>::Parse(*hash_value, errors);
  } else {
    errors->AddError("required property missing: hash");
  }
  const base::Value* execution_context_aux_data_value = dict.Find("executionContextAuxData");
  if (execution_context_aux_data_value) {
    errors->SetName("executionContextAuxData");
    result->execution_context_aux_data_ = internal::FromValue<base::Value>::Parse(*execution_context_aux_data_value, errors);
  }
  const base::Value* is_live_edit_value = dict.Find("isLiveEdit");
  if (is_live_edit_value) {
    errors->SetName("isLiveEdit");
    result->is_live_edit_ = internal::FromValue<bool>::Parse(*is_live_edit_value, errors);
  }
  const base::Value* source_mapurl_value = dict.Find("sourceMapURL");
  if (source_mapurl_value) {
    errors->SetName("sourceMapURL");
    result->source_mapurl_ = internal::FromValue<std::string>::Parse(*source_mapurl_value, errors);
  }
  const base::Value* has_sourceurl_value = dict.Find("hasSourceURL");
  if (has_sourceurl_value) {
    errors->SetName("hasSourceURL");
    result->has_sourceurl_ = internal::FromValue<bool>::Parse(*has_sourceurl_value, errors);
  }
  const base::Value* is_module_value = dict.Find("isModule");
  if (is_module_value) {
    errors->SetName("isModule");
    result->is_module_ = internal::FromValue<bool>::Parse(*is_module_value, errors);
  }
  const base::Value* length_value = dict.Find("length");
  if (length_value) {
    errors->SetName("length");
    result->length_ = internal::FromValue<int>::Parse(*length_value, errors);
  }
  const base::Value* stack_trace_value = dict.Find("stackTrace");
  if (stack_trace_value) {
    errors->SetName("stackTrace");
    result->stack_trace_ = internal::FromValue<::headless::runtime::StackTrace>::Parse(*stack_trace_value, errors);
  }
  const base::Value* code_offset_value = dict.Find("codeOffset");
  if (code_offset_value) {
    errors->SetName("codeOffset");
    result->code_offset_ = internal::FromValue<int>::Parse(*code_offset_value, errors);
  }
  const base::Value* script_language_value = dict.Find("scriptLanguage");
  if (script_language_value) {
    errors->SetName("scriptLanguage");
    result->script_language_ = internal::FromValue<::headless::debugger::ScriptLanguage>::Parse(*script_language_value, errors);
  }
  const base::Value* debug_symbols_value = dict.Find("debugSymbols");
  if (debug_symbols_value) {
    errors->SetName("debugSymbols");
    result->debug_symbols_ = internal::FromValue<::headless::debugger::DebugSymbols>::Parse(*debug_symbols_value, errors);
  }
  const base::Value* embedder_name_value = dict.Find("embedderName");
  if (embedder_name_value) {
    errors->SetName("embedderName");
    result->embedder_name_ = internal::FromValue<std::string>::Parse(*embedder_name_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ScriptParsedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("scriptId", internal::ToValue(script_id_));
  result.Set("url", internal::ToValue(url_));
  result.Set("startLine", internal::ToValue(start_line_));
  result.Set("startColumn", internal::ToValue(start_column_));
  result.Set("endLine", internal::ToValue(end_line_));
  result.Set("endColumn", internal::ToValue(end_column_));
  result.Set("executionContextId", internal::ToValue(execution_context_id_));
  result.Set("hash", internal::ToValue(hash_));
  if (execution_context_aux_data_)
    result.Set("executionContextAuxData", internal::ToValue(*execution_context_aux_data_.value()));
  if (is_live_edit_)
    result.Set("isLiveEdit", internal::ToValue(is_live_edit_.value()));
  if (source_mapurl_)
    result.Set("sourceMapURL", internal::ToValue(source_mapurl_.value()));
  if (has_sourceurl_)
    result.Set("hasSourceURL", internal::ToValue(has_sourceurl_.value()));
  if (is_module_)
    result.Set("isModule", internal::ToValue(is_module_.value()));
  if (length_)
    result.Set("length", internal::ToValue(length_.value()));
  if (stack_trace_)
    result.Set("stackTrace", internal::ToValue(*stack_trace_.value()));
  if (code_offset_)
    result.Set("codeOffset", internal::ToValue(code_offset_.value()));
  if (script_language_)
    result.Set("scriptLanguage", internal::ToValue(script_language_.value()));
  if (debug_symbols_)
    result.Set("debugSymbols", internal::ToValue(*debug_symbols_.value()));
  if (embedder_name_)
    result.Set("embedderName", internal::ToValue(embedder_name_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<ScriptParsedParams> ScriptParsedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ScriptParsedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


}  // namespace debugger
}  // namespace headless
