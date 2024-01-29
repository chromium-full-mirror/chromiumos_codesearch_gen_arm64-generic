// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/features_generated.cc.tmpl
// and input files:
//   ../../../../../../../home/chrome-bot/chrome_root/src/third_party/blink/renderer/platform/runtime_enabled_features.json5


#include "third_party/blink/public/common/features_generated.h"

namespace blink {
namespace features {

BASE_FEATURE(kAccessibilityOSLevelBoldText,
    "AccessibilityOSLevelBoldText",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kAddIdentityInCanMakePaymentEvent,
    "AddIdentityInCanMakePaymentEvent",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kAdInterestGroupAPI,
    "AdInterestGroupAPI",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kAlignContentForBlocks,
    "AlignContentForBlocks",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kAppTitle,
    "AppTitle",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kAsyncClipboardImplicitPermission,
    "AsyncClipboardImplicitPermission",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kAutoSizeLazyLoadedImages,
    "AutoSizeLazyLoadedImages",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kAvoidCaretVisibleSelectionAdjuster,
    "AvoidCaretVisibleSelectionAdjuster",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kBackdropInheritOriginating,
    "BackdropInheritOriginating",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kBackfaceVisibilityInterop,
    "BackfaceVisibilityInterop",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kBackForwardCacheSendNotRestoredReasons,
    "BackForwardCacheSendNotRestoredReasons",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kBdiElementDirInheritance,
    "BdiElementDirInheritance",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kBeforeunloadEventCancelByPreventDefault,
    "BeforeunloadEventCancelByPreventDefault",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kBlinkLifecycleScriptForbidden,
    "BlinkLifecycleScriptForbidden",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kBlockingFocusWithoutUserActivation,
    "BlockingFocusWithoutUserActivation",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kBlockRubyWrappingInlineRuby,
    "BlockRubyWrappingInlineRuby",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kBoundaryEventDispatchTracksNodeRemoval,
    "BoundaryEventDispatchTracksNodeRemoval",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kByobFetch,
    "ByobFetch",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCanonicalizeWhitespaceStrings,
    "CanonicalizeWhitespaceStrings",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCapabilityDelegationDisplayCaptureRequest,
    "CapabilityDelegationDisplayCaptureRequest",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kCapturedMouseEvents,
    "CapturedMouseEvents",
#if BUILDFLAG(IS_ANDROID)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_WIN)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_ASH)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_LACROS)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_MAC)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_LINUX)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if !BUILDFLAG(IS_ANDROID) && !BUILDFLAG(IS_WIN) && !BUILDFLAG(IS_CHROMEOS_ASH) && !BUILDFLAG(IS_CHROMEOS_LACROS) && !BUILDFLAG(IS_MAC) && !BUILDFLAG(IS_LINUX)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
);

BASE_FEATURE(kCapturedSurfaceControl,
    "CapturedSurfaceControl",
#if BUILDFLAG(IS_ANDROID)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_WIN)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_ASH)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_LACROS)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_MAC)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_LINUX)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if !BUILDFLAG(IS_ANDROID) && !BUILDFLAG(IS_WIN) && !BUILDFLAG(IS_CHROMEOS_ASH) && !BUILDFLAG(IS_CHROMEOS_LACROS) && !BUILDFLAG(IS_MAC) && !BUILDFLAG(IS_LINUX)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
);

BASE_FEATURE(kCaretPositionFromPoint,
    "CaretPositionFromPoint",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kCCTNewRFMPushBehavior,
    "CCTNewRFMPushBehavior",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCheckVisibilityExtraProperties,
    "CheckVisibilityExtraProperties",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kClipboardSupportedTypes,
    "ClipboardSupportedTypes",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kClipboardWellFormedHtmlSanitizationWrite,
    "ClipboardWellFormedHtmlSanitizationWrite",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kClipPathGeometryBox,
    "ClipPathGeometryBox",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kClipPathRejectEmptyPaths,
    "ClipPathRejectEmptyPaths",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kClipPathXYWHAndRect,
    "ClipPathXYWHAndRect",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCloseWatcher,
    "CloseWatcher",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kCompositeClipPathAnimation,
    "CompositeClipPathAnimation",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kCompositionForegroundMarkers,
    "CompositionForegroundMarkers",
#if BUILDFLAG(IS_ANDROID)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_WIN)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_ASH)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_LACROS)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_MAC)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_LINUX)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if !BUILDFLAG(IS_ANDROID) && !BUILDFLAG(IS_WIN) && !BUILDFLAG(IS_CHROMEOS_ASH) && !BUILDFLAG(IS_CHROMEOS_LACROS) && !BUILDFLAG(IS_MAC) && !BUILDFLAG(IS_LINUX)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
);

BASE_FEATURE(kComputePressure,
    "ComputePressure",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCounterStyleChangeShouleCollectInlines,
    "CounterStyleChangeShouleCollectInlines",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCrossFramePerformanceTimeline,
    "CrossFramePerformanceTimeline",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSAnchorPositioningCascadeFallback,
    "CSSAnchorPositioningCascadeFallback",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSAnimationDelayStartEnd,
    "CSSAnimationDelayStartEnd",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSBackgroundClipUnprefix,
    "CSSBackgroundClipUnprefix",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSCapFontUnits,
    "CSSCapFontUnits",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSContentVisibilityImpliesContainIntrinsicSizeAuto,
    "CSSContentVisibilityImpliesContainIntrinsicSizeAuto",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSCrossFade,
    "CSSCrossFade",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSDisplayAnimation,
    "CSSDisplayAnimation",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCssDisplayRuby,
    "CssDisplayRuby",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSDynamicRangeLimit,
    "CSSDynamicRangeLimit",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSExponentialFunctions,
    "CSSExponentialFunctions",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCssFieldSizing,
    "CssFieldSizing",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSFirstLetterNoNewLineAsPrecedingChar,
    "CSSFirstLetterNoNewLineAsPrecedingChar",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSLinearTimingFunction,
    "CSSLinearTimingFunction",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSMaskingInterop,
    "CSSMaskingInterop",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSMPCImprovements,
    "CSSMPCImprovements",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSNestingIdent,
    "CSSNestingIdent",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSNumericFactoryCompleteness,
    "CSSNumericFactoryCompleteness",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSOffsetPathBasicShapesCircleAndEllipse,
    "CSSOffsetPathBasicShapesCircleAndEllipse",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSOffsetPathBasicShapesRectanglesAndPolygon,
    "CSSOffsetPathBasicShapesRectanglesAndPolygon",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSOffsetPathCoordBox,
    "CSSOffsetPathCoordBox",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSOffsetPathRay,
    "CSSOffsetPathRay",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSOffsetPathRayContain,
    "CSSOffsetPathRayContain",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSOffsetPathUrl,
    "CSSOffsetPathUrl",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSOffsetPositionAnchor,
    "CSSOffsetPositionAnchor",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSOverflowMediaFeatures,
    "CSSOverflowMediaFeatures",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSParserIgnoreCharsetForURLs,
    "CSSParserIgnoreCharsetForURLs",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSPhraseLineBreak,
    "CSSPhraseLineBreak",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSProgressNotation,
    "CSSProgressNotation",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSRelativeColor,
    "CSSRelativeColor",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSResizeAuto,
    "CSSResizeAuto",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSScope,
    "CSSScope",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSScrollSnapEvents,
    "CSSScrollSnapEvents",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSScrollStart,
    "CSSScrollStart",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSScrollStateContainerQueries,
    "CSSScrollStateContainerQueries",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kCssSelectorFragmentAnchor,
    "CssSelectorFragmentAnchor",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSSignRelatedFunctions,
    "CSSSignRelatedFunctions",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSSnapChangedEvent,
    "CSSSnapChangedEvent",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSSnapChangingEvent,
    "CSSSnapChangingEvent",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSSnapContainerQueries,
    "CSSSnapContainerQueries",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSSpellingGrammarErrors,
    "CSSSpellingGrammarErrors",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSSteppedValueFunctions,
    "CSSSteppedValueFunctions",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSStickyContainerQueries,
    "CSSStickyContainerQueries",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSSupportsForImportRules,
    "CSSSupportsForImportRules",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSSystemAccentColor,
    "CSSSystemAccentColor",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSTextAutoSpace,
    "CSSTextAutoSpace",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSTextBoxTrim,
    "CSSTextBoxTrim",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSTextSpacing,
    "CSSTextSpacing",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSTextSpacingTrim,
    "CSSTextSpacingTrim",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSTextWrapBalanceByScore,
    "CSSTextWrapBalanceByScore",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSTextWrapPretty,
    "CSSTextWrapPretty",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSTransitionDiscrete,
    "CSSTransitionDiscrete",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSUnknownContainerQueriesNoSelection,
    "CSSUnknownContainerQueriesNoSelection",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSUpdateMediaFeature,
    "CSSUpdateMediaFeature",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSVariables2ImageValues,
    "CSSVariables2ImageValues",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSVariables2TransformValues,
    "CSSVariables2TransformValues",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSViewTimelineInsetShorthand,
    "CSSViewTimelineInsetShorthand",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kCSSViewTransitionClass,
    "CSSViewTransitionClass",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kCustomElementsGetName,
    "CustomElementsGetName",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kDataTransferClearStringItems,
    "DataTransferClearStringItems",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kDateInputInlineBlock,
    "DateInputInlineBlock",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kDeclarativeShadowDOMSerializable,
    "DeclarativeShadowDOMSerializable",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kDeprecatedTemplateShadowRoot,
    "DeprecatedTemplateShadowRoot",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kDeprecateUnloadOptOut,
    "DeprecateUnloadOptOut",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kDesktopPWAsAdditionalWindowingControls,
    "DesktopPWAsAdditionalWindowingControls",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kDesktopPWAsSubApps,
    "DesktopPWAsSubApps",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kDetailsElementToggleEvent,
    "DetailsElementToggleEvent",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kDetailsStyling,
    "DetailsStyling",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kDialogNewFocusBehavior,
    "DialogNewFocusBehavior",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kDirnameMoreInputTypes,
    "DirnameMoreInputTypes",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kDisableSelectAllForEmptyText,
    "DisableSelectAllForEmptyText",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kDispatchHiddenVisibilityTransitions,
    "DispatchHiddenVisibilityTransitions",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kDisplayContentsFocusable,
    "DisplayContentsFocusable",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kDocumentBaseURIFix,
    "DocumentBaseURIFix",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kDocumentOpenOriginAliasRemoval,
    "DocumentOpenOriginAliasRemoval",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kDocumentOpenSandboxInheritanceRemoval,
    "DocumentOpenSandboxInheritanceRemoval",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kDocumentPictureInPictureAPI,
    "DocumentPictureInPictureAPI",
#if BUILDFLAG(IS_ANDROID)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_WIN)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_ASH)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_LACROS)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_MAC)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_LINUX)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if !BUILDFLAG(IS_ANDROID) && !BUILDFLAG(IS_WIN) && !BUILDFLAG(IS_CHROMEOS_ASH) && !BUILDFLAG(IS_CHROMEOS_LACROS) && !BUILDFLAG(IS_MAC) && !BUILDFLAG(IS_LINUX)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
);

BASE_FEATURE(kDOMParserUsesHTMLFastPathParser,
    "DOMParserUsesHTMLFastPathParser",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kDOMPartsAPI,
    "DOMPartsAPI",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kDontFireDblclickOnDisabledFormControls,
    "DontFireDblclickOnDisabledFormControls",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kDynamicScrollCullRectExpansion,
    "DynamicScrollCullRectExpansion",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kEditContext,
    "EditContext",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kElementCapture,
    "ElementCapture",
#if BUILDFLAG(IS_ANDROID)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_WIN)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_ASH)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_LACROS)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_MAC)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_LINUX)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if !BUILDFLAG(IS_ANDROID) && !BUILDFLAG(IS_WIN) && !BUILDFLAG(IS_CHROMEOS_ASH) && !BUILDFLAG(IS_CHROMEOS_LACROS) && !BUILDFLAG(IS_MAC) && !BUILDFLAG(IS_LINUX)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
);

BASE_FEATURE(kElementGetHTML,
    "ElementGetHTML",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kElementGetInnerHTML,
    "ElementGetInnerHTML",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kEmptyClipboardRead,
    "EmptyClipboardRead",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kEnforceAnonymityExposure,
    "EnforceAnonymityExposure",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kEscapeLtGtInAttributes,
    "EscapeLtGtInAttributes",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kExcludeBrokenImageIconFromBeingLcpEligible,
    "ExcludeBrokenImageIconFromBeingLcpEligible",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kFastPositionIterator,
    "FastPositionIterator",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kFencedFramesAPIChanges,
    "FencedFramesAPIChanges",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kFencedFramesDefaultMode,
    "FencedFramesDefaultMode",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kFetchLaterAPI,
    "FetchLaterAPI",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kFileHandlingAPI,
    "FileHandlingAPI",
#if BUILDFLAG(IS_ANDROID)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_WIN)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_ASH)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_LACROS)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_MAC)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_LINUX)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if !BUILDFLAG(IS_ANDROID) && !BUILDFLAG(IS_WIN) && !BUILDFLAG(IS_CHROMEOS_ASH) && !BUILDFLAG(IS_CHROMEOS_LACROS) && !BUILDFLAG(IS_MAC) && !BUILDFLAG(IS_LINUX)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
);

BASE_FEATURE(kFileSystemAccessGetCloudIdentifiers,
    "FileSystemAccessGetCloudIdentifiers",
#if BUILDFLAG(IS_ANDROID)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_WIN)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_ASH)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_LACROS)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_MAC)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_LINUX)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if !BUILDFLAG(IS_ANDROID) && !BUILDFLAG(IS_WIN) && !BUILDFLAG(IS_CHROMEOS_ASH) && !BUILDFLAG(IS_CHROMEOS_LACROS) && !BUILDFLAG(IS_MAC) && !BUILDFLAG(IS_LINUX)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
);

BASE_FEATURE(kFileSystemAccessLockingScheme,
    "FileSystemAccessLockingScheme",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kFileSystemObserver,
    "FileSystemObserver",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kFledgeBiddingAndAuctionServerAPI,
    "FledgeBiddingAndAuctionServerAPI",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kFledgeClearOriginJoinedAdInterestGroups,
    "FledgeClearOriginJoinedAdInterestGroups",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kFledgeDirectFromSellerSignalsHeaderAdSlot,
    "FledgeDirectFromSellerSignalsHeaderAdSlot",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kFledgeNegativeTargeting,
    "FledgeNegativeTargeting",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kFledgeTrustedBiddingSignalsSlotSize,
    "FledgeTrustedBiddingSignalsSlotSize",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kFlushParserBeforeCreatingCustomElements,
    "FlushParserBeforeCreatingCustomElements",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kFocusStyleInvalidationOnPageActivation,
    "FocusStyleInvalidationOnPageActivation",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kFontAccess,
    "FontAccess",
#if BUILDFLAG(IS_ANDROID)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_WIN)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_ASH)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_LACROS)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_MAC)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_LINUX)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if !BUILDFLAG(IS_ANDROID) && !BUILDFLAG(IS_WIN) && !BUILDFLAG(IS_CHROMEOS_ASH) && !BUILDFLAG(IS_CHROMEOS_LACROS) && !BUILDFLAG(IS_MAC) && !BUILDFLAG(IS_LINUX)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
);

BASE_FEATURE(kFontationsFontBackend,
    "FontationsFontBackend",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kFontMatchingCTMigration,
    "FontMatchingCTMigration",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kFontPaletteAnimation,
    "FontPaletteAnimation",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kFormControlRestoreStateIfAutocompleteOff,
    "FormControlRestoreStateIfAutocompleteOff",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kFormControlsVerticalWritingModeDirectionSupport,
    "FormControlsVerticalWritingModeDirectionSupport",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kFormControlsVerticalWritingModeSupport,
    "FormControlsVerticalWritingModeSupport",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kFormControlsVerticalWritingModeTextSupport,
    "FormControlsVerticalWritingModeTextSupport",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kFormStateRestoreCallbackCallWithState,
    "FormStateRestoreCallbackCallWithState",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kFullscreenPopupWindows,
    "FullscreenPopupWindows",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kGamepadMultitouch,
    "GamepadMultitouch",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kGetAllScreensMedia,
    "GetAllScreensMedia",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kGetDisplayMediaRequiresUserActivation,
    "GetDisplayMediaRequiresUserActivation",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kGetNextSiblingPositionWhenLastChild,
    "GetNextSiblingPositionWhenLastChild",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kHangingWhitespaceDoesNotDependOnAlignment,
    "HangingWhitespaceDoesNotDependOnAlignment",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kHighlightInheritance,
    "HighlightInheritance",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kHitTestOpaqueness,
    "HitTestOpaqueness",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kHitTestTransparency,
    "HitTestTransparency",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kHTMLInvokeActionsV2,
    "HTMLInvokeActionsV2",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kHTMLInvokeTargetAttribute,
    "HTMLInvokeTargetAttribute",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kHTMLParserFastPathBulkInsertNotify,
    "HTMLParserFastPathBulkInsertNotify",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kHTMLParserYieldAndDelayOftenForTesting,
    "HTMLParserYieldAndDelayOftenForTesting",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kHTMLPopoverHint,
    "HTMLPopoverHint",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kHTMLSearchElement,
    "HTMLSearchElement",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kHTMLSelectElementShowPicker,
    "HTMLSelectElementShowPicker",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kHTMLUnsafeMethods,
    "HTMLUnsafeMethods",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kImportAttributesDisallowUnknownKeys,
    "ImportAttributesDisallowUnknownKeys",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kImprovedXMLErrors,
    "ImprovedXMLErrors",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kIncomingCallNotifications,
    "IncomingCallNotifications",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kInertDisplayTransition,
    "InertDisplayTransition",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kInheritUserModifyWithoutContenteditable,
    "InheritUserModifyWithoutContenteditable",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kInnerHTMLParserFastpathLogFailure,
    "InnerHTMLParserFastpathLogFailure",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kInsertLineBreakIfPhrasingContent,
    "InsertLineBreakIfPhrasingContent",
#if BUILDFLAG(IS_ANDROID)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_WIN)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_ASH)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_LACROS)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_MAC)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_LINUX)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if !BUILDFLAG(IS_ANDROID) && !BUILDFLAG(IS_WIN) && !BUILDFLAG(IS_CHROMEOS_ASH) && !BUILDFLAG(IS_CHROMEOS_LACROS) && !BUILDFLAG(IS_MAC) && !BUILDFLAG(IS_LINUX)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
);

BASE_FEATURE(kInteroperablePrivateAttribution,
    "InteroperablePrivateAttribution",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kInterruptComposedScrollbarDisappearance,
    "InterruptComposedScrollbarDisappearance",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kIntersectionObserverScrollMargin,
    "IntersectionObserverScrollMargin",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kIntersectionOptimization,
    "IntersectionOptimization",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kInvertedColors,
    "InvertedColors",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kInvisibleSVGAnimationThrottling,
    "InvisibleSVGAnimationThrottling",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kJavaScriptCompileHintsMagicRuntime,
    "JavaScriptCompileHintsMagicRuntime",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kKeyboardFocusableScrollers,
    "KeyboardFocusableScrollers",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kLayoutAlignForPositioned,
    "LayoutAlignForPositioned",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kLayoutFlexNewRowAlgorithmV3,
    "LayoutFlexNewRowAlgorithmV3",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kLayoutIgnoreMarginsForSticky,
    "LayoutIgnoreMarginsForSticky",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kLayoutNewContainingBlock,
    "LayoutNewContainingBlock",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kLayoutNewMeasureCache,
    "LayoutNewMeasureCache",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kLayoutNewMinMaxCache,
    "LayoutNewMinMaxCache",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kLayoutNGShapeCache,
    "LayoutNGShapeCache",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kLazyLoadScrollMargin,
    "LazyLoadScrollMargin",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kLCPMouseoverHeuristics,
    "LCPMouseoverHeuristics",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kLCPMultipleUpdatesPerElement,
    "LCPMultipleUpdatesPerElement",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kLockedMode,
    "LockedMode",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kLongAnimationFrameTiming,
    "LongAnimationFrameTiming",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kLongTaskFromLongAnimationFrame,
    "LongTaskFromLongAnimationFrame",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kMacFontsDeprecateFontTraitsWorkaround,
    "MacFontsDeprecateFontTraitsWorkaround",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kManagedConfiguration,
    "ManagedConfiguration",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kMaskingGraphemeClusters,
    "MaskingGraphemeClusters",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kMediaCapabilitiesDynamicRange,
    "MediaCapabilitiesDynamicRange",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kMediaCaptureVoiceIsolation,
    "MediaCaptureVoiceIsolation",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kMediaRecorderUseMediaVideoEncoder,
    "MediaRecorderUseMediaVideoEncoder",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kMediaSessionChapterInformation,
    "MediaSessionChapterInformation",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kMediaSessionEnterPictureInPicture,
    "MediaSessionEnterPictureInPicture",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kMessagePortCloseEvent,
    "MessagePortCloseEvent",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kEnableModelExecutionAPI,
    "EnableModelExecutionAPI",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kMonitorTypeSurfaces,
    "MonitorTypeSurfaces",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kMouseDragFromIframeOnCancelledMouseDown,
    "MouseDragFromIframeOnCancelledMouseDown",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kMouseDragOnCancelledMouseMove,
    "MouseDragOnCancelledMouseMove",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kMutationEvents,
    "MutationEvents",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kNavigateEventCommitBehavior,
    "NavigateEventCommitBehavior",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kNavigateEventSourceElement,
    "NavigateEventSourceElement",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kNavigationActivation,
    "NavigationActivation",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kNavigationId,
    "NavigationId",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kNetInfoConstantType,
    "NetInfoConstantType",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kNextSiblingPositionUseNextCandidate,
    "NextSiblingPositionUseNextCandidate",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kNonComposedEnterLeaveEvents,
    "NonComposedEnterLeaveEvents",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kNonStandardAppearanceValuesHighUsage,
    "NonStandardAppearanceValuesHighUsage",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kNonStandardAppearanceValueSliderVertical,
    "NonStandardAppearanceValueSliderVertical",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kNonStandardAppearanceValuesLowUsage,
    "NonStandardAppearanceValuesLowUsage",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kNoOffsetMappingForInconsistentText,
    "NoOffsetMappingForInconsistentText",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kObservableAPI,
    "ObservableAPI",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kOffsetMappingUnitVariable,
    "OffsetMappingUnitVariable",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kOnePassRasterInvalidation,
    "OnePassRasterInvalidation",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kOptionElementAlwaysUseLabel,
    "OptionElementAlwaysUseLabel",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kPageMarginBoxes,
    "PageMarginBoxes",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kPageRevealEvent,
    "PageRevealEvent",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kParakeet,
    "Parakeet",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kPasswordStrongLabel,
    "PasswordStrongLabel",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kPastingBlocksSVGUseNonLocalHrefs,
    "PastingBlocksSVGUseNonLocalHrefs",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kPaymentHandlerMinimalHeaderUX,
    "PaymentHandlerMinimalHeaderUX",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kPaymentRequestAllowOneActivationlessShow,
    "PaymentRequestAllowOneActivationlessShow",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kPerformanceMarkFeatureUsage,
    "PerformanceMarkFeatureUsage",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kPerformanceNavigateSystemEntropy,
    "PerformanceNavigateSystemEntropy",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kPointerCaptureLostOnRemovalDuringCapture,
    "PointerCaptureLostOnRemovalDuringCapture",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kPointerEventDeviceId,
    "PointerEventDeviceId",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kPositionOutsideTabSpanCheckSiblingNode,
    "PositionOutsideTabSpanCheckSiblingNode",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kPrePaintAncestorsOfMissedOOF,
    "PrePaintAncestorsOfMissedOOF",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kPrerender2,
    "Prerender2",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kPrettyPrintJSONDocument,
    "PrettyPrintJSONDocument",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kPreventReadingSystemAccentColor,
    "PreventReadingSystemAccentColor",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kPrivateAggregationAuctionReportBuyerDebugModeConfig,
    "PrivateAggregationAuctionReportBuyerDebugModeConfig",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kQuickIntensiveWakeUpThrottlingAfterLoading,
    "QuickIntensiveWakeUpThrottlingAfterLoading",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kReadableStreamTeeCloneForBranch2,
    "ReadableStreamTeeCloneForBranch2",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kReduceCookieIPCs,
    "ReduceCookieIPCs",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kReduceUserAgentAndroidVersionDeviceModel,
    "ReduceUserAgentAndroidVersionDeviceModel",
#if BUILDFLAG(IS_ANDROID)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_WIN)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_ASH)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_LACROS)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_MAC)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_LINUX)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if !BUILDFLAG(IS_ANDROID) && !BUILDFLAG(IS_WIN) && !BUILDFLAG(IS_CHROMEOS_ASH) && !BUILDFLAG(IS_CHROMEOS_LACROS) && !BUILDFLAG(IS_MAC) && !BUILDFLAG(IS_LINUX)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
);

BASE_FEATURE(kReduceUserAgentMinorVersion,
    "ReduceUserAgentMinorVersion",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kReduceUserAgentPlatformOsCpu,
    "ReduceUserAgentPlatformOsCpu",
#if BUILDFLAG(IS_ANDROID)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_WIN)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_ASH)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_LACROS)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_MAC)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_LINUX)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if !BUILDFLAG(IS_ANDROID) && !BUILDFLAG(IS_WIN) && !BUILDFLAG(IS_CHROMEOS_ASH) && !BUILDFLAG(IS_CHROMEOS_LACROS) && !BUILDFLAG(IS_MAC) && !BUILDFLAG(IS_LINUX)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
);

BASE_FEATURE(kReferenceBoxNoPixelSnapping,
    "ReferenceBoxNoPixelSnapping",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kRemotePlaybackBackend,
    "RemotePlaybackBackend",
#if BUILDFLAG(IS_ANDROID)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_WIN)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_ASH)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_LACROS)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_MAC)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_LINUX)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if !BUILDFLAG(IS_ANDROID) && !BUILDFLAG(IS_WIN) && !BUILDFLAG(IS_CHROMEOS_ASH) && !BUILDFLAG(IS_CHROMEOS_LACROS) && !BUILDFLAG(IS_MAC) && !BUILDFLAG(IS_LINUX)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
);

BASE_FEATURE(kRemoveDanglingMarkupInTarget,
    "RemoveDanglingMarkupInTarget",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kRemoveDataUrlInSvgUse,
    "RemoveDataUrlInSvgUse",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kRemoveZoomAdjustmentOfBoundingBox,
    "RemoveZoomAdjustmentOfBoundingBox",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kRewindFloats,
    "RewindFloats",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kRTCEncodedAudioFrameAbsCaptureTime,
    "RTCEncodedAudioFrameAbsCaptureTime",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kRTCEncodedFrameSetMetadata,
    "RTCEncodedFrameSetMetadata",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kRTCEncodedVideoFrameAdditionalMetadata,
    "RTCEncodedVideoFrameAdditionalMetadata",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kRTCRtpEncodingParametersCodec,
    "RTCRtpEncodingParametersCodec",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kRTCRtpHeaderExtensionControl,
    "RTCRtpHeaderExtensionControl",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kRTCSvcScalabilityMode,
    "RTCSvcScalabilityMode",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kRubyInlinify,
    "RubyInlinify",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kRubySimplePairing,
    "RubySimplePairing",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kRunMicrotaskBeforeXmlCustomElement,
    "RunMicrotaskBeforeXmlCustomElement",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kSanitizerAPI,
    "SanitizerAPI",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kSchedulerYield,
    "SchedulerYield",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kScrollbarColor,
    "ScrollbarColor",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kScrollbarWidth,
    "ScrollbarWidth",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kScrollEndEvents,
    "ScrollEndEvents",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kScrollTimeline,
    "ScrollTimeline",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kScrollTimelineCurrentTime,
    "ScrollTimelineCurrentTime",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kScrollTimelineOnCompositor,
    "ScrollTimelineOnCompositor",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kSecurePaymentConfirmationAllowOneActivationlessShow,
    "SecurePaymentConfirmationAllowOneActivationlessShow",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kSecurePaymentConfirmationExtensions,
    "SecurePaymentConfirmationExtensions",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kSelectHr,
    "SelectHr",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kSetSequentialFocusStartingPoint,
    "SetSequentialFocusStartingPoint",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kShadowRootAttachmentNewBehavior,
    "ShadowRootAttachmentNewBehavior",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kSkipTouchEventFilter,
    "SkipTouchEventFilter",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kSmartCard,
    "SmartCard",
#if BUILDFLAG(IS_ANDROID)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_WIN)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_ASH)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_LACROS)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_MAC)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_LINUX)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if !BUILDFLAG(IS_ANDROID) && !BUILDFLAG(IS_WIN) && !BUILDFLAG(IS_CHROMEOS_ASH) && !BUILDFLAG(IS_CHROMEOS_LACROS) && !BUILDFLAG(IS_MAC) && !BUILDFLAG(IS_LINUX)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
);

BASE_FEATURE(kSmilAutoSuspendOnLag,
    "SmilAutoSuspendOnLag",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kSnapBorderWidthsBeforeLayout,
    "SnapBorderWidthsBeforeLayout",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kSoftNavigationDetection,
    "SoftNavigationDetection",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kSoftNavigationHeuristics,
    "SoftNavigationHeuristics",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kSoftNavigationHeuristicsExposeFPAndFCP,
    "SoftNavigationHeuristicsExposeFPAndFCP",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kSparseObjectPaintProperties,
    "SparseObjectPaintProperties",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kSpeculationRulesDocumentRulesSelectorMatches,
    "SpeculationRulesDocumentRulesSelectorMatches",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kSpeculationRulesEagerness,
    "SpeculationRulesEagerness",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kSpeculationRulesImplicitSource,
    "SpeculationRulesImplicitSource",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kSpeculationRulesNoVarySearchHint,
    "SpeculationRulesNoVarySearchHint",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kSpeculationRulesNoVarySearchHintShippedByDefault,
    "SpeculationRulesNoVarySearchHintShippedByDefault",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kSpeculationRulesPointerDownHeuristics,
    "SpeculationRulesPointerDownHeuristics",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kSpeculationRulesPointerHoverHeuristics,
    "SpeculationRulesPointerHoverHeuristics",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kSpellCheckerReplaceRangeUseInsertText,
    "SpellCheckerReplaceRangeUseInsertText",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kStorageBuckets,
    "StorageBuckets",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kStorageBucketsDurability,
    "StorageBucketsDurability",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kStorageBucketsLocks,
    "StorageBucketsLocks",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kStylableSelect,
    "StylableSelect",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kSuggestionPickerDarkModeSupport,
    "SuggestionPickerDarkModeSupport",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kSvgCrossOriginAttribute,
    "SvgCrossOriginAttribute",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kSvgNoPixelSnappingScaleAdjustment,
    "SvgNoPixelSnappingScaleAdjustment",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kTextFragmentAnchor,
    "TextFragmentAnchor",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kTextMetricsBaselines,
    "TextMetricsBaselines",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kTimelineScope,
    "TimelineScope",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kUnownedAnimationsSkipCSSEvents,
    "UnownedAnimationsSkipCSSEvents",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kUnrestrictedUsb,
    "UnrestrictedUsb",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kURLAttributeFix,
    "URLAttributeFix",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kURLPatternRegexpUnicodeSetsMode,
    "URLPatternRegexpUnicodeSetsMode",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kURLPatternWildcardMoreOften,
    "URLPatternWildcardMoreOften",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kURLSearchParamsHasAndDeleteMultipleArgs,
    "URLSearchParamsHasAndDeleteMultipleArgs",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kUseBeginFramePresentationFeedback,
    "UseBeginFramePresentationFeedback",
#if BUILDFLAG(IS_ANDROID)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_WIN)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_ASH)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_LACROS)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_MAC)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_LINUX)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if !BUILDFLAG(IS_ANDROID) && !BUILDFLAG(IS_WIN) && !BUILDFLAG(IS_CHROMEOS_ASH) && !BUILDFLAG(IS_CHROMEOS_LACROS) && !BUILDFLAG(IS_MAC) && !BUILDFLAG(IS_LINUX)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
);

BASE_FEATURE(kUsedColorSchemeRootScrollbars,
    "UsedColorSchemeRootScrollbars",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kUserValidUserInvalid,
    "UserValidUserInvalid",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kViewportHeightClientHintHeader,
    "ViewportHeightClientHintHeader",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kViewTransitionOnNavigation,
    "ViewTransitionOnNavigation",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kViewTransitionTypes,
    "ViewTransitionTypes",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kWebAppEnableDarkMode,
    "WebAppEnableDarkMode",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kWebAppEnableLaunchHandler,
    "WebAppEnableLaunchHandler",
#if BUILDFLAG(IS_ANDROID)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_WIN)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_ASH)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_LACROS)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_MAC)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_LINUX)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
#if !BUILDFLAG(IS_ANDROID) && !BUILDFLAG(IS_WIN) && !BUILDFLAG(IS_CHROMEOS_ASH) && !BUILDFLAG(IS_CHROMEOS_LACROS) && !BUILDFLAG(IS_MAC) && !BUILDFLAG(IS_LINUX)
    base::FEATURE_ENABLED_BY_DEFAULT
#endif
);

BASE_FEATURE(kDesktopPWAsTabStrip,
    "DesktopPWAsTabStrip",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kDesktopPWAsTabStripCustomizations,
    "DesktopPWAsTabStripCustomizations",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kWebAppEnableTranslations,
    "WebAppEnableTranslations",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kWebAuthAllowCreateInCrossOriginFrame,
    "WebAuthAllowCreateInCrossOriginFrame",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kWebAuthenticationHints,
    "WebAuthenticationHints",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kWebAuthenticationJSONSerialization,
    "WebAuthenticationJSONSerialization",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kWebAuthenticationPRFExtension,
    "WebAuthenticationPRFExtension",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kWebAuthenticationSupplementalPubKeys,
    "WebAuthenticationSupplementalPubKeys",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kWebCodecsContentHint,
    "WebCodecsContentHint",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kWebCodecsCopyToRGB,
    "WebCodecsCopyToRGB",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kWebFontResizeLCP,
    "WebFontResizeLCP",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kWebGPUExperimentalFeatures,
    "WebGPUExperimentalFeatures",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kWebIDLBigIntUsesToBigInt,
    "WebIDLBigIntUsesToBigInt",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kWebPreferences,
    "WebPreferences",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kWebPrinting,
    "WebPrinting",
#if BUILDFLAG(IS_ANDROID)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_WIN)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_ASH)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_CHROMEOS_LACROS)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_MAC)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if BUILDFLAG(IS_LINUX)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
#if !BUILDFLAG(IS_ANDROID) && !BUILDFLAG(IS_WIN) && !BUILDFLAG(IS_CHROMEOS_ASH) && !BUILDFLAG(IS_CHROMEOS_LACROS) && !BUILDFLAG(IS_MAC) && !BUILDFLAG(IS_LINUX)
    base::FEATURE_DISABLED_BY_DEFAULT
#endif
);

BASE_FEATURE(kWebXREnabledFeatures,
    "WebXREnabledFeatures",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kWGIGamepadTriggerRumble,
    "WGIGamepadTriggerRumble",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kWindowDefaultStatus,
    "WindowDefaultStatus",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kWindowPlacementFullscreenOnScreensChange,
    "WindowPlacementFullscreenOnScreensChange",
    base::FEATURE_DISABLED_BY_DEFAULT
);

BASE_FEATURE(kWindowPlacementPermissionAlias,
    "WindowPlacementPermissionAlias",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kXMLParserMergeAdjacentCDataSections,
    "XMLParserMergeAdjacentCDataSections",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kXYWHAndRectComputedValue,
    "XYWHAndRectComputedValue",
    base::FEATURE_ENABLED_BY_DEFAULT
);

BASE_FEATURE(kZeroCopyTabCapture,
    "ZeroCopyTabCapture",
    base::FEATURE_DISABLED_BY_DEFAULT
);


}  // namespace features
}  // namespace blink
