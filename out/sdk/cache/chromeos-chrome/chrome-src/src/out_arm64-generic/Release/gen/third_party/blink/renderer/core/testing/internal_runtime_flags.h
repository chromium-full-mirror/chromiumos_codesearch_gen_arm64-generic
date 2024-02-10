// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/internal_runtime_flags.h.tmpl
// and input files:
//   ../../../../../../../home/chrome-bot/chrome_root/src/third_party/blink/renderer/platform/runtime_enabled_features.json5


#ifndef THIRD_PARTY_BLINK_RENDERER_CORE_TESTING_INTERNAL_RUNTIME_FLAGS_H_
#define THIRD_PARTY_BLINK_RENDERER_CORE_TESTING_INTERNAL_RUNTIME_FLAGS_H_

#include "third_party/blink/renderer/platform/bindings/script_wrappable.h"
#include "third_party/blink/renderer/platform/heap/garbage_collected.h"
#include "third_party/blink/renderer/platform/runtime_enabled_features.h"
#include "base/memory/scoped_refptr.h"
#include "third_party/blink/renderer/platform/wtf/ref_counted.h"

namespace blink {

class InternalRuntimeFlags : public ScriptWrappable {
  DEFINE_WRAPPERTYPEINFO();
 public:
  static InternalRuntimeFlags* create() {
    return MakeGarbageCollected<InternalRuntimeFlags>();
  }

  InternalRuntimeFlags() {}

  // These are reset between web tests from Internals::resetToConsistentState
  // using RuntimeEnabledFeatures::Backup.
  void setAccelerated2dCanvasEnabled(bool isEnabled) {
    RuntimeEnabledFeatures::SetAccelerated2dCanvasEnabled(isEnabled);
  }
  void setAutomationControlledEnabled(bool isEnabled) {
    RuntimeEnabledFeatures::SetAutomationControlledEnabled(isEnabled);
  }
  void setAutoplayIgnoresWebAudioEnabled(bool isEnabled) {
    RuntimeEnabledFeatures::SetAutoplayIgnoresWebAudioEnabled(isEnabled);
  }
  void setImplicitRootScrollerEnabled(bool isEnabled) {
    RuntimeEnabledFeatures::SetImplicitRootScrollerEnabled(isEnabled);
  }
  void setLangAttributeAwareFormControlUIEnabled(bool isEnabled) {
    RuntimeEnabledFeatures::SetLangAttributeAwareFormControlUIEnabled(isEnabled);
  }
  void setMediaControlsOverlayPlayButtonEnabled(bool isEnabled) {
    RuntimeEnabledFeatures::SetMediaControlsOverlayPlayButtonEnabled(isEnabled);
  }
  void setPaintUnderInvalidationCheckingEnabled(bool isEnabled) {
    RuntimeEnabledFeatures::SetPaintUnderInvalidationCheckingEnabled(isEnabled);
  }
  void setPercentBasedScrollingEnabled(bool isEnabled) {
    RuntimeEnabledFeatures::SetPercentBasedScrollingEnabled(isEnabled);
  }
  void setPreferNonCompositedScrollingEnabled(bool isEnabled) {
    RuntimeEnabledFeatures::SetPreferNonCompositedScrollingEnabled(isEnabled);
  }
  void setRemotePlaybackBackendEnabled(bool isEnabled) {
    RuntimeEnabledFeatures::SetRemotePlaybackBackendEnabled(isEnabled);
  }
  void setVideoAutoFullscreenEnabled(bool isEnabled) {
    RuntimeEnabledFeatures::SetVideoAutoFullscreenEnabled(isEnabled);
  }

  bool accelerated2dCanvasEnabled() {
    return RuntimeEnabledFeatures::Accelerated2dCanvasEnabled();
  }
  bool acceleratedSmallCanvasesEnabled() {
    return RuntimeEnabledFeatures::AcceleratedSmallCanvasesEnabled();
  }
  bool accessibilityAriaVirtualContentEnabled() {
    return RuntimeEnabledFeatures::AccessibilityAriaVirtualContentEnabled();
  }
  bool accessibilityExposeDisplayNoneEnabled() {
    return RuntimeEnabledFeatures::AccessibilityExposeDisplayNoneEnabled();
  }
  bool accessibilityExposeHTMLElementEnabled() {
    return RuntimeEnabledFeatures::AccessibilityExposeHTMLElementEnabled();
  }
  bool accessibilityExposeIgnoredNodesEnabled() {
    return RuntimeEnabledFeatures::AccessibilityExposeIgnoredNodesEnabled();
  }
  bool accessibilityObjectModelEnabled() {
    return RuntimeEnabledFeatures::AccessibilityObjectModelEnabled();
  }
  bool accessibilityOSLevelBoldTextEnabled() {
    return RuntimeEnabledFeatures::AccessibilityOSLevelBoldTextEnabled();
  }
  bool accessibilityPageZoomEnabled() {
    return RuntimeEnabledFeatures::AccessibilityPageZoomEnabled();
  }
  bool accessibilitySerializationSizeMetricsEnabled() {
    return RuntimeEnabledFeatures::AccessibilitySerializationSizeMetricsEnabled();
  }
  bool accessibilityUseAXPositionForDocumentMarkersEnabled() {
    return RuntimeEnabledFeatures::AccessibilityUseAXPositionForDocumentMarkersEnabled();
  }
  bool addIdentityInCanMakePaymentEventEnabled() {
    return RuntimeEnabledFeatures::AddIdentityInCanMakePaymentEventEnabledByRuntimeFlag();
  }
  bool addressSpaceEnabled() {
    return RuntimeEnabledFeatures::AddressSpaceEnabled();
  }
  bool adInterestGroupAPIEnabled() {
    return RuntimeEnabledFeatures::AdInterestGroupAPIEnabledByRuntimeFlag();
  }
  bool adTaggingEnabled() {
    return RuntimeEnabledFeatures::AdTaggingEnabled();
  }
  bool alignContentForBlocksEnabled() {
    return RuntimeEnabledFeatures::AlignContentForBlocksEnabled();
  }
  bool allowContentInitiatedDataUrlNavigationsEnabled() {
    return RuntimeEnabledFeatures::AllowContentInitiatedDataUrlNavigationsEnabled();
  }
  bool allowURNsInIframesEnabled() {
    return RuntimeEnabledFeatures::AllowURNsInIframesEnabled();
  }
  bool androidDownloadableFontsMatchingEnabled() {
    return RuntimeEnabledFeatures::AndroidDownloadableFontsMatchingEnabled();
  }
  bool animationWorkletEnabled() {
    return RuntimeEnabledFeatures::AnimationWorkletEnabled();
  }
  bool anonymousIframeEnabled() {
    return RuntimeEnabledFeatures::AnonymousIframeEnabled();
  }
  bool aomAriaRelationshipPropertiesEnabled() {
    return RuntimeEnabledFeatures::AOMAriaRelationshipPropertiesEnabled();
  }
  bool appTitleEnabled() {
    return RuntimeEnabledFeatures::AppTitleEnabledByRuntimeFlag();
  }
  bool asyncClipboardImplicitPermissionEnabled() {
    return RuntimeEnabledFeatures::AsyncClipboardImplicitPermissionEnabled();
  }
  bool attributionReportingEnabled() {
    return RuntimeEnabledFeatures::AttributionReportingEnabledByRuntimeFlag();
  }
  bool attributionReportingCrossAppWebEnabled() {
    return RuntimeEnabledFeatures::AttributionReportingCrossAppWebEnabledByRuntimeFlag();
  }
  bool attributionReportingInterfaceEnabled() {
    return RuntimeEnabledFeatures::AttributionReportingInterfaceEnabledByRuntimeFlag();
  }
  bool audioContextSetSinkIdEnabled() {
    return RuntimeEnabledFeatures::AudioContextSetSinkIdEnabled();
  }
  bool audioOutputDevicesEnabled() {
    return RuntimeEnabledFeatures::AudioOutputDevicesEnabled();
  }
  bool audioVideoTracksEnabled() {
    return RuntimeEnabledFeatures::AudioVideoTracksEnabled();
  }
  bool autoDarkModeEnabled() {
    return RuntimeEnabledFeatures::AutoDarkModeEnabledByRuntimeFlag();
  }
  bool automationControlledEnabled() {
    return RuntimeEnabledFeatures::AutomationControlledEnabled();
  }
  bool autoplayIgnoresWebAudioEnabled() {
    return RuntimeEnabledFeatures::AutoplayIgnoresWebAudioEnabled();
  }
  bool autoSizeLazyLoadedImagesEnabled() {
    return RuntimeEnabledFeatures::AutoSizeLazyLoadedImagesEnabled();
  }
  bool avoidCaretVisibleSelectionAdjusterEnabled() {
    return RuntimeEnabledFeatures::AvoidCaretVisibleSelectionAdjusterEnabled();
  }
  bool backdropInheritOriginatingEnabled() {
    return RuntimeEnabledFeatures::BackdropInheritOriginatingEnabled();
  }
  bool backfaceVisibilityInteropEnabled() {
    return RuntimeEnabledFeatures::BackfaceVisibilityInteropEnabled();
  }
  bool backForwardCacheEnabled() {
    return RuntimeEnabledFeatures::BackForwardCacheEnabled();
  }
  bool backForwardCacheExperimentHTTPHeaderEnabled() {
    return RuntimeEnabledFeatures::BackForwardCacheExperimentHTTPHeaderEnabledByRuntimeFlag();
  }
  bool backForwardCacheNotRestoredReasonsEnabled() {
    return RuntimeEnabledFeatures::BackForwardCacheNotRestoredReasonsEnabledByRuntimeFlag();
  }
  bool backgroundFetchEnabled() {
    return RuntimeEnabledFeatures::BackgroundFetchEnabled();
  }
  bool barcodeDetectorEnabled() {
    return RuntimeEnabledFeatures::BarcodeDetectorEnabled();
  }
  bool bdiElementDirInheritanceEnabled() {
    return RuntimeEnabledFeatures::BdiElementDirInheritanceEnabled();
  }
  bool beforeunloadEventCancelByPreventDefaultEnabled() {
    return RuntimeEnabledFeatures::BeforeunloadEventCancelByPreventDefaultEnabled();
  }
  bool bidiCaretAffinityEnabled() {
    return RuntimeEnabledFeatures::BidiCaretAffinityEnabled();
  }
  bool blinkExtensionChromeOSEnabled() {
    return RuntimeEnabledFeatures::BlinkExtensionChromeOSEnabled();
  }
  bool blinkExtensionChromeOSKioskEnabled() {
    return RuntimeEnabledFeatures::BlinkExtensionChromeOSKioskEnabled();
  }
  bool blinkExtensionDiagnosticsEnabled() {
    return RuntimeEnabledFeatures::BlinkExtensionDiagnosticsEnabled();
  }
  bool blinkLifecycleScriptForbiddenEnabled() {
    return RuntimeEnabledFeatures::BlinkLifecycleScriptForbiddenEnabled();
  }
  bool blinkRuntimeCallStatsEnabled() {
    return RuntimeEnabledFeatures::BlinkRuntimeCallStatsEnabled();
  }
  bool blockingFocusWithoutUserActivationEnabled() {
    return RuntimeEnabledFeatures::BlockingFocusWithoutUserActivationEnabled();
  }
  bool blockRubyWrappingInlineRubyEnabled() {
    return RuntimeEnabledFeatures::BlockRubyWrappingInlineRubyEnabled();
  }
  bool boundaryEventDispatchTracksNodeRemovalEnabled() {
    return RuntimeEnabledFeatures::BoundaryEventDispatchTracksNodeRemovalEnabled();
  }
  bool browserVerifiedUserActivationKeyboardEnabled() {
    return RuntimeEnabledFeatures::BrowserVerifiedUserActivationKeyboardEnabled();
  }
  bool browserVerifiedUserActivationMouseEnabled() {
    return RuntimeEnabledFeatures::BrowserVerifiedUserActivationMouseEnabled();
  }
  bool byobFetchEnabled() {
    return RuntimeEnabledFeatures::ByobFetchEnabled();
  }
  bool cacheStorageCodeCacheHintEnabled() {
    return RuntimeEnabledFeatures::CacheStorageCodeCacheHintEnabledByRuntimeFlag();
  }
  bool canvas2dCanvasFilterEnabled() {
    return RuntimeEnabledFeatures::Canvas2dCanvasFilterEnabled();
  }
  bool canvas2dImageChromiumEnabled() {
    return RuntimeEnabledFeatures::Canvas2dImageChromiumEnabled();
  }
  bool canvas2dLayersEnabled() {
    return RuntimeEnabledFeatures::Canvas2dLayersEnabled();
  }
  bool canvas2dMeshEnabled() {
    return RuntimeEnabledFeatures::Canvas2dMeshEnabled();
  }
  bool canvas2dScrollPathIntoViewEnabled() {
    return RuntimeEnabledFeatures::Canvas2dScrollPathIntoViewEnabled();
  }
  bool canvasFloatingPointEnabled() {
    return RuntimeEnabledFeatures::CanvasFloatingPointEnabled();
  }
  bool canvasHDREnabled() {
    return RuntimeEnabledFeatures::CanvasHDREnabled();
  }
  bool canvasImageSmoothingEnabled() {
    return RuntimeEnabledFeatures::CanvasImageSmoothingEnabled();
  }
  bool canvasWebGPUAccessEnabled() {
    return RuntimeEnabledFeatures::CanvasWebGPUAccessEnabled();
  }
  bool capabilityDelegationDisplayCaptureRequestEnabled() {
    return RuntimeEnabledFeatures::CapabilityDelegationDisplayCaptureRequestEnabled();
  }
  bool captureControllerEnabled() {
    return RuntimeEnabledFeatures::CaptureControllerEnabled();
  }
  bool capturedMouseEventsEnabled() {
    return RuntimeEnabledFeatures::CapturedMouseEventsEnabled();
  }
  bool capturedSurfaceControlEnabled() {
    return RuntimeEnabledFeatures::CapturedSurfaceControlEnabledByRuntimeFlag();
  }
  bool captureHandleEnabled() {
    return RuntimeEnabledFeatures::CaptureHandleEnabled();
  }
  bool caretPositionFromPointEnabled() {
    return RuntimeEnabledFeatures::CaretPositionFromPointEnabled();
  }
  bool cctNewRFMPushBehaviorEnabled() {
    return RuntimeEnabledFeatures::CCTNewRFMPushBehaviorEnabled();
  }
  bool checkVisibilityExtraPropertiesEnabled() {
    return RuntimeEnabledFeatures::CheckVisibilityExtraPropertiesEnabled();
  }
  bool clickToCapturedPointerEnabled() {
    return RuntimeEnabledFeatures::ClickToCapturedPointerEnabled();
  }
  bool clipboardSupportedTypesEnabled() {
    return RuntimeEnabledFeatures::ClipboardSupportedTypesEnabled();
  }
  bool clipboardSvgEnabled() {
    return RuntimeEnabledFeatures::ClipboardSvgEnabled();
  }
  bool clipboardUnsanitizedContentEnabled() {
    return RuntimeEnabledFeatures::ClipboardUnsanitizedContentEnabled();
  }
  bool clipboardWellFormedHtmlSanitizationWriteEnabled() {
    return RuntimeEnabledFeatures::ClipboardWellFormedHtmlSanitizationWriteEnabled();
  }
  bool clipPathGeometryBoxEnabled() {
    return RuntimeEnabledFeatures::ClipPathGeometryBoxEnabled();
  }
  bool clipPathRejectEmptyPathsEnabled() {
    return RuntimeEnabledFeatures::ClipPathRejectEmptyPathsEnabled();
  }
  bool clipPathXYWHAndRectEnabled() {
    return RuntimeEnabledFeatures::ClipPathXYWHAndRectEnabled();
  }
  bool closeWatcherEnabled() {
    return RuntimeEnabledFeatures::CloseWatcherEnabled();
  }
  bool coepReflectionEnabled() {
    return RuntimeEnabledFeatures::CoepReflectionEnabled();
  }
  bool compositeBGColorAnimationEnabled() {
    return RuntimeEnabledFeatures::CompositeBGColorAnimationEnabled();
  }
  bool compositeBoxShadowAnimationEnabled() {
    return RuntimeEnabledFeatures::CompositeBoxShadowAnimationEnabled();
  }
  bool compositeClipPathAnimationEnabled() {
    return RuntimeEnabledFeatures::CompositeClipPathAnimationEnabled();
  }
  bool compositedSelectionUpdateEnabled() {
    return RuntimeEnabledFeatures::CompositedSelectionUpdateEnabled();
  }
  bool compositionForegroundMarkersEnabled() {
    return RuntimeEnabledFeatures::CompositionForegroundMarkersEnabled();
  }
  bool compressionDictionaryTransportEnabled() {
    return RuntimeEnabledFeatures::CompressionDictionaryTransportEnabledByRuntimeFlag();
  }
  bool compressionDictionaryTransportBackendEnabled() {
    return RuntimeEnabledFeatures::CompressionDictionaryTransportBackendEnabled();
  }
  bool computedAccessibilityInfoEnabled() {
    return RuntimeEnabledFeatures::ComputedAccessibilityInfoEnabled();
  }
  bool computePressureEnabled() {
    return RuntimeEnabledFeatures::ComputePressureEnabledByRuntimeFlag();
  }
  bool confirmationOfActionEnabled() {
    return RuntimeEnabledFeatures::ConfirmationOfActionEnabled();
  }
  bool consolidatedMovementXYEnabled() {
    return RuntimeEnabledFeatures::ConsolidatedMovementXYEnabled();
  }
  bool contactsManagerEnabled() {
    return RuntimeEnabledFeatures::ContactsManagerEnabled();
  }
  bool contactsManagerExtraPropertiesEnabled() {
    return RuntimeEnabledFeatures::ContactsManagerExtraPropertiesEnabled();
  }
  bool contentIndexEnabled() {
    return RuntimeEnabledFeatures::ContentIndexEnabled();
  }
  bool contextMenuEnabled() {
    return RuntimeEnabledFeatures::ContextMenuEnabled();
  }
  bool cookieDeprecationFacilitatedTestingEnabled() {
    return RuntimeEnabledFeatures::CookieDeprecationFacilitatedTestingEnabled();
  }
  bool cooperativeSchedulingEnabled() {
    return RuntimeEnabledFeatures::CooperativeSchedulingEnabled();
  }
  bool coopRestrictPropertiesEnabled() {
    return RuntimeEnabledFeatures::CoopRestrictPropertiesEnabledByRuntimeFlag();
  }
  bool corsRFC1918Enabled() {
    return RuntimeEnabledFeatures::CorsRFC1918Enabled();
  }
  bool counterStyleChangeShouleCollectInlinesEnabled() {
    return RuntimeEnabledFeatures::CounterStyleChangeShouleCollectInlinesEnabled();
  }
  bool crossFramePerformanceTimelineEnabled() {
    return RuntimeEnabledFeatures::CrossFramePerformanceTimelineEnabled();
  }
  bool cssAnchorPositioningEnabled() {
    return RuntimeEnabledFeatures::CSSAnchorPositioningEnabled();
  }
  bool cssAnchorPositioningCascadeFallbackEnabled() {
    return RuntimeEnabledFeatures::CSSAnchorPositioningCascadeFallbackEnabled();
  }
  bool cssAnimationCompositionEnabled() {
    return RuntimeEnabledFeatures::CSSAnimationCompositionEnabled();
  }
  bool cssAnimationDelayStartEndEnabled() {
    return RuntimeEnabledFeatures::CSSAnimationDelayStartEndEnabled();
  }
  bool cssAtRuleCounterStyleImageSymbolsEnabled() {
    return RuntimeEnabledFeatures::CSSAtRuleCounterStyleImageSymbolsEnabled();
  }
  bool cssAtRuleCounterStyleSpeakAsDescriptorEnabled() {
    return RuntimeEnabledFeatures::CSSAtRuleCounterStyleSpeakAsDescriptorEnabled();
  }
  bool cssBackgroundClipUnprefixEnabled() {
    return RuntimeEnabledFeatures::CSSBackgroundClipUnprefixEnabled();
  }
  bool cssCalcSimplificationAndSerializationEnabled() {
    return RuntimeEnabledFeatures::CSSCalcSimplificationAndSerializationEnabled();
  }
  bool cssCalcSizeFunctionEnabled() {
    return RuntimeEnabledFeatures::CSSCalcSizeFunctionEnabled();
  }
  bool cssCapFontUnitsEnabled() {
    return RuntimeEnabledFeatures::CSSCapFontUnitsEnabled();
  }
  bool cssCaseSensitiveSelectorEnabled() {
    return RuntimeEnabledFeatures::CSSCaseSensitiveSelectorEnabled();
  }
  bool cssColorContrastEnabled() {
    return RuntimeEnabledFeatures::CSSColorContrastEnabled();
  }
  bool cssColorTypedOMEnabled() {
    return RuntimeEnabledFeatures::CSSColorTypedOMEnabled();
  }
  bool cssContentVisibilityImpliesContainIntrinsicSizeAutoEnabled() {
    return RuntimeEnabledFeatures::CSSContentVisibilityImpliesContainIntrinsicSizeAutoEnabled();
  }
  bool cssCrossFadeEnabled() {
    return RuntimeEnabledFeatures::CSSCrossFadeEnabled();
  }
  bool cssCustomStateDeprecatedSyntaxEnabled() {
    return RuntimeEnabledFeatures::CSSCustomStateDeprecatedSyntaxEnabled();
  }
  bool cssCustomStateNewSyntaxEnabled() {
    return RuntimeEnabledFeatures::CSSCustomStateNewSyntaxEnabled();
  }
  bool cssDisplayAnimationEnabled() {
    return RuntimeEnabledFeatures::CSSDisplayAnimationEnabled();
  }
  bool cssDisplayRubyEnabled() {
    return RuntimeEnabledFeatures::CssDisplayRubyEnabled();
  }
  bool cssDynamicRangeLimitEnabled() {
    return RuntimeEnabledFeatures::CSSDynamicRangeLimitEnabled();
  }
  bool cssEnumeratedCustomPropertiesEnabled() {
    return RuntimeEnabledFeatures::CSSEnumeratedCustomPropertiesEnabled();
  }
  bool cssExponentialFunctionsEnabled() {
    return RuntimeEnabledFeatures::CSSExponentialFunctionsEnabled();
  }
  bool cssFieldSizingEnabled() {
    return RuntimeEnabledFeatures::CssFieldSizingEnabled();
  }
  bool cssFirstLetterNoNewLineAsPrecedingCharEnabled() {
    return RuntimeEnabledFeatures::CSSFirstLetterNoNewLineAsPrecedingCharEnabled();
  }
  bool cssFontSizeAdjustEnabled() {
    return RuntimeEnabledFeatures::CSSFontSizeAdjustEnabled();
  }
  bool cssHexAlphaColorEnabled() {
    return RuntimeEnabledFeatures::CSSHexAlphaColorEnabled();
  }
  bool cssLayoutAPIEnabled() {
    return RuntimeEnabledFeatures::CSSLayoutAPIEnabled();
  }
  bool cssLightDarkColorsEnabled() {
    return RuntimeEnabledFeatures::CSSLightDarkColorsEnabled();
  }
  bool cssLinearTimingFunctionEnabled() {
    return RuntimeEnabledFeatures::CSSLinearTimingFunctionEnabled();
  }
  bool cssLogicalOverflowEnabled() {
    return RuntimeEnabledFeatures::CSSLogicalOverflowEnabled();
  }
  bool cssMarkerNestedPseudoElementEnabled() {
    return RuntimeEnabledFeatures::CSSMarkerNestedPseudoElementEnabled();
  }
  bool cssMaskingInteropEnabled() {
    return RuntimeEnabledFeatures::CSSMaskingInteropEnabled();
  }
  bool cssMPCImprovementsEnabled() {
    return RuntimeEnabledFeatures::CSSMPCImprovementsEnabled();
  }
  bool cssNestingIdentEnabled() {
    return RuntimeEnabledFeatures::CSSNestingIdentEnabled();
  }
  bool cssNumericFactoryCompletenessEnabled() {
    return RuntimeEnabledFeatures::CSSNumericFactoryCompletenessEnabled();
  }
  bool cssOffsetPathBasicShapesCircleAndEllipseEnabled() {
    return RuntimeEnabledFeatures::CSSOffsetPathBasicShapesCircleAndEllipseEnabled();
  }
  bool cssOffsetPathBasicShapesRectanglesAndPolygonEnabled() {
    return RuntimeEnabledFeatures::CSSOffsetPathBasicShapesRectanglesAndPolygonEnabled();
  }
  bool cssOffsetPathCoordBoxEnabled() {
    return RuntimeEnabledFeatures::CSSOffsetPathCoordBoxEnabled();
  }
  bool cssOffsetPathRayEnabled() {
    return RuntimeEnabledFeatures::CSSOffsetPathRayEnabled();
  }
  bool cssOffsetPathRayContainEnabled() {
    return RuntimeEnabledFeatures::CSSOffsetPathRayContainEnabled();
  }
  bool cssOffsetPathUrlEnabled() {
    return RuntimeEnabledFeatures::CSSOffsetPathUrlEnabled();
  }
  bool cssOffsetPositionAnchorEnabled() {
    return RuntimeEnabledFeatures::CSSOffsetPositionAnchorEnabled();
  }
  bool cssOverflowMediaFeaturesEnabled() {
    return RuntimeEnabledFeatures::CSSOverflowMediaFeaturesEnabled();
  }
  bool cssPaintAPIArgumentsEnabled() {
    return RuntimeEnabledFeatures::CSSPaintAPIArgumentsEnabled();
  }
  bool cssParserIgnoreCharsetForURLsEnabled() {
    return RuntimeEnabledFeatures::CSSParserIgnoreCharsetForURLsEnabled();
  }
  bool cssPhraseLineBreakEnabled() {
    return RuntimeEnabledFeatures::CSSPhraseLineBreakEnabled();
  }
  bool cssPositionStickyStaticScrollPositionEnabled() {
    return RuntimeEnabledFeatures::CSSPositionStickyStaticScrollPositionEnabled();
  }
  bool cssProgressNotationEnabled() {
    return RuntimeEnabledFeatures::CSSProgressNotationEnabled();
  }
  bool cssPseudoOpenClosedEnabled() {
    return RuntimeEnabledFeatures::CSSPseudoOpenClosedEnabled();
  }
  bool cssPseudoPlayingPausedEnabled() {
    return RuntimeEnabledFeatures::CSSPseudoPlayingPausedEnabled();
  }
  bool cssRelativeColorEnabled() {
    return RuntimeEnabledFeatures::CSSRelativeColorEnabled();
  }
  bool cssResizeAutoEnabled() {
    return RuntimeEnabledFeatures::CSSResizeAutoEnabled();
  }
  bool cssScopeEnabled() {
    return RuntimeEnabledFeatures::CSSScopeEnabled();
  }
  bool cssScrollSnapEventsEnabled() {
    return RuntimeEnabledFeatures::CSSScrollSnapEventsEnabled();
  }
  bool cssScrollStartEnabled() {
    return RuntimeEnabledFeatures::CSSScrollStartEnabled();
  }
  bool cssScrollStateContainerQueriesEnabled() {
    return RuntimeEnabledFeatures::CSSScrollStateContainerQueriesEnabled();
  }
  bool cssSelectorFragmentAnchorEnabled() {
    return RuntimeEnabledFeatures::CSSSelectorFragmentAnchorEnabled();
  }
  bool cssSignRelatedFunctionsEnabled() {
    return RuntimeEnabledFeatures::CSSSignRelatedFunctionsEnabled();
  }
  bool cssSnapChangedEventEnabled() {
    return RuntimeEnabledFeatures::CSSSnapChangedEventEnabled();
  }
  bool cssSnapChangingEventEnabled() {
    return RuntimeEnabledFeatures::CSSSnapChangingEventEnabled();
  }
  bool cssSnapContainerQueriesEnabled() {
    return RuntimeEnabledFeatures::CSSSnapContainerQueriesEnabled();
  }
  bool cssSpellingGrammarErrorsEnabled() {
    return RuntimeEnabledFeatures::CSSSpellingGrammarErrorsEnabled();
  }
  bool cssSteppedValueFunctionsEnabled() {
    return RuntimeEnabledFeatures::CSSSteppedValueFunctionsEnabled();
  }
  bool cssStickyContainerQueriesEnabled() {
    return RuntimeEnabledFeatures::CSSStickyContainerQueriesEnabled();
  }
  bool cssSupportsForImportRulesEnabled() {
    return RuntimeEnabledFeatures::CSSSupportsForImportRulesEnabled();
  }
  bool cssSystemAccentColorEnabled() {
    return RuntimeEnabledFeatures::CSSSystemAccentColorEnabled();
  }
  bool cssTextAutoSpaceEnabled() {
    return RuntimeEnabledFeatures::CSSTextAutoSpaceEnabled();
  }
  bool cssTextBoxTrimEnabled() {
    return RuntimeEnabledFeatures::CSSTextBoxTrimEnabled();
  }
  bool cssTextSpacingEnabled() {
    return RuntimeEnabledFeatures::CSSTextSpacingEnabled();
  }
  bool cssTextSpacingTrimEnabled() {
    return RuntimeEnabledFeatures::CSSTextSpacingTrimEnabled();
  }
  bool cssTextWrapBalanceByScoreEnabled() {
    return RuntimeEnabledFeatures::CSSTextWrapBalanceByScoreEnabled();
  }
  bool cssTextWrapPrettyEnabled() {
    return RuntimeEnabledFeatures::CSSTextWrapPrettyEnabled();
  }
  bool cssTransitionDiscreteEnabled() {
    return RuntimeEnabledFeatures::CSSTransitionDiscreteEnabled();
  }
  bool cssTreeScopedTimelinesEnabled() {
    return RuntimeEnabledFeatures::CSSTreeScopedTimelinesEnabled();
  }
  bool cssUnknownContainerQueriesNoSelectionEnabled() {
    return RuntimeEnabledFeatures::CSSUnknownContainerQueriesNoSelectionEnabled();
  }
  bool cssUpdateMediaFeatureEnabled() {
    return RuntimeEnabledFeatures::CSSUpdateMediaFeatureEnabled();
  }
  bool cssUserSelectContainEnabled() {
    return RuntimeEnabledFeatures::CSSUserSelectContainEnabled();
  }
  bool cssVariables2ImageValuesEnabled() {
    return RuntimeEnabledFeatures::CSSVariables2ImageValuesEnabled();
  }
  bool cssVariables2TransformValuesEnabled() {
    return RuntimeEnabledFeatures::CSSVariables2TransformValuesEnabled();
  }
  bool cssVideoDynamicRangeMediaQueriesEnabled() {
    return RuntimeEnabledFeatures::CSSVideoDynamicRangeMediaQueriesEnabled();
  }
  bool cssViewTimelineInsetShorthandEnabled() {
    return RuntimeEnabledFeatures::CSSViewTimelineInsetShorthandEnabled();
  }
  bool cssViewTransitionClassEnabled() {
    return RuntimeEnabledFeatures::CSSViewTransitionClassEnabled();
  }
  bool customElementsGetNameEnabled() {
    return RuntimeEnabledFeatures::CustomElementsGetNameEnabled();
  }
  bool databaseEnabled() {
    return RuntimeEnabledFeatures::DatabaseEnabledByRuntimeFlag();
  }
  bool dataTransferClearStringItemsEnabled() {
    return RuntimeEnabledFeatures::DataTransferClearStringItemsEnabled();
  }
  bool dateInputInlineBlockEnabled() {
    return RuntimeEnabledFeatures::DateInputInlineBlockEnabled();
  }
  bool declarativeShadowDOMSerializableEnabled() {
    return RuntimeEnabledFeatures::DeclarativeShadowDOMSerializableEnabled();
  }
  bool deprecatedTemplateShadowRootEnabled() {
    return RuntimeEnabledFeatures::DeprecatedTemplateShadowRootEnabled();
  }
  bool deprecateUnloadOptOutEnabled() {
    return RuntimeEnabledFeatures::DeprecateUnloadOptOutEnabledByRuntimeFlag();
  }
  bool desktopCaptureDisableLocalEchoControlEnabled() {
    return RuntimeEnabledFeatures::DesktopCaptureDisableLocalEchoControlEnabled();
  }
  bool desktopPWAsAdditionalWindowingControlsEnabled() {
    return RuntimeEnabledFeatures::DesktopPWAsAdditionalWindowingControlsEnabled();
  }
  bool desktopPWAsSubAppsEnabled() {
    return RuntimeEnabledFeatures::DesktopPWAsSubAppsEnabled();
  }
  bool detailsElementToggleEventEnabled() {
    return RuntimeEnabledFeatures::DetailsElementToggleEventEnabled();
  }
  bool detailsStylingEnabled() {
    return RuntimeEnabledFeatures::DetailsStylingEnabled();
  }
  bool deviceAttributesEnabled() {
    return RuntimeEnabledFeatures::DeviceAttributesEnabled();
  }
  bool deviceOrientationRequestPermissionEnabled() {
    return RuntimeEnabledFeatures::DeviceOrientationRequestPermissionEnabled();
  }
  bool devicePostureEnabled() {
    return RuntimeEnabledFeatures::DevicePostureEnabled();
  }
  bool dialogNewFocusBehaviorEnabled() {
    return RuntimeEnabledFeatures::DialogNewFocusBehaviorEnabled();
  }
  bool digitalGoodsEnabled() {
    return RuntimeEnabledFeatures::DigitalGoodsEnabledByRuntimeFlag();
  }
  bool digitalGoodsV21Enabled() {
    return RuntimeEnabledFeatures::DigitalGoodsV2_1Enabled();
  }
  bool directSocketsEnabled() {
    return RuntimeEnabledFeatures::DirectSocketsEnabled();
  }
  bool dirnameMoreInputTypesEnabled() {
    return RuntimeEnabledFeatures::DirnameMoreInputTypesEnabled();
  }
  bool disableDifferentOriginSubframeDialogSuppressionEnabled() {
    return RuntimeEnabledFeatures::DisableDifferentOriginSubframeDialogSuppressionEnabledByRuntimeFlag();
  }
  bool disableHardwareNoiseSuppressionEnabled() {
    return RuntimeEnabledFeatures::DisableHardwareNoiseSuppressionEnabledByRuntimeFlag();
  }
  bool disableSelectAllForEmptyTextEnabled() {
    return RuntimeEnabledFeatures::DisableSelectAllForEmptyTextEnabled();
  }
  bool disableThirdPartySessionStoragePartitioningAfterGeneralPartitioningEnabled() {
    return RuntimeEnabledFeatures::DisableThirdPartySessionStoragePartitioningAfterGeneralPartitioningEnabledByRuntimeFlag();
  }
  bool disableThirdPartyStoragePartitioningEnabled() {
    return RuntimeEnabledFeatures::DisableThirdPartyStoragePartitioningEnabledByRuntimeFlag();
  }
  bool dispatchHiddenVisibilityTransitionsEnabled() {
    return RuntimeEnabledFeatures::DispatchHiddenVisibilityTransitionsEnabled();
  }
  bool displayContentsFocusableEnabled() {
    return RuntimeEnabledFeatures::DisplayContentsFocusableEnabled();
  }
  bool displayCutoutAPIEnabled() {
    return RuntimeEnabledFeatures::DisplayCutoutAPIEnabled();
  }
  bool documentBaseURIFixEnabled() {
    return RuntimeEnabledFeatures::DocumentBaseURIFixEnabled();
  }
  bool documentCookieEnabled() {
    return RuntimeEnabledFeatures::DocumentCookieEnabled();
  }
  bool documentDomainEnabled() {
    return RuntimeEnabledFeatures::DocumentDomainEnabled();
  }
  bool documentOpenOriginAliasRemovalEnabled() {
    return RuntimeEnabledFeatures::DocumentOpenOriginAliasRemovalEnabled();
  }
  bool documentOpenSandboxInheritanceRemovalEnabled() {
    return RuntimeEnabledFeatures::DocumentOpenSandboxInheritanceRemovalEnabled();
  }
  bool documentPictureInPictureAPIEnabled() {
    return RuntimeEnabledFeatures::DocumentPictureInPictureAPIEnabled();
  }
  bool documentPolicyDocumentDomainEnabled() {
    return RuntimeEnabledFeatures::DocumentPolicyDocumentDomainEnabled();
  }
  bool documentPolicyNegotiationEnabled() {
    return RuntimeEnabledFeatures::DocumentPolicyNegotiationEnabledByRuntimeFlag();
  }
  bool documentPolicySyncXHREnabled() {
    return RuntimeEnabledFeatures::DocumentPolicySyncXHREnabled();
  }
  bool documentRenderBlockingEnabled() {
    return RuntimeEnabledFeatures::DocumentRenderBlockingEnabled();
  }
  bool documentWriteEnabled() {
    return RuntimeEnabledFeatures::DocumentWriteEnabled();
  }
  bool domParserUsesHTMLFastPathParserEnabled() {
    return RuntimeEnabledFeatures::DOMParserUsesHTMLFastPathParserEnabled();
  }
  bool domPartsAPIEnabled() {
    return RuntimeEnabledFeatures::DOMPartsAPIEnabled();
  }
  bool dontFireDblclickOnDisabledFormControlsEnabled() {
    return RuntimeEnabledFeatures::DontFireDblclickOnDisabledFormControlsEnabled();
  }
  bool dynamicScrollCullRectExpansionEnabled() {
    return RuntimeEnabledFeatures::DynamicScrollCullRectExpansionEnabled();
  }
  bool editContextEnabled() {
    return RuntimeEnabledFeatures::EditContextEnabledByRuntimeFlag();
  }
  bool elementCaptureEnabled() {
    return RuntimeEnabledFeatures::ElementCaptureEnabledByRuntimeFlag();
  }
  bool elementGetHTMLEnabled() {
    return RuntimeEnabledFeatures::ElementGetHTMLEnabled();
  }
  bool elementGetInnerHTMLEnabled() {
    return RuntimeEnabledFeatures::ElementGetInnerHTMLEnabled();
  }
  bool emptyClipboardReadEnabled() {
    return RuntimeEnabledFeatures::EmptyClipboardReadEnabled();
  }
  bool enforceAnonymityExposureEnabled() {
    return RuntimeEnabledFeatures::EnforceAnonymityExposureEnabled();
  }
  bool escapeLtGtInAttributesEnabled() {
    return RuntimeEnabledFeatures::EscapeLtGtInAttributesEnabled();
  }
  bool eventTimingInteractionCountEnabled() {
    return RuntimeEnabledFeatures::EventTimingInteractionCountEnabled();
  }
  bool experimentalContentSecurityPolicyFeaturesEnabled() {
    return RuntimeEnabledFeatures::ExperimentalContentSecurityPolicyFeaturesEnabled();
  }
  bool experimentalJSProfilerMarkersEnabled() {
    return RuntimeEnabledFeatures::ExperimentalJSProfilerMarkersEnabled();
  }
  bool experimentalPoliciesEnabled() {
    return RuntimeEnabledFeatures::ExperimentalPoliciesEnabled();
  }
  bool exposeRenderTimeNonTaoDelayedImageEnabled() {
    return RuntimeEnabledFeatures::ExposeRenderTimeNonTaoDelayedImageEnabled();
  }
  bool extendedTextMetricsEnabled() {
    return RuntimeEnabledFeatures::ExtendedTextMetricsEnabled();
  }
  bool extraWebGLVideoTextureMetadataEnabled() {
    return RuntimeEnabledFeatures::ExtraWebGLVideoTextureMetadataEnabled();
  }
  bool eyeDropperAPIEnabled() {
    return RuntimeEnabledFeatures::EyeDropperAPIEnabled();
  }
  bool faceDetectorEnabled() {
    return RuntimeEnabledFeatures::FaceDetectorEnabled();
  }
  bool fakeNoAllocDirectCallForTestingEnabled() {
    return RuntimeEnabledFeatures::FakeNoAllocDirectCallForTestingEnabled();
  }
  bool fastPositionIteratorEnabled() {
    return RuntimeEnabledFeatures::FastPositionIteratorEnabled();
  }
  bool fedCmEnabled() {
    return RuntimeEnabledFeatures::FedCmEnabled();
  }
  bool fedCmAuthzEnabled() {
    return RuntimeEnabledFeatures::FedCmAuthzEnabled();
  }
  bool fedCmAutoSelectedFlagEnabled() {
    return RuntimeEnabledFeatures::FedCmAutoSelectedFlagEnabled();
  }
  bool fedCmButtonModeEnabled() {
    return RuntimeEnabledFeatures::FedCmButtonModeEnabled();
  }
  bool fedCmDisconnectEnabled() {
    return RuntimeEnabledFeatures::FedCmDisconnectEnabled();
  }
  bool fedCmDomainHintEnabled() {
    return RuntimeEnabledFeatures::FedCmDomainHintEnabled();
  }
  bool fedCmErrorEnabled() {
    return RuntimeEnabledFeatures::FedCmErrorEnabled();
  }
  bool fedCmIdPRegistrationEnabled() {
    return RuntimeEnabledFeatures::FedCmIdPRegistrationEnabled();
  }
  bool fedCmIdpSigninStatusEnabled() {
    return RuntimeEnabledFeatures::FedCmIdpSigninStatusEnabled();
  }
  bool fedCmMultipleIdentityProvidersEnabled() {
    return RuntimeEnabledFeatures::FedCmMultipleIdentityProvidersEnabled();
  }
  bool fedCmSelectiveDisclosureEnabled() {
    return RuntimeEnabledFeatures::FedCmSelectiveDisclosureEnabled();
  }
  bool fencedFramesEnabled() {
    return RuntimeEnabledFeatures::FencedFramesEnabledByRuntimeFlag();
  }
  bool fencedFramesAPIChangesEnabled() {
    return RuntimeEnabledFeatures::FencedFramesAPIChangesEnabledByRuntimeFlag();
  }
  bool fencedFramesDefaultModeEnabled() {
    return RuntimeEnabledFeatures::FencedFramesDefaultModeEnabled();
  }
  bool fencedFramesLocalUnpartitionedDataAccessEnabled() {
    return RuntimeEnabledFeatures::FencedFramesLocalUnpartitionedDataAccessEnabled();
  }
  bool fetchLaterAPIEnabled() {
    return RuntimeEnabledFeatures::FetchLaterAPIEnabledByRuntimeFlag();
  }
  bool fetchUploadStreamingEnabled() {
    return RuntimeEnabledFeatures::FetchUploadStreamingEnabled();
  }
  bool fileHandlingEnabled() {
    return RuntimeEnabledFeatures::FileHandlingEnabled();
  }
  bool fileHandlingIconsEnabled() {
    return RuntimeEnabledFeatures::FileHandlingIconsEnabled();
  }
  bool fileSystemEnabled() {
    return RuntimeEnabledFeatures::FileSystemEnabled();
  }
  bool fileSystemAccessEnabled() {
    return RuntimeEnabledFeatures::FileSystemAccessEnabled();
  }
  bool fileSystemAccessAPIExperimentalEnabled() {
    return RuntimeEnabledFeatures::FileSystemAccessAPIExperimentalEnabled();
  }
  bool fileSystemAccessGetCloudIdentifiersEnabled() {
    return RuntimeEnabledFeatures::FileSystemAccessGetCloudIdentifiersEnabled();
  }
  bool fileSystemAccessLocalEnabled() {
    return RuntimeEnabledFeatures::FileSystemAccessLocalEnabled();
  }
  bool fileSystemAccessLockingSchemeEnabled() {
    return RuntimeEnabledFeatures::FileSystemAccessLockingSchemeEnabled();
  }
  bool fileSystemAccessOriginPrivateEnabled() {
    return RuntimeEnabledFeatures::FileSystemAccessOriginPrivateEnabled();
  }
  bool fileSystemObserverEnabled() {
    return RuntimeEnabledFeatures::FileSystemObserverEnabled();
  }
  bool fledgeEnabled() {
    return RuntimeEnabledFeatures::FledgeEnabledByRuntimeFlag();
  }
  bool fledgeBiddingAndAuctionServerAPIEnabled() {
    return RuntimeEnabledFeatures::FledgeBiddingAndAuctionServerAPIEnabledByRuntimeFlag();
  }
  bool fledgeClearOriginJoinedAdInterestGroupsEnabled() {
    return RuntimeEnabledFeatures::FledgeClearOriginJoinedAdInterestGroupsEnabled();
  }
  bool fledgeDirectFromSellerSignalsHeaderAdSlotEnabled() {
    return RuntimeEnabledFeatures::FledgeDirectFromSellerSignalsHeaderAdSlotEnabled();
  }
  bool fledgeFeatureDetectionEnabled() {
    return RuntimeEnabledFeatures::FledgeFeatureDetectionEnabled();
  }
  bool fledgeNegativeTargetingEnabled() {
    return RuntimeEnabledFeatures::FledgeNegativeTargetingEnabled();
  }
  bool fledgeTrustedBiddingSignalsSlotSizeEnabled() {
    return RuntimeEnabledFeatures::FledgeTrustedBiddingSignalsSlotSizeEnabled();
  }
  bool fluentOverlayScrollbarsEnabled() {
    return RuntimeEnabledFeatures::FluentOverlayScrollbarsEnabled();
  }
  bool fluentScrollbarsEnabled() {
    return RuntimeEnabledFeatures::FluentScrollbarsEnabled();
  }
  bool flushParserBeforeCreatingCustomElementsEnabled() {
    return RuntimeEnabledFeatures::FlushParserBeforeCreatingCustomElementsEnabled();
  }
  bool focusgroupEnabled() {
    return RuntimeEnabledFeatures::FocusgroupEnabledByRuntimeFlag();
  }
  bool focusStyleInvalidationOnPageActivationEnabled() {
    return RuntimeEnabledFeatures::FocusStyleInvalidationOnPageActivationEnabled();
  }
  bool fontAccessEnabled() {
    return RuntimeEnabledFeatures::FontAccessEnabled();
  }
  bool fontationsFontBackendEnabled() {
    return RuntimeEnabledFeatures::FontationsFontBackendEnabled();
  }
  bool fontMatchingCTMigrationEnabled() {
    return RuntimeEnabledFeatures::FontMatchingCTMigrationEnabled();
  }
  bool fontPaletteAnimationEnabled() {
    return RuntimeEnabledFeatures::FontPaletteAnimationEnabled();
  }
  bool fontSrcLocalMatchingEnabled() {
    return RuntimeEnabledFeatures::FontSrcLocalMatchingEnabled();
  }
  bool forcedColorsEnabled() {
    return RuntimeEnabledFeatures::ForcedColorsEnabled();
  }
  bool forcedColorsPreserveParentColorEnabled() {
    return RuntimeEnabledFeatures::ForcedColorsPreserveParentColorEnabled();
  }
  bool forceEagerMeasureMemoryEnabled() {
    return RuntimeEnabledFeatures::ForceEagerMeasureMemoryEnabled();
  }
  bool forceReduceMotionEnabled() {
    return RuntimeEnabledFeatures::ForceReduceMotionEnabled();
  }
  bool forceTallerSelectPopupEnabled() {
    return RuntimeEnabledFeatures::ForceTallerSelectPopupEnabled();
  }
  bool formattedTextEnabled() {
    return RuntimeEnabledFeatures::FormattedTextEnabled();
  }
  bool formControlRestoreStateIfAutocompleteOffEnabled() {
    return RuntimeEnabledFeatures::FormControlRestoreStateIfAutocompleteOffEnabled();
  }
  bool formControlsVerticalWritingModeDirectionSupportEnabled() {
    return RuntimeEnabledFeatures::FormControlsVerticalWritingModeDirectionSupportEnabled();
  }
  bool formControlsVerticalWritingModeSupportEnabled() {
    return RuntimeEnabledFeatures::FormControlsVerticalWritingModeSupportEnabled();
  }
  bool formControlsVerticalWritingModeTextSupportEnabled() {
    return RuntimeEnabledFeatures::FormControlsVerticalWritingModeTextSupportEnabled();
  }
  bool formStateRestoreCallbackCallWithStateEnabled() {
    return RuntimeEnabledFeatures::FormStateRestoreCallbackCallWithStateEnabled();
  }
  bool fractionalScrollOffsetsEnabled() {
    return RuntimeEnabledFeatures::FractionalScrollOffsetsEnabled();
  }
  bool freezeFramesOnVisibilityEnabled() {
    return RuntimeEnabledFeatures::FreezeFramesOnVisibilityEnabled();
  }
  bool fullscreenPopupWindowsEnabled() {
    return RuntimeEnabledFeatures::FullscreenPopupWindowsEnabledByRuntimeFlag();
  }
  bool gamepadButtonAxisEventsEnabled() {
    return RuntimeEnabledFeatures::GamepadButtonAxisEventsEnabled();
  }
  bool gamepadMultitouchEnabled() {
    return RuntimeEnabledFeatures::GamepadMultitouchEnabled();
  }
  bool getAllScreensMediaEnabled() {
    return RuntimeEnabledFeatures::GetAllScreensMediaEnabledByRuntimeFlag();
  }
  bool getDisplayMediaEnabled() {
    return RuntimeEnabledFeatures::GetDisplayMediaEnabled();
  }
  bool getDisplayMediaRequiresUserActivationEnabled() {
    return RuntimeEnabledFeatures::GetDisplayMediaRequiresUserActivationEnabled();
  }
  bool getNextSiblingPositionWhenLastChildEnabled() {
    return RuntimeEnabledFeatures::GetNextSiblingPositionWhenLastChildEnabled();
  }
  bool groupEffectEnabled() {
    return RuntimeEnabledFeatures::GroupEffectEnabled();
  }
  bool handwritingRecognitionEnabled() {
    return RuntimeEnabledFeatures::HandwritingRecognitionEnabled();
  }
  bool hangingWhitespaceDoesNotDependOnAlignmentEnabled() {
    return RuntimeEnabledFeatures::HangingWhitespaceDoesNotDependOnAlignmentEnabled();
  }
  bool hasUAVisualTransitionEnabled() {
    return RuntimeEnabledFeatures::HasUAVisualTransitionEnabled();
  }
  bool highlightInheritanceEnabled() {
    return RuntimeEnabledFeatures::HighlightInheritanceEnabled();
  }
  bool highlightPointerEventsEnabled() {
    return RuntimeEnabledFeatures::HighlightPointerEventsEnabled();
  }
  bool hitTestOpaquenessEnabled() {
    return RuntimeEnabledFeatures::HitTestOpaquenessEnabled();
  }
  bool hitTestTransparencyEnabled() {
    return RuntimeEnabledFeatures::HitTestTransparencyEnabled();
  }
  bool hrefTranslateEnabled() {
    return RuntimeEnabledFeatures::HrefTranslateEnabledByRuntimeFlag();
  }
  bool htmlInvokeActionsV2Enabled() {
    return RuntimeEnabledFeatures::HTMLInvokeActionsV2Enabled();
  }
  bool htmlInvokeTargetAttributeEnabled() {
    return RuntimeEnabledFeatures::HTMLInvokeTargetAttributeEnabled();
  }
  bool htmlParserFastPathBulkInsertNotifyEnabled() {
    return RuntimeEnabledFeatures::HTMLParserFastPathBulkInsertNotifyEnabled();
  }
  bool htmlParserYieldAndDelayOftenForTestingEnabled() {
    return RuntimeEnabledFeatures::HTMLParserYieldAndDelayOftenForTestingEnabled();
  }
  bool htmlPopoverHintEnabled() {
    return RuntimeEnabledFeatures::HTMLPopoverHintEnabled();
  }
  bool htmlSearchElementEnabled() {
    return RuntimeEnabledFeatures::HTMLSearchElementEnabled();
  }
  bool htmlSelectElementShowPickerEnabled() {
    return RuntimeEnabledFeatures::HTMLSelectElementShowPickerEnabled();
  }
  bool htmlSelectListElementEnabled() {
    return RuntimeEnabledFeatures::HTMLSelectListElementEnabled();
  }
  bool htmlUnsafeMethodsEnabled() {
    return RuntimeEnabledFeatures::HTMLUnsafeMethodsEnabled();
  }
  bool implicitRootScrollerEnabled() {
    return RuntimeEnabledFeatures::ImplicitRootScrollerEnabled();
  }
  bool importAttributesDisallowUnknownKeysEnabled() {
    return RuntimeEnabledFeatures::ImportAttributesDisallowUnknownKeysEnabled();
  }
  bool improvedXMLErrorsEnabled() {
    return RuntimeEnabledFeatures::ImprovedXMLErrorsEnabled();
  }
  bool incomingCallNotificationsEnabled() {
    return RuntimeEnabledFeatures::IncomingCallNotificationsEnabled();
  }
  bool inertDisplayTransitionEnabled() {
    return RuntimeEnabledFeatures::InertDisplayTransitionEnabled();
  }
  bool infiniteCullRectEnabled() {
    return RuntimeEnabledFeatures::InfiniteCullRectEnabled();
  }
  bool inheritUserModifyWithoutContenteditableEnabled() {
    return RuntimeEnabledFeatures::InheritUserModifyWithoutContenteditableEnabled();
  }
  bool innerHTMLParserFastpathLogFailureEnabled() {
    return RuntimeEnabledFeatures::InnerHTMLParserFastpathLogFailureEnabled();
  }
  bool inputMultipleFieldsUIEnabled() {
    return RuntimeEnabledFeatures::InputMultipleFieldsUIEnabled();
  }
  bool insertLineBreakIfPhrasingContentEnabled() {
    return RuntimeEnabledFeatures::InsertLineBreakIfPhrasingContentEnabled();
  }
  bool installedAppEnabled() {
    return RuntimeEnabledFeatures::InstalledAppEnabled();
  }
  bool interoperablePrivateAttributionEnabled() {
    return RuntimeEnabledFeatures::InteroperablePrivateAttributionEnabled();
  }
  bool interruptComposedScrollbarDisappearanceEnabled() {
    return RuntimeEnabledFeatures::InterruptComposedScrollbarDisappearanceEnabled();
  }
  bool intersectionObserverScrollMarginEnabled() {
    return RuntimeEnabledFeatures::IntersectionObserverScrollMarginEnabled();
  }
  bool intersectionOptimizationEnabled() {
    return RuntimeEnabledFeatures::IntersectionOptimizationEnabled();
  }
  bool invertedColorsEnabled() {
    return RuntimeEnabledFeatures::InvertedColorsEnabled();
  }
  bool invisibleSVGAnimationThrottlingEnabled() {
    return RuntimeEnabledFeatures::InvisibleSVGAnimationThrottlingEnabled();
  }
  bool javaScriptCompileHintsMagicRuntimeEnabled() {
    return RuntimeEnabledFeatures::JavaScriptCompileHintsMagicRuntimeEnabledByRuntimeFlag();
  }
  bool keyboardAccessibleTooltipEnabled() {
    return RuntimeEnabledFeatures::KeyboardAccessibleTooltipEnabled();
  }
  bool keyboardFocusableScrollersEnabled() {
    return RuntimeEnabledFeatures::KeyboardFocusableScrollersEnabled();
  }
  bool labelEventHandlerCallSuperEnabled() {
    return RuntimeEnabledFeatures::LabelEventHandlerCallSuperEnabled();
  }
  bool langAttributeAwareFormControlUIEnabled() {
    return RuntimeEnabledFeatures::LangAttributeAwareFormControlUIEnabled();
  }
  bool layoutAlignForPositionedEnabled() {
    return RuntimeEnabledFeatures::LayoutAlignForPositionedEnabled();
  }
  bool layoutFlexNewRowAlgorithmV3Enabled() {
    return RuntimeEnabledFeatures::LayoutFlexNewRowAlgorithmV3Enabled();
  }
  bool layoutIgnoreMarginsForStickyEnabled() {
    return RuntimeEnabledFeatures::LayoutIgnoreMarginsForStickyEnabled();
  }
  bool layoutNGShapeCacheEnabled() {
    return RuntimeEnabledFeatures::LayoutNGShapeCacheEnabled();
  }
  bool lazyInitializeMediaControlsEnabled() {
    return RuntimeEnabledFeatures::LazyInitializeMediaControlsEnabled();
  }
  bool lazyLoadScrollMarginEnabled() {
    return RuntimeEnabledFeatures::LazyLoadScrollMarginEnabled();
  }
  bool lazyLoadScrollMarginIframeEnabled() {
    return RuntimeEnabledFeatures::LazyLoadScrollMarginIframeEnabled();
  }
  bool lcpAnimatedImagesWebExposedEnabled() {
    return RuntimeEnabledFeatures::LCPAnimatedImagesWebExposedEnabled();
  }
  bool lcpMouseoverHeuristicsEnabled() {
    return RuntimeEnabledFeatures::LCPMouseoverHeuristicsEnabled();
  }
  bool lcpMultipleUpdatesPerElementEnabled() {
    return RuntimeEnabledFeatures::LCPMultipleUpdatesPerElementEnabled();
  }
  bool legacyWindowsDWriteFontFallbackEnabled() {
    return RuntimeEnabledFeatures::LegacyWindowsDWriteFontFallbackEnabled();
  }
  bool lockedModeEnabled() {
    return RuntimeEnabledFeatures::LockedModeEnabled();
  }
  bool longAnimationFrameTimingEnabled() {
    return RuntimeEnabledFeatures::LongAnimationFrameTimingEnabled();
  }
  bool longTaskFromLongAnimationFrameEnabled() {
    return RuntimeEnabledFeatures::LongTaskFromLongAnimationFrameEnabled();
  }
  bool macFontsDeprecateFontTraitsWorkaroundEnabled() {
    return RuntimeEnabledFeatures::MacFontsDeprecateFontTraitsWorkaroundEnabled();
  }
  bool machineLearningCommonEnabled() {
    return RuntimeEnabledFeatures::MachineLearningCommonEnabled();
  }
  bool machineLearningModelLoaderEnabled() {
    return RuntimeEnabledFeatures::MachineLearningModelLoaderEnabled();
  }
  bool machineLearningNeuralNetworkEnabled() {
    return RuntimeEnabledFeatures::MachineLearningNeuralNetworkEnabled();
  }
  bool managedConfigurationEnabled() {
    return RuntimeEnabledFeatures::ManagedConfigurationEnabled();
  }
  bool maskingGraphemeClustersEnabled() {
    return RuntimeEnabledFeatures::MaskingGraphemeClustersEnabled();
  }
  bool measureMemoryEnabled() {
    return RuntimeEnabledFeatures::MeasureMemoryEnabled();
  }
  bool mediaCapabilitiesDynamicRangeEnabled() {
    return RuntimeEnabledFeatures::MediaCapabilitiesDynamicRangeEnabled();
  }
  bool mediaCapabilitiesEncodingInfoEnabled() {
    return RuntimeEnabledFeatures::MediaCapabilitiesEncodingInfoEnabled();
  }
  bool mediaCapabilitiesSpatialAudioEnabled() {
    return RuntimeEnabledFeatures::MediaCapabilitiesSpatialAudioEnabled();
  }
  bool mediaCaptureEnabled() {
    return RuntimeEnabledFeatures::MediaCaptureEnabled();
  }
  bool mediaCaptureBackgroundBlurEnabled() {
    return RuntimeEnabledFeatures::MediaCaptureBackgroundBlurEnabledByRuntimeFlag();
  }
  bool mediaCaptureCameraControlsEnabled() {
    return RuntimeEnabledFeatures::MediaCaptureCameraControlsEnabled();
  }
  bool mediaCaptureConfigurationChangeEnabled() {
    return RuntimeEnabledFeatures::MediaCaptureConfigurationChangeEnabledByRuntimeFlag();
  }
  bool mediaCaptureVoiceIsolationEnabled() {
    return RuntimeEnabledFeatures::MediaCaptureVoiceIsolationEnabled();
  }
  bool mediaCastOverlayButtonEnabled() {
    return RuntimeEnabledFeatures::MediaCastOverlayButtonEnabled();
  }
  bool mediaControlsExpandGestureEnabled() {
    return RuntimeEnabledFeatures::MediaControlsExpandGestureEnabled();
  }
  bool mediaControlsOverlayPlayButtonEnabled() {
    return RuntimeEnabledFeatures::MediaControlsOverlayPlayButtonEnabled();
  }
  bool mediaElementVolumeGreaterThanOneEnabled() {
    return RuntimeEnabledFeatures::MediaElementVolumeGreaterThanOneEnabled();
  }
  bool mediaEngagementBypassAutoplayPoliciesEnabled() {
    return RuntimeEnabledFeatures::MediaEngagementBypassAutoplayPoliciesEnabled();
  }
  bool mediaLatencyHintEnabled() {
    return RuntimeEnabledFeatures::MediaLatencyHintEnabled();
  }
  bool mediaQueryNavigationControlsEnabled() {
    return RuntimeEnabledFeatures::MediaQueryNavigationControlsEnabled();
  }
  bool mediaRecorderUseMediaVideoEncoderEnabled() {
    return RuntimeEnabledFeatures::MediaRecorderUseMediaVideoEncoderEnabled();
  }
  bool mediaSessionEnabled() {
    return RuntimeEnabledFeatures::MediaSessionEnabled();
  }
  bool mediaSessionChapterInformationEnabled() {
    return RuntimeEnabledFeatures::MediaSessionChapterInformationEnabled();
  }
  bool mediaSessionEnterPictureInPictureEnabled() {
    return RuntimeEnabledFeatures::MediaSessionEnterPictureInPictureEnabled();
  }
  bool mediaSourceExperimentalEnabled() {
    return RuntimeEnabledFeatures::MediaSourceExperimentalEnabled();
  }
  bool mediaSourceExtensionsForWebCodecsEnabled() {
    return RuntimeEnabledFeatures::MediaSourceExtensionsForWebCodecsEnabledByRuntimeFlag();
  }
  bool mediaSourceNewAbortAndDurationEnabled() {
    return RuntimeEnabledFeatures::MediaSourceNewAbortAndDurationEnabled();
  }
  bool mediaStreamTrackTransferEnabled() {
    return RuntimeEnabledFeatures::MediaStreamTrackTransferEnabled();
  }
  bool messagePortCloseEventEnabled() {
    return RuntimeEnabledFeatures::MessagePortCloseEventEnabled();
  }
  bool middleClickAutoscrollEnabled() {
    return RuntimeEnabledFeatures::MiddleClickAutoscrollEnabled();
  }
  bool mobileLayoutThemeEnabled() {
    return RuntimeEnabledFeatures::MobileLayoutThemeEnabled();
  }
  bool modelExecutionAPIEnabled() {
    return RuntimeEnabledFeatures::ModelExecutionAPIEnabled();
  }
  bool mojoJSEnabled() {
    return RuntimeEnabledFeatures::MojoJSEnabled();
  }
  bool mojoJSTestEnabled() {
    return RuntimeEnabledFeatures::MojoJSTestEnabled();
  }
  bool mouseDragFromIframeOnCancelledMouseDownEnabled() {
    return RuntimeEnabledFeatures::MouseDragFromIframeOnCancelledMouseDownEnabled();
  }
  bool mouseDragOnCancelledMouseMoveEnabled() {
    return RuntimeEnabledFeatures::MouseDragOnCancelledMouseMoveEnabled();
  }
  bool mutationEventsEnabled() {
    return RuntimeEnabledFeatures::MutationEventsEnabled();
  }
  bool navigateEventCommitBehaviorEnabled() {
    return RuntimeEnabledFeatures::NavigateEventCommitBehaviorEnabled();
  }
  bool navigateEventSourceElementEnabled() {
    return RuntimeEnabledFeatures::NavigateEventSourceElementEnabled();
  }
  bool navigationActivationEnabled() {
    return RuntimeEnabledFeatures::NavigationActivationEnabled();
  }
  bool navigationIdEnabled() {
    return RuntimeEnabledFeatures::NavigationIdEnabledByRuntimeFlag();
  }
  bool navigatorContentUtilsEnabled() {
    return RuntimeEnabledFeatures::NavigatorContentUtilsEnabled();
  }
  bool nestedTopLayerSupportEnabled() {
    return RuntimeEnabledFeatures::NestedTopLayerSupportEnabled();
  }
  bool netInfoConstantTypeEnabled() {
    return RuntimeEnabledFeatures::NetInfoConstantTypeEnabled();
  }
  bool netInfoDownlinkMaxEnabled() {
    return RuntimeEnabledFeatures::NetInfoDownlinkMaxEnabled();
  }
  bool nextSiblingPositionUseNextCandidateEnabled() {
    return RuntimeEnabledFeatures::NextSiblingPositionUseNextCandidateEnabled();
  }
  bool noIdleEncodingForWebTestsEnabled() {
    return RuntimeEnabledFeatures::NoIdleEncodingForWebTestsEnabled();
  }
  bool nonComposedEnterLeaveEventsEnabled() {
    return RuntimeEnabledFeatures::NonComposedEnterLeaveEventsEnabled();
  }
  bool nonStandardAppearanceValuesHighUsageEnabled() {
    return RuntimeEnabledFeatures::NonStandardAppearanceValuesHighUsageEnabled();
  }
  bool nonStandardAppearanceValueSliderVerticalEnabled() {
    return RuntimeEnabledFeatures::NonStandardAppearanceValueSliderVerticalEnabled();
  }
  bool nonStandardAppearanceValuesLowUsageEnabled() {
    return RuntimeEnabledFeatures::NonStandardAppearanceValuesLowUsageEnabled();
  }
  bool noOffsetMappingForInconsistentTextEnabled() {
    return RuntimeEnabledFeatures::NoOffsetMappingForInconsistentTextEnabled();
  }
  bool notificationConstructorEnabled() {
    return RuntimeEnabledFeatures::NotificationConstructorEnabled();
  }
  bool notificationContentImageEnabled() {
    return RuntimeEnabledFeatures::NotificationContentImageEnabled();
  }
  bool notificationsEnabled() {
    return RuntimeEnabledFeatures::NotificationsEnabled();
  }
  bool notificationTriggersEnabled() {
    return RuntimeEnabledFeatures::NotificationTriggersEnabledByRuntimeFlag();
  }
  bool noVarySearchPrefetchEnabled() {
    return RuntimeEnabledFeatures::NoVarySearchPrefetchEnabledByRuntimeFlag();
  }
  bool observableAPIEnabled() {
    return RuntimeEnabledFeatures::ObservableAPIEnabled();
  }
  bool offMainThreadCSSPaintEnabled() {
    return RuntimeEnabledFeatures::OffMainThreadCSSPaintEnabled();
  }
  bool offscreenCanvasCommitEnabled() {
    return RuntimeEnabledFeatures::OffscreenCanvasCommitEnabled();
  }
  bool offsetMappingUnitVariableEnabled() {
    return RuntimeEnabledFeatures::OffsetMappingUnitVariableEnabled();
  }
  bool onDeviceChangeEnabled() {
    return RuntimeEnabledFeatures::OnDeviceChangeEnabled();
  }
  bool optionElementAlwaysUseLabelEnabled() {
    return RuntimeEnabledFeatures::OptionElementAlwaysUseLabelEnabled();
  }
  bool orientationEventEnabled() {
    return RuntimeEnabledFeatures::OrientationEventEnabled();
  }
  bool originIsolationHeaderEnabled() {
    return RuntimeEnabledFeatures::OriginIsolationHeaderEnabled();
  }
  bool originPolicyEnabled() {
    return RuntimeEnabledFeatures::OriginPolicyEnabled();
  }
  bool originTrialsSampleAPIEnabled() {
    return RuntimeEnabledFeatures::OriginTrialsSampleAPIEnabledByRuntimeFlag();
  }
  bool originTrialsSampleAPIBrowserReadWriteEnabled() {
    return RuntimeEnabledFeatures::OriginTrialsSampleAPIBrowserReadWriteEnabledByRuntimeFlag();
  }
  bool originTrialsSampleAPIDependentEnabled() {
    return RuntimeEnabledFeatures::OriginTrialsSampleAPIDependentEnabledByRuntimeFlag();
  }
  bool originTrialsSampleAPIDeprecationEnabled() {
    return RuntimeEnabledFeatures::OriginTrialsSampleAPIDeprecationEnabledByRuntimeFlag();
  }
  bool originTrialsSampleAPIExpiryGracePeriodEnabled() {
    return RuntimeEnabledFeatures::OriginTrialsSampleAPIExpiryGracePeriodEnabledByRuntimeFlag();
  }
  bool originTrialsSampleAPIExpiryGracePeriodThirdPartyEnabled() {
    return RuntimeEnabledFeatures::OriginTrialsSampleAPIExpiryGracePeriodThirdPartyEnabledByRuntimeFlag();
  }
  bool originTrialsSampleAPIImpliedEnabled() {
    return RuntimeEnabledFeatures::OriginTrialsSampleAPIImpliedEnabledByRuntimeFlag();
  }
  bool originTrialsSampleAPIInvalidOSEnabled() {
    return RuntimeEnabledFeatures::OriginTrialsSampleAPIInvalidOSEnabledByRuntimeFlag();
  }
  bool originTrialsSampleAPINavigationEnabled() {
    return RuntimeEnabledFeatures::OriginTrialsSampleAPINavigationEnabledByRuntimeFlag();
  }
  bool originTrialsSampleAPIPersistentExpiryGracePeriodEnabled() {
    return RuntimeEnabledFeatures::OriginTrialsSampleAPIPersistentExpiryGracePeriodEnabledByRuntimeFlag();
  }
  bool originTrialsSampleAPIPersistentFeatureEnabled() {
    return RuntimeEnabledFeatures::OriginTrialsSampleAPIPersistentFeatureEnabledByRuntimeFlag();
  }
  bool originTrialsSampleAPIPersistentInvalidOSEnabled() {
    return RuntimeEnabledFeatures::OriginTrialsSampleAPIPersistentInvalidOSEnabledByRuntimeFlag();
  }
  bool originTrialsSampleAPIPersistentThirdPartyDeprecationFeatureEnabled() {
    return RuntimeEnabledFeatures::OriginTrialsSampleAPIPersistentThirdPartyDeprecationFeatureEnabledByRuntimeFlag();
  }
  bool originTrialsSampleAPIThirdPartyEnabled() {
    return RuntimeEnabledFeatures::OriginTrialsSampleAPIThirdPartyEnabledByRuntimeFlag();
  }
  bool overscrollCustomizationEnabled() {
    return RuntimeEnabledFeatures::OverscrollCustomizationEnabled();
  }
  bool pageFreezeOptInEnabled() {
    return RuntimeEnabledFeatures::PageFreezeOptInEnabledByRuntimeFlag();
  }
  bool pageFreezeOptOutEnabled() {
    return RuntimeEnabledFeatures::PageFreezeOptOutEnabledByRuntimeFlag();
  }
  bool pageMarginBoxesEnabled() {
    return RuntimeEnabledFeatures::PageMarginBoxesEnabled();
  }
  bool pagePopupEnabled() {
    return RuntimeEnabledFeatures::PagePopupEnabled();
  }
  bool pageRevealEventEnabled() {
    return RuntimeEnabledFeatures::PageRevealEventEnabled();
  }
  bool paintUnderInvalidationCheckingEnabled() {
    return RuntimeEnabledFeatures::PaintUnderInvalidationCheckingEnabled();
  }
  bool parakeetEnabled() {
    return RuntimeEnabledFeatures::ParakeetEnabledByRuntimeFlag();
  }
  bool partitionedCookiesEnabled() {
    return RuntimeEnabledFeatures::PartitionedCookiesEnabledByRuntimeFlag();
  }
  bool passwordRevealEnabled() {
    return RuntimeEnabledFeatures::PasswordRevealEnabled();
  }
  bool passwordStrongLabelEnabled() {
    return RuntimeEnabledFeatures::PasswordStrongLabelEnabled();
  }
  bool pastingBlocksSVGUseNonLocalHrefsEnabled() {
    return RuntimeEnabledFeatures::PastingBlocksSVGUseNonLocalHrefsEnabled();
  }
  bool paymentAppEnabled() {
    return RuntimeEnabledFeatures::PaymentAppEnabled();
  }
  bool paymentHandlerMinimalHeaderUXEnabled() {
    return RuntimeEnabledFeatures::PaymentHandlerMinimalHeaderUXEnabledByRuntimeFlag();
  }
  bool paymentInstrumentsEnabled() {
    return RuntimeEnabledFeatures::PaymentInstrumentsEnabled();
  }
  bool paymentMethodChangeEventEnabled() {
    return RuntimeEnabledFeatures::PaymentMethodChangeEventEnabled();
  }
  bool paymentRequestEnabled() {
    return RuntimeEnabledFeatures::PaymentRequestEnabled();
  }
  bool paymentRequestAllowOneActivationlessShowEnabled() {
    return RuntimeEnabledFeatures::PaymentRequestAllowOneActivationlessShowEnabled();
  }
  bool paymentRequestMerchantValidationEventEnabled() {
    return RuntimeEnabledFeatures::PaymentRequestMerchantValidationEventEnabled();
  }
  bool pendingBeaconAPIEnabled() {
    return RuntimeEnabledFeatures::PendingBeaconAPIEnabledByRuntimeFlag();
  }
  bool percentBasedScrollingEnabled() {
    return RuntimeEnabledFeatures::PercentBasedScrollingEnabled();
  }
  bool performanceManagerInstrumentationEnabled() {
    return RuntimeEnabledFeatures::PerformanceManagerInstrumentationEnabled();
  }
  bool performanceMarkFeatureUsageEnabled() {
    return RuntimeEnabledFeatures::PerformanceMarkFeatureUsageEnabled();
  }
  bool performanceNavigateSystemEntropyEnabled() {
    return RuntimeEnabledFeatures::PerformanceNavigateSystemEntropyEnabled();
  }
  bool periodicBackgroundSyncEnabled() {
    return RuntimeEnabledFeatures::PeriodicBackgroundSyncEnabled();
  }
  bool perMethodCanMakePaymentQuotaEnabled() {
    return RuntimeEnabledFeatures::PerMethodCanMakePaymentQuotaEnabledByRuntimeFlag();
  }
  bool permissionElementEnabled() {
    return RuntimeEnabledFeatures::PermissionElementEnabled();
  }
  bool permissionsEnabled() {
    return RuntimeEnabledFeatures::PermissionsEnabled();
  }
  bool permissionsRequestRevokeEnabled() {
    return RuntimeEnabledFeatures::PermissionsRequestRevokeEnabled();
  }
  bool pNaClEnabled() {
    return RuntimeEnabledFeatures::PNaClEnabledByRuntimeFlag();
  }
  bool pointerCaptureLostOnRemovalDuringCaptureEnabled() {
    return RuntimeEnabledFeatures::PointerCaptureLostOnRemovalDuringCaptureEnabled();
  }
  bool pointerEventDeviceIdEnabled() {
    return RuntimeEnabledFeatures::PointerEventDeviceIdEnabled();
  }
  bool positionOutsideTabSpanCheckSiblingNodeEnabled() {
    return RuntimeEnabledFeatures::PositionOutsideTabSpanCheckSiblingNodeEnabled();
  }
  bool preciseMemoryInfoEnabled() {
    return RuntimeEnabledFeatures::PreciseMemoryInfoEnabled();
  }
  bool preferDefaultScrollbarStylesEnabled() {
    return RuntimeEnabledFeatures::PreferDefaultScrollbarStylesEnabled();
  }
  bool preferNonCompositedScrollingEnabled() {
    return RuntimeEnabledFeatures::PreferNonCompositedScrollingEnabled();
  }
  bool prefersReducedDataEnabled() {
    return RuntimeEnabledFeatures::PrefersReducedDataEnabled();
  }
  bool prefixedVideoFullscreenEnabled() {
    return RuntimeEnabledFeatures::PrefixedVideoFullscreenEnabled();
  }
  bool prePaintAncestorsOfMissedOOFEnabled() {
    return RuntimeEnabledFeatures::PrePaintAncestorsOfMissedOOFEnabled();
  }
  bool prerender2Enabled() {
    return RuntimeEnabledFeatures::Prerender2Enabled();
  }
  bool presentationEnabled() {
    return RuntimeEnabledFeatures::PresentationEnabled();
  }
  bool prettyPrintJSONDocumentEnabled() {
    return RuntimeEnabledFeatures::PrettyPrintJSONDocumentEnabled();
  }
  bool preventReadingSystemAccentColorEnabled() {
    return RuntimeEnabledFeatures::PreventReadingSystemAccentColorEnabled();
  }
  bool privacySandboxAdsAPISEnabled() {
    return RuntimeEnabledFeatures::PrivacySandboxAdsAPIsEnabledByRuntimeFlag();
  }
  bool privateAggregationAuctionReportBuyerDebugModeConfigEnabled() {
    return RuntimeEnabledFeatures::PrivateAggregationAuctionReportBuyerDebugModeConfigEnabled();
  }
  bool privateNetworkAccessNonSecureContextsAllowedEnabled() {
    return RuntimeEnabledFeatures::PrivateNetworkAccessNonSecureContextsAllowedEnabledByRuntimeFlag();
  }
  bool privateNetworkAccessNullIpAddressEnabled() {
    return RuntimeEnabledFeatures::PrivateNetworkAccessNullIpAddressEnabled();
  }
  bool privateNetworkAccessPermissionPromptEnabled() {
    return RuntimeEnabledFeatures::PrivateNetworkAccessPermissionPromptEnabledByRuntimeFlag();
  }
  bool privateStateTokensEnabled() {
    return RuntimeEnabledFeatures::PrivateStateTokensEnabledByRuntimeFlag();
  }
  bool privateStateTokensAlwaysAllowIssuanceEnabled() {
    return RuntimeEnabledFeatures::PrivateStateTokensAlwaysAllowIssuanceEnabled();
  }
  bool pushMessagingEnabled() {
    return RuntimeEnabledFeatures::PushMessagingEnabled();
  }
  bool pushMessagingSubscriptionChangeEnabled() {
    return RuntimeEnabledFeatures::PushMessagingSubscriptionChangeEnabled();
  }
  bool quickIntensiveWakeUpThrottlingAfterLoadingEnabled() {
    return RuntimeEnabledFeatures::QuickIntensiveWakeUpThrottlingAfterLoadingEnabled();
  }
  bool quotaChangeEnabled() {
    return RuntimeEnabledFeatures::QuotaChangeEnabled();
  }
  bool readableStreamTeeCloneForBranch2Enabled() {
    return RuntimeEnabledFeatures::ReadableStreamTeeCloneForBranch2Enabled();
  }
  bool reduceAcceptLanguageEnabled() {
    return RuntimeEnabledFeatures::ReduceAcceptLanguageEnabledByRuntimeFlag();
  }
  bool reduceCookieIPCsEnabled() {
    return RuntimeEnabledFeatures::ReduceCookieIPCsEnabled();
  }
  bool reduceUserAgentAndroidVersionDeviceModelEnabled() {
    return RuntimeEnabledFeatures::ReduceUserAgentAndroidVersionDeviceModelEnabled();
  }
  bool reduceUserAgentMinorVersionEnabled() {
    return RuntimeEnabledFeatures::ReduceUserAgentMinorVersionEnabled();
  }
  bool reduceUserAgentPlatformOsCpuEnabled() {
    return RuntimeEnabledFeatures::ReduceUserAgentPlatformOsCpuEnabled();
  }
  bool regionCaptureEnabled() {
    return RuntimeEnabledFeatures::RegionCaptureEnabled();
  }
  bool remotePlaybackEnabled() {
    return RuntimeEnabledFeatures::RemotePlaybackEnabled();
  }
  bool remotePlaybackBackendEnabled() {
    return RuntimeEnabledFeatures::RemotePlaybackBackendEnabled();
  }
  bool removeDanglingMarkupInTargetEnabled() {
    return RuntimeEnabledFeatures::RemoveDanglingMarkupInTargetEnabled();
  }
  bool removeDataUrlInSvgUseEnabled() {
    return RuntimeEnabledFeatures::RemoveDataUrlInSvgUseEnabled();
  }
  bool removeMobileViewportDoubleTapEnabled() {
    return RuntimeEnabledFeatures::RemoveMobileViewportDoubleTapEnabled();
  }
  bool renderBlockingInlineModuleScriptEnabled() {
    return RuntimeEnabledFeatures::RenderBlockingInlineModuleScriptEnabled();
  }
  bool renderBlockingStatusEnabled() {
    return RuntimeEnabledFeatures::RenderBlockingStatusEnabled();
  }
  bool renderPriorityAttributeEnabled() {
    return RuntimeEnabledFeatures::RenderPriorityAttributeEnabled();
  }
  bool reportVisibleLineBoundsEnabled() {
    return RuntimeEnabledFeatures::ReportVisibleLineBoundsEnabled();
  }
  bool resourceTimingContentTypeEnabled() {
    return RuntimeEnabledFeatures::ResourceTimingContentTypeEnabled();
  }
  bool resourceTimingUseCORSForBodySizesEnabled() {
    return RuntimeEnabledFeatures::ResourceTimingUseCORSForBodySizesEnabled();
  }
  bool restrictGamepadAccessEnabled() {
    return RuntimeEnabledFeatures::RestrictGamepadAccessEnabled();
  }
  bool rewindFloatsEnabled() {
    return RuntimeEnabledFeatures::RewindFloatsEnabled();
  }
  bool rtcAudioJitterBufferMaxPacketsEnabled() {
    return RuntimeEnabledFeatures::RtcAudioJitterBufferMaxPacketsEnabledByRuntimeFlag();
  }
  bool rtcEncodedAudioFrameAbsCaptureTimeEnabled() {
    return RuntimeEnabledFeatures::RTCEncodedAudioFrameAbsCaptureTimeEnabled();
  }
  bool rtcEncodedFrameSetMetadataEnabled() {
    return RuntimeEnabledFeatures::RTCEncodedFrameSetMetadataEnabledByRuntimeFlag();
  }
  bool rtcEncodedVideoFrameAdditionalMetadataEnabled() {
    return RuntimeEnabledFeatures::RTCEncodedVideoFrameAdditionalMetadataEnabled();
  }
  bool rtcLegacyCallbackBasedGetStatsEnabled() {
    return RuntimeEnabledFeatures::RTCLegacyCallbackBasedGetStatsEnabledByRuntimeFlag();
  }
  bool rtcRtpEncodingParametersCodecEnabled() {
    return RuntimeEnabledFeatures::RTCRtpEncodingParametersCodecEnabled();
  }
  bool rtcRtpHeaderExtensionControlEnabled() {
    return RuntimeEnabledFeatures::RTCRtpHeaderExtensionControlEnabled();
  }
  bool rtcStatsRelativePacketArrivalDelayEnabled() {
    return RuntimeEnabledFeatures::RTCStatsRelativePacketArrivalDelayEnabledByRuntimeFlag();
  }
  bool rtcSvcScalabilityModeEnabled() {
    return RuntimeEnabledFeatures::RTCSvcScalabilityModeEnabled();
  }
  bool rubyInlinifyEnabled() {
    return RuntimeEnabledFeatures::RubyInlinifyEnabled();
  }
  bool rubySimplePairingEnabled() {
    return RuntimeEnabledFeatures::RubySimplePairingEnabled();
  }
  bool runMicrotaskBeforeXmlCustomElementEnabled() {
    return RuntimeEnabledFeatures::RunMicrotaskBeforeXmlCustomElementEnabled();
  }
  bool sanitizerAPIEnabled() {
    return RuntimeEnabledFeatures::SanitizerAPIEnabled();
  }
  bool schedulerYieldEnabled() {
    return RuntimeEnabledFeatures::SchedulerYieldEnabledByRuntimeFlag();
  }
  bool scopedCustomElementRegistryEnabled() {
    return RuntimeEnabledFeatures::ScopedCustomElementRegistryEnabled();
  }
  bool scriptedSpeechRecognitionEnabled() {
    return RuntimeEnabledFeatures::ScriptedSpeechRecognitionEnabled();
  }
  bool scriptedSpeechSynthesisEnabled() {
    return RuntimeEnabledFeatures::ScriptedSpeechSynthesisEnabled();
  }
  bool scrollbarColorEnabled() {
    return RuntimeEnabledFeatures::ScrollbarColorEnabled();
  }
  bool scrollbarWidthEnabled() {
    return RuntimeEnabledFeatures::ScrollbarWidthEnabled();
  }
  bool scrollEndEventsEnabled() {
    return RuntimeEnabledFeatures::ScrollEndEventsEnabled();
  }
  bool scrollTimelineEnabled() {
    return RuntimeEnabledFeatures::ScrollTimelineEnabled();
  }
  bool scrollTimelineCurrentTimeEnabled() {
    return RuntimeEnabledFeatures::ScrollTimelineCurrentTimeEnabled();
  }
  bool scrollTimelineOnCompositorEnabled() {
    return RuntimeEnabledFeatures::ScrollTimelineOnCompositorEnabled();
  }
  bool scrollTopLeftInteropEnabled() {
    return RuntimeEnabledFeatures::ScrollTopLeftInteropEnabled();
  }
  bool securePaymentConfirmationEnabled() {
    return RuntimeEnabledFeatures::SecurePaymentConfirmationEnabled();
  }
  bool securePaymentConfirmationAllowOneActivationlessShowEnabled() {
    return RuntimeEnabledFeatures::SecurePaymentConfirmationAllowOneActivationlessShowEnabled();
  }
  bool securePaymentConfirmationDebugEnabled() {
    return RuntimeEnabledFeatures::SecurePaymentConfirmationDebugEnabled();
  }
  bool securePaymentConfirmationExtensionsEnabled() {
    return RuntimeEnabledFeatures::SecurePaymentConfirmationExtensionsEnabled();
  }
  bool securePaymentConfirmationOptOutEnabled() {
    return RuntimeEnabledFeatures::SecurePaymentConfirmationOptOutEnabledByRuntimeFlag();
  }
  bool selectHrEnabled() {
    return RuntimeEnabledFeatures::SelectHrEnabled();
  }
  bool sendBeaconThrowForBlobWithNonSimpleTypeEnabled() {
    return RuntimeEnabledFeatures::SendBeaconThrowForBlobWithNonSimpleTypeEnabled();
  }
  bool sensorExtraClassesEnabled() {
    return RuntimeEnabledFeatures::SensorExtraClassesEnabled();
  }
  bool serialEnabled() {
    return RuntimeEnabledFeatures::SerialEnabled();
  }
  bool serializeViewTransitionStateInSPAEnabled() {
    return RuntimeEnabledFeatures::SerializeViewTransitionStateInSPAEnabled();
  }
  bool serviceWorkerBypassFetchHandlerEnabled() {
    return RuntimeEnabledFeatures::ServiceWorkerBypassFetchHandlerEnabledByRuntimeFlag();
  }
  bool serviceWorkerClientLifecycleStateEnabled() {
    return RuntimeEnabledFeatures::ServiceWorkerClientLifecycleStateEnabled();
  }
  bool serviceWorkerRaceNetworkRequestEnabled() {
    return RuntimeEnabledFeatures::ServiceWorkerRaceNetworkRequestEnabledByRuntimeFlag();
  }
  bool serviceWorkerStaticRouterEnabled() {
    return RuntimeEnabledFeatures::ServiceWorkerStaticRouterEnabledByRuntimeFlag();
  }
  bool setSequentialFocusStartingPointEnabled() {
    return RuntimeEnabledFeatures::SetSequentialFocusStartingPointEnabled();
  }
  bool shadowRootAttachmentNewBehaviorEnabled() {
    return RuntimeEnabledFeatures::ShadowRootAttachmentNewBehaviorEnabled();
  }
  bool shadowRootClonableEnabled() {
    return RuntimeEnabledFeatures::ShadowRootClonableEnabled();
  }
  bool sharedArrayBufferEnabled() {
    return RuntimeEnabledFeatures::SharedArrayBufferEnabled();
  }
  bool sharedArrayBufferOnDesktopEnabled() {
    return RuntimeEnabledFeatures::SharedArrayBufferOnDesktopEnabled();
  }
  bool sharedArrayBufferUnrestrictedAccessAllowedEnabled() {
    return RuntimeEnabledFeatures::SharedArrayBufferUnrestrictedAccessAllowedEnabled();
  }
  bool sharedAutofillEnabled() {
    return RuntimeEnabledFeatures::SharedAutofillEnabled();
  }
  bool sharedStorageAPIEnabled() {
    return RuntimeEnabledFeatures::SharedStorageAPIEnabledByRuntimeFlag();
  }
  bool sharedStorageAPIM118Enabled() {
    return RuntimeEnabledFeatures::SharedStorageAPIM118Enabled();
  }
  bool sharedStorageAPIM123Enabled() {
    return RuntimeEnabledFeatures::SharedStorageAPIM123Enabled();
  }
  bool sharedWorkerEnabled() {
    return RuntimeEnabledFeatures::SharedWorkerEnabled();
  }
  bool signatureBasedIntegrityEnabled() {
    return RuntimeEnabledFeatures::SignatureBasedIntegrityEnabledByRuntimeFlag();
  }
  bool siteInitiatedMirroringEnabled() {
    return RuntimeEnabledFeatures::SiteInitiatedMirroringEnabled();
  }
  bool skipAdEnabled() {
    return RuntimeEnabledFeatures::SkipAdEnabled();
  }
  bool skipTouchEventFilterEnabled() {
    return RuntimeEnabledFeatures::SkipTouchEventFilterEnabled();
  }
  bool smartCardEnabled() {
    return RuntimeEnabledFeatures::SmartCardEnabled();
  }
  bool smartZoomEnabled() {
    return RuntimeEnabledFeatures::SmartZoomEnabled();
  }
  bool smilAutoSuspendOnLagEnabled() {
    return RuntimeEnabledFeatures::SmilAutoSuspendOnLagEnabled();
  }
  bool snapBorderWidthsBeforeLayoutEnabled() {
    return RuntimeEnabledFeatures::SnapBorderWidthsBeforeLayoutEnabled();
  }
  bool softNavigationDetectionEnabled() {
    return RuntimeEnabledFeatures::SoftNavigationDetectionEnabled();
  }
  bool softNavigationHeuristicsEnabled() {
    return RuntimeEnabledFeatures::SoftNavigationHeuristicsEnabledByRuntimeFlag();
  }
  bool softNavigationHeuristicsExposeFPAndFCPEnabled() {
    return RuntimeEnabledFeatures::SoftNavigationHeuristicsExposeFPAndFCPEnabled();
  }
  bool sparseObjectPaintPropertiesEnabled() {
    return RuntimeEnabledFeatures::SparseObjectPaintPropertiesEnabled();
  }
  bool speculationRulesDocumentRulesEnabled() {
    return RuntimeEnabledFeatures::SpeculationRulesDocumentRulesEnabledByRuntimeFlag();
  }
  bool speculationRulesDocumentRulesSelectorMatchesEnabled() {
    return RuntimeEnabledFeatures::SpeculationRulesDocumentRulesSelectorMatchesEnabledByRuntimeFlag();
  }
  bool speculationRulesEagernessEnabled() {
    return RuntimeEnabledFeatures::SpeculationRulesEagernessEnabledByRuntimeFlag();
  }
  bool speculationRulesFetchFromHeaderEnabled() {
    return RuntimeEnabledFeatures::SpeculationRulesFetchFromHeaderEnabledByRuntimeFlag();
  }
  bool speculationRulesImplicitSourceEnabled() {
    return RuntimeEnabledFeatures::SpeculationRulesImplicitSourceEnabled();
  }
  bool speculationRulesNoVarySearchHintEnabled() {
    return RuntimeEnabledFeatures::SpeculationRulesNoVarySearchHintEnabledByRuntimeFlag();
  }
  bool speculationRulesNoVarySearchHintShippedByDefaultEnabled() {
    return RuntimeEnabledFeatures::SpeculationRulesNoVarySearchHintShippedByDefaultEnabled();
  }
  bool speculationRulesPointerDownHeuristicsEnabled() {
    return RuntimeEnabledFeatures::SpeculationRulesPointerDownHeuristicsEnabled();
  }
  bool speculationRulesPointerHoverHeuristicsEnabled() {
    return RuntimeEnabledFeatures::SpeculationRulesPointerHoverHeuristicsEnabled();
  }
  bool speculationRulesPrefetchFutureEnabled() {
    return RuntimeEnabledFeatures::SpeculationRulesPrefetchFutureEnabledByRuntimeFlag();
  }
  bool speculationRulesPrefetchWithSubresourcesEnabled() {
    return RuntimeEnabledFeatures::SpeculationRulesPrefetchWithSubresourcesEnabled();
  }
  bool speculationRulesRelativeToDocumentEnabled() {
    return RuntimeEnabledFeatures::SpeculationRulesRelativeToDocumentEnabledByRuntimeFlag();
  }
  bool spellCheckerReplaceRangeUseInsertTextEnabled() {
    return RuntimeEnabledFeatures::SpellCheckerReplaceRangeUseInsertTextEnabled();
  }
  bool srcsetMaxDensityEnabled() {
    return RuntimeEnabledFeatures::SrcsetMaxDensityEnabled();
  }
  bool stableBlinkFeaturesEnabled() {
    return RuntimeEnabledFeatures::StableBlinkFeaturesEnabled();
  }
  bool standardizedBrowserZoomEnabled() {
    return RuntimeEnabledFeatures::StandardizedBrowserZoomEnabled();
  }
  bool storageAccessAPIBeyondCookiesEnabled() {
    return RuntimeEnabledFeatures::StorageAccessAPIBeyondCookiesEnabledByRuntimeFlag();
  }
  bool storageBucketsEnabled() {
    return RuntimeEnabledFeatures::StorageBucketsEnabled();
  }
  bool storageBucketsDurabilityEnabled() {
    return RuntimeEnabledFeatures::StorageBucketsDurabilityEnabled();
  }
  bool storageBucketsLocksEnabled() {
    return RuntimeEnabledFeatures::StorageBucketsLocksEnabled();
  }
  bool strictMimeTypesForWorkersEnabled() {
    return RuntimeEnabledFeatures::StrictMimeTypesForWorkersEnabled();
  }
  bool stylableSelectEnabled() {
    return RuntimeEnabledFeatures::StylableSelectEnabled();
  }
  bool stylusHandwritingEnabled() {
    return RuntimeEnabledFeatures::StylusHandwritingEnabled();
  }
  bool svgCrossOriginAttributeEnabled() {
    return RuntimeEnabledFeatures::SvgCrossOriginAttributeEnabled();
  }
  bool svgNoPixelSnappingScaleAdjustmentEnabled() {
    return RuntimeEnabledFeatures::SvgNoPixelSnappingScaleAdjustmentEnabled();
  }
  bool synthesizedKeyboardEventsForAccessibilityActionsEnabled() {
    return RuntimeEnabledFeatures::SynthesizedKeyboardEventsForAccessibilityActionsEnabled();
  }
  bool systemWakeLockEnabled() {
    return RuntimeEnabledFeatures::SystemWakeLockEnabled();
  }
  bool testFeatureEnabled() {
    return RuntimeEnabledFeatures::TestFeatureEnabled();
  }
  bool testFeatureDependentEnabled() {
    return RuntimeEnabledFeatures::TestFeatureDependentEnabled();
  }
  bool testFeatureImpliedEnabled() {
    return RuntimeEnabledFeatures::TestFeatureImpliedEnabled();
  }
  bool textDecoratingBoxEnabled() {
    return RuntimeEnabledFeatures::TextDecoratingBoxEnabled();
  }
  bool textDetectorEnabled() {
    return RuntimeEnabledFeatures::TextDetectorEnabled();
  }
  bool textFragmentAPIEnabled() {
    return RuntimeEnabledFeatures::TextFragmentAPIEnabled();
  }
  bool textFragmentIdentifiersEnabled() {
    return RuntimeEnabledFeatures::TextFragmentIdentifiersEnabledByRuntimeFlag();
  }
  bool textFragmentTapOpensContextMenuEnabled() {
    return RuntimeEnabledFeatures::TextFragmentTapOpensContextMenuEnabled();
  }
  bool textMetricsBaselinesEnabled() {
    return RuntimeEnabledFeatures::TextMetricsBaselinesEnabled();
  }
  bool timelineScopeEnabled() {
    return RuntimeEnabledFeatures::TimelineScopeEnabled();
  }
  bool timerThrottlingForBackgroundTabsEnabled() {
    return RuntimeEnabledFeatures::TimerThrottlingForBackgroundTabsEnabled();
  }
  bool timeZoneChangeEventEnabled() {
    return RuntimeEnabledFeatures::TimeZoneChangeEventEnabled();
  }
  bool topicsAPIEnabled() {
    return RuntimeEnabledFeatures::TopicsAPIEnabledByRuntimeFlag();
  }
  bool topicsDocumentAPIEnabled() {
    return RuntimeEnabledFeatures::TopicsDocumentAPIEnabledByRuntimeFlag();
  }
  bool topLevelTpcdEnabled() {
    return RuntimeEnabledFeatures::TopLevelTpcdEnabledByRuntimeFlag();
  }
  bool touchDragAndContextMenuEnabled() {
    return RuntimeEnabledFeatures::TouchDragAndContextMenuEnabled();
  }
  bool touchDragOnShortPressEnabled() {
    return RuntimeEnabledFeatures::TouchDragOnShortPressEnabled();
  }
  bool touchEventFeatureDetectionEnabled() {
    return RuntimeEnabledFeatures::TouchEventFeatureDetectionEnabledByRuntimeFlag();
  }
  bool touchTextEditingRedesignEnabled() {
    return RuntimeEnabledFeatures::TouchTextEditingRedesignEnabled();
  }
  bool tpcdEnabled() {
    return RuntimeEnabledFeatures::TpcdEnabledByRuntimeFlag();
  }
  bool translateServiceEnabled() {
    return RuntimeEnabledFeatures::TranslateServiceEnabled();
  }
  bool trustedTypeBeforePolicyCreationEventEnabled() {
    return RuntimeEnabledFeatures::TrustedTypeBeforePolicyCreationEventEnabled();
  }
  bool trustedTypesFromLiteralEnabled() {
    return RuntimeEnabledFeatures::TrustedTypesFromLiteralEnabled();
  }
  bool trustedTypesUseCodeLikeEnabled() {
    return RuntimeEnabledFeatures::TrustedTypesUseCodeLikeEnabled();
  }
  bool unclosedFormControlIsInvalidEnabled() {
    return RuntimeEnabledFeatures::UnclosedFormControlIsInvalidEnabled();
  }
  bool unexposedTaskIdsEnabled() {
    return RuntimeEnabledFeatures::UnexposedTaskIdsEnabled();
  }
  bool unownedAnimationsSkipCSSEventsEnabled() {
    return RuntimeEnabledFeatures::UnownedAnimationsSkipCSSEventsEnabled();
  }
  bool unrestrictedMeasureUserAgentSpecificMemoryEnabled() {
    return RuntimeEnabledFeatures::UnrestrictedMeasureUserAgentSpecificMemoryEnabled();
  }
  bool unrestrictedSharedArrayBufferEnabled() {
    return RuntimeEnabledFeatures::UnrestrictedSharedArrayBufferEnabledByRuntimeFlag();
  }
  bool unrestrictedUsbEnabled() {
    return RuntimeEnabledFeatures::UnrestrictedUsbEnabled();
  }
  bool urlAttributeFixEnabled() {
    return RuntimeEnabledFeatures::URLAttributeFixEnabled();
  }
  bool urlPatternCompareComponentEnabled() {
    return RuntimeEnabledFeatures::URLPatternCompareComponentEnabled();
  }
  bool urlPatternHasRegExpGroupsEnabled() {
    return RuntimeEnabledFeatures::URLPatternHasRegExpGroupsEnabled();
  }
  bool urlPatternRegexpUnicodeSetsModeEnabled() {
    return RuntimeEnabledFeatures::URLPatternRegexpUnicodeSetsModeEnabled();
  }
  bool urlPatternWildcardMoreOftenEnabled() {
    return RuntimeEnabledFeatures::URLPatternWildcardMoreOftenEnabled();
  }
  bool urlSearchParamsHasAndDeleteMultipleArgsEnabled() {
    return RuntimeEnabledFeatures::URLSearchParamsHasAndDeleteMultipleArgsEnabled();
  }
  bool useBeginFramePresentationFeedbackEnabled() {
    return RuntimeEnabledFeatures::UseBeginFramePresentationFeedbackEnabled();
  }
  bool usedColorSchemeRootScrollbarsEnabled() {
    return RuntimeEnabledFeatures::UsedColorSchemeRootScrollbarsEnabled();
  }
  bool userActivationSameOriginVisibilityEnabled() {
    return RuntimeEnabledFeatures::UserActivationSameOriginVisibilityEnabled();
  }
  bool userValidUserInvalidEnabled() {
    return RuntimeEnabledFeatures::UserValidUserInvalidEnabled();
  }
  bool v8IdleTasksEnabled() {
    return RuntimeEnabledFeatures::V8IdleTasksEnabled();
  }
  bool videoAutoFullscreenEnabled() {
    return RuntimeEnabledFeatures::VideoAutoFullscreenEnabled();
  }
  bool videoFullscreenOrientationLockEnabled() {
    return RuntimeEnabledFeatures::VideoFullscreenOrientationLockEnabled();
  }
  bool videoPlaybackQualityEnabled() {
    return RuntimeEnabledFeatures::VideoPlaybackQualityEnabled();
  }
  bool videoRotateToFullscreenEnabled() {
    return RuntimeEnabledFeatures::VideoRotateToFullscreenEnabled();
  }
  bool videoTrackGeneratorEnabled() {
    return RuntimeEnabledFeatures::VideoTrackGeneratorEnabled();
  }
  bool videoTrackGeneratorInWindowEnabled() {
    return RuntimeEnabledFeatures::VideoTrackGeneratorInWindowEnabled();
  }
  bool videoTrackGeneratorInWorkerEnabled() {
    return RuntimeEnabledFeatures::VideoTrackGeneratorInWorkerEnabled();
  }
  bool viewportHeightClientHintHeaderEnabled() {
    return RuntimeEnabledFeatures::ViewportHeightClientHintHeaderEnabled();
  }
  bool viewportSegmentsEnabled() {
    return RuntimeEnabledFeatures::ViewportSegmentsEnabled();
  }
  bool viewTransitionOnNavigationEnabled() {
    return RuntimeEnabledFeatures::ViewTransitionOnNavigationEnabled();
  }
  bool viewTransitionTypesEnabled() {
    return RuntimeEnabledFeatures::ViewTransitionTypesEnabled();
  }
  bool visibilityCollapseColumnEnabled() {
    return RuntimeEnabledFeatures::VisibilityCollapseColumnEnabled();
  }
  bool wakeLockEnabled() {
    return RuntimeEnabledFeatures::WakeLockEnabled();
  }
  bool warnOnContentVisibilityRenderAccessEnabled() {
    return RuntimeEnabledFeatures::WarnOnContentVisibilityRenderAccessEnabled();
  }
  bool webAnimationsSVGEnabled() {
    return RuntimeEnabledFeatures::WebAnimationsSVGEnabled();
  }
  bool webAppDarkModeEnabled() {
    return RuntimeEnabledFeatures::WebAppDarkModeEnabledByRuntimeFlag();
  }
  bool webAppLaunchHandlerEnabled() {
    return RuntimeEnabledFeatures::WebAppLaunchHandlerEnabledByRuntimeFlag();
  }
  bool webAppLaunchQueueEnabled() {
    return RuntimeEnabledFeatures::WebAppLaunchQueueEnabledByRuntimeFlag();
  }
  bool webAppScopeExtensionsEnabled() {
    return RuntimeEnabledFeatures::WebAppScopeExtensionsEnabledByRuntimeFlag();
  }
  bool webAppsLockScreenEnabled() {
    return RuntimeEnabledFeatures::WebAppsLockScreenEnabled();
  }
  bool webAppTabStripEnabled() {
    return RuntimeEnabledFeatures::WebAppTabStripEnabledByRuntimeFlag();
  }
  bool webAppTabStripCustomizationsEnabled() {
    return RuntimeEnabledFeatures::WebAppTabStripCustomizationsEnabledByRuntimeFlag();
  }
  bool webAppTranslationsEnabled() {
    return RuntimeEnabledFeatures::WebAppTranslationsEnabled();
  }
  bool webAppUrlHandlingEnabled() {
    return RuntimeEnabledFeatures::WebAppUrlHandlingEnabledByRuntimeFlag();
  }
  bool webAssemblyJSPromiseIntegrationEnabled() {
    return RuntimeEnabledFeatures::WebAssemblyJSPromiseIntegrationEnabledByRuntimeFlag();
  }
  bool webAssemblyJSStringBuiltinsEnabled() {
    return RuntimeEnabledFeatures::WebAssemblyJSStringBuiltinsEnabledByRuntimeFlag();
  }
  bool webAuthEnabled() {
    return RuntimeEnabledFeatures::WebAuthEnabled();
  }
  bool webAuthAllowCreateInCrossOriginFrameEnabled() {
    return RuntimeEnabledFeatures::WebAuthAllowCreateInCrossOriginFrameEnabled();
  }
  bool webAuthAuthenticatorAttachmentEnabled() {
    return RuntimeEnabledFeatures::WebAuthAuthenticatorAttachmentEnabled();
  }
  bool webAuthenticationHintsEnabled() {
    return RuntimeEnabledFeatures::WebAuthenticationHintsEnabled();
  }
  bool webAuthenticationJSONSerializationEnabled() {
    return RuntimeEnabledFeatures::WebAuthenticationJSONSerializationEnabled();
  }
  bool webAuthenticationLargeBlobExtensionEnabled() {
    return RuntimeEnabledFeatures::WebAuthenticationLargeBlobExtensionEnabled();
  }
  bool webAuthenticationPRFEnabled() {
    return RuntimeEnabledFeatures::WebAuthenticationPRFEnabled();
  }
  bool webAuthenticationRemoteDesktopSupportEnabled() {
    return RuntimeEnabledFeatures::WebAuthenticationRemoteDesktopSupportEnabled();
  }
  bool webAuthenticationSupplementalPubKeysEnabled() {
    return RuntimeEnabledFeatures::WebAuthenticationSupplementalPubKeysEnabled();
  }
  bool webBluetoothEnabled() {
    return RuntimeEnabledFeatures::WebBluetoothEnabled();
  }
  bool webBluetoothGetDevicesEnabled() {
    return RuntimeEnabledFeatures::WebBluetoothGetDevicesEnabled();
  }
  bool webBluetoothScanningEnabled() {
    return RuntimeEnabledFeatures::WebBluetoothScanningEnabled();
  }
  bool webBluetoothWatchAdvertisementsEnabled() {
    return RuntimeEnabledFeatures::WebBluetoothWatchAdvertisementsEnabled();
  }
  bool webcodecsContentHintEnabled() {
    return RuntimeEnabledFeatures::WebCodecsContentHintEnabled();
  }
  bool webcodecsCopyToRGBEnabled() {
    return RuntimeEnabledFeatures::WebCodecsCopyToRGBEnabled();
  }
  bool webCryptoCurve25519Enabled() {
    return RuntimeEnabledFeatures::WebCryptoCurve25519Enabled();
  }
  bool webFontResizeLCPEnabled() {
    return RuntimeEnabledFeatures::WebFontResizeLCPEnabled();
  }
  bool webglDeveloperExtensionsEnabled() {
    return RuntimeEnabledFeatures::WebGLDeveloperExtensionsEnabled();
  }
  bool webglDraftExtensionsEnabled() {
    return RuntimeEnabledFeatures::WebGLDraftExtensionsEnabled();
  }
  bool webglDrawingBufferStorageEnabled() {
    return RuntimeEnabledFeatures::WebGLDrawingBufferStorageEnabled();
  }
  bool webglImageChromiumEnabled() {
    return RuntimeEnabledFeatures::WebGLImageChromiumEnabled();
  }
  bool webgpuEnabled() {
    return RuntimeEnabledFeatures::WebGPUEnabled();
  }
  bool webgpuDeveloperFeaturesEnabled() {
    return RuntimeEnabledFeatures::WebGPUDeveloperFeaturesEnabled();
  }
  bool webgpuExperimentalFeaturesEnabled() {
    return RuntimeEnabledFeatures::WebGPUExperimentalFeaturesEnabled();
  }
  bool webHIDEnabled() {
    return RuntimeEnabledFeatures::WebHIDEnabled();
  }
  bool webHIDOnServiceWorkersEnabled() {
    return RuntimeEnabledFeatures::WebHIDOnServiceWorkersEnabled();
  }
  bool webIdentityDigitalCredentialsEnabled() {
    return RuntimeEnabledFeatures::WebIdentityDigitalCredentialsEnabledByRuntimeFlag();
  }
  bool webIDLBigIntUsesToBigIntEnabled() {
    return RuntimeEnabledFeatures::WebIDLBigIntUsesToBigIntEnabled();
  }
  bool webNFCEnabled() {
    return RuntimeEnabledFeatures::WebNFCEnabled();
  }
  bool webOTPEnabled() {
    return RuntimeEnabledFeatures::WebOTPEnabled();
  }
  bool webOTPAssertionFeaturePolicyEnabled() {
    return RuntimeEnabledFeatures::WebOTPAssertionFeaturePolicyEnabled();
  }
  bool webPreferencesEnabled() {
    return RuntimeEnabledFeatures::WebPreferencesEnabled();
  }
  bool webPrintingEnabled() {
    return RuntimeEnabledFeatures::WebPrintingEnabled();
  }
  bool webSerialBluetoothEnabled() {
    return RuntimeEnabledFeatures::WebSerialBluetoothEnabled();
  }
  bool webShareEnabled() {
    return RuntimeEnabledFeatures::WebShareEnabled();
  }
  bool websocketStreamEnabled() {
    return RuntimeEnabledFeatures::WebSocketStreamEnabled();
  }
  bool webTransportCustomCertificatesEnabled() {
    return RuntimeEnabledFeatures::WebTransportCustomCertificatesEnabledByRuntimeFlag();
  }
  bool webUSBEnabled() {
    return RuntimeEnabledFeatures::WebUSBEnabled();
  }
  bool webUSBOnDedicatedWorkersEnabled() {
    return RuntimeEnabledFeatures::WebUSBOnDedicatedWorkersEnabled();
  }
  bool webUSBOnServiceWorkersEnabled() {
    return RuntimeEnabledFeatures::WebUSBOnServiceWorkersEnabled();
  }
  bool webViewXREquestedWithDeprecationEnabled() {
    return RuntimeEnabledFeatures::WebViewXRequestedWithDeprecationEnabledByRuntimeFlag();
  }
  bool webVTTRegionsEnabled() {
    return RuntimeEnabledFeatures::WebVTTRegionsEnabled();
  }
  bool webXREnabled() {
    return RuntimeEnabledFeatures::WebXREnabled();
  }
  bool webXREnabledFeaturesEnabled() {
    return RuntimeEnabledFeatures::WebXREnabledFeaturesEnabled();
  }
  bool webXRFrameRateEnabled() {
    return RuntimeEnabledFeatures::WebXRFrameRateEnabled();
  }
  bool webXRFrontFacingEnabled() {
    return RuntimeEnabledFeatures::WebXRFrontFacingEnabled();
  }
  bool webXRHandInputEnabled() {
    return RuntimeEnabledFeatures::WebXRHandInputEnabled();
  }
  bool webXRHitTestEntityTypesEnabled() {
    return RuntimeEnabledFeatures::WebXRHitTestEntityTypesEnabled();
  }
  bool webXRImageTrackingEnabled() {
    return RuntimeEnabledFeatures::WebXRImageTrackingEnabledByRuntimeFlag();
  }
  bool webXRLayersEnabled() {
    return RuntimeEnabledFeatures::WebXRLayersEnabled();
  }
  bool webXRPlaneDetectionEnabled() {
    return RuntimeEnabledFeatures::WebXRPlaneDetectionEnabledByRuntimeFlag();
  }
  bool webXRPoseMotionDataEnabled() {
    return RuntimeEnabledFeatures::WebXRPoseMotionDataEnabled();
  }
  bool wgiGamepadTriggerRumbleEnabled() {
    return RuntimeEnabledFeatures::WGIGamepadTriggerRumbleEnabled();
  }
  bool windowDefaultStatusEnabled() {
    return RuntimeEnabledFeatures::WindowDefaultStatusEnabled();
  }
  bool windowPlacementFullscreenOnScreensChangeEnabled() {
    return RuntimeEnabledFeatures::WindowPlacementFullscreenOnScreensChangeEnabled();
  }
  bool windowPlacementPermissionAliasEnabled() {
    return RuntimeEnabledFeatures::WindowPlacementPermissionAliasEnabled();
  }
  bool xmlParserMergeAdjacentCDataSectionsEnabled() {
    return RuntimeEnabledFeatures::XMLParserMergeAdjacentCDataSectionsEnabled();
  }
  bool xywhAndRectComputedValueEnabled() {
    return RuntimeEnabledFeatures::XYWHAndRectComputedValueEnabled();
  }
  bool zeroCopyTabCaptureEnabled() {
    return RuntimeEnabledFeatures::ZeroCopyTabCaptureEnabled();
  }
};

}  // namespace blink

#endif  // THIRD_PARTY_BLINK_RENDERER_CORE_TESTING_INTERNAL_RUNTIME_FLAGS_H_
