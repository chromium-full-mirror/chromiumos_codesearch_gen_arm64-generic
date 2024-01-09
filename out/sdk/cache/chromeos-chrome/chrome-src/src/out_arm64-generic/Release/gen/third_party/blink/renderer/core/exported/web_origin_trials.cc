// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/web_origin_trials.cc.tmpl
// and input files:
//   ../../../../../../../home/chrome-bot/chrome_root/src/third_party/blink/renderer/platform/runtime_enabled_features.json5


#include "third_party/blink/public/web/web_origin_trials.h"

#include "third_party/blink/renderer/core/dom/document.h"
#include "third_party/blink/renderer/core/execution_context/execution_context.h"
#include "third_party/blink/public/mojom/origin_trial_feature/origin_trial_feature.mojom-shared.h"
#include "third_party/blink/public/common/origin_trials/origin_trials.h"
#include "third_party/blink/public/platform/web_string.h"
#include "third_party/blink/public/web/web_document.h"

namespace blink {

bool WebOriginTrials::isTrialEnabled(const WebDocument* web_document, const WebString& trial) {
  if (!web_document) return false;
  if (!origin_trials::IsTrialValid(trial.Utf8()))
    return false;
  Document* document = *web_document;
  for (mojom::blink::OriginTrialFeature feature : origin_trials::FeaturesForTrial(trial.Utf8())) {
    switch (feature) {
      case mojom::blink::OriginTrialFeature::kAddIdentityInCanMakePaymentEvent:
        if (!RuntimeEnabledFeatures::AddIdentityInCanMakePaymentEventEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kAdInterestGroupAPI:
        if (!RuntimeEnabledFeatures::AdInterestGroupAPIEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kAttributionReporting:
        if (!RuntimeEnabledFeatures::AttributionReportingEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kAttributionReportingCrossAppWeb:
        if (!RuntimeEnabledFeatures::AttributionReportingCrossAppWebEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kAttributionReportingInterface:
        if (!RuntimeEnabledFeatures::AttributionReportingInterfaceEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kAutoDarkMode:
        if (!RuntimeEnabledFeatures::AutoDarkModeEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kBackForwardCacheExperimentHTTPHeader:
        if (!RuntimeEnabledFeatures::BackForwardCacheExperimentHTTPHeaderEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kBackForwardCacheNotRestoredReasons:
        if (!RuntimeEnabledFeatures::BackForwardCacheNotRestoredReasonsEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kCacheStorageCodeCacheHint:
        if (!RuntimeEnabledFeatures::CacheStorageCodeCacheHintEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kCompressionDictionaryTransport:
        if (!RuntimeEnabledFeatures::CompressionDictionaryTransportEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kComputePressure:
        if (!RuntimeEnabledFeatures::ComputePressureEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kCoopRestrictProperties:
        if (!RuntimeEnabledFeatures::CoopRestrictPropertiesEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kDatabase:
        if (!RuntimeEnabledFeatures::DatabaseEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kDigitalGoods:
        if (!RuntimeEnabledFeatures::DigitalGoodsEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kDisableDifferentOriginSubframeDialogSuppression:
        if (!RuntimeEnabledFeatures::DisableDifferentOriginSubframeDialogSuppressionEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kDisableHardwareNoiseSuppression:
        if (!RuntimeEnabledFeatures::DisableHardwareNoiseSuppressionEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kDisableThirdPartySessionStoragePartitioningAfterGeneralPartitioning:
        if (!RuntimeEnabledFeatures::DisableThirdPartySessionStoragePartitioningAfterGeneralPartitioningEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kDisableThirdPartyStoragePartitioning:
        if (!RuntimeEnabledFeatures::DisableThirdPartyStoragePartitioningEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kDocumentPolicyNegotiation:
        if (!RuntimeEnabledFeatures::DocumentPolicyNegotiationEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kEditContext:
        if (!RuntimeEnabledFeatures::EditContextEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kElementCapture:
        if (!RuntimeEnabledFeatures::ElementCaptureEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kFencedFrames:
        if (!RuntimeEnabledFeatures::FencedFramesEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kFencedFramesAPIChanges:
        if (!RuntimeEnabledFeatures::FencedFramesAPIChangesEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kFetchLaterAPI:
        if (!RuntimeEnabledFeatures::FetchLaterAPIEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kFledge:
        if (!RuntimeEnabledFeatures::FledgeEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kFledgeBiddingAndAuctionServerAPI:
        if (!RuntimeEnabledFeatures::FledgeBiddingAndAuctionServerAPIEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kFocusgroup:
        if (!RuntimeEnabledFeatures::FocusgroupEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kFullscreenPopupWindows:
        if (!RuntimeEnabledFeatures::FullscreenPopupWindowsEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kGetAllScreensMedia:
        if (!RuntimeEnabledFeatures::GetAllScreensMediaEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kHrefTranslate:
        if (!RuntimeEnabledFeatures::HrefTranslateEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kJavaScriptCompileHintsMagicRuntime:
        if (!RuntimeEnabledFeatures::JavaScriptCompileHintsMagicRuntimeEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kLongAnimationFrameMonitoring:
        if (!RuntimeEnabledFeatures::LongAnimationFrameMonitoringEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kLongAnimationFrameTiming:
        if (!RuntimeEnabledFeatures::LongAnimationFrameTimingEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kMediaCaptureBackgroundBlur:
        if (!RuntimeEnabledFeatures::MediaCaptureBackgroundBlurEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kMediaCaptureConfigurationChange:
        if (!RuntimeEnabledFeatures::MediaCaptureConfigurationChangeEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kMediaSourceExtensionsForWebCodecs:
        if (!RuntimeEnabledFeatures::MediaSourceExtensionsForWebCodecsEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kNavigationId:
        if (!RuntimeEnabledFeatures::NavigationIdEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kNotificationTriggers:
        if (!RuntimeEnabledFeatures::NotificationTriggersEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kNoVarySearchPrefetch:
        if (!RuntimeEnabledFeatures::NoVarySearchPrefetchEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kOriginTrialsSampleAPI:
        if (!RuntimeEnabledFeatures::OriginTrialsSampleAPIEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kOriginTrialsSampleAPIBrowserReadWrite:
        if (!RuntimeEnabledFeatures::OriginTrialsSampleAPIBrowserReadWriteEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kOriginTrialsSampleAPIDeprecation:
        if (!RuntimeEnabledFeatures::OriginTrialsSampleAPIDeprecationEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kOriginTrialsSampleAPIExpiryGracePeriod:
        if (!RuntimeEnabledFeatures::OriginTrialsSampleAPIExpiryGracePeriodEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kOriginTrialsSampleAPIExpiryGracePeriodThirdParty:
        if (!RuntimeEnabledFeatures::OriginTrialsSampleAPIExpiryGracePeriodThirdPartyEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kOriginTrialsSampleAPIImplied:
        if (!RuntimeEnabledFeatures::OriginTrialsSampleAPIImpliedEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kOriginTrialsSampleAPIInvalidOS:
        if (!RuntimeEnabledFeatures::OriginTrialsSampleAPIInvalidOSEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kOriginTrialsSampleAPINavigation:
        if (!RuntimeEnabledFeatures::OriginTrialsSampleAPINavigationEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kOriginTrialsSampleAPIPersistentExpiryGracePeriod:
        if (!RuntimeEnabledFeatures::OriginTrialsSampleAPIPersistentExpiryGracePeriodEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kOriginTrialsSampleAPIPersistentFeature:
        if (!RuntimeEnabledFeatures::OriginTrialsSampleAPIPersistentFeatureEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kOriginTrialsSampleAPIPersistentInvalidOS:
        if (!RuntimeEnabledFeatures::OriginTrialsSampleAPIPersistentInvalidOSEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kOriginTrialsSampleAPIPersistentThirdPartyDeprecationFeature:
        if (!RuntimeEnabledFeatures::OriginTrialsSampleAPIPersistentThirdPartyDeprecationFeatureEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kOriginTrialsSampleAPIThirdParty:
        if (!RuntimeEnabledFeatures::OriginTrialsSampleAPIThirdPartyEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kPageFreezeOptIn:
        if (!RuntimeEnabledFeatures::PageFreezeOptInEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kPageFreezeOptOut:
        if (!RuntimeEnabledFeatures::PageFreezeOptOutEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kParakeet:
        if (!RuntimeEnabledFeatures::ParakeetEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kPartitionedCookies:
        if (!RuntimeEnabledFeatures::PartitionedCookiesEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kPaymentHandlerMinimalHeaderUX:
        if (!RuntimeEnabledFeatures::PaymentHandlerMinimalHeaderUXEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kPendingBeaconAPI:
        if (!RuntimeEnabledFeatures::PendingBeaconAPIEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kPerMethodCanMakePaymentQuota:
        if (!RuntimeEnabledFeatures::PerMethodCanMakePaymentQuotaEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kPNaCl:
        if (!RuntimeEnabledFeatures::PNaClEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kPrivacySandboxAdsAPIs:
        if (!RuntimeEnabledFeatures::PrivacySandboxAdsAPIsEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kPrivateNetworkAccessNonSecureContextsAllowed:
        if (!RuntimeEnabledFeatures::PrivateNetworkAccessNonSecureContextsAllowedEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kPrivateNetworkAccessPermissionPrompt:
        if (!RuntimeEnabledFeatures::PrivateNetworkAccessPermissionPromptEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kPrivateStateTokens:
        if (!RuntimeEnabledFeatures::PrivateStateTokensEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kReduceAcceptLanguage:
        if (!RuntimeEnabledFeatures::ReduceAcceptLanguageEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kRtcAudioJitterBufferMaxPackets:
        if (!RuntimeEnabledFeatures::RtcAudioJitterBufferMaxPacketsEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kRTCEncodedFrameSetMetadata:
        if (!RuntimeEnabledFeatures::RTCEncodedFrameSetMetadataEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kRTCLegacyCallbackBasedGetStats:
        if (!RuntimeEnabledFeatures::RTCLegacyCallbackBasedGetStatsEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kRTCStatsRelativePacketArrivalDelay:
        if (!RuntimeEnabledFeatures::RTCStatsRelativePacketArrivalDelayEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kSchedulerYield:
        if (!RuntimeEnabledFeatures::SchedulerYieldEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kSecurePaymentConfirmationOptOut:
        if (!RuntimeEnabledFeatures::SecurePaymentConfirmationOptOutEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kServiceWorkerBypassFetchHandler:
        if (!RuntimeEnabledFeatures::ServiceWorkerBypassFetchHandlerEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kServiceWorkerRaceNetworkRequest:
        if (!RuntimeEnabledFeatures::ServiceWorkerRaceNetworkRequestEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kServiceWorkerStaticRouter:
        if (!RuntimeEnabledFeatures::ServiceWorkerStaticRouterEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kSharedStorageAPI:
        if (!RuntimeEnabledFeatures::SharedStorageAPIEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kSignatureBasedIntegrity:
        if (!RuntimeEnabledFeatures::SignatureBasedIntegrityEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kSoftNavigationHeuristics:
        if (!RuntimeEnabledFeatures::SoftNavigationHeuristicsEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kSpeculationRulesDocumentRules:
        if (!RuntimeEnabledFeatures::SpeculationRulesDocumentRulesEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kSpeculationRulesDocumentRulesSelectorMatches:
        if (!RuntimeEnabledFeatures::SpeculationRulesDocumentRulesSelectorMatchesEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kSpeculationRulesEagerness:
        if (!RuntimeEnabledFeatures::SpeculationRulesEagernessEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kSpeculationRulesFetchFromHeader:
        if (!RuntimeEnabledFeatures::SpeculationRulesFetchFromHeaderEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kSpeculationRulesNoVarySearchHint:
        if (!RuntimeEnabledFeatures::SpeculationRulesNoVarySearchHintEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kSpeculationRulesPrefetchFuture:
        if (!RuntimeEnabledFeatures::SpeculationRulesPrefetchFutureEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kSpeculationRulesRelativeToDocument:
        if (!RuntimeEnabledFeatures::SpeculationRulesRelativeToDocumentEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kStorageAccessAPIBeyondCookies:
        if (!RuntimeEnabledFeatures::StorageAccessAPIBeyondCookiesEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kStorageBuckets:
        if (!RuntimeEnabledFeatures::StorageBucketsEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kTextFragmentIdentifiers:
        if (!RuntimeEnabledFeatures::TextFragmentIdentifiersEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kTopicsAPI:
        if (!RuntimeEnabledFeatures::TopicsAPIEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kTopicsDocumentAPI:
        if (!RuntimeEnabledFeatures::TopicsDocumentAPIEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kTouchEventFeatureDetection:
        if (!RuntimeEnabledFeatures::TouchEventFeatureDetectionEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kTpcd:
        if (!RuntimeEnabledFeatures::TpcdEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kTpcd1p:
        if (!RuntimeEnabledFeatures::Tpcd1pEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kUnrestrictedSharedArrayBuffer:
        if (!RuntimeEnabledFeatures::UnrestrictedSharedArrayBufferEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kWebAppDarkMode:
        if (!RuntimeEnabledFeatures::WebAppDarkModeEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kWebAppLaunchHandler:
        if (!RuntimeEnabledFeatures::WebAppLaunchHandlerEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kWebAppLaunchQueue:
        if (!RuntimeEnabledFeatures::WebAppLaunchQueueEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kWebAppScopeExtensions:
        if (!RuntimeEnabledFeatures::WebAppScopeExtensionsEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kWebAppTabStrip:
        if (!RuntimeEnabledFeatures::WebAppTabStripEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kWebAppTabStripCustomizations:
        if (!RuntimeEnabledFeatures::WebAppTabStripCustomizationsEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kWebAppUrlHandling:
        if (!RuntimeEnabledFeatures::WebAppUrlHandlingEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kWebAppWindowControlsOverlay:
        if (!RuntimeEnabledFeatures::WebAppWindowControlsOverlayEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kWebAssemblyGC:
        if (!RuntimeEnabledFeatures::WebAssemblyGCEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kWebAssemblyJSStringBuiltins:
        if (!RuntimeEnabledFeatures::WebAssemblyJSStringBuiltinsEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kWebTransportCustomCertificates:
        if (!RuntimeEnabledFeatures::WebTransportCustomCertificatesEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kWebViewXRequestedWithDeprecation:
        if (!RuntimeEnabledFeatures::WebViewXRequestedWithDeprecationEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kWebXRImageTracking:
        if (!RuntimeEnabledFeatures::WebXRImageTrackingEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      case mojom::blink::OriginTrialFeature::kWebXRPlaneDetection:
        if (!RuntimeEnabledFeatures::WebXRPlaneDetectionEnabled(
                document->GetExecutionContext())) {
          return false;
        }
        break;
      default:
        break;
    }
  }
  return true;
}


} // namespace blink
