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
#include "headless/public/devtools/domains/types_preload.h"
#include "headless/public/devtools/domains/types_runtime.h"
#include "headless/public/devtools/domains/types_security.h"

#include "base/values.h"
#include "headless/public/devtools/internal/type_conversions_dom.h"
#include "headless/public/devtools/internal/type_conversions_debugger.h"
#include "headless/public/devtools/internal/type_conversions_emulation.h"
#include "headless/public/devtools/internal/type_conversions_io.h"
#include "headless/public/devtools/internal/type_conversions_network.h"
#include "headless/public/devtools/internal/type_conversions_page.h"
#include "headless/public/devtools/internal/type_conversions_preload.h"
#include "headless/public/devtools/internal/type_conversions_runtime.h"
#include "headless/public/devtools/internal/type_conversions_security.h"

namespace headless {

namespace preload {

std::unique_ptr<RuleSet> RuleSet::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("RuleSet");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<RuleSet> result(new RuleSet());
  errors->Push();
  errors->SetName("RuleSet");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* id_value = dict.Find("id");
  if (id_value) {
    errors->SetName("id");
    result->id_ = internal::FromValue<std::string>::Parse(*id_value, errors);
  } else {
    errors->AddError("required property missing: id");
  }
  const base::Value* loader_id_value = dict.Find("loaderId");
  if (loader_id_value) {
    errors->SetName("loaderId");
    result->loader_id_ = internal::FromValue<std::string>::Parse(*loader_id_value, errors);
  } else {
    errors->AddError("required property missing: loaderId");
  }
  const base::Value* source_text_value = dict.Find("sourceText");
  if (source_text_value) {
    errors->SetName("sourceText");
    result->source_text_ = internal::FromValue<std::string>::Parse(*source_text_value, errors);
  } else {
    errors->AddError("required property missing: sourceText");
  }
  const base::Value* backend_node_id_value = dict.Find("backendNodeId");
  if (backend_node_id_value) {
    errors->SetName("backendNodeId");
    result->backend_node_id_ = internal::FromValue<int>::Parse(*backend_node_id_value, errors);
  }
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  }
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  }
  const base::Value* error_type_value = dict.Find("errorType");
  if (error_type_value) {
    errors->SetName("errorType");
    result->error_type_ = internal::FromValue<::headless::preload::RuleSetErrorType>::Parse(*error_type_value, errors);
  }
  const base::Value* error_message_value = dict.Find("errorMessage");
  if (error_message_value) {
    errors->SetName("errorMessage");
    result->error_message_ = internal::FromValue<std::string>::Parse(*error_message_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value RuleSet::Serialize() const {
  base::Value::Dict result;
  result.Set("id", internal::ToValue(id_));
  result.Set("loaderId", internal::ToValue(loader_id_));
  result.Set("sourceText", internal::ToValue(source_text_));
  if (backend_node_id_)
    result.Set("backendNodeId", internal::ToValue(backend_node_id_.value()));
  if (url_)
    result.Set("url", internal::ToValue(url_.value()));
  if (request_id_)
    result.Set("requestId", internal::ToValue(request_id_.value()));
  if (error_type_)
    result.Set("errorType", internal::ToValue(error_type_.value()));
  if (error_message_)
    result.Set("errorMessage", internal::ToValue(error_message_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<RuleSet> RuleSet::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<RuleSet> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PreloadingAttemptKey> PreloadingAttemptKey::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PreloadingAttemptKey");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PreloadingAttemptKey> result(new PreloadingAttemptKey());
  errors->Push();
  errors->SetName("PreloadingAttemptKey");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* loader_id_value = dict.Find("loaderId");
  if (loader_id_value) {
    errors->SetName("loaderId");
    result->loader_id_ = internal::FromValue<std::string>::Parse(*loader_id_value, errors);
  } else {
    errors->AddError("required property missing: loaderId");
  }
  const base::Value* action_value = dict.Find("action");
  if (action_value) {
    errors->SetName("action");
    result->action_ = internal::FromValue<::headless::preload::SpeculationAction>::Parse(*action_value, errors);
  } else {
    errors->AddError("required property missing: action");
  }
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  const base::Value* target_hint_value = dict.Find("targetHint");
  if (target_hint_value) {
    errors->SetName("targetHint");
    result->target_hint_ = internal::FromValue<::headless::preload::SpeculationTargetHint>::Parse(*target_hint_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PreloadingAttemptKey::Serialize() const {
  base::Value::Dict result;
  result.Set("loaderId", internal::ToValue(loader_id_));
  result.Set("action", internal::ToValue(action_));
  result.Set("url", internal::ToValue(url_));
  if (target_hint_)
    result.Set("targetHint", internal::ToValue(target_hint_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<PreloadingAttemptKey> PreloadingAttemptKey::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PreloadingAttemptKey> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PreloadingAttemptSource> PreloadingAttemptSource::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PreloadingAttemptSource");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PreloadingAttemptSource> result(new PreloadingAttemptSource());
  errors->Push();
  errors->SetName("PreloadingAttemptSource");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* key_value = dict.Find("key");
  if (key_value) {
    errors->SetName("key");
    result->key_ = internal::FromValue<::headless::preload::PreloadingAttemptKey>::Parse(*key_value, errors);
  } else {
    errors->AddError("required property missing: key");
  }
  const base::Value* rule_set_ids_value = dict.Find("ruleSetIds");
  if (rule_set_ids_value) {
    errors->SetName("ruleSetIds");
    result->rule_set_ids_ = internal::FromValue<std::vector<std::string>>::Parse(*rule_set_ids_value, errors);
  } else {
    errors->AddError("required property missing: ruleSetIds");
  }
  const base::Value* node_ids_value = dict.Find("nodeIds");
  if (node_ids_value) {
    errors->SetName("nodeIds");
    result->node_ids_ = internal::FromValue<std::vector<int>>::Parse(*node_ids_value, errors);
  } else {
    errors->AddError("required property missing: nodeIds");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PreloadingAttemptSource::Serialize() const {
  base::Value::Dict result;
  result.Set("key", internal::ToValue(*key_));
  result.Set("ruleSetIds", internal::ToValue(rule_set_ids_));
  result.Set("nodeIds", internal::ToValue(node_ids_));
  return base::Value(std::move(result));
}

std::unique_ptr<PreloadingAttemptSource> PreloadingAttemptSource::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PreloadingAttemptSource> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PrerenderMismatchedHeaders> PrerenderMismatchedHeaders::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PrerenderMismatchedHeaders");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PrerenderMismatchedHeaders> result(new PrerenderMismatchedHeaders());
  errors->Push();
  errors->SetName("PrerenderMismatchedHeaders");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* header_name_value = dict.Find("headerName");
  if (header_name_value) {
    errors->SetName("headerName");
    result->header_name_ = internal::FromValue<std::string>::Parse(*header_name_value, errors);
  } else {
    errors->AddError("required property missing: headerName");
  }
  const base::Value* initial_value_value = dict.Find("initialValue");
  if (initial_value_value) {
    errors->SetName("initialValue");
    result->initial_value_ = internal::FromValue<std::string>::Parse(*initial_value_value, errors);
  }
  const base::Value* activation_value_value = dict.Find("activationValue");
  if (activation_value_value) {
    errors->SetName("activationValue");
    result->activation_value_ = internal::FromValue<std::string>::Parse(*activation_value_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PrerenderMismatchedHeaders::Serialize() const {
  base::Value::Dict result;
  result.Set("headerName", internal::ToValue(header_name_));
  if (initial_value_)
    result.Set("initialValue", internal::ToValue(initial_value_.value()));
  if (activation_value_)
    result.Set("activationValue", internal::ToValue(activation_value_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<PrerenderMismatchedHeaders> PrerenderMismatchedHeaders::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PrerenderMismatchedHeaders> result = Parse(Serialize(), &errors);
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


std::unique_ptr<RuleSetUpdatedParams> RuleSetUpdatedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("RuleSetUpdatedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<RuleSetUpdatedParams> result(new RuleSetUpdatedParams());
  errors->Push();
  errors->SetName("RuleSetUpdatedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* rule_set_value = dict.Find("ruleSet");
  if (rule_set_value) {
    errors->SetName("ruleSet");
    result->rule_set_ = internal::FromValue<::headless::preload::RuleSet>::Parse(*rule_set_value, errors);
  } else {
    errors->AddError("required property missing: ruleSet");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value RuleSetUpdatedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("ruleSet", internal::ToValue(*rule_set_));
  return base::Value(std::move(result));
}

std::unique_ptr<RuleSetUpdatedParams> RuleSetUpdatedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<RuleSetUpdatedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<RuleSetRemovedParams> RuleSetRemovedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("RuleSetRemovedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<RuleSetRemovedParams> result(new RuleSetRemovedParams());
  errors->Push();
  errors->SetName("RuleSetRemovedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* id_value = dict.Find("id");
  if (id_value) {
    errors->SetName("id");
    result->id_ = internal::FromValue<std::string>::Parse(*id_value, errors);
  } else {
    errors->AddError("required property missing: id");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value RuleSetRemovedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("id", internal::ToValue(id_));
  return base::Value(std::move(result));
}

std::unique_ptr<RuleSetRemovedParams> RuleSetRemovedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<RuleSetRemovedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PreloadEnabledStateUpdatedParams> PreloadEnabledStateUpdatedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PreloadEnabledStateUpdatedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PreloadEnabledStateUpdatedParams> result(new PreloadEnabledStateUpdatedParams());
  errors->Push();
  errors->SetName("PreloadEnabledStateUpdatedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* disabled_by_preference_value = dict.Find("disabledByPreference");
  if (disabled_by_preference_value) {
    errors->SetName("disabledByPreference");
    result->disabled_by_preference_ = internal::FromValue<bool>::Parse(*disabled_by_preference_value, errors);
  } else {
    errors->AddError("required property missing: disabledByPreference");
  }
  const base::Value* disabled_by_data_saver_value = dict.Find("disabledByDataSaver");
  if (disabled_by_data_saver_value) {
    errors->SetName("disabledByDataSaver");
    result->disabled_by_data_saver_ = internal::FromValue<bool>::Parse(*disabled_by_data_saver_value, errors);
  } else {
    errors->AddError("required property missing: disabledByDataSaver");
  }
  const base::Value* disabled_by_battery_saver_value = dict.Find("disabledByBatterySaver");
  if (disabled_by_battery_saver_value) {
    errors->SetName("disabledByBatterySaver");
    result->disabled_by_battery_saver_ = internal::FromValue<bool>::Parse(*disabled_by_battery_saver_value, errors);
  } else {
    errors->AddError("required property missing: disabledByBatterySaver");
  }
  const base::Value* disabled_by_holdback_prefetch_speculation_rules_value = dict.Find("disabledByHoldbackPrefetchSpeculationRules");
  if (disabled_by_holdback_prefetch_speculation_rules_value) {
    errors->SetName("disabledByHoldbackPrefetchSpeculationRules");
    result->disabled_by_holdback_prefetch_speculation_rules_ = internal::FromValue<bool>::Parse(*disabled_by_holdback_prefetch_speculation_rules_value, errors);
  } else {
    errors->AddError("required property missing: disabledByHoldbackPrefetchSpeculationRules");
  }
  const base::Value* disabled_by_holdback_prerender_speculation_rules_value = dict.Find("disabledByHoldbackPrerenderSpeculationRules");
  if (disabled_by_holdback_prerender_speculation_rules_value) {
    errors->SetName("disabledByHoldbackPrerenderSpeculationRules");
    result->disabled_by_holdback_prerender_speculation_rules_ = internal::FromValue<bool>::Parse(*disabled_by_holdback_prerender_speculation_rules_value, errors);
  } else {
    errors->AddError("required property missing: disabledByHoldbackPrerenderSpeculationRules");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PreloadEnabledStateUpdatedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("disabledByPreference", internal::ToValue(disabled_by_preference_));
  result.Set("disabledByDataSaver", internal::ToValue(disabled_by_data_saver_));
  result.Set("disabledByBatterySaver", internal::ToValue(disabled_by_battery_saver_));
  result.Set("disabledByHoldbackPrefetchSpeculationRules", internal::ToValue(disabled_by_holdback_prefetch_speculation_rules_));
  result.Set("disabledByHoldbackPrerenderSpeculationRules", internal::ToValue(disabled_by_holdback_prerender_speculation_rules_));
  return base::Value(std::move(result));
}

std::unique_ptr<PreloadEnabledStateUpdatedParams> PreloadEnabledStateUpdatedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PreloadEnabledStateUpdatedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PrefetchStatusUpdatedParams> PrefetchStatusUpdatedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PrefetchStatusUpdatedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PrefetchStatusUpdatedParams> result(new PrefetchStatusUpdatedParams());
  errors->Push();
  errors->SetName("PrefetchStatusUpdatedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* key_value = dict.Find("key");
  if (key_value) {
    errors->SetName("key");
    result->key_ = internal::FromValue<::headless::preload::PreloadingAttemptKey>::Parse(*key_value, errors);
  } else {
    errors->AddError("required property missing: key");
  }
  const base::Value* initiating_frame_id_value = dict.Find("initiatingFrameId");
  if (initiating_frame_id_value) {
    errors->SetName("initiatingFrameId");
    result->initiating_frame_id_ = internal::FromValue<std::string>::Parse(*initiating_frame_id_value, errors);
  } else {
    errors->AddError("required property missing: initiatingFrameId");
  }
  const base::Value* prefetch_url_value = dict.Find("prefetchUrl");
  if (prefetch_url_value) {
    errors->SetName("prefetchUrl");
    result->prefetch_url_ = internal::FromValue<std::string>::Parse(*prefetch_url_value, errors);
  } else {
    errors->AddError("required property missing: prefetchUrl");
  }
  const base::Value* status_value = dict.Find("status");
  if (status_value) {
    errors->SetName("status");
    result->status_ = internal::FromValue<::headless::preload::PreloadingStatus>::Parse(*status_value, errors);
  } else {
    errors->AddError("required property missing: status");
  }
  const base::Value* prefetch_status_value = dict.Find("prefetchStatus");
  if (prefetch_status_value) {
    errors->SetName("prefetchStatus");
    result->prefetch_status_ = internal::FromValue<::headless::preload::PrefetchStatus>::Parse(*prefetch_status_value, errors);
  } else {
    errors->AddError("required property missing: prefetchStatus");
  }
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PrefetchStatusUpdatedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("key", internal::ToValue(*key_));
  result.Set("initiatingFrameId", internal::ToValue(initiating_frame_id_));
  result.Set("prefetchUrl", internal::ToValue(prefetch_url_));
  result.Set("status", internal::ToValue(status_));
  result.Set("prefetchStatus", internal::ToValue(prefetch_status_));
  result.Set("requestId", internal::ToValue(request_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<PrefetchStatusUpdatedParams> PrefetchStatusUpdatedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PrefetchStatusUpdatedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PrerenderStatusUpdatedParams> PrerenderStatusUpdatedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PrerenderStatusUpdatedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PrerenderStatusUpdatedParams> result(new PrerenderStatusUpdatedParams());
  errors->Push();
  errors->SetName("PrerenderStatusUpdatedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* key_value = dict.Find("key");
  if (key_value) {
    errors->SetName("key");
    result->key_ = internal::FromValue<::headless::preload::PreloadingAttemptKey>::Parse(*key_value, errors);
  } else {
    errors->AddError("required property missing: key");
  }
  const base::Value* status_value = dict.Find("status");
  if (status_value) {
    errors->SetName("status");
    result->status_ = internal::FromValue<::headless::preload::PreloadingStatus>::Parse(*status_value, errors);
  } else {
    errors->AddError("required property missing: status");
  }
  const base::Value* prerender_status_value = dict.Find("prerenderStatus");
  if (prerender_status_value) {
    errors->SetName("prerenderStatus");
    result->prerender_status_ = internal::FromValue<::headless::preload::PrerenderFinalStatus>::Parse(*prerender_status_value, errors);
  }
  const base::Value* disallowed_mojo_interface_value = dict.Find("disallowedMojoInterface");
  if (disallowed_mojo_interface_value) {
    errors->SetName("disallowedMojoInterface");
    result->disallowed_mojo_interface_ = internal::FromValue<std::string>::Parse(*disallowed_mojo_interface_value, errors);
  }
  const base::Value* mismatched_headers_value = dict.Find("mismatchedHeaders");
  if (mismatched_headers_value) {
    errors->SetName("mismatchedHeaders");
    result->mismatched_headers_ = internal::FromValue<std::vector<std::unique_ptr<::headless::preload::PrerenderMismatchedHeaders>>>::Parse(*mismatched_headers_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PrerenderStatusUpdatedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("key", internal::ToValue(*key_));
  result.Set("status", internal::ToValue(status_));
  if (prerender_status_)
    result.Set("prerenderStatus", internal::ToValue(prerender_status_.value()));
  if (disallowed_mojo_interface_)
    result.Set("disallowedMojoInterface", internal::ToValue(disallowed_mojo_interface_.value()));
  if (mismatched_headers_)
    result.Set("mismatchedHeaders", internal::ToValue(mismatched_headers_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<PrerenderStatusUpdatedParams> PrerenderStatusUpdatedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PrerenderStatusUpdatedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PreloadingAttemptSourcesUpdatedParams> PreloadingAttemptSourcesUpdatedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PreloadingAttemptSourcesUpdatedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PreloadingAttemptSourcesUpdatedParams> result(new PreloadingAttemptSourcesUpdatedParams());
  errors->Push();
  errors->SetName("PreloadingAttemptSourcesUpdatedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* loader_id_value = dict.Find("loaderId");
  if (loader_id_value) {
    errors->SetName("loaderId");
    result->loader_id_ = internal::FromValue<std::string>::Parse(*loader_id_value, errors);
  } else {
    errors->AddError("required property missing: loaderId");
  }
  const base::Value* preloading_attempt_sources_value = dict.Find("preloadingAttemptSources");
  if (preloading_attempt_sources_value) {
    errors->SetName("preloadingAttemptSources");
    result->preloading_attempt_sources_ = internal::FromValue<std::vector<std::unique_ptr<::headless::preload::PreloadingAttemptSource>>>::Parse(*preloading_attempt_sources_value, errors);
  } else {
    errors->AddError("required property missing: preloadingAttemptSources");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PreloadingAttemptSourcesUpdatedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("loaderId", internal::ToValue(loader_id_));
  result.Set("preloadingAttemptSources", internal::ToValue(preloading_attempt_sources_));
  return base::Value(std::move(result));
}

std::unique_ptr<PreloadingAttemptSourcesUpdatedParams> PreloadingAttemptSourcesUpdatedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PreloadingAttemptSourcesUpdatedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


}  // namespace preload
}  // namespace headless
