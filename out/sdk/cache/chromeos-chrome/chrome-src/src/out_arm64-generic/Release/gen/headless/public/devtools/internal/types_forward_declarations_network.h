// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPES_FORWARD_DECLARATIONS_NETWORK_H_
#define HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPES_FORWARD_DECLARATIONS_NETWORK_H_

#include "base/values.h"

namespace headless {

namespace network {
using Headers = base::Value;
class ResourceTiming;
class PostDataEntry;
class Request;
class SignedCertificateTimestamp;
class SecurityDetails;
class CorsErrorStatus;
class TrustTokenParams;
class ServiceWorkerRouterInfo;
class Response;
class WebSocketRequest;
class WebSocketResponse;
class WebSocketFrame;
class CachedResource;
class Initiator;
class Cookie;
class BlockedSetCookieWithReason;
class BlockedCookieWithReason;
class CookieParam;
class AuthChallenge;
class AuthChallengeResponse;
class RequestPattern;
class SignedExchangeSignature;
class SignedExchangeHeader;
class SignedExchangeError;
class SignedExchangeInfo;
class ConnectTiming;
class ClientSecurityState;
class CrossOriginOpenerPolicyStatus;
class CrossOriginEmbedderPolicyStatus;
class ContentSecurityPolicyStatus;
class SecurityIsolationStatus;
class ReportingApiReport;
class ReportingApiEndpoint;
class LoadNetworkResourcePageResult;
class LoadNetworkResourceOptions;
class SetAcceptedEncodingsParams;
class SetAcceptedEncodingsResult;
class ClearAcceptedEncodingsOverrideParams;
class ClearAcceptedEncodingsOverrideResult;
class CanClearBrowserCacheParams;
class CanClearBrowserCacheResult;
class CanClearBrowserCookiesParams;
class CanClearBrowserCookiesResult;
class CanEmulateNetworkConditionsParams;
class CanEmulateNetworkConditionsResult;
class ClearBrowserCacheParams;
class ClearBrowserCacheResult;
class ClearBrowserCookiesParams;
class ClearBrowserCookiesResult;
class ContinueInterceptedRequestParams;
class ContinueInterceptedRequestResult;
class DeleteCookiesParams;
class DeleteCookiesResult;
class DisableParams;
class DisableResult;
class EmulateNetworkConditionsParams;
class EmulateNetworkConditionsResult;
class EnableParams;
class EnableResult;
class GetAllCookiesParams;
class GetAllCookiesResult;
class GetCertificateParams;
class GetCertificateResult;
class GetCookiesParams;
class GetCookiesResult;
class GetResponseBodyParams;
class GetResponseBodyResult;
class GetRequestPostDataParams;
class GetRequestPostDataResult;
class GetResponseBodyForInterceptionParams;
class GetResponseBodyForInterceptionResult;
class TakeResponseBodyForInterceptionAsStreamParams;
class TakeResponseBodyForInterceptionAsStreamResult;
class ReplayXHRParams;
class ReplayXHRResult;
class SearchInResponseBodyParams;
class SearchInResponseBodyResult;
class SetBlockedURLsParams;
class SetBlockedURLsResult;
class SetBypassServiceWorkerParams;
class SetBypassServiceWorkerResult;
class SetCacheDisabledParams;
class SetCacheDisabledResult;
class SetCookieParams;
class SetCookieResult;
class SetCookiesParams;
class SetCookiesResult;
class SetExtraHTTPHeadersParams;
class SetExtraHTTPHeadersResult;
class SetAttachDebugStackParams;
class SetAttachDebugStackResult;
class SetRequestInterceptionParams;
class SetRequestInterceptionResult;
class SetUserAgentOverrideParams;
class SetUserAgentOverrideResult;
class StreamResourceContentParams;
class StreamResourceContentResult;
class GetSecurityIsolationStatusParams;
class GetSecurityIsolationStatusResult;
class EnableReportingApiParams;
class EnableReportingApiResult;
class LoadNetworkResourceParams;
class LoadNetworkResourceResult;
class DataReceivedParams;
class EventSourceMessageReceivedParams;
class LoadingFailedParams;
class LoadingFinishedParams;
class RequestInterceptedParams;
class RequestServedFromCacheParams;
class RequestWillBeSentParams;
class ResourceChangedPriorityParams;
class SignedExchangeReceivedParams;
class ResponseReceivedParams;
class WebSocketClosedParams;
class WebSocketCreatedParams;
class WebSocketFrameErrorParams;
class WebSocketFrameReceivedParams;
class WebSocketFrameSentParams;
class WebSocketHandshakeResponseReceivedParams;
class WebSocketWillSendHandshakeRequestParams;
class WebTransportCreatedParams;
class WebTransportConnectionEstablishedParams;
class WebTransportClosedParams;
class RequestWillBeSentExtraInfoParams;
class ResponseReceivedExtraInfoParams;
class TrustTokenOperationDoneParams;
class SubresourceWebBundleMetadataReceivedParams;
class SubresourceWebBundleMetadataErrorParams;
class SubresourceWebBundleInnerResponseParsedParams;
class SubresourceWebBundleInnerResponseErrorParams;
class ReportingApiReportAddedParams;
class ReportingApiReportUpdatedParams;
class ReportingApiEndpointsChangedForOriginParams;

enum class ResourceType {
  DOCUMENT,
  STYLESHEET,
  IMAGE,
  MEDIA,
  FONT,
  SCRIPT,
  TEXT_TRACK,
  XHR,
  FETCH,
  PREFETCH,
  EVENT_SOURCE,
  WEB_SOCKET,
  MANIFEST,
  SIGNED_EXCHANGE,
  PING,
  CSP_VIOLATION_REPORT,
  PREFLIGHT,
  OTHER
};

enum class ErrorReason {
  FAILED,
  ABORTED,
  TIMED_OUT,
  ACCESS_DENIED,
  CONNECTION_CLOSED,
  CONNECTION_RESET,
  CONNECTION_REFUSED,
  CONNECTION_ABORTED,
  CONNECTION_FAILED,
  NAME_NOT_RESOLVED,
  INTERNET_DISCONNECTED,
  ADDRESS_UNREACHABLE,
  BLOCKED_BY_CLIENT,
  BLOCKED_BY_RESPONSE
};

enum class ConnectionType {
  NONE,
  CELLULAR2G,
  CELLULAR3G,
  CELLULAR4G,
  BLUETOOTH,
  ETHERNET,
  WIFI,
  WIMAX,
  OTHER
};

enum class CookieSameSite {
  EXACT,
  LAX,
  NONE
};

enum class CookiePriority {
  LOW,
  MEDIUM,
  HIGH
};

enum class CookieSourceScheme {
  UNSET,
  NON_SECURE,
  SECURE
};

enum class ResourcePriority {
  VERY_LOW,
  LOW,
  MEDIUM,
  HIGH,
  VERY_HIGH
};

enum class CertificateTransparencyCompliance {
  UNKNOWN,
  NOT_COMPLIANT,
  COMPLIANT
};

enum class BlockedReason {
  OTHER,
  CSP,
  MIXED_CONTENT,
  ORIGIN,
  INSPECTOR,
  SUBRESOURCE_FILTER,
  CONTENT_TYPE,
  COEP_FRAME_RESOURCE_NEEDS_COEP_HEADER,
  COOP_SANDBOXED_IFRAME_CANNOT_NAVIGATE_TO_COOP_PAGE,
  CORP_NOT_SAME_ORIGIN,
  CORP_NOT_SAME_ORIGIN_AFTER_DEFAULTED_TO_SAME_ORIGIN_BY_COEP,
  CORP_NOT_SAME_SITE
};

enum class CorsError {
  DISALLOWED_BY_MODE,
  INVALID_RESPONSE,
  WILDCARD_ORIGIN_NOT_ALLOWED,
  MISSING_ALLOW_ORIGIN_HEADER,
  MULTIPLE_ALLOW_ORIGIN_VALUES,
  INVALID_ALLOW_ORIGIN_VALUE,
  ALLOW_ORIGIN_MISMATCH,
  INVALID_ALLOW_CREDENTIALS,
  CORS_DISABLED_SCHEME,
  PREFLIGHT_INVALID_STATUS,
  PREFLIGHT_DISALLOWED_REDIRECT,
  PREFLIGHT_WILDCARD_ORIGIN_NOT_ALLOWED,
  PREFLIGHT_MISSING_ALLOW_ORIGIN_HEADER,
  PREFLIGHT_MULTIPLE_ALLOW_ORIGIN_VALUES,
  PREFLIGHT_INVALID_ALLOW_ORIGIN_VALUE,
  PREFLIGHT_ALLOW_ORIGIN_MISMATCH,
  PREFLIGHT_INVALID_ALLOW_CREDENTIALS,
  PREFLIGHT_MISSING_ALLOW_EXTERNAL,
  PREFLIGHT_INVALID_ALLOW_EXTERNAL,
  PREFLIGHT_MISSING_ALLOW_PRIVATE_NETWORK,
  PREFLIGHT_INVALID_ALLOW_PRIVATE_NETWORK,
  INVALID_ALLOW_METHODS_PREFLIGHT_RESPONSE,
  INVALID_ALLOW_HEADERS_PREFLIGHT_RESPONSE,
  METHOD_DISALLOWED_BY_PREFLIGHT_RESPONSE,
  HEADER_DISALLOWED_BY_PREFLIGHT_RESPONSE,
  REDIRECT_CONTAINS_CREDENTIALS,
  INSECURE_PRIVATE_NETWORK,
  INVALID_PRIVATE_NETWORK_ACCESS,
  UNEXPECTED_PRIVATE_NETWORK_ACCESS,
  NO_CORS_REDIRECT_MODE_NOT_FOLLOW,
  PREFLIGHT_MISSING_PRIVATE_NETWORK_ACCESS_ID,
  PREFLIGHT_MISSING_PRIVATE_NETWORK_ACCESS_NAME,
  PRIVATE_NETWORK_ACCESS_PERMISSION_UNAVAILABLE,
  PRIVATE_NETWORK_ACCESS_PERMISSION_DENIED
};

enum class ServiceWorkerResponseSource {
  CACHE_STORAGE,
  HTTP_CACHE,
  FALLBACK_CODE,
  NETWORK
};

enum class TrustTokenOperationType {
  ISSUANCE,
  REDEMPTION,
  SIGNING
};

enum class AlternateProtocolUsage {
  ALTERNATIVE_JOB_WON_WITHOUT_RACE,
  ALTERNATIVE_JOB_WON_RACE,
  MAIN_JOB_WON_RACE,
  MAPPING_MISSING,
  BROKEN,
  DNS_ALPNH3_JOB_WON_WITHOUT_RACE,
  DNS_ALPNH3_JOB_WON_RACE,
  UNSPECIFIED_REASON
};

enum class SetCookieBlockedReason {
  SECURE_ONLY,
  SAME_SITE_STRICT,
  SAME_SITE_LAX,
  SAME_SITE_UNSPECIFIED_TREATED_AS_LAX,
  SAME_SITE_NONE_INSECURE,
  USER_PREFERENCES,
  THIRD_PARTY_PHASEOUT,
  THIRD_PARTY_BLOCKED_IN_FIRST_PARTY_SET,
  SYNTAX_ERROR,
  SCHEME_NOT_SUPPORTED,
  OVERWRITE_SECURE,
  INVALID_DOMAIN,
  INVALID_PREFIX,
  UNKNOWN_ERROR,
  SCHEMEFUL_SAME_SITE_STRICT,
  SCHEMEFUL_SAME_SITE_LAX,
  SCHEMEFUL_SAME_SITE_UNSPECIFIED_TREATED_AS_LAX,
  SAME_PARTY_FROM_CROSS_PARTY_CONTEXT,
  SAME_PARTY_CONFLICTS_WITH_OTHER_ATTRIBUTES,
  NAME_VALUE_PAIR_EXCEEDS_MAX_SIZE,
  DISALLOWED_CHARACTER,
  NO_COOKIE_CONTENT
};

enum class CookieBlockedReason {
  SECURE_ONLY,
  NOT_ON_PATH,
  DOMAIN_MISMATCH,
  SAME_SITE_STRICT,
  SAME_SITE_LAX,
  SAME_SITE_UNSPECIFIED_TREATED_AS_LAX,
  SAME_SITE_NONE_INSECURE,
  USER_PREFERENCES,
  THIRD_PARTY_PHASEOUT,
  THIRD_PARTY_BLOCKED_IN_FIRST_PARTY_SET,
  UNKNOWN_ERROR,
  SCHEMEFUL_SAME_SITE_STRICT,
  SCHEMEFUL_SAME_SITE_LAX,
  SCHEMEFUL_SAME_SITE_UNSPECIFIED_TREATED_AS_LAX,
  SAME_PARTY_FROM_CROSS_PARTY_CONTEXT,
  NAME_VALUE_PAIR_EXCEEDS_MAX_SIZE
};

enum class InterceptionStage {
  REQUEST,
  HEADERS_RECEIVED
};

enum class SignedExchangeErrorField {
  SIGNATURE_SIG,
  SIGNATURE_INTEGRITY,
  SIGNATURE_CERT_URL,
  SIGNATURE_CERT_SHA256,
  SIGNATURE_VALIDITY_URL,
  SIGNATURE_TIMESTAMPS
};

enum class ContentEncoding {
  DEFLATE,
  GZIP,
  BR,
  ZSTD
};

enum class PrivateNetworkRequestPolicy {
  ALLOW,
  BLOCK_FROM_INSECURE_TO_MORE_PRIVATE,
  WARN_FROM_INSECURE_TO_MORE_PRIVATE,
  PREFLIGHT_BLOCK,
  PREFLIGHT_WARN
};

enum class IPAddressSpace {
  LOCAL,
  PRIVATE,
  PUBLIC,
  UNKNOWN
};

enum class CrossOriginOpenerPolicyValue {
  SAME_ORIGIN,
  SAME_ORIGIN_ALLOW_POPUPS,
  RESTRICT_PROPERTIES,
  UNSAFE_NONE,
  SAME_ORIGIN_PLUS_COEP,
  RESTRICT_PROPERTIES_PLUS_COEP
};

enum class CrossOriginEmbedderPolicyValue {
  NONE,
  CREDENTIALLESS,
  REQUIRE_CORP
};

enum class ContentSecurityPolicySource {
  HTTP,
  META
};

enum class ReportStatus {
  QUEUED,
  PENDING,
  MARKED_FOR_REMOVAL,
  SUCCESS
};

enum class RequestReferrerPolicy {
  UNSAFE_URL,
  NO_REFERRER_WHEN_DOWNGRADE,
  NO_REFERRER,
  ORIGIN,
  ORIGIN_WHEN_CROSS_ORIGIN,
  SAME_ORIGIN,
  STRICT_ORIGIN,
  STRICT_ORIGIN_WHEN_CROSS_ORIGIN
};

enum class TrustTokenParamsRefreshPolicy {
  USE_CACHED,
  REFRESH
};

enum class InitiatorType {
  PARSER,
  SCRIPT,
  PRELOAD,
  SIGNED_EXCHANGE,
  PREFLIGHT,
  OTHER
};

enum class AuthChallengeSource {
  SERVER,
  PROXY
};

enum class AuthChallengeResponseResponse {
  DEFAULT,
  CANCEL_AUTH,
  PROVIDE_CREDENTIALS
};

enum class TrustTokenOperationDoneStatus {
  OK,
  INVALID_ARGUMENT,
  MISSING_ISSUER_KEYS,
  FAILED_PRECONDITION,
  RESOURCE_EXHAUSTED,
  ALREADY_EXISTS,
  UNAVAILABLE,
  UNAUTHORIZED,
  BAD_RESPONSE,
  INTERNAL_ERROR,
  UNKNOWN_ERROR,
  FULFILLED_LOCALLY
};

}  // namespace network

}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPES_FORWARD_DECLARATIONS_NETWORK_H_
