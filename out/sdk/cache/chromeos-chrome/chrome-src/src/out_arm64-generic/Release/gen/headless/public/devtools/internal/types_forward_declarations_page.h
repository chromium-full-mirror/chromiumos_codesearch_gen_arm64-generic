// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPES_FORWARD_DECLARATIONS_PAGE_H_
#define HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPES_FORWARD_DECLARATIONS_PAGE_H_

#include "base/values.h"

namespace headless {

namespace page {
class AdFrameStatus;
class AdScriptId;
class PermissionsPolicyBlockLocator;
class PermissionsPolicyFeatureState;
class OriginTrialToken;
class OriginTrialTokenWithStatus;
class OriginTrial;
class Frame;
class FrameResource;
class FrameResourceTree;
class FrameTree;
class NavigationEntry;
class ScreencastFrameMetadata;
class AppManifestError;
class AppManifestParsedProperties;
class LayoutViewport;
class VisualViewport;
class Viewport;
class FontFamilies;
class ScriptFontFamilies;
class FontSizes;
class InstallabilityErrorArgument;
class InstallabilityError;
class CompilationCacheParams;
class BackForwardCacheBlockingDetails;
class BackForwardCacheNotRestoredExplanation;
class BackForwardCacheNotRestoredExplanationTree;
class AddScriptToEvaluateOnLoadParams;
class AddScriptToEvaluateOnLoadResult;
class AddScriptToEvaluateOnNewDocumentParams;
class AddScriptToEvaluateOnNewDocumentResult;
class BringToFrontParams;
class BringToFrontResult;
class CaptureScreenshotParams;
class CaptureScreenshotResult;
class CaptureSnapshotParams;
class CaptureSnapshotResult;
class ClearDeviceMetricsOverrideParams;
class ClearDeviceMetricsOverrideResult;
class ClearDeviceOrientationOverrideParams;
class ClearDeviceOrientationOverrideResult;
class ClearGeolocationOverrideParams;
class ClearGeolocationOverrideResult;
class CreateIsolatedWorldParams;
class CreateIsolatedWorldResult;
class DeleteCookieParams;
class DeleteCookieResult;
class DisableParams;
class DisableResult;
class EnableParams;
class EnableResult;
class GetAppManifestParams;
class GetAppManifestResult;
class GetInstallabilityErrorsParams;
class GetInstallabilityErrorsResult;
class GetManifestIconsParams;
class GetManifestIconsResult;
class GetAppIdParams;
class GetAppIdResult;
class GetAdScriptIdParams;
class GetAdScriptIdResult;
class GetFrameTreeParams;
class GetFrameTreeResult;
class GetLayoutMetricsParams;
class GetLayoutMetricsResult;
class GetNavigationHistoryParams;
class GetNavigationHistoryResult;
class ResetNavigationHistoryParams;
class ResetNavigationHistoryResult;
class GetResourceContentParams;
class GetResourceContentResult;
class GetResourceTreeParams;
class GetResourceTreeResult;
class HandleJavaScriptDialogParams;
class HandleJavaScriptDialogResult;
class NavigateParams;
class NavigateResult;
class NavigateToHistoryEntryParams;
class NavigateToHistoryEntryResult;
class PrintToPDFParams;
class PrintToPDFResult;
class ReloadParams;
class ReloadResult;
class RemoveScriptToEvaluateOnLoadParams;
class RemoveScriptToEvaluateOnLoadResult;
class RemoveScriptToEvaluateOnNewDocumentParams;
class RemoveScriptToEvaluateOnNewDocumentResult;
class ScreencastFrameAckParams;
class ScreencastFrameAckResult;
class SearchInResourceParams;
class SearchInResourceResult;
class SetAdBlockingEnabledParams;
class SetAdBlockingEnabledResult;
class SetBypassCSPParams;
class SetBypassCSPResult;
class GetPermissionsPolicyStateParams;
class GetPermissionsPolicyStateResult;
class GetOriginTrialsParams;
class GetOriginTrialsResult;
class SetDeviceMetricsOverrideParams;
class SetDeviceMetricsOverrideResult;
class SetDeviceOrientationOverrideParams;
class SetDeviceOrientationOverrideResult;
class SetFontFamiliesParams;
class SetFontFamiliesResult;
class SetFontSizesParams;
class SetFontSizesResult;
class SetDocumentContentParams;
class SetDocumentContentResult;
class SetDownloadBehaviorParams;
class SetDownloadBehaviorResult;
class SetGeolocationOverrideParams;
class SetGeolocationOverrideResult;
class SetLifecycleEventsEnabledParams;
class SetLifecycleEventsEnabledResult;
class SetTouchEmulationEnabledParams;
class SetTouchEmulationEnabledResult;
class StartScreencastParams;
class StartScreencastResult;
class StopLoadingParams;
class StopLoadingResult;
class CrashParams;
class CrashResult;
class CloseParams;
class CloseResult;
class SetWebLifecycleStateParams;
class SetWebLifecycleStateResult;
class StopScreencastParams;
class StopScreencastResult;
class ProduceCompilationCacheParams;
class ProduceCompilationCacheResult;
class AddCompilationCacheParams;
class AddCompilationCacheResult;
class ClearCompilationCacheParams;
class ClearCompilationCacheResult;
class SetSPCTransactionModeParams;
class SetSPCTransactionModeResult;
class SetRPHRegistrationModeParams;
class SetRPHRegistrationModeResult;
class GenerateTestReportParams;
class GenerateTestReportResult;
class WaitForDebuggerParams;
class WaitForDebuggerResult;
class SetInterceptFileChooserDialogParams;
class SetInterceptFileChooserDialogResult;
class SetPrerenderingAllowedParams;
class SetPrerenderingAllowedResult;
class DomContentEventFiredParams;
class FileChooserOpenedParams;
class FrameAttachedParams;
class FrameClearedScheduledNavigationParams;
class FrameDetachedParams;
class FrameNavigatedParams;
class DocumentOpenedParams;
class FrameResizedParams;
class FrameRequestedNavigationParams;
class FrameScheduledNavigationParams;
class FrameStartedLoadingParams;
class FrameStoppedLoadingParams;
class DownloadWillBeginParams;
class DownloadProgressParams;
class InterstitialHiddenParams;
class InterstitialShownParams;
class JavascriptDialogClosedParams;
class JavascriptDialogOpeningParams;
class LifecycleEventParams;
class BackForwardCacheNotUsedParams;
class LoadEventFiredParams;
class NavigatedWithinDocumentParams;
class ScreencastFrameParams;
class ScreencastVisibilityChangedParams;
class WindowOpenParams;
class CompilationCacheProducedParams;

enum class AdFrameType {
  NONE,
  CHILD,
  ROOT
};

enum class AdFrameExplanation {
  PARENT_IS_AD,
  CREATED_BY_AD_SCRIPT,
  MATCHED_BLOCKING_RULE
};

enum class SecureContextType {
  SECURE,
  SECURE_LOCALHOST,
  INSECURE_SCHEME,
  INSECURE_ANCESTOR
};

enum class CrossOriginIsolatedContextType {
  ISOLATED,
  NOT_ISOLATED,
  NOT_ISOLATED_FEATURE_DISABLED
};

enum class GatedAPIFeatures {
  SHARED_ARRAY_BUFFERS,
  SHARED_ARRAY_BUFFERS_TRANSFER_ALLOWED,
  PERFORMANCE_MEASURE_MEMORY,
  PERFORMANCE_PROFILE
};

enum class PermissionsPolicyFeature {
  ACCELEROMETER,
  AMBIENT_LIGHT_SENSOR,
  ATTRIBUTION_REPORTING,
  AUTOPLAY,
  BLUETOOTH,
  BROWSING_TOPICS,
  CAMERA,
  CAPTURED_SURFACE_CONTROL,
  CH_DPR,
  CH_DEVICE_MEMORY,
  CH_DOWNLINK,
  CH_ECT,
  CH_PREFERS_COLOR_SCHEME,
  CH_PREFERS_REDUCED_MOTION,
  CH_PREFERS_REDUCED_TRANSPARENCY,
  CH_RTT,
  CH_SAVE_DATA,
  CH_UA,
  CH_UA_ARCH,
  CH_UA_BITNESS,
  CH_UA_PLATFORM,
  CH_UA_MODEL,
  CH_UA_MOBILE,
  CH_UA_FORM_FACTOR,
  CH_UA_FULL_VERSION,
  CH_UA_FULL_VERSION_LIST,
  CH_UA_PLATFORM_VERSION,
  CH_UA_WOW64,
  CH_VIEWPORT_HEIGHT,
  CH_VIEWPORT_WIDTH,
  CH_WIDTH,
  CLIPBOARD_READ,
  CLIPBOARD_WRITE,
  COMPUTE_PRESSURE,
  CROSS_ORIGIN_ISOLATED,
  DIRECT_SOCKETS,
  DISPLAY_CAPTURE,
  DOCUMENT_DOMAIN,
  ENCRYPTED_MEDIA,
  EXECUTION_WHILE_OUT_OF_VIEWPORT,
  EXECUTION_WHILE_NOT_RENDERED,
  FOCUS_WITHOUT_USER_ACTIVATION,
  FULLSCREEN,
  FROBULATE,
  GAMEPAD,
  GEOLOCATION,
  GYROSCOPE,
  HID,
  IDENTITY_CREDENTIALS_GET,
  IDLE_DETECTION,
  INTEREST_COHORT,
  JOIN_AD_INTEREST_GROUP,
  KEYBOARD_MAP,
  LOCAL_FONTS,
  MAGNETOMETER,
  MICROPHONE,
  MIDI,
  OTP_CREDENTIALS,
  PAYMENT,
  PICTURE_IN_PICTURE,
  PRIVATE_AGGREGATION,
  PRIVATE_STATE_TOKEN_ISSUANCE,
  PRIVATE_STATE_TOKEN_REDEMPTION,
  PUBLICKEY_CREDENTIALS_CREATE,
  PUBLICKEY_CREDENTIALS_GET,
  RUN_AD_AUCTION,
  SCREEN_WAKE_LOCK,
  SERIAL,
  SHARED_AUTOFILL,
  SHARED_STORAGE,
  SHARED_STORAGE_SELECT_URL,
  SMART_CARD,
  STORAGE_ACCESS,
  SUB_APPS,
  SYNC_XHR,
  UNLOAD,
  USB,
  USB_UNRESTRICTED,
  VERTICAL_SCROLL,
  WEB_PRINTING,
  WEB_SHARE,
  WINDOW_MANAGEMENT,
  WINDOW_PLACEMENT,
  XR_SPATIAL_TRACKING
};

enum class PermissionsPolicyBlockReason {
  HEADER,
  IFRAME_ATTRIBUTE,
  IN_FENCED_FRAME_TREE,
  IN_ISOLATED_APP
};

enum class OriginTrialTokenStatus {
  SUCCESS,
  NOT_SUPPORTED,
  INSECURE,
  EXPIRED,
  WRONG_ORIGIN,
  INVALID_SIGNATURE,
  MALFORMED,
  WRONG_VERSION,
  FEATURE_DISABLED,
  TOKEN_DISABLED,
  FEATURE_DISABLED_FOR_USER,
  UNKNOWN_TRIAL
};

enum class OriginTrialStatus {
  ENABLED,
  VALID_TOKEN_NOT_PROVIDED,
  OS_NOT_SUPPORTED,
  TRIAL_NOT_ALLOWED
};

enum class OriginTrialUsageRestriction {
  NONE,
  SUBSET
};

enum class TransitionType {
  LINK,
  TYPED,
  ADDRESS_BAR,
  AUTO_BOOKMARK,
  AUTO_SUBFRAME,
  MANUAL_SUBFRAME,
  GENERATED,
  AUTO_TOPLEVEL,
  FORM_SUBMIT,
  RELOAD,
  KEYWORD,
  KEYWORD_GENERATED,
  OTHER
};

enum class DialogType {
  ALERT,
  CONFIRM,
  PROMPT,
  BEFOREUNLOAD
};

enum class ClientNavigationReason {
  FORM_SUBMISSION_GET,
  FORM_SUBMISSION_POST,
  HTTP_HEADER_REFRESH,
  SCRIPT_INITIATED,
  META_TAG_REFRESH,
  PAGE_BLOCK_INTERSTITIAL,
  RELOAD,
  ANCHOR_CLICK
};

enum class ClientNavigationDisposition {
  CURRENT_TAB,
  NEW_TAB,
  NEW_WINDOW,
  DOWNLOAD
};

enum class ReferrerPolicy {
  NO_REFERRER,
  NO_REFERRER_WHEN_DOWNGRADE,
  ORIGIN,
  ORIGIN_WHEN_CROSS_ORIGIN,
  SAME_ORIGIN,
  STRICT_ORIGIN,
  STRICT_ORIGIN_WHEN_CROSS_ORIGIN,
  UNSAFE_URL
};

enum class AutoResponseMode {
  NONE,
  AUTO_ACCEPT,
  AUTO_REJECT,
  AUTO_OPT_OUT
};

enum class NavigationType {
  NAVIGATION,
  BACK_FORWARD_CACHE_RESTORE
};

enum class BackForwardCacheNotRestoredReason {
  NOT_PRIMARY_MAIN_FRAME,
  BACK_FORWARD_CACHE_DISABLED,
  RELATED_ACTIVE_CONTENTS_EXIST,
  HTTP_STATUS_NOTOK,
  SCHEME_NOTHTTP_ORHTTPS,
  LOADING,
  WAS_GRANTED_MEDIA_ACCESS,
  DISABLE_FOR_RENDER_FRAME_HOST_CALLED,
  DOMAIN_NOT_ALLOWED,
  HTTP_METHOD_NOTGET,
  SUBFRAME_IS_NAVIGATING,
  TIMEOUT,
  CACHE_LIMIT,
  JAVA_SCRIPT_EXECUTION,
  RENDERER_PROCESS_KILLED,
  RENDERER_PROCESS_CRASHED,
  SCHEDULER_TRACKED_FEATURE_USED,
  CONFLICTING_BROWSING_INSTANCE,
  CACHE_FLUSHED,
  SERVICE_WORKER_VERSION_ACTIVATION,
  SESSION_RESTORED,
  SERVICE_WORKER_POST_MESSAGE,
  ENTERED_BACK_FORWARD_CACHE_BEFORE_SERVICE_WORKER_HOST_ADDED,
  RENDER_FRAME_HOST_REUSED_SAME_SITE,
  RENDER_FRAME_HOST_REUSED_CROSS_SITE,
  SERVICE_WORKER_CLAIM,
  IGNORE_EVENT_AND_EVICT,
  HAVE_INNER_CONTENTS,
  TIMEOUT_PUTTING_IN_CACHE,
  BACK_FORWARD_CACHE_DISABLED_BY_LOW_MEMORY,
  BACK_FORWARD_CACHE_DISABLED_BY_COMMAND_LINE,
  NETWORK_REQUEST_DATAPIPE_DRAINED_AS_BYTES_CONSUMER,
  NETWORK_REQUEST_REDIRECTED,
  NETWORK_REQUEST_TIMEOUT,
  NETWORK_EXCEEDS_BUFFER_LIMIT,
  NAVIGATION_CANCELLED_WHILE_RESTORING,
  NOT_MOST_RECENT_NAVIGATION_ENTRY,
  BACK_FORWARD_CACHE_DISABLED_FOR_PRERENDER,
  USER_AGENT_OVERRIDE_DIFFERS,
  FOREGROUND_CACHE_LIMIT,
  BROWSING_INSTANCE_NOT_SWAPPED,
  BACK_FORWARD_CACHE_DISABLED_FOR_DELEGATE,
  UNLOAD_HANDLER_EXISTS_IN_MAIN_FRAME,
  UNLOAD_HANDLER_EXISTS_IN_SUB_FRAME,
  SERVICE_WORKER_UNREGISTRATION,
  CACHE_CONTROL_NO_STORE,
  CACHE_CONTROL_NO_STORE_COOKIE_MODIFIED,
  CACHE_CONTROL_NO_STOREHTTP_ONLY_COOKIE_MODIFIED,
  NO_RESPONSE_HEAD,
  UNKNOWN,
  ACTIVATION_NAVIGATIONS_DISALLOWED_FOR_BUG1234857,
  ERROR_DOCUMENT,
  FENCED_FRAMES_EMBEDDER,
  COOKIE_DISABLED,
  HTTP_AUTH_REQUIRED,
  COOKIE_FLUSHED,
  WEB_SOCKET,
  WEB_TRANSPORT,
  WEBRTC,
  MAIN_RESOURCE_HAS_CACHE_CONTROL_NO_STORE,
  MAIN_RESOURCE_HAS_CACHE_CONTROL_NO_CACHE,
  SUBRESOURCE_HAS_CACHE_CONTROL_NO_STORE,
  SUBRESOURCE_HAS_CACHE_CONTROL_NO_CACHE,
  CONTAINS_PLUGINS,
  DOCUMENT_LOADED,
  DEDICATED_WORKER_OR_WORKLET,
  OUTSTANDING_NETWORK_REQUEST_OTHERS,
  REQUESTEDMIDI_PERMISSION,
  REQUESTED_AUDIO_CAPTURE_PERMISSION,
  REQUESTED_VIDEO_CAPTURE_PERMISSION,
  REQUESTED_BACK_FORWARD_CACHE_BLOCKED_SENSORS,
  REQUESTED_BACKGROUND_WORK_PERMISSION,
  BROADCAST_CHANNEL,
  WEBXR,
  SHARED_WORKER,
  WEB_LOCKS,
  WEBHID,
  WEB_SHARE,
  REQUESTED_STORAGE_ACCESS_GRANT,
  WEB_NFC,
  OUTSTANDING_NETWORK_REQUEST_FETCH,
  OUTSTANDING_NETWORK_REQUESTXHR,
  APP_BANNER,
  PRINTING,
  WEB_DATABASE,
  PICTURE_IN_PICTURE,
  PORTAL,
  SPEECH_RECOGNIZER,
  IDLE_MANAGER,
  PAYMENT_MANAGER,
  SPEECH_SYNTHESIS,
  KEYBOARD_LOCK,
  WEBOTP_SERVICE,
  OUTSTANDING_NETWORK_REQUEST_DIRECT_SOCKET,
  INJECTED_JAVASCRIPT,
  INJECTED_STYLE_SHEET,
  KEEPALIVE_REQUEST,
  INDEXEDDB_EVENT,
  DUMMY,
  JS_NETWORK_REQUEST_RECEIVED_CACHE_CONTROL_NO_STORE_RESOURCE,
  WEBRTC_STICKY,
  WEB_TRANSPORT_STICKY,
  WEB_SOCKET_STICKY,
  SMART_CARD,
  LIVE_MEDIA_STREAM_TRACK,
  UNLOAD_HANDLER,
  CONTENT_SECURITY_HANDLER,
  CONTENT_WEB_AUTHENTICATIONAPI,
  CONTENT_FILE_CHOOSER,
  CONTENT_SERIAL,
  CONTENT_FILE_SYSTEM_ACCESS,
  CONTENT_MEDIA_DEVICES_DISPATCHER_HOST,
  CONTENT_WEB_BLUETOOTH,
  CONTENT_WEBUSB,
  CONTENT_MEDIA_SESSION_SERVICE,
  CONTENT_SCREEN_READER,
  EMBEDDER_POPUP_BLOCKER_TAB_HELPER,
  EMBEDDER_SAFE_BROWSING_TRIGGERED_POPUP_BLOCKER,
  EMBEDDER_SAFE_BROWSING_THREAT_DETAILS,
  EMBEDDER_APP_BANNER_MANAGER,
  EMBEDDER_DOM_DISTILLER_VIEWER_SOURCE,
  EMBEDDER_DOM_DISTILLER_SELF_DELETING_REQUEST_DELEGATE,
  EMBEDDER_OOM_INTERVENTION_TAB_HELPER,
  EMBEDDER_OFFLINE_PAGE,
  EMBEDDER_CHROME_PASSWORD_MANAGER_CLIENT_BIND_CREDENTIAL_MANAGER,
  EMBEDDER_PERMISSION_REQUEST_MANAGER,
  EMBEDDER_MODAL_DIALOG,
  EMBEDDER_EXTENSIONS,
  EMBEDDER_EXTENSION_MESSAGING,
  EMBEDDER_EXTENSION_MESSAGING_FOR_OPEN_PORT,
  EMBEDDER_EXTENSION_SENT_MESSAGE_TO_CACHED_FRAME
};

enum class BackForwardCacheNotRestoredReasonType {
  SUPPORT_PENDING,
  PAGE_SUPPORT_NEEDED,
  CIRCUMSTANTIAL
};

enum class CaptureScreenshotFormat {
  JPEG,
  PNG,
  WEBP
};

enum class CaptureSnapshotFormat {
  MHTML
};

enum class PrintToPDFTransferMode {
  RETURN_AS_BASE64,
  RETURN_AS_STREAM
};

enum class SetDownloadBehaviorBehavior {
  DENY,
  ALLOW,
  DEFAULT
};

enum class SetTouchEmulationEnabledConfiguration {
  MOBILE,
  DESKTOP
};

enum class StartScreencastFormat {
  JPEG,
  PNG
};

enum class SetWebLifecycleStateState {
  FROZEN,
  ACTIVE
};

enum class FileChooserOpenedMode {
  SELECT_SINGLE,
  SELECT_MULTIPLE
};

enum class FrameDetachedReason {
  REMOVE,
  SWAP
};

enum class DownloadProgressState {
  IN_PROGRESS,
  COMPLETED,
  CANCELED
};

}  // namespace page

}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPES_FORWARD_DECLARATIONS_PAGE_H_
