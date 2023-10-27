// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/runtime_enabled_features_test_helpers.h.tmpl
// and input files:
//   ../../../../../../../home/chrome-bot/chrome_root/src/third_party/blink/renderer/platform/runtime_enabled_features.json5


#ifndef THIRD_PARTY_BLINK_RENDERER_PLATFORM_RUNTIME_ENABLED_FEATURES_TEST_HELPERS_H_
#define THIRD_PARTY_BLINK_RENDERER_PLATFORM_RUNTIME_ENABLED_FEATURES_TEST_HELPERS_H_

#include "base/check_op.h"
#include "third_party/blink/renderer/platform/runtime_enabled_features.h"

namespace blink {

// Don't use this class directly. Use Scoped*ForTest instead.
class RuntimeEnabledFeaturesTestHelpers {
 public:
  template <bool& data_member>
  class ScopedRuntimeEnabledFeature {
   public:
    ScopedRuntimeEnabledFeature(bool enabled)
        : enabled_(enabled), original_(data_member) { data_member = enabled; }
    ~ScopedRuntimeEnabledFeature() {
      CHECK_EQ(enabled_, data_member);
      data_member = original_;
    }
   private:
    bool enabled_;
    bool original_;
  };

  using ScopedAbortSignalAny = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_abort_signal_any_enabled_>;
  using ScopedAbortSignalComposition = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_abort_signal_composition_enabled_>;
  using ScopedAccelerated2dCanvas = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_accelerated_2d_canvas_enabled_>;
  using ScopedAcceleratedSmallCanvases = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_accelerated_small_canvases_enabled_>;
  using ScopedAccessibilityAriaVirtualContent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_accessibility_aria_virtual_content_enabled_>;
  using ScopedAccessibilityEagerAXTreeUpdate = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_accessibility_eager_ax_tree_update_enabled_>;
  using ScopedAccessibilityExposeDisplayNone = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_accessibility_expose_display_none_enabled_>;
  using ScopedAccessibilityExposeHTMLElement = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_accessibility_expose_html_element_enabled_>;
  using ScopedAccessibilityExposeIgnoredNodes = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_accessibility_expose_ignored_nodes_enabled_>;
  using ScopedAccessibilityObjectModel = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_accessibility_object_model_enabled_>;
  using ScopedAccessibilityPageZoom = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_accessibility_page_zoom_enabled_>;
  using ScopedAccessibilityUseAXPositionForDocumentMarkers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_accessibility_use_ax_position_for_document_markers_enabled_>;
  using ScopedAccordionPattern = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_accordion_pattern_enabled_>;
  using ScopedAddIdentityInCanMakePaymentEvent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_add_identity_in_can_make_payment_event_enabled_>;
  using ScopedAddressSpace = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_address_space_enabled_>;
  using ScopedAdInterestGroupAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_ad_interest_group_api_enabled_>;
  using ScopedAdTagging = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_ad_tagging_enabled_>;
  using ScopedAllowContentInitiatedDataUrlNavigations = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_allow_content_initiated_data_url_navigations_enabled_>;
  using ScopedAllowURNsInIframes = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_allow_ur_ns_in_iframes_enabled_>;
  using ScopedAndroidDownloadableFontsMatching = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_android_downloadable_fonts_matching_enabled_>;
  using ScopedAnimationWorklet = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_animation_worklet_enabled_>;
  using ScopedAnonymousIframe = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_anonymous_iframe_enabled_>;
  using ScopedAOMAriaRelationshipProperties = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_aom_aria_relationship_properties_enabled_>;
  using ScopedArrowKeysInVerticalWritingModes = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_arrow_keys_in_vertical_writing_modes_enabled_>;
  using ScopedAttributionReporting = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_attribution_reporting_enabled_>;
  using ScopedAttributionReportingCrossAppWeb = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_attribution_reporting_cross_app_web_enabled_>;
  using ScopedAttributionReportingInterface = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_attribution_reporting_interface_enabled_>;
  using ScopedAudioContextSetSinkId = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_audio_context_set_sink_id_enabled_>;
  using ScopedAudioOutputDevices = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_audio_output_devices_enabled_>;
  using ScopedAudioVideoTracks = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_audio_video_tracks_enabled_>;
  using ScopedAutoDarkMode = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_auto_dark_mode_enabled_>;
  using ScopedAutoDisableAccessibilityV2 = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_auto_disable_accessibility_v_2_enabled_>;
  using ScopedAutofillShadowDOM = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_autofill_shadow_dom_enabled_>;
  using ScopedAutomationControlled = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_automation_controlled_enabled_>;
  using ScopedAutoplayIgnoresWebAudio = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_autoplay_ignores_web_audio_enabled_>;
  using ScopedBackdropInheritOriginating = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_backdrop_inherit_originating_enabled_>;
  using ScopedBackfaceVisibilityInterop = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_backface_visibility_interop_enabled_>;
  using ScopedBackfaceVisibilityNewInheritance = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_backface_visibility_new_inheritance_enabled_>;
  using ScopedBackForwardCache = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_back_forward_cache_enabled_>;
  using ScopedBackForwardCacheExperimentHTTPHeader = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_back_forward_cache_experiment_http_header_enabled_>;
  using ScopedBackForwardCacheNotRestoredReasons = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_back_forward_cache_not_restored_reasons_enabled_>;
  using ScopedBackgroundFetch = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_background_fetch_enabled_>;
  using ScopedBarcodeDetector = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_barcode_detector_enabled_>;
  using ScopedBeforeMatchEvent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_before_match_event_enabled_>;
  using ScopedBeforeunloadEventCancelByPreventDefault = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_beforeunload_event_cancel_by_prevent_default_enabled_>;
  using ScopedBidiCaretAffinity = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_bidi_caret_affinity_enabled_>;
  using ScopedBlinkExtensionChromeOS = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_blink_extension_chrome_os_enabled_>;
  using ScopedBlinkExtensionChromeOSHID = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_blink_extension_chrome_oshid_enabled_>;
  using ScopedBlinkExtensionChromeOSTelemetry = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_blink_extension_chrome_os_telemetry_enabled_>;
  using ScopedBlinkExtensionChromeOSWindowManagement = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_blink_extension_chrome_os_window_management_enabled_>;
  using ScopedBlinkExtensionDiagnostics = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_blink_extension_diagnostics_enabled_>;
  using ScopedBlinkLifecycleScriptForbidden = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_blink_lifecycle_script_forbidden_enabled_>;
  using ScopedBlinkRuntimeCallStats = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_blink_runtime_call_stats_enabled_>;
  using ScopedBlockingFocusWithoutUserActivation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_blocking_focus_without_user_activation_enabled_>;
  using ScopedBrowserVerifiedUserActivationKeyboard = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_browser_verified_user_activation_keyboard_enabled_>;
  using ScopedBrowserVerifiedUserActivationMouse = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_browser_verified_user_activation_mouse_enabled_>;
  using ScopedByobFetch = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_byob_fetch_enabled_>;
  using ScopedCacheStorageCodeCacheHint = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_cache_storage_code_cache_hint_enabled_>;
  using ScopedCanonicalizeWhitespaceStrings = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_canonicalize_whitespace_strings_enabled_>;
  using ScopedCanvas2dCanvasFilter = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_canvas_2d_canvas_filter_enabled_>;
  using ScopedCanvas2dImageChromium = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_canvas_2d_image_chromium_enabled_>;
  using ScopedCanvas2dLayers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_canvas_2d_layers_enabled_>;
  using ScopedCanvas2dScrollPathIntoView = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_canvas_2d_scroll_path_into_view_enabled_>;
  using ScopedCanvasFloatingPoint = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_canvas_floating_point_enabled_>;
  using ScopedCanvasHDR = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_canvas_hdr_enabled_>;
  using ScopedCanvasImageSmoothing = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_canvas_image_smoothing_enabled_>;
  using ScopedCapabilityDelegationDisplayCaptureRequest = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_capability_delegation_display_capture_request_enabled_>;
  using ScopedCapabilityDelegationFullscreenRequest = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_capability_delegation_fullscreen_request_enabled_>;
  using ScopedCaptureController = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_capture_controller_enabled_>;
  using ScopedCapturedMouseEvents = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_captured_mouse_events_enabled_>;
  using ScopedCaptureHandle = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_capture_handle_enabled_>;
  using ScopedCCTNewRFMPushBehavior = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_cct_new_rfm_push_behavior_enabled_>;
  using ScopedcheckVisibility = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_check_visibility_enabled_>;
  using ScopedClickToCapturedPointer = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_click_to_captured_pointer_enabled_>;
  using ScopedClientHintsMetaEquivDelegateCH = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_client_hints_meta_equiv_delegate_ch_enabled_>;
  using ScopedClientHintsMetaHTTPEquivAcceptCH = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_client_hints_meta_http_equiv_accept_ch_enabled_>;
  using ScopedClientHintThirdPartyDelegation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_client_hint_third_party_delegation_enabled_>;
  using ScopedClipboardCustomFormats = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_clipboard_custom_formats_enabled_>;
  using ScopedClipboardSupportedTypes = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_clipboard_supported_types_enabled_>;
  using ScopedClipboardSvg = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_clipboard_svg_enabled_>;
  using ScopedClipboardUnsanitizedContent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_clipboard_unsanitized_content_enabled_>;
  using ScopedClipboardWellFormedHtmlSanitizationWrite = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_clipboard_well_formed_html_sanitization_write_enabled_>;
  using ScopedClipPathGeometryBox = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_clip_path_geometry_box_enabled_>;
  using ScopedClipPathRejectEmptyPaths = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_clip_path_reject_empty_paths_enabled_>;
  using ScopedClipPathXYWHAndRect = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_clip_path_xywh_and_rect_enabled_>;
  using ScopedCloseWatcher = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_close_watcher_enabled_>;
  using ScopedCoepReflection = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_coep_reflection_enabled_>;
  using ScopedCompositeBGColorAnimation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_composite_bg_color_animation_enabled_>;
  using ScopedCompositeBoxShadowAnimation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_composite_box_shadow_animation_enabled_>;
  using ScopedCompositeClipPathAnimation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_composite_clip_path_animation_enabled_>;
  using ScopedCompositedSelectionUpdate = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_composited_selection_update_enabled_>;
  using ScopedCompositionForegroundMarkers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_composition_foreground_markers_enabled_>;
  using ScopedCompositionUpdateBeforeBeforeInput = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_composition_update_before_before_input_enabled_>;
  using ScopedCompressionDictionaryTransport = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_compression_dictionary_transport_enabled_>;
  using ScopedCompressionDictionaryTransportBackend = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_compression_dictionary_transport_backend_enabled_>;
  using ScopedComputedAccessibilityInfo = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_computed_accessibility_info_enabled_>;
  using ScopedComputePressure = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_compute_pressure_enabled_>;
  using ScopedConfirmationOfAction = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_confirmation_of_action_enabled_>;
  using ScopedConsolidatedMovementXY = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_consolidated_movement_xy_enabled_>;
  using ScopedContactsManager = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_contacts_manager_enabled_>;
  using ScopedContactsManagerExtraProperties = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_contacts_manager_extra_properties_enabled_>;
  using ScopedContentIndex = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_content_index_enabled_>;
  using ScopedContentVisibilityAutoStateChangeEvent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_content_visibility_auto_state_change_event_enabled_>;
  using ScopedContextMenu = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_context_menu_enabled_>;
  using ScopedCookieDeprecationFacilitatedTesting = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_cookie_deprecation_facilitated_testing_enabled_>;
  using ScopedCooperativeScheduling = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_cooperative_scheduling_enabled_>;
  using ScopedCoopRestrictProperties = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_coop_restrict_properties_enabled_>;
  using ScopedCorsRFC1918 = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_cors_rfc_1918_enabled_>;
  using ScopedCrossFramePerformanceTimeline = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_cross_frame_performance_timeline_enabled_>;
  using ScopedCSSAnchorPositioning = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_anchor_positioning_enabled_>;
  using ScopedCSSAnimationComposition = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_animation_composition_enabled_>;
  using ScopedCSSAnimationDelayStartEnd = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_animation_delay_start_end_enabled_>;
  using ScopedCSSAtRuleCounterStyleImageSymbols = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_at_rule_counter_style_image_symbols_enabled_>;
  using ScopedCSSAtRuleCounterStyleSpeakAsDescriptor = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_at_rule_counter_style_speak_as_descriptor_enabled_>;
  using ScopedCSSAtSupportsAlwaysNonForgivingParsing = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_at_supports_always_non_forgiving_parsing_enabled_>;
  using ScopedCSSBackgroundClipUnprefix = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_background_clip_unprefix_enabled_>;
  using ScopedCSSBaselineSource = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_baseline_source_enabled_>;
  using ScopedCSSCalcSimplificationAndSerialization = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_calc_simplification_and_serialization_enabled_>;
  using ScopedCSSCapFontUnits = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_cap_font_units_enabled_>;
  using ScopedCSSCaseSensitiveSelector = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_case_sensitive_selector_enabled_>;
  using ScopedCSSColorContrast = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_color_contrast_enabled_>;
  using ScopedCSSColorTypedOM = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_color_typed_om_enabled_>;
  using ScopedCSSContainIntrinsicSizeAutoNone = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_contain_intrinsic_size_auto_none_enabled_>;
  using ScopedCSSContentVisibilityImpliesContainIntrinsicSizeAuto = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_content_visibility_implies_contain_intrinsic_size_auto_enabled_>;
  using ScopedCSSCustomPropertiesAblation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_custom_properties_ablation_enabled_>;
  using ScopedCSSDisplayAnimation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_display_animation_enabled_>;
  using ScopedCSSDynamicRangeLimit = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_dynamic_range_limit_enabled_>;
  using ScopedCSSEnumeratedCustomProperties = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_enumerated_custom_properties_enabled_>;
  using ScopedCSSExponentialFunctions = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_exponential_functions_enabled_>;
  using ScopedCssFieldSizing = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_field_sizing_enabled_>;
  using ScopedCSSFirstLetterNoNewLineAsPrecedingChar = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_first_letter_no_new_line_as_preceding_char_enabled_>;
  using ScopedCSSFocusVisible = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_focus_visible_enabled_>;
  using ScopedCSSFontFaceAutoVariableRange = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_font_face_auto_variable_range_enabled_>;
  using ScopedCSSFontSizeAdjust = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_font_size_adjust_enabled_>;
  using ScopedCSSGridTemplatePropertyInterpolation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_grid_template_property_interpolation_enabled_>;
  using ScopedCSSHexAlphaColor = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_hex_alpha_color_enabled_>;
  using ScopedCSSHyphenateLimitChars = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_hyphenate_limit_chars_enabled_>;
  using ScopedCSSImageSet = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_image_set_enabled_>;
  using ScopedCSSIndependentTransformProperties = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_independent_transform_properties_enabled_>;
  using ScopedCSSLayoutAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_layout_api_enabled_>;
  using ScopedCSSLinearTimingFunction = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_linear_timing_function_enabled_>;
  using ScopedCSSLogical = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_logical_enabled_>;
  using ScopedCSSLogicalOverflow = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_logical_overflow_enabled_>;
  using ScopedCSSMarkerNestedPseudoElement = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_marker_nested_pseudo_element_enabled_>;
  using ScopedCSSMaskingInterop = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_masking_interop_enabled_>;
  using ScopedCSSMixBlendModePlusLighter = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_mix_blend_mode_plus_lighter_enabled_>;
  using ScopedCSSNesting = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_nesting_enabled_>;
  using ScopedCSSNestingIdent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_nesting_ident_enabled_>;
  using ScopedCSSNumericFactoryCompleteness = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_numeric_factory_completeness_enabled_>;
  using ScopedCSSObjectViewBox = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_object_view_box_enabled_>;
  using ScopedCSSOffsetPathBasicShapesCircleAndEllipse = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_offset_path_basic_shapes_circle_and_ellipse_enabled_>;
  using ScopedCSSOffsetPathBasicShapesRectanglesAndPolygon = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_offset_path_basic_shapes_rectangles_and_polygon_enabled_>;
  using ScopedCSSOffsetPathCoordBox = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_offset_path_coord_box_enabled_>;
  using ScopedCSSOffsetPathRay = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_offset_path_ray_enabled_>;
  using ScopedCSSOffsetPathRayContain = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_offset_path_ray_contain_enabled_>;
  using ScopedCSSOffsetPathUrl = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_offset_path_url_enabled_>;
  using ScopedCSSOffsetPositionAnchor = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_offset_position_anchor_enabled_>;
  using ScopedCSSOverflowMediaFeatures = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_overflow_media_features_enabled_>;
  using ScopedCSSPaintAPIArguments = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_paint_api_arguments_enabled_>;
  using ScopedCSSPaintingForSpellingGrammarErrors = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_painting_for_spelling_grammar_errors_enabled_>;
  using ScopedCSSParserIgnoreCharsetForURLs = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_parser_ignore_charset_for_urls_enabled_>;
  using ScopedCSSPhraseLineBreak = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_phrase_line_break_enabled_>;
  using ScopedCSSPictureInPicture = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_picture_in_picture_enabled_>;
  using ScopedCSSPositionStickyStaticScrollPosition = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_position_sticky_static_scroll_position_enabled_>;
  using ScopedCSSPseudoDir = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_pseudo_dir_enabled_>;
  using ScopedCSSPseudoHasNonForgivingParsing = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_pseudo_has_non_forgiving_parsing_enabled_>;
  using ScopedCSSPseudoPlayingPaused = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_pseudo_playing_paused_enabled_>;
  using ScopedCSSRelativeColor = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_relative_color_enabled_>;
  using ScopedCSSScope = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_scope_enabled_>;
  using ScopedCSSScrollSnapEvents = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_scroll_snap_events_enabled_>;
  using ScopedCSSScrollStart = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_scroll_start_enabled_>;
  using ScopedCSSSelectorFragmentAnchor = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_selector_fragment_anchor_enabled_>;
  using ScopedCSSSelectorNthChildComplexSelector = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_selector_nth_child_complex_selector_enabled_>;
  using ScopedCSSSignRelatedFunctions = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_sign_related_functions_enabled_>;
  using ScopedCSSSnapContainerQueries = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_snap_container_queries_enabled_>;
  using ScopedCSSSpellingGrammarErrors = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_spelling_grammar_errors_enabled_>;
  using ScopedCSSStartingStyle = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_starting_style_enabled_>;
  using ScopedCSSSteppedValueFunctions = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_stepped_value_functions_enabled_>;
  using ScopedCSSStickyContainerQueries = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_sticky_container_queries_enabled_>;
  using ScopedCSSStyleQueries = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_style_queries_enabled_>;
  using ScopedCSSStyleQueriesBoolean = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_style_queries_boolean_enabled_>;
  using ScopedCSSSystemAccentColor = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_system_accent_color_enabled_>;
  using ScopedCSSTextAutoSpace = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_text_auto_space_enabled_>;
  using ScopedCSSTextBoxTrim = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_text_box_trim_enabled_>;
  using ScopedCSSTextSpacingTrim = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_text_spacing_trim_enabled_>;
  using ScopedCSSTextWrapBalanceByScore = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_text_wrap_balance_by_score_enabled_>;
  using ScopedCSSTextWrapPretty = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_text_wrap_pretty_enabled_>;
  using ScopedCSSToggles = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_toggles_enabled_>;
  using ScopedCSSTopLayerForTransitions = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_top_layer_for_transitions_enabled_>;
  using ScopedCSSTransformBoxAdditionalKeywords = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_transform_box_additional_keywords_enabled_>;
  using ScopedCSSTransitionDiscrete = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_transition_discrete_enabled_>;
  using ScopedCSSTranslatePreserveYPercent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_translate_preserve_y_percent_enabled_>;
  using ScopedCSSTreeScopedTimelines = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_tree_scoped_timelines_enabled_>;
  using ScopedCSSUpdateMediaFeature = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_update_media_feature_enabled_>;
  using ScopedCSSUserSelectContain = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_user_select_contain_enabled_>;
  using ScopedCSSVariables2ImageValues = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_variables_2_image_values_enabled_>;
  using ScopedCSSVariables2TransformValues = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_variables_2_transform_values_enabled_>;
  using ScopedCSSVideoDynamicRangeMediaQueries = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_video_dynamic_range_media_queries_enabled_>;
  using ScopedCSSViewportUnits4 = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_viewport_units_4_enabled_>;
  using ScopedCSSViewTimelineInsetShorthand = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_css_view_timeline_inset_shorthand_enabled_>;
  using ScopedCustomElementsGetName = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_custom_elements_get_name_enabled_>;
  using ScopedDatabase = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_database_enabled_>;
  using ScopedDateInputInlineBlock = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_date_input_inline_block_enabled_>;
  using ScopedDeflateRawCompressionFormat = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_deflate_raw_compression_format_enabled_>;
  using ScopedDelayOutOfViewportLazyImages = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_delay_out_of_viewport_lazy_images_enabled_>;
  using ScopedDelegatedInkTrails = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_delegated_ink_trails_enabled_>;
  using ScopedDeprecatedNonStreamingDeclarativeShadowDOM = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_deprecated_non_streaming_declarative_shadow_dom_enabled_>;
  using ScopedDesktopCaptureDisableLocalEchoControl = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_desktop_capture_disable_local_echo_control_enabled_>;
  using ScopedDesktopPWAsAdditionalWindowingControls = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_desktop_pw_as_additional_windowing_controls_enabled_>;
  using ScopedDesktopPWAsSubApps = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_desktop_pw_as_sub_apps_enabled_>;
  using ScopedDetailsElementToggleEvent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_details_element_toggle_event_enabled_>;
  using ScopedDetailsStyling = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_details_styling_enabled_>;
  using ScopedDeviceAttributes = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_device_attributes_enabled_>;
  using ScopedDeviceOrientationRequestPermission = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_device_orientation_request_permission_enabled_>;
  using ScopedDevicePosture = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_device_posture_enabled_>;
  using ScopedDialogNewFocusBehavior = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_dialog_new_focus_behavior_enabled_>;
  using ScopedDigitalGoods = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_digital_goods_enabled_>;
  using ScopedDigitalGoodsV2_1 = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_digital_goods_v_2_1_enabled_>;
  using ScopedDirectSockets = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_direct_sockets_enabled_>;
  using ScopedDisableDifferentOriginSubframeDialogSuppression = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_disable_different_origin_subframe_dialog_suppression_enabled_>;
  using ScopedDisableHardwareNoiseSuppression = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_disable_hardware_noise_suppression_enabled_>;
  using ScopedDisableSelectAllForEmptyText = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_disable_select_all_for_empty_text_enabled_>;
  using ScopedDisableThirdPartySessionStoragePartitioningAfterGeneralPartitioning = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_disable_third_party_session_storage_partitioning_after_general_partitioning_enabled_>;
  using ScopedDisableThirdPartyStoragePartitioning = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_disable_third_party_storage_partitioning_enabled_>;
  using ScopedDisplayCutoutAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_display_cutout_api_enabled_>;
  using ScopedDocumentBaseURIFix = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_document_base_uri_fix_enabled_>;
  using ScopedDocumentCookie = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_document_cookie_enabled_>;
  using ScopedDocumentDomain = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_document_domain_enabled_>;
  using ScopedDocumentOpenOriginAliasRemoval = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_document_open_origin_alias_removal_enabled_>;
  using ScopedDocumentOpenSandboxInheritanceRemoval = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_document_open_sandbox_inheritance_removal_enabled_>;
  using ScopedDocumentPictureInPictureAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_document_picture_in_picture_api_enabled_>;
  using ScopedDocumentPolicy = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_document_policy_enabled_>;
  using ScopedDocumentPolicyDocumentDomain = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_document_policy_document_domain_enabled_>;
  using ScopedDocumentPolicyNegotiation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_document_policy_negotiation_enabled_>;
  using ScopedDocumentPolicySyncXHR = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_document_policy_sync_xhr_enabled_>;
  using ScopedDocumentRenderBlocking = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_document_render_blocking_enabled_>;
  using ScopedDocumentWrite = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_document_write_enabled_>;
  using ScopedDOMPartsAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_dom_parts_api_enabled_>;
  using ScopedDOMPartsAPIActivePartTracking = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_dom_parts_api_active_part_tracking_enabled_>;
  using ScopedEarlyHintsPreloadForNavigationOptIn = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_early_hints_preload_for_navigation_opt_in_enabled_>;
  using ScopedEditContext = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_edit_context_enabled_>;
  using ScopedElementCapture = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_element_capture_enabled_>;
  using ScopedEmptyCaretInVertical = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_empty_caret_in_vertical_enabled_>;
  using ScopedEnforceAnonymityExposure = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_enforce_anonymity_exposure_enabled_>;
  using ScopedEscapeLtGtInAttributes = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_escape_lt_gt_in_attributes_enabled_>;
  using ScopedEventTimingInteractionCount = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_event_timing_interaction_count_enabled_>;
  using ScopedExcludeBrokenImageIconFromBeingLcpEligible = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_exclude_broken_image_icon_from_being_lcp_eligible_enabled_>;
  using ScopedExperimentalContentSecurityPolicyFeatures = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_experimental_content_security_policy_features_enabled_>;
  using ScopedExperimentalJSProfilerMarkers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_experimental_js_profiler_markers_enabled_>;
  using ScopedExperimentalPolicies = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_experimental_policies_enabled_>;
  using ScopedExposeRenderTimeNonTaoDelayedImage = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_expose_render_time_non_tao_delayed_image_enabled_>;
  using ScopedExtendedTextMetrics = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_extended_text_metrics_enabled_>;
  using ScopedExtraWebGLVideoTextureMetadata = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_extra_webgl_video_texture_metadata_enabled_>;
  using ScopedEyeDropperAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_eye_dropper_api_enabled_>;
  using ScopedFaceDetector = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_face_detector_enabled_>;
  using ScopedFakeNoAllocDirectCallForTesting = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fake_no_alloc_direct_call_for_testing_enabled_>;
  using ScopedFastComparePositions = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fast_compare_positions_enabled_>;
  using ScopedFastPositionIterator = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fast_position_iterator_enabled_>;
  using ScopedFedCm = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fed_cm_enabled_>;
  using ScopedFedCmAuthz = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fed_cm_authz_enabled_>;
  using ScopedFedCmAutoSelectedFlag = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fed_cm_auto_selected_flag_enabled_>;
  using ScopedFedCmError = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fed_cm_error_enabled_>;
  using ScopedFedCmHostedDomain = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fed_cm_hosted_domain_enabled_>;
  using ScopedFedCmIdPRegistration = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fed_cm_id_p_registration_enabled_>;
  using ScopedFedCmIdpSigninStatus = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fed_cm_idp_signin_status_enabled_>;
  using ScopedFedCmIdpSignout = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fed_cm_idp_signout_enabled_>;
  using ScopedFedCmMultipleIdentityProviders = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fed_cm_multiple_identity_providers_enabled_>;
  using ScopedFedCmSelectiveDisclosure = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fed_cm_selective_disclosure_enabled_>;
  using ScopedFencedFrames = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fenced_frames_enabled_>;
  using ScopedFencedFramesAPIChanges = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fenced_frames_api_changes_enabled_>;
  using ScopedFencedFramesDefaultMode = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fenced_frames_default_mode_enabled_>;
  using ScopedFetchLaterAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fetch_later_api_enabled_>;
  using ScopedFetchUploadStreaming = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fetch_upload_streaming_enabled_>;
  using ScopedFileHandling = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_file_handling_enabled_>;
  using ScopedFileHandlingIcons = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_file_handling_icons_enabled_>;
  using ScopedFileSystem = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_file_system_enabled_>;
  using ScopedFileSystemAccess = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_file_system_access_enabled_>;
  using ScopedFileSystemAccessAPIExperimental = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_file_system_access_api_experimental_enabled_>;
  using ScopedFileSystemAccessGetCloudIdentifiers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_file_system_access_get_cloud_identifiers_enabled_>;
  using ScopedFileSystemAccessLocal = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_file_system_access_local_enabled_>;
  using ScopedFileSystemAccessLockingScheme = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_file_system_access_locking_scheme_enabled_>;
  using ScopedFileSystemAccessOriginPrivate = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_file_system_access_origin_private_enabled_>;
  using ScopedFileSystemObserver = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_file_system_observer_enabled_>;
  using ScopedFirstRectForRangeVertical = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_first_rect_for_range_vertical_enabled_>;
  using ScopedFixedElementsDontOverscroll = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fixed_elements_dont_overscroll_enabled_>;
  using ScopedFledge = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fledge_enabled_>;
  using ScopedFledgeBiddingAndAuctionServerAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fledge_bidding_and_auction_server_api_enabled_>;
  using ScopedFledgeClearOriginJoinedAdInterestGroups = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fledge_clear_origin_joined_ad_interest_groups_enabled_>;
  using ScopedFledgeDirectFromSellerSignalsHeaderAdSlot = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fledge_direct_from_seller_signals_header_ad_slot_enabled_>;
  using ScopedFledgeNegativeTargeting = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fledge_negative_targeting_enabled_>;
  using ScopedFluentOverlayScrollbars = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fluent_overlay_scrollbars_enabled_>;
  using ScopedFluentScrollbars = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fluent_scrollbars_enabled_>;
  using ScopedFlushParserBeforeCreatingCustomElements = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_flush_parser_before_creating_custom_elements_enabled_>;
  using ScopedFocusgroup = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_focusgroup_enabled_>;
  using ScopedFocuslessSpatialNavigation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_focusless_spatial_navigation_enabled_>;
  using ScopedFontAccess = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_font_access_enabled_>;
  using ScopedFontationsFontBackend = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fontations_font_backend_enabled_>;
  using ScopedFontPaletteAnimation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_font_palette_animation_enabled_>;
  using ScopedFontSrcLocalMatching = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_font_src_local_matching_enabled_>;
  using ScopedFontVariantPosition = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_font_variant_position_enabled_>;
  using ScopedForcedColors = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_forced_colors_enabled_>;
  using ScopedForcedColorsPreserveParentColor = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_forced_colors_preserve_parent_color_enabled_>;
  using ScopedForceEagerMeasureMemory = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_force_eager_measure_memory_enabled_>;
  using ScopedForceReduceMotion = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_force_reduce_motion_enabled_>;
  using ScopedForceTallerSelectPopup = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_force_taller_select_popup_enabled_>;
  using ScopedFormattedText = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_formatted_text_enabled_>;
  using ScopedFormControlRestoreStateIfAutocompleteOff = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_form_control_restore_state_if_autocomplete_off_enabled_>;
  using ScopedFormControlsVerticalWritingModeDirectionSupport = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_form_controls_vertical_writing_mode_direction_support_enabled_>;
  using ScopedFormControlsVerticalWritingModeSupport = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_form_controls_vertical_writing_mode_support_enabled_>;
  using ScopedFormControlsVerticalWritingModeTextSupport = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_form_controls_vertical_writing_mode_text_support_enabled_>;
  using ScopedFormRelAttribute = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_form_rel_attribute_enabled_>;
  using ScopedFormStateRestoreCallbackCallWithState = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_form_state_restore_callback_call_with_state_enabled_>;
  using ScopedFractionalScrollOffsets = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fractional_scroll_offsets_enabled_>;
  using ScopedFreezeFramesOnVisibility = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_freeze_frames_on_visibility_enabled_>;
  using ScopedFullscreenPopupWindows = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_fullscreen_popup_windows_enabled_>;
  using ScopedGamepadButtonAxisEvents = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_gamepad_button_axis_events_enabled_>;
  using ScopedGamepadMultitouch = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_gamepad_multitouch_enabled_>;
  using ScopedGetAllScreensMedia = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_get_all_screens_media_enabled_>;
  using ScopedGetComputedStyleOutOfFlowInsetsFix = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_get_computed_style_out_of_flow_insets_fix_enabled_>;
  using ScopedGetDisplayMedia = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_get_display_media_enabled_>;
  using ScopedGetDisplayMediaRequiresUserActivation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_get_display_media_requires_user_activation_enabled_>;
  using ScopedGroupEffect = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_group_effect_enabled_>;
  using ScopedHandwritingRecognition = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_handwriting_recognition_enabled_>;
  using ScopedHangingWhitespaceDoesNotDependOnAlignment = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_hanging_whitespace_does_not_depend_on_alignment_enabled_>;
  using ScopedHasUAVisualTransition = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_has_ua_visual_transition_enabled_>;
  using ScopedHighlightAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_highlight_api_enabled_>;
  using ScopedHighlightInheritance = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_highlight_inheritance_enabled_>;
  using ScopedHighlightOverlayPainting = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_highlight_overlay_painting_enabled_>;
  using ScopedHighlightPointerEvents = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_highlight_pointer_events_enabled_>;
  using ScopedHitTestOpaqueness = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_hit_test_opaqueness_enabled_>;
  using ScopedHitTestTransparency = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_hit_test_transparency_enabled_>;
  using ScopedHrefTranslate = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_href_translate_enabled_>;
  using ScopedHTMLInvokeTargetAttribute = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_html_invoke_target_attribute_enabled_>;
  using ScopedHTMLParserYieldAndDelayOftenForTesting = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_html_parser_yield_and_delay_often_for_testing_enabled_>;
  using ScopedHTMLPopoverAttribute = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_html_popover_attribute_enabled_>;
  using ScopedHTMLPopoverHint = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_html_popover_hint_enabled_>;
  using ScopedHTMLSearchElement = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_html_search_element_enabled_>;
  using ScopedHTMLSelectElementShowPicker = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_html_select_element_show_picker_enabled_>;
  using ScopedHTMLSelectListElement = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_html_select_list_element_enabled_>;
  using ScopedHTMLUnsafeMethods = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_html_unsafe_methods_enabled_>;
  using ScopedIdleDetection = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_idle_detection_enabled_>;
  using ScopedImplicitRootScroller = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_implicit_root_scroller_enabled_>;
  using ScopedImportAttributesDisallowUnknownKeys = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_import_attributes_disallow_unknown_keys_enabled_>;
  using ScopedIncomingCallNotifications = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_incoming_call_notifications_enabled_>;
  using ScopedInertAttribute = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_inert_attribute_enabled_>;
  using ScopedInertDisplayTransition = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_inert_display_transition_enabled_>;
  using ScopedInfiniteCullRect = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_infinite_cull_rect_enabled_>;
  using ScopedInheritUserModifyWithoutContenteditable = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_inherit_user_modify_without_contenteditable_enabled_>;
  using ScopedInnerHTMLParserFastpath = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_inner_html_parser_fastpath_enabled_>;
  using ScopedInnerHTMLParserFastpathLogFailure = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_inner_html_parser_fastpath_log_failure_enabled_>;
  using ScopedInputMultipleFieldsUI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_input_multiple_fields_ui_enabled_>;
  using ScopedInsertLineBreakIfPhrasingContent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_insert_line_break_if_phrasing_content_enabled_>;
  using ScopedInstalledApp = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_installed_app_enabled_>;
  using ScopedInteroperablePrivateAttribution = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_interoperable_private_attribution_enabled_>;
  using ScopedInterruptComposedScrollbarDisappearance = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_interrupt_composed_scrollbar_disappearance_enabled_>;
  using ScopedIntersectionObserverIgnoreFilters = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_intersection_observer_ignore_filters_enabled_>;
  using ScopedIntersectionObserverScrollMargin = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_intersection_observer_scroll_margin_enabled_>;
  using ScopedIntersectionOptimization = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_intersection_optimization_enabled_>;
  using ScopedInvertedColors = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_inverted_colors_enabled_>;
  using ScopedInvisibleSVGAnimationThrottling = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_invisible_svg_animation_throttling_enabled_>;
  using ScopedJavaScriptCompileHintsMagicRuntime = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_java_script_compile_hints_magic_runtime_enabled_>;
  using ScopedKeyboardAccessibleTooltip = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_keyboard_accessible_tooltip_enabled_>;
  using ScopedKeyboardFocusableScrollers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_keyboard_focusable_scrollers_enabled_>;
  using ScopedLangAttributeAwareFormControlUI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_lang_attribute_aware_form_control_ui_enabled_>;
  using ScopedLayoutFlexNewRowAlgorithmV3 = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_layout_flex_new_row_algorithm_v_3_enabled_>;
  using ScopedLayoutIgnoreMarginsForSticky = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_layout_ignore_margins_for_sticky_enabled_>;
  using ScopedLayoutNewOverflowLogic = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_layout_new_overflow_logic_enabled_>;
  using ScopedLayoutNewSnapLogic = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_layout_new_snap_logic_enabled_>;
  using ScopedLayoutNewStickyLogic = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_layout_new_sticky_logic_enabled_>;
  using ScopedLayoutNGNoCopyBack = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_layout_ng_no_copy_back_enabled_>;
  using ScopedLayoutNGShapeCache = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_layout_ng_shape_cache_enabled_>;
  using ScopedLayoutNGSubgrid = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_layout_ng_subgrid_enabled_>;
  using ScopedLazyFrameLoading = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_lazy_frame_loading_enabled_>;
  using ScopedLazyInitializeMediaControls = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_lazy_initialize_media_controls_enabled_>;
  using ScopedLCPAnimatedImagesWebExposed = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_lcp_animated_images_web_exposed_enabled_>;
  using ScopedLCPMouseoverHeuristics = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_lcp_mouseover_heuristics_enabled_>;
  using ScopedLCPMultipleUpdatesPerElement = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_lcp_multiple_updates_per_element_enabled_>;
  using ScopedLegacyWindowsDWriteFontFallback = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_legacy_windows_d_write_font_fallback_enabled_>;
  using ScopedLoadInputImageWithoutObject = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_load_input_image_without_object_enabled_>;
  using ScopedLongAnimationFrameMonitoring = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_long_animation_frame_monitoring_enabled_>;
  using ScopedLongAnimationFrameTiming = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_long_animation_frame_timing_enabled_>;
  using ScopedLongAnimationFrameUKM = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_long_animation_frame_ukm_enabled_>;
  using ScopedLongTaskFromLongAnimationFrame = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_long_task_from_long_animation_frame_enabled_>;
  using ScopedMachineLearningCommon = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_machine_learning_common_enabled_>;
  using ScopedMachineLearningModelLoader = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_machine_learning_model_loader_enabled_>;
  using ScopedMachineLearningNeuralNetwork = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_machine_learning_neural_network_enabled_>;
  using ScopedManagedConfiguration = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_managed_configuration_enabled_>;
  using ScopedMeasureMemory = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_measure_memory_enabled_>;
  using ScopedMediaCapabilitiesDynamicRange = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_media_capabilities_dynamic_range_enabled_>;
  using ScopedMediaCapabilitiesEncodingInfo = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_media_capabilities_encoding_info_enabled_>;
  using ScopedMediaCapabilitiesSpatialAudio = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_media_capabilities_spatial_audio_enabled_>;
  using ScopedMediaCapture = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_media_capture_enabled_>;
  using ScopedMediaCaptureBackgroundBlur = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_media_capture_background_blur_enabled_>;
  using ScopedMediaCaptureCameraControls = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_media_capture_camera_controls_enabled_>;
  using ScopedMediaCaptureConfigurationChange = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_media_capture_configuration_change_enabled_>;
  using ScopedMediaCastOverlayButton = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_media_cast_overlay_button_enabled_>;
  using ScopedMediaControlsExpandGesture = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_media_controls_expand_gesture_enabled_>;
  using ScopedMediaControlsOverlayPlayButton = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_media_controls_overlay_play_button_enabled_>;
  using ScopedMediaElementVolumeGreaterThanOne = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_media_element_volume_greater_than_one_enabled_>;
  using ScopedMediaEngagementBypassAutoplayPolicies = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_media_engagement_bypass_autoplay_policies_enabled_>;
  using ScopedMediaLatencyHint = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_media_latency_hint_enabled_>;
  using ScopedMediaQueryNavigationControls = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_media_query_navigation_controls_enabled_>;
  using ScopedMediaRecorderUseMediaVideoEncoder = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_media_recorder_use_media_video_encoder_enabled_>;
  using ScopedMediaSession = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_media_session_enabled_>;
  using ScopedMediaSessionEnterPictureInPicture = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_media_session_enter_picture_in_picture_enabled_>;
  using ScopedMediaSessionSlides = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_media_session_slides_enabled_>;
  using ScopedMediaSourceExperimental = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_media_source_experimental_enabled_>;
  using ScopedMediaSourceExtensionsForWebCodecs = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_media_source_extensions_for_webcodecs_enabled_>;
  using ScopedMediaSourceNewAbortAndDuration = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_media_source_new_abort_and_duration_enabled_>;
  using ScopedMediaStreamTrackTransfer = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_media_stream_track_transfer_enabled_>;
  using ScopedMiddleClickAutoscroll = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_middle_click_autoscroll_enabled_>;
  using ScopedMobileLayoutTheme = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_mobile_layout_theme_enabled_>;
  using ScopedMojoJS = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_mojo_js_enabled_>;
  using ScopedMojoJSTest = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_mojo_js_test_enabled_>;
  using ScopedMonitorTypeSurfaces = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_monitor_type_surfaces_enabled_>;
  using ScopedMutationEvents = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_mutation_events_enabled_>;
  using ScopedNavigateEventCancelableTraversals = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_navigate_event_cancelable_traversals_enabled_>;
  using ScopedNavigateEventCommitBehavior = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_navigate_event_commit_behavior_enabled_>;
  using ScopedNavigateEventSourceElement = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_navigate_event_source_element_enabled_>;
  using ScopedNavigationId = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_navigation_id_enabled_>;
  using ScopedNavigatorContentUtils = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_navigator_content_utils_enabled_>;
  using ScopedNetInfoConstantType = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_net_info_constant_type_enabled_>;
  using ScopedNetInfoDownlinkMax = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_net_info_downlink_max_enabled_>;
  using ScopedNoIdleEncodingForWebTests = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_no_idle_encoding_for_web_tests_enabled_>;
  using ScopedNonComposedEnterLeaveEvents = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_non_composed_enter_leave_events_enabled_>;
  using ScopedNonInheritedWebkitBoxDirection = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_non_inherited_webkit_box_direction_enabled_>;
  using ScopedNonStandardAppearanceValuesHighUsage = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_non_standard_appearance_values_high_usage_enabled_>;
  using ScopedNonStandardAppearanceValueSliderVertical = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_non_standard_appearance_value_slider_vertical_enabled_>;
  using ScopedNonStandardAppearanceValuesLowUsage = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_non_standard_appearance_values_low_usage_enabled_>;
  using ScopedNotificationConstructor = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_notification_constructor_enabled_>;
  using ScopedNotificationContentImage = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_notification_content_image_enabled_>;
  using ScopedNotifications = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_notifications_enabled_>;
  using ScopedNotificationTriggers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_notification_triggers_enabled_>;
  using ScopedNoVarySearchPrefetch = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_no_vary_search_prefetch_enabled_>;
  using ScopedObservableAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_observable_api_enabled_>;
  using ScopedOffMainThreadCSSPaint = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_off_main_thread_css_paint_enabled_>;
  using ScopedOffscreenCanvasCommit = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_offscreen_canvas_commit_enabled_>;
  using ScopedOffsetParentNewSpecBehavior = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_offset_parent_new_spec_behavior_enabled_>;
  using ScopedOnDeviceChange = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_on_device_change_enabled_>;
  using ScopedOptimizedNodeCloneOrder = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_optimized_node_clone_order_enabled_>;
  using ScopedOptionElementAlwaysUseLabel = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_option_element_always_use_label_enabled_>;
  using ScopedOrientationEvent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_orientation_event_enabled_>;
  using ScopedOriginIsolationHeader = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_origin_isolation_header_enabled_>;
  using ScopedOriginPolicy = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_origin_policy_enabled_>;
  using ScopedOriginTrialsSampleAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_origin_trials_sample_api_enabled_>;
  using ScopedOriginTrialsSampleAPIBrowserReadWrite = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_origin_trials_sample_api_browser_read_write_enabled_>;
  using ScopedOriginTrialsSampleAPIDependent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_origin_trials_sample_api_dependent_enabled_>;
  using ScopedOriginTrialsSampleAPIDeprecation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_origin_trials_sample_api_deprecation_enabled_>;
  using ScopedOriginTrialsSampleAPIExpiryGracePeriod = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_origin_trials_sample_api_expiry_grace_period_enabled_>;
  using ScopedOriginTrialsSampleAPIExpiryGracePeriodThirdParty = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_origin_trials_sample_api_expiry_grace_period_third_party_enabled_>;
  using ScopedOriginTrialsSampleAPIImplied = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_origin_trials_sample_api_implied_enabled_>;
  using ScopedOriginTrialsSampleAPIInvalidOS = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_origin_trials_sample_api_invalid_os_enabled_>;
  using ScopedOriginTrialsSampleAPINavigation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_origin_trials_sample_api_navigation_enabled_>;
  using ScopedOriginTrialsSampleAPIPersistentExpiryGracePeriod = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_origin_trials_sample_api_persistent_expiry_grace_period_enabled_>;
  using ScopedOriginTrialsSampleAPIPersistentFeature = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_origin_trials_sample_api_persistent_feature_enabled_>;
  using ScopedOriginTrialsSampleAPIPersistentInvalidOS = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_origin_trials_sample_api_persistent_invalid_os_enabled_>;
  using ScopedOriginTrialsSampleAPIPersistentThirdPartyDeprecationFeature = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_origin_trials_sample_api_persistent_third_party_deprecation_feature_enabled_>;
  using ScopedOriginTrialsSampleAPIThirdParty = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_origin_trials_sample_api_third_party_enabled_>;
  using ScopedOverflowOverlayAliasesAuto = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_overflow_overlay_aliases_auto_enabled_>;
  using ScopedOverscrollCustomization = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_overscroll_customization_enabled_>;
  using ScopedPageFreezeOptIn = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_page_freeze_opt_in_enabled_>;
  using ScopedPageFreezeOptOut = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_page_freeze_opt_out_enabled_>;
  using ScopedPagePopup = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_page_popup_enabled_>;
  using ScopedPageRevealEvent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_page_reveal_event_enabled_>;
  using ScopedPaintFlexGridSortedByOrder = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_paint_flex_grid_sorted_by_order_enabled_>;
  using ScopedPaintUnderInvalidationChecking = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_paint_under_invalidation_checking_enabled_>;
  using ScopedParakeet = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_parakeet_enabled_>;
  using ScopedPartitionedCookies = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_partitioned_cookies_enabled_>;
  using ScopedPasswordReveal = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_password_reveal_enabled_>;
  using ScopedPasswordStrongLabel = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_password_strong_label_enabled_>;
  using ScopedPastingBlocksSVGUseNonLocalHrefs = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_pasting_blocks_svg_use_non_local_hrefs_enabled_>;
  using ScopedPaymentApp = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_payment_app_enabled_>;
  using ScopedPaymentHandlerMinimalHeaderUX = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_payment_handler_minimal_header_ux_enabled_>;
  using ScopedPaymentInstruments = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_payment_instruments_enabled_>;
  using ScopedPaymentMethodChangeEvent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_payment_method_change_event_enabled_>;
  using ScopedPaymentRequest = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_payment_request_enabled_>;
  using ScopedPaymentRequestAllowOneActivationlessShow = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_payment_request_allow_one_activationless_show_enabled_>;
  using ScopedPaymentRequestMerchantValidationEvent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_payment_request_merchant_validation_event_enabled_>;
  using ScopedPendingBeaconAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_pending_beacon_api_enabled_>;
  using ScopedPercentBasedScrolling = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_percent_based_scrolling_enabled_>;
  using ScopedPerformanceManagerInstrumentation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_performance_manager_instrumentation_enabled_>;
  using ScopedPerformanceNavigateSystemEntropy = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_performance_navigate_system_entropy_enabled_>;
  using ScopedPeriodicBackgroundSync = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_periodic_background_sync_enabled_>;
  using ScopedPerMethodCanMakePaymentQuota = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_per_method_can_make_payment_quota_enabled_>;
  using ScopedPermissionElement = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_permission_element_enabled_>;
  using ScopedPermissions = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_permissions_enabled_>;
  using ScopedPermissionsPolicyReporting = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_permissions_policy_reporting_enabled_>;
  using ScopedPermissionsRequestRevoke = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_permissions_request_revoke_enabled_>;
  using ScopedPNaCl = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_p_na_cl_enabled_>;
  using ScopedPointerEventDeviceId = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_pointer_event_device_id_enabled_>;
  using ScopedPopoverDialogDontThrow = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_popover_dialog_dont_throw_enabled_>;
  using ScopedPortals = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_portals_enabled_>;
  using ScopedPositionOutsideTabSpanCheckSiblingNode = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_position_outside_tab_span_check_sibling_node_enabled_>;
  using ScopedPreciseMemoryInfo = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_precise_memory_info_enabled_>;
  using ScopedPreferNonCompositedScrolling = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_prefer_non_composited_scrolling_enabled_>;
  using ScopedPrefersReducedData = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_prefers_reduced_data_enabled_>;
  using ScopedPrefersReducedTransparency = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_prefers_reduced_transparency_enabled_>;
  using ScopedPrefixedVideoFullscreen = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_prefixed_video_fullscreen_enabled_>;
  using ScopedPrePaintAncestorsOfMissedOOF = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_pre_paint_ancestors_of_missed_oof_enabled_>;
  using ScopedPrerender2 = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_prerender_2_enabled_>;
  using ScopedPresentation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_presentation_enabled_>;
  using ScopedPrettyPrintJSONDocument = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_pretty_print_js_on_document_enabled_>;
  using ScopedPrivacySandboxAdsAPIs = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_privacy_sandbox_ads_api_s_enabled_>;
  using ScopedPrivateNetworkAccessNonSecureContextsAllowed = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_private_network_access_non_secure_contexts_allowed_enabled_>;
  using ScopedPrivateNetworkAccessPermissionPrompt = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_private_network_access_permission_prompt_enabled_>;
  using ScopedPrivateStateTokens = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_private_state_tokens_enabled_>;
  using ScopedPrivateStateTokensAlwaysAllowIssuance = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_private_state_tokens_always_allow_issuance_enabled_>;
  using ScopedPushMessaging = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_push_messaging_enabled_>;
  using ScopedPushMessagingSubscriptionChange = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_push_messaging_subscription_change_enabled_>;
  using ScopedQuickIntensiveWakeUpThrottlingAfterLoading = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_quick_intensive_wake_up_throttling_after_loading_enabled_>;
  using ScopedQuotaChange = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_quota_change_enabled_>;
  using ScopedReadableStreamTeeCloneForBranch2 = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_readable_stream_tee_clone_for_branch_2_enabled_>;
  using ScopedReduceAcceptLanguage = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_reduce_accept_language_enabled_>;
  using ScopedReduceCookieIPCs = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_reduce_cookie_ip_cs_enabled_>;
  using ScopedReduceUserAgentAndroidVersionDeviceModel = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_reduce_user_agent_android_version_device_model_enabled_>;
  using ScopedReduceUserAgentMinorVersion = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_reduce_user_agent_minor_version_enabled_>;
  using ScopedReduceUserAgentPlatformOsCpu = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_reduce_user_agent_platform_os_cpu_enabled_>;
  using ScopedRegionCapture = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_region_capture_enabled_>;
  using ScopedRemotePlayback = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_remote_playback_enabled_>;
  using ScopedRemotePlaybackBackend = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_remote_playback_backend_enabled_>;
  using ScopedRemoveDanglingMarkupInTarget = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_remove_dangling_markup_in_target_enabled_>;
  using ScopedRemoveDataUrlInSvgUse = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_remove_data_url_in_svg_use_enabled_>;
  using ScopedRemoveMobileViewportDoubleTap = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_remove_mobile_viewport_double_tap_enabled_>;
  using ScopedRenderBlockingStatus = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_render_blocking_status_enabled_>;
  using ScopedRenderPriorityAttribute = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_render_priority_attribute_enabled_>;
  using ScopedResourceHintsLeastRestrictiveCSP = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_resource_hints_least_restrictive_csp_enabled_>;
  using ScopedResourceTimingContentType = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_resource_timing_content_type_enabled_>;
  using ScopedResourceTimingInterimResponseTimes = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_resource_timing_interim_response_times_enabled_>;
  using ScopedResourceTimingResponseStatus = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_resource_timing_response_status_enabled_>;
  using ScopedResourceTimingUseCORSForBodySizes = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_resource_timing_use_cors_for_body_sizes_enabled_>;
  using ScopedRestrictGamepadAccess = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_restrict_gamepad_access_enabled_>;
  using ScopedRtcAudioJitterBufferMaxPackets = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_rtc_audio_jitter_buffer_max_packets_enabled_>;
  using ScopedRTCEncodedAudioFrameAbsCaptureTime = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_rtc_encoded_audio_frame_abs_capture_time_enabled_>;
  using ScopedRTCEncodedFrameSetMetadata = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_rtc_encoded_frame_set_metadata_enabled_>;
  using ScopedRTCEncodedVideoFrameAdditionalMetadata = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_rtc_encoded_video_frame_additional_metadata_enabled_>;
  using ScopedRTCLegacyCallbackBasedGetStats = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_rtc_legacy_callback_based_get_stats_enabled_>;
  using ScopedRTCRtpEncodingParametersCodec = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_rtc_rtp_encoding_parameters_codec_enabled_>;
  using ScopedRTCRtpHeaderExtensionControl = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_rtc_rtp_header_extension_control_enabled_>;
  using ScopedRTCStatsRelativePacketArrivalDelay = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_rtc_stats_relative_packet_arrival_delay_enabled_>;
  using ScopedRTCSvcScalabilityMode = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_rtc_svc_scalability_mode_enabled_>;
  using ScopedSanitizerAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_sanitizer_api_enabled_>;
  using ScopedSaveAsWithDeclarativeShadowDOM = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_save_as_with_declarative_shadow_dom_enabled_>;
  using ScopedSchedulerYield = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_scheduler_yield_enabled_>;
  using ScopedScopedCustomElementRegistry = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_scoped_custom_element_registry_enabled_>;
  using ScopedScriptedSpeechRecognition = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_scripted_speech_recognition_enabled_>;
  using ScopedScriptedSpeechSynthesis = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_scripted_speech_synthesis_enabled_>;
  using ScopedScriptElementSupports = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_script_element_supports_enabled_>;
  using ScopedScriptingMediaFeature = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_scripting_media_feature_enabled_>;
  using ScopedScrollbarColor = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_scrollbar_color_enabled_>;
  using ScopedScrollbarWidth = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_scrollbar_width_enabled_>;
  using ScopedScrollEndEvents = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_scroll_end_events_enabled_>;
  using ScopedScrollTimeline = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_scroll_timeline_enabled_>;
  using ScopedScrollTimelineCurrentTime = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_scroll_timeline_current_time_enabled_>;
  using ScopedScrollTimelineOnCompositor = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_scroll_timeline_on_compositor_enabled_>;
  using ScopedScrollTopLeftInterop = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_scroll_top_left_interop_enabled_>;
  using ScopedSecurePaymentConfirmation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_secure_payment_confirmation_enabled_>;
  using ScopedSecurePaymentConfirmationAllowOneActivationlessShow = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_secure_payment_confirmation_allow_one_activationless_show_enabled_>;
  using ScopedSecurePaymentConfirmationDebug = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_secure_payment_confirmation_debug_enabled_>;
  using ScopedSecurePaymentConfirmationExtensions = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_secure_payment_confirmation_extensions_enabled_>;
  using ScopedSecurePaymentConfirmationOptOut = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_secure_payment_confirmation_opt_out_enabled_>;
  using ScopedSelectHr = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_select_hr_enabled_>;
  using ScopedSendBeaconThrowForBlobWithNonSimpleType = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_send_beacon_throw_for_blob_with_non_simple_type_enabled_>;
  using ScopedSendMouseEventsDisabledFormControls = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_send_mouse_events_disabled_form_controls_enabled_>;
  using ScopedSensorExtraClasses = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_sensor_extra_classes_enabled_>;
  using ScopedSerial = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_serial_enabled_>;
  using ScopedSerializeViewTransitionStateInSPA = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_serialize_view_transition_state_in_spa_enabled_>;
  using ScopedServiceWorkerBypassFetchHandler = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_service_worker_bypass_fetch_handler_enabled_>;
  using ScopedServiceWorkerClientLifecycleState = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_service_worker_client_lifecycle_state_enabled_>;
  using ScopedServiceWorkerRaceNetworkRequest = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_service_worker_race_network_request_enabled_>;
  using ScopedServiceWorkerStaticRouter = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_service_worker_static_router_enabled_>;
  using ScopedSetSequentialFocusStartingPoint = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_set_sequential_focus_starting_point_enabled_>;
  using ScopedSharedArrayBuffer = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_shared_array_buffer_enabled_>;
  using ScopedSharedArrayBufferOnDesktop = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_shared_array_buffer_on_desktop_enabled_>;
  using ScopedSharedArrayBufferUnrestrictedAccessAllowed = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_shared_array_buffer_unrestricted_access_allowed_enabled_>;
  using ScopedSharedAutofill = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_shared_autofill_enabled_>;
  using ScopedSharedStorageAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_shared_storage_api_enabled_>;
  using ScopedSharedStorageAPIM118 = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_shared_storage_api_m_118_enabled_>;
  using ScopedSharedWorker = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_shared_worker_enabled_>;
  using ScopedSignatureBasedIntegrity = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_signature_based_integrity_enabled_>;
  using ScopedSimplifiedClearPropertyTreeChange = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_simplified_clear_property_tree_change_enabled_>;
  using ScopedSiteInitiatedMirroring = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_site_initiated_mirroring_enabled_>;
  using ScopedSkipAd = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_skip_ad_enabled_>;
  using ScopedSkipShadowHostWhenHoveringForTooltip = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_skip_shadow_host_when_hovering_for_tooltip_enabled_>;
  using ScopedSkipTouchEventFilter = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_skip_touch_event_filter_enabled_>;
  using ScopedSmartCard = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_smart_card_enabled_>;
  using ScopedSmartZoom = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_smart_zoom_enabled_>;
  using ScopedSmilAutoSuspendOnLag = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_smil_auto_suspend_on_lag_enabled_>;
  using ScopedSnapBorderWidthsBeforeLayout = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_snap_border_widths_before_layout_enabled_>;
  using ScopedSoftNavigationHeuristics = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_soft_navigation_heuristics_enabled_>;
  using ScopedSoftNavigationHeuristicsExposeFPAndFCP = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_soft_navigation_heuristics_expose_fp_and_fcp_enabled_>;
  using ScopedSolidColorLayers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_solid_color_layers_enabled_>;
  using ScopedSparseObjectPaintProperties = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_sparse_object_paint_properties_enabled_>;
  using ScopedSpeculationRules = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_speculation_rules_enabled_>;
  using ScopedSpeculationRulesDocumentRules = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_speculation_rules_document_rules_enabled_>;
  using ScopedSpeculationRulesDocumentRulesSelectorMatches = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_speculation_rules_document_rules_selector_matches_enabled_>;
  using ScopedSpeculationRulesEagerness = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_speculation_rules_eagerness_enabled_>;
  using ScopedSpeculationRulesFetchFromHeader = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_speculation_rules_fetch_from_header_enabled_>;
  using ScopedSpeculationRulesNoVarySearchHint = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_speculation_rules_no_vary_search_hint_enabled_>;
  using ScopedSpeculationRulesPointerDownHeuristics = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_speculation_rules_pointer_down_heuristics_enabled_>;
  using ScopedSpeculationRulesPointerHoverHeuristics = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_speculation_rules_pointer_hover_heuristics_enabled_>;
  using ScopedSpeculationRulesPrefetchFuture = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_speculation_rules_prefetch_future_enabled_>;
  using ScopedSpeculationRulesPrefetchProxy = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_speculation_rules_prefetch_proxy_enabled_>;
  using ScopedSpeculationRulesPrefetchWithSubresources = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_speculation_rules_prefetch_with_subresources_enabled_>;
  using ScopedSpeculationRulesRelativeToDocument = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_speculation_rules_relative_to_document_enabled_>;
  using ScopedSrcsetMaxDensity = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_srcset_max_density_enabled_>;
  using ScopedStableBlinkFeatures = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_stable_blink_features_enabled_>;
  using ScopedStorageAccessAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_storage_access_api_enabled_>;
  using ScopedStorageAccessAPIForOriginExtension = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_storage_access_api_for_origin_extension_enabled_>;
  using ScopedStorageBuckets = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_storage_buckets_enabled_>;
  using ScopedStorageBucketsDurability = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_storage_buckets_durability_enabled_>;
  using ScopedStorageBucketsLocks = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_storage_buckets_locks_enabled_>;
  using ScopedStrictMimeTypesForWorkers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_strict_mime_types_for_workers_enabled_>;
  using ScopedStylusHandwriting = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_stylus_handwriting_enabled_>;
  using ScopedSuggestionPickerDarkModeSupport = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_suggestion_picker_dark_mode_support_enabled_>;
  using ScopedSvgCrossOriginAttribute = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_svg_cross_origin_attribute_enabled_>;
  using ScopedSvgNoPixelSnappingScaleAdjustment = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_svg_no_pixel_snapping_scale_adjustment_enabled_>;
  using ScopedSvgRasterOptimizations = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_svg_raster_optimizations_enabled_>;
  using ScopedSvgTextFixHittestAfterScale = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_svg_text_fix_hittest_after_scale_enabled_>;
  using ScopedSvgTextSkipZeroLengthItems = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_svg_text_skip_zero_length_items_enabled_>;
  using ScopedSynthesizedKeyboardEventsForAccessibilityActions = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_synthesized_keyboard_events_for_accessibility_actions_enabled_>;
  using ScopedSystemWakeLock = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_system_wake_lock_enabled_>;
  using ScopedTestFeature = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_test_feature_enabled_>;
  using ScopedTestFeatureDependent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_test_feature_dependent_enabled_>;
  using ScopedTestFeatureImplied = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_test_feature_implied_enabled_>;
  using ScopedTextDecoratingBox = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_text_decorating_box_enabled_>;
  using ScopedTextDetector = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_text_detector_enabled_>;
  using ScopedTextFragmentAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_text_fragment_api_enabled_>;
  using ScopedTextFragmentIdentifiers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_text_fragment_identifiers_enabled_>;
  using ScopedTextFragmentTapOpensContextMenu = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_text_fragment_tap_opens_context_menu_enabled_>;
  using ScopedTextMetricsBaselines = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_text_metrics_baselines_enabled_>;
  using ScopedTimelineScope = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_timeline_scope_enabled_>;
  using ScopedTimerThrottlingForBackgroundTabs = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_timer_throttling_for_background_tabs_enabled_>;
  using ScopedTimeZoneChangeEvent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_time_zone_change_event_enabled_>;
  using ScopedTopicsAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_topics_api_enabled_>;
  using ScopedTopicsDocumentAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_topics_document_api_enabled_>;
  using ScopedTopicsXHR = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_topics_xhr_enabled_>;
  using ScopedTouchDragAndContextMenu = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_touch_drag_and_context_menu_enabled_>;
  using ScopedTouchDragOnShortPress = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_touch_drag_on_short_press_enabled_>;
  using ScopedTouchEventFeatureDetection = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_touch_event_feature_detection_enabled_>;
  using ScopedTouchTextEditingRedesign = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_touch_text_editing_redesign_enabled_>;
  using ScopedTpcd = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_tpcd_enabled_>;
  using ScopedTranslateService = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_translate_service_enabled_>;
  using ScopedTrustedTypeBeforePolicyCreationEvent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_trusted_type_before_policy_creation_event_enabled_>;
  using ScopedTrustedTypesFromLiteral = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_trusted_types_from_literal_enabled_>;
  using ScopedTrustedTypesUseCodeLike = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_trusted_types_use_code_like_enabled_>;
  using ScopedUnclosedFormControlIsInvalid = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_unclosed_form_control_is_invalid_enabled_>;
  using ScopedUnexposedTaskIds = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_unexposed_task_ids_enabled_>;
  using ScopedUnownedAnimationsSkipCSSEvents = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_unowned_animations_skip_css_events_enabled_>;
  using ScopedUnrestrictedMeasureUserAgentSpecificMemory = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_unrestricted_measure_user_agent_specific_memory_enabled_>;
  using ScopedUnrestrictedSharedArrayBuffer = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_unrestricted_shared_array_buffer_enabled_>;
  using ScopedURLAttributeFix = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_url_attribute_fix_enabled_>;
  using ScopedURLCanParse = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_url_can_parse_enabled_>;
  using ScopedURLPatternCompareComponent = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_url_pattern_compare_component_enabled_>;
  using ScopedURLSearchParamsHasAndDeleteMultipleArgs = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_url_search_params_has_and_delete_multiple_args_enabled_>;
  using ScopedUseBeginFramePresentationFeedback = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_use_begin_frame_presentation_feedback_enabled_>;
  using ScopedUsedColorSchemeRootScrollbars = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_used_color_scheme_root_scrollbars_enabled_>;
  using ScopedUserActivationSameOriginVisibility = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_user_activation_same_origin_visibility_enabled_>;
  using ScopedUserAgentClientHint = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_user_agent_client_hint_enabled_>;
  using ScopedUserValidUserInvalid = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_user_valid_user_invalid_enabled_>;
  using ScopedV8IdleTasks = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_v8_idle_tasks_enabled_>;
  using ScopedVideoAutoFullscreen = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_video_auto_fullscreen_enabled_>;
  using ScopedVideoFullscreenOrientationLock = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_video_fullscreen_orientation_lock_enabled_>;
  using ScopedVideoPlaybackQuality = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_video_playback_quality_enabled_>;
  using ScopedVideoRotateToFullscreen = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_video_rotate_to_fullscreen_enabled_>;
  using ScopedVideoTrackGenerator = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_video_track_generator_enabled_>;
  using ScopedVideoTrackGeneratorInWindow = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_video_track_generator_in_window_enabled_>;
  using ScopedVideoTrackGeneratorInWorker = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_video_track_generator_in_worker_enabled_>;
  using ScopedViewportHeightClientHintHeader = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_viewport_height_client_hint_header_enabled_>;
  using ScopedViewportSegments = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_viewport_segments_enabled_>;
  using ScopedViewTransitionLayoutObjectVisualOverflow = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_view_transition_layout_object_visual_overflow_enabled_>;
  using ScopedViewTransitionOnNavigation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_view_transition_on_navigation_enabled_>;
  using ScopedVisibilityCollapseColumn = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_visibility_collapse_column_enabled_>;
  using ScopedVisibilityStateEntry = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_visibility_state_entry_enabled_>;
  using ScopedWakeLock = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_wake_lock_enabled_>;
  using ScopedWarnOnContentVisibilityRenderAccess = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_warn_on_content_visibility_render_access_enabled_>;
  using ScopedWarnSandboxIneffective = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_warn_sandbox_ineffective_enabled_>;
  using ScopedWebAnimationsAPI = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_animations_api_enabled_>;
  using ScopedWebAnimationsSVG = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_animations_svg_enabled_>;
  using ScopedWebAppDarkMode = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_app_dark_mode_enabled_>;
  using ScopedWebAppLaunchHandler = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_app_launch_handler_enabled_>;
  using ScopedWebAppLaunchQueue = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_app_launch_queue_enabled_>;
  using ScopedWebAppsLockScreen = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_apps_lock_screen_enabled_>;
  using ScopedWebAppTabStrip = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_app_tab_strip_enabled_>;
  using ScopedWebAppTabStripCustomizations = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_app_tab_strip_customizations_enabled_>;
  using ScopedWebAppTranslations = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_app_translations_enabled_>;
  using ScopedWebAppUrlHandling = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_app_url_handling_enabled_>;
  using ScopedWebAppWindowControlsOverlay = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_app_window_controls_overlay_enabled_>;
  using ScopedWebAssemblyGC = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_assembly_gc_enabled_>;
  using ScopedWebAssemblyJSStringBuiltins = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_assembly_js_string_builtins_enabled_>;
  using ScopedWebAuth = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_auth_enabled_>;
  using ScopedWebAuthAuthenticatorAttachment = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_auth_authenticator_attachment_enabled_>;
  using ScopedWebAuthenticationDevicePublicKey = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_authentication_device_public_key_enabled_>;
  using ScopedWebAuthenticationJSONSerialization = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_authentication_js_on_serialization_enabled_>;
  using ScopedWebAuthenticationLargeBlobExtension = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_authentication_large_blob_extension_enabled_>;
  using ScopedWebAuthenticationPRF = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_authentication_prf_enabled_>;
  using ScopedWebAuthenticationRemoteDesktopSupport = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_authentication_remote_desktop_support_enabled_>;
  using ScopedWebBluetooth = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_bluetooth_enabled_>;
  using ScopedWebBluetoothGetDevices = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_bluetooth_get_devices_enabled_>;
  using ScopedWebBluetoothScanning = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_bluetooth_scanning_enabled_>;
  using ScopedWebBluetoothWatchAdvertisements = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_bluetooth_watch_advertisements_enabled_>;
  using ScopedWebCodecsContentHint = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_webcodecs_content_hint_enabled_>;
  using ScopedWebCryptoCurve25519 = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_crypto_curve_25519_enabled_>;
  using ScopedWebEnvironmentIntegrity = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_environment_integrity_enabled_>;
  using ScopedWebFontResizeLCP = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_font_resize_lcp_enabled_>;
  using ScopedWebGLDeveloperExtensions = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_webgl_developer_extensions_enabled_>;
  using ScopedWebGLDraftExtensions = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_webgl_draft_extensions_enabled_>;
  using ScopedWebGLDrawingBufferStorage = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_webgl_drawing_buffer_storage_enabled_>;
  using ScopedWebGLImageChromium = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_webgl_image_chromium_enabled_>;
  using ScopedWebGPUDeveloperFeatures = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_webgpu_developer_features_enabled_>;
  using ScopedWebHID = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_hid_enabled_>;
  using ScopedWebHIDOnServiceWorkers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_hid_on_service_workers_enabled_>;
  using ScopedWebIdentityDigitalCredentials = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_identity_digital_credentials_enabled_>;
  using ScopedWebIDLBigIntUsesToBigInt = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_idl_big_int_uses_to_big_int_enabled_>;
  using ScopedWebKitScrollbarStyling = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_kit_scrollbar_styling_enabled_>;
  using ScopedWebNFC = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_nfc_enabled_>;
  using ScopedWebOTP = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_otp_enabled_>;
  using ScopedWebOTPAssertionFeaturePolicy = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_otp_assertion_feature_policy_enabled_>;
  using ScopedWebPreferences = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_preferences_enabled_>;
  using ScopedWebSerialBluetooth = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_serial_bluetooth_enabled_>;
  using ScopedWebShare = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_share_enabled_>;
  using ScopedWebSocketStream = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_websocket_stream_enabled_>;
  using ScopedWebTransportCustomCertificates = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_transport_custom_certificates_enabled_>;
  using ScopedWebUSB = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_usb_enabled_>;
  using ScopedWebUSBOnDedicatedWorkers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_usb_on_dedicated_workers_enabled_>;
  using ScopedWebUSBOnServiceWorkers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_usb_on_service_workers_enabled_>;
  using ScopedWebViewXRequestedWithDeprecation = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_view_xr_equested_with_deprecation_enabled_>;
  using ScopedWebVTTRegions = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_vtt_regions_enabled_>;
  using ScopedWebXR = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_xr_enabled_>;
  using ScopedWebXREnabledFeatures = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_xr_enabled_features_enabled_>;
  using ScopedWebXRFrameRate = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_xr_frame_rate_enabled_>;
  using ScopedWebXRFrontFacing = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_xr_front_facing_enabled_>;
  using ScopedWebXRHandInput = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_xr_hand_input_enabled_>;
  using ScopedWebXRHitTestEntityTypes = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_xr_hit_test_entity_types_enabled_>;
  using ScopedWebXRImageTracking = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_xr_image_tracking_enabled_>;
  using ScopedWebXRLayers = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_xr_layers_enabled_>;
  using ScopedWebXRPlaneDetection = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_xr_plane_detection_enabled_>;
  using ScopedWebXRPoseMotionData = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_web_xr_pose_motion_data_enabled_>;
  using ScopedWGIGamepadTriggerRumble = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_wgi_gamepad_trigger_rumble_enabled_>;
  using ScopedWindowDefaultStatus = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_window_default_status_enabled_>;
  using ScopedWindowPlacementFullscreenOnScreensChange = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_window_placement_fullscreen_on_screens_change_enabled_>;
  using ScopedWindowPlacementPermissionAlias = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_window_placement_permission_alias_enabled_>;
  using ScopedXMLParserMergeAdjacentCDataSections = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_xml_parser_merge_adjacent_c_data_sections_enabled_>;
  using ScopedXYWHAndRectComputedValue = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_xywh_and_rect_computed_value_enabled_>;
  using ScopedZeroCopyTabCapture = ScopedRuntimeEnabledFeature<
      RuntimeEnabledFeaturesBase::is_zero_copy_tab_capture_enabled_>;
};

using ScopedAbortSignalAnyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAbortSignalAny;
using ScopedAbortSignalCompositionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAbortSignalComposition;
using ScopedAccelerated2dCanvasForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAccelerated2dCanvas;
using ScopedAcceleratedSmallCanvasesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAcceleratedSmallCanvases;
using ScopedAccessibilityAriaVirtualContentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAccessibilityAriaVirtualContent;
using ScopedAccessibilityEagerAXTreeUpdateForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAccessibilityEagerAXTreeUpdate;
using ScopedAccessibilityExposeDisplayNoneForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAccessibilityExposeDisplayNone;
using ScopedAccessibilityExposeHTMLElementForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAccessibilityExposeHTMLElement;
using ScopedAccessibilityExposeIgnoredNodesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAccessibilityExposeIgnoredNodes;
using ScopedAccessibilityObjectModelForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAccessibilityObjectModel;
using ScopedAccessibilityPageZoomForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAccessibilityPageZoom;
using ScopedAccessibilityUseAXPositionForDocumentMarkersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAccessibilityUseAXPositionForDocumentMarkers;
using ScopedAccordionPatternForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAccordionPattern;
using ScopedAddIdentityInCanMakePaymentEventForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAddIdentityInCanMakePaymentEvent;
using ScopedAddressSpaceForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAddressSpace;
using ScopedAdInterestGroupAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAdInterestGroupAPI;
using ScopedAdTaggingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAdTagging;
using ScopedAllowContentInitiatedDataUrlNavigationsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAllowContentInitiatedDataUrlNavigations;
using ScopedAllowURNsInIframesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAllowURNsInIframes;
using ScopedAndroidDownloadableFontsMatchingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAndroidDownloadableFontsMatching;
using ScopedAnimationWorkletForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAnimationWorklet;
using ScopedAnonymousIframeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAnonymousIframe;
using ScopedAOMAriaRelationshipPropertiesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAOMAriaRelationshipProperties;
using ScopedArrowKeysInVerticalWritingModesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedArrowKeysInVerticalWritingModes;
using ScopedAttributionReportingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAttributionReporting;
using ScopedAttributionReportingCrossAppWebForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAttributionReportingCrossAppWeb;
using ScopedAttributionReportingInterfaceForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAttributionReportingInterface;
using ScopedAudioContextSetSinkIdForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAudioContextSetSinkId;
using ScopedAudioOutputDevicesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAudioOutputDevices;
using ScopedAudioVideoTracksForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAudioVideoTracks;
using ScopedAutoDarkModeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAutoDarkMode;
using ScopedAutoDisableAccessibilityV2ForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAutoDisableAccessibilityV2;
using ScopedAutofillShadowDOMForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAutofillShadowDOM;
using ScopedAutomationControlledForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAutomationControlled;
using ScopedAutoplayIgnoresWebAudioForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedAutoplayIgnoresWebAudio;
using ScopedBackdropInheritOriginatingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBackdropInheritOriginating;
using ScopedBackfaceVisibilityInteropForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBackfaceVisibilityInterop;
using ScopedBackfaceVisibilityNewInheritanceForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBackfaceVisibilityNewInheritance;
using ScopedBackForwardCacheForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBackForwardCache;
using ScopedBackForwardCacheExperimentHTTPHeaderForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBackForwardCacheExperimentHTTPHeader;
using ScopedBackForwardCacheNotRestoredReasonsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBackForwardCacheNotRestoredReasons;
using ScopedBackgroundFetchForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBackgroundFetch;
using ScopedBarcodeDetectorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBarcodeDetector;
using ScopedBeforeMatchEventForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBeforeMatchEvent;
using ScopedBeforeunloadEventCancelByPreventDefaultForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBeforeunloadEventCancelByPreventDefault;
using ScopedBidiCaretAffinityForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBidiCaretAffinity;
using ScopedBlinkExtensionChromeOSForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBlinkExtensionChromeOS;
using ScopedBlinkExtensionChromeOSHIDForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBlinkExtensionChromeOSHID;
using ScopedBlinkExtensionChromeOSTelemetryForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBlinkExtensionChromeOSTelemetry;
using ScopedBlinkExtensionChromeOSWindowManagementForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBlinkExtensionChromeOSWindowManagement;
using ScopedBlinkExtensionDiagnosticsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBlinkExtensionDiagnostics;
using ScopedBlinkLifecycleScriptForbiddenForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBlinkLifecycleScriptForbidden;
using ScopedBlinkRuntimeCallStatsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBlinkRuntimeCallStats;
using ScopedBlockingFocusWithoutUserActivationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBlockingFocusWithoutUserActivation;
using ScopedBrowserVerifiedUserActivationKeyboardForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBrowserVerifiedUserActivationKeyboard;
using ScopedBrowserVerifiedUserActivationMouseForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedBrowserVerifiedUserActivationMouse;
using ScopedByobFetchForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedByobFetch;
using ScopedCacheStorageCodeCacheHintForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCacheStorageCodeCacheHint;
using ScopedCanonicalizeWhitespaceStringsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCanonicalizeWhitespaceStrings;
using ScopedCanvas2dCanvasFilterForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCanvas2dCanvasFilter;
using ScopedCanvas2dImageChromiumForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCanvas2dImageChromium;
using ScopedCanvas2dLayersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCanvas2dLayers;
using ScopedCanvas2dScrollPathIntoViewForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCanvas2dScrollPathIntoView;
using ScopedCanvasFloatingPointForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCanvasFloatingPoint;
using ScopedCanvasHDRForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCanvasHDR;
using ScopedCanvasImageSmoothingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCanvasImageSmoothing;
using ScopedCapabilityDelegationDisplayCaptureRequestForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCapabilityDelegationDisplayCaptureRequest;
using ScopedCapabilityDelegationFullscreenRequestForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCapabilityDelegationFullscreenRequest;
using ScopedCaptureControllerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCaptureController;
using ScopedCapturedMouseEventsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCapturedMouseEvents;
using ScopedCaptureHandleForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCaptureHandle;
using ScopedCCTNewRFMPushBehaviorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCCTNewRFMPushBehavior;
using ScopedcheckVisibilityForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedcheckVisibility;
using ScopedClickToCapturedPointerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedClickToCapturedPointer;
using ScopedClientHintsMetaEquivDelegateCHForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedClientHintsMetaEquivDelegateCH;
using ScopedClientHintsMetaHTTPEquivAcceptCHForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedClientHintsMetaHTTPEquivAcceptCH;
using ScopedClientHintThirdPartyDelegationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedClientHintThirdPartyDelegation;
using ScopedClipboardCustomFormatsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedClipboardCustomFormats;
using ScopedClipboardSupportedTypesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedClipboardSupportedTypes;
using ScopedClipboardSvgForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedClipboardSvg;
using ScopedClipboardUnsanitizedContentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedClipboardUnsanitizedContent;
using ScopedClipboardWellFormedHtmlSanitizationWriteForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedClipboardWellFormedHtmlSanitizationWrite;
using ScopedClipPathGeometryBoxForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedClipPathGeometryBox;
using ScopedClipPathRejectEmptyPathsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedClipPathRejectEmptyPaths;
using ScopedClipPathXYWHAndRectForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedClipPathXYWHAndRect;
using ScopedCloseWatcherForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCloseWatcher;
using ScopedCoepReflectionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCoepReflection;
using ScopedCompositeBGColorAnimationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCompositeBGColorAnimation;
using ScopedCompositeBoxShadowAnimationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCompositeBoxShadowAnimation;
using ScopedCompositeClipPathAnimationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCompositeClipPathAnimation;
using ScopedCompositedSelectionUpdateForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCompositedSelectionUpdate;
using ScopedCompositionForegroundMarkersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCompositionForegroundMarkers;
using ScopedCompositionUpdateBeforeBeforeInputForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCompositionUpdateBeforeBeforeInput;
using ScopedCompressionDictionaryTransportForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCompressionDictionaryTransport;
using ScopedCompressionDictionaryTransportBackendForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCompressionDictionaryTransportBackend;
using ScopedComputedAccessibilityInfoForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedComputedAccessibilityInfo;
using ScopedComputePressureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedComputePressure;
using ScopedConfirmationOfActionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedConfirmationOfAction;
using ScopedConsolidatedMovementXYForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedConsolidatedMovementXY;
using ScopedContactsManagerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedContactsManager;
using ScopedContactsManagerExtraPropertiesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedContactsManagerExtraProperties;
using ScopedContentIndexForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedContentIndex;
using ScopedContentVisibilityAutoStateChangeEventForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedContentVisibilityAutoStateChangeEvent;
using ScopedContextMenuForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedContextMenu;
using ScopedCookieDeprecationFacilitatedTestingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCookieDeprecationFacilitatedTesting;
using ScopedCooperativeSchedulingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCooperativeScheduling;
using ScopedCoopRestrictPropertiesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCoopRestrictProperties;
using ScopedCorsRFC1918ForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCorsRFC1918;
using ScopedCrossFramePerformanceTimelineForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCrossFramePerformanceTimeline;
using ScopedCSSAnchorPositioningForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSAnchorPositioning;
using ScopedCSSAnimationCompositionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSAnimationComposition;
using ScopedCSSAnimationDelayStartEndForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSAnimationDelayStartEnd;
using ScopedCSSAtRuleCounterStyleImageSymbolsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSAtRuleCounterStyleImageSymbols;
using ScopedCSSAtRuleCounterStyleSpeakAsDescriptorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSAtRuleCounterStyleSpeakAsDescriptor;
using ScopedCSSAtSupportsAlwaysNonForgivingParsingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSAtSupportsAlwaysNonForgivingParsing;
using ScopedCSSBackgroundClipUnprefixForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSBackgroundClipUnprefix;
using ScopedCSSBaselineSourceForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSBaselineSource;
using ScopedCSSCalcSimplificationAndSerializationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSCalcSimplificationAndSerialization;
using ScopedCSSCapFontUnitsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSCapFontUnits;
using ScopedCSSCaseSensitiveSelectorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSCaseSensitiveSelector;
using ScopedCSSColorContrastForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSColorContrast;
using ScopedCSSColorTypedOMForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSColorTypedOM;
using ScopedCSSContainIntrinsicSizeAutoNoneForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSContainIntrinsicSizeAutoNone;
using ScopedCSSContentVisibilityImpliesContainIntrinsicSizeAutoForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSContentVisibilityImpliesContainIntrinsicSizeAuto;
using ScopedCSSCustomPropertiesAblationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSCustomPropertiesAblation;
using ScopedCSSDisplayAnimationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSDisplayAnimation;
using ScopedCSSDynamicRangeLimitForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSDynamicRangeLimit;
using ScopedCSSEnumeratedCustomPropertiesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSEnumeratedCustomProperties;
using ScopedCSSExponentialFunctionsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSExponentialFunctions;
using ScopedCssFieldSizingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCssFieldSizing;
using ScopedCSSFirstLetterNoNewLineAsPrecedingCharForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSFirstLetterNoNewLineAsPrecedingChar;
using ScopedCSSFocusVisibleForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSFocusVisible;
using ScopedCSSFontFaceAutoVariableRangeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSFontFaceAutoVariableRange;
using ScopedCSSFontSizeAdjustForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSFontSizeAdjust;
using ScopedCSSGridTemplatePropertyInterpolationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSGridTemplatePropertyInterpolation;
using ScopedCSSHexAlphaColorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSHexAlphaColor;
using ScopedCSSHyphenateLimitCharsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSHyphenateLimitChars;
using ScopedCSSImageSetForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSImageSet;
using ScopedCSSIndependentTransformPropertiesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSIndependentTransformProperties;
using ScopedCSSLayoutAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSLayoutAPI;
using ScopedCSSLinearTimingFunctionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSLinearTimingFunction;
using ScopedCSSLogicalForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSLogical;
using ScopedCSSLogicalOverflowForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSLogicalOverflow;
using ScopedCSSMarkerNestedPseudoElementForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSMarkerNestedPseudoElement;
using ScopedCSSMaskingInteropForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSMaskingInterop;
using ScopedCSSMixBlendModePlusLighterForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSMixBlendModePlusLighter;
using ScopedCSSNestingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSNesting;
using ScopedCSSNestingIdentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSNestingIdent;
using ScopedCSSNumericFactoryCompletenessForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSNumericFactoryCompleteness;
using ScopedCSSObjectViewBoxForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSObjectViewBox;
using ScopedCSSOffsetPathBasicShapesCircleAndEllipseForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSOffsetPathBasicShapesCircleAndEllipse;
using ScopedCSSOffsetPathBasicShapesRectanglesAndPolygonForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSOffsetPathBasicShapesRectanglesAndPolygon;
using ScopedCSSOffsetPathCoordBoxForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSOffsetPathCoordBox;
using ScopedCSSOffsetPathRayForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSOffsetPathRay;
using ScopedCSSOffsetPathRayContainForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSOffsetPathRayContain;
using ScopedCSSOffsetPathUrlForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSOffsetPathUrl;
using ScopedCSSOffsetPositionAnchorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSOffsetPositionAnchor;
using ScopedCSSOverflowMediaFeaturesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSOverflowMediaFeatures;
using ScopedCSSPaintAPIArgumentsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSPaintAPIArguments;
using ScopedCSSPaintingForSpellingGrammarErrorsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSPaintingForSpellingGrammarErrors;
using ScopedCSSParserIgnoreCharsetForURLsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSParserIgnoreCharsetForURLs;
using ScopedCSSPhraseLineBreakForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSPhraseLineBreak;
using ScopedCSSPictureInPictureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSPictureInPicture;
using ScopedCSSPositionStickyStaticScrollPositionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSPositionStickyStaticScrollPosition;
using ScopedCSSPseudoDirForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSPseudoDir;
using ScopedCSSPseudoHasNonForgivingParsingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSPseudoHasNonForgivingParsing;
using ScopedCSSPseudoPlayingPausedForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSPseudoPlayingPaused;
using ScopedCSSRelativeColorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSRelativeColor;
using ScopedCSSScopeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSScope;
using ScopedCSSScrollSnapEventsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSScrollSnapEvents;
using ScopedCSSScrollStartForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSScrollStart;
using ScopedCSSSelectorFragmentAnchorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSSelectorFragmentAnchor;
using ScopedCSSSelectorNthChildComplexSelectorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSSelectorNthChildComplexSelector;
using ScopedCSSSignRelatedFunctionsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSSignRelatedFunctions;
using ScopedCSSSnapContainerQueriesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSSnapContainerQueries;
using ScopedCSSSpellingGrammarErrorsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSSpellingGrammarErrors;
using ScopedCSSStartingStyleForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSStartingStyle;
using ScopedCSSSteppedValueFunctionsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSSteppedValueFunctions;
using ScopedCSSStickyContainerQueriesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSStickyContainerQueries;
using ScopedCSSStyleQueriesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSStyleQueries;
using ScopedCSSStyleQueriesBooleanForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSStyleQueriesBoolean;
using ScopedCSSSystemAccentColorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSSystemAccentColor;
using ScopedCSSTextAutoSpaceForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSTextAutoSpace;
using ScopedCSSTextBoxTrimForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSTextBoxTrim;
using ScopedCSSTextSpacingTrimForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSTextSpacingTrim;
using ScopedCSSTextWrapBalanceByScoreForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSTextWrapBalanceByScore;
using ScopedCSSTextWrapPrettyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSTextWrapPretty;
using ScopedCSSTogglesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSToggles;
using ScopedCSSTopLayerForTransitionsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSTopLayerForTransitions;
using ScopedCSSTransformBoxAdditionalKeywordsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSTransformBoxAdditionalKeywords;
using ScopedCSSTransitionDiscreteForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSTransitionDiscrete;
using ScopedCSSTranslatePreserveYPercentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSTranslatePreserveYPercent;
using ScopedCSSTreeScopedTimelinesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSTreeScopedTimelines;
using ScopedCSSUpdateMediaFeatureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSUpdateMediaFeature;
using ScopedCSSUserSelectContainForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSUserSelectContain;
using ScopedCSSVariables2ImageValuesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSVariables2ImageValues;
using ScopedCSSVariables2TransformValuesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSVariables2TransformValues;
using ScopedCSSVideoDynamicRangeMediaQueriesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSVideoDynamicRangeMediaQueries;
using ScopedCSSViewportUnits4ForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSViewportUnits4;
using ScopedCSSViewTimelineInsetShorthandForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCSSViewTimelineInsetShorthand;
using ScopedCustomElementsGetNameForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedCustomElementsGetName;
using ScopedDatabaseForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDatabase;
using ScopedDateInputInlineBlockForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDateInputInlineBlock;
using ScopedDeflateRawCompressionFormatForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDeflateRawCompressionFormat;
using ScopedDelayOutOfViewportLazyImagesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDelayOutOfViewportLazyImages;
using ScopedDelegatedInkTrailsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDelegatedInkTrails;
using ScopedDeprecatedNonStreamingDeclarativeShadowDOMForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDeprecatedNonStreamingDeclarativeShadowDOM;
using ScopedDesktopCaptureDisableLocalEchoControlForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDesktopCaptureDisableLocalEchoControl;
using ScopedDesktopPWAsAdditionalWindowingControlsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDesktopPWAsAdditionalWindowingControls;
using ScopedDesktopPWAsSubAppsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDesktopPWAsSubApps;
using ScopedDetailsElementToggleEventForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDetailsElementToggleEvent;
using ScopedDetailsStylingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDetailsStyling;
using ScopedDeviceAttributesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDeviceAttributes;
using ScopedDeviceOrientationRequestPermissionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDeviceOrientationRequestPermission;
using ScopedDevicePostureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDevicePosture;
using ScopedDialogNewFocusBehaviorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDialogNewFocusBehavior;
using ScopedDigitalGoodsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDigitalGoods;
using ScopedDigitalGoodsV2_1ForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDigitalGoodsV2_1;
using ScopedDirectSocketsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDirectSockets;
using ScopedDisableDifferentOriginSubframeDialogSuppressionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDisableDifferentOriginSubframeDialogSuppression;
using ScopedDisableHardwareNoiseSuppressionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDisableHardwareNoiseSuppression;
using ScopedDisableSelectAllForEmptyTextForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDisableSelectAllForEmptyText;
using ScopedDisableThirdPartySessionStoragePartitioningAfterGeneralPartitioningForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDisableThirdPartySessionStoragePartitioningAfterGeneralPartitioning;
using ScopedDisableThirdPartyStoragePartitioningForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDisableThirdPartyStoragePartitioning;
using ScopedDisplayCutoutAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDisplayCutoutAPI;
using ScopedDocumentBaseURIFixForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentBaseURIFix;
using ScopedDocumentCookieForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentCookie;
using ScopedDocumentDomainForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentDomain;
using ScopedDocumentOpenOriginAliasRemovalForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentOpenOriginAliasRemoval;
using ScopedDocumentOpenSandboxInheritanceRemovalForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentOpenSandboxInheritanceRemoval;
using ScopedDocumentPictureInPictureAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentPictureInPictureAPI;
using ScopedDocumentPolicyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentPolicy;
using ScopedDocumentPolicyDocumentDomainForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentPolicyDocumentDomain;
using ScopedDocumentPolicyNegotiationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentPolicyNegotiation;
using ScopedDocumentPolicySyncXHRForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentPolicySyncXHR;
using ScopedDocumentRenderBlockingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentRenderBlocking;
using ScopedDocumentWriteForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDocumentWrite;
using ScopedDOMPartsAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDOMPartsAPI;
using ScopedDOMPartsAPIActivePartTrackingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedDOMPartsAPIActivePartTracking;
using ScopedEarlyHintsPreloadForNavigationOptInForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedEarlyHintsPreloadForNavigationOptIn;
using ScopedEditContextForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedEditContext;
using ScopedElementCaptureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedElementCapture;
using ScopedEmptyCaretInVerticalForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedEmptyCaretInVertical;
using ScopedEnforceAnonymityExposureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedEnforceAnonymityExposure;
using ScopedEscapeLtGtInAttributesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedEscapeLtGtInAttributes;
using ScopedEventTimingInteractionCountForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedEventTimingInteractionCount;
using ScopedExcludeBrokenImageIconFromBeingLcpEligibleForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedExcludeBrokenImageIconFromBeingLcpEligible;
using ScopedExperimentalContentSecurityPolicyFeaturesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedExperimentalContentSecurityPolicyFeatures;
using ScopedExperimentalJSProfilerMarkersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedExperimentalJSProfilerMarkers;
using ScopedExperimentalPoliciesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedExperimentalPolicies;
using ScopedExposeRenderTimeNonTaoDelayedImageForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedExposeRenderTimeNonTaoDelayedImage;
using ScopedExtendedTextMetricsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedExtendedTextMetrics;
using ScopedExtraWebGLVideoTextureMetadataForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedExtraWebGLVideoTextureMetadata;
using ScopedEyeDropperAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedEyeDropperAPI;
using ScopedFaceDetectorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFaceDetector;
using ScopedFakeNoAllocDirectCallForTestingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFakeNoAllocDirectCallForTesting;
using ScopedFastComparePositionsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFastComparePositions;
using ScopedFastPositionIteratorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFastPositionIterator;
using ScopedFedCmForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFedCm;
using ScopedFedCmAuthzForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFedCmAuthz;
using ScopedFedCmAutoSelectedFlagForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFedCmAutoSelectedFlag;
using ScopedFedCmErrorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFedCmError;
using ScopedFedCmHostedDomainForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFedCmHostedDomain;
using ScopedFedCmIdPRegistrationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFedCmIdPRegistration;
using ScopedFedCmIdpSigninStatusForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFedCmIdpSigninStatus;
using ScopedFedCmIdpSignoutForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFedCmIdpSignout;
using ScopedFedCmMultipleIdentityProvidersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFedCmMultipleIdentityProviders;
using ScopedFedCmSelectiveDisclosureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFedCmSelectiveDisclosure;
using ScopedFencedFramesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFencedFrames;
using ScopedFencedFramesAPIChangesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFencedFramesAPIChanges;
using ScopedFencedFramesDefaultModeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFencedFramesDefaultMode;
using ScopedFetchLaterAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFetchLaterAPI;
using ScopedFetchUploadStreamingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFetchUploadStreaming;
using ScopedFileHandlingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFileHandling;
using ScopedFileHandlingIconsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFileHandlingIcons;
using ScopedFileSystemForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFileSystem;
using ScopedFileSystemAccessForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFileSystemAccess;
using ScopedFileSystemAccessAPIExperimentalForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFileSystemAccessAPIExperimental;
using ScopedFileSystemAccessGetCloudIdentifiersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFileSystemAccessGetCloudIdentifiers;
using ScopedFileSystemAccessLocalForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFileSystemAccessLocal;
using ScopedFileSystemAccessLockingSchemeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFileSystemAccessLockingScheme;
using ScopedFileSystemAccessOriginPrivateForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFileSystemAccessOriginPrivate;
using ScopedFileSystemObserverForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFileSystemObserver;
using ScopedFirstRectForRangeVerticalForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFirstRectForRangeVertical;
using ScopedFixedElementsDontOverscrollForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFixedElementsDontOverscroll;
using ScopedFledgeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFledge;
using ScopedFledgeBiddingAndAuctionServerAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFledgeBiddingAndAuctionServerAPI;
using ScopedFledgeClearOriginJoinedAdInterestGroupsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFledgeClearOriginJoinedAdInterestGroups;
using ScopedFledgeDirectFromSellerSignalsHeaderAdSlotForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFledgeDirectFromSellerSignalsHeaderAdSlot;
using ScopedFledgeNegativeTargetingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFledgeNegativeTargeting;
using ScopedFluentOverlayScrollbarsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFluentOverlayScrollbars;
using ScopedFluentScrollbarsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFluentScrollbars;
using ScopedFlushParserBeforeCreatingCustomElementsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFlushParserBeforeCreatingCustomElements;
using ScopedFocusgroupForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFocusgroup;
using ScopedFocuslessSpatialNavigationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFocuslessSpatialNavigation;
using ScopedFontAccessForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFontAccess;
using ScopedFontationsFontBackendForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFontationsFontBackend;
using ScopedFontPaletteAnimationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFontPaletteAnimation;
using ScopedFontSrcLocalMatchingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFontSrcLocalMatching;
using ScopedFontVariantPositionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFontVariantPosition;
using ScopedForcedColorsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedForcedColors;
using ScopedForcedColorsPreserveParentColorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedForcedColorsPreserveParentColor;
using ScopedForceEagerMeasureMemoryForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedForceEagerMeasureMemory;
using ScopedForceReduceMotionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedForceReduceMotion;
using ScopedForceTallerSelectPopupForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedForceTallerSelectPopup;
using ScopedFormattedTextForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFormattedText;
using ScopedFormControlRestoreStateIfAutocompleteOffForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFormControlRestoreStateIfAutocompleteOff;
using ScopedFormControlsVerticalWritingModeDirectionSupportForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFormControlsVerticalWritingModeDirectionSupport;
using ScopedFormControlsVerticalWritingModeSupportForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFormControlsVerticalWritingModeSupport;
using ScopedFormControlsVerticalWritingModeTextSupportForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFormControlsVerticalWritingModeTextSupport;
using ScopedFormRelAttributeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFormRelAttribute;
using ScopedFormStateRestoreCallbackCallWithStateForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFormStateRestoreCallbackCallWithState;
using ScopedFractionalScrollOffsetsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFractionalScrollOffsets;
using ScopedFreezeFramesOnVisibilityForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFreezeFramesOnVisibility;
using ScopedFullscreenPopupWindowsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedFullscreenPopupWindows;
using ScopedGamepadButtonAxisEventsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGamepadButtonAxisEvents;
using ScopedGamepadMultitouchForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGamepadMultitouch;
using ScopedGetAllScreensMediaForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGetAllScreensMedia;
using ScopedGetComputedStyleOutOfFlowInsetsFixForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGetComputedStyleOutOfFlowInsetsFix;
using ScopedGetDisplayMediaForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGetDisplayMedia;
using ScopedGetDisplayMediaRequiresUserActivationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGetDisplayMediaRequiresUserActivation;
using ScopedGroupEffectForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedGroupEffect;
using ScopedHandwritingRecognitionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHandwritingRecognition;
using ScopedHangingWhitespaceDoesNotDependOnAlignmentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHangingWhitespaceDoesNotDependOnAlignment;
using ScopedHasUAVisualTransitionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHasUAVisualTransition;
using ScopedHighlightAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHighlightAPI;
using ScopedHighlightInheritanceForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHighlightInheritance;
using ScopedHighlightOverlayPaintingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHighlightOverlayPainting;
using ScopedHighlightPointerEventsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHighlightPointerEvents;
using ScopedHitTestOpaquenessForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHitTestOpaqueness;
using ScopedHitTestTransparencyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHitTestTransparency;
using ScopedHrefTranslateForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHrefTranslate;
using ScopedHTMLInvokeTargetAttributeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHTMLInvokeTargetAttribute;
using ScopedHTMLParserYieldAndDelayOftenForTestingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHTMLParserYieldAndDelayOftenForTesting;
using ScopedHTMLPopoverAttributeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHTMLPopoverAttribute;
using ScopedHTMLPopoverHintForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHTMLPopoverHint;
using ScopedHTMLSearchElementForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHTMLSearchElement;
using ScopedHTMLSelectElementShowPickerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHTMLSelectElementShowPicker;
using ScopedHTMLSelectListElementForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHTMLSelectListElement;
using ScopedHTMLUnsafeMethodsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedHTMLUnsafeMethods;
using ScopedIdleDetectionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedIdleDetection;
using ScopedImplicitRootScrollerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedImplicitRootScroller;
using ScopedImportAttributesDisallowUnknownKeysForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedImportAttributesDisallowUnknownKeys;
using ScopedIncomingCallNotificationsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedIncomingCallNotifications;
using ScopedInertAttributeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInertAttribute;
using ScopedInertDisplayTransitionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInertDisplayTransition;
using ScopedInfiniteCullRectForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInfiniteCullRect;
using ScopedInheritUserModifyWithoutContenteditableForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInheritUserModifyWithoutContenteditable;
using ScopedInnerHTMLParserFastpathForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInnerHTMLParserFastpath;
using ScopedInnerHTMLParserFastpathLogFailureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInnerHTMLParserFastpathLogFailure;
using ScopedInputMultipleFieldsUIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInputMultipleFieldsUI;
using ScopedInsertLineBreakIfPhrasingContentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInsertLineBreakIfPhrasingContent;
using ScopedInstalledAppForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInstalledApp;
using ScopedInteroperablePrivateAttributionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInteroperablePrivateAttribution;
using ScopedInterruptComposedScrollbarDisappearanceForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInterruptComposedScrollbarDisappearance;
using ScopedIntersectionObserverIgnoreFiltersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedIntersectionObserverIgnoreFilters;
using ScopedIntersectionObserverScrollMarginForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedIntersectionObserverScrollMargin;
using ScopedIntersectionOptimizationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedIntersectionOptimization;
using ScopedInvertedColorsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInvertedColors;
using ScopedInvisibleSVGAnimationThrottlingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedInvisibleSVGAnimationThrottling;
using ScopedJavaScriptCompileHintsMagicRuntimeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedJavaScriptCompileHintsMagicRuntime;
using ScopedKeyboardAccessibleTooltipForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedKeyboardAccessibleTooltip;
using ScopedKeyboardFocusableScrollersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedKeyboardFocusableScrollers;
using ScopedLangAttributeAwareFormControlUIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLangAttributeAwareFormControlUI;
using ScopedLayoutFlexNewRowAlgorithmV3ForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLayoutFlexNewRowAlgorithmV3;
using ScopedLayoutIgnoreMarginsForStickyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLayoutIgnoreMarginsForSticky;
using ScopedLayoutNewOverflowLogicForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLayoutNewOverflowLogic;
using ScopedLayoutNewSnapLogicForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLayoutNewSnapLogic;
using ScopedLayoutNewStickyLogicForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLayoutNewStickyLogic;
using ScopedLayoutNGNoCopyBackForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLayoutNGNoCopyBack;
using ScopedLayoutNGShapeCacheForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLayoutNGShapeCache;
using ScopedLayoutNGSubgridForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLayoutNGSubgrid;
using ScopedLazyFrameLoadingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLazyFrameLoading;
using ScopedLazyInitializeMediaControlsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLazyInitializeMediaControls;
using ScopedLCPAnimatedImagesWebExposedForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLCPAnimatedImagesWebExposed;
using ScopedLCPMouseoverHeuristicsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLCPMouseoverHeuristics;
using ScopedLCPMultipleUpdatesPerElementForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLCPMultipleUpdatesPerElement;
using ScopedLegacyWindowsDWriteFontFallbackForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLegacyWindowsDWriteFontFallback;
using ScopedLoadInputImageWithoutObjectForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLoadInputImageWithoutObject;
using ScopedLongAnimationFrameMonitoringForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLongAnimationFrameMonitoring;
using ScopedLongAnimationFrameTimingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLongAnimationFrameTiming;
using ScopedLongAnimationFrameUKMForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLongAnimationFrameUKM;
using ScopedLongTaskFromLongAnimationFrameForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedLongTaskFromLongAnimationFrame;
using ScopedMachineLearningCommonForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMachineLearningCommon;
using ScopedMachineLearningModelLoaderForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMachineLearningModelLoader;
using ScopedMachineLearningNeuralNetworkForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMachineLearningNeuralNetwork;
using ScopedManagedConfigurationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedManagedConfiguration;
using ScopedMeasureMemoryForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMeasureMemory;
using ScopedMediaCapabilitiesDynamicRangeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaCapabilitiesDynamicRange;
using ScopedMediaCapabilitiesEncodingInfoForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaCapabilitiesEncodingInfo;
using ScopedMediaCapabilitiesSpatialAudioForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaCapabilitiesSpatialAudio;
using ScopedMediaCaptureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaCapture;
using ScopedMediaCaptureBackgroundBlurForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaCaptureBackgroundBlur;
using ScopedMediaCaptureCameraControlsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaCaptureCameraControls;
using ScopedMediaCaptureConfigurationChangeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaCaptureConfigurationChange;
using ScopedMediaCastOverlayButtonForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaCastOverlayButton;
using ScopedMediaControlsExpandGestureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaControlsExpandGesture;
using ScopedMediaControlsOverlayPlayButtonForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaControlsOverlayPlayButton;
using ScopedMediaElementVolumeGreaterThanOneForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaElementVolumeGreaterThanOne;
using ScopedMediaEngagementBypassAutoplayPoliciesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaEngagementBypassAutoplayPolicies;
using ScopedMediaLatencyHintForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaLatencyHint;
using ScopedMediaQueryNavigationControlsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaQueryNavigationControls;
using ScopedMediaRecorderUseMediaVideoEncoderForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaRecorderUseMediaVideoEncoder;
using ScopedMediaSessionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaSession;
using ScopedMediaSessionEnterPictureInPictureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaSessionEnterPictureInPicture;
using ScopedMediaSessionSlidesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaSessionSlides;
using ScopedMediaSourceExperimentalForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaSourceExperimental;
using ScopedMediaSourceExtensionsForWebCodecsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaSourceExtensionsForWebCodecs;
using ScopedMediaSourceNewAbortAndDurationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaSourceNewAbortAndDuration;
using ScopedMediaStreamTrackTransferForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMediaStreamTrackTransfer;
using ScopedMiddleClickAutoscrollForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMiddleClickAutoscroll;
using ScopedMobileLayoutThemeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMobileLayoutTheme;
using ScopedMojoJSForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMojoJS;
using ScopedMojoJSTestForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMojoJSTest;
using ScopedMonitorTypeSurfacesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMonitorTypeSurfaces;
using ScopedMutationEventsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedMutationEvents;
using ScopedNavigateEventCancelableTraversalsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNavigateEventCancelableTraversals;
using ScopedNavigateEventCommitBehaviorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNavigateEventCommitBehavior;
using ScopedNavigateEventSourceElementForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNavigateEventSourceElement;
using ScopedNavigationIdForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNavigationId;
using ScopedNavigatorContentUtilsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNavigatorContentUtils;
using ScopedNetInfoConstantTypeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNetInfoConstantType;
using ScopedNetInfoDownlinkMaxForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNetInfoDownlinkMax;
using ScopedNoIdleEncodingForWebTestsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNoIdleEncodingForWebTests;
using ScopedNonComposedEnterLeaveEventsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNonComposedEnterLeaveEvents;
using ScopedNonInheritedWebkitBoxDirectionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNonInheritedWebkitBoxDirection;
using ScopedNonStandardAppearanceValuesHighUsageForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNonStandardAppearanceValuesHighUsage;
using ScopedNonStandardAppearanceValueSliderVerticalForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNonStandardAppearanceValueSliderVertical;
using ScopedNonStandardAppearanceValuesLowUsageForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNonStandardAppearanceValuesLowUsage;
using ScopedNotificationConstructorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNotificationConstructor;
using ScopedNotificationContentImageForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNotificationContentImage;
using ScopedNotificationsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNotifications;
using ScopedNotificationTriggersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNotificationTriggers;
using ScopedNoVarySearchPrefetchForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedNoVarySearchPrefetch;
using ScopedObservableAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedObservableAPI;
using ScopedOffMainThreadCSSPaintForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOffMainThreadCSSPaint;
using ScopedOffscreenCanvasCommitForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOffscreenCanvasCommit;
using ScopedOffsetParentNewSpecBehaviorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOffsetParentNewSpecBehavior;
using ScopedOnDeviceChangeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOnDeviceChange;
using ScopedOptimizedNodeCloneOrderForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOptimizedNodeCloneOrder;
using ScopedOptionElementAlwaysUseLabelForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOptionElementAlwaysUseLabel;
using ScopedOrientationEventForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOrientationEvent;
using ScopedOriginIsolationHeaderForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginIsolationHeader;
using ScopedOriginPolicyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginPolicy;
using ScopedOriginTrialsSampleAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginTrialsSampleAPI;
using ScopedOriginTrialsSampleAPIBrowserReadWriteForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginTrialsSampleAPIBrowserReadWrite;
using ScopedOriginTrialsSampleAPIDependentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginTrialsSampleAPIDependent;
using ScopedOriginTrialsSampleAPIDeprecationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginTrialsSampleAPIDeprecation;
using ScopedOriginTrialsSampleAPIExpiryGracePeriodForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginTrialsSampleAPIExpiryGracePeriod;
using ScopedOriginTrialsSampleAPIExpiryGracePeriodThirdPartyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginTrialsSampleAPIExpiryGracePeriodThirdParty;
using ScopedOriginTrialsSampleAPIImpliedForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginTrialsSampleAPIImplied;
using ScopedOriginTrialsSampleAPIInvalidOSForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginTrialsSampleAPIInvalidOS;
using ScopedOriginTrialsSampleAPINavigationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginTrialsSampleAPINavigation;
using ScopedOriginTrialsSampleAPIPersistentExpiryGracePeriodForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginTrialsSampleAPIPersistentExpiryGracePeriod;
using ScopedOriginTrialsSampleAPIPersistentFeatureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginTrialsSampleAPIPersistentFeature;
using ScopedOriginTrialsSampleAPIPersistentInvalidOSForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginTrialsSampleAPIPersistentInvalidOS;
using ScopedOriginTrialsSampleAPIPersistentThirdPartyDeprecationFeatureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginTrialsSampleAPIPersistentThirdPartyDeprecationFeature;
using ScopedOriginTrialsSampleAPIThirdPartyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOriginTrialsSampleAPIThirdParty;
using ScopedOverflowOverlayAliasesAutoForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOverflowOverlayAliasesAuto;
using ScopedOverscrollCustomizationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedOverscrollCustomization;
using ScopedPageFreezeOptInForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPageFreezeOptIn;
using ScopedPageFreezeOptOutForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPageFreezeOptOut;
using ScopedPagePopupForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPagePopup;
using ScopedPageRevealEventForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPageRevealEvent;
using ScopedPaintFlexGridSortedByOrderForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPaintFlexGridSortedByOrder;
using ScopedPaintUnderInvalidationCheckingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPaintUnderInvalidationChecking;
using ScopedParakeetForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedParakeet;
using ScopedPartitionedCookiesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPartitionedCookies;
using ScopedPasswordRevealForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPasswordReveal;
using ScopedPasswordStrongLabelForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPasswordStrongLabel;
using ScopedPastingBlocksSVGUseNonLocalHrefsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPastingBlocksSVGUseNonLocalHrefs;
using ScopedPaymentAppForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPaymentApp;
using ScopedPaymentHandlerMinimalHeaderUXForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPaymentHandlerMinimalHeaderUX;
using ScopedPaymentInstrumentsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPaymentInstruments;
using ScopedPaymentMethodChangeEventForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPaymentMethodChangeEvent;
using ScopedPaymentRequestForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPaymentRequest;
using ScopedPaymentRequestAllowOneActivationlessShowForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPaymentRequestAllowOneActivationlessShow;
using ScopedPaymentRequestMerchantValidationEventForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPaymentRequestMerchantValidationEvent;
using ScopedPendingBeaconAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPendingBeaconAPI;
using ScopedPercentBasedScrollingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPercentBasedScrolling;
using ScopedPerformanceManagerInstrumentationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPerformanceManagerInstrumentation;
using ScopedPerformanceNavigateSystemEntropyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPerformanceNavigateSystemEntropy;
using ScopedPeriodicBackgroundSyncForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPeriodicBackgroundSync;
using ScopedPerMethodCanMakePaymentQuotaForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPerMethodCanMakePaymentQuota;
using ScopedPermissionElementForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPermissionElement;
using ScopedPermissionsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPermissions;
using ScopedPermissionsPolicyReportingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPermissionsPolicyReporting;
using ScopedPermissionsRequestRevokeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPermissionsRequestRevoke;
using ScopedPNaClForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPNaCl;
using ScopedPointerEventDeviceIdForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPointerEventDeviceId;
using ScopedPopoverDialogDontThrowForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPopoverDialogDontThrow;
using ScopedPortalsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPortals;
using ScopedPositionOutsideTabSpanCheckSiblingNodeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPositionOutsideTabSpanCheckSiblingNode;
using ScopedPreciseMemoryInfoForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPreciseMemoryInfo;
using ScopedPreferNonCompositedScrollingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPreferNonCompositedScrolling;
using ScopedPrefersReducedDataForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPrefersReducedData;
using ScopedPrefersReducedTransparencyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPrefersReducedTransparency;
using ScopedPrefixedVideoFullscreenForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPrefixedVideoFullscreen;
using ScopedPrePaintAncestorsOfMissedOOFForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPrePaintAncestorsOfMissedOOF;
using ScopedPrerender2ForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPrerender2;
using ScopedPresentationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPresentation;
using ScopedPrettyPrintJSONDocumentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPrettyPrintJSONDocument;
using ScopedPrivacySandboxAdsAPIsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPrivacySandboxAdsAPIs;
using ScopedPrivateNetworkAccessNonSecureContextsAllowedForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPrivateNetworkAccessNonSecureContextsAllowed;
using ScopedPrivateNetworkAccessPermissionPromptForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPrivateNetworkAccessPermissionPrompt;
using ScopedPrivateStateTokensForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPrivateStateTokens;
using ScopedPrivateStateTokensAlwaysAllowIssuanceForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPrivateStateTokensAlwaysAllowIssuance;
using ScopedPushMessagingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPushMessaging;
using ScopedPushMessagingSubscriptionChangeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedPushMessagingSubscriptionChange;
using ScopedQuickIntensiveWakeUpThrottlingAfterLoadingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedQuickIntensiveWakeUpThrottlingAfterLoading;
using ScopedQuotaChangeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedQuotaChange;
using ScopedReadableStreamTeeCloneForBranch2ForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedReadableStreamTeeCloneForBranch2;
using ScopedReduceAcceptLanguageForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedReduceAcceptLanguage;
using ScopedReduceCookieIPCsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedReduceCookieIPCs;
using ScopedReduceUserAgentAndroidVersionDeviceModelForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedReduceUserAgentAndroidVersionDeviceModel;
using ScopedReduceUserAgentMinorVersionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedReduceUserAgentMinorVersion;
using ScopedReduceUserAgentPlatformOsCpuForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedReduceUserAgentPlatformOsCpu;
using ScopedRegionCaptureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRegionCapture;
using ScopedRemotePlaybackForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRemotePlayback;
using ScopedRemotePlaybackBackendForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRemotePlaybackBackend;
using ScopedRemoveDanglingMarkupInTargetForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRemoveDanglingMarkupInTarget;
using ScopedRemoveDataUrlInSvgUseForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRemoveDataUrlInSvgUse;
using ScopedRemoveMobileViewportDoubleTapForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRemoveMobileViewportDoubleTap;
using ScopedRenderBlockingStatusForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRenderBlockingStatus;
using ScopedRenderPriorityAttributeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRenderPriorityAttribute;
using ScopedResourceHintsLeastRestrictiveCSPForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedResourceHintsLeastRestrictiveCSP;
using ScopedResourceTimingContentTypeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedResourceTimingContentType;
using ScopedResourceTimingInterimResponseTimesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedResourceTimingInterimResponseTimes;
using ScopedResourceTimingResponseStatusForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedResourceTimingResponseStatus;
using ScopedResourceTimingUseCORSForBodySizesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedResourceTimingUseCORSForBodySizes;
using ScopedRestrictGamepadAccessForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRestrictGamepadAccess;
using ScopedRtcAudioJitterBufferMaxPacketsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRtcAudioJitterBufferMaxPackets;
using ScopedRTCEncodedAudioFrameAbsCaptureTimeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRTCEncodedAudioFrameAbsCaptureTime;
using ScopedRTCEncodedFrameSetMetadataForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRTCEncodedFrameSetMetadata;
using ScopedRTCEncodedVideoFrameAdditionalMetadataForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRTCEncodedVideoFrameAdditionalMetadata;
using ScopedRTCLegacyCallbackBasedGetStatsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRTCLegacyCallbackBasedGetStats;
using ScopedRTCRtpEncodingParametersCodecForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRTCRtpEncodingParametersCodec;
using ScopedRTCRtpHeaderExtensionControlForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRTCRtpHeaderExtensionControl;
using ScopedRTCStatsRelativePacketArrivalDelayForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRTCStatsRelativePacketArrivalDelay;
using ScopedRTCSvcScalabilityModeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedRTCSvcScalabilityMode;
using ScopedSanitizerAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSanitizerAPI;
using ScopedSaveAsWithDeclarativeShadowDOMForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSaveAsWithDeclarativeShadowDOM;
using ScopedSchedulerYieldForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSchedulerYield;
using ScopedScopedCustomElementRegistryForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScopedCustomElementRegistry;
using ScopedScriptedSpeechRecognitionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScriptedSpeechRecognition;
using ScopedScriptedSpeechSynthesisForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScriptedSpeechSynthesis;
using ScopedScriptElementSupportsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScriptElementSupports;
using ScopedScriptingMediaFeatureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScriptingMediaFeature;
using ScopedScrollbarColorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScrollbarColor;
using ScopedScrollbarWidthForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScrollbarWidth;
using ScopedScrollEndEventsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScrollEndEvents;
using ScopedScrollTimelineForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScrollTimeline;
using ScopedScrollTimelineCurrentTimeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScrollTimelineCurrentTime;
using ScopedScrollTimelineOnCompositorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScrollTimelineOnCompositor;
using ScopedScrollTopLeftInteropForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedScrollTopLeftInterop;
using ScopedSecurePaymentConfirmationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSecurePaymentConfirmation;
using ScopedSecurePaymentConfirmationAllowOneActivationlessShowForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSecurePaymentConfirmationAllowOneActivationlessShow;
using ScopedSecurePaymentConfirmationDebugForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSecurePaymentConfirmationDebug;
using ScopedSecurePaymentConfirmationExtensionsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSecurePaymentConfirmationExtensions;
using ScopedSecurePaymentConfirmationOptOutForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSecurePaymentConfirmationOptOut;
using ScopedSelectHrForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSelectHr;
using ScopedSendBeaconThrowForBlobWithNonSimpleTypeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSendBeaconThrowForBlobWithNonSimpleType;
using ScopedSendMouseEventsDisabledFormControlsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSendMouseEventsDisabledFormControls;
using ScopedSensorExtraClassesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSensorExtraClasses;
using ScopedSerialForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSerial;
using ScopedSerializeViewTransitionStateInSPAForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSerializeViewTransitionStateInSPA;
using ScopedServiceWorkerBypassFetchHandlerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedServiceWorkerBypassFetchHandler;
using ScopedServiceWorkerClientLifecycleStateForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedServiceWorkerClientLifecycleState;
using ScopedServiceWorkerRaceNetworkRequestForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedServiceWorkerRaceNetworkRequest;
using ScopedServiceWorkerStaticRouterForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedServiceWorkerStaticRouter;
using ScopedSetSequentialFocusStartingPointForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSetSequentialFocusStartingPoint;
using ScopedSharedArrayBufferForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSharedArrayBuffer;
using ScopedSharedArrayBufferOnDesktopForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSharedArrayBufferOnDesktop;
using ScopedSharedArrayBufferUnrestrictedAccessAllowedForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSharedArrayBufferUnrestrictedAccessAllowed;
using ScopedSharedAutofillForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSharedAutofill;
using ScopedSharedStorageAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSharedStorageAPI;
using ScopedSharedStorageAPIM118ForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSharedStorageAPIM118;
using ScopedSharedWorkerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSharedWorker;
using ScopedSignatureBasedIntegrityForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSignatureBasedIntegrity;
using ScopedSimplifiedClearPropertyTreeChangeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSimplifiedClearPropertyTreeChange;
using ScopedSiteInitiatedMirroringForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSiteInitiatedMirroring;
using ScopedSkipAdForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSkipAd;
using ScopedSkipShadowHostWhenHoveringForTooltipForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSkipShadowHostWhenHoveringForTooltip;
using ScopedSkipTouchEventFilterForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSkipTouchEventFilter;
using ScopedSmartCardForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSmartCard;
using ScopedSmartZoomForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSmartZoom;
using ScopedSmilAutoSuspendOnLagForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSmilAutoSuspendOnLag;
using ScopedSnapBorderWidthsBeforeLayoutForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSnapBorderWidthsBeforeLayout;
using ScopedSoftNavigationHeuristicsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSoftNavigationHeuristics;
using ScopedSoftNavigationHeuristicsExposeFPAndFCPForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSoftNavigationHeuristicsExposeFPAndFCP;
using ScopedSolidColorLayersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSolidColorLayers;
using ScopedSparseObjectPaintPropertiesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSparseObjectPaintProperties;
using ScopedSpeculationRulesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSpeculationRules;
using ScopedSpeculationRulesDocumentRulesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSpeculationRulesDocumentRules;
using ScopedSpeculationRulesDocumentRulesSelectorMatchesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSpeculationRulesDocumentRulesSelectorMatches;
using ScopedSpeculationRulesEagernessForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSpeculationRulesEagerness;
using ScopedSpeculationRulesFetchFromHeaderForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSpeculationRulesFetchFromHeader;
using ScopedSpeculationRulesNoVarySearchHintForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSpeculationRulesNoVarySearchHint;
using ScopedSpeculationRulesPointerDownHeuristicsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSpeculationRulesPointerDownHeuristics;
using ScopedSpeculationRulesPointerHoverHeuristicsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSpeculationRulesPointerHoverHeuristics;
using ScopedSpeculationRulesPrefetchFutureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSpeculationRulesPrefetchFuture;
using ScopedSpeculationRulesPrefetchProxyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSpeculationRulesPrefetchProxy;
using ScopedSpeculationRulesPrefetchWithSubresourcesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSpeculationRulesPrefetchWithSubresources;
using ScopedSpeculationRulesRelativeToDocumentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSpeculationRulesRelativeToDocument;
using ScopedSrcsetMaxDensityForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSrcsetMaxDensity;
using ScopedStableBlinkFeaturesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedStableBlinkFeatures;
using ScopedStorageAccessAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedStorageAccessAPI;
using ScopedStorageAccessAPIForOriginExtensionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedStorageAccessAPIForOriginExtension;
using ScopedStorageBucketsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedStorageBuckets;
using ScopedStorageBucketsDurabilityForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedStorageBucketsDurability;
using ScopedStorageBucketsLocksForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedStorageBucketsLocks;
using ScopedStrictMimeTypesForWorkersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedStrictMimeTypesForWorkers;
using ScopedStylusHandwritingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedStylusHandwriting;
using ScopedSuggestionPickerDarkModeSupportForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSuggestionPickerDarkModeSupport;
using ScopedSvgCrossOriginAttributeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgCrossOriginAttribute;
using ScopedSvgNoPixelSnappingScaleAdjustmentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgNoPixelSnappingScaleAdjustment;
using ScopedSvgRasterOptimizationsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgRasterOptimizations;
using ScopedSvgTextFixHittestAfterScaleForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgTextFixHittestAfterScale;
using ScopedSvgTextSkipZeroLengthItemsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSvgTextSkipZeroLengthItems;
using ScopedSynthesizedKeyboardEventsForAccessibilityActionsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSynthesizedKeyboardEventsForAccessibilityActions;
using ScopedSystemWakeLockForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedSystemWakeLock;
using ScopedTestFeatureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTestFeature;
using ScopedTestFeatureDependentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTestFeatureDependent;
using ScopedTestFeatureImpliedForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTestFeatureImplied;
using ScopedTextDecoratingBoxForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTextDecoratingBox;
using ScopedTextDetectorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTextDetector;
using ScopedTextFragmentAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTextFragmentAPI;
using ScopedTextFragmentIdentifiersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTextFragmentIdentifiers;
using ScopedTextFragmentTapOpensContextMenuForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTextFragmentTapOpensContextMenu;
using ScopedTextMetricsBaselinesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTextMetricsBaselines;
using ScopedTimelineScopeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTimelineScope;
using ScopedTimerThrottlingForBackgroundTabsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTimerThrottlingForBackgroundTabs;
using ScopedTimeZoneChangeEventForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTimeZoneChangeEvent;
using ScopedTopicsAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTopicsAPI;
using ScopedTopicsDocumentAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTopicsDocumentAPI;
using ScopedTopicsXHRForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTopicsXHR;
using ScopedTouchDragAndContextMenuForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTouchDragAndContextMenu;
using ScopedTouchDragOnShortPressForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTouchDragOnShortPress;
using ScopedTouchEventFeatureDetectionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTouchEventFeatureDetection;
using ScopedTouchTextEditingRedesignForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTouchTextEditingRedesign;
using ScopedTpcdForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTpcd;
using ScopedTranslateServiceForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTranslateService;
using ScopedTrustedTypeBeforePolicyCreationEventForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTrustedTypeBeforePolicyCreationEvent;
using ScopedTrustedTypesFromLiteralForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTrustedTypesFromLiteral;
using ScopedTrustedTypesUseCodeLikeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedTrustedTypesUseCodeLike;
using ScopedUnclosedFormControlIsInvalidForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUnclosedFormControlIsInvalid;
using ScopedUnexposedTaskIdsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUnexposedTaskIds;
using ScopedUnownedAnimationsSkipCSSEventsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUnownedAnimationsSkipCSSEvents;
using ScopedUnrestrictedMeasureUserAgentSpecificMemoryForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUnrestrictedMeasureUserAgentSpecificMemory;
using ScopedUnrestrictedSharedArrayBufferForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUnrestrictedSharedArrayBuffer;
using ScopedURLAttributeFixForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedURLAttributeFix;
using ScopedURLCanParseForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedURLCanParse;
using ScopedURLPatternCompareComponentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedURLPatternCompareComponent;
using ScopedURLSearchParamsHasAndDeleteMultipleArgsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedURLSearchParamsHasAndDeleteMultipleArgs;
using ScopedUseBeginFramePresentationFeedbackForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUseBeginFramePresentationFeedback;
using ScopedUsedColorSchemeRootScrollbarsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUsedColorSchemeRootScrollbars;
using ScopedUserActivationSameOriginVisibilityForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUserActivationSameOriginVisibility;
using ScopedUserAgentClientHintForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUserAgentClientHint;
using ScopedUserValidUserInvalidForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedUserValidUserInvalid;
using ScopedV8IdleTasksForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedV8IdleTasks;
using ScopedVideoAutoFullscreenForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedVideoAutoFullscreen;
using ScopedVideoFullscreenOrientationLockForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedVideoFullscreenOrientationLock;
using ScopedVideoPlaybackQualityForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedVideoPlaybackQuality;
using ScopedVideoRotateToFullscreenForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedVideoRotateToFullscreen;
using ScopedVideoTrackGeneratorForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedVideoTrackGenerator;
using ScopedVideoTrackGeneratorInWindowForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedVideoTrackGeneratorInWindow;
using ScopedVideoTrackGeneratorInWorkerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedVideoTrackGeneratorInWorker;
using ScopedViewportHeightClientHintHeaderForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedViewportHeightClientHintHeader;
using ScopedViewportSegmentsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedViewportSegments;
using ScopedViewTransitionLayoutObjectVisualOverflowForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedViewTransitionLayoutObjectVisualOverflow;
using ScopedViewTransitionOnNavigationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedViewTransitionOnNavigation;
using ScopedVisibilityCollapseColumnForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedVisibilityCollapseColumn;
using ScopedVisibilityStateEntryForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedVisibilityStateEntry;
using ScopedWakeLockForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWakeLock;
using ScopedWarnOnContentVisibilityRenderAccessForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWarnOnContentVisibilityRenderAccess;
using ScopedWarnSandboxIneffectiveForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWarnSandboxIneffective;
using ScopedWebAnimationsAPIForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAnimationsAPI;
using ScopedWebAnimationsSVGForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAnimationsSVG;
using ScopedWebAppDarkModeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAppDarkMode;
using ScopedWebAppLaunchHandlerForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAppLaunchHandler;
using ScopedWebAppLaunchQueueForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAppLaunchQueue;
using ScopedWebAppsLockScreenForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAppsLockScreen;
using ScopedWebAppTabStripForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAppTabStrip;
using ScopedWebAppTabStripCustomizationsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAppTabStripCustomizations;
using ScopedWebAppTranslationsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAppTranslations;
using ScopedWebAppUrlHandlingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAppUrlHandling;
using ScopedWebAppWindowControlsOverlayForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAppWindowControlsOverlay;
using ScopedWebAssemblyGCForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAssemblyGC;
using ScopedWebAssemblyJSStringBuiltinsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAssemblyJSStringBuiltins;
using ScopedWebAuthForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAuth;
using ScopedWebAuthAuthenticatorAttachmentForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAuthAuthenticatorAttachment;
using ScopedWebAuthenticationDevicePublicKeyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAuthenticationDevicePublicKey;
using ScopedWebAuthenticationJSONSerializationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAuthenticationJSONSerialization;
using ScopedWebAuthenticationLargeBlobExtensionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAuthenticationLargeBlobExtension;
using ScopedWebAuthenticationPRFForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAuthenticationPRF;
using ScopedWebAuthenticationRemoteDesktopSupportForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebAuthenticationRemoteDesktopSupport;
using ScopedWebBluetoothForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebBluetooth;
using ScopedWebBluetoothGetDevicesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebBluetoothGetDevices;
using ScopedWebBluetoothScanningForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebBluetoothScanning;
using ScopedWebBluetoothWatchAdvertisementsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebBluetoothWatchAdvertisements;
using ScopedWebCodecsContentHintForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebCodecsContentHint;
using ScopedWebCryptoCurve25519ForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebCryptoCurve25519;
using ScopedWebEnvironmentIntegrityForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebEnvironmentIntegrity;
using ScopedWebFontResizeLCPForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebFontResizeLCP;
using ScopedWebGLDeveloperExtensionsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebGLDeveloperExtensions;
using ScopedWebGLDraftExtensionsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebGLDraftExtensions;
using ScopedWebGLDrawingBufferStorageForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebGLDrawingBufferStorage;
using ScopedWebGLImageChromiumForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebGLImageChromium;
using ScopedWebGPUDeveloperFeaturesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebGPUDeveloperFeatures;
using ScopedWebHIDForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebHID;
using ScopedWebHIDOnServiceWorkersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebHIDOnServiceWorkers;
using ScopedWebIdentityDigitalCredentialsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebIdentityDigitalCredentials;
using ScopedWebIDLBigIntUsesToBigIntForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebIDLBigIntUsesToBigInt;
using ScopedWebKitScrollbarStylingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebKitScrollbarStyling;
using ScopedWebNFCForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebNFC;
using ScopedWebOTPForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebOTP;
using ScopedWebOTPAssertionFeaturePolicyForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebOTPAssertionFeaturePolicy;
using ScopedWebPreferencesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebPreferences;
using ScopedWebSerialBluetoothForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebSerialBluetooth;
using ScopedWebShareForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebShare;
using ScopedWebSocketStreamForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebSocketStream;
using ScopedWebTransportCustomCertificatesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebTransportCustomCertificates;
using ScopedWebUSBForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebUSB;
using ScopedWebUSBOnDedicatedWorkersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebUSBOnDedicatedWorkers;
using ScopedWebUSBOnServiceWorkersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebUSBOnServiceWorkers;
using ScopedWebViewXRequestedWithDeprecationForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebViewXRequestedWithDeprecation;
using ScopedWebVTTRegionsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebVTTRegions;
using ScopedWebXRForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebXR;
using ScopedWebXREnabledFeaturesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebXREnabledFeatures;
using ScopedWebXRFrameRateForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebXRFrameRate;
using ScopedWebXRFrontFacingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebXRFrontFacing;
using ScopedWebXRHandInputForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebXRHandInput;
using ScopedWebXRHitTestEntityTypesForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebXRHitTestEntityTypes;
using ScopedWebXRImageTrackingForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebXRImageTracking;
using ScopedWebXRLayersForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebXRLayers;
using ScopedWebXRPlaneDetectionForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebXRPlaneDetection;
using ScopedWebXRPoseMotionDataForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWebXRPoseMotionData;
using ScopedWGIGamepadTriggerRumbleForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWGIGamepadTriggerRumble;
using ScopedWindowDefaultStatusForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWindowDefaultStatus;
using ScopedWindowPlacementFullscreenOnScreensChangeForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWindowPlacementFullscreenOnScreensChange;
using ScopedWindowPlacementPermissionAliasForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedWindowPlacementPermissionAlias;
using ScopedXMLParserMergeAdjacentCDataSectionsForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedXMLParserMergeAdjacentCDataSections;
using ScopedXYWHAndRectComputedValueForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedXYWHAndRectComputedValue;
using ScopedZeroCopyTabCaptureForTest =
    RuntimeEnabledFeaturesTestHelpers::ScopedZeroCopyTabCapture;
}  // namespace blink

#endif  // THIRD_PARTY_BLINK_RENDERER_PLATFORM_RUNTIME_ENABLED_FEATURES_TEST_HELPERS_H_
