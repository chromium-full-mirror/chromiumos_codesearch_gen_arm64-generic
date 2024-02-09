// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/origin_trials.cc.tmpl
// and input files:
//   ../../../../../../../home/chrome-bot/chrome_root/src/third_party/blink/renderer/platform/runtime_enabled_features.json5


#include "third_party/blink/public/common/origin_trials/origin_trials.h"

#include <array>
#include <iterator>

#include "base/containers/contains.h"
#include "base/ranges/algorithm.h"
#include "build/build_config.h"
#include "build/buildflag.h"
#include "build/chromeos_buildflags.h"
#include "third_party/blink/public/mojom/origin_trial_feature/origin_trial_feature.mojom-shared.h"

// For testing. See OriginTrialsSampleAPIInvalidOS.
#define BUILDFLAG_INTERNAL_IS_INVALID() (0)

namespace blink {

namespace {

static constexpr size_t kMaxFeaturesPerTrial = 8;
static constexpr struct TrialToFeature {
  const char* trial_name;
  unsigned feature_count;
  std::array<mojom::OriginTrialFeature, kMaxFeaturesPerTrial> features;
} kTrialToFeaturesMap[] = {
    { "AddIdentityInCanMakePaymentEvent", 1, {mojom::OriginTrialFeature::kAddIdentityInCanMakePaymentEvent, } },
    { "AdInterestGroupAPI", 1, {mojom::OriginTrialFeature::kAdInterestGroupAPI, } },
    { "AppTitle", 1, {mojom::OriginTrialFeature::kAppTitle, } },
    { "PrivacySandboxAdsAPIs", 8, {mojom::OriginTrialFeature::kAttributionReporting,mojom::OriginTrialFeature::kFencedFrames,mojom::OriginTrialFeature::kFencedFramesAPIChanges,mojom::OriginTrialFeature::kFledge,mojom::OriginTrialFeature::kPrivacySandboxAdsAPIs,mojom::OriginTrialFeature::kSharedStorageAPI,mojom::OriginTrialFeature::kTopicsAPI,mojom::OriginTrialFeature::kTopicsDocumentAPI, } },
    { "AttributionReportingCrossAppWeb", 1, {mojom::OriginTrialFeature::kAttributionReportingCrossAppWeb, } },
    { "AttributionReportingInterface", 1, {mojom::OriginTrialFeature::kAttributionReportingInterface, } },
    { "AutoDarkMode", 1, {mojom::OriginTrialFeature::kAutoDarkMode, } },
    { "BackForwardCacheExperimentHTTPHeader", 1, {mojom::OriginTrialFeature::kBackForwardCacheExperimentHTTPHeader, } },
    { "BackForwardCacheNotRestoredReasons", 1, {mojom::OriginTrialFeature::kBackForwardCacheNotRestoredReasons, } },
    { "CacheStorageCodeCacheHint", 1, {mojom::OriginTrialFeature::kCacheStorageCodeCacheHint, } },
    { "CapturedSurfaceControl", 1, {mojom::OriginTrialFeature::kCapturedSurfaceControl, } },
    { "CompressionDictionaryTransportV2", 1, {mojom::OriginTrialFeature::kCompressionDictionaryTransport, } },
    { "ComputePressure_v2", 1, {mojom::OriginTrialFeature::kComputePressure, } },
    { "CoopRestrictProperties", 1, {mojom::OriginTrialFeature::kCoopRestrictProperties, } },
    { "WebSQL", 1, {mojom::OriginTrialFeature::kDatabase, } },
    { "DeprecateUnloadOptOut", 1, {mojom::OriginTrialFeature::kDeprecateUnloadOptOut, } },
    { "DigitalGoodsV2", 1, {mojom::OriginTrialFeature::kDigitalGoods, } },
    { "DisableDifferentOriginSubframeDialogSuppression", 1, {mojom::OriginTrialFeature::kDisableDifferentOriginSubframeDialogSuppression, } },
    { "DisableHardwareNoiseSuppression", 1, {mojom::OriginTrialFeature::kDisableHardwareNoiseSuppression, } },
    { "DisableThirdPartySessionStoragePartitioningAfterGeneralPartitioning", 1, {mojom::OriginTrialFeature::kDisableThirdPartySessionStoragePartitioningAfterGeneralPartitioning, } },
    { "DisableThirdPartyStoragePartitioning", 1, {mojom::OriginTrialFeature::kDisableThirdPartyStoragePartitioning, } },
    { "DocumentPolicyNegotiation", 1, {mojom::OriginTrialFeature::kDocumentPolicyNegotiation, } },
    { "EditContext", 1, {mojom::OriginTrialFeature::kEditContext, } },
    { "ElementCapture", 1, {mojom::OriginTrialFeature::kElementCapture, } },
    { "FetchLaterAPI", 1, {mojom::OriginTrialFeature::kFetchLaterAPI, } },
    { "FledgeBiddingAndAuctionServer", 1, {mojom::OriginTrialFeature::kFledgeBiddingAndAuctionServerAPI, } },
    { "Focusgroup", 1, {mojom::OriginTrialFeature::kFocusgroup, } },
    { "FullscreenPopupWindows", 1, {mojom::OriginTrialFeature::kFullscreenPopupWindows, } },
    { "GetAllScreensMedia", 1, {mojom::OriginTrialFeature::kGetAllScreensMedia, } },
    { "HrefTranslate", 1, {mojom::OriginTrialFeature::kHrefTranslate, } },
    { "JavaScriptCompileHintsMagic", 1, {mojom::OriginTrialFeature::kJavaScriptCompileHintsMagicRuntime, } },
    { "MediaCaptureBackgroundBlur", 2, {mojom::OriginTrialFeature::kMediaCaptureBackgroundBlur,mojom::OriginTrialFeature::kMediaCaptureConfigurationChange, } },
    { "MediaSourceExtensionsForWebCodecs", 1, {mojom::OriginTrialFeature::kMediaSourceExtensionsForWebCodecs, } },
    { "SoftNavigationHeuristics", 2, {mojom::OriginTrialFeature::kNavigationId,mojom::OriginTrialFeature::kSoftNavigationHeuristics, } },
    { "NotificationTriggers", 1, {mojom::OriginTrialFeature::kNotificationTriggers, } },
    { "NoVarySearchPrefetch", 2, {mojom::OriginTrialFeature::kNoVarySearchPrefetch,mojom::OriginTrialFeature::kSpeculationRulesNoVarySearchHint, } },
    { "Frobulate", 1, {mojom::OriginTrialFeature::kOriginTrialsSampleAPI, } },
    { "FrobulateBrowserReadWrite", 1, {mojom::OriginTrialFeature::kOriginTrialsSampleAPIBrowserReadWrite, } },
    { "FrobulateDeprecation", 1, {mojom::OriginTrialFeature::kOriginTrialsSampleAPIDeprecation, } },
    { "FrobulateExpiryGracePeriod", 1, {mojom::OriginTrialFeature::kOriginTrialsSampleAPIExpiryGracePeriod, } },
    { "FrobulateExpiryGracePeriodThirdParty", 1, {mojom::OriginTrialFeature::kOriginTrialsSampleAPIExpiryGracePeriodThirdParty, } },
    { "FrobulateImplied", 1, {mojom::OriginTrialFeature::kOriginTrialsSampleAPIImplied, } },
    { "FrobulateInvalidOS", 1, {mojom::OriginTrialFeature::kOriginTrialsSampleAPIInvalidOS, } },
    { "FrobulateNavigation", 1, {mojom::OriginTrialFeature::kOriginTrialsSampleAPINavigation, } },
    { "FrobulatePersistentExpiryGracePeriod", 1, {mojom::OriginTrialFeature::kOriginTrialsSampleAPIPersistentExpiryGracePeriod, } },
    { "FrobulatePersistent", 1, {mojom::OriginTrialFeature::kOriginTrialsSampleAPIPersistentFeature, } },
    { "FrobulatePersistentInvalidOS", 1, {mojom::OriginTrialFeature::kOriginTrialsSampleAPIPersistentInvalidOS, } },
    { "FrobulatePersistentThirdPartyDeprecation", 1, {mojom::OriginTrialFeature::kOriginTrialsSampleAPIPersistentThirdPartyDeprecationFeature, } },
    { "FrobulateThirdParty", 1, {mojom::OriginTrialFeature::kOriginTrialsSampleAPIThirdParty, } },
    { "PageFreezeOptIn", 1, {mojom::OriginTrialFeature::kPageFreezeOptIn, } },
    { "PageFreezeOptOut", 1, {mojom::OriginTrialFeature::kPageFreezeOptOut, } },
    { "Parakeet", 1, {mojom::OriginTrialFeature::kParakeet, } },
    { "PartitionedCookies", 1, {mojom::OriginTrialFeature::kPartitionedCookies, } },
    { "PaymentHandlerMinimalHeaderUX", 1, {mojom::OriginTrialFeature::kPaymentHandlerMinimalHeaderUX, } },
    { "PendingBeaconAPI", 1, {mojom::OriginTrialFeature::kPendingBeaconAPI, } },
    { "PerMethodCanMakePaymentQuota", 1, {mojom::OriginTrialFeature::kPerMethodCanMakePaymentQuota, } },
    { "PNaCl", 1, {mojom::OriginTrialFeature::kPNaCl, } },
    { "PrivateNetworkAccessNonSecureContextsAllowed", 1, {mojom::OriginTrialFeature::kPrivateNetworkAccessNonSecureContextsAllowed, } },
    { "PrivateNetworkAccessPermissionPrompt", 1, {mojom::OriginTrialFeature::kPrivateNetworkAccessPermissionPrompt, } },
    { "TrustTokens", 1, {mojom::OriginTrialFeature::kPrivateStateTokens, } },
    { "ReduceAcceptLanguage", 1, {mojom::OriginTrialFeature::kReduceAcceptLanguage, } },
    { "RtcAudioJitterBufferMaxPackets", 1, {mojom::OriginTrialFeature::kRtcAudioJitterBufferMaxPackets, } },
    { "RTCEncodedFrameSetMetadata", 1, {mojom::OriginTrialFeature::kRTCEncodedFrameSetMetadata, } },
    { "RTCLegacyCallbackBasedGetStats", 1, {mojom::OriginTrialFeature::kRTCLegacyCallbackBasedGetStats, } },
    { "RTCStatsRelativePacketArrivalDelay", 1, {mojom::OriginTrialFeature::kRTCStatsRelativePacketArrivalDelay, } },
    { "SchedulerYield", 1, {mojom::OriginTrialFeature::kSchedulerYield, } },
    { "SecurePaymentConfirmationOptOut", 1, {mojom::OriginTrialFeature::kSecurePaymentConfirmationOptOut, } },
    { "ServiceWorkerBypassFetchHandlerForMainResource", 1, {mojom::OriginTrialFeature::kServiceWorkerBypassFetchHandler, } },
    { "ServiceWorkerBypassFetchHandlerWithRaceNetworkRequest", 1, {mojom::OriginTrialFeature::kServiceWorkerRaceNetworkRequest, } },
    { "ServiceWorkerStaticRouter", 1, {mojom::OriginTrialFeature::kServiceWorkerStaticRouter, } },
    { "SignatureBasedIntegrity", 1, {mojom::OriginTrialFeature::kSignatureBasedIntegrity, } },
    { "SpeculationRulesPrefetchFuture", 6, {mojom::OriginTrialFeature::kSpeculationRulesDocumentRules,mojom::OriginTrialFeature::kSpeculationRulesDocumentRulesSelectorMatches,mojom::OriginTrialFeature::kSpeculationRulesEagerness,mojom::OriginTrialFeature::kSpeculationRulesFetchFromHeader,mojom::OriginTrialFeature::kSpeculationRulesPrefetchFuture,mojom::OriginTrialFeature::kSpeculationRulesRelativeToDocument, } },
    { "StorageAccessAPIBeyondCookies", 1, {mojom::OriginTrialFeature::kStorageAccessAPIBeyondCookies, } },
    { "TextFragmentIdentifiers", 1, {mojom::OriginTrialFeature::kTextFragmentIdentifiers, } },
    { "TopLevelTpcd", 1, {mojom::OriginTrialFeature::kTopLevelTpcd, } },
    { "ForceTouchEventFeatureDetectionForInspector", 1, {mojom::OriginTrialFeature::kTouchEventFeatureDetection, } },
    { "Tpcd", 1, {mojom::OriginTrialFeature::kTpcd, } },
    { "UnrestrictedSharedArrayBuffer", 1, {mojom::OriginTrialFeature::kUnrestrictedSharedArrayBuffer, } },
    { "WebAppDarkModeV2", 1, {mojom::OriginTrialFeature::kWebAppDarkMode, } },
    { "Launch Handler", 1, {mojom::OriginTrialFeature::kWebAppLaunchHandler, } },
    { "WebAppLaunchQueue", 1, {mojom::OriginTrialFeature::kWebAppLaunchQueue, } },
    { "WebAppScopeExtensions", 1, {mojom::OriginTrialFeature::kWebAppScopeExtensions, } },
    { "WebAppTabStrip", 2, {mojom::OriginTrialFeature::kWebAppTabStrip,mojom::OriginTrialFeature::kWebAppTabStripCustomizations, } },
    { "WebAppUrlHandling", 1, {mojom::OriginTrialFeature::kWebAppUrlHandling, } },
    { "WebAssemblyJSPromiseIntegration", 1, {mojom::OriginTrialFeature::kWebAssemblyJSPromiseIntegration, } },
    { "WebAssemblyJSStringBuiltins", 1, {mojom::OriginTrialFeature::kWebAssemblyJSStringBuiltins, } },
    { "WebIdentityDigitalCredentials", 1, {mojom::OriginTrialFeature::kWebIdentityDigitalCredentials, } },
    { "WebTransportCustomCertificates", 1, {mojom::OriginTrialFeature::kWebTransportCustomCertificates, } },
    { "WebViewXRequestedWithDeprecation", 1, {mojom::OriginTrialFeature::kWebViewXRequestedWithDeprecation, } },
    { "WebXRImageTracking", 1, {mojom::OriginTrialFeature::kWebXRImageTracking, } },
    { "WebXRPlaneDetection", 1, {mojom::OriginTrialFeature::kWebXRPlaneDetection, } },
    // For testing
    { "This trial does not exist", 1, { mojom::OriginTrialFeature::kNonExisting } },
};

} // namespace

bool origin_trials::IsTrialValid(base::StringPiece trial_name) {
  return base::Contains(kTrialToFeaturesMap, trial_name,
                        &TrialToFeature::trial_name);
}

bool origin_trials::IsTrialEnabledForInsecureContext(base::StringPiece trial_name) {
  static const char* const kEnabledForInsecureContext[] = {
      "DeprecateUnloadOptOut",
      "DisableDifferentOriginSubframeDialogSuppression",
      "DisableThirdPartySessionStoragePartitioningAfterGeneralPartitioning",
      "DisableThirdPartyStoragePartitioning",
      "FrobulateDeprecation",
      "PrivateNetworkAccessNonSecureContextsAllowed",
      "WebViewXRequestedWithDeprecation",
  };
  return base::Contains(kEnabledForInsecureContext, trial_name);
}

bool origin_trials::IsTrialEnabledForThirdPartyOrigins(base::StringPiece trial_name) {
  static const char* const kEnabledForThirdPartyOrigins[] = {
      "AddIdentityInCanMakePaymentEvent",
      "PrivacySandboxAdsAPIs",
      "AttributionReportingCrossAppWeb",
      "AttributionReportingInterface",
      "CompressionDictionaryTransportV2",
      "ComputePressure_v2",
      "WebSQL",
      "DeprecateUnloadOptOut",
      "DisableThirdPartyStoragePartitioning",
      "FetchLaterAPI",
      "FledgeBiddingAndAuctionServer",
      "FrobulateExpiryGracePeriodThirdParty",
      "FrobulatePersistent",
      "FrobulatePersistentInvalidOS",
      "FrobulatePersistentThirdPartyDeprecation",
      "FrobulateThirdParty",
      "PaymentHandlerMinimalHeaderUX",
      "PendingBeaconAPI",
      "TrustTokens",
      "SchedulerYield",
      "SecurePaymentConfirmationOptOut",
      "SoftNavigationHeuristics",
      "SpeculationRulesPrefetchFuture",
      "Tpcd",
      "WebViewXRequestedWithDeprecation",
  };
  return base::Contains(kEnabledForThirdPartyOrigins, trial_name);
}

bool origin_trials::IsTrialEnabledForBrowserProcessReadAccess(base::StringPiece trial_name) {
  // Select all features that represent origin trials and have
  // browser_process_read_write_access enabled. Determine if that list of
  // features contains the  `trial_name` provided.
  static const char* const kEnabledForBrowserProcessReadWriteAccess[] = {
      "DisableThirdPartyStoragePartitioning",
      "FrobulateBrowserReadWrite",
  };
  return base::Contains(kEnabledForBrowserProcessReadWriteAccess, trial_name);
}

bool origin_trials::IsDeprecationTrial(base::StringPiece trial_name) {
  for (auto feature : FeaturesForTrial(trial_name)) {
    if (GetTrialType(feature) == OriginTrialType::kDeprecation) {
      return true;
    }
  }
  return false;
}

OriginTrialType origin_trials::GetTrialType(mojom::OriginTrialFeature feature) {
  switch (feature) {
    case mojom::OriginTrialFeature::kDatabase:
      return OriginTrialType::kDeprecation;
    case mojom::OriginTrialFeature::kDeprecateUnloadOptOut:
      return OriginTrialType::kDeprecation;
    case mojom::OriginTrialFeature::kDisableDifferentOriginSubframeDialogSuppression:
      return OriginTrialType::kDeprecation;
    case mojom::OriginTrialFeature::kDisableThirdPartySessionStoragePartitioningAfterGeneralPartitioning:
      return OriginTrialType::kDeprecation;
    case mojom::OriginTrialFeature::kDisableThirdPartyStoragePartitioning:
      return OriginTrialType::kDeprecation;
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPIDeprecation:
      return OriginTrialType::kDeprecation;
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPIPersistentThirdPartyDeprecationFeature:
      return OriginTrialType::kDeprecation;
    case mojom::OriginTrialFeature::kPrivateNetworkAccessNonSecureContextsAllowed:
      return OriginTrialType::kDeprecation;
    case mojom::OriginTrialFeature::kTopLevelTpcd:
      return OriginTrialType::kDeprecation;
    case mojom::OriginTrialFeature::kTpcd:
      return OriginTrialType::kDeprecation;
    case mojom::OriginTrialFeature::kWebViewXRequestedWithDeprecation:
      return OriginTrialType::kDeprecation;
    default:
      return OriginTrialType::kDefault;
  }
}


base::span<const mojom::OriginTrialFeature> origin_trials::FeaturesForTrial(
    base::StringPiece trial_name) {
  auto it = base::ranges::find(kTrialToFeaturesMap, trial_name,
                               &TrialToFeature::trial_name);
  DCHECK(it != std::end(kTrialToFeaturesMap));
  return {it->features.begin(), it->feature_count};
}

base::span<const mojom::OriginTrialFeature> origin_trials::GetImpliedFeatures(
    mojom::OriginTrialFeature feature) {
  if (feature == mojom::OriginTrialFeature::kFledge) {
    static constexpr mojom::OriginTrialFeature implied_features[] = {mojom::OriginTrialFeature::kAdInterestGroupAPI,};
    return implied_features;
  }
  if (feature == mojom::OriginTrialFeature::kParakeet) {
    static constexpr mojom::OriginTrialFeature implied_features[] = {mojom::OriginTrialFeature::kAdInterestGroupAPI,};
    return implied_features;
  }
  if (feature == mojom::OriginTrialFeature::kAttributionReporting) {
    static constexpr mojom::OriginTrialFeature implied_features[] = {mojom::OriginTrialFeature::kAttributionReportingInterface,};
    return implied_features;
  }
  if (feature == mojom::OriginTrialFeature::kAttributionReportingCrossAppWeb) {
    static constexpr mojom::OriginTrialFeature implied_features[] = {mojom::OriginTrialFeature::kAttributionReportingInterface,};
    return implied_features;
  }
  if (feature == mojom::OriginTrialFeature::kMediaCaptureBackgroundBlur) {
    static constexpr mojom::OriginTrialFeature implied_features[] = {mojom::OriginTrialFeature::kMediaCaptureConfigurationChange,};
    return implied_features;
  }
  if (feature == mojom::OriginTrialFeature::kOriginTrialsSampleAPI) {
    static constexpr mojom::OriginTrialFeature implied_features[] = {mojom::OriginTrialFeature::kOriginTrialsSampleAPIImplied,};
    return implied_features;
  }
  if (feature == mojom::OriginTrialFeature::kOriginTrialsSampleAPIInvalidOS) {
    static constexpr mojom::OriginTrialFeature implied_features[] = {mojom::OriginTrialFeature::kOriginTrialsSampleAPIImplied,};
    return implied_features;
  }
  if (feature == mojom::OriginTrialFeature::kSpeculationRulesNoVarySearchHint) {
    static constexpr mojom::OriginTrialFeature implied_features[] = {mojom::OriginTrialFeature::kSpeculationRulesEagerness,};
    return implied_features;
  }
  if (feature == mojom::OriginTrialFeature::kWebAppLaunchHandler) {
    static constexpr mojom::OriginTrialFeature implied_features[] = {mojom::OriginTrialFeature::kWebAppLaunchQueue,};
    return implied_features;
  }
  return {};
}

bool origin_trials::FeatureEnabledForOS(mojom::OriginTrialFeature feature) {
  switch (feature) {
    case mojom::OriginTrialFeature::kAddIdentityInCanMakePaymentEvent:
      return true;
    case mojom::OriginTrialFeature::kAdInterestGroupAPI:
      return true;
    case mojom::OriginTrialFeature::kAppTitle:
#if BUILDFLAG(IS_WIN) || BUILDFLAG(IS_MAC) || BUILDFLAG(IS_LINUX) || BUILDFLAG(IS_CHROMEOS)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kAttributionReporting:
      return true;
    case mojom::OriginTrialFeature::kAttributionReportingCrossAppWeb:
      return true;
    case mojom::OriginTrialFeature::kAttributionReportingInterface:
      return true;
    case mojom::OriginTrialFeature::kAutoDarkMode:
      return true;
    case mojom::OriginTrialFeature::kBackForwardCacheExperimentHTTPHeader:
      return true;
    case mojom::OriginTrialFeature::kBackForwardCacheNotRestoredReasons:
      return true;
    case mojom::OriginTrialFeature::kCacheStorageCodeCacheHint:
      return true;
    case mojom::OriginTrialFeature::kCapturedSurfaceControl:
      return true;
    case mojom::OriginTrialFeature::kCompressionDictionaryTransport:
      return true;
    case mojom::OriginTrialFeature::kComputePressure:
      return true;
    case mojom::OriginTrialFeature::kCoopRestrictProperties:
      return true;
    case mojom::OriginTrialFeature::kDatabase:
      return true;
    case mojom::OriginTrialFeature::kDeprecateUnloadOptOut:
      return true;
    case mojom::OriginTrialFeature::kDigitalGoods:
#if BUILDFLAG(IS_ANDROID) || BUILDFLAG(IS_CHROMEOS)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kDisableDifferentOriginSubframeDialogSuppression:
      return true;
    case mojom::OriginTrialFeature::kDisableHardwareNoiseSuppression:
      return true;
    case mojom::OriginTrialFeature::kDisableThirdPartySessionStoragePartitioningAfterGeneralPartitioning:
      return true;
    case mojom::OriginTrialFeature::kDisableThirdPartyStoragePartitioning:
      return true;
    case mojom::OriginTrialFeature::kDocumentPolicyNegotiation:
      return true;
    case mojom::OriginTrialFeature::kEditContext:
      return true;
    case mojom::OriginTrialFeature::kElementCapture:
      return true;
    case mojom::OriginTrialFeature::kFencedFrames:
      return true;
    case mojom::OriginTrialFeature::kFencedFramesAPIChanges:
      return true;
    case mojom::OriginTrialFeature::kFetchLaterAPI:
      return true;
    case mojom::OriginTrialFeature::kFledge:
      return true;
    case mojom::OriginTrialFeature::kFledgeBiddingAndAuctionServerAPI:
      return true;
    case mojom::OriginTrialFeature::kFocusgroup:
      return true;
    case mojom::OriginTrialFeature::kFullscreenPopupWindows:
#if BUILDFLAG(IS_WIN) || BUILDFLAG(IS_MAC) || BUILDFLAG(IS_LINUX) || BUILDFLAG(IS_CHROMEOS)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kGetAllScreensMedia:
#if BUILDFLAG(IS_CHROMEOS)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kHrefTranslate:
      return true;
    case mojom::OriginTrialFeature::kJavaScriptCompileHintsMagicRuntime:
      return true;
    case mojom::OriginTrialFeature::kMediaCaptureBackgroundBlur:
      return true;
    case mojom::OriginTrialFeature::kMediaCaptureConfigurationChange:
      return true;
    case mojom::OriginTrialFeature::kMediaSourceExtensionsForWebCodecs:
      return true;
    case mojom::OriginTrialFeature::kNavigationId:
      return true;
    case mojom::OriginTrialFeature::kNotificationTriggers:
      return true;
    case mojom::OriginTrialFeature::kNoVarySearchPrefetch:
      return true;
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPI:
      return true;
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPIBrowserReadWrite:
      return true;
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPIDeprecation:
      return true;
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPIExpiryGracePeriod:
      return true;
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPIExpiryGracePeriodThirdParty:
      return true;
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPIImplied:
      return true;
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPIInvalidOS:
#if BUILDFLAG(IS_INVALID)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPINavigation:
      return true;
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPIPersistentExpiryGracePeriod:
      return true;
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPIPersistentFeature:
      return true;
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPIPersistentInvalidOS:
#if BUILDFLAG(IS_INVALID)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPIPersistentThirdPartyDeprecationFeature:
      return true;
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPIThirdParty:
      return true;
    case mojom::OriginTrialFeature::kPageFreezeOptIn:
      return true;
    case mojom::OriginTrialFeature::kPageFreezeOptOut:
      return true;
    case mojom::OriginTrialFeature::kParakeet:
      return true;
    case mojom::OriginTrialFeature::kPartitionedCookies:
      return true;
    case mojom::OriginTrialFeature::kPaymentHandlerMinimalHeaderUX:
#if BUILDFLAG(IS_WIN) || BUILDFLAG(IS_MAC) || BUILDFLAG(IS_LINUX) || BUILDFLAG(IS_FUCHSIA) || BUILDFLAG(IS_CHROMEOS)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kPendingBeaconAPI:
      return true;
    case mojom::OriginTrialFeature::kPerMethodCanMakePaymentQuota:
      return true;
    case mojom::OriginTrialFeature::kPNaCl:
      return true;
    case mojom::OriginTrialFeature::kPrivacySandboxAdsAPIs:
      return true;
    case mojom::OriginTrialFeature::kPrivateNetworkAccessNonSecureContextsAllowed:
      return true;
    case mojom::OriginTrialFeature::kPrivateNetworkAccessPermissionPrompt:
#if BUILDFLAG(IS_WIN) || BUILDFLAG(IS_MAC) || BUILDFLAG(IS_LINUX) || BUILDFLAG(IS_FUCHSIA) || BUILDFLAG(IS_CHROMEOS)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kPrivateStateTokens:
      return true;
    case mojom::OriginTrialFeature::kReduceAcceptLanguage:
      return true;
    case mojom::OriginTrialFeature::kRtcAudioJitterBufferMaxPackets:
      return true;
    case mojom::OriginTrialFeature::kRTCEncodedFrameSetMetadata:
      return true;
    case mojom::OriginTrialFeature::kRTCLegacyCallbackBasedGetStats:
      return true;
    case mojom::OriginTrialFeature::kRTCStatsRelativePacketArrivalDelay:
      return true;
    case mojom::OriginTrialFeature::kSchedulerYield:
      return true;
    case mojom::OriginTrialFeature::kSecurePaymentConfirmationOptOut:
      return true;
    case mojom::OriginTrialFeature::kServiceWorkerBypassFetchHandler:
      return true;
    case mojom::OriginTrialFeature::kServiceWorkerRaceNetworkRequest:
      return true;
    case mojom::OriginTrialFeature::kServiceWorkerStaticRouter:
      return true;
    case mojom::OriginTrialFeature::kSharedStorageAPI:
      return true;
    case mojom::OriginTrialFeature::kSignatureBasedIntegrity:
      return true;
    case mojom::OriginTrialFeature::kSoftNavigationHeuristics:
      return true;
    case mojom::OriginTrialFeature::kSpeculationRulesDocumentRules:
      return true;
    case mojom::OriginTrialFeature::kSpeculationRulesDocumentRulesSelectorMatches:
      return true;
    case mojom::OriginTrialFeature::kSpeculationRulesEagerness:
      return true;
    case mojom::OriginTrialFeature::kSpeculationRulesFetchFromHeader:
      return true;
    case mojom::OriginTrialFeature::kSpeculationRulesNoVarySearchHint:
      return true;
    case mojom::OriginTrialFeature::kSpeculationRulesPrefetchFuture:
      return true;
    case mojom::OriginTrialFeature::kSpeculationRulesRelativeToDocument:
      return true;
    case mojom::OriginTrialFeature::kStorageAccessAPIBeyondCookies:
      return true;
    case mojom::OriginTrialFeature::kTextFragmentIdentifiers:
      return true;
    case mojom::OriginTrialFeature::kTopicsAPI:
      return true;
    case mojom::OriginTrialFeature::kTopicsDocumentAPI:
      return true;
    case mojom::OriginTrialFeature::kTopLevelTpcd:
      return true;
    case mojom::OriginTrialFeature::kTouchEventFeatureDetection:
      return true;
    case mojom::OriginTrialFeature::kTpcd:
      return true;
    case mojom::OriginTrialFeature::kUnrestrictedSharedArrayBuffer:
#if BUILDFLAG(IS_WIN) || BUILDFLAG(IS_MAC) || BUILDFLAG(IS_LINUX) || BUILDFLAG(IS_FUCHSIA) || BUILDFLAG(IS_CHROMEOS)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kWebAppDarkMode:
      return true;
    case mojom::OriginTrialFeature::kWebAppLaunchHandler:
      return true;
    case mojom::OriginTrialFeature::kWebAppLaunchQueue:
      return true;
    case mojom::OriginTrialFeature::kWebAppScopeExtensions:
#if BUILDFLAG(IS_WIN) || BUILDFLAG(IS_MAC) || BUILDFLAG(IS_LINUX) || BUILDFLAG(IS_CHROMEOS)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kWebAppTabStrip:
#if BUILDFLAG(IS_CHROMEOS)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kWebAppTabStripCustomizations:
#if BUILDFLAG(IS_CHROMEOS)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kWebAppUrlHandling:
#if BUILDFLAG(IS_WIN) || BUILDFLAG(IS_MAC) || BUILDFLAG(IS_LINUX)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kWebAssemblyJSPromiseIntegration:
      return true;
    case mojom::OriginTrialFeature::kWebAssemblyJSStringBuiltins:
      return true;
    case mojom::OriginTrialFeature::kWebIdentityDigitalCredentials:
#if BUILDFLAG(IS_ANDROID)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kWebTransportCustomCertificates:
      return true;
    case mojom::OriginTrialFeature::kWebViewXRequestedWithDeprecation:
#if BUILDFLAG(IS_ANDROID)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kWebXRImageTracking:
      return true;
    case mojom::OriginTrialFeature::kWebXRPlaneDetection:
      return true;
    // For testing
    case mojom::OriginTrialFeature::kNonExisting:
      return true;
  }
}

} // namespace blink
