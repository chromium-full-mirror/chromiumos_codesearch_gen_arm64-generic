// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/runtime_enabled_features.h.tmpl
// and input files:
//   ../../../../../../../home/chrome-bot/chrome_root/src/third_party/blink/renderer/platform/runtime_enabled_features.json5


#ifndef THIRD_PARTY_BLINK_RENDERER_PLATFORM_RUNTIME_ENABLED_FEATURES_H_
#define THIRD_PARTY_BLINK_RENDERER_PLATFORM_RUNTIME_ENABLED_FEATURES_H_

#include <string>

#include "base/gtest_prod_util.h"
#include "third_party/blink/public/mojom/origin_trial_feature/origin_trial_feature.mojom-blink-forward.h"
#include "third_party/blink/renderer/platform/platform_export.h"
#include "third_party/blink/renderer/platform/wtf/allocator/allocator.h"

#define ASSERT_ORIGIN_TRIAL(feature) \
  static_assert(std::is_same<decltype(::blink::RuntimeEnabledFeatures::     \
                                          feature##EnabledByRuntimeFlag()), \
                             bool>(),                                       \
                #feature " must be part of an origin trial");

namespace blink {

class RuntimeFeatureStateOverrideContext;

// A pure virtual interface for checking the availability of origin trial
// features in a context as well as whether a feature's state has been
// overridden.
class PLATFORM_EXPORT FeatureContext {
 public:
  virtual bool FeatureEnabled(mojom::blink::OriginTrialFeature) const = 0;
  virtual RuntimeFeatureStateOverrideContext*
  GetRuntimeFeatureStateOverrideContext() const = 0;
};

// A class that stores static enablers for all experimental features.

class PLATFORM_EXPORT RuntimeEnabledFeaturesBase {
  STATIC_ONLY(RuntimeEnabledFeaturesBase);
 public:
  class PLATFORM_EXPORT Backup {
   public:
    explicit Backup();
    void Restore();

   private:
    bool is_accelerated_2d_canvas_enabled_;
    bool is_accelerated_small_canvases_enabled_;
    bool is_accessibility_aria_virtual_content_enabled_;
    bool is_accessibility_expose_display_none_enabled_;
    bool is_accessibility_expose_html_element_enabled_;
    bool is_accessibility_expose_ignored_nodes_enabled_;
    bool is_accessibility_object_model_enabled_;
    bool is_accessibility_os_level_bold_text_enabled_;
    bool is_accessibility_page_zoom_enabled_;
    bool is_accessibility_serialization_size_metrics_enabled_;
    bool is_accessibility_use_ax_position_for_document_markers_enabled_;
    bool is_add_identity_in_can_make_payment_event_enabled_;
    bool is_address_space_enabled_;
    bool is_ad_interest_group_api_enabled_;
    bool is_ad_tagging_enabled_;
    bool is_align_content_for_blocks_enabled_;
    bool is_allow_content_initiated_data_url_navigations_enabled_;
    bool is_allow_ur_ns_in_iframes_enabled_;
    bool is_android_downloadable_fonts_matching_enabled_;
    bool is_animation_worklet_enabled_;
    bool is_anonymous_iframe_enabled_;
    bool is_aom_aria_relationship_properties_enabled_;
    bool is_app_title_enabled_;
    bool is_async_clipboard_implicit_permission_enabled_;
    bool is_attribution_reporting_enabled_;
    bool is_attribution_reporting_cross_app_web_enabled_;
    bool is_attribution_reporting_interface_enabled_;
    bool is_audio_context_set_sink_id_enabled_;
    bool is_audio_output_devices_enabled_;
    bool is_audio_video_tracks_enabled_;
    bool is_auto_dark_mode_enabled_;
    bool is_automation_controlled_enabled_;
    bool is_autoplay_ignores_web_audio_enabled_;
    bool is_auto_size_lazy_loaded_images_enabled_;
    bool is_avoid_caret_visible_selection_adjuster_enabled_;
    bool is_backdrop_inherit_originating_enabled_;
    bool is_backface_visibility_interop_enabled_;
    bool is_back_forward_cache_enabled_;
    bool is_back_forward_cache_experiment_http_header_enabled_;
    bool is_back_forward_cache_not_restored_reasons_enabled_;
    bool is_background_fetch_enabled_;
    bool is_barcode_detector_enabled_;
    bool is_bdi_element_dir_inheritance_enabled_;
    bool is_beforeunload_event_cancel_by_prevent_default_enabled_;
    bool is_bidi_caret_affinity_enabled_;
    bool is_blink_extension_chrome_os_enabled_;
    bool is_blink_extension_chrome_os_kiosk_enabled_;
    bool is_blink_extension_diagnostics_enabled_;
    bool is_blink_lifecycle_script_forbidden_enabled_;
    bool is_blink_runtime_call_stats_enabled_;
    bool is_blocking_focus_without_user_activation_enabled_;
    bool is_block_ruby_wrapping_inline_ruby_enabled_;
    bool is_boundary_event_dispatch_tracks_node_removal_enabled_;
    bool is_browser_verified_user_activation_keyboard_enabled_;
    bool is_browser_verified_user_activation_mouse_enabled_;
    bool is_byob_fetch_enabled_;
    bool is_cache_storage_code_cache_hint_enabled_;
    bool is_canvas_2d_canvas_filter_enabled_;
    bool is_canvas_2d_image_chromium_enabled_;
    bool is_canvas_2d_layers_enabled_;
    bool is_canvas_2d_mesh_enabled_;
    bool is_canvas_2d_scroll_path_into_view_enabled_;
    bool is_canvas_floating_point_enabled_;
    bool is_canvas_hdr_enabled_;
    bool is_canvas_image_smoothing_enabled_;
    bool is_canvas_webgpu_access_enabled_;
    bool is_capability_delegation_display_capture_request_enabled_;
    bool is_capture_controller_enabled_;
    bool is_captured_mouse_events_enabled_;
    bool is_captured_surface_control_enabled_;
    bool is_capture_handle_enabled_;
    bool is_caret_position_from_point_enabled_;
    bool is_cct_new_rfm_push_behavior_enabled_;
    bool is_check_visibility_extra_properties_enabled_;
    bool is_click_to_captured_pointer_enabled_;
    bool is_clipboard_supported_types_enabled_;
    bool is_clipboard_svg_enabled_;
    bool is_clipboard_unsanitized_content_enabled_;
    bool is_clipboard_well_formed_html_sanitization_write_enabled_;
    bool is_clip_path_geometry_box_enabled_;
    bool is_clip_path_reject_empty_paths_enabled_;
    bool is_clip_path_xywh_and_rect_enabled_;
    bool is_close_watcher_enabled_;
    bool is_coep_reflection_enabled_;
    bool is_composite_bg_color_animation_enabled_;
    bool is_composite_box_shadow_animation_enabled_;
    bool is_composite_clip_path_animation_enabled_;
    bool is_composited_selection_update_enabled_;
    bool is_composition_foreground_markers_enabled_;
    bool is_compression_dictionary_transport_enabled_;
    bool is_compression_dictionary_transport_backend_enabled_;
    bool is_computed_accessibility_info_enabled_;
    bool is_compute_pressure_enabled_;
    bool is_confirmation_of_action_enabled_;
    bool is_consolidated_movement_xy_enabled_;
    bool is_contacts_manager_enabled_;
    bool is_contacts_manager_extra_properties_enabled_;
    bool is_content_index_enabled_;
    bool is_context_menu_enabled_;
    bool is_cookie_deprecation_facilitated_testing_enabled_;
    bool is_cooperative_scheduling_enabled_;
    bool is_coop_restrict_properties_enabled_;
    bool is_cors_rfc_1918_enabled_;
    bool is_counter_style_change_shoule_collect_inlines_enabled_;
    bool is_cross_frame_performance_timeline_enabled_;
    bool is_css_anchor_positioning_enabled_;
    bool is_css_anchor_positioning_cascade_fallback_enabled_;
    bool is_css_animation_composition_enabled_;
    bool is_css_animation_delay_start_end_enabled_;
    bool is_css_at_rule_counter_style_image_symbols_enabled_;
    bool is_css_at_rule_counter_style_speak_as_descriptor_enabled_;
    bool is_css_background_clip_unprefix_enabled_;
    bool is_css_calc_simplification_and_serialization_enabled_;
    bool is_css_cap_font_units_enabled_;
    bool is_css_case_sensitive_selector_enabled_;
    bool is_css_color_contrast_enabled_;
    bool is_css_color_typed_om_enabled_;
    bool is_css_content_visibility_implies_contain_intrinsic_size_auto_enabled_;
    bool is_css_cross_fade_enabled_;
    bool is_css_custom_state_deprecated_syntax_enabled_;
    bool is_css_custom_state_new_syntax_enabled_;
    bool is_css_display_animation_enabled_;
    bool is_css_display_ruby_enabled_;
    bool is_css_dynamic_range_limit_enabled_;
    bool is_css_enumerated_custom_properties_enabled_;
    bool is_css_exponential_functions_enabled_;
    bool is_css_field_sizing_enabled_;
    bool is_css_first_letter_no_new_line_as_preceding_char_enabled_;
    bool is_css_font_size_adjust_enabled_;
    bool is_css_hex_alpha_color_enabled_;
    bool is_css_layout_api_enabled_;
    bool is_css_light_dark_colors_enabled_;
    bool is_css_linear_timing_function_enabled_;
    bool is_css_logical_overflow_enabled_;
    bool is_css_marker_nested_pseudo_element_enabled_;
    bool is_css_masking_interop_enabled_;
    bool is_css_mpc_improvements_enabled_;
    bool is_css_nesting_ident_enabled_;
    bool is_css_numeric_factory_completeness_enabled_;
    bool is_css_offset_path_basic_shapes_circle_and_ellipse_enabled_;
    bool is_css_offset_path_basic_shapes_rectangles_and_polygon_enabled_;
    bool is_css_offset_path_coord_box_enabled_;
    bool is_css_offset_path_ray_enabled_;
    bool is_css_offset_path_ray_contain_enabled_;
    bool is_css_offset_path_url_enabled_;
    bool is_css_offset_position_anchor_enabled_;
    bool is_css_overflow_media_features_enabled_;
    bool is_css_paint_api_arguments_enabled_;
    bool is_css_parser_ignore_charset_for_urls_enabled_;
    bool is_css_phrase_line_break_enabled_;
    bool is_css_position_sticky_static_scroll_position_enabled_;
    bool is_css_progress_notation_enabled_;
    bool is_css_pseudo_playing_paused_enabled_;
    bool is_css_relative_color_enabled_;
    bool is_css_resize_auto_enabled_;
    bool is_css_scope_enabled_;
    bool is_css_scroll_snap_events_enabled_;
    bool is_css_scroll_start_enabled_;
    bool is_css_scroll_state_container_queries_enabled_;
    bool is_css_selector_fragment_anchor_enabled_;
    bool is_css_sign_related_functions_enabled_;
    bool is_css_snap_changed_event_enabled_;
    bool is_css_snap_changing_event_enabled_;
    bool is_css_snap_container_queries_enabled_;
    bool is_css_spelling_grammar_errors_enabled_;
    bool is_css_stepped_value_functions_enabled_;
    bool is_css_sticky_container_queries_enabled_;
    bool is_css_supports_for_import_rules_enabled_;
    bool is_css_system_accent_color_enabled_;
    bool is_css_text_auto_space_enabled_;
    bool is_css_text_box_trim_enabled_;
    bool is_css_text_spacing_enabled_;
    bool is_css_text_spacing_trim_enabled_;
    bool is_css_text_wrap_balance_by_score_enabled_;
    bool is_css_text_wrap_pretty_enabled_;
    bool is_css_transition_discrete_enabled_;
    bool is_css_tree_scoped_timelines_enabled_;
    bool is_css_unknown_container_queries_no_selection_enabled_;
    bool is_css_update_media_feature_enabled_;
    bool is_css_user_select_contain_enabled_;
    bool is_css_variables_2_image_values_enabled_;
    bool is_css_variables_2_transform_values_enabled_;
    bool is_css_video_dynamic_range_media_queries_enabled_;
    bool is_css_view_timeline_inset_shorthand_enabled_;
    bool is_css_view_transition_class_enabled_;
    bool is_custom_elements_get_name_enabled_;
    bool is_database_enabled_;
    bool is_data_transfer_clear_string_items_enabled_;
    bool is_date_input_inline_block_enabled_;
    bool is_declarative_shadow_dom_serializable_enabled_;
    bool is_deprecated_template_shadow_root_enabled_;
    bool is_deprecate_unload_opt_out_enabled_;
    bool is_desktop_capture_disable_local_echo_control_enabled_;
    bool is_desktop_pw_as_additional_windowing_controls_enabled_;
    bool is_desktop_pw_as_sub_apps_enabled_;
    bool is_details_element_toggle_event_enabled_;
    bool is_details_styling_enabled_;
    bool is_device_attributes_enabled_;
    bool is_device_orientation_request_permission_enabled_;
    bool is_device_posture_enabled_;
    bool is_dialog_new_focus_behavior_enabled_;
    bool is_digital_goods_enabled_;
    bool is_digital_goods_v_2_1_enabled_;
    bool is_direct_sockets_enabled_;
    bool is_dirname_more_input_types_enabled_;
    bool is_disable_different_origin_subframe_dialog_suppression_enabled_;
    bool is_disable_hardware_noise_suppression_enabled_;
    bool is_disable_select_all_for_empty_text_enabled_;
    bool is_disable_third_party_session_storage_partitioning_after_general_partitioning_enabled_;
    bool is_disable_third_party_storage_partitioning_enabled_;
    bool is_dispatch_hidden_visibility_transitions_enabled_;
    bool is_display_contents_focusable_enabled_;
    bool is_display_cutout_api_enabled_;
    bool is_document_base_uri_fix_enabled_;
    bool is_document_cookie_enabled_;
    bool is_document_domain_enabled_;
    bool is_document_open_origin_alias_removal_enabled_;
    bool is_document_open_sandbox_inheritance_removal_enabled_;
    bool is_document_picture_in_picture_api_enabled_;
    bool is_document_policy_document_domain_enabled_;
    bool is_document_policy_negotiation_enabled_;
    bool is_document_policy_sync_xhr_enabled_;
    bool is_document_render_blocking_enabled_;
    bool is_document_write_enabled_;
    bool is_dom_parser_uses_html_fast_path_parser_enabled_;
    bool is_dom_parts_api_enabled_;
    bool is_dont_fire_dblclick_on_disabled_form_controls_enabled_;
    bool is_dynamic_scroll_cull_rect_expansion_enabled_;
    bool is_edit_context_enabled_;
    bool is_element_capture_enabled_;
    bool is_element_get_html_enabled_;
    bool is_element_get_inner_html_enabled_;
    bool is_empty_clipboard_read_enabled_;
    bool is_enforce_anonymity_exposure_enabled_;
    bool is_escape_lt_gt_in_attributes_enabled_;
    bool is_event_timing_interaction_count_enabled_;
    bool is_experimental_content_security_policy_features_enabled_;
    bool is_experimental_js_profiler_markers_enabled_;
    bool is_experimental_policies_enabled_;
    bool is_expose_render_time_non_tao_delayed_image_enabled_;
    bool is_extended_text_metrics_enabled_;
    bool is_extra_webgl_video_texture_metadata_enabled_;
    bool is_eye_dropper_api_enabled_;
    bool is_face_detector_enabled_;
    bool is_fake_no_alloc_direct_call_for_testing_enabled_;
    bool is_fast_position_iterator_enabled_;
    bool is_fed_cm_enabled_;
    bool is_fed_cm_authz_enabled_;
    bool is_fed_cm_auto_selected_flag_enabled_;
    bool is_fed_cm_button_mode_enabled_;
    bool is_fed_cm_disconnect_enabled_;
    bool is_fed_cm_domain_hint_enabled_;
    bool is_fed_cm_error_enabled_;
    bool is_fed_cm_id_p_registration_enabled_;
    bool is_fed_cm_idp_signin_status_enabled_;
    bool is_fed_cm_multiple_identity_providers_enabled_;
    bool is_fed_cm_selective_disclosure_enabled_;
    bool is_fenced_frames_enabled_;
    bool is_fenced_frames_api_changes_enabled_;
    bool is_fenced_frames_default_mode_enabled_;
    bool is_fenced_frames_local_unpartitioned_data_access_enabled_;
    bool is_fetch_later_api_enabled_;
    bool is_fetch_upload_streaming_enabled_;
    bool is_file_handling_enabled_;
    bool is_file_handling_icons_enabled_;
    bool is_file_system_enabled_;
    bool is_file_system_access_enabled_;
    bool is_file_system_access_api_experimental_enabled_;
    bool is_file_system_access_get_cloud_identifiers_enabled_;
    bool is_file_system_access_local_enabled_;
    bool is_file_system_access_locking_scheme_enabled_;
    bool is_file_system_access_origin_private_enabled_;
    bool is_file_system_observer_enabled_;
    bool is_fledge_enabled_;
    bool is_fledge_bidding_and_auction_server_api_enabled_;
    bool is_fledge_clear_origin_joined_ad_interest_groups_enabled_;
    bool is_fledge_direct_from_seller_signals_header_ad_slot_enabled_;
    bool is_fledge_feature_detection_enabled_;
    bool is_fledge_negative_targeting_enabled_;
    bool is_fledge_trusted_bidding_signals_slot_size_enabled_;
    bool is_fluent_overlay_scrollbars_enabled_;
    bool is_fluent_scrollbars_enabled_;
    bool is_flush_parser_before_creating_custom_elements_enabled_;
    bool is_focusgroup_enabled_;
    bool is_focus_style_invalidation_on_page_activation_enabled_;
    bool is_font_access_enabled_;
    bool is_fontations_font_backend_enabled_;
    bool is_font_matching_ct_migration_enabled_;
    bool is_font_palette_animation_enabled_;
    bool is_font_src_local_matching_enabled_;
    bool is_forced_colors_enabled_;
    bool is_forced_colors_preserve_parent_color_enabled_;
    bool is_force_eager_measure_memory_enabled_;
    bool is_force_reduce_motion_enabled_;
    bool is_force_taller_select_popup_enabled_;
    bool is_formatted_text_enabled_;
    bool is_form_control_restore_state_if_autocomplete_off_enabled_;
    bool is_form_controls_vertical_writing_mode_direction_support_enabled_;
    bool is_form_controls_vertical_writing_mode_support_enabled_;
    bool is_form_controls_vertical_writing_mode_text_support_enabled_;
    bool is_form_state_restore_callback_call_with_state_enabled_;
    bool is_fractional_scroll_offsets_enabled_;
    bool is_freeze_frames_on_visibility_enabled_;
    bool is_fullscreen_popup_windows_enabled_;
    bool is_gamepad_button_axis_events_enabled_;
    bool is_gamepad_multitouch_enabled_;
    bool is_get_all_screens_media_enabled_;
    bool is_get_display_media_enabled_;
    bool is_get_display_media_requires_user_activation_enabled_;
    bool is_get_next_sibling_position_when_last_child_enabled_;
    bool is_group_effect_enabled_;
    bool is_handwriting_recognition_enabled_;
    bool is_hanging_whitespace_does_not_depend_on_alignment_enabled_;
    bool is_has_ua_visual_transition_enabled_;
    bool is_highlight_inheritance_enabled_;
    bool is_highlight_pointer_events_enabled_;
    bool is_hit_test_opaqueness_enabled_;
    bool is_hit_test_transparency_enabled_;
    bool is_href_translate_enabled_;
    bool is_html_invoke_actions_v_2_enabled_;
    bool is_html_invoke_target_attribute_enabled_;
    bool is_html_parser_fast_path_bulk_insert_notify_enabled_;
    bool is_html_parser_yield_and_delay_often_for_testing_enabled_;
    bool is_html_popover_hint_enabled_;
    bool is_html_search_element_enabled_;
    bool is_html_select_element_show_picker_enabled_;
    bool is_html_select_list_element_enabled_;
    bool is_html_unsafe_methods_enabled_;
    bool is_implicit_root_scroller_enabled_;
    bool is_import_attributes_disallow_unknown_keys_enabled_;
    bool is_improved_xml_errors_enabled_;
    bool is_incoming_call_notifications_enabled_;
    bool is_inert_display_transition_enabled_;
    bool is_infinite_cull_rect_enabled_;
    bool is_inherit_user_modify_without_contenteditable_enabled_;
    bool is_inner_html_parser_fastpath_log_failure_enabled_;
    bool is_input_multiple_fields_ui_enabled_;
    bool is_insert_line_break_if_phrasing_content_enabled_;
    bool is_installed_app_enabled_;
    bool is_interoperable_private_attribution_enabled_;
    bool is_interrupt_composed_scrollbar_disappearance_enabled_;
    bool is_intersection_observer_scroll_margin_enabled_;
    bool is_intersection_optimization_enabled_;
    bool is_inverted_colors_enabled_;
    bool is_invisible_svg_animation_throttling_enabled_;
    bool is_java_script_compile_hints_magic_runtime_enabled_;
    bool is_keyboard_accessible_tooltip_enabled_;
    bool is_keyboard_focusable_scrollers_enabled_;
    bool is_lang_attribute_aware_form_control_ui_enabled_;
    bool is_layout_align_for_positioned_enabled_;
    bool is_layout_flex_new_row_algorithm_v_3_enabled_;
    bool is_layout_ignore_margins_for_sticky_enabled_;
    bool is_layout_ng_shape_cache_enabled_;
    bool is_lazy_initialize_media_controls_enabled_;
    bool is_lazy_load_scroll_margin_enabled_;
    bool is_lcp_animated_images_web_exposed_enabled_;
    bool is_lcp_mouseover_heuristics_enabled_;
    bool is_lcp_multiple_updates_per_element_enabled_;
    bool is_legacy_windows_d_write_font_fallback_enabled_;
    bool is_locked_mode_enabled_;
    bool is_long_animation_frame_timing_enabled_;
    bool is_long_task_from_long_animation_frame_enabled_;
    bool is_mac_fonts_deprecate_font_traits_workaround_enabled_;
    bool is_machine_learning_common_enabled_;
    bool is_machine_learning_model_loader_enabled_;
    bool is_machine_learning_neural_network_enabled_;
    bool is_managed_configuration_enabled_;
    bool is_masking_grapheme_clusters_enabled_;
    bool is_measure_memory_enabled_;
    bool is_media_capabilities_dynamic_range_enabled_;
    bool is_media_capabilities_encoding_info_enabled_;
    bool is_media_capabilities_spatial_audio_enabled_;
    bool is_media_capture_enabled_;
    bool is_media_capture_background_blur_enabled_;
    bool is_media_capture_camera_controls_enabled_;
    bool is_media_capture_configuration_change_enabled_;
    bool is_media_capture_voice_isolation_enabled_;
    bool is_media_cast_overlay_button_enabled_;
    bool is_media_controls_expand_gesture_enabled_;
    bool is_media_controls_overlay_play_button_enabled_;
    bool is_media_element_volume_greater_than_one_enabled_;
    bool is_media_engagement_bypass_autoplay_policies_enabled_;
    bool is_media_latency_hint_enabled_;
    bool is_media_query_navigation_controls_enabled_;
    bool is_media_recorder_use_media_video_encoder_enabled_;
    bool is_media_session_enabled_;
    bool is_media_session_chapter_information_enabled_;
    bool is_media_session_enter_picture_in_picture_enabled_;
    bool is_media_source_experimental_enabled_;
    bool is_media_source_extensions_for_webcodecs_enabled_;
    bool is_media_source_new_abort_and_duration_enabled_;
    bool is_media_stream_track_transfer_enabled_;
    bool is_message_port_close_event_enabled_;
    bool is_middle_click_autoscroll_enabled_;
    bool is_mobile_layout_theme_enabled_;
    bool is_model_execution_api_enabled_;
    bool is_mojo_js_enabled_;
    bool is_mojo_js_test_enabled_;
    bool is_mouse_drag_from_iframe_on_cancelled_mouse_down_enabled_;
    bool is_mouse_drag_on_cancelled_mouse_move_enabled_;
    bool is_mutation_events_enabled_;
    bool is_navigate_event_commit_behavior_enabled_;
    bool is_navigate_event_source_element_enabled_;
    bool is_navigation_activation_enabled_;
    bool is_navigation_id_enabled_;
    bool is_navigator_content_utils_enabled_;
    bool is_nested_top_layer_support_enabled_;
    bool is_net_info_constant_type_enabled_;
    bool is_net_info_downlink_max_enabled_;
    bool is_next_sibling_position_use_next_candidate_enabled_;
    bool is_no_idle_encoding_for_web_tests_enabled_;
    bool is_non_composed_enter_leave_events_enabled_;
    bool is_non_standard_appearance_values_high_usage_enabled_;
    bool is_non_standard_appearance_value_slider_vertical_enabled_;
    bool is_non_standard_appearance_values_low_usage_enabled_;
    bool is_no_offset_mapping_for_inconsistent_text_enabled_;
    bool is_notification_constructor_enabled_;
    bool is_notification_content_image_enabled_;
    bool is_notifications_enabled_;
    bool is_notification_triggers_enabled_;
    bool is_no_vary_search_prefetch_enabled_;
    bool is_observable_api_enabled_;
    bool is_off_main_thread_css_paint_enabled_;
    bool is_offscreen_canvas_commit_enabled_;
    bool is_offset_mapping_unit_variable_enabled_;
    bool is_on_device_change_enabled_;
    bool is_option_element_always_use_label_enabled_;
    bool is_orientation_event_enabled_;
    bool is_origin_isolation_header_enabled_;
    bool is_origin_policy_enabled_;
    bool is_origin_trials_sample_api_enabled_;
    bool is_origin_trials_sample_api_browser_read_write_enabled_;
    bool is_origin_trials_sample_api_dependent_enabled_;
    bool is_origin_trials_sample_api_deprecation_enabled_;
    bool is_origin_trials_sample_api_expiry_grace_period_enabled_;
    bool is_origin_trials_sample_api_expiry_grace_period_third_party_enabled_;
    bool is_origin_trials_sample_api_implied_enabled_;
    bool is_origin_trials_sample_api_invalid_os_enabled_;
    bool is_origin_trials_sample_api_navigation_enabled_;
    bool is_origin_trials_sample_api_persistent_expiry_grace_period_enabled_;
    bool is_origin_trials_sample_api_persistent_feature_enabled_;
    bool is_origin_trials_sample_api_persistent_invalid_os_enabled_;
    bool is_origin_trials_sample_api_persistent_third_party_deprecation_feature_enabled_;
    bool is_origin_trials_sample_api_third_party_enabled_;
    bool is_overscroll_customization_enabled_;
    bool is_page_freeze_opt_in_enabled_;
    bool is_page_freeze_opt_out_enabled_;
    bool is_page_margin_boxes_enabled_;
    bool is_page_popup_enabled_;
    bool is_page_reveal_event_enabled_;
    bool is_paint_under_invalidation_checking_enabled_;
    bool is_parakeet_enabled_;
    bool is_partitioned_cookies_enabled_;
    bool is_password_reveal_enabled_;
    bool is_password_strong_label_enabled_;
    bool is_pasting_blocks_svg_use_non_local_hrefs_enabled_;
    bool is_payment_app_enabled_;
    bool is_payment_handler_minimal_header_ux_enabled_;
    bool is_payment_instruments_enabled_;
    bool is_payment_method_change_event_enabled_;
    bool is_payment_request_enabled_;
    bool is_payment_request_allow_one_activationless_show_enabled_;
    bool is_payment_request_merchant_validation_event_enabled_;
    bool is_pending_beacon_api_enabled_;
    bool is_percent_based_scrolling_enabled_;
    bool is_performance_manager_instrumentation_enabled_;
    bool is_performance_mark_feature_usage_enabled_;
    bool is_performance_navigate_system_entropy_enabled_;
    bool is_periodic_background_sync_enabled_;
    bool is_per_method_can_make_payment_quota_enabled_;
    bool is_permission_element_enabled_;
    bool is_permissions_enabled_;
    bool is_permissions_request_revoke_enabled_;
    bool is_p_na_cl_enabled_;
    bool is_pointer_capture_lost_on_removal_during_capture_enabled_;
    bool is_pointer_event_device_id_enabled_;
    bool is_position_outside_tab_span_check_sibling_node_enabled_;
    bool is_precise_memory_info_enabled_;
    bool is_prefer_default_scrollbar_styles_enabled_;
    bool is_prefer_non_composited_scrolling_enabled_;
    bool is_prefers_reduced_data_enabled_;
    bool is_prefixed_video_fullscreen_enabled_;
    bool is_pre_paint_ancestors_of_missed_oof_enabled_;
    bool is_prerender_2_enabled_;
    bool is_presentation_enabled_;
    bool is_pretty_print_js_on_document_enabled_;
    bool is_prevent_reading_system_accent_color_enabled_;
    bool is_privacy_sandbox_ads_api_s_enabled_;
    bool is_private_aggregation_auction_report_buyer_debug_mode_config_enabled_;
    bool is_private_network_access_non_secure_contexts_allowed_enabled_;
    bool is_private_network_access_null_ip_address_enabled_;
    bool is_private_network_access_permission_prompt_enabled_;
    bool is_private_state_tokens_enabled_;
    bool is_private_state_tokens_always_allow_issuance_enabled_;
    bool is_push_messaging_enabled_;
    bool is_push_messaging_subscription_change_enabled_;
    bool is_quick_intensive_wake_up_throttling_after_loading_enabled_;
    bool is_quota_change_enabled_;
    bool is_readable_stream_tee_clone_for_branch_2_enabled_;
    bool is_reduce_accept_language_enabled_;
    bool is_reduce_cookie_ip_cs_enabled_;
    bool is_reduce_user_agent_android_version_device_model_enabled_;
    bool is_reduce_user_agent_minor_version_enabled_;
    bool is_reduce_user_agent_platform_os_cpu_enabled_;
    bool is_region_capture_enabled_;
    bool is_remote_playback_enabled_;
    bool is_remote_playback_backend_enabled_;
    bool is_remove_dangling_markup_in_target_enabled_;
    bool is_remove_data_url_in_svg_use_enabled_;
    bool is_remove_mobile_viewport_double_tap_enabled_;
    bool is_render_blocking_inline_module_script_enabled_;
    bool is_render_blocking_status_enabled_;
    bool is_render_priority_attribute_enabled_;
    bool is_report_visible_line_bounds_enabled_;
    bool is_resource_timing_content_type_enabled_;
    bool is_resource_timing_use_cors_for_body_sizes_enabled_;
    bool is_restrict_gamepad_access_enabled_;
    bool is_rewind_floats_enabled_;
    bool is_rtc_audio_jitter_buffer_max_packets_enabled_;
    bool is_rtc_encoded_audio_frame_abs_capture_time_enabled_;
    bool is_rtc_encoded_frame_set_metadata_enabled_;
    bool is_rtc_encoded_video_frame_additional_metadata_enabled_;
    bool is_rtc_legacy_callback_based_get_stats_enabled_;
    bool is_rtc_rtp_encoding_parameters_codec_enabled_;
    bool is_rtc_rtp_header_extension_control_enabled_;
    bool is_rtc_stats_relative_packet_arrival_delay_enabled_;
    bool is_rtc_svc_scalability_mode_enabled_;
    bool is_ruby_inlinify_enabled_;
    bool is_ruby_simple_pairing_enabled_;
    bool is_run_microtask_before_xml_custom_element_enabled_;
    bool is_sanitizer_api_enabled_;
    bool is_scheduler_yield_enabled_;
    bool is_scoped_custom_element_registry_enabled_;
    bool is_scripted_speech_recognition_enabled_;
    bool is_scripted_speech_synthesis_enabled_;
    bool is_scrollbar_color_enabled_;
    bool is_scrollbar_width_enabled_;
    bool is_scroll_end_events_enabled_;
    bool is_scroll_timeline_enabled_;
    bool is_scroll_timeline_current_time_enabled_;
    bool is_scroll_timeline_on_compositor_enabled_;
    bool is_scroll_top_left_interop_enabled_;
    bool is_secure_payment_confirmation_enabled_;
    bool is_secure_payment_confirmation_allow_one_activationless_show_enabled_;
    bool is_secure_payment_confirmation_debug_enabled_;
    bool is_secure_payment_confirmation_extensions_enabled_;
    bool is_secure_payment_confirmation_opt_out_enabled_;
    bool is_select_hr_enabled_;
    bool is_send_beacon_throw_for_blob_with_non_simple_type_enabled_;
    bool is_sensor_extra_classes_enabled_;
    bool is_serial_enabled_;
    bool is_serialize_view_transition_state_in_spa_enabled_;
    bool is_service_worker_bypass_fetch_handler_enabled_;
    bool is_service_worker_client_lifecycle_state_enabled_;
    bool is_service_worker_race_network_request_enabled_;
    bool is_service_worker_static_router_enabled_;
    bool is_set_sequential_focus_starting_point_enabled_;
    bool is_shadow_root_attachment_new_behavior_enabled_;
    bool is_shadow_root_clonable_enabled_;
    bool is_shared_array_buffer_enabled_;
    bool is_shared_array_buffer_on_desktop_enabled_;
    bool is_shared_array_buffer_unrestricted_access_allowed_enabled_;
    bool is_shared_autofill_enabled_;
    bool is_shared_storage_api_enabled_;
    bool is_shared_storage_api_m_118_enabled_;
    bool is_shared_worker_enabled_;
    bool is_signature_based_integrity_enabled_;
    bool is_site_initiated_mirroring_enabled_;
    bool is_skip_ad_enabled_;
    bool is_skip_touch_event_filter_enabled_;
    bool is_smart_card_enabled_;
    bool is_smart_zoom_enabled_;
    bool is_smil_auto_suspend_on_lag_enabled_;
    bool is_snap_border_widths_before_layout_enabled_;
    bool is_soft_navigation_detection_enabled_;
    bool is_soft_navigation_heuristics_enabled_;
    bool is_soft_navigation_heuristics_expose_fp_and_fcp_enabled_;
    bool is_sparse_object_paint_properties_enabled_;
    bool is_speculation_rules_document_rules_enabled_;
    bool is_speculation_rules_document_rules_selector_matches_enabled_;
    bool is_speculation_rules_eagerness_enabled_;
    bool is_speculation_rules_fetch_from_header_enabled_;
    bool is_speculation_rules_implicit_source_enabled_;
    bool is_speculation_rules_no_vary_search_hint_enabled_;
    bool is_speculation_rules_no_vary_search_hint_shipped_by_default_enabled_;
    bool is_speculation_rules_pointer_down_heuristics_enabled_;
    bool is_speculation_rules_pointer_hover_heuristics_enabled_;
    bool is_speculation_rules_prefetch_future_enabled_;
    bool is_speculation_rules_prefetch_with_subresources_enabled_;
    bool is_speculation_rules_relative_to_document_enabled_;
    bool is_spell_checker_replace_range_use_insert_text_enabled_;
    bool is_srcset_max_density_enabled_;
    bool is_stable_blink_features_enabled_;
    bool is_standardized_browser_zoom_enabled_;
    bool is_storage_access_api_beyond_cookies_enabled_;
    bool is_storage_buckets_enabled_;
    bool is_storage_buckets_durability_enabled_;
    bool is_storage_buckets_locks_enabled_;
    bool is_strict_mime_types_for_workers_enabled_;
    bool is_stylable_select_enabled_;
    bool is_stylus_handwriting_enabled_;
    bool is_suggestion_picker_dark_mode_support_enabled_;
    bool is_svg_cross_origin_attribute_enabled_;
    bool is_svg_no_pixel_snapping_scale_adjustment_enabled_;
    bool is_synthesized_keyboard_events_for_accessibility_actions_enabled_;
    bool is_system_wake_lock_enabled_;
    bool is_test_feature_enabled_;
    bool is_test_feature_dependent_enabled_;
    bool is_test_feature_implied_enabled_;
    bool is_text_decorating_box_enabled_;
    bool is_text_detector_enabled_;
    bool is_text_fragment_api_enabled_;
    bool is_text_fragment_identifiers_enabled_;
    bool is_text_fragment_tap_opens_context_menu_enabled_;
    bool is_text_metrics_baselines_enabled_;
    bool is_timeline_scope_enabled_;
    bool is_timer_throttling_for_background_tabs_enabled_;
    bool is_time_zone_change_event_enabled_;
    bool is_topics_api_enabled_;
    bool is_topics_document_api_enabled_;
    bool is_top_level_tpcd_enabled_;
    bool is_touch_drag_and_context_menu_enabled_;
    bool is_touch_drag_on_short_press_enabled_;
    bool is_touch_event_feature_detection_enabled_;
    bool is_touch_text_editing_redesign_enabled_;
    bool is_tpcd_enabled_;
    bool is_translate_service_enabled_;
    bool is_trusted_type_before_policy_creation_event_enabled_;
    bool is_trusted_types_from_literal_enabled_;
    bool is_trusted_types_use_code_like_enabled_;
    bool is_unclosed_form_control_is_invalid_enabled_;
    bool is_unexposed_task_ids_enabled_;
    bool is_unowned_animations_skip_css_events_enabled_;
    bool is_unrestricted_measure_user_agent_specific_memory_enabled_;
    bool is_unrestricted_shared_array_buffer_enabled_;
    bool is_unrestricted_usb_enabled_;
    bool is_url_attribute_fix_enabled_;
    bool is_url_pattern_compare_component_enabled_;
    bool is_url_pattern_has_reg_exp_groups_enabled_;
    bool is_url_pattern_regexp_unicode_sets_mode_enabled_;
    bool is_url_pattern_wildcard_more_often_enabled_;
    bool is_url_search_params_has_and_delete_multiple_args_enabled_;
    bool is_use_begin_frame_presentation_feedback_enabled_;
    bool is_used_color_scheme_root_scrollbars_enabled_;
    bool is_user_activation_same_origin_visibility_enabled_;
    bool is_user_valid_user_invalid_enabled_;
    bool is_v8_idle_tasks_enabled_;
    bool is_video_auto_fullscreen_enabled_;
    bool is_video_fullscreen_orientation_lock_enabled_;
    bool is_video_playback_quality_enabled_;
    bool is_video_rotate_to_fullscreen_enabled_;
    bool is_video_track_generator_enabled_;
    bool is_video_track_generator_in_window_enabled_;
    bool is_video_track_generator_in_worker_enabled_;
    bool is_viewport_height_client_hint_header_enabled_;
    bool is_viewport_segments_enabled_;
    bool is_view_transition_on_navigation_enabled_;
    bool is_view_transition_types_enabled_;
    bool is_visibility_collapse_column_enabled_;
    bool is_wake_lock_enabled_;
    bool is_warn_on_content_visibility_render_access_enabled_;
    bool is_web_animations_svg_enabled_;
    bool is_web_app_dark_mode_enabled_;
    bool is_web_app_launch_handler_enabled_;
    bool is_web_app_launch_queue_enabled_;
    bool is_web_app_scope_extensions_enabled_;
    bool is_web_apps_lock_screen_enabled_;
    bool is_web_app_tab_strip_enabled_;
    bool is_web_app_tab_strip_customizations_enabled_;
    bool is_web_app_translations_enabled_;
    bool is_web_app_url_handling_enabled_;
    bool is_web_assembly_js_promise_integration_enabled_;
    bool is_web_assembly_js_string_builtins_enabled_;
    bool is_web_auth_enabled_;
    bool is_web_auth_allow_create_in_cross_origin_frame_enabled_;
    bool is_web_auth_authenticator_attachment_enabled_;
    bool is_web_authentication_hints_enabled_;
    bool is_web_authentication_js_on_serialization_enabled_;
    bool is_web_authentication_large_blob_extension_enabled_;
    bool is_web_authentication_prf_enabled_;
    bool is_web_authentication_remote_desktop_support_enabled_;
    bool is_web_authentication_supplemental_pub_keys_enabled_;
    bool is_web_bluetooth_enabled_;
    bool is_web_bluetooth_get_devices_enabled_;
    bool is_web_bluetooth_scanning_enabled_;
    bool is_web_bluetooth_watch_advertisements_enabled_;
    bool is_webcodecs_content_hint_enabled_;
    bool is_webcodecs_copy_to_rgb_enabled_;
    bool is_web_crypto_curve_25519_enabled_;
    bool is_web_font_resize_lcp_enabled_;
    bool is_webgl_developer_extensions_enabled_;
    bool is_webgl_draft_extensions_enabled_;
    bool is_webgl_drawing_buffer_storage_enabled_;
    bool is_webgl_image_chromium_enabled_;
    bool is_webgpu_enabled_;
    bool is_webgpu_developer_features_enabled_;
    bool is_webgpu_experimental_features_enabled_;
    bool is_web_hid_enabled_;
    bool is_web_hid_on_service_workers_enabled_;
    bool is_web_identity_digital_credentials_enabled_;
    bool is_web_idl_big_int_uses_to_big_int_enabled_;
    bool is_web_nfc_enabled_;
    bool is_web_otp_enabled_;
    bool is_web_otp_assertion_feature_policy_enabled_;
    bool is_web_preferences_enabled_;
    bool is_web_printing_enabled_;
    bool is_web_serial_bluetooth_enabled_;
    bool is_web_share_enabled_;
    bool is_websocket_stream_enabled_;
    bool is_web_transport_custom_certificates_enabled_;
    bool is_web_usb_enabled_;
    bool is_web_usb_on_dedicated_workers_enabled_;
    bool is_web_usb_on_service_workers_enabled_;
    bool is_web_view_xr_equested_with_deprecation_enabled_;
    bool is_web_vtt_regions_enabled_;
    bool is_web_xr_enabled_;
    bool is_web_xr_enabled_features_enabled_;
    bool is_web_xr_frame_rate_enabled_;
    bool is_web_xr_front_facing_enabled_;
    bool is_web_xr_hand_input_enabled_;
    bool is_web_xr_hit_test_entity_types_enabled_;
    bool is_web_xr_image_tracking_enabled_;
    bool is_web_xr_layers_enabled_;
    bool is_web_xr_plane_detection_enabled_;
    bool is_web_xr_pose_motion_data_enabled_;
    bool is_wgi_gamepad_trigger_rumble_enabled_;
    bool is_window_default_status_enabled_;
    bool is_window_placement_fullscreen_on_screens_change_enabled_;
    bool is_window_placement_permission_alias_enabled_;
    bool is_xml_parser_merge_adjacent_c_data_sections_enabled_;
    bool is_xywh_and_rect_computed_value_enabled_;
    bool is_zero_copy_tab_capture_enabled_;
  };

  static bool Accelerated2dCanvasEnabled() {
    return is_accelerated_2d_canvas_enabled_;
  }

  static bool Accelerated2dCanvasEnabled(const FeatureContext*) { return Accelerated2dCanvasEnabled(); }

  static bool AcceleratedSmallCanvasesEnabled() {
    return is_accelerated_small_canvases_enabled_;
  }

  static bool AcceleratedSmallCanvasesEnabled(const FeatureContext*) { return AcceleratedSmallCanvasesEnabled(); }

  static bool AccessibilityAriaVirtualContentEnabled() {
    return is_accessibility_aria_virtual_content_enabled_;
  }

  static bool AccessibilityAriaVirtualContentEnabled(const FeatureContext*) { return AccessibilityAriaVirtualContentEnabled(); }

  static bool AccessibilityExposeDisplayNoneEnabled() {
    return is_accessibility_expose_display_none_enabled_;
  }

  static bool AccessibilityExposeDisplayNoneEnabled(const FeatureContext*) { return AccessibilityExposeDisplayNoneEnabled(); }

  static bool AccessibilityExposeHTMLElementEnabled() {
    return is_accessibility_expose_html_element_enabled_;
  }

  static bool AccessibilityExposeHTMLElementEnabled(const FeatureContext*) { return AccessibilityExposeHTMLElementEnabled(); }

  static bool AccessibilityExposeIgnoredNodesEnabled() {
    return is_accessibility_expose_ignored_nodes_enabled_;
  }

  static bool AccessibilityExposeIgnoredNodesEnabled(const FeatureContext*) { return AccessibilityExposeIgnoredNodesEnabled(); }

  static bool AccessibilityObjectModelEnabled() {
    return is_accessibility_object_model_enabled_;
  }

  static bool AccessibilityObjectModelEnabled(const FeatureContext*) { return AccessibilityObjectModelEnabled(); }

  static bool AccessibilityOSLevelBoldTextEnabled() {
    return is_accessibility_os_level_bold_text_enabled_;
  }

  static bool AccessibilityOSLevelBoldTextEnabled(const FeatureContext*) { return AccessibilityOSLevelBoldTextEnabled(); }

  static bool AccessibilityPageZoomEnabled() {
    return is_accessibility_page_zoom_enabled_;
  }

  static bool AccessibilityPageZoomEnabled(const FeatureContext*) { return AccessibilityPageZoomEnabled(); }

  static bool AccessibilitySerializationSizeMetricsEnabled() {
    return is_accessibility_serialization_size_metrics_enabled_;
  }

  static bool AccessibilitySerializationSizeMetricsEnabled(const FeatureContext*) { return AccessibilitySerializationSizeMetricsEnabled(); }

  static bool AccessibilityUseAXPositionForDocumentMarkersEnabled() {
    return is_accessibility_use_ax_position_for_document_markers_enabled_;
  }

  static bool AccessibilityUseAXPositionForDocumentMarkersEnabled(const FeatureContext*) { return AccessibilityUseAXPositionForDocumentMarkersEnabled(); }

  static bool AddressSpaceEnabled() {
    if (CorsRFC1918Enabled())
      return true;
    return is_address_space_enabled_;
  }

  static bool AddressSpaceEnabled(const FeatureContext*) { return AddressSpaceEnabled(); }

  static bool AdTaggingEnabled() {
    return is_ad_tagging_enabled_;
  }

  static bool AdTaggingEnabled(const FeatureContext*) { return AdTaggingEnabled(); }

  static bool AlignContentForBlocksEnabled() {
    return is_align_content_for_blocks_enabled_;
  }

  static bool AlignContentForBlocksEnabled(const FeatureContext*) { return AlignContentForBlocksEnabled(); }

  static bool AllowContentInitiatedDataUrlNavigationsEnabled() {
    return is_allow_content_initiated_data_url_navigations_enabled_;
  }

  static bool AllowContentInitiatedDataUrlNavigationsEnabled(const FeatureContext*) { return AllowContentInitiatedDataUrlNavigationsEnabled(); }

  static bool AllowURNsInIframesEnabled() {
    return is_allow_ur_ns_in_iframes_enabled_;
  }

  static bool AllowURNsInIframesEnabled(const FeatureContext*) { return AllowURNsInIframesEnabled(); }

  static bool AndroidDownloadableFontsMatchingEnabled() {
    return is_android_downloadable_fonts_matching_enabled_;
  }

  static bool AndroidDownloadableFontsMatchingEnabled(const FeatureContext*) { return AndroidDownloadableFontsMatchingEnabled(); }

  static bool AnimationWorkletEnabled() {
    return is_animation_worklet_enabled_;
  }

  static bool AnimationWorkletEnabled(const FeatureContext*) { return AnimationWorkletEnabled(); }

  static bool AnonymousIframeEnabled() {
    return is_anonymous_iframe_enabled_;
  }

  static bool AnonymousIframeEnabled(const FeatureContext*) { return AnonymousIframeEnabled(); }

  static bool AOMAriaRelationshipPropertiesEnabled() {
    return is_aom_aria_relationship_properties_enabled_;
  }

  static bool AOMAriaRelationshipPropertiesEnabled(const FeatureContext*) { return AOMAriaRelationshipPropertiesEnabled(); }

  static bool AsyncClipboardImplicitPermissionEnabled() {
    return is_async_clipboard_implicit_permission_enabled_;
  }

  static bool AsyncClipboardImplicitPermissionEnabled(const FeatureContext*) { return AsyncClipboardImplicitPermissionEnabled(); }

  static bool AudioContextSetSinkIdEnabled() {
    return is_audio_context_set_sink_id_enabled_;
  }

  static bool AudioContextSetSinkIdEnabled(const FeatureContext*) { return AudioContextSetSinkIdEnabled(); }

  static bool AudioOutputDevicesEnabled() {
    return is_audio_output_devices_enabled_;
  }

  static bool AudioOutputDevicesEnabled(const FeatureContext*) { return AudioOutputDevicesEnabled(); }

  static bool AudioVideoTracksEnabled() {
    return is_audio_video_tracks_enabled_;
  }

  static bool AudioVideoTracksEnabled(const FeatureContext*) { return AudioVideoTracksEnabled(); }

  static bool AutomationControlledEnabled() {
    return is_automation_controlled_enabled_;
  }

  static bool AutomationControlledEnabled(const FeatureContext*) { return AutomationControlledEnabled(); }

  static bool AutoplayIgnoresWebAudioEnabled() {
    return is_autoplay_ignores_web_audio_enabled_;
  }

  static bool AutoplayIgnoresWebAudioEnabled(const FeatureContext*) { return AutoplayIgnoresWebAudioEnabled(); }

  static bool AutoSizeLazyLoadedImagesEnabled() {
    return is_auto_size_lazy_loaded_images_enabled_;
  }

  static bool AutoSizeLazyLoadedImagesEnabled(const FeatureContext*) { return AutoSizeLazyLoadedImagesEnabled(); }

  static bool AvoidCaretVisibleSelectionAdjusterEnabled() {
    return is_avoid_caret_visible_selection_adjuster_enabled_;
  }

  static bool AvoidCaretVisibleSelectionAdjusterEnabled(const FeatureContext*) { return AvoidCaretVisibleSelectionAdjusterEnabled(); }

  static bool BackdropInheritOriginatingEnabled() {
    return is_backdrop_inherit_originating_enabled_;
  }

  static bool BackdropInheritOriginatingEnabled(const FeatureContext*) { return BackdropInheritOriginatingEnabled(); }

  static bool BackfaceVisibilityInteropEnabled() {
    return is_backface_visibility_interop_enabled_;
  }

  static bool BackfaceVisibilityInteropEnabled(const FeatureContext*) { return BackfaceVisibilityInteropEnabled(); }

  static bool BackForwardCacheEnabled() {
    return is_back_forward_cache_enabled_;
  }

  static bool BackForwardCacheEnabled(const FeatureContext*) { return BackForwardCacheEnabled(); }

  static bool BackgroundFetchEnabled() {
    return is_background_fetch_enabled_;
  }

  static bool BackgroundFetchEnabled(const FeatureContext*) { return BackgroundFetchEnabled(); }

  static bool BarcodeDetectorEnabled() {
    return is_barcode_detector_enabled_;
  }

  static bool BarcodeDetectorEnabled(const FeatureContext*) { return BarcodeDetectorEnabled(); }

  static bool BdiElementDirInheritanceEnabled() {
    return is_bdi_element_dir_inheritance_enabled_;
  }

  static bool BdiElementDirInheritanceEnabled(const FeatureContext*) { return BdiElementDirInheritanceEnabled(); }

  static bool BeforeunloadEventCancelByPreventDefaultEnabled() {
    return is_beforeunload_event_cancel_by_prevent_default_enabled_;
  }

  static bool BeforeunloadEventCancelByPreventDefaultEnabled(const FeatureContext*) { return BeforeunloadEventCancelByPreventDefaultEnabled(); }

  static bool BidiCaretAffinityEnabled() {
    return is_bidi_caret_affinity_enabled_;
  }

  static bool BidiCaretAffinityEnabled(const FeatureContext*) { return BidiCaretAffinityEnabled(); }

  static bool BlinkExtensionChromeOSEnabled() {
    return is_blink_extension_chrome_os_enabled_;
  }

  static bool BlinkExtensionChromeOSEnabled(const FeatureContext*);

  static bool BlinkExtensionChromeOSKioskEnabled() {
    if (!BlinkExtensionChromeOSEnabled())
      return false;
    return is_blink_extension_chrome_os_kiosk_enabled_;
  }

  static bool BlinkExtensionChromeOSKioskEnabled(const FeatureContext*);

  static bool BlinkExtensionDiagnosticsEnabled() {
    if (!BlinkExtensionChromeOSEnabled())
      return false;
    return is_blink_extension_diagnostics_enabled_;
  }

  static bool BlinkExtensionDiagnosticsEnabled(const FeatureContext*);

  static bool BlinkLifecycleScriptForbiddenEnabled() {
    return is_blink_lifecycle_script_forbidden_enabled_;
  }

  static bool BlinkLifecycleScriptForbiddenEnabled(const FeatureContext*) { return BlinkLifecycleScriptForbiddenEnabled(); }

  static bool BlinkRuntimeCallStatsEnabled() {
    return is_blink_runtime_call_stats_enabled_;
  }

  static bool BlinkRuntimeCallStatsEnabled(const FeatureContext*) { return BlinkRuntimeCallStatsEnabled(); }

  static bool BlockingFocusWithoutUserActivationEnabled() {
    return is_blocking_focus_without_user_activation_enabled_;
  }

  static bool BlockingFocusWithoutUserActivationEnabled(const FeatureContext*) { return BlockingFocusWithoutUserActivationEnabled(); }

  static bool BlockRubyWrappingInlineRubyEnabled() {
    return is_block_ruby_wrapping_inline_ruby_enabled_;
  }

  static bool BlockRubyWrappingInlineRubyEnabled(const FeatureContext*) { return BlockRubyWrappingInlineRubyEnabled(); }

  static bool BoundaryEventDispatchTracksNodeRemovalEnabled() {
    return is_boundary_event_dispatch_tracks_node_removal_enabled_;
  }

  static bool BoundaryEventDispatchTracksNodeRemovalEnabled(const FeatureContext*) { return BoundaryEventDispatchTracksNodeRemovalEnabled(); }

  static bool BrowserVerifiedUserActivationKeyboardEnabled() {
    return is_browser_verified_user_activation_keyboard_enabled_;
  }

  static bool BrowserVerifiedUserActivationKeyboardEnabled(const FeatureContext*) { return BrowserVerifiedUserActivationKeyboardEnabled(); }

  static bool BrowserVerifiedUserActivationMouseEnabled() {
    return is_browser_verified_user_activation_mouse_enabled_;
  }

  static bool BrowserVerifiedUserActivationMouseEnabled(const FeatureContext*) { return BrowserVerifiedUserActivationMouseEnabled(); }

  static bool ByobFetchEnabled() {
    return is_byob_fetch_enabled_;
  }

  static bool ByobFetchEnabled(const FeatureContext*) { return ByobFetchEnabled(); }

  static bool Canvas2dCanvasFilterEnabled() {
    return is_canvas_2d_canvas_filter_enabled_;
  }

  static bool Canvas2dCanvasFilterEnabled(const FeatureContext*) { return Canvas2dCanvasFilterEnabled(); }

  static bool Canvas2dImageChromiumEnabled() {
    return is_canvas_2d_image_chromium_enabled_;
  }

  static bool Canvas2dImageChromiumEnabled(const FeatureContext*) { return Canvas2dImageChromiumEnabled(); }

  static bool Canvas2dLayersEnabled() {
    return is_canvas_2d_layers_enabled_;
  }

  static bool Canvas2dLayersEnabled(const FeatureContext*) { return Canvas2dLayersEnabled(); }

  static bool Canvas2dMeshEnabled() {
    return is_canvas_2d_mesh_enabled_;
  }

  static bool Canvas2dMeshEnabled(const FeatureContext*) { return Canvas2dMeshEnabled(); }

  static bool Canvas2dScrollPathIntoViewEnabled() {
    return is_canvas_2d_scroll_path_into_view_enabled_;
  }

  static bool Canvas2dScrollPathIntoViewEnabled(const FeatureContext*) { return Canvas2dScrollPathIntoViewEnabled(); }

  static bool CanvasFloatingPointEnabled() {
    return is_canvas_floating_point_enabled_;
  }

  static bool CanvasFloatingPointEnabled(const FeatureContext*) { return CanvasFloatingPointEnabled(); }

  static bool CanvasHDREnabled() {
    return is_canvas_hdr_enabled_;
  }

  static bool CanvasHDREnabled(const FeatureContext*) { return CanvasHDREnabled(); }

  static bool CanvasImageSmoothingEnabled() {
    return is_canvas_image_smoothing_enabled_;
  }

  static bool CanvasImageSmoothingEnabled(const FeatureContext*) { return CanvasImageSmoothingEnabled(); }

  static bool CanvasWebGPUAccessEnabled() {
    return is_canvas_webgpu_access_enabled_;
  }

  static bool CanvasWebGPUAccessEnabled(const FeatureContext*) { return CanvasWebGPUAccessEnabled(); }

  static bool CapabilityDelegationDisplayCaptureRequestEnabled() {
    return is_capability_delegation_display_capture_request_enabled_;
  }

  static bool CapabilityDelegationDisplayCaptureRequestEnabled(const FeatureContext*) { return CapabilityDelegationDisplayCaptureRequestEnabled(); }

  static bool CaptureControllerEnabled() {
    return is_capture_controller_enabled_;
  }

  static bool CaptureControllerEnabled(const FeatureContext*) { return CaptureControllerEnabled(); }

  static bool CapturedMouseEventsEnabled() {
    if (!CaptureControllerEnabled())
      return false;
    return is_captured_mouse_events_enabled_;
  }

  static bool CapturedMouseEventsEnabled(const FeatureContext*) { return CapturedMouseEventsEnabled(); }

  static bool CaptureHandleEnabled() {
    if (!GetDisplayMediaEnabled())
      return false;
    return is_capture_handle_enabled_;
  }

  static bool CaptureHandleEnabled(const FeatureContext*) { return CaptureHandleEnabled(); }

  static bool CaretPositionFromPointEnabled() {
    return is_caret_position_from_point_enabled_;
  }

  static bool CaretPositionFromPointEnabled(const FeatureContext*) { return CaretPositionFromPointEnabled(); }

  static bool CCTNewRFMPushBehaviorEnabled() {
    return is_cct_new_rfm_push_behavior_enabled_;
  }

  static bool CCTNewRFMPushBehaviorEnabled(const FeatureContext*) { return CCTNewRFMPushBehaviorEnabled(); }

  static bool CheckVisibilityExtraPropertiesEnabled() {
    return is_check_visibility_extra_properties_enabled_;
  }

  static bool CheckVisibilityExtraPropertiesEnabled(const FeatureContext*) { return CheckVisibilityExtraPropertiesEnabled(); }

  static bool ClickToCapturedPointerEnabled() {
    return is_click_to_captured_pointer_enabled_;
  }

  static bool ClickToCapturedPointerEnabled(const FeatureContext*) { return ClickToCapturedPointerEnabled(); }

  static bool ClipboardSupportedTypesEnabled() {
    return is_clipboard_supported_types_enabled_;
  }

  static bool ClipboardSupportedTypesEnabled(const FeatureContext*) { return ClipboardSupportedTypesEnabled(); }

  static bool ClipboardSvgEnabled() {
    return is_clipboard_svg_enabled_;
  }

  static bool ClipboardSvgEnabled(const FeatureContext*) { return ClipboardSvgEnabled(); }

  static bool ClipboardUnsanitizedContentEnabled() {
    return is_clipboard_unsanitized_content_enabled_;
  }

  static bool ClipboardUnsanitizedContentEnabled(const FeatureContext*) { return ClipboardUnsanitizedContentEnabled(); }

  static bool ClipboardWellFormedHtmlSanitizationWriteEnabled() {
    return is_clipboard_well_formed_html_sanitization_write_enabled_;
  }

  static bool ClipboardWellFormedHtmlSanitizationWriteEnabled(const FeatureContext*) { return ClipboardWellFormedHtmlSanitizationWriteEnabled(); }

  static bool ClipPathGeometryBoxEnabled() {
    return is_clip_path_geometry_box_enabled_;
  }

  static bool ClipPathGeometryBoxEnabled(const FeatureContext*) { return ClipPathGeometryBoxEnabled(); }

  static bool ClipPathRejectEmptyPathsEnabled() {
    return is_clip_path_reject_empty_paths_enabled_;
  }

  static bool ClipPathRejectEmptyPathsEnabled(const FeatureContext*) { return ClipPathRejectEmptyPathsEnabled(); }

  static bool ClipPathXYWHAndRectEnabled() {
    return is_clip_path_xywh_and_rect_enabled_;
  }

  static bool ClipPathXYWHAndRectEnabled(const FeatureContext*) { return ClipPathXYWHAndRectEnabled(); }

  static bool CloseWatcherEnabled() {
    return is_close_watcher_enabled_;
  }

  static bool CloseWatcherEnabled(const FeatureContext*) { return CloseWatcherEnabled(); }

  static bool CoepReflectionEnabled() {
    return is_coep_reflection_enabled_;
  }

  static bool CoepReflectionEnabled(const FeatureContext*) { return CoepReflectionEnabled(); }

  static bool CompositeBGColorAnimationEnabled() {
    return is_composite_bg_color_animation_enabled_;
  }

  static bool CompositeBGColorAnimationEnabled(const FeatureContext*) { return CompositeBGColorAnimationEnabled(); }

  static bool CompositeBoxShadowAnimationEnabled() {
    return is_composite_box_shadow_animation_enabled_;
  }

  static bool CompositeBoxShadowAnimationEnabled(const FeatureContext*) { return CompositeBoxShadowAnimationEnabled(); }

  static bool CompositeClipPathAnimationEnabled() {
    return is_composite_clip_path_animation_enabled_;
  }

  static bool CompositeClipPathAnimationEnabled(const FeatureContext*) { return CompositeClipPathAnimationEnabled(); }

  static bool CompositedSelectionUpdateEnabled() {
    return is_composited_selection_update_enabled_;
  }

  static bool CompositedSelectionUpdateEnabled(const FeatureContext*) { return CompositedSelectionUpdateEnabled(); }

  static bool CompositionForegroundMarkersEnabled() {
    return is_composition_foreground_markers_enabled_;
  }

  static bool CompositionForegroundMarkersEnabled(const FeatureContext*) { return CompositionForegroundMarkersEnabled(); }

  static bool CompressionDictionaryTransportBackendEnabled() {
    return is_compression_dictionary_transport_backend_enabled_;
  }

  static bool CompressionDictionaryTransportBackendEnabled(const FeatureContext*) { return CompressionDictionaryTransportBackendEnabled(); }

  static bool ComputedAccessibilityInfoEnabled() {
    return is_computed_accessibility_info_enabled_;
  }

  static bool ComputedAccessibilityInfoEnabled(const FeatureContext*) { return ComputedAccessibilityInfoEnabled(); }

  static bool ConfirmationOfActionEnabled() {
    return is_confirmation_of_action_enabled_;
  }

  static bool ConfirmationOfActionEnabled(const FeatureContext*) { return ConfirmationOfActionEnabled(); }

  static bool ConsolidatedMovementXYEnabled() {
    return is_consolidated_movement_xy_enabled_;
  }

  static bool ConsolidatedMovementXYEnabled(const FeatureContext*) { return ConsolidatedMovementXYEnabled(); }

  static bool ContactsManagerEnabled() {
    return is_contacts_manager_enabled_;
  }

  static bool ContactsManagerEnabled(const FeatureContext*) { return ContactsManagerEnabled(); }

  static bool ContactsManagerExtraPropertiesEnabled() {
    return is_contacts_manager_extra_properties_enabled_;
  }

  static bool ContactsManagerExtraPropertiesEnabled(const FeatureContext*) { return ContactsManagerExtraPropertiesEnabled(); }

  static bool ContentIndexEnabled() {
    return is_content_index_enabled_;
  }

  static bool ContentIndexEnabled(const FeatureContext*) { return ContentIndexEnabled(); }

  static bool ContextMenuEnabled() {
    return is_context_menu_enabled_;
  }

  static bool ContextMenuEnabled(const FeatureContext*) { return ContextMenuEnabled(); }

  static bool CookieDeprecationFacilitatedTestingEnabled() {
    return is_cookie_deprecation_facilitated_testing_enabled_;
  }

  static bool CookieDeprecationFacilitatedTestingEnabled(const FeatureContext*) { return CookieDeprecationFacilitatedTestingEnabled(); }

  static bool CooperativeSchedulingEnabled() {
    return is_cooperative_scheduling_enabled_;
  }

  static bool CooperativeSchedulingEnabled(const FeatureContext*) { return CooperativeSchedulingEnabled(); }

  static bool CorsRFC1918Enabled() {
    return is_cors_rfc_1918_enabled_;
  }

  static bool CorsRFC1918Enabled(const FeatureContext*) { return CorsRFC1918Enabled(); }

  static bool CounterStyleChangeShouleCollectInlinesEnabled() {
    return is_counter_style_change_shoule_collect_inlines_enabled_;
  }

  static bool CounterStyleChangeShouleCollectInlinesEnabled(const FeatureContext*) { return CounterStyleChangeShouleCollectInlinesEnabled(); }

  static bool CrossFramePerformanceTimelineEnabled() {
    return is_cross_frame_performance_timeline_enabled_;
  }

  static bool CrossFramePerformanceTimelineEnabled(const FeatureContext*) { return CrossFramePerformanceTimelineEnabled(); }

  static bool CSSAnchorPositioningEnabled() {
    if (HTMLSelectListElementEnabled())
      return true;
    return is_css_anchor_positioning_enabled_;
  }

  static bool CSSAnchorPositioningEnabled(const FeatureContext*) { return CSSAnchorPositioningEnabled(); }

  static bool CSSAnchorPositioningCascadeFallbackEnabled() {
    if (CSSAnchorPositioningEnabled())
      return true;
    return is_css_anchor_positioning_cascade_fallback_enabled_;
  }

  static bool CSSAnchorPositioningCascadeFallbackEnabled(const FeatureContext*) { return CSSAnchorPositioningCascadeFallbackEnabled(); }

  static bool CSSAnimationCompositionEnabled() {
    return is_css_animation_composition_enabled_;
  }

  static bool CSSAnimationCompositionEnabled(const FeatureContext*) { return CSSAnimationCompositionEnabled(); }

  static bool CSSAnimationDelayStartEndEnabled() {
    if (!ScrollTimelineEnabled())
      return false;
    return is_css_animation_delay_start_end_enabled_;
  }

  static bool CSSAnimationDelayStartEndEnabled(const FeatureContext*) { return CSSAnimationDelayStartEndEnabled(); }

  static bool CSSAtRuleCounterStyleImageSymbolsEnabled() {
    return is_css_at_rule_counter_style_image_symbols_enabled_;
  }

  static bool CSSAtRuleCounterStyleImageSymbolsEnabled(const FeatureContext*) { return CSSAtRuleCounterStyleImageSymbolsEnabled(); }

  static bool CSSAtRuleCounterStyleSpeakAsDescriptorEnabled() {
    return is_css_at_rule_counter_style_speak_as_descriptor_enabled_;
  }

  static bool CSSAtRuleCounterStyleSpeakAsDescriptorEnabled(const FeatureContext*) { return CSSAtRuleCounterStyleSpeakAsDescriptorEnabled(); }

  static bool CSSBackgroundClipUnprefixEnabled() {
    return is_css_background_clip_unprefix_enabled_;
  }

  static bool CSSBackgroundClipUnprefixEnabled(const FeatureContext*) { return CSSBackgroundClipUnprefixEnabled(); }

  static bool CSSCalcSimplificationAndSerializationEnabled() {
    return is_css_calc_simplification_and_serialization_enabled_;
  }

  static bool CSSCalcSimplificationAndSerializationEnabled(const FeatureContext*) { return CSSCalcSimplificationAndSerializationEnabled(); }

  static bool CSSCapFontUnitsEnabled() {
    return is_css_cap_font_units_enabled_;
  }

  static bool CSSCapFontUnitsEnabled(const FeatureContext*) { return CSSCapFontUnitsEnabled(); }

  static bool CSSCaseSensitiveSelectorEnabled() {
    return is_css_case_sensitive_selector_enabled_;
  }

  static bool CSSCaseSensitiveSelectorEnabled(const FeatureContext*) { return CSSCaseSensitiveSelectorEnabled(); }

  static bool CSSColorContrastEnabled() {
    return is_css_color_contrast_enabled_;
  }

  static bool CSSColorContrastEnabled(const FeatureContext*) { return CSSColorContrastEnabled(); }

  static bool CSSColorTypedOMEnabled() {
    return is_css_color_typed_om_enabled_;
  }

  static bool CSSColorTypedOMEnabled(const FeatureContext*) { return CSSColorTypedOMEnabled(); }

  static bool CSSContentVisibilityImpliesContainIntrinsicSizeAutoEnabled() {
    return is_css_content_visibility_implies_contain_intrinsic_size_auto_enabled_;
  }

  static bool CSSContentVisibilityImpliesContainIntrinsicSizeAutoEnabled(const FeatureContext*) { return CSSContentVisibilityImpliesContainIntrinsicSizeAutoEnabled(); }

  static bool CSSCrossFadeEnabled() {
    return is_css_cross_fade_enabled_;
  }

  static bool CSSCrossFadeEnabled(const FeatureContext*) { return CSSCrossFadeEnabled(); }

  static bool CSSCustomStateDeprecatedSyntaxEnabled() {
    return is_css_custom_state_deprecated_syntax_enabled_;
  }

  static bool CSSCustomStateDeprecatedSyntaxEnabled(const FeatureContext*) { return CSSCustomStateDeprecatedSyntaxEnabled(); }

  static bool CSSCustomStateNewSyntaxEnabled() {
    return is_css_custom_state_new_syntax_enabled_;
  }

  static bool CSSCustomStateNewSyntaxEnabled(const FeatureContext*) { return CSSCustomStateNewSyntaxEnabled(); }

  static bool CSSDisplayAnimationEnabled() {
    return is_css_display_animation_enabled_;
  }

  static bool CSSDisplayAnimationEnabled(const FeatureContext*) { return CSSDisplayAnimationEnabled(); }

  static bool CssDisplayRubyEnabled() {
    if (!RubySimplePairingEnabled())
      return false;
    return is_css_display_ruby_enabled_;
  }

  static bool CssDisplayRubyEnabled(const FeatureContext*) { return CssDisplayRubyEnabled(); }

  static bool CSSDynamicRangeLimitEnabled() {
    return is_css_dynamic_range_limit_enabled_;
  }

  static bool CSSDynamicRangeLimitEnabled(const FeatureContext*) { return CSSDynamicRangeLimitEnabled(); }

  static bool CSSEnumeratedCustomPropertiesEnabled() {
    return is_css_enumerated_custom_properties_enabled_;
  }

  static bool CSSEnumeratedCustomPropertiesEnabled(const FeatureContext*) { return CSSEnumeratedCustomPropertiesEnabled(); }

  static bool CSSExponentialFunctionsEnabled() {
    return is_css_exponential_functions_enabled_;
  }

  static bool CSSExponentialFunctionsEnabled(const FeatureContext*) { return CSSExponentialFunctionsEnabled(); }

  static bool CssFieldSizingEnabled() {
    return is_css_field_sizing_enabled_;
  }

  static bool CssFieldSizingEnabled(const FeatureContext*) { return CssFieldSizingEnabled(); }

  static bool CSSFirstLetterNoNewLineAsPrecedingCharEnabled() {
    return is_css_first_letter_no_new_line_as_preceding_char_enabled_;
  }

  static bool CSSFirstLetterNoNewLineAsPrecedingCharEnabled(const FeatureContext*) { return CSSFirstLetterNoNewLineAsPrecedingCharEnabled(); }

  static bool CSSFontSizeAdjustEnabled() {
    return is_css_font_size_adjust_enabled_;
  }

  static bool CSSFontSizeAdjustEnabled(const FeatureContext*) { return CSSFontSizeAdjustEnabled(); }

  static bool CSSHexAlphaColorEnabled() {
    return is_css_hex_alpha_color_enabled_;
  }

  static bool CSSHexAlphaColorEnabled(const FeatureContext*) { return CSSHexAlphaColorEnabled(); }

  static bool CSSLayoutAPIEnabled() {
    return is_css_layout_api_enabled_;
  }

  static bool CSSLayoutAPIEnabled(const FeatureContext*) { return CSSLayoutAPIEnabled(); }

  static bool CSSLightDarkColorsEnabled() {
    return is_css_light_dark_colors_enabled_;
  }

  static bool CSSLightDarkColorsEnabled(const FeatureContext*) { return CSSLightDarkColorsEnabled(); }

  static bool CSSLinearTimingFunctionEnabled() {
    return is_css_linear_timing_function_enabled_;
  }

  static bool CSSLinearTimingFunctionEnabled(const FeatureContext*) { return CSSLinearTimingFunctionEnabled(); }

  static bool CSSLogicalOverflowEnabled() {
    return is_css_logical_overflow_enabled_;
  }

  static bool CSSLogicalOverflowEnabled(const FeatureContext*) { return CSSLogicalOverflowEnabled(); }

  static bool CSSMarkerNestedPseudoElementEnabled() {
    return is_css_marker_nested_pseudo_element_enabled_;
  }

  static bool CSSMarkerNestedPseudoElementEnabled(const FeatureContext*) { return CSSMarkerNestedPseudoElementEnabled(); }

  static bool CSSMaskingInteropEnabled() {
    return is_css_masking_interop_enabled_;
  }

  static bool CSSMaskingInteropEnabled(const FeatureContext*) { return CSSMaskingInteropEnabled(); }

  static bool CSSMPCImprovementsEnabled() {
    return is_css_mpc_improvements_enabled_;
  }

  static bool CSSMPCImprovementsEnabled(const FeatureContext*) { return CSSMPCImprovementsEnabled(); }

  static bool CSSNestingIdentEnabled() {
    return is_css_nesting_ident_enabled_;
  }

  static bool CSSNestingIdentEnabled(const FeatureContext*) { return CSSNestingIdentEnabled(); }

  static bool CSSNumericFactoryCompletenessEnabled() {
    return is_css_numeric_factory_completeness_enabled_;
  }

  static bool CSSNumericFactoryCompletenessEnabled(const FeatureContext*) { return CSSNumericFactoryCompletenessEnabled(); }

  static bool CSSOffsetPathBasicShapesCircleAndEllipseEnabled() {
    return is_css_offset_path_basic_shapes_circle_and_ellipse_enabled_;
  }

  static bool CSSOffsetPathBasicShapesCircleAndEllipseEnabled(const FeatureContext*) { return CSSOffsetPathBasicShapesCircleAndEllipseEnabled(); }

  static bool CSSOffsetPathBasicShapesRectanglesAndPolygonEnabled() {
    return is_css_offset_path_basic_shapes_rectangles_and_polygon_enabled_;
  }

  static bool CSSOffsetPathBasicShapesRectanglesAndPolygonEnabled(const FeatureContext*) { return CSSOffsetPathBasicShapesRectanglesAndPolygonEnabled(); }

  static bool CSSOffsetPathCoordBoxEnabled() {
    return is_css_offset_path_coord_box_enabled_;
  }

  static bool CSSOffsetPathCoordBoxEnabled(const FeatureContext*) { return CSSOffsetPathCoordBoxEnabled(); }

  static bool CSSOffsetPathRayEnabled() {
    return is_css_offset_path_ray_enabled_;
  }

  static bool CSSOffsetPathRayEnabled(const FeatureContext*) { return CSSOffsetPathRayEnabled(); }

  static bool CSSOffsetPathRayContainEnabled() {
    return is_css_offset_path_ray_contain_enabled_;
  }

  static bool CSSOffsetPathRayContainEnabled(const FeatureContext*) { return CSSOffsetPathRayContainEnabled(); }

  static bool CSSOffsetPathUrlEnabled() {
    return is_css_offset_path_url_enabled_;
  }

  static bool CSSOffsetPathUrlEnabled(const FeatureContext*) { return CSSOffsetPathUrlEnabled(); }

  static bool CSSOffsetPositionAnchorEnabled() {
    return is_css_offset_position_anchor_enabled_;
  }

  static bool CSSOffsetPositionAnchorEnabled(const FeatureContext*) { return CSSOffsetPositionAnchorEnabled(); }

  static bool CSSOverflowMediaFeaturesEnabled() {
    return is_css_overflow_media_features_enabled_;
  }

  static bool CSSOverflowMediaFeaturesEnabled(const FeatureContext*) { return CSSOverflowMediaFeaturesEnabled(); }

  static bool CSSPaintAPIArgumentsEnabled() {
    return is_css_paint_api_arguments_enabled_;
  }

  static bool CSSPaintAPIArgumentsEnabled(const FeatureContext*) { return CSSPaintAPIArgumentsEnabled(); }

  static bool CSSParserIgnoreCharsetForURLsEnabled() {
    return is_css_parser_ignore_charset_for_urls_enabled_;
  }

  static bool CSSParserIgnoreCharsetForURLsEnabled(const FeatureContext*) { return CSSParserIgnoreCharsetForURLsEnabled(); }

  static bool CSSPhraseLineBreakEnabled() {
    return is_css_phrase_line_break_enabled_;
  }

  static bool CSSPhraseLineBreakEnabled(const FeatureContext*) { return CSSPhraseLineBreakEnabled(); }

  static bool CSSPositionStickyStaticScrollPositionEnabled() {
    return is_css_position_sticky_static_scroll_position_enabled_;
  }

  static bool CSSPositionStickyStaticScrollPositionEnabled(const FeatureContext*) { return CSSPositionStickyStaticScrollPositionEnabled(); }

  static bool CSSProgressNotationEnabled() {
    return is_css_progress_notation_enabled_;
  }

  static bool CSSProgressNotationEnabled(const FeatureContext*) { return CSSProgressNotationEnabled(); }

  static bool CSSPseudoPlayingPausedEnabled() {
    return is_css_pseudo_playing_paused_enabled_;
  }

  static bool CSSPseudoPlayingPausedEnabled(const FeatureContext*) { return CSSPseudoPlayingPausedEnabled(); }

  static bool CSSRelativeColorEnabled() {
    return is_css_relative_color_enabled_;
  }

  static bool CSSRelativeColorEnabled(const FeatureContext*) { return CSSRelativeColorEnabled(); }

  static bool CSSResizeAutoEnabled() {
    return is_css_resize_auto_enabled_;
  }

  static bool CSSResizeAutoEnabled(const FeatureContext*) { return CSSResizeAutoEnabled(); }

  static bool CSSScopeEnabled() {
    return is_css_scope_enabled_;
  }

  static bool CSSScopeEnabled(const FeatureContext*) { return CSSScopeEnabled(); }

  static bool CSSScrollSnapEventsEnabled() {
    if (CSSSnapChangedEventEnabled())
      return true;
    if (CSSSnapChangingEventEnabled())
      return true;
    return is_css_scroll_snap_events_enabled_;
  }

  static bool CSSScrollSnapEventsEnabled(const FeatureContext*) { return CSSScrollSnapEventsEnabled(); }

  static bool CSSScrollStartEnabled() {
    return is_css_scroll_start_enabled_;
  }

  static bool CSSScrollStartEnabled(const FeatureContext*) { return CSSScrollStartEnabled(); }

  static bool CSSScrollStateContainerQueriesEnabled() {
    if (CSSStickyContainerQueriesEnabled())
      return true;
    if (CSSStickyContainerQueriesEnabled())
      return true;
    return is_css_scroll_state_container_queries_enabled_;
  }

  static bool CSSScrollStateContainerQueriesEnabled(const FeatureContext*) { return CSSScrollStateContainerQueriesEnabled(); }

  static bool CSSSelectorFragmentAnchorEnabled() {
    return is_css_selector_fragment_anchor_enabled_;
  }

  static bool CSSSelectorFragmentAnchorEnabled(const FeatureContext*) { return CSSSelectorFragmentAnchorEnabled(); }

  static bool CSSSignRelatedFunctionsEnabled() {
    return is_css_sign_related_functions_enabled_;
  }

  static bool CSSSignRelatedFunctionsEnabled(const FeatureContext*) { return CSSSignRelatedFunctionsEnabled(); }

  static bool CSSSnapChangedEventEnabled() {
    return is_css_snap_changed_event_enabled_;
  }

  static bool CSSSnapChangedEventEnabled(const FeatureContext*) { return CSSSnapChangedEventEnabled(); }

  static bool CSSSnapChangingEventEnabled() {
    return is_css_snap_changing_event_enabled_;
  }

  static bool CSSSnapChangingEventEnabled(const FeatureContext*) { return CSSSnapChangingEventEnabled(); }

  static bool CSSSnapContainerQueriesEnabled() {
    return is_css_snap_container_queries_enabled_;
  }

  static bool CSSSnapContainerQueriesEnabled(const FeatureContext*) { return CSSSnapContainerQueriesEnabled(); }

  static bool CSSSpellingGrammarErrorsEnabled() {
    return is_css_spelling_grammar_errors_enabled_;
  }

  static bool CSSSpellingGrammarErrorsEnabled(const FeatureContext*) { return CSSSpellingGrammarErrorsEnabled(); }

  static bool CSSSteppedValueFunctionsEnabled() {
    return is_css_stepped_value_functions_enabled_;
  }

  static bool CSSSteppedValueFunctionsEnabled(const FeatureContext*) { return CSSSteppedValueFunctionsEnabled(); }

  static bool CSSStickyContainerQueriesEnabled() {
    return is_css_sticky_container_queries_enabled_;
  }

  static bool CSSStickyContainerQueriesEnabled(const FeatureContext*) { return CSSStickyContainerQueriesEnabled(); }

  static bool CSSSupportsForImportRulesEnabled() {
    return is_css_supports_for_import_rules_enabled_;
  }

  static bool CSSSupportsForImportRulesEnabled(const FeatureContext*) { return CSSSupportsForImportRulesEnabled(); }

  static bool CSSSystemAccentColorEnabled() {
    return is_css_system_accent_color_enabled_;
  }

  static bool CSSSystemAccentColorEnabled(const FeatureContext*) { return CSSSystemAccentColorEnabled(); }

  static bool CSSTextAutoSpaceEnabled() {
    return is_css_text_auto_space_enabled_;
  }

  static bool CSSTextAutoSpaceEnabled(const FeatureContext*) { return CSSTextAutoSpaceEnabled(); }

  static bool CSSTextBoxTrimEnabled() {
    return is_css_text_box_trim_enabled_;
  }

  static bool CSSTextBoxTrimEnabled(const FeatureContext*) { return CSSTextBoxTrimEnabled(); }

  static bool CSSTextSpacingEnabled() {
    if (!CSSTextAutoSpaceEnabled())
      return false;
    if (!CSSTextSpacingTrimEnabled())
      return false;
    return is_css_text_spacing_enabled_;
  }

  static bool CSSTextSpacingEnabled(const FeatureContext*) { return CSSTextSpacingEnabled(); }

  static bool CSSTextSpacingTrimEnabled() {
    return is_css_text_spacing_trim_enabled_;
  }

  static bool CSSTextSpacingTrimEnabled(const FeatureContext*) { return CSSTextSpacingTrimEnabled(); }

  static bool CSSTextWrapBalanceByScoreEnabled() {
    return is_css_text_wrap_balance_by_score_enabled_;
  }

  static bool CSSTextWrapBalanceByScoreEnabled(const FeatureContext*) { return CSSTextWrapBalanceByScoreEnabled(); }

  static bool CSSTextWrapPrettyEnabled() {
    return is_css_text_wrap_pretty_enabled_;
  }

  static bool CSSTextWrapPrettyEnabled(const FeatureContext*) { return CSSTextWrapPrettyEnabled(); }

  static bool CSSTransitionDiscreteEnabled() {
    return is_css_transition_discrete_enabled_;
  }

  static bool CSSTransitionDiscreteEnabled(const FeatureContext*) { return CSSTransitionDiscreteEnabled(); }

  static bool CSSTreeScopedTimelinesEnabled() {
    return is_css_tree_scoped_timelines_enabled_;
  }

  static bool CSSTreeScopedTimelinesEnabled(const FeatureContext*) { return CSSTreeScopedTimelinesEnabled(); }

  static bool CSSUnknownContainerQueriesNoSelectionEnabled() {
    return is_css_unknown_container_queries_no_selection_enabled_;
  }

  static bool CSSUnknownContainerQueriesNoSelectionEnabled(const FeatureContext*) { return CSSUnknownContainerQueriesNoSelectionEnabled(); }

  static bool CSSUpdateMediaFeatureEnabled() {
    return is_css_update_media_feature_enabled_;
  }

  static bool CSSUpdateMediaFeatureEnabled(const FeatureContext*) { return CSSUpdateMediaFeatureEnabled(); }

  static bool CSSUserSelectContainEnabled() {
    return is_css_user_select_contain_enabled_;
  }

  static bool CSSUserSelectContainEnabled(const FeatureContext*) { return CSSUserSelectContainEnabled(); }

  static bool CSSVariables2ImageValuesEnabled() {
    return is_css_variables_2_image_values_enabled_;
  }

  static bool CSSVariables2ImageValuesEnabled(const FeatureContext*) { return CSSVariables2ImageValuesEnabled(); }

  static bool CSSVariables2TransformValuesEnabled() {
    return is_css_variables_2_transform_values_enabled_;
  }

  static bool CSSVariables2TransformValuesEnabled(const FeatureContext*) { return CSSVariables2TransformValuesEnabled(); }

  static bool CSSVideoDynamicRangeMediaQueriesEnabled() {
    return is_css_video_dynamic_range_media_queries_enabled_;
  }

  static bool CSSVideoDynamicRangeMediaQueriesEnabled(const FeatureContext*) { return CSSVideoDynamicRangeMediaQueriesEnabled(); }

  static bool CSSViewTimelineInsetShorthandEnabled() {
    return is_css_view_timeline_inset_shorthand_enabled_;
  }

  static bool CSSViewTimelineInsetShorthandEnabled(const FeatureContext*) { return CSSViewTimelineInsetShorthandEnabled(); }

  static bool CSSViewTransitionClassEnabled() {
    return is_css_view_transition_class_enabled_;
  }

  static bool CSSViewTransitionClassEnabled(const FeatureContext*) { return CSSViewTransitionClassEnabled(); }

  static bool CustomElementsGetNameEnabled() {
    return is_custom_elements_get_name_enabled_;
  }

  static bool CustomElementsGetNameEnabled(const FeatureContext*) { return CustomElementsGetNameEnabled(); }

  static bool DataTransferClearStringItemsEnabled() {
    return is_data_transfer_clear_string_items_enabled_;
  }

  static bool DataTransferClearStringItemsEnabled(const FeatureContext*) { return DataTransferClearStringItemsEnabled(); }

  static bool DateInputInlineBlockEnabled() {
    return is_date_input_inline_block_enabled_;
  }

  static bool DateInputInlineBlockEnabled(const FeatureContext*) { return DateInputInlineBlockEnabled(); }

  static bool DeclarativeShadowDOMSerializableEnabled() {
    return is_declarative_shadow_dom_serializable_enabled_;
  }

  static bool DeclarativeShadowDOMSerializableEnabled(const FeatureContext*) { return DeclarativeShadowDOMSerializableEnabled(); }

  static bool DeprecatedTemplateShadowRootEnabled() {
    return is_deprecated_template_shadow_root_enabled_;
  }

  static bool DeprecatedTemplateShadowRootEnabled(const FeatureContext*) { return DeprecatedTemplateShadowRootEnabled(); }

  static bool DesktopCaptureDisableLocalEchoControlEnabled() {
    return is_desktop_capture_disable_local_echo_control_enabled_;
  }

  static bool DesktopCaptureDisableLocalEchoControlEnabled(const FeatureContext*) { return DesktopCaptureDisableLocalEchoControlEnabled(); }

  static bool DesktopPWAsAdditionalWindowingControlsEnabled() {
    return is_desktop_pw_as_additional_windowing_controls_enabled_;
  }

  static bool DesktopPWAsAdditionalWindowingControlsEnabled(const FeatureContext*) { return DesktopPWAsAdditionalWindowingControlsEnabled(); }

  static bool DesktopPWAsSubAppsEnabled() {
    return is_desktop_pw_as_sub_apps_enabled_;
  }

  static bool DesktopPWAsSubAppsEnabled(const FeatureContext*) { return DesktopPWAsSubAppsEnabled(); }

  static bool DetailsElementToggleEventEnabled() {
    return is_details_element_toggle_event_enabled_;
  }

  static bool DetailsElementToggleEventEnabled(const FeatureContext*) { return DetailsElementToggleEventEnabled(); }

  static bool DetailsStylingEnabled() {
    return is_details_styling_enabled_;
  }

  static bool DetailsStylingEnabled(const FeatureContext*) { return DetailsStylingEnabled(); }

  static bool DeviceAttributesEnabled() {
    return is_device_attributes_enabled_;
  }

  static bool DeviceAttributesEnabled(const FeatureContext*) { return DeviceAttributesEnabled(); }

  static bool DeviceOrientationRequestPermissionEnabled() {
    return is_device_orientation_request_permission_enabled_;
  }

  static bool DeviceOrientationRequestPermissionEnabled(const FeatureContext*) { return DeviceOrientationRequestPermissionEnabled(); }

  static bool DevicePostureEnabled() {
    return is_device_posture_enabled_;
  }

  static bool DevicePostureEnabled(const FeatureContext*) { return DevicePostureEnabled(); }

  static bool DialogNewFocusBehaviorEnabled() {
    return is_dialog_new_focus_behavior_enabled_;
  }

  static bool DialogNewFocusBehaviorEnabled(const FeatureContext*) { return DialogNewFocusBehaviorEnabled(); }

  static bool DigitalGoodsV2_1Enabled() {
    return is_digital_goods_v_2_1_enabled_;
  }

  static bool DigitalGoodsV2_1Enabled(const FeatureContext*) { return DigitalGoodsV2_1Enabled(); }

  static bool DirectSocketsEnabled() {
    return is_direct_sockets_enabled_;
  }

  static bool DirectSocketsEnabled(const FeatureContext*) { return DirectSocketsEnabled(); }

  static bool DirnameMoreInputTypesEnabled() {
    return is_dirname_more_input_types_enabled_;
  }

  static bool DirnameMoreInputTypesEnabled(const FeatureContext*) { return DirnameMoreInputTypesEnabled(); }

  static bool DisableSelectAllForEmptyTextEnabled() {
    return is_disable_select_all_for_empty_text_enabled_;
  }

  static bool DisableSelectAllForEmptyTextEnabled(const FeatureContext*) { return DisableSelectAllForEmptyTextEnabled(); }

  static bool DispatchHiddenVisibilityTransitionsEnabled() {
    return is_dispatch_hidden_visibility_transitions_enabled_;
  }

  static bool DispatchHiddenVisibilityTransitionsEnabled(const FeatureContext*) { return DispatchHiddenVisibilityTransitionsEnabled(); }

  static bool DisplayContentsFocusableEnabled() {
    return is_display_contents_focusable_enabled_;
  }

  static bool DisplayContentsFocusableEnabled(const FeatureContext*) { return DisplayContentsFocusableEnabled(); }

  static bool DisplayCutoutAPIEnabled() {
    return is_display_cutout_api_enabled_;
  }

  static bool DisplayCutoutAPIEnabled(const FeatureContext*) { return DisplayCutoutAPIEnabled(); }

  static bool DocumentBaseURIFixEnabled() {
    return is_document_base_uri_fix_enabled_;
  }

  static bool DocumentBaseURIFixEnabled(const FeatureContext*) { return DocumentBaseURIFixEnabled(); }

  static bool DocumentCookieEnabled() {
    return is_document_cookie_enabled_;
  }

  static bool DocumentCookieEnabled(const FeatureContext*) { return DocumentCookieEnabled(); }

  static bool DocumentDomainEnabled() {
    return is_document_domain_enabled_;
  }

  static bool DocumentDomainEnabled(const FeatureContext*) { return DocumentDomainEnabled(); }

  static bool DocumentOpenOriginAliasRemovalEnabled() {
    return is_document_open_origin_alias_removal_enabled_;
  }

  static bool DocumentOpenOriginAliasRemovalEnabled(const FeatureContext*) { return DocumentOpenOriginAliasRemovalEnabled(); }

  static bool DocumentOpenSandboxInheritanceRemovalEnabled() {
    return is_document_open_sandbox_inheritance_removal_enabled_;
  }

  static bool DocumentOpenSandboxInheritanceRemovalEnabled(const FeatureContext*) { return DocumentOpenSandboxInheritanceRemovalEnabled(); }

  static bool DocumentPictureInPictureAPIEnabled() {
    return is_document_picture_in_picture_api_enabled_;
  }

  static bool DocumentPictureInPictureAPIEnabled(const FeatureContext*) { return DocumentPictureInPictureAPIEnabled(); }

  static bool DocumentPolicyDocumentDomainEnabled() {
    return is_document_policy_document_domain_enabled_;
  }

  static bool DocumentPolicyDocumentDomainEnabled(const FeatureContext*) { return DocumentPolicyDocumentDomainEnabled(); }

  static bool DocumentPolicySyncXHREnabled() {
    return is_document_policy_sync_xhr_enabled_;
  }

  static bool DocumentPolicySyncXHREnabled(const FeatureContext*) { return DocumentPolicySyncXHREnabled(); }

  static bool DocumentRenderBlockingEnabled() {
    if (ViewTransitionOnNavigationEnabled())
      return true;
    return is_document_render_blocking_enabled_;
  }

  static bool DocumentRenderBlockingEnabled(const FeatureContext*) { return DocumentRenderBlockingEnabled(); }

  static bool DocumentWriteEnabled() {
    return is_document_write_enabled_;
  }

  static bool DocumentWriteEnabled(const FeatureContext*) { return DocumentWriteEnabled(); }

  static bool DOMParserUsesHTMLFastPathParserEnabled() {
    return is_dom_parser_uses_html_fast_path_parser_enabled_;
  }

  static bool DOMParserUsesHTMLFastPathParserEnabled(const FeatureContext*) { return DOMParserUsesHTMLFastPathParserEnabled(); }

  static bool DOMPartsAPIEnabled() {
    return is_dom_parts_api_enabled_;
  }

  static bool DOMPartsAPIEnabled(const FeatureContext*) { return DOMPartsAPIEnabled(); }

  static bool DontFireDblclickOnDisabledFormControlsEnabled() {
    return is_dont_fire_dblclick_on_disabled_form_controls_enabled_;
  }

  static bool DontFireDblclickOnDisabledFormControlsEnabled(const FeatureContext*) { return DontFireDblclickOnDisabledFormControlsEnabled(); }

  static bool DynamicScrollCullRectExpansionEnabled() {
    return is_dynamic_scroll_cull_rect_expansion_enabled_;
  }

  static bool DynamicScrollCullRectExpansionEnabled(const FeatureContext*) { return DynamicScrollCullRectExpansionEnabled(); }

  static bool ElementGetHTMLEnabled() {
    return is_element_get_html_enabled_;
  }

  static bool ElementGetHTMLEnabled(const FeatureContext*) { return ElementGetHTMLEnabled(); }

  static bool ElementGetInnerHTMLEnabled() {
    return is_element_get_inner_html_enabled_;
  }

  static bool ElementGetInnerHTMLEnabled(const FeatureContext*) { return ElementGetInnerHTMLEnabled(); }

  static bool EmptyClipboardReadEnabled() {
    return is_empty_clipboard_read_enabled_;
  }

  static bool EmptyClipboardReadEnabled(const FeatureContext*) { return EmptyClipboardReadEnabled(); }

  static bool EnforceAnonymityExposureEnabled() {
    return is_enforce_anonymity_exposure_enabled_;
  }

  static bool EnforceAnonymityExposureEnabled(const FeatureContext*) { return EnforceAnonymityExposureEnabled(); }

  static bool EscapeLtGtInAttributesEnabled() {
    return is_escape_lt_gt_in_attributes_enabled_;
  }

  static bool EscapeLtGtInAttributesEnabled(const FeatureContext*) { return EscapeLtGtInAttributesEnabled(); }

  static bool EventTimingInteractionCountEnabled() {
    return is_event_timing_interaction_count_enabled_;
  }

  static bool EventTimingInteractionCountEnabled(const FeatureContext*) { return EventTimingInteractionCountEnabled(); }

  static bool ExperimentalContentSecurityPolicyFeaturesEnabled() {
    return is_experimental_content_security_policy_features_enabled_;
  }

  static bool ExperimentalContentSecurityPolicyFeaturesEnabled(const FeatureContext*) { return ExperimentalContentSecurityPolicyFeaturesEnabled(); }

  static bool ExperimentalJSProfilerMarkersEnabled() {
    return is_experimental_js_profiler_markers_enabled_;
  }

  static bool ExperimentalJSProfilerMarkersEnabled(const FeatureContext*) { return ExperimentalJSProfilerMarkersEnabled(); }

  static bool ExperimentalPoliciesEnabled() {
    return is_experimental_policies_enabled_;
  }

  static bool ExperimentalPoliciesEnabled(const FeatureContext*) { return ExperimentalPoliciesEnabled(); }

  static bool ExposeRenderTimeNonTaoDelayedImageEnabled() {
    return is_expose_render_time_non_tao_delayed_image_enabled_;
  }

  static bool ExposeRenderTimeNonTaoDelayedImageEnabled(const FeatureContext*) { return ExposeRenderTimeNonTaoDelayedImageEnabled(); }

  static bool ExtendedTextMetricsEnabled() {
    return is_extended_text_metrics_enabled_;
  }

  static bool ExtendedTextMetricsEnabled(const FeatureContext*) { return ExtendedTextMetricsEnabled(); }

  static bool ExtraWebGLVideoTextureMetadataEnabled() {
    return is_extra_webgl_video_texture_metadata_enabled_;
  }

  static bool ExtraWebGLVideoTextureMetadataEnabled(const FeatureContext*) { return ExtraWebGLVideoTextureMetadataEnabled(); }

  static bool EyeDropperAPIEnabled() {
    return is_eye_dropper_api_enabled_;
  }

  static bool EyeDropperAPIEnabled(const FeatureContext*) { return EyeDropperAPIEnabled(); }

  static bool FaceDetectorEnabled() {
    return is_face_detector_enabled_;
  }

  static bool FaceDetectorEnabled(const FeatureContext*) { return FaceDetectorEnabled(); }

  static bool FakeNoAllocDirectCallForTestingEnabled() {
    return is_fake_no_alloc_direct_call_for_testing_enabled_;
  }

  static bool FakeNoAllocDirectCallForTestingEnabled(const FeatureContext*) { return FakeNoAllocDirectCallForTestingEnabled(); }

  static bool FastPositionIteratorEnabled() {
    return is_fast_position_iterator_enabled_;
  }

  static bool FastPositionIteratorEnabled(const FeatureContext*) { return FastPositionIteratorEnabled(); }

  static bool FedCmEnabled() {
    return is_fed_cm_enabled_;
  }

  static bool FedCmEnabled(const FeatureContext*) { return FedCmEnabled(); }

  static bool FedCmAuthzEnabled() {
    if (!FedCmEnabled())
      return false;
    return is_fed_cm_authz_enabled_;
  }

  static bool FedCmAuthzEnabled(const FeatureContext*) { return FedCmAuthzEnabled(); }

  static bool FedCmAutoSelectedFlagEnabled() {
    if (!FedCmEnabled())
      return false;
    return is_fed_cm_auto_selected_flag_enabled_;
  }

  static bool FedCmAutoSelectedFlagEnabled(const FeatureContext*) { return FedCmAutoSelectedFlagEnabled(); }

  static bool FedCmButtonModeEnabled() {
    if (!FedCmEnabled())
      return false;
    return is_fed_cm_button_mode_enabled_;
  }

  static bool FedCmButtonModeEnabled(const FeatureContext*) { return FedCmButtonModeEnabled(); }

  static bool FedCmDisconnectEnabled() {
    if (!FedCmEnabled())
      return false;
    return is_fed_cm_disconnect_enabled_;
  }

  static bool FedCmDisconnectEnabled(const FeatureContext*) { return FedCmDisconnectEnabled(); }

  static bool FedCmDomainHintEnabled() {
    if (!FedCmEnabled())
      return false;
    return is_fed_cm_domain_hint_enabled_;
  }

  static bool FedCmDomainHintEnabled(const FeatureContext*) { return FedCmDomainHintEnabled(); }

  static bool FedCmErrorEnabled() {
    if (!FedCmEnabled())
      return false;
    return is_fed_cm_error_enabled_;
  }

  static bool FedCmErrorEnabled(const FeatureContext*) { return FedCmErrorEnabled(); }

  static bool FedCmIdPRegistrationEnabled() {
    if (!FedCmEnabled())
      return false;
    return is_fed_cm_id_p_registration_enabled_;
  }

  static bool FedCmIdPRegistrationEnabled(const FeatureContext*) { return FedCmIdPRegistrationEnabled(); }

  static bool FedCmIdpSigninStatusEnabled() {
    if (!FedCmEnabled())
      return false;
    return is_fed_cm_idp_signin_status_enabled_;
  }

  static bool FedCmIdpSigninStatusEnabled(const FeatureContext*);

  static bool FedCmMultipleIdentityProvidersEnabled() {
    if (!FedCmEnabled())
      return false;
    return is_fed_cm_multiple_identity_providers_enabled_;
  }

  static bool FedCmMultipleIdentityProvidersEnabled(const FeatureContext*) { return FedCmMultipleIdentityProvidersEnabled(); }

  static bool FedCmSelectiveDisclosureEnabled() {
    if (!FedCmEnabled())
      return false;
    return is_fed_cm_selective_disclosure_enabled_;
  }

  static bool FedCmSelectiveDisclosureEnabled(const FeatureContext*) { return FedCmSelectiveDisclosureEnabled(); }

  static bool FencedFramesDefaultModeEnabled() {
    return is_fenced_frames_default_mode_enabled_;
  }

  static bool FencedFramesDefaultModeEnabled(const FeatureContext*) { return FencedFramesDefaultModeEnabled(); }

  static bool FencedFramesLocalUnpartitionedDataAccessEnabled() {
    return is_fenced_frames_local_unpartitioned_data_access_enabled_;
  }

  static bool FencedFramesLocalUnpartitionedDataAccessEnabled(const FeatureContext*) { return FencedFramesLocalUnpartitionedDataAccessEnabled(); }

  static bool FetchUploadStreamingEnabled() {
    return is_fetch_upload_streaming_enabled_;
  }

  static bool FetchUploadStreamingEnabled(const FeatureContext*) { return FetchUploadStreamingEnabled(); }

  static bool FileHandlingEnabled() {
    if (!FileSystemAccessLocalEnabled())
      return false;
    return is_file_handling_enabled_;
  }

  static bool FileHandlingEnabled(const FeatureContext*) { return FileHandlingEnabled(); }

  static bool FileHandlingIconsEnabled() {
    if (!FileHandlingEnabled())
      return false;
    return is_file_handling_icons_enabled_;
  }

  static bool FileHandlingIconsEnabled(const FeatureContext*) { return FileHandlingIconsEnabled(); }

  static bool FileSystemEnabled() {
    return is_file_system_enabled_;
  }

  static bool FileSystemEnabled(const FeatureContext*) { return FileSystemEnabled(); }

  static bool FileSystemAccessEnabled() {
    if (FileSystemAccessLocalEnabled())
      return true;
    if (FileSystemAccessOriginPrivateEnabled())
      return true;
    return is_file_system_access_enabled_;
  }

  static bool FileSystemAccessEnabled(const FeatureContext*) { return FileSystemAccessEnabled(); }

  static bool FileSystemAccessAPIExperimentalEnabled() {
    return is_file_system_access_api_experimental_enabled_;
  }

  static bool FileSystemAccessAPIExperimentalEnabled(const FeatureContext*) { return FileSystemAccessAPIExperimentalEnabled(); }

  static bool FileSystemAccessGetCloudIdentifiersEnabled() {
    return is_file_system_access_get_cloud_identifiers_enabled_;
  }

  static bool FileSystemAccessGetCloudIdentifiersEnabled(const FeatureContext*) { return FileSystemAccessGetCloudIdentifiersEnabled(); }

  static bool FileSystemAccessLocalEnabled() {
    return is_file_system_access_local_enabled_;
  }

  static bool FileSystemAccessLocalEnabled(const FeatureContext*) { return FileSystemAccessLocalEnabled(); }

  static bool FileSystemAccessLockingSchemeEnabled() {
    return is_file_system_access_locking_scheme_enabled_;
  }

  static bool FileSystemAccessLockingSchemeEnabled(const FeatureContext*) { return FileSystemAccessLockingSchemeEnabled(); }

  static bool FileSystemAccessOriginPrivateEnabled() {
    return is_file_system_access_origin_private_enabled_;
  }

  static bool FileSystemAccessOriginPrivateEnabled(const FeatureContext*) { return FileSystemAccessOriginPrivateEnabled(); }

  static bool FileSystemObserverEnabled() {
    if (!FileSystemAccessEnabled())
      return false;
    return is_file_system_observer_enabled_;
  }

  static bool FileSystemObserverEnabled(const FeatureContext*) { return FileSystemObserverEnabled(); }

  static bool FledgeClearOriginJoinedAdInterestGroupsEnabled() {
    return is_fledge_clear_origin_joined_ad_interest_groups_enabled_;
  }

  static bool FledgeClearOriginJoinedAdInterestGroupsEnabled(const FeatureContext*) { return FledgeClearOriginJoinedAdInterestGroupsEnabled(); }

  static bool FledgeDirectFromSellerSignalsHeaderAdSlotEnabled() {
    return is_fledge_direct_from_seller_signals_header_ad_slot_enabled_;
  }

  static bool FledgeDirectFromSellerSignalsHeaderAdSlotEnabled(const FeatureContext*) { return FledgeDirectFromSellerSignalsHeaderAdSlotEnabled(); }

  static bool FledgeFeatureDetectionEnabled() {
    return is_fledge_feature_detection_enabled_;
  }

  static bool FledgeFeatureDetectionEnabled(const FeatureContext*) { return FledgeFeatureDetectionEnabled(); }

  static bool FledgeNegativeTargetingEnabled() {
    return is_fledge_negative_targeting_enabled_;
  }

  static bool FledgeNegativeTargetingEnabled(const FeatureContext*) { return FledgeNegativeTargetingEnabled(); }

  static bool FledgeTrustedBiddingSignalsSlotSizeEnabled() {
    return is_fledge_trusted_bidding_signals_slot_size_enabled_;
  }

  static bool FledgeTrustedBiddingSignalsSlotSizeEnabled(const FeatureContext*) { return FledgeTrustedBiddingSignalsSlotSizeEnabled(); }

  static bool FluentOverlayScrollbarsEnabled() {
    return is_fluent_overlay_scrollbars_enabled_;
  }

  static bool FluentOverlayScrollbarsEnabled(const FeatureContext*) { return FluentOverlayScrollbarsEnabled(); }

  static bool FluentScrollbarsEnabled() {
    return is_fluent_scrollbars_enabled_;
  }

  static bool FluentScrollbarsEnabled(const FeatureContext*) { return FluentScrollbarsEnabled(); }

  static bool FlushParserBeforeCreatingCustomElementsEnabled() {
    return is_flush_parser_before_creating_custom_elements_enabled_;
  }

  static bool FlushParserBeforeCreatingCustomElementsEnabled(const FeatureContext*) { return FlushParserBeforeCreatingCustomElementsEnabled(); }

  static bool FocusStyleInvalidationOnPageActivationEnabled() {
    return is_focus_style_invalidation_on_page_activation_enabled_;
  }

  static bool FocusStyleInvalidationOnPageActivationEnabled(const FeatureContext*) { return FocusStyleInvalidationOnPageActivationEnabled(); }

  static bool FontAccessEnabled() {
    return is_font_access_enabled_;
  }

  static bool FontAccessEnabled(const FeatureContext*) { return FontAccessEnabled(); }

  static bool FontationsFontBackendEnabled() {
    return is_fontations_font_backend_enabled_;
  }

  static bool FontationsFontBackendEnabled(const FeatureContext*) { return FontationsFontBackendEnabled(); }

  static bool FontMatchingCTMigrationEnabled() {
    return is_font_matching_ct_migration_enabled_;
  }

  static bool FontMatchingCTMigrationEnabled(const FeatureContext*) { return FontMatchingCTMigrationEnabled(); }

  static bool FontPaletteAnimationEnabled() {
    return is_font_palette_animation_enabled_;
  }

  static bool FontPaletteAnimationEnabled(const FeatureContext*) { return FontPaletteAnimationEnabled(); }

  static bool FontSrcLocalMatchingEnabled() {
    return is_font_src_local_matching_enabled_;
  }

  static bool FontSrcLocalMatchingEnabled(const FeatureContext*) { return FontSrcLocalMatchingEnabled(); }

  static bool ForcedColorsEnabled() {
    return is_forced_colors_enabled_;
  }

  static bool ForcedColorsEnabled(const FeatureContext*) { return ForcedColorsEnabled(); }

  static bool ForcedColorsPreserveParentColorEnabled() {
    return is_forced_colors_preserve_parent_color_enabled_;
  }

  static bool ForcedColorsPreserveParentColorEnabled(const FeatureContext*) { return ForcedColorsPreserveParentColorEnabled(); }

  static bool ForceEagerMeasureMemoryEnabled() {
    return is_force_eager_measure_memory_enabled_;
  }

  static bool ForceEagerMeasureMemoryEnabled(const FeatureContext*) { return ForceEagerMeasureMemoryEnabled(); }

  static bool ForceReduceMotionEnabled() {
    return is_force_reduce_motion_enabled_;
  }

  static bool ForceReduceMotionEnabled(const FeatureContext*) { return ForceReduceMotionEnabled(); }

  static bool ForceTallerSelectPopupEnabled() {
    return is_force_taller_select_popup_enabled_;
  }

  static bool ForceTallerSelectPopupEnabled(const FeatureContext*) { return ForceTallerSelectPopupEnabled(); }

  static bool FormattedTextEnabled() {
    return is_formatted_text_enabled_;
  }

  static bool FormattedTextEnabled(const FeatureContext*) { return FormattedTextEnabled(); }

  static bool FormControlRestoreStateIfAutocompleteOffEnabled() {
    return is_form_control_restore_state_if_autocomplete_off_enabled_;
  }

  static bool FormControlRestoreStateIfAutocompleteOffEnabled(const FeatureContext*) { return FormControlRestoreStateIfAutocompleteOffEnabled(); }

  static bool FormControlsVerticalWritingModeDirectionSupportEnabled() {
    return is_form_controls_vertical_writing_mode_direction_support_enabled_;
  }

  static bool FormControlsVerticalWritingModeDirectionSupportEnabled(const FeatureContext*) { return FormControlsVerticalWritingModeDirectionSupportEnabled(); }

  static bool FormControlsVerticalWritingModeSupportEnabled() {
    return is_form_controls_vertical_writing_mode_support_enabled_;
  }

  static bool FormControlsVerticalWritingModeSupportEnabled(const FeatureContext*) { return FormControlsVerticalWritingModeSupportEnabled(); }

  static bool FormControlsVerticalWritingModeTextSupportEnabled() {
    return is_form_controls_vertical_writing_mode_text_support_enabled_;
  }

  static bool FormControlsVerticalWritingModeTextSupportEnabled(const FeatureContext*) { return FormControlsVerticalWritingModeTextSupportEnabled(); }

  static bool FormStateRestoreCallbackCallWithStateEnabled() {
    return is_form_state_restore_callback_call_with_state_enabled_;
  }

  static bool FormStateRestoreCallbackCallWithStateEnabled(const FeatureContext*) { return FormStateRestoreCallbackCallWithStateEnabled(); }

  static bool FractionalScrollOffsetsEnabled() {
    return is_fractional_scroll_offsets_enabled_;
  }

  static bool FractionalScrollOffsetsEnabled(const FeatureContext*) { return FractionalScrollOffsetsEnabled(); }

  static bool FreezeFramesOnVisibilityEnabled() {
    return is_freeze_frames_on_visibility_enabled_;
  }

  static bool FreezeFramesOnVisibilityEnabled(const FeatureContext*) { return FreezeFramesOnVisibilityEnabled(); }

  static bool GamepadButtonAxisEventsEnabled() {
    return is_gamepad_button_axis_events_enabled_;
  }

  static bool GamepadButtonAxisEventsEnabled(const FeatureContext*) { return GamepadButtonAxisEventsEnabled(); }

  static bool GamepadMultitouchEnabled() {
    return is_gamepad_multitouch_enabled_;
  }

  static bool GamepadMultitouchEnabled(const FeatureContext*) { return GamepadMultitouchEnabled(); }

  static bool GetDisplayMediaEnabled() {
    return is_get_display_media_enabled_;
  }

  static bool GetDisplayMediaEnabled(const FeatureContext*) { return GetDisplayMediaEnabled(); }

  static bool GetDisplayMediaRequiresUserActivationEnabled() {
    if (!GetDisplayMediaEnabled())
      return false;
    return is_get_display_media_requires_user_activation_enabled_;
  }

  static bool GetDisplayMediaRequiresUserActivationEnabled(const FeatureContext*) { return GetDisplayMediaRequiresUserActivationEnabled(); }

  static bool GetNextSiblingPositionWhenLastChildEnabled() {
    return is_get_next_sibling_position_when_last_child_enabled_;
  }

  static bool GetNextSiblingPositionWhenLastChildEnabled(const FeatureContext*) { return GetNextSiblingPositionWhenLastChildEnabled(); }

  static bool GroupEffectEnabled() {
    return is_group_effect_enabled_;
  }

  static bool GroupEffectEnabled(const FeatureContext*) { return GroupEffectEnabled(); }

  static bool HandwritingRecognitionEnabled() {
    return is_handwriting_recognition_enabled_;
  }

  static bool HandwritingRecognitionEnabled(const FeatureContext*) { return HandwritingRecognitionEnabled(); }

  static bool HangingWhitespaceDoesNotDependOnAlignmentEnabled() {
    return is_hanging_whitespace_does_not_depend_on_alignment_enabled_;
  }

  static bool HangingWhitespaceDoesNotDependOnAlignmentEnabled(const FeatureContext*) { return HangingWhitespaceDoesNotDependOnAlignmentEnabled(); }

  static bool HasUAVisualTransitionEnabled() {
    return is_has_ua_visual_transition_enabled_;
  }

  static bool HasUAVisualTransitionEnabled(const FeatureContext*) { return HasUAVisualTransitionEnabled(); }

  static bool HighlightInheritanceEnabled() {
    return is_highlight_inheritance_enabled_;
  }

  static bool HighlightInheritanceEnabled(const FeatureContext*) { return HighlightInheritanceEnabled(); }

  static bool HighlightPointerEventsEnabled() {
    return is_highlight_pointer_events_enabled_;
  }

  static bool HighlightPointerEventsEnabled(const FeatureContext*) { return HighlightPointerEventsEnabled(); }

  static bool HitTestOpaquenessEnabled() {
    if (HitTestTransparencyEnabled())
      return true;
    return is_hit_test_opaqueness_enabled_;
  }

  static bool HitTestOpaquenessEnabled(const FeatureContext*) { return HitTestOpaquenessEnabled(); }

  static bool HitTestTransparencyEnabled() {
    return is_hit_test_transparency_enabled_;
  }

  static bool HitTestTransparencyEnabled(const FeatureContext*) { return HitTestTransparencyEnabled(); }

  static bool HTMLInvokeActionsV2Enabled() {
    return is_html_invoke_actions_v_2_enabled_;
  }

  static bool HTMLInvokeActionsV2Enabled(const FeatureContext*) { return HTMLInvokeActionsV2Enabled(); }

  static bool HTMLInvokeTargetAttributeEnabled() {
    return is_html_invoke_target_attribute_enabled_;
  }

  static bool HTMLInvokeTargetAttributeEnabled(const FeatureContext*) { return HTMLInvokeTargetAttributeEnabled(); }

  static bool HTMLParserFastPathBulkInsertNotifyEnabled() {
    return is_html_parser_fast_path_bulk_insert_notify_enabled_;
  }

  static bool HTMLParserFastPathBulkInsertNotifyEnabled(const FeatureContext*) { return HTMLParserFastPathBulkInsertNotifyEnabled(); }

  static bool HTMLParserYieldAndDelayOftenForTestingEnabled() {
    return is_html_parser_yield_and_delay_often_for_testing_enabled_;
  }

  static bool HTMLParserYieldAndDelayOftenForTestingEnabled(const FeatureContext*) { return HTMLParserYieldAndDelayOftenForTestingEnabled(); }

  static bool HTMLPopoverHintEnabled() {
    return is_html_popover_hint_enabled_;
  }

  static bool HTMLPopoverHintEnabled(const FeatureContext*) { return HTMLPopoverHintEnabled(); }

  static bool HTMLSearchElementEnabled() {
    return is_html_search_element_enabled_;
  }

  static bool HTMLSearchElementEnabled(const FeatureContext*) { return HTMLSearchElementEnabled(); }

  static bool HTMLSelectElementShowPickerEnabled() {
    return is_html_select_element_show_picker_enabled_;
  }

  static bool HTMLSelectElementShowPickerEnabled(const FeatureContext*) { return HTMLSelectElementShowPickerEnabled(); }

  static bool HTMLSelectListElementEnabled() {
    return is_html_select_list_element_enabled_;
  }

  static bool HTMLSelectListElementEnabled(const FeatureContext*) { return HTMLSelectListElementEnabled(); }

  static bool HTMLUnsafeMethodsEnabled() {
    return is_html_unsafe_methods_enabled_;
  }

  static bool HTMLUnsafeMethodsEnabled(const FeatureContext*) { return HTMLUnsafeMethodsEnabled(); }

  static bool ImplicitRootScrollerEnabled() {
    return is_implicit_root_scroller_enabled_;
  }

  static bool ImplicitRootScrollerEnabled(const FeatureContext*) { return ImplicitRootScrollerEnabled(); }

  static bool ImportAttributesDisallowUnknownKeysEnabled() {
    return is_import_attributes_disallow_unknown_keys_enabled_;
  }

  static bool ImportAttributesDisallowUnknownKeysEnabled(const FeatureContext*) { return ImportAttributesDisallowUnknownKeysEnabled(); }

  static bool ImprovedXMLErrorsEnabled() {
    return is_improved_xml_errors_enabled_;
  }

  static bool ImprovedXMLErrorsEnabled(const FeatureContext*) { return ImprovedXMLErrorsEnabled(); }

  static bool IncomingCallNotificationsEnabled() {
    return is_incoming_call_notifications_enabled_;
  }

  static bool IncomingCallNotificationsEnabled(const FeatureContext*) { return IncomingCallNotificationsEnabled(); }

  static bool InertDisplayTransitionEnabled() {
    return is_inert_display_transition_enabled_;
  }

  static bool InertDisplayTransitionEnabled(const FeatureContext*) { return InertDisplayTransitionEnabled(); }

  static bool InfiniteCullRectEnabled() {
    return is_infinite_cull_rect_enabled_;
  }

  static bool InfiniteCullRectEnabled(const FeatureContext*) { return InfiniteCullRectEnabled(); }

  static bool InheritUserModifyWithoutContenteditableEnabled() {
    return is_inherit_user_modify_without_contenteditable_enabled_;
  }

  static bool InheritUserModifyWithoutContenteditableEnabled(const FeatureContext*) { return InheritUserModifyWithoutContenteditableEnabled(); }

  static bool InnerHTMLParserFastpathLogFailureEnabled() {
    return is_inner_html_parser_fastpath_log_failure_enabled_;
  }

  static bool InnerHTMLParserFastpathLogFailureEnabled(const FeatureContext*) { return InnerHTMLParserFastpathLogFailureEnabled(); }

  static bool InputMultipleFieldsUIEnabled() {
    return is_input_multiple_fields_ui_enabled_;
  }

  static bool InputMultipleFieldsUIEnabled(const FeatureContext*) { return InputMultipleFieldsUIEnabled(); }

  static bool InsertLineBreakIfPhrasingContentEnabled() {
    return is_insert_line_break_if_phrasing_content_enabled_;
  }

  static bool InsertLineBreakIfPhrasingContentEnabled(const FeatureContext*) { return InsertLineBreakIfPhrasingContentEnabled(); }

  static bool InstalledAppEnabled() {
    return is_installed_app_enabled_;
  }

  static bool InstalledAppEnabled(const FeatureContext*) { return InstalledAppEnabled(); }

  static bool InteroperablePrivateAttributionEnabled() {
    return is_interoperable_private_attribution_enabled_;
  }

  static bool InteroperablePrivateAttributionEnabled(const FeatureContext*) { return InteroperablePrivateAttributionEnabled(); }

  static bool InterruptComposedScrollbarDisappearanceEnabled() {
    return is_interrupt_composed_scrollbar_disappearance_enabled_;
  }

  static bool InterruptComposedScrollbarDisappearanceEnabled(const FeatureContext*) { return InterruptComposedScrollbarDisappearanceEnabled(); }

  static bool IntersectionObserverScrollMarginEnabled() {
    return is_intersection_observer_scroll_margin_enabled_;
  }

  static bool IntersectionObserverScrollMarginEnabled(const FeatureContext*) { return IntersectionObserverScrollMarginEnabled(); }

  static bool IntersectionOptimizationEnabled() {
    return is_intersection_optimization_enabled_;
  }

  static bool IntersectionOptimizationEnabled(const FeatureContext*) { return IntersectionOptimizationEnabled(); }

  static bool InvertedColorsEnabled() {
    return is_inverted_colors_enabled_;
  }

  static bool InvertedColorsEnabled(const FeatureContext*) { return InvertedColorsEnabled(); }

  static bool InvisibleSVGAnimationThrottlingEnabled() {
    return is_invisible_svg_animation_throttling_enabled_;
  }

  static bool InvisibleSVGAnimationThrottlingEnabled(const FeatureContext*) { return InvisibleSVGAnimationThrottlingEnabled(); }

  static bool KeyboardAccessibleTooltipEnabled() {
    return is_keyboard_accessible_tooltip_enabled_;
  }

  static bool KeyboardAccessibleTooltipEnabled(const FeatureContext*) { return KeyboardAccessibleTooltipEnabled(); }

  static bool KeyboardFocusableScrollersEnabled() {
    return is_keyboard_focusable_scrollers_enabled_;
  }

  static bool KeyboardFocusableScrollersEnabled(const FeatureContext*) { return KeyboardFocusableScrollersEnabled(); }

  static bool LangAttributeAwareFormControlUIEnabled() {
    return is_lang_attribute_aware_form_control_ui_enabled_;
  }

  static bool LangAttributeAwareFormControlUIEnabled(const FeatureContext*) { return LangAttributeAwareFormControlUIEnabled(); }

  static bool LayoutAlignForPositionedEnabled() {
    return is_layout_align_for_positioned_enabled_;
  }

  static bool LayoutAlignForPositionedEnabled(const FeatureContext*) { return LayoutAlignForPositionedEnabled(); }

  static bool LayoutFlexNewRowAlgorithmV3Enabled() {
    return is_layout_flex_new_row_algorithm_v_3_enabled_;
  }

  static bool LayoutFlexNewRowAlgorithmV3Enabled(const FeatureContext*) { return LayoutFlexNewRowAlgorithmV3Enabled(); }

  static bool LayoutIgnoreMarginsForStickyEnabled() {
    return is_layout_ignore_margins_for_sticky_enabled_;
  }

  static bool LayoutIgnoreMarginsForStickyEnabled(const FeatureContext*) { return LayoutIgnoreMarginsForStickyEnabled(); }

  static bool LayoutNGShapeCacheEnabled() {
    return is_layout_ng_shape_cache_enabled_;
  }

  static bool LayoutNGShapeCacheEnabled(const FeatureContext*) { return LayoutNGShapeCacheEnabled(); }

  static bool LazyInitializeMediaControlsEnabled() {
    return is_lazy_initialize_media_controls_enabled_;
  }

  static bool LazyInitializeMediaControlsEnabled(const FeatureContext*) { return LazyInitializeMediaControlsEnabled(); }

  static bool LazyLoadScrollMarginEnabled() {
    return is_lazy_load_scroll_margin_enabled_;
  }

  static bool LazyLoadScrollMarginEnabled(const FeatureContext*) { return LazyLoadScrollMarginEnabled(); }

  static bool LCPAnimatedImagesWebExposedEnabled() {
    return is_lcp_animated_images_web_exposed_enabled_;
  }

  static bool LCPAnimatedImagesWebExposedEnabled(const FeatureContext*) { return LCPAnimatedImagesWebExposedEnabled(); }

  static bool LCPMouseoverHeuristicsEnabled() {
    return is_lcp_mouseover_heuristics_enabled_;
  }

  static bool LCPMouseoverHeuristicsEnabled(const FeatureContext*) { return LCPMouseoverHeuristicsEnabled(); }

  static bool LCPMultipleUpdatesPerElementEnabled() {
    return is_lcp_multiple_updates_per_element_enabled_;
  }

  static bool LCPMultipleUpdatesPerElementEnabled(const FeatureContext*) { return LCPMultipleUpdatesPerElementEnabled(); }

  static bool LegacyWindowsDWriteFontFallbackEnabled() {
    return is_legacy_windows_d_write_font_fallback_enabled_;
  }

  static bool LegacyWindowsDWriteFontFallbackEnabled(const FeatureContext*) { return LegacyWindowsDWriteFontFallbackEnabled(); }

  static bool LockedModeEnabled() {
    return is_locked_mode_enabled_;
  }

  static bool LockedModeEnabled(const FeatureContext*) { return LockedModeEnabled(); }

  static bool LongAnimationFrameTimingEnabled() {
    return is_long_animation_frame_timing_enabled_;
  }

  static bool LongAnimationFrameTimingEnabled(const FeatureContext*) { return LongAnimationFrameTimingEnabled(); }

  static bool LongTaskFromLongAnimationFrameEnabled() {
    return is_long_task_from_long_animation_frame_enabled_;
  }

  static bool LongTaskFromLongAnimationFrameEnabled(const FeatureContext*) { return LongTaskFromLongAnimationFrameEnabled(); }

  static bool MacFontsDeprecateFontTraitsWorkaroundEnabled() {
    return is_mac_fonts_deprecate_font_traits_workaround_enabled_;
  }

  static bool MacFontsDeprecateFontTraitsWorkaroundEnabled(const FeatureContext*) { return MacFontsDeprecateFontTraitsWorkaroundEnabled(); }

  static bool MachineLearningCommonEnabled() {
    if (MachineLearningModelLoaderEnabled())
      return true;
    if (MachineLearningNeuralNetworkEnabled())
      return true;
    return is_machine_learning_common_enabled_;
  }

  static bool MachineLearningCommonEnabled(const FeatureContext*) { return MachineLearningCommonEnabled(); }

  static bool MachineLearningModelLoaderEnabled() {
    return is_machine_learning_model_loader_enabled_;
  }

  static bool MachineLearningModelLoaderEnabled(const FeatureContext*) { return MachineLearningModelLoaderEnabled(); }

  static bool MachineLearningNeuralNetworkEnabled() {
    return is_machine_learning_neural_network_enabled_;
  }

  static bool MachineLearningNeuralNetworkEnabled(const FeatureContext*) { return MachineLearningNeuralNetworkEnabled(); }

  static bool ManagedConfigurationEnabled() {
    return is_managed_configuration_enabled_;
  }

  static bool ManagedConfigurationEnabled(const FeatureContext*) { return ManagedConfigurationEnabled(); }

  static bool MaskingGraphemeClustersEnabled() {
    if (!OffsetMappingUnitVariableEnabled())
      return false;
    return is_masking_grapheme_clusters_enabled_;
  }

  static bool MaskingGraphemeClustersEnabled(const FeatureContext*) { return MaskingGraphemeClustersEnabled(); }

  static bool MeasureMemoryEnabled() {
    return is_measure_memory_enabled_;
  }

  static bool MeasureMemoryEnabled(const FeatureContext*) { return MeasureMemoryEnabled(); }

  static bool MediaCapabilitiesDynamicRangeEnabled() {
    return is_media_capabilities_dynamic_range_enabled_;
  }

  static bool MediaCapabilitiesDynamicRangeEnabled(const FeatureContext*) { return MediaCapabilitiesDynamicRangeEnabled(); }

  static bool MediaCapabilitiesEncodingInfoEnabled() {
    return is_media_capabilities_encoding_info_enabled_;
  }

  static bool MediaCapabilitiesEncodingInfoEnabled(const FeatureContext*) { return MediaCapabilitiesEncodingInfoEnabled(); }

  static bool MediaCapabilitiesSpatialAudioEnabled() {
    return is_media_capabilities_spatial_audio_enabled_;
  }

  static bool MediaCapabilitiesSpatialAudioEnabled(const FeatureContext*) { return MediaCapabilitiesSpatialAudioEnabled(); }

  static bool MediaCaptureEnabled() {
    return is_media_capture_enabled_;
  }

  static bool MediaCaptureEnabled(const FeatureContext*) { return MediaCaptureEnabled(); }

  static bool MediaCaptureCameraControlsEnabled() {
    return is_media_capture_camera_controls_enabled_;
  }

  static bool MediaCaptureCameraControlsEnabled(const FeatureContext*) { return MediaCaptureCameraControlsEnabled(); }

  static bool MediaCaptureVoiceIsolationEnabled() {
    return is_media_capture_voice_isolation_enabled_;
  }

  static bool MediaCaptureVoiceIsolationEnabled(const FeatureContext*) { return MediaCaptureVoiceIsolationEnabled(); }

  static bool MediaCastOverlayButtonEnabled() {
    return is_media_cast_overlay_button_enabled_;
  }

  static bool MediaCastOverlayButtonEnabled(const FeatureContext*) { return MediaCastOverlayButtonEnabled(); }

  static bool MediaControlsExpandGestureEnabled() {
    return is_media_controls_expand_gesture_enabled_;
  }

  static bool MediaControlsExpandGestureEnabled(const FeatureContext*) { return MediaControlsExpandGestureEnabled(); }

  static bool MediaControlsOverlayPlayButtonEnabled() {
    return is_media_controls_overlay_play_button_enabled_;
  }

  static bool MediaControlsOverlayPlayButtonEnabled(const FeatureContext*) { return MediaControlsOverlayPlayButtonEnabled(); }

  static bool MediaElementVolumeGreaterThanOneEnabled() {
    return is_media_element_volume_greater_than_one_enabled_;
  }

  static bool MediaElementVolumeGreaterThanOneEnabled(const FeatureContext*) { return MediaElementVolumeGreaterThanOneEnabled(); }

  static bool MediaEngagementBypassAutoplayPoliciesEnabled() {
    return is_media_engagement_bypass_autoplay_policies_enabled_;
  }

  static bool MediaEngagementBypassAutoplayPoliciesEnabled(const FeatureContext*) { return MediaEngagementBypassAutoplayPoliciesEnabled(); }

  static bool MediaLatencyHintEnabled() {
    return is_media_latency_hint_enabled_;
  }

  static bool MediaLatencyHintEnabled(const FeatureContext*) { return MediaLatencyHintEnabled(); }

  static bool MediaQueryNavigationControlsEnabled() {
    return is_media_query_navigation_controls_enabled_;
  }

  static bool MediaQueryNavigationControlsEnabled(const FeatureContext*) { return MediaQueryNavigationControlsEnabled(); }

  static bool MediaRecorderUseMediaVideoEncoderEnabled() {
    return is_media_recorder_use_media_video_encoder_enabled_;
  }

  static bool MediaRecorderUseMediaVideoEncoderEnabled(const FeatureContext*) { return MediaRecorderUseMediaVideoEncoderEnabled(); }

  static bool MediaSessionEnabled() {
    return is_media_session_enabled_;
  }

  static bool MediaSessionEnabled(const FeatureContext*) { return MediaSessionEnabled(); }

  static bool MediaSessionChapterInformationEnabled() {
    return is_media_session_chapter_information_enabled_;
  }

  static bool MediaSessionChapterInformationEnabled(const FeatureContext*) { return MediaSessionChapterInformationEnabled(); }

  static bool MediaSessionEnterPictureInPictureEnabled() {
    return is_media_session_enter_picture_in_picture_enabled_;
  }

  static bool MediaSessionEnterPictureInPictureEnabled(const FeatureContext*) { return MediaSessionEnterPictureInPictureEnabled(); }

  static bool MediaSourceExperimentalEnabled() {
    return is_media_source_experimental_enabled_;
  }

  static bool MediaSourceExperimentalEnabled(const FeatureContext*) { return MediaSourceExperimentalEnabled(); }

  static bool MediaSourceNewAbortAndDurationEnabled() {
    return is_media_source_new_abort_and_duration_enabled_;
  }

  static bool MediaSourceNewAbortAndDurationEnabled(const FeatureContext*) { return MediaSourceNewAbortAndDurationEnabled(); }

  static bool MediaStreamTrackTransferEnabled() {
    return is_media_stream_track_transfer_enabled_;
  }

  static bool MediaStreamTrackTransferEnabled(const FeatureContext*) { return MediaStreamTrackTransferEnabled(); }

  static bool MessagePortCloseEventEnabled() {
    return is_message_port_close_event_enabled_;
  }

  static bool MessagePortCloseEventEnabled(const FeatureContext*) { return MessagePortCloseEventEnabled(); }

  static bool MiddleClickAutoscrollEnabled() {
    return is_middle_click_autoscroll_enabled_;
  }

  static bool MiddleClickAutoscrollEnabled(const FeatureContext*) { return MiddleClickAutoscrollEnabled(); }

  static bool MobileLayoutThemeEnabled() {
    return is_mobile_layout_theme_enabled_;
  }

  static bool MobileLayoutThemeEnabled(const FeatureContext*) { return MobileLayoutThemeEnabled(); }

  static bool ModelExecutionAPIEnabled() {
    return is_model_execution_api_enabled_;
  }

  static bool ModelExecutionAPIEnabled(const FeatureContext*) { return ModelExecutionAPIEnabled(); }

  static bool MojoJSEnabled() {
    return is_mojo_js_enabled_;
  }

  static bool MojoJSEnabled(const FeatureContext*) { return MojoJSEnabled(); }

  static bool MojoJSTestEnabled() {
    return is_mojo_js_test_enabled_;
  }

  static bool MojoJSTestEnabled(const FeatureContext*) { return MojoJSTestEnabled(); }

  static bool MouseDragFromIframeOnCancelledMouseDownEnabled() {
    return is_mouse_drag_from_iframe_on_cancelled_mouse_down_enabled_;
  }

  static bool MouseDragFromIframeOnCancelledMouseDownEnabled(const FeatureContext*) { return MouseDragFromIframeOnCancelledMouseDownEnabled(); }

  static bool MouseDragOnCancelledMouseMoveEnabled() {
    return is_mouse_drag_on_cancelled_mouse_move_enabled_;
  }

  static bool MouseDragOnCancelledMouseMoveEnabled(const FeatureContext*) { return MouseDragOnCancelledMouseMoveEnabled(); }

  static bool MutationEventsEnabled() {
    return is_mutation_events_enabled_;
  }

  static bool MutationEventsEnabled(const FeatureContext*) { return MutationEventsEnabled(); }

  static bool NavigateEventCommitBehaviorEnabled() {
    return is_navigate_event_commit_behavior_enabled_;
  }

  static bool NavigateEventCommitBehaviorEnabled(const FeatureContext*) { return NavigateEventCommitBehaviorEnabled(); }

  static bool NavigateEventSourceElementEnabled() {
    return is_navigate_event_source_element_enabled_;
  }

  static bool NavigateEventSourceElementEnabled(const FeatureContext*) { return NavigateEventSourceElementEnabled(); }

  static bool NavigationActivationEnabled() {
    return is_navigation_activation_enabled_;
  }

  static bool NavigationActivationEnabled(const FeatureContext*) { return NavigationActivationEnabled(); }

  static bool NavigatorContentUtilsEnabled() {
    return is_navigator_content_utils_enabled_;
  }

  static bool NavigatorContentUtilsEnabled(const FeatureContext*) { return NavigatorContentUtilsEnabled(); }

  static bool NestedTopLayerSupportEnabled() {
    return is_nested_top_layer_support_enabled_;
  }

  static bool NestedTopLayerSupportEnabled(const FeatureContext*) { return NestedTopLayerSupportEnabled(); }

  static bool NetInfoConstantTypeEnabled() {
    return is_net_info_constant_type_enabled_;
  }

  static bool NetInfoConstantTypeEnabled(const FeatureContext*) { return NetInfoConstantTypeEnabled(); }

  static bool NetInfoDownlinkMaxEnabled() {
    return is_net_info_downlink_max_enabled_;
  }

  static bool NetInfoDownlinkMaxEnabled(const FeatureContext*) { return NetInfoDownlinkMaxEnabled(); }

  static bool NextSiblingPositionUseNextCandidateEnabled() {
    return is_next_sibling_position_use_next_candidate_enabled_;
  }

  static bool NextSiblingPositionUseNextCandidateEnabled(const FeatureContext*) { return NextSiblingPositionUseNextCandidateEnabled(); }

  static bool NoIdleEncodingForWebTestsEnabled() {
    return is_no_idle_encoding_for_web_tests_enabled_;
  }

  static bool NoIdleEncodingForWebTestsEnabled(const FeatureContext*) { return NoIdleEncodingForWebTestsEnabled(); }

  static bool NonComposedEnterLeaveEventsEnabled() {
    return is_non_composed_enter_leave_events_enabled_;
  }

  static bool NonComposedEnterLeaveEventsEnabled(const FeatureContext*) { return NonComposedEnterLeaveEventsEnabled(); }

  static bool NonStandardAppearanceValuesHighUsageEnabled() {
    return is_non_standard_appearance_values_high_usage_enabled_;
  }

  static bool NonStandardAppearanceValuesHighUsageEnabled(const FeatureContext*) { return NonStandardAppearanceValuesHighUsageEnabled(); }

  static bool NonStandardAppearanceValueSliderVerticalEnabled() {
    return is_non_standard_appearance_value_slider_vertical_enabled_;
  }

  static bool NonStandardAppearanceValueSliderVerticalEnabled(const FeatureContext*) { return NonStandardAppearanceValueSliderVerticalEnabled(); }

  static bool NonStandardAppearanceValuesLowUsageEnabled() {
    return is_non_standard_appearance_values_low_usage_enabled_;
  }

  static bool NonStandardAppearanceValuesLowUsageEnabled(const FeatureContext*) { return NonStandardAppearanceValuesLowUsageEnabled(); }

  static bool NoOffsetMappingForInconsistentTextEnabled() {
    return is_no_offset_mapping_for_inconsistent_text_enabled_;
  }

  static bool NoOffsetMappingForInconsistentTextEnabled(const FeatureContext*) { return NoOffsetMappingForInconsistentTextEnabled(); }

  static bool NotificationConstructorEnabled() {
    return is_notification_constructor_enabled_;
  }

  static bool NotificationConstructorEnabled(const FeatureContext*) { return NotificationConstructorEnabled(); }

  static bool NotificationContentImageEnabled() {
    return is_notification_content_image_enabled_;
  }

  static bool NotificationContentImageEnabled(const FeatureContext*) { return NotificationContentImageEnabled(); }

  static bool NotificationsEnabled() {
    return is_notifications_enabled_;
  }

  static bool NotificationsEnabled(const FeatureContext*) { return NotificationsEnabled(); }

  static bool ObservableAPIEnabled() {
    return is_observable_api_enabled_;
  }

  static bool ObservableAPIEnabled(const FeatureContext*) { return ObservableAPIEnabled(); }

  static bool OffMainThreadCSSPaintEnabled() {
    return is_off_main_thread_css_paint_enabled_;
  }

  static bool OffMainThreadCSSPaintEnabled(const FeatureContext*) { return OffMainThreadCSSPaintEnabled(); }

  static bool OffscreenCanvasCommitEnabled() {
    return is_offscreen_canvas_commit_enabled_;
  }

  static bool OffscreenCanvasCommitEnabled(const FeatureContext*) { return OffscreenCanvasCommitEnabled(); }

  static bool OffsetMappingUnitVariableEnabled() {
    return is_offset_mapping_unit_variable_enabled_;
  }

  static bool OffsetMappingUnitVariableEnabled(const FeatureContext*) { return OffsetMappingUnitVariableEnabled(); }

  static bool OnDeviceChangeEnabled() {
    return is_on_device_change_enabled_;
  }

  static bool OnDeviceChangeEnabled(const FeatureContext*) { return OnDeviceChangeEnabled(); }

  static bool OptionElementAlwaysUseLabelEnabled() {
    return is_option_element_always_use_label_enabled_;
  }

  static bool OptionElementAlwaysUseLabelEnabled(const FeatureContext*) { return OptionElementAlwaysUseLabelEnabled(); }

  static bool OrientationEventEnabled() {
    return is_orientation_event_enabled_;
  }

  static bool OrientationEventEnabled(const FeatureContext*) { return OrientationEventEnabled(); }

  static bool OriginIsolationHeaderEnabled() {
    return is_origin_isolation_header_enabled_;
  }

  static bool OriginIsolationHeaderEnabled(const FeatureContext*) { return OriginIsolationHeaderEnabled(); }

  static bool OriginPolicyEnabled() {
    return is_origin_policy_enabled_;
  }

  static bool OriginPolicyEnabled(const FeatureContext*) { return OriginPolicyEnabled(); }

  static bool OverscrollCustomizationEnabled() {
    return is_overscroll_customization_enabled_;
  }

  static bool OverscrollCustomizationEnabled(const FeatureContext*) { return OverscrollCustomizationEnabled(); }

  static bool PageMarginBoxesEnabled() {
    return is_page_margin_boxes_enabled_;
  }

  static bool PageMarginBoxesEnabled(const FeatureContext*) { return PageMarginBoxesEnabled(); }

  static bool PagePopupEnabled() {
    return is_page_popup_enabled_;
  }

  static bool PagePopupEnabled(const FeatureContext*) { return PagePopupEnabled(); }

  static bool PageRevealEventEnabled() {
    if (ViewTransitionOnNavigationEnabled())
      return true;
    return is_page_reveal_event_enabled_;
  }

  static bool PageRevealEventEnabled(const FeatureContext*) { return PageRevealEventEnabled(); }

  static bool PaintUnderInvalidationCheckingEnabled() {
    return is_paint_under_invalidation_checking_enabled_;
  }

  static bool PaintUnderInvalidationCheckingEnabled(const FeatureContext*) { return PaintUnderInvalidationCheckingEnabled(); }

  static bool PasswordRevealEnabled() {
    return is_password_reveal_enabled_;
  }

  static bool PasswordRevealEnabled(const FeatureContext*) { return PasswordRevealEnabled(); }

  static bool PasswordStrongLabelEnabled() {
    return is_password_strong_label_enabled_;
  }

  static bool PasswordStrongLabelEnabled(const FeatureContext*) { return PasswordStrongLabelEnabled(); }

  static bool PastingBlocksSVGUseNonLocalHrefsEnabled() {
    return is_pasting_blocks_svg_use_non_local_hrefs_enabled_;
  }

  static bool PastingBlocksSVGUseNonLocalHrefsEnabled(const FeatureContext*) { return PastingBlocksSVGUseNonLocalHrefsEnabled(); }

  static bool PaymentAppEnabled() {
    if (!PaymentRequestEnabled())
      return false;
    return is_payment_app_enabled_;
  }

  static bool PaymentAppEnabled(const FeatureContext*) { return PaymentAppEnabled(); }

  static bool PaymentInstrumentsEnabled() {
    if (!PaymentAppEnabled())
      return false;
    return is_payment_instruments_enabled_;
  }

  static bool PaymentInstrumentsEnabled(const FeatureContext*) { return PaymentInstrumentsEnabled(); }

  static bool PaymentMethodChangeEventEnabled() {
    if (!PaymentRequestEnabled())
      return false;
    return is_payment_method_change_event_enabled_;
  }

  static bool PaymentMethodChangeEventEnabled(const FeatureContext*) { return PaymentMethodChangeEventEnabled(); }

  static bool PaymentRequestEnabled() {
    return is_payment_request_enabled_;
  }

  static bool PaymentRequestEnabled(const FeatureContext*) { return PaymentRequestEnabled(); }

  static bool PaymentRequestAllowOneActivationlessShowEnabled() {
    return is_payment_request_allow_one_activationless_show_enabled_;
  }

  static bool PaymentRequestAllowOneActivationlessShowEnabled(const FeatureContext*) { return PaymentRequestAllowOneActivationlessShowEnabled(); }

  static bool PaymentRequestMerchantValidationEventEnabled() {
    return is_payment_request_merchant_validation_event_enabled_;
  }

  static bool PaymentRequestMerchantValidationEventEnabled(const FeatureContext*) { return PaymentRequestMerchantValidationEventEnabled(); }

  static bool PercentBasedScrollingEnabled() {
    return is_percent_based_scrolling_enabled_;
  }

  static bool PercentBasedScrollingEnabled(const FeatureContext*) { return PercentBasedScrollingEnabled(); }

  static bool PerformanceManagerInstrumentationEnabled() {
    return is_performance_manager_instrumentation_enabled_;
  }

  static bool PerformanceManagerInstrumentationEnabled(const FeatureContext*) { return PerformanceManagerInstrumentationEnabled(); }

  static bool PerformanceMarkFeatureUsageEnabled() {
    return is_performance_mark_feature_usage_enabled_;
  }

  static bool PerformanceMarkFeatureUsageEnabled(const FeatureContext*) { return PerformanceMarkFeatureUsageEnabled(); }

  static bool PerformanceNavigateSystemEntropyEnabled() {
    return is_performance_navigate_system_entropy_enabled_;
  }

  static bool PerformanceNavigateSystemEntropyEnabled(const FeatureContext*) { return PerformanceNavigateSystemEntropyEnabled(); }

  static bool PeriodicBackgroundSyncEnabled() {
    return is_periodic_background_sync_enabled_;
  }

  static bool PeriodicBackgroundSyncEnabled(const FeatureContext*) { return PeriodicBackgroundSyncEnabled(); }

  static bool PermissionElementEnabled() {
    return is_permission_element_enabled_;
  }

  static bool PermissionElementEnabled(const FeatureContext*) { return PermissionElementEnabled(); }

  static bool PermissionsEnabled() {
    return is_permissions_enabled_;
  }

  static bool PermissionsEnabled(const FeatureContext*) { return PermissionsEnabled(); }

  static bool PermissionsRequestRevokeEnabled() {
    return is_permissions_request_revoke_enabled_;
  }

  static bool PermissionsRequestRevokeEnabled(const FeatureContext*) { return PermissionsRequestRevokeEnabled(); }

  static bool PointerCaptureLostOnRemovalDuringCaptureEnabled() {
    return is_pointer_capture_lost_on_removal_during_capture_enabled_;
  }

  static bool PointerCaptureLostOnRemovalDuringCaptureEnabled(const FeatureContext*) { return PointerCaptureLostOnRemovalDuringCaptureEnabled(); }

  static bool PointerEventDeviceIdEnabled() {
    return is_pointer_event_device_id_enabled_;
  }

  static bool PointerEventDeviceIdEnabled(const FeatureContext*) { return PointerEventDeviceIdEnabled(); }

  static bool PositionOutsideTabSpanCheckSiblingNodeEnabled() {
    return is_position_outside_tab_span_check_sibling_node_enabled_;
  }

  static bool PositionOutsideTabSpanCheckSiblingNodeEnabled(const FeatureContext*) { return PositionOutsideTabSpanCheckSiblingNodeEnabled(); }

  static bool PreciseMemoryInfoEnabled() {
    return is_precise_memory_info_enabled_;
  }

  static bool PreciseMemoryInfoEnabled(const FeatureContext*) { return PreciseMemoryInfoEnabled(); }

  static bool PreferDefaultScrollbarStylesEnabled() {
    return is_prefer_default_scrollbar_styles_enabled_;
  }

  static bool PreferDefaultScrollbarStylesEnabled(const FeatureContext*) { return PreferDefaultScrollbarStylesEnabled(); }

  static bool PreferNonCompositedScrollingEnabled() {
    return is_prefer_non_composited_scrolling_enabled_;
  }

  static bool PreferNonCompositedScrollingEnabled(const FeatureContext*) { return PreferNonCompositedScrollingEnabled(); }

  static bool PrefersReducedDataEnabled() {
    return is_prefers_reduced_data_enabled_;
  }

  static bool PrefersReducedDataEnabled(const FeatureContext*) { return PrefersReducedDataEnabled(); }

  static bool PrefixedVideoFullscreenEnabled() {
    return is_prefixed_video_fullscreen_enabled_;
  }

  static bool PrefixedVideoFullscreenEnabled(const FeatureContext*) { return PrefixedVideoFullscreenEnabled(); }

  static bool PrePaintAncestorsOfMissedOOFEnabled() {
    return is_pre_paint_ancestors_of_missed_oof_enabled_;
  }

  static bool PrePaintAncestorsOfMissedOOFEnabled(const FeatureContext*) { return PrePaintAncestorsOfMissedOOFEnabled(); }

  static bool Prerender2Enabled() {
    return is_prerender_2_enabled_;
  }

  static bool Prerender2Enabled(const FeatureContext*) { return Prerender2Enabled(); }

  static bool PresentationEnabled() {
    return is_presentation_enabled_;
  }

  static bool PresentationEnabled(const FeatureContext*) { return PresentationEnabled(); }

  static bool PrettyPrintJSONDocumentEnabled() {
    return is_pretty_print_js_on_document_enabled_;
  }

  static bool PrettyPrintJSONDocumentEnabled(const FeatureContext*) { return PrettyPrintJSONDocumentEnabled(); }

  static bool PreventReadingSystemAccentColorEnabled() {
    return is_prevent_reading_system_accent_color_enabled_;
  }

  static bool PreventReadingSystemAccentColorEnabled(const FeatureContext*) { return PreventReadingSystemAccentColorEnabled(); }

  static bool PrivateAggregationAuctionReportBuyerDebugModeConfigEnabled() {
    return is_private_aggregation_auction_report_buyer_debug_mode_config_enabled_;
  }

  static bool PrivateAggregationAuctionReportBuyerDebugModeConfigEnabled(const FeatureContext*) { return PrivateAggregationAuctionReportBuyerDebugModeConfigEnabled(); }

  static bool PrivateNetworkAccessNullIpAddressEnabled() {
    return is_private_network_access_null_ip_address_enabled_;
  }

  static bool PrivateNetworkAccessNullIpAddressEnabled(const FeatureContext*) { return PrivateNetworkAccessNullIpAddressEnabled(); }

  static bool PrivateStateTokensAlwaysAllowIssuanceEnabled() {
    return is_private_state_tokens_always_allow_issuance_enabled_;
  }

  static bool PrivateStateTokensAlwaysAllowIssuanceEnabled(const FeatureContext*) { return PrivateStateTokensAlwaysAllowIssuanceEnabled(); }

  static bool PushMessagingEnabled() {
    return is_push_messaging_enabled_;
  }

  static bool PushMessagingEnabled(const FeatureContext*) { return PushMessagingEnabled(); }

  static bool PushMessagingSubscriptionChangeEnabled() {
    return is_push_messaging_subscription_change_enabled_;
  }

  static bool PushMessagingSubscriptionChangeEnabled(const FeatureContext*) { return PushMessagingSubscriptionChangeEnabled(); }

  static bool QuickIntensiveWakeUpThrottlingAfterLoadingEnabled() {
    return is_quick_intensive_wake_up_throttling_after_loading_enabled_;
  }

  static bool QuickIntensiveWakeUpThrottlingAfterLoadingEnabled(const FeatureContext*) { return QuickIntensiveWakeUpThrottlingAfterLoadingEnabled(); }

  static bool QuotaChangeEnabled() {
    return is_quota_change_enabled_;
  }

  static bool QuotaChangeEnabled(const FeatureContext*) { return QuotaChangeEnabled(); }

  static bool ReadableStreamTeeCloneForBranch2Enabled() {
    return is_readable_stream_tee_clone_for_branch_2_enabled_;
  }

  static bool ReadableStreamTeeCloneForBranch2Enabled(const FeatureContext*) { return ReadableStreamTeeCloneForBranch2Enabled(); }

  static bool ReduceCookieIPCsEnabled() {
    return is_reduce_cookie_ip_cs_enabled_;
  }

  static bool ReduceCookieIPCsEnabled(const FeatureContext*) { return ReduceCookieIPCsEnabled(); }

  static bool ReduceUserAgentAndroidVersionDeviceModelEnabled() {
    if (!ReduceUserAgentMinorVersionEnabled())
      return false;
    return is_reduce_user_agent_android_version_device_model_enabled_;
  }

  static bool ReduceUserAgentAndroidVersionDeviceModelEnabled(const FeatureContext*) { return ReduceUserAgentAndroidVersionDeviceModelEnabled(); }

  static bool ReduceUserAgentMinorVersionEnabled() {
    return is_reduce_user_agent_minor_version_enabled_;
  }

  static bool ReduceUserAgentMinorVersionEnabled(const FeatureContext*) { return ReduceUserAgentMinorVersionEnabled(); }

  static bool ReduceUserAgentPlatformOsCpuEnabled() {
    if (!ReduceUserAgentMinorVersionEnabled())
      return false;
    return is_reduce_user_agent_platform_os_cpu_enabled_;
  }

  static bool ReduceUserAgentPlatformOsCpuEnabled(const FeatureContext*) { return ReduceUserAgentPlatformOsCpuEnabled(); }

  static bool RegionCaptureEnabled() {
    return is_region_capture_enabled_;
  }

  static bool RegionCaptureEnabled(const FeatureContext*) { return RegionCaptureEnabled(); }

  static bool RemotePlaybackEnabled() {
    return is_remote_playback_enabled_;
  }

  static bool RemotePlaybackEnabled(const FeatureContext*) { return RemotePlaybackEnabled(); }

  static bool RemotePlaybackBackendEnabled() {
    return is_remote_playback_backend_enabled_;
  }

  static bool RemotePlaybackBackendEnabled(const FeatureContext*) { return RemotePlaybackBackendEnabled(); }

  static bool RemoveDanglingMarkupInTargetEnabled() {
    return is_remove_dangling_markup_in_target_enabled_;
  }

  static bool RemoveDanglingMarkupInTargetEnabled(const FeatureContext*) { return RemoveDanglingMarkupInTargetEnabled(); }

  static bool RemoveDataUrlInSvgUseEnabled() {
    return is_remove_data_url_in_svg_use_enabled_;
  }

  static bool RemoveDataUrlInSvgUseEnabled(const FeatureContext*) { return RemoveDataUrlInSvgUseEnabled(); }

  static bool RemoveMobileViewportDoubleTapEnabled() {
    return is_remove_mobile_viewport_double_tap_enabled_;
  }

  static bool RemoveMobileViewportDoubleTapEnabled(const FeatureContext*) { return RemoveMobileViewportDoubleTapEnabled(); }

  static bool RenderBlockingInlineModuleScriptEnabled() {
    return is_render_blocking_inline_module_script_enabled_;
  }

  static bool RenderBlockingInlineModuleScriptEnabled(const FeatureContext*) { return RenderBlockingInlineModuleScriptEnabled(); }

  static bool RenderBlockingStatusEnabled() {
    return is_render_blocking_status_enabled_;
  }

  static bool RenderBlockingStatusEnabled(const FeatureContext*) { return RenderBlockingStatusEnabled(); }

  static bool RenderPriorityAttributeEnabled() {
    return is_render_priority_attribute_enabled_;
  }

  static bool RenderPriorityAttributeEnabled(const FeatureContext*) { return RenderPriorityAttributeEnabled(); }

  static bool ReportVisibleLineBoundsEnabled() {
    return is_report_visible_line_bounds_enabled_;
  }

  static bool ReportVisibleLineBoundsEnabled(const FeatureContext*) { return ReportVisibleLineBoundsEnabled(); }

  static bool ResourceTimingContentTypeEnabled() {
    return is_resource_timing_content_type_enabled_;
  }

  static bool ResourceTimingContentTypeEnabled(const FeatureContext*) { return ResourceTimingContentTypeEnabled(); }

  static bool ResourceTimingUseCORSForBodySizesEnabled() {
    return is_resource_timing_use_cors_for_body_sizes_enabled_;
  }

  static bool ResourceTimingUseCORSForBodySizesEnabled(const FeatureContext*) { return ResourceTimingUseCORSForBodySizesEnabled(); }

  static bool RestrictGamepadAccessEnabled() {
    return is_restrict_gamepad_access_enabled_;
  }

  static bool RestrictGamepadAccessEnabled(const FeatureContext*) { return RestrictGamepadAccessEnabled(); }

  static bool RewindFloatsEnabled() {
    return is_rewind_floats_enabled_;
  }

  static bool RewindFloatsEnabled(const FeatureContext*) { return RewindFloatsEnabled(); }

  static bool RTCEncodedAudioFrameAbsCaptureTimeEnabled() {
    return is_rtc_encoded_audio_frame_abs_capture_time_enabled_;
  }

  static bool RTCEncodedAudioFrameAbsCaptureTimeEnabled(const FeatureContext*) { return RTCEncodedAudioFrameAbsCaptureTimeEnabled(); }

  static bool RTCEncodedVideoFrameAdditionalMetadataEnabled() {
    return is_rtc_encoded_video_frame_additional_metadata_enabled_;
  }

  static bool RTCEncodedVideoFrameAdditionalMetadataEnabled(const FeatureContext*) { return RTCEncodedVideoFrameAdditionalMetadataEnabled(); }

  static bool RTCRtpEncodingParametersCodecEnabled() {
    return is_rtc_rtp_encoding_parameters_codec_enabled_;
  }

  static bool RTCRtpEncodingParametersCodecEnabled(const FeatureContext*) { return RTCRtpEncodingParametersCodecEnabled(); }

  static bool RTCRtpHeaderExtensionControlEnabled() {
    return is_rtc_rtp_header_extension_control_enabled_;
  }

  static bool RTCRtpHeaderExtensionControlEnabled(const FeatureContext*) { return RTCRtpHeaderExtensionControlEnabled(); }

  static bool RTCSvcScalabilityModeEnabled() {
    return is_rtc_svc_scalability_mode_enabled_;
  }

  static bool RTCSvcScalabilityModeEnabled(const FeatureContext*) { return RTCSvcScalabilityModeEnabled(); }

  static bool RubyInlinifyEnabled() {
    if (!CssDisplayRubyEnabled())
      return false;
    return is_ruby_inlinify_enabled_;
  }

  static bool RubyInlinifyEnabled(const FeatureContext*) { return RubyInlinifyEnabled(); }

  static bool RubySimplePairingEnabled() {
    return is_ruby_simple_pairing_enabled_;
  }

  static bool RubySimplePairingEnabled(const FeatureContext*) { return RubySimplePairingEnabled(); }

  static bool RunMicrotaskBeforeXmlCustomElementEnabled() {
    return is_run_microtask_before_xml_custom_element_enabled_;
  }

  static bool RunMicrotaskBeforeXmlCustomElementEnabled(const FeatureContext*) { return RunMicrotaskBeforeXmlCustomElementEnabled(); }

  static bool SanitizerAPIEnabled() {
    return is_sanitizer_api_enabled_;
  }

  static bool SanitizerAPIEnabled(const FeatureContext*) { return SanitizerAPIEnabled(); }

  static bool ScopedCustomElementRegistryEnabled() {
    return is_scoped_custom_element_registry_enabled_;
  }

  static bool ScopedCustomElementRegistryEnabled(const FeatureContext*) { return ScopedCustomElementRegistryEnabled(); }

  static bool ScriptedSpeechRecognitionEnabled() {
    return is_scripted_speech_recognition_enabled_;
  }

  static bool ScriptedSpeechRecognitionEnabled(const FeatureContext*) { return ScriptedSpeechRecognitionEnabled(); }

  static bool ScriptedSpeechSynthesisEnabled() {
    return is_scripted_speech_synthesis_enabled_;
  }

  static bool ScriptedSpeechSynthesisEnabled(const FeatureContext*) { return ScriptedSpeechSynthesisEnabled(); }

  static bool ScrollbarColorEnabled() {
    return is_scrollbar_color_enabled_;
  }

  static bool ScrollbarColorEnabled(const FeatureContext*) { return ScrollbarColorEnabled(); }

  static bool ScrollbarWidthEnabled() {
    return is_scrollbar_width_enabled_;
  }

  static bool ScrollbarWidthEnabled(const FeatureContext*) { return ScrollbarWidthEnabled(); }

  static bool ScrollEndEventsEnabled() {
    return is_scroll_end_events_enabled_;
  }

  static bool ScrollEndEventsEnabled(const FeatureContext*) { return ScrollEndEventsEnabled(); }

  static bool ScrollTimelineEnabled() {
    if (AnimationWorkletEnabled())
      return true;
    if (ScrollTimelineCurrentTimeEnabled())
      return true;
    return is_scroll_timeline_enabled_;
  }

  static bool ScrollTimelineEnabled(const FeatureContext*) { return ScrollTimelineEnabled(); }

  static bool ScrollTimelineCurrentTimeEnabled() {
    return is_scroll_timeline_current_time_enabled_;
  }

  static bool ScrollTimelineCurrentTimeEnabled(const FeatureContext*) { return ScrollTimelineCurrentTimeEnabled(); }

  static bool ScrollTimelineOnCompositorEnabled() {
    return is_scroll_timeline_on_compositor_enabled_;
  }

  static bool ScrollTimelineOnCompositorEnabled(const FeatureContext*) { return ScrollTimelineOnCompositorEnabled(); }

  static bool ScrollTopLeftInteropEnabled() {
    return is_scroll_top_left_interop_enabled_;
  }

  static bool ScrollTopLeftInteropEnabled(const FeatureContext*) { return ScrollTopLeftInteropEnabled(); }

  static bool SecurePaymentConfirmationEnabled() {
    return is_secure_payment_confirmation_enabled_;
  }

  static bool SecurePaymentConfirmationEnabled(const FeatureContext*) { return SecurePaymentConfirmationEnabled(); }

  static bool SecurePaymentConfirmationAllowOneActivationlessShowEnabled() {
    return is_secure_payment_confirmation_allow_one_activationless_show_enabled_;
  }

  static bool SecurePaymentConfirmationAllowOneActivationlessShowEnabled(const FeatureContext*) { return SecurePaymentConfirmationAllowOneActivationlessShowEnabled(); }

  static bool SecurePaymentConfirmationDebugEnabled() {
    return is_secure_payment_confirmation_debug_enabled_;
  }

  static bool SecurePaymentConfirmationDebugEnabled(const FeatureContext*) { return SecurePaymentConfirmationDebugEnabled(); }

  static bool SecurePaymentConfirmationExtensionsEnabled() {
    return is_secure_payment_confirmation_extensions_enabled_;
  }

  static bool SecurePaymentConfirmationExtensionsEnabled(const FeatureContext*) { return SecurePaymentConfirmationExtensionsEnabled(); }

  static bool SelectHrEnabled() {
    return is_select_hr_enabled_;
  }

  static bool SelectHrEnabled(const FeatureContext*) { return SelectHrEnabled(); }

  static bool SendBeaconThrowForBlobWithNonSimpleTypeEnabled() {
    return is_send_beacon_throw_for_blob_with_non_simple_type_enabled_;
  }

  static bool SendBeaconThrowForBlobWithNonSimpleTypeEnabled(const FeatureContext*) { return SendBeaconThrowForBlobWithNonSimpleTypeEnabled(); }

  static bool SensorExtraClassesEnabled() {
    return is_sensor_extra_classes_enabled_;
  }

  static bool SensorExtraClassesEnabled(const FeatureContext*) { return SensorExtraClassesEnabled(); }

  static bool SerialEnabled() {
    return is_serial_enabled_;
  }

  static bool SerialEnabled(const FeatureContext*) { return SerialEnabled(); }

  static bool SerializeViewTransitionStateInSPAEnabled() {
    return is_serialize_view_transition_state_in_spa_enabled_;
  }

  static bool SerializeViewTransitionStateInSPAEnabled(const FeatureContext*) { return SerializeViewTransitionStateInSPAEnabled(); }

  static bool ServiceWorkerClientLifecycleStateEnabled() {
    return is_service_worker_client_lifecycle_state_enabled_;
  }

  static bool ServiceWorkerClientLifecycleStateEnabled(const FeatureContext*) { return ServiceWorkerClientLifecycleStateEnabled(); }

  static bool SetSequentialFocusStartingPointEnabled() {
    return is_set_sequential_focus_starting_point_enabled_;
  }

  static bool SetSequentialFocusStartingPointEnabled(const FeatureContext*) { return SetSequentialFocusStartingPointEnabled(); }

  static bool ShadowRootAttachmentNewBehaviorEnabled() {
    return is_shadow_root_attachment_new_behavior_enabled_;
  }

  static bool ShadowRootAttachmentNewBehaviorEnabled(const FeatureContext*) { return ShadowRootAttachmentNewBehaviorEnabled(); }

  static bool ShadowRootClonableEnabled() {
    return is_shadow_root_clonable_enabled_;
  }

  static bool ShadowRootClonableEnabled(const FeatureContext*) { return ShadowRootClonableEnabled(); }

  static bool SharedArrayBufferEnabled() {
    return is_shared_array_buffer_enabled_;
  }

  static bool SharedArrayBufferEnabled(const FeatureContext*) { return SharedArrayBufferEnabled(); }

  static bool SharedArrayBufferOnDesktopEnabled() {
    return is_shared_array_buffer_on_desktop_enabled_;
  }

  static bool SharedArrayBufferOnDesktopEnabled(const FeatureContext*) { return SharedArrayBufferOnDesktopEnabled(); }

  static bool SharedArrayBufferUnrestrictedAccessAllowedEnabled() {
    return is_shared_array_buffer_unrestricted_access_allowed_enabled_;
  }

  static bool SharedArrayBufferUnrestrictedAccessAllowedEnabled(const FeatureContext*) { return SharedArrayBufferUnrestrictedAccessAllowedEnabled(); }

  static bool SharedAutofillEnabled() {
    return is_shared_autofill_enabled_;
  }

  static bool SharedAutofillEnabled(const FeatureContext*) { return SharedAutofillEnabled(); }

  static bool SharedStorageAPIM118Enabled() {
    return is_shared_storage_api_m_118_enabled_;
  }

  static bool SharedStorageAPIM118Enabled(const FeatureContext*) { return SharedStorageAPIM118Enabled(); }

  static bool SharedWorkerEnabled() {
    return is_shared_worker_enabled_;
  }

  static bool SharedWorkerEnabled(const FeatureContext*) { return SharedWorkerEnabled(); }

  static bool SiteInitiatedMirroringEnabled() {
    return is_site_initiated_mirroring_enabled_;
  }

  static bool SiteInitiatedMirroringEnabled(const FeatureContext*) { return SiteInitiatedMirroringEnabled(); }

  static bool SkipAdEnabled() {
    if (!MediaSessionEnabled())
      return false;
    return is_skip_ad_enabled_;
  }

  static bool SkipAdEnabled(const FeatureContext*) { return SkipAdEnabled(); }

  static bool SkipTouchEventFilterEnabled() {
    return is_skip_touch_event_filter_enabled_;
  }

  static bool SkipTouchEventFilterEnabled(const FeatureContext*) { return SkipTouchEventFilterEnabled(); }

  static bool SmartCardEnabled() {
    return is_smart_card_enabled_;
  }

  static bool SmartCardEnabled(const FeatureContext*) { return SmartCardEnabled(); }

  static bool SmartZoomEnabled() {
    if (!AccessibilityPageZoomEnabled())
      return false;
    return is_smart_zoom_enabled_;
  }

  static bool SmartZoomEnabled(const FeatureContext*) { return SmartZoomEnabled(); }

  static bool SmilAutoSuspendOnLagEnabled() {
    return is_smil_auto_suspend_on_lag_enabled_;
  }

  static bool SmilAutoSuspendOnLagEnabled(const FeatureContext*) { return SmilAutoSuspendOnLagEnabled(); }

  static bool SnapBorderWidthsBeforeLayoutEnabled() {
    return is_snap_border_widths_before_layout_enabled_;
  }

  static bool SnapBorderWidthsBeforeLayoutEnabled(const FeatureContext*) { return SnapBorderWidthsBeforeLayoutEnabled(); }

  static bool SoftNavigationDetectionEnabled() {
    return is_soft_navigation_detection_enabled_;
  }

  static bool SoftNavigationDetectionEnabled(const FeatureContext*) { return SoftNavigationDetectionEnabled(); }

  static bool SoftNavigationHeuristicsExposeFPAndFCPEnabled() {
    return is_soft_navigation_heuristics_expose_fp_and_fcp_enabled_;
  }

  static bool SoftNavigationHeuristicsExposeFPAndFCPEnabled(const FeatureContext*) { return SoftNavigationHeuristicsExposeFPAndFCPEnabled(); }

  static bool SparseObjectPaintPropertiesEnabled() {
    return is_sparse_object_paint_properties_enabled_;
  }

  static bool SparseObjectPaintPropertiesEnabled(const FeatureContext*) { return SparseObjectPaintPropertiesEnabled(); }

  static bool SpeculationRulesImplicitSourceEnabled() {
    return is_speculation_rules_implicit_source_enabled_;
  }

  static bool SpeculationRulesImplicitSourceEnabled(const FeatureContext*) { return SpeculationRulesImplicitSourceEnabled(); }

  static bool SpeculationRulesNoVarySearchHintShippedByDefaultEnabled() {
    return is_speculation_rules_no_vary_search_hint_shipped_by_default_enabled_;
  }

  static bool SpeculationRulesNoVarySearchHintShippedByDefaultEnabled(const FeatureContext*) { return SpeculationRulesNoVarySearchHintShippedByDefaultEnabled(); }

  static bool SpeculationRulesPointerDownHeuristicsEnabled() {
    return is_speculation_rules_pointer_down_heuristics_enabled_;
  }

  static bool SpeculationRulesPointerDownHeuristicsEnabled(const FeatureContext*) { return SpeculationRulesPointerDownHeuristicsEnabled(); }

  static bool SpeculationRulesPointerHoverHeuristicsEnabled() {
    return is_speculation_rules_pointer_hover_heuristics_enabled_;
  }

  static bool SpeculationRulesPointerHoverHeuristicsEnabled(const FeatureContext*) { return SpeculationRulesPointerHoverHeuristicsEnabled(); }

  static bool SpeculationRulesPrefetchWithSubresourcesEnabled() {
    return is_speculation_rules_prefetch_with_subresources_enabled_;
  }

  static bool SpeculationRulesPrefetchWithSubresourcesEnabled(const FeatureContext*) { return SpeculationRulesPrefetchWithSubresourcesEnabled(); }

  static bool SpellCheckerReplaceRangeUseInsertTextEnabled() {
    return is_spell_checker_replace_range_use_insert_text_enabled_;
  }

  static bool SpellCheckerReplaceRangeUseInsertTextEnabled(const FeatureContext*) { return SpellCheckerReplaceRangeUseInsertTextEnabled(); }

  static bool SrcsetMaxDensityEnabled() {
    return is_srcset_max_density_enabled_;
  }

  static bool SrcsetMaxDensityEnabled(const FeatureContext*) { return SrcsetMaxDensityEnabled(); }

  static bool StableBlinkFeaturesEnabled() {
    return is_stable_blink_features_enabled_;
  }

  static bool StableBlinkFeaturesEnabled(const FeatureContext*) { return StableBlinkFeaturesEnabled(); }

  static bool StandardizedBrowserZoomEnabled() {
    return is_standardized_browser_zoom_enabled_;
  }

  static bool StandardizedBrowserZoomEnabled(const FeatureContext*) { return StandardizedBrowserZoomEnabled(); }

  static bool StorageBucketsEnabled() {
    return is_storage_buckets_enabled_;
  }

  static bool StorageBucketsEnabled(const FeatureContext*) { return StorageBucketsEnabled(); }

  static bool StorageBucketsDurabilityEnabled() {
    return is_storage_buckets_durability_enabled_;
  }

  static bool StorageBucketsDurabilityEnabled(const FeatureContext*) { return StorageBucketsDurabilityEnabled(); }

  static bool StorageBucketsLocksEnabled() {
    return is_storage_buckets_locks_enabled_;
  }

  static bool StorageBucketsLocksEnabled(const FeatureContext*) { return StorageBucketsLocksEnabled(); }

  static bool StrictMimeTypesForWorkersEnabled() {
    return is_strict_mime_types_for_workers_enabled_;
  }

  static bool StrictMimeTypesForWorkersEnabled(const FeatureContext*) { return StrictMimeTypesForWorkersEnabled(); }

  static bool StylableSelectEnabled() {
    return is_stylable_select_enabled_;
  }

  static bool StylableSelectEnabled(const FeatureContext*) { return StylableSelectEnabled(); }

  static bool StylusHandwritingEnabled() {
    return is_stylus_handwriting_enabled_;
  }

  static bool StylusHandwritingEnabled(const FeatureContext*) { return StylusHandwritingEnabled(); }

  static bool SuggestionPickerDarkModeSupportEnabled() {
    return is_suggestion_picker_dark_mode_support_enabled_;
  }

  static bool SuggestionPickerDarkModeSupportEnabled(const FeatureContext*) { return SuggestionPickerDarkModeSupportEnabled(); }

  static bool SvgCrossOriginAttributeEnabled() {
    return is_svg_cross_origin_attribute_enabled_;
  }

  static bool SvgCrossOriginAttributeEnabled(const FeatureContext*) { return SvgCrossOriginAttributeEnabled(); }

  static bool SvgNoPixelSnappingScaleAdjustmentEnabled() {
    return is_svg_no_pixel_snapping_scale_adjustment_enabled_;
  }

  static bool SvgNoPixelSnappingScaleAdjustmentEnabled(const FeatureContext*) { return SvgNoPixelSnappingScaleAdjustmentEnabled(); }

  static bool SynthesizedKeyboardEventsForAccessibilityActionsEnabled() {
    return is_synthesized_keyboard_events_for_accessibility_actions_enabled_;
  }

  static bool SynthesizedKeyboardEventsForAccessibilityActionsEnabled(const FeatureContext*) { return SynthesizedKeyboardEventsForAccessibilityActionsEnabled(); }

  static bool SystemWakeLockEnabled() {
    return is_system_wake_lock_enabled_;
  }

  static bool SystemWakeLockEnabled(const FeatureContext*) { return SystemWakeLockEnabled(); }

  static bool TestFeatureEnabled() {
    return is_test_feature_enabled_;
  }

  static bool TestFeatureEnabled(const FeatureContext*);

  static bool TestFeatureDependentEnabled() {
    if (!TestFeatureImpliedEnabled())
      return false;
    return is_test_feature_dependent_enabled_;
  }

  static bool TestFeatureDependentEnabled(const FeatureContext*) { return TestFeatureDependentEnabled(); }

  static bool TestFeatureImpliedEnabled() {
    if (TestFeatureEnabled())
      return true;
    return is_test_feature_implied_enabled_;
  }

  static bool TestFeatureImpliedEnabled(const FeatureContext*) { return TestFeatureImpliedEnabled(); }

  static bool TextDecoratingBoxEnabled() {
    return is_text_decorating_box_enabled_;
  }

  static bool TextDecoratingBoxEnabled(const FeatureContext*) { return TextDecoratingBoxEnabled(); }

  static bool TextDetectorEnabled() {
    return is_text_detector_enabled_;
  }

  static bool TextDetectorEnabled(const FeatureContext*) { return TextDetectorEnabled(); }

  static bool TextFragmentAPIEnabled() {
    return is_text_fragment_api_enabled_;
  }

  static bool TextFragmentAPIEnabled(const FeatureContext*) { return TextFragmentAPIEnabled(); }

  static bool TextFragmentTapOpensContextMenuEnabled() {
    return is_text_fragment_tap_opens_context_menu_enabled_;
  }

  static bool TextFragmentTapOpensContextMenuEnabled(const FeatureContext*) { return TextFragmentTapOpensContextMenuEnabled(); }

  static bool TextMetricsBaselinesEnabled() {
    return is_text_metrics_baselines_enabled_;
  }

  static bool TextMetricsBaselinesEnabled(const FeatureContext*) { return TextMetricsBaselinesEnabled(); }

  static bool TimelineScopeEnabled() {
    if (!ScrollTimelineEnabled())
      return false;
    return is_timeline_scope_enabled_;
  }

  static bool TimelineScopeEnabled(const FeatureContext*) { return TimelineScopeEnabled(); }

  static bool TimerThrottlingForBackgroundTabsEnabled() {
    return is_timer_throttling_for_background_tabs_enabled_;
  }

  static bool TimerThrottlingForBackgroundTabsEnabled(const FeatureContext*) { return TimerThrottlingForBackgroundTabsEnabled(); }

  static bool TimeZoneChangeEventEnabled() {
    return is_time_zone_change_event_enabled_;
  }

  static bool TimeZoneChangeEventEnabled(const FeatureContext*) { return TimeZoneChangeEventEnabled(); }

  static bool TouchDragAndContextMenuEnabled() {
    if (TouchDragOnShortPressEnabled())
      return true;
    return is_touch_drag_and_context_menu_enabled_;
  }

  static bool TouchDragAndContextMenuEnabled(const FeatureContext*) { return TouchDragAndContextMenuEnabled(); }

  static bool TouchDragOnShortPressEnabled() {
    return is_touch_drag_on_short_press_enabled_;
  }

  static bool TouchDragOnShortPressEnabled(const FeatureContext*) { return TouchDragOnShortPressEnabled(); }

  static bool TouchTextEditingRedesignEnabled() {
    return is_touch_text_editing_redesign_enabled_;
  }

  static bool TouchTextEditingRedesignEnabled(const FeatureContext*) { return TouchTextEditingRedesignEnabled(); }

  static bool TranslateServiceEnabled() {
    return is_translate_service_enabled_;
  }

  static bool TranslateServiceEnabled(const FeatureContext*) { return TranslateServiceEnabled(); }

  static bool TrustedTypeBeforePolicyCreationEventEnabled() {
    return is_trusted_type_before_policy_creation_event_enabled_;
  }

  static bool TrustedTypeBeforePolicyCreationEventEnabled(const FeatureContext*) { return TrustedTypeBeforePolicyCreationEventEnabled(); }

  static bool TrustedTypesFromLiteralEnabled() {
    return is_trusted_types_from_literal_enabled_;
  }

  static bool TrustedTypesFromLiteralEnabled(const FeatureContext*) { return TrustedTypesFromLiteralEnabled(); }

  static bool TrustedTypesUseCodeLikeEnabled() {
    return is_trusted_types_use_code_like_enabled_;
  }

  static bool TrustedTypesUseCodeLikeEnabled(const FeatureContext*) { return TrustedTypesUseCodeLikeEnabled(); }

  static bool UnclosedFormControlIsInvalidEnabled() {
    return is_unclosed_form_control_is_invalid_enabled_;
  }

  static bool UnclosedFormControlIsInvalidEnabled(const FeatureContext*) { return UnclosedFormControlIsInvalidEnabled(); }

  static bool UnexposedTaskIdsEnabled() {
    return is_unexposed_task_ids_enabled_;
  }

  static bool UnexposedTaskIdsEnabled(const FeatureContext*) { return UnexposedTaskIdsEnabled(); }

  static bool UnownedAnimationsSkipCSSEventsEnabled() {
    return is_unowned_animations_skip_css_events_enabled_;
  }

  static bool UnownedAnimationsSkipCSSEventsEnabled(const FeatureContext*) { return UnownedAnimationsSkipCSSEventsEnabled(); }

  static bool UnrestrictedMeasureUserAgentSpecificMemoryEnabled() {
    return is_unrestricted_measure_user_agent_specific_memory_enabled_;
  }

  static bool UnrestrictedMeasureUserAgentSpecificMemoryEnabled(const FeatureContext*) { return UnrestrictedMeasureUserAgentSpecificMemoryEnabled(); }

  static bool UnrestrictedUsbEnabled() {
    if (!WebUSBEnabled())
      return false;
    return is_unrestricted_usb_enabled_;
  }

  static bool UnrestrictedUsbEnabled(const FeatureContext*) { return UnrestrictedUsbEnabled(); }

  static bool URLAttributeFixEnabled() {
    return is_url_attribute_fix_enabled_;
  }

  static bool URLAttributeFixEnabled(const FeatureContext*) { return URLAttributeFixEnabled(); }

  static bool URLPatternCompareComponentEnabled() {
    return is_url_pattern_compare_component_enabled_;
  }

  static bool URLPatternCompareComponentEnabled(const FeatureContext*) { return URLPatternCompareComponentEnabled(); }

  static bool URLPatternHasRegExpGroupsEnabled() {
    return is_url_pattern_has_reg_exp_groups_enabled_;
  }

  static bool URLPatternHasRegExpGroupsEnabled(const FeatureContext*) { return URLPatternHasRegExpGroupsEnabled(); }

  static bool URLPatternRegexpUnicodeSetsModeEnabled() {
    return is_url_pattern_regexp_unicode_sets_mode_enabled_;
  }

  static bool URLPatternRegexpUnicodeSetsModeEnabled(const FeatureContext*) { return URLPatternRegexpUnicodeSetsModeEnabled(); }

  static bool URLPatternWildcardMoreOftenEnabled() {
    return is_url_pattern_wildcard_more_often_enabled_;
  }

  static bool URLPatternWildcardMoreOftenEnabled(const FeatureContext*) { return URLPatternWildcardMoreOftenEnabled(); }

  static bool URLSearchParamsHasAndDeleteMultipleArgsEnabled() {
    return is_url_search_params_has_and_delete_multiple_args_enabled_;
  }

  static bool URLSearchParamsHasAndDeleteMultipleArgsEnabled(const FeatureContext*) { return URLSearchParamsHasAndDeleteMultipleArgsEnabled(); }

  static bool UseBeginFramePresentationFeedbackEnabled() {
    return is_use_begin_frame_presentation_feedback_enabled_;
  }

  static bool UseBeginFramePresentationFeedbackEnabled(const FeatureContext*) { return UseBeginFramePresentationFeedbackEnabled(); }

  static bool UsedColorSchemeRootScrollbarsEnabled() {
    return is_used_color_scheme_root_scrollbars_enabled_;
  }

  static bool UsedColorSchemeRootScrollbarsEnabled(const FeatureContext*) { return UsedColorSchemeRootScrollbarsEnabled(); }

  static bool UserActivationSameOriginVisibilityEnabled() {
    return is_user_activation_same_origin_visibility_enabled_;
  }

  static bool UserActivationSameOriginVisibilityEnabled(const FeatureContext*) { return UserActivationSameOriginVisibilityEnabled(); }

  static bool UserValidUserInvalidEnabled() {
    return is_user_valid_user_invalid_enabled_;
  }

  static bool UserValidUserInvalidEnabled(const FeatureContext*) { return UserValidUserInvalidEnabled(); }

  static bool V8IdleTasksEnabled() {
    return is_v8_idle_tasks_enabled_;
  }

  static bool V8IdleTasksEnabled(const FeatureContext*) { return V8IdleTasksEnabled(); }

  static bool VideoAutoFullscreenEnabled() {
    return is_video_auto_fullscreen_enabled_;
  }

  static bool VideoAutoFullscreenEnabled(const FeatureContext*) { return VideoAutoFullscreenEnabled(); }

  static bool VideoFullscreenOrientationLockEnabled() {
    return is_video_fullscreen_orientation_lock_enabled_;
  }

  static bool VideoFullscreenOrientationLockEnabled(const FeatureContext*) { return VideoFullscreenOrientationLockEnabled(); }

  static bool VideoPlaybackQualityEnabled() {
    return is_video_playback_quality_enabled_;
  }

  static bool VideoPlaybackQualityEnabled(const FeatureContext*) { return VideoPlaybackQualityEnabled(); }

  static bool VideoRotateToFullscreenEnabled() {
    return is_video_rotate_to_fullscreen_enabled_;
  }

  static bool VideoRotateToFullscreenEnabled(const FeatureContext*) { return VideoRotateToFullscreenEnabled(); }

  static bool VideoTrackGeneratorEnabled() {
    return is_video_track_generator_enabled_;
  }

  static bool VideoTrackGeneratorEnabled(const FeatureContext*) { return VideoTrackGeneratorEnabled(); }

  static bool VideoTrackGeneratorInWindowEnabled() {
    return is_video_track_generator_in_window_enabled_;
  }

  static bool VideoTrackGeneratorInWindowEnabled(const FeatureContext*) { return VideoTrackGeneratorInWindowEnabled(); }

  static bool VideoTrackGeneratorInWorkerEnabled() {
    return is_video_track_generator_in_worker_enabled_;
  }

  static bool VideoTrackGeneratorInWorkerEnabled(const FeatureContext*) { return VideoTrackGeneratorInWorkerEnabled(); }

  static bool ViewportHeightClientHintHeaderEnabled() {
    return is_viewport_height_client_hint_header_enabled_;
  }

  static bool ViewportHeightClientHintHeaderEnabled(const FeatureContext*) { return ViewportHeightClientHintHeaderEnabled(); }

  static bool ViewportSegmentsEnabled() {
    return is_viewport_segments_enabled_;
  }

  static bool ViewportSegmentsEnabled(const FeatureContext*) { return ViewportSegmentsEnabled(); }

  static bool ViewTransitionOnNavigationEnabled() {
    return is_view_transition_on_navigation_enabled_;
  }

  static bool ViewTransitionOnNavigationEnabled(const FeatureContext*) { return ViewTransitionOnNavigationEnabled(); }

  static bool ViewTransitionTypesEnabled() {
    return is_view_transition_types_enabled_;
  }

  static bool ViewTransitionTypesEnabled(const FeatureContext*) { return ViewTransitionTypesEnabled(); }

  static bool VisibilityCollapseColumnEnabled() {
    return is_visibility_collapse_column_enabled_;
  }

  static bool VisibilityCollapseColumnEnabled(const FeatureContext*) { return VisibilityCollapseColumnEnabled(); }

  static bool WakeLockEnabled() {
    if (SystemWakeLockEnabled())
      return true;
    return is_wake_lock_enabled_;
  }

  static bool WakeLockEnabled(const FeatureContext*) { return WakeLockEnabled(); }

  static bool WarnOnContentVisibilityRenderAccessEnabled() {
    return is_warn_on_content_visibility_render_access_enabled_;
  }

  static bool WarnOnContentVisibilityRenderAccessEnabled(const FeatureContext*) { return WarnOnContentVisibilityRenderAccessEnabled(); }

  static bool WebAnimationsSVGEnabled() {
    return is_web_animations_svg_enabled_;
  }

  static bool WebAnimationsSVGEnabled(const FeatureContext*) { return WebAnimationsSVGEnabled(); }

  static bool WebAppsLockScreenEnabled() {
    return is_web_apps_lock_screen_enabled_;
  }

  static bool WebAppsLockScreenEnabled(const FeatureContext*) { return WebAppsLockScreenEnabled(); }

  static bool WebAppTranslationsEnabled() {
    return is_web_app_translations_enabled_;
  }

  static bool WebAppTranslationsEnabled(const FeatureContext*) { return WebAppTranslationsEnabled(); }

  static bool WebAuthEnabled() {
    return is_web_auth_enabled_;
  }

  static bool WebAuthEnabled(const FeatureContext*) { return WebAuthEnabled(); }

  static bool WebAuthAllowCreateInCrossOriginFrameEnabled() {
    return is_web_auth_allow_create_in_cross_origin_frame_enabled_;
  }

  static bool WebAuthAllowCreateInCrossOriginFrameEnabled(const FeatureContext*) { return WebAuthAllowCreateInCrossOriginFrameEnabled(); }

  static bool WebAuthAuthenticatorAttachmentEnabled() {
    return is_web_auth_authenticator_attachment_enabled_;
  }

  static bool WebAuthAuthenticatorAttachmentEnabled(const FeatureContext*) { return WebAuthAuthenticatorAttachmentEnabled(); }

  static bool WebAuthenticationHintsEnabled() {
    return is_web_authentication_hints_enabled_;
  }

  static bool WebAuthenticationHintsEnabled(const FeatureContext*) { return WebAuthenticationHintsEnabled(); }

  static bool WebAuthenticationJSONSerializationEnabled() {
    return is_web_authentication_js_on_serialization_enabled_;
  }

  static bool WebAuthenticationJSONSerializationEnabled(const FeatureContext*) { return WebAuthenticationJSONSerializationEnabled(); }

  static bool WebAuthenticationLargeBlobExtensionEnabled() {
    return is_web_authentication_large_blob_extension_enabled_;
  }

  static bool WebAuthenticationLargeBlobExtensionEnabled(const FeatureContext*) { return WebAuthenticationLargeBlobExtensionEnabled(); }

  static bool WebAuthenticationPRFEnabled() {
    return is_web_authentication_prf_enabled_;
  }

  static bool WebAuthenticationPRFEnabled(const FeatureContext*) { return WebAuthenticationPRFEnabled(); }

  static bool WebAuthenticationRemoteDesktopSupportEnabled() {
    return is_web_authentication_remote_desktop_support_enabled_;
  }

  static bool WebAuthenticationRemoteDesktopSupportEnabled(const FeatureContext*) { return WebAuthenticationRemoteDesktopSupportEnabled(); }

  static bool WebAuthenticationSupplementalPubKeysEnabled() {
    return is_web_authentication_supplemental_pub_keys_enabled_;
  }

  static bool WebAuthenticationSupplementalPubKeysEnabled(const FeatureContext*) { return WebAuthenticationSupplementalPubKeysEnabled(); }

  static bool WebBluetoothEnabled() {
    return is_web_bluetooth_enabled_;
  }

  static bool WebBluetoothEnabled(const FeatureContext*) { return WebBluetoothEnabled(); }

  static bool WebBluetoothGetDevicesEnabled() {
    return is_web_bluetooth_get_devices_enabled_;
  }

  static bool WebBluetoothGetDevicesEnabled(const FeatureContext*) { return WebBluetoothGetDevicesEnabled(); }

  static bool WebBluetoothScanningEnabled() {
    return is_web_bluetooth_scanning_enabled_;
  }

  static bool WebBluetoothScanningEnabled(const FeatureContext*) { return WebBluetoothScanningEnabled(); }

  static bool WebBluetoothWatchAdvertisementsEnabled() {
    return is_web_bluetooth_watch_advertisements_enabled_;
  }

  static bool WebBluetoothWatchAdvertisementsEnabled(const FeatureContext*) { return WebBluetoothWatchAdvertisementsEnabled(); }

  static bool WebCodecsContentHintEnabled() {
    return is_webcodecs_content_hint_enabled_;
  }

  static bool WebCodecsContentHintEnabled(const FeatureContext*) { return WebCodecsContentHintEnabled(); }

  static bool WebCodecsCopyToRGBEnabled() {
    return is_webcodecs_copy_to_rgb_enabled_;
  }

  static bool WebCodecsCopyToRGBEnabled(const FeatureContext*) { return WebCodecsCopyToRGBEnabled(); }

  static bool WebCryptoCurve25519Enabled() {
    return is_web_crypto_curve_25519_enabled_;
  }

  static bool WebCryptoCurve25519Enabled(const FeatureContext*) { return WebCryptoCurve25519Enabled(); }

  static bool WebFontResizeLCPEnabled() {
    return is_web_font_resize_lcp_enabled_;
  }

  static bool WebFontResizeLCPEnabled(const FeatureContext*) { return WebFontResizeLCPEnabled(); }

  static bool WebGLDeveloperExtensionsEnabled() {
    return is_webgl_developer_extensions_enabled_;
  }

  static bool WebGLDeveloperExtensionsEnabled(const FeatureContext*) { return WebGLDeveloperExtensionsEnabled(); }

  static bool WebGLDraftExtensionsEnabled() {
    return is_webgl_draft_extensions_enabled_;
  }

  static bool WebGLDraftExtensionsEnabled(const FeatureContext*) { return WebGLDraftExtensionsEnabled(); }

  static bool WebGLDrawingBufferStorageEnabled() {
    return is_webgl_drawing_buffer_storage_enabled_;
  }

  static bool WebGLDrawingBufferStorageEnabled(const FeatureContext*) { return WebGLDrawingBufferStorageEnabled(); }

  static bool WebGLImageChromiumEnabled() {
    return is_webgl_image_chromium_enabled_;
  }

  static bool WebGLImageChromiumEnabled(const FeatureContext*) { return WebGLImageChromiumEnabled(); }

  static bool WebGPUEnabled() {
    return is_webgpu_enabled_;
  }

  static bool WebGPUEnabled(const FeatureContext*) { return WebGPUEnabled(); }

  static bool WebGPUDeveloperFeaturesEnabled() {
    return is_webgpu_developer_features_enabled_;
  }

  static bool WebGPUDeveloperFeaturesEnabled(const FeatureContext*) { return WebGPUDeveloperFeaturesEnabled(); }

  static bool WebGPUExperimentalFeaturesEnabled() {
    return is_webgpu_experimental_features_enabled_;
  }

  static bool WebGPUExperimentalFeaturesEnabled(const FeatureContext*) { return WebGPUExperimentalFeaturesEnabled(); }

  static bool WebHIDEnabled() {
    return is_web_hid_enabled_;
  }

  static bool WebHIDEnabled(const FeatureContext*) { return WebHIDEnabled(); }

  static bool WebHIDOnServiceWorkersEnabled() {
    if (!WebHIDEnabled())
      return false;
    return is_web_hid_on_service_workers_enabled_;
  }

  static bool WebHIDOnServiceWorkersEnabled(const FeatureContext*) { return WebHIDOnServiceWorkersEnabled(); }

  static bool WebIDLBigIntUsesToBigIntEnabled() {
    return is_web_idl_big_int_uses_to_big_int_enabled_;
  }

  static bool WebIDLBigIntUsesToBigIntEnabled(const FeatureContext*) { return WebIDLBigIntUsesToBigIntEnabled(); }

  static bool WebNFCEnabled() {
    return is_web_nfc_enabled_;
  }

  static bool WebNFCEnabled(const FeatureContext*) { return WebNFCEnabled(); }

  static bool WebOTPEnabled() {
    return is_web_otp_enabled_;
  }

  static bool WebOTPEnabled(const FeatureContext*) { return WebOTPEnabled(); }

  static bool WebOTPAssertionFeaturePolicyEnabled() {
    if (!WebOTPEnabled())
      return false;
    return is_web_otp_assertion_feature_policy_enabled_;
  }

  static bool WebOTPAssertionFeaturePolicyEnabled(const FeatureContext*) { return WebOTPAssertionFeaturePolicyEnabled(); }

  static bool WebPreferencesEnabled() {
    return is_web_preferences_enabled_;
  }

  static bool WebPreferencesEnabled(const FeatureContext*) { return WebPreferencesEnabled(); }

  static bool WebPrintingEnabled() {
    return is_web_printing_enabled_;
  }

  static bool WebPrintingEnabled(const FeatureContext*) { return WebPrintingEnabled(); }

  static bool WebSerialBluetoothEnabled() {
    return is_web_serial_bluetooth_enabled_;
  }

  static bool WebSerialBluetoothEnabled(const FeatureContext*) { return WebSerialBluetoothEnabled(); }

  static bool WebShareEnabled() {
    return is_web_share_enabled_;
  }

  static bool WebShareEnabled(const FeatureContext*) { return WebShareEnabled(); }

  static bool WebSocketStreamEnabled() {
    return is_websocket_stream_enabled_;
  }

  static bool WebSocketStreamEnabled(const FeatureContext*) { return WebSocketStreamEnabled(); }

  static bool WebUSBEnabled() {
    return is_web_usb_enabled_;
  }

  static bool WebUSBEnabled(const FeatureContext*) { return WebUSBEnabled(); }

  static bool WebUSBOnDedicatedWorkersEnabled() {
    if (!WebUSBEnabled())
      return false;
    return is_web_usb_on_dedicated_workers_enabled_;
  }

  static bool WebUSBOnDedicatedWorkersEnabled(const FeatureContext*) { return WebUSBOnDedicatedWorkersEnabled(); }

  static bool WebUSBOnServiceWorkersEnabled() {
    if (!WebUSBEnabled())
      return false;
    return is_web_usb_on_service_workers_enabled_;
  }

  static bool WebUSBOnServiceWorkersEnabled(const FeatureContext*) { return WebUSBOnServiceWorkersEnabled(); }

  static bool WebVTTRegionsEnabled() {
    return is_web_vtt_regions_enabled_;
  }

  static bool WebVTTRegionsEnabled(const FeatureContext*) { return WebVTTRegionsEnabled(); }

  static bool WebXREnabled() {
    return is_web_xr_enabled_;
  }

  static bool WebXREnabled(const FeatureContext*) { return WebXREnabled(); }

  static bool WebXREnabledFeaturesEnabled() {
    if (!WebXREnabled())
      return false;
    return is_web_xr_enabled_features_enabled_;
  }

  static bool WebXREnabledFeaturesEnabled(const FeatureContext*) { return WebXREnabledFeaturesEnabled(); }

  static bool WebXRFrameRateEnabled() {
    if (!WebXREnabled())
      return false;
    return is_web_xr_frame_rate_enabled_;
  }

  static bool WebXRFrameRateEnabled(const FeatureContext*) { return WebXRFrameRateEnabled(); }

  static bool WebXRFrontFacingEnabled() {
    if (!WebXREnabled())
      return false;
    return is_web_xr_front_facing_enabled_;
  }

  static bool WebXRFrontFacingEnabled(const FeatureContext*) { return WebXRFrontFacingEnabled(); }

  static bool WebXRHandInputEnabled() {
    if (!WebXREnabled())
      return false;
    return is_web_xr_hand_input_enabled_;
  }

  static bool WebXRHandInputEnabled(const FeatureContext*) { return WebXRHandInputEnabled(); }

  static bool WebXRHitTestEntityTypesEnabled() {
    if (!WebXREnabled())
      return false;
    return is_web_xr_hit_test_entity_types_enabled_;
  }

  static bool WebXRHitTestEntityTypesEnabled(const FeatureContext*) { return WebXRHitTestEntityTypesEnabled(); }

  static bool WebXRLayersEnabled() {
    if (!WebXREnabled())
      return false;
    return is_web_xr_layers_enabled_;
  }

  static bool WebXRLayersEnabled(const FeatureContext*) { return WebXRLayersEnabled(); }

  static bool WebXRPoseMotionDataEnabled() {
    if (!WebXREnabled())
      return false;
    return is_web_xr_pose_motion_data_enabled_;
  }

  static bool WebXRPoseMotionDataEnabled(const FeatureContext*) { return WebXRPoseMotionDataEnabled(); }

  static bool WGIGamepadTriggerRumbleEnabled() {
    return is_wgi_gamepad_trigger_rumble_enabled_;
  }

  static bool WGIGamepadTriggerRumbleEnabled(const FeatureContext*) { return WGIGamepadTriggerRumbleEnabled(); }

  static bool WindowDefaultStatusEnabled() {
    return is_window_default_status_enabled_;
  }

  static bool WindowDefaultStatusEnabled(const FeatureContext*) { return WindowDefaultStatusEnabled(); }

  static bool WindowPlacementFullscreenOnScreensChangeEnabled() {
    return is_window_placement_fullscreen_on_screens_change_enabled_;
  }

  static bool WindowPlacementFullscreenOnScreensChangeEnabled(const FeatureContext*) { return WindowPlacementFullscreenOnScreensChangeEnabled(); }

  static bool WindowPlacementPermissionAliasEnabled() {
    return is_window_placement_permission_alias_enabled_;
  }

  static bool WindowPlacementPermissionAliasEnabled(const FeatureContext*) { return WindowPlacementPermissionAliasEnabled(); }

  static bool XMLParserMergeAdjacentCDataSectionsEnabled() {
    return is_xml_parser_merge_adjacent_c_data_sections_enabled_;
  }

  static bool XMLParserMergeAdjacentCDataSectionsEnabled(const FeatureContext*) { return XMLParserMergeAdjacentCDataSectionsEnabled(); }

  static bool XYWHAndRectComputedValueEnabled() {
    return is_xywh_and_rect_computed_value_enabled_;
  }

  static bool XYWHAndRectComputedValueEnabled(const FeatureContext*) { return XYWHAndRectComputedValueEnabled(); }

  static bool ZeroCopyTabCaptureEnabled() {
    return is_zero_copy_tab_capture_enabled_;
  }

  static bool ZeroCopyTabCaptureEnabled(const FeatureContext*) { return ZeroCopyTabCaptureEnabled(); }


  // Origin-trial-enabled features:
  //
  // These features are currently part of an origin trial (see
  // https://www.chromium.org/blink/origin-trials). <feature>EnabledByRuntimeFlag()
  // can be used to test whether the feature is unconditionally enabled
  // (for example, by starting the browser with the appropriate command-line flag).
  // However, that is almost always the incorrect check. Most renderer code should
  // be calling <feature>Enabled(const FeatureContext*) instead, to test if the
  // feature is enabled in a given context.

  static bool AddIdentityInCanMakePaymentEventEnabledByRuntimeFlag() { return AddIdentityInCanMakePaymentEventEnabled(nullptr); }
  static bool AddIdentityInCanMakePaymentEventEnabled(const FeatureContext*);

  static bool AdInterestGroupAPIEnabledByRuntimeFlag() { return AdInterestGroupAPIEnabled(nullptr); }
  static bool AdInterestGroupAPIEnabled(const FeatureContext*);

  static bool AppTitleEnabledByRuntimeFlag() { return AppTitleEnabled(nullptr); }
  static bool AppTitleEnabled(const FeatureContext*);

  static bool AttributionReportingEnabledByRuntimeFlag() { return AttributionReportingEnabled(nullptr); }
  static bool AttributionReportingEnabled(const FeatureContext*);

  static bool AttributionReportingCrossAppWebEnabledByRuntimeFlag() { return AttributionReportingCrossAppWebEnabled(nullptr); }
  static bool AttributionReportingCrossAppWebEnabled(const FeatureContext*);

  static bool AttributionReportingInterfaceEnabledByRuntimeFlag() { return AttributionReportingInterfaceEnabled(nullptr); }
  static bool AttributionReportingInterfaceEnabled(const FeatureContext*);

  static bool AutoDarkModeEnabledByRuntimeFlag() { return AutoDarkModeEnabled(nullptr); }
  static bool AutoDarkModeEnabled(const FeatureContext*);

  static bool BackForwardCacheExperimentHTTPHeaderEnabledByRuntimeFlag() { return BackForwardCacheExperimentHTTPHeaderEnabled(nullptr); }
  static bool BackForwardCacheExperimentHTTPHeaderEnabled(const FeatureContext*);

  static bool BackForwardCacheNotRestoredReasonsEnabledByRuntimeFlag() { return BackForwardCacheNotRestoredReasonsEnabled(nullptr); }
  static bool BackForwardCacheNotRestoredReasonsEnabled(const FeatureContext*);

  static bool CacheStorageCodeCacheHintEnabledByRuntimeFlag() { return CacheStorageCodeCacheHintEnabled(nullptr); }
  static bool CacheStorageCodeCacheHintEnabled(const FeatureContext*);

  static bool CapturedSurfaceControlEnabledByRuntimeFlag() { return CapturedSurfaceControlEnabled(nullptr); }
  static bool CapturedSurfaceControlEnabled(const FeatureContext*);

  static bool CompressionDictionaryTransportEnabledByRuntimeFlag() { return CompressionDictionaryTransportEnabled(nullptr); }
  static bool CompressionDictionaryTransportEnabled(const FeatureContext*);

  static bool ComputePressureEnabledByRuntimeFlag() { return ComputePressureEnabled(nullptr); }
  static bool ComputePressureEnabled(const FeatureContext*);

  static bool CoopRestrictPropertiesEnabledByRuntimeFlag() { return CoopRestrictPropertiesEnabled(nullptr); }
  static bool CoopRestrictPropertiesEnabled(const FeatureContext*);

  static bool DatabaseEnabledByRuntimeFlag() { return DatabaseEnabled(nullptr); }
  static bool DatabaseEnabled(const FeatureContext*);

  static bool DeprecateUnloadOptOutEnabledByRuntimeFlag() { return DeprecateUnloadOptOutEnabled(nullptr); }
  static bool DeprecateUnloadOptOutEnabled(const FeatureContext*);

  static bool DigitalGoodsEnabledByRuntimeFlag() { return DigitalGoodsEnabled(nullptr); }
  static bool DigitalGoodsEnabled(const FeatureContext*);

  static bool DisableDifferentOriginSubframeDialogSuppressionEnabledByRuntimeFlag() { return DisableDifferentOriginSubframeDialogSuppressionEnabled(nullptr); }
  static bool DisableDifferentOriginSubframeDialogSuppressionEnabled(const FeatureContext*);

  static bool DisableHardwareNoiseSuppressionEnabledByRuntimeFlag() { return DisableHardwareNoiseSuppressionEnabled(nullptr); }
  static bool DisableHardwareNoiseSuppressionEnabled(const FeatureContext*);

  static bool DisableThirdPartySessionStoragePartitioningAfterGeneralPartitioningEnabledByRuntimeFlag() { return DisableThirdPartySessionStoragePartitioningAfterGeneralPartitioningEnabled(nullptr); }
  static bool DisableThirdPartySessionStoragePartitioningAfterGeneralPartitioningEnabled(const FeatureContext*);

  static bool DisableThirdPartyStoragePartitioningEnabledByRuntimeFlag() { return DisableThirdPartyStoragePartitioningEnabled(nullptr); }
  static bool DisableThirdPartyStoragePartitioningEnabled(const FeatureContext*);

  static bool DocumentPolicyNegotiationEnabledByRuntimeFlag() { return DocumentPolicyNegotiationEnabled(nullptr); }
  static bool DocumentPolicyNegotiationEnabled(const FeatureContext*);

  static bool EditContextEnabledByRuntimeFlag() { return EditContextEnabled(nullptr); }
  static bool EditContextEnabled(const FeatureContext*);

  static bool ElementCaptureEnabledByRuntimeFlag() { return ElementCaptureEnabled(nullptr); }
  static bool ElementCaptureEnabled(const FeatureContext*);

  static bool FencedFramesEnabledByRuntimeFlag() { return FencedFramesEnabled(nullptr); }
  static bool FencedFramesEnabled(const FeatureContext*);

  static bool FencedFramesAPIChangesEnabledByRuntimeFlag() { return FencedFramesAPIChangesEnabled(nullptr); }
  static bool FencedFramesAPIChangesEnabled(const FeatureContext*);

  static bool FetchLaterAPIEnabledByRuntimeFlag() { return FetchLaterAPIEnabled(nullptr); }
  static bool FetchLaterAPIEnabled(const FeatureContext*);

  static bool FledgeEnabledByRuntimeFlag() { return FledgeEnabled(nullptr); }
  static bool FledgeEnabled(const FeatureContext*);

  static bool FledgeBiddingAndAuctionServerAPIEnabledByRuntimeFlag() { return FledgeBiddingAndAuctionServerAPIEnabled(nullptr); }
  static bool FledgeBiddingAndAuctionServerAPIEnabled(const FeatureContext*);

  static bool FocusgroupEnabledByRuntimeFlag() { return FocusgroupEnabled(nullptr); }
  static bool FocusgroupEnabled(const FeatureContext*);

  static bool FullscreenPopupWindowsEnabledByRuntimeFlag() { return FullscreenPopupWindowsEnabled(nullptr); }
  static bool FullscreenPopupWindowsEnabled(const FeatureContext*);

  static bool GetAllScreensMediaEnabledByRuntimeFlag() { return GetAllScreensMediaEnabled(nullptr); }
  static bool GetAllScreensMediaEnabled(const FeatureContext*);

  static bool HrefTranslateEnabledByRuntimeFlag() { return HrefTranslateEnabled(nullptr); }
  static bool HrefTranslateEnabled(const FeatureContext*);

  static bool JavaScriptCompileHintsMagicRuntimeEnabledByRuntimeFlag() { return JavaScriptCompileHintsMagicRuntimeEnabled(nullptr); }
  static bool JavaScriptCompileHintsMagicRuntimeEnabled(const FeatureContext*);

  static bool MediaCaptureBackgroundBlurEnabledByRuntimeFlag() { return MediaCaptureBackgroundBlurEnabled(nullptr); }
  static bool MediaCaptureBackgroundBlurEnabled(const FeatureContext*);

  static bool MediaCaptureConfigurationChangeEnabledByRuntimeFlag() { return MediaCaptureConfigurationChangeEnabled(nullptr); }
  static bool MediaCaptureConfigurationChangeEnabled(const FeatureContext*);

  static bool MediaSourceExtensionsForWebCodecsEnabledByRuntimeFlag() { return MediaSourceExtensionsForWebCodecsEnabled(nullptr); }
  static bool MediaSourceExtensionsForWebCodecsEnabled(const FeatureContext*);

  static bool NavigationIdEnabledByRuntimeFlag() { return NavigationIdEnabled(nullptr); }
  static bool NavigationIdEnabled(const FeatureContext*);

  static bool NotificationTriggersEnabledByRuntimeFlag() { return NotificationTriggersEnabled(nullptr); }
  static bool NotificationTriggersEnabled(const FeatureContext*);

  static bool NoVarySearchPrefetchEnabledByRuntimeFlag() { return NoVarySearchPrefetchEnabled(nullptr); }
  static bool NoVarySearchPrefetchEnabled(const FeatureContext*);

  static bool OriginTrialsSampleAPIEnabledByRuntimeFlag() { return OriginTrialsSampleAPIEnabled(nullptr); }
  static bool OriginTrialsSampleAPIEnabled(const FeatureContext*);

  static bool OriginTrialsSampleAPIBrowserReadWriteEnabledByRuntimeFlag() { return OriginTrialsSampleAPIBrowserReadWriteEnabled(nullptr); }
  static bool OriginTrialsSampleAPIBrowserReadWriteEnabled(const FeatureContext*);

  static bool OriginTrialsSampleAPIDependentEnabledByRuntimeFlag() { return OriginTrialsSampleAPIDependentEnabled(nullptr); }
  static bool OriginTrialsSampleAPIDependentEnabled(const FeatureContext*);

  static bool OriginTrialsSampleAPIDeprecationEnabledByRuntimeFlag() { return OriginTrialsSampleAPIDeprecationEnabled(nullptr); }
  static bool OriginTrialsSampleAPIDeprecationEnabled(const FeatureContext*);

  static bool OriginTrialsSampleAPIExpiryGracePeriodEnabledByRuntimeFlag() { return OriginTrialsSampleAPIExpiryGracePeriodEnabled(nullptr); }
  static bool OriginTrialsSampleAPIExpiryGracePeriodEnabled(const FeatureContext*);

  static bool OriginTrialsSampleAPIExpiryGracePeriodThirdPartyEnabledByRuntimeFlag() { return OriginTrialsSampleAPIExpiryGracePeriodThirdPartyEnabled(nullptr); }
  static bool OriginTrialsSampleAPIExpiryGracePeriodThirdPartyEnabled(const FeatureContext*);

  static bool OriginTrialsSampleAPIImpliedEnabledByRuntimeFlag() { return OriginTrialsSampleAPIImpliedEnabled(nullptr); }
  static bool OriginTrialsSampleAPIImpliedEnabled(const FeatureContext*);

  static bool OriginTrialsSampleAPIInvalidOSEnabledByRuntimeFlag() { return OriginTrialsSampleAPIInvalidOSEnabled(nullptr); }
  static bool OriginTrialsSampleAPIInvalidOSEnabled(const FeatureContext*);

  static bool OriginTrialsSampleAPINavigationEnabledByRuntimeFlag() { return OriginTrialsSampleAPINavigationEnabled(nullptr); }
  static bool OriginTrialsSampleAPINavigationEnabled(const FeatureContext*);

  static bool OriginTrialsSampleAPIPersistentExpiryGracePeriodEnabledByRuntimeFlag() { return OriginTrialsSampleAPIPersistentExpiryGracePeriodEnabled(nullptr); }
  static bool OriginTrialsSampleAPIPersistentExpiryGracePeriodEnabled(const FeatureContext*);

  static bool OriginTrialsSampleAPIPersistentFeatureEnabledByRuntimeFlag() { return OriginTrialsSampleAPIPersistentFeatureEnabled(nullptr); }
  static bool OriginTrialsSampleAPIPersistentFeatureEnabled(const FeatureContext*);

  static bool OriginTrialsSampleAPIPersistentInvalidOSEnabledByRuntimeFlag() { return OriginTrialsSampleAPIPersistentInvalidOSEnabled(nullptr); }
  static bool OriginTrialsSampleAPIPersistentInvalidOSEnabled(const FeatureContext*);

  static bool OriginTrialsSampleAPIPersistentThirdPartyDeprecationFeatureEnabledByRuntimeFlag() { return OriginTrialsSampleAPIPersistentThirdPartyDeprecationFeatureEnabled(nullptr); }
  static bool OriginTrialsSampleAPIPersistentThirdPartyDeprecationFeatureEnabled(const FeatureContext*);

  static bool OriginTrialsSampleAPIThirdPartyEnabledByRuntimeFlag() { return OriginTrialsSampleAPIThirdPartyEnabled(nullptr); }
  static bool OriginTrialsSampleAPIThirdPartyEnabled(const FeatureContext*);

  static bool PageFreezeOptInEnabledByRuntimeFlag() { return PageFreezeOptInEnabled(nullptr); }
  static bool PageFreezeOptInEnabled(const FeatureContext*);

  static bool PageFreezeOptOutEnabledByRuntimeFlag() { return PageFreezeOptOutEnabled(nullptr); }
  static bool PageFreezeOptOutEnabled(const FeatureContext*);

  static bool ParakeetEnabledByRuntimeFlag() { return ParakeetEnabled(nullptr); }
  static bool ParakeetEnabled(const FeatureContext*);

  static bool PartitionedCookiesEnabledByRuntimeFlag() { return PartitionedCookiesEnabled(nullptr); }
  static bool PartitionedCookiesEnabled(const FeatureContext*);

  static bool PaymentHandlerMinimalHeaderUXEnabledByRuntimeFlag() { return PaymentHandlerMinimalHeaderUXEnabled(nullptr); }
  static bool PaymentHandlerMinimalHeaderUXEnabled(const FeatureContext*);

  static bool PendingBeaconAPIEnabledByRuntimeFlag() { return PendingBeaconAPIEnabled(nullptr); }
  static bool PendingBeaconAPIEnabled(const FeatureContext*);

  static bool PerMethodCanMakePaymentQuotaEnabledByRuntimeFlag() { return PerMethodCanMakePaymentQuotaEnabled(nullptr); }
  static bool PerMethodCanMakePaymentQuotaEnabled(const FeatureContext*);

  static bool PNaClEnabledByRuntimeFlag() { return PNaClEnabled(nullptr); }
  static bool PNaClEnabled(const FeatureContext*);

  static bool PrivacySandboxAdsAPIsEnabledByRuntimeFlag() { return PrivacySandboxAdsAPIsEnabled(nullptr); }
  static bool PrivacySandboxAdsAPIsEnabled(const FeatureContext*);

  static bool PrivateNetworkAccessNonSecureContextsAllowedEnabledByRuntimeFlag() { return PrivateNetworkAccessNonSecureContextsAllowedEnabled(nullptr); }
  static bool PrivateNetworkAccessNonSecureContextsAllowedEnabled(const FeatureContext*);

  static bool PrivateNetworkAccessPermissionPromptEnabledByRuntimeFlag() { return PrivateNetworkAccessPermissionPromptEnabled(nullptr); }
  static bool PrivateNetworkAccessPermissionPromptEnabled(const FeatureContext*);

  static bool PrivateStateTokensEnabledByRuntimeFlag() { return PrivateStateTokensEnabled(nullptr); }
  static bool PrivateStateTokensEnabled(const FeatureContext*);

  static bool ReduceAcceptLanguageEnabledByRuntimeFlag() { return ReduceAcceptLanguageEnabled(nullptr); }
  static bool ReduceAcceptLanguageEnabled(const FeatureContext*);

  static bool RtcAudioJitterBufferMaxPacketsEnabledByRuntimeFlag() { return RtcAudioJitterBufferMaxPacketsEnabled(nullptr); }
  static bool RtcAudioJitterBufferMaxPacketsEnabled(const FeatureContext*);

  static bool RTCEncodedFrameSetMetadataEnabledByRuntimeFlag() { return RTCEncodedFrameSetMetadataEnabled(nullptr); }
  static bool RTCEncodedFrameSetMetadataEnabled(const FeatureContext*);

  static bool RTCLegacyCallbackBasedGetStatsEnabledByRuntimeFlag() { return RTCLegacyCallbackBasedGetStatsEnabled(nullptr); }
  static bool RTCLegacyCallbackBasedGetStatsEnabled(const FeatureContext*);

  static bool RTCStatsRelativePacketArrivalDelayEnabledByRuntimeFlag() { return RTCStatsRelativePacketArrivalDelayEnabled(nullptr); }
  static bool RTCStatsRelativePacketArrivalDelayEnabled(const FeatureContext*);

  static bool SchedulerYieldEnabledByRuntimeFlag() { return SchedulerYieldEnabled(nullptr); }
  static bool SchedulerYieldEnabled(const FeatureContext*);

  static bool SecurePaymentConfirmationOptOutEnabledByRuntimeFlag() { return SecurePaymentConfirmationOptOutEnabled(nullptr); }
  static bool SecurePaymentConfirmationOptOutEnabled(const FeatureContext*);

  static bool ServiceWorkerBypassFetchHandlerEnabledByRuntimeFlag() { return ServiceWorkerBypassFetchHandlerEnabled(nullptr); }
  static bool ServiceWorkerBypassFetchHandlerEnabled(const FeatureContext*);

  static bool ServiceWorkerRaceNetworkRequestEnabledByRuntimeFlag() { return ServiceWorkerRaceNetworkRequestEnabled(nullptr); }
  static bool ServiceWorkerRaceNetworkRequestEnabled(const FeatureContext*);

  static bool ServiceWorkerStaticRouterEnabledByRuntimeFlag() { return ServiceWorkerStaticRouterEnabled(nullptr); }
  static bool ServiceWorkerStaticRouterEnabled(const FeatureContext*);

  static bool SharedStorageAPIEnabledByRuntimeFlag() { return SharedStorageAPIEnabled(nullptr); }
  static bool SharedStorageAPIEnabled(const FeatureContext*);

  static bool SignatureBasedIntegrityEnabledByRuntimeFlag() { return SignatureBasedIntegrityEnabled(nullptr); }
  static bool SignatureBasedIntegrityEnabled(const FeatureContext*);

  static bool SoftNavigationHeuristicsEnabledByRuntimeFlag() { return SoftNavigationHeuristicsEnabled(nullptr); }
  static bool SoftNavigationHeuristicsEnabled(const FeatureContext*);

  static bool SpeculationRulesDocumentRulesEnabledByRuntimeFlag() { return SpeculationRulesDocumentRulesEnabled(nullptr); }
  static bool SpeculationRulesDocumentRulesEnabled(const FeatureContext*);

  static bool SpeculationRulesDocumentRulesSelectorMatchesEnabledByRuntimeFlag() { return SpeculationRulesDocumentRulesSelectorMatchesEnabled(nullptr); }
  static bool SpeculationRulesDocumentRulesSelectorMatchesEnabled(const FeatureContext*);

  static bool SpeculationRulesEagernessEnabledByRuntimeFlag() { return SpeculationRulesEagernessEnabled(nullptr); }
  static bool SpeculationRulesEagernessEnabled(const FeatureContext*);

  static bool SpeculationRulesFetchFromHeaderEnabledByRuntimeFlag() { return SpeculationRulesFetchFromHeaderEnabled(nullptr); }
  static bool SpeculationRulesFetchFromHeaderEnabled(const FeatureContext*);

  static bool SpeculationRulesNoVarySearchHintEnabledByRuntimeFlag() { return SpeculationRulesNoVarySearchHintEnabled(nullptr); }
  static bool SpeculationRulesNoVarySearchHintEnabled(const FeatureContext*);

  static bool SpeculationRulesPrefetchFutureEnabledByRuntimeFlag() { return SpeculationRulesPrefetchFutureEnabled(nullptr); }
  static bool SpeculationRulesPrefetchFutureEnabled(const FeatureContext*);

  static bool SpeculationRulesRelativeToDocumentEnabledByRuntimeFlag() { return SpeculationRulesRelativeToDocumentEnabled(nullptr); }
  static bool SpeculationRulesRelativeToDocumentEnabled(const FeatureContext*);

  static bool StorageAccessAPIBeyondCookiesEnabledByRuntimeFlag() { return StorageAccessAPIBeyondCookiesEnabled(nullptr); }
  static bool StorageAccessAPIBeyondCookiesEnabled(const FeatureContext*);

  static bool TextFragmentIdentifiersEnabledByRuntimeFlag() { return TextFragmentIdentifiersEnabled(nullptr); }
  static bool TextFragmentIdentifiersEnabled(const FeatureContext*);

  static bool TopicsAPIEnabledByRuntimeFlag() { return TopicsAPIEnabled(nullptr); }
  static bool TopicsAPIEnabled(const FeatureContext*);

  static bool TopicsDocumentAPIEnabledByRuntimeFlag() { return TopicsDocumentAPIEnabled(nullptr); }
  static bool TopicsDocumentAPIEnabled(const FeatureContext*);

  static bool TopLevelTpcdEnabledByRuntimeFlag() { return TopLevelTpcdEnabled(nullptr); }
  static bool TopLevelTpcdEnabled(const FeatureContext*);

  static bool TouchEventFeatureDetectionEnabledByRuntimeFlag() { return TouchEventFeatureDetectionEnabled(nullptr); }
  static bool TouchEventFeatureDetectionEnabled(const FeatureContext*);

  static bool TpcdEnabledByRuntimeFlag() { return TpcdEnabled(nullptr); }
  static bool TpcdEnabled(const FeatureContext*);

  static bool UnrestrictedSharedArrayBufferEnabledByRuntimeFlag() { return UnrestrictedSharedArrayBufferEnabled(nullptr); }
  static bool UnrestrictedSharedArrayBufferEnabled(const FeatureContext*);

  static bool WebAppDarkModeEnabledByRuntimeFlag() { return WebAppDarkModeEnabled(nullptr); }
  static bool WebAppDarkModeEnabled(const FeatureContext*);

  static bool WebAppLaunchHandlerEnabledByRuntimeFlag() { return WebAppLaunchHandlerEnabled(nullptr); }
  static bool WebAppLaunchHandlerEnabled(const FeatureContext*);

  static bool WebAppLaunchQueueEnabledByRuntimeFlag() { return WebAppLaunchQueueEnabled(nullptr); }
  static bool WebAppLaunchQueueEnabled(const FeatureContext*);

  static bool WebAppScopeExtensionsEnabledByRuntimeFlag() { return WebAppScopeExtensionsEnabled(nullptr); }
  static bool WebAppScopeExtensionsEnabled(const FeatureContext*);

  static bool WebAppTabStripEnabledByRuntimeFlag() { return WebAppTabStripEnabled(nullptr); }
  static bool WebAppTabStripEnabled(const FeatureContext*);

  static bool WebAppTabStripCustomizationsEnabledByRuntimeFlag() { return WebAppTabStripCustomizationsEnabled(nullptr); }
  static bool WebAppTabStripCustomizationsEnabled(const FeatureContext*);

  static bool WebAppUrlHandlingEnabledByRuntimeFlag() { return WebAppUrlHandlingEnabled(nullptr); }
  static bool WebAppUrlHandlingEnabled(const FeatureContext*);

  static bool WebAssemblyJSPromiseIntegrationEnabledByRuntimeFlag() { return WebAssemblyJSPromiseIntegrationEnabled(nullptr); }
  static bool WebAssemblyJSPromiseIntegrationEnabled(const FeatureContext*);

  static bool WebAssemblyJSStringBuiltinsEnabledByRuntimeFlag() { return WebAssemblyJSStringBuiltinsEnabled(nullptr); }
  static bool WebAssemblyJSStringBuiltinsEnabled(const FeatureContext*);

  static bool WebIdentityDigitalCredentialsEnabledByRuntimeFlag() { return WebIdentityDigitalCredentialsEnabled(nullptr); }
  static bool WebIdentityDigitalCredentialsEnabled(const FeatureContext*);

  static bool WebTransportCustomCertificatesEnabledByRuntimeFlag() { return WebTransportCustomCertificatesEnabled(nullptr); }
  static bool WebTransportCustomCertificatesEnabled(const FeatureContext*);

  static bool WebViewXRequestedWithDeprecationEnabledByRuntimeFlag() { return WebViewXRequestedWithDeprecationEnabled(nullptr); }
  static bool WebViewXRequestedWithDeprecationEnabled(const FeatureContext*);

  static bool WebXRImageTrackingEnabledByRuntimeFlag() { return WebXRImageTrackingEnabled(nullptr); }
  static bool WebXRImageTrackingEnabled(const FeatureContext*);

  static bool WebXRPlaneDetectionEnabledByRuntimeFlag() { return WebXRPlaneDetectionEnabled(nullptr); }
  static bool WebXRPlaneDetectionEnabled(const FeatureContext*);


 protected:
  // See the comment in RuntimeEnabledFeatures for why these are protected.
  static void SetStableFeaturesEnabled(bool);
  static void SetExperimentalFeaturesEnabled(bool);
  static void SetTestFeaturesEnabled(bool);
  static void SetOriginTrialControlledFeaturesEnabled(bool);

  static void SetFeatureEnabledFromString(const std::string& name, bool enabled);
  static void UpdateStatusFromBaseFeatures();

  static void SetAccelerated2dCanvasEnabled(bool enabled) { is_accelerated_2d_canvas_enabled_ = enabled; }
  static void SetAcceleratedSmallCanvasesEnabled(bool enabled) { is_accelerated_small_canvases_enabled_ = enabled; }
  static void SetAccessibilityAriaVirtualContentEnabled(bool enabled) { is_accessibility_aria_virtual_content_enabled_ = enabled; }
  static void SetAccessibilityExposeDisplayNoneEnabled(bool enabled) { is_accessibility_expose_display_none_enabled_ = enabled; }
  static void SetAccessibilityExposeHTMLElementEnabled(bool enabled) { is_accessibility_expose_html_element_enabled_ = enabled; }
  static void SetAccessibilityExposeIgnoredNodesEnabled(bool enabled) { is_accessibility_expose_ignored_nodes_enabled_ = enabled; }
  static void SetAccessibilityObjectModelEnabled(bool enabled) { is_accessibility_object_model_enabled_ = enabled; }
  static void SetAccessibilityOSLevelBoldTextEnabled(bool enabled) { is_accessibility_os_level_bold_text_enabled_ = enabled; }
  static void SetAccessibilityPageZoomEnabled(bool enabled) { is_accessibility_page_zoom_enabled_ = enabled; }
  static void SetAccessibilitySerializationSizeMetricsEnabled(bool enabled) { is_accessibility_serialization_size_metrics_enabled_ = enabled; }
  static void SetAccessibilityUseAXPositionForDocumentMarkersEnabled(bool enabled) { is_accessibility_use_ax_position_for_document_markers_enabled_ = enabled; }
  static void SetAddIdentityInCanMakePaymentEventEnabled(bool enabled) { is_add_identity_in_can_make_payment_event_enabled_ = enabled; }
  static void SetAddressSpaceEnabled(bool enabled) { is_address_space_enabled_ = enabled; }
  static void SetAdInterestGroupAPIEnabled(bool enabled) { is_ad_interest_group_api_enabled_ = enabled; }
  static void SetAdTaggingEnabled(bool enabled) { is_ad_tagging_enabled_ = enabled; }
  static void SetAlignContentForBlocksEnabled(bool enabled) { is_align_content_for_blocks_enabled_ = enabled; }
  static void SetAllowContentInitiatedDataUrlNavigationsEnabled(bool enabled) { is_allow_content_initiated_data_url_navigations_enabled_ = enabled; }
  static void SetAllowURNsInIframesEnabled(bool enabled) { is_allow_ur_ns_in_iframes_enabled_ = enabled; }
  static void SetAndroidDownloadableFontsMatchingEnabled(bool enabled) { is_android_downloadable_fonts_matching_enabled_ = enabled; }
  static void SetAnimationWorkletEnabled(bool enabled) { is_animation_worklet_enabled_ = enabled; }
  static void SetAnonymousIframeEnabled(bool enabled) { is_anonymous_iframe_enabled_ = enabled; }
  static void SetAOMAriaRelationshipPropertiesEnabled(bool enabled) { is_aom_aria_relationship_properties_enabled_ = enabled; }
  static void SetAppTitleEnabled(bool enabled) { is_app_title_enabled_ = enabled; }
  static void SetAsyncClipboardImplicitPermissionEnabled(bool enabled) { is_async_clipboard_implicit_permission_enabled_ = enabled; }
  static void SetAttributionReportingEnabled(bool enabled) { is_attribution_reporting_enabled_ = enabled; }
  static void SetAttributionReportingCrossAppWebEnabled(bool enabled) { is_attribution_reporting_cross_app_web_enabled_ = enabled; }
  static void SetAttributionReportingInterfaceEnabled(bool enabled) { is_attribution_reporting_interface_enabled_ = enabled; }
  static void SetAudioContextSetSinkIdEnabled(bool enabled) { is_audio_context_set_sink_id_enabled_ = enabled; }
  static void SetAudioOutputDevicesEnabled(bool enabled) { is_audio_output_devices_enabled_ = enabled; }
  static void SetAudioVideoTracksEnabled(bool enabled) { is_audio_video_tracks_enabled_ = enabled; }
  static void SetAutoDarkModeEnabled(bool enabled) { is_auto_dark_mode_enabled_ = enabled; }
  static void SetAutomationControlledEnabled(bool enabled) { is_automation_controlled_enabled_ = enabled; }
  static void SetAutoplayIgnoresWebAudioEnabled(bool enabled) { is_autoplay_ignores_web_audio_enabled_ = enabled; }
  static void SetAutoSizeLazyLoadedImagesEnabled(bool enabled) { is_auto_size_lazy_loaded_images_enabled_ = enabled; }
  static void SetAvoidCaretVisibleSelectionAdjusterEnabled(bool enabled) { is_avoid_caret_visible_selection_adjuster_enabled_ = enabled; }
  static void SetBackdropInheritOriginatingEnabled(bool enabled) { is_backdrop_inherit_originating_enabled_ = enabled; }
  static void SetBackfaceVisibilityInteropEnabled(bool enabled) { is_backface_visibility_interop_enabled_ = enabled; }
  static void SetBackForwardCacheEnabled(bool enabled) { is_back_forward_cache_enabled_ = enabled; }
  static void SetBackForwardCacheExperimentHTTPHeaderEnabled(bool enabled) { is_back_forward_cache_experiment_http_header_enabled_ = enabled; }
  static void SetBackForwardCacheNotRestoredReasonsEnabled(bool enabled) { is_back_forward_cache_not_restored_reasons_enabled_ = enabled; }
  static void SetBackgroundFetchEnabled(bool enabled) { is_background_fetch_enabled_ = enabled; }
  static void SetBarcodeDetectorEnabled(bool enabled) { is_barcode_detector_enabled_ = enabled; }
  static void SetBdiElementDirInheritanceEnabled(bool enabled) { is_bdi_element_dir_inheritance_enabled_ = enabled; }
  static void SetBeforeunloadEventCancelByPreventDefaultEnabled(bool enabled) { is_beforeunload_event_cancel_by_prevent_default_enabled_ = enabled; }
  static void SetBidiCaretAffinityEnabled(bool enabled) { is_bidi_caret_affinity_enabled_ = enabled; }
  static void SetBlinkExtensionChromeOSEnabled(bool enabled) { is_blink_extension_chrome_os_enabled_ = enabled; }
  static void SetBlinkExtensionChromeOSKioskEnabled(bool enabled) { is_blink_extension_chrome_os_kiosk_enabled_ = enabled; }
  static void SetBlinkExtensionDiagnosticsEnabled(bool enabled) { is_blink_extension_diagnostics_enabled_ = enabled; }
  static void SetBlinkLifecycleScriptForbiddenEnabled(bool enabled) { is_blink_lifecycle_script_forbidden_enabled_ = enabled; }
  static void SetBlinkRuntimeCallStatsEnabled(bool enabled) { is_blink_runtime_call_stats_enabled_ = enabled; }
  static void SetBlockingFocusWithoutUserActivationEnabled(bool enabled) { is_blocking_focus_without_user_activation_enabled_ = enabled; }
  static void SetBlockRubyWrappingInlineRubyEnabled(bool enabled) { is_block_ruby_wrapping_inline_ruby_enabled_ = enabled; }
  static void SetBoundaryEventDispatchTracksNodeRemovalEnabled(bool enabled) { is_boundary_event_dispatch_tracks_node_removal_enabled_ = enabled; }
  static void SetBrowserVerifiedUserActivationKeyboardEnabled(bool enabled) { is_browser_verified_user_activation_keyboard_enabled_ = enabled; }
  static void SetBrowserVerifiedUserActivationMouseEnabled(bool enabled) { is_browser_verified_user_activation_mouse_enabled_ = enabled; }
  static void SetByobFetchEnabled(bool enabled) { is_byob_fetch_enabled_ = enabled; }
  static void SetCacheStorageCodeCacheHintEnabled(bool enabled) { is_cache_storage_code_cache_hint_enabled_ = enabled; }
  static void SetCanvas2dCanvasFilterEnabled(bool enabled) { is_canvas_2d_canvas_filter_enabled_ = enabled; }
  static void SetCanvas2dImageChromiumEnabled(bool enabled) { is_canvas_2d_image_chromium_enabled_ = enabled; }
  static void SetCanvas2dLayersEnabled(bool enabled) { is_canvas_2d_layers_enabled_ = enabled; }
  static void SetCanvas2dMeshEnabled(bool enabled) { is_canvas_2d_mesh_enabled_ = enabled; }
  static void SetCanvas2dScrollPathIntoViewEnabled(bool enabled) { is_canvas_2d_scroll_path_into_view_enabled_ = enabled; }
  static void SetCanvasFloatingPointEnabled(bool enabled) { is_canvas_floating_point_enabled_ = enabled; }
  static void SetCanvasHDREnabled(bool enabled) { is_canvas_hdr_enabled_ = enabled; }
  static void SetCanvasImageSmoothingEnabled(bool enabled) { is_canvas_image_smoothing_enabled_ = enabled; }
  static void SetCanvasWebGPUAccessEnabled(bool enabled) { is_canvas_webgpu_access_enabled_ = enabled; }
  static void SetCapabilityDelegationDisplayCaptureRequestEnabled(bool enabled) { is_capability_delegation_display_capture_request_enabled_ = enabled; }
  static void SetCaptureControllerEnabled(bool enabled) { is_capture_controller_enabled_ = enabled; }
  static void SetCapturedMouseEventsEnabled(bool enabled) { is_captured_mouse_events_enabled_ = enabled; }
  static void SetCapturedSurfaceControlEnabled(bool enabled) { is_captured_surface_control_enabled_ = enabled; }
  static void SetCaptureHandleEnabled(bool enabled) { is_capture_handle_enabled_ = enabled; }
  static void SetCaretPositionFromPointEnabled(bool enabled) { is_caret_position_from_point_enabled_ = enabled; }
  static void SetCCTNewRFMPushBehaviorEnabled(bool enabled) { is_cct_new_rfm_push_behavior_enabled_ = enabled; }
  static void SetCheckVisibilityExtraPropertiesEnabled(bool enabled) { is_check_visibility_extra_properties_enabled_ = enabled; }
  static void SetClickToCapturedPointerEnabled(bool enabled) { is_click_to_captured_pointer_enabled_ = enabled; }
  static void SetClipboardSupportedTypesEnabled(bool enabled) { is_clipboard_supported_types_enabled_ = enabled; }
  static void SetClipboardSvgEnabled(bool enabled) { is_clipboard_svg_enabled_ = enabled; }
  static void SetClipboardUnsanitizedContentEnabled(bool enabled) { is_clipboard_unsanitized_content_enabled_ = enabled; }
  static void SetClipboardWellFormedHtmlSanitizationWriteEnabled(bool enabled) { is_clipboard_well_formed_html_sanitization_write_enabled_ = enabled; }
  static void SetClipPathGeometryBoxEnabled(bool enabled) { is_clip_path_geometry_box_enabled_ = enabled; }
  static void SetClipPathRejectEmptyPathsEnabled(bool enabled) { is_clip_path_reject_empty_paths_enabled_ = enabled; }
  static void SetClipPathXYWHAndRectEnabled(bool enabled) { is_clip_path_xywh_and_rect_enabled_ = enabled; }
  static void SetCloseWatcherEnabled(bool enabled) { is_close_watcher_enabled_ = enabled; }
  static void SetCoepReflectionEnabled(bool enabled) { is_coep_reflection_enabled_ = enabled; }
  static void SetCompositeBGColorAnimationEnabled(bool enabled) { is_composite_bg_color_animation_enabled_ = enabled; }
  static void SetCompositeBoxShadowAnimationEnabled(bool enabled) { is_composite_box_shadow_animation_enabled_ = enabled; }
  static void SetCompositeClipPathAnimationEnabled(bool enabled) { is_composite_clip_path_animation_enabled_ = enabled; }
  static void SetCompositedSelectionUpdateEnabled(bool enabled) { is_composited_selection_update_enabled_ = enabled; }
  static void SetCompositionForegroundMarkersEnabled(bool enabled) { is_composition_foreground_markers_enabled_ = enabled; }
  static void SetCompressionDictionaryTransportEnabled(bool enabled) { is_compression_dictionary_transport_enabled_ = enabled; }
  static void SetCompressionDictionaryTransportBackendEnabled(bool enabled) { is_compression_dictionary_transport_backend_enabled_ = enabled; }
  static void SetComputedAccessibilityInfoEnabled(bool enabled) { is_computed_accessibility_info_enabled_ = enabled; }
  static void SetComputePressureEnabled(bool enabled) { is_compute_pressure_enabled_ = enabled; }
  static void SetConfirmationOfActionEnabled(bool enabled) { is_confirmation_of_action_enabled_ = enabled; }
  static void SetConsolidatedMovementXYEnabled(bool enabled) { is_consolidated_movement_xy_enabled_ = enabled; }
  static void SetContactsManagerEnabled(bool enabled) { is_contacts_manager_enabled_ = enabled; }
  static void SetContactsManagerExtraPropertiesEnabled(bool enabled) { is_contacts_manager_extra_properties_enabled_ = enabled; }
  static void SetContentIndexEnabled(bool enabled) { is_content_index_enabled_ = enabled; }
  static void SetContextMenuEnabled(bool enabled) { is_context_menu_enabled_ = enabled; }
  static void SetCookieDeprecationFacilitatedTestingEnabled(bool enabled) { is_cookie_deprecation_facilitated_testing_enabled_ = enabled; }
  static void SetCooperativeSchedulingEnabled(bool enabled) { is_cooperative_scheduling_enabled_ = enabled; }
  static void SetCoopRestrictPropertiesEnabled(bool enabled) { is_coop_restrict_properties_enabled_ = enabled; }
  static void SetCorsRFC1918Enabled(bool enabled) { is_cors_rfc_1918_enabled_ = enabled; }
  static void SetCounterStyleChangeShouleCollectInlinesEnabled(bool enabled) { is_counter_style_change_shoule_collect_inlines_enabled_ = enabled; }
  static void SetCrossFramePerformanceTimelineEnabled(bool enabled) { is_cross_frame_performance_timeline_enabled_ = enabled; }
  static void SetCSSAnchorPositioningEnabled(bool enabled) { is_css_anchor_positioning_enabled_ = enabled; }
  static void SetCSSAnchorPositioningCascadeFallbackEnabled(bool enabled) { is_css_anchor_positioning_cascade_fallback_enabled_ = enabled; }
  static void SetCSSAnimationCompositionEnabled(bool enabled) { is_css_animation_composition_enabled_ = enabled; }
  static void SetCSSAnimationDelayStartEndEnabled(bool enabled) { is_css_animation_delay_start_end_enabled_ = enabled; }
  static void SetCSSAtRuleCounterStyleImageSymbolsEnabled(bool enabled) { is_css_at_rule_counter_style_image_symbols_enabled_ = enabled; }
  static void SetCSSAtRuleCounterStyleSpeakAsDescriptorEnabled(bool enabled) { is_css_at_rule_counter_style_speak_as_descriptor_enabled_ = enabled; }
  static void SetCSSBackgroundClipUnprefixEnabled(bool enabled) { is_css_background_clip_unprefix_enabled_ = enabled; }
  static void SetCSSCalcSimplificationAndSerializationEnabled(bool enabled) { is_css_calc_simplification_and_serialization_enabled_ = enabled; }
  static void SetCSSCapFontUnitsEnabled(bool enabled) { is_css_cap_font_units_enabled_ = enabled; }
  static void SetCSSCaseSensitiveSelectorEnabled(bool enabled) { is_css_case_sensitive_selector_enabled_ = enabled; }
  static void SetCSSColorContrastEnabled(bool enabled) { is_css_color_contrast_enabled_ = enabled; }
  static void SetCSSColorTypedOMEnabled(bool enabled) { is_css_color_typed_om_enabled_ = enabled; }
  static void SetCSSContentVisibilityImpliesContainIntrinsicSizeAutoEnabled(bool enabled) { is_css_content_visibility_implies_contain_intrinsic_size_auto_enabled_ = enabled; }
  static void SetCSSCrossFadeEnabled(bool enabled) { is_css_cross_fade_enabled_ = enabled; }
  static void SetCSSCustomStateDeprecatedSyntaxEnabled(bool enabled) { is_css_custom_state_deprecated_syntax_enabled_ = enabled; }
  static void SetCSSCustomStateNewSyntaxEnabled(bool enabled) { is_css_custom_state_new_syntax_enabled_ = enabled; }
  static void SetCSSDisplayAnimationEnabled(bool enabled) { is_css_display_animation_enabled_ = enabled; }
  static void SetCssDisplayRubyEnabled(bool enabled) { is_css_display_ruby_enabled_ = enabled; }
  static void SetCSSDynamicRangeLimitEnabled(bool enabled) { is_css_dynamic_range_limit_enabled_ = enabled; }
  static void SetCSSEnumeratedCustomPropertiesEnabled(bool enabled) { is_css_enumerated_custom_properties_enabled_ = enabled; }
  static void SetCSSExponentialFunctionsEnabled(bool enabled) { is_css_exponential_functions_enabled_ = enabled; }
  static void SetCssFieldSizingEnabled(bool enabled) { is_css_field_sizing_enabled_ = enabled; }
  static void SetCSSFirstLetterNoNewLineAsPrecedingCharEnabled(bool enabled) { is_css_first_letter_no_new_line_as_preceding_char_enabled_ = enabled; }
  static void SetCSSFontSizeAdjustEnabled(bool enabled) { is_css_font_size_adjust_enabled_ = enabled; }
  static void SetCSSHexAlphaColorEnabled(bool enabled) { is_css_hex_alpha_color_enabled_ = enabled; }
  static void SetCSSLayoutAPIEnabled(bool enabled) { is_css_layout_api_enabled_ = enabled; }
  static void SetCSSLightDarkColorsEnabled(bool enabled) { is_css_light_dark_colors_enabled_ = enabled; }
  static void SetCSSLinearTimingFunctionEnabled(bool enabled) { is_css_linear_timing_function_enabled_ = enabled; }
  static void SetCSSLogicalOverflowEnabled(bool enabled) { is_css_logical_overflow_enabled_ = enabled; }
  static void SetCSSMarkerNestedPseudoElementEnabled(bool enabled) { is_css_marker_nested_pseudo_element_enabled_ = enabled; }
  static void SetCSSMaskingInteropEnabled(bool enabled) { is_css_masking_interop_enabled_ = enabled; }
  static void SetCSSMPCImprovementsEnabled(bool enabled) { is_css_mpc_improvements_enabled_ = enabled; }
  static void SetCSSNestingIdentEnabled(bool enabled) { is_css_nesting_ident_enabled_ = enabled; }
  static void SetCSSNumericFactoryCompletenessEnabled(bool enabled) { is_css_numeric_factory_completeness_enabled_ = enabled; }
  static void SetCSSOffsetPathBasicShapesCircleAndEllipseEnabled(bool enabled) { is_css_offset_path_basic_shapes_circle_and_ellipse_enabled_ = enabled; }
  static void SetCSSOffsetPathBasicShapesRectanglesAndPolygonEnabled(bool enabled) { is_css_offset_path_basic_shapes_rectangles_and_polygon_enabled_ = enabled; }
  static void SetCSSOffsetPathCoordBoxEnabled(bool enabled) { is_css_offset_path_coord_box_enabled_ = enabled; }
  static void SetCSSOffsetPathRayEnabled(bool enabled) { is_css_offset_path_ray_enabled_ = enabled; }
  static void SetCSSOffsetPathRayContainEnabled(bool enabled) { is_css_offset_path_ray_contain_enabled_ = enabled; }
  static void SetCSSOffsetPathUrlEnabled(bool enabled) { is_css_offset_path_url_enabled_ = enabled; }
  static void SetCSSOffsetPositionAnchorEnabled(bool enabled) { is_css_offset_position_anchor_enabled_ = enabled; }
  static void SetCSSOverflowMediaFeaturesEnabled(bool enabled) { is_css_overflow_media_features_enabled_ = enabled; }
  static void SetCSSPaintAPIArgumentsEnabled(bool enabled) { is_css_paint_api_arguments_enabled_ = enabled; }
  static void SetCSSParserIgnoreCharsetForURLsEnabled(bool enabled) { is_css_parser_ignore_charset_for_urls_enabled_ = enabled; }
  static void SetCSSPhraseLineBreakEnabled(bool enabled) { is_css_phrase_line_break_enabled_ = enabled; }
  static void SetCSSPositionStickyStaticScrollPositionEnabled(bool enabled) { is_css_position_sticky_static_scroll_position_enabled_ = enabled; }
  static void SetCSSProgressNotationEnabled(bool enabled) { is_css_progress_notation_enabled_ = enabled; }
  static void SetCSSPseudoPlayingPausedEnabled(bool enabled) { is_css_pseudo_playing_paused_enabled_ = enabled; }
  static void SetCSSRelativeColorEnabled(bool enabled) { is_css_relative_color_enabled_ = enabled; }
  static void SetCSSResizeAutoEnabled(bool enabled) { is_css_resize_auto_enabled_ = enabled; }
  static void SetCSSScopeEnabled(bool enabled) { is_css_scope_enabled_ = enabled; }
  static void SetCSSScrollSnapEventsEnabled(bool enabled) { is_css_scroll_snap_events_enabled_ = enabled; }
  static void SetCSSScrollStartEnabled(bool enabled) { is_css_scroll_start_enabled_ = enabled; }
  static void SetCSSScrollStateContainerQueriesEnabled(bool enabled) { is_css_scroll_state_container_queries_enabled_ = enabled; }
  static void SetCSSSelectorFragmentAnchorEnabled(bool enabled) { is_css_selector_fragment_anchor_enabled_ = enabled; }
  static void SetCSSSignRelatedFunctionsEnabled(bool enabled) { is_css_sign_related_functions_enabled_ = enabled; }
  static void SetCSSSnapChangedEventEnabled(bool enabled) { is_css_snap_changed_event_enabled_ = enabled; }
  static void SetCSSSnapChangingEventEnabled(bool enabled) { is_css_snap_changing_event_enabled_ = enabled; }
  static void SetCSSSnapContainerQueriesEnabled(bool enabled) { is_css_snap_container_queries_enabled_ = enabled; }
  static void SetCSSSpellingGrammarErrorsEnabled(bool enabled) { is_css_spelling_grammar_errors_enabled_ = enabled; }
  static void SetCSSSteppedValueFunctionsEnabled(bool enabled) { is_css_stepped_value_functions_enabled_ = enabled; }
  static void SetCSSStickyContainerQueriesEnabled(bool enabled) { is_css_sticky_container_queries_enabled_ = enabled; }
  static void SetCSSSupportsForImportRulesEnabled(bool enabled) { is_css_supports_for_import_rules_enabled_ = enabled; }
  static void SetCSSSystemAccentColorEnabled(bool enabled) { is_css_system_accent_color_enabled_ = enabled; }
  static void SetCSSTextAutoSpaceEnabled(bool enabled) { is_css_text_auto_space_enabled_ = enabled; }
  static void SetCSSTextBoxTrimEnabled(bool enabled) { is_css_text_box_trim_enabled_ = enabled; }
  static void SetCSSTextSpacingEnabled(bool enabled) { is_css_text_spacing_enabled_ = enabled; }
  static void SetCSSTextSpacingTrimEnabled(bool enabled) { is_css_text_spacing_trim_enabled_ = enabled; }
  static void SetCSSTextWrapBalanceByScoreEnabled(bool enabled) { is_css_text_wrap_balance_by_score_enabled_ = enabled; }
  static void SetCSSTextWrapPrettyEnabled(bool enabled) { is_css_text_wrap_pretty_enabled_ = enabled; }
  static void SetCSSTransitionDiscreteEnabled(bool enabled) { is_css_transition_discrete_enabled_ = enabled; }
  static void SetCSSTreeScopedTimelinesEnabled(bool enabled) { is_css_tree_scoped_timelines_enabled_ = enabled; }
  static void SetCSSUnknownContainerQueriesNoSelectionEnabled(bool enabled) { is_css_unknown_container_queries_no_selection_enabled_ = enabled; }
  static void SetCSSUpdateMediaFeatureEnabled(bool enabled) { is_css_update_media_feature_enabled_ = enabled; }
  static void SetCSSUserSelectContainEnabled(bool enabled) { is_css_user_select_contain_enabled_ = enabled; }
  static void SetCSSVariables2ImageValuesEnabled(bool enabled) { is_css_variables_2_image_values_enabled_ = enabled; }
  static void SetCSSVariables2TransformValuesEnabled(bool enabled) { is_css_variables_2_transform_values_enabled_ = enabled; }
  static void SetCSSVideoDynamicRangeMediaQueriesEnabled(bool enabled) { is_css_video_dynamic_range_media_queries_enabled_ = enabled; }
  static void SetCSSViewTimelineInsetShorthandEnabled(bool enabled) { is_css_view_timeline_inset_shorthand_enabled_ = enabled; }
  static void SetCSSViewTransitionClassEnabled(bool enabled) { is_css_view_transition_class_enabled_ = enabled; }
  static void SetCustomElementsGetNameEnabled(bool enabled) { is_custom_elements_get_name_enabled_ = enabled; }
  static void SetDatabaseEnabled(bool enabled) { is_database_enabled_ = enabled; }
  static void SetDataTransferClearStringItemsEnabled(bool enabled) { is_data_transfer_clear_string_items_enabled_ = enabled; }
  static void SetDateInputInlineBlockEnabled(bool enabled) { is_date_input_inline_block_enabled_ = enabled; }
  static void SetDeclarativeShadowDOMSerializableEnabled(bool enabled) { is_declarative_shadow_dom_serializable_enabled_ = enabled; }
  static void SetDeprecatedTemplateShadowRootEnabled(bool enabled) { is_deprecated_template_shadow_root_enabled_ = enabled; }
  static void SetDeprecateUnloadOptOutEnabled(bool enabled) { is_deprecate_unload_opt_out_enabled_ = enabled; }
  static void SetDesktopCaptureDisableLocalEchoControlEnabled(bool enabled) { is_desktop_capture_disable_local_echo_control_enabled_ = enabled; }
  static void SetDesktopPWAsAdditionalWindowingControlsEnabled(bool enabled) { is_desktop_pw_as_additional_windowing_controls_enabled_ = enabled; }
  static void SetDesktopPWAsSubAppsEnabled(bool enabled) { is_desktop_pw_as_sub_apps_enabled_ = enabled; }
  static void SetDetailsElementToggleEventEnabled(bool enabled) { is_details_element_toggle_event_enabled_ = enabled; }
  static void SetDetailsStylingEnabled(bool enabled) { is_details_styling_enabled_ = enabled; }
  static void SetDeviceAttributesEnabled(bool enabled) { is_device_attributes_enabled_ = enabled; }
  static void SetDeviceOrientationRequestPermissionEnabled(bool enabled) { is_device_orientation_request_permission_enabled_ = enabled; }
  static void SetDevicePostureEnabled(bool enabled) { is_device_posture_enabled_ = enabled; }
  static void SetDialogNewFocusBehaviorEnabled(bool enabled) { is_dialog_new_focus_behavior_enabled_ = enabled; }
  static void SetDigitalGoodsEnabled(bool enabled) { is_digital_goods_enabled_ = enabled; }
  static void SetDigitalGoodsV2_1Enabled(bool enabled) { is_digital_goods_v_2_1_enabled_ = enabled; }
  static void SetDirectSocketsEnabled(bool enabled) { is_direct_sockets_enabled_ = enabled; }
  static void SetDirnameMoreInputTypesEnabled(bool enabled) { is_dirname_more_input_types_enabled_ = enabled; }
  static void SetDisableDifferentOriginSubframeDialogSuppressionEnabled(bool enabled) { is_disable_different_origin_subframe_dialog_suppression_enabled_ = enabled; }
  static void SetDisableHardwareNoiseSuppressionEnabled(bool enabled) { is_disable_hardware_noise_suppression_enabled_ = enabled; }
  static void SetDisableSelectAllForEmptyTextEnabled(bool enabled) { is_disable_select_all_for_empty_text_enabled_ = enabled; }
  static void SetDisableThirdPartySessionStoragePartitioningAfterGeneralPartitioningEnabled(bool enabled) { is_disable_third_party_session_storage_partitioning_after_general_partitioning_enabled_ = enabled; }
  static void SetDisableThirdPartyStoragePartitioningEnabled(bool enabled) { is_disable_third_party_storage_partitioning_enabled_ = enabled; }
  static void SetDispatchHiddenVisibilityTransitionsEnabled(bool enabled) { is_dispatch_hidden_visibility_transitions_enabled_ = enabled; }
  static void SetDisplayContentsFocusableEnabled(bool enabled) { is_display_contents_focusable_enabled_ = enabled; }
  static void SetDisplayCutoutAPIEnabled(bool enabled) { is_display_cutout_api_enabled_ = enabled; }
  static void SetDocumentBaseURIFixEnabled(bool enabled) { is_document_base_uri_fix_enabled_ = enabled; }
  static void SetDocumentCookieEnabled(bool enabled) { is_document_cookie_enabled_ = enabled; }
  static void SetDocumentDomainEnabled(bool enabled) { is_document_domain_enabled_ = enabled; }
  static void SetDocumentOpenOriginAliasRemovalEnabled(bool enabled) { is_document_open_origin_alias_removal_enabled_ = enabled; }
  static void SetDocumentOpenSandboxInheritanceRemovalEnabled(bool enabled) { is_document_open_sandbox_inheritance_removal_enabled_ = enabled; }
  static void SetDocumentPictureInPictureAPIEnabled(bool enabled) { is_document_picture_in_picture_api_enabled_ = enabled; }
  static void SetDocumentPolicyDocumentDomainEnabled(bool enabled) { is_document_policy_document_domain_enabled_ = enabled; }
  static void SetDocumentPolicyNegotiationEnabled(bool enabled) { is_document_policy_negotiation_enabled_ = enabled; }
  static void SetDocumentPolicySyncXHREnabled(bool enabled) { is_document_policy_sync_xhr_enabled_ = enabled; }
  static void SetDocumentRenderBlockingEnabled(bool enabled) { is_document_render_blocking_enabled_ = enabled; }
  static void SetDocumentWriteEnabled(bool enabled) { is_document_write_enabled_ = enabled; }
  static void SetDOMParserUsesHTMLFastPathParserEnabled(bool enabled) { is_dom_parser_uses_html_fast_path_parser_enabled_ = enabled; }
  static void SetDOMPartsAPIEnabled(bool enabled) { is_dom_parts_api_enabled_ = enabled; }
  static void SetDontFireDblclickOnDisabledFormControlsEnabled(bool enabled) { is_dont_fire_dblclick_on_disabled_form_controls_enabled_ = enabled; }
  static void SetDynamicScrollCullRectExpansionEnabled(bool enabled) { is_dynamic_scroll_cull_rect_expansion_enabled_ = enabled; }
  static void SetEditContextEnabled(bool enabled) { is_edit_context_enabled_ = enabled; }
  static void SetElementCaptureEnabled(bool enabled) { is_element_capture_enabled_ = enabled; }
  static void SetElementGetHTMLEnabled(bool enabled) { is_element_get_html_enabled_ = enabled; }
  static void SetElementGetInnerHTMLEnabled(bool enabled) { is_element_get_inner_html_enabled_ = enabled; }
  static void SetEmptyClipboardReadEnabled(bool enabled) { is_empty_clipboard_read_enabled_ = enabled; }
  static void SetEnforceAnonymityExposureEnabled(bool enabled) { is_enforce_anonymity_exposure_enabled_ = enabled; }
  static void SetEscapeLtGtInAttributesEnabled(bool enabled) { is_escape_lt_gt_in_attributes_enabled_ = enabled; }
  static void SetEventTimingInteractionCountEnabled(bool enabled) { is_event_timing_interaction_count_enabled_ = enabled; }
  static void SetExperimentalContentSecurityPolicyFeaturesEnabled(bool enabled) { is_experimental_content_security_policy_features_enabled_ = enabled; }
  static void SetExperimentalJSProfilerMarkersEnabled(bool enabled) { is_experimental_js_profiler_markers_enabled_ = enabled; }
  static void SetExperimentalPoliciesEnabled(bool enabled) { is_experimental_policies_enabled_ = enabled; }
  static void SetExposeRenderTimeNonTaoDelayedImageEnabled(bool enabled) { is_expose_render_time_non_tao_delayed_image_enabled_ = enabled; }
  static void SetExtendedTextMetricsEnabled(bool enabled) { is_extended_text_metrics_enabled_ = enabled; }
  static void SetExtraWebGLVideoTextureMetadataEnabled(bool enabled) { is_extra_webgl_video_texture_metadata_enabled_ = enabled; }
  static void SetEyeDropperAPIEnabled(bool enabled) { is_eye_dropper_api_enabled_ = enabled; }
  static void SetFaceDetectorEnabled(bool enabled) { is_face_detector_enabled_ = enabled; }
  static void SetFakeNoAllocDirectCallForTestingEnabled(bool enabled) { is_fake_no_alloc_direct_call_for_testing_enabled_ = enabled; }
  static void SetFastPositionIteratorEnabled(bool enabled) { is_fast_position_iterator_enabled_ = enabled; }
  static void SetFedCmEnabled(bool enabled) { is_fed_cm_enabled_ = enabled; }
  static void SetFedCmAuthzEnabled(bool enabled) { is_fed_cm_authz_enabled_ = enabled; }
  static void SetFedCmAutoSelectedFlagEnabled(bool enabled) { is_fed_cm_auto_selected_flag_enabled_ = enabled; }
  static void SetFedCmButtonModeEnabled(bool enabled) { is_fed_cm_button_mode_enabled_ = enabled; }
  static void SetFedCmDisconnectEnabled(bool enabled) { is_fed_cm_disconnect_enabled_ = enabled; }
  static void SetFedCmDomainHintEnabled(bool enabled) { is_fed_cm_domain_hint_enabled_ = enabled; }
  static void SetFedCmErrorEnabled(bool enabled) { is_fed_cm_error_enabled_ = enabled; }
  static void SetFedCmIdPRegistrationEnabled(bool enabled) { is_fed_cm_id_p_registration_enabled_ = enabled; }
  static void SetFedCmIdpSigninStatusEnabled(bool enabled) { is_fed_cm_idp_signin_status_enabled_ = enabled; }
  static void SetFedCmMultipleIdentityProvidersEnabled(bool enabled) { is_fed_cm_multiple_identity_providers_enabled_ = enabled; }
  static void SetFedCmSelectiveDisclosureEnabled(bool enabled) { is_fed_cm_selective_disclosure_enabled_ = enabled; }
  static void SetFencedFramesEnabled(bool enabled) { is_fenced_frames_enabled_ = enabled; }
  static void SetFencedFramesAPIChangesEnabled(bool enabled) { is_fenced_frames_api_changes_enabled_ = enabled; }
  static void SetFencedFramesDefaultModeEnabled(bool enabled) { is_fenced_frames_default_mode_enabled_ = enabled; }
  static void SetFencedFramesLocalUnpartitionedDataAccessEnabled(bool enabled) { is_fenced_frames_local_unpartitioned_data_access_enabled_ = enabled; }
  static void SetFetchLaterAPIEnabled(bool enabled) { is_fetch_later_api_enabled_ = enabled; }
  static void SetFetchUploadStreamingEnabled(bool enabled) { is_fetch_upload_streaming_enabled_ = enabled; }
  static void SetFileHandlingEnabled(bool enabled) { is_file_handling_enabled_ = enabled; }
  static void SetFileHandlingIconsEnabled(bool enabled) { is_file_handling_icons_enabled_ = enabled; }
  static void SetFileSystemEnabled(bool enabled) { is_file_system_enabled_ = enabled; }
  static void SetFileSystemAccessEnabled(bool enabled) { is_file_system_access_enabled_ = enabled; }
  static void SetFileSystemAccessAPIExperimentalEnabled(bool enabled) { is_file_system_access_api_experimental_enabled_ = enabled; }
  static void SetFileSystemAccessGetCloudIdentifiersEnabled(bool enabled) { is_file_system_access_get_cloud_identifiers_enabled_ = enabled; }
  static void SetFileSystemAccessLocalEnabled(bool enabled) { is_file_system_access_local_enabled_ = enabled; }
  static void SetFileSystemAccessLockingSchemeEnabled(bool enabled) { is_file_system_access_locking_scheme_enabled_ = enabled; }
  static void SetFileSystemAccessOriginPrivateEnabled(bool enabled) { is_file_system_access_origin_private_enabled_ = enabled; }
  static void SetFileSystemObserverEnabled(bool enabled) { is_file_system_observer_enabled_ = enabled; }
  static void SetFledgeEnabled(bool enabled) { is_fledge_enabled_ = enabled; }
  static void SetFledgeBiddingAndAuctionServerAPIEnabled(bool enabled) { is_fledge_bidding_and_auction_server_api_enabled_ = enabled; }
  static void SetFledgeClearOriginJoinedAdInterestGroupsEnabled(bool enabled) { is_fledge_clear_origin_joined_ad_interest_groups_enabled_ = enabled; }
  static void SetFledgeDirectFromSellerSignalsHeaderAdSlotEnabled(bool enabled) { is_fledge_direct_from_seller_signals_header_ad_slot_enabled_ = enabled; }
  static void SetFledgeFeatureDetectionEnabled(bool enabled) { is_fledge_feature_detection_enabled_ = enabled; }
  static void SetFledgeNegativeTargetingEnabled(bool enabled) { is_fledge_negative_targeting_enabled_ = enabled; }
  static void SetFledgeTrustedBiddingSignalsSlotSizeEnabled(bool enabled) { is_fledge_trusted_bidding_signals_slot_size_enabled_ = enabled; }
  static void SetFluentOverlayScrollbarsEnabled(bool enabled) { is_fluent_overlay_scrollbars_enabled_ = enabled; }
  static void SetFluentScrollbarsEnabled(bool enabled) { is_fluent_scrollbars_enabled_ = enabled; }
  static void SetFlushParserBeforeCreatingCustomElementsEnabled(bool enabled) { is_flush_parser_before_creating_custom_elements_enabled_ = enabled; }
  static void SetFocusgroupEnabled(bool enabled) { is_focusgroup_enabled_ = enabled; }
  static void SetFocusStyleInvalidationOnPageActivationEnabled(bool enabled) { is_focus_style_invalidation_on_page_activation_enabled_ = enabled; }
  static void SetFontAccessEnabled(bool enabled) { is_font_access_enabled_ = enabled; }
  static void SetFontationsFontBackendEnabled(bool enabled) { is_fontations_font_backend_enabled_ = enabled; }
  static void SetFontMatchingCTMigrationEnabled(bool enabled) { is_font_matching_ct_migration_enabled_ = enabled; }
  static void SetFontPaletteAnimationEnabled(bool enabled) { is_font_palette_animation_enabled_ = enabled; }
  static void SetFontSrcLocalMatchingEnabled(bool enabled) { is_font_src_local_matching_enabled_ = enabled; }
  static void SetForcedColorsEnabled(bool enabled) { is_forced_colors_enabled_ = enabled; }
  static void SetForcedColorsPreserveParentColorEnabled(bool enabled) { is_forced_colors_preserve_parent_color_enabled_ = enabled; }
  static void SetForceEagerMeasureMemoryEnabled(bool enabled) { is_force_eager_measure_memory_enabled_ = enabled; }
  static void SetForceReduceMotionEnabled(bool enabled) { is_force_reduce_motion_enabled_ = enabled; }
  static void SetForceTallerSelectPopupEnabled(bool enabled) { is_force_taller_select_popup_enabled_ = enabled; }
  static void SetFormattedTextEnabled(bool enabled) { is_formatted_text_enabled_ = enabled; }
  static void SetFormControlRestoreStateIfAutocompleteOffEnabled(bool enabled) { is_form_control_restore_state_if_autocomplete_off_enabled_ = enabled; }
  static void SetFormControlsVerticalWritingModeDirectionSupportEnabled(bool enabled) { is_form_controls_vertical_writing_mode_direction_support_enabled_ = enabled; }
  static void SetFormControlsVerticalWritingModeSupportEnabled(bool enabled) { is_form_controls_vertical_writing_mode_support_enabled_ = enabled; }
  static void SetFormControlsVerticalWritingModeTextSupportEnabled(bool enabled) { is_form_controls_vertical_writing_mode_text_support_enabled_ = enabled; }
  static void SetFormStateRestoreCallbackCallWithStateEnabled(bool enabled) { is_form_state_restore_callback_call_with_state_enabled_ = enabled; }
  static void SetFractionalScrollOffsetsEnabled(bool enabled) { is_fractional_scroll_offsets_enabled_ = enabled; }
  static void SetFreezeFramesOnVisibilityEnabled(bool enabled) { is_freeze_frames_on_visibility_enabled_ = enabled; }
  static void SetFullscreenPopupWindowsEnabled(bool enabled) { is_fullscreen_popup_windows_enabled_ = enabled; }
  static void SetGamepadButtonAxisEventsEnabled(bool enabled) { is_gamepad_button_axis_events_enabled_ = enabled; }
  static void SetGamepadMultitouchEnabled(bool enabled) { is_gamepad_multitouch_enabled_ = enabled; }
  static void SetGetAllScreensMediaEnabled(bool enabled) { is_get_all_screens_media_enabled_ = enabled; }
  static void SetGetDisplayMediaEnabled(bool enabled) { is_get_display_media_enabled_ = enabled; }
  static void SetGetDisplayMediaRequiresUserActivationEnabled(bool enabled) { is_get_display_media_requires_user_activation_enabled_ = enabled; }
  static void SetGetNextSiblingPositionWhenLastChildEnabled(bool enabled) { is_get_next_sibling_position_when_last_child_enabled_ = enabled; }
  static void SetGroupEffectEnabled(bool enabled) { is_group_effect_enabled_ = enabled; }
  static void SetHandwritingRecognitionEnabled(bool enabled) { is_handwriting_recognition_enabled_ = enabled; }
  static void SetHangingWhitespaceDoesNotDependOnAlignmentEnabled(bool enabled) { is_hanging_whitespace_does_not_depend_on_alignment_enabled_ = enabled; }
  static void SetHasUAVisualTransitionEnabled(bool enabled) { is_has_ua_visual_transition_enabled_ = enabled; }
  static void SetHighlightInheritanceEnabled(bool enabled) { is_highlight_inheritance_enabled_ = enabled; }
  static void SetHighlightPointerEventsEnabled(bool enabled) { is_highlight_pointer_events_enabled_ = enabled; }
  static void SetHitTestOpaquenessEnabled(bool enabled) { is_hit_test_opaqueness_enabled_ = enabled; }
  static void SetHitTestTransparencyEnabled(bool enabled) { is_hit_test_transparency_enabled_ = enabled; }
  static void SetHrefTranslateEnabled(bool enabled) { is_href_translate_enabled_ = enabled; }
  static void SetHTMLInvokeActionsV2Enabled(bool enabled) { is_html_invoke_actions_v_2_enabled_ = enabled; }
  static void SetHTMLInvokeTargetAttributeEnabled(bool enabled) { is_html_invoke_target_attribute_enabled_ = enabled; }
  static void SetHTMLParserFastPathBulkInsertNotifyEnabled(bool enabled) { is_html_parser_fast_path_bulk_insert_notify_enabled_ = enabled; }
  static void SetHTMLParserYieldAndDelayOftenForTestingEnabled(bool enabled) { is_html_parser_yield_and_delay_often_for_testing_enabled_ = enabled; }
  static void SetHTMLPopoverHintEnabled(bool enabled) { is_html_popover_hint_enabled_ = enabled; }
  static void SetHTMLSearchElementEnabled(bool enabled) { is_html_search_element_enabled_ = enabled; }
  static void SetHTMLSelectElementShowPickerEnabled(bool enabled) { is_html_select_element_show_picker_enabled_ = enabled; }
  static void SetHTMLSelectListElementEnabled(bool enabled) { is_html_select_list_element_enabled_ = enabled; }
  static void SetHTMLUnsafeMethodsEnabled(bool enabled) { is_html_unsafe_methods_enabled_ = enabled; }
  static void SetImplicitRootScrollerEnabled(bool enabled) { is_implicit_root_scroller_enabled_ = enabled; }
  static void SetImportAttributesDisallowUnknownKeysEnabled(bool enabled) { is_import_attributes_disallow_unknown_keys_enabled_ = enabled; }
  static void SetImprovedXMLErrorsEnabled(bool enabled) { is_improved_xml_errors_enabled_ = enabled; }
  static void SetIncomingCallNotificationsEnabled(bool enabled) { is_incoming_call_notifications_enabled_ = enabled; }
  static void SetInertDisplayTransitionEnabled(bool enabled) { is_inert_display_transition_enabled_ = enabled; }
  static void SetInfiniteCullRectEnabled(bool enabled) { is_infinite_cull_rect_enabled_ = enabled; }
  static void SetInheritUserModifyWithoutContenteditableEnabled(bool enabled) { is_inherit_user_modify_without_contenteditable_enabled_ = enabled; }
  static void SetInnerHTMLParserFastpathLogFailureEnabled(bool enabled) { is_inner_html_parser_fastpath_log_failure_enabled_ = enabled; }
  static void SetInputMultipleFieldsUIEnabled(bool enabled) { is_input_multiple_fields_ui_enabled_ = enabled; }
  static void SetInsertLineBreakIfPhrasingContentEnabled(bool enabled) { is_insert_line_break_if_phrasing_content_enabled_ = enabled; }
  static void SetInstalledAppEnabled(bool enabled) { is_installed_app_enabled_ = enabled; }
  static void SetInteroperablePrivateAttributionEnabled(bool enabled) { is_interoperable_private_attribution_enabled_ = enabled; }
  static void SetInterruptComposedScrollbarDisappearanceEnabled(bool enabled) { is_interrupt_composed_scrollbar_disappearance_enabled_ = enabled; }
  static void SetIntersectionObserverScrollMarginEnabled(bool enabled) { is_intersection_observer_scroll_margin_enabled_ = enabled; }
  static void SetIntersectionOptimizationEnabled(bool enabled) { is_intersection_optimization_enabled_ = enabled; }
  static void SetInvertedColorsEnabled(bool enabled) { is_inverted_colors_enabled_ = enabled; }
  static void SetInvisibleSVGAnimationThrottlingEnabled(bool enabled) { is_invisible_svg_animation_throttling_enabled_ = enabled; }
  static void SetJavaScriptCompileHintsMagicRuntimeEnabled(bool enabled) { is_java_script_compile_hints_magic_runtime_enabled_ = enabled; }
  static void SetKeyboardAccessibleTooltipEnabled(bool enabled) { is_keyboard_accessible_tooltip_enabled_ = enabled; }
  static void SetKeyboardFocusableScrollersEnabled(bool enabled) { is_keyboard_focusable_scrollers_enabled_ = enabled; }
  static void SetLangAttributeAwareFormControlUIEnabled(bool enabled) { is_lang_attribute_aware_form_control_ui_enabled_ = enabled; }
  static void SetLayoutAlignForPositionedEnabled(bool enabled) { is_layout_align_for_positioned_enabled_ = enabled; }
  static void SetLayoutFlexNewRowAlgorithmV3Enabled(bool enabled) { is_layout_flex_new_row_algorithm_v_3_enabled_ = enabled; }
  static void SetLayoutIgnoreMarginsForStickyEnabled(bool enabled) { is_layout_ignore_margins_for_sticky_enabled_ = enabled; }
  static void SetLayoutNGShapeCacheEnabled(bool enabled) { is_layout_ng_shape_cache_enabled_ = enabled; }
  static void SetLazyInitializeMediaControlsEnabled(bool enabled) { is_lazy_initialize_media_controls_enabled_ = enabled; }
  static void SetLazyLoadScrollMarginEnabled(bool enabled) { is_lazy_load_scroll_margin_enabled_ = enabled; }
  static void SetLCPAnimatedImagesWebExposedEnabled(bool enabled) { is_lcp_animated_images_web_exposed_enabled_ = enabled; }
  static void SetLCPMouseoverHeuristicsEnabled(bool enabled) { is_lcp_mouseover_heuristics_enabled_ = enabled; }
  static void SetLCPMultipleUpdatesPerElementEnabled(bool enabled) { is_lcp_multiple_updates_per_element_enabled_ = enabled; }
  static void SetLegacyWindowsDWriteFontFallbackEnabled(bool enabled) { is_legacy_windows_d_write_font_fallback_enabled_ = enabled; }
  static void SetLockedModeEnabled(bool enabled) { is_locked_mode_enabled_ = enabled; }
  static void SetLongAnimationFrameTimingEnabled(bool enabled) { is_long_animation_frame_timing_enabled_ = enabled; }
  static void SetLongTaskFromLongAnimationFrameEnabled(bool enabled) { is_long_task_from_long_animation_frame_enabled_ = enabled; }
  static void SetMacFontsDeprecateFontTraitsWorkaroundEnabled(bool enabled) { is_mac_fonts_deprecate_font_traits_workaround_enabled_ = enabled; }
  static void SetMachineLearningCommonEnabled(bool enabled) { is_machine_learning_common_enabled_ = enabled; }
  static void SetMachineLearningModelLoaderEnabled(bool enabled) { is_machine_learning_model_loader_enabled_ = enabled; }
  static void SetMachineLearningNeuralNetworkEnabled(bool enabled) { is_machine_learning_neural_network_enabled_ = enabled; }
  static void SetManagedConfigurationEnabled(bool enabled) { is_managed_configuration_enabled_ = enabled; }
  static void SetMaskingGraphemeClustersEnabled(bool enabled) { is_masking_grapheme_clusters_enabled_ = enabled; }
  static void SetMeasureMemoryEnabled(bool enabled) { is_measure_memory_enabled_ = enabled; }
  static void SetMediaCapabilitiesDynamicRangeEnabled(bool enabled) { is_media_capabilities_dynamic_range_enabled_ = enabled; }
  static void SetMediaCapabilitiesEncodingInfoEnabled(bool enabled) { is_media_capabilities_encoding_info_enabled_ = enabled; }
  static void SetMediaCapabilitiesSpatialAudioEnabled(bool enabled) { is_media_capabilities_spatial_audio_enabled_ = enabled; }
  static void SetMediaCaptureEnabled(bool enabled) { is_media_capture_enabled_ = enabled; }
  static void SetMediaCaptureBackgroundBlurEnabled(bool enabled) { is_media_capture_background_blur_enabled_ = enabled; }
  static void SetMediaCaptureCameraControlsEnabled(bool enabled) { is_media_capture_camera_controls_enabled_ = enabled; }
  static void SetMediaCaptureConfigurationChangeEnabled(bool enabled) { is_media_capture_configuration_change_enabled_ = enabled; }
  static void SetMediaCaptureVoiceIsolationEnabled(bool enabled) { is_media_capture_voice_isolation_enabled_ = enabled; }
  static void SetMediaCastOverlayButtonEnabled(bool enabled) { is_media_cast_overlay_button_enabled_ = enabled; }
  static void SetMediaControlsExpandGestureEnabled(bool enabled) { is_media_controls_expand_gesture_enabled_ = enabled; }
  static void SetMediaControlsOverlayPlayButtonEnabled(bool enabled) { is_media_controls_overlay_play_button_enabled_ = enabled; }
  static void SetMediaElementVolumeGreaterThanOneEnabled(bool enabled) { is_media_element_volume_greater_than_one_enabled_ = enabled; }
  static void SetMediaEngagementBypassAutoplayPoliciesEnabled(bool enabled) { is_media_engagement_bypass_autoplay_policies_enabled_ = enabled; }
  static void SetMediaLatencyHintEnabled(bool enabled) { is_media_latency_hint_enabled_ = enabled; }
  static void SetMediaQueryNavigationControlsEnabled(bool enabled) { is_media_query_navigation_controls_enabled_ = enabled; }
  static void SetMediaRecorderUseMediaVideoEncoderEnabled(bool enabled) { is_media_recorder_use_media_video_encoder_enabled_ = enabled; }
  static void SetMediaSessionEnabled(bool enabled) { is_media_session_enabled_ = enabled; }
  static void SetMediaSessionChapterInformationEnabled(bool enabled) { is_media_session_chapter_information_enabled_ = enabled; }
  static void SetMediaSessionEnterPictureInPictureEnabled(bool enabled) { is_media_session_enter_picture_in_picture_enabled_ = enabled; }
  static void SetMediaSourceExperimentalEnabled(bool enabled) { is_media_source_experimental_enabled_ = enabled; }
  static void SetMediaSourceExtensionsForWebCodecsEnabled(bool enabled) { is_media_source_extensions_for_webcodecs_enabled_ = enabled; }
  static void SetMediaSourceNewAbortAndDurationEnabled(bool enabled) { is_media_source_new_abort_and_duration_enabled_ = enabled; }
  static void SetMediaStreamTrackTransferEnabled(bool enabled) { is_media_stream_track_transfer_enabled_ = enabled; }
  static void SetMessagePortCloseEventEnabled(bool enabled) { is_message_port_close_event_enabled_ = enabled; }
  static void SetMiddleClickAutoscrollEnabled(bool enabled) { is_middle_click_autoscroll_enabled_ = enabled; }
  static void SetMobileLayoutThemeEnabled(bool enabled) { is_mobile_layout_theme_enabled_ = enabled; }
  static void SetModelExecutionAPIEnabled(bool enabled) { is_model_execution_api_enabled_ = enabled; }
  static void SetMojoJSEnabled(bool enabled) { is_mojo_js_enabled_ = enabled; }
  static void SetMojoJSTestEnabled(bool enabled) { is_mojo_js_test_enabled_ = enabled; }
  static void SetMouseDragFromIframeOnCancelledMouseDownEnabled(bool enabled) { is_mouse_drag_from_iframe_on_cancelled_mouse_down_enabled_ = enabled; }
  static void SetMouseDragOnCancelledMouseMoveEnabled(bool enabled) { is_mouse_drag_on_cancelled_mouse_move_enabled_ = enabled; }
  static void SetMutationEventsEnabled(bool enabled) { is_mutation_events_enabled_ = enabled; }
  static void SetNavigateEventCommitBehaviorEnabled(bool enabled) { is_navigate_event_commit_behavior_enabled_ = enabled; }
  static void SetNavigateEventSourceElementEnabled(bool enabled) { is_navigate_event_source_element_enabled_ = enabled; }
  static void SetNavigationActivationEnabled(bool enabled) { is_navigation_activation_enabled_ = enabled; }
  static void SetNavigationIdEnabled(bool enabled) { is_navigation_id_enabled_ = enabled; }
  static void SetNavigatorContentUtilsEnabled(bool enabled) { is_navigator_content_utils_enabled_ = enabled; }
  static void SetNestedTopLayerSupportEnabled(bool enabled) { is_nested_top_layer_support_enabled_ = enabled; }
  static void SetNetInfoConstantTypeEnabled(bool enabled) { is_net_info_constant_type_enabled_ = enabled; }
  static void SetNetInfoDownlinkMaxEnabled(bool enabled) { is_net_info_downlink_max_enabled_ = enabled; }
  static void SetNextSiblingPositionUseNextCandidateEnabled(bool enabled) { is_next_sibling_position_use_next_candidate_enabled_ = enabled; }
  static void SetNoIdleEncodingForWebTestsEnabled(bool enabled) { is_no_idle_encoding_for_web_tests_enabled_ = enabled; }
  static void SetNonComposedEnterLeaveEventsEnabled(bool enabled) { is_non_composed_enter_leave_events_enabled_ = enabled; }
  static void SetNonStandardAppearanceValuesHighUsageEnabled(bool enabled) { is_non_standard_appearance_values_high_usage_enabled_ = enabled; }
  static void SetNonStandardAppearanceValueSliderVerticalEnabled(bool enabled) { is_non_standard_appearance_value_slider_vertical_enabled_ = enabled; }
  static void SetNonStandardAppearanceValuesLowUsageEnabled(bool enabled) { is_non_standard_appearance_values_low_usage_enabled_ = enabled; }
  static void SetNoOffsetMappingForInconsistentTextEnabled(bool enabled) { is_no_offset_mapping_for_inconsistent_text_enabled_ = enabled; }
  static void SetNotificationConstructorEnabled(bool enabled) { is_notification_constructor_enabled_ = enabled; }
  static void SetNotificationContentImageEnabled(bool enabled) { is_notification_content_image_enabled_ = enabled; }
  static void SetNotificationsEnabled(bool enabled) { is_notifications_enabled_ = enabled; }
  static void SetNotificationTriggersEnabled(bool enabled) { is_notification_triggers_enabled_ = enabled; }
  static void SetNoVarySearchPrefetchEnabled(bool enabled) { is_no_vary_search_prefetch_enabled_ = enabled; }
  static void SetObservableAPIEnabled(bool enabled) { is_observable_api_enabled_ = enabled; }
  static void SetOffMainThreadCSSPaintEnabled(bool enabled) { is_off_main_thread_css_paint_enabled_ = enabled; }
  static void SetOffscreenCanvasCommitEnabled(bool enabled) { is_offscreen_canvas_commit_enabled_ = enabled; }
  static void SetOffsetMappingUnitVariableEnabled(bool enabled) { is_offset_mapping_unit_variable_enabled_ = enabled; }
  static void SetOnDeviceChangeEnabled(bool enabled) { is_on_device_change_enabled_ = enabled; }
  static void SetOptionElementAlwaysUseLabelEnabled(bool enabled) { is_option_element_always_use_label_enabled_ = enabled; }
  static void SetOrientationEventEnabled(bool enabled) { is_orientation_event_enabled_ = enabled; }
  static void SetOriginIsolationHeaderEnabled(bool enabled) { is_origin_isolation_header_enabled_ = enabled; }
  static void SetOriginPolicyEnabled(bool enabled) { is_origin_policy_enabled_ = enabled; }
  static void SetOriginTrialsSampleAPIEnabled(bool enabled) { is_origin_trials_sample_api_enabled_ = enabled; }
  static void SetOriginTrialsSampleAPIBrowserReadWriteEnabled(bool enabled) { is_origin_trials_sample_api_browser_read_write_enabled_ = enabled; }
  static void SetOriginTrialsSampleAPIDependentEnabled(bool enabled) { is_origin_trials_sample_api_dependent_enabled_ = enabled; }
  static void SetOriginTrialsSampleAPIDeprecationEnabled(bool enabled) { is_origin_trials_sample_api_deprecation_enabled_ = enabled; }
  static void SetOriginTrialsSampleAPIExpiryGracePeriodEnabled(bool enabled) { is_origin_trials_sample_api_expiry_grace_period_enabled_ = enabled; }
  static void SetOriginTrialsSampleAPIExpiryGracePeriodThirdPartyEnabled(bool enabled) { is_origin_trials_sample_api_expiry_grace_period_third_party_enabled_ = enabled; }
  static void SetOriginTrialsSampleAPIImpliedEnabled(bool enabled) { is_origin_trials_sample_api_implied_enabled_ = enabled; }
  static void SetOriginTrialsSampleAPIInvalidOSEnabled(bool enabled) { is_origin_trials_sample_api_invalid_os_enabled_ = enabled; }
  static void SetOriginTrialsSampleAPINavigationEnabled(bool enabled) { is_origin_trials_sample_api_navigation_enabled_ = enabled; }
  static void SetOriginTrialsSampleAPIPersistentExpiryGracePeriodEnabled(bool enabled) { is_origin_trials_sample_api_persistent_expiry_grace_period_enabled_ = enabled; }
  static void SetOriginTrialsSampleAPIPersistentFeatureEnabled(bool enabled) { is_origin_trials_sample_api_persistent_feature_enabled_ = enabled; }
  static void SetOriginTrialsSampleAPIPersistentInvalidOSEnabled(bool enabled) { is_origin_trials_sample_api_persistent_invalid_os_enabled_ = enabled; }
  static void SetOriginTrialsSampleAPIPersistentThirdPartyDeprecationFeatureEnabled(bool enabled) { is_origin_trials_sample_api_persistent_third_party_deprecation_feature_enabled_ = enabled; }
  static void SetOriginTrialsSampleAPIThirdPartyEnabled(bool enabled) { is_origin_trials_sample_api_third_party_enabled_ = enabled; }
  static void SetOverscrollCustomizationEnabled(bool enabled) { is_overscroll_customization_enabled_ = enabled; }
  static void SetPageFreezeOptInEnabled(bool enabled) { is_page_freeze_opt_in_enabled_ = enabled; }
  static void SetPageFreezeOptOutEnabled(bool enabled) { is_page_freeze_opt_out_enabled_ = enabled; }
  static void SetPageMarginBoxesEnabled(bool enabled) { is_page_margin_boxes_enabled_ = enabled; }
  static void SetPagePopupEnabled(bool enabled) { is_page_popup_enabled_ = enabled; }
  static void SetPageRevealEventEnabled(bool enabled) { is_page_reveal_event_enabled_ = enabled; }
  static void SetPaintUnderInvalidationCheckingEnabled(bool enabled) { is_paint_under_invalidation_checking_enabled_ = enabled; }
  static void SetParakeetEnabled(bool enabled) { is_parakeet_enabled_ = enabled; }
  static void SetPartitionedCookiesEnabled(bool enabled) { is_partitioned_cookies_enabled_ = enabled; }
  static void SetPasswordRevealEnabled(bool enabled) { is_password_reveal_enabled_ = enabled; }
  static void SetPasswordStrongLabelEnabled(bool enabled) { is_password_strong_label_enabled_ = enabled; }
  static void SetPastingBlocksSVGUseNonLocalHrefsEnabled(bool enabled) { is_pasting_blocks_svg_use_non_local_hrefs_enabled_ = enabled; }
  static void SetPaymentAppEnabled(bool enabled) { is_payment_app_enabled_ = enabled; }
  static void SetPaymentHandlerMinimalHeaderUXEnabled(bool enabled) { is_payment_handler_minimal_header_ux_enabled_ = enabled; }
  static void SetPaymentInstrumentsEnabled(bool enabled) { is_payment_instruments_enabled_ = enabled; }
  static void SetPaymentMethodChangeEventEnabled(bool enabled) { is_payment_method_change_event_enabled_ = enabled; }
  static void SetPaymentRequestEnabled(bool enabled) { is_payment_request_enabled_ = enabled; }
  static void SetPaymentRequestAllowOneActivationlessShowEnabled(bool enabled) { is_payment_request_allow_one_activationless_show_enabled_ = enabled; }
  static void SetPaymentRequestMerchantValidationEventEnabled(bool enabled) { is_payment_request_merchant_validation_event_enabled_ = enabled; }
  static void SetPendingBeaconAPIEnabled(bool enabled) { is_pending_beacon_api_enabled_ = enabled; }
  static void SetPercentBasedScrollingEnabled(bool enabled) { is_percent_based_scrolling_enabled_ = enabled; }
  static void SetPerformanceManagerInstrumentationEnabled(bool enabled) { is_performance_manager_instrumentation_enabled_ = enabled; }
  static void SetPerformanceMarkFeatureUsageEnabled(bool enabled) { is_performance_mark_feature_usage_enabled_ = enabled; }
  static void SetPerformanceNavigateSystemEntropyEnabled(bool enabled) { is_performance_navigate_system_entropy_enabled_ = enabled; }
  static void SetPeriodicBackgroundSyncEnabled(bool enabled) { is_periodic_background_sync_enabled_ = enabled; }
  static void SetPerMethodCanMakePaymentQuotaEnabled(bool enabled) { is_per_method_can_make_payment_quota_enabled_ = enabled; }
  static void SetPermissionElementEnabled(bool enabled) { is_permission_element_enabled_ = enabled; }
  static void SetPermissionsEnabled(bool enabled) { is_permissions_enabled_ = enabled; }
  static void SetPermissionsRequestRevokeEnabled(bool enabled) { is_permissions_request_revoke_enabled_ = enabled; }
  static void SetPNaClEnabled(bool enabled) { is_p_na_cl_enabled_ = enabled; }
  static void SetPointerCaptureLostOnRemovalDuringCaptureEnabled(bool enabled) { is_pointer_capture_lost_on_removal_during_capture_enabled_ = enabled; }
  static void SetPointerEventDeviceIdEnabled(bool enabled) { is_pointer_event_device_id_enabled_ = enabled; }
  static void SetPositionOutsideTabSpanCheckSiblingNodeEnabled(bool enabled) { is_position_outside_tab_span_check_sibling_node_enabled_ = enabled; }
  static void SetPreciseMemoryInfoEnabled(bool enabled) { is_precise_memory_info_enabled_ = enabled; }
  static void SetPreferDefaultScrollbarStylesEnabled(bool enabled) { is_prefer_default_scrollbar_styles_enabled_ = enabled; }
  static void SetPreferNonCompositedScrollingEnabled(bool enabled) { is_prefer_non_composited_scrolling_enabled_ = enabled; }
  static void SetPrefersReducedDataEnabled(bool enabled) { is_prefers_reduced_data_enabled_ = enabled; }
  static void SetPrefixedVideoFullscreenEnabled(bool enabled) { is_prefixed_video_fullscreen_enabled_ = enabled; }
  static void SetPrePaintAncestorsOfMissedOOFEnabled(bool enabled) { is_pre_paint_ancestors_of_missed_oof_enabled_ = enabled; }
  static void SetPrerender2Enabled(bool enabled) { is_prerender_2_enabled_ = enabled; }
  static void SetPresentationEnabled(bool enabled) { is_presentation_enabled_ = enabled; }
  static void SetPrettyPrintJSONDocumentEnabled(bool enabled) { is_pretty_print_js_on_document_enabled_ = enabled; }
  static void SetPreventReadingSystemAccentColorEnabled(bool enabled) { is_prevent_reading_system_accent_color_enabled_ = enabled; }
  static void SetPrivacySandboxAdsAPIsEnabled(bool enabled) { is_privacy_sandbox_ads_api_s_enabled_ = enabled; }
  static void SetPrivateAggregationAuctionReportBuyerDebugModeConfigEnabled(bool enabled) { is_private_aggregation_auction_report_buyer_debug_mode_config_enabled_ = enabled; }
  static void SetPrivateNetworkAccessNonSecureContextsAllowedEnabled(bool enabled) { is_private_network_access_non_secure_contexts_allowed_enabled_ = enabled; }
  static void SetPrivateNetworkAccessNullIpAddressEnabled(bool enabled) { is_private_network_access_null_ip_address_enabled_ = enabled; }
  static void SetPrivateNetworkAccessPermissionPromptEnabled(bool enabled) { is_private_network_access_permission_prompt_enabled_ = enabled; }
  static void SetPrivateStateTokensEnabled(bool enabled) { is_private_state_tokens_enabled_ = enabled; }
  static void SetPrivateStateTokensAlwaysAllowIssuanceEnabled(bool enabled) { is_private_state_tokens_always_allow_issuance_enabled_ = enabled; }
  static void SetPushMessagingEnabled(bool enabled) { is_push_messaging_enabled_ = enabled; }
  static void SetPushMessagingSubscriptionChangeEnabled(bool enabled) { is_push_messaging_subscription_change_enabled_ = enabled; }
  static void SetQuickIntensiveWakeUpThrottlingAfterLoadingEnabled(bool enabled) { is_quick_intensive_wake_up_throttling_after_loading_enabled_ = enabled; }
  static void SetQuotaChangeEnabled(bool enabled) { is_quota_change_enabled_ = enabled; }
  static void SetReadableStreamTeeCloneForBranch2Enabled(bool enabled) { is_readable_stream_tee_clone_for_branch_2_enabled_ = enabled; }
  static void SetReduceAcceptLanguageEnabled(bool enabled) { is_reduce_accept_language_enabled_ = enabled; }
  static void SetReduceCookieIPCsEnabled(bool enabled) { is_reduce_cookie_ip_cs_enabled_ = enabled; }
  static void SetReduceUserAgentAndroidVersionDeviceModelEnabled(bool enabled) { is_reduce_user_agent_android_version_device_model_enabled_ = enabled; }
  static void SetReduceUserAgentMinorVersionEnabled(bool enabled) { is_reduce_user_agent_minor_version_enabled_ = enabled; }
  static void SetReduceUserAgentPlatformOsCpuEnabled(bool enabled) { is_reduce_user_agent_platform_os_cpu_enabled_ = enabled; }
  static void SetRegionCaptureEnabled(bool enabled) { is_region_capture_enabled_ = enabled; }
  static void SetRemotePlaybackEnabled(bool enabled) { is_remote_playback_enabled_ = enabled; }
  static void SetRemotePlaybackBackendEnabled(bool enabled) { is_remote_playback_backend_enabled_ = enabled; }
  static void SetRemoveDanglingMarkupInTargetEnabled(bool enabled) { is_remove_dangling_markup_in_target_enabled_ = enabled; }
  static void SetRemoveDataUrlInSvgUseEnabled(bool enabled) { is_remove_data_url_in_svg_use_enabled_ = enabled; }
  static void SetRemoveMobileViewportDoubleTapEnabled(bool enabled) { is_remove_mobile_viewport_double_tap_enabled_ = enabled; }
  static void SetRenderBlockingInlineModuleScriptEnabled(bool enabled) { is_render_blocking_inline_module_script_enabled_ = enabled; }
  static void SetRenderBlockingStatusEnabled(bool enabled) { is_render_blocking_status_enabled_ = enabled; }
  static void SetRenderPriorityAttributeEnabled(bool enabled) { is_render_priority_attribute_enabled_ = enabled; }
  static void SetReportVisibleLineBoundsEnabled(bool enabled) { is_report_visible_line_bounds_enabled_ = enabled; }
  static void SetResourceTimingContentTypeEnabled(bool enabled) { is_resource_timing_content_type_enabled_ = enabled; }
  static void SetResourceTimingUseCORSForBodySizesEnabled(bool enabled) { is_resource_timing_use_cors_for_body_sizes_enabled_ = enabled; }
  static void SetRestrictGamepadAccessEnabled(bool enabled) { is_restrict_gamepad_access_enabled_ = enabled; }
  static void SetRewindFloatsEnabled(bool enabled) { is_rewind_floats_enabled_ = enabled; }
  static void SetRtcAudioJitterBufferMaxPacketsEnabled(bool enabled) { is_rtc_audio_jitter_buffer_max_packets_enabled_ = enabled; }
  static void SetRTCEncodedAudioFrameAbsCaptureTimeEnabled(bool enabled) { is_rtc_encoded_audio_frame_abs_capture_time_enabled_ = enabled; }
  static void SetRTCEncodedFrameSetMetadataEnabled(bool enabled) { is_rtc_encoded_frame_set_metadata_enabled_ = enabled; }
  static void SetRTCEncodedVideoFrameAdditionalMetadataEnabled(bool enabled) { is_rtc_encoded_video_frame_additional_metadata_enabled_ = enabled; }
  static void SetRTCLegacyCallbackBasedGetStatsEnabled(bool enabled) { is_rtc_legacy_callback_based_get_stats_enabled_ = enabled; }
  static void SetRTCRtpEncodingParametersCodecEnabled(bool enabled) { is_rtc_rtp_encoding_parameters_codec_enabled_ = enabled; }
  static void SetRTCRtpHeaderExtensionControlEnabled(bool enabled) { is_rtc_rtp_header_extension_control_enabled_ = enabled; }
  static void SetRTCStatsRelativePacketArrivalDelayEnabled(bool enabled) { is_rtc_stats_relative_packet_arrival_delay_enabled_ = enabled; }
  static void SetRTCSvcScalabilityModeEnabled(bool enabled) { is_rtc_svc_scalability_mode_enabled_ = enabled; }
  static void SetRubyInlinifyEnabled(bool enabled) { is_ruby_inlinify_enabled_ = enabled; }
  static void SetRubySimplePairingEnabled(bool enabled) { is_ruby_simple_pairing_enabled_ = enabled; }
  static void SetRunMicrotaskBeforeXmlCustomElementEnabled(bool enabled) { is_run_microtask_before_xml_custom_element_enabled_ = enabled; }
  static void SetSanitizerAPIEnabled(bool enabled) { is_sanitizer_api_enabled_ = enabled; }
  static void SetSchedulerYieldEnabled(bool enabled) { is_scheduler_yield_enabled_ = enabled; }
  static void SetScopedCustomElementRegistryEnabled(bool enabled) { is_scoped_custom_element_registry_enabled_ = enabled; }
  static void SetScriptedSpeechRecognitionEnabled(bool enabled) { is_scripted_speech_recognition_enabled_ = enabled; }
  static void SetScriptedSpeechSynthesisEnabled(bool enabled) { is_scripted_speech_synthesis_enabled_ = enabled; }
  static void SetScrollbarColorEnabled(bool enabled) { is_scrollbar_color_enabled_ = enabled; }
  static void SetScrollbarWidthEnabled(bool enabled) { is_scrollbar_width_enabled_ = enabled; }
  static void SetScrollEndEventsEnabled(bool enabled) { is_scroll_end_events_enabled_ = enabled; }
  static void SetScrollTimelineEnabled(bool enabled) { is_scroll_timeline_enabled_ = enabled; }
  static void SetScrollTimelineCurrentTimeEnabled(bool enabled) { is_scroll_timeline_current_time_enabled_ = enabled; }
  static void SetScrollTimelineOnCompositorEnabled(bool enabled) { is_scroll_timeline_on_compositor_enabled_ = enabled; }
  static void SetScrollTopLeftInteropEnabled(bool enabled) { is_scroll_top_left_interop_enabled_ = enabled; }
  static void SetSecurePaymentConfirmationEnabled(bool enabled) { is_secure_payment_confirmation_enabled_ = enabled; }
  static void SetSecurePaymentConfirmationAllowOneActivationlessShowEnabled(bool enabled) { is_secure_payment_confirmation_allow_one_activationless_show_enabled_ = enabled; }
  static void SetSecurePaymentConfirmationDebugEnabled(bool enabled) { is_secure_payment_confirmation_debug_enabled_ = enabled; }
  static void SetSecurePaymentConfirmationExtensionsEnabled(bool enabled) { is_secure_payment_confirmation_extensions_enabled_ = enabled; }
  static void SetSecurePaymentConfirmationOptOutEnabled(bool enabled) { is_secure_payment_confirmation_opt_out_enabled_ = enabled; }
  static void SetSelectHrEnabled(bool enabled) { is_select_hr_enabled_ = enabled; }
  static void SetSendBeaconThrowForBlobWithNonSimpleTypeEnabled(bool enabled) { is_send_beacon_throw_for_blob_with_non_simple_type_enabled_ = enabled; }
  static void SetSensorExtraClassesEnabled(bool enabled) { is_sensor_extra_classes_enabled_ = enabled; }
  static void SetSerialEnabled(bool enabled) { is_serial_enabled_ = enabled; }
  static void SetSerializeViewTransitionStateInSPAEnabled(bool enabled) { is_serialize_view_transition_state_in_spa_enabled_ = enabled; }
  static void SetServiceWorkerBypassFetchHandlerEnabled(bool enabled) { is_service_worker_bypass_fetch_handler_enabled_ = enabled; }
  static void SetServiceWorkerClientLifecycleStateEnabled(bool enabled) { is_service_worker_client_lifecycle_state_enabled_ = enabled; }
  static void SetServiceWorkerRaceNetworkRequestEnabled(bool enabled) { is_service_worker_race_network_request_enabled_ = enabled; }
  static void SetServiceWorkerStaticRouterEnabled(bool enabled) { is_service_worker_static_router_enabled_ = enabled; }
  static void SetSetSequentialFocusStartingPointEnabled(bool enabled) { is_set_sequential_focus_starting_point_enabled_ = enabled; }
  static void SetShadowRootAttachmentNewBehaviorEnabled(bool enabled) { is_shadow_root_attachment_new_behavior_enabled_ = enabled; }
  static void SetShadowRootClonableEnabled(bool enabled) { is_shadow_root_clonable_enabled_ = enabled; }
  static void SetSharedArrayBufferEnabled(bool enabled) { is_shared_array_buffer_enabled_ = enabled; }
  static void SetSharedArrayBufferOnDesktopEnabled(bool enabled) { is_shared_array_buffer_on_desktop_enabled_ = enabled; }
  static void SetSharedArrayBufferUnrestrictedAccessAllowedEnabled(bool enabled) { is_shared_array_buffer_unrestricted_access_allowed_enabled_ = enabled; }
  static void SetSharedAutofillEnabled(bool enabled) { is_shared_autofill_enabled_ = enabled; }
  static void SetSharedStorageAPIEnabled(bool enabled) { is_shared_storage_api_enabled_ = enabled; }
  static void SetSharedStorageAPIM118Enabled(bool enabled) { is_shared_storage_api_m_118_enabled_ = enabled; }
  static void SetSharedWorkerEnabled(bool enabled) { is_shared_worker_enabled_ = enabled; }
  static void SetSignatureBasedIntegrityEnabled(bool enabled) { is_signature_based_integrity_enabled_ = enabled; }
  static void SetSiteInitiatedMirroringEnabled(bool enabled) { is_site_initiated_mirroring_enabled_ = enabled; }
  static void SetSkipAdEnabled(bool enabled) { is_skip_ad_enabled_ = enabled; }
  static void SetSkipTouchEventFilterEnabled(bool enabled) { is_skip_touch_event_filter_enabled_ = enabled; }
  static void SetSmartCardEnabled(bool enabled) { is_smart_card_enabled_ = enabled; }
  static void SetSmartZoomEnabled(bool enabled) { is_smart_zoom_enabled_ = enabled; }
  static void SetSmilAutoSuspendOnLagEnabled(bool enabled) { is_smil_auto_suspend_on_lag_enabled_ = enabled; }
  static void SetSnapBorderWidthsBeforeLayoutEnabled(bool enabled) { is_snap_border_widths_before_layout_enabled_ = enabled; }
  static void SetSoftNavigationDetectionEnabled(bool enabled) { is_soft_navigation_detection_enabled_ = enabled; }
  static void SetSoftNavigationHeuristicsEnabled(bool enabled) { is_soft_navigation_heuristics_enabled_ = enabled; }
  static void SetSoftNavigationHeuristicsExposeFPAndFCPEnabled(bool enabled) { is_soft_navigation_heuristics_expose_fp_and_fcp_enabled_ = enabled; }
  static void SetSparseObjectPaintPropertiesEnabled(bool enabled) { is_sparse_object_paint_properties_enabled_ = enabled; }
  static void SetSpeculationRulesDocumentRulesEnabled(bool enabled) { is_speculation_rules_document_rules_enabled_ = enabled; }
  static void SetSpeculationRulesDocumentRulesSelectorMatchesEnabled(bool enabled) { is_speculation_rules_document_rules_selector_matches_enabled_ = enabled; }
  static void SetSpeculationRulesEagernessEnabled(bool enabled) { is_speculation_rules_eagerness_enabled_ = enabled; }
  static void SetSpeculationRulesFetchFromHeaderEnabled(bool enabled) { is_speculation_rules_fetch_from_header_enabled_ = enabled; }
  static void SetSpeculationRulesImplicitSourceEnabled(bool enabled) { is_speculation_rules_implicit_source_enabled_ = enabled; }
  static void SetSpeculationRulesNoVarySearchHintEnabled(bool enabled) { is_speculation_rules_no_vary_search_hint_enabled_ = enabled; }
  static void SetSpeculationRulesNoVarySearchHintShippedByDefaultEnabled(bool enabled) { is_speculation_rules_no_vary_search_hint_shipped_by_default_enabled_ = enabled; }
  static void SetSpeculationRulesPointerDownHeuristicsEnabled(bool enabled) { is_speculation_rules_pointer_down_heuristics_enabled_ = enabled; }
  static void SetSpeculationRulesPointerHoverHeuristicsEnabled(bool enabled) { is_speculation_rules_pointer_hover_heuristics_enabled_ = enabled; }
  static void SetSpeculationRulesPrefetchFutureEnabled(bool enabled) { is_speculation_rules_prefetch_future_enabled_ = enabled; }
  static void SetSpeculationRulesPrefetchWithSubresourcesEnabled(bool enabled) { is_speculation_rules_prefetch_with_subresources_enabled_ = enabled; }
  static void SetSpeculationRulesRelativeToDocumentEnabled(bool enabled) { is_speculation_rules_relative_to_document_enabled_ = enabled; }
  static void SetSpellCheckerReplaceRangeUseInsertTextEnabled(bool enabled) { is_spell_checker_replace_range_use_insert_text_enabled_ = enabled; }
  static void SetSrcsetMaxDensityEnabled(bool enabled) { is_srcset_max_density_enabled_ = enabled; }
  static void SetStableBlinkFeaturesEnabled(bool enabled) { is_stable_blink_features_enabled_ = enabled; }
  static void SetStandardizedBrowserZoomEnabled(bool enabled) { is_standardized_browser_zoom_enabled_ = enabled; }
  static void SetStorageAccessAPIBeyondCookiesEnabled(bool enabled) { is_storage_access_api_beyond_cookies_enabled_ = enabled; }
  static void SetStorageBucketsEnabled(bool enabled) { is_storage_buckets_enabled_ = enabled; }
  static void SetStorageBucketsDurabilityEnabled(bool enabled) { is_storage_buckets_durability_enabled_ = enabled; }
  static void SetStorageBucketsLocksEnabled(bool enabled) { is_storage_buckets_locks_enabled_ = enabled; }
  static void SetStrictMimeTypesForWorkersEnabled(bool enabled) { is_strict_mime_types_for_workers_enabled_ = enabled; }
  static void SetStylableSelectEnabled(bool enabled) { is_stylable_select_enabled_ = enabled; }
  static void SetStylusHandwritingEnabled(bool enabled) { is_stylus_handwriting_enabled_ = enabled; }
  static void SetSuggestionPickerDarkModeSupportEnabled(bool enabled) { is_suggestion_picker_dark_mode_support_enabled_ = enabled; }
  static void SetSvgCrossOriginAttributeEnabled(bool enabled) { is_svg_cross_origin_attribute_enabled_ = enabled; }
  static void SetSvgNoPixelSnappingScaleAdjustmentEnabled(bool enabled) { is_svg_no_pixel_snapping_scale_adjustment_enabled_ = enabled; }
  static void SetSynthesizedKeyboardEventsForAccessibilityActionsEnabled(bool enabled) { is_synthesized_keyboard_events_for_accessibility_actions_enabled_ = enabled; }
  static void SetSystemWakeLockEnabled(bool enabled) { is_system_wake_lock_enabled_ = enabled; }
  static void SetTestFeatureEnabled(bool enabled) { is_test_feature_enabled_ = enabled; }
  static void SetTestFeatureDependentEnabled(bool enabled) { is_test_feature_dependent_enabled_ = enabled; }
  static void SetTestFeatureImpliedEnabled(bool enabled) { is_test_feature_implied_enabled_ = enabled; }
  static void SetTextDecoratingBoxEnabled(bool enabled) { is_text_decorating_box_enabled_ = enabled; }
  static void SetTextDetectorEnabled(bool enabled) { is_text_detector_enabled_ = enabled; }
  static void SetTextFragmentAPIEnabled(bool enabled) { is_text_fragment_api_enabled_ = enabled; }
  static void SetTextFragmentIdentifiersEnabled(bool enabled) { is_text_fragment_identifiers_enabled_ = enabled; }
  static void SetTextFragmentTapOpensContextMenuEnabled(bool enabled) { is_text_fragment_tap_opens_context_menu_enabled_ = enabled; }
  static void SetTextMetricsBaselinesEnabled(bool enabled) { is_text_metrics_baselines_enabled_ = enabled; }
  static void SetTimelineScopeEnabled(bool enabled) { is_timeline_scope_enabled_ = enabled; }
  static void SetTimerThrottlingForBackgroundTabsEnabled(bool enabled) { is_timer_throttling_for_background_tabs_enabled_ = enabled; }
  static void SetTimeZoneChangeEventEnabled(bool enabled) { is_time_zone_change_event_enabled_ = enabled; }
  static void SetTopicsAPIEnabled(bool enabled) { is_topics_api_enabled_ = enabled; }
  static void SetTopicsDocumentAPIEnabled(bool enabled) { is_topics_document_api_enabled_ = enabled; }
  static void SetTopLevelTpcdEnabled(bool enabled) { is_top_level_tpcd_enabled_ = enabled; }
  static void SetTouchDragAndContextMenuEnabled(bool enabled) { is_touch_drag_and_context_menu_enabled_ = enabled; }
  static void SetTouchDragOnShortPressEnabled(bool enabled) { is_touch_drag_on_short_press_enabled_ = enabled; }
  static void SetTouchEventFeatureDetectionEnabled(bool enabled) { is_touch_event_feature_detection_enabled_ = enabled; }
  static void SetTouchTextEditingRedesignEnabled(bool enabled) { is_touch_text_editing_redesign_enabled_ = enabled; }
  static void SetTpcdEnabled(bool enabled) { is_tpcd_enabled_ = enabled; }
  static void SetTranslateServiceEnabled(bool enabled) { is_translate_service_enabled_ = enabled; }
  static void SetTrustedTypeBeforePolicyCreationEventEnabled(bool enabled) { is_trusted_type_before_policy_creation_event_enabled_ = enabled; }
  static void SetTrustedTypesFromLiteralEnabled(bool enabled) { is_trusted_types_from_literal_enabled_ = enabled; }
  static void SetTrustedTypesUseCodeLikeEnabled(bool enabled) { is_trusted_types_use_code_like_enabled_ = enabled; }
  static void SetUnclosedFormControlIsInvalidEnabled(bool enabled) { is_unclosed_form_control_is_invalid_enabled_ = enabled; }
  static void SetUnexposedTaskIdsEnabled(bool enabled) { is_unexposed_task_ids_enabled_ = enabled; }
  static void SetUnownedAnimationsSkipCSSEventsEnabled(bool enabled) { is_unowned_animations_skip_css_events_enabled_ = enabled; }
  static void SetUnrestrictedMeasureUserAgentSpecificMemoryEnabled(bool enabled) { is_unrestricted_measure_user_agent_specific_memory_enabled_ = enabled; }
  static void SetUnrestrictedSharedArrayBufferEnabled(bool enabled) { is_unrestricted_shared_array_buffer_enabled_ = enabled; }
  static void SetUnrestrictedUsbEnabled(bool enabled) { is_unrestricted_usb_enabled_ = enabled; }
  static void SetURLAttributeFixEnabled(bool enabled) { is_url_attribute_fix_enabled_ = enabled; }
  static void SetURLPatternCompareComponentEnabled(bool enabled) { is_url_pattern_compare_component_enabled_ = enabled; }
  static void SetURLPatternHasRegExpGroupsEnabled(bool enabled) { is_url_pattern_has_reg_exp_groups_enabled_ = enabled; }
  static void SetURLPatternRegexpUnicodeSetsModeEnabled(bool enabled) { is_url_pattern_regexp_unicode_sets_mode_enabled_ = enabled; }
  static void SetURLPatternWildcardMoreOftenEnabled(bool enabled) { is_url_pattern_wildcard_more_often_enabled_ = enabled; }
  static void SetURLSearchParamsHasAndDeleteMultipleArgsEnabled(bool enabled) { is_url_search_params_has_and_delete_multiple_args_enabled_ = enabled; }
  static void SetUseBeginFramePresentationFeedbackEnabled(bool enabled) { is_use_begin_frame_presentation_feedback_enabled_ = enabled; }
  static void SetUsedColorSchemeRootScrollbarsEnabled(bool enabled) { is_used_color_scheme_root_scrollbars_enabled_ = enabled; }
  static void SetUserActivationSameOriginVisibilityEnabled(bool enabled) { is_user_activation_same_origin_visibility_enabled_ = enabled; }
  static void SetUserValidUserInvalidEnabled(bool enabled) { is_user_valid_user_invalid_enabled_ = enabled; }
  static void SetV8IdleTasksEnabled(bool enabled) { is_v8_idle_tasks_enabled_ = enabled; }
  static void SetVideoAutoFullscreenEnabled(bool enabled) { is_video_auto_fullscreen_enabled_ = enabled; }
  static void SetVideoFullscreenOrientationLockEnabled(bool enabled) { is_video_fullscreen_orientation_lock_enabled_ = enabled; }
  static void SetVideoPlaybackQualityEnabled(bool enabled) { is_video_playback_quality_enabled_ = enabled; }
  static void SetVideoRotateToFullscreenEnabled(bool enabled) { is_video_rotate_to_fullscreen_enabled_ = enabled; }
  static void SetVideoTrackGeneratorEnabled(bool enabled) { is_video_track_generator_enabled_ = enabled; }
  static void SetVideoTrackGeneratorInWindowEnabled(bool enabled) { is_video_track_generator_in_window_enabled_ = enabled; }
  static void SetVideoTrackGeneratorInWorkerEnabled(bool enabled) { is_video_track_generator_in_worker_enabled_ = enabled; }
  static void SetViewportHeightClientHintHeaderEnabled(bool enabled) { is_viewport_height_client_hint_header_enabled_ = enabled; }
  static void SetViewportSegmentsEnabled(bool enabled) { is_viewport_segments_enabled_ = enabled; }
  static void SetViewTransitionOnNavigationEnabled(bool enabled) { is_view_transition_on_navigation_enabled_ = enabled; }
  static void SetViewTransitionTypesEnabled(bool enabled) { is_view_transition_types_enabled_ = enabled; }
  static void SetVisibilityCollapseColumnEnabled(bool enabled) { is_visibility_collapse_column_enabled_ = enabled; }
  static void SetWakeLockEnabled(bool enabled) { is_wake_lock_enabled_ = enabled; }
  static void SetWarnOnContentVisibilityRenderAccessEnabled(bool enabled) { is_warn_on_content_visibility_render_access_enabled_ = enabled; }
  static void SetWebAnimationsSVGEnabled(bool enabled) { is_web_animations_svg_enabled_ = enabled; }
  static void SetWebAppDarkModeEnabled(bool enabled) { is_web_app_dark_mode_enabled_ = enabled; }
  static void SetWebAppLaunchHandlerEnabled(bool enabled) { is_web_app_launch_handler_enabled_ = enabled; }
  static void SetWebAppLaunchQueueEnabled(bool enabled) { is_web_app_launch_queue_enabled_ = enabled; }
  static void SetWebAppScopeExtensionsEnabled(bool enabled) { is_web_app_scope_extensions_enabled_ = enabled; }
  static void SetWebAppsLockScreenEnabled(bool enabled) { is_web_apps_lock_screen_enabled_ = enabled; }
  static void SetWebAppTabStripEnabled(bool enabled) { is_web_app_tab_strip_enabled_ = enabled; }
  static void SetWebAppTabStripCustomizationsEnabled(bool enabled) { is_web_app_tab_strip_customizations_enabled_ = enabled; }
  static void SetWebAppTranslationsEnabled(bool enabled) { is_web_app_translations_enabled_ = enabled; }
  static void SetWebAppUrlHandlingEnabled(bool enabled) { is_web_app_url_handling_enabled_ = enabled; }
  static void SetWebAssemblyJSPromiseIntegrationEnabled(bool enabled) { is_web_assembly_js_promise_integration_enabled_ = enabled; }
  static void SetWebAssemblyJSStringBuiltinsEnabled(bool enabled) { is_web_assembly_js_string_builtins_enabled_ = enabled; }
  static void SetWebAuthEnabled(bool enabled) { is_web_auth_enabled_ = enabled; }
  static void SetWebAuthAllowCreateInCrossOriginFrameEnabled(bool enabled) { is_web_auth_allow_create_in_cross_origin_frame_enabled_ = enabled; }
  static void SetWebAuthAuthenticatorAttachmentEnabled(bool enabled) { is_web_auth_authenticator_attachment_enabled_ = enabled; }
  static void SetWebAuthenticationHintsEnabled(bool enabled) { is_web_authentication_hints_enabled_ = enabled; }
  static void SetWebAuthenticationJSONSerializationEnabled(bool enabled) { is_web_authentication_js_on_serialization_enabled_ = enabled; }
  static void SetWebAuthenticationLargeBlobExtensionEnabled(bool enabled) { is_web_authentication_large_blob_extension_enabled_ = enabled; }
  static void SetWebAuthenticationPRFEnabled(bool enabled) { is_web_authentication_prf_enabled_ = enabled; }
  static void SetWebAuthenticationRemoteDesktopSupportEnabled(bool enabled) { is_web_authentication_remote_desktop_support_enabled_ = enabled; }
  static void SetWebAuthenticationSupplementalPubKeysEnabled(bool enabled) { is_web_authentication_supplemental_pub_keys_enabled_ = enabled; }
  static void SetWebBluetoothEnabled(bool enabled) { is_web_bluetooth_enabled_ = enabled; }
  static void SetWebBluetoothGetDevicesEnabled(bool enabled) { is_web_bluetooth_get_devices_enabled_ = enabled; }
  static void SetWebBluetoothScanningEnabled(bool enabled) { is_web_bluetooth_scanning_enabled_ = enabled; }
  static void SetWebBluetoothWatchAdvertisementsEnabled(bool enabled) { is_web_bluetooth_watch_advertisements_enabled_ = enabled; }
  static void SetWebCodecsContentHintEnabled(bool enabled) { is_webcodecs_content_hint_enabled_ = enabled; }
  static void SetWebCodecsCopyToRGBEnabled(bool enabled) { is_webcodecs_copy_to_rgb_enabled_ = enabled; }
  static void SetWebCryptoCurve25519Enabled(bool enabled) { is_web_crypto_curve_25519_enabled_ = enabled; }
  static void SetWebFontResizeLCPEnabled(bool enabled) { is_web_font_resize_lcp_enabled_ = enabled; }
  static void SetWebGLDeveloperExtensionsEnabled(bool enabled) { is_webgl_developer_extensions_enabled_ = enabled; }
  static void SetWebGLDraftExtensionsEnabled(bool enabled) { is_webgl_draft_extensions_enabled_ = enabled; }
  static void SetWebGLDrawingBufferStorageEnabled(bool enabled) { is_webgl_drawing_buffer_storage_enabled_ = enabled; }
  static void SetWebGLImageChromiumEnabled(bool enabled) { is_webgl_image_chromium_enabled_ = enabled; }
  static void SetWebGPUEnabled(bool enabled) { is_webgpu_enabled_ = enabled; }
  static void SetWebGPUDeveloperFeaturesEnabled(bool enabled) { is_webgpu_developer_features_enabled_ = enabled; }
  static void SetWebGPUExperimentalFeaturesEnabled(bool enabled) { is_webgpu_experimental_features_enabled_ = enabled; }
  static void SetWebHIDEnabled(bool enabled) { is_web_hid_enabled_ = enabled; }
  static void SetWebHIDOnServiceWorkersEnabled(bool enabled) { is_web_hid_on_service_workers_enabled_ = enabled; }
  static void SetWebIdentityDigitalCredentialsEnabled(bool enabled) { is_web_identity_digital_credentials_enabled_ = enabled; }
  static void SetWebIDLBigIntUsesToBigIntEnabled(bool enabled) { is_web_idl_big_int_uses_to_big_int_enabled_ = enabled; }
  static void SetWebNFCEnabled(bool enabled) { is_web_nfc_enabled_ = enabled; }
  static void SetWebOTPEnabled(bool enabled) { is_web_otp_enabled_ = enabled; }
  static void SetWebOTPAssertionFeaturePolicyEnabled(bool enabled) { is_web_otp_assertion_feature_policy_enabled_ = enabled; }
  static void SetWebPreferencesEnabled(bool enabled) { is_web_preferences_enabled_ = enabled; }
  static void SetWebPrintingEnabled(bool enabled) { is_web_printing_enabled_ = enabled; }
  static void SetWebSerialBluetoothEnabled(bool enabled) { is_web_serial_bluetooth_enabled_ = enabled; }
  static void SetWebShareEnabled(bool enabled) { is_web_share_enabled_ = enabled; }
  static void SetWebSocketStreamEnabled(bool enabled) { is_websocket_stream_enabled_ = enabled; }
  static void SetWebTransportCustomCertificatesEnabled(bool enabled) { is_web_transport_custom_certificates_enabled_ = enabled; }
  static void SetWebUSBEnabled(bool enabled) { is_web_usb_enabled_ = enabled; }
  static void SetWebUSBOnDedicatedWorkersEnabled(bool enabled) { is_web_usb_on_dedicated_workers_enabled_ = enabled; }
  static void SetWebUSBOnServiceWorkersEnabled(bool enabled) { is_web_usb_on_service_workers_enabled_ = enabled; }
  static void SetWebViewXRequestedWithDeprecationEnabled(bool enabled) { is_web_view_xr_equested_with_deprecation_enabled_ = enabled; }
  static void SetWebVTTRegionsEnabled(bool enabled) { is_web_vtt_regions_enabled_ = enabled; }
  static void SetWebXREnabled(bool enabled) { is_web_xr_enabled_ = enabled; }
  static void SetWebXREnabledFeaturesEnabled(bool enabled) { is_web_xr_enabled_features_enabled_ = enabled; }
  static void SetWebXRFrameRateEnabled(bool enabled) { is_web_xr_frame_rate_enabled_ = enabled; }
  static void SetWebXRFrontFacingEnabled(bool enabled) { is_web_xr_front_facing_enabled_ = enabled; }
  static void SetWebXRHandInputEnabled(bool enabled) { is_web_xr_hand_input_enabled_ = enabled; }
  static void SetWebXRHitTestEntityTypesEnabled(bool enabled) { is_web_xr_hit_test_entity_types_enabled_ = enabled; }
  static void SetWebXRImageTrackingEnabled(bool enabled) { is_web_xr_image_tracking_enabled_ = enabled; }
  static void SetWebXRLayersEnabled(bool enabled) { is_web_xr_layers_enabled_ = enabled; }
  static void SetWebXRPlaneDetectionEnabled(bool enabled) { is_web_xr_plane_detection_enabled_ = enabled; }
  static void SetWebXRPoseMotionDataEnabled(bool enabled) { is_web_xr_pose_motion_data_enabled_ = enabled; }
  static void SetWGIGamepadTriggerRumbleEnabled(bool enabled) { is_wgi_gamepad_trigger_rumble_enabled_ = enabled; }
  static void SetWindowDefaultStatusEnabled(bool enabled) { is_window_default_status_enabled_ = enabled; }
  static void SetWindowPlacementFullscreenOnScreensChangeEnabled(bool enabled) { is_window_placement_fullscreen_on_screens_change_enabled_ = enabled; }
  static void SetWindowPlacementPermissionAliasEnabled(bool enabled) { is_window_placement_permission_alias_enabled_ = enabled; }
  static void SetXMLParserMergeAdjacentCDataSectionsEnabled(bool enabled) { is_xml_parser_merge_adjacent_c_data_sections_enabled_ = enabled; }
  static void SetXYWHAndRectComputedValueEnabled(bool enabled) { is_xywh_and_rect_computed_value_enabled_ = enabled; }
  static void SetZeroCopyTabCaptureEnabled(bool enabled) { is_zero_copy_tab_capture_enabled_ = enabled; }

 private:
  friend class RuntimeEnabledFeaturesTestHelpers;

  static bool is_accelerated_2d_canvas_enabled_;
  static bool is_accelerated_small_canvases_enabled_;
  static bool is_accessibility_aria_virtual_content_enabled_;
  static bool is_accessibility_expose_display_none_enabled_;
  static bool is_accessibility_expose_html_element_enabled_;
  static bool is_accessibility_expose_ignored_nodes_enabled_;
  static bool is_accessibility_object_model_enabled_;
  static bool is_accessibility_os_level_bold_text_enabled_;
  static bool is_accessibility_page_zoom_enabled_;
  static bool is_accessibility_serialization_size_metrics_enabled_;
  static bool is_accessibility_use_ax_position_for_document_markers_enabled_;
  static bool is_add_identity_in_can_make_payment_event_enabled_;
  static bool is_address_space_enabled_;
  static bool is_ad_interest_group_api_enabled_;
  static bool is_ad_tagging_enabled_;
  static bool is_align_content_for_blocks_enabled_;
  static bool is_allow_content_initiated_data_url_navigations_enabled_;
  static bool is_allow_ur_ns_in_iframes_enabled_;
  static bool is_android_downloadable_fonts_matching_enabled_;
  static bool is_animation_worklet_enabled_;
  static bool is_anonymous_iframe_enabled_;
  static bool is_aom_aria_relationship_properties_enabled_;
  static bool is_app_title_enabled_;
  static bool is_async_clipboard_implicit_permission_enabled_;
  static bool is_attribution_reporting_enabled_;
  static bool is_attribution_reporting_cross_app_web_enabled_;
  static bool is_attribution_reporting_interface_enabled_;
  static bool is_audio_context_set_sink_id_enabled_;
  static bool is_audio_output_devices_enabled_;
  static bool is_audio_video_tracks_enabled_;
  static bool is_auto_dark_mode_enabled_;
  static bool is_automation_controlled_enabled_;
  static bool is_autoplay_ignores_web_audio_enabled_;
  static bool is_auto_size_lazy_loaded_images_enabled_;
  static bool is_avoid_caret_visible_selection_adjuster_enabled_;
  static bool is_backdrop_inherit_originating_enabled_;
  static bool is_backface_visibility_interop_enabled_;
  static bool is_back_forward_cache_enabled_;
  static bool is_back_forward_cache_experiment_http_header_enabled_;
  static bool is_back_forward_cache_not_restored_reasons_enabled_;
  static bool is_background_fetch_enabled_;
  static bool is_barcode_detector_enabled_;
  static bool is_bdi_element_dir_inheritance_enabled_;
  static bool is_beforeunload_event_cancel_by_prevent_default_enabled_;
  static bool is_bidi_caret_affinity_enabled_;
  static bool is_blink_extension_chrome_os_enabled_;
  static bool is_blink_extension_chrome_os_kiosk_enabled_;
  static bool is_blink_extension_diagnostics_enabled_;
  static bool is_blink_lifecycle_script_forbidden_enabled_;
  static bool is_blink_runtime_call_stats_enabled_;
  static bool is_blocking_focus_without_user_activation_enabled_;
  static bool is_block_ruby_wrapping_inline_ruby_enabled_;
  static bool is_boundary_event_dispatch_tracks_node_removal_enabled_;
  static bool is_browser_verified_user_activation_keyboard_enabled_;
  static bool is_browser_verified_user_activation_mouse_enabled_;
  static bool is_byob_fetch_enabled_;
  static bool is_cache_storage_code_cache_hint_enabled_;
  static bool is_canvas_2d_canvas_filter_enabled_;
  static bool is_canvas_2d_image_chromium_enabled_;
  static bool is_canvas_2d_layers_enabled_;
  static bool is_canvas_2d_mesh_enabled_;
  static bool is_canvas_2d_scroll_path_into_view_enabled_;
  static bool is_canvas_floating_point_enabled_;
  static bool is_canvas_hdr_enabled_;
  static bool is_canvas_image_smoothing_enabled_;
  static bool is_canvas_webgpu_access_enabled_;
  static bool is_capability_delegation_display_capture_request_enabled_;
  static bool is_capture_controller_enabled_;
  static bool is_captured_mouse_events_enabled_;
  static bool is_captured_surface_control_enabled_;
  static bool is_capture_handle_enabled_;
  static bool is_caret_position_from_point_enabled_;
  static bool is_cct_new_rfm_push_behavior_enabled_;
  static bool is_check_visibility_extra_properties_enabled_;
  static bool is_click_to_captured_pointer_enabled_;
  static bool is_clipboard_supported_types_enabled_;
  static bool is_clipboard_svg_enabled_;
  static bool is_clipboard_unsanitized_content_enabled_;
  static bool is_clipboard_well_formed_html_sanitization_write_enabled_;
  static bool is_clip_path_geometry_box_enabled_;
  static bool is_clip_path_reject_empty_paths_enabled_;
  static bool is_clip_path_xywh_and_rect_enabled_;
  static bool is_close_watcher_enabled_;
  static bool is_coep_reflection_enabled_;
  static bool is_composite_bg_color_animation_enabled_;
  static bool is_composite_box_shadow_animation_enabled_;
  static bool is_composite_clip_path_animation_enabled_;
  static bool is_composited_selection_update_enabled_;
  static bool is_composition_foreground_markers_enabled_;
  static bool is_compression_dictionary_transport_enabled_;
  static bool is_compression_dictionary_transport_backend_enabled_;
  static bool is_computed_accessibility_info_enabled_;
  static bool is_compute_pressure_enabled_;
  static bool is_confirmation_of_action_enabled_;
  static bool is_consolidated_movement_xy_enabled_;
  static bool is_contacts_manager_enabled_;
  static bool is_contacts_manager_extra_properties_enabled_;
  static bool is_content_index_enabled_;
  static bool is_context_menu_enabled_;
  static bool is_cookie_deprecation_facilitated_testing_enabled_;
  static bool is_cooperative_scheduling_enabled_;
  static bool is_coop_restrict_properties_enabled_;
  static bool is_cors_rfc_1918_enabled_;
  static bool is_counter_style_change_shoule_collect_inlines_enabled_;
  static bool is_cross_frame_performance_timeline_enabled_;
  static bool is_css_anchor_positioning_enabled_;
  static bool is_css_anchor_positioning_cascade_fallback_enabled_;
  static bool is_css_animation_composition_enabled_;
  static bool is_css_animation_delay_start_end_enabled_;
  static bool is_css_at_rule_counter_style_image_symbols_enabled_;
  static bool is_css_at_rule_counter_style_speak_as_descriptor_enabled_;
  static bool is_css_background_clip_unprefix_enabled_;
  static bool is_css_calc_simplification_and_serialization_enabled_;
  static bool is_css_cap_font_units_enabled_;
  static bool is_css_case_sensitive_selector_enabled_;
  static bool is_css_color_contrast_enabled_;
  static bool is_css_color_typed_om_enabled_;
  static bool is_css_content_visibility_implies_contain_intrinsic_size_auto_enabled_;
  static bool is_css_cross_fade_enabled_;
  static bool is_css_custom_state_deprecated_syntax_enabled_;
  static bool is_css_custom_state_new_syntax_enabled_;
  static bool is_css_display_animation_enabled_;
  static bool is_css_display_ruby_enabled_;
  static bool is_css_dynamic_range_limit_enabled_;
  static bool is_css_enumerated_custom_properties_enabled_;
  static bool is_css_exponential_functions_enabled_;
  static bool is_css_field_sizing_enabled_;
  static bool is_css_first_letter_no_new_line_as_preceding_char_enabled_;
  static bool is_css_font_size_adjust_enabled_;
  static bool is_css_hex_alpha_color_enabled_;
  static bool is_css_layout_api_enabled_;
  static bool is_css_light_dark_colors_enabled_;
  static bool is_css_linear_timing_function_enabled_;
  static bool is_css_logical_overflow_enabled_;
  static bool is_css_marker_nested_pseudo_element_enabled_;
  static bool is_css_masking_interop_enabled_;
  static bool is_css_mpc_improvements_enabled_;
  static bool is_css_nesting_ident_enabled_;
  static bool is_css_numeric_factory_completeness_enabled_;
  static bool is_css_offset_path_basic_shapes_circle_and_ellipse_enabled_;
  static bool is_css_offset_path_basic_shapes_rectangles_and_polygon_enabled_;
  static bool is_css_offset_path_coord_box_enabled_;
  static bool is_css_offset_path_ray_enabled_;
  static bool is_css_offset_path_ray_contain_enabled_;
  static bool is_css_offset_path_url_enabled_;
  static bool is_css_offset_position_anchor_enabled_;
  static bool is_css_overflow_media_features_enabled_;
  static bool is_css_paint_api_arguments_enabled_;
  static bool is_css_parser_ignore_charset_for_urls_enabled_;
  static bool is_css_phrase_line_break_enabled_;
  static bool is_css_position_sticky_static_scroll_position_enabled_;
  static bool is_css_progress_notation_enabled_;
  static bool is_css_pseudo_playing_paused_enabled_;
  static bool is_css_relative_color_enabled_;
  static bool is_css_resize_auto_enabled_;
  static bool is_css_scope_enabled_;
  static bool is_css_scroll_snap_events_enabled_;
  static bool is_css_scroll_start_enabled_;
  static bool is_css_scroll_state_container_queries_enabled_;
  static bool is_css_selector_fragment_anchor_enabled_;
  static bool is_css_sign_related_functions_enabled_;
  static bool is_css_snap_changed_event_enabled_;
  static bool is_css_snap_changing_event_enabled_;
  static bool is_css_snap_container_queries_enabled_;
  static bool is_css_spelling_grammar_errors_enabled_;
  static bool is_css_stepped_value_functions_enabled_;
  static bool is_css_sticky_container_queries_enabled_;
  static bool is_css_supports_for_import_rules_enabled_;
  static bool is_css_system_accent_color_enabled_;
  static bool is_css_text_auto_space_enabled_;
  static bool is_css_text_box_trim_enabled_;
  static bool is_css_text_spacing_enabled_;
  static bool is_css_text_spacing_trim_enabled_;
  static bool is_css_text_wrap_balance_by_score_enabled_;
  static bool is_css_text_wrap_pretty_enabled_;
  static bool is_css_transition_discrete_enabled_;
  static bool is_css_tree_scoped_timelines_enabled_;
  static bool is_css_unknown_container_queries_no_selection_enabled_;
  static bool is_css_update_media_feature_enabled_;
  static bool is_css_user_select_contain_enabled_;
  static bool is_css_variables_2_image_values_enabled_;
  static bool is_css_variables_2_transform_values_enabled_;
  static bool is_css_video_dynamic_range_media_queries_enabled_;
  static bool is_css_view_timeline_inset_shorthand_enabled_;
  static bool is_css_view_transition_class_enabled_;
  static bool is_custom_elements_get_name_enabled_;
  static bool is_database_enabled_;
  static bool is_data_transfer_clear_string_items_enabled_;
  static bool is_date_input_inline_block_enabled_;
  static bool is_declarative_shadow_dom_serializable_enabled_;
  static bool is_deprecated_template_shadow_root_enabled_;
  static bool is_deprecate_unload_opt_out_enabled_;
  static bool is_desktop_capture_disable_local_echo_control_enabled_;
  static bool is_desktop_pw_as_additional_windowing_controls_enabled_;
  static bool is_desktop_pw_as_sub_apps_enabled_;
  static bool is_details_element_toggle_event_enabled_;
  static bool is_details_styling_enabled_;
  static bool is_device_attributes_enabled_;
  static bool is_device_orientation_request_permission_enabled_;
  static bool is_device_posture_enabled_;
  static bool is_dialog_new_focus_behavior_enabled_;
  static bool is_digital_goods_enabled_;
  static bool is_digital_goods_v_2_1_enabled_;
  static bool is_direct_sockets_enabled_;
  static bool is_dirname_more_input_types_enabled_;
  static bool is_disable_different_origin_subframe_dialog_suppression_enabled_;
  static bool is_disable_hardware_noise_suppression_enabled_;
  static bool is_disable_select_all_for_empty_text_enabled_;
  static bool is_disable_third_party_session_storage_partitioning_after_general_partitioning_enabled_;
  static bool is_disable_third_party_storage_partitioning_enabled_;
  static bool is_dispatch_hidden_visibility_transitions_enabled_;
  static bool is_display_contents_focusable_enabled_;
  static bool is_display_cutout_api_enabled_;
  static bool is_document_base_uri_fix_enabled_;
  static bool is_document_cookie_enabled_;
  static bool is_document_domain_enabled_;
  static bool is_document_open_origin_alias_removal_enabled_;
  static bool is_document_open_sandbox_inheritance_removal_enabled_;
  static bool is_document_picture_in_picture_api_enabled_;
  static bool is_document_policy_document_domain_enabled_;
  static bool is_document_policy_negotiation_enabled_;
  static bool is_document_policy_sync_xhr_enabled_;
  static bool is_document_render_blocking_enabled_;
  static bool is_document_write_enabled_;
  static bool is_dom_parser_uses_html_fast_path_parser_enabled_;
  static bool is_dom_parts_api_enabled_;
  static bool is_dont_fire_dblclick_on_disabled_form_controls_enabled_;
  static bool is_dynamic_scroll_cull_rect_expansion_enabled_;
  static bool is_edit_context_enabled_;
  static bool is_element_capture_enabled_;
  static bool is_element_get_html_enabled_;
  static bool is_element_get_inner_html_enabled_;
  static bool is_empty_clipboard_read_enabled_;
  static bool is_enforce_anonymity_exposure_enabled_;
  static bool is_escape_lt_gt_in_attributes_enabled_;
  static bool is_event_timing_interaction_count_enabled_;
  static bool is_experimental_content_security_policy_features_enabled_;
  static bool is_experimental_js_profiler_markers_enabled_;
  static bool is_experimental_policies_enabled_;
  static bool is_expose_render_time_non_tao_delayed_image_enabled_;
  static bool is_extended_text_metrics_enabled_;
  static bool is_extra_webgl_video_texture_metadata_enabled_;
  static bool is_eye_dropper_api_enabled_;
  static bool is_face_detector_enabled_;
  static bool is_fake_no_alloc_direct_call_for_testing_enabled_;
  static bool is_fast_position_iterator_enabled_;
  static bool is_fed_cm_enabled_;
  static bool is_fed_cm_authz_enabled_;
  static bool is_fed_cm_auto_selected_flag_enabled_;
  static bool is_fed_cm_button_mode_enabled_;
  static bool is_fed_cm_disconnect_enabled_;
  static bool is_fed_cm_domain_hint_enabled_;
  static bool is_fed_cm_error_enabled_;
  static bool is_fed_cm_id_p_registration_enabled_;
  static bool is_fed_cm_idp_signin_status_enabled_;
  static bool is_fed_cm_multiple_identity_providers_enabled_;
  static bool is_fed_cm_selective_disclosure_enabled_;
  static bool is_fenced_frames_enabled_;
  static bool is_fenced_frames_api_changes_enabled_;
  static bool is_fenced_frames_default_mode_enabled_;
  static bool is_fenced_frames_local_unpartitioned_data_access_enabled_;
  static bool is_fetch_later_api_enabled_;
  static bool is_fetch_upload_streaming_enabled_;
  static bool is_file_handling_enabled_;
  static bool is_file_handling_icons_enabled_;
  static bool is_file_system_enabled_;
  static bool is_file_system_access_enabled_;
  static bool is_file_system_access_api_experimental_enabled_;
  static bool is_file_system_access_get_cloud_identifiers_enabled_;
  static bool is_file_system_access_local_enabled_;
  static bool is_file_system_access_locking_scheme_enabled_;
  static bool is_file_system_access_origin_private_enabled_;
  static bool is_file_system_observer_enabled_;
  static bool is_fledge_enabled_;
  static bool is_fledge_bidding_and_auction_server_api_enabled_;
  static bool is_fledge_clear_origin_joined_ad_interest_groups_enabled_;
  static bool is_fledge_direct_from_seller_signals_header_ad_slot_enabled_;
  static bool is_fledge_feature_detection_enabled_;
  static bool is_fledge_negative_targeting_enabled_;
  static bool is_fledge_trusted_bidding_signals_slot_size_enabled_;
  static bool is_fluent_overlay_scrollbars_enabled_;
  static bool is_fluent_scrollbars_enabled_;
  static bool is_flush_parser_before_creating_custom_elements_enabled_;
  static bool is_focusgroup_enabled_;
  static bool is_focus_style_invalidation_on_page_activation_enabled_;
  static bool is_font_access_enabled_;
  static bool is_fontations_font_backend_enabled_;
  static bool is_font_matching_ct_migration_enabled_;
  static bool is_font_palette_animation_enabled_;
  static bool is_font_src_local_matching_enabled_;
  static bool is_forced_colors_enabled_;
  static bool is_forced_colors_preserve_parent_color_enabled_;
  static bool is_force_eager_measure_memory_enabled_;
  static bool is_force_reduce_motion_enabled_;
  static bool is_force_taller_select_popup_enabled_;
  static bool is_formatted_text_enabled_;
  static bool is_form_control_restore_state_if_autocomplete_off_enabled_;
  static bool is_form_controls_vertical_writing_mode_direction_support_enabled_;
  static bool is_form_controls_vertical_writing_mode_support_enabled_;
  static bool is_form_controls_vertical_writing_mode_text_support_enabled_;
  static bool is_form_state_restore_callback_call_with_state_enabled_;
  static bool is_fractional_scroll_offsets_enabled_;
  static bool is_freeze_frames_on_visibility_enabled_;
  static bool is_fullscreen_popup_windows_enabled_;
  static bool is_gamepad_button_axis_events_enabled_;
  static bool is_gamepad_multitouch_enabled_;
  static bool is_get_all_screens_media_enabled_;
  static bool is_get_display_media_enabled_;
  static bool is_get_display_media_requires_user_activation_enabled_;
  static bool is_get_next_sibling_position_when_last_child_enabled_;
  static bool is_group_effect_enabled_;
  static bool is_handwriting_recognition_enabled_;
  static bool is_hanging_whitespace_does_not_depend_on_alignment_enabled_;
  static bool is_has_ua_visual_transition_enabled_;
  static bool is_highlight_inheritance_enabled_;
  static bool is_highlight_pointer_events_enabled_;
  static bool is_hit_test_opaqueness_enabled_;
  static bool is_hit_test_transparency_enabled_;
  static bool is_href_translate_enabled_;
  static bool is_html_invoke_actions_v_2_enabled_;
  static bool is_html_invoke_target_attribute_enabled_;
  static bool is_html_parser_fast_path_bulk_insert_notify_enabled_;
  static bool is_html_parser_yield_and_delay_often_for_testing_enabled_;
  static bool is_html_popover_hint_enabled_;
  static bool is_html_search_element_enabled_;
  static bool is_html_select_element_show_picker_enabled_;
  static bool is_html_select_list_element_enabled_;
  static bool is_html_unsafe_methods_enabled_;
  static bool is_implicit_root_scroller_enabled_;
  static bool is_import_attributes_disallow_unknown_keys_enabled_;
  static bool is_improved_xml_errors_enabled_;
  static bool is_incoming_call_notifications_enabled_;
  static bool is_inert_display_transition_enabled_;
  static bool is_infinite_cull_rect_enabled_;
  static bool is_inherit_user_modify_without_contenteditable_enabled_;
  static bool is_inner_html_parser_fastpath_log_failure_enabled_;
  static bool is_input_multiple_fields_ui_enabled_;
  static bool is_insert_line_break_if_phrasing_content_enabled_;
  static bool is_installed_app_enabled_;
  static bool is_interoperable_private_attribution_enabled_;
  static bool is_interrupt_composed_scrollbar_disappearance_enabled_;
  static bool is_intersection_observer_scroll_margin_enabled_;
  static bool is_intersection_optimization_enabled_;
  static bool is_inverted_colors_enabled_;
  static bool is_invisible_svg_animation_throttling_enabled_;
  static bool is_java_script_compile_hints_magic_runtime_enabled_;
  static bool is_keyboard_accessible_tooltip_enabled_;
  static bool is_keyboard_focusable_scrollers_enabled_;
  static bool is_lang_attribute_aware_form_control_ui_enabled_;
  static bool is_layout_align_for_positioned_enabled_;
  static bool is_layout_flex_new_row_algorithm_v_3_enabled_;
  static bool is_layout_ignore_margins_for_sticky_enabled_;
  static bool is_layout_ng_shape_cache_enabled_;
  static bool is_lazy_initialize_media_controls_enabled_;
  static bool is_lazy_load_scroll_margin_enabled_;
  static bool is_lcp_animated_images_web_exposed_enabled_;
  static bool is_lcp_mouseover_heuristics_enabled_;
  static bool is_lcp_multiple_updates_per_element_enabled_;
  static bool is_legacy_windows_d_write_font_fallback_enabled_;
  static bool is_locked_mode_enabled_;
  static bool is_long_animation_frame_timing_enabled_;
  static bool is_long_task_from_long_animation_frame_enabled_;
  static bool is_mac_fonts_deprecate_font_traits_workaround_enabled_;
  static bool is_machine_learning_common_enabled_;
  static bool is_machine_learning_model_loader_enabled_;
  static bool is_machine_learning_neural_network_enabled_;
  static bool is_managed_configuration_enabled_;
  static bool is_masking_grapheme_clusters_enabled_;
  static bool is_measure_memory_enabled_;
  static bool is_media_capabilities_dynamic_range_enabled_;
  static bool is_media_capabilities_encoding_info_enabled_;
  static bool is_media_capabilities_spatial_audio_enabled_;
  static bool is_media_capture_enabled_;
  static bool is_media_capture_background_blur_enabled_;
  static bool is_media_capture_camera_controls_enabled_;
  static bool is_media_capture_configuration_change_enabled_;
  static bool is_media_capture_voice_isolation_enabled_;
  static bool is_media_cast_overlay_button_enabled_;
  static bool is_media_controls_expand_gesture_enabled_;
  static bool is_media_controls_overlay_play_button_enabled_;
  static bool is_media_element_volume_greater_than_one_enabled_;
  static bool is_media_engagement_bypass_autoplay_policies_enabled_;
  static bool is_media_latency_hint_enabled_;
  static bool is_media_query_navigation_controls_enabled_;
  static bool is_media_recorder_use_media_video_encoder_enabled_;
  static bool is_media_session_enabled_;
  static bool is_media_session_chapter_information_enabled_;
  static bool is_media_session_enter_picture_in_picture_enabled_;
  static bool is_media_source_experimental_enabled_;
  static bool is_media_source_extensions_for_webcodecs_enabled_;
  static bool is_media_source_new_abort_and_duration_enabled_;
  static bool is_media_stream_track_transfer_enabled_;
  static bool is_message_port_close_event_enabled_;
  static bool is_middle_click_autoscroll_enabled_;
  static bool is_mobile_layout_theme_enabled_;
  static bool is_model_execution_api_enabled_;
  static bool is_mojo_js_enabled_;
  static bool is_mojo_js_test_enabled_;
  static bool is_mouse_drag_from_iframe_on_cancelled_mouse_down_enabled_;
  static bool is_mouse_drag_on_cancelled_mouse_move_enabled_;
  static bool is_mutation_events_enabled_;
  static bool is_navigate_event_commit_behavior_enabled_;
  static bool is_navigate_event_source_element_enabled_;
  static bool is_navigation_activation_enabled_;
  static bool is_navigation_id_enabled_;
  static bool is_navigator_content_utils_enabled_;
  static bool is_nested_top_layer_support_enabled_;
  static bool is_net_info_constant_type_enabled_;
  static bool is_net_info_downlink_max_enabled_;
  static bool is_next_sibling_position_use_next_candidate_enabled_;
  static bool is_no_idle_encoding_for_web_tests_enabled_;
  static bool is_non_composed_enter_leave_events_enabled_;
  static bool is_non_standard_appearance_values_high_usage_enabled_;
  static bool is_non_standard_appearance_value_slider_vertical_enabled_;
  static bool is_non_standard_appearance_values_low_usage_enabled_;
  static bool is_no_offset_mapping_for_inconsistent_text_enabled_;
  static bool is_notification_constructor_enabled_;
  static bool is_notification_content_image_enabled_;
  static bool is_notifications_enabled_;
  static bool is_notification_triggers_enabled_;
  static bool is_no_vary_search_prefetch_enabled_;
  static bool is_observable_api_enabled_;
  static bool is_off_main_thread_css_paint_enabled_;
  static bool is_offscreen_canvas_commit_enabled_;
  static bool is_offset_mapping_unit_variable_enabled_;
  static bool is_on_device_change_enabled_;
  static bool is_option_element_always_use_label_enabled_;
  static bool is_orientation_event_enabled_;
  static bool is_origin_isolation_header_enabled_;
  static bool is_origin_policy_enabled_;
  static bool is_origin_trials_sample_api_enabled_;
  static bool is_origin_trials_sample_api_browser_read_write_enabled_;
  static bool is_origin_trials_sample_api_dependent_enabled_;
  static bool is_origin_trials_sample_api_deprecation_enabled_;
  static bool is_origin_trials_sample_api_expiry_grace_period_enabled_;
  static bool is_origin_trials_sample_api_expiry_grace_period_third_party_enabled_;
  static bool is_origin_trials_sample_api_implied_enabled_;
  static bool is_origin_trials_sample_api_invalid_os_enabled_;
  static bool is_origin_trials_sample_api_navigation_enabled_;
  static bool is_origin_trials_sample_api_persistent_expiry_grace_period_enabled_;
  static bool is_origin_trials_sample_api_persistent_feature_enabled_;
  static bool is_origin_trials_sample_api_persistent_invalid_os_enabled_;
  static bool is_origin_trials_sample_api_persistent_third_party_deprecation_feature_enabled_;
  static bool is_origin_trials_sample_api_third_party_enabled_;
  static bool is_overscroll_customization_enabled_;
  static bool is_page_freeze_opt_in_enabled_;
  static bool is_page_freeze_opt_out_enabled_;
  static bool is_page_margin_boxes_enabled_;
  static bool is_page_popup_enabled_;
  static bool is_page_reveal_event_enabled_;
  static bool is_paint_under_invalidation_checking_enabled_;
  static bool is_parakeet_enabled_;
  static bool is_partitioned_cookies_enabled_;
  static bool is_password_reveal_enabled_;
  static bool is_password_strong_label_enabled_;
  static bool is_pasting_blocks_svg_use_non_local_hrefs_enabled_;
  static bool is_payment_app_enabled_;
  static bool is_payment_handler_minimal_header_ux_enabled_;
  static bool is_payment_instruments_enabled_;
  static bool is_payment_method_change_event_enabled_;
  static bool is_payment_request_enabled_;
  static bool is_payment_request_allow_one_activationless_show_enabled_;
  static bool is_payment_request_merchant_validation_event_enabled_;
  static bool is_pending_beacon_api_enabled_;
  static bool is_percent_based_scrolling_enabled_;
  static bool is_performance_manager_instrumentation_enabled_;
  static bool is_performance_mark_feature_usage_enabled_;
  static bool is_performance_navigate_system_entropy_enabled_;
  static bool is_periodic_background_sync_enabled_;
  static bool is_per_method_can_make_payment_quota_enabled_;
  static bool is_permission_element_enabled_;
  static bool is_permissions_enabled_;
  static bool is_permissions_request_revoke_enabled_;
  static bool is_p_na_cl_enabled_;
  static bool is_pointer_capture_lost_on_removal_during_capture_enabled_;
  static bool is_pointer_event_device_id_enabled_;
  static bool is_position_outside_tab_span_check_sibling_node_enabled_;
  static bool is_precise_memory_info_enabled_;
  static bool is_prefer_default_scrollbar_styles_enabled_;
  static bool is_prefer_non_composited_scrolling_enabled_;
  static bool is_prefers_reduced_data_enabled_;
  static bool is_prefixed_video_fullscreen_enabled_;
  static bool is_pre_paint_ancestors_of_missed_oof_enabled_;
  static bool is_prerender_2_enabled_;
  static bool is_presentation_enabled_;
  static bool is_pretty_print_js_on_document_enabled_;
  static bool is_prevent_reading_system_accent_color_enabled_;
  static bool is_privacy_sandbox_ads_api_s_enabled_;
  static bool is_private_aggregation_auction_report_buyer_debug_mode_config_enabled_;
  static bool is_private_network_access_non_secure_contexts_allowed_enabled_;
  static bool is_private_network_access_null_ip_address_enabled_;
  static bool is_private_network_access_permission_prompt_enabled_;
  static bool is_private_state_tokens_enabled_;
  static bool is_private_state_tokens_always_allow_issuance_enabled_;
  static bool is_push_messaging_enabled_;
  static bool is_push_messaging_subscription_change_enabled_;
  static bool is_quick_intensive_wake_up_throttling_after_loading_enabled_;
  static bool is_quota_change_enabled_;
  static bool is_readable_stream_tee_clone_for_branch_2_enabled_;
  static bool is_reduce_accept_language_enabled_;
  static bool is_reduce_cookie_ip_cs_enabled_;
  static bool is_reduce_user_agent_android_version_device_model_enabled_;
  static bool is_reduce_user_agent_minor_version_enabled_;
  static bool is_reduce_user_agent_platform_os_cpu_enabled_;
  static bool is_region_capture_enabled_;
  static bool is_remote_playback_enabled_;
  static bool is_remote_playback_backend_enabled_;
  static bool is_remove_dangling_markup_in_target_enabled_;
  static bool is_remove_data_url_in_svg_use_enabled_;
  static bool is_remove_mobile_viewport_double_tap_enabled_;
  static bool is_render_blocking_inline_module_script_enabled_;
  static bool is_render_blocking_status_enabled_;
  static bool is_render_priority_attribute_enabled_;
  static bool is_report_visible_line_bounds_enabled_;
  static bool is_resource_timing_content_type_enabled_;
  static bool is_resource_timing_use_cors_for_body_sizes_enabled_;
  static bool is_restrict_gamepad_access_enabled_;
  static bool is_rewind_floats_enabled_;
  static bool is_rtc_audio_jitter_buffer_max_packets_enabled_;
  static bool is_rtc_encoded_audio_frame_abs_capture_time_enabled_;
  static bool is_rtc_encoded_frame_set_metadata_enabled_;
  static bool is_rtc_encoded_video_frame_additional_metadata_enabled_;
  static bool is_rtc_legacy_callback_based_get_stats_enabled_;
  static bool is_rtc_rtp_encoding_parameters_codec_enabled_;
  static bool is_rtc_rtp_header_extension_control_enabled_;
  static bool is_rtc_stats_relative_packet_arrival_delay_enabled_;
  static bool is_rtc_svc_scalability_mode_enabled_;
  static bool is_ruby_inlinify_enabled_;
  static bool is_ruby_simple_pairing_enabled_;
  static bool is_run_microtask_before_xml_custom_element_enabled_;
  static bool is_sanitizer_api_enabled_;
  static bool is_scheduler_yield_enabled_;
  static bool is_scoped_custom_element_registry_enabled_;
  static bool is_scripted_speech_recognition_enabled_;
  static bool is_scripted_speech_synthesis_enabled_;
  static bool is_scrollbar_color_enabled_;
  static bool is_scrollbar_width_enabled_;
  static bool is_scroll_end_events_enabled_;
  static bool is_scroll_timeline_enabled_;
  static bool is_scroll_timeline_current_time_enabled_;
  static bool is_scroll_timeline_on_compositor_enabled_;
  static bool is_scroll_top_left_interop_enabled_;
  static bool is_secure_payment_confirmation_enabled_;
  static bool is_secure_payment_confirmation_allow_one_activationless_show_enabled_;
  static bool is_secure_payment_confirmation_debug_enabled_;
  static bool is_secure_payment_confirmation_extensions_enabled_;
  static bool is_secure_payment_confirmation_opt_out_enabled_;
  static bool is_select_hr_enabled_;
  static bool is_send_beacon_throw_for_blob_with_non_simple_type_enabled_;
  static bool is_sensor_extra_classes_enabled_;
  static bool is_serial_enabled_;
  static bool is_serialize_view_transition_state_in_spa_enabled_;
  static bool is_service_worker_bypass_fetch_handler_enabled_;
  static bool is_service_worker_client_lifecycle_state_enabled_;
  static bool is_service_worker_race_network_request_enabled_;
  static bool is_service_worker_static_router_enabled_;
  static bool is_set_sequential_focus_starting_point_enabled_;
  static bool is_shadow_root_attachment_new_behavior_enabled_;
  static bool is_shadow_root_clonable_enabled_;
  static bool is_shared_array_buffer_enabled_;
  static bool is_shared_array_buffer_on_desktop_enabled_;
  static bool is_shared_array_buffer_unrestricted_access_allowed_enabled_;
  static bool is_shared_autofill_enabled_;
  static bool is_shared_storage_api_enabled_;
  static bool is_shared_storage_api_m_118_enabled_;
  static bool is_shared_worker_enabled_;
  static bool is_signature_based_integrity_enabled_;
  static bool is_site_initiated_mirroring_enabled_;
  static bool is_skip_ad_enabled_;
  static bool is_skip_touch_event_filter_enabled_;
  static bool is_smart_card_enabled_;
  static bool is_smart_zoom_enabled_;
  static bool is_smil_auto_suspend_on_lag_enabled_;
  static bool is_snap_border_widths_before_layout_enabled_;
  static bool is_soft_navigation_detection_enabled_;
  static bool is_soft_navigation_heuristics_enabled_;
  static bool is_soft_navigation_heuristics_expose_fp_and_fcp_enabled_;
  static bool is_sparse_object_paint_properties_enabled_;
  static bool is_speculation_rules_document_rules_enabled_;
  static bool is_speculation_rules_document_rules_selector_matches_enabled_;
  static bool is_speculation_rules_eagerness_enabled_;
  static bool is_speculation_rules_fetch_from_header_enabled_;
  static bool is_speculation_rules_implicit_source_enabled_;
  static bool is_speculation_rules_no_vary_search_hint_enabled_;
  static bool is_speculation_rules_no_vary_search_hint_shipped_by_default_enabled_;
  static bool is_speculation_rules_pointer_down_heuristics_enabled_;
  static bool is_speculation_rules_pointer_hover_heuristics_enabled_;
  static bool is_speculation_rules_prefetch_future_enabled_;
  static bool is_speculation_rules_prefetch_with_subresources_enabled_;
  static bool is_speculation_rules_relative_to_document_enabled_;
  static bool is_spell_checker_replace_range_use_insert_text_enabled_;
  static bool is_srcset_max_density_enabled_;
  static bool is_stable_blink_features_enabled_;
  static bool is_standardized_browser_zoom_enabled_;
  static bool is_storage_access_api_beyond_cookies_enabled_;
  static bool is_storage_buckets_enabled_;
  static bool is_storage_buckets_durability_enabled_;
  static bool is_storage_buckets_locks_enabled_;
  static bool is_strict_mime_types_for_workers_enabled_;
  static bool is_stylable_select_enabled_;
  static bool is_stylus_handwriting_enabled_;
  static bool is_suggestion_picker_dark_mode_support_enabled_;
  static bool is_svg_cross_origin_attribute_enabled_;
  static bool is_svg_no_pixel_snapping_scale_adjustment_enabled_;
  static bool is_synthesized_keyboard_events_for_accessibility_actions_enabled_;
  static bool is_system_wake_lock_enabled_;
  static bool is_test_feature_enabled_;
  static bool is_test_feature_dependent_enabled_;
  static bool is_test_feature_implied_enabled_;
  static bool is_text_decorating_box_enabled_;
  static bool is_text_detector_enabled_;
  static bool is_text_fragment_api_enabled_;
  static bool is_text_fragment_identifiers_enabled_;
  static bool is_text_fragment_tap_opens_context_menu_enabled_;
  static bool is_text_metrics_baselines_enabled_;
  static bool is_timeline_scope_enabled_;
  static bool is_timer_throttling_for_background_tabs_enabled_;
  static bool is_time_zone_change_event_enabled_;
  static bool is_topics_api_enabled_;
  static bool is_topics_document_api_enabled_;
  static bool is_top_level_tpcd_enabled_;
  static bool is_touch_drag_and_context_menu_enabled_;
  static bool is_touch_drag_on_short_press_enabled_;
  static bool is_touch_event_feature_detection_enabled_;
  static bool is_touch_text_editing_redesign_enabled_;
  static bool is_tpcd_enabled_;
  static bool is_translate_service_enabled_;
  static bool is_trusted_type_before_policy_creation_event_enabled_;
  static bool is_trusted_types_from_literal_enabled_;
  static bool is_trusted_types_use_code_like_enabled_;
  static bool is_unclosed_form_control_is_invalid_enabled_;
  static bool is_unexposed_task_ids_enabled_;
  static bool is_unowned_animations_skip_css_events_enabled_;
  static bool is_unrestricted_measure_user_agent_specific_memory_enabled_;
  static bool is_unrestricted_shared_array_buffer_enabled_;
  static bool is_unrestricted_usb_enabled_;
  static bool is_url_attribute_fix_enabled_;
  static bool is_url_pattern_compare_component_enabled_;
  static bool is_url_pattern_has_reg_exp_groups_enabled_;
  static bool is_url_pattern_regexp_unicode_sets_mode_enabled_;
  static bool is_url_pattern_wildcard_more_often_enabled_;
  static bool is_url_search_params_has_and_delete_multiple_args_enabled_;
  static bool is_use_begin_frame_presentation_feedback_enabled_;
  static bool is_used_color_scheme_root_scrollbars_enabled_;
  static bool is_user_activation_same_origin_visibility_enabled_;
  static bool is_user_valid_user_invalid_enabled_;
  static bool is_v8_idle_tasks_enabled_;
  static bool is_video_auto_fullscreen_enabled_;
  static bool is_video_fullscreen_orientation_lock_enabled_;
  static bool is_video_playback_quality_enabled_;
  static bool is_video_rotate_to_fullscreen_enabled_;
  static bool is_video_track_generator_enabled_;
  static bool is_video_track_generator_in_window_enabled_;
  static bool is_video_track_generator_in_worker_enabled_;
  static bool is_viewport_height_client_hint_header_enabled_;
  static bool is_viewport_segments_enabled_;
  static bool is_view_transition_on_navigation_enabled_;
  static bool is_view_transition_types_enabled_;
  static bool is_visibility_collapse_column_enabled_;
  static bool is_wake_lock_enabled_;
  static bool is_warn_on_content_visibility_render_access_enabled_;
  static bool is_web_animations_svg_enabled_;
  static bool is_web_app_dark_mode_enabled_;
  static bool is_web_app_launch_handler_enabled_;
  static bool is_web_app_launch_queue_enabled_;
  static bool is_web_app_scope_extensions_enabled_;
  static bool is_web_apps_lock_screen_enabled_;
  static bool is_web_app_tab_strip_enabled_;
  static bool is_web_app_tab_strip_customizations_enabled_;
  static bool is_web_app_translations_enabled_;
  static bool is_web_app_url_handling_enabled_;
  static bool is_web_assembly_js_promise_integration_enabled_;
  static bool is_web_assembly_js_string_builtins_enabled_;
  static bool is_web_auth_enabled_;
  static bool is_web_auth_allow_create_in_cross_origin_frame_enabled_;
  static bool is_web_auth_authenticator_attachment_enabled_;
  static bool is_web_authentication_hints_enabled_;
  static bool is_web_authentication_js_on_serialization_enabled_;
  static bool is_web_authentication_large_blob_extension_enabled_;
  static bool is_web_authentication_prf_enabled_;
  static bool is_web_authentication_remote_desktop_support_enabled_;
  static bool is_web_authentication_supplemental_pub_keys_enabled_;
  static bool is_web_bluetooth_enabled_;
  static bool is_web_bluetooth_get_devices_enabled_;
  static bool is_web_bluetooth_scanning_enabled_;
  static bool is_web_bluetooth_watch_advertisements_enabled_;
  static bool is_webcodecs_content_hint_enabled_;
  static bool is_webcodecs_copy_to_rgb_enabled_;
  static bool is_web_crypto_curve_25519_enabled_;
  static bool is_web_font_resize_lcp_enabled_;
  static bool is_webgl_developer_extensions_enabled_;
  static bool is_webgl_draft_extensions_enabled_;
  static bool is_webgl_drawing_buffer_storage_enabled_;
  static bool is_webgl_image_chromium_enabled_;
  static bool is_webgpu_enabled_;
  static bool is_webgpu_developer_features_enabled_;
  static bool is_webgpu_experimental_features_enabled_;
  static bool is_web_hid_enabled_;
  static bool is_web_hid_on_service_workers_enabled_;
  static bool is_web_identity_digital_credentials_enabled_;
  static bool is_web_idl_big_int_uses_to_big_int_enabled_;
  static bool is_web_nfc_enabled_;
  static bool is_web_otp_enabled_;
  static bool is_web_otp_assertion_feature_policy_enabled_;
  static bool is_web_preferences_enabled_;
  static bool is_web_printing_enabled_;
  static bool is_web_serial_bluetooth_enabled_;
  static bool is_web_share_enabled_;
  static bool is_websocket_stream_enabled_;
  static bool is_web_transport_custom_certificates_enabled_;
  static bool is_web_usb_enabled_;
  static bool is_web_usb_on_dedicated_workers_enabled_;
  static bool is_web_usb_on_service_workers_enabled_;
  static bool is_web_view_xr_equested_with_deprecation_enabled_;
  static bool is_web_vtt_regions_enabled_;
  static bool is_web_xr_enabled_;
  static bool is_web_xr_enabled_features_enabled_;
  static bool is_web_xr_frame_rate_enabled_;
  static bool is_web_xr_front_facing_enabled_;
  static bool is_web_xr_hand_input_enabled_;
  static bool is_web_xr_hit_test_entity_types_enabled_;
  static bool is_web_xr_image_tracking_enabled_;
  static bool is_web_xr_layers_enabled_;
  static bool is_web_xr_plane_detection_enabled_;
  static bool is_web_xr_pose_motion_data_enabled_;
  static bool is_wgi_gamepad_trigger_rumble_enabled_;
  static bool is_window_default_status_enabled_;
  static bool is_window_placement_fullscreen_on_screens_change_enabled_;
  static bool is_window_placement_permission_alias_enabled_;
  static bool is_xml_parser_merge_adjacent_c_data_sections_enabled_;
  static bool is_xywh_and_rect_computed_value_enabled_;
  static bool is_zero_copy_tab_capture_enabled_;
};

class PLATFORM_EXPORT RuntimeEnabledFeatures : public RuntimeEnabledFeaturesBase {
  STATIC_ONLY(RuntimeEnabledFeatures);

  // Only the following friends are allowed to use the setters defined in the
  // protected section of RuntimeEnabledFeaturesBase. Normally, unit tests
  // should use the ScopedFeatureNameForTest classes defined in
  // platform/testing/runtime_enabled_features_test_helpers.h.
  friend class DevToolsEmulator;
  friend class InternalRuntimeFlags;
  friend class V8ContextSnapshotImpl;
  friend class WebRuntimeFeaturesBase;
  friend class WebRuntimeFeatures;
  friend class WebView;
  FRIEND_TEST_ALL_PREFIXES(RuntimeEnabledFeaturesTest, Relationship);
  FRIEND_TEST_ALL_PREFIXES(RuntimeEnabledFeaturesTest, BackupRestore);
  FRIEND_TEST_ALL_PREFIXES(RuntimeEnabledFeaturesTest, OriginTrialsByRuntimeEnabled);
};

}  // namespace blink

#endif  // THIRD_PARTY_BLINK_RENDERER_PLATFORM_RUNTIME_ENABLED_FEATURES_H_
