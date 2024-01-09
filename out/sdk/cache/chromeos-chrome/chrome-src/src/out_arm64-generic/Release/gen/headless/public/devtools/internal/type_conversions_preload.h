// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_PRELOAD_H_
#define HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_PRELOAD_H_

#include "base/notreached.h"
#include "base/values.h"
#include "headless/public/devtools/domains/types_preload.h"
#include "headless/public/internal/value_conversions.h"

namespace headless {
namespace internal {



template <>
struct FromValue<preload::RuleSet> {
  static std::unique_ptr<preload::RuleSet> Parse(const base::Value& value, ErrorReporter* errors) {
    return preload::RuleSet::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const preload::RuleSet& value) {
  return value.Serialize();
}

template <>
struct FromValue<preload::RuleSetErrorType> {
  static preload::RuleSetErrorType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return preload::RuleSetErrorType::SOURCE_IS_NOT_JSON_OBJECT;
    }
    if (value.GetString() == "SourceIsNotJsonObject")
      return preload::RuleSetErrorType::SOURCE_IS_NOT_JSON_OBJECT;
    if (value.GetString() == "InvalidRulesSkipped")
      return preload::RuleSetErrorType::INVALID_RULES_SKIPPED;
    errors->AddError("invalid enum value");
    return preload::RuleSetErrorType::SOURCE_IS_NOT_JSON_OBJECT;
  }
};

template <>
inline base::Value ToValue(const preload::RuleSetErrorType& value) {
  switch (value) {
    case preload::RuleSetErrorType::SOURCE_IS_NOT_JSON_OBJECT:
      return base::Value("SourceIsNotJsonObject");
    case preload::RuleSetErrorType::INVALID_RULES_SKIPPED:
      return base::Value("InvalidRulesSkipped");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<preload::SpeculationAction> {
  static preload::SpeculationAction Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return preload::SpeculationAction::PREFETCH;
    }
    if (value.GetString() == "Prefetch")
      return preload::SpeculationAction::PREFETCH;
    if (value.GetString() == "Prerender")
      return preload::SpeculationAction::PRERENDER;
    errors->AddError("invalid enum value");
    return preload::SpeculationAction::PREFETCH;
  }
};

template <>
inline base::Value ToValue(const preload::SpeculationAction& value) {
  switch (value) {
    case preload::SpeculationAction::PREFETCH:
      return base::Value("Prefetch");
    case preload::SpeculationAction::PRERENDER:
      return base::Value("Prerender");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<preload::SpeculationTargetHint> {
  static preload::SpeculationTargetHint Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return preload::SpeculationTargetHint::BLANK;
    }
    if (value.GetString() == "Blank")
      return preload::SpeculationTargetHint::BLANK;
    if (value.GetString() == "Self")
      return preload::SpeculationTargetHint::SELF;
    errors->AddError("invalid enum value");
    return preload::SpeculationTargetHint::BLANK;
  }
};

template <>
inline base::Value ToValue(const preload::SpeculationTargetHint& value) {
  switch (value) {
    case preload::SpeculationTargetHint::BLANK:
      return base::Value("Blank");
    case preload::SpeculationTargetHint::SELF:
      return base::Value("Self");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<preload::PreloadingAttemptKey> {
  static std::unique_ptr<preload::PreloadingAttemptKey> Parse(const base::Value& value, ErrorReporter* errors) {
    return preload::PreloadingAttemptKey::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const preload::PreloadingAttemptKey& value) {
  return value.Serialize();
}


template <>
struct FromValue<preload::PreloadingAttemptSource> {
  static std::unique_ptr<preload::PreloadingAttemptSource> Parse(const base::Value& value, ErrorReporter* errors) {
    return preload::PreloadingAttemptSource::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const preload::PreloadingAttemptSource& value) {
  return value.Serialize();
}

template <>
struct FromValue<preload::PrerenderFinalStatus> {
  static preload::PrerenderFinalStatus Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return preload::PrerenderFinalStatus::ACTIVATED;
    }
    if (value.GetString() == "Activated")
      return preload::PrerenderFinalStatus::ACTIVATED;
    if (value.GetString() == "Destroyed")
      return preload::PrerenderFinalStatus::DESTROYED;
    if (value.GetString() == "LowEndDevice")
      return preload::PrerenderFinalStatus::LOW_END_DEVICE;
    if (value.GetString() == "InvalidSchemeRedirect")
      return preload::PrerenderFinalStatus::INVALID_SCHEME_REDIRECT;
    if (value.GetString() == "InvalidSchemeNavigation")
      return preload::PrerenderFinalStatus::INVALID_SCHEME_NAVIGATION;
    if (value.GetString() == "NavigationRequestBlockedByCsp")
      return preload::PrerenderFinalStatus::NAVIGATION_REQUEST_BLOCKED_BY_CSP;
    if (value.GetString() == "MainFrameNavigation")
      return preload::PrerenderFinalStatus::MAIN_FRAME_NAVIGATION;
    if (value.GetString() == "MojoBinderPolicy")
      return preload::PrerenderFinalStatus::MOJO_BINDER_POLICY;
    if (value.GetString() == "RendererProcessCrashed")
      return preload::PrerenderFinalStatus::RENDERER_PROCESS_CRASHED;
    if (value.GetString() == "RendererProcessKilled")
      return preload::PrerenderFinalStatus::RENDERER_PROCESS_KILLED;
    if (value.GetString() == "Download")
      return preload::PrerenderFinalStatus::DOWNLOAD;
    if (value.GetString() == "TriggerDestroyed")
      return preload::PrerenderFinalStatus::TRIGGER_DESTROYED;
    if (value.GetString() == "NavigationNotCommitted")
      return preload::PrerenderFinalStatus::NAVIGATION_NOT_COMMITTED;
    if (value.GetString() == "NavigationBadHttpStatus")
      return preload::PrerenderFinalStatus::NAVIGATION_BAD_HTTP_STATUS;
    if (value.GetString() == "ClientCertRequested")
      return preload::PrerenderFinalStatus::CLIENT_CERT_REQUESTED;
    if (value.GetString() == "NavigationRequestNetworkError")
      return preload::PrerenderFinalStatus::NAVIGATION_REQUEST_NETWORK_ERROR;
    if (value.GetString() == "CancelAllHostsForTesting")
      return preload::PrerenderFinalStatus::CANCEL_ALL_HOSTS_FOR_TESTING;
    if (value.GetString() == "DidFailLoad")
      return preload::PrerenderFinalStatus::DID_FAIL_LOAD;
    if (value.GetString() == "Stop")
      return preload::PrerenderFinalStatus::STOP;
    if (value.GetString() == "SslCertificateError")
      return preload::PrerenderFinalStatus::SSL_CERTIFICATE_ERROR;
    if (value.GetString() == "LoginAuthRequested")
      return preload::PrerenderFinalStatus::LOGIN_AUTH_REQUESTED;
    if (value.GetString() == "UaChangeRequiresReload")
      return preload::PrerenderFinalStatus::UA_CHANGE_REQUIRES_RELOAD;
    if (value.GetString() == "BlockedByClient")
      return preload::PrerenderFinalStatus::BLOCKED_BY_CLIENT;
    if (value.GetString() == "AudioOutputDeviceRequested")
      return preload::PrerenderFinalStatus::AUDIO_OUTPUT_DEVICE_REQUESTED;
    if (value.GetString() == "MixedContent")
      return preload::PrerenderFinalStatus::MIXED_CONTENT;
    if (value.GetString() == "TriggerBackgrounded")
      return preload::PrerenderFinalStatus::TRIGGER_BACKGROUNDED;
    if (value.GetString() == "MemoryLimitExceeded")
      return preload::PrerenderFinalStatus::MEMORY_LIMIT_EXCEEDED;
    if (value.GetString() == "DataSaverEnabled")
      return preload::PrerenderFinalStatus::DATA_SAVER_ENABLED;
    if (value.GetString() == "TriggerUrlHasEffectiveUrl")
      return preload::PrerenderFinalStatus::TRIGGER_URL_HAS_EFFECTIVE_URL;
    if (value.GetString() == "ActivatedBeforeStarted")
      return preload::PrerenderFinalStatus::ACTIVATED_BEFORE_STARTED;
    if (value.GetString() == "InactivePageRestriction")
      return preload::PrerenderFinalStatus::INACTIVE_PAGE_RESTRICTION;
    if (value.GetString() == "StartFailed")
      return preload::PrerenderFinalStatus::START_FAILED;
    if (value.GetString() == "TimeoutBackgrounded")
      return preload::PrerenderFinalStatus::TIMEOUT_BACKGROUNDED;
    if (value.GetString() == "CrossSiteRedirectInInitialNavigation")
      return preload::PrerenderFinalStatus::CROSS_SITE_REDIRECT_IN_INITIAL_NAVIGATION;
    if (value.GetString() == "CrossSiteNavigationInInitialNavigation")
      return preload::PrerenderFinalStatus::CROSS_SITE_NAVIGATION_IN_INITIAL_NAVIGATION;
    if (value.GetString() == "SameSiteCrossOriginRedirectNotOptInInInitialNavigation")
      return preload::PrerenderFinalStatus::SAME_SITE_CROSS_ORIGIN_REDIRECT_NOT_OPT_IN_IN_INITIAL_NAVIGATION;
    if (value.GetString() == "SameSiteCrossOriginNavigationNotOptInInInitialNavigation")
      return preload::PrerenderFinalStatus::SAME_SITE_CROSS_ORIGIN_NAVIGATION_NOT_OPT_IN_IN_INITIAL_NAVIGATION;
    if (value.GetString() == "ActivationNavigationParameterMismatch")
      return preload::PrerenderFinalStatus::ACTIVATION_NAVIGATION_PARAMETER_MISMATCH;
    if (value.GetString() == "ActivatedInBackground")
      return preload::PrerenderFinalStatus::ACTIVATED_IN_BACKGROUND;
    if (value.GetString() == "EmbedderHostDisallowed")
      return preload::PrerenderFinalStatus::EMBEDDER_HOST_DISALLOWED;
    if (value.GetString() == "ActivationNavigationDestroyedBeforeSuccess")
      return preload::PrerenderFinalStatus::ACTIVATION_NAVIGATION_DESTROYED_BEFORE_SUCCESS;
    if (value.GetString() == "TabClosedByUserGesture")
      return preload::PrerenderFinalStatus::TAB_CLOSED_BY_USER_GESTURE;
    if (value.GetString() == "TabClosedWithoutUserGesture")
      return preload::PrerenderFinalStatus::TAB_CLOSED_WITHOUT_USER_GESTURE;
    if (value.GetString() == "PrimaryMainFrameRendererProcessCrashed")
      return preload::PrerenderFinalStatus::PRIMARY_MAIN_FRAME_RENDERER_PROCESS_CRASHED;
    if (value.GetString() == "PrimaryMainFrameRendererProcessKilled")
      return preload::PrerenderFinalStatus::PRIMARY_MAIN_FRAME_RENDERER_PROCESS_KILLED;
    if (value.GetString() == "ActivationFramePolicyNotCompatible")
      return preload::PrerenderFinalStatus::ACTIVATION_FRAME_POLICY_NOT_COMPATIBLE;
    if (value.GetString() == "PreloadingDisabled")
      return preload::PrerenderFinalStatus::PRELOADING_DISABLED;
    if (value.GetString() == "BatterySaverEnabled")
      return preload::PrerenderFinalStatus::BATTERY_SAVER_ENABLED;
    if (value.GetString() == "ActivatedDuringMainFrameNavigation")
      return preload::PrerenderFinalStatus::ACTIVATED_DURING_MAIN_FRAME_NAVIGATION;
    if (value.GetString() == "PreloadingUnsupportedByWebContents")
      return preload::PrerenderFinalStatus::PRELOADING_UNSUPPORTED_BY_WEB_CONTENTS;
    if (value.GetString() == "CrossSiteRedirectInMainFrameNavigation")
      return preload::PrerenderFinalStatus::CROSS_SITE_REDIRECT_IN_MAIN_FRAME_NAVIGATION;
    if (value.GetString() == "CrossSiteNavigationInMainFrameNavigation")
      return preload::PrerenderFinalStatus::CROSS_SITE_NAVIGATION_IN_MAIN_FRAME_NAVIGATION;
    if (value.GetString() == "SameSiteCrossOriginRedirectNotOptInInMainFrameNavigation")
      return preload::PrerenderFinalStatus::SAME_SITE_CROSS_ORIGIN_REDIRECT_NOT_OPT_IN_IN_MAIN_FRAME_NAVIGATION;
    if (value.GetString() == "SameSiteCrossOriginNavigationNotOptInInMainFrameNavigation")
      return preload::PrerenderFinalStatus::SAME_SITE_CROSS_ORIGIN_NAVIGATION_NOT_OPT_IN_IN_MAIN_FRAME_NAVIGATION;
    if (value.GetString() == "MemoryPressureOnTrigger")
      return preload::PrerenderFinalStatus::MEMORY_PRESSURE_ON_TRIGGER;
    if (value.GetString() == "MemoryPressureAfterTriggered")
      return preload::PrerenderFinalStatus::MEMORY_PRESSURE_AFTER_TRIGGERED;
    if (value.GetString() == "PrerenderingDisabledByDevTools")
      return preload::PrerenderFinalStatus::PRERENDERING_DISABLED_BY_DEV_TOOLS;
    if (value.GetString() == "SpeculationRuleRemoved")
      return preload::PrerenderFinalStatus::SPECULATION_RULE_REMOVED;
    if (value.GetString() == "ActivatedWithAuxiliaryBrowsingContexts")
      return preload::PrerenderFinalStatus::ACTIVATED_WITH_AUXILIARY_BROWSING_CONTEXTS;
    if (value.GetString() == "MaxNumOfRunningEagerPrerendersExceeded")
      return preload::PrerenderFinalStatus::MAX_NUM_OF_RUNNING_EAGER_PRERENDERS_EXCEEDED;
    if (value.GetString() == "MaxNumOfRunningNonEagerPrerendersExceeded")
      return preload::PrerenderFinalStatus::MAX_NUM_OF_RUNNING_NON_EAGER_PRERENDERS_EXCEEDED;
    if (value.GetString() == "MaxNumOfRunningEmbedderPrerendersExceeded")
      return preload::PrerenderFinalStatus::MAX_NUM_OF_RUNNING_EMBEDDER_PRERENDERS_EXCEEDED;
    if (value.GetString() == "PrerenderingUrlHasEffectiveUrl")
      return preload::PrerenderFinalStatus::PRERENDERING_URL_HAS_EFFECTIVE_URL;
    if (value.GetString() == "RedirectedPrerenderingUrlHasEffectiveUrl")
      return preload::PrerenderFinalStatus::REDIRECTED_PRERENDERING_URL_HAS_EFFECTIVE_URL;
    if (value.GetString() == "ActivationUrlHasEffectiveUrl")
      return preload::PrerenderFinalStatus::ACTIVATION_URL_HAS_EFFECTIVE_URL;
    errors->AddError("invalid enum value");
    return preload::PrerenderFinalStatus::ACTIVATED;
  }
};

template <>
inline base::Value ToValue(const preload::PrerenderFinalStatus& value) {
  switch (value) {
    case preload::PrerenderFinalStatus::ACTIVATED:
      return base::Value("Activated");
    case preload::PrerenderFinalStatus::DESTROYED:
      return base::Value("Destroyed");
    case preload::PrerenderFinalStatus::LOW_END_DEVICE:
      return base::Value("LowEndDevice");
    case preload::PrerenderFinalStatus::INVALID_SCHEME_REDIRECT:
      return base::Value("InvalidSchemeRedirect");
    case preload::PrerenderFinalStatus::INVALID_SCHEME_NAVIGATION:
      return base::Value("InvalidSchemeNavigation");
    case preload::PrerenderFinalStatus::NAVIGATION_REQUEST_BLOCKED_BY_CSP:
      return base::Value("NavigationRequestBlockedByCsp");
    case preload::PrerenderFinalStatus::MAIN_FRAME_NAVIGATION:
      return base::Value("MainFrameNavigation");
    case preload::PrerenderFinalStatus::MOJO_BINDER_POLICY:
      return base::Value("MojoBinderPolicy");
    case preload::PrerenderFinalStatus::RENDERER_PROCESS_CRASHED:
      return base::Value("RendererProcessCrashed");
    case preload::PrerenderFinalStatus::RENDERER_PROCESS_KILLED:
      return base::Value("RendererProcessKilled");
    case preload::PrerenderFinalStatus::DOWNLOAD:
      return base::Value("Download");
    case preload::PrerenderFinalStatus::TRIGGER_DESTROYED:
      return base::Value("TriggerDestroyed");
    case preload::PrerenderFinalStatus::NAVIGATION_NOT_COMMITTED:
      return base::Value("NavigationNotCommitted");
    case preload::PrerenderFinalStatus::NAVIGATION_BAD_HTTP_STATUS:
      return base::Value("NavigationBadHttpStatus");
    case preload::PrerenderFinalStatus::CLIENT_CERT_REQUESTED:
      return base::Value("ClientCertRequested");
    case preload::PrerenderFinalStatus::NAVIGATION_REQUEST_NETWORK_ERROR:
      return base::Value("NavigationRequestNetworkError");
    case preload::PrerenderFinalStatus::CANCEL_ALL_HOSTS_FOR_TESTING:
      return base::Value("CancelAllHostsForTesting");
    case preload::PrerenderFinalStatus::DID_FAIL_LOAD:
      return base::Value("DidFailLoad");
    case preload::PrerenderFinalStatus::STOP:
      return base::Value("Stop");
    case preload::PrerenderFinalStatus::SSL_CERTIFICATE_ERROR:
      return base::Value("SslCertificateError");
    case preload::PrerenderFinalStatus::LOGIN_AUTH_REQUESTED:
      return base::Value("LoginAuthRequested");
    case preload::PrerenderFinalStatus::UA_CHANGE_REQUIRES_RELOAD:
      return base::Value("UaChangeRequiresReload");
    case preload::PrerenderFinalStatus::BLOCKED_BY_CLIENT:
      return base::Value("BlockedByClient");
    case preload::PrerenderFinalStatus::AUDIO_OUTPUT_DEVICE_REQUESTED:
      return base::Value("AudioOutputDeviceRequested");
    case preload::PrerenderFinalStatus::MIXED_CONTENT:
      return base::Value("MixedContent");
    case preload::PrerenderFinalStatus::TRIGGER_BACKGROUNDED:
      return base::Value("TriggerBackgrounded");
    case preload::PrerenderFinalStatus::MEMORY_LIMIT_EXCEEDED:
      return base::Value("MemoryLimitExceeded");
    case preload::PrerenderFinalStatus::DATA_SAVER_ENABLED:
      return base::Value("DataSaverEnabled");
    case preload::PrerenderFinalStatus::TRIGGER_URL_HAS_EFFECTIVE_URL:
      return base::Value("TriggerUrlHasEffectiveUrl");
    case preload::PrerenderFinalStatus::ACTIVATED_BEFORE_STARTED:
      return base::Value("ActivatedBeforeStarted");
    case preload::PrerenderFinalStatus::INACTIVE_PAGE_RESTRICTION:
      return base::Value("InactivePageRestriction");
    case preload::PrerenderFinalStatus::START_FAILED:
      return base::Value("StartFailed");
    case preload::PrerenderFinalStatus::TIMEOUT_BACKGROUNDED:
      return base::Value("TimeoutBackgrounded");
    case preload::PrerenderFinalStatus::CROSS_SITE_REDIRECT_IN_INITIAL_NAVIGATION:
      return base::Value("CrossSiteRedirectInInitialNavigation");
    case preload::PrerenderFinalStatus::CROSS_SITE_NAVIGATION_IN_INITIAL_NAVIGATION:
      return base::Value("CrossSiteNavigationInInitialNavigation");
    case preload::PrerenderFinalStatus::SAME_SITE_CROSS_ORIGIN_REDIRECT_NOT_OPT_IN_IN_INITIAL_NAVIGATION:
      return base::Value("SameSiteCrossOriginRedirectNotOptInInInitialNavigation");
    case preload::PrerenderFinalStatus::SAME_SITE_CROSS_ORIGIN_NAVIGATION_NOT_OPT_IN_IN_INITIAL_NAVIGATION:
      return base::Value("SameSiteCrossOriginNavigationNotOptInInInitialNavigation");
    case preload::PrerenderFinalStatus::ACTIVATION_NAVIGATION_PARAMETER_MISMATCH:
      return base::Value("ActivationNavigationParameterMismatch");
    case preload::PrerenderFinalStatus::ACTIVATED_IN_BACKGROUND:
      return base::Value("ActivatedInBackground");
    case preload::PrerenderFinalStatus::EMBEDDER_HOST_DISALLOWED:
      return base::Value("EmbedderHostDisallowed");
    case preload::PrerenderFinalStatus::ACTIVATION_NAVIGATION_DESTROYED_BEFORE_SUCCESS:
      return base::Value("ActivationNavigationDestroyedBeforeSuccess");
    case preload::PrerenderFinalStatus::TAB_CLOSED_BY_USER_GESTURE:
      return base::Value("TabClosedByUserGesture");
    case preload::PrerenderFinalStatus::TAB_CLOSED_WITHOUT_USER_GESTURE:
      return base::Value("TabClosedWithoutUserGesture");
    case preload::PrerenderFinalStatus::PRIMARY_MAIN_FRAME_RENDERER_PROCESS_CRASHED:
      return base::Value("PrimaryMainFrameRendererProcessCrashed");
    case preload::PrerenderFinalStatus::PRIMARY_MAIN_FRAME_RENDERER_PROCESS_KILLED:
      return base::Value("PrimaryMainFrameRendererProcessKilled");
    case preload::PrerenderFinalStatus::ACTIVATION_FRAME_POLICY_NOT_COMPATIBLE:
      return base::Value("ActivationFramePolicyNotCompatible");
    case preload::PrerenderFinalStatus::PRELOADING_DISABLED:
      return base::Value("PreloadingDisabled");
    case preload::PrerenderFinalStatus::BATTERY_SAVER_ENABLED:
      return base::Value("BatterySaverEnabled");
    case preload::PrerenderFinalStatus::ACTIVATED_DURING_MAIN_FRAME_NAVIGATION:
      return base::Value("ActivatedDuringMainFrameNavigation");
    case preload::PrerenderFinalStatus::PRELOADING_UNSUPPORTED_BY_WEB_CONTENTS:
      return base::Value("PreloadingUnsupportedByWebContents");
    case preload::PrerenderFinalStatus::CROSS_SITE_REDIRECT_IN_MAIN_FRAME_NAVIGATION:
      return base::Value("CrossSiteRedirectInMainFrameNavigation");
    case preload::PrerenderFinalStatus::CROSS_SITE_NAVIGATION_IN_MAIN_FRAME_NAVIGATION:
      return base::Value("CrossSiteNavigationInMainFrameNavigation");
    case preload::PrerenderFinalStatus::SAME_SITE_CROSS_ORIGIN_REDIRECT_NOT_OPT_IN_IN_MAIN_FRAME_NAVIGATION:
      return base::Value("SameSiteCrossOriginRedirectNotOptInInMainFrameNavigation");
    case preload::PrerenderFinalStatus::SAME_SITE_CROSS_ORIGIN_NAVIGATION_NOT_OPT_IN_IN_MAIN_FRAME_NAVIGATION:
      return base::Value("SameSiteCrossOriginNavigationNotOptInInMainFrameNavigation");
    case preload::PrerenderFinalStatus::MEMORY_PRESSURE_ON_TRIGGER:
      return base::Value("MemoryPressureOnTrigger");
    case preload::PrerenderFinalStatus::MEMORY_PRESSURE_AFTER_TRIGGERED:
      return base::Value("MemoryPressureAfterTriggered");
    case preload::PrerenderFinalStatus::PRERENDERING_DISABLED_BY_DEV_TOOLS:
      return base::Value("PrerenderingDisabledByDevTools");
    case preload::PrerenderFinalStatus::SPECULATION_RULE_REMOVED:
      return base::Value("SpeculationRuleRemoved");
    case preload::PrerenderFinalStatus::ACTIVATED_WITH_AUXILIARY_BROWSING_CONTEXTS:
      return base::Value("ActivatedWithAuxiliaryBrowsingContexts");
    case preload::PrerenderFinalStatus::MAX_NUM_OF_RUNNING_EAGER_PRERENDERS_EXCEEDED:
      return base::Value("MaxNumOfRunningEagerPrerendersExceeded");
    case preload::PrerenderFinalStatus::MAX_NUM_OF_RUNNING_NON_EAGER_PRERENDERS_EXCEEDED:
      return base::Value("MaxNumOfRunningNonEagerPrerendersExceeded");
    case preload::PrerenderFinalStatus::MAX_NUM_OF_RUNNING_EMBEDDER_PRERENDERS_EXCEEDED:
      return base::Value("MaxNumOfRunningEmbedderPrerendersExceeded");
    case preload::PrerenderFinalStatus::PRERENDERING_URL_HAS_EFFECTIVE_URL:
      return base::Value("PrerenderingUrlHasEffectiveUrl");
    case preload::PrerenderFinalStatus::REDIRECTED_PRERENDERING_URL_HAS_EFFECTIVE_URL:
      return base::Value("RedirectedPrerenderingUrlHasEffectiveUrl");
    case preload::PrerenderFinalStatus::ACTIVATION_URL_HAS_EFFECTIVE_URL:
      return base::Value("ActivationUrlHasEffectiveUrl");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<preload::PreloadingStatus> {
  static preload::PreloadingStatus Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return preload::PreloadingStatus::PENDING;
    }
    if (value.GetString() == "Pending")
      return preload::PreloadingStatus::PENDING;
    if (value.GetString() == "Running")
      return preload::PreloadingStatus::RUNNING;
    if (value.GetString() == "Ready")
      return preload::PreloadingStatus::READY;
    if (value.GetString() == "Success")
      return preload::PreloadingStatus::SUCCESS;
    if (value.GetString() == "Failure")
      return preload::PreloadingStatus::FAILURE;
    if (value.GetString() == "NotSupported")
      return preload::PreloadingStatus::NOT_SUPPORTED;
    errors->AddError("invalid enum value");
    return preload::PreloadingStatus::PENDING;
  }
};

template <>
inline base::Value ToValue(const preload::PreloadingStatus& value) {
  switch (value) {
    case preload::PreloadingStatus::PENDING:
      return base::Value("Pending");
    case preload::PreloadingStatus::RUNNING:
      return base::Value("Running");
    case preload::PreloadingStatus::READY:
      return base::Value("Ready");
    case preload::PreloadingStatus::SUCCESS:
      return base::Value("Success");
    case preload::PreloadingStatus::FAILURE:
      return base::Value("Failure");
    case preload::PreloadingStatus::NOT_SUPPORTED:
      return base::Value("NotSupported");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<preload::PrefetchStatus> {
  static preload::PrefetchStatus Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return preload::PrefetchStatus::PREFETCH_ALLOWED;
    }
    if (value.GetString() == "PrefetchAllowed")
      return preload::PrefetchStatus::PREFETCH_ALLOWED;
    if (value.GetString() == "PrefetchFailedIneligibleRedirect")
      return preload::PrefetchStatus::PREFETCH_FAILED_INELIGIBLE_REDIRECT;
    if (value.GetString() == "PrefetchFailedInvalidRedirect")
      return preload::PrefetchStatus::PREFETCH_FAILED_INVALID_REDIRECT;
    if (value.GetString() == "PrefetchFailedMIMENotSupported")
      return preload::PrefetchStatus::PREFETCH_FAILEDMIME_NOT_SUPPORTED;
    if (value.GetString() == "PrefetchFailedNetError")
      return preload::PrefetchStatus::PREFETCH_FAILED_NET_ERROR;
    if (value.GetString() == "PrefetchFailedNon2XX")
      return preload::PrefetchStatus::PREFETCH_FAILED_NON2XX;
    if (value.GetString() == "PrefetchFailedPerPageLimitExceeded")
      return preload::PrefetchStatus::PREFETCH_FAILED_PER_PAGE_LIMIT_EXCEEDED;
    if (value.GetString() == "PrefetchEvictedAfterCandidateRemoved")
      return preload::PrefetchStatus::PREFETCH_EVICTED_AFTER_CANDIDATE_REMOVED;
    if (value.GetString() == "PrefetchEvictedForNewerPrefetch")
      return preload::PrefetchStatus::PREFETCH_EVICTED_FOR_NEWER_PREFETCH;
    if (value.GetString() == "PrefetchHeldback")
      return preload::PrefetchStatus::PREFETCH_HELDBACK;
    if (value.GetString() == "PrefetchIneligibleRetryAfter")
      return preload::PrefetchStatus::PREFETCH_INELIGIBLE_RETRY_AFTER;
    if (value.GetString() == "PrefetchIsPrivacyDecoy")
      return preload::PrefetchStatus::PREFETCH_IS_PRIVACY_DECOY;
    if (value.GetString() == "PrefetchIsStale")
      return preload::PrefetchStatus::PREFETCH_IS_STALE;
    if (value.GetString() == "PrefetchNotEligibleBrowserContextOffTheRecord")
      return preload::PrefetchStatus::PREFETCH_NOT_ELIGIBLE_BROWSER_CONTEXT_OFF_THE_RECORD;
    if (value.GetString() == "PrefetchNotEligibleDataSaverEnabled")
      return preload::PrefetchStatus::PREFETCH_NOT_ELIGIBLE_DATA_SAVER_ENABLED;
    if (value.GetString() == "PrefetchNotEligibleExistingProxy")
      return preload::PrefetchStatus::PREFETCH_NOT_ELIGIBLE_EXISTING_PROXY;
    if (value.GetString() == "PrefetchNotEligibleHostIsNonUnique")
      return preload::PrefetchStatus::PREFETCH_NOT_ELIGIBLE_HOST_IS_NON_UNIQUE;
    if (value.GetString() == "PrefetchNotEligibleNonDefaultStoragePartition")
      return preload::PrefetchStatus::PREFETCH_NOT_ELIGIBLE_NON_DEFAULT_STORAGE_PARTITION;
    if (value.GetString() == "PrefetchNotEligibleSameSiteCrossOriginPrefetchRequiredProxy")
      return preload::PrefetchStatus::PREFETCH_NOT_ELIGIBLE_SAME_SITE_CROSS_ORIGIN_PREFETCH_REQUIRED_PROXY;
    if (value.GetString() == "PrefetchNotEligibleSchemeIsNotHttps")
      return preload::PrefetchStatus::PREFETCH_NOT_ELIGIBLE_SCHEME_IS_NOT_HTTPS;
    if (value.GetString() == "PrefetchNotEligibleUserHasCookies")
      return preload::PrefetchStatus::PREFETCH_NOT_ELIGIBLE_USER_HAS_COOKIES;
    if (value.GetString() == "PrefetchNotEligibleUserHasServiceWorker")
      return preload::PrefetchStatus::PREFETCH_NOT_ELIGIBLE_USER_HAS_SERVICE_WORKER;
    if (value.GetString() == "PrefetchNotEligibleBatterySaverEnabled")
      return preload::PrefetchStatus::PREFETCH_NOT_ELIGIBLE_BATTERY_SAVER_ENABLED;
    if (value.GetString() == "PrefetchNotEligiblePreloadingDisabled")
      return preload::PrefetchStatus::PREFETCH_NOT_ELIGIBLE_PRELOADING_DISABLED;
    if (value.GetString() == "PrefetchNotFinishedInTime")
      return preload::PrefetchStatus::PREFETCH_NOT_FINISHED_IN_TIME;
    if (value.GetString() == "PrefetchNotStarted")
      return preload::PrefetchStatus::PREFETCH_NOT_STARTED;
    if (value.GetString() == "PrefetchNotUsedCookiesChanged")
      return preload::PrefetchStatus::PREFETCH_NOT_USED_COOKIES_CHANGED;
    if (value.GetString() == "PrefetchProxyNotAvailable")
      return preload::PrefetchStatus::PREFETCH_PROXY_NOT_AVAILABLE;
    if (value.GetString() == "PrefetchResponseUsed")
      return preload::PrefetchStatus::PREFETCH_RESPONSE_USED;
    if (value.GetString() == "PrefetchSuccessfulButNotUsed")
      return preload::PrefetchStatus::PREFETCH_SUCCESSFUL_BUT_NOT_USED;
    if (value.GetString() == "PrefetchNotUsedProbeFailed")
      return preload::PrefetchStatus::PREFETCH_NOT_USED_PROBE_FAILED;
    errors->AddError("invalid enum value");
    return preload::PrefetchStatus::PREFETCH_ALLOWED;
  }
};

template <>
inline base::Value ToValue(const preload::PrefetchStatus& value) {
  switch (value) {
    case preload::PrefetchStatus::PREFETCH_ALLOWED:
      return base::Value("PrefetchAllowed");
    case preload::PrefetchStatus::PREFETCH_FAILED_INELIGIBLE_REDIRECT:
      return base::Value("PrefetchFailedIneligibleRedirect");
    case preload::PrefetchStatus::PREFETCH_FAILED_INVALID_REDIRECT:
      return base::Value("PrefetchFailedInvalidRedirect");
    case preload::PrefetchStatus::PREFETCH_FAILEDMIME_NOT_SUPPORTED:
      return base::Value("PrefetchFailedMIMENotSupported");
    case preload::PrefetchStatus::PREFETCH_FAILED_NET_ERROR:
      return base::Value("PrefetchFailedNetError");
    case preload::PrefetchStatus::PREFETCH_FAILED_NON2XX:
      return base::Value("PrefetchFailedNon2XX");
    case preload::PrefetchStatus::PREFETCH_FAILED_PER_PAGE_LIMIT_EXCEEDED:
      return base::Value("PrefetchFailedPerPageLimitExceeded");
    case preload::PrefetchStatus::PREFETCH_EVICTED_AFTER_CANDIDATE_REMOVED:
      return base::Value("PrefetchEvictedAfterCandidateRemoved");
    case preload::PrefetchStatus::PREFETCH_EVICTED_FOR_NEWER_PREFETCH:
      return base::Value("PrefetchEvictedForNewerPrefetch");
    case preload::PrefetchStatus::PREFETCH_HELDBACK:
      return base::Value("PrefetchHeldback");
    case preload::PrefetchStatus::PREFETCH_INELIGIBLE_RETRY_AFTER:
      return base::Value("PrefetchIneligibleRetryAfter");
    case preload::PrefetchStatus::PREFETCH_IS_PRIVACY_DECOY:
      return base::Value("PrefetchIsPrivacyDecoy");
    case preload::PrefetchStatus::PREFETCH_IS_STALE:
      return base::Value("PrefetchIsStale");
    case preload::PrefetchStatus::PREFETCH_NOT_ELIGIBLE_BROWSER_CONTEXT_OFF_THE_RECORD:
      return base::Value("PrefetchNotEligibleBrowserContextOffTheRecord");
    case preload::PrefetchStatus::PREFETCH_NOT_ELIGIBLE_DATA_SAVER_ENABLED:
      return base::Value("PrefetchNotEligibleDataSaverEnabled");
    case preload::PrefetchStatus::PREFETCH_NOT_ELIGIBLE_EXISTING_PROXY:
      return base::Value("PrefetchNotEligibleExistingProxy");
    case preload::PrefetchStatus::PREFETCH_NOT_ELIGIBLE_HOST_IS_NON_UNIQUE:
      return base::Value("PrefetchNotEligibleHostIsNonUnique");
    case preload::PrefetchStatus::PREFETCH_NOT_ELIGIBLE_NON_DEFAULT_STORAGE_PARTITION:
      return base::Value("PrefetchNotEligibleNonDefaultStoragePartition");
    case preload::PrefetchStatus::PREFETCH_NOT_ELIGIBLE_SAME_SITE_CROSS_ORIGIN_PREFETCH_REQUIRED_PROXY:
      return base::Value("PrefetchNotEligibleSameSiteCrossOriginPrefetchRequiredProxy");
    case preload::PrefetchStatus::PREFETCH_NOT_ELIGIBLE_SCHEME_IS_NOT_HTTPS:
      return base::Value("PrefetchNotEligibleSchemeIsNotHttps");
    case preload::PrefetchStatus::PREFETCH_NOT_ELIGIBLE_USER_HAS_COOKIES:
      return base::Value("PrefetchNotEligibleUserHasCookies");
    case preload::PrefetchStatus::PREFETCH_NOT_ELIGIBLE_USER_HAS_SERVICE_WORKER:
      return base::Value("PrefetchNotEligibleUserHasServiceWorker");
    case preload::PrefetchStatus::PREFETCH_NOT_ELIGIBLE_BATTERY_SAVER_ENABLED:
      return base::Value("PrefetchNotEligibleBatterySaverEnabled");
    case preload::PrefetchStatus::PREFETCH_NOT_ELIGIBLE_PRELOADING_DISABLED:
      return base::Value("PrefetchNotEligiblePreloadingDisabled");
    case preload::PrefetchStatus::PREFETCH_NOT_FINISHED_IN_TIME:
      return base::Value("PrefetchNotFinishedInTime");
    case preload::PrefetchStatus::PREFETCH_NOT_STARTED:
      return base::Value("PrefetchNotStarted");
    case preload::PrefetchStatus::PREFETCH_NOT_USED_COOKIES_CHANGED:
      return base::Value("PrefetchNotUsedCookiesChanged");
    case preload::PrefetchStatus::PREFETCH_PROXY_NOT_AVAILABLE:
      return base::Value("PrefetchProxyNotAvailable");
    case preload::PrefetchStatus::PREFETCH_RESPONSE_USED:
      return base::Value("PrefetchResponseUsed");
    case preload::PrefetchStatus::PREFETCH_SUCCESSFUL_BUT_NOT_USED:
      return base::Value("PrefetchSuccessfulButNotUsed");
    case preload::PrefetchStatus::PREFETCH_NOT_USED_PROBE_FAILED:
      return base::Value("PrefetchNotUsedProbeFailed");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<preload::PrerenderMismatchedHeaders> {
  static std::unique_ptr<preload::PrerenderMismatchedHeaders> Parse(const base::Value& value, ErrorReporter* errors) {
    return preload::PrerenderMismatchedHeaders::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const preload::PrerenderMismatchedHeaders& value) {
  return value.Serialize();
}


template <>
struct FromValue<preload::EnableParams> {
  static std::unique_ptr<preload::EnableParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return preload::EnableParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const preload::EnableParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<preload::EnableResult> {
  static std::unique_ptr<preload::EnableResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return preload::EnableResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const preload::EnableResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<preload::DisableParams> {
  static std::unique_ptr<preload::DisableParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return preload::DisableParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const preload::DisableParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<preload::DisableResult> {
  static std::unique_ptr<preload::DisableResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return preload::DisableResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const preload::DisableResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<preload::RuleSetUpdatedParams> {
  static std::unique_ptr<preload::RuleSetUpdatedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return preload::RuleSetUpdatedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const preload::RuleSetUpdatedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<preload::RuleSetRemovedParams> {
  static std::unique_ptr<preload::RuleSetRemovedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return preload::RuleSetRemovedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const preload::RuleSetRemovedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<preload::PreloadEnabledStateUpdatedParams> {
  static std::unique_ptr<preload::PreloadEnabledStateUpdatedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return preload::PreloadEnabledStateUpdatedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const preload::PreloadEnabledStateUpdatedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<preload::PrefetchStatusUpdatedParams> {
  static std::unique_ptr<preload::PrefetchStatusUpdatedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return preload::PrefetchStatusUpdatedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const preload::PrefetchStatusUpdatedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<preload::PrerenderStatusUpdatedParams> {
  static std::unique_ptr<preload::PrerenderStatusUpdatedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return preload::PrerenderStatusUpdatedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const preload::PrerenderStatusUpdatedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<preload::PreloadingAttemptSourcesUpdatedParams> {
  static std::unique_ptr<preload::PreloadingAttemptSourcesUpdatedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return preload::PreloadingAttemptSourcesUpdatedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const preload::PreloadingAttemptSourcesUpdatedParams& value) {
  return value.Serialize();
}


}  // namespace internal
}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_PRELOAD_H_
