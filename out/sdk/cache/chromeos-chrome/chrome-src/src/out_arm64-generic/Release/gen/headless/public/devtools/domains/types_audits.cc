// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "headless/public/devtools/domains/types_audits.h"
#include "headless/public/devtools/domains/types_dom.h"
#include "headless/public/devtools/domains/types_debugger.h"
#include "headless/public/devtools/domains/types_emulation.h"
#include "headless/public/devtools/domains/types_io.h"
#include "headless/public/devtools/domains/types_network.h"
#include "headless/public/devtools/domains/types_page.h"
#include "headless/public/devtools/domains/types_runtime.h"
#include "headless/public/devtools/domains/types_security.h"

#include "base/values.h"
#include "headless/public/devtools/internal/type_conversions_audits.h"
#include "headless/public/devtools/internal/type_conversions_dom.h"
#include "headless/public/devtools/internal/type_conversions_debugger.h"
#include "headless/public/devtools/internal/type_conversions_emulation.h"
#include "headless/public/devtools/internal/type_conversions_io.h"
#include "headless/public/devtools/internal/type_conversions_network.h"
#include "headless/public/devtools/internal/type_conversions_page.h"
#include "headless/public/devtools/internal/type_conversions_runtime.h"
#include "headless/public/devtools/internal/type_conversions_security.h"

namespace headless {

namespace audits {

std::unique_ptr<AffectedCookie> AffectedCookie::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AffectedCookie");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AffectedCookie> result(new AffectedCookie());
  errors->Push();
  errors->SetName("AffectedCookie");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    errors->SetName("name");
    result->name_ = internal::FromValue<std::string>::Parse(*name_value, errors);
  } else {
    errors->AddError("required property missing: name");
  }
  const base::Value* path_value = dict.Find("path");
  if (path_value) {
    errors->SetName("path");
    result->path_ = internal::FromValue<std::string>::Parse(*path_value, errors);
  } else {
    errors->AddError("required property missing: path");
  }
  const base::Value* domain_value = dict.Find("domain");
  if (domain_value) {
    errors->SetName("domain");
    result->domain_ = internal::FromValue<std::string>::Parse(*domain_value, errors);
  } else {
    errors->AddError("required property missing: domain");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AffectedCookie::Serialize() const {
  base::Value::Dict result;
  result.Set("name", internal::ToValue(name_));
  result.Set("path", internal::ToValue(path_));
  result.Set("domain", internal::ToValue(domain_));
  return base::Value(std::move(result));
}

std::unique_ptr<AffectedCookie> AffectedCookie::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AffectedCookie> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AffectedRequest> AffectedRequest::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AffectedRequest");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AffectedRequest> result(new AffectedRequest());
  errors->Push();
  errors->SetName("AffectedRequest");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AffectedRequest::Serialize() const {
  base::Value::Dict result;
  result.Set("requestId", internal::ToValue(request_id_));
  if (url_)
    result.Set("url", internal::ToValue(url_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<AffectedRequest> AffectedRequest::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AffectedRequest> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AffectedFrame> AffectedFrame::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AffectedFrame");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AffectedFrame> result(new AffectedFrame());
  errors->Push();
  errors->SetName("AffectedFrame");
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

base::Value AffectedFrame::Serialize() const {
  base::Value::Dict result;
  result.Set("frameId", internal::ToValue(frame_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<AffectedFrame> AffectedFrame::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AffectedFrame> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CookieIssueDetails> CookieIssueDetails::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CookieIssueDetails");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CookieIssueDetails> result(new CookieIssueDetails());
  errors->Push();
  errors->SetName("CookieIssueDetails");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* cookie_value = dict.Find("cookie");
  if (cookie_value) {
    errors->SetName("cookie");
    result->cookie_ = internal::FromValue<::headless::audits::AffectedCookie>::Parse(*cookie_value, errors);
  }
  const base::Value* raw_cookie_line_value = dict.Find("rawCookieLine");
  if (raw_cookie_line_value) {
    errors->SetName("rawCookieLine");
    result->raw_cookie_line_ = internal::FromValue<std::string>::Parse(*raw_cookie_line_value, errors);
  }
  const base::Value* cookie_warning_reasons_value = dict.Find("cookieWarningReasons");
  if (cookie_warning_reasons_value) {
    errors->SetName("cookieWarningReasons");
    result->cookie_warning_reasons_ = internal::FromValue<std::vector<::headless::audits::CookieWarningReason>>::Parse(*cookie_warning_reasons_value, errors);
  } else {
    errors->AddError("required property missing: cookieWarningReasons");
  }
  const base::Value* cookie_exclusion_reasons_value = dict.Find("cookieExclusionReasons");
  if (cookie_exclusion_reasons_value) {
    errors->SetName("cookieExclusionReasons");
    result->cookie_exclusion_reasons_ = internal::FromValue<std::vector<::headless::audits::CookieExclusionReason>>::Parse(*cookie_exclusion_reasons_value, errors);
  } else {
    errors->AddError("required property missing: cookieExclusionReasons");
  }
  const base::Value* operation_value = dict.Find("operation");
  if (operation_value) {
    errors->SetName("operation");
    result->operation_ = internal::FromValue<::headless::audits::CookieOperation>::Parse(*operation_value, errors);
  } else {
    errors->AddError("required property missing: operation");
  }
  const base::Value* site_for_cookies_value = dict.Find("siteForCookies");
  if (site_for_cookies_value) {
    errors->SetName("siteForCookies");
    result->site_for_cookies_ = internal::FromValue<std::string>::Parse(*site_for_cookies_value, errors);
  }
  const base::Value* cookie_url_value = dict.Find("cookieUrl");
  if (cookie_url_value) {
    errors->SetName("cookieUrl");
    result->cookie_url_ = internal::FromValue<std::string>::Parse(*cookie_url_value, errors);
  }
  const base::Value* request_value = dict.Find("request");
  if (request_value) {
    errors->SetName("request");
    result->request_ = internal::FromValue<::headless::audits::AffectedRequest>::Parse(*request_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CookieIssueDetails::Serialize() const {
  base::Value::Dict result;
  if (cookie_)
    result.Set("cookie", internal::ToValue(*cookie_.value()));
  if (raw_cookie_line_)
    result.Set("rawCookieLine", internal::ToValue(raw_cookie_line_.value()));
  result.Set("cookieWarningReasons", internal::ToValue(cookie_warning_reasons_));
  result.Set("cookieExclusionReasons", internal::ToValue(cookie_exclusion_reasons_));
  result.Set("operation", internal::ToValue(operation_));
  if (site_for_cookies_)
    result.Set("siteForCookies", internal::ToValue(site_for_cookies_.value()));
  if (cookie_url_)
    result.Set("cookieUrl", internal::ToValue(cookie_url_.value()));
  if (request_)
    result.Set("request", internal::ToValue(*request_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<CookieIssueDetails> CookieIssueDetails::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CookieIssueDetails> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<MixedContentIssueDetails> MixedContentIssueDetails::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("MixedContentIssueDetails");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<MixedContentIssueDetails> result(new MixedContentIssueDetails());
  errors->Push();
  errors->SetName("MixedContentIssueDetails");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* resource_type_value = dict.Find("resourceType");
  if (resource_type_value) {
    errors->SetName("resourceType");
    result->resource_type_ = internal::FromValue<::headless::audits::MixedContentResourceType>::Parse(*resource_type_value, errors);
  }
  const base::Value* resolution_status_value = dict.Find("resolutionStatus");
  if (resolution_status_value) {
    errors->SetName("resolutionStatus");
    result->resolution_status_ = internal::FromValue<::headless::audits::MixedContentResolutionStatus>::Parse(*resolution_status_value, errors);
  } else {
    errors->AddError("required property missing: resolutionStatus");
  }
  const base::Value* insecureurl_value = dict.Find("insecureURL");
  if (insecureurl_value) {
    errors->SetName("insecureURL");
    result->insecureurl_ = internal::FromValue<std::string>::Parse(*insecureurl_value, errors);
  } else {
    errors->AddError("required property missing: insecureURL");
  }
  const base::Value* main_resourceurl_value = dict.Find("mainResourceURL");
  if (main_resourceurl_value) {
    errors->SetName("mainResourceURL");
    result->main_resourceurl_ = internal::FromValue<std::string>::Parse(*main_resourceurl_value, errors);
  } else {
    errors->AddError("required property missing: mainResourceURL");
  }
  const base::Value* request_value = dict.Find("request");
  if (request_value) {
    errors->SetName("request");
    result->request_ = internal::FromValue<::headless::audits::AffectedRequest>::Parse(*request_value, errors);
  }
  const base::Value* frame_value = dict.Find("frame");
  if (frame_value) {
    errors->SetName("frame");
    result->frame_ = internal::FromValue<::headless::audits::AffectedFrame>::Parse(*frame_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value MixedContentIssueDetails::Serialize() const {
  base::Value::Dict result;
  if (resource_type_)
    result.Set("resourceType", internal::ToValue(resource_type_.value()));
  result.Set("resolutionStatus", internal::ToValue(resolution_status_));
  result.Set("insecureURL", internal::ToValue(insecureurl_));
  result.Set("mainResourceURL", internal::ToValue(main_resourceurl_));
  if (request_)
    result.Set("request", internal::ToValue(*request_.value()));
  if (frame_)
    result.Set("frame", internal::ToValue(*frame_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<MixedContentIssueDetails> MixedContentIssueDetails::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<MixedContentIssueDetails> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<BlockedByResponseIssueDetails> BlockedByResponseIssueDetails::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("BlockedByResponseIssueDetails");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<BlockedByResponseIssueDetails> result(new BlockedByResponseIssueDetails());
  errors->Push();
  errors->SetName("BlockedByResponseIssueDetails");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_value = dict.Find("request");
  if (request_value) {
    errors->SetName("request");
    result->request_ = internal::FromValue<::headless::audits::AffectedRequest>::Parse(*request_value, errors);
  } else {
    errors->AddError("required property missing: request");
  }
  const base::Value* parent_frame_value = dict.Find("parentFrame");
  if (parent_frame_value) {
    errors->SetName("parentFrame");
    result->parent_frame_ = internal::FromValue<::headless::audits::AffectedFrame>::Parse(*parent_frame_value, errors);
  }
  const base::Value* blocked_frame_value = dict.Find("blockedFrame");
  if (blocked_frame_value) {
    errors->SetName("blockedFrame");
    result->blocked_frame_ = internal::FromValue<::headless::audits::AffectedFrame>::Parse(*blocked_frame_value, errors);
  }
  const base::Value* reason_value = dict.Find("reason");
  if (reason_value) {
    errors->SetName("reason");
    result->reason_ = internal::FromValue<::headless::audits::BlockedByResponseReason>::Parse(*reason_value, errors);
  } else {
    errors->AddError("required property missing: reason");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value BlockedByResponseIssueDetails::Serialize() const {
  base::Value::Dict result;
  result.Set("request", internal::ToValue(*request_));
  if (parent_frame_)
    result.Set("parentFrame", internal::ToValue(*parent_frame_.value()));
  if (blocked_frame_)
    result.Set("blockedFrame", internal::ToValue(*blocked_frame_.value()));
  result.Set("reason", internal::ToValue(reason_));
  return base::Value(std::move(result));
}

std::unique_ptr<BlockedByResponseIssueDetails> BlockedByResponseIssueDetails::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<BlockedByResponseIssueDetails> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<HeavyAdIssueDetails> HeavyAdIssueDetails::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("HeavyAdIssueDetails");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<HeavyAdIssueDetails> result(new HeavyAdIssueDetails());
  errors->Push();
  errors->SetName("HeavyAdIssueDetails");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* resolution_value = dict.Find("resolution");
  if (resolution_value) {
    errors->SetName("resolution");
    result->resolution_ = internal::FromValue<::headless::audits::HeavyAdResolutionStatus>::Parse(*resolution_value, errors);
  } else {
    errors->AddError("required property missing: resolution");
  }
  const base::Value* reason_value = dict.Find("reason");
  if (reason_value) {
    errors->SetName("reason");
    result->reason_ = internal::FromValue<::headless::audits::HeavyAdReason>::Parse(*reason_value, errors);
  } else {
    errors->AddError("required property missing: reason");
  }
  const base::Value* frame_value = dict.Find("frame");
  if (frame_value) {
    errors->SetName("frame");
    result->frame_ = internal::FromValue<::headless::audits::AffectedFrame>::Parse(*frame_value, errors);
  } else {
    errors->AddError("required property missing: frame");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value HeavyAdIssueDetails::Serialize() const {
  base::Value::Dict result;
  result.Set("resolution", internal::ToValue(resolution_));
  result.Set("reason", internal::ToValue(reason_));
  result.Set("frame", internal::ToValue(*frame_));
  return base::Value(std::move(result));
}

std::unique_ptr<HeavyAdIssueDetails> HeavyAdIssueDetails::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<HeavyAdIssueDetails> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SourceCodeLocation> SourceCodeLocation::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SourceCodeLocation");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SourceCodeLocation> result(new SourceCodeLocation());
  errors->Push();
  errors->SetName("SourceCodeLocation");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* script_id_value = dict.Find("scriptId");
  if (script_id_value) {
    errors->SetName("scriptId");
    result->script_id_ = internal::FromValue<std::string>::Parse(*script_id_value, errors);
  }
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
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

base::Value SourceCodeLocation::Serialize() const {
  base::Value::Dict result;
  if (script_id_)
    result.Set("scriptId", internal::ToValue(script_id_.value()));
  result.Set("url", internal::ToValue(url_));
  result.Set("lineNumber", internal::ToValue(line_number_));
  result.Set("columnNumber", internal::ToValue(column_number_));
  return base::Value(std::move(result));
}

std::unique_ptr<SourceCodeLocation> SourceCodeLocation::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SourceCodeLocation> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ContentSecurityPolicyIssueDetails> ContentSecurityPolicyIssueDetails::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ContentSecurityPolicyIssueDetails");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ContentSecurityPolicyIssueDetails> result(new ContentSecurityPolicyIssueDetails());
  errors->Push();
  errors->SetName("ContentSecurityPolicyIssueDetails");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* blockedurl_value = dict.Find("blockedURL");
  if (blockedurl_value) {
    errors->SetName("blockedURL");
    result->blockedurl_ = internal::FromValue<std::string>::Parse(*blockedurl_value, errors);
  }
  const base::Value* violated_directive_value = dict.Find("violatedDirective");
  if (violated_directive_value) {
    errors->SetName("violatedDirective");
    result->violated_directive_ = internal::FromValue<std::string>::Parse(*violated_directive_value, errors);
  } else {
    errors->AddError("required property missing: violatedDirective");
  }
  const base::Value* is_report_only_value = dict.Find("isReportOnly");
  if (is_report_only_value) {
    errors->SetName("isReportOnly");
    result->is_report_only_ = internal::FromValue<bool>::Parse(*is_report_only_value, errors);
  } else {
    errors->AddError("required property missing: isReportOnly");
  }
  const base::Value* content_security_policy_violation_type_value = dict.Find("contentSecurityPolicyViolationType");
  if (content_security_policy_violation_type_value) {
    errors->SetName("contentSecurityPolicyViolationType");
    result->content_security_policy_violation_type_ = internal::FromValue<::headless::audits::ContentSecurityPolicyViolationType>::Parse(*content_security_policy_violation_type_value, errors);
  } else {
    errors->AddError("required property missing: contentSecurityPolicyViolationType");
  }
  const base::Value* frame_ancestor_value = dict.Find("frameAncestor");
  if (frame_ancestor_value) {
    errors->SetName("frameAncestor");
    result->frame_ancestor_ = internal::FromValue<::headless::audits::AffectedFrame>::Parse(*frame_ancestor_value, errors);
  }
  const base::Value* source_code_location_value = dict.Find("sourceCodeLocation");
  if (source_code_location_value) {
    errors->SetName("sourceCodeLocation");
    result->source_code_location_ = internal::FromValue<::headless::audits::SourceCodeLocation>::Parse(*source_code_location_value, errors);
  }
  const base::Value* violating_node_id_value = dict.Find("violatingNodeId");
  if (violating_node_id_value) {
    errors->SetName("violatingNodeId");
    result->violating_node_id_ = internal::FromValue<int>::Parse(*violating_node_id_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ContentSecurityPolicyIssueDetails::Serialize() const {
  base::Value::Dict result;
  if (blockedurl_)
    result.Set("blockedURL", internal::ToValue(blockedurl_.value()));
  result.Set("violatedDirective", internal::ToValue(violated_directive_));
  result.Set("isReportOnly", internal::ToValue(is_report_only_));
  result.Set("contentSecurityPolicyViolationType", internal::ToValue(content_security_policy_violation_type_));
  if (frame_ancestor_)
    result.Set("frameAncestor", internal::ToValue(*frame_ancestor_.value()));
  if (source_code_location_)
    result.Set("sourceCodeLocation", internal::ToValue(*source_code_location_.value()));
  if (violating_node_id_)
    result.Set("violatingNodeId", internal::ToValue(violating_node_id_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<ContentSecurityPolicyIssueDetails> ContentSecurityPolicyIssueDetails::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ContentSecurityPolicyIssueDetails> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SharedArrayBufferIssueDetails> SharedArrayBufferIssueDetails::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SharedArrayBufferIssueDetails");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SharedArrayBufferIssueDetails> result(new SharedArrayBufferIssueDetails());
  errors->Push();
  errors->SetName("SharedArrayBufferIssueDetails");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* source_code_location_value = dict.Find("sourceCodeLocation");
  if (source_code_location_value) {
    errors->SetName("sourceCodeLocation");
    result->source_code_location_ = internal::FromValue<::headless::audits::SourceCodeLocation>::Parse(*source_code_location_value, errors);
  } else {
    errors->AddError("required property missing: sourceCodeLocation");
  }
  const base::Value* is_warning_value = dict.Find("isWarning");
  if (is_warning_value) {
    errors->SetName("isWarning");
    result->is_warning_ = internal::FromValue<bool>::Parse(*is_warning_value, errors);
  } else {
    errors->AddError("required property missing: isWarning");
  }
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    errors->SetName("type");
    result->type_ = internal::FromValue<::headless::audits::SharedArrayBufferIssueType>::Parse(*type_value, errors);
  } else {
    errors->AddError("required property missing: type");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SharedArrayBufferIssueDetails::Serialize() const {
  base::Value::Dict result;
  result.Set("sourceCodeLocation", internal::ToValue(*source_code_location_));
  result.Set("isWarning", internal::ToValue(is_warning_));
  result.Set("type", internal::ToValue(type_));
  return base::Value(std::move(result));
}

std::unique_ptr<SharedArrayBufferIssueDetails> SharedArrayBufferIssueDetails::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SharedArrayBufferIssueDetails> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<LowTextContrastIssueDetails> LowTextContrastIssueDetails::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("LowTextContrastIssueDetails");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<LowTextContrastIssueDetails> result(new LowTextContrastIssueDetails());
  errors->Push();
  errors->SetName("LowTextContrastIssueDetails");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* violating_node_id_value = dict.Find("violatingNodeId");
  if (violating_node_id_value) {
    errors->SetName("violatingNodeId");
    result->violating_node_id_ = internal::FromValue<int>::Parse(*violating_node_id_value, errors);
  } else {
    errors->AddError("required property missing: violatingNodeId");
  }
  const base::Value* violating_node_selector_value = dict.Find("violatingNodeSelector");
  if (violating_node_selector_value) {
    errors->SetName("violatingNodeSelector");
    result->violating_node_selector_ = internal::FromValue<std::string>::Parse(*violating_node_selector_value, errors);
  } else {
    errors->AddError("required property missing: violatingNodeSelector");
  }
  const base::Value* contrast_ratio_value = dict.Find("contrastRatio");
  if (contrast_ratio_value) {
    errors->SetName("contrastRatio");
    result->contrast_ratio_ = internal::FromValue<double>::Parse(*contrast_ratio_value, errors);
  } else {
    errors->AddError("required property missing: contrastRatio");
  }
  const base::Value* thresholdaa_value = dict.Find("thresholdAA");
  if (thresholdaa_value) {
    errors->SetName("thresholdAA");
    result->thresholdaa_ = internal::FromValue<double>::Parse(*thresholdaa_value, errors);
  } else {
    errors->AddError("required property missing: thresholdAA");
  }
  const base::Value* thresholdaaa_value = dict.Find("thresholdAAA");
  if (thresholdaaa_value) {
    errors->SetName("thresholdAAA");
    result->thresholdaaa_ = internal::FromValue<double>::Parse(*thresholdaaa_value, errors);
  } else {
    errors->AddError("required property missing: thresholdAAA");
  }
  const base::Value* font_size_value = dict.Find("fontSize");
  if (font_size_value) {
    errors->SetName("fontSize");
    result->font_size_ = internal::FromValue<std::string>::Parse(*font_size_value, errors);
  } else {
    errors->AddError("required property missing: fontSize");
  }
  const base::Value* font_weight_value = dict.Find("fontWeight");
  if (font_weight_value) {
    errors->SetName("fontWeight");
    result->font_weight_ = internal::FromValue<std::string>::Parse(*font_weight_value, errors);
  } else {
    errors->AddError("required property missing: fontWeight");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value LowTextContrastIssueDetails::Serialize() const {
  base::Value::Dict result;
  result.Set("violatingNodeId", internal::ToValue(violating_node_id_));
  result.Set("violatingNodeSelector", internal::ToValue(violating_node_selector_));
  result.Set("contrastRatio", internal::ToValue(contrast_ratio_));
  result.Set("thresholdAA", internal::ToValue(thresholdaa_));
  result.Set("thresholdAAA", internal::ToValue(thresholdaaa_));
  result.Set("fontSize", internal::ToValue(font_size_));
  result.Set("fontWeight", internal::ToValue(font_weight_));
  return base::Value(std::move(result));
}

std::unique_ptr<LowTextContrastIssueDetails> LowTextContrastIssueDetails::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<LowTextContrastIssueDetails> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CorsIssueDetails> CorsIssueDetails::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CorsIssueDetails");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CorsIssueDetails> result(new CorsIssueDetails());
  errors->Push();
  errors->SetName("CorsIssueDetails");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* cors_error_status_value = dict.Find("corsErrorStatus");
  if (cors_error_status_value) {
    errors->SetName("corsErrorStatus");
    result->cors_error_status_ = internal::FromValue<::headless::network::CorsErrorStatus>::Parse(*cors_error_status_value, errors);
  } else {
    errors->AddError("required property missing: corsErrorStatus");
  }
  const base::Value* is_warning_value = dict.Find("isWarning");
  if (is_warning_value) {
    errors->SetName("isWarning");
    result->is_warning_ = internal::FromValue<bool>::Parse(*is_warning_value, errors);
  } else {
    errors->AddError("required property missing: isWarning");
  }
  const base::Value* request_value = dict.Find("request");
  if (request_value) {
    errors->SetName("request");
    result->request_ = internal::FromValue<::headless::audits::AffectedRequest>::Parse(*request_value, errors);
  } else {
    errors->AddError("required property missing: request");
  }
  const base::Value* location_value = dict.Find("location");
  if (location_value) {
    errors->SetName("location");
    result->location_ = internal::FromValue<::headless::audits::SourceCodeLocation>::Parse(*location_value, errors);
  }
  const base::Value* initiator_origin_value = dict.Find("initiatorOrigin");
  if (initiator_origin_value) {
    errors->SetName("initiatorOrigin");
    result->initiator_origin_ = internal::FromValue<std::string>::Parse(*initiator_origin_value, errors);
  }
  const base::Value* resourceip_address_space_value = dict.Find("resourceIPAddressSpace");
  if (resourceip_address_space_value) {
    errors->SetName("resourceIPAddressSpace");
    result->resourceip_address_space_ = internal::FromValue<::headless::network::IPAddressSpace>::Parse(*resourceip_address_space_value, errors);
  }
  const base::Value* client_security_state_value = dict.Find("clientSecurityState");
  if (client_security_state_value) {
    errors->SetName("clientSecurityState");
    result->client_security_state_ = internal::FromValue<::headless::network::ClientSecurityState>::Parse(*client_security_state_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CorsIssueDetails::Serialize() const {
  base::Value::Dict result;
  result.Set("corsErrorStatus", internal::ToValue(*cors_error_status_));
  result.Set("isWarning", internal::ToValue(is_warning_));
  result.Set("request", internal::ToValue(*request_));
  if (location_)
    result.Set("location", internal::ToValue(*location_.value()));
  if (initiator_origin_)
    result.Set("initiatorOrigin", internal::ToValue(initiator_origin_.value()));
  if (resourceip_address_space_)
    result.Set("resourceIPAddressSpace", internal::ToValue(resourceip_address_space_.value()));
  if (client_security_state_)
    result.Set("clientSecurityState", internal::ToValue(*client_security_state_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<CorsIssueDetails> CorsIssueDetails::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CorsIssueDetails> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AttributionReportingIssueDetails> AttributionReportingIssueDetails::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AttributionReportingIssueDetails");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AttributionReportingIssueDetails> result(new AttributionReportingIssueDetails());
  errors->Push();
  errors->SetName("AttributionReportingIssueDetails");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* violation_type_value = dict.Find("violationType");
  if (violation_type_value) {
    errors->SetName("violationType");
    result->violation_type_ = internal::FromValue<::headless::audits::AttributionReportingIssueType>::Parse(*violation_type_value, errors);
  } else {
    errors->AddError("required property missing: violationType");
  }
  const base::Value* request_value = dict.Find("request");
  if (request_value) {
    errors->SetName("request");
    result->request_ = internal::FromValue<::headless::audits::AffectedRequest>::Parse(*request_value, errors);
  }
  const base::Value* violating_node_id_value = dict.Find("violatingNodeId");
  if (violating_node_id_value) {
    errors->SetName("violatingNodeId");
    result->violating_node_id_ = internal::FromValue<int>::Parse(*violating_node_id_value, errors);
  }
  const base::Value* invalid_parameter_value = dict.Find("invalidParameter");
  if (invalid_parameter_value) {
    errors->SetName("invalidParameter");
    result->invalid_parameter_ = internal::FromValue<std::string>::Parse(*invalid_parameter_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AttributionReportingIssueDetails::Serialize() const {
  base::Value::Dict result;
  result.Set("violationType", internal::ToValue(violation_type_));
  if (request_)
    result.Set("request", internal::ToValue(*request_.value()));
  if (violating_node_id_)
    result.Set("violatingNodeId", internal::ToValue(violating_node_id_.value()));
  if (invalid_parameter_)
    result.Set("invalidParameter", internal::ToValue(invalid_parameter_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<AttributionReportingIssueDetails> AttributionReportingIssueDetails::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AttributionReportingIssueDetails> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<QuirksModeIssueDetails> QuirksModeIssueDetails::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("QuirksModeIssueDetails");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<QuirksModeIssueDetails> result(new QuirksModeIssueDetails());
  errors->Push();
  errors->SetName("QuirksModeIssueDetails");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* is_limited_quirks_mode_value = dict.Find("isLimitedQuirksMode");
  if (is_limited_quirks_mode_value) {
    errors->SetName("isLimitedQuirksMode");
    result->is_limited_quirks_mode_ = internal::FromValue<bool>::Parse(*is_limited_quirks_mode_value, errors);
  } else {
    errors->AddError("required property missing: isLimitedQuirksMode");
  }
  const base::Value* document_node_id_value = dict.Find("documentNodeId");
  if (document_node_id_value) {
    errors->SetName("documentNodeId");
    result->document_node_id_ = internal::FromValue<int>::Parse(*document_node_id_value, errors);
  } else {
    errors->AddError("required property missing: documentNodeId");
  }
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
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
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value QuirksModeIssueDetails::Serialize() const {
  base::Value::Dict result;
  result.Set("isLimitedQuirksMode", internal::ToValue(is_limited_quirks_mode_));
  result.Set("documentNodeId", internal::ToValue(document_node_id_));
  result.Set("url", internal::ToValue(url_));
  result.Set("frameId", internal::ToValue(frame_id_));
  result.Set("loaderId", internal::ToValue(loader_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<QuirksModeIssueDetails> QuirksModeIssueDetails::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<QuirksModeIssueDetails> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<NavigatorUserAgentIssueDetails> NavigatorUserAgentIssueDetails::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("NavigatorUserAgentIssueDetails");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<NavigatorUserAgentIssueDetails> result(new NavigatorUserAgentIssueDetails());
  errors->Push();
  errors->SetName("NavigatorUserAgentIssueDetails");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  const base::Value* location_value = dict.Find("location");
  if (location_value) {
    errors->SetName("location");
    result->location_ = internal::FromValue<::headless::audits::SourceCodeLocation>::Parse(*location_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value NavigatorUserAgentIssueDetails::Serialize() const {
  base::Value::Dict result;
  result.Set("url", internal::ToValue(url_));
  if (location_)
    result.Set("location", internal::ToValue(*location_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<NavigatorUserAgentIssueDetails> NavigatorUserAgentIssueDetails::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<NavigatorUserAgentIssueDetails> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GenericIssueDetails> GenericIssueDetails::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GenericIssueDetails");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GenericIssueDetails> result(new GenericIssueDetails());
  errors->Push();
  errors->SetName("GenericIssueDetails");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* error_type_value = dict.Find("errorType");
  if (error_type_value) {
    errors->SetName("errorType");
    result->error_type_ = internal::FromValue<::headless::audits::GenericIssueErrorType>::Parse(*error_type_value, errors);
  } else {
    errors->AddError("required property missing: errorType");
  }
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  }
  const base::Value* violating_node_id_value = dict.Find("violatingNodeId");
  if (violating_node_id_value) {
    errors->SetName("violatingNodeId");
    result->violating_node_id_ = internal::FromValue<int>::Parse(*violating_node_id_value, errors);
  }
  const base::Value* violating_node_attribute_value = dict.Find("violatingNodeAttribute");
  if (violating_node_attribute_value) {
    errors->SetName("violatingNodeAttribute");
    result->violating_node_attribute_ = internal::FromValue<std::string>::Parse(*violating_node_attribute_value, errors);
  }
  const base::Value* request_value = dict.Find("request");
  if (request_value) {
    errors->SetName("request");
    result->request_ = internal::FromValue<::headless::audits::AffectedRequest>::Parse(*request_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GenericIssueDetails::Serialize() const {
  base::Value::Dict result;
  result.Set("errorType", internal::ToValue(error_type_));
  if (frame_id_)
    result.Set("frameId", internal::ToValue(frame_id_.value()));
  if (violating_node_id_)
    result.Set("violatingNodeId", internal::ToValue(violating_node_id_.value()));
  if (violating_node_attribute_)
    result.Set("violatingNodeAttribute", internal::ToValue(violating_node_attribute_.value()));
  if (request_)
    result.Set("request", internal::ToValue(*request_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<GenericIssueDetails> GenericIssueDetails::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GenericIssueDetails> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DeprecationIssueDetails> DeprecationIssueDetails::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DeprecationIssueDetails");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DeprecationIssueDetails> result(new DeprecationIssueDetails());
  errors->Push();
  errors->SetName("DeprecationIssueDetails");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* affected_frame_value = dict.Find("affectedFrame");
  if (affected_frame_value) {
    errors->SetName("affectedFrame");
    result->affected_frame_ = internal::FromValue<::headless::audits::AffectedFrame>::Parse(*affected_frame_value, errors);
  }
  const base::Value* source_code_location_value = dict.Find("sourceCodeLocation");
  if (source_code_location_value) {
    errors->SetName("sourceCodeLocation");
    result->source_code_location_ = internal::FromValue<::headless::audits::SourceCodeLocation>::Parse(*source_code_location_value, errors);
  } else {
    errors->AddError("required property missing: sourceCodeLocation");
  }
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    errors->SetName("type");
    result->type_ = internal::FromValue<std::string>::Parse(*type_value, errors);
  } else {
    errors->AddError("required property missing: type");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DeprecationIssueDetails::Serialize() const {
  base::Value::Dict result;
  if (affected_frame_)
    result.Set("affectedFrame", internal::ToValue(*affected_frame_.value()));
  result.Set("sourceCodeLocation", internal::ToValue(*source_code_location_));
  result.Set("type", internal::ToValue(type_));
  return base::Value(std::move(result));
}

std::unique_ptr<DeprecationIssueDetails> DeprecationIssueDetails::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DeprecationIssueDetails> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<BounceTrackingIssueDetails> BounceTrackingIssueDetails::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("BounceTrackingIssueDetails");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<BounceTrackingIssueDetails> result(new BounceTrackingIssueDetails());
  errors->Push();
  errors->SetName("BounceTrackingIssueDetails");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* tracking_sites_value = dict.Find("trackingSites");
  if (tracking_sites_value) {
    errors->SetName("trackingSites");
    result->tracking_sites_ = internal::FromValue<std::vector<std::string>>::Parse(*tracking_sites_value, errors);
  } else {
    errors->AddError("required property missing: trackingSites");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value BounceTrackingIssueDetails::Serialize() const {
  base::Value::Dict result;
  result.Set("trackingSites", internal::ToValue(tracking_sites_));
  return base::Value(std::move(result));
}

std::unique_ptr<BounceTrackingIssueDetails> BounceTrackingIssueDetails::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<BounceTrackingIssueDetails> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CookieDeprecationMetadataIssueDetails> CookieDeprecationMetadataIssueDetails::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CookieDeprecationMetadataIssueDetails");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CookieDeprecationMetadataIssueDetails> result(new CookieDeprecationMetadataIssueDetails());
  errors->Push();
  errors->SetName("CookieDeprecationMetadataIssueDetails");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* allowed_sites_value = dict.Find("allowedSites");
  if (allowed_sites_value) {
    errors->SetName("allowedSites");
    result->allowed_sites_ = internal::FromValue<std::vector<std::string>>::Parse(*allowed_sites_value, errors);
  } else {
    errors->AddError("required property missing: allowedSites");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CookieDeprecationMetadataIssueDetails::Serialize() const {
  base::Value::Dict result;
  result.Set("allowedSites", internal::ToValue(allowed_sites_));
  return base::Value(std::move(result));
}

std::unique_ptr<CookieDeprecationMetadataIssueDetails> CookieDeprecationMetadataIssueDetails::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CookieDeprecationMetadataIssueDetails> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<FederatedAuthRequestIssueDetails> FederatedAuthRequestIssueDetails::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("FederatedAuthRequestIssueDetails");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<FederatedAuthRequestIssueDetails> result(new FederatedAuthRequestIssueDetails());
  errors->Push();
  errors->SetName("FederatedAuthRequestIssueDetails");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* federated_auth_request_issue_reason_value = dict.Find("federatedAuthRequestIssueReason");
  if (federated_auth_request_issue_reason_value) {
    errors->SetName("federatedAuthRequestIssueReason");
    result->federated_auth_request_issue_reason_ = internal::FromValue<::headless::audits::FederatedAuthRequestIssueReason>::Parse(*federated_auth_request_issue_reason_value, errors);
  } else {
    errors->AddError("required property missing: federatedAuthRequestIssueReason");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value FederatedAuthRequestIssueDetails::Serialize() const {
  base::Value::Dict result;
  result.Set("federatedAuthRequestIssueReason", internal::ToValue(federated_auth_request_issue_reason_));
  return base::Value(std::move(result));
}

std::unique_ptr<FederatedAuthRequestIssueDetails> FederatedAuthRequestIssueDetails::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<FederatedAuthRequestIssueDetails> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<FederatedAuthUserInfoRequestIssueDetails> FederatedAuthUserInfoRequestIssueDetails::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("FederatedAuthUserInfoRequestIssueDetails");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<FederatedAuthUserInfoRequestIssueDetails> result(new FederatedAuthUserInfoRequestIssueDetails());
  errors->Push();
  errors->SetName("FederatedAuthUserInfoRequestIssueDetails");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* federated_auth_user_info_request_issue_reason_value = dict.Find("federatedAuthUserInfoRequestIssueReason");
  if (federated_auth_user_info_request_issue_reason_value) {
    errors->SetName("federatedAuthUserInfoRequestIssueReason");
    result->federated_auth_user_info_request_issue_reason_ = internal::FromValue<::headless::audits::FederatedAuthUserInfoRequestIssueReason>::Parse(*federated_auth_user_info_request_issue_reason_value, errors);
  } else {
    errors->AddError("required property missing: federatedAuthUserInfoRequestIssueReason");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value FederatedAuthUserInfoRequestIssueDetails::Serialize() const {
  base::Value::Dict result;
  result.Set("federatedAuthUserInfoRequestIssueReason", internal::ToValue(federated_auth_user_info_request_issue_reason_));
  return base::Value(std::move(result));
}

std::unique_ptr<FederatedAuthUserInfoRequestIssueDetails> FederatedAuthUserInfoRequestIssueDetails::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<FederatedAuthUserInfoRequestIssueDetails> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClientHintIssueDetails> ClientHintIssueDetails::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClientHintIssueDetails");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClientHintIssueDetails> result(new ClientHintIssueDetails());
  errors->Push();
  errors->SetName("ClientHintIssueDetails");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* source_code_location_value = dict.Find("sourceCodeLocation");
  if (source_code_location_value) {
    errors->SetName("sourceCodeLocation");
    result->source_code_location_ = internal::FromValue<::headless::audits::SourceCodeLocation>::Parse(*source_code_location_value, errors);
  } else {
    errors->AddError("required property missing: sourceCodeLocation");
  }
  const base::Value* client_hint_issue_reason_value = dict.Find("clientHintIssueReason");
  if (client_hint_issue_reason_value) {
    errors->SetName("clientHintIssueReason");
    result->client_hint_issue_reason_ = internal::FromValue<::headless::audits::ClientHintIssueReason>::Parse(*client_hint_issue_reason_value, errors);
  } else {
    errors->AddError("required property missing: clientHintIssueReason");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClientHintIssueDetails::Serialize() const {
  base::Value::Dict result;
  result.Set("sourceCodeLocation", internal::ToValue(*source_code_location_));
  result.Set("clientHintIssueReason", internal::ToValue(client_hint_issue_reason_));
  return base::Value(std::move(result));
}

std::unique_ptr<ClientHintIssueDetails> ClientHintIssueDetails::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClientHintIssueDetails> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<FailedRequestInfo> FailedRequestInfo::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("FailedRequestInfo");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<FailedRequestInfo> result(new FailedRequestInfo());
  errors->Push();
  errors->SetName("FailedRequestInfo");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  const base::Value* failure_message_value = dict.Find("failureMessage");
  if (failure_message_value) {
    errors->SetName("failureMessage");
    result->failure_message_ = internal::FromValue<std::string>::Parse(*failure_message_value, errors);
  } else {
    errors->AddError("required property missing: failureMessage");
  }
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value FailedRequestInfo::Serialize() const {
  base::Value::Dict result;
  result.Set("url", internal::ToValue(url_));
  result.Set("failureMessage", internal::ToValue(failure_message_));
  if (request_id_)
    result.Set("requestId", internal::ToValue(request_id_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<FailedRequestInfo> FailedRequestInfo::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<FailedRequestInfo> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StylesheetLoadingIssueDetails> StylesheetLoadingIssueDetails::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StylesheetLoadingIssueDetails");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StylesheetLoadingIssueDetails> result(new StylesheetLoadingIssueDetails());
  errors->Push();
  errors->SetName("StylesheetLoadingIssueDetails");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* source_code_location_value = dict.Find("sourceCodeLocation");
  if (source_code_location_value) {
    errors->SetName("sourceCodeLocation");
    result->source_code_location_ = internal::FromValue<::headless::audits::SourceCodeLocation>::Parse(*source_code_location_value, errors);
  } else {
    errors->AddError("required property missing: sourceCodeLocation");
  }
  const base::Value* style_sheet_loading_issue_reason_value = dict.Find("styleSheetLoadingIssueReason");
  if (style_sheet_loading_issue_reason_value) {
    errors->SetName("styleSheetLoadingIssueReason");
    result->style_sheet_loading_issue_reason_ = internal::FromValue<::headless::audits::StyleSheetLoadingIssueReason>::Parse(*style_sheet_loading_issue_reason_value, errors);
  } else {
    errors->AddError("required property missing: styleSheetLoadingIssueReason");
  }
  const base::Value* failed_request_info_value = dict.Find("failedRequestInfo");
  if (failed_request_info_value) {
    errors->SetName("failedRequestInfo");
    result->failed_request_info_ = internal::FromValue<::headless::audits::FailedRequestInfo>::Parse(*failed_request_info_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StylesheetLoadingIssueDetails::Serialize() const {
  base::Value::Dict result;
  result.Set("sourceCodeLocation", internal::ToValue(*source_code_location_));
  result.Set("styleSheetLoadingIssueReason", internal::ToValue(style_sheet_loading_issue_reason_));
  if (failed_request_info_)
    result.Set("failedRequestInfo", internal::ToValue(*failed_request_info_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<StylesheetLoadingIssueDetails> StylesheetLoadingIssueDetails::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StylesheetLoadingIssueDetails> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<PropertyRuleIssueDetails> PropertyRuleIssueDetails::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PropertyRuleIssueDetails");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PropertyRuleIssueDetails> result(new PropertyRuleIssueDetails());
  errors->Push();
  errors->SetName("PropertyRuleIssueDetails");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* source_code_location_value = dict.Find("sourceCodeLocation");
  if (source_code_location_value) {
    errors->SetName("sourceCodeLocation");
    result->source_code_location_ = internal::FromValue<::headless::audits::SourceCodeLocation>::Parse(*source_code_location_value, errors);
  } else {
    errors->AddError("required property missing: sourceCodeLocation");
  }
  const base::Value* property_rule_issue_reason_value = dict.Find("propertyRuleIssueReason");
  if (property_rule_issue_reason_value) {
    errors->SetName("propertyRuleIssueReason");
    result->property_rule_issue_reason_ = internal::FromValue<::headless::audits::PropertyRuleIssueReason>::Parse(*property_rule_issue_reason_value, errors);
  } else {
    errors->AddError("required property missing: propertyRuleIssueReason");
  }
  const base::Value* property_value_value = dict.Find("propertyValue");
  if (property_value_value) {
    errors->SetName("propertyValue");
    result->property_value_ = internal::FromValue<std::string>::Parse(*property_value_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PropertyRuleIssueDetails::Serialize() const {
  base::Value::Dict result;
  result.Set("sourceCodeLocation", internal::ToValue(*source_code_location_));
  result.Set("propertyRuleIssueReason", internal::ToValue(property_rule_issue_reason_));
  if (property_value_)
    result.Set("propertyValue", internal::ToValue(property_value_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<PropertyRuleIssueDetails> PropertyRuleIssueDetails::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PropertyRuleIssueDetails> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<InspectorIssueDetails> InspectorIssueDetails::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("InspectorIssueDetails");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<InspectorIssueDetails> result(new InspectorIssueDetails());
  errors->Push();
  errors->SetName("InspectorIssueDetails");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* cookie_issue_details_value = dict.Find("cookieIssueDetails");
  if (cookie_issue_details_value) {
    errors->SetName("cookieIssueDetails");
    result->cookie_issue_details_ = internal::FromValue<::headless::audits::CookieIssueDetails>::Parse(*cookie_issue_details_value, errors);
  }
  const base::Value* mixed_content_issue_details_value = dict.Find("mixedContentIssueDetails");
  if (mixed_content_issue_details_value) {
    errors->SetName("mixedContentIssueDetails");
    result->mixed_content_issue_details_ = internal::FromValue<::headless::audits::MixedContentIssueDetails>::Parse(*mixed_content_issue_details_value, errors);
  }
  const base::Value* blocked_by_response_issue_details_value = dict.Find("blockedByResponseIssueDetails");
  if (blocked_by_response_issue_details_value) {
    errors->SetName("blockedByResponseIssueDetails");
    result->blocked_by_response_issue_details_ = internal::FromValue<::headless::audits::BlockedByResponseIssueDetails>::Parse(*blocked_by_response_issue_details_value, errors);
  }
  const base::Value* heavy_ad_issue_details_value = dict.Find("heavyAdIssueDetails");
  if (heavy_ad_issue_details_value) {
    errors->SetName("heavyAdIssueDetails");
    result->heavy_ad_issue_details_ = internal::FromValue<::headless::audits::HeavyAdIssueDetails>::Parse(*heavy_ad_issue_details_value, errors);
  }
  const base::Value* content_security_policy_issue_details_value = dict.Find("contentSecurityPolicyIssueDetails");
  if (content_security_policy_issue_details_value) {
    errors->SetName("contentSecurityPolicyIssueDetails");
    result->content_security_policy_issue_details_ = internal::FromValue<::headless::audits::ContentSecurityPolicyIssueDetails>::Parse(*content_security_policy_issue_details_value, errors);
  }
  const base::Value* shared_array_buffer_issue_details_value = dict.Find("sharedArrayBufferIssueDetails");
  if (shared_array_buffer_issue_details_value) {
    errors->SetName("sharedArrayBufferIssueDetails");
    result->shared_array_buffer_issue_details_ = internal::FromValue<::headless::audits::SharedArrayBufferIssueDetails>::Parse(*shared_array_buffer_issue_details_value, errors);
  }
  const base::Value* low_text_contrast_issue_details_value = dict.Find("lowTextContrastIssueDetails");
  if (low_text_contrast_issue_details_value) {
    errors->SetName("lowTextContrastIssueDetails");
    result->low_text_contrast_issue_details_ = internal::FromValue<::headless::audits::LowTextContrastIssueDetails>::Parse(*low_text_contrast_issue_details_value, errors);
  }
  const base::Value* cors_issue_details_value = dict.Find("corsIssueDetails");
  if (cors_issue_details_value) {
    errors->SetName("corsIssueDetails");
    result->cors_issue_details_ = internal::FromValue<::headless::audits::CorsIssueDetails>::Parse(*cors_issue_details_value, errors);
  }
  const base::Value* attribution_reporting_issue_details_value = dict.Find("attributionReportingIssueDetails");
  if (attribution_reporting_issue_details_value) {
    errors->SetName("attributionReportingIssueDetails");
    result->attribution_reporting_issue_details_ = internal::FromValue<::headless::audits::AttributionReportingIssueDetails>::Parse(*attribution_reporting_issue_details_value, errors);
  }
  const base::Value* quirks_mode_issue_details_value = dict.Find("quirksModeIssueDetails");
  if (quirks_mode_issue_details_value) {
    errors->SetName("quirksModeIssueDetails");
    result->quirks_mode_issue_details_ = internal::FromValue<::headless::audits::QuirksModeIssueDetails>::Parse(*quirks_mode_issue_details_value, errors);
  }
  const base::Value* navigator_user_agent_issue_details_value = dict.Find("navigatorUserAgentIssueDetails");
  if (navigator_user_agent_issue_details_value) {
    errors->SetName("navigatorUserAgentIssueDetails");
    result->navigator_user_agent_issue_details_ = internal::FromValue<::headless::audits::NavigatorUserAgentIssueDetails>::Parse(*navigator_user_agent_issue_details_value, errors);
  }
  const base::Value* generic_issue_details_value = dict.Find("genericIssueDetails");
  if (generic_issue_details_value) {
    errors->SetName("genericIssueDetails");
    result->generic_issue_details_ = internal::FromValue<::headless::audits::GenericIssueDetails>::Parse(*generic_issue_details_value, errors);
  }
  const base::Value* deprecation_issue_details_value = dict.Find("deprecationIssueDetails");
  if (deprecation_issue_details_value) {
    errors->SetName("deprecationIssueDetails");
    result->deprecation_issue_details_ = internal::FromValue<::headless::audits::DeprecationIssueDetails>::Parse(*deprecation_issue_details_value, errors);
  }
  const base::Value* client_hint_issue_details_value = dict.Find("clientHintIssueDetails");
  if (client_hint_issue_details_value) {
    errors->SetName("clientHintIssueDetails");
    result->client_hint_issue_details_ = internal::FromValue<::headless::audits::ClientHintIssueDetails>::Parse(*client_hint_issue_details_value, errors);
  }
  const base::Value* federated_auth_request_issue_details_value = dict.Find("federatedAuthRequestIssueDetails");
  if (federated_auth_request_issue_details_value) {
    errors->SetName("federatedAuthRequestIssueDetails");
    result->federated_auth_request_issue_details_ = internal::FromValue<::headless::audits::FederatedAuthRequestIssueDetails>::Parse(*federated_auth_request_issue_details_value, errors);
  }
  const base::Value* bounce_tracking_issue_details_value = dict.Find("bounceTrackingIssueDetails");
  if (bounce_tracking_issue_details_value) {
    errors->SetName("bounceTrackingIssueDetails");
    result->bounce_tracking_issue_details_ = internal::FromValue<::headless::audits::BounceTrackingIssueDetails>::Parse(*bounce_tracking_issue_details_value, errors);
  }
  const base::Value* cookie_deprecation_metadata_issue_details_value = dict.Find("cookieDeprecationMetadataIssueDetails");
  if (cookie_deprecation_metadata_issue_details_value) {
    errors->SetName("cookieDeprecationMetadataIssueDetails");
    result->cookie_deprecation_metadata_issue_details_ = internal::FromValue<::headless::audits::CookieDeprecationMetadataIssueDetails>::Parse(*cookie_deprecation_metadata_issue_details_value, errors);
  }
  const base::Value* stylesheet_loading_issue_details_value = dict.Find("stylesheetLoadingIssueDetails");
  if (stylesheet_loading_issue_details_value) {
    errors->SetName("stylesheetLoadingIssueDetails");
    result->stylesheet_loading_issue_details_ = internal::FromValue<::headless::audits::StylesheetLoadingIssueDetails>::Parse(*stylesheet_loading_issue_details_value, errors);
  }
  const base::Value* property_rule_issue_details_value = dict.Find("propertyRuleIssueDetails");
  if (property_rule_issue_details_value) {
    errors->SetName("propertyRuleIssueDetails");
    result->property_rule_issue_details_ = internal::FromValue<::headless::audits::PropertyRuleIssueDetails>::Parse(*property_rule_issue_details_value, errors);
  }
  const base::Value* federated_auth_user_info_request_issue_details_value = dict.Find("federatedAuthUserInfoRequestIssueDetails");
  if (federated_auth_user_info_request_issue_details_value) {
    errors->SetName("federatedAuthUserInfoRequestIssueDetails");
    result->federated_auth_user_info_request_issue_details_ = internal::FromValue<::headless::audits::FederatedAuthUserInfoRequestIssueDetails>::Parse(*federated_auth_user_info_request_issue_details_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value InspectorIssueDetails::Serialize() const {
  base::Value::Dict result;
  if (cookie_issue_details_)
    result.Set("cookieIssueDetails", internal::ToValue(*cookie_issue_details_.value()));
  if (mixed_content_issue_details_)
    result.Set("mixedContentIssueDetails", internal::ToValue(*mixed_content_issue_details_.value()));
  if (blocked_by_response_issue_details_)
    result.Set("blockedByResponseIssueDetails", internal::ToValue(*blocked_by_response_issue_details_.value()));
  if (heavy_ad_issue_details_)
    result.Set("heavyAdIssueDetails", internal::ToValue(*heavy_ad_issue_details_.value()));
  if (content_security_policy_issue_details_)
    result.Set("contentSecurityPolicyIssueDetails", internal::ToValue(*content_security_policy_issue_details_.value()));
  if (shared_array_buffer_issue_details_)
    result.Set("sharedArrayBufferIssueDetails", internal::ToValue(*shared_array_buffer_issue_details_.value()));
  if (low_text_contrast_issue_details_)
    result.Set("lowTextContrastIssueDetails", internal::ToValue(*low_text_contrast_issue_details_.value()));
  if (cors_issue_details_)
    result.Set("corsIssueDetails", internal::ToValue(*cors_issue_details_.value()));
  if (attribution_reporting_issue_details_)
    result.Set("attributionReportingIssueDetails", internal::ToValue(*attribution_reporting_issue_details_.value()));
  if (quirks_mode_issue_details_)
    result.Set("quirksModeIssueDetails", internal::ToValue(*quirks_mode_issue_details_.value()));
  if (navigator_user_agent_issue_details_)
    result.Set("navigatorUserAgentIssueDetails", internal::ToValue(*navigator_user_agent_issue_details_.value()));
  if (generic_issue_details_)
    result.Set("genericIssueDetails", internal::ToValue(*generic_issue_details_.value()));
  if (deprecation_issue_details_)
    result.Set("deprecationIssueDetails", internal::ToValue(*deprecation_issue_details_.value()));
  if (client_hint_issue_details_)
    result.Set("clientHintIssueDetails", internal::ToValue(*client_hint_issue_details_.value()));
  if (federated_auth_request_issue_details_)
    result.Set("federatedAuthRequestIssueDetails", internal::ToValue(*federated_auth_request_issue_details_.value()));
  if (bounce_tracking_issue_details_)
    result.Set("bounceTrackingIssueDetails", internal::ToValue(*bounce_tracking_issue_details_.value()));
  if (cookie_deprecation_metadata_issue_details_)
    result.Set("cookieDeprecationMetadataIssueDetails", internal::ToValue(*cookie_deprecation_metadata_issue_details_.value()));
  if (stylesheet_loading_issue_details_)
    result.Set("stylesheetLoadingIssueDetails", internal::ToValue(*stylesheet_loading_issue_details_.value()));
  if (property_rule_issue_details_)
    result.Set("propertyRuleIssueDetails", internal::ToValue(*property_rule_issue_details_.value()));
  if (federated_auth_user_info_request_issue_details_)
    result.Set("federatedAuthUserInfoRequestIssueDetails", internal::ToValue(*federated_auth_user_info_request_issue_details_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<InspectorIssueDetails> InspectorIssueDetails::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<InspectorIssueDetails> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<InspectorIssue> InspectorIssue::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("InspectorIssue");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<InspectorIssue> result(new InspectorIssue());
  errors->Push();
  errors->SetName("InspectorIssue");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* code_value = dict.Find("code");
  if (code_value) {
    errors->SetName("code");
    result->code_ = internal::FromValue<::headless::audits::InspectorIssueCode>::Parse(*code_value, errors);
  } else {
    errors->AddError("required property missing: code");
  }
  const base::Value* details_value = dict.Find("details");
  if (details_value) {
    errors->SetName("details");
    result->details_ = internal::FromValue<::headless::audits::InspectorIssueDetails>::Parse(*details_value, errors);
  } else {
    errors->AddError("required property missing: details");
  }
  const base::Value* issue_id_value = dict.Find("issueId");
  if (issue_id_value) {
    errors->SetName("issueId");
    result->issue_id_ = internal::FromValue<std::string>::Parse(*issue_id_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value InspectorIssue::Serialize() const {
  base::Value::Dict result;
  result.Set("code", internal::ToValue(code_));
  result.Set("details", internal::ToValue(*details_));
  if (issue_id_)
    result.Set("issueId", internal::ToValue(issue_id_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<InspectorIssue> InspectorIssue::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<InspectorIssue> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetEncodedResponseParams> GetEncodedResponseParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetEncodedResponseParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetEncodedResponseParams> result(new GetEncodedResponseParams());
  errors->Push();
  errors->SetName("GetEncodedResponseParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    errors->SetName("requestId");
    result->request_id_ = internal::FromValue<std::string>::Parse(*request_id_value, errors);
  } else {
    errors->AddError("required property missing: requestId");
  }
  const base::Value* encoding_value = dict.Find("encoding");
  if (encoding_value) {
    errors->SetName("encoding");
    result->encoding_ = internal::FromValue<::headless::audits::GetEncodedResponseEncoding>::Parse(*encoding_value, errors);
  } else {
    errors->AddError("required property missing: encoding");
  }
  const base::Value* quality_value = dict.Find("quality");
  if (quality_value) {
    errors->SetName("quality");
    result->quality_ = internal::FromValue<double>::Parse(*quality_value, errors);
  }
  const base::Value* size_only_value = dict.Find("sizeOnly");
  if (size_only_value) {
    errors->SetName("sizeOnly");
    result->size_only_ = internal::FromValue<bool>::Parse(*size_only_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetEncodedResponseParams::Serialize() const {
  base::Value::Dict result;
  result.Set("requestId", internal::ToValue(request_id_));
  result.Set("encoding", internal::ToValue(encoding_));
  if (quality_)
    result.Set("quality", internal::ToValue(quality_.value()));
  if (size_only_)
    result.Set("sizeOnly", internal::ToValue(size_only_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<GetEncodedResponseParams> GetEncodedResponseParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetEncodedResponseParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetEncodedResponseResult> GetEncodedResponseResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetEncodedResponseResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetEncodedResponseResult> result(new GetEncodedResponseResult());
  errors->Push();
  errors->SetName("GetEncodedResponseResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* body_value = dict.Find("body");
  if (body_value) {
    errors->SetName("body");
    result->body_ = internal::FromValue<protocol::Binary>::Parse(*body_value, errors);
  }
  const base::Value* original_size_value = dict.Find("originalSize");
  if (original_size_value) {
    errors->SetName("originalSize");
    result->original_size_ = internal::FromValue<int>::Parse(*original_size_value, errors);
  } else {
    errors->AddError("required property missing: originalSize");
  }
  const base::Value* encoded_size_value = dict.Find("encodedSize");
  if (encoded_size_value) {
    errors->SetName("encodedSize");
    result->encoded_size_ = internal::FromValue<int>::Parse(*encoded_size_value, errors);
  } else {
    errors->AddError("required property missing: encodedSize");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetEncodedResponseResult::Serialize() const {
  base::Value::Dict result;
  if (body_)
    result.Set("body", internal::ToValue(body_.value()));
  result.Set("originalSize", internal::ToValue(original_size_));
  result.Set("encodedSize", internal::ToValue(encoded_size_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetEncodedResponseResult> GetEncodedResponseResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetEncodedResponseResult> result = Parse(Serialize(), &errors);
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


std::unique_ptr<CheckContrastParams> CheckContrastParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CheckContrastParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CheckContrastParams> result(new CheckContrastParams());
  errors->Push();
  errors->SetName("CheckContrastParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* reportaaa_value = dict.Find("reportAAA");
  if (reportaaa_value) {
    errors->SetName("reportAAA");
    result->reportaaa_ = internal::FromValue<bool>::Parse(*reportaaa_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CheckContrastParams::Serialize() const {
  base::Value::Dict result;
  if (reportaaa_)
    result.Set("reportAAA", internal::ToValue(reportaaa_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<CheckContrastParams> CheckContrastParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CheckContrastParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CheckContrastResult> CheckContrastResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CheckContrastResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CheckContrastResult> result(new CheckContrastResult());
  errors->Push();
  errors->SetName("CheckContrastResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CheckContrastResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<CheckContrastResult> CheckContrastResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CheckContrastResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CheckFormsIssuesParams> CheckFormsIssuesParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CheckFormsIssuesParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CheckFormsIssuesParams> result(new CheckFormsIssuesParams());
  errors->Push();
  errors->SetName("CheckFormsIssuesParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CheckFormsIssuesParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<CheckFormsIssuesParams> CheckFormsIssuesParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CheckFormsIssuesParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CheckFormsIssuesResult> CheckFormsIssuesResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CheckFormsIssuesResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CheckFormsIssuesResult> result(new CheckFormsIssuesResult());
  errors->Push();
  errors->SetName("CheckFormsIssuesResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* form_issues_value = dict.Find("formIssues");
  if (form_issues_value) {
    errors->SetName("formIssues");
    result->form_issues_ = internal::FromValue<std::vector<std::unique_ptr<::headless::audits::GenericIssueDetails>>>::Parse(*form_issues_value, errors);
  } else {
    errors->AddError("required property missing: formIssues");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CheckFormsIssuesResult::Serialize() const {
  base::Value::Dict result;
  result.Set("formIssues", internal::ToValue(form_issues_));
  return base::Value(std::move(result));
}

std::unique_ptr<CheckFormsIssuesResult> CheckFormsIssuesResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CheckFormsIssuesResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<IssueAddedParams> IssueAddedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("IssueAddedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<IssueAddedParams> result(new IssueAddedParams());
  errors->Push();
  errors->SetName("IssueAddedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* issue_value = dict.Find("issue");
  if (issue_value) {
    errors->SetName("issue");
    result->issue_ = internal::FromValue<::headless::audits::InspectorIssue>::Parse(*issue_value, errors);
  } else {
    errors->AddError("required property missing: issue");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value IssueAddedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("issue", internal::ToValue(*issue_));
  return base::Value(std::move(result));
}

std::unique_ptr<IssueAddedParams> IssueAddedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<IssueAddedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


}  // namespace audits
}  // namespace headless
