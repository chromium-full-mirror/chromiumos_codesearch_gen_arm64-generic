// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_AUDITS_H_
#define HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_AUDITS_H_

#include "base/notreached.h"
#include "base/values.h"
#include "headless/public/devtools/domains/types_audits.h"
#include "headless/public/internal/value_conversions.h"

namespace headless {
namespace internal {


template <>
struct FromValue<audits::AffectedCookie> {
  static std::unique_ptr<audits::AffectedCookie> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::AffectedCookie::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::AffectedCookie& value) {
  return value.Serialize();
}


template <>
struct FromValue<audits::AffectedRequest> {
  static std::unique_ptr<audits::AffectedRequest> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::AffectedRequest::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::AffectedRequest& value) {
  return value.Serialize();
}


template <>
struct FromValue<audits::AffectedFrame> {
  static std::unique_ptr<audits::AffectedFrame> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::AffectedFrame::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::AffectedFrame& value) {
  return value.Serialize();
}

template <>
struct FromValue<audits::CookieExclusionReason> {
  static audits::CookieExclusionReason Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return audits::CookieExclusionReason::EXCLUDE_SAME_SITE_UNSPECIFIED_TREATED_AS_LAX;
    }
    if (value.GetString() == "ExcludeSameSiteUnspecifiedTreatedAsLax")
      return audits::CookieExclusionReason::EXCLUDE_SAME_SITE_UNSPECIFIED_TREATED_AS_LAX;
    if (value.GetString() == "ExcludeSameSiteNoneInsecure")
      return audits::CookieExclusionReason::EXCLUDE_SAME_SITE_NONE_INSECURE;
    if (value.GetString() == "ExcludeSameSiteLax")
      return audits::CookieExclusionReason::EXCLUDE_SAME_SITE_LAX;
    if (value.GetString() == "ExcludeSameSiteStrict")
      return audits::CookieExclusionReason::EXCLUDE_SAME_SITE_STRICT;
    if (value.GetString() == "ExcludeInvalidSameParty")
      return audits::CookieExclusionReason::EXCLUDE_INVALID_SAME_PARTY;
    if (value.GetString() == "ExcludeSamePartyCrossPartyContext")
      return audits::CookieExclusionReason::EXCLUDE_SAME_PARTY_CROSS_PARTY_CONTEXT;
    if (value.GetString() == "ExcludeDomainNonASCII")
      return audits::CookieExclusionReason::EXCLUDE_DOMAIN_NONASCII;
    if (value.GetString() == "ExcludeThirdPartyCookieBlockedInFirstPartySet")
      return audits::CookieExclusionReason::EXCLUDE_THIRD_PARTY_COOKIE_BLOCKED_IN_FIRST_PARTY_SET;
    if (value.GetString() == "ExcludeThirdPartyPhaseout")
      return audits::CookieExclusionReason::EXCLUDE_THIRD_PARTY_PHASEOUT;
    errors->AddError("invalid enum value");
    return audits::CookieExclusionReason::EXCLUDE_SAME_SITE_UNSPECIFIED_TREATED_AS_LAX;
  }
};

template <>
inline base::Value ToValue(const audits::CookieExclusionReason& value) {
  switch (value) {
    case audits::CookieExclusionReason::EXCLUDE_SAME_SITE_UNSPECIFIED_TREATED_AS_LAX:
      return base::Value("ExcludeSameSiteUnspecifiedTreatedAsLax");
    case audits::CookieExclusionReason::EXCLUDE_SAME_SITE_NONE_INSECURE:
      return base::Value("ExcludeSameSiteNoneInsecure");
    case audits::CookieExclusionReason::EXCLUDE_SAME_SITE_LAX:
      return base::Value("ExcludeSameSiteLax");
    case audits::CookieExclusionReason::EXCLUDE_SAME_SITE_STRICT:
      return base::Value("ExcludeSameSiteStrict");
    case audits::CookieExclusionReason::EXCLUDE_INVALID_SAME_PARTY:
      return base::Value("ExcludeInvalidSameParty");
    case audits::CookieExclusionReason::EXCLUDE_SAME_PARTY_CROSS_PARTY_CONTEXT:
      return base::Value("ExcludeSamePartyCrossPartyContext");
    case audits::CookieExclusionReason::EXCLUDE_DOMAIN_NONASCII:
      return base::Value("ExcludeDomainNonASCII");
    case audits::CookieExclusionReason::EXCLUDE_THIRD_PARTY_COOKIE_BLOCKED_IN_FIRST_PARTY_SET:
      return base::Value("ExcludeThirdPartyCookieBlockedInFirstPartySet");
    case audits::CookieExclusionReason::EXCLUDE_THIRD_PARTY_PHASEOUT:
      return base::Value("ExcludeThirdPartyPhaseout");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<audits::CookieWarningReason> {
  static audits::CookieWarningReason Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return audits::CookieWarningReason::WARN_SAME_SITE_UNSPECIFIED_CROSS_SITE_CONTEXT;
    }
    if (value.GetString() == "WarnSameSiteUnspecifiedCrossSiteContext")
      return audits::CookieWarningReason::WARN_SAME_SITE_UNSPECIFIED_CROSS_SITE_CONTEXT;
    if (value.GetString() == "WarnSameSiteNoneInsecure")
      return audits::CookieWarningReason::WARN_SAME_SITE_NONE_INSECURE;
    if (value.GetString() == "WarnSameSiteUnspecifiedLaxAllowUnsafe")
      return audits::CookieWarningReason::WARN_SAME_SITE_UNSPECIFIED_LAX_ALLOW_UNSAFE;
    if (value.GetString() == "WarnSameSiteStrictLaxDowngradeStrict")
      return audits::CookieWarningReason::WARN_SAME_SITE_STRICT_LAX_DOWNGRADE_STRICT;
    if (value.GetString() == "WarnSameSiteStrictCrossDowngradeStrict")
      return audits::CookieWarningReason::WARN_SAME_SITE_STRICT_CROSS_DOWNGRADE_STRICT;
    if (value.GetString() == "WarnSameSiteStrictCrossDowngradeLax")
      return audits::CookieWarningReason::WARN_SAME_SITE_STRICT_CROSS_DOWNGRADE_LAX;
    if (value.GetString() == "WarnSameSiteLaxCrossDowngradeStrict")
      return audits::CookieWarningReason::WARN_SAME_SITE_LAX_CROSS_DOWNGRADE_STRICT;
    if (value.GetString() == "WarnSameSiteLaxCrossDowngradeLax")
      return audits::CookieWarningReason::WARN_SAME_SITE_LAX_CROSS_DOWNGRADE_LAX;
    if (value.GetString() == "WarnAttributeValueExceedsMaxSize")
      return audits::CookieWarningReason::WARN_ATTRIBUTE_VALUE_EXCEEDS_MAX_SIZE;
    if (value.GetString() == "WarnDomainNonASCII")
      return audits::CookieWarningReason::WARN_DOMAIN_NONASCII;
    if (value.GetString() == "WarnThirdPartyPhaseout")
      return audits::CookieWarningReason::WARN_THIRD_PARTY_PHASEOUT;
    if (value.GetString() == "WarnCrossSiteRedirectDowngradeChangesInclusion")
      return audits::CookieWarningReason::WARN_CROSS_SITE_REDIRECT_DOWNGRADE_CHANGES_INCLUSION;
    errors->AddError("invalid enum value");
    return audits::CookieWarningReason::WARN_SAME_SITE_UNSPECIFIED_CROSS_SITE_CONTEXT;
  }
};

template <>
inline base::Value ToValue(const audits::CookieWarningReason& value) {
  switch (value) {
    case audits::CookieWarningReason::WARN_SAME_SITE_UNSPECIFIED_CROSS_SITE_CONTEXT:
      return base::Value("WarnSameSiteUnspecifiedCrossSiteContext");
    case audits::CookieWarningReason::WARN_SAME_SITE_NONE_INSECURE:
      return base::Value("WarnSameSiteNoneInsecure");
    case audits::CookieWarningReason::WARN_SAME_SITE_UNSPECIFIED_LAX_ALLOW_UNSAFE:
      return base::Value("WarnSameSiteUnspecifiedLaxAllowUnsafe");
    case audits::CookieWarningReason::WARN_SAME_SITE_STRICT_LAX_DOWNGRADE_STRICT:
      return base::Value("WarnSameSiteStrictLaxDowngradeStrict");
    case audits::CookieWarningReason::WARN_SAME_SITE_STRICT_CROSS_DOWNGRADE_STRICT:
      return base::Value("WarnSameSiteStrictCrossDowngradeStrict");
    case audits::CookieWarningReason::WARN_SAME_SITE_STRICT_CROSS_DOWNGRADE_LAX:
      return base::Value("WarnSameSiteStrictCrossDowngradeLax");
    case audits::CookieWarningReason::WARN_SAME_SITE_LAX_CROSS_DOWNGRADE_STRICT:
      return base::Value("WarnSameSiteLaxCrossDowngradeStrict");
    case audits::CookieWarningReason::WARN_SAME_SITE_LAX_CROSS_DOWNGRADE_LAX:
      return base::Value("WarnSameSiteLaxCrossDowngradeLax");
    case audits::CookieWarningReason::WARN_ATTRIBUTE_VALUE_EXCEEDS_MAX_SIZE:
      return base::Value("WarnAttributeValueExceedsMaxSize");
    case audits::CookieWarningReason::WARN_DOMAIN_NONASCII:
      return base::Value("WarnDomainNonASCII");
    case audits::CookieWarningReason::WARN_THIRD_PARTY_PHASEOUT:
      return base::Value("WarnThirdPartyPhaseout");
    case audits::CookieWarningReason::WARN_CROSS_SITE_REDIRECT_DOWNGRADE_CHANGES_INCLUSION:
      return base::Value("WarnCrossSiteRedirectDowngradeChangesInclusion");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<audits::CookieOperation> {
  static audits::CookieOperation Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return audits::CookieOperation::SET_COOKIE;
    }
    if (value.GetString() == "SetCookie")
      return audits::CookieOperation::SET_COOKIE;
    if (value.GetString() == "ReadCookie")
      return audits::CookieOperation::READ_COOKIE;
    errors->AddError("invalid enum value");
    return audits::CookieOperation::SET_COOKIE;
  }
};

template <>
inline base::Value ToValue(const audits::CookieOperation& value) {
  switch (value) {
    case audits::CookieOperation::SET_COOKIE:
      return base::Value("SetCookie");
    case audits::CookieOperation::READ_COOKIE:
      return base::Value("ReadCookie");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<audits::CookieIssueDetails> {
  static std::unique_ptr<audits::CookieIssueDetails> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::CookieIssueDetails::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::CookieIssueDetails& value) {
  return value.Serialize();
}

template <>
struct FromValue<audits::MixedContentResolutionStatus> {
  static audits::MixedContentResolutionStatus Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return audits::MixedContentResolutionStatus::MIXED_CONTENT_BLOCKED;
    }
    if (value.GetString() == "MixedContentBlocked")
      return audits::MixedContentResolutionStatus::MIXED_CONTENT_BLOCKED;
    if (value.GetString() == "MixedContentAutomaticallyUpgraded")
      return audits::MixedContentResolutionStatus::MIXED_CONTENT_AUTOMATICALLY_UPGRADED;
    if (value.GetString() == "MixedContentWarning")
      return audits::MixedContentResolutionStatus::MIXED_CONTENT_WARNING;
    errors->AddError("invalid enum value");
    return audits::MixedContentResolutionStatus::MIXED_CONTENT_BLOCKED;
  }
};

template <>
inline base::Value ToValue(const audits::MixedContentResolutionStatus& value) {
  switch (value) {
    case audits::MixedContentResolutionStatus::MIXED_CONTENT_BLOCKED:
      return base::Value("MixedContentBlocked");
    case audits::MixedContentResolutionStatus::MIXED_CONTENT_AUTOMATICALLY_UPGRADED:
      return base::Value("MixedContentAutomaticallyUpgraded");
    case audits::MixedContentResolutionStatus::MIXED_CONTENT_WARNING:
      return base::Value("MixedContentWarning");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<audits::MixedContentResourceType> {
  static audits::MixedContentResourceType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return audits::MixedContentResourceType::ATTRIBUTION_SRC;
    }
    if (value.GetString() == "AttributionSrc")
      return audits::MixedContentResourceType::ATTRIBUTION_SRC;
    if (value.GetString() == "Audio")
      return audits::MixedContentResourceType::AUDIO;
    if (value.GetString() == "Beacon")
      return audits::MixedContentResourceType::BEACON;
    if (value.GetString() == "CSPReport")
      return audits::MixedContentResourceType::CSP_REPORT;
    if (value.GetString() == "Download")
      return audits::MixedContentResourceType::DOWNLOAD;
    if (value.GetString() == "EventSource")
      return audits::MixedContentResourceType::EVENT_SOURCE;
    if (value.GetString() == "Favicon")
      return audits::MixedContentResourceType::FAVICON;
    if (value.GetString() == "Font")
      return audits::MixedContentResourceType::FONT;
    if (value.GetString() == "Form")
      return audits::MixedContentResourceType::FORM;
    if (value.GetString() == "Frame")
      return audits::MixedContentResourceType::FRAME;
    if (value.GetString() == "Image")
      return audits::MixedContentResourceType::IMAGE;
    if (value.GetString() == "Import")
      return audits::MixedContentResourceType::IMPORT;
    if (value.GetString() == "Manifest")
      return audits::MixedContentResourceType::MANIFEST;
    if (value.GetString() == "Ping")
      return audits::MixedContentResourceType::PING;
    if (value.GetString() == "PluginData")
      return audits::MixedContentResourceType::PLUGIN_DATA;
    if (value.GetString() == "PluginResource")
      return audits::MixedContentResourceType::PLUGIN_RESOURCE;
    if (value.GetString() == "Prefetch")
      return audits::MixedContentResourceType::PREFETCH;
    if (value.GetString() == "Resource")
      return audits::MixedContentResourceType::RESOURCE;
    if (value.GetString() == "Script")
      return audits::MixedContentResourceType::SCRIPT;
    if (value.GetString() == "ServiceWorker")
      return audits::MixedContentResourceType::SERVICE_WORKER;
    if (value.GetString() == "SharedWorker")
      return audits::MixedContentResourceType::SHARED_WORKER;
    if (value.GetString() == "SpeculationRules")
      return audits::MixedContentResourceType::SPECULATION_RULES;
    if (value.GetString() == "Stylesheet")
      return audits::MixedContentResourceType::STYLESHEET;
    if (value.GetString() == "Track")
      return audits::MixedContentResourceType::TRACK;
    if (value.GetString() == "Video")
      return audits::MixedContentResourceType::VIDEO;
    if (value.GetString() == "Worker")
      return audits::MixedContentResourceType::WORKER;
    if (value.GetString() == "XMLHttpRequest")
      return audits::MixedContentResourceType::XML_HTTP_REQUEST;
    if (value.GetString() == "XSLT")
      return audits::MixedContentResourceType::XSLT;
    errors->AddError("invalid enum value");
    return audits::MixedContentResourceType::ATTRIBUTION_SRC;
  }
};

template <>
inline base::Value ToValue(const audits::MixedContentResourceType& value) {
  switch (value) {
    case audits::MixedContentResourceType::ATTRIBUTION_SRC:
      return base::Value("AttributionSrc");
    case audits::MixedContentResourceType::AUDIO:
      return base::Value("Audio");
    case audits::MixedContentResourceType::BEACON:
      return base::Value("Beacon");
    case audits::MixedContentResourceType::CSP_REPORT:
      return base::Value("CSPReport");
    case audits::MixedContentResourceType::DOWNLOAD:
      return base::Value("Download");
    case audits::MixedContentResourceType::EVENT_SOURCE:
      return base::Value("EventSource");
    case audits::MixedContentResourceType::FAVICON:
      return base::Value("Favicon");
    case audits::MixedContentResourceType::FONT:
      return base::Value("Font");
    case audits::MixedContentResourceType::FORM:
      return base::Value("Form");
    case audits::MixedContentResourceType::FRAME:
      return base::Value("Frame");
    case audits::MixedContentResourceType::IMAGE:
      return base::Value("Image");
    case audits::MixedContentResourceType::IMPORT:
      return base::Value("Import");
    case audits::MixedContentResourceType::MANIFEST:
      return base::Value("Manifest");
    case audits::MixedContentResourceType::PING:
      return base::Value("Ping");
    case audits::MixedContentResourceType::PLUGIN_DATA:
      return base::Value("PluginData");
    case audits::MixedContentResourceType::PLUGIN_RESOURCE:
      return base::Value("PluginResource");
    case audits::MixedContentResourceType::PREFETCH:
      return base::Value("Prefetch");
    case audits::MixedContentResourceType::RESOURCE:
      return base::Value("Resource");
    case audits::MixedContentResourceType::SCRIPT:
      return base::Value("Script");
    case audits::MixedContentResourceType::SERVICE_WORKER:
      return base::Value("ServiceWorker");
    case audits::MixedContentResourceType::SHARED_WORKER:
      return base::Value("SharedWorker");
    case audits::MixedContentResourceType::SPECULATION_RULES:
      return base::Value("SpeculationRules");
    case audits::MixedContentResourceType::STYLESHEET:
      return base::Value("Stylesheet");
    case audits::MixedContentResourceType::TRACK:
      return base::Value("Track");
    case audits::MixedContentResourceType::VIDEO:
      return base::Value("Video");
    case audits::MixedContentResourceType::WORKER:
      return base::Value("Worker");
    case audits::MixedContentResourceType::XML_HTTP_REQUEST:
      return base::Value("XMLHttpRequest");
    case audits::MixedContentResourceType::XSLT:
      return base::Value("XSLT");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<audits::MixedContentIssueDetails> {
  static std::unique_ptr<audits::MixedContentIssueDetails> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::MixedContentIssueDetails::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::MixedContentIssueDetails& value) {
  return value.Serialize();
}

template <>
struct FromValue<audits::BlockedByResponseReason> {
  static audits::BlockedByResponseReason Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return audits::BlockedByResponseReason::COEP_FRAME_RESOURCE_NEEDS_COEP_HEADER;
    }
    if (value.GetString() == "CoepFrameResourceNeedsCoepHeader")
      return audits::BlockedByResponseReason::COEP_FRAME_RESOURCE_NEEDS_COEP_HEADER;
    if (value.GetString() == "CoopSandboxedIFrameCannotNavigateToCoopPage")
      return audits::BlockedByResponseReason::COOP_SANDBOXEDI_FRAME_CANNOT_NAVIGATE_TO_COOP_PAGE;
    if (value.GetString() == "CorpNotSameOrigin")
      return audits::BlockedByResponseReason::CORP_NOT_SAME_ORIGIN;
    if (value.GetString() == "CorpNotSameOriginAfterDefaultedToSameOriginByCoep")
      return audits::BlockedByResponseReason::CORP_NOT_SAME_ORIGIN_AFTER_DEFAULTED_TO_SAME_ORIGIN_BY_COEP;
    if (value.GetString() == "CorpNotSameSite")
      return audits::BlockedByResponseReason::CORP_NOT_SAME_SITE;
    errors->AddError("invalid enum value");
    return audits::BlockedByResponseReason::COEP_FRAME_RESOURCE_NEEDS_COEP_HEADER;
  }
};

template <>
inline base::Value ToValue(const audits::BlockedByResponseReason& value) {
  switch (value) {
    case audits::BlockedByResponseReason::COEP_FRAME_RESOURCE_NEEDS_COEP_HEADER:
      return base::Value("CoepFrameResourceNeedsCoepHeader");
    case audits::BlockedByResponseReason::COOP_SANDBOXEDI_FRAME_CANNOT_NAVIGATE_TO_COOP_PAGE:
      return base::Value("CoopSandboxedIFrameCannotNavigateToCoopPage");
    case audits::BlockedByResponseReason::CORP_NOT_SAME_ORIGIN:
      return base::Value("CorpNotSameOrigin");
    case audits::BlockedByResponseReason::CORP_NOT_SAME_ORIGIN_AFTER_DEFAULTED_TO_SAME_ORIGIN_BY_COEP:
      return base::Value("CorpNotSameOriginAfterDefaultedToSameOriginByCoep");
    case audits::BlockedByResponseReason::CORP_NOT_SAME_SITE:
      return base::Value("CorpNotSameSite");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<audits::BlockedByResponseIssueDetails> {
  static std::unique_ptr<audits::BlockedByResponseIssueDetails> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::BlockedByResponseIssueDetails::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::BlockedByResponseIssueDetails& value) {
  return value.Serialize();
}

template <>
struct FromValue<audits::HeavyAdResolutionStatus> {
  static audits::HeavyAdResolutionStatus Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return audits::HeavyAdResolutionStatus::HEAVY_AD_BLOCKED;
    }
    if (value.GetString() == "HeavyAdBlocked")
      return audits::HeavyAdResolutionStatus::HEAVY_AD_BLOCKED;
    if (value.GetString() == "HeavyAdWarning")
      return audits::HeavyAdResolutionStatus::HEAVY_AD_WARNING;
    errors->AddError("invalid enum value");
    return audits::HeavyAdResolutionStatus::HEAVY_AD_BLOCKED;
  }
};

template <>
inline base::Value ToValue(const audits::HeavyAdResolutionStatus& value) {
  switch (value) {
    case audits::HeavyAdResolutionStatus::HEAVY_AD_BLOCKED:
      return base::Value("HeavyAdBlocked");
    case audits::HeavyAdResolutionStatus::HEAVY_AD_WARNING:
      return base::Value("HeavyAdWarning");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<audits::HeavyAdReason> {
  static audits::HeavyAdReason Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return audits::HeavyAdReason::NETWORK_TOTAL_LIMIT;
    }
    if (value.GetString() == "NetworkTotalLimit")
      return audits::HeavyAdReason::NETWORK_TOTAL_LIMIT;
    if (value.GetString() == "CpuTotalLimit")
      return audits::HeavyAdReason::CPU_TOTAL_LIMIT;
    if (value.GetString() == "CpuPeakLimit")
      return audits::HeavyAdReason::CPU_PEAK_LIMIT;
    errors->AddError("invalid enum value");
    return audits::HeavyAdReason::NETWORK_TOTAL_LIMIT;
  }
};

template <>
inline base::Value ToValue(const audits::HeavyAdReason& value) {
  switch (value) {
    case audits::HeavyAdReason::NETWORK_TOTAL_LIMIT:
      return base::Value("NetworkTotalLimit");
    case audits::HeavyAdReason::CPU_TOTAL_LIMIT:
      return base::Value("CpuTotalLimit");
    case audits::HeavyAdReason::CPU_PEAK_LIMIT:
      return base::Value("CpuPeakLimit");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<audits::HeavyAdIssueDetails> {
  static std::unique_ptr<audits::HeavyAdIssueDetails> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::HeavyAdIssueDetails::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::HeavyAdIssueDetails& value) {
  return value.Serialize();
}

template <>
struct FromValue<audits::ContentSecurityPolicyViolationType> {
  static audits::ContentSecurityPolicyViolationType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return audits::ContentSecurityPolicyViolationType::K_INLINE_VIOLATION;
    }
    if (value.GetString() == "kInlineViolation")
      return audits::ContentSecurityPolicyViolationType::K_INLINE_VIOLATION;
    if (value.GetString() == "kEvalViolation")
      return audits::ContentSecurityPolicyViolationType::K_EVAL_VIOLATION;
    if (value.GetString() == "kURLViolation")
      return audits::ContentSecurityPolicyViolationType::KURL_VIOLATION;
    if (value.GetString() == "kTrustedTypesSinkViolation")
      return audits::ContentSecurityPolicyViolationType::K_TRUSTED_TYPES_SINK_VIOLATION;
    if (value.GetString() == "kTrustedTypesPolicyViolation")
      return audits::ContentSecurityPolicyViolationType::K_TRUSTED_TYPES_POLICY_VIOLATION;
    if (value.GetString() == "kWasmEvalViolation")
      return audits::ContentSecurityPolicyViolationType::K_WASM_EVAL_VIOLATION;
    errors->AddError("invalid enum value");
    return audits::ContentSecurityPolicyViolationType::K_INLINE_VIOLATION;
  }
};

template <>
inline base::Value ToValue(const audits::ContentSecurityPolicyViolationType& value) {
  switch (value) {
    case audits::ContentSecurityPolicyViolationType::K_INLINE_VIOLATION:
      return base::Value("kInlineViolation");
    case audits::ContentSecurityPolicyViolationType::K_EVAL_VIOLATION:
      return base::Value("kEvalViolation");
    case audits::ContentSecurityPolicyViolationType::KURL_VIOLATION:
      return base::Value("kURLViolation");
    case audits::ContentSecurityPolicyViolationType::K_TRUSTED_TYPES_SINK_VIOLATION:
      return base::Value("kTrustedTypesSinkViolation");
    case audits::ContentSecurityPolicyViolationType::K_TRUSTED_TYPES_POLICY_VIOLATION:
      return base::Value("kTrustedTypesPolicyViolation");
    case audits::ContentSecurityPolicyViolationType::K_WASM_EVAL_VIOLATION:
      return base::Value("kWasmEvalViolation");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<audits::SourceCodeLocation> {
  static std::unique_ptr<audits::SourceCodeLocation> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::SourceCodeLocation::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::SourceCodeLocation& value) {
  return value.Serialize();
}


template <>
struct FromValue<audits::ContentSecurityPolicyIssueDetails> {
  static std::unique_ptr<audits::ContentSecurityPolicyIssueDetails> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::ContentSecurityPolicyIssueDetails::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::ContentSecurityPolicyIssueDetails& value) {
  return value.Serialize();
}

template <>
struct FromValue<audits::SharedArrayBufferIssueType> {
  static audits::SharedArrayBufferIssueType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return audits::SharedArrayBufferIssueType::TRANSFER_ISSUE;
    }
    if (value.GetString() == "TransferIssue")
      return audits::SharedArrayBufferIssueType::TRANSFER_ISSUE;
    if (value.GetString() == "CreationIssue")
      return audits::SharedArrayBufferIssueType::CREATION_ISSUE;
    errors->AddError("invalid enum value");
    return audits::SharedArrayBufferIssueType::TRANSFER_ISSUE;
  }
};

template <>
inline base::Value ToValue(const audits::SharedArrayBufferIssueType& value) {
  switch (value) {
    case audits::SharedArrayBufferIssueType::TRANSFER_ISSUE:
      return base::Value("TransferIssue");
    case audits::SharedArrayBufferIssueType::CREATION_ISSUE:
      return base::Value("CreationIssue");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<audits::SharedArrayBufferIssueDetails> {
  static std::unique_ptr<audits::SharedArrayBufferIssueDetails> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::SharedArrayBufferIssueDetails::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::SharedArrayBufferIssueDetails& value) {
  return value.Serialize();
}


template <>
struct FromValue<audits::LowTextContrastIssueDetails> {
  static std::unique_ptr<audits::LowTextContrastIssueDetails> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::LowTextContrastIssueDetails::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::LowTextContrastIssueDetails& value) {
  return value.Serialize();
}


template <>
struct FromValue<audits::CorsIssueDetails> {
  static std::unique_ptr<audits::CorsIssueDetails> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::CorsIssueDetails::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::CorsIssueDetails& value) {
  return value.Serialize();
}

template <>
struct FromValue<audits::AttributionReportingIssueType> {
  static audits::AttributionReportingIssueType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return audits::AttributionReportingIssueType::PERMISSION_POLICY_DISABLED;
    }
    if (value.GetString() == "PermissionPolicyDisabled")
      return audits::AttributionReportingIssueType::PERMISSION_POLICY_DISABLED;
    if (value.GetString() == "UntrustworthyReportingOrigin")
      return audits::AttributionReportingIssueType::UNTRUSTWORTHY_REPORTING_ORIGIN;
    if (value.GetString() == "InsecureContext")
      return audits::AttributionReportingIssueType::INSECURE_CONTEXT;
    if (value.GetString() == "InvalidHeader")
      return audits::AttributionReportingIssueType::INVALID_HEADER;
    if (value.GetString() == "InvalidRegisterTriggerHeader")
      return audits::AttributionReportingIssueType::INVALID_REGISTER_TRIGGER_HEADER;
    if (value.GetString() == "SourceAndTriggerHeaders")
      return audits::AttributionReportingIssueType::SOURCE_AND_TRIGGER_HEADERS;
    if (value.GetString() == "SourceIgnored")
      return audits::AttributionReportingIssueType::SOURCE_IGNORED;
    if (value.GetString() == "TriggerIgnored")
      return audits::AttributionReportingIssueType::TRIGGER_IGNORED;
    if (value.GetString() == "OsSourceIgnored")
      return audits::AttributionReportingIssueType::OS_SOURCE_IGNORED;
    if (value.GetString() == "OsTriggerIgnored")
      return audits::AttributionReportingIssueType::OS_TRIGGER_IGNORED;
    if (value.GetString() == "InvalidRegisterOsSourceHeader")
      return audits::AttributionReportingIssueType::INVALID_REGISTER_OS_SOURCE_HEADER;
    if (value.GetString() == "InvalidRegisterOsTriggerHeader")
      return audits::AttributionReportingIssueType::INVALID_REGISTER_OS_TRIGGER_HEADER;
    if (value.GetString() == "WebAndOsHeaders")
      return audits::AttributionReportingIssueType::WEB_AND_OS_HEADERS;
    if (value.GetString() == "NoWebOrOsSupport")
      return audits::AttributionReportingIssueType::NO_WEB_OR_OS_SUPPORT;
    if (value.GetString() == "NavigationRegistrationWithoutTransientUserActivation")
      return audits::AttributionReportingIssueType::NAVIGATION_REGISTRATION_WITHOUT_TRANSIENT_USER_ACTIVATION;
    errors->AddError("invalid enum value");
    return audits::AttributionReportingIssueType::PERMISSION_POLICY_DISABLED;
  }
};

template <>
inline base::Value ToValue(const audits::AttributionReportingIssueType& value) {
  switch (value) {
    case audits::AttributionReportingIssueType::PERMISSION_POLICY_DISABLED:
      return base::Value("PermissionPolicyDisabled");
    case audits::AttributionReportingIssueType::UNTRUSTWORTHY_REPORTING_ORIGIN:
      return base::Value("UntrustworthyReportingOrigin");
    case audits::AttributionReportingIssueType::INSECURE_CONTEXT:
      return base::Value("InsecureContext");
    case audits::AttributionReportingIssueType::INVALID_HEADER:
      return base::Value("InvalidHeader");
    case audits::AttributionReportingIssueType::INVALID_REGISTER_TRIGGER_HEADER:
      return base::Value("InvalidRegisterTriggerHeader");
    case audits::AttributionReportingIssueType::SOURCE_AND_TRIGGER_HEADERS:
      return base::Value("SourceAndTriggerHeaders");
    case audits::AttributionReportingIssueType::SOURCE_IGNORED:
      return base::Value("SourceIgnored");
    case audits::AttributionReportingIssueType::TRIGGER_IGNORED:
      return base::Value("TriggerIgnored");
    case audits::AttributionReportingIssueType::OS_SOURCE_IGNORED:
      return base::Value("OsSourceIgnored");
    case audits::AttributionReportingIssueType::OS_TRIGGER_IGNORED:
      return base::Value("OsTriggerIgnored");
    case audits::AttributionReportingIssueType::INVALID_REGISTER_OS_SOURCE_HEADER:
      return base::Value("InvalidRegisterOsSourceHeader");
    case audits::AttributionReportingIssueType::INVALID_REGISTER_OS_TRIGGER_HEADER:
      return base::Value("InvalidRegisterOsTriggerHeader");
    case audits::AttributionReportingIssueType::WEB_AND_OS_HEADERS:
      return base::Value("WebAndOsHeaders");
    case audits::AttributionReportingIssueType::NO_WEB_OR_OS_SUPPORT:
      return base::Value("NoWebOrOsSupport");
    case audits::AttributionReportingIssueType::NAVIGATION_REGISTRATION_WITHOUT_TRANSIENT_USER_ACTIVATION:
      return base::Value("NavigationRegistrationWithoutTransientUserActivation");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<audits::AttributionReportingIssueDetails> {
  static std::unique_ptr<audits::AttributionReportingIssueDetails> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::AttributionReportingIssueDetails::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::AttributionReportingIssueDetails& value) {
  return value.Serialize();
}


template <>
struct FromValue<audits::QuirksModeIssueDetails> {
  static std::unique_ptr<audits::QuirksModeIssueDetails> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::QuirksModeIssueDetails::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::QuirksModeIssueDetails& value) {
  return value.Serialize();
}


template <>
struct FromValue<audits::NavigatorUserAgentIssueDetails> {
  static std::unique_ptr<audits::NavigatorUserAgentIssueDetails> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::NavigatorUserAgentIssueDetails::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::NavigatorUserAgentIssueDetails& value) {
  return value.Serialize();
}

template <>
struct FromValue<audits::GenericIssueErrorType> {
  static audits::GenericIssueErrorType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return audits::GenericIssueErrorType::CROSS_ORIGIN_PORTAL_POST_MESSAGE_ERROR;
    }
    if (value.GetString() == "CrossOriginPortalPostMessageError")
      return audits::GenericIssueErrorType::CROSS_ORIGIN_PORTAL_POST_MESSAGE_ERROR;
    if (value.GetString() == "FormLabelForNameError")
      return audits::GenericIssueErrorType::FORM_LABEL_FOR_NAME_ERROR;
    if (value.GetString() == "FormDuplicateIdForInputError")
      return audits::GenericIssueErrorType::FORM_DUPLICATE_ID_FOR_INPUT_ERROR;
    if (value.GetString() == "FormInputWithNoLabelError")
      return audits::GenericIssueErrorType::FORM_INPUT_WITH_NO_LABEL_ERROR;
    if (value.GetString() == "FormAutocompleteAttributeEmptyError")
      return audits::GenericIssueErrorType::FORM_AUTOCOMPLETE_ATTRIBUTE_EMPTY_ERROR;
    if (value.GetString() == "FormEmptyIdAndNameAttributesForInputError")
      return audits::GenericIssueErrorType::FORM_EMPTY_ID_AND_NAME_ATTRIBUTES_FOR_INPUT_ERROR;
    if (value.GetString() == "FormAriaLabelledByToNonExistingId")
      return audits::GenericIssueErrorType::FORM_ARIA_LABELLED_BY_TO_NON_EXISTING_ID;
    if (value.GetString() == "FormInputAssignedAutocompleteValueToIdOrNameAttributeError")
      return audits::GenericIssueErrorType::FORM_INPUT_ASSIGNED_AUTOCOMPLETE_VALUE_TO_ID_OR_NAME_ATTRIBUTE_ERROR;
    if (value.GetString() == "FormLabelHasNeitherForNorNestedInput")
      return audits::GenericIssueErrorType::FORM_LABEL_HAS_NEITHER_FOR_NOR_NESTED_INPUT;
    if (value.GetString() == "FormLabelForMatchesNonExistingIdError")
      return audits::GenericIssueErrorType::FORM_LABEL_FOR_MATCHES_NON_EXISTING_ID_ERROR;
    if (value.GetString() == "FormInputHasWrongButWellIntendedAutocompleteValueError")
      return audits::GenericIssueErrorType::FORM_INPUT_HAS_WRONG_BUT_WELL_INTENDED_AUTOCOMPLETE_VALUE_ERROR;
    if (value.GetString() == "ResponseWasBlockedByORB")
      return audits::GenericIssueErrorType::RESPONSE_WAS_BLOCKED_BYORB;
    errors->AddError("invalid enum value");
    return audits::GenericIssueErrorType::CROSS_ORIGIN_PORTAL_POST_MESSAGE_ERROR;
  }
};

template <>
inline base::Value ToValue(const audits::GenericIssueErrorType& value) {
  switch (value) {
    case audits::GenericIssueErrorType::CROSS_ORIGIN_PORTAL_POST_MESSAGE_ERROR:
      return base::Value("CrossOriginPortalPostMessageError");
    case audits::GenericIssueErrorType::FORM_LABEL_FOR_NAME_ERROR:
      return base::Value("FormLabelForNameError");
    case audits::GenericIssueErrorType::FORM_DUPLICATE_ID_FOR_INPUT_ERROR:
      return base::Value("FormDuplicateIdForInputError");
    case audits::GenericIssueErrorType::FORM_INPUT_WITH_NO_LABEL_ERROR:
      return base::Value("FormInputWithNoLabelError");
    case audits::GenericIssueErrorType::FORM_AUTOCOMPLETE_ATTRIBUTE_EMPTY_ERROR:
      return base::Value("FormAutocompleteAttributeEmptyError");
    case audits::GenericIssueErrorType::FORM_EMPTY_ID_AND_NAME_ATTRIBUTES_FOR_INPUT_ERROR:
      return base::Value("FormEmptyIdAndNameAttributesForInputError");
    case audits::GenericIssueErrorType::FORM_ARIA_LABELLED_BY_TO_NON_EXISTING_ID:
      return base::Value("FormAriaLabelledByToNonExistingId");
    case audits::GenericIssueErrorType::FORM_INPUT_ASSIGNED_AUTOCOMPLETE_VALUE_TO_ID_OR_NAME_ATTRIBUTE_ERROR:
      return base::Value("FormInputAssignedAutocompleteValueToIdOrNameAttributeError");
    case audits::GenericIssueErrorType::FORM_LABEL_HAS_NEITHER_FOR_NOR_NESTED_INPUT:
      return base::Value("FormLabelHasNeitherForNorNestedInput");
    case audits::GenericIssueErrorType::FORM_LABEL_FOR_MATCHES_NON_EXISTING_ID_ERROR:
      return base::Value("FormLabelForMatchesNonExistingIdError");
    case audits::GenericIssueErrorType::FORM_INPUT_HAS_WRONG_BUT_WELL_INTENDED_AUTOCOMPLETE_VALUE_ERROR:
      return base::Value("FormInputHasWrongButWellIntendedAutocompleteValueError");
    case audits::GenericIssueErrorType::RESPONSE_WAS_BLOCKED_BYORB:
      return base::Value("ResponseWasBlockedByORB");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<audits::GenericIssueDetails> {
  static std::unique_ptr<audits::GenericIssueDetails> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::GenericIssueDetails::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::GenericIssueDetails& value) {
  return value.Serialize();
}


template <>
struct FromValue<audits::DeprecationIssueDetails> {
  static std::unique_ptr<audits::DeprecationIssueDetails> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::DeprecationIssueDetails::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::DeprecationIssueDetails& value) {
  return value.Serialize();
}


template <>
struct FromValue<audits::BounceTrackingIssueDetails> {
  static std::unique_ptr<audits::BounceTrackingIssueDetails> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::BounceTrackingIssueDetails::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::BounceTrackingIssueDetails& value) {
  return value.Serialize();
}


template <>
struct FromValue<audits::CookieDeprecationMetadataIssueDetails> {
  static std::unique_ptr<audits::CookieDeprecationMetadataIssueDetails> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::CookieDeprecationMetadataIssueDetails::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::CookieDeprecationMetadataIssueDetails& value) {
  return value.Serialize();
}

template <>
struct FromValue<audits::ClientHintIssueReason> {
  static audits::ClientHintIssueReason Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return audits::ClientHintIssueReason::META_TAG_ALLOW_LIST_INVALID_ORIGIN;
    }
    if (value.GetString() == "MetaTagAllowListInvalidOrigin")
      return audits::ClientHintIssueReason::META_TAG_ALLOW_LIST_INVALID_ORIGIN;
    if (value.GetString() == "MetaTagModifiedHTML")
      return audits::ClientHintIssueReason::META_TAG_MODIFIEDHTML;
    errors->AddError("invalid enum value");
    return audits::ClientHintIssueReason::META_TAG_ALLOW_LIST_INVALID_ORIGIN;
  }
};

template <>
inline base::Value ToValue(const audits::ClientHintIssueReason& value) {
  switch (value) {
    case audits::ClientHintIssueReason::META_TAG_ALLOW_LIST_INVALID_ORIGIN:
      return base::Value("MetaTagAllowListInvalidOrigin");
    case audits::ClientHintIssueReason::META_TAG_MODIFIEDHTML:
      return base::Value("MetaTagModifiedHTML");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<audits::FederatedAuthRequestIssueDetails> {
  static std::unique_ptr<audits::FederatedAuthRequestIssueDetails> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::FederatedAuthRequestIssueDetails::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::FederatedAuthRequestIssueDetails& value) {
  return value.Serialize();
}

template <>
struct FromValue<audits::FederatedAuthRequestIssueReason> {
  static audits::FederatedAuthRequestIssueReason Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return audits::FederatedAuthRequestIssueReason::SHOULD_EMBARGO;
    }
    if (value.GetString() == "ShouldEmbargo")
      return audits::FederatedAuthRequestIssueReason::SHOULD_EMBARGO;
    if (value.GetString() == "TooManyRequests")
      return audits::FederatedAuthRequestIssueReason::TOO_MANY_REQUESTS;
    if (value.GetString() == "WellKnownHttpNotFound")
      return audits::FederatedAuthRequestIssueReason::WELL_KNOWN_HTTP_NOT_FOUND;
    if (value.GetString() == "WellKnownNoResponse")
      return audits::FederatedAuthRequestIssueReason::WELL_KNOWN_NO_RESPONSE;
    if (value.GetString() == "WellKnownInvalidResponse")
      return audits::FederatedAuthRequestIssueReason::WELL_KNOWN_INVALID_RESPONSE;
    if (value.GetString() == "WellKnownListEmpty")
      return audits::FederatedAuthRequestIssueReason::WELL_KNOWN_LIST_EMPTY;
    if (value.GetString() == "WellKnownInvalidContentType")
      return audits::FederatedAuthRequestIssueReason::WELL_KNOWN_INVALID_CONTENT_TYPE;
    if (value.GetString() == "ConfigNotInWellKnown")
      return audits::FederatedAuthRequestIssueReason::CONFIG_NOT_IN_WELL_KNOWN;
    if (value.GetString() == "WellKnownTooBig")
      return audits::FederatedAuthRequestIssueReason::WELL_KNOWN_TOO_BIG;
    if (value.GetString() == "ConfigHttpNotFound")
      return audits::FederatedAuthRequestIssueReason::CONFIG_HTTP_NOT_FOUND;
    if (value.GetString() == "ConfigNoResponse")
      return audits::FederatedAuthRequestIssueReason::CONFIG_NO_RESPONSE;
    if (value.GetString() == "ConfigInvalidResponse")
      return audits::FederatedAuthRequestIssueReason::CONFIG_INVALID_RESPONSE;
    if (value.GetString() == "ConfigInvalidContentType")
      return audits::FederatedAuthRequestIssueReason::CONFIG_INVALID_CONTENT_TYPE;
    if (value.GetString() == "ClientMetadataHttpNotFound")
      return audits::FederatedAuthRequestIssueReason::CLIENT_METADATA_HTTP_NOT_FOUND;
    if (value.GetString() == "ClientMetadataNoResponse")
      return audits::FederatedAuthRequestIssueReason::CLIENT_METADATA_NO_RESPONSE;
    if (value.GetString() == "ClientMetadataInvalidResponse")
      return audits::FederatedAuthRequestIssueReason::CLIENT_METADATA_INVALID_RESPONSE;
    if (value.GetString() == "ClientMetadataInvalidContentType")
      return audits::FederatedAuthRequestIssueReason::CLIENT_METADATA_INVALID_CONTENT_TYPE;
    if (value.GetString() == "DisabledInSettings")
      return audits::FederatedAuthRequestIssueReason::DISABLED_IN_SETTINGS;
    if (value.GetString() == "ErrorFetchingSignin")
      return audits::FederatedAuthRequestIssueReason::ERROR_FETCHING_SIGNIN;
    if (value.GetString() == "InvalidSigninResponse")
      return audits::FederatedAuthRequestIssueReason::INVALID_SIGNIN_RESPONSE;
    if (value.GetString() == "AccountsHttpNotFound")
      return audits::FederatedAuthRequestIssueReason::ACCOUNTS_HTTP_NOT_FOUND;
    if (value.GetString() == "AccountsNoResponse")
      return audits::FederatedAuthRequestIssueReason::ACCOUNTS_NO_RESPONSE;
    if (value.GetString() == "AccountsInvalidResponse")
      return audits::FederatedAuthRequestIssueReason::ACCOUNTS_INVALID_RESPONSE;
    if (value.GetString() == "AccountsListEmpty")
      return audits::FederatedAuthRequestIssueReason::ACCOUNTS_LIST_EMPTY;
    if (value.GetString() == "AccountsInvalidContentType")
      return audits::FederatedAuthRequestIssueReason::ACCOUNTS_INVALID_CONTENT_TYPE;
    if (value.GetString() == "IdTokenHttpNotFound")
      return audits::FederatedAuthRequestIssueReason::ID_TOKEN_HTTP_NOT_FOUND;
    if (value.GetString() == "IdTokenNoResponse")
      return audits::FederatedAuthRequestIssueReason::ID_TOKEN_NO_RESPONSE;
    if (value.GetString() == "IdTokenInvalidResponse")
      return audits::FederatedAuthRequestIssueReason::ID_TOKEN_INVALID_RESPONSE;
    if (value.GetString() == "IdTokenIdpErrorResponse")
      return audits::FederatedAuthRequestIssueReason::ID_TOKEN_IDP_ERROR_RESPONSE;
    if (value.GetString() == "IdTokenCrossSiteIdpErrorResponse")
      return audits::FederatedAuthRequestIssueReason::ID_TOKEN_CROSS_SITE_IDP_ERROR_RESPONSE;
    if (value.GetString() == "IdTokenInvalidRequest")
      return audits::FederatedAuthRequestIssueReason::ID_TOKEN_INVALID_REQUEST;
    if (value.GetString() == "IdTokenInvalidContentType")
      return audits::FederatedAuthRequestIssueReason::ID_TOKEN_INVALID_CONTENT_TYPE;
    if (value.GetString() == "ErrorIdToken")
      return audits::FederatedAuthRequestIssueReason::ERROR_ID_TOKEN;
    if (value.GetString() == "Canceled")
      return audits::FederatedAuthRequestIssueReason::CANCELED;
    if (value.GetString() == "RpPageNotVisible")
      return audits::FederatedAuthRequestIssueReason::RP_PAGE_NOT_VISIBLE;
    if (value.GetString() == "SilentMediationFailure")
      return audits::FederatedAuthRequestIssueReason::SILENT_MEDIATION_FAILURE;
    if (value.GetString() == "ThirdPartyCookiesBlocked")
      return audits::FederatedAuthRequestIssueReason::THIRD_PARTY_COOKIES_BLOCKED;
    if (value.GetString() == "NotSignedInWithIdp")
      return audits::FederatedAuthRequestIssueReason::NOT_SIGNED_IN_WITH_IDP;
    errors->AddError("invalid enum value");
    return audits::FederatedAuthRequestIssueReason::SHOULD_EMBARGO;
  }
};

template <>
inline base::Value ToValue(const audits::FederatedAuthRequestIssueReason& value) {
  switch (value) {
    case audits::FederatedAuthRequestIssueReason::SHOULD_EMBARGO:
      return base::Value("ShouldEmbargo");
    case audits::FederatedAuthRequestIssueReason::TOO_MANY_REQUESTS:
      return base::Value("TooManyRequests");
    case audits::FederatedAuthRequestIssueReason::WELL_KNOWN_HTTP_NOT_FOUND:
      return base::Value("WellKnownHttpNotFound");
    case audits::FederatedAuthRequestIssueReason::WELL_KNOWN_NO_RESPONSE:
      return base::Value("WellKnownNoResponse");
    case audits::FederatedAuthRequestIssueReason::WELL_KNOWN_INVALID_RESPONSE:
      return base::Value("WellKnownInvalidResponse");
    case audits::FederatedAuthRequestIssueReason::WELL_KNOWN_LIST_EMPTY:
      return base::Value("WellKnownListEmpty");
    case audits::FederatedAuthRequestIssueReason::WELL_KNOWN_INVALID_CONTENT_TYPE:
      return base::Value("WellKnownInvalidContentType");
    case audits::FederatedAuthRequestIssueReason::CONFIG_NOT_IN_WELL_KNOWN:
      return base::Value("ConfigNotInWellKnown");
    case audits::FederatedAuthRequestIssueReason::WELL_KNOWN_TOO_BIG:
      return base::Value("WellKnownTooBig");
    case audits::FederatedAuthRequestIssueReason::CONFIG_HTTP_NOT_FOUND:
      return base::Value("ConfigHttpNotFound");
    case audits::FederatedAuthRequestIssueReason::CONFIG_NO_RESPONSE:
      return base::Value("ConfigNoResponse");
    case audits::FederatedAuthRequestIssueReason::CONFIG_INVALID_RESPONSE:
      return base::Value("ConfigInvalidResponse");
    case audits::FederatedAuthRequestIssueReason::CONFIG_INVALID_CONTENT_TYPE:
      return base::Value("ConfigInvalidContentType");
    case audits::FederatedAuthRequestIssueReason::CLIENT_METADATA_HTTP_NOT_FOUND:
      return base::Value("ClientMetadataHttpNotFound");
    case audits::FederatedAuthRequestIssueReason::CLIENT_METADATA_NO_RESPONSE:
      return base::Value("ClientMetadataNoResponse");
    case audits::FederatedAuthRequestIssueReason::CLIENT_METADATA_INVALID_RESPONSE:
      return base::Value("ClientMetadataInvalidResponse");
    case audits::FederatedAuthRequestIssueReason::CLIENT_METADATA_INVALID_CONTENT_TYPE:
      return base::Value("ClientMetadataInvalidContentType");
    case audits::FederatedAuthRequestIssueReason::DISABLED_IN_SETTINGS:
      return base::Value("DisabledInSettings");
    case audits::FederatedAuthRequestIssueReason::ERROR_FETCHING_SIGNIN:
      return base::Value("ErrorFetchingSignin");
    case audits::FederatedAuthRequestIssueReason::INVALID_SIGNIN_RESPONSE:
      return base::Value("InvalidSigninResponse");
    case audits::FederatedAuthRequestIssueReason::ACCOUNTS_HTTP_NOT_FOUND:
      return base::Value("AccountsHttpNotFound");
    case audits::FederatedAuthRequestIssueReason::ACCOUNTS_NO_RESPONSE:
      return base::Value("AccountsNoResponse");
    case audits::FederatedAuthRequestIssueReason::ACCOUNTS_INVALID_RESPONSE:
      return base::Value("AccountsInvalidResponse");
    case audits::FederatedAuthRequestIssueReason::ACCOUNTS_LIST_EMPTY:
      return base::Value("AccountsListEmpty");
    case audits::FederatedAuthRequestIssueReason::ACCOUNTS_INVALID_CONTENT_TYPE:
      return base::Value("AccountsInvalidContentType");
    case audits::FederatedAuthRequestIssueReason::ID_TOKEN_HTTP_NOT_FOUND:
      return base::Value("IdTokenHttpNotFound");
    case audits::FederatedAuthRequestIssueReason::ID_TOKEN_NO_RESPONSE:
      return base::Value("IdTokenNoResponse");
    case audits::FederatedAuthRequestIssueReason::ID_TOKEN_INVALID_RESPONSE:
      return base::Value("IdTokenInvalidResponse");
    case audits::FederatedAuthRequestIssueReason::ID_TOKEN_IDP_ERROR_RESPONSE:
      return base::Value("IdTokenIdpErrorResponse");
    case audits::FederatedAuthRequestIssueReason::ID_TOKEN_CROSS_SITE_IDP_ERROR_RESPONSE:
      return base::Value("IdTokenCrossSiteIdpErrorResponse");
    case audits::FederatedAuthRequestIssueReason::ID_TOKEN_INVALID_REQUEST:
      return base::Value("IdTokenInvalidRequest");
    case audits::FederatedAuthRequestIssueReason::ID_TOKEN_INVALID_CONTENT_TYPE:
      return base::Value("IdTokenInvalidContentType");
    case audits::FederatedAuthRequestIssueReason::ERROR_ID_TOKEN:
      return base::Value("ErrorIdToken");
    case audits::FederatedAuthRequestIssueReason::CANCELED:
      return base::Value("Canceled");
    case audits::FederatedAuthRequestIssueReason::RP_PAGE_NOT_VISIBLE:
      return base::Value("RpPageNotVisible");
    case audits::FederatedAuthRequestIssueReason::SILENT_MEDIATION_FAILURE:
      return base::Value("SilentMediationFailure");
    case audits::FederatedAuthRequestIssueReason::THIRD_PARTY_COOKIES_BLOCKED:
      return base::Value("ThirdPartyCookiesBlocked");
    case audits::FederatedAuthRequestIssueReason::NOT_SIGNED_IN_WITH_IDP:
      return base::Value("NotSignedInWithIdp");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<audits::FederatedAuthUserInfoRequestIssueDetails> {
  static std::unique_ptr<audits::FederatedAuthUserInfoRequestIssueDetails> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::FederatedAuthUserInfoRequestIssueDetails::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::FederatedAuthUserInfoRequestIssueDetails& value) {
  return value.Serialize();
}

template <>
struct FromValue<audits::FederatedAuthUserInfoRequestIssueReason> {
  static audits::FederatedAuthUserInfoRequestIssueReason Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return audits::FederatedAuthUserInfoRequestIssueReason::NOT_SAME_ORIGIN;
    }
    if (value.GetString() == "NotSameOrigin")
      return audits::FederatedAuthUserInfoRequestIssueReason::NOT_SAME_ORIGIN;
    if (value.GetString() == "NotIframe")
      return audits::FederatedAuthUserInfoRequestIssueReason::NOT_IFRAME;
    if (value.GetString() == "NotPotentiallyTrustworthy")
      return audits::FederatedAuthUserInfoRequestIssueReason::NOT_POTENTIALLY_TRUSTWORTHY;
    if (value.GetString() == "NoApiPermission")
      return audits::FederatedAuthUserInfoRequestIssueReason::NO_API_PERMISSION;
    if (value.GetString() == "NotSignedInWithIdp")
      return audits::FederatedAuthUserInfoRequestIssueReason::NOT_SIGNED_IN_WITH_IDP;
    if (value.GetString() == "NoAccountSharingPermission")
      return audits::FederatedAuthUserInfoRequestIssueReason::NO_ACCOUNT_SHARING_PERMISSION;
    if (value.GetString() == "InvalidConfigOrWellKnown")
      return audits::FederatedAuthUserInfoRequestIssueReason::INVALID_CONFIG_OR_WELL_KNOWN;
    if (value.GetString() == "InvalidAccountsResponse")
      return audits::FederatedAuthUserInfoRequestIssueReason::INVALID_ACCOUNTS_RESPONSE;
    if (value.GetString() == "NoReturningUserFromFetchedAccounts")
      return audits::FederatedAuthUserInfoRequestIssueReason::NO_RETURNING_USER_FROM_FETCHED_ACCOUNTS;
    errors->AddError("invalid enum value");
    return audits::FederatedAuthUserInfoRequestIssueReason::NOT_SAME_ORIGIN;
  }
};

template <>
inline base::Value ToValue(const audits::FederatedAuthUserInfoRequestIssueReason& value) {
  switch (value) {
    case audits::FederatedAuthUserInfoRequestIssueReason::NOT_SAME_ORIGIN:
      return base::Value("NotSameOrigin");
    case audits::FederatedAuthUserInfoRequestIssueReason::NOT_IFRAME:
      return base::Value("NotIframe");
    case audits::FederatedAuthUserInfoRequestIssueReason::NOT_POTENTIALLY_TRUSTWORTHY:
      return base::Value("NotPotentiallyTrustworthy");
    case audits::FederatedAuthUserInfoRequestIssueReason::NO_API_PERMISSION:
      return base::Value("NoApiPermission");
    case audits::FederatedAuthUserInfoRequestIssueReason::NOT_SIGNED_IN_WITH_IDP:
      return base::Value("NotSignedInWithIdp");
    case audits::FederatedAuthUserInfoRequestIssueReason::NO_ACCOUNT_SHARING_PERMISSION:
      return base::Value("NoAccountSharingPermission");
    case audits::FederatedAuthUserInfoRequestIssueReason::INVALID_CONFIG_OR_WELL_KNOWN:
      return base::Value("InvalidConfigOrWellKnown");
    case audits::FederatedAuthUserInfoRequestIssueReason::INVALID_ACCOUNTS_RESPONSE:
      return base::Value("InvalidAccountsResponse");
    case audits::FederatedAuthUserInfoRequestIssueReason::NO_RETURNING_USER_FROM_FETCHED_ACCOUNTS:
      return base::Value("NoReturningUserFromFetchedAccounts");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<audits::ClientHintIssueDetails> {
  static std::unique_ptr<audits::ClientHintIssueDetails> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::ClientHintIssueDetails::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::ClientHintIssueDetails& value) {
  return value.Serialize();
}


template <>
struct FromValue<audits::FailedRequestInfo> {
  static std::unique_ptr<audits::FailedRequestInfo> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::FailedRequestInfo::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::FailedRequestInfo& value) {
  return value.Serialize();
}

template <>
struct FromValue<audits::StyleSheetLoadingIssueReason> {
  static audits::StyleSheetLoadingIssueReason Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return audits::StyleSheetLoadingIssueReason::LATE_IMPORT_RULE;
    }
    if (value.GetString() == "LateImportRule")
      return audits::StyleSheetLoadingIssueReason::LATE_IMPORT_RULE;
    if (value.GetString() == "RequestFailed")
      return audits::StyleSheetLoadingIssueReason::REQUEST_FAILED;
    errors->AddError("invalid enum value");
    return audits::StyleSheetLoadingIssueReason::LATE_IMPORT_RULE;
  }
};

template <>
inline base::Value ToValue(const audits::StyleSheetLoadingIssueReason& value) {
  switch (value) {
    case audits::StyleSheetLoadingIssueReason::LATE_IMPORT_RULE:
      return base::Value("LateImportRule");
    case audits::StyleSheetLoadingIssueReason::REQUEST_FAILED:
      return base::Value("RequestFailed");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<audits::StylesheetLoadingIssueDetails> {
  static std::unique_ptr<audits::StylesheetLoadingIssueDetails> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::StylesheetLoadingIssueDetails::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::StylesheetLoadingIssueDetails& value) {
  return value.Serialize();
}

template <>
struct FromValue<audits::PropertyRuleIssueReason> {
  static audits::PropertyRuleIssueReason Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return audits::PropertyRuleIssueReason::INVALID_SYNTAX;
    }
    if (value.GetString() == "InvalidSyntax")
      return audits::PropertyRuleIssueReason::INVALID_SYNTAX;
    if (value.GetString() == "InvalidInitialValue")
      return audits::PropertyRuleIssueReason::INVALID_INITIAL_VALUE;
    if (value.GetString() == "InvalidInherits")
      return audits::PropertyRuleIssueReason::INVALID_INHERITS;
    if (value.GetString() == "InvalidName")
      return audits::PropertyRuleIssueReason::INVALID_NAME;
    errors->AddError("invalid enum value");
    return audits::PropertyRuleIssueReason::INVALID_SYNTAX;
  }
};

template <>
inline base::Value ToValue(const audits::PropertyRuleIssueReason& value) {
  switch (value) {
    case audits::PropertyRuleIssueReason::INVALID_SYNTAX:
      return base::Value("InvalidSyntax");
    case audits::PropertyRuleIssueReason::INVALID_INITIAL_VALUE:
      return base::Value("InvalidInitialValue");
    case audits::PropertyRuleIssueReason::INVALID_INHERITS:
      return base::Value("InvalidInherits");
    case audits::PropertyRuleIssueReason::INVALID_NAME:
      return base::Value("InvalidName");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<audits::PropertyRuleIssueDetails> {
  static std::unique_ptr<audits::PropertyRuleIssueDetails> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::PropertyRuleIssueDetails::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::PropertyRuleIssueDetails& value) {
  return value.Serialize();
}

template <>
struct FromValue<audits::InspectorIssueCode> {
  static audits::InspectorIssueCode Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return audits::InspectorIssueCode::COOKIE_ISSUE;
    }
    if (value.GetString() == "CookieIssue")
      return audits::InspectorIssueCode::COOKIE_ISSUE;
    if (value.GetString() == "MixedContentIssue")
      return audits::InspectorIssueCode::MIXED_CONTENT_ISSUE;
    if (value.GetString() == "BlockedByResponseIssue")
      return audits::InspectorIssueCode::BLOCKED_BY_RESPONSE_ISSUE;
    if (value.GetString() == "HeavyAdIssue")
      return audits::InspectorIssueCode::HEAVY_AD_ISSUE;
    if (value.GetString() == "ContentSecurityPolicyIssue")
      return audits::InspectorIssueCode::CONTENT_SECURITY_POLICY_ISSUE;
    if (value.GetString() == "SharedArrayBufferIssue")
      return audits::InspectorIssueCode::SHARED_ARRAY_BUFFER_ISSUE;
    if (value.GetString() == "LowTextContrastIssue")
      return audits::InspectorIssueCode::LOW_TEXT_CONTRAST_ISSUE;
    if (value.GetString() == "CorsIssue")
      return audits::InspectorIssueCode::CORS_ISSUE;
    if (value.GetString() == "AttributionReportingIssue")
      return audits::InspectorIssueCode::ATTRIBUTION_REPORTING_ISSUE;
    if (value.GetString() == "QuirksModeIssue")
      return audits::InspectorIssueCode::QUIRKS_MODE_ISSUE;
    if (value.GetString() == "NavigatorUserAgentIssue")
      return audits::InspectorIssueCode::NAVIGATOR_USER_AGENT_ISSUE;
    if (value.GetString() == "GenericIssue")
      return audits::InspectorIssueCode::GENERIC_ISSUE;
    if (value.GetString() == "DeprecationIssue")
      return audits::InspectorIssueCode::DEPRECATION_ISSUE;
    if (value.GetString() == "ClientHintIssue")
      return audits::InspectorIssueCode::CLIENT_HINT_ISSUE;
    if (value.GetString() == "FederatedAuthRequestIssue")
      return audits::InspectorIssueCode::FEDERATED_AUTH_REQUEST_ISSUE;
    if (value.GetString() == "BounceTrackingIssue")
      return audits::InspectorIssueCode::BOUNCE_TRACKING_ISSUE;
    if (value.GetString() == "CookieDeprecationMetadataIssue")
      return audits::InspectorIssueCode::COOKIE_DEPRECATION_METADATA_ISSUE;
    if (value.GetString() == "StylesheetLoadingIssue")
      return audits::InspectorIssueCode::STYLESHEET_LOADING_ISSUE;
    if (value.GetString() == "FederatedAuthUserInfoRequestIssue")
      return audits::InspectorIssueCode::FEDERATED_AUTH_USER_INFO_REQUEST_ISSUE;
    if (value.GetString() == "PropertyRuleIssue")
      return audits::InspectorIssueCode::PROPERTY_RULE_ISSUE;
    errors->AddError("invalid enum value");
    return audits::InspectorIssueCode::COOKIE_ISSUE;
  }
};

template <>
inline base::Value ToValue(const audits::InspectorIssueCode& value) {
  switch (value) {
    case audits::InspectorIssueCode::COOKIE_ISSUE:
      return base::Value("CookieIssue");
    case audits::InspectorIssueCode::MIXED_CONTENT_ISSUE:
      return base::Value("MixedContentIssue");
    case audits::InspectorIssueCode::BLOCKED_BY_RESPONSE_ISSUE:
      return base::Value("BlockedByResponseIssue");
    case audits::InspectorIssueCode::HEAVY_AD_ISSUE:
      return base::Value("HeavyAdIssue");
    case audits::InspectorIssueCode::CONTENT_SECURITY_POLICY_ISSUE:
      return base::Value("ContentSecurityPolicyIssue");
    case audits::InspectorIssueCode::SHARED_ARRAY_BUFFER_ISSUE:
      return base::Value("SharedArrayBufferIssue");
    case audits::InspectorIssueCode::LOW_TEXT_CONTRAST_ISSUE:
      return base::Value("LowTextContrastIssue");
    case audits::InspectorIssueCode::CORS_ISSUE:
      return base::Value("CorsIssue");
    case audits::InspectorIssueCode::ATTRIBUTION_REPORTING_ISSUE:
      return base::Value("AttributionReportingIssue");
    case audits::InspectorIssueCode::QUIRKS_MODE_ISSUE:
      return base::Value("QuirksModeIssue");
    case audits::InspectorIssueCode::NAVIGATOR_USER_AGENT_ISSUE:
      return base::Value("NavigatorUserAgentIssue");
    case audits::InspectorIssueCode::GENERIC_ISSUE:
      return base::Value("GenericIssue");
    case audits::InspectorIssueCode::DEPRECATION_ISSUE:
      return base::Value("DeprecationIssue");
    case audits::InspectorIssueCode::CLIENT_HINT_ISSUE:
      return base::Value("ClientHintIssue");
    case audits::InspectorIssueCode::FEDERATED_AUTH_REQUEST_ISSUE:
      return base::Value("FederatedAuthRequestIssue");
    case audits::InspectorIssueCode::BOUNCE_TRACKING_ISSUE:
      return base::Value("BounceTrackingIssue");
    case audits::InspectorIssueCode::COOKIE_DEPRECATION_METADATA_ISSUE:
      return base::Value("CookieDeprecationMetadataIssue");
    case audits::InspectorIssueCode::STYLESHEET_LOADING_ISSUE:
      return base::Value("StylesheetLoadingIssue");
    case audits::InspectorIssueCode::FEDERATED_AUTH_USER_INFO_REQUEST_ISSUE:
      return base::Value("FederatedAuthUserInfoRequestIssue");
    case audits::InspectorIssueCode::PROPERTY_RULE_ISSUE:
      return base::Value("PropertyRuleIssue");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<audits::InspectorIssueDetails> {
  static std::unique_ptr<audits::InspectorIssueDetails> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::InspectorIssueDetails::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::InspectorIssueDetails& value) {
  return value.Serialize();
}



template <>
struct FromValue<audits::InspectorIssue> {
  static std::unique_ptr<audits::InspectorIssue> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::InspectorIssue::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::InspectorIssue& value) {
  return value.Serialize();
}

template <>
struct FromValue<audits::GetEncodedResponseEncoding> {
  static audits::GetEncodedResponseEncoding Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return audits::GetEncodedResponseEncoding::WEBP;
    }
    if (value.GetString() == "webp")
      return audits::GetEncodedResponseEncoding::WEBP;
    if (value.GetString() == "jpeg")
      return audits::GetEncodedResponseEncoding::JPEG;
    if (value.GetString() == "png")
      return audits::GetEncodedResponseEncoding::PNG;
    errors->AddError("invalid enum value");
    return audits::GetEncodedResponseEncoding::WEBP;
  }
};

template <>
inline base::Value ToValue(const audits::GetEncodedResponseEncoding& value) {
  switch (value) {
    case audits::GetEncodedResponseEncoding::WEBP:
      return base::Value("webp");
    case audits::GetEncodedResponseEncoding::JPEG:
      return base::Value("jpeg");
    case audits::GetEncodedResponseEncoding::PNG:
      return base::Value("png");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<audits::GetEncodedResponseParams> {
  static std::unique_ptr<audits::GetEncodedResponseParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::GetEncodedResponseParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::GetEncodedResponseParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<audits::GetEncodedResponseResult> {
  static std::unique_ptr<audits::GetEncodedResponseResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::GetEncodedResponseResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::GetEncodedResponseResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<audits::DisableParams> {
  static std::unique_ptr<audits::DisableParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::DisableParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::DisableParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<audits::DisableResult> {
  static std::unique_ptr<audits::DisableResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::DisableResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::DisableResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<audits::EnableParams> {
  static std::unique_ptr<audits::EnableParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::EnableParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::EnableParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<audits::EnableResult> {
  static std::unique_ptr<audits::EnableResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::EnableResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::EnableResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<audits::CheckContrastParams> {
  static std::unique_ptr<audits::CheckContrastParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::CheckContrastParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::CheckContrastParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<audits::CheckContrastResult> {
  static std::unique_ptr<audits::CheckContrastResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::CheckContrastResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::CheckContrastResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<audits::CheckFormsIssuesParams> {
  static std::unique_ptr<audits::CheckFormsIssuesParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::CheckFormsIssuesParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::CheckFormsIssuesParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<audits::CheckFormsIssuesResult> {
  static std::unique_ptr<audits::CheckFormsIssuesResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::CheckFormsIssuesResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::CheckFormsIssuesResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<audits::IssueAddedParams> {
  static std::unique_ptr<audits::IssueAddedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return audits::IssueAddedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const audits::IssueAddedParams& value) {
  return value.Serialize();
}


}  // namespace internal
}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_AUDITS_H_
