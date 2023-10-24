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
#include "headless/public/devtools/domains/types_runtime.h"
#include "headless/public/devtools/domains/types_security.h"

#include "base/values.h"
#include "headless/public/devtools/internal/type_conversions_dom.h"
#include "headless/public/devtools/internal/type_conversions_debugger.h"
#include "headless/public/devtools/internal/type_conversions_emulation.h"
#include "headless/public/devtools/internal/type_conversions_io.h"
#include "headless/public/devtools/internal/type_conversions_network.h"
#include "headless/public/devtools/internal/type_conversions_page.h"
#include "headless/public/devtools/internal/type_conversions_runtime.h"
#include "headless/public/devtools/internal/type_conversions_security.h"

namespace headless {

namespace page {

std::unique_ptr<AdFrameStatus> AdFrameStatus::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AdFrameStatus");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AdFrameStatus> result(new AdFrameStatus());
  errors->Push();
  errors->SetName("AdFrameStatus");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* ad_frame_type_value = dict.Find("adFrameType");
  if (ad_frame_type_value) {
    errors->SetName("adFrameType");
    result->ad_frame_type_ = internal::FromValue<::headless::page::AdFrameType>::Parse(*ad_frame_type_value, errors);
  } else {
    errors->AddError("required property missing: adFrameType");
  }
  const base::Value* explanations_value = dict.Find("explanations");
  if (explanations_value) {
    errors->SetName("explanations");
    result->explanations_ = internal::FromValue<std::vector<::headless::page::AdFrameExplanation>>::Parse(*explanations_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AdFrameStatus::Serialize() const {
  base::Value::Dict result;
  result.Set("adFrameType", internal::ToValue(ad_frame_type_));
  if (explanations_)
    result.Set("explanations", internal::ToValue(explanations_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<AdFrameStatus> AdFrameStatus::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AdFrameStatus> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AdScriptId> AdScriptId::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AdScriptId");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AdScriptId> result(new AdScriptId());
  errors->Push();
  errors->SetName("AdScriptId");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* script_id_value = dict.Find("scriptId");
  if (script_id_value) {
    errors->SetName("scriptId");
    result->script_id_ = internal::FromValue<std::string>::Parse(*script_id_value, errors);
  } else {
    errors->AddError("required property missing: scriptId");
  }
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

base::Value AdScriptId::Serialize() const {
  base::Value::Dict result;
  result.Set("scriptId", internal::ToValue(script_id_));
  result.Set("debuggerId", internal::ToValue(debugger_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<AdScriptId> AdScriptId::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AdScriptId> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PermissionsPolicyBlockLocator> PermissionsPolicyBlockLocator::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PermissionsPolicyBlockLocator");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PermissionsPolicyBlockLocator> result(new PermissionsPolicyBlockLocator());
  errors->Push();
  errors->SetName("PermissionsPolicyBlockLocator");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  } else {
    errors->AddError("required property missing: frameId");
  }
  const base::Value* block_reason_value = dict.Find("blockReason");
  if (block_reason_value) {
    errors->SetName("blockReason");
    result->block_reason_ = internal::FromValue<::headless::page::PermissionsPolicyBlockReason>::Parse(*block_reason_value, errors);
  } else {
    errors->AddError("required property missing: blockReason");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PermissionsPolicyBlockLocator::Serialize() const {
  base::Value::Dict result;
  result.Set("frameId", internal::ToValue(frame_id_));
  result.Set("blockReason", internal::ToValue(block_reason_));
  return base::Value(std::move(result));
}

std::unique_ptr<PermissionsPolicyBlockLocator> PermissionsPolicyBlockLocator::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PermissionsPolicyBlockLocator> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PermissionsPolicyFeatureState> PermissionsPolicyFeatureState::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PermissionsPolicyFeatureState");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PermissionsPolicyFeatureState> result(new PermissionsPolicyFeatureState());
  errors->Push();
  errors->SetName("PermissionsPolicyFeatureState");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* feature_value = dict.Find("feature");
  if (feature_value) {
    errors->SetName("feature");
    result->feature_ = internal::FromValue<::headless::page::PermissionsPolicyFeature>::Parse(*feature_value, errors);
  } else {
    errors->AddError("required property missing: feature");
  }
  const base::Value* allowed_value = dict.Find("allowed");
  if (allowed_value) {
    errors->SetName("allowed");
    result->allowed_ = internal::FromValue<bool>::Parse(*allowed_value, errors);
  } else {
    errors->AddError("required property missing: allowed");
  }
  const base::Value* locator_value = dict.Find("locator");
  if (locator_value) {
    errors->SetName("locator");
    result->locator_ = internal::FromValue<::headless::page::PermissionsPolicyBlockLocator>::Parse(*locator_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PermissionsPolicyFeatureState::Serialize() const {
  base::Value::Dict result;
  result.Set("feature", internal::ToValue(feature_));
  result.Set("allowed", internal::ToValue(allowed_));
  if (locator_)
    result.Set("locator", internal::ToValue(*locator_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<PermissionsPolicyFeatureState> PermissionsPolicyFeatureState::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PermissionsPolicyFeatureState> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<OriginTrialToken> OriginTrialToken::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("OriginTrialToken");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<OriginTrialToken> result(new OriginTrialToken());
  errors->Push();
  errors->SetName("OriginTrialToken");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* origin_value = dict.Find("origin");
  if (origin_value) {
    errors->SetName("origin");
    result->origin_ = internal::FromValue<std::string>::Parse(*origin_value, errors);
  } else {
    errors->AddError("required property missing: origin");
  }
  const base::Value* match_sub_domains_value = dict.Find("matchSubDomains");
  if (match_sub_domains_value) {
    errors->SetName("matchSubDomains");
    result->match_sub_domains_ = internal::FromValue<bool>::Parse(*match_sub_domains_value, errors);
  } else {
    errors->AddError("required property missing: matchSubDomains");
  }
  const base::Value* trial_name_value = dict.Find("trialName");
  if (trial_name_value) {
    errors->SetName("trialName");
    result->trial_name_ = internal::FromValue<std::string>::Parse(*trial_name_value, errors);
  } else {
    errors->AddError("required property missing: trialName");
  }
  const base::Value* expiry_time_value = dict.Find("expiryTime");
  if (expiry_time_value) {
    errors->SetName("expiryTime");
    result->expiry_time_ = internal::FromValue<double>::Parse(*expiry_time_value, errors);
  } else {
    errors->AddError("required property missing: expiryTime");
  }
  const base::Value* is_third_party_value = dict.Find("isThirdParty");
  if (is_third_party_value) {
    errors->SetName("isThirdParty");
    result->is_third_party_ = internal::FromValue<bool>::Parse(*is_third_party_value, errors);
  } else {
    errors->AddError("required property missing: isThirdParty");
  }
  const base::Value* usage_restriction_value = dict.Find("usageRestriction");
  if (usage_restriction_value) {
    errors->SetName("usageRestriction");
    result->usage_restriction_ = internal::FromValue<::headless::page::OriginTrialUsageRestriction>::Parse(*usage_restriction_value, errors);
  } else {
    errors->AddError("required property missing: usageRestriction");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value OriginTrialToken::Serialize() const {
  base::Value::Dict result;
  result.Set("origin", internal::ToValue(origin_));
  result.Set("matchSubDomains", internal::ToValue(match_sub_domains_));
  result.Set("trialName", internal::ToValue(trial_name_));
  result.Set("expiryTime", internal::ToValue(expiry_time_));
  result.Set("isThirdParty", internal::ToValue(is_third_party_));
  result.Set("usageRestriction", internal::ToValue(usage_restriction_));
  return base::Value(std::move(result));
}

std::unique_ptr<OriginTrialToken> OriginTrialToken::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<OriginTrialToken> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<OriginTrialTokenWithStatus> OriginTrialTokenWithStatus::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("OriginTrialTokenWithStatus");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<OriginTrialTokenWithStatus> result(new OriginTrialTokenWithStatus());
  errors->Push();
  errors->SetName("OriginTrialTokenWithStatus");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* raw_token_text_value = dict.Find("rawTokenText");
  if (raw_token_text_value) {
    errors->SetName("rawTokenText");
    result->raw_token_text_ = internal::FromValue<std::string>::Parse(*raw_token_text_value, errors);
  } else {
    errors->AddError("required property missing: rawTokenText");
  }
  const base::Value* parsed_token_value = dict.Find("parsedToken");
  if (parsed_token_value) {
    errors->SetName("parsedToken");
    result->parsed_token_ = internal::FromValue<::headless::page::OriginTrialToken>::Parse(*parsed_token_value, errors);
  }
  const base::Value* status_value = dict.Find("status");
  if (status_value) {
    errors->SetName("status");
    result->status_ = internal::FromValue<::headless::page::OriginTrialTokenStatus>::Parse(*status_value, errors);
  } else {
    errors->AddError("required property missing: status");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value OriginTrialTokenWithStatus::Serialize() const {
  base::Value::Dict result;
  result.Set("rawTokenText", internal::ToValue(raw_token_text_));
  if (parsed_token_)
    result.Set("parsedToken", internal::ToValue(*parsed_token_.value()));
  result.Set("status", internal::ToValue(status_));
  return base::Value(std::move(result));
}

std::unique_ptr<OriginTrialTokenWithStatus> OriginTrialTokenWithStatus::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<OriginTrialTokenWithStatus> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<OriginTrial> OriginTrial::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("OriginTrial");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<OriginTrial> result(new OriginTrial());
  errors->Push();
  errors->SetName("OriginTrial");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* trial_name_value = dict.Find("trialName");
  if (trial_name_value) {
    errors->SetName("trialName");
    result->trial_name_ = internal::FromValue<std::string>::Parse(*trial_name_value, errors);
  } else {
    errors->AddError("required property missing: trialName");
  }
  const base::Value* status_value = dict.Find("status");
  if (status_value) {
    errors->SetName("status");
    result->status_ = internal::FromValue<::headless::page::OriginTrialStatus>::Parse(*status_value, errors);
  } else {
    errors->AddError("required property missing: status");
  }
  const base::Value* tokens_with_status_value = dict.Find("tokensWithStatus");
  if (tokens_with_status_value) {
    errors->SetName("tokensWithStatus");
    result->tokens_with_status_ = internal::FromValue<std::vector<std::unique_ptr<::headless::page::OriginTrialTokenWithStatus>>>::Parse(*tokens_with_status_value, errors);
  } else {
    errors->AddError("required property missing: tokensWithStatus");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value OriginTrial::Serialize() const {
  base::Value::Dict result;
  result.Set("trialName", internal::ToValue(trial_name_));
  result.Set("status", internal::ToValue(status_));
  result.Set("tokensWithStatus", internal::ToValue(tokens_with_status_));
  return base::Value(std::move(result));
}

std::unique_ptr<OriginTrial> OriginTrial::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<OriginTrial> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<Frame> Frame::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("Frame");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<Frame> result(new Frame());
  errors->Push();
  errors->SetName("Frame");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* id_value = dict.Find("id");
  if (id_value) {
    errors->SetName("id");
    result->id_ = internal::FromValue<std::string>::Parse(*id_value, errors);
  } else {
    errors->AddError("required property missing: id");
  }
  const base::Value* parent_id_value = dict.Find("parentId");
  if (parent_id_value) {
    errors->SetName("parentId");
    result->parent_id_ = internal::FromValue<std::string>::Parse(*parent_id_value, errors);
  }
  const base::Value* loader_id_value = dict.Find("loaderId");
  if (loader_id_value) {
    errors->SetName("loaderId");
    result->loader_id_ = internal::FromValue<std::string>::Parse(*loader_id_value, errors);
  } else {
    errors->AddError("required property missing: loaderId");
  }
  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    errors->SetName("name");
    result->name_ = internal::FromValue<std::string>::Parse(*name_value, errors);
  }
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  const base::Value* url_fragment_value = dict.Find("urlFragment");
  if (url_fragment_value) {
    errors->SetName("urlFragment");
    result->url_fragment_ = internal::FromValue<std::string>::Parse(*url_fragment_value, errors);
  }
  const base::Value* domain_and_registry_value = dict.Find("domainAndRegistry");
  if (domain_and_registry_value) {
    errors->SetName("domainAndRegistry");
    result->domain_and_registry_ = internal::FromValue<std::string>::Parse(*domain_and_registry_value, errors);
  } else {
    errors->AddError("required property missing: domainAndRegistry");
  }
  const base::Value* security_origin_value = dict.Find("securityOrigin");
  if (security_origin_value) {
    errors->SetName("securityOrigin");
    result->security_origin_ = internal::FromValue<std::string>::Parse(*security_origin_value, errors);
  } else {
    errors->AddError("required property missing: securityOrigin");
  }
  const base::Value* mime_type_value = dict.Find("mimeType");
  if (mime_type_value) {
    errors->SetName("mimeType");
    result->mime_type_ = internal::FromValue<std::string>::Parse(*mime_type_value, errors);
  } else {
    errors->AddError("required property missing: mimeType");
  }
  const base::Value* unreachable_url_value = dict.Find("unreachableUrl");
  if (unreachable_url_value) {
    errors->SetName("unreachableUrl");
    result->unreachable_url_ = internal::FromValue<std::string>::Parse(*unreachable_url_value, errors);
  }
  const base::Value* ad_frame_status_value = dict.Find("adFrameStatus");
  if (ad_frame_status_value) {
    errors->SetName("adFrameStatus");
    result->ad_frame_status_ = internal::FromValue<::headless::page::AdFrameStatus>::Parse(*ad_frame_status_value, errors);
  }
  const base::Value* secure_context_type_value = dict.Find("secureContextType");
  if (secure_context_type_value) {
    errors->SetName("secureContextType");
    result->secure_context_type_ = internal::FromValue<::headless::page::SecureContextType>::Parse(*secure_context_type_value, errors);
  } else {
    errors->AddError("required property missing: secureContextType");
  }
  const base::Value* cross_origin_isolated_context_type_value = dict.Find("crossOriginIsolatedContextType");
  if (cross_origin_isolated_context_type_value) {
    errors->SetName("crossOriginIsolatedContextType");
    result->cross_origin_isolated_context_type_ = internal::FromValue<::headless::page::CrossOriginIsolatedContextType>::Parse(*cross_origin_isolated_context_type_value, errors);
  } else {
    errors->AddError("required property missing: crossOriginIsolatedContextType");
  }
  const base::Value* gatedapi_features_value = dict.Find("gatedAPIFeatures");
  if (gatedapi_features_value) {
    errors->SetName("gatedAPIFeatures");
    result->gatedapi_features_ = internal::FromValue<std::vector<::headless::page::GatedAPIFeatures>>::Parse(*gatedapi_features_value, errors);
  } else {
    errors->AddError("required property missing: gatedAPIFeatures");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value Frame::Serialize() const {
  base::Value::Dict result;
  result.Set("id", internal::ToValue(id_));
  if (parent_id_)
    result.Set("parentId", internal::ToValue(parent_id_.value()));
  result.Set("loaderId", internal::ToValue(loader_id_));
  if (name_)
    result.Set("name", internal::ToValue(name_.value()));
  result.Set("url", internal::ToValue(url_));
  if (url_fragment_)
    result.Set("urlFragment", internal::ToValue(url_fragment_.value()));
  result.Set("domainAndRegistry", internal::ToValue(domain_and_registry_));
  result.Set("securityOrigin", internal::ToValue(security_origin_));
  result.Set("mimeType", internal::ToValue(mime_type_));
  if (unreachable_url_)
    result.Set("unreachableUrl", internal::ToValue(unreachable_url_.value()));
  if (ad_frame_status_)
    result.Set("adFrameStatus", internal::ToValue(*ad_frame_status_.value()));
  result.Set("secureContextType", internal::ToValue(secure_context_type_));
  result.Set("crossOriginIsolatedContextType", internal::ToValue(cross_origin_isolated_context_type_));
  result.Set("gatedAPIFeatures", internal::ToValue(gatedapi_features_));
  return base::Value(std::move(result));
}

std::unique_ptr<Frame> Frame::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<Frame> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<FrameResource> FrameResource::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("FrameResource");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<FrameResource> result(new FrameResource());
  errors->Push();
  errors->SetName("FrameResource");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    errors->SetName("type");
    result->type_ = internal::FromValue<::headless::network::ResourceType>::Parse(*type_value, errors);
  } else {
    errors->AddError("required property missing: type");
  }
  const base::Value* mime_type_value = dict.Find("mimeType");
  if (mime_type_value) {
    errors->SetName("mimeType");
    result->mime_type_ = internal::FromValue<std::string>::Parse(*mime_type_value, errors);
  } else {
    errors->AddError("required property missing: mimeType");
  }
  const base::Value* last_modified_value = dict.Find("lastModified");
  if (last_modified_value) {
    errors->SetName("lastModified");
    result->last_modified_ = internal::FromValue<double>::Parse(*last_modified_value, errors);
  }
  const base::Value* content_size_value = dict.Find("contentSize");
  if (content_size_value) {
    errors->SetName("contentSize");
    result->content_size_ = internal::FromValue<double>::Parse(*content_size_value, errors);
  }
  const base::Value* failed_value = dict.Find("failed");
  if (failed_value) {
    errors->SetName("failed");
    result->failed_ = internal::FromValue<bool>::Parse(*failed_value, errors);
  }
  const base::Value* canceled_value = dict.Find("canceled");
  if (canceled_value) {
    errors->SetName("canceled");
    result->canceled_ = internal::FromValue<bool>::Parse(*canceled_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value FrameResource::Serialize() const {
  base::Value::Dict result;
  result.Set("url", internal::ToValue(url_));
  result.Set("type", internal::ToValue(type_));
  result.Set("mimeType", internal::ToValue(mime_type_));
  if (last_modified_)
    result.Set("lastModified", internal::ToValue(last_modified_.value()));
  if (content_size_)
    result.Set("contentSize", internal::ToValue(content_size_.value()));
  if (failed_)
    result.Set("failed", internal::ToValue(failed_.value()));
  if (canceled_)
    result.Set("canceled", internal::ToValue(canceled_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<FrameResource> FrameResource::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<FrameResource> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<FrameResourceTree> FrameResourceTree::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("FrameResourceTree");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<FrameResourceTree> result(new FrameResourceTree());
  errors->Push();
  errors->SetName("FrameResourceTree");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_value = dict.Find("frame");
  if (frame_value) {
    errors->SetName("frame");
    result->frame_ = internal::FromValue<::headless::page::Frame>::Parse(*frame_value, errors);
  } else {
    errors->AddError("required property missing: frame");
  }
  const base::Value* child_frames_value = dict.Find("childFrames");
  if (child_frames_value) {
    errors->SetName("childFrames");
    result->child_frames_ = internal::FromValue<std::vector<std::unique_ptr<::headless::page::FrameResourceTree>>>::Parse(*child_frames_value, errors);
  }
  const base::Value* resources_value = dict.Find("resources");
  if (resources_value) {
    errors->SetName("resources");
    result->resources_ = internal::FromValue<std::vector<std::unique_ptr<::headless::page::FrameResource>>>::Parse(*resources_value, errors);
  } else {
    errors->AddError("required property missing: resources");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value FrameResourceTree::Serialize() const {
  base::Value::Dict result;
  result.Set("frame", internal::ToValue(*frame_));
  if (child_frames_)
    result.Set("childFrames", internal::ToValue(child_frames_.value()));
  result.Set("resources", internal::ToValue(resources_));
  return base::Value(std::move(result));
}

std::unique_ptr<FrameResourceTree> FrameResourceTree::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<FrameResourceTree> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<FrameTree> FrameTree::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("FrameTree");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<FrameTree> result(new FrameTree());
  errors->Push();
  errors->SetName("FrameTree");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_value = dict.Find("frame");
  if (frame_value) {
    errors->SetName("frame");
    result->frame_ = internal::FromValue<::headless::page::Frame>::Parse(*frame_value, errors);
  } else {
    errors->AddError("required property missing: frame");
  }
  const base::Value* child_frames_value = dict.Find("childFrames");
  if (child_frames_value) {
    errors->SetName("childFrames");
    result->child_frames_ = internal::FromValue<std::vector<std::unique_ptr<::headless::page::FrameTree>>>::Parse(*child_frames_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value FrameTree::Serialize() const {
  base::Value::Dict result;
  result.Set("frame", internal::ToValue(*frame_));
  if (child_frames_)
    result.Set("childFrames", internal::ToValue(child_frames_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<FrameTree> FrameTree::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<FrameTree> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<NavigationEntry> NavigationEntry::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("NavigationEntry");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<NavigationEntry> result(new NavigationEntry());
  errors->Push();
  errors->SetName("NavigationEntry");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* id_value = dict.Find("id");
  if (id_value) {
    errors->SetName("id");
    result->id_ = internal::FromValue<int>::Parse(*id_value, errors);
  } else {
    errors->AddError("required property missing: id");
  }
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  const base::Value* user_typedurl_value = dict.Find("userTypedURL");
  if (user_typedurl_value) {
    errors->SetName("userTypedURL");
    result->user_typedurl_ = internal::FromValue<std::string>::Parse(*user_typedurl_value, errors);
  } else {
    errors->AddError("required property missing: userTypedURL");
  }
  const base::Value* title_value = dict.Find("title");
  if (title_value) {
    errors->SetName("title");
    result->title_ = internal::FromValue<std::string>::Parse(*title_value, errors);
  } else {
    errors->AddError("required property missing: title");
  }
  const base::Value* transition_type_value = dict.Find("transitionType");
  if (transition_type_value) {
    errors->SetName("transitionType");
    result->transition_type_ = internal::FromValue<::headless::page::TransitionType>::Parse(*transition_type_value, errors);
  } else {
    errors->AddError("required property missing: transitionType");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value NavigationEntry::Serialize() const {
  base::Value::Dict result;
  result.Set("id", internal::ToValue(id_));
  result.Set("url", internal::ToValue(url_));
  result.Set("userTypedURL", internal::ToValue(user_typedurl_));
  result.Set("title", internal::ToValue(title_));
  result.Set("transitionType", internal::ToValue(transition_type_));
  return base::Value(std::move(result));
}

std::unique_ptr<NavigationEntry> NavigationEntry::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<NavigationEntry> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ScreencastFrameMetadata> ScreencastFrameMetadata::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ScreencastFrameMetadata");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ScreencastFrameMetadata> result(new ScreencastFrameMetadata());
  errors->Push();
  errors->SetName("ScreencastFrameMetadata");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* offset_top_value = dict.Find("offsetTop");
  if (offset_top_value) {
    errors->SetName("offsetTop");
    result->offset_top_ = internal::FromValue<double>::Parse(*offset_top_value, errors);
  } else {
    errors->AddError("required property missing: offsetTop");
  }
  const base::Value* page_scale_factor_value = dict.Find("pageScaleFactor");
  if (page_scale_factor_value) {
    errors->SetName("pageScaleFactor");
    result->page_scale_factor_ = internal::FromValue<double>::Parse(*page_scale_factor_value, errors);
  } else {
    errors->AddError("required property missing: pageScaleFactor");
  }
  const base::Value* device_width_value = dict.Find("deviceWidth");
  if (device_width_value) {
    errors->SetName("deviceWidth");
    result->device_width_ = internal::FromValue<double>::Parse(*device_width_value, errors);
  } else {
    errors->AddError("required property missing: deviceWidth");
  }
  const base::Value* device_height_value = dict.Find("deviceHeight");
  if (device_height_value) {
    errors->SetName("deviceHeight");
    result->device_height_ = internal::FromValue<double>::Parse(*device_height_value, errors);
  } else {
    errors->AddError("required property missing: deviceHeight");
  }
  const base::Value* scroll_offsetx_value = dict.Find("scrollOffsetX");
  if (scroll_offsetx_value) {
    errors->SetName("scrollOffsetX");
    result->scroll_offsetx_ = internal::FromValue<double>::Parse(*scroll_offsetx_value, errors);
  } else {
    errors->AddError("required property missing: scrollOffsetX");
  }
  const base::Value* scroll_offsety_value = dict.Find("scrollOffsetY");
  if (scroll_offsety_value) {
    errors->SetName("scrollOffsetY");
    result->scroll_offsety_ = internal::FromValue<double>::Parse(*scroll_offsety_value, errors);
  } else {
    errors->AddError("required property missing: scrollOffsetY");
  }
  const base::Value* timestamp_value = dict.Find("timestamp");
  if (timestamp_value) {
    errors->SetName("timestamp");
    result->timestamp_ = internal::FromValue<double>::Parse(*timestamp_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ScreencastFrameMetadata::Serialize() const {
  base::Value::Dict result;
  result.Set("offsetTop", internal::ToValue(offset_top_));
  result.Set("pageScaleFactor", internal::ToValue(page_scale_factor_));
  result.Set("deviceWidth", internal::ToValue(device_width_));
  result.Set("deviceHeight", internal::ToValue(device_height_));
  result.Set("scrollOffsetX", internal::ToValue(scroll_offsetx_));
  result.Set("scrollOffsetY", internal::ToValue(scroll_offsety_));
  if (timestamp_)
    result.Set("timestamp", internal::ToValue(timestamp_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<ScreencastFrameMetadata> ScreencastFrameMetadata::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ScreencastFrameMetadata> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AppManifestError> AppManifestError::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AppManifestError");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AppManifestError> result(new AppManifestError());
  errors->Push();
  errors->SetName("AppManifestError");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* message_value = dict.Find("message");
  if (message_value) {
    errors->SetName("message");
    result->message_ = internal::FromValue<std::string>::Parse(*message_value, errors);
  } else {
    errors->AddError("required property missing: message");
  }
  const base::Value* critical_value = dict.Find("critical");
  if (critical_value) {
    errors->SetName("critical");
    result->critical_ = internal::FromValue<int>::Parse(*critical_value, errors);
  } else {
    errors->AddError("required property missing: critical");
  }
  const base::Value* line_value = dict.Find("line");
  if (line_value) {
    errors->SetName("line");
    result->line_ = internal::FromValue<int>::Parse(*line_value, errors);
  } else {
    errors->AddError("required property missing: line");
  }
  const base::Value* column_value = dict.Find("column");
  if (column_value) {
    errors->SetName("column");
    result->column_ = internal::FromValue<int>::Parse(*column_value, errors);
  } else {
    errors->AddError("required property missing: column");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AppManifestError::Serialize() const {
  base::Value::Dict result;
  result.Set("message", internal::ToValue(message_));
  result.Set("critical", internal::ToValue(critical_));
  result.Set("line", internal::ToValue(line_));
  result.Set("column", internal::ToValue(column_));
  return base::Value(std::move(result));
}

std::unique_ptr<AppManifestError> AppManifestError::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AppManifestError> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AppManifestParsedProperties> AppManifestParsedProperties::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AppManifestParsedProperties");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AppManifestParsedProperties> result(new AppManifestParsedProperties());
  errors->Push();
  errors->SetName("AppManifestParsedProperties");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* scope_value = dict.Find("scope");
  if (scope_value) {
    errors->SetName("scope");
    result->scope_ = internal::FromValue<std::string>::Parse(*scope_value, errors);
  } else {
    errors->AddError("required property missing: scope");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AppManifestParsedProperties::Serialize() const {
  base::Value::Dict result;
  result.Set("scope", internal::ToValue(scope_));
  return base::Value(std::move(result));
}

std::unique_ptr<AppManifestParsedProperties> AppManifestParsedProperties::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AppManifestParsedProperties> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<LayoutViewport> LayoutViewport::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("LayoutViewport");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<LayoutViewport> result(new LayoutViewport());
  errors->Push();
  errors->SetName("LayoutViewport");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* pagex_value = dict.Find("pageX");
  if (pagex_value) {
    errors->SetName("pageX");
    result->pagex_ = internal::FromValue<int>::Parse(*pagex_value, errors);
  } else {
    errors->AddError("required property missing: pageX");
  }
  const base::Value* pagey_value = dict.Find("pageY");
  if (pagey_value) {
    errors->SetName("pageY");
    result->pagey_ = internal::FromValue<int>::Parse(*pagey_value, errors);
  } else {
    errors->AddError("required property missing: pageY");
  }
  const base::Value* client_width_value = dict.Find("clientWidth");
  if (client_width_value) {
    errors->SetName("clientWidth");
    result->client_width_ = internal::FromValue<int>::Parse(*client_width_value, errors);
  } else {
    errors->AddError("required property missing: clientWidth");
  }
  const base::Value* client_height_value = dict.Find("clientHeight");
  if (client_height_value) {
    errors->SetName("clientHeight");
    result->client_height_ = internal::FromValue<int>::Parse(*client_height_value, errors);
  } else {
    errors->AddError("required property missing: clientHeight");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value LayoutViewport::Serialize() const {
  base::Value::Dict result;
  result.Set("pageX", internal::ToValue(pagex_));
  result.Set("pageY", internal::ToValue(pagey_));
  result.Set("clientWidth", internal::ToValue(client_width_));
  result.Set("clientHeight", internal::ToValue(client_height_));
  return base::Value(std::move(result));
}

std::unique_ptr<LayoutViewport> LayoutViewport::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<LayoutViewport> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<VisualViewport> VisualViewport::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("VisualViewport");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<VisualViewport> result(new VisualViewport());
  errors->Push();
  errors->SetName("VisualViewport");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* offsetx_value = dict.Find("offsetX");
  if (offsetx_value) {
    errors->SetName("offsetX");
    result->offsetx_ = internal::FromValue<double>::Parse(*offsetx_value, errors);
  } else {
    errors->AddError("required property missing: offsetX");
  }
  const base::Value* offsety_value = dict.Find("offsetY");
  if (offsety_value) {
    errors->SetName("offsetY");
    result->offsety_ = internal::FromValue<double>::Parse(*offsety_value, errors);
  } else {
    errors->AddError("required property missing: offsetY");
  }
  const base::Value* pagex_value = dict.Find("pageX");
  if (pagex_value) {
    errors->SetName("pageX");
    result->pagex_ = internal::FromValue<double>::Parse(*pagex_value, errors);
  } else {
    errors->AddError("required property missing: pageX");
  }
  const base::Value* pagey_value = dict.Find("pageY");
  if (pagey_value) {
    errors->SetName("pageY");
    result->pagey_ = internal::FromValue<double>::Parse(*pagey_value, errors);
  } else {
    errors->AddError("required property missing: pageY");
  }
  const base::Value* client_width_value = dict.Find("clientWidth");
  if (client_width_value) {
    errors->SetName("clientWidth");
    result->client_width_ = internal::FromValue<double>::Parse(*client_width_value, errors);
  } else {
    errors->AddError("required property missing: clientWidth");
  }
  const base::Value* client_height_value = dict.Find("clientHeight");
  if (client_height_value) {
    errors->SetName("clientHeight");
    result->client_height_ = internal::FromValue<double>::Parse(*client_height_value, errors);
  } else {
    errors->AddError("required property missing: clientHeight");
  }
  const base::Value* scale_value = dict.Find("scale");
  if (scale_value) {
    errors->SetName("scale");
    result->scale_ = internal::FromValue<double>::Parse(*scale_value, errors);
  } else {
    errors->AddError("required property missing: scale");
  }
  const base::Value* zoom_value = dict.Find("zoom");
  if (zoom_value) {
    errors->SetName("zoom");
    result->zoom_ = internal::FromValue<double>::Parse(*zoom_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value VisualViewport::Serialize() const {
  base::Value::Dict result;
  result.Set("offsetX", internal::ToValue(offsetx_));
  result.Set("offsetY", internal::ToValue(offsety_));
  result.Set("pageX", internal::ToValue(pagex_));
  result.Set("pageY", internal::ToValue(pagey_));
  result.Set("clientWidth", internal::ToValue(client_width_));
  result.Set("clientHeight", internal::ToValue(client_height_));
  result.Set("scale", internal::ToValue(scale_));
  if (zoom_)
    result.Set("zoom", internal::ToValue(zoom_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<VisualViewport> VisualViewport::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<VisualViewport> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<Viewport> Viewport::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("Viewport");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<Viewport> result(new Viewport());
  errors->Push();
  errors->SetName("Viewport");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* x_value = dict.Find("x");
  if (x_value) {
    errors->SetName("x");
    result->x_ = internal::FromValue<double>::Parse(*x_value, errors);
  } else {
    errors->AddError("required property missing: x");
  }
  const base::Value* y_value = dict.Find("y");
  if (y_value) {
    errors->SetName("y");
    result->y_ = internal::FromValue<double>::Parse(*y_value, errors);
  } else {
    errors->AddError("required property missing: y");
  }
  const base::Value* width_value = dict.Find("width");
  if (width_value) {
    errors->SetName("width");
    result->width_ = internal::FromValue<double>::Parse(*width_value, errors);
  } else {
    errors->AddError("required property missing: width");
  }
  const base::Value* height_value = dict.Find("height");
  if (height_value) {
    errors->SetName("height");
    result->height_ = internal::FromValue<double>::Parse(*height_value, errors);
  } else {
    errors->AddError("required property missing: height");
  }
  const base::Value* scale_value = dict.Find("scale");
  if (scale_value) {
    errors->SetName("scale");
    result->scale_ = internal::FromValue<double>::Parse(*scale_value, errors);
  } else {
    errors->AddError("required property missing: scale");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value Viewport::Serialize() const {
  base::Value::Dict result;
  result.Set("x", internal::ToValue(x_));
  result.Set("y", internal::ToValue(y_));
  result.Set("width", internal::ToValue(width_));
  result.Set("height", internal::ToValue(height_));
  result.Set("scale", internal::ToValue(scale_));
  return base::Value(std::move(result));
}

std::unique_ptr<Viewport> Viewport::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<Viewport> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<FontFamilies> FontFamilies::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("FontFamilies");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<FontFamilies> result(new FontFamilies());
  errors->Push();
  errors->SetName("FontFamilies");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* standard_value = dict.Find("standard");
  if (standard_value) {
    errors->SetName("standard");
    result->standard_ = internal::FromValue<std::string>::Parse(*standard_value, errors);
  }
  const base::Value* fixed_value = dict.Find("fixed");
  if (fixed_value) {
    errors->SetName("fixed");
    result->fixed_ = internal::FromValue<std::string>::Parse(*fixed_value, errors);
  }
  const base::Value* serif_value = dict.Find("serif");
  if (serif_value) {
    errors->SetName("serif");
    result->serif_ = internal::FromValue<std::string>::Parse(*serif_value, errors);
  }
  const base::Value* sans_serif_value = dict.Find("sansSerif");
  if (sans_serif_value) {
    errors->SetName("sansSerif");
    result->sans_serif_ = internal::FromValue<std::string>::Parse(*sans_serif_value, errors);
  }
  const base::Value* cursive_value = dict.Find("cursive");
  if (cursive_value) {
    errors->SetName("cursive");
    result->cursive_ = internal::FromValue<std::string>::Parse(*cursive_value, errors);
  }
  const base::Value* fantasy_value = dict.Find("fantasy");
  if (fantasy_value) {
    errors->SetName("fantasy");
    result->fantasy_ = internal::FromValue<std::string>::Parse(*fantasy_value, errors);
  }
  const base::Value* math_value = dict.Find("math");
  if (math_value) {
    errors->SetName("math");
    result->math_ = internal::FromValue<std::string>::Parse(*math_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value FontFamilies::Serialize() const {
  base::Value::Dict result;
  if (standard_)
    result.Set("standard", internal::ToValue(standard_.value()));
  if (fixed_)
    result.Set("fixed", internal::ToValue(fixed_.value()));
  if (serif_)
    result.Set("serif", internal::ToValue(serif_.value()));
  if (sans_serif_)
    result.Set("sansSerif", internal::ToValue(sans_serif_.value()));
  if (cursive_)
    result.Set("cursive", internal::ToValue(cursive_.value()));
  if (fantasy_)
    result.Set("fantasy", internal::ToValue(fantasy_.value()));
  if (math_)
    result.Set("math", internal::ToValue(math_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<FontFamilies> FontFamilies::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<FontFamilies> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ScriptFontFamilies> ScriptFontFamilies::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ScriptFontFamilies");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ScriptFontFamilies> result(new ScriptFontFamilies());
  errors->Push();
  errors->SetName("ScriptFontFamilies");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* script_value = dict.Find("script");
  if (script_value) {
    errors->SetName("script");
    result->script_ = internal::FromValue<std::string>::Parse(*script_value, errors);
  } else {
    errors->AddError("required property missing: script");
  }
  const base::Value* font_families_value = dict.Find("fontFamilies");
  if (font_families_value) {
    errors->SetName("fontFamilies");
    result->font_families_ = internal::FromValue<::headless::page::FontFamilies>::Parse(*font_families_value, errors);
  } else {
    errors->AddError("required property missing: fontFamilies");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ScriptFontFamilies::Serialize() const {
  base::Value::Dict result;
  result.Set("script", internal::ToValue(script_));
  result.Set("fontFamilies", internal::ToValue(*font_families_));
  return base::Value(std::move(result));
}

std::unique_ptr<ScriptFontFamilies> ScriptFontFamilies::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ScriptFontFamilies> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<FontSizes> FontSizes::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("FontSizes");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<FontSizes> result(new FontSizes());
  errors->Push();
  errors->SetName("FontSizes");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* standard_value = dict.Find("standard");
  if (standard_value) {
    errors->SetName("standard");
    result->standard_ = internal::FromValue<int>::Parse(*standard_value, errors);
  }
  const base::Value* fixed_value = dict.Find("fixed");
  if (fixed_value) {
    errors->SetName("fixed");
    result->fixed_ = internal::FromValue<int>::Parse(*fixed_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value FontSizes::Serialize() const {
  base::Value::Dict result;
  if (standard_)
    result.Set("standard", internal::ToValue(standard_.value()));
  if (fixed_)
    result.Set("fixed", internal::ToValue(fixed_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<FontSizes> FontSizes::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<FontSizes> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<InstallabilityErrorArgument> InstallabilityErrorArgument::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("InstallabilityErrorArgument");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<InstallabilityErrorArgument> result(new InstallabilityErrorArgument());
  errors->Push();
  errors->SetName("InstallabilityErrorArgument");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    errors->SetName("name");
    result->name_ = internal::FromValue<std::string>::Parse(*name_value, errors);
  } else {
    errors->AddError("required property missing: name");
  }
  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    errors->SetName("value");
    result->value_ = internal::FromValue<std::string>::Parse(*value_value, errors);
  } else {
    errors->AddError("required property missing: value");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value InstallabilityErrorArgument::Serialize() const {
  base::Value::Dict result;
  result.Set("name", internal::ToValue(name_));
  result.Set("value", internal::ToValue(value_));
  return base::Value(std::move(result));
}

std::unique_ptr<InstallabilityErrorArgument> InstallabilityErrorArgument::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<InstallabilityErrorArgument> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<InstallabilityError> InstallabilityError::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("InstallabilityError");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<InstallabilityError> result(new InstallabilityError());
  errors->Push();
  errors->SetName("InstallabilityError");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* error_id_value = dict.Find("errorId");
  if (error_id_value) {
    errors->SetName("errorId");
    result->error_id_ = internal::FromValue<std::string>::Parse(*error_id_value, errors);
  } else {
    errors->AddError("required property missing: errorId");
  }
  const base::Value* error_arguments_value = dict.Find("errorArguments");
  if (error_arguments_value) {
    errors->SetName("errorArguments");
    result->error_arguments_ = internal::FromValue<std::vector<std::unique_ptr<::headless::page::InstallabilityErrorArgument>>>::Parse(*error_arguments_value, errors);
  } else {
    errors->AddError("required property missing: errorArguments");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value InstallabilityError::Serialize() const {
  base::Value::Dict result;
  result.Set("errorId", internal::ToValue(error_id_));
  result.Set("errorArguments", internal::ToValue(error_arguments_));
  return base::Value(std::move(result));
}

std::unique_ptr<InstallabilityError> InstallabilityError::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<InstallabilityError> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CompilationCacheParams> CompilationCacheParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CompilationCacheParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CompilationCacheParams> result(new CompilationCacheParams());
  errors->Push();
  errors->SetName("CompilationCacheParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  const base::Value* eager_value = dict.Find("eager");
  if (eager_value) {
    errors->SetName("eager");
    result->eager_ = internal::FromValue<bool>::Parse(*eager_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CompilationCacheParams::Serialize() const {
  base::Value::Dict result;
  result.Set("url", internal::ToValue(url_));
  if (eager_)
    result.Set("eager", internal::ToValue(eager_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<CompilationCacheParams> CompilationCacheParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CompilationCacheParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<BackForwardCacheBlockingDetails> BackForwardCacheBlockingDetails::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("BackForwardCacheBlockingDetails");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<BackForwardCacheBlockingDetails> result(new BackForwardCacheBlockingDetails());
  errors->Push();
  errors->SetName("BackForwardCacheBlockingDetails");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  }
  const base::Value* function_value = dict.Find("function");
  if (function_value) {
    errors->SetName("function");
    result->function_ = internal::FromValue<std::string>::Parse(*function_value, errors);
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
  } else {
    errors->AddError("required property missing: columnNumber");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value BackForwardCacheBlockingDetails::Serialize() const {
  base::Value::Dict result;
  if (url_)
    result.Set("url", internal::ToValue(url_.value()));
  if (function_)
    result.Set("function", internal::ToValue(function_.value()));
  result.Set("lineNumber", internal::ToValue(line_number_));
  result.Set("columnNumber", internal::ToValue(column_number_));
  return base::Value(std::move(result));
}

std::unique_ptr<BackForwardCacheBlockingDetails> BackForwardCacheBlockingDetails::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<BackForwardCacheBlockingDetails> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<BackForwardCacheNotRestoredExplanation> BackForwardCacheNotRestoredExplanation::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("BackForwardCacheNotRestoredExplanation");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<BackForwardCacheNotRestoredExplanation> result(new BackForwardCacheNotRestoredExplanation());
  errors->Push();
  errors->SetName("BackForwardCacheNotRestoredExplanation");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    errors->SetName("type");
    result->type_ = internal::FromValue<::headless::page::BackForwardCacheNotRestoredReasonType>::Parse(*type_value, errors);
  } else {
    errors->AddError("required property missing: type");
  }
  const base::Value* reason_value = dict.Find("reason");
  if (reason_value) {
    errors->SetName("reason");
    result->reason_ = internal::FromValue<::headless::page::BackForwardCacheNotRestoredReason>::Parse(*reason_value, errors);
  } else {
    errors->AddError("required property missing: reason");
  }
  const base::Value* context_value = dict.Find("context");
  if (context_value) {
    errors->SetName("context");
    result->context_ = internal::FromValue<std::string>::Parse(*context_value, errors);
  }
  const base::Value* details_value = dict.Find("details");
  if (details_value) {
    errors->SetName("details");
    result->details_ = internal::FromValue<std::vector<std::unique_ptr<::headless::page::BackForwardCacheBlockingDetails>>>::Parse(*details_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value BackForwardCacheNotRestoredExplanation::Serialize() const {
  base::Value::Dict result;
  result.Set("type", internal::ToValue(type_));
  result.Set("reason", internal::ToValue(reason_));
  if (context_)
    result.Set("context", internal::ToValue(context_.value()));
  if (details_)
    result.Set("details", internal::ToValue(details_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<BackForwardCacheNotRestoredExplanation> BackForwardCacheNotRestoredExplanation::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<BackForwardCacheNotRestoredExplanation> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<BackForwardCacheNotRestoredExplanationTree> BackForwardCacheNotRestoredExplanationTree::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("BackForwardCacheNotRestoredExplanationTree");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<BackForwardCacheNotRestoredExplanationTree> result(new BackForwardCacheNotRestoredExplanationTree());
  errors->Push();
  errors->SetName("BackForwardCacheNotRestoredExplanationTree");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  const base::Value* explanations_value = dict.Find("explanations");
  if (explanations_value) {
    errors->SetName("explanations");
    result->explanations_ = internal::FromValue<std::vector<std::unique_ptr<::headless::page::BackForwardCacheNotRestoredExplanation>>>::Parse(*explanations_value, errors);
  } else {
    errors->AddError("required property missing: explanations");
  }
  const base::Value* children_value = dict.Find("children");
  if (children_value) {
    errors->SetName("children");
    result->children_ = internal::FromValue<std::vector<std::unique_ptr<::headless::page::BackForwardCacheNotRestoredExplanationTree>>>::Parse(*children_value, errors);
  } else {
    errors->AddError("required property missing: children");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value BackForwardCacheNotRestoredExplanationTree::Serialize() const {
  base::Value::Dict result;
  result.Set("url", internal::ToValue(url_));
  result.Set("explanations", internal::ToValue(explanations_));
  result.Set("children", internal::ToValue(children_));
  return base::Value(std::move(result));
}

std::unique_ptr<BackForwardCacheNotRestoredExplanationTree> BackForwardCacheNotRestoredExplanationTree::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<BackForwardCacheNotRestoredExplanationTree> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AddScriptToEvaluateOnLoadParams> AddScriptToEvaluateOnLoadParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AddScriptToEvaluateOnLoadParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AddScriptToEvaluateOnLoadParams> result(new AddScriptToEvaluateOnLoadParams());
  errors->Push();
  errors->SetName("AddScriptToEvaluateOnLoadParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* script_source_value = dict.Find("scriptSource");
  if (script_source_value) {
    errors->SetName("scriptSource");
    result->script_source_ = internal::FromValue<std::string>::Parse(*script_source_value, errors);
  } else {
    errors->AddError("required property missing: scriptSource");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AddScriptToEvaluateOnLoadParams::Serialize() const {
  base::Value::Dict result;
  result.Set("scriptSource", internal::ToValue(script_source_));
  return base::Value(std::move(result));
}

std::unique_ptr<AddScriptToEvaluateOnLoadParams> AddScriptToEvaluateOnLoadParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AddScriptToEvaluateOnLoadParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AddScriptToEvaluateOnLoadResult> AddScriptToEvaluateOnLoadResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AddScriptToEvaluateOnLoadResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AddScriptToEvaluateOnLoadResult> result(new AddScriptToEvaluateOnLoadResult());
  errors->Push();
  errors->SetName("AddScriptToEvaluateOnLoadResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* identifier_value = dict.Find("identifier");
  if (identifier_value) {
    errors->SetName("identifier");
    result->identifier_ = internal::FromValue<std::string>::Parse(*identifier_value, errors);
  } else {
    errors->AddError("required property missing: identifier");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AddScriptToEvaluateOnLoadResult::Serialize() const {
  base::Value::Dict result;
  result.Set("identifier", internal::ToValue(identifier_));
  return base::Value(std::move(result));
}

std::unique_ptr<AddScriptToEvaluateOnLoadResult> AddScriptToEvaluateOnLoadResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AddScriptToEvaluateOnLoadResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AddScriptToEvaluateOnNewDocumentParams> AddScriptToEvaluateOnNewDocumentParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AddScriptToEvaluateOnNewDocumentParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AddScriptToEvaluateOnNewDocumentParams> result(new AddScriptToEvaluateOnNewDocumentParams());
  errors->Push();
  errors->SetName("AddScriptToEvaluateOnNewDocumentParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* source_value = dict.Find("source");
  if (source_value) {
    errors->SetName("source");
    result->source_ = internal::FromValue<std::string>::Parse(*source_value, errors);
  } else {
    errors->AddError("required property missing: source");
  }
  const base::Value* world_name_value = dict.Find("worldName");
  if (world_name_value) {
    errors->SetName("worldName");
    result->world_name_ = internal::FromValue<std::string>::Parse(*world_name_value, errors);
  }
  const base::Value* include_command_lineapi_value = dict.Find("includeCommandLineAPI");
  if (include_command_lineapi_value) {
    errors->SetName("includeCommandLineAPI");
    result->include_command_lineapi_ = internal::FromValue<bool>::Parse(*include_command_lineapi_value, errors);
  }
  const base::Value* run_immediately_value = dict.Find("runImmediately");
  if (run_immediately_value) {
    errors->SetName("runImmediately");
    result->run_immediately_ = internal::FromValue<bool>::Parse(*run_immediately_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AddScriptToEvaluateOnNewDocumentParams::Serialize() const {
  base::Value::Dict result;
  result.Set("source", internal::ToValue(source_));
  if (world_name_)
    result.Set("worldName", internal::ToValue(world_name_.value()));
  if (include_command_lineapi_)
    result.Set("includeCommandLineAPI", internal::ToValue(include_command_lineapi_.value()));
  if (run_immediately_)
    result.Set("runImmediately", internal::ToValue(run_immediately_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<AddScriptToEvaluateOnNewDocumentParams> AddScriptToEvaluateOnNewDocumentParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AddScriptToEvaluateOnNewDocumentParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AddScriptToEvaluateOnNewDocumentResult> AddScriptToEvaluateOnNewDocumentResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AddScriptToEvaluateOnNewDocumentResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AddScriptToEvaluateOnNewDocumentResult> result(new AddScriptToEvaluateOnNewDocumentResult());
  errors->Push();
  errors->SetName("AddScriptToEvaluateOnNewDocumentResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* identifier_value = dict.Find("identifier");
  if (identifier_value) {
    errors->SetName("identifier");
    result->identifier_ = internal::FromValue<std::string>::Parse(*identifier_value, errors);
  } else {
    errors->AddError("required property missing: identifier");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AddScriptToEvaluateOnNewDocumentResult::Serialize() const {
  base::Value::Dict result;
  result.Set("identifier", internal::ToValue(identifier_));
  return base::Value(std::move(result));
}

std::unique_ptr<AddScriptToEvaluateOnNewDocumentResult> AddScriptToEvaluateOnNewDocumentResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AddScriptToEvaluateOnNewDocumentResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<BringToFrontParams> BringToFrontParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("BringToFrontParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<BringToFrontParams> result(new BringToFrontParams());
  errors->Push();
  errors->SetName("BringToFrontParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value BringToFrontParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<BringToFrontParams> BringToFrontParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<BringToFrontParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<BringToFrontResult> BringToFrontResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("BringToFrontResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<BringToFrontResult> result(new BringToFrontResult());
  errors->Push();
  errors->SetName("BringToFrontResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value BringToFrontResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<BringToFrontResult> BringToFrontResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<BringToFrontResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CaptureScreenshotParams> CaptureScreenshotParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CaptureScreenshotParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CaptureScreenshotParams> result(new CaptureScreenshotParams());
  errors->Push();
  errors->SetName("CaptureScreenshotParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* format_value = dict.Find("format");
  if (format_value) {
    errors->SetName("format");
    result->format_ = internal::FromValue<::headless::page::CaptureScreenshotFormat>::Parse(*format_value, errors);
  }
  const base::Value* quality_value = dict.Find("quality");
  if (quality_value) {
    errors->SetName("quality");
    result->quality_ = internal::FromValue<int>::Parse(*quality_value, errors);
  }
  const base::Value* clip_value = dict.Find("clip");
  if (clip_value) {
    errors->SetName("clip");
    result->clip_ = internal::FromValue<::headless::page::Viewport>::Parse(*clip_value, errors);
  }
  const base::Value* from_surface_value = dict.Find("fromSurface");
  if (from_surface_value) {
    errors->SetName("fromSurface");
    result->from_surface_ = internal::FromValue<bool>::Parse(*from_surface_value, errors);
  }
  const base::Value* capture_beyond_viewport_value = dict.Find("captureBeyondViewport");
  if (capture_beyond_viewport_value) {
    errors->SetName("captureBeyondViewport");
    result->capture_beyond_viewport_ = internal::FromValue<bool>::Parse(*capture_beyond_viewport_value, errors);
  }
  const base::Value* optimize_for_speed_value = dict.Find("optimizeForSpeed");
  if (optimize_for_speed_value) {
    errors->SetName("optimizeForSpeed");
    result->optimize_for_speed_ = internal::FromValue<bool>::Parse(*optimize_for_speed_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CaptureScreenshotParams::Serialize() const {
  base::Value::Dict result;
  if (format_)
    result.Set("format", internal::ToValue(format_.value()));
  if (quality_)
    result.Set("quality", internal::ToValue(quality_.value()));
  if (clip_)
    result.Set("clip", internal::ToValue(*clip_.value()));
  if (from_surface_)
    result.Set("fromSurface", internal::ToValue(from_surface_.value()));
  if (capture_beyond_viewport_)
    result.Set("captureBeyondViewport", internal::ToValue(capture_beyond_viewport_.value()));
  if (optimize_for_speed_)
    result.Set("optimizeForSpeed", internal::ToValue(optimize_for_speed_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<CaptureScreenshotParams> CaptureScreenshotParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CaptureScreenshotParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CaptureScreenshotResult> CaptureScreenshotResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CaptureScreenshotResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CaptureScreenshotResult> result(new CaptureScreenshotResult());
  errors->Push();
  errors->SetName("CaptureScreenshotResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* data_value = dict.Find("data");
  if (data_value) {
    errors->SetName("data");
    result->data_ = internal::FromValue<protocol::Binary>::Parse(*data_value, errors);
  } else {
    errors->AddError("required property missing: data");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CaptureScreenshotResult::Serialize() const {
  base::Value::Dict result;
  result.Set("data", internal::ToValue(data_));
  return base::Value(std::move(result));
}

std::unique_ptr<CaptureScreenshotResult> CaptureScreenshotResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CaptureScreenshotResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CaptureSnapshotParams> CaptureSnapshotParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CaptureSnapshotParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CaptureSnapshotParams> result(new CaptureSnapshotParams());
  errors->Push();
  errors->SetName("CaptureSnapshotParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* format_value = dict.Find("format");
  if (format_value) {
    errors->SetName("format");
    result->format_ = internal::FromValue<::headless::page::CaptureSnapshotFormat>::Parse(*format_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CaptureSnapshotParams::Serialize() const {
  base::Value::Dict result;
  if (format_)
    result.Set("format", internal::ToValue(format_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<CaptureSnapshotParams> CaptureSnapshotParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CaptureSnapshotParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CaptureSnapshotResult> CaptureSnapshotResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CaptureSnapshotResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CaptureSnapshotResult> result(new CaptureSnapshotResult());
  errors->Push();
  errors->SetName("CaptureSnapshotResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* data_value = dict.Find("data");
  if (data_value) {
    errors->SetName("data");
    result->data_ = internal::FromValue<std::string>::Parse(*data_value, errors);
  } else {
    errors->AddError("required property missing: data");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CaptureSnapshotResult::Serialize() const {
  base::Value::Dict result;
  result.Set("data", internal::ToValue(data_));
  return base::Value(std::move(result));
}

std::unique_ptr<CaptureSnapshotResult> CaptureSnapshotResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CaptureSnapshotResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearDeviceMetricsOverrideParams> ClearDeviceMetricsOverrideParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearDeviceMetricsOverrideParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearDeviceMetricsOverrideParams> result(new ClearDeviceMetricsOverrideParams());
  errors->Push();
  errors->SetName("ClearDeviceMetricsOverrideParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearDeviceMetricsOverrideParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ClearDeviceMetricsOverrideParams> ClearDeviceMetricsOverrideParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearDeviceMetricsOverrideParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearDeviceMetricsOverrideResult> ClearDeviceMetricsOverrideResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearDeviceMetricsOverrideResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearDeviceMetricsOverrideResult> result(new ClearDeviceMetricsOverrideResult());
  errors->Push();
  errors->SetName("ClearDeviceMetricsOverrideResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearDeviceMetricsOverrideResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ClearDeviceMetricsOverrideResult> ClearDeviceMetricsOverrideResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearDeviceMetricsOverrideResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearDeviceOrientationOverrideParams> ClearDeviceOrientationOverrideParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearDeviceOrientationOverrideParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearDeviceOrientationOverrideParams> result(new ClearDeviceOrientationOverrideParams());
  errors->Push();
  errors->SetName("ClearDeviceOrientationOverrideParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearDeviceOrientationOverrideParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ClearDeviceOrientationOverrideParams> ClearDeviceOrientationOverrideParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearDeviceOrientationOverrideParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearDeviceOrientationOverrideResult> ClearDeviceOrientationOverrideResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearDeviceOrientationOverrideResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearDeviceOrientationOverrideResult> result(new ClearDeviceOrientationOverrideResult());
  errors->Push();
  errors->SetName("ClearDeviceOrientationOverrideResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearDeviceOrientationOverrideResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ClearDeviceOrientationOverrideResult> ClearDeviceOrientationOverrideResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearDeviceOrientationOverrideResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearGeolocationOverrideParams> ClearGeolocationOverrideParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearGeolocationOverrideParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearGeolocationOverrideParams> result(new ClearGeolocationOverrideParams());
  errors->Push();
  errors->SetName("ClearGeolocationOverrideParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearGeolocationOverrideParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ClearGeolocationOverrideParams> ClearGeolocationOverrideParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearGeolocationOverrideParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearGeolocationOverrideResult> ClearGeolocationOverrideResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearGeolocationOverrideResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearGeolocationOverrideResult> result(new ClearGeolocationOverrideResult());
  errors->Push();
  errors->SetName("ClearGeolocationOverrideResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearGeolocationOverrideResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ClearGeolocationOverrideResult> ClearGeolocationOverrideResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearGeolocationOverrideResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CreateIsolatedWorldParams> CreateIsolatedWorldParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CreateIsolatedWorldParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CreateIsolatedWorldParams> result(new CreateIsolatedWorldParams());
  errors->Push();
  errors->SetName("CreateIsolatedWorldParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  } else {
    errors->AddError("required property missing: frameId");
  }
  const base::Value* world_name_value = dict.Find("worldName");
  if (world_name_value) {
    errors->SetName("worldName");
    result->world_name_ = internal::FromValue<std::string>::Parse(*world_name_value, errors);
  }
  const base::Value* grant_univeral_access_value = dict.Find("grantUniveralAccess");
  if (grant_univeral_access_value) {
    errors->SetName("grantUniveralAccess");
    result->grant_univeral_access_ = internal::FromValue<bool>::Parse(*grant_univeral_access_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CreateIsolatedWorldParams::Serialize() const {
  base::Value::Dict result;
  result.Set("frameId", internal::ToValue(frame_id_));
  if (world_name_)
    result.Set("worldName", internal::ToValue(world_name_.value()));
  if (grant_univeral_access_)
    result.Set("grantUniveralAccess", internal::ToValue(grant_univeral_access_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<CreateIsolatedWorldParams> CreateIsolatedWorldParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CreateIsolatedWorldParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CreateIsolatedWorldResult> CreateIsolatedWorldResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CreateIsolatedWorldResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CreateIsolatedWorldResult> result(new CreateIsolatedWorldResult());
  errors->Push();
  errors->SetName("CreateIsolatedWorldResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* execution_context_id_value = dict.Find("executionContextId");
  if (execution_context_id_value) {
    errors->SetName("executionContextId");
    result->execution_context_id_ = internal::FromValue<int>::Parse(*execution_context_id_value, errors);
  } else {
    errors->AddError("required property missing: executionContextId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CreateIsolatedWorldResult::Serialize() const {
  base::Value::Dict result;
  result.Set("executionContextId", internal::ToValue(execution_context_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<CreateIsolatedWorldResult> CreateIsolatedWorldResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CreateIsolatedWorldResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DeleteCookieParams> DeleteCookieParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DeleteCookieParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DeleteCookieParams> result(new DeleteCookieParams());
  errors->Push();
  errors->SetName("DeleteCookieParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* cookie_name_value = dict.Find("cookieName");
  if (cookie_name_value) {
    errors->SetName("cookieName");
    result->cookie_name_ = internal::FromValue<std::string>::Parse(*cookie_name_value, errors);
  } else {
    errors->AddError("required property missing: cookieName");
  }
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DeleteCookieParams::Serialize() const {
  base::Value::Dict result;
  result.Set("cookieName", internal::ToValue(cookie_name_));
  result.Set("url", internal::ToValue(url_));
  return base::Value(std::move(result));
}

std::unique_ptr<DeleteCookieParams> DeleteCookieParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DeleteCookieParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DeleteCookieResult> DeleteCookieResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DeleteCookieResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DeleteCookieResult> result(new DeleteCookieResult());
  errors->Push();
  errors->SetName("DeleteCookieResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DeleteCookieResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<DeleteCookieResult> DeleteCookieResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DeleteCookieResult> result = Parse(Serialize(), &errors);
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


std::unique_ptr<GetAppManifestParams> GetAppManifestParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetAppManifestParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetAppManifestParams> result(new GetAppManifestParams());
  errors->Push();
  errors->SetName("GetAppManifestParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetAppManifestParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<GetAppManifestParams> GetAppManifestParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetAppManifestParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetAppManifestResult> GetAppManifestResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetAppManifestResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetAppManifestResult> result(new GetAppManifestResult());
  errors->Push();
  errors->SetName("GetAppManifestResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  const base::Value* errors_value = dict.Find("errors");
  if (errors_value) {
    errors->SetName("errors");
    result->errors_ = internal::FromValue<std::vector<std::unique_ptr<::headless::page::AppManifestError>>>::Parse(*errors_value, errors);
  } else {
    errors->AddError("required property missing: errors");
  }
  const base::Value* data_value = dict.Find("data");
  if (data_value) {
    errors->SetName("data");
    result->data_ = internal::FromValue<std::string>::Parse(*data_value, errors);
  }
  const base::Value* parsed_value = dict.Find("parsed");
  if (parsed_value) {
    errors->SetName("parsed");
    result->parsed_ = internal::FromValue<::headless::page::AppManifestParsedProperties>::Parse(*parsed_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetAppManifestResult::Serialize() const {
  base::Value::Dict result;
  result.Set("url", internal::ToValue(url_));
  result.Set("errors", internal::ToValue(errors_));
  if (data_)
    result.Set("data", internal::ToValue(data_.value()));
  if (parsed_)
    result.Set("parsed", internal::ToValue(*parsed_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<GetAppManifestResult> GetAppManifestResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetAppManifestResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetInstallabilityErrorsParams> GetInstallabilityErrorsParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetInstallabilityErrorsParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetInstallabilityErrorsParams> result(new GetInstallabilityErrorsParams());
  errors->Push();
  errors->SetName("GetInstallabilityErrorsParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetInstallabilityErrorsParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<GetInstallabilityErrorsParams> GetInstallabilityErrorsParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetInstallabilityErrorsParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetInstallabilityErrorsResult> GetInstallabilityErrorsResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetInstallabilityErrorsResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetInstallabilityErrorsResult> result(new GetInstallabilityErrorsResult());
  errors->Push();
  errors->SetName("GetInstallabilityErrorsResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* installability_errors_value = dict.Find("installabilityErrors");
  if (installability_errors_value) {
    errors->SetName("installabilityErrors");
    result->installability_errors_ = internal::FromValue<std::vector<std::unique_ptr<::headless::page::InstallabilityError>>>::Parse(*installability_errors_value, errors);
  } else {
    errors->AddError("required property missing: installabilityErrors");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetInstallabilityErrorsResult::Serialize() const {
  base::Value::Dict result;
  result.Set("installabilityErrors", internal::ToValue(installability_errors_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetInstallabilityErrorsResult> GetInstallabilityErrorsResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetInstallabilityErrorsResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetManifestIconsParams> GetManifestIconsParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetManifestIconsParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetManifestIconsParams> result(new GetManifestIconsParams());
  errors->Push();
  errors->SetName("GetManifestIconsParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetManifestIconsParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<GetManifestIconsParams> GetManifestIconsParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetManifestIconsParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetManifestIconsResult> GetManifestIconsResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetManifestIconsResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetManifestIconsResult> result(new GetManifestIconsResult());
  errors->Push();
  errors->SetName("GetManifestIconsResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* primary_icon_value = dict.Find("primaryIcon");
  if (primary_icon_value) {
    errors->SetName("primaryIcon");
    result->primary_icon_ = internal::FromValue<protocol::Binary>::Parse(*primary_icon_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetManifestIconsResult::Serialize() const {
  base::Value::Dict result;
  if (primary_icon_)
    result.Set("primaryIcon", internal::ToValue(primary_icon_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<GetManifestIconsResult> GetManifestIconsResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetManifestIconsResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetAppIdParams> GetAppIdParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetAppIdParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetAppIdParams> result(new GetAppIdParams());
  errors->Push();
  errors->SetName("GetAppIdParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetAppIdParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<GetAppIdParams> GetAppIdParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetAppIdParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetAppIdResult> GetAppIdResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetAppIdResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetAppIdResult> result(new GetAppIdResult());
  errors->Push();
  errors->SetName("GetAppIdResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* app_id_value = dict.Find("appId");
  if (app_id_value) {
    errors->SetName("appId");
    result->app_id_ = internal::FromValue<std::string>::Parse(*app_id_value, errors);
  }
  const base::Value* recommended_id_value = dict.Find("recommendedId");
  if (recommended_id_value) {
    errors->SetName("recommendedId");
    result->recommended_id_ = internal::FromValue<std::string>::Parse(*recommended_id_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetAppIdResult::Serialize() const {
  base::Value::Dict result;
  if (app_id_)
    result.Set("appId", internal::ToValue(app_id_.value()));
  if (recommended_id_)
    result.Set("recommendedId", internal::ToValue(recommended_id_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<GetAppIdResult> GetAppIdResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetAppIdResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetAdScriptIdParams> GetAdScriptIdParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetAdScriptIdParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetAdScriptIdParams> result(new GetAdScriptIdParams());
  errors->Push();
  errors->SetName("GetAdScriptIdParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  } else {
    errors->AddError("required property missing: frameId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetAdScriptIdParams::Serialize() const {
  base::Value::Dict result;
  result.Set("frameId", internal::ToValue(frame_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetAdScriptIdParams> GetAdScriptIdParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetAdScriptIdParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetAdScriptIdResult> GetAdScriptIdResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetAdScriptIdResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetAdScriptIdResult> result(new GetAdScriptIdResult());
  errors->Push();
  errors->SetName("GetAdScriptIdResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* ad_script_id_value = dict.Find("adScriptId");
  if (ad_script_id_value) {
    errors->SetName("adScriptId");
    result->ad_script_id_ = internal::FromValue<::headless::page::AdScriptId>::Parse(*ad_script_id_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetAdScriptIdResult::Serialize() const {
  base::Value::Dict result;
  if (ad_script_id_)
    result.Set("adScriptId", internal::ToValue(*ad_script_id_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<GetAdScriptIdResult> GetAdScriptIdResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetAdScriptIdResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetCookiesParams> GetCookiesParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetCookiesParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetCookiesParams> result(new GetCookiesParams());
  errors->Push();
  errors->SetName("GetCookiesParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetCookiesParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<GetCookiesParams> GetCookiesParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetCookiesParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetCookiesResult> GetCookiesResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetCookiesResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetCookiesResult> result(new GetCookiesResult());
  errors->Push();
  errors->SetName("GetCookiesResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* cookies_value = dict.Find("cookies");
  if (cookies_value) {
    errors->SetName("cookies");
    result->cookies_ = internal::FromValue<std::vector<std::unique_ptr<::headless::network::Cookie>>>::Parse(*cookies_value, errors);
  } else {
    errors->AddError("required property missing: cookies");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetCookiesResult::Serialize() const {
  base::Value::Dict result;
  result.Set("cookies", internal::ToValue(cookies_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetCookiesResult> GetCookiesResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetCookiesResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetFrameTreeParams> GetFrameTreeParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetFrameTreeParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetFrameTreeParams> result(new GetFrameTreeParams());
  errors->Push();
  errors->SetName("GetFrameTreeParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetFrameTreeParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<GetFrameTreeParams> GetFrameTreeParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetFrameTreeParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetFrameTreeResult> GetFrameTreeResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetFrameTreeResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetFrameTreeResult> result(new GetFrameTreeResult());
  errors->Push();
  errors->SetName("GetFrameTreeResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_tree_value = dict.Find("frameTree");
  if (frame_tree_value) {
    errors->SetName("frameTree");
    result->frame_tree_ = internal::FromValue<::headless::page::FrameTree>::Parse(*frame_tree_value, errors);
  } else {
    errors->AddError("required property missing: frameTree");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetFrameTreeResult::Serialize() const {
  base::Value::Dict result;
  result.Set("frameTree", internal::ToValue(*frame_tree_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetFrameTreeResult> GetFrameTreeResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetFrameTreeResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetLayoutMetricsParams> GetLayoutMetricsParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetLayoutMetricsParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetLayoutMetricsParams> result(new GetLayoutMetricsParams());
  errors->Push();
  errors->SetName("GetLayoutMetricsParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetLayoutMetricsParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<GetLayoutMetricsParams> GetLayoutMetricsParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetLayoutMetricsParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetLayoutMetricsResult> GetLayoutMetricsResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetLayoutMetricsResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetLayoutMetricsResult> result(new GetLayoutMetricsResult());
  errors->Push();
  errors->SetName("GetLayoutMetricsResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* layout_viewport_value = dict.Find("layoutViewport");
  if (layout_viewport_value) {
    errors->SetName("layoutViewport");
    result->layout_viewport_ = internal::FromValue<::headless::page::LayoutViewport>::Parse(*layout_viewport_value, errors);
  } else {
    errors->AddError("required property missing: layoutViewport");
  }
  const base::Value* visual_viewport_value = dict.Find("visualViewport");
  if (visual_viewport_value) {
    errors->SetName("visualViewport");
    result->visual_viewport_ = internal::FromValue<::headless::page::VisualViewport>::Parse(*visual_viewport_value, errors);
  } else {
    errors->AddError("required property missing: visualViewport");
  }
  const base::Value* content_size_value = dict.Find("contentSize");
  if (content_size_value) {
    errors->SetName("contentSize");
    result->content_size_ = internal::FromValue<::headless::dom::Rect>::Parse(*content_size_value, errors);
  } else {
    errors->AddError("required property missing: contentSize");
  }
  const base::Value* css_layout_viewport_value = dict.Find("cssLayoutViewport");
  if (css_layout_viewport_value) {
    errors->SetName("cssLayoutViewport");
    result->css_layout_viewport_ = internal::FromValue<::headless::page::LayoutViewport>::Parse(*css_layout_viewport_value, errors);
  } else {
    errors->AddError("required property missing: cssLayoutViewport");
  }
  const base::Value* css_visual_viewport_value = dict.Find("cssVisualViewport");
  if (css_visual_viewport_value) {
    errors->SetName("cssVisualViewport");
    result->css_visual_viewport_ = internal::FromValue<::headless::page::VisualViewport>::Parse(*css_visual_viewport_value, errors);
  } else {
    errors->AddError("required property missing: cssVisualViewport");
  }
  const base::Value* css_content_size_value = dict.Find("cssContentSize");
  if (css_content_size_value) {
    errors->SetName("cssContentSize");
    result->css_content_size_ = internal::FromValue<::headless::dom::Rect>::Parse(*css_content_size_value, errors);
  } else {
    errors->AddError("required property missing: cssContentSize");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetLayoutMetricsResult::Serialize() const {
  base::Value::Dict result;
  result.Set("layoutViewport", internal::ToValue(*layout_viewport_));
  result.Set("visualViewport", internal::ToValue(*visual_viewport_));
  result.Set("contentSize", internal::ToValue(*content_size_));
  result.Set("cssLayoutViewport", internal::ToValue(*css_layout_viewport_));
  result.Set("cssVisualViewport", internal::ToValue(*css_visual_viewport_));
  result.Set("cssContentSize", internal::ToValue(*css_content_size_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetLayoutMetricsResult> GetLayoutMetricsResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetLayoutMetricsResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetNavigationHistoryParams> GetNavigationHistoryParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetNavigationHistoryParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetNavigationHistoryParams> result(new GetNavigationHistoryParams());
  errors->Push();
  errors->SetName("GetNavigationHistoryParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetNavigationHistoryParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<GetNavigationHistoryParams> GetNavigationHistoryParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetNavigationHistoryParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetNavigationHistoryResult> GetNavigationHistoryResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetNavigationHistoryResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetNavigationHistoryResult> result(new GetNavigationHistoryResult());
  errors->Push();
  errors->SetName("GetNavigationHistoryResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* current_index_value = dict.Find("currentIndex");
  if (current_index_value) {
    errors->SetName("currentIndex");
    result->current_index_ = internal::FromValue<int>::Parse(*current_index_value, errors);
  } else {
    errors->AddError("required property missing: currentIndex");
  }
  const base::Value* entries_value = dict.Find("entries");
  if (entries_value) {
    errors->SetName("entries");
    result->entries_ = internal::FromValue<std::vector<std::unique_ptr<::headless::page::NavigationEntry>>>::Parse(*entries_value, errors);
  } else {
    errors->AddError("required property missing: entries");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetNavigationHistoryResult::Serialize() const {
  base::Value::Dict result;
  result.Set("currentIndex", internal::ToValue(current_index_));
  result.Set("entries", internal::ToValue(entries_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetNavigationHistoryResult> GetNavigationHistoryResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetNavigationHistoryResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ResetNavigationHistoryParams> ResetNavigationHistoryParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ResetNavigationHistoryParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ResetNavigationHistoryParams> result(new ResetNavigationHistoryParams());
  errors->Push();
  errors->SetName("ResetNavigationHistoryParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ResetNavigationHistoryParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ResetNavigationHistoryParams> ResetNavigationHistoryParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ResetNavigationHistoryParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ResetNavigationHistoryResult> ResetNavigationHistoryResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ResetNavigationHistoryResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ResetNavigationHistoryResult> result(new ResetNavigationHistoryResult());
  errors->Push();
  errors->SetName("ResetNavigationHistoryResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ResetNavigationHistoryResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ResetNavigationHistoryResult> ResetNavigationHistoryResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ResetNavigationHistoryResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetResourceContentParams> GetResourceContentParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetResourceContentParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetResourceContentParams> result(new GetResourceContentParams());
  errors->Push();
  errors->SetName("GetResourceContentParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  } else {
    errors->AddError("required property missing: frameId");
  }
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetResourceContentParams::Serialize() const {
  base::Value::Dict result;
  result.Set("frameId", internal::ToValue(frame_id_));
  result.Set("url", internal::ToValue(url_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetResourceContentParams> GetResourceContentParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetResourceContentParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetResourceContentResult> GetResourceContentResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetResourceContentResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetResourceContentResult> result(new GetResourceContentResult());
  errors->Push();
  errors->SetName("GetResourceContentResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* content_value = dict.Find("content");
  if (content_value) {
    errors->SetName("content");
    result->content_ = internal::FromValue<std::string>::Parse(*content_value, errors);
  } else {
    errors->AddError("required property missing: content");
  }
  const base::Value* base64_encoded_value = dict.Find("base64Encoded");
  if (base64_encoded_value) {
    errors->SetName("base64Encoded");
    result->base64_encoded_ = internal::FromValue<bool>::Parse(*base64_encoded_value, errors);
  } else {
    errors->AddError("required property missing: base64Encoded");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetResourceContentResult::Serialize() const {
  base::Value::Dict result;
  result.Set("content", internal::ToValue(content_));
  result.Set("base64Encoded", internal::ToValue(base64_encoded_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetResourceContentResult> GetResourceContentResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetResourceContentResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetResourceTreeParams> GetResourceTreeParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetResourceTreeParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetResourceTreeParams> result(new GetResourceTreeParams());
  errors->Push();
  errors->SetName("GetResourceTreeParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetResourceTreeParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<GetResourceTreeParams> GetResourceTreeParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetResourceTreeParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetResourceTreeResult> GetResourceTreeResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetResourceTreeResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetResourceTreeResult> result(new GetResourceTreeResult());
  errors->Push();
  errors->SetName("GetResourceTreeResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_tree_value = dict.Find("frameTree");
  if (frame_tree_value) {
    errors->SetName("frameTree");
    result->frame_tree_ = internal::FromValue<::headless::page::FrameResourceTree>::Parse(*frame_tree_value, errors);
  } else {
    errors->AddError("required property missing: frameTree");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetResourceTreeResult::Serialize() const {
  base::Value::Dict result;
  result.Set("frameTree", internal::ToValue(*frame_tree_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetResourceTreeResult> GetResourceTreeResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetResourceTreeResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<HandleJavaScriptDialogParams> HandleJavaScriptDialogParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("HandleJavaScriptDialogParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<HandleJavaScriptDialogParams> result(new HandleJavaScriptDialogParams());
  errors->Push();
  errors->SetName("HandleJavaScriptDialogParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* accept_value = dict.Find("accept");
  if (accept_value) {
    errors->SetName("accept");
    result->accept_ = internal::FromValue<bool>::Parse(*accept_value, errors);
  } else {
    errors->AddError("required property missing: accept");
  }
  const base::Value* prompt_text_value = dict.Find("promptText");
  if (prompt_text_value) {
    errors->SetName("promptText");
    result->prompt_text_ = internal::FromValue<std::string>::Parse(*prompt_text_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value HandleJavaScriptDialogParams::Serialize() const {
  base::Value::Dict result;
  result.Set("accept", internal::ToValue(accept_));
  if (prompt_text_)
    result.Set("promptText", internal::ToValue(prompt_text_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<HandleJavaScriptDialogParams> HandleJavaScriptDialogParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<HandleJavaScriptDialogParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<HandleJavaScriptDialogResult> HandleJavaScriptDialogResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("HandleJavaScriptDialogResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<HandleJavaScriptDialogResult> result(new HandleJavaScriptDialogResult());
  errors->Push();
  errors->SetName("HandleJavaScriptDialogResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value HandleJavaScriptDialogResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<HandleJavaScriptDialogResult> HandleJavaScriptDialogResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<HandleJavaScriptDialogResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<NavigateParams> NavigateParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("NavigateParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<NavigateParams> result(new NavigateParams());
  errors->Push();
  errors->SetName("NavigateParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  const base::Value* referrer_value = dict.Find("referrer");
  if (referrer_value) {
    errors->SetName("referrer");
    result->referrer_ = internal::FromValue<std::string>::Parse(*referrer_value, errors);
  }
  const base::Value* transition_type_value = dict.Find("transitionType");
  if (transition_type_value) {
    errors->SetName("transitionType");
    result->transition_type_ = internal::FromValue<::headless::page::TransitionType>::Parse(*transition_type_value, errors);
  }
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  }
  const base::Value* referrer_policy_value = dict.Find("referrerPolicy");
  if (referrer_policy_value) {
    errors->SetName("referrerPolicy");
    result->referrer_policy_ = internal::FromValue<::headless::page::ReferrerPolicy>::Parse(*referrer_policy_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value NavigateParams::Serialize() const {
  base::Value::Dict result;
  result.Set("url", internal::ToValue(url_));
  if (referrer_)
    result.Set("referrer", internal::ToValue(referrer_.value()));
  if (transition_type_)
    result.Set("transitionType", internal::ToValue(transition_type_.value()));
  if (frame_id_)
    result.Set("frameId", internal::ToValue(frame_id_.value()));
  if (referrer_policy_)
    result.Set("referrerPolicy", internal::ToValue(referrer_policy_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<NavigateParams> NavigateParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<NavigateParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<NavigateResult> NavigateResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("NavigateResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<NavigateResult> result(new NavigateResult());
  errors->Push();
  errors->SetName("NavigateResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  } else {
    errors->AddError("required property missing: frameId");
  }
  const base::Value* loader_id_value = dict.Find("loaderId");
  if (loader_id_value) {
    errors->SetName("loaderId");
    result->loader_id_ = internal::FromValue<std::string>::Parse(*loader_id_value, errors);
  }
  const base::Value* error_text_value = dict.Find("errorText");
  if (error_text_value) {
    errors->SetName("errorText");
    result->error_text_ = internal::FromValue<std::string>::Parse(*error_text_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value NavigateResult::Serialize() const {
  base::Value::Dict result;
  result.Set("frameId", internal::ToValue(frame_id_));
  if (loader_id_)
    result.Set("loaderId", internal::ToValue(loader_id_.value()));
  if (error_text_)
    result.Set("errorText", internal::ToValue(error_text_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<NavigateResult> NavigateResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<NavigateResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<NavigateToHistoryEntryParams> NavigateToHistoryEntryParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("NavigateToHistoryEntryParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<NavigateToHistoryEntryParams> result(new NavigateToHistoryEntryParams());
  errors->Push();
  errors->SetName("NavigateToHistoryEntryParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* entry_id_value = dict.Find("entryId");
  if (entry_id_value) {
    errors->SetName("entryId");
    result->entry_id_ = internal::FromValue<int>::Parse(*entry_id_value, errors);
  } else {
    errors->AddError("required property missing: entryId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value NavigateToHistoryEntryParams::Serialize() const {
  base::Value::Dict result;
  result.Set("entryId", internal::ToValue(entry_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<NavigateToHistoryEntryParams> NavigateToHistoryEntryParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<NavigateToHistoryEntryParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<NavigateToHistoryEntryResult> NavigateToHistoryEntryResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("NavigateToHistoryEntryResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<NavigateToHistoryEntryResult> result(new NavigateToHistoryEntryResult());
  errors->Push();
  errors->SetName("NavigateToHistoryEntryResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value NavigateToHistoryEntryResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<NavigateToHistoryEntryResult> NavigateToHistoryEntryResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<NavigateToHistoryEntryResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PrintToPDFParams> PrintToPDFParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PrintToPDFParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PrintToPDFParams> result(new PrintToPDFParams());
  errors->Push();
  errors->SetName("PrintToPDFParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* landscape_value = dict.Find("landscape");
  if (landscape_value) {
    errors->SetName("landscape");
    result->landscape_ = internal::FromValue<bool>::Parse(*landscape_value, errors);
  }
  const base::Value* display_header_footer_value = dict.Find("displayHeaderFooter");
  if (display_header_footer_value) {
    errors->SetName("displayHeaderFooter");
    result->display_header_footer_ = internal::FromValue<bool>::Parse(*display_header_footer_value, errors);
  }
  const base::Value* print_background_value = dict.Find("printBackground");
  if (print_background_value) {
    errors->SetName("printBackground");
    result->print_background_ = internal::FromValue<bool>::Parse(*print_background_value, errors);
  }
  const base::Value* scale_value = dict.Find("scale");
  if (scale_value) {
    errors->SetName("scale");
    result->scale_ = internal::FromValue<double>::Parse(*scale_value, errors);
  }
  const base::Value* paper_width_value = dict.Find("paperWidth");
  if (paper_width_value) {
    errors->SetName("paperWidth");
    result->paper_width_ = internal::FromValue<double>::Parse(*paper_width_value, errors);
  }
  const base::Value* paper_height_value = dict.Find("paperHeight");
  if (paper_height_value) {
    errors->SetName("paperHeight");
    result->paper_height_ = internal::FromValue<double>::Parse(*paper_height_value, errors);
  }
  const base::Value* margin_top_value = dict.Find("marginTop");
  if (margin_top_value) {
    errors->SetName("marginTop");
    result->margin_top_ = internal::FromValue<double>::Parse(*margin_top_value, errors);
  }
  const base::Value* margin_bottom_value = dict.Find("marginBottom");
  if (margin_bottom_value) {
    errors->SetName("marginBottom");
    result->margin_bottom_ = internal::FromValue<double>::Parse(*margin_bottom_value, errors);
  }
  const base::Value* margin_left_value = dict.Find("marginLeft");
  if (margin_left_value) {
    errors->SetName("marginLeft");
    result->margin_left_ = internal::FromValue<double>::Parse(*margin_left_value, errors);
  }
  const base::Value* margin_right_value = dict.Find("marginRight");
  if (margin_right_value) {
    errors->SetName("marginRight");
    result->margin_right_ = internal::FromValue<double>::Parse(*margin_right_value, errors);
  }
  const base::Value* page_ranges_value = dict.Find("pageRanges");
  if (page_ranges_value) {
    errors->SetName("pageRanges");
    result->page_ranges_ = internal::FromValue<std::string>::Parse(*page_ranges_value, errors);
  }
  const base::Value* header_template_value = dict.Find("headerTemplate");
  if (header_template_value) {
    errors->SetName("headerTemplate");
    result->header_template_ = internal::FromValue<std::string>::Parse(*header_template_value, errors);
  }
  const base::Value* footer_template_value = dict.Find("footerTemplate");
  if (footer_template_value) {
    errors->SetName("footerTemplate");
    result->footer_template_ = internal::FromValue<std::string>::Parse(*footer_template_value, errors);
  }
  const base::Value* prefercss_page_size_value = dict.Find("preferCSSPageSize");
  if (prefercss_page_size_value) {
    errors->SetName("preferCSSPageSize");
    result->prefercss_page_size_ = internal::FromValue<bool>::Parse(*prefercss_page_size_value, errors);
  }
  const base::Value* transfer_mode_value = dict.Find("transferMode");
  if (transfer_mode_value) {
    errors->SetName("transferMode");
    result->transfer_mode_ = internal::FromValue<::headless::page::PrintToPDFTransferMode>::Parse(*transfer_mode_value, errors);
  }
  const base::Value* generate_taggedpdf_value = dict.Find("generateTaggedPDF");
  if (generate_taggedpdf_value) {
    errors->SetName("generateTaggedPDF");
    result->generate_taggedpdf_ = internal::FromValue<bool>::Parse(*generate_taggedpdf_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PrintToPDFParams::Serialize() const {
  base::Value::Dict result;
  if (landscape_)
    result.Set("landscape", internal::ToValue(landscape_.value()));
  if (display_header_footer_)
    result.Set("displayHeaderFooter", internal::ToValue(display_header_footer_.value()));
  if (print_background_)
    result.Set("printBackground", internal::ToValue(print_background_.value()));
  if (scale_)
    result.Set("scale", internal::ToValue(scale_.value()));
  if (paper_width_)
    result.Set("paperWidth", internal::ToValue(paper_width_.value()));
  if (paper_height_)
    result.Set("paperHeight", internal::ToValue(paper_height_.value()));
  if (margin_top_)
    result.Set("marginTop", internal::ToValue(margin_top_.value()));
  if (margin_bottom_)
    result.Set("marginBottom", internal::ToValue(margin_bottom_.value()));
  if (margin_left_)
    result.Set("marginLeft", internal::ToValue(margin_left_.value()));
  if (margin_right_)
    result.Set("marginRight", internal::ToValue(margin_right_.value()));
  if (page_ranges_)
    result.Set("pageRanges", internal::ToValue(page_ranges_.value()));
  if (header_template_)
    result.Set("headerTemplate", internal::ToValue(header_template_.value()));
  if (footer_template_)
    result.Set("footerTemplate", internal::ToValue(footer_template_.value()));
  if (prefercss_page_size_)
    result.Set("preferCSSPageSize", internal::ToValue(prefercss_page_size_.value()));
  if (transfer_mode_)
    result.Set("transferMode", internal::ToValue(transfer_mode_.value()));
  if (generate_taggedpdf_)
    result.Set("generateTaggedPDF", internal::ToValue(generate_taggedpdf_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<PrintToPDFParams> PrintToPDFParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PrintToPDFParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PrintToPDFResult> PrintToPDFResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PrintToPDFResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PrintToPDFResult> result(new PrintToPDFResult());
  errors->Push();
  errors->SetName("PrintToPDFResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* data_value = dict.Find("data");
  if (data_value) {
    errors->SetName("data");
    result->data_ = internal::FromValue<protocol::Binary>::Parse(*data_value, errors);
  } else {
    errors->AddError("required property missing: data");
  }
  const base::Value* stream_value = dict.Find("stream");
  if (stream_value) {
    errors->SetName("stream");
    result->stream_ = internal::FromValue<std::string>::Parse(*stream_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PrintToPDFResult::Serialize() const {
  base::Value::Dict result;
  result.Set("data", internal::ToValue(data_));
  if (stream_)
    result.Set("stream", internal::ToValue(stream_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<PrintToPDFResult> PrintToPDFResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PrintToPDFResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ReloadParams> ReloadParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ReloadParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ReloadParams> result(new ReloadParams());
  errors->Push();
  errors->SetName("ReloadParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* ignore_cache_value = dict.Find("ignoreCache");
  if (ignore_cache_value) {
    errors->SetName("ignoreCache");
    result->ignore_cache_ = internal::FromValue<bool>::Parse(*ignore_cache_value, errors);
  }
  const base::Value* script_to_evaluate_on_load_value = dict.Find("scriptToEvaluateOnLoad");
  if (script_to_evaluate_on_load_value) {
    errors->SetName("scriptToEvaluateOnLoad");
    result->script_to_evaluate_on_load_ = internal::FromValue<std::string>::Parse(*script_to_evaluate_on_load_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ReloadParams::Serialize() const {
  base::Value::Dict result;
  if (ignore_cache_)
    result.Set("ignoreCache", internal::ToValue(ignore_cache_.value()));
  if (script_to_evaluate_on_load_)
    result.Set("scriptToEvaluateOnLoad", internal::ToValue(script_to_evaluate_on_load_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<ReloadParams> ReloadParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ReloadParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ReloadResult> ReloadResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ReloadResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ReloadResult> result(new ReloadResult());
  errors->Push();
  errors->SetName("ReloadResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ReloadResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ReloadResult> ReloadResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ReloadResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<RemoveScriptToEvaluateOnLoadParams> RemoveScriptToEvaluateOnLoadParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("RemoveScriptToEvaluateOnLoadParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<RemoveScriptToEvaluateOnLoadParams> result(new RemoveScriptToEvaluateOnLoadParams());
  errors->Push();
  errors->SetName("RemoveScriptToEvaluateOnLoadParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* identifier_value = dict.Find("identifier");
  if (identifier_value) {
    errors->SetName("identifier");
    result->identifier_ = internal::FromValue<std::string>::Parse(*identifier_value, errors);
  } else {
    errors->AddError("required property missing: identifier");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value RemoveScriptToEvaluateOnLoadParams::Serialize() const {
  base::Value::Dict result;
  result.Set("identifier", internal::ToValue(identifier_));
  return base::Value(std::move(result));
}

std::unique_ptr<RemoveScriptToEvaluateOnLoadParams> RemoveScriptToEvaluateOnLoadParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<RemoveScriptToEvaluateOnLoadParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<RemoveScriptToEvaluateOnLoadResult> RemoveScriptToEvaluateOnLoadResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("RemoveScriptToEvaluateOnLoadResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<RemoveScriptToEvaluateOnLoadResult> result(new RemoveScriptToEvaluateOnLoadResult());
  errors->Push();
  errors->SetName("RemoveScriptToEvaluateOnLoadResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value RemoveScriptToEvaluateOnLoadResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<RemoveScriptToEvaluateOnLoadResult> RemoveScriptToEvaluateOnLoadResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<RemoveScriptToEvaluateOnLoadResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<RemoveScriptToEvaluateOnNewDocumentParams> RemoveScriptToEvaluateOnNewDocumentParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("RemoveScriptToEvaluateOnNewDocumentParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<RemoveScriptToEvaluateOnNewDocumentParams> result(new RemoveScriptToEvaluateOnNewDocumentParams());
  errors->Push();
  errors->SetName("RemoveScriptToEvaluateOnNewDocumentParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* identifier_value = dict.Find("identifier");
  if (identifier_value) {
    errors->SetName("identifier");
    result->identifier_ = internal::FromValue<std::string>::Parse(*identifier_value, errors);
  } else {
    errors->AddError("required property missing: identifier");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value RemoveScriptToEvaluateOnNewDocumentParams::Serialize() const {
  base::Value::Dict result;
  result.Set("identifier", internal::ToValue(identifier_));
  return base::Value(std::move(result));
}

std::unique_ptr<RemoveScriptToEvaluateOnNewDocumentParams> RemoveScriptToEvaluateOnNewDocumentParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<RemoveScriptToEvaluateOnNewDocumentParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<RemoveScriptToEvaluateOnNewDocumentResult> RemoveScriptToEvaluateOnNewDocumentResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("RemoveScriptToEvaluateOnNewDocumentResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<RemoveScriptToEvaluateOnNewDocumentResult> result(new RemoveScriptToEvaluateOnNewDocumentResult());
  errors->Push();
  errors->SetName("RemoveScriptToEvaluateOnNewDocumentResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value RemoveScriptToEvaluateOnNewDocumentResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<RemoveScriptToEvaluateOnNewDocumentResult> RemoveScriptToEvaluateOnNewDocumentResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<RemoveScriptToEvaluateOnNewDocumentResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ScreencastFrameAckParams> ScreencastFrameAckParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ScreencastFrameAckParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ScreencastFrameAckParams> result(new ScreencastFrameAckParams());
  errors->Push();
  errors->SetName("ScreencastFrameAckParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* session_id_value = dict.Find("sessionId");
  if (session_id_value) {
    errors->SetName("sessionId");
    result->session_id_ = internal::FromValue<int>::Parse(*session_id_value, errors);
  } else {
    errors->AddError("required property missing: sessionId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ScreencastFrameAckParams::Serialize() const {
  base::Value::Dict result;
  result.Set("sessionId", internal::ToValue(session_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<ScreencastFrameAckParams> ScreencastFrameAckParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ScreencastFrameAckParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ScreencastFrameAckResult> ScreencastFrameAckResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ScreencastFrameAckResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ScreencastFrameAckResult> result(new ScreencastFrameAckResult());
  errors->Push();
  errors->SetName("ScreencastFrameAckResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ScreencastFrameAckResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ScreencastFrameAckResult> ScreencastFrameAckResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ScreencastFrameAckResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SearchInResourceParams> SearchInResourceParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SearchInResourceParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SearchInResourceParams> result(new SearchInResourceParams());
  errors->Push();
  errors->SetName("SearchInResourceParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  } else {
    errors->AddError("required property missing: frameId");
  }
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
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

base::Value SearchInResourceParams::Serialize() const {
  base::Value::Dict result;
  result.Set("frameId", internal::ToValue(frame_id_));
  result.Set("url", internal::ToValue(url_));
  result.Set("query", internal::ToValue(query_));
  if (case_sensitive_)
    result.Set("caseSensitive", internal::ToValue(case_sensitive_.value()));
  if (is_regex_)
    result.Set("isRegex", internal::ToValue(is_regex_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SearchInResourceParams> SearchInResourceParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SearchInResourceParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SearchInResourceResult> SearchInResourceResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SearchInResourceResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SearchInResourceResult> result(new SearchInResourceResult());
  errors->Push();
  errors->SetName("SearchInResourceResult");
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

base::Value SearchInResourceResult::Serialize() const {
  base::Value::Dict result;
  result.Set("result", internal::ToValue(result_));
  return base::Value(std::move(result));
}

std::unique_ptr<SearchInResourceResult> SearchInResourceResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SearchInResourceResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetAdBlockingEnabledParams> SetAdBlockingEnabledParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetAdBlockingEnabledParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetAdBlockingEnabledParams> result(new SetAdBlockingEnabledParams());
  errors->Push();
  errors->SetName("SetAdBlockingEnabledParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* enabled_value = dict.Find("enabled");
  if (enabled_value) {
    errors->SetName("enabled");
    result->enabled_ = internal::FromValue<bool>::Parse(*enabled_value, errors);
  } else {
    errors->AddError("required property missing: enabled");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetAdBlockingEnabledParams::Serialize() const {
  base::Value::Dict result;
  result.Set("enabled", internal::ToValue(enabled_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetAdBlockingEnabledParams> SetAdBlockingEnabledParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetAdBlockingEnabledParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetAdBlockingEnabledResult> SetAdBlockingEnabledResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetAdBlockingEnabledResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetAdBlockingEnabledResult> result(new SetAdBlockingEnabledResult());
  errors->Push();
  errors->SetName("SetAdBlockingEnabledResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetAdBlockingEnabledResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetAdBlockingEnabledResult> SetAdBlockingEnabledResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetAdBlockingEnabledResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetBypassCSPParams> SetBypassCSPParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetBypassCSPParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetBypassCSPParams> result(new SetBypassCSPParams());
  errors->Push();
  errors->SetName("SetBypassCSPParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* enabled_value = dict.Find("enabled");
  if (enabled_value) {
    errors->SetName("enabled");
    result->enabled_ = internal::FromValue<bool>::Parse(*enabled_value, errors);
  } else {
    errors->AddError("required property missing: enabled");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetBypassCSPParams::Serialize() const {
  base::Value::Dict result;
  result.Set("enabled", internal::ToValue(enabled_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetBypassCSPParams> SetBypassCSPParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetBypassCSPParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetBypassCSPResult> SetBypassCSPResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetBypassCSPResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetBypassCSPResult> result(new SetBypassCSPResult());
  errors->Push();
  errors->SetName("SetBypassCSPResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetBypassCSPResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetBypassCSPResult> SetBypassCSPResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetBypassCSPResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetPermissionsPolicyStateParams> GetPermissionsPolicyStateParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetPermissionsPolicyStateParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetPermissionsPolicyStateParams> result(new GetPermissionsPolicyStateParams());
  errors->Push();
  errors->SetName("GetPermissionsPolicyStateParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  } else {
    errors->AddError("required property missing: frameId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetPermissionsPolicyStateParams::Serialize() const {
  base::Value::Dict result;
  result.Set("frameId", internal::ToValue(frame_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetPermissionsPolicyStateParams> GetPermissionsPolicyStateParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetPermissionsPolicyStateParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetPermissionsPolicyStateResult> GetPermissionsPolicyStateResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetPermissionsPolicyStateResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetPermissionsPolicyStateResult> result(new GetPermissionsPolicyStateResult());
  errors->Push();
  errors->SetName("GetPermissionsPolicyStateResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* states_value = dict.Find("states");
  if (states_value) {
    errors->SetName("states");
    result->states_ = internal::FromValue<std::vector<std::unique_ptr<::headless::page::PermissionsPolicyFeatureState>>>::Parse(*states_value, errors);
  } else {
    errors->AddError("required property missing: states");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetPermissionsPolicyStateResult::Serialize() const {
  base::Value::Dict result;
  result.Set("states", internal::ToValue(states_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetPermissionsPolicyStateResult> GetPermissionsPolicyStateResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetPermissionsPolicyStateResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetOriginTrialsParams> GetOriginTrialsParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetOriginTrialsParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetOriginTrialsParams> result(new GetOriginTrialsParams());
  errors->Push();
  errors->SetName("GetOriginTrialsParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  } else {
    errors->AddError("required property missing: frameId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetOriginTrialsParams::Serialize() const {
  base::Value::Dict result;
  result.Set("frameId", internal::ToValue(frame_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetOriginTrialsParams> GetOriginTrialsParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetOriginTrialsParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetOriginTrialsResult> GetOriginTrialsResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetOriginTrialsResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetOriginTrialsResult> result(new GetOriginTrialsResult());
  errors->Push();
  errors->SetName("GetOriginTrialsResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* origin_trials_value = dict.Find("originTrials");
  if (origin_trials_value) {
    errors->SetName("originTrials");
    result->origin_trials_ = internal::FromValue<std::vector<std::unique_ptr<::headless::page::OriginTrial>>>::Parse(*origin_trials_value, errors);
  } else {
    errors->AddError("required property missing: originTrials");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetOriginTrialsResult::Serialize() const {
  base::Value::Dict result;
  result.Set("originTrials", internal::ToValue(origin_trials_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetOriginTrialsResult> GetOriginTrialsResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetOriginTrialsResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetDeviceMetricsOverrideParams> SetDeviceMetricsOverrideParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetDeviceMetricsOverrideParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetDeviceMetricsOverrideParams> result(new SetDeviceMetricsOverrideParams());
  errors->Push();
  errors->SetName("SetDeviceMetricsOverrideParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* width_value = dict.Find("width");
  if (width_value) {
    errors->SetName("width");
    result->width_ = internal::FromValue<int>::Parse(*width_value, errors);
  } else {
    errors->AddError("required property missing: width");
  }
  const base::Value* height_value = dict.Find("height");
  if (height_value) {
    errors->SetName("height");
    result->height_ = internal::FromValue<int>::Parse(*height_value, errors);
  } else {
    errors->AddError("required property missing: height");
  }
  const base::Value* device_scale_factor_value = dict.Find("deviceScaleFactor");
  if (device_scale_factor_value) {
    errors->SetName("deviceScaleFactor");
    result->device_scale_factor_ = internal::FromValue<double>::Parse(*device_scale_factor_value, errors);
  } else {
    errors->AddError("required property missing: deviceScaleFactor");
  }
  const base::Value* mobile_value = dict.Find("mobile");
  if (mobile_value) {
    errors->SetName("mobile");
    result->mobile_ = internal::FromValue<bool>::Parse(*mobile_value, errors);
  } else {
    errors->AddError("required property missing: mobile");
  }
  const base::Value* scale_value = dict.Find("scale");
  if (scale_value) {
    errors->SetName("scale");
    result->scale_ = internal::FromValue<double>::Parse(*scale_value, errors);
  }
  const base::Value* screen_width_value = dict.Find("screenWidth");
  if (screen_width_value) {
    errors->SetName("screenWidth");
    result->screen_width_ = internal::FromValue<int>::Parse(*screen_width_value, errors);
  }
  const base::Value* screen_height_value = dict.Find("screenHeight");
  if (screen_height_value) {
    errors->SetName("screenHeight");
    result->screen_height_ = internal::FromValue<int>::Parse(*screen_height_value, errors);
  }
  const base::Value* positionx_value = dict.Find("positionX");
  if (positionx_value) {
    errors->SetName("positionX");
    result->positionx_ = internal::FromValue<int>::Parse(*positionx_value, errors);
  }
  const base::Value* positiony_value = dict.Find("positionY");
  if (positiony_value) {
    errors->SetName("positionY");
    result->positiony_ = internal::FromValue<int>::Parse(*positiony_value, errors);
  }
  const base::Value* dont_set_visible_size_value = dict.Find("dontSetVisibleSize");
  if (dont_set_visible_size_value) {
    errors->SetName("dontSetVisibleSize");
    result->dont_set_visible_size_ = internal::FromValue<bool>::Parse(*dont_set_visible_size_value, errors);
  }
  const base::Value* screen_orientation_value = dict.Find("screenOrientation");
  if (screen_orientation_value) {
    errors->SetName("screenOrientation");
    result->screen_orientation_ = internal::FromValue<::headless::emulation::ScreenOrientation>::Parse(*screen_orientation_value, errors);
  }
  const base::Value* viewport_value = dict.Find("viewport");
  if (viewport_value) {
    errors->SetName("viewport");
    result->viewport_ = internal::FromValue<::headless::page::Viewport>::Parse(*viewport_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetDeviceMetricsOverrideParams::Serialize() const {
  base::Value::Dict result;
  result.Set("width", internal::ToValue(width_));
  result.Set("height", internal::ToValue(height_));
  result.Set("deviceScaleFactor", internal::ToValue(device_scale_factor_));
  result.Set("mobile", internal::ToValue(mobile_));
  if (scale_)
    result.Set("scale", internal::ToValue(scale_.value()));
  if (screen_width_)
    result.Set("screenWidth", internal::ToValue(screen_width_.value()));
  if (screen_height_)
    result.Set("screenHeight", internal::ToValue(screen_height_.value()));
  if (positionx_)
    result.Set("positionX", internal::ToValue(positionx_.value()));
  if (positiony_)
    result.Set("positionY", internal::ToValue(positiony_.value()));
  if (dont_set_visible_size_)
    result.Set("dontSetVisibleSize", internal::ToValue(dont_set_visible_size_.value()));
  if (screen_orientation_)
    result.Set("screenOrientation", internal::ToValue(*screen_orientation_.value()));
  if (viewport_)
    result.Set("viewport", internal::ToValue(*viewport_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetDeviceMetricsOverrideParams> SetDeviceMetricsOverrideParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetDeviceMetricsOverrideParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetDeviceMetricsOverrideResult> SetDeviceMetricsOverrideResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetDeviceMetricsOverrideResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetDeviceMetricsOverrideResult> result(new SetDeviceMetricsOverrideResult());
  errors->Push();
  errors->SetName("SetDeviceMetricsOverrideResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetDeviceMetricsOverrideResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetDeviceMetricsOverrideResult> SetDeviceMetricsOverrideResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetDeviceMetricsOverrideResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetDeviceOrientationOverrideParams> SetDeviceOrientationOverrideParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetDeviceOrientationOverrideParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetDeviceOrientationOverrideParams> result(new SetDeviceOrientationOverrideParams());
  errors->Push();
  errors->SetName("SetDeviceOrientationOverrideParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* alpha_value = dict.Find("alpha");
  if (alpha_value) {
    errors->SetName("alpha");
    result->alpha_ = internal::FromValue<double>::Parse(*alpha_value, errors);
  } else {
    errors->AddError("required property missing: alpha");
  }
  const base::Value* beta_value = dict.Find("beta");
  if (beta_value) {
    errors->SetName("beta");
    result->beta_ = internal::FromValue<double>::Parse(*beta_value, errors);
  } else {
    errors->AddError("required property missing: beta");
  }
  const base::Value* gamma_value = dict.Find("gamma");
  if (gamma_value) {
    errors->SetName("gamma");
    result->gamma_ = internal::FromValue<double>::Parse(*gamma_value, errors);
  } else {
    errors->AddError("required property missing: gamma");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetDeviceOrientationOverrideParams::Serialize() const {
  base::Value::Dict result;
  result.Set("alpha", internal::ToValue(alpha_));
  result.Set("beta", internal::ToValue(beta_));
  result.Set("gamma", internal::ToValue(gamma_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetDeviceOrientationOverrideParams> SetDeviceOrientationOverrideParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetDeviceOrientationOverrideParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetDeviceOrientationOverrideResult> SetDeviceOrientationOverrideResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetDeviceOrientationOverrideResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetDeviceOrientationOverrideResult> result(new SetDeviceOrientationOverrideResult());
  errors->Push();
  errors->SetName("SetDeviceOrientationOverrideResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetDeviceOrientationOverrideResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetDeviceOrientationOverrideResult> SetDeviceOrientationOverrideResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetDeviceOrientationOverrideResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetFontFamiliesParams> SetFontFamiliesParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetFontFamiliesParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetFontFamiliesParams> result(new SetFontFamiliesParams());
  errors->Push();
  errors->SetName("SetFontFamiliesParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* font_families_value = dict.Find("fontFamilies");
  if (font_families_value) {
    errors->SetName("fontFamilies");
    result->font_families_ = internal::FromValue<::headless::page::FontFamilies>::Parse(*font_families_value, errors);
  } else {
    errors->AddError("required property missing: fontFamilies");
  }
  const base::Value* for_scripts_value = dict.Find("forScripts");
  if (for_scripts_value) {
    errors->SetName("forScripts");
    result->for_scripts_ = internal::FromValue<std::vector<std::unique_ptr<::headless::page::ScriptFontFamilies>>>::Parse(*for_scripts_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetFontFamiliesParams::Serialize() const {
  base::Value::Dict result;
  result.Set("fontFamilies", internal::ToValue(*font_families_));
  if (for_scripts_)
    result.Set("forScripts", internal::ToValue(for_scripts_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetFontFamiliesParams> SetFontFamiliesParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetFontFamiliesParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetFontFamiliesResult> SetFontFamiliesResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetFontFamiliesResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetFontFamiliesResult> result(new SetFontFamiliesResult());
  errors->Push();
  errors->SetName("SetFontFamiliesResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetFontFamiliesResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetFontFamiliesResult> SetFontFamiliesResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetFontFamiliesResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetFontSizesParams> SetFontSizesParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetFontSizesParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetFontSizesParams> result(new SetFontSizesParams());
  errors->Push();
  errors->SetName("SetFontSizesParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* font_sizes_value = dict.Find("fontSizes");
  if (font_sizes_value) {
    errors->SetName("fontSizes");
    result->font_sizes_ = internal::FromValue<::headless::page::FontSizes>::Parse(*font_sizes_value, errors);
  } else {
    errors->AddError("required property missing: fontSizes");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetFontSizesParams::Serialize() const {
  base::Value::Dict result;
  result.Set("fontSizes", internal::ToValue(*font_sizes_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetFontSizesParams> SetFontSizesParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetFontSizesParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetFontSizesResult> SetFontSizesResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetFontSizesResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetFontSizesResult> result(new SetFontSizesResult());
  errors->Push();
  errors->SetName("SetFontSizesResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetFontSizesResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetFontSizesResult> SetFontSizesResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetFontSizesResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetDocumentContentParams> SetDocumentContentParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetDocumentContentParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetDocumentContentParams> result(new SetDocumentContentParams());
  errors->Push();
  errors->SetName("SetDocumentContentParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  } else {
    errors->AddError("required property missing: frameId");
  }
  const base::Value* html_value = dict.Find("html");
  if (html_value) {
    errors->SetName("html");
    result->html_ = internal::FromValue<std::string>::Parse(*html_value, errors);
  } else {
    errors->AddError("required property missing: html");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetDocumentContentParams::Serialize() const {
  base::Value::Dict result;
  result.Set("frameId", internal::ToValue(frame_id_));
  result.Set("html", internal::ToValue(html_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetDocumentContentParams> SetDocumentContentParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetDocumentContentParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetDocumentContentResult> SetDocumentContentResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetDocumentContentResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetDocumentContentResult> result(new SetDocumentContentResult());
  errors->Push();
  errors->SetName("SetDocumentContentResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetDocumentContentResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetDocumentContentResult> SetDocumentContentResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetDocumentContentResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetDownloadBehaviorParams> SetDownloadBehaviorParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetDownloadBehaviorParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetDownloadBehaviorParams> result(new SetDownloadBehaviorParams());
  errors->Push();
  errors->SetName("SetDownloadBehaviorParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* behavior_value = dict.Find("behavior");
  if (behavior_value) {
    errors->SetName("behavior");
    result->behavior_ = internal::FromValue<::headless::page::SetDownloadBehaviorBehavior>::Parse(*behavior_value, errors);
  } else {
    errors->AddError("required property missing: behavior");
  }
  const base::Value* download_path_value = dict.Find("downloadPath");
  if (download_path_value) {
    errors->SetName("downloadPath");
    result->download_path_ = internal::FromValue<std::string>::Parse(*download_path_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetDownloadBehaviorParams::Serialize() const {
  base::Value::Dict result;
  result.Set("behavior", internal::ToValue(behavior_));
  if (download_path_)
    result.Set("downloadPath", internal::ToValue(download_path_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetDownloadBehaviorParams> SetDownloadBehaviorParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetDownloadBehaviorParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetDownloadBehaviorResult> SetDownloadBehaviorResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetDownloadBehaviorResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetDownloadBehaviorResult> result(new SetDownloadBehaviorResult());
  errors->Push();
  errors->SetName("SetDownloadBehaviorResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetDownloadBehaviorResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetDownloadBehaviorResult> SetDownloadBehaviorResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetDownloadBehaviorResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetGeolocationOverrideParams> SetGeolocationOverrideParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetGeolocationOverrideParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetGeolocationOverrideParams> result(new SetGeolocationOverrideParams());
  errors->Push();
  errors->SetName("SetGeolocationOverrideParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* latitude_value = dict.Find("latitude");
  if (latitude_value) {
    errors->SetName("latitude");
    result->latitude_ = internal::FromValue<double>::Parse(*latitude_value, errors);
  }
  const base::Value* longitude_value = dict.Find("longitude");
  if (longitude_value) {
    errors->SetName("longitude");
    result->longitude_ = internal::FromValue<double>::Parse(*longitude_value, errors);
  }
  const base::Value* accuracy_value = dict.Find("accuracy");
  if (accuracy_value) {
    errors->SetName("accuracy");
    result->accuracy_ = internal::FromValue<double>::Parse(*accuracy_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetGeolocationOverrideParams::Serialize() const {
  base::Value::Dict result;
  if (latitude_)
    result.Set("latitude", internal::ToValue(latitude_.value()));
  if (longitude_)
    result.Set("longitude", internal::ToValue(longitude_.value()));
  if (accuracy_)
    result.Set("accuracy", internal::ToValue(accuracy_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetGeolocationOverrideParams> SetGeolocationOverrideParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetGeolocationOverrideParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetGeolocationOverrideResult> SetGeolocationOverrideResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetGeolocationOverrideResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetGeolocationOverrideResult> result(new SetGeolocationOverrideResult());
  errors->Push();
  errors->SetName("SetGeolocationOverrideResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetGeolocationOverrideResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetGeolocationOverrideResult> SetGeolocationOverrideResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetGeolocationOverrideResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetLifecycleEventsEnabledParams> SetLifecycleEventsEnabledParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetLifecycleEventsEnabledParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetLifecycleEventsEnabledParams> result(new SetLifecycleEventsEnabledParams());
  errors->Push();
  errors->SetName("SetLifecycleEventsEnabledParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* enabled_value = dict.Find("enabled");
  if (enabled_value) {
    errors->SetName("enabled");
    result->enabled_ = internal::FromValue<bool>::Parse(*enabled_value, errors);
  } else {
    errors->AddError("required property missing: enabled");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetLifecycleEventsEnabledParams::Serialize() const {
  base::Value::Dict result;
  result.Set("enabled", internal::ToValue(enabled_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetLifecycleEventsEnabledParams> SetLifecycleEventsEnabledParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetLifecycleEventsEnabledParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetLifecycleEventsEnabledResult> SetLifecycleEventsEnabledResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetLifecycleEventsEnabledResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetLifecycleEventsEnabledResult> result(new SetLifecycleEventsEnabledResult());
  errors->Push();
  errors->SetName("SetLifecycleEventsEnabledResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetLifecycleEventsEnabledResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetLifecycleEventsEnabledResult> SetLifecycleEventsEnabledResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetLifecycleEventsEnabledResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetTouchEmulationEnabledParams> SetTouchEmulationEnabledParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetTouchEmulationEnabledParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetTouchEmulationEnabledParams> result(new SetTouchEmulationEnabledParams());
  errors->Push();
  errors->SetName("SetTouchEmulationEnabledParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* enabled_value = dict.Find("enabled");
  if (enabled_value) {
    errors->SetName("enabled");
    result->enabled_ = internal::FromValue<bool>::Parse(*enabled_value, errors);
  } else {
    errors->AddError("required property missing: enabled");
  }
  const base::Value* configuration_value = dict.Find("configuration");
  if (configuration_value) {
    errors->SetName("configuration");
    result->configuration_ = internal::FromValue<::headless::page::SetTouchEmulationEnabledConfiguration>::Parse(*configuration_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetTouchEmulationEnabledParams::Serialize() const {
  base::Value::Dict result;
  result.Set("enabled", internal::ToValue(enabled_));
  if (configuration_)
    result.Set("configuration", internal::ToValue(configuration_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetTouchEmulationEnabledParams> SetTouchEmulationEnabledParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetTouchEmulationEnabledParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetTouchEmulationEnabledResult> SetTouchEmulationEnabledResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetTouchEmulationEnabledResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetTouchEmulationEnabledResult> result(new SetTouchEmulationEnabledResult());
  errors->Push();
  errors->SetName("SetTouchEmulationEnabledResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetTouchEmulationEnabledResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetTouchEmulationEnabledResult> SetTouchEmulationEnabledResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetTouchEmulationEnabledResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StartScreencastParams> StartScreencastParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StartScreencastParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StartScreencastParams> result(new StartScreencastParams());
  errors->Push();
  errors->SetName("StartScreencastParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* format_value = dict.Find("format");
  if (format_value) {
    errors->SetName("format");
    result->format_ = internal::FromValue<::headless::page::StartScreencastFormat>::Parse(*format_value, errors);
  }
  const base::Value* quality_value = dict.Find("quality");
  if (quality_value) {
    errors->SetName("quality");
    result->quality_ = internal::FromValue<int>::Parse(*quality_value, errors);
  }
  const base::Value* max_width_value = dict.Find("maxWidth");
  if (max_width_value) {
    errors->SetName("maxWidth");
    result->max_width_ = internal::FromValue<int>::Parse(*max_width_value, errors);
  }
  const base::Value* max_height_value = dict.Find("maxHeight");
  if (max_height_value) {
    errors->SetName("maxHeight");
    result->max_height_ = internal::FromValue<int>::Parse(*max_height_value, errors);
  }
  const base::Value* every_nth_frame_value = dict.Find("everyNthFrame");
  if (every_nth_frame_value) {
    errors->SetName("everyNthFrame");
    result->every_nth_frame_ = internal::FromValue<int>::Parse(*every_nth_frame_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StartScreencastParams::Serialize() const {
  base::Value::Dict result;
  if (format_)
    result.Set("format", internal::ToValue(format_.value()));
  if (quality_)
    result.Set("quality", internal::ToValue(quality_.value()));
  if (max_width_)
    result.Set("maxWidth", internal::ToValue(max_width_.value()));
  if (max_height_)
    result.Set("maxHeight", internal::ToValue(max_height_.value()));
  if (every_nth_frame_)
    result.Set("everyNthFrame", internal::ToValue(every_nth_frame_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<StartScreencastParams> StartScreencastParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StartScreencastParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StartScreencastResult> StartScreencastResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StartScreencastResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StartScreencastResult> result(new StartScreencastResult());
  errors->Push();
  errors->SetName("StartScreencastResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StartScreencastResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<StartScreencastResult> StartScreencastResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StartScreencastResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StopLoadingParams> StopLoadingParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StopLoadingParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StopLoadingParams> result(new StopLoadingParams());
  errors->Push();
  errors->SetName("StopLoadingParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StopLoadingParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<StopLoadingParams> StopLoadingParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StopLoadingParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StopLoadingResult> StopLoadingResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StopLoadingResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StopLoadingResult> result(new StopLoadingResult());
  errors->Push();
  errors->SetName("StopLoadingResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StopLoadingResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<StopLoadingResult> StopLoadingResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StopLoadingResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CrashParams> CrashParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CrashParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CrashParams> result(new CrashParams());
  errors->Push();
  errors->SetName("CrashParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CrashParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<CrashParams> CrashParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CrashParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CrashResult> CrashResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CrashResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CrashResult> result(new CrashResult());
  errors->Push();
  errors->SetName("CrashResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CrashResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<CrashResult> CrashResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CrashResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CloseParams> CloseParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CloseParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CloseParams> result(new CloseParams());
  errors->Push();
  errors->SetName("CloseParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CloseParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<CloseParams> CloseParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CloseParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CloseResult> CloseResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CloseResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CloseResult> result(new CloseResult());
  errors->Push();
  errors->SetName("CloseResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CloseResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<CloseResult> CloseResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CloseResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetWebLifecycleStateParams> SetWebLifecycleStateParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetWebLifecycleStateParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetWebLifecycleStateParams> result(new SetWebLifecycleStateParams());
  errors->Push();
  errors->SetName("SetWebLifecycleStateParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* state_value = dict.Find("state");
  if (state_value) {
    errors->SetName("state");
    result->state_ = internal::FromValue<::headless::page::SetWebLifecycleStateState>::Parse(*state_value, errors);
  } else {
    errors->AddError("required property missing: state");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetWebLifecycleStateParams::Serialize() const {
  base::Value::Dict result;
  result.Set("state", internal::ToValue(state_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetWebLifecycleStateParams> SetWebLifecycleStateParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetWebLifecycleStateParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetWebLifecycleStateResult> SetWebLifecycleStateResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetWebLifecycleStateResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetWebLifecycleStateResult> result(new SetWebLifecycleStateResult());
  errors->Push();
  errors->SetName("SetWebLifecycleStateResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetWebLifecycleStateResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetWebLifecycleStateResult> SetWebLifecycleStateResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetWebLifecycleStateResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StopScreencastParams> StopScreencastParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StopScreencastParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StopScreencastParams> result(new StopScreencastParams());
  errors->Push();
  errors->SetName("StopScreencastParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StopScreencastParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<StopScreencastParams> StopScreencastParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StopScreencastParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StopScreencastResult> StopScreencastResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StopScreencastResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StopScreencastResult> result(new StopScreencastResult());
  errors->Push();
  errors->SetName("StopScreencastResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StopScreencastResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<StopScreencastResult> StopScreencastResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StopScreencastResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ProduceCompilationCacheParams> ProduceCompilationCacheParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ProduceCompilationCacheParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ProduceCompilationCacheParams> result(new ProduceCompilationCacheParams());
  errors->Push();
  errors->SetName("ProduceCompilationCacheParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* scripts_value = dict.Find("scripts");
  if (scripts_value) {
    errors->SetName("scripts");
    result->scripts_ = internal::FromValue<std::vector<std::unique_ptr<::headless::page::CompilationCacheParams>>>::Parse(*scripts_value, errors);
  } else {
    errors->AddError("required property missing: scripts");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ProduceCompilationCacheParams::Serialize() const {
  base::Value::Dict result;
  result.Set("scripts", internal::ToValue(scripts_));
  return base::Value(std::move(result));
}

std::unique_ptr<ProduceCompilationCacheParams> ProduceCompilationCacheParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ProduceCompilationCacheParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ProduceCompilationCacheResult> ProduceCompilationCacheResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ProduceCompilationCacheResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ProduceCompilationCacheResult> result(new ProduceCompilationCacheResult());
  errors->Push();
  errors->SetName("ProduceCompilationCacheResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ProduceCompilationCacheResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ProduceCompilationCacheResult> ProduceCompilationCacheResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ProduceCompilationCacheResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AddCompilationCacheParams> AddCompilationCacheParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AddCompilationCacheParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AddCompilationCacheParams> result(new AddCompilationCacheParams());
  errors->Push();
  errors->SetName("AddCompilationCacheParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  const base::Value* data_value = dict.Find("data");
  if (data_value) {
    errors->SetName("data");
    result->data_ = internal::FromValue<protocol::Binary>::Parse(*data_value, errors);
  } else {
    errors->AddError("required property missing: data");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AddCompilationCacheParams::Serialize() const {
  base::Value::Dict result;
  result.Set("url", internal::ToValue(url_));
  result.Set("data", internal::ToValue(data_));
  return base::Value(std::move(result));
}

std::unique_ptr<AddCompilationCacheParams> AddCompilationCacheParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AddCompilationCacheParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AddCompilationCacheResult> AddCompilationCacheResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AddCompilationCacheResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AddCompilationCacheResult> result(new AddCompilationCacheResult());
  errors->Push();
  errors->SetName("AddCompilationCacheResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AddCompilationCacheResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<AddCompilationCacheResult> AddCompilationCacheResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AddCompilationCacheResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearCompilationCacheParams> ClearCompilationCacheParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearCompilationCacheParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearCompilationCacheParams> result(new ClearCompilationCacheParams());
  errors->Push();
  errors->SetName("ClearCompilationCacheParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearCompilationCacheParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ClearCompilationCacheParams> ClearCompilationCacheParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearCompilationCacheParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearCompilationCacheResult> ClearCompilationCacheResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearCompilationCacheResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearCompilationCacheResult> result(new ClearCompilationCacheResult());
  errors->Push();
  errors->SetName("ClearCompilationCacheResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearCompilationCacheResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ClearCompilationCacheResult> ClearCompilationCacheResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearCompilationCacheResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetSPCTransactionModeParams> SetSPCTransactionModeParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetSPCTransactionModeParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetSPCTransactionModeParams> result(new SetSPCTransactionModeParams());
  errors->Push();
  errors->SetName("SetSPCTransactionModeParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* mode_value = dict.Find("mode");
  if (mode_value) {
    errors->SetName("mode");
    result->mode_ = internal::FromValue<::headless::page::AutoResponseMode>::Parse(*mode_value, errors);
  } else {
    errors->AddError("required property missing: mode");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetSPCTransactionModeParams::Serialize() const {
  base::Value::Dict result;
  result.Set("mode", internal::ToValue(mode_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetSPCTransactionModeParams> SetSPCTransactionModeParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetSPCTransactionModeParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetSPCTransactionModeResult> SetSPCTransactionModeResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetSPCTransactionModeResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetSPCTransactionModeResult> result(new SetSPCTransactionModeResult());
  errors->Push();
  errors->SetName("SetSPCTransactionModeResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetSPCTransactionModeResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetSPCTransactionModeResult> SetSPCTransactionModeResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetSPCTransactionModeResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetRPHRegistrationModeParams> SetRPHRegistrationModeParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetRPHRegistrationModeParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetRPHRegistrationModeParams> result(new SetRPHRegistrationModeParams());
  errors->Push();
  errors->SetName("SetRPHRegistrationModeParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* mode_value = dict.Find("mode");
  if (mode_value) {
    errors->SetName("mode");
    result->mode_ = internal::FromValue<::headless::page::AutoResponseMode>::Parse(*mode_value, errors);
  } else {
    errors->AddError("required property missing: mode");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetRPHRegistrationModeParams::Serialize() const {
  base::Value::Dict result;
  result.Set("mode", internal::ToValue(mode_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetRPHRegistrationModeParams> SetRPHRegistrationModeParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetRPHRegistrationModeParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetRPHRegistrationModeResult> SetRPHRegistrationModeResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetRPHRegistrationModeResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetRPHRegistrationModeResult> result(new SetRPHRegistrationModeResult());
  errors->Push();
  errors->SetName("SetRPHRegistrationModeResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetRPHRegistrationModeResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetRPHRegistrationModeResult> SetRPHRegistrationModeResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetRPHRegistrationModeResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GenerateTestReportParams> GenerateTestReportParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GenerateTestReportParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GenerateTestReportParams> result(new GenerateTestReportParams());
  errors->Push();
  errors->SetName("GenerateTestReportParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* message_value = dict.Find("message");
  if (message_value) {
    errors->SetName("message");
    result->message_ = internal::FromValue<std::string>::Parse(*message_value, errors);
  } else {
    errors->AddError("required property missing: message");
  }
  const base::Value* group_value = dict.Find("group");
  if (group_value) {
    errors->SetName("group");
    result->group_ = internal::FromValue<std::string>::Parse(*group_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GenerateTestReportParams::Serialize() const {
  base::Value::Dict result;
  result.Set("message", internal::ToValue(message_));
  if (group_)
    result.Set("group", internal::ToValue(group_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<GenerateTestReportParams> GenerateTestReportParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GenerateTestReportParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GenerateTestReportResult> GenerateTestReportResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GenerateTestReportResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GenerateTestReportResult> result(new GenerateTestReportResult());
  errors->Push();
  errors->SetName("GenerateTestReportResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GenerateTestReportResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<GenerateTestReportResult> GenerateTestReportResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GenerateTestReportResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<WaitForDebuggerParams> WaitForDebuggerParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("WaitForDebuggerParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<WaitForDebuggerParams> result(new WaitForDebuggerParams());
  errors->Push();
  errors->SetName("WaitForDebuggerParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value WaitForDebuggerParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<WaitForDebuggerParams> WaitForDebuggerParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<WaitForDebuggerParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<WaitForDebuggerResult> WaitForDebuggerResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("WaitForDebuggerResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<WaitForDebuggerResult> result(new WaitForDebuggerResult());
  errors->Push();
  errors->SetName("WaitForDebuggerResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value WaitForDebuggerResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<WaitForDebuggerResult> WaitForDebuggerResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<WaitForDebuggerResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetInterceptFileChooserDialogParams> SetInterceptFileChooserDialogParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetInterceptFileChooserDialogParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetInterceptFileChooserDialogParams> result(new SetInterceptFileChooserDialogParams());
  errors->Push();
  errors->SetName("SetInterceptFileChooserDialogParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* enabled_value = dict.Find("enabled");
  if (enabled_value) {
    errors->SetName("enabled");
    result->enabled_ = internal::FromValue<bool>::Parse(*enabled_value, errors);
  } else {
    errors->AddError("required property missing: enabled");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetInterceptFileChooserDialogParams::Serialize() const {
  base::Value::Dict result;
  result.Set("enabled", internal::ToValue(enabled_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetInterceptFileChooserDialogParams> SetInterceptFileChooserDialogParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetInterceptFileChooserDialogParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetInterceptFileChooserDialogResult> SetInterceptFileChooserDialogResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetInterceptFileChooserDialogResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetInterceptFileChooserDialogResult> result(new SetInterceptFileChooserDialogResult());
  errors->Push();
  errors->SetName("SetInterceptFileChooserDialogResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetInterceptFileChooserDialogResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetInterceptFileChooserDialogResult> SetInterceptFileChooserDialogResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetInterceptFileChooserDialogResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetPrerenderingAllowedParams> SetPrerenderingAllowedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetPrerenderingAllowedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetPrerenderingAllowedParams> result(new SetPrerenderingAllowedParams());
  errors->Push();
  errors->SetName("SetPrerenderingAllowedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* is_allowed_value = dict.Find("isAllowed");
  if (is_allowed_value) {
    errors->SetName("isAllowed");
    result->is_allowed_ = internal::FromValue<bool>::Parse(*is_allowed_value, errors);
  } else {
    errors->AddError("required property missing: isAllowed");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetPrerenderingAllowedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("isAllowed", internal::ToValue(is_allowed_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetPrerenderingAllowedParams> SetPrerenderingAllowedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetPrerenderingAllowedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetPrerenderingAllowedResult> SetPrerenderingAllowedResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetPrerenderingAllowedResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetPrerenderingAllowedResult> result(new SetPrerenderingAllowedResult());
  errors->Push();
  errors->SetName("SetPrerenderingAllowedResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetPrerenderingAllowedResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetPrerenderingAllowedResult> SetPrerenderingAllowedResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetPrerenderingAllowedResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DomContentEventFiredParams> DomContentEventFiredParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DomContentEventFiredParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DomContentEventFiredParams> result(new DomContentEventFiredParams());
  errors->Push();
  errors->SetName("DomContentEventFiredParams");
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

base::Value DomContentEventFiredParams::Serialize() const {
  base::Value::Dict result;
  result.Set("timestamp", internal::ToValue(timestamp_));
  return base::Value(std::move(result));
}

std::unique_ptr<DomContentEventFiredParams> DomContentEventFiredParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DomContentEventFiredParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<FileChooserOpenedParams> FileChooserOpenedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("FileChooserOpenedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<FileChooserOpenedParams> result(new FileChooserOpenedParams());
  errors->Push();
  errors->SetName("FileChooserOpenedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  } else {
    errors->AddError("required property missing: frameId");
  }
  const base::Value* mode_value = dict.Find("mode");
  if (mode_value) {
    errors->SetName("mode");
    result->mode_ = internal::FromValue<::headless::page::FileChooserOpenedMode>::Parse(*mode_value, errors);
  } else {
    errors->AddError("required property missing: mode");
  }
  const base::Value* backend_node_id_value = dict.Find("backendNodeId");
  if (backend_node_id_value) {
    errors->SetName("backendNodeId");
    result->backend_node_id_ = internal::FromValue<int>::Parse(*backend_node_id_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value FileChooserOpenedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("frameId", internal::ToValue(frame_id_));
  result.Set("mode", internal::ToValue(mode_));
  if (backend_node_id_)
    result.Set("backendNodeId", internal::ToValue(backend_node_id_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<FileChooserOpenedParams> FileChooserOpenedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<FileChooserOpenedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<FrameAttachedParams> FrameAttachedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("FrameAttachedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<FrameAttachedParams> result(new FrameAttachedParams());
  errors->Push();
  errors->SetName("FrameAttachedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  } else {
    errors->AddError("required property missing: frameId");
  }
  const base::Value* parent_frame_id_value = dict.Find("parentFrameId");
  if (parent_frame_id_value) {
    errors->SetName("parentFrameId");
    result->parent_frame_id_ = internal::FromValue<std::string>::Parse(*parent_frame_id_value, errors);
  } else {
    errors->AddError("required property missing: parentFrameId");
  }
  const base::Value* stack_value = dict.Find("stack");
  if (stack_value) {
    errors->SetName("stack");
    result->stack_ = internal::FromValue<::headless::runtime::StackTrace>::Parse(*stack_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value FrameAttachedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("frameId", internal::ToValue(frame_id_));
  result.Set("parentFrameId", internal::ToValue(parent_frame_id_));
  if (stack_)
    result.Set("stack", internal::ToValue(*stack_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<FrameAttachedParams> FrameAttachedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<FrameAttachedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<FrameClearedScheduledNavigationParams> FrameClearedScheduledNavigationParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("FrameClearedScheduledNavigationParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<FrameClearedScheduledNavigationParams> result(new FrameClearedScheduledNavigationParams());
  errors->Push();
  errors->SetName("FrameClearedScheduledNavigationParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  } else {
    errors->AddError("required property missing: frameId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value FrameClearedScheduledNavigationParams::Serialize() const {
  base::Value::Dict result;
  result.Set("frameId", internal::ToValue(frame_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<FrameClearedScheduledNavigationParams> FrameClearedScheduledNavigationParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<FrameClearedScheduledNavigationParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<FrameDetachedParams> FrameDetachedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("FrameDetachedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<FrameDetachedParams> result(new FrameDetachedParams());
  errors->Push();
  errors->SetName("FrameDetachedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  } else {
    errors->AddError("required property missing: frameId");
  }
  const base::Value* reason_value = dict.Find("reason");
  if (reason_value) {
    errors->SetName("reason");
    result->reason_ = internal::FromValue<::headless::page::FrameDetachedReason>::Parse(*reason_value, errors);
  } else {
    errors->AddError("required property missing: reason");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value FrameDetachedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("frameId", internal::ToValue(frame_id_));
  result.Set("reason", internal::ToValue(reason_));
  return base::Value(std::move(result));
}

std::unique_ptr<FrameDetachedParams> FrameDetachedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<FrameDetachedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<FrameNavigatedParams> FrameNavigatedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("FrameNavigatedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<FrameNavigatedParams> result(new FrameNavigatedParams());
  errors->Push();
  errors->SetName("FrameNavigatedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_value = dict.Find("frame");
  if (frame_value) {
    errors->SetName("frame");
    result->frame_ = internal::FromValue<::headless::page::Frame>::Parse(*frame_value, errors);
  } else {
    errors->AddError("required property missing: frame");
  }
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    errors->SetName("type");
    result->type_ = internal::FromValue<::headless::page::NavigationType>::Parse(*type_value, errors);
  } else {
    errors->AddError("required property missing: type");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value FrameNavigatedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("frame", internal::ToValue(*frame_));
  result.Set("type", internal::ToValue(type_));
  return base::Value(std::move(result));
}

std::unique_ptr<FrameNavigatedParams> FrameNavigatedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<FrameNavigatedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DocumentOpenedParams> DocumentOpenedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DocumentOpenedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DocumentOpenedParams> result(new DocumentOpenedParams());
  errors->Push();
  errors->SetName("DocumentOpenedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_value = dict.Find("frame");
  if (frame_value) {
    errors->SetName("frame");
    result->frame_ = internal::FromValue<::headless::page::Frame>::Parse(*frame_value, errors);
  } else {
    errors->AddError("required property missing: frame");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DocumentOpenedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("frame", internal::ToValue(*frame_));
  return base::Value(std::move(result));
}

std::unique_ptr<DocumentOpenedParams> DocumentOpenedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DocumentOpenedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<FrameResizedParams> FrameResizedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("FrameResizedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<FrameResizedParams> result(new FrameResizedParams());
  errors->Push();
  errors->SetName("FrameResizedParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value FrameResizedParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<FrameResizedParams> FrameResizedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<FrameResizedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<FrameRequestedNavigationParams> FrameRequestedNavigationParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("FrameRequestedNavigationParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<FrameRequestedNavigationParams> result(new FrameRequestedNavigationParams());
  errors->Push();
  errors->SetName("FrameRequestedNavigationParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  } else {
    errors->AddError("required property missing: frameId");
  }
  const base::Value* reason_value = dict.Find("reason");
  if (reason_value) {
    errors->SetName("reason");
    result->reason_ = internal::FromValue<::headless::page::ClientNavigationReason>::Parse(*reason_value, errors);
  } else {
    errors->AddError("required property missing: reason");
  }
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  const base::Value* disposition_value = dict.Find("disposition");
  if (disposition_value) {
    errors->SetName("disposition");
    result->disposition_ = internal::FromValue<::headless::page::ClientNavigationDisposition>::Parse(*disposition_value, errors);
  } else {
    errors->AddError("required property missing: disposition");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value FrameRequestedNavigationParams::Serialize() const {
  base::Value::Dict result;
  result.Set("frameId", internal::ToValue(frame_id_));
  result.Set("reason", internal::ToValue(reason_));
  result.Set("url", internal::ToValue(url_));
  result.Set("disposition", internal::ToValue(disposition_));
  return base::Value(std::move(result));
}

std::unique_ptr<FrameRequestedNavigationParams> FrameRequestedNavigationParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<FrameRequestedNavigationParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<FrameScheduledNavigationParams> FrameScheduledNavigationParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("FrameScheduledNavigationParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<FrameScheduledNavigationParams> result(new FrameScheduledNavigationParams());
  errors->Push();
  errors->SetName("FrameScheduledNavigationParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  } else {
    errors->AddError("required property missing: frameId");
  }
  const base::Value* delay_value = dict.Find("delay");
  if (delay_value) {
    errors->SetName("delay");
    result->delay_ = internal::FromValue<double>::Parse(*delay_value, errors);
  } else {
    errors->AddError("required property missing: delay");
  }
  const base::Value* reason_value = dict.Find("reason");
  if (reason_value) {
    errors->SetName("reason");
    result->reason_ = internal::FromValue<::headless::page::ClientNavigationReason>::Parse(*reason_value, errors);
  } else {
    errors->AddError("required property missing: reason");
  }
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value FrameScheduledNavigationParams::Serialize() const {
  base::Value::Dict result;
  result.Set("frameId", internal::ToValue(frame_id_));
  result.Set("delay", internal::ToValue(delay_));
  result.Set("reason", internal::ToValue(reason_));
  result.Set("url", internal::ToValue(url_));
  return base::Value(std::move(result));
}

std::unique_ptr<FrameScheduledNavigationParams> FrameScheduledNavigationParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<FrameScheduledNavigationParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<FrameStartedLoadingParams> FrameStartedLoadingParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("FrameStartedLoadingParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<FrameStartedLoadingParams> result(new FrameStartedLoadingParams());
  errors->Push();
  errors->SetName("FrameStartedLoadingParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  } else {
    errors->AddError("required property missing: frameId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value FrameStartedLoadingParams::Serialize() const {
  base::Value::Dict result;
  result.Set("frameId", internal::ToValue(frame_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<FrameStartedLoadingParams> FrameStartedLoadingParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<FrameStartedLoadingParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<FrameStoppedLoadingParams> FrameStoppedLoadingParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("FrameStoppedLoadingParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<FrameStoppedLoadingParams> result(new FrameStoppedLoadingParams());
  errors->Push();
  errors->SetName("FrameStoppedLoadingParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  } else {
    errors->AddError("required property missing: frameId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value FrameStoppedLoadingParams::Serialize() const {
  base::Value::Dict result;
  result.Set("frameId", internal::ToValue(frame_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<FrameStoppedLoadingParams> FrameStoppedLoadingParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<FrameStoppedLoadingParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DownloadWillBeginParams> DownloadWillBeginParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DownloadWillBeginParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DownloadWillBeginParams> result(new DownloadWillBeginParams());
  errors->Push();
  errors->SetName("DownloadWillBeginParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  } else {
    errors->AddError("required property missing: frameId");
  }
  const base::Value* guid_value = dict.Find("guid");
  if (guid_value) {
    errors->SetName("guid");
    result->guid_ = internal::FromValue<std::string>::Parse(*guid_value, errors);
  } else {
    errors->AddError("required property missing: guid");
  }
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  const base::Value* suggested_filename_value = dict.Find("suggestedFilename");
  if (suggested_filename_value) {
    errors->SetName("suggestedFilename");
    result->suggested_filename_ = internal::FromValue<std::string>::Parse(*suggested_filename_value, errors);
  } else {
    errors->AddError("required property missing: suggestedFilename");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DownloadWillBeginParams::Serialize() const {
  base::Value::Dict result;
  result.Set("frameId", internal::ToValue(frame_id_));
  result.Set("guid", internal::ToValue(guid_));
  result.Set("url", internal::ToValue(url_));
  result.Set("suggestedFilename", internal::ToValue(suggested_filename_));
  return base::Value(std::move(result));
}

std::unique_ptr<DownloadWillBeginParams> DownloadWillBeginParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DownloadWillBeginParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DownloadProgressParams> DownloadProgressParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DownloadProgressParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DownloadProgressParams> result(new DownloadProgressParams());
  errors->Push();
  errors->SetName("DownloadProgressParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* guid_value = dict.Find("guid");
  if (guid_value) {
    errors->SetName("guid");
    result->guid_ = internal::FromValue<std::string>::Parse(*guid_value, errors);
  } else {
    errors->AddError("required property missing: guid");
  }
  const base::Value* total_bytes_value = dict.Find("totalBytes");
  if (total_bytes_value) {
    errors->SetName("totalBytes");
    result->total_bytes_ = internal::FromValue<double>::Parse(*total_bytes_value, errors);
  } else {
    errors->AddError("required property missing: totalBytes");
  }
  const base::Value* received_bytes_value = dict.Find("receivedBytes");
  if (received_bytes_value) {
    errors->SetName("receivedBytes");
    result->received_bytes_ = internal::FromValue<double>::Parse(*received_bytes_value, errors);
  } else {
    errors->AddError("required property missing: receivedBytes");
  }
  const base::Value* state_value = dict.Find("state");
  if (state_value) {
    errors->SetName("state");
    result->state_ = internal::FromValue<::headless::page::DownloadProgressState>::Parse(*state_value, errors);
  } else {
    errors->AddError("required property missing: state");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DownloadProgressParams::Serialize() const {
  base::Value::Dict result;
  result.Set("guid", internal::ToValue(guid_));
  result.Set("totalBytes", internal::ToValue(total_bytes_));
  result.Set("receivedBytes", internal::ToValue(received_bytes_));
  result.Set("state", internal::ToValue(state_));
  return base::Value(std::move(result));
}

std::unique_ptr<DownloadProgressParams> DownloadProgressParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DownloadProgressParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<InterstitialHiddenParams> InterstitialHiddenParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("InterstitialHiddenParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<InterstitialHiddenParams> result(new InterstitialHiddenParams());
  errors->Push();
  errors->SetName("InterstitialHiddenParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value InterstitialHiddenParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<InterstitialHiddenParams> InterstitialHiddenParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<InterstitialHiddenParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<InterstitialShownParams> InterstitialShownParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("InterstitialShownParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<InterstitialShownParams> result(new InterstitialShownParams());
  errors->Push();
  errors->SetName("InterstitialShownParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value InterstitialShownParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<InterstitialShownParams> InterstitialShownParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<InterstitialShownParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<JavascriptDialogClosedParams> JavascriptDialogClosedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("JavascriptDialogClosedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<JavascriptDialogClosedParams> result(new JavascriptDialogClosedParams());
  errors->Push();
  errors->SetName("JavascriptDialogClosedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* result_value = dict.Find("result");
  if (result_value) {
    errors->SetName("result");
    result->result_ = internal::FromValue<bool>::Parse(*result_value, errors);
  } else {
    errors->AddError("required property missing: result");
  }
  const base::Value* user_input_value = dict.Find("userInput");
  if (user_input_value) {
    errors->SetName("userInput");
    result->user_input_ = internal::FromValue<std::string>::Parse(*user_input_value, errors);
  } else {
    errors->AddError("required property missing: userInput");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value JavascriptDialogClosedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("result", internal::ToValue(result_));
  result.Set("userInput", internal::ToValue(user_input_));
  return base::Value(std::move(result));
}

std::unique_ptr<JavascriptDialogClosedParams> JavascriptDialogClosedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<JavascriptDialogClosedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<JavascriptDialogOpeningParams> JavascriptDialogOpeningParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("JavascriptDialogOpeningParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<JavascriptDialogOpeningParams> result(new JavascriptDialogOpeningParams());
  errors->Push();
  errors->SetName("JavascriptDialogOpeningParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  const base::Value* message_value = dict.Find("message");
  if (message_value) {
    errors->SetName("message");
    result->message_ = internal::FromValue<std::string>::Parse(*message_value, errors);
  } else {
    errors->AddError("required property missing: message");
  }
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    errors->SetName("type");
    result->type_ = internal::FromValue<::headless::page::DialogType>::Parse(*type_value, errors);
  } else {
    errors->AddError("required property missing: type");
  }
  const base::Value* has_browser_handler_value = dict.Find("hasBrowserHandler");
  if (has_browser_handler_value) {
    errors->SetName("hasBrowserHandler");
    result->has_browser_handler_ = internal::FromValue<bool>::Parse(*has_browser_handler_value, errors);
  } else {
    errors->AddError("required property missing: hasBrowserHandler");
  }
  const base::Value* default_prompt_value = dict.Find("defaultPrompt");
  if (default_prompt_value) {
    errors->SetName("defaultPrompt");
    result->default_prompt_ = internal::FromValue<std::string>::Parse(*default_prompt_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value JavascriptDialogOpeningParams::Serialize() const {
  base::Value::Dict result;
  result.Set("url", internal::ToValue(url_));
  result.Set("message", internal::ToValue(message_));
  result.Set("type", internal::ToValue(type_));
  result.Set("hasBrowserHandler", internal::ToValue(has_browser_handler_));
  if (default_prompt_)
    result.Set("defaultPrompt", internal::ToValue(default_prompt_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<JavascriptDialogOpeningParams> JavascriptDialogOpeningParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<JavascriptDialogOpeningParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<LifecycleEventParams> LifecycleEventParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("LifecycleEventParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<LifecycleEventParams> result(new LifecycleEventParams());
  errors->Push();
  errors->SetName("LifecycleEventParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  } else {
    errors->AddError("required property missing: frameId");
  }
  const base::Value* loader_id_value = dict.Find("loaderId");
  if (loader_id_value) {
    errors->SetName("loaderId");
    result->loader_id_ = internal::FromValue<std::string>::Parse(*loader_id_value, errors);
  } else {
    errors->AddError("required property missing: loaderId");
  }
  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    errors->SetName("name");
    result->name_ = internal::FromValue<std::string>::Parse(*name_value, errors);
  } else {
    errors->AddError("required property missing: name");
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

base::Value LifecycleEventParams::Serialize() const {
  base::Value::Dict result;
  result.Set("frameId", internal::ToValue(frame_id_));
  result.Set("loaderId", internal::ToValue(loader_id_));
  result.Set("name", internal::ToValue(name_));
  result.Set("timestamp", internal::ToValue(timestamp_));
  return base::Value(std::move(result));
}

std::unique_ptr<LifecycleEventParams> LifecycleEventParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<LifecycleEventParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<BackForwardCacheNotUsedParams> BackForwardCacheNotUsedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("BackForwardCacheNotUsedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<BackForwardCacheNotUsedParams> result(new BackForwardCacheNotUsedParams());
  errors->Push();
  errors->SetName("BackForwardCacheNotUsedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* loader_id_value = dict.Find("loaderId");
  if (loader_id_value) {
    errors->SetName("loaderId");
    result->loader_id_ = internal::FromValue<std::string>::Parse(*loader_id_value, errors);
  } else {
    errors->AddError("required property missing: loaderId");
  }
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  } else {
    errors->AddError("required property missing: frameId");
  }
  const base::Value* not_restored_explanations_value = dict.Find("notRestoredExplanations");
  if (not_restored_explanations_value) {
    errors->SetName("notRestoredExplanations");
    result->not_restored_explanations_ = internal::FromValue<std::vector<std::unique_ptr<::headless::page::BackForwardCacheNotRestoredExplanation>>>::Parse(*not_restored_explanations_value, errors);
  } else {
    errors->AddError("required property missing: notRestoredExplanations");
  }
  const base::Value* not_restored_explanations_tree_value = dict.Find("notRestoredExplanationsTree");
  if (not_restored_explanations_tree_value) {
    errors->SetName("notRestoredExplanationsTree");
    result->not_restored_explanations_tree_ = internal::FromValue<::headless::page::BackForwardCacheNotRestoredExplanationTree>::Parse(*not_restored_explanations_tree_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value BackForwardCacheNotUsedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("loaderId", internal::ToValue(loader_id_));
  result.Set("frameId", internal::ToValue(frame_id_));
  result.Set("notRestoredExplanations", internal::ToValue(not_restored_explanations_));
  if (not_restored_explanations_tree_)
    result.Set("notRestoredExplanationsTree", internal::ToValue(*not_restored_explanations_tree_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<BackForwardCacheNotUsedParams> BackForwardCacheNotUsedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<BackForwardCacheNotUsedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<LoadEventFiredParams> LoadEventFiredParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("LoadEventFiredParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<LoadEventFiredParams> result(new LoadEventFiredParams());
  errors->Push();
  errors->SetName("LoadEventFiredParams");
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

base::Value LoadEventFiredParams::Serialize() const {
  base::Value::Dict result;
  result.Set("timestamp", internal::ToValue(timestamp_));
  return base::Value(std::move(result));
}

std::unique_ptr<LoadEventFiredParams> LoadEventFiredParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<LoadEventFiredParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<NavigatedWithinDocumentParams> NavigatedWithinDocumentParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("NavigatedWithinDocumentParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<NavigatedWithinDocumentParams> result(new NavigatedWithinDocumentParams());
  errors->Push();
  errors->SetName("NavigatedWithinDocumentParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  } else {
    errors->AddError("required property missing: frameId");
  }
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value NavigatedWithinDocumentParams::Serialize() const {
  base::Value::Dict result;
  result.Set("frameId", internal::ToValue(frame_id_));
  result.Set("url", internal::ToValue(url_));
  return base::Value(std::move(result));
}

std::unique_ptr<NavigatedWithinDocumentParams> NavigatedWithinDocumentParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<NavigatedWithinDocumentParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ScreencastFrameParams> ScreencastFrameParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ScreencastFrameParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ScreencastFrameParams> result(new ScreencastFrameParams());
  errors->Push();
  errors->SetName("ScreencastFrameParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* data_value = dict.Find("data");
  if (data_value) {
    errors->SetName("data");
    result->data_ = internal::FromValue<protocol::Binary>::Parse(*data_value, errors);
  } else {
    errors->AddError("required property missing: data");
  }
  const base::Value* metadata_value = dict.Find("metadata");
  if (metadata_value) {
    errors->SetName("metadata");
    result->metadata_ = internal::FromValue<::headless::page::ScreencastFrameMetadata>::Parse(*metadata_value, errors);
  } else {
    errors->AddError("required property missing: metadata");
  }
  const base::Value* session_id_value = dict.Find("sessionId");
  if (session_id_value) {
    errors->SetName("sessionId");
    result->session_id_ = internal::FromValue<int>::Parse(*session_id_value, errors);
  } else {
    errors->AddError("required property missing: sessionId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ScreencastFrameParams::Serialize() const {
  base::Value::Dict result;
  result.Set("data", internal::ToValue(data_));
  result.Set("metadata", internal::ToValue(*metadata_));
  result.Set("sessionId", internal::ToValue(session_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<ScreencastFrameParams> ScreencastFrameParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ScreencastFrameParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ScreencastVisibilityChangedParams> ScreencastVisibilityChangedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ScreencastVisibilityChangedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ScreencastVisibilityChangedParams> result(new ScreencastVisibilityChangedParams());
  errors->Push();
  errors->SetName("ScreencastVisibilityChangedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* visible_value = dict.Find("visible");
  if (visible_value) {
    errors->SetName("visible");
    result->visible_ = internal::FromValue<bool>::Parse(*visible_value, errors);
  } else {
    errors->AddError("required property missing: visible");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ScreencastVisibilityChangedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("visible", internal::ToValue(visible_));
  return base::Value(std::move(result));
}

std::unique_ptr<ScreencastVisibilityChangedParams> ScreencastVisibilityChangedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ScreencastVisibilityChangedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<WindowOpenParams> WindowOpenParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("WindowOpenParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<WindowOpenParams> result(new WindowOpenParams());
  errors->Push();
  errors->SetName("WindowOpenParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  const base::Value* window_name_value = dict.Find("windowName");
  if (window_name_value) {
    errors->SetName("windowName");
    result->window_name_ = internal::FromValue<std::string>::Parse(*window_name_value, errors);
  } else {
    errors->AddError("required property missing: windowName");
  }
  const base::Value* window_features_value = dict.Find("windowFeatures");
  if (window_features_value) {
    errors->SetName("windowFeatures");
    result->window_features_ = internal::FromValue<std::vector<std::string>>::Parse(*window_features_value, errors);
  } else {
    errors->AddError("required property missing: windowFeatures");
  }
  const base::Value* user_gesture_value = dict.Find("userGesture");
  if (user_gesture_value) {
    errors->SetName("userGesture");
    result->user_gesture_ = internal::FromValue<bool>::Parse(*user_gesture_value, errors);
  } else {
    errors->AddError("required property missing: userGesture");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value WindowOpenParams::Serialize() const {
  base::Value::Dict result;
  result.Set("url", internal::ToValue(url_));
  result.Set("windowName", internal::ToValue(window_name_));
  result.Set("windowFeatures", internal::ToValue(window_features_));
  result.Set("userGesture", internal::ToValue(user_gesture_));
  return base::Value(std::move(result));
}

std::unique_ptr<WindowOpenParams> WindowOpenParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<WindowOpenParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CompilationCacheProducedParams> CompilationCacheProducedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CompilationCacheProducedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CompilationCacheProducedParams> result(new CompilationCacheProducedParams());
  errors->Push();
  errors->SetName("CompilationCacheProducedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  const base::Value* data_value = dict.Find("data");
  if (data_value) {
    errors->SetName("data");
    result->data_ = internal::FromValue<protocol::Binary>::Parse(*data_value, errors);
  } else {
    errors->AddError("required property missing: data");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CompilationCacheProducedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("url", internal::ToValue(url_));
  result.Set("data", internal::ToValue(data_));
  return base::Value(std::move(result));
}

std::unique_ptr<CompilationCacheProducedParams> CompilationCacheProducedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CompilationCacheProducedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


}  // namespace page
}  // namespace headless
